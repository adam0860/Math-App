import type { Lesson } from '../../types';

// A polar box over the paraboloid z = 4 - r^2: r in [b, b + 0.4], theta in [a, a + 0.5],
// height = f at the middle radius b + 0.2.
const H = '(4 - (b + 0.2)^2)';

export const lesson: Lesson = {
  id: 'calc3-polar-integrals',
  title: 'Double Integrals in Polar Coordinates',
  summary: 'Disks, rings and petals are rectangles in polar coordinates. Derive dA = r dr dθ from a polar rectangle, integrate over regions bounded by polar curves, and use it to prove ∫e^(−x²) dx = √π.',
  minutes: 19,
  objectives: [
    'Describe disks, annuli, sectors and regions bounded by polar curves with constant or $\\theta$-dependent limits',
    'Derive the area element $dA = r\\,dr\\,d\\theta$ from the area of a polar rectangle',
    'Convert a double integral to polar coordinates and evaluate it',
    'Evaluate the Gaussian integral $\\int_{-\\infty}^{\\infty} e^{-x^2}\\,dx = \\sqrt{\\pi}$ with the squaring trick',
    'Sample points uniformly in a disk in code, using what $dA = r\\,dr\\,d\\theta$ says about area',
  ],
  steps: [
    // 1 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Round regions need round coordinates',
      blocks: [
        {
          type: 'p',
          text: 'Find the volume under the paraboloid $z = 4 - x^2 - y^2$ and above the $xy$-plane. The shadow of the solid is the disk $x^2 + y^2 \\le 4$, and as a type I region that disk is $-2 \\le x \\le 2$, $-\\sqrt{4 - x^2} \\le y \\le \\sqrt{4 - x^2}$:',
        },
        {
          type: 'math',
          tex: 'V = \\int_{-2}^{2}\\int_{-\\sqrt{4 - x^2}}^{\\sqrt{4 - x^2}} (4 - x^2 - y^2)\\,dy\\,dx',
          caption: 'Correct, but the inner integral produces $(4 - x^2)^{3/2}$ terms that need a trigonometric substitution.',
        },
        {
          type: 'p',
          text: 'Both the region and the integrand are built from $x^2 + y^2$, the square of the distance from the origin. That is a strong hint to use [[polar-coordinates]]: $x = r\\cos\\theta$, $y = r\\sin\\theta$, $x^2 + y^2 = r^2$. In polar coordinates the disk is simply $0 \\le r \\le 2$, $0 \\le \\theta \\le 2\\pi$: a rectangle in the $r\\theta$-plane.',
        },
        {
          type: 'definition',
          term: '[[calc3-polar-rectangle|Polar rectangle]]',
          text: 'A region $R = \\{(r, \\theta) : a \\le r \\le b,\\ \\alpha \\le \\theta \\le \\beta\\}$, with $0 \\le a < b$ and $0 < \\beta - \\alpha \\le 2\\pi$. Disks ($a = 0$), annuli (rings), sectors and pieces of rings are all polar rectangles.',
        },
        {
          type: 'figure',
          svg: /*fig:polar-grid*/`<svg viewBox="0 0 360 310" xmlns="http://www.w3.org/2000/svg"><path d="M109.3,280.3 L267.8,258.0 A230,230 0 0 0 87.8,65.0 L54.6,221.5 A70,70 0 0 1 109.3,280.3 Z" fill="currentColor" class="f-blue" fill-opacity="0.08"/><path d="M161.4,201.8 L193.7,178.3 A190,190 0 0 0 162.1,144.5 L136.4,175.1 A150,150 0 0 1 161.4,201.8 Z" fill="currentColor" class="f-orange" fill-opacity="0.35"/><path d="M109.3,280.3 A70,70 0 0 0 54.6,221.5" fill="none" stroke="currentColor" class="s-blue" stroke-width="1.3"/><path d="M148.9,274.7 A110,110 0 0 0 62.9,182.4" fill="none" stroke="currentColor" class="s-blue" stroke-width="1.3"/><path d="M188.5,269.1 A150,150 0 0 0 71.2,143.3" fill="none" stroke="currentColor" class="s-blue" stroke-width="1.3"/><path d="M228.2,263.6 A190,190 0 0 0 79.5,104.2" fill="none" stroke="currentColor" class="s-blue" stroke-width="1.3"/><path d="M267.8,258.0 A230,230 0 0 0 87.8,65.0" fill="none" stroke="currentColor" class="s-blue" stroke-width="1.3"/><line x1="109.3" y1="280.3" x2="267.8" y2="258.0" stroke="currentColor" class="s-blue" stroke-width="1.3"/><line x1="104.9" y1="263.8" x2="253.3" y2="203.8" stroke="currentColor" class="s-blue" stroke-width="1.3"/><line x1="96.6" y1="248.9" x2="226.1" y2="154.8" stroke="currentColor" class="s-blue" stroke-width="1.3"/><line x1="85.0" y1="236.4" x2="187.8" y2="113.8" stroke="currentColor" class="s-blue" stroke-width="1.3"/><line x1="70.7" y1="227.1" x2="140.8" y2="83.3" stroke="currentColor" class="s-blue" stroke-width="1.3"/><line x1="54.6" y1="221.5" x2="87.8" y2="65.0" stroke="currentColor" class="s-blue" stroke-width="1.3"/><line x1="40" y1="290" x2="161.4" y2="201.8" stroke="currentColor" class="s-gray" stroke-width="1" stroke-dasharray="4 4"/><line x1="40" y1="290" x2="136.4" y2="175.1" stroke="currentColor" class="s-gray" stroke-width="1" stroke-dasharray="4 4"/><line x1="40" y1="290" x2="330" y2="290" stroke="currentColor" stroke-width="1.2"/><path d="M336,290 L328,286 L328,294 Z" fill="currentColor"/><line x1="40" y1="290" x2="40" y2="20" stroke="currentColor" stroke-width="1.2"/><path d="M40,14 L36,22 L44,22 Z" fill="currentColor"/><text x="340" y="295" font-size="14" font-style="italic">x</text><text x="35" y="12" font-size="14" font-style="italic" text-anchor="end">y</text><text x="34" y="306" font-size="13" text-anchor="end">O</text><path d="M88.5,254.7 A60,60 0 0 0 78.6,244.0" fill="none" stroke="currentColor" class="s-red" stroke-width="2.6"/><text x="60" y="252" font-size="13" class="t-red" text-anchor="middle">Δθ</text><text x="183.5" y="206.1" font-size="14" class="t-orange" text-anchor="middle">Δr</text><text x="189.7" y="152.2" font-size="14" class="t-orange" text-anchor="start">r* Δθ</text><line x1="40" y1="290" x2="164.3" y2="174.1" stroke="currentColor" class="s-gray" stroke-width="1.2"/><circle cx="164.3" cy="174.1" r="3.5" fill="currentColor" class="f-red"/><text x="109.1" y="214.1" font-size="14" font-style="italic" text-anchor="end">r*</text></svg>`,
          alt: 'A piece of an annulus in the first quadrant divided by circular arcs and rays into a grid of small polar rectangles. One small polar rectangle is highlighted; its radial side is labeled delta r, its outer arc r-star delta theta, and the angle it subtends at the origin delta theta. A gray segment from the origin to its center is labeled r-star.',
          caption: 'Circles $r = r_i$ and rays $\\theta = \\theta_j$ cut a polar rectangle into small polar rectangles. They are not all the same size: cells farther out are wider, because an angle $\\Delta\\theta$ sweeps an arc of length $r\\,\\Delta\\theta$.',
          maxWidth: 380,
        },
      ],
    },
    // 2 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Where the extra r comes from',
      blocks: [
        {
          type: 'p',
          text: 'Divide $[a, b]$ into pieces of width $\\Delta r$ and $[\\alpha, \\beta]$ into pieces of width $\\Delta\\theta$. The circles and rays cut $R$ into small polar rectangles $R_{ij}$. To build a Riemann sum you need the area of each one.',
        },
        {
          type: 'derivation',
          title: 'Area of one small polar rectangle',
          steps: [
            { tex: '\\Delta A_{ij} = \\tfrac12 r_i^2\\,\\Delta\\theta - \\tfrac12 r_{i-1}^2\\,\\Delta\\theta', why: 'A sector of radius $r$ and angle $\\Delta\\theta$ has area $\\frac12 r^2\\,\\Delta\\theta$. The polar rectangle is a big sector (radius $r_i$) minus a small one (radius $r_{i-1}$).' },
            { tex: '= \\tfrac12 (r_i + r_{i-1})(r_i - r_{i-1})\\,\\Delta\\theta', why: 'Factor the difference of squares.' },
            { tex: '= r_i^*\\,\\Delta r\\,\\Delta\\theta, \\qquad r_i^* = \\tfrac12(r_{i-1} + r_i)', why: '$r_i - r_{i-1} = \\Delta r$, and $\\frac12(r_i + r_{i-1})$ is the middle radius. This is exact, not an approximation.' },
            { tex: '\\iint_R f\\,dA \\approx \\sum_{i}\\sum_{j} f(r_i^*\\cos\\theta_j^*, r_i^*\\sin\\theta_j^*)\\,r_i^*\\,\\Delta r\\,\\Delta\\theta', why: 'Sample $f$ at the center of each polar rectangle, at polar coordinates $(r_i^*, \\theta_j^*)$. This is a Riemann sum for the function $g(r, \\theta) = f(r\\cos\\theta, r\\sin\\theta)\\,r$ on the rectangle $[a, b] \\times [\\alpha, \\beta]$.' },
          ],
          result: 'Letting $\\Delta r, \\Delta\\theta \\to 0$ turns the sum into an iterated integral of $g$, with an extra factor $r$.',
        },
        {
          type: 'theorem',
          name: 'Change to polar coordinates',
          tex: '\\iint_R f(x, y)\\,dA = \\int_\\alpha^\\beta\\int_a^b f(r\\cos\\theta, r\\sin\\theta)\\,r\\,dr\\,d\\theta',
          text: 'for $f$ continuous on the polar rectangle $R$, $0 \\le a < b$, $0 < \\beta - \\alpha \\le 2\\pi$. In short: substitute $x = r\\cos\\theta$, $y = r\\sin\\theta$ and $dA = r\\,dr\\,d\\theta$.',
        },
        {
          type: 'plot3d',
          x: [-2, 2],
          y: [-2, 2],
          z: [0, 4],
          resolution: 22,
          parametricSurfaces: [
            { x: 'u*cos(v)', y: 'u*sin(v)', z: '4 - u^2', u: [0, 2], v: [0, '2pi'], color: 'blue', opacity: 0.3, label: '$z = 4 - r^2$' },
            { x: '(b + 0.4u)*cos(a + 0.5v)', y: '(b + 0.4u)*sin(a + 0.5v)', z: H, u: [0, 1], v: [0, 1], color: 'orange', opacity: 0.95, label: 'a polar box' },
            { x: '(b + 0.4)*cos(a + 0.5u)', y: '(b + 0.4)*sin(a + 0.5u)', z: `v*${H}`, u: [0, 1], v: [0, 1], color: 'orange', opacity: 0.85 },
            { x: 'b*cos(a + 0.5u)', y: 'b*sin(a + 0.5u)', z: `v*${H}`, u: [0, 1], v: [0, 1], color: 'orange', opacity: 0.85 },
            { x: '(b + 0.4u)*cos(a)', y: '(b + 0.4u)*sin(a)', z: `v*${H}`, u: [0, 1], v: [0, 1], color: 'orange', opacity: 0.85 },
            { x: '(b + 0.4u)*cos(a + 0.5)', y: '(b + 0.4u)*sin(a + 0.5)', z: `v*${H}`, u: [0, 1], v: [0, 1], color: 'orange', opacity: 0.85 },
          ],
          sliders: [
            { name: 'b', min: 0, max: 1.6, step: 0.05, value: 1, label: 'inner radius of the box $r$' },
            { name: 'a', min: 0, max: 5.78, step: 0.05, value: 0.4, label: 'starting angle $\\theta$', play: true, loop: true },
          ],
          readouts: [
            { label: 'base area $r^*\\,\\Delta r\\,\\Delta\\theta = $', expr: '(b + 0.2)*0.4*0.5', digits: 3 },
            { label: 'box volume $=$', expr: `${H}*(b + 0.2)*0.4*0.5`, digits: 3 },
          ],
          view: { azimuth: 30, elevation: 28 },
          caption: 'One "polar box" under the paraboloid, with $\\Delta r = 0.4$ and $\\Delta\\theta = 0.5$. Slide it outward: its base widens in proportion to $r$, so the same $\\Delta r\\,\\Delta\\theta$ covers more area far from the origin. That growth is the factor $r$ in $dA = r\\,dr\\,d\\theta$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why $r$, and why it is not optional',
          text: 'A step $\\Delta r$ is a genuine length, but a step $\\Delta\\theta$ is an angle, and the distance it moves you is $r\\,\\Delta\\theta$. So a little polar rectangle is approximately a rectangle with sides $\\Delta r$ and $r\\,\\Delta\\theta$. Near the origin the cells are tiny; far out they are big. In the unit on change of variables you will see this $r$ as a special case of the Jacobian, the area-scaling factor of any coordinate change.',
        },
      ],
    },
    // 3
    {
      kind: 'mcq',
      prompt: 'Two small polar rectangles both have $\\Delta r = 0.1$ and $\\Delta\\theta = 0.1$. One is centered at radius $r = 1$, the other at $r = 5$. How do their areas compare?',
      options: [
        { text: 'They are equal, because they have the same $\\Delta r$ and $\\Delta\\theta$', why: 'That would be true for ordinary rectangles with equal $\\Delta x$ and $\\Delta y$, but $\\Delta\\theta$ is an angle, not a length. The arc it sweeps grows with $r$.' },
        { text: 'The outer one is $5$ times larger', correct: true, why: 'Each area is $r^*\\,\\Delta r\\,\\Delta\\theta$: $1 \\cdot 0.01 = 0.01$ and $5 \\cdot 0.01 = 0.05$.' },
        { text: 'The outer one is $25$ times larger', why: 'Area scales with $r$, not $r^2$. The $r^2$ in the sector formula cancels down to $r^*\\,\\Delta r$ once you subtract the inner sector.' },
        { text: 'The inner one is larger, because it is closer to the origin', why: 'Closer to the origin the rays are closer together, so the cells are *smaller*.' },
      ],
      explanation: 'A polar rectangle has area $r^*\\,\\Delta r\\,\\Delta\\theta$ exactly, where $r^*$ is its middle radius. Same $\\Delta r$ and $\\Delta\\theta$ at five times the radius gives five times the area: $0.05$ versus $0.01$. This is exactly the factor $r$ in $dA = r\\,dr\\,d\\theta$.',
    },
    // 4 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Evaluating integrals in polar form',
      blocks: [
        {
          type: 'p',
          text: 'Back to the paraboloid. In polar form the integrand is $4 - r^2$ and the disk is $0 \\le r \\le 2$, $0 \\le \\theta \\le 2\\pi$.',
        },
        {
          type: 'derivation',
          title: 'Volume under $z = 4 - x^2 - y^2$ above the $xy$-plane',
          steps: [
            { tex: 'V = \\int_0^{2\\pi}\\int_0^2 (4 - r^2)\\,r\\,dr\\,d\\theta', why: 'Substitute $x^2 + y^2 = r^2$, attach the factor $r$ from $dA$, and use the polar rectangle limits of the disk.' },
            { tex: '\\int_0^2 (4r - r^3)\\,dr = \\left[2r^2 - \\tfrac14 r^4\\right]_0^2 = 8 - 4 = 4', why: 'Distribute the $r$ and integrate in $r$. The extra $r$ actually makes this easier: it turns $4 - r^2$ into a polynomial whose antiderivative is immediate.' },
            { tex: 'V = \\int_0^{2\\pi} 4\\,d\\theta = 8\\pi', why: 'The inner result does not depend on $\\theta$ (the solid is symmetric about the $z$-axis), so the outer integral just multiplies by $2\\pi$.' },
          ],
          result: '$V = 8\\pi \\approx 25.13$. The Cartesian set-up above gives the same number after a page of trigonometric substitution.',
        },
        {
          type: 'p',
          text: 'The integrand need not be radially symmetric. Polar coordinates pay off whenever the **region** is round.',
        },
        {
          type: 'derivation',
          title: '$\\displaystyle\\iint_R (3x + 4y^2)\\,dA$, $R$ = upper half of the ring $1 \\le x^2 + y^2 \\le 4$',
          steps: [
            { tex: 'R = \\{1 \\le r \\le 2,\\ 0 \\le \\theta \\le \\pi\\}', why: 'The ring is $1 \\le r \\le 2$; the upper half plane $y \\ge 0$ is $0 \\le \\theta \\le \\pi$.' },
            { tex: '\\int_0^\\pi\\int_1^2 \\left(3r\\cos\\theta + 4r^2\\sin^2\\theta\\right) r\\,dr\\,d\\theta', why: 'Substitute $x = r\\cos\\theta$, $y = r\\sin\\theta$, and $dA = r\\,dr\\,d\\theta$.' },
            { tex: '= \\int_0^\\pi \\Big[r^3\\cos\\theta + r^4\\sin^2\\theta\\Big]_{r=1}^{r=2} d\\theta = \\int_0^\\pi \\left(7\\cos\\theta + 15\\sin^2\\theta\\right) d\\theta', why: 'Inner integral in $r$, with $\\theta$ held constant: $\\int 3r^2\\,dr = r^3$ and $\\int 4r^3\\,dr = r^4$. Then $8 - 1 = 7$ and $16 - 1 = 15$.' },
            { tex: '= \\Big[7\\sin\\theta + \\tfrac{15}{2}\\left(\\theta - \\tfrac12\\sin 2\\theta\\right)\\Big]_0^\\pi = \\tfrac{15\\pi}{2}', why: 'Use $\\sin^2\\theta = \\frac12(1 - \\cos 2\\theta)$. All the sine terms vanish at $0$ and $\\pi$.' },
          ],
          result: '$\\iint_R (3x + 4y^2)\\,dA = \\frac{15\\pi}{2} \\approx 23.56$. The $3x$ part contributes $0$: it is odd under $x \\to -x$, and the half ring is symmetric about the $y$-axis.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'The most common polar mistake',
          text: 'Forgetting the $r$ in $dA = r\\,dr\\,d\\theta$. Without it, the area of the unit disk would come out as $\\int_0^{2\\pi}\\int_0^1 dr\\,d\\theta = 2\\pi$ instead of $\\pi$. Quick self-check: integrate $1$ over your region and see whether you get its known area.',
        },
      ],
    },
    // 5
    {
      kind: 'numeric',
      prompt: 'Evaluate $\\displaystyle\\iint_D \\sqrt{x^2 + y^2}\\,dA$, where $D$ is the disk $x^2 + y^2 \\le 9$.',
      hint: 'In polar form the integrand is $r$, and $dA$ contributes another $r$.',
      answer: '18pi',
      answerTex: '18\\pi',
      label: 'value $=$',
      explanation: '$\\int_0^{2\\pi}\\int_0^3 r \\cdot r\\,dr\\,d\\theta = 2\\pi \\cdot \\left[\\tfrac13 r^3\\right]_0^3 = 2\\pi \\cdot 9 = 18\\pi \\approx 56.55$. Geometrically this is the volume between the cone $z = \\sqrt{x^2 + y^2}$ and the plane $z = 0$ over the disk: the cylinder of volume $\\pi \\cdot 9 \\cdot 3 = 27\\pi$ minus the cone of volume $\\frac13 \\cdot 27\\pi = 9\\pi$. ✓',
    },
    // 6
    {
      kind: 'error',
      prompt: 'A student finds the volume under $z = 9 - x^2 - y^2$ above the $xy$-plane. Tap the first wrong line.',
      lines: [
        'The paraboloid meets $z = 0$ on the circle $x^2 + y^2 = 9$, so the region is $0 \\le r \\le 3$, $0 \\le \\theta \\le 2\\pi$.',
        'In polar form the height is $9 - r^2$.',
        '$V = \\displaystyle\\int_0^{2\\pi}\\int_0^3 (9 - r^2)\\,dr\\,d\\theta$',
        '$= 2\\pi\\left[9r - \\tfrac13 r^3\\right]_0^3 = 2\\pi(27 - 9) = 36\\pi$',
      ],
      errorLines: [3],
      explanation: 'Line 3 drops the factor $r$ from $dA = r\\,dr\\,d\\theta$. Correctly, $V = \\int_0^{2\\pi}\\int_0^3 (9 - r^2)\\,r\\,dr\\,d\\theta = 2\\pi\\left[\\tfrac92 r^2 - \\tfrac14 r^4\\right]_0^3 = 2\\pi\\left(\\tfrac{81}{2} - \\tfrac{81}{4}\\right) = \\frac{81\\pi}{2} \\approx 127.2$. The wrong answer $36\\pi$ treats every polar cell as if it had the same area regardless of its distance from the axis.',
    },
    // 7 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Regions bounded by polar curves',
      blocks: [
        {
          type: 'p',
          text: 'Just as type I regions let $y$ run between two curves, polar regions can let $r$ run between two [[polar-curve|polar curves]]: $D = \\{\\alpha \\le \\theta \\le \\beta,\\ h_1(\\theta) \\le r \\le h_2(\\theta)\\}$. Each ray from the origin at angle $\\theta$ enters $D$ at $r = h_1(\\theta)$ and leaves at $r = h_2(\\theta)$.',
        },
        {
          type: 'theorem',
          name: 'Polar regions',
          tex: '\\iint_D f\\,dA = \\int_\\alpha^\\beta\\int_{h_1(\\theta)}^{h_2(\\theta)} f(r\\cos\\theta, r\\sin\\theta)\\,r\\,dr\\,d\\theta',
          text: 'With $f = 1$ the inner integral is $\\frac12\\left[h_2(\\theta)^2 - h_1(\\theta)^2\\right]$, recovering the Calculus II area formula $A = \\int_\\alpha^\\beta \\frac12 r^2\\,d\\theta$.',
        },
        {
          type: 'graph',
          x: [-1.2, 1.2],
          y: [-1.2, 1.2],
          equal: true,
          polar: [
            { expr: 'cos(2theta)', label: '$r = \\cos 2\\theta$', color: 'gray', dashed: true },
            { expr: 'cos(2theta)', theta: ['-pi/4', 'pi/4'], label: 'the petal $-\\frac{\\pi}{4} \\le \\theta \\le \\frac{\\pi}{4}$', color: 'blue' },
          ],
          segments: [{ from: [0, 0], to: ['cos(2s)*cos(s)', 'cos(2s)*sin(s)'], color: 'red', arrow: true }],
          sliders: [{ name: 's', min: -0.785, max: 0.785, step: 0.01, value: 0.3, label: 'ray angle $\\theta$', play: true }],
          readouts: [{ label: 'the ray leaves at $r = \\cos 2\\theta =$', expr: 'cos(2s)', digits: 3 }],
          caption: 'The four-leaved rose $r = \\cos 2\\theta$. For the right-hand petal, each ray from the origin (red) runs from $r = 0$ to $r = \\cos 2\\theta$, and the petal is swept out as $\\theta$ goes from $-\\frac{\\pi}{4}$ to $\\frac{\\pi}{4}$, where $\\cos 2\\theta = 0$.',
        },
        {
          type: 'derivation',
          title: 'Area of one petal of $r = \\cos 2\\theta$',
          steps: [
            { tex: 'A = \\int_{-\\pi/4}^{\\pi/4}\\int_0^{\\cos 2\\theta} r\\,dr\\,d\\theta', why: 'Integrate $f = 1$. The petal is traced between consecutive zeros of $\\cos 2\\theta$, at $\\theta = \\pm\\frac{\\pi}{4}$.' },
            { tex: '= \\int_{-\\pi/4}^{\\pi/4} \\tfrac12\\cos^2 2\\theta\\,d\\theta = \\int_{-\\pi/4}^{\\pi/4} \\tfrac14(1 + \\cos 4\\theta)\\,d\\theta', why: 'Inner integral: $\\frac12 r^2$ from $0$ to $\\cos 2\\theta$. Then the half-angle identity $\\cos^2 u = \\frac12(1 + \\cos 2u)$.' },
            { tex: '= \\tfrac14\\left[\\theta + \\tfrac14\\sin 4\\theta\\right]_{-\\pi/4}^{\\pi/4} = \\tfrac14 \\cdot \\tfrac{\\pi}{2} = \\tfrac{\\pi}{8}', why: '$\\sin(\\pm\\pi) = 0$, leaving $\\frac14\\left(\\frac{\\pi}{4} + \\frac{\\pi}{4}\\right)$.' },
          ],
          result: 'Each petal has area $\\frac{\\pi}{8} \\approx 0.393$, so the whole rose has area $\\frac{\\pi}{2}$.',
        },
        {
          type: 'p',
          text: 'Circles through the origin are polar curves too. The cylinder $x^2 + y^2 = 2x$ stands on the circle of radius $1$ centered at $(1, 0)$; substituting gives $r^2 = 2r\\cos\\theta$, i.e. $r = 2\\cos\\theta$ for $-\\frac{\\pi}{2} \\le \\theta \\le \\frac{\\pi}{2}$. Find the volume inside this cylinder, under the paraboloid $z = x^2 + y^2$ and above the $xy$-plane.',
        },
        {
          type: 'plot3d',
          x: [0, 2],
          y: [-1, 1],
          z: [0, 4],
          parametricSurfaces: [
            { x: '1 + u*cos(v)', y: 'u*sin(v)', z: '(1 + u*cos(v))^2 + (u*sin(v))^2', u: [0, 1], v: [0, '2pi'], color: 'blue', opacity: 0.85, label: 'top: $z = x^2 + y^2$' },
            { x: '1 + cos(u)', y: 'sin(u)', z: 'v*(2 + 2cos(u))', u: [0, '2pi'], v: [0, 1], color: 'teal', opacity: 0.4, label: 'the cylinder $r = 2\\cos\\theta$' },
            { x: '1 + u*cos(v)', y: 'u*sin(v)', z: '0', u: [0, 1], v: [0, '2pi'], color: 'gray', opacity: 0.4 },
          ],
          view: { azimuth: 320, elevation: 22 },
          caption: 'The solid inside the cylinder $x^2 + y^2 = 2x$ under the paraboloid $z = x^2 + y^2$. The top is highest ($z = 4$) at $(2, 0)$, farthest from the origin, and touches $z = 0$ at the origin, where the cylinder passes through the $z$-axis.',
        },
        {
          type: 'derivation',
          title: 'Volume inside $r = 2\\cos\\theta$ under $z = r^2$',
          steps: [
            { tex: 'V = \\int_{-\\pi/2}^{\\pi/2}\\int_0^{2\\cos\\theta} r^2 \\cdot r\\,dr\\,d\\theta', why: 'Height $x^2 + y^2 = r^2$, times $r$ from $dA$. Each ray from the origin leaves the disk on the circle $r = 2\\cos\\theta$.' },
            { tex: '= \\int_{-\\pi/2}^{\\pi/2} \\tfrac14 (2\\cos\\theta)^4\\,d\\theta = 4\\int_{-\\pi/2}^{\\pi/2} \\cos^4\\theta\\,d\\theta', why: '$\\int_0^{h} r^3\\,dr = \\frac14 h^4$ and $2^4 = 16$.' },
            { tex: '= 4 \\cdot \\tfrac{3\\pi}{8} = \\tfrac{3\\pi}{2}', why: 'Using $\\cos^4\\theta = \\frac38 + \\frac12\\cos 2\\theta + \\frac18\\cos 4\\theta$, the cosine terms integrate to $0$ over $[-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$ and the constant gives $\\frac38 \\cdot \\pi$.' },
          ],
          result: '$V = \\frac{3\\pi}{2} \\approx 4.712$, matching a numerical Cartesian integration ($4.712389$).',
        },
      ],
    },
    // 8
    {
      kind: 'mcq',
      prompt: 'Which iterated integral gives $\\iint_D f\\,dA$ over the disk $D$: $x^2 + y^2 \\le 2y$?',
      options: [
        { text: '$\\displaystyle\\int_0^{2\\pi}\\int_0^{2} f(r\\cos\\theta, r\\sin\\theta)\\,r\\,dr\\,d\\theta$', why: 'That is the disk of radius $2$ centered at the origin. $D$ has radius $1$ and is centered at $(0, 1)$.' },
        { text: '$\\displaystyle\\int_0^{\\pi}\\int_0^{2\\sin\\theta} f(r\\cos\\theta, r\\sin\\theta)\\,r\\,dr\\,d\\theta$', correct: true, why: '$r^2 \\le 2r\\sin\\theta$ gives $r \\le 2\\sin\\theta$, which needs $\\sin\\theta \\ge 0$: the disk lies in the upper half plane, swept once as $\\theta$ goes from $0$ to $\\pi$.' },
        { text: '$\\displaystyle\\int_{-\\pi/2}^{\\pi/2}\\int_0^{2\\cos\\theta} f(r\\cos\\theta, r\\sin\\theta)\\,r\\,dr\\,d\\theta$', why: 'That is the disk $x^2 + y^2 \\le 2x$, centered on the $x$-axis. Here the $2y$ puts the center on the $y$-axis.' },
        { text: '$\\displaystyle\\int_0^{\\pi}\\int_0^{2\\sin\\theta} f(r\\cos\\theta, r\\sin\\theta)\\,dr\\,d\\theta$', why: 'The limits are right but the factor $r$ from $dA$ is missing.' },
      ],
      explanation: 'Substitute: $x^2 + y^2 = r^2$ and $2y = 2r\\sin\\theta$, so the disk is $r \\le 2\\sin\\theta$. Completing the square, $x^2 + (y - 1)^2 \\le 1$: the disk of radius $1$ centered at $(0, 1)$, which touches the origin and lies above the $x$-axis, so $0 \\le \\theta \\le \\pi$. Check with $f = 1$: $\\int_0^\\pi 2\\sin^2\\theta\\,d\\theta = \\pi$, the area of a unit disk. ✓',
    },
    // 9
    {
      kind: 'expr',
      prompt: 'Convert $\\displaystyle\\iint_D x^2 y\\,dA$ to polar coordinates. What is the integrand of $\\displaystyle\\iint \\ldots\\,dr\\,d\\theta$, **including** the factor from $dA$?',
      hint: 'Substitute $x = r\\cos\\theta$ and $y = r\\sin\\theta$, then multiply by $r$. Type `theta` for $\\theta$.',
      label: 'integrand $=$',
      variables: ['r', 'theta'],
      domain: [0.2, 3],
      answer: 'r^4*cos(theta)^2*sin(theta)',
      answerTex: 'r^4\\cos^2\\theta\\,\\sin\\theta',
      explanation: '$x^2 y = (r\\cos\\theta)^2(r\\sin\\theta) = r^3\\cos^2\\theta\\sin\\theta$, and $dA = r\\,dr\\,d\\theta$ adds one more $r$: the integrand is $r^4\\cos^2\\theta\\sin\\theta$. Over the unit disk this would integrate to $0$ (the integrand is odd in $y$), while over the upper half disk it gives $\\int_0^\\pi\\int_0^1 r^4\\cos^2\\theta\\sin\\theta\\,dr\\,d\\theta = \\frac15 \\cdot \\frac23 = \\frac{2}{15}$.',
    },
    // 10 ────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'The Gaussian integral',
      blocks: [
        {
          type: 'p',
          text: 'The bell curve $e^{-x^2}$ is everywhere in probability, physics and graphics (Gaussian blur), yet it has no elementary antiderivative. So how do we know the area under it? The trick is to make the problem *harder*: go up a dimension, where the factor $r$ from $dA$ appears and rescues you.',
        },
        {
          type: 'plot3d',
          x: [-2.5, 2.5],
          y: [-2.5, 2.5],
          z: [0, 1],
          parametricSurfaces: [
            { x: 'u*cos(v)', y: 'u*sin(v)', z: 'e^(-u^2)', u: [0, 2.5], v: [0, '2pi'], color: 'blue', opacity: 0.55, label: '$z = e^{-(x^2 + y^2)} = e^{-r^2}$' },
            { x: 'c*cos(u)', y: 'c*sin(u)', z: 'v*e^(-c^2)', u: [0, '2pi'], v: [0, 1], color: 'orange', opacity: 0.85, label: 'a thin shell at radius $r$' },
          ],
          sliders: [{ name: 'c', min: 0.05, max: 2.4, step: 0.05, value: 0.7, label: 'shell radius $r$', play: true }],
          readouts: [{ label: 'shell volume per unit $dr$: $2\\pi r e^{-r^2} =$', expr: '2pi*c*e^(-c^2)', digits: 4 }],
          view: { azimuth: 30, elevation: 22 },
          caption: 'The volume under the 2D bell is a sum of thin cylindrical shells. A shell at radius $r$ has circumference $2\\pi r$ and height $e^{-r^2}$, and $2\\pi r e^{-r^2}$ is exactly the derivative of $-\\pi e^{-r^2}$. Its peak is at $r \\approx 0.71$: near the center the shells are short in circumference, far out they are short in height.',
        },
        {
          type: 'derivation',
          title: '$\\displaystyle\\int_{-\\infty}^{\\infty} e^{-x^2}\\,dx = \\sqrt{\\pi}$',
          steps: [
            { tex: 'I = \\int_{-\\infty}^{\\infty} e^{-x^2}\\,dx', why: 'An [[improper-integral]]. It converges, because $e^{-x^2} \\le e^{-|x| + 1}$ for all $x$ and that bound has a finite integral.' },
            { tex: 'I^2 = \\left(\\int_{-\\infty}^{\\infty} e^{-x^2}\\,dx\\right)\\left(\\int_{-\\infty}^{\\infty} e^{-y^2}\\,dy\\right)', why: 'Write the same number twice, naming the dummy variable $x$ in one copy and $y$ in the other.' },
            { tex: '= \\iint_{\\mathbb{R}^2} e^{-x^2}e^{-y^2}\\,dA = \\iint_{\\mathbb{R}^2} e^{-(x^2 + y^2)}\\,dA', why: 'A product of a function of $x$ and a function of $y$ is a double integral over the plane (the separable rule, run backwards). Fubini applies because the integrand is positive.' },
            { tex: '= \\int_0^{2\\pi}\\int_0^{\\infty} e^{-r^2}\\,r\\,dr\\,d\\theta', why: 'The whole plane is $0 \\le r < \\infty$, $0 \\le \\theta \\le 2\\pi$. Now the factor $r$ is exactly the derivative of $r^2$, up to a constant.' },
            { tex: '= 2\\pi\\lim_{b \\to \\infty}\\left[-\\tfrac12 e^{-r^2}\\right]_0^b = 2\\pi \\cdot \\tfrac12 = \\pi', why: 'Substitute $u = r^2$; as $b \\to \\infty$, $e^{-b^2} \\to 0$.' },
            { tex: 'I = \\sqrt{\\pi}', why: '$I > 0$ because the integrand is positive, so take the positive square root.' },
          ],
          result: 'The [[calc3-gaussian-integral|Gaussian integral]]: $\\int_{-\\infty}^{\\infty} e^{-x^2}\\,dx = \\sqrt{\\pi} \\approx 1.7725$.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Why the normal density has $\\frac{1}{\\sqrt{2\\pi}}$',
          text: 'The [[stat-normal-distribution|normal distribution]] has density $\\frac{1}{\\sqrt{2\\pi}}e^{-z^2/2}$. Substituting $x = \\frac{z}{\\sqrt2}$ in the Gaussian integral gives $\\int_{-\\infty}^{\\infty} e^{-z^2/2}\\,dz = \\sqrt2\\,\\sqrt{\\pi} = \\sqrt{2\\pi}$, so dividing by $\\sqrt{2\\pi}$ makes the total probability exactly $1$.',
        },
        {
          type: 'deepdive',
          title: 'Is it legal to integrate over the plane in polar form?',
          blocks: [
            {
              type: 'p',
              text: 'The step "$\\iint_{\\mathbb{R}^2} = \\int_0^{2\\pi}\\int_0^\\infty$" swaps a limit of squares $[-a, a]^2$ for a limit of disks $r \\le a$. For a positive integrand this is safe. The square $[-a, a]^2$ contains the disk of radius $a$ and is contained in the disk of radius $a\\sqrt2$, so',
            },
            {
              type: 'math',
              tex: '\\pi\\left(1 - e^{-a^2}\\right) \\le \\left(\\int_{-a}^{a} e^{-x^2}\\,dx\\right)^2 \\le \\pi\\left(1 - e^{-2a^2}\\right)',
              caption: 'Both bounds tend to $\\pi$ as $a \\to \\infty$, so the middle does too: the squeeze theorem makes the argument rigorous.',
            },
          ],
        },
        {
          type: 'callout',
          variant: 'history',
          text: 'The integral turned up in the 18th century in the work of de Moivre and Laplace on approximating binomial probabilities, the road to the normal distribution. The squaring trick with polar coordinates, now the standard textbook proof, is usually credited to Poisson.',
        },
      ],
    },
    // 11
    {
      kind: 'numeric',
      prompt: 'Use the squaring trick (or a substitution into the Gaussian integral) to find $\\displaystyle\\int_{-\\infty}^{\\infty} e^{-x^2/2}\\,dx$.',
      hint: 'Squaring gives $\\int_0^{2\\pi}\\int_0^\\infty e^{-r^2/2}\\,r\\,dr\\,d\\theta$. The inner integral is $\\left[-e^{-r^2/2}\\right]_0^\\infty$.',
      answer: 'sqrt(2pi)',
      answerTex: '\\sqrt{2\\pi}',
      label: 'value $=$',
      explanation: 'Squaring: $J^2 = \\int_0^{2\\pi}\\int_0^\\infty e^{-r^2/2}\\,r\\,dr\\,d\\theta = 2\\pi \\cdot \\left[-e^{-r^2/2}\\right]_0^\\infty = 2\\pi \\cdot 1 = 2\\pi$, so $J = \\sqrt{2\\pi} \\approx 2.5066$. Alternatively substitute $x = \\sqrt2\\,u$, $dx = \\sqrt2\\,du$: $J = \\sqrt2\\int e^{-u^2}\\,du = \\sqrt2\\sqrt\\pi$. This is the normalizing constant of the standard normal density.',
    },
    // 12 ────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Polar area in code: sampling a disk',
      blocks: [
        {
          type: 'p',
          text: 'Games constantly pick random points in a disk: bullet spread inside a reticle, loot scattered around a crate, a particle burst, a spawn point within a radius. The obvious code, a random angle and a radius uniform in $[0, R]$, is wrong, and $dA = r\\,dr\\,d\\theta$ explains why.',
        },
        {
          type: 'p',
          text: 'With $r$ uniform, every ring of width $dr$ gets the same number of points, but the area of a ring is $2\\pi r\\,dr$, growing with $r$. So the points crowd toward the center. For points uniform by **area**, the fraction within radius $\\rho$ must equal the area fraction $\\frac{\\pi\\rho^2}{\\pi R^2} = \\left(\\frac{\\rho}{R}\\right)^2$. If $U$ is uniform on $[0, 1]$, then $r = R\\sqrt{U}$ has exactly that property: $P(R\\sqrt{U} \\le \\rho) = P\\left(U \\le \\frac{\\rho^2}{R^2}\\right) = \\frac{\\rho^2}{R^2}$.',
        },
        {
          type: 'code',
          title: 'polar_disk.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdint>
#include <cstdio>

// Tiny deterministic random generator (a linear congruential generator).
struct Lcg {
    std::uint32_t state = 12345u;
    double next() {                       // uniform in [0, 1)
        state = 1664525u * state + 1013904223u;
        return state / 4294967296.0;
    }
};

int main() {
    const double pi = std::acos(-1.0);

    // 1) Polar midpoint rule: volume under z = 4 - r^2 over the disk r <= 2. Exact: 8*pi.
    for (int n = 4; n <= 64; n *= 4) {
        const double dr = 2.0 / n, dth = 2.0 * pi / n;
        double V = 0.0;
        for (int i = 0; i < n; ++i) {
            const double r = (i + 0.5) * dr;
            for (int j = 0; j < n; ++j)
                V += (4.0 - r * r) * r * dr * dth;   // f * (r dr dtheta)
        }
        std::printf("n = %2d  V = %.6f  (exact %.6f)\\n", n, V, 8.0 * pi);
    }

    // 2) Random points in the unit disk: what fraction lands within radius 1/2?
    //    The inner disk has 1/4 of the area, so a uniform sampler should give 0.25.
    Lcg rng;
    const int N = 100000;
    int naive = 0, correct = 0;
    for (int k = 0; k < N; ++k) {
        const double theta = 2.0 * pi * rng.next();
        const double u = rng.next();
        const double r1 = u;                      // naive: radius uniform in [0, 1)
        const double r2 = std::sqrt(u);           // correct: area uniform
        const double x1 = r1 * std::cos(theta), y1 = r1 * std::sin(theta);
        const double x2 = r2 * std::cos(theta), y2 = r2 * std::sin(theta);
        if (x1 * x1 + y1 * y1 < 0.25) ++naive;
        if (x2 * x2 + y2 * y2 < 0.25) ++correct;
    }
    std::printf("naive r = u:        %.4f\\n", double(naive) / N);
    std::printf("correct r = sqrt(u): %.4f\\n", double(correct) / N);
}`,
          output: `n =  4  V = 25.918139  (exact 25.132741)
n = 16  V = 25.181829  (exact 25.132741)
n = 64  V = 25.135809  (exact 25.132741)
naive r = u:        0.4969
correct r = sqrt(u): 0.2506`,
          annotations: [
            { lines: 24, text: 'The polar midpoint rule: $f$ at the cell center times the cell area $r\\,\\Delta r\\,\\Delta\\theta$. Delete the `* r` and the answer is badly wrong, the code version of forgetting $dA = r\\,dr\\,d\\theta$.' },
            { lines: '37-38', text: 'Same random numbers, two radii. Uniform $r$ puts half the points inside radius $\\frac12$; $\\sqrt{u}$ puts a quarter there, matching the area.' },
            { lines: '44-45', text: 'The naive sampler is twice as dense as it should be in the inner disk, a visible clump in any spray pattern.' },
          ],
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Inverse transform sampling',
          text: 'The $\\sqrt{U}$ trick is a case of **inverse transform sampling**: the radius should have density proportional to $r$ (that is what $r\\,dr$ in $dA$ says), so its cumulative distribution is $F(r) = r^2$ on $[0, 1]$, and $F^{-1}(U) = \\sqrt{U}$. The same idea samples a sphere uniformly or importance-samples a light in a path tracer.',
        },
      ],
    },
    // 13
    {
      kind: 'order',
      prompt: 'Put the steps for evaluating $\\iint_D f\\,dA$ in polar coordinates in order.',
      lines: [
        'Sketch $D$ and check that it is described simply in terms of $r$ and $\\theta$',
        'Write the limits: $\\alpha \\le \\theta \\le \\beta$ and $h_1(\\theta) \\le r \\le h_2(\\theta)$',
        'Substitute $x = r\\cos\\theta$, $y = r\\sin\\theta$ in $f$ and replace $dA$ by $r\\,dr\\,d\\theta$',
        'Integrate in $r$ with $\\theta$ held fixed',
        'Integrate the result in $\\theta$ from $\\alpha$ to $\\beta$',
      ],
      distractors: ['Replace $dA$ by $dr\\,d\\theta$'],
      explanation: 'Region first (a sketch tells you whether polar coordinates fit and what the limits are), then the integrand with its factor $r$, then the inner $r$-integral (whose limits may depend on $\\theta$), then the outer $\\theta$-integral with constant limits. The distractor drops the $r$.',
    },
    // 14
    {
      kind: 'fill',
      prompt: 'Describe the part of the ring $1 \\le x^2 + y^2 \\le 4$ that lies in the second quadrant ($x \\le 0$, $y \\ge 0$) as a polar rectangle.',
      template: '$r$ runs from ___ to ___ , and $\\theta$ runs from ___ to ___ .',
      blanks: [{ answers: ['$1$'] }, { answers: ['$2$'] }, { answers: ['$\\frac{\\pi}{2}$'] }, { answers: ['$\\pi$'] }],
      wordBank: ['$1$', '$2$', '$\\frac{\\pi}{2}$', '$\\pi$', '$4$', '$0$', '$\\frac{3\\pi}{2}$'],
      hint: '$x^2 + y^2 = r^2$, so $1 \\le r^2 \\le 4$. The second quadrant lies between the positive $y$-axis and the negative $x$-axis.',
      explanation: '$1 \\le r^2 \\le 4$ means $1 \\le r \\le 2$ (not $4$: that is $r^2$). The second quadrant runs from the positive $y$-axis ($\\theta = \\frac{\\pi}{2}$) to the negative $x$-axis ($\\theta = \\pi$). Its area is $\\int_{\\pi/2}^{\\pi}\\int_1^2 r\\,dr\\,d\\theta = \\frac{\\pi}{2} \\cdot \\frac32 = \\frac{3\\pi}{4}$, a quarter of the ring\'s $3\\pi$. ✓',
    },
  ],
  takeaways: [
    'Disks, rings, sectors and petals become rectangles (or simple regions) in polar coordinates: $x = r\\cos\\theta$, $y = r\\sin\\theta$, $x^2 + y^2 = r^2$.',
    'A polar rectangle with sides $\\Delta r$, $\\Delta\\theta$ has area $r^*\\,\\Delta r\\,\\Delta\\theta$, so $dA = r\\,dr\\,d\\theta$. Never drop the $r$.',
    'For $D = \\{\\alpha \\le \\theta \\le \\beta,\\ h_1(\\theta) \\le r \\le h_2(\\theta)\\}$: $\\iint_D f\\,dA = \\int_\\alpha^\\beta\\int_{h_1}^{h_2} f(r\\cos\\theta, r\\sin\\theta)\\,r\\,dr\\,d\\theta$.',
    'Squaring the Gaussian integral and switching to polar gives $\\int_{-\\infty}^{\\infty} e^{-x^2}\\,dx = \\sqrt{\\pi}$, the origin of the $\\frac{1}{\\sqrt{2\\pi}}$ in the normal density.',
    'Uniform random points in a disk need $r = R\\sqrt{U}$, not $r = RU$: the area element grows with $r$.',
  ],
  reading: [
    {
      title: 'OpenStax Calculus Volume 3 — Chapter 5: Multiple Integration',
      url: 'https://openstax.org/details/books/calculus-volume-3',
      source: 'openstax',
      note: 'Section 5.3 derives $dA = r\\,dr\\,d\\theta$ from polar rectangles and works through regions bounded by polar curves.',
    },
    {
      title: "Paul's Online Math Notes — Calculus III",
      url: 'https://tutorial.math.lamar.edu/Classes/CalcIII/CalcIII.aspx',
      source: 'other',
      note: 'The section on double integrals in polar coordinates has many conversion examples, including volumes between surfaces.',
    },
    {
      title: 'Wikipedia — Gaussian integral',
      url: 'https://en.wikipedia.org/wiki/Gaussian_integral',
      source: 'wikipedia',
      note: 'The polar-coordinates proof with full rigor, plus several other proofs and the generalization to $n$ dimensions.',
    },
    {
      title: 'Wikipedia — Inverse transform sampling',
      url: 'https://en.wikipedia.org/wiki/Inverse_transform_sampling',
      source: 'wikipedia',
      note: 'The general method behind $r = R\\sqrt{U}$ for sampling a disk uniformly.',
    },
  ],
};
