import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'calc2-improper-integrals',
  title: 'Improper Integrals',
  summary: 'Integrals over infinite intervals and across vertical asymptotes: when an infinitely long region has finite area, p-integrals, and the comparison test.',
  minutes: 18,
  objectives: [
    'Define and evaluate integrals over infinite intervals as limits',
    'Define and evaluate integrals of functions with infinite discontinuities, including hidden ones inside the interval',
    'State and use the convergence rule for $p$-integrals $\\int_1^\\infty \\frac{dx}{x^p}$ and $\\int_0^1 \\frac{dx}{x^p}$',
    'Decide convergence without integrating, using the comparison test',
    'Apply improper integrals to physics and game-programming quantities such as total glide distance',
  ],
  steps: [
    {
      kind: 'concept',
      title: 'An infinitely long region with finite area',
      blocks: [
        {
          type: 'p',
          text: 'A [[definite-integral]] $\\int_a^b f(x)\\,dx$ was defined for a **finite** interval and a **bounded** function. Two natural questions break those rules. What is the area under $y = \\frac{1}{x^2}$ from $x = 1$ all the way to infinity? And what is the area under $y = \\frac{1}{\\sqrt{x}}$ from $0$ to $1$, where the graph shoots up to a vertical asymptote? Integrals like these are called [[improper-integral|improper integrals]].',
        },
        {
          type: 'p',
          text: 'The trick is the one calculus always uses: compute something finite, then take a [[limit]]. Integrate from $1$ to a finite $t$, then let $t \\to \\infty$.',
        },
        {
          type: 'graph',
          x: [0, 10],
          y: [-0.2, 1.4],
          functions: [
            { expr: '1/x^2', label: '$y = \\frac{1}{x^2}$', domain: [0.5, 10] },
            { expr: '1/x', label: '$y = \\frac{1}{x}$', color: 'red', dashed: true, domain: [0.5, 10] },
          ],
          areas: [{ expr: '1/x^2', from: 1, to: 'b' }],
          sliders: [{ name: 'b', min: 1, max: 200, step: 1, value: 5, label: '$t$' }],
          readouts: [
            { label: '$\\int_1^t \\frac{dx}{x^2} = 1 - \\frac{1}{t} =$', expr: '1 - 1/b', digits: 4 },
            { label: '$\\int_1^t \\frac{dx}{x} = \\ln t =$', expr: 'ln(b)', digits: 4 },
          ],
          caption: 'Push $t$ to $200$. The blue area creeps toward $1$ and never passes it. The area under the red curve $\\frac{1}{x}$, which looks almost the same, grows without bound (slowly: $\\ln 200 \\approx 5.3$).',
        },
        {
          type: 'definition',
          term: 'Improper integral over an infinite interval (Type 1)',
          text: 'If $\\int_a^t f(x)\\,dx$ exists for every $t \\ge a$, define\n\n$$\\int_a^\\infty f(x)\\,dx = \\lim_{t \\to \\infty} \\int_a^t f(x)\\,dx.$$\n\nIf the limit exists as a finite number, the improper integral is [[convergent]]; otherwise it is [[divergent]]. Similarly $\\int_{-\\infty}^b f(x)\\,dx = \\lim_{t \\to -\\infty} \\int_t^b f(x)\\,dx$.',
        },
        {
          type: 'derivation',
          title: 'Evaluate $\\displaystyle\\int_1^\\infty \\frac{dx}{x^2}$ and $\\displaystyle\\int_1^\\infty \\frac{dx}{x}$',
          steps: [
            { tex: '\\int_1^\\infty \\frac{dx}{x^2} = \\lim_{t \\to \\infty} \\int_1^t x^{-2}\\,dx', why: 'By definition: replace $\\infty$ by $t$ and take a limit. Never plug $\\infty$ into an antiderivative directly.' },
            { tex: '= \\lim_{t \\to \\infty} \\left[-\\frac{1}{x}\\right]_1^t = \\lim_{t \\to \\infty} \\left(1 - \\frac{1}{t}\\right) = 1', why: 'Ordinary FTC on $[1, t]$, then $\\frac{1}{t} \\to 0$.' },
            { tex: '\\int_1^\\infty \\frac{dx}{x} = \\lim_{t \\to \\infty} \\big[\\ln x\\big]_1^t = \\lim_{t \\to \\infty} \\ln t = \\infty', why: 'Same procedure; $\\ln t$ grows without bound, so the limit is not a finite number.' },
          ],
          result: '$\\int_1^\\infty \\frac{dx}{x^2} = 1$ converges, while $\\int_1^\\infty \\frac{dx}{x}$ diverges.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why "infinite length" does not force "infinite area"',
          text: 'Chop $[1, \\infty)$ into $[1, 2], [2, 4], [4, 8], \\dots$, each twice as wide as the last. Under $\\frac{1}{x^2}$ the height falls by a factor of $4$ each time while the width doubles, so each piece has at most half the area of the previous one — like $\\frac{1}{2} + \\frac{1}{4} + \\frac{1}{8} + \\cdots$, which adds up to something finite. Under $\\frac{1}{x}$ height halves while width doubles, so every piece has the **same** area ($\\ln 2$), and infinitely many equal pieces add up to infinity.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'Evaluate $\\displaystyle\\int_0^\\infty e^{-2x}\\,dx$.',
      label: '$\\int_0^\\infty e^{-2x}\\,dx =$',
      answer: '1/2',
      hint: 'Integrate from $0$ to $t$ first: an antiderivative of $e^{-2x}$ is $-\\frac{1}{2}e^{-2x}$.',
      explanation: '$\\int_0^t e^{-2x}\\,dx = \\left[-\\frac{1}{2}e^{-2x}\\right]_0^t = \\frac{1}{2} - \\frac{1}{2}e^{-2t}$. As $t \\to \\infty$, $e^{-2t} \\to 0$, so the integral converges to $\\frac{1}{2}$. Exponential decay is fast enough that the total area is finite — in general $\\int_0^\\infty e^{-kx}\\,dx = \\frac{1}{k}$ for $k > 0$.',
    },
    {
      kind: 'concept',
      title: 'Both ends infinite',
      blocks: [
        {
          type: 'p',
          text: 'For $\\int_{-\\infty}^{\\infty} f(x)\\,dx$, there are two infinities to deal with, and they must be handled **independently**. Split at any convenient number $c$:',
        },
        {
          type: 'math',
          tex: '\\int_{-\\infty}^{\\infty} f(x)\\,dx = \\int_{-\\infty}^{c} f(x)\\,dx + \\int_{c}^{\\infty} f(x)\\,dx',
          caption: 'The left side converges only if **both** pieces converge. The choice of $c$ does not affect the answer.',
        },
        {
          type: 'derivation',
          title: 'Evaluate $\\displaystyle\\int_{-\\infty}^{\\infty} \\frac{dx}{1 + x^2}$',
          steps: [
            { tex: '= \\int_{-\\infty}^{0} \\frac{dx}{1 + x^2} + \\int_{0}^{\\infty} \\frac{dx}{1 + x^2}', why: 'Split at $c = 0$, where the antiderivative $\\arctan x$ is easy to evaluate.' },
            { tex: '\\int_{0}^{\\infty} \\frac{dx}{1 + x^2} = \\lim_{t \\to \\infty} \\arctan t - \\arctan 0 = \\frac{\\pi}{2}', why: '$\\arctan t \\to \\frac{\\pi}{2}$ as $t \\to \\infty$: the horizontal asymptote of arctangent.' },
            { tex: '\\int_{-\\infty}^{0} \\frac{dx}{1 + x^2} = \\arctan 0 - \\lim_{t \\to -\\infty} \\arctan t = \\frac{\\pi}{2}', why: '$\\arctan t \\to -\\frac{\\pi}{2}$ as $t \\to -\\infty$.' },
            { tex: '\\int_{-\\infty}^{\\infty} \\frac{dx}{1 + x^2} = \\frac{\\pi}{2} + \\frac{\\pi}{2} = \\pi', why: 'Both pieces converged, so the whole integral converges to their sum.' },
          ],
          result: 'The region under the bell-shaped curve $\\frac{1}{1 + x^2}$, infinitely long in both directions, has area exactly $\\pi$.',
        },
        {
          type: 'compare',
          left: {
            title: 'Wrong: one symmetric limit',
            tone: 'bad',
            tex: ['\\int_{-\\infty}^{\\infty} x\\,dx \\overset{?}{=} \\lim_{t \\to \\infty} \\int_{-t}^{t} x\\,dx = \\lim_{t \\to \\infty} 0 = 0'],
            text: 'Letting both ends go to infinity together lets the positive and negative areas cancel artificially.',
          },
          right: {
            title: 'Right: two separate limits',
            tone: 'good',
            tex: ['\\int_{0}^{\\infty} x\\,dx = \\lim_{t \\to \\infty} \\frac{t^2}{2} = \\infty'],
            text: 'One piece already diverges, so $\\int_{-\\infty}^{\\infty} x\\,dx$ is **divergent**. No further work needed.',
          },
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Symmetry is not a shortcut here',
          text: 'For finite intervals, an odd function satisfies $\\int_{-a}^{a} f = 0$. That rule does **not** extend to improper integrals unless you have first shown $\\int_0^\\infty f$ converges. Divergent areas cannot be cancelled against each other: $\\infty - \\infty$ is an [[indeterminate-form]], not $0$.',
        },
      ],
    },
    {
      kind: 'mcq',
      prompt: 'What is $\\displaystyle\\int_{-\\infty}^{\\infty} x^3\\,dx$?',
      options: [
        {
          text: '$0$, because $x^3$ is odd',
          why: 'This is the symmetric-limit trap. Odd symmetry cancels areas only when each half is finite.',
        },
        {
          text: 'Divergent',
          correct: true,
          why: '$\\int_0^\\infty x^3\\,dx = \\lim_{t\\to\\infty} \\frac{t^4}{4} = \\infty$, so the whole integral diverges.',
        },
        {
          text: '$\\infty$, because both halves are infinite',
          why: 'The left half is $-\\infty$ and the right half $+\\infty$; their "sum" is undefined, not $\\infty$. The correct verdict is simply that the integral diverges.',
        },
        {
          text: '$\\frac{1}{4}$',
          why: 'There is no finite value; $\\frac{t^4}{4}$ grows without bound.',
        },
      ],
      explanation: 'Split at $0$: $\\int_0^\\infty x^3\\,dx = \\lim_{t \\to \\infty} \\frac{t^4}{4} = \\infty$. Once one piece diverges, the integral over $(-\\infty, \\infty)$ diverges, regardless of what the other piece does. The answer "$0$" comes from computing $\\lim_{t\\to\\infty}\\int_{-t}^{t} x^3\\,dx$, which is a different (and in this course, not allowed) limit.',
    },
    {
      kind: 'concept',
      title: 'p-integrals: the benchmark family',
      blocks: [
        {
          type: 'p',
          text: 'The examples $\\frac{1}{x^2}$ (converges) and $\\frac{1}{x}$ (diverges) are members of one family. Knowing exactly where the dividing line falls gives you a ruler to measure every other integrand against.',
        },
        {
          type: 'theorem',
          name: 'p-integrals over $[1, \\infty)$',
          tex: '\\int_1^\\infty \\frac{dx}{x^p} = \\begin{cases} \\dfrac{1}{p - 1} & \\text{if } p > 1 \\quad (\\text{convergent}) \\\\[4pt] \\infty & \\text{if } p \\le 1 \\quad (\\text{divergent}) \\end{cases}',
          text: 'These are called [[p-integral|p-integrals]].',
        },
        {
          type: 'derivation',
          title: 'Proof for $p \\ne 1$',
          steps: [
            { tex: '\\int_1^t x^{-p}\\,dx = \\left[\\frac{x^{1-p}}{1 - p}\\right]_1^t = \\frac{t^{1-p} - 1}{1 - p}', why: 'Power rule for integrals, valid because $p \\ne 1$ (so $1 - p \\ne 0$).' },
            { tex: 'p > 1: \\ 1 - p < 0 \\implies t^{1-p} = \\frac{1}{t^{p-1}} \\to 0', why: 'A negative power of $t$ goes to $0$ as $t \\to \\infty$.' },
            { tex: '\\implies \\int_1^\\infty \\frac{dx}{x^p} = \\frac{0 - 1}{1 - p} = \\frac{1}{p - 1}', why: 'Substitute the limit and tidy the signs.' },
            { tex: 'p < 1: \\ 1 - p > 0 \\implies t^{1-p} \\to \\infty', why: 'A positive power of $t$ grows without bound, so the integral diverges. The case $p = 1$ ($\\ln t \\to \\infty$) was done on the first card.' },
          ],
          result: 'Converges exactly when $p > 1$, with value $\\frac{1}{p - 1}$. Check: $p = 2$ gives $1$, as before.',
        },
        {
          type: 'graph',
          x: [0, 10],
          y: [-0.2, 1.6],
          functions: [
            { expr: '1/x^p', label: '$y = \\frac{1}{x^p}$', domain: [0.3, 10] },
            { expr: '1/x', label: '$y = \\frac{1}{x}$ (the borderline)', color: 'gray', dashed: true, domain: [0.3, 10] },
          ],
          areas: [{ expr: '1/x^p', from: 1, to: 'b' }],
          sliders: [
            { name: 'p', min: 0.5, max: 2.9, step: 0.2, value: 1.5, label: '$p$' },
            { name: 'b', min: 1, max: 1000, step: 1, value: 10, label: '$t$' },
          ],
          readouts: [{ label: '$\\int_1^t x^{-p}\\,dx =$', expr: '(b^(1-p) - 1)/(1-p)', digits: 4 }],
          caption: 'Set $p = 1.5$ and drag $t$ up to $1000$: the area settles near $\\frac{1}{1.5 - 1} = 2$. Now set $p = 0.9$: the area keeps growing as $t$ increases. The curves look alike; what matters is how fast they decay.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Near zero the rule flips',
          text: 'For the *other* kind of improper integral (next card), $\\int_0^1 \\frac{dx}{x^p}$ converges when $p < 1$ (value $\\frac{1}{1 - p}$) and diverges when $p \\ge 1$. Steep spikes need to be thin: $\\frac{1}{\\sqrt{x}}$ ($p = \\frac{1}{2}$) is integrable near $0$, but $\\frac{1}{x}$ and $\\frac{1}{x^2}$ are not. Notice $p = 1$ diverges at both ends.',
        },
      ],
    },
    {
      kind: 'fill',
      prompt: 'Classify each $p$-integral.',
      template: '$\\int_1^\\infty x^{-3/2}\\,dx$ ___ .  $\\int_1^\\infty \\frac{dx}{\\sqrt{x}}$ ___ .  $\\int_1^\\infty \\frac{dx}{x^3}$ equals ___ .',
      blanks: [{ answers: ['converges'] }, { answers: ['diverges'] }, { answers: ['$\\frac{1}{2}$'] }],
      wordBank: ['converges', 'diverges', '$\\frac{1}{2}$', '$\\frac{1}{3}$', '$2$'],
      explanation: '$x^{-3/2}$ has $p = \\frac{3}{2} > 1$: converges (to $\\frac{1}{1/2} = 2$). $\\frac{1}{\\sqrt{x}} = x^{-1/2}$ has $p = \\frac{1}{2} \\le 1$: diverges, since $\\int_1^t x^{-1/2}\\,dx = 2\\sqrt{t} - 2 \\to \\infty$. $\\frac{1}{x^3}$ has $p = 3$: converges to $\\frac{1}{3 - 1} = \\frac{1}{2}$. The tempting $\\frac{1}{3}$ comes from mixing up $\\frac{1}{p-1}$ with $\\frac{1}{p}$.',
    },
    {
      kind: 'numeric',
      prompt: 'Evaluate $\\displaystyle\\int_1^\\infty \\frac{dx}{x(x + 1)}$. (Partial fractions first, then the limit.)',
      label: '$\\int_1^\\infty \\frac{dx}{x(x+1)} =$',
      answer: 'ln(2)',
      answerTex: '\\ln 2 \\approx 0.693',
      minDecimals: 3,
      hint: '$\\frac{1}{x(x+1)} = \\frac{1}{x} - \\frac{1}{x+1}$. Combine the two logarithms into one before letting $t \\to \\infty$.',
      explanation: 'With $\\frac{1}{x(x+1)} = \\frac{1}{x} - \\frac{1}{x+1}$: $\\int_1^t = \\big[\\ln x - \\ln(x + 1)\\big]_1^t = \\ln\\frac{t}{t + 1} - \\ln\\frac{1}{2}$. As $t \\to \\infty$, $\\frac{t}{t+1} \\to 1$ and $\\ln 1 = 0$, so the integral converges to $-\\ln\\frac{1}{2} = \\ln 2$. Note that you **cannot** split into $\\int_1^\\infty \\frac{dx}{x} - \\int_1^\\infty \\frac{dx}{x+1}$: both diverge, and $\\infty - \\infty$ is meaningless. Combining the logs first is essential.',
    },
    {
      kind: 'concept',
      title: 'Infinite discontinuities (Type 2)',
      blocks: [
        {
          type: 'p',
          text: 'The second kind of improper integral has a finite interval but an integrand that blows up — an [[infinite-discontinuity]] — at an endpoint or inside. The fix is the same: stop short of the bad point, integrate, then take a [[one-sided-limit]].',
        },
        {
          type: 'definition',
          term: 'Improper integral of a discontinuous function (Type 2)',
          text: 'If $f$ is continuous on $(a, b]$ and blows up at $a$: $\\int_a^b f(x)\\,dx = \\lim_{t \\to a^+} \\int_t^b f(x)\\,dx$. If it blows up at $b$: $\\int_a^b f(x)\\,dx = \\lim_{t \\to b^-} \\int_a^t f(x)\\,dx$. If it blows up at an interior point $c$, split at $c$: $\\int_a^b f = \\int_a^c f + \\int_c^b f$, and **both** pieces must converge.',
        },
        {
          type: 'graph',
          x: [-0.1, 1.3],
          y: [-0.3, 6],
          functions: [{ expr: '1/sqrt(x)', label: '$y = \\frac{1}{\\sqrt{x}}$', domain: [0.02, 1.3] }],
          areas: [{ expr: '1/sqrt(x)', from: 's', to: 1 }],
          vlines: [{ x: 0, label: 'x = 0' }],
          sliders: [{ name: 's', min: 0.0001, max: 0.9, step: 0.0001, value: 0.25, label: '$t$' }],
          readouts: [{ label: '$\\int_t^1 \\frac{dx}{\\sqrt{x}} = 2 - 2\\sqrt{t} =$', expr: '2 - 2sqrt(s)', digits: 4 }],
          caption: 'Slide $t$ toward $0$. The spike is infinitely tall, but it is so thin that the area only approaches $2$.',
        },
        {
          type: 'derivation',
          title: 'Evaluate $\\displaystyle\\int_0^1 \\ln x\\,dx$',
          steps: [
            { tex: '\\int_0^1 \\ln x\\,dx = \\lim_{t \\to 0^+} \\int_t^1 \\ln x\\,dx', why: '$\\ln x \\to -\\infty$ as $x \\to 0^+$, so the integral is improper at the left endpoint.' },
            { tex: '\\int \\ln x\\,dx = x\\ln x - x + C', why: 'Integration by parts with $u = \\ln x$, $dv = dx$: $x\\ln x - \\int x \\cdot \\frac{1}{x}\\,dx$.' },
            { tex: '= \\lim_{t \\to 0^+} \\big[(1\\cdot 0 - 1) - (t\\ln t - t)\\big] = -1 - \\lim_{t \\to 0^+} t\\ln t', why: 'Evaluate from $t$ to $1$; $\\ln 1 = 0$ and $t \\to 0$.' },
            { tex: '\\lim_{t \\to 0^+} t\\ln t = \\lim_{t \\to 0^+} \\frac{\\ln t}{1/t} = \\lim_{t \\to 0^+} \\frac{1/t}{-1/t^2} = \\lim_{t \\to 0^+} (-t) = 0', why: 'The form $0 \\cdot (-\\infty)$ is indeterminate. Rewrite as $\\frac{-\\infty}{\\infty}$ and apply [[lhopitals-rule]].' },
            { tex: '\\int_0^1 \\ln x\\,dx = -1', why: 'Put the pieces together.' },
          ],
          result: 'Converges to $-1$. The answer is negative because $\\ln x < 0$ on $(0, 1)$: the region lies below the $x$-axis and has area $1$.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Hidden discontinuities',
          text: 'Before applying the FTC to $\\int_a^b f$, **check that $f$ is continuous on all of $[a, b]$**. An asymptote inside the interval (where a denominator is $0$, or at $x = \\frac{\\pi}{2}$ for $\\tan x$) makes the integral improper even though the limits look perfectly ordinary. Ignoring it gives confident, wrong answers.',
        },
      ],
    },
    {
      kind: 'error',
      prompt: 'A student evaluates $\\int_{-1}^{1} \\frac{dx}{x^2}$. Tap the first line that is wrong.',
      lines: [
        'An antiderivative of $x^{-2}$ is $-x^{-1} = -\\frac{1}{x}$.',
        'By the FTC, $\\int_{-1}^{1} \\frac{dx}{x^2} = \\left[-\\frac{1}{x}\\right]_{-1}^{1}$.',
        '$= \\left(-\\frac{1}{1}\\right) - \\left(-\\frac{1}{-1}\\right) = -1 - 1$',
        '$= -2$',
      ],
      errorLines: [2],
      explanation: 'Line 2 applies the FTC across $x = 0$, where $\\frac{1}{x^2}$ has an infinite discontinuity; the FTC requires continuity on the whole interval. The red flag: a positive function cannot have a negative integral. Correctly, split at $0$: $\\int_0^1 \\frac{dx}{x^2} = \\lim_{t \\to 0^+}\\left(\\frac{1}{t} - 1\\right) = \\infty$ (a $p$-integral near $0$ with $p = 2 \\ge 1$), so the integral **diverges**.',
    },
    {
      kind: 'numeric',
      prompt: 'Evaluate $\\displaystyle\\int_0^3 \\frac{dx}{(x - 1)^{2/3}}$. (Watch for a discontinuity inside the interval.) Give an exact answer or a decimal to 3 places.',
      label: '$\\int_0^3 \\frac{dx}{(x-1)^{2/3}} =$',
      answer: '3 + 3cbrt(2)',
      answerTex: '3 + 3\\sqrt[3]{2} \\approx 6.780',
      minDecimals: 3,
      hint: 'The integrand blows up at $x = 1$. Split into $\\int_0^1 + \\int_1^3$; an antiderivative is $3(x - 1)^{1/3}$.',
      explanation: 'At $x = 1$ the denominator is $0$, so split. $\\int_0^1 = \\lim_{t \\to 1^-} \\big[3(x-1)^{1/3}\\big]_0^t = 0 - 3(-1)^{1/3} = 3$. $\\int_1^3 = \\lim_{t \\to 1^+} \\big[3(x-1)^{1/3}\\big]_t^3 = 3\\sqrt[3]{2} - 0$. Both converge (each is a $p$-type integral with $p = \\frac{2}{3} < 1$), so the total is $3 + 3\\sqrt[3]{2} \\approx 6.780$.',
    },
    {
      kind: 'concept',
      title: 'The comparison test',
      blocks: [
        {
          type: 'p',
          text: 'Sometimes you only need to know **whether** an integral converges, or you cannot find an antiderivative at all ($e^{-x^2}$ again). The [[comparison-test-integrals|comparison test]] answers the question by trapping the integrand under or over a function you understand, usually a $p$-integral or an exponential.',
        },
        {
          type: 'theorem',
          name: 'Comparison test for improper integrals',
          text: 'Suppose $f$ and $g$ are continuous with $0 \\le g(x) \\le f(x)$ for all $x \\ge a$.\n\n(a) If $\\int_a^\\infty f(x)\\,dx$ converges, then $\\int_a^\\infty g(x)\\,dx$ converges.\n\n(b) If $\\int_a^\\infty g(x)\\,dx$ diverges, then $\\int_a^\\infty f(x)\\,dx$ diverges.\n\n(The same holds for Type 2 integrals near a discontinuity.)',
        },
        {
          type: 'graph',
          x: [0, 4],
          y: [-0.1, 1.1],
          functions: [
            { expr: 'e^(-x)', label: '$y = e^{-x}$', color: 'red' },
            { expr: 'e^(-x^2)', label: '$y = e^{-x^2}$' },
          ],
          areas: [{ expr: 'e^(-x^2)', from: 1, to: 4 }],
          vlines: [{ x: 1, label: 'x = 1' }],
          caption: 'For $x \\ge 1$, the bell curve $e^{-x^2}$ lies below $e^{-x}$. Its area is trapped under a region of finite area.',
        },
        {
          type: 'derivation',
          title: 'Show $\\displaystyle\\int_1^\\infty e^{-x^2}\\,dx$ converges',
          steps: [
            { tex: 'x \\ge 1 \\implies x^2 \\ge x \\implies -x^2 \\le -x \\implies e^{-x^2} \\le e^{-x}', why: 'Multiply $x \\ge 1$ by $x > 0$; negate (flipping the inequality); then use that $e^u$ is increasing.' },
            { tex: '\\int_1^\\infty e^{-x}\\,dx = \\lim_{t \\to \\infty}\\left(e^{-1} - e^{-t}\\right) = \\frac{1}{e}', why: 'The larger function has a convergent integral.' },
            { tex: '\\implies \\int_1^\\infty e^{-x^2}\\,dx \\text{ converges (and is less than } \\tfrac{1}{e})', why: 'Part (a) of the comparison test, with $g = e^{-x^2}$ and $f = e^{-x}$; both are positive.' },
          ],
          result: 'We proved convergence without ever finding an antiderivative. Adding the finite piece $\\int_0^1$ shows $\\int_0^\\infty e^{-x^2}\\,dx$ converges too.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the comparison test works',
          text: 'Since $g \\ge 0$, the area function $G(t) = \\int_a^t g$ only increases as $t$ grows. It is also capped: $G(t) \\le \\int_a^t f \\le \\int_a^\\infty f$, a finite number. An increasing quantity with a ceiling must level off at some limit (this is the completeness of the real numbers), so $\\lim_{t\\to\\infty} G(t)$ exists. Part (b) is the same statement read backwards.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Comparisons that tell you nothing',
          text: 'Being *smaller* than a divergent integral, or *larger* than a convergent one, proves nothing. For example $\\frac{1}{x^2} \\le \\frac{1}{x}$, and $\\int_1^\\infty \\frac{dx}{x}$ diverges, yet $\\int_1^\\infty \\frac{dx}{x^2}$ converges. Always ask: is my function below a convergent one, or above a divergent one?',
        },
      ],
    },
    {
      kind: 'mcq',
      prompt: 'Which comparison correctly decides the convergence of $\\displaystyle\\int_1^\\infty \\frac{1 + e^{-x}}{x}\\,dx$?',
      options: [
        {
          text: '$\\frac{1 + e^{-x}}{x} \\ge \\frac{1}{x}$ and $\\int_1^\\infty \\frac{dx}{x}$ diverges, so it diverges',
          correct: true,
          why: 'Since $e^{-x} > 0$, the integrand is above $\\frac{1}{x}$, whose integral diverges. Part (b) of the test applies.',
        },
        {
          text: '$\\frac{1 + e^{-x}}{x} \\le \\frac{2}{x}$ and $\\int_1^\\infty \\frac{2}{x}\\,dx$ diverges, so it diverges',
          why: 'The inequality is true, but being *below* a divergent integral tells you nothing.',
        },
        {
          text: '$\\frac{1 + e^{-x}}{x} \\le \\frac{2}{x^2}$, and $\\int_1^\\infty \\frac{2}{x^2}\\,dx$ converges, so it converges',
          why: 'The inequality is false: at $x = 4$, the left side is about $0.255$ but $\\frac{2}{16} = 0.125$. For large $x$ the integrand behaves like $\\frac{1}{x}$, not $\\frac{1}{x^2}$.',
        },
        {
          text: '$e^{-x} \\to 0$, so the integrand tends to $0$ and the integral converges',
          why: 'An integrand tending to $0$ is not enough: $\\frac{1}{x} \\to 0$ too, and its integral diverges.',
        },
      ],
      explanation: 'For large $x$ the $e^{-x}$ term is negligible and the integrand looks like $\\frac{1}{x}$, which suggests divergence. To prove it, bound the integrand **below** by something divergent: $\\frac{1 + e^{-x}}{x} > \\frac{1}{x} > 0$ for $x \\ge 1$, and $\\int_1^\\infty \\frac{dx}{x} = \\infty$. So the integral diverges.',
    },
    {
      kind: 'truefalse',
      prompt: 'If $0 \\le g(x) \\le f(x)$ for $x \\ge 1$ and $\\int_1^\\infty f(x)\\,dx$ diverges, then $\\int_1^\\infty g(x)\\,dx$ also diverges.',
      answer: false,
      explanation: 'A smaller function can have finite area under a larger function with infinite area. Counterexample: $g(x) = \\frac{1}{x^2} \\le f(x) = \\frac{1}{x}$ for $x \\ge 1$, but $\\int_1^\\infty \\frac{dx}{x}$ diverges while $\\int_1^\\infty \\frac{dx}{x^2} = 1$. Divergence passes **upward** (from the smaller to the larger), and convergence passes **downward**.',
    },
    {
      kind: 'concept',
      title: 'Where improper integrals show up',
      blocks: [
        {
          type: 'p',
          text: 'Infinite intervals are not a mathematician\'s fantasy; they are how we describe "the total, over all time" or "the total, out to any distance".',
        },
        {
          type: 'list',
          items: [
            '**Probability.** The normal distribution\'s density is a scaled $e^{-x^2/2}$, and the total probability must be $1$. That works because $\\int_{-\\infty}^{\\infty} e^{-x^2}\\,dx = \\sqrt{\\pi}$, a famous result proved in multivariable calculus.',
            '**Escape velocity.** Lifting a mass $m$ from a planet\'s surface (radius $R$) to infinity against gravity $F = \\frac{GMm}{r^2}$ takes [[work]] $\\int_R^\\infty \\frac{GMm}{r^2}\\,dr = \\frac{GMm}{R}$: finite energy suffices to leave forever.',
            '**Signal processing and physics.** Laplace and Fourier transforms, which turn differential equations into algebra, are improper integrals such as $\\int_0^\\infty f(t)e^{-st}\\,dt$.',
          ],
        },
        {
          type: 'derivation',
          title: 'How far does a damped object glide?',
          steps: [
            { tex: 'v(t) = v_0\\,e^{-kt}, \\quad k > 0', why: 'Exponential damping: every second the velocity keeps the same fraction of its value. Games use this for sliding pucks, camera easing and drifting ships.' },
            { tex: '\\text{distance} = \\int_0^\\infty v_0\\,e^{-kt}\\,dt = \\lim_{T \\to \\infty} \\left[-\\frac{v_0}{k}e^{-kt}\\right]_0^T', why: 'Total distance is the integral of speed over all time (the object never quite stops).' },
            { tex: '= \\lim_{T \\to \\infty} \\frac{v_0}{k}\\left(1 - e^{-kT}\\right) = \\frac{v_0}{k}', why: '$e^{-kT} \\to 0$ as $T \\to \\infty$.' },
          ],
          result: 'The object moves forever but covers only the finite distance $\\frac{v_0}{k}$. A designer can pick $k$ so a puck stops exactly where the level needs it.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Frame-rate independent damping',
          text: 'Writing `vel *= 0.95;` every frame makes damping depend on the frame rate. Writing `vel *= std::exp(-k * dt);` applies exactly the continuous decay $e^{-kt}$ over each frame of length `dt`, so the object glides the same total distance $\\frac{v_0}{k}$ at 30 fps or 144 fps.',
        },
        {
          type: 'deepdive',
          title: 'Gabriel\'s horn: finite volume, infinite surface',
          blocks: [
            {
              type: 'p',
              text: 'Rotate $y = \\frac{1}{x}$, $x \\ge 1$, about the $x$-axis. By the [[disk-method]] the volume is $\\int_1^\\infty \\pi\\left(\\frac{1}{x}\\right)^2 dx = \\pi$, finite. The surface area is $2\\pi\\int_1^\\infty \\frac{1}{x}\\sqrt{1 + \\frac{1}{x^4}}\\,dx \\ge 2\\pi\\int_1^\\infty \\frac{dx}{x} = \\infty$ by comparison.',
            },
            {
              type: 'p',
              text: 'So the horn could be filled with $\\pi$ cubic units of paint, yet its surface could never be painted. The paradox dissolves once you remember that a coat of paint has a fixed thickness, while the horn\'s interior becomes thinner than any coat.',
            },
          ],
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'An air-hockey puck in your game is hit with speed $v_0 = 12$ units/s and its velocity decays as $v(t) = 12e^{-3t}$. How far does it travel in total?',
      label: 'distance $=$',
      unit: 'units',
      answer: '4',
      hint: 'Compute $\\int_0^\\infty 12e^{-3t}\\,dt$, or use the result $\\frac{v_0}{k}$.',
      explanation: '$\\int_0^\\infty 12e^{-3t}\\,dt = \\lim_{T\\to\\infty}\\left[-4e^{-3t}\\right]_0^T = \\lim_{T\\to\\infty} 4(1 - e^{-3T}) = 4$. The puck never truly stops, but it approaches a point $4$ units from where it was hit. Doubling the damping constant to $k = 6$ would halve the glide to $2$ units.',
    },
  ],
  takeaways: [
    'An improper integral is a limit of ordinary integrals: replace the infinite endpoint or the bad point with $t$, integrate, then let $t$ approach it. Finite limit = convergent; otherwise divergent.',
    'With two problem points (both ends infinite, or an interior asymptote), split the integral; it converges only if every piece converges. Never cancel $\\infty - \\infty$.',
    '$\\int_1^\\infty \\frac{dx}{x^p}$ converges iff $p > 1$ (to $\\frac{1}{p-1}$); $\\int_0^1 \\frac{dx}{x^p}$ converges iff $p < 1$ (to $\\frac{1}{1-p}$).',
    'Always check for discontinuities inside $[a, b]$ before using the FTC; a positive integrand with a negative "answer" is a warning sign.',
    'Comparison test: below a convergent integral ⇒ convergent; above a divergent integral ⇒ divergent; the other two directions say nothing.',
  ],
  reading: [
    {
      title: 'OpenStax Calculus Volume 2 — 3.7 Improper Integrals',
      url: 'https://openstax.org/books/calculus-volume-2/pages/3-7-improper-integrals',
      source: 'openstax',
      note: 'Definitions, both types of improper integral, and the comparison theorem with exercises.',
    },
    {
      title: "Paul's Online Notes — Improper Integrals",
      url: 'https://tutorial.math.lamar.edu/Classes/CalcII/ImproperIntegrals.aspx',
      source: 'paul',
      note: 'Many fully worked examples, including integrals with interior discontinuities.',
    },
    {
      title: "Paul's Online Notes — Comparison Test for Improper Integrals",
      url: 'https://tutorial.math.lamar.edu/Classes/CalcII/ImproperIntegralsCompTest.aspx',
      source: 'paul',
      note: 'How to pick the right function to compare against, with tricky cases.',
    },
    {
      title: "Wikipedia — Gabriel's horn",
      url: 'https://en.wikipedia.org/wiki/Gabriel%27s_horn',
      source: 'wikipedia',
      note: 'The history and resolution of the finite-volume, infinite-area paradox.',
    },
  ],
};
