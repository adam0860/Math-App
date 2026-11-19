import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'calc3-line-integrals',
  title: 'Line Integrals',
  summary: 'Integrate along a curve instead of an interval: the mass of a wire, the exposure along a route, and the work a force field does on a moving object. Orientation, $P\\,dx + Q\\,dy$ notation, and a first look at path dependence.',
  minutes: 20,
  objectives: [
    'Compute a scalar line integral $\\int_C f\\,ds = \\int_a^b f(\\vec{r}(t))\\,|\\vec{r}\\,\'(t)|\\,dt$ and interpret it as mass or area of a curtain',
    'Compute the line integral of a vector field $\\int_C \\vec{F} \\cdot d\\vec{r} = \\int_a^b \\vec{F}(\\vec{r}(t)) \\cdot \\vec{r}\\,\'(t)\\,dt$ and interpret it as work',
    'Explain how orientation affects each kind of line integral',
    'Translate between $\\int_C P\\,dx + Q\\,dy$ and $\\int_C \\vec{F} \\cdot d\\vec{r}$',
    'Approximate a line integral numerically by summing over small chords',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Integrating along a curve: $\\int_C f\\,ds$',
      blocks: [
        {
          type: 'p',
          text: 'A thin wire is bent into the shape of a curve $C$, and its density $f(x, y)$ (mass per unit length) varies along it. To find its mass, chop $C$ into short pieces of length $\\Delta s_i$, multiply each by the density at a sample point, and add. In the limit you get a [[calc3-line-integral]] with respect to arc length.',
        },
        {
          type: 'definition',
          term: 'Line integral with respect to arc length',
          text: 'If $f$ is defined on a smooth curve $C$, then\n\n$$\\int_C f(x, y)\\,ds = \\lim_{n \\to \\infty}\\sum_{i=1}^{n} f(x_i^*, y_i^*)\\,\\Delta s_i$$\n\nwhenever the limit exists. If $C$ is given by $\\vec{r}(t) = \\langle x(t), y(t) \\rangle$, $a \\le t \\le b$, traced exactly once, then\n\n$$\\int_C f\\,ds = \\int_a^b f(x(t), y(t))\\,|\\vec{r}\\,\'(t)|\\,dt = \\int_a^b f(x(t), y(t))\\sqrt{x\'(t)^2 + y\'(t)^2}\\,dt.$$',
        },
        {
          type: 'p',
          text: 'The factor $|\\vec{r}\\,\'(t)|$ is the speed. It converts a step $dt$ in the parameter into a step $ds = |\\vec{r}\\,\'(t)|\\,dt$ of actual length, exactly as in the [[arc-length-integral|arc length integral]] from Calculus II. With $f = 1$ the line integral *is* the arc length.',
        },
        {
          type: 'plot3d',
          x: [-1.2, 1.2],
          y: [-0.2, 1.2],
          z: [0, 2.6],
          view: { azimuth: 20, elevation: 22 },
          parametricSurfaces: [{ x: 'cos(u)', y: 'sin(u)', z: 'v(2 + cos(u)^2 sin(u))', u: [0, 'pi'], v: [0, 1], color: 'blue', opacity: 0.4, label: 'curtain of height $f(x, y)$' }],
          curves: [
            { x: 'cos(t)', y: 'sin(t)', z: '0', t: [0, 'pi'], color: 'green', label: '$C$: upper unit semicircle' },
            { x: 'cos(t)', y: 'sin(t)', z: '2 + cos(t)^2 sin(t)', t: [0, 'pi'], color: 'purple', label: 'top edge $z = 2 + x^2y$' },
            { x: 'cos(s)', y: 'sin(s)', z: 't(2 + cos(s)^2 sin(s))', t: [0, 1], color: 'red' },
          ],
          points: [{ x: 'cos(s)', y: 'sin(s)', z: 0, color: 'red' }],
          sliders: [{ name: 's', min: 0, max: 3.14, step: 0.01, value: 0.9, label: 'parameter $t$', play: true }],
          readouts: [{ label: '$f(\\vec{r}(t)) = 2 + \\cos^2 t\\sin t =$', expr: '2 + cos(s)^2 sin(s)', digits: 3 }],
          caption: 'For $f \\ge 0$, $\\int_C f\\,ds$ is the area of a curtain hanging from the curve $C$ in the floor up to the height $f$. The red post at $\\vec{r}(t)$ has height $f(\\vec{r}(t))$; the line integral adds post heights times arc length.',
        },
        {
          type: 'derivation',
          title: 'Evaluate $\\int_C (2 + x^2y)\\,ds$ over the upper half of the unit circle',
          steps: [
            { tex: '\\vec{r}(t) = \\langle \\cos t, \\sin t \\rangle, \\quad 0 \\le t \\le \\pi', why: 'Parametrize the semicircle, traced once.' },
            { tex: '|\\vec{r}\\,\'(t)| = |\\langle -\\sin t, \\cos t \\rangle| = 1', why: 'Unit speed, so $ds = dt$ on this curve.' },
            { tex: '\\int_C (2 + x^2y)\\,ds = \\int_0^{\\pi} (2 + \\cos^2 t\\sin t)\\cdot 1\\,dt', why: 'Substitute $x = \\cos t$, $y = \\sin t$ into $f$ and $ds = |\\vec{r}\\,\'(t)|\\,dt$.' },
            { tex: '= \\left[2t - \\frac{\\cos^3 t}{3}\\right]_0^{\\pi} = 2\\pi + \\frac{1}{3} + \\frac{1}{3} = 2\\pi + \\frac{2}{3}', why: 'For the second term substitute $w = \\cos t$, $dw = -\\sin t\\,dt$. At $t = \\pi$: $-\\tfrac{(-1)^3}{3} = \\tfrac{1}{3}$; at $t = 0$: subtracting $-\\tfrac{1}{3}$ adds $\\tfrac{1}{3}$.' },
          ],
          result: 'The curtain has area $2\\pi + \\tfrac{2}{3} \\approx 6.95$: the base height $2$ times the length $\\pi$, plus a bit for the bulge $x^2y$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'numeric',
      prompt: 'A straight wire runs from $(0, 0)$ to $(3, 4)$, and its density is $f(x, y) = x$ (mass per unit length). Find its mass $\\int_C x\\,ds$.',
      answer: '15/2',
      answerTex: '\\tfrac{15}{2}',
      hint: 'Use $\\vec{r}(t) = \\langle 3t, 4t \\rangle$ for $0 \\le t \\le 1$. Its speed is constant.',
      explanation: 'With $\\vec{r}(t) = \\langle 3t, 4t \\rangle$, $|\\vec{r}\\,\'(t)| = |\\langle 3, 4 \\rangle| = 5$, so $\\int_C x\\,ds = \\int_0^1 3t \\cdot 5\\,dt = 15 \\cdot \\tfrac{1}{2} = \\tfrac{15}{2}$. Check: the wire has length $5$ and the average of $x$ along it is $\\tfrac{3}{2}$, giving $5 \\cdot \\tfrac{3}{2} = \\tfrac{15}{2}$.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Space curves, pieces, and what does not matter',
      blocks: [
        {
          type: 'p',
          text: 'Nothing changes in three dimensions except one more component: for $\\vec{r}(t) = \\langle x(t), y(t), z(t) \\rangle$,',
        },
        {
          type: 'math',
          tex: '\\int_C f(x, y, z)\\,ds = \\int_a^b f(\\vec{r}(t))\\sqrt{x\'(t)^2 + y\'(t)^2 + z\'(t)^2}\\,dt',
        },
        {
          type: 'derivation',
          title: 'Evaluate $\\int_C y\\sin z\\,ds$ over one turn of the helix $\\vec{r}(t) = \\langle \\cos t, \\sin t, t \\rangle$',
          steps: [
            { tex: '\\vec{r}\\,\'(t) = \\langle -\\sin t, \\cos t, 1 \\rangle, \\quad |\\vec{r}\\,\'(t)| = \\sqrt{\\sin^2 t + \\cos^2 t + 1} = \\sqrt{2}', why: 'The helix also has constant speed, $\\sqrt{2}$.' },
            { tex: 'y\\sin z = \\sin t \\cdot \\sin t = \\sin^2 t', why: 'Substitute $y = \\sin t$ and $z = t$.' },
            { tex: '\\int_C y\\sin z\\,ds = \\sqrt{2}\\int_0^{2\\pi}\\sin^2 t\\,dt = \\sqrt{2}\\cdot\\pi', why: '$\\int_0^{2\\pi}\\sin^2 t\\,dt = \\pi$ (half the period length, from $\\sin^2 t = \\tfrac{1 - \\cos 2t}{2}$).' },
          ],
          result: '$\\int_C y\\sin z\\,ds = \\sqrt{2}\\,\\pi \\approx 4.44$.',
        },
        {
          type: 'list',
          items: [
            '**Piecewise curves.** If $C$ is made of smooth pieces $C_1, \\dots, C_n$ joined end to end, $\\int_C f\\,ds = \\int_{C_1} f\\,ds + \\dots + \\int_{C_n} f\\,ds$. Parametrize each piece separately.',
            '**Parametrization does not matter.** Tracing the same curve twice as fast doubles $|\\vec{r}\\,\'|$ but halves the parameter interval, and the two effects cancel. $\\int_C f\\,ds$ depends only on the curve and $f$.',
            '**Direction does not matter.** Each piece contributes $f \\cdot \\Delta s$, and lengths $\\Delta s$ are positive whichever way you walk. So $\\int_{-C} f\\,ds = \\int_C f\\,ds$, where $-C$ is $C$ traced backward.',
          ],
        },
        {
          type: 'callout',
          variant: 'analogy',
          title: 'Exposure along a route',
          text: 'Suppose $f(x, y)$ is the intensity of enemy observation, radiation or sensor coverage at each point of a map. A patrol walking route $C$ accumulates total exposure $\\int_C f\\,ds$: time in a dangerous area counts more, and a longer route counts more. Route planners minimize exactly this quantity. On a game\'s navigation grid, A* with per-cell costs is minimizing a discretized $\\int_C f\\,ds$, with $f$ the cell cost and $\\Delta s$ the step length.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'error',
      prompt: 'A student computes $\\int_C (x + y)\\,ds$, where $C$ is the segment from $(0, 0)$ to $(1, 1)$. Tap the first line that is wrong.',
      lines: [
        '$\\vec{r}(t) = \\langle t, t \\rangle$, $0 \\le t \\le 1$',
        '$f(\\vec{r}(t)) = t + t = 2t$',
        '$ds = dt$',
        '$\\int_C (x + y)\\,ds = \\int_0^1 2t\\,dt = 1$',
      ],
      errorLines: [3],
      explanation: 'The arc-length element is $ds = |\\vec{r}\\,\'(t)|\\,dt = |\\langle 1, 1 \\rangle|\\,dt = \\sqrt{2}\\,dt$, not $dt$. The parameter $t$ runs through an interval of length $1$, but the segment has length $\\sqrt{2}$. Correct value: $\\int_0^1 2t\\sqrt{2}\\,dt = \\sqrt{2} \\approx 1.414$. Only a unit-speed parametrization (like $\\langle \\cos t, \\sin t \\rangle$) has $ds = dt$.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'truefalse',
      prompt: 'If $-C$ denotes the curve $C$ traced in the opposite direction, then $\\int_{-C} f\\,ds = -\\int_C f\\,ds$.',
      answer: false,
      explanation: 'Line integrals with respect to arc length ignore direction: they add $f \\cdot \\Delta s$ with positive lengths $\\Delta s$, and a wire has the same mass whichever end you start from. So $\\int_{-C} f\\,ds = \\int_C f\\,ds$. The sign **does** flip for line integrals of vector fields, $\\int_C \\vec{F} \\cdot d\\vec{r}$, and for $\\int_C f\\,dx$ and $\\int_C f\\,dy$, as the next cards show.',
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'concept',
      title: 'Work: the line integral of a vector field',
      blocks: [
        {
          type: 'p',
          text: 'A constant force $\\vec{F}$ moving an object along a straight displacement $\\vec{d}$ does [[work]] $W = \\vec{F} \\cdot \\vec{d}$: only the component of force along the motion counts. Now let the force vary from point to point (a force field) and let the path curve. Chop the path into tiny nearly straight steps $\\Delta\\vec{r}$, use the dot product on each, and add.',
        },
        {
          type: 'derivation',
          title: 'From $\\vec{F} \\cdot \\vec{d}$ to a line integral',
          steps: [
            { tex: 'W \\approx \\sum_{i=1}^{n} \\vec{F}(\\vec{r}(t_i^*)) \\cdot \\Delta\\vec{r}_i', why: 'On each short piece the force is almost constant and the piece almost straight, so its work is almost a dot product.' },
            { tex: '\\Delta\\vec{r}_i = \\vec{r}(t_i) - \\vec{r}(t_{i-1}) \\approx \\vec{r}\\,\'(t_i^*)\\,\\Delta t', why: 'The displacement over a short time is velocity times time (linear approximation).' },
            { tex: 'W = \\int_a^b \\vec{F}(\\vec{r}(t)) \\cdot \\vec{r}\\,\'(t)\\,dt', why: 'Substitute and let $n \\to \\infty$: the Riemann sum becomes an integral in $t$.' },
            { tex: '= \\int_C \\vec{F} \\cdot \\vec{T}\\,ds', why: 'Since $\\vec{r}\\,\' = |\\vec{r}\\,\'|\\,\\vec{T}$ with $\\vec{T}$ the unit tangent, and $|\\vec{r}\\,\'|\\,dt = ds$. This form says: integrate the tangential component of the force along the curve.' },
          ],
          result: 'The line integral of $\\vec{F}$ along $C$ is $\\int_C \\vec{F} \\cdot d\\vec{r} = \\int_a^b \\vec{F}(\\vec{r}(t)) \\cdot \\vec{r}\\,\'(t)\\,dt$, where $d\\vec{r} = \\vec{r}\\,\'(t)\\,dt$.',
        },
        {
          type: 'graph',
          x: [-0.3, 1.6],
          y: [-0.3, 1.6],
          equal: true,
          height: 320,
          field: { x: 'x^2', y: '-x y', n: 11 },
          parametric: [{ x: 'cos(t)', y: 'sin(t)', t: [0, 'pi/2'], color: 'blue', label: '$C$: quarter circle, counterclockwise' }],
          segments: [
            { from: ['cos(s)', 'sin(s)'], to: ['cos(s) + 0.5cos(s)^2', 'sin(s) - 0.5cos(s)sin(s)'], color: 'red', arrow: true, label: 'F' },
            { from: ['cos(s)', 'sin(s)'], to: ['cos(s) - 0.5sin(s)', 'sin(s) + 0.5cos(s)'], color: 'green', arrow: true, label: 'r′' },
          ],
          points: [{ x: 'cos(s)', y: 'sin(s)', color: 'blue' }],
          sliders: [{ name: 's', min: 0, max: 1.57, step: 0.01, value: 0.6, label: '$t$', play: true }],
          readouts: [{ label: '$\\vec{F}(\\vec{r}(t)) \\cdot \\vec{r}\\,\'(t) = -2\\cos^2 t\\sin t =$', expr: '-2cos(s)^2 sin(s)', digits: 3 }],
          caption: 'The field $\\vec{F} = \\langle x^2, -xy \\rangle$ and the quarter circle from $(1, 0)$ to $(0, 1)$. The red force arrow always makes an obtuse angle with the green velocity arrow, so the integrand is never positive: the field resists this motion all the way.',
        },
        {
          type: 'derivation',
          title: 'Work done by $\\vec{F} = \\langle x^2, -xy \\rangle$ along the quarter circle',
          steps: [
            { tex: '\\vec{r}(t) = \\langle \\cos t, \\sin t \\rangle, \\quad \\vec{r}\\,\'(t) = \\langle -\\sin t, \\cos t \\rangle, \\quad 0 \\le t \\le \\tfrac{\\pi}{2}', why: 'Counterclockwise from $(1, 0)$ to $(0, 1)$.' },
            { tex: '\\vec{F}(\\vec{r}(t)) = \\langle \\cos^2 t,\\ -\\cos t\\sin t \\rangle', why: 'Substitute $x = \\cos t$, $y = \\sin t$ into $\\vec{F}$.' },
            { tex: '\\vec{F}(\\vec{r}(t)) \\cdot \\vec{r}\\,\'(t) = -\\cos^2 t\\sin t - \\cos^2 t\\sin t = -2\\cos^2 t\\sin t', why: 'Dot product, component by component.' },
            { tex: 'W = \\int_0^{\\pi/2} -2\\cos^2 t\\sin t\\,dt = \\left[\\frac{2\\cos^3 t}{3}\\right]_0^{\\pi/2} = 0 - \\frac{2}{3} = -\\frac{2}{3}', why: 'Substitute $w = \\cos t$: an antiderivative of $-2\\cos^2 t\\sin t$ is $\\tfrac{2}{3}\\cos^3 t$.' },
          ],
          result: 'The work is $-\\tfrac{2}{3}$: negative, as the obtuse angles in the picture predicted.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Why a circular orbit costs no work',
          text: 'For a satellite in a circular orbit, gravity points at the planet\'s center and the velocity is tangent to the circle, so $\\vec{F} \\cdot \\vec{T} = 0$ at every instant. The line integral of gravity along the orbit is $0$, and the work–energy theorem says the speed never changes. On an elliptical orbit $\\vec{F} \\cdot \\vec{T}$ is negative on the way out and positive on the way back, so the satellite slows down and speeds up.',
        },
      ],
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'expr',
      prompt: 'Let $\\vec{F}(x, y) = \\langle xy,\\ y^2 \\rangle$ and let $C$ be the parabola $\\vec{r}(t) = \\langle t, t^2 \\rangle$, $0 \\le t \\le 1$. Find the integrand $\\vec{F}(\\vec{r}(t)) \\cdot \\vec{r}\\,\'(t)$ as a function of $t$.',
      variables: ['t'],
      label: '$\\vec{F}(\\vec{r}(t)) \\cdot \\vec{r}\\,\'(t) =$',
      answer: 't^3 + 2t^5',
      answerTex: 't^3 + 2t^5',
      hint: '$\\vec{F}(\\vec{r}(t)) = \\langle t \\cdot t^2,\\ (t^2)^2 \\rangle$ and $\\vec{r}\\,\'(t) = \\langle 1, 2t \\rangle$.',
      explanation: 'Substitute: $\\vec{F}(\\vec{r}(t)) = \\langle t^3, t^4 \\rangle$. Differentiate: $\\vec{r}\\,\'(t) = \\langle 1, 2t \\rangle$. Dot product: $t^3 \\cdot 1 + t^4 \\cdot 2t = t^3 + 2t^5$. Notice that no $|\\vec{r}\\,\'(t)|$ appears: in $\\int_C \\vec{F} \\cdot d\\vec{r}$ the whole velocity vector is used, not just the speed.',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'numeric',
      prompt: 'Using the integrand you just found, compute the work $\\int_C \\vec{F} \\cdot d\\vec{r}$ done by $\\vec{F} = \\langle xy, y^2 \\rangle$ along $\\vec{r}(t) = \\langle t, t^2 \\rangle$ from $t = 0$ to $t = 1$.',
      label: '$W =$',
      answer: '7/12',
      answerTex: '\\tfrac{7}{12}',
      explanation: '$\\int_0^1 (t^3 + 2t^5)\\,dt = \\tfrac{1}{4} + \\tfrac{2}{6} = \\tfrac{1}{4} + \\tfrac{1}{3} = \\tfrac{7}{12} \\approx 0.583$. The work is positive because along this path, which climbs up and to the right, the field mostly points the same way the particle moves.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'concept',
      title: 'Orientation and the notation $\\int_C P\\,dx + Q\\,dy$',
      blocks: [
        {
          type: 'p',
          text: 'Write $\\vec{F} = \\langle P, Q \\rangle$ and $\\vec{r}\\,\'(t) = \\langle x\'(t), y\'(t) \\rangle$. The dot product splits into two pieces, and with $dx = x\'(t)\\,dt$, $dy = y\'(t)\\,dt$ you get a compact notation that textbooks and Green\'s theorem use constantly:',
        },
        {
          type: 'math',
          tex: '\\int_C \\vec{F} \\cdot d\\vec{r} = \\int_a^b \\big(P\\,x\'(t) + Q\\,y\'(t)\\big)\\,dt = \\int_C P\\,dx + Q\\,dy',
          caption: 'In 3D: $\\int_C P\\,dx + Q\\,dy + R\\,dz$.',
        },
        {
          type: 'p',
          text: 'Unlike $ds$, the differentials $dx$, $dy$ and $d\\vec{r}$ have **direction**. Reverse the curve and every velocity $\\vec{r}\\,\'(t)$ flips sign, so',
        },
        {
          type: 'theorem',
          name: 'Orientation',
          tex: '\\int_{-C} \\vec{F} \\cdot d\\vec{r} = -\\int_C \\vec{F} \\cdot d\\vec{r}, \\qquad \\int_{-C} f\\,ds = \\int_C f\\,ds',
          text: 'Work done walking a path backward is the negative of the work walking it forward. Always parametrize in the direction the problem specifies.',
        },
        {
          type: 'graph',
          x: [-6, 5],
          y: [-4, 3],
          equal: true,
          height: 320,
          field: { x: 'y^2', y: 'x', n: 13 },
          parametric: [
            { x: '-5 + 5t', y: '-3 + 5t', t: [0, 1], color: 'blue', label: '$C_1$: straight segment' },
            { x: '4 - t^2', y: 't', t: [-3, 2], color: 'red', label: '$C_2$: arc of $x = 4 - y^2$' },
          ],
          points: [
            { x: -5, y: -3, label: 'A(−5, −3)' },
            { x: 0, y: 2, label: 'B(0, 2)' },
          ],
          caption: 'Two paths from $A$ to $B$ through the field $\\langle y^2, x \\rangle$. The work along them is different: this field cares about the route.',
        },
        {
          type: 'derivation',
          title: 'Evaluate $\\int_C y^2\\,dx + x\\,dy$ along both paths from $(-5, -3)$ to $(0, 2)$',
          steps: [
            { tex: 'C_1: \\ x = -5 + 5t,\\ y = -3 + 5t,\\ \\ dx = dy = 5\\,dt,\\ \\ 0 \\le t \\le 1', why: 'The segment: start point plus $t$ times the displacement $\\langle 5, 5 \\rangle$.' },
            { tex: '\\int_{C_1} = \\int_0^1 \\big((5t - 3)^2 + (5t - 5)\\big)\\,5\\,dt = 5\\int_0^1 (25t^2 - 25t + 4)\\,dt = -\\frac{5}{6}', why: 'Expand: $(5t - 3)^2 + 5t - 5 = 25t^2 - 30t + 9 + 5t - 5$. Then $5\\left(\\tfrac{25}{3} - \\tfrac{25}{2} + 4\\right) = 5\\left(-\\tfrac{1}{6}\\right)$.' },
            { tex: 'C_2: \\ x = 4 - y^2,\\ y = y,\\ \\ dx = -2y\\,dy,\\ \\ -3 \\le y \\le 2', why: 'Use $y$ itself as the parameter; going from $A$ to $B$ means $y$ increases from $-3$ to $2$.' },
            { tex: '\\int_{C_2} = \\int_{-3}^{2} \\big(y^2(-2y) + (4 - y^2)\\big)\\,dy = \\left[-\\frac{y^4}{2} - \\frac{y^3}{3} + 4y\\right]_{-3}^{2} = \\frac{245}{6}', why: 'At $y = 2$: $-8 - \\tfrac{8}{3} + 8 = -\\tfrac{8}{3}$. At $y = -3$: $-\\tfrac{81}{2} + 9 - 12 = -\\tfrac{87}{2}$. Difference: $-\\tfrac{8}{3} + \\tfrac{87}{2} = \\tfrac{245}{6}$.' },
          ],
          result: 'Same endpoints, different answers: $-\\tfrac{5}{6}$ versus $\\tfrac{245}{6}$. For most fields the line integral depends on the path. The next lesson identifies the special fields for which it does not.',
        },
      ],
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'mcq',
      prompt: 'A particle moves along the dashed arc from $(-2, 0)$ over the top to $(2, 0)$ (clockwise) through the rotation field $\\vec{F} = \\langle -y, x \\rangle$. What is the sign of the work $\\int_C \\vec{F} \\cdot d\\vec{r}$?',
      graph: {
        type: 'graph',
        x: [-3, 3],
        y: [-1.5, 3],
        equal: true,
        field: { x: '-y', y: 'x', n: 11 },
        parametric: [{ x: '-2cos(t)', y: '2sin(t)', t: [0, 'pi'], color: 'red', dashed: true, label: 'path $C$' }],
        segments: [{ from: [1.7, 1.05], to: [1.95, 0.45], color: 'red', arrow: true }],
        points: [
          { x: -2, y: 0, label: 'start' },
          { x: 2, y: 0, label: 'end' },
        ],
      },
      options: [
        { text: 'Negative', correct: true, why: 'The field swirls counterclockwise but the particle moves clockwise, so $\\vec{F}$ points against the motion at every point: $\\vec{F} \\cdot \\vec{T} < 0$ all along $C$.' },
        { text: 'Positive', why: 'That would be true for the counterclockwise trip along the same arc. Reversing direction flips the sign.' },
        { text: 'Zero, because the endpoints are at the same height', why: 'Line integrals of vector fields do not depend on heights or on endpoints alone; this field is not a gradient field.' },
        { text: 'It cannot be determined without choosing a parametrization', why: 'Any parametrization tracing the arc in the same direction gives the same work. Only the direction matters, and it is given.' },
      ],
      explanation: 'With $\\vec{r}(t) = \\langle -2\\cos t, 2\\sin t \\rangle$, $0 \\le t \\le \\pi$: $\\vec{F}(\\vec{r}(t)) = \\langle -2\\sin t, -2\\cos t \\rangle$ and $\\vec{r}\\,\'(t) = \\langle 2\\sin t, 2\\cos t \\rangle$, so the integrand is $-4\\sin^2 t - 4\\cos^2 t = -4$ and the work is $-4\\pi$. The field is exactly opposite to the motion everywhere.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'Work in space, computed by summation',
      blocks: [
        {
          type: 'p',
          text: 'Here is a 3D example, followed by the way a program would do it: walk along the path in short chords, dot the field (sampled at the chord\'s midpoint) with the chord, and add. That is the Riemann sum from the work derivation, coded directly.',
        },
        {
          type: 'plot3d',
          x: [-1.5, 1.5],
          y: [-1.5, 1.5],
          z: [0, 6.3],
          view: { azimuth: 30, elevation: 15 },
          field: { x: '-y', y: 'x', z: 'z/3', n: 4, color: 'gray' },
          curves: [{ x: 'cos(t)', y: 'sin(t)', z: 't', t: [0, '2pi'], color: 'blue', label: 'helix $\\langle \\cos t, \\sin t, t \\rangle$' }],
          vectors: [
            { from: ['cos(s)', 'sin(s)', 's'], to: ['cos(s) - 0.5sin(s)', 'sin(s) + 0.5cos(s)', 's + 0.5s/3'], color: 'red', label: 'F (scaled)' },
            { from: ['cos(s)', 'sin(s)', 's'], to: ['cos(s) - 0.5sin(s)', 'sin(s) + 0.5cos(s)', 's + 0.5'], color: 'green', label: 'r′' },
          ],
          sliders: [{ name: 's', min: 0, max: 6.28, step: 0.02, value: 2, label: '$t$', play: true }],
          readouts: [{ label: '$\\vec{F} \\cdot \\vec{r}\\,\' = 1 + t =$', expr: '1 + s', digits: 3 }],
          caption: 'The field $\\vec{F} = \\langle -y, x, z \\rangle$ (arrows drawn with the vertical part scaled down to fit) along one turn of the helix. Horizontally the field swirls with the helix; vertically it pushes up harder the higher you go, so $\\vec{F} \\cdot \\vec{r}\\,\' = 1 + t$ keeps growing.',
        },
        {
          type: 'derivation',
          title: 'Work done by $\\vec{F} = \\langle -y, x, z \\rangle$ along the helix, $0 \\le t \\le 2\\pi$',
          steps: [
            { tex: '\\vec{F}(\\vec{r}(t)) = \\langle -\\sin t, \\cos t, t \\rangle, \\quad \\vec{r}\\,\'(t) = \\langle -\\sin t, \\cos t, 1 \\rangle', why: 'Substitute $x = \\cos t$, $y = \\sin t$, $z = t$; differentiate the path.' },
            { tex: '\\vec{F} \\cdot \\vec{r}\\,\' = \\sin^2 t + \\cos^2 t + t = 1 + t', why: 'Dot product.' },
            { tex: 'W = \\int_0^{2\\pi} (1 + t)\\,dt = 2\\pi + \\frac{(2\\pi)^2}{2} = 2\\pi + 2\\pi^2 \\approx 26.0224', why: 'Elementary integral.' },
          ],
        },
        {
          type: 'code',
          title: 'work.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdio>

struct Vec3 { double x, y, z; };
Vec3 operator-(Vec3 a, Vec3 b) { return {a.x - b.x, a.y - b.y, a.z - b.z}; }
Vec3 operator+(Vec3 a, Vec3 b) { return {a.x + b.x, a.y + b.y, a.z + b.z}; }
Vec3 operator*(double s, Vec3 a) { return {s * a.x, s * a.y, s * a.z}; }
double dot(Vec3 a, Vec3 b) { return a.x * b.x + a.y * b.y + a.z * b.z; }

Vec3 F(Vec3 p) { return {-p.y, p.x, p.z}; }                          // force field
Vec3 r(double t) { return {std::cos(t), std::sin(t), t}; }          // helix path

// Work = sum of F(midpoint) . (displacement) over n small chords of the path.
double work(int n, double a, double b) {
    double W = 0;
    for (int i = 0; i < n; ++i) {
        Vec3 p = r(a + (b - a) * i / n), q = r(a + (b - a) * (i + 1) / n);
        W += dot(F(0.5 * (p + q)), q - p);
    }
    return W;
}

int main() {
    const double pi = std::acos(-1.0);
    for (int n = 8; n <= 8192; n *= 8)
        std::printf("n = %4d  W = %.6f\\n", n, work(n, 0, 2 * pi));
    std::printf("exact     W = %.6f\\n", 2 * pi + 2 * pi * pi);
}`,
          output: `n =    8  W = 25.396063
n =   64  W = 26.012306
n =  512  W = 26.022236
n = 4096  W = 26.022392
exact     W = 26.022394`,
          annotations: [
            { lines: '10-11', text: 'The field and the path are plain functions. Swap in any others; nothing else changes.' },
            { lines: 17, text: 'Two consecutive points on the path. The chord $q - p$ plays the role of $\\Delta\\vec{r}$, so no derivative $\\vec{r}\\,\'$ is needed.' },
            { lines: 18, text: 'Force at the chord\'s midpoint dotted with the chord: the work of one tiny straight step.' },
          ],
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Where this shows up',
          text: 'Games accumulate work-like quantities along paths all the time: the energy a wind field adds to a glider along its flight path, the drag a projectile loses through a medium, the "effort" of a route through terrain. The chord-sum loop above is the standard approach whenever the path comes from simulation data rather than a formula.',
        },
      ],
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'order',
      prompt: 'Put the steps for computing $\\int_C \\vec{F} \\cdot d\\vec{r}$ in order.',
      lines: [
        'Parametrize $C$ as $\\vec{r}(t)$, $a \\le t \\le b$, in the direction of travel',
        'Compute $\\vec{r}\\,\'(t)$ and substitute $\\vec{r}(t)$ into $\\vec{F}$',
        'Form the dot product $\\vec{F}(\\vec{r}(t)) \\cdot \\vec{r}\\,\'(t)$',
        'Integrate it with respect to $t$ from $a$ to $b$',
      ],
      distractors: ['Multiply by the speed $|\\vec{r}\\,\'(t)|$'],
      explanation: 'Everything depends on the parametrization, so it comes first; its direction fixes the sign of the answer. Differentiating the path and substituting into the field can be done in either order, so they share a step. Then dot and integrate. The distractor mixes in the scalar line integral: $\\int_C f\\,ds$ uses the speed $|\\vec{r}\\,\'|$, but $\\int_C \\vec{F} \\cdot d\\vec{r}$ already uses the full velocity vector $\\vec{r}\\,\'$ in the dot product.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'fill',
      prompt: 'Complete the two conversions from a curve integral to a $t$-integral.',
      template: 'For $\\vec{r}(t)$ with $a \\le t \\le b$: $ds =$ ___ $dt$ and $d\\vec{r} =$ ___ $dt$. Reversing the direction of $C$ changes the sign of ___ .',
      blanks: [{ answers: ['$|\\vec{r}\\,\'(t)|$'] }, { answers: ['$\\vec{r}\\,\'(t)$'] }, { answers: ['$\\int_C \\vec{F} \\cdot d\\vec{r}$'] }],
      wordBank: ['$|\\vec{r}\\,\'(t)|$', '$\\vec{r}\\,\'(t)$', '$\\int_C \\vec{F} \\cdot d\\vec{r}$', '$\\int_C f\\,ds$', '$\\vec{r}(t)$', '$1$'],
      explanation: 'The arc-length element $ds$ is a positive length, the speed times $dt$. The vector element $d\\vec{r}$ is a small displacement, the velocity times $dt$, and it carries a direction. That is why reversing $C$ flips $\\int_C \\vec{F} \\cdot d\\vec{r}$ but leaves $\\int_C f\\,ds$ unchanged.',
    },
  ],
  takeaways: [
    '$\\int_C f\\,ds = \\int_a^b f(\\vec{r}(t))\\,|\\vec{r}\\,\'(t)|\\,dt$: mass of a wire, area of a curtain, total exposure along a route. It ignores direction and parametrization.',
    '$\\int_C \\vec{F} \\cdot d\\vec{r} = \\int_a^b \\vec{F}(\\vec{r}(t)) \\cdot \\vec{r}\\,\'(t)\\,dt = \\int_C \\vec{F} \\cdot \\vec{T}\\,ds$: the work done by a force field, the integral of the tangential component.',
    'Reversing $C$ flips the sign of $\\int_C \\vec{F} \\cdot d\\vec{r}$, $\\int_C f\\,dx$ and $\\int_C f\\,dy$, but not of $\\int_C f\\,ds$.',
    '$\\int_C \\vec{F} \\cdot d\\vec{r} = \\int_C P\\,dx + Q\\,dy\\ (+\\,R\\,dz)$.',
    'In general the work depends on the path, not just the endpoints; numerically it is a sum of $\\vec{F}(\\text{midpoint}) \\cdot \\Delta\\vec{r}$ over short chords.',
  ],
  reading: [
    {
      title: 'OpenStax Calculus Volume 3 — 6.2 Line Integrals',
      url: 'https://openstax.org/details/books/calculus-volume-3',
      source: 'openstax',
      note: 'Section 6.2 covers scalar and vector line integrals, orientation, and flux across a plane curve.',
    },
    {
      title: "Paul's Online Notes — Calculus III",
      url: 'https://tutorial.math.lamar.edu/Classes/CalcIII/CalcIII.aspx',
      source: 'other',
      note: 'The Line Integrals chapter splits the topic into small sections with fully worked examples, including line integrals with respect to $x$ and $y$.',
    },
    {
      title: 'Khan Academy — Multivariable calculus',
      url: 'https://www.khanacademy.org/math/multivariable-calculus',
      source: 'khan',
      note: 'The line integrals videos use the curtain picture for $\\int_C f\\,ds$ and derive the work integral.',
    },
    {
      title: 'Wikipedia — Line integral',
      url: 'https://en.wikipedia.org/wiki/Line_integral',
      source: 'wikipedia',
      note: 'Has an animation of a vector line integral as accumulating the tangential component along a curve.',
    },
  ],
};
