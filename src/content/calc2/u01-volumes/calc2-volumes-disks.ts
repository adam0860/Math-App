import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'calc2-volumes-disks',
  title: 'Volumes by Slicing: Disks and Washers',
  summary: 'Slice a solid into paper-thin pieces, add up their volumes with an integral, and you can measure shapes no geometry formula covers.',
  minutes: 18,
  objectives: [
    'Explain why the volume of a solid is $V = \\int_a^b A(x)\\,dx$, where $A(x)$ is the area of a cross-section',
    'Find volumes of solids with known cross-sections, such as pyramids',
    'Use the disk method to find the volume of a solid of revolution about the $x$- or $y$-axis',
    'Use the washer method when the region does not touch the axis of rotation',
    'Set up outer and inner radii correctly when rotating about a line such as $y = -1$',
  ],
  steps: [
    // 1 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'The slicing idea: volume is an integral of area',
      blocks: [
        {
          type: 'p',
          text: 'In Calculus I you found the area under a curve by cutting it into thin rectangles and adding them up — a [[riemann-sum]] that becomes a [[definite-integral]] in the limit. Volume works the same way, one dimension up. Cut a solid into thin slabs like a loaf of bread, find the volume of each slab, and add.',
        },
        {
          type: 'p',
          text: 'Put the solid along the $x$-axis from $x = a$ to $x = b$. Cutting it with a plane perpendicular to the axis at position $x$ exposes a flat face — a [[calc2-cross-section]] — with some area $A(x)$. A slab of thickness $\\Delta x$ is almost a prism with that face, so its volume is about $A(x)\\,\\Delta x$ (area of the face times thickness, exactly like a coin is "area of the face times thickness").',
        },
        {
          type: 'theorem',
          name: 'Volume by slicing',
          tex: 'V = \\lim_{n \\to \\infty} \\sum_{i=1}^{n} A(x_i^*)\\,\\Delta x = \\int_a^b A(x)\\,dx',
          text: 'valid whenever the cross-sectional area $A(x)$ is a continuous function on $[a, b]$.',
        },
        {
          type: 'p',
          text: 'Everything in this lesson is this one formula. The only real work is finding $A(x)$: picture the slice, describe its shape, and write its area in terms of $x$.',
        },
        {
          type: 'derivation',
          title: 'Volume of a pyramid with a square base of side $s$ and height $h$',
          steps: [
            { tex: '\\text{Put the apex at } y = 0 \\text{ and the base at } y = h', why: 'Measure the position $y$ downward from the tip along the pyramid\'s central axis. The slices are horizontal squares.' },
            { tex: '\\text{side}(y) = \\frac{s}{h}\\,y', why: 'Similar triangles: the side grows linearly from $0$ at the apex to $s$ at the base, so at depth $y$ it is the fraction $\\frac{y}{h}$ of $s$.' },
            { tex: 'A(y) = \\left(\\frac{s\\,y}{h}\\right)^2 = \\frac{s^2}{h^2}\\,y^2', why: 'Each cross-section is a square, and the area of a square is side squared.' },
            { tex: 'V = \\int_0^h \\frac{s^2}{h^2}\\,y^2\\,dy', why: 'Add up the slabs from the apex ($y = 0$) to the base ($y = h$).' },
            { tex: '= \\frac{s^2}{h^2} \\cdot \\frac{y^3}{3}\\Big|_0^h = \\frac{s^2}{h^2} \\cdot \\frac{h^3}{3}', why: 'Pull out the constant $\\frac{s^2}{h^2}$ and use the power rule for antiderivatives.' },
            { tex: '= \\frac{1}{3}s^2 h', why: 'Cancel $h^2$. Since $s^2$ is the base area $B$, this is the familiar $V = \\frac13 Bh$.' },
          ],
          result: 'The "one third" in the pyramid formula is the $\\frac13$ from integrating $y^2$ — it is a calculus fact you memorised in geometry.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the slab approximation becomes exact',
          text: 'A real slab is not a perfect prism — its area changes slightly from one face to the other. But that error is tiny compared with the slab itself: it shrinks like $(\\Delta x)^2$ per slab while there are only about $\\frac{1}{\\Delta x}$ slabs, so the total error behaves like $\\Delta x \\to 0$. That is the same reason Riemann sums converge to areas.',
        },
      ],
    },
    // 2
    {
      kind: 'numeric',
      prompt: 'A pyramid has a square base $6$ m on a side and a height of $5$ m. Use $V = \\int_0^h A(y)\\,dy$ (or the formula it produces) to find its volume.',
      hint: 'Here $A(y) = \\left(\\frac{6y}{5}\\right)^2$. Integrate from $0$ to $5$.',
      answer: '60',
      unit: 'm³',
      label: '$V =$',
      explanation: '$V = \\int_0^5 \\frac{36}{25}y^2\\,dy = \\frac{36}{25}\\cdot\\frac{125}{3} = 60$ m³. This agrees with $\\frac13 Bh = \\frac13 (36)(5) = 60$. The integral is doing the geometry for you: the slices near the tip are tiny, the slices near the base are nearly $36$ m², and the average slice area turns out to be exactly one third of the base.',
    },
    // 3 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Solids of revolution: the disk method',
      blocks: [
        {
          type: 'p',
          text: 'Take the region under $y = f(x) \\ge 0$ from $x = a$ to $x = b$ and spin it around the $x$-axis. It sweeps out a [[solid-of-revolution]] — think of a vase turned on a lathe, or a 3D model made with a "lathe" or "revolve" tool. The graph below can only show the flat region, so you have to build the 3D picture in your head.',
        },
        {
          type: 'p',
          text: 'Here is how. Pick one position $x$ and draw the vertical line segment from the axis up to the curve; its length is $f(x)$. When the region spins, that segment sweeps out a full circle of **radius** $f(x)$ — a flat disk standing upright in the plane perpendicular to the $x$-axis. Give it a little thickness $dx$ and it is a coin. The whole solid is a stack of these coins, fat where $f$ is big and thin where $f$ is small.',
        },
        {
          type: 'graph',
          x: [-0.5, 4.5],
          y: [-2.5, 2.5],
          equal: true,
          functions: [
            { expr: 'sqrt(x)', label: '$y = \\sqrt{x}$', color: 'blue', domain: [0, 4] },
            { expr: '-sqrt(x)', label: 'mirror image (other side of the solid)', color: 'gray', dashed: true, domain: [0, 4] },
          ],
          areas: [
            { expr: 'sqrt(x)', from: 0, to: 4, color: 'blue' },
            { expr: 'sqrt(x)', expr2: '-sqrt(x)', from: 'a', to: 'a + 0.12', color: 'orange' },
          ],
          segments: [{ from: ['a', 0], to: ['a', 'sqrt(a)'], color: 'red', label: 'r = √x' }],
          sliders: [{ name: 'a', min: 0.2, max: 3.8, step: 0.05, value: 2, label: 'slice position $x$' }],
          readouts: [
            { label: 'radius $r = \\sqrt{x} =$', expr: 'sqrt(a)', digits: 3 },
            { label: 'disk area $\\pi r^2 = \\pi x =$', expr: 'pi*a', digits: 3 },
          ],
          caption: 'Blue: the region being rotated about the $x$-axis. The dashed curve is where the region lands after half a turn, so blue + dashed outline the solid\'s silhouette. The orange strip is one disk seen edge-on: radius $\\sqrt{x}$ (red), thickness $dx$.',
        },
        {
          type: 'theorem',
          name: 'Disk method (rotation about the $x$-axis)',
          tex: 'V = \\int_a^b \\pi\\,[f(x)]^2\\,dx',
          text: 'Here $A(x) = \\pi r^2$ with radius $r = f(x)$; $f$ continuous on $[a, b]$.',
        },
        {
          type: 'derivation',
          title: 'Rotate the region under $y = \\sqrt{x}$, $0 \\le x \\le 4$, about the $x$-axis',
          steps: [
            { tex: 'r(x) = \\sqrt{x}', why: 'The radius of the disk at $x$ is the distance from the axis ($y = 0$) up to the curve.' },
            { tex: 'A(x) = \\pi\\left(\\sqrt{x}\\right)^2 = \\pi x', why: 'Area of a circle, $\\pi r^2$. Squaring the square root is what makes this example clean.' },
            { tex: 'V = \\int_0^4 \\pi x\\,dx', why: 'Stack the disks from $x = 0$ to $x = 4$.' },
            { tex: '= \\pi\\,\\frac{x^2}{2}\\Big|_0^4 = \\pi \\cdot \\frac{16}{2}', why: 'Power rule, then evaluate at the limits.' },
            { tex: '= 8\\pi', why: 'About $25.13$ cubic units.' },
          ],
          result: 'The paraboloid has volume $8\\pi$ — exactly half of the cylinder of radius $2$ and length $4$ that encloses it ($\\pi \\cdot 2^2 \\cdot 4 = 16\\pi$).',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the cone formula has a $\\frac13$ too',
          text: 'Rotate the line $y = \\frac{r}{h}x$ for $0 \\le x \\le h$ and you get a cone of radius $r$ and height $h$. The disk method gives $\\int_0^h \\pi \\frac{r^2}{h^2}x^2\\,dx = \\frac13\\pi r^2 h$. Same $\\frac13$ as the pyramid, for the same reason: the slice area grows like $x^2$.',
        },
      ],
    },
    // 4
    {
      kind: 'mcq',
      prompt: 'The region under $y = x^2$ for $0 \\le x \\le 2$ is rotated about the $x$-axis. What is the volume?',
      hint: 'The radius is $x^2$, so the disk area is $\\pi (x^2)^2$.',
      options: [
        { text: '$\\dfrac{8\\pi}{3}$', why: 'This is $\\pi\\int_0^2 x^2\\,dx$: the radius was not squared. The disk area is $\\pi r^2 = \\pi x^4$, not $\\pi x^2$.' },
        { text: '$\\dfrac{32\\pi}{5}$', correct: true, why: '$\\pi\\int_0^2 (x^2)^2\\,dx = \\pi\\int_0^2 x^4\\,dx = \\pi\\cdot\\frac{32}{5}$.' },
        { text: '$\\dfrac{32}{5}$', why: 'That is $\\int_0^2 x^4\\,dx$ with the $\\pi$ dropped. The cross-sections are circles, so $\\pi$ must appear.' },
        { text: '$8\\pi$', why: 'This is $2\\pi\\int_0^2 x \\cdot x^2\\,dx$, a cylindrical-shell integral — which would give the volume about the $y$-axis, a different solid (next lesson).' },
      ],
      explanation: 'Each slice is a disk of radius $r = x^2$, so $A(x) = \\pi x^4$ and $V = \\pi \\int_0^2 x^4\\,dx = \\pi \\left[\\frac{x^5}{5}\\right]_0^2 = \\frac{32\\pi}{5} \\approx 20.1$. The two classic slips are forgetting to square the radius and forgetting the $\\pi$.',
    },
    // 5 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Rotating about the $y$-axis: slice in $y$',
      blocks: [
        {
          type: 'p',
          text: 'The disk method needs slices **perpendicular to the axis of rotation**. If you spin a region around the $y$-axis, the disks are horizontal, their thickness is $dy$, and their radius is a horizontal distance — so everything must be written in terms of $y$.',
        },
        {
          type: 'theorem',
          name: 'Disk method (rotation about the $y$-axis)',
          tex: 'V = \\int_c^d \\pi\\,[g(y)]^2\\,dy',
          text: 'where $x = g(y) \\ge 0$ is the distance from the $y$-axis to the curve, for $c \\le y \\le d$.',
        },
        {
          type: 'graph',
          x: [-2.6, 2.6],
          y: [-0.5, 4.5],
          equal: true,
          functions: [
            { expr: 'x^2', label: '$y = x^2$, i.e. $x = \\sqrt{y}$', color: 'blue', domain: [0, 2] },
            { expr: 'x^2', color: 'gray', dashed: true, domain: [-2, 0] },
          ],
          areas: [{ expr: '4', expr2: 'x^2', from: 0, to: 2, color: 'blue' }],
          hlines: [{ y: 4, label: 'y = 4', color: 'gray' }],
          segments: [
            { from: [0, 'b'], to: ['sqrt(b)', 'b'], color: 'red', label: 'r = √y' },
            { from: [0, 'b'], to: ['-sqrt(b)', 'b'], color: 'red', dashed: true },
          ],
          sliders: [{ name: 'b', min: 0.2, max: 3.9, step: 0.05, value: 2, label: 'slice height $y$' }],
          readouts: [{ label: 'disk area $\\pi(\\sqrt{y})^2 = \\pi y =$', expr: 'pi*b', digits: 3 }],
          caption: 'The blue region (between the $y$-axis, $y = x^2$ and $y = 4$) spins about the $y$-axis into a bowl-shaped solid. Each horizontal slice is a disk of radius $\\sqrt{y}$; the dashed half shows the other side after half a turn.',
        },
        {
          type: 'derivation',
          title: 'Rotate the region between $y = x^2$ ($x \\ge 0$), the $y$-axis and $y = 4$ about the $y$-axis',
          steps: [
            { tex: 'y = x^2 \\implies x = \\sqrt{y}', why: 'Solve for $x$: the radius of a horizontal slice is the horizontal distance from the $y$-axis to the curve. We take the positive root because the region has $x \\ge 0$.' },
            { tex: 'A(y) = \\pi\\left(\\sqrt{y}\\right)^2 = \\pi y', why: 'Area of a disk of radius $\\sqrt{y}$.' },
            { tex: 'V = \\int_0^4 \\pi y\\,dy', why: 'The slices run from the bottom of the region ($y = 0$) to the top ($y = 4$). These are $y$-limits, not $x$-limits.' },
            { tex: '= \\pi\\,\\frac{y^2}{2}\\Big|_0^4 = 8\\pi', why: 'Power rule and evaluation.' },
          ],
          result: '$V = 8\\pi$. (It matches the previous example because this solid is the same paraboloid, just standing upright.)',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Match the variable to the slice',
          text: 'Slices perpendicular to the $x$-axis mean $dx$, radii as functions of $x$, and $x$-limits. Slices perpendicular to the $y$-axis mean $dy$, radii as functions of $y$, and $y$-limits. Writing $\\int_0^2 \\pi (x^2)^2\\,dy$ — an $x$-radius with a $dy$ — is a guaranteed wrong answer.',
        },
      ],
    },
    // 6
    {
      kind: 'numeric',
      prompt: 'The region bounded by $y = x^3$, the line $y = 8$ and the $y$-axis is rotated about the $y$-axis. Find the volume. (An exact answer like `5pi/3` is fine.)',
      hint: 'Solve $y = x^3$ for $x$ to get the radius $x = y^{1/3}$. The slices go from $y = 0$ to $y = 8$.',
      answer: '96pi/5',
      answerTex: '\\frac{96\\pi}{5}',
      label: '$V =$',
      explanation: 'Horizontal disks have radius $x = \\sqrt[3]{y}$, so $A(y) = \\pi y^{2/3}$ and $V = \\pi \\int_0^8 y^{2/3}\\,dy = \\pi \\cdot \\frac{3}{5}y^{5/3}\\Big|_0^8 = \\pi\\cdot\\frac35\\cdot 32 = \\frac{96\\pi}{5} \\approx 60.3$. Note $8^{5/3} = (\\sqrt[3]{8})^5 = 2^5 = 32$.',
    },
    // 7 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Washers: when the solid has a hole',
      blocks: [
        {
          type: 'p',
          text: 'Now rotate the region *between* two curves, $y = x$ (on top) and $y = x^2$ (below), for $0 \\le x \\le 1$, about the $x$-axis. This region does not touch the axis, so the solid has a hole down the middle — like a cored apple. A slice is no longer a solid disk but a **washer**: a disk with a smaller disk punched out of its center.',
        },
        {
          type: 'p',
          text: 'Picture the vertical segment at position $x$ again. It starts at height $x^2$ and ends at height $x$. Spinning it sweeps out a ring whose **outer radius** $R$ is the distance from the axis to the far curve, and whose **inner radius** $r$ is the distance from the axis to the near curve.',
        },
        {
          type: 'graph',
          x: [-0.25, 1.35],
          y: [-1.15, 1.15],
          equal: true,
          functions: [
            { expr: 'x', label: '$y = x$ (outer)', color: 'blue', domain: [0, 1.2] },
            { expr: 'x^2', label: '$y = x^2$ (inner)', color: 'green', domain: [0, 1.1] },
            { expr: '-x', color: 'gray', dashed: true, domain: [0, 1] },
            { expr: '-x^2', color: 'gray', dashed: true, domain: [0, 1] },
          ],
          areas: [
            { expr: 'x', expr2: 'x^2', from: 0, to: 1, color: 'blue' },
            { expr: '-x^2', expr2: '-x', from: 0, to: 1, color: 'gray' },
          ],
          segments: [
            { from: ['a', 0], to: ['a', 'a'], color: 'red', label: 'R = x' },
            { from: ['a', 0], to: ['a', '-a^2'], color: 'purple', label: 'r = x²' },
          ],
          sliders: [{ name: 'a', min: 0.05, max: 0.98, step: 0.01, value: 0.6, label: 'slice position $x$' }],
          readouts: [
            { label: '$R =$', expr: 'a', digits: 3 },
            { label: '$r =$', expr: 'a^2', digits: 3 },
            { label: 'washer area $\\pi(R^2 - r^2) =$', expr: 'pi*(a^2 - a^4)', digits: 4 },
          ],
          caption: 'Top half: the region (blue). Bottom half: its mirror image after half a turn (gray). The outer radius $R$ (red) reaches the far curve; the inner radius $r$ (purple, drawn on the mirror side so the two do not overlap) reaches the near curve. The empty band around the axis is the hole.',
        },
        {
          type: 'theorem',
          name: 'Washer method (rotation about the $x$-axis)',
          tex: 'V = \\int_a^b \\pi\\left( [R(x)]^2 - [r(x)]^2 \\right) dx',
          text: '$R(x)$ = distance from the axis to the farther boundary, $r(x)$ = distance to the nearer boundary, with $R \\ge r \\ge 0$.',
        },
        {
          type: 'derivation',
          title: 'Rotate the region between $y = x$ and $y = x^2$ about the $x$-axis',
          steps: [
            { tex: 'x = x^2 \\implies x = 0 \\text{ or } x = 1', why: 'The curves cross at $x = 0$ and $x = 1$; those are the limits. Between them $x \\ge x^2$, so $y = x$ is on the outside.' },
            { tex: 'R(x) = x, \\qquad r(x) = x^2', why: 'Outer radius reaches the farther curve, inner radius the nearer one, both measured from the axis $y = 0$.' },
            { tex: 'A(x) = \\pi\\left(x^2 - x^4\\right)', why: 'Washer area = big disk minus small disk $= \\pi R^2 - \\pi r^2$.' },
            { tex: 'V = \\pi \\int_0^1 \\left(x^2 - x^4\\right) dx', why: 'Stack the washers across the region.' },
            { tex: '= \\pi \\left[\\frac{x^3}{3} - \\frac{x^5}{5}\\right]_0^1 = \\pi\\left(\\frac13 - \\frac15\\right)', why: 'Antidifferentiate term by term and evaluate.' },
            { tex: '= \\frac{2\\pi}{15}', why: 'Common denominator: $\\frac{5 - 3}{15}$.' },
          ],
          result: '$V = \\frac{2\\pi}{15} \\approx 0.419$.',
        },
        {
          type: 'compare',
          left: {
            title: 'Wrong',
            tone: 'bad',
            tex: ['A = \\pi (R - r)^2'],
            text: 'This is the area of a disk whose radius is the *thickness* of the ring. It ignores where the ring sits.',
          },
          right: {
            title: 'Right',
            tone: 'good',
            tex: ['A = \\pi R^2 - \\pi r^2 = \\pi(R^2 - r^2)'],
            text: 'Area of the full disk minus the area of the hole. Square each radius *first*, then subtract.',
          },
        },
      ],
    },
    // 8
    {
      kind: 'error',
      prompt: 'A student finds the volume when the region between $y = 2x$ and $y = x^2$ is rotated about the $x$-axis. Tap the first line that is wrong.',
      lines: [
        'The curves meet where $2x = x^2$, so at $x = 0$ and $x = 2$.',
        'On $[0, 2]$, $2x \\ge x^2$, so $R = 2x$ and $r = x^2$.',
        '$V = \\pi\\displaystyle\\int_0^2 (2x - x^2)^2\\,dx$',
        '$= \\pi\\displaystyle\\int_0^2 (4x^2 - 4x^3 + x^4)\\,dx = \\frac{16\\pi}{15}$',
      ],
      errorLines: [3],
      explanation: 'Line 3 uses $\\pi(R - r)^2$ instead of $\\pi(R^2 - r^2)$. The correct integral is $\\pi\\int_0^2 \\left(4x^2 - x^4\\right) dx = \\pi\\left(\\frac{32}{3} - \\frac{32}{5}\\right) = \\frac{64\\pi}{15}$. Lines 1 and 2 are fine, and line 4 expands and integrates line 3 correctly — the damage was done when the washer area was written down.',
    },
    // 9
    {
      kind: 'numeric',
      prompt: 'The region between $y = \\sqrt{x}$ and $y = x$ is rotated about the $x$-axis. Find the volume.',
      hint: 'The curves meet at $x = 0$ and $x = 1$. Which one is on top in between? Test $x = \\frac14$.',
      answer: 'pi/6',
      answerTex: '\\frac{\\pi}{6}',
      label: '$V =$',
      explanation: 'On $(0, 1)$, $\\sqrt{x} > x$ (e.g. $\\sqrt{0.25} = 0.5 > 0.25$), so $R = \\sqrt{x}$ and $r = x$. Then $V = \\pi\\int_0^1 \\left(x - x^2\\right)dx = \\pi\\left(\\frac12 - \\frac13\\right) = \\frac{\\pi}{6} \\approx 0.524$. If you got $-\\frac{\\pi}{6}$, you swapped $R$ and $r$: a volume can never be negative.',
    },
    // 10 ────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Rotating about other lines',
      blocks: [
        {
          type: 'p',
          text: 'The axis does not have to be a coordinate axis. A radius is always a **distance from the axis of rotation**, so when the axis is the line $y = k$, every radius is a difference of heights: (height of the curve) minus $k$ if the curve is above the axis, or $k$ minus (height of the curve) if it is below.',
        },
        {
          type: 'definition',
          term: 'Radius rule',
          text: 'For a horizontal axis $y = k$: radius $= |\\,y_{\\text{curve}} - k\\,|$, which is "top minus bottom". For a vertical axis $x = k$ (with horizontal slices): radius $= |\\,x_{\\text{curve}} - k\\,|$, which is "right minus left".',
        },
        {
          type: 'graph',
          x: [-0.8, 1.6],
          y: [-3.2, 1.3],
          equal: true,
          functions: [
            { expr: 'x', label: '$y = x$', color: 'blue', domain: [0, 1.2] },
            { expr: 'x^2', label: '$y = x^2$', color: 'green', domain: [0, 1.1] },
            { expr: '-2 - x', color: 'gray', dashed: true, domain: [0, 1] },
            { expr: '-2 - x^2', color: 'gray', dashed: true, domain: [0, 1] },
          ],
          areas: [
            { expr: 'x', expr2: 'x^2', from: 0, to: 1, color: 'blue' },
            { expr: '-2 - x^2', expr2: '-2 - x', from: 0, to: 1, color: 'gray' },
          ],
          hlines: [{ y: -1, label: 'axis y = −1', color: 'orange' }],
          segments: [
            { from: ['a', -1], to: ['a', 'a'], color: 'red', label: 'R = x + 1' },
            { from: ['a', -1], to: ['a', '-2 - a^2'], color: 'purple', label: 'r = x² + 1' },
          ],
          sliders: [{ name: 'a', min: 0.05, max: 0.98, step: 0.01, value: 0.6, label: 'slice position $x$' }],
          readouts: [
            { label: '$R = x + 1 =$', expr: 'a + 1', digits: 3 },
            { label: '$r = x^2 + 1 =$', expr: 'a^2 + 1', digits: 3 },
          ],
          caption: 'The same region, now spun about the orange line $y = -1$. The gray dashed copy is its reflection across the axis. Both radii are measured from $y = -1$, so each gains $+1$ compared with rotating about $y = 0$ — and the hole gets wider.',
        },
        {
          type: 'derivation',
          title: 'Rotate the region between $y = x$ and $y = x^2$ about $y = -1$',
          steps: [
            { tex: 'R(x) = x - (-1) = x + 1', why: 'Outer radius: from the axis $y = -1$ up to the farther curve $y = x$. Top minus bottom.' },
            { tex: 'r(x) = x^2 - (-1) = x^2 + 1', why: 'Inner radius: from the axis up to the nearer curve $y = x^2$.' },
            { tex: 'V = \\pi \\int_0^1 \\left[(x+1)^2 - (x^2+1)^2\\right] dx', why: 'Washer formula with the new radii; the limits are still where the curves meet.' },
            { tex: '= \\pi \\int_0^1 \\left[x^2 + 2x + 1 - x^4 - 2x^2 - 1\\right] dx', why: 'Expand both squares fully. Each has a middle term — do not drop it.' },
            { tex: '= \\pi \\int_0^1 \\left(-x^4 - x^2 + 2x\\right) dx', why: 'Combine like terms; the $1$s cancel.' },
            { tex: '= \\pi\\left(-\\frac15 - \\frac13 + 1\\right) = \\frac{7\\pi}{15}', why: 'Integrate term by term from $0$ to $1$, then use the common denominator $15$: $\\frac{-3 - 5 + 15}{15}$.' },
          ],
          result: '$V = \\frac{7\\pi}{15}$ — more than three times the $\\frac{2\\pi}{15}$ we got about the $x$-axis, because the region now orbits farther from the axis.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Sketch first, every time',
          text: 'Draw the region, draw the axis, and draw one representative slice with its radii labelled. Ninety percent of mistakes in volume problems are set-up mistakes, and a 20-second sketch catches nearly all of them. Instructors usually award most of the credit for a correct integral, even before it is evaluated.',
        },
      ],
    },
    // 11
    {
      kind: 'fill',
      prompt: 'The region between $y = x$ and $y = x^2$ ($0 \\le x \\le 1$) is rotated about the line $y = 3$, which lies *above* the region. Fill in the radii.',
      template: 'The outer radius is $R(x) =$ ___ and the inner radius is $r(x) =$ ___.',
      blanks: [{ answers: ['$3 - x^2$'] }, { answers: ['$3 - x$'] }],
      wordBank: ['$3 - x^2$', '$3 - x$', '$x - 3$', '$x^2 - 3$', '$x + 3$', '$x - x^2$'],
      hint: 'The axis is on top now, so radius = $3$ minus the curve\'s height. Which curve is farther from $y = 3$?',
      explanation: 'With the axis above the region, every radius is $3 - (\\text{height of curve})$. The *lower* curve $y = x^2$ is now the farther one, so $R = 3 - x^2$, and the upper curve gives $r = 3 - x$. Notice the roles of the two curves flipped compared with rotating about the $x$-axis. Choices like $x - 3$ are negative on $[0, 1]$, so they cannot be distances.',
    },
    // 12
    {
      kind: 'expr',
      prompt: 'The region between $y = x^2 + 1$ and the $x$-axis, for $0 \\le x \\le 1$, is rotated about the line $y = -2$. Enter the cross-sectional area $A(x)$ of a slice.',
      hint: 'The region\'s bottom edge is the $x$-axis, which is $2$ units above the axis of rotation — so there is a hole.',
      label: '$A(x) =$',
      answer: 'pi((x^2 + 3)^2 - 4)',
      answerTex: '\\pi\\left[(x^2 + 3)^2 - 2^2\\right]',
      explanation: 'The slice is a washer, not a disk. Outer radius: from $y = -2$ up to $y = x^2 + 1$, so $R = x^2 + 1 - (-2) = x^2 + 3$. Inner radius: from $y = -2$ up to the bottom edge $y = 0$, so $r = 2$. Hence $A(x) = \\pi\\left[(x^2+3)^2 - 4\\right] = \\pi\\left(x^4 + 6x^2 + 5\\right)$. Using $\\pi (x^2+3)^2$ alone would fill in the gap between the axis and the region, which is not part of the solid.',
    },
    // 13 ────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'The recipe, and volumes in code',
      blocks: [
        {
          type: 'steps',
          items: [
            { title: 'Sketch', text: 'Draw the region and the axis of rotation. Mark where the curves meet.' },
            { title: 'Slice perpendicular to the axis', text: 'Horizontal axis ⇒ vertical slices, $dx$. Vertical axis ⇒ horizontal slices, $dy$. Write the curves in terms of the slicing variable.' },
            { title: 'Find the radii', text: 'Disk if the region touches the axis along the slice; washer if there is a gap. Each radius is a distance from the axis: top minus bottom, or right minus left.' },
            { title: 'Integrate', text: '$V = \\int \\pi\\left(R^2 - r^2\\right)$ over the slicing variable\'s range ($r = 0$ for a disk).' },
            { title: 'Sanity-check', text: 'The answer must be positive, and it should be smaller than a simple cylinder that encloses the solid.' },
          ],
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Lathe models and physics mass',
          text: '3D tools build vases, bottles, barrels and chess pieces by revolving a 2D profile curve — a "lathe" or "revolve" modifier. A physics engine then needs the object\'s mass, which is density times volume. For a revolved profile you can get that volume by literally summing thin disks, as below. With the midpoint value of the radius in each slice, the sum converges quickly to the exact integral.',
        },
        {
          type: 'code',
          title: 'disk_volume.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdio>

// Profile curve of the solid: radius at position x.
double f(double x) { return x * x; }

double diskVolume(double a, double b, int n) {
    const double pi = std::acos(-1.0);
    const double dx = (b - a) / n;
    double v = 0.0;
    for (int i = 0; i < n; ++i) {
        double xm = a + (i + 0.5) * dx;   // midpoint of slice i
        double r = f(xm);
        v += pi * r * r * dx;             // one thin disk
    }
    return v;
}

int main() {
    for (int n = 4; n <= 256; n *= 4) {
        std::printf("n = %3d  V = %.6f\\n", n, diskVolume(0.0, 2.0, n));
    }
    std::printf("exact   V = %.6f\\n", 32.0 * std::acos(-1.0) / 5.0);
}`,
          output: `n =   4  V = 19.070449
n =  16  V = 20.040788
n =  64  V = 20.102103
n = 256  V = 20.105937
exact   V = 20.106193`,
          annotations: [
            { lines: 5, text: 'The radius function $f(x) = x^2$ from the multiple-choice question: the exact volume on $[0, 2]$ is $\\frac{32\\pi}{5}$.' },
            { lines: 12, text: 'Sample the radius at the middle of each slice (a midpoint Riemann sum).' },
            { lines: 14, text: 'Disk volume $= \\pi r^2 \\cdot \\Delta x$. This line *is* $A(x)\\,dx$.' },
          ],
        },
        {
          type: 'deepdive',
          title: 'Cavalieri\'s principle',
          blocks: [
            {
              type: 'p',
              text: 'The formula $V = \\int A(x)\\,dx$ says volume depends only on the cross-sectional *areas*, not on their shapes or how they are lined up. So two solids whose slices at every height have equal area have equal volume — Cavalieri\'s principle (1635), discovered before calculus. A straight stack of coins and the same stack pushed sideways into a leaning tower have the same volume.',
            },
          ],
        },
      ],
    },
    // 14
    {
      kind: 'truefalse',
      prompt: 'Rotating a region about the $x$-axis and rotating the same region about the $y$-axis always produce solids with the same volume.',
      answer: false,
      explanation: 'Take the triangle under $y = x$ for $0 \\le x \\le 1$. About the $x$-axis it makes a cone: $\\pi\\int_0^1 x^2\\,dx = \\frac{\\pi}{3}$. About the $y$-axis, horizontal slices are washers with $R = 1$ and $r = y$: $\\pi\\int_0^1 (1 - y^2)\\,dy = \\frac{2\\pi}{3}$. Volume depends on how far the area sits from the axis, not just on how much area there is.',
    },
    // 15
    {
      kind: 'order',
      prompt: 'Put the steps for finding a volume by washers in the right order.',
      lines: [
        'Sketch the region, the axis of rotation and one slice perpendicular to the axis',
        'Find where the boundary curves meet to get the limits of integration',
        'Write the outer radius $R$ and inner radius $r$ as distances from the axis',
        'Write $A = \\pi(R^2 - r^2)$ and set up $V = \\int A$',
        'Evaluate the integral and check that the answer is positive',
      ],
      distractors: ['Write $A = \\pi(R - r)^2$'],
      explanation: 'The picture comes first, because the slice direction, the limits and the radii all come from it. The radii must be known before the area, and the area before the integral. The distractor is the classic wrong washer area: it should be $\\pi R^2 - \\pi r^2$.',
    },
  ],
  takeaways: [
    'Volume by slicing: $V = \\int_a^b A(x)\\,dx$, where $A(x)$ is the area of the cross-section at $x$.',
    'Disk method: slices perpendicular to the axis are disks of radius $r$, so $A = \\pi r^2$.',
    'Washer method: if there is a gap between the region and the axis, $A = \\pi(R^2 - r^2)$ — square first, then subtract.',
    'Every radius is a distance from the axis of rotation: top minus bottom (horizontal axis) or right minus left (vertical axis).',
    'Rotating about a vertical axis with this method means horizontal slices: write everything in terms of $y$ and integrate $dy$.',
  ],
  reading: [
    {
      title: 'OpenStax Calculus Volume 1 — 6.2 Determining Volumes by Slicing',
      url: 'https://openstax.org/books/calculus-volume-1/pages/6-2-determining-volumes-by-slicing',
      source: 'openstax',
      note: 'Free textbook section with 3D figures of disks and washers and many more worked examples.',
    },
    {
      title: "Paul's Online Notes — Volumes of Solids of Revolution / Method of Rings",
      url: 'https://tutorial.math.lamar.edu/Classes/CalcI/VolumeWithRings.aspx',
      source: 'paul',
      note: 'Clear set-up advice and examples rotating about lines like $y = -1$ and $x = 4$.',
    },
    {
      title: "Paul's Online Notes — More Volume Problems",
      url: 'https://tutorial.math.lamar.edu/Classes/CalcI/MoreVolume.aspx',
      source: 'paul',
      note: 'Solids with square, triangular and semicircular cross-sections that are not solids of revolution.',
    },
  ],
};
