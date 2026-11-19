import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'calc3-curl-divergence',
  title: 'Curl and Divergence',
  summary: 'Two derivatives of a vector field: curl measures spin (a paddle wheel in the flow), divergence measures spreading (sources and sinks). The identities curl(∇f) = 0 and div(curl F) = 0, Green\'s theorem in flux form, and divergence-free curl noise for game fluids.',
  minutes: 19,
  objectives: [
    'Compute $\\operatorname{curl}\\vec F = \\nabla\\times\\vec F$ and $\\operatorname{div}\\vec F = \\nabla\\cdot\\vec F$ for fields in two and three dimensions',
    'Interpret curl as the rotation of a paddle wheel and divergence as net outflow from a source or into a sink, and recognize fields that fool the eye',
    'Prove and use $\\operatorname{curl}(\\nabla f) = \\vec 0$ and $\\operatorname{div}(\\operatorname{curl}\\vec F) = 0$, including as tests for conservative fields',
    'State and apply the flux (normal) form of Green\'s theorem, $\\oint_C \\vec F\\cdot\\vec n\\,ds = \\iint_D \\operatorname{div}\\vec F\\,dA$',
    'Explain why game fluid solvers want divergence-free velocity and how curl noise produces it',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'The del operator and the curl',
      blocks: [
        {
          type: 'p',
          text: 'You already know one derivative of a function of several variables: the gradient $\\nabla f = \\langle f_x, f_y, f_z \\rangle$. It helps to treat the symbol $\\nabla$ itself as a vector of derivative operators, the [[calc3-del-operator|del operator]]:',
        },
        {
          type: 'math',
          tex: '\\nabla = \\left\\langle \\frac{\\partial}{\\partial x},\\ \\frac{\\partial}{\\partial y},\\ \\frac{\\partial}{\\partial z} \\right\\rangle',
          caption: '"Multiply" $\\nabla$ by a scalar function and you get the gradient. Cross it or dot it with a vector field and you get the two new derivatives of this lesson.',
        },
        {
          type: 'definition',
          term: 'Curl',
          text: 'For $\\vec F = \\langle P, Q, R \\rangle$ with continuous partial derivatives, the [[calc3-curl|curl]] is the vector field\n\n$$\\operatorname{curl}\\vec F = \\nabla\\times\\vec F = \\begin{vmatrix} \\mathbf{i} & \\mathbf{j} & \\mathbf{k} \\\\ \\frac{\\partial}{\\partial x} & \\frac{\\partial}{\\partial y} & \\frac{\\partial}{\\partial z} \\\\ P & Q & R \\end{vmatrix} = \\left\\langle R_y - Q_z,\\ P_z - R_x,\\ Q_x - P_y \\right\\rangle.$$\n\nExpand the formal [[determinant]] exactly as for a [[cross-product|cross product]], with "$\\frac{\\partial}{\\partial y}$ times $R$" meaning $R_y$.',
        },
        {
          type: 'derivation',
          title: 'Curl of $\\vec F = \\langle xz,\\ xyz,\\ -y^2 \\rangle$',
          steps: [
            { tex: 'P = xz,\\quad Q = xyz,\\quad R = -y^2', why: 'Name the components so the formula can be applied mechanically.' },
            { tex: '\\mathbf{i}:\\ R_y - Q_z = -2y - xy', why: '$\\frac{\\partial}{\\partial y}(-y^2) = -2y$ and $\\frac{\\partial}{\\partial z}(xyz) = xy$.' },
            { tex: '\\mathbf{j}:\\ P_z - R_x = x - 0 = x', why: 'The middle component of a $3\\times 3$ determinant carries a minus sign: $-(R_x - P_z) = P_z - R_x$. Here $P_z = x$ and $R$ has no $x$.' },
            { tex: '\\mathbf{k}:\\ Q_x - P_y = yz - 0 = yz', why: '$\\frac{\\partial}{\\partial x}(xyz) = yz$ and $xz$ has no $y$.' },
            { tex: '\\operatorname{curl}\\vec F = \\langle -2y - xy,\\ x,\\ yz \\rangle', why: 'Assemble the three components.' },
          ],
          result: 'The curl is another vector field: at each point it has a direction and a size.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Green\'s theorem was already using the curl',
          text: 'For a plane field $\\vec F = \\langle P, Q, 0 \\rangle$ with $P, Q$ depending only on $x$ and $y$, the first two components vanish and $\\operatorname{curl}\\vec F = (Q_x - P_y)\\,\\mathbf{k}$. That $\\mathbf{k}$-component is exactly the integrand in Green\'s theorem, so Green\'s theorem reads $\\oint_C \\vec F\\cdot d\\vec r = \\iint_D (\\operatorname{curl}\\vec F)\\cdot\\mathbf{k}\\,dA$. In the 2D setting people often call $Q_x - P_y$ the **scalar curl**.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'expr',
      prompt: 'Let $\\vec F = \\langle xyz,\\ x^2 y,\\ y z^2 \\rangle$. Enter the $\\mathbf{k}$-component of $\\operatorname{curl}\\vec F$.',
      label: '$(\\nabla\\times\\vec F)\\cdot\\mathbf{k} =$',
      answer: '2x*y - x*z',
      answerTex: '2xy - xz',
      variables: ['x', 'y', 'z'],
      hint: 'The $\\mathbf{k}$-component is $Q_x - P_y$.',
      explanation: '$Q = x^2 y$ gives $Q_x = 2xy$; $P = xyz$ gives $P_y = xz$. So the $\\mathbf{k}$-component is $2xy - xz$. For completeness, the whole curl is $\\langle R_y - Q_z, P_z - R_x, Q_x - P_y \\rangle = \\langle z^2, xy, 2xy - xz \\rangle$.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Curl as a paddle wheel',
      blocks: [
        {
          type: 'p',
          text: 'Picture $\\vec F$ as the velocity of a fluid, and drop in a tiny paddle wheel whose axle points along a unit vector $\\vec n$. The wheel spins if the fluid pushes harder on one side of it than the other. The spin rate is largest when the axle lines up with $\\operatorname{curl}\\vec F$, and the curl\'s length is **twice** the fluid\'s local angular velocity.',
        },
        {
          type: 'math',
          tex: '(\\operatorname{curl}\\vec F)(P_0)\\cdot\\vec n = \\lim_{a\\to 0} \\frac{1}{\\pi a^2}\\oint_{C_a} \\vec F\\cdot d\\vec r',
          caption: 'Here $C_a$ is a circle of radius $a$ about $P_0$ in the plane perpendicular to $\\vec n$, oriented counterclockwise when seen from the tip of $\\vec n$. This is Green\'s theorem\'s "circulation per unit area" in any plane you like.',
        },
        {
          type: 'derivation',
          title: 'Rigid rotation has curl $2\\vec\\omega$',
          steps: [
            { tex: '\\vec v = \\vec\\omega\\times\\vec r = \\langle 0, 0, \\omega \\rangle\\times\\langle x, y, z \\rangle = \\langle -\\omega y,\\ \\omega x,\\ 0 \\rangle', why: 'A body spinning about the $z$-axis with angular velocity $\\omega$: each point moves with velocity $\\vec\\omega\\times\\vec r$ (physics).' },
            { tex: '\\nabla\\times\\vec v = \\langle 0 - 0,\\ 0 - 0,\\ \\omega - (-\\omega) \\rangle', why: '$R = 0$ and $P, Q$ do not depend on $z$, so only the $\\mathbf{k}$-component $Q_x - P_y$ survives.' },
            { tex: '= \\langle 0, 0, 2\\omega \\rangle = 2\\vec\\omega', why: 'The curl points along the axis of rotation, by the right-hand rule, with twice the angular speed.' },
          ],
          result: 'Curl points along the spin axis (right-hand rule) and measures twice the angular velocity: a paddle wheel at any point of this flow turns at rate $\\omega$.',
        },
        {
          type: 'plot3d',
          x: [-2, 2],
          y: [-2, 2],
          z: [-2.5, 2.5],
          field: { x: '-w*y', y: 'w*x', z: '0', n: 5 },
          curves: [{ x: '1.6cos(t)', y: '1.6sin(t)', z: '0', t: [0, '2pi'], color: 'blue', label: 'a streamline' }],
          vectors: [{ from: [0, 0, 0], to: [0, 0, '2w'], label: 'curl F', color: 'red' }],
          sliders: [{ name: 'w', min: -1.2, max: 1.2, step: 0.05, value: 1, label: 'angular velocity $\\omega$' }],
          readouts: [{ label: '$\\operatorname{curl}\\vec F = \\langle 0, 0, 2\\omega \\rangle$, $2\\omega =$', expr: '2w', digits: 2 }],
          view: { azimuth: 30, elevation: 28 },
          caption: 'The rotation field $\\langle -\\omega y, \\omega x, 0 \\rangle$ and its curl. Make $\\omega$ negative and the flow turns clockwise (seen from above) while the red curl vector flips to point down: the right-hand rule in action.',
        },
        {
          type: 'p',
          text: 'Curl is about **local** spin, which is not the same as curving streamlines. Two fields make the point. A shear flow $\\langle y, 0 \\rangle$ moves in straight lines, yet the top of a wheel is pushed harder than the bottom, so it turns: $\\operatorname{curl} = (0 - 1)\\mathbf{k} = -\\mathbf{k}$. The vortex $\\frac{\\langle -y, x \\rangle}{x^2 + y^2}$ goes around in circles, yet away from the origin its curl is $\\vec 0$: a wheel carried around rides the circle without turning about its own axle. A field with $\\operatorname{curl}\\vec F = \\vec 0$ is called [[calc3-irrotational|irrotational]].',
        },
        {
          type: 'graph',
          x: [-3, 3],
          y: [-3, 3],
          equal: true,
          height: 320,
          field: { x: 'y', y: '0', n: 13 },
          segments: [
            { from: ['0.6cos(-s/2)', 'q + 0.6sin(-s/2)'], to: ['-0.6cos(-s/2)', 'q - 0.6sin(-s/2)'], color: 'red' },
            { from: ['-0.6sin(-s/2)', 'q + 0.6cos(-s/2)'], to: ['0.6sin(-s/2)', 'q - 0.6cos(-s/2)'], color: 'red' },
          ],
          points: [{ x: 0, y: 'q', color: 'red' }],
          sliders: [
            { name: 's', min: 0, max: 12.56, step: 0.02, value: 0, label: 'time', play: true, speed: 1.6, loop: true },
            { name: 'q', min: -2, max: 2, step: 0.1, value: 1, label: 'wheel height $y_0$' },
          ],
          readouts: [{ label: 'scalar curl $Q_x - P_y =$', expr: '-1', digits: 0 }],
          caption: 'Press ▶. In the shear flow $\\langle y, 0 \\rangle$ the paddle wheel (held on a fixed axle) turns **clockwise** at rate $\\frac{1}{2}$, because the water above it is faster than the water below. Move it up or down: the spin rate stays the same, since the curl is $-\\mathbf{k}$ everywhere, even though the flow itself is faster higher up.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'mcq',
      prompt: 'A small paddle wheel with a vertical axle is placed at the point $(1, 0, 0)$. In which flow does it **spin**?',
      options: [
        { text: '$\\vec F = \\langle x, y, 0 \\rangle$', why: 'This flow spreads straight out from the $z$-axis. $Q_x - P_y = 0 - 0 = 0$: no spin, just expansion.' },
        { text: '$\\vec F = \\langle 0, x, 0 \\rangle$', correct: true, why: 'The streamlines are straight vertical lines, but the speed grows with $x$, so the wheel\'s far side is pushed harder. $Q_x - P_y = 1$: it spins counterclockwise.' },
        { text: '$\\vec F = \\dfrac{\\langle -y, x, 0 \\rangle}{x^2 + y^2}$', why: 'The flow circles the $z$-axis, but $Q_x - P_y = 0$ away from it. The wheel is carried around the circle without turning on its own axle.' },
        { text: '$\\vec F = \\langle y, x, 0 \\rangle$', why: 'This is $\\nabla(xy)$, a gradient field, so its curl is zero: $Q_x - P_y = 1 - 1 = 0$.' },
      ],
      explanation: 'Compute the $\\mathbf{k}$-component $Q_x - P_y$ for each field: $0$, $1$, $0$ and $0$. Only $\\langle 0, x, 0 \\rangle$ spins the wheel. The lesson: straight streamlines can have curl, and circular ones can have none. Curl measures the *difference* in push across the wheel, not the shape of the path.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Divergence: sources and sinks',
      blocks: [
        {
          type: 'definition',
          term: 'Divergence',
          text: 'For $\\vec F = \\langle P, Q, R \\rangle$, the [[calc3-divergence|divergence]] is the **scalar** function\n\n$$\\operatorname{div}\\vec F = \\nabla\\cdot\\vec F = \\frac{\\partial P}{\\partial x} + \\frac{\\partial Q}{\\partial y} + \\frac{\\partial R}{\\partial z}.$$\n\nIn the plane drop the last term: $\\operatorname{div}\\langle P, Q \\rangle = P_x + Q_y$.',
        },
        {
          type: 'p',
          text: 'Each term asks how fast one component grows in its own direction. If $P$ increases with $x$, more fluid leaves a small box through its right face than enters through its left face. Add the three directions and you get the **net outflow per unit volume**: positive at a **source** (fluid is being created or expanding, like gas heating up), negative at a **sink** (fluid is draining or compressing), zero for an incompressible flow.',
        },
        {
          type: 'derivation',
          title: 'Divergence of $\\vec F = \\langle xz,\\ xyz,\\ -y^2 \\rangle$',
          steps: [
            { tex: '\\frac{\\partial}{\\partial x}(xz) = z,\\quad \\frac{\\partial}{\\partial y}(xyz) = xz,\\quad \\frac{\\partial}{\\partial z}(-y^2) = 0', why: 'Differentiate each component with respect to its own variable only.' },
            { tex: '\\operatorname{div}\\vec F = z + xz = z(1 + x)', why: 'Add them. The result is a number at each point, not a vector.' },
          ],
          result: 'At $(1, 2, 3)$ the divergence is $3(1 + 1) = 6 > 0$: the flow is a source there. At $(1, 2, -3)$ it is $-6$: a sink.',
        },
        {
          type: 'graph',
          x: [-3, 3],
          y: [-3, 3],
          equal: true,
          height: 330,
          field: { x: 'a*x - b*y', y: 'b*x + a*y', n: 13 },
          parametric: [{ x: '1.5cos(t)', y: '1.5sin(t)', t: [0, '2pi'], color: 'red', dashed: true }],
          sliders: [
            { name: 'a', min: -1, max: 1, step: 0.05, value: 0.5, label: 'spread $a$' },
            { name: 'b', min: -1, max: 1, step: 0.05, value: 0.6, label: 'swirl $b$' },
          ],
          readouts: [
            { label: '$\\operatorname{div}\\vec F = 2a =$', expr: '2a', digits: 2 },
            { label: 'scalar curl $= 2b =$', expr: '2b', digits: 2 },
            { label: 'outward flux across the circle $= 2a\\cdot\\pi(1.5)^2 =$', expr: '2a*pi*2.25', digits: 3 },
          ],
          caption: 'The field $\\vec F = \\langle ax - by,\\ bx + ay \\rangle$ has constant divergence $2a$ and constant curl $2b$. Set $b = 0$ for a pure source ($a > 0$) or sink ($a < 0$); set $a = 0$ for pure rotation, where arrows run along the dashed circle and nothing crosses it. In between you get a spiral.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why "per unit volume"',
          text: 'Divergence is the limit of outflow divided by size: $\\operatorname{div}\\vec F(P_0) = \\lim \\frac{1}{\\operatorname{vol}(B)}\\iint_{\\partial B} \\vec F\\cdot\\vec n\\,dS$ as a small ball $B$ shrinks to $P_0$. (In the plane: outflow across a small circle divided by its area.) The derivative form $P_x + Q_y + R_z$ is what that limit equals when you shrink a box: the net flow through each pair of opposite faces is a difference quotient. The divergence theorem, in Unit 13, turns this local statement into a global one.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'numeric',
      prompt: 'Find $\\operatorname{div}\\vec F$ at the point $(1, -1, 2)$ for $\\vec F = \\langle x^2 y,\\ yz,\\ x z^3 \\rangle$.',
      label: '$\\operatorname{div}\\vec F(1, -1, 2) =$',
      answer: '12',
      hint: 'Compute $P_x + Q_y + R_z$ first, then substitute.',
      explanation: '$P_x = 2xy$, $Q_y = z$ and $R_z = 3xz^2$, so $\\operatorname{div}\\vec F = 2xy + z + 3xz^2$. At $(1, -1, 2)$: $2(1)(-1) + 2 + 3(1)(4) = -2 + 2 + 12 = 12$. Positive, so fluid moving with velocity $\\vec F$ spreads out (acts like a source) at that point.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'Two identities that run vector calculus',
      blocks: [
        {
          type: 'theorem',
          name: 'Curl of a gradient, divergence of a curl',
          tex: '\\operatorname{curl}(\\nabla f) = \\vec 0 \\qquad\\qquad \\operatorname{div}(\\operatorname{curl}\\vec F) = 0',
          text: 'For any $f$ with continuous second partial derivatives, and any $\\vec F$ whose components have continuous second partial derivatives.',
        },
        {
          type: 'derivation',
          title: 'Proof: both come down to equal mixed partials',
          steps: [
            { tex: '\\nabla\\times\\nabla f = \\langle f_{zy} - f_{yz},\\ f_{xz} - f_{zx},\\ f_{yx} - f_{xy} \\rangle', why: 'Apply the curl formula to $\\langle P, Q, R \\rangle = \\langle f_x, f_y, f_z \\rangle$: for instance $R_y - Q_z = (f_z)_y - (f_y)_z$.' },
            { tex: '= \\vec 0', why: 'Clairaut\'s theorem: when second partials are continuous, the order of differentiation does not matter, so each component is zero.' },
            { tex: '\\nabla\\cdot(\\nabla\\times\\vec F) = (R_y - Q_z)_x + (P_z - R_x)_y + (Q_x - P_y)_z', why: 'Take the divergence of the curl, component by component.' },
            { tex: '= (R_{yx} - R_{xy}) + (P_{zy} - P_{yz}) + (Q_{xz} - Q_{zx}) = 0', why: 'Regroup the six terms in matching pairs; Clairaut makes each pair cancel.' },
          ],
          result: 'Formally these are $\\nabla\\times\\nabla = \\vec 0$ and $\\nabla\\cdot(\\nabla\\times\\cdot) = 0$, echoing $\\vec v\\times\\vec v = \\vec 0$ and $\\vec v\\cdot(\\vec v\\times\\vec w) = 0$ for ordinary vectors.',
        },
        {
          type: 'list',
          items: [
            '**A test for conservative fields.** If $\\vec F = \\nabla f$ then $\\operatorname{curl}\\vec F = \\vec 0$. So a nonzero curl proves $\\vec F$ is **not** conservative. The converse holds when $\\vec F$ is defined on all of $\\mathbb{R}^3$ (more generally on a simply connected region): there, $\\operatorname{curl}\\vec F = \\vec 0$ implies $\\vec F = \\nabla f$ for some potential $f$.',
            '**A test for being a curl.** If $\\vec G = \\operatorname{curl}\\vec F$ then $\\operatorname{div}\\vec G = 0$. So $\\langle x, y, z \\rangle$, with divergence $3$, is not the curl of anything.',
            '**The Laplacian is not zero.** The other combination, $\\operatorname{div}(\\nabla f) = f_{xx} + f_{yy} + f_{zz}$, is the [[calc3-laplacian|Laplacian]] $\\nabla^2 f$. It is the heart of the heat, wave and Poisson equations, and of the pressure solve in fluid simulation.',
          ],
        },
        {
          type: 'derivation',
          title: 'Is $\\vec F = \\langle e^x\\sin y,\\ e^x\\cos y,\\ z^2 \\rangle$ conservative?',
          steps: [
            { tex: '\\nabla\\times\\vec F = \\langle 0 - 0,\\ 0 - 0,\\ e^x\\cos y - e^x\\cos y \\rangle = \\vec 0', why: '$R = z^2$ depends only on $z$ and $P, Q$ do not depend on $z$, so only $Q_x - P_y$ needs work, and it cancels.' },
            { tex: '\\vec F = \\nabla f,\\quad f(x, y, z) = e^x\\sin y + \\tfrac{1}{3}z^3', why: '$\\vec F$ is defined on all of $\\mathbb{R}^3$, so zero curl guarantees a potential. Integrate $P$ in $x$ and match the other components.' },
          ],
          result: 'Check: $\\nabla f = \\langle e^x\\sin y, e^x\\cos y, z^2 \\rangle$. ✓',
        },
        {
          type: 'table',
          headers: ['Operator', 'Input', 'Output', 'Measures'],
          rows: [
            ['gradient $\\nabla f$', 'scalar field', 'vector field', 'direction and rate of steepest increase'],
            ['curl $\\nabla\\times\\vec F$', 'vector field', 'vector field', 'local rotation (axis and twice the spin rate)'],
            ['divergence $\\nabla\\cdot\\vec F$', 'vector field', 'scalar field', 'local expansion (net outflow per volume)'],
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'error',
      prompt: 'A student computes the curl of $\\vec F = \\langle x^2 y,\\ y z^2,\\ xyz \\rangle$. Tap the first line that is wrong.',
      lines: [
        '$\\nabla\\times\\vec F = \\langle R_y - Q_z,\\ -(R_x - P_z),\\ Q_x - P_y \\rangle$',
        '$\\mathbf{i}$-component $= R_y - Q_z = xz - 2yz$',
        '$\\mathbf{j}$-component $= R_x - P_z = yz - 0 = yz$',
        '$\\mathbf{k}$-component $= Q_x - P_y = 0 - x^2 = -x^2$',
        'So $\\nabla\\times\\vec F = \\langle xz - 2yz,\\ yz,\\ -x^2 \\rangle$.',
      ],
      errorLines: [3],
      explanation: 'Line 1 correctly writes the middle component as $-(R_x - P_z)$, but line 3 drops that minus sign, the classic cofactor-sign slip. The $\\mathbf{j}$-component is $-(yz - 0) = -yz$, so $\\nabla\\times\\vec F = \\langle xz - 2yz,\\ -yz,\\ -x^2 \\rangle$. A quick check: $\\operatorname{div}(\\operatorname{curl}\\vec F)$ must be $0$; with the correct curl it is $z + (-z) + 0 = 0$, while the student\'s version gives $z + z = 2z \\ne 0$.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'concept',
      title: 'Green\'s theorem, flux form',
      blocks: [
        {
          type: 'p',
          text: 'Circulation adds up the part of $\\vec F$ **along** a curve. Flux adds up the part **across** it. For a curve traced counterclockwise by $\\vec r(t) = \\langle x(t), y(t) \\rangle$, rotating the tangent $\\langle x\', y\' \\rangle$ a quarter turn clockwise gives the outward normal, so $\\vec n\\,ds = \\langle dy, -dx \\rangle$ and',
        },
        {
          type: 'math',
          tex: '\\text{outward flux across } C = \\oint_C \\vec F\\cdot\\vec n\\,ds = \\oint_C P\\,dy - Q\\,dx',
        },
        {
          type: 'theorem',
          name: 'Green\'s theorem (flux form)',
          tex: '\\oint_C \\vec F\\cdot\\vec n\\,ds = \\iint_D \\left( \\frac{\\partial P}{\\partial x} + \\frac{\\partial Q}{\\partial y} \\right) dA = \\iint_D \\operatorname{div}\\vec F\\,dA',
          text: 'Same hypotheses as the circulation form, with $\\vec n$ the outward unit normal. Proof: apply the circulation form to the field $\\langle -Q, P \\rangle$, whose $Q_x - P_y$ works out to $P_x + Q_y$.',
        },
        {
          type: 'compare',
          left: {
            title: 'Circulation (tangential) form',
            tone: 'neutral',
            tex: ['\\oint_C \\vec F\\cdot\\vec T\\,ds = \\iint_D (\\operatorname{curl}\\vec F)\\cdot\\mathbf{k}\\,dA'],
            text: 'Flow **along** the boundary $=$ total spin inside.',
          },
          right: {
            title: 'Flux (normal) form',
            tone: 'neutral',
            tex: ['\\oint_C \\vec F\\cdot\\vec n\\,ds = \\iint_D \\operatorname{div}\\vec F\\,dA'],
            text: 'Flow **out through** the boundary $=$ total source strength inside.',
          },
        },
        {
          type: 'derivation',
          title: 'Outward flux of $\\vec F = \\langle x^3, y^3 \\rangle$ across the circle $x^2 + y^2 = 4$',
          steps: [
            { tex: '\\operatorname{div}\\vec F = 3x^2 + 3y^2 = 3r^2', why: 'Differentiate each component in its own variable; switch to [[polar-coordinates|polar coordinates]] since the region is a disk.' },
            { tex: '\\iint_D 3r^2\\,dA = \\int_0^{2\\pi}\\int_0^2 3r^2\\cdot r\\,dr\\,d\\theta', why: 'Polar area element $dA = r\\,dr\\,d\\theta$.' },
            { tex: '= 2\\pi\\cdot\\frac{3\\cdot 2^4}{4} = 24\\pi', why: '$\\int_0^2 3r^3\\,dr = \\frac{3}{4}\\cdot 16 = 12$, times $2\\pi$.' },
            { tex: '\\text{Check: } \\oint_C P\\,dy - Q\\,dx = \\int_0^{2\\pi} \\big( 8\\cos^3 t\\cdot 2\\cos t + 8\\sin^3 t\\cdot 2\\sin t \\big)\\,dt = 24\\pi', why: 'With $x = 2\\cos t$, $y = 2\\sin t$: $\\int_0^{2\\pi} 16(\\cos^4 t + \\sin^4 t)\\,dt = 16\\cdot\\frac{3\\pi}{2} = 24\\pi$, since $\\int_0^{2\\pi}\\cos^4 t\\,dt = \\frac{3\\pi}{4}$.' },
          ],
          result: 'Both sides give $24\\pi$. The field is a source everywhere except the origin, so of course the net flow is outward.',
        },
      ],
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'numeric',
      prompt: 'Use the flux form of Green\'s theorem to find the outward flux of $\\vec F = \\langle x^2, y^2 \\rangle$ across the boundary of the unit square $[0, 1]\\times[0, 1]$.',
      answer: '2',
      hint: 'Integrate $\\operatorname{div}\\vec F = P_x + Q_y$ over the square.',
      explanation: '$\\operatorname{div}\\vec F = 2x + 2y$, and $\\int_0^1\\int_0^1 (2x + 2y)\\,dx\\,dy = 1 + 1 = 2$. Directly: through the right side $x = 1$ the outward flux is $\\int_0^1 1\\,dy = 1$, through the top $y = 1$ it is $1$, and through the left and bottom sides it is $0$ (there $P = 0$ or $Q = 0$). Total $2$. ✓',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'Divergence-free flow in game fluids, and curl noise',
      blocks: [
        {
          type: 'p',
          text: 'Water, and smoke or air moving well below the speed of sound, are essentially **incompressible**: a small blob of fluid keeps its volume as it moves. In terms of the velocity field $\\vec u$, that is the single equation $\\nabla\\cdot\\vec u = 0$. A field with zero divergence everywhere is called [[calc3-divergence-free|divergence-free]].',
        },
        {
          type: 'p',
          text: 'Game fluid solvers (smoke in a shooter, water in a sandbox game) spend most of their time enforcing $\\nabla\\cdot\\vec u = 0$; the capstone lesson shows how. For **effects** that only need to look like fluid (swirling embers, magic particles, drifting fog), there is a shortcut called **curl noise**: start from a smooth noise function and take its curl. By $\\operatorname{div}(\\operatorname{curl}) = 0$, the result is divergence-free automatically.',
        },
        {
          type: 'math',
          tex: '\\vec u = \\left\\langle \\frac{\\partial\\psi}{\\partial y},\\ -\\frac{\\partial\\psi}{\\partial x} \\right\\rangle \\implies \\nabla\\cdot\\vec u = \\psi_{yx} - \\psi_{xy} = 0',
          caption: 'In 2D, curl noise is $\\vec u = \\nabla\\times\\langle 0, 0, \\psi \\rangle$. The scalar $\\psi$ is a **stream function**: its level curves are the streamlines.',
        },
        {
          type: 'graph',
          x: [-3.2, 3.2],
          y: [-3.2, 3.2],
          equal: true,
          height: 330,
          field: { x: '-sin(x)sin(y)', y: '-cos(x)cos(y)', n: 15 },
          implicit: [{ expr: 'sin(x)cos(y)', levels: [-0.7, -0.35, 0.35, 0.7], color: 'purple', label: 'level curves of $\\psi$' }],
          caption: 'Curl noise from the stream function $\\psi = \\sin x\\cos y$: $\\vec u = \\langle -\\sin x\\sin y,\\ -\\cos x\\cos y \\rangle$. Arrows run along the purple level curves of $\\psi$, so the flow forms closed swirling cells, and no region is a source or a sink. Real effects use Perlin or simplex noise for $\\psi$ to get irregular, natural-looking eddies.',
        },
        {
          type: 'code',
          title: 'curl_noise.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdio>

struct Vec2 { double x, y; };

// Stream function psi(x, y). Any smooth function works; games use Perlin or simplex noise.
double psi(double x, double y) { return std::sin(x) * std::cos(y); }

// Curl noise in 2D: u = < dpsi/dy, -dpsi/dx >, by central differences.
Vec2 velocity(double x, double y) {
    const double h = 1e-4;
    double dpsi_dx = (psi(x + h, y) - psi(x - h, y)) / (2 * h);
    double dpsi_dy = (psi(x, y + h) - psi(x, y - h)) / (2 * h);
    return {dpsi_dy, -dpsi_dx};
}

// div u = P_x + Q_y and scalar curl = Q_x - P_y, again by central differences.
double divergence(double x, double y) {
    const double h = 1e-3;
    return (velocity(x + h, y).x - velocity(x - h, y).x) / (2 * h)
         + (velocity(x, y + h).y - velocity(x, y - h).y) / (2 * h);
}
double curl(double x, double y) {
    const double h = 1e-3;
    return (velocity(x + h, y).y - velocity(x - h, y).y) / (2 * h)
         - (velocity(x, y + h).x - velocity(x, y - h).x) / (2 * h);
}

int main() {
    const double pts[][2] = {{0.5, 0.2}, {1.0, -0.7}, {2.0, 1.5}};
    for (const auto& p : pts) {
        double x = p[0], y = p[1];
        double d = divergence(x, y);
        if (std::fabs(d) < 5e-5) d = 0.0;   // print round-off as 0
        std::printf("(%.1f, %.1f)  div = %.4f  curl = %.4f  exact curl = %.4f\\n",
                    x, y, d, curl(x, y), 2 * psi(x, y));
    }
}`,
          output: `(0.5, 0.2)  div = 0.0000  curl = 0.9397  exact curl = 0.9397
(1.0, -0.7)  div = 0.0000  curl = 1.2872  exact curl = 1.2872
(2.0, 1.5)  div = 0.0000  curl = 0.1286  exact curl = 0.1286`,
          annotations: [
            { lines: '10-15', text: 'The velocity is the 2D curl of $\\psi$, computed with central differences $\\frac{f(x + h) - f(x - h)}{2h}$, the same stencil a grid-based solver uses.' },
            { lines: '18-22', text: 'Numerical divergence $P_x + Q_y$. It comes out at the level of floating-point round-off (about $10^{-10}$), which line 34 prints as $0$.' },
            { lines: '23-27', text: 'Numerical scalar curl $Q_x - P_y$. For $\\vec u = \\langle \\psi_y, -\\psi_x \\rangle$ it equals $-\\nabla^2\\psi$, which is $2\\sin x\\cos y$ here.' },
          ],
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Why particles look right in a divergence-free field',
          text: 'If you advect particles through a field with sinks, they pile up at the sinks and leave empty holes at the sources: the effect looks like water swirling down drains. In a divergence-free field, the area (or volume) of any patch of particles is preserved as they move, so a particle system stays evenly spread while it swirls. That is the whole appeal of curl noise, introduced to graphics by Robert Bridson and colleagues in 2007.',
        },
      ],
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'truefalse',
      prompt: 'If $\\operatorname{curl}\\vec F = \\vec 0$ at every point where $\\vec F$ is defined, then $\\vec F$ must be conservative.',
      answer: false,
      explanation: 'The converse of $\\operatorname{curl}(\\nabla f) = \\vec 0$ needs the domain to be simply connected (no holes to loop around), for example all of $\\mathbb{R}^3$. The vortex $\\vec F = \\frac{\\langle -y, x, 0 \\rangle}{x^2 + y^2}$ has zero curl wherever it is defined, but its domain misses the $z$-axis, and its circulation around the unit circle is $2\\pi \\ne 0$, so it is not conservative.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'fill',
      prompt: 'Complete the identities. Assume all second partial derivatives are continuous.',
      template: '$\\operatorname{curl}(\\nabla f) =$ ___ , $\\ \\operatorname{div}(\\operatorname{curl}\\vec F) =$ ___ , and $\\operatorname{div}(\\nabla f) =$ ___ .',
      blanks: [{ answers: ['$\\vec 0$'] }, { answers: ['$0$'] }, { answers: ['$\\nabla^2 f$'] }],
      wordBank: ['$\\vec 0$', '$0$', '$\\nabla^2 f$', '$\\nabla f$', '$\\vec F$', '$1$'],
      explanation: 'Curl of a gradient is the zero **vector** and divergence of a curl is the zero **scalar**; both follow from equal mixed partials (Clairaut). Divergence of a gradient is not zero in general: it is the Laplacian $\\nabla^2 f = f_{xx} + f_{yy} + f_{zz}$. For example $f = x^2 + y^2 + z^2$ has $\\nabla^2 f = 6$.',
    },
  ],
  takeaways: [
    '$\\operatorname{curl}\\vec F = \\nabla\\times\\vec F = \\langle R_y - Q_z,\\ P_z - R_x,\\ Q_x - P_y \\rangle$ is a vector field; $\\operatorname{div}\\vec F = \\nabla\\cdot\\vec F = P_x + Q_y + R_z$ is a scalar field.',
    'Curl measures local spin: a paddle wheel turns fastest with its axle along the curl, at half its length. Straight shear flows can have curl, and circular vortices can have none.',
    'Divergence measures net outflow per unit volume: positive at sources, negative at sinks, zero for incompressible (divergence-free) flow.',
    '$\\operatorname{curl}(\\nabla f) = \\vec 0$ and $\\operatorname{div}(\\operatorname{curl}\\vec F) = 0$. A nonzero curl rules out a potential; zero curl guarantees one only on simply connected domains such as $\\mathbb{R}^3$.',
    'Green\'s theorem has a flux form: $\\oint_C \\vec F\\cdot\\vec n\\,ds = \\oint_C P\\,dy - Q\\,dx = \\iint_D \\operatorname{div}\\vec F\\,dA$.',
    'Game fluids enforce $\\nabla\\cdot\\vec u = 0$; curl noise gets it for free by taking the curl of a noise potential.',
  ],
  reading: [
    {
      title: 'OpenStax Calculus Volume 3 — Divergence and Curl (section 6.5)',
      url: 'https://openstax.org/details/books/calculus-volume-3',
      source: 'openstax',
      note: 'Section 6.5 defines curl and divergence, interprets them physically and proves the identities used here.',
    },
    {
      title: 'Khan Academy — Multivariable calculus',
      url: 'https://www.khanacademy.org/math/multivariable-calculus',
      source: 'khan',
      note: 'The "Divergence" and "Curl" videos in the derivatives unit build the fluid-flow intuition step by step, with animations.',
    },
    {
      title: '3Blue1Brown',
      url: 'https://www.3blue1brown.com/',
      source: 'other',
      note: 'The divergence and curl video ("the language of Maxwell\'s equations, fluid flow, and more") is the best visual introduction to both ideas.',
    },
    {
      title: 'Wikipedia — Curl (mathematics)',
      url: 'https://en.wikipedia.org/wiki/Curl_(mathematics)',
      source: 'wikipedia',
      note: 'Includes the circulation-per-area definition and a gallery of fields with and without curl.',
    },
  ],
};
