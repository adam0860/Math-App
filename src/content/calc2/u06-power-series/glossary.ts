import type { GlossaryEntry } from '../../types';

// Glossary terms introduced by this unit that are NOT in scripts/glossary-master.ts.
export const glossary: GlossaryEntry[] = [
  {
    id: 'binomial-series',
    term: 'Binomial Series',
    aliases: ['Newton\'s binomial series', 'generalized binomial theorem'],
    course: 'calc2',
    category: 'Series',
    short: 'The Maclaurin series $(1+x)^k = \\sum_{n=0}^{\\infty} \\binom{k}{n} x^n$, valid for $|x| < 1$ and any real exponent $k$.',
    long: 'Here $\\binom{k}{n} = \\frac{k(k-1)\\cdots(k-n+1)}{n!}$. When $k$ is a nonnegative integer the coefficients become zero after $n = k$ and the series reduces to the ordinary binomial theorem. Otherwise it never stops and its radius of convergence is $1$. Example: $\\sqrt{1+x} = 1 + \\frac{x}{2} - \\frac{x^2}{8} + \\cdots$.',
    tex: '(1+x)^k = 1 + kx + \\frac{k(k-1)}{2!}x^2 + \\frac{k(k-1)(k-2)}{3!}x^3 + \\cdots',
    see: ['binomial-theorem', 'binomial-coefficient', 'maclaurin-series'],
  },
  {
    id: 'range-reduction',
    term: 'Range Reduction',
    aliases: ['argument reduction'],
    course: 'calc2',
    category: 'Series',
    short: 'Rewriting the input of a function so that it lies in a small interval where a short polynomial approximation is accurate, then undoing the change with an exact identity.',
    long: 'Math libraries compute $\\sin x$ by writing $x = k\\frac{\\pi}{2} + r$ with $|r| \\le \\frac{\\pi}{4}$, evaluating a polynomial in $r$, and choosing $\\pm\\sin r$ or $\\pm\\cos r$ from $k \\bmod 4$. For $e^x$ they write $x = k\\ln 2 + r$ and use $e^x = 2^k e^r$. Keeping $|r|$ small keeps the Taylor remainder tiny.',
    tex: 'e^x = 2^k\\,e^r, \\quad x = k\\ln 2 + r, \\quad |r| \\le \\tfrac{\\ln 2}{2}',
    see: ['taylor-polynomial', 'taylors-inequality', 'periodic-function'],
  },
  {
    id: 'horners-method',
    term: "Horner's Method",
    aliases: ['Horner\'s rule', 'nested multiplication'],
    course: 'calc2',
    category: 'Series',
    short: 'Evaluating a polynomial in nested form, $a_0 + x(a_1 + x(a_2 + \\cdots))$, which needs only one multiplication and one addition per coefficient.',
    long: 'Instead of computing each power $x^n$ separately, Horner\'s method works from the highest coefficient inward. It is faster and usually more accurate in floating point, and it maps perfectly onto the fused multiply-add instruction of modern CPUs and GPUs. Math libraries evaluate their polynomial approximations this way.',
    tex: '2x^3 - 6x^2 + 2x - 1 = -1 + x\\bigl(2 + x(-6 + 2x)\\bigr)',
    example: 'double horner(const double* a, int n, double x) {\n    double p = a[n];\n    for (int k = n - 1; k >= 0; --k) p = p * x + a[k];\n    return p;\n}',
    exampleLang: 'cpp',
    see: ['polynomial', 'taylor-polynomial'],
  },
];
