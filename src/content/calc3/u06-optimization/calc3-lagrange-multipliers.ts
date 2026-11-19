import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'calc3-lagrange-multipliers',
  title: 'Lagrange Multipliers',
  summary: 'Optimize under a constraint without solving for anything: at the best point the level curve of the objective just touches the constraint, so the two gradients line up. One vector equation, $\\nabla f = \\lambda \\nabla g$, does the rest.',
  minutes: 18,
  objectives: [
    'Explain why $\\nabla f$ and $\\nabla g$ are parallel at a constrained extremum, using level curves',
    'Set up and solve the Lagrange system $\\nabla f = \\lambda \\nabla g$, $g = k$ in two and three variables',
    'Interpret the multiplier $\\lambda$ as the rate of change of the optimal value with respect to the constraint level',
    'Handle two constraints with $\\nabla f = \\lambda \\nabla g + \\mu \\nabla h$',
    'Recognize where the method can miss an extremum (points with $\\nabla g = \\vec{0}$)',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Optimizing along a constraint',
      blocks: [
        {
          type: 'p',
          text: 'Real optimization problems come with strings attached. Maximize volume, but the material is fixed. Minimize cost, but the part must have a given strength. Find the closest point to a radar site, but the point must lie on a given road. In Calculus I you handled an [[optimization-constraint]] by solving it for one variable and substituting. That gets ugly fast, and sometimes it is impossible.',
        },
        {
          type: 'p',
          text: 'Picture the problem: maximize $f(x, y) = 3x + 4y$ subject to $x^2 + y^2 = 25$. The [[calc3-level-curve|level curves]] of $f$ are parallel lines $3x + 4y = c$. You must stay on the circle. Slide a point around the circle and watch which level line passes through it.',
        },
        {
          type: 'graph',
          x: [-7, 7],
          y: [-7, 7],
          equal: true,
          implicit: [
            { expr: 'x^2 + y^2', levels: [25], label: 'constraint $g = x^2 + y^2 = 25$', color: 'blue' },
            { expr: '3x + 4y', levels: ['15cos(s) + 20sin(s)'], label: 'level line of $f$ through the point', color: 'red', dashed: true },
            { expr: '3x + 4y', levels: [-25, 25], label: 'the extreme levels $f = \\pm 25$', color: 'gray' },
          ],
          segments: [
            { from: ['5cos(s)', '5sin(s)'], to: ['5cos(s) + 0.45*3', '5sin(s) + 0.45*4'], arrow: true, color: 'red', label: '∇f' },
            { from: ['5cos(s)', '5sin(s)'], to: ['5cos(s) + 2cos(s)', '5sin(s) + 2sin(s)'], arrow: true, color: 'blue', label: '∇g' },
          ],
          points: [{ x: '5cos(s)', y: '5sin(s)', color: 'orange' }],
          sliders: [{ name: 's', min: -3.14, max: 3.14, step: 0.01, value: 0, label: 'position on the circle' }],
          readouts: [{ label: '$f = 3x + 4y =$', expr: '15cos(s) + 20sin(s)', digits: 3 }],
          caption: 'Where the red level line **cuts across** the circle, you can slide along the circle onto a higher line, so this is not a maximum. At the best point the level line is tangent to the circle, and the gradient arrows $\\nabla f$ and $\\nabla g$ point the same way. Try $s \\approx 0.93$, the point $(3, 4)$.',
        },
        {
          type: 'theorem',
          name: 'Method of [[calc3-lagrange-multiplier|Lagrange multipliers]]',
          text: 'Let $f$ and $g$ have continuous first partial derivatives. If $f$ has a local maximum or minimum on the curve $g(x, y) = k$ at a point where $\\nabla g \\ne \\vec{0}$, then there is a number $\\lambda$ with\n\n$$\\nabla f(x, y) = \\lambda\\,\\nabla g(x, y).$$\n\nTo find the extremes: solve this together with $g(x, y) = k$ (three equations in $x$, $y$, $\\lambda$), evaluate $f$ at every solution, and compare.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why parallel gradients, in hiker terms',
          text: 'You are hiking a fixed trail (the constraint) across a hillside whose height is $f$. Uphill is the direction of $\\nabla f$. If $\\nabla f$ has any component along the trail, one direction of the trail climbs and you are not at the highest point of the trail yet. At the trail\'s high point, uphill must point straight **off** the trail, perpendicular to it. The perpendicular to the trail is $\\nabla g$, so $\\nabla f$ is a multiple of $\\nabla g$. The multiplier $\\lambda$ can be positive, negative or zero; it only records the ratio of the two lengths.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'mcq',
      prompt: 'At a point $P$ on the constraint curve $g(x, y) = k$, the level curve of $f$ through $P$ **crosses** the constraint curve at a nonzero angle. What can you conclude?',
      options: [
        { text: '$P$ is a constrained maximum', why: 'A crossing means $f$ takes larger values on one side of $P$ along the curve, so $P$ cannot be the largest.' },
        { text: '$P$ is not a constrained maximum or minimum', correct: true, why: 'Moving along the constraint one way crosses to higher levels of $f$, the other way to lower ones. So $f$ is still changing along the curve at $P$.' },
        { text: '$\\nabla f(P) = \\lambda\\nabla g(P)$ for some $\\lambda$', why: 'Parallel gradients mean parallel normals, which means the curves are tangent, not crossing.' },
        { text: 'Nothing; the angle between the curves is irrelevant', why: 'The angle is exactly what the method tests: tangency is necessary at a smooth constrained extremum.' },
      ],
      explanation: 'The gradients are normal to their level curves. If the curves cross, their normals $\\nabla f$ and $\\nabla g$ are not parallel, so $\\nabla f$ has a component along the constraint\'s tangent direction. The directional derivative of $f$ along the constraint is nonzero, and $f$ is still increasing one way. Constrained extremes can only occur where the curves are tangent.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Why the gradients line up, and a full example',
      blocks: [
        {
          type: 'derivation',
          title: 'Proof sketch of the Lagrange condition',
          steps: [
            { tex: '\\vec{r}(t) = \\langle x(t), y(t) \\rangle \\text{ on } g = k, \\quad \\vec{r}(t_0) = P', why: 'Parametrize the constraint curve near the extreme point $P$. This is possible because $\\nabla g(P) \\ne \\vec{0}$ (implicit function theorem).' },
            { tex: 'h(t) = f(\\vec{r}(t)) \\text{ has a local extremum at } t_0 \\implies h\'(t_0) = 0', why: 'Restricted to the curve, $f$ becomes a one-variable function with an extremum at $t_0$.' },
            { tex: 'h\'(t_0) = \\nabla f(P) \\cdot \\vec{r}\\,\'(t_0) = 0', why: '[[calc3-multivariable-chain-rule|Chain rule]]. So $\\nabla f(P)$ is perpendicular to the curve\'s tangent.' },
            { tex: '\\nabla g(P) \\cdot \\vec{r}\\,\'(t_0) = 0', why: 'The gradient of $g$ is perpendicular to its own level curve, as you saw in the gradient lesson.' },
            { tex: '\\nabla f(P) = \\lambda\\,\\nabla g(P)', why: 'In the plane, two vectors perpendicular to the same nonzero tangent vector are parallel.' },
          ],
          result: 'The Lagrange condition is the statement "the directional derivative of $f$ along the constraint is zero", written with gradients.',
        },
        {
          type: 'derivation',
          title: 'Extreme values of $f(x, y) = x^2 + 2y^2$ on the circle $x^2 + y^2 = 1$',
          steps: [
            { tex: '\\langle 2x, 4y \\rangle = \\lambda \\langle 2x, 2y \\rangle, \\quad x^2 + y^2 = 1', why: 'Write out $\\nabla f = \\lambda \\nabla g$ and the constraint.' },
            { tex: '2x = 2\\lambda x \\implies 2x(1 - \\lambda) = 0 \\implies x = 0 \\text{ or } \\lambda = 1', why: 'Factor; do not divide by $x$. Each factor gives a case.' },
            { tex: 'x = 0:\\ y = \\pm 1 \\implies f(0, \\pm 1) = 2', why: 'The constraint fixes $y$. (Then $4y = 2\\lambda y$ gives $\\lambda = 2$, consistent.)' },
            { tex: '\\lambda = 1:\\ 4y = 2y \\implies y = 0,\\ x = \\pm 1 \\implies f(\\pm 1, 0) = 1', why: 'Second equation with $\\lambda = 1$, then the constraint.' },
          ],
          result: 'On the circle, the maximum of $f$ is $2$, at $(0, \\pm 1)$, and the minimum is $1$, at $(\\pm 1, 0)$.',
        },
        {
          type: 'graph',
          x: [-2, 2],
          y: [-1.5, 1.5],
          equal: true,
          implicit: [
            { expr: 'x^2 + y^2', levels: [1], label: 'constraint $x^2 + y^2 = 1$', color: 'blue' },
            { expr: 'x^2 + 2y^2', levels: [0.5, 1, 1.5, 2, 2.5], label: 'level curves $x^2 + 2y^2 = c$', color: 'purple' },
          ],
          points: [
            { x: 0, y: 1, label: 'max 2', color: 'green' },
            { x: 0, y: -1, label: 'max 2', color: 'green' },
            { x: 1, y: 0, label: 'min 1', color: 'red' },
            { x: -1, y: 0, label: 'min 1', color: 'red' },
          ],
          caption: 'The ellipse $c = 1$ touches the circle from inside at $(\\pm 1, 0)$; the ellipse $c = 2$ touches it from outside at $(0, \\pm 1)$. The other ellipses cross the circle, so they contain no extremes.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Extremes on a whole region',
          text: 'For the closed disk $x^2 + y^2 \\le 1$, combine the methods: interior critical points from $\\nabla f = \\vec{0}$ (here $(0, 0)$, $f = 0$), and the boundary from Lagrange. Comparing $0$, $1$ and $2$: on the disk the minimum is $0$ and the maximum is $2$. Lagrange replaces the edge-by-edge parametrization from the last lesson.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'numeric',
      prompt: 'Use Lagrange multipliers to find the maximum value of $f(x, y) = xy$ on the circle $x^2 + y^2 = 8$.',
      label: 'max $=$',
      answer: '4',
      hint: 'The system is $y = 2\\lambda x$, $x = 2\\lambda y$, $x^2 + y^2 = 8$. Multiply the first two equations by $x$ and $y$ to compare $x^2$ and $y^2$.',
      explanation: 'From $y = 2\\lambda x$ and $x = 2\\lambda y$: $y^2 = 2\\lambda xy = x^2$, so $y = \\pm x$. Then $2x^2 = 8$ gives $x = \\pm 2$. The four candidates are $(2, 2)$ and $(-2, -2)$ with $f = 4$, and $(2, -2)$ and $(-2, 2)$ with $f = -4$. The maximum is $4$. (If $x = 0$ the equations force $y = 0$, which is not on the circle, so no case is lost.)',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'error',
      prompt: 'A student finds the maximum of $f(x, y) = x^2 + 2y^2$ on $x^2 + y^2 = 1$. Tap the first line that is wrong.',
      lines: [
        '$\\nabla f = \\lambda \\nabla g$ gives $2x = 2\\lambda x$ and $4y = 2\\lambda y$',
        'Divide the first equation by $2x$: $\\lambda = 1$',
        'Then $4y = 2y$, so $y = 0$ and $x = \\pm 1$',
        'The only candidates are $(\\pm 1, 0)$, so the maximum is $f(\\pm 1, 0) = 1$',
      ],
      errorLines: [2],
      explanation: 'Dividing by $2x$ assumes $x \\ne 0$ and silently discards the case $x = 0$. Write $2x(1 - \\lambda) = 0$ instead and follow both branches. The branch $x = 0$ gives $(0, \\pm 1)$ with $f = 2$, which is the true maximum; $1$ is actually the minimum.',
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'concept',
      title: 'Three variables: the box problem',
      blocks: [
        {
          type: 'p',
          text: 'Nothing changes in three variables except that level curves become level surfaces. To optimize $f(x, y, z)$ on the surface $g(x, y, z) = k$, solve $\\nabla f = \\lambda \\nabla g$ (three equations) together with $g = k$: four equations in $x, y, z, \\lambda$. Geometrically, a level surface of $f$ touches the constraint surface, and their [[la-surface-normal|normals]] are parallel.',
        },
        {
          type: 'derivation',
          title: 'An open-top box made from $12$ m² of sheet metal: maximize its volume',
          steps: [
            { tex: 'V = xyz, \\quad g = xy + 2xz + 2yz = 12', why: 'Base $x$ by $y$, height $z$. The material covers the base and four sides, with no lid.' },
            { tex: 'yz = \\lambda(y + 2z),\\ xz = \\lambda(x + 2z),\\ xy = \\lambda(2x + 2y)', why: '$\\nabla V = \\lambda\\nabla g$, component by component.' },
            { tex: 'xyz = \\lambda(xy + 2xz) = \\lambda(xy + 2yz) = \\lambda(2xz + 2yz)', why: 'Multiply the three equations by $x$, $y$, $z$ respectively, so all left sides equal $xyz$. Here $\\lambda \\ne 0$, since $\\lambda = 0$ would force $V = 0$.' },
            { tex: 'xz = yz \\implies x = y; \\quad xy = 2xz \\implies y = 2z', why: 'Compare the right sides pairwise and cancel the nonzero factors $\\lambda$, $z$, $x$.' },
            { tex: '4z^2 + 4z^2 + 4z^2 = 12 \\implies z = 1,\\ x = y = 2', why: 'Substitute $x = y = 2z$ into the constraint.' },
          ],
          result: 'The best box is $2 \\times 2 \\times 1$ m, with volume $4$ m³. The height is half the base side: the open top lets you spend more material on the walls.',
        },
        {
          type: 'callout',
          variant: 'analogy',
          title: 'Design under a budget',
          text: 'Game balance has the same shape. A designer splits a fixed budget of stat points among speed, armor and firepower so that a combat-effectiveness score is as large as possible. At the optimum, the last point spent on each stat buys the same improvement, which is exactly what $\\nabla f = \\lambda\\nabla g$ says when the constraint is a simple sum: $f_x = f_y = f_z = \\lambda$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'order',
      prompt: 'Order the steps of a Lagrange-multiplier solution.',
      lines: [
        'Identify the objective $f$ and write the constraint in the form $g = k$',
        'Write the system $\\nabla f = \\lambda \\nabla g$ together with $g = k$',
        'Solve the system, following every case when an equation factors',
        'Evaluate $f$ at every solution point and compare: largest is the max, smallest the min',
      ],
      distractors: ['Classify each solution with the second derivative test $D = f_{xx}f_{yy} - f_{xy}^2$'],
      explanation: 'The method finds candidates, and comparing values sorts them out (on a closed, bounded constraint set the extreme values are guaranteed to exist). The unconstrained $D$ test does not apply here: it studies $f$ in all directions, while only directions along the constraint matter.',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'numeric',
      prompt: 'Find the minimum value of $f(x, y, z) = x^2 + y^2 + z^2$ on the plane $x + 2y + 2z = 9$. (This is the squared distance from the origin to the plane.)',
      label: 'min $=$',
      answer: '9',
      hint: '$\\langle 2x, 2y, 2z \\rangle = \\lambda\\langle 1, 2, 2 \\rangle$ means $\\langle x, y, z \\rangle$ is a multiple of $\\langle 1, 2, 2 \\rangle$.',
      explanation: 'The Lagrange equations give $x = \\frac{\\lambda}{2}$, $y = \\lambda$, $z = \\lambda$. The constraint becomes $\\frac{\\lambda}{2} + 2\\lambda + 2\\lambda = 9$, so $\\lambda = 2$ and the point is $(1, 2, 2)$. The minimum is $1 + 4 + 4 = 9$, a distance of $3$. This matches the point-to-plane distance formula $\\frac{|9|}{\\sqrt{1 + 4 + 4}} = 3$. The closest point lies along the normal $\\langle 1, 2, 2 \\rangle$, as geometry says it must.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'concept',
      title: 'What $\\lambda$ means, and when the method fails',
      blocks: [
        {
          type: 'p',
          text: 'The multiplier is not just a bookkeeping device. Let $M(k)$ be the maximum of $f$ subject to $g = k$. Then, under mild conditions,',
        },
        {
          type: 'math',
          tex: '\\lambda = \\frac{dM}{dk}',
          caption: 'The multiplier is the rate at which the best achievable value improves as the constraint is relaxed.',
        },
        {
          type: 'derivation',
          title: 'Check it on the first example: $f = 3x + 4y$ on $x^2 + y^2 = k$',
          steps: [
            { tex: '\\langle 3, 4 \\rangle = \\lambda\\langle 2x, 2y \\rangle \\implies (x, y) = \\tfrac{1}{2\\lambda}(3, 4)', why: 'The Lagrange equations.' },
            { tex: '\\tfrac{25}{4\\lambda^2} = k \\implies \\lambda = \\tfrac{5}{2\\sqrt{k}} \\text{ at the max}', why: 'Substitute into the constraint and take the positive root for the maximum.' },
            { tex: 'M(k) = 3x + 4y = \\tfrac{25}{2\\lambda} = 5\\sqrt{k}', why: 'The maximum value as a function of $k$: a circle of radius $\\sqrt{k}$ reaches level $5\\sqrt{k}$.' },
            { tex: 'M\'(k) = \\tfrac{5}{2\\sqrt{k}} = \\lambda; \\quad k = 25:\\ \\lambda = \\tfrac{1}{2}', why: 'The derivative of the optimal value equals the multiplier.' },
          ],
          result: 'Enlarging the constraint level from $25$ to $26$ raises the maximum by about $\\lambda = \\frac{1}{2}$. Economists call $\\lambda$ a **shadow price**: what one more unit of the constrained resource is worth.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'The method needs $\\nabla g \\ne \\vec{0}$',
          text: 'Minimize $f(x, y) = x$ on the cusp curve $y^2 = x^3$. Every point of the curve has $x \\ge 0$, so the minimum is $0$, at the origin. But $\\nabla f = \\langle 1, 0 \\rangle$ and $\\nabla g = \\langle -3x^2, 2y \\rangle$, which is $\\vec{0}$ at the origin, so $\\nabla f = \\lambda\\nabla g$ has **no** solution there. The Lagrange system misses the answer completely. Always check separately the points of the constraint where $\\nabla g = \\vec{0}$, and endpoints if the constraint curve has any.',
        },
        {
          type: 'graph',
          x: [-0.5, 2.5],
          y: [-2.5, 2.5],
          equal: true,
          implicit: [{ expr: 'y^2 - x^3', levels: [0], label: 'constraint $y^2 = x^3$', color: 'blue' }],
          vlines: [{ x: 0, label: 'f = x = 0' }, { x: 1, label: 'f = 1' }],
          points: [{ x: 0, y: 0, label: 'min at the cusp', color: 'red' }],
          caption: 'The level lines of $f = x$ are vertical. The smallest one touching the curve, $x = 0$, meets it at a cusp, where the curve has no tangent line and $\\nabla g = \\vec{0}$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'truefalse',
      prompt: 'Every constrained maximum of $f$ on the curve $g(x, y) = k$ shows up as a solution of the system $\\nabla f = \\lambda \\nabla g$, $g = k$.',
      answer: false,
      explanation: 'The theorem only covers points where $\\nabla g \\ne \\vec{0}$. At a point of the constraint with $\\nabla g = \\vec{0}$, such as the cusp of $y^2 = x^3$ at the origin, an extremum can occur with no $\\lambda$ satisfying the equation. Endpoints of a constraint curve that is not closed must also be checked separately.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'Two constraints',
      blocks: [
        {
          type: 'p',
          text: 'Two constraints $g(x, y, z) = k$ and $h(x, y, z) = c$ are two surfaces, and together they usually cut out a **curve** $C$. At an extreme point of $f$ on $C$, $\\nabla f$ must be perpendicular to $C$\'s tangent, by the same chain-rule argument as before. Both $\\nabla g$ and $\\nabla h$ are perpendicular to $C$ as well, because $C$ lies in both surfaces. The vectors perpendicular to a curve\'s tangent form a plane, which is spanned by $\\nabla g$ and $\\nabla h$ when they are not parallel. So $\\nabla f$ is a combination of the two:',
        },
        {
          type: 'theorem',
          name: 'Lagrange with two constraints',
          tex: '\\nabla f = \\lambda\\,\\nabla g + \\mu\\,\\nabla h, \\qquad g = k, \\quad h = c',
          text: 'Five equations in the five unknowns $x, y, z, \\lambda, \\mu$.',
        },
        {
          type: 'plot3d',
          x: [-1.6, 1.6],
          y: [-1.6, 1.6],
          z: [-1, 3.2],
          parametricSurfaces: [
            { x: 'cos(u)', y: 'sin(u)', z: 'v', u: [0, '2pi'], v: [-1, 3.2], color: 'blue', opacity: 0.3, label: 'cylinder $x^2 + y^2 = 1$' },
            { x: 'u cos(v)', y: 'u sin(v)', z: '1 - u cos(v) + u sin(v)', u: [0, 1.5], v: [0, '2pi'], color: 'green', opacity: 0.35, label: 'plane $x - y + z = 1$' },
          ],
          curves: [{ x: 'cos(t)', y: 'sin(t)', z: '1 - cos(t) + sin(t)', t: [0, '2pi'], color: 'red', label: 'intersection curve $C$' }],
          points: [{ x: -0.3714, y: 0.9285, z: 2.2999, label: 'max', color: 'orange' }],
          vectors: [{ from: [-0.3714, 0.9285, 2.2999], to: [-0.1714, 1.3285, 2.8999], color: 'orange', label: '∇f' }],
          view: { azimuth: 15, elevation: 22 },
          caption: 'The plane slices the cylinder in a tilted ellipse $C$. On $C$, $f = x + 2y + 3z$ is largest at the orange point, where $\\nabla f = \\langle 1, 2, 3 \\rangle$ is perpendicular to $C$.',
        },
        {
          type: 'derivation',
          title: 'Maximize $f = x + 2y + 3z$ on the curve $x - y + z = 1$, $x^2 + y^2 = 1$',
          steps: [
            { tex: '\\langle 1, 2, 3 \\rangle = \\lambda\\langle 1, -1, 1 \\rangle + \\mu\\langle 2x, 2y, 0 \\rangle', why: '$\\nabla g$ for the plane and $\\nabla h$ for the cylinder.' },
            { tex: 'z\\text{-component: } 3 = \\lambda', why: 'Only $\\nabla g$ has a $z$-component.' },
            { tex: '1 = 3 + 2\\mu x \\implies x = -\\tfrac{1}{\\mu}; \\quad 2 = -3 + 2\\mu y \\implies y = \\tfrac{5}{2\\mu}', why: 'The other two components with $\\lambda = 3$.' },
            { tex: '\\tfrac{1}{\\mu^2} + \\tfrac{25}{4\\mu^2} = 1 \\implies \\mu = \\pm\\tfrac{\\sqrt{29}}{2}', why: 'Substitute into the cylinder $x^2 + y^2 = 1$: $\\frac{29}{4\\mu^2} = 1$.' },
            { tex: '\\mu = \\tfrac{\\sqrt{29}}{2}:\\ (x, y) = \\left(-\\tfrac{2}{\\sqrt{29}}, \\tfrac{5}{\\sqrt{29}}\\right),\\ z = 1 + \\tfrac{7}{\\sqrt{29}}', why: 'Then $z = 1 - x + y$ from the plane.' },
            { tex: 'f = -\\tfrac{2}{\\sqrt{29}} + \\tfrac{10}{\\sqrt{29}} + 3 + \\tfrac{21}{\\sqrt{29}} = 3 + \\sqrt{29}', why: 'Evaluate. The other sign of $\\mu$ gives the minimum, $3 - \\sqrt{29}$.' },
          ],
          result: 'The maximum is $3 + \\sqrt{29} \\approx 8.385$.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Trust, but verify numerically',
          text: 'When the constraint curve can be parametrized, a brute-force scan is a great sanity check on a Lagrange computation. Here $C$ is $\\langle \\cos t, \\sin t, 1 - \\cos t + \\sin t \\rangle$.',
        },
        {
          type: 'code',
          title: 'two_constraints.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdio>
#include <numbers>

// Maximize f = x + 2y + 3z on the curve where the plane x - y + z = 1
// meets the cylinder x^2 + y^2 = 1, by brute-force sampling the curve.
int main() {
    const double pi = std::numbers::pi;
    const int N = 1'000'000;
    double best = -1e300, bx = 0, by = 0, bz = 0;
    for (int k = 0; k < N; ++k) {
        const double t = 2 * pi * k / N;
        const double x = std::cos(t), y = std::sin(t);
        const double z = 1 - x + y;                 // stay on the plane
        const double f = x + 2 * y + 3 * z;
        if (f > best) { best = f; bx = x; by = y; bz = z; }
    }
    std::printf("sampled max  f = %.6f at (%.4f, %.4f, %.4f)\\n", best, bx, by, bz);
    std::printf("Lagrange     f = %.6f at (%.4f, %.4f, %.4f)\\n", 3 + std::sqrt(29.0),
                -2 / std::sqrt(29.0), 5 / std::sqrt(29.0), 1 + 7 / std::sqrt(29.0));

    // Check grad f = lambda grad g + mu grad h with lambda = 3, mu = (1 - 3) / (2x).
    const double lambda = 3, mu = (1 - lambda) / (2 * bx);
    std::printf("y-component: 2 vs %.4f\\n", -lambda + mu * 2 * by);
}`,
          output: `sampled max  f = 8.385165 at (-0.3714, 0.9285, 2.2999)
Lagrange     f = 8.385165 at (-0.3714, 0.9285, 2.2999)
y-component: 2 vs 2.0000`,
          annotations: [
            { lines: '12-14', text: 'Walk around the cylinder by angle $t$; the plane equation then determines $z$, so every sample lies on $C$.' },
            { lines: '18-20', text: 'The scan and the Lagrange solution agree to six decimals.' },
            { lines: '22-24', text: 'With $\\lambda = 3$ and $\\mu$ chosen to match the $x$-component, the $y$-component of $\\lambda\\nabla g + \\mu\\nabla h$ also equals $f_y = 2$: the gradient condition really holds at the maximum.' },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'numeric',
      prompt: 'Using the two-constraint example above, what is the **minimum** value of $f = x + 2y + 3z$ on the curve $x - y + z = 1$, $x^2 + y^2 = 1$? Give an exact answer or a decimal to two places.',
      label: 'min $=$',
      answer: '3 - sqrt(29)',
      answerTex: '3 - \\sqrt{29} \\approx -2.385',
      hint: 'Take the other sign, $\\mu = -\\frac{\\sqrt{29}}{2}$, which flips the signs of $x$ and $y$.',
      explanation: 'With $\\mu = -\\frac{\\sqrt{29}}{2}$: $x = \\frac{2}{\\sqrt{29}}$, $y = -\\frac{5}{\\sqrt{29}}$, $z = 1 - x + y = 1 - \\frac{7}{\\sqrt{29}}$. Then $f = \\frac{2}{\\sqrt{29}} - \\frac{10}{\\sqrt{29}} + 3 - \\frac{21}{\\sqrt{29}} = 3 - \\frac{29}{\\sqrt{29}} = 3 - \\sqrt{29} \\approx -2.385$. As a check, along $C$, $f = 3 - 2\\cos t + 5\\sin t$, which ranges over $3 \\pm \\sqrt{2^2 + 5^2}$.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'fill',
      prompt: 'Complete the summary of the method.',
      template: 'At a constrained extremum (with $\\nabla g \\ne \\vec{0}$), the level curve of $f$ is ___ to the constraint curve, so $\\nabla f =$ ___. With two constraints the condition becomes $\\nabla f = \\lambda\\nabla g +$ ___. The multiplier $\\lambda$ equals the rate of change of the optimal value with respect to ___.',
      blanks: [{ answers: ['tangent'] }, { answers: ['$\\lambda \\nabla g$'] }, { answers: ['$\\mu \\nabla h$'] }, { answers: ['the constraint level $k$'] }],
      wordBank: ['tangent', 'perpendicular', '$\\lambda \\nabla g$', '$\\nabla g$', '$\\mu \\nabla h$', '$\\nabla g \\times \\nabla h$', 'the constraint level $k$', 'the variable $x$'],
      explanation: 'Tangent curves have parallel normals, and the normals are the gradients: $\\nabla f = \\lambda\\nabla g$. With two constraints, $\\nabla f$ must lie in the plane spanned by $\\nabla g$ and $\\nabla h$. And $\\lambda = \\frac{dM}{dk}$ measures how much the best value improves per unit of extra constraint.',
    },
  ],
  takeaways: [
    'At a constrained extremum, the level curve (or surface) of $f$ is tangent to the constraint, so $\\nabla f = \\lambda\\nabla g$.',
    'Solve $\\nabla f = \\lambda\\nabla g$ with $g = k$, following every case when an equation factors, then compare the values of $f$ at all solutions.',
    'For extremes on a whole region, combine interior critical points with Lagrange on the boundary.',
    'The multiplier has meaning: $\\lambda = \\frac{dM}{dk}$, the marginal value of relaxing the constraint.',
    'With two constraints, $\\nabla f = \\lambda\\nabla g + \\mu\\nabla h$. Points where $\\nabla g = \\vec{0}$ (and endpoints) must be checked separately.',
  ],
  reading: [
    {
      title: 'OpenStax Calculus Volume 3, section 4.8: Lagrange Multipliers',
      url: 'https://openstax.org/details/books/calculus-volume-3',
      source: 'openstax',
      note: 'Free textbook. Section 4.8 includes a problem-solving strategy and examples with one and two constraints.',
    },
    {
      title: 'Khan Academy: Multivariable calculus',
      url: 'https://www.khanacademy.org/math/multivariable-calculus',
      source: 'khan',
      note: 'The constrained-optimization videos animate the tangency of level curves and explain the meaning of the multiplier.',
    },
    {
      title: 'Wikipedia: Lagrange multiplier',
      url: 'https://en.wikipedia.org/wiki/Lagrange_multiplier',
      source: 'wikipedia',
      note: 'The Lagrangian function, the general statement with several constraints, and applications in economics and physics.',
    },
  ],
};
