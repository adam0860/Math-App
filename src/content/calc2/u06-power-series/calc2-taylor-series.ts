import type { Lesson } from '../../types';

/** 1 when the slider n is at least k, 0 otherwise (the calculator has no >= operator). */
const gate = (k: number) => `(sign(n - ${k} + 0.5) + 1)/2`;
/** Sum of term(k) for k in ks, where term k is only switched on when n >= gateOf(k). */
const gatedSum = (ks: number[], term: (k: number) => string, gateOf: (k: number) => number = (k) => k) =>
  ks.map((k) => `${gate(gateOf(k))}*(${term(k)})`).join(' + ');
const range = (from: number, to: number) => Array.from({ length: to - from + 1 }, (_, i) => from + i);

/** Taylor polynomial of e^x of degree n (slider), terms up to x^12. */
const expPoly = (xv: string) => gatedSum(range(0, 12), (k) => `(${xv})^${k}/${k}!`);
/** Taylor polynomial of sin x of degree n (slider): odd powers 2j+1 up to 25. */
const sinPoly = gatedSum(
  range(0, 12),
  (j) => `${j % 2 === 0 ? '' : '-'}x^${2 * j + 1}/${2 * j + 1}!`,
  (j) => 2 * j + 1,
);
/** Taylor polynomial of ln x centered at 1, degree n (slider), up to (x-1)^25. */
const lnPoly = gatedSum(range(1, 25), (k) => `${k % 2 === 1 ? '' : '-'}(x - 1)^${k}/${k}`);

export const lesson: Lesson = {
  id: 'calc2-taylor-series',
  title: 'Taylor and Maclaurin Series',
  summary: 'One formula, $c_n = \\frac{f^{(n)}(a)}{n!}$, builds the power series of almost any function — including $e^x$, $\\sin x$ and $\\cos x$.',
  minutes: 19,
  objectives: [
    'Derive the Taylor coefficient formula $c_n = \\frac{f^{(n)}(a)}{n!}$',
    'Build the Maclaurin series of $e^x$, $\\sin x$ and $\\cos x$ and find their radii',
    'Compute Taylor series and Taylor polynomials centered at $a \\ne 0$',
    'Use the binomial series for $(1+x)^k$ with any real exponent $k$',
    'Explain why a Taylor series need not equal its function',
  ],
  steps: [
    {
      kind: 'concept',
      title: 'What must the coefficients be?',
      blocks: [
        {
          type: 'p',
          text: 'Last lesson we found series by clever tricks with the geometric series. That works for $\\ln(1+x)$ and $\\arctan x$, but no amount of substituting into $\\frac{1}{1-x}$ will give you $e^x$ or $\\sin x$. We need a general method. Here is the idea: *suppose* $f$ has a power series. Then its coefficients are forced on us — we can read them off from the derivatives of $f$ at the center.',
        },
        {
          type: 'derivation',
          title: 'Assume $f(x) = c_0 + c_1(x-a) + c_2(x-a)^2 + c_3(x-a)^3 + \\cdots$',
          steps: [
            { tex: 'f(a) = c_0', why: 'Put $x = a$: every term with a factor $(x-a)$ vanishes.' },
            { tex: "f'(x) = c_1 + 2c_2(x-a) + 3c_3(x-a)^2 + \\cdots \\implies f'(a) = c_1", why: 'Differentiate term by term (allowed inside the interval of convergence), then put $x = a$.' },
            { tex: "f''(x) = 2c_2 + 3\\cdot 2\\,c_3(x-a) + \\cdots \\implies f''(a) = 2c_2", why: 'Differentiate again. The $c_2$ term has been differentiated twice, picking up $2 \\cdot 1$.' },
            { tex: "f'''(a) = 3 \\cdot 2 \\cdot 1 \\, c_3 = 3!\\,c_3", why: 'Same pattern: the $c_3$ term $c_3(x-a)^3$ becomes the constant $3 \\cdot 2 \\cdot 1 \\cdot c_3$ after three derivatives.' },
            { tex: 'f^{(n)}(a) = n!\\,c_n', why: 'In general, $n$ derivatives turn $c_n(x-a)^n$ into $n!\\,c_n$; lower terms have already vanished and higher terms still contain $(x-a)$, so they vanish at $x = a$.' },
            { tex: 'c_n = \\frac{f^{(n)}(a)}{n!}', why: 'Divide by $n!$. (With $0! = 1$ and $f^{(0)} = f$, this also covers $c_0 = f(a)$.)' },
          ],
          result: 'If $f$ has a power series centered at $a$, its coefficients **must** be $c_n = \\frac{f^{(n)}(a)}{n!}$.',
        },
        {
          type: 'definition',
          term: 'Taylor series and Maclaurin series',
          text: 'The [[taylor-series]] of $f$ centered at $a$ is\n\n$$\\sum_{n=0}^{\\infty} \\frac{f^{(n)}(a)}{n!}(x-a)^n = f(a) + f\'(a)(x-a) + \\frac{f\'\'(a)}{2!}(x-a)^2 + \\frac{f\'\'\'(a)}{3!}(x-a)^3 + \\cdots$$\n\nWhen $a = 0$ it is called the [[maclaurin-series]]: $\\sum \\frac{f^{(n)}(0)}{n!}x^n$. Its partial sum of degree $n$ is the [[taylor-polynomial]] $T_n(x)$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the factorials?',
          text: 'Each derivative of $(x-a)^n$ brings down the current exponent as a factor: $n$, then $n - 1$, then $n - 2$, … After $n$ derivatives the factors multiply to $n!$. Dividing by $n!$ undoes that pile-up so the $n$-th derivative of $T_n$ at $a$ matches $f^{(n)}(a)$ exactly. A Taylor polynomial is the polynomial that **matches $f$ and its first $n$ derivatives** at the center: same height, same slope, same concavity, and so on. Notice $T_1(x) = f(a) + f\'(a)(x-a)$ is exactly the [[linearization]] from Calculus I — Taylor polynomials are its higher-degree upgrades.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Uniqueness',
          text: 'Because the coefficients are forced, a function has at most one power series centered at a given $a$. So every series from the last lesson — $\\ln(1+x)$, $\\arctan x$ — already *was* its Taylor series. If a trick gives you a series, you have found the Taylor series, no derivatives needed.',
        },
      ],
    },
    {
      kind: 'fill',
      prompt: 'Complete the Taylor coefficient formula for a series centered at $a$.',
      template: 'The coefficient of $(x-a)^n$ is ___ divided by ___ .',
      blanks: [{ answers: ['$f^{(n)}(a)$'] }, { answers: ['$n!$'] }],
      wordBank: ['$f^{(n)}(a)$', '$f^{(n)}(0)$', '$f(a)^n$', '$n!$', '$n$', '$(n+1)!$'],
      explanation: '$c_n = \\frac{f^{(n)}(a)}{n!}$: the $n$-th derivative evaluated **at the center** $a$ (not at $0$, unless $a = 0$), divided by $n!$ to cancel the factor that $n$ derivatives of $(x-a)^n$ produce. $f(a)^n$ is a power of a value, not a derivative — a common notation confusion.',
    },
    {
      kind: 'concept',
      title: 'The star of the show: $e^x$',
      blocks: [
        {
          type: 'p',
          text: 'The [[natural-exponential]] is the easiest possible Taylor series, because it is its own derivative.',
        },
        {
          type: 'derivation',
          title: 'Maclaurin series of $e^x$',
          steps: [
            { tex: "f(x) = f'(x) = f''(x) = \\cdots = f^{(n)}(x) = e^x", why: '$\\frac{d}{dx}e^x = e^x$, so every derivative is $e^x$ again.' },
            { tex: 'f^{(n)}(0) = e^0 = 1 \\quad \\text{for every } n', why: 'Evaluate at the center $a = 0$.' },
            { tex: 'c_n = \\frac{1}{n!}', why: 'Taylor coefficient formula.' },
            { tex: 'e^x = \\sum_{n=0}^{\\infty} \\frac{x^n}{n!} = 1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!} + \\frac{x^4}{4!} + \\cdots', why: 'Assemble the series.' },
          ],
          result: 'Radius $R = \\infty$ — we proved in the first lesson of this unit that $\\sum \\frac{x^n}{n!}$ converges for every $x$ (ratio $\\frac{|x|}{n+1} \\to 0$). In the next lesson we will prove it converges *to* $e^x$.',
        },
        {
          type: 'graph',
          x: [-4, 4],
          y: [-3, 20],
          functions: [
            { expr: 'e^x', label: '$y = e^x$', color: 'gray', dashed: true },
            { expr: expPoly('x'), label: '$T_n(x) = \\sum_{k=0}^{n} \\frac{x^k}{k!}$', color: 'blue' },
          ],
          points: [{ x: 0, y: 1, label: '(0, 1)' }],
          sliders: [{ name: 'n', min: 0, max: 12, step: 1, value: 1, label: 'degree $n$' }],
          readouts: [
            { label: '$T_n(1) =$', expr: expPoly('1'), digits: 8 },
            { label: '$e =$', expr: 'e', digits: 8 },
          ],
          caption: 'Start at degree $0$ (a flat line) and step up. Each new term bends the polynomial to match $e^x$ further from $0$. By degree $10$, $T_n(1)$ agrees with $e$ to 7 decimal places.',
        },
        {
          type: 'p',
          text: 'Putting $x = 1$ gives a fast way to compute Euler\'s number: $e = 1 + 1 + \\frac12 + \\frac16 + \\frac{1}{24} + \\cdots$. Because the factorials grow so fast, every few terms add another correct digit.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Computing $e^x$ in a loop',
          text: 'Never compute `pow(x, n) / factorial(n)` from scratch. Keep a running term and update it with the ratio of consecutive terms: `term = 1; sum = 1; for (int k = 1; k <= N; ++k) { term *= x / k; sum += term; }`. That is $N$ multiplications and divisions total. (For large $|x|$ the terms first grow huge before shrinking, which costs accuracy — the next lesson shows how real libraries avoid that.)',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'Use the degree-4 Taylor polynomial of $e^x$ at $0$ to estimate $e = e^1$. Give at least 4 decimal places.',
      hint: '$T_4(1) = 1 + 1 + \\frac{1}{2!} + \\frac{1}{3!} + \\frac{1}{4!}$.',
      answer: '65/24',
      answerTex: '\\frac{65}{24} \\approx 2.70833',
      minDecimals: 4,
      explanation: '$T_4(1) = 1 + 1 + \\frac12 + \\frac16 + \\frac{1}{24} = \\frac{24 + 24 + 12 + 4 + 1}{24} = \\frac{65}{24} \\approx 2.70833$. The true value is $e \\approx 2.71828$, so five terms get within $0.01$. Adding $\\frac{1}{5!} = \\frac{1}{120}$ gives $2.71667$, and $\\frac{1}{6!}$ gives $2.71806$ — compare with the readout in the graph.',
    },
    {
      kind: 'concept',
      title: 'Sine and cosine',
      blocks: [
        {
          type: 'p',
          text: 'Derivatives of $\\sin x$ cycle with period four, so the Taylor coefficients cycle too.',
        },
        {
          type: 'table',
          headers: ['$n$', '$f^{(n)}(x)$', '$f^{(n)}(0)$', '$c_n = \\frac{f^{(n)}(0)}{n!}$'],
          rows: [
            ['$0$', '$\\sin x$', '$0$', '$0$'],
            ['$1$', '$\\cos x$', '$1$', '$1$'],
            ['$2$', '$-\\sin x$', '$0$', '$0$'],
            ['$3$', '$-\\cos x$', '$-1$', '$-\\frac{1}{3!}$'],
            ['$4$', '$\\sin x$', '$0$', '$0$'],
            ['$5$', '$\\cos x$', '$1$', '$\\frac{1}{5!}$'],
          ],
          caption: 'The pattern $0, 1, 0, -1$ repeats forever.',
        },
        {
          type: 'derivation',
          title: 'Maclaurin series of $\\sin x$ and $\\cos x$',
          steps: [
            { tex: '\\sin x = x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\frac{x^7}{7!} + \\cdots', why: 'Only odd $n$ give nonzero coefficients, with signs $+, -, +, -$ from the cycle.' },
            { tex: '= \\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{2n+1}}{(2n+1)!}', why: 'Write odd powers as $2n + 1$; the sign alternates with $n$.' },
            { tex: '\\cos x = \\frac{d}{dx}\\sin x = 1 - \\frac{3x^2}{3!} + \\frac{5x^4}{5!} - \\cdots', why: 'Differentiate term by term instead of building a new table.' },
            { tex: '= 1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} - \\frac{x^6}{6!} + \\cdots = \\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{2n}}{(2n)!}', why: 'Simplify: $\\frac{3}{3!} = \\frac{1}{2!}$, $\\frac{5}{5!} = \\frac{1}{4!}$, and in general $\\frac{2n+1}{(2n+1)!} = \\frac{1}{(2n)!}$.' },
          ],
          result: 'Both have $R = \\infty$: the ratio test gives $\\frac{x^2}{(2n+2)(2n+3)} \\to 0$ for sine and similarly for cosine.',
        },
        {
          type: 'graph',
          x: [-10, 10],
          y: [-3, 3],
          functions: [
            { expr: 'sin(x)', label: '$y = \\sin x$', color: 'gray', dashed: true },
            { expr: sinPoly, label: '$T_n(x)$ for $\\sin x$', color: 'red' },
          ],
          sliders: [{ name: 'n', min: 1, max: 25, step: 2, value: 1, label: 'degree $n$ (odd)' }],
          readouts: [{ label: '$T_n(\\pi) =$', expr: sinPoly.replace(/x/g, '(pi)'), digits: 6 }],
          caption: 'Degree $1$ is the tangent line $y = x$. Each extra term captures one more hump of the wave. The polynomial always eventually shoots off to $\\pm\\infty$ — a polynomial can\'t oscillate forever — but the region of agreement grows without bound.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why only odd (or only even) powers?',
          text: '$\\sin x$ is an [[odd-function]]: $\\sin(-x) = -\\sin x$. Odd powers are odd and even powers are even, and by uniqueness an odd function\'s series can contain only odd powers. Likewise $\\cos x$ is an [[even-function]], so its series has only even powers. Checking that symmetry is a fast way to catch mistakes.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Small-angle approximations',
          text: 'Truncating gives the approximations physicists and game programmers use constantly: $\\sin x \\approx x$ and $\\cos x \\approx 1 - \\frac{x^2}{2}$ for small $x$ in radians. The pendulum formula $T \\approx 2\\pi\\sqrt{L/g}$ comes from $\\sin\\theta \\approx \\theta$.',
        },
      ],
    },
    {
      kind: 'mcq',
      prompt: 'Which series is the Maclaurin series of $\\cos x$?',
      options: [
        {
          text: '$\\displaystyle\\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{2n+1}}{(2n+1)!}$',
          why: 'Odd powers: this is $\\sin x$. Cosine is even, so it needs even powers.',
        },
        {
          text: '$\\displaystyle\\sum_{n=0}^{\\infty} \\frac{x^{2n}}{(2n)!}$',
          why: 'Missing the alternating sign. This is the series of $\\cosh x = \\frac{e^x + e^{-x}}{2}$, which grows instead of oscillating.',
        },
        {
          text: '$\\displaystyle\\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{2n}}{(2n)!}$',
          correct: true,
          why: '$1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} - \\cdots$: even powers, alternating signs, factorial of the exponent.',
        },
        {
          text: '$\\displaystyle\\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{2n}}{n!}$',
          why: 'The factorial must match the exponent: $x^{2n}$ goes with $(2n)!$. This series is actually $e^{-x^2}$.',
        },
      ],
      explanation: 'The derivatives of $\\cos x$ at $0$ cycle $1, 0, -1, 0$, so only even powers survive with alternating signs, each divided by the factorial of its own exponent: $\\cos x = 1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} - \\cdots$. Quick check: the denominator in a Taylor series is always (exponent)!.',
    },
    {
      kind: 'expr',
      prompt: 'Substitute into the series for $\\sin x$ to find the first three nonzero terms of the Maclaurin series for $\\sin(x^2)$.',
      hint: 'Replace $x$ by $x^2$ in $x - \\frac{x^3}{3!} + \\frac{x^5}{5!}$. Then $(x^2)^3 = x^6$.',
      label: '$\\sin(x^2) \\approx$',
      answer: 'x^2 - x^6/6 + x^10/120',
      answerTex: 'x^2 - \\frac{x^6}{6} + \\frac{x^{10}}{120}',
      domain: [-1, 1],
      explanation: '$\\sin(x^2) = x^2 - \\frac{(x^2)^3}{3!} + \\frac{(x^2)^5}{5!} - \\cdots = x^2 - \\frac{x^6}{6} + \\frac{x^{10}}{120} - \\cdots$. Doing this with derivatives would be miserable (the chain and product rules explode), but uniqueness says any correct series *is* the Taylor series. Substitution is the professional move.',
    },
    {
      kind: 'concept',
      title: 'Centering somewhere else',
      blocks: [
        {
          type: 'p',
          text: 'Not every function can be expanded at $0$: $\\ln x$ and $\\sqrt{x}$ are not even differentiable there. And even when $a = 0$ works, a polynomial is most accurate near its center, so you center where you need accuracy. The recipe is the same: tabulate derivatives, evaluate at $a$, divide by $n!$.',
        },
        {
          type: 'derivation',
          title: 'Taylor series of $\\ln x$ centered at $a = 1$',
          steps: [
            { tex: "f(x) = \\ln x, \\quad f'(x) = x^{-1}, \\quad f''(x) = -x^{-2}, \\quad f'''(x) = 2x^{-3}, \\quad f^{(4)}(x) = -6x^{-4}", why: 'Power rule repeatedly. Each step multiplies by the current (negative) exponent.' },
            { tex: 'f^{(n)}(x) = (-1)^{n-1}\\,(n-1)!\\,x^{-n} \\quad (n \\ge 1)', why: 'The coefficients $1, -1, 2, -6, 24, \\dots$ are $(-1)^{n-1}(n-1)!$.' },
            { tex: 'f(1) = 0, \\qquad f^{(n)}(1) = (-1)^{n-1}(n-1)!', why: 'Evaluate at the center: $\\ln 1 = 0$ and $1^{-n} = 1$.' },
            { tex: 'c_n = \\frac{(-1)^{n-1}(n-1)!}{n!} = \\frac{(-1)^{n-1}}{n}', why: '$\\frac{(n-1)!}{n!} = \\frac{1}{n}$.' },
            { tex: '\\ln x = (x-1) - \\frac{(x-1)^2}{2} + \\frac{(x-1)^3}{3} - \\cdots = \\sum_{n=1}^{\\infty} \\frac{(-1)^{n-1}(x-1)^n}{n}', why: 'Assemble with powers of $(x - a) = (x - 1)$.' },
          ],
          result: 'This is the $\\ln(1 + u)$ series from last lesson with $u = x - 1$ — exactly as uniqueness predicts. Interval: $0 < x \\le 2$.',
        },
        {
          type: 'graph',
          x: [-0.3, 3],
          y: [-3, 2],
          functions: [
            { expr: 'ln(x)', label: '$y = \\ln x$', color: 'gray', dashed: true },
            { expr: lnPoly, label: '$T_n(x)$ centered at $1$', color: 'green' },
          ],
          points: [{ x: 1, y: 0, label: 'center (1, 0)' }],
          vlines: [{ x: 0 }, { x: 2 }],
          sliders: [{ name: 'n', min: 1, max: 25, step: 1, value: 1, label: 'degree $n$' }],
          caption: 'The Taylor polynomials improve on $(0, 2]$ — distance $1$ on each side of the center, because $\\ln x$ breaks down at $x = 0$. Beyond $x = 2$ they fail no matter the degree.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Keep $(x - a)$ intact',
          text: 'Write Taylor polynomials in powers of $(x - a)$, and **do not** evaluate derivatives at $0$ when the center is $a$. Expanding $(x-1)^2$ into $x^2 - 2x + 1$ is legal but hides the structure and invites arithmetic errors.',
        },
      ],
    },
    {
      kind: 'expr',
      prompt: 'Find the degree-2 Taylor polynomial $T_2(x)$ of $f(x) = \\sqrt{x}$ centered at $a = 4$.',
      hint: '$f(4) = 2$, $f\'(x) = \\frac{1}{2}x^{-1/2}$, $f\'\'(x) = -\\frac14 x^{-3/2}$. Don\'t forget to divide $f\'\'(4)$ by $2!$.',
      label: '$T_2(x) =$',
      answer: '2 + (x - 4)/4 - (x - 4)^2/64',
      answerTex: '2 + \\frac{x-4}{4} - \\frac{(x-4)^2}{64}',
      explanation: '$f(4) = 2$; $f\'(4) = \\frac{1}{2\\sqrt4} = \\frac14$; $f\'\'(4) = -\\frac14 \\cdot 4^{-3/2} = -\\frac14 \\cdot \\frac18 = -\\frac{1}{32}$. So $T_2(x) = 2 + \\frac14(x-4) + \\frac{-1/32}{2!}(x-4)^2 = 2 + \\frac{x-4}{4} - \\frac{(x-4)^2}{64}$. Test it: $T_2(4.41) = 2 + 0.1025 - 0.0026 = 2.0999$, while $\\sqrt{4.41} = 2.1$.',
    },
    {
      kind: 'error',
      prompt: 'A student computes the Maclaurin series of $e^{2x}$ from the definition. Tap the first wrong line.',
      lines: [
        '$f(x) = e^{2x}$, so $f(0) = 1$',
        '$f\'(x) = 2e^{2x}$ and $f\'\'(x) = 2e^{2x}$, so $f^{(n)}(x) = 2e^{2x}$ for $n \\ge 1$',
        '$f^{(n)}(0) = 2$ for $n \\ge 1$',
        '$e^{2x} = 1 + \\sum_{n=1}^{\\infty} \\frac{2x^n}{n!}$',
      ],
      errorLines: [2],
      explanation: 'Line 2 applies the chain rule only once. Differentiating $2e^{2x}$ gives $2 \\cdot 2e^{2x} = 4e^{2x}$, and in general $f^{(n)}(x) = 2^n e^{2x}$, so $f^{(n)}(0) = 2^n$ and $e^{2x} = \\sum \\frac{2^n x^n}{n!} = \\sum \\frac{(2x)^n}{n!}$. That matches simply substituting $2x$ into the series for $e^x$ — always a good cross-check.',
    },
    {
      kind: 'concept',
      title: 'The binomial series',
      blocks: [
        {
          type: 'p',
          text: 'The [[binomial-theorem]] expands $(1+x)^k$ when $k$ is a positive integer, and the expansion stops after $k + 1$ terms. Newton\'s great insight was that the same formula works for **any** real exponent $k$ — negative, fractional, irrational — if you let it run forever. The result is the [[binomial-series]].',
        },
        {
          type: 'derivation',
          title: 'Coefficients of $f(x) = (1+x)^k$',
          steps: [
            { tex: "f'(x) = k(1+x)^{k-1}, \\quad f''(x) = k(k-1)(1+x)^{k-2}, \\quad f'''(x) = k(k-1)(k-2)(1+x)^{k-3}", why: 'Power rule and chain rule; the derivative of $1 + x$ is $1$.' },
            { tex: 'f^{(n)}(0) = k(k-1)(k-2)\\cdots(k-n+1)', why: 'At $x = 0$, $(1 + 0)^{\\text{anything}} = 1$. There are $n$ factors, starting at $k$ and going down by one.' },
            { tex: 'c_n = \\frac{k(k-1)\\cdots(k-n+1)}{n!} = \\binom{k}{n}', why: 'Divide by $n!$. For integer $k$ this is the usual [[binomial-coefficient]], so we use the same notation.' },
          ],
          result: '$(1 + x)^k = \\sum_{n=0}^{\\infty} \\binom{k}{n} x^n = 1 + kx + \\frac{k(k-1)}{2!}x^2 + \\frac{k(k-1)(k-2)}{3!}x^3 + \\cdots$',
        },
        {
          type: 'theorem',
          name: 'The binomial series',
          text: 'For any real $k$, $(1+x)^k = \\sum_{n=0}^{\\infty} \\binom{k}{n} x^n$ for $|x| < 1$. If $k$ is a nonnegative integer, $\\binom{k}{n} = 0$ for $n > k$ and the series is a finite polynomial valid for all $x$. Otherwise the radius of convergence is exactly $1$.',
        },
        {
          type: 'p',
          text: 'Example, $k = \\frac12$: the coefficients are $1$, $\\frac12$, $\\frac{\\frac12 \\cdot (-\\frac12)}{2} = -\\frac18$, $\\frac{\\frac12 \\cdot (-\\frac12)(-\\frac32)}{6} = \\frac{1}{16}$, so',
        },
        {
          type: 'math',
          tex: '\\sqrt{1 + x} = 1 + \\frac{x}{2} - \\frac{x^2}{8} + \\frac{x^3}{16} - \\cdots, \\qquad |x| < 1',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Renormalizing a rotation without a square root',
          text: 'Games store 3D orientations as unit quaternions, and floating-point drift slowly makes their length $\\ne 1$. If $|q|^2 = 1 + \\varepsilon$ with tiny $\\varepsilon$, the binomial series with $k = -\\frac12$ gives $\\frac{1}{\\sqrt{1+\\varepsilon}} \\approx 1 - \\frac{\\varepsilon}{2}$. So engines renormalize with `q *= (3 - dot(q, q)) / 2` — one multiply-add, no `sqrt`, no division by a variable. Same idea in physics: Einstein\'s kinetic energy $(\\gamma - 1)mc^2$ with $\\gamma = (1 - v^2/c^2)^{-1/2} \\approx 1 + \\frac{v^2}{2c^2}$ reduces to Newton\'s $\\frac12 mv^2$ at everyday speeds.',
        },
        {
          type: 'deepdive',
          title: 'Why is the radius exactly 1?',
          blocks: [
            {
              type: 'p',
              text: 'Ratio test on consecutive terms: $\\left|\\frac{c_{n+1}x^{n+1}}{c_n x^n}\\right| = \\left|\\frac{k - n}{n+1}\\right| |x| \\to |x|$, since $\\frac{|k-n|}{n+1} \\to 1$. So the series converges for $|x| < 1$ and diverges for $|x| > 1$ (unless it terminates). Endpoint behavior depends on $k$: for example $\\sqrt{1+x}$ converges at both $x = \\pm1$, while $(1+x)^{-1} = 1 - x + x^2 - \\cdots$ converges at neither.',
            },
          ],
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'Find the coefficient of $x^2$ in the binomial series for $\\dfrac{1}{\\sqrt{1+x}} = (1+x)^{-1/2}$.',
      hint: 'Use $\\binom{k}{2} = \\frac{k(k-1)}{2!}$ with $k = -\\frac12$.',
      answer: '3/8',
      answerTex: '\\frac{3}{8}',
      explanation: '$\\binom{-1/2}{2} = \\frac{(-\\frac12)(-\\frac12 - 1)}{2!} = \\frac{(-\\frac12)(-\\frac32)}{2} = \\frac{3/4}{2} = \\frac38$. The series begins $1 - \\frac{x}{2} + \\frac{3x^2}{8} - \\frac{5x^3}{16} + \\cdots$. The two negative factors multiply to a positive coefficient — sign errors here usually come from writing $k - 1 = -\\frac12 - 1$ as $\\frac12$.',
    },
    {
      kind: 'concept',
      title: 'Does the series actually equal the function?',
      blocks: [
        {
          type: 'p',
          text: 'Careful logic: we proved that *if* $f$ has a power series, it must be the Taylor series. We did not prove that the Taylor series of $f$ converges to $f$. Usually it does — but not always.',
        },
        {
          type: 'p',
          text: 'The classic counterexample is $f(x) = e^{-1/x^2}$ (with $f(0) = 0$). It is so flat at the origin that $f(0) = f\'(0) = f\'\'(0) = \\cdots = 0$. Its Maclaurin series is therefore $0 + 0x + 0x^2 + \\cdots = 0$, which converges everywhere — to the wrong function, since $f(x) > 0$ for every $x \\ne 0$.',
        },
        {
          type: 'graph',
          x: [-3, 3],
          y: [-0.2, 1.1],
          functions: [{ expr: 'e^(-1/x^2)', label: '$y = e^{-1/x^2}$', color: 'blue' }],
          hlines: [{ y: 0, label: 'its Maclaurin series: 0', color: 'red' }],
          caption: 'Every derivative is $0$ at the origin, so every Taylor polynomial is the zero function — yet the curve clearly leaves the axis.',
        },
        {
          type: 'p',
          text: 'The difference between $f$ and its Taylor polynomial is the **remainder** $R_n(x) = f(x) - T_n(x)$. The Taylor series equals $f(x)$ exactly when $R_n(x) \\to 0$ as $n \\to \\infty$. The next lesson gives a tool, [[taylors-inequality]], to bound $R_n$ — and uses it to prove that the series below really do equal their functions.',
        },
        {
          type: 'table',
          headers: ['Function', 'Maclaurin series', 'Valid for'],
          rows: [
            ['$e^x$', '$\\sum \\frac{x^n}{n!} = 1 + x + \\frac{x^2}{2!} + \\cdots$', 'all $x$'],
            ['$\\sin x$', '$\\sum \\frac{(-1)^n x^{2n+1}}{(2n+1)!} = x - \\frac{x^3}{3!} + \\cdots$', 'all $x$'],
            ['$\\cos x$', '$\\sum \\frac{(-1)^n x^{2n}}{(2n)!} = 1 - \\frac{x^2}{2!} + \\cdots$', 'all $x$'],
            ['$\\frac{1}{1-x}$', '$\\sum x^n$', '$(-1, 1)$'],
            ['$\\ln(1+x)$', '$\\sum \\frac{(-1)^{n-1}x^n}{n}$', '$(-1, 1]$'],
            ['$\\arctan x$', '$\\sum \\frac{(-1)^n x^{2n+1}}{2n+1}$', '$[-1, 1]$'],
            ['$(1+x)^k$', '$\\sum \\binom{k}{n} x^n$', '$(-1, 1)$ at least'],
          ],
          caption: 'The series every calculus student should know by heart. Most other series come from these by substitution, multiplication, differentiation or integration.',
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'Expect "find the first four nonzero terms of the Maclaurin series of $x^2 e^{-x}$" or "of $\\cos(3x)$". Start from the table and substitute — instructors award full credit and it is much faster than differentiating. Use the definition only when no known series fits, or when explicitly asked to.',
        },
      ],
    },
    {
      kind: 'truefalse',
      prompt: 'If $f$ has derivatives of all orders at $0$, then its Maclaurin series converges to $f(x)$ for all $x$ near $0$.',
      answer: false,
      explanation: '$f(x) = e^{-1/x^2}$ (with $f(0) = 0$) has derivatives of every order, all equal to $0$ at the origin. Its Maclaurin series is identically $0$, which equals $f(x)$ only at $x = 0$. Having all derivatives guarantees the series can be *written down*, not that it converges to $f$. You need the remainder $R_n(x) \\to 0$, which is what Taylor\'s inequality checks.',
    },
    {
      kind: 'order',
      prompt: 'Put the steps for building a Taylor series of $f$ centered at $a$ from the definition in order.',
      lines: [
        'Compute derivatives $f\'$, $f\'\'$, $f\'\'\'$, … until a pattern appears',
        'Evaluate each derivative at $x = a$',
        'Divide the $n$-th value by $n!$ to get $c_n$',
        'Write $\\sum c_n (x-a)^n$ using the pattern',
        'Use the ratio test to find the radius of convergence',
      ],
      distractors: ['Multiply the $n$-th value by $n!$ to get $c_n$'],
      explanation: 'Derivatives first, then evaluate at the center, then divide by $n!$ (not multiply — the factorial in $f^{(n)}(a) = n!\\,c_n$ has to be undone). Once you have the general term, the ratio test tells you where the series converges. Whether it converges *to $f$* is a separate question settled with the remainder.',
    },
  ],
  takeaways: [
    'If $f(x) = \\sum c_n (x-a)^n$, then necessarily $c_n = \\frac{f^{(n)}(a)}{n!}$; the resulting series is the Taylor series (Maclaurin series when $a = 0$).',
    'The Taylor polynomial $T_n$ matches $f$ and its first $n$ derivatives at $a$; $T_1$ is the linearization.',
    '$e^x = \\sum \\frac{x^n}{n!}$, $\\sin x = \\sum \\frac{(-1)^n x^{2n+1}}{(2n+1)!}$, $\\cos x = \\sum \\frac{(-1)^n x^{2n}}{(2n)!}$, all with $R = \\infty$.',
    'The binomial series $(1+x)^k = \\sum \\binom{k}{n}x^n$ works for every real $k$ on $|x| < 1$.',
    'Power series are unique, so substitution into known series is a legitimate (and faster) way to find Taylor series.',
    'A Taylor series converges to $f$ only when the remainder $R_n(x) \\to 0$; $e^{-1/x^2}$ shows this can fail.',
  ],
  reading: [
    {
      title: 'OpenStax Calculus Volume 2 — 6.3 Taylor and Maclaurin Series',
      url: 'https://openstax.org/books/calculus-volume-2/pages/6-3-taylor-and-maclaurin-series',
      source: 'openstax',
      note: 'Derivation of the coefficient formula with many more worked Taylor polynomials.',
    },
    {
      title: "Paul's Online Notes — Taylor Series",
      url: 'https://tutorial.math.lamar.edu/Classes/CalcII/TaylorSeries.aspx',
      source: 'paul',
      note: 'Shows the derivative-table method for series centered at points other than zero.',
    },
    {
      title: '3Blue1Brown — Taylor series (Essence of Calculus, chapter 11)',
      url: 'https://www.youtube.com/watch?v=3d6DsjIBzJ4',
      source: 'video',
      note: 'A gorgeous visual explanation of why matching derivatives makes a polynomial hug a curve.',
    },
  ],
};
