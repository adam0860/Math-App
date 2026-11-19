import type { Lesson } from '../../types';

// Walk 3 km east then 4 km north: distance 7 km, displacement 5 km at 53.1° N of E.
const FIG_WALK = `<svg viewBox="0 0 520 300" xmlns="http://www.w3.org/2000/svg">
<line x1="440.0" y1="120.0" x2="440.0" y2="79.0" stroke="currentColor" stroke-width="1.5"/><path d="M440.0,70.0 L444.0,79.0 L436.0,79.0 Z" fill="currentColor"/>
<text x="440.0" y="62.0" font-size="13" text-anchor="middle" font-weight="700">N</text>
<line x1="440.0" y1="120.0" x2="481.0" y2="120.0" stroke="currentColor" stroke-width="1.5"/><path d="M490.0,120.0 L481.0,124.0 L481.0,116.0 Z" fill="currentColor"/>
<text x="498.0" y="125.0" font-size="13" text-anchor="start" font-weight="700">E</text>
<line x1="70.0" y1="260.0" x2="224.0" y2="260.0" class="s-blue" stroke-width="2.5"/><path d="M235.0,260.0 L224.0,265.0 L224.0,255.0 Z" class="f-blue"/>
<text x="152.5" y="282.0" font-size="14" text-anchor="middle" class="t-blue">3.0 km east</text>
<line x1="235.0" y1="260.0" x2="235.0" y2="51.0" class="s-green" stroke-width="2.5"/><path d="M235.0,40.0 L240.0,51.0 L230.0,51.0 Z" class="f-green"/>
<text x="245.0" y="150.0" font-size="14" text-anchor="start" class="t-green">4.0 km north</text>
<line x1="70.0" y1="260.0" x2="228.4" y2="48.8" class="s-red" stroke-width="3"/><path d="M235.0,40.0 L232.4,51.8 L224.4,45.8 Z" class="f-red"/>
<text x="12.0" y="60.0" font-size="14" text-anchor="start" class="t-red" font-weight="700">displacement</text>
<text x="12.0" y="78.0" font-size="13" text-anchor="start" class="t-red">5.0 km at 53.1° N of E</text>
<path d="M104,260 A34,34 0 0 0 90.4,232.8" fill="none" stroke="currentColor" stroke-width="1.2"/>
<text x="110.0" y="250.0" font-size="14" text-anchor="start">θ</text>
<path d="M223,260 L223,248 L235,248" fill="none" stroke="currentColor" stroke-width="1"/>
<circle cx="70" cy="260" r="4" fill="currentColor"/>
<text x="62.0" y="278.0" font-size="12" text-anchor="middle">start</text>
<circle cx="235" cy="40" r="4" fill="currentColor"/>
<text x="243.0" y="36.0" font-size="12" text-anchor="start">finish</text>
<text x="285.0" y="215.0" font-size="12" text-anchor="start" class="t-gray">distance walked = 3.0 + 4.0 = 7.0 km</text>
<text x="285.0" y="235.0" font-size="12" text-anchor="start" class="t-gray">|displacement| = √(3.0² + 4.0²) = 5.0 km</text>
</svg>`;

// Cross product in 3D: parallelogram of A and B, A × B perpendicular, plus the i → j → k cycle.
const FIG_CROSS = `<svg viewBox="0 0 520 320" xmlns="http://www.w3.org/2000/svg">
<path d="M80,200 L121.6,261.2 L323.2,220.4 L281.6,159.2 Z" class="f-purple" fill-opacity="0.15" stroke="none"/>
<path d="M121.6,261.2 L323.2,220.4 L281.6,159.2" fill="none" class="s-gray" stroke-dasharray="4 3"/>
<line x1="80.0" y1="200.0" x2="115.4" y2="252.1" class="s-blue" stroke-width="2.5"/><path d="M121.6,261.2 L111.3,254.9 L119.6,249.3 Z" class="f-blue"/>
<line x1="80.0" y1="200.0" x2="270.8" y2="161.4" class="s-red" stroke-width="2.5"/><path d="M281.6,159.2 L271.8,166.3 L269.8,156.5 Z" class="f-red"/>
<line x1="80.0" y1="200.0" x2="80.0" y2="59.0" class="s-green" stroke-width="3"/><path d="M80.0,48.0 L85.0,59.0 L75.0,59.0 Z" class="f-green"/>
<text x="115.6" y="283.2" font-size="17" text-anchor="start" class="t-blue" font-weight="700" font-style="italic">A</text>
<text x="289.6" y="157.2" font-size="17" text-anchor="start" class="t-red" font-weight="700" font-style="italic">B</text>
<text x="90.0" y="60.0" font-size="15" text-anchor="start" class="t-green" font-weight="700">A × B</text>
<text x="90.0" y="78.0" font-size="12" text-anchor="start" class="t-green">perpendicular to both A and B</text>
<text x="231.6" y="226.2" font-size="12" text-anchor="middle" class="t-purple">area = AB sin θ</text>
<path d="M102.9,233.7 Q189.4,209.2 160.6,183.7" fill="none" stroke="currentColor" stroke-width="1.5"/>
<path d="M160.6,183.7 L170.0,186.7 L164.7,192.6 Z" fill="currentColor"/>
<text x="96.0" y="204.0" font-size="13" text-anchor="start">θ</text>
<text x="10.0" y="300.0" font-size="12" text-anchor="start">Right-hand rule: point your fingers along A and curl them toward B;</text>
<text x="10.0" y="316.0" font-size="12" text-anchor="start">your thumb points along A × B.</text>
<circle cx="430" cy="95" r="46" fill="none" class="s-gray" stroke-dasharray="3 3"/>
<circle cx="430.0" cy="49.0" r="13" class="f-orange" fill-opacity="0.2" stroke="none"/>
<text x="430.0" y="54.0" font-size="16" text-anchor="middle" font-weight="700">î</text>
<path d="M447.2,52.3 A46,46 0 0 1 475.6,101.4" fill="none" class="s-orange" stroke-width="2"/>
<path d="M475.3,103.4 L472.8,91.9 L480.8,93.0 Z" class="f-orange"/>
<circle cx="469.8" cy="118.0" r="13" class="f-orange" fill-opacity="0.2" stroke="none"/>
<text x="469.8" y="123.0" font-size="16" text-anchor="middle" font-weight="700">ĵ</text>
<path d="M458.3,131.2 A46,46 0 0 1 401.7,131.2" fill="none" class="s-orange" stroke-width="2"/>
<path d="M400.1,130.0 L411.2,133.6 L406.3,139.9 Z" class="f-orange"/>
<circle cx="390.2" cy="118.0" r="13" class="f-orange" fill-opacity="0.2" stroke="none"/>
<text x="390.2" y="123.0" font-size="16" text-anchor="middle" font-weight="700">k̂</text>
<path d="M384.4,101.4 A46,46 0 0 1 412.8,52.3" fill="none" class="s-orange" stroke-width="2"/>
<path d="M414.6,51.6 L405.9,59.4 L402.9,52.0 Z" class="f-orange"/>
<text x="430.0" y="173.0" font-size="13" text-anchor="middle">with the arrows: plus</text>
<text x="430.0" y="191.0" font-size="13" text-anchor="middle">î × ĵ = k̂, ĵ × k̂ = î, k̂ × î = ĵ</text>
<text x="430.0" y="213.0" font-size="13" text-anchor="middle" class="t-gray">against the arrows: minus</text>
<text x="430.0" y="231.0" font-size="13" text-anchor="middle" class="t-gray">ĵ × î = −k̂, î × k̂ = −ĵ</text>
</svg>`;

// Angle helpers for graph expressions (sliders hold degrees).
const RAD = (s: string) => `(${s})*pi/180`;

export const lesson: Lesson = {
  id: 'phys-vectors',
  title: 'Vectors for Physics',
  summary: 'Displacement, velocity and force all have a direction. Resolve them into components, add them, and use the dot and cross products the way physics and game engines do.',
  minutes: 20,
  objectives: [
    'Distinguish scalar from vector quantities, and distance from displacement',
    'Resolve a vector into components with $\\hat{\\imath}$ and $\\hat{\\jmath}$, and recover its magnitude and direction (with `atan2`)',
    'Add and subtract vectors by components and interpret the result physically',
    'Choose convenient axes and explain why magnitudes do not depend on that choice',
    'Use the dot product to find the component of a force along a direction (work) and the cross product with the right-hand rule (torque)',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Scalars, vectors and why direction matters',
      blocks: [
        {
          type: 'p',
          text: 'Some quantities are fully described by one number with a unit: mass, time, temperature, energy. These are [[scalar|scalars]]. Others make no sense without a direction. "Push the crate with $200\\,\\text{N}$" is incomplete; pushing it uphill and pushing it downhill have opposite effects. Those quantities are [[vector|vectors]]: a [[magnitude]] *and* a direction.',
        },
        {
          type: 'table',
          headers: ['Scalars', 'Vectors'],
          rows: [
            ['distance traveled, speed', 'displacement $\\Delta\\vec{r}$, velocity $\\vec{v}$'],
            ['mass $m$, time $t$', 'acceleration $\\vec{a}$, force $\\vec{F}$'],
            ['energy, work, power', 'momentum $\\vec{p}$, torque $\\vec{\\tau}$'],
          ],
          caption: 'Notation: an arrow marks a vector, $\\vec{v}$. Its magnitude is written $|\\vec{v}|$ or just $v$ (no arrow), and it is never negative.',
        },
        {
          type: 'p',
          text: 'The most basic vector is displacement: the straight-line change in position, from where you started to where you ended. It ignores the route. Distance traveled is a scalar that counts the whole route.',
        },
        {
          type: 'figure',
          svg: FIG_WALK,
          alt: 'A walker goes 3.0 kilometers east (blue arrow), then 4.0 kilometers north (green arrow). A red arrow from start to finish is the displacement, 5.0 kilometers at 53.1 degrees north of east. The distance walked is 7.0 kilometers.',
          caption: 'Place vectors head to tail: the [[resultant-vector|resultant]] runs from the first tail to the last head. Here distance $= 7.0\\,\\text{km}$, but the displacement is only $5.0\\,\\text{km}$.',
          maxWidth: 500,
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why physics insists on vectors',
          text: 'Newton\'s laws add forces, and forces in different directions partly cancel. Two $100\\,\\text{N}$ pulls give anywhere from $0$ to $200\\,\\text{N}$ of net force depending on the angle between them. A scalar description cannot tell those situations apart, so every law of motion is written with vectors. Do the vector bookkeeping right and the physics usually follows.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'concept',
      title: 'Components and unit vectors',
      blocks: [
        {
          type: 'p',
          text: 'Drawing arrows is good for intuition, but calculation needs numbers. Choose perpendicular axes and project the vector onto each one. Those projections are its [[vector-components|components]]. With the [[unit-vector|unit vectors]] $\\hat{\\imath}$ and $\\hat{\\jmath}$ (length 1, along $+x$ and $+y$), any 2D vector is',
        },
        {
          type: 'theorem',
          name: 'Components from magnitude and angle',
          tex: '\\vec{A} = A_x\\,\\hat{\\imath} + A_y\\,\\hat{\\jmath}, \\qquad A_x = A\\cos\\theta, \\quad A_y = A\\sin\\theta',
          text: 'Here $\\theta$ is measured counterclockwise from the $+x$ axis. Going back: $A = \\sqrt{A_x^2 + A_y^2}$ and $\\theta = \\operatorname{atan2}(A_y, A_x)$.',
        },
        {
          type: 'graph',
          x: [-6, 6],
          y: [-6, 6],
          equal: true,
          parametric: [{ x: '0.9cos(t)', y: '0.9sin(t)', t: [0, RAD('d')], color: 'gray' }],
          segments: [
            { from: [0, 0], to: [`A*cos(${RAD('d')})`, 0], arrow: true, color: 'red', label: 'Ax' },
            { from: [`A*cos(${RAD('d')})`, 0], to: [`A*cos(${RAD('d')})`, `A*sin(${RAD('d')})`], arrow: true, color: 'green', label: 'Ay' },
            { from: [0, 0], to: [`A*cos(${RAD('d')})`, `A*sin(${RAD('d')})`], arrow: true, color: 'blue', label: 'A' },
          ],
          sliders: [
            { name: 'A', min: 1, max: 5.5, step: 0.1, value: 5, label: 'magnitude $A$' },
            { name: 'd', min: 0, max: 360, step: 1, value: 37, label: 'direction $\\theta$ (degrees)', play: true, loop: true, speed: 60 },
          ],
          readouts: [
            { label: '$A_x = A\\cos\\theta =$', expr: `A*cos(${RAD('d')})`, digits: 2 },
            { label: '$A_y = A\\sin\\theta =$', expr: `A*sin(${RAD('d')})`, digits: 2 },
            { label: '$\\operatorname{atan2}(A_y, A_x)$ in degrees:', expr: `atan2(A*sin(${RAD('d')}), A*cos(${RAD('d')}))*180/pi`, digits: 1 },
          ],
          caption: 'Press ▶ to spin the vector. Each component swings between $-A$ and $+A$ like a cosine and a sine. Past $180^\\circ$, `atan2` reports the angle as a negative number; add $360^\\circ$ if you want it in $[0^\\circ, 360^\\circ)$.',
        },
        {
          type: 'derivation',
          title: 'A recon team moves $150\\,\\text{m}$ at $30^\\circ$ south of west. Find the components.',
          steps: [
            { tex: '\\theta = 180^\\circ + 30^\\circ = 210^\\circ', why: 'Convert the compass description to an angle from $+x$ (east), counterclockwise. West is $180^\\circ$; a further $30^\\circ$ toward south adds to it.' },
            { tex: 'A_x = 150\\cos 210^\\circ = -129.9\\,\\text{m}', why: 'The minus sign means westward, which matches the sketch.' },
            { tex: 'A_y = 150\\sin 210^\\circ = -75.0\\,\\text{m}', why: 'Negative: southward. Always compare signs with your sketch.' },
            { tex: '\\arctan\\!\\left(\\frac{-75.0}{-129.9}\\right) = \\arctan(0.577) = 30^\\circ \\;\\;\\text{(wrong quadrant!)}', why: 'Going back, plain arctan cannot tell $(-,-)$ from $(+,+)$ because the ratio is the same.' },
            { tex: '\\operatorname{atan2}(-75.0,\\,-129.9) = -150^\\circ \\equiv 210^\\circ', why: '`atan2(y, x)` looks at both signs and returns the correct quadrant.' },
          ],
          result: '$\\vec{A} = (-129.9\\,\\hat{\\imath} - 75.0\\,\\hat{\\jmath})\\,\\text{m}$.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Always atan2 in code',
          text: '`std::atan2(y, x)` returns an angle in $(-\\pi, \\pi]$ in the correct quadrant, and it handles $x = 0$ without dividing by zero. Game code uses it constantly: aiming a turret at a target, turning a character to face its velocity, finding the angle of a thumbstick. `std::atan(y / x)` is a classic source of "the enemy aims backwards half the time" bugs.',
        },
      ],
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'numeric',
      prompt: 'A jet flies at $240\\,\\text{m/s}$ in a direction $35.0^\\circ$ north of east. What is the northward component of its velocity? Give 3 significant figures.',
      hint: 'Measure the angle from east ($+x$). The north component is the $y$-component.',
      answer: '240*sin(35*pi/180)',
      answerTex: '138\\,\\text{m/s}',
      tolerance: 1,
      unit: 'm/s',
      label: '$v_y =$',
      explanation: 'With $+x$ east and $+y$ north, the angle from $+x$ is $35.0^\\circ$, so $v_y = 240\\sin 35.0^\\circ = 138\\,\\text{m/s}$ (and $v_x = 240\\cos 35.0^\\circ = 197\\,\\text{m/s}$). If you got $197$, you used cosine for the component *opposite* the angle. A quick check: $35^\\circ$ is less than $45^\\circ$, so the north component must be the smaller one.',
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'mcq',
      prompt: 'A displacement has components $\\Delta x = -3.0\\,\\text{m}$ and $\\Delta y = -4.0\\,\\text{m}$. What is its direction, measured counterclockwise from $+x$?',
      options: [
        { text: '$53.1^\\circ$', why: 'That is $\\arctan(4/3)$, which points into the first quadrant, up and to the right. Both components here are negative.' },
        { text: '$126.9^\\circ$', why: 'That is the second quadrant: $x$ negative but $y$ positive.' },
        { text: '$233.1^\\circ$', correct: true, why: 'Both components are negative, so the vector is in the third quadrant: $180^\\circ + 53.1^\\circ = 233.1^\\circ$. `atan2(-4, -3)` returns $-126.9^\\circ$, the same direction.' },
        { text: '$306.9^\\circ$', why: 'That is the fourth quadrant: $x$ positive, $y$ negative.' },
      ],
      explanation: 'The ratio $\\Delta y/\\Delta x = 4/3$ is the same for $(3, 4)$ and $(-3, -4)$, so a calculator\'s arctan gives $53.1^\\circ$ for both. Sketch first: down and to the left is the third quadrant, $180^\\circ$ to $270^\\circ$. Adding $180^\\circ$ gives $233.1^\\circ$; the magnitude is $5.0\\,\\text{m}$ either way.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Adding and subtracting vectors',
      blocks: [
        {
          type: 'p',
          text: 'Geometrically, you add vectors head to tail. Algebraically it is even simpler: **add the components separately**. The $x$-parts never mix with the $y$-parts, because $\\hat{\\imath}$ and $\\hat{\\jmath}$ are perpendicular.',
        },
        {
          type: 'math',
          tex: '\\vec{R} = \\vec{A} + \\vec{B} \\iff R_x = A_x + B_x, \\quad R_y = A_y + B_y',
        },
        {
          type: 'graph',
          x: [-8, 8],
          y: [-8, 8],
          equal: true,
          segments: [
            { from: [0, 0], to: [`3*cos(${RAD('w')})`, `3*sin(${RAD('w')})`], color: 'red', dashed: true },
            { from: [`3*cos(${RAD('w')})`, `3*sin(${RAD('w')})`], to: [`4*cos(${RAD('u')}) + 3*cos(${RAD('w')})`, `4*sin(${RAD('u')}) + 3*sin(${RAD('w')})`], color: 'blue', dashed: true },
            { from: [0, 0], to: [`4*cos(${RAD('u')})`, `4*sin(${RAD('u')})`], arrow: true, color: 'blue', label: 'A' },
            { from: [`4*cos(${RAD('u')})`, `4*sin(${RAD('u')})`], to: [`4*cos(${RAD('u')}) + 3*cos(${RAD('w')})`, `4*sin(${RAD('u')}) + 3*sin(${RAD('w')})`], arrow: true, color: 'red', label: 'B' },
            { from: [0, 0], to: [`4*cos(${RAD('u')}) + 3*cos(${RAD('w')})`, `4*sin(${RAD('u')}) + 3*sin(${RAD('w')})`], arrow: true, color: 'purple', label: 'R = A + B' },
          ],
          sliders: [
            { name: 'u', min: 0, max: 360, step: 1, value: 20, label: 'direction of $\\vec{A}$ ($|\\vec{A}| = 4$), degrees' },
            { name: 'w', min: 0, max: 360, step: 1, value: 80, label: 'direction of $\\vec{B}$ ($|\\vec{B}| = 3$), degrees', play: true, loop: true, speed: 60 },
          ],
          readouts: [
            { label: '$|\\vec{R}| =$', expr: `sqrt((4*cos(${RAD('u')}) + 3*cos(${RAD('w')}))^2 + (4*sin(${RAD('u')}) + 3*sin(${RAD('w')}))^2)`, digits: 2 },
            { label: 'direction of $\\vec{R}$ (degrees):', expr: `atan2(4*sin(${RAD('u')}) + 3*sin(${RAD('w')}), 4*cos(${RAD('u')}) + 3*cos(${RAD('w')}))*180/pi`, digits: 1 },
          ],
          caption: 'Press ▶ to swing $\\vec{B}$ around. $|\\vec{R}|$ ranges from $4 - 3 = 1$ (opposite directions) to $4 + 3 = 7$ (same direction). Magnitudes only add when the vectors are parallel. The dashed copies show the parallelogram: $\\vec{A} + \\vec{B} = \\vec{B} + \\vec{A}$.',
        },
        {
          type: 'derivation',
          title: 'Land navigation: three legs of a patrol',
          steps: [
            { tex: '\\vec{A}: 2.00\\,\\text{km at } 0^\\circ,\\quad \\vec{B}: 3.00\\,\\text{km at } 60.0^\\circ,\\quad \\vec{C}: 1.50\\,\\text{km at } 150^\\circ', why: 'Angles counterclockwise from east. Sketch the legs head to tail before computing anything.' },
            { tex: 'R_x = 2.00 + 3.00\\cos 60.0^\\circ + 1.50\\cos 150^\\circ = 2.00 + 1.50 - 1.30 = 2.20\\,\\text{km}', why: 'Add all the $x$-components. The third leg heads partly west, so its $x$-component is negative.' },
            { tex: 'R_y = 0 + 3.00\\sin 60.0^\\circ + 1.50\\sin 150^\\circ = 2.60 + 0.75 = 3.35\\,\\text{km}', why: 'Add all the $y$-components separately.' },
            { tex: 'R = \\sqrt{2.20^2 + 3.35^2} = 4.01\\,\\text{km}', why: 'Pythagoras on the components, which are perpendicular.' },
            { tex: '\\theta = \\operatorname{atan2}(3.35,\\, 2.20) = 56.7^\\circ', why: 'Both components positive, so first quadrant; no correction needed.' },
          ],
          result: 'The patrol ends $4.01\\,\\text{km}$ from its start at $56.7^\\circ$ north of east. To walk straight back, follow $-\\vec{R}$: $4.01\\,\\text{km}$ at $56.7^\\circ + 180^\\circ = 236.7^\\circ$.',
        },
        {
          type: 'p',
          text: '**Subtraction** is adding the negative: $\\vec{A} - \\vec{B} = \\vec{A} + (-\\vec{B})$, where $-\\vec{B}$ has the same length and the opposite direction. Its most important use is *relative position*: if you stand at [[position-vector|position]] $\\vec{r}_{\\text{you}}$ and a target is at $\\vec{r}_{\\text{target}}$, the vector from you to it is $\\vec{r}_{\\text{target}} - \\vec{r}_{\\text{you}}$, always "end minus start".',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'numeric',
      prompt: 'Two ropes pull on a stuck vehicle: $\\vec{F}_1 = 40.0\\,\\text{N}$ due east and $\\vec{F}_2 = 30.0\\,\\text{N}$ at $60.0^\\circ$ north of east. What is the magnitude of the total force? Give 3 significant figures.',
      hint: 'Add components: $F_x = 40.0 + 30.0\\cos 60.0^\\circ$, $F_y = 30.0\\sin 60.0^\\circ$.',
      answer: 'sqrt((40 + 30*cos(pi/3))^2 + (30*sin(pi/3))^2)',
      answerTex: '60.8\\,\\text{N}',
      tolerance: 0.4,
      unit: 'N',
      label: '$|\\vec{F}| =$',
      explanation: '$F_x = 40.0 + 30.0\\cos 60.0^\\circ = 55.0\\,\\text{N}$ and $F_y = 30.0\\sin 60.0^\\circ = 26.0\\,\\text{N}$, so $|\\vec{F}| = \\sqrt{55.0^2 + 26.0^2} = 60.8\\,\\text{N}$ at $25.3^\\circ$ north of east. Adding magnitudes ($70.0\\,\\text{N}$) would only be right if the ropes were parallel; it overestimates here because they pull $60^\\circ$ apart.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'order',
      prompt: 'Put the steps for adding vectors by components in order.',
      lines: [
        'Sketch the vectors and choose the $x$ and $y$ axes',
        'Resolve each vector: $A_x = A\\cos\\theta_A$, $A_y = A\\sin\\theta_A$, and so on',
        'Add like components: $R_x = A_x + B_x$ and $R_y = A_y + B_y$',
        'Combine: $R = \\sqrt{R_x^2 + R_y^2}$ and $\\theta_R = \\operatorname{atan2}(R_y, R_x)$',
        'Check the magnitude and quadrant against the sketch',
      ],
      distractors: ['Add the magnitudes: $R = A + B$'],
      explanation: 'Components only exist once axes are chosen, and you can only add components after resolving each vector. The magnitude and angle come from the summed components, and the final check compares with the sketch, which catches quadrant and sign mistakes. Adding magnitudes directly is wrong unless the vectors happen to be parallel.',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'error',
      prompt: 'Find $|\\vec{A} + \\vec{B}|$ for $\\vec{A} = 5.0\\,\\text{m}$ at $30^\\circ$ above the $+x$ axis and $\\vec{B} = 4.0\\,\\text{m}$ at $30^\\circ$ west of north (north is $+y$, east is $+x$). Tap the first line that is wrong.',
      lines: [
        '$A_x = 5.0\\cos 30^\\circ = 4.33\\,\\text{m}, \\quad A_y = 5.0\\sin 30^\\circ = 2.50\\,\\text{m}$',
        '$B_x = -4.0\\cos 30^\\circ = -3.46\\,\\text{m}, \\quad B_y = 4.0\\sin 30^\\circ = 2.00\\,\\text{m}$',
        '$R_x = 4.33 - 3.46 = 0.87\\,\\text{m}, \\quad R_y = 2.50 + 2.00 = 4.50\\,\\text{m}$',
        '$|\\vec{R}| = \\sqrt{0.87^2 + 4.50^2} = 4.58\\,\\text{m}$',
      ],
      errorLines: [2],
      explanation: 'Line 2 pairs cosine with the wrong axis. $\\vec{B}$\'s angle is measured from **north** (the $y$-axis), so the side adjacent to the angle is the $y$-component: $B_y = 4.0\\cos 30^\\circ = 3.46\\,\\text{m}$ and $B_x = -4.0\\sin 30^\\circ = -2.00\\,\\text{m}$ (negative because it leans west). Then $R_x = 2.33\\,\\text{m}$, $R_y = 5.96\\,\\text{m}$ and $|\\vec{R}| = 6.40\\,\\text{m}$. "$\\cos$ goes with $x$" is only true when the angle is measured from the $x$-axis; the safe rule is "cos goes with the side adjacent to the angle".',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'concept',
      title: 'Choosing your axes',
      blocks: [
        {
          type: 'p',
          text: 'Nothing forces $x$ to be horizontal. The vector is a physical arrow; the axes are your bookkeeping. Rotate the axes and every component changes, but the magnitude, and any physical prediction, stays the same.',
        },
        {
          type: 'graph',
          x: [-6, 6],
          y: [-6, 6],
          equal: true,
          segments: [
            { from: [`-6*cos(${RAD('f')})`, `-6*sin(${RAD('f')})`], to: [0, 0], color: 'gray' },
            { from: [`6*sin(${RAD('f')})`, `-6*cos(${RAD('f')})`], to: [0, 0], color: 'gray' },
            { from: [`4*cos(${RAD('f')})`, `4*sin(${RAD('f')})`], to: [`6*cos(${RAD('f')})`, `6*sin(${RAD('f')})`], arrow: true, color: 'gray', label: 'x′' },
            { from: [`-4*sin(${RAD('f')})`, `4*cos(${RAD('f')})`], to: [`-6*sin(${RAD('f')})`, `6*cos(${RAD('f')})`], arrow: true, color: 'gray', label: 'y′' },
            { from: [0, 0], to: [`4*cos(${RAD('f')})`, `4*sin(${RAD('f')})`], color: 'gray' },
            { from: [0, 0], to: [`-4*sin(${RAD('f')})`, `4*cos(${RAD('f')})`], color: 'gray' },
            { from: [`5*cos(${RAD('50')})`, `5*sin(${RAD('50')})`], to: [`5*cos(${RAD('50 - f')})*cos(${RAD('f')})`, `5*cos(${RAD('50 - f')})*sin(${RAD('f')})`], dashed: true, color: 'red' },
            { from: [`5*cos(${RAD('50')})`, `5*sin(${RAD('50')})`], to: [`-5*sin(${RAD('50 - f')})*sin(${RAD('f')})`, `5*sin(${RAD('50 - f')})*cos(${RAD('f')})`], dashed: true, color: 'green' },
            { from: [0, 0], to: [`5*cos(${RAD('50 - f')})*cos(${RAD('f')})`, `5*cos(${RAD('50 - f')})*sin(${RAD('f')})`], arrow: true, color: 'red' },
            { from: [0, 0], to: [`-5*sin(${RAD('50 - f')})*sin(${RAD('f')})`, `5*sin(${RAD('50 - f')})*cos(${RAD('f')})`], arrow: true, color: 'green' },
            { from: [0, 0], to: [`5*cos(${RAD('50')})`, `5*sin(${RAD('50')})`], arrow: true, color: 'blue', label: 'A' },
          ],
          sliders: [{ name: 'f', min: 0, max: 90, step: 1, value: 0, label: 'axis tilt $\\varphi$ (degrees)', play: true, speed: 22.5 }],
          readouts: [
            { label: '$A_{x\'} =$', expr: `5*cos(${RAD('50 - f')})`, digits: 2 },
            { label: '$A_{y\'} =$', expr: `5*sin(${RAD('50 - f')})`, digits: 2 },
            { label: '$\\sqrt{A_{x\'}^2 + A_{y\'}^2} =$', expr: `sqrt((5*cos(${RAD('50 - f')}))^2 + (5*sin(${RAD('50 - f')}))^2)`, digits: 2 },
          ],
          caption: 'The blue vector never moves; press ▶ to tilt the gray axes. The red and green components change continuously, but $\\sqrt{A_{x\'}^2 + A_{y\'}^2}$ stays exactly $5$. At $\\varphi = 50^\\circ$ the $x\'$-axis lies along $\\vec{A}$ and one component vanishes.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Pick axes that make most components zero',
          text: 'For a block on a ramp tilted at angle $\\theta$, put $x$ along the slope and $y$ perpendicular to it. The motion is then purely along $x$, the normal force is purely along $y$, and only gravity has to be split: $mg\\sin\\theta$ down the slope and $mg\\cos\\theta$ into it. You will use exactly this choice in the Newton\'s laws unit.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Local and world space',
          text: 'Game engines do this all the time. A car\'s physics is simplest in its **local** frame (forward, right, up), where grip acts sideways and thrust acts forward. The renderer needs **world** coordinates. Converting between them is a rotation of axes, as in this graph. The vector is the same; only its components change.',
        },
      ],
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'truefalse',
      prompt: 'Rotating your coordinate axes changes the components of a velocity vector, and therefore changes the object\'s speed.',
      answer: false,
      explanation: 'False. The components change, but the magnitude $\\sqrt{v_x^2 + v_y^2}$ does not, because the arrow itself has not changed. Speed is a property of the motion, not of your bookkeeping. This is why you are free to choose whatever axes make a problem easiest.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'The dot product: how much of one vector lies along another',
      blocks: [
        {
          type: 'p',
          text: 'Often physics only cares about the part of a vector that points in one direction. A sled moves horizontally, so only the horizontal part of the rope\'s pull speeds it up. The [[dot-product|dot product]] measures exactly that.',
        },
        {
          type: 'theorem',
          name: 'Dot product',
          tex: '\\vec{A} \\cdot \\vec{B} = AB\\cos\\theta = A_xB_x + A_yB_y + A_zB_z',
          text: 'The result is a **scalar**. It is positive when the angle $\\theta$ between the vectors is under $90^\\circ$, zero when they are perpendicular, negative when it is over $90^\\circ$. With a unit vector $\\hat{u}$, $\\vec{A} \\cdot \\hat{u} = A\\cos\\theta$ is the [[la-scalar-projection|component of $\\vec{A}$ along $\\hat{u}$]].',
        },
        {
          type: 'p',
          text: 'The most important physical use is [[work]]. A constant force $\\vec{F}$ acting over a straight displacement $\\Delta\\vec{r}$ does work $W = \\vec{F} \\cdot \\Delta\\vec{r} = F\\,\\Delta r\\cos\\theta$: only the component of the force along the motion counts. (The work and energy unit takes this much further.)',
        },
        {
          type: 'graph',
          x: [-6, 6],
          y: [-5, 5],
          equal: true,
          segments: [
            { from: [0, -1.2], to: [5, -1.2], arrow: true, color: 'gray', label: 'Δr (5 m)' },
            { from: [`4*cos(${RAD('q')})`, `4*sin(${RAD('q')})`], to: [`4*cos(${RAD('q')})`, 0], dashed: true, color: 'gray' },
            { from: [0, 0], to: [`4*cos(${RAD('q')})`, 0], arrow: true, color: 'orange' },
            { from: [0, 0], to: [`4*cos(${RAD('q')})`, `4*sin(${RAD('q')})`], arrow: true, color: 'blue', label: 'F (4 N)' },
          ],
          sliders: [{ name: 'q', min: 0, max: 360, step: 1, value: 30, label: 'angle $\\theta$ between $\\vec{F}$ and $\\Delta\\vec{r}$ (degrees)', play: true, loop: true, speed: 60 }],
          readouts: [
            { label: 'component along motion $F\\cos\\theta$ (N):', expr: `4*cos(${RAD('q')})`, digits: 2 },
            { label: 'work $W = \\vec{F} \\cdot \\Delta\\vec{r}$ (J):', expr: `20*cos(${RAD('q')})`, digits: 2 },
          ],
          caption: 'The orange arrow is the projection of $\\vec{F}$ onto the direction of motion. Press ▶: the work is largest at $0^\\circ$, zero at $90^\\circ$ (a perpendicular force does no work) and negative past $90^\\circ$, when the force opposes the motion, as friction or braking does.',
        },
        {
          type: 'derivation',
          title: 'A rope pulls a sled $15.0\\,\\text{m}$ with $60.0\\,\\text{N}$ at $25.0^\\circ$ above horizontal',
          steps: [
            { tex: '\\vec{F} = 60.0(\\cos 25.0^\\circ\\,\\hat{\\imath} + \\sin 25.0^\\circ\\,\\hat{\\jmath}) = (54.4\\,\\hat{\\imath} + 25.4\\,\\hat{\\jmath})\\,\\text{N}', why: 'Resolve the force with $x$ along the ground.' },
            { tex: '\\Delta\\vec{r} = 15.0\\,\\hat{\\imath}\\;\\text{m}', why: 'The sled slides horizontally.' },
            { tex: 'W = F_x\\,\\Delta x + F_y\\,\\Delta y = (54.4)(15.0) + (25.4)(0)', why: 'Component form of the dot product. The vertical part of the pull does nothing to move the sled along.' },
            { tex: 'W = 816\\,\\text{J} \\;=\\; (60.0)(15.0)\\cos 25.0^\\circ', why: 'The two forms agree, as they must. Units: $\\text{N}\\cdot\\text{m} = \\text{J}$.' },
          ],
          result: 'Only $\\cos 25.0^\\circ \\approx 91\\%$ of the pull does work on the sled; the rest lifts slightly on it.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Dot products in game code',
          text: 'Is the player in front of the guard? Check `dot(forward, toPlayer) > 0`. Inside a $90^\\circ$ view cone? Compare the normalized dot product with $\\cos 45^\\circ$. Sliding along a wall? Remove the velocity\'s component along the wall\'s normal $\\hat{n}$: $\\vec{v}_{\\text{slide}} = \\vec{v} - (\\vec{v} \\cdot \\hat{n})\\,\\hat{n}$, which is the [[vector-projection|vector projection]] at work. The program in the next card does all three.',
        },
      ],
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'numeric',
      prompt: 'A soldier drags a casualty on a rescue sled $25.0\\,\\text{m}$ across level ground. The rope makes $30.0^\\circ$ with the horizontal and its tension is $180\\,\\text{N}$. How much work does the rope do on the sled? Give 3 significant figures.',
      hint: '$W = F\\,\\Delta r\\cos\\theta$, where $\\theta$ is the angle between the rope and the direction of motion.',
      answer: '180*25*cos(pi/6)',
      answerTex: '3.90 \\times 10^{3}\\,\\text{J}',
      tolerance: 25,
      unit: 'J',
      label: '$W =$',
      explanation: 'The displacement is horizontal and the rope is $30.0^\\circ$ above it, so $W = (180\\,\\text{N})(25.0\\,\\text{m})\\cos 30.0^\\circ = 3.90 \\times 10^{3}\\,\\text{J}$. Using $\\sin 30.0^\\circ$ gives $2250\\,\\text{J}$: that is the vertical component, which is perpendicular to the motion and does no work. Using the full $180 \\times 25.0 = 4500\\,\\text{J}$ would assume the rope pulls horizontally.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'concept',
      title: 'The cross product and the right-hand rule',
      blocks: [
        {
          type: 'p',
          text: 'The dot product of two vectors is a number. The [[cross-product|cross product]] is a new **vector**, perpendicular to both. Physics needs it whenever something *turns*: the twisting effect of a force, spin, the force of a magnetic field on a moving charge.',
        },
        {
          type: 'theorem',
          name: 'Cross product',
          tex: '|\\vec{A} \\times \\vec{B}| = AB\\sin\\theta, \\qquad \\vec{A} \\times \\vec{B} = (A_yB_z - A_zB_y)\\,\\hat{\\imath} + (A_zB_x - A_xB_z)\\,\\hat{\\jmath} + (A_xB_y - A_yB_x)\\,\\hat{k}',
          text: 'The direction is given by the [[right-hand-rule|right-hand rule]]. The magnitude is the area of the parallelogram the two vectors span: zero for parallel vectors, largest when they are perpendicular. Order matters: $\\vec{B} \\times \\vec{A} = -\\vec{A} \\times \\vec{B}$.',
        },
        {
          type: 'figure',
          svg: FIG_CROSS,
          alt: 'Left: two vectors A and B drawn on a horizontal plane with the parallelogram between them shaded; a green arrow A cross B points straight up, perpendicular to both, and a curved arrow sweeps from A toward B. Right: the letters i, j, k on a circle with arrows going i to j to k and back to i.',
          caption: 'Curl the fingers of your right hand from the first vector to the second; your thumb points along the cross product. Around the cycle $\\hat{\\imath} \\to \\hat{\\jmath} \\to \\hat{k}$ products come out positive; against it, negative.',
          maxWidth: 520,
        },
        {
          type: 'p',
          text: 'The flagship use is [[la-torque|torque]]: a force $\\vec{F}$ applied at position $\\vec{r}$ from a pivot produces $\\vec{\\tau} = \\vec{r} \\times \\vec{F}$, with magnitude $rF\\sin\\theta$. Only the part of the force perpendicular to the wrench turns the bolt. For vectors in the $xy$-plane, the cross product points along $\\pm\\hat{k}$: positive $z$ means counterclockwise as seen from above.',
        },
        {
          type: 'graph',
          x: [-3.5, 6.5],
          y: [-3.5, 3.5],
          equal: true,
          segments: [
            { from: [`3 - 6*cos(${RAD('q')})`, `-6*sin(${RAD('q')})`], to: [`3 + 6*cos(${RAD('q')})`, `6*sin(${RAD('q')})`], dashed: true, color: 'gray' },
            { from: [0, 0], to: [`2*cos(${RAD('q')})`, `2*sin(${RAD('q')})`], dashed: true, color: 'red' },
            { from: [`2*cos(${RAD('q')})`, `2*sin(${RAD('q')})`], to: [`3 + 2*cos(${RAD('q')})`, `2*sin(${RAD('q')})`], dashed: true, color: 'blue' },
            { from: [0, 0], to: [`3 - 3*cos(${RAD('q')})^2`, `-3*cos(${RAD('q')})*sin(${RAD('q')})`], color: 'purple', label: 'lever arm' },
            { from: [0, 0], to: [3, 0], arrow: true, color: 'blue', label: 'r' },
            { from: [3, 0], to: [`3 + 2*cos(${RAD('q')})`, `2*sin(${RAD('q')})`], arrow: true, color: 'red', label: 'F' },
          ],
          points: [{ x: 0, y: 0, label: 'pivot', color: 'gray' }],
          sliders: [{ name: 'q', min: 0, max: 360, step: 1, value: 60, label: 'angle $\\theta$ from $\\vec{r}$ to $\\vec{F}$ (degrees)', play: true, loop: true, speed: 60 }],
          readouts: [
            { label: '$\\tau_z = rF\\sin\\theta$ ($\\text{N}\\cdot\\text{m}$, with $r = 3\\,\\text{m}$, $F = 2\\,\\text{N}$):', expr: `6*sin(${RAD('q')})`, digits: 2 },
            { label: 'lever arm $r\\sin\\theta$ (m):', expr: `abs(3*sin(${RAD('q')}))`, digits: 2 },
          ],
          caption: 'Press ▶. Torque is positive (counterclockwise, out of the screen) for $0^\\circ < \\theta < 180^\\circ$ and negative (clockwise) beyond. It vanishes when $\\vec{F}$ points straight along $\\vec{r}$: pushing along a wrench does not turn the bolt. The purple lever arm is the perpendicular distance from the pivot to the force\'s line of action.',
        },
        {
          type: 'derivation',
          title: 'Torque on a bolt: $\\vec{r} = 0.250\\,\\hat{\\imath}\\;\\text{m}$, $\\vec{F} = 80.0\\,\\text{N}$ at $120^\\circ$ from $+x$',
          steps: [
            { tex: '\\vec{F} = 80.0(\\cos 120^\\circ\\,\\hat{\\imath} + \\sin 120^\\circ\\,\\hat{\\jmath}) = (-40.0\\,\\hat{\\imath} + 69.3\\,\\hat{\\jmath})\\,\\text{N}', why: 'Resolve the force into components.' },
            { tex: '\\tau_z = r_xF_y - r_yF_x = (0.250)(69.3) - (0)(-40.0)', why: 'Only the $\\hat{k}$ component survives for vectors in the $xy$-plane: $A_xB_y - A_yB_x$.' },
            { tex: '\\tau_z = +17.3\\,\\text{N}\\cdot\\text{m}', why: 'Positive: counterclockwise seen from above (the bolt\'s axis is $+z$).' },
            { tex: '|\\vec{\\tau}| = rF\\sin\\theta = (0.250)(80.0)\\sin 120^\\circ = 17.3\\,\\text{N}\\cdot\\text{m}\\;\\checkmark', why: 'The magnitude formula agrees, and the right-hand rule ($\\hat{\\imath}$ curling toward $\\vec{F}$, which leans toward $+\\hat{\\jmath}$) confirms $+\\hat{k}$.' },
          ],
          result: '$\\vec{\\tau} = 17.3\\,\\hat{k}\\;\\text{N}\\cdot\\text{m}$. Torque gets a full treatment in the rotation unit.',
        },
        {
          type: 'code',
          title: 'vec3.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdio>
#include <numbers>

struct Vec3 {
    double x, y, z;
};
Vec3 operator-(Vec3 a, Vec3 b) { return {a.x - b.x, a.y - b.y, a.z - b.z}; }
Vec3 operator*(double k, Vec3 a) { return {k * a.x, k * a.y, k * a.z}; }
double dot(Vec3 a, Vec3 b) { return a.x * b.x + a.y * b.y + a.z * b.z; }
Vec3 cross(Vec3 a, Vec3 b) {
    return {a.y * b.z - a.z * b.y, a.z * b.x - a.x * b.z, a.x * b.y - a.y * b.x};
}
double length(Vec3 a) { return std::sqrt(dot(a, a)); }

int main() {
    const double deg = 180.0 / std::numbers::pi;

    // 1. A guard at the origin faces +x (z is up). Where is the intruder?
    Vec3 forward{1, 0, 0};
    Vec3 toIntruder = Vec3{6, 8, 0} - Vec3{0, 0, 0};
    double c = dot(forward, toIntruder) / length(toIntruder);  // cos of the angle
    std::printf("angle to intruder: %.1f deg (%s a 90-degree view cone)\\n",
                std::acos(c) * deg, c > std::cos(45 / deg) ? "inside" : "outside");

    // 2. Should the guard turn left or right? Sign of the z-component of the cross product.
    double turn = cross(forward, toIntruder).z;
    std::printf("turn %s\\n", turn > 0 ? "left (counterclockwise)" : "right (clockwise)");

    // 3. Slide along a wall: remove the part of the velocity along the wall normal n.
    Vec3 v{3, -4, 0}, n{0, 1, 0};
    Vec3 slide = v - dot(v, n) * n;
    std::printf("slide velocity: (%.1f, %.1f, %.1f)\\n", slide.x, slide.y, slide.z);

    // 4. Normal of a triangle: cross product of two edges, then normalize.
    Vec3 p0{0, 0, 0}, p1{2, 0, 0}, p2{0, 1, 1};
    Vec3 nrm = cross(p1 - p0, p2 - p0);
    Vec3 unit = (1.0 / length(nrm)) * nrm;
    std::printf("triangle normal: (%.3f, %.3f, %.3f), area %.3f\\n",
                unit.x, unit.y, unit.z, 0.5 * length(nrm));
}`,
          output: `angle to intruder: 53.1 deg (outside a 90-degree view cone)
turn left (counterclockwise)
slide velocity: (3.0, 0.0, 0.0)
triangle normal: (0.000, -0.707, 0.707), area 1.414`,
          annotations: [
            { lines: '10-13', text: 'Dot and cross products straight from the component formulas.' },
            { lines: '22-24', text: 'Normalized dot product $= \\cos$ of the angle. The intruder at $(6, 8)$ is in front ($\\cos > 0$) but $53.1^\\circ$ off-axis, outside a cone of half-angle $45^\\circ$.' },
            { lines: '27-28', text: 'The sign of $(\\hat{f} \\times \\vec{d})_z$ says which way to turn: positive means the target is counterclockwise (to the left, with $z$ up).' },
            { lines: '31-32', text: 'Remove the component along the wall normal: $(3, -4) - (-4)(0, 1) = (3, 0)$. The character keeps sliding along the wall.' },
            { lines: '36-38', text: 'Two triangle edges crossed give a normal; dividing by its length makes it a unit vector. Half its length is the triangle\'s area.' },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'mcq',
      prompt: 'What is $\\hat{\\imath} \\times \\hat{k}$?',
      options: [
        { text: '$\\hat{\\jmath}$', why: 'That is $\\hat{k} \\times \\hat{\\imath}$, the order that follows the cycle $\\hat{\\imath} \\to \\hat{\\jmath} \\to \\hat{k} \\to \\hat{\\imath}$. Reversing the order flips the sign.' },
        { text: '$-\\hat{\\jmath}$', correct: true, why: 'Going from $\\hat{\\imath}$ to $\\hat{k}$ runs against the cycle, so the result is negative: $\\hat{\\imath} \\times \\hat{k} = -(\\hat{k} \\times \\hat{\\imath}) = -\\hat{\\jmath}$.' },
        { text: '$0$', why: 'The cross product is zero only for parallel vectors. $\\hat{\\imath}$ and $\\hat{k}$ are perpendicular, so the magnitude is $1 \\cdot 1 \\cdot \\sin 90^\\circ = 1$.' },
        { text: '$1$', why: 'A cross product is a vector, not a number. $1$ would be the magnitude, but you also need the direction.' },
      ],
      explanation: 'Use the cycle: $\\hat{\\imath} \\times \\hat{\\jmath} = \\hat{k}$, $\\hat{\\jmath} \\times \\hat{k} = \\hat{\\imath}$, $\\hat{k} \\times \\hat{\\imath} = \\hat{\\jmath}$. Against the cycle the sign flips, so $\\hat{\\imath} \\times \\hat{k} = -\\hat{\\jmath}$. Check with the component formula: $(1, 0, 0) \\times (0, 0, 1) = (0 \\cdot 1 - 0 \\cdot 0,\\; 0 \\cdot 0 - 1 \\cdot 1,\\; 1 \\cdot 0 - 0 \\cdot 0) = (0, -1, 0)$.',
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'fill',
      prompt: 'Compare the two products.',
      template: '$\\vec{A} \\cdot \\vec{B}$ is a ___ and is largest when the vectors are ___. $\\vec{A} \\times \\vec{B}$ is a ___ whose magnitude is largest when the vectors are ___.',
      blanks: [{ answers: ['scalar'] }, { answers: ['parallel'] }, { answers: ['vector'] }, { answers: ['perpendicular'] }],
      wordBank: ['scalar', 'vector', 'parallel', 'perpendicular', 'scalar', 'vector', 'parallel', 'perpendicular'],
      explanation: 'The dot product $AB\\cos\\theta$ is a number, maximal at $\\theta = 0$ (parallel) and zero at $90^\\circ$. The cross product is a vector with magnitude $AB\\sin\\theta$, zero for parallel vectors and maximal at $90^\\circ$. That is why work uses the dot product (force *along* the motion) and torque uses the cross product (force *across* the lever arm).',
    },
    // ------------------------------------------------------------------ 16
    {
      kind: 'numeric',
      prompt: 'You pull on the end of a $0.300\\,\\text{m}$ wrench with a force of $50.0\\,\\text{N}$ directed at $60.0^\\circ$ to the wrench handle. What is the magnitude of the torque about the bolt? Give 3 significant figures.',
      hint: '$|\\vec{\\tau}| = rF\\sin\\theta$, where $\\theta$ is the angle between $\\vec{r}$ (along the handle) and $\\vec{F}$.',
      answer: '0.3*50*sin(pi/3)',
      answerTex: '13.0\\,\\text{N}\\cdot\\text{m}',
      tolerance: 0.1,
      unit: 'N·m',
      label: '$\\tau =$',
      explanation: '$\\tau = (0.300\\,\\text{m})(50.0\\,\\text{N})\\sin 60.0^\\circ = 13.0\\,\\text{N}\\cdot\\text{m}$. Using $\\cos 60.0^\\circ$ gives $7.50\\,\\text{N}\\cdot\\text{m}$, which is the torque you would get if the angle were measured from the perpendicular. The best you can do is pull at $90^\\circ$: $15.0\\,\\text{N}\\cdot\\text{m}$.',
    },
  ],
  takeaways: [
    'Vectors have magnitude and direction; displacement (end minus start) is a vector, while distance traveled is a scalar.',
    'Components: $A_x = A\\cos\\theta$, $A_y = A\\sin\\theta$ with $\\theta$ from $+x$; recover the direction with `atan2`, which gets the quadrant right.',
    'Add and subtract vectors component by component; magnitudes add only for parallel vectors.',
    'Axes are a choice: components change when you rotate them, magnitudes and physics do not.',
    '$\\vec{A} \\cdot \\vec{B} = AB\\cos\\theta$ picks out the component along a direction, as in work $W = \\vec{F} \\cdot \\Delta\\vec{r}$.',
    '$\\vec{A} \\times \\vec{B}$ is perpendicular to both with magnitude $AB\\sin\\theta$ (right-hand rule), as in torque $\\vec{\\tau} = \\vec{r} \\times \\vec{F}$.',
  ],
  reading: [
    {
      title: 'OpenStax University Physics Volume 1, Chapter 2: Vectors',
      url: 'https://openstax.org/details/books/university-physics-volume-1',
      source: 'openstax',
      note: 'Sections 2.1 to 2.4 cover vector algebra, components, and the dot and cross products with physics examples.',
    },
    {
      title: 'PhET: Vector Addition',
      url: 'https://phet.colorado.edu/',
      source: 'other',
      note: 'Search for the "Vector Addition" simulation to drag vectors head to tail and watch the components update.',
    },
    {
      title: 'Khan Academy: Physics',
      url: 'https://www.khanacademy.org/science/physics',
      source: 'khan',
      note: 'The two-dimensional motion unit has short videos on vector components and adding vectors.',
    },
  ],
};
