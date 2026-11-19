import type { Lesson } from '../../types';

const SVG_PLANE = /*SVG:c3-u01/c3w1-plane*/ `<svg viewBox="0 0 470 270" xmlns="http://www.w3.org/2000/svg">
<polygon points="172.9,136.7 55.1,216.5 267.9,216.5 385.7,136.7" fill="currentColor" fill-opacity="0.14" stroke="none" class="f-blue"/>
<polyline points="172.9,136.7 55.1,216.5 267.9,216.5 385.7,136.7 172.9,136.7" fill="none" stroke="currentColor" stroke-width="1.4" class="s-blue"/>
<line x1="200.0" y1="175.0" x2="200.0" y2="67.0" stroke="currentColor" class="s-red" stroke-width="2.8"/><path d="M200.0,61.0 L203.9,70.2 L196.1,70.2 Z" fill="currentColor" stroke="none" class="f-red"/>
<line x1="200.0" y1="175.0" x2="284.5" y2="189.9" stroke="currentColor" class="s-green" stroke-width="2.4"/><path d="M290.4,191.0 L280.7,193.2 L282.0,185.5 Z" fill="currentColor" stroke="none" class="f-green"/>
<polyline points="200.0,161.7 210.0,163.5 210.0,176.8" fill="none" stroke="currentColor" stroke-width="1.3"/>
<circle cx="200.0" cy="175.0" r="4.5" fill="currentColor" class="f-red"/>
<text x="190.0" y="193.0" font-size="16" text-anchor="end" class="t-red">P₀</text>
<circle cx="290.4" cy="191.0" r="4.5" fill="currentColor" class="f-green"/>
<text x="302.4" y="197.0" font-size="16" text-anchor="start" class="t-green">P</text>
<text x="210.0" y="67.0" font-size="16" text-anchor="start" class="t-red">n = ⟨a, b, c⟩</text>
<text x="249.2" y="205.0" font-size="15" text-anchor="middle" class="t-green">r − r₀</text>
<text x="360.0" y="60.0" font-size="16" text-anchor="middle">n · (r − r₀) = 0</text>
</svg>`;

export const lesson: Lesson = {
  id: 'calc3-lines-planes',
  title: 'Lines and Planes',
  summary: 'Lines as a point plus a direction, planes as a point plus a normal, and the dot and cross products that answer every question about them: intersections, skew lines, angles and distances — and the ray and plane tests inside every renderer.',
  minutes: 19,
  objectives: [
    'Write vector, parametric and symmetric equations of a line in space',
    'Decide whether two lines are parallel, intersecting or skew',
    'Write the equation of a plane from a point and a normal, or from three points',
    'Find where a line meets a plane, the angle between two planes and their line of intersection',
    'Compute the distance from a point to a plane and between skew lines, and use signed distance to classify points',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'A line is a point plus a direction',
      blocks: [
        {
          type: 'p',
          text: 'In the plane a slope pins down a line\'s direction. Space has no single "slope", so use a vector instead. A line is determined by one point $P_0$ on it (position vector $\\vec{r}_0$) and a nonzero [[calc3-direction-vector|direction vector]] $\\vec{v} = \\langle a, b, c \\rangle$. Every point on the line is reached by starting at $P_0$ and moving some multiple $t$ of $\\vec{v}$.',
        },
        {
          type: 'theorem',
          name: 'Equations of a line through $(x_0, y_0, z_0)$ with direction $\\langle a, b, c \\rangle$',
          tex: '\\vec{r}(t) = \\vec{r}_0 + t\\vec{v} \\qquad \\begin{cases} x = x_0 + at \\\\ y = y_0 + bt \\\\ z = z_0 + ct \\end{cases} \\qquad \\frac{x - x_0}{a} = \\frac{y - y_0}{b} = \\frac{z - z_0}{c}',
          text: 'Vector form, [[parametric-equations|parametric equations]] (one per coordinate, $t \\in \\mathbb{R}$), and [[calc3-symmetric-equations|symmetric equations]] (solve each for $t$; only when $a, b, c \\ne 0$).',
        },
        {
          type: 'derivation',
          title: 'The line through $P(1, -2, 4)$ and $Q(3, 1, -1)$, and where it crosses the $xy$-plane',
          steps: [
            { tex: '\\vec{v} = \\overrightarrow{PQ} = \\langle 2, 3, -5 \\rangle', why: 'Two points give a direction: head minus tail.' },
            { tex: 'x = 1 + 2t, \\quad y = -2 + 3t, \\quad z = 4 - 5t', why: 'Start at $P$ (at $t = 0$) and move by $t\\vec{v}$. At $t = 1$ you are at $Q$.' },
            { tex: '\\frac{x - 1}{2} = \\frac{y + 2}{3} = \\frac{z - 4}{-5}', why: 'Symmetric form: solve each parametric equation for $t$.' },
            { tex: 'z = 0 \\iff 4 - 5t = 0 \\iff t = \\tfrac{4}{5}', why: 'The $xy$-plane is $z = 0$. Find the parameter value there.' },
            { tex: '\\left(1 + \\tfrac{8}{5},\\ -2 + \\tfrac{12}{5},\\ 0\\right) = \\left(\\tfrac{13}{5}, \\tfrac{2}{5}, 0\\right)', why: 'Substitute $t = \\frac{4}{5}$ back into $x$ and $y$.' },
          ],
          result: 'The line pierces the $xy$-plane at $\\left(\\frac{13}{5}, \\frac{2}{5}, 0\\right)$.',
        },
        {
          type: 'plot3d',
          x: [-2, 6],
          y: [-5, 5],
          z: [-6, 9],
          surfaces: [{ expr: '0', color: 'gray', opacity: 0.25 }],
          curves: [{ x: '1 + 2t', y: '-2 + 3t', z: '4 - 5t', t: [-1, 2], color: 'blue', label: '$\\vec{r}(t) = \\langle 1, -2, 4 \\rangle + t\\langle 2, 3, -5 \\rangle$' }],
          vectors: [{ from: [1, -2, 4], to: [3, 1, -1], label: 'v', color: 'red' }],
          points: [
            { x: 1, y: -2, z: 4, label: 'P (t = 0)', color: 'gray' },
            { x: '1 + 2s', y: '-2 + 3s', z: '4 - 5s', label: 'r(t)', color: 'purple' },
            { x: 2.6, y: 0.4, z: 0, label: 'z = 0', color: 'green' },
          ],
          sliders: [{ name: 's', min: -1, max: 2, step: 0.05, value: 0.4, label: 'parameter $t$', play: true }],
          readouts: [{ label: '$z = 4 - 5t =$', expr: '4 - 5s' }],
          view: { azimuth: 35, elevation: 18 },
          caption: 'Press ▶: the purple point moves along the line at constant velocity $\\vec{v}$. It reaches $Q$ at $t = 1$, and it crosses the gray $xy$-plane at $t = 0.8$, where the readout hits $0$.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Rays are half-lines',
          text: 'A ray tracer, a hitscan weapon and a line-of-sight check all start with $\\vec{p}(t) = \\vec{o} + t\\vec{d}$ for $t \\ge 0$: origin $\\vec{o}$ (the muzzle or camera), direction $\\vec{d}$. If $\\vec{d}$ is a unit vector, $t$ is the distance travelled, which is why engines normalize ray directions. Every "what did I hit?" query solves for the smallest positive $t$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'numeric',
      prompt: 'The line $x = 2 + t$, $y = 4 - 2t$, $z = -1 + 3t$ crosses the $xz$-plane at one point. What is that point\'s $z$-coordinate?',
      hint: 'The $xz$-plane is $y = 0$. Solve for $t$ first.',
      label: '$z =$',
      answer: '5',
      explanation: 'On the $xz$-plane $y = 0$, so $4 - 2t = 0$ and $t = 2$. Then $z = -1 + 3(2) = 5$ (and $x = 4$): the crossing point is $(4, 0, 5)$. The pattern is always the same: turn the condition on the point into an equation for $t$, then substitute back.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Parallel, intersecting or skew',
      blocks: [
        {
          type: 'p',
          text: 'Two lines in the plane either cross or are parallel. Space adds a third possibility. Picture a road on a bridge and a road passing underneath at an angle: they are not parallel, yet they never meet. Such lines are called [[calc3-skew-lines|skew]].',
        },
        {
          type: 'steps',
          items: [
            { title: 'Compare directions', text: 'If $\\vec{v}_1$ is a scalar multiple of $\\vec{v}_2$, the lines are parallel (or the same line, if one contains a point of the other).' },
            { title: 'Otherwise, try to intersect', text: 'Use **different** parameters, $t$ for one line and $s$ for the other, and set $x$, $y$, $z$ equal: three equations, two unknowns.' },
            { title: 'Solve two, check the third', text: 'Solve two of the equations for $t$ and $s$. If they also satisfy the third, the lines meet; if not, they are skew.' },
          ],
        },
        {
          type: 'derivation',
          title: 'Are $L_1: \\langle 1 + t, -2 + 3t, 4 - t \\rangle$ and $L_2: \\langle 2s, 3 + s, -3 + 4s \\rangle$ skew?',
          steps: [
            { tex: '\\vec{v}_1 = \\langle 1, 3, -1 \\rangle, \\quad \\vec{v}_2 = \\langle 2, 1, 4 \\rangle', why: 'Not multiples of each other (the first components would need a factor $2$, the second a factor $\\frac{1}{3}$), so not parallel.' },
            { tex: '1 + t = 2s, \\qquad -2 + 3t = 3 + s', why: 'Match the $x$- and $y$-coordinates, with separate parameters.' },
            { tex: 't = 2s - 1 \\implies -2 + 6s - 3 = 3 + s \\implies s = \\tfrac{8}{5},\\ t = \\tfrac{11}{5}', why: 'Substitute the first equation into the second and solve.' },
            { tex: 'z_1 = 4 - \\tfrac{11}{5} = \\tfrac{9}{5}, \\qquad z_2 = -3 + \\tfrac{32}{5} = \\tfrac{17}{5}', why: 'Check the third coordinate with these parameter values.' },
            { tex: '\\tfrac{9}{5} \\ne \\tfrac{17}{5}', why: 'The only candidate fails, so no common point exists.' },
          ],
          result: 'The lines are neither parallel nor intersecting: they are skew.',
        },
        {
          type: 'plot3d',
          x: [1.3, 4.3],
          y: [2.5, 6],
          z: [0.5, 3.5],
          equal: true,
          curves: [
            { x: '1 + t', y: '-2 + 3t', z: '4 - t', t: [-1, 3], color: 'blue', label: '$L_1$' },
            { x: '2t', y: '3 + t', z: '-3 + 4t', t: [-0.5, 2.5], color: 'red', label: '$L_2$' },
            { x: '3.0261 - 0.4522t', y: '4.0783 + 0.2087t', z: '1.9739 + 0.1739t', t: [0, 1], color: 'green', label: 'shortest connector' },
          ],
          points: [
            { x: 3.0261, y: 4.0783, z: 1.9739, color: 'blue' },
            { x: 2.5739, y: 4.2870, z: 2.1478, color: 'red' },
          ],
          view: { azimuth: 60, elevation: 15 },
          caption: 'A close-up of the region where the two lines pass nearest each other. Turn the box: from most angles the lines seem to cross, but they never touch. The short green segment joins their closest points; it is perpendicular to both lines, so it points along $\\vec{v}_1 \\times \\vec{v}_2$. Its length, about $0.53$, is computed in the last card.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'mcq',
      prompt: 'Classify the lines $L_1: \\langle 1 + t,\\ t,\\ 2 - t \\rangle$ and $L_2: \\langle 2 + s,\\ 3 - s,\\ -2 + 2s \\rangle$.',
      options: [
        { text: 'Parallel', why: 'The directions $\\langle 1, 1, -1 \\rangle$ and $\\langle 1, -1, 2 \\rangle$ are not scalar multiples.' },
        { text: 'Skew', why: 'Solving the $x$- and $y$-equations gives $t = 2$, $s = 1$, and those values satisfy the $z$-equation too, so the lines do meet.' },
        { text: 'They intersect at $(3, 2, 0)$', correct: true, why: '$t = 2$ on $L_1$ and $s = 1$ on $L_2$ both give $(3, 2, 0)$.' },
        { text: 'They are the same line', why: 'The same line would need parallel direction vectors.' },
      ],
      explanation: 'Directions $\\langle 1, 1, -1 \\rangle$ and $\\langle 1, -1, 2 \\rangle$ are not parallel. Set $1 + t = 2 + s$ and $t = 3 - s$: adding gives $1 + 2t = 5$, so $t = 2$ and $s = 1$. Check $z$: $2 - 2 = 0$ and $-2 + 2(1) = 0$. ✓ Both lines pass through $(3, 2, 0)$.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'truefalse',
      prompt: 'If two lines in space are not parallel, they must intersect.',
      answer: false,
      explanation: 'That is true in the plane but false in space: non-parallel lines can be skew, like the lines $\\langle 1 + t, -2 + 3t, 4 - t \\rangle$ and $\\langle 2s, 3 + s, -3 + 4s \\rangle$ from the card. Skew lines do not lie in any common plane. (Two **planes** in space that are not parallel, on the other hand, always meet in a line.)',
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'concept',
      title: 'A plane is a point plus a normal',
      blocks: [
        {
          type: 'p',
          text: 'A plane in space contains infinitely many directions, so a direction vector cannot describe it. What a plane has exactly one of (up to length and sign) is a direction **perpendicular** to it: a [[calc3-normal-vector|normal vector]] $\\vec{n} = \\langle a, b, c \\rangle$. A point $P$ lies in the plane through $P_0$ exactly when the arrow from $P_0$ to $P$ is perpendicular to $\\vec{n}$.',
        },
        {
          type: 'figure',
          svg: SVG_PLANE,
          alt: 'A tilted parallelogram representing a plane, with point P0 and normal vector n sticking straight out of it. A second point P in the plane is joined to P0 by the vector r minus r0, which meets n at a right angle.',
          caption: 'Every vector $\\vec{r} - \\vec{r}_0$ lying in the plane is [[orthogonal]] to $\\vec{n}$, so their dot product is $0$.',
          maxWidth: 470,
        },
        {
          type: 'theorem',
          name: 'Equation of a plane through $P_0(x_0, y_0, z_0)$ with normal $\\langle a, b, c \\rangle$',
          tex: '\\vec{n} \\cdot (\\vec{r} - \\vec{r}_0) = 0 \\iff a(x - x_0) + b(y - y_0) + c(z - z_0) = 0 \\iff ax + by + cz = d',
          text: 'with $d = ax_0 + by_0 + cz_0$. Read backwards: the coefficients of $x$, $y$, $z$ in any linear equation $ax + by + cz = d$ **are** a normal vector.',
        },
        {
          type: 'derivation',
          title: 'The plane through $(2, -1, 3)$ with normal $\\langle 1, 4, -2 \\rangle$',
          steps: [
            { tex: '1(x - 2) + 4(y + 1) - 2(z - 3) = 0', why: 'Point–normal form; note $y - (-1) = y + 1$.' },
            { tex: 'x - 2 + 4y + 4 - 2z + 6 = 0', why: 'Distribute.' },
            { tex: 'x + 4y - 2z = -8', why: 'Collect constants: $-2 + 4 + 6 = 8$ moves to the right as $-8$. Check with the point: $2 - 4 - 6 = -8$. ✓' },
          ],
          result: 'The plane is $x + 4y - 2z = -8$.',
        },
        {
          type: 'plot3d',
          x: [-2.5, 2.5],
          y: [-2.5, 2.5],
          z: [-2.5, 2.5],
          equal: true,
          parametricSurfaces: [
            { x: '-u*sin(b) - v*cos(a)*cos(b)', y: 'u*cos(b) - v*cos(a)*sin(b)', z: 'v*sin(a)', u: [-1.7, 1.7], v: [-1.7, 1.7], color: 'blue', opacity: 0.55 },
          ],
          vectors: [
            { from: [0, 0, 0], to: ['2sin(a)cos(b)', '2sin(a)sin(b)', '2cos(a)'], label: 'n', color: 'red' },
            { from: [0, 0, 0], to: ['-1.2sin(b) - 0.8cos(a)cos(b)', '1.2cos(b) - 0.8cos(a)sin(b)', '0.8sin(a)'], label: 'r − r0', color: 'green' },
          ],
          sliders: [
            { name: 'a', min: 0, max: 1.5, step: 0.05, value: 0.6, label: 'tilt of $\\vec{n}$ from the $z$-axis' },
            { name: 'b', min: 0, max: 6.28, step: 0.05, value: 0.8, label: 'heading of $\\vec{n}$' },
          ],
          readouts: [
            { label: '$a =$', expr: 'sin(a)cos(b)', digits: 3 },
            { label: '$b =$', expr: 'sin(a)sin(b)', digits: 3 },
            { label: '$c =$', expr: 'cos(a)', digits: 3 },
          ],
          resolution: 10,
          view: { azimuth: 30, elevation: 20 },
          caption: 'The plane $ax + by + cz = 0$ through the origin, with unit normal $\\langle a, b, c \\rangle$ (shown doubled). Steer the normal and the plane follows rigidly: one normal direction, one plane through a given point. The green vector stays in the plane, at right angles to $\\vec{n}$.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Parallel planes have parallel normals',
          text: 'The planes $2x - y + 3z = 1$ and $-4x + 2y - 6z = 5$ are parallel because $\\langle -4, 2, -6 \\rangle = -2\\langle 2, -1, 3 \\rangle$. They are different planes because doubling the first equation gives $-4x + 2y - 6z = -2$, not $5$. Do not confuse the normal with a direction **in** the plane — the normal sticks out of it.',
        },
      ],
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'expr',
      prompt: 'The plane through $(1, 3, 2)$ with normal vector $\\langle 2, -1, 1 \\rangle$ is the graph of a function $z = f(x, y)$. Find $f$.',
      hint: 'Start from $2(x - 1) - (y - 3) + (z - 2) = 0$ and solve for $z$.',
      label: '$z =$',
      answer: '-2x + y + 1',
      variables: ['x', 'y'],
      answerTex: 'z = -2x + y + 1',
      explanation: 'Point–normal form: $2(x - 1) - (y - 3) + (z - 2) = 0$. Then $z = 2 - 2(x - 1) + (y - 3) = 2 - 2x + 2 + y - 3 = -2x + y + 1$. Check: at $(x, y) = (1, 3)$, $z = -2 + 3 + 1 = 2$. ✓ Any plane whose normal has $c \\ne 0$ can be solved for $z$ like this; you will meet these "planes as graphs" again as tangent planes in Unit 5.',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'concept',
      title: 'A plane through three points, and where a line hits it',
      blocks: [
        {
          type: 'p',
          text: 'Three points $P$, $Q$, $R$ that are not on one line determine a plane. You already have a point; for the normal you need a vector perpendicular to the plane — and the cross product of two vectors **in** the plane delivers exactly that: $\\vec{n} = \\overrightarrow{PQ} \\times \\overrightarrow{PR}$.',
        },
        {
          type: 'derivation',
          title: 'The plane through $P(1, 0, 0)$, $Q(0, 2, 0)$, $R(0, 0, 3)$',
          steps: [
            { tex: '\\overrightarrow{PQ} = \\langle -1, 2, 0 \\rangle, \\quad \\overrightarrow{PR} = \\langle -1, 0, 3 \\rangle', why: 'Two vectors lying in the plane.' },
            { tex: '\\vec{n} = \\overrightarrow{PQ} \\times \\overrightarrow{PR} = \\langle 6, 3, 2 \\rangle', why: 'The cross product you computed for the triangle\'s area in the last lesson.' },
            { tex: '6(x - 1) + 3(y - 0) + 2(z - 0) = 0', why: 'Point–normal form with $P$.' },
            { tex: '6x + 3y + 2z = 6', why: 'Simplify. Check $Q$: $0 + 6 + 0 = 6$ ✓; $R$: $0 + 0 + 6 = 6$ ✓.' },
          ],
          result: '$6x + 3y + 2z = 6$, which you can also write in **intercept form** $\\frac{x}{1} + \\frac{y}{2} + \\frac{z}{3} = 1$.',
        },
        {
          type: 'plot3d',
          x: [-1.5, 2],
          y: [-1, 3],
          z: [-1, 3.5],
          equal: true,
          parametricSurfaces: [
            { x: '1 - u', y: '2u - 2u*v', z: '3u*v', u: [0, 1], v: [0, 1], color: 'orange', opacity: 0.85, label: 'triangle $PQR$' },
            { x: '1 - u - v', y: '2u', z: '3v', u: [-0.25, 1.15], v: [-0.15, 1.05], color: 'blue', opacity: 0.25, label: 'plane $6x + 3y + 2z = 6$' },
          ],
          vectors: [{ from: ['1/3', '2/3', 1], to: ['1/3 + 1.2*6/7', '2/3 + 1.2*3/7', '1 + 1.2*2/7'], label: 'n', color: 'red' }],
          points: [
            { x: 1, y: 0, z: 0, label: 'P', color: 'gray' },
            { x: 0, y: 2, z: 0, label: 'Q', color: 'gray' },
            { x: 0, y: 0, z: 3, label: 'R', color: 'gray' },
          ],
          resolution: 12,
          view: { azimuth: 30, elevation: 20 },
          caption: 'The plane cuts the axes at $1$, $2$ and $3$. The normal $\\langle 6, 3, 2 \\rangle$ (drawn shortened, from the centroid) leans most toward $x$, the axis the plane crosses closest to the origin.',
        },
        {
          type: 'heading',
          text: 'Where does a line meet a plane?',
        },
        {
          type: 'p',
          text: 'Substitute the line\'s parametric equations into the plane\'s equation. That leaves one linear equation in $t$: one solution means one crossing point, no solution means the line is parallel to the plane, and "$0 = 0$" means the line lies in the plane.',
        },
        {
          type: 'derivation',
          title: 'The line $x = 2 + 3t,\\ y = -4t,\\ z = 5 + t$ and the plane $4x + 5y - 2z = 18$',
          steps: [
            { tex: '4(2 + 3t) + 5(-4t) - 2(5 + t) = 18', why: 'A point of the line lies in the plane exactly when its coordinates satisfy the plane\'s equation.' },
            { tex: '8 + 12t - 20t - 10 - 2t = 18 \\implies -10t = 20 \\implies t = -2', why: 'One linear equation in $t$.' },
            { tex: '(2 - 6,\\ 8,\\ 5 - 2) = (-4, 8, 3)', why: 'Substitute $t = -2$. Check: $-16 + 40 - 6 = 18$. ✓' },
          ],
          result: 'They meet at $(-4, 8, 3)$. Note $t < 0$: if this were a **ray** starting at $t = 0$ and pointing along $\\langle 3, -4, 1 \\rangle$, it would miss — the plane is behind it.',
        },
      ],
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'numeric',
      prompt: 'The line $x = 1 + t$, $y = 2t$, $z = 3 - t$ meets the plane $x + y + z = 10$ at one point. Find that point\'s $y$-coordinate.',
      hint: 'Substitute: $(1 + t) + 2t + (3 - t) = 10$.',
      label: '$y =$',
      answer: '6',
      explanation: '$(1 + t) + 2t + (3 - t) = 4 + 2t = 10$, so $t = 3$ and the point is $(4, 6, 0)$. Its $y$-coordinate is $6$. Check: $4 + 6 + 0 = 10$. ✓',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'order',
      prompt: 'Put the steps for finding the plane through three non-collinear points $P$, $Q$, $R$ in order.',
      lines: [
        'Form two vectors in the plane, $\\overrightarrow{PQ}$ and $\\overrightarrow{PR}$',
        'Compute the normal $\\vec{n} = \\overrightarrow{PQ} \\times \\overrightarrow{PR}$',
        'Write $a(x - x_0) + b(y - y_0) + c(z - z_0) = 0$ with $\\vec{n} = \\langle a, b, c \\rangle$ and $P = (x_0, y_0, z_0)$',
        'Simplify to $ax + by + cz = d$ and check that $Q$ and $R$ satisfy it',
      ],
      distractors: ['Compute $\\overrightarrow{PQ} \\cdot \\overrightarrow{PR}$ to get the normal'],
      explanation: 'The cross product needs two in-plane vectors, the point–normal form needs the normal, and the check comes last. The distractor uses the dot product, which produces a number, not a vector — it cannot be a normal.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'error',
      prompt: 'A student finds the plane through $A(1, 0, 2)$, $B(3, 1, 0)$ and $C(0, 2, 1)$. Tap the first wrong line.',
      lines: [
        '$\\overrightarrow{AB} = \\langle 2, 1, -2 \\rangle$, $\\overrightarrow{AC} = \\langle -1, 2, -1 \\rangle$',
        '$\\vec{n} = \\langle (1)(-1) - (-2)(2),\\ (2)(-1) - (-2)(-1),\\ (2)(2) - (1)(-1) \\rangle = \\langle 3, -4, 5 \\rangle$',
        '$3(x - 1) - 4(y - 0) + 5(z - 2) = 0$',
        '$3x - 4y + 5z = 13$',
      ],
      errorLines: [2],
      explanation: 'The middle component of a cross product is $a_3b_1 - a_1b_3 = (-2)(-1) - (2)(-1) = 2 + 2 = 4$, but line 2 computed $a_1b_3 - a_3b_1 = -4$: the checkerboard minus sign was dropped. The normal is $\\langle 3, 4, 5 \\rangle$ and the plane is $3x + 4y + 5z = 13$. The student\'s plane fails the check: at $B$, $9 - 4 + 0 = 5 \\ne 13$. Always test the other two points.',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'concept',
      title: 'Angles between planes and their line of intersection',
      blocks: [
        {
          type: 'p',
          text: 'Two non-parallel planes meet in a line, and they cross at an angle. Both facts come straight from the normals. Tilt one plane and its normal tilts by the same amount, so the angle between the planes is the angle between their normals (taken acute). And the line of intersection lies in both planes, so it is perpendicular to **both** normals — exactly what the cross product produces.',
        },
        {
          type: 'theorem',
          name: 'Two planes with normals $\\vec{n}_1$, $\\vec{n}_2$',
          tex: '\\cos\\theta = \\frac{|\\vec{n}_1 \\cdot \\vec{n}_2|}{|\\vec{n}_1|\\,|\\vec{n}_2|}, \\qquad \\text{direction of the line of intersection: } \\vec{n}_1 \\times \\vec{n}_2',
          text: 'The absolute value picks the acute angle; reversing a normal describes the same plane. The planes are perpendicular when $\\vec{n}_1 \\cdot \\vec{n}_2 = 0$ and parallel when $\\vec{n}_1 \\times \\vec{n}_2 = \\vec{0}$.',
        },
        {
          type: 'derivation',
          title: 'The planes $x + y + z = 1$ and $x - 2y + 3z = d$, with $d = 1$',
          steps: [
            { tex: '\\vec{n}_1 \\cdot \\vec{n}_2 = 1 - 2 + 3 = 2, \\quad |\\vec{n}_1| = \\sqrt{3}, \\quad |\\vec{n}_2| = \\sqrt{14}', why: 'Everything about the angle is in the normals $\\langle 1, 1, 1 \\rangle$ and $\\langle 1, -2, 3 \\rangle$.' },
            { tex: '\\cos\\theta = \\frac{2}{\\sqrt{42}} \\implies \\theta \\approx 72.0^\\circ', why: '$\\arccos(0.3086) \\approx 1.257$ rad.' },
            { tex: '\\vec{n}_1 \\times \\vec{n}_2 = \\langle (1)(3) - (1)(-2),\\ (1)(1) - (1)(3),\\ (1)(-2) - (1)(1) \\rangle = \\langle 5, -2, -3 \\rangle', why: 'Direction of the line of intersection.' },
            { tex: 'z = 0:\\quad x + y = 1,\\ x - 2y = 1 \\implies (1, 0, 0)', why: 'A point on the line: pick a convenient value for one variable (here $z = 0$) and solve the two plane equations.' },
            { tex: '\\vec{r}(t) = \\langle 1 + 5t,\\ -2t,\\ -3t \\rangle', why: 'Point plus direction.' },
          ],
          result: 'The planes meet at about $72.0^\\circ$ along the line $\\langle 1, 0, 0 \\rangle + t\\langle 5, -2, -3 \\rangle$.',
        },
        {
          type: 'plot3d',
          x: [-2, 2],
          y: [-2, 2],
          z: [-3, 5],
          surfaces: [
            { expr: '1 - x - y', color: 'blue', opacity: 0.4, label: '$x + y + z = 1$' },
            { expr: '(d - x + 2y)/3', color: 'orange', opacity: 0.6, label: '$x - 2y + 3z = d$' },
          ],
          curves: [{ x: '(d + 2)/3 + 5t', y: '(1 - d)/3 - 2t', z: '-3t', t: [-1, 1], color: 'red', label: 'line of intersection' }],
          sliders: [{ name: 'd', min: -3, max: 4, step: 0.25, value: 1, label: '$d$' }],
          readouts: [{ label: 'angle between the planes (degrees) $\\approx$', expr: 'arccos(2/sqrt(42))*180/pi', digits: 2 }],
          resolution: 16,
          view: { azimuth: 110, elevation: 12 },
          caption: 'Changing $d$ slides the orange plane parallel to itself. The red line of intersection moves with it but keeps its direction $\\langle 5, -2, -3 \\rangle$, and the angle never changes: both depend only on the normals.',
        },
      ],
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'mcq',
      prompt: 'Which vector is a direction vector for the line of intersection of the planes $2x - y + z = 1$ and $x + y + 2z = 3$?',
      options: [
        { text: '$\\langle 1, 1, -1 \\rangle$', correct: true, why: '$\\vec{n}_1 \\times \\vec{n}_2 = \\langle -3, -3, 3 \\rangle = -3\\langle 1, 1, -1 \\rangle$, and any nonzero multiple is a direction vector.' },
        { text: '$\\langle 3, 0, 3 \\rangle$', why: 'That is $\\vec{n}_1 + \\vec{n}_2$. A direction in both planes must be perpendicular to both normals; $\\langle 3, 0, 3 \\rangle \\cdot \\langle 2, -1, 1 \\rangle = 9 \\ne 0$.' },
        { text: '$\\langle 1, 1, 2 \\rangle$', why: 'That is the second plane\'s normal: it sticks out of that plane, so it cannot lie along a line inside it.' },
        { text: '$\\langle 1, -1, 1 \\rangle$', why: 'Check perpendicularity to $\\vec{n}_1$: $2 + 1 + 1 = 4 \\ne 0$. Probably a sign slip in the cross product.' },
      ],
      explanation: 'With $\\vec{n}_1 = \\langle 2, -1, 1 \\rangle$ and $\\vec{n}_2 = \\langle 1, 1, 2 \\rangle$: $\\vec{n}_1 \\times \\vec{n}_2 = \\langle (-1)(2) - (1)(1),\\ (1)(1) - (2)(2),\\ (2)(1) - (-1)(1) \\rangle = \\langle -3, -3, 3 \\rangle$. Check against both normals: $\\langle 1, 1, -1 \\rangle \\cdot \\langle 2, -1, 1 \\rangle = 0$ and $\\langle 1, 1, -1 \\rangle \\cdot \\langle 1, 1, 2 \\rangle = 0$. (The planes meet at $60^\\circ$, since $\\cos\\theta = \\frac{3}{\\sqrt{6}\\sqrt{6}} = \\frac{1}{2}$.)',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'concept',
      title: 'Distances: project onto the normal',
      blocks: [
        {
          type: 'p',
          text: 'The shortest path from a point $P_1$ to a plane is perpendicular to the plane, that is, along $\\vec{n}$. So take any point $P_0$ in the plane and measure how much of $\\overrightarrow{P_0P_1}$ points along $\\vec{n}$: that is the scalar projection, and the distance is its absolute value.',
        },
        {
          type: 'theorem',
          name: 'Distance from $P_1(x_1, y_1, z_1)$ to the plane $ax + by + cz = d$',
          tex: 'D = \\frac{|\\overrightarrow{P_0P_1} \\cdot \\vec{n}|}{|\\vec{n}|} = \\frac{|ax_1 + by_1 + cz_1 - d|}{\\sqrt{a^2 + b^2 + c^2}}',
          text: 'Plug the point into the plane\'s equation, take the absolute value of the mismatch, and divide by the length of the normal.',
        },
        {
          type: 'derivation',
          title: 'Why the formula only needs the plane\'s equation',
          steps: [
            { tex: '\\overrightarrow{P_0P_1} \\cdot \\vec{n} = a(x_1 - x_0) + b(y_1 - y_0) + c(z_1 - z_0)', why: 'Dot product with $\\vec{n} = \\langle a, b, c \\rangle$.' },
            { tex: '= ax_1 + by_1 + cz_1 - (ax_0 + by_0 + cz_0)', why: 'Regroup.' },
            { tex: '= ax_1 + by_1 + cz_1 - d', why: '$P_0$ is in the plane, so $ax_0 + by_0 + cz_0 = d$. Which $P_0$ you picked no longer matters.' },
          ],
          result: 'For $(1, -2, 4)$ and $3x + 2y + 6z = 5$: $D = \\frac{|3 - 4 + 24 - 5|}{\\sqrt{9 + 4 + 36}} = \\frac{18}{7} \\approx 2.57$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the perpendicular is the shortest path',
          text: 'Let $F$ be the foot of the perpendicular from $P_1$, and let $X$ be any other point of the plane. The triangle $P_1FX$ has a right angle at $F$, so by Pythagoras $|P_1X|^2 = |P_1F|^2 + |FX|^2 > |P_1F|^2$. Every other path to the plane is a hypotenuse, hence longer. The same argument, with the common perpendicular, explains the skew-line formula below.',
        },
        {
          type: 'plot3d',
          x: [-2.5, 4.5],
          y: [-5.5, 1.5],
          z: [-1.5, 5.5],
          equal: true,
          parametricSurfaces: [
            { x: '1 + u*2/sqrt(13) + v*18/(7sqrt(13))', y: '-2 - u*3/sqrt(13) + v*12/(7sqrt(13))', z: '1 - v*13/(7sqrt(13))', u: [-2.5, 2.5], v: [-2.5, 2.5], color: 'blue', opacity: 0.5, label: '$3x + 2y + 6z = 5$' },
          ],
          vectors: [{ from: ['1 - 3(6k - 6)/49', '-2 - 2(6k - 6)/49', 'k - 6(6k - 6)/49'], to: [1, -2, 'k'], label: 'D', color: 'red' }],
          points: [{ x: 1, y: -2, z: 'k', label: 'P₁', color: 'red' }],
          sliders: [{ name: 'k', min: -1, max: 5, step: 0.1, value: 4, label: 'height of $P_1 = (1, -2, k)$' }],
          readouts: [
            { label: 'signed distance $\\frac{3 - 4 + 6k - 5}{7} =$', expr: '(6k - 6)/7' },
            { label: '$D =$', expr: 'abs(6k - 6)/7' },
          ],
          resolution: 10,
          view: { azimuth: 20, elevation: 15 },
          caption: 'The red arrow drops perpendicularly from $P_1 = (1, -2, k)$ to the plane. At $k = 4$ the distance is $\\frac{18}{7}$. Lower the point through the plane ($k = 1$) and the **signed** distance changes sign: it tells you which side you are on.',
        },
        {
          type: 'list',
          items: [
            '**Two parallel planes:** pick any point on one and use the formula with the other.',
            '**Two skew lines:** the shortest connector is perpendicular to both, i.e. along $\\vec{n} = \\vec{v}_1 \\times \\vec{v}_2$. Project the vector between any two of their points onto it: $D = \\dfrac{|\\overrightarrow{P_1P_2} \\cdot (\\vec{v}_1 \\times \\vec{v}_2)|}{|\\vec{v}_1 \\times \\vec{v}_2|}$. For the skew lines earlier, $\\vec{v}_1 \\times \\vec{v}_2 = \\langle 13, -6, -5 \\rangle$, $\\overrightarrow{P_1P_2} = \\langle -1, 5, -7 \\rangle$, and $D = \\frac{8}{\\sqrt{230}} \\approx 0.528$.',
          ],
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Signed distance is everywhere in graphics',
          text: 'Drop the absolute value and $\\hat{n} \\cdot \\vec{p} - d$ (with $|\\hat{n}| = 1$) is the **signed distance** to the plane: positive in front, negative behind. A view frustum is six planes, and an object is culled if its bounding sphere lies entirely behind any one of them (signed distance $< -r$). In raymarching, this is the simplest **signed distance function** (SDF); the plane SDF in Inigo Quilez\'s catalogue is exactly this dot product.',
        },
        {
          type: 'code',
          title: 'plane_tests.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdio>
#include <optional>

struct Vec3 { double x, y, z; };
Vec3 operator+(Vec3 a, Vec3 b) { return {a.x + b.x, a.y + b.y, a.z + b.z}; }
Vec3 operator*(double s, Vec3 v) { return {s * v.x, s * v.y, s * v.z}; }
double dot(Vec3 a, Vec3 b) { return a.x * b.x + a.y * b.y + a.z * b.z; }

struct Plane { Vec3 n; double d; };  // points p with n . p = d

double signedDistance(const Plane& pl, Vec3 p) {
    return (dot(pl.n, p) - pl.d) / std::sqrt(dot(pl.n, pl.n));
}

std::optional<double> rayHit(const Plane& pl, Vec3 o, Vec3 dir) {
    double denom = dot(pl.n, dir);
    if (std::fabs(denom) < 1e-12) return std::nullopt;  // parallel to the plane
    double t = (pl.d - dot(pl.n, o)) / denom;
    if (t < 0) return std::nullopt;                      // plane is behind the ray
    return t;
}

int main() {
    const Plane wall{{3, 2, 6}, 5};
    std::printf("signed distance of (1, -2, 4): %.4f\\n", signedDistance(wall, {1, -2, 4}));
    std::printf("signed distance of (0, 0, 0):  %.4f\\n", signedDistance(wall, {0, 0, 0}));

    const Plane ground{{4, 5, -2}, 18};
    const Vec3 o{2, 0, 5};
    for (Vec3 dir : {Vec3{3, -4, 1}, Vec3{-3, 4, -1}}) {
        if (auto t = rayHit(ground, o, dir)) {
            Vec3 h = o + (*t) * dir;
            std::printf("dir (%g, %g, %g): hit at t = %.4f, point (%.4f, %.4f, %.4f)\\n",
                        dir.x, dir.y, dir.z, *t, h.x, h.y, h.z);
        } else {
            std::printf("dir (%g, %g, %g): no hit\\n", dir.x, dir.y, dir.z);
        }
    }
}`,
          output: `signed distance of (1, -2, 4): 2.5714
signed distance of (0, 0, 0):  -0.7143
dir (3, -4, 1): no hit
dir (-3, 4, -1): hit at t = 2.0000, point (-4.0000, 8.0000, 3.0000)`,
          annotations: [
            { lines: 10, text: 'A plane stored as normal and offset, the form $ax + by + cz = d$.' },
            { lines: '12-14', text: 'Plug the point into the plane equation and divide by $|\\vec{n}|$: the distance formula without the absolute value. $\\frac{18}{7} \\approx 2.5714$ and $-\\frac{5}{7} \\approx -0.7143$: the two points are on opposite sides.' },
            { lines: '16-22', text: 'Substitute $\\vec{o} + t\\vec{d}$ into $\\vec{n} \\cdot \\vec{p} = d$ and solve the one linear equation for $t$. A ray only counts hits with $t \\ge 0$.' },
            { lines: 31, text: 'The line from the card: along $\\langle 3, -4, 1 \\rangle$ the crossing is at $t = -2$, behind the origin of the ray. Reversing the direction finds it at $t = 2$.' },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'numeric',
      prompt: 'Find the distance from the point $(2, 1, -1)$ to the plane $2x - y + 2z = 10$.',
      hint: '$D = \\frac{|ax_1 + by_1 + cz_1 - d|}{\\sqrt{a^2 + b^2 + c^2}}$.',
      label: '$D =$',
      answer: '3',
      explanation: 'Plug in: $2(2) - 1 + 2(-1) - 10 = 4 - 1 - 2 - 10 = -9$. The normal $\\langle 2, -1, 2 \\rangle$ has length $\\sqrt{4 + 1 + 4} = 3$. So $D = \\frac{|-9|}{3} = 3$. The negative sign of $-9$ just says the point is on the side opposite to where $\\vec{n}$ points.',
    },
    // ------------------------------------------------------------------ 16
    {
      kind: 'fill',
      prompt: 'Consider the planes $x + 2y - 2z = 3$ and $2x + 4y - 4z = 18$.',
      template: 'Their normals are scalar multiples, so the planes are ___. Dividing the second equation by $2$ gives $x + 2y - 2z = 9$, and the distance between the planes is ___.',
      blanks: [{ answers: ['parallel'] }, { answers: ['$2$'] }],
      wordBank: ['parallel', 'perpendicular', 'skew', '$2$', '$6$', '$\\frac{2}{3}$'],
      explanation: '$\\langle 2, 4, -4 \\rangle = 2\\langle 1, 2, -2 \\rangle$, so the planes are parallel (and distinct, since $9 \\ne 3$). The point $(3, 0, 0)$ lies on the first plane; its distance to $x + 2y - 2z = 9$ is $\\frac{|3 - 9|}{\\sqrt{1 + 4 + 4}} = \\frac{6}{3} = 2$. Shortcut: for $ax + by + cz = d_1$ and $ax + by + cz = d_2$ with the **same** coefficients, $D = \\frac{|d_1 - d_2|}{|\\vec{n}|}$. Answering $6$ forgets to divide by $|\\vec{n}|$; "skew" describes lines, never planes.',
    },
  ],
  takeaways: [
    'A line is $\\vec{r}(t) = \\vec{r}_0 + t\\vec{v}$: parametric equations $x = x_0 + at$, $y = y_0 + bt$, $z = z_0 + ct$; rays use $t \\ge 0$.',
    'Lines in space are parallel (directions are multiples), intersecting (the system in $t$ and $s$ is consistent) or skew (neither).',
    'A plane is $\\vec{n} \\cdot (\\vec{r} - \\vec{r}_0) = 0$, i.e. $ax + by + cz = d$ with normal $\\langle a, b, c \\rangle$; through three points use $\\vec{n} = \\overrightarrow{PQ} \\times \\overrightarrow{PR}$.',
    'To intersect a line and a plane, substitute the parametric equations into the plane equation and solve for $t$.',
    'Planes meet at the (acute) angle between their normals, along a line with direction $\\vec{n}_1 \\times \\vec{n}_2$.',
    'Distance from a point to a plane is $\\frac{|ax_1 + by_1 + cz_1 - d|}{|\\vec{n}|}$; without the absolute value it is the signed distance used for culling and SDFs. Skew lines: project onto $\\vec{v}_1 \\times \\vec{v}_2$.',
  ],
  reading: [
    {
      title: 'OpenStax Calculus Volume 3 — 2.5 Equations of Lines and Planes in Space',
      url: 'https://openstax.org/details/books/calculus-volume-3',
      source: 'openstax',
      note: 'Covers every computation in this lesson, including the distance between skew lines, with plenty of practice problems.',
    },
    {
      title: "Paul's Online Notes — Calculus III",
      url: 'https://tutorial.math.lamar.edu/Classes/CalcIII/CalcIII.aspx',
      source: 'other',
      note: 'See "Equations of Lines" and "Equations of Planes" for more worked examples of each form.',
    },
    {
      title: 'Inigo Quilez — Distance functions',
      url: 'https://iquilezles.org/articles/distfunctions/',
      source: 'other',
      note: 'The standard catalogue of signed distance functions for raymarching; the plane SDF is the signed distance formula from this lesson.',
    },
    {
      title: 'Wikipedia — Skew lines',
      url: 'https://en.wikipedia.org/wiki/Skew_lines',
      source: 'wikipedia',
      note: 'The distance formula for skew lines and how to find the two nearest points.',
    },
  ],
};
