import type { Lesson } from '../../types';

const DISP_SVG = '<svg viewBox="0 0 380 225" xmlns="http://www.w3.org/2000/svg"><line x1="40" y1="200" x2="342" y2="200" class="s-gray" stroke-width="1.3"/><path d="M350 200 L342 204 L342 196 Z" class="f-gray"/><line x1="40" y1="200" x2="40" y2="28" class="s-gray" stroke-width="1.3"/><path d="M40 20 L44 28 L36 28 Z" class="f-gray"/><text x="352" y="216" font-size="13" text-anchor="end" font-style="italic">x</text><text x="30" y="28" font-size="13" text-anchor="middle" font-style="italic">y</text><text x="30" y="214" font-size="13" text-anchor="middle">O</text><path d="M70 165 C 100 110, 150 95, 190 120 S 270 80, 320 55" fill="none" class="s-teal" stroke-width="2" stroke-dasharray="6 4"/><line x1="40" y1="200" x2="107.7" y2="124.9" class="s-blue" stroke-width="2.2"/><path d="M113.7 118.2 L111 127.9 L104.3 121.9 Z" class="f-blue"/><line x1="40" y1="200" x2="283.1" y2="77.8" class="s-blue" stroke-width="2.2"/><path d="M291.1 73.8 L285.1 81.9 L281 73.8 Z" class="f-blue"/><line x1="113.7" y1="118.2" x2="282.4" y2="76" class="s-red" stroke-width="2.6"/><path d="M291.1 73.8 L283.5 80.4 L281.3 71.6 Z" class="f-red"/><circle cx="113.7" cy="118.2" r="4.5" fill="currentColor"/><circle cx="291.1" cy="73.8" r="4.5" fill="currentColor"/><text x="62" y="140" font-size="14" text-anchor="start" class="t-blue"><tspan font-style="italic">r</tspan><tspan font-size="10" dy="3" font-style="normal">1</tspan></text><line x1="62" y1="128.5" x2="69" y2="128.5" class="s-blue" stroke-width="1.1"/><path d="M70.7 128.5 L68.3 126.2 L68.3 130.8 Z" class="f-blue"/><text x="170" y="150" font-size="14" text-anchor="start" class="t-blue"><tspan font-style="italic">r</tspan><tspan font-size="10" dy="3" font-style="normal">2</tspan></text><line x1="170" y1="138.5" x2="177" y2="138.5" class="s-blue" stroke-width="1.1"/><path d="M178.7 138.5 L176.3 136.2 L176.3 140.8 Z" class="f-blue"/><text x="190" y="80" font-size="14" text-anchor="start" class="t-red"><tspan font-style="normal">Δ</tspan><tspan font-style="italic">r</tspan></text><line x1="198.7" y1="68.5" x2="205.7" y2="68.5" class="s-red" stroke-width="1.1"/><path d="M207.4 68.5 L205 66.2 L205 70.8 Z" class="f-red"/><text x="118" y="108" font-size="12" text-anchor="end">P₁ (t₁)</text><text x="298" y="64" font-size="12" text-anchor="start">P₂ (t₂)</text><text x="300" y="100" font-size="12" text-anchor="middle" class="t-teal">path</text></svg>';

// Drone path used in several graphs: r(t) = (2t, 3 + 2 sin t) m, so v = (2, 2 cos t), a = (0, -2 sin t).
const PATH = { x: '2t', y: '3 + 2sin(t)' };

export const lesson: Lesson = {
  id: 'phys-motion-2d',
  title: 'Displacement, Velocity and Acceleration Vectors',
  summary: 'Motion in a plane: the position vector, displacement, velocity as $d\\vec{r}/dt$ and acceleration as $d\\vec{v}/dt$, why the $x$ and $y$ motions are independent, and how acceleration splits into a part that changes speed and a part that turns.',
  minutes: 18,
  objectives: [
    'Describe motion in a plane with a position vector $\\vec{r}(t) = x(t)\\,\\hat{\\imath} + y(t)\\,\\hat{\\jmath}$ and compute displacement',
    'Find velocity and acceleration vectors by differentiating components, and explain why velocity is tangent to the path',
    'Recover $\\vec{v}(t)$ and $\\vec{r}(t)$ from $\\vec{a}(t)$ and initial conditions by integrating each component',
    'Use the independence of the $x$ and $y$ motions to split a 2D problem into two 1D problems that share the time $t$',
    'Split acceleration into a tangential part (changes speed) and a normal part (changes direction)',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Position and displacement in a plane',
      blocks: [
        {
          type: 'p',
          text: 'In one dimension a single number $x(t)$ told you where an object was. A drone, a thrown grenade or a player character moves in a plane (or in space), so you need a [[vector]]: the [[position-vector|position vector]] $\\vec{r}$ points from the origin you chose to the object.',
        },
        {
          type: 'math',
          tex: '\\vec{r}(t) = x(t)\\,\\hat{\\imath} + y(t)\\,\\hat{\\jmath}',
          caption: 'Two ordinary functions of time, one per axis. Calculus II calls this pair of functions [[parametric-equations|parametric equations]] for the path.',
        },
        {
          type: 'p',
          text: 'The [[displacement]] between two instants is the change in position, $\\Delta\\vec{r} = \\vec{r}_2 - \\vec{r}_1$: a single arrow from where the object was to where it is, no matter how winding the route in between.',
        },
        {
          type: 'figure',
          svg: DISP_SVG,
          alt: 'Axes with origin O. A dashed teal curved path passes through points P1 and P2. Blue arrows r1 and r2 go from O to P1 and P2. A red arrow labeled delta r goes straight from P1 to P2.',
          caption: 'The red displacement $\\Delta\\vec{r}$ closes the triangle: $\\vec{r}_1 + \\Delta\\vec{r} = \\vec{r}_2$. The dashed path can wander anywhere; $\\Delta\\vec{r}$ only cares about the endpoints.',
          maxWidth: 420,
        },
        {
          type: 'derivation',
          title: 'A drone repositions',
          steps: [
            { tex: '\\vec{r}_1 = (2.0\\,\\hat{\\imath} + 1.0\\,\\hat{\\jmath})\\,\\text{m}, \\quad \\vec{r}_2 = (8.0\\,\\hat{\\imath} + 9.0\\,\\hat{\\jmath})\\,\\text{m}', why: 'The drone\'s position at the start and the end, measured from the launch pad.' },
            { tex: '\\Delta\\vec{r} = \\vec{r}_2 - \\vec{r}_1 = (6.0\\,\\hat{\\imath} + 8.0\\,\\hat{\\jmath})\\,\\text{m}', why: 'Vectors subtract component by component.' },
            { tex: '|\\Delta\\vec{r}| = \\sqrt{6.0^2 + 8.0^2} = 10.0\\,\\text{m}', why: 'Magnitude by the Pythagorean theorem.' },
            { tex: '\\theta = \\arctan\\frac{8.0}{6.0} = 53.1^\\circ \\text{ above } +x', why: 'Direction from the components; both are positive, so the angle is in the first quadrant and no quadrant correction is needed.' },
          ],
          result: 'The drone ended up $10.0\\,\\text{m}$ away, $53.1^\\circ$ above the $+x$ axis, however far it actually flew.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why displacement is the "honest" vector',
          text: 'Move the origin and every position vector changes, but $\\Delta\\vec{r}$ does not: the shift added to $\\vec{r}_1$ and $\\vec{r}_2$ cancels in the subtraction. Physics should not depend on where you happened to put the origin, which is why velocity and acceleration are built from **changes** in position, never from position itself.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'mcq',
      prompt: 'A soldier runs one full lap of a $400\\,\\text{m}$ track and stops exactly where they started. What is the magnitude of their displacement for the lap?',
      options: [
        { text: '$400\\,\\text{m}$', why: 'That is the **distance** traveled, the length of the path. Displacement only compares the start and end points.' },
        { text: '$0\\,\\text{m}$', correct: true, why: 'Start and end are the same point, so $\\Delta\\vec{r} = \\vec{r}_2 - \\vec{r}_1 = \\vec{0}$.' },
        { text: 'The diameter of the track', why: 'That would be the displacement after **half** a lap, when the runner is on the opposite side.' },
        { text: 'It cannot be found without knowing the shape of the track', why: 'Displacement depends only on the endpoints, so the shape of the track is irrelevant here.' },
      ],
      explanation: 'Distance is the length of the path; displacement is the vector from start to finish. After a closed loop the displacement is zero even though the runner covered $400\\,\\text{m}$. The same holds for the average velocity $\\Delta\\vec{r}/\\Delta t$, which is zero for the lap, while the average **speed** (distance over time) is not.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Velocity: the derivative of position',
      blocks: [
        {
          type: 'p',
          text: 'Average velocity over an interval is displacement divided by elapsed time. Shrink the interval and you get the instantaneous [[velocity]], exactly as in one dimension. The only new thing is that the limit is taken on a vector, which simply means on each component.',
        },
        {
          type: 'theorem',
          name: 'Velocity vector',
          tex: '\\vec{v}_{\\text{avg}} = \\frac{\\Delta\\vec{r}}{\\Delta t}, \\qquad \\vec{v}(t) = \\lim_{\\Delta t \\to 0}\\frac{\\Delta\\vec{r}}{\\Delta t} = \\frac{d\\vec{r}}{dt} = \\frac{dx}{dt}\\,\\hat{\\imath} + \\frac{dy}{dt}\\,\\hat{\\jmath}',
          text: 'Speed is the magnitude, $v = |\\vec{v}| = \\sqrt{v_x^2 + v_y^2}$. The unit vectors $\\hat{\\imath}$ and $\\hat{\\jmath}$ are constant, so they pass straight through the derivative.',
        },
        {
          type: 'graph',
          x: [0, 13],
          y: [0, 6.5],
          equal: true,
          parametric: [{ ...PATH, t: [0, 6.5], color: 'teal', label: 'path $\\vec{r}(t) = (2t,\\ 3 + 2\\sin t)$' }],
          segments: [
            { from: ['2s', '3 + 2sin(s)'], to: ['2(s + h)', '3 + 2sin(s + h)'], color: 'gray', dashed: true },
            { from: ['2s', '3 + 2sin(s)'], to: ['2s + 2', '3 + 2sin(s) + 2(sin(s + h) - sin(s))/h'], color: 'orange', arrow: true, label: 'v avg' },
            { from: ['2s', '3 + 2sin(s)'], to: ['2s + 2', '3 + 2sin(s) + 2cos(s)'], color: 'blue', arrow: true, label: 'v' },
          ],
          points: [
            { x: '2s', y: '3 + 2sin(s)', color: 'blue' },
            { x: '2(s + h)', y: '3 + 2sin(s + h)', color: 'gray', open: true },
          ],
          sliders: [
            { name: 's', min: 0, max: 3.5, step: 0.05, value: 1, label: 'time $t$ (s)' },
            { name: 'h', min: 0.05, max: 3, step: 0.05, value: 2, label: 'interval $\\Delta t$ (s)' },
          ],
          readouts: [
            { label: '$v_{\\text{avg},y} = \\Delta y/\\Delta t =$', expr: '2(sin(s + h) - sin(s))/h' },
            { label: '$v_y = dy/dt = 2\\cos t =$', expr: '2cos(s)' },
            { label: 'speed $|\\vec{v}| =$', expr: 'sqrt(4 + 4cos(s)^2)' },
          ],
          caption: 'A drone flies along the teal path (meters, seconds). The orange arrow is $\\Delta\\vec{r}/\\Delta t$, parallel to the dashed chord. Drag $\\Delta t$ toward $0$: the chord turns into the tangent and the orange arrow lands on the blue $\\vec{v} = d\\vec{r}/dt$. Arrows are drawn at $1\\,\\text{m}$ per $\\text{m/s}$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why velocity is always tangent to the path',
          text: '$\\Delta\\vec{r}$ is a chord of the path. As $\\Delta t \\to 0$ the chord\'s direction approaches the tangent direction, and dividing by the positive number $\\Delta t$ does not change direction. So $\\vec{v}$ points along the path, in the direction of motion, at every instant. That is why a car\'s headlights point along the road, and why a ball released from a sling flies off along the tangent.',
        },
        {
          type: 'derivation',
          title: 'Velocity from a position function',
          steps: [
            { tex: '\\vec{r}(t) = (t^3 - 3t)\\,\\hat{\\imath} + 2t^2\\,\\hat{\\jmath} \\quad (\\text{m}, t \\text{ in s})', why: 'Given. Each component is an ordinary function of $t$.' },
            { tex: '\\vec{v}(t) = (3t^2 - 3)\\,\\hat{\\imath} + 4t\\,\\hat{\\jmath}', why: 'Differentiate each component with the power rule.' },
            { tex: '\\vec{v}(2) = (9\\,\\hat{\\imath} + 8\\,\\hat{\\jmath})\\,\\text{m/s}', why: 'Substitute $t = 2\\,\\text{s}$.' },
            { tex: 'v = \\sqrt{9^2 + 8^2} = \\sqrt{145} \\approx 12.0\\,\\text{m/s}', why: 'Speed is the magnitude of the velocity vector, not the sum of the components.' },
          ],
          result: 'At $t = 2\\,\\text{s}$ the object moves at $12.0\\,\\text{m/s}$ in the direction of $(9, 8)$. We reuse this example later.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'numeric',
      prompt: 'A drone\'s position is $\\vec{r}(t) = 2t^3\\,\\hat{\\imath} + (5t^2 - 4t)\\,\\hat{\\jmath}$ (meters, $t$ in seconds). Find its **speed** at $t = 1.5\\,\\text{s}$, to 3 significant figures.',
      hint: 'Differentiate each component, substitute $t = 1.5$, then take the magnitude $\\sqrt{v_x^2 + v_y^2}$.',
      label: '$v =$',
      unit: 'm/s',
      answer: 'sqrt(13.5^2 + 11^2)',
      answerTex: '\\sqrt{13.5^2 + 11^2} \\approx 17.4',
      tolerance: 0.1,
      explanation: '$\\vec{v}(t) = 6t^2\\,\\hat{\\imath} + (10t - 4)\\,\\hat{\\jmath}$, so $\\vec{v}(1.5) = 13.5\\,\\hat{\\imath} + 11\\,\\hat{\\jmath}$ m/s and $v = \\sqrt{182.25 + 121} = \\sqrt{303.25} \\approx 17.4\\,\\text{m/s}$. Adding the components ($24.5$) is the classic slip: perpendicular components combine by Pythagoras.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Acceleration: the derivative of velocity',
      blocks: [
        {
          type: 'p',
          text: '[[acceleration|Acceleration]] is the rate of change of the velocity **vector**. Here is the big change from one dimension: a vector can change in two ways, by changing length (speeding up or slowing down) or by changing direction (turning). Either one is acceleration.',
        },
        {
          type: 'theorem',
          name: 'Acceleration vector',
          tex: '\\vec{a}(t) = \\frac{d\\vec{v}}{dt} = \\frac{d^2\\vec{r}}{dt^2} = \\frac{dv_x}{dt}\\,\\hat{\\imath} + \\frac{dv_y}{dt}\\,\\hat{\\jmath}',
          text: 'Unlike velocity, acceleration is generally **not** tangent to the path. It points toward the inside (concave side) of a curving path, and tilts forward or backward when the speed is changing.',
        },
        {
          type: 'graph',
          x: [0, 13],
          y: [0, 6.5],
          equal: true,
          parametric: [
            { ...PATH, t: [0, 6], color: 'gray', dashed: true },
            { ...PATH, t: [0, 's'], color: 'teal', label: 'path so far' },
          ],
          segments: [
            { from: ['2s', '3 + 2sin(s)'], to: ['2s + 2', '3 + 2sin(s) + 2cos(s)'], color: 'blue', arrow: true, label: 'v' },
            { from: ['2s', '3 + 2sin(s)'], to: ['2s', '3 + 2sin(s) - 2sin(s)'], color: 'red', arrow: true, label: 'a' },
          ],
          points: [{ x: '2s', y: '3 + 2sin(s)', color: 'blue' }],
          sliders: [{ name: 's', min: 0, max: 6, step: 0.02, value: 1, label: 'time $t$ (s)', play: true }],
          readouts: [
            { label: '$\\vec{v} = (2,\\ 2\\cos t)$, speed $=$', expr: 'sqrt(4 + 4cos(s)^2)' },
            { label: '$\\vec{a} = (0,\\ -2\\sin t)$, $a_y =$', expr: '-2sin(s)' },
          ],
          caption: 'Press ▶. For this drone $\\vec{a} = (0, -2\\sin t)$ is always vertical: the horizontal velocity never changes. The red arrow always points to the inside of the bend, and it vanishes at the inflection points, where the path is momentarily straight.',
        },
        {
          type: 'p',
          text: 'Going the other way is integration, one component at a time: $\\vec{v}(t) = \\vec{v}_0 + \\int_0^t \\vec{a}\\,dt\'$ and $\\vec{r}(t) = \\vec{r}_0 + \\int_0^t \\vec{v}\\,dt\'$. Each [[antiderivative]] brings a constant, and the initial velocity and position fix them.',
        },
        {
          type: 'derivation',
          title: 'A hovercraft from its thrust profile',
          steps: [
            { tex: '\\vec{a}(t) = 1.2t\\,\\hat{\\imath} - 0.8\\,\\hat{\\jmath}\\ \\text{m/s}^2, \\quad \\vec{v}_0 = (2\\,\\hat{\\imath} + 4\\,\\hat{\\jmath})\\,\\text{m/s}, \\quad \\vec{r}_0 = \\vec{0}', why: 'Given: a thruster ramps up along $x$ while a steady force pushes along $-y$.' },
            { tex: 'v_x = 2 + \\int_0^t 1.2t\'\\,dt\' = 2 + 0.6t^2, \\qquad v_y = 4 - 0.8t', why: 'Integrate each component of $\\vec{a}$ and add the matching component of $\\vec{v}_0$.' },
            { tex: 'x = \\int_0^t (2 + 0.6t\'^2)\\,dt\' = 2t + 0.2t^3, \\qquad y = 4t - 0.4t^2', why: 'Integrate the velocity components; $\\vec{r}_0 = \\vec{0}$ makes both constants zero.' },
            { tex: '\\vec{r}(5) = (35\\,\\hat{\\imath} + 10\\,\\hat{\\jmath})\\,\\text{m}, \\qquad \\vec{v}(5) = (17\\,\\hat{\\imath} + 0\\,\\hat{\\jmath})\\,\\text{m/s}', why: 'Evaluate at $t = 5\\,\\text{s}$: $x = 10 + 25$, $y = 20 - 10$, $v_x = 2 + 15$, $v_y = 4 - 4$.' },
          ],
          result: 'At $t = 5\\,\\text{s}$ the hovercraft is at $(35, 10)$ m moving purely along $+x$ at $17\\,\\text{m/s}$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'expr',
      prompt: 'A particle moves with $\\vec{r}(t) = (2t^3 - 5t)\\,\\hat{\\imath} + 3\\cos(2t)\\,\\hat{\\jmath}$ (meters, seconds). Find the $y$-component of its acceleration, $a_y(t)$.',
      hint: 'Differentiate $y(t) = 3\\cos(2t)$ twice, using the chain rule each time.',
      label: '$a_y(t) =$',
      answer: '-12cos(2t)',
      answerTex: 'a_y(t) = -12\\cos(2t)',
      variables: ['t'],
      explanation: '$v_y = \\frac{d}{dt}[3\\cos(2t)] = -6\\sin(2t)$, and $a_y = \\frac{d}{dt}[-6\\sin(2t)] = -12\\cos(2t)$ in $\\text{m/s}^2$. Each derivative brings out a factor $2$ from the chain rule. The $x$-component is irrelevant: components are differentiated separately.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'The components move independently',
      blocks: [
        {
          type: 'p',
          text: 'The vector equation $\\vec{a} = d\\vec{v}/dt$ is really two scalar equations, $a_x = dv_x/dt$ and $a_y = dv_y/dt$, and nothing connects them except the shared clock $t$. So if you know how $a_x$ and $a_y$ depend on time, the horizontal and vertical motions can be solved separately, as two one-dimensional problems.',
        },
        {
          type: 'theorem',
          name: 'Constant acceleration in 2D',
          tex: '\\vec{v}(t) = \\vec{v}_0 + \\vec{a}\\,t, \\qquad \\vec{r}(t) = \\vec{r}_0 + \\vec{v}_0\\,t + \\tfrac12\\vec{a}\\,t^2',
          text: 'These are the 1D constant-acceleration equations written once for $x$ and once for $y$, with the same $t$ in both.',
        },
        {
          type: 'graph',
          x: [-2, 22],
          y: [0, 22],
          equal: true,
          parametric: [{ x: 'u*t', y: '20 - 4.9t^2', t: [0, 'sqrt(40/9.8)'], color: 'gray', dashed: true }],
          segments: [
            { from: [0, '20 - 4.9min(s, sqrt(40/9.8))^2'], to: ['u*min(s, sqrt(40/9.8))', '20 - 4.9min(s, sqrt(40/9.8))^2'], color: 'gray', dashed: true },
            { from: [0, '20 - 4.9min(s, sqrt(40/9.8))^2'], to: [0, '20 - 4.9min(s, sqrt(40/9.8))^2 - 0.3*9.8min(s, sqrt(40/9.8)) - 0.001'], color: 'red', arrow: true },
            { from: ['u*min(s, sqrt(40/9.8))', '20 - 4.9min(s, sqrt(40/9.8))^2'], to: ['u*min(s, sqrt(40/9.8)) + 0.3u', '20 - 4.9min(s, sqrt(40/9.8))^2 - 0.3*9.8min(s, sqrt(40/9.8)) - 0.001'], color: 'blue', arrow: true },
          ],
          points: [
            { x: 0, y: '20 - 4.9min(s, sqrt(40/9.8))^2', color: 'red', label: 'dropped' },
            { x: 'u*min(s, sqrt(40/9.8))', y: '20 - 4.9min(s, sqrt(40/9.8))^2', color: 'blue', label: 'launched' },
          ],
          sliders: [
            { name: 's', min: 0, max: 2.1, step: 0.01, value: 0, label: 'time $t$ (s)', play: true, speed: 0.7 },
            { name: 'u', min: 0, max: 10, step: 0.5, value: 8, label: 'horizontal launch speed $v_{0x}$ (m/s)' },
          ],
          readouts: [
            { label: 'height of both balls (m):', expr: '20 - 4.9min(s, sqrt(40/9.8))^2' },
            { label: '$v_y$ of both balls (m/s):', expr: '-9.8min(s, sqrt(40/9.8))' },
            { label: 'landing time $\\sqrt{2h/g}$ (s):', expr: 'sqrt(40/9.8)' },
          ],
          caption: 'Two balls leave a $20\\,\\text{m}$ tower at the same instant: red is dropped, blue is launched horizontally ($g = 9.80\\,\\text{m/s}^2$, no air resistance). Press ▶ and change $v_{0x}$: the dashed line joining them stays horizontal, and both land at $t = 2.02\\,\\text{s}$. Velocity arrows are drawn at $0.3\\,\\text{m}$ per $\\text{m/s}$.',
        },
        {
          type: 'p',
          text: 'The horizontal launch gives the blue ball a constant $v_x$, which affects only where it lands. Gravity acts only on $v_y$, and both balls start with $v_y = 0$, so both have $y(t) = 20 - 4.9t^2$ and land together. This is the most useful idea in the whole unit: projectile motion in the next lesson is just "constant velocity along $x$" plus "free fall along $y$".',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Fired versus dropped',
          text: 'A bullet fired horizontally and a bullet dropped from the same height at the same moment hit level ground together, in the vacuum model. Air drag slows the fired bullet\'s horizontal motion and also adds a small vertical drag force, so real rounds differ slightly, and over long ranges the curvature of the Earth matters too. The independence of components is still how ballistic software organizes the calculation.',
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'truefalse',
      prompt: 'Ignoring air resistance, a ball rolled off a table at $5\\,\\text{m/s}$ stays in the air longer than a ball rolled off the same table at $1\\,\\text{m/s}$, because it travels farther.',
      answer: false,
      explanation: 'The time in the air is set by the vertical motion alone: both balls start with $v_y = 0$ from the same height and have the same $a_y = -g$, so both fall for $t = \\sqrt{2h/g}$. The faster ball lands farther away, $x = v_{0x}t$, but at the same moment. Horizontal speed changes **where** it lands, not **when**.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'concept',
      title: 'Tangential and normal acceleration',
      blocks: [
        {
          type: 'p',
          text: 'Driving a car, you feel the two jobs of acceleration separately: the pedals change your speed, the steering wheel changes your direction. Mathematically, split $\\vec{a}$ into a part along $\\vec{v}$ and a part perpendicular to it, using the unit vector $\\hat{T} = \\vec{v}/v$ along the motion.',
        },
        {
          type: 'theorem',
          name: 'Tangential and normal components',
          tex: '\\vec{a} = a_t\\,\\hat{T} + a_n\\,\\hat{N}, \\qquad a_t = \\frac{dv}{dt} = \\frac{\\vec{a}\\cdot\\vec{v}}{v}, \\qquad a_n = \\sqrt{a^2 - a_t^2} = \\frac{v^2}{\\rho}',
          text: '$a_t$ (the [[phys-tangential-acceleration|tangential acceleration]]) changes the speed. $a_n$, the normal component, points toward the inside of the bend and changes only the direction. $\\rho$ is the [[phys-radius-of-curvature|radius of curvature]], the radius of the circle that best fits the path at that point.',
        },
        {
          type: 'derivation',
          title: 'Why $a_t = \\vec{a}\\cdot\\vec{v}/v$ is the rate of change of speed',
          steps: [
            { tex: 'v^2 = \\vec{v}\\cdot\\vec{v}', why: 'The [[dot-product|dot product]] of a vector with itself is its length squared.' },
            { tex: '2v\\,\\frac{dv}{dt} = 2\\,\\vec{v}\\cdot\\frac{d\\vec{v}}{dt} = 2\\,\\vec{v}\\cdot\\vec{a}', why: 'Differentiate both sides: the chain rule on the left, the product rule for dot products on the right.' },
            { tex: '\\frac{dv}{dt} = \\frac{\\vec{a}\\cdot\\vec{v}}{v} = \\vec{a}\\cdot\\hat{T}', why: 'Divide by $2v$ (valid while $v \\ne 0$). This is the [[vector-projection|scalar projection]] of $\\vec{a}$ onto the direction of motion.' },
          ],
          result: 'Only the part of $\\vec{a}$ along $\\vec{v}$ changes the speed. If $\\vec{a} \\perp \\vec{v}$, the speed is momentarily constant even though the velocity is changing.',
        },
        {
          type: 'graph',
          x: [0, 13],
          y: [0, 6.5],
          equal: true,
          parametric: [{ ...PATH, t: [0, 6], color: 'teal' }],
          segments: [
            { from: ['2s', '3 + 2sin(s)'], to: ['2s', '3 + 2sin(s) - 4sin(s)'], color: 'red', arrow: true, label: 'a' },
            { from: ['2s', '3 + 2sin(s)'], to: ['2s - 4sin(s)cos(s)/(1 + cos(s)^2)', '3 + 2sin(s) - 4sin(s)cos(s)^2/(1 + cos(s)^2)'], color: 'green', arrow: true, label: 'aₜ' },
            { from: ['2s', '3 + 2sin(s)'], to: ['2s + 4sin(s)cos(s)/(1 + cos(s)^2)', '3 + 2sin(s) - 4sin(s)/(1 + cos(s)^2)'], color: 'purple', arrow: true, label: 'aₙ' },
          ],
          points: [{ x: '2s', y: '3 + 2sin(s)', color: 'blue' }],
          sliders: [{ name: 's', min: 0, max: 6, step: 0.02, value: 1, label: 'time $t$ (s)', play: true }],
          readouts: [
            { label: 'speed $v$ (m/s):', expr: 'sqrt(4 + 4cos(s)^2)' },
            { label: '$a_t = dv/dt$ (m/s²):', expr: '-2sin(s)cos(s)/sqrt(1 + cos(s)^2)' },
            { label: '$a_n$ (m/s²):', expr: '2abs(sin(s))/sqrt(1 + cos(s)^2)' },
          ],
          caption: 'The drone again, with $\\vec{a}$ (red) split into $a_t\\hat{T}$ (green, along the path) and $a_n\\hat{N}$ (purple, toward the inside of the bend); arrows at $2\\times$ scale. Climbing a hump the green arrow points backward and $a_t < 0$: the drone slows. At the crest ($t = \\pi/2$) $\\vec{a}$ is purely normal, and the speed has its minimum.',
        },
        {
          type: 'derivation',
          title: 'Splitting the acceleration at $t = 2\\,\\text{s}$',
          steps: [
            { tex: '\\vec{v} = (9, 8)\\,\\text{m/s}, \\quad \\vec{a} = (12, 4)\\,\\text{m/s}^2, \\quad v = \\sqrt{145}', why: 'From $\\vec{r} = (t^3 - 3t,\\ 2t^2)$: $\\vec{a} = (6t, 4)$ at $t = 2$.' },
            { tex: 'a_t = \\frac{9(12) + 8(4)}{\\sqrt{145}} = \\frac{140}{12.04} = 11.6\\,\\text{m/s}^2', why: 'Dot product divided by speed.' },
            { tex: 'a_n = \\sqrt{|\\vec{a}|^2 - a_t^2} = \\sqrt{160 - 135.2} = 4.98\\,\\text{m/s}^2', why: '$|\\vec{a}|^2 = 144 + 16 = 160$, and the two components are perpendicular.' },
            { tex: '\\rho = \\frac{v^2}{a_n} = \\frac{145}{4.98} = 29.1\\,\\text{m}', why: 'The local radius of curvature. The next lessons explain $a_n = v^2/\\rho$ for circles.' },
          ],
          result: 'Most of this acceleration speeds the object up; a smaller part bends its path along a curve of radius about $29\\,\\text{m}$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'mcq',
      prompt: 'A car drives around a curve to the **left** while braking. Which direction can its acceleration point?',
      options: [
        { text: 'Straight backward, opposite the velocity', why: 'That accounts for the slowing down but not the turning. A path that bends needs a normal component toward the inside of the curve.' },
        { text: 'Straight to the left, toward the inside of the curve', why: 'That is pure turning at constant speed. Braking adds a backward tangential component.' },
        { text: 'Backward and to the left', correct: true, why: 'The tangential part points backward (speed decreasing) and the normal part points left (path bending left). The total is their vector sum.' },
        { text: 'Forward and to the right, the way passengers are thrown', why: 'Passengers lurch forward and outward because their bodies tend to keep their old velocity. The car\'s acceleration points the opposite way.' },
      ],
      explanation: 'Split $\\vec{a}$ into $a_t\\hat{T} + a_n\\hat{N}$. Braking means $a_t < 0$: a component opposite the velocity. Turning left means $a_n > 0$ toward the inside, to the left. So $\\vec{a}$ points backward and to the left. The feeling of being pushed forward and right is your body\'s inertia, as the next unit explains.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'Vectors in code: stepping a particle',
      blocks: [
        {
          type: 'p',
          text: 'A game engine never has a formula for $\\vec{r}(t)$. It has the current position and velocity, a rule for the acceleration, and a small timestep $\\Delta t$ (often $1/60\\,\\text{s}$). Each frame it applies the definitions in reverse: velocity changes by $\\vec{a}\\,\\Delta t$, then position changes by $\\vec{v}\\,\\Delta t$. Because vectors add component by component, one `Vec2` (or `Vec3`) line does both axes at once.',
        },
        {
          type: 'code',
          title: 'hovercraft.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdio>
#include <initializer_list>

struct Vec2 {
    double x, y;
};
Vec2 operator+(Vec2 a, Vec2 b) { return {a.x + b.x, a.y + b.y}; }
Vec2 operator*(double s, Vec2 v) { return {s * v.x, s * v.y}; }

// The hovercraft's thrusters give a(t) = (1.2 t, -0.8) m/s^2.
Vec2 accel(double t) { return {1.2 * t, -0.8}; }

int main() {
    for (double dt : {0.1, 0.01, 0.001}) {
        Vec2 r{0.0, 0.0}, v{2.0, 4.0};            // r0 and v0
        int steps = static_cast<int>(std::lround(5.0 / dt));
        for (int i = 0; i < steps; ++i) {
            double t = i * dt;
            v = v + dt * accel(t);                  // velocity first...
            r = r + dt * v;                         // ...then position, using the new velocity
        }
        std::printf("dt = %.3f s: r(5) = (%.3f, %.3f) m, speed %.3f m/s\\n",
                    dt, r.x, r.y, std::hypot(v.x, v.y));
    }
    std::printf("exact:        r(5) = (35.000, 10.000) m, speed 17.000 m/s\\n");
}`,
          output: `dt = 0.100 s: r(5) = (34.990, 9.800) m, speed 16.700 m/s
dt = 0.010 s: r(5) = (35.000, 9.980) m, speed 16.970 m/s
dt = 0.001 s: r(5) = (35.000, 9.998) m, speed 16.997 m/s
exact:        r(5) = (35.000, 10.000) m, speed 17.000 m/s`,
          annotations: [
            { lines: '5-9', text: 'A minimal 2D vector: addition and scaling act on each component separately, which is exactly the independence of the $x$ and $y$ motions.' },
            { lines: '20-21', text: 'Semi-implicit Euler: update $\\vec{v}$ with $\\vec{a}\\,\\Delta t$, then $\\vec{r}$ with the **new** $\\vec{v}$. This ordering is what most game engines use; the integration lesson in the game-physics unit explains why it is so stable.' },
            { lines: 24, text: 'Speed is `std::hypot(v.x, v.y)`, the magnitude $\\sqrt{v_x^2 + v_y^2}$.' },
          ],
        },
        {
          type: 'p',
          text: 'The numerical answer converges to the exact $\\vec{r}(5) = (35, 10)\\,\\text{m}$ from the worked example, and the error shrinks roughly in proportion to $\\Delta t$. The loop is the [[semi-implicit-euler|semi-implicit Euler]] method; the physics in it is nothing more than $\\vec{v} = \\int \\vec{a}\\,dt$ and $\\vec{r} = \\int \\vec{v}\\,dt$, done in small slices.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Speed versus velocity in gameplay code',
          text: 'Movement code constantly separates the two: `speed = length(velocity)` and `dir = velocity / speed` (guarding against $v = 0$). Capping a character\'s speed means rescaling the vector, `velocity = dir * maxSpeed`, not clamping $v_x$ and $v_y$ separately. Clamping each component lets a player move $\\sqrt{2}$ times faster diagonally, a bug that shipped in many classic games.',
        },
      ],
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'error',
      prompt: 'A student finds the speed at $t = 1\\,\\text{s}$ of a particle with $\\vec{r}(t) = (4t - t^2)\\,\\hat{\\imath} + 3t^2\\,\\hat{\\jmath}$ (meters, seconds). Tap the first wrong line.',
      lines: [
        '$\\vec{v}(t) = (4 - 2t)\\,\\hat{\\imath} + 6t\\,\\hat{\\jmath}$',
        '$\\vec{v}(1) = 2\\,\\hat{\\imath} + 6\\,\\hat{\\jmath}$ m/s',
        '$v = v_x + v_y = 2 + 6 = 8$ m/s',
        'So the particle moves at $8$ m/s at $t = 1$ s.',
      ],
      errorLines: [3],
      explanation: 'Line 3 adds the components as if they pointed the same way. They are perpendicular, so the speed is the magnitude: $v = \\sqrt{2^2 + 6^2} = \\sqrt{40} \\approx 6.32\\,\\text{m/s}$. Lines 1 and 2 are correct: each component was differentiated separately and evaluated at $t = 1$.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'numeric',
      prompt: 'At one instant a racing drone has velocity $\\vec{v} = (3.0\\,\\hat{\\imath} + 4.0\\,\\hat{\\jmath})\\,\\text{m/s}$ and acceleration $\\vec{a} = (2.0\\,\\hat{\\imath} - 1.0\\,\\hat{\\jmath})\\,\\text{m/s}^2$. At what rate is its **speed** changing? Give $a_t = dv/dt$ to 3 significant figures.',
      hint: '$a_t = \\vec{a}\\cdot\\vec{v}/v$. Find the dot product and the speed first.',
      label: '$a_t =$',
      unit: 'm/s²',
      answer: '(3*2 + 4*(-1))/5',
      answerTex: '\\frac{6 - 4}{5} = 0.400',
      tolerance: 0.004,
      explanation: '$\\vec{a}\\cdot\\vec{v} = (2.0)(3.0) + (-1.0)(4.0) = 2.0\\,\\text{m}^2/\\text{s}^3$ and $v = 5.0\\,\\text{m/s}$, so $a_t = 2.0/5.0 = 0.400\\,\\text{m/s}^2$. The magnitude of the acceleration is $\\sqrt{5} \\approx 2.24\\,\\text{m/s}^2$, but most of it is normal ($a_n = \\sqrt{5 - 0.16} = 2.20\\,\\text{m/s}^2$): the drone is mostly turning and only slowly speeding up.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'order',
      prompt: 'Put the steps in order to find a particle\'s position at time $t_1$, given its acceleration $\\vec{a}(t)$, its initial velocity and its initial position.',
      lines: [
        'Write $\\vec{a}(t)$ in components $a_x(t)$ and $a_y(t)$',
        'Integrate each component and add $\\vec{v}_0$ to get $\\vec{v}(t)$',
        'Integrate $\\vec{v}(t)$ component by component and add $\\vec{r}_0$ to get $\\vec{r}(t)$',
        'Substitute $t = t_1$ into $x(t)$ and $y(t)$',
      ],
      distractors: ['Multiply $\\vec{a}(t_1)$ by $\\tfrac12 t_1^2$ to get the position'],
      explanation: 'Each integration undoes one derivative and introduces a constant fixed by an initial condition: $\\vec{v}_0$ after the first, $\\vec{r}_0$ after the second. The distractor uses $\\tfrac12 a t^2$, which is valid only for **constant** acceleration; with a time-varying $\\vec{a}(t)$ you must integrate.',
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'fill',
      prompt: 'Complete the summary.',
      template: 'Velocity is ___ to the path. The component of acceleration along the velocity changes the ___, and the component perpendicular to it changes the ___.',
      blanks: [{ answers: ['tangent'] }, { answers: ['speed'] }, { answers: ['direction'] }],
      wordBank: ['tangent', 'perpendicular', 'speed', 'direction', 'mass', 'position'],
      explanation: '$\\vec{v} = d\\vec{r}/dt$ is the limit of chord directions, so it is tangent to the path. Writing $\\vec{a} = a_t\\hat{T} + a_n\\hat{N}$, the tangential part $a_t = dv/dt$ changes the speed and the normal part $a_n = v^2/\\rho$ bends the path.',
    },
  ],
  takeaways: [
    'Position $\\vec{r}(t) = x(t)\\,\\hat{\\imath} + y(t)\\,\\hat{\\jmath}$; displacement $\\Delta\\vec{r} = \\vec{r}_2 - \\vec{r}_1$ depends only on the endpoints and not on the choice of origin.',
    '$\\vec{v} = d\\vec{r}/dt$ is tangent to the path; speed is $|\\vec{v}| = \\sqrt{v_x^2 + v_y^2}$, never $v_x + v_y$.',
    '$\\vec{a} = d\\vec{v}/dt$; going backward, integrate each component and use $\\vec{v}_0$ and $\\vec{r}_0$ to fix the constants.',
    'The $x$ and $y$ motions are independent and share only the time $t$: a horizontally launched ball and a dropped ball land together.',
    'Acceleration splits into $a_t = \\vec{a}\\cdot\\vec{v}/v$ (changes speed) and $a_n = v^2/\\rho$ toward the inside of the bend (changes direction).',
  ],
  reading: [
    {
      title: 'OpenStax — University Physics Volume 1, Chapter 4',
      url: 'https://openstax.org/details/books/university-physics-volume-1',
      source: 'openstax',
      note: 'Sections 4.1 and 4.2 cover displacement, velocity and acceleration vectors with many worked examples.',
    },
    {
      title: 'Khan Academy — Physics',
      url: 'https://www.khanacademy.org/science/physics',
      source: 'khan',
      note: 'The two-dimensional motion unit has short videos on vector components of motion.',
    },
    {
      title: 'Wikipedia — Tangential and normal components',
      url: 'https://en.wikipedia.org/wiki/Tangential_and_normal_components',
      source: 'wikipedia',
      note: 'The general decomposition of a vector along a curve, including the acceleration formulas used here.',
    },
    {
      title: 'MIT OCW 8.01SC — Classical Mechanics',
      url: 'https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/',
      source: 'other',
      note: 'The two-dimensional kinematics lectures and problem sets go a step beyond a typical textbook.',
    },
  ],
};
