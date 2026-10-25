import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'calc1-linear-approximation',
  title: 'Linear Approximation and Differentials',
  summary: 'Zoom in on any smooth curve and it looks like its tangent line. Use that line to estimate values, measure the error, and propagate measurement uncertainty.',
  minutes: 18,
  objectives: [
    'Explain local linearity: why a differentiable curve looks straight when you zoom in',
    'Write the linearization $L(x) = f(a) + f\'(a)(x - a)$ and use it to estimate function values',
    'Predict whether a tangent-line estimate is too high or too low and how the error shrinks',
    'Use the standard small-$x$ approximations such as $\\sin x \\approx x$ and $(1 + x)^k \\approx 1 + kx$',
    'Compute differentials $dy = f\'(x)\\,dx$ and use them to estimate propagated error',
  ],
  steps: [
    {
      kind: 'concept',
      title: 'Zoom in: every smooth curve is nearly straight',
      blocks: [
        {
          type: 'p',
          text: 'Earth is round, yet your street looks flat. That is because you only see a tiny piece of it. The same thing happens with the graph of any [[differentiable]] function: zoom in far enough on one point and the curve becomes almost indistinguishable from a straight line — its [[tangent-line]].',
        },
        {
          type: 'p',
          text: 'The graph below zooms in on $y = \\sqrt{x}$ around the point $(4, 2)$. The slider $w$ is the half-width of the viewing window: the picture shows $x$ from $4 - w$ to $4 + w$, rescaled so the window always looks the same size. Both axes are scaled by the same factor, so slopes are not distorted.',
        },
        {
          type: 'graph',
          x: [-1, 1],
          y: [-0.6, 0.6],
          functions: [
            { expr: '(sqrt(4 + w*x) - 2)/w', label: '$y = \\sqrt{x}$ (zoomed)' },
            { expr: 'x/4', label: 'tangent line, slope $\\frac{1}{4}$', color: 'orange', dashed: true },
          ],
          points: [{ x: 0, y: 0, label: '(4, 2)' }],
          sliders: [{ name: 'w', min: 0.05, max: 4, step: 0.05, value: 4, label: 'window half-width $w$' }],
          readouts: [{ label: 'gap at the right edge, as a fraction of the window:', expr: '1/4 - (sqrt(4 + w) - 2)/w', digits: 4 }],
          caption: 'Drag $w$ down from $4$ toward $0$. The curve straightens onto the tangent line; the visible gap shrinks roughly in proportion to $w$.',
        },
        {
          type: 'p',
          text: 'This property is called **[[local-linearity|local linearity]]**, and it is the practical meaning of "differentiable at $a$": near $a$, the function behaves like a line with slope $f\'(a)$. Corners, like $|x|$ at $0$, never straighten out no matter how far you zoom — which is exactly why they have no derivative.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why this is useful',
          text: 'Lines are the easiest functions there are: one multiplication and one addition. If a complicated function is nearly a line near a point you know well, you can estimate its nearby values with grade-school arithmetic. Before calculators, this is how tables of square roots and logarithms were filled in, and modern numerical code still leans on it constantly.',
        },
      ],
    },
    {
      kind: 'concept',
      title: 'The linearization $L(x)$',
      blocks: [
        {
          type: 'p',
          text: 'The tangent line at $x = a$ passes through $(a, f(a))$ with slope $f\'(a)$. Written as a function, it is called the [[linearization]] of $f$ at $a$. Using it to estimate $f(x)$ for $x$ near $a$ is called [[linear-approximation]] (or the tangent-line approximation).',
        },
        {
          type: 'definition',
          term: 'Linearization',
          text: 'If $f$ is differentiable at $a$, the **linearization of $f$ at $a$** is\n\n$$L(x) = f(a) + f\'(a)(x - a).$$\n\nFor $x$ near $a$, $f(x) \\approx L(x)$. The point $a$ is called the *center*; choose it where $f(a)$ and $f\'(a)$ are easy to compute.',
        },
        {
          type: 'derivation',
          title: 'Estimate $\\sqrt{4.1}$ without a calculator',
          steps: [
            { tex: 'f(x) = \\sqrt{x}, \\quad a = 4', why: 'Pick a center near $4.1$ where the square root is known exactly: $\\sqrt{4} = 2$.' },
            { tex: "f'(x) = \\frac{1}{2\\sqrt{x}} \\implies f'(4) = \\frac{1}{4}", why: 'Power rule: $\\frac{d}{dx}x^{1/2} = \\frac{1}{2}x^{-1/2}$.' },
            { tex: 'L(x) = 2 + \\tfrac{1}{4}(x - 4)', why: 'Plug $f(4) = 2$ and $f\'(4) = \\frac{1}{4}$ into $L(x) = f(a) + f\'(a)(x - a)$.' },
            { tex: '\\sqrt{4.1} \\approx L(4.1) = 2 + \\tfrac{1}{4}(0.1) = 2.025', why: 'Evaluate the line, not the curve: the step $x - a = 0.1$ times the slope $\\frac{1}{4}$ is the estimated rise.' },
          ],
          result: 'The estimate is $2.025$; the true value is $\\sqrt{4.1} = 2.024846\\ldots$, an error of only about $0.00015$.',
        },
        {
          type: 'p',
          text: 'Read the formula as a sentence: **new value ≈ known value + slope × step**. The known value $f(a)$ is your starting height; $f\'(a)$ says how fast the height changes per unit of $x$; multiplying by the step $x - a$ predicts the change.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'You have already used this in a game loop',
          text: 'Euler integration, `pos += vel * dt;`, is linear approximation of the position function: new position ≈ old position + (rate of change) × (time step). It is accurate when `dt` is small, which is why physics engines often run at a fixed, small time step and why large frame hitches can make objects tunnel through walls.',
        },
      ],
    },
    {
      kind: 'fill',
      prompt: 'Complete the linearization of $f$ at $x = a$.',
      template: '$L(x) =$ ___ $+$ ___ $\\cdot (x - a)$',
      blanks: [{ answers: ['$f(a)$'] }, { answers: ["$f'(a)$"] }],
      wordBank: ['$f(a)$', "$f'(a)$", '$f(x)$', "$f'(x)$", '$a$'],
      explanation: 'Both ingredients are evaluated at the **center** $a$, where everything is known: the height $f(a)$ and the slope $f\'(a)$. Only the step $(x - a)$ involves the new input. Using $f(x)$ or $f\'(x)$ would require knowing the very value you are trying to estimate.',
    },
    {
      kind: 'expr',
      prompt: 'Find the linearization of $f(x) = \\sqrt{x}$ at $a = 9$.',
      hint: '$f(9) = 3$ and $f\'(x) = \\frac{1}{2\\sqrt{x}}$, so $f\'(9) = \\frac{1}{6}$.',
      label: '$L(x) =$',
      answer: '3 + (x - 9)/6',
      answerTex: '3 + \\tfrac{1}{6}(x - 9)',
      explanation: 'With $f(9) = \\sqrt{9} = 3$ and $f\'(9) = \\frac{1}{2 \\cdot 3} = \\frac{1}{6}$, the linearization is $L(x) = 3 + \\frac{1}{6}(x - 9)$, equivalently $\\frac{x}{6} + \\frac{3}{2}$. For example $\\sqrt{10} \\approx L(10) = 3.1\\overline{6}$, close to the true $3.1623$.',
    },
    {
      kind: 'concept',
      title: 'How big is the error — and which way?',
      blocks: [
        {
          type: 'p',
          text: 'An approximation is only useful if you know how good it is. Slide the point below away from the center $a = 4$ and watch the gap between the curve $\\sqrt{x}$ and its linearization.',
        },
        {
          type: 'graph',
          x: [0, 10],
          y: [0, 4.5],
          functions: [
            { expr: 'sqrt(x)', label: '$y = \\sqrt{x}$' },
            { expr: '2 + (x - 4)/4', label: '$L(x) = 2 + \\frac{1}{4}(x - 4)$', color: 'orange', dashed: true },
          ],
          points: [
            { x: 4, y: 2, label: '(4, 2)' },
            { x: 'b', y: 'sqrt(b)', color: 'blue' },
            { x: 'b', y: '2 + (b - 4)/4', color: 'orange' },
          ],
          segments: [{ from: ['b', 'sqrt(b)'], to: ['b', '2 + (b - 4)/4'], color: 'red' }],
          sliders: [{ name: 'b', min: 0.2, max: 9.8, step: 0.05, value: 6, label: '$x$' }],
          readouts: [
            { label: '$\\sqrt{x} =$', expr: 'sqrt(b)', digits: 5 },
            { label: '$L(x) =$', expr: '2 + (b - 4)/4', digits: 5 },
            { label: 'error $L(x) - \\sqrt{x} =$', expr: '2 + (b - 4)/4 - sqrt(b)', digits: 5 },
          ],
          caption: 'The orange line sits **above** the curve on both sides: every estimate is a little too big. The red gap grows quickly as you move away from $4$.',
        },
        {
          type: 'table',
          headers: ['step $\\Delta x = x - 4$', 'error $L(x) - \\sqrt{x}$', 'error $\\div (\\Delta x)^2$'],
          rows: [
            ['$1$', '$0.013932$', '$0.01393$'],
            ['$0.1$', '$0.00015433$', '$0.01543$'],
            ['$0.01$', '$0.0000015605$', '$0.01561$'],
          ],
          caption: 'Shrinking the step by $10$ shrinks the error by about $100$. The last column settles near $\\frac{1}{64} = 0.015625$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the error behaves like $(\\Delta x)^2$',
          text: 'Over the step, the curve\'s *average* slope differs from the tangent slope $f\'(a)$ because the slope itself is changing — and by an amount roughly proportional to the step. A slope error proportional to $\\Delta x$, accumulated over a run of length $\\Delta x$, gives a height error proportional to $(\\Delta x)^2$. That is why halving the step cuts the error to about a quarter.',
        },
        {
          type: 'p',
          text: '**Which direction?** If the graph bends upward near $a$ (like $x^2$ or $e^x$ — [[concavity|concave up]], $f\'\' > 0$), the tangent line lies **below** the curve, so $L(x)$ underestimates. If it bends downward (like $\\sqrt{x}$ or $\\ln x$ — concave down, $f\'\' < 0$), the tangent lies **above**, so $L(x)$ overestimates.',
        },
        {
          type: 'deepdive',
          title: 'A guaranteed error bound',
          blocks: [
            {
              type: 'p',
              text: 'If $|f\'\'(t)| \\le M$ for every $t$ between $a$ and $x$, then the error satisfies',
            },
            { type: 'math', tex: '|f(x) - L(x)| \\le \\frac{M}{2}(x - a)^2.' },
            {
              type: 'p',
              text: 'For $\\sqrt{x}$, $f\'\'(x) = -\\frac{1}{4}x^{-3/2}$, which on $[4, 4.1]$ is at most $\\frac{1}{4} \\cdot \\frac{1}{8} = \\frac{1}{32}$ in size. So the error in $\\sqrt{4.1} \\approx 2.025$ is at most $\\frac{1}{64}(0.1)^2 \\approx 0.000156$ — and indeed the actual error is $0.000154$. In Calculus II this becomes Taylor\'s inequality, which bounds the error of higher-degree approximations too.',
            },
          ],
        },
      ],
    },
    {
      kind: 'mcq',
      prompt: 'Using the tangent line to $y = e^x$ at $x = 0$, you estimate $e^{0.1} \\approx 1.1$. How does this estimate compare with the true value?',
      options: [
        {
          text: 'It is an underestimate',
          correct: true,
          why: '$e^x$ bends upward everywhere ($f\'\'(x) = e^x > 0$), so its tangent lines lie below the graph. Indeed $e^{0.1} = 1.10517\\ldots > 1.1$.',
        },
        {
          text: 'It is an overestimate',
          why: 'That would happen for a curve that bends downward, like $\\sqrt{x}$ or $\\ln x$. The exponential bends upward.',
        },
        {
          text: 'It is exact, because $e^x$ is its own derivative',
          why: '$f\' = f$ tells you the slope at $0$ is $1$, giving $L(x) = 1 + x$, but $e^x$ is not a line, so $L(0.1)$ cannot equal $e^{0.1}$ exactly.',
        },
        {
          text: 'You cannot tell without a calculator',
          why: 'The shape of the graph decides it: a curve that bends upward always lies above its tangent lines.',
        },
      ],
      explanation: 'The linearization of $e^x$ at $0$ is $L(x) = e^0 + e^0(x - 0) = 1 + x$, so $e^{0.1} \\approx 1.1$. Because the graph of $e^x$ is concave up, it curves away *above* the tangent line, making the estimate a little low (the true value is about $1.10517$).',
    },
    {
      kind: 'numeric',
      prompt: 'Use the linearization of $f(x) = \\sqrt[3]{x}$ at $a = 8$ to estimate $\\sqrt[3]{8.3}$.',
      hint: '$f(8) = 2$. With $f(x) = x^{1/3}$, $f\'(x) = \\frac{1}{3}x^{-2/3}$, so $f\'(8) = \\frac{1}{3} \\cdot \\frac{1}{4} = \\frac{1}{12}$.',
      label: '$\\sqrt[3]{8.3} \\approx$',
      answer: '2.025',
      tolerance: 0.0001,
      explanation: '$L(x) = 2 + \\frac{1}{12}(x - 8)$, so $L(8.3) = 2 + \\frac{0.3}{12} = 2 + 0.025 = 2.025$. The true value is $2.02469\\ldots$; the estimate is slightly high because $\\sqrt[3]{x}$ is concave down for $x > 0$.',
    },
    {
      kind: 'concept',
      title: 'Approximations worth memorising',
      blocks: [
        {
          type: 'p',
          text: 'Centering at $a = 0$ produces a handful of approximations used everywhere in physics, engineering and graphics. Each is just $L(x) = f(0) + f\'(0)\\,x$.',
        },
        {
          type: 'table',
          headers: ['function', '$f(0)$', '$f\'(0)$', 'for small $x$'],
          rows: [
            ['$\\sin x$', '$0$', '$1$', '$\\sin x \\approx x$'],
            ['$\\cos x$', '$1$', '$0$', '$\\cos x \\approx 1$'],
            ['$\\tan x$', '$0$', '$1$', '$\\tan x \\approx x$'],
            ['$e^x$', '$1$', '$1$', '$e^x \\approx 1 + x$'],
            ['$\\ln(1 + x)$', '$0$', '$1$', '$\\ln(1 + x) \\approx x$'],
            ['$(1 + x)^k$', '$1$', '$k$', '$(1 + x)^k \\approx 1 + kx$'],
          ],
          caption: 'Trig approximations require $x$ in **radians** — the derivative of $\\sin x$ is $\\cos x$ only in radians.',
        },
        {
          type: 'derivation',
          title: 'Derive $(1 + x)^k \\approx 1 + kx$',
          steps: [
            { tex: 'f(x) = (1 + x)^k, \\quad f(0) = 1', why: 'Any real power $k$; at $x = 0$ the base is $1$ and $1^k = 1$.' },
            { tex: "f'(x) = k(1 + x)^{k - 1} \\implies f'(0) = k", why: 'Power rule with the chain rule (the inside $1 + x$ has derivative $1$).' },
            { tex: 'L(x) = 1 + kx', why: 'Linearization at $0$: $f(0) + f\'(0)\\,x$.' },
            { tex: '\\sqrt{1.06} = (1 + 0.06)^{1/2} \\approx 1 + \\tfrac{1}{2}(0.06) = 1.03', why: 'Example with $k = \\frac{1}{2}$ and $x = 0.06$. The true value is $1.029563\\ldots$' },
          ],
          result: 'One formula covers square roots ($k = \\frac{1}{2}$), reciprocals ($k = -1$) and every other power, as long as $x$ is small.',
        },
        {
          type: 'graph',
          x: [-2.5, 2.5],
          y: [-2, 2],
          functions: [
            { expr: 'sin(x)', label: '$y = \\sin x$' },
            { expr: 'x', label: '$y = x$', color: 'orange', dashed: true },
          ],
          caption: 'Near $0$ the sine curve and the line $y = x$ overlap; by $x = 1$ they visibly separate ($\\sin 1 \\approx 0.841$).',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'The small-angle approximation in games',
          text: 'A swinging pendulum or a wobbling camera obeys $\\theta\'\' = -\\frac{g}{L}\\sin\\theta$. Replacing $\\sin\\theta$ by $\\theta$ for small swings turns it into simple harmonic motion with a closed-form solution, $\\theta(t) = \\theta_0\\cos\\left(\\sqrt{g/L}\\,t\\right)$ — cheap to evaluate every frame. Likewise $\\cos\\theta \\approx 1$ lets small rotations be applied as $x\' \\approx x - \\theta y$, $y\' \\approx y + \\theta x$.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'Use $(1 + x)^k \\approx 1 + kx$ to estimate $(1.02)^{10}$.',
      hint: 'Here $x = 0.02$ and $k = 10$.',
      answer: '1.2',
      tolerance: 0.0005,
      explanation: '$(1.02)^{10} \\approx 1 + 10(0.02) = 1.2$. The true value is $1.21899\\ldots$, so this estimate is off by about $0.019$ — much worse than the $\\sqrt{4.1}$ example, because the effective step $kx = 0.2$ is not that small. (Financially: $2\\%$ compounded $10$ times is more than $20\\%$; the linear estimate ignores interest on interest.)',
    },
    {
      kind: 'error',
      prompt: 'A student estimates $\\frac{1}{2.1}$ using the linearization of $f(x) = \\frac{1}{x}$ at $a = 2$. Tap the first wrong line.',
      lines: [
        '$f(2) = \\frac{1}{2}$',
        '$f\'(x) = \\frac{1}{x^2}$, so $f\'(2) = \\frac{1}{4}$',
        '$L(x) = \\frac{1}{2} + \\frac{1}{4}(x - 2)$',
        '$\\frac{1}{2.1} \\approx L(2.1) = 0.5 + 0.025 = 0.525$',
      ],
      errorLines: [2],
      explanation: 'The derivative of $x^{-1}$ is $-x^{-2} = -\\frac{1}{x^2}$; the minus sign was dropped. So $f\'(2) = -\\frac{1}{4}$, $L(x) = \\frac{1}{2} - \\frac{1}{4}(x - 2)$ and $\\frac{1}{2.1} \\approx 0.5 - 0.025 = 0.475$ (true value $0.47619\\ldots$). Sanity check that would have caught it: $\\frac{1}{x}$ *decreases*, so $\\frac{1}{2.1}$ must be less than $\\frac{1}{2}$.',
    },
    {
      kind: 'concept',
      title: 'Differentials: $dy$ versus $\\Delta y$',
      blocks: [
        {
          type: 'p',
          text: 'Linear approximation is often written in the language of [[differential|differentials]], which gives a precise meaning to the $dx$ and $dy$ in [[leibniz-notation]]. Think of $dx$ as a small change in input that you choose. Two different "changes in output" then go with it:',
        },
        {
          type: 'definition',
          term: 'Differentials',
          text: 'Let $y = f(x)$ be differentiable. For a change $dx$ (also written $\\Delta x$) in $x$:\n\n- the **actual change** is $\\Delta y = f(x + dx) - f(x)$, the rise along the **curve**;\n- the **differential** is $dy = f\'(x)\\,dx$, the rise along the **tangent line**.\n\nFor small $dx$, $\\Delta y \\approx dy$.',
        },
        {
          type: 'graph',
          x: [0, 3],
          y: [0, 7],
          functions: [
            { expr: 'x^2', label: '$y = x^2$' },
            { expr: '1 + 2(x - 1)', label: 'tangent at $x = 1$', color: 'orange', dashed: true },
          ],
          points: [
            { x: 1, y: 1, label: '(1, 1)' },
            { x: '1 + d', y: '(1 + d)^2', color: 'blue' },
          ],
          segments: [
            { from: [1, 1], to: ['1 + d', 1], color: 'gray', label: 'dx' },
            { from: ['1 + d', 1], to: ['1 + d', '1 + 2d'], color: 'orange', label: 'dy' },
            { from: ['1 + d', '1 + 2d'], to: ['1 + d', '(1 + d)^2'], color: 'red', label: 'error' },
          ],
          sliders: [{ name: 'd', min: 0.05, max: 1.5, step: 0.05, value: 1, label: '$dx$' }],
          readouts: [
            { label: '$dy = 2\\,dx =$', expr: '2d', digits: 4 },
            { label: '$\\Delta y = (1 + dx)^2 - 1 =$', expr: '(1 + d)^2 - 1', digits: 4 },
          ],
          caption: 'Orange: $dy$, the tangent\'s rise. Orange plus red: $\\Delta y$, the curve\'s rise. The red difference is exactly $(dx)^2$ here and vanishes quickly as $dx$ shrinks.',
        },
        {
          type: 'derivation',
          title: 'Compare $dy$ and $\\Delta y$ for $y = x^2$ as $x$ goes from $3$ to $3.05$',
          steps: [
            { tex: 'dx = 0.05, \\quad \\frac{dy}{dx} = 2x', why: 'The input changes by $3.05 - 3$; the power rule gives the derivative.' },
            { tex: 'dy = 2x\\,dx = 2(3)(0.05) = 0.3', why: 'The differential uses the slope at the **starting** point $x = 3$.' },
            { tex: '\\Delta y = (3.05)^2 - 3^2 = 9.3025 - 9 = 0.3025', why: 'The actual change: evaluate the function at both ends.' },
            { tex: '\\Delta y - dy = 0.0025 = (0.05)^2', why: 'For $x^2$ the difference is exactly $(dx)^2$, matching the $(\\Delta x)^2$ error pattern from earlier.' },
          ],
          result: 'The differential $dy = 0.3$ captures the actual change $0.3025$ to within less than $1\\%$.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Same idea, new notation',
          text: '$f(a + dx) \\approx f(a) + dy$ is literally $f(x) \\approx L(x)$ with $x = a + dx$. Differentials are convenient when you care about the *change* rather than the new value — for instance, how much an error in a measurement changes a computed result.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'For $y = x^3 - 2x$, find the differential $dy$ when $x = 2$ and $dx = 0.1$.',
      hint: '$dy = f\'(x)\\,dx$ with $f\'(x) = 3x^2 - 2$.',
      label: '$dy =$',
      answer: '1',
      explanation: '$f\'(2) = 3(4) - 2 = 10$, so $dy = 10(0.1) = 1$. For comparison the actual change is $\\Delta y = f(2.1) - f(2) = (9.261 - 4.2) - (8 - 4) = 1.061$. The differential is the tangent-line prediction; the curve bends upward here, so the true change is a little larger.',
    },
    {
      kind: 'truefalse',
      prompt: 'For a linear function $f(x) = mx + b$, the differential $dy$ equals the actual change $\\Delta y$ exactly, for every $dx$.',
      answer: true,
      explanation: 'A line is its own tangent line, so the two rises coincide: $\\Delta y = m(x + dx) + b - (mx + b) = m\\,dx$, and $dy = f\'(x)\\,dx = m\\,dx$. For every non-linear function, $dy$ and $\\Delta y$ generally differ, and the gap is what we called the approximation error.',
    },
    {
      kind: 'concept',
      title: 'Propagated error: how measurement mistakes grow',
      blocks: [
        {
          type: 'p',
          text: 'Every measurement has some uncertainty. If you compute a quantity from a measured value, the uncertainty carries over — and differentials estimate by how much. If $x$ is measured with a possible error $dx$, the resulting error in $y = f(x)$ is approximately $dy = f\'(x)\\,dx$. The **relative error** $\\frac{dy}{y}$ (often quoted as a percentage) is usually more meaningful than the absolute error.',
        },
        {
          type: 'derivation',
          title: 'A ball\'s radius is measured as $21$ cm, with a possible error of $0.05$ cm. Estimate the error in its volume.',
          steps: [
            { tex: 'V = \\tfrac{4}{3}\\pi r^3, \\quad dV = 4\\pi r^2\\,dr', why: 'Differentiate the volume formula and multiply by $dr$.' },
            { tex: 'dV = 4\\pi (21)^2 (0.05) = 88.2\\pi \\approx 277\\ \\text{cm}^3', why: 'Substitute the measured radius $r = 21$ and the possible error $dr = 0.05$.' },
            { tex: 'V = \\tfrac{4}{3}\\pi (21)^3 = 12348\\pi \\approx 38{,}792\\ \\text{cm}^3', why: 'The computed volume itself, needed for the relative error.' },
            { tex: '\\frac{dV}{V} = \\frac{4\\pi r^2\\,dr}{\\frac{4}{3}\\pi r^3} = 3\\,\\frac{dr}{r} = 3 \\cdot \\frac{0.05}{21} \\approx 0.0071', why: 'Divide; most factors cancel. A relative error of about $0.24\\%$ in $r$ becomes about $0.71\\%$ in $V$.' },
          ],
          result: 'The computed volume could be off by about $277$ cm³, a relative error of roughly $0.7\\%$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the relative error triples',
          text: 'For any power law $y = Cx^n$, $\\frac{dy}{y} = \\frac{nCx^{n-1}dx}{Cx^n} = n\\frac{dx}{x}$. Cubing a measurement multiplies its relative error by $3$; squaring multiplies it by $2$; a square root halves it. This is why engineers measure the radius of a pipe far more carefully than its length when computing flow.',
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'Exam questions typically ask for "the maximum error" (that is $|dy|$) and "the relative or percentage error" ($\\frac{dy}{y}$, or times $100\\%$). Always state which you are giving, and include units for the absolute error but not for the relative error.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'The edge of a cube is measured as $10$ cm with a possible error of $0.1$ cm. Use differentials to estimate the maximum possible error in the computed volume.',
      hint: '$V = x^3$, so $dV = 3x^2\\,dx$.',
      label: '$dV \\approx$',
      unit: 'cm³',
      answer: '30',
      tolerance: 0.01,
      explanation: '$dV = 3x^2\\,dx = 3(10)^2(0.1) = 30$ cm³. The volume is $1000$ cm³, so the relative error is $\\frac{30}{1000} = 3\\%$ — three times the $1\\%$ relative error in the edge, as the power-law rule predicts. (The exact worst case, $10.1^3 - 1000 = 30.301$, is very close.)',
    },
  ],
  takeaways: [
    'A differentiable function is locally linear: zoomed in near $a$, its graph looks like its tangent line.',
    'Linearization: $L(x) = f(a) + f\'(a)(x - a)$, and $f(x) \\approx L(x)$ for $x$ near $a$ — "known value + slope × step".',
    'The error shrinks like $(x - a)^2$; concave-up curves give underestimates, concave-down curves overestimates.',
    'Near $0$: $\\sin x \\approx x$, $\\cos x \\approx 1$, $e^x \\approx 1 + x$, $(1 + x)^k \\approx 1 + kx$ (radians for trig).',
    'Differentials: $dy = f\'(x)\\,dx$ is the tangent-line change, approximating the actual change $\\Delta y$.',
    'Propagated error: $dy$ estimates the error in a computed value; for $y = Cx^n$ the relative error is multiplied by $n$.',
  ],
  reading: [
    {
      title: 'OpenStax Calculus Volume 1 — 4.2 Linear Approximations and Differentials',
      url: 'https://openstax.org/books/calculus-volume-1/pages/4-2-linear-approximations-and-differentials',
      source: 'openstax',
      note: 'Covers linearization, differentials and propagated error with more worked examples.',
    },
    {
      title: "Paul's Online Notes — Linear Approximations",
      url: 'https://tutorial.math.lamar.edu/Classes/CalcI/LinearApproximations.aspx',
      source: 'paul',
      note: 'A concise treatment, including a nice discussion of how quickly the approximation degrades.',
    },
    {
      title: "Paul's Online Notes — Differentials",
      url: 'https://tutorial.math.lamar.edu/Classes/CalcI/Differentials.aspx',
      source: 'paul',
      note: 'Short section contrasting $dy$ with $\\Delta y$ through computed examples.',
    },
    {
      title: 'Wikipedia — Small-angle approximation',
      url: 'https://en.wikipedia.org/wiki/Small-angle_approximation',
      source: 'wikipedia',
      note: 'Shows how good $\\sin\\theta \\approx \\theta$ is as the angle grows, with uses in physics and astronomy.',
    },
  ],
};
