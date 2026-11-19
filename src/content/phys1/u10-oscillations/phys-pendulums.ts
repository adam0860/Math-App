import type { Lesson } from '../../types';

// Figures (generated, then pasted in).
const PENDULUM_SVG = '<svg viewBox="0 0 480 340" xmlns="http://www.w3.org/2000/svg"><line x1="150.0" y1="30.0" x2="230.0" y2="30.0" stroke="currentColor" stroke-width="3"/><line x1="154.0" y1="30.0" x2="147.0" y2="23.0" stroke="currentColor" class="s-gray" stroke-width="1"/><line x1="164.0" y1="30.0" x2="157.0" y2="23.0" stroke="currentColor" class="s-gray" stroke-width="1"/><line x1="174.0" y1="30.0" x2="167.0" y2="23.0" stroke="currentColor" class="s-gray" stroke-width="1"/><line x1="184.0" y1="30.0" x2="177.0" y2="23.0" stroke="currentColor" class="s-gray" stroke-width="1"/><line x1="194.0" y1="30.0" x2="187.0" y2="23.0" stroke="currentColor" class="s-gray" stroke-width="1"/><line x1="204.0" y1="30.0" x2="197.0" y2="23.0" stroke="currentColor" class="s-gray" stroke-width="1"/><line x1="214.0" y1="30.0" x2="207.0" y2="23.0" stroke="currentColor" class="s-gray" stroke-width="1"/><line x1="224.0" y1="30.0" x2="217.0" y2="23.0" stroke="currentColor" class="s-gray" stroke-width="1"/><line x1="190.0" y1="30.0" x2="190.0" y2="270.0" stroke="currentColor" class="s-gray" stroke-width="1.2" stroke-dasharray="5 4"/><line x1="190.0" y1="30.0" x2="282.1" y2="218.7" stroke="currentColor" stroke-width="2"/><path d="M190,85 A 55 55 0 0 0 214.1,79.4" fill="none" stroke="currentColor" class="s-purple" stroke-width="1.5"/><text x="203.0" y="106.0" font-size="14" text-anchor="middle" class="t-purple">θ</text><text x="246.0" y="120.4" font-size="14" text-anchor="start" font-style="italic">L</text><path d="M190,240 A 210 210 0 0 0 282.1,218.7" fill="none" stroke="currentColor" class="s-purple" stroke-width="1.2" stroke-dasharray="5 4"/><text x="182.0" y="246.0" font-size="12" text-anchor="end" class="t-purple">s = Lθ</text><circle cx="282.1" cy="218.7" r="13.0" fill="currentColor" fill-opacity="0.35" stroke="currentColor" class="f-blue s-blue" stroke-width="2"/><line x1="276.4" y1="207.1" x2="251.2" y2="155.4" stroke="currentColor" class="s-red" stroke-width="2.6"/><path d="M247.0,146.8 L256.8,154.3 L246.9,159.1 Z" fill="currentColor" class="f-red"/><text x="237.0" y="160.8" font-size="14" text-anchor="end" class="t-red" font-style="italic">T</text><line x1="282.1" y1="231.7" x2="282.1" y2="321.2" stroke="currentColor" class="s-red" stroke-width="2.6"/><path d="M282.1,330.7 L276.6,319.7 L287.6,319.7 Z" fill="currentColor" class="f-red"/><text x="290.1" y="328.7" font-size="14" text-anchor="start" class="t-red" font-style="italic">mg</text><line x1="282.1" y1="218.7" x2="244.7" y2="237.0" stroke="currentColor" class="s-orange" stroke-width="2.2"/><path d="M237.9,240.3 L244.0,232.3 L248.0,240.4 Z" fill="currentColor" class="f-orange"/><text x="235.9" y="260.3" font-size="12" text-anchor="end" class="t-orange">mg sin θ</text><line x1="282.1" y1="218.7" x2="322.9" y2="302.5" stroke="currentColor" class="s-orange" stroke-width="2.0" stroke-dasharray="5 4"/><path d="M326.2,309.2 L318.2,303.1 L326.3,299.2 Z" fill="currentColor" class="f-orange"/><text x="334.2" y="307.2" font-size="12" text-anchor="start" class="t-orange">mg cos θ</text><text x="30.0" y="325.0" font-size="12" text-anchor="start">tangential: m L θ″ = −mg sin θ</text></svg>';
const PHYSPEND_SVG = '<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg"><path d="M175.6,35.3 L205.6,19.4 L331.8,235.4 L284.1,260.8 Z" fill="currentColor" stroke="currentColor" class="s-teal f-teal" stroke-width="2" fill-opacity="0.18"/><line x1="200.0" y1="45.0" x2="200.0" y2="295.0" stroke="currentColor" class="s-gray" stroke-width="1.2" stroke-dasharray="5 4"/><circle cx="200.0" cy="45.0" r="5.0" fill="none" stroke="currentColor" stroke-width="2"/><text x="178.0" y="50.0" font-size="12" text-anchor="end">pivot</text><circle cx="261.0" cy="159.8" r="5.0" fill="currentColor"/><text x="271.0" y="151.8" font-size="12" text-anchor="start">CM</text><line x1="200.0" y1="45.0" x2="261.0" y2="159.8" stroke="currentColor" class="s-blue" stroke-width="1.8"/><text x="238.5" y="100.4" font-size="14" text-anchor="start" class="t-blue" font-style="italic">d</text><line x1="261.0" y1="159.8" x2="261.0" y2="230.3" stroke="currentColor" class="s-red" stroke-width="2.6"/><path d="M261.0,239.8 L255.5,228.8 L266.5,228.8 Z" fill="currentColor" class="f-red"/><text x="269.0" y="237.8" font-size="14" text-anchor="start" class="t-red" font-style="italic">mg</text><line x1="200.0" y1="159.8" x2="261.0" y2="159.8" stroke="currentColor" class="s-purple" stroke-width="1.5" stroke-dasharray="5 4"/><text x="230.5" y="175.8" font-size="12" text-anchor="middle" class="t-purple">d sin θ</text><path d="M200,95 A 50 50 0 0 0 223.5,89.1" fill="none" stroke="currentColor" class="s-purple" stroke-width="1.5"/><text x="210.0" y="115.0" font-size="14" text-anchor="middle" class="t-purple">θ</text><text x="470.0" y="40.0" font-size="13" text-anchor="end">τ = −mgd sin θ</text><text x="470.0" y="58.0" font-size="13" text-anchor="end">I θ″ = τ</text></svg>';

/** Exact large-amplitude period ratio T/T0 = 1/AGM(1, cos(theta0/2)), theta0 = `deg` degrees. */
const agmRatio = (deg: string, n = 5): string => {
  let a = '1';
  let b = `cos((${deg})*pi/360)`;
  for (let i = 0; i < n; i++) {
    const a2 = `((${a}) + (${b}))/2`;
    const b2 = `sqrt((${a})*(${b}))`;
    a = a2;
    b = b2;
  }
  return `1/(${a})`;
};

// Pendulum animation: amplitude d (degrees), length l (m), time s; small-angle solution.
const TH = '(d*pi/180)*cos(sqrt(9.8/l)*s)';
const THDOT = '(-(d*pi/180)*sqrt(9.8/l)*sin(sqrt(9.8/l)*s))';

export const lesson: Lesson = {
  id: 'phys-pendulums',
  title: 'Pendulums and Energy in Oscillations',
  summary: 'The simple pendulum\'s exact equation, the small-angle approximation from a Taylor series, $T = 2\\pi\\sqrt{L/g}$, energy sloshing between kinetic and potential in SHM, the physical pendulum, and how the period grows at large amplitudes.',
  minutes: 21,
  objectives: [
    'Derive the equation of motion $\\ddot{\\theta} = -(g/L)\\sin\\theta$ for a simple pendulum from a free-body diagram',
    'Justify the small-angle approximation $\\sin\\theta \\approx \\theta$ with a Taylor series, estimate its error, and obtain $T = 2\\pi\\sqrt{L/g}$',
    'Track kinetic and potential energy in SHM, show $E = \\tfrac12 kA^2$ is conserved, and use energy to find speeds at any position or angle',
    'Find the period of a physical pendulum from $T = 2\\pi\\sqrt{I/(mgd)}$',
    'Describe how and why the period of a pendulum grows at large amplitudes',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'The simple pendulum',
      blocks: [
        {
          type: 'p',
          text: 'A [[phys-simple-pendulum|simple pendulum]] is a small heavy bob of mass $m$ on a light string of length $L$. Pull it aside and release it. Choose the bob as the system. Two forces act: the tension $\\vec{T}$ along the string and the weight $m\\vec{g}$. Because the bob moves on a circle, use the angle $\\theta$ from the vertical (positive counterclockwise) as the coordinate, and split the forces into components along the path (tangential) and along the string (radial).',
        },
        {
          type: 'figure',
          svg: PENDULUM_SVG,
          alt: 'A pendulum of length L hanging from a ceiling, displaced by angle theta from the dashed vertical. Forces on the bob: tension T along the string toward the pivot, and weight mg straight down. The weight is split into mg sin theta along the path, pointing back toward the bottom, and mg cos theta along the string, pointing away from the pivot. The arc length from the bottom is s = L theta.',
          caption: 'Free-body diagram of the bob. The tension is perpendicular to the path, so only $mg\\sin\\theta$ acts along it, always pointing back toward the bottom.',
          maxWidth: 440,
        },
        {
          type: 'derivation',
          title: 'Equation of motion',
          steps: [
            { tex: 's = L\\theta \\implies a_{\\text{t}} = \\frac{d^2s}{dt^2} = L\\ddot{\\theta}', why: 'Arc length along a circle of radius $L$, with $\\theta$ in [[radian|radians]]. $L$ is constant, so the tangential acceleration is $L\\ddot{\\theta}$.' },
            { tex: '\\sum F_{\\text{t}} = -mg\\sin\\theta', why: 'Tension has no tangential component. The tangential part of the weight points toward smaller $\\theta$, hence the minus sign.' },
            { tex: 'mL\\ddot{\\theta} = -mg\\sin\\theta', why: 'Newton\'s second law along the path.' },
            { tex: '\\ddot{\\theta} = -\\frac{g}{L}\\sin\\theta', why: 'Divide by $mL$. The mass cancels: it appears in both the force and the inertia.' },
          ],
          result: 'The exact pendulum equation is $\\ddot{\\theta} = -(g/L)\\sin\\theta$. It is **not** the SHM equation, because the restoring term is $\\sin\\theta$, not $\\theta$.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Same result from torque',
          text: 'About the pivot, the weight has lever arm $L\\sin\\theta$, so its [[la-torque|torque]] is $\\tau = -mgL\\sin\\theta$, and a point mass at distance $L$ has [[phys-moment-of-inertia|moment of inertia]] $I = mL^2$. Then $\\tau = I\\ddot{\\theta}$ gives the same equation. That route is the one that generalizes to rigid bodies later in this lesson.',
        },
        {
          type: 'p',
          text: 'The radial direction matters too, even though it does not affect the period: the bob moves on a circle, so the net radial force must supply the centripetal acceleration, $T - mg\\cos\\theta = mv^2/L$. The tension is **not** simply $mg$, and it changes during the swing.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'mcq',
      prompt: 'A pendulum bob swings through the **lowest point** of its arc, moving to the right. What is the direction of the net force on the bob at that instant?',
      options: [
        { text: 'Zero: the bottom is the equilibrium position, so the forces balance', why: 'The bottom is where the bob would rest if it were not moving. A moving bob is on a circle, and circular motion needs a net inward force: at the bottom, $T - mg = mv^2/L > 0$.' },
        { text: 'Straight up, toward the pivot', correct: true, why: 'Tangentially $mg\\sin 0 = 0$, so the net force is purely radial: the tension exceeds the weight by $mv^2/L$ and points at the pivot, providing the centripetal acceleration.' },
        { text: 'To the right, in the direction of motion', why: 'At the bottom the tangential force $-mg\\sin\\theta$ is zero, so nothing pushes it along. It keeps moving by inertia; no force is needed to keep it moving.' },
        { text: 'Straight down, because gravity is the only force that matters there', why: 'The string pulls up with a tension **larger** than $mg$ at the bottom, so the net force is upward.' },
      ],
      explanation: 'At the bottom the bob is momentarily moving horizontally on a circle of radius $L$. The tangential force is zero (it is passing through equilibrium at maximum speed), but the radial net force is $T - mg = mv^2/L$, pointing up toward the pivot. That is why a rope swing feels heaviest at the bottom.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'The small-angle approximation',
      blocks: [
        {
          type: 'p',
          text: 'The equation $\\ddot{\\theta} = -(g/L)\\sin\\theta$ has no solution in elementary functions. But for small angles, $\\sin\\theta$ is very close to $\\theta$ itself (in radians). The cleanest way to see how close is the [[taylor-series|Taylor (Maclaurin) series]] of sine:',
        },
        {
          type: 'math',
          tex: '\\sin\\theta = \\theta - \\frac{\\theta^3}{3!} + \\frac{\\theta^5}{5!} - \\cdots',
          caption: 'Valid for every $\\theta$ in radians. For small $\\theta$ each term is much smaller than the one before.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the series starts like that (no Calculus II needed)',
          text: 'Match $\\sin\\theta$ near $0$ with a polynomial whose derivatives at $0$ agree with those of sine. The derivatives of $\\sin$ at $0$ cycle through $0, 1, 0, -1, 0, 1, \\ldots$: $\\sin 0 = 0$, $\\cos 0 = 1$, $-\\sin 0 = 0$, $-\\cos 0 = -1$. So the best line is the tangent line $y = \\theta$ (slope $1$), and the first correction is the cubic term $-\\theta^3/3!$. Because the series alternates with shrinking terms, the error of stopping after $\\theta$ is less than the next term, $\\theta^3/6$. The relative error of $\\sin\\theta \\approx \\theta$ is therefore about $\\theta^2/6$.',
        },
        {
          type: 'graph',
          x: [0, 1.6],
          y: [0, 1.7],
          xStep: 0.2,
          yStep: 0.2,
          height: 280,
          functions: [
            { expr: 'sin(x)', color: 'blue', label: '$\\sin\\theta$' },
            { expr: 'x', color: 'red', dashed: true, label: '$\\theta$ (small-angle)' },
            { expr: 'x - x^3/6', color: 'green', dashed: true, label: '$\\theta - \\theta^3/6$' },
          ],
          vlines: [{ x: 'd*pi/180', color: 'gray' }],
          points: [
            { x: 'd*pi/180', y: 'sin(d*pi/180)', color: 'blue' },
            { x: 'd*pi/180', y: 'd*pi/180', color: 'red' },
          ],
          sliders: [{ name: 'd', min: 1, max: 90, step: 1, value: 20, label: 'angle (degrees)' }],
          readouts: [
            { label: '$\\theta$ (rad):', expr: 'd*pi/180', digits: 4 },
            { label: '$\\sin\\theta$:', expr: 'sin(d*pi/180)', digits: 4 },
            { label: 'error of $\\sin\\theta \\approx \\theta$ (%):', expr: '100*(d*pi/180 - sin(d*pi/180))/sin(d*pi/180)', digits: 2 },
          ],
          caption: 'Horizontal axis in radians. The red line hugs the sine curve near zero: the error is $0.5\\%$ at $10^\\circ$, $2\\%$ at $20^\\circ$ and $4.7\\%$ at $30^\\circ$. The green cubic stays close much longer.',
        },
        {
          type: 'p',
          text: 'With $\\sin\\theta \\approx \\theta$ (the [[small-angle-approximation]]), the pendulum equation becomes $\\ddot{\\theta} = -(g/L)\\theta$: exactly simple harmonic motion, with $\\omega^2 = g/L$.',
        },
        {
          type: 'theorem',
          name: 'Simple pendulum, small oscillations',
          tex: '\\theta(t) = \\theta_0\\cos(\\omega t + \\phi), \\qquad \\omega = \\sqrt{\\frac{g}{L}}, \\qquad T = 2\\pi\\sqrt{\\frac{L}{g}}',
          text: 'The period depends only on the length and on $g$: not on the mass, and (for small swings) not on the amplitude.',
        },
        {
          type: 'derivation',
          title: 'A one-meter pendulum, and the "seconds pendulum"',
          steps: [
            { tex: 'T = 2\\pi\\sqrt{\\frac{1.00\\,\\text{m}}{9.80\\,\\text{m/s}^2}} = 2.01\\,\\text{s}', why: 'Substitute $L = 1.00\\,\\text{m}$. Units: $\\sqrt{\\text{m}/(\\text{m/s}^2)} = \\text{s}$.' },
            { tex: 'T = 2.00\\,\\text{s} \\implies L = \\frac{gT^2}{4\\pi^2} = \\frac{9.80(2.00)^2}{4\\pi^2} = 0.993\\,\\text{m}', why: 'Square both sides and solve for $L$. A pendulum that ticks once per second (each swing one second) is just under a meter long.' },
          ],
          result: 'Turned around, $g = 4\\pi^2L/T^2$: timing a pendulum is a classic way to measure $g$ to better than 0.1%.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Radians only',
          text: '$\\sin\\theta \\approx \\theta$ is true only with $\\theta$ in radians. In degrees, $\\sin 10^\\circ = 0.174$, not $10$. The same goes for $s = L\\theta$ and for any calculator or `std::sin` call: convert with $\\theta_{\\text{rad}} = \\theta_{\\text{deg}}\\cdot\\pi/180$ first.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'numeric',
      prompt: 'You want a pendulum with a small-angle period of $1.50\\,\\text{s}$. How long must it be? Use $g = 9.80\\,\\text{m/s}^2$ and give $L$ in meters to 3 significant figures.',
      hint: 'Solve $T = 2\\pi\\sqrt{L/g}$ for $L$: square first.',
      label: '$L =$',
      unit: 'm',
      answer: '9.8*1.5^2/(4pi^2)',
      answerTex: '0.559',
      tolerance: 0.003,
      explanation: 'Squaring, $T^2 = 4\\pi^2 L/g$, so $L = \\dfrac{gT^2}{4\\pi^2} = \\dfrac{(9.80)(1.50)^2}{4\\pi^2} = \\dfrac{22.05}{39.48} = 0.559\\,\\text{m}$. Dividing by $2\\pi$ instead of $(2\\pi)^2$ gives $3.51\\,\\text{m}$. Check: a shorter period needs a shorter pendulum than the $0.993\\,\\text{m}$ seconds pendulum, and $0.559\\,\\text{m}$ is.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Watching a pendulum swing',
      blocks: [
        {
          type: 'p',
          text: 'Here is the small-angle solution $\\theta(t) = \\theta_0\\cos(\\sqrt{g/L}\\,t)$ in motion, with the bob released from rest at $\\theta_0$. The green arrow is the bob\'s velocity; the red one is the restoring force per unit mass, $-g\\sin\\theta$, along the path.',
        },
        {
          type: 'graph',
          x: [-1.3, 1.3],
          y: [-2.3, 0.2],
          equal: true,
          parametric: [{ x: 'l*sin(t)', y: '-l*cos(t)', t: ['-d*pi/180', 'd*pi/180'], color: 'gray', dashed: true }],
          segments: [
            { from: [-0.3, 0], to: [0.3, 0], color: 'gray' },
            { from: [0, 0], to: [0, '-l'], color: 'gray', dashed: true },
            { from: [0, 0], to: [`l*sin(${TH})`, `-l*cos(${TH})`], color: 'blue' },
            {
              from: [`l*sin(${TH})`, `-l*cos(${TH})`],
              to: [`l*sin(${TH}) + 0.25*l*${THDOT}*cos(${TH})`, `-l*cos(${TH}) + 0.25*l*${THDOT}*sin(${TH})`],
              arrow: true,
              color: 'green',
              label: 'v',
            },
            {
              from: [`l*sin(${TH})`, `-l*cos(${TH})`],
              to: [`l*sin(${TH}) - 0.12*9.8*sin(${TH})*cos(${TH})`, `-l*cos(${TH}) - 0.12*9.8*sin(${TH})*sin(${TH})`],
              arrow: true,
              color: 'red',
            },
          ],
          points: [{ x: `l*sin(${TH})`, y: `-l*cos(${TH})`, color: 'blue', label: 'bob' }],
          sliders: [
            { name: 'd', min: 2, max: 30, step: 1, value: 20, label: 'amplitude $\\theta_0$ (degrees)' },
            { name: 'l', min: 0.25, max: 2, step: 0.05, value: 1.5, label: 'length $L$ (m)' },
            { name: 's', min: 0, max: 8, step: 0.01, value: 0, label: 'time $t$ (s)', play: true, speed: 2 },
          ],
          readouts: [
            { label: 'period $T$ (s):', expr: '2pi*sqrt(l/9.8)', digits: 3 },
            { label: 'angle (degrees):', expr: `(${TH})*180/pi`, digits: 1 },
            { label: 'speed (m/s):', expr: `abs(l*${THDOT})`, digits: 3 },
          ],
          caption: 'Press ▶ (the animation runs at double speed: 8 seconds of motion in 4). The bob is fastest at the bottom, where the restoring force vanishes, and stops at the ends, where the restoring force is largest. Change the amplitude and the period readout does not move; quadruple the length and the period doubles.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: '"A heavier bob swings faster"',
          text: 'It is tempting to think more weight means a stronger pull and quicker swings. But the mass cancelled in $mL\\ddot{\\theta} = -mg\\sin\\theta$, for the same reason that heavy and light objects fall together: the force and the inertia both scale with $m$. Galileo noticed this, and it is the basis of pendulum clocks. (Air drag, which does not scale with $m$, makes very light bobs damp out faster, but not swing faster.)',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Pendulums in a game engine',
          text: 'A grappling hook, a chandelier or a rope swing is usually not simulated with $\\theta$ at all. The engine moves the bob as a free particle under gravity and then enforces a **distance constraint** $|\\vec{r}_{\\text{bob}} - \\vec{r}_{\\text{pivot}}| = L$ each step, which plays the role of the tension. The physics is the same, and you get the large-angle behavior and the slack-rope case for free.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'truefalse',
      prompt: 'Two pendulums have the same length, but one bob is made of steel and the other of wood with one-eighth the mass. Ignoring air resistance, the steel pendulum has the shorter period.',
      answer: false,
      explanation: 'False. In $mL\\ddot{\\theta} = -mg\\sin\\theta$ the mass cancels, leaving $T = 2\\pi\\sqrt{L/g}$, which depends only on length and gravity. The heavier bob does feel a larger gravitational force, but it has proportionally more inertia, so its angular acceleration at every angle is the same. This is the pendulum version of "heavier objects do not fall faster".',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'Energy in simple harmonic motion',
      blocks: [
        {
          type: 'p',
          text: 'For the mass on a spring, the spring force is conservative with [[phys-elastic-potential-energy|potential energy]] $U = \\tfrac12 kx^2$ (the [[work]] you do stretching it). So the [[phys-mechanical-energy|mechanical energy]] should be constant. You can prove it straight from the equation of motion:',
        },
        {
          type: 'derivation',
          title: 'Energy is conserved in SHM',
          steps: [
            { tex: 'E = \\tfrac12 mv^2 + \\tfrac12 kx^2', why: 'Kinetic plus spring potential energy.' },
            { tex: '\\frac{dE}{dt} = mv\\,\\dot{v} + kx\\,\\dot{x} = v\\,(m\\ddot{x} + kx)', why: 'Chain rule on each term; $\\dot{x} = v$ and $\\dot{v} = \\ddot{x}$, then factor out $v$.' },
            { tex: '= v \\cdot 0 = 0', why: 'Newton\'s second law says $m\\ddot{x} + kx = 0$.' },
            { tex: 'E = \\tfrac12 kA^2', why: 'Evaluate at a turning point, where $v = 0$ and $x = \\pm A$.' },
          ],
          result: '$\\tfrac12 mv^2 + \\tfrac12 kx^2 = \\tfrac12 kA^2$ throughout the motion. Solving for $v$ gives $v = \\pm\\omega\\sqrt{A^2 - x^2}$ again, and the phase-space ellipse is exactly this constant-energy curve.',
        },
        {
          type: 'graph',
          x: [-1.6, 1.6],
          y: [0, 10],
          xStep: 0.5,
          yStep: 1,
          height: 290,
          functions: [{ expr: '4x^2', color: 'blue', label: '$U(x) = \\tfrac12 kx^2$' }],
          hlines: [{ y: '4a^2', color: 'red', label: 'E' }],
          segments: [
            { from: ['a*cos(2s)', 0], to: ['a*cos(2s)', '4(a*cos(2s))^2'], color: 'blue' },
            { from: ['a*cos(2s)', '4(a*cos(2s))^2'], to: ['a*cos(2s)', '4a^2'], color: 'green' },
          ],
          points: [{ x: 'a*cos(2s)', y: '4(a*cos(2s))^2', color: 'purple', label: 'block' }],
          vlines: [
            { x: '-a', color: 'gray', label: '−A' },
            { x: 'a', color: 'gray', label: '+A' },
          ],
          sliders: [
            { name: 'a', min: 0.3, max: 1.5, step: 0.05, value: 1.2, label: 'amplitude $A$ (m)' },
            { name: 's', min: 0, max: 6.28, step: 0.01, value: 0, label: 'time $t$ (s)', play: true, speed: 1.2 },
          ],
          readouts: [
            { label: '$U$ (J):', expr: '4(a*cos(2s))^2', digits: 3 },
            { label: '$K$ (J):', expr: '4a^2 - 4(a*cos(2s))^2', digits: 3 },
            { label: '$E$ (J):', expr: '4a^2', digits: 3 },
          ],
          caption: 'A $2.0\\,\\text{kg}$ block on a spring with $k = 8.0\\,\\text{N/m}$ ($\\omega = 2\\,\\text{rad/s}$). The blue bar under the block is $U$; the green bar from the parabola up to the red line is $K$. Energy sloshes between the two twice per period while their sum stays fixed. The block can never go beyond $\\pm A$, where the parabola meets the energy line and $K$ would be negative.',
        },
        {
          type: 'p',
          text: 'Because $K$ and $U$ each go through two maxima per cycle, they oscillate at $2\\omega$, and over a full cycle each averages exactly $E/2$ (the averages of $\\sin^2$ and $\\cos^2$ are both $\\tfrac12$).',
        },
        {
          type: 'heading',
          text: 'Energy for the pendulum',
        },
        {
          type: 'p',
          text: 'Measure the bob\'s height from the bottom of its arc: $h = L - L\\cos\\theta = L(1 - \\cos\\theta)$. Then $U = mgL(1 - \\cos\\theta)$, which for small angles is $\\approx \\tfrac12 mgL\\theta^2$ (using $\\cos\\theta \\approx 1 - \\theta^2/2$): a spring-like parabola in $\\theta$. Energy conservation works at **any** amplitude, not just small ones, because it never needed the approximation.',
        },
        {
          type: 'derivation',
          title: 'Speed and tension at the bottom: $L = 1.20\\,\\text{m}$, released from $30.0^\\circ$',
          steps: [
            { tex: 'mgL(1 - \\cos\\theta_0) = \\tfrac12 mv_{\\text{bottom}}^2', why: 'Energy conservation between release (at rest) and the bottom ($h = 0$). Tension does no work: it is always perpendicular to the motion.' },
            { tex: 'v_{\\text{bottom}} = \\sqrt{2gL(1 - \\cos\\theta_0)} = \\sqrt{2(9.80)(1.20)(1 - \\cos 30.0^\\circ)}', why: 'Solve for $v$; $m$ cancels.' },
            { tex: '= \\sqrt{(23.52)(0.1340)} = 1.78\\,\\text{m/s}', why: '$\\cos 30^\\circ = 0.8660$. The height drop is only $16\\,\\text{cm}$.' },
            { tex: 'T_{\\text{bottom}} = mg + \\frac{mv^2}{L} = mg\\,[1 + 2(1 - \\cos\\theta_0)] = 1.27\\,mg', why: 'Radial Newton\'s law at the bottom, $T - mg = mv^2/L$, with $v^2 = 2gL(1 - \\cos\\theta_0)$.' },
          ],
          result: 'The bob passes the bottom at $1.78\\,\\text{m/s}$, and the string tension there is 27% more than the bob\'s weight.',
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'numeric',
      prompt: 'A pendulum of length $2.00\\,\\text{m}$ is released from rest at $40.0^\\circ$ from the vertical. Use energy conservation (no small-angle approximation) and $g = 9.80\\,\\text{m/s}^2$ to find the bob\'s speed at the lowest point, in m/s to 3 significant figures.',
      hint: 'The bob drops a height $L(1 - \\cos\\theta_0)$.',
      label: '$v =$',
      unit: 'm/s',
      answer: 'sqrt(2*9.8*2*(1 - cos(40pi/180)))',
      answerTex: '3.03',
      tolerance: 0.015,
      explanation: '$h = L(1 - \\cos 40.0^\\circ) = 2.00(1 - 0.7660) = 0.468\\,\\text{m}$, so $v = \\sqrt{2gh} = \\sqrt{2(9.80)(0.468)} = 3.03\\,\\text{m/s}$. Using $h = L\\cos\\theta_0$ (the height **below the pivot** instead of the drop) gives $5.48\\,\\text{m/s}$; the small-angle shortcut $v = \\theta_0\\sqrt{gL}$ gives $3.09\\,\\text{m/s}$, already 2% off at $40^\\circ$. Energy needs no approximation.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'concept',
      title: 'The physical pendulum',
      blocks: [
        {
          type: 'p',
          text: 'Real swinging things are rigid bodies: a leg, a hanging sign, a sword in a character\'s hand, a ragdoll limb. A [[phys-physical-pendulum|physical pendulum]] is any rigid body pivoting about a fixed axis that does not pass through its center of mass. Let $d$ be the distance from the pivot to the [[calc2-center-of-mass|center of mass]] (CM) and $I$ the moment of inertia about the pivot.',
        },
        {
          type: 'figure',
          svg: PHYSPEND_SVG,
          alt: 'A tilted rigid bar hanging from a pivot near its top end. The center of mass CM is a distance d from the pivot along the bar. The weight mg acts straight down at the CM. A dashed horizontal line from the vertical through the pivot to the CM shows the lever arm d sin theta.',
          caption: 'Gravity acts at the center of mass. Its lever arm about the pivot is $d\\sin\\theta$, so its torque is $-mgd\\sin\\theta$.',
          maxWidth: 420,
        },
        {
          type: 'derivation',
          title: 'Period of a physical pendulum',
          steps: [
            { tex: '\\tau = -mgd\\sin\\theta', why: 'The whole weight acts at the CM. Lever arm $d\\sin\\theta$; the minus sign because the torque turns the body back toward $\\theta = 0$.' },
            { tex: 'I\\ddot{\\theta} = -mgd\\sin\\theta', why: 'Newton\'s second law for rotation about the fixed pivot, $\\sum\\tau = I\\alpha$.' },
            { tex: '\\ddot{\\theta} \\approx -\\frac{mgd}{I}\\,\\theta', why: 'Small angles: $\\sin\\theta \\approx \\theta$. SHM again.' },
            { tex: '\\omega = \\sqrt{\\frac{mgd}{I}}, \\qquad T = 2\\pi\\sqrt{\\frac{I}{mgd}}', why: 'Read off $\\omega^2$. Check: a point mass ($I = md^2$) gives back $T = 2\\pi\\sqrt{d/g}$, the simple pendulum.' },
          ],
          result: 'A physical pendulum behaves like a simple pendulum of **equivalent length** $L_{\\text{eq}} = I/(md)$.',
        },
        {
          type: 'derivation',
          title: 'A uniform rod of length $L = 1.00\\,\\text{m}$ pivoted at one end',
          steps: [
            { tex: 'I = \\tfrac13 mL^2, \\qquad d = \\tfrac12 L', why: 'Moment of inertia of a thin rod about its end (from the rotation unit); the CM is at the middle.' },
            { tex: 'T = 2\\pi\\sqrt{\\frac{\\tfrac13 mL^2}{mg\\cdot\\tfrac12 L}} = 2\\pi\\sqrt{\\frac{2L}{3g}}', why: 'Substitute; $m$ and one $L$ cancel.' },
            { tex: '= 2\\pi\\sqrt{\\frac{2(1.00)}{3(9.80)}} = 1.64\\,\\text{s}', why: 'Compare with $2.01\\,\\text{s}$ for a $1.00\\,\\text{m}$ simple pendulum.' },
          ],
          result: 'The rod acts like a simple pendulum of length $\\tfrac23 L$. Much of its mass is close to the pivot, where it costs little torque to swing, so it is quicker.',
        },
        {
          type: 'callout',
          variant: 'analogy',
          title: 'Why giants walk slowly',
          text: 'A relaxed walking leg swings roughly like a physical pendulum, so a comfortable stride period scales as $\\sqrt{L/g}$. Double the leg length and the natural step takes about $\\sqrt{2} \\approx 1.4$ times longer. Animators use this when scaling walk cycles: a giant\'s footsteps should be slow and heavy, a small creature\'s quick, or the motion reads as wrong even to players who could not say why.',
        },
      ],
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'expr',
      prompt: 'A thin hoop of radius $R$ hangs on a horizontal nail through its rim and swings in its own plane. Its moment of inertia about the nail is $I = 2mR^2$, and its center of mass is at its center. Find its small-angle period $T$ in terms of $R$ and $g$.',
      hint: 'Use $T = 2\\pi\\sqrt{I/(mgd)}$. What is $d$?',
      label: '$T =$',
      answer: '2pi*sqrt(2R/g)',
      answerTex: '2\\pi\\sqrt{\\dfrac{2R}{g}}',
      variables: ['R', 'g'],
      domain: [1, 10],
      explanation: 'The CM is the hoop\'s center, a distance $d = R$ below the nail. Then $T = 2\\pi\\sqrt{\\dfrac{2mR^2}{mgR}} = 2\\pi\\sqrt{\\dfrac{2R}{g}}$. The hoop swings exactly like a simple pendulum of length $2R$, its own diameter. A hoop of radius $0.50\\,\\text{m}$ on a nail has the same period as a one-meter pendulum, about $2.0\\,\\text{s}$.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'Large amplitudes: the period grows',
      blocks: [
        {
          type: 'p',
          text: 'Since $\\sin\\theta < \\theta$ for $\\theta > 0$, the true restoring force at large angles is **weaker** than the small-angle version. A weaker pull means the bob takes longer to come back, so the true period is longer than $T_0 = 2\\pi\\sqrt{L/g}$, and increasingly so as the amplitude grows. Near $180^\\circ$ (released almost upside down), the bob lingers near the top and the period grows without bound.',
        },
        {
          type: 'p',
          text: 'Energy conservation gives the exact period as an integral (an elliptic integral) that has a neat series and an even neater fast algorithm:',
        },
        {
          type: 'math',
          tex: 'T = T_0\\left(1 + \\frac{\\theta_0^2}{16} + \\frac{11\\,\\theta_0^4}{3072} + \\cdots\\right) = \\frac{T_0}{\\operatorname{AGM}\\big(1, \\cos(\\theta_0/2)\\big)}',
          caption: 'AGM is the arithmetic-geometric mean: repeatedly replace $(a, b)$ by their average $\\frac{a + b}{2}$ and their geometric mean $\\sqrt{ab}$; both converge, extremely quickly, to the same number.',
        },
        {
          type: 'graph',
          x: [0, 180],
          y: [0.9, 3.4],
          xStep: 30,
          yStep: 0.25,
          height: 290,
          functions: [
            { expr: agmRatio('x'), domain: [0, 178], color: 'blue', label: 'exact $T/T_0$' },
            { expr: '1 + (x*pi/180)^2/16', color: 'orange', dashed: true, label: '$1 + \\theta_0^2/16$' },
          ],
          hlines: [{ y: 1, color: 'gray', label: 'small-angle T₀' }],
          points: [{ x: 'd', y: agmRatio('d'), color: 'red' }],
          sliders: [{ name: 'd', min: 1, max: 175, step: 1, value: 60, label: 'amplitude $\\theta_0$ (degrees)' }],
          readouts: [
            { label: 'exact $T/T_0$:', expr: agmRatio('d'), digits: 4 },
            { label: 'period of a $1.00\\,\\text{m}$ pendulum (s):', expr: `2.0071*${agmRatio('d')}`, digits: 3 },
          ],
          caption: 'Horizontal axis: amplitude in degrees. The period is within 1% of $T_0$ up to about $22^\\circ$, but is 7% longer at $60^\\circ$, 18% at $90^\\circ$, and more than doubles near $170^\\circ$. The first correction term (orange) is good to about $60^\\circ$.',
        },
        {
          type: 'p',
          text: 'You can confirm the exact curve without trusting any formula: integrate the full equation $\\ddot{\\theta} = -(g/L)\\sin\\theta$ numerically and time the swing. The program releases the bob from rest at several amplitudes, measures the time to reach the bottom (a quarter period), and compares with the AGM formula.',
        },
        {
          type: 'code',
          title: 'pendulum.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdio>

constexpr double PI = 3.14159265358979323846;
constexpr double g = 9.80, L = 1.00;          // m/s^2, m

// Time for the full nonlinear pendulum to swing from theta0 (at rest) down to theta = 0.
double quarterPeriod(double theta0, double dt) {
    double th = theta0, om = 0.0, t = 0.0;
    while (true) {
        om += -(g / L) * std::sin(th) * dt;        // semi-implicit Euler
        double prev = th;
        th += om * dt;
        t += dt;
        if (th <= 0.0) return t - dt * th / (th - prev);  // interpolate the crossing
    }
}

// Exact period ratio T/T0 = 1 / AGM(1, cos(theta0/2)) (arithmetic-geometric mean).
double exactRatio(double theta0) {
    double a = 1.0, b = std::cos(theta0 / 2.0);
    for (int i = 0; i < 8; ++i) {
        double an = 0.5 * (a + b);
        b = std::sqrt(a * b);
        a = an;
    }
    return 1.0 / a;
}

int main() {
    const double T0 = 2.0 * PI * std::sqrt(L / g);   // small-angle period
    std::printf("T0 = %.4f s\\n", T0);
    std::printf("amplitude  T (sim)   T/T0 sim  T/T0 exact  1 + th^2/16\\n");
    const double amplitudes[] = {5.0, 20.0, 45.0, 90.0, 135.0, 170.0};  // degrees
    for (double deg : amplitudes) {
        double th0 = deg * PI / 180.0;               // degrees -> radians!
        double T = 4.0 * quarterPeriod(th0, 1.0e-5);
        std::printf("%6.0f deg  %.4f s  %.4f    %.4f      %.4f\\n",
                    deg, T, T / T0, exactRatio(th0), 1.0 + th0 * th0 / 16.0);
    }
}`,
          output: `T0 = 2.0071 s
amplitude  T (sim)   T/T0 sim  T/T0 exact  1 + th^2/16
     5 deg  2.0080 s  1.0005    1.0005      1.0005
    20 deg  2.0225 s  1.0077    1.0077      1.0076
    45 deg  2.0873 s  1.0400    1.0400      1.0386
    90 deg  2.3690 s  1.1803    1.1803      1.1542
   135 deg  3.0667 s  1.5279    1.5279      1.3470
   170 deg  4.8960 s  2.4394    2.4394      1.5502`,
          annotations: [
            { lines: '8-17', text: 'Step the **exact** equation with semi-implicit Euler ($10^{-5}\\,\\text{s}$ steps) until $\\theta$ crosses zero, then interpolate within the last step. By symmetry the full period is four times this.' },
            { lines: '20-28', text: 'The AGM converges quadratically: the number of correct digits roughly doubles every round, so 8 rounds is far more than enough.' },
            { lines: '36', text: 'The classic bug: `std::sin` expects radians.' },
          ],
        },
        {
          type: 'callout',
          variant: 'history',
          title: 'Clocks, and Huygens\' fix',
          text: 'Because the period depends slightly on amplitude, a pendulum clock gains or loses time as its swing changes: a clock regulated for a $5^\\circ$ swing loses about two minutes a day if the swing grows to $10^\\circ$. Precision clocks therefore use small, carefully maintained amplitudes. In 1673 Christiaan Huygens showed that a bob constrained to a cycloid instead of a circle has a period exactly independent of amplitude, and built clocks with cycloidal "cheeks" beside the suspension.',
        },
      ],
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'mcq',
      prompt: 'A grandfather clock is adjusted to keep perfect time when its pendulum swings $4^\\circ$ each way. A heavy-handed owner winds it so the pendulum now swings $15^\\circ$ each way. What happens?',
      options: [
        { text: 'The clock runs slow: the larger swing takes longer', correct: true, why: 'Beyond the small-angle regime, $T \\approx T_0(1 + \\theta_0^2/16)$ grows with amplitude: at $15^\\circ$ each swing is about 0.4% longer than at $4^\\circ$, which loses about 6 minutes a day.' },
        { text: 'The clock runs fast: the bob moves faster on a larger swing', why: 'It does move faster, but it also has farther to go. For an ideal SHM oscillator these effects cancel exactly; for a real pendulum the weaker restoring force ($\\sin\\theta < \\theta$) makes the trip take slightly **longer**.' },
        { text: 'Nothing: a pendulum\'s period is independent of its amplitude', why: 'That is only the small-angle approximation. The exact period grows with amplitude, slightly at first and then dramatically.' },
        { text: 'The clock runs slow because the bob effectively has more mass on a larger swing', why: 'Mass does not enter the period at all. The change comes from the $\\sin\\theta$ in the equation of motion.' },
      ],
      explanation: 'Compare the two amplitudes using $T/T_0 \\approx 1 + \\theta_0^2/16$: at $4^\\circ$ ($0.070\\,\\text{rad}$) the correction is $0.03\\%$; at $15^\\circ$ ($0.262\\,\\text{rad}$) it is $0.43\\%$. Each tick takes about $0.40\\%$ longer, and $0.40\\%$ of a day ($86\\,400\\,\\text{s}$) is about 6 minutes lost per day.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'error',
      prompt: 'A student finds the speed at the bottom of the swing for a $1.50\\,\\text{m}$ pendulum released from rest at $25.0^\\circ$ ($g = 9.80\\,\\text{m/s}^2$). Tap the first line with a mistake.',
      lines: [
        'Energy is conserved: tension is perpendicular to the motion, so it does no work.',
        '$mgh = \\tfrac12 mv^2$, so $v = \\sqrt{2gh}$.',
        '$h = L\\cos\\theta_0 = (1.50)\\cos 25.0^\\circ = 1.36\\,\\text{m}$',
        '$v = \\sqrt{2(9.80)(1.36)} = 5.16\\,\\text{m/s}$',
      ],
      errorLines: [3],
      explanation: 'Line 3 uses $L\\cos\\theta_0$, which is how far the released bob sits **below the pivot**. The height it drops to the bottom is $h = L - L\\cos\\theta_0 = L(1 - \\cos\\theta_0) = 1.50(1 - 0.9063) = 0.141\\,\\text{m}$. Then $v = \\sqrt{2(9.80)(0.141)} = 1.66\\,\\text{m/s}$. A limiting-case check exposes the error: released from $\\theta_0 = 0$, the bob should not move, but $L\\cos 0 = L$ would give it a large speed.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'order',
      prompt: 'Put the steps of the derivation of the small-angle pendulum period in order.',
      lines: [
        'Draw the free-body diagram: tension along the string, weight straight down.',
        'Take tangential components: $mL\\ddot{\\theta} = -mg\\sin\\theta$.',
        'Divide by $mL$: $\\ddot{\\theta} = -(g/L)\\sin\\theta$.',
        'Use $\\sin\\theta \\approx \\theta$ (radians) to get $\\ddot{\\theta} = -(g/L)\\theta$.',
        'Match with $\\ddot{x} = -\\omega^2 x$: $\\omega = \\sqrt{g/L}$, so $T = 2\\pi\\sqrt{L/g}$.',
      ],
      explanation: 'Diagram, then Newton\'s law in components, then simplify, and only then approximate: the approximation is applied to the exact equation, which is why you can later tell how good it is. The final step recognizes the SHM equation and reads off $\\omega$.',
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'fill',
      prompt: 'Complete the statements about a mass on a spring with amplitude $A$.',
      template: 'The total mechanical energy is ___. At $x = 0$ the energy is all ___, and at $x = \\pm A$ it is all ___.',
      blanks: [{ answers: ['$\\tfrac12 kA^2$'] }, { answers: ['kinetic'] }, { answers: ['potential'] }],
      wordBank: ['$\\tfrac12 kA^2$', '$kA^2$', '$\\tfrac12 mA^2$', 'kinetic', 'potential', 'zero'],
      explanation: 'At a turning point $v = 0$ and $x = \\pm A$, so $E = \\tfrac12 kA^2$, all potential. At equilibrium $U = \\tfrac12 k(0)^2 = 0$, so $E$ is all kinetic: $\\tfrac12 mv_{\\max}^2 = \\tfrac12 kA^2$, which gives $v_{\\max} = A\\sqrt{k/m} = A\\omega$.',
    },
  ],
  takeaways: [
    'The exact pendulum equation is $\\ddot{\\theta} = -(g/L)\\sin\\theta$; the tension does not appear in the tangential equation, and the mass cancels.',
    'The Taylor series $\\sin\\theta = \\theta - \\theta^3/6 + \\cdots$ justifies $\\sin\\theta \\approx \\theta$ (radians) with relative error about $\\theta^2/6$; then $T = 2\\pi\\sqrt{L/g}$.',
    'In SHM, $E = \\tfrac12 mv^2 + \\tfrac12 kx^2 = \\tfrac12 kA^2$ is constant; $K$ and $U$ trade back and forth at $2\\omega$. For a pendulum, $U = mgL(1 - \\cos\\theta)$ works at any amplitude.',
    'A physical pendulum has $T = 2\\pi\\sqrt{I/(mgd)}$, like a simple pendulum of length $I/(md)$; a rod pivoted at its end acts like one of length $\\tfrac23 L$.',
    'The true period grows with amplitude: $T \\approx T_0(1 + \\theta_0^2/16)$ for moderate angles, about 18% longer at $90^\\circ$, and unbounded as $\\theta_0 \\to 180^\\circ$.',
  ],
  reading: [
    {
      title: 'OpenStax University Physics Volume 1, Chapter 15: Oscillations',
      url: 'https://openstax.org/details/books/university-physics-volume-1',
      source: 'openstax',
      note: 'Sections 15.2 and 15.4 cover energy in SHM and simple, physical and torsional pendulums.',
    },
    {
      title: 'Pendulum (mechanics)',
      url: 'https://en.wikipedia.org/wiki/Pendulum_(mechanics)',
      source: 'wikipedia',
      note: 'The full treatment of the nonlinear pendulum, including the elliptic-integral period and its series.',
    },
    {
      title: 'Khan Academy: Physics',
      url: 'https://www.khanacademy.org/science/physics',
      source: 'khan',
      note: 'The harmonic motion videos walk through pendulum and spring energy diagrams step by step.',
    },
    {
      title: 'PhET Interactive Simulations',
      url: 'https://phet.colorado.edu/',
      source: 'other',
      note: 'Open the "Pendulum Lab" simulation to time pendulums of different lengths, masses and amplitudes.',
    },
  ],
};
