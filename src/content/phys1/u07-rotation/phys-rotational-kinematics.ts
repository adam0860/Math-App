import type { Lesson } from '../../types';

// Animated point on a unit circle starting from rest with constant angular acceleration a.
// TH = angle at time s; W = angular velocity at time s.
const TH = '(0.5*a*s^2)';
const W = '(a*s)';

export const lesson: Lesson = {
  id: 'phys-rotational-kinematics',
  title: 'Rotational Kinematics',
  summary: 'Angle, angular velocity and angular acceleration: the rotation version of x, v and a, and how they connect to the motion of every point on a spinning body.',
  minutes: 18,
  objectives: [
    'Describe the rotation of a rigid body with angular position $\\theta$ in radians, angular velocity $\\omega = d\\theta/dt$ and angular acceleration $\\alpha = d\\omega/dt$',
    'Derive the constant-$\\alpha$ equations by integration and use them to solve spin-up and spin-down problems',
    'Convert between revolutions, rpm and radian measure without losing a factor of $2\\pi$',
    'Link rotation to the motion of a point: $s = r\\theta$, $v = r\\omega$, $a_t = r\\alpha$ and $a_c = r\\omega^2$',
    'Combine tangential and centripetal acceleration into the total acceleration of a point on a spinning body',
  ],
  steps: [
    {
      kind: 'concept',
      title: 'Describing rotation with one number',
      blocks: [
        {
          type: 'p',
          text: 'A wheel, a turbine, a turret, a spinning hard disk: each is a **rigid body rotating about a fixed axis**. Rigid means the distances between its particles never change, so the whole body turns together. That is a huge simplification: instead of tracking millions of particles, you track **one angle**.',
        },
        {
          type: 'p',
          text: 'Draw a reference line from the axis, fixed in space, and a line painted on the body. The **angular position** $\\theta$ is the angle from the reference line to the painted line. By convention, counterclockwise (seen from the tip of the axis) is positive. A point $P$ at distance $r$ from the axis then sits at arc length $s$ along its circle.',
        },
        {
          type: 'figure',
          svg: /*fig:rk-angle*/`<svg viewBox="0 0 320 290" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="155" r="105" fill="currentColor" class="f-blue" fill-opacity="0.08"/><circle cx="150" cy="155" r="105" fill="none" stroke="currentColor" stroke-width="1.6"/><line x1="150" y1="155" x2="295" y2="155" stroke="currentColor" class="s-gray" stroke-width="1.4" stroke-dasharray="5 4"/><text x="297" y="173" font-size="12" text-anchor="end" class="t-gray">reference line</text><line x1="150" y1="155" x2="214.6" y2="72.3" stroke="currentColor" stroke-width="2"/><path d="M255,155 A105,105 0 0 0 214.6,72.3" fill="none" stroke="currentColor" class="s-blue" stroke-width="4.5"/><text x="258.8" y="107" font-size="17" text-anchor="middle" class="t-blue" font-style="italic">s</text><path d="M184,155 A34,34 0 0 0 170.9,128.2" fill="none" stroke="currentColor" class="s-orange" stroke-width="2"/><path d="M170.9,128.2 L174.8,136.3 L179.7,130 Z" fill="currentColor" class="f-orange"/><text x="193.1" y="139" font-size="17" text-anchor="middle" class="t-orange" font-style="italic">θ</text><text x="171.6" y="107.5" font-size="16" text-anchor="middle" font-style="italic">r</text><circle cx="214.6" cy="72.3" r="6" fill="currentColor" class="f-red"/><text x="224.6" y="64.3" font-size="15" text-anchor="start" class="t-red" font-weight="600">P</text><circle cx="150" cy="155" r="4" fill="currentColor"/><text x="142" y="177" font-size="12" text-anchor="middle" class="t-gray">axis (out of page)</text><path d="M127.9,29.9 A127,127 0 0 0 40,91.5" fill="none" stroke="currentColor" class="s-green" stroke-width="2"/><path d="M40,91.5 L47.5,86.6 L40.6,82.6 Z" fill="currentColor" class="f-green"/><text x="50" y="27" font-size="12" text-anchor="middle" class="t-green">+ (counterclockwise)</text></svg>`,
          alt: 'A disk with its axis at the center, a dashed reference line to the right, a radius of length r drawn to point P at angle theta, and the arc s from the reference line to P highlighted on the rim.',
          caption: 'Angular position $\\theta$ is measured from a fixed reference line, counterclockwise positive. Point $P$ at radius $r$ has travelled arc length $s = r\\theta$ along its circle.',
          maxWidth: 340,
        },
        {
          type: 'definition',
          term: 'Angular position and angular displacement',
          text: 'The **angular position** of a rotating body is $\\theta = s/r$, measured in [[radian|radians]]. Its change $\\Delta\\theta = \\theta_f - \\theta_i$ is the [[phys-angular-displacement]]. One revolution is $2\\pi$ rad $= 360^\\circ$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why physics insists on radians',
          text: 'The radian is *defined* by $\\theta = s/r$: arc length divided by radius. That makes $s = r\\theta$ exact with no conversion factor. In degrees the same relation would read $s = \\frac{\\pi}{180} r\\theta$, and that ugly factor would then leak into every velocity and acceleration formula below. Radians are dimensionless (a length over a length), which is why $\\text{rad}$ quietly disappears from units: $r\\omega$ with $r$ in m and $\\omega$ in rad/s comes out in m/s.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'A bicycle wheel of radius $0.35\\,\\text{m}$ turns through $2.5$ revolutions without the axle moving. How far does a speck of mud on the rim travel along its circle? Give 3 significant figures.',
      hint: 'Convert revolutions to radians first ($1\\text{ rev} = 2\\pi\\text{ rad}$), then use $s = r\\theta$.',
      answer: '0.35*2.5*2pi',
      answerTex: '5.50',
      tolerance: 0.03,
      unit: 'm',
      label: '$s =$',
      explanation: '$\\theta = 2.5 \\times 2\\pi = 5\\pi \\approx 15.7\\,\\text{rad}$, so $s = r\\theta = (0.35\\,\\text{m})(15.7) \\approx 5.50\\,\\text{m}$. The classic slip is $s = r\\theta$ with $\\theta = 2.5$ (revolutions), which gives $0.875\\,\\text{m}$ and is off by exactly $2\\pi$. The formula only works with $\\theta$ in radians.',
    },
    {
      kind: 'concept',
      title: 'Angular velocity: $\\omega = d\\theta/dt$',
      blocks: [
        {
          type: 'p',
          text: 'Everything you know from one-dimensional kinematics carries over, with $\\theta$ playing the role of $x$. The average angular velocity over an interval is $\\Delta\\theta/\\Delta t$. Shrink the interval and you get the instantaneous rate of change, the derivative.',
        },
        {
          type: 'definition',
          term: 'Angular velocity',
          text: 'The [[phys-angular-velocity]] of a rigid body is $\\omega = \\dfrac{d\\theta}{dt}$, in rad/s. Its sign gives the sense of rotation (positive = counterclockwise); its magnitude is the [[angular-speed]]. Every point of a rigid body has the **same** $\\omega$.',
        },
        {
          type: 'p',
          text: 'Engineers often quote rotation in revolutions per minute. To convert, multiply by $2\\pi$ rad per revolution and divide by $60$ s per minute: $1200\\,\\text{rpm} = 1200 \\cdot \\frac{2\\pi}{60} = 40\\pi \\approx 126\\,\\text{rad/s}$.',
        },
        {
          type: 'derivation',
          title: 'A turret that reverses: $\\theta(t) = 2t^3 - 9t^2 + 12t$ (rad, $t$ in s)',
          steps: [
            { tex: '\\omega(t) = \\frac{d\\theta}{dt} = 6t^2 - 18t + 12', why: 'Differentiate term by term with the power rule.' },
            { tex: '= 6(t - 1)(t - 2)', why: 'Factor to see where the rotation stops: $\\omega = 0$ at $t = 1\\,\\text{s}$ and $t = 2\\,\\text{s}$.' },
            { tex: '\\omega(1.5) = 6(0.5)(-0.5) = -1.5\\,\\text{rad/s}', why: 'Between the roots one factor is negative, so $\\omega < 0$: the turret is turning **clockwise**.' },
            { tex: '\\theta(1) = 5\\,\\text{rad}, \\quad \\theta(2) = 4\\,\\text{rad}', why: 'Plug in. The angle goes up to $5$ rad, backs off to $4$ rad, then climbs again.' },
          ],
          result: 'The turret turns counterclockwise for $0 < t < 1$, clockwise for $1 < t < 2$, and counterclockwise again after $t = 2\\,\\text{s}$.',
        },
        {
          type: 'graph',
          x: [0, 3],
          y: [-1, 10],
          xStep: 0.5,
          yStep: 1,
          height: 260,
          functions: [{ expr: '2x^3 - 9x^2 + 12x', label: '$\\theta(t)$ (rad) vs $t$ (s)' }],
          tangents: [{ expr: '2x^3 - 9x^2 + 12x', at: 'c', label: 'slope = ω' }],
          sliders: [{ name: 'c', min: 0, max: 3, step: 0.05, value: 0.5, label: 'time $t$ (s)', play: true, speed: 0.6 }],
          readouts: [
            { label: '$\\omega = 6t^2 - 18t + 12$ (rad/s) $=$', expr: '6c^2 - 18c + 12', digits: 3 },
            { label: '$\\alpha = 12t - 18$ (rad/s²) $=$', expr: '12c - 18', digits: 3 },
          ],
          caption: 'The slope of $\\theta(t)$ is $\\omega$. Press ▶: the tangent flattens at $t = 1$, tilts downward (clockwise rotation) until $t = 2$, then climbs again. Exactly like position and velocity in one dimension.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Angular velocity is a vector',
          text: 'For rotation about a fixed axis, a sign is all you need. In 3D, $\\vec{\\omega}$ points **along the axis**, by the right-hand rule: curl your fingers in the direction of rotation and your thumb points along $\\vec{\\omega}$. A counterclockwise turn in the page has $\\vec{\\omega}$ pointing out of the page. You will need this in the torque and angular momentum lessons.',
        },
      ],
    },
    {
      kind: 'expr',
      prompt: 'A flywheel\'s angular position is $\\theta(t) = 3t^2 - t^3$ (in rad, with $t$ in s). Find its angular velocity $\\omega(t)$.',
      hint: '$\\omega$ is the derivative of $\\theta$ with respect to time.',
      variables: ['t'],
      label: '$\\omega(t) =$',
      answer: '6t - 3t^2',
      answerTex: '6t - 3t^2',
      explanation: 'Differentiate: $\\omega = \\frac{d}{dt}(3t^2 - t^3) = 6t - 3t^2 = 3t(2 - t)$ rad/s. It is positive for $0 < t < 2$ and negative after $t = 2\\,\\text{s}$, when the flywheel reverses. Differentiate once more for $\\alpha = 6 - 6t$.',
    },
    {
      kind: 'concept',
      title: 'Angular acceleration: $\\alpha = d\\omega/dt$',
      blocks: [
        {
          type: 'definition',
          term: 'Angular acceleration',
          text: 'The [[phys-angular-acceleration]] is $\\alpha = \\dfrac{d\\omega}{dt} = \\dfrac{d^2\\theta}{dt^2}$, in rad/s². Like $\\omega$, it is the same for every point of a rigid body.',
        },
        {
          type: 'p',
          text: 'The sign rules are the ones you already learned for $v$ and $a$. If $\\omega$ and $\\alpha$ have the **same** sign, the body spins faster. If they have **opposite** signs, it slows down. A negative $\\alpha$ alone tells you nothing about speeding up or slowing down: a wheel spinning clockwise ($\\omega < 0$) with $\\alpha < 0$ is spinning up.',
        },
        {
          type: 'graph',
          x: [-1.6, 1.6],
          y: [-1.6, 1.6],
          equal: true,
          parametric: [{ x: 'cos(t)', y: 'sin(t)', t: [0, '2pi'], color: 'gray' }],
          segments: [
            { from: [0, 0], to: [1.45, 0], color: 'gray', dashed: true },
            { from: [0, 0], to: ['cos(w*s + 0.5*a*s^2)', 'sin(w*s + 0.5*a*s^2)'], color: 'blue' },
          ],
          points: [{ x: 'cos(w*s + 0.5*a*s^2)', y: 'sin(w*s + 0.5*a*s^2)', color: 'red', label: 'P' }],
          sliders: [
            { name: 'w', min: -3, max: 3, step: 0.1, value: 2, label: 'initial angular velocity $\\omega_0$ (rad/s)' },
            { name: 'a', min: -1.5, max: 1.5, step: 0.05, value: -0.7, label: 'angular acceleration $\\alpha$ (rad/s²)' },
            { name: 's', min: 0, max: 6, step: 0.01, value: 0, label: 'time $t$ (s)', play: true, speed: 1.2 },
          ],
          readouts: [
            { label: '$\\omega = \\omega_0 + \\alpha t$ (rad/s) $=$', expr: 'w + a*s', digits: 2 },
            { label: '$\\theta$ (rad) $=$', expr: 'w*s + 0.5*a*s^2', digits: 2 },
          ],
          caption: 'Press ▶ with the defaults: $\\omega_0 > 0$ and $\\alpha < 0$, so the wheel slows, stops near $t \\approx 2.9\\,\\text{s}$ and then spins back clockwise. Now flip the sign of $\\alpha$ and watch it speed up instead.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: '"Negative" is not "slowing down"',
          text: 'A negative $\\alpha$ means $\\omega$ is decreasing *algebraically*. Whether the wheel slows down depends on the sign of $\\omega$ too. Compare signs, as you did for velocity and acceleration in one dimension.',
        },
      ],
    },
    {
      kind: 'truefalse',
      prompt: 'If a wheel\'s angular acceleration is negative, the wheel must be slowing down.',
      answer: false,
      explanation: 'Slowing down means $|\\omega|$ is shrinking, which happens when $\\omega$ and $\\alpha$ have **opposite** signs. A wheel turning clockwise ($\\omega = -5\\,\\text{rad/s}$) with $\\alpha = -2\\,\\text{rad/s}^2$ is speeding up: one second later $\\omega = -7\\,\\text{rad/s}$. The sign of $\\alpha$ alone does not decide it.',
    },
    {
      kind: 'concept',
      title: 'Constant angular acceleration',
      blocks: [
        {
          type: 'p',
          text: 'When $\\alpha$ is constant, you can integrate exactly as you did for constant linear acceleration. The math is identical; only the symbols change.',
        },
        {
          type: 'derivation',
          title: 'The constant-$\\alpha$ equations by integration',
          steps: [
            { tex: '\\frac{d\\omega}{dt} = \\alpha \\implies \\omega(t) = \\omega_0 + \\alpha t', why: 'Integrate a constant: $\\int \\alpha\\,dt = \\alpha t + C$, and $C = \\omega_0$ because $\\omega(0) = \\omega_0$.' },
            { tex: '\\frac{d\\theta}{dt} = \\omega_0 + \\alpha t \\implies \\theta(t) = \\theta_0 + \\omega_0 t + \\tfrac12 \\alpha t^2', why: 'Integrate again; the constant is $\\theta(0) = \\theta_0$.' },
            { tex: 't = \\frac{\\omega - \\omega_0}{\\alpha}', why: 'Solve the first equation for $t$ (assumes $\\alpha \\neq 0$) to eliminate time.' },
            { tex: '\\Delta\\theta = \\omega_0 \\frac{\\omega - \\omega_0}{\\alpha} + \\tfrac12 \\alpha \\frac{(\\omega - \\omega_0)^2}{\\alpha^2}', why: 'Substitute into the second equation, with $\\Delta\\theta = \\theta - \\theta_0$.' },
            { tex: '\\omega^2 = \\omega_0^2 + 2\\alpha\\,\\Delta\\theta', why: 'Multiply by $2\\alpha$ and simplify: $2\\omega_0\\omega - 2\\omega_0^2 + \\omega^2 - 2\\omega\\omega_0 + \\omega_0^2 = \\omega^2 - \\omega_0^2$.' },
          ],
          result: 'Together with $\\Delta\\theta = \\tfrac12(\\omega_0 + \\omega)t$ (average angular velocity times time), these are the four constant-$\\alpha$ equations.',
        },
        {
          type: 'table',
          headers: ['Linear (constant $a$)', 'Rotational (constant $\\alpha$)'],
          rows: [
            ['$v = v_0 + at$', '$\\omega = \\omega_0 + \\alpha t$'],
            ['$x = x_0 + v_0 t + \\tfrac12 a t^2$', '$\\theta = \\theta_0 + \\omega_0 t + \\tfrac12 \\alpha t^2$'],
            ['$v^2 = v_0^2 + 2a\\,\\Delta x$', '$\\omega^2 = \\omega_0^2 + 2\\alpha\\,\\Delta\\theta$'],
            ['$\\Delta x = \\tfrac12 (v_0 + v) t$', '$\\Delta\\theta = \\tfrac12 (\\omega_0 + \\omega) t$'],
          ],
          caption: 'The dictionary: $x \\leftrightarrow \\theta$, $v \\leftrightarrow \\omega$, $a \\leftrightarrow \\alpha$. Every 1D trick you know works here.',
        },
        {
          type: 'graph',
          x: [0, 6],
          y: [-4, 6],
          xStep: 1,
          yStep: 1,
          height: 260,
          functions: [{ expr: 'w + a*x', label: '$\\omega(t)$ (rad/s)', color: 'blue' }],
          areas: [{ expr: 'w + a*x', from: 0, to: 'c', color: 'blue' }],
          vlines: [{ x: 'c', label: 't', color: 'gray' }],
          sliders: [
            { name: 'w', min: -3, max: 5, step: 0.1, value: 4, label: '$\\omega_0$ (rad/s)' },
            { name: 'a', min: -2, max: 1, step: 0.05, value: -1, label: '$\\alpha$ (rad/s²)' },
            { name: 'c', min: 0, max: 6, step: 0.05, value: 3, label: 'time $t$ (s)', play: true },
          ],
          readouts: [
            { label: 'signed area $= \\omega_0 t + \\tfrac12\\alpha t^2 = \\Delta\\theta =$', expr: 'w*c + 0.5*a*c^2', digits: 3 },
          ],
          caption: 'The area under $\\omega(t)$ is the angular displacement, exactly as the area under $v(t)$ is $\\Delta x$. Area below the axis counts as negative (clockwise turning), so with the defaults $\\Delta\\theta$ peaks at $t = 4\\,\\text{s}$ and then shrinks.',
        },
        {
          type: 'derivation',
          title: 'A 7200 rpm hard disk spins up from rest in $4.0\\,\\text{s}$',
          steps: [
            { tex: '\\omega = 7200 \\cdot \\frac{2\\pi}{60} = 240\\pi \\approx 754\\,\\text{rad/s}', why: 'Convert rpm to rad/s: $2\\pi$ rad per revolution, $60$ s per minute.' },
            { tex: '\\alpha = \\frac{\\omega - \\omega_0}{t} = \\frac{754 - 0}{4.0} \\approx 188\\,\\text{rad/s}^2', why: 'From $\\omega = \\omega_0 + \\alpha t$ with $\\omega_0 = 0$.' },
            { tex: '\\Delta\\theta = \\tfrac12(\\omega_0 + \\omega)t = \\tfrac12(0 + 754)(4.0) \\approx 1508\\,\\text{rad}', why: 'Average angular velocity times time: no need to use the rounded $\\alpha$.' },
            { tex: '\\frac{1508}{2\\pi} = 240\\,\\text{rev}', why: 'Divide by $2\\pi$ to convert back to revolutions.' },
          ],
          result: 'The platter turns $240$ times while spinning up. Shortcut check: average speed $3600$ rpm for $\\frac{4}{60}$ min is $240$ rev.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'A ceiling fan turning at $1200\\,\\text{rpm}$ is switched off and slows uniformly to rest in $8.0\\,\\text{s}$. How many revolutions does it make while stopping? Give 3 significant figures.',
      hint: 'Use $\\Delta\\theta = \\tfrac12(\\omega_0 + \\omega)t$, and keep track of whether your angle is in radians or revolutions.',
      answer: '80',
      answerTex: '80.0',
      tolerance: 0.5,
      unit: 'rev',
      explanation: '$\\omega_0 = 1200 \\cdot \\frac{2\\pi}{60} = 125.7\\,\\text{rad/s}$ and $\\omega = 0$. Then $\\Delta\\theta = \\tfrac12(125.7 + 0)(8.0) = 502.7\\,\\text{rad}$, and $502.7 / 2\\pi = 80.0$ rev. Quick check without radians: the average rate is $600$ rpm $= 10$ rev/s, for $8.0$ s, so $80$ rev. Forgetting the $\\tfrac12$ (using $\\omega_0 t$) gives $160$ rev, as if the fan never slowed.',
    },
    {
      kind: 'error',
      prompt: 'A wheel spinning at $120\\,\\text{rpm}$ slows uniformly to rest in $6.0\\,\\text{s}$. A student finds how many revolutions it makes. Tap the first line that is wrong.',
      lines: [
        '$\\omega_0 = 120\\,\\text{rad/s}, \\quad \\omega = 0$',
        '$\\alpha = \\dfrac{0 - 120}{6.0} = -20\\,\\text{rad/s}^2$',
        '$\\Delta\\theta = \\omega_0 t + \\tfrac12 \\alpha t^2 = 720 - 360 = 360\\,\\text{rad}$',
        '$\\dfrac{360}{2\\pi} \\approx 57.3\\,\\text{rev}$',
      ],
      errorLines: [1],
      explanation: 'Line 1 writes $120$ rpm as $120$ rad/s. Converting: $\\omega_0 = 120 \\cdot \\frac{2\\pi}{60} = 4\\pi \\approx 12.57\\,\\text{rad/s}$. Then $\\Delta\\theta = \\tfrac12(12.57)(6.0) = 37.7\\,\\text{rad} = 6.0$ rev. Sanity check: average $60$ rpm $= 1$ rev/s for $6$ s is $6$ rev. The later lines are correct algebra applied to the wrong number.',
    },
    {
      kind: 'concept',
      title: 'From the body to a point: $v = r\\omega$, $a_t = r\\alpha$, $a_c = r\\omega^2$',
      blocks: [
        {
          type: 'p',
          text: 'All points share the same $\\theta$, $\\omega$ and $\\alpha$, but they do **not** share the same speed: a point far from the axis covers a bigger circle in the same time. Start from $s = r\\theta$ and differentiate, holding $r$ fixed because the body is rigid.',
        },
        {
          type: 'derivation',
          title: 'Differentiate the arc length',
          steps: [
            { tex: 's = r\\theta', why: 'Arc length along the point\'s circle ($\\theta$ in radians).' },
            { tex: 'v = \\frac{ds}{dt} = r\\frac{d\\theta}{dt} = r\\omega', why: '$r$ is constant for a point on a rigid body, so it comes out of the derivative. This is the [[linear-speed]] relation from trig.' },
            { tex: 'a_t = \\frac{dv}{dt} = r\\frac{d\\omega}{dt} = r\\alpha', why: 'The **tangential acceleration** changes the point\'s speed. It points along the velocity (or against it, when slowing).' },
            { tex: 'a_c = \\frac{v^2}{r} = \\frac{(r\\omega)^2}{r} = r\\omega^2', why: 'Any point moving on a circle also has **centripetal acceleration** toward the center, from uniform circular motion. It changes the *direction* of the velocity.' },
            { tex: 'a = \\sqrt{a_t^2 + a_c^2}', why: 'The two components are perpendicular (tangent and radius), so add them with Pythagoras.' },
          ],
          result: 'Speed and both accelerations grow in proportion to $r$: the rim of a wheel works much harder than the hub.',
        },
        {
          type: 'figure',
          svg: /*fig:rk-accel*/`<svg viewBox="0 0 320 300" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="165" r="110" fill="currentColor" class="f-gray" fill-opacity="0.08"/><circle cx="150" cy="165" r="110" fill="none" stroke="currentColor" stroke-width="1.6"/><line x1="150" y1="165" x2="240.1" y2="101.9" stroke="currentColor" stroke-width="1.6" stroke-dasharray="5 4"/><text x="173" y="136.1" font-size="15" text-anchor="middle" font-style="italic">r</text><line x1="240.1" y1="101.9" x2="189.2" y2="29.2" stroke="currentColor" class="s-blue" stroke-width="2.4"/><path d="M185.6,24.1 L187.1,34 L194.5,28.9 Z" fill="currentColor" class="f-blue"/><text x="179.6" y="16.1" font-size="14" text-anchor="end" class="t-blue" font-style="italic">v = rω</text><line x1="240.1" y1="101.9" x2="192.8" y2="135" stroke="currentColor" class="s-red" stroke-width="2.4"/><path d="M187.7,138.6 L197.6,137.1 L192.5,129.8 Z" fill="currentColor" class="f-red"/><text x="243.9" y="160.3" font-size="14" text-anchor="end" class="t-red" font-style="italic">a<tspan dy="4" font-size="11">c</tspan><tspan dy="-4"> = rω²</tspan></text><line x1="240.1" y1="101.9" x2="223.1" y2="77.6" stroke="currentColor" class="s-green" stroke-width="3"/><path d="M219.5,72.4 L220.9,82.4 L228.3,77.2 Z" fill="currentColor" class="f-green"/><text x="229.5" y="76.4" font-size="14" text-anchor="start" class="t-green" font-style="italic">a<tspan dy="4" font-size="11">t</tspan><tspan dy="-4"> = rα</tspan></text><line x1="219.5" y1="72.4" x2="167" y2="109.1" stroke="currentColor" class="s-gray" stroke-width="1.2" stroke-dasharray="5 4"/><line x1="187.7" y1="138.6" x2="167" y2="109.1" stroke="currentColor" class="s-gray" stroke-width="1.2" stroke-dasharray="5 4"/><line x1="240.1" y1="101.9" x2="173.3" y2="108.5" stroke="currentColor" class="s-purple" stroke-width="2.4"/><path d="M167,109.1 L176.4,112.7 L175.5,103.8 Z" fill="currentColor" class="f-purple"/><text x="159" y="103.1" font-size="15" text-anchor="end" class="t-purple" font-style="italic" font-weight="600">a</text><circle cx="240.1" cy="101.9" r="5.5" fill="currentColor"/><circle cx="150" cy="165" r="4" fill="currentColor"/><path d="M121.8,175.3 A30,30 0 0 0 165,191" fill="none" stroke="currentColor" class="s-orange" stroke-width="2"/><path d="M165,191 L156.1,191.5 L160.1,198.4 Z" fill="currentColor" class="f-orange"/><text x="148" y="215" font-size="12" text-anchor="middle" class="t-orange">ω, α (both CCW)</text></svg>`,
          alt: 'A point on the rim of a disk with a blue velocity arrow tangent to the circle, a green tangential acceleration arrow along the velocity, a red centripetal acceleration arrow pointing toward the center, and a purple total acceleration arrow between them.',
          caption: 'A point on a disk that is spinning up counterclockwise. $\\vec{a}_t$ lies along $\\vec{v}$; $\\vec{a}_c$ points to the axis; the total $\\vec{a}$ points inward and forward.',
          maxWidth: 340,
        },
        {
          type: 'graph',
          x: [-1.7, 1.7],
          y: [-1.7, 1.7],
          equal: true,
          parametric: [{ x: 'cos(t)', y: 'sin(t)', t: [0, '2pi'], color: 'gray' }],
          segments: [
            { from: [`cos${TH}`, `sin${TH}`], to: [`cos${TH} - 0.25*a*sin${TH}`, `sin${TH} + 0.25*a*cos${TH}`], color: 'green', arrow: true },
            { from: [`cos${TH}`, `sin${TH}`], to: [`cos${TH} - 0.25*${W}^2*cos${TH}`, `sin${TH} - 0.25*${W}^2*sin${TH}`], color: 'red', arrow: true },
            { from: [`cos${TH}`, `sin${TH}`], to: [`cos${TH} - 0.25*a*sin${TH} - 0.25*${W}^2*cos${TH}`, `sin${TH} + 0.25*a*cos${TH} - 0.25*${W}^2*sin${TH}`], color: 'purple', arrow: true },
          ],
          points: [{ x: `cos${TH}`, y: `sin${TH}`, color: 'blue' }, { x: 0, y: 0, color: 'gray' }],
          sliders: [
            { name: 'a', min: 0.2, max: 2, step: 0.05, value: 1, label: 'angular acceleration $\\alpha$ (rad/s²)' },
            { name: 's', min: 0, max: 2, step: 0.01, value: 0.3, label: 'time $t$ (s), starting from rest', play: true, speed: 0.5 },
          ],
          readouts: [
            { label: '$a_t = r\\alpha$ (m/s²) $=$', expr: 'a', digits: 2 },
            { label: '$\\omega$ (rad/s) $=$', expr: W, digits: 2 },
            { label: '$a_c = r\\omega^2$ (m/s²) $=$', expr: `${W}^2`, digits: 2 },
            { label: 'angle between $\\vec{a}$ and the inward radius ($^\\circ$) $=$', expr: `arctan(a/(${W}^2 + 10^(-9)))*180/pi`, digits: 1 },
          ],
          caption: 'A point at $r = 1\\,\\text{m}$ on a wheel spinning up from rest (arrows drawn at $\\tfrac14$ scale). Green: $\\vec{a}_t$, constant. Red: $\\vec{a}_c$, growing as $\\omega^2$. Purple: the total. Press ▶: at first the acceleration is almost purely tangential; within a second or two it swings to point almost straight at the axis.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'There is no outward "centrifugal" acceleration',
          text: 'Riders on a spinning ride *feel* thrown outward, but their acceleration points **inward**. What they feel is their body\'s tendency to keep going straight while the seat or wall pushes them toward the center. If the push stops, they leave along the tangent, not radially outward.',
        },
      ],
    },
    {
      kind: 'mcq',
      prompt: 'A merry-go-round is **speeding up** while turning counterclockwise (seen from above). Which best describes the acceleration of a rider sitting near the rim?',
      options: [
        {
          text: 'It points inward and partly forward, along the direction of motion',
          correct: true,
          why: 'The rider has centripetal acceleration $r\\omega^2$ toward the center and tangential acceleration $r\\alpha$ forward because the ride is speeding up. Their vector sum points inward and forward.',
        },
        {
          text: 'It points straight toward the center',
          why: 'That is only true at constant $\\omega$. Here $\\alpha \\ne 0$, so there is also a tangential component $a_t = r\\alpha$.',
        },
        {
          text: 'It points outward, away from the center',
          why: 'This is the centrifugal misconception. The sensation of being thrown outward is inertia; the acceleration itself has an inward component.',
        },
        {
          text: 'It is zero because the rider stays in the same seat',
          why: 'Staying in the seat means the rider moves on a circle with changing speed and direction, and both changes require acceleration.',
        },
      ],
      explanation: 'Decompose: $a_c = r\\omega^2$ (inward, because the path curves) plus $a_t = r\\alpha$ (forward, because the speed grows). The total points between the two, tilting more toward the center as $\\omega$ grows.',
    },
    {
      kind: 'numeric',
      prompt: 'Pilots train for high g-loads in a human centrifuge. With the pilot\'s seat $8.0\\,\\text{m}$ from the axis, what constant angular velocity gives a centripetal acceleration of $9.0g$? Use $g = 9.80\\,\\text{m/s}^2$ and give 3 significant figures in rad/s.',
      hint: 'Set $r\\omega^2 = 9.0g$ and solve for $\\omega$.',
      answer: 'sqrt(9*9.8/8)',
      answerTex: '3.32',
      tolerance: 0.02,
      unit: 'rad/s',
      label: '$\\omega =$',
      explanation: '$\\omega = \\sqrt{\\dfrac{9.0g}{r}} = \\sqrt{\\dfrac{9.0 \\times 9.80}{8.0}} = \\sqrt{11.0} \\approx 3.32\\,\\text{rad/s}$, about $31.7$ rpm, or one turn every $1.9$ s. The seat then moves at $v = r\\omega \\approx 26.6\\,\\text{m/s}$. Note how gentle the rotation sounds for such a brutal load: $a_c$ grows as $\\omega^2$ **and** with $r$.',
    },
    {
      kind: 'concept',
      title: 'Rotation in code, and a worked example',
      blocks: [
        {
          type: 'derivation',
          title: 'A grinding wheel ($r = 0.30\\,\\text{m}$) at the instant $\\omega = 4.0\\,\\text{rad/s}$, $\\alpha = 2.0\\,\\text{rad/s}^2$',
          steps: [
            { tex: 'a_t = r\\alpha = (0.30)(2.0) = 0.60\\,\\text{m/s}^2', why: 'Tangential part: how fast the rim\'s speed is changing.' },
            { tex: 'a_c = r\\omega^2 = (0.30)(4.0)^2 = 4.8\\,\\text{m/s}^2', why: 'Centripetal part: toward the axle.' },
            { tex: 'a = \\sqrt{0.60^2 + 4.8^2} \\approx 4.84\\,\\text{m/s}^2', why: 'Perpendicular components add in quadrature.' },
            { tex: '\\tan\\beta = \\frac{a_t}{a_c} = 0.125 \\implies \\beta \\approx 7.1^\\circ', why: 'The total acceleration tilts only $7^\\circ$ forward of the inward radius: at this speed the centripetal part dominates.' },
          ],
          result: 'A chip that breaks off the rim leaves along the tangent at $v = r\\omega = 1.2\\,\\text{m/s}$.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Rotation in a game loop',
          text: 'Engines integrate rotation exactly like position: each frame, `omega += alpha * dt; angle += omega * dt;` (semi-implicit Euler). A turret with a maximum turn rate clamps `omega`; a wheel\'s visual spin uses `omega = v / r` so the tire does not appear to skid. Because the update multiplies by `dt`, the motion is the same at 30 or 240 frames per second, up to a small error that shrinks with `dt`.',
        },
        {
          type: 'code',
          title: 'spin.cpp',
          runnable: true,
          code: `#include <cstdio>

int main() {
    const double alpha = 2.0;      // rad/s^2, constant angular acceleration
    const double omega0 = 1.0;     // rad/s
    const double T = 3.0;          // s
    const int fps[] = {30, 60, 240};

    double exact = omega0 * T + 0.5 * alpha * T * T;
    std::printf("exact theta(3 s) = %.4f rad\\n", exact);

    for (int f : fps) {
        double dt = 1.0 / f;
        double omega = omega0, theta = 0.0;
        int steps = static_cast<int>(T * f + 0.5);
        for (int i = 0; i < steps; ++i) {
            omega += alpha * dt;   // update angular velocity first...
            theta += omega * dt;   // ...then angle (semi-implicit Euler)
        }
        std::printf("%3d fps: theta = %.4f rad, omega = %.4f rad/s, error = %.4f rad\\n",
                    f, theta, omega, theta - exact);
    }
}`,
          output: `exact theta(3 s) = 12.0000 rad
 30 fps: theta = 12.1000 rad, omega = 7.0000 rad/s, error = 0.1000 rad
 60 fps: theta = 12.0500 rad, omega = 7.0000 rad/s, error = 0.0500 rad
240 fps: theta = 12.0125 rad, omega = 7.0000 rad/s, error = 0.0125 rad`,
          annotations: [
            { lines: 9, text: 'Closed form from integrating twice: $\\theta = \\omega_0 t + \\tfrac12\\alpha t^2$.' },
            { lines: '17-18', text: 'One step of semi-implicit Euler: new $\\omega$ first, then use it to advance $\\theta$.' },
            { lines: 20, text: 'The error is $\\tfrac12\\alpha T\\,\\Delta t$: halve the timestep, halve the error. $\\omega$ is exact because $\\alpha$ is constant.' },
          ],
        },
      ],
    },
    {
      kind: 'order',
      prompt: 'Put the steps for solving a constant-$\\alpha$ rotation problem in order.',
      lines: [
        'Choose a positive sense of rotation and list $\\omega_0$, $\\omega$, $\\alpha$, $\\Delta\\theta$, $t$ (known and unknown)',
        'Convert every angle to radians and every rate to rad/s or rad/s²',
        'Pick the constant-$\\alpha$ equation that contains your unknown and no other unknown',
        'Solve symbolically, then substitute numbers',
        'Convert the answer to the requested units (rev, rpm) and check its sign and size',
      ],
      distractors: ['Use $v = r\\omega$ with $\\omega$ in rpm to save a conversion'],
      explanation: 'Signs and units come first, because the equations are only valid with a consistent sign convention and in radians. Then choose the one equation that isolates the unknown, solve symbolically, plug in, and finish with a units-and-sanity check. The distractor is the classic factor-of-$\\frac{2\\pi}{60}$ error.',
    },
    {
      kind: 'fill',
      prompt: 'Complete the dictionary between linear and rotational kinematics.',
      template: 'Position $x$ corresponds to ___, velocity $v$ to ___, and acceleration $a$ to ___. A point at radius $r$ has speed $v = $ ___.',
      blanks: [{ answers: ['$\\theta$'] }, { answers: ['$\\omega$'] }, { answers: ['$\\alpha$'] }, { answers: ['$r\\omega$'] }],
      wordBank: ['$\\theta$', '$\\omega$', '$\\alpha$', '$r\\omega$', '$r\\omega^2$', '$\\omega / r$', '$\\tau$'],
      explanation: '$\\theta \\leftrightarrow x$, $\\omega = d\\theta/dt \\leftrightarrow v$, $\\alpha = d\\omega/dt \\leftrightarrow a$. Differentiating $s = r\\theta$ gives the point\'s speed $v = r\\omega$. ($r\\omega^2$ is the centripetal acceleration, not a speed, and $\\omega/r$ has the wrong units.)',
    },
  ],
  takeaways: [
    'A rigid body rotating about a fixed axis is described by one angle $\\theta$ (in radians), with $\\omega = d\\theta/dt$ and $\\alpha = d\\omega/dt$ shared by every point.',
    'Constant $\\alpha$ gives $\\omega = \\omega_0 + \\alpha t$, $\\theta = \\theta_0 + \\omega_0 t + \\tfrac12\\alpha t^2$, $\\omega^2 = \\omega_0^2 + 2\\alpha\\Delta\\theta$: the 1D equations with $x, v, a \\to \\theta, \\omega, \\alpha$.',
    'Convert rpm with $\\times\\frac{2\\pi}{60}$; revolutions with $\\times 2\\pi$. Most rotation mistakes are a lost $2\\pi$.',
    'A point at radius $r$ has $v = r\\omega$, tangential acceleration $a_t = r\\alpha$ and centripetal acceleration $a_c = r\\omega^2$ (toward the axis), with $a = \\sqrt{a_t^2 + a_c^2}$.',
    'Speeding up or slowing down depends on whether $\\omega$ and $\\alpha$ have the same or opposite signs.',
  ],
  reading: [
    {
      title: 'OpenStax University Physics Volume 1, Chapter 10: Fixed-Axis Rotation',
      url: 'https://openstax.org/details/books/university-physics-volume-1',
      source: 'openstax',
      note: 'Sections 10.1 to 10.3 cover rotational variables, constant angular acceleration and the link to translational quantities.',
    },
    {
      title: 'Khan Academy: Physics',
      url: 'https://www.khanacademy.org/science/physics',
      source: 'khan',
      note: 'The torque and angular momentum unit opens with short videos on angular velocity and angular acceleration.',
    },
    {
      title: 'MIT OCW 8.01SC Classical Mechanics',
      url: 'https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/',
      source: 'other',
      note: 'The rotational kinematics lectures and problem sets show the calculus-based treatment used in this lesson.',
    },
  ],
};
