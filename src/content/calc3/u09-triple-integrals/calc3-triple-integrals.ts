import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'calc3-triple-integrals',
  title: 'Triple Integrals',
  summary: 'Add up a quantity spread through a solid: Riemann sums over tiny boxes, iterated integrals over general solid regions in all six orders, and the volume, mass and center of mass of 3D objects.',
  minutes: 20,
  objectives: [
    'Define $\\iiint_E f\\,dV$ as a limit of Riemann sums over boxes and evaluate it over a box as an iterated integral',
    'Describe a solid as a type 1, 2 or 3 region and set up the limits by projecting onto a coordinate plane',
    'Rewrite a triple integral in a different order of integration',
    'Compute the volume, mass and center of mass of a solid',
    'Use moments of inertia of solids, including the box formula physics engines use',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'From double to triple: Riemann sums over boxes',
      blocks: [
        {
          type: 'p',
          text: 'A double integral $\\iint_R f\\,dA$ chops a flat region into tiny rectangles, multiplies each area $\\Delta A$ by a sample value of $f$, and adds. A [[calc3-triple-integral]] does the same thing one dimension up: chop a **solid** into tiny boxes of volume $\\Delta V = \\Delta x\\,\\Delta y\\,\\Delta z$, weight each by $f$, and add.',
        },
        {
          type: 'definition',
          term: 'Triple integral over a box',
          text: 'Let $f$ be defined on the box $B = [a, b] \\times [c, d] \\times [r, s]$. Split $B$ into $l \\cdot m \\cdot n$ sub-boxes $B_{ijk}$ of volume $\\Delta V$ and pick a sample point $(x_{ijk}^*, y_{ijk}^*, z_{ijk}^*)$ in each. Then\n\n$$\\iiint_B f(x, y, z)\\,dV = \\lim_{l, m, n \\to \\infty} \\sum_{i=1}^{l}\\sum_{j=1}^{m}\\sum_{k=1}^{n} f(x_{ijk}^*, y_{ijk}^*, z_{ijk}^*)\\,\\Delta V$$\n\nwhenever the limit exists. It always exists when $f$ is continuous.',
        },
        {
          type: 'p',
          text: 'You cannot draw the graph of $f(x, y, z)$: it would need four dimensions. So stop picturing "volume under a graph" and picture **density** instead. If $f$ is mass per unit volume, $f\\,\\Delta V$ is the mass of one tiny box and the triple integral is the total mass. With $f = 1$ every box contributes its own volume, so $\\iiint_E 1\\,dV$ is the **volume** of $E$.',
        },
        {
          type: 'theorem',
          name: 'Fubini\'s theorem for boxes',
          tex: '\\iiint_B f\\,dV = \\int_r^s \\int_c^d \\int_a^b f(x, y, z)\\,dx\\,dy\\,dz',
          text: 'If $f$ is continuous on $B$, the triple integral equals the iterated integral, and all six orders of $dx$, $dy$, $dz$ give the same answer. Work from the inside out: integrate with respect to the innermost variable while treating the other two as constants.',
        },
        {
          type: 'plot3d',
          x: [0, 1],
          y: [-1, 2],
          z: [0, 3],
          equal: true,
          parametricSurfaces: [{ x: 'u', y: 'v', z: 'c', u: [0, 1], v: [-1, 2], color: 'blue', opacity: 0.75, label: 'the slice $z = c$' }],
          points: [{ x: 1, y: 2, z: 'c', label: 'z = c' }],
          sliders: [{ name: 'c', min: 0, max: 3, step: 0.05, value: 1.5, label: '$c$ (height of the slice)', play: true }],
          readouts: [{ label: 'slice total $\\iint xy c^2\\,dA = \\tfrac{3}{4}c^2 =$', expr: '3c^2/4', digits: 4 }],
          caption: 'The whole plot box is the solid $B = [0, 1] \\times [-1, 2] \\times [0, 3]$. Fubini says: add up $f = xyz^2$ over each horizontal slice, then stack the slices. Press play and watch the slice total $\\tfrac{3}{4}c^2$ grow as the slice rises; integrating it from $0$ to $3$ gives $\\tfrac{27}{4}$.',
        },
        {
          type: 'derivation',
          title: 'Evaluate $\\iiint_B xyz^2\\,dV$ over $B = [0, 1] \\times [-1, 2] \\times [0, 3]$',
          steps: [
            { tex: '\\iiint_B xyz^2\\,dV = \\int_0^3 \\int_{-1}^{2} \\int_0^1 xyz^2\\,dx\\,dy\\,dz', why: 'Fubini: $f$ is continuous on a box, so any order works. We pick $dx\\,dy\\,dz$.' },
            { tex: '\\int_0^1 xyz^2\\,dx = \\left[\\tfrac{x^2}{2}\\right]_0^1 yz^2 = \\tfrac{1}{2}yz^2', why: 'Innermost integral: $y$ and $z$ are constants while $x$ runs from $0$ to $1$.' },
            { tex: '\\int_{-1}^{2} \\tfrac{1}{2}yz^2\\,dy = \\tfrac{1}{2}z^2\\left[\\tfrac{y^2}{2}\\right]_{-1}^{2} = \\tfrac{1}{2}z^2 \\cdot \\tfrac{3}{2} = \\tfrac{3}{4}z^2', why: 'Middle integral: $\\tfrac{4}{2} - \\tfrac{1}{2} = \\tfrac{3}{2}$. This is the slice total from the plot, with $z = c$.' },
            { tex: '\\int_0^3 \\tfrac{3}{4}z^2\\,dz = \\tfrac{3}{4}\\left[\\tfrac{z^3}{3}\\right]_0^3 = \\tfrac{3}{4} \\cdot 9 = \\tfrac{27}{4}', why: 'Outer integral: stack the slices from the bottom of the box to the top.' },
          ],
          result: '$\\iiint_B xyz^2\\,dV = \\tfrac{27}{4}$. Because the integrand factors as $x \\cdot y \\cdot z^2$ over a box, it is also the product $\\tfrac{1}{2} \\cdot \\tfrac{3}{2} \\cdot 9$ of three one-variable integrals.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the order does not matter on a box',
          text: 'Each order adds the same tiny contributions $f\\,\\Delta V$, just grouped differently: into columns, then rows, then layers, or any other grouping. For a finite sum, regrouping cannot change the total, and for continuous $f$ the limits of these sums all agree. The order matters only for *convenience*, and on a general solid it changes the *limits*. It never changes the answer.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'numeric',
      prompt: 'Evaluate $\\iiint_B (x + y + z)\\,dV$ where $B = [0, 1] \\times [0, 2] \\times [0, 3]$.',
      hint: 'Split it into three integrals. Over a box, $\\iiint_B x\\,dV = (\\text{average of } x) \\times \\text{volume}$.',
      answer: '18',
      explanation: 'The box has volume $1 \\cdot 2 \\cdot 3 = 6$. Integrate term by term: $\\iiint_B x\\,dV = \\tfrac{1}{2} \\cdot 2 \\cdot 3 = 3$, $\\iiint_B y\\,dV = 1 \\cdot 2 \\cdot 3 = 6$ (since $\\int_0^2 y\\,dy = 2$), and $\\iiint_B z\\,dV = 1 \\cdot 2 \\cdot \\tfrac{9}{2} = 9$. Total: $3 + 6 + 9 = 18$. Check with averages: the average of $x + y + z$ over the box is $\\tfrac{1}{2} + 1 + \\tfrac{3}{2} = 3$, and $3 \\times 6 = 18$.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'General solids: integrate along vertical sticks',
      blocks: [
        {
          type: 'p',
          text: 'Most solids are not boxes. The standard strategy is to describe the solid as the space between a **bottom surface** and a **top surface** sitting over a region $D$ in the $xy$-plane. Such a solid is a [[calc3-type1-solid|type 1 solid]]:',
        },
        {
          type: 'math',
          tex: 'E = \\{(x, y, z) : (x, y) \\in D,\\ u_1(x, y) \\le z \\le u_2(x, y)\\}',
          caption: '$D$ is the "shadow" of $E$ on the $xy$-plane; $u_1$ and $u_2$ are the floor and the ceiling above each point of $D$.',
        },
        {
          type: 'theorem',
          name: 'Triple integral over a type 1 solid',
          tex: '\\iiint_E f\\,dV = \\iint_D \\left[\\int_{u_1(x, y)}^{u_2(x, y)} f(x, y, z)\\,dz\\right] dA',
          text: 'The inner integral adds $f$ along one **vertical stick** from the floor to the ceiling. Its answer depends on $(x, y)$, and the outer double integral adds up all the sticks over the shadow $D$.',
        },
        {
          type: 'plot3d',
          x: [0, 1],
          y: [0, 1],
          z: [0, 1],
          equal: true,
          view: { azimuth: 35, elevation: 20 },
          parametricSurfaces: [
            { x: 'u', y: 'v(1 - u)', z: '1 - u - v(1 - u)', u: [0, 1], v: [0, 1], color: 'blue', opacity: 0.35, label: 'ceiling $z = 1 - x - y$' },
            { x: 'u', y: 'v(1 - u)', z: '0', u: [0, 1], v: [0, 1], color: 'green', opacity: 0.6, label: 'shadow $D$ (floor $z = 0$)' },
          ],
          curves: [{ x: 'a', y: 's(1 - a)', z: 't(1 - a - s(1 - a))', t: [0, 1], color: 'red', label: 'one vertical stick' }],
          points: [
            { x: 'a', y: 's(1 - a)', z: 0, color: 'green' },
            { x: 'a', y: 's(1 - a)', z: '1 - a - s(1 - a)', color: 'red' },
          ],
          sliders: [
            { name: 'a', min: 0, max: 0.95, step: 0.01, value: 0.3, label: '$x$ of the stick' },
            { name: 's', min: 0, max: 1, step: 0.01, value: 0.4, label: 'fraction of the way across $D$ in $y$' },
          ],
          readouts: [{ label: 'stick length $1 - x - y =$', expr: '1 - a - s(1 - a)', digits: 3 }],
          caption: 'The tetrahedron under $x + y + z = 1$ in the first octant. Every stick starts on the floor $z = 0$ and ends on the slanted face. Slide the stick around the green shadow $D$: its length $1 - x - y$ is the inner integral when $f = 1$.',
        },
        {
          type: 'derivation',
          title: 'Volume of the tetrahedron and $\\iiint_E z\\,dV$',
          steps: [
            { tex: 'E: \\quad 0 \\le x \\le 1, \\quad 0 \\le y \\le 1 - x, \\quad 0 \\le z \\le 1 - x - y', why: 'Sticks run from $z = 0$ up to the plane $z = 1 - x - y$. The shadow $D$ is the triangle under the line $x + y = 1$, described as a type I region.' },
            { tex: 'V = \\int_0^1 \\int_0^{1-x} \\int_0^{1-x-y} dz\\,dy\\,dx = \\int_0^1 \\int_0^{1-x} (1 - x - y)\\,dy\\,dx', why: 'With $f = 1$ the inner integral is just the stick length.' },
            { tex: '= \\int_0^1 \\tfrac{1}{2}(1 - x)^2\\,dx = \\tfrac{1}{6}', why: 'With $w = 1 - x$ fixed, $\\int_0^{w} (w - y)\\,dy = \\tfrac{w^2}{2}$; then $\\int_0^1 \\tfrac{1}{2}(1-x)^2\\,dx = \\tfrac{1}{6}$.' },
            { tex: '\\iiint_E z\\,dV = \\int_0^1 \\int_0^{1-x} \\tfrac{1}{2}(1 - x - y)^2\\,dy\\,dx', why: 'Now the inner integral is $\\int_0^{1-x-y} z\\,dz = \\tfrac{1}{2}(1 - x - y)^2$.' },
            { tex: '= \\int_0^1 \\tfrac{1}{6}(1 - x)^3\\,dx = \\tfrac{1}{24}', why: 'Same substitution: $\\int_0^w \\tfrac{1}{2}(w - y)^2\\,dy = \\tfrac{w^3}{6}$, and $\\int_0^1 \\tfrac{1}{6}(1 - x)^3\\,dx = \\tfrac{1}{24}$.' },
          ],
          result: 'The tetrahedron has volume $\\tfrac{1}{6}$ (one sixth of the unit cube) and $\\iiint_E z\\,dV = \\tfrac{1}{24}$. Their ratio $\\tfrac{1/24}{1/6} = \\tfrac{1}{4}$ is the average height of the solid, which you will meet again as $\\bar z$.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'A reliable setup routine',
          text: 'Find the floor and ceiling first: they give the inner limits as functions of $x$ and $y$. Then **flatten** the solid: the shadow $D$ is where the floor and ceiling meet or where the side walls stand. Describe $D$ exactly as you did for double integrals. Outer limits must be **constants**; middle limits may depend only on the outer variable.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'expr',
      prompt: 'In the tetrahedron example, the inner integral of $\\iiint_E z\\,dV$ is $\\displaystyle\\int_0^{1-x-y} z\\,dz$. Evaluate it as a function of $x$ and $y$.',
      variables: ['x', 'y'],
      label: '$\\displaystyle\\int_0^{1-x-y} z\\,dz =$',
      answer: '(1 - x - y)^2/2',
      answerTex: '\\tfrac{1}{2}(1 - x - y)^2',
      hint: 'Antiderivative $\\tfrac{z^2}{2}$, evaluated from $0$ to $1 - x - y$. Treat $x$ and $y$ as constants.',
      explanation: '$\\left[\\tfrac{z^2}{2}\\right]_0^{1-x-y} = \\tfrac{1}{2}(1 - x - y)^2$. The inner integral of a triple integral always leaves a function of the two outer variables; here it is the total of $z$ along the stick above $(x, y)$. Expanding is fine too: $\\tfrac{1}{2}(1 - 2x - 2y + x^2 + 2xy + y^2)$.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'mcq',
      prompt: 'The solid $E$ lies in the first octant under the plane $2x + 3y + z = 6$. Which iterated integral (order $dz\\,dy\\,dx$) gives its volume?',
      plot3d: {
        type: 'plot3d',
        x: [0, 3],
        y: [0, 2],
        z: [0, 6],
        parametricSurfaces: [
          { x: '3u', y: '2v(1 - u)', z: '6 - 6u - 6v(1 - u)', u: [0, 1], v: [0, 1], color: 'blue', opacity: 0.45, label: '$2x + 3y + z = 6$' },
          { x: '3u', y: '2v(1 - u)', z: '0', u: [0, 1], v: [0, 1], color: 'green', opacity: 0.6, label: 'shadow $D$' },
        ],
        caption: 'The tetrahedron with vertices $(0,0,0)$, $(3,0,0)$, $(0,2,0)$, $(0,0,6)$.',
      },
      options: [
        {
          text: '$\\displaystyle\\int_0^3 \\int_0^{(6-2x)/3} \\int_0^{6-2x-3y} dz\\,dy\\,dx$',
          correct: true,
          why: 'Sticks go from $z = 0$ to the plane $z = 6 - 2x - 3y$. The shadow is bounded by the trace $2x + 3y = 6$ (set $z = 0$), so $y$ runs to $\\tfrac{6 - 2x}{3}$, and $x$ runs from $0$ to $3$.',
        },
        {
          text: '$\\displaystyle\\int_0^3 \\int_0^2 \\int_0^{6-2x-3y} dz\\,dy\\,dx$',
          why: 'This treats the shadow as the whole rectangle $[0, 3] \\times [0, 2]$. Over the far corner, $6 - 2x - 3y < 0$, so the "sticks" point downward and subtract volume.',
        },
        {
          text: '$\\displaystyle\\int_0^6 \\int_0^{(6-2x)/3} \\int_0^{6-2x-3y} dz\\,dy\\,dx$',
          why: 'The outer limit for $x$ must come from the shadow in the $xy$-plane, where $x$ reaches only $3$. The $6$ is the $z$-intercept.',
        },
        {
          text: '$\\displaystyle\\int_0^3 \\int_0^{(6-2x)/3} \\int_0^{6} dz\\,dy\\,dx$',
          why: 'The ceiling is the slanted plane, not the height $z = 6$ of its highest point. This computes the volume of a prism.',
        },
      ],
      explanation: 'Read the limits from the inside out. Ceiling: solve the plane for $z$, giving $z = 6 - 2x - 3y$. Shadow: set $z = 0$ to get the line $2x + 3y = 6$, so $0 \\le y \\le \\tfrac{6 - 2x}{3}$ for $0 \\le x \\le 3$. The value is $6$, which matches the tetrahedron formula $\\tfrac{1}{6} \\cdot 3 \\cdot 2 \\cdot 6$.',
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'concept',
      title: 'Projecting onto other planes: the six orders',
      blocks: [
        {
          type: 'p',
          text: 'Nothing forces the sticks to be vertical. A **type 2** solid lies between two surfaces $x = u_1(y, z)$ and $x = u_2(y, z)$ over a shadow $D$ in the $yz$-plane, and a **type 3** solid lies between $y = u_1(x, z)$ and $y = u_2(x, z)$ over a shadow in the $xz$-plane. Choose the direction in which the solid has a single clean floor and ceiling.',
        },
        {
          type: 'table',
          headers: ['Sticks parallel to', 'Shadow in', 'Orders'],
          rows: [
            ['$z$-axis (type 1)', '$xy$-plane', '$dz\\,dy\\,dx$ or $dz\\,dx\\,dy$'],
            ['$y$-axis (type 3)', '$xz$-plane', '$dy\\,dz\\,dx$ or $dy\\,dx\\,dz$'],
            ['$x$-axis (type 2)', '$yz$-plane', '$dx\\,dy\\,dz$ or $dx\\,dz\\,dy$'],
          ],
          caption: 'Three stick directions times two ways to describe each shadow: six orders. The innermost variable is the stick direction.',
        },
        {
          type: 'plot3d',
          x: [-2, 2],
          y: [0, 4.2],
          z: [-2, 2],
          equal: true,
          view: { azimuth: 55, elevation: 18 },
          parametricSurfaces: [
            { x: 'u cos(v)', y: 'u^2', z: 'u sin(v)', u: [0, 2], v: [0, '2pi'], color: 'blue', opacity: 0.4, label: 'paraboloid $y = x^2 + z^2$' },
            { x: 'u cos(v)', y: '4', z: 'u sin(v)', u: [0, 2], v: [0, '2pi'], color: 'purple', opacity: 0.4, label: 'cap $y = 4$' },
            { x: 'u cos(v)', y: '0', z: 'u sin(v)', u: [0, 2], v: [0, '2pi'], color: 'orange', opacity: 0.5, label: 'shadow $D$ in the $xz$-plane' },
          ],
          curves: [{ x: 'a', y: 'a^2 + b^2 + t(4 - a^2 - b^2)', z: 'b', t: [0, 1], color: 'red', label: 'stick parallel to the $y$-axis' }],
          sliders: [
            { name: 'a', min: -1.4, max: 1.4, step: 0.05, value: 0.6, label: '$x$ of the stick' },
            { name: 'b', min: -1.4, max: 1.4, step: 0.05, value: -0.5, label: '$z$ of the stick' },
          ],
          readouts: [{ label: 'stick length $4 - x^2 - z^2 =$', expr: '4 - a^2 - b^2', digits: 3 }],
          caption: 'A paraboloid lying on its side, opening along the $y$-axis and capped by the plane $y = 4$. Vertical sticks would cross the curved wall twice; horizontal sticks parallel to the $y$-axis run cleanly from the paraboloid to the cap. Their shadow is the disk $x^2 + z^2 \\le 4$.',
        },
        {
          type: 'derivation',
          title: 'Volume inside $y = x^2 + z^2$ up to $y = 4$',
          steps: [
            { tex: 'V = \\iint_D \\left[\\int_{x^2+z^2}^{4} dy\\right] dA, \\qquad D: x^2 + z^2 \\le 4', why: 'Type 3: floor $y = x^2 + z^2$, ceiling $y = 4$. They meet where $x^2 + z^2 = 4$, which is the edge of the shadow disk.' },
            { tex: '= \\iint_D (4 - x^2 - z^2)\\,dA', why: 'The inner integral is the stick length.' },
            { tex: '= \\int_0^{2\\pi}\\int_0^2 (4 - r^2)\\,r\\,dr\\,d\\theta', why: 'The shadow is a disk, so switch to polar coordinates in the $xz$-plane: $x = r\\cos\\theta$, $z = r\\sin\\theta$, $dA = r\\,dr\\,d\\theta$.' },
            { tex: '= 2\\pi\\left[2r^2 - \\tfrac{r^4}{4}\\right]_0^2 = 2\\pi(8 - 4) = 8\\pi', why: 'The integrand does not involve $\\theta$, so the $\\theta$-integral contributes a factor $2\\pi$.' },
          ],
          result: 'The volume is $8\\pi$. With vertical sticks the same solid would need several pieces; with the right stick direction it is a one-liner.',
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'Exams often ask you to *set up* a triple integral in a specified order rather than evaluate it. Graders check that the outer limits are constants, the middle limits involve only the outer variable, and the inner limits are the two bounding surfaces solved for the inner variable. A sketch of the shadow earns partial credit even when the algebra slips.',
        },
      ],
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'fill',
      prompt: 'Complete the setup for the solid inside the paraboloid $y = x^2 + z^2$ and below the plane $y = 4$.',
      template: 'The best sticks run parallel to the ___ -axis, so the shadow $D$ lies in the ___ -plane, and the inner integral runs from $y =$ ___ to $y = 4$.',
      blanks: [{ answers: ['$y$'] }, { answers: ['$xz$'] }, { answers: ['$x^2 + z^2$'] }],
      wordBank: ['$y$', '$z$', '$x$', '$xz$', '$xy$', '$x^2 + z^2$', '$0$'],
      explanation: 'The paraboloid opens along the $y$-axis, so lines parallel to the $y$-axis enter through the paraboloid $y = x^2 + z^2$ and leave through the cap $y = 4$. Flattening along $y$ gives the shadow $x^2 + z^2 \\le 4$ in the $xz$-plane. Vertical sticks (parallel to $z$) would hit the curved wall twice, splitting the integral into upper and lower halves.',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'concept',
      title: 'Changing the order of integration',
      blocks: [
        {
          type: 'p',
          text: 'Sometimes you are handed an iterated integral and need a different order, because the inner antiderivative is impossible or because a later step is easier. The method is the same as for double integrals, with one more dimension to keep straight: **recover the solid from the limits**, then describe it again in the new order.',
        },
        {
          type: 'plot3d',
          x: [0, 1],
          y: [0, 1],
          z: [0, 1],
          equal: true,
          view: { azimuth: -55, elevation: 22 },
          parametricSurfaces: [
            { x: 'u', y: 'v u^2', z: '0', u: [0, 1], v: [0, 1], color: 'green', opacity: 0.55, label: 'floor $z = 0$' },
            { x: 'u', y: 'v u^2', z: 'v u^2', u: [0, 1], v: [0, 1], color: 'blue', opacity: 0.45, label: 'roof $z = y$' },
            { x: 'u', y: 'u^2', z: 'v u^2', u: [0, 1], v: [0, 1], color: 'purple', opacity: 0.4, label: 'wall $y = x^2$' },
            { x: '1', y: 'u', z: 'v u', u: [0, 1], v: [0, 1], color: 'orange', opacity: 0.4, label: 'end $x = 1$' },
          ],
          caption: 'The solid $0 \\le x \\le 1$, $0 \\le y \\le x^2$, $0 \\le z \\le y$: a curved wedge between the floor, the slanted roof $z = y$, the parabolic wall $y = x^2$ and the end plane $x = 1$. Turn it until you can see each face, then read off new limits.',
        },
        {
          type: 'derivation',
          title: 'Rewrite $\\displaystyle\\int_0^1 \\int_0^{x^2} \\int_0^{y} f\\,dz\\,dy\\,dx$ in the order $dx\\,dy\\,dz$',
          steps: [
            { tex: 'E: \\ 0 \\le x \\le 1,\\ \\ 0 \\le y \\le x^2,\\ \\ 0 \\le z \\le y', why: 'Translate each pair of limits into an inequality. This list *is* the solid.' },
            { tex: '0 \\le z \\le y \\le x^2 \\le 1', why: 'Chain the inequalities together (using $x \\ge 0$). This one line holds all the information.' },
            { tex: '0 \\le z \\le 1', why: 'Outer variable $z$: its smallest value is $0$ and its largest is $1$ (at the corner $x = y = z = 1$). Outer limits must be constants.' },
            { tex: 'z \\le y \\le 1', why: 'Middle variable $y$ for a fixed $z$: the chain says $y \\ge z$, and $y \\le x^2 \\le 1$.' },
            { tex: '\\sqrt{y} \\le x \\le 1', why: 'Inner variable $x$ for fixed $y$ and $z$: from $y \\le x^2$ and $x \\ge 0$ we get $x \\ge \\sqrt{y}$, and $x \\le 1$.' },
            { tex: '\\int_0^1 \\int_z^1 \\int_{\\sqrt{y}}^{1} f\\,dx\\,dy\\,dz', why: 'Assemble from the outside in.' },
          ],
          result: 'Check with $f = 1$: the original order gives $\\int_0^1 \\int_0^{x^2} y\\,dy\\,dx = \\int_0^1 \\tfrac{x^4}{2}\\,dx = \\tfrac{1}{10}$, and the new order gives $\\int_0^1 \\int_z^1 (1 - \\sqrt{y})\\,dy\\,dz = \\tfrac{1}{10}$ too.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Do not just shuffle the integral signs',
          text: 'Swapping the order of the integral signs while keeping the old limits is the classic error. The limit $x^2$ belonged to $y$; once $x$ is inside, it must become a limit for $x$ ($x = \\sqrt{y}$). The safe test: the outer limits are numbers, and each inner limit mentions only variables that are further out.',
        },
      ],
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'error',
      prompt: 'A student rewrites $\\displaystyle\\int_0^1 \\int_0^{x^2} \\int_0^{y} f\\,dz\\,dy\\,dx$ in the order $dx\\,dy\\,dz$. Tap the first line that is wrong.',
      lines: [
        'The solid is $0 \\le x \\le 1$, $0 \\le y \\le x^2$, $0 \\le z \\le y$.',
        'Over the whole solid, $z$ runs from $0$ to $1$.',
        'For a fixed $z$, $y$ runs from $z$ to $1$.',
        'For fixed $y$ and $z$, $x$ runs from $0$ to $\\sqrt{y}$.',
        'So the integral is $\\displaystyle\\int_0^1 \\int_z^1 \\int_0^{\\sqrt{y}} f\\,dx\\,dy\\,dz$.',
      ],
      errorLines: [4],
      explanation: 'The condition $y \\le x^2$ means $x \\ge \\sqrt{y}$, so $x$ runs from $\\sqrt{y}$ to $1$, not from $0$ to $\\sqrt{y}$. The student described the region on the *wrong side* of the parabolic wall. A quick check with $f = 1$ exposes it: the wrong version gives $\\int_0^1 \\int_z^1 \\sqrt{y}\\,dy\\,dz = \\tfrac{2}{5}$ instead of the true volume $\\tfrac{1}{10}$. Correct: $\\int_0^1 \\int_z^1 \\int_{\\sqrt{y}}^1 f\\,dx\\,dy\\,dz$.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'concept',
      title: 'Mass and center of mass of a solid',
      blocks: [
        {
          type: 'p',
          text: 'In Calculus II you found the [[calc2-center-of-mass|center of mass]] of rods and flat plates. A solid works the same way with one more coordinate. If $\\rho(x, y, z)$ is the density (mass per unit volume), each tiny box has mass $\\rho\\,\\Delta V$, and the balance point is the mass-weighted average position.',
        },
        {
          type: 'theorem',
          name: 'Mass, moments and center of mass',
          tex: '\\begin{aligned} m &= \\iiint_E \\rho\\,dV \\\\ M_{yz} &= \\iiint_E x\\rho\\,dV, \\quad M_{xz} = \\iiint_E y\\rho\\,dV, \\quad M_{xy} = \\iiint_E z\\rho\\,dV \\\\ (\\bar x, \\bar y, \\bar z) &= \\left(\\frac{M_{yz}}{m}, \\frac{M_{xz}}{m}, \\frac{M_{xy}}{m}\\right) \\end{aligned}',
          text: 'Each [[calc2-moment|moment]] is named for the plane it is measured from: $M_{yz}$ weights by $x$, the distance from the $yz$-plane. With constant density, $\\rho$ cancels and the center of mass is the **centroid**, a purely geometric point.',
        },
        {
          type: 'plot3d',
          x: [0, 1],
          y: [-1, 1],
          z: [0, 1],
          equal: true,
          view: { azimuth: 115, elevation: 20 },
          parametricSurfaces: [
            { x: 'v^2 + u(1 - v^2)', y: 'v', z: '0', u: [0, 1], v: [-1, 1], color: 'green', opacity: 0.45, label: 'floor $z = 0$' },
            { x: 'v^2 + u(1 - v^2)', y: 'v', z: 'v^2 + u(1 - v^2)', u: [0, 1], v: [-1, 1], color: 'blue', opacity: 0.4, label: 'roof $z = x$' },
            { x: 'v^2', y: 'v', z: 'u v^2', u: [0, 1], v: [-1, 1], color: 'purple', opacity: 0.35, label: 'wall $x = y^2$' },
            { x: '1', y: 'v', z: 'u', u: [0, 1], v: [-1, 1], color: 'orange', opacity: 0.35, label: 'end $x = 1$' },
          ],
          points: [{ x: '5/7', y: 0, z: '5/14', label: 'centroid', color: 'red' }],
          caption: 'The solid bounded by the parabolic cylinder $x = y^2$ and the planes $z = 0$, $z = x$ and $x = 1$. The red point is its centroid $(\\tfrac{5}{7}, 0, \\tfrac{5}{14})$. Spin it: the point sits on the mirror plane $y = 0$, toward the tall end.',
        },
        {
          type: 'derivation',
          title: 'Centroid of that solid (constant density $\\rho$)',
          steps: [
            { tex: 'E: \\ -1 \\le y \\le 1,\\ \\ y^2 \\le x \\le 1,\\ \\ 0 \\le z \\le x', why: 'Vertical sticks from $z = 0$ to $z = x$; the shadow lies between the parabola $x = y^2$ and the line $x = 1$, best described as a type II region.' },
            { tex: 'm = \\rho\\int_{-1}^{1}\\int_{y^2}^{1}\\int_0^x dz\\,dx\\,dy = \\rho\\int_{-1}^{1}\\frac{1 - y^4}{2}\\,dy = \\frac{4\\rho}{5}', why: 'Inner: the stick length is $x$. Middle: $\\int_{y^2}^1 x\\,dx = \\tfrac{1 - y^4}{2}$. Outer: $\\tfrac{1}{2}(2 - \\tfrac{2}{5}) = \\tfrac{4}{5}$.' },
            { tex: 'M_{yz} = \\rho\\int_{-1}^{1}\\int_{y^2}^{1} x^2\\,dx\\,dy = \\rho\\int_{-1}^{1}\\frac{1 - y^6}{3}\\,dy = \\frac{4\\rho}{7}', why: 'Weight by $x$: the inner integral gives $x \\cdot x = x^2$, then $\\tfrac{1}{3}(2 - \\tfrac{2}{7}) = \\tfrac{4}{7}$.' },
            { tex: 'M_{xy} = \\rho\\int_{-1}^{1}\\int_{y^2}^{1} \\frac{x^2}{2}\\,dx\\,dy = \\frac{2\\rho}{7}', why: 'Weight by $z$: $\\int_0^x z\\,dz = \\tfrac{x^2}{2}$, which is half of the previous integrand.' },
            { tex: 'M_{xz} = 0', why: 'The solid is symmetric under $y \\to -y$ and so is the density, so the $y$-weights cancel in pairs.' },
            { tex: '(\\bar x, \\bar y, \\bar z) = \\left(\\frac{4/7}{4/5},\\ 0,\\ \\frac{2/7}{4/5}\\right) = \\left(\\frac{5}{7},\\ 0,\\ \\frac{5}{14}\\right)', why: 'Divide each moment by the mass. The $\\rho$ cancels, so this is the centroid.' },
          ],
          result: 'The centroid is $(\\tfrac{5}{7}, 0, \\tfrac{5}{14})$, toward the end $x = 1$ where the solid is tallest and thickest.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Mass properties in a physics engine',
          text: 'A rigid body in a game engine stores its mass, center of mass and inertia tensor, all triple integrals over its shape. Engines compute them analytically for boxes, spheres and capsules and numerically for convex meshes. The program below estimates the centroid above with an **iterated midpoint rule** that follows the same limits as the derivation.',
        },
        {
          type: 'code',
          title: 'centroid.cpp',
          runnable: true,
          code: `#include <cstdio>

// Solid E: -1 <= y <= 1, y^2 <= x <= 1, 0 <= z <= x  (density 1).
// Iterated midpoint rule: n slices in each direction, following the limits.
void centroid(int n) {
    double m = 0, mx = 0, mz = 0;
    const double dy = 2.0 / n;
    for (int j = 0; j < n; ++j) {
        double y = -1 + (j + 0.5) * dy;
        double x0 = y * y, dx = (1 - x0) / n;
        for (int i = 0; i < n; ++i) {
            double x = x0 + (i + 0.5) * dx;
            double dz = x / n;
            for (int k = 0; k < n; ++k) {
                double z = (k + 0.5) * dz;
                double dV = dx * dy * dz;
                m += dV;
                mx += x * dV;
                mz += z * dV;
            }
        }
    }
    std::printf("n = %3d  mass = %.6f  xbar = %.6f  zbar = %.6f\\n", n, m, mx / m, mz / m);
}

int main() {
    for (int n = 4; n <= 256; n *= 4) centroid(n);
    std::printf("exact    mass = %.6f  xbar = %.6f  zbar = %.6f\\n", 0.8, 5.0 / 7, 5.0 / 14);
}`,
          output: `n =   4  mass = 0.839844  xbar = 0.717433  zbar = 0.358716
n =  16  mass = 0.802597  xbar = 0.714819  zbar = 0.357409
n =  64  mass = 0.800163  xbar = 0.714320  zbar = 0.357160
n = 256  mass = 0.800010  xbar = 0.714288  zbar = 0.357144
exact    mass = 0.800000  xbar = 0.714286  zbar = 0.357143`,
          annotations: [
            { lines: '8-9', text: 'Outer loop over $y$ (midpoints of $n$ equal slices of $[-1, 1]$).' },
            { lines: '10', text: 'The middle limits depend on the outer variable: $x$ runs from $y^2$ to $1$.' },
            { lines: '13', text: 'The inner limits depend on both: $z$ runs from $0$ to $x$, so the slice thickness $dz$ changes from stick to stick.' },
            { lines: '16-19', text: 'Each tiny box contributes its volume to the mass and its volume times $x$ (or $z$) to the moments.' },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'numeric',
      prompt: 'The unit cube $[0, 1]^3$ has density $\\rho(x, y, z) = x + y + z$. Its mass is $m = \\tfrac{3}{2}$. Find $\\bar x$.',
      label: '$\\bar x =$',
      answer: '5/9',
      answerTex: '\\tfrac{5}{9}',
      hint: 'Compute $M_{yz} = \\iiint x(x + y + z)\\,dV = \\iiint (x^2 + xy + xz)\\,dV$ term by term, then divide by $\\tfrac{3}{2}$.',
      explanation: 'Over the unit cube, $\\iiint x^2\\,dV = \\tfrac{1}{3}$, $\\iiint xy\\,dV = \\tfrac{1}{2} \\cdot \\tfrac{1}{2} = \\tfrac{1}{4}$ and $\\iiint xz\\,dV = \\tfrac{1}{4}$. So $M_{yz} = \\tfrac{1}{3} + \\tfrac{1}{4} + \\tfrac{1}{4} = \\tfrac{5}{6}$ and $\\bar x = \\tfrac{5/6}{3/2} = \\tfrac{5}{9} \\approx 0.556$. That is a bit past the middle $\\tfrac{1}{2}$, as it should be, because the density grows with $x$. By symmetry $\\bar y = \\bar z = \\tfrac{5}{9}$ as well.',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'truefalse',
      prompt: 'Let $H$ be the solid upper hemisphere $x^2 + y^2 + z^2 \\le 1$, $z \\ge 0$. By symmetry, both $\\iiint_H x\\,dV$ and $\\iiint_H z\\,dV$ equal $0$.',
      answer: false,
      explanation: '$\\iiint_H x\\,dV = 0$ is true: $H$ is symmetric under $x \\to -x$ and the integrand is odd in $x$, so the contributions cancel in pairs. But $H$ has **no** mirror symmetry in $z$: every point has $z \\ge 0$, so $\\iiint_H z\\,dV > 0$. (In the next lesson you will compute it as $\\tfrac{\\pi}{4}$, which puts the centroid at $\\bar z = \\tfrac{3}{8}$.) Symmetry arguments need both a symmetric region *and* an odd integrand in that variable.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'concept',
      title: 'Moments of inertia and average values',
      blocks: [
        {
          type: 'p',
          text: 'Mass resists being pushed; [[phys-moment-of-inertia|moment of inertia]] resists being spun. A tiny box at distance $d$ from an axis contributes $d^2\\,\\rho\\,\\Delta V$, so for the coordinate axes:',
        },
        {
          type: 'math',
          tex: 'I_x = \\iiint_E (y^2 + z^2)\\,\\rho\\,dV, \\qquad I_y = \\iiint_E (x^2 + z^2)\\,\\rho\\,dV, \\qquad I_z = \\iiint_E (x^2 + y^2)\\,\\rho\\,dV',
          caption: 'The squared distance to the $z$-axis is $x^2 + y^2$: the height $z$ does not matter.',
        },
        {
          type: 'derivation',
          title: 'A solid box $a \\times b \\times c$ spinning about its vertical center axis',
          steps: [
            { tex: 'E = [-\\tfrac{a}{2}, \\tfrac{a}{2}] \\times [-\\tfrac{b}{2}, \\tfrac{b}{2}] \\times [-\\tfrac{c}{2}, \\tfrac{c}{2}], \\qquad \\rho = \\frac{m}{abc}', why: 'Center the box at the origin so the $z$-axis is its center axis. Uniform density is mass over volume.' },
            { tex: 'I_z = \\rho\\iiint_E (x^2 + y^2)\\,dV = \\rho\\left(bc\\int_{-a/2}^{a/2} x^2\\,dx + ac\\int_{-b/2}^{b/2} y^2\\,dy\\right)', why: 'Split the sum. In $\\iiint x^2\\,dV$ the $y$- and $z$-integrals just give the lengths $b$ and $c$.' },
            { tex: '\\int_{-a/2}^{a/2} x^2\\,dx = \\frac{2}{3}\\left(\\frac{a}{2}\\right)^3 = \\frac{a^3}{12}', why: 'An even integrand over a symmetric interval.' },
            { tex: 'I_z = \\frac{m}{abc}\\left(\\frac{a^3 bc}{12} + \\frac{ab^3 c}{12}\\right) = \\frac{m(a^2 + b^2)}{12}', why: 'Same computation for $y$; then cancel $abc$.' },
          ],
          result: 'A box spins about its center axis with $I_z = \\tfrac{1}{12}m(a^2 + b^2)$. The height $c$ drops out: stretching the box along the axis does not make it harder to spin, as long as the mass stays the same.',
        },
        {
          type: 'p',
          text: 'Dividing a triple integral by a volume gives an **average**, exactly as in one variable: $f_{\\text{avg}} = \\frac{1}{V(E)}\\iiint_E f\\,dV$. The coordinates of the centroid are the average values of $x$, $y$ and $z$ over the solid. For the tetrahedron you found $\\bar z = \\tfrac{1/24}{1/6} = \\tfrac{1}{4}$.',
        },
        {
          type: 'deepdive',
          title: 'The inertia tensor that game engines store',
          blocks: [
            {
              type: 'p',
              text: 'An object can spin about any axis through its center of mass, not just $x$, $y$ or $z$. All of that information fits in a symmetric $3 \\times 3$ matrix, the **inertia tensor**, whose diagonal holds $I_x$, $I_y$, $I_z$ and whose off-diagonal entries are the products of inertia $-\\iiint xy\\,\\rho\\,dV$, $-\\iiint xz\\,\\rho\\,dV$, $-\\iiint yz\\,\\rho\\,dV$:',
            },
            {
              type: 'math',
              tex: 'I = \\begin{bmatrix} I_x & -I_{xy} & -I_{xz} \\\\ -I_{xy} & I_y & -I_{yz} \\\\ -I_{xz} & -I_{yz} & I_z \\end{bmatrix}, \\qquad I_{\\text{box}} = \\frac{m}{12}\\begin{bmatrix} b^2 + c^2 & 0 & 0 \\\\ 0 & a^2 + c^2 & 0 \\\\ 0 & 0 & a^2 + b^2 \\end{bmatrix}',
            },
            {
              type: 'p',
              text: 'For a centered box the products of inertia vanish by symmetry, so the tensor is diagonal. Physics engines (PhysX, Havok, Jolt, Bullet) store exactly this matrix for every box collider and use $\\vec{\\tau} = I\\vec{\\alpha}$ to turn torques into angular acceleration. The symmetric matrix always has three perpendicular eigenvectors, the **principal axes**, which engines use to store the tensor in diagonal form.',
            },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'numeric',
      prompt: 'A crate is a solid box $4\\ \\text{m}$ long, $2\\ \\text{m}$ wide and $1\\ \\text{m}$ tall with uniform density and mass $6\\ \\text{kg}$. Find its moment of inertia about the vertical axis through its center.',
      label: '$I_z =$',
      unit: 'kg·m²',
      answer: '10',
      hint: 'Use $I_z = \\tfrac{1}{12}m(a^2 + b^2)$ with the two horizontal side lengths.',
      explanation: 'The vertical axis is perpendicular to the $4 \\times 2$ footprint, so $I_z = \\tfrac{1}{12} \\cdot 6 \\cdot (4^2 + 2^2) = \\tfrac{1}{2} \\cdot 20 = 10\\ \\text{kg·m}^2$. The height $1\\ \\text{m}$ does not enter: in $\\iiint (x^2 + y^2)\\rho\\,dV$ the $z$-integral only contributes the height, which cancels against the density $\\rho = \\tfrac{m}{abc}$.',
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'order',
      prompt: 'Put the steps for evaluating $\\iiint_E f\\,dV$ over a type 1 solid in order.',
      lines: [
        'Identify the bottom surface $z = u_1(x, y)$ and the top surface $z = u_2(x, y)$, project $E$ onto the $xy$-plane to get its shadow $D$, and describe $D$ with constant outer limits and middle limits in the outer variable',
        'Integrate $f$ with respect to $z$ from $u_1$ to $u_2$',
        'Evaluate the remaining double integral over $D$',
      ],
      distractors: ['Integrate with respect to $x$ first, using the limits of $D$'],
      explanation: 'Floor, ceiling and shadow first: they decide which way the sticks run, where they end, and what region the outer integrals cover. Then describe the shadow with limits, as for a double integral. Only after the limits are complete do you integrate, from the inside out: $z$ first (it is the stick direction), then the double integral. The distractor reverses the nesting: the limits of $D$ belong to the outer integrals.',
    },
  ],
  takeaways: [
    '$\\iiint_E f\\,dV$ is a limit of sums of $f\\,\\Delta V$ over tiny boxes; with $f = 1$ it is the volume of $E$, with $f = \\rho$ it is the mass.',
    'On a box, Fubini lets you integrate in any of the six orders. On a general solid, the inner limits are the two bounding surfaces and the outer limits describe the shadow.',
    'Choose the stick direction (and so the innermost variable) for which the solid has a single floor and ceiling.',
    'To change the order, write the solid as inequalities, chain them, and read off new limits: constants outside, then limits that depend only on outer variables.',
    'Center of mass: $\\bar x = \\tfrac{1}{m}\\iiint x\\rho\\,dV$ and similarly for $y$, $z$. Moment of inertia about an axis: $\\iiint d^2\\rho\\,dV$; a box has $I_z = \\tfrac{1}{12}m(a^2 + b^2)$.',
  ],
  reading: [
    {
      title: 'OpenStax Calculus Volume 3 — 5.4 Triple Integrals',
      url: 'https://openstax.org/details/books/calculus-volume-3',
      source: 'openstax',
      note: 'Free textbook; chapter 5 covers triple integrals over general regions with many worked changes of order.',
    },
    {
      title: "Paul's Online Notes — Calculus III",
      url: 'https://tutorial.math.lamar.edu/Classes/CalcIII/CalcIII.aspx',
      source: 'other',
      note: 'The "Multiple Integrals" chapter has a clear section on triple integrals with careful sketches of the shadow regions.',
    },
    {
      title: 'MIT OCW 18.02SC Multivariable Calculus',
      url: 'https://ocw.mit.edu/courses/18-02sc-multivariable-calculus-fall-2010/',
      source: 'other',
      note: 'Unit 4 has lecture videos and recitations on triple integrals, center of mass and moments of inertia.',
    },
    {
      title: 'Wikipedia — Moment of inertia',
      url: 'https://en.wikipedia.org/wiki/Moment_of_inertia',
      source: 'wikipedia',
      note: 'Includes the inertia tensor, principal axes and a table of tensors for common solids used in physics engines.',
    },
  ],
};
