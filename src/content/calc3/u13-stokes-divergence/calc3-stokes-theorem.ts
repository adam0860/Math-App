import type { Lesson } from '../../types';

// ---------------------------------------------------------------- figures
const FIG_ORIENT = `<svg viewBox="0 0 520 270" xmlns="http://www.w3.org/2000/svg">
<path d="M35,185 A95,105 0 0,1 225,185 A95,26 0 0,1 35,185 Z" class="f-teal" fill-opacity="0.16"/>
<path d="M35,185 A95,105 0 0,1 225,185" fill="none" class="s-teal" stroke-width="1.6"/>
<path d="M35,185 A95,26 0 0,1 225,185" fill="none" class="s-blue" stroke-width="2.4" stroke-dasharray="5 4"/>
<path d="M35,185 A95,26 0 0,0 225,185" fill="none" class="s-blue" stroke-width="2.8"/>
<path d="M47.7,198.0 L37.5,197.1 L40.6,190.6 Z" class="f-blue"/>
<path d="M130.0,211.0 L120.4,214.6 L120.4,207.4 Z" class="f-blue"/>
<path d="M212.3,198.0 L205.1,205.4 L202.1,198.9 Z" class="f-blue"/>
<path d="M130.0,159.0 L138.0,156.0 L138.0,162.0 Z" class="f-blue"/>
<line x1="84.4" y1="111.3" x2="69.5" y2="87.1" class="s-red" stroke-width="2.2"/><path d="M65.1,79.9 L73.2,86.2 L67.1,90.0 Z" class="f-red"/>
<circle cx="84.4" cy="111.3" r="2.6" class="f-red"/>
<line x1="130.0" y1="94.4" x2="130.0" y2="64.8" class="s-red" stroke-width="2.2"/><path d="M130.0,56.4 L133.6,66.0 L126.4,66.0 Z" class="f-red"/>
<circle cx="130.0" cy="94.4" r="2.6" class="f-red"/>
<line x1="175.6" y1="111.3" x2="190.5" y2="87.1" class="s-red" stroke-width="2.2"/><path d="M194.9,79.9 L192.9,90.0 L186.8,86.2 Z" class="f-red"/>
<circle cx="175.6" cy="111.3" r="2.6" class="f-red"/>
<text x="142" y="50" font-size="16" class="t-red" font-weight="700">n</text>
<text x="219" y="227" font-size="16" class="t-blue" font-style="italic">C</text>
<text x="130" y="20" font-size="15" font-weight="700" text-anchor="middle">Outward (upward) normal</text>
<text x="130" y="249" font-size="13" text-anchor="middle">C counterclockwise</text>
<text x="130" y="266" font-size="13" text-anchor="middle">seen from above</text>
<path d="M295,185 A95,105 0 0,1 485,185 A95,26 0 0,1 295,185 Z" class="f-teal" fill-opacity="0.16"/>
<path d="M295,185 A95,105 0 0,1 485,185" fill="none" class="s-teal" stroke-width="1.6"/>
<path d="M295,185 A95,26 0 0,1 485,185" fill="none" class="s-blue" stroke-width="2.4" stroke-dasharray="5 4"/>
<path d="M295,185 A95,26 0 0,0 485,185" fill="none" class="s-blue" stroke-width="2.8"/>
<path d="M307.7,198.0 L317.9,198.9 L314.9,205.4 Z" class="f-blue"/>
<path d="M390.0,211.0 L399.6,207.4 L399.6,214.6 Z" class="f-blue"/>
<path d="M472.3,198.0 L479.4,190.6 L482.5,197.1 Z" class="f-blue"/>
<path d="M390.0,159.0 L382.0,162.0 L382.0,156.0 Z" class="f-blue"/>
<line x1="344.4" y1="111.3" x2="355.4" y2="129.2" class="s-red" stroke-width="2.2"/><path d="M359.9,136.4 L351.8,130.1 L357.9,126.3 Z" class="f-red"/>
<circle cx="344.4" cy="111.3" r="2.6" class="f-red"/>
<line x1="390.0" y1="94.4" x2="390.0" y2="116.4" class="s-red" stroke-width="2.2"/><path d="M390.0,124.8 L386.4,115.2 L393.6,115.2 Z" class="f-red"/>
<circle cx="390.0" cy="94.4" r="2.6" class="f-red"/>
<line x1="435.6" y1="111.3" x2="424.6" y2="129.2" class="s-red" stroke-width="2.2"/><path d="M420.1,136.4 L422.1,126.3 L428.2,130.1 Z" class="f-red"/>
<circle cx="435.6" cy="111.3" r="2.6" class="f-red"/>
<text x="402" y="132" font-size="16" class="t-red" font-weight="700">n</text>
<text x="479" y="227" font-size="16" class="t-blue" font-style="italic">C</text>
<text x="390" y="20" font-size="15" font-weight="700" text-anchor="middle">Inward (downward) normal</text>
<text x="390" y="249" font-size="13" text-anchor="middle">C clockwise</text>
<text x="390" y="266" font-size="13" text-anchor="middle">seen from above</text>
</svg>`;

export const lesson: Lesson = {
  id: 'calc3-stokes-theorem',
  title: "Stokes' Theorem",
  summary: 'Green\'s theorem lifted off the plane: the circulation of a field around a closed curve in space equals the flux of its curl through any surface that curve bounds. Orientation by the right-hand rule, verifying an example both ways, why every surface with the same edge gives the same answer, and curl as circulation per unit area.',
  minutes: 20,
  objectives: [
    'State Stokes\' theorem $\\oint_C \\vec F\\cdot d\\vec r = \\iint_S \\operatorname{curl}\\vec F\\cdot d\\vec S$ with its hypotheses, and recognize Green\'s theorem as its flat special case',
    'Orient the boundary of a surface with the right-hand rule, including surfaces with two boundary curves',
    'Verify Stokes\' theorem on an example by computing both the line integral and the surface integral',
    'Use surface independence to replace a hard surface (or a hard curve) by an easy one',
    'Interpret $(\\operatorname{curl}\\vec F)\\cdot\\vec n$ as circulation per unit area around a tiny loop, and check the theorem numerically in C++',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'From Green\'s theorem to Stokes\' theorem',
      blocks: [
        {
          type: 'p',
          text: 'Green\'s theorem says that for a flat region $D$ with positively oriented boundary $C$, the circulation of $\\vec F = \\langle P, Q \\rangle$ around $C$ equals the total "spin" inside: $\\oint_C \\vec F\\cdot d\\vec r = \\iint_D (Q_x - P_y)\\,dA$. In Unit 11 you rewrote the integrand as $(\\operatorname{curl}\\vec F)\\cdot\\mathbf{k}$: the component of the [[calc3-curl|curl]] along the normal of the flat region.',
        },
        {
          type: 'p',
          text: 'Now bend the region. Replace the flat $D$ by a curved surface $S$ in space, like a soap film or a parachute canopy, whose edge is a closed curve $C$. The flat normal $\\mathbf{k}$ becomes the surface\'s unit normal $\\vec n$, and $dA$ becomes the area element $dS$. The statement survives the bending unchanged.',
        },
        {
          type: 'theorem',
          name: 'Stokes\' theorem',
          tex: '\\oint_C \\vec F\\cdot d\\vec r = \\iint_S \\operatorname{curl}\\vec F\\cdot d\\vec S = \\iint_S (\\nabla\\times\\vec F)\\cdot\\vec n\\,dS',
          text: 'Let $S$ be an oriented, piecewise-smooth surface whose boundary is a simple, closed, piecewise-smooth curve $C$ with the positive orientation (defined on the next card). Let $\\vec F$ have continuous partial derivatives on an open region of space that contains $S$. Then the [[calc3-circulation|circulation]] of $\\vec F$ around $C$ equals the [[calc3-flux|flux]] of $\\operatorname{curl}\\vec F$ through $S$. This is [[calc3-stokes-theorem|Stokes\' theorem]].',
        },
        {
          type: 'plot3d',
          x: [-2.6, 2.6],
          y: [-2.6, 2.6],
          z: [-0.3, 2.8],
          equal: true,
          parametricSurfaces: [{ x: '2sin(u)*cos(v)', y: '2sin(u)*sin(v)', z: '2cos(u)', u: [0, 'pi/2'], v: [0, '2pi'], color: 'teal', opacity: 0.55, label: 'surface $S$' }],
          curves: [{ x: '2cos(t)', y: '2sin(t)', z: '0', t: [0, '2pi'], color: 'blue', label: 'boundary $C$' }],
          points: [{ x: '2sin(p)*cos(q)', y: '2sin(p)*sin(q)', z: '2cos(p)', color: 'red' }],
          vectors: [
            { from: ['2sin(p)*cos(q)', '2sin(p)*sin(q)', '2cos(p)'], to: ['2.8sin(p)*cos(q)', '2.8sin(p)*sin(q)', '2.8cos(p)'], color: 'red', label: 'n' },
            { from: ['2cos(s)', '2sin(s)', 0], to: ['2cos(s) - 0.9sin(s)', '2sin(s) + 0.9cos(s)', 0], color: 'blue', label: 'T' },
          ],
          sliders: [
            { name: 'p', min: 0.05, max: 1.5, step: 0.01, value: 0.7, label: 'normal: $\\phi$' },
            { name: 'q', min: 0, max: 6.28, step: 0.02, value: 5.6, label: 'normal: $\\theta$' },
            { name: 's', min: 0, max: 6.28, step: 0.02, value: 5.9, label: 'position on $C$', play: true, loop: true },
          ],
          view: { azimuth: 30, elevation: 24 },
          caption: 'A hemisphere $S$ of radius $2$ with its outward normal $\\vec n$ (red), and its boundary, the circle $C$ (blue). Press ▶ to send the tangent $\\vec T$ around $C$: it runs counterclockwise seen from above. Stokes\' theorem ties the line integral along the blue curve to a flux integral over the teal dome.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why Green\'s theorem is the special case',
          text: 'Take $S$ to be a flat region $D$ in the $xy$-plane with $\\vec n = \\mathbf{k}$, and $\\vec F = \\langle P(x, y), Q(x, y), 0 \\rangle$. Then $dS = dA$ and $(\\operatorname{curl}\\vec F)\\cdot\\mathbf{k} = Q_x - P_y$, so Stokes\' theorem reads $\\oint_C P\\,dx + Q\\,dy = \\iint_D (Q_x - P_y)\\,dA$. That is Green\'s theorem, word for word. The proof of Stokes\' theorem runs the same way: chop $S$ into tiny nearly flat patches, apply Green to each, and watch the shared edges cancel.',
        },
        {
          type: 'callout',
          variant: 'history',
          title: 'An exam question',
          text: 'The theorem first appeared in a postscript to a letter William Thomson (later Lord Kelvin) wrote to George Stokes in 1850. Stokes set it as a question on Cambridge\'s Smith\'s Prize examination in 1854, and the name stuck. One of the students who sat that paper was James Clerk Maxwell, who would build electromagnetism on it.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'mcq',
      prompt: 'Apply Stokes\' theorem to a flat region $D$ in the $xy$-plane, oriented by $\\vec n = \\mathbf{k}$, and a field $\\vec F = \\langle P(x, y),\\ Q(x, y),\\ 0 \\rangle$. Which theorem do you get?',
      options: [
        { text: 'The flux form of Green\'s theorem, $\\oint_C \\vec F\\cdot\\vec n\\,ds = \\iint_D (P_x + Q_y)\\,dA$', why: 'That form measures flow **across** $C$ and has the divergence inside. Stokes\' theorem has the curl inside and measures flow **along** $C$.' },
        { text: 'The circulation form of Green\'s theorem, $\\oint_C P\\,dx + Q\\,dy = \\iint_D (Q_x - P_y)\\,dA$', correct: true, why: 'With $\\vec n = \\mathbf{k}$ and $dS = dA$, the integrand $(\\operatorname{curl}\\vec F)\\cdot\\mathbf{k}$ is exactly $Q_x - P_y$.' },
        { text: 'The fundamental theorem for line integrals, $\\int_C \\nabla f\\cdot d\\vec r = f(B) - f(A)$', why: 'That theorem is about gradient fields along curves with two endpoints. A closed curve has no endpoints, and $\\vec F$ here need not be a gradient.' },
        { text: 'Nothing new: both sides are always $0$ for a flat region', why: 'Only if $Q_x - P_y$ integrates to zero. For $\\vec F = \\langle -y, x, 0 \\rangle$ around the unit circle both sides equal $2\\pi$.' },
      ],
      explanation: 'For a plane field, $\\operatorname{curl}\\vec F = \\langle 0, 0, Q_x - P_y \\rangle$, so $(\\operatorname{curl}\\vec F)\\cdot\\mathbf{k} = Q_x - P_y$. Stokes\' theorem then collapses to Green\'s theorem in circulation form. Stokes is Green\'s theorem for surfaces that are allowed to curve.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Orientation: the right-hand rule',
      blocks: [
        {
          type: 'p',
          text: 'Both sides of Stokes\' theorem change sign when you flip a direction: the line integral if you reverse $C$, the flux if you replace $\\vec n$ by $-\\vec n$. So the theorem only holds when the two directions are matched. The matching rule generalizes "region on your left" from Green\'s theorem.',
        },
        {
          type: 'definition',
          term: 'Positive (induced) orientation of the boundary',
          text: 'Let $S$ be oriented by the unit normal $\\vec n$. Its boundary $C$ is [[calc3-boundary-orientation|positively oriented]] if, when you walk along $C$ with your head pointing in the direction of $\\vec n$, the surface is always on your **left**.\n\nEquivalently, by the [[right-hand-rule|right-hand rule]]: curl the fingers of your right hand in the direction of $C$, and your thumb points along $\\vec n$ (on the side of $S$ near the edge).',
        },
        {
          type: 'figure',
          svg: FIG_ORIENT,
          alt: 'Two domes with boundary circles. Left: normals point up and out, and the boundary arrows go counterclockwise when seen from above. Right: normals point down into the dome, and the boundary arrows go clockwise when seen from above.',
          caption: 'The same dome with its two orientations. Flipping $\\vec n$ reverses the direction of the boundary.',
        },
        {
          type: 'p',
          text: 'A surface can have more than one boundary curve, and then each one gets its own direction from the same rule. The open cylinder $x^2 + y^2 = 1$, $0 \\le z \\le 2$, with outward normal has two: the bottom circle runs **counterclockwise** seen from above and the top circle **clockwise**. (Walk along the bottom with your head pointing outward: the cylinder is above you, on your left, only if you go counterclockwise.) Stokes\' theorem then says $\\iint_S \\operatorname{curl}\\vec F\\cdot d\\vec S = \\oint_{C_{\\text{bottom}}} \\vec F\\cdot d\\vec r + \\oint_{C_{\\text{top}}} \\vec F\\cdot d\\vec r$, just as Green\'s theorem handled a region with a hole.',
        },
        {
          type: 'plot3d',
          x: [-1.8, 1.8],
          y: [-1.8, 1.8],
          z: [-0.3, 2.3],
          equal: true,
          parametricSurfaces: [{ x: 'cos(u)', y: 'sin(u)', z: 'v', u: [0, '2pi'], v: [0, 2], color: 'teal', opacity: 0.45 }],
          curves: [
            { x: 'cos(t)', y: 'sin(t)', z: '0', t: [0, '2pi'], color: 'blue', label: 'bottom circle' },
            { x: 'cos(t)', y: 'sin(t)', z: '2', t: [0, '2pi'], color: 'purple', label: 'top circle' },
          ],
          vectors: [
            { from: [1, 0, 1], to: ['1 + 0.7k', 0, 1], color: 'red', label: 'n' },
            { from: ['cos(2.1)', 'sin(2.1)', 1], to: ['(1 + 0.7k)cos(2.1)', '(1 + 0.7k)sin(2.1)', 1], color: 'red' },
            { from: ['cos(4.2)', 'sin(4.2)', 1], to: ['(1 + 0.7k)cos(4.2)', '(1 + 0.7k)sin(4.2)', 1], color: 'red' },
            { from: ['cos(5.5)', 'sin(5.5)', 0], to: ['cos(5.5) - 0.8k*sin(5.5)', 'sin(5.5) + 0.8k*cos(5.5)', 0], color: 'blue' },
            { from: ['cos(2.4)', 'sin(2.4)', 0], to: ['cos(2.4) - 0.8k*sin(2.4)', 'sin(2.4) + 0.8k*cos(2.4)', 0], color: 'blue' },
            { from: ['cos(5.5)', 'sin(5.5)', 2], to: ['cos(5.5) + 0.8k*sin(5.5)', 'sin(5.5) - 0.8k*cos(5.5)', 2], color: 'purple' },
            { from: ['cos(2.4)', 'sin(2.4)', 2], to: ['cos(2.4) + 0.8k*sin(2.4)', 'sin(2.4) - 0.8k*cos(2.4)', 2], color: 'purple' },
          ],
          sliders: [{ name: 'k', min: -1, max: 1, step: 2, value: 1, label: 'orientation: $+1$ outward, $-1$ inward' }],
          view: { azimuth: 25, elevation: 28 },
          caption: 'The open cylinder and its two boundary circles. With the outward normal ($+1$) the bottom circle runs counterclockwise and the top one clockwise, seen from above. Flip to the inward normal ($-1$) and both boundary directions reverse.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'A one-point check',
          text: 'To test a proposed direction, pick one point of $C$ with unit tangent $\\vec T$ and normal $\\vec n$ there. The vector $\\vec n\\times\\vec T$ points to your left as you walk. The orientation is positive exactly when $\\vec n\\times\\vec T$ points **into** the surface.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'mcq',
      prompt: 'The bowl $S$: $z = x^2 + y^2$, $0 \\le z \\le 4$, is oriented by the normal that points **away from the inside of the bowl** (so $\\vec n$ has a negative $z$-component). Seen from above, which way does the positively oriented boundary circle $x^2 + y^2 = 4$, $z = 4$, run?',
      options: [
        { text: 'Counterclockwise', why: 'That is the direction for the **upward** normal $\\langle -2x, -2y, 1 \\rangle$, which points into the bowl. This problem uses the opposite normal.' },
        { text: 'Clockwise', correct: true, why: 'With your thumb pointing down and out, your right hand\'s fingers curl clockwise as seen from above. The one-point check confirms it.' },
        { text: 'Either direction works', why: 'Reversing $C$ negates the line integral, so only one direction makes Stokes\' theorem true for the given $\\vec n$.' },
        { text: 'It depends on the field $\\vec F$', why: 'Orientation is a property of the surface and its normal alone. It is fixed before any field is chosen.' },
      ],
      hint: 'Use the one-point check at $(2, 0, 4)$, where $\\vec n$ is a positive multiple of $\\langle 4, 0, -1 \\rangle$.',
      explanation: 'At $(2, 0, 4)$ the chosen normal is parallel to $\\langle 2x, 2y, -1 \\rangle = \\langle 4, 0, -1 \\rangle$. Try $\\vec T = \\langle 0, -1, 0 \\rangle$ (clockwise from above): $\\vec n\\times\\vec T \\propto \\langle 4, 0, -1 \\rangle\\times\\langle 0, -1, 0 \\rangle = \\langle -1, 0, -4 \\rangle$, which points inward and down, into the bowl\'s surface. So clockwise is positive. Counterclockwise would give $\\langle 1, 0, 4 \\rangle$, pointing up and away from the surface.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Verifying Stokes\' theorem both ways',
      blocks: [
        {
          type: 'p',
          text: 'Take $\\vec F = \\langle z, x, y \\rangle$ and let $S$ be the paraboloid $z = 4 - x^2 - y^2$, $z \\ge 0$, with the upward normal. Its boundary is the circle $x^2 + y^2 = 4$ in the plane $z = 0$, and by the right-hand rule it runs counterclockwise seen from above. Compute each side of the theorem separately.',
        },
        {
          type: 'derivation',
          title: 'Left side: the circulation $\\oint_C \\vec F\\cdot d\\vec r$',
          steps: [
            { tex: '\\vec r(t) = \\langle 2\\cos t,\\ 2\\sin t,\\ 0 \\rangle,\\quad 0 \\le t \\le 2\\pi', why: 'The circle of radius $2$ in the plane $z = 0$, traced counterclockwise seen from above, as the orientation requires.' },
            { tex: '\\vec F(\\vec r(t)) = \\langle 0,\\ 2\\cos t,\\ 2\\sin t \\rangle,\\qquad \\vec r\\,\'(t) = \\langle -2\\sin t,\\ 2\\cos t,\\ 0 \\rangle', why: 'Substitute $x = 2\\cos t$, $y = 2\\sin t$, $z = 0$ into $\\langle z, x, y \\rangle$, and differentiate $\\vec r$.' },
            { tex: '\\vec F\\cdot\\vec r\\,\' = 0 + 4\\cos^2 t + 0 = 4\\cos^2 t', why: 'Dot product. The first component of $\\vec F$ is $z = 0$ and the third component of $\\vec r\\,\'$ is $0$.' },
            { tex: '\\oint_C \\vec F\\cdot d\\vec r = \\int_0^{2\\pi} 4\\cos^2 t\\,dt = 4\\pi', why: '$\\int_0^{2\\pi}\\cos^2 t\\,dt = \\pi$ (average value $\\frac{1}{2}$ over a full period).' },
          ],
          result: 'The circulation is $4\\pi$.',
        },
        {
          type: 'derivation',
          title: 'Right side: the flux $\\iint_S \\operatorname{curl}\\vec F\\cdot d\\vec S$',
          steps: [
            { tex: '\\operatorname{curl}\\vec F = \\langle R_y - Q_z,\\ P_z - R_x,\\ Q_x - P_y \\rangle = \\langle 1, 1, 1 \\rangle', why: 'With $P = z$, $Q = x$, $R = y$: $R_y = 1$, $Q_z = 0$, $P_z = 1$, $R_x = 0$, $Q_x = 1$, $P_y = 0$.' },
            { tex: 'd\\vec S = \\langle -g_x,\\ -g_y,\\ 1 \\rangle\\,dA = \\langle 2x,\\ 2y,\\ 1 \\rangle\\,dA', why: 'Upward normal for the graph $z = g(x, y) = 4 - x^2 - y^2$, from the last unit.' },
            { tex: '\\operatorname{curl}\\vec F\\cdot\\langle 2x, 2y, 1 \\rangle = 2x + 2y + 1', why: 'Dot product. The curl is constant, so there is no $z$ to substitute.' },
            { tex: '\\iint_D (2x + 2y + 1)\\,dA = 0 + 0 + \\operatorname{area}(D) = 4\\pi', why: '$D$ is the disk of radius $2$. The terms $2x$ and $2y$ are odd under $x\\to -x$ and $y\\to -y$, so they integrate to $0$; the constant $1$ gives the area $\\pi\\cdot 2^2$.' },
          ],
          result: 'The flux of the curl is also $4\\pi$. ✓',
        },
        {
          type: 'plot3d',
          x: [-2.5, 2.5],
          y: [-2.5, 2.5],
          z: [0, 4.5],
          parametricSurfaces: [{ x: 'u*cos(v)', y: 'u*sin(v)', z: '4 - u^2', u: [0, 2], v: [0, '2pi'], color: 'teal', opacity: 0.6 }],
          curves: [{ x: '2cos(t)', y: '2sin(t)', z: '0', t: [0, '2pi'], color: 'blue', label: '$C$ (counterclockwise)' }],
          field: { x: 'z', y: 'x', z: 'y', n: 3, color: 'gray' },
          points: [{ x: 'a*cos(b)', y: 'a*sin(b)', z: '4 - a^2', label: 'P' }],
          vectors: [
            { from: ['a*cos(b)', 'a*sin(b)', '4 - a^2'], to: ['a*cos(b) + 0.35*2a*cos(b)', 'a*sin(b) + 0.35*2a*sin(b)', '4 - a^2 + 0.35'], color: 'purple', label: 'N' },
            { from: ['a*cos(b)', 'a*sin(b)', '4 - a^2'], to: ['a*cos(b) + 0.7', 'a*sin(b) + 0.7', '4 - a^2 + 0.7'], color: 'red', label: 'curl F' },
            { from: [0, 2, 0], to: [-0.9, 2, 0], color: 'blue' },
            { from: [0, -2, 0], to: [0.9, -2, 0], color: 'blue' },
          ],
          sliders: [
            { name: 'a', min: 0, max: 2, step: 0.02, value: 1.3, label: 'distance from the axis $r$' },
            { name: 'b', min: 0, max: 6.28, step: 0.02, value: 5.9, label: 'angle $\\theta$' },
          ],
          readouts: [{ label: '$\\operatorname{curl}\\vec F\\cdot\\vec N = 2x + 2y + 1 =$', expr: '2a*cos(b) + 2a*sin(b) + 1', digits: 3 }],
          view: { azimuth: 35, elevation: 22 },
          caption: 'The field $\\langle z, x, y \\rangle$ (gray), the paraboloid, and at the point $P$ the constant curl $\\langle 1, 1, 1 \\rangle$ (red, scaled) and the upward normal $\\vec N = \\langle 2x, 2y, 1 \\rangle$ (purple, scaled). Where they point the same way the integrand is positive; drag $P$ toward the side facing away from $\\langle 1, 1, 1 \\rangle$ and it turns negative. The positive and negative parts net out to exactly the area of the shadow disk.',
        },
        {
          type: 'callout',
          variant: 'exam',
          title: 'What graders look for',
          text: '"Verify Stokes\' theorem" means compute **both** integrals independently and show they agree. The usual lost points: tracing $C$ in the wrong direction for the chosen normal, and forgetting to substitute the surface equation into $\\operatorname{curl}\\vec F$ when the curl depends on $z$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'expr',
      prompt: 'Let $\\vec F = \\langle 2z,\\ x,\\ y^2 \\rangle$ and let $S$ be the paraboloid $z = 9 - x^2 - y^2$, $z \\ge 0$, with the upward normal. Writing the flux of the curl as $\\iint_D \\operatorname{curl}\\vec F\\cdot\\langle -g_x, -g_y, 1 \\rangle\\,dA$, enter the integrand as a function of $x$ and $y$.',
      label: '$\\operatorname{curl}\\vec F\\cdot\\langle -g_x, -g_y, 1 \\rangle =$',
      answer: '4x*y + 4y + 1',
      answerTex: '4xy + 4y + 1',
      variables: ['x', 'y'],
      hint: 'First $\\operatorname{curl}\\vec F = \\langle R_y - Q_z,\\ P_z - R_x,\\ Q_x - P_y \\rangle$. Then $g = 9 - x^2 - y^2$ gives $\\langle -g_x, -g_y, 1 \\rangle = \\langle 2x, 2y, 1 \\rangle$.',
      explanation: 'With $P = 2z$, $Q = x$, $R = y^2$: $\\operatorname{curl}\\vec F = \\langle 2y - 0,\\ 2 - 0,\\ 1 - 0 \\rangle = \\langle 2y, 2, 1 \\rangle$. Dotting with $\\langle 2x, 2y, 1 \\rangle$ gives $4xy + 4y + 1$. Over the disk of radius $3$, the odd terms $4xy$ and $4y$ integrate to $0$, leaving the area $9\\pi$. Check with the boundary: on $\\vec r = \\langle 3\\cos t, 3\\sin t, 0 \\rangle$, $\\vec F\\cdot\\vec r\\,\' = 9\\cos^2 t$, which integrates to $9\\pi$. ✓',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'Same boundary, same flux',
      blocks: [
        {
          type: 'p',
          text: 'Look at the left side of Stokes\' theorem: it only involves the curve $C$. So the right side cannot depend on which surface you stretch across $C$. The flat disk, the paraboloid and the hemisphere over the circle of radius $2$ must all give the same flux of $\\operatorname{curl}\\vec F$, as long as each is oriented to match $C$.',
        },
        {
          type: 'theorem',
          name: 'Surface independence',
          tex: '\\partial S_1 = \\partial S_2 = C \\implies \\iint_{S_1} \\operatorname{curl}\\vec F\\cdot d\\vec S = \\iint_{S_2} \\operatorname{curl}\\vec F\\cdot d\\vec S',
          text: 'If two oriented surfaces have the same boundary curve $C$, with the same induced direction on $C$, then the flux of $\\operatorname{curl}\\vec F$ is the same through both. ($\\partial S$ means "the boundary of $S$".)',
        },
        {
          type: 'plot3d',
          x: [-2.5, 2.5],
          y: [-2.5, 2.5],
          z: [-4.5, 5.5],
          parametricSurfaces: [{ x: 'u*cos(v)', y: 'u*sin(v)', z: 'c(4 - u^2)', u: [0, 2], v: [0, '2pi'], color: 'teal', opacity: 0.6 }],
          curves: [{ x: '2cos(t)', y: '2sin(t)', z: '0', t: [0, '2pi'], color: 'blue', label: 'fixed boundary $C$' }],
          vectors: [
            { from: [1, 0, '3c'], to: ['1 + 2c/sqrt(4c^2 + 1)', 0, '3c + 1/sqrt(4c^2 + 1)'], color: 'purple', label: 'n' },
            { from: [0, 2, 0], to: [-0.9, 2, 0], color: 'blue' },
            { from: [0, -2, 0], to: [0.9, -2, 0], color: 'blue' },
          ],
          sliders: [{ name: 'c', min: -1, max: 1.25, step: 0.01, value: 1, label: 'shape $c$ in $z = c(4 - x^2 - y^2)$', play: true }],
          readouts: [{ label: 'flux of $\\operatorname{curl}\\langle z, x, y \\rangle$ through $S$ $= 4\\pi \\approx$', expr: '4pi', digits: 4 }],
          view: { azimuth: 30, elevation: 18 },
          caption: 'Press ▶ to sweep through the surfaces $z = c(4 - x^2 - y^2)$, all with upward normal and the same boundary circle. At $c = 0$ the surface is the flat disk; at $c = -1$ it is a bowl hanging below. The flux of $\\operatorname{curl}\\vec F$ through every one of them is $4\\pi$: the integrand changes with $c$, but its total does not.',
        },
        {
          type: 'derivation',
          title: 'The hemisphere gives $4\\pi$ too',
          steps: [
            { tex: '\\vec n = \\tfrac{1}{2}\\langle x, y, z \\rangle \\text{ on } x^2 + y^2 + z^2 = 4,\\ z \\ge 0', why: 'On a sphere of radius $2$ centered at the origin the outward (here upward) unit normal is $\\vec r/2$. Its boundary is the same circle with the same counterclockwise direction.' },
            { tex: '\\operatorname{curl}\\vec F\\cdot\\vec n = \\tfrac{1}{2}(x + y + z)', why: 'Dot $\\langle 1, 1, 1 \\rangle$ with $\\vec n$.' },
            { tex: '\\iint_S \\tfrac{1}{2}(x + y + z)\\,dS = \\tfrac{1}{2}\\iint_S z\\,dS', why: 'The hemisphere is symmetric under $x \\to -x$ and under $y \\to -y$, so $\\iint_S x\\,dS = \\iint_S y\\,dS = 0$.' },
            { tex: '= \\tfrac{1}{2}\\int_0^{2\\pi}\\int_0^{\\pi/2} 2\\cos\\phi\\cdot 4\\sin\\phi\\,d\\phi\\,d\\theta = \\tfrac{1}{2}\\cdot 2\\pi\\cdot 4 = 4\\pi', why: 'Spherical parametrization: $z = 2\\cos\\phi$ and $dS = 4\\sin\\phi\\,d\\phi\\,d\\theta$. Then $\\int_0^{\\pi/2} 8\\sin\\phi\\cos\\phi\\,d\\phi = 4$.' },
          ],
          result: 'Paraboloid, hemisphere, disk: $4\\pi$ every time. The disk is by far the quickest: $\\operatorname{curl}\\vec F\\cdot\\mathbf{k} = 1$, so the flux is its area, $4\\pi$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Closed surfaces have zero flux of a curl',
          text: 'A sphere has no boundary, so the left side of Stokes\' theorem is an integral over nothing. To see it concretely, cut the sphere along its equator into two hemispheres. With the outward normal, the upper one induces the counterclockwise direction on the equator and the lower one the clockwise direction, so their circulations cancel. Hence $\\oiint_{\\text{closed } S} \\operatorname{curl}\\vec F\\cdot d\\vec S = 0$ for every closed surface. The next lesson reaches the same conclusion from $\\operatorname{div}(\\operatorname{curl}\\vec F) = 0$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'truefalse',
      prompt: 'If two oriented surfaces $S_1$ and $S_2$ have the same boundary curve with the same direction, then $\\iint_{S_1} \\vec F\\cdot d\\vec S = \\iint_{S_2} \\vec F\\cdot d\\vec S$ for **every** smooth vector field $\\vec F$.',
      answer: false,
      explanation: 'Surface independence is a property of fields that are curls, $\\vec G = \\operatorname{curl}\\vec F$. For a general field it fails. Take $\\vec F = \\langle x, y, z \\rangle$ and the unit circle in the $xy$-plane: through the flat unit disk (upward), $\\vec F\\cdot\\mathbf{k} = z = 0$, so the flux is $0$; through the upper unit hemisphere (outward), $\\vec F\\cdot\\vec n = x^2 + y^2 + z^2 = 1$, so the flux is its area, $2\\pi$. Not every field is a curl: a curl must have zero divergence, and $\\operatorname{div}\\langle x, y, z \\rangle = 3$.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'concept',
      title: 'Choosing the easier side',
      blocks: [
        {
          type: 'p',
          text: 'Stokes\' theorem is a two-way street. A messy line integral around a curve can become a simple flux through a flat surface, and a messy flux of a curl can become a simple line integral, or a flux through an easier surface with the same edge.',
        },
        {
          type: 'derivation',
          title: '$\\oint_C (-y^2\\,dx + x\\,dy + z^2\\,dz)$, where $C$ is where the plane $y + z = 2$ cuts the cylinder $x^2 + y^2 = 1$, counterclockwise seen from above',
          steps: [
            { tex: '\\operatorname{curl}\\langle -y^2,\\ x,\\ z^2 \\rangle = \\langle 0 - 0,\\ 0 - 0,\\ 1 + 2y \\rangle', why: '$R = z^2$ has no $x$ or $y$, and $P, Q$ have no $z$, so only $Q_x - P_y = 1 - (-2y)$ survives.' },
            { tex: 'S:\\ z = g(x, y) = 2 - y \\text{ over the unit disk } D, \\text{ upward}', why: 'The simplest surface with boundary $C$ is the flat elliptical piece of the plane inside the cylinder. Counterclockwise from above matches the upward normal.' },
            { tex: '\\operatorname{curl}\\vec F\\cdot\\langle -g_x, -g_y, 1 \\rangle = \\langle 0, 0, 1 + 2y \\rangle\\cdot\\langle 0, 1, 1 \\rangle = 1 + 2y', why: 'Here $g_x = 0$ and $g_y = -1$.' },
            { tex: '\\iint_D (1 + 2y)\\,dA = \\pi + 0 = \\pi', why: 'The constant gives the area of the unit disk; $2y$ is odd in $y$ and integrates to $0$.' },
          ],
          result: 'The line integral is $\\pi$. Done directly, with $\\vec r = \\langle \\cos t, \\sin t, 2 - \\sin t \\rangle$, the integrand is $\\sin^3 t + \\cos^2 t - (2 - \\sin t)^2\\cos t$: doable, but slower, and it also comes out to $\\pi$.',
        },
        {
          type: 'plot3d',
          x: [-1.6, 1.6],
          y: [-1.6, 1.6],
          z: [0, 3.4],
          equal: true,
          parametricSurfaces: [
            { x: 'cos(u)', y: 'sin(u)', z: 'v', u: [0, '2pi'], v: [0, 3.4], color: 'gray', opacity: 0.18 },
            { x: 'u*cos(v)', y: 'u*sin(v)', z: '2 - u*sin(v)', u: [0, 1], v: [0, '2pi'], color: 'teal', opacity: 0.7, label: 'plane piece $S$' },
          ],
          curves: [{ x: 'cos(t)', y: 'sin(t)', z: '2 - sin(t)', t: [0, '2pi'], color: 'blue', label: '$C$' }],
          points: [{ x: 'cos(s)', y: 'sin(s)', z: '2 - sin(s)', color: 'blue' }],
          vectors: [
            { from: ['cos(s)', 'sin(s)', '2 - sin(s)'], to: ['cos(s) - 0.7sin(s)', 'sin(s) + 0.7cos(s)', '2 - sin(s) - 0.7cos(s)'], color: 'blue', label: 'T' },
            { from: [0, 0, 2], to: [0, 0.8, 2.8], color: 'purple', label: 'n' },
          ],
          sliders: [{ name: 's', min: 0, max: 6.28, step: 0.02, value: 0, label: 'position on $C$', play: true, loop: true }],
          view: { azimuth: 40, elevation: 20 },
          caption: 'The cylinder (gray), the tilted plane $y + z = 2$ and their intersection, the ellipse $C$ (blue). The flat piece of the plane inside the cylinder has normal $\\langle 0, 1, 1 \\rangle$ (purple), which tilts upward, so $C$ must run counterclockwise seen from above. Press ▶ to watch $\\vec T$ go around.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'The hypotheses matter: a field with a hole',
          text: 'The vortex $\\vec F = \\dfrac{\\langle -y, x, 0 \\rangle}{x^2 + y^2}$ has $\\operatorname{curl}\\vec F = \\vec 0$ wherever it is defined, yet its circulation around the unit circle in the $xy$-plane is $2\\pi$. No contradiction: $\\vec F$ is undefined on the whole $z$-axis, and **every** surface bounded by that circle has to cross the $z$-axis (the circle is linked with it, like two links of a chain). So no surface satisfies the hypothesis "$\\vec F$ is smooth on an open region containing $S$". In the final lesson of this unit this field returns as the magnetic field around a wire.',
        },
      ],
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'numeric',
      prompt: 'Let $S$ be the part of the sphere $x^2 + y^2 + z^2 = 5$ above the plane $z = 1$, with the outward normal, and $\\vec F = \\langle -yz,\\ xz,\\ e^{xy} \\rangle$. Find $\\iint_S \\operatorname{curl}\\vec F\\cdot d\\vec S$. An exact answer or a decimal to 2 places is accepted.',
      answer: '8pi',
      answerTex: '8\\pi \\approx 25.13',
      hint: 'Do not compute the curl on the sphere. The boundary of $S$ is the circle $x^2 + y^2 = 4$ at height $z = 1$: either integrate $\\vec F$ around it, or use the flat disk with the same boundary.',
      explanation: 'The boundary is where $z = 1$ meets the sphere: $x^2 + y^2 = 4$. The outward normal points up, so $C$ runs counterclockwise from above: $\\vec r(t) = \\langle 2\\cos t, 2\\sin t, 1 \\rangle$. On $C$, $\\vec F = \\langle -2\\sin t,\\ 2\\cos t,\\ e^{4\\cos t\\sin t} \\rangle$ and $\\vec r\\,\' = \\langle -2\\sin t, 2\\cos t, 0 \\rangle$, so $\\vec F\\cdot\\vec r\\,\' = 4\\sin^2 t + 4\\cos^2 t = 4$ and the circulation is $8\\pi \\approx 25.13$. Through the flat disk instead: $(\\operatorname{curl}\\vec F)\\cdot\\mathbf{k} = Q_x - P_y = z + z = 2$ at $z = 1$, times the area $4\\pi$, again $8\\pi$. The $e^{xy}$ term never mattered.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'error',
      prompt: 'A student uses Stokes\' theorem to evaluate $\\oint_C \\vec F\\cdot d\\vec r$ for $\\vec F = \\langle 2y,\\ 3x,\\ e^z \\rangle$, where $C$ is the circle $x^2 + y^2 = 9$, $z = 0$, traversed counterclockwise as seen from above. Tap the first line that is wrong.',
      lines: [
        '$\\operatorname{curl}\\vec F = \\langle 0 - 0,\\ 0 - 0,\\ 3 - 2 \\rangle = \\langle 0, 0, 1 \\rangle$',
        'Choose $S$: the disk $x^2 + y^2 \\le 9$ in the plane $z = 0$, whose boundary is $C$.',
        '$C$ runs counterclockwise seen from above, so $S$ gets the normal $\\vec n = -\\mathbf{k}$.',
        '$(\\operatorname{curl}\\vec F)\\cdot\\vec n = -1$',
        '$\\oint_C \\vec F\\cdot d\\vec r = \\iint_S (-1)\\,dS = -9\\pi$',
      ],
      errorLines: [3],
      explanation: 'Line 3 gets the right-hand rule backwards: fingers curling counterclockwise (seen from above) put the thumb **up**, so $\\vec n = +\\mathbf{k}$. Then $(\\operatorname{curl}\\vec F)\\cdot\\mathbf{k} = 1$ and $\\oint_C \\vec F\\cdot d\\vec r = 9\\pi$, the area of the disk. A sanity check: Green\'s theorem in the plane gives $\\iint_D (Q_x - P_y)\\,dA = \\iint_D (3 - 2)\\,dA = 9\\pi$ for the counterclockwise circle.',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'concept',
      title: 'Curl as circulation per unit area',
      blocks: [
        {
          type: 'p',
          text: 'In Unit 11 you met the curl as a paddle wheel. Stokes\' theorem makes that picture exact. Let $S_a$ be a small disk of radius $a$ centered at a point $P_0$, with unit normal $\\vec n$, and $C_a$ its boundary circle. Because $\\operatorname{curl}\\vec F$ is continuous, it is nearly constant on the tiny disk, so',
        },
        {
          type: 'math',
          tex: '\\oint_{C_a} \\vec F\\cdot d\\vec r = \\iint_{S_a} (\\operatorname{curl}\\vec F)\\cdot\\vec n\\,dS \\approx (\\operatorname{curl}\\vec F)(P_0)\\cdot\\vec n\\ \\pi a^2',
        },
        {
          type: 'theorem',
          name: 'Circulation density',
          tex: '(\\operatorname{curl}\\vec F)(P_0)\\cdot\\vec n = \\lim_{a\\to 0} \\frac{1}{\\pi a^2}\\oint_{C_a} \\vec F\\cdot d\\vec r',
          text: 'The component of the curl along $\\vec n$ is the circulation per unit area around tiny loops perpendicular to $\\vec n$. It is largest when $\\vec n$ points along $\\operatorname{curl}\\vec F$, and then it equals $|\\operatorname{curl}\\vec F|$. This also shows the curl is a genuine geometric object: its definition does not depend on the coordinate system.',
        },
        {
          type: 'plot3d',
          x: [-1.5, 1.5],
          y: [-1.5, 1.5],
          z: [-1.5, 1.5],
          equal: true,
          field: { x: '-y', y: 'x', z: '0', n: 4, color: 'gray' },
          parametricSurfaces: [{ x: 'u*cos(v)*cos(w)', y: 'u*sin(v)', z: '-u*cos(v)*sin(w)', u: [0, 0.9], v: [0, '2pi'], color: 'teal', opacity: 0.6 }],
          curves: [{ x: '0.9cos(t)*cos(w)', y: '0.9sin(t)', z: '-0.9cos(t)*sin(w)', t: [0, '2pi'], color: 'blue', label: 'loop $C_a$' }],
          vectors: [
            { from: [0, 0, 0], to: ['1.3sin(w)', 0, '1.3cos(w)'], color: 'purple', label: 'n' },
            { from: [0, 0, 0], to: [0, 0, 1.45], color: 'red', label: 'curl F' },
            { from: [0, 0.9, 0], to: ['-0.6cos(w)', 0.9, '0.6sin(w)'], color: 'blue' },
          ],
          sliders: [{ name: 'w', min: 0, max: 3.14, step: 0.01, value: 0.6, label: 'tilt $\\alpha$ of the loop', play: true }],
          readouts: [
            { label: 'circulation per area $= (\\operatorname{curl}\\vec F)\\cdot\\vec n = 2\\cos\\alpha =$', expr: '2cos(w)', digits: 3 },
            { label: 'circulation around the loop $= 2\\cos\\alpha\\cdot\\pi(0.9)^2 =$', expr: '2cos(w)*pi*0.81', digits: 3 },
          ],
          view: { azimuth: 25, elevation: 20 },
          caption: 'The rotation field $\\langle -y, x, 0 \\rangle$ has constant curl $\\langle 0, 0, 2 \\rangle$ (red). Tilt the loop: its circulation is greatest when $\\vec n$ lines up with the curl ($\\alpha = 0$), zero when the loop stands on edge ($\\alpha = \\frac{\\pi}{2}$: the flow passes straight through the loop instead of around it), and negative once it flips past vertical.',
        },
        {
          type: 'code',
          title: 'stokes_check.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdio>
#include <numbers>

struct Vec3 { double x, y, z; };
double dot(Vec3 a, Vec3 b) { return a.x * b.x + a.y * b.y + a.z * b.z; }

Vec3 F(Vec3 p) { return {-p.y * p.y * p.y, p.x * p.x * p.x, p.x * p.z}; }

// curl F by central differences: <R_y - Q_z, P_z - R_x, Q_x - P_y>.
Vec3 curl(Vec3 p) {
    const double h = 1e-4;
    auto d = [&](Vec3 dir) {               // (F(p + h dir) - F(p - h dir)) / 2h
        Vec3 a = F({p.x + h * dir.x, p.y + h * dir.y, p.z + h * dir.z});
        Vec3 b = F({p.x - h * dir.x, p.y - h * dir.y, p.z - h * dir.z});
        return Vec3{(a.x - b.x) / (2 * h), (a.y - b.y) / (2 * h), (a.z - b.z) / (2 * h)};
    };
    Vec3 Fx = d({1, 0, 0}), Fy = d({0, 1, 0}), Fz = d({0, 0, 1});
    return {Fy.z - Fz.y, Fz.x - Fx.z, Fx.y - Fy.x};
}

int main() {
    const double pi = std::numbers::pi, a = 2.0;
    const int N = 400;

    // Left side: circulation around the boundary circle, counterclockwise from above.
    double circ = 0;
    for (int k = 0; k < N; ++k) {
        double t = (k + 0.5) * 2 * pi / N, dt = 2 * pi / N;
        Vec3 r = {a * std::cos(t), a * std::sin(t), 0};
        Vec3 dr = {-a * std::sin(t) * dt, a * std::cos(t) * dt, 0};
        circ += dot(F(r), dr);
    }

    // Right side: flux of curl F up through the hemisphere, n dS = (r_phi x r_theta) dphi dtheta.
    double flux = 0;
    const double dphi = (pi / 2) / N, dth = 2 * pi / N;
    for (int i = 0; i < N; ++i) {
        double phi = (i + 0.5) * dphi;
        for (int j = 0; j < N; ++j) {
            double th = (j + 0.5) * dth;
            Vec3 unit = {std::sin(phi) * std::cos(th), std::sin(phi) * std::sin(th), std::cos(phi)};
            Vec3 p = {a * unit.x, a * unit.y, a * unit.z};
            double dS = a * a * std::sin(phi) * dphi * dth;
            flux += dot(curl(p), unit) * dS;
        }
    }
    std::printf("circulation around C     = %.4f\\n", circ);
    std::printf("flux of curl F through S = %.4f\\n", flux);
    std::printf("exact value 24 pi        = %.4f\\n", 24 * pi);
}`,
          output: `circulation around C     = 75.3982
flux of curl F through S = 75.3984
exact value 24 pi        = 75.3982`,
          annotations: [
            { lines: 8, text: 'The field $\\vec F = \\langle -y^3, x^3, xz \\rangle$. Its curl $\\langle 0, -z, 3x^2 + 3y^2 \\rangle$ is not constant and has a sideways part, a real test.' },
            { lines: '11-20', text: 'The curl from the nine partial derivatives, each a central difference $\\frac{\\vec F(p + h\\vec e) - \\vec F(p - h\\vec e)}{2h}$: the same stencil a fluid solver uses on its grid.' },
            { lines: '27-33', text: 'Left side: $\\sum \\vec F(\\vec r(t_k))\\cdot\\vec r\\,\'(t_k)\\,\\Delta t$ around the circle of radius $2$, counterclockwise.' },
            { lines: '36-47', text: 'Right side: midpoint rule over the $(\\phi, \\theta)$ rectangle of the upper hemisphere. On a sphere the unit normal is the radial unit vector and $dS = a^2\\sin\\phi\\,d\\phi\\,d\\theta$.' },
            { lines: '48-50', text: 'Both sums approach $24\\pi$. The surface sum is off in the fourth decimal: midpoint-rule error, which shrinks like $1/N^2$.' },
          ],
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Curl in game smoke: vorticity confinement',
          text: 'Coarse simulation grids smear out small swirls. Fedkiw, Stam and Jensen\'s "Visual Simulation of Smoke" (SIGGRAPH 2001) put them back with **vorticity confinement**: compute the vorticity $\\vec\\omega = \\nabla\\times\\vec u$ on the grid with central differences, then add a small force that spins the fluid up around places where $|\\vec\\omega|$ peaks. Many real-time smoke and fire effects use the trick.',
        },
      ],
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'order',
      prompt: 'Put the steps for evaluating a line integral $\\oint_C \\vec F\\cdot d\\vec r$ with Stokes\' theorem in order.',
      lines: [
        'Choose a surface $S$ whose boundary is $C$ (the simplest one available, often flat)',
        'Orient $S$ by the right-hand rule, using the direction of $C$',
        'Parametrize $S$ and compute $\\vec r_u\\times\\vec r_v$, negating it if it points against the chosen normal',
        'Substitute the parametrization into $\\operatorname{curl}\\vec F$ and dot it with $\\vec r_u\\times\\vec r_v$',
        'Integrate the result over the parameter domain',
      ],
      distractors: ['Choose the normal of $S$ first, then trace $C$ in whichever direction is easier'],
      explanation: 'The direction of $C$ is given, so it dictates the normal, not the other way round (that is why the distractor fails). You need the surface before you can orient it, the orientation before you know the sign of $\\vec r_u\\times\\vec r_v$, and that vector before you can form the integrand $\\operatorname{curl}\\vec F\\cdot(\\vec r_u\\times\\vec r_v)$.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'fill',
      prompt: 'Complete the statement of Stokes\' theorem and its orientation rule.',
      template: 'The circulation of ___ around $C$ equals the flux of ___ through $S$. If you walk along $C$ with your head pointing along $\\vec n$, the surface stays on your ___.',
      blanks: [{ answers: ['$\\vec F$'] }, { answers: ['$\\operatorname{curl}\\vec F$'] }, { answers: ['left'] }],
      wordBank: ['$\\vec F$', '$\\operatorname{curl}\\vec F$', '$\\operatorname{div}\\vec F$', '$\\nabla f$', 'left', 'right'],
      explanation: '$\\oint_C \\vec F\\cdot d\\vec r = \\iint_S \\operatorname{curl}\\vec F\\cdot d\\vec S$: the field itself is integrated around the edge, its curl over the surface. The divergence belongs to the divergence theorem, next lesson. The "surface on your left" rule is the same as Green\'s "region on your left", with your head now pointing along $\\vec n$ instead of $\\mathbf{k}$.',
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'numeric',
      prompt: 'At a point $P_0$, a smooth field has $\\operatorname{curl}\\vec F(P_0) = \\langle 1, -2, 2 \\rangle$. Tiny circles centered at $P_0$ lie in the plane with unit normal $\\vec n = \\frac{1}{3}\\langle 2, 1, 2 \\rangle$ and are oriented by it. What does circulation divided by enclosed area approach as the circles shrink?',
      answer: '4/3',
      answerTex: '\\frac{4}{3}',
      hint: 'Circulation per unit area is $(\\operatorname{curl}\\vec F)\\cdot\\vec n$.',
      explanation: '$(\\operatorname{curl}\\vec F)\\cdot\\vec n = \\frac{1}{3}(1\\cdot 2 + (-2)\\cdot 1 + 2\\cdot 2) = \\frac{4}{3}$. So a circle of radius $0.01$ has circulation about $\\frac{4}{3}\\pi(0.01)^2$. Turning the plane so that $\\vec n$ points along the curl would give the largest possible value, $|\\operatorname{curl}\\vec F| = \\sqrt{1 + 4 + 4} = 3$.',
    },
  ],
  takeaways: [
    'Stokes\' theorem: $\\oint_C \\vec F\\cdot d\\vec r = \\iint_S \\operatorname{curl}\\vec F\\cdot d\\vec S$ for an oriented surface $S$ with boundary $C$ and $\\vec F$ smooth on a region containing $S$. Green\'s theorem is the flat case $\\vec n = \\mathbf{k}$.',
    'Orientation: walk along $C$ with your head along $\\vec n$ and keep $S$ on your left (right-hand rule: fingers along $C$, thumb along $\\vec n$). A surface with two boundary curves orients each one.',
    'To verify the theorem, compute the line integral and the flux of the curl separately; they must agree.',
    'Any two surfaces with the same oriented boundary carry the same flux of $\\operatorname{curl}\\vec F$, so pick the easiest one (usually flat). Through a closed surface the flux of a curl is $0$.',
    '$(\\operatorname{curl}\\vec F)\\cdot\\vec n$ is the circulation per unit area around tiny loops perpendicular to $\\vec n$, largest when $\\vec n$ points along the curl.',
    'The hypotheses matter: the vortex $\\frac{\\langle -y, x, 0 \\rangle}{x^2 + y^2}$ has zero curl but circulation $2\\pi$, because every surface spanning the loop crosses the $z$-axis where the field blows up.',
  ],
  reading: [
    {
      title: 'OpenStax Calculus Volume 3 — Stokes\' Theorem (section 6.7)',
      url: 'https://openstax.org/details/books/calculus-volume-3',
      source: 'openstax',
      note: 'Section 6.7 proves the theorem for graphs, works several verify-both-ways examples, and interprets the curl as circulation density.',
    },
    {
      title: 'Paul\'s Online Notes — Calculus III',
      url: 'https://tutorial.math.lamar.edu/Classes/CalcIII/CalcIII.aspx',
      source: 'other',
      note: 'The "Stokes\' Theorem" page in the Surface Integrals chapter has clearly worked examples in both directions.',
    },
    {
      title: 'Khan Academy — Multivariable calculus',
      url: 'https://www.khanacademy.org/math/multivariable-calculus',
      source: 'khan',
      note: 'The Stokes\' theorem videos build the intuition of tiny whirlpools cancelling, and prove the theorem for graphs.',
    },
    {
      title: 'Wikipedia — Kelvin–Stokes theorem',
      url: 'https://en.wikipedia.org/wiki/Kelvin%E2%80%93Stokes_theorem',
      source: 'wikipedia',
      note: 'The precise statement, a proof, and the history of the 1850 letter and the 1854 exam.',
    },
  ],
};
