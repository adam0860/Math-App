import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'calc3-extrema',
  title: 'Maximum and Minimum Values',
  summary: 'Peaks, pits and passes: find where the tangent plane goes flat, sort the critical points with the second-derivative test, and hunt down absolute extremes on a closed region, edges included.',
  minutes: 18,
  objectives: [
    'Find the critical points of $f(x, y)$ by solving $\\nabla f = \\vec{0}$',
    'Classify critical points with $D = f_{xx}f_{yy} - f_{xy}^2$, and explain the test using the Hessian',
    'Recognize saddle points and the inconclusive case $D = 0$',
    'Find absolute extrema of a continuous function on a closed, bounded region',
    'Set up and solve a least-squares fit as a two-variable minimization',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Peaks, pits and flat tangent planes',
      blocks: [
        {
          type: 'p',
          text: 'In Calculus I, a [[local-extremum]] of $f(x)$ could only happen at a [[critical-number]], where $f\'(x) = 0$ or $f\'$ does not exist. The same idea works on surfaces. At the top of a smooth hill the ground is level in **every** direction, so the tangent plane is horizontal.',
        },
        {
          type: 'definition',
          term: 'Local extrema in two variables',
          text: '$f$ has a **local maximum** at $(a, b)$ if $f(x, y) \\le f(a, b)$ for all $(x, y)$ in some disk around $(a, b)$, and a **local minimum** if $f(x, y) \\ge f(a, b)$ there.',
        },
        {
          type: 'theorem',
          name: 'Fermat\'s theorem in two variables',
          text: 'If $f$ has a local maximum or minimum at an interior point $(a, b)$ and the first partial derivatives exist there, then $f_x(a, b) = 0$ and $f_y(a, b) = 0$, that is $\\nabla f(a, b) = \\vec{0}$.',
        },
        {
          type: 'p',
          text: 'Proof: freeze $y = b$. The one-variable function $g(x) = f(x, b)$ has a local extremum at $x = a$, so $g\'(a) = f_x(a, b) = 0$. Freezing $x = a$ gives $f_y(a, b) = 0$ the same way. A point where $\\nabla f = \\vec{0}$, or where a partial derivative fails to exist, is a [[calc3-critical-point]]. Every local extremum is a critical point, but not every critical point is an extremum.',
        },
        {
          type: 'plot3d',
          x: [-2, 2],
          y: [-2, 2],
          z: [-4.5, 4.5],
          surfaces: [{ expr: 'x^3 - 3x - y^3 + 3y', color: 'blue', opacity: 0.6, label: '$z = x^3 - 3x - y^3 + 3y$' }],
          contours: [-3, -2, -1, 0, 1, 2, 3],
          points: [
            { x: -1, y: 1, z: 4, label: 'max', color: 'green' },
            { x: 1, y: -1, z: -4, label: 'min', color: 'red' },
            { x: 1, y: 1, z: 0, label: 'saddle', color: 'orange' },
            { x: -1, y: -1, z: 0, label: 'saddle', color: 'orange' },
          ],
          view: { azimuth: 35, elevation: 28 },
          caption: 'This surface has four critical points, all with horizontal tangent planes. One is a peak, one a pit, and two are saddles. Drag to turn it and compare with the purple contour map on the floor: closed loops circle the peak and the pit, while at a saddle the contours cross.',
        },
        {
          type: 'derivation',
          title: 'Critical points of $f(x, y) = x^3 - 3x - y^3 + 3y$',
          steps: [
            { tex: 'f_x = 3x^2 - 3, \\quad f_y = -3y^2 + 3', why: 'First partial derivatives. Each one involves only one variable, which makes this example quick.' },
            { tex: '3x^2 - 3 = 0 \\implies x = \\pm 1', why: 'Set $f_x = 0$.' },
            { tex: '-3y^2 + 3 = 0 \\implies y = \\pm 1', why: 'Set $f_y = 0$.' },
            { tex: '(1, 1),\\ (1, -1),\\ (-1, 1),\\ (-1, -1)', why: 'Both equations must hold at once, so take every combination.' },
          ],
          result: 'Four critical points. To tell which is which, you need second derivatives: that is the next card.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Solve the system carefully',
          text: 'Usually $f_x = 0$ and $f_y = 0$ are coupled, nonlinear equations. Factor whenever you can, and when an equation factors as a product equal to zero, follow **every** case. Dividing both sides by a variable silently throws away the solutions where that variable is $0$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'concept',
      title: 'The second derivative test',
      blocks: [
        {
          type: 'p',
          text: 'In one variable the [[second-derivative-test]] used concavity: $f\'\' > 0$ means cupped up, a minimum. In two variables the surface can curve differently in different directions, so one number will not do. Three second partials matter, $f_{xx}$, $f_{yy}$ and $f_{xy}$, and they combine into the discriminant $D$.',
        },
        {
          type: 'theorem',
          name: '[[calc3-second-derivative-test|Second Derivative Test (Two Variables)]]',
          tex: 'D(a, b) = f_{xx}(a, b)\\,f_{yy}(a, b) - [f_{xy}(a, b)]^2',
          text: 'Suppose the second partials are continuous near $(a, b)$ and $\\nabla f(a, b) = \\vec{0}$.\n\n- $D > 0$ and $f_{xx} > 0$: local **minimum**.\n- $D > 0$ and $f_{xx} < 0$: local **maximum**.\n- $D < 0$: **saddle point**.\n- $D = 0$: the test gives no conclusion.',
        },
        {
          type: 'p',
          text: '$D$ is the determinant of the [[calc3-hessian]], the matrix of second partial derivatives $H = \\begin{bmatrix} f_{xx} & f_{xy} \\\\ f_{xy} & f_{yy} \\end{bmatrix}$.',
        },
        {
          type: 'derivation',
          title: 'Classify the four critical points of $x^3 - 3x - y^3 + 3y$',
          steps: [
            { tex: 'f_{xx} = 6x, \\quad f_{yy} = -6y, \\quad f_{xy} = 0', why: 'Differentiate $f_x = 3x^2 - 3$ and $f_y = -3y^2 + 3$ once more.' },
            { tex: 'D = (6x)(-6y) - 0^2 = -36xy', why: 'The discriminant as a function of the point.' },
            { tex: '(1, -1):\\ D = 36 > 0,\\ f_{xx} = 6 > 0 \\implies \\text{min},\\ f = -4', why: 'Cupped up in every direction.' },
            { tex: '(-1, 1):\\ D = 36 > 0,\\ f_{xx} = -6 < 0 \\implies \\text{max},\\ f = 4', why: 'Cupped down in every direction.' },
            { tex: '(1, 1),\\ (-1, -1):\\ D = -36 < 0 \\implies \\text{saddles},\\ f = 0', why: 'When $D < 0$ the sign of $f_{xx}$ does not matter: the surface curves up in some directions and down in others.' },
          ],
          result: 'Local max $4$ at $(-1, 1)$, local min $-4$ at $(1, -1)$, saddle points at $(1, 1)$ and $(-1, -1)$, matching the 3D plot.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why $D$ decides it',
          text: 'At a critical point the linear terms of the Taylor expansion vanish, so for a small step $(h, k)$\n\n$$f(a + h, b + k) - f(a, b) \\approx \\tfrac{1}{2}\\left(A h^2 + 2B hk + C k^2\\right),$$\n\nwith $A = f_{xx}$, $B = f_{xy}$, $C = f_{yy}$. This is a [[la-quadratic-form]]. Complete the square (assuming $A \\ne 0$):\n\n$$A h^2 + 2Bhk + Ck^2 = A\\left(h + \\tfrac{B}{A}k\\right)^2 + \\tfrac{AC - B^2}{A}k^2.$$\n\nIf $D = AC - B^2 > 0$, both terms have the sign of $A$: the change has one sign in every direction, so it is a min ($A > 0$) or a max ($A < 0$). If $D < 0$, the two terms have opposite signs, and directions exist where $f$ goes up and others where it goes down. In linear-algebra terms, $D$ is the product of the Hessian\'s two [[eigenvalue|eigenvalues]]: $D > 0$ means they share a sign, $D < 0$ means they differ.',
        },
      ],
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'mcq',
      prompt: 'At a critical point of $f$, $f_{xx} = 4$, $f_{yy} = 1$ and $f_{xy} = 3$. What kind of point is it?',
      options: [
        { text: 'A local minimum, because $f_{xx} > 0$ and $f_{yy} > 0$', why: 'Positive $f_{xx}$ and $f_{yy}$ only say the surface curves up along the $x$- and $y$-directions. The large mixed partial makes it curve down along a diagonal. Always compute $D$ first.' },
        { text: 'A saddle point', correct: true, why: '$D = (4)(1) - 3^2 = -5 < 0$, so it is a saddle, whatever the signs of $f_{xx}$ and $f_{yy}$.' },
        { text: 'A local maximum', why: 'A maximum needs $D > 0$ and $f_{xx} < 0$. Here $D < 0$.' },
        { text: 'The test is inconclusive', why: 'That happens only when $D = 0$. Here $D = -5$.' },
      ],
      explanation: '$D = f_{xx}f_{yy} - f_{xy}^2 = 4 - 9 = -5 < 0$, so the point is a saddle. For example, along the direction $\\langle 1, -1 \\rangle$ the second directional derivative is proportional to $A - 2B + C = 4 - 6 + 1 = -1 < 0$: the surface bends **down** that way, even though it bends up along both axes.',
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'numeric',
      prompt: 'Find the local minimum **value** of $f(x, y) = x^2 + xy + y^2 - 3x$.',
      label: 'minimum value $=$',
      answer: '-3',
      hint: 'Solve $f_x = 2x + y - 3 = 0$ and $f_y = x + 2y = 0$, then check $D$ and evaluate $f$.',
      explanation: 'From $f_y = 0$, $x = -2y$. Then $f_x = -4y + y - 3 = 0$ gives $y = -1$, $x = 2$. Second partials: $f_{xx} = 2$, $f_{yy} = 2$, $f_{xy} = 1$, so $D = 4 - 1 = 3 > 0$ with $f_{xx} > 0$: a local minimum. Its value is $f(2, -1) = 4 - 2 + 1 - 6 = -3$. (This $f$ is a quadratic with positive definite Hessian, so $-3$ is also the absolute minimum.)',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Saddle points and the inconclusive case',
      blocks: [
        {
          type: 'p',
          text: 'A [[calc3-saddle-point|saddle point]] is a critical point that is neither a max nor a min. The model is $z = x^2 - y^2$, the shape of a horse saddle or a mountain pass. Along the $x$-axis the origin is the bottom of a valley; along the $y$-axis it is the top of a ridge. Here $f_{xx} = 2$, $f_{yy} = -2$, $f_{xy} = 0$, so $D = -4 < 0$.',
        },
        {
          type: 'plot3d',
          x: [-1.6, 1.6],
          y: [-1.6, 1.6],
          z: [-2.4, 2.4],
          parametricSurfaces: [{ x: 'u cos(v)', y: 'u sin(v)', z: 'u^2 cos(2v)', u: [0, 1.5], v: [0, '2pi'], color: 'blue', opacity: 0.55, label: '$z = x^2 - y^2$' }],
          curves: [{ x: 't cos(w)', y: 't sin(w)', z: 't^2 cos(2w)', t: [-1.5, 1.5], color: 'red', label: 'slice through the origin' }],
          vectors: [{ from: [0, 0, 0], to: ['1.5cos(w)', '1.5sin(w)', 0], color: 'green', label: 'direction' }],
          points: [{ x: 0, y: 0, z: 0, label: 'saddle', color: 'orange' }],
          sliders: [{ name: 'w', min: 0, max: 3.14, step: 0.01, value: 0, label: 'slice angle $\\theta$', play: true, loop: true, speed: 0.5 }],
          readouts: [{ label: 'curvature of the slice $\\propto \\cos 2\\theta =$', expr: 'cos(2w)', digits: 3 }],
          view: { azimuth: 30, elevation: 24 },
          caption: 'The red curve is the slice of the saddle in the direction $\\theta$: $z = t^2\\cos 2\\theta$. For $\\theta$ near $0$ it opens up (a valley), near $90^\\circ$ it opens down (a ridge), and at exactly $45^\\circ$ it is flat. That mix of up and down is what $D < 0$ detects.',
        },
        {
          type: 'p',
          text: 'When $D = 0$ the quadratic approximation is degenerate and higher-order terms decide. All three functions $x^4 + y^4$, $-x^4 - y^4$ and $x^4 - y^4$ have a critical point at the origin with $D = 0$, and they give a minimum, a maximum and a saddle respectively. You must study the function directly, for instance by checking it along lines through the point.',
        },
        {
          type: 'derivation',
          title: 'Classify the critical points of $f(x, y) = x^4 + y^4 - 4xy + 1$',
          steps: [
            { tex: 'f_x = 4x^3 - 4y = 0, \\quad f_y = 4y^3 - 4x = 0', why: 'Set both partials to zero: $y = x^3$ and $x = y^3$.' },
            { tex: 'x = (x^3)^3 = x^9 \\implies x(x^8 - 1) = 0 \\implies x = 0, \\pm 1', why: 'Substitute the first into the second and factor. Do not divide by $x$: that would lose $x = 0$. The other real roots come from $x^8 = 1$.' },
            { tex: '(0, 0),\\ (1, 1),\\ (-1, -1)', why: 'Recover $y = x^3$ for each $x$.' },
            { tex: 'D = (12x^2)(12y^2) - (-4)^2 = 144x^2y^2 - 16', why: 'Here $f_{xx} = 12x^2$, $f_{yy} = 12y^2$, $f_{xy} = -4$.' },
            { tex: 'D(0, 0) = -16 < 0: \\text{saddle}; \\quad D(\\pm 1, \\pm 1) = 128 > 0,\\ f_{xx} = 12 > 0: \\text{min}', why: 'Apply the test at each point. Both minima have value $f = 1 + 1 - 4 + 1 = -1$.' },
          ],
          result: 'Saddle at $(0, 0)$; local minima $-1$ at $(1, 1)$ and $(-1, -1)$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'error',
      prompt: 'A student classifies the critical points of $f(x, y) = x^3 + y^3 - 3xy$. Tap the first line that is wrong.',
      lines: [
        '$f_x = 3x^2 - 3y$ and $f_y = 3y^2 - 3x$',
        'Setting both to $0$: $y = x^2$ and $x = y^2$, so the critical points are $(0, 0)$ and $(1, 1)$',
        '$f_{xx} = 6x$, $f_{yy} = 6y$, $f_{xy} = -3$',
        'At $(0, 0)$: $D = (0)(0) - (-3)^2 = 0 + 9 = 9$',
        'Since $D > 0$, $(0, 0)$ is a local extremum',
      ],
      errorLines: [4],
      explanation: 'Line 4 mishandles the sign: $-(-3)^2 = -9$, because the square is computed first and then subtracted. So $D(0, 0) = -9 < 0$ and $(0, 0)$ is a **saddle point**. (A warning sign: with $f_{xx}(0,0) = 0$, the product $f_{xx}f_{yy}$ is $0$, so $D$ can never be positive there.) At $(1, 1)$, $D = 36 - 9 = 27 > 0$ with $f_{xx} = 6 > 0$, so $(1, 1)$ is a local minimum with value $-1$.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'truefalse',
      prompt: 'If $\\nabla f(a, b) = \\vec{0}$ and $D(a, b) = 0$, then $(a, b)$ must be a saddle point.',
      answer: false,
      explanation: '$D = 0$ means the test is **inconclusive**, not that the point is a saddle. At the origin, $x^4 + y^4$ has a minimum, $-x^4 - y^4$ a maximum and $x^4 - y^4$ a saddle, and all three have $D = 0$ there. You have to look at the function itself.',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'concept',
      title: 'Absolute extrema on closed, bounded regions',
      blocks: [
        {
          type: 'p',
          text: 'For a continuous $f$ on a closed interval $[a, b]$, the [[extreme-value-theorem]] guaranteed an [[absolute-extremum|absolute maximum and minimum]], found among the critical numbers and the endpoints. In two variables, intervals become regions and endpoints become whole boundary curves.',
        },
        {
          type: 'theorem',
          name: 'Extreme value theorem (two variables)',
          text: 'If $f$ is continuous on a [[calc3-closed-bounded-set|closed, bounded set]] $R$ in the plane, then $f$ attains an absolute maximum value and an absolute minimum value on $R$.',
        },
        {
          type: 'steps',
          items: [
            { title: 'Interior', text: 'Find the critical points of $f$ inside $R$ and evaluate $f$ there. You do not need to classify them.' },
            { title: 'Boundary', text: 'Find the largest and smallest values of $f$ on the boundary. Parametrize each edge so $f$ becomes a one-variable function, then use Calculus I, including the corners.' },
            { title: 'Compare', text: 'The largest of all these values is the absolute maximum; the smallest is the absolute minimum.' },
          ],
        },
        {
          type: 'derivation',
          title: '$f(x, y) = x^2 - 2xy + 2y$ on the rectangle $0 \\le x \\le 3$, $0 \\le y \\le 2$',
          steps: [
            { tex: 'f_x = 2x - 2y = 0,\\ f_y = -2x + 2 = 0 \\implies (1, 1),\\ f(1, 1) = 1', why: 'Interior critical point. (It happens to be a saddle, $D = -4$, but the method only needs its value.)' },
            { tex: 'y = 0:\\ f = x^2,\\ 0 \\le x \\le 3 \\implies \\text{values from } 0 \\text{ to } 9', why: 'Bottom edge: increasing in $x$.' },
            { tex: 'x = 3:\\ f = 9 - 4y,\\ 0 \\le y \\le 2 \\implies \\text{values from } 1 \\text{ to } 9', why: 'Right edge: decreasing in $y$.' },
            { tex: 'y = 2:\\ f = x^2 - 4x + 4 = (x - 2)^2 \\implies \\text{values from } 0 \\text{ to } 4', why: 'Top edge: a one-variable minimum $0$ at $x = 2$, and the maximum $4$ at the corner $x = 0$.' },
            { tex: 'x = 0:\\ f = 2y \\implies \\text{values from } 0 \\text{ to } 4', why: 'Left edge.' },
            { tex: '\\max = 9 \\text{ at } (3, 0), \\qquad \\min = 0 \\text{ at } (0, 0) \\text{ and } (2, 2)', why: 'Compare every candidate value: $1, 0, 9, 1, 4, 0, 4$.' },
          ],
          result: 'The absolute maximum is $9$ and the absolute minimum is $0$. Both occur on the boundary, which is typical.',
        },
        {
          type: 'graph',
          x: [-0.5, 3.5],
          y: [-0.5, 2.5],
          equal: true,
          implicit: [{ expr: 'x^2 - 2x*y + 2y', levels: [0, 1, 2, 4, 6, 8], label: 'level curves of $f$', color: 'purple' }],
          segments: [
            { from: [0, 0], to: [3, 0], color: 'blue' },
            { from: [3, 0], to: [3, 2], color: 'blue' },
            { from: [3, 2], to: [0, 2], color: 'blue' },
            { from: [0, 2], to: [0, 0], color: 'blue' },
          ],
          points: [
            { x: 3, y: 0, label: 'max 9', color: 'green' },
            { x: 0, y: 0, label: 'min 0', color: 'red' },
            { x: 2, y: 2, label: 'min 0', color: 'red' },
            { x: 1, y: 1, label: 'saddle', color: 'orange' },
          ],
          caption: 'The blue rectangle is $R$. On the top edge, the level curve $f = 0$ just touches the boundary at $(2, 2)$: that is the edge minimum from the one-variable calculation.',
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'The most common lost points: forgetting the corners, forgetting an edge, or keeping a critical point that lies **outside** the region. Make a table of every candidate point and its value before you decide.',
        },
      ],
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'order',
      prompt: 'Put the steps for finding the absolute extrema of a continuous $f$ on a closed, bounded region $R$ in order.',
      lines: [
        'Find the critical points of $f$ that lie inside $R$, and evaluate $f$ at each',
        'Restrict $f$ to each piece of the boundary to get one-variable functions',
        'Find the extreme values of those one-variable functions, including at the corners',
        'Compare all the candidate values: the largest is the absolute max, the smallest the absolute min',
      ],
      distractors: ['Discard every critical point where $D < 0$ before evaluating anything'],
      explanation: 'Interior candidates, then boundary candidates (which needs the restriction step before the one-variable optimization), then a single comparison. You do not need the second derivative test at all: saddles are simply never the largest or smallest value, so the comparison handles them automatically.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'numeric',
      prompt: 'Find the absolute **maximum** value of $f(x, y) = x^2 + 2y^2 - x$ on the closed disk $x^2 + y^2 \\le 1$.',
      label: 'absolute max $=$',
      answer: '9/4',
      hint: 'Inside: $\\nabla f = \\vec{0}$ at $(\\frac{1}{2}, 0)$. On the boundary, substitute $y^2 = 1 - x^2$ to get a function of $x$ on $[-1, 1]$.',
      explanation: 'Interior: $f_x = 2x - 1 = 0$, $f_y = 4y = 0$ give $(\\frac{1}{2}, 0)$ with $f = -\\frac{1}{4}$. Boundary: $f = x^2 + 2(1 - x^2) - x = 2 - x^2 - x$ for $-1 \\le x \\le 1$. Its derivative $-2x - 1$ vanishes at $x = -\\frac{1}{2}$, giving $2 - \\frac{1}{4} + \\frac{1}{2} = \\frac{9}{4}$; the endpoints give $f(-1) = 2$ and $f(1) = 0$. So the absolute maximum is $\\frac{9}{4}$, at $(-\\frac{1}{2}, \\pm\\frac{\\sqrt{3}}{2})$, and the absolute minimum is $-\\frac{1}{4}$.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'An application: fitting a line by least squares',
      blocks: [
        {
          type: 'p',
          text: 'You have data points $(x_i, y_i)$ and want the line $y = mx + b$ that fits them best. "Best" usually means least squares: minimize the sum of squared vertical errors. The unknowns are $m$ and $b$, so this is a two-variable minimization, and everything in this lesson applies.',
        },
        {
          type: 'math',
          tex: 'S(m, b) = \\sum_{i = 1}^{n} \\left(y_i - m x_i - b\\right)^2',
        },
        {
          type: 'derivation',
          title: 'Fit a line to $(0, 1)$, $(1, 3)$, $(2, 4)$',
          steps: [
            { tex: 'S_m = -2\\sum x_i (y_i - m x_i - b) = 0', why: 'Partial derivative in $m$, by the chain rule on each square.' },
            { tex: 'S_b = -2\\sum (y_i - m x_i - b) = 0', why: 'Partial derivative in $b$.' },
            { tex: 'm\\sum x_i^2 + b\\sum x_i = \\sum x_i y_i, \\quad m\\sum x_i + nb = \\sum y_i', why: 'Rearranged, these are the [[normal-equations]] from linear algebra.' },
            { tex: '5m + 3b = 11, \\quad 3m + 3b = 8', why: 'With $\\sum x_i = 3$, $\\sum x_i^2 = 5$, $\\sum y_i = 8$, $\\sum x_i y_i = 0 + 3 + 8 = 11$, $n = 3$.' },
            { tex: 'm = \\tfrac{3}{2}, \\quad b = \\tfrac{7}{6}', why: 'Subtract the equations: $2m = 3$. Then $3b = 8 - \\frac{9}{2} = \\frac{7}{2}$.' },
            { tex: 'D = (2\\textstyle\\sum x_i^2)(2n) - (2\\sum x_i)^2 = (10)(6) - 6^2 = 24 > 0, \\ S_{mm} = 10 > 0', why: 'Second derivative test confirms a minimum (here also the absolute minimum, since $S$ is a quadratic that opens upward).' },
          ],
          result: 'The least-squares line is $y = \\frac{3}{2}x + \\frac{7}{6}$, with total squared error $S = \\frac{1}{6}$.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Profiling with a fitted line',
          text: 'Game programmers fit lines to measurements constantly: frame time against entity count, load time against asset size. The fit tells you the per-entity cost (the slope) and the fixed overhead (the intercept). The program below solves the normal equations directly and runs the second derivative test on $S(m, b)$. This is the [[stat-least-squares-line]] you may know from statistics, derived with calculus.',
        },
        {
          type: 'code',
          title: 'fit_line.cpp',
          runnable: true,
          code: `#include <cstdio>

int main() {
    // Measured frame times (ms) for n = 0..4 extra enemies on screen.
    const double xs[] = {0, 1, 2, 3, 4};
    const double ys[] = {1.1, 2.9, 5.2, 7.1, 8.8};
    const int n = 5;

    double Sx = 0, Sy = 0, Sxx = 0, Sxy = 0;
    for (int i = 0; i < n; ++i) {
        Sx += xs[i];
        Sy += ys[i];
        Sxx += xs[i] * xs[i];
        Sxy += xs[i] * ys[i];
    }
    // grad S = 0 gives the normal equations:  m*Sxx + b*Sx = Sxy,  m*Sx + b*n = Sy.
    const double det = Sxx * n - Sx * Sx;
    const double m = (Sxy * n - Sx * Sy) / det;
    const double b = (Sxx * Sy - Sx * Sxy) / det;

    // Second-derivative test for S(m, b): S_mm = 2 Sxx, S_bb = 2n, S_mb = 2 Sx.
    const double D = (2 * Sxx) * (2 * n) - (2 * Sx) * (2 * Sx);

    double S = 0;
    for (int i = 0; i < n; ++i) S += (ys[i] - m * xs[i] - b) * (ys[i] - m * xs[i] - b);
    std::printf("m = %.4f  b = %.4f  S(m,b) = %.4f\\n", m, b, S);
    std::printf("D = %.1f  S_mm = %.1f  -> %s\\n", D, 2 * Sxx, (D > 0 && Sxx > 0) ? "local minimum" : "not a minimum");
}`,
          output: `m = 1.9600  b = 1.1000  S(m,b) = 0.0920
D = 200.0  S_mm = 60.0  -> local minimum`,
          annotations: [
            { lines: '9-15', text: 'The four sums that appear in the normal equations.' },
            { lines: '17-19', text: 'Solve the $2 \\times 2$ system $\\nabla S = \\vec{0}$ by Cramer\'s rule.' },
            { lines: 22, text: '$D = S_{mm}S_{bb} - S_{mb}^2$, the determinant of the Hessian of $S$. It is positive whenever the $x_i$ are not all equal.' },
            { lines: 26, text: 'Each extra enemy costs about $1.96$ ms; the fixed overhead is about $1.1$ ms.' },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'numeric',
      prompt: 'Find the intercept $b$ of the least-squares line $y = mx + b$ for the data points $(0, 0)$, $(1, 2)$, $(2, 2)$.',
      label: '$b =$',
      answer: '1/3',
      hint: 'Here $n = 3$, $\\sum x_i = 3$, $\\sum x_i^2 = 5$, $\\sum y_i = 4$, $\\sum x_i y_i = 6$. Solve $5m + 3b = 6$ and $3m + 3b = 4$.',
      explanation: 'Subtracting the normal equations gives $2m = 2$, so $m = 1$. Then $3b = 4 - 3 = 1$ and $b = \\frac{1}{3}$. The best line is $y = x + \\frac{1}{3}$. Its residuals are $-\\frac{1}{3}, \\frac{2}{3}, -\\frac{1}{3}$, which sum to $0$, exactly as the equation $S_b = 0$ requires.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'fill',
      prompt: 'Complete the second derivative test.',
      template: 'At a critical point, compute $D = f_{xx}f_{yy} -$ ___. If $D > 0$ and $f_{xx} < 0$, the point is a local ___. If $D < 0$, it is a ___. If $D = 0$, the test is ___.',
      blanks: [{ answers: ['$f_{xy}^2$'] }, { answers: ['maximum'] }, { answers: ['saddle point'] }, { answers: ['inconclusive'] }],
      wordBank: ['$f_{xy}^2$', '$f_{xy}$', 'maximum', 'minimum', 'saddle point', 'inconclusive', 'a minimum'],
      explanation: '$D$ is the determinant of the Hessian, $f_{xx}f_{yy} - f_{xy}^2$. Positive $D$ means the surface curves the same way in every direction, and the sign of $f_{xx}$ says which way: negative means cupped down, a maximum. Negative $D$ means mixed curvature, a saddle. $D = 0$ leaves the decision to higher-order terms.',
    },
  ],
  takeaways: [
    'At an interior local extremum where the partials exist, $\\nabla f = \\vec{0}$: the tangent plane is horizontal. Such points, plus points where a partial fails to exist, are the critical points.',
    'Second derivative test: $D = f_{xx}f_{yy} - f_{xy}^2$. $D > 0$, $f_{xx} > 0$: min. $D > 0$, $f_{xx} < 0$: max. $D < 0$: saddle. $D = 0$: no conclusion.',
    '$D$ is the determinant of the Hessian; the test reads off whether the local quadratic form curves the same way in every direction.',
    'On a closed, bounded region a continuous $f$ has an absolute max and min. Check interior critical points and the whole boundary (edges and corners), then compare values.',
    'Least-squares fitting is a two-variable minimization: $\\nabla S = \\vec{0}$ gives the normal equations.',
  ],
  reading: [
    {
      title: 'OpenStax Calculus Volume 3, section 4.7: Maxima/Minima Problems',
      url: 'https://openstax.org/details/books/calculus-volume-3',
      source: 'openstax',
      note: 'Free textbook. Section 4.7 proves the second derivative test and works through absolute extrema on several regions.',
    },
    {
      title: "Paul's Online Math Notes: Calculus III",
      url: 'https://tutorial.math.lamar.edu/Classes/CalcIII/CalcIII.aspx',
      source: 'other',
      note: 'See "Relative Minimums and Maximums" and "Absolute Minimums and Maximums" under Applications of Partial Derivatives.',
    },
    {
      title: 'Wikipedia: Second partial derivative test',
      url: 'https://en.wikipedia.org/wiki/Second_partial_derivative_test',
      source: 'wikipedia',
      note: 'The test in $n$ variables, stated with the eigenvalues of the Hessian.',
    },
  ],
};
