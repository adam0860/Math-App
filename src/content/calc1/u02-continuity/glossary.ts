import type { GlossaryEntry } from '../../types';

// Glossary terms introduced by this unit that are NOT in scripts/glossary-master.ts.
export const glossary: GlossaryEntry[] = [
  {
    id: 'bisection-method',
    term: 'Bisection Method',
    aliases: ['interval halving', 'binary search for roots'],
    course: 'calc1',
    category: 'Continuity',
    short: 'A root-finding algorithm: starting from an interval where a continuous function changes sign, repeatedly halve the interval and keep the half that still has a sign change.',
    long: 'The [[intermediate-value-theorem]] guarantees a root in every interval the method keeps, so it always converges for a continuous function with a sign change. After $n$ steps the root is trapped in an interval of width $\\frac{b - a}{2^n}$, so each step adds about one binary digit of accuracy — slow but completely reliable. Faster methods such as [[newtons-method]] can fail where bisection cannot.',
    tex: 'm = \\frac{a + b}{2}, \\qquad \\text{width after } n \\text{ steps} = \\frac{b - a}{2^n}',
    example: 'while (b - a > tol) {\n    double m = a + (b - a) / 2;\n    if (f(a) * f(m) <= 0) b = m; else a = m;\n}',
    exampleLang: 'cpp',
    see: ['intermediate-value-theorem', 'continuity', 'zero-of-a-function', 'newtons-method'],
  },
  {
    id: 'one-sided-continuity',
    term: 'One-Sided Continuity',
    aliases: ['continuous from the right', 'continuous from the left', 'right-continuous', 'left-continuous'],
    course: 'calc1',
    category: 'Continuity',
    short: '$f$ is continuous from the right at $a$ if $\\lim_{x \\to a^+} f(x) = f(a)$, and continuous from the left if $\\lim_{x \\to a^-} f(x) = f(a)$.',
    long: 'A function is continuous at $a$ exactly when it is continuous from both sides. One-sided continuity is what "continuous on $[a, b]$" requires at the endpoints. The floor function $\\lfloor x \\rfloor$ is continuous from the right, but not from the left, at every integer; $\\sqrt{x}$ is continuous from the right at $0$.',
    tex: '\\lim_{x \\to a^+} f(x) = f(a)',
    see: ['continuity', 'one-sided-limit', 'jump-discontinuity'],
  },
];
