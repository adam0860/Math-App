import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'calc3-vector-fields',
  title: 'Vector Fields',
  summary: 'A vector at every point: wind maps, gravity, gradients and the flow fields that steer crowds and particles in games. Learn to read them, compute with them, and follow their flow lines.',
  minutes: 18,
  objectives: [
    'Define a vector field $\\vec{F} = \\langle P, Q \\rangle$ or $\\langle P, Q, R \\rangle$ and sketch or read its arrow plot',
    'Describe the inverse-square gravitational field and other 3D fields',
    'Compute gradient fields $\\nabla f$ and explain why they cross level curves at right angles',
    'Find flow lines by solving $\\vec{r}\\,\'(t) = \\vec{F}(\\vec{r}(t))$ for simple fields',
    'Connect flow fields to crowd pathfinding and particle systems, and see why Euler integration drifts',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'A vector at every point',
      blocks: [
        {
          type: 'p',
          text: 'So far, functions of several variables have returned **numbers**: a height, a temperature, a density. Many physical quantities are not numbers but **vectors**: the wind velocity at each point of a weather map, the gravitational pull at each point around a planet, the current at each point of a river. A function that attaches a [[vector]] to every point is a [[calc3-vector-field]].',
        },
        {
          type: 'definition',
          term: 'Vector field',
          text: 'A vector field on a region $D$ of the plane is a function $\\vec{F}$ that assigns to each point $(x, y)$ in $D$ a two-dimensional vector\n\n$$\\vec{F}(x, y) = P(x, y)\\,\\mathbf{i} + Q(x, y)\\,\\mathbf{j} = \\langle P(x, y),\\ Q(x, y) \\rangle.$$\n\nIn space, $\\vec{F}(x, y, z) = \\langle P, Q, R \\rangle$. The scalar functions $P$, $Q$, $R$ are the **component functions**. This course writes the standard unit vectors as $\\mathbf{i}$, $\\mathbf{j}$, $\\mathbf{k}$.',
        },
        {
          type: 'p',
          text: 'To picture a field, draw the vector $\\vec{F}(x, y)$ as an arrow whose **tail** sits at $(x, y)$, for a grid of sample points. Real arrows are often too long and overlap, so plots scale them all down by the same factor: relative lengths are honest, absolute lengths are not.',
        },
        {
          type: 'graph',
          x: [-3, 3],
          y: [-3, 3],
          equal: true,
          height: 340,
          field: { x: '-y', y: 'x', n: 13 },
          parametric: [{ x: 'sqrt(a^2 + b^2) cos(t)', y: 'sqrt(a^2 + b^2) sin(t)', t: [0, '2pi'], color: 'gray', dashed: true }],
          segments: [
            { from: [0, 0], to: ['a', 'b'], color: 'green', dashed: true },
            { from: ['a', 'b'], to: ['a - 0.35b', 'b + 0.35a'], color: 'red', arrow: true, label: 'F(a, b)' },
          ],
          points: [{ x: 'a', y: 'b', color: 'red' }],
          sliders: [
            { name: 'a', min: -2.5, max: 2.5, step: 0.1, value: 1.5, label: '$a$' },
            { name: 'b', min: -2.5, max: 2.5, step: 0.1, value: 0.8, label: '$b$' },
          ],
          readouts: [
            { label: '$\\vec{F}(a, b) = \\langle -b, a \\rangle$, length', expr: 'sqrt(a^2 + b^2)', digits: 3 },
            { label: '$\\vec{F} \\cdot \\langle a, b \\rangle =$', expr: '-b a + a b', digits: 3 },
          ],
          caption: 'The rotation field $\\vec{F}(x, y) = \\langle -y, x \\rangle$. The red arrow (drawn at $0.35$ times its true length) is always perpendicular to the green position vector and as long as it, so the field swirls counterclockwise and grows with distance from the origin, like a spinning turntable.',
        },
        {
          type: 'derivation',
          title: 'Why $\\langle -y, x \\rangle$ circulates counterclockwise',
          steps: [
            { tex: '\\vec{F}(1, 0) = \\langle 0, 1 \\rangle, \\quad \\vec{F}(0, 1) = \\langle -1, 0 \\rangle, \\quad \\vec{F}(-1, 0) = \\langle 0, -1 \\rangle', why: 'Sample a few points. On the positive $x$-axis the arrow points up; on the positive $y$-axis it points left: counterclockwise.' },
            { tex: '\\vec{F}(x, y) \\cdot \\langle x, y \\rangle = -yx + xy = 0', why: 'The [[dot-product|dot product]] with the [[position-vector|position vector]] is zero, so every arrow is tangent to the circle through its point.' },
            { tex: '|\\vec{F}(x, y)| = \\sqrt{y^2 + x^2} = r', why: 'The length equals the distance from the origin: the speed of a point on a rigid spinning disk.' },
          ],
          result: '$\\langle -y, x \\rangle$ is the velocity field of a disk rotating counterclockwise with angular speed $1$. Its negative, $\\langle y, -x \\rangle$, rotates clockwise.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'You have seen a cousin of this before',
          text: 'A [[slope-field|slope field]] from Calculus II draws a short segment with slope $f(x, y)$ at each point. That is a vector field with the lengths thrown away: the direction $\\langle 1, f(x, y) \\rangle$ normalized. Vector fields keep the magnitude, which matters for speed, force and flux.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'mcq',
      prompt: 'Which formula produced this vector field?',
      graph: {
        type: 'graph',
        x: [-3, 3],
        y: [-3, 3],
        equal: true,
        field: { x: 'y', y: '-x', n: 11 },
        caption: 'A field plot with arrows scaled to fit.',
      },
      options: [
        { text: '$\\vec{F}(x, y) = \\langle y, -x \\rangle$', correct: true, why: 'At $(1, 0)$ it gives $\\langle 0, -1 \\rangle$ (down) and at $(0, 1)$ it gives $\\langle 1, 0 \\rangle$ (right): a clockwise swirl, as drawn.' },
        { text: '$\\vec{F}(x, y) = \\langle -y, x \\rangle$', why: 'At $(1, 0)$ this points **up**, giving a counterclockwise swirl. The plot rotates the other way.' },
        { text: '$\\vec{F}(x, y) = \\langle x, y \\rangle$', why: 'This field points straight away from the origin (radially outward), with no swirl at all.' },
        { text: '$\\vec{F}(x, y) = \\langle -x, -y \\rangle$', why: 'This points straight toward the origin, like a sink.' },
      ],
      explanation: 'Test a couple of easy points. On the positive $x$-axis the arrows point down, so $Q(1, 0) < 0$; on the positive $y$-axis they point right, so $P(0, 1) > 0$. Only $\\langle y, -x \\rangle$ fits. Arrows are perpendicular to the position vector and grow with distance, the signature of a rotation field.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Fields in space: gravity and other inverse-square laws',
      blocks: [
        {
          type: 'p',
          text: 'The most important 3D field in physics is the [[phys-gravitational-field|gravitational field]]. A mass $M$ at the origin pulls a mass $m$ at position $\\vec{r} = \\langle x, y, z \\rangle$ toward the origin with a force of magnitude $\\frac{GMm}{|\\vec{r}|^2}$ (Newton). As a vector field:',
        },
        {
          type: 'math',
          tex: '\\vec{F}(\\vec{r}) = -\\frac{GMm}{|\\vec{r}|^3}\\,\\vec{r} = -GMm\\,\\frac{\\langle x, y, z \\rangle}{(x^2 + y^2 + z^2)^{3/2}}',
          caption: 'Direction: $-\\frac{\\vec{r}}{|\\vec{r}|}$, the [[unit-vector|unit vector]] toward the origin. Magnitude: $\\frac{GMm}{|\\vec{r}|^3} \\cdot |\\vec{r}| = \\frac{GMm}{|\\vec{r}|^2}$. The cube in the denominator is not a typo; one power is spent normalizing $\\vec{r}$.',
        },
        {
          type: 'plot3d',
          x: [-2, 2],
          y: [-2, 2],
          z: [-2, 2],
          equal: true,
          view: { azimuth: 30, elevation: 20 },
          field: { x: '-x/(x^2 + y^2 + z^2)^1.5', y: '-y/(x^2 + y^2 + z^2)^1.5', z: '-z/(x^2 + y^2 + z^2)^1.5', n: 4, color: 'blue' },
          parametricSurfaces: [{ x: '0.3 sin(u) cos(v)', y: '0.3 sin(u) sin(v)', z: '0.3 cos(u)', u: [0, 'pi'], v: [0, '2pi'], color: 'orange', opacity: 0.9, label: 'planet at the origin' }],
          caption: 'The inverse-square field $-\\frac{\\vec{r}}{|\\vec{r}|^3}$ sampled on a $4 \\times 4 \\times 4$ grid. Every arrow points at the planet; arrows at the corners, about three times farther away than the inner ones, are roughly nine times shorter. Spin it to see the arrows converge from every direction.',
        },
        {
          type: 'p',
          text: 'The electric field of a point charge, $\\vec{E} = \\frac{kQ}{|\\vec{r}|^3}\\vec{r}$, has the same shape with the sign set by the charge. Other common 3D fields include the velocity field of a fluid (each point gets the velocity of the fluid particle passing through it) and the wind field a flight simulator or artillery calculator samples along a trajectory.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Fields in a game engine',
          text: 'Engines store fields two ways. **Analytic** fields are functions you call: `Vec3 gravity(Vec3 p)` returning $-GM\\,p/|p|^3$ for a planet-hopping game. **Sampled** fields are 3D textures or grids, such as a wind volume or a fluid simulation\'s velocity grid, read with trilinear interpolation between grid points. Unity\'s Visual Effect Graph and Unreal\'s Niagara both ship "vector field" assets of the second kind for steering particles.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'numeric',
      prompt: 'Let $\\vec{F}(x, y) = \\langle x - y,\\ xy \\rangle$. Find the length $|\\vec{F}(1, 2)|$ of the arrow drawn at $(1, 2)$. An exact answer like `sqrt(5)` or a decimal to two places is accepted.',
      answer: 'sqrt(5)',
      answerTex: '\\sqrt{5}',
      hint: 'First evaluate both components at $(1, 2)$, then take the length.',
      explanation: '$\\vec{F}(1, 2) = \\langle 1 - 2,\\ 1 \\cdot 2 \\rangle = \\langle -1, 2 \\rangle$, so $|\\vec{F}(1, 2)| = \\sqrt{(-1)^2 + 2^2} = \\sqrt{5} \\approx 2.24$. The arrow at $(1, 2)$ points up and to the left. A field plot would draw it shorter than $\\sqrt{5}$ units, scaled by the same factor as every other arrow.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Gradient fields',
      blocks: [
        {
          type: 'p',
          text: 'Every differentiable scalar function hands you a vector field for free: its gradient. If $f(x, y)$ is a height map, the [[calc3-gradient-field|gradient field]] $\\nabla f = \\langle f_x, f_y \\rangle$ attaches to each point the direction of steepest ascent, with length equal to the steepest slope. In 3D, $\\nabla f = \\langle f_x, f_y, f_z \\rangle$.',
        },
        {
          type: 'graph',
          x: [-3, 3],
          y: [-2.5, 2.5],
          equal: true,
          height: 320,
          implicit: [
            { expr: 'x^2 + 2y^2', levels: [0.5, 2, 4.5, 8], color: 'purple', label: 'level curves $x^2 + 2y^2 = c$' },
            { expr: 'x^2 + 2y^2', levels: ['a^2 + 2b^2'], color: 'green' },
          ],
          field: { x: '2x', y: '4y', n: 13 },
          segments: [{ from: ['a', 'b'], to: ['a + 0.25(2a)', 'b + 0.25(4b)'], color: 'red', arrow: true, label: '∇f' }],
          points: [{ x: 'a', y: 'b', color: 'red' }],
          sliders: [
            { name: 'a', min: -2.4, max: 2.4, step: 0.1, value: 1.2, label: '$a$' },
            { name: 'b', min: -1.6, max: 1.6, step: 0.1, value: 0.7, label: '$b$' },
          ],
          readouts: [{ label: '$\\nabla f(a, b) = \\langle 2a, 4b \\rangle$, length', expr: 'sqrt(4a^2 + 16b^2)', digits: 3 }],
          caption: 'The gradient field of $f(x, y) = x^2 + 2y^2$ over its contour map. The red gradient (at a quarter of its length) always crosses the green level curve through its base at a right angle, pointing toward higher levels. Arrows are longest where the contours are crowded.',
        },
        {
          type: 'derivation',
          title: 'The gradient field of $f(x, y) = x^2y - y^3$',
          steps: [
            { tex: 'f_x = 2xy', why: 'Differentiate with respect to $x$, treating $y$ as a constant.' },
            { tex: 'f_y = x^2 - 3y^2', why: 'Differentiate with respect to $y$, treating $x$ as a constant.' },
            { tex: '\\nabla f(x, y) = \\langle 2xy,\\ x^2 - 3y^2 \\rangle', why: 'The components of the gradient field are the partial derivatives.' },
            { tex: '\\nabla f(2, 1) = \\langle 4,\\ 1 \\rangle', why: 'At $(2, 1)$ the surface rises fastest in the direction $\\langle 4, 1 \\rangle$, with slope $\\sqrt{17}$.' },
          ],
          result: 'Gradient fields are the vector fields you can "integrate back" to a single scalar function. Not every field is one: in two lessons you will learn to test for this and to recover $f$ from $\\nabla f$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why gradients cross level curves at right angles',
          text: 'Walk along a level curve $f = c$ with velocity $\\vec{r}\\,\'(t)$. Since $f$ stays constant, the [[chain-rule]] gives $0 = \\frac{d}{dt}f(\\vec{r}(t)) = \\nabla f \\cdot \\vec{r}\\,\'(t)$. So $\\nabla f$ is perpendicular to every direction along the level curve. In 3D the same argument says $\\nabla f$ is perpendicular to level **surfaces**, which is why the gradient of a signed distance field is the surface normal used for lighting.',
        },
        {
          type: 'p',
          text: 'Gravity is a gradient field too: $-\\frac{GMm}{|\\vec{r}|^3}\\vec{r} = \\nabla\\!\\left(\\frac{GMm}{|\\vec{r}|}\\right)$. That single fact is behind conservation of energy in orbits, and it is the theme of the lesson on conservative fields.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'expr',
      prompt: 'Let $f(x, y) = x^2\\sin y + y^3$. Enter the second component of the gradient field $\\nabla f$.',
      variables: ['x', 'y'],
      label: '$\\dfrac{\\partial f}{\\partial y} =$',
      answer: 'x^2 cos(y) + 3y^2',
      answerTex: 'x^2\\cos y + 3y^2',
      hint: 'Treat $x$ as a constant: $x^2$ is a constant coefficient in front of $\\sin y$.',
      explanation: '$\\frac{\\partial}{\\partial y}(x^2\\sin y) = x^2\\cos y$ and $\\frac{\\partial}{\\partial y}(y^3) = 3y^2$. So $\\nabla f = \\langle 2x\\sin y,\\ x^2\\cos y + 3y^2 \\rangle$. A common slip is writing $2x\\cos y$ for the second component, which differentiates with respect to both variables at once.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'error',
      prompt: 'A student finds the gradient field of $f(x, y) = x^3y^2 + \\sin(xy)$ and evaluates it at $(2, 0)$. Tap the first line that is wrong.',
      lines: [
        '$f_x = 3x^2y^2 + y\\cos(xy)$',
        '$f_y = 2x^3y + \\cos(xy)$',
        '$\\nabla f(2, 0) = \\langle 0 + 0,\\ 0 + \\cos 0 \\rangle$',
        '$= \\langle 0, 1 \\rangle$',
      ],
      errorLines: [2],
      explanation: 'Line 2 forgets the chain rule on $\\sin(xy)$: differentiating the inside $xy$ with respect to $y$ gives $x$, so $f_y = 2x^3y + x\\cos(xy)$. Line 1 got the analogous factor $y$ right. At $(2, 0)$: $f_x = 0$ and $f_y = 0 + 2\\cos 0 = 2$, so $\\nabla f(2, 0) = \\langle 0, 2 \\rangle$, twice as long as the student\'s vector.',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'concept',
      title: 'Flow lines: following the arrows',
      blocks: [
        {
          type: 'p',
          text: 'Drop a leaf on a river and it follows the current. Its path $\\vec{r}(t)$ has velocity equal to the field at every moment. Such a path is a [[calc3-flow-line|flow line]] (also called a streamline or integral curve):',
        },
        {
          type: 'math',
          tex: '\\vec{r}\\,\'(t) = \\vec{F}(\\vec{r}(t)) \\quad\\Longleftrightarrow\\quad x\'(t) = P(x, y), \\quad y\'(t) = Q(x, y)',
          caption: 'A system of differential equations. For simple fields you can solve it by hand; in games and simulations you solve it numerically, one small time step at a time.',
        },
        {
          type: 'derivation',
          title: 'Flow lines of $\\vec{F}(x, y) = \\langle x, -y \\rangle$',
          steps: [
            { tex: 'x\'(t) = x, \\qquad y\'(t) = -y', why: 'Write out the two component equations. Here they are uncoupled: each involves only one unknown.' },
            { tex: 'x(t) = x_0 e^{t}, \\qquad y(t) = y_0 e^{-t}', why: 'The solutions of $x\' = kx$ are exponentials $x_0e^{kt}$, where $(x_0, y_0)$ is the starting point at $t = 0$.' },
            { tex: 'x(t)\\,y(t) = x_0 y_0 e^{t}e^{-t} = x_0 y_0', why: 'Eliminate $t$: the product stays constant, so each flow line lies on a hyperbola $xy = c$.' },
          ],
          result: 'Particles stream in along the $y$-direction and out along the $x$-direction, sliding along hyperbolas. This is the flow near a **saddle** of a potential, or the "stretching" flow of a fluid.',
        },
        {
          type: 'graph',
          x: [-1, 4],
          y: [-1, 4],
          equal: true,
          height: 320,
          field: { x: 'x', y: '-y', n: 13 },
          parametric: [{ x: 'e^t', y: 'q e^(-t)', t: [-2, 1.6], color: 'blue', label: 'flow line $xy = q$' }],
          points: [{ x: 'e^k', y: 'q e^(-k)', color: 'red' }],
          segments: [{ from: ['e^k', 'q e^(-k)'], to: ['e^k + 0.3e^k', 'q e^(-k) - 0.3q e^(-k)'], color: 'red', arrow: true, label: 'F' }],
          sliders: [
            { name: 'q', min: 0.2, max: 3, step: 0.05, value: 1, label: 'starting height $y_0$ at $x_0 = 1$' },
            { name: 'k', min: -1.4, max: 1.35, step: 0.01, value: 0, label: 'time $t$', play: true },
          ],
          readouts: [{ label: '$x(t)\\,y(t) =$', expr: '(e^k)(q e^(-k))', digits: 3 }],
          caption: 'Press play: the red particle rides the flow line of $\\langle x, -y \\rangle$ that passes through $(1, y_0)$, and its velocity arrow is always tangent to the path. The product $xy$ never changes.',
        },
        {
          type: 'plot3d',
          x: [-1.6, 1.6],
          y: [-1.6, 1.6],
          z: [0, 3.2],
          equal: true,
          view: { azimuth: 30, elevation: 18 },
          field: { x: '-y', y: 'x', z: '0.3', n: 5, color: 'gray' },
          curves: [{ x: 'cos(t)', y: 'sin(t)', z: '0.3t', t: [0, 10.5], color: 'blue', label: 'flow line: a helix' }],
          points: [{ x: 'cos(s)', y: 'sin(s)', z: '0.3s', color: 'red' }],
          vectors: [{ from: ['cos(s)', 'sin(s)', '0.3s'], to: ['cos(s) - 0.6sin(s)', 'sin(s) + 0.6cos(s)', '0.3s + 0.18'], color: 'red', label: 'F' }],
          sliders: [{ name: 's', min: 0, max: 10.5, step: 0.05, value: 2, label: 'time $t$', play: true }],
          caption: 'In space, the field $\\langle -y, x, 0.3 \\rangle$ swirls around the $z$-axis while drifting upward. Its flow line through $(1, 0, 0)$ is the helix $\\langle \\cos t, \\sin t, 0.3t \\rangle$: check that its velocity $\\langle -\\sin t, \\cos t, 0.3 \\rangle$ equals $\\vec{F}$ at the particle.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Flow lines never cross',
          text: 'If $\\vec{F}$ has continuous first partial derivatives, the existence and uniqueness theorem for differential equations guarantees exactly one flow line through each point. Two flow lines that met at a point where $\\vec{F} \\ne \\vec{0}$ would be two different solutions with the same starting value, which is impossible. Flow lines can only appear to merge at points where $\\vec{F} = \\vec{0}$ (equilibria), and they take infinitely long to get there.',
        },
      ],
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'numeric',
      prompt: 'A particle starts at $(1, 1)$ and moves along the flow line of $\\vec{F}(x, y) = \\langle x, -y \\rangle$. What is its $x$-coordinate at time $t = \\ln 2$?',
      label: '$x(\\ln 2) =$',
      answer: '2',
      hint: 'The flow lines are $x(t) = x_0e^t$, $y(t) = y_0e^{-t}$.',
      explanation: '$x(\\ln 2) = 1 \\cdot e^{\\ln 2} = 2$, and $y(\\ln 2) = 1 \\cdot e^{-\\ln 2} = \\tfrac{1}{2}$. The particle is at $(2, \\tfrac{1}{2})$, still on the hyperbola $xy = 1$. Its velocity there is $\\vec{F}(2, \\tfrac{1}{2}) = \\langle 2, -\\tfrac{1}{2} \\rangle$: it keeps speeding up in $x$ and slowing down in $y$.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'truefalse',
      prompt: 'Two different flow lines of a vector field with continuous first partial derivatives can cross each other at a point where $\\vec{F} \\ne \\vec{0}$.',
      answer: false,
      explanation: 'At a crossing point, a particle would have two possible futures from the same position, but the velocity is fixed by the field: $\\vec{r}\\,\'(t) = \\vec{F}(\\vec{r}(t))$. With continuous partial derivatives, the uniqueness theorem for differential equations rules this out. Plots of streamlines therefore look like non-crossing strands, which is exactly why they are useful for visualizing flow.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'Flow fields in games: crowds and particles',
      blocks: [
        {
          type: 'p',
          text: 'Real-time strategy games and crowd simulations (think of hundreds of units in *Supreme Commander 2*, or the zombie hordes of a survival game) cannot afford a separate A* search per unit. Instead they compute one **flow field** per destination and let every unit follow its arrows. This is a vector field on a grid, and following it is computing flow lines.',
        },
        {
          type: 'steps',
          items: [
            { title: 'Cost field', text: 'Mark each grid cell walkable, slow (mud, a ford) or blocked (walls, cliffs).' },
            { title: 'Integration field', text: 'Run a breadth-first search or Dijkstra from the goal, storing at each cell the cost $d$ of the cheapest route to the goal. This is a scalar function on the grid.' },
            { title: 'Flow field', text: 'At each cell store the direction toward its cheapest neighbor: a discrete version of $-\\nabla d$, the direction of steepest descent of the distance.' },
            { title: 'Steering', text: 'Each frame, every unit looks up the arrow in its cell, blends it with separation from its neighbors, and moves a small step. The units trace flow lines down to the goal.' },
          ],
        },
        {
          type: 'p',
          text: '**Particle systems** (smoke, sparks, magic effects, debris) do the same thing in continuous space: each particle stores a position and, every frame, moves by $\\vec{F}(\\vec{p})\\,\\Delta t$. That is Euler\'s method for the flow-line equation. Euler steps follow the tangent, and a tangent line always leaves a curving path, so the error accumulates. For the rotation field, whose exact flow lines are circles, the drift is easy to measure.',
        },
        {
          type: 'code',
          title: 'advect.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdio>

struct Vec2 { double x, y; };
Vec2 operator+(Vec2 a, Vec2 b) { return {a.x + b.x, a.y + b.y}; }
Vec2 operator*(double s, Vec2 a) { return {s * a.x, s * a.y}; }

// The rotation field F(x, y) = <-y, x>. Its flow lines are circles.
Vec2 F(Vec2 p) { return {-p.y, p.x}; }

int main() {
    const double pi = std::acos(-1.0);
    const double dt = 0.05;
    const int steps = static_cast<int>(std::lround(2 * pi / dt));  // about one lap
    Vec2 euler{1, 0}, mid{1, 0};
    for (int i = 1; i <= steps; ++i) {
        euler = euler + dt * F(euler);                        // Euler step
        Vec2 half = mid + (0.5 * dt) * F(mid);                // midpoint (RK2) step
        mid = mid + dt * F(half);
        if (i % 42 == 0 || i == steps)
            std::printf("step %3d  Euler radius = %.4f  RK2 radius = %.4f\\n",
                        i, std::hypot(euler.x, euler.y), std::hypot(mid.x, mid.y));
    }
}`,
          output: `step  42  Euler radius = 1.0538  RK2 radius = 1.0000
step  84  Euler radius = 1.1106  RK2 radius = 1.0001
step 126  Euler radius = 1.1704  RK2 radius = 1.0001`,
          annotations: [
            { lines: 9, text: 'The field, evaluated wherever the particle currently is.' },
            { lines: 17, text: 'Euler: move along the arrow at the current point. Each step lands on a slightly larger circle, because the step is tangent to the circle.' },
            { lines: '18-19', text: 'Midpoint method: take a half step, sample the field there, and use that arrow for the full step. It cancels most of the outward drift.' },
          ],
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why Euler spirals outward here',
          text: 'One Euler step moves from $\\vec{p}$ to $\\vec{p} + \\Delta t\\,\\langle -p_y, p_x \\rangle$. The step is perpendicular to $\\vec{p}$, so by Pythagoras the new radius is $|\\vec{p}|\\sqrt{1 + \\Delta t^2}$. After $n$ steps the radius is $(1 + \\Delta t^2)^{n/2}$; with $\\Delta t = 0.05$ and $n = 126$ that is about $1.170$, exactly what the program prints. Smaller steps or a better integrator (RK2, RK4, or a symplectic method) keep particles on their flow lines.',
        },
      ],
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'order',
      prompt: 'Put the stages of a grid-based flow-field pathfinder in order.',
      lines: [
        'Assign a movement cost to every cell (blocked, slow or normal)',
        'Search outward from the goal to store each cell\'s cheapest cost-to-goal $d$',
        'At each cell, store an arrow pointing toward the neighbor with the smallest $d$',
        'Each frame, move every unit a small step along the arrow in its cell',
      ],
      distractors: ['Run a separate A* search from every unit to the goal'],
      explanation: 'The scalar cost-to-goal $d$ must exist before you can take its discrete gradient, and the arrows must exist before units can follow them. The pipeline is: costs, then distances (a scalar field), then arrows (roughly $-\\nabla d$, a vector field), then motion along flow lines. The distractor is the per-unit approach that flow fields are designed to replace: one search shared by every unit is far cheaper than hundreds of searches.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'fill',
      prompt: 'Complete the statements about gradient fields and flow lines.',
      template: 'The gradient field $\\nabla f$ is ___ to the level curves of $f$ and points toward ___ values of $f$. A curve $\\vec{r}(t)$ is a flow line of $\\vec{F}$ when $\\vec{r}\\,\'(t) =$ ___ for every $t$.',
      blanks: [{ answers: ['perpendicular'] }, { answers: ['larger'] }, { answers: ['$\\vec{F}(\\vec{r}(t))$'] }],
      wordBank: ['perpendicular', 'tangent', 'larger', 'smaller', '$\\vec{F}(\\vec{r}(t))$', '$\\vec{F}(t)$'],
      explanation: 'Along a level curve $f$ does not change, so $\\nabla f \\cdot \\vec{r}\\,\' = 0$: the gradient is perpendicular to it, and it points uphill, toward larger values. For a flow line the velocity must match the field **at the particle\'s current position** $\\vec{r}(t)$. Writing $\\vec{F}(t)$ would plug the time into the field, which makes no sense: the field depends on position, not on the clock.',
    },
  ],
  takeaways: [
    'A vector field assigns a vector $\\vec{F} = \\langle P, Q \\rangle$ (or $\\langle P, Q, R \\rangle$) to each point; plots draw scaled arrows with tails at sample points.',
    '$\\langle -y, x \\rangle$ rotates counterclockwise; $\\langle x, y \\rangle$ points outward; the gravitational field $-GMm\\,\\vec{r}/|\\vec{r}|^3$ points inward with strength $\\propto 1/|\\vec{r}|^2$.',
    'A gradient field $\\nabla f$ is perpendicular to the level curves (or surfaces) of $f$ and points toward larger values.',
    'Flow lines solve $\\vec{r}\\,\'(t) = \\vec{F}(\\vec{r}(t))$; for a field with continuous partials they never cross where $\\vec{F} \\ne \\vec{0}$.',
    'Game flow fields are discrete $-\\nabla(\\text{distance to goal})$ fields; particles follow flow lines with Euler steps, which drift unless the step is small or the integrator is better.',
  ],
  reading: [
    {
      title: 'OpenStax Calculus Volume 3 — 6.1 Vector Fields',
      url: 'https://openstax.org/details/books/calculus-volume-3',
      source: 'openstax',
      note: 'Section 6.1 has many sketched fields to practice reading, plus gradient fields and radial fields.',
    },
    {
      title: 'Khan Academy — Multivariable calculus',
      url: 'https://www.khanacademy.org/math/multivariable-calculus',
      source: 'khan',
      note: 'The "Vector fields" videos in the thinking-about-multivariable-functions unit show 2D and 3D fields and fluid-flow intuition.',
    },
    {
      title: 'Wikipedia — Vector field',
      url: 'https://en.wikipedia.org/wiki/Vector_field',
      source: 'wikipedia',
      note: 'Formal definition, gradient fields, flow curves and the existence and uniqueness of integral curves.',
    },
    {
      title: '3Blue1Brown',
      url: 'https://www.3blue1brown.com/',
      source: 'other',
      note: 'The divergence and curl video starts with beautiful animations of particles flowing along vector fields.',
    },
  ],
};
