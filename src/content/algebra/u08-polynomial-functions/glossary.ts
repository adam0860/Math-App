import type { GlossaryEntry } from '../../types';

// Glossary terms introduced by this unit that are NOT in scripts/glossary-master.ts.
export const glossary: GlossaryEntry[] = [
  {
    id: 'polynomial-turning-point',
    term: 'Turning Point',
    aliases: ['local peak', 'local valley'],
    course: 'algebra',
    category: 'Polynomial & Rational Functions',
    short: 'A point where a graph changes from rising to falling (a local peak) or from falling to rising (a local valley).',
    long: 'A polynomial of degree $n$ has at most $n - 1$ turning points. Calculus locates them exactly as the places where the slope is zero.',
    tex: '\\deg f = n \\implies \\text{at most } n - 1 \\text{ turning points}',
    see: ['polynomial-function', 'local-extremum'],
  },
  {
    id: 'polynomial-division-algorithm',
    term: 'Division Algorithm for Polynomials',
    aliases: ['polynomial long division'],
    course: 'algebra',
    category: 'Polynomial & Rational Functions',
    short: 'For polynomials $f$ and $d \\neq 0$ there are unique polynomials $q$ (quotient) and $r$ (remainder) with $f = d \\cdot q + r$ and either $r = 0$ or $\\deg r < \\deg d$.',
    long: 'It is the polynomial version of "$17 = 5 \\cdot 3 + 2$". Long division computes $q$ and $r$; synthetic division is a shortcut when $d(x) = x - c$.',
    tex: 'f(x) = d(x)\\,q(x) + r(x), \\quad \\deg r < \\deg d',
    see: ['synthetic-division', 'remainder-theorem'],
  },
  {
    id: 'conjugate-zeros-theorem',
    term: 'Complex Conjugate Zeros Theorem',
    course: 'algebra',
    category: 'Polynomial & Rational Functions',
    short: 'If a polynomial has **real** coefficients and $a + bi$ is a zero, then its conjugate $a - bi$ is also a zero.',
    long: 'Non-real zeros of real polynomials therefore come in pairs, and each pair multiplies to a real quadratic factor $x^2 - 2ax + (a^2 + b^2)$. A consequence: every odd-degree real polynomial has at least one real zero.',
    tex: 'f(a + bi) = 0 \\implies f(a - bi) = 0',
    see: ['complex-conjugate', 'fundamental-theorem-of-algebra'],
  },
  {
    id: 'linear-factorization-theorem',
    term: 'Linear Factorization Theorem',
    course: 'algebra',
    category: 'Polynomial & Rational Functions',
    short: 'Every polynomial of degree $n \\ge 1$ factors as $a_n(x - c_1)(x - c_2)\\cdots(x - c_n)$, where the $c_i$ are complex numbers (not necessarily distinct).',
    long: 'It follows from the Fundamental Theorem of Algebra by repeatedly applying the Factor Theorem: find a zero, divide it out, and repeat on the quotient.',
    tex: 'f(x) = a_n(x - c_1)(x - c_2)\\cdots(x - c_n)',
    see: ['fundamental-theorem-of-algebra', 'factor-theorem'],
  },
];
