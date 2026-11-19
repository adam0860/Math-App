import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'phys-torque',
  title: 'Torque and Rotational Dynamics',
  summary: 'What makes things start spinning: torque as r × F, lever arms, Newton\'s second law for rotation Στ = Iα, pulleys with mass, and rotational work and power.',
  minutes: 19,
  objectives: [
    'Compute torque as $\\tau = rF\\sin\\phi = r_\\perp F$ and as the cross product $\\vec{\\tau} = \\vec{r} \\times \\vec{F}$, with the correct sign',
    'Derive $\\sum\\tau = I\\alpha$ from Newton\'s second law applied to every particle',
    'Solve problems that couple translation and rotation, such as a hanging block on a massive pulley and an Atwood machine with a massive pulley',
    'Use rotational work $W = \\int \\tau\\,d\\theta$ and power $P = \\tau\\omega$',
  ],
  steps: [
    {
      kind: 'concept',
      title: 'Where and how you push',
      blocks: [
        {
          type: 'p',
          text: 'Try to open a door by pushing next to the hinges: it barely moves. Push at the handle, perpendicular to the door, and it swings easily. Push at the handle but straight toward the hinges, and nothing happens at all. The same force can have very different turning effects depending on **where** it acts and in **what direction**.',
        },
        {
          type: 'p',
          text: 'The quantity that measures turning effect is the [[la-torque|torque]] $\\tau$ you met in Linear Algebra as $\\vec{r} \\times \\vec{F}$. Here we build it up physically. Let $\\vec{r}$ run from the axis to the point where the force is applied, and let $\\phi$ be the angle between $\\vec{r}$ and $\\vec{F}$.',
        },
        {
          type: 'figure',
          svg: /*fig:torque-wrench*/`<svg viewBox="0 0 440 240" xmlns="http://www.w3.org/2000/svg"><path d="M97.5,175.5 L346,122.7 L342.2,105.1 L93.8,157.9 Z" fill="currentColor" class="f-gray" fill-opacity="0.15"/><path d="M97.5,175.5 L346,122.7 L342.2,105.1 L93.8,157.9 Z" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M97.3,180 L80,190 L62.7,180 L62.7,160 L80,150 L97.3,160 Z" fill="currentColor" class="f-gray" fill-opacity="0.35"/><path d="M97.3,180 L80,190 L62.7,180 L62.7,160 L80,150 L97.3,160 Z" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="80" cy="170" r="4" fill="currentColor"/><text x="74" y="210" font-size="12" text-anchor="middle" class="t-gray">pivot (bolt)</text><line x1="80" y1="170" x2="318.4" y2="119.3" stroke="currentColor" class="s-blue" stroke-width="2.2"/><path d="M324.5,118 L314.8,115.5 L316.7,124.3 Z" fill="currentColor" class="f-blue"/><text x="212.3" y="132" font-size="16" text-anchor="middle" class="t-blue" font-style="italic" font-weight="600">r</text><line x1="324.5" y1="118" x2="353.1" y2="18.3" stroke="currentColor" class="s-red" stroke-width="2.6"/><path d="M354.9,12.3 L348.1,19.7 L356.7,22.2 Z" fill="currentColor" class="f-red"/><text x="362.9" y="18.3" font-size="16" text-anchor="start" class="t-red" font-style="italic" font-weight="600">F</text><line x1="266.9" y1="318.9" x2="362.4" y2="-14.2" stroke="currentColor" class="s-gray" stroke-width="1.2" stroke-dasharray="5 4"/><text x="272.9" y="314.9" font-size="12" text-anchor="start" class="t-gray">line of action</text><line x1="324.5" y1="118" x2="383.2" y2="105.5" stroke="currentColor" class="s-blue" stroke-width="1.1" stroke-dasharray="5 4"/><path d="M353.9,111.8 A30,30 0 0 0 332.8,89.2" fill="none" stroke="currentColor" class="s-orange" stroke-width="1.8"/><text x="353.8" y="95.7" font-size="15" text-anchor="middle" class="t-orange" font-style="italic">φ</text><line x1="80" y1="170" x2="292.2" y2="230.8" stroke="currentColor" class="s-green" stroke-width="2.4"/><text x="180.1" y="224.4" font-size="15" text-anchor="end" class="t-green" font-style="italic" font-weight="600">r⊥</text><path d="M283.5,228.4 L281.1,237 L289.7,239.5" fill="none" stroke="currentColor" class="s-green" stroke-width="1.3"/></svg>`,
          alt: 'A wrench on a bolt. The vector r runs from the bolt along the handle to the end, where a force F is applied at angle phi to r. The line of action of F is extended as a dashed line, and the perpendicular distance r-perp from the bolt to that line is drawn in green with a right-angle mark.',
          caption: 'Only the part of $\\vec{F}$ perpendicular to $\\vec{r}$ turns the wrench. Equivalently, multiply $F$ by the **lever arm** $r_\\perp$: the perpendicular distance from the axis to the line of action.',
          maxWidth: 460,
        },
        {
          type: 'theorem',
          name: 'Magnitude of torque (three equivalent forms)',
          tex: '\\tau = rF\\sin\\phi = r\\,F_\\perp = r_\\perp F',
          text: 'Here $F_\\perp = F\\sin\\phi$ is the component of the force perpendicular to $\\vec{r}$, and $r_\\perp = r\\sin\\phi$ is the [[phys-lever-arm]]. SI unit: N·m.',
        },
        {
          type: 'derivation',
          title: 'An $80\\,\\text{N}$ pull at the end of a $0.25\\,\\text{m}$ wrench, $60^\\circ$ from the handle',
          steps: [
            { tex: '\\tau = rF\\sin\\phi = (0.25\\,\\text{m})(80\\,\\text{N})\\sin 60^\\circ', why: 'Directly from the definition, with $\\phi$ measured between $\\vec{r}$ and $\\vec{F}$ placed tail to tail.' },
            { tex: '= 17.3\\,\\text{N·m}', why: '$\\sin 60^\\circ \\approx 0.866$.' },
            { tex: '\\tau_{\\max} = (0.25)(80) = 20\\,\\text{N·m} \\ \\text{at}\\ \\phi = 90^\\circ', why: 'Pulling perpendicular to the handle makes $\\sin\\phi = 1$: the most turning for the same effort.' },
          ],
          result: 'A cheater bar that doubles $r$ doubles the torque for the same pull, which is the whole point of a long wrench.',
        },
      ],
    },
    {
      kind: 'mcq',
      prompt: 'Three forces of the **same magnitude** act on a door, seen from above. A pushes perpendicular to the door at its outer edge, B pushes perpendicular at the middle, and C pushes at the outer edge at $30^\\circ$ to the door. Which produces the largest torque about the hinge?',
      figure: {
        type: 'figure',
        svg: /*fig:torque-door*/`<svg viewBox="0 0 440 210" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="114" width="330" height="12" rx="0" fill="currentColor" class="f-gray" fill-opacity="0.2"/><rect x="40" y="114" width="330" height="12" rx="0" fill="none" stroke="currentColor" stroke-width="1.4"/><circle cx="40" cy="120" r="7" fill="currentColor" class="f-gray"/><text x="54" y="150" font-size="12" text-anchor="start" class="t-gray">hinge</text><line x1="30" y1="60" x2="30" y2="180" stroke="currentColor" class="s-gray" stroke-width="1.6"/><line x1="30" y1="60" x2="22" y2="67" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="30" y1="70" x2="22" y2="77" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="30" y1="80" x2="22" y2="87" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="30" y1="90" x2="22" y2="97" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="30" y1="100" x2="22" y2="107" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="30" y1="110" x2="22" y2="117" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="30" y1="120" x2="22" y2="127" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="30" y1="130" x2="22" y2="137" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="30" y1="140" x2="22" y2="147" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="30" y1="150" x2="22" y2="157" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="30" y1="160" x2="22" y2="167" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="30" y1="170" x2="22" y2="177" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="30" y1="180" x2="22" y2="187" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="360" y1="190" x2="360" y2="136.3" stroke="currentColor" class="s-red" stroke-width="2.4"/><path d="M360,130 L355.5,139 L364.5,139 Z" fill="currentColor" class="f-red"/><text x="372" y="186" font-size="15" text-anchor="start" class="t-red" font-weight="600">A</text><line x1="205" y1="190" x2="205" y2="136.3" stroke="currentColor" class="s-blue" stroke-width="2.4"/><path d="M205,130 L200.5,139 L209.5,139 Z" fill="currentColor" class="f-blue"/><text x="217" y="186" font-size="15" text-anchor="start" class="t-blue" font-weight="600">B</text><line x1="412" y1="82" x2="367.4" y2="108.8" stroke="currentColor" class="s-green" stroke-width="2.4"/><path d="M362,112 L372,111.2 L367.4,103.5 Z" fill="currentColor" class="f-green"/><text x="417.2" y="76" font-size="15" text-anchor="start" class="t-green" font-weight="600">C</text><text x="205" y="30" font-size="12" text-anchor="middle" class="t-gray">top view — all three forces have the same magnitude</text></svg>`,
        alt: 'Top view of a door hinged at the left. Force A pushes perpendicular at the outer edge, force B perpendicular at the middle, and force C at the outer edge at 30 degrees to the door, pointing toward the hinge side.',
        maxWidth: 440,
      },
      options: [
        {
          text: 'A',
          correct: true,
          why: 'A has the largest lever arm possible: the full door width, with $\\sin 90^\\circ = 1$.',
        },
        {
          text: 'B',
          why: 'B is perpendicular but acts at half the distance, so $\\tau_B = \\tfrac12 \\tau_A$.',
        },
        {
          text: 'C',
          why: 'C acts at the edge, but only its perpendicular component turns the door: $\\tau_C = WF\\sin 30^\\circ = \\tfrac12 \\tau_A$, the same as B.',
        },
        {
          text: 'All three are equal, because the forces are equal',
          why: 'Torque depends on the lever arm as well as on the force. Equal forces can give very different torques.',
        },
      ],
      explanation: 'With door width $W$: $\\tau_A = WF$, $\\tau_B = \\tfrac{W}{2}F$, and $\\tau_C = WF\\sin 30^\\circ = \\tfrac12 WF$. B and C tie for second. A force pointing straight at the hinge would give zero torque, no matter how hard you push.',
    },
    {
      kind: 'concept',
      title: 'Torque as a vector: $\\vec{\\tau} = \\vec{r} \\times \\vec{F}$',
      blocks: [
        {
          type: 'p',
          text: 'Torque has a direction: the axis about which the force tends to turn the body. The [[cross-product]] packages magnitude and direction together. For forces in the $xy$-plane, $\\vec{\\tau}$ points along $\\pm\\hat{k}$, so a single signed number $\\tau_z$ carries everything: positive for counterclockwise, negative for clockwise.',
        },
        {
          type: 'math',
          tex: '\\vec{\\tau} = \\vec{r} \\times \\vec{F}, \\qquad \\tau_z = xF_y - yF_x',
          caption: 'The $\\hat{k}$ component of the cross product. Its magnitude is $rF\\sin\\phi$.',
        },
        {
          type: 'graph',
          x: [-1.5, 3.5],
          y: [-2, 2.5],
          equal: true,
          segments: [
            { from: [0, 0], to: ['r', 0], color: 'blue', arrow: true, label: 'r' },
            { from: ['r', 0], to: ['r + 1.2cos(p*pi/180)', '1.2sin(p*pi/180)'], color: 'red', arrow: true, label: 'F' },
            { from: ['r - 4cos(p*pi/180)', '-4sin(p*pi/180)'], to: ['r + 4cos(p*pi/180)', '4sin(p*pi/180)'], color: 'gray', dashed: true },
            { from: [0, 0], to: ['r - r*cos(p*pi/180)^2', '-r*cos(p*pi/180)*sin(p*pi/180)'], color: 'green', label: 'r⊥' },
          ],
          points: [{ x: 0, y: 0, color: 'gray', label: 'axis' }],
          sliders: [
            { name: 'p', min: 0, max: 360, step: 1, value: 60, label: 'angle $\\phi$ between $\\vec{r}$ and $\\vec{F}$ (degrees)', play: true, speed: 72 },
            { name: 'r', min: 0.5, max: 2.5, step: 0.1, value: 2, label: 'distance $r$ (m)' },
          ],
          readouts: [
            { label: 'lever arm $r_\\perp = r|\\sin\\phi|$ (m) $=$', expr: 'r*abs(sin(p*pi/180))', digits: 2 },
            { label: '$\\tau_z = rF\\sin\\phi$ with $F = 10\\,\\text{N}$ (N·m) $=$', expr: '10r*sin(p*pi/180)', digits: 2 },
          ],
          caption: 'Blue: $\\vec{r}$ from the axis. Red: $\\vec{F}$ (drawn to a fixed length). Dashed: its line of action. Green: the lever arm, from the axis perpendicular to that line. Press ▶ to sweep $\\phi$ through a full turn: $\\tau_z$ is positive (counterclockwise) for $0^\\circ < \\phi < 180^\\circ$, negative after, and zero whenever the line of action passes through the axis.',
        },
        {
          type: 'derivation',
          title: 'Torque from components',
          steps: [
            { tex: '\\vec{r} = (0.30\\,\\hat{\\imath} + 0.40\\,\\hat{\\jmath})\\,\\text{m}, \\quad \\vec{F} = (12\\,\\hat{\\imath} + 5.0\\,\\hat{\\jmath})\\,\\text{N}', why: 'The force acts at the point $(0.30, 0.40)$ m relative to the axis at the origin.' },
            { tex: '\\tau_z = xF_y - yF_x = (0.30)(5.0) - (0.40)(12)', why: 'The $\\hat{k}$ component of $\\vec{r} \\times \\vec{F}$; $z$-components are zero.' },
            { tex: '= 1.5 - 4.8 = -3.3\\,\\text{N·m}', why: 'Negative: the force turns the body **clockwise**.' },
          ],
          result: '$\\vec{\\tau} = -3.3\\,\\hat{k}\\,\\text{N·m}$. Check the size: $|\\vec{\\tau}| \\le rF = (0.50)(13) = 6.5$, as it must be.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Order matters',
          text: 'Always $\\vec{r} \\times \\vec{F}$, never $\\vec{F} \\times \\vec{r}$: swapping them flips the sign. And $\\vec{r}$ runs **from the axis to the point of application**, not from the point to the axis.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'A force $\\vec{F} = (12\\,\\hat{\\imath} - 5.0\\,\\hat{\\jmath})\\,\\text{N}$ acts at the point $\\vec{r} = (0.30\\,\\hat{\\imath} + 0.40\\,\\hat{\\jmath})\\,\\text{m}$ relative to an axis along $z$ through the origin. Find $\\tau_z$, **with its sign**. Give 2 significant figures.',
      hint: '$\\tau_z = xF_y - yF_x$. Watch the negative $F_y$.',
      answer: '0.3*(-5) - 0.4*12',
      answerTex: '-6.3',
      tolerance: 0.05,
      unit: 'N·m',
      label: '$\\tau_z =$',
      explanation: '$\\tau_z = (0.30)(-5.0) - (0.40)(12) = -1.5 - 4.8 = -6.3\\,\\text{N·m}$. The minus sign means clockwise: both the downward part of $\\vec{F}$ (acting to the right of the axis) and its rightward part (acting above the axis) turn the body clockwise. Computing $yF_x - xF_y$ instead gives $+6.3$, the classic order error.',
    },
    {
      kind: 'concept',
      title: 'Newton\'s second law for rotation: $\\sum\\tau = I\\alpha$',
      blocks: [
        {
          type: 'p',
          text: 'Why should torque, of all things, control angular acceleration? Apply plain $F = ma$ to one particle of a rigid body rotating about a fixed axis, then add up.',
        },
        {
          type: 'derivation',
          title: 'From $F = ma$ to $\\sum\\tau = I\\alpha$',
          steps: [
            { tex: 'F_{t,i} = m_i a_{t,i} = m_i r_i \\alpha', why: 'Tangential component of Newton\'s second law for particle $i$; its tangential acceleration is $r_i\\alpha$. (Radial components only bend the circular path.)' },
            { tex: 'r_i F_{t,i} = m_i r_i^2 \\alpha', why: 'Multiply by $r_i$. The left side is the torque on particle $i$: only the tangential force component has a lever arm $r_i$.' },
            { tex: '\\sum_i \\tau_i = \\Big(\\sum_i m_i r_i^2\\Big)\\alpha = I\\alpha', why: 'Sum over all particles. Every particle has the same $\\alpha$, so it factors out, leaving the moment of inertia.' },
            { tex: '\\sum \\tau_{\\text{ext}} = I\\alpha', why: 'Internal forces come in Newton\'s-third-law pairs that are equal, opposite and along the same line, so they have the same lever arm and their torques cancel. Only external torques survive.' },
          ],
          result: 'The rotational version of $\\sum F = ma$: torque plays force, $I$ plays mass, $\\alpha$ plays acceleration.',
        },
        {
          type: 'definition',
          term: 'Newton\'s second law for rotation',
          text: '[[phys-rotational-second-law]]: for a rigid body rotating about a fixed axis, $\\sum \\tau_{\\text{ext}} = I\\alpha$, with every torque and $I$ taken about **the same axis**. It also holds about an axis through the center of mass, even when that center of mass is accelerating.',
        },
        {
          type: 'derivation',
          title: 'A rope pulled off a disk',
          steps: [
            { tex: 'I = \\tfrac12 MR^2 = \\tfrac12(2.0)(0.20)^2 = 0.040\\,\\text{kg·m}^2', why: 'A uniform disk of mass $2.0\\,\\text{kg}$ and radius $0.20\\,\\text{m}$ on a frictionless axle.' },
            { tex: '\\tau = RF = (0.20)(6.0) = 1.2\\,\\text{N·m}', why: 'The rope leaves the rim tangentially, so the lever arm is exactly $R$. The axle force passes through the axis and has zero torque.' },
            { tex: '\\alpha = \\frac{\\tau}{I} = \\frac{1.2}{0.040} = 30\\,\\text{rad/s}^2', why: 'Newton\'s second law for rotation.' },
          ],
          result: 'After $2.0\\,\\text{s}$ from rest the disk spins at $\\omega = \\alpha t = 60\\,\\text{rad/s}$, about $570$ rpm.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why a big force can give zero angular acceleration',
          text: 'The axle of a wheel can push on it with hundreds of newtons, yet that force never spins the wheel, because its line of action goes through the axis: zero lever arm. Likewise gravity on a wheel acts at its center of mass, on the axle, so it exerts no torque about the axle. That is why choosing the axis well makes unknown forces vanish from the torque equation.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'A grinding wheel is a uniform disk of mass $3.0\\,\\text{kg}$ and radius $0.10\\,\\text{m}$, initially at rest. A motor applies a torque of $0.45\\,\\text{N·m}$ and axle friction applies $0.15\\,\\text{N·m}$ in the opposite direction. Find the angular acceleration. Give 2 significant figures.',
      hint: 'Net torque first: the friction torque opposes the motor. Then $\\alpha = \\tau_{\\text{net}}/I$ with $I = \\tfrac12 MR^2$.',
      answer: '(0.45 - 0.15)/(0.5*3*0.1^2)',
      answerTex: '20',
      tolerance: 0.15,
      unit: 'rad/s²',
      label: '$\\alpha =$',
      explanation: '$I = \\tfrac12(3.0)(0.10)^2 = 0.015\\,\\text{kg·m}^2$ and $\\sum\\tau = 0.45 - 0.15 = 0.30\\,\\text{N·m}$, so $\\alpha = 0.30/0.015 = 20\\,\\text{rad/s}^2$. Ignoring friction gives $30$; using $MR^2$ gives $10$; adding the friction torque instead of subtracting gives $40$.',
    },
    {
      kind: 'concept',
      title: 'Pulleys with mass',
      blocks: [
        {
          type: 'p',
          text: 'In the Newton\'s laws unit, pulleys were massless, so the tension was the same on both sides. A real pulley has mass, and making it spin takes a net torque. That torque can only come from **different tensions** on its two sides. Now you need three equations: one for each block and one for the pulley.',
        },
        {
          type: 'figure',
          svg: /*fig:atwood*/`<svg viewBox="0 0 490 300" xmlns="http://www.w3.org/2000/svg"><line x1="100" y1="18" x2="200" y2="18" stroke="currentColor" class="s-gray" stroke-width="1.6"/><line x1="100" y1="18" x2="93" y2="10" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="110" y1="18" x2="103" y2="10" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="120" y1="18" x2="113" y2="10" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="130" y1="18" x2="123" y2="10" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="140" y1="18" x2="133" y2="10" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="150" y1="18" x2="143" y2="10" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="160" y1="18" x2="153" y2="10" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="170" y1="18" x2="163" y2="10" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="180" y1="18" x2="173" y2="10" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="190" y1="18" x2="183" y2="10" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="200" y1="18" x2="193" y2="10" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="150" y1="18" x2="150" y2="80" stroke="currentColor" stroke-width="2"/><circle cx="150" cy="80" r="38" fill="currentColor" class="f-gray" fill-opacity="0.2"/><circle cx="150" cy="80" r="38" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="150" cy="80" r="4" fill="currentColor"/><text x="196" y="50" font-size="13" text-anchor="start" font-style="italic">M, R</text><line x1="112" y1="80" x2="112" y2="230" stroke="currentColor" stroke-width="1.8"/><line x1="188" y1="80" x2="188" y2="175" stroke="currentColor" stroke-width="1.8"/><rect x="90" y="230" width="44" height="36" rx="0" fill="currentColor" class="f-blue" fill-opacity="0.25"/><rect x="90" y="230" width="44" height="36" rx="0" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="112" y="254" font-size="14" text-anchor="middle">m₁</text><rect x="162" y="175" width="52" height="48" rx="0" fill="currentColor" class="f-red" fill-opacity="0.25"/><rect x="162" y="175" width="52" height="48" rx="0" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="188" y="205" font-size="14" text-anchor="middle">m₂</text><path d="M131.6,64.6 A24,24 0 0 1 168.4,64.6" fill="none" stroke="currentColor" class="s-orange" stroke-width="2"/><path d="M168.4,64.6 L166.3,55.9 L160.2,61 Z" fill="currentColor" class="f-orange"/><text x="162" y="106" font-size="14" text-anchor="middle" class="t-orange" font-style="italic">α</text><line x1="78" y1="262" x2="78" y2="228.3" stroke="currentColor" class="s-green" stroke-width="2"/><path d="M78,222 L73.5,231 L82.5,231 Z" fill="currentColor" class="f-green"/><text x="72" y="246" font-size="14" text-anchor="end" class="t-green" font-style="italic">a</text><line x1="226" y1="180" x2="226" y2="213.7" stroke="currentColor" class="s-green" stroke-width="2"/><path d="M226,220 L230.5,211 L221.5,211 Z" fill="currentColor" class="f-green"/><text x="232" y="204" font-size="14" text-anchor="start" class="t-green" font-style="italic">a</text><text x="330" y="22" font-size="12" text-anchor="middle" class="t-gray">pulley</text><circle cx="330" cy="80" r="38" fill="currentColor" class="f-gray" fill-opacity="0.15"/><circle cx="330" cy="80" r="38" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="330" cy="80" r="4" fill="currentColor"/><line x1="292" y1="80" x2="292" y2="133.7" stroke="currentColor" class="s-blue" stroke-width="2.2"/><path d="M292,140 L296.5,131 L287.5,131 Z" fill="currentColor" class="f-blue"/><text x="286" y="140" font-size="14" text-anchor="end" class="t-blue" font-style="italic">T₁</text><line x1="368" y1="80" x2="368" y2="153.7" stroke="currentColor" class="s-red" stroke-width="2.2"/><path d="M368,160 L372.5,151 L363.5,151 Z" fill="currentColor" class="f-red"/><text x="374" y="160" font-size="14" text-anchor="start" class="t-red" font-style="italic">T₂</text><text x="330" y="150" font-size="11" text-anchor="middle" class="t-gray">(axle force</text><text x="330" y="164" font-size="11" text-anchor="middle" class="t-gray">not shown)</text><text x="430" y="22" font-size="12" text-anchor="middle" class="t-gray">m₁</text><rect x="416" y="70" width="28" height="24" rx="0" fill="currentColor" class="f-blue" fill-opacity="0.25"/><rect x="416" y="70" width="28" height="24" rx="0" fill="none" stroke="currentColor" stroke-width="1.4"/><line x1="430" y1="70" x2="430" y2="36.3" stroke="currentColor" class="s-blue" stroke-width="2.2"/><path d="M430,30 L425.5,39 L434.5,39 Z" fill="currentColor" class="f-blue"/><text x="438" y="44" font-size="13" text-anchor="start" class="t-blue" font-style="italic">T₁</text><line x1="430" y1="94" x2="430" y2="123.7" stroke="currentColor" class="s-gray" stroke-width="2.2"/><path d="M430,130 L434.5,121 L425.5,121 Z" fill="currentColor" class="f-gray"/><text x="438" y="128" font-size="13" text-anchor="start" class="t-gray" font-style="italic">m₁g</text><text x="430" y="178" font-size="12" text-anchor="middle" class="t-gray">m₂</text><rect x="416" y="215" width="28" height="24" rx="0" fill="currentColor" class="f-red" fill-opacity="0.25"/><rect x="416" y="215" width="28" height="24" rx="0" fill="none" stroke="currentColor" stroke-width="1.4"/><line x1="430" y1="215" x2="430" y2="194.3" stroke="currentColor" class="s-red" stroke-width="2.2"/><path d="M430,188 L425.5,197 L434.5,197 Z" fill="currentColor" class="f-red"/><text x="438" y="202" font-size="13" text-anchor="start" class="t-red" font-style="italic">T₂</text><line x1="430" y1="239" x2="430" y2="283.7" stroke="currentColor" class="s-gray" stroke-width="2.2"/><path d="M430,290 L434.5,281 L425.5,281 Z" fill="currentColor" class="f-gray"/><text x="438" y="284" font-size="13" text-anchor="start" class="t-gray" font-style="italic">m₂g</text></svg>`,
          alt: 'An Atwood machine: a disk-shaped pulley of mass M and radius R hangs from the ceiling with block m1 on the left rope and heavier block m2 on the right rope. Free-body diagrams show the pulley pulled down by T1 on the left rim and T2 on the right rim, and each block with tension up and weight down.',
          caption: 'Free-body diagrams for the Atwood machine with a massive pulley. The tensions $T_1$ and $T_2$ are **not** equal. (The axle\'s upward force on the pulley has zero torque and is left out.)',
          maxWidth: 480,
        },
        {
          type: 'derivation',
          title: 'Atwood machine with a disk pulley ($m_2 > m_1$, rope does not slip)',
          steps: [
            { tex: 'T_1 - m_1 g = m_1 a', why: 'Block 1 accelerates **up**; take up as positive for it.' },
            { tex: 'm_2 g - T_2 = m_2 a', why: 'Block 2 accelerates **down**; take down as positive for it so both blocks share the same $a$.' },
            { tex: '(T_2 - T_1)R = I\\alpha = \\tfrac12 MR^2 \\cdot \\frac{a}{R}', why: 'Torques on the pulley about its axle (clockwise positive, matching the motion). No-slip rope: $a = R\\alpha$.' },
            { tex: 'T_2 - T_1 = \\tfrac12 Ma', why: 'Divide by $R$: the radius cancels.' },
            { tex: '(m_2 - m_1)g = \\big(m_1 + m_2 + \\tfrac12 M\\big)a', why: 'Add all three equations: the tensions cancel, leaving the net driving force and the total "effective mass".' },
            { tex: 'a = \\frac{(m_2 - m_1)g}{m_1 + m_2 + \\tfrac12 M}', why: 'With $m_1 = 2.0$, $m_2 = 3.0$, $M = 2.0\\,\\text{kg}$ and $g = 9.80\\,\\text{m/s}^2$: $a = 9.80/6.0 = 1.63\\,\\text{m/s}^2$, so $T_1 = 22.9\\,\\text{N}$ and $T_2 = 24.5\\,\\text{N}$.' },
          ],
          result: 'Limit check: $M \\to 0$ recovers the massless-pulley result $\\frac{(m_2 - m_1)g}{m_1 + m_2}$ and equal tensions.',
        },
        {
          type: 'graph',
          x: [0, 10],
          y: [0, 3.5],
          xStep: 1,
          yStep: 0.5,
          height: 250,
          functions: [{ expr: '(q - p)*9.8/(p + q + x/2)', label: '$a$ (m/s²) vs pulley mass $M$ (kg)' }],
          points: [{ x: 'k', y: '(q - p)*9.8/(p + q + k/2)', color: 'orange' }],
          sliders: [
            { name: 'p', min: 1, max: 5, step: 0.1, value: 2, label: '$m_1$ (kg)' },
            { name: 'q', min: 1, max: 5, step: 0.1, value: 3, label: '$m_2$ (kg)' },
            { name: 'k', min: 0, max: 10, step: 0.1, value: 2, label: 'pulley mass $M$ (kg)' },
          ],
          readouts: [
            { label: '$a$ (m/s²) $=$', expr: '(q - p)*9.8/(p + q + k/2)', digits: 3 },
            { label: '$T_1$ (N) $=$', expr: 'p*(9.8 + (q - p)*9.8/(p + q + k/2))', digits: 3 },
            { label: '$T_2$ (N) $=$', expr: 'q*(9.8 - (q - p)*9.8/(p + q + k/2))', digits: 3 },
          ],
          caption: 'A heavier pulley means slower acceleration and a bigger difference $T_2 - T_1 = \\tfrac12 Ma$. Set $M = 0$ and the tensions become equal. (If you make $m_1 > m_2$, $a$ goes negative: the system runs the other way.)',
        },
      ],
    },
    {
      kind: 'expr',
      prompt: 'A block of mass $m$ hangs from a light rope wound around a uniform disk (mass $M$, radius $R$) that turns on a frictionless horizontal axle. The block is released. Find the magnitude of its acceleration in terms of $m$, $M$ and $g$.',
      hint: 'Block: $mg - T = ma$. Disk: $TR = \\tfrac12 MR^2 \\alpha$ with $\\alpha = a/R$, so $T = \\tfrac12 Ma$. Combine.',
      variables: ['m', 'M', 'g'],
      domain: [0.5, 3],
      label: '$a =$',
      answer: '2m*g/(2m + M)',
      answerTex: '\\dfrac{mg}{m + M/2} = \\dfrac{2mg}{2m + M}',
      explanation: 'From the disk, $T = \\tfrac12 Ma$. Substituting into $mg - T = ma$: $mg = (m + \\tfrac12 M)a$, so $a = \\frac{mg}{m + M/2}$. Check the limits: $M \\to 0$ gives free fall $a = g$; a very heavy disk gives $a \\to 0$. This matches the energy result from the previous lesson, $v^2 = \\frac{2mgh}{m + M/2} = 2ah$.',
    },
    {
      kind: 'error',
      prompt: 'A student analyses an Atwood machine with a massive disk pulley, with $m_2 > m_1$, so $m_1$ rises. Tap the first wrong line.',
      lines: [
        'Block 1: $m_1 g - T_1 = m_1 a$',
        'Block 2: $m_2 g - T_2 = m_2 a$',
        'Pulley: $(T_2 - T_1)R = \\tfrac12 MR^2 (a/R)$',
        'Add: $(m_1 + m_2)g - 2T_1 = (m_1 + m_2 + \\tfrac12 M)a$',
      ],
      errorLines: [1],
      explanation: 'Block 1 accelerates **upward**, so with the shared magnitude $a$ its equation must be $T_1 - m_1 g = m_1 a$ (net force up). Writing $m_1 g - T_1$ treats both blocks as falling. With the correct sign, adding gives $(m_2 - m_1)g = (m_1 + m_2 + \\tfrac12 M)a$. A red flag in the student\'s work: the tensions refuse to cancel when the three equations are added, leaving a stray $-2T_1$.',
    },
    {
      kind: 'concept',
      title: 'Rotational work and power',
      blocks: [
        {
          type: 'p',
          text: 'When a torque turns a body through an angle, it does work, just as a force does work through a displacement. The rotational versions follow directly from the definition of [[work]].',
        },
        {
          type: 'derivation',
          title: 'Work and power for rotation',
          steps: [
            { tex: 'dW = F_t\\,ds = F_t\\,(r\\,d\\theta) = \\tau\\,d\\theta', why: 'Only the tangential force component does work on a point moving along its circle; the arc it moves is $ds = r\\,d\\theta$.' },
            { tex: 'W = \\int_{\\theta_1}^{\\theta_2} \\tau\\,d\\theta', why: 'Add up over the rotation. For constant torque, $W = \\tau\\,\\Delta\\theta$.' },
            { tex: 'W_{\\text{net}} = \\int I\\alpha\\,d\\theta = \\int I\\omega\\,d\\omega = \\tfrac12 I\\omega_f^2 - \\tfrac12 I\\omega_i^2', why: 'Use $\\alpha\\,d\\theta = \\frac{d\\omega}{dt}d\\theta = \\omega\\,d\\omega$: the rotational work–energy theorem.' },
            { tex: 'P = \\frac{dW}{dt} = \\tau\\frac{d\\theta}{dt} = \\tau\\omega', why: 'Power is the rate of doing work. Compare $P = Fv$ for translation.' },
          ],
          result: 'Example: a motor exerting a constant $12\\,\\text{N·m}$ for $25$ rev does $W = 12 \\times 50\\pi \\approx 1.88\\,\\text{kJ}$. On a wheel with $I = 0.80\\,\\text{kg·m}^2$ starting from rest, that gives $\\omega = \\sqrt{2W/I} \\approx 68.6\\,\\text{rad/s}$.',
        },
        {
          type: 'p',
          text: 'Car and motor specs quote torque and power separately because $P = \\tau\\omega$ links them through engine speed. The graph shows a made-up but realistic torque curve.',
        },
        {
          type: 'graph',
          x: [1, 7],
          y: [0, 450],
          xStep: 1,
          yStep: 50,
          height: 280,
          functions: [
            { expr: '420 - 15(x - 4)^2', label: 'torque $\\tau$ (N·m)', color: 'blue' },
            { expr: '(420 - 15(x - 4)^2)*x*pi/30', label: 'power $P = \\tau\\omega$ (kW)', color: 'red' },
          ],
          vlines: [{ x: 'c', color: 'gray' }],
          points: [
            { x: 'c', y: '420 - 15(c - 4)^2', color: 'blue' },
            { x: 'c', y: '(420 - 15(c - 4)^2)*c*pi/30', color: 'red' },
          ],
          sliders: [{ name: 'c', min: 1, max: 7, step: 0.05, value: 4, label: 'engine speed (thousands of rpm)', play: true, speed: 1.5 }],
          readouts: [
            { label: '$\\omega$ (rad/s) $=$', expr: '1000c*2pi/60', digits: 0 },
            { label: '$\\tau$ (N·m) $=$', expr: '420 - 15(c - 4)^2', digits: 0 },
            { label: '$P$ (kW) $=$', expr: '(420 - 15(c - 4)^2)*c*pi/30', digits: 1 },
          ],
          caption: 'Horizontal axis: engine speed in thousands of rpm. Torque peaks at $4000$ rpm, but power keeps rising until about $6000$ rpm because $\\omega$ is still growing faster than $\\tau$ is falling. That is why you shift late for maximum acceleration.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'An electric motor delivers a torque of $250\\,\\text{N·m}$ at $3000\\,\\text{rpm}$. What is its power output in kilowatts? Give 3 significant figures.',
      hint: '$P = \\tau\\omega$ with $\\omega$ in rad/s.',
      answer: '250*3000*2pi/60/1000',
      answerTex: '78.5',
      tolerance: 0.4,
      unit: 'kW',
      label: '$P =$',
      explanation: '$\\omega = 3000 \\cdot \\frac{2\\pi}{60} = 314.2\\,\\text{rad/s}$, so $P = (250)(314.2) = 78\\,500\\,\\text{W} = 78.5\\,\\text{kW}$ (about $105$ hp). Plugging in $3000$ rpm directly gives $750\\,\\text{kW}$, ten times too much: rpm and rad/s differ by a factor of $2\\pi/60 \\approx 0.105$.',
    },
    {
      kind: 'concept',
      title: 'Torque in a physics engine',
      blocks: [
        {
          type: 'p',
          text: 'A rigid-body engine treats every body the same way each frame: add up forces for the linear motion, add up $\\vec{r} \\times \\vec{F}$ for the rotation, then integrate. A force applied away from the center of mass (a grenade blast on one corner of a crate, a hit on a ragdoll\'s arm) produces both a push and a spin.',
        },
        {
          type: 'code',
          title: 'door.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdio>

struct Vec2 { double x, y; };

// z-component of r x F: the 2D torque (counterclockwise positive)
double cross2(Vec2 r, Vec2 F) { return r.x * F.y - r.y * F.x; }

// Push a door (uniform slab, hinge at the origin) until it has swung 90 degrees.
// The push is fixed relative to the door: applied at distance d from the hinge,
// at angle phi (degrees) to the door. Returns the time taken.
double timeToOpen(double d, double phiDeg) {
    const double M = 20.0, W = 0.90, F = 10.0;    // kg, m, N
    const double I = M * W * W / 3.0;             // slab about its hinge edge
    const double PI = std::acos(-1.0), dt = 1.0 / 120.0;
    double theta = 0.0, omega = 0.0, t = 0.0;
    while (theta < PI / 2) {
        Vec2 r = {d * std::cos(theta), d * std::sin(theta)};
        double a = theta + phiDeg * PI / 180.0;   // force direction in the world
        Vec2 force = {F * std::cos(a), F * std::sin(a)};
        double alpha = cross2(r, force) / I;      // sum of torques = I alpha
        omega += alpha * dt;                      // semi-implicit Euler
        theta += omega * dt;
        t += dt;
    }
    return t;
}

int main() {
    std::printf("edge, perpendicular : %.3f s\\n", timeToOpen(0.90, 90.0));
    std::printf("middle, perpendicular: %.3f s\\n", timeToOpen(0.45, 90.0));
    std::printf("edge, 30 deg to door : %.3f s\\n", timeToOpen(0.90, 30.0));
}`,
          output: `edge, perpendicular : 1.375 s
middle, perpendicular: 1.942 s
edge, 30 deg to door : 1.942 s`,
          annotations: [
            { lines: 7, text: 'The 2D cross product: $\\tau_z = xF_y - yF_x$.' },
            { lines: 14, text: 'A door is a slab hinged on one edge, which has the same $I$ as a rod about its end: $\\tfrac13 MW^2 = 5.4\\,\\text{kg·m}^2$.' },
            { lines: '18-20', text: 'The lever arm vector and the force both rotate with the door each frame.' },
            { lines: 21, text: '$\\sum\\tau = I\\alpha$, solved for $\\alpha$.' },
            { lines: '30-32', text: 'The exact time is $\\sqrt{2\\theta/\\alpha}$: $1.373\\,\\text{s}$ for the edge push ($\\tau = 9.0\\,\\text{N·m}$) and $1.942\\,\\text{s}$ for the other two ($\\tau = 4.5\\,\\text{N·m}$), matching the door question.' },
          ],
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Units check in code',
          text: 'Torque (N·m) and energy (J $=$ N·m) share units, but they are different things. Engines keep them apart by type: torque is a vector (an axis and a turning strength), work is a scalar. Writing `float torque` in 2D and `Vec3 torque` in 3D, never mixing it with energy, avoids a whole class of bugs.',
        },
      ],
    },
    {
      kind: 'truefalse',
      prompt: 'A large force applied to a wheel will always produce a large torque about its axle.',
      answer: false,
      explanation: 'Torque is $r_\\perp F$. If the force\'s line of action passes through the axle (like the axle\'s own support force, or gravity on a balanced wheel), the lever arm is zero and so is the torque, however large $F$ is. A small force with a long lever arm can out-torque a huge force with a short one.',
    },
    {
      kind: 'order',
      prompt: 'Order the steps for solving a problem with a hanging block and a massive pulley.',
      lines: [
        'Draw separate free-body diagrams for the block and the pulley, with forces at their points of application, and choose positive directions that agree (the block\'s direction of motion and the matching sense of rotation)',
        'Write $\\sum F = ma$ for the block and $\\sum \\tau = I\\alpha$ for the pulley about its axle, plus the constraint $a = R\\alpha$ from the rope not slipping',
        'Solve the equations together, then check the limits $M \\to 0$ and $M \\to \\infty$',
      ],
      distractors: ['Assume the tension equals the block\'s weight $mg$'],
      explanation: 'Diagrams first, then a consistent sign convention, then one dynamics equation per object, then the constraint that ties linear and angular motion together, and finally solve and check limits. If the tension equalled $mg$, the block would not accelerate at all, which contradicts the pulley spinning up.',
    },
    {
      kind: 'fill',
      prompt: 'Complete the rotational dictionary.',
      template: 'Force corresponds to ___, mass to ___, and $\\sum F = ma$ to $\\sum\\tau =$ ___. Power $P = Fv$ becomes $P =$ ___.',
      blanks: [{ answers: ['torque $\\tau$'] }, { answers: ['moment of inertia $I$'] }, { answers: ['$I\\alpha$'] }, { answers: ['$\\tau\\omega$'] }],
      wordBank: ['torque $\\tau$', 'moment of inertia $I$', '$I\\alpha$', '$\\tau\\omega$', 'lever arm $r_\\perp$', '$I\\omega$', '$\\tau / \\omega$'],
      explanation: 'Torque causes angular acceleration as force causes acceleration; $I$ resists it as mass does: $\\sum\\tau = I\\alpha$. Power is torque times angular velocity, $\\tau\\omega$, the rotational twin of $Fv$. ($I\\omega$ is angular momentum, the subject of the next unit.)',
    },
  ],
  takeaways: [
    'Torque measures turning effect: $\\tau = rF\\sin\\phi = r_\\perp F$, or as a vector $\\vec{\\tau} = \\vec{r} \\times \\vec{F}$ with $\\vec{r}$ from the axis to the point of application.',
    'In 2D, $\\tau_z = xF_y - yF_x$: positive is counterclockwise. A force through the axis has zero torque.',
    'Newton\'s second law for rotation: $\\sum\\tau_{\\text{ext}} = I\\alpha$, with torques and $I$ about the same axis; internal torques cancel.',
    'A massive pulley needs different tensions on its two sides; solve one equation per object plus $a = R\\alpha$.',
    'Rotational work and power: $W = \\int\\tau\\,d\\theta$, $W_{\\text{net}} = \\Delta(\\tfrac12 I\\omega^2)$, $P = \\tau\\omega$ (with $\\omega$ in rad/s).',
  ],
  reading: [
    {
      title: 'OpenStax University Physics Volume 1, Chapter 10: Fixed-Axis Rotation',
      url: 'https://openstax.org/details/books/university-physics-volume-1',
      source: 'openstax',
      note: 'Sections 10.6 to 10.8 cover torque, Newton\'s second law for rotation, and rotational work and power.',
    },
    {
      title: 'PhET Interactive Simulations',
      url: 'https://phet.colorado.edu/',
      source: 'other',
      note: 'Search for the "Torque" and "Balancing Act" simulations to feel how lever arm and force trade off.',
    },
    {
      title: 'Wikipedia: Torque',
      url: 'https://en.wikipedia.org/wiki/Torque',
      source: 'wikipedia',
      note: 'Covers the vector definition, the relation to angular momentum, and torque–power curves for engines.',
    },
  ],
};
