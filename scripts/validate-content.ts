/*
 * Validator for all course content.
 *
 *   npm run validate                         # everything (final check)
 *   npm run validate -- --unit calc1-u04-rules [--unit ...]
 *                                            # only those units; glossary links may
 *                                            # point at ids from scripts/glossary-master.ts
 *   npm run validate -- --glossary           # only glossary + formula sheets
 *   npm run validate -- --allow-stubs        # don't fail on unwritten lessons
 *
 * Beyond structure it proves the math renders and the answers are computable:
 *   • every $…$ span, math block, derivation line and tex field compiles with KaTeX
 *   • every graph expression parses, uses only known variables, and is finite somewhere
 *   • every numeric answer evaluates to a finite number
 *   • every expression answer parses, uses only its declared variables and is
 *     defined at enough sample points of its checking domain
 *
 * Exit code is non-zero when any ERROR is found. WARNINGS are advisory.
 */
import katex from 'katex';
import 'katex/contrib/mhchem';
import type { AlgoBlock, Block, FigureBlock, GraphBlock, Plot3DBlock, Lesson, Step, QuestionStep, GlossaryEntry, ReadingRef, NumOrExpr } from '../src/content/types';
import { compile, equivalent, evalConst, parse, variablesOf, type Env } from '../src/lib/mathexpr';
import { MATH_GLOSSARY_IDS } from './glossary-master';
import { loadContent } from './load-content';

const args = process.argv.slice(2);
const units = new Set<string>();
let glossaryOnly = false;
let allowStubs = false;
for (let i = 0; i < args.length; i++) {
  if (args[i] === '--unit') units.add(args[++i]);
  else if (args[i] === '--glossary') glossaryOnly = true;
  else if (args[i] === '--allow-stubs') allowStubs = true;
}
const partial = units.size > 0 || glossaryOnly;
const { courses, glossary, cheatSheets, loadProblems } = await loadContent(units, { glossary: !partial || glossaryOnly });

const errors: string[] = [];
const warnings: string[] = [];
const err = (where: string, msg: string) => errors.push(`✗ ${where}: ${msg}`);
const warn = (where: string, msg: string) => warnings.push(`! ${where}: ${msg}`);

const masterIds = new Set(Object.keys(MATH_GLOSSARY_IDS));
const definedIds = new Set(glossary.map((g) => g.id));
const resolvable = (id: string) => definedIds.has(id) || (partial && masterIds.has(id));

const KEBAB = /^[a-z0-9]+(-[a-z0-9]+)*$/;
const PREFIX: Record<string, string> = { algebra: 'alg-', trig: 'trig-', calc1: 'calc1-', calc2: 'calc2-', calc3: 'calc3-', linalg: 'la-', chem: 'chem-', genchem: 'gchem-', orgo: 'ochem-', discrete: 'dm-', stats: 'stat-', dsa: 'dsa-', phys1: 'phys-' };

// ----------------------------------------------------------------------- TeX
function checkTex(where: string, tex: string, display = false) {
  if (typeof tex !== 'string' || !tex.trim()) {
    err(where, 'empty TeX');
    return;
  }
  try {
    katex.renderToString(tex, { displayMode: display, throwOnError: true, strict: 'ignore' });
  } catch (e) {
    err(where, `TeX does not compile: ${(e as Error).message.replace(/^KaTeX parse error: /, '')} in "${tex.slice(0, 80)}"`);
  }
}

// ---------------------------------------------------------------- inline text
function checkInline(where: string, text: string) {
  if (typeof text !== 'string') {
    err(where, `expected a string, got ${typeof text}`);
    return;
  }
  if (!text.trim()) err(where, 'empty text');
  const unescaped = text.replace(/\\\$/g, '');
  const dollars = (unescaped.match(/\$/g) ?? []).length;
  if (dollars % 2 === 1) err(where, 'odd number of $ — unbalanced math span? (write a literal dollar as \\$)');
  for (const m of unescaped.matchAll(/\$\$([^$]+)\$\$|\$([^$]+)\$/g)) checkTex(where, m[1] ?? m[2], m[1] !== undefined);
  // Code and math spans are literal: `[[x]]` inside them is not markup.
  const prose = unescaped.replace(/`[^`]+`/g, '``').replace(/\$\$[^$]+\$\$|\$[^$]+\$/g, '$$');
  for (const m of prose.matchAll(/\[\[([^\]|]+)(?:\|[^\]]+)?\]\]/g)) {
    const id = m[1].trim();
    if (!resolvable(id)) err(where, `unknown glossary id [[${id}]]`);
  }
  for (const m of prose.matchAll(/\]\(([^)]+)\)/g)) {
    if (!/^https:\/\//.test(m[1])) err(where, `link must be https: ${m[1]}`);
  }
  const ticks = (prose.match(/`/g) ?? []).length;
  if (ticks % 2 === 1) warn(where, 'odd number of backticks — unbalanced `code` span?');
  const stars = (prose.match(/\*\*/g) ?? []).length;
  if (stars % 2 === 1) warn(where, 'odd number of ** — unbalanced bold?');
  if (/\\\(|\\\[/.test(prose)) warn(where, 'found \\( or \\[ — use $…$ for inline math');
}

function lineCount(code: string) {
  return code.split('\n').length;
}

function parseLines(spec: number | string | number[]): number[] {
  if (typeof spec === 'number') return [spec];
  if (Array.isArray(spec)) return spec;
  const m = /^(\d+)\s*-\s*(\d+)$/.exec(spec.trim());
  if (m) {
    const out: number[] = [];
    for (let i = +m[1]; i <= +m[2]; i++) out.push(i);
    return out;
  }
  const n = Number(spec);
  return Number.isInteger(n) ? [n] : [];
}

function checkReading(where: string, refs: ReadingRef[]) {
  refs.forEach((r, i) => {
    const w = `${where} reading[${i}]`;
    if (!r.title?.trim()) err(w, 'missing title');
    if (!/^https:\/\//.test(r.url ?? '')) err(w, `url must be https: ${r.url}`);
    if (r.note) checkInline(w + ' note', r.note);
  });
}

// --------------------------------------------------------------------- graphs
/** "8.99e9" in a key or graph expression means 8.99·e·9 (Euler's number), not 8.99×10⁹. */
function checkNoENotation(where: string, src: string) {
  if (/[0-9.]e[+-]?\d/.test(src)) err(where, `"${src}" looks like e-notation, which evaluates as Euler's number here; write 8.99*10^9`);
}

function checkExpr(where: string, src: string, allowed: string[]): ((env: Env) => number) | null {
  checkNoENotation(where, src);
  try {
    const node = parse(src);
    const bad = [...variablesOf(node)].filter((v) => !allowed.includes(v));
    if (bad.length) {
      err(where, `expression "${src}" uses unknown variable(s) ${bad.join(', ')} (allowed: ${allowed.join(', ') || 'none'})`);
      return null;
    }
    const f = compile(node);
    return (env) => {
      try {
        return f(env);
      } catch {
        return NaN;
      }
    };
  } catch (e) {
    err(where, `expression "${src}" does not parse: ${(e as Error).message}`);
    return null;
  }
}

function checkGraph(where: string, g: GraphBlock) {
  const [x0, x1] = g.x ?? [];
  const [y0, y1] = g.y ?? [];
  if (!(x1 > x0) || !(y1 > y0)) {
    err(where, 'graph needs x: [min, max] and y: [min, max] with min < max');
    return;
  }
  if (g.caption) checkInline(where + ' caption', g.caption);
  const sliders = g.sliders ?? [];
  const params: Env = {};
  for (const s of sliders) {
    if (!/^[a-zA-Z]$/.test(s.name) || ['x', 'y', 't', 'e'].includes(s.name)) err(where, `slider name "${s.name}" must be a single letter other than x, y, t, e`);
    if (!(s.max > s.min) || s.value < s.min || s.value > s.max) err(where, `slider ${s.name} needs min < value < max`);
    if (s.label) checkInline(where + ' slider label', s.label);
    params[s.name] = s.value;
  }
  const names = Object.keys(params);
  // `mayHide`: points whose coordinates are undefined for some slider values are simply hidden.
  const num = (w: string, v: NumOrExpr | undefined, mayHide = false) => {
    if (v === undefined || typeof v === 'number') return;
    const f = checkExpr(w, v, names);
    if (f && !mayHide && !Number.isFinite(f(params))) err(w, `"${v}" is not a finite number`);
  };
  const curveFinite = (w: string, f: (env: Env) => number, v: string, a: number, b: number) => {
    let ok = 0;
    for (let k = 0; k <= 200; k++) if (Number.isFinite(f({ ...params, [v]: a + ((b - a) * k) / 200 }))) ok++;
    if (ok === 0) err(w, 'curve is undefined everywhere in the window');
  };
  let drawables = 0;
  g.functions?.forEach((f, i) => {
    drawables++;
    const w = `${where} functions[${i}]`;
    if (f.label) checkInline(w + ' label', f.label);
    f.domain?.forEach((d) => num(w + ' domain', d));
    const ev = checkExpr(w, f.expr, ['x', ...names]);
    if (ev) curveFinite(w, ev, 'x', x0, x1);
  });
  g.parametric?.forEach((c, i) => {
    drawables++;
    const w = `${where} parametric[${i}]`;
    if (c.label) checkInline(w + ' label', c.label);
    c.t.forEach((d) => num(w + ' t', d));
    checkExpr(w, c.x, ['t', ...names]);
    checkExpr(w, c.y, ['t', ...names]);
  });
  g.polar?.forEach((c, i) => {
    drawables++;
    const w = `${where} polar[${i}]`;
    if (c.label) checkInline(w + ' label', c.label);
    c.theta?.forEach((d) => num(w + ' theta', d));
    checkExpr(w, c.expr, ['theta', 't', ...names]);
  });
  g.implicit?.forEach((c, i) => {
    drawables++;
    const w = `${where} implicit[${i}]`;
    if (c.label) checkInline(w + ' label', c.label);
    c.levels?.forEach((l) => num(w + ' level', l));
    const f = checkExpr(w, c.expr, ['x', 'y', ...names]);
    if (f) {
      // The curve must actually appear: the expression minus some level changes sign in the window.
      const levels = (c.levels ?? [0]).map((l) => (typeof l === 'number' ? l : (checkExpr(w, l, names)?.(params) ?? NaN)));
      let found = false;
      for (const lev of levels) {
        let pos = false, neg = false;
        for (let a = 0; a <= 40 && !(pos && neg); a++)
          for (let b = 0; b <= 40; b++) {
            const v = f({ ...params, x: x0 + ((x1 - x0) * a) / 40, y: y0 + ((y1 - y0) * b) / 40 }) - lev;
            if (v > 0) pos = true;
            else if (v < 0) neg = true;
          }
        if (pos && neg) found = true;
      }
      if (!found) err(w, `implicit curve "${c.expr}" never reaches its level(s) inside the window`);
    }
  });
  if (g.field) {
    drawables++;
    checkExpr(`${where} field.x`, g.field.x, ['x', 'y', ...names]);
    checkExpr(`${where} field.y`, g.field.y, ['x', 'y', ...names]);
  }
  g.points?.forEach((p, i) => {
    drawables++;
    num(`${where} points[${i}].x`, p.x, true);
    num(`${where} points[${i}].y`, p.y, true);
  });
  g.segments?.forEach((s, i) => {
    drawables++;
    [...s.from, ...s.to].forEach((v) => num(`${where} segments[${i}]`, v));
  });
  g.vlines?.forEach((v, i) => num(`${where} vlines[${i}]`, v.x));
  g.hlines?.forEach((h, i) => num(`${where} hlines[${i}]`, h.y));
  g.areas?.forEach((a, i) => {
    drawables++;
    const w = `${where} areas[${i}]`;
    checkExpr(w, a.expr, ['x', ...names]);
    if (a.expr2) checkExpr(w, a.expr2, ['x', ...names]);
    num(w, a.from);
    num(w, a.to);
  });
  if (g.riemann) {
    drawables++;
    const w = `${where} riemann`;
    checkExpr(w, g.riemann.expr, ['x', ...names]);
    num(w, g.riemann.from);
    num(w, g.riemann.to);
    num(w, g.riemann.n);
  }
  g.tangents?.forEach((t, i) => {
    const w = `${where} tangents[${i}]`;
    checkExpr(w, t.expr, ['x', ...names]);
    num(w, t.at);
    num(w, t.secantTo);
  });
  g.readouts?.forEach((r, i) => {
    const w = `${where} readouts[${i}]`;
    checkInline(w + ' label', r.label);
    num(w, r.expr);
  });
  if (drawables === 0) err(where, 'graph draws nothing (add functions, parametric, polar, points or segments)');
}

function checkPlot3D(where: string, g: Plot3DBlock) {
  const ok = (r?: [number, number]) => !!r && r[1] > r[0];
  if (!ok(g.x) || !ok(g.y) || !ok(g.z)) {
    err(where, 'plot3d needs x, y and z ranges [min, max] with min < max');
    return;
  }
  if (g.caption) checkInline(where + ' caption', g.caption);
  const params: Env = {};
  for (const s of g.sliders ?? []) {
    if (!/^[a-zA-Z]$/.test(s.name) || ['x', 'y', 'z', 't', 'u', 'v', 'e'].includes(s.name))
      err(where, `slider name "${s.name}" must be a single letter other than x, y, z, t, u, v, e`);
    if (!(s.max > s.min) || s.value < s.min || s.value > s.max) err(where, `slider ${s.name} needs min < value < max`);
    if (s.label) checkInline(where + ' slider label', s.label);
    params[s.name] = s.value;
  }
  const names = Object.keys(params);
  const num = (w: string, v: NumOrExpr | undefined) => {
    if (v === undefined || typeof v === 'number') return;
    const f = checkExpr(w, v, names);
    if (f && !Number.isFinite(f(params))) err(w, `"${v}" is not a finite number`);
  };
  const [x0, x1] = g.x, [y0, y1] = g.y, [z0, z1] = g.z;
  let drawables = 0;
  g.surfaces?.forEach((s, i) => {
    drawables++;
    const w = `${where} surfaces[${i}]`;
    if (s.label) checkInline(w + ' label', s.label);
    [...(s.xDomain ?? []), ...(s.yDomain ?? [])].forEach((d) => num(w + ' domain', d));
    const f = checkExpr(w, s.expr, ['x', 'y', ...names]);
    if (f) {
      let inside = 0;
      for (let a = 0; a <= 20; a++)
        for (let b = 0; b <= 20; b++) {
          const z = f({ ...params, x: x0 + ((x1 - x0) * a) / 20, y: y0 + ((y1 - y0) * b) / 20 });
          if (Number.isFinite(z) && z >= z0 && z <= z1) inside++;
        }
      if (inside === 0) err(w, `surface "${s.expr}" never lies inside the z-range [${z0}, ${z1}]`);
    }
  });
  g.parametricSurfaces?.forEach((s, i) => {
    drawables++;
    const w = `${where} parametricSurfaces[${i}]`;
    if (s.label) checkInline(w + ' label', s.label);
    [...s.u, ...s.v].forEach((d) => num(w + ' range', d));
    [s.x, s.y, s.z].forEach((e) => checkExpr(w, e, ['u', 'v', ...names]));
  });
  g.curves?.forEach((c, i) => {
    drawables++;
    const w = `${where} curves[${i}]`;
    if (c.label) checkInline(w + ' label', c.label);
    c.t.forEach((d) => num(w + ' t', d));
    [c.x, c.y, c.z].forEach((e) => checkExpr(w, e, ['t', ...names]));
  });
  g.points?.forEach((p, i) => {
    drawables++;
    [p.x, p.y, p.z].forEach((v) => num(`${where} points[${i}]`, v));
  });
  g.segments?.forEach((v, i) => {
    drawables++;
    [...v.from, ...v.to].forEach((c) => num(`${where} segments[${i}]`, c));
  });
  g.vectors?.forEach((v, i) => {
    drawables++;
    [...v.from, ...v.to].forEach((c) => num(`${where} vectors[${i}]`, c));
  });
  if (g.field) {
    drawables++;
    [g.field.x, g.field.y, g.field.z].forEach((e) => checkExpr(`${where} field`, e, ['x', 'y', 'z', ...names]));
  }
  g.contours?.forEach((c) => num(`${where} contours`, c));
  if (g.contours?.length && !g.surfaces?.length) err(where, 'contours need a surface (they are level curves of the first surface)');
  g.readouts?.forEach((r, i) => {
    checkInline(`${where} readouts[${i}] label`, r.label);
    num(`${where} readouts[${i}]`, r.expr);
  });
  if (drawables === 0) err(where, 'plot3d draws nothing (add surfaces, parametricSurfaces, curves, points, vectors or field)');
}

function checkAlgo(where: string, a: AlgoBlock) {
  if (a.caption) checkInline(where + ' caption', a.caption);
  if (!Array.isArray(a.frames) || a.frames.length < 2) {
    err(where, 'algo needs at least 2 frames');
    return;
  }
  const codeLines = a.code ? a.code.split('\n').length : 0;
  if (a.code && /\t/.test(a.code)) warn(where, 'algo code contains tab characters; indent with spaces');
  const ids = new Set<string>();
  if (a.view === 'graph') {
    if (!a.nodes?.length) err(where, 'algo graph view needs nodes');
    const W = a.width ?? 420, H = a.height ?? 260;
    for (const nd of a.nodes ?? []) {
      if (ids.has(nd.id)) err(where, `duplicate node id "${nd.id}"`);
      ids.add(nd.id);
      if (nd.x < 18 || nd.x > W - 18 || nd.y < 18 || nd.y > H - 30) warn(where, `node "${nd.id}" at (${nd.x}, ${nd.y}) is too close to the edge of the ${W}×${H} box`);
    }
    for (const e of a.edges ?? []) if (!ids.has(e.from) || !ids.has(e.to)) err(where, `edge ${e.from}→${e.to} uses an unknown node`);
  } else if (a.view !== 'array') {
    err(where, `algo view must be 'array' or 'graph'`);
  }
  let len = -1;
  a.frames.forEach((f, i) => {
    const w = `${where} frame ${i + 1}`;
    if (!f.note?.trim()) err(w, 'frame needs a note');
    else checkInline(w + ' note', f.note);
    f.vars?.forEach(([k]) => checkInline(w + ' var', k));
    f.lines?.forEach((l) => {
      if (!a.code) err(w, 'lines given but the block has no code');
      else if (!Number.isInteger(l) || l < 1 || l > codeLines) err(w, `line ${l} is outside the code (${codeLines} lines)`);
    });
    if (a.view === 'array') {
      if (f.array) len = f.array.length;
      if (i === 0 && !f.array) err(w, 'the first frame must set array');
      if (a.bars && f.array?.some((v) => typeof v !== 'number')) err(w, 'bars need numeric values');
      const inRange = (k: number, lab: string, allowEnd = false) => {
        if (!Number.isInteger(k) || k < 0 || k > (allowEnd ? len : len - 1)) err(w, `${lab} index ${k} is outside the array (length ${len})`);
      };
      f.marks?.forEach((m) => inRange(m.index, 'mark'));
      f.dim?.forEach((k) => inRange(k, 'dim'));
      f.pointers?.forEach((p) => inRange(p.index, `pointer ${p.label}`, true));
      if (f.nodeColors || f.edgeColors || f.nodeNotes) err(w, 'graph fields in an array view');
    } else {
      const known = (id: string, lab: string) => {
        if (!ids.has(id)) err(w, `${lab} refers to unknown node "${id}"`);
      };
      f.nodeColors?.forEach((c) => known(c.id, 'nodeColors'));
      f.nodeNotes?.forEach((c) => known(c.id, 'nodeNotes'));
      f.nodeLabels?.forEach((c) => known(c.id, 'nodeLabels'));
      f.hidden?.forEach((id) => known(id, 'hidden'));
      f.edgeColors?.forEach((e) => {
        known(e.from, 'edgeColors');
        known(e.to, 'edgeColors');
        if (!(a.edges ?? []).some((x) => (x.from === e.from && x.to === e.to) || (!x.directed && x.from === e.to && x.to === e.from)))
          err(w, `edgeColors ${e.from}→${e.to} is not an edge`);
      });
      f.hiddenEdges?.forEach((e) => {
        if (!(a.edges ?? []).some((x) => (x.from === e.from && x.to === e.to) || (!x.directed && x.from === e.to && x.to === e.from)))
          err(w, `hiddenEdges ${e.from}→${e.to} is not an edge`);
      });
      if (f.array || f.marks || f.pointers) err(w, 'array fields in a graph view');
    }
  });
}

// --------------------------------------------------------------------- blocks
interface LessonStats {
  why: number;
  worked: number;
  graphs: number;
}

// ------------------------------------------------------------------- figures
function checkFigure(where: string, b: FigureBlock) {
  const svg = b.svg ?? '';
  if (!/^\s*<svg[\s>]/.test(svg)) err(where, 'figure svg must start with <svg');
  if (!/<svg[^>]*\bviewBox=/.test(svg)) err(where, 'figure <svg> needs a viewBox so it can scale');
  if (/<script|\son[a-z]+\s*=|javascript:|<image|<foreignObject|xlink:href="http/i.test(svg))
    err(where, 'figure svg may not contain scripts, event handlers, external images or foreignObject');
  // Balanced tags (a cheap well-formedness check).
  const stack: string[] = [];
  for (const m of svg.replace(/<!--[\s\S]*?-->/g, '').matchAll(/<(\/?)([a-zA-Z][\w:-]*)([^>]*?)(\/?)>/g)) {
    const [, close, name, , self] = m;
    if (self) continue;
    if (close) {
      if (stack.pop() !== name) {
        err(where, `figure svg: unexpected </${name}>`);
        return;
      }
    } else stack.push(name);
  }
  if (stack.length) err(where, `figure svg: unclosed <${stack[stack.length - 1]}>`);
  for (const tag of svg.matchAll(/<[a-zA-Z][^>]*>/g)) {
    const names = [...tag[0].matchAll(/\s([a-zA-Z:-]+)=/g)].map((m) => m[1]);
    const dup = names.find((n, i) => names.indexOf(n) !== i);
    if (dup) {
      err(where, `figure svg: duplicate ${dup}="…" attribute (the browser keeps only the first): ${tag[0].slice(0, 80)}`);
      break;
    }
  }
  if (!b.alt?.trim()) err(where, 'figure needs alt text');
  if (b.caption) checkInline(where + ' caption', b.caption);
}

function checkBlocks(where: string, blocks: Block[], stats: LessonStats) {
  if (!Array.isArray(blocks) || blocks.length === 0) {
    err(where, 'no blocks');
    return;
  }
  blocks.forEach((b, i) => {
    const w = `${where} block[${i}](${b.type})`;
    switch (b.type) {
      case 'p':
      case 'heading':
        checkInline(w, b.text);
        break;
      case 'math':
        checkTex(w, b.tex, true);
        if (b.caption) checkInline(w + ' caption', b.caption);
        break;
      case 'derivation':
        stats.worked++;
        if (b.title) checkInline(w + ' title', b.title);
        if (!b.steps?.length || b.steps.length < 2) err(w, 'derivation needs at least 2 steps');
        b.steps?.forEach((s, si) => {
          checkTex(`${w} step[${si}]`, s.tex, true);
          if (s.why) checkInline(`${w} step[${si}] why`, s.why);
        });
        if (b.steps && b.steps.filter((s) => s.why).length < Math.ceil(b.steps.length / 2))
          warn(w, 'most derivation steps should explain *why* (add `why` to more steps)');
        if (b.result) checkInline(w + ' result', b.result);
        break;
      case 'graph':
        stats.graphs++;
        checkGraph(w, b);
        break;
      case 'figure':
        stats.graphs++;
        checkFigure(w, b);
        break;
      case 'plot3d':
        stats.graphs++;
        checkPlot3D(w, b);
        break;
      case 'algo':
        stats.graphs++;
        checkAlgo(w, b);
        break;
      case 'theorem':
        checkInline(w + ' name', b.name);
        if (b.tex) checkTex(w, b.tex, true);
        if (b.text) checkInline(w, b.text);
        if (!b.tex && !b.text) err(w, 'theorem needs tex or text');
        break;
      case 'code': {
        if (!b.code?.trim()) err(w, 'empty code');
        const n = lineCount(b.code);
        if (b.annotations?.length) stats.worked++;
        b.annotations?.forEach((a, ai) => {
          const ls = parseLines(a.lines);
          if (ls.length === 0) err(`${w} annotation[${ai}]`, `bad lines spec ${JSON.stringify(a.lines)}`);
          for (const l of ls) if (l < 1 || l > n) err(`${w} annotation[${ai}]`, `line ${l} out of range 1..${n}`);
          checkInline(`${w} annotation[${ai}]`, a.text);
        });
        b.highlight?.forEach((l) => {
          if (l < 1 || l > n) err(w, `highlight line ${l} out of range`);
        });
        if (b.runnable && (b.lang ?? 'cpp') !== 'cpp') err(w, 'runnable code must be C++');
        if (b.runnable && !/\bmain\s*\(/.test(b.code)) err(w, 'runnable code has no main()');
        break;
      }
      case 'callout':
        if (b.variant === 'why') stats.why++;
        if (b.title) checkInline(w + ' title', b.title);
        checkInline(w, b.text);
        break;
      case 'list':
        if (!b.items?.length) err(w, 'empty list');
        b.items?.forEach((it, ii) => checkInline(`${w} item[${ii}]`, it));
        break;
      case 'table':
        if (!b.headers?.length) err(w, 'table without headers');
        b.headers.forEach((h, hi) => checkInline(`${w} header[${hi}]`, h));
        b.rows.forEach((r, ri) => {
          if (r.length !== b.headers.length) err(w, `row ${ri} has ${r.length} cells, expected ${b.headers.length}`);
          r.forEach((c, ci) => checkInline(`${w} row[${ri}][${ci}]`, c));
        });
        if (b.caption) checkInline(w + ' caption', b.caption);
        break;
      case 'deepdive':
        checkInline(w + ' title', b.title);
        checkBlocks(w, b.blocks, stats);
        break;
      case 'compare':
        for (const side of [b.left, b.right]) {
          if (!side?.title) err(w, 'compare side missing title');
          else checkInline(w + ' title', side.title);
          if (!side.code && !side.text && !side.tex?.length) err(w, 'compare side needs tex, code or text');
          if (side.text) checkInline(w, side.text);
          side.tex?.forEach((t) => checkTex(w, t, true));
        }
        break;
      case 'steps':
        if (!b.items?.length) err(w, 'empty steps');
        b.items.forEach((s, si) => {
          checkInline(`${w} step[${si}] title`, s.title);
          checkInline(`${w} step[${si}]`, s.text);
        });
        break;
      case 'definition':
        checkInline(w + ' term', b.term);
        checkInline(w, b.text);
        break;
      default:
        err(w, `unknown block type ${(b as { type: string }).type}`);
    }
  });
}

// ------------------------------------------------------------------ questions
function checkQuestion(where: string, q: QuestionStep, stats: LessonStats) {
  checkInline(where + ' prompt', q.prompt);
  checkInline(where + ' explanation', q.explanation);
  if ((q.explanation ?? '').length < 60) warn(where, 'explanation is very short — teach the "why"');
  if (q.hint) checkInline(where + ' hint', q.hint);
  if (q.tex) checkTex(where + ' tex', q.tex, true);
  if (q.graph) {
    stats.graphs++;
    checkGraph(where + ' graph', q.graph);
  }
  if (q.figure) {
    stats.graphs++;
    checkFigure(where + ' figure', q.figure);
  }
  if (q.plot3d) {
    stats.graphs++;
    checkPlot3D(where + ' plot3d', q.plot3d);
  }
  switch (q.kind) {
    case 'mcq': {
      if (q.options.length < 3) err(where, 'mcq needs at least 3 options');
      const correct = q.options.filter((o) => o.correct).length;
      if (q.multi ? correct < 1 : correct !== 1) err(where, `mcq has ${correct} correct options`);
      const seen = new Set<string>();
      q.options.forEach((o, i) => {
        if (seen.has(o.text)) err(where, `duplicate option "${o.text}"`);
        seen.add(o.text);
        if (!q.codeOptions) checkInline(`${where} option[${i}]`, o.text);
        if (!o.why) warn(`${where} option[${i}]`, 'option has no "why" explanation');
        else checkInline(`${where} option[${i}] why`, o.why);
      });
      break;
    }
    case 'truefalse':
      if (typeof q.answer !== 'boolean') err(where, 'truefalse answer must be boolean');
      break;
    case 'fill': {
      const count = (q.template.match(/___/g) ?? []).length;
      if (count === 0) err(where, 'fill template has no ___ blanks');
      if (count !== q.blanks.length) err(where, `template has ${count} blanks but ${q.blanks.length} answers`);
      if (!q.templateIsCode) {
        const segs = q.template.split('___');
        if (segs.some((seg) => (seg.replace(/\\\$/g, '').match(/\$/g) ?? []).length % 2 === 1))
          err(where, 'a ___ blank is inside a $…$ math span; close the math before the blank and reopen after it');
        else segs.forEach((seg, si) => seg.trim() && checkInline(`${where} template segment[${si}]`, seg));
      }
      q.blanks.forEach((b, i) => {
        if (!b.answers?.length || b.answers.some((a) => !a.trim())) err(where, `blank ${i} has an empty answer`);
        if (q.wordBank && !q.templateIsCode) b.answers.forEach((a) => checkInline(`${where} blank[${i}]`, a));
      });
      if (q.wordBank) {
        const bank = q.wordBank;
        if (!q.templateIsCode) bank.forEach((w, wi) => checkInline(`${where} wordBank[${wi}]`, w));
        // Repeated chips are allowed (one per blank that shares the answer); each chip is placed once.
        q.blanks.forEach((b, i) => {
          if (!b.answers.some((a) => bank.includes(a))) err(where, `no accepted answer for blank ${i} is in the word bank`);
        });
        if (bank.length <= q.blanks.length) warn(where, 'word bank has no distractors');
      }
      break;
    }
    case 'order':
      if (q.lines.length < 3) err(where, 'order question needs at least 3 lines');
      if (new Set(q.lines).size !== q.lines.length) err(where, 'order lines must be distinct');
      if (!q.linesAreCode) [...q.lines, ...(q.distractors ?? [])].forEach((l, i) => checkInline(`${where} line[${i}]`, l));
      q.distractors?.forEach((d) => {
        if (q.lines.includes(d)) err(where, `distractor "${d}" is also a correct line`);
      });
      break;
    case 'error': {
      if (q.lines.length < 3) err(where, 'error question needs at least 3 lines');
      q.lines.forEach((l, i) => checkInline(`${where} line[${i}]`, l));
      if (!q.errorLines?.length) err(where, 'error question has no errorLines');
      q.errorLines?.forEach((l) => {
        if (l < 1 || l > q.lines.length) err(where, `error line ${l} out of range 1..${q.lines.length}`);
      });
      break;
    }
    case 'numeric': {
      const answers = Array.isArray(q.answer) ? q.answer : [q.answer];
      if (!answers.length) err(where, 'numeric question has no answer');
      for (const a of answers) {
        checkNoENotation(where, a);
        try {
          const node = parse(a);
          if (variablesOf(node).size) err(where, `numeric answer "${a}" must not contain variables`);
          else if (!Number.isFinite(evalConst(a))) err(where, `numeric answer "${a}" does not evaluate to a finite number`);
        } catch (e) {
          err(where, `numeric answer "${a}" does not parse: ${(e as Error).message}`);
        }
      }
      if (q.answerTex) checkTex(where + ' answerTex', q.answerTex);
      if (q.label) checkInline(where + ' label', q.label);
      if (q.unit) checkInline(where + ' unit', q.unit);
      break;
    }
    case 'expr': {
      const vars = q.variables ?? ['x'];
      try {
        const node = parse(q.answer);
        const bad = [...variablesOf(node)].filter((v) => !vars.includes(v));
        if (bad.length) err(where, `expr answer "${q.answer}" uses undeclared variable(s) ${bad.join(', ')} — set variables`);
        else {
          const self = equivalent(q.answer, q.answer, { variables: vars, domain: q.domain, upToConstant: q.upToConstant });
          if (!self.ok) err(where, `expr answer "${q.answer}" is undefined at most sample points of domain ${JSON.stringify(q.domain ?? [-3, 3])} — set a domain inside where it is defined`);
        }
      } catch (e) {
        err(where, `expr answer "${q.answer}" does not parse: ${(e as Error).message}`);
      }
      if (q.answerTex) checkTex(where + ' answerTex', q.answerTex);
      if (q.label) checkInline(where + ' label', q.label);
      break;
    }
    default:
      err(where, `unknown step kind ${(q as { kind: string }).kind}`);
  }
}

// -------------------------------------------------------------------- lessons
const lessonIds = new Set<string>();
const questionIds = new Set<string>();
let checkedLessons = 0;
let stubCount = 0;
let questionCount = 0;
let conceptCount = 0;

function checkLesson(where: string, lesson: Lesson, courseId: string) {
  const w = `${where} › ${lesson.id}`;
  const prefix = PREFIX[courseId];
  if (!KEBAB.test(lesson.id)) err(w, 'lesson id must be kebab-case');
  if (!lesson.id.startsWith(prefix)) err(w, `lesson id must start with "${prefix}"`);
  if (lessonIds.has(lesson.id)) err(w, 'duplicate lesson id');
  lessonIds.add(lesson.id);
  if (lesson.summary === 'This lesson is being written.') {
    stubCount++;
    if (!allowStubs) err(w, 'lesson is still a stub');
    return;
  }
  checkedLessons++;
  checkInline(w + ' title', lesson.title);
  checkInline(w + ' summary', lesson.summary);
  if (!(lesson.minutes > 0)) err(w, 'minutes must be > 0');
  if (lesson.objectives.length < 3) err(w, 'needs at least 3 objectives');
  lesson.objectives.forEach((o, i) => checkInline(`${w} objective[${i}]`, o));
  if (lesson.takeaways.length < 4) err(w, 'needs at least 4 takeaways');
  lesson.takeaways.forEach((t, i) => checkInline(`${w} takeaway[${i}]`, t));
  if (lesson.reading.length < 2) err(w, 'needs at least 2 reading references');
  checkReading(w, lesson.reading);

  const stats: LessonStats = { why: 0, worked: 0, graphs: 0 };
  let concepts = 0;
  let questions = 0;
  let computed = 0;
  const kinds = new Set<string>();
  lesson.steps.forEach((s: Step, i) => {
    const sw = `${w} step[${i}](${s.kind})`;
    if (s.kind === 'concept') {
      concepts++;
      checkInline(sw + ' title', s.title);
      checkBlocks(sw, s.blocks, stats);
    } else {
      questions++;
      kinds.add(s.kind);
      if (s.kind === 'numeric' || s.kind === 'expr') computed++;
      const qid = s.id ?? `${lesson.id}#${i}`;
      if (questionIds.has(qid)) err(sw, `duplicate question id ${qid}`);
      questionIds.add(qid);
      checkQuestion(sw, s, stats);
    }
  });
  conceptCount += concepts;
  questionCount += questions;
  if (lesson.steps[0]?.kind !== 'concept') err(w, 'first step must be a concept');
  if (concepts < 4) err(w, `needs at least 4 concept steps (has ${concepts})`);
  if (questions < 6) err(w, `needs at least 6 questions (has ${questions})`);
  if (kinds.size < 4) err(w, `needs at least 4 question kinds (has ${[...kinds].join(', ')})`);
  if (computed < 2) err(w, `needs at least 2 numeric/expr questions where the learner computes an answer (has ${computed})`);
  if (stats.why < 1) err(w, 'needs at least one callout with variant "why"');
  if (stats.worked < 1) err(w, 'needs at least one worked example (a `derivation` block)');
  if (stats.graphs < 1 && courseId !== 'algebra') warn(w, 'no graph or figure — most ideas are clearer with a picture');
  let run = 0;
  lesson.steps.forEach((s, i) => {
    run = s.kind === 'concept' ? 0 : run + 1;
    const next = lesson.steps[i + 1];
    if (run >= 4 && next?.kind === 'concept') warn(w, `${run} questions in a row before step ${i + 1}`);
  });
}

if (!glossaryOnly) {
  const unitIds = new Set<string>();
  for (const course of courses) {
    for (const unit of course.units) {
      if (unitIds.has(unit.id)) err(unit.id, 'duplicate unit id');
      unitIds.add(unit.id);
      const selected = units.size === 0 || units.has(unit.id);
      for (const lesson of unit.lessons) {
        if (selected) checkLesson(`${course.id} › ${unit.id}`, lesson, course.id);
        else lessonIds.add(lesson.id);
      }
    }
  }
  for (const u of units) if (!unitIds.has(u)) err(u, 'no such unit');
}

// ------------------------------------------------------------------- glossary
function checkGlossary() {
  const ids = new Set<string>();
  const terms = new Map<string, string>();
  glossary.forEach((g: GlossaryEntry) => {
    const w = `glossary › ${g.id}`;
    if (!KEBAB.test(g.id)) err(w, 'id must be kebab-case');
    if (ids.has(g.id)) err(w, 'duplicate glossary id');
    ids.add(g.id);
    const t = g.term.toLowerCase();
    if (terms.has(t)) warn(w, `same term as ${terms.get(t)}`);
    terms.set(t, g.id);
    checkInline(w + ' short', g.short);
    if (g.long) checkInline(w + ' long', g.long);
    if (g.tex) checkTex(w + ' tex', g.tex, true);
    g.see?.forEach((s) => {
      if (!definedIds.has(s) && !(partial && masterIds.has(s))) err(w, `see: unknown id ${s}`);
    });
    if (g.reading) checkReading(w, g.reading);
  });
  if (!partial || glossaryOnly) {
    for (const id of masterIds) if (!definedIds.has(id)) (partial ? warn : err)('glossary', `master id "${id}" is not defined`);
  }
  const sheetIds = new Set<string>();
  cheatSheets.forEach((s) => {
    const w = `formula sheet › ${s.id}`;
    if (sheetIds.has(s.id)) err(w, 'duplicate sheet id');
    sheetIds.add(s.id);
    if (!s.sections.length) err(w, 'no sections');
    // Descriptions and section titles render inside buttons/links, so math is fine but glossary links are not.
    checkInline(w + ' description', s.description);
    if (/\[\[/.test(s.description)) err(w, 'description: no [[glossary]] links (it is shown inside a button)');
    s.sections.forEach((sec) => {
      checkInline(`${w} › ${sec.title} (title)`, sec.title);
      if (/\[\[/.test(sec.title)) err(w, `section title "${sec.title}": no [[glossary]] links (shown inside a link)`);
    });
    s.sections.forEach((sec) =>
      sec.items.forEach((it, i) => {
        const iw = `${w} › ${sec.title}[${i}]`;
        if (!it.code && !it.text && !it.tex) err(iw, 'item needs tex, code or text');
        checkInline(iw + ' label', it.label);
        if (it.tex) checkTex(iw, it.tex, true);
        if (it.text) checkInline(iw, it.text);
      }),
    );
  });
}
if (!partial || glossaryOnly) checkGlossary();

// ---------------------------------------------------- source-level TeX check
// In a TS string '\\;' is TeX's thin space, but a single '\;' (or '\,', '\!')
// is just ';' at runtime — the backslash silently disappears and a stray
// semicolon shows up in the rendered formula. Only visible in the source.
{
  const { readdirSync, readFileSync, statSync } = await import('node:fs');
  const { join } = await import('node:path');
  const walk = (dir: string): string[] =>
    readdirSync(dir).flatMap((f) => {
      const p = join(dir, f);
      return statSync(p).isDirectory() ? walk(p) : p.endsWith('.ts') ? [p] : [];
    });
  for (const file of walk('src/content')) {
    readFileSync(file, 'utf8')
      .split('\n')
      .forEach((line, i) => {
        if (/\bfrom\s+['"](node:|fs['"]|path['"])|\brequire\(/.test(line))
          err(`${file}:${i + 1}`, 'content files run in the browser — no Node imports (node:fs, path, require); inline the data instead');
        if (/(?<!\\)\\[;,!]/.test(line)) err(`${file}:${i + 1}`, 'single backslash before ; , or ! in a string — write \\\\; (TeX spacing) so the backslash survives');
      });
  }
}

// --------------------------------------------------------------------- report
if (loadProblems.length)
  console.log('Note: some shared files failed to load (probably mid-edit by another author):\n  ' + loadProblems.join('\n  ') + '\n');
if (warnings.length) console.log(warnings.join('\n') + '\n');
if (errors.length) console.log(errors.join('\n') + '\n');
console.log(
  `Checked ${checkedLessons} lessons (${conceptCount} concept steps, ${questionCount} questions), ` +
    `${glossary.length} glossary entries, ${cheatSheets.length} formula sheets. ` +
    `${stubCount} stub lesson(s). ${errors.length} error(s), ${warnings.length} warning(s).`,
);
process.exit(errors.length ? 1 : 0);
