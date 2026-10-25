import type { GlossaryEntry } from '../../types';

// Glossary terms introduced by this unit that are NOT in scripts/glossary-master.ts.
export const glossary: GlossaryEntry[] = [
  {
    id: 'small-angle-approximation',
    term: 'Small-Angle Approximation',
    aliases: ['sin x ≈ x'],
    course: 'calc1',
    category: 'Limits',
    short: 'For $x$ near $0$ (in radians), $\\sin x \\approx x$, $\\tan x \\approx x$ and $\\cos x \\approx 1 - \\frac{x^2}{2}$.',
    long: 'These approximations are the practical meaning of the limits $\\lim_{x \\to 0}\\frac{\\sin x}{x} = 1$ and $\\lim_{x \\to 0}\\frac{1 - \\cos x}{x^2} = \\frac{1}{2}$. They only hold in radians.\n\nPhysics uses them to simplify the pendulum equation; graphics and games use them for cheap rotations by tiny angles.',
    tex: '\\sin x \\approx x, \\qquad \\cos x \\approx 1 - \\frac{x^2}{2}',
    see: ['squeeze-theorem', 'radian', 'linear-approximation'],
  },
  {
    id: 'big-o-notation',
    term: 'Big-O Notation',
    aliases: ['Big O', 'asymptotic complexity'],
    course: 'calc1',
    category: 'Limits',
    short: '$f(n) = O(g(n))$ means that, for large $n$, $f(n)$ is at most a constant multiple of $g(n)$: $f$ grows no faster than $g$.',
    long: 'Computer science uses Big-O to compare how running time or memory grows with input size $n$. Limits at infinity give a quick test: if $\\lim_{n \\to \\infty}\\frac{f(n)}{g(n)}$ is a finite number, then $f(n) = O(g(n))$; if that limit is a positive finite number, $f$ and $g$ grow at the same rate (written $f = \\Theta(g)$).\n\nFor example $3n^2 + 100n = \\Theta(n^2)$ because $\\frac{3n^2 + 100n}{n^2} \\to 3$.',
    tex: '\\lim_{n \\to \\infty}\\frac{f(n)}{g(n)} < \\infty \\implies f(n) = O\\big(g(n)\\big)',
    see: ['limit-at-infinity', 'end-behavior'],
  },
];
