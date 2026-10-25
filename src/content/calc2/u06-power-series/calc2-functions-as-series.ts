import type { Lesson } from '../../types';

/** 1 when the slider n is at least k, 0 otherwise (the calculator has no >= operator). */
const gate = (k: number) => `(sign(n - ${k} + 0.5) + 1)/2`;
/** Sum of term(k) for k = from..to, where term k is only switched on when n >= k. */
const gatedSum = (from: number, to: number, term: (k: number) => string) =>
  Array.from({ length: to - from + 1 }, (_, i) => from + i)
    .map((k) => `${gate(k)}*(${term(k)})`)
    .join(' + ');

const sign = (k: number) => (k % 2 === 0 ? '' : '-');

export const lesson: Lesson = {
  id: 'calc2-functions-as-series',
  title: 'Representing Functions as Power Series',
  summary: 'Start from one geometric series, then substitute, differentiate and integrate your way to series for $\\ln(1+x)$ and $\\arctan x$.',
  minutes: 18,
  objectives: [
    'Write $\\frac{1}{1-x}$ as a power series and explain why it is valid only for $|x| < 1$',
    'Build new series by substitution and by multiplying by powers of $x$, tracking the new interval',
    'Differentiate and integrate power series term by term',
    'Derive the series for $\\ln(1+x)$ and $\\arctan x$, and use them to estimate values',
    'Evaluate sums such as $\\sum \\frac{n}{2^n}$ by differentiating a known series',
  ],
  steps: [
    {
      kind: 'concept',
      title: 'One series to rule them all',
      blocks: [
        {
          type: 'p',
          text: 'In the last lesson a [[power-series]] was given and we asked where it converges. Now we flip the question: given a *function*, can we find a power series equal to it? Almost everything in this lesson grows from a single seed — the geometric series.',
        },
        {
          type: 'derivation',
          title: 'Why $1 + x + x^2 + \\cdots = \\frac{1}{1-x}$',
          steps: [
            { tex: 'S_N = 1 + x + x^2 + \\cdots + x^N', why: 'The $N$-th [[partial-sum]] of $\\sum x^n$.' },
            { tex: 'x\\,S_N = x + x^2 + \\cdots + x^N + x^{N+1}', why: 'Multiply every term by $x$: each power moves up by one.' },
            { tex: 'S_N - x\\,S_N = 1 - x^{N+1}', why: 'Subtract. Everything from $x$ to $x^N$ appears in both lines and cancels (a telescoping trick).' },
            { tex: 'S_N = \\frac{1 - x^{N+1}}{1 - x} \\quad (x \\ne 1)', why: 'Factor $S_N(1-x)$ on the left and divide by $1 - x$.' },
            { tex: '\\lim_{N \\to \\infty} S_N = \\frac{1}{1-x} \\quad \\text{when } |x| < 1', why: 'If $|x| < 1$ then $x^{N+1} \\to 0$. If $|x| \\ge 1$, $x^{N+1}$ does not go to $0$ and the series diverges.' },
          ],
          result: '$\\displaystyle \\frac{1}{1-x} = \\sum_{n=0}^{\\infty} x^n$ for $-1 < x < 1$. Radius $1$, both endpoints excluded.',
        },
        {
          type: 'theorem',
          name: 'The master pattern',
          tex: '\\frac{1}{1 - \\square} = \\sum_{n=0}^{\\infty} \\square^{\\,n} \\qquad \\text{valid exactly when } |\\square| < 1',
          text: 'Whatever expression you put in the box — $-x$, $x^2$, $\\frac{x}{2}$, $-4x^3$ — the formula holds as long as the box has absolute value less than $1$. That condition *is* the new interval of convergence.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the series stops at $|x| = 1$ even though $\\frac{1}{1-x}$ doesn\'t',
          text: 'The function $\\frac{1}{1-x}$ is perfectly defined at $x = -1$ (it equals $\\frac12$) and at $x = 5$. But a power series centered at $0$ has a radius, and the radius can be no bigger than the distance to the nearest point where the function breaks — here the vertical asymptote at $x = 1$. Since convergence is symmetric about the center, the series fails at $x = -1$ too. The *function* and its *series* agree only on the interval of convergence.',
        },
      ],
    },
    {
      kind: 'mcq',
      prompt: 'Which power series represents $\\frac{1}{1+3x}$, and where?',
      options: [
        {
          text: '$\\sum_{n=0}^{\\infty} (-3)^n x^n$ for $|x| < \\frac13$',
          correct: true,
          why: 'Write $\\frac{1}{1+3x} = \\frac{1}{1-(-3x)}$, put $\\square = -3x$, and require $|-3x| < 1$.',
        },
        {
          text: '$\\sum_{n=0}^{\\infty} 3^n x^n$ for $|x| < \\frac13$',
          why: 'This is the series for $\\frac{1}{1-3x}$. The plus sign means the box is $-3x$, so the signs must alternate.',
        },
        {
          text: '$\\sum_{n=0}^{\\infty} (-3)^n x^n$ for $|x| < 3$',
          why: 'Right series, wrong interval: $|-3x| < 1$ means $|x| < \\frac13$, not $|x| < 3$.',
        },
        {
          text: '$\\sum_{n=0}^{\\infty} (-1)^n 3x^n$ for $|x| < 1$',
          why: 'Only the $3$ was pulled outside the power. The whole box $-3x$ must be raised to the $n$: $(-3x)^n = (-3)^n x^n$.',
        },
      ],
      explanation: '$\\frac{1}{1+3x} = \\frac{1}{1 - (-3x)} = \\sum (-3x)^n = 1 - 3x + 9x^2 - 27x^3 + \\cdots$, valid when $|-3x| < 1$, i.e. $|x| < \\frac13$. The function only breaks at $x = -\\frac13$, and that distance from the center is exactly the radius.',
    },
    {
      kind: 'concept',
      title: 'Substitution and simple algebra',
      blocks: [
        {
          type: 'p',
          text: 'To use the master pattern, rewrite your function so it looks like $\\frac{\\text{something}}{1 - \\square}$. Often that means factoring a constant out of the denominator first.',
        },
        {
          type: 'derivation',
          title: 'A power series for $\\frac{1}{2 - x}$',
          steps: [
            { tex: '\\frac{1}{2-x} = \\frac{1}{2\\left(1 - \\frac{x}{2}\\right)}', why: 'Factor $2$ out of the denominator so that the constant term becomes $1$, matching $\\frac{1}{1 - \\square}$.' },
            { tex: '= \\frac12 \\cdot \\frac{1}{1 - \\frac{x}{2}}', why: 'Separate the constant factor.' },
            { tex: '= \\frac12 \\sum_{n=0}^{\\infty} \\left(\\frac{x}{2}\\right)^n', why: 'Master pattern with $\\square = \\frac{x}{2}$.' },
            { tex: '= \\sum_{n=0}^{\\infty} \\frac{x^n}{2^{n+1}} = \\frac12 + \\frac{x}{4} + \\frac{x^2}{8} + \\cdots', why: 'Move $\\frac12$ inside: $\\frac12 \\cdot \\frac{x^n}{2^n} = \\frac{x^n}{2^{n+1}}$.' },
            { tex: '\\left|\\frac{x}{2}\\right| < 1 \\iff |x| < 2', why: 'The validity condition $|\\square| < 1$ gives the interval $(-2, 2)$.' },
          ],
          result: '$\\frac{1}{2-x} = \\sum_{n=0}^{\\infty} \\frac{x^n}{2^{n+1}}$ on $(-2, 2)$, radius $2$ — again the distance from $0$ to the asymptote $x = 2$.',
        },
        {
          type: 'p',
          text: 'Substituting a power of $x$ works the same way. Replacing $x$ by $-x^2$ in $\\frac{1}{1-x}$ gives',
        },
        {
          type: 'math',
          tex: '\\frac{1}{1 + x^2} = \\sum_{n=0}^{\\infty} (-x^2)^n = \\sum_{n=0}^{\\infty} (-1)^n x^{2n} = 1 - x^2 + x^4 - x^6 + \\cdots, \\quad |x| < 1',
        },
        {
          type: 'graph',
          x: [-2, 2],
          y: [-1.5, 2.5],
          functions: [
            { expr: '1/(1 + x^2)', label: '$y = \\frac{1}{1+x^2}$', color: 'gray', dashed: true },
            { expr: gatedSum(0, 20, (k) => `${sign(k)}x^${2 * k}`), label: '$1 - x^2 + x^4 - \\cdots \\pm x^{2n}$', color: 'blue' },
          ],
          vlines: [{ x: -1 }, { x: 1 }],
          sliders: [{ name: 'n', min: 0, max: 20, step: 1, value: 3, label: 'last term $\\pm x^{2n}$' }],
          caption: 'Inside $(-1, 1)$ the partial sums lock onto the curve. Outside, they swing up and down ever more violently — even though $\\frac{1}{1+x^2}$ itself is smooth everywhere.',
        },
        {
          type: 'p',
          text: 'Multiplying by a power of $x$ just shifts every exponent and leaves the interval alone: $\\frac{x^3}{1+x^2} = x^3 - x^5 + x^7 - \\cdots$ on $(-1, 1)$.',
        },
        {
          type: 'deepdive',
          title: 'Why does $\\frac{1}{1+x^2}$ have radius $1$? Look at complex numbers.',
          blocks: [
            {
              type: 'p',
              text: 'On the real line $\\frac{1}{1+x^2}$ has no asymptote at all. But allow $x$ to be a [[complex-number]]: the denominator $1 + x^2$ is zero at $x = \\pm i$. In the complex plane, those points are at distance exactly $1$ from the center $0$. Power series really live in the complex plane, where they converge in a *disk* — and the radius of that disk is the distance to the nearest point where the function blows up, real or not. That hidden singularity is what limits the real interval to $(-1, 1)$.',
            },
          ],
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'Write $\\frac{1}{4 + x^2}$ as a power series centered at $0$. What is its radius of convergence?',
      hint: 'Factor out $4$: $\\frac{1}{4+x^2} = \\frac14 \\cdot \\frac{1}{1 - \\left(-\\frac{x^2}{4}\\right)}$.',
      label: '$R =$',
      answer: '2',
      explanation: '$\\frac{1}{4+x^2} = \\frac14 \\sum_{n=0}^{\\infty} \\left(-\\frac{x^2}{4}\\right)^n = \\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{2n}}{4^{n+1}} = \\frac14 - \\frac{x^2}{16} + \\frac{x^4}{64} - \\cdots$. It is valid when $\\frac{x^2}{4} < 1$, i.e. $x^2 < 4$, i.e. $|x| < 2$. So $R = 2$ — not $4$: the box contains $x^2$, so you must take a square root at the end.',
    },
    {
      kind: 'concept',
      title: 'Calculus term by term',
      blocks: [
        {
          type: 'p',
          text: 'Polynomials are differentiated and integrated one term at a time. The beautiful fact is that power series behave the same way inside their interval of convergence — you may treat them as "infinitely long polynomials".',
        },
        {
          type: 'theorem',
          name: 'Term-by-term differentiation and integration',
          text: 'If $f(x) = \\sum_{n=0}^{\\infty} c_n (x-a)^n$ has radius of convergence $R > 0$, then $f$ is differentiable on $(a - R, a + R)$ and\n\n$$f\'(x) = \\sum_{n=1}^{\\infty} n\\,c_n (x-a)^{n-1}, \\qquad \\int f(x)\\,dx = C + \\sum_{n=0}^{\\infty} c_n \\frac{(x-a)^{n+1}}{n+1}.$$\n\nBoth new series have the **same radius** $R$. Convergence at the endpoints can change.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the radius doesn\'t change',
          text: 'Differentiating multiplies the $n$-th coefficient by $n$; integrating divides it by $n+1$. In the ratio test those factors contribute $\\frac{n+1}{n}$ or $\\frac{n+1}{n+2}$, which both tend to $1$ — so the limit $L$, and hence $R$, is unchanged. But at an endpoint, where $L = 1$ exactly, an extra factor of $n$ can be the difference between convergence and divergence. That is why endpoints must be rechecked. (The proof that the derivative of the sum *equals* the sum of the derivatives needs uniform convergence, a topic from real analysis.)',
        },
        {
          type: 'derivation',
          title: 'Differentiate the geometric series',
          steps: [
            { tex: '\\frac{1}{1-x} = \\sum_{n=0}^{\\infty} x^n = 1 + x + x^2 + x^3 + \\cdots, \\quad |x| < 1', why: 'Start from the known series.' },
            { tex: '\\frac{d}{dx}\\left[\\frac{1}{1-x}\\right] = \\frac{1}{(1-x)^2}', why: 'Chain rule: $\\frac{d}{dx}(1-x)^{-1} = -(1-x)^{-2}\\cdot(-1)$.' },
            { tex: '\\frac{1}{(1-x)^2} = \\sum_{n=1}^{\\infty} n\\,x^{n-1} = 1 + 2x + 3x^2 + 4x^3 + \\cdots', why: 'Differentiate each term: $\\frac{d}{dx}x^n = nx^{n-1}$. The $n = 0$ term (a constant) disappears, so the sum now starts at $n = 1$.' },
            { tex: '\\frac{x}{(1-x)^2} = \\sum_{n=1}^{\\infty} n\\,x^{n}', why: 'Multiply both sides by $x$, which shifts every exponent up by one. Still valid for $|x| < 1$.' },
            { tex: '\\sum_{n=1}^{\\infty} \\frac{n}{2^n} = \\frac{1/2}{(1 - 1/2)^2} = \\frac{1/2}{1/4} = 2', why: 'Plug in $x = \\frac12$, which is inside the interval.' },
          ],
          result: 'Differentiating a known series lets you sum series like $\\frac12 + \\frac24 + \\frac38 + \\frac{4}{16} + \\cdots = 2$ exactly.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'How many chests until the rare drop?',
          text: 'A rare item drops with probability $p$ each time you open a chest. The chance that the *first* drop happens on try $n$ is $(1-p)^{n-1}p$, so the expected number of tries is $\\sum_{n=1}^{\\infty} n\\,p\\,(1-p)^{n-1}$. With $q = 1 - p$ this is $p \\sum n q^{n-1} = p \\cdot \\frac{1}{(1-q)^2} = p \\cdot \\frac{1}{p^2} = \\frac{1}{p}$. A 5% drop rate means 20 chests on average — a result designers use to tune loot tables and "pity timers". You just derived it with term-by-term differentiation.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'Use $\\displaystyle\\sum_{n=1}^{\\infty} n\\,x^{n} = \\frac{x}{(1-x)^2}$ to find the exact value of $\\displaystyle\\sum_{n=1}^{\\infty} \\frac{n}{3^n}$.',
      hint: 'Which value of $x$ turns $n x^n$ into $\\frac{n}{3^n}$? Is it inside $|x| < 1$?',
      answer: '3/4',
      answerTex: '\\frac{3}{4}',
      explanation: 'Take $x = \\frac13$ (valid since $\\frac13 < 1$): $\\frac{1/3}{(1 - 1/3)^2} = \\frac{1/3}{4/9} = \\frac13 \\cdot \\frac94 = \\frac34$. Sanity check: the first few terms $\\frac13 + \\frac29 + \\frac{3}{27} + \\frac{4}{81} \\approx 0.3333 + 0.2222 + 0.1111 + 0.0494 \\approx 0.716$, creeping up toward $0.75$.',
    },
    {
      kind: 'truefalse',
      prompt: 'If a power series converges at an endpoint of its interval, then its term-by-term derivative also converges at that endpoint.',
      answer: false,
      explanation: 'The radius is preserved, but endpoint behavior is not. Example: $\\sum_{n=1}^{\\infty} \\frac{(-1)^{n-1} x^n}{n}$ converges at $x = 1$ (alternating harmonic series). Its derivative is $\\sum (-1)^{n-1} x^{n-1} = 1 - x + x^2 - \\cdots$, which at $x = 1$ becomes $1 - 1 + 1 - \\cdots$ and diverges. Differentiation multiplies the terms by $n$, which can destroy convergence at an endpoint; integration divides by $n+1$, which can create it.',
    },
    {
      kind: 'concept',
      title: 'Integrating to get $\\ln(1+x)$',
      blocks: [
        {
          type: 'p',
          text: 'Integration is even more useful, because it produces functions that are not rational at all. Since $\\frac{d}{dx}\\ln(1+x) = \\frac{1}{1+x}$, integrating the series for $\\frac{1}{1+x}$ gives a series for the [[natural-logarithm]].',
        },
        {
          type: 'derivation',
          title: 'The series for $\\ln(1 + x)$',
          steps: [
            { tex: '\\frac{1}{1+t} = \\sum_{n=0}^{\\infty} (-1)^n t^n = 1 - t + t^2 - t^3 + \\cdots, \\quad |t| < 1', why: 'Master pattern with $\\square = -t$.' },
            { tex: '\\ln(1+x) = \\int_0^x \\frac{dt}{1+t}', why: 'Fundamental theorem of calculus: $\\ln(1+t)$ is an antiderivative and $\\ln(1+0) = 0$, so no extra constant appears. (Using a definite integral from $0$ avoids hunting for $C$.)' },
            { tex: '= \\sum_{n=0}^{\\infty} (-1)^n \\int_0^x t^n\\,dt = \\sum_{n=0}^{\\infty} (-1)^n \\frac{x^{n+1}}{n+1}', why: 'Integrate term by term, allowed for $|x| < 1$.' },
            { tex: '= x - \\frac{x^2}{2} + \\frac{x^3}{3} - \\frac{x^4}{4} + \\cdots = \\sum_{n=1}^{\\infty} \\frac{(-1)^{n-1} x^n}{n}', why: 'Write out terms and re-index with $n \\to n - 1$ so the power and the denominator match.' },
          ],
          result: '$\\ln(1+x) = x - \\frac{x^2}{2} + \\frac{x^3}{3} - \\cdots$, radius $1$. Checking endpoints: at $x = 1$ it is the alternating harmonic series (converges); at $x = -1$ it is $-\\sum \\frac1n$ (diverges). Interval: $(-1, 1]$.',
        },
        {
          type: 'graph',
          x: [-1.2, 2],
          y: [-3, 1.8],
          functions: [
            { expr: 'ln(1 + x)', label: '$y = \\ln(1+x)$', color: 'gray', dashed: true },
            { expr: gatedSum(1, 25, (k) => `${k % 2 === 1 ? '' : '-'}x^${k}/${k}`), label: '$x - \\frac{x^2}{2} + \\cdots \\pm \\frac{x^n}{n}$', color: 'blue' },
          ],
          vlines: [{ x: -1 }, { x: 1 }],
          points: [{ x: 1, y: 'ln(2)', label: '(1, ln 2)' }],
          sliders: [{ name: 'n', min: 1, max: 25, step: 1, value: 3, label: 'number of terms $n$' }],
          readouts: [{ label: 'partial sum at $x = 1$:', expr: gatedSum(1, 25, (k) => `${k % 2 === 1 ? '' : '-'}1/${k}`), digits: 4 }],
          caption: 'The partial sums converge on $(-1, 1]$. At $x = 1$ they zig-zag slowly toward $\\ln 2 \\approx 0.6931$; past $x = 1$ they diverge even though $\\ln(1 + x)$ continues happily.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'The endpoint value really is $\\ln 2$',
          text: 'The term-by-term theorem only promises equality *inside* the interval. That the series converges at $x = 1$ *and* equals $\\ln 2$ there follows from Abel\'s theorem: if a power series converges at an endpoint, its sum there equals the limit of the function from inside. So $1 - \\frac12 + \\frac13 - \\frac14 + \\cdots = \\ln 2$.',
        },
      ],
    },
    {
      kind: 'error',
      prompt: 'A student derives a power series for $\\ln(1 - x)$. Tap the first line that is wrong.',
      lines: [
        '$\\frac{1}{1-x} = \\sum_{n=0}^{\\infty} x^n$ for $|x| < 1$',
        '$\\int \\frac{1}{1-x}\\,dx = \\ln|1-x| + C$',
        'So $\\ln(1-x) = C + \\sum_{n=0}^{\\infty} \\frac{x^{n+1}}{n+1}$',
        'At $x = 0$: $\\ln 1 = C + 0$, so $C = 0$',
        '$\\ln(1-x) = \\sum_{n=1}^{\\infty} \\frac{x^n}{n}$',
      ],
      errorLines: [2],
      explanation: 'Line 2 forgets the chain rule: $\\frac{d}{dx}\\ln|1 - x| = \\frac{-1}{1-x}$, so $\\int \\frac{dx}{1-x} = -\\ln|1-x| + C$. The correct result is $\\ln(1-x) = -\\sum_{n=1}^{\\infty} \\frac{x^n}{n} = -x - \\frac{x^2}{2} - \\frac{x^3}{3} - \\cdots$. A quick sanity check would have caught it: for $0 < x < 1$, $\\ln(1-x)$ is negative, but the student\'s series is positive. (You can also get it by replacing $x$ with $-x$ in the series for $\\ln(1+x)$.)',
    },
    {
      kind: 'expr',
      prompt: 'Substitute into the series for $\\ln(1+x)$ to find the first three nonzero terms of the Maclaurin series for $\\ln(1 + 2x)$.',
      hint: 'Replace every $x$ in $x - \\frac{x^2}{2} + \\frac{x^3}{3}$ by $2x$, and simplify the powers of $2$.',
      label: '$\\ln(1+2x) \\approx$',
      answer: '2x - 2x^2 + 8x^3/3',
      answerTex: '2x - 2x^2 + \\frac{8x^3}{3}',
      explanation: '$\\ln(1 + 2x) = (2x) - \\frac{(2x)^2}{2} + \\frac{(2x)^3}{3} - \\cdots = 2x - \\frac{4x^2}{2} + \\frac{8x^3}{3} - \\cdots = 2x - 2x^2 + \\frac{8x^3}{3} - \\cdots$, valid when $-1 < 2x \\le 1$, i.e. $-\\frac12 < x \\le \\frac12$. The classic slip is writing $2x^2$ for $(2x)^2$ — the whole box gets squared.',
    },
    {
      kind: 'numeric',
      prompt: 'Estimate $\\ln(1.1)$ using the first three nonzero terms of the series for $\\ln(1+x)$. Give at least 5 decimal places.',
      hint: '$\\ln(1.1) = \\ln(1 + 0.1)$, so use $x = 0.1$ in $x - \\frac{x^2}{2} + \\frac{x^3}{3}$.',
      answer: '143/1500',
      answerTex: '0.1 - 0.005 + 0.000\\overline{3} = 0.09533\\ldots',
      minDecimals: 5,
      explanation: 'With $x = 0.1$: $0.1 - \\frac{0.01}{2} + \\frac{0.001}{3} = 0.1 - 0.005 + 0.000333\\ldots = 0.095333\\ldots$ The true value is $\\ln 1.1 = 0.0953102\\ldots$, so three terms are already accurate to about $2 \\times 10^{-5}$. Because the series alternates with shrinking terms, the error is smaller than the first omitted term, $\\frac{0.1^4}{4} = 0.000025$.',
    },
    {
      kind: 'concept',
      title: '$\\arctan x$ and a formula for $\\pi$',
      blocks: [
        {
          type: 'p',
          text: 'The same move — integrate a geometric series — gives the [[inverse-tangent]]. Since $\\frac{d}{dx}\\arctan x = \\frac{1}{1+x^2}$, and we already have a series for $\\frac{1}{1+x^2}$:',
        },
        {
          type: 'derivation',
          title: 'The series for $\\arctan x$',
          steps: [
            { tex: '\\frac{1}{1+t^2} = \\sum_{n=0}^{\\infty} (-1)^n t^{2n}, \\quad |t| < 1', why: 'From the substitution card: $\\square = -t^2$.' },
            { tex: '\\arctan x = \\int_0^x \\frac{dt}{1+t^2}', why: 'FTC, using $\\arctan 0 = 0$.' },
            { tex: '= \\sum_{n=0}^{\\infty} (-1)^n \\frac{x^{2n+1}}{2n+1}', why: 'Integrate term by term: $\\int_0^x t^{2n}\\,dt = \\frac{x^{2n+1}}{2n+1}$.' },
            { tex: '= x - \\frac{x^3}{3} + \\frac{x^5}{5} - \\frac{x^7}{7} + \\cdots', why: 'Only odd powers appear — as they must, since $\\arctan$ is an [[odd-function]].' },
          ],
          result: 'Radius $1$. At $x = \\pm 1$ the series becomes $\\pm\\left(1 - \\frac13 + \\frac15 - \\cdots\\right)$, which converges by the alternating series test. Interval: $[-1, 1]$.',
        },
        {
          type: 'graph',
          x: [-2, 2],
          y: [-2, 2],
          functions: [
            { expr: 'arctan(x)', label: '$y = \\arctan x$', color: 'gray', dashed: true },
            { expr: gatedSum(0, 20, (k) => `${sign(k)}x^${2 * k + 1}/${2 * k + 1}`), label: '$x - \\frac{x^3}{3} + \\cdots$ up to $x^{2n+1}$', color: 'purple' },
          ],
          vlines: [{ x: -1 }, { x: 1 }],
          sliders: [{ name: 'n', min: 0, max: 20, step: 1, value: 2, label: 'last term index $n$' }],
          caption: 'Inside $[-1, 1]$ more terms means a better fit; outside, the partial sums peel away from $\\arctan x$ no matter how many terms you add.',
        },
        {
          type: 'p',
          text: 'Putting $x = 1$ and $\\arctan 1 = \\frac{\\pi}{4}$ (by Abel\'s theorem again) gives a famous formula:',
        },
        {
          type: 'math',
          tex: '\\frac{\\pi}{4} = 1 - \\frac13 + \\frac15 - \\frac17 + \\frac19 - \\cdots',
          caption: 'The Madhava–Leibniz series.',
        },
        {
          type: 'callout',
          variant: 'history',
          text: 'The Indian mathematician Madhava of Sangamagrama found this series, and the arctangent series, around 1400 — some 270 years before James Gregory and Gottfried Leibniz rediscovered them in Europe. Madhava\'s Kerala school even computed correction terms to speed up its convergence.',
        },
        {
          type: 'p',
          text: 'Beautiful, but painfully slow: after $N$ terms the estimate of $\\pi$ is off by about $\\frac{1}{N}$, so six correct digits need around a million terms. The fix is to use the series where it converges *fast* — at small $x$. John Machin noticed in 1706 that $\\frac{\\pi}{4} = 4\\arctan\\frac15 - \\arctan\\frac{1}{239}$. With $x = \\frac15$ every term is about $25$ times smaller than the previous one.',
        },
        {
          type: 'code',
          title: 'pi_series.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdio>

// arctan(x) from the first 'terms' terms of x - x^3/3 + x^5/5 - ...
double arctanSeries(double x, int terms) {
    double sum = 0.0;
    double power = x;                      // holds x^(2k+1)
    for (int k = 0; k < terms; ++k) {
        double term = power / (2 * k + 1);
        sum += (k % 2 == 0) ? term : -term;
        power *= x * x;
    }
    return sum;
}

int main() {
    const double pi = std::acos(-1.0);
    const int counts[] = {10, 100, 1000};
    for (int terms : counts) {
        double leibniz = 4.0 * arctanSeries(1.0, terms);
        std::printf("Leibniz %4d terms: %.10f  error %.1e\\n",
                    terms, leibniz, std::fabs(leibniz - pi));
    }
    double machin = 4.0 * (4.0 * arctanSeries(1.0 / 5, 5)
                           - arctanSeries(1.0 / 239, 5));
    std::printf("Machin     5 terms: %.10f  error %.1e\\n",
                machin, std::fabs(machin - pi));
}`,
          output: `Leibniz   10 terms: 3.0418396189  error 1.0e-01
Leibniz  100 terms: 3.1315929036  error 1.0e-02
Leibniz 1000 terms: 3.1405926538  error 1.0e-03
Machin     5 terms: 3.1415926824  error 2.9e-08`,
          annotations: [
            { lines: '5-14', text: 'Each term reuses the previous power: multiply by $x^2$ instead of calling `pow` every time.' },
            { lines: 10, text: 'Alternate the sign: $+, -, +, -, \\dots$' },
            { lines: '19-23', text: 'The Leibniz series at $x = 1$: each extra digit costs ten times more terms.' },
            { lines: '24-25', text: 'Machin\'s formula: only 5 terms of each series, because $\\frac15$ and $\\frac{1}{239}$ are small.' },
          ],
        },
      ],
    },
    {
      kind: 'order',
      prompt: 'Put the steps for deriving the Maclaurin series of $\\arctan x$ in order.',
      lines: [
        'Start with $\\frac{1}{1-x} = \\sum x^n$ for $|x| < 1$',
        'Substitute $-t^2$ for $x$: $\\frac{1}{1+t^2} = \\sum (-1)^n t^{2n}$',
        'Integrate both sides from $0$ to $x$ term by term',
        'Get $\\arctan x = \\sum (-1)^n \\frac{x^{2n+1}}{2n+1}$ with radius $1$',
        'Test $x = \\pm 1$ separately to get the interval $[-1, 1]$',
      ],
      distractors: ['Differentiate both sides of $\\frac{1}{1+t^2} = \\sum (-1)^n t^{2n}$'],
      explanation: '$\\arctan x$ is the *integral* of $\\frac{1}{1+x^2}$, not its derivative, so we substitute to get the series for $\\frac{1}{1+x^2}$ and then integrate. Term-by-term integration keeps the radius $1$, but the endpoints must be checked again — here both converge by the alternating series test.',
    },
    {
      kind: 'concept',
      title: 'Your toolkit so far',
      blocks: [
        {
          type: 'p',
          text: 'With one geometric series and three operations — substitute, multiply by $x^k$, differentiate or integrate — you can already produce a surprising library of series:',
        },
        {
          type: 'table',
          headers: ['Function', 'Power series', 'Interval'],
          rows: [
            ['$\\frac{1}{1-x}$', '$\\sum_{n=0}^{\\infty} x^n = 1 + x + x^2 + \\cdots$', '$(-1, 1)$'],
            ['$\\frac{1}{1+x}$', '$\\sum_{n=0}^{\\infty} (-1)^n x^n = 1 - x + x^2 - \\cdots$', '$(-1, 1)$'],
            ['$\\frac{1}{(1-x)^2}$', '$\\sum_{n=1}^{\\infty} n x^{n-1} = 1 + 2x + 3x^2 + \\cdots$', '$(-1, 1)$'],
            ['$\\ln(1+x)$', '$\\sum_{n=1}^{\\infty} \\frac{(-1)^{n-1} x^n}{n} = x - \\frac{x^2}{2} + \\frac{x^3}{3} - \\cdots$', '$(-1, 1]$'],
            ['$-\\ln(1-x)$', '$\\sum_{n=1}^{\\infty} \\frac{x^n}{n} = x + \\frac{x^2}{2} + \\frac{x^3}{3} + \\cdots$', '$[-1, 1)$'],
            ['$\\arctan x$', '$\\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{2n+1}}{2n+1} = x - \\frac{x^3}{3} + \\frac{x^5}{5} - \\cdots$', '$[-1, 1]$'],
          ],
          caption: 'Every row follows from the first by substitution, differentiation or integration.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Integrals with no elementary antiderivative',
          text: 'Term-by-term integration also handles integrals you could not do in the techniques unit. For example $\\int \\frac{dx}{1 + x^5} = C + \\sum (-1)^n \\frac{x^{5n+1}}{5n+1}$ for $|x| < 1$ — no partial fractions required. The last lesson of this unit uses the same idea on $\\int e^{-x^2}dx$.',
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'Exams love "find a power series for $f$ and its radius of convergence" where $f$ is $\\frac{x^2}{3 - x}$, $\\ln(5 - x)$, $x\\arctan(x^2)$ and so on. The winning moves: factor the constant so you see $1 - \\square$, substitute, multiply by any leftover power of $x$, and state the interval from $|\\square| < 1$. For logs and arctangents, differentiate first, find that series, then integrate back — and don\'t forget the constant.',
        },
      ],
    },
    {
      kind: 'fill',
      prompt: 'Complete the power series for $\\frac{x}{1-x^2}$.',
      template: 'Substituting $x^2$ into the geometric series and multiplying by $x$ gives $\\dfrac{x}{1-x^2} = \\sum_{n=0}^{\\infty}$ ___ , valid for $|x| <$ ___ .',
      blanks: [{ answers: ['$x^{2n+1}$'] }, { answers: ['$1$'] }],
      wordBank: ['$x^{2n+1}$', '$x^{2n}$', '$x^{n+1}$', '$(-1)^n x^{2n+1}$', '$1$', '$\\sqrt{2}$', '$\\frac12$'],
      explanation: '$\\frac{1}{1 - x^2} = \\sum (x^2)^n = \\sum x^{2n}$ (box $= x^2$, no sign change because the denominator has a minus sign). Multiplying by $x$ gives $\\sum x^{2n+1} = x + x^3 + x^5 + \\cdots$. The condition $|x^2| < 1$ is the same as $|x| < 1$, so $R = 1$; multiplying by $x$ never changes the radius.',
    },
  ],
  takeaways: [
    '$\\frac{1}{1-\\square} = \\sum \\square^{\\,n}$ whenever $|\\square| < 1$ — the seed for most series in this lesson.',
    'Factor constants out of denominators to reach the $1 - \\square$ form; the condition $|\\square| < 1$ gives the new interval.',
    'Inside the interval, power series can be differentiated and integrated term by term; the radius stays the same, but endpoints must be rechecked.',
    '$\\ln(1+x) = x - \\frac{x^2}{2} + \\frac{x^3}{3} - \\cdots$ on $(-1, 1]$ and $\\arctan x = x - \\frac{x^3}{3} + \\frac{x^5}{5} - \\cdots$ on $[-1, 1]$.',
    'Differentiating a known series sums new ones: $\\sum n x^n = \\frac{x}{(1-x)^2}$, which gives the expected number of tries $\\frac1p$ for a drop rate $p$.',
  ],
  reading: [
    {
      title: 'OpenStax Calculus Volume 2 — 6.2 Properties of Power Series',
      url: 'https://openstax.org/books/calculus-volume-2/pages/6-2-properties-of-power-series',
      source: 'openstax',
      note: 'Term-by-term differentiation and integration with many substitution examples.',
    },
    {
      title: "Paul's Online Notes — Power Series and Functions",
      url: 'https://tutorial.math.lamar.edu/Classes/CalcII/PowerSeriesandFunctions.aspx',
      source: 'paul',
      note: 'Step-by-step derivations of series for rational functions, logarithms and arctangent.',
    },
    {
      title: 'Wikipedia — Madhava series',
      url: 'https://en.wikipedia.org/wiki/Madhava_series',
      source: 'wikipedia',
      note: 'The history of the arctangent and sine series in the Kerala school of mathematics.',
    },
  ],
};
