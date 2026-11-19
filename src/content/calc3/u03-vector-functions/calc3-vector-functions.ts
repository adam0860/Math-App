import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'calc3-vector-functions',
  title: 'Space Curves and Their Derivatives',
  summary: 'A vector-valued function traces a curve through space. Differentiate and integrate it one component at a time, and its derivative points along the curve.',
  minutes: 18,
  objectives: [
    'Describe a space curve with a vector-valued function $\\vec r(t) = \\langle f(t), g(t), h(t) \\rangle$ and find its domain',
    'Recognize helices and find a surface a curve lies on by eliminating $t$',
    'Parametrize the curve where two surfaces intersect',
    'Compute limits, derivatives, unit tangent vectors and tangent lines of vector functions',
    'Use the derivative rules for dot and cross products, and integrate vector functions with an initial condition',
  ],
  steps: [
    // 1 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'From parametric curves to space curves',
      blocks: [
        {
          type: 'p',
          text: 'In Calculus II you traced plane curves with [[parametric-equations]]: $x = f(t)$, $y = g(t)$. Add a third equation $z = h(t)$ and the point leaves the plane: as $t$ runs through an interval, $(f(t), g(t), h(t))$ sweeps out a **space curve**, such as a drone\'s flight path, a spiral staircase or a camera rail.',
        },
        {
          type: 'p',
          text: 'Rather than juggling three equations, package them as one function whose output is a [[vector]]: for each input $t$ it returns the [[position-vector]] of the point on the curve.',
        },
        {
          type: 'definition',
          term: 'Vector-valued function',
          text: 'A function $\\vec r(t) = \\langle f(t), g(t), h(t) \\rangle = f(t)\\,\\mathbf{i} + g(t)\\,\\mathbf{j} + h(t)\\,\\mathbf{k}$ whose inputs are real numbers and whose outputs are vectors in $\\mathbb{R}^3$. The real functions $f$, $g$, $h$ are its **component functions**. Its domain is the set of $t$ where **all three** components are defined. The [[calc3-vector-function|vector function]] traces a [[calc3-space-curve|space curve]].',
        },
        {
          type: 'p',
          text: 'Notation: this course writes the standard unit vectors as bold $\\mathbf{i}, \\mathbf{j}, \\mathbf{k}$ and vectors in angle brackets, so $\\langle 2, -1, 3 \\rangle = 2\\mathbf{i} - \\mathbf{j} + 3\\mathbf{k}$. Press ▶ below and watch the position vector sweep along a helix.',
        },
        {
          type: 'plot3d',
          x: [-2.5, 2.5],
          y: [-2.5, 2.5],
          z: [0, 6.5],
          curves: [{ x: '2cos(t)', y: '2sin(t)', z: 't/2', t: [0, '4pi'], label: '$\\vec r(t) = \\langle 2\\cos t, 2\\sin t, t/2 \\rangle$', color: 'blue' }],
          points: [{ x: '2cos(s)', y: '2sin(s)', z: 's/2', label: 'r(t)', color: 'red' }],
          vectors: [{ from: [0, 0, 0], to: ['2cos(s)', '2sin(s)', 's/2'], color: 'red' }],
          sliders: [{ name: 's', min: 0, max: 12.5, step: 0.05, value: 2, label: 'parameter $t$', play: true, speed: 1.5 }],
          readouts: [
            { label: '$x = 2\\cos t =$', expr: '2cos(s)' },
            { label: '$y = 2\\sin t =$', expr: '2sin(s)' },
            { label: '$z = t/2 =$', expr: 's/2' },
          ],
          view: { azimuth: 35, elevation: 20 },
          caption: 'The red arrow is the position vector $\\vec r(t)$: its tip *is* the moving point. The curve is the set of all the tips.',
        },
        {
          type: 'derivation',
          title: 'Domain of $\\vec r(t) = \\left\\langle \\sqrt{4 - t^2},\\ \\ln t,\\ \\frac{1}{t - 1} \\right\\rangle$',
          steps: [
            { tex: '\\sqrt{4 - t^2} \\text{ needs } 4 - t^2 \\ge 0 \\iff -2 \\le t \\le 2', why: 'A square root needs a nonnegative radicand.' },
            { tex: '\\ln t \\text{ needs } t > 0', why: 'The natural log is only defined for positive inputs.' },
            { tex: '\\frac{1}{t - 1} \\text{ needs } t \\ne 1', why: 'No division by zero.' },
            { tex: '\\text{domain} = (0, 1) \\cup (1, 2]', why: 'The vector exists only when all three components do, so intersect the three conditions.' },
          ],
          result: 'The domain of a vector function is the **intersection** of its components\' domains.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'A path is a function that returns a Vec3',
          text: 'In an engine, a camera rail, a patrol route or a missile\'s planned trajectory is literally `Vec3 path(float t)`: you feed in a time or a parameter and get a position back. Everything in this unit (tangent vectors to orient the object, arc length for constant speed, curvature for banking) is calculus on that one function.',
        },
      ],
    },
    // 2
    {
      kind: 'mcq',
      prompt: 'What is the domain of $\\vec r(t) = \\left\\langle \\ln(9 - t^2),\\ \\sqrt{t},\\ \\dfrac{1}{t - 2} \\right\\rangle$?',
      options: [
        { text: '$[0, 3)$', why: 'This misses the third component: $\\frac{1}{t - 2}$ is undefined at $t = 2$.' },
        { text: '$(-3, 2) \\cup (2, 3)$', why: 'This ignores $\\sqrt{t}$, which needs $t \\ge 0$.' },
        { text: '$[0, 2) \\cup (2, 3)$', correct: true, why: 'All three conditions: $-3 < t < 3$, $t \\ge 0$ and $t \\ne 2$.' },
        { text: '$(0, 2) \\cup (2, 3]$', why: '$\\sqrt{0} = 0$ is fine, so $t = 0$ is included; and $\\ln(9 - 9) = \\ln 0$ is undefined, so $t = 3$ is excluded.' },
      ],
      explanation: '$\\ln(9 - t^2)$ needs $9 - t^2 > 0$, so $-3 < t < 3$. $\\sqrt{t}$ needs $t \\ge 0$. $\\frac{1}{t - 2}$ needs $t \\ne 2$. Intersecting: $[0, 2) \\cup (2, 3)$.',
    },
    // 3 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Reading a space curve: helices and curves on surfaces',
      blocks: [
        {
          type: 'p',
          text: 'The most important space curve is the **[[calc3-helix|helix]]** $\\vec r(t) = \\langle a\\cos t, a\\sin t, bt \\rangle$. Its first two components satisfy $x^2 + y^2 = a^2$, so every point lies on the cylinder of radius $a$ about the $z$-axis. Meanwhile $z = bt$ climbs steadily, so the curve winds around the cylinder like a spring, rising $2\\pi b$ per turn (the **pitch**).',
        },
        {
          type: 'plot3d',
          x: [-2.5, 2.5],
          y: [-2.5, 2.5],
          z: [0, 13],
          parametricSurfaces: [{ x: '2cos(u)', y: '2sin(u)', z: 'v', u: [0, '2pi'], v: [0, 13], color: 'gray', opacity: 0.22 }],
          curves: [{ x: '2cos(t)', y: '2sin(t)', z: 'b*t', t: [0, '4pi'], color: 'blue', label: '$\\langle 2\\cos t, 2\\sin t, bt \\rangle$' }],
          sliders: [{ name: 'b', min: 0.1, max: 1, step: 0.05, value: 0.5, label: 'climb rate $b$' }],
          readouts: [{ label: 'pitch (rise per turn) $2\\pi b =$', expr: '2pi*b' }],
          view: { azimuth: 30, elevation: 18 },
          caption: 'Two turns of a helix on the cylinder $x^2 + y^2 = 4$. Increasing $b$ stretches the spring; $b = 0$ would collapse it onto a circle.',
        },
        {
          type: 'p',
          text: 'That trick generalizes: **to find a surface a curve lies on, combine the components so that $t$ disappears.** The identity $\\cos^2 t + \\sin^2 t = 1$ is the usual tool.',
        },
        {
          type: 'derivation',
          title: 'The conical spiral $\\vec r(t) = \\langle t\\cos t, t\\sin t, t \\rangle$',
          steps: [
            { tex: 'x^2 + y^2 = t^2\\cos^2 t + t^2 \\sin^2 t', why: 'Square the first two components and add them.' },
            { tex: '= t^2(\\cos^2 t + \\sin^2 t) = t^2', why: 'Factor out $t^2$ and use the Pythagorean identity.' },
            { tex: '= z^2', why: 'The third component is $z = t$, so $t^2 = z^2$.' },
          ],
          result: 'Every point satisfies $z^2 = x^2 + y^2$: the curve spirals up the cone, its radius $|t|$ growing as it climbs.',
        },
        {
          type: 'p',
          text: 'Another classic is the **twisted cubic** $\\vec r(t) = \\langle t, t^2, t^3 \\rangle$. Since $y = x^2$ and $z = x^3$, it lies on both the parabolic cylinder $y = x^2$ and the cubic cylinder $z = x^3$: it is their curve of intersection. You will meet it again below.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the helix is everywhere',
          text: 'A helix is what you get when you combine uniform rotation with uniform translation along the axis. That is exactly the motion of a point on a screw being driven in, a bullet\'s spin in a rifled barrel, a charged particle in a uniform magnetic field, and a corkscrewing missile in a game. Constant rotation plus constant drift produces a helix every time.',
        },
      ],
    },
    // 4
    {
      kind: 'mcq',
      prompt: 'On which surface does the curve $\\vec r(t) = \\langle t\\cos t,\\ t\\sin t,\\ t^2 \\rangle$ lie?',
      options: [
        { text: 'The cone $z^2 = x^2 + y^2$', why: 'Here $x^2 + y^2 = t^2$ but $z^2 = t^4$, so they are not equal (except at $t = 0, \\pm 1$).' },
        { text: 'The paraboloid $z = x^2 + y^2$', correct: true, why: '$x^2 + y^2 = t^2(\\cos^2 t + \\sin^2 t) = t^2 = z$.' },
        { text: 'The cylinder $x^2 + y^2 = 1$', why: 'The distance from the $z$-axis is $|t|$, which changes, so the curve is not on a fixed cylinder.' },
        { text: 'The sphere $x^2 + y^2 + z^2 = 1$', why: '$x^2 + y^2 + z^2 = t^2 + t^4$, which is not constant.' },
      ],
      explanation: 'Eliminate $t$: $x^2 + y^2 = t^2\\cos^2 t + t^2\\sin^2 t = t^2$, and $z = t^2$, so $z = x^2 + y^2$. The curve spirals up the paraboloid, getting wider as it climbs.',
    },
    // 5 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Curves of intersection',
      blocks: [
        {
          type: 'p',
          text: 'Two surfaces usually meet in a curve. Describing that curve by a vector function is a skill you will use constantly, because later units integrate along such curves. The recipe: **parametrize the simpler surface, then substitute into the other equation** to find the remaining coordinate.',
        },
        {
          type: 'derivation',
          title: 'The cylinder $x^2 + y^2 = 1$ meets the plane $y + z = 2$',
          steps: [
            { tex: 'x = \\cos t, \\quad y = \\sin t, \\quad 0 \\le t \\le 2\\pi', why: 'Every point of the cylinder has $(x, y)$ on the unit circle, and this pair traces that circle once.' },
            { tex: 'z = 2 - y = 2 - \\sin t', why: 'Solve the plane\'s equation for $z$ and substitute $y = \\sin t$.' },
            { tex: '\\vec r(t) = \\langle \\cos t, \\sin t, 2 - \\sin t \\rangle', why: 'Assemble the three components.' },
            { tex: '\\cos^2 t + \\sin^2 t = 1 \\ \\checkmark, \\qquad \\sin t + (2 - \\sin t) = 2 \\ \\checkmark', why: 'Check: the point satisfies both equations for every $t$.' },
          ],
          result: 'A tilted plane slices a cylinder in an **ellipse**; here it is traced once as $t$ goes from $0$ to $2\\pi$.',
        },
        {
          type: 'plot3d',
          x: [-1.5, 1.5],
          y: [-1.5, 1.5],
          z: [0, 3.5],
          equal: true,
          surfaces: [{ expr: '2 - y', color: 'green', opacity: 0.45, label: 'plane $y + z = 2$' }],
          parametricSurfaces: [{ x: 'cos(u)', y: 'sin(u)', z: 'v', u: [0, '2pi'], v: [0, 3.5], color: 'gray', opacity: 0.3, label: 'cylinder $x^2 + y^2 = 1$' }],
          curves: [{ x: 'cos(t)', y: 'sin(t)', z: '2 - sin(t)', t: [0, '2pi'], color: 'red', label: '$\\vec r(t)$' }],
          points: [{ x: 'cos(s)', y: 'sin(s)', z: '2 - sin(s)', color: 'red' }],
          sliders: [{ name: 's', min: 0, max: 6.28, step: 0.02, value: 0.8, label: '$t$', play: true }],
          view: { azimuth: 50, elevation: 22 },
          caption: 'The red ellipse lies on both surfaces. Drag to turn the plot: from above, the curve looks like the unit circle, because its $x$ and $y$ come from the cylinder.',
        },
        {
          type: 'derivation',
          title: 'The paraboloid $z = 4x^2 + y^2$ meets the parabolic cylinder $y = x^2$',
          steps: [
            { tex: 'x = t, \\quad y = t^2', why: 'The cylinder $y = x^2$ is parametrized most simply by letting $x$ itself be the parameter.' },
            { tex: 'z = 4t^2 + (t^2)^2 = 4t^2 + t^4', why: 'Substitute into the paraboloid.' },
            { tex: '\\vec r(t) = \\langle t, t^2, 4t^2 + t^4 \\rangle, \\quad t \\in \\mathbb{R}', why: 'Every real $t$ gives a point of the intersection, and every point of the intersection has this form with $t = x$.' },
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Parametrizations are not unique',
          text: '$\\langle \\cos 2t, \\sin 2t, 2 - \\sin 2t \\rangle$ for $0 \\le t \\le \\pi$ traces the same ellipse twice as fast. Both are correct. What matters is that the point satisfies both equations and covers the whole curve. Trig parametrizations of circles also avoid the trap of solving $y = \\pm\\sqrt{1 - x^2}$, which forces you to split the curve into two halves.',
        },
      ],
    },
    // 6
    {
      kind: 'expr',
      prompt: 'The cylinder $x^2 + y^2 = 9$ meets the saddle surface $z = xy$. Using $x = 3\\cos t$ and $y = 3\\sin t$, find the $z$-component of the curve of intersection.',
      hint: 'Substitute both into $z = xy$.',
      label: '$z(t) =$',
      variables: ['t'],
      answer: '9cos(t)sin(t)',
      answerTex: '9\\cos t\\sin t = \\tfrac92 \\sin 2t',
      explanation: '$z = xy = (3\\cos t)(3\\sin t) = 9\\cos t\\sin t$, which you may also write as $\\frac92 \\sin 2t$. So $\\vec r(t) = \\langle 3\\cos t, 3\\sin t, 9\\cos t\\sin t \\rangle$, $0 \\le t \\le 2\\pi$. As the point goes once around the cylinder, its height oscillates twice, like the rim of a saddle (or a Pringles chip).',
    },
    // 7 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Limits and the derivative of a vector function',
      blocks: [
        {
          type: 'p',
          text: 'Calculus on $\\vec r(t)$ works one component at a time. The limit of a vector function is defined by taking the limit of each component:',
        },
        {
          type: 'math',
          tex: '\\lim_{t \\to a} \\vec r(t) = \\left\\langle \\lim_{t \\to a} f(t),\\ \\lim_{t \\to a} g(t),\\ \\lim_{t \\to a} h(t) \\right\\rangle',
          caption: 'provided all three limits exist. $\\vec r$ is **continuous** at $a$ when $\\lim_{t \\to a} \\vec r(t) = \\vec r(a)$, that is, when all three components are continuous there.',
        },
        {
          type: 'p',
          text: 'For example, $\\displaystyle\\lim_{t \\to 0} \\left\\langle 1 + t^3,\\ te^{-t},\\ \\frac{\\sin t}{t} \\right\\rangle = \\langle 1, 0, 1 \\rangle$, using $\\frac{\\sin t}{t} \\to 1$ from Calculus I. A continuous vector function traces a curve with no breaks.',
        },
        {
          type: 'p',
          text: 'The [[derivative]] uses the same difference quotient as always. The numerator $\\vec r(t + h) - \\vec r(t)$ is now a **secant vector** from one point on the curve to a nearby one. Dividing by $h$ rescales it, and as $h \\to 0$ it turns to point along the curve:',
        },
        {
          type: 'math',
          tex: '\\vec r\\,\'(t) = \\frac{d\\vec r}{dt} = \\lim_{h \\to 0} \\frac{\\vec r(t + h) - \\vec r(t)}{h}',
        },
        {
          type: 'plot3d',
          x: [-1.3, 1.8],
          y: [-0.2, 2],
          z: [-1.8, 2],
          curves: [{ x: 't', y: 't^2', z: 't^3', t: [-1.2, 1.25], color: 'blue', label: 'twisted cubic $\\langle t, t^2, t^3 \\rangle$' }],
          points: [
            { x: 'a', y: 'a^2', z: 'a^3', color: 'red' },
            { x: 'a + h', y: '(a + h)^2', z: '(a + h)^3', label: 'r(a+h)', color: 'orange' },
          ],
          vectors: [
            { from: ['a', 'a^2', 'a^3'], to: ['a + 0.5', 'a^2 + 0.5*((a + h)^2 - a^2)/h', 'a^3 + 0.5*((a + h)^3 - a^3)/h'], color: 'orange', label: 'secant / h' },
            { from: ['a', 'a^2', 'a^3'], to: ['a + 0.5', 'a^2 + a', 'a^3 + 1.5a^2'], color: 'red', label: "r'(a)" },
          ],
          sliders: [
            { name: 'a', min: -0.8, max: 0.6, step: 0.05, value: 0.3, label: 'base point $a$' },
            { name: 'h', min: 0.05, max: 1, step: 0.05, value: 0.8, label: 'step $h$' },
          ],
          readouts: [{ label: '$\\left| \\frac{\\vec r(a+h) - \\vec r(a)}{h} - \\vec r\\,\'(a) \\right| =$', expr: 'sqrt(((a + h)^2 - a^2 - 2a*h)^2/h^2 + ((a + h)^3 - a^3 - 3a^2*h)^2/h^2)' }],
          view: { azimuth: -65, elevation: 15 },
          caption: 'Both arrows are drawn at half length. Slide $h$ toward $0$: the orange secant arrow swings onto the red tangent vector $\\vec r\\,\'(a) = \\langle 1, 2a, 3a^2 \\rangle$ and the gap in the readout shrinks to $0$.',
        },
        {
          type: 'theorem',
          name: 'Differentiate component by component',
          tex: '\\vec r\\,\'(t) = \\langle f\'(t), g\'(t), h\'(t) \\rangle',
          text: 'if $f$, $g$, $h$ are differentiable. This follows from the definition: the difference quotient of $\\vec r$ has the difference quotients of $f$, $g$, $h$ as its components, and limits are taken componentwise.',
        },
      ],
    },
    // 8
    {
      kind: 'numeric',
      prompt: 'For $\\vec r(t) = \\left\\langle 2t,\\ t^2,\\ \\tfrac13 t^3 \\right\\rangle$, find the $z$-component of the unit tangent vector $\\vec T(1)$.',
      hint: 'Compute $\\vec r\\,\'(1)$, then divide by its length.',
      label: '$T_z(1) =$',
      answer: '1/3',
      answerTex: '\\frac13',
      explanation: '$\\vec r\\,\'(t) = \\langle 2, 2t, t^2 \\rangle$, so $\\vec r\\,\'(1) = \\langle 2, 2, 1 \\rangle$ with length $\\sqrt{4 + 4 + 1} = 3$. Then $\\vec T(1) = \\left\\langle \\frac23, \\frac23, \\frac13 \\right\\rangle$, and its $z$-component is $\\frac13$. (In fact $|\\vec r\\,\'(t)| = \\sqrt{4 + 4t^2 + t^4} = t^2 + 2$ for every $t$; you will use that in the next lesson.)',
    },
    // 9 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Tangent vectors, tangent lines and the derivative rules',
      blocks: [
        {
          type: 'p',
          text: 'When $\\vec r\\,\'(t) \\ne \\vec 0$, it is a **tangent vector**: it points along the curve in the direction of increasing $t$. Its length depends on the parametrization, so for pure direction divide by the length to get the **[[calc3-unit-tangent|unit tangent vector]]**:',
        },
        {
          type: 'math',
          tex: '\\vec T(t) = \\frac{\\vec r\\,\'(t)}{|\\vec r\\,\'(t)|}',
        },
        {
          type: 'derivation',
          title: 'Unit tangent and tangent line of $\\vec r(t) = \\langle 1 + t^3,\\ te^{-t},\\ \\sin 2t \\rangle$ at $t = 0$',
          steps: [
            { tex: '\\vec r\\,\'(t) = \\left\\langle 3t^2,\\ (1 - t)e^{-t},\\ 2\\cos 2t \\right\\rangle', why: 'Differentiate each component: the product rule gives $e^{-t} - te^{-t}$, and the chain rule gives $2\\cos 2t$.' },
            { tex: '\\vec r\\,\'(0) = \\langle 0, 1, 2 \\rangle, \\quad |\\vec r\\,\'(0)| = \\sqrt{5}', why: 'Evaluate at $t = 0$ and take the length.' },
            { tex: '\\vec T(0) = \\left\\langle 0, \\tfrac{1}{\\sqrt5}, \\tfrac{2}{\\sqrt5} \\right\\rangle', why: 'Divide by the length to get a [[unit-vector]].' },
            { tex: '\\vec r(0) = \\langle 1, 0, 0 \\rangle', why: 'The point of tangency.' },
            { tex: '\\vec L(s) = \\langle 1, 0, 0 \\rangle + s\\langle 0, 1, 2 \\rangle = \\langle 1, s, 2s \\rangle', why: 'The **tangent line** passes through $\\vec r(0)$ in the direction $\\vec r\\,\'(0)$ (any nonzero multiple works).' },
          ],
        },
        {
          type: 'p',
          text: 'A curve is **smooth** on an interval if $\\vec r\\,\'$ is continuous and never $\\vec 0$ there. Where $\\vec r\\,\'(t_0) = \\vec 0$, the curve can turn a sharp corner. The semicubical parabola $\\langle t^2, t^3 \\rangle$ has $\\vec r\\,\'(0) = \\vec 0$ and a cusp at the origin. Press ▶ and watch the tangent arrow shrink to nothing just as the curve reverses direction.',
        },
        {
          type: 'graph',
          x: [-0.4, 1.9],
          y: [-1.6, 1.6],
          equal: true,
          parametric: [{ x: 't^2', y: 't^3', t: [-1.15, 1.15], color: 'blue', label: '$\\langle t^2, t^3 \\rangle$' }],
          points: [{ x: 'a^2', y: 'a^3', color: 'red' }],
          segments: [{ from: ['a^2', 'a^3'], to: ['a^2 + 0.5*2a', 'a^3 + 0.5*3a^2'], color: 'red', arrow: true, label: "r'(t)/2" }],
          sliders: [{ name: 'a', min: -1, max: 1, step: 0.01, value: -0.7, label: '$t$', play: true }],
          readouts: [{ label: '$|\\vec r\\,\'(t)| =$', expr: 'sqrt(4a^2 + 9a^4)' }],
          caption: 'At $t = 0$ the velocity vanishes and the curve has a cusp. The arrow (half of $\\vec r\\,\'(t)$) points left before the cusp and right after it.',
        },
        {
          type: 'heading',
          text: 'Derivative rules',
        },
        {
          type: 'table',
          headers: ['Rule', 'Formula'],
          rows: [
            ['Sum and constant multiple', '$(\\vec u + \\vec v)\' = \\vec u\\,\' + \\vec v\\,\'$, $\\ (c\\vec u)\' = c\\,\\vec u\\,\'$'],
            ['Scalar function times vector', '$(f\\vec u)\' = f\'\\vec u + f\\,\\vec u\\,\'$'],
            ['[[dot-product|Dot product]]', '$(\\vec u \\cdot \\vec v)\' = \\vec u\\,\' \\cdot \\vec v + \\vec u \\cdot \\vec v\\,\'$'],
            ['[[cross-product|Cross product]]', '$(\\vec u \\times \\vec v)\' = \\vec u\\,\' \\times \\vec v + \\vec u \\times \\vec v\\,\'$ (keep the order)'],
            ['[[chain-rule|Chain rule]]', '$\\dfrac{d}{dt}\\vec u(f(t)) = f\'(t)\\,\\vec u\\,\'(f(t))$'],
          ],
          caption: 'Each is the ordinary product rule applied to the components. The cross product is not commutative, so the factors must stay in their original order.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Constant length means perpendicular velocity',
          text: 'If $|\\vec r(t)| = c$ for all $t$ (the point stays on a sphere centered at the origin), then $\\vec r \\cdot \\vec r = c^2$. Differentiate with the dot-product rule: $\\vec r\\,\' \\cdot \\vec r + \\vec r \\cdot \\vec r\\,\' = 2\\,\\vec r \\cdot \\vec r\\,\' = 0$. So $\\vec r\\,\'(t)$ is [[orthogonal]] to $\\vec r(t)$. An orbit camera circling its target always moves at right angles to the line of sight, and the same fact applied to $\\vec T$ (which has length $1$) will give us the normal vector in the next lesson.',
        },
        {
          type: 'code',
          title: 'tangent.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdio>
#include <initializer_list>

struct Vec3 { double x, y, z; };
Vec3 operator-(Vec3 a, Vec3 b) { return {a.x - b.x, a.y - b.y, a.z - b.z}; }
Vec3 operator*(double s, Vec3 v) { return {s * v.x, s * v.y, s * v.z}; }
double length(Vec3 v) { return std::sqrt(v.x * v.x + v.y * v.y + v.z * v.z); }
Vec3 normalize(Vec3 v) { return (1.0 / length(v)) * v; }

Vec3 r(double t) { return {2 * t, t * t, t * t * t / 3}; }   // the path
Vec3 rPrime(double t) { return {2, 2 * t, t * t}; }          // exact r'(t)

int main() {
    const double h = 1e-4;
    for (double t : {0.0, 1.0, 2.0}) {
        Vec3 d = (1 / (2 * h)) * (r(t + h) - r(t - h));      // central difference
        Vec3 T = normalize(d);
        Vec3 E = normalize(rPrime(t));
        std::printf("t=%.0f  T~(%.4f, %.4f, %.4f)  exact (%.4f, %.4f, %.4f)\\n",
                    t, T.x, T.y, T.z, E.x, E.y, E.z);
    }
}`,
          output: `t=0  T~(1.0000, 0.0000, 0.0000)  exact (1.0000, 0.0000, 0.0000)
t=1  T~(0.6667, 0.6667, 0.3333)  exact (0.6667, 0.6667, 0.3333)
t=2  T~(0.3333, 0.6667, 0.6667)  exact (0.3333, 0.6667, 0.6667)`,
          annotations: [
            { lines: 11, text: 'The curve from the last question. A real game would sample a spline here.' },
            { lines: 17, text: 'A central [[finite-difference]] applied to each component at once: $\\frac{\\vec r(t + h) - \\vec r(t - h)}{2h}$.' },
            { lines: 18, text: 'Normalizing gives $\\vec T$: the "forward" axis for orienting a missile, a train car or a camera along the path.' },
          ],
        },
      ],
    },
    // 10
    {
      kind: 'fill',
      prompt: 'Complete the product rule for the cross product.',
      template: '$\\dfrac{d}{dt}\\left[\\vec u(t) \\times \\vec v(t)\\right] = \\vec u\\,\'(t) \\times \\vec v(t) \\, + $ ___',
      blanks: [{ answers: ['$\\vec u(t) \\times \\vec v\\,\'(t)$'] }],
      wordBank: ['$\\vec u(t) \\times \\vec v\\,\'(t)$', '$\\vec v\\,\'(t) \\times \\vec u(t)$', '$\\vec u(t) \\cdot \\vec v\\,\'(t)$', '$\\vec u\\,\'(t) \\times \\vec v\\,\'(t)$'],
      explanation: 'Differentiate one factor at a time and **keep each factor in its slot**: $(\\vec u \\times \\vec v)\' = \\vec u\\,\' \\times \\vec v + \\vec u \\times \\vec v\\,\'$. Writing $\\vec v\\,\' \\times \\vec u$ would flip the sign of that term, because $\\vec a \\times \\vec b = -\\vec b \\times \\vec a$. A dot in place of the cross would turn a vector into a scalar, and $\\vec u\\,\' \\times \\vec v\\,\'$ differentiates both factors at once, which no product rule does.',
    },
    // 11
    {
      kind: 'truefalse',
      prompt: 'If $\\vec r\\,\'(t_0) = \\vec 0$, then the curve traced by $\\vec r$ must have a cusp or corner at $\\vec r(t_0)$.',
      answer: false,
      explanation: 'A zero derivative *allows* a cusp, but does not force one. $\\vec r(t) = \\langle t^3, t^3, t^3 \\rangle$ has $\\vec r\\,\'(0) = \\vec 0$, yet it traces the perfectly straight line $x = y = z$; the point just slows to a momentary stop at the origin. Whether a cusp appears depends on the curve, not only on the parametrization. That is why "smooth" requires $\\vec r\\,\' \\ne \\vec 0$: it rules out the possibility.',
    },
    // 12
    {
      kind: 'expr',
      prompt: 'Let $\\vec u(t) = \\langle t, t^2, 1 \\rangle$ and $\\vec v(t) = \\langle \\sin t, \\cos t, t \\rangle$. Find $\\dfrac{d}{dt}\\left[\\vec u(t) \\cdot \\vec v(t)\\right]$.',
      hint: 'Either use $(\\vec u \\cdot \\vec v)\' = \\vec u\\,\' \\cdot \\vec v + \\vec u \\cdot \\vec v\\,\'$, or compute the dot product first and differentiate the scalar.',
      label: '$\\dfrac{d}{dt}(\\vec u \\cdot \\vec v) =$',
      variables: ['t'],
      answer: 'sin(t) + t*cos(t) + 2t*cos(t) - t^2*sin(t) + 1',
      answerTex: '\\sin t + 3t\\cos t - t^2\\sin t + 1',
      explanation: 'Directly: $\\vec u \\cdot \\vec v = t\\sin t + t^2\\cos t + t$, so the derivative is $(\\sin t + t\\cos t) + (2t\\cos t - t^2\\sin t) + 1 = \\sin t + 3t\\cos t - t^2\\sin t + 1$. With the rule: $\\vec u\\,\' \\cdot \\vec v = \\langle 1, 2t, 0 \\rangle \\cdot \\langle \\sin t, \\cos t, t \\rangle = \\sin t + 2t\\cos t$ and $\\vec u \\cdot \\vec v\\,\' = \\langle t, t^2, 1 \\rangle \\cdot \\langle \\cos t, -\\sin t, 1 \\rangle = t\\cos t - t^2\\sin t + 1$. Same total.',
    },
    // 13 ────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Integrating vector functions',
      blocks: [
        {
          type: 'p',
          text: 'Integrals are componentwise too. Each component\'s Riemann sum converges separately, so',
        },
        {
          type: 'math',
          tex: '\\int_a^b \\vec r(t)\\,dt = \\left\\langle \\int_a^b f(t)\\,dt,\\ \\int_a^b g(t)\\,dt,\\ \\int_a^b h(t)\\,dt \\right\\rangle',
        },
        {
          type: 'p',
          text: 'The Fundamental Theorem carries over as well: if $\\vec R\\,\' = \\vec r$, then $\\int_a^b \\vec r(t)\\,dt = \\vec R(b) - \\vec R(a)$. In particular $\\int_a^b \\vec r\\,\'(t)\\,dt = \\vec r(b) - \\vec r(a)$: integrating velocity gives **displacement**. An indefinite integral picks up a constant **vector** $\\vec C$, which is three constants at once.',
        },
        {
          type: 'derivation',
          title: '$\\displaystyle\\int_0^{\\pi/2} \\langle 2\\cos t,\\ \\sin t,\\ 2t \\rangle\\,dt$',
          steps: [
            { tex: '= \\left\\langle 2\\sin t,\\ -\\cos t,\\ t^2 \\right\\rangle \\Big|_0^{\\pi/2}', why: 'Antidifferentiate each component.' },
            { tex: '= \\left\\langle 2,\\ 0,\\ \\tfrac{\\pi^2}{4} \\right\\rangle - \\langle 0, -1, 0 \\rangle', why: 'Evaluate at the limits: $\\sin\\frac{\\pi}{2} = 1$, $\\cos\\frac{\\pi}{2} = 0$, $\\cos 0 = 1$.' },
            { tex: '= \\left\\langle 2,\\ 1,\\ \\tfrac{\\pi^2}{4} \\right\\rangle', why: 'Subtract componentwise. Watch the middle sign: $0 - (-1) = 1$.' },
          ],
        },
        {
          type: 'derivation',
          title: 'Find $\\vec r(t)$ if $\\vec r\\,\'(t) = \\langle 2t,\\ 3t^2,\\ \\sqrt{t} \\rangle$ and $\\vec r(1) = \\langle 1, 1, 0 \\rangle$',
          steps: [
            { tex: '\\vec r(t) = \\left\\langle t^2,\\ t^3,\\ \\tfrac23 t^{3/2} \\right\\rangle + \\vec C', why: 'Antidifferentiate each component; one constant vector $\\vec C = \\langle C_1, C_2, C_3 \\rangle$ covers all three.' },
            { tex: '\\vec r(1) = \\left\\langle 1, 1, \\tfrac23 \\right\\rangle + \\vec C = \\langle 1, 1, 0 \\rangle', why: 'Apply the initial condition at $t = 1$, not at $t = 0$.' },
            { tex: '\\vec C = \\left\\langle 0, 0, -\\tfrac23 \\right\\rangle', why: 'Solve component by component.' },
            { tex: '\\vec r(t) = \\left\\langle t^2,\\ t^3,\\ \\tfrac23\\left(t^{3/2} - 1\\right) \\right\\rangle', why: 'Substitute $\\vec C$ back. Check: $\\vec r(1) = \\langle 1, 1, 0 \\rangle$.' },
          ],
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Your game loop already integrates vector functions',
          text: 'Every frame, a physics engine does `velocity += acceleration * dt; position += velocity * dt;`. That is a Riemann sum for $\\vec v = \\int \\vec a\\,dt$ and $\\vec r = \\int \\vec v\\,dt$, one component at a time, and it is the [[semi-implicit-euler]] method from Calculus II. The initial position and velocity you spawn the object with are the constant vectors $\\vec C$.',
        },
      ],
    },
    // 14
    {
      kind: 'error',
      prompt: 'A student finds $\\vec r(t)$ given $\\vec r\\,\'(t) = \\langle 2t, \\cos t, e^t \\rangle$ and $\\vec r(0) = \\langle 1, 2, 3 \\rangle$. Tap the first wrong line.',
      lines: [
        '$\\vec r(t) = \\langle t^2,\\ \\sin t,\\ e^t \\rangle + \\vec C$',
        '$\\vec r(0) = \\langle 0, 0, 1 \\rangle + \\vec C$',
        '$\\langle 0, 0, 1 \\rangle + \\vec C = \\langle 1, 2, 3 \\rangle$, so $\\vec C = \\langle 1, 2, 3 \\rangle$',
        '$\\vec r(t) = \\langle t^2 + 1,\\ \\sin t + 2,\\ e^t + 3 \\rangle$',
      ],
      errorLines: [3],
      explanation: 'Line 2 correctly notes that $e^0 = 1$, but line 3 ignores it: $\\vec C = \\langle 1, 2, 3 \\rangle - \\langle 0, 0, 1 \\rangle = \\langle 1, 2, 2 \\rangle$. The answer is $\\vec r(t) = \\langle t^2 + 1,\\ \\sin t + 2,\\ e^t + 2 \\rangle$. Always check: the student\'s answer gives $\\vec r(0) = \\langle 1, 2, 4 \\rangle$, not $\\langle 1, 2, 3 \\rangle$.',
    },
    // 15
    {
      kind: 'order',
      prompt: 'Put the steps for parametrizing the intersection of the cylinder $x^2 + y^2 = 4$ and the plane $x + z = 5$ in order.',
      lines: [
        'Parametrize the cylinder: $x = 2\\cos t$, $y = 2\\sin t$',
        'Substitute into the plane and solve: $z = 5 - 2\\cos t$',
        'Assemble $\\vec r(t) = \\langle 2\\cos t, 2\\sin t, 5 - 2\\cos t \\rangle$ with $0 \\le t \\le 2\\pi$',
        'Check that $\\vec r(t)$ satisfies both equations for every $t$',
      ],
      distractors: ['Set $x = t$ and $y = t$'],
      explanation: 'Start from the simpler surface (the cylinder, whose cross-section is a circle), use the other equation to find the missing coordinate, assemble and choose an interval that traces the curve once, then verify. Setting $x = y = t$ does not keep the point on the cylinder.',
    },
  ],
  takeaways: [
    'A vector-valued function $\\vec r(t) = \\langle f(t), g(t), h(t) \\rangle$ traces a space curve; its domain is where all three components are defined.',
    'Eliminate $t$ to find surfaces a curve lies on; to parametrize the intersection of two surfaces, parametrize one and substitute into the other.',
    'Limits, derivatives and integrals are all computed component by component; $\\vec r\\,\'(t)$ is tangent to the curve and $\\vec T = \\vec r\\,\' / |\\vec r\\,\'|$.',
    'Product rules hold for dot and cross products (keep the cross-product order); if $|\\vec r(t)|$ is constant then $\\vec r \\perp \\vec r\\,\'$.',
    'An indefinite integral of a vector function carries a constant vector $\\vec C$, fixed by one initial condition.',
  ],
  reading: [
    {
      title: 'OpenStax Calculus Volume 3, Chapter 3: Vector-Valued Functions',
      url: 'https://openstax.org/details/books/calculus-volume-3',
      source: 'openstax',
      note: 'Sections 3.1 and 3.2 cover vector functions, space curves and their calculus with many worked examples.',
    },
    {
      title: "Paul's Online Math Notes: Calculus III",
      url: 'https://tutorial.math.lamar.edu/Classes/CalcIII/CalcIII.aspx',
      source: 'other',
      note: 'The "3-Dimensional Space" chapter has short pages on vector functions and their calculus with extra practice problems.',
    },
    {
      title: 'Wikipedia: Helix',
      url: 'https://en.wikipedia.org/wiki/Helix',
      source: 'wikipedia',
      note: 'Pitch, handedness and where helices show up in nature and engineering.',
    },
  ],
};
