import type { Lesson } from '../../types';

const DV_SVG = '<svg viewBox="0 0 380 220" xmlns="http://www.w3.org/2000/svg"><circle cx="120" cy="125" r="82" fill="none" class="s-teal" stroke-width="1.8" stroke-dasharray="5 4"/><circle cx="120" cy="125" r="3.5" fill="currentColor"/><text x="122" y="143" font-size="11" text-anchor="middle" class="t-gray">center</text><line x1="120" y1="125" x2="187.2" y2="78" class="s-gray" stroke-width="1.2" stroke-dasharray="3 3"/><line x1="187.2" y1="78" x2="156.8" y2="34.6" class="s-blue" stroke-width="2.4"/><path d="M151.6 27.2 L160.5 32 L153.1 37.1 Z" class="f-blue"/><circle cx="187.2" cy="78" r="4.5" fill="currentColor"/><line x1="120" y1="125" x2="127.1" y2="43.3" class="s-gray" stroke-width="1.2" stroke-dasharray="3 3"/><line x1="127.1" y1="43.3" x2="74.3" y2="38.7" class="s-blue" stroke-width="2.4"/><path d="M65.4 37.9 L74.7 34.2 L74 43.2 Z" class="f-blue"/><circle cx="127.1" cy="43.3" r="4.5" fill="currentColor"/><text x="195.2" y="72" font-size="14" text-anchor="start" class="t-blue"><tspan font-style="italic">v</tspan><tspan font-size="10" dy="3" font-style="normal">1</tspan></text><line x1="195.2" y1="60.5" x2="202.2" y2="60.5" class="s-blue" stroke-width="1.1"/><path d="M203.9 60.5 L201.5 58.2 L201.5 62.8 Z" class="f-blue"/><text x="83.1" y="29.3" font-size="14" text-anchor="start" class="t-blue"><tspan font-style="italic">v</tspan><tspan font-size="10" dy="3" font-style="normal">2</tspan></text><line x1="83.1" y1="17.8" x2="90.1" y2="17.8" class="s-blue" stroke-width="1.1"/><path d="M91.8 17.8 L89.4 15.5 L89.4 20.1 Z" class="f-blue"/><path d="M138 112.4 A 22 22 0 0 0 121.9 103.1" fill="none" class="s-gray" stroke-width="1.3"/><text x="137" y="99" font-size="12" text-anchor="middle">Δθ</text><line x1="300" y1="135" x2="269.6" y2="91.6" class="s-blue" stroke-width="2.4"/><path d="M264.4 84.2 L273.3 89 L265.9 94.2 Z" class="f-blue"/><line x1="300" y1="135" x2="247.2" y2="130.4" class="s-blue" stroke-width="2.4"/><path d="M238.2 129.6 L247.6 125.9 L246.8 134.9 Z" class="f-blue"/><line x1="264.4" y1="84.2" x2="242.7" y2="121.8" class="s-red" stroke-width="2.6"/><path d="M238.2 129.6 L238.8 119.6 L246.6 124.1 Z" class="f-red"/><text x="286" y="73" font-size="14" text-anchor="start" class="t-blue"><tspan font-style="italic">v</tspan><tspan font-size="10" dy="3" font-style="normal">1</tspan></text><line x1="286" y1="61.5" x2="293" y2="61.5" class="s-blue" stroke-width="1.1"/><path d="M294.7 61.5 L292.3 59.2 L292.3 63.8 Z" class="f-blue"/><text x="240" y="155" font-size="14" text-anchor="start" class="t-blue"><tspan font-style="italic">v</tspan><tspan font-size="10" dy="3" font-style="normal">2</tspan></text><line x1="240" y1="143.5" x2="247" y2="143.5" class="s-blue" stroke-width="1.1"/><path d="M248.7 143.5 L246.3 141.2 L246.3 145.8 Z" class="f-blue"/><text x="232.2" y="98.9" font-size="14" text-anchor="start" class="t-red"><tspan font-style="normal">Δ</tspan><tspan font-style="italic">v</tspan></text><line x1="240.9" y1="87.4" x2="247.9" y2="87.4" class="s-red" stroke-width="1.1"/><path d="M249.6 87.4 L247.2 85.1 L247.2 89.7 Z" class="f-red"/><text x="300" y="188" font-size="11" text-anchor="middle" class="t-gray">same Δθ between the arrows</text><path d="M289.7 120.3 A 18 18 0 0 0 282.1 133.4" fill="none" class="s-gray" stroke-width="1.3"/><text x="294" y="113" font-size="11" text-anchor="start">Δθ</text><text x="300" y="208" font-size="12" text-anchor="middle" class="t-red">Δv points toward the center</text></svg>';
const RIVER_SVG = '<svg viewBox="0 0 380 220" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="40" width="360" height="160" class="f-blue" opacity="0.08"/><line x1="10" y1="40" x2="370" y2="40" stroke="currentColor" stroke-width="2"/><line x1="10" y1="200" x2="370" y2="200" stroke="currentColor" stroke-width="2"/><text x="18" y="32" font-size="11" text-anchor="start">far bank</text><text x="18" y="216" font-size="11" text-anchor="start">near bank</text><line x1="40" y1="75" x2="69" y2="75" class="s-teal" stroke-width="1.4"/><path d="M76 75 L69 78.5 L69 71.5 Z" class="f-teal"/><line x1="40" y1="125" x2="69" y2="125" class="s-teal" stroke-width="1.4"/><path d="M76 125 L69 128.5 L69 121.5 Z" class="f-teal"/><line x1="290" y1="75" x2="319" y2="75" class="s-teal" stroke-width="1.4"/><path d="M326 75 L319 78.5 L319 71.5 Z" class="f-teal"/><text x="290" y="95" font-size="11" text-anchor="start" class="t-teal">current</text><line x1="200" y1="200" x2="116.8" y2="126.6" class="s-purple" stroke-width="2.6"/><path d="M110 120.6 L119.7 123.2 L113.8 130 Z" class="f-purple"/><line x1="110" y1="120.6" x2="191" y2="120.6" class="s-teal" stroke-width="2.6"/><path d="M200 120.6 L191 125.1 L191 116.1 Z" class="f-teal"/><line x1="200" y1="200" x2="200" y2="129.6" class="s-blue" stroke-width="2.8"/><path d="M200 120.6 L204.5 129.6 L195.5 129.6 Z" class="f-blue"/><path d="M200 170 A 30 30 0 0 0 177.5 180.2" fill="none" class="s-gray" stroke-width="1.3"/><text x="188" y="164" font-size="13" text-anchor="middle">φ</text><line x1="200" y1="200" x2="200" y2="40" class="s-gray" stroke-width="1" stroke-dasharray="3 4"/><circle cx="200" cy="200" r="5" fill="currentColor"/><text x="80" y="168" font-size="14" text-anchor="start" class="t-purple"><tspan font-style="italic">v</tspan><tspan font-size="10" dy="3" font-style="normal">BW</tspan></text><line x1="80" y1="156.5" x2="87" y2="156.5" class="s-purple" stroke-width="1.1"/><path d="M88.7 156.5 L86.3 154.2 L86.3 158.8 Z" class="f-purple"/><text x="80" y="184" font-size="10" text-anchor="start" class="t-purple">boat rel. water</text><text x="149" y="108.6" font-size="14" text-anchor="start" class="t-teal"><tspan font-style="italic">v</tspan><tspan font-size="10" dy="3" font-style="normal">WS</tspan></text><line x1="149" y1="97.1" x2="156" y2="97.1" class="s-teal" stroke-width="1.1"/><path d="M157.7 97.1 L155.3 94.8 L155.3 99.4 Z" class="f-teal"/><text x="208" y="150" font-size="14" text-anchor="start" class="t-blue"><tspan font-style="italic">v</tspan><tspan font-size="10" dy="3" font-style="normal">BS</tspan></text><line x1="208" y1="138.5" x2="215" y2="138.5" class="s-blue" stroke-width="1.1"/><path d="M216.7 138.5 L214.3 136.2 L214.3 140.8 Z" class="f-blue"/><text x="208" y="166" font-size="10" text-anchor="start" class="t-blue">boat rel. shore</text></svg>';

// Nonuniform circular motion on a 50 m circle, starting from rest with tangential acceleration k (m/s^2).
// Angle theta(s) = k s^2 / (2*50) = k s^2 / 100.
const TH = '(k*s^2/100)';
const CX = `50cos${TH}`;
const CY = `50sin${TH}`;

// River crossing: width 120 m, current u (m/s) along +x, boat speed 4 m/s relative to the water,
// heading h degrees upstream of straight across. Ground velocity (u - 4 sin h, 4 cos h).
const BVX = '(u - 4sin(h*pi/180))';
const BVY = '(4cos(h*pi/180))';
const BT = `(120/${BVY})`;
const BM = `min(s, ${BT})`;

// Leading a target: target starts at (40, 25) and moves with velocity (w, 0); projectile speed b from the origin.
// |p + v t| = b t  =>  (w^2 - b^2) t^2 + 80 w t + 2225 = 0; positive root for b > |w|.
const IT = '((-80w - sqrt(6400w^2 - 4(w^2 - b^2)*2225))/(2(w^2 - b^2)))';
const IM = `min(s, ${IT})`;

export const lesson: Lesson = {
  id: 'phys-circular-relative',
  title: 'Circular Motion and Relative Velocity',
  summary: 'Uniform circular motion and the centripetal acceleration $v^2/R$, derived by differentiating a rotating position vector; circular motion with changing speed; and relative velocity between reference frames: river crossings, crosswinds and leading a moving target.',
  minutes: 20,
  objectives: [
    'Describe uniform circular motion with $\\vec{r}(t) = R(\\cos\\omega t, \\sin\\omega t)$ and relate $v$, $\\omega$, $R$ and the period',
    'Derive the centripetal acceleration $a_c = v^2/R = \\omega^2 R$ and its direction by differentiating the position vector',
    'Combine tangential and centripetal acceleration in nonuniform circular motion',
    'Use $\\vec{v}_{PA} = \\vec{v}_{PB} + \\vec{v}_{BA}$ to solve river-crossing, crosswind and moving-shooter problems',
    'Compute the aim direction that intercepts a moving target, a core routine in game AI',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Uniform circular motion',
      blocks: [
        {
          type: 'p',
          text: 'A car on a roundabout, a point on a spinning rotor blade, a satellite in a circular orbit: all move around a circle. When the speed is constant this is [[phys-uniform-circular-motion|uniform circular motion]]. Trigonometry gave you the tools already: a point at angle $\\theta = \\omega t$ on a circle of radius $R$, where $\\omega$ is the [[angular-speed|angular speed]] in [[radian|radians]] per second.',
        },
        {
          type: 'math',
          tex: '\\vec{r}(t) = R\\cos(\\omega t)\\,\\hat{\\imath} + R\\sin(\\omega t)\\,\\hat{\\jmath}',
          caption: 'Counterclockwise motion starting on the $+x$ axis. $|\\vec{r}| = R$ at all times.',
        },
        {
          type: 'theorem',
          name: 'Speed and period',
          tex: 'v = R\\omega, \\qquad T = \\frac{2\\pi R}{v} = \\frac{2\\pi}{\\omega}, \\qquad f = \\frac{1}{T}',
          text: 'One lap is a distance $2\\pi R$ covered at speed $v$, which takes one [[period]] $T$. This is the [[linear-speed|linear speed]] relation from trigonometry.',
        },
        {
          type: 'graph',
          x: [-6, 6],
          y: [-5, 5],
          equal: true,
          polar: [{ expr: 'r', color: 'teal', dashed: true }],
          segments: [
            { from: [0, 0], to: ['r*cos(w*s)', 'r*sin(w*s)'], color: 'gray', dashed: true },
            { from: ['r*cos(w*s)', 'r*sin(w*s)'], to: ['r*cos(w*s) - 0.4r*w*sin(w*s)', 'r*sin(w*s) + 0.4r*w*cos(w*s)'], color: 'blue', arrow: true, label: 'v' },
            { from: ['r*cos(w*s)', 'r*sin(w*s)'], to: ['r*cos(w*s) - 0.25r*w^2*cos(w*s)', 'r*sin(w*s) - 0.25r*w^2*sin(w*s)'], color: 'red', arrow: true, label: 'a' },
          ],
          points: [{ x: 'r*cos(w*s)', y: 'r*sin(w*s)', color: 'blue' }],
          sliders: [
            { name: 'r', min: 1, max: 4, step: 0.1, value: 3, label: 'radius $R$ (m)' },
            { name: 'w', min: 0.5, max: 2, step: 0.05, value: 1, label: 'angular speed $\\omega$ (rad/s)' },
            { name: 's', min: 0, max: 12.6, step: 0.02, value: 0, label: 'time $t$ (s)', play: true, loop: true },
          ],
          readouts: [
            { label: 'speed $v = R\\omega$ (m/s):', expr: 'r*w' },
            { label: '$a_c = v^2/R$ (m/s²):', expr: '(r*w)^2/r' },
            { label: 'period $2\\pi/\\omega$ (s):', expr: '2pi/w' },
          ],
          caption: 'Press ▶. The velocity (blue, $0.4\\,\\text{m}$ per $\\text{m/s}$) is tangent to the circle and keeps its length; the acceleration (red, $0.25\\,\\text{m}$ per $\\text{m/s}^2$) always points at the center. Double $\\omega$ and the red arrow grows four times longer.',
        },
        {
          type: 'p',
          text: 'The speed never changes, yet the object accelerates: its velocity **vector** turns continuously. From the last lessons, a constant speed means the tangential acceleration is zero, so all of the acceleration must be normal, pointing toward the inside of the bend. For a circle that is the center.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'mcq',
      prompt: 'A car drives around a circular track at a constant $20\\,\\text{m/s}$. Which statement about its acceleration is correct?',
      options: [
        { text: 'It is zero, because the speed is constant', why: 'Constant speed means $a_t = 0$, but the direction of the velocity changes continuously, and that requires an acceleration.' },
        { text: 'It points along the velocity, tangent to the track', why: 'A tangential component would change the speed, which stays at $20\\,\\text{m/s}$.' },
        { text: 'It points toward the center of the circle', correct: true, why: 'All of the acceleration is centripetal: magnitude $v^2/R$, directed at the center.' },
        { text: 'It points away from the center, which is why passengers slide outward', why: 'Passengers slide outward relative to the car because their bodies tend to keep moving in a straight line while the car turns inward beneath them. The car\'s acceleration points inward.' },
      ],
      explanation: 'Velocity is a vector, so changing its direction is acceleration even at constant speed. For uniform circular motion the acceleration is purely centripetal ("center-seeking"), $a_c = v^2/R$. The outward lurch you feel is not an outward acceleration; it is your inertia, a story the Newton\'s-laws unit tells properly.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Deriving the centripetal acceleration',
      blocks: [
        {
          type: 'p',
          text: 'With the position vector in hand, the acceleration is just two derivatives away. This is the cleanest route to the most important formula of the unit.',
        },
        {
          type: 'derivation',
          title: 'Differentiate $\\vec{r}(t) = R(\\cos\\omega t,\\ \\sin\\omega t)$ twice',
          steps: [
            { tex: '\\vec{v} = \\frac{d\\vec{r}}{dt} = R\\omega\\,(-\\sin\\omega t,\\ \\cos\\omega t)', why: 'Chain rule on each component; $R$ and $\\omega$ are constants.' },
            { tex: '\\vec{v}\\cdot\\vec{r} = R^2\\omega(-\\sin\\omega t\\cos\\omega t + \\cos\\omega t\\sin\\omega t) = 0', why: 'Velocity is perpendicular to the radius, so it is tangent to the circle. Its magnitude is $R\\omega$.' },
            { tex: '\\vec{a} = \\frac{d\\vec{v}}{dt} = -R\\omega^2\\,(\\cos\\omega t,\\ \\sin\\omega t) = -\\omega^2\\,\\vec{r}', why: 'Differentiate again. The result is a negative multiple of $\\vec{r}$: it points from the object back toward the center.' },
            { tex: 'a_c = |\\vec{a}| = \\omega^2 R = \\frac{v^2}{R}', why: 'Take the magnitude and substitute $\\omega = v/R$.' },
          ],
          result: 'The [[phys-centripetal-acceleration|centripetal acceleration]] has magnitude $v^2/R$ and always points toward the center.',
        },
        {
          type: 'theorem',
          name: 'Centripetal acceleration',
          tex: 'a_c = \\frac{v^2}{R} = \\omega^2 R = \\frac{4\\pi^2 R}{T^2}, \\quad \\text{directed toward the center}',
          text: 'Check the units: $(\\text{m/s})^2/\\text{m} = \\text{m/s}^2$. Limiting cases: a huge radius (a nearly straight road) gives $a_c \\to 0$; a faster car on the same curve needs $v^2$ times more.',
        },
        {
          type: 'figure',
          svg: DV_SVG,
          alt: 'Left: a dashed circle with two points separated by angle delta theta, each with a blue tangent velocity arrow v1 and v2 of equal length. Right: the two velocity arrows drawn tail to tail with angle delta theta between them, and a red arrow delta v from the tip of v1 to the tip of v2, pointing down and to the left, toward where the center would be.',
          caption: 'The geometric picture. Both velocity vectors have length $v$, and they are rotated by the same $\\Delta\\theta$ as the radii. Their difference $\\Delta\\vec{v}$ points toward the center.',
          maxWidth: 420,
        },
        {
          type: 'deepdive',
          title: 'The similar-triangles derivation (no calculus)',
          blocks: [
            {
              type: 'p',
              text: 'The triangle formed by the two radii (sides $R$, $R$, chord $|\\Delta\\vec{r}|$) and the triangle formed by the two velocities (sides $v$, $v$, base $|\\Delta\\vec{v}|$) are isosceles with the same apex angle $\\Delta\\theta$, so they are similar:',
            },
            { type: 'math', tex: '\\frac{|\\Delta\\vec{v}|}{v} = \\frac{|\\Delta\\vec{r}|}{R} \\implies \\frac{|\\Delta\\vec{v}|}{\\Delta t} = \\frac{v}{R}\\,\\frac{|\\Delta\\vec{r}|}{\\Delta t} \\xrightarrow{\\Delta t \\to 0} a_c = \\frac{v}{R}\\cdot v = \\frac{v^2}{R}' },
            {
              type: 'p',
              text: 'As $\\Delta t \\to 0$ the chord length per unit time becomes the speed $v$, and $\\Delta\\vec{v}$ becomes perpendicular to $\\vec{v}$, pointing at the center. This is essentially Newton\'s own argument, and it is how the formula appears in most algebra-based courses.',
            },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'numeric',
      prompt: 'The International Space Station moves at about $7660\\,\\text{m/s}$ on a nearly circular orbit of radius $6.79 \\times 10^6\\,\\text{m}$ (measured from Earth\'s center). Find its centripetal acceleration, to 3 significant figures.',
      hint: '$a_c = v^2/R$. Use the radius from Earth\'s center, not the altitude.',
      label: '$a_c =$',
      unit: 'm/s²',
      answer: '7660^2/(6.79*10^6)',
      answerTex: '\\frac{(7660)^2}{6.79 \\times 10^6} \\approx 8.64',
      tolerance: 0.06,
      explanation: '$a_c = \\frac{7660^2}{6.79\\times 10^6} = \\frac{5.868 \\times 10^7}{6.79 \\times 10^6} \\approx 8.64\\,\\text{m/s}^2$. That is gravity at the station\'s altitude, about $88\\%$ of the surface value. Astronauts float not because gravity vanishes but because they and the station fall around the Earth together with this acceleration, an idea the gravitation unit develops.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Circular motion with changing speed',
      blocks: [
        {
          type: 'p',
          text: 'A car accelerating out of a roundabout, a hammer thrower spinning up, a roller-coaster car in a vertical loop: the path is circular but the speed changes. Now the acceleration has both components from the first lesson of this unit, the tangential one from $dv/dt$ and the centripetal one from turning.',
        },
        {
          type: 'theorem',
          name: 'Nonuniform circular motion',
          tex: '\\vec{a} = \\underbrace{\\frac{dv}{dt}\\,\\hat{T}}_{\\text{tangential}} + \\underbrace{\\frac{v^2}{R}\\,\\hat{N}}_{\\text{centripetal}}, \\qquad |\\vec{a}| = \\sqrt{a_t^2 + a_c^2}',
          text: '$\\hat{N}$ points to the center. With angular acceleration $\\alpha = d\\omega/dt$, the tangential part is $a_t = R\\alpha$; the rotation unit picks this up.',
        },
        {
          type: 'graph',
          x: [-70, 70],
          y: [-62, 62],
          equal: true,
          polar: [{ expr: '50', color: 'teal', dashed: true }],
          segments: [
            { from: [CX, CY], to: [`${CX} - 1.5k*s*sin${TH}`, `${CY} + 1.5k*s*cos${TH}`], color: 'blue', arrow: true, label: 'v' },
            { from: [CX, CY], to: [`${CX} - 6k*sin${TH}`, `${CY} + 6k*cos${TH}`], color: 'green', arrow: true, label: 'aₜ' },
            { from: [CX, CY], to: [`${CX} - 6(k*s)^2/50*cos${TH}`, `${CY} - 6(k*s)^2/50*sin${TH}`], color: 'purple', arrow: true, label: 'aₙ' },
            { from: [CX, CY], to: [`${CX} - 6k*sin${TH} - 6(k*s)^2/50*cos${TH}`, `${CY} + 6k*cos${TH} - 6(k*s)^2/50*sin${TH}`], color: 'red', arrow: true, label: 'a' },
          ],
          points: [{ x: CX, y: CY, color: 'blue' }],
          sliders: [
            { name: 'k', min: 0.5, max: 2.5, step: 0.1, value: 2, label: 'tangential acceleration $a_t$ (m/s²)' },
            { name: 's', min: 0, max: 7, step: 0.02, value: 5, label: 'time $t$ (s)', play: true },
          ],
          readouts: [
            { label: 'speed $v = a_t t$ (m/s):', expr: 'k*s' },
            { label: '$a_c = v^2/R$ (m/s²):', expr: '(k*s)^2/50' },
            { label: '$|\\vec{a}|$ (m/s²):', expr: 'sqrt(k^2 + (k*s)^4/2500)' },
            { label: 'angle of $\\vec{a}$ from $\\vec{v}$ (°):', expr: 'arctan((k*s)^2/(50k))*180/pi' },
          ],
          caption: 'A car starts from rest on a $50\\,\\text{m}$ circle and speeds up steadily. Press ▶: the green tangential part stays the same, the purple centripetal part $a_n = v^2/R$ grows like $t^2$, and the total (red) swings from pointing along the track to pointing almost at the center. Acceleration arrows are drawn at $6\\,\\text{m}$ per $\\text{m/s}^2$; velocity at $1.5\\,\\text{m}$ per $\\text{m/s}$. The default $t = 5\\,\\text{s}$ is the worked example below.',
        },
        {
          type: 'derivation',
          title: 'A car speeding up on a curve',
          steps: [
            { tex: 'R = 50\\,\\text{m}, \\quad a_t = 2.0\\,\\text{m/s}^2, \\quad v_0 = 0, \\quad t = 5.0\\,\\text{s}', why: 'Given: the car starts from rest and gains speed at a steady rate.' },
            { tex: 'v = a_t t = 10\\,\\text{m/s}', why: 'Constant tangential acceleration: the speed grows linearly along the track, as in 1D.' },
            { tex: 'a_c = \\frac{v^2}{R} = \\frac{100}{50} = 2.0\\,\\text{m/s}^2', why: 'The centripetal part depends on the current speed.' },
            { tex: '|\\vec{a}| = \\sqrt{2.0^2 + 2.0^2} = 2.83\\,\\text{m/s}^2 \\text{ at } 45^\\circ \\text{ to } \\vec{v}', why: 'The two parts are perpendicular, so they combine by Pythagoras; equal parts give $45^\\circ$, tilted forward and toward the center.' },
          ],
          result: 'A tire must supply grip for **both** parts at once. That is why braking or accelerating hard in the middle of a bend makes a car slide, a trade-off the friction lesson quantifies.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'truefalse',
      prompt: 'In circular motion, the acceleration always points toward the center of the circle.',
      answer: false,
      explanation: 'Only in **uniform** circular motion. When the speed changes there is also a tangential component $a_t = dv/dt$, so the total acceleration $\\sqrt{a_t^2 + a_c^2}$ points ahead of the center (speeding up) or behind it (slowing down). Only the centripetal **component** always points at the center.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'Reference frames and relative velocity',
      blocks: [
        {
          type: 'p',
          text: 'Velocity always means velocity **relative to something**. A passenger walking forward in a train has one velocity relative to the train and another relative to the ground. Each observer carries a [[phys-reference-frame|reference frame]], a coordinate system attached to them, and the question is how the measurements translate.',
        },
        {
          type: 'derivation',
          title: 'Velocity addition from positions',
          steps: [
            { tex: '\\vec{r}_{PA} = \\vec{r}_{PB} + \\vec{r}_{BA}', why: 'Position of object $P$ in frame $A$ = its position in frame $B$ plus the position of $B$\'s origin in frame $A$: vector addition, tip to tail.' },
            { tex: '\\vec{v}_{PA} = \\vec{v}_{PB} + \\vec{v}_{BA}', why: 'Differentiate with respect to time. (Both frames use the same clock, which is true at everyday speeds.)' },
            { tex: '\\vec{a}_{PA} = \\vec{a}_{PB} \\quad \\text{if } \\vec{v}_{BA} \\text{ is constant}', why: 'Differentiate again: a constant frame velocity has zero derivative. Frames moving uniformly relative to each other agree on accelerations.' },
          ],
          result: 'The [[phys-relative-velocity|relative velocity]] rule. Read the subscripts as "$P$ relative to $A$"; the inner subscripts cancel like a chain: $PB \\cdot BA \\to PA$. Reversing a pair flips the sign: $\\vec{v}_{AB} = -\\vec{v}_{BA}$.',
        },
        {
          type: 'p',
          text: 'Train example: the train moves at $25.0\\,\\text{m/s}$ east relative to the ground, and the passenger walks at $1.5\\,\\text{m/s}$ east relative to the train, so $\\vec{v}_{PG} = 1.5 + 25.0 = 26.5\\,\\text{m/s}$ east. Walking toward the back gives $-1.5 + 25.0 = 23.5\\,\\text{m/s}$ east. In two dimensions the same rule adds arrows instead of numbers.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the acceleration result matters so much',
          text: 'Frames moving at constant velocity relative to each other measure the **same** acceleration for every object. Newton\'s laws are statements about acceleration, so they hold equally in all such frames: you cannot tell, by doing mechanics inside a smoothly cruising aircraft, that you are moving. These are the inertial frames of the next unit. An accelerating frame (a braking car, a spinning carousel) measures different accelerations, and that is where "fictitious" forces such as centrifugal force come from.',
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'mcq',
      prompt: 'You ride in a train moving at constant velocity and drop a coin. To you, it falls straight down. What path does a person standing on the platform see?',
      options: [
        { text: 'Straight down, the same as you see', why: 'The platform observer also sees the coin\'s horizontal velocity, the train\'s, which it keeps after you let go.' },
        { text: 'A parabola curving forward, in the direction the train moves', correct: true, why: 'Relative to the ground the coin starts with the train\'s horizontal velocity and then falls: horizontal launch, so a projectile parabola.' },
        { text: 'A parabola curving backward, because the train moves on without it', why: 'The coin does not fall behind; it keeps the train\'s horizontal velocity, which is why it lands at your feet.' },
        { text: 'A straight slanted line', why: 'The horizontal velocity is constant but the vertical velocity grows, so the path bends: a parabola, not a line.' },
      ],
      explanation: 'Apply $\\vec{v}_{\\text{coin, ground}} = \\vec{v}_{\\text{coin, train}} + \\vec{v}_{\\text{train, ground}}$. In the train frame the coin starts at rest; in the ground frame it starts with the train\'s velocity. Both frames agree on its acceleration ($g$ down), so the ground observer sees a horizontally launched projectile, a parabola, while you see the straight-down special case. Same motion, two descriptions.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'concept',
      title: 'Crossing a river, flying in a crosswind',
      blocks: [
        {
          type: 'p',
          text: 'A boat moves relative to the **water**, and the water moves relative to the **shore**. With $B$ = boat, $W$ = water, $S$ = shore: $\\vec{v}_{BS} = \\vec{v}_{BW} + \\vec{v}_{WS}$. The same equation describes an aircraft and the wind: airspeed plus wind velocity gives ground velocity.',
        },
        {
          type: 'figure',
          svg: RIVER_SVG,
          alt: 'A river flowing to the right between two banks. From a boat on the near bank, a purple arrow v BW points up and to the left at angle phi from straight across. A teal arrow v WS continues from its tip to the right. Their sum, a blue arrow v BS, points straight across the river.',
          caption: 'To land directly opposite, aim upstream at the angle $\\varphi$ that makes the current cancel: $v_{BW}\\sin\\varphi = v_{WS}$.',
          maxWidth: 420,
        },
        {
          type: 'derivation',
          title: 'River $120\\,\\text{m}$ wide, current $3.0\\,\\text{m/s}$, boat $4.0\\,\\text{m/s}$ relative to the water',
          steps: [
            { tex: '\\text{A: head straight across: } \\vec{v}_{BS} = (3.0,\\ 4.0)\\,\\text{m/s}', why: 'Current along $x$ (downstream), boat velocity relative to water along $y$ (across).' },
            { tex: 't_A = \\frac{120}{4.0} = 30\\,\\text{s}, \\qquad \\text{drift} = 3.0 \\times 30 = 90\\,\\text{m}', why: 'Only the $y$-component carries the boat across; meanwhile the current carries it downstream. Components are independent.' },
            { tex: '\\text{B: land opposite: } 4.0\\sin\\varphi = 3.0 \\implies \\varphi = 48.6^\\circ \\text{ upstream}', why: 'Choose the heading so the upstream component of $\\vec{v}_{BW}$ cancels the current.' },
            { tex: 'v_{BS} = \\sqrt{4.0^2 - 3.0^2} = \\sqrt{7} = 2.65\\,\\text{m/s}, \\qquad t_B = \\frac{120}{2.65} = 45.4\\,\\text{s}', why: 'Right triangle: $\\vec{v}_{BW}$ is the hypotenuse, so the across speed is the remaining leg.' },
          ],
          result: 'Heading straight across is the **fastest** crossing ($30\\,\\text{s}$) but lands $90\\,\\text{m}$ downstream; aiming upstream lands on target but takes $45\\,\\text{s}$. If the current were faster than the boat, no heading could reach the opposite point.',
        },
        {
          type: 'graph',
          x: [-80, 180],
          y: [-15, 135],
          equal: true,
          hlines: [{ y: 0, color: 'gray', dashed: false }, { y: 120, color: 'gray', dashed: false }],
          parametric: [{ x: `${BVX}*t`, y: `${BVY}*t`, t: [0, BM], color: 'blue', label: 'path relative to the shore' }],
          segments: [
            { from: [`${BVX}*${BM}`, `${BVY}*${BM}`], to: [`${BVX}*${BM} - 32sin(h*pi/180)`, `${BVY}*${BM} + 32cos(h*pi/180)`], color: 'purple', arrow: true, label: 'v BW' },
            { from: [`${BVX}*${BM}`, `${BVY}*${BM}`], to: [`${BVX}*${BM} + 8u`, `${BVY}*${BM} + 0.001`], color: 'teal', arrow: true, label: 'v WS' },
          ],
          points: [
            { x: `${BVX}*${BM}`, y: `${BVY}*${BM}`, color: 'blue' },
            { x: 0, y: 120, color: 'gray', open: true, label: 'opposite point' },
          ],
          sliders: [
            { name: 'h', min: -30, max: 70, step: 0.5, value: 0, label: 'heading $\\varphi$ upstream of straight across (°)' },
            { name: 'u', min: 0, max: 5, step: 0.1, value: 3, label: 'current speed (m/s)' },
            { name: 's', min: 0, max: 60, step: 0.1, value: 0, label: 'time $t$ (s)', play: true },
          ],
          readouts: [
            { label: 'crossing time (s):', expr: BT },
            { label: 'lands downstream by (m):', expr: `${BVX}*${BT}` },
            { label: 'ground speed (m/s):', expr: `sqrt(${BVX}^2 + ${BVY}^2)` },
          ],
          caption: 'Meters and seconds; the boat moves at $4.0\\,\\text{m/s}$ relative to the water, and the arrows are drawn at $8\\,\\text{m}$ per $\\text{m/s}$. Press ▶ with $\\varphi = 0$ (the fastest crossing), then set $\\varphi = 48.6^\\circ$ to land on the open circle. Raise the current above $4\\,\\text{m/s}$: no heading reaches the opposite point any more.',
        },
      ],
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'numeric',
      prompt: 'A pilot wants to fly due **north**. The aircraft\'s airspeed is $220\\,\\text{m/s}$, and a wind blows toward the **east** at $40.0\\,\\text{m/s}$. How many degrees west of north must the pilot head the aircraft? Give 3 significant figures.',
      hint: 'Ground velocity = air velocity + wind. For the ground velocity to point north, the westward component of the air velocity must cancel the wind. The airspeed is the hypotenuse.',
      label: 'heading',
      unit: '° west of north',
      answer: 'arcsin(40/220)*180/pi',
      answerTex: '\\arcsin\\frac{40.0}{220} \\approx 10.5^\\circ',
      tolerance: 0.08,
      explanation: 'With $\\vec{v}_{PG} = \\vec{v}_{PA} + \\vec{v}_{AG}$ and the air velocity at angle $\\varphi$ west of north, cancelling the east-west parts needs $220\\sin\\varphi = 40.0$, so $\\varphi = \\arcsin(0.182) = 10.5^\\circ$. The ground speed is then $\\sqrt{220^2 - 40.0^2} = 216\\,\\text{m/s}$. Using $\\arctan(40/220) = 10.3^\\circ$ treats $220\\,\\text{m/s}$ as the northward leg instead of the hypotenuse: that is the angle the plane would drift off course if it headed due north.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'The moving shooter: leading a target',
      blocks: [
        {
          type: 'p',
          text: 'A projectile fired from a moving vehicle inherits the vehicle\'s velocity: $\\vec{v}_{\\text{shot, ground}} = \\vec{v}_{\\text{shot, shooter}} + \\vec{v}_{\\text{shooter, ground}}$. A door gunner on a helicopter, a turret on a moving tank and a bot strafing in an arena shooter all face the same problem: where to aim so that a projectile of speed $s$ (relative to the shooter) meets a moving target.',
        },
        {
          type: 'p',
          text: 'Work in the **shooter\'s frame**, where the shooter is at rest at the origin. There the target starts at $\\vec{p}$ and moves with the relative velocity $\\vec{u} = \\vec{v}_{\\text{target}} - \\vec{v}_{\\text{shooter}}$, and the projectile flies in a straight line at speed $s$ (ignore gravity for fast projectiles over short ranges). They meet at time $t$ if the target\'s distance then equals $st$.',
        },
        {
          type: 'derivation',
          title: 'Intercept time',
          steps: [
            { tex: '|\\vec{p} + \\vec{u}\\,t| = s\\,t', why: 'Distance of the target from the shooter at time $t$ equals the distance the projectile has flown.' },
            { tex: '(\\vec{p} + \\vec{u}t)\\cdot(\\vec{p} + \\vec{u}t) = s^2t^2', why: 'Square both sides with the [[dot-product|dot product]] (both sides are nonnegative, so nothing is lost).' },
            { tex: '(\\vec{u}\\cdot\\vec{u} - s^2)\\,t^2 + 2(\\vec{p}\\cdot\\vec{u})\\,t + \\vec{p}\\cdot\\vec{p} = 0', why: 'Expand and collect: a quadratic in $t$. Take the smallest positive root; none means the target cannot be caught.' },
            { tex: '\\hat{d} = \\frac{\\vec{p} + \\vec{u}t}{s\\,t}', why: 'Aim at where the target **will be**: a unit vector toward the meeting point.' },
          ],
          result: 'Aiming at where the target is now always misses a moving target; this "lead" calculation is in nearly every game with AI gunners.',
        },
        {
          type: 'graph',
          x: [-5, 70],
          y: [-5, 40],
          equal: true,
          segments: [
            { from: [0, 0], to: [`(40 + w*${IT})`, 25], color: 'gray', dashed: true },
            { from: [40, 25], to: [`40 + w*${IT}`, 25.001], color: 'orange', dashed: true },
          ],
          points: [
            { x: `(40 + w*${IT})*${IM}/${IT}`, y: `25*${IM}/${IT}`, color: 'blue', label: 'shot' },
            { x: `40 + w*${IM}`, y: 25, color: 'red', label: 'target' },
            { x: 0, y: 0, color: 'gray', label: 'shooter' },
          ],
          sliders: [
            { name: 'w', min: -10, max: 6, step: 0.5, value: 4, label: 'target velocity $u_x$ (m/s)' },
            { name: 'b', min: 15, max: 40, step: 0.5, value: 20, label: 'projectile speed $s$ (m/s)' },
            { name: 's', min: 0, max: 5.5, step: 0.01, value: 0, label: 'time $t$ (s)', play: true },
          ],
          readouts: [
            { label: 'intercept time (s):', expr: IT },
            { label: 'aim angle above $+x$ (°):', expr: `arctan(25/(40 + w*${IT}))*180/pi` },
            { label: 'angle to target now (°):', expr: 'arctan(25/40)*180/pi' },
          ],
          caption: 'Shooter\'s frame, meters and seconds. The target starts at $(40, 25)$ and moves horizontally; the shot leaves the origin toward the predicted meeting point (gray dashed). Press ▶: they arrive together. A faster projectile needs less lead; a target moving toward the shooter ($u_x < 0$) is met sooner.',
        },
        {
          type: 'code',
          title: 'lead.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdio>
#include <numbers>
#include <optional>
#include <utility>

struct Vec2 {
    double x, y;
};
Vec2 operator+(Vec2 a, Vec2 b) { return {a.x + b.x, a.y + b.y}; }
Vec2 operator-(Vec2 a, Vec2 b) { return {a.x - b.x, a.y - b.y}; }
Vec2 operator*(double s, Vec2 v) { return {s * v.x, s * v.y}; }
double dot(Vec2 a, Vec2 b) { return a.x * b.x + a.y * b.y; }

// Earliest time t > 0 at which a projectile fired with speed s (relative to the
// shooter) can meet a target at relative position p moving with relative velocity u.
// Solves |p + u t| = s t, i.e. (u.u - s^2) t^2 + 2 (p.u) t + p.p = 0.
std::optional<double> interceptTime(Vec2 p, Vec2 u, double s) {
    double a = dot(u, u) - s * s, b = 2.0 * dot(p, u), c = dot(p, p);
    if (std::abs(a) < 1e-12) {                      // equal speeds: equation is linear
        if (b < 0.0) return -c / b;
        return std::nullopt;
    }
    double disc = b * b - 4.0 * a * c;
    if (disc < 0.0) return std::nullopt;
    double r = std::sqrt(disc);
    double t1 = (-b - r) / (2.0 * a), t2 = (-b + r) / (2.0 * a);
    if (t1 > t2) std::swap(t1, t2);
    if (t1 > 0.0) return t1;
    if (t2 > 0.0) return t2;
    return std::nullopt;
}

int main() {
    Vec2 shooterPos{0, 0}, shooterVel{5, 0};       // a moving vehicle (m, m/s)
    Vec2 targetPos{40, 25}, targetVel{-6, 2};      // a moving target
    double muzzle = 30.0;                          // projectile speed relative to the shooter

    Vec2 p = targetPos - shooterPos;               // everything in the shooter's frame
    Vec2 u = targetVel - shooterVel;
    if (auto t = interceptTime(p, u, muzzle)) {
        Vec2 hitRel = p + *t * u;                  // meeting point, shooter frame
        Vec2 dir = (1.0 / (muzzle * *t)) * hitRel; // unit aim direction
        double deg = std::atan2(dir.y, dir.x) * 180.0 / std::numbers::pi;
        Vec2 shotVel = muzzle * dir + shooterVel;  // projectile velocity, ground frame
        Vec2 shot = shooterPos + *t * shotVel;     // check in the ground frame
        Vec2 target = targetPos + *t * targetVel;
        std::printf("intercept after %.3f s, aim %.2f deg\\n", *t, deg);
        std::printf("projectile at (%.2f, %.2f), target at (%.2f, %.2f)\\n", shot.x, shot.y, target.x, target.y);
    }
}`,
          output: `intercept after 1.264 s, aim 46.53 deg
projectile at (32.41, 27.53), target at (32.41, 27.53)`,
          annotations: [
            { lines: '20-34', text: 'The quadratic from the derivation. The linear special case handles a projectile exactly as fast as the target.' },
            { lines: '41-42', text: 'Relative position and **relative velocity**: the whole problem becomes "stationary shooter, moving target".' },
            { lines: '46-48', text: 'Back to the ground frame: the projectile\'s ground velocity is its muzzle velocity plus the shooter\'s velocity. The final check confirms both objects reach the same point.' },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'error',
      prompt: 'A car drives east at $20\\,\\text{m/s}$ through rain falling straight down at $8.0\\,\\text{m/s}$ (relative to the ground). A student finds the rain\'s velocity relative to the car, with $x$ east and $y$ up. Tap the first wrong line.',
      lines: [
        'Rain relative to ground: $\\vec{v}_{RG} = (0,\\ -8.0)$ m/s',
        'Car relative to ground: $\\vec{v}_{CG} = (20,\\ 0)$ m/s',
        'Rain relative to car: $\\vec{v}_{RC} = \\vec{v}_{RG} + \\vec{v}_{CG} = (20,\\ -8.0)$ m/s',
        'So, seen from the car, the rain moves forward at $21.5$ m/s and seems to come from behind.',
      ],
      errorLines: [3],
      explanation: 'The chain rule for subscripts needs $\\vec{v}_{RC} = \\vec{v}_{RG} + \\vec{v}_{GC}$, and $\\vec{v}_{GC} = -\\vec{v}_{CG}$. So $\\vec{v}_{RC} = (0, -8.0) - (20, 0) = (-20,\\ -8.0)\\,\\text{m/s}$: the rain moves toward the back of the car, at $21.5\\,\\text{m/s}$, angled $\\arctan(20/8.0) = 68^\\circ$ from vertical. Seen from the car, the rain comes **at** the windshield from the front, which is why the windshield gets soaked while the rear window stays fairly dry. Adding $\\vec{v}_{CG}$ instead of subtracting is the most common relative-velocity error.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'expr',
      prompt: 'An object moves in uniform circular motion with radius $R$ and period $T$. Write its centripetal acceleration in terms of $R$ and $T$.',
      hint: 'Speed is one circumference per period, $v = 2\\pi R/T$. Then use $a_c = v^2/R$.',
      label: '$a_c =$',
      answer: '4pi^2*R/T^2',
      answerTex: 'a_c = \\frac{4\\pi^2 R}{T^2}',
      variables: ['R', 'T'],
      domain: [1, 3],
      explanation: '$a_c = \\frac{v^2}{R} = \\frac{(2\\pi R/T)^2}{R} = \\frac{4\\pi^2 R}{T^2}$. Equivalently $\\omega = 2\\pi/T$ and $a_c = \\omega^2 R$. This form is handy for centrifuges and orbits, where the period is what you know: an $8.0\\,\\text{m}$ centrifuge arm turning once every $2.0\\,\\text{s}$ gives $a_c = 4\\pi^2(8.0)/2.0^2 \\approx 79\\,\\text{m/s}^2$, about $8g$.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'order',
      prompt: 'Order the steps for finding the heading a boat needs to land directly across a river.',
      lines: [
        'Name the objects and frames: boat $B$, water $W$, shore $S$',
        'Write $\\vec{v}_{BS} = \\vec{v}_{BW} + \\vec{v}_{WS}$',
        'Require the downstream component of $\\vec{v}_{BS}$ to be zero: $v_{BW}\\sin\\varphi = v_{WS}$',
        'Solve for $\\varphi$, then find the crossing speed $v_{BW}\\cos\\varphi$ and the time',
      ],
      distractors: ['Add the speeds: $v_{BS} = v_{BW} + v_{WS}$'],
      explanation: 'Label the frames, write the vector equation with matching subscripts, impose the condition (no net downstream motion) on one component, and solve. The distractor adds magnitudes, which only works when the velocities are parallel; here they are not.',
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'fill',
      prompt: 'Complete the summary.',
      template: 'In uniform circular motion the acceleration points ___ with magnitude ___. Frames moving at constant velocity relative to each other agree on every object\'s ___.',
      blanks: [{ answers: ['toward the center'] }, { answers: ['$v^2/R$'] }, { answers: ['acceleration'] }],
      wordBank: ['toward the center', 'away from the center', '$v^2/R$', '$v/R$', 'acceleration', 'velocity'],
      explanation: '$\\vec{a} = -\\omega^2\\vec{r}$ points from the object to the center, with magnitude $\\omega^2R = v^2/R$. Differentiating $\\vec{v}_{PA} = \\vec{v}_{PB} + \\vec{v}_{BA}$ with constant $\\vec{v}_{BA}$ shows that such frames measure the same acceleration, though they disagree about velocity.',
    },
  ],
  takeaways: [
    'Uniform circular motion: $\\vec{r} = R(\\cos\\omega t, \\sin\\omega t)$, $v = R\\omega$, $T = 2\\pi R/v$; the velocity is tangent and keeps its length.',
    'Differentiating twice gives $\\vec{a} = -\\omega^2\\vec{r}$: centripetal acceleration $a_c = v^2/R = \\omega^2R = 4\\pi^2R/T^2$, toward the center.',
    'With changing speed, $\\vec{a} = a_t\\hat{T} + (v^2/R)\\hat{N}$ and $|\\vec{a}| = \\sqrt{a_t^2 + a_c^2}$; only the centripetal component points at the center.',
    'Relative velocity: $\\vec{v}_{PA} = \\vec{v}_{PB} + \\vec{v}_{BA}$ and $\\vec{v}_{AB} = -\\vec{v}_{BA}$. Frames in uniform relative motion agree on accelerations.',
    'River, wind and moving-shooter problems are the same vector equation; to hit a moving target, solve $|\\vec{p} + \\vec{u}t| = st$ in the shooter\'s frame and aim at the meeting point.',
  ],
  reading: [
    {
      title: 'OpenStax — University Physics Volume 1, Sections 4.4 and 4.5',
      url: 'https://openstax.org/details/books/university-physics-volume-1',
      source: 'openstax',
      note: 'Uniform circular motion and relative motion in one and two dimensions, with worked examples like the river and wind problems here.',
    },
    {
      title: 'Wikipedia — Circular motion',
      url: 'https://en.wikipedia.org/wiki/Circular_motion',
      source: 'wikipedia',
      note: 'Derivations of centripetal acceleration in several ways, plus nonuniform circular motion.',
    },
    {
      title: 'Wikipedia — Relative velocity',
      url: 'https://en.wikipedia.org/wiki/Relative_velocity',
      source: 'wikipedia',
      note: 'The Galilean velocity addition rule and how special relativity modifies it at speeds near light.',
    },
    {
      title: 'Khan Academy — Physics',
      url: 'https://www.khanacademy.org/science/physics',
      source: 'khan',
      note: 'Centripetal acceleration and relative motion videos with extra practice problems.',
    },
  ],
};
