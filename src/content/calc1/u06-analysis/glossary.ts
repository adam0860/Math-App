import type { GlossaryEntry } from '../../types';

// Glossary terms introduced by this unit that are NOT in scripts/glossary-master.ts.
export const glossary: GlossaryEntry[] = [
  {
    id: 'smoothstep',
    term: 'Smoothstep',
    aliases: ['smoothstep function', 'ease-in-out cubic'],
    course: 'calc1',
    category: 'Applications of Derivatives',
    short: 'The easing curve $S(t) = 3t^2 - 2t^3$ on $[0, 1]$: it rises from $0$ to $1$ with zero slope at both ends, so blends start and stop smoothly.',
    long: 'Because $S\'(t) = 6t(1 - t)$ vanishes at $t = 0$ and $t = 1$, motion driven by smoothstep eases in and eases out. Its only inflection point is at $t = \\frac{1}{2}$, where the slope reaches its maximum $\\frac{3}{2}$.\n\nShading languages provide it built in (GLSL `smoothstep(edge0, edge1, x)` first rescales $x$ to $[0, 1]$). The quintic "smootherstep" $6t^5 - 15t^4 + 10t^3$ also has zero second derivative at the ends.',
    tex: 'S(t) = 3t^2 - 2t^3, \\quad S\'(t) = 6t(1 - t)',
    example: 'float smoothstep(float t) {\n    t = t < 0 ? 0 : (t > 1 ? 1 : t);\n    return t * t * (3.0f - 2.0f * t);\n}',
    exampleLang: 'cpp',
    see: ['inflection-point', 'concavity'],
  },
  {
    id: 'cauchy-mean-value-theorem',
    term: "Cauchy's Mean Value Theorem",
    aliases: ['extended mean value theorem', 'generalized mean value theorem'],
    course: 'calc1',
    category: 'Applications of Derivatives',
    short: 'If $f$ and $g$ are continuous on $[a, b]$, differentiable on $(a, b)$, and $g\' \\ne 0$ on $(a, b)$, then $\\frac{f(b) - f(a)}{g(b) - g(a)} = \\frac{f\'(c)}{g\'(c)}$ for some $c$ in $(a, b)$.',
    long: 'Taking $g(x) = x$ recovers the ordinary [[mean-value-theorem]]. Cauchy\'s version is the key step in the proof of [[lhopitals-rule|L\'Hôpital\'s rule]]: it turns a ratio of function values into a ratio of derivatives at some intermediate point.',
    tex: '\\frac{f(b) - f(a)}{g(b) - g(a)} = \\frac{f\'(c)}{g\'(c)}',
    see: ['mean-value-theorem', 'lhopitals-rule'],
  },
  {
    id: 'objective-function',
    term: 'Objective Function',
    aliases: ['objective', 'cost function'],
    course: 'calc1',
    category: 'Applications of Derivatives',
    short: 'In an [[optimization]] problem, the quantity you want to make as large or as small as possible (area, cost, time, distance), written as a function of the design variables.',
    long: 'Setting up the objective function is usually the hardest part of an optimization problem. If it depends on several variables, use the [[optimization-constraint|constraint]] to rewrite it in terms of a single variable before differentiating.\n\nIn machine learning and game AI the same idea appears as a cost or loss function that an algorithm such as gradient descent minimizes numerically.',
    see: ['optimization', 'optimization-constraint', 'absolute-extremum'],
  },
  {
    id: 'optimization-constraint',
    term: 'Constraint',
    aliases: ['constraint equation', 'side condition'],
    course: 'calc1',
    category: 'Applications of Derivatives',
    short: 'An equation the variables of an optimization problem must satisfy (fixed fence length, fixed volume, …); it is used to eliminate variables from the [[objective-function]].',
    long: 'Example: maximize $A = xy$ subject to the constraint $2x + y = 240$. Solving the constraint for $y = 240 - 2x$ turns the objective into the one-variable function $A(x) = x(240 - 2x)$. Constraints also determine the **domain** of the resulting function (here $0 \\le x \\le 120$), which matters when checking endpoints.',
    see: ['objective-function', 'optimization', 'closed-interval-method'],
  },
];
