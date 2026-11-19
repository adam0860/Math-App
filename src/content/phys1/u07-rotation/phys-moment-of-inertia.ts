import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'phys-moment-of-inertia',
  title: 'Moment of Inertia and Rotational Energy',
  summary: 'Why a spinning body\'s kinetic energy is ½Iω², how to compute I by summing and integrating r² dm, and the parallel-axis theorem.',
  minutes: 19,
  objectives: [
    'Derive $K = \\tfrac12 I\\omega^2$ from the kinetic energies of the particles of a rotating body',
    'Compute the moment of inertia of point-mass systems and explain why it depends on the axis',
    'Derive $I$ for a rod, a ring, a disk and a solid sphere with $I = \\int r^2\\,dm$',
    'Use the parallel-axis theorem $I = I_{\\text{cm}} + Md^2$',
    'Apply energy conservation to systems that both translate and rotate',
  ],
  steps: [
    {
      kind: 'concept',
      title: 'The kinetic energy of a spinning body',
      blocks: [
        {
          type: 'p',
          text: 'A flywheel spinning in place has no velocity as a whole: its center of mass sits still. Yet it clearly stores energy; touch it and you will find out. That energy is the ordinary kinetic energy $\\tfrac12 mv^2$ of its particles, each moving in its own circle.',
        },
        {
          type: 'figure',
          svg: /*fig:moi-particles*/`<svg viewBox="0 0 360 280" xmlns="http://www.w3.org/2000/svg"><path d="M60,120 L110,50 L220,40 L300,90 L310,190 L240,255 L120,250 L55,200 Z" fill="currentColor" class="f-blue" fill-opacity="0.08"/><path d="M60,120 L110,50 L220,40 L300,90 L310,190 L240,255 L120,250 L55,200 Z" fill="none" stroke="currentColor" stroke-width="1.4"/><circle cx="170" cy="150" r="5" fill="currentColor"/><text x="140" y="164" font-size="12" text-anchor="end" class="t-gray">axis</text><line x1="170" y1="150" x2="105" y2="105" stroke="currentColor" class="s-gray" stroke-width="1.3" stroke-dasharray="5 4"/><text x="143.2" y="123.3" font-size="13" text-anchor="middle" class="t-gray" font-style="italic">r₁</text><line x1="105" y1="105" x2="83.8" y2="135.6" stroke="currentColor" class="s-red" stroke-width="2"/><path d="M80.2,140.8 L89.1,135.9 L81.7,130.8 Z" fill="currentColor" class="f-red"/><circle cx="105" cy="105" r="6" fill="currentColor" class="f-blue"/><text x="93" y="97" font-size="13" text-anchor="end" class="t-blue">m₁</text><line x1="170" y1="150" x2="255" y2="85" stroke="currentColor" class="s-gray" stroke-width="1.3" stroke-dasharray="5 4"/><text x="218.6" y="129.4" font-size="13" text-anchor="middle" class="t-gray" font-style="italic">r₂</text><line x1="255" y1="85" x2="223.1" y2="43.3" stroke="currentColor" class="s-red" stroke-width="2"/><path d="M219.2,38.2 L221.1,48.1 L228.3,42.7 Z" fill="currentColor" class="f-red"/><circle cx="255" cy="85" r="6" fill="currentColor" class="f-blue"/><text x="267" y="77" font-size="13" text-anchor="start" class="t-blue">m₂</text><line x1="170" y1="150" x2="265" y2="205" stroke="currentColor" class="s-gray" stroke-width="1.3" stroke-dasharray="5 4"/><text x="212.5" y="190.2" font-size="13" text-anchor="middle" class="t-gray" font-style="italic">r₃</text><line x1="265" y1="205" x2="292.1" y2="158.2" stroke="currentColor" class="s-red" stroke-width="2"/><path d="M295.2,152.8 L286.8,158.3 L294.6,162.8 Z" fill="currentColor" class="f-red"/><circle cx="265" cy="205" r="6" fill="currentColor" class="f-blue"/><text x="277" y="221" font-size="13" text-anchor="start" class="t-blue">m₃</text><line x1="170" y1="150" x2="150" y2="225" stroke="currentColor" class="s-gray" stroke-width="1.3" stroke-dasharray="5 4"/><text x="150.3" y="188.9" font-size="13" text-anchor="middle" class="t-gray" font-style="italic">r₄</text><line x1="150" y1="225" x2="185.2" y2="234.4" stroke="currentColor" class="s-red" stroke-width="2"/><path d="M191.2,236 L183.7,229.3 L181.4,238 Z" fill="currentColor" class="f-red"/><circle cx="150" cy="225" r="6" fill="currentColor" class="f-blue"/><text x="138" y="241" font-size="13" text-anchor="end" class="t-blue">m₄</text><text x="350" y="30" font-size="14" text-anchor="end" class="t-red" font-style="italic">vᵢ = rᵢω</text><path d="M186.1,127.1 A28,28 0 0 0 152.8,127.9" fill="none" stroke="currentColor" class="s-orange" stroke-width="1.8"/><path d="M152.8,127.9 L161.5,126.2 L156.6,119.9 Z" fill="currentColor" class="f-orange"/><text x="174" y="114" font-size="14" text-anchor="middle" class="t-orange" font-style="italic">ω</text></svg>`,
          alt: 'An irregular rigid body rotating about an axis. Four small masses at different distances r1 to r4 from the axis each have a velocity arrow perpendicular to their radius, longer for the masses farther out.',
          caption: 'Every particle shares the same $\\omega$, but its speed $v_i = r_i\\omega$ grows with its distance from the axis.',
          maxWidth: 380,
        },
        {
          type: 'derivation',
          title: 'Add up $\\tfrac12 m v^2$ over the particles',
          steps: [
            { tex: 'K = \\sum_i \\tfrac12 m_i v_i^2', why: 'Total kinetic energy is the sum over all particles.' },
            { tex: '= \\sum_i \\tfrac12 m_i (r_i\\omega)^2', why: 'Each particle moves on a circle of radius $r_i$ with the body\'s common $\\omega$, so $v_i = r_i\\omega$.' },
            { tex: '= \\tfrac12 \\Big( \\sum_i m_i r_i^2 \\Big)\\omega^2', why: '$\\omega$ is the same for every particle, so $\\omega^2$ and $\\tfrac12$ factor out of the sum.' },
            { tex: '= \\tfrac12 I\\omega^2, \\qquad I = \\sum_i m_i r_i^2', why: 'Name the bracket: it depends only on how the mass is arranged around the axis.' },
          ],
          result: 'Rotational kinetic energy has the same form as $\\tfrac12 mv^2$, with $I$ playing the role of mass and $\\omega$ the role of speed.',
        },
        {
          type: 'definition',
          term: 'Moment of inertia',
          text: 'The [[phys-moment-of-inertia]] of a body about an axis is $I = \\sum m_i r_i^2$, where $r_i$ is the perpendicular distance of particle $i$ from the axis. Units: kg·m². The kinetic energy of the rotation is the [[phys-rotational-kinetic-energy]] $K = \\tfrac12 I\\omega^2$ (with $\\omega$ in rad/s).',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why $r^2$, not $r$',
          text: 'One factor of $r$ comes from speed ($v = r\\omega$), the other from the fact that kinetic energy is quadratic in speed. So mass twice as far from the axis stores **four** times the energy at the same $\\omega$. This is why flywheels put their mass in a heavy rim and why figure skaters spin faster with their arms in.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'Two $0.50\\,\\text{kg}$ balls are fixed to the ends of a light rod $0.80\\,\\text{m}$ long. The rod spins about its midpoint at $4.0\\,\\text{rad/s}$. Find the kinetic energy. Give 3 significant figures.',
      hint: 'Each ball is $0.40\\,\\text{m}$ from the axis. Find $I = \\sum mr^2$ first.',
      answer: '0.5*(2*0.5*0.4^2)*4^2',
      answerTex: '1.28',
      tolerance: 0.01,
      unit: 'J',
      label: '$K =$',
      explanation: '$I = 2 \\times (0.50)(0.40)^2 = 0.16\\,\\text{kg·m}^2$, so $K = \\tfrac12 (0.16)(4.0)^2 = 1.28\\,\\text{J}$. Check by particles: each ball moves at $v = r\\omega = 1.6\\,\\text{m/s}$, so $2 \\times \\tfrac12 (0.50)(1.6)^2 = 1.28\\,\\text{J}$. Using $r = 0.80\\,\\text{m}$ (the whole rod) would give four times too much.',
    },
    {
      kind: 'concept',
      title: 'The axis matters',
      blocks: [
        {
          type: 'p',
          text: 'Mass is a property of a body; moment of inertia is a property of a body **and an axis**. Spin the same dumbbell about one of its balls and that ball contributes nothing (it sits on the axis), while the other is twice as far out as before.',
        },
        {
          type: 'p',
          text: 'Below, ball 1 ($1\\,\\text{kg}$) sits at $x = 0$ and ball 2 (mass $m_2$) at $x = 2\\,\\text{m}$. The curve is $I$ for an axis placed at position $x$: $I(x) = (1)x^2 + m_2(2 - x)^2$.',
        },
        {
          type: 'graph',
          x: [-0.5, 2.5],
          y: [-1, 12],
          xStep: 0.5,
          yStep: 2,
          height: 270,
          functions: [{ expr: 'x^2 + k*(2 - x)^2', label: '$I$ (kg·m²) for an axis at $x$ (m)' }],
          points: [
            { x: 'd', y: 'd^2 + k*(2 - d)^2', color: 'orange', label: 'axis' },
            { x: 0, y: 0, color: 'blue', label: 'ball 1' },
            { x: 2, y: 0, color: 'red', label: 'ball 2' },
          ],
          vlines: [{ x: '2k/(1 + k)', label: 'CM', color: 'green' }],
          sliders: [
            { name: 'k', min: 0.5, max: 4, step: 0.1, value: 1, label: 'mass of ball 2, $m_2$ (kg)' },
            { name: 'd', min: -0.5, max: 2.5, step: 0.05, value: 0, label: 'axis position $x$ (m)', play: true, speed: 0.75 },
          ],
          readouts: [
            { label: '$I$ at this axis (kg·m²) $=$', expr: 'd^2 + k*(2 - d)^2', digits: 3 },
            { label: 'smallest $I$, at the CM (kg·m²) $=$', expr: '4k/(1 + k)', digits: 3 },
          ],
          caption: 'The smallest moment of inertia always occurs with the axis through the **center of mass** (green line). Move the axis away and $I$ grows quadratically: you are seeing the parallel-axis theorem before we prove it.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Why physics engines ask for a center of mass',
          text: 'Rigid-body engines (PhysX, Havok, Jolt, Box2D) store each body\'s inertia about its **center of mass** and integrate rotation about that point. If you attach a collider off-center, the engine shifts the inertia with the parallel-axis theorem. A wrong center of mass is a classic source of vehicles that flip too easily or props that wobble strangely.',
        },
      ],
    },
    {
      kind: 'mcq',
      prompt: 'A light rod has a $2\\,\\text{kg}$ ball at one end and a $2\\,\\text{kg}$ ball at the other. For which axis (perpendicular to the rod) is the moment of inertia smallest?',
      options: [
        {
          text: 'Through the midpoint of the rod',
          correct: true,
          why: 'With equal masses the center of mass is the midpoint, and the axis through the center of mass minimises $\\sum m r^2$.',
        },
        {
          text: 'Through one of the balls',
          why: 'That ball contributes zero, but the other is now twice as far away and counts with $r^2$: $m(2r)^2 = 4mr^2$, double the midpoint total of $2mr^2$.',
        },
        {
          text: 'It is the same for every axis, because the total mass is the same',
          why: 'Moment of inertia depends on where the mass is relative to the axis, not only on how much mass there is.',
        },
        {
          text: 'Through a point just outside one ball',
          why: 'Moving the axis away from the center of mass only increases $I$: every distance from the far ball grows.',
        },
      ],
      explanation: 'With balls at $\\pm r$ from the midpoint, $I_{\\text{mid}} = 2mr^2$. About one ball, $I = m(2r)^2 = 4mr^2$. In general $I = I_{\\text{cm}} + Md^2$, which is smallest at $d = 0$.',
    },
    {
      kind: 'concept',
      title: 'Continuous bodies: $I = \\int r^2\\,dm$',
      blocks: [
        {
          type: 'p',
          text: 'A real object is not a handful of point masses. Chop it into tiny pieces of mass $dm$, each at distance $r$ from the axis, and the sum becomes an integral, just as it did for the [[calc2-moment|moments]] and centers of mass in Calculus II.',
        },
        { type: 'math', tex: 'I = \\lim_{\\Delta m \\to 0} \\sum r_i^2\\,\\Delta m_i = \\int r^2\\,dm' },
        {
          type: 'p',
          text: 'The art is choosing slices for which every bit of $dm$ is at the **same** $r$. For a uniform thin rod of mass $M$ and length $L$, use the linear density $\\lambda = M/L$ and slices of length $dx$, so $dm = \\lambda\\,dx$.',
        },
        {
          type: 'figure',
          svg: /*fig:moi-elements*/`<svg viewBox="0 0 520 235" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="103" width="220" height="14" rx="0" fill="currentColor" class="f-gray" fill-opacity="0.15"/><rect x="20" y="103" width="220" height="14" rx="0" fill="none" stroke="currentColor" stroke-width="1.4"/><line x1="130" y1="40" x2="130" y2="175" stroke="currentColor" class="s-orange" stroke-width="1.6" stroke-dasharray="5 4"/><text x="130" y="34" font-size="12" text-anchor="middle" class="t-orange">axis</text><rect x="185" y="103" width="12" height="14" rx="0" fill="currentColor" class="f-red" fill-opacity="0.5"/><rect x="185" y="103" width="12" height="14" rx="0" fill="none" stroke="currentColor" class="s-red" stroke-width="1.4"/><line x1="130" y1="136" x2="186.1" y2="136" stroke="currentColor" class="s-gray" stroke-width="1.4"/><path d="M191,136 L184,132.5 L184,139.5 Z" fill="currentColor" class="f-gray"/><text x="160.5" y="154" font-size="14" text-anchor="middle" font-style="italic">x</text><text x="191" y="94" font-size="13" text-anchor="middle" class="t-red">dm = λ dx</text><text x="20" y="180" font-size="12" text-anchor="middle" class="t-gray">−L/2</text><text x="240" y="180" font-size="12" text-anchor="middle" class="t-gray">L/2</text><line x1="20" y1="120" x2="20" y2="166" stroke="currentColor" class="s-gray" stroke-width="1" stroke-dasharray="5 4"/><line x1="240" y1="120" x2="240" y2="166" stroke="currentColor" class="s-gray" stroke-width="1" stroke-dasharray="5 4"/><text x="130" y="205" font-size="13" text-anchor="middle" class="t-gray">thin rod</text><circle cx="390" cy="125" r="82" fill="currentColor" class="f-gray" fill-opacity="0.12"/><circle cx="390" cy="125" r="82" fill="none" stroke="currentColor" stroke-width="1.4"/><circle cx="390" cy="125" r="52" fill="none" stroke="currentColor" class="s-red" stroke-width="9" opacity="0.55"/><circle cx="390" cy="125" r="4" fill="currentColor"/><line x1="390" y1="125" x2="423.3" y2="91.7" stroke="currentColor" class="s-gray" stroke-width="1.4"/><path d="M426.8,88.2 L419.3,90.7 L424.3,95.7 Z" fill="currentColor" class="f-gray"/><text x="402" y="103" font-size="14" text-anchor="middle" font-style="italic">r</text><text x="390" y="229" font-size="13" text-anchor="middle" class="t-gray">disk: ring of width dr</text><text x="390" y="26" font-size="13" text-anchor="middle" class="t-red">dm = σ·2πr dr</text></svg>`,
          alt: 'Left: a thin rod from minus L over 2 to L over 2 with a vertical axis through its center and a small highlighted slice dm = lambda dx at position x. Right: a disk with a thin highlighted ring of radius r and width dr, with dm = sigma times 2 pi r dr.',
          caption: 'Choose slices whose mass is all at one distance from the axis: short segments of a rod, thin rings of a disk.',
        },
        {
          type: 'derivation',
          title: 'Uniform rod about its center',
          steps: [
            { tex: 'I = \\int r^2\\,dm = \\int_{-L/2}^{L/2} x^2\\,\\lambda\\,dx', why: 'Put the origin at the axis; the slice at $x$ is a distance $|x|$ from it, so $r^2 = x^2$, and $dm = \\lambda\\,dx$.' },
            { tex: '= \\lambda \\left[ \\frac{x^3}{3} \\right]_{-L/2}^{L/2} = \\lambda \\cdot \\frac{2}{3}\\left(\\frac{L}{2}\\right)^3', why: 'Antiderivative of $x^2$; the two endpoint terms are equal in size, opposite in sign, so they add.' },
            { tex: '= \\frac{M}{L} \\cdot \\frac{L^3}{12} = \\frac{1}{12}ML^2', why: 'Substitute $\\lambda = M/L$ and simplify $\\frac23 \\cdot \\frac18 = \\frac{1}{12}$.' },
          ],
          result: 'Rod about its center: $I = \\tfrac{1}{12}ML^2$. About one end, integrate from $0$ to $L$ instead: $\\lambda \\frac{L^3}{3} = \\tfrac13 ML^2$, four times larger.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Sanity check with point masses',
          text: 'If all of the rod\'s mass sat at its ends, you would get $2 \\cdot \\frac{M}{2}\\left(\\frac{L}{2}\\right)^2 = \\tfrac14 ML^2$. If it all sat at the center, $0$. The true value $\\tfrac{1}{12}ML^2$ lies between, closer to $0$ because most of the mass is not near the ends. Bracketing like this catches many integration slips.',
        },
      ],
    },
    {
      kind: 'expr',
      prompt: 'A thin rod of length $L$ lies along the $x$-axis from $0$ to $L$, but it is not uniform: its linear density is $\\lambda(x) = kx$, so it gets heavier toward the far end. Its total mass is $M = \\int_0^L kx\\,dx = \\tfrac12 kL^2$. Find its moment of inertia about the end at $x = 0$, **in terms of $M$ and $L$**.',
      hint: 'Compute $\\int_0^L x^2 \\cdot kx\\,dx$, then replace $k$ using $k = 2M/L^2$.',
      variables: ['M', 'L'],
      domain: [0.5, 3],
      label: '$I =$',
      answer: 'M*L^2/2',
      answerTex: '\\tfrac12 ML^2',
      explanation: '$I = \\int_0^L x^2 (kx)\\,dx = k\\frac{L^4}{4}$. With $k = \\frac{2M}{L^2}$: $I = \\frac{2M}{L^2}\\cdot\\frac{L^4}{4} = \\tfrac12 ML^2$. That is larger than the uniform rod\'s $\\tfrac13 ML^2$ about the same end, as it should be: more of the mass sits far from the axis.',
    },
    {
      kind: 'concept',
      title: 'Ring, disk and sphere',
      blocks: [
        {
          type: 'p',
          text: 'A thin **ring** (or hoop, or thin-walled cylinder) about its central axis is the easy case: every bit of mass is at distance $R$, so $I = \\int R^2\\,dm = R^2 \\int dm = MR^2$.',
        },
        {
          type: 'derivation',
          title: 'Uniform disk (or solid cylinder) about its axis',
          steps: [
            { tex: '\\sigma = \\frac{M}{\\pi R^2}, \\qquad dm = \\sigma \\cdot 2\\pi r\\,dr', why: 'Slice the disk into thin rings. A ring of radius $r$ and width $dr$ has area $2\\pi r\\,dr$ (circumference times width).' },
            { tex: 'I = \\int_0^R r^2 \\,\\sigma\\, 2\\pi r\\,dr = 2\\pi\\sigma \\int_0^R r^3\\,dr', why: 'Every bit of the ring is at distance $r$, so the ring contributes $r^2\\,dm$.' },
            { tex: '= 2\\pi\\sigma \\frac{R^4}{4} = \\frac{M}{\\pi R^2}\\cdot\\frac{\\pi R^4}{2}', why: 'Integrate and substitute $\\sigma$.' },
            { tex: '= \\tfrac12 MR^2', why: 'A solid cylinder is a stack of disks, so the same result holds for any length.' },
          ],
          result: 'A disk has half the moment of inertia of a ring with the same mass and radius, because much of its mass is near the axis.',
        },
        {
          type: 'derivation',
          title: 'Uniform solid sphere about a diameter',
          steps: [
            { tex: 'dm = \\rho\\,\\pi(R^2 - z^2)\\,dz', why: 'Slice into disks perpendicular to the axis. The disk at height $z$ has radius $\\sqrt{R^2 - z^2}$ and thickness $dz$.' },
            { tex: 'dI = \\tfrac12\\,dm\\,(R^2 - z^2) = \\tfrac12 \\rho\\pi (R^2 - z^2)^2\\,dz', why: 'Use the disk result $\\tfrac12 (\\text{mass})(\\text{radius})^2$ for each slice.' },
            { tex: 'I = \\tfrac12\\rho\\pi \\int_{-R}^{R} (R^4 - 2R^2 z^2 + z^4)\\,dz = \\tfrac12\\rho\\pi \\cdot \\tfrac{16}{15}R^5', why: 'Expand and integrate: $2R^5 - \\tfrac43 R^5 + \\tfrac25 R^5 = \\tfrac{16}{15}R^5$.' },
            { tex: '= \\frac{8\\pi\\rho R^5}{15} = \\frac{2}{5}\\Big(\\tfrac43\\pi R^3 \\rho\\Big) R^2 = \\tfrac25 MR^2', why: 'Write $M = \\tfrac43\\pi R^3\\rho$ and factor it out: $\\frac{8/15}{4/3} = \\frac25$.' },
          ],
          result: 'Solid sphere: $I = \\tfrac25 MR^2$. A thin spherical shell, with all its mass at radius $R$ (but not all at distance $R$ from the axis), has $I = \\tfrac23 MR^2$.',
        },
        {
          type: 'table',
          headers: ['Body (uniform, mass $M$)', 'Axis', '$I$'],
          rows: [
            ['Thin ring / hoop / thin-walled cylinder, radius $R$', 'central axis', '$MR^2$'],
            ['Thin spherical shell, radius $R$', 'diameter', '$\\tfrac23 MR^2$'],
            ['Disk / solid cylinder, radius $R$', 'central axis', '$\\tfrac12 MR^2$'],
            ['Solid sphere, radius $R$', 'diameter', '$\\tfrac25 MR^2$'],
            ['Thin rod, length $L$', 'perpendicular, through center', '$\\tfrac{1}{12} ML^2$'],
            ['Thin rod, length $L$', 'perpendicular, through one end', '$\\tfrac13 ML^2$'],
            ['Rectangular plate $a \\times b$', 'perpendicular, through center', '$\\tfrac{1}{12} M(a^2 + b^2)$'],
          ],
          caption: 'Moments of inertia of common shapes. Round shapes are often written $I = cMR^2$; the number $c$ measures how far out the mass sits.',
        },
        {
          type: 'graph',
          x: [0, 0.5],
          y: [0, 1.2],
          xStep: 0.1,
          yStep: 0.2,
          height: 260,
          functions: [
            { expr: 'm*x^2', label: 'hoop $MR^2$', color: 'red' },
            { expr: '(2/3)*m*x^2', label: 'shell $\\tfrac23 MR^2$', color: 'orange' },
            { expr: '0.5*m*x^2', label: 'disk $\\tfrac12 MR^2$', color: 'blue' },
            { expr: '0.4*m*x^2', label: 'solid sphere $\\tfrac25 MR^2$', color: 'green' },
          ],
          vlines: [{ x: 'r', label: 'R', color: 'gray' }],
          sliders: [
            { name: 'm', min: 0.5, max: 4.5, step: 0.5, value: 4, label: 'mass $M$ (kg)' },
            { name: 'r', min: 0.05, max: 0.5, step: 0.01, value: 0.3, label: 'radius $R$ (m)' },
          ],
          readouts: [
            { label: 'hoop (kg·m²)', expr: 'm*r^2', digits: 3 },
            { label: 'disk (kg·m²)', expr: '0.5*m*r^2', digits: 3 },
            { label: 'sphere (kg·m²)', expr: '0.4*m*r^2', digits: 3 },
          ],
          caption: '$I$ (kg·m²) against radius $R$ (m) for four shapes of the same mass. The order never changes: hoop > shell > disk > solid sphere. Doubling $R$ quadruples every one of them.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'A flywheel energy-storage unit is a uniform solid disk of mass $120\\,\\text{kg}$ and radius $0.40\\,\\text{m}$, spinning at $6000\\,\\text{rpm}$. How much kinetic energy does it store, in megajoules? Give 3 significant figures.',
      hint: 'Convert rpm to rad/s, use $I = \\tfrac12 MR^2$, then $K = \\tfrac12 I\\omega^2$.',
      answer: '0.5*(0.5*120*0.4^2)*(6000*2pi/60)^2/10^6',
      answerTex: '1.89',
      tolerance: 0.015,
      unit: 'MJ',
      label: '$K =$',
      explanation: '$I = \\tfrac12 (120)(0.40)^2 = 9.6\\,\\text{kg·m}^2$ and $\\omega = 6000 \\cdot \\frac{2\\pi}{60} = 628\\,\\text{rad/s}$. So $K = \\tfrac12 (9.6)(628.3)^2 \\approx 1.89 \\times 10^6\\,\\text{J} = 1.89\\,\\text{MJ}$, about the kinetic energy of a $1500\\,\\text{kg}$ car at $180\\,\\text{km/h}$. Using rpm directly gives a number off by $(2\\pi/60)^2$; using $MR^2$ doubles the answer.',
    },
    {
      kind: 'concept',
      title: 'The parallel-axis theorem',
      blocks: [
        {
          type: 'p',
          text: 'The dumbbell graph showed that $I$ is smallest about the center of mass and grows quadratically as the axis moves away. Here is the exact statement and its proof.',
        },
        {
          type: 'theorem',
          name: 'Parallel-axis theorem',
          tex: 'I_P = I_{\\text{cm}} + Md^2',
          text: 'The [[phys-parallel-axis-theorem]]: the moment of inertia about any axis through $P$ equals the moment of inertia about the **parallel** axis through the center of mass, plus the total mass times the square of the distance $d$ between the axes.',
        },
        {
          type: 'figure',
          svg: /*fig:moi-parallel*/`<svg viewBox="0 0 360 285" xmlns="http://www.w3.org/2000/svg"><path d="M70,90 L140,40 L250,50 L320,110 L300,200 L200,240 L100,220 L50,160 Z" fill="currentColor" class="f-blue" fill-opacity="0.08"/><path d="M70,90 L140,40 L250,50 L320,110 L300,200 L200,240 L100,220 L50,160 Z" fill="none" stroke="currentColor" stroke-width="1.4"/><circle cx="190" cy="150" r="5.5" fill="currentColor" class="f-blue"/><text x="200" y="170" font-size="13" text-anchor="start" class="t-blue" font-weight="600">CM</text><circle cx="95" cy="180" r="5.5" fill="currentColor" class="f-orange"/><text x="85" y="200" font-size="13" text-anchor="end" class="t-orange" font-weight="600">P</text><line x1="95" y1="180" x2="190" y2="150" stroke="currentColor" stroke-width="2"/><text x="138.5" y="157" font-size="15" text-anchor="middle" font-style="italic">d</text><circle cx="225" cy="62" r="5" fill="currentColor" class="f-red"/><text x="216" y="58" font-size="13" text-anchor="end" class="t-red">dm</text><line x1="190" y1="150" x2="220.9" y2="73.2" stroke="currentColor" class="s-blue" stroke-width="1.8"/><path d="M223,68 L216.3,73.9 L223.7,76.9 Z" fill="currentColor" class="f-blue"/><text x="218" y="118" font-size="15" text-anchor="start" class="t-blue" font-style="italic">r′</text><line x1="95" y1="180" x2="215.9" y2="69.8" stroke="currentColor" class="s-orange" stroke-width="1.8" stroke-dasharray="5 4"/><path d="M220,66 L211.4,68.4 L216.8,74.3 Z" fill="currentColor" class="f-orange"/><text x="140" y="108" font-size="15" text-anchor="middle" class="t-orange" font-style="italic">r</text><text x="180" y="272" font-size="12" text-anchor="middle" class="t-gray">both axes point out of the page, parallel</text></svg>`,
          alt: 'A body with its center of mass CM and a second point P a distance d away. A mass element dm is reached by vector r-prime from CM and by vector r from P.',
          caption: 'Measure each mass element from the CM ($\\vec{r}\\,\'$) and from $P$ ($\\vec{r}$). They differ by the fixed vector $\\vec{d}$.',
          maxWidth: 380,
        },
        {
          type: 'derivation',
          title: 'Proof (axes perpendicular to the page)',
          steps: [
            { tex: '\\vec{r} = \\vec{r}\\,\' + \\vec{d}', why: 'Here $\\vec{r}$ and $\\vec{r}\\,\'$ are the in-plane position vectors of $dm$ from the two axes, and $\\vec{d}$ points from $P$ to the CM.' },
            { tex: 'r^2 = \\vec{r}\\cdot\\vec{r} = r\'^2 + 2\\,\\vec{d}\\cdot\\vec{r}\\,\' + d^2', why: 'Expand the [[dot-product]] of the sum with itself.' },
            { tex: 'I_P = \\int r\'^2\\,dm + 2\\vec{d}\\cdot\\int \\vec{r}\\,\'\\,dm + d^2 \\int dm', why: 'Integrate over the body; $\\vec{d}$ is constant so it comes out of the integral.' },
            { tex: '\\int \\vec{r}\\,\'\\,dm = M\\,\\vec{r}_{\\text{cm}}\\,\' = \\vec{0}', why: 'This is $M$ times the position of the center of mass measured **from the center of mass**, which is zero. This is why one axis must pass through the CM.' },
            { tex: 'I_P = I_{\\text{cm}} + Md^2', why: 'The first integral is $I_{\\text{cm}}$ and the last is $Md^2$.' },
          ],
          result: 'Check with the rod: $\\tfrac{1}{12}ML^2 + M\\left(\\tfrac{L}{2}\\right)^2 = \\tfrac13 ML^2$, matching the direct integral.',
        },
        {
          type: 'graph',
          x: [-1.2, 1.2],
          y: [-0.3, 1.8],
          xStep: 0.2,
          yStep: 0.2,
          height: 250,
          functions: [{ expr: '1/3 + x^2', label: '$I = \\tfrac{1}{12}ML^2 + Md^2$ (kg·m²), $M = 1\\,\\text{kg}$, $L = 2\\,\\text{m}$' }],
          segments: [{ from: [-1, -0.15], to: [1, -0.15], color: 'gray' }],
          points: [
            { x: 'd', y: '1/3 + d^2', color: 'orange', label: 'axis here' },
            { x: 'd', y: -0.15, color: 'orange' },
          ],
          sliders: [{ name: 'd', min: -1, max: 1, step: 0.02, value: 0.5, label: 'axis distance from the center $d$ (m)' }],
          readouts: [{ label: '$I$ (kg·m²) $=$', expr: '1/3 + d^2', digits: 3 }],
          caption: 'A $2\\,\\text{m}$ rod (gray, below the axis) with the axis position in orange. Slide the axis to the end, $d = 1$: $I = \\tfrac13 + 1 = \\tfrac43 = \\tfrac13 ML^2$.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'A uniform disk of mass $2.0\\,\\text{kg}$ and radius $0.30\\,\\text{m}$ is pinned so that it rotates about an axis perpendicular to its face through a point on its **rim**. Find its moment of inertia about that axis. Give 2 significant figures.',
      hint: 'Start from $I_{\\text{cm}} = \\tfrac12 MR^2$ and shift the axis a distance $d = R$.',
      answer: '1.5*2*0.3^2',
      answerTex: '0.27',
      tolerance: 0.002,
      unit: 'kg·m²',
      label: '$I =$',
      explanation: '$I = \\tfrac12 MR^2 + MR^2 = \\tfrac32 MR^2 = 1.5 (2.0)(0.30)^2 = 0.27\\,\\text{kg·m}^2$. The center axis alone gives $0.09$, and $MR^2$ alone gives $0.18$: the theorem needs both terms.',
    },
    {
      kind: 'truefalse',
      prompt: 'The parallel-axis theorem $I_2 = I_1 + Md^2$ holds for **any** two parallel axes a distance $d$ apart.',
      answer: false,
      explanation: 'The proof needs $\\int \\vec{r}\\,\'\\,dm = 0$, which is only true when $\\vec{r}\\,\'$ is measured from the center of mass. For a rod, the two ends are parallel axes $L$ apart with equal $I = \\tfrac13 ML^2$, yet "$I_1 + ML^2$" would give $\\tfrac43 ML^2$. To go between two off-center axes, go through the CM: subtract $Md_1^2$, then add $Md_2^2$.',
    },
    {
      kind: 'error',
      prompt: 'A student knows that a rod about its end has $I_{\\text{end}} = \\tfrac13 ML^2$ and wants $I$ about its center. Tap the first wrong line.',
      lines: [
        'The center of mass is at the middle, a distance $d = L/2$ from the end.',
        '$I_{\\text{center}} = I_{\\text{end}} + M d^2$',
        '$= \\tfrac13 ML^2 + \\tfrac14 ML^2$',
        '$= \\tfrac{7}{12} ML^2$',
      ],
      errorLines: [2],
      explanation: 'The theorem reads $I_{\\text{any}} = I_{\\text{cm}} + Md^2$: the $Md^2$ term is added to the **center-of-mass** value. Here the center *is* the CM, so $I_{\\text{end}} = I_{\\text{center}} + M(L/2)^2$, giving $I_{\\text{center}} = \\tfrac13 ML^2 - \\tfrac14 ML^2 = \\tfrac{1}{12}ML^2$. A tell-tale sign of the error: the answer came out *larger* than $I_{\\text{end}}$, but the CM axis always has the smallest $I$.',
    },
    {
      kind: 'concept',
      title: 'Energy with rotation',
      blocks: [
        {
          type: 'p',
          text: 'Rotational kinetic energy joins the energy bookkeeping you already know. A classic setup: a block hangs from a light string wound around a pulley that is a uniform disk on a frictionless axle. Released from rest, the block falls and spins the pulley. Some of the lost gravitational potential energy goes into spinning the pulley, so the block falls more slowly than in free fall.',
        },
        {
          type: 'derivation',
          title: 'Speed after the block falls a height $h$ (block $m$, disk pulley $M$, $R$)',
          steps: [
            { tex: 'mgh = \\tfrac12 mv^2 + \\tfrac12 I\\omega^2', why: 'Energy conservation: no friction at the axle, and a string that does not slip does no net work. All of the potential energy becomes kinetic energy of the block and pulley.' },
            { tex: '\\omega = \\frac{v}{R}, \\qquad I = \\tfrac12 MR^2', why: 'The string does not slip, so the rim moves at the block\'s speed $v$; the pulley is a uniform disk.' },
            { tex: 'mgh = \\tfrac12 mv^2 + \\tfrac12\\cdot\\tfrac12 MR^2 \\frac{v^2}{R^2} = \\tfrac12\\left(m + \\tfrac12 M\\right)v^2', why: 'Substitute. $R$ cancels: only the pulley\'s mass and shape matter.' },
            { tex: 'v = \\sqrt{\\frac{2mgh}{m + M/2}}', why: 'Solve for $v$.' },
            { tex: 'm = 2.0,\\ M = 4.0\\,\\text{kg},\\ h = 1.5\\,\\text{m}: \\ v = \\sqrt{\\frac{2(2.0)(9.80)(1.5)}{4.0}} \\approx 3.83\\,\\text{m/s}', why: 'With $g = 9.80\\,\\text{m/s}^2$. Free fall would give $\\sqrt{2gh} \\approx 5.42\\,\\text{m/s}$.' },
          ],
          result: 'The pulley acts like an extra $\\tfrac12 M$ of mass that must be set moving. Limit check: $M \\to 0$ gives free fall, $\\sqrt{2gh}$.',
        },
        {
          type: 'callout',
          variant: 'analogy',
          title: 'Flywheels in the real world',
          text: 'Flywheels smooth the power pulses of engines, store braking energy in some race cars and buses, and back up power supplies. Since $K = \\tfrac12 I\\omega^2$, doubling the spin rate stores four times the energy, so designers push $\\omega$ as high as the rim\'s material strength allows.',
        },
        {
          type: 'code',
          title: 'inertia.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdio>

// Moment of inertia by slicing, like the integrals in the lesson (M = 1 kg, R = 1 m).
const double PI = std::acos(-1.0);

double diskByRings(int n) {            // I = sum r^2 dm, dm = sigma * 2 pi r dr
    double R = 1.0, M = 1.0, sigma = M / (PI * R * R), dr = R / n, I = 0.0;
    for (int i = 0; i < n; ++i) {
        double r = (i + 0.5) * dr;     // midpoint of the ring
        I += r * r * sigma * 2 * PI * r * dr;
    }
    return I;
}

double sphereByDisks(int n) {          // dI = (1/2) dm rho^2, rho^2 = R^2 - z^2
    double R = 1.0, M = 1.0, rho = M / (4.0 / 3.0 * PI * R * R * R), dz = 2 * R / n, I = 0.0;
    for (int i = 0; i < n; ++i) {
        double z = -R + (i + 0.5) * dz;
        double r2 = R * R - z * z;
        double dm = rho * PI * r2 * dz;
        I += 0.5 * dm * r2;
    }
    return I;
}

int main() {
    const int counts[] = {10, 100, 1000};
    for (int n : counts) {
        std::printf("n = %4d  disk %.6f  sphere %.6f\\n", n, diskByRings(n), sphereByDisks(n));
    }
    std::printf("exact     disk %.6f  sphere %.6f\\n", 0.5, 0.4);
}`,
          output: `n =   10  disk 0.497500  sphere 0.400035
n =  100  disk 0.499975  sphere 0.400000
n = 1000  disk 0.500000  sphere 0.400000
exact     disk 0.500000  sphere 0.400000`,
          annotations: [
            { lines: '9-12', text: 'A Riemann sum over thin rings: each ring of radius $r$ adds $r^2\\,dm$.' },
            { lines: '19-22', text: 'Slice the sphere into disks and add each disk\'s $\\tfrac12\\,dm\\,\\rho^2$, exactly the sphere derivation.' },
            { lines: 30, text: 'Both sums converge to $\\tfrac12$ and $\\tfrac25$ (times $MR^2$). Engines do this kind of sum to get the inertia of an arbitrary mesh.' },
          ],
        },
      ],
    },
    {
      kind: 'mcq',
      prompt: 'A thin hoop and a uniform disk have the same mass and radius. Both spin about their central axes at the same angular velocity. How do their kinetic energies compare?',
      options: [
        {
          text: 'The hoop has twice the kinetic energy of the disk',
          correct: true,
          why: '$K = \\tfrac12 I\\omega^2$ with $I_{\\text{hoop}} = MR^2$ and $I_{\\text{disk}} = \\tfrac12 MR^2$, so the hoop\'s $K$ is double.',
        },
        {
          text: 'They are equal, because $M$, $R$ and $\\omega$ are equal',
          why: 'The distribution of mass matters, not just the totals. The hoop\'s mass is all at the rim, where it moves fastest.',
        },
        {
          text: 'The disk has twice the kinetic energy of the hoop',
          why: 'This reverses the moments of inertia. The disk has mass near the axis that moves slowly, so it stores less.',
        },
        {
          text: 'Neither has kinetic energy, because their centers are not moving',
          why: 'A spinning body\'s particles all move (except those on the axis). Their kinetic energy is real: it is the rotational kinetic energy.',
        },
      ],
      explanation: 'Every particle of the hoop moves at the rim speed $R\\omega$; in the disk most particles move more slowly. So $K_{\\text{hoop}} = \\tfrac12 MR^2\\omega^2$ while $K_{\\text{disk}} = \\tfrac14 MR^2\\omega^2$.',
    },
    {
      kind: 'fill',
      prompt: 'Complete the summary.',
      template: 'The moment of inertia is $I = \\sum m_i r_i^2$, where $r_i$ is the distance from the ___. Its SI unit is ___. The rotational kinetic energy is $K = $ ___, and about an axis a distance $d$ from the center of mass $I = I_{\\text{cm}} +$ ___.',
      blanks: [{ answers: ['axis'] }, { answers: ['kg·m²'] }, { answers: ['$\\tfrac12 I\\omega^2$'] }, { answers: ['$Md^2$'] }],
      wordBank: ['axis', 'center of mass', 'kg·m²', 'kg·m/s', '$\\tfrac12 I\\omega^2$', '$I\\omega$', '$Md^2$', '$Md$'],
      explanation: '$r_i$ is the perpendicular distance from the rotation **axis** (the CM matters only for the parallel-axis theorem). Units: mass times length squared. $K = \\tfrac12 I\\omega^2$ mirrors $\\tfrac12 mv^2$, while $I\\omega$ is angular momentum. The shift term is $Md^2$, quadratic in $d$.',
    },
  ],
  takeaways: [
    'A rotating body\'s kinetic energy is $K = \\tfrac12 I\\omega^2$ with $I = \\sum m_i r_i^2 = \\int r^2\\,dm$: the particles\' $\\tfrac12 mv^2$ with $v = r\\omega$.',
    '$I$ depends on the mass **and** on how far it sits from the chosen axis, through $r^2$.',
    'Standard results: hoop $MR^2$, disk $\\tfrac12 MR^2$, solid sphere $\\tfrac25 MR^2$, shell $\\tfrac23 MR^2$, rod $\\tfrac{1}{12}ML^2$ (center) or $\\tfrac13 ML^2$ (end).',
    'Parallel-axis theorem: $I = I_{\\text{cm}} + Md^2$, valid only when one axis passes through the center of mass; the CM axis gives the smallest $I$.',
    'In energy problems, include $\\tfrac12 I\\omega^2$ for every spinning part and link $\\omega$ to $v$ with a no-slip condition such as $v = R\\omega$.',
  ],
  reading: [
    {
      title: 'OpenStax University Physics Volume 1, Chapter 10: Fixed-Axis Rotation',
      url: 'https://openstax.org/details/books/university-physics-volume-1',
      source: 'openstax',
      note: 'Sections 10.4 and 10.5 derive rotational kinetic energy and calculate moments of inertia, including the parallel-axis theorem.',
    },
    {
      title: 'Wikipedia: List of moments of inertia',
      url: 'https://en.wikipedia.org/wiki/List_of_moments_of_inertia',
      source: 'wikipedia',
      note: 'A large table of shapes and axes, handy for checking results and for game-object inertia.',
    },
    {
      title: 'MIT OCW 8.01SC Classical Mechanics',
      url: 'https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/',
      source: 'other',
      note: 'The rotational dynamics week works through moment-of-inertia integrals and the parallel-axis theorem in detail.',
    },
  ],
};
