import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'calc3-gradient',
  title: 'Directional Derivatives and the Gradient',
  summary: 'The slope of a surface depends on which way you walk. One vector, the gradient, encodes every one of those slopes: it points straight uphill, it is perpendicular to the contour lines, and it is the normal vector that lights every heightmap and signed-distance surface in a game.',
  minutes: 19,
  objectives: [
    'Compute a directional derivative $D_{\\vec{u}} f = \\nabla f \\cdot \\vec{u}$, normalizing the direction first',
    'Explain why $\\nabla f$ points in the direction of steepest ascent, with maximum rate $|\\nabla f|$',
    'Prove and use the fact that the gradient is perpendicular to level curves and level surfaces',
    'Find tangent planes and normal lines to level surfaces $F(x, y, z) = k$',
    'Compute terrain normals from a heightmap and use them for diffuse lighting',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Slopes in every direction',
      blocks: [
        {
          type: 'p',
          text: 'Stand on a hillside. Walk east and the ground may rise gently; walk north and it may drop steeply. The partial derivatives $f_x$ and $f_y$ give the slopes in just two of the infinitely many compass directions. The **directional derivative** gives the slope in any direction you choose.',
        },
        {
          type: 'definition',
          term: 'Directional derivative',
          text: 'Let $\\vec{u} = \\langle a, b \\rangle$ be a [[unit-vector]]. The [[calc3-directional-derivative]] of $f$ at $(x_0, y_0)$ in the direction $\\vec{u}$ is\n\n$$D_{\\vec{u}} f(x_0, y_0) = \\lim_{h \\to 0} \\frac{f(x_0 + ha, y_0 + hb) - f(x_0, y_0)}{h},$$\n\nif the limit exists. With $\\vec{u} = \\mathbf{i}$ it is $f_x$; with $\\vec{u} = \\mathbf{j}$ it is $f_y$. (This course writes the standard basis vectors as $\\mathbf{i}$, $\\mathbf{j}$, $\\mathbf{k}$.)',
        },
        {
          type: 'p',
          text: 'Geometrically: cut the surface with the vertical plane through $(x_0, y_0)$ that runs in the direction $\\vec{u}$. The cut is a curve, and $D_{\\vec{u}} f$ is its slope, rise per unit of **horizontal** distance. That is why $\\vec{u}$ must have length $1$: one unit of $h$ must be one unit of ground covered.',
        },
        {
          type: 'plot3d',
          x: [-2, 2],
          y: [-2, 2],
          z: [-2, 4],
          surfaces: [{ expr: '4 - x^2/2 - y^2', color: 'blue', opacity: 0.45, label: '$z = 4 - \\frac{x^2}{2} - y^2$' }],
          contours: [-1, 0, 1, 2, 3],
          curves: [
            { x: '1 + t cos(w)', y: '0.5 + t sin(w)', z: '4 - (1 + t cos(w))^2/2 - (0.5 + t sin(w))^2', t: [-1, 1], color: 'red', label: 'slice in direction $\\vec{u}$' },
          ],
          vectors: [
            { from: [1, 0.5, 3.25], to: ['1 + cos(w)', '0.5 + sin(w)', 3.25], color: 'green', label: 'u' },
            { from: [1, 0.5, 3.25], to: ['1 + cos(w)', '0.5 + sin(w)', '3.25 - cos(w) - sin(w)'], color: 'orange' },
          ],
          points: [{ x: 1, y: 0.5, z: 3.25, label: 'P' }],
          sliders: [{ name: 'w', min: 0, max: 6.28, step: 0.02, value: 0, label: 'direction angle $\\theta$', play: true, loop: true, speed: 0.6 }],
          readouts: [{ label: '$D_{\\vec{u}} f = -\\cos\\theta - \\sin\\theta =$', expr: '-cos(w) - sin(w)', digits: 3 }],
          view: { azimuth: 60, elevation: 28 },
          caption: 'The green arrow is the horizontal unit direction $\\vec{u} = \\langle \\cos\\theta, \\sin\\theta \\rangle$. The orange arrow is tangent to the red slice: it covers the same ground and rises $D_{\\vec{u}} f$. Press ▶ and watch the slope change from uphill to downhill as $\\vec{u}$ swings around.',
        },
        {
          type: 'derivation',
          title: 'A formula from the chain rule',
          steps: [
            { tex: 'g(h) = f(x_0 + ha,\\ y_0 + hb)', why: 'Walk along the line through $(x_0, y_0)$ in direction $\\vec{u}$. The height along the walk is a one-variable function $g$, and $D_{\\vec{u}} f = g\'(0)$ by the definition.' },
            { tex: "g'(h) = f_x \\frac{d}{dh}(x_0 + ha) + f_y \\frac{d}{dh}(y_0 + hb) = f_x\\,a + f_y\\,b", why: '[[calc3-multivariable-chain-rule|Chain rule]], case 1, with $x = x_0 + ha$ and $y = y_0 + hb$. It needs $f$ differentiable.' },
            { tex: 'D_{\\vec{u}} f(x_0, y_0) = f_x(x_0, y_0)\\,a + f_y(x_0, y_0)\\,b', why: 'Set $h = 0$.' },
          ],
          result: 'Every directional derivative is a weighted mix of the two partial derivatives.',
        },
        {
          type: 'derivation',
          title: '$f(x, y) = x^3 - 3xy + 4y^2$ at $(1, 2)$, in the direction at angle $\\theta = \\frac{\\pi}{6}$',
          steps: [
            { tex: '\\vec{u} = \\langle \\cos\\tfrac{\\pi}{6}, \\sin\\tfrac{\\pi}{6} \\rangle = \\langle \\tfrac{\\sqrt{3}}{2}, \\tfrac{1}{2} \\rangle', why: 'A direction given by an angle is automatically a unit vector.' },
            { tex: 'f_x = 3x^2 - 3y = -3, \\quad f_y = -3x + 8y = 13 \\quad \\text{at } (1, 2)', why: 'Partial derivatives, evaluated at the point.' },
            { tex: 'D_{\\vec{u}} f = -3 \\cdot \\tfrac{\\sqrt{3}}{2} + 13 \\cdot \\tfrac{1}{2} = \\tfrac{13 - 3\\sqrt{3}}{2} \\approx 3.90', why: 'Apply the formula.' },
          ],
          result: 'Walking at $30^\\circ$ above the $x$-direction, $f$ rises about $3.90$ units per unit of distance.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'concept',
      title: 'The gradient vector',
      blocks: [
        {
          type: 'p',
          text: 'The formula $f_x a + f_y b$ is a [[dot-product]]: $\\langle f_x, f_y \\rangle \\cdot \\langle a, b \\rangle$. The first vector depends only on $f$ and the point, not on the direction. It deserves a name.',
        },
        {
          type: 'definition',
          term: 'Gradient',
          text: 'The [[calc3-gradient]] of $f(x, y)$ is the vector function\n\n$$\\nabla f(x, y) = \\langle f_x(x, y), f_y(x, y) \\rangle = \\frac{\\partial f}{\\partial x}\\mathbf{i} + \\frac{\\partial f}{\\partial y}\\mathbf{j}.$$\n\nFor $f(x, y, z)$, $\\nabla f = \\langle f_x, f_y, f_z \\rangle$. The symbol $\\nabla$ is read "del" or "nabla".',
        },
        {
          type: 'theorem',
          name: 'Directional derivative as a dot product',
          tex: 'D_{\\vec{u}} f = \\nabla f \\cdot \\vec{u} \\qquad (|\\vec{u}| = 1,\\ f \\text{ differentiable})',
          text: 'Same in three variables: $D_{\\vec{u}} f(x, y, z) = f_x u_1 + f_y u_2 + f_z u_3$.',
        },
        {
          type: 'derivation',
          title: '$f(x, y) = x^2 y^3 - 4y$ at $(2, -1)$ in the direction of $\\vec{v} = \\langle 2, 5 \\rangle$',
          steps: [
            { tex: '\\nabla f = \\langle 2xy^3,\\ 3x^2 y^2 - 4 \\rangle', why: 'Both partial derivatives.' },
            { tex: '\\nabla f(2, -1) = \\langle 2(2)(-1),\\ 3(4)(1) - 4 \\rangle = \\langle -4, 8 \\rangle', why: 'Evaluate at the point. Note $(-1)^3 = -1$ and $(-1)^2 = 1$.' },
            { tex: '|\\vec{v}| = \\sqrt{4 + 25} = \\sqrt{29}, \\quad \\vec{u} = \\tfrac{1}{\\sqrt{29}}\\langle 2, 5 \\rangle', why: '$\\vec{v}$ is not a unit vector, so normalize it. This is the step people forget.' },
            { tex: 'D_{\\vec{u}} f = \\tfrac{1}{\\sqrt{29}}\\big((-4)(2) + (8)(5)\\big) = \\tfrac{32}{\\sqrt{29}} \\approx 5.94', why: 'Dot the gradient with the unit vector.' },
          ],
          result: '$D_{\\vec{u}} f(2, -1) = \\frac{32}{\\sqrt{29}} \\approx 5.94$.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Always normalize the direction',
          text: 'If you dot $\\nabla f$ with the non-unit $\\vec{v} = \\langle 2, 5 \\rangle$ you get $32$, which is $\\sqrt{29} \\approx 5.4$ times too big. The rate would change just because you described the same direction with a longer arrow, which makes no sense. Directions given as "toward the point $Q$" also need normalizing: use $\\vec{u} = \\overrightarrow{PQ} / |\\overrightarrow{PQ}|$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'numeric',
      prompt: 'Find the directional derivative of $f(x, y) = x^2 y$ at $(1, 2)$ in the direction of $\\vec{v} = \\langle 3, 4 \\rangle$.',
      label: '$D_{\\vec{u}} f(1, 2) =$',
      answer: '16/5',
      hint: '$\\nabla f = \\langle 2xy, x^2 \\rangle$. Normalize $\\vec{v}$: $|\\vec{v}| = 5$.',
      explanation: '$\\nabla f(1, 2) = \\langle 4, 1 \\rangle$ and $\\vec{u} = \\langle \\frac{3}{5}, \\frac{4}{5} \\rangle$. So $D_{\\vec{u}} f = 4 \\cdot \\frac{3}{5} + 1 \\cdot \\frac{4}{5} = \\frac{16}{5} = 3.2$. Without normalizing you would get $16$, five times too large.',
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'error',
      prompt: 'A student computes the rate of change of $f(x, y) = xy^2$ at $(3, 1)$ in the direction of $\\vec{v} = \\langle 1, 1 \\rangle$. Tap the first line that is wrong.',
      lines: [
        '$\\nabla f = \\langle y^2, 2xy \\rangle$',
        '$\\nabla f(3, 1) = \\langle 1, 6 \\rangle$',
        '$D_{\\vec{u}} f = \\nabla f \\cdot \\vec{v} = \\langle 1, 6 \\rangle \\cdot \\langle 1, 1 \\rangle$',
        '$D_{\\vec{u}} f = 7$',
      ],
      errorLines: [3],
      explanation: 'Line 3 dots the gradient with $\\vec{v}$, but $|\\vec{v}| = \\sqrt{2}$, not $1$. Use $\\vec{u} = \\frac{1}{\\sqrt{2}}\\langle 1, 1 \\rangle$. Then $D_{\\vec{u}} f = \\frac{1 + 6}{\\sqrt{2}} = \\frac{7}{\\sqrt{2}} \\approx 4.95$. The gradient in lines 1 and 2 is correct.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'The gradient points straight uphill',
      blocks: [
        {
          type: 'p',
          text: 'Now use the geometry of the dot product. If $\\theta$ is the angle between $\\nabla f$ and the unit vector $\\vec{u}$, then $D_{\\vec{u}} f = |\\nabla f|\\,|\\vec{u}|\\cos\\theta = |\\nabla f|\\cos\\theta$. As you turn $\\vec{u}$, only $\\cos\\theta$ changes, and $\\cos\\theta$ ranges from $-1$ to $1$.',
        },
        {
          type: 'theorem',
          name: 'Steepest ascent',
          text: 'Let $f$ be differentiable with $\\nabla f(P) \\ne \\vec{0}$. At $P$:\n\n- the **maximum** of $D_{\\vec{u}} f$ is $|\\nabla f(P)|$, reached when $\\vec{u}$ points along $\\nabla f(P)$ ($\\theta = 0$);\n- the **minimum** is $-|\\nabla f(P)|$, in the direction $-\\nabla f(P)$ (steepest descent);\n- $D_{\\vec{u}} f = 0$ when $\\vec{u} \\perp \\nabla f(P)$: walking that way you neither climb nor descend, because you are following the [[calc3-level-curve|level curve]] through $P$.',
        },
        {
          type: 'graph',
          x: [-3, 3],
          y: [-2.2, 2.2],
          equal: true,
          implicit: [{ expr: '4 - x^2/2 - y^2', levels: [0, 1, 2, 3, 3.6], label: 'contours of $f = 4 - \\frac{x^2}{2} - y^2$', color: 'purple' }],
          segments: [
            { from: [1, 0.5], to: [0, -0.5], arrow: true, color: 'red', label: '∇f' },
            { from: [1, 0.5], to: ['1 + cos(w)', '0.5 + sin(w)'], arrow: true, color: 'blue', label: 'u' },
          ],
          points: [{ x: 1, y: 0.5, label: 'P' }, { x: 0, y: 0, color: 'gray' }],
          sliders: [{ name: 'w', min: 0, max: 6.28, step: 0.02, value: 0.5, label: 'direction angle of $\\vec{u}$' }],
          readouts: [
            { label: '$D_{\\vec{u}} f = \\nabla f \\cdot \\vec{u} =$', expr: '-cos(w) - sin(w)', digits: 3 },
            { label: 'maximum possible $|\\nabla f| = \\sqrt{2} \\approx$', expr: 'sqrt(2)', digits: 3 },
          ],
          caption: 'Same hill as above, seen from overhead. $\\nabla f(1, \\frac{1}{2}) = \\langle -1, -1 \\rangle$. Turn $\\vec{u}$ until $D_{\\vec{u}} f$ peaks at $\\sqrt{2}$: it lines up with the red arrow. The gray dot is the summit. Notice that steepest ascent does **not** aim at it. It aims across the contours by the shortest route.',
        },
        {
          type: 'derivation',
          title: '$f(x, y) = xe^y$ at $P(2, 0)$',
          steps: [
            { tex: '\\nabla f = \\langle e^y, xe^y \\rangle, \\quad \\nabla f(2, 0) = \\langle 1, 2 \\rangle', why: 'Gradient at the point.' },
            { tex: '\\max D_{\\vec{u}} f = |\\langle 1, 2 \\rangle| = \\sqrt{5} \\approx 2.24', why: 'The steepest rate is the length of the gradient, in the direction $\\langle 1, 2 \\rangle / \\sqrt{5}$.' },
            { tex: '\\vec{u} = \\tfrac{1}{\\sqrt{5}}\\langle 2, -1 \\rangle \\implies D_{\\vec{u}} f = \\tfrac{2 - 2}{\\sqrt{5}} = 0', why: 'A direction perpendicular to the gradient gives zero rate: this is the direction of the level curve $xe^y = 2$ through $P$.' },
          ],
          result: 'From $P$, $f$ can increase at most $\\sqrt{5}$ units per unit of distance, by heading along $\\langle 1, 2 \\rangle$.',
        },
        {
          type: 'callout',
          variant: 'analogy',
          title: 'Reading a topographic map',
          text: 'On a military topographic map the contour lines are level curves of elevation: the map is a [[calc3-contour-map]]. Where they bunch together, $|\\nabla f|$ is large: steep ground. Water runs straight down the slope along $-\\nabla f$, crossing the contours at right angles, and that is how you trace drainage lines and valleys on the map. A vehicle that cannot climb the steepest grade can still cross the hill by heading off the gradient direction at an angle, so that $|\\nabla f|\\cos\\theta$ is a grade it can handle. That is exactly what a switchback road does.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'mcq',
      prompt: 'At your position $P$ on a hill, the elevation function has $\\nabla f(P) = \\langle 3, -4 \\rangle$. Which unit direction keeps your elevation constant, to first order?',
      options: [
        { text: '$\\langle \\frac{3}{5}, -\\frac{4}{5} \\rangle$', why: 'That is the gradient direction itself: the steepest climb, at rate $|\\nabla f| = 5$.' },
        { text: '$\\langle -\\frac{3}{5}, \\frac{4}{5} \\rangle$', why: 'That is $-\\nabla f / |\\nabla f|$: the steepest descent, rate $-5$.' },
        { text: '$\\langle \\frac{4}{5}, \\frac{3}{5} \\rangle$', correct: true, why: '$\\langle 3, -4 \\rangle \\cdot \\langle 4, 3 \\rangle = 12 - 12 = 0$. It is perpendicular to the gradient, so tangent to the contour line through $P$.' },
        { text: '$\\langle \\frac{3}{5}, \\frac{4}{5} \\rangle$', why: 'Flipping one sign does not make a perpendicular vector: $\\langle 3, -4 \\rangle \\cdot \\langle 3, 4 \\rangle = 9 - 16 = -7$, so you would descend at rate $-\\frac{7}{5}$.' },
      ],
      explanation: 'Zero rate means $\\nabla f \\cdot \\vec{u} = 0$. To get a vector perpendicular to $\\langle a, b \\rangle$ in the plane, swap the components and negate one: $\\langle b, -a \\rangle$ or $\\langle -b, a \\rangle$. Here that gives $\\langle -4, -3 \\rangle$ or $\\langle 4, 3 \\rangle$, and normalizing (length $5$) gives the answer. Its opposite, $\\langle -\\frac{4}{5}, -\\frac{3}{5} \\rangle$, also works.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'numeric',
      prompt: 'At a point on a slope the elevation gradient has length $|\\nabla f| = 0.8$ (an $80\\%$ grade at its steepest). A vehicle can safely climb a grade of at most $0.4$. At what angle $\\theta$, in degrees, to the uphill gradient direction should it head so that it climbs at exactly that grade?',
      label: '$\\theta =$',
      unit: '°',
      answer: '60',
      tolerance: 0.5,
      hint: 'The climbing rate in direction $\\vec{u}$ is $|\\nabla f|\\cos\\theta$. Set it equal to $0.4$.',
      explanation: '$0.8\\cos\\theta = 0.4$, so $\\cos\\theta = \\frac{1}{2}$ and $\\theta = 60^\\circ$. Heading $60^\\circ$ to either side of straight uphill climbs at a $40\\%$ grade. Any larger angle is gentler still; at $90^\\circ$ you follow the contour and the grade is $0$.',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'concept',
      title: 'The gradient is perpendicular to level curves',
      blocks: [
        {
          type: 'p',
          text: 'The steepest-ascent picture suggests that the gradient crosses each level curve at a right angle. The chain rule proves it in two lines.',
        },
        {
          type: 'derivation',
          title: 'Why $\\nabla f \\perp$ the level curve',
          steps: [
            { tex: 'f(x(t), y(t)) = k \\ \\text{ for all } t', why: 'Let $\\vec{r}(t) = \\langle x(t), y(t) \\rangle$ trace the level curve $f(x, y) = k$ through $P$, with $\\vec{r}(t_0) = P$.' },
            { tex: 'f_x\\,x\'(t) + f_y\\,y\'(t) = 0', why: 'Differentiate both sides with the chain rule; the right side is a constant.' },
            { tex: '\\nabla f(P) \\cdot \\vec{r}\\,\'(t_0) = 0', why: 'Recognize the left side as a dot product. $\\vec{r}\\,\'(t_0)$ is tangent to the level curve, so $\\nabla f(P)$ is [[orthogonal]] to it (when both are nonzero).' },
          ],
          result: 'At every point where $\\nabla f \\ne \\vec{0}$, the gradient is perpendicular to the level curve through that point.',
        },
        {
          type: 'graph',
          x: [-3.5, 3],
          y: [-2.4, 3],
          equal: true,
          implicit: [
            {
              expr: '3e^(-((x - 1)^2 + y^2)) + 2e^(-((x + 1.5)^2 + (y - 1)^2))',
              levels: [0.2, 0.6, 1.1, 1.7, 2.4],
              label: 'level curves of a two-hill terrain',
              color: 'purple',
            },
          ],
          field: {
            x: '-6(x - 1)e^(-((x - 1)^2 + y^2)) - 4(x + 1.5)e^(-((x + 1.5)^2 + (y - 1)^2))',
            y: '-6y e^(-((x - 1)^2 + y^2)) - 4(y - 1)e^(-((x + 1.5)^2 + (y - 1)^2))',
            n: 15,
            normalize: true,
            color: 'gray',
          },
          caption: 'Gray arrows: the direction of $\\nabla f$ at grid points (all drawn the same length). Every arrow crosses the purple contours at a right angle and points uphill toward a summit. Between the hills the arrows arrive from two sides and split toward the two summits: a saddle point, which the next unit studies.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Flow fields for RTS pathing',
          text: 'Strategy games often move hundreds of units with a **flow field**: compute a "cost to the goal" value at every grid cell, then each unit simply steps along $-\\nabla(\\text{cost})$, steepest descent toward the goal. One field serves every unit, and units flow around obstacles because the cost contours bend around them.',
        },
      ],
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'truefalse',
      prompt: 'At a point where $\\nabla f \\ne \\vec{0}$, the gradient vector is tangent to the level curve of $f$ through that point.',
      answer: false,
      explanation: 'It is **perpendicular** to the level curve. Along the level curve $f$ is constant, so the rate of change in the tangent direction is $0 = \\nabla f \\cdot \\vec{T}$. The gradient instead points across the contours, toward higher values, by the shortest route.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'concept',
      title: 'Level surfaces and their tangent planes',
      blocks: [
        {
          type: 'p',
          text: 'The same argument works one dimension up. For $F(x, y, z)$, a [[calc3-level-surface|level surface]] $F(x, y, z) = k$ is a surface in space: a sphere, an ellipsoid, the zero set of a game\'s signed distance function. Any curve $\\vec{r}(t)$ on the surface satisfies $F(\\vec{r}(t)) = k$, so the chain rule gives $\\nabla F \\cdot \\vec{r}\\,\'(t) = 0$. The gradient is perpendicular to **every** curve on the surface through $P$, so it is a normal vector to the surface.',
        },
        {
          type: 'theorem',
          name: 'Tangent plane and normal line to $F(x, y, z) = k$ at $P(x_0, y_0, z_0)$',
          tex: 'F_x(P)(x - x_0) + F_y(P)(y - y_0) + F_z(P)(z - z_0) = 0',
          text: 'This is the [[calc3-tangent-plane]], valid when $\\nabla F(P) \\ne \\vec{0}$. The [[calc3-normal-line]] is $\\langle x, y, z \\rangle = \\langle x_0, y_0, z_0 \\rangle + t\\,\\nabla F(P)$.',
        },
        {
          type: 'derivation',
          title: 'The ellipsoid $\\frac{x^2}{4} + y^2 + \\frac{z^2}{9} = 3$ at $(-2, 1, -3)$',
          steps: [
            { tex: '\\tfrac{4}{4} + 1 + \\tfrac{9}{9} = 3 \\ \\checkmark', why: 'Confirm the point is on the surface.' },
            { tex: '\\nabla F = \\langle \\tfrac{x}{2},\\ 2y,\\ \\tfrac{2z}{9} \\rangle \\implies \\nabla F(-2, 1, -3) = \\langle -1, 2, -\\tfrac{2}{3} \\rangle', why: 'Gradient of $F(x, y, z) = \\frac{x^2}{4} + y^2 + \\frac{z^2}{9}$.' },
            { tex: '-(x + 2) + 2(y - 1) - \\tfrac{2}{3}(z + 3) = 0', why: 'Tangent plane: the gradient dotted with $\\langle x - x_0, y - y_0, z - z_0 \\rangle$.' },
            { tex: '3x - 6y + 2z + 18 = 0', why: 'Multiply by $-3$ to clear the fraction, then collect constants: $6 + 6 + 6 = 18$.' },
          ],
          result: 'Tangent plane $3x - 6y + 2z + 18 = 0$; normal line $\\langle -2, 1, -3 \\rangle + t\\langle -1, 2, -\\frac{2}{3} \\rangle$.',
        },
        {
          type: 'plot3d',
          x: [-4, 4],
          y: [-3, 3],
          z: [-6, 6],
          equal: true,
          parametricSurfaces: [
            { x: '2sqrt(3) sin(v) cos(u)', y: 'sqrt(3) sin(v) sin(u)', z: '3sqrt(3) cos(v)', u: [0, '2pi'], v: [0, 'pi'], color: 'blue', opacity: 0.45, label: 'ellipsoid $F = 3$' },
            {
              x: '-2 + 2u/sqrt(5) + 2v/(7sqrt(5))',
              y: '1 + u/sqrt(5) - 4v/(7sqrt(5))',
              z: '-3 - 15v/(7sqrt(5))',
              u: [-1.3, 1.3],
              v: [-1.3, 1.3],
              color: 'orange',
              opacity: 0.85,
              label: 'tangent plane $3x - 6y + 2z + 18 = 0$',
            },
          ],
          vectors: [{ from: [-2, 1, -3], to: [-2.9, 2.8, -3.6], color: 'red', label: '∇F' }],
          points: [{ x: -2, y: 1, z: -3, label: 'P' }],
          view: { azimuth: 70, elevation: 5 },
          caption: 'The red arrow is $0.9\\,\\nabla F(P)$, pointing outward, perpendicular to the orange tangent plane. Turn the plot to see the plane just kissing the ellipsoid.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why this agrees with the first lesson',
          text: 'A graph $z = f(x, y)$ is the level surface $F(x, y, z) = f(x, y) - z = 0$. Its gradient is $\\nabla F = \\langle f_x, f_y, -1 \\rangle$: exactly the normal vector you read off the tangent plane in the lesson on tangent planes. Level surfaces are the more general picture; graphs are a special case.',
        },
      ],
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'numeric',
      prompt: 'What is the maximum rate of change of $f(x, y, z) = xy + z^2$ at the point $(1, 2, 2)$? Give an exact answer or a decimal to two places.',
      label: 'max rate $=$',
      answer: 'sqrt(21)',
      answerTex: '\\sqrt{21} \\approx 4.58',
      hint: 'The maximum rate is $|\\nabla f|$. Here $\\nabla f = \\langle y, x, 2z \\rangle$.',
      explanation: '$\\nabla f(1, 2, 2) = \\langle 2, 1, 4 \\rangle$, so the maximum rate is $|\\nabla f| = \\sqrt{4 + 1 + 16} = \\sqrt{21} \\approx 4.58$, achieved in the direction $\\frac{1}{\\sqrt{21}}\\langle 2, 1, 4 \\rangle$. The steepest-ascent theorem works in any number of variables, because it only uses $\\nabla f \\cdot \\vec{u} = |\\nabla f|\\cos\\theta$.',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'expr',
      prompt: 'Find the tangent plane to the sphere $x^2 + y^2 + z^2 = 14$ at the point $(1, 2, 3)$. Solve for $z$.',
      label: '$z =$',
      answer: '(14 - x - 2y)/3',
      variables: ['x', 'y'],
      hint: '$\\nabla F = \\langle 2x, 2y, 2z \\rangle$, which is $\\langle 2, 4, 6 \\rangle$ at the point. Divide by $2$ to simplify.',
      explanation: 'The normal is $\\langle 1, 2, 3 \\rangle$ (half the gradient), so the plane is $(x - 1) + 2(y - 2) + 3(z - 3) = 0$, that is $x + 2y + 3z = 14$, and $z = \\frac{14 - x - 2y}{3}$. For a sphere centered at the origin the normal points along the radius, as it should.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'concept',
      title: 'Normals for lighting: heightmaps and signed distance fields',
      blocks: [
        {
          type: 'p',
          text: 'Real-time lighting runs on normals. The simplest diffuse (Lambert) model makes a surface element\'s brightness proportional to $\\max(0, \\vec{n} \\cdot \\vec{L})$, where $\\vec{n}$ is the unit normal and $\\vec{L}$ the unit vector toward the light. Gradients are how engines get $\\vec{n}$.',
        },
        {
          type: 'heading',
          text: 'Heightmap terrain',
        },
        {
          type: 'p',
          text: 'A terrain is a surface $z = h(x, y)$, stored as a grid of heights. As a level surface $F = h(x, y) - z = 0$ it has normal $\\langle h_x, h_y, -1 \\rangle$; flip it to point up, $\\vec{n} \\propto \\langle -h_x, -h_y, 1 \\rangle$. On the grid, estimate $h_x$ and $h_y$ by central differences of neighboring samples. Steep ground gets normals that lean far from vertical and therefore catch light from the side.',
        },
        {
          type: 'code',
          title: 'terrain_normals.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdio>
#include <utility>

struct Vec3 { double x, y, z; };

Vec3 normalize(Vec3 v) {
    const double L = std::sqrt(v.x * v.x + v.y * v.y + v.z * v.z);
    return {v.x / L, v.y / L, v.z / L};
}
double dot(Vec3 a, Vec3 b) { return a.x * b.x + a.y * b.y + a.z * b.z; }

// Terrain height in metres; the grid stores samples of it, like a heightmap texture.
double terrain(double x, double y) { return 2.0 * std::sin(0.5 * x) * std::cos(0.3 * y); }

int main() {
    constexpr int N = 64;
    constexpr double cell = 0.25;  // metres between samples
    static double h[N][N];
    for (int i = 0; i < N; ++i)
        for (int j = 0; j < N; ++j) h[i][j] = terrain(i * cell, j * cell);

    const Vec3 sun = normalize({-1.0, -1.0, 2.0});  // unit vector toward the light
    const std::pair<int, int> samples[] = {{4, 4}, {12, 30}, {40, 10}};
    for (auto [i, j] : samples) {
        // Central differences on the grid approximate h_x and h_y.
        const double hx = (h[i + 1][j] - h[i - 1][j]) / (2 * cell);
        const double hy = (h[i][j + 1] - h[i][j - 1]) / (2 * cell);
        const Vec3 n = normalize({-hx, -hy, 1.0});          // upward normal of z = h(x, y)
        const double shade = std::fmax(0.0, dot(n, sun));   // Lambert diffuse term

        const double x = i * cell, y = j * cell;            // exact h_x for comparison
        const double hxExact = std::cos(0.5 * x) * std::cos(0.3 * y);
        std::printf("(%2d,%2d) hx = %.4f (exact %.4f)  n = (%.4f, %.4f, %.4f)  shade = %.4f\\n",
                    i, j, hx, hxExact, n.x, n.y, n.z, shade);
    }
}`,
          output: `( 4, 4) hx = 0.8362 (exact 0.8384)  n = (-0.6401, 0.0650, 0.7655)  shade = 0.8598
(12,30) hx = -0.0443 (exact -0.0444)  n = (0.0402, 0.4215, 0.9059)  shade = 0.5512
(40,10) hx = 0.2070 (exact 0.2076)  n = (-0.1893, -0.3582, 0.9143)  shade = 0.9700`,
          annotations: [
            { lines: '27-28', text: 'Central differences of the neighboring samples: the grid version of the partial derivatives, accurate to $O(\\text{cell}^2)$.' },
            { lines: 29, text: 'The upward normal $\\langle -h_x, -h_y, 1 \\rangle$, normalized so the dot product below is a cosine.' },
            { lines: 30, text: 'Lambert\'s law: brightness is the cosine of the angle between the normal and the light, clamped at $0$ for faces turned away.' },
            { lines: '32-33', text: 'For this test terrain $h_x = \\cos(0.5x)\\cos(0.3y)$ exactly. The grid estimate agrees to two or three decimals.' },
          ],
        },
        {
          type: 'heading',
          text: 'Signed distance fields',
        },
        {
          type: 'p',
          text: 'In raymarching, a shape is the zero level surface of a signed distance function $d(\\vec{p})$: the distance to the surface, negative inside. The normal is the normalized gradient, $\\vec{n} = \\nabla d / |\\nabla d|$. For a sphere $d = |\\vec{p}| - r$ and $\\nabla d = \\vec{p}/|\\vec{p}|$: the normal points straight out from the center, as it should. For complicated scenes shaders estimate $\\nabla d$ with the same central differences, six extra evaluations of $d$ per pixel:',
        },
        {
          type: 'code',
          title: 'sdf_normal.cpp (excerpt)',
          code: `Vec3 sdfNormal(Vec3 p) {
    const double e = 1e-4;  // small step
    return normalize({ sceneSDF({p.x + e, p.y, p.z}) - sceneSDF({p.x - e, p.y, p.z}),
                       sceneSDF({p.x, p.y + e, p.z}) - sceneSDF({p.x, p.y - e, p.z}),
                       sceneSDF({p.x, p.y, p.z + e}) - sceneSDF({p.x, p.y, p.z - e}) });
}`,
          annotations: [{ lines: '3-5', text: 'Each component is a central difference of $d$; the common factor $\\frac{1}{2e}$ is dropped because the vector is normalized anyway.' }],
        },
      ],
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'mcq',
      prompt: 'A terrain is the graph $z = h(x, y)$. Which vector is an **upward** normal to the terrain at a point?',
      options: [
        { text: '$\\langle h_x, h_y, 1 \\rangle$', why: 'Sign error in the horizontal part. Check a ramp $h = x$, rising to the east: the normal should lean west, toward $-x$, but this vector leans east.' },
        { text: '$\\langle h_x, h_y, 0 \\rangle$', why: 'That is the 2D gradient of $h$ placed in the floor: the uphill direction, which lies along the terrain\'s slope rather than perpendicular to it.' },
        { text: '$\\langle -h_x, -h_y, 1 \\rangle$', correct: true, why: 'It is $-\\nabla F$ for $F = h(x, y) - z$, and its $z$-component is positive, so it points up.' },
        { text: '$\\langle 1, 1, h \\rangle$', why: 'The height $h$ itself does not determine the tilt; only its derivatives do. Raising the whole terrain by $10$ m does not change any normal.' },
      ],
      explanation: 'Treat the terrain as the level surface $F(x, y, z) = h(x, y) - z = 0$. Then $\\nabla F = \\langle h_x, h_y, -1 \\rangle$ is normal, pointing down. Negating it gives the upward normal $\\langle -h_x, -h_y, 1 \\rangle$, which a renderer normalizes and dots with the light direction.',
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'fill',
      prompt: 'Complete the summary of the gradient.',
      template: 'For a unit vector $\\vec{u}$, $D_{\\vec{u}} f = \\nabla f \\cdot \\vec{u} = |\\nabla f|$ ___. Its largest value is ___, in the direction of $\\nabla f$. The gradient is ___ to the level curves of $f$.',
      blanks: [{ answers: ['$\\cos\\theta$'] }, { answers: ['$|\\nabla f|$'] }, { answers: ['perpendicular'] }],
      wordBank: ['$\\cos\\theta$', '$\\sin\\theta$', '$|\\nabla f|$', '$1$', 'perpendicular', 'tangent', 'parallel'],
      explanation: 'The dot product of $\\nabla f$ with a unit vector is $|\\nabla f|\\cos\\theta$, which is largest ($|\\nabla f|$) at $\\theta = 0$. Along a level curve the rate of change is zero, so the gradient is perpendicular to it.',
    },
  ],
  takeaways: [
    'The directional derivative $D_{\\vec{u}} f$ is the slope of the surface in the horizontal direction $\\vec{u}$. It equals $\\nabla f \\cdot \\vec{u}$, and $\\vec{u}$ must be a unit vector.',
    'The gradient $\\nabla f = \\langle f_x, f_y \\rangle$ (or with $f_z$) points in the direction of steepest ascent; the maximum rate is $|\\nabla f|$, and $-\\nabla f$ is steepest descent.',
    'Because $f$ is constant along level curves and level surfaces, $\\nabla f$ is perpendicular to them.',
    'The tangent plane to $F(x, y, z) = k$ at $P$ is $\\nabla F(P) \\cdot \\langle x - x_0, y - y_0, z - z_0 \\rangle = 0$. Graphs $z = f(x, y)$ are the special case $F = f(x, y) - z$.',
    'Games compute normals as gradients: $\\langle -h_x, -h_y, 1 \\rangle$ for heightmaps and $\\nabla d / |\\nabla d|$ for signed distance fields, both usually by central differences.',
  ],
  reading: [
    {
      title: 'OpenStax Calculus Volume 3, section 4.6: Directional Derivatives and the Gradient',
      url: 'https://openstax.org/details/books/calculus-volume-3',
      source: 'openstax',
      note: 'Free textbook. Section 4.6 covers directional derivatives, the gradient, level curves and tangent planes to level surfaces.',
    },
    {
      title: 'Khan Academy: Multivariable calculus',
      url: 'https://www.khanacademy.org/math/multivariable-calculus',
      source: 'khan',
      note: 'The gradient and directional-derivative videos show why the gradient is the direction of steepest ascent.',
    },
    {
      title: 'Inigo Quilez: distance functions',
      url: 'https://iquilezles.org/articles/distfunctions/',
      source: 'other',
      note: 'A catalogue of signed distance functions used in raymarching; their normals are computed from the gradient as in this lesson.',
    },
    {
      title: 'Wikipedia: Gradient',
      url: 'https://en.wikipedia.org/wiki/Gradient',
      source: 'wikipedia',
      note: 'Definitions in other coordinate systems and the gradient\'s role across physics and engineering.',
    },
  ],
};
