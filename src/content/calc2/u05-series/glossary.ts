import type { GlossaryEntry } from '../../types';

// Glossary terms introduced by this unit that are NOT in scripts/glossary-master.ts.
export const glossary: GlossaryEntry[] = [
  {
    id: 'calc2-alternating-series-estimation',
    term: 'Alternating Series Estimation Theorem',
    aliases: ['alternating series remainder', 'alternating series error bound'],
    course: 'calc2',
    category: 'Series',
    short: 'If an alternating series $\\sum (-1)^{n-1} b_n$ satisfies the Alternating Series Test, the error after $n$ terms is at most the first omitted term: $|S - S_n| \\le b_{n+1}$.',
    long: 'The true sum always lies between any two consecutive partial sums $S_n$ and $S_{n+1}$, so the error has the same sign as the first omitted term and is no larger than it in size.\n\nThis gives numerical code a provably safe stopping rule: stop as soon as the next term is below the tolerance.',
    tex: '|S - S_n| \\le b_{n+1}',
    see: ['alternating-series-test', 'alternating-series', 'partial-sum'],
  },
  {
    id: 'calc2-riemann-rearrangement',
    term: 'Riemann Rearrangement Theorem',
    aliases: ['Riemann series theorem', 'rearrangement of series'],
    course: 'calc2',
    category: 'Series',
    short: 'The terms of a conditionally convergent series can be rearranged to sum to any real number you choose, or to diverge. Absolutely convergent series give the same sum in every order.',
    long: 'A conditionally convergent series has positive terms summing to $+\\infty$ and negative terms summing to $-\\infty$. By adding positives until you pass a target and then negatives until you drop below it, you can steer the partial sums to any target.\n\nFor absolutely convergent series every rearrangement converges to the same sum (Dirichlet).',
    see: ['conditional-convergence', 'absolute-convergence'],
  },
  {
    id: 'calc2-monotone-convergence-theorem',
    term: 'Monotone Convergence Theorem',
    aliases: ['monotone convergence', 'bounded monotonic sequence theorem'],
    course: 'calc2',
    category: 'Sequences',
    short: 'Every bounded, monotonic sequence converges: an increasing sequence bounded above, or a decreasing sequence bounded below, has a limit.',
    long: 'The limit of an increasing, bounded-above sequence is the least upper bound of its terms. The theorem rests on the completeness of the real numbers (it fails in the rationals: $1, 1.4, 1.41, \\dots$ approaches $\\sqrt{2}$).\n\nIt proves that a limit exists without saying what it is, which is exactly what is needed for recursive sequences $a_{n+1} = g(a_n)$: prove bounded and monotonic first, then solve $L = g(L)$. It also underlies every convergence test for series of positive terms, whose partial sums are increasing.',
    tex: 'a_1 \\le a_2 \\le a_3 \\le \\cdots \\le M \\implies \\lim_{n \\to \\infty} a_n \\text{ exists}',
    see: ['monotonic-sequence', 'bounded-sequence', 'limit-of-a-sequence'],
  },
  {
    id: 'calc2-integral-test-remainder',
    term: 'Remainder Estimate for the Integral Test',
    aliases: ['integral test error bound', 'remainder estimate'],
    course: 'calc2',
    category: 'Series',
    short: 'If $f$ is continuous, positive and decreasing with $a_n = f(n)$ and $\\sum a_n = s$ converges, the error $R_n = s - s_n$ satisfies $\\int_{n+1}^{\\infty} f(x)\\,dx \\le R_n \\le \\int_n^{\\infty} f(x)\\,dx$.',
    long: 'The left-out terms $a_{n+1}, a_{n+2}, \\dots$ are rectangles of width $1$ that fit under the curve from $x = n$ on, and cover the curve from $x = n + 1$ on.\n\nUse it to trap the sum, $s_n + \\int_{n+1}^{\\infty} f \\le s \\le s_n + \\int_n^{\\infty} f$, or to find how many terms guarantee a given accuracy. For $\\sum \\frac{1}{k^2}$ it gives $R_n \\le \\frac{1}{n}$.',
    tex: '\\int_{n+1}^{\\infty} f(x)\\,dx \\le R_n \\le \\int_{n}^{\\infty} f(x)\\,dx',
    see: ['integral-test', 'p-series', 'partial-sum'],
  },
];
