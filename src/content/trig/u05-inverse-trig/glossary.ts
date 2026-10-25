import type { GlossaryEntry } from '../../types';

// Glossary terms introduced by this unit that are NOT in scripts/glossary-master.ts.
export const glossary: GlossaryEntry[] = [
  {
    id: 'principal-value',
    term: 'Principal Value',
    aliases: ['principal angle'],
    course: 'trig',
    category: 'Inverse Trig',
    short: 'The single standard output an inverse trig function returns, chosen from its restricted range: $[-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$ for $\\arcsin$, $[0, \\pi]$ for $\\arccos$, $(-\\frac{\\pi}{2}, \\frac{\\pi}{2})$ for $\\arctan$.',
    long: 'Infinitely many angles share the same sine (or cosine, or tangent), so an inverse trig function must pick one. The agreed choice is the principal value. Calculators and programming libraries (`std::asin`, `std::acos`, `std::atan`) always return principal values, in radians.',
    tex: '\\arcsin\\tfrac{1}{2} = \\tfrac{\\pi}{6}, \\quad \\arccos\\left(-\\tfrac{1}{2}\\right) = \\tfrac{2\\pi}{3}, \\quad \\arctan(-1) = -\\tfrac{\\pi}{4}',
    see: ['inverse-sine', 'inverse-cosine', 'inverse-tangent'],
  },
  {
    id: 'angle-wrapping',
    term: 'Angle Wrapping',
    aliases: ['wrap angle', 'normalize angle'],
    course: 'trig',
    category: 'Inverse Trig',
    short: 'Replacing an angle by the coterminal angle in a standard interval, usually $(-\\pi, \\pi]$ or $[0, 2\\pi)$, by adding or subtracting multiples of $2\\pi$.',
    long: 'Games wrap angle differences into $(-\\pi, \\pi]$ so that an object turning toward a target always takes the shorter way around. A compact trick is `atan2(sin(d), cos(d))`, which returns the angle coterminal with `d` in $(-\\pi, \\pi]$.',
    tex: '-\\tfrac{3\\pi}{2} \;\\mapsto\; -\\tfrac{3\\pi}{2} + 2\\pi = \\tfrac{\\pi}{2}',
    example: 'double wrapAngle(double d) {\n    return std::atan2(std::sin(d), std::cos(d));  // result in (-pi, pi]\n}',
    exampleLang: 'cpp',
    see: ['atan2', 'coterminal-angles'],
  },
];
