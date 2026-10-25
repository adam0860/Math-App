import type { GlossaryEntry } from '../../types';

// Glossary terms introduced by this unit that are NOT in scripts/glossary-master.ts.
export const glossary: GlossaryEntry[] = [
  {
    id: 'regular-partition',
    term: 'Regular Partition',
    aliases: ['partition', 'subinterval'],
    course: 'calc1',
    category: 'Integrals',
    short: 'A division of $[a, b]$ into $n$ subintervals of equal width $\\Delta x = \\frac{b - a}{n}$, with endpoints $x_i = a + i\\,\\Delta x$ for $i = 0, 1, \\dots, n$.',
    long: 'Partitions are the scaffolding of a [[riemann-sum]]: each subinterval $[x_{i-1}, x_i]$ carries one rectangle. A *regular* partition uses equal widths, which makes the sums easy to write with [[sigma-notation]]. General partitions may use unequal widths; the definite integral is the limit as the widest subinterval shrinks to zero.\n\nIn code, a regular partition is just a `for` loop with a fixed step `dx`.',
    tex: '\\Delta x = \\frac{b - a}{n}, \\qquad x_i = a + i\\,\\Delta x',
    see: ['riemann-sum', 'sample-point', 'definite-integral'],
  },
  {
    id: 'sample-point',
    term: 'Sample Point',
    aliases: ['left endpoint', 'right endpoint', 'midpoint sample'],
    course: 'calc1',
    category: 'Integrals',
    short: 'The point $x_i^*$ in the $i$-th subinterval where $f$ is evaluated to set the height of that rectangle in a Riemann sum.',
    long: 'Common choices are the left endpoint $x_{i-1}$, the right endpoint $x_i$ and the midpoint $\\frac{x_{i-1} + x_i}{2}$. For a continuous function every choice gives the same limit as $n \\to \\infty$ — that limit is the [[definite-integral]]. For finite $n$, midpoints are usually far more accurate than either endpoint.',
    tex: 'R = \\sum_{i=1}^{n} f(x_i^*)\\,\\Delta x',
    see: ['riemann-sum', 'regular-partition'],
  },
  {
    id: 'integrable-function',
    term: 'Integrable Function',
    aliases: ['integrable', 'Riemann integrable'],
    course: 'calc1',
    category: 'Integrals',
    short: 'A function $f$ is integrable on $[a, b]$ when the limit of its Riemann sums exists and is the same for every choice of sample points; that limit is $\\int_a^b f(x)\\,dx$.',
    long: 'Every continuous function on a closed interval $[a, b]$ is integrable, and so is every bounded function with only finitely many jump discontinuities. Functions that blow up inside the interval (like $\\frac{1}{x^2}$ on $[-1, 1]$) are **not** integrable in this sense — those need improper integrals, a Calculus II topic.',
    see: ['definite-integral', 'riemann-sum', 'continuity'],
  },
  {
    id: 'accumulation-function',
    term: 'Accumulation Function',
    aliases: ['area function', 'area-so-far function'],
    course: 'calc1',
    category: 'Integrals',
    short: 'A function defined by an integral with a variable upper limit, $g(x) = \\int_a^x f(t)\\,dt$: the net signed area under $f$ from $a$ up to $x$.',
    long: 'Part 1 of the [[fundamental-theorem-of-calculus]] says that if $f$ is continuous then $g\'(x) = f(x)$: the area-so-far grows at a rate equal to the current height of the curve. So $g$ increases where $f > 0$, decreases where $f < 0$, and has a local extremum where $f$ changes sign.\n\nIn a game, the total distance an object has travelled is the accumulation function of its speed — a running total updated every frame.',
    tex: 'g(x) = \\int_a^x f(t)\\,dt, \\qquad g\'(x) = f(x)',
    see: ['fundamental-theorem-of-calculus', 'definite-integral', 'antiderivative'],
  },
];
