import type { Lesson } from '../../types';

const SVG_CYL = /*SVG:c3-u02/c3w1-cyl*/ `<svg viewBox="0 0 470 320" xmlns="http://www.w3.org/2000/svg">
<line x1="215.0" y1="220.0" x2="233.8" y2="207.2" stroke="currentColor" class="s-gray" stroke-width="1.4" stroke-dasharray="5 4"/>
<line x1="215.0" y1="220.0" x2="177.0" y2="220.0" stroke="currentColor" class="s-gray" stroke-width="1.4" stroke-dasharray="5 4"/>
<line x1="215.0" y1="220.0" x2="215.0" y2="242.8" stroke="currentColor" class="s-gray" stroke-width="1.4" stroke-dasharray="5 4"/>
<line x1="215.0" y1="220.0" x2="125.2" y2="280.8" stroke="currentColor" stroke-width="1.8"/><path d="M120.8,283.8 L125.7,276.3 L129.6,282.1 Z" fill="currentColor" stroke="none"/>
<line x1="215.0" y1="220.0" x2="399.6" y2="220.0" stroke="currentColor" stroke-width="1.8"/><path d="M405.0,220.0 L396.7,223.5 L396.7,216.5 Z" fill="currentColor" stroke="none"/>
<line x1="215.0" y1="220.0" x2="215.0" y2="58.2" stroke="currentColor" stroke-width="1.8"/><path d="M215.0,52.8 L218.5,61.1 L211.5,61.1 Z" fill="currentColor" stroke="none"/>
<text x="112.5" y="289.4" font-size="17" text-anchor="middle" font-style="italic">x</text>
<text x="418.3" y="225.0" font-size="17" text-anchor="start" font-style="italic">y</text>
<text x="225.0" y="58.8" font-size="17" text-anchor="start" font-style="italic">z</text>
<polyline points="134.9,274.3 148.8,274.0 163.5,273.1 178.7,271.6 194.4,269.6 210.2,267.0 226.1,263.9 241.9,260.3 257.4,256.3 272.4,251.9 286.8,247.1 300.4,242.1 313.1,236.8 324.7,231.3 335.1,225.7 344.2,220.0 351.9,214.3 358.0,208.7 362.6,203.2 365.6,197.9 366.9,192.9 366.6,188.1 364.6,183.7 361.0,179.7 355.7,176.1 349.0,173.0 340.7,170.4 331.1,168.4 320.2,166.9 308.2,166.0 295.1,165.7 281.2,166.0 266.5,166.9 251.3,168.4 235.6,170.4 219.8,173.0 203.9,176.1 188.1,179.7 172.6,183.7 157.6,188.1 143.2,192.9 129.6,197.9 116.9,203.2 105.3,208.7 94.9,214.3 85.8,220.0 78.1,225.7 72.0,231.3 67.4,236.8 64.4,242.1 63.1,247.1 63.4,251.9 65.4,256.3 69.0,260.3 74.3,263.9 81.0,267.0 89.3,269.6 98.9,271.6 109.8,273.1 121.8,274.0 134.9,274.3" fill="none" stroke="currentColor" stroke-width="1.1" class="s-gray" stroke-dasharray="5 4"/>
<line x1="215.0" y1="220.0" x2="274.9" y2="251.1" stroke="currentColor" class="s-blue" stroke-width="2.6"/>
<line x1="274.9" y1="251.1" x2="274.9" y2="137.1" stroke="currentColor" class="s-purple" stroke-width="2.6"/>
<line x1="215.0" y1="106.0" x2="274.9" y2="137.1" stroke="currentColor" class="s-gray" stroke-width="1.2" stroke-dasharray="5 4"/>
<polyline points="191.4,236.0 192.7,236.0 193.9,235.9 195.2,235.9 196.5,235.8 197.8,235.8 199.1,235.7 200.5,235.6 201.8,235.4 203.2,235.3 204.6,235.1 206.0,235.0 207.4,234.8 208.8,234.6 210.2,234.4 211.6,234.2 213.1,233.9 214.5,233.7 215.9,233.4 217.4,233.1 218.8,232.8 220.2,232.5 221.6,232.2 223.0,231.8 224.4,231.5 225.8,231.1 227.2,230.7 228.6,230.4 230.0,230.0 231.3,229.6" fill="none" stroke="currentColor" stroke-width="2" class="s-orange"/>
<path d="M232.6,229.2 L226.5,234.3 L224.7,228.3 Z" fill="currentColor" stroke="none" class="f-orange"/>
<text x="204.1" y="256.5" font-size="17" text-anchor="middle" class="t-orange" font-style="italic">θ</text>
<text x="250.9" y="255.6" font-size="18" text-anchor="start" class="t-blue" font-style="italic">r</text>
<text x="283.9" y="199.1" font-size="18" text-anchor="start" class="t-purple" font-style="italic">z</text>
<circle cx="274.9" cy="137.1" r="5" fill="currentColor" class="f-red"/>
<text x="284.9" y="129.1" font-size="16" text-anchor="start" class="t-red">P(r, θ, z)</text>
<circle cx="274.9" cy="251.1" r="3.5" fill="currentColor" class="f-blue"/>
<text x="282.9" y="269.1" font-size="14" text-anchor="start" class="t-blue">(r, θ, 0)</text>
</svg>`;
const SVG_SPH = /*SVG:c3-u02/c3w1-sph*/ `<svg viewBox="0 0 470 320" xmlns="http://www.w3.org/2000/svg">
<line x1="215.0" y1="225.0" x2="233.8" y2="212.2" stroke="currentColor" class="s-gray" stroke-width="1.4" stroke-dasharray="5 4"/>
<line x1="215.0" y1="225.0" x2="177.0" y2="225.0" stroke="currentColor" class="s-gray" stroke-width="1.4" stroke-dasharray="5 4"/>
<line x1="215.0" y1="225.0" x2="215.0" y2="247.8" stroke="currentColor" class="s-gray" stroke-width="1.4" stroke-dasharray="5 4"/>
<line x1="215.0" y1="225.0" x2="125.2" y2="285.8" stroke="currentColor" stroke-width="1.8"/><path d="M120.8,288.8 L125.7,281.3 L129.6,287.1 Z" fill="currentColor" stroke="none"/>
<line x1="215.0" y1="225.0" x2="399.6" y2="225.0" stroke="currentColor" stroke-width="1.8"/><path d="M405.0,225.0 L396.7,228.5 L396.7,221.5 Z" fill="currentColor" stroke="none"/>
<line x1="215.0" y1="225.0" x2="215.0" y2="55.6" stroke="currentColor" stroke-width="1.8"/><path d="M215.0,50.2 L218.5,58.5 L211.5,58.5 Z" fill="currentColor" stroke="none"/>
<text x="112.5" y="294.4" font-size="17" text-anchor="middle" font-style="italic">x</text>
<text x="418.3" y="230.0" font-size="17" text-anchor="start" font-style="italic">y</text>
<text x="225.0" y="56.2" font-size="17" text-anchor="start" font-style="italic">z</text>
<line x1="215.0" y1="225.0" x2="262.1" y2="249.5" stroke="currentColor" class="s-blue" stroke-width="2" stroke-dasharray="5 4"/>
<line x1="262.1" y1="249.5" x2="262.1" y2="136.5" stroke="currentColor" class="s-gray" stroke-width="1.4" stroke-dasharray="5 4"/>
<line x1="215.0" y1="112.0" x2="262.1" y2="136.5" stroke="currentColor" class="s-gray" stroke-width="1.4" stroke-dasharray="5 4"/>
<line x1="215.0" y1="225.0" x2="262.1" y2="136.5" stroke="currentColor" class="s-red" stroke-width="2.8"/>
<polyline points="191.4,241.0 192.7,241.0 193.9,240.9 195.2,240.9 196.5,240.8 197.8,240.8 199.1,240.7 200.5,240.6 201.8,240.4 203.2,240.3 204.6,240.1 206.0,240.0 207.4,239.8 208.8,239.6 210.2,239.4 211.6,239.2 213.1,238.9 214.5,238.7 215.9,238.4 217.4,238.1 218.8,237.8 220.2,237.5 221.6,237.2 223.0,236.8 224.4,236.5 225.8,236.1 227.2,235.7 228.6,235.4 230.0,235.0 231.3,234.6" fill="none" stroke="currentColor" stroke-width="2" class="s-orange"/>
<path d="M232.6,234.2 L226.5,239.3 L224.7,233.3 Z" fill="currentColor" stroke="none" class="f-orange"/>
<text x="204.1" y="261.5" font-size="17" text-anchor="middle" class="t-orange" font-style="italic">θ</text>
<polyline points="215.0,168.0 215.6,168.4 216.3,168.7 216.9,169.2 217.6,169.6 218.2,170.1 218.9,170.6 219.5,171.2 220.1,171.8 220.8,172.4 221.4,173.0 222.0,173.7 222.6,174.4 223.3,175.1 223.9,175.9 224.5,176.7 225.1,177.5 225.7,178.4 226.2,179.3 226.8,180.2 227.4,181.1 228.0,182.1 228.5,183.1 229.1,184.1 229.6,185.1 230.2,186.2 230.7,187.3 231.2,188.4 231.7,189.5 232.2,190.7" fill="none" stroke="currentColor" stroke-width="2" class="s-green"/>
<path d="M232.7,191.8 L226.9,186.3 L232.7,183.8 Z" fill="currentColor" stroke="none" class="f-green"/>
<text x="229.3" y="160.2" font-size="17" text-anchor="middle" class="t-green" font-style="italic">ϕ</text>
<text x="248.6" y="182.8" font-size="19" text-anchor="start" class="t-red" font-style="italic">ρ</text>
<text x="242.6" y="259.3" font-size="14" text-anchor="start" class="t-blue">r = ρ sin ϕ</text>
<text x="207.0" y="117.0" font-size="14" text-anchor="end">z = ρ cos ϕ</text>
<circle cx="262.1" cy="136.5" r="5" fill="currentColor" class="f-red"/>
<text x="272.1" y="128.5" font-size="16" text-anchor="start" class="t-red">P(ρ, θ, ϕ)</text>
</svg>`;

export const lesson: Lesson = {
  id: 'calc3-cylindrical-spherical',
  title: 'Cylindrical and Spherical Coordinates',
  summary: 'Two coordinate systems built for round things: cylindrical (polar plus height) and spherical (distance and two angles). Convert in both directions, recognise their coordinate surfaces, and see why orbit cameras and radar think in spherical coordinates.',
  minutes: 18,
  objectives: [
    'Convert points between rectangular, cylindrical and spherical coordinates, choosing the angle in the correct quadrant',
    'Recognise the coordinate surfaces $r = c$, $\\theta = c$, $z = c$, $\\rho = c$ and $\\phi = c$',
    'Rewrite equations of surfaces from one coordinate system in another',
    'Describe solid regions such as cones, caps and shells with inequalities in the best-suited system',
    'Place an orbit camera from a distance, yaw and pitch, and convert back with `atan2` and `acos`',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Cylindrical coordinates: polar plus height',
      blocks: [
        {
          type: 'p',
          text: 'Rectangular coordinates are perfect for boxes and terrible for pipes, cones and planets. In Calculus II you met [[polar-coordinates]] for round regions in the plane. The simplest way to take them into space is to keep them for the shadow of a point in the $xy$-plane and add its height: those are [[calc3-cylindrical-coordinates|cylindrical coordinates]] $(r, \\theta, z)$.',
        },
        {
          type: 'figure',
          svg: SVG_CYL,
          alt: 'A point P above the xy-plane. Its shadow lies at distance r from the origin, at angle theta from the positive x-axis; the vertical segment from the shadow up to P has length z.',
          caption: '$r$ is the distance from the $z$-axis (not from the origin), $\\theta$ is the usual polar angle, and $z$ is the height.',
          maxWidth: 470,
        },
        {
          type: 'theorem',
          name: 'Cylindrical ↔ rectangular',
          tex: 'x = r\\cos\\theta, \\quad y = r\\sin\\theta, \\quad z = z \\qquad\\qquad r^2 = x^2 + y^2, \\quad \\tan\\theta = \\frac{y}{x}, \\quad z = z',
          text: 'We usually take $r \\ge 0$ and $0 \\le \\theta < 2\\pi$.',
        },
        {
          type: 'derivation',
          title: 'Convert $(2, \\frac{2\\pi}{3}, 1)$ to rectangular, and $(3, -3, -7)$ to cylindrical',
          steps: [
            { tex: 'x = 2\\cos\\tfrac{2\\pi}{3} = 2\\left(-\\tfrac{1}{2}\\right) = -1, \\quad y = 2\\sin\\tfrac{2\\pi}{3} = 2 \\cdot \\tfrac{\\sqrt{3}}{2} = \\sqrt{3}', why: 'Polar-to-rectangular on the first two coordinates; $z = 1$ is copied.' },
            { tex: '(2, \\tfrac{2\\pi}{3}, 1) \\to (-1, \\sqrt{3}, 1)', why: 'The shadow is in the second quadrant, as $\\theta = 120^\\circ$ predicts.' },
            { tex: 'r = \\sqrt{3^2 + (-3)^2} = 3\\sqrt{2}', why: 'Distance of the shadow $(3, -3)$ from the origin.' },
            { tex: '\\tan\\theta = \\tfrac{-3}{3} = -1, \\ (x, y) \\text{ in quadrant IV} \\implies \\theta = \\tfrac{7\\pi}{4}', why: '$\\tan\\theta = -1$ has two solutions in $[0, 2\\pi)$: $\\frac{3\\pi}{4}$ (quadrant II) and $\\frac{7\\pi}{4}$ (quadrant IV). The point decides.' },
            { tex: '(3, -3, -7) \\to (3\\sqrt{2}, \\tfrac{7\\pi}{4}, -7)', why: 'The height is unchanged.' },
          ],
          result: '$\\theta$ is the only delicate part of any conversion: $\\tan\\theta = \\frac{y}{x}$ never tells you the quadrant on its own.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Use atan2, not atan',
          text: '`std::atan(y / x)` returns angles in $(-\\frac{\\pi}{2}, \\frac{\\pi}{2})$ only — it cannot tell $(1, 1)$ from $(-1, -1)$ — and it divides by zero on the $y$-axis. `std::atan2(y, x)` looks at both signs and returns the correct angle in $(-\\pi, \\pi]$. Add $2\\pi$ to negative results if you want $[0, 2\\pi)$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'numeric',
      prompt: 'Convert the rectangular point $(-2, 2\\sqrt{3}, 5)$ to cylindrical coordinates. Enter $\\theta$, in radians, with $0 \\le \\theta < 2\\pi$.',
      hint: 'The shadow $(-2, 2\\sqrt{3})$ is in the second quadrant.',
      label: '$\\theta =$',
      answer: '2pi/3',
      answerTex: '\\frac{2\\pi}{3} \\approx 2.094',
      explanation: '$\\tan\\theta = \\frac{2\\sqrt{3}}{-2} = -\\sqrt{3}$. A calculator\'s $\\arctan(-\\sqrt{3}) = -\\frac{\\pi}{3}$ points into quadrant IV, but $(-2, 2\\sqrt{3})$ is in quadrant II, so add $\\pi$: $\\theta = \\frac{2\\pi}{3}$. With $r = \\sqrt{4 + 12} = 4$ the point is $(4, \\frac{2\\pi}{3}, 5)$.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Coordinate surfaces in cylindrical coordinates',
      blocks: [
        {
          type: 'p',
          text: 'Fix one cylindrical coordinate and let the other two roam: you get a **coordinate surface**. These are the shapes the system describes effortlessly — and the reason for its name.',
        },
        {
          type: 'list',
          items: [
            '$r = c$: all points at distance $c$ from the $z$-axis — a circular [[calc3-cylinder|cylinder]] around the $z$-axis.',
            '$\\theta = c$: a vertical **half-plane** hinged on the $z$-axis, like a page of an open book.',
            '$z = c$: a horizontal plane.',
          ],
        },
        {
          type: 'plot3d',
          x: [-3, 3],
          y: [-3, 3],
          z: [0, 3],
          equal: true,
          parametricSurfaces: [
            { x: 'r*cos(u)', y: 'r*sin(u)', z: 'v', u: [0, '2pi'], v: [0, 3], color: 'blue', opacity: 0.3, label: '$r = $ const' },
            { x: 'u*cos(q)', y: 'u*sin(q)', z: 'v', u: [0, 3], v: [0, 3], color: 'orange', opacity: 0.35, label: '$\\theta = $ const' },
            { x: 'u*cos(v)', y: 'u*sin(v)', z: 'h', u: [0, 3], v: [0, '2pi'], color: 'green', opacity: 0.25, label: '$z = $ const' },
          ],
          points: [{ x: 'r*cos(q)', y: 'r*sin(q)', z: 'h', label: 'P', color: 'red' }],
          sliders: [
            { name: 'r', min: 0.3, max: 2.8, step: 0.1, value: 1.8, label: '$r$' },
            { name: 'q', min: 0, max: 6.28, step: 0.05, value: 0.9, label: '$\\theta$' },
            { name: 'h', min: 0, max: 3, step: 0.1, value: 1.8, label: '$z$' },
          ],
          readouts: [
            { label: '$x = r\\cos\\theta =$', expr: 'r*cos(q)' },
            { label: '$y = r\\sin\\theta =$', expr: 'r*sin(q)' },
          ],
          resolution: 20,
          view: { azimuth: 30, elevation: 25 },
          caption: 'The point $P(r, \\theta, z)$ is where the blue cylinder, the orange half-plane and the green disk meet. Each slider moves exactly one of the three surfaces.',
        },
        {
          type: 'derivation',
          title: 'What surface is $r = 2\\sin\\theta$?',
          steps: [
            { tex: 'r^2 = 2r\\sin\\theta', why: 'Multiply both sides by $r$ to create the combinations $r^2$ and $r\\sin\\theta$, which have rectangular meanings. (This adds only the $z$-axis $r = 0$, which is already on the surface at $\\theta = 0$.)' },
            { tex: 'x^2 + y^2 = 2y', why: 'Substitute $r^2 = x^2 + y^2$ and $r\\sin\\theta = y$.' },
            { tex: 'x^2 + (y - 1)^2 = 1', why: 'Complete the square in $y$.' },
          ],
          result: 'In space (with $z$ free) this is a circular cylinder of radius $1$ whose axis is the vertical line through $(0, 1, 0)$ — it touches the $z$-axis.',
        },
        {
          type: 'table',
          headers: ['Rectangular', 'Cylindrical', 'Surface'],
          rows: [
            ['$x^2 + y^2 = 9$', '$r = 3$', 'cylinder of radius $3$'],
            ['$z = x^2 + y^2$', '$z = r^2$', 'circular paraboloid'],
            ['$z^2 = x^2 + y^2$', '$z = \\pm r$', 'double cone'],
            ['$x^2 + y^2 + z^2 = 4$', '$r^2 + z^2 = 4$', 'sphere of radius $2$'],
          ],
          caption: 'Whenever $x$ and $y$ appear only through $x^2 + y^2$, the surface is symmetric about the $z$-axis, and cylindrical coordinates remove a variable\'s worth of mess.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'expr',
      prompt: 'Write the saddle surface $z = x^2 - y^2$ in cylindrical coordinates, as $z$ in terms of $r$ and $\\theta$.',
      hint: 'Substitute $x = r\\cos\\theta$ and $y = r\\sin\\theta$, factor out $r^2$, and recall a double-angle formula. Type `theta` for $\\theta$.',
      label: '$z =$',
      answer: 'r^2*cos(2theta)',
      variables: ['r', 'theta'],
      answerTex: 'z = r^2\\cos 2\\theta',
      explanation: '$x^2 - y^2 = r^2\\cos^2\\theta - r^2\\sin^2\\theta = r^2(\\cos^2\\theta - \\sin^2\\theta) = r^2\\cos 2\\theta$. This form shows the saddle\'s shape at a glance: along any ray from the axis, the height grows like $r^2$ with sign $\\cos 2\\theta$ — up along $\\theta = 0, \\pi$ and down along $\\theta = \\frac{\\pi}{2}, \\frac{3\\pi}{2}$. ($r^2\\cos^2\\theta - r^2\\sin^2\\theta$ is accepted too.)',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Spherical coordinates: a distance and two angles',
      blocks: [
        {
          type: 'p',
          text: 'For spheres, cones through the origin and anything radiating from a point, the natural description is "how far, and in which direction". [[calc3-spherical-coordinates|Spherical coordinates]] $(\\rho, \\theta, \\phi)$ record exactly that: $\\rho$ ("rho") is the distance from the origin, $\\theta$ is the same azimuth angle as in cylindrical coordinates, and $\\phi$ ("phi") is the angle measured **down from the positive $z$-axis**.',
        },
        {
          type: 'figure',
          svg: SVG_SPH,
          alt: 'A point P joined to the origin by a segment of length rho. The angle phi is marked between the positive z-axis and that segment; the angle theta is marked in the xy-plane between the x-axis and the shadow of the segment, whose length is r equals rho sine phi. The height of P is z equals rho cosine phi.',
          caption: 'The right triangle with hypotenuse $\\rho$ and angle $\\phi$ at the origin gives $r = \\rho\\sin\\phi$ and $z = \\rho\\cos\\phi$.',
          maxWidth: 470,
        },
        {
          type: 'theorem',
          name: 'Spherical ↔ rectangular',
          tex: '\\begin{aligned} x &= \\rho\\sin\\phi\\cos\\theta, & y &= \\rho\\sin\\phi\\sin\\theta, & z &= \\rho\\cos\\phi \\\\ \\rho^2 &= x^2 + y^2 + z^2, & \\tan\\theta &= \\tfrac{y}{x}, & \\cos\\phi &= \\tfrac{z}{\\rho} \\end{aligned}',
          text: 'with $\\rho \\ge 0$, $0 \\le \\theta < 2\\pi$ and $0 \\le \\phi \\le \\pi$. $\\phi = 0$ is straight up the $z$-axis, $\\phi = \\frac{\\pi}{2}$ is the $xy$-plane, $\\phi = \\pi$ is straight down.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the formulas look like that',
          text: 'Work in two steps. First, in the vertical half-plane containing $P$: the right triangle with hypotenuse $\\rho$ and angle $\\phi$ at the $z$-axis has legs $z = \\rho\\cos\\phi$ (up) and $r = \\rho\\sin\\phi$ (out). Second, $r$ and $\\theta$ are ordinary polar coordinates of the shadow: $x = r\\cos\\theta$, $y = r\\sin\\theta$. Substitute $r = \\rho\\sin\\phi$ and you have the formulas. Because $\\phi \\le \\pi$, $\\sin\\phi \\ge 0$, so $r$ is never negative.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Physics swaps the names',
          text: 'This course uses the mathematics convention: $\\theta$ is the azimuth and $\\phi$ is the polar angle from the $z$-axis. Most physics texts (and the ISO standard) swap the two letters, writing $(r, \\theta, \\varphi)$ with $\\theta$ from the $z$-axis. Always check which angle a formula means before you use it.',
        },
        {
          type: 'derivation',
          title: 'Convert $(\\rho, \\theta, \\phi) = (2, \\frac{\\pi}{4}, \\frac{\\pi}{3})$ to rectangular',
          steps: [
            { tex: 'r = \\rho\\sin\\phi = 2 \\cdot \\tfrac{\\sqrt{3}}{2} = \\sqrt{3}, \\qquad z = \\rho\\cos\\phi = 2 \\cdot \\tfrac{1}{2} = 1', why: 'Split $\\rho$ into the distance from the $z$-axis and the height.' },
            { tex: 'x = \\sqrt{3}\\cos\\tfrac{\\pi}{4} = \\tfrac{\\sqrt{6}}{2}, \\qquad y = \\sqrt{3}\\sin\\tfrac{\\pi}{4} = \\tfrac{\\sqrt{6}}{2}', why: 'Polar coordinates for the shadow; $\\sqrt{3} \\cdot \\frac{\\sqrt{2}}{2} = \\frac{\\sqrt{6}}{2}$.' },
            { tex: '\\left(\\tfrac{\\sqrt{6}}{2}\\right)^2 + \\left(\\tfrac{\\sqrt{6}}{2}\\right)^2 + 1^2 = \\tfrac{3}{2} + \\tfrac{3}{2} + 1 = 4 = \\rho^2 \\ \\checkmark', why: 'Check: the distance from the origin must come out as $\\rho = 2$.' },
          ],
          result: '$(2, \\frac{\\pi}{4}, \\frac{\\pi}{3}) \\to \\left(\\frac{\\sqrt{6}}{2}, \\frac{\\sqrt{6}}{2}, 1\\right) \\approx (1.225, 1.225, 1)$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'numeric',
      prompt: 'Find the spherical coordinate $\\phi$ of the rectangular point $(0, 2\\sqrt{3}, -2)$. Give it in radians.',
      hint: 'First find $\\rho$, then use $\\cos\\phi = \\frac{z}{\\rho}$. Remember $0 \\le \\phi \\le \\pi$.',
      label: '$\\phi =$',
      answer: '2pi/3',
      answerTex: '\\frac{2\\pi}{3} \\approx 2.094',
      explanation: '$\\rho = \\sqrt{0 + 12 + 4} = 4$, so $\\cos\\phi = \\frac{-2}{4} = -\\frac{1}{2}$ and $\\phi = \\frac{2\\pi}{3}$ ($120^\\circ$): the point is below the $xy$-plane, so $\\phi$ must exceed $\\frac{\\pi}{2}$. Since $\\arccos$ already returns values in $[0, \\pi]$, there is no quadrant ambiguity for $\\phi$ — unlike $\\theta$. (Here $\\theta = \\frac{\\pi}{2}$, as the shadow lies on the positive $y$-axis.)',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'Coordinate surfaces in spherical coordinates',
      blocks: [
        {
          type: 'list',
          items: [
            '$\\rho = c$: a **sphere** of radius $c$ centered at the origin. Its equation could not be simpler.',
            '$\\phi = c$: a **cone** with vertex at the origin, opening upward for $c < \\frac{\\pi}{2}$, the $xy$-plane for $c = \\frac{\\pi}{2}$, opening downward for $c > \\frac{\\pi}{2}$. Only one nappe (half) of the double cone.',
            '$\\theta = c$: the same vertical half-plane as in cylindrical coordinates.',
          ],
        },
        {
          type: 'plot3d',
          x: [-3, 3],
          y: [-3, 3],
          z: [-3, 3],
          equal: true,
          parametricSurfaces: [
            { x: 'p*cos(u)*sin(v)', y: 'p*sin(u)*sin(v)', z: 'p*cos(v)', u: [0, '2pi'], v: [0, 'pi'], color: 'blue', opacity: 0.22, label: '$\\rho = $ const' },
            { x: 'u*sin(w)*cos(v)', y: 'u*sin(w)*sin(v)', z: 'u*cos(w)', u: [0, 3], v: [0, '2pi'], color: 'orange', opacity: 0.5, label: '$\\phi = $ const' },
          ],
          vectors: [{ from: [0, 0, 0], to: ['p*sin(w)*cos(q)', 'p*sin(w)*sin(q)', 'p*cos(w)'], label: 'ρ', color: 'red' }],
          points: [{ x: 'p*sin(w)*cos(q)', y: 'p*sin(w)*sin(q)', z: 'p*cos(w)', label: 'P', color: 'red' }],
          sliders: [
            { name: 'p', min: 0.5, max: 2.8, step: 0.1, value: 2, label: '$\\rho$' },
            { name: 'q', min: 0, max: 6.28, step: 0.05, value: 0.8, label: '$\\theta$' },
            { name: 'w', min: 0.05, max: 3.09, step: 0.05, value: 0.7, label: '$\\phi$', play: true },
          ],
          readouts: [
            { label: '$x =$', expr: 'p*sin(w)*cos(q)' },
            { label: '$y =$', expr: 'p*sin(w)*sin(q)' },
            { label: '$z = \\rho\\cos\\phi =$', expr: 'p*cos(w)' },
          ],
          resolution: 22,
          view: { azimuth: 30, elevation: 20 },
          caption: 'The point $P(\\rho, \\theta, \\phi)$ lies on the sphere $\\rho = $ const and on the cone $\\phi = $ const. Press ▶ on $\\phi$: the cone opens from a needle along $+z$, flattens into the $xy$-plane at $\\phi = \\frac{\\pi}{2} \\approx 1.57$, and closes downward toward $-z$.',
        },
        {
          type: 'derivation',
          title: 'What surface is $\\rho = 2\\cos\\phi$?',
          steps: [
            { tex: '\\rho^2 = 2\\rho\\cos\\phi', why: 'Multiply by $\\rho$ to create $\\rho^2$ and $\\rho\\cos\\phi$, which convert directly.' },
            { tex: 'x^2 + y^2 + z^2 = 2z', why: '$\\rho^2 = x^2 + y^2 + z^2$ and $\\rho\\cos\\phi = z$.' },
            { tex: 'x^2 + y^2 + (z - 1)^2 = 1', why: 'Complete the square in $z$.' },
          ],
          result: 'A sphere of radius $1$ centered at $(0, 0, 1)$, resting on the origin. Spheres through the origin have this neat one-term form in spherical coordinates.',
        },
        {
          type: 'derivation',
          title: 'Which cone is $\\phi = \\frac{\\pi}{3}$?',
          steps: [
            { tex: '\\tan\\phi = \\frac{r}{z} = \\frac{\\sqrt{x^2 + y^2}}{z}', why: 'From the triangle in the figure: opposite $r$, adjacent $z$.' },
            { tex: '\\sqrt{3} = \\frac{\\sqrt{x^2 + y^2}}{z} \\implies z = \\frac{\\sqrt{x^2 + y^2}}{\\sqrt{3}}', why: '$\\tan\\frac{\\pi}{3} = \\sqrt{3}$; since $\\phi < \\frac{\\pi}{2}$, the cone lies in $z \\ge 0$.' },
          ],
          result: 'The upper cone $z = \\sqrt{\\frac{x^2 + y^2}{3}}$, which makes a $60^\\circ$ angle with the $z$-axis.',
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'mcq',
      prompt: 'Which equation describes the surface $\\phi = \\frac{\\pi}{6}$ in rectangular coordinates?',
      options: [
        { text: '$z = \\sqrt{3(x^2 + y^2)}$', correct: true, why: '$\\tan\\frac{\\pi}{6} = \\frac{1}{\\sqrt{3}} = \\frac{r}{z}$, so $z = \\sqrt{3}\\,r = \\sqrt{3(x^2 + y^2)}$: a narrow upward cone.' },
        { text: '$z = \\sqrt{\\frac{x^2 + y^2}{3}}$', why: 'That is $\\phi = \\frac{\\pi}{3}$: it uses $\\frac{z}{r}$ instead of $\\frac{r}{z}$ for $\\tan\\phi$, giving a wide cone.' },
        { text: '$z = -\\sqrt{3(x^2 + y^2)}$', why: 'With $\\phi = \\frac{\\pi}{6} < \\frac{\\pi}{2}$ the cone is above the $xy$-plane, where $z = \\rho\\cos\\phi > 0$.' },
        { text: 'The plane $z = \\frac{\\pi}{6}$', why: '$\\phi$ is an angle, not a height. Fixing it gives a cone through the origin.' },
      ],
      explanation: 'On the surface every point makes the angle $\\frac{\\pi}{6} = 30^\\circ$ with the positive $z$-axis. From the right triangle, $\\tan\\phi = \\frac{r}{z}$, so $z = \\frac{r}{\\tan(\\pi/6)} = \\sqrt{3}\\,r$. Small $\\phi$ means a cone hugging the $z$-axis, and indeed it rises $\\sqrt{3} \\approx 1.73$ units for every unit outward.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'expr',
      prompt: 'Write the sphere $x^2 + y^2 + z^2 = 6z$ in spherical coordinates, solved for $\\rho$ (assume $\\rho > 0$).',
      hint: 'Replace the left side by $\\rho^2$ and $z$ by $\\rho\\cos\\phi$, then divide by $\\rho$. Type `phi` for $\\phi$.',
      label: '$\\rho =$',
      answer: '6cos(phi)',
      variables: ['phi'],
      domain: [0.1, 1.4],
      answerTex: '\\rho = 6\\cos\\phi',
      explanation: '$\\rho^2 = 6\\rho\\cos\\phi$, and dividing by $\\rho > 0$ gives $\\rho = 6\\cos\\phi$. In rectangular form $x^2 + y^2 + (z - 3)^2 = 9$: a sphere of radius $3$ centered at $(0, 0, 3)$, touching the origin. As $\\phi$ runs from $0$ to $\\frac{\\pi}{2}$, $\\rho$ shrinks from $6$ (the top of the sphere) to $0$ (the origin).',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'concept',
      title: 'Choosing the right coordinates, and regions',
      blocks: [
        {
          type: 'p',
          text: 'Each system makes some shapes simple. Pick the one whose coordinate surfaces match the boundaries of your problem — in Unit 9 this choice turns impossible triple integrals into routine ones.',
        },
        {
          type: 'table',
          headers: ['Symmetry', 'Best system', 'Typical description'],
          rows: [
            ['boxes, slabs, planes', 'rectangular', '$0 \\le x \\le 2$, $0 \\le y \\le 3$, $0 \\le z \\le 1$'],
            ['about an axis (pipes, cans, paraboloids)', 'cylindrical', '$0 \\le r \\le 2$, $0 \\le \\theta \\le 2\\pi$, $0 \\le z \\le 5$'],
            ['about a point (balls, shells, cones from the origin)', 'spherical', '$1 \\le \\rho \\le 2$, $0 \\le \\phi \\le \\frac{\\pi}{2}$'],
          ],
        },
        {
          type: 'p',
          text: 'The classic example is the "ice-cream cone": the solid inside the sphere $\\rho = 2$ and inside the cone $\\phi = \\alpha$. In rectangular coordinates its boundary is a mess of square roots; in spherical coordinates it is simply $0 \\le \\rho \\le 2$, $0 \\le \\theta \\le 2\\pi$, $0 \\le \\phi \\le \\alpha$.',
        },
        {
          type: 'plot3d',
          x: [-2.1, 2.1],
          y: [-2.1, 2.1],
          z: [-2.1, 2.1],
          equal: true,
          parametricSurfaces: [
            { x: '2sin(v)*cos(u)', y: '2sin(v)*sin(u)', z: '2cos(v)', u: [0, '2pi'], v: [0, 'a'], color: 'blue', opacity: 0.6, label: 'cap $\\rho = 2$' },
            { x: 'u*sin(a)*cos(v)', y: 'u*sin(a)*sin(v)', z: 'u*cos(a)', u: [0, 2], v: [0, '2pi'], color: 'orange', opacity: 0.6, label: 'cone $\\phi = \\alpha$' },
          ],
          sliders: [{ name: 'a', min: 0.2, max: 3, step: 0.05, value: 0.6, label: '$\\alpha$', play: true }],
          readouts: [{ label: 'volume $\\frac{16\\pi}{3}(1 - \\cos\\alpha) =$', expr: '16pi/3*(1 - cos(a))' }],
          resolution: 24,
          view: { azimuth: 30, elevation: 20 },
          caption: 'The solid $0 \\le \\rho \\le 2$, $0 \\le \\phi \\le \\alpha$: a spherical cap on a cone. Open $\\alpha$ past $\\frac{\\pi}{2}$ and the cone turns inside out until the solid is almost the whole ball. (The volume formula is derived in Unit 9.)',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Orbit cameras and radar',
          text: 'A third-person or editor **orbit camera** stores its position as (distance, yaw, pitch) around a target: spherical coordinates. Yaw is $\\theta$; pitch is usually the *elevation* above the horizon, which is $\\frac{\\pi}{2} - \\phi$. Radar and artillery fire control use the same triple as range, azimuth and elevation (with azimuth measured clockwise from north). Mouse input changes the angles; the spherical-to-rectangular formulas place the camera.',
        },
        {
          type: 'code',
          title: 'orbit_camera.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdio>

constexpr double PI = 3.14159265358979323846;
constexpr double DEG = PI / 180.0;
struct Vec3 { double x, y, z; };

// Math convention, z up: theta = azimuth from +x, phi = angle down from +z.
Vec3 fromSpherical(double rho, double theta, double phi) {
    return {rho * std::sin(phi) * std::cos(theta),
            rho * std::sin(phi) * std::sin(theta),
            rho * std::cos(phi)};
}

int main() {
    const double distance = 10.0, pitchDeg = 30.0;  // pitch = elevation above horizon
    const double yaws[] = {0.0, 45.0, 90.0};
    for (double yawDeg : yaws) {
        Vec3 c = fromSpherical(distance, yawDeg * DEG, (90.0 - pitchDeg) * DEG);
        std::printf("yaw %2.0f -> camera (%.4f, %.4f, %.4f)\\n", yawDeg, c.x, c.y, c.z);
    }

    // Back to spherical for the point (-1, 1, -sqrt(2)).
    const Vec3 p{-1, 1, -std::sqrt(2.0)};
    double rho = std::sqrt(p.x * p.x + p.y * p.y + p.z * p.z);
    std::printf("rho = %.4f\\n", rho);
    std::printf("theta = %.4f deg (atan2)\\n", std::atan2(p.y, p.x) / DEG);
    std::printf("theta = %.4f deg (atan, wrong quadrant)\\n", std::atan(p.y / p.x) / DEG);
    std::printf("phi = %.4f deg\\n", std::acos(p.z / rho) / DEG);
}`,
          output: `yaw  0 -> camera (8.6603, 0.0000, 5.0000)
yaw 45 -> camera (6.1237, 6.1237, 5.0000)
yaw 90 -> camera (0.0000, 8.6603, 5.0000)
rho = 2.0000
theta = 135.0000 deg (atan2)
theta = -45.0000 deg (atan, wrong quadrant)
phi = 135.0000 deg`,
          annotations: [
            { lines: '9-13', text: '$x = \\rho\\sin\\phi\\cos\\theta$, $y = \\rho\\sin\\phi\\sin\\theta$, $z = \\rho\\cos\\phi$.' },
            { lines: 19, text: 'Pitch $30^\\circ$ above the horizon means $\\phi = 60^\\circ$ from the vertical, so the camera sits at height $10\\cos 60^\\circ = 5$.' },
            { lines: '27-28', text: '`atan2` finds the second-quadrant angle $135^\\circ$; `atan(y / x)` sees only the ratio $-1$ and answers $-45^\\circ$, pointing the opposite way.' },
            { lines: 29, text: '$\\cos\\phi = \\frac{-\\sqrt{2}}{2}$: below the $xy$-plane, so $\\phi > 90^\\circ$. `acos` has range $[0^\\circ, 180^\\circ]$, exactly the range of $\\phi$.' },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'error',
      prompt: 'A student converts the rectangular point $(-1, -1, 2)$ to cylindrical coordinates. Tap the first wrong line.',
      lines: [
        '$r = \\sqrt{(-1)^2 + (-1)^2} = \\sqrt{2}$',
        '$\\tan\\theta = \\dfrac{-1}{-1} = 1$',
        '$\\theta = \\arctan 1 = \\dfrac{\\pi}{4}$',
        '$(r, \\theta, z) = \\left(\\sqrt{2}, \\dfrac{\\pi}{4}, 2\\right)$',
      ],
      errorLines: [3],
      explanation: 'Line 2 is right, but $\\tan\\theta = 1$ has two solutions in $[0, 2\\pi)$: $\\frac{\\pi}{4}$ (quadrant I) and $\\frac{5\\pi}{4}$ (quadrant III). The shadow $(-1, -1)$ is in quadrant III, so $\\theta = \\frac{5\\pi}{4}$ and the point is $\\left(\\sqrt{2}, \\frac{5\\pi}{4}, 2\\right)$. The student\'s answer is the mirror point $(1, 1, 2)$ — exactly the bug `atan(y / x)` causes in code.',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'truefalse',
      prompt: 'In spherical coordinates, the equation $\\phi = \\frac{\\pi}{2}$ describes the $xy$-plane.',
      answer: true,
      explanation: 'Every point with $\\phi = \\frac{\\pi}{2}$ has $z = \\rho\\cos\\frac{\\pi}{2} = 0$, and every point of the $xy$-plane makes a right angle with the positive $z$-axis. So the "cone" $\\phi = \\frac{\\pi}{2}$ has opened all the way flat. Values just below $\\frac{\\pi}{2}$ give very wide upward cones; values just above give wide downward ones.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'fill',
      prompt: 'Complete the relations between cylindrical $(r, \\theta, z)$ and spherical $(\\rho, \\theta, \\phi)$ coordinates.',
      template: '$r =$ ___ , $\\quad z =$ ___ , $\\quad \\rho^2 =$ ___',
      blanks: [{ answers: ['$\\rho\\sin\\phi$'] }, { answers: ['$\\rho\\cos\\phi$'] }, { answers: ['$r^2 + z^2$'] }],
      wordBank: ['$\\rho\\sin\\phi$', '$\\rho\\cos\\phi$', '$r^2 + z^2$', '$\\rho\\sin\\theta$', '$\\rho\\cos\\theta$', '$r^2 - z^2$'],
      explanation: 'In the vertical half-plane through the point, $\\rho$ is the hypotenuse of a right triangle with angle $\\phi$ at the $z$-axis: the side along the axis is $z = \\rho\\cos\\phi$ and the side out from the axis is $r = \\rho\\sin\\phi$. Pythagoras gives $\\rho^2 = r^2 + z^2$. The angle $\\theta$ is shared by both systems and never appears in these relations.',
    },
  ],
  takeaways: [
    'Cylindrical $(r, \\theta, z)$: polar coordinates for the shadow plus height; $x = r\\cos\\theta$, $y = r\\sin\\theta$, $r^2 = x^2 + y^2$.',
    'Spherical $(\\rho, \\theta, \\phi)$ with $\\phi$ measured from the positive $z$-axis: $x = \\rho\\sin\\phi\\cos\\theta$, $y = \\rho\\sin\\phi\\sin\\theta$, $z = \\rho\\cos\\phi$, $\\rho^2 = x^2 + y^2 + z^2$. Physics swaps $\\theta$ and $\\phi$.',
    'Find $\\theta$ from the quadrant of $(x, y)$ (use `atan2` in code); find $\\phi = \\arccos(z / \\rho)$, which is never ambiguous.',
    'Coordinate surfaces: $r = c$ cylinder, $\\theta = c$ half-plane, $z = c$ plane, $\\rho = c$ sphere, $\\phi = c$ one-nappe cone.',
    'To convert an equation, multiply through to create $r^2$, $r\\sin\\theta$, $\\rho^2$, $\\rho\\cos\\phi$ and other combinations with rectangular meanings.',
    'Choose the system that matches the symmetry: axis → cylindrical, point → spherical. Orbit cameras and radar live in spherical coordinates.',
  ],
  reading: [
    {
      title: 'OpenStax Calculus Volume 3 — 2.7 Cylindrical and Spherical Coordinates',
      url: 'https://openstax.org/details/books/calculus-volume-3',
      source: 'openstax',
      note: 'Conversion examples in both directions and a good set of exercises on identifying surfaces.',
    },
    {
      title: 'Wikipedia — Spherical coordinate system',
      url: 'https://en.wikipedia.org/wiki/Spherical_coordinate_system',
      source: 'wikipedia',
      note: 'Compares the mathematics and physics conventions side by side, with the conversion formulas for each.',
    },
    {
      title: 'Wikipedia — Cylindrical coordinate system',
      url: 'https://en.wikipedia.org/wiki/Cylindrical_coordinate_system',
      source: 'wikipedia',
      note: 'Definitions, conversions and the coordinate surfaces, with diagrams.',
    },
    {
      title: 'MIT OCW 18.02SC Multivariable Calculus',
      url: 'https://ocw.mit.edu/courses/18-02sc-multivariable-calculus-fall-2010/',
      source: 'other',
      note: 'The triple-integrals unit introduces both systems with recitation videos, a preview of how you will use them in Unit 9.',
    },
  ],
};
