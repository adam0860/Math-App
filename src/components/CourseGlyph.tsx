import { useId } from 'react';
import type { CourseId } from '../content/types';

const GLYPHS: Record<CourseId, { from: string; to: string; shape: 'hex' | 'circle' | 'square' | 'drop' | 'flask'; text: string; size: number; italic?: boolean }> = {
  algebra: { from: '#5b8cff', to: '#1d4ed8', shape: 'hex', text: 'x²', size: 24, italic: true },
  trig: { from: '#2dd4bf', to: '#0f766e', shape: 'circle', text: 'θ', size: 28, italic: true },
  calc1: { from: '#a78bfa', to: '#6d28d9', shape: 'square', text: 'f′', size: 25, italic: true },
  calc2: { from: '#fb923c', to: '#db2777', shape: 'drop', text: '∫', size: 32 },
  linalg: { from: '#34d399', to: '#047857', shape: 'hex', text: 'Ax', size: 24, italic: true },
  chem: { from: '#38bdf8', to: '#0369a1', shape: 'flask', text: 'H₂O', size: 15 },
  genchem: { from: '#f472b6', to: '#be185d', shape: 'flask', text: 'mol', size: 16, italic: true },
  orgo: { from: '#facc15', to: '#c2410c', shape: 'hex', text: 'C–H', size: 18 },
};

/** Course emblems: a coloured badge with the course's signature symbol. */
export function CourseGlyph({ course, size = 48, className }: { course: CourseId; size?: number; className?: string }) {
  // Gradient ids must be unique per instance: a duplicate id inside a hidden
  // (display: none) subtree makes every other reference to it render empty.
  const gid = `g-${course}-${useId().replace(/[^a-zA-Z0-9_-]/g, '')}`;
  const g = GLYPHS[course] ?? GLYPHS.algebra;
  const fill = `url(#${gid})`;
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={g.from} />
          <stop offset="1" stopColor={g.to} />
        </linearGradient>
      </defs>
      {g.shape === 'hex' && (
        <>
          <path d="M32 3l25 14.5v29L32 61 7 46.5v-29z" fill={fill} />
          <path d="M32 3l25 14.5L32 32z" fill="#ffffff" opacity="0.12" />
        </>
      )}
      {g.shape === 'circle' && (
        <>
          <circle cx="32" cy="32" r="29" fill={fill} />
          <circle cx="32" cy="32" r="22.5" fill="none" stroke="#fff" strokeOpacity="0.3" strokeWidth="2" />
        </>
      )}
      {g.shape === 'square' && (
        <>
          <rect x="5" y="5" width="54" height="54" rx="15" fill={fill} />
          <path d="M5 20C5 11.7 11.7 5 20 5h39L5 59z" fill="#fff" opacity="0.1" />
        </>
      )}
      {g.shape === 'flask' && (
        <>
          <path d="M24 4h16v4h-2v14l17 28c3 5-1 11-7 11H16c-6 0-10-6-7-11l17-28V8h-2z" fill={fill} />
          <path d="M24 4h16v4h-2v14l6 10H20l6-10V8h-2z" fill="#fff" opacity="0.12" />
        </>
      )}
      {g.shape === 'drop' && (
        <>
          <path d="M32 3c14 10 27 22 27 35a27 23 0 0 1-54 0C5 25 18 13 32 3z" fill={fill} />
          <path d="M32 3c14 10 27 22 27 35H5C5 25 18 13 32 3z" fill="#fff" opacity="0.1" />
        </>
      )}
      <text
        x="32"
        y={g.shape === 'drop' ? 47 : g.shape === 'flask' ? 50 : 41}
        textAnchor="middle"
        fontFamily="'Times New Roman', Georgia, serif"
        fontStyle={g.italic ? 'italic' : 'normal'}
        fontWeight="700"
        fontSize={g.size}
        fill="#fff"
      >
        {g.text}
      </text>
    </svg>
  );
}
