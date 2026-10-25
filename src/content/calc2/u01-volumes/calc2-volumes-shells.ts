import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'calc2-volumes-shells',
  title: 'Volumes by Cylindrical Shells',
  summary: 'Slice parallel to the axis instead of across it: thin nested cylinders make some impossible-looking volumes easy.',
  minutes: 17,
  objectives: [
    'Derive the volume of a thin cylindrical shell, $2\\pi r h\\,\\Delta r$',
    'Set up and evaluate shell integrals for rotation about the $y$-axis and the $x$-axis',
    'Find the radius and height of a shell when the axis is a line such as $x = 3$ or $x = -1$',
    'Choose between shells and washers by looking at the region and the axis',
  ],
  steps: [
    // 1 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'When washers get stuck',
      blocks: [
        {
          type: 'p',
          text: 'Rotate the region under $y = 2x^2 - x^3$ for $0 \\le x \\le 2$ about the $y$-axis. The [[washer-method]] needs horizontal slices, so it needs the radii as functions of $y$: you would have to solve $y = 2x^2 - x^3$ for $x$. That is a cubic equation, and each horizontal line hits the curve *twice* (once on the rising side, once on the falling side). Possible in principle, miserable in practice.',
        },
        {
          type: 'p',
          text: 'The way out is to slice the other way. Take a thin **vertical** strip at position $x$, of width $dx$ and height $f(x)$. Spin it around the $y$-axis. It does not sweep out a disk — it sweeps out a thin-walled tube, like a paper towel roll standing on end, with radius $x$ and height $f(x)$. The whole solid is a set of these tubes nested inside each other, like the rings of a tree trunk or the layers of an onion. That is the [[shell-method]].',
        },
        {
          type: 'graph',
          x: [-2.4, 2.4],
          y: [-0.4, 1.8],
          equal: true,
          functions: [
            { expr: '2x^2 - x^3', label: '$y = 2x^2 - x^3$', color: 'blue', domain: [0, 2] },
            { expr: '2x^2 + x^3', label: 'mirror image across the axis', color: 'gray', dashed: true, domain: [-2, 0] },
          ],
          areas: [
            { expr: '2x^2 - x^3', from: 0, to: 2, color: 'blue' },
            { expr: '2x^2 - x^3', from: 'a', to: 'a + 0.08', color: 'orange' },
            { expr: '2x^2 + x^3', from: '-a - 0.08', to: '-a', color: 'orange' },
          ],
          segments: [
            { from: [0, -0.15], to: ['a', -0.15], color: 'red', arrow: true, label: 'radius x' },
            { from: ['a', 0], to: ['a', '2a^2 - a^3'], color: 'purple', label: 'height f(x)' },
          ],
          vlines: [{ x: 0, label: 'axis', color: 'gray' }],
          sliders: [{ name: 'a', min: 0.1, max: 1.9, step: 0.02, value: 1.2, label: 'strip position $x$' }],
          readouts: [
            { label: 'radius $x =$', expr: 'a', digits: 3 },
            { label: 'height $f(x) =$', expr: '2a^2 - a^3', digits: 3 },
            { label: 'shell "wall area" $2\\pi x f(x) =$', expr: '2pi*a*(2a^2 - a^3)', digits: 3 },
          ],
          caption: 'The orange strip at $x$ and its mirror copy at $-x$ are the two sides of one cylindrical shell, seen in cross-section. Slide $x$: shells near the axis are skinny tubes, shells farther out are wide ones.',
        },
        {
          type: 'theorem',
          name: 'Shell method (rotation about the $y$-axis)',
          tex: 'V = \\int_a^b 2\\pi\\,x\\,f(x)\\,dx',
          text: 'for the region under $y = f(x) \\ge 0$, $0 \\le a \\le x \\le b$, with $f$ continuous. Read it as $\\int (\\text{circumference})(\\text{height})(\\text{thickness})$.',
        },
        {
          type: 'derivation',
          title: 'Volume of the solid from $y = 2x^2 - x^3$, $0 \\le x \\le 2$, about the $y$-axis',
          steps: [
            { tex: '\\text{radius} = x, \\quad \\text{height} = 2x^2 - x^3', why: 'A vertical strip at $x$ is at distance $x$ from the $y$-axis, and it runs from the $x$-axis up to the curve.' },
            { tex: 'V = \\int_0^2 2\\pi x\\left(2x^2 - x^3\\right) dx', why: 'Shell formula: circumference $2\\pi x$ times height times thickness $dx$, added up across the region.' },
            { tex: '= 2\\pi \\int_0^2 \\left(2x^3 - x^4\\right) dx', why: 'Pull out $2\\pi$ and distribute the $x$.' },
            { tex: '= 2\\pi\\left[\\frac{x^4}{2} - \\frac{x^5}{5}\\right]_0^2', why: 'Power rule on each term.' },
            { tex: '= 2\\pi\\left(8 - \\frac{32}{5}\\right) = 2\\pi \\cdot \\frac{8}{5}', why: 'Evaluate at $2$: $\\frac{16}{2} = 8$ and $\\frac{32}{5}$; the lower limit gives $0$.' },
            { tex: '= \\frac{16\\pi}{5}', why: 'About $10.05$ cubic units — and we never had to solve a cubic.' },
          ],
          result: '$V = \\frac{16\\pi}{5}$.',
        },
      ],
    },
    // 2 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Why a shell has volume $2\\pi r h\\,\\Delta r$',
      blocks: [
        {
          type: 'p',
          text: 'A cylindrical shell is the solid between two cylinders with the same height $h$: inner radius $r_1$, outer radius $r_2$. Its volume is exactly the big cylinder minus the small one. A little algebra shows why the shell formula looks the way it does.',
        },
        {
          type: 'derivation',
          title: 'Exact volume of a shell',
          steps: [
            { tex: 'V_{\\text{shell}} = \\pi r_2^2 h - \\pi r_1^2 h', why: 'Outer cylinder minus the hollow inside it.' },
            { tex: '= \\pi h\\,(r_2 + r_1)(r_2 - r_1)', why: 'Factor out $\\pi h$ and use the difference of squares $r_2^2 - r_1^2 = (r_2 + r_1)(r_2 - r_1)$.' },
            { tex: '= 2\\pi \\cdot \\frac{r_1 + r_2}{2} \\cdot h \\cdot (r_2 - r_1)', why: 'Multiply and divide by $2$ so the average radius $\\bar r = \\frac{r_1 + r_2}{2}$ appears.' },
            { tex: '= 2\\pi\\,\\bar r\\,h\\,\\Delta r', why: 'Write $\\Delta r = r_2 - r_1$ for the wall thickness. This is exact, not an approximation.' },
          ],
          result: 'Shell volume $=$ (circumference at the average radius) $\\times$ (height) $\\times$ (thickness).',
        },
        {
          type: 'callout',
          variant: 'analogy',
          title: 'Unroll the label',
          text: 'Peel the label off a soup can and lay it flat: it is a rectangle whose length is the can\'s circumference $2\\pi r$ and whose width is the can\'s height $h$. A thin shell is that label with a thickness $\\Delta r$, so it is almost a flat slab of volume $2\\pi r \\cdot h \\cdot \\Delta r$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the sum becomes the integral',
          text: 'Cut $[a, b]$ into strips of width $\\Delta x$ and let $\\bar x_i$ be the midpoint of strip $i$. Its shell has volume about $2\\pi \\bar x_i\\, f(\\bar x_i)\\,\\Delta x$ — the only approximation is replacing the curvy top by the height at the midpoint. Adding the shells gives a [[riemann-sum]] for $2\\pi x f(x)$, and letting $\\Delta x \\to 0$ turns it into $\\int_a^b 2\\pi x f(x)\\,dx$.',
        },
      ],
    },
    // 3
    {
      kind: 'mcq',
      prompt: 'The region under $y = x^2$ for $0 \\le x \\le 2$ is rotated about the **$y$-axis**. Use shells to find the volume.',
      hint: 'Radius $x$, height $x^2$, so the integrand is $2\\pi x \\cdot x^2$.',
      options: [
        { text: '$\\dfrac{16\\pi}{3}$', why: 'This is $2\\pi\\int_0^2 x^2\\,dx$: the radius factor $x$ was dropped. A shell\'s volume involves its circumference $2\\pi x$, not just $2\\pi$.' },
        { text: '$\\dfrac{32\\pi}{5}$', why: 'That is the disk-method volume about the **$x$-axis**, $\\pi\\int_0^2 x^4\\,dx$ — a different solid.' },
        { text: '$4$', why: 'This is $\\int_0^2 x^3\\,dx$ without the $2\\pi$. The circumference factor is essential.' },
        { text: '$8\\pi$', correct: true, why: '$2\\pi\\int_0^2 x \\cdot x^2\\,dx = 2\\pi\\left[\\frac{x^4}{4}\\right]_0^2 = 2\\pi \\cdot 4$.' },
      ],
      explanation: '$V = 2\\pi\\int_0^2 x^3\\,dx = 2\\pi \\cdot 4 = 8\\pi$. Check it with washers: horizontal slices have outer radius $2$ and inner radius $\\sqrt{y}$, so $V = \\pi\\int_0^4 (4 - y)\\,dy = \\pi(16 - 8) = 8\\pi$. Two methods, one solid, one answer.',
    },
    // 4
    {
      kind: 'numeric',
      prompt: 'The region between $y = x - x^2$ and the $x$-axis is rotated about the $y$-axis. Find the volume.',
      hint: 'The parabola meets the $x$-axis at $x = 0$ and $x = 1$. Integrate $2\\pi x(x - x^2)$.',
      answer: 'pi/6',
      answerTex: '\\frac{\\pi}{6}',
      label: '$V =$',
      explanation: 'Radius $x$, height $x - x^2$: $V = 2\\pi\\int_0^1 \\left(x^2 - x^3\\right)dx = 2\\pi\\left(\\frac13 - \\frac14\\right) = 2\\pi \\cdot \\frac{1}{12} = \\frac{\\pi}{6} \\approx 0.524$. With washers you would have to solve $y = x - x^2$ for $x$ using the quadratic formula — shells avoid that entirely.',
    },
    // 5 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Shells about the $x$-axis: horizontal strips',
      blocks: [
        {
          type: 'p',
          text: 'Shells always use strips **parallel** to the axis of rotation. So for rotation about the $x$-axis the strips are horizontal: at height $y$, with thickness $dy$. The shell\'s radius is the strip\'s distance from the $x$-axis, which is $y$, and its "height" is now the strip\'s horizontal length — right end minus left end.',
        },
        {
          type: 'theorem',
          name: 'Shell method (rotation about the $x$-axis)',
          tex: 'V = \\int_c^d 2\\pi\\,y\\,\\ell(y)\\,dy, \\qquad \\ell(y) = x_{\\text{right}}(y) - x_{\\text{left}}(y)',
        },
        {
          type: 'graph',
          x: [-0.5, 4.6],
          y: [-2.3, 2.5],
          equal: true,
          functions: [
            { expr: 'sqrt(x)', label: '$y = \\sqrt{x}$, i.e. $x = y^2$', color: 'blue', domain: [0, 4] },
            { expr: '-sqrt(x)', color: 'gray', dashed: true, domain: [0, 4] },
          ],
          areas: [{ expr: 'sqrt(x)', from: 0, to: 4, color: 'blue' }],
          vlines: [{ x: 4, label: 'x = 4', color: 'gray' }],
          segments: [
            { from: ['b^2', 'b'], to: [4, 'b'], color: 'purple', label: 'ℓ = 4 − y²' },
            { from: ['b^2', '-b'], to: [4, '-b'], color: 'purple', dashed: true },
            { from: [4.3, 0], to: [4.3, 'b'], color: 'red', arrow: true, label: 'r = y' },
          ],
          sliders: [{ name: 'b', min: 0.1, max: 1.95, step: 0.05, value: 1.2, label: 'strip height $y$' }],
          readouts: [{ label: 'shell wall area $2\\pi y(4 - y^2) =$', expr: '2pi*b*(4 - b^2)', digits: 3 }],
          caption: 'The horizontal purple strip at height $y$ spins about the $x$-axis into a shell lying on its side (its mirror copy is dashed). Radius $y$ (red), length $4 - y^2$.',
        },
        {
          type: 'derivation',
          title: 'Rotate the region under $y = \\sqrt{x}$, $0 \\le x \\le 4$, about the $x$-axis — by shells',
          steps: [
            { tex: 'y = \\sqrt{x} \\iff x = y^2 \\quad (y \\ge 0)', why: 'Horizontal strips need the boundaries as functions of $y$. The left end of the strip is on the curve $x = y^2$.' },
            { tex: '\\ell(y) = 4 - y^2, \\qquad 0 \\le y \\le 2', why: 'Right end $x = 4$ minus left end $x = y^2$. The strips run from $y = 0$ up to $y = \\sqrt{4} = 2$.' },
            { tex: 'V = \\int_0^2 2\\pi y\\left(4 - y^2\\right) dy', why: 'Circumference $2\\pi y$, length $\\ell(y)$, thickness $dy$.' },
            { tex: '= 2\\pi\\left[2y^2 - \\frac{y^4}{4}\\right]_0^2', why: 'Distribute: $4y - y^3$, then antidifferentiate.' },
            { tex: '= 2\\pi(8 - 4) = 8\\pi', why: 'Evaluate at $y = 2$.' },
          ],
          result: '$8\\pi$ — the same answer the disk method gave in the previous lesson, as it must be.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Parallel, not perpendicular',
          text: 'Disks and washers: slices **perpendicular** to the axis. Shells: strips **parallel** to the axis. So for the *same* axis, the two methods always use *different* variables. If you rotate about the $y$-axis, washers integrate $dy$ and shells integrate $dx$.',
        },
      ],
    },
    // 6
    {
      kind: 'numeric',
      prompt: 'The region between the curve $x = 2y - y^2$ and the $y$-axis is rotated about the $x$-axis. Use shells to find the volume.',
      hint: 'The curve meets the $y$-axis ($x = 0$) at $y = 0$ and $y = 2$. A horizontal strip at height $y$ has length $2y - y^2$ and radius $y$.',
      answer: '8pi/3',
      answerTex: '\\frac{8\\pi}{3}',
      label: '$V =$',
      explanation: '$V = 2\\pi\\int_0^2 y\\left(2y - y^2\\right)dy = 2\\pi\\int_0^2 \\left(2y^2 - y^3\\right)dy = 2\\pi\\left(\\frac{16}{3} - 4\\right) = 2\\pi\\cdot\\frac43 = \\frac{8\\pi}{3}$. Washers would need vertical slices, which means solving $x = 2y - y^2$ for $y$ — two branches again. The region is described naturally in $y$, so shells about the $x$-axis are the easy route.',
    },
    // 7
    {
      kind: 'truefalse',
      prompt: 'In the shell method, the representative strip is drawn perpendicular to the axis of rotation.',
      answer: false,
      explanation: 'Shell strips are **parallel** to the axis: spinning a strip that is parallel to the axis sweeps out a tube. A strip perpendicular to the axis sweeps out a disk or washer — that is the other method. Remembering this one fact tells you which variable to integrate in each method.',
    },
    // 8 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Other axes and regions between curves',
      blocks: [
        {
          type: 'p',
          text: 'Two adjustments handle almost every shell problem. The **radius** is the distance from the strip to the axis — for a vertical axis $x = k$ that is $|x - k|$, so $k - x$ if the axis is to the right of the region and $x - k$ if it is to the left. The **height** is the length of the strip inside the region — top curve minus bottom curve.',
        },
        {
          type: 'graph',
          x: [-0.4, 6.4],
          y: [-0.4, 4.4],
          equal: true,
          functions: [
            { expr: '2x', label: '$y = 2x$', color: 'blue', domain: [0, 2.1] },
            { expr: 'x^2', label: '$y = x^2$', color: 'green', domain: [0, 2.1] },
            { expr: '2(6 - x)', color: 'gray', dashed: true, domain: [4, 6] },
            { expr: '(6 - x)^2', color: 'gray', dashed: true, domain: [4, 6] },
          ],
          areas: [
            { expr: '2x', expr2: 'x^2', from: 0, to: 2, color: 'blue' },
            { expr: '2(6 - x)', expr2: '(6 - x)^2', from: 4, to: 6, color: 'gray' },
          ],
          vlines: [{ x: 3, label: 'axis x = 3', color: 'orange' }],
          segments: [
            { from: ['a', 'a^2'], to: ['a', '2a'], color: 'purple', label: 'h = 2x − x²' },
            { from: ['a', '(2a + a^2)/2'], to: [3, '(2a + a^2)/2'], color: 'red', arrow: true, label: 'r = 3 − x' },
          ],
          sliders: [{ name: 'a', min: 0.05, max: 1.95, step: 0.05, value: 0.8, label: 'strip position $x$' }],
          readouts: [
            { label: 'radius $3 - x =$', expr: '3 - a', digits: 3 },
            { label: 'height $2x - x^2 =$', expr: '2a - a^2', digits: 3 },
          ],
          caption: 'The region between $y = 2x$ and $y = x^2$ spins about the orange line $x = 3$; the dashed copy is its reflection across that line. A strip close to the axis makes a small shell, a strip at $x = 0$ the widest one.',
        },
        {
          type: 'derivation',
          title: 'Rotate the region between $y = 2x$ and $y = x^2$ about $x = 3$',
          steps: [
            { tex: '2x = x^2 \\implies x = 0 \\text{ or } x = 2', why: 'The curves meet at $x = 0$ and $x = 2$, and $2x \\ge x^2$ in between (test $x = 1$: $2 > 1$).' },
            { tex: 'r(x) = 3 - x, \\qquad h(x) = 2x - x^2', why: 'The axis is to the right of the whole region, so the distance is $3 - x$ (positive for $x \\le 2$). Height is top minus bottom.' },
            { tex: 'V = \\int_0^2 2\\pi(3 - x)(2x - x^2)\\,dx', why: 'Shell formula with the shifted radius.' },
            { tex: '= 2\\pi\\int_0^2 \\left(6x - 5x^2 + x^3\\right) dx', why: 'Expand: $(3 - x)(2x - x^2) = 6x - 3x^2 - 2x^2 + x^3$.' },
            { tex: '= 2\\pi\\left[3x^2 - \\frac{5x^3}{3} + \\frac{x^4}{4}\\right]_0^2 = 2\\pi\\left(12 - \\frac{40}{3} + 4\\right)', why: 'Antidifferentiate term by term and evaluate at $x = 2$.' },
            { tex: '= 2\\pi \\cdot \\frac{8}{3} = \\frac{16\\pi}{3}', why: '$16 - \\frac{40}{3} = \\frac{48 - 40}{3} = \\frac83$.' },
          ],
          result: '$V = \\frac{16\\pi}{3} \\approx 16.8$.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Check the radius at one point',
          text: 'Plug a specific $x$ into your radius formula and compare with the sketch. Here at $x = 0$ the strip is $3$ units from the axis, and $3 - 0 = 3$. ✓ At $x = 2$ it is $1$ unit away, and $3 - 2 = 1$. ✓ A formula like $x - 3$ would give negative distances, and $x + 3$ would give $3$ at $x = 0$ but $5$ at $x = 2$ — farther, when the strip actually got closer.',
        },
      ],
    },
    // 9
    {
      kind: 'fill',
      prompt: 'The region between $y = x$ and $y = x^2$ ($0 \\le x \\le 1$) is rotated about the line $x = -1$. Fill in the shell set-up.',
      template: 'A vertical strip at $x$ has radius ___ and height ___.',
      blanks: [{ answers: ['$x + 1$'] }, { answers: ['$x - x^2$'] }],
      wordBank: ['$x + 1$', '$x - 1$', '$1 - x$', '$x - x^2$', '$x^2 - x$', '$x$'],
      hint: 'The axis $x = -1$ is to the left of the region. Distance = right minus left.',
      explanation: 'The axis is to the left, so the distance from the strip to it is $x - (-1) = x + 1$ (at $x = 0$ that is $1$, as the sketch shows). On $[0, 1]$, $y = x$ is above $y = x^2$, so the height is $x - x^2$. Choosing $x^2 - x$ would make every height negative.',
    },
    // 10
    {
      kind: 'numeric',
      prompt: 'Finish the problem: find the volume when the region between $y = x$ and $y = x^2$ is rotated about $x = -1$.',
      hint: 'Integrate $2\\pi(x + 1)(x - x^2)$ from $0$ to $1$. Expand first.',
      answer: 'pi/2',
      answerTex: '\\frac{\\pi}{2}',
      label: '$V =$',
      explanation: '$(x + 1)(x - x^2) = x - x^2 + x^2 - x^3 = x - x^3$. So $V = 2\\pi\\int_0^1 \\left(x - x^3\\right)dx = 2\\pi\\left(\\frac12 - \\frac14\\right) = \\frac{\\pi}{2} \\approx 1.571$. For comparison, about the $y$-axis (radius $x$) the same region gives $2\\pi\\int_0^1 (x^2 - x^3)\\,dx = \\frac{\\pi}{6}$: moving the axis one unit away tripled the volume.',
    },
    // 11
    {
      kind: 'error',
      prompt: 'A student rotates the region under $y = x - x^2$ ($0 \\le x \\le 1$) about the line $x = 2$. Tap the first line that is wrong.',
      lines: [
        'A vertical strip at $x$ has height $x - x^2$.',
        'Its distance to the axis $x = 2$ is $r = x + 2$.',
        '$V = 2\\pi\\displaystyle\\int_0^1 (x + 2)(x - x^2)\\,dx$',
        '$= 2\\pi\\displaystyle\\int_0^1 \\left(2x - x^2 - x^3\\right)dx = \\frac{5\\pi}{6}$',
      ],
      errorLines: [2],
      explanation: 'The axis $x = 2$ is to the **right** of the region, so the distance is $2 - x$, not $x + 2$ (check at $x = 1$: the strip is $1$ unit from the axis, but $x + 2 = 3$). Correctly, $V = 2\\pi\\int_0^1 (2 - x)(x - x^2)\\,dx = 2\\pi\\int_0^1 \\left(2x - 3x^2 + x^3\\right)dx = 2\\pi\\left(1 - 1 + \\frac14\\right) = \\frac{\\pi}{2}$.',
    },
    // 12 ────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Shells or washers? How to choose',
      blocks: [
        {
          type: 'p',
          text: 'Both methods compute the same volume, so the choice is purely about which integral is easier to *set up and evaluate*. The decision usually comes down to one question: which variable describes the region in a single piece?',
        },
        {
          type: 'table',
          headers: ['Axis of rotation', 'Washers use', 'Shells use'],
          rows: [
            ['horizontal ($x$-axis, $y = k$)', 'vertical slices, $dx$', 'horizontal strips, $dy$'],
            ['vertical ($y$-axis, $x = k$)', 'horizontal slices, $dy$', 'vertical strips, $dx$'],
          ],
          caption: 'For any given axis, the two methods integrate with respect to different variables.',
        },
        {
          type: 'list',
          items: [
            '**Prefer shells** when the region\'s boundaries are given as $y = f(x)$ and the axis is vertical — you avoid solving for $x$, and avoid splitting the region where the left or right boundary changes.',
            '**Prefer washers** when the slices perpendicular to the axis have simple radii — for example, rotating $y = f(x)$ about the $x$-axis.',
            '**Look at the integral, too.** Sometimes only one method produces something you can antidifferentiate.',
          ],
        },
        {
          type: 'derivation',
          title: 'Rotate the region under $y = \\sin(x^2)$, $0 \\le x \\le \\sqrt{\\pi}$, about the $y$-axis',
          steps: [
            { tex: 'V = \\int_0^{\\sqrt{\\pi}} 2\\pi x \\sin\\left(x^2\\right) dx', why: 'Shells: radius $x$, height $\\sin(x^2)$, which is $\\ge 0$ because $0 \\le x^2 \\le \\pi$.' },
            { tex: 'u = x^2, \\quad du = 2x\\,dx', why: 'The radius factor $x$ is exactly what [[u-substitution]] needs: $2x\\,dx$ is sitting in the integrand.' },
            { tex: '= \\pi\\int_0^{\\pi} \\sin u\\,du', why: 'Replace $2x\\,dx$ by $du$ and change the limits: $x = 0 \\Rightarrow u = 0$, $x = \\sqrt{\\pi} \\Rightarrow u = \\pi$.' },
            { tex: '= \\pi\\left[-\\cos u\\right]_0^{\\pi} = \\pi(1 + 1) = 2\\pi', why: '$-\\cos\\pi - (-\\cos 0) = 1 + 1$.' },
          ],
          result: '$V = 2\\pi$. With washers you would need $x = \\sqrt{\\arcsin y}$ on one side of the hump and $x = \\sqrt{\\pi - \\arcsin y}$ on the other — and an integral nobody wants.',
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'A favourite exam format: "Set up, but do not evaluate, integrals for the volume using (a) washers and (b) shells." Graders check the limits, the radii, the height, and that the variable of integration matches the slice. Write the set-up from a labelled sketch, and you collect most of the points even if you run out of time.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Procedural meshes',
          text: 'When a game generates a barrel, a tree trunk or a pottery item by revolving a profile, the mesh is built exactly the way the shell picture suggests: rings of vertices at each height, connected into quads. The shell and disk integrals tell you its volume (and so its mass for the physics engine) without ever touching the mesh.',
        },
      ],
    },
    // 13
    {
      kind: 'mcq',
      prompt: 'The region under $y = e^{-x^2}$ for $0 \\le x \\le 1$ is rotated about the $y$-axis. Which set-up gives the volume **and** can be evaluated with the techniques you know (power rule, $u$-substitution)?',
      options: [
        { text: '$\\pi\\displaystyle\\int_0^1 e^{-2x^2}\\,dx$', why: 'This is a disk integral about the **$x$-axis**, the wrong solid. (It also has no elementary antiderivative.)' },
        { text: '$2\\pi\\displaystyle\\int_0^1 x\\,e^{-x^2}\\,dx$', correct: true, why: 'Shells: radius $x$, height $e^{-x^2}$. The factor $x$ makes $u = -x^2$ work, giving $\\pi\\left(1 - \\frac1e\\right)$.' },
        { text: '$2\\pi\\displaystyle\\int_0^1 e^{-x^2}\\,dx$', why: 'The radius factor $x$ is missing. Without it the integral is also impossible to do in elementary terms.' },
        { text: '$\\pi\\displaystyle\\int_0^1 \\left(-\\ln y\\right) dy$', why: 'Washers here use radius $\\sqrt{-\\ln y}$ only for $\\frac1e \\le y \\le 1$; below $y = \\frac1e$ the slices are full disks of radius $1$, so the integral must be split. This single integral uses the wrong radius on $[0, \\frac1e]$, and $\\int \\ln y\\,dy$ needs integration by parts, a technique from the next unit.' },
      ],
      explanation: 'Shells with $u = -x^2$, $du = -2x\\,dx$: $2\\pi\\int_0^1 x e^{-x^2}\\,dx = -\\pi\\int_0^{-1} e^{u}\\,du = \\pi\\left(1 - e^{-1}\\right) \\approx 1.986$. The $x$ from the shell radius is what makes the substitution possible — a pattern you will see again and again.',
    },
    // 14
    {
      kind: 'expr',
      prompt: 'The region under $y = \\dfrac{1}{1 + x^2}$ for $0 \\le x \\le b$ is rotated about the $y$-axis. Find the volume $V(b)$ as a formula in $b$.',
      hint: 'Shells give $2\\pi\\int_0^b \\frac{x}{1 + x^2}\\,dx$. Try $u = 1 + x^2$.',
      label: '$V(b) =$',
      variables: ['b'],
      domain: [0.2, 3],
      answer: 'pi*ln(1 + b^2)',
      answerTex: '\\pi\\ln\\left(1 + b^2\\right)',
      explanation: 'With $u = 1 + x^2$, $du = 2x\\,dx$, so $2\\pi\\int_0^b \\frac{x\\,dx}{1 + x^2} = \\pi\\int_1^{1+b^2}\\frac{du}{u} = \\pi\\ln(1 + b^2)$. Notice that $V(b) \\to \\infty$ as $b \\to \\infty$, even though the area under the curve stays finite (it approaches $\\frac{\\pi}{2}$). Far-out strips are thin, but they orbit on enormous circles.',
    },
  ],
  takeaways: [
    'A cylindrical shell of radius $r$, height $h$ and thickness $\\Delta r$ has volume $2\\pi r h\\,\\Delta r$ — circumference times height times thickness.',
    'Shell method about the $y$-axis: $V = \\int_a^b 2\\pi x f(x)\\,dx$; strips are parallel to the axis.',
    'The radius is the distance from the strip to the axis ($k - x$ or $x - k$ for the line $x = k$); the height is top minus bottom (or right minus left).',
    'For the same axis, washers and shells integrate in different variables. Pick the method that keeps the region in one piece and gives an integral you can evaluate.',
    'Both methods must give the same volume — computing it both ways is an excellent check.',
  ],
  reading: [
    {
      title: 'OpenStax Calculus Volume 1 — 6.3 Volumes of Revolution: Cylindrical Shells',
      url: 'https://openstax.org/books/calculus-volume-1/pages/6-3-volumes-of-revolution-cylindrical-shells',
      source: 'openstax',
      note: 'Includes 3D figures of nested shells and a comparison table of the two methods.',
    },
    {
      title: "Paul's Online Notes — Volumes of Solids of Revolution / Method of Cylinders",
      url: 'https://tutorial.math.lamar.edu/Classes/CalcI/VolumeWithCylinder.aspx',
      source: 'paul',
      note: 'Worked examples rotating about $x = -1$, $y = 2$ and other shifted axes.',
    },
    {
      title: 'Wikipedia — Shell integration',
      url: 'https://en.wikipedia.org/wiki/Shell_integration',
      source: 'wikipedia',
      note: 'A short summary, plus a proof that shells and washers always agree.',
    },
  ],
};
