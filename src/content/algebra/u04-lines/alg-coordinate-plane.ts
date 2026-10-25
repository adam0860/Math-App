import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'alg-coordinate-plane',
  title: 'The Coordinate Plane, Distance and Midpoint',
  summary: 'Turn geometry into arithmetic: locate points with coordinates, measure the distance between them, and find the point halfway between.',
  minutes: 17,
  objectives: [
    'Plot ordered pairs and name the quadrant (or axis) a point lies on',
    'Find horizontal and vertical distances using absolute value',
    'Derive the distance formula from the Pythagorean theorem and use it, giving exact and decimal answers',
    'Find the midpoint of a segment, and a missing endpoint from a midpoint',
    'Use linear interpolation (lerp) to find any point a fraction of the way along a segment',
  ],
  steps: [
    // 1 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Addresses for points',
      blocks: [
        {
          type: 'p',
          text: 'Take two [[number-line|number lines]], one horizontal and one vertical, and make them cross at their zeros. You have built the [[coordinate-plane]] (also called the Cartesian plane). The horizontal line is the **$x$-axis**, the vertical one is the **$y$-axis**, and the point where they cross is the [[origin]], $(0, 0)$.',
        },
        {
          type: 'p',
          text: 'Every point now has an address: an [[ordered-pair]] $(x, y)$. Start at the origin, move $x$ units horizontally (right if positive, left if negative), then $y$ units vertically (up if positive, down if negative). The point $(3, 2)$ is three right and two up; $(-4, 1)$ is four left and one up.',
        },
        {
          type: 'definition',
          term: 'Ordered pair',
          text: 'A pair of numbers $(x, y)$ in which **order matters**: the first number is the horizontal coordinate ($x$-coordinate), the second is the vertical coordinate ($y$-coordinate). $(2, 5)$ and $(5, 2)$ are different points.',
        },
        {
          type: 'graph',
          x: [-5, 5],
          y: [-5, 5],
          equal: true,
          points: [
            { x: 3, y: 2, label: '(3, 2)  I', color: 'blue' },
            { x: -4, y: 1, label: '(−4, 1)  II', color: 'red' },
            { x: -2, y: -3, label: '(−2, −3)  III', color: 'green' },
            { x: 1, y: -4, label: '(1, −4)  IV', color: 'purple' },
            { x: 0, y: 3, label: '(0, 3) on the y-axis', color: 'gray' },
          ],
          caption: 'The axes split the plane into four [[quadrant|quadrants]], numbered I to IV counter-clockwise starting from the top right. A point *on* an axis, like $(0, 3)$, belongs to no quadrant.',
        },
        {
          type: 'table',
          headers: ['Quadrant', 'sign of $x$', 'sign of $y$', 'example'],
          rows: [
            ['I', '$+$', '$+$', '$(3, 2)$'],
            ['II', '$-$', '$+$', '$(-4, 1)$'],
            ['III', '$-$', '$-$', '$(-2, -3)$'],
            ['IV', '$+$', '$-$', '$(1, -4)$'],
          ],
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why this idea was a revolution',
          text: 'Before coordinates, geometry was pictures and algebra was symbols, and the two barely spoke. Coordinates turn every geometric question — how far apart? halfway where? do these lines cross? — into arithmetic on numbers. Everything in this unit (distance, slope, equations of lines and circles) is that translation at work.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Screen coordinates are flipped',
          text: 'In most graphics APIs (SDL, HTML canvas, many game engines\' 2D UI) the origin is the **top-left** corner of the window and $y$ grows **downward**. The math is identical; only the direction of "positive $y$" changes. Forgetting this is why sprites sometimes jump the wrong way the first time you code gravity.',
        },
        {
          type: 'callout',
          variant: 'history',
          text: 'The plane is called *Cartesian* after René Descartes, whose 1637 *La Géométrie* showed how to describe curves with equations. Pierre de Fermat had the same idea independently at about the same time.',
        },
      ],
    },
    // 2
    {
      kind: 'mcq',
      prompt: 'Where does the point $(0, -4)$ lie?',
      options: [
        { text: 'In quadrant III', why: 'Quadrant III needs *both* coordinates negative. Here $x = 0$, which is neither positive nor negative.' },
        { text: 'In quadrant IV', why: 'Quadrant IV needs $x > 0$. With $x = 0$ the point never leaves the vertical axis.' },
        { text: 'On the $y$-axis', correct: true, why: 'An $x$-coordinate of $0$ means "move zero units left or right", so the point sits on the vertical axis, 4 units below the origin.' },
        { text: 'On the $x$-axis', why: 'Points on the $x$-axis have $y = 0$ — like $(-4, 0)$. This option swaps the roles of the coordinates.' },
      ],
      explanation: 'Read the pair in order: move $0$ horizontally, then $4$ down. You stay on the $y$-axis the whole time. Points on an axis are boundaries between quadrants, so they belong to none of them. A quick rule: $x = 0$ means on the $y$-axis; $y = 0$ means on the $x$-axis.',
    },
    // 3 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Distance along a grid line',
      blocks: [
        {
          type: 'p',
          text: 'Start with the easy case. The points $(-3, 2)$ and $(5, 2)$ have the same $y$-coordinate, so they lie on one horizontal line. The distance between them is how far you slide along that line: from $-3$ to $5$ is $8$ units.',
        },
        {
          type: 'p',
          text: 'Subtraction gives this directly: $5 - (-3) = 8$. But if you subtract the other way, $-3 - 5 = -8$, and a distance can\'t be negative. The fix is the tool built for exactly this job, [[absolute-value]]: the distance between two numbers $a$ and $b$ on a number line is $|a - b|$, whichever order you subtract in.',
        },
        {
          type: 'theorem',
          name: 'Horizontal and vertical distance',
          text: 'Points on a horizontal line, $(x_1, y)$ and $(x_2, y)$, are $|x_2 - x_1|$ apart.\n\nPoints on a vertical line, $(x, y_1)$ and $(x, y_2)$, are $|y_2 - y_1|$ apart.',
        },
        {
          type: 'derivation',
          title: 'Distance between $(4, -7)$ and $(4, 3)$',
          steps: [
            { tex: 'x_1 = x_2 = 4', why: 'Same $x$-coordinate, so both points sit on the vertical line $x = 4$. Only the $y$-values matter.' },
            { tex: 'd = |3 - (-7)|', why: 'Vertical distance is the absolute difference of the $y$-coordinates.' },
            { tex: '= |10| = 10', why: 'Subtracting a negative adds: $3 + 7 = 10$. Check by counting: $7$ units up to the $x$-axis, then $3$ more.' },
          ],
          result: 'The points are $10$ units apart.',
        },
        {
          type: 'callout',
          variant: 'tip',
          text: 'Points on *opposite* sides of an axis are farther apart than their coordinates "look". From $y = -7$ to $y = 3$ you cross zero, so the distances to the axis **add** ($7 + 3$). Subtracting with the sign intact, $3 - (-7)$, handles this automatically.',
        },
      ],
    },
    // 4
    {
      kind: 'numeric',
      prompt: 'How far apart are the points $(2, -6)$ and $(2, 3)$?',
      hint: 'They share an $x$-coordinate, so the distance is $|y_2 - y_1|$.',
      label: '$d =$',
      answer: '9',
      explanation: 'Both points are on the vertical line $x = 2$. The distance is $|3 - (-6)| = |3 + 6| = 9$. Counting confirms it: $6$ units up to the $x$-axis plus $3$ more is $9$. A common slip is $3 - 6 = -3$, which forgets that subtracting $-6$ means adding $6$.',
    },
    // 5 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'The distance formula is Pythagoras in disguise',
      blocks: [
        {
          type: 'p',
          text: 'Now take two points that are *not* lined up, say $A = (1, 1)$ and $B = (5, 4)$. Walk from $A$ horizontally until you are directly below $B$, then straight up to $B$. Those two legs and the segment $AB$ form a **right triangle**, and you already know how to measure each leg from the previous card.',
        },
        {
          type: 'p',
          text: 'The horizontal leg has length $|x_2 - x_1| = 4$ and the vertical leg $|y_2 - y_1| = 3$. The [[pythagorean-theorem]] says the legs $a, b$ and hypotenuse $c$ of a right triangle satisfy $a^2 + b^2 = c^2$. So $AB^2 = 4^2 + 3^2 = 25$ and $AB = 5$. Move point $B$ with the sliders and watch the triangle follow it.',
        },
        {
          type: 'graph',
          x: [-4, 7],
          y: [-4, 7],
          equal: true,
          segments: [
            { from: [1, 1], to: ['p', 1], dashed: true, color: 'orange', label: 'Δx' },
            { from: ['p', 1], to: ['p', 'q'], dashed: true, color: 'green', label: 'Δy' },
            { from: [1, 1], to: ['p', 'q'], color: 'blue', label: 'd' },
          ],
          points: [
            { x: 1, y: 1, label: 'A (1, 1)', color: 'red' },
            { x: 'p', y: 'q', label: 'B', color: 'blue' },
          ],
          sliders: [
            { name: 'p', min: -3, max: 6, step: 1, value: 5, label: '$x$-coordinate of $B$' },
            { name: 'q', min: -3, max: 6, step: 1, value: 4, label: '$y$-coordinate of $B$' },
          ],
          readouts: [
            { label: '$\\Delta x = x_2 - x_1 =$', expr: 'p - 1', digits: 0 },
            { label: '$\\Delta y = y_2 - y_1 =$', expr: 'q - 1', digits: 0 },
            { label: '$d = \\sqrt{\\Delta x^2 + \\Delta y^2} \\approx$', expr: 'sqrt((p-1)^2 + (q-1)^2)', digits: 3 },
          ],
          caption: 'Whatever quadrant $B$ lands in, the dashed legs and the blue segment form a right triangle. Try $B = (-3, -2)$: the legs are $4$ and $3$ again, so $d = 5$ again.',
        },
        {
          type: 'theorem',
          name: 'Distance formula',
          tex: 'd = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}',
          text: 'The [[distance-formula]] gives the distance between $(x_1, y_1)$ and $(x_2, y_2)$.',
        },
        {
          type: 'derivation',
          title: 'Distance from $(-2, 1)$ to $(4, 9)$',
          steps: [
            { tex: 'd = \\sqrt{(4 - (-2))^2 + (9 - 1)^2}', why: 'Label $(x_1, y_1) = (-2, 1)$ and $(x_2, y_2) = (4, 9)$, then substitute. Parentheses around $-2$ keep the signs straight.' },
            { tex: '= \\sqrt{6^2 + 8^2}', why: 'Horizontal change $4 + 2 = 6$; vertical change $9 - 1 = 8$.' },
            { tex: '= \\sqrt{36 + 64}', why: 'Square each change *separately* before adding.' },
            { tex: '= \\sqrt{100} = 10', why: 'Add under the radical, then take the square root.' },
          ],
          result: 'The points are exactly $10$ units apart (a $6$–$8$–$10$ right triangle).',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the absolute values disappear',
          text: 'The legs have lengths $|x_2 - x_1|$ and $|y_2 - y_1|$, so strictly Pythagoras gives $d^2 = |x_2 - x_1|^2 + |y_2 - y_1|^2$. But squaring already makes any number non-negative, and $|a|^2 = a^2$ for every real $a$. So the absolute value bars are redundant, and the order of subtraction no longer matters: $(-6)^2 = 6^2$.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Skip the square root when you can',
          text: '"Is the enemy within 50 pixels?" is asked thousands of times per frame in a game. Since both sides are non-negative, $d < 50$ is equivalent to $d^2 < 2500$, and comparing $dx \\cdot dx + dy \\cdot dy$ against $2500$ avoids the comparatively slow `sqrt` call. Engines expose this as a `LengthSquared()` or `distSq()` function for exactly this reason.',
        },
      ],
    },
    // 6
    {
      kind: 'numeric',
      prompt: 'Find the distance between $(-3, 4)$ and $(2, -8)$.',
      hint: 'Horizontal change: $2 - (-3)$. Vertical change: $-8 - 4$. Square each, add, take the square root.',
      label: '$d =$',
      answer: '13',
      explanation: '$d = \\sqrt{(2 - (-3))^2 + (-8 - 4)^2} = \\sqrt{5^2 + (-12)^2} = \\sqrt{25 + 144} = \\sqrt{169} = 13$. The negative change $-12$ is harmless: squaring makes it $144$. ($5$–$12$–$13$ is another classic right triangle, like $3$–$4$–$5$ and $6$–$8$–$10$.)',
    },
    // 7
    {
      kind: 'truefalse',
      prompt: 'When using the distance formula, it doesn\'t matter which point you call $(x_1, y_1)$ and which you call $(x_2, y_2)$.',
      answer: true,
      explanation: 'Swapping the points flips the sign of each difference: $x_1 - x_2 = -(x_2 - x_1)$. But each difference is squared, and $(-a)^2 = a^2$, so the sum under the radical — and the distance — is unchanged. Geometrically: the distance from $A$ to $B$ is the distance from $B$ to $A$. (In the next lesson, on slope, the order of subtraction *will* need to be consistent.)',
    },
    // 8 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Exact answers and a tempting mistake',
      blocks: [
        {
          type: 'p',
          text: 'Most pairs of points are not a tidy $3$–$4$–$5$ apart. Then the distance is an irrational number, and a college course usually wants it in **exact simplified radical form**, sometimes with a decimal approximation too. Simplifying works as in the radicals lesson: pull out the largest perfect-square factor.',
        },
        {
          type: 'derivation',
          title: 'Distance from $(2, 3)$ to $(-4, 6)$',
          steps: [
            { tex: 'd = \\sqrt{(-4 - 2)^2 + (6 - 3)^2}', why: 'Substitute $(x_1, y_1) = (2, 3)$ and $(x_2, y_2) = (-4, 6)$.' },
            { tex: '= \\sqrt{(-6)^2 + 3^2} = \\sqrt{36 + 9}', why: 'Square each change; $(-6)^2 = +36$.' },
            { tex: '= \\sqrt{45}', why: 'Add under the radical. $45$ is not a perfect square, so the answer is irrational.' },
            { tex: '= \\sqrt{9 \\cdot 5} = 3\\sqrt{5}', why: '$9$ is the largest perfect square dividing $45$, and $\\sqrt{9 \\cdot 5} = \\sqrt{9}\\sqrt{5}$.' },
            { tex: '\\approx 6.708', why: 'Use a calculator only at the very end, if a decimal is requested.' },
          ],
          result: 'The exact distance is $3\\sqrt{5} \\approx 6.71$.',
        },
        {
          type: 'compare',
          left: {
            title: 'Wrong',
            tone: 'bad',
            tex: ['\\sqrt{36 + 9} = \\sqrt{36} + \\sqrt{9}', '= 6 + 3 = 9'],
            text: 'A square root does **not** split over a sum.',
          },
          right: {
            title: 'Right',
            tone: 'good',
            tex: ['\\sqrt{36 + 9} = \\sqrt{45}', '= 3\\sqrt{5} \\approx 6.71'],
            text: 'Add first, then take the root. (Square roots split over *products*: $\\sqrt{9 \\cdot 5} = 3\\sqrt{5}$.)',
          },
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the shortcut has to be wrong',
          text: '$6 + 3 = 9$ would be the length of the walk along the two legs of the triangle — right $6$, then up $3$. The straight path (the hypotenuse) is always *shorter* than that detour, because a straight line is the shortest route between two points. So $\\sqrt{a^2 + b^2} < a + b$ whenever both legs are positive.',
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'Instructors read "find the distance" as "find the exact distance" unless told to round. An answer of $6.71$ where $3\\sqrt{5}$ was expected often loses points; giving both, $3\\sqrt{5} \\approx 6.71$, is always safe.',
        },
      ],
    },
    // 9
    {
      kind: 'error',
      prompt: 'A student finds the distance between $(-1, 3)$ and $(4, -9)$. Tap the first line that is wrong.',
      lines: [
        '$d = \\sqrt{(4 - (-1))^2 + (-9 - 3)^2}$',
        '$= \\sqrt{3^2 + (-12)^2}$',
        '$= \\sqrt{9 + 144}$',
        '$= \\sqrt{153} \\approx 12.37$',
      ],
      errorLines: [2],
      explanation: 'Line 2 computes $4 - (-1)$ as $3$; subtracting a negative adds, so it is $4 + 1 = 5$. With the correct change the work is $\\sqrt{5^2 + (-12)^2} = \\sqrt{25 + 144} = \\sqrt{169} = 13$. Line 1 set up the formula correctly, and lines 3–4 are carried out correctly — on the wrong number.',
    },
    // 10
    {
      kind: 'numeric',
      prompt: 'Find the exact distance between $(1, 1)$ and $(5, 3)$. (Type a radical such as `2sqrt(3)`, or a decimal rounded to 2 places.)',
      hint: 'The changes are $4$ and $2$. Then simplify the radical.',
      label: '$d =$',
      answer: 'sqrt(20)',
      answerTex: '2\\sqrt{5} \\approx 4.47',
      explanation: '$d = \\sqrt{(5 - 1)^2 + (3 - 1)^2} = \\sqrt{16 + 4} = \\sqrt{20}$. Since $20 = 4 \\cdot 5$, $\\sqrt{20} = \\sqrt{4}\\sqrt{5} = 2\\sqrt{5} \\approx 4.47$. Note that $\\sqrt{20}$ is *not* $4 + 2 = 6$: the straight path is shorter than walking the two legs.',
    },
    // 11 ────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'The midpoint: average the coordinates',
      blocks: [
        {
          type: 'p',
          text: 'The **midpoint** of a segment is the point exactly halfway between its endpoints. On a number line, halfway between $2$ and $8$ is their average, $\\frac{2 + 8}{2} = 5$. In the plane you do this twice: once for the $x$-coordinates and once for the $y$-coordinates.',
        },
        {
          type: 'theorem',
          name: 'Midpoint formula',
          tex: 'M = \\left( \\frac{x_1 + x_2}{2},\\ \\frac{y_1 + y_2}{2} \\right)',
          text: 'The [[midpoint-formula]]: the midpoint of the segment from $(x_1, y_1)$ to $(x_2, y_2)$.',
        },
        {
          type: 'graph',
          x: [-6, 6],
          y: [-6, 6],
          equal: true,
          segments: [{ from: ['a', 'b'], to: ['c', 'd'], color: 'blue' }],
          points: [
            { x: 'a', y: 'b', label: 'A', color: 'blue' },
            { x: 'c', y: 'd', label: 'B', color: 'blue' },
            { x: '(a+c)/2', y: '(b+d)/2', label: 'M', color: 'red' },
          ],
          sliders: [
            { name: 'a', min: -5, max: 5, step: 1, value: -4, label: '$x_1$' },
            { name: 'b', min: -5, max: 5, step: 1, value: -3, label: '$y_1$' },
            { name: 'c', min: -5, max: 5, step: 1, value: 4, label: '$x_2$' },
            { name: 'd', min: -5, max: 5, step: 1, value: 5, label: '$y_2$' },
          ],
          readouts: [
            { label: 'midpoint $x = \\frac{x_1 + x_2}{2} =$', expr: '(a+c)/2', digits: 1 },
            { label: 'midpoint $y = \\frac{y_1 + y_2}{2} =$', expr: '(b+d)/2', digits: 1 },
          ],
          caption: 'Drag the endpoints anywhere: $M$ always sits on the segment, splitting it into two equal halves.',
        },
        {
          type: 'derivation',
          title: 'Midpoint of $(-2, 1)$ and $(4, 9)$',
          steps: [
            { tex: 'x_M = \\frac{-2 + 4}{2} = \\frac{2}{2} = 1', why: 'Average the $x$-coordinates: **add** them, then divide by $2$.' },
            { tex: 'y_M = \\frac{1 + 9}{2} = \\frac{10}{2} = 5', why: 'Average the $y$-coordinates the same way.' },
            { tex: 'M = (1, 5)', why: 'Put the two averages together as an ordered pair.' },
          ],
          result: 'The midpoint is $(1, 5)$. Check: the distance formula gives $AM = MB = 5$, half of the full $10$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why averaging works',
          text: 'Going from $x_1$ to $x_2$ is a change of $x_2 - x_1$. Halfway means half of that change: $x_1 + \\frac{x_2 - x_1}{2} = \\frac{2x_1 + x_2 - x_1}{2} = \\frac{x_1 + x_2}{2}$. The same algebra works for $y$. Because horizontal and vertical motion are independent, going halfway in each direction lands you halfway along the slanted segment.',
        },
        {
          type: 'callout',
          variant: 'warning',
          text: 'The midpoint formula **adds** the coordinates; the distance formula **subtracts** them. Mixing these up — computing $\\frac{x_2 - x_1}{2}$ — gives half the horizontal change, which is a length, not a location.',
        },
      ],
    },
    // 12
    {
      kind: 'mcq',
      prompt: 'What is the midpoint of the segment joining $(-2, 7)$ and $(6, -1)$?',
      options: [
        { text: '$(4, -4)$', why: 'This is $\\left(\\frac{6 - (-2)}{2}, \\frac{-1 - 7}{2}\\right)$: the coordinates were *subtracted*, which gives half the change, not the middle location.' },
        { text: '$(4, 6)$', why: 'These are the sums $-2 + 6$ and $7 + (-1)$, but they were never divided by $2$.' },
        { text: '$(2, 3)$', correct: true, why: '$\\frac{-2 + 6}{2} = 2$ and $\\frac{7 + (-1)}{2} = 3$.' },
        { text: '$(-2, 3)$', why: 'The $y$-coordinate is right, but $\\frac{-2 + 6}{2} = \\frac{4}{2} = 2$, not $-2$ — a sign slip.' },
      ],
      explanation: 'Average each coordinate: $x_M = \\frac{-2 + 6}{2} = 2$ and $y_M = \\frac{7 + (-1)}{2} = 3$, so $M = (2, 3)$. Sanity check: $2$ is between $-2$ and $6$, and $3$ is between $-1$ and $7$. A midpoint always lies between the endpoints in both coordinates.',
    },
    // 13 ────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Beyond halfway: lerp and missing endpoints',
      blocks: [
        {
          type: 'p',
          text: 'The "why averaging works" argument generalises. To go a fraction $t$ of the way from $A = (x_1, y_1)$ to $B = (x_2, y_2)$, start at $A$ and add the fraction $t$ of each change. This is [[linear-interpolation]], universally called **lerp** in programming:',
        },
        {
          type: 'math',
          tex: 'P(t) = \\big(x_1 + t\\,(x_2 - x_1),\\ \\ y_1 + t\\,(y_2 - y_1)\\big), \\qquad 0 \\le t \\le 1',
          caption: '$t = 0$ gives $A$, $t = 1$ gives $B$, and $t = \\frac{1}{2}$ gives the midpoint.',
        },
        {
          type: 'graph',
          x: [-4, 6],
          y: [-1, 10],
          equal: true,
          segments: [{ from: [-2, 1], to: [4, 9], color: 'gray' }],
          points: [
            { x: -2, y: 1, label: 'A (−2, 1)', color: 'blue' },
            { x: 4, y: 9, label: 'B (4, 9)', color: 'blue' },
            { x: '-2 + 6u', y: '1 + 8u', label: 'P', color: 'red' },
          ],
          sliders: [{ name: 'u', min: 0, max: 1, step: 0.05, value: 0.25, label: 'fraction of the way, $t$' }],
          readouts: [
            { label: '$x = -2 + 6t =$', expr: '-2 + 6u', digits: 2 },
            { label: '$y = 1 + 8t =$', expr: '1 + 8u', digits: 2 },
          ],
          caption: 'Slide $t$ from $0$ to $1$ and $P$ glides at constant speed from $A$ to $B$ — this is how a game moves a sprite smoothly between two positions.',
        },
        {
          type: 'p',
          text: 'Running the midpoint formula **backwards** answers another common question: if you know one endpoint and the midpoint, where is the other endpoint? The midpoint is halfway, so the other endpoint is the same step again *past* the midpoint.',
        },
        {
          type: 'derivation',
          title: 'Midpoint $M = (3, -1)$, endpoint $A = (1, 4)$: find $B$',
          steps: [
            { tex: '\\frac{1 + x_2}{2} = 3', why: 'The midpoint\'s $x$-coordinate is the average of the endpoints\' $x$-coordinates.' },
            { tex: '1 + x_2 = 6 \\implies x_2 = 5', why: 'Multiply both sides by $2$, then subtract $1$.' },
            { tex: '\\frac{4 + y_2}{2} = -1', why: 'Same idea for $y$.' },
            { tex: '4 + y_2 = -2 \\implies y_2 = -6', why: 'Multiply by $2$, then subtract $4$.' },
          ],
          result: '$B = (5, -6)$. Shortcut: from $A$ to $M$ is $+2$ in $x$ and $-5$ in $y$; repeat that step from $M$ to land on $(5, -6)$.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'lerp is everywhere',
          text: 'Unity has `Vector2.Lerp`, Unreal has `FMath::Lerp`, shaders have `mix`, and C++20 added `std::lerp`. Animating a camera, fading a colour between two RGB values, or blending two keyframes are all the same formula $a + t(b - a)$ applied coordinate by coordinate.',
        },
        {
          type: 'code',
          title: 'lerp.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdio>

struct Vec2 { double x, y; };

double distance(Vec2 a, Vec2 b) {
    double dx = b.x - a.x, dy = b.y - a.y;
    return std::sqrt(dx * dx + dy * dy);
}

Vec2 lerp(Vec2 a, Vec2 b, double t) {
    return { a.x + t * (b.x - a.x), a.y + t * (b.y - a.y) };
}

int main() {
    Vec2 player{-2, 1}, enemy{4, 9};
    std::printf("distance = %.2f\\n", distance(player, enemy));
    for (double t = 0.0; t <= 1.0; t += 0.25) {
        Vec2 p = lerp(player, enemy, t);
        std::printf("t = %.2f  (%.1f, %.1f)\\n", t, p.x, p.y);
    }
}`,
          output: `distance = 10.00
t = 0.00  (-2.0, 1.0)
t = 0.25  (-0.5, 3.0)
t = 0.50  (1.0, 5.0)
t = 0.75  (2.5, 7.0)
t = 1.00  (4.0, 9.0)`,
          annotations: [
            { lines: '6-9', text: 'The distance formula: changes $dx$ and $dy$, squared, added, square-rooted.' },
            { lines: '11-13', text: 'lerp: start at $a$ and add the fraction $t$ of the change, separately for $x$ and $y$.' },
            { lines: 18, text: '$0.25$ is exactly representable in binary, so this loop really does reach $t = 1$.' },
          ],
        },
      ],
    },
    // 14
    {
      kind: 'fill',
      prompt: 'The midpoint of a segment is $M = (4, 2)$ and one endpoint is $A = (-1, 5)$. Find the other endpoint $B$.',
      template: '$B = ($ ___ $,$ ___ $)$',
      blanks: [{ answers: ['9'] }, { answers: ['-1'] }],
      hint: 'Solve $\\frac{-1 + x_2}{2} = 4$ and $\\frac{5 + y_2}{2} = 2$, or repeat the step from $A$ to $M$.',
      explanation: 'From $\\frac{-1 + x_2}{2} = 4$: $-1 + x_2 = 8$, so $x_2 = 9$. From $\\frac{5 + y_2}{2} = 2$: $5 + y_2 = 4$, so $y_2 = -1$. Check with the step method: $A \\to M$ is $+5$ in $x$ and $-3$ in $y$; doing it again from $M = (4, 2)$ gives $(9, -1)$. ✓',
    },
    // 15
    {
      kind: 'mcq',
      prompt: 'A triangle has vertices $A(0, 0)$, $B(4, 0)$ and $C(2, 5)$. Use the distance formula to classify it.',
      options: [
        { text: 'Equilateral (all three sides equal)', why: '$AB = 4$, but $AC = \\sqrt{29} \\approx 5.39$, so not all sides match.' },
        { text: 'Isosceles but not equilateral', correct: true, why: '$AC = BC = \\sqrt{29}$ while $AB = 4$: exactly two equal sides.' },
        { text: 'Scalene (no equal sides)', why: 'Compute carefully: $AC = \\sqrt{2^2 + 5^2}$ and $BC = \\sqrt{(2 - 4)^2 + 5^2}$ are both $\\sqrt{29}$.' },
        { text: 'A right triangle', why: 'For a right angle the squared sides would satisfy $a^2 + b^2 = c^2$, but $16 + 29 = 45 \\ne 29$ and $29 + 29 = 58 \\ne 16$.' },
      ],
      explanation: '$AB = \\sqrt{4^2 + 0^2} = 4$, $AC = \\sqrt{2^2 + 5^2} = \\sqrt{29}$, $BC = \\sqrt{(2-4)^2 + (5-0)^2} = \\sqrt{4 + 25} = \\sqrt{29}$. Two equal sides make it isosceles. That also makes sense from the picture: $C$ is directly above the midpoint $(2, 0)$ of $AB$, so it is equally far from $A$ and $B$.',
    },
  ],
  takeaways: [
    'An ordered pair $(x, y)$ locates a point: $x$ horizontally, then $y$ vertically. Points on an axis lie in no quadrant.',
    'Horizontal or vertical distance is an absolute difference: $|x_2 - x_1|$ or $|y_2 - y_1|$.',
    'The distance formula $d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$ is the Pythagorean theorem applied to the right triangle with legs $\\Delta x$ and $\\Delta y$.',
    '$\\sqrt{a^2 + b^2} \\ne a + b$: add under the radical first, then simplify (e.g. $\\sqrt{45} = 3\\sqrt{5}$).',
    'The midpoint averages the coordinates: $\\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right)$; lerp $a + t(b - a)$ generalises it to any fraction $t$.',
  ],
  reading: [
    {
      title: 'OpenStax College Algebra 2e — 2.1 The Rectangular Coordinate Systems and Graphs',
      url: 'https://openstax.org/books/college-algebra-2e/pages/2-1-the-rectangular-coordinate-systems-and-graphs',
      source: 'openstax',
      note: 'The textbook section covering plotting points, the distance formula and the midpoint formula, with many exercises.',
    },
    {
      title: "Paul's Online Notes — Graphing",
      url: 'https://tutorial.math.lamar.edu/Classes/Alg/Graphing.aspx',
      source: 'paul',
      note: 'Paul\'s introduction to the rectangular coordinate system and graphing, at college pace.',
    },
    {
      title: 'Wikipedia — Linear interpolation',
      url: 'https://en.wikipedia.org/wiki/Linear_interpolation',
      source: 'wikipedia',
      note: 'The lerp formula and its many uses in computer graphics and numerical computing.',
    },
  ],
};
