import type { GlossaryEntry } from '../../types';

// Glossary terms introduced by this unit that are NOT in scripts/glossary-master.ts.
export const glossary: GlossaryEntry[] = [
  {
    id: 'trig-quadrantal-angle',
    term: 'Quadrantal Angle',
    aliases: ['quadrantal angles'],
    course: 'trig',
    category: 'Unit Circle',
    short: 'An angle in standard position whose terminal side lies on a coordinate axis, such as $0$, $\\frac{\\pi}{2}$, $\\pi$, $\\frac{3\\pi}{2}$ (any integer multiple of $\\frac{\\pi}{2}$).',
    long: 'The terminal side of a quadrantal angle meets the unit circle at $(1, 0)$, $(0, 1)$, $(-1, 0)$ or $(0, -1)$, so its sine and cosine are always $0$ or $\\pm 1$.\n\nQuadrantal angles belong to no quadrant, and they are exactly where some of the six trig functions are undefined: $\\tan$ and $\\sec$ at odd multiples of $\\frac{\\pi}{2}$, $\\cot$ and $\\csc$ at multiples of $\\pi$.',
    tex: '\\theta = k\\cdot\\frac{\\pi}{2}, \\quad k \\in \\mathbb{Z}',
    see: ['unit-circle', 'quadrant', 'standard-position'],
  },
  {
    id: 'trig-astc-rule',
    term: 'ASTC Rule',
    aliases: ['All Students Take Calculus', 'CAST rule'],
    course: 'trig',
    category: 'Unit Circle',
    short: 'A mnemonic for which trig functions are positive in each quadrant: **A**ll in I, **S**ine in II, **T**angent in III, **C**osine in IV (and their reciprocals with them).',
    long: 'It follows from the signs of the coordinates $(x, y) = (\\cos\\theta, \\sin\\theta)$: in quadrant I both are positive; in II only $y$; in III both are negative, so their quotient $\\tan\\theta = \\frac{y}{x}$ is positive; in IV only $x$.',
    see: ['quadrant', 'reference-angle', 'unit-circle'],
  },
];
