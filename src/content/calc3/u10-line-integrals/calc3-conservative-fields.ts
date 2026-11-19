import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'calc3-conservative-fields',
  title: 'Conservative Fields and the Fundamental Theorem',
  summary: 'For gradient fields, the work along a path depends only on where it starts and ends. Prove the fundamental theorem for line integrals, test a field for conservativeness, find its potential, and meet the swirling field that breaks the test.',
  minutes: 20,
  objectives: [
    'State and prove the fundamental theorem for line integrals, $\\int_C \\nabla f \\cdot d\\vec{r} = f(\\vec{r}(b)) - f(\\vec{r}(a))$',
    'Explain the equivalence of path independence, zero circulation around closed curves, and being a gradient field',
    'Use the test $\\frac{\\partial P}{\\partial y} = \\frac{\\partial Q}{\\partial x}$ (and its 3D version) on simply connected domains',
    'Find a potential function by partial integration, in two and three variables',
    'Explain why $\\left\\langle \\frac{-y}{x^2 + y^2}, \\frac{x}{x^2 + y^2} \\right\\rangle$ passes the test but is not conservative',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'The fundamental theorem for line integrals',
      blocks: [
        {
          type: 'p',
          text: 'The Fundamental Theorem of Calculus says $\\int_a^b F\'(x)\\,dx = F(b) - F(a)$: integrate a derivative and only the endpoints survive. There is a line-integral version, and the "derivative" is the gradient.',
        },
        {
          type: 'theorem',
          name: 'Fundamental theorem for line integrals',
          tex: '\\int_C \\nabla f \\cdot d\\vec{r} = f(\\vec{r}(b)) - f(\\vec{r}(a))',
          text: 'Let $C$ be a piecewise-smooth curve given by $\\vec{r}(t)$, $a \\le t \\le b$, and let $f$ be a differentiable function whose gradient $\\nabla f$ is continuous on $C$. Then the line integral of the gradient field equals the change in $f$ from the start of $C$ to its end. This is the [[calc3-ftli]].',
        },
        {
          type: 'derivation',
          title: 'Proof (for a smooth curve)',
          steps: [
            { tex: '\\int_C \\nabla f \\cdot d\\vec{r} = \\int_a^b \\nabla f(\\vec{r}(t)) \\cdot \\vec{r}\\,\'(t)\\,dt', why: 'Definition of the line integral of a vector field.' },
            { tex: '= \\int_a^b \\left(\\frac{\\partial f}{\\partial x}\\frac{dx}{dt} + \\frac{\\partial f}{\\partial y}\\frac{dy}{dt} + \\frac{\\partial f}{\\partial z}\\frac{dz}{dt}\\right)dt', why: 'Write out the dot product.' },
            { tex: '= \\int_a^b \\frac{d}{dt}\\,f(\\vec{r}(t))\\,dt', why: 'That sum is exactly the multivariable [[chain-rule]] for the derivative of $f$ along the curve.' },
            { tex: '= f(\\vec{r}(b)) - f(\\vec{r}(a))', why: 'The ordinary Fundamental Theorem of Calculus, applied to the one-variable function $g(t) = f(\\vec{r}(t))$. For a piecewise-smooth curve, apply this to each piece; the intermediate values cancel in pairs.' },
          ],
          result: 'Integrating a gradient field along any path gives the change in the function. The route in between is irrelevant.',
        },
        {
          type: 'graph',
          x: [-3, 2.5],
          y: [-1.5, 2.5],
          equal: true,
          height: 320,
          implicit: [{ expr: 'x^2 + 2y^2', levels: [1, 3, 4, 6], color: 'purple', label: 'level curves of $f = x^2 + 2y^2$' }],
          field: { x: '2x', y: '4y', n: 13 },
          parametric: [
            { x: '-2 + 3t', y: 't', t: [0, 1], color: 'blue', label: 'straight path' },
            { x: '-2 + 3t', y: 't + w sin(pi t)', t: [0, 1], color: 'red', label: 'wiggly path' },
          ],
          points: [
            { x: -2, y: 0, label: 'A(−2, 0)' },
            { x: 1, y: 1, label: 'B(1, 1)' },
          ],
          sliders: [{ name: 'w', min: -1.5, max: 1.5, step: 0.05, value: 1, label: 'wiggle amplitude' }],
          readouts: [{ label: 'work on either path $= f(B) - f(A) =$', expr: '(1 + 2) - (4 + 0)', digits: 3 }],
          caption: 'The gradient field $\\nabla f = \\langle 2x, 4y \\rangle$. Bend the red path as much as you like: the work from $A$ (on the level curve $f = 4$) to $B$ (on $f = 3$) is always $3 - 4 = -1$, because only the levels of the endpoints matter.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Gravity is a gradient',
          text: 'The gravitational force $\\vec{F} = -\\frac{GMm}{|\\vec{r}|^3}\\vec{r}$ equals $\\nabla f$ with $f(\\vec{r}) = \\frac{GMm}{|\\vec{r}|}$. So the work gravity does on a satellite moving from distance $r_1$ to distance $r_2$ is $GMm\\left(\\frac{1}{r_2} - \\frac{1}{r_1}\\right)$, whatever its trajectory. Raising an orbit ($r_2 > r_1$) means gravity does negative work, which the engines must supply. Physicists write $\\vec{F} = -\\nabla U$ with the [[phys-potential-energy|potential energy]] $U = -f$; the minus sign makes "downhill in energy" the direction of the force.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'numeric',
      prompt: 'Let $f(x, y, z) = x^2y + yz$ and $\\vec{F} = \\nabla f$. Find $\\int_C \\vec{F} \\cdot d\\vec{r}$, where $C$ is any smooth path from $(1, 1, 1)$ to $(2, 1, 3)$.',
      answer: '5',
      hint: 'You do not need the path. Evaluate $f$ at the two endpoints.',
      explanation: 'By the fundamental theorem, $\\int_C \\nabla f \\cdot d\\vec{r} = f(2, 1, 3) - f(1, 1, 1) = (4 + 3) - (1 + 1) = 5$. Computing it the long way, with a parametrization and a dot product, would give the same $5$ on every path.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Path independence and closed loops',
      blocks: [
        {
          type: 'p',
          text: 'A vector field $\\vec{F}$ is [[calc3-conservative-field|conservative]] if $\\vec{F} = \\nabla f$ for some function $f$, called a [[calc3-potential-function|potential function]] for $\\vec{F}$. The fundamental theorem says that conservative fields have **path-independent** line integrals: any two paths with the same start and end give the same value. Path independence has an equivalent loop version.',
        },
        {
          type: 'theorem',
          name: 'Path independence $\\Leftrightarrow$ zero circulation',
          tex: '\\int_C \\vec{F} \\cdot d\\vec{r} \\text{ is path independent in } D \\iff \\oint_C \\vec{F} \\cdot d\\vec{r} = 0 \\text{ for every closed path } C \\text{ in } D',
          text: 'Why: two paths $C_1$, $C_2$ from $A$ to $B$ form a closed loop $C_1$ followed by $-C_2$, with $\\oint = \\int_{C_1} - \\int_{C_2}$. One side is zero exactly when the other is. The symbol $\\oint$ marks an integral around a closed curve.',
        },
        {
          type: 'p',
          text: 'Remarkably, the converse of the fundamental theorem also holds: path independence forces the field to be a gradient. To state it we need two words about the domain $D$. It is **open** if every point of $D$ has a small disk around it that stays in $D$ (no boundary points), and **connected** if any two points of $D$ can be joined by a path in $D$.',
        },
        {
          type: 'derivation',
          title: 'Why a path-independent field is conservative ($D$ open and connected)',
          steps: [
            { tex: 'f(x, y) = \\int_{(a, b)}^{(x, y)} \\vec{F} \\cdot d\\vec{r}', why: 'Fix a base point $(a, b)$ in $D$ and define $f$ as the work from there to $(x, y)$. Path independence makes this well defined: every path gives the same number. (Connected guarantees some path exists.)' },
            { tex: 'f(x, y) = \\int_{(a, b)}^{(x_1, y)} \\vec{F} \\cdot d\\vec{r} + \\int_{x_1}^{x} P(s, y)\\,ds', why: 'Choose a path that ends with a short horizontal segment from $(x_1, y)$ to $(x, y)$ inside $D$ (possible because $D$ is open). On that segment $dy = 0$, so only $P\\,dx$ contributes.' },
            { tex: '\\frac{\\partial f}{\\partial x} = 0 + P(x, y)', why: 'The first integral does not depend on $x$. Differentiate the second with the Fundamental Theorem of Calculus.' },
            { tex: '\\frac{\\partial f}{\\partial y} = Q(x, y) \\quad\\implies\\quad \\nabla f = \\vec{F}', why: 'The same argument with a path ending in a short vertical segment.' },
          ],
          result: 'On an open connected region: $\\vec{F}$ conservative $\\iff$ $\\int_C \\vec{F} \\cdot d\\vec{r}$ path independent $\\iff$ $\\oint_C \\vec{F} \\cdot d\\vec{r} = 0$ around every closed path. The proof even tells you what the potential is: the work done from a base point.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the name "conservative"',
          text: 'If a force field is conservative, a particle that travels around any loop and returns to its start has had zero net work done on it, so by the work–energy theorem its kinetic energy is back where it started. Energy is **conserved**. A [[phys-conservative-force|conservative force]] in physics (gravity, an ideal spring, electrostatics) is exactly a conservative vector field.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'fill',
      prompt: 'Complete the characterization of conservative fields on an open, connected region $D$.',
      template: '$\\vec{F}$ is conservative in $D$ exactly when $\\oint_C \\vec{F} \\cdot d\\vec{r} =$ ___ for every closed path $C$ in $D$. Then $\\int_C \\vec{F} \\cdot d\\vec{r}$ depends only on the ___ of $C$, and equals the change in the ___ .',
      blanks: [{ answers: ['$0$'] }, { answers: ['endpoints'] }, { answers: ['potential function'] }],
      wordBank: ['$0$', '$2\\pi$', 'endpoints', 'length', 'potential function', 'arc length', 'curvature'],
      explanation: 'Zero circulation around every loop is equivalent to path independence, which on an open connected region is equivalent to $\\vec{F} = \\nabla f$. The fundamental theorem then gives $\\int_C \\vec{F} \\cdot d\\vec{r} = f(\\text{end}) - f(\\text{start})$, the change in the potential $f$. Length and curvature of the path are irrelevant.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Testing a field: cross-partials and simply connected regions',
      blocks: [
        {
          type: 'p',
          text: 'Checking every closed path is impossible, so we want a test you can do with derivatives. Suppose $\\vec{F} = \\langle P, Q \\rangle = \\nabla f$ with continuous first partials. Then $P = f_x$ and $Q = f_y$, so $P_y = f_{xy}$ and $Q_x = f_{yx}$, and Clairaut\'s theorem says mixed partials agree:',
        },
        {
          type: 'theorem',
          name: 'A necessary condition',
          tex: '\\vec{F} = \\langle P, Q \\rangle \\text{ conservative (with } C^1 \\text{ components)} \\implies \\frac{\\partial P}{\\partial y} = \\frac{\\partial Q}{\\partial x}',
          text: 'If the cross-partials differ anywhere, the field is **not** conservative. Example: $\\langle x - y,\\ x - 2 \\rangle$ has $P_y = -1 \\ne 1 = Q_x$.',
        },
        {
          type: 'p',
          text: 'Is the converse true? Almost. It depends on the **shape** of the domain. A **simple** curve does not cross itself; a region $D$ is [[calc3-simply-connected|simply connected]] if it is connected and every simple closed curve in $D$ encloses only points of $D$. Informally: no holes, so every loop can be shrunk to a point without leaving $D$.',
        },
        {
          type: 'figure',
          svg: '<svg viewBox="0 0 520 262" xmlns="http://www.w3.org/2000/svg"><path d="M236.3 118.0 L237.4 122.9 L237.7 127.8 L237.0 132.7 L235.5 137.5 L233.2 142.1 L230.4 146.4 L227.0 150.4 L223.3 154.1 L219.4 157.6 L215.3 160.8 L211.3 163.9 L207.2 166.8 L203.3 169.6 L199.4 172.4 L195.6 175.1 L191.9 177.7 L188.1 180.4 L184.2 182.9 L180.2 185.2 L176.1 187.4 L171.8 189.3 L167.3 190.9 L162.7 192.1 L158.0 193.0 L153.2 193.4 L148.5 193.5 L143.7 193.3 L139.0 192.8 L134.5 192.1 L130.0 191.4 L125.6 190.6 L121.3 190.0 L117.0 189.5 L112.6 189.2 L108.1 189.2 L103.3 189.3 L98.4 189.6 L93.1 190.0 L87.6 190.4 L81.8 190.6 L75.8 190.6 L69.7 190.1 L63.7 189.2 L57.8 187.7 L52.3 185.5 L47.3 182.7 L43.0 179.3 L39.4 175.3 L36.6 170.7 L34.8 165.8 L33.8 160.6 L33.7 155.3 L34.4 149.9 L35.7 144.6 L37.5 139.6 L39.6 134.7 L41.8 130.1 L44.0 125.9 L46.0 121.8 L47.7 118.0 L49.1 114.3 L50.1 110.7 L50.7 107.1 L51.0 103.4 L51.1 99.6 L51.0 95.7 L50.9 91.6 L51.0 87.4 L51.3 83.1 L52.0 78.8 L53.1 74.6 L54.7 70.4 L56.7 66.4 L59.3 62.6 L62.3 59.1 L65.7 55.9 L69.4 52.9 L73.3 50.2 L77.5 47.7 L81.8 45.4 L86.2 43.2 L90.6 41.1 L95.1 39.0 L99.7 37.0 L104.4 35.0 L109.2 33.1 L114.2 31.3 L119.3 29.7 L124.6 28.3 L130.0 27.4 L135.5 26.8 L141.0 26.9 L146.5 27.5 L151.8 28.8 L156.9 30.8 L161.6 33.4 L166.0 36.5 L169.8 40.2 L173.2 44.3 L176.1 48.6 L178.5 53.0 L180.6 57.4 L182.4 61.7 L184.0 65.8 L185.7 69.6 L187.5 73.0 L189.5 76.1 L192.0 78.9 L194.8 81.4 L198.1 83.8 L201.9 86.2 L206.0 88.6 L210.5 91.1 L215.1 94.0 L219.7 97.1 L224.1 100.6 L228.1 104.5 L231.5 108.7 L234.3 113.2 Z" class="f-blue s-blue" fill-opacity="0.18" stroke-width="2"/><ellipse cx="128" cy="120" rx="55.2" ry="46.0" class="s-green" fill="none" stroke-width="2" stroke-opacity="1" /><ellipse cx="128" cy="120" rx="36.0" ry="30.0" class="s-green" fill="none" stroke-width="2" stroke-opacity="0.6" stroke-dasharray="5 4"/><ellipse cx="128" cy="120" rx="18.0" ry="15.0" class="s-green" fill="none" stroke-width="2" stroke-opacity="0.35" stroke-dasharray="5 4"/><circle cx="128.0" cy="120.0" r="3.0" class="f-green"/><path d="M118 74 L128 69 L128 79 Z" class="f-green"/><text x="130" y="232" text-anchor="middle" font-size="15">simply connected</text><text x="130" y="250" text-anchor="middle" font-size="13" class="t-gray">every loop shrinks to a point</text><path d="M496.3 118.0 L497.4 122.9 L497.7 127.8 L497.0 132.7 L495.5 137.5 L493.2 142.1 L490.4 146.4 L487.0 150.4 L483.3 154.1 L479.4 157.6 L475.3 160.8 L471.3 163.9 L467.2 166.8 L463.3 169.6 L459.4 172.4 L455.6 175.1 L451.9 177.7 L448.1 180.4 L444.2 182.9 L440.2 185.2 L436.1 187.4 L431.8 189.3 L427.3 190.9 L422.7 192.1 L418.0 193.0 L413.2 193.4 L408.5 193.5 L403.7 193.3 L399.0 192.8 L394.5 192.1 L390.0 191.4 L385.6 190.6 L381.3 190.0 L377.0 189.5 L372.6 189.2 L368.1 189.2 L363.3 189.3 L358.4 189.6 L353.1 190.0 L347.6 190.4 L341.8 190.6 L335.8 190.6 L329.7 190.1 L323.7 189.2 L317.8 187.7 L312.3 185.5 L307.3 182.7 L303.0 179.3 L299.4 175.3 L296.6 170.7 L294.8 165.8 L293.8 160.6 L293.7 155.3 L294.4 149.9 L295.7 144.6 L297.5 139.6 L299.6 134.7 L301.8 130.1 L304.0 125.9 L306.0 121.8 L307.7 118.0 L309.1 114.3 L310.1 110.7 L310.7 107.1 L311.0 103.4 L311.1 99.6 L311.0 95.7 L310.9 91.6 L311.0 87.4 L311.3 83.1 L312.0 78.8 L313.1 74.6 L314.7 70.4 L316.7 66.4 L319.3 62.6 L322.3 59.1 L325.7 55.9 L329.4 52.9 L333.3 50.2 L337.5 47.7 L341.8 45.4 L346.2 43.2 L350.6 41.1 L355.1 39.0 L359.7 37.0 L364.4 35.0 L369.2 33.1 L374.2 31.3 L379.3 29.7 L384.6 28.3 L390.0 27.4 L395.5 26.8 L401.0 26.9 L406.5 27.5 L411.8 28.8 L416.9 30.8 L421.6 33.4 L426.0 36.5 L429.8 40.2 L433.2 44.3 L436.1 48.6 L438.5 53.0 L440.6 57.4 L442.4 61.7 L444.0 65.8 L445.7 69.6 L447.5 73.0 L449.5 76.1 L452.0 78.9 L454.8 81.4 L458.1 83.8 L461.9 86.2 L466.0 88.6 L470.5 91.1 L475.1 94.0 L479.7 97.1 L484.1 100.6 L488.1 104.5 L491.5 108.7 L494.3 113.2 Z M412 120 A22 22 0 1 0 368 120 A22 22 0 1 0 412 120 Z" class="f-blue s-blue" fill-opacity="0.18" stroke-width="2" fill-rule="evenodd"/><text x="390" y="125" text-anchor="middle" font-size="13" class="t-red">hole</text><ellipse cx="390" cy="120" rx="58" ry="46" class="s-green" fill="none" stroke-width="2"/><path d="M380 74 L390 69 L390 79 Z" class="f-green"/><text x="390" y="232" text-anchor="middle" font-size="15">not simply connected</text><text x="390" y="250" text-anchor="middle" font-size="13" class="t-gray">a loop around the hole cannot shrink</text></svg>',
          alt: 'Left: a blob-shaped region with a green loop inside it and smaller dashed copies of the loop shrinking to a point; labeled simply connected. Right: the same kind of region with a circular hole cut out of the middle; a green loop goes around the hole; labeled not simply connected, a loop around the hole cannot shrink.',
          caption: 'The plane, a disk, a half-plane and any convex region are simply connected. A punctured plane or an annulus is not.',
          maxWidth: 480,
        },
        {
          type: 'theorem',
          name: 'The test for conservative fields',
          tex: '\\frac{\\partial P}{\\partial y} = \\frac{\\partial Q}{\\partial x} \\text{ throughout an open simply connected } D \\implies \\vec{F} = \\langle P, Q \\rangle \\text{ is conservative on } D',
          text: '($P$ and $Q$ need continuous first partial derivatives on $D$.) The proof uses Green\'s theorem from the next unit: on a simply connected region, $\\oint_C \\vec{F} \\cdot d\\vec{r}$ equals a double integral of $Q_x - P_y$ over the inside of $C$, which is zero.',
        },
        {
          type: 'p',
          text: 'In three dimensions there are three pairs of cross-partials. For $\\vec{F} = \\langle P, Q, R \\rangle$ with continuous partials on an open simply connected region of space (such as all of $\\mathbb{R}^3$), $\\vec{F}$ is conservative if and only if',
        },
        {
          type: 'math',
          tex: '\\frac{\\partial R}{\\partial y} = \\frac{\\partial Q}{\\partial z}, \\qquad \\frac{\\partial P}{\\partial z} = \\frac{\\partial R}{\\partial x}, \\qquad \\frac{\\partial Q}{\\partial x} = \\frac{\\partial P}{\\partial y}',
          caption: 'These three differences are the components of the **curl** of $\\vec{F}$, written $\\nabla \\times \\vec{F}$, which gets its own lesson soon. The test reads: $\\operatorname{curl}\\vec{F} = \\vec{0}$ on a simply connected domain.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'mcq',
      prompt: 'Which of these fields is conservative on the whole plane?',
      options: [
        { text: '$\\langle 2xy,\\ x^2 \\rangle$', correct: true, why: '$P_y = 2x = Q_x$, and the plane is simply connected. Indeed it is $\\nabla(x^2y)$.' },
        { text: '$\\langle y,\\ -x \\rangle$', why: '$P_y = 1$ but $Q_x = -1$. This is a rotation field: going around a circle against it always does negative work, so the circulation is not zero.' },
        { text: '$\\langle x^2,\\ xy \\rangle$', why: '$P_y = 0$ but $Q_x = y$. They agree only on the line $y = 0$, not throughout the plane.' },
        { text: '$\\langle y,\\ x^2 \\rangle$', why: '$P_y = 1$ but $Q_x = 2x$. They agree only on the line $x = \\tfrac{1}{2}$.' },
      ],
      explanation: 'Compute $P_y$ and $Q_x$ for each field; the test needs them to agree **everywhere** in a simply connected region. Only $\\langle 2xy, x^2 \\rangle$ passes, and you can confirm by finding a potential: $f = x^2y$ has $f_x = 2xy$ and $f_y = x^2$.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'Finding a potential function',
      blocks: [
        {
          type: 'p',
          text: 'Once a field passes the test, find $f$ by "undoing" the partial derivatives one variable at a time. The key is that integrating with respect to $x$ leaves a **constant of integration that may depend on $y$**.',
        },
        {
          type: 'derivation',
          title: 'Find $f$ with $\\nabla f = \\langle 3 + 2xy,\\ x^2 - 3y^2 \\rangle$',
          steps: [
            { tex: 'P_y = 2x = Q_x', why: 'Test first: the cross-partials agree on all of $\\mathbb{R}^2$, which is simply connected, so a potential exists.' },
            { tex: 'f(x, y) = \\int (3 + 2xy)\\,dx = 3x + x^2y + g(y)', why: 'Since $f_x = P$, integrate $P$ with respect to $x$. Anything depending only on $y$ has zero $x$-derivative, so the "constant" is an unknown function $g(y)$.' },
            { tex: 'f_y = x^2 + g\'(y)', why: 'Differentiate that result with respect to $y$.' },
            { tex: 'x^2 + g\'(y) = x^2 - 3y^2 \\implies g\'(y) = -3y^2', why: 'Match it with $Q$. The $x$-terms must cancel; if they did not, the field would not be conservative.' },
            { tex: 'g(y) = -y^3 + K \\implies f(x, y) = 3x + x^2y - y^3 + K', why: 'Integrate $g\'$. Now $K$ really is a constant.' },
          ],
          result: 'Check: $f_x = 3 + 2xy$ and $f_y = x^2 - 3y^2$. Now any line integral of this field is a subtraction. Along $\\vec{r}(t) = \\langle e^t\\sin t, e^t\\cos t \\rangle$, $0 \\le t \\le \\pi$, from $(0, 1)$ to $(0, -e^{\\pi})$: $f(0, -e^{\\pi}) - f(0, 1) = e^{3\\pi} - (-1) = e^{3\\pi} + 1$.',
        },
        {
          type: 'derivation',
          title: 'Three variables: $\\vec{F} = \\langle y^2,\\ 2xy + e^{3z},\\ 3ye^{3z} \\rangle$',
          steps: [
            { tex: 'R_y = 3e^{3z} = Q_z, \\quad P_z = 0 = R_x, \\quad Q_x = 2y = P_y', why: 'All three cross-partial pairs agree on $\\mathbb{R}^3$, so $\\vec{F}$ is conservative.' },
            { tex: 'f = \\int y^2\\,dx = xy^2 + g(y, z)', why: 'Integrate $P$ in $x$; the leftover may depend on both $y$ and $z$.' },
            { tex: 'f_y = 2xy + g_y = 2xy + e^{3z} \\implies g(y, z) = ye^{3z} + h(z)', why: 'Match with $Q$, then integrate $g_y = e^{3z}$ with respect to $y$.' },
            { tex: 'f_z = 3ye^{3z} + h\'(z) = 3ye^{3z} \\implies h(z) = K', why: 'Match with $R$: $h\'(z) = 0$.' },
          ],
          result: 'A potential is $f(x, y, z) = xy^2 + ye^{3z}$. For example, the work from $(0, 0, 0)$ to $(1, 2, 0)$ is $f(1, 2, 0) - f(0, 0, 0) = 4 + 2 = 6$.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Do not just add the antiderivatives',
          text: 'A tempting shortcut is $f = \\int P\\,dx + \\int Q\\,dy$. It double counts any term containing both variables: for $\\langle 2xy, x^2 \\rangle$ it gives $x^2y + x^2y = 2x^2y$, whose gradient is twice the field. Always integrate one component, then differentiate and **compare** to fill in only what is missing.',
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'expr',
      prompt: 'Find a potential function for $\\vec{F}(x, y) = \\langle 2xy^3 + 1,\\ 3x^2y^2 - 2y \\rangle$. (Any constant is fine.)',
      variables: ['x', 'y'],
      upToConstant: true,
      label: '$f(x, y) =$',
      answer: 'x^2 y^3 + x - y^2',
      answerTex: 'x^2y^3 + x - y^2',
      hint: 'Integrate $P = 2xy^3 + 1$ with respect to $x$, then fix $g(y)$ by comparing $f_y$ with $Q$.',
      explanation: 'Test: $P_y = 6xy^2 = Q_x$. Then $f = \\int (2xy^3 + 1)\\,dx = x^2y^3 + x + g(y)$, so $f_y = 3x^2y^2 + g\'(y)$. Matching $Q$ gives $g\'(y) = -2y$, so $g = -y^2$. Hence $f = x^2y^3 + x - y^2 + K$. Check: $f_x = 2xy^3 + 1$, $f_y = 3x^2y^2 - 2y$.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'error',
      prompt: 'A student finds a potential for $\\vec{F} = \\langle 3 + 2xy,\\ x^2 - 3y^2 \\rangle$. Tap the first line that is wrong.',
      lines: [
        '$f_x = 3 + 2xy \\implies f = 3x + x^2y + g(y)$',
        '$f_y = x^2 + g\'(y)$',
        '$x^2 + g\'(y) = x^2 - 3y^2 \\implies g\'(y) = -3y^2$',
        '$g(y) = -3y^3 + K$',
        '$f(x, y) = 3x + x^2y - 3y^3 + K$',
      ],
      errorLines: [4],
      explanation: 'Line 4 forgets to divide by the new exponent: an antiderivative of $-3y^2$ is $-y^3$, not $-3y^3$. The correct potential is $f = 3x + x^2y - y^3 + K$. Always check the answer by differentiating: the student\'s $f$ has $f_y = x^2 - 9y^2$, which does not match $Q$.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'order',
      prompt: 'Put the steps for finding a potential function of $\\vec{F} = \\langle P, Q \\rangle$ in order.',
      lines: [
        'Check that $P_y = Q_x$ on a simply connected region',
        'Integrate $P$ with respect to $x$, adding an unknown $g(y)$',
        'Differentiate the result with respect to $y$ and set it equal to $Q$',
        'Solve for $g\'(y)$ and integrate to find $g(y)$',
        'Check that the gradient of the final $f$ is $\\vec{F}$',
      ],
      distractors: ['Add $\\int P\\,dx$ and $\\int Q\\,dy$'],
      explanation: 'The test comes first: if it fails, no potential exists and the rest is wasted. Then integrate one component (the unknown "constant" depends on the other variable), compare with the second component to pin down $g\'(y)$, integrate it, and verify. The distractor double counts mixed terms like $x^2y$.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'The swirl that passes the test: $\\frac{\\langle -y, x \\rangle}{x^2 + y^2}$',
      blocks: [
        {
          type: 'p',
          text: 'Here is the field that shows why "simply connected" is not fine print. Let $\\vec{F}(x, y) = \\left\\langle \\dfrac{-y}{x^2 + y^2},\\ \\dfrac{x}{x^2 + y^2} \\right\\rangle$, defined everywhere except the origin. It swirls counterclockwise, with strength $\\frac{1}{r}$, like the flow around a drain or the magnetic field around a wire.',
        },
        {
          type: 'derivation',
          title: 'It passes the cross-partial test',
          steps: [
            { tex: 'P_y = \\frac{\\partial}{\\partial y}\\frac{-y}{x^2 + y^2} = \\frac{-(x^2 + y^2) + y \\cdot 2y}{(x^2 + y^2)^2} = \\frac{y^2 - x^2}{(x^2 + y^2)^2}', why: 'Quotient rule.' },
            { tex: 'Q_x = \\frac{\\partial}{\\partial x}\\frac{x}{x^2 + y^2} = \\frac{(x^2 + y^2) - x \\cdot 2x}{(x^2 + y^2)^2} = \\frac{y^2 - x^2}{(x^2 + y^2)^2}', why: 'Quotient rule again.' },
          ],
          result: '$P_y = Q_x$ at every point of the domain $\\mathbb{R}^2 \\setminus \\{(0, 0)\\}$.',
        },
        {
          type: 'derivation',
          title: '...but its circulation around the unit circle is not zero',
          steps: [
            { tex: '\\vec{r}(t) = \\langle \\cos t, \\sin t \\rangle, \\quad \\vec{r}\\,\'(t) = \\langle -\\sin t, \\cos t \\rangle, \\quad 0 \\le t \\le 2\\pi', why: 'Counterclockwise once around.' },
            { tex: '\\vec{F}(\\vec{r}(t)) = \\langle -\\sin t, \\cos t \\rangle', why: 'On the unit circle $x^2 + y^2 = 1$.' },
            { tex: '\\oint_C \\vec{F} \\cdot d\\vec{r} = \\int_0^{2\\pi} (\\sin^2 t + \\cos^2 t)\\,dt = 2\\pi \\ne 0', why: 'The field and the velocity point the same way at every moment.' },
          ],
          result: 'A nonzero circulation means $\\vec{F}$ is **not** conservative on its domain, even though the test is satisfied everywhere. There is no contradiction: the punctured plane has a hole at the origin, so it is not simply connected, and the converse theorem does not apply.',
        },
        {
          type: 'graph',
          x: [-2.5, 4.5],
          y: [-2.5, 2.5],
          equal: true,
          height: 320,
          field: { x: '-y/(x^2 + y^2)', y: 'x/(x^2 + y^2)', n: 15 },
          parametric: [
            { x: 'cos(t)', y: 'sin(t)', t: [0, 's'], color: 'blue', label: 'loop around the origin (traced so far)' },
            { x: '3 + cos(t)', y: 'sin(t)', t: [0, '2pi'], color: 'green', label: 'loop not around the origin' },
          ],
          points: [
            { x: 'cos(s)', y: 'sin(s)', color: 'blue' },
            { x: 0, y: 0, label: 'hole', open: true, color: 'red' },
          ],
          sliders: [{ name: 's', min: 0.01, max: 6.28, step: 0.01, value: 4, label: 'angle traced $\\theta$', play: true }],
          readouts: [{ label: 'work so far $\\int \\vec{F} \\cdot d\\vec{r} = \\theta =$', expr: 's', digits: 3 }],
          caption: 'Press play. Along the unit circle the accumulated work equals the angle swept, reaching $2\\pi$ after one lap. The green loop does not enclose the hole, and around it the work is $0$: in any region that avoids a whole ray from the origin, $\\vec{F}$ is conservative.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why: the potential would be the angle $\\theta$',
          text: 'Locally $\\vec{F} = \\nabla\\theta$, where $\\theta = \\arctan\\frac{y}{x}$ (adjusted by quadrant) is the polar angle: you can check $\\theta_x = \\frac{-y}{x^2 + y^2}$ and $\\theta_y = \\frac{x}{x^2 + y^2}$. In a slit plane such as the right half-plane, $\\theta$ is a genuine function and $\\vec{F}$ is conservative there. But on the whole punctured plane, $\\theta$ cannot be made single-valued: walking once around the origin increases it by $2\\pi$. The line integral counts exactly that jump. This is why the circulation equals $2\\pi$ times the number of times a loop winds around the origin.',
        },
      ],
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'truefalse',
      prompt: 'If $\\vec{F} = \\langle P, Q \\rangle$ has continuous partial derivatives and $\\frac{\\partial P}{\\partial y} = \\frac{\\partial Q}{\\partial x}$ at every point of its domain, then $\\vec{F}$ is conservative on its domain.',
      answer: false,
      explanation: 'The converse of the cross-partial test needs the domain to be **simply connected**. The field $\\left\\langle \\frac{-y}{x^2 + y^2}, \\frac{x}{x^2 + y^2} \\right\\rangle$ satisfies $P_y = Q_x$ everywhere on its domain (the plane minus the origin), yet its circulation around the unit circle is $2\\pi$, so it is not conservative there. On simply connected regions the statement is true.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'concept',
      title: 'Energy, potentials and game physics',
      blocks: [
        {
          type: 'p',
          text: 'For a conservative force $\\vec{F} = -\\nabla U$, the fundamental theorem and the work–energy theorem combine into **conservation of energy**: along any trajectory, kinetic plus potential energy $\\tfrac{1}{2}m|\\vec{v}|^2 + U$ stays constant. Non-conservative forces such as friction and air drag do path-dependent work, which is why a longer skid loses more energy.',
        },
        {
          type: 'p',
          text: 'Game physics leans on this in several ways. A potential lets you answer "how fast will the ball be at the bottom of the ramp?" with one subtraction instead of a simulation. Physics engines monitor total energy to detect integrator drift (a pendulum that slowly gains energy is a numerical bug, not physics). And AI often uses **potential fields** for steering: goals create wells, obstacles create hills, and agents move along $-\\nabla U$. Because the steering field is a gradient, it can never send an agent around a loop forever; the catch is that agents can get stuck in local minima.',
        },
        {
          type: 'code',
          title: 'circulation.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdio>
#include <functional>
#include <initializer_list>

struct Vec2 { double x, y; };
using Field = std::function<Vec2(Vec2)>;
using Path = std::function<Vec2(double)>;   // t in [0, 1]

// Line integral of F along a path: midpoint rule on n chords.
double lineIntegral(const Field& F, const Path& r, int n = 100000) {
    double sum = 0;
    for (int i = 0; i < n; ++i) {
        Vec2 p = r(double(i) / n), q = r(double(i + 1) / n);
        Vec2 m{(p.x + q.x) / 2, (p.y + q.y) / 2};
        Vec2 f = F(m);
        sum += f.x * (q.x - p.x) + f.y * (q.y - p.y);
    }
    return std::fabs(sum) < 1e-9 ? 0.0 : sum;   // print round-off as 0, not -0
}

int main() {
    const double pi = std::acos(-1.0);
    Field grad = [](Vec2 p) { return Vec2{3 + 2 * p.x * p.y, p.x * p.x - 3 * p.y * p.y}; };
    Field vortex = [](Vec2 p) { double s = p.x * p.x + p.y * p.y; return Vec2{-p.y / s, p.x / s}; };

    Path line = [](double t) { return Vec2{t, 2 * t}; };                     // (0,0) -> (1,2)
    Path wiggle = [&](double t) { return Vec2{t + std::sin(pi * t), 2 * t * t}; };
    std::printf("gradient field, straight path : %.4f\\n", lineIntegral(grad, line));
    std::printf("gradient field, wiggly path   : %.4f\\n", lineIntegral(grad, wiggle));

    for (double R : {0.5, 1.0, 3.0}) {
        Path circle = [&](double t) { return Vec2{R * std::cos(2 * pi * t), R * std::sin(2 * pi * t)}; };
        std::printf("vortex, circle radius %.1f     : %.4f\\n", R, lineIntegral(vortex, circle));
    }
    Path away = [&](double t) { return Vec2{3 + std::cos(2 * pi * t), std::sin(2 * pi * t)}; };
    std::printf("vortex, circle around (3, 0)  : %.4f\\n", lineIntegral(vortex, away));
    std::printf("2 pi                          : %.4f\\n", 2 * pi);
}`,
          output: `gradient field, straight path : -3.0000
gradient field, wiggly path   : -3.0000
vortex, circle radius 0.5     : 6.2832
vortex, circle radius 1.0     : 6.2832
vortex, circle radius 3.0     : 6.2832
vortex, circle around (3, 0)  : 0.0000
2 pi                          : 6.2832`,
          annotations: [
            { lines: '11-20', text: 'A general line-integral routine: sample the field at each chord\'s midpoint and dot it with the chord.' },
            { lines: 24, text: 'The conservative field $\\langle 3 + 2xy, x^2 - 3y^2 \\rangle = \\nabla(3x + x^2y - y^3)$.' },
            { lines: '27-30', text: 'Two different paths from $(0, 0)$ to $(1, 2)$. Both give $f(1, 2) - f(0, 0) = 3 + 2 - 8 = -3$.' },
            { lines: '32-35', text: 'The vortex field around circles of three radii: always $2\\pi$. The field weakens like $\\frac{1}{r}$ while the circle grows like $r$, and the two effects cancel.' },
            { lines: '36-37', text: 'A loop that does not enclose the origin: circulation $0$.' },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'numeric',
      prompt: 'Let $\\vec{F} = \\left\\langle \\dfrac{-y}{x^2 + y^2}, \\dfrac{x}{x^2 + y^2} \\right\\rangle$. Find $\\oint_C \\vec{F} \\cdot d\\vec{r}$ where $C$ is the circle of radius $5$ centered at the origin, traced once **clockwise**. An exact answer like `-2pi` or a decimal to two places is accepted.',
      answer: '-2pi',
      answerTex: '-2\\pi',
      hint: 'Counterclockwise around a circle centered at the origin of any radius gives $2\\pi$. What does reversing the direction do?',
      explanation: 'With $\\vec{r}(t) = \\langle 5\\cos t, 5\\sin t \\rangle$ counterclockwise, $\\vec{F}(\\vec{r}(t)) = \\tfrac{1}{5}\\langle -\\sin t, \\cos t \\rangle$ and $\\vec{r}\\,\'(t) = 5\\langle -\\sin t, \\cos t \\rangle$, so the integrand is $1$ and the integral is $2\\pi$: the radius cancels. Traversing clockwise reverses the orientation, which flips the sign: $-2\\pi \\approx -6.28$. In the angle picture, a clockwise lap changes $\\theta$ by $-2\\pi$.',
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'mcq',
      prompt: 'For the same field $\\vec{F} = \\left\\langle \\dfrac{-y}{x^2 + y^2}, \\dfrac{x}{x^2 + y^2} \\right\\rangle$, what is $\\oint_C \\vec{F} \\cdot d\\vec{r}$ around the circle of radius $1$ centered at $(3, 0)$, counterclockwise?',
      options: [
        { text: '$0$', correct: true, why: 'The circle lies in the right half-plane $x > 0$, which is simply connected and avoids the origin. There $P_y = Q_x$ guarantees $\\vec{F}$ is conservative (it equals $\\nabla\\theta$), so the circulation is zero.' },
        { text: '$2\\pi$', why: 'That is the value for loops that wind once around the origin. This loop does not enclose the origin at all.' },
        { text: '$-2\\pi$', why: 'A negative value would need a clockwise lap around the origin. The loop is counterclockwise and does not go around the origin.' },
        { text: 'It cannot be found without parametrizing the circle', why: 'Path independence in a simply connected region containing the loop settles it without any computation.' },
      ],
      explanation: 'The polar angle $\\theta$ stays between about $-0.34$ and $0.34$ radians along this circle, starts and ends at the same value, and never wraps around. Since $\\vec{F} = \\nabla\\theta$ on the right half-plane, the fundamental theorem gives $\\theta(\\text{end}) - \\theta(\\text{start}) = 0$. The numerical check in the program above agrees.',
    },
  ],
  takeaways: [
    'Fundamental theorem for line integrals: $\\int_C \\nabla f \\cdot d\\vec{r} = f(\\vec{r}(b)) - f(\\vec{r}(a))$, proved by the chain rule plus the ordinary FTC.',
    'On an open connected region: conservative ($\\vec{F} = \\nabla f$) $\\iff$ path independent $\\iff$ $\\oint_C \\vec{F} \\cdot d\\vec{r} = 0$ around every closed curve.',
    'Test: conservative implies $P_y = Q_x$ (in 3D, $\\operatorname{curl}\\vec{F} = \\vec{0}$); the converse holds on open **simply connected** regions.',
    'Find a potential by integrating one component, then differentiating and comparing to determine the leftover function $g(y)$ (or $g(y, z)$).',
    '$\\left\\langle \\frac{-y}{x^2 + y^2}, \\frac{x}{x^2 + y^2} \\right\\rangle$ satisfies $P_y = Q_x$ but has circulation $2\\pi$ around the origin: its "potential" $\\theta$ is multi-valued on the punctured plane.',
  ],
  reading: [
    {
      title: 'OpenStax Calculus Volume 3 — 6.3 Conservative Vector Fields',
      url: 'https://openstax.org/details/books/calculus-volume-3',
      source: 'openstax',
      note: 'Section 6.3 proves the fundamental theorem and the path-independence equivalences, with many potential-function examples.',
    },
    {
      title: 'MIT OCW 18.02SC Multivariable Calculus',
      url: 'https://ocw.mit.edu/courses/18-02sc-multivariable-calculus-fall-2010/',
      source: 'other',
      note: 'Unit 4 sessions on gradient fields and path independence, including the $\\frac{\\langle -y, x \\rangle}{x^2 + y^2}$ example in recitation.',
    },
    {
      title: "Paul's Online Notes — Calculus III",
      url: 'https://tutorial.math.lamar.edu/Classes/CalcIII/CalcIII.aspx',
      source: 'other',
      note: 'The "Conservative Vector Fields" section walks through finding potential functions step by step in two and three variables.',
    },
    {
      title: 'Wikipedia — Conservative vector field',
      url: 'https://en.wikipedia.org/wiki/Conservative_vector_field',
      source: 'wikipedia',
      note: 'Covers path independence, irrotational fields, and the role of simple connectivity with the vortex counterexample.',
    },
  ],
};
