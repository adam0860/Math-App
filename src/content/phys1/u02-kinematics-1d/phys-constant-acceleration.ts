import type { Lesson } from '../../types';

// Pictorial representation of the on-ramp problem.
const FIG_ONRAMP = `<svg viewBox="0 0 520 210" xmlns="http://www.w3.org/2000/svg">
<line x1="20" y1="114" x2="500" y2="114" stroke="currentColor" stroke-width="1.5"/>
<rect x="42" y="92" width="36" height="18" rx="5" class="f-blue" fill-opacity="0.85"/>
<circle cx="50" cy="111" r="4" fill="currentColor"/>
<circle cx="70" cy="111" r="4" fill="currentColor"/>
<rect x="422" y="92" width="36" height="18" rx="5" class="f-blue" fill-opacity="0.85"/>
<circle cx="430" cy="111" r="4" fill="currentColor"/>
<circle cx="450" cy="111" r="4" fill="currentColor"/>
<text x="60.0" y="54.0" font-size="13" text-anchor="middle">t₀ = 0</text>
<text x="60.0" y="72.0" font-size="13" text-anchor="middle" class="t-blue">x₀ = 0, v₀ = 8.0 m/s</text>
<text x="440.0" y="54.0" font-size="13" text-anchor="middle" class="t-red">t₁ = ?</text>
<text x="440.0" y="72.0" font-size="13" text-anchor="middle" class="t-blue">x₁ = 200 m, v₁ = 30.0 m/s</text>
<line x1="220.0" y1="66.0" x2="281.0" y2="66.0" class="s-red" stroke-width="2"/><path d="M290.0,66.0 L281.0,70.0 L281.0,62.0 Z" class="f-red"/>
<text x="255.0" y="56.0" font-size="14" text-anchor="middle" class="t-red" font-weight="700">a = ?</text>
<line x1="40.0" y1="144.0" x2="491.0" y2="144.0" stroke="currentColor" stroke-width="1.2"/><path d="M500.0,144.0 L491.0,148.0 L491.0,140.0 Z" fill="currentColor"/>
<line x1="60" y1="138" x2="60" y2="150" stroke="currentColor"/>
<line x1="440" y1="138" x2="440" y2="150" stroke="currentColor"/>
<text x="60.0" y="164.0" font-size="12" text-anchor="middle">0</text>
<text x="440.0" y="164.0" font-size="12" text-anchor="middle">200 m</text>
<text x="498.0" y="164.0" font-size="12" text-anchor="end">+x</text>
<text x="20.0" y="196.0" font-size="13" text-anchor="start" class="t-gray">Known: x₀, v₀, x₁, v₁.   Find: a, then t₁.   Assume: a is constant.</text>
</svg>`;

// Braking car on a road: speed w (m/s), reaction time 1.5 s, deceleration 7.0 m/s^2.
const BRAKE = (w: number) => `(${w}*min(s, 1.5) + ${w}*min(max(s - 1.5, 0), ${w}/7) - 3.5*min(max(s - 1.5, 0), ${w}/7)^2)`;

// Jump with apex height h, time to apex k and fall-gravity multiplier m (time variable u).
const JUMP = (u: string) => `(2h/k*min(${u}, k) - h/k^2*min(${u}, k)^2 - m*h/k^2*max(${u} - k, 0)^2)`;

export const lesson: Lesson = {
  id: 'phys-constant-acceleration',
  title: 'Constant Acceleration',
  summary: 'Integrate a constant acceleration to derive the kinematic equations, then use a reliable strategy on braking distances, chases and game jump tuning.',
  minutes: 20,
  objectives: [
    'Derive $v = v_0 + at$ and $x = x_0 + v_0t + \\tfrac12at^2$ by integrating a constant acceleration',
    'Derive $v^2 = v_0^2 + 2a\\,\\Delta x$ and choose the kinematic equation that fits the knowns and unknowns',
    'Follow a systematic problem-solving strategy: sketch, coordinates, symbols, solve, check',
    'Compute stopping distances and explain why braking distance grows with the square of speed',
    'Solve two-object (chase) problems and tune a game jump from a designer\'s height and timing',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Integrating a constant acceleration',
      blocks: [
        {
          type: 'p',
          text: 'In the last lesson you integrated an arbitrary $a(t)$. The single most common special case is **constant acceleration**: a car braking steadily, a ball in free fall (ignoring air), a character under game gravity. When $a$ is constant the integrals are easy, and they produce formulas you will use for the rest of the course.',
        },
        {
          type: 'derivation',
          title: 'From $a$ to $v(t)$ to $x(t)$',
          steps: [
            { tex: '\\frac{dv}{dt} = a \\quad (a \\text{ constant})', why: 'The definition of acceleration, with $a$ not depending on $t$.' },
            { tex: 'v(t) = v_0 + \\int_0^t a\\,dt\' = v_0 + at', why: 'Integrate from $0$ to $t$; the integral of a constant is the constant times the elapsed time. $v_0$ is the velocity at $t = 0$.' },
            { tex: '\\frac{dx}{dt} = v_0 + at', why: 'Now use $v = dx/dt$.' },
            { tex: 'x(t) = x_0 + \\int_0^t (v_0 + at\')\\,dt\' = x_0 + v_0t + \\tfrac12at^2', why: 'Integrate again: $\\int_0^t t\'\\,dt\' = \\tfrac12t^2$. That is where the $\\tfrac12$ comes from.' },
          ],
          result: 'Velocity is linear in time and position is quadratic in time. Check by differentiating: $\\frac{d}{dt}(x_0 + v_0t + \\tfrac12at^2) = v_0 + at$. ✓',
        },
        {
          type: 'p',
          text: 'The graph tells the same story. The $v$–$t$ graph is a straight line of slope $a$, and the displacement is the area under it: a rectangle $v_0t$ plus a triangle $\\tfrac12(at)(t)$.',
        },
        {
          type: 'graph',
          x: [-0.2, 6.2],
          y: [-12, 20],
          functions: [{ expr: 'u + a*x', label: '$v(t) = v_0 + at$ (m/s)', color: 'red', domain: [0, 6] }],
          areas: [{ expr: 'u + a*x', from: 0, to: 's', color: 'blue' }],
          points: [{ x: 's', y: 'u + a*s', color: 'red' }],
          hlines: [{ y: 'u', label: 'v₀', color: 'gray' }],
          sliders: [
            { name: 's', min: 0, max: 6, step: 0.01, value: 0, label: 'time $t$ (s)', play: true, speed: 1.5 },
            { name: 'u', min: -5, max: 10, step: 0.5, value: 2, label: 'initial velocity $v_0$ (m/s)' },
            { name: 'a', min: -3, max: 3, step: 0.1, value: 1.5, label: 'acceleration $a$ (m/s²)' },
          ],
          readouts: [
            { label: '$v = v_0 + at$ (m/s):', expr: 'u + a*s', digits: 2 },
            { label: 'shaded area $= v_0t + \\tfrac12at^2$ (m):', expr: 'u*s + 0.5*a*s^2', digits: 2 },
          ],
          caption: 'Press ▶. The shaded area is the displacement $\\Delta x$. Try $v_0 = 8$, $a = -3$: the line crosses zero at $t = 2.7\\,\\text{s}$ (the object turns around) and the area below the axis then subtracts.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the $\\tfrac12$',
          text: 'Under constant acceleration the velocity climbs steadily from $v_0$ to $v_0 + at$, so its average is exactly the midpoint, $v_0 + \\tfrac12at$. Displacement is average velocity times time: $(v_0 + \\tfrac12at)\\,t = v_0t + \\tfrac12at^2$. The $\\tfrac12$ is the triangle in the graph. Forgetting it is one of the most common errors in all of kinematics.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'concept',
      title: 'The full set of kinematic equations',
      blocks: [
        {
          type: 'p',
          text: 'Many problems never mention time. A car brakes from $25\\,\\text{m/s}$ to rest; how far does it go? Eliminate $t$ between the two equations and you get a third relation, one of the [[phys-kinematic-equations|kinematic equations]].',
        },
        {
          type: 'derivation',
          title: 'Eliminating $t$',
          steps: [
            { tex: 't = \\frac{v - v_0}{a}', why: 'Solve $v = v_0 + at$ for $t$ (assuming $a \\ne 0$).' },
            { tex: '\\Delta x = v_0\\left(\\frac{v - v_0}{a}\\right) + \\tfrac12 a \\left(\\frac{v - v_0}{a}\\right)^2', why: 'Substitute into $\\Delta x = x - x_0 = v_0t + \\tfrac12at^2$.' },
            { tex: '2a\\,\\Delta x = 2v_0v - 2v_0^2 + v^2 - 2v_0v + v_0^2', why: 'Multiply both sides by $2a$ and expand $(v - v_0)^2$.' },
            { tex: 'v^2 = v_0^2 + 2a\\,\\Delta x', why: 'The $2v_0v$ terms cancel. Rearrange.' },
          ],
          result: 'A clean relation between speeds and displacement, with no $t$ in sight.',
        },
        {
          type: 'deepdive',
          title: 'A slicker derivation with the chain rule',
          blocks: [
            {
              type: 'p',
              text: 'Think of $v$ as a function of position. By the chain rule, $a = \\frac{dv}{dt} = \\frac{dv}{dx}\\frac{dx}{dt} = v\\frac{dv}{dx}$. Separate and integrate with $a$ constant:',
            },
            { type: 'math', tex: '\\int_{x_0}^{x} a\\,dx\' = \\int_{v_0}^{v} v\'\\,dv\' \\implies a(x - x_0) = \\tfrac12v^2 - \\tfrac12v_0^2' },
            {
              type: 'p',
              text: 'Multiply by 2 and you have the same equation. This $a = v\\,dv/dx$ trick returns in the energy unit: multiply by the mass and it becomes the work–energy theorem.',
            },
          ],
        },
        {
          type: 'table',
          headers: ['Equation', 'Leaves out', 'Use it when…'],
          rows: [
            ['$v = v_0 + at$', '$\\Delta x$', 'distance is neither given nor wanted'],
            ['$\\Delta x = v_0t + \\tfrac12at^2$', '$v$', 'the final velocity is neither given nor wanted'],
            ['$v^2 = v_0^2 + 2a\\,\\Delta x$', '$t$', 'time is neither given nor wanted'],
            ['$\\Delta x = \\tfrac12(v_0 + v)\\,t$', '$a$', 'acceleration is neither given nor wanted'],
          ],
          caption: 'Every problem involves five quantities, $\\Delta x$, $v_0$, $v$, $a$, $t$. Know three and you can find the other two. Pick the equation that leaves out the one you neither know nor want.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Only for constant acceleration',
          text: 'Every one of these equations was derived assuming $a$ is constant. For a drone with $a(t) = 6 - 2t$, or a falling object with air drag, they give wrong answers. Then you go back to integrating $a(t)$ directly, as in the previous lesson, or to a numerical simulation.',
        },
      ],
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'fill',
      prompt: 'Pick the right equation for each situation (constant acceleration).',
      template: 'Given $v_0$, $a$ and the stopping distance, but asked for nothing about time: use ___. Given $v_0$, $v$ and $t$, and asked for the distance: use ___. Given $v_0$, $a$ and $t$, and asked for the final velocity: use ___.',
      blanks: [{ answers: ['$v^2 = v_0^2 + 2a\\,\\Delta x$'] }, { answers: ['$\\Delta x = \\tfrac12(v_0 + v)t$'] }, { answers: ['$v = v_0 + at$'] }],
      wordBank: ['$v^2 = v_0^2 + 2a\\,\\Delta x$', '$\\Delta x = \\tfrac12(v_0 + v)t$', '$v = v_0 + at$', '$\\Delta x = v_0t + \\tfrac12at^2$', '$v = \\Delta x / t$'],
      explanation: 'Match the equation to the quantity that is missing. With no time involved, $v^2 = v_0^2 + 2a\\,\\Delta x$ is the only equation without $t$. With $v_0$, $v$ and $t$ known but no $a$, the average-velocity form $\\Delta x = \\tfrac12(v_0 + v)t$ avoids $a$. For velocity after a known time, $v = v_0 + at$ is direct. The distractor $v = \\Delta x/t$ gives the *average* velocity, not the final one.',
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'concept',
      title: 'A problem-solving strategy',
      blocks: [
        {
          type: 'p',
          text: 'Most mistakes in kinematics are not calculus mistakes; they are setup mistakes: a sign convention that flips halfway through, a velocity plugged in where a displacement belongs. A fixed routine prevents them.',
        },
        {
          type: 'steps',
          items: [
            { title: 'Sketch', text: 'Draw the situation at the key instants (a pictorial representation). Mark each known value and each unknown with a "?".' },
            { title: 'Coordinates', text: 'Choose an origin and a positive direction, and write it on the sketch. Every velocity and acceleration gets a sign from this choice.' },
            { title: 'Model', text: 'Is the acceleration constant? If yes, the kinematic equations apply. If not, integrate $a(t)$.' },
            { title: 'Solve symbolically', text: 'Pick the equation that contains your unknown and your knowns. Solve for the unknown in symbols before plugging in numbers.' },
            { title: 'Assess', text: 'Check units, signs and size. Does the answer have the dimension it should? Does it behave sensibly in a limiting case ($a \\to 0$, $t \\to 0$)?' },
          ],
        },
        {
          type: 'figure',
          svg: FIG_ONRAMP,
          alt: 'A road with a car at x equals 0 moving at 8.0 meters per second at time zero, and the same car at x equals 200 meters moving at 30.0 meters per second at an unknown time. A red arrow labeled a equals question mark points in the plus x direction.',
          caption: 'A pictorial representation: two instants, a coordinate axis, every known and unknown labeled.',
          maxWidth: 520,
        },
        {
          type: 'derivation',
          title: 'A car merges onto a highway, from $8.0\\,\\text{m/s}$ to $30.0\\,\\text{m/s}$ over a $200\\,\\text{m}$ ramp. Find $a$ and the time.',
          steps: [
            { tex: 'v^2 = v_0^2 + 2a\\,\\Delta x \\implies a = \\frac{v^2 - v_0^2}{2\\,\\Delta x}', why: 'Time is unknown, so use the equation without $t$ and solve for $a$ in symbols first.' },
            { tex: 'a = \\frac{(30.0)^2 - (8.0)^2}{2(200)} = \\frac{900 - 64}{400} = 2.09\\,\\text{m/s}^2', why: 'Units: $(\\text{m/s})^2/\\text{m} = \\text{m/s}^2$. ✓' },
            { tex: '\\Delta x = \\tfrac12(v_0 + v)\\,t \\implies t = \\frac{2\\,\\Delta x}{v_0 + v}', why: 'For the time, use the equation without $a$, so an error in $a$ cannot propagate.' },
            { tex: 't = \\frac{2(200)}{8.0 + 30.0} = 10.5\\,\\text{s}', why: 'Units: $\\text{m}/(\\text{m/s}) = \\text{s}$. ✓' },
          ],
          result: 'Assess: $2.09\\,\\text{m/s}^2$ means 0 to $100\\,\\text{km/h}$ in about $13\\,\\text{s}$, a believable family car. Positive $a$ matches speeding up in the $+x$ direction.',
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'Instructors grade the setup: a sketch, a stated coordinate system, the symbolic equation, then numbers with units. A correct number with no visible reasoning often earns little credit, and a small arithmetic slip in a clearly correct setup usually loses little. Solving symbolically first also makes the dimension check possible.',
        },
      ],
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'order',
      prompt: 'Put the problem-solving steps in order.',
      lines: [
        'Sketch the situation, label knowns and unknowns, and choose an origin and a positive direction',
        'Decide whether the acceleration is constant',
        'Choose an equation and solve it symbolically for the unknown',
        'Substitute numbers with units',
        'Check units, sign and whether the size is reasonable',
      ],
      explanation: 'You cannot assign signs until the axis exists, and you cannot pick an equation until you know whether the constant-acceleration formulas apply. Solving symbolically before substituting keeps the algebra clean and lets you check dimensions. The final assessment catches the errors that slipped through.',
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'numeric',
      prompt: 'An F/A-18 lands on an aircraft carrier at $67.0\\,\\text{m/s}$, and the arresting wire stops it in $100\\,\\text{m}$. Assuming constant deceleration, what is the magnitude of its acceleration? Give 3 significant figures.',
      hint: 'Time is not given and not asked for. Use $v^2 = v_0^2 + 2a\\,\\Delta x$ with $v = 0$.',
      answer: '67^2/200',
      answerTex: '22.4\\,\\text{m/s}^2',
      tolerance: 0.15,
      unit: 'm/s²',
      label: '$|a| =$',
      explanation: 'With $+x$ along the motion: $0 = (67.0)^2 + 2a(100)$, so $a = -\\frac{4489}{200} = -22.4\\,\\text{m/s}^2$, a magnitude of $22.4\\,\\text{m/s}^2$, about $2.3g$. The stop takes $t = \\frac{2\\,\\Delta x}{v_0} = 2.99\\,\\text{s}$. Dropping the $2$ in $2a\\,\\Delta x$ gives $44.9\\,\\text{m/s}^2$, twice too large.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'Stopping distances',
      blocks: [
        {
          type: 'p',
          text: 'When a hazard appears, a driver does not brake instantly. For a reaction time $t_r$ (typically $0.7$ to $1.5\\,\\text{s}$) the vehicle keeps its speed. Only then does it decelerate, at up to about $7$–$8\\,\\text{m/s}^2$ on dry pavement. The total [[phys-stopping-distance|stopping distance]] is the sum of two pieces:',
        },
        {
          type: 'theorem',
          name: 'Stopping distance',
          tex: 'd_{\\text{stop}} = \\underbrace{v_0\\,t_r}_{\\text{reaction}} + \\underbrace{\\frac{v_0^2}{2|a|}}_{\\text{braking}}',
          text: 'The braking part comes from $0 = v_0^2 + 2a\\,\\Delta x$ with $a = -|a|$. It grows with the **square** of the speed.',
        },
        {
          type: 'graph',
          x: [0, 40],
          y: [0, 200],
          functions: [
            { expr: 'r*x + x^2/(2b)', label: 'total stopping distance (m)', color: 'red' },
            { expr: 'r*x', label: 'reaction distance only (m)', color: 'gray', dashed: true },
          ],
          points: [{ x: 'w', y: 'r*w + w^2/(2b)', color: 'red' }],
          vlines: [{ x: 'w', color: 'gray' }],
          sliders: [
            { name: 'w', min: 5, max: 40, step: 0.5, value: 25, label: 'speed $v_0$ (m/s)' },
            { name: 'r', min: 0.5, max: 2.5, step: 0.1, value: 1.5, label: 'reaction time $t_r$ (s)' },
            { name: 'b', min: 3, max: 9, step: 0.5, value: 7, label: 'braking deceleration $|a|$ (m/s²)' },
          ],
          readouts: [
            { label: 'reaction (m):', expr: 'r*w', digits: 1 },
            { label: 'braking (m):', expr: 'w^2/(2b)', digits: 1 },
            { label: 'total (m):', expr: 'r*w + w^2/(2b)', digits: 1 },
          ],
          caption: 'Horizontal axis: initial speed (m/s). At low speed the reaction distance dominates; at high speed the parabola takes over. Try $|a| = 3.5\\,\\text{m/s}^2$ (wet or icy road) at $30\\,\\text{m/s}$.',
        },
        {
          type: 'derivation',
          title: 'Stopping from $25.0\\,\\text{m/s}$ ($90\\,\\text{km/h}$) with $t_r = 1.50\\,\\text{s}$ and $|a| = 7.00\\,\\text{m/s}^2$',
          steps: [
            { tex: 'd_r = v_0t_r = (25.0)(1.50) = 37.5\\,\\text{m}', why: 'Constant velocity during the reaction time: no braking yet.' },
            { tex: 'd_b = \\frac{v_0^2}{2|a|} = \\frac{(25.0)^2}{2(7.00)} = 44.6\\,\\text{m}', why: 'Constant deceleration to rest: $v^2 = v_0^2 + 2a\\,\\Delta x$ with $v = 0$, $a = -7.00$.' },
            { tex: 'd_{\\text{stop}} = 37.5 + 44.6 = 82.1\\,\\text{m}', why: 'The two phases happen one after the other, so the distances add.' },
          ],
          result: 'Nearly half the distance is covered before the brakes are even touched.',
        },
        {
          type: 'graph',
          x: [-5, 125],
          y: [0, 3],
          height: 160,
          segments: [
            { from: [0, 2], to: [BRAKE(30), 2], color: 'red', dashed: true },
            { from: [0, 1], to: [BRAKE(20), 1], color: 'blue', dashed: true },
          ],
          vlines: [{ x: 80, label: 'hazard at 80 m', color: 'orange', dashed: false }],
          points: [
            { x: BRAKE(30), y: 2, label: '30 m/s', color: 'red' },
            { x: BRAKE(20), y: 1, label: '20 m/s', color: 'blue' },
          ],
          sliders: [{ name: 's', min: 0, max: 6, step: 0.01, value: 0, label: 'time (s)', play: true, speed: 1.5 }],
          readouts: [
            { label: 'speed of the 20 m/s car (m/s):', expr: '20 - 7*min(max(s - 1.5, 0), 20/7)', digits: 1 },
            { label: 'speed of the 30 m/s car (m/s):', expr: '30 - 7*min(max(s - 1.5, 0), 30/7)', digits: 1 },
          ],
          caption: 'A top-down view of the road (horizontal axis in meters). Both drivers see a hazard $80\\,\\text{m}$ ahead at $t = 0$, react in $1.5\\,\\text{s}$ and brake at $7.0\\,\\text{m/s}^2$. Press ▶: the slower car stops at $58.6\\,\\text{m}$; the faster one reaches the hazard still doing about $20\\,\\text{m/s}$ and needs $109\\,\\text{m}$.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Convoy spacing',
          text: 'Military convoys and driving instructors use *time* gaps (the "two-second rule", more at night or in rain) rather than fixed distances, because the reaction distance scales with speed. But the braking term scales with speed squared, so at highway speeds even a two-second gap only works because the vehicle ahead also needs time to stop.',
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'numeric',
      prompt: 'A driver traveling at $30.0\\,\\text{m/s}$ sees a roadblock. Her reaction time is $0.800\\,\\text{s}$ and her car brakes at $6.00\\,\\text{m/s}^2$. What is her total stopping distance? Give 3 significant figures.',
      hint: 'Add the reaction distance $v_0t_r$ and the braking distance $v_0^2/(2|a|)$.',
      answer: '30*0.8 + 30^2/12',
      answerTex: '99.0\\,\\text{m}',
      tolerance: 0.6,
      unit: 'm',
      label: '$d_{\\text{stop}} =$',
      explanation: 'Reaction: $(30.0)(0.800) = 24.0\\,\\text{m}$. Braking: $\\frac{(30.0)^2}{2(6.00)} = 75.0\\,\\text{m}$. Total $99.0\\,\\text{m}$. Leaving out the reaction phase gives $75.0\\,\\text{m}$; forgetting the $2$ in the denominator gives $174\\,\\text{m}$.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'mcq',
      prompt: 'Ignoring reaction time, a car braking with a fixed deceleration stops in $40\\,\\text{m}$ from $15\\,\\text{m/s}$. How far does it need from $30\\,\\text{m/s}$?',
      options: [
        { text: '$40\\,\\text{m}$', why: 'The deceleration is the same, but there is more speed to remove, so it must take longer and cover more ground.' },
        { text: '$80\\,\\text{m}$', why: 'That would be true if distance were proportional to speed, as the *reaction* distance is. Braking distance goes as $v_0^2$.' },
        { text: '$160\\,\\text{m}$', correct: true, why: '$d_b = v_0^2/(2|a|)$, so doubling $v_0$ multiplies $d_b$ by $2^2 = 4$: $4 \\times 40 = 160\\,\\text{m}$.' },
        { text: '$57\\,\\text{m}$', why: 'That is $40\\sqrt{2}$, as if distance grew with $\\sqrt{v_0}$. It grows much faster, with $v_0^2$.' },
      ],
      explanation: 'At twice the speed, braking takes twice as long ($t = v_0/|a|$) *and* the average speed during braking is twice as high, so the distance is four times as large. This is why a modest speed increase has a dramatic effect on crash risk: from $15$ to $30\\,\\text{m/s}$ the braking distance goes from $40$ to $160\\,\\text{m}$.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'concept',
      title: 'Two moving objects: the chase',
      blocks: [
        {
          type: 'p',
          text: 'When two objects move, write a position function for each **in the same coordinate system and with the same clock**. "Meeting" means equal positions: set $x_1(t) = x_2(t)$ and solve for $t$.',
        },
        {
          type: 'derivation',
          title: 'A speeder passes a parked police car at a constant $30.0\\,\\text{m/s}$. At that instant the police car starts from rest with $a = 3.00\\,\\text{m/s}^2$. When and where does it catch up?',
          steps: [
            { tex: 'x_S(t) = 30.0\\,t, \\qquad x_P(t) = \\tfrac12(3.00)\\,t^2 = 1.50\\,t^2', why: 'Origin at the police car, $t = 0$ when the speeder passes. The speeder has $a = 0$; the police car has $v_0 = 0$.' },
            { tex: '1.50\\,t^2 = 30.0\\,t', why: 'Catching up means being at the same place at the same time.' },
            { tex: 't(1.50\\,t - 30.0) = 0 \\implies t = 0 \\text{ or } t = 20.0\\,\\text{s}', why: 'Factor; do not divide by $t$ and lose a root. $t = 0$ is the moment they are side by side at the start.' },
            { tex: 'x = 30.0(20.0) = 600\\,\\text{m}, \\qquad v_P = 3.00(20.0) = 60.0\\,\\text{m/s}', why: 'Plug back in. The police car is going twice as fast as the speeder when it catches him.' },
          ],
          result: 'The catch happens $20.0\\,\\text{s}$ later, $600\\,\\text{m}$ down the road.',
        },
        {
          type: 'graph',
          x: [-0.5, 24],
          y: [-20, 800],
          functions: [
            { expr: '30x', label: 'speeder $x_S = 30t$', color: 'red', domain: [0, 24] },
            { expr: '1.5x^2', label: 'police $x_P = 1.5t^2$', color: 'blue', domain: [0, 24] },
          ],
          points: [
            { x: 's', y: '30s', color: 'red' },
            { x: 's', y: '1.5s^2', color: 'blue' },
          ],
          segments: [{ from: ['s', '1.5s^2'], to: ['s', '30s'], color: 'purple' }],
          sliders: [{ name: 's', min: 0, max: 22, step: 0.05, value: 0, label: 'time $t$ (s)', play: true, speed: 5.5 }],
          readouts: [
            { label: 'gap $x_S - x_P$ (m):', expr: '30s - 1.5s^2', digits: 1 },
            { label: 'police speed (m/s):', expr: '3s', digits: 1 },
          ],
          caption: 'Horizontal: time (s). Vertical: position (m). The purple segment is the gap. Press ▶: the gap grows while the speeder is faster, peaks at $150\\,\\text{m}$ when both go $30\\,\\text{m/s}$ ($t = 10\\,\\text{s}$), then shrinks to zero at $t = 20\\,\\text{s}$, where the curves cross.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Equal speeds is not catching up',
          text: 'A very common mistake is to set the velocities equal: $3.00\\,t = 30.0$, giving $t = 10\\,\\text{s}$. That is the moment the gap is **largest**, not zero. On the $x$–$t$ graph, equal velocities means parallel tangents; meeting means the curves cross.',
        },
      ],
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'truefalse',
      prompt: 'In the chase above, at the instant the police car catches the speeder, the two cars have the same speed.',
      answer: false,
      explanation: 'False. They have the same *position* at $t = 20.0\\,\\text{s}$, but the police car is moving at $60.0\\,\\text{m/s}$, twice the speeder\'s $30.0\\,\\text{m/s}$. Their speeds were equal earlier, at $t = 10.0\\,\\text{s}$, when the gap between them was at its maximum of $150\\,\\text{m}$. A police car that only matched the speeder\'s speed would never close the gap it had already lost.',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'concept',
      title: 'Game physics: tuning a jump',
      blocks: [
        {
          type: 'p',
          text: 'Designers do not think in $\\text{m/s}^2$. They say "the jump should clear $2\\,\\text{m}$ and reach its peak in $0.4\\,\\text{s}$". Real gravity cannot do both: with $g = 9.80\\,\\text{m/s}^2$, a $2\\,\\text{m}$ jump takes $0.64\\,\\text{s}$ to peak, which feels floaty. So platformers pick their own constant gravity, and the kinematic equations tell you exactly which.',
        },
        {
          type: 'derivation',
          title: 'From apex height $h$ and time to apex $t_h$ to gravity $g$ and launch speed $v_0$',
          steps: [
            { tex: '0 = v_0 - g\\,t_h \\implies v_0 = g\\,t_h', why: 'With $+y$ up, $a = -g$. At the apex the vertical velocity is zero.' },
            { tex: 'h = v_0t_h - \\tfrac12 g t_h^2 = g t_h^2 - \\tfrac12 g t_h^2 = \\tfrac12 g t_h^2', why: 'Position at the apex, substituting $v_0 = g t_h$.' },
            { tex: 'g = \\frac{2h}{t_h^2}, \\qquad v_0 = \\frac{2h}{t_h}', why: 'Solve for $g$, then $v_0 = g t_h$.' },
            { tex: 'h = 2.0\\,\\text{m},\\; t_h = 0.40\\,\\text{s} \\implies g = 25\\,\\text{m/s}^2,\\; v_0 = 10\\,\\text{m/s}', why: 'About $2.5$ times real gravity: typical for snappy platformers.' },
          ],
          result: 'Two designer-friendly numbers fix the physics. An equivalent result, $v_0 = \\sqrt{2gh}$, comes straight from $v^2 = v_0^2 + 2a\\,\\Delta y$ with $v = 0$ at the top.',
        },
        {
          type: 'graph',
          x: [-0.02, 1.3],
          y: [-0.1, 3.3],
          functions: [
            { expr: JUMP('x'), label: 'height $y(t)$ (m)', color: 'blue', domain: [0, 'k + k/sqrt(m)'] },
            { expr: '2h/k*x - h/k^2*x^2', label: 'symmetric arc (same gravity both ways)', color: 'gray', dashed: true, domain: [0, '2k'] },
          ],
          points: [{ x: 'min(s, k + k/sqrt(m))', y: JUMP('min(s, k + k/sqrt(m))'), color: 'red' }],
          hlines: [{ y: 'h', color: 'gray' }],
          sliders: [
            { name: 's', min: 0, max: 1.25, step: 0.005, value: 0, label: 'time $t$ (s)', play: true, speed: 0.4 },
            { name: 'h', min: 0.5, max: 3, step: 0.1, value: 2, label: 'apex height $h$ (m)' },
            { name: 'k', min: 0.2, max: 0.6, step: 0.01, value: 0.4, label: 'time to apex $t_h$ (s)' },
            { name: 'm', min: 1, max: 3, step: 0.1, value: 2, label: 'fall gravity multiplier' },
          ],
          readouts: [
            { label: '$g = 2h/t_h^2$ (m/s²):', expr: '2h/k^2', digits: 1 },
            { label: '$v_0 = 2h/t_h$ (m/s):', expr: '2h/k', digits: 2 },
            { label: 'airtime (s):', expr: 'k + k/sqrt(m)', digits: 3 },
          ],
          caption: 'Horizontal: time (s); vertical: height (m). Press ▶ (shown at 0.4× speed). Raise the fall multiplier and the descent gets shorter and sharper: many games use 1.5–3× gravity on the way down, so jumps feel responsive instead of floaty.',
        },
        {
          type: 'p',
          text: 'In code, gravity is applied once per frame. For a **constant** acceleration, the kinematic equation over one frame is exact, so every frame lands exactly on the designed arc, at any frame rate. The simpler Euler updates you will study in the game-physics unit are not exact:',
        },
        {
          type: 'code',
          title: 'jump.cpp',
          runnable: true,
          code: `#include <cstdio>

int main() {
    // Designer inputs: how high the jump goes, and how long it takes to get there.
    const double h = 2.0;       // apex height, m
    const double tApex = 0.40;  // time to apex, s
    const double g = 2.0 * h / (tApex * tApex);  // the gravity this game needs
    const double v0 = 2.0 * h / tApex;           // the launch speed
    std::printf("g = %.2f m/s^2, v0 = %.2f m/s\\n", g, v0);

    const double dt = 1.0 / 60.0;  // 60 frames per second
    const int frames = 24;         // 24 frames = 0.40 s, the designed apex time
    double yE = 0, vE = v0;        // explicit Euler
    double yS = 0, vS = v0;        // semi-implicit Euler
    double yK = 0, vK = v0;        // exact kinematic update
    for (int i = 0; i < frames; ++i) {
        yE += vE * dt;  // position uses the OLD velocity...
        vE -= g * dt;

        vS -= g * dt;   // ...or the NEW velocity...
        yS += vS * dt;

        yK += vK * dt - 0.5 * g * dt * dt;  // ...or x = x0 + v0 t + a t^2 / 2 over one frame
        vK -= g * dt;
    }
    std::printf("height at the apex frame (designed %.4f m):\\n", h);
    std::printf("  explicit Euler      %.4f m\\n", yE);
    std::printf("  semi-implicit Euler %.4f m\\n", yS);
    std::printf("  kinematic update    %.4f m\\n", yK);
}`,
          output: `g = 25.00 m/s^2, v0 = 10.00 m/s
height at the apex frame (designed 2.0000 m):
  explicit Euler      2.0833 m
  semi-implicit Euler 1.9167 m
  kinematic update    2.0000 m`,
          annotations: [
            { lines: '7-8', text: 'The derived formulas: $g = 2h/t_h^2$ and $v_0 = 2h/t_h$.' },
            { lines: '17-18', text: 'Explicit Euler moves with the velocity from the *start* of the frame, so it overshoots the apex by $8.3\\,\\text{cm}$.' },
            { lines: '20-21', text: 'Semi-implicit Euler uses the *updated* velocity and undershoots by the same amount.' },
            { lines: 23, text: '$\\Delta y = v\\,\\Delta t + \\tfrac12 a\\,\\Delta t^2$ over one frame: exact when $a$ is constant, whatever $\\Delta t$ is.' },
          ],
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Variable jump height',
          text: 'Many games cut the upward velocity (or raise gravity) when the player releases the jump button early, giving short hops and full jumps from one button. Each phase is still constant acceleration, so you can predict every possible arc with the equations in this lesson.',
        },
      ],
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'expr',
      prompt: 'A game character must jump to a height $h$ under constant gravity $g$ (the vertical velocity is zero at the top). Find the required launch speed $v_0$ in terms of $g$ and $h$.',
      label: '$v_0 =$',
      answer: 'sqrt(2g*h)',
      answerTex: 'v_0 = \\sqrt{2gh}',
      variables: ['g', 'h'],
      domain: [0.5, 3],
      hint: 'Time is not involved. Use $v^2 = v_0^2 + 2a\\,\\Delta y$ with $v = 0$, $a = -g$ and $\\Delta y = h$.',
      explanation: '$0 = v_0^2 - 2gh$, so $v_0 = \\sqrt{2gh}$. Check dimensions: $\\sqrt{[L T^{-2}][L]} = [L T^{-1}]$, a speed. ✓ Note the square root: to jump twice as high you need only $\\sqrt{2} \\approx 1.41$ times the launch speed. With the designer numbers $g = 25\\,\\text{m/s}^2$, $h = 2.0\\,\\text{m}$ this gives $10\\,\\text{m/s}$, as before.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'error',
      prompt: 'A truck moving at $20.0\\,\\text{m/s}$ in the $+x$ direction brakes at $5.00\\,\\text{m/s}^2$. A student finds its braking distance. Tap the first wrong line.',
      lines: [
        'Take $+x$ along the motion, so $v_0 = +20.0\\,\\text{m/s}$ and $v = 0$.',
        'The acceleration is $a = +5.00\\,\\text{m/s}^2$.',
        '$v^2 = v_0^2 + 2a\\,\\Delta x \\implies \\Delta x = \\dfrac{v^2 - v_0^2}{2a}$',
        '$\\Delta x = \\dfrac{0 - 400}{2(5.00)} = -40.0\\,\\text{m}$',
      ],
      errorLines: [2],
      explanation: 'Line 2 has the wrong sign. The truck is slowing down while moving in $+x$, so its acceleration points in $-x$: $a = -5.00\\,\\text{m/s}^2$. Then $\\Delta x = \\frac{0 - 400}{2(-5.00)} = +40.0\\,\\text{m}$. The negative answer in line 4 should have been a red flag: a truck moving forward cannot end up behind its starting point while braking. Signs come from the coordinate system, not from the words "speeding up" or "slowing down".',
    },
  ],
  takeaways: [
    'Integrating a constant $a$ gives $v = v_0 + at$ and $x = x_0 + v_0t + \\tfrac12at^2$; the $\\tfrac12$ is the triangle under the $v$–$t$ line.',
    'Eliminating $t$ gives $v^2 = v_0^2 + 2a\\,\\Delta x$; pick the equation that leaves out the quantity you neither know nor want.',
    'Strategy: sketch, coordinates, check that $a$ is constant, solve symbolically, then numbers, then check units, signs and size.',
    'Stopping distance $= v_0t_r + v_0^2/(2|a|)$: the braking part quadruples when the speed doubles.',
    'For two objects, use one coordinate system and one clock; they meet when their positions (not velocities) are equal.',
    'Game jumps: $g = 2h/t_h^2$ and $v_0 = 2h/t_h$ turn a designer\'s height and timing into physics; per-frame kinematic updates are exact for constant $a$.',
  ],
  reading: [
    {
      title: 'OpenStax University Physics Volume 1, Section 3.4: Motion with Constant Acceleration',
      url: 'https://openstax.org/details/books/university-physics-volume-1',
      source: 'openstax',
      note: 'Derivations of the kinematic equations and many worked examples, including two-body pursuit problems.',
    },
    {
      title: 'Khan Academy: One-dimensional motion',
      url: 'https://www.khanacademy.org/science/physics',
      source: 'khan',
      note: 'The one-dimensional motion unit has videos on deriving and choosing the kinematic formulas.',
    },
    {
      title: 'Wikipedia: Braking distance',
      url: 'https://en.wikipedia.org/wiki/Braking_distance',
      source: 'wikipedia',
      note: 'Real-world reaction times, friction coefficients and how stopping distance tables are built.',
    },
  ],
};
