import type { Lesson } from '../../types';

// Skater model: body I = 1.0 kg·m², hands+arms as 2 × 3.0 kg at distance a. Starts arms out (0.8 m) at 2.0 rad/s.
const I_OUT = '(1 + 6*0.8^2)';
const I_IN = '(1 + 6*a^2)';
const W_IN = `(${I_OUT}*2/${I_IN})`;

export const lesson: Lesson = {
  id: 'phys-angular-momentum',
  title: 'Angular Momentum',
  summary: 'Angular momentum L = r × p and L = Iω, the law τ = dL/dt, and its conservation: spinning skaters, collisions that make things rotate, reaction wheels and a first look at gyroscopes.',
  minutes: 19,
  objectives: [
    'Compute the angular momentum of a particle, $\\vec{L} = \\vec{r} \\times \\vec{p}$, including for straight-line motion',
    'Show that a rigid body rotating about a fixed axis has $L = I\\omega$',
    'Derive $\\sum\\vec{\\tau}_{\\text{ext}} = d\\vec{L}/dt$ and state when angular momentum is conserved',
    'Solve problems where $I$ changes (spinning skater) and collisions with rotation (bullet into a door), and track the kinetic energy',
    'Explain qualitatively why a spinning gyroscope precesses instead of falling',
  ],
  steps: [
    {
      kind: 'concept',
      title: 'Angular momentum of a particle',
      blocks: [
        {
          type: 'p',
          text: 'Linear momentum $\\vec{p} = m\\vec{v}$ measures "how much motion" an object carries in a straight line. Its rotational partner measures how much motion is going **around** a chosen point. It is built exactly like torque was built from force: take the [[cross-product]] with the position vector.',
        },
        {
          type: 'definition',
          term: 'Angular momentum of a particle',
          text: 'The [[phys-angular-momentum]] of a particle about a point $O$ is $\\vec{L} = \\vec{r} \\times \\vec{p} = m\\,\\vec{r} \\times \\vec{v}$, where $\\vec{r}$ runs from $O$ to the particle. Magnitude: $L = rp\\sin\\phi = r_\\perp p$. Units: kg·m²/s. In the plane, $L_z = m(xv_y - yv_x)$, positive for counterclockwise motion.',
        },
        {
          type: 'figure',
          svg: /*fig:am-particle*/`<svg viewBox="0 0 470 245" xmlns="http://www.w3.org/2000/svg"><line x1="20" y1="70" x2="460" y2="70" stroke="currentColor" class="s-gray" stroke-width="1.2" stroke-dasharray="5 4"/><text x="458" y="90" font-size="12" text-anchor="end" class="t-gray">path</text><circle cx="90" cy="200" r="5" fill="currentColor"/><text x="82" y="220" font-size="14" text-anchor="end" font-weight="600">O</text><line x1="90" y1="200" x2="290.6" y2="76.3" stroke="currentColor" class="s-blue" stroke-width="2.2"/><path d="M296,73 L286,73.9 L290.7,81.6 Z" fill="currentColor" class="f-blue"/><text x="205" y="150" font-size="15" text-anchor="middle" class="t-blue" font-style="italic" font-weight="600">r</text><line x1="300" y1="70" x2="393.7" y2="70" stroke="currentColor" class="s-red" stroke-width="2.6"/><path d="M400,70 L391,65.5 L391,74.5 Z" fill="currentColor" class="f-red"/><text x="396" y="58" font-size="14" text-anchor="end" class="t-red" font-style="italic">p = mv</text><circle cx="300" cy="70" r="7" fill="currentColor" class="f-purple"/><line x1="90" y1="200" x2="90" y2="70" stroke="currentColor" class="s-green" stroke-width="2.2"/><text x="82" y="140" font-size="14" text-anchor="end" class="t-green" font-style="italic">r⊥ = d</text><path d="M90,80 L100,80 L100,70" fill="none" stroke="currentColor" class="s-green" stroke-width="1.3"/><line x1="300" y1="70" x2="351" y2="38.4" stroke="currentColor" class="s-blue" stroke-width="1.1" stroke-dasharray="5 4"/><path d="M330,70 A30,30 0 0 0 325.5,54.2" fill="none" stroke="currentColor" class="s-orange" stroke-width="1.6"/><text x="342" y="56" font-size="14" text-anchor="middle" class="t-orange" font-style="italic">φ</text><text x="250" y="235" font-size="12" text-anchor="middle" class="t-gray">L = r p sin φ = m v d, the same at every point of the path</text></svg>`,
          alt: 'A particle moving to the right along a straight dashed path above point O. The position vector r runs from O to the particle, the momentum p points along the path, and the perpendicular distance from O to the path is r-perp equals d.',
          caption: 'A particle need not move in a circle to have angular momentum. For straight-line motion, $r\\sin\\phi$ is the perpendicular distance $d$ from $O$ to the path.',
          maxWidth: 470,
        },
        {
          type: 'graph',
          x: [-4, 4],
          y: [-1, 3.5],
          equal: true,
          segments: [
            { from: [-4, 'd'], to: [4, 'd'], color: 'gray', dashed: true },
            { from: [0, 0], to: ['-3 + s', 'd'], color: 'blue', arrow: true, label: 'r' },
            { from: ['-3 + s', 'd'], to: ['-2 + s', 'd'], color: 'red', arrow: true, label: 'p' },
            { from: [0, 0], to: [0, 'd'], color: 'green' },
          ],
          points: [
            { x: '-3 + s', y: 'd', color: 'purple' },
            { x: 0, y: 0, color: 'gray', label: 'O' },
          ],
          sliders: [
            { name: 'd', min: 0.5, max: 3, step: 0.1, value: 2, label: 'distance of the path from $O$, $d$ (m)' },
            { name: 's', min: 0, max: 6, step: 0.01, value: 0, label: 'time $t$ (s)', play: true, speed: 1.5 },
          ],
          readouts: [
            { label: '$r$ (m) $=$', expr: 'sqrt((s - 3)^2 + d^2)', digits: 2 },
            { label: '$\\sin\\phi =$', expr: 'd/sqrt((s - 3)^2 + d^2)', digits: 3 },
            { label: '$|L| = mvr\\sin\\phi$ (kg·m²/s, $m = 1$, $v = 1$) $=$', expr: 'sqrt((s - 3)^2 + d^2)*d/sqrt((s - 3)^2 + d^2)', digits: 3 },
          ],
          caption: 'A $1\\,\\text{kg}$ particle moving right at $1\\,\\text{m/s}$. Press ▶: $r$ shrinks and grows and $\\phi$ swings, but their product $r\\sin\\phi = d$ never changes, so $L$ is constant. (It is clockwise, so $L_z = -mvd$.) No force acts, and as you will see, no torque means constant $\\vec{L}$.',
        },
        {
          type: 'derivation',
          title: 'A car passing a lamppost',
          steps: [
            { tex: 'L = mvd = (1500\\,\\text{kg})(20\\,\\text{m/s})(15\\,\\text{m})', why: 'A $1500\\,\\text{kg}$ car drives straight at $20\\,\\text{m/s}$ along a road whose closest point to the lamppost is $15\\,\\text{m}$ away.' },
            { tex: '= 4.5 \\times 10^5\\,\\text{kg·m}^2/\\text{s}', why: 'The same at every instant, whether the car is far away or alongside.' },
          ],
          result: 'Angular momentum depends on the chosen point. About a point on the road itself, $d = 0$ and the car has no angular momentum at all.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'A $2.0\\,\\text{kg}$ puck is at $\\vec{r} = (3.0\\,\\hat{\\imath} + 4.0\\,\\hat{\\jmath})\\,\\text{m}$ with velocity $\\vec{v} = 5.0\\,\\hat{\\imath}\\,\\text{m/s}$. Find $L_z$ about the origin, **with its sign**. Give 2 significant figures.',
      hint: '$L_z = m(xv_y - yv_x)$.',
      answer: '2*(3*0 - 4*5)',
      answerTex: '-40',
      tolerance: 0.3,
      unit: 'kg·m²/s',
      label: '$L_z =$',
      explanation: '$L_z = 2.0\\,[(3.0)(0) - (4.0)(5.0)] = -40\\,\\text{kg·m}^2/\\text{s}$. The puck is above the origin moving right, so seen from $O$ it sweeps **clockwise**: negative. Check the size with $mvd$: the path $y = 4.0$ is $4.0\\,\\text{m}$ from $O$, so $|L| = (2.0)(5.0)(4.0) = 40$. The $x$-coordinate does not matter.',
    },
    {
      kind: 'concept',
      title: 'Rigid bodies and $\\tau = dL/dt$',
      blocks: [
        {
          type: 'derivation',
          title: 'Angular momentum of a body rotating about a fixed axis',
          steps: [
            { tex: 'L_i = r_i\\,(m_i v_i) = m_i r_i (r_i\\omega) = m_i r_i^2\\omega', why: 'Each particle moves on a circle of radius $r_i$ about the axis, perpendicular to its radius ($\\phi = 90^\\circ$), with $v_i = r_i\\omega$.' },
            { tex: 'L = \\sum_i m_i r_i^2\\,\\omega = I\\omega', why: 'All particles turn the same way, so the components along the axis add, and $\\omega$ factors out.' },
          ],
          result: 'Along the rotation axis, $L = I\\omega$: the rotational twin of $p = mv$. (For a symmetric body spinning about its symmetry axis, $\\vec{L} = I\\vec{\\omega}$ as vectors.)',
        },
        {
          type: 'p',
          text: 'Newton wrote his second law as $\\sum\\vec{F} = d\\vec{p}/dt$. The rotational law has the same shape, and the proof is two lines of product rule.',
        },
        {
          type: 'derivation',
          title: 'Torque is the rate of change of angular momentum',
          steps: [
            { tex: '\\frac{d\\vec{L}}{dt} = \\frac{d}{dt}(\\vec{r} \\times \\vec{p}) = \\frac{d\\vec{r}}{dt} \\times \\vec{p} + \\vec{r} \\times \\frac{d\\vec{p}}{dt}', why: 'The product rule works for cross products (keeping the order of the factors).' },
            { tex: '= \\vec{v} \\times m\\vec{v} + \\vec{r} \\times \\sum\\vec{F}', why: '$d\\vec{r}/dt = \\vec{v}$ and $d\\vec{p}/dt = \\sum\\vec{F}$ (Newton\'s second law).' },
            { tex: '= \\vec{0} + \\sum\\vec{\\tau}', why: 'The cross product of a vector with itself (or a parallel vector) is zero.' },
            { tex: '\\sum\\vec{\\tau}_{\\text{ext}} = \\frac{d\\vec{L}_{\\text{tot}}}{dt}', why: 'For a system, sum over particles: internal forces come in equal, opposite, collinear pairs, so their torques cancel.' },
          ],
          result: 'For a rigid body about a fixed axis, $\\frac{d}{dt}(I\\omega) = I\\alpha$, which recovers $\\sum\\tau = I\\alpha$. But $\\tau = dL/dt$ is more general: it also holds when $I$ changes.',
        },
        {
          type: 'table',
          headers: ['Linear', 'Rotational'],
          rows: [
            ['$\\vec{p} = m\\vec{v}$', '$\\vec{L} = \\vec{r} \\times \\vec{p}$; about a fixed axis $L = I\\omega$'],
            ['$\\sum\\vec{F}_{\\text{ext}} = d\\vec{p}/dt$', '$\\sum\\vec{\\tau}_{\\text{ext}} = d\\vec{L}/dt$'],
            ['$\\vec{J} = \\int \\vec{F}\\,dt = \\Delta\\vec{p}$', 'angular impulse $\\int \\vec{\\tau}\\,dt = \\Delta\\vec{L}$'],
            ['$\\vec{p}$ conserved if $\\sum\\vec{F}_{\\text{ext}} = 0$', '$\\vec{L}$ conserved if $\\sum\\vec{\\tau}_{\\text{ext}} = 0$'],
          ],
          caption: 'Momentum and angular momentum side by side.',
        },
      ],
    },
    {
      kind: 'expr',
      prompt: 'A flywheel with moment of inertia $2.0\\,\\text{kg·m}^2$ has angular velocity $\\omega(t) = 4t - t^2$ (rad/s, $t$ in s). Find the net torque on it as a function of time.',
      hint: 'Write $L(t) = I\\omega(t)$, then $\\tau = dL/dt$.',
      variables: ['t'],
      label: '$\\tau(t) =$',
      answer: '8 - 4t',
      answerTex: '8 - 4t \\ \\text{N·m}',
      explanation: '$L = I\\omega = 2.0(4t - t^2) = 8t - 2t^2$, so $\\tau = \\frac{dL}{dt} = 8 - 4t$ N·m. The torque is positive (spinning up) until $t = 2\\,\\text{s}$, when $\\omega$ peaks at $4\\,\\text{rad/s}$, and negative after that. Same answer from $I\\alpha$ with $\\alpha = 4 - 2t$.',
    },
    {
      kind: 'concept',
      title: 'Conservation: the spinning skater',
      blocks: [
        {
          type: 'theorem',
          name: 'Conservation of angular momentum',
          tex: '\\sum\\vec{\\tau}_{\\text{ext}} = \\vec{0} \\implies \\vec{L}_{\\text{tot}} = \\text{constant}',
          text: '[[phys-conservation-of-angular-momentum]]: if the net external torque on a system is zero (about some point), its total angular momentum about that point does not change, whatever happens inside the system.',
        },
        {
          type: 'p',
          text: 'A skater spinning on ice has almost no external torque about the vertical axis: friction from the skate tip is tiny, and gravity and the normal force are vertical, along the axis. So $I\\omega$ stays fixed. Pulling the arms in reduces $I$, and $\\omega$ must rise to compensate.',
        },
        {
          type: 'figure',
          svg: /*fig:am-skater*/`<svg viewBox="0 0 470 275" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="70" r="13" fill="none" stroke="currentColor" stroke-width="1.6"/><line x1="110" y1="83" x2="110" y2="160" stroke="currentColor" stroke-width="2.4"/><line x1="110" y1="160" x2="96" y2="220" stroke="currentColor" stroke-width="2.4"/><line x1="110" y1="160" x2="116" y2="220" stroke="currentColor" stroke-width="2.4"/><line x1="110" y1="100" x2="40" y2="100" stroke="currentColor" stroke-width="2.4"/><line x1="110" y1="100" x2="180" y2="100" stroke="currentColor" stroke-width="2.4"/><circle cx="40" cy="100" r="5" fill="currentColor"/><circle cx="180" cy="100" r="5" fill="currentColor"/><line x1="110" y1="28" x2="110" y2="236" stroke="currentColor" class="s-gray" stroke-width="1.2" stroke-dasharray="5 4"/><circle cx="360" cy="70" r="13" fill="none" stroke="currentColor" stroke-width="1.6"/><line x1="360" y1="83" x2="360" y2="160" stroke="currentColor" stroke-width="2.4"/><line x1="360" y1="160" x2="346" y2="220" stroke="currentColor" stroke-width="2.4"/><line x1="360" y1="160" x2="366" y2="220" stroke="currentColor" stroke-width="2.4"/><line x1="360" y1="100" x2="344" y2="112" stroke="currentColor" stroke-width="2.4"/><line x1="344" y1="112" x2="358" y2="124" stroke="currentColor" stroke-width="2.4"/><line x1="360" y1="100" x2="376" y2="112" stroke="currentColor" stroke-width="2.4"/><line x1="376" y1="112" x2="362" y2="124" stroke="currentColor" stroke-width="2.4"/><line x1="360" y1="28" x2="360" y2="236" stroke="currentColor" class="s-gray" stroke-width="1.2" stroke-dasharray="5 4"/><path d="M64,40 A46,9 0 0 0 156,40" fill="none" stroke="currentColor" class="s-orange" stroke-width="1.8"/><path d="M156,40 L149.4,47.6 L158.1,49.8 Z" fill="currentColor" class="f-orange"/><path d="M330,40 A30,9 0 0 0 390,40" fill="none" stroke="currentColor" class="s-orange" stroke-width="3"/><path d="M390,40 L383.4,47.6 L392.1,49.8 Z" fill="currentColor" class="f-orange"/><text x="110" y="262" font-size="13" text-anchor="middle" class="t-blue">arms out: large I, small ω</text><text x="360" y="262" font-size="13" text-anchor="middle" class="t-red">arms in: small I, large ω</text><line x1="205" y1="140" x2="258.7" y2="140" stroke="currentColor" class="s-gray" stroke-width="2"/><path d="M265,140 L256,135.5 L256,144.5 Z" fill="currentColor" class="f-gray"/><text x="235" y="128" font-size="12" text-anchor="middle" class="t-gray">pull in</text></svg>`,
          alt: 'Two stick-figure skaters spinning about a vertical axis. The first has arms stretched out, a large moment of inertia and a slow spin. The second has arms pulled to the chest, a small moment of inertia and a fast spin.',
          caption: '$I_1\\omega_1 = I_2\\omega_2$: less $I$, more $\\omega$.',
          maxWidth: 420,
        },
        {
          type: 'graph',
          x: [-2.6, 2.6],
          y: [-1.2, 1.2],
          equal: true,
          segments: [
            { from: ['-1.3 - 0.8cos(2s)', '-0.8sin(2s)'], to: ['-1.3 + 0.8cos(2s)', '0.8sin(2s)'], color: 'blue' },
            { from: [`1.3 - a*cos(${W_IN}*s)`, `-a*sin(${W_IN}*s)`], to: [`1.3 + a*cos(${W_IN}*s)`, `a*sin(${W_IN}*s)`], color: 'red' },
          ],
          points: [
            { x: '-1.3', y: 0, color: 'gray', label: 'arms out' },
            { x: '-1.3 + 0.8cos(2s)', y: '0.8sin(2s)', color: 'blue' },
            { x: '-1.3 - 0.8cos(2s)', y: '-0.8sin(2s)', color: 'blue' },
            { x: 1.3, y: 0, color: 'gray', label: 'arms at a' },
            { x: `1.3 + a*cos(${W_IN}*s)`, y: `a*sin(${W_IN}*s)`, color: 'red' },
            { x: `1.3 - a*cos(${W_IN}*s)`, y: `-a*sin(${W_IN}*s)`, color: 'red' },
          ],
          sliders: [
            { name: 'a', min: 0.2, max: 0.8, step: 0.01, value: 0.25, label: 'hand distance from the axis $a$ (m), right skater' },
            { name: 's', min: 0, max: 6, step: 0.01, value: 0, label: 'time $t$ (s)', play: true, speed: 1.2 },
          ],
          readouts: [
            { label: '$I$ (kg·m²) $=$', expr: I_IN, digits: 3 },
            { label: '$\\omega$ (rad/s) $=$', expr: W_IN, digits: 2 },
            { label: '$L = I\\omega$ (kg·m²/s) $=$', expr: `${I_IN}*${W_IN}`, digits: 2 },
            { label: '$K = \\tfrac12 I\\omega^2$ (J) $=$', expr: `0.5*${I_IN}*${W_IN}^2`, digits: 1 },
          ],
          caption: 'Top view of two identical skaters (body $1.0\\,\\text{kg·m}^2$ plus $3.0\\,\\text{kg}$ of arm and hand at each hand). The left one keeps her arms out at $0.8\\,\\text{m}$, spinning at $2.0\\,\\text{rad/s}$ ($K = 9.7\\,\\text{J}$). The right one started the same way and pulled her hands in to $a$. Press ▶: same $L$, but at $a = 0.25\\,\\text{m}$ she spins $3.5$ times faster and has $3.5$ times the kinetic energy.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Where does the extra kinetic energy come from?',
          text: 'With $L$ fixed, $K = \\tfrac12 I\\omega^2 = \\frac{L^2}{2I}$, so smaller $I$ means **more** kinetic energy. The skater supplies it: pulling the hands inward against their tendency to fly outward along the tangent takes muscular work. Angular momentum is conserved; kinetic energy is not. Letting the arms back out returns the energy (the hands do work on the muscles).',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'A skater spins at $1.5\\,\\text{rev/s}$ with arms out, where her moment of inertia is $4.0\\,\\text{kg·m}^2$. She pulls her arms in, reducing it to $1.6\\,\\text{kg·m}^2$. Ignoring friction, what is her new spin rate in rev/s? Give 3 significant figures.',
      hint: '$I_1\\omega_1 = I_2\\omega_2$. Revolutions per second can stay as they are, since the conversion factor cancels.',
      answer: '1.5*4/1.6',
      answerTex: '3.75',
      tolerance: 0.02,
      unit: 'rev/s',
      label: '$\\omega_2 =$',
      explanation: '$\\omega_2 = \\frac{I_1}{I_2}\\omega_1 = \\frac{4.0}{1.6}(1.5) = 3.75\\,\\text{rev/s}$. Units are fine because both sides of $I_1\\omega_1 = I_2\\omega_2$ would get the same $2\\pi$. Her kinetic energy rises by the same factor of $2.5$, from about $178\\,\\text{J}$ to $444\\,\\text{J}$: the difference is work done by her arms.',
    },
    {
      kind: 'truefalse',
      prompt: 'When a spinning skater pulls in her arms, both her angular momentum and her rotational kinetic energy stay the same.',
      answer: false,
      explanation: 'Only angular momentum is conserved (no external torque). Kinetic energy is $\\frac{L^2}{2I}$, so it **increases** as $I$ decreases. The extra energy comes from the work her muscles do pulling the arms inward. Conserving both would require $I_1 = I_2$.',
    },
    {
      kind: 'concept',
      title: 'Collisions that make things rotate',
      blocks: [
        {
          type: 'p',
          text: 'When an object strikes something pivoted (a door on hinges, a rod on an axle), linear momentum is **not** conserved: during the impact the pivot pushes back with a large, unknown force. But that force acts **at the pivot**, so it has zero torque about the pivot. Take angular momentum about the pivot and the unknown force drops out.',
        },
        {
          type: 'figure',
          svg: /*fig:am-door*/`<svg viewBox="0 0 490 250" xmlns="http://www.w3.org/2000/svg"><text x="130" y="24" font-size="13" text-anchor="middle" class="t-gray">before</text><rect x="40" y="135" width="180" height="10" rx="0" fill="currentColor" class="f-gray" fill-opacity="0.2"/><rect x="40" y="135" width="180" height="10" rx="0" fill="none" stroke="currentColor" stroke-width="1.4"/><circle cx="40" cy="140" r="6" fill="currentColor" class="f-gray"/><text x="40" y="166" font-size="12" text-anchor="middle" class="t-gray">hinge</text><circle cx="180" cy="60" r="4.5" fill="currentColor" class="f-red"/><line x1="180" y1="60" x2="180" y2="111.7" stroke="currentColor" class="s-red" stroke-width="2.2"/><path d="M180,118 L184.5,109 L175.5,109 Z" fill="currentColor" class="f-red"/><text x="172" y="56" font-size="12" text-anchor="end" class="t-red" font-style="italic">bullet m, v</text><line x1="40" y1="180" x2="180" y2="180" stroke="currentColor" class="s-green" stroke-width="1.4"/><line x1="40" y1="174" x2="40" y2="186" stroke="currentColor" class="s-green" stroke-width="1.4"/><line x1="180" y1="174" x2="180" y2="186" stroke="currentColor" class="s-green" stroke-width="1.4"/><text x="110" y="198" font-size="12" text-anchor="middle" class="t-green" font-style="italic">lever arm d</text><text x="380" y="24" font-size="13" text-anchor="middle" class="t-gray">after</text><path d="M292.3,135.6 L451.3,220.1 L446.6,228.9 L287.7,144.4 Z" fill="currentColor" class="f-gray" fill-opacity="0.2"/><path d="M292.3,135.6 L451.3,220.1 L446.6,228.9 L287.7,144.4 Z" fill="none" stroke="currentColor" stroke-width="1.4"/><line x1="290" y1="140" x2="470" y2="140" stroke="currentColor" class="s-gray" stroke-width="1" stroke-dasharray="5 4"/><circle cx="290" cy="140" r="6" fill="currentColor" class="f-gray"/><circle cx="413.6" cy="205.7" r="4.5" fill="currentColor" class="f-red"/><path d="M409.9,144.2 A120,120 0 0 1 397.9,192.6" fill="none" stroke="currentColor" class="s-orange" stroke-width="2"/><path d="M397.9,192.6 L405,187.2 L397.8,183.7 Z" fill="currentColor" class="f-orange"/><text x="420" y="192" font-size="15" text-anchor="middle" class="t-orange" font-style="italic">ω</text><text x="380" y="240" font-size="12" text-anchor="middle" class="t-gray">L about the hinge is conserved</text></svg>`,
          alt: 'Top view of a door hinged at the left. Before: a bullet of mass m and speed v moves perpendicular to the door toward a point a distance d from the hinge. After: the door, with the bullet embedded, rotates about the hinge with angular velocity omega.',
          caption: 'Angular momentum about the hinge is conserved during the impact: the hinge force has no lever arm.',
          maxWidth: 470,
        },
        {
          type: 'derivation',
          title: 'A child jumps onto a merry-go-round',
          steps: [
            { tex: 'L_i = mvR = (30\\,\\text{kg})(4.0\\,\\text{m/s})(2.0\\,\\text{m}) = 240\\,\\text{kg·m}^2/\\text{s}', why: 'The child runs tangent to the rim of a stationary merry-go-round (a uniform disk, $M = 120\\,\\text{kg}$, $R = 2.0\\,\\text{m}$), so her lever arm about the axle is $R$.' },
            { tex: 'I_f = \\tfrac12 MR^2 + mR^2 = 240 + 120 = 360\\,\\text{kg·m}^2', why: 'After she lands at the rim, she counts as a point mass at distance $R$.' },
            { tex: '\\omega_f = \\frac{L_i}{I_f} = \\frac{240}{360} \\approx 0.667\\,\\text{rad/s}', why: 'No external torque about the axle during the landing, so $L_f = L_i$.' },
            { tex: 'K_i = \\tfrac12 (30)(4.0)^2 = 240\\,\\text{J}, \\quad K_f = \\tfrac12 (360)(0.667)^2 = 80\\,\\text{J}', why: 'Two-thirds of the kinetic energy is lost to deformation and heat: a perfectly inelastic rotational collision.' },
          ],
          result: 'Angular momentum is conserved; kinetic energy is not. Same lesson as perfectly inelastic collisions in a straight line.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Pick the point that kills the unknown force',
          text: 'Angular momentum is conserved about a point only if the external torque about **that** point is zero. For a pivoted target, use the pivot. Using the center of the door instead would bring in the hinge force\'s torque, and conservation would fail.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'A $10\\,\\text{g}$ bullet moving at $400\\,\\text{m/s}$ hits a door perpendicular to its face, $0.80\\,\\text{m}$ from the hinge line, and embeds itself. The door is a uniform $18\\,\\text{kg}$ slab $1.0\\,\\text{m}$ wide, initially at rest. Find the door\'s angular velocity just after the impact. Give 3 significant figures.',
      hint: 'Conserve angular momentum about the hinge: $mvd = (\\tfrac13 MW^2 + md^2)\\,\\omega$.',
      answer: '0.01*400*0.8/(18/3 + 0.01*0.8^2)',
      answerTex: '0.533',
      tolerance: 0.004,
      unit: 'rad/s',
      label: '$\\omega =$',
      explanation: '$L_i = mvd = (0.010)(400)(0.80) = 3.2\\,\\text{kg·m}^2/\\text{s}$. After: $I = \\tfrac13(18)(1.0)^2 + (0.010)(0.80)^2 = 6.0064\\,\\text{kg·m}^2$, so $\\omega = 3.2/6.0064 \\approx 0.533\\,\\text{rad/s}$. Using the rod-about-center formula $\\tfrac{1}{12}MW^2$ gives $2.13$; using linear momentum gives nonsense, since the hinge force is huge during the impact. Of the bullet\'s $800\\,\\text{J}$, less than $1\\,\\text{J}$ remains as kinetic energy.',
    },
    {
      kind: 'mcq',
      prompt: 'For the bullet embedding in the hinged door, which quantity is conserved during the impact?',
      options: [
        {
          text: 'The angular momentum of bullet + door about the hinge',
          correct: true,
          why: 'The only large external force during the impact acts at the hinge, so it has zero torque about the hinge.',
        },
        {
          text: 'The linear momentum of bullet + door',
          why: 'The hinge exerts a large external force on the door during the impact (otherwise the door would fly off its hinges), so linear momentum changes.',
        },
        {
          text: 'The kinetic energy of bullet + door',
          why: 'The bullet embeds itself: a perfectly inelastic collision. Almost all of the kinetic energy becomes heat and deformation.',
        },
        {
          text: 'All three',
          why: 'Only angular momentum about the hinge is protected, because only its "external torque" condition is satisfied.',
        },
      ],
      explanation: 'Conservation laws hold when their condition holds. $\\sum\\vec{F}_{\\text{ext}} \\ne 0$ (hinge force), so $\\vec{p}$ changes. $\\sum\\vec{\\tau}_{\\text{ext}} = 0$ about the hinge, so $L_{\\text{hinge}}$ is conserved. Energy is dissipated in the inelastic impact.',
    },
    {
      kind: 'concept',
      title: 'Spin in the real world: reaction wheels, rotors and rifles',
      blocks: [
        {
          type: 'p',
          text: 'Internal torques cannot change the total angular momentum, but they can move it around between parts of a system. That is the whole trick behind many machines.',
        },
        {
          type: 'list',
          items: [
            '**Satellites** (including GPS satellites) point themselves with **reaction wheels**: a motor spins a flywheel one way and the spacecraft turns the other way, with no fuel used.',
            '**Helicopters** have a tail rotor because the engine torque that spins the main rotor pushes the fuselage the other way. Without the tail rotor\'s sideways thrust, the cabin would spin opposite to the blades.',
            '**Rifled barrels** spin a bullet about its long axis. Its large angular momentum resists the aerodynamic torques that would otherwise make it tumble: spin stabilization.',
            '**Cats and divers** change their shape in mid-air to rotate parts of the body differently while total $L$ stays fixed.',
          ],
        },
        {
          type: 'code',
          title: 'reaction_wheel.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdio>

// Turning a spacecraft with a reaction wheel: an internal motor torque spins the
// wheel one way and the spacecraft the other. Total angular momentum stays zero.
double tidy(double v, double scale) { return std::round(v * scale) / scale + 0.0; }

int main() {
    const double Is = 500.0, Iw = 0.20;          // kg m^2: spacecraft body, wheel
    const double dt = 0.01, PI = std::acos(-1.0);
    double ws = 0.0, ww = 0.0, angle = 0.0;      // rad/s, rad/s, rad

    for (int i = 0; i < 4000; ++i) {             // 40 s
        double t = i * dt;
        double tau = 0.0;                        // motor torque on the wheel
        if (t < 10.0) tau = 0.5;                 // spin the wheel up
        else if (t >= 30.0) tau = -0.5;          // spin it back down
        ww += (tau / Iw) * dt;                   // wheel feels +tau
        ws += (-tau / Is) * dt;                  // body feels -tau (Newton's 3rd law)
        angle += ws * dt;
        if (i % 1000 == 999) {
            double L = Is * ws + Iw * ww;        // total angular momentum
            std::printf("t = %2.0f s  wheel %5.2f rad/s  body %8.5f rad/s  angle %7.3f deg  L %s\\n",
                        t + dt, tidy(ww, 100), tidy(ws, 1e5), angle * 180 / PI,
                        std::fabs(L) < 1e-9 ? "= 0" : "!= 0");
        }
    }
}`,
          output: `t = 10 s  wheel 25.00 rad/s  body -0.01000 rad/s  angle  -2.868 deg  L = 0
t = 20 s  wheel 25.00 rad/s  body -0.01000 rad/s  angle  -8.597 deg  L = 0
t = 30 s  wheel 25.00 rad/s  body -0.01000 rad/s  angle -14.327 deg  L = 0
t = 40 s  wheel  0.00 rad/s  body  0.00000 rad/s  angle -17.189 deg  L = 0`,
          annotations: [
            { lines: 6, text: 'Rounds away floating-point noise like $-0.00$ for printing.' },
            { lines: '18-19', text: 'The motor pushes on the wheel and, by Newton\'s third law, back on the spacecraft: equal and opposite internal torques.' },
            { lines: 22, text: '$I_s\\omega_s + I_w\\omega_w$ stays zero: the wheel\'s $+5\\,\\text{kg·m}^2/\\text{s}$ is matched by the body\'s $-5$.' },
          ],
        },
        {
          type: 'p',
          text: 'Spin the wheel up, coast, spin it down: the spacecraft starts turning, keeps turning, then stops, having rotated about $17^\\circ$. The body ends at rest because the total angular momentum was zero all along.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Angular momentum in physics engines',
          text: 'In 3D, a rigid body\'s inertia is a $3\\times3$ matrix (the inertia tensor) that rotates with the body, so $\\vec{L} = I\\vec{\\omega}$ with $\\vec{L}$ and $\\vec{\\omega}$ generally **not** parallel. Many engines store $\\vec{L}$ and compute $\\vec{\\omega} = I^{-1}\\vec{L}$ each step, or add a "gyroscopic torque" term; skipping it makes long thin objects spin unrealistically stably.',
        },
      ],
    },
    {
      kind: 'concept',
      title: 'A brief look at gyroscopes and precession',
      blocks: [
        {
          type: 'p',
          text: 'Support a rapidly spinning wheel at one end of its axle and let go. Instead of falling, it swings slowly around the pivot in a horizontal circle. This is [[phys-precession|precession]], and $\\vec{\\tau} = d\\vec{L}/dt$ explains it.',
        },
        {
          type: 'figure',
          svg: /*fig:am-gyro*/`<svg viewBox="0 0 500 250" xmlns="http://www.w3.org/2000/svg"><text x="120" y="22" font-size="13" text-anchor="middle" class="t-gray">side view</text><line x1="70" y1="110" x2="70" y2="230" stroke="currentColor" stroke-width="3"/><line x1="40" y1="230" x2="100" y2="230" stroke="currentColor" stroke-width="3"/><circle cx="70" cy="110" r="5" fill="currentColor"/><text x="60" y="102" font-size="12" text-anchor="end" class="t-gray">pivot</text><line x1="70" y1="110" x2="190" y2="110" stroke="currentColor" stroke-width="2.4"/><ellipse cx="170" cy="110" rx="12" ry="42" fill="currentColor" class="f-blue" fill-opacity="0.2"/><ellipse cx="170" cy="110" rx="12" ry="42" fill="none" stroke="currentColor" class="s-blue" stroke-width="1.6"/><line x1="190" y1="110" x2="233.7" y2="110" stroke="currentColor" class="s-blue" stroke-width="2.6"/><path d="M240,110 L231,105.5 L231,114.5 Z" fill="currentColor" class="f-blue"/><text x="240" y="100" font-size="15" text-anchor="end" class="t-blue" font-style="italic" font-weight="600">L</text><line x1="170" y1="110" x2="170" y2="183.7" stroke="currentColor" class="s-gray" stroke-width="2.4"/><path d="M170,190 L174.5,181 L165.5,181 Z" fill="currentColor" class="f-gray"/><text x="178" y="188" font-size="14" text-anchor="start" class="t-gray" font-style="italic">Mg</text><line x1="70" y1="128" x2="170" y2="128" stroke="currentColor" class="s-green" stroke-width="1.2"/><text x="120" y="144" font-size="13" text-anchor="middle" class="t-green" font-style="italic">r</text><text x="200" y="156" font-size="12" text-anchor="start" class="t-red">τ into page</text><text x="380" y="22" font-size="13" text-anchor="middle" class="t-gray">top view</text><circle cx="325" cy="150" r="5" fill="currentColor"/><line x1="325" y1="150" x2="428.7" y2="150" stroke="currentColor" class="s-blue" stroke-width="2.6"/><path d="M435,150 L426,145.5 L426,154.5 Z" fill="currentColor" class="f-blue"/><text x="437" y="168" font-size="15" text-anchor="start" class="t-blue" font-style="italic" font-weight="600">L</text><line x1="325" y1="150" x2="422.4" y2="114.5" stroke="currentColor" class="s-blue" stroke-width="1.6" stroke-dasharray="5 4"/><path d="M428.4,112.4 L418.4,111.2 L421.4,119.7 Z" fill="currentColor" class="f-blue"/><text x="436.1" y="109" font-size="13" text-anchor="start" class="t-blue" font-style="italic">L + dL</text><line x1="435" y1="150" x2="430.2" y2="120.2" stroke="currentColor" class="s-red" stroke-width="2.2"/><path d="M429.4,115.4 L427,122.8 L433.9,121.7 Z" fill="currentColor" class="f-red"/><text x="443" y="140" font-size="12" text-anchor="start" class="t-red" font-style="italic">dL ∥ τ</text><line x1="385" y1="200" x2="385" y2="168.3" stroke="currentColor" class="s-red" stroke-width="2.2"/><path d="M385,162 L380.5,171 L389.5,171 Z" fill="currentColor" class="f-red"/><text x="393" y="196" font-size="14" text-anchor="start" class="t-red" font-style="italic">τ</text><path d="M459.4,204.3 A145,145 0 0 0 439.3,60.7" fill="none" stroke="currentColor" class="s-orange" stroke-width="1.8"/><path d="M439.3,60.7 L441,69.5 L447.3,64.6 Z" fill="currentColor" class="f-orange"/><text x="435" y="50" font-size="12" text-anchor="end" class="t-orange">precession Ω</text></svg>`,
          alt: 'Left, side view: a spinning disk on a horizontal axle supported at a pivot at distance r; its angular momentum L points along the axle away from the pivot and its weight Mg acts downward at the disk, giving a torque into the page. Right, top view: L points horizontally, the torque points perpendicular to L in the horizontal plane, and the small change dL is parallel to the torque, so L swings around the pivot.',
          caption: 'Gravity\'s torque is horizontal and perpendicular to $\\vec{L}$. So $d\\vec{L} = \\vec{\\tau}\\,dt$ turns $\\vec{L}$ sideways instead of tipping it down.',
          maxWidth: 480,
        },
        {
          type: 'derivation',
          title: 'Precession rate',
          steps: [
            { tex: '|d\\vec{L}| = \\tau\\,dt = Mgr\\,dt', why: 'Gravity at the disk, lever arm $r$ from the pivot, perpendicular to the horizontal axle.' },
            { tex: 'd\\varphi = \\frac{|d\\vec{L}|}{L} = \\frac{Mgr}{I\\omega}\\,dt', why: '$d\\vec{L}$ is perpendicular to $\\vec{L}$, so $\\vec{L}$ keeps its length and turns through a small angle $d\\varphi$.' },
            { tex: '\\Omega = \\frac{d\\varphi}{dt} = \\frac{Mgr}{I\\omega}', why: 'Valid when the spin is fast, so that $L$ from the spin dominates.' },
            { tex: '\\Omega = \\frac{(0.15)(9.80)(0.040)}{(9.19 \\times 10^{-5})(314)} \\approx 2.0\\,\\text{rad/s}', why: 'A toy gyroscope: a $0.15\\,\\text{kg}$ disk of radius $3.5\\,\\text{cm}$ ($I = \\tfrac12 MR^2$) spinning at $3000$ rpm, supported $4.0\\,\\text{cm}$ from its center. One lap every $3.1\\,\\text{s}$.' },
          ],
          result: 'Faster spin means slower precession. As friction slows the spin, the precession speeds up and the gyroscope eventually falls.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Why bikes and spinning tops stay up',
          text: 'A moving bicycle is stabilised mainly by steering geometry and the rider, but the spinning wheels\' angular momentum helps. A tilt produces a torque that, by $d\\vec{L} = \\vec{\\tau}\\,dt$, turns the front wheel into the lean. The full theory of gyroscopes belongs to an advanced mechanics course; for now, remember that torque changes the **direction** of $\\vec{L}$ when it is perpendicular to it.',
        },
      ],
    },
    {
      kind: 'error',
      prompt: 'A student analyses the merry-go-round problem ($M = 120\\,\\text{kg}$ disk, $R = 2.0\\,\\text{m}$; a $30\\,\\text{kg}$ child running tangentially at $4.0\\,\\text{m/s}$ jumps on at the rim). Tap the first wrong line.',
      lines: [
        '$L_i = mvR = 240\\,\\text{kg·m}^2/\\text{s}$',
        '$I_f = \\tfrac12 MR^2 + mR^2 = 360\\,\\text{kg·m}^2$',
        '$\\tfrac12 mv^2 = \\tfrac12 I_f\\,\\omega_f^2$',
        '$\\omega_f = \\sqrt{\\dfrac{mv^2}{I_f}} = \\sqrt{\\dfrac{480}{360}} \\approx 1.15\\,\\text{rad/s}$',
      ],
      errorLines: [3],
      explanation: 'Line 3 conserves kinetic energy, but landing on the merry-go-round is a perfectly inelastic collision: the child and the rim end up moving together, and energy is dissipated. The conserved quantity is angular momentum about the axle: $\\omega_f = L_i/I_f = 240/360 \\approx 0.667\\,\\text{rad/s}$. Lines 1 and 2 were correct and were meant to be used together.',
    },
    {
      kind: 'fill',
      prompt: 'Complete the statements.',
      template: 'About a fixed axis, $L =$ ___. The net external torque equals ___. If that torque is zero, ___ is conserved, but kinetic energy can still ___.',
      blanks: [{ answers: ['$I\\omega$'] }, { answers: ['$dL/dt$'] }, { answers: ['angular momentum'] }, { answers: ['change'] }],
      wordBank: ['$I\\omega$', '$\\tfrac12 I\\omega^2$', '$dL/dt$', '$I\\omega^2$', 'angular momentum', 'angular velocity', 'change', 'never change'],
      explanation: '$L = I\\omega$ and $\\sum\\tau_{\\text{ext}} = dL/dt$. Zero external torque conserves $L$, while $\\omega$ and $K = L^2/2I$ can change when $I$ does (the skater) or energy is dissipated (inelastic collisions).',
    },
  ],
  takeaways: [
    'A particle\'s angular momentum about a point is $\\vec{L} = \\vec{r} \\times \\vec{p}$, magnitude $r_\\perp p$; a body rotating about a fixed axis has $L = I\\omega$.',
    '$\\sum\\vec{\\tau}_{\\text{ext}} = d\\vec{L}/dt$; internal torques cancel. For constant $I$ this is $\\sum\\tau = I\\alpha$.',
    'With zero external torque, $L$ is conserved: $I_1\\omega_1 = I_2\\omega_2$. Kinetic energy $L^2/2I$ is not conserved in general.',
    'For impacts on pivoted objects, conserve angular momentum about the pivot; linear momentum and kinetic energy are usually not conserved.',
    'A torque perpendicular to $\\vec{L}$ changes its direction, not its size: a gyroscope precesses at $\\Omega = Mgr/(I\\omega)$.',
  ],
  reading: [
    {
      title: 'OpenStax University Physics Volume 1, Chapter 11: Angular Momentum',
      url: 'https://openstax.org/details/books/university-physics-volume-1',
      source: 'openstax',
      note: 'Sections 11.2 to 11.4 cover angular momentum, its conservation and the precession of a gyroscope.',
    },
    {
      title: 'Wikipedia: Reaction wheel',
      url: 'https://en.wikipedia.org/wiki/Reaction_wheel',
      source: 'wikipedia',
      note: 'How spacecraft use internal flywheels to change orientation without fuel, as in the C++ example.',
    },
    {
      title: 'MIT OCW 8.01SC Classical Mechanics',
      url: 'https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/',
      source: 'other',
      note: 'The angular momentum week includes worked problems on collisions with pivoted objects and gyroscopes.',
    },
  ],
};
