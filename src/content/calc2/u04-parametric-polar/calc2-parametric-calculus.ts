import type { GraphBlock, Lesson } from '../../types';

type Segment = NonNullable<GraphBlock['segments']>[number];

/** Vertical hatching under one arch of the cycloid x = t - sin t, y = 1 - cos t (shows the area ∫ y dx). */
const cycloidHatch: Segment[] = Array.from({ length: 41 }, (_, i) => {
  const t = (2 * Math.PI * (i + 0.5)) / 41;
  const x = Math.round((t - Math.sin(t)) * 1000) / 1000;
  const y = Math.round((1 - Math.cos(t)) * 1000) / 1000;
  return { from: [x, 0], to: [x, y], color: 'teal' as const };
});

export const lesson: Lesson = {
  id: 'calc2-parametric-calculus',
  title: 'Calculus with Parametric Curves',
  summary: 'Curves traced over time — projectiles, rolling wheels, Bézier paths — and how to find their slopes, concavity, areas and lengths without ever solving for $y$.',
  minutes: 19,
  objectives: [
    'Describe a curve with parametric equations and eliminate the parameter when possible',
    'Compute $\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt}$ and find tangent lines, horizontal and vertical tangents',
    'Compute $\\frac{d^2y}{dx^2}$ for a parametric curve and avoid the classic wrong formula',
    'Find the area under a parametric curve with $\\int y\\,dx = \\int y(t)\\,x\'(t)\\,dt$',
    'Find arc length $\\int \\sqrt{x\'(t)^2 + y\'(t)^2}\\,dt$ and relate it to speed and Bézier paths in games',
  ],
  steps: [
    {
      kind: 'concept',
      title: 'Curves traced over time',
      blocks: [
        {
          type: 'p',
          text: 'A graph $y = f(x)$ tells you *where* a curve is, but not *when* you are there, and it can\'t loop back or cross itself. [[parametric-equations|Parametric equations]] describe both coordinates as functions of a third variable, the [[parameter]] $t$ (usually time):',
        },
        {
          type: 'math',
          tex: 'x = x(t), \\qquad y = y(t), \\qquad a \\le t \\le b',
        },
        {
          type: 'p',
          text: 'This is exactly how games store motion. A projectile launched at speed $v_0 = 20$ m/s and angle $\\alpha$ has $x(t) = 20\\cos\\alpha\\,t$ (steady sideways motion) and $y(t) = 20\\sin\\alpha\\,t - 4.9t^2$ (gravity pulling it back). Drag the time slider to fly the ball along its path; the arrow is its [[velocity]] vector $\\langle x\'(t), y\'(t) \\rangle$.',
        },
        {
          type: 'graph',
          x: [-2, 44],
          y: [-2, 22],
          parametric: [{ x: '20*cos(a)*t', y: '20*sin(a)*t - 4.9*t^2', t: [0, '40*sin(a)/9.8'], label: 'path', color: 'blue' }],
          points: [{ x: '20*cos(a)*min(s, 40*sin(a)/9.8)', y: '20*sin(a)*min(s, 40*sin(a)/9.8) - 4.9*min(s, 40*sin(a)/9.8)^2', color: 'red' }],
          segments: [
            {
              from: ['20*cos(a)*min(s, 40*sin(a)/9.8)', '20*sin(a)*min(s, 40*sin(a)/9.8) - 4.9*min(s, 40*sin(a)/9.8)^2'],
              to: ['20*cos(a)*min(s, 40*sin(a)/9.8) + 0.4*20*cos(a)', '20*sin(a)*min(s, 40*sin(a)/9.8) - 4.9*min(s, 40*sin(a)/9.8)^2 + 0.4*(20*sin(a) - 9.8*min(s, 40*sin(a)/9.8))'],
              arrow: true,
              color: 'red',
            },
          ],
          sliders: [
            { name: 'a', min: 0.2, max: 1.4, step: 0.01, value: 0.8, label: 'launch angle $\\alpha$ (radians)' },
            { name: 's', min: 0, max: 4, step: 0.02, value: 1, label: 'time $t$ (s)' },
          ],
          readouts: [
            { label: 'speed $\\sqrt{x\'^2 + y\'^2} =$', expr: 'sqrt((20*cos(a))^2 + (20*sin(a) - 9.8*min(s, 40*sin(a)/9.8))^2)', digits: 2 },
            { label: 'slope $\\frac{dy}{dx} =$', expr: '(20*sin(a) - 9.8*min(s, 40*sin(a)/9.8))/(20*cos(a))', digits: 3 },
          ],
          caption: 'The arrow (scaled by $0.4$) always points along the path: velocity is tangent to the trajectory. At the top, $y\'(t) = 0$ and the slope is $0$.',
        },
        {
          type: 'p',
          text: 'Sometimes you can **eliminate the parameter**: solve one equation for $t$ and substitute into the other. From $x = 20\\cos\\alpha\\,t$ we get $t = \\frac{x}{20\\cos\\alpha}$, so the path is the parabola $y = x\\tan\\alpha - \\frac{4.9x^2}{400\\cos^2\\alpha}$. But often elimination is messy or impossible — and the point of this lesson is that you never need it to do calculus.',
        },
      ],
    },
    {
      kind: 'mcq',
      prompt: 'Eliminate the parameter: $x = 2t + 1$, $\\;y = t^2 - 1$.',
      options: [
        { text: '$y = (x - 1)^2 - 1$', why: 'This substitutes $t = x - 1$, forgetting to divide by $2$. From $x = 2t + 1$, $t = \\frac{x - 1}{2}$.' },
        { text: '$y = \\dfrac{(x - 1)^2}{4} - 1$', correct: true, why: 'Solve $t = \\frac{x - 1}{2}$ and substitute: $y = \\left(\\frac{x-1}{2}\\right)^2 - 1$.' },
        { text: '$y = (2x + 1)^2 - 1$', why: 'This plugs the formula for $x$ into $y$ as though $t$ were $x$. You must express $t$ in terms of $x$ first.' },
        { text: '$y = \\dfrac{(x + 1)^2}{4} - 1$', why: 'A sign slip: subtracting $1$ from both sides of $x = 2t + 1$ gives $x - 1 = 2t$.' },
      ],
      explanation: 'Solve the simpler equation for $t$: $t = \\frac{x - 1}{2}$. Substitute into $y = t^2 - 1$ to get $y = \\frac{(x - 1)^2}{4} - 1$, a parabola with vertex $(1, -1)$ — the point where $t = 0$.',
    },
    {
      kind: 'concept',
      title: 'Slopes: $\\dfrac{dy}{dx} = \\dfrac{dy/dt}{dx/dt}$',
      blocks: [
        {
          type: 'p',
          text: 'How steep is a parametric curve at a point? Think of the [[chain-rule]]: as $t$ changes, $y$ changes at rate $\\frac{dy}{dt}$, which equals (how $y$ changes with $x$) times (how $x$ changes with $t$).',
        },
        {
          type: 'theorem',
          name: 'Slope of a parametric curve',
          tex: '\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt} \\qquad \\text{provided } \\frac{dx}{dt} \\neq 0',
          text: 'Reason: the chain rule gives $\\frac{dy}{dt} = \\frac{dy}{dx}\\cdot\\frac{dx}{dt}$; divide by $\\frac{dx}{dt}$. **Horizontal tangent** where $\\frac{dy}{dt} = 0$ (and $\\frac{dx}{dt} \\neq 0$); **vertical tangent** where $\\frac{dx}{dt} = 0$ (and $\\frac{dy}{dt} \\neq 0$).',
        },
        {
          type: 'derivation',
          title: 'Tangent line to $x = t^2$, $y = t^3 - 3t$ at $t = 2$',
          steps: [
            { tex: '\\frac{dx}{dt} = 2t, \\qquad \\frac{dy}{dt} = 3t^2 - 3', why: 'Differentiate each coordinate with respect to $t$.' },
            { tex: '\\frac{dy}{dx} = \\frac{3t^2 - 3}{2t}', why: 'Divide, as long as $t \\neq 0$.' },
            { tex: '\\left.\\frac{dy}{dx}\\right|_{t=2} = \\frac{12 - 3}{4} = \\frac{9}{4}', why: 'Substitute $t = 2$ — no need to know $y$ as a function of $x$.' },
            { tex: '(x, y)\\big|_{t=2} = (4,\\; 8 - 6) = (4, 2)', why: 'Find the point by plugging $t = 2$ into $x(t)$ and $y(t)$.' },
            { tex: 'y - 2 = \\tfrac{9}{4}(x - 4) \\implies y = \\tfrac{9}{4}x - 7', why: '[[point-slope-form|Point-slope form]], then simplify: $2 - 9 = -7$.' },
          ],
          result: 'The tangent at $t = 2$ is $y = \\frac{9}{4}x - 7$.',
        },
        {
          type: 'graph',
          x: [-1, 5.5],
          y: [-4, 4],
          parametric: [{ x: 't^2', y: 't^3 - 3*t', t: [-2.2, 2.2], label: '$x = t^2,\\; y = t^3 - 3t$', color: 'blue' }],
          points: [{ x: 's^2', y: 's^3 - 3*s', color: 'orange' }],
          segments: [
            {
              from: ['s^2 - 1.5*2*s/sqrt(4*s^2 + (3*s^2 - 3)^2)', 's^3 - 3*s - 1.5*(3*s^2 - 3)/sqrt(4*s^2 + (3*s^2 - 3)^2)'],
              to: ['s^2 + 1.5*2*s/sqrt(4*s^2 + (3*s^2 - 3)^2)', 's^3 - 3*s + 1.5*(3*s^2 - 3)/sqrt(4*s^2 + (3*s^2 - 3)^2)'],
              color: 'orange',
            },
          ],
          sliders: [{ name: 's', min: -2.2, max: 2.2, step: 0.01, value: 2, label: '$t$' }],
          readouts: [{ label: '$\\frac{dy}{dx} = \\frac{3t^2 - 3}{2t} =$', expr: '(3*s^2 - 3)/(2*s)', digits: 3 }],
          caption: 'Slide $t$. At $t = \\pm 1$ the tangent is horizontal ($dy/dt = 0$); at $t = 0$ it is vertical ($dx/dt = 0$, readout undefined). At $(3, 0)$ the curve crosses itself ($t = \\pm\\sqrt{3}$) with two different tangents, slopes $\\pm\\sqrt{3}$ — something no graph $y = f(x)$ can do.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Facing the direction of motion',
          text: 'To rotate a sprite to face along its path, games take the velocity $\\langle x\'(t), y\'(t) \\rangle$ and compute the angle with `atan2(dy, dx)`. Using `atan2` instead of `atan(dy/dx)` is exactly the lesson of this card: it never divides by $\\frac{dx}{dt}$, so vertical motion (and moving left vs right) is handled correctly.',
        },
      ],
    },
    {
      kind: 'expr',
      prompt: 'Find $\\dfrac{dy}{dx}$ for the curve $x = t^3 + 1$, $\\;y = t^2 - t$, as a function of $t$.',
      hint: 'Compute $\\frac{dy}{dt}$ and $\\frac{dx}{dt}$ separately, then divide.',
      label: '$\\frac{dy}{dx} =$',
      answer: '(2t - 1)/(3t^2)',
      answerTex: '\\frac{dy}{dx} = \\frac{2t - 1}{3t^2}',
      variables: ['t'],
      domain: [0.5, 3],
      explanation: '$\\frac{dy}{dt} = 2t - 1$ and $\\frac{dx}{dt} = 3t^2$, so $\\frac{dy}{dx} = \\frac{2t - 1}{3t^2}$ (for $t \\neq 0$). The top goes over the bottom in the same order as the name: $y$ over $x$. At $t = 0$, $\\frac{dx}{dt} = 0$ while $\\frac{dy}{dt} = -1$, so the curve has a vertical tangent there.',
    },
    {
      kind: 'numeric',
      prompt: 'The curve $x = t^2$, $y = t^3 - 3t$ has horizontal tangents at two points. Enter the $y$-coordinates of both, separated by a comma.',
      hint: 'Set $\\frac{dy}{dt} = 3t^2 - 3 = 0$ and check that $\\frac{dx}{dt} \\neq 0$ there. Then compute $y$.',
      label: '$y =$',
      answer: ['-2', '2'],
      explanation: '$\\frac{dy}{dt} = 3t^2 - 3 = 0$ gives $t = \\pm 1$, where $\\frac{dx}{dt} = \\pm 2 \\neq 0$. At $t = 1$: $(1, 1 - 3) = (1, -2)$. At $t = -1$: $(1, -1 + 3) = (1, 2)$. So the $y$-coordinates are $-2$ and $2$. (The point $t = 0$, where $\\frac{dx}{dt} = 0$, is a vertical tangent, not a horizontal one.)',
    },
    {
      kind: 'concept',
      title: 'Concavity: the second derivative',
      blocks: [
        {
          type: 'p',
          text: 'The second derivative $\\frac{d^2y}{dx^2}$ is the derivative **with respect to $x$** of $\\frac{dy}{dx}$. But $\\frac{dy}{dx}$ is a function of $t$, so we apply the same slope rule to it: differentiate with respect to $t$, then divide by $\\frac{dx}{dt}$.',
        },
        {
          type: 'theorem',
          name: 'Second derivative of a parametric curve',
          tex: '\\frac{d^2y}{dx^2} = \\frac{d}{dx}\\left(\\frac{dy}{dx}\\right) = \\frac{\\dfrac{d}{dt}\\left(\\dfrac{dy}{dx}\\right)}{dx/dt}',
        },
        {
          type: 'derivation',
          title: 'Concavity of $x = t^2$, $y = t^3 - 3t$',
          steps: [
            { tex: '\\frac{dy}{dx} = \\frac{3t^2 - 3}{2t} = \\frac{3t}{2} - \\frac{3}{2t}', why: 'From the previous card. Splitting the fraction makes it easier to differentiate.' },
            { tex: '\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) = \\frac{3}{2} + \\frac{3}{2t^2}', why: 'Differentiate with respect to $t$: $\\frac{d}{dt}\\left(-\\frac{3}{2}t^{-1}\\right) = \\frac{3}{2}t^{-2}$.' },
            { tex: '\\frac{d^2y}{dx^2} = \\frac{\\frac{3}{2} + \\frac{3}{2t^2}}{2t}', why: 'Divide by $\\frac{dx}{dt} = 2t$. This is the step people forget.' },
            { tex: '= \\frac{3t^2 + 3}{4t^3} = \\frac{3(t^2 + 1)}{4t^3}', why: 'Multiply top and bottom by $2t^2$ to clear the small fractions.' },
          ],
          result: 'The numerator is always positive, so the curve is concave up for $t > 0$ (the lower branch) and concave down for $t < 0$ (the upper branch) — matching the picture.',
        },
        {
          type: 'compare',
          left: {
            title: 'Wrong',
            tone: 'bad',
            tex: ['\\frac{d^2y}{dx^2} = \\frac{d^2y/dt^2}{d^2x/dt^2}'],
            text: 'Tempting by analogy with the first derivative, but it has no justification. For our curve it gives $\\frac{6t}{2} = 3t$, which is wrong at every $t$ except $t = \\pm 1$.',
          },
          right: {
            title: 'Right',
            tone: 'good',
            tex: ['\\frac{d^2y}{dx^2} = \\frac{\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right)}{dx/dt}'],
            text: 'Differentiate the slope function with respect to $t$, then convert to "per unit $x$" by dividing by $\\frac{dx}{dt}$.',
          },
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why divide by $dx/dt$ again?',
          text: 'The rule $\\frac{d(\\text{anything})}{dx} = \\frac{d(\\text{anything})/dt}{dx/dt}$ holds for *any* quantity that changes along the curve, by the same chain-rule argument. For the first derivative "anything" is $y$; for the second it is the slope $\\frac{dy}{dx}$. Nothing in that rule involves $\\frac{d^2x}{dt^2}$.',
        },
      ],
    },
    {
      kind: 'error',
      prompt: 'A student finds $\\dfrac{d^2y}{dx^2}$ at $t = 1$ for $x = t^2 + t$, $\\;y = t^3$. Tap the first wrong line.',
      lines: [
        '$\\dfrac{dy}{dx} = \\dfrac{3t^2}{2t + 1}$',
        '$\\dfrac{d^2y}{dx^2} = \\dfrac{d^2y/dt^2}{d^2x/dt^2}$',
        '$= \\dfrac{6t}{2} = 3t$',
        'At $t = 1$: $\\dfrac{d^2y}{dx^2} = 3$',
      ],
      errorLines: [2],
      explanation: 'Line 2 uses the invalid "ratio of second derivatives". Correctly: $\\frac{d}{dt}\\left(\\frac{3t^2}{2t+1}\\right) = \\frac{6t(2t+1) - 3t^2\\cdot 2}{(2t+1)^2} = \\frac{6t^2 + 6t}{(2t+1)^2}$ (quotient rule), then divide by $\\frac{dx}{dt} = 2t + 1$: $\\frac{d^2y}{dx^2} = \\frac{6t(t+1)}{(2t+1)^3}$. At $t = 1$ that is $\\frac{12}{27} = \\frac{4}{9}$, not $3$.',
    },
    {
      kind: 'truefalse',
      prompt: 'If $\\dfrac{dx}{dt} = 0$ and $\\dfrac{dy}{dt} \\neq 0$ at $t = t_0$, the curve has a horizontal tangent at that point.',
      answer: false,
      explanation: 'If $x$ is momentarily not changing while $y$ is, the point is moving straight up or down: the tangent is **vertical** (the slope $\\frac{dy/dt}{dx/dt}$ blows up). Horizontal tangents occur where $\\frac{dy}{dt} = 0$ and $\\frac{dx}{dt} \\neq 0$. If both are $0$, anything can happen (a cusp, a corner, or a smooth point) and you must investigate further.',
    },
    {
      kind: 'concept',
      title: 'Area under a parametric curve',
      blocks: [
        {
          type: 'p',
          text: 'For a graph, area under the curve is $\\int_a^b y\\,dx$. If the curve is traced by $x = x(t)$, $y = y(t)$, simply substitute: $y$ becomes $y(t)$ and $dx$ becomes $x\'(t)\\,dt$ — the same move as [[u-substitution]].',
        },
        {
          type: 'theorem',
          name: 'Area under a parametric curve',
          tex: 'A = \\int_a^b y\\,dx = \\int_{\\alpha}^{\\beta} y(t)\\,x\'(t)\\,dt',
          text: 'Valid when $y \\ge 0$ and the curve is traced exactly once, left to right, as $t$ goes from $\\alpha$ to $\\beta$. If it is traced right to left, swap the limits (otherwise you get the negative of the area).',
        },
        {
          type: 'p',
          text: 'Our showcase is the [[cycloid]]: the path of a point on the rim of a wheel of radius $r$ rolling along the ground. When the wheel has turned through angle $t$ it has rolled $rt$ forward, giving $x = r(t - \\sin t)$, $y = r(1 - \\cos t)$.',
        },
        {
          type: 'graph',
          x: [-0.5, 7],
          y: [-0.5, 2.6],
          equal: true,
          parametric: [
            { x: 't - sin(t)', y: '1 - cos(t)', t: [0, '2pi'], label: 'cycloid ($r = 1$)', color: 'blue' },
            { x: 's + cos(t)', y: '1 + sin(t)', t: [0, '2pi'], label: 'rolling wheel', color: 'gray', dashed: true },
          ],
          segments: [...cycloidHatch, { from: ['s', 1], to: ['s - sin(s)', '1 - cos(s)'], color: 'red' }],
          points: [{ x: 's - sin(s)', y: '1 - cos(s)', color: 'red' }],
          sliders: [{ name: 's', min: 0, max: 6.28, step: 0.02, value: 2, label: 'angle rolled $t$' }],
          caption: 'Roll the wheel: the red point on its rim traces the cycloid. The teal region under one arch has area $3\\pi$ — three times the area of the wheel.',
        },
        {
          type: 'derivation',
          title: 'Area under one arch of the cycloid, $0 \\le t \\le 2\\pi$',
          steps: [
            { tex: 'A = \\int_0^{2\\pi} r(1 - \\cos t)\\cdot r(1 - \\cos t)\\,dt', why: '$y(t) = r(1 - \\cos t)$ and $x\'(t) = r(1 - \\cos t)$. As $t$ goes $0 \\to 2\\pi$, $x$ increases from $0$ to $2\\pi r$, so the orientation is left to right.' },
            { tex: '= r^2\\int_0^{2\\pi} \\left(1 - 2\\cos t + \\cos^2 t\\right)dt', why: 'Expand the square and pull out $r^2$.' },
            { tex: '= r^2\\int_0^{2\\pi} \\left(1 - 2\\cos t + \\tfrac{1}{2} + \\tfrac{1}{2}\\cos 2t\\right)dt', why: 'Power-reduce with $\\cos^2 t = \\frac{1 + \\cos 2t}{2}$.' },
            { tex: '= r^2\\left[\\tfrac{3}{2}t - 2\\sin t + \\tfrac{1}{4}\\sin 2t\\right]_0^{2\\pi}', why: 'Integrate term by term.' },
            { tex: '= r^2 \\cdot \\tfrac{3}{2}\\cdot 2\\pi = 3\\pi r^2', why: 'Every sine term is $0$ at both $0$ and $2\\pi$.' },
          ],
          result: 'One arch encloses $3\\pi r^2$, exactly three times the area of the rolling wheel — a result Galileo guessed by cutting shapes out of metal and weighing them.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'Find the area under the curve $x = t^3$, $\\;y = t^2$ for $0 \\le t \\le 1$ (between the curve and the $x$-axis).',
      hint: '$A = \\int_0^1 y(t)\\,x\'(t)\\,dt$ with $x\'(t) = 3t^2$.',
      label: '$A =$',
      answer: '3/5',
      explanation: '$A = \\int_0^1 t^2 \\cdot 3t^2\\,dt = \\int_0^1 3t^4\\,dt = \\frac{3}{5}$. Check by eliminating the parameter: $t = x^{1/3}$, so $y = x^{2/3}$ and $\\int_0^1 x^{2/3}\\,dx = \\frac{3}{5}$. ✓ (Forgetting the $x\'(t)$ factor and computing $\\int_0^1 t^2\\,dt = \\frac{1}{3}$ is the most common mistake.)',
    },
    {
      kind: 'concept',
      title: 'Arc length and speed',
      blocks: [
        {
          type: 'p',
          text: 'In the [[arc-length-integral|arc length]] lesson you approximated a curve by tiny straight segments. For a parametric curve, over a short time $dt$ the point moves $dx = x\'(t)\\,dt$ across and $dy = y\'(t)\\,dt$ up, so by Pythagoras the segment has length $\\sqrt{x\'(t)^2 + y\'(t)^2}\\,dt$.',
        },
        {
          type: 'theorem',
          name: 'Arc length of a parametric curve',
          tex: 'L = \\int_{\\alpha}^{\\beta} \\sqrt{\\left(\\frac{dx}{dt}\\right)^2 + \\left(\\frac{dy}{dt}\\right)^2}\\,dt',
          text: 'Valid when $x\'$ and $y\'$ are continuous and the curve is traversed **exactly once** as $t$ goes from $\\alpha$ to $\\beta$. The integrand is the **speed** $|\\mathbf{v}(t)|$, so arc length is simply distance travelled $= \\int$ speed $dt$.',
        },
        {
          type: 'derivation',
          title: 'Length of one arch of the cycloid',
          steps: [
            { tex: "x' = r(1 - \\cos t), \\quad y' = r\\sin t", why: 'Differentiate $x = r(t - \\sin t)$ and $y = r(1 - \\cos t)$.' },
            { tex: "x'^2 + y'^2 = r^2(1 - 2\\cos t + \\cos^2 t + \\sin^2 t) = r^2(2 - 2\\cos t)", why: 'Expand and use $\\sin^2 t + \\cos^2 t = 1$.' },
            { tex: '= 4r^2\\sin^2\\left(\\tfrac{t}{2}\\right)', why: 'Half-angle identity: $1 - \\cos t = 2\\sin^2\\frac{t}{2}$.' },
            { tex: 'L = \\int_0^{2\\pi} 2r\\sin\\left(\\tfrac{t}{2}\\right)dt', why: 'Take the square root: $\\sqrt{4r^2\\sin^2(t/2)} = 2r|\\sin(t/2)|$, and $\\sin(t/2) \\ge 0$ for $0 \\le t \\le 2\\pi$.' },
            { tex: '= 2r\\left[-2\\cos\\left(\\tfrac{t}{2}\\right)\\right]_0^{2\\pi} = 2r(2 + 2) = 8r', why: 'Antiderivative of $\\sin(t/2)$ is $-2\\cos(t/2)$; $\\cos\\pi = -1$ and $\\cos 0 = 1$.' },
          ],
          result: 'One arch of a cycloid is exactly $8r$ long — a rational multiple of $r$, with no $\\pi$ at all.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Traced once, not twice',
          text: 'The circle $x = \\cos t$, $y = \\sin t$ for $0 \\le t \\le 4\\pi$ gives $\\int_0^{4\\pi} 1\\,dt = 4\\pi$: that is the distance travelled going around **twice**, not the circumference. Choose the $t$-interval so that the curve is traced exactly once.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'Find the length of the curve $x = t^2$, $\\;y = \\frac{2}{3}t^3$ for $0 \\le t \\le \\sqrt{3}$.',
      hint: '$x\'^2 + y\'^2 = 4t^2 + 4t^4 = 4t^2(1 + t^2)$. Its square root is $2t\\sqrt{1 + t^2}$; substitute $u = 1 + t^2$.',
      label: '$L =$',
      answer: '14/3',
      explanation: '$\\sqrt{(2t)^2 + (2t^2)^2} = \\sqrt{4t^2(1 + t^2)} = 2t\\sqrt{1 + t^2}$ (since $t \\ge 0$). With $u = 1 + t^2$, $du = 2t\\,dt$: $L = \\int_1^4 \\sqrt{u}\\,du = \\frac{2}{3}u^{3/2}\\Big|_1^4 = \\frac{2}{3}(8 - 1) = \\frac{14}{3}$.',
    },
    {
      kind: 'concept',
      title: 'Bézier curves: parametric paths in games',
      blocks: [
        {
          type: 'p',
          text: 'Designers don\'t write $x(t)$ and $y(t)$ by hand. They drag a few **control points**, and the engine builds a [[bezier-curve]]. The quadratic Bézier with control points $P_0, P_1, P_2$ is a weighted average of them:',
        },
        {
          type: 'math',
          tex: 'B(t) = (1 - t)^2 P_0 + 2(1 - t)t\\,P_1 + t^2 P_2, \\qquad 0 \\le t \\le 1',
          caption: 'The weights $(1-t)^2$, $2(1-t)t$, $t^2$ are always non-negative and add up to $(1 - t + t)^2 = 1$.',
        },
        {
          type: 'graph',
          x: [-0.5, 2.5],
          y: [-0.5, 3],
          parametric: [{ x: '2*t', y: '2*b*t*(1 - t)', t: [0, 1], label: 'Bézier curve', color: 'blue' }],
          segments: [
            { from: [0, 0], to: [1, 'b'], dashed: true, color: 'gray' },
            { from: [1, 'b'], to: [2, 0], dashed: true, color: 'gray' },
            { from: ['2*s', '2*b*s*(1 - s)'], to: ['2*s + 0.3*2', '2*b*s*(1 - s) + 0.3*2*b*(1 - 2*s)'], arrow: true, color: 'red', label: "B'(t)" },
          ],
          points: [
            { x: 0, y: 0, label: 'P₀' },
            { x: 1, y: 'b', label: 'P₁' },
            { x: 2, y: 0, label: 'P₂' },
            { x: '2*s', y: '2*b*s*(1 - s)', color: 'red' },
          ],
          sliders: [
            { name: 'b', min: -0.5, max: 2.8, step: 0.05, value: 2, label: 'height of $P_1$' },
            { name: 's', min: 0, max: 1, step: 0.01, value: 0.25, label: '$t$' },
          ],
          readouts: [{ label: 'speed $|B\'(t)| =$', expr: 'sqrt(4 + (2*b*(1 - 2*s))^2)', digits: 3 }],
          caption: 'Here $P_0 = (0, 0)$, $P_1 = (1, b)$, $P_2 = (2, 0)$, so $B(t) = (2t,\\; 2bt(1 - t))$. The red arrow is the velocity $B\'(t) = \\langle 2,\\; 2b(1 - 2t) \\rangle$ (scaled by $0.3$). At $t = 0$ it points straight at $P_1$. Notice the speed changes along the path.',
        },
        {
          type: 'p',
          text: 'Differentiating gives $B\'(t) = 2(1 - t)(P_1 - P_0) + 2t(P_2 - P_1)$. At the ends, $B\'(0) = 2(P_1 - P_0)$ and $B\'(1) = 2(P_2 - P_1)$: the curve leaves $P_0$ heading toward $P_1$ and arrives at $P_2$ coming from $P_1$. That is what makes chains of Bézier segments join smoothly: line up the control points across each joint.',
        },
        {
          type: 'p',
          text: 'Because the speed $|B\'(t)|$ is not constant, stepping $t$ evenly makes an object speed up and slow down along the path. To move at constant speed, games compute arc length numerically, by summing short chords — the definition of arc length, done in code:',
        },
        {
          type: 'code',
          title: 'bezier_length.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdio>

struct Vec2 { double x, y; };

// Quadratic Bezier with control points P0 = (0,0), P1 = (1,2), P2 = (2,0).
Vec2 bezier(double t) {
    double u = 1.0 - t;
    return { 2 * u * t * 1.0 + t * t * 2.0,
             2 * u * t * 2.0 };
}

int main() {
    const int counts[] = {1, 2, 4, 16, 64, 256};
    for (int n : counts) {
        double length = 0.0;
        Vec2 prev = bezier(0.0);
        for (int i = 1; i <= n; ++i) {
            Vec2 cur = bezier(static_cast<double>(i) / n);
            length += std::hypot(cur.x - prev.x, cur.y - prev.y);   // chord length
            prev = cur;
        }
        std::printf("n = %3d  length = %.6f\\n", n, length);
    }
    std::printf("exact    length = %.6f\\n", std::sqrt(5.0) + std::asinh(2.0) / 2.0);
}`,
          output: `n =   1  length = 2.000000
n =   2  length = 2.828427
n =   4  length = 2.920810
n =  16  length = 2.955556
n =  64  length = 2.957740
n = 256  length = 2.957877
exact    length = 2.957886`,
          annotations: [
            { lines: '9-10', text: 'The terms with $P_0 = (0, 0)$ vanish; this is $B(t) = (2t,\\; 4t(1 - t))$.' },
            { lines: 20, text: 'Pythagoras on each short chord — the discrete version of $\\sqrt{x\'^2 + y\'^2}\\,dt$.' },
            { lines: 25, text: 'The exact value of $\\int_0^1 \\sqrt{4 + (4 - 8t)^2}\\,dt$, found with a trig substitution. Chords always slightly *under*estimate it.' },
          ],
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Constant-speed movement along a spline',
          text: 'Engines store a table of cumulative chord lengths $s$ at, say, $64$ values of $t$. To move an enemy $d$ units along the path, they look up the $t$ where $s = d$ (by interpolating in the table). That is a numerical [[arc-length-parametrization]], and it is why the arc length integral matters far beyond the textbook.',
        },
      ],
    },
    {
      kind: 'fill',
      prompt: 'For the quadratic Bézier curve $B(t) = (1-t)^2P_0 + 2(1-t)t\\,P_1 + t^2P_2$:',
      template: 'The velocity at the start is $B\'(0) =$ ___, so the curve leaves $P_0$ heading toward ___. The length of the path is $\\int_0^1$ ___ $dt$.',
      blanks: [{ answers: ['$2(P_1 - P_0)$'] }, { answers: ['$P_1$'] }, { answers: ['$|B\'(t)|$'] }],
      wordBank: ['$2(P_1 - P_0)$', '$P_1 - P_0$', '$2(P_2 - P_1)$', '$P_1$', '$P_2$', '$|B\'(t)|$', '$B(t)$'],
      explanation: '$B\'(t) = 2(1 - t)(P_1 - P_0) + 2t(P_2 - P_1)$, so $B\'(0) = 2(P_1 - P_0)$, a vector pointing from $P_0$ to $P_1$. Arc length is the integral of speed, the magnitude of the velocity: $L = \\int_0^1 |B\'(t)|\\,dt = \\int_0^1 \\sqrt{x\'(t)^2 + y\'(t)^2}\\,dt$.',
    },
    {
      kind: 'numeric',
      prompt: 'Find the slope of the tangent line to the ellipse $x = 2\\cos t$, $\\;y = 3\\sin t$ at $t = \\frac{\\pi}{4}$.',
      hint: '$\\frac{dy}{dx} = \\frac{3\\cos t}{-2\\sin t}$.',
      label: '$\\frac{dy}{dx} =$',
      answer: '-3/2',
      explanation: '$\\frac{dx}{dt} = -2\\sin t$ and $\\frac{dy}{dt} = 3\\cos t$, so $\\frac{dy}{dx} = -\\frac{3\\cos t}{2\\sin t} = -\\frac{3}{2}\\cot t$. At $t = \\frac{\\pi}{4}$, $\\cot\\frac{\\pi}{4} = 1$, giving $-\\frac{3}{2}$. A negative slope makes sense: at $t = \\frac{\\pi}{4}$ the point $(\\sqrt{2}, \\frac{3\\sqrt{2}}{2})$ is in the first quadrant, moving counterclockwise — up and to the left.',
    },
  ],
  takeaways: [
    'Parametric equations $x = x(t)$, $y = y(t)$ describe where a point is at each time; they can loop and cross themselves.',
    'Slope: $\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt}$ (when $\\frac{dx}{dt} \\neq 0$). Horizontal tangent: $\\frac{dy}{dt} = 0$; vertical tangent: $\\frac{dx}{dt} = 0$.',
    'Concavity: $\\frac{d^2y}{dx^2} = \\frac{\\frac{d}{dt}(dy/dx)}{dx/dt}$ — never $\\frac{d^2y/dt^2}{d^2x/dt^2}$.',
    'Area: $\\int y\\,dx = \\int_\\alpha^\\beta y(t)\\,x\'(t)\\,dt$, with the curve traced once, left to right.',
    'Arc length: $L = \\int_\\alpha^\\beta \\sqrt{x\'(t)^2 + y\'(t)^2}\\,dt$ is the integral of speed, for a curve traced exactly once.',
    'Bézier curves are parametric; $B\'(t)$ orients sprites, and numerical arc length makes constant-speed motion possible.',
  ],
  reading: [
    {
      title: 'OpenStax Calculus Volume 2 — 7.2 Calculus of Parametric Curves',
      url: 'https://openstax.org/books/calculus-volume-2/pages/7-2-calculus-of-parametric-curves',
      source: 'openstax',
      note: 'Derivatives, areas and arc length for parametric curves with plenty of practice problems.',
    },
    {
      title: "Paul's Online Notes — Tangents with Parametric Equations",
      url: 'https://tutorial.math.lamar.edu/Classes/CalcII/ParaTangent.aspx',
      source: 'paul',
      note: 'Careful treatment of horizontal and vertical tangents and the second derivative.',
    },
    {
      title: "Paul's Online Notes — Arc Length with Parametric Equations",
      url: 'https://tutorial.math.lamar.edu/Classes/CalcII/ParaArcLength.aspx',
      source: 'paul',
      note: 'Why the curve must be traced exactly once, with worked examples.',
    },
    {
      title: 'Wikipedia — Bézier curve',
      url: 'https://en.wikipedia.org/wiki/B%C3%A9zier_curve',
      source: 'wikipedia',
      note: 'Animations of linear, quadratic and cubic Bézier curves and their derivatives.',
    },
  ],
};
