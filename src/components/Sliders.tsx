import { useEffect, useRef, useState, type Dispatch, type SetStateAction } from 'react';
import type { GraphBlock } from '../content/types';
import { compileExpr, type Env } from '../lib/mathexpr';
import { Inline } from './RichText';

/*
 * Slider parameters shared by 2D graphs and 3D plots: state, the ▶ play
 * animation, the slider panel and live readouts.
 */

export type SliderSpec = NonNullable<GraphBlock['sliders']>[number];
export type ReadoutSpec = NonNullable<GraphBlock['readouts']>[number];

/** Decimals a slider value needs so every step is distinguishable (step 0.005 → 3, 0.25 → 2, 1 → 0). */
export function sliderDecimals(step?: number): number {
  if (!step || step >= 1) return step ? 0 : 2;
  const s = String(step);
  const m = /e-(\d+)$/.exec(s);
  if (m) return Math.min(8, Number(m[1]) + (s.split('e')[0].split('.')[1]?.length ?? 0));
  return Math.min(8, s.split('.')[1]?.length ?? 2);
}

export function fmtNum(v: number, digits = 3): string {
  if (!Number.isFinite(v)) return 'undefined';
  const r = Math.round(v * Math.pow(10, digits)) / Math.pow(10, digits);
  return (Object.is(r, -0) ? 0 : r).toString().replace('-', '−');
}

function evalExpr(src: string, env: Env): number {
  const f = compileExpr(src);
  if (!f) return NaN;
  try {
    return f(env);
  } catch {
    return NaN;
  }
}

export interface SliderState {
  params: Record<string, number>;
  setParams: Dispatch<SetStateAction<Record<string, number>>>;
  playing: string | null;
  setPlaying: Dispatch<SetStateAction<string | null>>;
}

export function useSliders(sliders: SliderSpec[] | undefined): SliderState {
  const [params, setParams] = useState<Record<string, number>>(() => Object.fromEntries((sliders ?? []).map((s) => [s.name, s.value])));
  const [playing, setPlaying] = useState<string | null>(null);
  const paramsRef = useRef(params);
  paramsRef.current = params;

  // ▶ on a slider: sweep its value upward in real time (stop at max, or wrap with `loop`).
  useEffect(() => {
    if (!playing) return;
    const s = sliders?.find((x) => x.name === playing);
    if (!s || !(s.max > s.min)) return;
    const span = s.max - s.min;
    const speed = s.speed && s.speed > 0 ? s.speed : span / 4;
    let v = paramsRef.current[s.name];
    if (!(v < s.max - span * 1e-6)) v = s.min;
    let last = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const dt = Math.min(0.1, Math.max(0, (now - last) / 1000));
      last = now;
      v += speed * dt;
      let done = false;
      if (v >= s.max) {
        if (s.loop) v = s.min + ((v - s.max) % span);
        else {
          v = s.max;
          done = true;
        }
      }
      const nv = v;
      setParams((p) => ({ ...p, [s.name]: nv }));
      if (done) setPlaying(null);
      else raf = requestAnimationFrame(tick);
    };
    const start = v;
    setParams((p) => ({ ...p, [s.name]: start }));
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [playing, sliders]);

  return { params, setParams, playing, setPlaying };
}

export function SliderPanel({ sliders, state }: { sliders?: SliderSpec[]; state: SliderState }) {
  const { params, setParams, playing, setPlaying } = state;
  if (!sliders?.length) return null;
  return (
    <div className="graph-sliders">
      {sliders.map((s) => (
        <label key={s.name} className={`graph-slider${s.play ? ' has-play' : ''}`}>
          <span className="graph-slider-name">
            <Inline text={s.label ?? `$${s.name}$`} />
          </span>
          <input
            type="range"
            min={s.min}
            max={s.max}
            step={s.step ?? (s.max - s.min) / 100}
            value={params[s.name]}
            onChange={(e) => {
              if (playing) setPlaying(null);
              setParams((p) => ({ ...p, [s.name]: Number(e.target.value) }));
            }}
          />
          <span className="graph-slider-val">{fmtNum(params[s.name], sliderDecimals(s.step))}</span>
          {s.play && <PlayButton on={playing === s.name} onToggle={() => setPlaying((cur) => (cur === s.name ? null : s.name))} />}
        </label>
      ))}
    </div>
  );
}

export function PlayButton({ on, onToggle, label }: { on: boolean; onToggle: () => void; label?: string }) {
  return (
    <button
      type="button"
      className={`graph-play${on ? ' on' : ''}`}
      aria-label={on ? 'Pause' : (label ?? 'Play')}
      onClick={(e) => {
        e.preventDefault();
        onToggle();
      }}
    >
      {on ? (
        <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
          <rect x="3" y="2.5" width="3.6" height="11" rx="1" fill="currentColor" />
          <rect x="9.4" y="2.5" width="3.6" height="11" rx="1" fill="currentColor" />
        </svg>
      ) : (
        <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
          <path d="M4 2.5 L13.5 8 L4 13.5 Z" fill="currentColor" />
        </svg>
      )}
    </button>
  );
}

export function Readouts({ readouts, env }: { readouts?: ReadoutSpec[]; env: Env }) {
  if (!readouts?.length) return null;
  return (
    <div className="graph-readouts">
      {readouts.map((r, i) => (
        <span key={i} className="graph-readout">
          <Inline text={r.label} /> <b>{fmtNum(evalExpr(r.expr, env), r.digits ?? 3)}</b>
        </span>
      ))}
    </div>
  );
}
