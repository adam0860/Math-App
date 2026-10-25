import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'calc1-definite-integral',
  title: 'The Definite Integral',
  summary: 'The limit of Riemann sums: net signed area, how to read the notation, and the rules integrals obey.',
  minutes: 17,
  objectives: [
    'State the definition of $\\int_a^b f(x)\\,dx$ as a limit of Riemann sums and name each part of the notation',
    'Interpret a definite integral as net signed area, and tell it apart from total area',
    'Evaluate definite integrals of lines, constants and semicircles using geometry',
    'Use the properties of definite integrals (reversal, additivity, linearity, comparison) to compute new integrals from known ones',
    'Use symmetry of odd and even functions to evaluate integrals over $[-a, a]$',
  ],
  steps: [
    {
      kind: 'concept',
      title: 'From Riemann sums to the integral',
      blocks: [
        {
          type: 'p',
          text: 'In the last lesson the exact area under $y = x^2$ on $[0, 2]$ came out as the limit of Riemann sums. That limit is so important that it gets its own name and symbol, and it turns out to mean much more than area.',
        },
        {
          type: 'definition',
          term: 'The definite integral',
          text: 'If $f$ is defined on $[a, b]$, the [[definite-integral]] of $f$ from $a$ to $b$ is\n\n$$\\int_a^b f(x)\\,dx = \\lim_{n \\to \\infty} \\sum_{i=1}^{n} f(x_i^*)\\,\\Delta x,$$\n\nwhere $\\Delta x = \\frac{b - a}{n}$, provided the limit exists and is the same for every choice of sample points $x_i^*$. Then $f$ is called [[integrable-function|integrable]] on $[a, b]$.',
        },
        {
          type: 'table',
          headers: ['Symbol', 'Name', 'Where it came from'],
          rows: [
            ['$\\int$', 'integral sign', 'A stretched **S** for "sum" (Leibniz, 1675)'],
            ['$a$, $b$', '[[limits-of-integration]]', 'The ends of the interval $[a, b]$'],
            ['$f(x)$', '[[integrand]]', 'The height of each rectangle'],
            ['$dx$', 'differential', 'The width $\\Delta x$, now infinitely thin; it also names the variable'],
          ],
          caption: 'Each piece of the notation is the "limit version" of a piece of $\\sum f(x_i^*)\\,\\Delta x$.',
        },
        {
          type: 'theorem',
          name: 'Continuous functions are integrable',
          text: 'If $f$ is continuous on $[a, b]$ — or bounded with only finitely many jump discontinuities — then $f$ is integrable on $[a, b]$. In particular the limit does not depend on the sample points, so you may use right endpoints (or left, or midpoints) whenever convenient.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why insist that every choice of sample point gives the same limit?',
          text: 'If different sample points led to different limits, "the" area would not be well defined — it would depend on an arbitrary choice. For continuous $f$, the heights inside a tiny subinterval are all nearly equal, so the choice stops mattering as $\\Delta x \\to 0$. For a wild function like "$1$ on rationals, $0$ on irrationals", left sums could all be $1$ and right sums all $0$; such a function is not integrable.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'The variable is a dummy',
          text: 'A definite integral is a **number**, not a function of $x$. The letter inside is a placeholder, just like the loop variable in a `for` loop: $\\int_0^2 x^2\\,dx = \\int_0^2 t^2\\,dt = \\int_0^2 u^2\\,du = \\frac{8}{3}$. Contrast the *indefinite* integral $\\int x^2\\,dx = \\frac{x^3}{3} + C$, which is a family of functions.',
        },
      ],
    },
    {
      kind: 'fill',
      prompt: 'Name the parts of $\\displaystyle\\int_1^4 \\sqrt{x}\\,dx$.',
      template: 'The integrand is ___, the lower limit of integration is ___, and the integral itself is a ___.',
      blanks: [{ answers: ['$\\sqrt{x}$'] }, { answers: ['$1$'] }, { answers: ['number'] }],
      wordBank: ['$\\sqrt{x}$', '$dx$', '$1$', '$4$', 'number', 'function of $x$'],
      explanation: 'The integrand is the function being integrated, $\\sqrt{x}$; $dx$ only names the variable. The lower limit is the left end of the interval, $1$ (the upper limit is $4$). A definite integral with numerical limits evaluates to a single number — here the area under $\\sqrt{x}$ from $1$ to $4$, which turns out to be $\\frac{14}{3}$.',
    },
    {
      kind: 'concept',
      title: 'Net signed area',
      blocks: [
        {
          type: 'p',
          text: 'Nothing in the definition requires $f \\ge 0$. When $f(x_i^*)$ is negative, the "rectangle" $f(x_i^*)\\,\\Delta x$ contributes a **negative** amount. So the integral adds the area above the $x$-axis and *subtracts* the area below it. This is the [[net-signed-area]].',
        },
        {
          type: 'math',
          tex: '\\int_a^b f(x)\\,dx = A_{\\text{above}} - A_{\\text{below}}',
        },
        {
          type: 'graph',
          x: [-0.5, 4.5],
          y: [-1.5, 3.5],
          functions: [{ expr: 'x - 1', label: '$y = x - 1$' }],
          areas: [
            { expr: 'max(x - 1, 0)', from: 0, to: 'b', color: 'green' },
            { expr: 'min(x - 1, 0)', from: 0, to: 'b', color: 'red' },
          ],
          sliders: [{ name: 'b', min: 0.2, max: 4, step: 0.1, value: 3, label: 'upper limit $b$' }],
          readouts: [{ label: '$\\int_0^b (x - 1)\\,dx =$', expr: 'b^2/2 - b', digits: 3 }],
          caption: 'Green area counts positively, red negatively. For $b < 1$ the integral is negative; at $b = 2$ the two triangles cancel exactly and the integral is $0$, even though plenty of area is shaded.',
        },
        {
          type: 'derivation',
          title: 'Evaluate $\\displaystyle\\int_0^3 (x - 1)\\,dx$ using geometry',
          steps: [
            { tex: 'A_{\\text{below}} = \\tfrac{1}{2}(1)(1) = \\tfrac{1}{2}', why: 'On $[0, 1]$ the line is below the axis: a triangle with base $1$ (from $0$ to $1$) and height $1$ (the line starts at $-1$).' },
            { tex: 'A_{\\text{above}} = \\tfrac{1}{2}(2)(2) = 2', why: 'On $[1, 3]$ it is above the axis: base $2$, height $f(3) = 2$.' },
            { tex: '\\int_0^3 (x - 1)\\,dx = 2 - \\tfrac{1}{2} = \\tfrac{3}{2}', why: 'Net signed area: above minus below.' },
          ],
          result: 'The integral is $\\frac{3}{2}$, while the **total** area shaded is $2 + \\frac{1}{2} = \\frac{5}{2}$.',
        },
        {
          type: 'callout',
          variant: 'analogy',
          title: 'Velocity and displacement',
          text: 'If $f$ is a velocity, positive means moving forward and negative means moving backward. The integral is your net [[displacement]] — where you end up relative to the start — while the total area is the total distance driven. Walk $2$ km east and $\\frac{1}{2}$ km west: displacement $\\frac{3}{2}$ km, distance $\\frac{5}{2}$ km.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'Use geometry to evaluate $\\displaystyle\\int_0^5 (3 - x)\\,dx$.',
      hint: 'Sketch $y = 3 - x$. It crosses the axis at $x = 3$: one triangle above the axis, one below.',
      answer: '5/2',
      answerTex: '\\frac{5}{2}',
      explanation: 'On $[0, 3]$ the line is above the axis: a triangle with base $3$ and height $3$, area $\\frac{9}{2}$. On $[3, 5]$ it is below: base $2$, height $|3 - 5| = 2$, area $2$. Net signed area: $\\frac{9}{2} - 2 = \\frac{5}{2}$. Adding the areas instead would give the total area, $\\frac{13}{2}$.',
    },
    {
      kind: 'concept',
      title: 'Integrals you can see',
      blocks: [
        {
          type: 'p',
          text: 'Until we have the Fundamental Theorem, the definition is hard work. But whenever the region is a shape from geometry, you can read the integral off a sketch. Three families come up constantly:',
        },
        {
          type: 'list',
          items: [
            '**Constants:** $\\int_a^b c\\,dx = c(b - a)$ — a rectangle of height $c$ and width $b - a$ (negative if $c < 0$).',
            '**Lines:** triangles and trapezoids, as on the previous card.',
            '**Circles:** $y = \\sqrt{r^2 - x^2}$ is the upper half of the circle $x^2 + y^2 = r^2$, so $\\int_{-r}^{r} \\sqrt{r^2 - x^2}\\,dx = \\frac{1}{2}\\pi r^2$.',
          ],
        },
        {
          type: 'graph',
          x: [-0.5, 2.5],
          y: [-0.3, 3.3],
          equal: true,
          functions: [{ expr: '1 + sqrt(4 - x^2)', label: '$y = 1 + \\sqrt{4 - x^2}$', domain: [0, 2] }],
          areas: [
            { expr: '1', from: 0, to: 2, color: 'blue' },
            { expr: '1 + sqrt(4 - x^2)', expr2: '1', from: 0, to: 2, color: 'green' },
          ],
          caption: 'The region splits into a $2 \\times 1$ rectangle (blue) and a quarter of a circle of radius $2$ (green).',
        },
        {
          type: 'derivation',
          title: 'Evaluate $\\displaystyle\\int_0^2 \\left(1 + \\sqrt{4 - x^2}\\right)dx$',
          steps: [
            { tex: '\\int_0^2 \\left(1 + \\sqrt{4 - x^2}\\right)dx = \\int_0^2 1\\,dx + \\int_0^2 \\sqrt{4 - x^2}\\,dx', why: 'The integral of a sum is the sum of the integrals (a property proved on the next card: Riemann sums split the same way).' },
            { tex: '\\int_0^2 1\\,dx = 1 \\cdot (2 - 0) = 2', why: 'A rectangle of height $1$ and width $2$.' },
            { tex: '\\int_0^2 \\sqrt{4 - x^2}\\,dx = \\tfrac{1}{4}\\pi (2)^2 = \\pi', why: 'For $0 \\le x \\le 2$, $y = \\sqrt{4 - x^2}$ traces the quarter of the radius-$2$ circle in the first quadrant.' },
            { tex: '\\int_0^2 \\left(1 + \\sqrt{4 - x^2}\\right)dx = 2 + \\pi', why: 'Add the pieces.' },
          ],
          result: 'The integral is $2 + \\pi \\approx 5.14$.',
        },
        {
          type: 'callout',
          variant: 'tip',
          text: 'Before computing any integral, sketch the integrand. Even a rough sketch tells you the **sign** of the answer and roughly how big it should be — the best defence against a wrong answer you would otherwise trust.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'Evaluate $\\displaystyle\\int_{-3}^{3} \\sqrt{9 - x^2}\\,dx$.',
      hint: 'What shape does $y = \\sqrt{9 - x^2}$ trace for $-3 \\le x \\le 3$?',
      answer: '9pi/2',
      answerTex: '\\frac{9\\pi}{2}',
      explanation: 'Squaring $y = \\sqrt{9 - x^2}$ gives $x^2 + y^2 = 9$ with $y \\ge 0$: the upper half of the circle of radius $3$. Its area is $\\frac{1}{2}\\pi(3)^2 = \\frac{9\\pi}{2} \\approx 14.14$. (A full circle, $9\\pi$, would need the lower half too — which lies below the axis and would count negatively.)',
    },
    {
      kind: 'concept',
      title: 'Properties of the definite integral',
      blocks: [
        {
          type: 'p',
          text: 'Every property below comes straight from Riemann sums: whatever is true of the sums for every $n$ survives the limit. Assume $f$ and $g$ are integrable.',
        },
        {
          type: 'table',
          headers: ['Property', 'Formula'],
          rows: [
            ['Zero width', '$\\int_a^a f(x)\\,dx = 0$'],
            ['Reversing the limits', '$\\int_b^a f(x)\\,dx = -\\int_a^b f(x)\\,dx$'],
            ['Constant multiple', '$\\int_a^b c\\,f(x)\\,dx = c\\int_a^b f(x)\\,dx$'],
            ['Sum / difference', '$\\int_a^b \\big(f(x) \\pm g(x)\\big)\\,dx = \\int_a^b f(x)\\,dx \\pm \\int_a^b g(x)\\,dx$'],
            ['Additivity over intervals', '$\\int_a^c f(x)\\,dx + \\int_c^b f(x)\\,dx = \\int_a^b f(x)\\,dx$'],
            ['Comparison', 'If $f(x) \\le g(x)$ on $[a, b]$, then $\\int_a^b f(x)\\,dx \\le \\int_a^b g(x)\\,dx$'],
            ['Bounds', 'If $m \\le f(x) \\le M$ on $[a, b]$, then $m(b - a) \\le \\int_a^b f(x)\\,dx \\le M(b - a)$'],
          ],
          caption: 'Additivity holds for **any** order of $a$, $b$, $c$ — even if $c$ is outside $[a, b]$ — thanks to the reversal rule.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why reversing the limits flips the sign',
          text: 'If you integrate from $b$ down to $a$, the width is $\\Delta x = \\frac{a - b}{n}$, the negative of the usual width. Every term $f(x_i^*)\\,\\Delta x$ changes sign, so the whole sum does. This convention is what makes additivity work in every order: $\\int_a^b f + \\int_b^a f = \\int_a^a f = 0$.',
        },
        {
          type: 'derivation',
          title: 'Given $\\int_0^5 f(x)\\,dx = 7$, $\\int_0^2 f(x)\\,dx = 3$ and $\\int_0^5 g(x)\\,dx = -2$',
          steps: [
            { tex: '\\int_0^2 f + \\int_2^5 f = \\int_0^5 f \\implies 3 + \\int_2^5 f = 7', why: 'Additivity: split $[0, 5]$ at $2$.' },
            { tex: '\\int_2^5 f(x)\\,dx = 4', why: 'Subtract $3$ from both sides.' },
            { tex: '\\int_5^2 f(x)\\,dx = -4', why: 'Reversing the limits flips the sign.' },
            { tex: '\\int_0^5 \\big(2f(x) - 3g(x)\\big)\\,dx = 2(7) - 3(-2) = 20', why: 'Linearity: split the difference, pull out the constants, and substitute the known values. Watch the double negative.' },
          ],
          result: '$\\int_2^5 f = 4$, $\\int_5^2 f = -4$ and $\\int_0^5 (2f - 3g) = 20$.',
        },
        {
          type: 'callout',
          variant: 'warning',
          text: 'There is no product rule here either: $\\int_a^b f(x)g(x)\\,dx$ is **not** $\\left(\\int_a^b f\\right)\\left(\\int_a^b g\\right)$. With $f = g = 1$ on $[0, 2]$: $\\int_0^2 1\\,dx = 2$, but $2 \\cdot 2 = 4$.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'Suppose $\\displaystyle\\int_0^3 f(x)\\,dx = 4$, $\\displaystyle\\int_3^8 f(x)\\,dx = -1$ and $\\displaystyle\\int_0^8 g(x)\\,dx = 5$. Find $\\displaystyle\\int_8^0 \\big(3f(x) + g(x)\\big)\\,dx$.',
      hint: 'First find $\\int_0^8 f$ by additivity. Then compute $\\int_0^8 (3f + g)$, and finally reverse the limits.',
      answer: '-14',
      explanation: 'Additivity: $\\int_0^8 f = \\int_0^3 f + \\int_3^8 f = 4 + (-1) = 3$. Linearity: $\\int_0^8 (3f + g) = 3(3) + 5 = 14$. The limits in the question run from $8$ down to $0$, so the answer is $-14$.',
    },
    {
      kind: 'mcq',
      prompt: 'Which statement is **false** for every pair of continuous functions $f$, $g$ on $[a, b]$?',
      options: [
        {
          text: '$\\int_a^b \\big(f(x) + g(x)\\big)\\,dx = \\int_a^b f(x)\\,dx + \\int_a^b g(x)\\,dx$',
          why: 'True: Riemann sums of $f + g$ split into the sums for $f$ and $g$, and limits of sums are sums of limits.',
        },
        {
          text: '$\\int_a^b f(x)\\,g(x)\\,dx = \\left(\\int_a^b f(x)\\,dx\\right)\\left(\\int_a^b g(x)\\,dx\\right)$',
          correct: true,
          why: 'False in general: $\\sum f(x_i)g(x_i)\\Delta x$ has one factor of $\\Delta x$, while the product of the two sums has two. For $f = g = 1$ on $[0, 2]$ the left side is $2$ and the right side is $4$.',
        },
        {
          text: '$\\int_a^b 5f(x)\\,dx = 5\\int_a^b f(x)\\,dx$',
          why: 'True: a constant factor comes out of every term of the Riemann sum.',
        },
        {
          text: '$\\int_b^a f(x)\\,dx = -\\int_a^b f(x)\\,dx$',
          why: 'True: going backwards makes every $\\Delta x$ negative.',
        },
      ],
      explanation: 'Integrals respect addition and constant multiples (they are *linear*), but not multiplication of functions. Integrating products takes real techniques — substitution later in this unit, and integration by parts in Calculus II.',
    },
    {
      kind: 'error',
      prompt: 'Given $\\displaystyle\\int_1^6 f(x)\\,dx = 10$ and $\\displaystyle\\int_1^4 f(x)\\,dx = 7$, a student finds $\\displaystyle\\int_6^4 f(x)\\,dx$. Tap the first wrong line.',
      lines: [
        '$\\displaystyle\\int_1^4 f(x)\\,dx + \\int_4^6 f(x)\\,dx = \\int_1^6 f(x)\\,dx$',
        '$\\displaystyle 7 + \\int_4^6 f(x)\\,dx = 10$',
        '$\\displaystyle\\int_4^6 f(x)\\,dx = 3$',
        '$\\displaystyle\\int_6^4 f(x)\\,dx = 3$',
      ],
      errorLines: [4],
      explanation: 'Lines 1–3 correctly use additivity to get $\\int_4^6 f = 3$. But the question asks for the integral from $6$ to $4$ — the limits are reversed — so the sign must flip: $\\int_6^4 f(x)\\,dx = -3$. Always compare the order of the limits in your answer with the order in the question.',
    },
    {
      kind: 'concept',
      title: 'Symmetry: odd and even integrands',
      blocks: [
        {
          type: 'p',
          text: 'Integrals over an interval symmetric about $0$, like $[-a, a]$, often simplify instantly. Recall that $f$ is an [[even-function]] if $f(-x) = f(x)$ (graph symmetric about the $y$-axis) and an [[odd-function]] if $f(-x) = -f(x)$ (symmetric about the origin).',
        },
        {
          type: 'theorem',
          name: 'Integrals of even and odd functions',
          tex: 'f \\text{ even:}\\ \\int_{-a}^{a} f(x)\\,dx = 2\\int_0^a f(x)\\,dx, \\qquad f \\text{ odd:}\\ \\int_{-a}^{a} f(x)\\,dx = 0',
        },
        {
          type: 'graph',
          x: [-2.5, 2.5],
          y: [-3, 3],
          functions: [{ expr: 'x^3 - 3x', label: '$y = x^3 - 3x$ (odd)' }],
          areas: [
            { expr: 'max(x^3 - 3x, 0)', from: '-a', to: 'a', color: 'green' },
            { expr: 'min(x^3 - 3x, 0)', from: '-a', to: 'a', color: 'red' },
          ],
          sliders: [{ name: 'a', min: 0.2, max: 2.2, step: 0.05, value: 1.5, label: '$a$' }],
          readouts: [{ label: '$\\int_{-a}^{a} (x^3 - 3x)\\,dx =$', expr: '0' }],
          caption: 'Rotating the graph $180°$ about the origin swaps every green region with a red region of the same size. Whatever $a$ is, positive and negative areas cancel exactly.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why this works',
          text: 'For an odd function, the region over $[-a, 0]$ is the region over $[0, a]$ flipped upside down, so its signed area is the negative: the two halves cancel. For an even function, the left half is a mirror image of the right half with the **same** sign, so the total is twice the right half.',
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'Check for symmetry *before* computing. An exam integral like $\\int_{-\\pi}^{\\pi} x^5\\cos x\\,dx$ looks terrifying, but $x^5\\cos x$ is odd (odd $\\times$ even), so it is $0$ in one line. Remember: the interval must be symmetric, $[-a, a]$.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'Evaluate $\\displaystyle\\int_{-2}^{2} (x^3 + 4)\\,dx$.',
      hint: 'Split it into $\\int_{-2}^{2} x^3\\,dx + \\int_{-2}^{2} 4\\,dx$. One piece is odd; the other is a rectangle.',
      answer: '16',
      explanation: '$x^3$ is odd and the interval $[-2, 2]$ is symmetric, so $\\int_{-2}^{2} x^3\\,dx = 0$. The constant gives a rectangle: $\\int_{-2}^{2} 4\\,dx = 4\\cdot 4 = 16$. Total: $16$. Note that $x^3 + 4$ itself is neither odd nor even — splitting first lets you use symmetry on the part that is.',
    },
    {
      kind: 'truefalse',
      prompt: 'If $\\displaystyle\\int_a^b f(x)\\,dx = 0$, then $f(x) = 0$ for every $x$ in $[a, b]$.',
      answer: false,
      explanation: 'A zero integral only says the area above the axis equals the area below. For example $\\int_0^2 (x - 1)\\,dx = 0$ (two triangles of area $\\frac{1}{2}$ cancel) and $\\int_0^{2\\pi}\\sin x\\,dx = 0$, yet neither function is identically zero. (It *is* true if you also know $f \\ge 0$ and $f$ is continuous.)',
    },
    {
      kind: 'concept',
      title: 'A suspicious pattern',
      blocks: [
        {
          type: 'p',
          text: 'Let\'s use the definition once more, with a *variable* upper limit $b > 0$, to find $\\int_0^b x^2\\,dx$.',
        },
        {
          type: 'derivation',
          title: 'Evaluate $\\displaystyle\\int_0^b x^2\\,dx$ from the definition',
          steps: [
            { tex: '\\Delta x = \\frac{b}{n}, \\qquad x_i = \\frac{bi}{n}', why: 'Regular partition of $[0, b]$; right endpoints.' },
            { tex: '\\sum_{i=1}^{n} \\left(\\frac{bi}{n}\\right)^2 \\frac{b}{n} = \\frac{b^3}{n^3}\\sum_{i=1}^{n} i^2', why: 'Each term is $\\frac{b^2 i^2}{n^2}\\cdot\\frac{b}{n}$; pull out everything that does not depend on $i$.' },
            { tex: '= \\frac{b^3}{n^3}\\cdot\\frac{n(n+1)(2n+1)}{6}', why: 'Sum-of-squares formula.' },
            { tex: '\\xrightarrow{\\;n \\to \\infty\\;} \\frac{b^3}{n^3}\\cdot\\frac{2n^3}{6} \\to \\frac{b^3}{3}', why: 'The leading term of $n(n+1)(2n+1)$ is $2n^3$; the lower-order terms vanish in the limit.' },
          ],
          result: '$\\int_0^b x^2\\,dx = \\frac{b^3}{3}$. Check: $b = 2$ gives $\\frac{8}{3}$, as before.',
        },
        {
          type: 'table',
          headers: ['Integrand', '$\\int_0^b (\\cdots)\\,dx$', 'How we know'],
          rows: [
            ['$1$', '$b$', 'rectangle'],
            ['$x$', '$\\dfrac{b^2}{2}$', 'triangle with base and height $b$'],
            ['$x^2$', '$\\dfrac{b^3}{3}$', 'limit of Riemann sums (above)'],
          ],
          caption: 'Look at the middle column as a function of $b$. Each entry is an **antiderivative** of the integrand.',
        },
        {
          type: 'p',
          text: 'That is no coincidence. Areas (limits of sums) and antiderivatives (reversed slopes) look like completely unrelated ideas — and yet here they match. The next lesson explains why, in the theorem that turns integration from painful limits into a two-line computation: the [[fundamental-theorem-of-calculus|Fundamental Theorem of Calculus]].',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Integrals are running totals',
          text: 'Whenever a program accumulates `total += rate * dt` — fuel burned, damage dealt by a damage-over-time effect, distance travelled — it is computing a Riemann sum of the rate. The definite integral is what that total approaches as the frame time shrinks.',
        },
      ],
    },
    {
      kind: 'expr',
      prompt: 'Use the table ($\\int_0^b 1\\,dx = b$, $\\int_0^b x\\,dx = \\frac{b^2}{2}$, $\\int_0^b x^2\\,dx = \\frac{b^3}{3}$) and linearity to find $\\displaystyle\\int_0^b (6x^2 - 4x + 1)\\,dx$ as an expression in $b$.',
      label: '$\\displaystyle\\int_0^b (6x^2 - 4x + 1)\\,dx =$',
      variables: ['b'],
      domain: [0.5, 3],
      answer: '2b^3 - 2b^2 + b',
      answerTex: '2b^3 - 2b^2 + b',
      hint: 'Split into three integrals and pull out the constants $6$ and $-4$.',
      explanation: 'By linearity, $6\\int_0^b x^2\\,dx - 4\\int_0^b x\\,dx + \\int_0^b 1\\,dx = 6\\cdot\\frac{b^3}{3} - 4\\cdot\\frac{b^2}{2} + b = 2b^3 - 2b^2 + b$. Notice that this is exactly an antiderivative of $6x^2 - 4x + 1$, evaluated at $b$ — the pattern the Fundamental Theorem will explain.',
    },
  ],
  takeaways: [
    '$\\int_a^b f(x)\\,dx = \\lim_{n \\to \\infty}\\sum f(x_i^*)\\,\\Delta x$. Continuous functions are integrable, and the answer is a number that does not depend on the name of the variable.',
    'The definite integral is net signed area: area above the axis minus area below. It can be zero or negative even when plenty of area is enclosed.',
    'Constants, lines and semicircles can be integrated with geometry: sketch first.',
    'Integrals are linear and additive over intervals; reversing the limits flips the sign; bigger integrands give bigger integrals. They do not split over products.',
    'Over $[-a, a]$: odd integrands give $0$, even integrands give $2\\int_0^a f$.',
  ],
  reading: [
    {
      title: 'OpenStax Calculus Volume 1 — 5.2 The Definite Integral',
      url: 'https://openstax.org/books/calculus-volume-1/pages/5-2-the-definite-integral',
      source: 'openstax',
      note: 'The definition, net signed area, and the full list of properties with proofs from Riemann sums.',
    },
    {
      title: "Paul's Online Notes — Definition of the Definite Integral",
      url: 'https://tutorial.math.lamar.edu/Classes/CalcI/DefnofDefiniteIntegral.aspx',
      source: 'paul',
      note: 'Clear statements of each property, with short proofs and examples.',
    },
    {
      title: 'Wikipedia — Riemann integral',
      url: 'https://en.wikipedia.org/wiki/Riemann_integral',
      source: 'wikipedia',
      note: 'For the curious: the rigorous definition, and examples of functions that are not integrable.',
    },
  ],
};
