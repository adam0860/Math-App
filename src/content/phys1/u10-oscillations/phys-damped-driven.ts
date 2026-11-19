import type { Lesson } from '../../types';

// Figures (generated, then pasted in).
const SPRINGDAMPER_SVG = '<svg viewBox="0 0 480 210" xmlns="http://www.w3.org/2000/svg"><line x1="40.0" y1="40.0" x2="40.0" y2="170.0" stroke="currentColor" stroke-width="2.5"/><line x1="40.0" y1="44.0" x2="32.0" y2="52.0" stroke="currentColor" class="s-gray" stroke-width="1"/><line x1="40.0" y1="54.0" x2="32.0" y2="62.0" stroke="currentColor" class="s-gray" stroke-width="1"/><line x1="40.0" y1="64.0" x2="32.0" y2="72.0" stroke="currentColor" class="s-gray" stroke-width="1"/><line x1="40.0" y1="74.0" x2="32.0" y2="82.0" stroke="currentColor" class="s-gray" stroke-width="1"/><line x1="40.0" y1="84.0" x2="32.0" y2="92.0" stroke="currentColor" class="s-gray" stroke-width="1"/><line x1="40.0" y1="94.0" x2="32.0" y2="102.0" stroke="currentColor" class="s-gray" stroke-width="1"/><line x1="40.0" y1="104.0" x2="32.0" y2="112.0" stroke="currentColor" class="s-gray" stroke-width="1"/><line x1="40.0" y1="114.0" x2="32.0" y2="122.0" stroke="currentColor" class="s-gray" stroke-width="1"/><line x1="40.0" y1="124.0" x2="32.0" y2="132.0" stroke="currentColor" class="s-gray" stroke-width="1"/><line x1="40.0" y1="134.0" x2="32.0" y2="142.0" stroke="currentColor" class="s-gray" stroke-width="1"/><line x1="40.0" y1="144.0" x2="32.0" y2="152.0" stroke="currentColor" class="s-gray" stroke-width="1"/><line x1="40.0" y1="154.0" x2="32.0" y2="162.0" stroke="currentColor" class="s-gray" stroke-width="1"/><line x1="40.0" y1="164.0" x2="32.0" y2="172.0" stroke="currentColor" class="s-gray" stroke-width="1"/><line x1="40.0" y1="75.0" x2="60.0" y2="75.0" stroke="currentColor" stroke-width="1.8"/><path d="M60.0,75.0 L68.0,75.0 L74.8,84.0 L88.5,66.0 L102.2,84.0 L115.9,66.0 L129.6,84.0 L143.3,66.0 L157.0,84.0 L170.7,66.0 L184.3,84.0 L198.0,66.0 L211.7,84.0 L225.4,66.0 L239.1,84.0 L252.8,66.0 L266.5,84.0 L280.2,66.0 L287.0,75.0 L295.0,75.0" fill="none" stroke="currentColor" stroke-width="1.8"/><text x="190.0" y="57.0" font-size="12" text-anchor="middle" class="t-blue">spring k</text><line x1="40.0" y1="135.0" x2="90.0" y2="135.0" stroke="currentColor" stroke-width="1.8"/><path d="M200,121 L90,121 L90,149 L200,149" fill="none" stroke="currentColor" stroke-width="1.8"/><line x1="170.0" y1="125.0" x2="170.0" y2="145.0" stroke="currentColor" stroke-width="3"/><line x1="170.0" y1="135.0" x2="295.0" y2="135.0" stroke="currentColor" stroke-width="1.8"/><text x="150.0" y="169.0" font-size="12" text-anchor="middle" class="t-orange">damper (dashpot) b</text><rect x="295" y="45" width="70" height="120" rx="4" fill="currentColor" fill-opacity="0.2" stroke="currentColor" class="f-blue s-blue" stroke-width="2"/><text x="330.0" y="110.0" font-size="16" text-anchor="middle" font-style="italic">m</text><line x1="30.0" y1="175.0" x2="470.0" y2="175.0" stroke="currentColor" stroke-width="1.5"/><line x1="368.0" y1="105.0" x2="430.5" y2="105.0" stroke="currentColor" class="s-green" stroke-width="2.4"/><path d="M440.0,105.0 L429.0,110.5 L429.0,99.5 Z" fill="currentColor" class="f-green"/><text x="404.0" y="95.0" font-size="13" text-anchor="middle" class="t-green" font-style="italic">v</text><line x1="292.0" y1="150.0" x2="237.5" y2="150.0" stroke="currentColor" class="s-red" stroke-width="2.2"/><path d="M230.0,150.0 L239.0,145.5 L239.0,154.5 Z" fill="currentColor" class="f-red"/><text x="222.0" y="155.0" font-size="13" text-anchor="end" class="t-red">−bv</text><text x="250.0" y="200.0" font-size="12" text-anchor="middle" class="t-red">friction-like force opposite the velocity: F = −bv</text></svg>';

/**
 * Free decay of x'' + 2*zeta*x' + x = 0 from x(0) = 1, x'(0) = 0 (time tau in units
 * of 1/omega0), valid in every regime: u switches between the underdamped (cos/sin)
 * and overdamped (cosh/sinh) forms; the tiny 0.000001 makes zeta = 1 give (1 + tau)e^(-tau).
 */
const W = (z: string) => `sqrt(abs(1 - (${z})^2) + 0.000001)`;
const U = (z: string) => `(1 + sign(1 - (${z})))/2`;
const decay = (tau: string, z: string) =>
  `exp(-(${z})*(${tau}))*(${U(z)}*(cos(${W(z)}*(${tau})) + (${z})*sin(${W(z)}*(${tau}))/${W(z)}) + (1 - ${U(z)})*(cosh(${W(z)}*(${tau})) + (${z})*sinh(${W(z)}*(${tau}))/${W(z)}))`;

/**
 * Driven oscillator started from rest at x = 0: omega0 = 2pi (natural period 1 s),
 * drive frequency u*omega0, quality factor q, F0/k = 1. Steady state + transient.
 */
const AMP = '(1/sqrt((1 - u^2)^2 + (u/q)^2))';
const DEL = '(atan2(u/q, 1 - u^2))';
const GAM = '(pi/q)';
const WD = '(2pi*sqrt(1 - 1/(4q^2)))';
const C1 = `(-${AMP}*cos(${DEL}))`;
const C2 = `((${GAM}*${C1} - ${AMP}*2pi*u*sin(${DEL}))/${WD})`;
const steady = (t: string) => `${AMP}*cos(2pi*u*(${t}) - ${DEL})`;
const driven = (t: string) => `${steady(t)} + exp(-${GAM}*(${t}))*(${C1}*cos(${WD}*(${t})) + ${C2}*sin(${WD}*(${t})))`;

export const lesson: Lesson = {
  id: 'phys-damped-driven',
  title: 'Damped and Driven Oscillations',
  summary: 'Real oscillators lose energy. Add a damping force $-bv$, solve with $e^{rt}$ to find underdamped, critically damped and overdamped motion, measure damping with the quality factor $Q$, drive the oscillator to find resonance, and tune a spring–damper camera for a game.',
  minutes: 22,
  objectives: [
    'Write and solve the equation $m\\ddot{x} + b\\dot{x} + kx = 0$ by trying $x = e^{rt}$',
    'Classify a damped oscillator as underdamped, critically damped or overdamped, and sketch each kind of motion',
    'Relate the decay rate, the energy loss and the quality factor $Q = \\omega_0/2\\gamma$',
    'Find the steady-state amplitude and phase of a driven oscillator, and explain resonance and how damping shapes the resonance curve',
    'Implement and tune a critically damped spring for smooth camera motion in a game',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Adding damping: the force −bv',
      blocks: [
        {
          type: 'p',
          text: 'Every real oscillator runs down: a plucked string goes quiet, a swing stops, a car stops bouncing after a pothole. Something removes mechanical energy. The simplest model of that something is a **damping force proportional to velocity**:',
        },
        {
          type: 'math',
          tex: '\\vec{F}_{\\text{d}} = -b\\,\\vec{v}',
          caption: 'The damping coefficient $b$ has units of $\\text{N}/(\\text{m/s}) = \\text{kg/s}$. The minus sign makes the force always oppose the motion, never point toward equilibrium as such.',
        },
        {
          type: 'p',
          text: 'This "viscous" damping describes slow motion through a fluid, and it is exactly what a shock absorber (a dashpot: a piston pushing oil through small holes) is built to provide. It is not the same as sliding friction, which has a constant size.',
        },
        {
          type: 'figure',
          svg: SPRINGDAMPER_SVG,
          alt: 'A block m connected to a wall by a spring k on top and a dashpot b below, on a horizontal surface. A green arrow shows the block moving right with velocity v, and a red arrow on the block points left, labeled minus b v.',
          caption: 'A mass, a spring and a damper: the standard model of a car suspension, a door closer or a camera rig.',
          maxWidth: 440,
        },
        {
          type: 'derivation',
          title: 'The damped oscillator equation',
          steps: [
            { tex: 'm\\ddot{x} = -kx - b\\dot{x}', why: 'Newton\'s second law for the block, with $x = 0$ at equilibrium: spring force plus damping force.' },
            { tex: '\\ddot{x} + \\frac{b}{m}\\dot{x} + \\frac{k}{m}x = 0', why: 'Divide by $m$ and collect everything on one side.' },
            { tex: '\\ddot{x} + 2\\gamma\\dot{x} + \\omega_0^2 x = 0, \\qquad \\gamma = \\frac{b}{2m}, \\quad \\omega_0 = \\sqrt{\\frac{k}{m}}', why: 'Name the constants. $\\omega_0$ is the [[phys-natural-frequency|natural frequency]] (the undamped one), and $\\gamma$ (units $\\text{s}^{-1}$) is the decay rate; the factor 2 makes later formulas clean.' },
          ],
          result: 'Damped oscillations are governed by a linear second-order [[differential-equation]] with constant coefficients.',
        },
        {
          type: 'deepdive',
          title: 'Warm-up: damping with no spring',
          blocks: [
            {
              type: 'p',
              text: 'Without the spring, $m\\dot{v} = -bv$. This is a [[separable-equation|separable]] equation, and you can solve it in two lines even if you have not seen differential equations: divide by $v$ and integrate both sides, $\\int \\frac{dv}{v} = -\\frac{b}{m}\\int dt$, so $\\ln|v| = -\\frac{b}{m}t + C$ and',
            },
            { type: 'math', tex: 'v(t) = v_0\\,e^{-bt/m}' },
            {
              type: 'p',
              text: 'The velocity decays exponentially with time constant $m/b$ (see [[exponential-decay]]). An exponential is the only kind of function whose derivative is a constant times itself, which is the clue for solving the full equation next.',
            },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'mcq',
      prompt: 'A damped block on a horizontal spring is at $x = +3\\,\\text{cm}$ (right of equilibrium) and moving **left**, back toward equilibrium. Which way do the spring force and the damping force point?',
      options: [
        { text: 'Spring force left, damping force right', correct: true, why: 'The spring pulls toward equilibrium ($-kx < 0$, left), while damping opposes the velocity ($-bv > 0$ since $v < 0$, so right).' },
        { text: 'Both point left, toward equilibrium', why: 'Damping does not care where equilibrium is; it opposes the **velocity**. Here the block moves left, so damping points right.' },
        { text: 'Spring force left, damping force zero because the block is moving toward equilibrium', why: 'Damping is $-bv$, which is zero only when $v = 0$. The block is moving, so damping acts.' },
        { text: 'Spring force right, damping force left', why: 'At $x > 0$ the spring is stretched and pulls left. And the damping force opposes the leftward velocity, so it points right.' },
      ],
      explanation: 'Each force has its own rule: the spring force depends on **position** ($-kx$, toward equilibrium), the damping force on **velocity** ($-bv$, against the motion). On the way back toward equilibrium they oppose each other, so the block returns more gently than it would without damping.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Solving the damped equation: try e^(rt)',
      blocks: [
        {
          type: 'p',
          text: 'Guess $x = e^{rt}$ and let the equation tell you which $r$ works. Every derivative just multiplies by $r$, so calculus turns into algebra:',
        },
        {
          type: 'derivation',
          title: 'The characteristic equation',
          steps: [
            { tex: 'x = e^{rt} \\implies \\dot{x} = re^{rt}, \\quad \\ddot{x} = r^2e^{rt}', why: 'Differentiate the guess.' },
            { tex: '(r^2 + 2\\gamma r + \\omega_0^2)\\,e^{rt} = 0', why: 'Substitute into $\\ddot{x} + 2\\gamma\\dot{x} + \\omega_0^2x = 0$ and factor.' },
            { tex: 'r^2 + 2\\gamma r + \\omega_0^2 = 0', why: '$e^{rt}$ is never zero, so the quadratic must vanish.' },
            { tex: 'r = -\\gamma \\pm \\sqrt{\\gamma^2 - \\omega_0^2}', why: 'Quadratic formula. Everything now hinges on the sign of $\\gamma^2 - \\omega_0^2$.' },
          ],
          result: 'Weak damping ($\\gamma < \\omega_0$) gives complex roots, strong damping ($\\gamma > \\omega_0$) two negative real roots, and the boundary ($\\gamma = \\omega_0$) a repeated root.',
        },
        {
          type: 'p',
          text: '**Underdamped** ($\\gamma < \\omega_0$). The roots are $r = -\\gamma \\pm i\\omega_d$ with the damped frequency $\\omega_d = \\sqrt{\\omega_0^2 - \\gamma^2}$. By [[eulers-formula|Euler\'s formula]], $e^{(-\\gamma + i\\omega_d)t} = e^{-\\gamma t}(\\cos\\omega_d t + i\\sin\\omega_d t)$. Its real and imaginary parts are each real solutions, and combining them like before gives',
        },
        {
          type: 'theorem',
          name: 'Underdamped motion',
          tex: 'x(t) = A\\,e^{-\\gamma t}\\cos(\\omega_d t + \\phi), \\qquad \\omega_d = \\sqrt{\\omega_0^2 - \\gamma^2}',
          text: 'A sinusoid inside a shrinking exponential envelope $\\pm Ae^{-\\gamma t}$: a [[damped-oscillation]]. Damping slows the oscillation slightly ($\\omega_d < \\omega_0$) and makes the amplitude decay with time constant $1/\\gamma$.',
        },
        {
          type: 'graph',
          x: [0, 10],
          y: [-1.2, 1.2],
          xStep: 1,
          yStep: 0.5,
          height: 280,
          functions: [
            { expr: 'exp(-g*x)*cos(sqrt(16 - g^2)*x)', color: 'gray', dashed: true },
            { expr: 'exp(-g*x)*cos(sqrt(16 - g^2)*x)', domain: [0, 's'], color: 'blue', label: '$x(t) = e^{-\\gamma t}\\cos\\omega_d t$' },
            { expr: 'exp(-g*x)', color: 'red', dashed: true, label: 'envelope $\\pm e^{-\\gamma t}$' },
            { expr: '-exp(-g*x)', color: 'red', dashed: true },
          ],
          points: [{ x: 's', y: 'exp(-g*s)*cos(sqrt(16 - g^2)*s)', color: 'blue' }],
          hlines: [{ y: 0, color: 'gray' }],
          sliders: [
            { name: 'g', min: 0, max: 2, step: 0.02, value: 0.4, label: 'decay rate $\\gamma$ (s⁻¹)' },
            { name: 's', min: 0, max: 10, step: 0.01, value: 0, label: 'time $t$ (s)', play: true, speed: 2.5 },
          ],
          readouts: [
            { label: '$\\omega_d$ (rad/s):', expr: 'sqrt(16 - g^2)', digits: 3 },
            { label: 'envelope $e^{-\\gamma t}$:', expr: 'exp(-g*s)', digits: 3 },
            { label: '$Q = \\omega_0/2\\gamma$:', expr: '4/(2g)', digits: 3 },
          ],
          caption: 'Natural frequency $\\omega_0 = 4\\,\\text{rad/s}$. Press ▶ and watch the oscillation shrink inside the red envelope. With $\\gamma = 0$ it never decays; at $\\gamma = 2$ it is gone within a couple of cycles. The zero crossings barely move as you change $\\gamma$: $\\omega_d$ stays close to $\\omega_0$ unless the damping is heavy.',
        },
        {
          type: 'derivation',
          title: 'A lightly damped block: $m = 0.20\\,\\text{kg}$, $k = 80\\,\\text{N/m}$, $b = 0.40\\,\\text{kg/s}$',
          steps: [
            { tex: '\\gamma = \\frac{b}{2m} = \\frac{0.40}{2(0.20)} = 1.0\\,\\text{s}^{-1}, \\qquad \\omega_0 = \\sqrt{\\frac{80}{0.20}} = 20\\,\\text{rad/s}', why: 'Compute the two rates. $\\gamma \\ll \\omega_0$: lightly damped.' },
            { tex: '\\omega_d = \\sqrt{20^2 - 1.0^2} = 19.97\\,\\text{rad/s}', why: 'Only 0.1% below $\\omega_0$.' },
            { tex: 'e^{-\\gamma t_{1/2}} = \\tfrac12 \\implies t_{1/2} = \\frac{\\ln 2}{\\gamma} = 0.693\\,\\text{s}', why: 'The amplitude halves when the envelope reaches $\\tfrac12$. Take $\\ln$ of both sides.' },
          ],
          result: 'The amplitude halves every $0.69\\,\\text{s}$, which is about 2.2 oscillations (period $2\\pi/\\omega_d = 0.315\\,\\text{s}$).',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'numeric',
      prompt: 'A $0.500\\,\\text{kg}$ mass on a spring ($k = 50.0\\,\\text{N/m}$) is damped with $b = 0.300\\,\\text{kg/s}$. How long does it take for the amplitude of its oscillation to fall to **half** its initial value? Give the time in seconds to 3 significant figures.',
      hint: 'The envelope is $Ae^{-\\gamma t}$ with $\\gamma = b/2m$.',
      label: '$t_{1/2} =$',
      unit: 's',
      answer: 'ln(2)/(0.3/(2*0.5))',
      answerTex: '2.31',
      tolerance: 0.015,
      explanation: '$\\gamma = \\dfrac{b}{2m} = \\dfrac{0.300}{2(0.500)} = 0.300\\,\\text{s}^{-1}$, so $t_{1/2} = \\dfrac{\\ln 2}{\\gamma} = \\dfrac{0.693}{0.300} = 2.31\\,\\text{s}$. Using $\\gamma = b/m$ (forgetting the 2) gives $1.16\\,\\text{s}$. The spring constant does not affect how fast the envelope decays, only how fast it oscillates inside the envelope ($\\omega_0 = 10\\,\\text{rad/s}$, so about 3.7 oscillations per half-life).',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Critical damping and overdamping',
      blocks: [
        {
          type: 'p',
          text: 'Turn the damping up and the oscillation disappears. It is convenient to measure damping with the dimensionless [[phys-damping-ratio|damping ratio]] $\\zeta = \\gamma/\\omega_0 = b/(2\\sqrt{km})$.',
        },
        {
          type: 'table',
          headers: ['Regime', 'Condition', 'Roots $r$', 'Solution'],
          rows: [
            ['Underdamped', '$\\zeta < 1$ ($\\gamma < \\omega_0$)', '$-\\gamma \\pm i\\omega_d$', '$Ae^{-\\gamma t}\\cos(\\omega_d t + \\phi)$: decaying oscillation'],
            ['Critically damped', '$\\zeta = 1$ ($\\gamma = \\omega_0$)', '$-\\omega_0$ (repeated)', '$(C_1 + C_2t)\\,e^{-\\omega_0 t}$: fastest return, no overshoot'],
            ['Overdamped', '$\\zeta > 1$ ($\\gamma > \\omega_0$)', '$r_1, r_2 < 0$, real', '$C_1e^{r_1t} + C_2e^{r_2t}$: slow creep back'],
          ],
        },
        {
          type: 'derivation',
          title: 'Why $t\\,e^{-\\omega_0t}$ appears at critical damping',
          steps: [
            { tex: 'x = t\\,e^{-\\omega_0 t} \\implies \\dot{x} = (1 - \\omega_0 t)e^{-\\omega_0 t}, \\quad \\ddot{x} = (\\omega_0^2 t - 2\\omega_0)e^{-\\omega_0 t}', why: 'Product rule, twice.' },
            { tex: '\\ddot{x} + 2\\omega_0\\dot{x} + \\omega_0^2x = e^{-\\omega_0t}\\big[(\\omega_0^2t - 2\\omega_0) + 2\\omega_0(1 - \\omega_0t) + \\omega_0^2t\\big]', why: 'Substitute into the equation with $\\gamma = \\omega_0$.' },
            { tex: '= e^{-\\omega_0t}\\cdot 0 = 0 \\ \\checkmark', why: 'The $t$ terms cancel ($\\omega_0^2 - 2\\omega_0^2 + \\omega_0^2 = 0$) and so do the constants ($-2\\omega_0 + 2\\omega_0 = 0$).' },
          ],
          result: 'With a repeated root the second solution is $te^{-\\omega_0 t}$, so the general solution is $(C_1 + C_2t)e^{-\\omega_0t}$.',
        },
        {
          type: 'graph',
          x: [0, 15],
          y: [-1, 1.1],
          xStep: 1,
          yStep: 0.25,
          height: 290,
          functions: [
            { expr: decay('x', '1'), color: 'gray', dashed: true, label: 'critical, $\\zeta = 1$' },
            { expr: decay('x', 'z'), color: 'blue', label: 'your $\\zeta$' },
          ],
          points: [{ x: 's', y: decay('s', 'z'), color: 'blue' }],
          hlines: [{ y: 0, color: 'gray' }],
          sliders: [
            { name: 'z', min: 0.05, max: 3, step: 0.05, value: 0.3, label: 'damping ratio $\\zeta = \\gamma/\\omega_0$' },
            { name: 's', min: 0, max: 15, step: 0.01, value: 0, label: 'time $\\omega_0 t$', play: true, speed: 3.75 },
          ],
          readouts: [
            { label: 'overshoot past equilibrium (%):', expr: '100*exp(-pi*z/sqrt(max(1 - z^2, 0.000001)))*(1 + sign(1 - z))/2', digits: 2 },
            { label: 'slowest decay rate (units of $\\omega_0$):', expr: 'z - sqrt(max(z^2 - 1, 0))', digits: 3 },
          ],
          caption: 'Released from rest at $x = 1$; time in units of $1/\\omega_0$. Below $\\zeta = 1$ the mass overshoots and rings. At $\\zeta = 1$ (gray) it returns as fast as possible without crossing zero. Push $\\zeta$ to 2 or 3 and it creeps back **more slowly**: the slow root $r_1 = -\\omega_0(\\zeta - \\sqrt{\\zeta^2 - 1})$ approaches zero as damping grows.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why more damping can be slower',
          text: 'Heavy damping means a large force opposing **any** velocity. Near equilibrium the spring force is weak, so the mass can only move as fast as the damper lets it: roughly $v \\approx -kx/b$, which gives $x \\propto e^{-kt/b}$, and that gets slower as $b$ grows. Think of a door closer filled with very thick oil, or a spoon sinking through honey. Engineers aim for critical or slightly underdamped: car suspensions, door closers and galvanometer needles all live near $\\zeta \\approx 0.3$ to $1$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'truefalse',
      prompt: 'Once a spring–mass system is past critical damping, increasing the damping further makes it return to equilibrium **more slowly**.',
      answer: true,
      explanation: 'True. For $\\zeta > 1$ the long-time behavior is set by the slow root $r_1 = -\\omega_0(\\zeta - \\sqrt{\\zeta^2 - 1})$, whose magnitude shrinks as $\\zeta$ grows: about $\\omega_0/(2\\zeta)$ for large $\\zeta$. Critical damping ($\\zeta = 1$) gives the fastest return without overshoot. "More damping, faster stop" is true only up to that point.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'Energy loss and the quality factor',
      blocks: [
        {
          type: 'p',
          text: 'Where does the energy go? Differentiate the [[phys-mechanical-energy|mechanical energy]], exactly as you did for undamped SHM, but now use the damped equation:',
        },
        {
          type: 'derivation',
          title: 'Power drained by the damper',
          steps: [
            { tex: '\\frac{dE}{dt} = \\frac{d}{dt}\\left(\\tfrac12 mv^2 + \\tfrac12 kx^2\\right) = v\\,(m\\ddot{x} + kx)', why: 'Chain rule, as in the energy lesson.' },
            { tex: '= v\\,(-b\\dot{x}) = -bv^2 \\le 0', why: 'The damped equation says $m\\ddot{x} + kx = -b\\dot{x}$.' },
          ],
          result: 'The damper removes energy at the rate $bv^2$ (it heats the oil). Energy is lost fastest when the mass moves fastest, and never gained.',
        },
        {
          type: 'p',
          text: 'For light damping the amplitude decays as $e^{-\\gamma t}$, so the energy, which is proportional to amplitude squared, decays as $e^{-2\\gamma t}$. Comparing the decay time with the oscillation period gives one number that captures how "ringy" an oscillator is: the [[phys-quality-factor|quality factor]].',
        },
        {
          type: 'definition',
          term: 'Quality factor $Q$',
          text: '$Q = \\dfrac{\\omega_0}{2\\gamma} = \\dfrac{m\\omega_0}{b} = \\dfrac{1}{2\\zeta}$. For light damping, $Q \\approx 2\\pi \\times \\dfrac{\\text{energy stored}}{\\text{energy lost per cycle}}$, and the amplitude falls by a factor $e^{\\pi} \\approx 23$ in about $Q$ oscillations.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Where "Q cycles" comes from',
          text: '$Q$ cycles take time $Q\\cdot\\frac{2\\pi}{\\omega_0} = \\frac{\\omega_0}{2\\gamma}\\cdot\\frac{2\\pi}{\\omega_0} = \\frac{\\pi}{\\gamma}$, during which the envelope shrinks by $e^{-\\gamma(\\pi/\\gamma)} = e^{-\\pi} \\approx 0.043$. So you can estimate $Q$ by counting: pluck it, and count the swings until it is down to about 4% of where it started. The block in the earlier example ($\\gamma = 1.0\\,\\text{s}^{-1}$, $\\omega_0 = 20\\,\\text{rad/s}$) has $Q = 10$.',
        },
        {
          type: 'table',
          headers: ['Oscillator', 'Typical $Q$ (order of magnitude)'],
          rows: [
            ['Car suspension (shock absorbers working)', '$\\sim 1$'],
            ['Child on a swing, not pumping', '$\\sim 10$'],
            ['Guitar string', '$10^2$ to $10^3$'],
            ['Steel tuning fork', '$10^3$ to $10^4$'],
            ['Quartz crystal in a watch', '$10^4$ to $10^6$'],
          ],
          caption: 'High-$Q$ oscillators keep ringing and hold their frequency precisely, which is why quartz crystals keep time in every computer and phone.',
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'numeric',
      prompt: 'A $440\\,\\text{Hz}$ tuning fork is struck. Its amplitude falls to $1/e$ of its initial value in $4.0\\,\\text{s}$ (so $\\gamma = 1/(4.0\\,\\text{s})$). Find its quality factor $Q = \\omega_0/(2\\gamma)$, to 3 significant figures.',
      hint: 'Convert the frequency to $\\omega_0 = 2\\pi f$ first.',
      label: '$Q =$',
      answer: '2pi*440/(2*0.25)',
      answerTex: '5530',
      tolerance: 30,
      explanation: '$\\omega_0 = 2\\pi(440) = 2765\\,\\text{rad/s}$ and $\\gamma = 0.25\\,\\text{s}^{-1}$, so $Q = \\dfrac{2765}{2(0.25)} = 5530$. Using $f$ instead of $\\omega_0$ gives $880$; dropping the 2 gives about $11\\,000$. A $Q$ of several thousand means the fork rings for thousands of cycles, consistent with the table.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'concept',
      title: 'Driven oscillations and resonance',
      blocks: [
        {
          type: 'p',
          text: 'Now push the oscillator with a periodic force $F_0\\cos\\omega t$ at a **driving frequency** $\\omega$ of your choice: a child being pushed on a swing, an unbalanced washing machine, a speaker cone, soldiers marching across a bridge.',
        },
        {
          type: 'math',
          tex: 'm\\ddot{x} + b\\dot{x} + kx = F_0\\cos\\omega t',
        },
        {
          type: 'p',
          text: 'The solution is the sum of a **transient** (a solution of the undriven equation, which dies away as $e^{-\\gamma t}$) and a **steady state** that oscillates at the driving frequency $\\omega$, not at $\\omega_0$. After a few decay times only the steady state is left.',
        },
        {
          type: 'derivation',
          title: 'Steady-state amplitude and phase',
          steps: [
            { tex: 'x_p = A\\cos(\\omega t - \\delta)', why: 'Guess a response at the driving frequency, lagging behind the force by a phase $\\delta$.' },
            { tex: 'm\\ddot{x}_p + b\\dot{x}_p + kx_p = A\\big[(k - m\\omega^2)\\cos(\\omega t - \\delta) - b\\omega\\sin(\\omega t - \\delta)\\big]', why: 'Use $\\ddot{x}_p = -\\omega^2x_p$ and $\\dot{x}_p = -A\\omega\\sin(\\omega t - \\delta)$.' },
            { tex: 'F_0\\cos\\omega t = F_0\\big[\\cos\\delta\\cos(\\omega t - \\delta) - \\sin\\delta\\sin(\\omega t - \\delta)\\big]', why: 'Rewrite the force with the angle-sum identity, $\\omega t = (\\omega t - \\delta) + \\delta$, so both sides use the same two functions.' },
            { tex: 'A(k - m\\omega^2) = F_0\\cos\\delta, \\qquad Ab\\omega = F_0\\sin\\delta', why: 'Match the coefficients of $\\cos(\\omega t - \\delta)$ and of $\\sin(\\omega t - \\delta)$.' },
            { tex: 'A = \\frac{F_0/m}{\\sqrt{(\\omega_0^2 - \\omega^2)^2 + (2\\gamma\\omega)^2}}, \\qquad \\tan\\delta = \\frac{2\\gamma\\omega}{\\omega_0^2 - \\omega^2}', why: 'Square and add to eliminate $\\delta$ (then divide by $m$); divide the two equations to get $\\delta$.' },
          ],
          result: 'The response is largest when the driving frequency is near $\\omega_0$: this is [[phys-resonance|resonance]].',
        },
        {
          type: 'graph',
          x: [0, 3],
          y: [0, 11],
          xStep: 0.25,
          yStep: 1,
          height: 290,
          functions: [
            { expr: '1/sqrt((1 - x^2)^2 + (x/q)^2)', color: 'blue', label: 'amplitude $A/(F_0/k)$' },
            { expr: '1/sqrt((1 - x^2)^2 + (x/2)^2)', color: 'gray', dashed: true, label: '$Q = 2$ for reference' },
          ],
          vlines: [{ x: 1, color: 'gray', label: 'ω = ω₀' }],
          sliders: [{ name: 'q', min: 0.5, max: 10, step: 0.1, value: 5, label: 'quality factor $Q$ (less damping →)' }],
          readouts: [
            { label: 'amplitude at $\\omega_0$ ($\\times F_0/k$):', expr: 'q', digits: 3 },
            { label: 'peak width $\\approx \\omega_0/Q$:', expr: '1/q', digits: 3 },
          ],
          caption: 'The resonance curve: steady-state amplitude, in units of the static stretch $F_0/k$, against the driving frequency $\\omega/\\omega_0$. Far below resonance the mass just follows the force ($A \\to F_0/k$); far above, it cannot keep up ($A \\to 0$). At $\\omega = \\omega_0$, $A = QF_0/k$. Raise $Q$ (less damping) and the peak gets taller and narrower.',
        },
        {
          type: 'graph',
          x: [0, 3],
          y: [0, 3.3],
          xStep: 0.25,
          yStep: 0.5,
          height: 220,
          functions: [{ expr: 'atan2(x/q, 1 - x^2)', color: 'purple', label: 'phase lag $\\delta$ (radians)' }],
          hlines: [
            { y: 'pi/2', color: 'gray', label: 'π/2' },
            { y: 'pi', color: 'gray', label: 'π' },
          ],
          sliders: [{ name: 'q', min: 0.5, max: 10, step: 0.1, value: 5, label: 'quality factor $Q$' }],
          caption: 'How far the response lags the force. Slow driving: in step ($\\delta \\approx 0$). At resonance: exactly a quarter cycle behind ($\\delta = \\pi/2$), so the velocity is in step with the force and the force does positive work all cycle long, which is why the amplitude builds up. Fast driving: opposite to the force ($\\delta \\to \\pi$). High $Q$ makes the switch abrupt.',
        },
        {
          type: 'graph',
          x: [0, 10],
          y: [-11, 11],
          xStep: 1,
          yStep: 2,
          height: 300,
          functions: [
            { expr: steady('x'), color: 'gray', dashed: true, label: 'steady state alone' },
            { expr: driven('x'), domain: [0, 's'], color: 'blue', label: 'motion starting from rest' },
          ],
          points: [{ x: 's', y: driven('s'), color: 'blue' }],
          sliders: [
            { name: 'u', min: 0.2, max: 2.5, step: 0.01, value: 1, label: 'driving frequency $\\omega/\\omega_0$' },
            { name: 'q', min: 1, max: 10, step: 0.5, value: 8, label: 'quality factor $Q$' },
            { name: 's', min: 0, max: 10, step: 0.01, value: 0, label: 'time $t$ (s)', play: true, speed: 2.5 },
          ],
          readouts: [{ label: 'steady amplitude ($\\times F_0/k$):', expr: AMP, digits: 3 }],
          caption: 'An oscillator with natural period $1\\,\\text{s}$, starting at rest, driven from $t = 0$. Press ▶. At resonance the amplitude **builds up** over several cycles toward $QF_0/k$ as the transient dies away. Try $\\omega/\\omega_0 = 0.9$ with high $Q$: the transient and the drive beat against each other before settling.',
        },
        {
          type: 'callout',
          variant: 'history',
          title: 'Breaking step on bridges',
          text: 'Armies have long ordered troops to **break step** when crossing bridges. In 1831 part of the Broughton Suspension Bridge near Manchester gave way while a column of soldiers marched across in step: the rhythmic loading set the deck vibrating, and a badly forged bolt in one of its chains snapped. In 2000, London\'s Millennium Bridge had to close days after opening because pedestrians, unconsciously stepping in time with its sway, drove a sideways resonance. (The famous 1940 Tacoma Narrows collapse is a different mechanism, aerodynamic flutter, not simple resonance.)',
        },
      ],
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'mcq',
      prompt: 'A lightly damped oscillator is driven at exactly its natural frequency, $\\omega = \\omega_0$, and has reached steady state. Which statement is correct?',
      options: [
        { text: 'The displacement is in step with the driving force, and the amplitude is infinite', why: 'With any damping the amplitude is finite, $QF_0/k$. And at resonance the displacement lags the force by $\\pi/2$, not 0.' },
        { text: 'The displacement lags the force by a quarter cycle, so the velocity is in step with the force; the amplitude is limited only by damping', correct: true, why: 'At $\\omega = \\omega_0$, $\\tan\\delta \\to \\infty$ so $\\delta = \\pi/2$. Velocity leads displacement by $\\pi/2$, so it lines up with the force, which therefore always does positive work. The steady amplitude $F_0/(b\\omega_0)$ is set by how fast damping removes that energy.' },
        { text: 'The displacement is exactly opposite to the force, which keeps the amplitude small', why: 'A lag of $\\pi$ happens well **above** resonance, where the mass cannot keep up and the amplitude is small.' },
        { text: 'The oscillation is at the damped frequency $\\omega_d$, not at the driving frequency', why: 'In steady state a driven oscillator always moves at the **driving** frequency. Its own (damped) frequency only shows in the transient.' },
      ],
      explanation: 'At resonance the force and the velocity are in phase, so the power $Fv$ fed in is positive throughout the cycle. The amplitude grows until the damper drains energy ($bv^2$ on average) as fast as the drive supplies it. That balance gives $A = F_0/(b\\omega_0) = QF_0/k$: halve the damping and the resonant amplitude doubles.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'Spring–damper smoothing in games',
      blocks: [
        {
          type: 'p',
          text: 'Game cameras, UI elements and procedural animation constantly need to **follow a target smoothly**. Snapping instantly looks jerky; plain linear interpolation starts abruptly. A damped spring is the standard solution. Treat the camera position $x$ as a mass attached to the target by a spring and a damper:',
        },
        {
          type: 'math',
          tex: '\\ddot{x} = \\omega_0^2\\,(x_{\\text{target}} - x) - 2\\zeta\\omega_0\\,\\dot{x}',
          caption: 'Two intuitive knobs: $\\omega_0$ sets how quickly it responds (stiffness), and $\\zeta$ sets the character of the motion (bounce versus creep).',
        },
        {
          type: 'graph',
          x: [0, 1.5],
          y: [0, 14],
          xStep: 0.25,
          yStep: 2,
          height: 280,
          functions: [{ expr: `10*(1 - ${decay('8x', 'z')})`, color: 'blue', label: 'camera position (m)' }],
          hlines: [
            { y: 10, color: 'green', label: 'target' },
            { y: 10.2, color: 'gray', dashed: true },
            { y: 9.8, color: 'gray', dashed: true },
          ],
          points: [{ x: 's', y: `10*(1 - ${decay('8s', 'z')})`, color: 'red', label: 'camera' }],
          sliders: [
            { name: 'z', min: 0.1, max: 3, step: 0.05, value: 1, label: 'damping ratio $\\zeta$' },
            { name: 's', min: 0, max: 1.5, step: 0.005, value: 0, label: 'time (s)', play: true, speed: 0.375 },
          ],
          readouts: [{ label: 'overshoot (%):', expr: '100*exp(-pi*z/sqrt(max(1 - z^2, 0.000001)))*(1 + sign(1 - z))/2', digits: 1 }],
          caption: 'The player teleports $10\\,\\text{m}$ at $t = 0$ and the camera (with $\\omega_0 = 8\\,\\text{rad/s}$) follows. The dashed lines mark $\\pm 2\\%$ of the jump. Press ▶ (slow motion). Low $\\zeta$ swings past the target, which feels floaty or sick-making; high $\\zeta$ lags behind; $\\zeta \\approx 1$ arrives quickly without overshoot.',
        },
        {
          type: 'p',
          text: 'The program steps this spring once per $60\\,\\text{Hz}$ frame with semi-implicit Euler and measures the overshoot and the time to settle within 2% for several damping ratios.',
        },
        {
          type: 'code',
          title: 'camera.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdio>

// A camera that follows a target with a spring-damper:
//   x'' = w0^2 (target - x) - 2 zeta w0 x'
struct SpringFollower {
    double x = 0.0, v = 0.0;
    double w0, zeta;                       // natural frequency (rad/s), damping ratio
    void update(double target, double dt) {
        double a = w0 * w0 * (target - x) - 2.0 * zeta * w0 * v;
        v += a * dt;                       // semi-implicit Euler
        x += v * dt;
    }
};

int main() {
    const double dt = 1.0 / 60.0;          // one 60 Hz frame
    const double target = 10.0;            // the player teleports 10 m at t = 0
    const double zetas[] = {0.3, 0.7, 1.0, 2.0};
    std::printf("zeta  overshoot  settle (within 2%%)\\n");
    for (double zeta : zetas) {
        SpringFollower cam{0.0, 0.0, 8.0, zeta};
        double peak = 0.0, settle = 0.0;
        for (int frame = 1; frame <= 300; ++frame) {   // 5 seconds
            cam.update(target, dt);
            if (cam.x > peak) peak = cam.x;
            if (std::fabs(cam.x - target) > 0.02 * target) settle = frame * dt;
        }
        double overshoot = std::fmax(0.0, 100.0 * (peak - target) / target);
        std::printf("%.1f   %5.1f %%    %.2f s\\n", zeta, overshoot, settle);
    }
}`,
          output: `zeta  overshoot  settle (within 2%)
0.3    36.5 %    1.35 s
0.7     3.3 %    0.68 s
1.0     0.0 %    0.75 s
2.0     0.0 %    1.87 s`,
          annotations: [
            { lines: '9-13', text: 'One frame of the spring–damper: acceleration from the spring toward the target and the damper against the velocity, then semi-implicit Euler.' },
            { lines: '22', text: 'Aggregate initialization: $x = 0$, $v = 0$, $\\omega_0 = 8\\,\\text{rad/s}$, and the damping ratio under test.' },
            { lines: '27', text: 'Remember the last frame that was still outside the 2% band: that is the settling time.' },
          ],
        },
        {
          type: 'p',
          text: 'The exact continuous answers are 37.2% and 4.6% overshoot for $\\zeta = 0.3$ and $0.7$; the frame-stepped spring differs a little because $\\omega_0\\Delta t = 0.13$ is not tiny. Note the settling times: slightly underdamped ($\\zeta = 0.7$) and critically damped are fastest, and $\\zeta = 2$ takes more than twice as long, exactly as the overdamping analysis predicts.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Making it robust',
          text: 'Two practical rules. First, stability: with semi-implicit Euler keep $\\omega_0\\Delta t$ well below 1, or run the spring on a fixed physics timestep, because a stiff spring on a slow frame can overshoot wildly or explode. Second, frame-rate independence: the critically damped spring has a closed-form solution $(C_1 + C_2t)e^{-\\omega_0t}$, so you can advance it **exactly** by any $\\Delta t$ and get identical motion at 30 or 144 fps. Unity\'s `Mathf.SmoothDamp`, for example, is a spring–damper smoother of this kind that never overshoots (critically damped, with a cheap approximation of the exponential). Choose $\\zeta$ slightly below 1 when a tiny overshoot feels lively (a UI pop), and exactly 1 for cameras.',
        },
      ],
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'expr',
      prompt: 'A mass $m$ on a spring of constant $k$ is fitted with a damper. What damping coefficient $b$ makes the system **critically damped**? Express $b$ in terms of $k$ and $m$.',
      hint: 'Critical damping means $\\gamma = \\omega_0$, with $\\gamma = b/2m$.',
      label: '$b =$',
      answer: '2sqrt(k*m)',
      answerTex: '2\\sqrt{km}',
      variables: ['k', 'm'],
      domain: [0.5, 5],
      explanation: 'Set $\\gamma = \\omega_0$: $\\dfrac{b}{2m} = \\sqrt{\\dfrac{k}{m}}$, so $b = 2m\\sqrt{\\dfrac{k}{m}} = 2\\sqrt{km}$. Check the units: $\\sqrt{(\\text{N/m})(\\text{kg})} = \\sqrt{\\text{kg}^2/\\text{s}^2} = \\text{kg/s}$, the units of $b$. In damping-ratio terms, $\\zeta = b/(2\\sqrt{km}) = 1$.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'error',
      prompt: 'A $2.0\\,\\text{kg}$ mass hangs on a spring with $k = 50\\,\\text{N/m}$ and a damper with $b = 12\\,\\text{kg/s}$. A student decides whether it will oscillate. Tap the first line with a mistake.',
      lines: [
        '$\\omega_0 = \\sqrt{k/m} = \\sqrt{50/2.0} = 5.0\\,\\text{rad/s}$',
        '$\\gamma = b/m = 12/2.0 = 6.0\\,\\text{s}^{-1}$',
        'Since $\\gamma > \\omega_0$, the system is overdamped.',
        'So, released from rest, it creeps back to equilibrium without oscillating.',
      ],
      errorLines: [2],
      explanation: 'Line 2 drops the factor of 2: the decay rate is $\\gamma = b/(2m) = 12/4.0 = 3.0\\,\\text{s}^{-1}$. Since $3.0 < 5.0$, the system is **underdamped** ($\\zeta = 0.6$) and does oscillate, at $\\omega_d = \\sqrt{5.0^2 - 3.0^2} = 4.0\\,\\text{rad/s}$, while decaying as $e^{-3.0t}$. Equivalently, critical damping would need $b = 2\\sqrt{km} = 2\\sqrt{100} = 20\\,\\text{kg/s}$, more than the $12$ present.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'numeric',
      prompt: 'A $0.50\\,\\text{kg}$ mass on a spring ($k = 200\\,\\text{N/m}$) with damping $b = 1.0\\,\\text{kg/s}$ is driven by $F_0\\cos\\omega t$ with $F_0 = 2.0\\,\\text{N}$, at exactly its natural frequency. Find the steady-state amplitude in **centimeters**, to 3 significant figures.',
      hint: 'At $\\omega = \\omega_0$ the $(\\omega_0^2 - \\omega^2)$ term vanishes, leaving $A = \\dfrac{F_0/m}{2\\gamma\\omega_0} = \\dfrac{F_0}{b\\omega_0}$.',
      label: '$A =$',
      unit: 'cm',
      answer: '100*2/(1*sqrt(200/0.5))',
      answerTex: '10.0',
      tolerance: 0.06,
      explanation: '$\\omega_0 = \\sqrt{200/0.50} = 20\\,\\text{rad/s}$ and $\\gamma = b/2m = 1.0\\,\\text{s}^{-1}$. At resonance $A = \\dfrac{F_0/m}{2\\gamma\\omega_0} = \\dfrac{4.0}{2(1.0)(20)} = 0.100\\,\\text{m} = 10.0\\,\\text{cm}$. Compare the static stretch $F_0/k = 1.0\\,\\text{cm}$: the factor of 10 is $Q = \\omega_0/2\\gamma = 10$. Forgetting the 2 in $2\\gamma\\omega_0$ gives $20\\,\\text{cm}$.',
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'order',
      prompt: 'Put the steps for analyzing an undriven damped oscillator, given $m$, $b$, $k$ and the initial conditions, in order.',
      lines: [
        'Write Newton\'s second law: $m\\ddot{x} + b\\dot{x} + kx = 0$.',
        'Compute $\\gamma = b/2m$ and $\\omega_0 = \\sqrt{k/m}$.',
        'Compare $\\gamma$ with $\\omega_0$ to identify the regime.',
        'Write the general solution for that regime.',
        'Use $x(0)$ and $v(0)$ to fix the two constants.',
      ],
      explanation: 'The equation comes first, then the two rates it contains. Their comparison decides which of the three solution forms applies, and only then do the initial conditions pin down the two free constants. Skipping the regime check (and writing a decaying cosine for an overdamped system) is a common error.',
    },
  ],
  takeaways: [
    'Viscous damping $F = -bv$ gives $\\ddot{x} + 2\\gamma\\dot{x} + \\omega_0^2x = 0$ with $\\gamma = b/2m$ and $\\omega_0 = \\sqrt{k/m}$. Trying $e^{rt}$ gives $r = -\\gamma \\pm \\sqrt{\\gamma^2 - \\omega_0^2}$.',
    'Underdamped ($\\gamma < \\omega_0$): $Ae^{-\\gamma t}\\cos(\\omega_d t + \\phi)$ with $\\omega_d = \\sqrt{\\omega_0^2 - \\gamma^2}$. Critically damped: $(C_1 + C_2t)e^{-\\omega_0t}$, the fastest return without overshoot. Overdamped: two decaying exponentials, slower as damping grows.',
    'The damper drains power $bv^2$; energy decays as $e^{-2\\gamma t}$. The quality factor $Q = \\omega_0/2\\gamma$ counts roughly how many cycles an oscillator rings.',
    'A driven oscillator settles to the driving frequency with amplitude $\\dfrac{F_0/m}{\\sqrt{(\\omega_0^2 - \\omega^2)^2 + (2\\gamma\\omega)^2}}$. Near $\\omega_0$ it resonates, with amplitude $QF_0/k$ and a $90^\\circ$ lag.',
    'A spring–damper with $\\zeta \\approx 1$ is the standard tool for smooth camera and UI motion; keep $\\omega_0\\Delta t$ small or use the exact critically damped update.',
  ],
  reading: [
    {
      title: 'OpenStax University Physics Volume 1, Chapter 15: Oscillations',
      url: 'https://openstax.org/details/books/university-physics-volume-1',
      source: 'openstax',
      note: 'Sections 15.5 and 15.6 cover damped oscillations, the three regimes, forced oscillations and resonance curves.',
    },
    {
      title: 'Damping',
      url: 'https://en.wikipedia.org/wiki/Damping',
      source: 'wikipedia',
      note: 'The damping ratio, the three regimes and the quality factor, with examples from engineering.',
    },
    {
      title: 'Resonance',
      url: 'https://en.wikipedia.org/wiki/Resonance',
      source: 'wikipedia',
      note: 'Resonance across mechanics, acoustics and electronics, including the resonance curve and its width.',
    },
    {
      title: 'MIT OCW 8.01SC Classical Mechanics',
      url: 'https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/',
      source: 'other',
      note: 'The simple harmonic motion unit has lectures and worked problems on damped and driven oscillators.',
    },
  ],
};
