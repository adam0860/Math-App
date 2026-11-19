import type { Lesson } from '../../types';

// Rolling-race helpers: acceleration down a slope of angle q degrees for I = cMR^2.
const acc = (c: string) => `9.8*sin(q*pi/180)/(1 + ${c})`;
const pos = (c: string) => `min(0.5*${acc(c)}*s^2, 2)`;
const tFinish = (c: string) => `sqrt(4/(${acc(c)}))`;

export const lesson: Lesson = {
  id: 'phys-rolling',
  title: 'Rolling Motion',
  summary: 'Rolling without slipping as translation plus rotation: why the contact point is at rest, the cycloid traced by the rim, the kinetic energy of rolling, and which shape wins a race down a ramp.',
  minutes: 18,
  objectives: [
    'Explain rolling without slipping as translation plus rotation with $v_{\\text{cm}} = R\\omega$ and $a_{\\text{cm}} = R\\alpha$',
    'Show that the contact point is momentarily at rest and find the velocity of any point on a rolling wheel',
    'Compute the kinetic energy of a rolling body, $K = \\tfrac12 Mv_{\\text{cm}}^2 + \\tfrac12 I_{\\text{cm}}\\omega^2$',
    'Predict and explain the result of a race of rolling objects down an incline, using both energy and forces',
    'Describe the role of static friction in rolling and what happens when a ball slides before it rolls',
  ],
  steps: [
    {
      kind: 'concept',
      title: 'Rolling = translation + rotation',
      blocks: [
        {
          type: 'p',
          text: 'A rolling wheel does two things at once: its center moves forward, and it spins about that center. The cleanest way to analyse it is to treat these separately and add the velocities, point by point.',
        },
        {
          type: 'p',
          text: 'Rolling **without slipping** means the wheel does not skid: as it turns through an angle $\\theta$, it advances exactly the arc length it has "unrolled" onto the ground, $x_{\\text{cm}} = R\\theta$. Differentiate once and twice:',
        },
        { type: 'math', tex: 'x_{\\text{cm}} = R\\theta \\implies v_{\\text{cm}} = R\\omega \\implies a_{\\text{cm}} = R\\alpha', caption: 'The rolling constraint. It is a condition on the motion, not a law of nature: a skidding tire breaks it.' },
        {
          type: 'figure',
          svg: /*fig:roll-superpose*/`<svg viewBox="0 0 500 215" xmlns="http://www.w3.org/2000/svg"><circle cx="70" cy="120" r="42" fill="currentColor" class="f-gray" fill-opacity="0.12"/><circle cx="70" cy="120" r="42" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="70" cy="120" r="3.5" fill="currentColor"/><text x="70" y="26" font-size="13" text-anchor="middle" class="t-gray">translation</text><circle cx="250" cy="120" r="42" fill="currentColor" class="f-gray" fill-opacity="0.12"/><circle cx="250" cy="120" r="42" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="250" cy="120" r="3.5" fill="currentColor"/><text x="250" y="26" font-size="13" text-anchor="middle" class="t-gray">rotation about CM</text><circle cx="430" cy="120" r="42" fill="currentColor" class="f-gray" fill-opacity="0.12"/><circle cx="430" cy="120" r="42" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="430" cy="120" r="3.5" fill="currentColor"/><text x="430" y="26" font-size="13" text-anchor="middle" class="t-gray">rolling</text><line x1="10" y1="162" x2="490" y2="162" stroke="currentColor" class="s-gray" stroke-width="1.4"/><line x1="70" y1="78" x2="104.4" y2="78" stroke="currentColor" class="s-blue" stroke-width="2.2"/><path d="M110,78 L102,74 L102,82 Z" fill="currentColor" class="f-blue"/><line x1="70" y1="120" x2="104.4" y2="120" stroke="currentColor" class="s-blue" stroke-width="2.2"/><path d="M110,120 L102,116 L102,124 Z" fill="currentColor" class="f-blue"/><line x1="70" y1="162" x2="104.4" y2="162" stroke="currentColor" class="s-blue" stroke-width="2.2"/><path d="M110,162 L102,158 L102,166 Z" fill="currentColor" class="f-blue"/><text x="116" y="83" font-size="13" text-anchor="start" class="t-blue" font-style="italic">v</text><text x="116" y="125" font-size="13" text-anchor="start" class="t-blue" font-style="italic">v</text><text x="116" y="167" font-size="13" text-anchor="start" class="t-blue" font-style="italic">v</text><text x="160" y="126" font-size="26" text-anchor="middle">+</text><line x1="250" y1="78" x2="284.4" y2="78" stroke="currentColor" class="s-red" stroke-width="2.2"/><path d="M290,78 L282,74 L282,82 Z" fill="currentColor" class="f-red"/><text x="296" y="83" font-size="13" text-anchor="start" class="t-red" font-style="italic">Rω</text><line x1="250" y1="162" x2="215.6" y2="162" stroke="currentColor" class="s-red" stroke-width="2.2"/><path d="M210,162 L218,166 L218,158 Z" fill="currentColor" class="f-red"/><text x="204" y="167" font-size="13" text-anchor="end" class="t-red" font-style="italic">Rω</text><path d="M233.1,113.8 A18,18 0 0 1 266.9,113.8" fill="none" stroke="currentColor" class="s-orange" stroke-width="1.8"/><path d="M266.9,113.8 L267.9,105 L260.4,107.7 Z" fill="currentColor" class="f-orange"/><text x="250" y="140" font-size="13" text-anchor="middle" class="t-orange" font-style="italic">ω</text><text x="340" y="126" font-size="26" text-anchor="middle">=</text><line x1="430" y1="78" x2="504.4" y2="78" stroke="currentColor" class="s-purple" stroke-width="2.4"/><path d="M510,78 L502,74 L502,82 Z" fill="currentColor" class="f-purple"/><text x="506" y="70" font-size="13" text-anchor="end" class="t-purple" font-style="italic">2v</text><line x1="430" y1="120" x2="464.4" y2="120" stroke="currentColor" class="s-purple" stroke-width="2.4"/><path d="M470,120 L462,116 L462,124 Z" fill="currentColor" class="f-purple"/><text x="476" y="125" font-size="13" text-anchor="start" class="t-purple" font-style="italic">v</text><circle cx="430" cy="162" r="5" fill="currentColor" class="f-green"/><text x="440" y="184" font-size="13" text-anchor="start" class="t-green" font-style="italic">v = 0</text><text x="250" y="205" font-size="12" text-anchor="middle" class="t-gray">with v = Rω, the bottom velocities cancel</text></svg>`,
          alt: 'Three wheels. Left: pure translation, every point moves right at v. Middle: pure rotation about the center, the top moves right at R omega and the bottom moves left at R omega. Right: their sum, rolling, with the top moving at 2v, the center at v, and the bottom contact point at rest.',
          caption: 'Add the translation of the center to the rotation about it. With $v = R\\omega$ the two velocities at the bottom cancel exactly, and at the top they add to $2v$.',
        },
        {
          type: 'definition',
          term: 'Rolling without slipping',
          text: '[[phys-rolling-without-slipping]]: motion in which the point of the body touching the surface has zero velocity relative to that surface. For a round body of radius $R$ on a fixed surface this is equivalent to $v_{\\text{cm}} = R\\omega$.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'The bottom of the tire is not moving',
          text: 'It feels wrong, but the patch of tire touching the road is momentarily **at rest** relative to the road, even at highway speed. That is why the tire can grip with *static* friction, and why skidding (when the patch does slide) loses grip so suddenly. Anti-lock brakes exist to keep the tire rolling instead of sliding.',
        },
      ],
    },
    {
      kind: 'mcq',
      prompt: 'A bicycle moves at $6.0\\,\\text{m/s}$ and its wheels roll without slipping. How fast is the **top** of a tire moving relative to the road?',
      options: [
        {
          text: '$12\\,\\text{m/s}$',
          correct: true,
          why: 'At the top the rotational velocity $R\\omega = v$ points forward, the same way as the center\'s $v$, so they add to $2v$.',
        },
        {
          text: '$6.0\\,\\text{m/s}$',
          why: 'That is the speed of the center (the axle). The top also has the forward rotational velocity $R\\omega$ on top of it.',
        },
        {
          text: '$0$',
          why: 'That is the **bottom** of the tire, the contact point, where the two velocities cancel.',
        },
        {
          text: '$8.5\\,\\text{m/s}$',
          why: 'That is $\\sqrt2\\,v$, the speed of a point level with the axle at the front or back, where the two velocities are perpendicular.',
        },
      ],
      explanation: 'Velocity of a point = velocity of the center + velocity from rotation about the center. At the top both are $6.0\\,\\text{m/s}$ forward, giving $12\\,\\text{m/s}$. Photos of moving bikes show this: the spokes at the top are blurred while those near the ground are sharp.',
    },
    {
      kind: 'concept',
      title: 'The contact point and the cycloid',
      blocks: [
        {
          type: 'p',
          text: 'Follow one point on the rim of a wheel of radius $R$ that starts at the bottom. After the wheel has turned through $\\theta$, the center is at $(R\\theta, R)$ and the point sits at angle $\\theta$ behind the bottom of the wheel. Its path is a [[cycloid]], which you met with parametric equations:',
        },
        { type: 'math', tex: 'x = R(\\theta - \\sin\\theta), \\qquad y = R(1 - \\cos\\theta)' },
        {
          type: 'graph',
          x: [-0.6, 7.2],
          y: [-0.6, 3.2],
          equal: true,
          parametric: [
            { x: 't - sin(t)', y: '1 - cos(t)', t: [0, '2pi'], color: 'gray', dashed: true },
            { x: 't - sin(t)', y: '1 - cos(t)', t: [0, 's'], color: 'purple' },
            { x: 's + cos(t)', y: '1 + sin(t)', t: [0, '2pi'], color: 'blue' },
          ],
          segments: [
            { from: [-0.6, 0], to: [7.2, 0], color: 'gray' },
            { from: ['s', 1], to: ['s - sin(s)', '1 - cos(s)'], color: 'blue' },
            { from: ['s', 1], to: ['s + sin(s)', '1 + cos(s)'], color: 'blue' },
            { from: ['s', 1], to: ['s - cos(s)', '1 + sin(s)'], color: 'blue' },
            { from: ['s', 1], to: ['s + cos(s)', '1 - sin(s)'], color: 'blue' },
            { from: ['s', 0], to: ['s - sin(s)', '1 - cos(s)'], color: 'green', dashed: true },
            { from: ['s - sin(s)', '1 - cos(s)'], to: ['s - sin(s) + 0.7(1 - cos(s))', '1 - cos(s) + 0.7sin(s)'], color: 'red', arrow: true },
            { from: ['s', 1], to: ['s + 0.7', 1], color: 'orange', arrow: true },
          ],
          points: [
            { x: 's - sin(s)', y: '1 - cos(s)', color: 'red', label: 'P' },
            { x: 's', y: 0, color: 'green' },
          ],
          sliders: [{ name: 's', min: 0, max: 6.283, step: 0.01, value: 2, label: 'angle rolled $\\theta$ (rad)', play: true, speed: 1.4 }],
          readouts: [
            { label: 'speed of $P$ / $v_{\\text{cm}} = 2|\\sin(\\theta/2)| =$', expr: '2abs(sin(s/2))', digits: 3 },
            { label: 'height of $P$ / $R =$', expr: '1 - cos(s)', digits: 3 },
          ],
          caption: 'A wheel with $R = 1$ rolling to the right. Orange: velocity of the center. Red: velocity of rim point $P$ (same scale). Green: the contact point and the line from it to $P$. Press ▶: $P$ stops dead at the ground, then sweeps over the top at twice the wheel\'s speed. Its velocity is always **perpendicular** to the green line.',
        },
        {
          type: 'derivation',
          title: 'The rim point\'s velocity, by differentiating',
          steps: [
            { tex: 'v_x = \\frac{dx}{dt} = R(1 - \\cos\\theta)\\,\\omega, \\qquad v_y = \\frac{dy}{dt} = R\\sin\\theta\\,\\omega', why: 'Chain rule: $\\frac{d}{dt} = \\frac{d\\theta}{dt}\\frac{d}{d\\theta}$ with $\\frac{d\\theta}{dt} = \\omega$.' },
            { tex: 'v^2 = R^2\\omega^2\\left[(1 - \\cos\\theta)^2 + \\sin^2\\theta\\right] = R^2\\omega^2 (2 - 2\\cos\\theta)', why: 'Expand and use $\\sin^2\\theta + \\cos^2\\theta = 1$.' },
            { tex: 'v = 2R\\omega\\left|\\sin\\tfrac{\\theta}{2}\\right| = 2v_{\\text{cm}}\\left|\\sin\\tfrac{\\theta}{2}\\right|', why: 'Half-angle identity $1 - \\cos\\theta = 2\\sin^2(\\theta/2)$, and $R\\omega = v_{\\text{cm}}$.' },
            { tex: '\\theta = 0, 2\\pi, \\dots \\implies v = 0', why: 'Exactly when $P$ touches the ground, its velocity is zero: the contact point is at rest. At $\\theta = \\pi$ (the top) $v = 2v_{\\text{cm}}$.' },
          ],
          result: 'The cycloid has a sharp cusp at the ground: the point comes straight down, stops, and lifts straight up.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Rotation about the contact point',
          text: 'Because the contact point is momentarily at rest, the whole wheel is momentarily **rotating about it** with the same $\\omega$. Every point moves perpendicular to the line joining it to the contact point, at speed $\\omega \\times$ (its distance from the contact point). The top is $2R$ away: $2R\\omega = 2v$. A point level with the axle is $\\sqrt2 R$ away: $\\sqrt2\\,v$.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'A bicycle rolls without slipping at $6.0\\,\\text{m/s}$. How fast is a point on the tire that is level with the axle, at the very front of the wheel, moving relative to the road? Give 3 significant figures.',
      hint: 'Treat the wheel as rotating about the contact point. How far is that front point from the ground contact?',
      answer: 'sqrt(2)*6',
      answerTex: '8.49',
      tolerance: 0.05,
      unit: 'm/s',
      label: '$v =$',
      explanation: 'Translation gives $6.0\\,\\text{m/s}$ forward; rotation about the center gives $R\\omega = 6.0\\,\\text{m/s}$ straight down at the front point. These are perpendicular, so $v = \\sqrt{6.0^2 + 6.0^2} = 6.0\\sqrt2 \\approx 8.49\\,\\text{m/s}$, pointing forward and down at $45^\\circ$. Same answer from the contact point: distance $\\sqrt2 R$, speed $\\sqrt2 R\\omega$.',
    },
    {
      kind: 'concept',
      title: 'The kinetic energy of a rolling body',
      blocks: [
        {
          type: 'p',
          text: 'A rolling body has kinetic energy from both motions. The clean way to split it uses the center of mass.',
        },
        {
          type: 'theorem',
          name: 'Kinetic energy of rolling',
          tex: 'K = \\tfrac12 Mv_{\\text{cm}}^2 + \\tfrac12 I_{\\text{cm}}\\omega^2',
          text: 'The translational kinetic energy of the center of mass plus the [[phys-rotational-kinetic-energy]] about the center of mass. This split works for any rigid body, rolling or not.',
        },
        {
          type: 'derivation',
          title: 'Two views, one answer (round body with $I_{\\text{cm}} = cMR^2$)',
          steps: [
            { tex: 'K = \\tfrac12 Mv^2 + \\tfrac12 cMR^2 \\left(\\frac{v}{R}\\right)^2', why: 'Translation plus rotation about the CM, with $\\omega = v/R$ from rolling without slipping.' },
            { tex: '= \\tfrac12 (1 + c) Mv^2', why: 'The $R^2$ cancels. A rolling body behaves like a sliding one with "effective mass" $(1 + c)M$.' },
            { tex: 'I_P = cMR^2 + MR^2 = (1 + c)MR^2', why: 'Check: view the motion as pure rotation about the contact point $P$. The [[phys-parallel-axis-theorem]] gives $I_P$.' },
            { tex: 'K = \\tfrac12 I_P\\omega^2 = \\tfrac12 (1 + c)MR^2\\frac{v^2}{R^2} = \\tfrac12(1 + c)Mv^2', why: 'The same result: the two descriptions agree, as they must.' },
          ],
          result: 'The fraction of the kinetic energy tied up in spinning is $\\frac{c}{1 + c}$, independent of speed, mass and size.',
        },
        {
          type: 'table',
          headers: ['Shape', '$c = I_{\\text{cm}}/MR^2$', '$K / \\tfrac12 Mv^2 = 1 + c$', 'fraction rotational $\\frac{c}{1+c}$'],
          rows: [
            ['Sliding block (no rotation)', '$0$', '$1$', '$0$'],
            ['Solid sphere', '$\\tfrac25$', '$1.4$', '$\\tfrac27 \\approx 29\\%$'],
            ['Solid cylinder / disk', '$\\tfrac12$', '$1.5$', '$\\tfrac13 \\approx 33\\%$'],
            ['Hollow sphere (thin shell)', '$\\tfrac23$', '$1.67$', '$\\tfrac25 = 40\\%$'],
            ['Hoop / thin-walled pipe', '$1$', '$2$', '$\\tfrac12 = 50\\%$'],
          ],
          caption: 'For the same speed, a rolling hoop carries twice the kinetic energy of a sliding block of the same mass.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'A solid sphere starts from rest and rolls without slipping down a ramp, dropping a vertical height of $1.2\\,\\text{m}$. How fast is its center moving at the bottom? Use $g = 9.80\\,\\text{m/s}^2$ and give 3 significant figures.',
      hint: 'Energy: $Mgh = \\tfrac12(1 + c)Mv^2$ with $c = \\tfrac25$.',
      answer: 'sqrt(2*9.8*1.2/1.4)',
      answerTex: '4.10',
      tolerance: 0.03,
      unit: 'm/s',
      label: '$v =$',
      explanation: 'Friction does no work on a body rolling without slipping, so mechanical energy is conserved: $Mgh = \\tfrac12 Mv^2 + \\tfrac12 \\cdot \\tfrac25 MR^2 \\frac{v^2}{R^2} = \\tfrac{7}{10}Mv^2$. Then $v = \\sqrt{\\tfrac{10}{7}gh} = \\sqrt{\\tfrac{2(9.80)(1.2)}{1.4}} \\approx 4.10\\,\\text{m/s}$. Forgetting the rotation gives $\\sqrt{2gh} = 4.85\\,\\text{m/s}$; using a disk\'s $c = \\tfrac12$ gives $3.96\\,\\text{m/s}$.',
    },
    {
      kind: 'concept',
      title: 'The race down the incline',
      blocks: [
        {
          type: 'p',
          text: 'Release a solid sphere, a disk, a hollow ball and a hoop together at the top of a ramp. Which wins? From energy, at height $h$ below the start each has $Mgh = \\tfrac12(1 + c)Mv^2$, so',
        },
        { type: 'math', tex: 'v = \\sqrt{\\frac{2gh}{1 + c}}', caption: 'Mass and radius cancel. Only $c$, the shape factor, matters.' },
        {
          type: 'p',
          text: 'The body with the smallest $c$ is fastest at every height, so it wins. The forces tell the same story and give the acceleration directly.',
        },
        {
          type: 'figure',
          svg: /*fig:roll-incline*/`<svg viewBox="0 0 480 270" xmlns="http://www.w3.org/2000/svg"><path d="M30,250 L450,250 L450,54.2 Z" fill="currentColor" class="f-gray" fill-opacity="0.12"/><path d="M30,250 L450,250 L450,54.2 Z" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M80,250 A50,50 0 0 0 75.3,228.9" fill="none" stroke="currentColor" class="s-orange" stroke-width="1.6"/><text x="92" y="240" font-size="15" text-anchor="middle" class="t-orange" font-style="italic">θ</text><circle cx="222.4" cy="118.4" r="38" fill="currentColor" class="f-blue" fill-opacity="0.18"/><circle cx="222.4" cy="118.4" r="38" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="222.4" cy="118.4" r="3.5" fill="currentColor"/><line x1="222.4" y1="118.4" x2="253.8" y2="96.9" stroke="currentColor" stroke-width="1"/><line x1="222.4" y1="118.4" x2="222.4" y2="207.1" stroke="currentColor" class="s-gray" stroke-width="2.4"/><path d="M222.4,213.4 L226.9,204.4 L217.9,204.4 Z" fill="currentColor" class="f-gray"/><text x="230.4" y="210.4" font-size="14" text-anchor="start" class="t-gray" font-style="italic">Mg</text><line x1="238.5" y1="152.8" x2="205.2" y2="81.5" stroke="currentColor" class="s-green" stroke-width="2.4"/><path d="M202.5,75.8 L202.3,85.8 L210.4,82 Z" fill="currentColor" class="f-green"/><text x="196.5" y="71.8" font-size="14" text-anchor="end" class="t-green" font-style="italic">n</text><line x1="238.5" y1="152.8" x2="282.6" y2="132.2" stroke="currentColor" class="s-red" stroke-width="2.4"/><path d="M288.3,129.6 L278.2,129.3 L282,137.4 Z" fill="currentColor" class="f-red"/><text x="292.3" y="147.6" font-size="14" text-anchor="start" class="t-red" font-style="italic">f<tspan dy="4" font-size="11">s</tspan><tspan dy="-4"></tspan></text><line x1="146.3" y1="120.8" x2="106.7" y2="139.2" stroke="currentColor" class="s-purple" stroke-width="2"/><path d="M101,141.9 L111,142.2 L107.2,134 Z" fill="currentColor" class="f-purple"/><text x="92.4" y="144" font-size="14" text-anchor="end" class="t-purple" font-style="italic">a<tspan dy="4" font-size="11">cm</tspan><tspan dy="-4"></tspan></text><path d="M201.6,106.4 A24,24 0 0 0 214.2,140.9" fill="none" stroke="currentColor" class="s-orange" stroke-width="1.8"/><path d="M214.2,140.9 L208,134.4 L205.3,141.9 Z" fill="currentColor" class="f-orange"/><text x="210.4" y="122.4" font-size="13" text-anchor="middle" class="t-orange" font-style="italic">α</text></svg>`,
          alt: 'A ball rolling down an incline of angle theta. Forces: weight Mg straight down from the center, normal force n perpendicular to the incline from the contact point, and static friction f_s up the slope at the contact point. The acceleration of the center points down the slope and the angular acceleration is counterclockwise.',
          caption: 'Free-body diagram of a body rolling down a slope. Static friction acts **up** the slope at the contact point, and it alone has a torque about the center.',
          maxWidth: 460,
        },
        {
          type: 'derivation',
          title: 'Acceleration of a rolling body on an incline',
          steps: [
            { tex: 'Mg\\sin\\theta - f_s = Ma', why: 'Newton\'s second law along the slope (down-slope positive). The normal force has no component along the slope.' },
            { tex: 'f_s R = I_{\\text{cm}}\\alpha = cMR^2 \\cdot \\frac{a}{R}', why: 'Torques about the center: gravity and $n$ act through the center (zero lever arm); friction has lever arm $R$. Rolling: $\\alpha = a/R$.' },
            { tex: 'f_s = cMa', why: 'Divide by $R$.' },
            { tex: 'Mg\\sin\\theta = (1 + c)Ma \\implies a = \\frac{g\\sin\\theta}{1 + c}', why: 'Substitute into the first equation and solve.' },
          ],
          result: 'Sliding block (frictionless): $g\\sin\\theta$. Solid sphere: $\\tfrac57 g\\sin\\theta$. Disk: $\\tfrac23 g\\sin\\theta$. Hollow sphere: $\\tfrac35 g\\sin\\theta$. Hoop: $\\tfrac12 g\\sin\\theta$.',
        },
        {
          type: 'graph',
          x: [0, 2.3],
          y: [-0.2, 5],
          xStep: 0.5,
          yStep: 1,
          height: 270,
          segments: [
            { from: [0, 4.4], to: [2, 4.4], color: 'gray', dashed: true },
            { from: [0, 3.4], to: [2, 3.4], color: 'gray', dashed: true },
            { from: [0, 2.4], to: [2, 2.4], color: 'gray', dashed: true },
            { from: [0, 1.4], to: [2, 1.4], color: 'gray', dashed: true },
            { from: [0, 0.4], to: [2, 0.4], color: 'gray', dashed: true },
          ],
          vlines: [{ x: 2, label: 'finish', color: 'gray' }],
          points: [
            { x: pos('0'), y: 4.4, color: 'gray', label: 'sliding block' },
            { x: pos('0.4'), y: 3.4, color: 'green', label: 'solid sphere' },
            { x: pos('0.5'), y: 2.4, color: 'blue', label: 'disk' },
            { x: pos('2/3'), y: 1.4, color: 'orange', label: 'hollow sphere' },
            { x: pos('1'), y: 0.4, color: 'red', label: 'hoop' },
          ],
          sliders: [
            { name: 'q', min: 5, max: 40, step: 1, value: 20, label: 'ramp angle $\\theta$ (degrees)' },
            { name: 's', min: 0, max: 2.5, step: 0.01, value: 0, label: 'time $t$ (s)', play: true, speed: 0.6 },
          ],
          readouts: [
            { label: 'finish times (s): sphere', expr: tFinish('0.4'), digits: 2 },
            { label: 'disk', expr: tFinish('0.5'), digits: 2 },
            { label: 'hollow sphere', expr: tFinish('2/3'), digits: 2 },
            { label: 'hoop', expr: tFinish('1'), digits: 2 },
          ],
          caption: 'Distance travelled down a $2.0\\,\\text{m}$ ramp (horizontal axis, m), one lane per body. The gray block slides without friction for comparison. Press ▶. Change the angle and replay: the finishing **order** never changes, because every acceleration is $g\\sin\\theta$ divided by the same shape factor $1 + c$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the hoop loses',
          text: 'Every body gets the same energy from gravity per kilogram. The hoop must put half of it into spinning, the solid sphere only $\\tfrac27$. Less energy left for translation means slower. Mass is irrelevant: a heavy hoop and a light hoop tie, and a marble beats a bowling-ball-sized hollow shell. This is the classic "heavier objects fall faster" misconception in a new costume.',
        },
      ],
    },
    {
      kind: 'mcq',
      prompt: 'A $5.0\\,\\text{kg}$ hollow steel ball and a $0.10\\,\\text{kg}$ solid rubber ball (a smaller radius) are released together and roll without slipping down the same ramp. Which reaches the bottom first?',
      options: [
        {
          text: 'The solid rubber ball',
          correct: true,
          why: 'Its shape factor is $c = \\tfrac25$, smaller than the hollow ball\'s $\\tfrac23$, so its acceleration $\\frac{g\\sin\\theta}{1 + c}$ is larger. Mass and radius do not enter.',
        },
        {
          text: 'The hollow steel ball, because it is much heavier',
          why: 'Gravity\'s pull and the inertia both scale with $M$, so mass cancels, just as in free fall. Heavier does not mean faster.',
        },
        {
          text: 'They tie, because all balls roll the same way',
          why: 'They would tie only if both had the same $c$. A hollow ball has its mass far from the center, so more of its energy goes into spin.',
        },
        {
          text: 'The hollow ball, because its larger radius means fewer turns',
          why: 'Fewer turns is offset exactly by the larger $R$: in $a = \\frac{g\\sin\\theta}{1 + c}$ the radius cancels completely.',
        },
      ],
      explanation: 'For any rolling body, $a = \\frac{g\\sin\\theta}{1 + c}$ with $c = I_{\\text{cm}}/MR^2$. Solid sphere: $a = 0.714\\,g\\sin\\theta$. Hollow sphere: $0.600\\,g\\sin\\theta$. Only the distribution of mass matters.',
    },
    {
      kind: 'expr',
      prompt: 'Find the acceleration of the center of a **uniform solid sphere** rolling without slipping down a slope of angle $\\theta$, in terms of $g$ and $\\theta$.',
      hint: 'Use $a = \\frac{g\\sin\\theta}{1 + c}$ with $c = \\tfrac25$, or redo the force-and-torque derivation.',
      variables: ['g', 'theta'],
      domain: [0.2, 1.4],
      label: '$a =$',
      answer: '5/7*g*sin(theta)',
      answerTex: '\\tfrac57 g\\sin\\theta',
      explanation: 'With $I_{\\text{cm}} = \\tfrac25 MR^2$: $f_s = \\tfrac25 Ma$, and $Mg\\sin\\theta - \\tfrac25 Ma = Ma$ gives $a = \\frac{g\\sin\\theta}{7/5} = \\tfrac57 g\\sin\\theta \\approx 0.714\\,g\\sin\\theta$. It is less than the frictionless slide $g\\sin\\theta$, because some of gravity\'s effort spins the ball up.',
    },
    {
      kind: 'concept',
      title: 'Friction\'s job in rolling',
      blocks: [
        {
          type: 'p',
          text: 'On the incline, static friction pointed **up** the slope, opposing the slide, yet the body still accelerated downhill. Friction\'s role is not to stop the motion but to supply the torque that keeps the spin matched to the speed. Without it (on ice) the body would slide down at $g\\sin\\theta$ with no spin at all.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Static friction does no work here',
          text: 'Work requires the point of application to move. The contact point of a body rolling without slipping is at rest, so static friction does **zero** work. It transfers energy between translation and rotation without destroying any, which is why we could use energy conservation for the race.',
        },
        {
          type: 'p',
          text: 'Rolling requires $f_s = \\frac{c}{1 + c}Mg\\sin\\theta \\le \\mu_s Mg\\cos\\theta$, that is $\\tan\\theta \\le \\frac{1 + c}{c}\\mu_s$. A solid cylinder with $\\mu_s = 0.30$ can roll down slopes up to $\\arctan(0.90) \\approx 42^\\circ$; steeper than that it slides and spins at the same time.',
        },
        {
          type: 'p',
          text: 'The reverse problem is a bowling ball. It leaves the bowler\'s hand **sliding** with little spin. Kinetic friction, pointing backward at the contact point, slows the center and spins the ball up at the same time, until $v = R\\omega$. From then on it rolls and friction has nothing left to do.',
        },
        {
          type: 'code',
          title: 'bowling.cpp',
          runnable: true,
          code: `#include <cstdio>

// A bowling ball released sliding (no spin) on a lane with kinetic friction.
// Friction slows the center of mass and spins the ball up until v = R * omega.
int main() {
    const double g = 9.80, mu = 0.20, R = 0.11;  // m/s^2, -, m
    const double v0 = 8.0, dt = 1.0e-4;          // m/s, s
    double v = v0, omega = 0.0, x = 0.0, t = 0.0;

    while (v > R * omega) {                      // contact point still slides forward
        double a = -mu * g;                      // sum F = M a, with f = mu M g backward
        double alpha = mu * g * R / (0.4 * R * R); // f R = (2/5 M R^2) alpha
        v += a * dt;
        omega += alpha * dt;
        x += v * dt;
        t += dt;
    }
    std::printf("simulated: rolls after t = %.3f s, x = %.3f m, v = %.3f m/s\\n", t, x, v);
    std::printf("exact:     t = %.3f s, x = %.3f m, v = %.3f m/s\\n",
                2 * v0 / (7 * mu * g), 12 * v0 * v0 / (49 * mu * g), 5.0 / 7.0 * v0);
}`,
          output: `simulated: rolls after t = 1.166 s, x = 7.997 m, v = 5.714 m/s
exact:     t = 1.166 s, x = 7.997 m, v = 5.714 m/s`,
          annotations: [
            { lines: 10, text: 'The slip velocity of the contact point is $v - R\\omega$. Friction acts while it is positive.' },
            { lines: '11-12', text: 'One force, two jobs: $-\\mu Mg$ decelerates the center, while its torque $\\mu MgR$ about the center spins the ball up. The mass cancels, so it never appears.' },
            { lines: '19-20', text: 'Exact result: $v = v_0 - \\mu gt$ and $R\\omega = \\tfrac52\\mu gt$ meet when $t = \\frac{2v_0}{7\\mu g}$, leaving $v = \\tfrac57 v_0$ whatever $\\mu$ is.' },
          ],
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Wheels in racing games',
          text: 'Vehicle physics in racing and open-world games (and the wheel colliders in Unity and Unreal) tracks each wheel\'s spin separately from the car\'s speed. The difference, the **slip ratio** $\\frac{R\\omega - v}{v}$, feeds a tire model (often a Pacejka "magic formula") that returns the grip force. Zero slip is pure rolling; burnouts and locked brakes are large positive and negative slip.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'A bowling ball is released sliding at $8.0\\,\\text{m/s}$ with no spin. Kinetic friction acts until it rolls without slipping. Treating it as a uniform solid sphere, what is its speed once it is rolling? Give 3 significant figures.',
      hint: 'While sliding, $v = v_0 - \\mu gt$ and, from $\\mu MgR = \\tfrac25 MR^2\\alpha$, $R\\omega = \\tfrac52\\mu gt$. Find when they are equal.',
      answer: '5/7*8',
      answerTex: '5.71',
      tolerance: 0.03,
      unit: 'm/s',
      label: '$v =$',
      explanation: 'During sliding, $v = v_0 - \\mu gt$ and $\\omega = \\frac{5\\mu g}{2R}t$. Setting $v = R\\omega$ gives $t = \\frac{2v_0}{7\\mu g}$ and $v = \\tfrac57 v_0 = \\tfrac57(8.0) \\approx 5.71\\,\\text{m/s}$. Notice that neither $\\mu$ nor $R$ appears: a more slippery lane just makes the sliding phase last longer. The lost kinetic energy, $\\tfrac12 Mv_0^2 - \\tfrac{7}{10}Mv^2 = \\tfrac27 \\cdot \\tfrac12 Mv_0^2$, became heat.',
    },
    {
      kind: 'truefalse',
      prompt: 'When a ball rolls without slipping down a ramp, the static friction force does negative work on it, which is why it ends up slower than a frictionless sliding block.',
      answer: false,
      explanation: 'The contact point is momentarily at rest, so static friction does **zero** work: mechanical energy is conserved. The ball is slower because the same energy is shared between translation and rotation, not because friction removed any. (Kinetic friction during skidding is different: then the contact point slides and energy is dissipated.)',
    },
    {
      kind: 'error',
      prompt: 'A student finds the speed of a hoop at the bottom of a ramp of height $h$ (rolling without slipping, from rest). Tap the first wrong line.',
      lines: [
        '$Mgh = K_{\\text{bottom}}$',
        '$K_{\\text{bottom}} = \\tfrac12 Mv^2$',
        '$Mgh = \\tfrac12 Mv^2$',
        '$v = \\sqrt{2gh}$',
      ],
      errorLines: [2],
      explanation: 'Line 2 leaves out the rotational kinetic energy. For a hoop $K = \\tfrac12 Mv^2 + \\tfrac12 (MR^2)\\left(\\frac{v}{R}\\right)^2 = Mv^2$, so $Mgh = Mv^2$ and $v = \\sqrt{gh}$, smaller than the student\'s $\\sqrt{2gh}$ by a factor of $\\sqrt2$. Line 1 is fine: friction does no work in rolling without slipping.',
    },
    {
      kind: 'fill',
      prompt: 'Complete the summary of rolling without slipping.',
      template: 'The center moves at $v_{\\text{cm}} =$ ___. The contact point has speed ___ and the top of the wheel has speed ___. A rolling body\'s kinetic energy is $\\tfrac12 Mv_{\\text{cm}}^2 +$ ___.',
      blanks: [{ answers: ['$R\\omega$'] }, { answers: ['$0$'] }, { answers: ['$2v_{\\text{cm}}$'] }, { answers: ['$\\tfrac12 I_{\\text{cm}}\\omega^2$'] }],
      wordBank: ['$R\\omega$', '$0$', '$2v_{\\text{cm}}$', '$\\tfrac12 I_{\\text{cm}}\\omega^2$', '$v_{\\text{cm}}$', '$\\omega / R$', '$Mgh$'],
      explanation: 'Rolling without slipping ties $v_{\\text{cm}} = R\\omega$. Adding translation and rotation, the bottom gets $v - R\\omega = 0$ and the top $v + R\\omega = 2v$. Energy is translational plus rotational about the center of mass.',
    },
  ],
  takeaways: [
    'Rolling without slipping = translation of the center + rotation about it, with $v_{\\text{cm}} = R\\omega$ and $a_{\\text{cm}} = R\\alpha$.',
    'The contact point is momentarily at rest; the top moves at $2v_{\\text{cm}}$; a rim point traces a cycloid, and every point moves as if rotating about the contact point.',
    '$K = \\tfrac12 Mv_{\\text{cm}}^2 + \\tfrac12 I_{\\text{cm}}\\omega^2 = \\tfrac12(1 + c)Mv_{\\text{cm}}^2$ for $I_{\\text{cm}} = cMR^2$.',
    'Down an incline, $a = \\frac{g\\sin\\theta}{1 + c}$ and $v = \\sqrt{2gh/(1 + c)}$: the smallest $c$ wins (solid sphere, then disk, hollow sphere, hoop), regardless of mass or radius.',
    'Static friction supplies the torque for rolling but does no work; a sliding ball (bowling) is spun up by kinetic friction until $v = R\\omega$.',
  ],
  reading: [
    {
      title: 'OpenStax University Physics Volume 1, Chapter 11: Angular Momentum',
      url: 'https://openstax.org/details/books/university-physics-volume-1',
      source: 'openstax',
      note: 'Section 11.1 covers rolling motion with and without slipping, including the incline race.',
    },
    {
      title: 'Wikipedia: Rolling',
      url: 'https://en.wikipedia.org/wiki/Rolling',
      source: 'wikipedia',
      note: 'Treats rolling as rotation about the instantaneous contact point and discusses rolling resistance.',
    },
    {
      title: 'Wikipedia: Cycloid',
      url: 'https://en.wikipedia.org/wiki/Cycloid',
      source: 'wikipedia',
      note: 'Animations of the curve traced by a rolling wheel and its surprising brachistochrone property.',
    },
  ],
};
