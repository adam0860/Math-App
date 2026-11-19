import { useEffect, useMemo, useRef, useState, type PointerEvent as RPointerEvent } from 'react';
import type { GraphColor, NumOrExpr, Plot3DBlock } from '../content/types';
import { compileExpr, type Env } from '../lib/mathexpr';
import { Inline } from './RichText';
import { PlayButton, Readouts, SliderPanel, useSliders } from './Sliders';

/*
 * Rotatable 3D plots for multivariable calculus: surfaces z = f(x, y), parametric
 * surfaces, space curves, points, vectors and vector fields, drawn as SVG with the
 * painter's algorithm (farthest first) and simple two-sided shading. Drag sideways
 * to turn it (and up/down with a mouse to tilt); ⟳ spins it.
 */

const W = 600;
const COLORS: GraphColor[] = ['blue', 'red', 'green', 'purple', 'orange', 'teal'];
const DEG = Math.PI / 180;

type V3 = [number, number, number];

function fn(src: string): (env: Env) => number {
  const f = compileExpr(src);
  return (env) => {
    if (!f) return NaN;
    try {
      return f(env);
    } catch {
      return NaN;
    }
  };
}

function num(v: NumOrExpr | undefined, env: Env, fallback = NaN): number {
  if (v === undefined) return fallback;
  if (typeof v === 'number') return v;
  return fn(v)(env);
}

type Item =
  | { kind: 'face'; pts: [number, number][]; depth: number; color: GraphColor; alpha: number }
  | { kind: 'line'; a: [number, number]; b: [number, number]; depth: number; color: GraphColor | 'axis' | 'box'; width: number; dashed?: boolean }
  | { kind: 'arrow'; a: [number, number]; b: [number, number]; depth: number; color: GraphColor; width: number }
  | { kind: 'point'; p: [number, number]; depth: number; color: GraphColor };

interface Label {
  x: number;
  y: number;
  text: string;
  cls: string;
  anchor?: 'start' | 'middle' | 'end';
}

export function Plot3D({ g, compact }: { g: Plot3DBlock; compact?: boolean }) {
  const sliderState = useSliders(g.sliders);
  const { params } = sliderState;
  const env: Env = params;
  const [az, setAz] = useState(g.view?.azimuth ?? 30);
  const [el, setEl] = useState(g.view?.elevation ?? 25);
  const [spin, setSpin] = useState(false);
  const drag = useRef<{ x: number; y: number; az: number; el: number; mouse: boolean } | null>(null);

  useEffect(() => {
    if (!spin) return;
    let raf = 0;
    let last = performance.now();
    const tick = (now: number) => {
      const dt = Math.min(0.1, (now - last) / 1000);
      last = now;
      setAz((a) => (a + 24 * dt) % 360);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [spin]);

  const H = g.height ?? (compact ? 300 : 360);
  const [x0, x1] = g.x;
  const [y0, y1] = g.y;
  const [z0, z1] = g.z;

  const scene = useMemo(() => {
    // Normalised coordinates: the box maps to [-hx, hx] × [-hy, hy] × [-hz, hz].
    const cx = (x0 + x1) / 2, cy = (y0 + y1) / 2, cz = (z0 + z1) / 2;
    const rx = (x1 - x0) / 2, ry = (y1 - y0) / 2, rz = (z1 - z0) / 2;
    const m = Math.max(rx, ry, rz);
    const [kx, ky, kz] = g.equal ? [1 / m, 1 / m, 1 / m] : [1 / rx, 1 / ry, 1 / rz];
    const norm = (p: V3): V3 => [(p[0] - cx) * kx, (p[1] - cy) * ky, (p[2] - cz) * kz];
    const a = -(90 + az) * DEG;
    const e = el * DEG;
    const ca = Math.cos(a), sa = Math.sin(a), ce = Math.cos(e), se = Math.sin(e);
    // Fit the box at any azimuth: its horizontal reach is the xy half-diagonal; the vertical reach depends on the tilt.
    const Rxy = Math.hypot(rx * kx, ry * ky);
    const Rv = rz * kz * Math.abs(ce) + Rxy * Math.abs(se);
    const scale = Math.min((W / 2 - 24) / Rxy, (H / 2 - 22) / Rv);
    // Project a data point: screen x, screen y, depth (larger = farther).
    const proj = (p: V3): [number, number, number] => {
      const [nx, ny, nz] = norm(p);
      const xr = nx * ca - ny * sa;
      const yr = nx * sa + ny * ca;
      const up = nz * ce + yr * se;
      const depth = yr * ce - nz * se;
      return [W / 2 + xr * scale, H / 2 - up * scale, depth];
    };
    // Unit vector from the scene toward the camera, in normalised coordinates.
    const toCam: V3 = [-sa * ce, -ca * ce, se];
    const tol = 1e-6 * Math.max(x1 - x0, y1 - y0, z1 - z0);
    const inBox = (p: V3) =>
      p.every(Number.isFinite) && p[0] >= x0 - tol && p[0] <= x1 + tol && p[1] >= y0 - tol && p[1] <= y1 + tol && p[2] >= z0 - tol && p[2] <= z1 + tol;

    // Sutherland–Hodgman clipping of a polygon against the six faces of the box.
    const clipToBox = (poly: V3[]): V3[] => {
      const planes: [number, number, 1 | -1][] = [
        [0, x0, 1], [0, x1, -1], [1, y0, 1], [1, y1, -1], [2, z0, 1], [2, z1, -1],
      ];
      let out = poly;
      for (const [axis, bound, sign] of planes) {
        if (out.length === 0) break;
        const inp = out;
        out = [];
        const inside = (p: V3) => sign * (p[axis] - bound) >= -tol;
        for (let k = 0; k < inp.length; k++) {
          const A = inp[k];
          const B = inp[(k + 1) % inp.length];
          const ai = inside(A), bi = inside(B);
          if (ai) out.push(A);
          if (ai !== bi) {
            const t = (bound - A[axis]) / (B[axis] - A[axis]);
            out.push([A[0] + (B[0] - A[0]) * t, A[1] + (B[1] - A[1]) * t, A[2] + (B[2] - A[2]) * t]);
          }
        }
      }
      return out;
    };

    const items: Item[] = [];
    const labels: Label[] = [];
    const res = Math.max(6, Math.min(50, Math.round(g.resolution ?? 26)));

    const addMesh = (grid: V3[][], color: GraphColor, opacity: number) => {
      for (let i = 0; i < grid.length - 1; i++) {
        for (let j = 0; j < grid[i].length - 1; j++) {
          const q = [grid[i][j], grid[i + 1][j], grid[i + 1][j + 1], grid[i][j + 1]];
          if (!q.every((p) => p.every(Number.isFinite))) continue;
          // Clip the quad to the box so surfaces end cleanly at its walls. A quad that spans far
          // more than the box (next to a pole) is dropped instead of drawn as a wall.
          const zs = q.map((p) => p[2]);
          const zlo = Math.min(...zs), zhi = Math.max(...zs);
          if (zhi - zlo > 3 * (z1 - z0) || (zlo < z0 && zhi > z1)) continue;
          const poly = q.every(inBox) ? q : clipToBox(q);
          if (poly.length < 3) continue;
          const P = poly.map(proj);
          const n0 = norm(q[0]), n1 = norm(q[1]), n3 = norm(q[3]), n2 = norm(q[2]);
          const u: V3 = [n2[0] - n0[0], n2[1] - n0[1], n2[2] - n0[2]];
          const v: V3 = [n3[0] - n1[0], n3[1] - n1[1], n3[2] - n1[2]];
          const nx = u[1] * v[2] - u[2] * v[1], ny = u[2] * v[0] - u[0] * v[2], nz = u[0] * v[1] - u[1] * v[0];
          const L = Math.hypot(nx, ny, nz) || 1;
          const b = Math.abs((nx * toCam[0] + ny * toCam[1] + nz * toCam[2]) / L);
          items.push({
            kind: 'face',
            pts: P.map((p) => [p[0], p[1]] as [number, number]),
            depth: P.reduce((acc, p) => acc + p[2], 0) / P.length,
            color,
            alpha: opacity * (0.38 + 0.55 * b),
          });
        }
      }
    };

    const legend: { label: string; color: GraphColor; dashed?: boolean }[] = [];
    let ci = 0;
    const firstSurface: { f: (env: Env) => number; xa: number; xb: number; ya: number; yb: number } | null = (() => {
      const s = g.surfaces?.[0];
      if (!s) return null;
      return { f: fn(s.expr), xa: num(s.xDomain?.[0], env, x0), xb: num(s.xDomain?.[1], env, x1), ya: num(s.yDomain?.[0], env, y0), yb: num(s.yDomain?.[1], env, y1) };
    })();

    (g.surfaces ?? []).forEach((s) => {
      const color = s.color ?? COLORS[ci++ % COLORS.length];
      if (s.label) legend.push({ label: s.label, color });
      const f = fn(s.expr);
      const xa = num(s.xDomain?.[0], env, x0), xb = num(s.xDomain?.[1], env, x1);
      const ya = num(s.yDomain?.[0], env, y0), yb = num(s.yDomain?.[1], env, y1);
      const grid: V3[][] = [];
      for (let i = 0; i <= res; i++) {
        const x = xa + ((xb - xa) * i) / res;
        const row: V3[] = [];
        for (let j = 0; j <= res; j++) {
          const y = ya + ((yb - ya) * j) / res;
          row.push([x, y, f({ ...env, x, y })]);
        }
        grid.push(row);
      }
      addMesh(grid, color, s.opacity ?? 0.85);
    });

    (g.parametricSurfaces ?? []).forEach((s) => {
      const color = s.color ?? COLORS[ci++ % COLORS.length];
      if (s.label) legend.push({ label: s.label, color });
      const fx = fn(s.x), fy = fn(s.y), fz = fn(s.z);
      const ua = num(s.u[0], env, 0), ub = num(s.u[1], env, 1);
      const va = num(s.v[0], env, 0), vb = num(s.v[1], env, 1);
      const grid: V3[][] = [];
      for (let i = 0; i <= res; i++) {
        const u = ua + ((ub - ua) * i) / res;
        const row: V3[] = [];
        for (let j = 0; j <= res; j++) {
          const v = va + ((vb - va) * j) / res;
          const ev = { ...env, u, v };
          row.push([fx(ev), fy(ev), fz(ev)]);
        }
        grid.push(row);
      }
      addMesh(grid, color, s.opacity ?? 0.85);
    });

    const pushLine = (p: V3, q: V3, color: GraphColor | 'axis' | 'box', width: number, dashed?: boolean) => {
      const P = proj(p), Q = proj(q);
      items.push({ kind: 'line', a: [P[0], P[1]], b: [Q[0], Q[1]], depth: (P[2] + Q[2]) / 2, color, width, dashed });
    };

    (g.curves ?? []).forEach((c) => {
      const color = c.color ?? COLORS[ci++ % COLORS.length];
      if (c.label) legend.push({ label: c.label, color, dashed: c.dashed });
      const fx = fn(c.x), fy = fn(c.y), fz = fn(c.z);
      const ta = num(c.t[0], env, 0), tb = num(c.t[1], env, 1);
      const N = 300;
      let prev: V3 | null = null;
      for (let k = 0; k <= N; k++) {
        const t = ta + ((tb - ta) * k) / N;
        const ev = { ...env, t };
        const p: V3 = [fx(ev), fy(ev), fz(ev)];
        const ok = inBox(p);
        if (ok && prev) pushLine(prev, p, color, 3, c.dashed);
        prev = ok ? p : null;
      }
    });

    // Level curves of the first surface, drawn on the floor of the box.
    if (firstSurface && g.contours?.length) {
      const { f, xa, xb, ya, yb } = firstSurface;
      const N = 60;
      const vals: number[][] = [];
      for (let i = 0; i <= N; i++) {
        const row: number[] = [];
        for (let j = 0; j <= N; j++) row.push(f({ ...env, x: xa + ((xb - xa) * i) / N, y: ya + ((yb - ya) * j) / N }));
        vals.push(row);
      }
      const at = (i: number, j: number): V3 => [xa + ((xb - xa) * i) / N, ya + ((yb - ya) * j) / N, z0];
      g.contours.forEach((lv) => {
        const lev = num(lv, env);
        if (!Number.isFinite(lev)) return;
        for (let i = 0; i < N; i++) {
          for (let j = 0; j < N; j++) {
            const c = [vals[i][j] - lev, vals[i + 1][j] - lev, vals[i + 1][j + 1] - lev, vals[i][j + 1] - lev];
            if (!c.every(Number.isFinite)) continue;
            const corners: [number, number][] = [[i, j], [i + 1, j], [i + 1, j + 1], [i, j + 1]];
            const pts: V3[] = [];
            for (let k = 0; k < 4; k++) {
              const A = c[k], B = c[(k + 1) % 4];
              if ((A < 0) !== (B < 0)) {
                const t = A / (A - B);
                const [ia, ja] = corners[k];
                const [ib, jb] = corners[(k + 1) % 4];
                pts.push(at(ia + (ib - ia) * t, ja + (jb - ja) * t));
              }
            }
            for (let k = 0; k + 1 < pts.length; k += 2) pushLine(pts[k], pts[k + 1], g.contourColor ?? 'purple', 1.8);
          }
        }
      });
    }

    const arrow = (p: V3, q: V3, color: GraphColor, width: number) => {
      const P = proj(p), Q = proj(q);
      items.push({ kind: 'arrow', a: [P[0], P[1]], b: [Q[0], Q[1]], depth: Math.min(P[2], Q[2]) - 1e-3, color, width });
    };

    (g.segments ?? []).forEach((sg) => {
      const p = sg.from.map((c) => num(c, env)) as V3;
      const q = sg.to.map((c) => num(c, env)) as V3;
      if (![...p, ...q].every(Number.isFinite)) return;
      pushLine(p, q, sg.color ?? 'gray', 2.4, sg.dashed);
    });

    (g.vectors ?? []).forEach((v) => {
      const p = v.from.map((c) => num(c, env)) as V3;
      const q = v.to.map((c) => num(c, env)) as V3;
      if (![...p, ...q].every(Number.isFinite)) return;
      const color = v.color ?? 'red';
      arrow(p, q, color, 3);
      if (v.label) {
        const Q = proj(q);
        labels.push({ x: Q[0] + 8, y: Q[1] - 8, text: v.label, cls: 'g-label' });
      }
    });

    if (g.field) {
      const F = g.field;
      const fp = fn(F.x), fq = fn(F.y), fr = fn(F.z);
      const n = Math.max(2, Math.min(8, Math.round(F.n ?? 5)));
      const samples: { p: V3; d: V3 }[] = [];
      let max = 0;
      for (let i = 0; i < n; i++)
        for (let j = 0; j < n; j++)
          for (let k = 0; k < n; k++) {
            const p: V3 = [x0 + ((i + 0.5) * (x1 - x0)) / n, y0 + ((j + 0.5) * (y1 - y0)) / n, z0 + ((k + 0.5) * (z1 - z0)) / n];
            const ev = { ...env, x: p[0], y: p[1], z: p[2] };
            const d: V3 = [fp(ev), fq(ev), fr(ev)];
            if (!d.every(Number.isFinite)) continue;
            const nd = [d[0] * kx, d[1] * ky, d[2] * kz];
            max = Math.max(max, Math.hypot(nd[0], nd[1], nd[2]));
            samples.push({ p, d });
          }
      const cell = (2 / n) * 0.8;
      const s = max > 0 ? cell / max : 0;
      samples.forEach(({ p, d }) => {
        if (!(Math.hypot(...d) > 0)) return;
        const h: V3 = [(d[0] * s) / kx / 2, (d[1] * s) / ky / 2, (d[2] * s) / kz / 2];
        arrow([p[0] - h[0], p[1] - h[1], p[2] - h[2]], [p[0] + h[0], p[1] + h[1], p[2] + h[2]], F.color ?? 'gray', 1.8);
      });
    }

    (g.points ?? []).forEach((pt) => {
      const p: V3 = [num(pt.x, env), num(pt.y, env), num(pt.z, env)];
      if (!p.every(Number.isFinite)) return;
      const P = proj(p);
      items.push({ kind: 'point', p: [P[0], P[1]], depth: P[2] - 1e-3, color: pt.color ?? 'red' });
      if (pt.label) labels.push({ x: P[0] + 9, y: P[1] - 9, text: pt.label, cls: 'g-label' });
    });

    // Bounding box and axes.
    const corners: V3[] = [];
    for (const X of [x0, x1]) for (const Y of [y0, y1]) for (const Z of [z0, z1]) corners.push([X, Y, Z]);
    for (let i = 0; i < 8; i++)
      for (let j = i + 1; j < 8; j++) {
        const d = [0, 1, 2].filter((k) => corners[i][k] !== corners[j][k]).length;
        if (d === 1) pushLine(corners[i], corners[j], 'box', 1);
      }
    const origin = x0 <= 0 && 0 <= x1 && y0 <= 0 && 0 <= y1 && z0 <= 0 && 0 <= z1;
    const o: V3 = origin ? [0, 0, 0] : [x0, y0, z0];
    const ends: [V3, string][] = [
      [[x1, o[1], o[2]], 'x'],
      [[o[0], y1, o[2]], 'y'],
      [[o[0], o[1], z1], 'z'],
    ];
    ends.forEach(([p, name]) => {
      pushLine(o, p, 'axis', 1.6);
      const P = proj(p), O = proj(o);
      const dx = P[0] - O[0], dy = P[1] - O[1];
      const L = Math.hypot(dx, dy) || 1;
      labels.push({ x: P[0] + (dx / L) * 12, y: P[1] + (dy / L) * 12 + 5, text: name, cls: 'p3-axis-label', anchor: 'middle' });
    });
    // Tick values at the ends of the edges through the min corner.
    const fmt = (v: number) => String(Math.round(v * 100) / 100).replace('-', '−');
    const tick = (p: V3, text: string) => {
      const P = proj(p);
      labels.push({ x: P[0], y: P[1] + 14, text, cls: 'p3-tick', anchor: 'middle' });
    };
    tick([x1, y0, z0], fmt(x1));
    tick([x0, y1, z0], fmt(y1));
    tick([x0, y0, z1], fmt(z1));

    items.sort((p, q) => q.depth - p.depth);
    return { items, labels, legend };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [g, params, az, el, H]);

  const onDown = (e: RPointerEvent<SVGSVGElement>) => {
    drag.current = { x: e.clientX, y: e.clientY, az, el, mouse: e.pointerType === 'mouse' };
    setSpin(false);
    (e.currentTarget as Element).setPointerCapture?.(e.pointerId);
  };
  const onMove = (e: RPointerEvent<SVGSVGElement>) => {
    const d = drag.current;
    if (!d) return;
    const r = (e.currentTarget as Element).getBoundingClientRect();
    const k = 360 / Math.max(200, r.width);
    setAz(d.az - (e.clientX - d.x) * k * 0.6);
    if (d.mouse) setEl(Math.max(-85, Math.min(85, d.el + (e.clientY - d.y) * k * 0.6)));
  };
  const onUp = () => {
    drag.current = null;
  };

  const { items, labels, legend } = scene;
  return (
    <figure className={`graph plot3d${compact ? ' compact' : ''}`}>
      <div className="graph-canvas">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="graph-svg p3-svg"
          role="img"
          aria-label={g.caption ? g.caption.replace(/[$`*]/g, '') : '3D plot'}
          onPointerDown={onDown}
          onPointerMove={onMove}
          onPointerUp={onUp}
          onPointerCancel={onUp}
        >
          {items.map((it, i) => {
            if (it.kind === 'face')
              return <polygon key={i} points={it.pts.map((p) => `${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' ')} className={`p3-face c-${it.color}`} style={{ fillOpacity: it.alpha }} />;
            if (it.kind === 'line')
              return (
                <line
                  key={i}
                  x1={it.a[0]}
                  y1={it.a[1]}
                  x2={it.b[0]}
                  y2={it.b[1]}
                  className={it.color === 'box' ? 'p3-box' : it.color === 'axis' ? 'p3-axis' : `p3-line c-${it.color}${it.dashed ? ' dashed' : ''}`}
                  strokeWidth={it.width}
                />
              );
            if (it.kind === 'arrow') {
              const [ax, ay] = it.a, [bx, by] = it.b;
              const ang = Math.atan2(by - ay, bx - ax);
              const len = Math.hypot(bx - ax, by - ay);
              const h = Math.min(10, Math.max(4, len * 0.35));
              return (
                <g key={i} className={`p3-arrow c-${it.color}`}>
                  <line x1={ax} y1={ay} x2={bx} y2={by} strokeWidth={it.width} />
                  {len > 2 && (
                    <path
                      d={`M${bx},${by} L${bx - h * Math.cos(ang - 0.42)},${by - h * Math.sin(ang - 0.42)} L${bx - h * Math.cos(ang + 0.42)},${by - h * Math.sin(ang + 0.42)} Z`}
                      stroke="none"
                    />
                  )}
                </g>
              );
            }
            return <circle key={i} cx={it.p[0]} cy={it.p[1]} r={5.5} className={`g-pt c-${it.color}`} />;
          })}
          {labels.map((l, i) => (
            <text key={`l${i}`} x={l.x} y={l.y} className={l.cls} textAnchor={l.anchor ?? 'start'}>
              {l.text}
            </text>
          ))}
        </svg>
        <div className="p3-controls">
          <PlayButton on={spin} onToggle={() => setSpin((s) => !s)} label="Spin" />
        </div>
      </div>
      {legend.length > 0 && (
        <div className="graph-legend">
          {legend.map((l, i) => (
            <span key={i} className="graph-key">
              <span className={`graph-swatch c-${l.color}${l.dashed ? ' dashed' : ''}`} />
              <Inline text={l.label} />
            </span>
          ))}
        </div>
      )}
      <SliderPanel sliders={g.sliders} state={sliderState} />
      <Readouts readouts={g.readouts} env={env} />
      <figcaption>
        {g.caption && <Inline text={g.caption} />}
        <span className="p3-hint">Drag sideways to turn it.</span>
      </figcaption>
    </figure>
  );
}
