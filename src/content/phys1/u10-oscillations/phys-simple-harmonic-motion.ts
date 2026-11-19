import type { Lesson } from '../../types';

// Figures (generated, then pasted in).
const SPRING3_SVG = '<svg viewBox="0 0 480 290" xmlns="http://www.w3.org/2000/svg"><line x1="30.0" y1="19.0" x2="30.0" y2="71.0" stroke="currentColor" stroke-width="2.5"/><line x1="30.0" y1="23.0" x2="22.0" y2="31.0" stroke="currentColor" class="s-gray" stroke-width="1"/><line x1="30.0" y1="33.0" x2="22.0" y2="41.0" stroke="currentColor" class="s-gray" stroke-width="1"/><line x1="30.0" y1="43.0" x2="22.0" y2="51.0" stroke="currentColor" class="s-gray" stroke-width="1"/><line x1="30.0" y1="53.0" x2="22.0" y2="61.0" stroke="currentColor" class="s-gray" stroke-width="1"/><line x1="30.0" y1="63.0" x2="22.0" y2="71.0" stroke="currentColor" class="s-gray" stroke-width="1"/><path d="M30.0,45.0 L38.0,45.0 L42.2,54.0 L50.8,36.0 L59.2,54.0 L67.8,36.0 L76.2,54.0 L84.8,36.0 L93.2,54.0 L101.8,36.0 L110.2,54.0 L118.8,36.0 L127.2,54.0 L135.8,36.0 L144.2,54.0 L152.8,36.0 L157.0,45.0 L165.0,45.0" fill="none" stroke="currentColor" stroke-width="1.8"/><rect x="165.0" y="27.0" width="50" height="36" rx="3" fill="currentColor" fill-opacity="0.2" stroke="currentColor" class="f-blue s-blue" stroke-width="2"/><text x="190.0" y="50.0" font-size="14" text-anchor="middle" font-style="italic">m</text><text x="470.0" y="41.0" font-size="12" text-anchor="end">x < 0: compressed</text><line x1="215.0" y1="45.0" x2="265.5" y2="45.0" stroke="currentColor" class="s-red" stroke-width="3"/><path d="M275.0,45.0 L264.0,50.5 L264.0,39.5 Z" fill="currentColor" class="f-red"/><text x="245.0" y="33.0" font-size="13" text-anchor="middle" class="t-red" font-style="italic">F</text><text x="470.0" y="59.0" font-size="11" text-anchor="end" class="t-gray">F pushes right</text><line x1="30.0" y1="104.0" x2="30.0" y2="156.0" stroke="currentColor" stroke-width="2.5"/><line x1="30.0" y1="108.0" x2="22.0" y2="116.0" stroke="currentColor" class="s-gray" stroke-width="1"/><line x1="30.0" y1="118.0" x2="22.0" y2="126.0" stroke="currentColor" class="s-gray" stroke-width="1"/><line x1="30.0" y1="128.0" x2="22.0" y2="136.0" stroke="currentColor" class="s-gray" stroke-width="1"/><line x1="30.0" y1="138.0" x2="22.0" y2="146.0" stroke="currentColor" class="s-gray" stroke-width="1"/><line x1="30.0" y1="148.0" x2="22.0" y2="156.0" stroke="currentColor" class="s-gray" stroke-width="1"/><path d="M30.0,130.0 L38.0,130.0 L44.4,139.0 L57.2,121.0 L70.0,139.0 L82.8,121.0 L95.5,139.0 L108.3,121.0 L121.1,139.0 L133.9,121.0 L146.7,139.0 L159.5,121.0 L172.2,139.0 L185.0,121.0 L197.8,139.0 L210.6,121.0 L217.0,130.0 L225.0,130.0" fill="none" stroke="currentColor" stroke-width="1.8"/><rect x="225.0" y="112.0" width="50" height="36" rx="3" fill="currentColor" fill-opacity="0.2" stroke="currentColor" class="f-blue s-blue" stroke-width="2"/><text x="250.0" y="135.0" font-size="14" text-anchor="middle" font-style="italic">m</text><text x="470.0" y="126.0" font-size="12" text-anchor="end">x = 0: equilibrium</text><text x="470.0" y="144.0" font-size="11" text-anchor="end" class="t-gray">no spring force</text><line x1="30.0" y1="189.0" x2="30.0" y2="241.0" stroke="currentColor" stroke-width="2.5"/><line x1="30.0" y1="193.0" x2="22.0" y2="201.0" stroke="currentColor" class="s-gray" stroke-width="1"/><line x1="30.0" y1="203.0" x2="22.0" y2="211.0" stroke="currentColor" class="s-gray" stroke-width="1"/><line x1="30.0" y1="213.0" x2="22.0" y2="221.0" stroke="currentColor" class="s-gray" stroke-width="1"/><line x1="30.0" y1="223.0" x2="22.0" y2="231.0" stroke="currentColor" class="s-gray" stroke-width="1"/><line x1="30.0" y1="233.0" x2="22.0" y2="241.0" stroke="currentColor" class="s-gray" stroke-width="1"/><path d="M30.0,215.0 L38.0,215.0 L46.5,224.0 L63.6,206.0 L80.7,224.0 L97.8,206.0 L114.8,224.0 L131.9,206.0 L149.0,224.0 L166.0,206.0 L183.1,224.0 L200.2,206.0 L217.2,224.0 L234.3,206.0 L251.4,224.0 L268.5,206.0 L277.0,215.0 L285.0,215.0" fill="none" stroke="currentColor" stroke-width="1.8"/><rect x="285.0" y="197.0" width="50" height="36" rx="3" fill="currentColor" fill-opacity="0.2" stroke="currentColor" class="f-blue s-blue" stroke-width="2"/><text x="310.0" y="220.0" font-size="14" text-anchor="middle" font-style="italic">m</text><text x="470.0" y="211.0" font-size="12" text-anchor="end">x > 0: stretched</text><line x1="285.0" y1="193.0" x2="234.5" y2="193.0" stroke="currentColor" class="s-red" stroke-width="3"/><path d="M225.0,193.0 L236.0,187.5 L236.0,198.5 Z" fill="currentColor" class="f-red"/><text x="255.0" y="185.0" font-size="13" text-anchor="middle" class="t-red" font-style="italic">F</text><text x="470.0" y="229.0" font-size="11" text-anchor="end" class="t-gray">F pulls left</text><line x1="250.0" y1="20.0" x2="250.0" y2="250.0" stroke="currentColor" class="s-gray" stroke-width="1" stroke-dasharray="5 4"/><line x1="150.0" y1="262.0" x2="370.0" y2="262.0" stroke="currentColor" stroke-width="1.2"/><line x1="190.0" y1="257.0" x2="190.0" y2="267.0" stroke="currentColor" stroke-width="1.2"/><line x1="250.0" y1="257.0" x2="250.0" y2="267.0" stroke="currentColor" stroke-width="1.2"/><line x1="310.0" y1="257.0" x2="310.0" y2="267.0" stroke="currentColor" stroke-width="1.2"/><text x="250.0" y="282.0" font-size="12" text-anchor="middle">x = 0</text><text x="380.0" y="266.0" font-size="13" text-anchor="start" font-style="italic">x</text><path d="M378,262 L368,257 L368,267 Z" fill="currentColor"/></svg>';

// Phase-space comparison of integrators for x'' = -w^2 x, in scaled coordinates
// (x/A, v/(wA)), released from rest at x = A. h = w*dt is the step size and
// n = floor(s/h) the number of steps taken by time w*t = s.
const N = 'floor(s/h)';
const ALPHA = 'arccos(1 - h^2/2)'; // rotation angle per semi-implicit step

export const lesson: Lesson = {
  id: 'phys-simple-harmonic-motion',
  title: 'Simple Harmonic Motion',
  summary: 'A mass on a spring obeys $\\ddot{x} = -(k/m)x$. Solve that differential equation, read amplitude, angular frequency and phase from $x(t) = A\\cos(\\omega t + \\phi)$, find velocity and acceleration, fit initial conditions, and watch the motion trace an ellipse in phase space.',
  minutes: 21,
  objectives: [
    'Apply Newton\'s second law to a mass on a spring to obtain $\\ddot{x} = -\\omega^2 x$ with $\\omega = \\sqrt{k/m}$',
    'Verify that $x(t) = A\\cos(\\omega t + \\phi)$ solves the equation, and find $A$ and $\\phi$ from initial conditions',
    'Relate amplitude, angular frequency, frequency, period and phase constant, and explain why the period does not depend on the amplitude',
    'Compute velocity and acceleration in SHM, including their maximum values and where they occur',
    'Describe SHM as an ellipse in phase space, and use it to compare explicit and semi-implicit Euler',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Restoring forces and the mass on a spring',
      blocks: [
        {
          type: 'p',
          text: 'Pull a block attached to a spring and let go. It slides back, overshoots, comes back again, and (without friction) repeats forever. The cause is a **restoring force**: a force that always points back toward the equilibrium position and grows the farther you go.',
        },
        {
          type: 'p',
          text: 'Choose the block as the system and put the $x$ axis along the spring with $x = 0$ at the equilibrium position (spring relaxed). On a frictionless horizontal surface, gravity and the normal force cancel, and the only horizontal force is the spring\'s, given by [[hookes-law|Hooke\'s law]]:',
        },
        {
          type: 'math',
          tex: 'F_x = -kx',
          caption: '$k$ is the spring constant in $\\text{N/m}$. The minus sign is the whole story: for $x > 0$ the force points in $-x$; for $x < 0$ it points in $+x$. Either way, back toward $x = 0$.',
        },
        {
          type: 'figure',
          svg: SPRING3_SVG,
          alt: 'Three copies of a block on a spring attached to a wall. Top: the block is left of the dashed equilibrium line, the spring is compressed, and a red arrow on the block points right. Middle: the block is at equilibrium with no arrow. Bottom: the block is right of the line, the spring is stretched, and a red arrow points left.',
          caption: 'The spring force always points toward equilibrium, and its size is proportional to the displacement $x$ of the block from equilibrium.',
          maxWidth: 460,
        },
        {
          type: 'derivation',
          title: 'Newton\'s second law for the block',
          steps: [
            { tex: '\\sum F_x = ma_x \\implies -kx = m\\frac{d^2x}{dt^2}', why: 'The spring force is the only horizontal force, and $a_x$ is the second [[derivative]] of position.' },
            { tex: '\\frac{d^2x}{dt^2} = -\\frac{k}{m}\\,x', why: 'Divide by $m$.' },
            { tex: '\\ddot{x} = -\\omega^2 x, \\qquad \\omega = \\sqrt{\\frac{k}{m}}', why: 'Name the positive constant $k/m$ as $\\omega^2$ (dots mean time derivatives). Units: $\\sqrt{(\\text{N/m})/\\text{kg}} = \\sqrt{1/\\text{s}^2} = \\text{s}^{-1}$, a rate.' },
          ],
          result: 'The block\'s motion is governed by a [[differential-equation]]: its acceleration is proportional to its displacement and points the opposite way.',
        },
        {
          type: 'definition',
          term: 'Simple harmonic motion (SHM)',
          text: '[[phys-simple-harmonic-motion|Simple harmonic motion]] is motion that obeys $\\ddot{x} = -\\omega^2 x$ for some constant $\\omega > 0$. Any system with a linear [[phys-restoring-force|restoring force]] $F = -kx$ moves this way.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'This is not constant acceleration',
          text: 'The acceleration changes as $x$ changes, so the constant-acceleration equations such as $x = x_0 + v_0t + \\tfrac12 at^2$ do **not** apply. Using them for a spring is one of the most common exam mistakes. You need the solution of the differential equation instead.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'mcq',
      prompt: 'A block on a horizontal spring oscillates between $x = -A$ and $x = +A$. At the instant it is at $x = +A$, which statement is correct?',
      options: [
        { text: 'Its velocity is zero and its acceleration is zero', why: 'Zero velocity does not mean zero acceleration. At $x = +A$ the spring is stretched the most, so the force, and the acceleration, are the largest. This is the same mistake as "acceleration is zero at the top of a throw".' },
        { text: 'Its velocity is zero and its acceleration has maximum magnitude, pointing in $-x$', correct: true, why: 'The block is momentarily at rest at the turning point, while $a_x = -\\omega^2 x = -\\omega^2 A$ is as large as it gets, pointing back toward equilibrium.' },
        { text: 'Its velocity is maximum and its acceleration is zero', why: 'That describes $x = 0$, where the spring force vanishes and the block moves fastest.' },
        { text: 'Its velocity is zero and its acceleration has maximum magnitude, pointing in $+x$', why: 'The restoring force points toward equilibrium, which from $x = +A$ is the $-x$ direction.' },
      ],
      explanation: 'At a turning point the velocity changes sign, so it must pass through zero, but it is changing as fast as it ever does: $a_x = -\\omega^2 x$ is largest in magnitude where $|x|$ is largest. At equilibrium the reverse holds: $a = 0$ and $|v|$ is maximal.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Solving ẍ = −ω²x',
      blocks: [
        {
          type: 'p',
          text: 'We need a function whose second derivative is $-\\omega^2$ times itself. You know two from calculus: $\\frac{d^2}{dt^2}\\cos(\\omega t) = -\\omega^2\\cos(\\omega t)$, and the same for sine. Shifting the angle by a constant keeps the property, which suggests the guess $x(t) = A\\cos(\\omega t + \\phi)$.',
        },
        {
          type: 'derivation',
          title: 'Check that $x(t) = A\\cos(\\omega t + \\phi)$ solves the equation',
          steps: [
            { tex: '\\dot{x} = -A\\omega\\sin(\\omega t + \\phi)', why: 'Chain rule: the derivative of $\\cos u$ is $-\\sin u\\cdot u\'$, with $u\' = \\omega$.' },
            { tex: '\\ddot{x} = -A\\omega^2\\cos(\\omega t + \\phi)', why: 'Differentiate again: the derivative of $-\\sin u$ is $-\\cos u\\cdot\\omega$.' },
            { tex: '= -\\omega^2\\,\\big[A\\cos(\\omega t + \\phi)\\big] = -\\omega^2 x \\ \\checkmark', why: 'The bracket is $x(t)$ itself. The equation holds for **every** $A$ and $\\phi$.' },
          ],
          result: 'Every function $x(t) = A\\cos(\\omega t + \\phi)$ is a solution. The angular frequency is fixed by the physics, $\\omega = \\sqrt{k/m}$, while $A$ and $\\phi$ are free.',
        },
        {
          type: 'theorem',
          name: 'General solution of SHM',
          tex: 'x(t) = A\\cos(\\omega t + \\phi), \\qquad \\omega = \\sqrt{\\frac{k}{m}}, \\quad T = \\frac{2\\pi}{\\omega} = 2\\pi\\sqrt{\\frac{m}{k}}, \\quad f = \\frac{1}{T}',
          text: 'Here $A \\ge 0$ is the [[amplitude]], $\\omega$ the [[angular-frequency]] (rad/s), $T$ the [[period]] and $f$ the [[frequency]] (Hz). The [[phys-phase-constant|phase constant]] $\\phi$ says where in its cycle the motion is at $t = 0$. Equivalently $x(t) = C_1\\cos\\omega t + C_2\\sin\\omega t$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why exactly two free constants?',
          text: 'The equation is second order: it fixes the acceleration once you know $x$, and then position and velocity evolve step by step (think [[eulers-method|Euler\'s method]]). So you need two starting numbers, $x(0)$ and $v(0)$, and once you have them the motion is completely determined. A family of solutions with two adjustable constants can match any pair $(x_0, v_0)$, so it contains every solution.',
        },
        {
          type: 'derivation',
          title: 'From initial conditions to $A$ and $\\phi$',
          steps: [
            { tex: 'm = 0.50\\,\\text{kg},\\ k = 200\\,\\text{N/m} \\implies \\omega = \\sqrt{\\frac{200}{0.50}} = 20\\,\\text{rad/s}', why: 'The physics fixes $\\omega$. The period is $T = 2\\pi/20 = 0.314\\,\\text{s}$.' },
            { tex: 'x(0) = A\\cos\\phi = 0.030\\,\\text{m}, \\qquad v(0) = -A\\omega\\sin\\phi = +0.80\\,\\text{m/s}', why: 'Put $t = 0$ into $x(t)$ and $\\dot{x}(t)$. The block starts $3.0\\,\\text{cm}$ right of equilibrium, moving right.' },
            { tex: 'A^2 = (A\\cos\\phi)^2 + (A\\sin\\phi)^2 = x_0^2 + \\left(\\frac{v_0}{\\omega}\\right)^2', why: 'Square and add, using $\\cos^2 + \\sin^2 = 1$; note $A\\sin\\phi = -v_0/\\omega$.' },
            { tex: 'A = \\sqrt{0.030^2 + 0.040^2} = 0.050\\,\\text{m}', why: '$v_0/\\omega = 0.80/20 = 0.040\\,\\text{m}$. A 3-4-5 triangle.' },
            { tex: '\\cos\\phi = \\frac{0.030}{0.050} = 0.6, \\quad \\sin\\phi = -\\frac{0.040}{0.050} = -0.8 \\implies \\phi = -0.927\\,\\text{rad}', why: 'Both signs matter: $\\cos\\phi > 0$ and $\\sin\\phi < 0$ put $\\phi$ in quadrant IV. In code, `atan2(-v0/w, x0)` picks the quadrant for you.' },
          ],
          result: '$x(t) = (0.050\\,\\text{m})\\cos(20t - 0.927)$. The block will move out to $5.0\\,\\text{cm}$ before turning back.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Amplitude does not change the period',
          text: '$T = 2\\pi\\sqrt{m/k}$ contains no $A$. A bigger push means a bigger distance, but also a bigger force (it is proportional to $x$), and the two effects cancel exactly. This **isochronism** is why springs and balance wheels make good clocks. It holds only as long as Hooke\'s law holds.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'numeric',
      prompt: 'A $0.250\\,\\text{kg}$ block oscillates on a spring with $k = 40.0\\,\\text{N/m}$. Find the period of the motion in seconds, to 3 significant figures.',
      hint: '$T = 2\\pi\\sqrt{m/k}$. Check: heavier means slower, stiffer means faster.',
      label: '$T =$',
      unit: 's',
      answer: '2pi*sqrt(0.25/40)',
      answerTex: '0.497',
      tolerance: 0.003,
      explanation: '$\\omega = \\sqrt{k/m} = \\sqrt{40.0/0.250} = 12.65\\,\\text{rad/s}$, so $T = 2\\pi/\\omega = 2\\pi\\sqrt{0.250/40.0} = 0.497\\,\\text{s}$. Forgetting the $2\\pi$ gives $0.079\\,\\text{s}$ (that is $1/\\omega$, not the period), and flipping the fraction gives $79\\,\\text{s}$. A quick check: a mass of a quarter kilogram on a moderately stiff spring bobs about twice per second, so half a second is reasonable.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Amplitude, frequency and phase',
      blocks: [
        {
          type: 'p',
          text: 'Each constant in $x(t) = A\\cos(\\omega t + \\phi)$ controls one feature of the graph, just as for any [[sinusoid]] in trigonometry. The graph below is a chart recorder: the mass on the left bobs up and down, and a pen draws its position against time.',
        },
        {
          type: 'graph',
          x: [-1.5, 10],
          y: [-2.3, 2.3],
          xStep: 1,
          yStep: 0.5,
          height: 300,
          functions: [
            { expr: 'a*cos(w*x + p)', domain: [0, 10], color: 'gray', dashed: true },
            { expr: 'a*cos(w*x + p)', domain: [0, 's'], color: 'blue', label: '$x(t) = A\\cos(\\omega t + \\phi)$' },
          ],
          segments: [
            { from: [-0.8, 2.3], to: [-0.8, 'a*cos(w*s + p)'], color: 'gray' },
            { from: [-0.8, 'a*cos(w*s + p)'], to: ['s', 'a*cos(w*s + p)'], color: 'gray', dashed: true },
          ],
          points: [
            { x: -0.8, y: 'a*cos(w*s + p)', color: 'red', label: 'mass' },
            { x: 's', y: 'a*cos(w*s + p)', color: 'blue' },
          ],
          hlines: [{ y: 0, color: 'gray' }],
          sliders: [
            { name: 'a', min: 0.2, max: 2, step: 0.1, value: 1.5, label: 'amplitude $A$ (m)' },
            { name: 'w', min: 0.5, max: 6, step: 0.1, value: 2, label: 'angular frequency $\\omega$ (rad/s)' },
            { name: 'p', min: -3.14, max: 3.14, step: 0.01, value: 0, label: 'phase constant $\\phi$ (rad)' },
            { name: 's', min: 0, max: 10, step: 0.01, value: 0, label: 'time $t$ (s)', play: true, speed: 2 },
          ],
          readouts: [
            { label: '$T = 2\\pi/\\omega =$', expr: '2pi/w', digits: 3 },
            { label: '$f = \\omega/2\\pi =$', expr: 'w/(2pi)', digits: 3 },
            { label: '$x(t) =$', expr: 'a*cos(w*s + p)', digits: 3 },
          ],
          caption: 'Press ▶ (5 seconds of animation for 10 seconds of motion). $A$ sets the height of the swing; $\\omega$ sets how many radians of the cycle pass per second, so doubling it halves $T$; $\\phi$ slides the starting point along the cycle. With $\\phi = 0$ the mass starts at the top ($x = +A$); with $\\phi = -\\pi/2$ it starts at equilibrium moving up.',
        },
        {
          type: 'table',
          headers: ['Symbol', 'Name', 'Units', 'Set by'],
          rows: [
            ['$A$', 'amplitude', 'm', 'initial conditions'],
            ['$\\omega$', 'angular frequency', 'rad/s', 'physics: $\\sqrt{k/m}$'],
            ['$f = \\omega/2\\pi$', 'frequency', 'Hz (cycles/s)', 'physics'],
            ['$T = 1/f$', 'period', 's', 'physics'],
            ['$\\phi$', 'phase constant', 'rad', 'initial conditions'],
          ],
        },
        {
          type: 'derivation',
          title: 'Reading a motion: $x(t) = (0.12\\,\\text{m})\\cos(4\\pi t - \\pi/3)$',
          steps: [
            { tex: 'A = 0.12\\,\\text{m}, \\qquad \\omega = 4\\pi\\,\\text{rad/s}', why: 'Match term by term with $A\\cos(\\omega t + \\phi)$.' },
            { tex: 'f = \\frac{\\omega}{2\\pi} = 2.0\\,\\text{Hz}, \\qquad T = \\frac{1}{f} = 0.50\\,\\text{s}', why: 'One cycle is $2\\pi$ radians, so divide by $2\\pi$ to count cycles.' },
            { tex: '\\phi = -\\frac{\\pi}{3}: \\quad x(0) = 0.12\\cos\\left(-\\frac{\\pi}{3}\\right) = 0.060\\,\\text{m}', why: 'At $t = 0$ the mass is halfway out.' },
            { tex: 'v(0) = -A\\omega\\sin\\left(-\\frac{\\pi}{3}\\right) = +(0.12)(4\\pi)\\frac{\\sqrt3}{2} = +1.31\\,\\text{m/s}', why: 'Moving outward, toward $x = +A$. The phase constant encodes both the starting position and the starting direction.' },
          ],
          result: 'The cosine peaks when $4\\pi t - \\pi/3 = 0$, at $t = 1/12\\,\\text{s}$. In trig language the graph is $A\\cos(\\omega t)$ shifted right by $-\\phi/\\omega$; see [[phase-shift]].',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'ω is not f',
          text: 'Angular frequency $\\omega$ counts **radians** per second; frequency $f$ counts **cycles** per second. They differ by $2\\pi$: a $50\\,\\text{Hz}$ vibration has $\\omega = 314\\,\\text{rad/s}$. Mixing them up changes answers by a factor of about 6 (or about 40 for accelerations, which go as $\\omega^2$).',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'expr',
      prompt: 'A mass moves with $x(t) = 0.04\\cos(5t + 0.6)$ (meters, seconds). Find its velocity $v(t)$.',
      hint: 'Differentiate with the chain rule.',
      label: '$v(t) =$',
      answer: '-0.2*sin(5t + 0.6)',
      answerTex: '-0.20\\sin(5t + 0.6)',
      variables: ['t'],
      explanation: '$v = \\dfrac{dx}{dt} = 0.04\\cdot(-\\sin(5t + 0.6))\\cdot 5 = -0.20\\sin(5t + 0.6)$ m/s. The amplitude of the velocity is $A\\omega = (0.04)(5) = 0.20\\,\\text{m/s}$. Forgetting the inner derivative $5$ gives $-0.04\\sin(5t + 0.6)$, whose units do not even work out (that has units of meters, not m/s).',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'Velocity and acceleration in SHM',
      blocks: [
        {
          type: 'p',
          text: 'Differentiate the solution and you get the whole kinematic picture:',
        },
        {
          type: 'math',
          tex: 'x = A\\cos(\\omega t + \\phi), \\qquad v = -A\\omega\\sin(\\omega t + \\phi), \\qquad a = -A\\omega^2\\cos(\\omega t + \\phi) = -\\omega^2 x',
          caption: 'Maximum speed $v_{\\max} = A\\omega$ (at $x = 0$); maximum acceleration $a_{\\max} = A\\omega^2$ (at $x = \\pm A$).',
        },
        {
          type: 'graph',
          x: [0, 6.3],
          y: [-4.5, 4.5],
          xStep: 1,
          yStep: 1,
          height: 300,
          functions: [
            { expr: 'cos(2x)', color: 'blue', label: '$x(t)$, $A = 1\\,\\text{m}$' },
            { expr: '-2sin(2x)', color: 'green', label: '$v(t)$, amplitude $A\\omega$' },
            { expr: '-4cos(2x)', color: 'red', label: '$a(t)$, amplitude $A\\omega^2$' },
          ],
          vlines: [{ x: 's', color: 'gray' }],
          points: [
            { x: 's', y: 'cos(2s)', color: 'blue' },
            { x: 's', y: '-2sin(2s)', color: 'green' },
            { x: 's', y: '-4cos(2s)', color: 'red' },
          ],
          sliders: [{ name: 's', min: 0, max: 6.3, step: 0.01, value: 0.4, label: 'time $t$ (s)', play: true, speed: 1.4 }],
          readouts: [
            { label: '$x$ (m):', expr: 'cos(2s)', digits: 3 },
            { label: '$v$ (m/s):', expr: '-2sin(2s)', digits: 3 },
            { label: '$a$ (m/s²):', expr: '-4cos(2s)', digits: 3 },
          ],
          caption: 'Here $\\omega = 2\\,\\text{rad/s}$. Play it and watch: whenever $x$ is at a peak, $v = 0$ and $a$ is at its most negative; whenever $x$ crosses zero, $|v|$ is largest and $a = 0$. The red curve is always the blue one flipped and scaled by $\\omega^2 = 4$. Velocity reaches each peak a quarter cycle before position: $v$ **leads** $x$ by $\\pi/2$.',
        },
        {
          type: 'p',
          text: 'You can also get the speed at any **position** without knowing the time. Since $\\cos^2 + \\sin^2 = 1$, $\\left(\\frac{x}{A}\\right)^2 + \\left(\\frac{v}{A\\omega}\\right)^2 = 1$, which rearranges to',
        },
        {
          type: 'math',
          tex: 'v = \\pm\\,\\omega\\sqrt{A^2 - x^2}',
          caption: 'Largest at $x = 0$, zero at $x = \\pm A$. The sign depends on which way the mass is moving.',
        },
        {
          type: 'derivation',
          title: 'Back to the $0.50\\,\\text{kg}$ block ($A = 0.050\\,\\text{m}$, $\\omega = 20\\,\\text{rad/s}$)',
          steps: [
            { tex: 'v_{\\max} = A\\omega = (0.050)(20) = 1.0\\,\\text{m/s}', why: 'At the equilibrium position.' },
            { tex: 'a_{\\max} = A\\omega^2 = (0.050)(20)^2 = 20\\,\\text{m/s}^2 \\approx 2g', why: 'At the turning points. Gentle-looking oscillations can involve large accelerations when $\\omega$ is high.' },
            { tex: '|v|_{x = 0.030} = 20\\sqrt{0.050^2 - 0.030^2} = 0.80\\,\\text{m/s}', why: 'This matches the initial speed we started from at $x_0 = 0.030\\,\\text{m}$, a good consistency check.' },
          ],
          result: 'Peak speed $1.0\\,\\text{m/s}$, peak acceleration $20\\,\\text{m/s}^2$.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Procedural motion in games',
          text: 'Weapon sway, idle breathing and bobbing pickups are usually SHM written directly: `offset = A * std::sin(omega * t + phase)`. If you also need the velocity (for motion blur, or to hand the object over to the physics engine without a jolt), use the derivative `A * omega * std::cos(omega * t + phase)` rather than differencing two frames.',
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'numeric',
      prompt: 'A phone\'s vibration motor moves a small mass in SHM with amplitude $0.50\\,\\text{mm}$ at a frequency of $150\\,\\text{Hz}$. What is the maximum acceleration of the mass, in $\\text{m/s}^2$, to 3 significant figures?',
      hint: 'Convert $f$ to $\\omega$ first, and millimeters to meters.',
      label: '$a_{\\max} =$',
      unit: 'm/s²',
      answer: '0.0005*(2pi*150)^2',
      answerTex: '444',
      tolerance: 3,
      explanation: '$\\omega = 2\\pi f = 2\\pi(150) = 942\\,\\text{rad/s}$, so $a_{\\max} = A\\omega^2 = (5.0 \\times 10^{-4}\\,\\text{m})(942\\,\\text{rad/s})^2 = 444\\,\\text{m/s}^2$, about $45g$. Using $f$ in place of $\\omega$ gives $11.3\\,\\text{m/s}^2$, too small by $(2\\pi)^2 \\approx 39$. The tiny amplitude hides a large acceleration because $a_{\\max}$ grows as the **square** of the frequency.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'concept',
      title: 'Phase space: SHM as an ellipse',
      blocks: [
        {
          type: 'p',
          text: 'The state of an oscillator at any instant is the pair $(x, v)$: knowing both, the equation of motion predicts everything after. Plot that pair as a point in a plane with $x$ across and $v$ up, the [[phys-phase-space|phase space]] of the system, and let time run.',
        },
        {
          type: 'math',
          tex: '\\frac{x^2}{A^2} + \\frac{v^2}{(A\\omega)^2} = 1',
          caption: 'The relation you just used for $v(x)$ says the state moves on an **ellipse** with semi-axes $A$ (position) and $A\\omega$ (velocity), once per period.',
        },
        {
          type: 'graph',
          x: [-2.5, 2.5],
          y: [-5, 5],
          xStep: 0.5,
          yStep: 1,
          height: 320,
          parametric: [{ x: 'a*cos(t)', y: 'a*w*sin(t)', t: [0, '2pi'], color: 'blue', label: 'phase-space path' }],
          points: [{ x: 'a*cos(w*s)', y: '-a*w*sin(w*s)', color: 'red', label: 'state (x, v)' }],
          segments: [
            { from: ['a*cos(w*s)', '-a*w*sin(w*s)'], to: ['a*cos(w*s) - 0.25*a*w*sin(w*s)', '-a*w*sin(w*s) - 0.25*a*w^2*cos(w*s)'], arrow: true, color: 'green' },
          ],
          hlines: [{ y: 0, color: 'gray' }],
          sliders: [
            { name: 'a', min: 0.3, max: 2, step: 0.1, value: 1.5, label: 'amplitude $A$ (m)' },
            { name: 'w', min: 0.5, max: 3, step: 0.1, value: 2, label: '$\\omega$ (rad/s)' },
            { name: 's', min: 0, max: 12, step: 0.01, value: 0, label: 'time $t$ (s)', play: true, speed: 3 },
          ],
          readouts: [
            { label: '$x$ (m):', expr: 'a*cos(w*s)', digits: 3 },
            { label: '$v$ (m/s):', expr: '-a*w*sin(w*s)', digits: 3 },
          ],
          caption: 'Horizontal: position $x$; vertical: velocity $v$. Released from rest at $x = A$, the state runs **clockwise**: above the axis $v > 0$, so $x$ must be increasing, and below it $x$ decreases. The green arrow is the rate of change of the state, $(v, a) = (v, -\\omega^2 x)$. Raise $\\omega$ and the ellipse grows taller: the same swing at a higher frequency needs more speed.',
        },
        {
          type: 'p',
          text: 'Each choice of initial conditions gives its own ellipse, and different ellipses never cross: two curves through the same point would mean the same state has two futures. In the energy lesson that follows, you will see that each ellipse is a curve of constant energy, $\\tfrac12 kx^2 + \\tfrac12 mv^2 = \\tfrac12 kA^2$.',
        },
        {
          type: 'heading',
          text: 'Simulating a spring, and what phase space reveals',
        },
        {
          type: 'p',
          text: 'A game steps the spring forward in time instead of using the cosine. The program below runs our $0.50\\,\\text{kg}$, $200\\,\\text{N/m}$ block with a step $\\Delta t = 0.005\\,\\text{s}$ two ways and prints the phase-space radius $\\sqrt{x^2 + (v/\\omega)^2}$, which should stay equal to $A = 0.050\\,\\text{m}$.',
        },
        {
          type: 'code',
          title: 'spring.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdio>

struct State { double x, v; };

int main() {
    const double m = 0.50, k = 200.0;          // kg, N/m
    const double w = std::sqrt(k / m);         // omega = 20 rad/s
    const double x0 = 0.030, v0 = 0.80;        // m, m/s
    const double A = std::hypot(x0, v0 / w);   // amplitude 0.050 m
    const double phi = std::atan2(-v0 / w, x0);
    const double dt = 0.005;                   // s  (omega*dt = 0.1)

    State semi{x0, v0}, expl{x0, v0};
    auto amp = [w](State s) { return std::hypot(s.x, s.v / w); };  // phase-space radius

    std::printf("  t(s)   exact    semi-impl  explicit | amp semi  amp expl\\n");
    for (int i = 0; i <= 200; ++i) {
        if (i % 20 == 0) {
            double t = i * dt;
            std::printf("%5.2f  %+.4f   %+.4f   %+.4f  |  %.4f    %.4f\\n", t,
                        A * std::cos(w * t + phi), semi.x, expl.x, amp(semi), amp(expl));
        }
        // semi-implicit Euler: new velocity first, then position with the new velocity
        semi.v += (-k / m * semi.x) * dt;
        semi.x += semi.v * dt;
        // explicit Euler: both updates use the old state
        double ax = -k / m * expl.x;
        expl.x += expl.v * dt;
        expl.v += ax * dt;
    }
}`,
          output: `  t(s)   exact    semi-impl  explicit | amp semi  amp expl
 0.00  +0.0300   +0.0300   +0.0300  |  0.0500    0.0500
 0.10  +0.0239   +0.0225   +0.0267  |  0.0478    0.0552
 0.20  -0.0499   -0.0488   -0.0608  |  0.0490    0.0610
 0.30  +0.0176   +0.0181   +0.0225  |  0.0496    0.0674
 0.40  +0.0352   +0.0337   +0.0538  |  0.0476    0.0744
 0.50  -0.0469   -0.0462   -0.0762  |  0.0496    0.0822
 0.60  +0.0039   +0.0049   +0.0034  |  0.0490    0.0908
 0.70  +0.0437   +0.0421   +0.0899  |  0.0478    0.1003
 0.80  -0.0402   -0.0400   -0.0856  |  0.0500    0.1108
 0.90  -0.0102   -0.0088   -0.0321  |  0.0484    0.1224
 1.00  +0.0488   +0.0473   +0.1336  |  0.0483    0.1352`,
          annotations: [
            { lines: '8-11', text: 'The exact solution for comparison: $\\omega$, $A$ and $\\phi$ from the initial conditions, as in the worked example.' },
            { lines: '25-26', text: 'Semi-implicit Euler: the position update uses the velocity just computed.' },
            { lines: '28-30', text: 'Explicit Euler: compute the acceleration from the old position, then update both from the old state.' },
          ],
        },
        {
          type: 'graph',
          x: [-2.6, 2.6],
          y: [-2.6, 2.6],
          equal: true,
          parametric: [
            { x: 'cos(t)', y: '-sin(t)', t: [0, '2pi'], color: 'gray', dashed: true, label: 'exact' },
            { x: '(1 + h^2)^(t/2)*cos(t*arctan(h))', y: '-(1 + h^2)^(t/2)*sin(t*arctan(h))', t: [0, '4pi/h'], color: 'red', label: 'explicit Euler' },
            { x: `cos(t*${ALPHA}) - (h^2/2)*sin(t*${ALPHA})/sin(${ALPHA})`, y: `-h*sin(t*${ALPHA})/sin(${ALPHA})`, t: [0, `2pi/${ALPHA}`], color: 'blue', label: 'semi-implicit Euler' },
          ],
          points: [
            { x: 'cos(s)', y: '-sin(s)', color: 'gray' },
            { x: `(1 + h^2)^(${N}/2)*cos(${N}*arctan(h))`, y: `-(1 + h^2)^(${N}/2)*sin(${N}*arctan(h))`, color: 'red' },
            { x: `cos(${N}*${ALPHA}) - (h^2/2)*sin(${N}*${ALPHA})/sin(${ALPHA})`, y: `-h*sin(${N}*${ALPHA})/sin(${ALPHA})`, color: 'blue' },
          ],
          sliders: [
            { name: 'h', min: 0.05, max: 0.6, step: 0.01, value: 0.3, label: 'step size $\\omega\\,\\Delta t$' },
            { name: 's', min: 0, max: 12.56, step: 0.01, value: 0, label: 'time $\\omega t$ (two periods)', play: true, speed: 3.14 },
          ],
          caption: 'Phase space in scaled units, $x/A$ across and $v/(A\\omega)$ up, starting from rest at $x = A$. Press ▶ to run two periods. The exact state circles forever. Explicit Euler (red) multiplies the radius by $\\sqrt{1 + (\\omega\\Delta t)^2}$ every step, so it spirals outward: the spring gains energy from nowhere. Semi-implicit Euler (blue) stays on a slightly tilted closed loop, so its amplitude wobbles but never grows. Shrink the step and both approach the circle.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Why game engines care',
          text: 'Stiff springs show up everywhere in games: ragdoll joints, vehicle suspensions, cloth, soft constraints. An integrator that spirals outward in phase space makes them explode. Semi-implicit Euler keeps every oscillator bounded as long as $\\omega\\Delta t < 2$, which is one reason it is the standard choice. The game-physics unit analyzes these integrators properly.',
        },
      ],
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'truefalse',
      prompt: 'If you pull a mass on an ideal spring twice as far before releasing it, the period of its oscillation doubles.',
      answer: false,
      explanation: 'False. $T = 2\\pi\\sqrt{m/k}$ does not depend on the amplitude. Twice the amplitude means twice the distance per cycle, but also twice the force and acceleration at every corresponding point, and twice the maximum speed ($A\\omega$). The cycle takes exactly the same time. Only the mass and the spring constant set the period.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'Vertical springs, and why SHM is everywhere',
      blocks: [
        {
          type: 'p',
          text: 'Hang the mass from a vertical spring and gravity joins in. You might expect a messier equation, but gravity only **shifts the equilibrium**. Take $+y$ downward with $y = 0$ at the end of the relaxed spring.',
        },
        {
          type: 'derivation',
          title: 'A mass hanging on a spring',
          steps: [
            { tex: 'm\\ddot{y} = mg - ky', why: 'Newton\'s second law with $+y$ down: weight $mg$ down, spring force $ky$ up.' },
            { tex: 'y_{\\text{eq}} = \\frac{mg}{k}', why: 'At equilibrium the acceleration is zero, so $ky_{\\text{eq}} = mg$. This is the static stretch, call it $d$.' },
            { tex: 'u = y - y_{\\text{eq}} \\implies m\\ddot{u} = mg - k(u + y_{\\text{eq}}) = -ku', why: 'Measure displacement from the new equilibrium; $mg$ and $ky_{\\text{eq}}$ cancel, and $\\ddot{u} = \\ddot{y}$ because $y_{\\text{eq}}$ is constant.' },
            { tex: '\\omega = \\sqrt{\\frac{k}{m}} = \\sqrt{\\frac{g}{d}}, \\qquad T = 2\\pi\\sqrt{\\frac{d}{g}}', why: 'Same SHM equation, same $\\omega$. Using $k/m = g/d$, you can find the period just by measuring how far the mass stretches the spring.' },
          ],
          result: 'A vertical spring oscillates about its stretched equilibrium with the same $\\omega = \\sqrt{k/m}$ as a horizontal one.',
        },
        {
          type: 'p',
          text: '**Why SHM is everywhere.** Almost any system near a stable equilibrium behaves like a spring. If a particle has potential energy $U(x)$ with a minimum at $x_0$, then near $x_0$ the graph of $U$ looks like a parabola. In the language of [[taylor-series|Taylor series]] (or just a second-order tangent-line approximation): $U(x) \\approx U(x_0) + U\'(x_0)(x - x_0) + \\tfrac12 U\'\'(x_0)(x - x_0)^2$, and $U\'(x_0) = 0$ at a minimum. So the force is',
        },
        {
          type: 'math',
          tex: 'F = -\\frac{dU}{dx} \\approx -U\'\'(x_0)\\,(x - x_0), \\qquad k_{\\text{eff}} = U\'\'(x_0)',
          caption: 'Small oscillations about any smooth minimum are simple harmonic, with $\\omega = \\sqrt{U\'\'(x_0)/m}$. Atoms in a crystal, a ship rolling in waves, a car bouncing on its suspension and a pendulum (next lesson) all qualify.',
        },
        {
          type: 'callout',
          variant: 'analogy',
          title: 'A tunnel through the Earth',
          text: 'In the gravitation unit you saw that inside a uniform Earth, $g(r) = g_0\\,r/R$. Drop a ball into a straight tunnel through the center and the force on it is $-(mg_0/R)\\,r$: a perfect Hooke\'s-law spring with $k/m = g_0/R$. It oscillates with $T = 2\\pi\\sqrt{R/g_0} = 84\\,\\text{min}$, exactly the period of a satellite skimming the surface. That is no coincidence: uniform circular motion, viewed edge-on, **is** simple harmonic motion.',
        },
      ],
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'numeric',
      prompt: 'Hanging a mass on a vertical spring stretches it by $4.90\\,\\text{cm}$ at equilibrium. If the mass is pulled down a little and released, what is the period of its oscillation? Use $g = 9.80\\,\\text{m/s}^2$ and give the period in seconds to 3 significant figures.',
      hint: 'At equilibrium $kd = mg$, so $k/m = g/d$. You do not need the mass.',
      label: '$T =$',
      unit: 's',
      answer: '2pi*sqrt(0.049/9.8)',
      answerTex: '0.444',
      tolerance: 0.003,
      explanation: 'From $kd = mg$, $\\omega^2 = k/m = g/d = 9.80/0.0490 = 200\\,\\text{s}^{-2}$, so $\\omega = 14.1\\,\\text{rad/s}$ and $T = 2\\pi/\\omega = 2\\pi\\sqrt{0.0490/9.80} = 0.444\\,\\text{s}$. Using $d = 4.90$ (centimeters left unconverted) gives $4.44\\,\\text{s}$, ten times too long.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'error',
      prompt: 'A $2.0\\,\\text{kg}$ block on a spring with $k = 50\\,\\text{N/m}$ is at $x_0 = 0.12\\,\\text{m}$ moving at $v_0 = 0.80\\,\\text{m/s}$ when the clock starts. A student finds the amplitude and the maximum speed. Tap the first line with a mistake.',
      lines: [
        '$\\omega = \\sqrt{k/m} = \\sqrt{50/2.0} = 5.0\\,\\text{rad/s}$',
        'At $t = 0$: $A\\cos\\phi = x_0 = 0.12\\,\\text{m}$ and $-A\\omega\\sin\\phi = v_0 = 0.80\\,\\text{m/s}$',
        '$A = x_0 + \\dfrac{v_0}{\\omega} = 0.12 + 0.16 = 0.28\\,\\text{m}$',
        '$v_{\\max} = A\\omega = (0.28)(5.0) = 1.4\\,\\text{m/s}$',
      ],
      errorLines: [3],
      explanation: 'Line 3 adds the two pieces, but they are the legs of a right triangle: $A\\cos\\phi = x_0$ and $A\\sin\\phi = -v_0/\\omega$, so squaring and adding gives $A = \\sqrt{x_0^2 + (v_0/\\omega)^2} = \\sqrt{0.12^2 + 0.16^2} = 0.20\\,\\text{m}$. Then $v_{\\max} = A\\omega = 1.0\\,\\text{m/s}$. A sanity check catches the error: with $A = 0.20\\,\\text{m}$, $v$ at $x = 0.12\\,\\text{m}$ is $\\omega\\sqrt{A^2 - x^2} = 5.0(0.16) = 0.80\\,\\text{m/s}$, matching $v_0$.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'order',
      prompt: 'Put the steps for predicting the motion of a mass on a spring, given its initial position and velocity, in order.',
      lines: [
        'Choose coordinates with $x = 0$ at equilibrium and write $m\\ddot{x} = -kx$.',
        'Read off $\\omega = \\sqrt{k/m}$.',
        'Write the general solution $x(t) = A\\cos(\\omega t + \\phi)$ and its derivative $v(t)$.',
        'Set $t = 0$ and solve $x(0) = x_0$, $v(0) = v_0$ for $A$ and $\\phi$.',
        'Check: $A \\ge |x_0|$, the sign of $v(0)$ matches $v_0$, and the units work.',
      ],
      explanation: 'The physics (the force law in a sensible coordinate system) fixes the equation, the equation fixes $\\omega$, the general solution carries two unknown constants, and only the initial conditions can pin them down. The last check catches the most common slips, such as adding instead of combining in quadrature, or choosing $\\phi$ in the wrong quadrant.',
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'fill',
      prompt: 'Complete the description of simple harmonic motion.',
      template: 'In SHM the acceleration is proportional to ___ and points ___ it. The period depends on the mass and the spring constant but not on ___.',
      blanks: [{ answers: ['the displacement'] }, { answers: ['opposite to'] }, { answers: ['the amplitude'] }],
      wordBank: ['the displacement', 'the velocity', 'opposite to', 'along', 'the amplitude', 'the spring constant'],
      explanation: 'The defining equation is $a = -\\omega^2 x$: acceleration proportional to the displacement from equilibrium, with a minus sign meaning it points the opposite way. The period $T = 2\\pi\\sqrt{m/k}$ depends on $m$ and $k$ only, not on how far you pull: that is isochronism.',
    },
  ],
  takeaways: [
    'A linear restoring force $F = -kx$ gives $\\ddot{x} = -\\omega^2 x$ with $\\omega = \\sqrt{k/m}$: simple harmonic motion. It is not constant acceleration.',
    'The general solution is $x(t) = A\\cos(\\omega t + \\phi)$; $\\omega$ comes from the physics, while $A$ and $\\phi$ come from the initial conditions: $A = \\sqrt{x_0^2 + (v_0/\\omega)^2}$.',
    '$T = 2\\pi\\sqrt{m/k}$ and $f = 1/T = \\omega/2\\pi$; the period does not depend on the amplitude.',
    '$v = -A\\omega\\sin(\\omega t + \\phi)$ and $a = -\\omega^2x$: $v_{\\max} = A\\omega$ at equilibrium, $a_{\\max} = A\\omega^2$ at the turning points, and $v = \\pm\\omega\\sqrt{A^2 - x^2}$.',
    'In phase space $(x, v)$, SHM is a clockwise ellipse. Explicit Euler spirals outward; semi-implicit Euler stays on a closed loop.',
    'Gravity only shifts a vertical spring\'s equilibrium, and small oscillations about any smooth potential minimum are SHM with $k_{\\text{eff}} = U\'\'(x_0)$.',
  ],
  reading: [
    {
      title: 'OpenStax University Physics Volume 1, Chapter 15: Oscillations',
      url: 'https://openstax.org/details/books/university-physics-volume-1',
      source: 'openstax',
      note: 'Section 15.1 develops simple harmonic motion from Hooke\'s law, with worked examples on initial conditions and vertical springs.',
    },
    {
      title: 'Simple harmonic motion',
      url: 'https://en.wikipedia.org/wiki/Simple_harmonic_motion',
      source: 'wikipedia',
      note: 'The equation of motion, its solutions, and many physical examples in one place.',
    },
    {
      title: 'Phase space',
      url: 'https://en.wikipedia.org/wiki/Phase_space',
      source: 'wikipedia',
      note: 'How physicists describe a system\'s state as a point moving through position–momentum space, with the harmonic oscillator as the first example.',
    },
    {
      title: 'PhET Interactive Simulations',
      url: 'https://phet.colorado.edu/',
      source: 'other',
      note: 'Try the "Masses and Springs" simulation: change mass, spring constant and amplitude and time the oscillations yourself.',
    },
  ],
};
