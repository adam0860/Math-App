import type { Lesson, GraphBlock } from '../../types';

/** 1 when the slider n is at least k, 0 otherwise (the calculator has no >= operator). */
const gate = (k: number) => `(sign(n - ${k} + 0.5) + 1)/2`;
const range = (from: number, to: number) => Array.from({ length: to - from + 1 }, (_, i) => from + i);

/** Degree-n Taylor polynomial of sin, evaluated at xv (odd powers up to 15, gated on the degree). */
const sinPoly = (xv: string) =>
  range(0, 7)
    .map((j) => `${gate(2 * j + 1)}*(${j % 2 === 0 ? '' : '-'}(${xv})^${2 * j + 1}/${2 * j + 1}!)`)
    .join(' + ');

/** Partial sums of e^(-x^2) = sum (-1)^k x^(2k)/k!, k = 0..n. */
const gaussPoly = range(0, 10)
  .map((k) => `${gate(k)}*(${k % 2 === 0 ? '' : '-'}x^${2 * k}/${k}!)`)
  .join(' + ');
/** Integral over [0, 1] of that partial sum: sum (-1)^k / (k! (2k+1)). */
const gaussIntegral = range(0, 10)
  .map((k) => `${gate(k)}*(${k % 2 === 0 ? '' : '-'}1/(${k}! * ${2 * k + 1}))`)
  .join(' + ');

/**
 * Partial sums P_k of e^(i a) = sum (i a)^k / k!, drawn as a chain of segments in the complex plane.
 * Term k has size a^k/k! and direction 1, i, -1, -i (k mod 4).
 */
const eulerSegments = (() => {
  const re: string[] = ['1'];
  const im: string[] = ['0'];
  const segs: NonNullable<GraphBlock['segments']> = [];
  const colors = ['blue', 'red', 'green', 'purple'] as const;
  for (let k = 1; k <= 12; k++) {
    const from: [string, string] = [re.join(' + '), im.join(' + ')];
    const t = `a^${k}/${k}!`;
    if (k % 4 === 0) re.push(t);
    if (k % 4 === 1) im.push(t);
    if (k % 4 === 2) re.push(`-${t}`);
    if (k % 4 === 3) im.push(`-${t}`);
    segs.push({ from, to: [re.join(' + '), im.join(' + ')], arrow: true, color: colors[k % 4] });
  }
  return segs;
})();

export const lesson: Lesson = {
  id: 'calc2-taylor-applications',
  title: 'Applications of Taylor Polynomials',
  summary: 'How good is a Taylor approximation? Error bounds, integrals with no formula, how your computer really evaluates $\\sin x$, and $e^{i\\theta}$.',
  minutes: 20,
  objectives: [
    'Use Taylor\'s inequality to bound the error of a Taylor polynomial',
    'Choose the degree needed to reach a required accuracy',
    'Approximate integrals such as $\\int_0^1 e^{-x^2}\\,dx$ and limits using series',
    'Explain how math libraries compute $\\sin x$ and $e^x$ with range reduction and polynomials',
    'Derive Euler\'s formula $e^{i\\theta} = \\cos\\theta + i\\sin\\theta$ from Maclaurin series',
  ],
  steps: [
    {
      kind: 'concept',
      title: 'How wrong is a Taylor polynomial?',
      blocks: [
        {
          type: 'p',
          text: 'A [[taylor-polynomial]] $T_n(x)$ is only useful if you know how close it is to $f(x)$. The **remainder** $R_n(x) = f(x) - T_n(x)$ is the error. We can rarely compute it exactly (that would require knowing $f(x)$), but we can *bound* it — and for engineering and programming, a guaranteed bound is exactly what you need.',
        },
        {
          type: 'theorem',
          name: 'Taylor\'s inequality',
          text: 'If $|f^{(n+1)}(x)| \\le M$ for all $x$ with $|x - a| \\le d$, then for those $x$ the remainder of the degree-$n$ Taylor polynomial satisfies\n\n$$|R_n(x)| \\le \\frac{M}{(n+1)!}\\,|x - a|^{n+1}.$$',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why it looks like "the next term"',
          text: 'Taylor\'s theorem says the error is *exactly* $R_n(x) = \\frac{f^{(n+1)}(z)}{(n+1)!}(x-a)^{n+1}$ for some unknown $z$ between $a$ and $x$ (the Lagrange form). It is the first omitted term, except that the derivative is evaluated at a mystery point $z$ instead of at $a$. Since we don\'t know $z$, we replace $|f^{(n+1)}(z)|$ by its worst case $M$. For $n = 0$ this is the [[mean-value-theorem]]: $f(x) - f(a) = f\'(z)(x - a)$. Taylor\'s theorem is the Mean Value Theorem upgraded to every degree.',
        },
        {
          type: 'derivation',
          title: 'Bound the error of $e^{0.5} \\approx T_3(0.5)$',
          steps: [
            { tex: 'T_3(x) = 1 + x + \\frac{x^2}{2} + \\frac{x^3}{6}, \\quad T_3(0.5) = 1.6458\\overline{3}', why: 'Degree-3 Maclaurin polynomial of $e^x$: $1 + 0.5 + 0.125 + 0.0208\\overline{3}$.' },
            { tex: 'f^{(4)}(x) = e^x \\le e^{0.5} < 2 \\quad \\text{on } [0, 0.5]', why: 'We need $n + 1 = 4$ derivatives. $e^x$ is increasing, so its max on the interval is at $x = 0.5$, and $e^{0.5} = \\sqrt{e} < \\sqrt 4 = 2$. Any upper bound will do, so choose a convenient one: $M = 2$.' },
            { tex: '|R_3(0.5)| \\le \\frac{2}{4!}(0.5)^4 = \\frac{2}{24}\\cdot\\frac{1}{16} = \\frac{1}{192} \\approx 0.0052', why: 'Taylor\'s inequality with $M = 2$, $n = 3$, $|x - a| = 0.5$.' },
          ],
          result: 'Guaranteed: $T_3(0.5) = 1.6458\\overline{3}$ is within $0.0052$ of $\\sqrt e$. (The actual error is $0.0029$; the bound is honest but a bit pessimistic, which is normal.)',
        },
        {
          type: 'graph',
          x: [-6, 6],
          y: [-2.5, 2.5],
          functions: [
            { expr: 'sin(x)', label: '$y = \\sin x$', color: 'gray', dashed: true },
            { expr: sinPoly('x'), label: '$T_n(x)$', color: 'red' },
          ],
          vlines: [{ x: 1, label: 'x = 1' }],
          sliders: [{ name: 'n', min: 1, max: 15, step: 1, value: 3, label: 'degree $n$' }],
          readouts: [
            { label: 'actual error $|\\sin 1 - T_n(1)| =$', expr: `abs(sin(1) - (${sinPoly('1')}))`, digits: 10 },
            { label: 'Taylor bound $\\frac{1}{(n+1)!} =$', expr: '1/(n+1)!', digits: 10 },
          ],
          caption: 'For $\\sin x$ every derivative is bounded by $M = 1$, so $|R_n(1)| \\le \\frac{1}{(n+1)!}$. Compare the two readouts as you raise $n$: the actual error always stays below the bound, and both collapse toward $0$ factorially fast.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'Approximate $\\cos(0.3)$ by $T_2(x) = 1 - \\frac{x^2}{2}$. Use Taylor\'s inequality with $n = 2$ and $M = 1$ to bound the error.',
      hint: '$|R_2(x)| \\le \\frac{M}{3!}|x|^3$.',
      label: '$|R_2(0.3)| \\le$',
      answer: '9/2000',
      answerTex: '\\frac{0.027}{6} = 0.0045',
      minDecimals: 4,
      explanation: 'Every derivative of $\\cos x$ is $\\pm\\sin x$ or $\\pm\\cos x$, so $M = 1$ works. Then $|R_2(0.3)| \\le \\frac{1}{3!}(0.3)^3 = \\frac{0.027}{6} = 0.0045$. Bonus insight: the $x^3$ coefficient of $\\cos x$ is $0$, so $T_2 = T_3$ and you may use $n = 3$ instead, giving the much better bound $\\frac{0.3^4}{4!} \\approx 0.00034$. The actual error is about $0.000336$.',
    },
    {
      kind: 'concept',
      title: 'Proving $e^x$ equals its series, and choosing $n$',
      blocks: [
        {
          type: 'p',
          text: 'Taylor\'s inequality closes the gap left in the last lesson: it shows the series for $e^x$ really converges *to* $e^x$, for every $x$.',
        },
        {
          type: 'derivation',
          title: '$R_n(x) \\to 0$ for $f(x) = e^x$',
          steps: [
            { tex: '|f^{(n+1)}(t)| = e^t \\le e^{|x|} \\quad \\text{for } |t| \\le |x|', why: 'Fix any $x$. On the interval between $0$ and $x$, $e^t$ is at most $e^{|x|}$. This $M = e^{|x|}$ does not depend on $n$.' },
            { tex: '|R_n(x)| \\le e^{|x|}\\,\\frac{|x|^{n+1}}{(n+1)!}', why: 'Taylor\'s inequality.' },
            { tex: '\\frac{|x|^{n+1}}{(n+1)!} \\to 0 \\quad \\text{as } n \\to \\infty', why: 'These are the terms of $\\sum \\frac{|x|^n}{n!}$, which converges (ratio test), so its terms go to $0$. Factorials beat powers.' },
            { tex: 'e^x = \\sum_{n=0}^{\\infty} \\frac{x^n}{n!} \\quad \\text{for all } x', why: 'The remainder tends to $0$, so the partial sums $T_n(x)$ converge to $f(x)$.' },
          ],
          result: 'The same argument with $M = 1$ proves $\\sin x$ and $\\cos x$ equal their Maclaurin series for every real $x$.',
        },
        {
          type: 'p',
          text: 'Turned around, the inequality answers the programmer\'s question: **how many terms do I need?** To compute $e = e^1$ with error below $10^{-6}$, use $M = 3$ (since $e^t < 3$ on $[0, 1]$) and solve $\\frac{3}{(n+1)!} < 10^{-6}$, i.e. $(n+1)! > 3\\,000\\,000$.',
        },
        {
          type: 'table',
          headers: ['$n + 1$', '$(n+1)!$', 'bound $\\frac{3}{(n+1)!}$'],
          rows: [
            ['$8$', '$40\\,320$', '$7.4 \\times 10^{-5}$'],
            ['$9$', '$362\\,880$', '$8.3 \\times 10^{-6}$'],
            ['$10$', '$3\\,628\\,800$', '$8.3 \\times 10^{-7}$'],
          ],
          caption: '$n + 1 = 10$ is the first that works, so $T_9(1)$ is guaranteed to be within $10^{-6}$ of $e$.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Alternating series give a second error bound',
          text: 'When the series is alternating with terms decreasing to $0$ (as for $\\sin x$, $\\cos x$, $\\ln(1+x)$ on suitable intervals), the alternating series estimate from the previous unit applies too: the error is less than the first omitted term. Use whichever bound is easier.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'Using Taylor\'s inequality with $M = 3$, what is the smallest degree $n$ that guarantees $|e - T_n(1)| < 0.001$?',
      hint: 'You need $\\frac{3}{(n+1)!} < 0.001$, i.e. $(n+1)! > 3000$. List factorials until one exceeds $3000$.',
      label: '$n =$',
      answer: '6',
      explanation: 'We need $(n+1)! > 3000$. Since $6! = 720$ is too small and $7! = 5040$ is big enough, $n + 1 = 7$, so $n = 6$. Check: $\\frac{3}{5040} \\approx 0.000595 < 0.001$, while $n = 5$ only guarantees $\\frac{3}{720} \\approx 0.0042$. (The common slip is answering $7$ — that is $n + 1$, not the degree.)',
    },
    {
      kind: 'mcq',
      prompt: 'You want to bound the error of $T_4(x)$ for $f(x) = e^x$ on the interval $0 \\le x \\le 2$ (center $a = 0$). Which value of $M$ is valid?',
      options: [
        {
          text: '$M = 1$',
          why: '$f^{(5)}(0) = 1$ is the value at the center, but the bound must hold on the whole interval, and $e^x$ reaches $e^2 \\approx 7.39$.',
        },
        {
          text: '$M = 2$',
          why: 'That is the right endpoint of the interval, not a bound on $f^{(5)}(x) = e^x$ there.',
        },
        {
          text: '$M = 9$',
          correct: true,
          why: '$f^{(5)}(x) = e^x \\le e^2 \\approx 7.39 < 9$ on $[0, 2]$. $M$ only needs to be *an* upper bound, and a round number is fine.',
        },
        {
          text: '$M = \\frac{e^2}{5!}$',
          why: 'This mixes up $M$ with the whole error coefficient. The $\\frac{1}{5!}$ is already part of Taylor\'s inequality; $M$ bounds only $|f^{(5)}|$.',
        },
      ],
      explanation: 'For $T_4$ you need $n + 1 = 5$ derivatives: $f^{(5)}(x) = e^x$. On $[0, 2]$ its largest value is $e^2 \\approx 7.39$, so any $M \\ge e^2$ works; $M = 9$ (or $M = 8$, or $3^2$ using $e < 3$) is a standard choice. The resulting bound is $|R_4(x)| \\le \\frac{9}{120}|x|^5$.',
    },
    {
      kind: 'concept',
      title: 'Integrals and limits that have no formula',
      blocks: [
        {
          type: 'p',
          text: 'The bell curve $e^{-x^2}$ is at the heart of probability and statistics, yet it has **no elementary antiderivative** — no combination of the functions you know differentiates to it. Every technique from the integration unit fails. Series don\'t care: substitute, then integrate term by term.',
        },
        {
          type: 'derivation',
          title: 'Approximate $\\displaystyle\\int_0^1 e^{-x^2}\\,dx$',
          steps: [
            { tex: 'e^{-x^2} = \\sum_{n=0}^{\\infty} \\frac{(-x^2)^n}{n!} = \\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{2n}}{n!}', why: 'Substitute $-x^2$ for $x$ in $e^x = \\sum \\frac{x^n}{n!}$. Valid for all $x$, since $R = \\infty$.' },
            { tex: '\\int_0^1 e^{-x^2}\\,dx = \\sum_{n=0}^{\\infty} \\frac{(-1)^n}{n!} \\int_0^1 x^{2n}\\,dx', why: 'Integrate term by term.' },
            { tex: '= \\sum_{n=0}^{\\infty} \\frac{(-1)^n}{n!\\,(2n+1)}', why: '$\\int_0^1 x^{2n}\\,dx = \\frac{1}{2n+1}$.' },
            { tex: '= 1 - \\frac13 + \\frac{1}{10} - \\frac{1}{42} + \\frac{1}{216} - \\frac{1}{1320} + \\frac{1}{9360} - \\cdots', why: 'Write out terms: $n!\\,(2n+1) = 1, 3, 10, 42, 216, 1320, 9360, \\dots$' },
            { tex: '\\approx 1 - 0.333333 + 0.1 - 0.023810 + 0.004630 - 0.000758 = 0.746729', why: 'Add the first six terms ($n = 0$ to $5$).' },
            { tex: '|\\text{error}| < \\frac{1}{9360} \\approx 0.00011', why: 'Alternating series estimate: the terms decrease to $0$, so the error is less than the first omitted term.' },
          ],
          result: '$\\int_0^1 e^{-x^2}\\,dx \\approx 0.7467$, guaranteed to within $0.00011$. (The true value is $0.746824\\ldots$)',
        },
        {
          type: 'graph',
          x: [-0.5, 2.2],
          y: [-0.5, 1.3],
          functions: [
            { expr: 'e^(-x^2)', label: '$y = e^{-x^2}$', color: 'gray', dashed: true },
            { expr: gaussPoly, label: 'partial sum through $\\frac{(-1)^n x^{2n}}{n!}$', color: 'blue' },
          ],
          areas: [{ expr: 'e^(-x^2)', from: 0, to: 1, color: 'teal' }],
          sliders: [{ name: 'n', min: 0, max: 10, step: 1, value: 2, label: 'last index $n$' }],
          readouts: [
            { label: 'series estimate of the area $=$', expr: gaussIntegral, digits: 6 },
            { label: 'true area $\\approx$', expr: '0.746824', digits: 6 },
          ],
          caption: 'On $[0, 1]$ only a few terms are needed: the polynomial is already glued to the curve by $n = 4$. The shaded area is the integral we are computing.',
        },
        {
          type: 'p',
          text: 'Series also make hard limits easy. Replace each function by the start of its series and let the leading terms cancel:',
        },
        {
          type: 'math',
          tex: '\\lim_{x \\to 0} \\frac{\\sin x - x}{x^3} = \\lim_{x \\to 0} \\frac{\\left(x - \\frac{x^3}{6} + \\frac{x^5}{120} - \\cdots\\right) - x}{x^3} = \\lim_{x \\to 0} \\left(-\\frac16 + \\frac{x^2}{120} - \\cdots\\right) = -\\frac16',
          caption: 'L\'Hôpital\'s rule would need three rounds of differentiation for the same answer.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'The error function',
          text: 'The integral $\\frac{2}{\\sqrt\\pi}\\int_0^x e^{-t^2}\\,dt$ is so important that it has a name, $\\operatorname{erf}(x)$, and a place in the C++ standard library: `std::erf` in `<cmath>`. It gives probabilities for normally distributed values, like the spread of bullet impacts around a target or measurement noise in a physics sim. Implementations use series like this one for small $x$.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'Use the first two nonzero terms of a series to approximate $\\displaystyle\\int_0^1 \\sin(x^2)\\,dx$. Give at least 4 decimal places.',
      hint: '$\\sin(x^2) = x^2 - \\frac{x^6}{6} + \\cdots$. Integrate each term from $0$ to $1$.',
      answer: '13/42',
      answerTex: '\\frac13 - \\frac{1}{42} = \\frac{13}{42} \\approx 0.30952',
      minDecimals: 4,
      explanation: '$\\int_0^1 \\left(x^2 - \\frac{x^6}{6}\\right)dx = \\frac13 - \\frac{1}{6 \\cdot 7} = \\frac{14}{42} - \\frac{1}{42} = \\frac{13}{42} \\approx 0.30952$. The next term is $+\\int_0^1 \\frac{x^{10}}{120}\\,dx = \\frac{1}{1320} \\approx 0.00076$, so by the alternating series estimate the error is below $0.00076$. (The true value is $0.310268\\ldots$, an integral that also has no elementary antiderivative.)',
    },
    {
      kind: 'numeric',
      prompt: 'Use the Maclaurin series of $\\arctan x$ to evaluate $\\displaystyle\\lim_{x \\to 0} \\frac{x - \\arctan x}{x^3}$.',
      hint: '$\\arctan x = x - \\frac{x^3}{3} + \\frac{x^5}{5} - \\cdots$. Subtract it from $x$ first.',
      answer: '1/3',
      answerTex: '\\frac{1}{3}',
      explanation: '$x - \\arctan x = x - \\left(x - \\frac{x^3}{3} + \\frac{x^5}{5} - \\cdots\\right) = \\frac{x^3}{3} - \\frac{x^5}{5} + \\cdots$. Dividing by $x^3$ gives $\\frac13 - \\frac{x^2}{5} + \\cdots \\to \\frac13$. The series shows *why* the limit is finite: $x$ and $\\arctan x$ agree up to the $x^3$ term, so their difference is roughly $\\frac{x^3}{3}$.',
    },
    {
      kind: 'concept',
      title: 'How your computer really computes $\\sin x$',
      blocks: [
        {
          type: 'p',
          text: 'It is tempting to think `std::sin(x)` just sums the Maclaurin series. Try that at $x = 100$: the terms $\\frac{100^n}{n!}$ climb to about $10^{42}$ before they start shrinking, and adding and subtracting numbers that size in a `double` (about 16 significant digits) destroys every digit of the answer. Real math libraries use three stages instead:',
        },
        {
          type: 'steps',
          items: [
            {
              title: '[[range-reduction|Range reduction]]',
              text: 'Use periodicity and symmetry to move $x$ into a tiny interval. Write $x = k\\cdot\\frac{\\pi}{2} + r$ with $k$ an integer and $|r| \\le \\frac{\\pi}{4}$. For $e^x$, write $x = k\\ln 2 + r$ with $|r| \\le \\frac{\\ln 2}{2}$.',
            },
            {
              title: 'Polynomial',
              text: 'Evaluate a low-degree polynomial in $r$. Because $|r| < 0.8$, Taylor\'s inequality says degree $11$ already gives $\\sin r$ to about $\\frac{(\\pi/4)^{13}}{13!} \\approx 7 \\times 10^{-12}$. Evaluate it with [[horners-method]]: nested multiply-adds, no powers.',
            },
            {
              title: 'Reconstruction',
              text: 'Undo the reduction with exact identities. $\\sin(r + k\\frac{\\pi}{2})$ is $\\sin r$, $\\cos r$, $-\\sin r$ or $-\\cos r$ depending on $k \\bmod 4$. For exp, $e^x = 2^k e^r$, and multiplying by $2^k$ just adds $k$ to the floating-point exponent — no rounding at all.',
            },
          ],
        },
        {
          type: 'code',
          title: 'my_sin.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdio>

const double HALF_PI = 1.57079632679489661923;
const double LN2 = 0.69314718055994530942;

// Taylor polynomials for |r| <= pi/4, written in Horner form.
double sinPoly(double r) {  // r - r^3/3! + ... + r^11/11!
    double r2 = r * r;
    return r * (1 - r2 / 6 * (1 - r2 / 20 * (1 - r2 / 42
             * (1 - r2 / 72 * (1 - r2 / 110)))));
}
double cosPoly(double r) {  // 1 - r^2/2! + ... + r^12/12!
    double r2 = r * r;
    return 1 - r2 / 2 * (1 - r2 / 12 * (1 - r2 / 30 * (1 - r2 / 56
             * (1 - r2 / 90 * (1 - r2 / 132)))));
}

double mySin(double x) {
    long long k = std::llround(x / HALF_PI);   // nearest multiple of pi/2
    double r = x - k * HALF_PI;                // now |r| <= pi/4
    switch (((k % 4) + 4) % 4) {               // which quarter turn?
        case 0:  return  sinPoly(r);
        case 1:  return  cosPoly(r);
        case 2:  return -sinPoly(r);
        default: return -cosPoly(r);
    }
}

double myExp(double x) {
    long long k = std::llround(x / LN2);       // x = k ln 2 + r
    double r = x - k * LN2;                    // |r| <= ln(2)/2
    double p = 1;                              // e^r up to r^11, Horner form
    for (int n = 11; n >= 1; --n) p = 1 + r / n * p;
    return std::ldexp(p, static_cast<int>(k)); // multiply by 2^k exactly
}

int main() {
    const double xs[] = {0.5, 2.0, 10.0, 100.0, -7.25};
    for (double x : xs)
        std::printf("x = %7.2f   mySin = %13.10f   std::sin = %13.10f\\n",
                    x, mySin(x), std::sin(x));

    double worst = 0;
    for (double x = -100; x <= 100; x += 0.001)
        worst = std::fmax(worst, std::fabs(mySin(x) - std::sin(x)));
    std::printf("worst sin error on [-100, 100]: %s 1e-10\\n",
                worst < 1e-10 ? "below" : "above");

    std::printf("myExp(1)  = %.12f   std::exp(1)  = %.12f\\n", myExp(1), std::exp(1.0));
    std::printf("myExp(20) = %.6e   std::exp(20) = %.6e\\n", myExp(20), std::exp(20.0));
}`,
          output: `x =    0.50   mySin =  0.4794255386   std::sin =  0.4794255386
x =    2.00   mySin =  0.9092974268   std::sin =  0.9092974268
x =   10.00   mySin = -0.5440211109   std::sin = -0.5440211109
x =  100.00   mySin = -0.5063656411   std::sin = -0.5063656411
x =   -7.25   mySin = -0.8230808790   std::sin = -0.8230808790
worst sin error on [-100, 100]: below 1e-10
myExp(1)  = 2.718281828459   std::exp(1)  = 2.718281828459
myExp(20) = 4.851652e+08   std::exp(20) = 4.851652e+08`,
          annotations: [
            { lines: '8-12', text: 'Degree-11 Taylor polynomial of $\\sin r$ in Horner form: $r\\left(1 - \\frac{r^2}{2\\cdot3}\\left(1 - \\frac{r^2}{4\\cdot5}\\left(\\cdots\\right)\\right)\\right)$. The divisors $6, 20, 42, 72, 110$ are $2\\cdot3, 4\\cdot5, 6\\cdot7, \\dots$' },
            { lines: '13-17', text: 'Degree-12 Taylor polynomial of $\\cos r$, built the same way from $1\\cdot2, 3\\cdot4, 5\\cdot6, \\dots$' },
            { lines: '20-21', text: 'Range reduction: subtract the nearest multiple of $\\frac{\\pi}{2}$ so that $|r| \\le \\frac{\\pi}{4}$.' },
            { lines: '22-26', text: 'Reconstruction: a quarter turn swaps sine and cosine; a half turn flips the sign. The `+ 4` keeps the remainder nonnegative for negative $k$.' },
            { lines: '31-35', text: 'The same three stages for $e^x$: reduce by multiples of $\\ln 2$, polynomial for $e^r$, then `ldexp` multiplies by $2^k$ exactly.' },
            { lines: '44-48', text: 'Sweep 200,001 inputs and compare with the standard library.' },
          ],
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'What production libraries do differently',
          text: 'Real libraries refine both stages. The polynomial is usually a *minimax* polynomial (found with the Remez algorithm) rather than the Taylor polynomial: Taylor is perfect at the center and worst at the edges, while minimax spreads the error evenly and needs a degree or two less. Range reduction stores $\\frac{\\pi}{2}$ as a sum of two or three doubles (Cody–Waite) — and for enormous inputs like $x = 10^{22}$, uses hundreds of bits of $\\frac{2}{\\pi}$ (Payne–Hanek). GPU shaders trade accuracy for speed with even shorter polynomials. But the skeleton is always the same: reduce, approximate with a polynomial, reconstruct.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why polynomials and not something else?',
          text: 'Hardware does $+$ and $\\times$ in a cycle or two (and fused multiply-add does both at once), so polynomials are the only functions a CPU evaluates natively. Taylor\'s inequality tells you the degree needed for a target accuracy, and range reduction keeps $|x - a|$ small so that degree stays low. The whole lesson in one sentence: keep $|x - a|$ small and $(n+1)!$ does the rest.',
        },
      ],
    },
    {
      kind: 'truefalse',
      prompt: 'Because the Maclaurin series of $\\sin x$ converges for every $x$, summing its first $20$ terms in `double` precision gives an accurate value of $\\sin(100)$.',
      answer: false,
      explanation: 'Convergence is about the infinite sum in exact arithmetic. With only 20 terms (degree $39$), Taylor\'s inequality gives a "bound" of $\\frac{100^{40}}{40!} \\approx 10^{32}$ — useless. Even with enough terms, the intermediate terms reach about $10^{42}$ and a `double` keeps only about 16 significant digits, so rounding error swamps the answer (which is at most $1$ in size). That is exactly why libraries reduce $x$ to $|r| \\le \\frac{\\pi}{4}$ first.',
    },
    {
      kind: 'order',
      prompt: 'Put the steps a math library uses to compute $e^x$ in order.',
      lines: [
        'Choose the integer $k$ nearest to $\\frac{x}{\\ln 2}$',
        'Compute $r = x - k\\ln 2$, so that $|r| \\le \\frac{\\ln 2}{2}$',
        'Evaluate a short polynomial approximation of $e^r$ with Horner\'s method',
        'Multiply by $2^k$ by adjusting the floating-point exponent',
      ],
      distractors: ['Sum $\\frac{x^n}{n!}$ until the terms are smaller than $10^{-16}$'],
      explanation: 'Range reduction ($k$ and $r$) comes first, so the polynomial only ever sees small inputs where a few terms suffice. Then reconstruction uses $e^x = e^{k\\ln 2 + r} = 2^k e^r$. Summing the raw series for large $x$ (the distractor) is slow and loses accuracy to rounding.',
    },
    {
      kind: 'concept',
      title: 'Euler\'s formula: $e^{i\\theta}$',
      blocks: [
        {
          type: 'p',
          text: 'The series $e^x = \\sum \\frac{x^n}{n!}$ only uses addition and multiplication, so it makes sense for inputs that aren\'t real numbers at all. Plug in an imaginary number $i\\theta$, where $i^2 = -1$, and something remarkable happens.',
        },
        {
          type: 'derivation',
          title: 'Deriving $e^{i\\theta} = \\cos\\theta + i\\sin\\theta$',
          steps: [
            { tex: 'e^{i\\theta} = 1 + i\\theta + \\frac{(i\\theta)^2}{2!} + \\frac{(i\\theta)^3}{3!} + \\frac{(i\\theta)^4}{4!} + \\frac{(i\\theta)^5}{5!} + \\cdots', why: 'Substitute $x = i\\theta$ into the exponential series (this is how $e^z$ is *defined* for complex $z$).' },
            { tex: 'i^2 = -1, \\quad i^3 = -i, \\quad i^4 = 1, \\quad i^5 = i, \\ \\dots', why: 'Powers of $i$ cycle with period four — just like the derivatives of $\\sin$.' },
            { tex: '= 1 + i\\theta - \\frac{\\theta^2}{2!} - i\\frac{\\theta^3}{3!} + \\frac{\\theta^4}{4!} + i\\frac{\\theta^5}{5!} - \\cdots', why: 'Apply the cycle to each term.' },
            { tex: '= \\left(1 - \\frac{\\theta^2}{2!} + \\frac{\\theta^4}{4!} - \\cdots\\right) + i\\left(\\theta - \\frac{\\theta^3}{3!} + \\frac{\\theta^5}{5!} - \\cdots\\right)', why: 'Group the real terms (even powers) and the imaginary terms (odd powers). Rearranging is allowed because the series converges absolutely.' },
            { tex: '= \\cos\\theta + i\\sin\\theta', why: 'Recognise the Maclaurin series of cosine and sine.' },
          ],
          result: '[[eulers-formula|Euler\'s formula]]: $e^{i\\theta} = \\cos\\theta + i\\sin\\theta$. At $\\theta = \\pi$: $e^{i\\pi} = -1$, i.e. $e^{i\\pi} + 1 = 0$, linking the five most famous constants in mathematics.',
        },
        {
          type: 'graph',
          x: [-4.5, 2.5],
          y: [-3, 3.5],
          equal: true,
          parametric: [{ x: 'cos(t)', y: 'sin(t)', t: [0, '2pi'], color: 'gray', dashed: true }],
          segments: eulerSegments,
          points: [{ x: 'cos(a)', y: 'sin(a)', label: 'e^(iθ) = (cos θ, sin θ)', color: 'orange' }],
          sliders: [{ name: 'a', min: 0, max: 3.2, step: 0.01, value: 1, label: '$\\theta$' }],
          readouts: [
            { label: '$\\cos\\theta =$', expr: 'cos(a)', digits: 4 },
            { label: '$\\sin\\theta =$', expr: 'sin(a)', digits: 4 },
          ],
          caption: 'Each arrow is one term $\\frac{(i\\theta)^k}{k!}$ drawn in the complex plane (real part across, imaginary part up). Multiplying by $i$ turns the direction by $90°$, so the arrows spiral inward and land exactly on the point at angle $\\theta$ on the unit circle. Slide $\\theta$ to $\\pi \\approx 3.14$ to watch them land on $-1$.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Rotation is multiplication',
          text: 'Since $e^{i\\alpha}e^{i\\beta} = e^{i(\\alpha + \\beta)}$, multiplying a complex number by $e^{i\\theta}$ **rotates** it by $\\theta$. Expanding $(x + iy)(\\cos\\theta + i\\sin\\theta)$ gives exactly the 2D rotation formulas $x\' = x\\cos\\theta - y\\sin\\theta$, $y\' = x\\sin\\theta + y\\cos\\theta$ used in every game engine. Quaternions are the 3D generalization, and the Fast Fourier Transform behind audio processing is built on powers of $e^{2\\pi i/N}$.',
        },
      ],
    },
    {
      kind: 'error',
      prompt: 'A student tries to derive Euler\'s formula. Tap the first line that is wrong.',
      lines: [
        '$e^{i\\theta} = \\sum_{n=0}^{\\infty} \\frac{(i\\theta)^n}{n!}$',
        '$= 1 + i\\theta + \\frac{i^2\\theta^2}{2!} + \\frac{i^3\\theta^3}{3!} + \\frac{i^4\\theta^4}{4!} + \\cdots$',
        '$= 1 + i\\theta - \\frac{\\theta^2}{2!} + i\\frac{\\theta^3}{3!} + \\frac{\\theta^4}{4!} + \\cdots$',
        '$= \\left(1 - \\frac{\\theta^2}{2!} + \\frac{\\theta^4}{4!} - \\cdots\\right) + i\\left(\\theta + \\frac{\\theta^3}{3!} + \\cdots\\right)$',
      ],
      errorLines: [3],
      explanation: 'Line 3 uses $i^3 = i$, but $i^3 = i^2 \\cdot i = -i$. With the correct sign the imaginary part is $\\theta - \\frac{\\theta^3}{3!} + \\frac{\\theta^5}{5!} - \\cdots = \\sin\\theta$. (The student\'s all-plus imaginary series is actually $\\sinh\\theta$ — wrong for real $\\theta$.) The cycle to remember: $i^0, i^1, i^2, i^3 = 1, i, -1, -i$.',
    },
    {
      kind: 'fill',
      prompt: 'Complete the facts about Euler\'s formula.',
      template: 'Setting $\\theta = \\pi$ gives $e^{i\\pi} =$ ___ , and multiplying a complex number by $e^{i\\theta}$ ___ it by the angle $\\theta$.',
      blanks: [{ answers: ['$-1$'] }, { answers: ['rotates'] }],
      wordBank: ['$-1$', '$1$', '$0$', '$i$', 'rotates', 'scales', 'translates'],
      explanation: '$e^{i\\pi} = \\cos\\pi + i\\sin\\pi = -1 + 0i = -1$. Because $|e^{i\\theta}| = \\sqrt{\\cos^2\\theta + \\sin^2\\theta} = 1$, multiplying by it never changes length — it only adds $\\theta$ to the angle, which is a rotation. (Multiplying by a real number would scale; adding would translate.)',
    },
    {
      kind: 'concept',
      title: 'The end of calculus — and what comes next',
      blocks: [
        {
          type: 'p',
          text: 'Look how far you have come. You started with the real numbers and the order of operations. You learned functions, then trigonometry, then limits, derivatives and integrals, and finally how to add up infinitely many numbers. This last unit tied it all together: $e^x$, $\\sin x$, $\\ln x$ and $\\arctan x$ are all *polynomials that never stop*, and with Taylor\'s inequality you can tell a computer exactly how many terms to keep. You have even written your own `sin` — the same function every game you have played calls thousands of times per frame.',
        },
        {
          type: 'p',
          text: 'The road toward your CS degree branches into three courses next, and every one of them builds on what you have done here:',
        },
        {
          type: 'list',
          items: [
            '**Linear algebra** — vectors, matrices and linear transformations: the language of 3D graphics, cameras, shaders and machine learning. You have already met its seeds in rotation formulas, systems of equations and the $e^{i\\theta}$ rotations above.',
            '**Discrete mathematics** — logic, proofs, induction, sets, counting and graphs: the mathematics of algorithms and data structures. Your work with sequences, sums and factorials is a direct warm-up.',
            '**Probability** — randomness, expected value and distributions: loot tables, procedural generation, game AI and statistics. You have already computed an expected value with a power series, and the bell curve $e^{-x^2}$ you just integrated is its most important function.',
          ],
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Thank you for learning with Math Forge',
          text: 'Calculus has a reputation for being where people give up on math. You didn\'t. Revisit any lesson whenever you need it — the formula sheets and glossary will be here — and carry the habit this course was built on into everything next: don\'t just use a rule, ask *why* it works. Go build something great.',
        },
      ],
    },
  ],
  takeaways: [
    'Taylor\'s inequality: if $|f^{(n+1)}| \\le M$ near $a$, then $|f(x) - T_n(x)| \\le \\frac{M}{(n+1)!}|x - a|^{n+1}$.',
    'Solve $\\frac{M|x-a|^{n+1}}{(n+1)!} < \\varepsilon$ for $n$ to choose how many terms a computation needs.',
    'Integrating series term by term evaluates integrals with no elementary antiderivative, such as $\\int_0^1 e^{-x^2}\\,dx \\approx 0.7468$; series also evaluate tricky limits.',
    'Math libraries compute $\\sin x$ and $e^x$ by range reduction, a short polynomial (Horner\'s method), and exact reconstruction.',
    'Substituting $i\\theta$ into the exponential series gives Euler\'s formula $e^{i\\theta} = \\cos\\theta + i\\sin\\theta$, and multiplying by $e^{i\\theta}$ rotates by $\\theta$.',
  ],
  reading: [
    {
      title: 'OpenStax Calculus Volume 2 — 6.4 Working with Taylor Series',
      url: 'https://openstax.org/books/calculus-volume-2/pages/6-4-working-with-taylor-series',
      source: 'openstax',
      note: 'More examples of integrals and limits evaluated with series, plus the binomial series.',
    },
    {
      title: "Paul's Online Notes — Applications of Series",
      url: 'https://tutorial.math.lamar.edu/Classes/CalcII/ApplicationsSeries.aspx',
      source: 'paul',
      note: 'Short worked examples of approximating values and integrals with Taylor polynomials.',
    },
    {
      title: "Wikipedia — Euler's formula",
      url: 'https://en.wikipedia.org/wiki/Euler%27s_formula',
      source: 'wikipedia',
      note: 'Several proofs, the geometric meaning, and applications in engineering and physics.',
    },
    {
      title: '3Blue1Brown — e^(iπ) in 3.14 minutes, using dynamics',
      url: 'https://www.youtube.com/watch?v=v0YEaeIClKY',
      source: 'video',
      note: 'Euler\'s formula seen as rotation, built on the same "multiplying by $i$ turns 90°" idea as the arrow spiral in this lesson.',
    },
  ],
};
