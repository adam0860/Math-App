import { useId, useMemo, useRef, useState, type PointerEvent } from 'react';
import type { GraphBlock, GraphColor, NumOrExpr } from '../content/types';
import { compileExpr, type Env } from '../lib/mathexpr';
import { Inline } from './RichText';
import { Readouts, SliderPanel, fmtNum, useSliders } from './Sliders';

export { fmtNum };

/*
 * Interactive SVG plotter for lesson graphs: function / parametric / polar
 * curves, points, segments, shaded areas, Riemann sums, tangent lines and
 * sliders that feed parameters into every expression.
 */

const W = 600;
const COLORS: GraphColor[] = ['blue', 'red', 'green', 'purple', 'orange', 'teal'];

function num(v: NumOrExpr | undefined, env: Env, fallback = NaN): number {
  if (v === undefined) return fallback;
  if (typeof v === 'number') return v;
  const f = compileExpr(v);
  if (!f) return fallback;
  try {
    return f(env);
  } catch {
    return fallback;
  }
}

function fn(expr: string, vars: string[]): ((env: Env) => number) | null {
  const f = compileExpr(expr);
  if (!f) return null;
  return (env) => {
    try {
      return f(env);
    } catch {
      return NaN;
    }
  };
  void vars;
}

function niceStep(range: number): number {
  const raw = range / 8;
  const p = Math.pow(10, Math.floor(Math.log10(raw)));
  const m = raw / p;
  return (m < 1.5 ? 1 : m < 3.5 ? 2 : m < 7.5 ? 5 : 10) * p;
}

function fmtTick(v: number): string {
  if (Math.abs(v) < 1e-9) return '0';
  const a = Math.abs(v);
  let s: string;
  if (a >= 1e6 || a < 0.01) {
    // Very large or small: scientific, with as many digits as the tick needs (2.5×10⁻³).
    const [m, e] = v.toExponential().split('e');
    const mant = String(Math.round(Number(m) * 1000) / 1000);
    s = `${mant}×10${String(Number(e)).replace(/-/g, '⁻').replace(/\d/g, (d) => '⁰¹²³⁴⁵⁶⁷⁸⁹'[Number(d)])}`;
  } else if (a >= 1000) {
    // 1,000 – 999,999: plain digits with thousands separators (1,250 kJ/mol).
    s = (Math.round(v * 1000) / 1000).toLocaleString('en-US');
  } else {
    s = String(Math.round(v * 1000) / 1000);
  }
  return s.replace('-', '−');
}

function piLabel(k: number): string {
  // k = multiple of π/2
  if (k === 0) return '0';
  const sign = k < 0 ? '−' : '';
  const a = Math.abs(k);
  if (a % 2 === 0) return `${sign}${a / 2 === 1 ? '' : a / 2}π`;
  return `${sign}${a === 1 ? '' : a}π/2`;
}

export function Graph({ g, compact }: { g: GraphBlock; compact?: boolean }) {
  const uid = useId().replace(/[^a-zA-Z0-9_-]/g, '');
  const sliderState = useSliders(g.sliders);
  const { params } = sliderState;
  const [hover, setHover] = useState<number | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const env: Env = params;

  const [x0, x1] = g.x;
  const [y0, y1] = g.y;
  const H = g.equal ? Math.max(160, Math.min(560, (W * (y1 - y0)) / (x1 - x0))) : (g.height ?? (compact ? 240 : 300));
  const rev = !!g.xReversed;
  const sx = (x: number) => (rev ? (x1 - x) / (x1 - x0) : (x - x0) / (x1 - x0)) * W;
  const sy = (y: number) => H - ((y - y0) / (y1 - y0)) * H;
  const clampY = (y: number) => Math.max(-4 * H, Math.min(5 * H, y));

  const drawn = useMemo(() => {
    const paths: { d: string; color: GraphColor; dashed?: boolean; key: string }[] = [];
    const polyline = (pts: [number, number][], color: GraphColor, dashed: boolean | undefined, key: string) => {
      let d = '';
      let pen = false;
      let prevY = 0;
      for (const [px, py] of pts) {
        if (!Number.isFinite(px) || !Number.isFinite(py)) {
          pen = false;
          continue;
        }
        const X = sx(px);
        const Y = sy(py);
        // Break the stroke across asymptotes instead of drawing a vertical spike.
        if (pen && Math.abs(Y - prevY) > H * 1.5 && (Y < -H || Y > 2 * H || prevY < -H || prevY > 2 * H)) pen = false;
        d += `${pen ? 'L' : 'M'}${X.toFixed(2)},${clampY(Y).toFixed(2)}`;
        pen = true;
        prevY = Y;
      }
      if (d) paths.push({ d, color, dashed, key });
    };

    (g.functions ?? []).forEach((f, i) => {
      const ev = fn(f.expr, ['x']);
      if (!ev) return;
      const a = Math.max(x0, num(f.domain?.[0], env, x0));
      const b = Math.min(x1, num(f.domain?.[1], env, x1));
      const N = 700;
      const pts: [number, number][] = [];
      for (let k = 0; k <= N; k++) {
        const x = a + ((b - a) * k) / N;
        pts.push([x, ev({ ...env, x })]);
      }
      polyline(pts, f.color ?? COLORS[i % COLORS.length], f.dashed, `f${i}`);
    });
    (g.parametric ?? []).forEach((c, i) => {
      const fx = fn(c.x, ['t']);
      const fy = fn(c.y, ['t']);
      if (!fx || !fy) return;
      const a = num(c.t[0], env, 0);
      const b = num(c.t[1], env, 1);
      const pts: [number, number][] = [];
      for (let k = 0; k <= 500; k++) {
        const t = a + ((b - a) * k) / 500;
        pts.push([fx({ ...env, t }), fy({ ...env, t })]);
      }
      polyline(pts, c.color ?? COLORS[(i + 1) % COLORS.length], c.dashed, `p${i}`);
    });
    (g.polar ?? []).forEach((c, i) => {
      const fr = fn(c.expr, ['theta']);
      if (!fr) return;
      const a = num(c.theta?.[0], env, 0);
      const b = num(c.theta?.[1], env, 2 * Math.PI);
      const pts: [number, number][] = [];
      for (let k = 0; k <= 800; k++) {
        const th = a + ((b - a) * k) / 800;
        const r = fr({ ...env, theta: th, t: th });
        pts.push([r * Math.cos(th), r * Math.sin(th)]);
      }
      polyline(pts, c.color ?? COLORS[(i + 2) % COLORS.length], c.dashed, `r${i}`);
    });
    // Implicit / level curves by marching squares.
    (g.implicit ?? []).forEach((c, i) => {
      const f = fn(c.expr, ['x', 'y']);
      if (!f) return;
      const levels = (c.levels ?? [0]).map((l) => num(l, env)).filter(Number.isFinite);
      const NX = 150;
      const NY = Math.max(20, Math.round((NX * H) / W));
      const vals: number[] = new Array((NX + 1) * (NY + 1));
      for (let j = 0; j <= NY; j++) {
        const y = y0 + ((y1 - y0) * j) / NY;
        for (let k = 0; k <= NX; k++) vals[j * (NX + 1) + k] = f({ ...env, x: x0 + ((x1 - x0) * k) / NX, y });
      }
      const X = (k: number) => sx(x0 + ((x1 - x0) * k) / NX);
      const Y = (j: number) => sy(y0 + ((y1 - y0) * j) / NY);
      levels.forEach((lev, li) => {
        let d = '';
        for (let j = 0; j < NY; j++) {
          for (let k = 0; k < NX; k++) {
            const v00 = vals[j * (NX + 1) + k] - lev;
            const v10 = vals[j * (NX + 1) + k + 1] - lev;
            const v01 = vals[(j + 1) * (NX + 1) + k] - lev;
            const v11 = vals[(j + 1) * (NX + 1) + k + 1] - lev;
            if (![v00, v10, v01, v11].every(Number.isFinite)) continue;
            // Crossing points in grid coordinates (k, j).
            const pts: [number, number][] = [];
            const edge = (a: number, b: number, ka: number, ja: number, kb: number, jb: number) => {
              if ((a < 0) !== (b < 0)) {
                const t = a / (a - b);
                pts.push([ka + (kb - ka) * t, ja + (jb - ja) * t]);
              }
            };
            edge(v00, v10, k, j, k + 1, j);
            edge(v10, v11, k + 1, j, k + 1, j + 1);
            edge(v11, v01, k + 1, j + 1, k, j + 1);
            edge(v01, v00, k, j + 1, k, j);
            const span = Math.max(Math.abs(v00), Math.abs(v10), Math.abs(v01), Math.abs(v11));
            for (let q = 0; q + 1 < pts.length; q += 2) {
              const [ka, ja] = pts[q];
              const [kb, jb] = pts[q + 1];
              // A sign change across a pole (1/x, tan) is not a crossing: the midpoint stays far from the level.
              const mid = f({ ...env, x: x0 + ((x1 - x0) * (ka + kb)) / 2 / NX, y: y0 + ((y1 - y0) * (ja + jb)) / 2 / NY }) - lev;
              if (!Number.isFinite(mid) || Math.abs(mid) > span) continue;
              d += `M${X(ka).toFixed(2)},${Y(ja).toFixed(2)}L${X(kb).toFixed(2)},${Y(jb).toFixed(2)}`;
            }
          }
        }
        if (d) paths.push({ d, color: c.color ?? COLORS[(i + 3) % COLORS.length], dashed: c.dashed, key: `i${i}-${li}` });
      });
    });
    return paths;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [g, params, H]);

  const fieldArrows = useMemo(() => {
    const F = g.field;
    if (!F) return [];
    const fp = fn(F.x, ['x', 'y']);
    const fq = fn(F.y, ['x', 'y']);
    if (!fp || !fq) return [];
    const n = Math.max(3, Math.min(30, Math.round(F.n ?? 13)));
    const cw = W / n;
    const ch = H / Math.max(3, Math.round((n * H) / W));
    const ny = Math.round(H / ch);
    const raw: { X: number; Y: number; u: number; v: number }[] = [];
    let maxLen = 0;
    for (let j = 0; j < ny; j++) {
      for (let k = 0; k < n; k++) {
        const X = (k + 0.5) * cw;
        const Y = (j + 0.5) * ch;
        const x = x0 + (X / W) * (x1 - x0);
        const y = y1 - (Y / H) * (y1 - y0);
        const P = fp({ ...env, x, y });
        const Q = fq({ ...env, x, y });
        if (!Number.isFinite(P) || !Number.isFinite(Q)) continue;
        // Screen-space direction (y flips; respect unequal axis scales).
        const u = (P * W) / (x1 - x0);
        const v = (-Q * H) / (y1 - y0);
        maxLen = Math.max(maxLen, Math.hypot(u, v));
        raw.push({ X, Y, u, v });
      }
    }
    const cell = Math.min(cw, ch) * 0.85;
    const k = (F.scale ?? 1) * (maxLen > 0 ? cell / maxLen : 0);
    return raw
      .map(({ X, Y, u, v }) => {
        const L = Math.hypot(u, v);
        if (L < 1e-12) return null;
        const len = F.normalize ? cell * (F.scale ?? 1) * 0.8 : L * k;
        if (len < 1.5) return null;
        const dx = (u / L) * len, dy = (v / L) * len;
        const ax = X - dx / 2, ay = Y - dy / 2, bx = X + dx / 2, by = Y + dy / 2;
        const h = Math.min(7, len * 0.45), ang = Math.atan2(dy, dx);
        const p1 = [bx - h * Math.cos(ang - 0.45), by - h * Math.sin(ang - 0.45)];
        const p2 = [bx - h * Math.cos(ang + 0.45), by - h * Math.sin(ang + 0.45)];
        return `M${ax.toFixed(1)},${ay.toFixed(1)}L${bx.toFixed(1)},${by.toFixed(1)}M${p1[0].toFixed(1)},${p1[1].toFixed(1)}L${bx.toFixed(1)},${by.toFixed(1)}L${p2[0].toFixed(1)},${p2[1].toFixed(1)}`;
      })
      .filter((d): d is string => !!d);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [g.field, params, H]);

  const xStep = g.xStep === 'pi' ? Math.PI / 2 : (g.xStep ?? niceStep(x1 - x0));
  const yStep = g.yStep ?? (g.equal && g.xStep !== 'pi' ? xStep : niceStep(y1 - y0));
  const xTicks: number[] = [];
  for (let k = Math.ceil(x0 / xStep); k * xStep <= x1 + 1e-9; k++) xTicks.push(k);
  const yTicks: number[] = [];
  for (let k = Math.ceil(y0 / yStep); k * yStep <= y1 + 1e-9; k++) yTicks.push(k);
  // Label every other tick when they would crowd.
  const xLabelEvery = xTicks.length > 14 ? 2 : 1;
  const yLabelEvery = yTicks.length > 12 ? 2 : 1;
  const axisY = y0 <= 0 && y1 >= 0 ? sy(0) : y0 > 0 ? H : 0;
  // Window entirely to one side of 0: y-axis on the left edge for positive windows (also for reversed spectra), right for negative.
  const axisX = x0 <= 0 && x1 >= 0 ? sx(0) : x0 > 0 ? 0 : W;

  // Hover readout on the first function.
  const first = g.functions?.[0];
  const firstFn = first ? fn(first.expr, ['x']) : null;
  const onMove = (e: PointerEvent<SVGSVGElement>) => {
    if (!firstFn || !svgRef.current) return;
    const r = svgRef.current.getBoundingClientRect();
    const f = (e.clientX - r.left) / r.width;
    const x = rev ? x1 - f * (x1 - x0) : x0 + f * (x1 - x0);
    setHover(x);
  };
  const hoverY = hover !== null && firstFn ? firstFn({ ...env, x: hover }) : NaN;

  const riemann = g.riemann;
  const rects = useMemo(() => {
    if (!riemann) return [];
    const f = fn(riemann.expr, ['x']);
    if (!f) return [];
    const a = num(riemann.from, env);
    const b = num(riemann.to, env);
    const n = Math.max(1, Math.min(200, Math.round(num(riemann.n, env, 4))));
    const dx = (b - a) / n;
    const out: { pts: string; key: number }[] = [];
    for (let i = 0; i < n; i++) {
      const L = a + i * dx;
      const R = L + dx;
      if (riemann.method === 'trap') {
        out.push({ key: i, pts: `${sx(L)},${sy(0)} ${sx(L)},${clampY(sy(f({ ...env, x: L })))} ${sx(R)},${clampY(sy(f({ ...env, x: R })))} ${sx(R)},${sy(0)}` });
      } else {
        const xs = riemann.method === 'left' ? L : riemann.method === 'right' ? R : (L + R) / 2;
        const Y = clampY(sy(f({ ...env, x: xs })));
        out.push({ key: i, pts: `${sx(L)},${sy(0)} ${sx(L)},${Y} ${sx(R)},${Y} ${sx(R)},${sy(0)}` });
      }
    }
    return out;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [riemann, params, H]);

  const areas = (g.areas ?? []).map((ar, i) => {
    const f1 = fn(ar.expr, ['x']);
    const f2 = fn(ar.expr2 ?? '0', ['x']);
    if (!f1 || !f2) return null;
    const a = num(ar.from, env);
    const b = num(ar.to, env);
    if (!Number.isFinite(a) || !Number.isFinite(b)) return null;
    const N = 200;
    // Split into separate polygons wherever either curve is undefined (NaN/∞).
    const runs: { top: string[]; bottom: string[] }[] = [];
    let cur: { top: string[]; bottom: string[] } | null = null;
    for (let k = 0; k <= N; k++) {
      const x = a + ((b - a) * k) / N;
      const y1 = f1({ ...env, x });
      const y2 = f2({ ...env, x });
      if (!Number.isFinite(y1) || !Number.isFinite(y2)) {
        cur = null;
        continue;
      }
      if (!cur) runs.push((cur = { top: [], bottom: [] }));
      cur.top.push(`${sx(x).toFixed(2)},${clampY(sy(y1)).toFixed(2)}`);
      cur.bottom.unshift(`${sx(x).toFixed(2)},${clampY(sy(y2)).toFixed(2)}`);
    }
    return runs
      .filter((r) => r.top.length > 1)
      .map((r, j) => <polygon key={`a${i}-${j}`} points={[...r.top, ...r.bottom].join(' ')} className={`g-area c-${ar.color ?? 'blue'}`} />);
  });

  const tangents = (g.tangents ?? []).map((t, i) => {
    const f = fn(t.expr, ['x']);
    if (!f) return null;
    const a = num(t.at, env);
    const ya = f({ ...env, x: a });
    const h = 1e-5;
    let slope: number;
    let label: string | undefined = t.label;
    if (t.secantTo !== undefined) {
      const b = num(t.secantTo, env);
      slope = (f({ ...env, x: b }) - ya) / (b - a);
      const yb = f({ ...env, x: b });
      return (
        <g key={`t${i}`}>
          <line x1={sx(x0)} y1={clampY(sy(ya + slope * (x0 - a)))} x2={sx(x1)} y2={clampY(sy(ya + slope * (x1 - a)))} className={`g-line c-${t.color ?? 'orange'}`} />
          <circle cx={sx(a)} cy={sy(ya)} r={5} className={`g-pt c-${t.color ?? 'orange'}`} />
          {Number.isFinite(yb) && <circle cx={sx(b)} cy={sy(yb)} r={5} className={`g-pt c-${t.color ?? 'orange'}`} />}
          {label && (
            <text x={sx(a) + 8} y={sy(ya) - 10} className="g-label">
              {label}
            </text>
          )}
        </g>
      );
    }
    slope = (f({ ...env, x: a + h }) - f({ ...env, x: a - h })) / (2 * h);
    label = label ?? undefined;
    if (!Number.isFinite(ya) || !Number.isFinite(slope)) return null;
    return (
      <g key={`t${i}`}>
        <line x1={sx(x0)} y1={clampY(sy(ya + slope * (x0 - a)))} x2={sx(x1)} y2={clampY(sy(ya + slope * (x1 - a)))} className={`g-line c-${t.color ?? 'orange'}`} />
        <circle cx={sx(a)} cy={sy(ya)} r={5} className={`g-pt c-${t.color ?? 'orange'}`} />
        {label && (
          <text x={sx(a) + 8} y={sy(ya) - 10} className="g-label">
            {label}
          </text>
        )}
      </g>
    );
  });

  const legend = [
    ...(g.functions ?? []).map((f, i) => ({ label: f.label, color: f.color ?? COLORS[i % COLORS.length], dashed: f.dashed })),
    ...(g.parametric ?? []).map((c, i) => ({ label: c.label, color: c.color ?? COLORS[(i + 1) % COLORS.length], dashed: c.dashed })),
    ...(g.polar ?? []).map((c, i) => ({ label: c.label, color: c.color ?? COLORS[(i + 2) % COLORS.length], dashed: c.dashed })),
    ...(g.implicit ?? []).map((c, i) => ({ label: c.label, color: c.color ?? COLORS[(i + 3) % COLORS.length], dashed: c.dashed })),
  ].filter((l) => l.label);

  const clip = `gclip-${uid}`;
  const arrow = `garrow-${uid}`;

  return (
    <figure className={`graph${compact ? ' compact' : ''}`}>
      <div className="graph-canvas">
        <svg
          ref={svgRef}
          viewBox={`0 0 ${W} ${H}`}
          className="graph-svg"
          role="img"
          aria-label={g.caption ? g.caption.replace(/[$`*]/g, '') : 'Graph'}
          onPointerMove={onMove}
          onPointerDown={onMove}
          onPointerLeave={() => setHover(null)}
        >
          <defs>
            <clipPath id={clip}>
              <rect x="0" y="0" width={W} height={H} />
            </clipPath>
            <marker id={arrow} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
              <path d="M0,0 L10,5 L0,10 z" fill="context-stroke" />
            </marker>
          </defs>
          <g className="g-grid">
            {xTicks.map((k) => (
              <line key={`gx${k}`} x1={sx(k * xStep)} y1={0} x2={sx(k * xStep)} y2={H} />
            ))}
            {yTicks.map((k) => (
              <line key={`gy${k}`} x1={0} y1={sy(k * yStep)} x2={W} y2={sy(k * yStep)} />
            ))}
          </g>
          <g className="g-axes">
            <line x1={0} y1={axisY} x2={W} y2={axisY} />
            <line x1={axisX} y1={0} x2={axisX} y2={H} />
          </g>
          <g className="g-ticks">
            {xTicks.map((k, i) =>
              k === 0 || i % xLabelEvery || sx(k * xStep) < 12 || sx(k * xStep) > W - 12 ? null : (
                <text key={`tx${k}`} x={sx(k * xStep)} y={Math.min(H - 4, axisY + 16)} textAnchor="middle">
                  {g.xStep === 'pi' ? piLabel(k) : fmtTick(k * xStep)}
                </text>
              ),
            )}
            {yTicks.map((k, i) =>
              k === 0 || i % yLabelEvery || sy(k * yStep) < 12 || sy(k * yStep) > H - 8 ? null : (
                <text key={`ty${k}`} x={axisX > W - 30 ? axisX - 6 : axisX + 6} y={sy(k * yStep) + 4} textAnchor={axisX > W - 30 ? 'end' : 'start'}>
                  {fmtTick(k * yStep)}
                </text>
              ),
            )}
          </g>
          <g clipPath={`url(#${clip})`}>
            {rects.map((r) => (
              <polygon key={r.key} points={r.pts} className={`g-rect c-${riemann?.color ?? 'teal'}`} />
            ))}
            {areas}
            {(g.vlines ?? []).map((v, i) => {
              const X = sx(num(v.x, env));
              if (!Number.isFinite(X)) return null;
              return (
                <g key={`v${i}`}>
                  <line x1={X} y1={0} x2={X} y2={H} className={`g-ref c-${v.color ?? 'gray'}${v.dashed === false ? '' : ' dashed'}`} />
                  {v.label && (
                    <text x={X + 5} y={14} className="g-label small">
                      {v.label}
                    </text>
                  )}
                </g>
              );
            })}
            {(g.hlines ?? []).map((h, i) => {
              const Y = sy(num(h.y, env));
              if (!Number.isFinite(Y)) return null;
              return (
                <g key={`h${i}`}>
                  <line x1={0} y1={Y} x2={W} y2={Y} className={`g-ref c-${h.color ?? 'gray'}${h.dashed === false ? '' : ' dashed'}`} />
                  {h.label && (
                    <text x={W - 6} y={Y - 6} textAnchor="end" className="g-label small">
                      {h.label}
                    </text>
                  )}
                </g>
              );
            })}
            {fieldArrows.length > 0 && <path d={fieldArrows.join('')} className={`g-field c-${g.field?.color ?? 'gray'}`} />}
            {drawn.map((p) => (
              <path key={p.key} d={p.d} className={`g-curve c-${p.color}${p.dashed ? ' dashed' : ''}`} />
            ))}
            {tangents}
            {(g.segments ?? []).map((s, i) => {
              const ax = sx(num(s.from[0], env));
              const ay = sy(num(s.from[1], env));
              const bx = sx(num(s.to[0], env));
              const by = sy(num(s.to[1], env));
              if (![ax, ay, bx, by].every(Number.isFinite)) return null;
              return (
                <g key={`s${i}`}>
                  <line
                    x1={ax}
                    y1={ay}
                    x2={bx}
                    y2={by}
                    className={`g-seg c-${s.color ?? 'gray'}${s.dashed ? ' dashed' : ''}`}
                    markerEnd={s.arrow ? `url(#${arrow})` : undefined}
                  />
                  {s.label && (
                    <text x={(ax + bx) / 2 + 6} y={(ay + by) / 2 - 6} className="g-label">
                      {s.label}
                    </text>
                  )}
                </g>
              );
            })}
            {(g.points ?? []).map((p, i) => {
              const X = sx(num(p.x, env));
              const Y = sy(num(p.y, env));
              if (!Number.isFinite(X) || !Number.isFinite(Y)) return null;
              const right = X < W - 90;
              return (
                <g key={`pt${i}`}>
                  <circle cx={X} cy={Y} r={5.5} className={`g-pt c-${p.color ?? 'red'}${p.open ? ' open' : ''}`} />
                  {p.label && (
                    <text x={X + (right ? 9 : -9)} y={Y - 9} textAnchor={right ? 'start' : 'end'} className="g-label">
                      {p.label}
                    </text>
                  )}
                </g>
              );
            })}
            {hover !== null && Number.isFinite(hoverY) && (
              <g className="g-hover">
                <line x1={sx(hover)} y1={0} x2={sx(hover)} y2={H} />
                <circle cx={sx(hover)} cy={sy(hoverY)} r={5} />
              </g>
            )}
          </g>
        </svg>
        {hover !== null && firstFn && (
          <div className="graph-readout-float">
            x = {fmtNum(hover, 2)}, y = {fmtNum(hoverY, 3)}
          </div>
        )}
      </div>
      {legend.length > 0 && (
        <div className="graph-legend">
          {legend.map((l, i) => (
            <span key={i} className="graph-key">
              <span className={`graph-swatch c-${l.color}${l.dashed ? ' dashed' : ''}`} />
              <Inline text={l.label!} />
            </span>
          ))}
        </div>
      )}
      <SliderPanel sliders={g.sliders} state={sliderState} />
      <Readouts readouts={g.readouts} env={env} />
      {g.caption && (
        <figcaption>
          <Inline text={g.caption} />
        </figcaption>
      )}
    </figure>
  );
}
