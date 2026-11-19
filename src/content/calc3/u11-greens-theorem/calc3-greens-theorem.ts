import type { Lesson } from '../../types';

// ---------------------------------------------------------------- figures
const FIG_ORIENT = `<svg viewBox="0 0 520 250" xmlns="http://www.w3.org/2000/svg">
<ellipse cx="130" cy="125" rx="95" ry="70" class="f-blue s-blue" fill-opacity="0.12" stroke-width="2.5"/>
<path d="M216.6,95.7 L226.0,104.4 L217.9,108.4 Z" class="f-blue"/>
<path d="M91.7,60.8 L102.1,53.3 L104.5,62.0 Z" class="f-blue"/>
<path d="M43.4,154.3 L34.0,145.6 L42.1,141.6 Z" class="f-blue"/>
<path d="M168.3,189.2 L157.9,196.7 L155.5,188.0 Z" class="f-blue"/>
<text x="122" y="131" font-size="22" font-style="italic">D</text>
<text x="221" y="59" font-size="18" class="t-blue" font-style="italic">C</text>
<text x="130" y="223" font-size="13" text-anchor="middle">counterclockwise: D stays on your left</text>
<text x="130" y="22" font-size="15" font-weight="700" text-anchor="middle">Simple region</text>
<path d="M298,122 a92,92 0 1,0 184,0 a92,92 0 1,0 -184,0 Z M350,122 a40,40 0 1,1 80,0 a40,40 0 1,1 -80,0 Z" class="f-green" fill-opacity="0.14" fill-rule="evenodd"/>
<circle cx="390" cy="122" r="92" fill="none" class="s-blue" stroke-width="2.5"/>
<circle cx="390" cy="122" r="40" fill="none" class="s-red" stroke-width="2.5"/>
<path d="M466.7,70.8 L476.6,78.9 L468.8,83.4 Z" class="f-blue"/>
<path d="M338.8,45.3 L346.9,35.4 L351.4,43.2 Z" class="f-blue"/>
<path d="M313.3,173.2 L303.4,165.1 L311.2,160.6 Z" class="f-blue"/>
<path d="M441.2,198.7 L433.1,208.6 L428.6,200.8 Z" class="f-blue"/>
<path d="M415.2,90.4 L402.6,88.3 L407.1,80.5 Z" class="f-red"/>
<path d="M350.0,116.0 L354.5,128.0 L345.5,128.0 Z" class="f-red"/>
<path d="M404.8,159.6 L412.9,149.7 L417.4,157.5 Z" class="f-red"/>
<text x="460.24" y="53.760000000000005" font-size="15" class="t-blue" font-style="italic">C₁</text>
<text x="378" y="127" font-size="15" class="t-red" font-style="italic">C₂</text>
<text x="390" y="242" font-size="13" text-anchor="middle">outer counterclockwise, inner clockwise</text>
<text x="390" y="22" font-size="15" font-weight="700" text-anchor="middle">Region with a hole</text>
</svg>`;

const FIG_CUT = `<svg viewBox="0 0 520 260" xmlns="http://www.w3.org/2000/svg">
<path d="M355,116 A95,95 0 0,0 165,116 L218,116 A42,42 0 0,1 302,116 Z" class="f-blue s-blue" fill-opacity="0.13" stroke-width="2.5"/>
<path d="M322.9,44.6 L334.6,49.9 L328.2,56.2 Z" class="f-blue"/>
<path d="M188.6,53.1 L193.9,41.4 L200.2,47.8 Z" class="f-blue"/>
<path d="M266.0,74.0 L254.0,78.5 L254.0,69.5 Z" class="f-blue"/>
<path d="M197.5,116.0 L185.5,120.5 L185.5,111.5 Z" class="f-blue"/>
<path d="M334.5,116.0 L322.5,120.5 L322.5,111.5 Z" class="f-blue"/>
<path d="M165,134 A95,95 0 0,0 355,134 L302,134 A42,42 0 0,1 218,134 Z" class="f-green s-green" fill-opacity="0.13" stroke-width="2.5"/>
<path d="M197.1,205.4 L185.4,200.1 L191.8,193.8 Z" class="f-green"/>
<path d="M331.4,196.9 L326.1,208.6 L319.8,202.2 Z" class="f-green"/>
<path d="M254.0,176.0 L266.0,171.5 L266.0,180.5 Z" class="f-green"/>
<path d="M185.5,134.0 L197.5,129.5 L197.5,138.5 Z" class="f-green"/>
<path d="M322.5,134.0 L334.5,129.5 L334.5,138.5 Z" class="f-green"/>
<text x="260" y="11" font-size="14" text-anchor="middle">top half D₁: its own counterclockwise boundary</text>
<text x="260" y="253" font-size="14" text-anchor="middle">bottom half D₂: its own counterclockwise boundary</text>
<text x="153" y="130" font-size="13" text-anchor="end">cuts:</text>
<text x="153" y="146" font-size="13" text-anchor="end">traversed</text>
<text x="153" y="162" font-size="13" text-anchor="end">both ways</text>
<text x="367" y="130" font-size="13">→ and ←</text>
<text x="367" y="146" font-size="13">cancel</text>
</svg>`;

export const lesson: Lesson = {
  id: 'calc3-greens-theorem',
  title: "Green's Theorem",
  summary: 'A line integral around a closed loop equals a double integral over the region inside it. Positive orientation, the circulation form, areas from boundaries (the shoelace formula behind every polygon-area routine), and regions with holes.',
  minutes: 20,
  objectives: [
    'Recognize a positively oriented simple closed curve, including the boundary of a region with holes',
    'State Green\'s theorem $\\oint_C P\\,dx + Q\\,dy = \\iint_D (Q_x - P_y)\\,dA$ with its hypotheses, and explain why it is true',
    'Use Green\'s theorem to turn a line integral into a double integral (and back), and verify an example both ways',
    'Compute areas with $A = \\frac{1}{2}\\oint_C (x\\,dy - y\\,dx)$ and derive the shoelace formula for polygons',
    'Apply Green\'s theorem to regions with holes, and explain why it fails for $\\frac{\\langle -y, x \\rangle}{x^2 + y^2}$ on a disk around the origin',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Loops, and which way to go around them',
      blocks: [
        {
          type: 'p',
          text: 'In the last unit you integrated a vector field $\\vec{F} = \\langle P, Q \\rangle$ along a curve: $\\int_C \\vec{F}\\cdot d\\vec{r} = \\int_C P\\,dx + Q\\,dy$, the [[work]] done by a force or the flow of a fluid along a path. When the path is a closed loop, we write $\\oint_C$ and call the integral the **circulation** of $\\vec{F}$ around $C$.',
        },
        {
          type: 'p',
          text: 'Green\'s theorem says that this circulation, an integral over a one-dimensional boundary, equals a double integral over the two-dimensional region inside. It is the first of three big theorems that finish the course, and all three have the same shape as the [[fundamental-theorem-of-calculus]]: *integrate a derivative over a region, get something about the boundary*.',
        },
        {
          type: 'definition',
          term: 'Simple closed curve, positive orientation',
          text: 'A curve is **closed** if it ends where it starts, and [[calc3-simple-closed-curve|simple]] if it never crosses itself. A circle, a triangle and an ellipse are simple closed curves; a figure eight is closed but not simple.\n\nThe boundary $C$ of a region $D$ has [[calc3-positive-orientation|positive orientation]] if, as you walk along $C$, the region $D$ is always **on your left**. For a region without holes that means counterclockwise.',
        },
        {
          type: 'figure',
          svg: FIG_ORIENT,
          alt: 'Left: an elliptical region D whose boundary C carries counterclockwise arrows. Right: an annulus whose outer circle C1 carries counterclockwise arrows and whose inner circle C2 carries clockwise arrows.',
          caption: 'Positive orientation means "region on your left". For a region with a hole, that makes the inner boundary run **clockwise**: walk it that way and the shaded ring is still on your left.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why orientation matters at all',
          text: 'Reversing the direction of a curve flips the sign of $\\int_C \\vec{F}\\cdot d\\vec{r}$, because $d\\vec{r}$ points the other way at every point. A double integral $\\iint_D f\\,dA$ has no direction. So a theorem equating the two must say which way to go around; get it backwards and every answer comes out with the wrong sign.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'mcq',
      prompt: '$D$ is the annulus $1 \\le x^2 + y^2 \\le 4$. Which pair of parametrizations, each for $0 \\le t \\le 2\\pi$, traces the boundary of $D$ with **positive** orientation?',
      options: [
        {
          text: 'Outer: $\\langle 2\\cos t, 2\\sin t \\rangle$; inner: $\\langle \\cos t, -\\sin t \\rangle$',
          correct: true,
          why: 'The outer circle runs counterclockwise and the inner one clockwise (its $y$ starts by decreasing). Both keep the ring on your left.',
        },
        {
          text: 'Outer: $\\langle 2\\cos t, 2\\sin t \\rangle$; inner: $\\langle \\cos t, \\sin t \\rangle$',
          why: 'Walking the inner circle counterclockwise puts the hole, not the ring, on your left. The inner boundary must run clockwise.',
        },
        {
          text: 'Outer: $\\langle 2\\cos t, -2\\sin t \\rangle$; inner: $\\langle \\cos t, \\sin t \\rangle$',
          why: 'This is exactly backwards: outer clockwise and inner counterclockwise keeps the ring on your **right**. That is the negative orientation.',
        },
        {
          text: 'Outer: $\\langle 2\\sin t, 2\\cos t \\rangle$; inner: $\\langle \\sin t, \\cos t \\rangle$',
          why: 'Swapping sine and cosine reverses direction: $\\langle 2\\sin t, 2\\cos t \\rangle$ starts at $(0, 2)$ and moves right, which is clockwise. The outer circle is wrong here.',
        },
      ],
      explanation: 'Test each curve near $t = 0$. $\\langle \\cos t, \\sin t \\rangle$ starts at $(1, 0)$ moving up: counterclockwise. $\\langle \\cos t, -\\sin t \\rangle$ starts at $(1, 0)$ moving down: clockwise. For an annulus, positive orientation is outer counterclockwise plus inner clockwise, so the region always stays on your left.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Green\'s theorem, and why it is true',
      blocks: [
        {
          type: 'theorem',
          name: 'Green\'s theorem (circulation form)',
          tex: '\\oint_C P\\,dx + Q\\,dy = \\iint_D \\left( \\frac{\\partial Q}{\\partial x} - \\frac{\\partial P}{\\partial y} \\right) dA',
          text: 'Let $C$ be a positively oriented, piecewise-smooth, simple closed curve in the plane, and $D$ the region it encloses. If $P$ and $Q$ have continuous partial derivatives on an open region that contains $D$, then the equation holds. This is [[calc3-greens-theorem|Green\'s theorem]].',
        },
        {
          type: 'p',
          text: 'The integrand $Q_x - P_y$ is a derivative of the field, the right-hand side is an ordinary double integral (a [[stat-double-integral|double integral]] as in Unit 7), and the boundary is where the line integral lives. To see why the two sides agree, split the left side into $\\oint P\\,dx$ and $\\oint Q\\,dy$ and prove $\\oint_C P\\,dx = -\\iint_D P_y\\,dA$. (The $Q$ part is the same argument with $x$ and $y$ swapped.)',
        },
        {
          type: 'graph',
          x: [0, 4],
          y: [0, 3.5],
          equal: true,
          height: 280,
          functions: [
            { expr: '0.5 + 0.25(x - 2)^2', domain: [0.5, 3.5], color: 'blue', label: '$C_1$: $y = g_1(x)$, left to right' },
            { expr: '3 - 0.3(x - 2)^2', domain: [0.5, 3.5], color: 'red', label: '$C_3$: $y = g_2(x)$, right to left' },
          ],
          areas: [{ expr: '3 - 0.3(x - 2)^2', expr2: '0.5 + 0.25(x - 2)^2', from: 0.5, to: 3.5, color: 'teal' }],
          segments: [
            { from: [3.5, 1.0625], to: [3.5, 2.325], color: 'gray', label: 'C₂' },
            { from: [0.5, 2.325], to: [0.5, 1.0625], color: 'gray', label: 'C₄' },
            { from: [1.8, 0.51], to: [2.2, 0.51], color: 'blue', arrow: true },
            { from: [2.2, 2.988], to: [1.8, 2.988], color: 'red', arrow: true },
            { from: [3.5, 1.5], to: [3.5, 1.9], color: 'gray', arrow: true },
            { from: [0.5, 1.9], to: [0.5, 1.5], color: 'gray', arrow: true },
          ],
          caption: 'A region between $y = g_1(x)$ and $y = g_2(x)$ for $a \\le x \\le b$, with its boundary traced counterclockwise. On the vertical sides $C_2$ and $C_4$, $x$ is constant, so $dx = 0$ and they add nothing to $\\oint P\\,dx$.',
        },
        {
          type: 'derivation',
          title: 'Why $\\oint_C P\\,dx = -\\iint_D P_y\\,dA$ for a region between two graphs',
          steps: [
            { tex: '\\oint_C P\\,dx = \\int_{C_1} P\\,dx + \\int_{C_3} P\\,dx', why: 'Split the boundary into four pieces. On the vertical sides $dx = 0$, so only the bottom $C_1$ and the top $C_3$ contribute.' },
            { tex: '= \\int_a^b P(x, g_1(x))\\,dx - \\int_a^b P(x, g_2(x))\\,dx', why: 'Parametrize both with $x$ as the parameter. $C_1$ runs left to right ($a$ to $b$); $C_3$ runs right to left, which reverses the limits and gives the minus sign.' },
            { tex: '= -\\int_a^b \\big[ P(x, g_2(x)) - P(x, g_1(x)) \\big]\\,dx', why: 'Combine into one integral.' },
            { tex: '= -\\int_a^b \\int_{g_1(x)}^{g_2(x)} \\frac{\\partial P}{\\partial y}(x, y)\\,dy\\,dx', why: 'The [[fundamental-theorem-of-calculus]] in the $y$-direction: the inner integral of $P_y$ from $g_1$ to $g_2$ is $P(x, g_2) - P(x, g_1)$. This is where "continuous partial derivatives" is needed.' },
            { tex: '= -\\iint_D \\frac{\\partial P}{\\partial y}\\,dA', why: 'That is the iterated integral of $P_y$ over the type I region $D$.' },
          ],
          result: 'The same argument on a type II region gives $\\oint_C Q\\,dy = \\iint_D Q_x\\,dA$. Adding the two proves Green\'s theorem for regions that are both type I and type II; general regions are cut into such pieces.',
        },
        {
          type: 'callout',
          variant: 'analogy',
          title: 'The picture to keep: tiny whirlpools that cancel',
          text: 'Chop $D$ into tiny squares and add up the circulation around each one. Every interior edge is walked twice, once in each direction by its two neighbours, so those contributions cancel and only the outer boundary survives. Meanwhile the circulation around one tiny square is about $(Q_x - P_y)$ times its area. So $Q_x - P_y$ is the **circulation per unit area**, and Green\'s theorem says "total circulation $=$ the sum of all the tiny whirlpools inside".',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'order',
      prompt: 'Put the steps of the proof that $\\oint_C P\\,dx = -\\iint_D P_y\\,dA$ for a region between $y = g_1(x)$ and $y = g_2(x)$, $a \\le x \\le b$, in order.',
      lines: [
        'Split $C$ into bottom, right side, top and left side; the vertical sides have $dx = 0$ and drop out',
        'Write $\\oint_C P\\,dx = \\int_a^b P(x, g_1(x))\\,dx - \\int_a^b P(x, g_2(x))\\,dx$, the minus sign coming from the top running right to left',
        'Rewrite $P(x, g_2(x)) - P(x, g_1(x))$ as $\\int_{g_1(x)}^{g_2(x)} P_y\\,dy$ by the fundamental theorem of calculus',
        'Recognize $-\\int_a^b \\int_{g_1}^{g_2} P_y\\,dy\\,dx$ as $-\\iint_D P_y\\,dA$',
      ],
      distractors: ['Apply Green\'s theorem to replace $\\oint_C P\\,dx$ by $\\iint_D P_y\\,dA$'],
      explanation: 'The proof reduces the boundary integral to two single integrals (bottom and top), then uses the one-variable FTC in the $y$-direction to recognize their difference as an inner integral of $P_y$. The distractor is circular: it uses the theorem being proved, and with the wrong sign at that.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Verifying Green\'s theorem both ways',
      blocks: [
        {
          type: 'p',
          text: 'A theorem is easiest to trust after you have watched it work. Take $\\oint_C x^4\\,dx + xy\\,dy$, where $C$ is the triangle with vertices $(0, 0)$, $(1, 0)$, $(0, 1)$, traversed counterclockwise. Here $P = x^4$ and $Q = xy$.',
        },
        {
          type: 'derivation',
          title: 'Way 1: the line integral, one side at a time',
          steps: [
            { tex: 'C_1: \\langle t, 0 \\rangle,\\ 0 \\le t \\le 1: \\quad \\int_0^1 t^4\\,dt + 0 = \\tfrac{1}{5}', why: 'Along the bottom, $y = 0$ so $dy = 0$, and $dx = dt$.' },
            { tex: 'C_2: \\langle 1 - t, t \\rangle: \\quad \\int_0^1 \\big[ (1 - t)^4(-1) + (1 - t)t \\big]\\,dt = -\\tfrac{1}{5} + \\tfrac{1}{6}', why: 'From $(1, 0)$ to $(0, 1)$: $dx = -dt$, $dy = dt$. The integrals are $\\int_0^1 (1 - t)^4\\,dt = \\frac{1}{5}$ and $\\int_0^1 (t - t^2)\\,dt = \\frac{1}{6}$.' },
            { tex: 'C_3: \\langle 0, 1 - t \\rangle: \\quad 0', why: 'Down the $y$-axis, $x = 0$, so both $dx = 0$ and $Q = xy = 0$.' },
            { tex: '\\oint_C = \\tfrac{1}{5} - \\tfrac{1}{5} + \\tfrac{1}{6} = \\tfrac{1}{6}', why: 'Add the three sides.' },
          ],
          result: 'Directly: $\\oint_C x^4\\,dx + xy\\,dy = \\frac{1}{6}$.',
        },
        {
          type: 'derivation',
          title: 'Way 2: the double integral',
          steps: [
            { tex: 'Q_x - P_y = y - 0 = y', why: '$Q = xy$ gives $Q_x = y$; $P = x^4$ does not depend on $y$, so $P_y = 0$.' },
            { tex: '\\iint_D y\\,dA = \\int_0^1 \\int_0^{1 - x} y\\,dy\\,dx', why: 'The triangle is $0 \\le x \\le 1$, $0 \\le y \\le 1 - x$.' },
            { tex: '= \\int_0^1 \\tfrac{1}{2}(1 - x)^2\\,dx = \\tfrac{1}{6}', why: 'Inner integral $\\frac{1}{2}y^2$ from $0$ to $1 - x$; then $\\int_0^1 \\frac{1}{2}(1 - x)^2\\,dx = \\frac{1}{2}\\cdot\\frac{1}{3}$.' },
          ],
          result: 'Both sides give $\\frac{1}{6}$. Notice which way was less work: one double integral instead of three parametrized sides.',
        },
        {
          type: 'graph',
          x: [-2.2, 2.2],
          y: [-2.2, 2.2],
          equal: true,
          height: 320,
          field: { x: '-y^3', y: 'x^3', n: 15 },
          parametric: [{ x: 'a*cos(t)', y: 'a*sin(t)', t: [0, '2pi'], color: 'red', label: '$C$: circle of radius $a$' }],
          segments: [{ from: ['a', 0], to: ['a', 0.35], color: 'red', arrow: true }],
          sliders: [{ name: 'a', min: 0.3, max: 2, step: 0.05, value: 1.2, label: 'radius $a$' }],
          readouts: [{ label: '$\\oint_C \\vec F\\cdot d\\vec r = \\iint_D (3x^2 + 3y^2)\\,dA = \\frac{3\\pi a^4}{2} =$', expr: '1.5*pi*a^4', digits: 4 }],
          caption: 'The field $\\vec F = \\langle -y^3, x^3 \\rangle$ swirls counterclockwise, weakly near the origin and strongly far out. Here $Q_x - P_y = 3x^2 + 3y^2$, so in polar coordinates the circulation is $\\int_0^{2\\pi}\\int_0^a 3r^2\\,r\\,dr\\,d\\theta = \\frac{3\\pi a^4}{2}$. Double the radius and the circulation grows 16-fold: a bigger loop encloses more, and stronger, whirlpools.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Which direction to use it',
          text: 'Use Green\'s theorem to replace a line integral when the boundary has many pieces or awkward parametrizations but $Q_x - P_y$ is simple. Use it in reverse, replacing a double integral by a line integral, when the boundary is easy and the integrand is not, as in the area formulas on the next cards.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'expr',
      prompt: 'For $\\vec{F} = \\langle x^2 y,\\ x y^2 \\rangle$, Green\'s theorem replaces $\\oint_C \\vec{F}\\cdot d\\vec{r}$ by $\\iint_D (Q_x - P_y)\\,dA$. Enter the integrand $Q_x - P_y$.',
      label: '$Q_x - P_y =$',
      answer: 'y^2 - x^2',
      answerTex: 'y^2 - x^2',
      variables: ['x', 'y'],
      hint: '$P = x^2 y$ and $Q = x y^2$. Differentiate $Q$ with respect to $x$ and $P$ with respect to $y$.',
      explanation: '$Q_x = \\frac{\\partial}{\\partial x}(xy^2) = y^2$ and $P_y = \\frac{\\partial}{\\partial y}(x^2 y) = x^2$, so $Q_x - P_y = y^2 - x^2$. Over any region symmetric under swapping $x$ and $y$ (a disk centered at the origin, a square centered there), this integrates to $0$, so the circulation around such a boundary is zero even though the field is not zero.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'numeric',
      prompt: 'Use Green\'s theorem to evaluate $\\oint_C xy\\,dx + (x^2 + y)\\,dy$, where $C$ is the boundary of the rectangle $[0, 2] \\times [0, 3]$, traversed counterclockwise.',
      answer: '6',
      hint: 'Compute $Q_x - P_y$ with $P = xy$ and $Q = x^2 + y$, then integrate over the rectangle.',
      explanation: '$Q_x = 2x$ and $P_y = x$, so $Q_x - P_y = x$. Then $\\iint_D x\\,dA = \\int_0^3 \\int_0^2 x\\,dx\\,dy = 3 \\cdot \\frac{2^2}{2} = 6$. Doing it directly needs four parametrized sides: bottom $0$, right side $\\int_0^3 (4 + y)\\,dy = 16.5$, top $\\int_2^0 3x\\,dx = -6$, left side $\\int_3^0 y\\,dy = -4.5$. They also sum to $6$.',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'concept',
      title: 'Area from a line integral',
      blocks: [
        {
          type: 'p',
          text: 'Run Green\'s theorem backwards. If you choose $P$ and $Q$ with $Q_x - P_y = 1$, the double integral is $\\iint_D 1\\,dA$, the area of $D$, and Green\'s theorem computes it from the boundary alone. Three convenient choices:',
        },
        {
          type: 'theorem',
          name: 'Area as a boundary integral',
          tex: 'A = \\oint_C x\\,dy = -\\oint_C y\\,dx = \\frac{1}{2}\\oint_C (x\\,dy - y\\,dx)',
          text: 'For a region $D$ whose boundary $C$ is positively oriented. Check each: $(P, Q) = (0, x)$, $(-y, 0)$ and $(-\\frac{y}{2}, \\frac{x}{2})$ all give $Q_x - P_y = 1$.',
        },
        {
          type: 'derivation',
          title: 'The area of the ellipse $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$',
          steps: [
            { tex: '\\vec r(t) = \\langle a\\cos t,\\ b\\sin t \\rangle,\\quad 0 \\le t \\le 2\\pi', why: 'The standard counterclockwise parametrization of the ellipse.' },
            { tex: 'x\\,dy - y\\,dx = (a\\cos t)(b\\cos t)\\,dt - (b\\sin t)(-a\\sin t)\\,dt', why: '$dx = -a\\sin t\\,dt$ and $dy = b\\cos t\\,dt$.' },
            { tex: '= ab(\\cos^2 t + \\sin^2 t)\\,dt = ab\\,dt', why: 'Factor out $ab$ and use $\\cos^2 t + \\sin^2 t = 1$.' },
            { tex: 'A = \\frac{1}{2}\\int_0^{2\\pi} ab\\,dt = \\pi ab', why: 'The symmetric formula $A = \\frac{1}{2}\\oint (x\\,dy - y\\,dx)$.' },
          ],
          result: 'The ellipse has area $\\pi ab$, with no square roots and no trig substitution. With $a = b = r$ it gives the circle\'s $\\pi r^2$.',
        },
        {
          type: 'callout',
          variant: 'history',
          title: 'A machine that measures area by tracing the edge',
          text: 'A **planimeter** is a 19th-century instrument with a wheel on an arm. You trace the outline of a shape on a map, the wheel rolls and slips, and its dial reads the enclosed area. Surveyors and engineers used them for a century. The wheel is computing $\\oint_C$ of a field with $Q_x - P_y$ constant: Green\'s theorem in brass.',
        },
      ],
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'concept',
      title: 'The shoelace formula: polygon area in code',
      blocks: [
        {
          type: 'p',
          text: 'Now let $C$ be a polygon with vertices $(x_1, y_1), \\dots, (x_n, y_n)$ listed counterclockwise, with $(x_{n+1}, y_{n+1}) = (x_1, y_1)$ to close the loop. Apply $A = \\frac{1}{2}\\oint (x\\,dy - y\\,dx)$ one straight edge at a time.',
        },
        {
          type: 'derivation',
          title: 'One edge from $(x_i, y_i)$ to $(x_{i+1}, y_{i+1})$',
          steps: [
            { tex: 'x = x_i + t\\,\\Delta x,\\quad y = y_i + t\\,\\Delta y,\\quad 0 \\le t \\le 1', why: 'Parametrize the segment, with $\\Delta x = x_{i+1} - x_i$ and $\\Delta y = y_{i+1} - y_i$.' },
            { tex: 'x\\,dy - y\\,dx = \\big[ (x_i + t\\Delta x)\\Delta y - (y_i + t\\Delta y)\\Delta x \\big]\\,dt', why: 'Substitute $dx = \\Delta x\\,dt$ and $dy = \\Delta y\\,dt$.' },
            { tex: '= (x_i\\,\\Delta y - y_i\\,\\Delta x)\\,dt', why: 'The $t$ terms cancel: $t\\,\\Delta x\\,\\Delta y - t\\,\\Delta y\\,\\Delta x = 0$. The integrand is constant along the edge.' },
            { tex: '\\int_{\\text{edge}} (x\\,dy - y\\,dx) = x_i y_{i+1} - x_{i+1} y_i', why: 'Integrate over $0 \\le t \\le 1$ and expand: $x_i(y_{i+1} - y_i) - y_i(x_{i+1} - x_i) = x_i y_{i+1} - x_{i+1} y_i$.' },
          ],
          result: 'Summing over all edges gives the [[calc3-shoelace-formula|shoelace formula]] $A = \\frac{1}{2}\\sum_{i=1}^{n} (x_i y_{i+1} - x_{i+1} y_i)$. Each term is a $2 \\times 2$ [[determinant]]: twice the signed area of the triangle from the origin to that edge.',
        },
        {
          type: 'graph',
          x: [-0.5, 5],
          y: [-0.5, 5.5],
          equal: true,
          height: 280,
          segments: [
            { from: [0, 0], to: [4, 0], color: 'blue' },
            { from: [4, 0], to: [4, 3], color: 'blue' },
            { from: [4, 3], to: [1, 5], color: 'blue' },
            { from: [1, 5], to: [0, 0], color: 'blue' },
            { from: [1.6, 0], to: [2.2, 0], color: 'blue', arrow: true },
            { from: [4, 1.2], to: [4, 1.8], color: 'blue', arrow: true },
            { from: [2.75, 3.833], to: [2.25, 4.167], color: 'blue', arrow: true },
            { from: [0.56, 2.8], to: [0.44, 2.2], color: 'blue', arrow: true },
          ],
          points: [
            { x: 0, y: 0, label: '(0, 0)' },
            { x: 4, y: 0, label: '(4, 0)' },
            { x: 4, y: 3, label: '(4, 3)' },
            { x: 1, y: 5, label: '(1, 5)' },
          ],
          caption: 'A capture zone with vertices listed counterclockwise. Shoelace: $\\frac{1}{2}\\big[ (0\\cdot 0 - 4\\cdot 0) + (4\\cdot 3 - 4\\cdot 0) + (4\\cdot 5 - 1\\cdot 3) + (1\\cdot 0 - 0\\cdot 5) \\big] = \\frac{1}{2}(0 + 12 + 17 + 0) = 14.5$.',
        },
        {
          type: 'code',
          title: 'shoelace.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdio>
#include <numbers>
#include <vector>

struct Vec2 { double x, y; };

// Green's theorem with A = (1/2) * closed integral of (x dy - y dx),
// summed exactly over the straight edges of a polygon.
double signedArea(const std::vector<Vec2>& p) {
    double twiceA = 0.0;
    for (std::size_t i = 0; i < p.size(); ++i) {
        const Vec2& a = p[i];
        const Vec2& b = p[(i + 1) % p.size()];   // wrap around to close the loop
        twiceA += a.x * b.y - b.x * a.y;
    }
    return 0.5 * twiceA;
}

int main() {
    std::vector<Vec2> zone = {{0, 0}, {4, 0}, {4, 3}, {1, 5}};
    std::printf("capture zone, CCW : %.4f\\n", signedArea(zone));

    std::vector<Vec2> reversed(zone.rbegin(), zone.rend());
    std::printf("capture zone, CW  : %.4f\\n", signedArea(reversed));

    for (int n : {6, 24, 96}) {               // regular n-gons in the unit circle
        std::vector<Vec2> ngon;
        for (int k = 0; k < n; ++k) {
            double t = 2.0 * std::numbers::pi * k / n;
            ngon.push_back({std::cos(t), std::sin(t)});
        }
        std::printf("%3d-gon            : %.4f\\n", n, signedArea(ngon));
    }
    std::printf("pi                : %.4f\\n", std::numbers::pi);
}`,
          output: `capture zone, CCW : 14.5000
capture zone, CW  : -14.5000
  6-gon            : 2.5981
 24-gon            : 3.1058
 96-gon            : 3.1394
pi                : 3.1416`,
          annotations: [
            { lines: '10-18', text: 'The shoelace sum. Each edge contributes the $2 \\times 2$ determinant $x_i y_{i+1} - x_{i+1} y_i$.' },
            { lines: 14, text: 'The modulo closes the polygon: the last vertex connects back to the first.' },
            { lines: '24-25', text: 'Reversing the vertex order reverses the orientation of $C$, so the signed area flips sign.' },
            { lines: '27-34', text: 'Inscribed regular polygons: their areas $\\frac{n}{2}\\sin\\frac{2\\pi}{n}$ approach the disk\'s area $\\pi$.' },
          ],
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'The sign is a feature',
          text: 'The shoelace sum is **signed**: positive for counterclockwise vertices, negative for clockwise. Game and graphics code uses that sign constantly. It tells a renderer a triangle\'s [[la-winding-order|winding order]] on screen for back-face culling, tells a navmesh or level editor whether a polygon is an outer boundary or a hole, and gives physics engines the area (and, with a similar sum, the centroid) of a 2D collider. Use `std::abs` only when you truly want the unsigned area.',
        },
      ],
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'numeric',
      prompt: 'Use the shoelace formula to find the area of the quadrilateral with vertices $(1, 1)$, $(5, 2)$, $(4, 6)$, $(0, 4)$, listed in that order.',
      answer: '31/2',
      answerTex: '\\frac{31}{2} = 15.5',
      hint: 'Compute $x_i y_{i+1} - x_{i+1} y_i$ for the four edges, including the edge from $(0, 4)$ back to $(1, 1)$, add them, and halve.',
      explanation: 'Edge by edge: $1\\cdot 2 - 5\\cdot 1 = -3$; $5\\cdot 6 - 4\\cdot 2 = 22$; $4\\cdot 4 - 0\\cdot 6 = 16$; $0\\cdot 1 - 1\\cdot 4 = -4$. The sum is $31$, so $A = \\frac{31}{2} = 15.5$. The result is positive, which also tells you the vertices were listed counterclockwise. Forgetting the closing edge back to $(1, 1)$ would give $\\frac{35}{2}$, a typical bug when the wrap-around index is missing.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'fill',
      prompt: 'Complete the reasoning behind the area formula $A = \\oint_C x\\,dy$.',
      template: 'With $P = 0$ and $Q = x$, the integrand $Q_x - P_y$ equals ___ , so by Green\'s theorem $\\oint_C x\\,dy$ equals the ___ of $D$. If $C$ is traversed clockwise instead, the same integral gives ___ .',
      blanks: [{ answers: ['$1$'] }, { answers: ['area'] }, { answers: ['minus the area'] }],
      wordBank: ['$1$', '$0$', '$x$', 'area', 'perimeter', 'minus the area', 'the same area'],
      explanation: '$Q_x = \\frac{\\partial x}{\\partial x} = 1$ and $P_y = 0$, so the double integral is $\\iint_D 1\\,dA$, the area. Green\'s theorem needs positive orientation; traversing $C$ clockwise negates every line integral, so you get $-A$. That sign is exactly what the shoelace code uses to detect clockwise polygons.',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'concept',
      title: 'Regions with holes, and a field that breaks the rules',
      blocks: [
        {
          type: 'p',
          text: 'Green\'s theorem also holds for a region with holes, provided the boundary is positively oriented: the outer curve counterclockwise and each inner curve clockwise. The proof is a scissors trick. Cut the ring into pieces without holes and apply Green\'s theorem to each piece. Every cut is walked twice, in opposite directions, so the cuts cancel and only the true boundary remains.',
        },
        {
          type: 'figure',
          svg: FIG_CUT,
          alt: 'An annulus cut along two horizontal segments into a top half and a bottom half, drawn slightly apart. Each half has a counterclockwise boundary made of an outer arc, a cut, an inner arc and another cut. The cut segments carry opposite arrows in the two halves.',
          caption: 'Each half gets Green\'s theorem. Adding them, the cut segments cancel (traversed once each way) and the double integrals add up to the whole ring.',
        },
        {
          type: 'p',
          text: 'Here is why the hypotheses matter. Take $\\vec{F} = \\dfrac{\\langle -y, x \\rangle}{x^2 + y^2}$, defined everywhere except the origin. A direct computation gives $Q_x - P_y = 0$ wherever $\\vec{F}$ is defined. Yet around the unit circle $\\vec{r}(t) = \\langle \\cos t, \\sin t \\rangle$, $\\vec{F}\\cdot\\vec{r}\\,\'(t) = \\sin^2 t + \\cos^2 t = 1$, so $\\oint_C \\vec{F}\\cdot d\\vec{r} = 2\\pi$, not $0$.',
        },
        {
          type: 'derivation',
          title: 'Resolving the paradox',
          steps: [
            { tex: '\\oint_C \\vec F\\cdot d\\vec r \\ne \\iint_{\\text{disk}} 0\\,dA', why: 'Green\'s theorem does **not** apply to the unit disk: $P$ and $Q$ are undefined at the origin, which is inside $D$, so the hypothesis "continuous partials on an open region containing $D$" fails.' },
            { tex: '\\oint_{C} \\vec F\\cdot d\\vec r + \\oint_{-C_\\varepsilon} \\vec F\\cdot d\\vec r = \\iint_{\\text{ring}} 0\\,dA = 0', why: 'Let $C$ be **any** simple closed curve around the origin and $C_\\varepsilon$ a tiny counterclockwise circle inside it. Green\'s theorem does apply to the region between them, whose positive boundary is $C$ plus $C_\\varepsilon$ traversed clockwise ($-C_\\varepsilon$).' },
            { tex: '\\oint_{C} \\vec F\\cdot d\\vec r = \\oint_{C_\\varepsilon} \\vec F\\cdot d\\vec r = 2\\pi', why: 'Reversing $-C_\\varepsilon$ flips its sign; the small circle gives $2\\pi$ by the same computation as the unit circle.' },
          ],
          result: 'Every counterclockwise simple closed curve around the origin has circulation $2\\pi$; every one that does not enclose the origin has circulation $0$ (now Green\'s theorem applies directly). The answer counts whether the loop goes around the hole.',
        },
        {
          type: 'graph',
          x: [-3, 3],
          y: [-3, 3],
          equal: true,
          height: 320,
          field: { x: '-y/(x^2 + y^2)', y: 'x/(x^2 + y^2)', n: 15, normalize: true },
          parametric: [{ x: 'h + a*cos(t)', y: '0.7a*sin(t)', t: [0, '2pi'], color: 'red', label: '$C$' }],
          points: [{ x: 0, y: 0, label: 'hole', color: 'gray' }],
          sliders: [
            { name: 'h', min: -2, max: 2, step: 0.05, value: 0.4, label: 'shift the loop $h$' },
            { name: 'a', min: 0.4, max: 1.8, step: 0.05, value: 1.2, label: 'size $a$' },
          ],
          readouts: [{ label: '$\\oint_C \\vec F\\cdot d\\vec r =$', expr: 'pi*(1 + sign(a - abs(h)))', digits: 4 }],
          caption: 'Arrows show the direction of $\\frac{\\langle -y, x \\rangle}{x^2 + y^2}$ (normalized; the true field is huge near the origin). Slide the ellipse around: while it encloses the origin the circulation is exactly $2\\pi \\approx 6.2832$, whatever its shape; once the hole is outside, it is $0$.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Check for holes before you trust "$Q_x - P_y = 0$"',
          text: 'Zero integrand does **not** mean zero circulation if the field blows up somewhere inside $C$. On a region with a hole, $Q_x = P_y$ does not make a field conservative. This is the same lesson you met with conservative fields, now explained: the hole is where Green\'s theorem cannot reach.',
        },
      ],
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'truefalse',
      prompt: 'For $\\vec{F} = \\dfrac{\\langle -y, x \\rangle}{x^2 + y^2}$ we have $Q_x - P_y = 0$ wherever $\\vec{F}$ is defined, so by Green\'s theorem $\\oint_C \\vec{F}\\cdot d\\vec{r} = 0$ for the circle $x^2 + y^2 = 9$ traversed counterclockwise.',
      answer: false,
      explanation: 'The disk $x^2 + y^2 \\le 9$ contains the origin, where $\\vec{F}$ is undefined, so Green\'s theorem does not apply to it. Cutting out a small circle around the origin shows that the circulation around any counterclockwise loop enclosing the origin is $2\\pi$, so $\\oint_C \\vec{F}\\cdot d\\vec{r} = 2\\pi$ here. (Directly: with $\\vec r = \\langle 3\\cos t, 3\\sin t \\rangle$, $\\vec F\\cdot\\vec r\\,\' = \\frac{9\\sin^2 t + 9\\cos^2 t}{9} = 1$.)',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'error',
      prompt: 'A student evaluates $\\oint_C (-y\\,dx + x\\,dy)$, where $C$ is the circle $x^2 + y^2 = 4$ traversed **clockwise**. Tap the first line that is wrong.',
      lines: [
        '$P = -y$ and $Q = x$, so $Q_x - P_y = 1 - (-1) = 2$.',
        'By Green\'s theorem, $\\oint_C (-y\\,dx + x\\,dy) = \\iint_D 2\\,dA$, where $D$ is the disk of radius $2$.',
        '$\\iint_D 2\\,dA = 2\\cdot(\\text{area of } D) = 2\\cdot 4\\pi$.',
        'So the integral equals $8\\pi$.',
      ],
      errorLines: [2],
      explanation: 'Line 2 applies Green\'s theorem to a clockwise curve. The theorem requires positive (counterclockwise) orientation; reversing the direction flips the sign, so $\\oint_C = -\\iint_D 2\\,dA = -8\\pi$. Line 1 is right, and line 3 is the correct value of the double integral, but the final answer should be $-8\\pi$. Check: $\\vec r(t) = \\langle 2\\cos t, -2\\sin t \\rangle$ gives $-y\\,dx + x\\,dy = -4\\,dt$, and $\\int_0^{2\\pi} -4\\,dt = -8\\pi$.',
    },
  ],
  takeaways: [
    'Positive orientation means the region stays on your left: counterclockwise for the outer boundary, clockwise for the boundary of each hole.',
    'Green\'s theorem: $\\oint_C P\\,dx + Q\\,dy = \\iint_D (Q_x - P_y)\\,dA$ for a positively oriented, piecewise-smooth simple closed curve, when $P$ and $Q$ have continuous partials on an open region containing $D$.',
    '$Q_x - P_y$ is the circulation per unit area; interior circulations cancel, leaving only the boundary.',
    'Area from the boundary: $A = \\oint_C x\\,dy = -\\oint_C y\\,dx = \\frac{1}{2}\\oint_C (x\\,dy - y\\,dx)$. For a polygon this becomes the signed shoelace sum $\\frac{1}{2}\\sum (x_i y_{i+1} - x_{i+1} y_i)$.',
    'Regions with holes work after cutting, but a singularity inside $C$ voids the theorem: $\\frac{\\langle -y, x \\rangle}{x^2 + y^2}$ has $Q_x - P_y = 0$ yet circulation $2\\pi$ around the origin.',
  ],
  reading: [
    {
      title: 'OpenStax Calculus Volume 3 — Green\'s Theorem (section 6.4)',
      url: 'https://openstax.org/details/books/calculus-volume-3',
      source: 'openstax',
      note: 'Section 6.4 covers both forms of Green\'s theorem, regions with holes and the planimeter, with many worked examples.',
    },
    {
      title: "Paul's Online Notes — Calculus III",
      url: 'https://tutorial.math.lamar.edu/Classes/CalcIII/CalcIII.aspx',
      source: 'other',
      note: 'The "Green\'s Theorem" page in the Line Integrals chapter has extra examples of choosing which side of the theorem to compute.',
    },
    {
      title: 'Wikipedia — Shoelace formula',
      url: 'https://en.wikipedia.org/wiki/Shoelace_formula',
      source: 'wikipedia',
      note: 'Several derivations of the polygon-area formula, including the one from Green\'s theorem used here.',
    },
    {
      title: 'MIT OCW 18.02SC Multivariable Calculus',
      url: 'https://ocw.mit.edu/courses/18-02sc-multivariable-calculus-fall-2010/',
      source: 'other',
      note: 'Unit 3 (Part C) has recitation videos and problem sets on Green\'s theorem, including the fields with a singularity at the origin.',
    },
  ],
};
