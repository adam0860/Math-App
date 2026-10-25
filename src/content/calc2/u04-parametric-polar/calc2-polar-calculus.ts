import type { GraphBlock, Lesson } from '../../types';

type Segment = NonNullable<GraphBlock['segments']>[number];
type Color = NonNullable<Segment['color']>;

/**
 * A "fan" of n radial segments for θ evenly spaced in [a, b], drawn from the inner curve
 * (default: the pole) out to the outer curve. It shades a polar region the way the
 * area formula slices it: into thin sectors.
 */
function fan(rOut: (t: number) => number, a: number, b: number, n: number, color: Color, rIn: (t: number) => number = () => 0): Segment[] {
  const r3 = (v: number) => Math.round(v * 1000) / 1000;
  return Array.from({ length: n }, (_, i) => {
    const t = a + ((b - a) * (i + 0.5)) / n;
    const ro = rOut(t);
    const ri = rIn(t);
    return { from: [r3(ri * Math.cos(t)), r3(ri * Math.sin(t))], to: [r3(ro * Math.cos(t)), r3(ro * Math.sin(t))], color };
  });
}

/** 24 rays of the cardioid r = 1 + cos θ for θ in [0, b], where b is a slider: the swept area grows with b. */
const sweptRays: Segment[] = Array.from({ length: 24 }, (_, i) => {
  const th = `(${i + 0.5}*b/24)`;
  return { from: [0, 0], to: [`(1 + cos${th})*cos${th}`, `(1 + cos${th})*sin${th}`], color: 'teal' as const };
});

export const lesson: Lesson = {
  id: 'calc2-polar-calculus',
  title: 'Areas and Lengths in Polar Coordinates',
  summary: 'Slice regions into thin pizza slices instead of rectangles: area is $\\frac{1}{2}\\int r^2\\,d\\theta$, and arc length comes from treating a polar curve as a parametric one.',
  minutes: 19,
  objectives: [
    'Choose a $\\theta$-interval that traces a polar curve (or one loop of it) exactly once',
    'Derive and use the polar area formula $A = \\frac{1}{2}\\int_\\alpha^\\beta r^2\\,d\\theta$',
    'Find the area of one petal of a rose and the area between two polar curves',
    'Find intersection points of polar curves, including ones at the pole',
    'Compute polar arc length $\\int_\\alpha^\\beta \\sqrt{r^2 + (dr/d\\theta)^2}\\,d\\theta$',
  ],
  steps: [
    {
      kind: 'concept',
      title: 'Polar curves, traced by a sweeping ray',
      blocks: [
        {
          type: 'p',
          text: 'In [[polar-coordinates]] a point is $(r, \\theta)$: turn to angle $\\theta$, then walk out a signed distance $r$. A [[polar-curve]] $r = f(\\theta)$ is traced by a ray sweeping around the pole while its length changes. Converting with $x = r\\cos\\theta$, $y = r\\sin\\theta$ shows it is a parametric curve with parameter $\\theta$:',
        },
        {
          type: 'math',
          tex: 'x = f(\\theta)\\cos\\theta, \\qquad y = f(\\theta)\\sin\\theta',
        },
        {
          type: 'graph',
          x: [-1.2, 2.4],
          y: [-1.6, 1.6],
          equal: true,
          polar: [
            { expr: '1 + cos(theta)', label: '$r = 1 + \\cos\\theta$', color: 'gray', dashed: true },
            { expr: '1 + cos(theta)', theta: [0, 'b'], color: 'blue' },
          ],
          segments: [{ from: [0, 0], to: ['(1 + cos(b))*cos(b)', '(1 + cos(b))*sin(b)'], color: 'red', label: 'r' }],
          points: [{ x: '(1 + cos(b))*cos(b)', y: '(1 + cos(b))*sin(b)', color: 'red' }],
          sliders: [{ name: 'b', min: 0.01, max: 6.28, step: 0.01, value: 2, label: '$\\theta$' }],
          readouts: [{ label: '$r = 1 + \\cos\\theta =$', expr: '1 + cos(b)', digits: 3 }],
          caption: 'Sweep $\\theta$ from $0$ to $2\\pi$: the red ray shrinks from length $2$ to $0$ (at $\\theta = \\pi$) and grows back, tracing the [[cardioid]] exactly once.',
        },
        {
          type: 'p',
          text: 'Before doing calculus you must know **which $\\theta$-values trace the region you want**. Classic facts: $r = a\\sin\\theta$ and $r = a\\cos\\theta$ are circles traced once on any interval of length $\\pi$; a [[rose-curve]] $r = \\cos(n\\theta)$ has $n$ petals traced on $[0, \\pi]$ when $n$ is odd, and $2n$ petals on $[0, 2\\pi]$ when $n$ is even.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Retracing doubles your answer',
          text: 'The formulas in this lesson add up what the sweeping ray covers. If the ray covers the same region twice (as $r = 2\\sin\\theta$ does on $[0, 2\\pi]$), the integral counts it twice. Always sketch, or use the graphing tool, before choosing limits.',
        },
      ],
    },
    {
      kind: 'mcq',
      prompt: 'The circle $r = 2\\sin\\theta$ has radius $1$. Which $\\theta$-interval traces it **exactly once**?',
      options: [
        { text: '$0 \\le \\theta \\le 2\\pi$', why: 'For $\\pi < \\theta < 2\\pi$, $r = 2\\sin\\theta$ is negative, and the points land back on the same circle: it is traced twice.' },
        { text: '$0 \\le \\theta \\le \\frac{\\pi}{2}$', why: 'That only traces the right half: from the pole up to the top point $(r, \\theta) = (2, \\frac{\\pi}{2})$.' },
        { text: '$0 \\le \\theta \\le \\pi$', correct: true, why: 'As $\\theta$ goes from $0$ to $\\pi$, $r = 2\\sin\\theta \\ge 0$ rises from $0$ to $2$ and back to $0$, going once around the circle.' },
        { text: '$0 \\le \\theta \\le \\frac{\\pi}{4}$', why: 'This traces only a small arc near the pole.' },
      ],
      explanation: 'Multiply $r = 2\\sin\\theta$ by $r$: $x^2 + y^2 = 2y$, the circle of radius $1$ centred at $(0, 1)$. It passes through the pole at $\\theta = 0$ and again at $\\theta = \\pi$, so $[0, \\pi]$ traces it once. (Any interval of length $\\pi$ works, because $\\theta + \\pi$ with $-r$ is the same point.)',
    },
    {
      kind: 'concept',
      title: 'Area: slice into sectors, not rectangles',
      blocks: [
        {
          type: 'p',
          text: 'Rectangles fit graphs $y = f(x)$ because the region is swept by vertical lines. Polar regions are swept by **rays from the pole**, so we slice them into thin wedges. A thin wedge with angle $\\Delta\\theta$ and radius $r$ is almost a circular sector, whose [[sector-area]] you know from trigonometry: $\\frac{1}{2}r^2\\Delta\\theta$.',
        },
        {
          type: 'graph',
          x: [-0.8, 2.3],
          y: [-1.4, 1.4],
          equal: true,
          polar: [{ expr: '1 + cos(theta)', label: '$r = 1 + \\cos\\theta$', color: 'blue' }],
          segments: [...sweptRays, { from: [0, 0], to: ['(1 + cos(b))*cos(b)', '(1 + cos(b))*sin(b)'], color: 'red' }],
          sliders: [{ name: 'b', min: 0.05, max: 6.28, step: 0.01, value: 1.6, label: 'upper limit $\\beta$' }],
          readouts: [{ label: 'area swept $\\frac{1}{2}\\int_0^{\\beta} (1 + \\cos\\theta)^2\\,d\\theta =$', expr: '0.5*(1.5*b + 2*sin(b) + 0.25*sin(2*b))', digits: 4 }],
          caption: 'The teal rays slice the region swept from $\\theta = 0$ to $\\beta$ into thin wedges. Drag $\\beta$ to $2\\pi$: the readout approaches $\\frac{3\\pi}{2} \\approx 4.7124$, the whole cardioid.',
        },
        {
          type: 'theorem',
          name: 'Area in polar coordinates',
          tex: 'A = \\int_{\\alpha}^{\\beta} \\frac{1}{2}\\,r^2\\,d\\theta = \\frac{1}{2}\\int_{\\alpha}^{\\beta} f(\\theta)^2\\,d\\theta',
          text: 'The area of the region bounded by $r = f(\\theta)$ and the rays $\\theta = \\alpha$, $\\theta = \\beta$, where $f$ is continuous, $0 < \\beta - \\alpha \\le 2\\pi$, and the region is swept once.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why $\\frac{1}{2}r^2$, and why it is a Riemann sum',
          text: 'Split $[\\alpha, \\beta]$ into $n$ pieces of width $\\Delta\\theta$ and pick $\\theta_i^*$ in each. The $i$th wedge is close to a sector of radius $f(\\theta_i^*)$: area $\\frac{1}{2}f(\\theta_i^*)^2\\Delta\\theta$ (a fraction $\\frac{\\Delta\\theta}{2\\pi}$ of a full disk $\\pi r^2$). Adding them is a [[riemann-sum]] for $\\frac{1}{2}f(\\theta)^2$, and as $n \\to \\infty$ it becomes the integral. The $r^2$ appears because a wedge\'s area grows with the square of its radius.',
        },
        {
          type: 'derivation',
          title: 'Area enclosed by the cardioid $r = 1 + \\cos\\theta$',
          steps: [
            { tex: 'A = \\frac{1}{2}\\int_0^{2\\pi} (1 + \\cos\\theta)^2\\,d\\theta', why: 'The cardioid is traced once for $0 \\le \\theta \\le 2\\pi$.' },
            { tex: '= \\frac{1}{2}\\int_0^{2\\pi} \\left(1 + 2\\cos\\theta + \\cos^2\\theta\\right)d\\theta', why: 'Expand the square — do not square term by term.' },
            { tex: '= \\frac{1}{2}\\int_0^{2\\pi} \\left(\\tfrac{3}{2} + 2\\cos\\theta + \\tfrac{1}{2}\\cos 2\\theta\\right)d\\theta', why: 'Power-reduce: $\\cos^2\\theta = \\frac{1 + \\cos 2\\theta}{2}$, and $1 + \\frac{1}{2} = \\frac{3}{2}$.' },
            { tex: '= \\frac{1}{2}\\left[\\tfrac{3}{2}\\theta + 2\\sin\\theta + \\tfrac{1}{4}\\sin 2\\theta\\right]_0^{2\\pi}', why: 'Integrate term by term.' },
            { tex: '= \\frac{1}{2}\\cdot\\frac{3}{2}\\cdot 2\\pi = \\frac{3\\pi}{2}', why: 'All the sine terms vanish at $0$ and $2\\pi$.' },
          ],
          result: 'The cardioid encloses $\\frac{3\\pi}{2} \\approx 4.71$ square units: $1.5$ times the area of a unit circle.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'Use the polar area formula to find the area enclosed by the circle $r = 2\\sin\\theta$.',
      hint: 'Use $\\theta$ from $0$ to $\\pi$ (it traces the circle once) and $\\sin^2\\theta = \\frac{1 - \\cos 2\\theta}{2}$.',
      label: '$A =$',
      answer: 'pi',
      answerTex: '\\pi',
      explanation: '$A = \\frac{1}{2}\\int_0^{\\pi} 4\\sin^2\\theta\\,d\\theta = \\int_0^{\\pi} (1 - \\cos 2\\theta)\\,d\\theta = \\left[\\theta - \\frac{1}{2}\\sin 2\\theta\\right]_0^{\\pi} = \\pi$. That matches $\\pi r^2$ with radius $1$ — a good check. Using $[0, 2\\pi]$ would give $2\\pi$, counting the circle twice.',
    },
    {
      kind: 'concept',
      title: 'One petal of a rose',
      blocks: [
        {
          type: 'p',
          text: 'For a loop or petal, the limits are the consecutive angles where the curve passes through the pole, i.e. where $r = 0$. Between them the ray sweeps out exactly one loop.',
        },
        {
          type: 'graph',
          x: [-1.2, 1.2],
          y: [-1.1, 1.1],
          equal: true,
          polar: [{ expr: 'cos(3*theta)', theta: [0, 'pi'], label: '$r = \\cos 3\\theta$', color: 'blue' }],
          segments: fan((t) => Math.cos(3 * t), -Math.PI / 6, Math.PI / 6, 22, 'orange'),
          caption: 'The three-petalled rose $r = \\cos 3\\theta$ ($0 \\le \\theta \\le \\pi$). The shaded petal is swept as $\\theta$ goes from $-\\frac{\\pi}{6}$ to $\\frac{\\pi}{6}$, between consecutive zeros of $\\cos 3\\theta$.',
        },
        {
          type: 'derivation',
          title: 'Area of one petal of $r = \\cos 3\\theta$',
          steps: [
            { tex: '\\cos 3\\theta = 0 \\implies 3\\theta = \\pm\\frac{\\pi}{2} \\implies \\theta = \\pm\\frac{\\pi}{6}', why: 'Find where the petal starts and ends: the consecutive zeros of $r$ around $\\theta = 0$ (where $r = 1$ is largest).' },
            { tex: 'A = \\frac{1}{2}\\int_{-\\pi/6}^{\\pi/6} \\cos^2 3\\theta\\,d\\theta', why: 'Polar area formula between those rays.' },
            { tex: '= \\frac{1}{2}\\int_{-\\pi/6}^{\\pi/6} \\frac{1 + \\cos 6\\theta}{2}\\,d\\theta', why: 'Power-reduce: $\\cos^2 u = \\frac{1 + \\cos 2u}{2}$ with $u = 3\\theta$.' },
            { tex: '= \\frac{1}{4}\\left[\\theta + \\tfrac{1}{6}\\sin 6\\theta\\right]_{-\\pi/6}^{\\pi/6}', why: 'Integrate; the antiderivative of $\\cos 6\\theta$ is $\\frac{1}{6}\\sin 6\\theta$.' },
            { tex: '= \\frac{1}{4}\\cdot\\frac{\\pi}{3} = \\frac{\\pi}{12}', why: '$\\sin(\\pm\\pi) = 0$, leaving $\\frac{\\pi}{6} - \\left(-\\frac{\\pi}{6}\\right) = \\frac{\\pi}{3}$.' },
          ],
          result: 'One petal has area $\\frac{\\pi}{12}$, so the whole rose has area $\\frac{\\pi}{4}$.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Use symmetry',
          text: 'The petal is symmetric about the $x$-axis, so you could also compute $2 \\cdot \\frac{1}{2}\\int_0^{\\pi/6}\\cos^2 3\\theta\\,d\\theta$. Symmetry often halves the work and avoids negative limits. But be careful: only use it after checking the region really is symmetric.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Polar curves in games',
          text: 'Bullet-hell patterns, radial menus, flower and star shapes, and "spirograph" particle effects are often polar: spawn at `(r(θ)·cos θ, r(θ)·sin θ)` for evenly spaced θ. The area formula tells you how much screen a pattern covers; for a quick estimate in code you can simply sum the wedges $\\frac{1}{2}r^2\\Delta\\theta$.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'Find the area of **one petal** of the four-petalled rose $r = 2\\cos 2\\theta$.',
      hint: 'The petal on the positive $x$-axis runs between consecutive zeros of $\\cos 2\\theta$: $\\theta = \\pm\\frac{\\pi}{4}$.',
      label: '$A =$',
      answer: 'pi/2',
      answerTex: '\\frac{\\pi}{2}',
      explanation: '$A = \\frac{1}{2}\\int_{-\\pi/4}^{\\pi/4} 4\\cos^2 2\\theta\\,d\\theta = \\int_{-\\pi/4}^{\\pi/4} (1 + \\cos 4\\theta)\\,d\\theta = \\left[\\theta + \\frac{1}{4}\\sin 4\\theta\\right]_{-\\pi/4}^{\\pi/4} = \\frac{\\pi}{2}$ (since $\\sin(\\pm\\pi) = 0$). Remember to square the $2$: forgetting gives $\\frac{\\pi}{8}$.',
    },
    {
      kind: 'concept',
      title: 'Area between two polar curves',
      blocks: [
        {
          type: 'p',
          text: 'If the region lies between an outer curve $r = f(\\theta)$ and an inner curve $r = g(\\theta)$ (with $f \\ge g \\ge 0$), subtract the inner area from the outer one. Wedge by wedge, that is the big sector minus the small sector:',
        },
        {
          type: 'theorem',
          name: 'Area between polar curves',
          tex: 'A = \\frac{1}{2}\\int_{\\alpha}^{\\beta} \\left(f(\\theta)^2 - g(\\theta)^2\\right)d\\theta',
          text: 'The limits are usually the angles where the curves intersect.',
        },
        {
          type: 'graph',
          x: [-3.2, 3.2],
          y: [-0.5, 3.4],
          equal: true,
          polar: [
            { expr: '3*sin(theta)', theta: [0, 'pi'], label: '$r = 3\\sin\\theta$', color: 'blue' },
            { expr: '1 + sin(theta)', label: '$r = 1 + \\sin\\theta$', color: 'red' },
          ],
          segments: fan((t) => 3 * Math.sin(t), Math.PI / 6, (5 * Math.PI) / 6, 30, 'teal', (t) => 1 + Math.sin(t)),
          points: [
            { x: 1.299, y: 0.75, label: '(3/2, π/6)' },
            { x: -1.299, y: 0.75, label: '(3/2, 5π/6)' },
          ],
          caption: 'Inside the circle $r = 3\\sin\\theta$ and outside the cardioid $r = 1 + \\sin\\theta$. Each teal segment runs from the inner curve to the outer one along a ray: that is the wedge-difference the formula adds up.',
        },
        {
          type: 'derivation',
          title: 'Area inside $r = 3\\sin\\theta$ and outside $r = 1 + \\sin\\theta$',
          steps: [
            { tex: '3\\sin\\theta = 1 + \\sin\\theta \\implies \\sin\\theta = \\tfrac{1}{2} \\implies \\theta = \\tfrac{\\pi}{6},\\, \\tfrac{5\\pi}{6}', why: 'The region is bounded by the intersection rays. Set the $r$-values equal and solve on $[0, \\pi]$.' },
            { tex: 'A = \\frac{1}{2}\\int_{\\pi/6}^{5\\pi/6} \\left(9\\sin^2\\theta - (1 + \\sin\\theta)^2\\right)d\\theta', why: 'Outer radius $3\\sin\\theta$, inner radius $1 + \\sin\\theta$: square each, *then* subtract.' },
            { tex: '= \\frac{1}{2}\\int_{\\pi/6}^{5\\pi/6} \\left(8\\sin^2\\theta - 2\\sin\\theta - 1\\right)d\\theta', why: 'Expand $(1 + \\sin\\theta)^2 = 1 + 2\\sin\\theta + \\sin^2\\theta$ and collect: $9 - 1 = 8$.' },
            { tex: '= \\frac{1}{2}\\int_{\\pi/6}^{5\\pi/6} \\left(3 - 4\\cos 2\\theta - 2\\sin\\theta\\right)d\\theta', why: 'Power-reduce: $8\\sin^2\\theta = 4 - 4\\cos 2\\theta$, and $4 - 1 = 3$.' },
            { tex: '= \\frac{1}{2}\\Big[3\\theta - 2\\sin 2\\theta + 2\\cos\\theta\\Big]_{\\pi/6}^{5\\pi/6}', why: 'Integrate term by term.' },
            { tex: '= \\frac{1}{2}\\Big[2\\pi + 2\\sqrt{3} - 2\\sqrt{3}\\Big] = \\pi', why: '$3\\theta$ contributes $3 \\cdot \\frac{4\\pi}{6} = 2\\pi$; $-2\\sin 2\\theta$ contributes $-2\\left(-\\frac{\\sqrt3}{2} - \\frac{\\sqrt3}{2}\\right) = 2\\sqrt{3}$; $2\\cos\\theta$ contributes $2\\left(-\\frac{\\sqrt3}{2} - \\frac{\\sqrt3}{2}\\right) = -2\\sqrt{3}$.' },
          ],
          result: 'The region has area exactly $\\pi$.',
        },
        {
          type: 'compare',
          left: {
            title: 'Wrong',
            tone: 'bad',
            tex: ['\\frac{1}{2}\\int_\\alpha^\\beta \\left(f(\\theta) - g(\\theta)\\right)^2 d\\theta'],
            text: 'This is the area of wedges of radius $f - g$ starting at the pole, not of the ring-shaped pieces between the curves.',
          },
          right: {
            title: 'Right',
            tone: 'good',
            tex: ['\\frac{1}{2}\\int_\\alpha^\\beta \\left(f(\\theta)^2 - g(\\theta)^2\\right) d\\theta'],
            text: 'Big sector minus small sector, wedge by wedge.',
          },
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Intersections you can\'t find by algebra',
          text: 'Solving $f(\\theta) = g(\\theta)$ finds points where the curves meet *at the same $\\theta$*. But a point has many polar names, and curves can pass through the same point at different angles. The pole is the usual culprit: $r = \\cos\\theta$ and $r = \\sin\\theta$ both pass through it (at $\\theta = \\frac{\\pi}{2}$ and $\\theta = 0$), yet $\\cos\\theta = \\sin\\theta$ only gives $\\theta = \\frac{\\pi}{4}$. Always sketch, and check $r = 0$ separately.',
        },
      ],
    },
    {
      kind: 'error',
      prompt: 'A student computes the area inside $r = 3\\sin\\theta$ and outside $r = 1 + \\sin\\theta$. Tap the first wrong line.',
      lines: [
        '$3\\sin\\theta = 1 + \\sin\\theta \\implies \\theta = \\frac{\\pi}{6}, \\frac{5\\pi}{6}$',
        '$A = \\frac{1}{2}\\int_{\\pi/6}^{5\\pi/6} \\left(3\\sin\\theta - (1 + \\sin\\theta)\\right)^2 d\\theta$',
        '$= \\frac{1}{2}\\int_{\\pi/6}^{5\\pi/6} (2\\sin\\theta - 1)^2\\,d\\theta$',
        '$= \\pi - \\frac{3\\sqrt{3}}{2}$',
      ],
      errorLines: [2],
      explanation: 'Line 2 squares the **difference** of the radii instead of taking the difference of the squares. The correct integral is $\\frac{1}{2}\\int_{\\pi/6}^{5\\pi/6}\\left(9\\sin^2\\theta - (1 + \\sin\\theta)^2\\right)d\\theta = \\pi$. The student\'s answer $\\pi - \\frac{3\\sqrt3}{2} \\approx 0.54$ is far too small — a quick sketch shows the region is bigger than that.',
    },
    {
      kind: 'numeric',
      prompt: 'Find the area of the region inside the cardioid $r = 1 + \\cos\\theta$ and outside the circle $r = 1$.',
      hint: 'They meet where $\\cos\\theta = 0$, i.e. $\\theta = \\pm\\frac{\\pi}{2}$. Then compute $\\frac{1}{2}\\int_{-\\pi/2}^{\\pi/2}\\left((1 + \\cos\\theta)^2 - 1^2\\right)d\\theta$.',
      label: '$A =$',
      answer: '2 + pi/4',
      answerTex: '2 + \\frac{\\pi}{4}',
      explanation: '$(1 + \\cos\\theta)^2 - 1 = 2\\cos\\theta + \\cos^2\\theta$. So $A = \\frac{1}{2}\\int_{-\\pi/2}^{\\pi/2}\\left(2\\cos\\theta + \\frac{1 + \\cos 2\\theta}{2}\\right)d\\theta = \\frac{1}{2}\\left[2\\sin\\theta + \\frac{\\theta}{2} + \\frac{\\sin 2\\theta}{4}\\right]_{-\\pi/2}^{\\pi/2} = \\frac{1}{2}\\left(4 + \\frac{\\pi}{2}\\right) = 2 + \\frac{\\pi}{4} \\approx 2.785$.',
    },
    {
      kind: 'truefalse',
      prompt: 'To find every intersection point of two polar curves $r = f(\\theta)$ and $r = g(\\theta)$, it is enough to solve the equation $f(\\theta) = g(\\theta)$.',
      answer: false,
      explanation: 'A point has infinitely many polar representations, so two curves can share a point while reaching it at different values of $\\theta$. For $r = \\cos\\theta$ and $r = \\sin\\theta$, solving gives only $\\theta = \\frac{\\pi}{4}$, but both curves also pass through the pole (at $\\theta = \\frac{\\pi}{2}$ and $\\theta = 0$ respectively). Sketch the curves and test the pole separately.',
    },
    {
      kind: 'concept',
      title: 'Arc length of a polar curve',
      blocks: [
        {
          type: 'p',
          text: 'A polar curve is the parametric curve $x = r\\cos\\theta$, $y = r\\sin\\theta$ with parameter $\\theta$, so the parametric arc length formula applies. The algebra collapses beautifully:',
        },
        {
          type: 'derivation',
          title: 'From parametric to polar arc length',
          steps: [
            { tex: '\\frac{dx}{d\\theta} = r\'\\cos\\theta - r\\sin\\theta, \\qquad \\frac{dy}{d\\theta} = r\'\\sin\\theta + r\\cos\\theta', why: 'Product rule on $x = r(\\theta)\\cos\\theta$ and $y = r(\\theta)\\sin\\theta$, writing $r\' = \\frac{dr}{d\\theta}$.' },
            { tex: '\\left(\\frac{dx}{d\\theta}\\right)^2 + \\left(\\frac{dy}{d\\theta}\\right)^2 = r\'^2(\\cos^2\\theta + \\sin^2\\theta) + r^2(\\sin^2\\theta + \\cos^2\\theta)', why: 'Expand both squares. The cross terms $\\mp 2rr\'\\sin\\theta\\cos\\theta$ cancel each other.' },
            { tex: '= r^2 + \\left(\\frac{dr}{d\\theta}\\right)^2', why: 'Pythagorean identity, twice.' },
          ],
          result: 'Polar arc length: $L = \\displaystyle\\int_\\alpha^\\beta \\sqrt{r^2 + \\left(\\frac{dr}{d\\theta}\\right)^2}\\,d\\theta$, for a curve traced once.',
        },
        {
          type: 'derivation',
          title: 'Length of the cardioid $r = 1 + \\cos\\theta$',
          steps: [
            { tex: 'r^2 + r\'^2 = (1 + \\cos\\theta)^2 + \\sin^2\\theta = 2 + 2\\cos\\theta', why: '$r\' = -\\sin\\theta$; expand and use $\\cos^2\\theta + \\sin^2\\theta = 1$.' },
            { tex: '= 4\\cos^2\\left(\\tfrac{\\theta}{2}\\right)', why: 'Half-angle identity: $1 + \\cos\\theta = 2\\cos^2\\frac{\\theta}{2}$.' },
            { tex: 'L = \\int_0^{2\\pi} 2\\left|\\cos\\tfrac{\\theta}{2}\\right|d\\theta = 2\\int_0^{\\pi} 2\\cos\\tfrac{\\theta}{2}\\,d\\theta', why: '$\\sqrt{u^2} = |u|$. Since $\\cos\\frac{\\theta}{2} < 0$ for $\\pi < \\theta < 2\\pi$, use the symmetry of the cardioid about the $x$-axis and double the top half.' },
            { tex: '= 4\\left[2\\sin\\tfrac{\\theta}{2}\\right]_0^{\\pi} = 8', why: 'The antiderivative of $\\cos\\frac{\\theta}{2}$ is $2\\sin\\frac{\\theta}{2}$, and $\\sin\\frac{\\pi}{2} = 1$.' },
          ],
          result: 'The cardioid is exactly $8$ units long.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Don\'t drop the absolute value',
          text: 'Writing $\\sqrt{4\\cos^2(\\theta/2)} = 2\\cos(\\theta/2)$ and integrating over $[0, 2\\pi]$ gives $\\left[4\\sin\\frac{\\theta}{2}\\right]_0^{2\\pi} = 0$ — a curve of length zero! A length integrand can never be negative; if part of yours is, you lost an absolute value.',
        },
        {
          type: 'deepdive',
          title: 'Tangent lines in polar coordinates',
          blocks: [
            {
              type: 'p',
              text: 'The same parametric view gives slopes. Dividing $\\frac{dy}{d\\theta}$ by $\\frac{dx}{d\\theta}$:',
            },
            { type: 'math', tex: '\\frac{dy}{dx} = \\frac{r\'\\sin\\theta + r\\cos\\theta}{r\'\\cos\\theta - r\\sin\\theta}' },
            {
              type: 'p',
              text: 'At the pole ($r = 0$, $r\' \\neq 0$) this reduces to $\\tan\\theta$: the curve enters the pole along the ray at angle $\\theta$. That is why each rose petal meets the pole tangent to the rays $\\theta = \\pm\\frac{\\pi}{6}$ that bound it.',
            },
          ],
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'Find the length of the spiral $r = \\theta^2$ for $0 \\le \\theta \\le \\sqrt{5}$.',
      hint: '$r^2 + r\'^2 = \\theta^4 + 4\\theta^2 = \\theta^2(\\theta^2 + 4)$. Take the square root, then substitute $u = \\theta^2 + 4$.',
      label: '$L =$',
      answer: '19/3',
      explanation: '$\\sqrt{\\theta^4 + 4\\theta^2} = \\theta\\sqrt{\\theta^2 + 4}$ (as $\\theta \\ge 0$). With $u = \\theta^2 + 4$, $du = 2\\theta\\,d\\theta$: $L = \\frac{1}{2}\\int_4^9 \\sqrt{u}\\,du = \\frac{1}{3}u^{3/2}\\Big|_4^9 = \\frac{1}{3}(27 - 8) = \\frac{19}{3}$.',
    },
    {
      kind: 'concept',
      title: 'A strategy, and checking with code',
      blocks: [
        {
          type: 'steps',
          items: [
            { title: 'Sketch', text: 'Graph the curve(s) and shade the region. Decide whether it is a whole curve, a loop, or between two curves.' },
            { title: 'Find the limits', text: 'Zeros of $r$ for a loop; intersections (plus a check of the pole) for regions between curves. Make sure the region is swept exactly once.' },
            { title: 'Set up', text: '$\\frac{1}{2}\\int r^2\\,d\\theta$, or $\\frac{1}{2}\\int (r_{\\text{out}}^2 - r_{\\text{in}}^2)\\,d\\theta$, or $\\int\\sqrt{r^2 + r\'^2}\\,d\\theta$. Use symmetry if it helps.' },
            { title: 'Integrate', text: 'Expect $\\sin^2$ and $\\cos^2$: power-reduce. For lengths, look for a half-angle identity and keep the absolute value.' },
            { title: 'Sanity-check', text: 'Areas and lengths are positive; compare with a simple shape (a circle, a bounding box).' },
          ],
        },
        {
          type: 'p',
          text: 'A computer checks both formulas the way they were derived: sum thin wedges for area, sum short chords for length.',
        },
        {
          type: 'code',
          title: 'cardioid.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdio>

const double PI = std::acos(-1.0);
double r(double theta) { return 1.0 + std::cos(theta); }   // cardioid

int main() {
    const int counts[] = {8, 32, 128, 1024};
    for (int n : counts) {
        double dtheta = 2 * PI / n, area = 0.0, length = 0.0;
        for (int i = 0; i < n; ++i) {
            double a = i * dtheta, b = a + dtheta;
            double mid = r(a + dtheta / 2);
            area += 0.5 * mid * mid * dtheta;                    // thin sector
            length += std::hypot(r(b) * std::cos(b) - r(a) * std::cos(a),
                                 r(b) * std::sin(b) - r(a) * std::sin(a));  // chord
        }
        std::printf("n = %4d  area = %.6f  length = %.6f\\n", n, area, length);
    }
    std::printf("exact     area = %.6f  length = %.6f\\n", 1.5 * PI, 8.0);
}`,
          output: `n =    8  area = 4.712389  length = 7.562718
n =   32  area = 4.712389  length = 7.971218
n =  128  area = 4.712389  length = 7.998193
n = 1024  area = 4.712389  length = 7.999972
exact     area = 4.712389  length = 8.000000`,
          annotations: [
            { lines: 14, text: 'One wedge: $\\frac{1}{2}r^2\\Delta\\theta$ with $r$ taken at the middle of the wedge (a midpoint Riemann sum).' },
            { lines: '15-16', text: 'The straight chord between consecutive points of the curve, converted to $x, y$ with $x = r\\cos\\theta$, $y = r\\sin\\theta$.' },
            { lines: 20, text: 'The exact answers $\\frac{3\\pi}{2}$ and $8$ from this lesson.' },
          ],
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Why is the area already exact with 8 wedges?',
          text: 'The length creeps up toward $8$ as expected (chords always cut corners), but the area is correct to six decimals even for $n = 8$. That is not luck: $r^2 = \\frac{3}{2} + 2\\cos\\theta + \\frac{1}{2}\\cos 2\\theta$, and an evenly spaced sum over a **full period** of $\\cos k\\theta$ is exactly $0$ whenever $n$ does not divide $k$. So every wedge sum with $n \\ge 3$ is exact here — a special property of periodic integrands that numerical analysts exploit.',
        },
      ],
    },
    {
      kind: 'fill',
      prompt: 'Complete the polar formulas.',
      template: 'The area of a region swept by $r = f(\\theta)$ for $\\alpha \\le \\theta \\le \\beta$ is $\\frac{1}{2}\\int_\\alpha^\\beta$ ___ $d\\theta$. The area between an outer curve $f$ and an inner curve $g$ uses the integrand ___. The arc length uses $\\int_\\alpha^\\beta$ ___ $d\\theta$.',
      blanks: [{ answers: ['$f(\\theta)^2$'] }, { answers: ['$f(\\theta)^2 - g(\\theta)^2$'] }, { answers: ['$\\sqrt{r^2 + (dr/d\\theta)^2}$'] }],
      wordBank: ['$f(\\theta)^2$', '$f(\\theta)$', '$f(\\theta)^2 - g(\\theta)^2$', '$(f(\\theta) - g(\\theta))^2$', '$\\sqrt{r^2 + (dr/d\\theta)^2}$', '$\\sqrt{1 + (dr/d\\theta)^2}$'],
      explanation: 'A wedge of radius $r$ and angle $d\\theta$ has area $\\frac{1}{2}r^2\\,d\\theta$, so area integrates $r^2$; between curves it is big wedge minus small wedge, $f^2 - g^2$ (not $(f - g)^2$). Arc length comes from $\\sqrt{x\'^2 + y\'^2}$ with $x = r\\cos\\theta$, $y = r\\sin\\theta$, which simplifies to $\\sqrt{r^2 + r\'^2}$ — the $\\sqrt{1 + (\\cdot)^2}$ form belongs to graphs $y = f(x)$.',
    },
    {
      kind: 'order',
      prompt: 'Order the steps for finding the area of one loop of $r = \\sin 2\\theta$.',
      lines: [
        'Sketch: a four-petalled rose with one petal in each quadrant',
        'Find consecutive zeros of $r$: $\\sin 2\\theta = 0$ at $\\theta = 0$ and $\\theta = \\frac{\\pi}{2}$',
        'Set up $A = \\frac{1}{2}\\int_0^{\\pi/2} \\sin^2 2\\theta\\,d\\theta$',
        'Power-reduce: $\\sin^2 2\\theta = \\frac{1 - \\cos 4\\theta}{2}$',
        'Integrate and evaluate: $A = \\frac{\\pi}{8}$',
      ],
      distractors: ['Set up $A = \\frac{1}{2}\\int_0^{2\\pi} \\sin^2 2\\theta\\,d\\theta$'],
      explanation: 'Sketch first, then use the zeros of $r$ to bound one petal, set up $\\frac{1}{2}\\int r^2\\,d\\theta$, power-reduce and integrate: $\\frac{1}{2}\\cdot\\frac{1}{2}\\left[\\theta - \\frac{\\sin 4\\theta}{4}\\right]_0^{\\pi/2} = \\frac{\\pi}{8}$. The distractor integrates over all four petals, giving $\\frac{\\pi}{2}$.',
    },
  ],
  takeaways: [
    'Choose $\\theta$-limits that sweep the region exactly once: zeros of $r$ bound a loop; intersections bound a region between curves.',
    'Polar area: $A = \\frac{1}{2}\\int_\\alpha^\\beta r^2\\,d\\theta$, a limit of sums of thin sectors $\\frac{1}{2}r^2\\Delta\\theta$.',
    'Between curves: $A = \\frac{1}{2}\\int_\\alpha^\\beta (r_{\\text{out}}^2 - r_{\\text{in}}^2)\\,d\\theta$ — difference of squares, not square of the difference.',
    'Solving $f(\\theta) = g(\\theta)$ can miss intersections, especially at the pole; always sketch.',
    'Polar arc length: $L = \\int_\\alpha^\\beta \\sqrt{r^2 + (dr/d\\theta)^2}\\,d\\theta$; keep absolute values when taking square roots.',
    'Power-reduction and half-angle identities do most of the integration work in polar problems.',
  ],
  reading: [
    {
      title: 'OpenStax Calculus Volume 2 — 7.4 Area and Arc Length in Polar Coordinates',
      url: 'https://openstax.org/books/calculus-volume-2/pages/7-4-area-and-arc-length-in-polar-coordinates',
      source: 'openstax',
      note: 'The derivation of the sector formula with more examples of petals and regions between curves.',
    },
    {
      title: "Paul's Online Notes — Area with Polar Coordinates",
      url: 'https://tutorial.math.lamar.edu/Classes/CalcII/PolarArea.aspx',
      source: 'paul',
      note: 'Worked examples including the intersection pitfalls at the pole.',
    },
    {
      title: "Paul's Online Notes — Arc Length with Polar Coordinates",
      url: 'https://tutorial.math.lamar.edu/Classes/CalcII/PolarArcLength.aspx',
      source: 'paul',
      note: 'Short derivation of the polar arc length formula and practice problems.',
    },
    {
      title: 'Desmos Graphing Calculator',
      url: 'https://www.desmos.com/calculator',
      source: 'desmos',
      note: 'Type r = 1 + cos(θ) or r = cos(3θ) and restrict θ to see exactly which part each interval traces.',
    },
  ],
};
