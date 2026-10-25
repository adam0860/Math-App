import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'calc2-integral-test',
  title: 'The Integral Test and p-Series',
  summary: 'Compare a series with an improper integral: the picture of rectangles under a curve settles the fate of every p-series and bounds the error of a partial sum.',
  minutes: 18,
  objectives: [
    'Explain, with the rectangles-versus-curve picture, why a series and an improper integral share the same fate',
    'State the hypotheses of the Integral Test precisely and check them for a given series',
    'Use the Integral Test to decide convergence of series such as $\\sum \\frac{1}{n^2 + 1}$ and $\\sum \\frac{1}{n \\ln n}$',
    'Classify any $p$-series $\\sum \\frac{1}{n^p}$ at a glance',
    'Bound the remainder $R_n = s - s_n$ with integrals, and find how many terms guarantee a given accuracy',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Sums are areas of rectangles',
      blocks: [
        {
          type: 'p',
          text: 'Most series have no formula for their partial sums, so we cannot just take a limit as we did with geometric and telescoping series. The new idea: draw each term $a_n = f(n)$ as a rectangle of height $f(n)$ and width $1$. The sum of the series is the total area of the rectangles, and that area can be compared with the area under the curve $y = f(x)$, an [[improper-integral]] we know how to compute.',
        },
        {
          type: 'p',
          text: 'Start with the [[harmonic-series]] $\\sum \\frac{1}{n}$. Put the rectangle for $a_k = \\frac{1}{k}$ on the interval $[k, k+1]$. Because $\\frac{1}{x}$ is decreasing, the top-left corner touches the curve and the rest of the rectangle sticks out **above** it.',
        },
        {
          type: 'graph',
          x: [0, 13],
          y: [0, 1.2],
          xStep: 1,
          yStep: 0.25,
          functions: [{ expr: '1/x', label: '$y = \\frac{1}{x}$', domain: [0.8, 13] }],
          riemann: { expr: '1/x', from: 1, to: '1 + n', n: 'n', method: 'left', color: 'orange' },
          sliders: [{ name: 'n', min: 1, max: 12, step: 1, value: 6, label: 'number of terms $n$' }],
          readouts: [{ label: 'area under the curve $\\int_1^{n+1} \\frac{dx}{x} = \\ln(n+1) =$', expr: 'ln(n + 1)', digits: 4 }],
          caption: 'The orange rectangles have areas $1, \\frac{1}{2}, \\dots, \\frac{1}{n}$, so their total is $s_n$. They cover the region under the curve from $1$ to $n + 1$, so $s_n \\ge \\ln(n+1)$, which grows without bound.',
        },
        {
          type: 'p',
          text: 'Now try $\\sum \\frac{1}{n^2}$, but slide each rectangle one step to the **left**: put $a_k = \\frac{1}{k^2}$ on $[k - 1, k]$. Its top-right corner touches the curve, so the rectangle sits **below** it. Skipping the first term, the rest of the rectangles fit under the curve from $x = 1$ onward:',
        },
        {
          type: 'graph',
          x: [0, 13],
          y: [0, 1.2],
          xStep: 1,
          yStep: 0.25,
          functions: [{ expr: '1/x^2', label: '$y = \\frac{1}{x^2}$', domain: [0.85, 13] }],
          riemann: { expr: '1/x^2', from: 1, to: '1 + n', n: 'n', method: 'right', color: 'teal' },
          sliders: [{ name: 'n', min: 1, max: 12, step: 1, value: 6, label: 'number of rectangles $n$' }],
          readouts: [{ label: '$\\int_1^{n+1} \\frac{dx}{x^2} = 1 - \\frac{1}{n+1} =$', expr: '1 - 1/(n + 1)', digits: 4 }],
          caption: 'The teal rectangles have areas $\\frac{1}{2^2}, \\frac{1}{3^2}, \\dots$ and lie under the curve, whose total area from $1$ to $\\infty$ is $1$. So $s_n \\le 1 + 1 = 2$ for every $n$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why bounded partial sums are enough',
          text: 'For a series of positive terms, the partial sums only go up: $s_{n+1} = s_n + a_{n+1} > s_n$. An increasing sequence that is bounded above converges by the [[calc2-monotone-convergence-theorem|Monotone Convergence Theorem]]. So $s_n \\le 2$ for all $n$ proves that $\\sum \\frac{1}{n^2}$ converges, even though the picture does not tell us the exact sum.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'numeric',
      prompt: 'The first picture shows $s_n = 1 + \\frac{1}{2} + \\cdots + \\frac{1}{n} \\ge \\ln(n+1)$. What is the smallest integer $n$ for which this bound guarantees $s_n \\ge 10$?',
      hint: 'Solve $\\ln(n + 1) \\ge 10$, i.e. $n + 1 \\ge e^{10} \\approx 22026.47$.',
      label: '$n =$',
      answer: '22026',
      explanation: '$\\ln(n+1) \\ge 10$ means $n + 1 \\ge e^{10} \\approx 22026.47$, so $n \\ge 22025.47$, and the smallest integer is $n = 22026$. The bound is a guarantee, not the exact crossing point: the true partial sums pass $10$ at $n = 12367$. Either way, it shows how slowly the harmonic series diverges.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'The Integral Test',
      blocks: [
        {
          type: 'p',
          text: 'The two pictures work for any positive, decreasing function. Rectangles above the curve give $s_n \\ge \\int_1^{n+1} f(x)\\,dx$, so a divergent integral forces a divergent series. Rectangles below the curve give $s_n \\le a_1 + \\int_1^{n} f(x)\\,dx$, so a convergent integral caps the partial sums.',
        },
        {
          type: 'theorem',
          name: 'The Integral Test',
          text: 'Suppose $f$ is **continuous, positive and decreasing** on $[1, \\infty)$, and $a_n = f(n)$. Then $\\sum\\limits_{n=1}^{\\infty} a_n$ and $\\displaystyle\\int_1^{\\infty} f(x)\\,dx$ either **both converge or both diverge**. The same holds if the conditions only hold on $[N, \\infty)$ for some $N$, with the sum and integral starting at $N$.',
        },
        {
          type: 'p',
          text: 'Checking "decreasing" is usually a derivative calculation: show $f\'(x) < 0$ for $x$ large enough.',
        },
        {
          type: 'derivation',
          title: 'Does $\\displaystyle\\sum_{n=1}^{\\infty} \\frac{1}{n^2 + 1}$ converge?',
          steps: [
            { tex: 'f(x) = \\frac{1}{x^2 + 1}', why: 'The function whose values at integers are the terms.' },
            { tex: "f(x) > 0, \\qquad f'(x) = \\frac{-2x}{(x^2+1)^2} < 0 \\text{ for } x \\ge 1", why: 'Check the hypotheses: $f$ is continuous (the denominator is never $0$), positive, and decreasing because its derivative is negative.' },
            { tex: '\\int_1^{\\infty} \\frac{dx}{x^2 + 1} = \\lim_{b \\to \\infty} \\Big[\\arctan x\\Big]_1^b', why: 'Write the improper integral as a limit; $\\arctan x$ is the antiderivative of $\\frac{1}{1 + x^2}$.' },
            { tex: '= \\lim_{b \\to \\infty} \\arctan b - \\arctan 1 = \\frac{\\pi}{2} - \\frac{\\pi}{4} = \\frac{\\pi}{4}', why: '$\\arctan b \\to \\frac{\\pi}{2}$ as $b \\to \\infty$, and $\\arctan 1 = \\frac{\\pi}{4}$.' },
            { tex: '\\implies \\sum_{n=1}^{\\infty} \\frac{1}{n^2 + 1} \\text{ converges}', why: 'The integral is finite, so by the Integral Test the series converges.' },
          ],
          result: 'The series converges. Its sum is **not** $\\frac{\\pi}{4}$ (it is about $1.0767$); the test only reports convergence.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'The sum is not the integral',
          text: 'The Integral Test compares *fates*, not *values*. In the pictures, the rectangles and the region under the curve have different areas. For $\\sum \\frac{1}{n^2}$ the integral from $1$ is $1$, but the sum is $\\frac{\\pi^2}{6} \\approx 1.645$.',
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'Graders check that you **verified all three hypotheses** (continuous, positive, decreasing) before using the test, and that you state the conclusion in words: "the integral converges, so by the Integral Test the series converges." Skipping the decreasing check, especially when it only holds eventually, is the usual way to lose points.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'numeric',
      prompt: 'To test $\\displaystyle\\sum_{n=1}^{\\infty} n e^{-n^2}$ (whose terms are positive and decreasing), evaluate the improper integral $\\displaystyle\\int_1^{\\infty} x e^{-x^2}\\,dx$.',
      hint: 'Substitute $u = x^2$, so $du = 2x\\,dx$.',
      answer: '1/(2e)',
      answerTex: '\\frac{1}{2e}',
      explanation: 'With $u = x^2$, an antiderivative of $xe^{-x^2}$ is $-\\frac{1}{2}e^{-x^2}$. So $\\int_1^{b} x e^{-x^2}dx = -\\frac{1}{2}e^{-b^2} + \\frac{1}{2}e^{-1} \\to \\frac{1}{2e} \\approx 0.184$ as $b \\to \\infty$. The integral is finite, so the series converges by the Integral Test (its sum, about $0.405$, is a different number).',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'A slow divergence: $\\sum \\frac{1}{n \\ln n}$',
      blocks: [
        {
          type: 'p',
          text: 'Some series sit right on the edge. The terms $\\frac{1}{n \\ln n}$ are smaller than $\\frac{1}{n}$, but are they small enough? The comparison with $\\frac{1}{n}$ cannot decide (smaller than a divergent series proves nothing), so we integrate. The series starts at $n = 2$ because $\\ln 1 = 0$.',
        },
        {
          type: 'derivation',
          title: 'Does $\\displaystyle\\sum_{n=2}^{\\infty} \\frac{1}{n \\ln n}$ converge?',
          steps: [
            { tex: 'f(x) = \\frac{1}{x \\ln x}, \\quad x \\ge 2', why: 'Continuous and positive for $x \\ge 2$. It is decreasing because the denominator $x \\ln x$ is a product of two positive increasing functions.' },
            { tex: '\\int_2^{b} \\frac{dx}{x \\ln x} = \\int_{\\ln 2}^{\\ln b} \\frac{du}{u}', why: 'Substitute $u = \\ln x$, $du = \\frac{dx}{x}$. The limits change from $x = 2, b$ to $u = \\ln 2, \\ln b$.' },
            { tex: '= \\ln(\\ln b) - \\ln(\\ln 2)', why: 'The antiderivative of $\\frac{1}{u}$ is $\\ln u$ (here $u > 0$).' },
            { tex: '\\lim_{b \\to \\infty} \\ln(\\ln b) = \\infty', why: '$\\ln b \\to \\infty$, and the logarithm of something that goes to infinity also goes to infinity, however slowly.' },
            { tex: '\\implies \\sum_{n=2}^{\\infty} \\frac{1}{n \\ln n} \\text{ diverges}', why: 'The integral diverges, so by the Integral Test the series does too.' },
          ],
          result: 'Diverges, astonishingly slowly: the partial sums grow like $\\ln(\\ln n)$, and $\\ln(\\ln 10^9) \\approx 3$. A billion terms add up to only about $3.8$.',
        },
        {
          type: 'p',
          text: 'The "eventually" version of the test matters often. For $\\sum \\frac{\\ln n}{n}$, the function $f(x) = \\frac{\\ln x}{x}$ has $f\'(x) = \\frac{1 - \\ln x}{x^2}$, which is negative only for $x > e$. That is fine: apply the test from $n = 3$ on. Since $\\int_3^{\\infty} \\frac{\\ln x}{x}dx = \\lim \\frac{(\\ln b)^2 - (\\ln 3)^2}{2} = \\infty$, the series diverges; the first two terms cannot change that.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'mcq',
      prompt: 'For which series are the hypotheses of the Integral Test satisfied (at least eventually)?',
      options: [
        {
          text: '$\\displaystyle\\sum_{n=1}^{\\infty} \\frac{(-1)^n}{n}$',
          why: 'The terms are not all positive, and the function would have to be $\\frac{(-1)^x}{x}$, which is not even defined for most real $x$. The Integral Test needs positive terms.',
        },
        {
          text: '$\\displaystyle\\sum_{n=1}^{\\infty} \\frac{\\ln n}{n}$',
          correct: true,
          why: 'Correct. $f(x) = \\frac{\\ln x}{x}$ is continuous, positive for $x > 1$, and decreasing for $x > e$ since $f\'(x) = \\frac{1 - \\ln x}{x^2}$. Apply the test from $n = 3$.',
        },
        {
          text: '$\\displaystyle\\sum_{n=1}^{\\infty} \\frac{2 + \\cos(\\pi n)}{n^2}$',
          why: 'The terms are positive, but $\\cos(\\pi n)$ alternates between $-1$ and $1$, so the terms jump up and down: $\\frac{1}{1}, \\frac{3}{4}, \\frac{1}{9}, \\frac{3}{16}, \\dots$. They are not decreasing, even eventually. (A comparison test handles it easily.)',
        },
      ],
      explanation: 'The Integral Test needs a function that is continuous, positive and decreasing from some point on. Sign changes and oscillation break it. In the oscillating case the rectangles no longer sit neatly above or below the curve, so the picture behind the test collapses.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'p-series',
      blocks: [
        {
          type: 'p',
          text: 'The Integral Test settles a whole family at once. A [[p-series]] is $\\sum\\limits_{n=1}^{\\infty} \\frac{1}{n^p}$ for a constant $p$. Together with geometric series, $p$-series are the reference series that the comparison tests of the next lesson rely on, so memorise this result.',
        },
        {
          type: 'theorem',
          name: 'The p-series test',
          tex: '\\sum_{n=1}^{\\infty} \\frac{1}{n^p} \\;\\text{ converges if } p > 1 \\text{ and diverges if } p \\le 1',
        },
        {
          type: 'derivation',
          title: 'Proof via the Integral Test',
          steps: [
            { tex: 'p \\le 0: \\quad \\lim_{n \\to \\infty} \\frac{1}{n^p} \\ne 0', why: 'For $p < 0$ the terms $n^{-p}$ grow, and for $p = 0$ they are all $1$. Either way the divergence test shows divergence.' },
            { tex: 'p > 0: \\quad f(x) = x^{-p} \\text{ is continuous, positive, decreasing on } [1, \\infty)', why: 'Its derivative $-p\\,x^{-p-1}$ is negative, so the Integral Test applies.' },
            { tex: 'p = 1: \\quad \\int_1^{b} \\frac{dx}{x} = \\ln b \\to \\infty', why: 'The harmonic case: divergent.' },
            { tex: 'p \\ne 1: \\quad \\int_1^{b} x^{-p}\\,dx = \\frac{b^{1-p} - 1}{1 - p}', why: 'Power rule for integrals, valid because $p \\ne 1$.' },
            { tex: 'p > 1: \\; b^{1-p} \\to 0 \\implies \\int_1^{\\infty} x^{-p}\\,dx = \\frac{1}{p - 1}', why: 'The exponent $1 - p$ is negative, so $b^{1-p} \\to 0$. The integral converges, and so does the series.' },
            { tex: '0 < p < 1: \\; b^{1-p} \\to \\infty', why: 'The exponent $1 - p$ is positive, so the integral diverges, and so does the series.' },
          ],
          result: 'The dividing line is exactly $p = 1$: the harmonic series is the largest $p$-series that diverges.',
        },
        {
          type: 'graph',
          x: [0, 21],
          y: [0, 1.1],
          xStep: 2,
          yStep: 0.25,
          functions: [{ expr: 'x^(-p)', label: '$y = x^{-p}$', domain: [0.9, 21] }],
          riemann: { expr: 'x^(-p)', from: 1, to: 21, n: 20, method: 'right', color: 'teal' },
          sliders: [{ name: 'p', min: 0.55, max: 2.95, step: 0.1, value: 1.25, label: '$p$' }],
          readouts: [
            { label: 'area so far $\\int_1^{21} x^{-p}\\,dx =$', expr: '(21^(1 - p) - 1)/(1 - p)', digits: 4 },
            { label: 'if $p > 1$, total area $\\frac{1}{p-1} =$', expr: '1/(p - 1)', digits: 4 },
          ],
          caption: 'Rectangles for $\\frac{1}{2^p}, \\frac{1}{3^p}, \\dots$ under $y = x^{-p}$. For $p > 1$ the curve hugs the axis fast enough that the total area is the finite number $\\frac{1}{p - 1}$; for $p < 1$ the "area so far" keeps growing without bound as the window extends.',
        },
        {
          type: 'table',
          headers: ['series', '$p$', 'verdict'],
          rows: [
            ['$\\sum \\frac{1}{n^2}$', '$2$', 'converges'],
            ['$\\sum \\frac{1}{n\\sqrt{n}}$', '$\\frac{3}{2}$', 'converges'],
            ['$\\sum \\frac{1}{n}$', '$1$', 'diverges'],
            ['$\\sum \\frac{1}{\\sqrt{n}}$', '$\\frac{1}{2}$', 'diverges'],
            ['$\\sum \\frac{1}{\\sqrt[3]{n^4}}$', '$\\frac{4}{3}$', 'converges'],
          ],
          caption: 'Rewrite roots as powers first: $n\\sqrt{n} = n^{3/2}$ and $\\sqrt[3]{n^4} = n^{4/3}$.',
        },
        {
          type: 'callout',
          variant: 'history',
          title: 'The Basel problem',
          text: 'Mathematicians knew $\\sum \\frac{1}{n^2}$ converges long before anyone could find its sum. In 1734 Leonhard Euler stunned Europe by proving $\\sum\\limits_{n=1}^{\\infty} \\frac{1}{n^2} = \\frac{\\pi^2}{6}$. Why $\\pi$, a circle number, appears in a sum of reciprocal squares is a beautiful story (see the 3Blue1Brown video in the reading list).',
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'truefalse',
      prompt: 'The series $\\displaystyle\\sum_{n=1}^{\\infty} \\frac{1}{n^{1.001}}$ converges.',
      answer: true,
      explanation: 'True. It is a $p$-series with $p = 1.001 > 1$. The integral $\\int_1^{\\infty} x^{-1.001}dx = \\frac{1}{0.001} = 1000$ is finite, so the series converges. The convergence is painfully slow (the sum is about $1000.58$), but any $p$ strictly greater than $1$ is enough. Only $p \\le 1$ diverges.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'fill',
      prompt: 'Classify these $p$-series. Rewrite each term as $\\frac{1}{n^p}$ first.',
      template: '$\\sum \\frac{1}{\\sqrt[4]{n^3}}$ ___, and $\\sum \\frac{\\sqrt{n}}{n^2}$ ___.',
      blanks: [{ answers: ['diverges'] }, { answers: ['converges'] }],
      wordBank: ['diverges', 'converges', 'cannot be classified'],
      explanation: '$\\sqrt[4]{n^3} = n^{3/4}$, so the first is a $p$-series with $p = \\frac{3}{4} \\le 1$: it diverges. For the second, $\\frac{\\sqrt{n}}{n^2} = \\frac{n^{1/2}}{n^2} = \\frac{1}{n^{3/2}}$, a $p$-series with $p = \\frac{3}{2} > 1$: it converges. Simplifying the exponent is the whole job.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'concept',
      title: 'How good is a partial sum? Remainder estimates',
      blocks: [
        {
          type: 'p',
          text: 'Knowing $\\sum \\frac{1}{n^3}$ converges is nice; knowing its value to six decimal places is useful. In practice we approximate the sum $s$ by a partial sum $s_n$, and the error is the **remainder**, the sum of all the terms we left out:',
        },
        { type: 'math', tex: 'R_n = s - s_n = a_{n+1} + a_{n+2} + a_{n+3} + \\cdots' },
        {
          type: 'p',
          text: 'The rectangle pictures apply to the tail just as they did to the whole series. Rectangles for $a_{n+1}, a_{n+2}, \\dots$ placed to the left of their $x$-values fit under the curve from $n$ on; placed to the right, they cover the curve from $n + 1$ on. The result is the [[calc2-integral-test-remainder|remainder estimate]].',
        },
        {
          type: 'graph',
          x: [0, 20],
          y: [0, 0.3],
          xStep: 2,
          yStep: 0.05,
          functions: [{ expr: '1/x^2', label: '$y = \\frac{1}{x^2}$', domain: [1.5, 20] }],
          areas: [{ expr: '1/x^2', from: 'n', to: 20, color: 'purple' }],
          riemann: { expr: '1/x^2', from: 'n', to: 'n + 12', n: 12, method: 'right', color: 'teal' },
          sliders: [{ name: 'n', min: 2, max: 8, step: 1, value: 3, label: '$n$' }],
          readouts: [{ label: 'upper bound $\\int_n^{\\infty} \\frac{dx}{x^2} = \\frac{1}{n} =$', expr: '1/n', digits: 4 }],
          caption: 'The teal rectangles are the left-out terms $a_{n+1}, a_{n+2}, \\dots$ of $\\sum \\frac{1}{k^2}$. They lie inside the purple region under the curve from $x = n$ on, so $R_n \\le \\int_n^{\\infty} f(x)\\,dx$.',
        },
        {
          type: 'theorem',
          name: 'Remainder estimate for the Integral Test',
          tex: '\\int_{n+1}^{\\infty} f(x)\\,dx \\;\\le\\; R_n \\;\\le\\; \\int_{n}^{\\infty} f(x)\\,dx',
          text: 'Valid when $f$ is continuous, positive and decreasing on $[n, \\infty)$ and $\\sum a_n$ converges. Adding $s_n$ throughout traps the sum: $s_n + \\int_{n+1}^{\\infty} f \\le s \\le s_n + \\int_n^{\\infty} f$.',
        },
        {
          type: 'derivation',
          title: 'Estimate $\\displaystyle\\sum_{n=1}^{\\infty} \\frac{1}{n^3}$ using $s_{10}$',
          steps: [
            { tex: 's_{10} = 1 + \\frac{1}{8} + \\frac{1}{27} + \\cdots + \\frac{1}{1000} \\approx 1.197532', why: 'Add the first ten terms (a calculator or a five-line loop).' },
            { tex: '\\int_{k}^{\\infty} \\frac{dx}{x^3} = \\lim_{b \\to \\infty} \\left[-\\frac{1}{2x^2}\\right]_k^b = \\frac{1}{2k^2}', why: 'The tail integral in general; $-\\frac{1}{2b^2} \\to 0$.' },
            { tex: '\\frac{1}{2 \\cdot 11^2} \\le R_{10} \\le \\frac{1}{2 \\cdot 10^2}, \\quad\\text{i.e.}\\quad 0.004132 \\le R_{10} \\le 0.005', why: 'Use $k = 11$ for the lower bound and $k = 10$ for the upper bound.' },
            { tex: '1.201664 \\le s \\le 1.202532', why: 'Add $s_{10}$ to each part of the inequality.' },
          ],
          result: 'Ten terms pin the sum down to an interval of width less than $0.001$. (The true value is $1.2020569\\ldots$, known as Apéry\'s constant.)',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'When can the loop stop?',
          text: 'Numerical code that sums a series needs a stopping rule. "Stop when the next term is tiny" is dangerous: the harmonic series has tiny terms and an infinite sum. The remainder estimate gives an honest rule. For $\\sum \\frac{1}{k^2}$, $R_n \\le \\frac{1}{n}$, so to be accurate to $10^{-4}$ you need $n \\ge 10{,}000$ terms, which also tells you in advance how long the loop will run.',
        },
      ],
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'expr',
      prompt: 'For the series $\\sum \\frac{1}{k^3}$, give the upper bound $\\displaystyle\\int_n^{\\infty} \\frac{dx}{x^3}$ for the remainder $R_n$, as a function of $n$.',
      variables: ['n'],
      domain: [1, 5],
      label: '$R_n \\le$',
      answer: '1/(2n^2)',
      answerTex: '\\frac{1}{2n^2}',
      hint: 'An antiderivative of $x^{-3}$ is $-\\frac{1}{2}x^{-2}$.',
      explanation: '$\\int_n^{b} x^{-3}dx = \\left[-\\frac{1}{2x^2}\\right]_n^b = \\frac{1}{2n^2} - \\frac{1}{2b^2} \\to \\frac{1}{2n^2}$ as $b \\to \\infty$. So using $n$ terms of $\\sum \\frac{1}{k^3}$ leaves an error of at most $\\frac{1}{2n^2}$: with $n = 10$, at most $0.005$, as in the worked example.',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'numeric',
      prompt: 'How many terms of $\\displaystyle\\sum_{k=1}^{\\infty} \\frac{1}{k^4}$ does the remainder estimate say are enough to guarantee $R_n \\le 10^{-6}$? Give the smallest such $n$.',
      hint: 'Use $R_n \\le \\int_n^{\\infty} x^{-4}\\,dx = \\frac{1}{3n^3}$ and solve $\\frac{1}{3n^3} \\le 10^{-6}$.',
      label: '$n =$',
      answer: '70',
      explanation: 'The tail integral is $\\int_n^{\\infty} x^{-4}dx = \\frac{1}{3n^3}$. We need $\\frac{1}{3n^3} \\le 10^{-6}$, i.e. $n^3 \\ge \\frac{10^6}{3} \\approx 333{,}333.3$, so $n \\ge \\sqrt[3]{333{,}333.3} \\approx 69.34$. The smallest integer is $n = 70$. (Check: $n = 69$ gives $\\frac{1}{3 \\cdot 69^3} \\approx 1.015 \\times 10^{-6}$, just too big.)',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'error',
      prompt: 'A student uses the Integral Test on $\\displaystyle\\sum_{n=1}^{\\infty} \\frac{1}{n^2}$. Tap the first line that is wrong.',
      lines: [
        '$f(x) = \\frac{1}{x^2}$ is continuous, positive and decreasing on $[1, \\infty)$',
        '$\\int_1^{\\infty} \\frac{dx}{x^2} = \\lim\\limits_{b \\to \\infty}\\left(1 - \\frac{1}{b}\\right) = 1$',
        'The integral converges, so the series converges',
        'Therefore $\\sum\\limits_{n=1}^{\\infty} \\frac{1}{n^2} = 1$',
      ],
      errorLines: [4],
      explanation: 'Lines 1–3 are a correct use of the test. Line 4 confuses the integral\'s value with the series\' value. The Integral Test only says *whether* the series converges. In fact $\\sum \\frac{1}{n^2} = \\frac{\\pi^2}{6} \\approx 1.645$. What the integral *can* do is bound the sum: the remainder estimate with $n = 1$ gives $1 + \\int_2^\\infty \\frac{dx}{x^2} \\le s \\le 1 + \\int_1^\\infty \\frac{dx}{x^2}$, i.e. $1.5 \\le s \\le 2$, consistent with $1.645$.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'order',
      prompt: 'Put the steps for applying the Integral Test to $\\sum a_n$ in order.',
      lines: [
        'Write $a_n = f(n)$ for a function $f$ of a real variable $x$',
        'Check that $f$ is continuous and positive on $[N, \\infty)$',
        'Check that $f$ is decreasing on $[N, \\infty)$, usually by showing $f\'(x) < 0$',
        'Evaluate $\\int_N^{\\infty} f(x)\\,dx$ as a limit $\\lim_{b \\to \\infty}\\int_N^b f(x)\\,dx$',
        'Conclude: the series converges if the integral does, and diverges if it does not',
      ],
      distractors: ['Report the value of the integral as the sum of the series'],
      explanation: 'Hypotheses come before the integral: without positivity and monotonicity, the rectangles-versus-curve argument fails and the conclusion is not justified. The improper integral must be handled as a limit. The distractor is the classic misreading: the test compares convergence, not values.',
    },
  ],
  takeaways: [
    'Rectangles of height $a_n$ sit above or below the curve $y = f(x)$, so a positive decreasing series and its improper integral share the same fate.',
    'Integral Test: if $f$ is continuous, positive and decreasing (eventually) and $a_n = f(n)$, then $\\sum a_n$ and $\\int^{\\infty} f(x)\\,dx$ both converge or both diverge.',
    'The test reports convergence, not the sum: $\\int_1^{\\infty}\\frac{dx}{x^2} = 1$ but $\\sum \\frac{1}{n^2} = \\frac{\\pi^2}{6}$.',
    '$p$-series: $\\sum \\frac{1}{n^p}$ converges if and only if $p > 1$.',
    'Remainder estimate: $\\int_{n+1}^{\\infty} f \\le R_n \\le \\int_n^{\\infty} f$, which tells you how many terms you need for a given accuracy.',
  ],
  reading: [
    {
      title: 'OpenStax Calculus Volume 2 — 5.3 The Divergence and Integral Tests',
      url: 'https://openstax.org/books/calculus-volume-2/pages/5-3-the-divergence-and-integral-tests',
      source: 'openstax',
      note: 'Covers the Integral Test, $p$-series and remainder estimates with additional examples.',
    },
    {
      title: "Paul's Online Notes — Integral Test",
      url: 'https://tutorial.math.lamar.edu/Classes/CalcII/IntegralTest.aspx',
      source: 'paul',
      note: 'A careful proof with the rectangle pictures, plus many worked examples.',
    },
    {
      title: "Paul's Online Notes — Estimating the Value of a Series",
      url: 'https://tutorial.math.lamar.edu/Classes/CalcII/SeriesEstimates.aspx',
      source: 'paul',
      note: 'Remainder estimates for the Integral Test and for the other tests in this unit.',
    },
    {
      title: '3Blue1Brown — Why is pi here? And why is it squared? A geometric answer to the Basel problem',
      url: 'https://www.youtube.com/watch?v=d-o3eB9sfls',
      source: 'video',
      note: 'A visual explanation of why the sum of $\\frac{1}{n^2}$ equals $\\frac{\\pi^2}{6}$.',
    },
  ],
};
