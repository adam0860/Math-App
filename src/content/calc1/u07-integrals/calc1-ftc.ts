import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'calc1-ftc',
  title: 'The Fundamental Theorem of Calculus',
  summary: 'Why area and antiderivatives are two sides of one coin — and how that turns integrals into two-line calculations.',
  minutes: 19,
  objectives: [
    'Interpret an accumulation function $g(x) = \\int_a^x f(t)\\,dt$ and read its behaviour from the graph of $f$',
    'State both parts of the Fundamental Theorem of Calculus with their hypotheses, and explain why Part 1 is true',
    'Differentiate integrals with variable limits, using the chain rule when a limit is a function of $x$',
    'Evaluate definite integrals with $\\int_a^b f(x)\\,dx = F(b) - F(a)$',
    'Recognise when the theorem does not apply because the integrand is discontinuous',
  ],
  steps: [
    {
      kind: 'concept',
      title: 'Accumulation functions',
      blocks: [
        {
          type: 'p',
          text: 'So far a definite integral has had fixed limits and produced a number. Now let the upper limit **move**. For each $x$, the integral $\\int_a^x f(t)\\,dt$ is a number — the net area under $f$ from $a$ up to $x$ — so the integral defines a new *function* of $x$.',
        },
        {
          type: 'definition',
          term: 'Accumulation function',
          text: 'For a fixed starting point $a$, the [[accumulation-function]] of $f$ is\n\n$$g(x) = \\int_a^x f(t)\\,dt.$$\n\nThe variable of integration is called $t$ so that it is not confused with the upper limit $x$.',
        },
        {
          type: 'graph',
          x: [-0.3, 4.6],
          y: [-1.5, 4.5],
          functions: [
            { expr: 'x^2 - 4x + 3', label: '$y = f(t) = (t-1)(t-3)$' },
            { expr: 'x^3/3 - 2x^2 + 3x', label: '$y = g(x) = \\int_0^x f(t)\\,dt$', color: 'purple', domain: [0, 4.6] },
          ],
          areas: [
            { expr: 'max(x^2 - 4x + 3, 0)', from: 0, to: 'b', color: 'green' },
            { expr: 'min(x^2 - 4x + 3, 0)', from: 0, to: 'b', color: 'red' },
          ],
          points: [{ x: 'b', y: 'b^3/3 - 2b^2 + 3b', label: '(x, g(x))', color: 'purple' }],
          tangents: [{ expr: 'x^3/3 - 2x^2 + 3x', at: 'b', color: 'orange' }],
          sliders: [{ name: 'b', min: 0, max: 4.5, step: 0.05, value: 0.6, label: 'upper limit $x$' }],
          readouts: [
            { label: '$g(x)$ = shaded net area $=$', expr: 'b^3/3 - 2b^2 + 3b', digits: 3 },
            { label: 'slope of $g$ at $x$ $\\approx$', expr: 'b^2 - 4b + 3', digits: 3 },
            { label: 'height $f(x) =$', expr: 'b^2 - 4b + 3', digits: 3 },
          ],
          caption: 'Drag the upper limit. The purple curve records the shaded net area so far. While $f > 0$ (green) the area grows and $g$ rises; once $f < 0$ (red) area is subtracted and $g$ falls. Compare the last two readouts.',
        },
        {
          type: 'p',
          text: 'Look at the readouts: the slope of $g$ at $x$ **equals** the height of $f$ at $x$, for every position of the slider. The rate at which area accumulates is the height of the curve at the moving edge. That observation is the first half of the Fundamental Theorem.',
        },
        {
          type: 'callout',
          variant: 'analogy',
          title: 'A paint roller',
          text: 'Imagine painting the region under $f$ with a roller that moves right at one unit per second and whose height adjusts to match the curve. The rate at which painted area grows is the roller\'s current height, $f(x)$. Where the curve dips below the axis, think of the roller "un-painting" — removing area.',
        },
      ],
    },
    {
      kind: 'mcq',
      prompt: 'On the previous card, $g(x) = \\int_0^x (t - 1)(t - 3)\\,dt$. Where on $[0, 4.5]$ does $g$ have a **local maximum**?',
      options: [
        {
          text: '$x = 1$',
          correct: true,
          why: 'Just before $x = 1$, $f > 0$ so area is being added and $g$ rises; just after, $f < 0$ and $g$ falls. Rising then falling is a local maximum.',
        },
        {
          text: '$x = 2$',
          why: '$x = 2$ is where $f$ itself is lowest. That is where $g$ is falling *fastest*, not where it peaks.',
        },
        {
          text: '$x = 3$',
          why: 'At $x = 3$, $f$ changes from negative to positive, so $g$ stops falling and starts rising: a local **minimum**.',
        },
        {
          text: '$x = 0$',
          why: '$g(0) = 0$ and $g$ increases immediately after, since $f(0) = 3 > 0$. That is the lowest point nearby on the right, not a maximum.',
        },
      ],
      explanation: 'Since $g\' = f$, $g$ has a local maximum where $f$ changes sign from $+$ to $-$ — the first derivative test applied to $g$. Here $f(t) = (t - 1)(t - 3)$ is positive before $1$ and negative between $1$ and $3$, so $g$ peaks at $x = 1$ with $g(1) = \\frac{4}{3}$.',
    },
    {
      kind: 'concept',
      title: 'FTC Part 1 — and why it is true',
      blocks: [
        {
          type: 'theorem',
          name: 'Fundamental Theorem of Calculus, Part 1',
          text: 'If $f$ is continuous on $[a, b]$, then $g(x) = \\int_a^x f(t)\\,dt$ is continuous on $[a, b]$, differentiable on $(a, b)$, and\n\n$$g\'(x) = \\frac{d}{dx}\\int_a^x f(t)\\,dt = f(x).$$',
        },
        {
          type: 'p',
          text: 'Here is the reason. Compute the difference quotient of $g$. By additivity, $g(x + h) - g(x) = \\int_x^{x+h} f(t)\\,dt$: just the thin sliver of area between $x$ and $x + h$. That sliver is almost a rectangle of width $h$ and height $f(x)$.',
        },
        {
          type: 'graph',
          x: [-0.3, 4.6],
          y: [-1.5, 4.5],
          functions: [{ expr: 'x^2 - 4x + 3', label: '$y = f(t)$' }],
          areas: [{ expr: 'x^2 - 4x + 3', from: 'a', to: 'a + h', color: 'orange' }],
          points: [{ x: 'a', y: 'a^2 - 4a + 3', label: '(x, f(x))' }],
          sliders: [
            { name: 'a', min: 0, max: 3.8, step: 0.05, value: 3.4, label: '$x$' },
            { name: 'h', min: 0.01, max: 0.8, step: 0.01, value: 0.6, label: '$h$' },
          ],
          readouts: [
            { label: '$\\frac{g(x+h) - g(x)}{h} =$', expr: '((a+h)^3/3 - 2(a+h)^2 + 3(a+h) - (a^3/3 - 2a^2 + 3a))/h', digits: 4 },
            { label: '$f(x) =$', expr: 'a^2 - 4a + 3', digits: 4 },
          ],
          caption: 'The orange sliver has area $g(x + h) - g(x)$. Divide by its width $h$ to get its average height. Shrink $h$: the average height closes in on $f(x)$.',
        },
        {
          type: 'derivation',
          title: 'Proof sketch of Part 1',
          steps: [
            { tex: '\\frac{g(x+h) - g(x)}{h} = \\frac{1}{h}\\int_x^{x+h} f(t)\\,dt', why: 'Additivity: $\\int_a^{x+h} f - \\int_a^x f = \\int_x^{x+h} f$. (Take $h > 0$; $h < 0$ is similar.)' },
            { tex: 'm_h \\cdot h \\le \\int_x^{x+h} f(t)\\,dt \\le M_h \\cdot h', why: 'Let $m_h$ and $M_h$ be the minimum and maximum of $f$ on $[x, x+h]$ — they exist by the [[extreme-value-theorem]] since $f$ is continuous. Then apply the bounds property of integrals.' },
            { tex: 'm_h \\le \\frac{g(x+h) - g(x)}{h} \\le M_h', why: 'Divide through by $h > 0$.' },
            { tex: 'm_h \\to f(x), \\quad M_h \\to f(x) \\quad \\text{as } h \\to 0', why: 'Both are values of $f$ at points in $[x, x+h]$, which shrinks to $x$; continuity of $f$ makes those values approach $f(x)$.' },
            { tex: 'g\'(x) = \\lim_{h \\to 0} \\frac{g(x+h) - g(x)}{h} = f(x)', why: 'The [[squeeze-theorem]]: the difference quotient is trapped between two quantities that both tend to $f(x)$.' },
          ],
          result: 'Area accumulates at a rate equal to the height of the curve: $g\' = f$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why continuity is required',
          text: 'The squeeze step needs $m_h$ and $M_h$ to approach $f(x)$. If $f$ jumps at $x$, the thin sliver\'s average height approaches a one-sided value of $f$, not $f(x)$, and $g$ has a corner there instead of a derivative.',
        },
        {
          type: 'derivation',
          title: 'Examples',
          steps: [
            { tex: '\\frac{d}{dx}\\int_1^x \\sqrt{1 + t^3}\\,dt = \\sqrt{1 + x^3}', why: 'The integrand is continuous, so Part 1 applies directly: replace $t$ by $x$. No antiderivative needed — which is lucky, because $\\sqrt{1 + t^3}$ has no elementary one.' },
            { tex: '\\frac{d}{dx}\\int_x^5 \\cos(t^2)\\,dt = \\frac{d}{dx}\\left(-\\int_5^x \\cos(t^2)\\,dt\\right) = -\\cos(x^2)', why: 'The variable is in the **lower** limit. Reverse the limits (flipping the sign) to put it on top, then apply Part 1.' },
          ],
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'Let $g(x) = \\displaystyle\\int_0^x (t^3 + 1)\\,dt$. Find $g\'(2)$.',
      hint: 'You do not need to integrate. Part 1 says $g\'(x)$ is the integrand evaluated at $x$.',
      label: '$g\'(2) =$',
      answer: '9',
      explanation: 'By FTC Part 1, $g\'(x) = x^3 + 1$, so $g\'(2) = 8 + 1 = 9$. (You could also integrate first: $g(x) = \\frac{x^4}{4} + x$, so $g\'(x) = x^3 + 1$ — the same thing, with more work.)',
    },
    {
      kind: 'concept',
      title: 'Variable limits and the chain rule',
      blocks: [
        {
          type: 'p',
          text: 'What if the upper limit is not plain $x$ but a function of $x$, like $x^3$? Then $\\int_a^{x^3} f(t)\\,dt = g(x^3)$ is a **composition** of the accumulation function $g$ with $u = x^3$, and the [[chain-rule]] applies.',
        },
        {
          type: 'theorem',
          name: 'FTC Part 1 with the chain rule',
          tex: '\\frac{d}{dx}\\int_a^{u(x)} f(t)\\,dt = f\\big(u(x)\\big)\\cdot u\'(x)',
        },
        {
          type: 'derivation',
          title: 'Find $\\dfrac{d}{dx}\\displaystyle\\int_0^{x^3} \\sin(t^2)\\,dt$',
          steps: [
            { tex: 'g(u) = \\int_0^{u} \\sin(t^2)\\,dt, \\quad u = x^3', why: 'Name the outer function (the accumulation function) and the inner function (the upper limit).' },
            { tex: '\\frac{d}{dx}\\,g(u) = g\'(u)\\cdot\\frac{du}{dx}', why: 'Chain rule.' },
            { tex: '= \\sin(u^2)\\cdot 3x^2', why: 'FTC Part 1 gives $g\'(u) = \\sin(u^2)$; and $\\frac{du}{dx} = 3x^2$.' },
            { tex: '= 3x^2\\sin(x^6)', why: 'Substitute $u = x^3$ back: $u^2 = (x^3)^2 = x^6$.' },
          ],
          result: '$\\frac{d}{dx}\\int_0^{x^3}\\sin(t^2)\\,dt = 3x^2\\sin(x^6)$.',
        },
        {
          type: 'compare',
          left: {
            title: 'Forgetting the chain rule',
            tone: 'bad',
            tex: ['\\frac{d}{dx}\\int_0^{x^3}\\sin(t^2)\\,dt = \\sin(x^6)'],
          },
          right: {
            title: 'Plug in the limit, then multiply by its derivative',
            tone: 'good',
            tex: ['\\frac{d}{dx}\\int_0^{x^3}\\sin(t^2)\\,dt = \\sin(x^6)\\cdot 3x^2'],
          },
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'A favourite exam twist puts functions in **both** limits: split at a constant first. For example $\\int_{x}^{x^2} f(t)\\,dt = \\int_{0}^{x^2} f(t)\\,dt - \\int_{0}^{x} f(t)\\,dt$, so its derivative is $f(x^2)\\cdot 2x - f(x)$ (provided $f$ is continuous on an interval containing $0$ and the limits).',
        },
      ],
    },
    {
      kind: 'expr',
      prompt: 'Find $\\dfrac{d}{dx}\\displaystyle\\int_0^{x^2} \\sqrt{1 + t^3}\\,dt$.',
      label: '$\\dfrac{d}{dx}\\displaystyle\\int_0^{x^2}\\sqrt{1+t^3}\\,dt =$',
      answer: '2x sqrt(1 + x^6)',
      answerTex: '2x\\sqrt{1 + x^6}',
      hint: 'Substitute the upper limit $x^2$ for $t$ in the integrand, then multiply by the derivative of $x^2$.',
      explanation: 'With $u = x^2$: $\\frac{d}{dx}\\int_0^{u}\\sqrt{1+t^3}\\,dt = \\sqrt{1 + u^3}\\cdot u\'(x) = \\sqrt{1 + (x^2)^3}\\cdot 2x = 2x\\sqrt{1 + x^6}$. Forgetting the factor $2x$ is the classic mistake.',
    },
    {
      kind: 'concept',
      title: 'FTC Part 2: evaluating integrals',
      blocks: [
        {
          type: 'p',
          text: 'Part 1 says accumulation functions are antiderivatives. Part 2 cashes that in: to compute a definite integral, you never need another Riemann sum. Find **any** antiderivative and subtract.',
        },
        {
          type: 'theorem',
          name: 'Fundamental Theorem of Calculus, Part 2',
          text: 'If $f$ is continuous on $[a, b]$ and $F$ is any antiderivative of $f$ on $[a, b]$, then\n\n$$\\int_a^b f(x)\\,dx = F(b) - F(a) = F(x)\\Big|_a^b.$$',
        },
        {
          type: 'derivation',
          title: 'Why Part 2 follows from Part 1',
          steps: [
            { tex: 'g(x) = \\int_a^x f(t)\\,dt \\text{ satisfies } g\' = f', why: 'FTC Part 1: $g$ is an antiderivative of $f$.' },
            { tex: 'F(x) = g(x) + C \\text{ for some constant } C', why: 'Any two antiderivatives on an interval differ by a constant (Mean Value Theorem).' },
            { tex: 'F(b) - F(a) = \\big(g(b) + C\\big) - \\big(g(a) + C\\big) = g(b) - g(a)', why: 'The constant cancels — which is why *any* antiderivative works and no $+C$ is needed.' },
            { tex: '= \\int_a^b f(t)\\,dt - \\int_a^a f(t)\\,dt = \\int_a^b f(t)\\,dt - 0', why: 'Use the definition of $g$; an integral over zero width is $0$.' },
          ],
          result: 'So $\\int_a^b f(x)\\,dx = F(b) - F(a)$.',
        },
        {
          type: 'derivation',
          title: 'Evaluate $\\displaystyle\\int_0^2 x^2\\,dx$ — the area from two lessons ago',
          steps: [
            { tex: 'F(x) = \\frac{x^3}{3}', why: 'Any antiderivative of $x^2$ will do; choose $C = 0$.' },
            { tex: '\\int_0^2 x^2\\,dx = \\frac{x^3}{3}\\Big|_0^2 = \\frac{2^3}{3} - \\frac{0^3}{3}', why: 'Evaluate at the upper limit, then subtract the value at the lower limit.' },
            { tex: '= \\frac{8}{3}', why: 'The same answer the limit of Riemann sums gave — in one line instead of a page.' },
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Upper minus lower, with brackets',
          text: 'Always compute $F(b) - F(a)$ — top first — and put $F(a)$ in parentheses: when $F(a)$ has several terms, the minus sign applies to all of them. Most lost points on FTC problems are sign slips at exactly this step.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'Evaluate $\\displaystyle\\int_1^4 \\left(3\\sqrt{x} - 2\\right)dx$.',
      hint: 'Write $3\\sqrt{x} = 3x^{1/2}$. An antiderivative is $2x^{3/2} - 2x$.',
      answer: '8',
      explanation: '$F(x) = 3\\cdot\\frac{x^{3/2}}{3/2} - 2x = 2x^{3/2} - 2x$. Then $F(4) = 2\\cdot 8 - 8 = 8$ (since $4^{3/2} = 8$) and $F(1) = 2 - 2 = 0$. So the integral is $8 - 0 = 8$.',
    },
    {
      kind: 'numeric',
      prompt: 'Evaluate $\\displaystyle\\int_0^{\\pi} \\sin x\\,dx$.',
      hint: 'An antiderivative of $\\sin x$ is $-\\cos x$. Be careful with the signs when you subtract.',
      answer: '2',
      explanation: '$\\int_0^{\\pi}\\sin x\\,dx = -\\cos x\\Big|_0^{\\pi} = (-\\cos\\pi) - (-\\cos 0) = (-(-1)) - (-1) = 1 + 1 = 2$. One arch of the sine curve has area exactly $2$ — a number Riemann sums could only approximate.',
    },
    {
      kind: 'concept',
      title: 'More examples, and when the theorem fails',
      blocks: [
        {
          type: 'table',
          headers: ['Integral', 'Antiderivative', 'Value'],
          rows: [
            ['$\\int_1^e \\frac{1}{x}\\,dx$', '$\\ln|x|$', '$\\ln e - \\ln 1 = 1$'],
            ['$\\int_0^{\\pi/4} \\sec^2 x\\,dx$', '$\\tan x$', '$\\tan\\frac{\\pi}{4} - \\tan 0 = 1$'],
            ['$\\int_0^1 \\frac{1}{1 + x^2}\\,dx$', '$\\arctan x$', '$\\arctan 1 - \\arctan 0 = \\frac{\\pi}{4}$'],
            ['$\\int_{-1}^{2} (x^3 - 2x)\\,dx$', '$\\frac{x^4}{4} - x^2$', '$(4 - 4) - \\left(\\frac{1}{4} - 1\\right) = \\frac{3}{4}$'],
          ],
          caption: 'Each line is one antiderivative from the table and one subtraction. Notice the parentheses around $F(a)$ in the last row.',
        },
        {
          type: 'p',
          text: 'The hypothesis "$f$ continuous on $[a, b]$" is not decoration. Consider $\\int_{-1}^{1}\\frac{1}{x^2}\\,dx$. The integrand is positive everywhere it is defined, so any sensible "area" would be positive. Yet blindly applying Part 2 with $F(x) = -\\frac{1}{x}$ gives $\\left(-1\\right) - \\left(1\\right) = -2$.',
        },
        {
          type: 'graph',
          x: [-2, 2],
          y: [-1, 8],
          functions: [{ expr: '1/x^2', label: '$y = \\frac{1}{x^2}$' }],
          vlines: [{ x: 0, label: 'x = 0' }],
          caption: '$\\frac{1}{x^2}$ has an infinite discontinuity at $x = 0$, inside $[-1, 1]$. It is not continuous there (not even bounded), so neither part of the theorem applies — and the region turns out to have infinite area.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Check continuity before you subtract',
          text: 'Before using $F(b) - F(a)$, make sure the integrand has no vertical asymptote or other discontinuity in $[a, b]$. Integrals across such points are **improper integrals**, which you will learn to handle in Calculus II.',
        },
        {
          type: 'callout',
          variant: 'tip',
          text: 'Sanity-check the sign. If $f \\ge 0$ on $[a, b]$ (with $a < b$), the integral must be $\\ge 0$. A negative answer for a positive integrand means a broken hypothesis or a sign slip.',
        },
      ],
    },
    {
      kind: 'error',
      prompt: 'A student evaluates $\\displaystyle\\int_{-1}^{1} \\frac{1}{x^2}\\,dx$. Tap the first line that is wrong.',
      lines: [
        'An antiderivative of $x^{-2}$ is $-x^{-1} = -\\dfrac{1}{x}$.',
        'By FTC Part 2, $\\displaystyle\\int_{-1}^{1} \\frac{1}{x^2}\\,dx = -\\frac{1}{x}\\Big|_{-1}^{1}$.',
        '$= \\left(-\\dfrac{1}{1}\\right) - \\left(-\\dfrac{1}{-1}\\right)$',
        '$= -1 - 1 = -2$',
      ],
      errorLines: [2],
      explanation: 'Line 1 is correct: $\\frac{d}{dx}\\left(-\\frac{1}{x}\\right) = \\frac{1}{x^2}$. The mistake is line 2: FTC Part 2 requires $f$ to be continuous on $[-1, 1]$, but $\\frac{1}{x^2}$ blows up at $x = 0$. The theorem simply does not apply. A positive integrand producing $-2$ is the red flag. (In fact this improper integral diverges: the area is infinite.)',
    },
    {
      kind: 'concept',
      title: 'The big picture',
      blocks: [
        {
          type: 'p',
          text: 'Together the two parts say that **differentiation and integration are inverse processes**:',
        },
        {
          type: 'table',
          headers: ['Part', 'Statement', 'In words'],
          rows: [
            ['Part 1', '$\\dfrac{d}{dx}\\displaystyle\\int_a^x f(t)\\,dt = f(x)$', 'Integrate, then differentiate: you get back where you started.'],
            ['Part 2', '$\\displaystyle\\int_a^b F\'(x)\\,dx = F(b) - F(a)$', 'Differentiate, then integrate: you get back the net change in $F$.'],
          ],
        },
        {
          type: 'p',
          text: 'Part 2, written with $F\'$ in place of $f$, has a lovely reading: **integrating a rate of change gives the total change**. Integrate velocity and you get displacement; integrate the rate water flows into a tank and you get how much the volume changed. The next unit builds on exactly this idea (the [[net-change-theorem]]).',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Why games still use Riemann sums',
          text: 'FTC Part 2 needs a formula for the antiderivative. A game rarely has one: the player\'s velocity depends on input, collisions and drag, frame by frame. So engines accumulate `position += velocity * dt` — a Riemann sum of the velocity — and FTC is the guarantee that this running total converges to the true position as `dt` shrinks. When a formula *is* available (constant gravity, a fixed easing curve), using $F(b) - F(a)$ directly is exact and frame-rate independent.',
        },
        {
          type: 'callout',
          variant: 'history',
          text: 'Isaac Barrow, Newton\'s teacher, saw a geometric version of the connection around 1670. Newton and Leibniz independently turned it into a systematic method, which is why they are credited with inventing calculus. Before them, every area was its own hard problem; afterwards, most became a routine calculation.',
        },
      ],
    },
    {
      kind: 'truefalse',
      prompt: 'Every continuous function on an interval has an antiderivative there — even one like $e^{-x^2}$ whose antiderivative cannot be written with elementary functions.',
      answer: true,
      explanation: 'FTC Part 1 builds one explicitly: $g(x) = \\int_0^x e^{-t^2}\\,dt$ satisfies $g\'(x) = e^{-x^2}$. It simply cannot be expressed using polynomials, roots, exponentials, logs and trig functions. Functions defined this way are common in practice — this one, suitably scaled, is the "error function" behind the bell curve in statistics.',
    },
    {
      kind: 'order',
      prompt: 'Put the steps for evaluating $\\displaystyle\\int_{-1}^{2} (x^3 - 2x)\\,dx$ in order.',
      lines: [
        'Check that $x^3 - 2x$ is continuous on $[-1, 2]$',
        'Find an antiderivative: $F(x) = \\frac{x^4}{4} - x^2$',
        'Compute $F(2) = 4 - 4 = 0$',
        'Compute $F(-1) = \\frac{1}{4} - 1 = -\\frac{3}{4}$',
        'Subtract: $F(2) - F(-1) = 0 - \\left(-\\frac{3}{4}\\right) = \\frac{3}{4}$',
      ],
      distractors: ['Add $+\\,C$ to $F(x)$ and solve for $C$'],
      explanation: 'Confirm the hypothesis, find any antiderivative, evaluate it at both limits, and subtract upper minus lower. No $+C$ is needed: it would cancel in $F(b) - F(a)$, so there is nothing to solve for. The parentheses around $F(-1)$ turn $0 - (-\\frac{3}{4})$ into $+\\frac{3}{4}$.',
    },
  ],
  takeaways: [
    'An accumulation function $g(x) = \\int_a^x f(t)\\,dt$ measures net area so far; it rises where $f > 0$ and falls where $f < 0$.',
    'FTC Part 1: if $f$ is continuous, $\\frac{d}{dx}\\int_a^x f(t)\\,dt = f(x)$. With a variable limit $u(x)$, multiply by $u\'(x)$ (chain rule).',
    'Part 1 is true because the sliver of area from $x$ to $x + h$ is about $f(x)\\cdot h$; the squeeze theorem makes this exact.',
    'FTC Part 2: if $f$ is continuous on $[a, b]$ and $F\' = f$, then $\\int_a^b f(x)\\,dx = F(b) - F(a)$. Any antiderivative works; the $C$ cancels.',
    'The theorem needs continuity on the whole interval — check for vertical asymptotes before subtracting.',
  ],
  reading: [
    {
      title: 'OpenStax Calculus Volume 1 — 5.3 The Fundamental Theorem of Calculus',
      url: 'https://openstax.org/books/calculus-volume-1/pages/5-3-the-fundamental-theorem-of-calculus',
      source: 'openstax',
      note: 'Both parts with full proofs, plus many evaluation and variable-limit examples.',
    },
    {
      title: "Paul's Online Notes — Computing Definite Integrals",
      url: 'https://tutorial.math.lamar.edu/Classes/CalcI/ComputingDefiniteIntegrals.aspx',
      source: 'paul',
      note: 'Lots of practice applying Part 2, including piecewise and absolute-value integrands.',
    },
    {
      title: '3Blue1Brown — Integration and the fundamental theorem of calculus',
      url: 'https://www.youtube.com/watch?v=rfG8ce4nNh0',
      source: 'video',
      note: 'An animated explanation of why the area under a curve is connected to antiderivatives.',
    },
  ],
};
