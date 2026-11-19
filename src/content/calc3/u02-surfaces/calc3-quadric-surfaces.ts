import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'calc3-quadric-surfaces',
  title: 'Cylinders and Quadric Surfaces',
  summary: 'Recognise surfaces from their equations: cylinders with a missing variable, the method of traces, and the six quadric surfaces — ellipsoids, paraboloids, cones and hyperboloids — that every later lesson draws on.',
  minutes: 18,
  objectives: [
    'Recognise a cylinder from a missing variable and describe its rulings',
    'Use traces in planes $x = k$, $y = k$, $z = k$ to identify and sketch a surface',
    'Name the six quadric surfaces from their standard equations and state their traces',
    'Complete the square to put a quadric in standard form and locate its center or vertex',
    'Intersect a ray with a quadric by solving a quadratic in $t$',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Cylinders: one variable missing',
      blocks: [
        {
          type: 'p',
          text: 'In the first lesson of this course you saw that $x^2 + y^2 = 1$ in space is not a circle: $z$ does not appear, so it is free, and the circle is extruded up and down the $z$-axis into a tube. Any surface built this way — a plane curve swept along a fixed direction — is called a [[calc3-cylinder|cylinder]], even when the curve is not a circle. The swept lines are its **rulings**.',
        },
        {
          type: 'definition',
          term: 'Cylinder',
          text: 'If an equation in $x$, $y$, $z$ is missing one variable, its graph is a cylinder whose rulings are parallel to that variable\'s axis, through the curve the equation describes in the other two variables.',
        },
        {
          type: 'plot3d',
          x: [-2, 2],
          y: [-2, 2],
          z: [-0.5, 4],
          surfaces: [{ expr: 'y^2', color: 'teal', opacity: 0.6, label: '$z = y^2$' }],
          curves: [{ x: 'c', y: 't', z: 't^2', t: [-2, 2], color: 'red', label: 'trace $x = c$' }],
          sliders: [{ name: 'c', min: -2, max: 2, step: 0.05, value: -1, label: '$c$', play: true }],
          resolution: 20,
          view: { azimuth: 35, elevation: 20 },
          caption: 'The parabolic cylinder $z = y^2$. The variable $x$ is missing, so every slice $x = c$ is the same parabola $z = y^2$. Press ▶ and watch the red parabola slide along the $x$-axis, sweeping out the surface.',
        },
        {
          type: 'plot3d',
          x: [-1.5, 1.5],
          y: [-1.5, 1.5],
          z: [-2, 2],
          equal: true,
          parametricSurfaces: [{ x: 'cos(u)', y: 'sin(u)', z: 'v', u: [0, '2pi'], v: [-2, 2], color: 'blue', opacity: 0.45, label: '$x^2 + y^2 = 1$' }],
          curves: [{ x: 'cos(t)', y: 'sin(t)', z: 'c', t: [0, '2pi'], color: 'red', label: 'trace $z = c$' }],
          sliders: [{ name: 'c', min: -2, max: 2, step: 0.05, value: 0.5, label: '$c$' }],
          resolution: 24,
          view: { azimuth: 30, elevation: 25 },
          caption: 'The circular cylinder $x^2 + y^2 = 1$: every horizontal slice is the unit circle.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why "cylinder" for a parabola?',
          text: 'The word is about how the surface is built, not about circles. A sheet of paper bent into any curve (a parabola, a wave, an S) and stood on edge is a cylinder in this sense. Its geometry is really two-dimensional, and that is exactly why you can recognise one instantly: one coordinate simply does not matter.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'mcq',
      prompt: 'What surface in $\\mathbb{R}^3$ is described by $x^2 + z^2 = 4$?',
      options: [
        { text: 'A sphere of radius $2$', why: 'A sphere needs all three variables: $x^2 + y^2 + z^2 = 4$.' },
        { text: 'A circular cylinder of radius $2$ whose axis is the $y$-axis', correct: true, why: '$y$ is missing, so the circle $x^2 + z^2 = 4$ in the $xz$-plane is extruded along the $y$-axis.' },
        { text: 'A circular cylinder of radius $2$ whose axis is the $z$-axis', why: 'That would be $x^2 + y^2 = 4$, with $z$ missing. The free variable here is $y$.' },
        { text: 'A circle of radius $2$ in the $xz$-plane', why: 'In $\\mathbb{R}^3$ one equation gives a surface; the circle is only the trace in the plane $y = 0$.' },
      ],
      explanation: 'The missing variable names the axis of the rulings. With $y$ absent, every plane $y = k$ cuts the surface in the same circle $x^2 + z^2 = 4$, so the surface is a tube of radius $2$ around the $y$-axis — a pipe lying on its side.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'The method of traces',
      blocks: [
        {
          type: 'p',
          text: 'How do you picture a surface you have never seen? Slice it. The curve in which a surface meets a plane is called a [[calc3-trace|trace]]. Slicing with planes parallel to the coordinate planes — set $z = k$, or $x = k$, or $y = k$ — turns one equation in three variables into an equation in two, which is a curve you already know: a line, circle, ellipse, parabola or hyperbola. Stack the slices and the surface appears.',
        },
        {
          type: 'derivation',
          title: 'Traces of $z = x^2 + y^2$',
          steps: [
            { tex: 'z = k:\\quad x^2 + y^2 = k', why: 'Horizontal slices. For $k > 0$ a circle of radius $\\sqrt{k}$; for $k = 0$ just the origin; for $k < 0$ nothing.' },
            { tex: 'x = k:\\quad z = y^2 + k^2', why: 'Slices parallel to the $yz$-plane: upward parabolas, lifted by $k^2$.' },
            { tex: 'y = k:\\quad z = x^2 + k^2', why: 'Slices parallel to the $xz$-plane: also upward parabolas.' },
          ],
          result: 'Circles stacked on a parabolic profile: a bowl, the **circular paraboloid**. The circles grow like $\\sqrt{k}$, so the bowl widens quickly near the bottom and slowly higher up.',
        },
        {
          type: 'plot3d',
          x: [-2, 2],
          y: [-2, 2],
          z: [0, 4],
          equal: true,
          parametricSurfaces: [{ x: 'u*cos(v)', y: 'u*sin(v)', z: 'u^2', u: [0, 2], v: [0, '2pi'], color: 'blue', opacity: 0.45 }],
          curves: [
            { x: 'sqrt(k)*cos(t)', y: 'sqrt(k)*sin(t)', z: 'k', t: [0, '2pi'], color: 'red', label: 'trace $z = k$: circle' },
            { x: '0', y: 't', z: 't^2', t: [-2, 2], color: 'green', label: 'trace $x = 0$: parabola' },
            { x: 'sqrt(k)*cos(t)', y: 'sqrt(k)*sin(t)', z: '0', t: [0, '2pi'], color: 'purple', dashed: true, label: 'level curve on the floor' },
          ],
          sliders: [{ name: 'k', min: 0.05, max: 4, step: 0.05, value: 2, label: 'height $k$', play: true }],
          readouts: [{ label: 'radius of the trace $\\sqrt{k} =$', expr: 'sqrt(k)' }],
          resolution: 24,
          view: { azimuth: 30, elevation: 25 },
          caption: 'Slide the cutting height $k$. The red trace is a circle of radius $\\sqrt{k}$; projected to the floor (dashed) it is a **level curve**. In Unit 4 the whole family of level curves becomes a contour map of $f(x, y) = x^2 + y^2$.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Which slices to take',
          text: 'Slice perpendicular to each axis once. If one family of traces is all ellipses and the others are parabolas or hyperbolas, the ellipse direction is "across" the surface and the other variable is its axis. That one observation identifies most quadrics.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'fill',
      prompt: 'Describe the traces of the surface $z = 4x^2 + y^2$.',
      template: 'In the horizontal planes $z = k$ with $k > 0$ the traces are ___. In the vertical planes $x = k$ the traces are ___ that open ___.',
      blanks: [{ answers: ['ellipses'] }, { answers: ['parabolas'] }, { answers: ['upward'] }],
      wordBank: ['ellipses', 'circles', 'parabolas', 'hyperbolas', 'upward', 'downward'],
      explanation: 'Setting $z = k$ gives $4x^2 + y^2 = k$, i.e. $\\frac{x^2}{k/4} + \\frac{y^2}{k} = 1$: ellipses, not circles, since the semi-axes $\\frac{\\sqrt{k}}{2}$ and $\\sqrt{k}$ differ. Setting $x = k$ gives $z = y^2 + 4k^2$: parabolas opening upward (positive $y^2$ coefficient). The surface is an elliptic paraboloid, a bowl squeezed in the $x$-direction.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Quadric surfaces and the ellipsoid',
      blocks: [
        {
          type: 'p',
          text: 'A [[calc3-quadric-surface|quadric surface]] is the graph of a second-degree equation in $x$, $y$, $z$. They are the 3D cousins of the conic sections, and after shifting the center to the origin and lining up the axes there are only six kinds (plus cylinders). The first is the [[calc3-ellipsoid|ellipsoid]].',
        },
        {
          type: 'theorem',
          name: 'Ellipsoid',
          tex: '\\frac{x^2}{a^2} + \\frac{y^2}{b^2} + \\frac{z^2}{c^2} = 1',
          text: 'It crosses the axes at $\\pm a$, $\\pm b$, $\\pm c$. Every trace is an ellipse (or a point, or empty). With $a = b = c$ it is a sphere.',
        },
        {
          type: 'plot3d',
          x: [-3, 3],
          y: [-3, 3],
          z: [-3, 3],
          equal: true,
          parametricSurfaces: [{ x: 'a*cos(u)*sin(v)', y: 'b*sin(u)*sin(v)', z: 'c*cos(v)', u: [0, '2pi'], v: [0, 'pi'], color: 'purple', opacity: 0.7 }],
          curves: [{ x: 'a*sqrt(1 - (k/c)^2)*cos(t)', y: 'b*sqrt(1 - (k/c)^2)*sin(t)', z: 'k', t: [0, '2pi'], color: 'red', label: 'trace $z = k$' }],
          sliders: [
            { name: 'a', min: 0.5, max: 3, step: 0.1, value: 2.5, label: '$a$' },
            { name: 'b', min: 0.5, max: 3, step: 0.1, value: 1.5, label: '$b$' },
            { name: 'c', min: 0.5, max: 3, step: 0.1, value: 1, label: '$c$' },
            { name: 'k', min: -2.9, max: 2.9, step: 0.05, value: 0.5, label: 'trace height $k$' },
          ],
          resolution: 24,
          view: { azimuth: 30, elevation: 20 },
          caption: 'Stretch the sphere with $a$, $b$, $c$. The red trace at height $k$ is an ellipse with semi-axes $a\\sqrt{1 - k^2/c^2}$ and $b\\sqrt{1 - k^2/c^2}$; it shrinks to a point at $k = \\pm c$ and disappears beyond.',
        },
        {
          type: 'derivation',
          title: 'The trace of $\\frac{x^2}{4} + \\frac{y^2}{9} + z^2 = 1$ in the plane $z = k$',
          steps: [
            { tex: '\\frac{x^2}{4} + \\frac{y^2}{9} = 1 - k^2', why: 'Substitute $z = k$.' },
            { tex: '\\frac{x^2}{4(1 - k^2)} + \\frac{y^2}{9(1 - k^2)} = 1 \\quad (|k| < 1)', why: 'Divide by $1 - k^2$ to reach standard ellipse form; this needs $1 - k^2 > 0$.' },
            { tex: '\\text{semi-axes } 2\\sqrt{1 - k^2} \\text{ and } 3\\sqrt{1 - k^2}', why: 'Square roots of the denominators.' },
          ],
          result: 'Ellipses that shrink as $|k|$ grows, a single point at $k = \\pm 1$ and nothing for $|k| > 1$.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'The Earth is an ellipsoid',
          text: 'GPS and military mapping use the WGS 84 reference ellipsoid: equatorial radius $a = b = 6\\,378\\,137$ m and polar radius $c \\approx 6\\,356\\,752$ m. The Earth is flattened by about $21$ km at the poles, which matters for long-range navigation and for satellite orbits.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'numeric',
      prompt: 'The plane $z = \\frac{1}{2}$ cuts the ellipsoid $\\frac{x^2}{4} + \\frac{y^2}{9} + z^2 = 1$ in an ellipse. What is the semi-axis of that ellipse in the $x$-direction? An exact answer or a decimal to at least 2 places is fine.',
      hint: 'Use the derivation with $k = \\frac{1}{2}$: the $x$-semi-axis is $2\\sqrt{1 - k^2}$.',
      answer: 'sqrt(3)',
      answerTex: '\\sqrt{3} \\approx 1.732',
      explanation: 'With $z = \\frac{1}{2}$: $\\frac{x^2}{4} + \\frac{y^2}{9} = \\frac{3}{4}$, so $\\frac{x^2}{3} + \\frac{y^2}{27/4} = 1$. The $x$-semi-axis is $\\sqrt{3} \\approx 1.732$ (and the $y$-semi-axis is $\\frac{3\\sqrt{3}}{2}$). Check with the formula $2\\sqrt{1 - \\frac{1}{4}} = 2 \\cdot \\frac{\\sqrt{3}}{2} = \\sqrt{3}$.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'Paraboloids: bowls and saddles',
      blocks: [
        {
          type: 'p',
          text: 'When one variable appears only to the **first** power, you get a paraboloid. Its traces along that variable\'s axis are ellipses or hyperbolas, and in the other directions they are parabolas.',
        },
        {
          type: 'table',
          headers: ['Surface', 'Standard equation', 'Traces'],
          rows: [
            ['[[calc3-elliptic-paraboloid|Elliptic paraboloid]]', '$\\dfrac{z}{c} = \\dfrac{x^2}{a^2} + \\dfrac{y^2}{b^2}$', 'horizontal: ellipses; vertical: parabolas opening the same way'],
            ['[[calc3-hyperbolic-paraboloid|Hyperbolic paraboloid]]', '$\\dfrac{z}{c} = \\dfrac{x^2}{a^2} - \\dfrac{y^2}{b^2}$', 'horizontal: hyperbolas; vertical: parabolas opening in **opposite** ways'],
          ],
        },
        {
          type: 'plot3d',
          x: [-1.5, 1.5],
          y: [-1.5, 1.5],
          z: [-2.4, 4.6],
          surfaces: [{ expr: 'x^2 + s*y^2', color: 'teal', opacity: 0.7 }],
          curves: [
            { x: 't', y: '0', z: 't^2', t: [-1.5, 1.5], color: 'red', label: 'trace $y = 0$: $z = x^2$' },
            { x: '0', y: 't', z: 's*t^2', t: [-1.5, 1.5], color: 'blue', label: 'trace $x = 0$: $z = sy^2$' },
          ],
          contours: [-1.5, -0.75, 0.75, 1.5, 2.25],
          sliders: [{ name: 's', min: -1, max: 1, step: 0.05, value: 1, label: '$s$ in $z = x^2 + sy^2$', play: true }],
          resolution: 26,
          view: { azimuth: 35, elevation: 22 },
          caption: 'Morph $z = x^2 + sy^2$. At $s = 1$ it is a circular paraboloid (circular level curves on the floor). At $s = 0$ it flattens into the parabolic cylinder $z = x^2$. For $s < 0$ the blue parabola flips downward and you get a **saddle**: the level curves become hyperbolas.',
        },
        {
          type: 'p',
          text: 'The saddle $z = x^2 - y^2$ (a Pringle) curves up along the $x$-axis and down along the $y$-axis. At the origin it is a minimum in one direction and a maximum in the other — a **saddle point**. Saddle points are central to Unit 6: the second-derivative test detects them, and in machine learning the loss landscapes of neural networks are full of them, which is why plain gradient descent can stall.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Paraboloids focus',
          text: 'A circular paraboloid reflects every ray parallel to its axis through one point, the focus. That is why satellite dishes, radar antennas and car headlights are paraboloids. For $z = \\frac{x^2 + y^2}{4p}$ the focus is at $(0, 0, p)$ — the 3D version of the parabola fact you know from algebra.',
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'mcq',
      prompt: 'Which equation describes the surface shown?',
      plot3d: {
        type: 'plot3d',
        x: [-2, 2],
        y: [0, 4],
        z: [-2, 2],
        equal: true,
        parametricSurfaces: [{ x: 'u*cos(v)', y: 'u^2', z: 'u*sin(v)', u: [0, 2], v: [0, '2pi'], color: 'orange', opacity: 0.75 }],
        resolution: 22,
        view: { azimuth: 25, elevation: 20 },
        caption: 'A bowl opening in the positive $y$-direction.',
      },
      options: [
        { text: '$z = x^2 + y^2$', why: 'That bowl opens upward along the $z$-axis; here the axis is the $y$-axis.' },
        { text: '$y = x^2 + z^2$', correct: true, why: '$y$ is the linear variable, so it is the axis; slices $y = k$ are circles $x^2 + z^2 = k$.' },
        { text: '$y^2 = x^2 + z^2$', why: 'Squaring $y$ gives a double cone with straight sides, not a bowl with parabolic sides.' },
        { text: '$x^2 - y^2 + z^2 = 1$', why: 'That is a hyperboloid of one sheet around the $y$-axis: a tube with a waist, open at both ends.' },
      ],
      explanation: 'For a paraboloid, the variable that appears only to the first power is the axis, and its sign tells which way the bowl opens. In $y = x^2 + z^2$, every slice $y = k > 0$ is a circle of radius $\\sqrt{k}$, and slices $x = 0$ or $z = 0$ are parabolas $y = z^2$, $y = x^2$ opening toward $+y$.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'concept',
      title: 'Cones and hyperboloids',
      blocks: [
        {
          type: 'p',
          text: 'The remaining three quadrics have all three variables squared, with mixed signs. They form one family, and a single slider shows how it fits together: watch $x^2 + y^2 - z^2 = k$ as $k$ passes through $0$.',
        },
        {
          type: 'plot3d',
          x: [-2, 2],
          y: [-2, 2],
          z: [-2.3, 2.3],
          equal: true,
          parametricSurfaces: [
            { x: 'u*cos(v)', y: 'u*sin(v)', z: 'sqrt(abs(u^2 - k))', u: ['sqrt((k + abs(k))/2)', 2], v: [0, '2pi'], color: 'blue', opacity: 0.6 },
            { x: 'u*cos(v)', y: 'u*sin(v)', z: '-sqrt(abs(u^2 - k))', u: ['sqrt((k + abs(k))/2)', 2], v: [0, '2pi'], color: 'blue', opacity: 0.6 },
          ],
          sliders: [{ name: 'k', min: -1, max: 1, step: 0.05, value: 0.5, label: '$k$ in $x^2 + y^2 - z^2 = k$', play: true }],
          readouts: [{ label: 'waist radius $\\sqrt{k}$ (for $k > 0$) $=$', expr: 'sqrt((k + abs(k))/2)' }],
          resolution: 24,
          view: { azimuth: 30, elevation: 15 },
          caption: '$k > 0$: a [[calc3-hyperboloid-one-sheet|hyperboloid of one sheet]], one connected tube with a waist of radius $\\sqrt{k}$. $k = 0$: the waist pinches to a point and you get the double cone. $k < 0$: the surface splits into a [[calc3-hyperboloid-two-sheets|hyperboloid of two sheets]], with a gap of half-height $\\sqrt{-k}$ around the origin.',
        },
        {
          type: 'table',
          headers: ['Surface', 'Standard equation', 'Signs', 'Traces'],
          rows: [
            ['[[calc3-elliptic-cone|Elliptic cone]]', '$\\dfrac{z^2}{c^2} = \\dfrac{x^2}{a^2} + \\dfrac{y^2}{b^2}$', 'all three squared terms on one side, $= 0$', 'horizontal: ellipses; through the axis: pairs of lines'],
            ['Hyperboloid of one sheet', '$\\dfrac{x^2}{a^2} + \\dfrac{y^2}{b^2} - \\dfrac{z^2}{c^2} = 1$', '**one** minus', 'horizontal: ellipses; vertical: hyperbolas'],
            ['Hyperboloid of two sheets', '$-\\dfrac{x^2}{a^2} - \\dfrac{y^2}{b^2} + \\dfrac{z^2}{c^2} = 1$', '**two** minuses', 'horizontal ($|z| > c$): ellipses; vertical: hyperbolas'],
          ],
          caption: 'In each case the axis is the variable with the odd sign out ($z$ here).',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why two minus signs leave a gap',
          text: 'Write the two-sheet equation as $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = \\frac{z^2}{c^2} - 1$. The left side is a sum of squares, never negative, so a point exists only where $\\frac{z^2}{c^2} \\ge 1$, i.e. $|z| \\ge c$. The slab $-c < z < c$ is empty. With one minus sign, $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1 + \\frac{z^2}{c^2} \\ge 1$ always has solutions, so the surface never breaks.',
        },
        {
          type: 'p',
          text: 'One surprise: the hyperboloid of one sheet, curved as it looks, contains straight lines. The line $(1, t, t)$ lies on $x^2 + y^2 - z^2 = 1$ for every $t$, since $1 + t^2 - t^2 = 1$; tilt it the other way, $(1, t, -t)$, and you get a second family. That is why cooling towers and lattice radio masts are hyperboloids: they can be built from straight beams.',
        },
      ],
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'truefalse',
      prompt: 'The hyperboloid of one sheet $x^2 + y^2 - z^2 = 1$ contains entire straight lines.',
      answer: true,
      explanation: 'Every point $(1, t, t)$ satisfies $1^2 + t^2 - t^2 = 1$, so the whole line through $(1, 0, 0)$ with direction $\\langle 0, 1, 1 \\rangle$ lies on the surface. Rotating this line about the $z$-axis sweeps out the entire hyperboloid, and the lines $(1, t, -t)$ give a second family: it is *doubly ruled*. Ellipsoids and hyperboloids of two sheets contain no lines at all.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'Identifying a quadric: complete the square',
      blocks: [
        {
          type: 'p',
          text: 'Real equations arrive shifted, like $x^2 + 2z^2 - 6x - y + 10 = 0$. The recipe is the one you used for spheres: complete the square in every variable that appears both squared and to the first power, then rearrange into a standard form and read the type from the signs.',
        },
        {
          type: 'derivation',
          title: 'Identify $x^2 + 2z^2 - 6x - y + 10 = 0$',
          steps: [
            { tex: 'y = x^2 - 6x + 2z^2 + 10', why: '$y$ appears only to the first power, so solve for it. That already suggests a paraboloid with axis parallel to the $y$-axis.' },
            { tex: 'y = (x^2 - 6x + 9) + 2z^2 + 10 - 9', why: 'Complete the square in $x$: add and subtract $\\left(\\frac{-6}{2}\\right)^2 = 9$.' },
            { tex: 'y - 1 = (x - 3)^2 + 2z^2', why: 'Collect constants.' },
          ],
          result: 'An elliptic paraboloid with vertex $(3, 1, 0)$, opening in the positive $y$-direction. Its traces $y = k > 1$ are ellipses $(x - 3)^2 + 2z^2 = k - 1$.',
        },
        {
          type: 'table',
          headers: ['After completing squares you see…', 'It is a…'],
          rows: [
            ['three squares, all $+$, equal to a positive constant', 'ellipsoid'],
            ['three squares, one sign differs, $= 1$', 'hyperboloid of one sheet'],
            ['three squares, two signs negative, $= 1$', 'hyperboloid of two sheets'],
            ['three squares, $= 0$', 'cone'],
            ['two squares (same signs) and one linear variable', 'elliptic paraboloid'],
            ['two squares (opposite signs) and one linear variable', 'hyperbolic paraboloid'],
            ['only two variables appear', 'cylinder'],
          ],
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Ray–quadric intersection',
          text: 'A ray tracer finds where the ray $\\vec{o} + t\\vec{d}$ hits a quadric by substituting it into the equation. Every quadric is second-degree, so the result is a quadratic $At^2 + Bt + C = 0$: negative discriminant means a miss, zero means the ray grazes the surface, and otherwise the smaller positive root is the visible hit. Spheres, ellipsoids, cylinders and cones are all rendered this way, with no triangles at all.',
        },
        {
          type: 'code',
          title: 'ray_ellipsoid.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdio>

struct Vec3 { double x, y, z; };

// Ray o + t d against the ellipsoid x^2/a^2 + y^2/b^2 + z^2/c^2 = 1.
void intersect(Vec3 o, Vec3 d, double a, double b, double c) {
    double A = d.x * d.x / (a * a) + d.y * d.y / (b * b) + d.z * d.z / (c * c);
    double B = 2 * (o.x * d.x / (a * a) + o.y * d.y / (b * b) + o.z * d.z / (c * c));
    double C = o.x * o.x / (a * a) + o.y * o.y / (b * b) + o.z * o.z / (c * c) - 1;
    double disc = B * B - 4 * A * C;
    std::printf("ray from (%g, %g, %g): ", o.x, o.y, o.z);
    if (disc < 0) {
        std::printf("miss\\n");
    } else if (disc == 0) {
        std::printf("grazes at t = %.4f\\n", -B / (2 * A));
    } else {
        double s = std::sqrt(disc);
        std::printf("enters t = %.4f, exits t = %.4f\\n", (-B - s) / (2 * A), (-B + s) / (2 * A));
    }
}

int main() {
    const Vec3 dir{1, 0, 0};
    const double heights[] = {0.5, 1.0, 1.5};
    for (double y0 : heights)
        intersect({-4, y0, 0}, dir, 2, 1, 3);
}`,
          output: `ray from (-4, 0.5, 0): enters t = 2.2679, exits t = 5.7321
ray from (-4, 1, 0): grazes at t = 4.0000
ray from (-4, 1.5, 0): miss`,
          annotations: [
            { lines: '8-10', text: 'Substitute $x = o_x + td_x$ (and likewise $y$, $z$) into the equation and collect powers of $t$.' },
            { lines: 11, text: 'The discriminant decides miss, graze or hit — the 3D version of "how many times does a line meet a conic?".' },
            { lines: 19, text: 'Two roots: where the ray enters and where it leaves. For the first ray they are $4 \\mp \\sqrt{3}$.' },
            { lines: '25-27', text: 'Three parallel rays at heights $y_0 = 0.5, 1, 1.5$ against the ellipsoid with $a = 2$, $b = 1$, $c = 3$.' },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'error',
      prompt: 'A student identifies the surface $x^2 + y^2 - 4y - z^2 + 4 = 0$. Tap the first wrong line.',
      lines: [
        '$x^2 + (y^2 - 4y) - z^2 = -4$',
        '$x^2 + (y - 2)^2 - z^2 = -4$',
        '$z^2 - x^2 - (y - 2)^2 = 4$',
        'A hyperboloid of two sheets with axis parallel to the $z$-axis',
      ],
      errorLines: [2],
      explanation: 'Completing the square adds $4$ to the left side ($y^2 - 4y + 4 = (y - 2)^2$), so $4$ must be added to the right too: $-4 + 4 = 0$. The correct equation is $x^2 + (y - 2)^2 - z^2 = 0$, i.e. $z^2 = x^2 + (y - 2)^2$: a **cone** with vertex $(0, 2, 0)$ and axis parallel to the $z$-axis. The single dropped constant turned a cone into a hyperboloid.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'order',
      prompt: 'Put the steps for identifying a quadric surface from an expanded equation in order.',
      lines: [
        'Complete the square in each variable that appears both squared and to the first power, balancing the other side',
        'Rearrange into a standard form (constant $1$ or $0$ on one side, or a linear variable alone)',
        'Read the type from which variables are squared and their signs, and the center or vertex from the shifts',
      ],
      distractors: ['Take the square root of both sides of the equation'],
      explanation: 'You cannot read the shifts until the squares are complete, and you cannot match a standard form until the equation is arranged like one. Taking square roots does not help: it would introduce $\\pm$ and hide the sign pattern that identifies the surface.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'numeric',
      prompt: 'The ray $\\vec{r}(t) = \\langle -4, \\tfrac{1}{2}, 0 \\rangle + t\\langle 1, 0, 0 \\rangle$ first hits the ellipsoid $\\frac{x^2}{4} + y^2 + \\frac{z^2}{9} = 1$ at which value of $t$? An exact answer or a decimal to at least 2 places is fine.',
      hint: 'On the ray $y = \\frac{1}{2}$ and $z = 0$, so $\\frac{x^2}{4} = \\frac{3}{4}$. Which root of $x$ does the ray reach first?',
      label: '$t =$',
      answer: '4 - sqrt(3)',
      answerTex: '4 - \\sqrt{3} \\approx 2.268',
      explanation: 'Substituting gives $\\frac{x^2}{4} + \\frac{1}{4} = 1$, so $x^2 = 3$ and $x = \\pm\\sqrt{3}$. The ray starts at $x = -4$ and moves in the $+x$ direction ($x = -4 + t$), so it reaches $x = -\\sqrt{3}$ first, at $t = 4 - \\sqrt{3} \\approx 2.268$, and exits at $t = 4 + \\sqrt{3}$. This matches the first line of the program\'s output.',
    },
  ],
  takeaways: [
    'An equation missing one variable is a cylinder: the curve in the other two variables, extruded along the missing axis.',
    'Traces (slices by $x = k$, $y = k$, $z = k$) reduce a surface to familiar plane curves; horizontal traces of a graph are its level curves.',
    'Ellipsoid: three squares, all $+$, $= 1$. Elliptic paraboloid: two squares (same sign) $=$ a linear variable. Hyperbolic paraboloid (saddle): two squares of opposite sign $=$ a linear variable.',
    'Cone: three squares $= 0$. Hyperboloid of one sheet: one minus sign; two sheets: two minus signs (with an empty gap). The odd variable out is the axis.',
    'Complete the square to find the center or vertex; one dropped constant can change the type of surface.',
    'Substituting a ray into a quadric gives a quadratic in $t$ — the basis of ray-traced spheres, ellipsoids and cones.',
  ],
  reading: [
    {
      title: 'OpenStax Calculus Volume 3 — 2.6 Quadric Surfaces',
      url: 'https://openstax.org/details/books/calculus-volume-3',
      source: 'openstax',
      note: 'A full table of the quadric surfaces with traces, plus exercises in identifying shifted ones.',
    },
    {
      title: "Paul's Online Notes — Calculus III",
      url: 'https://tutorial.math.lamar.edu/Classes/CalcIII/CalcIII.aspx',
      source: 'other',
      note: 'The "Quadric Surfaces" page has clear sketches of each surface and how its traces build it.',
    },
    {
      title: 'Wikipedia — Quadric',
      url: 'https://en.wikipedia.org/wiki/Quadric',
      source: 'wikipedia',
      note: 'The general second-degree equation and the classification of quadrics in three dimensions.',
    },
    {
      title: 'Wikipedia — Hyperboloid',
      url: 'https://en.wikipedia.org/wiki/Hyperboloid',
      source: 'wikipedia',
      note: 'Photos of hyperboloid towers and the two families of straight lines on the one-sheeted hyperboloid.',
    },
  ],
};
