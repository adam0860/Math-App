import type { Lesson } from '../../types';

// Motion diagrams: speeding up (growing gaps) and slowing down (shrinking gaps).
const FIG_MOTION = `<svg viewBox="0 0 520 260" xmlns="http://www.w3.org/2000/svg">
<text x="10.0" y="18.0" font-size="12" text-anchor="start" class="t-gray">Dots: the object at equal time intervals. Blue arrows: velocity.</text>
<text x="10.0" y="40.0" font-size="13" text-anchor="start" font-weight="700">Speeding up: the gaps grow, a points along v</text>
<circle cx="40.0" cy="76" r="5" fill="currentColor"/>
<text x="40.0" y="96.0" font-size="11" text-anchor="middle" class="t-gray">0</text>
<circle cx="68.0" cy="76" r="5" fill="currentColor"/>
<text x="68.0" y="96.0" font-size="11" text-anchor="middle" class="t-gray">1</text>
<circle cx="112.0" cy="76" r="5" fill="currentColor"/>
<text x="112.0" y="96.0" font-size="11" text-anchor="middle" class="t-gray">2</text>
<circle cx="172.0" cy="76" r="5" fill="currentColor"/>
<text x="172.0" y="96.0" font-size="11" text-anchor="middle" class="t-gray">3</text>
<circle cx="248.0" cy="76" r="5" fill="currentColor"/>
<text x="248.0" y="96.0" font-size="11" text-anchor="middle" class="t-gray">4</text>
<circle cx="340.0" cy="76" r="5" fill="currentColor"/>
<text x="340.0" y="96.0" font-size="11" text-anchor="middle" class="t-gray">5</text>
<circle cx="448.0" cy="76" r="5" fill="currentColor"/>
<text x="448.0" y="96.0" font-size="11" text-anchor="middle" class="t-gray">6</text>
<line x1="43.0" y1="62.0" x2="57.0" y2="62.0" class="s-blue" stroke-width="2"/><path d="M65.0,62.0 L57.0,65.5 L57.0,58.5 Z" class="f-blue"/>
<line x1="71.0" y1="62.0" x2="101.0" y2="62.0" class="s-blue" stroke-width="2"/><path d="M109.0,62.0 L101.0,65.5 L101.0,58.5 Z" class="f-blue"/>
<line x1="115.0" y1="62.0" x2="161.0" y2="62.0" class="s-blue" stroke-width="2"/><path d="M169.0,62.0 L161.0,65.5 L161.0,58.5 Z" class="f-blue"/>
<line x1="175.0" y1="62.0" x2="237.0" y2="62.0" class="s-blue" stroke-width="2"/><path d="M245.0,62.0 L237.0,65.5 L237.0,58.5 Z" class="f-blue"/>
<line x1="251.0" y1="62.0" x2="329.0" y2="62.0" class="s-blue" stroke-width="2"/><path d="M337.0,62.0 L329.0,65.5 L329.0,58.5 Z" class="f-blue"/>
<line x1="343.0" y1="62.0" x2="437.0" y2="62.0" class="s-blue" stroke-width="2"/><path d="M445.0,62.0 L437.0,65.5 L437.0,58.5 Z" class="f-blue"/>
<line x1="40.0" y1="112.0" x2="82.0" y2="112.0" class="s-red" stroke-width="2"/><path d="M90.0,112.0 L82.0,115.5 L82.0,108.5 Z" class="f-red"/>
<text x="98.0" y="117.0" font-size="14" text-anchor="start" class="t-red" font-weight="700" font-style="italic">a</text>
<text x="10.0" y="146.0" font-size="13" text-anchor="start" font-weight="700">Slowing down: the gaps shrink, a points against v</text>
<circle cx="40.0" cy="182" r="5" fill="currentColor"/>
<text x="40.0" y="202.0" font-size="11" text-anchor="middle" class="t-gray">0</text>
<circle cx="132.0" cy="182" r="5" fill="currentColor"/>
<text x="132.0" y="202.0" font-size="11" text-anchor="middle" class="t-gray">1</text>
<circle cx="208.0" cy="182" r="5" fill="currentColor"/>
<text x="208.0" y="202.0" font-size="11" text-anchor="middle" class="t-gray">2</text>
<circle cx="268.0" cy="182" r="5" fill="currentColor"/>
<text x="268.0" y="202.0" font-size="11" text-anchor="middle" class="t-gray">3</text>
<circle cx="312.0" cy="182" r="5" fill="currentColor"/>
<text x="312.0" y="202.0" font-size="11" text-anchor="middle" class="t-gray">4</text>
<circle cx="340.0" cy="182" r="5" fill="currentColor"/>
<text x="340.0" y="202.0" font-size="11" text-anchor="middle" class="t-gray">5</text>
<line x1="43.0" y1="168.0" x2="121.0" y2="168.0" class="s-blue" stroke-width="2"/><path d="M129.0,168.0 L121.0,171.5 L121.0,164.5 Z" class="f-blue"/>
<line x1="135.0" y1="168.0" x2="197.0" y2="168.0" class="s-blue" stroke-width="2"/><path d="M205.0,168.0 L197.0,171.5 L197.0,164.5 Z" class="f-blue"/>
<line x1="211.0" y1="168.0" x2="257.0" y2="168.0" class="s-blue" stroke-width="2"/><path d="M265.0,168.0 L257.0,171.5 L257.0,164.5 Z" class="f-blue"/>
<line x1="271.0" y1="168.0" x2="301.0" y2="168.0" class="s-blue" stroke-width="2"/><path d="M309.0,168.0 L301.0,171.5 L301.0,164.5 Z" class="f-blue"/>
<line x1="315.0" y1="168.0" x2="329.0" y2="168.0" class="s-blue" stroke-width="2"/><path d="M337.0,168.0 L329.0,171.5 L329.0,164.5 Z" class="f-blue"/>
<line x1="150.0" y1="218.0" x2="108.0" y2="218.0" class="s-red" stroke-width="2"/><path d="M100.0,218.0 L108.0,214.5 L108.0,221.5 Z" class="f-red"/>
<text x="92.0" y="223.0" font-size="14" text-anchor="end" class="t-red" font-weight="700" font-style="italic">a</text>
<line x1="30.0" y1="240.0" x2="496.0" y2="240.0" stroke="currentColor" stroke-width="1.2"/><path d="M505.0,240.0 L496.0,244.0 L496.0,236.0 Z" fill="currentColor"/>
<line x1="40" y1="234" x2="40" y2="246" stroke="currentColor"/>
<text x="48.0" y="256.0" font-size="11" text-anchor="start">x = 0</text>
<text x="505.0" y="256.0" font-size="12" text-anchor="end">+x</text>
</svg>`;

// The running example: x(t) = 2t^3 - 9t^2 + 12t + 1 (m, s). Helpers build calculator-syntax strings.
const X = (u: string) => `(2(${u})^3 - 9(${u})^2 + 12(${u}) + 1)`;
const V = (u: string) => `(6(${u})^2 - 18(${u}) + 12)`;
const A = (u: string) => `(12(${u}) - 18)`;

// A car: accelerates at 2 m/s^2 for 3 s, cruises at 6 m/s for 3 s, brakes at 3 m/s^2 for 2 s.
const CAR_X = (u: string) =>
  `(min(${u}, 3)^2 + 6min(max(${u} - 3, 0), 3) + 6min(max(${u} - 6, 0), 2) - 1.5min(max(${u} - 6, 0), 2)^2)`;
const CAR_V = (u: string) => `max(0, min(min(2(${u}), 6), 24 - 3(${u})))`;
const CAR_A = (u: string) => `(1 - sign(${u} - 3) - 0.75(1 + sign(${u} - 6))(1 - sign(${u} - 8)))`;

export const lesson: Lesson = {
  id: 'phys-position-velocity',
  title: 'Position, Velocity and Acceleration',
  summary: 'Describe one-dimensional motion precisely: position and displacement, velocity as the derivative of position, acceleration as the derivative of velocity, and how integrals run the chain backwards.',
  minutes: 20,
  objectives: [
    'Set up a coordinate axis and distinguish position, displacement and distance traveled',
    'Compute average velocity as a secant slope and instantaneous velocity as the derivative $v = dx/dt$',
    'Find acceleration $a = dv/dt$ and decide from the signs of $v$ and $a$ whether an object speeds up or slows down',
    'Recover velocity and position from acceleration by integrating with initial conditions',
    'Read slopes and areas off $x$–$t$, $v$–$t$ and $a$–$t$ graphs',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Where is it? Position and displacement',
      blocks: [
        {
          type: 'p',
          text: 'Kinematics describes motion without yet asking what causes it. We start with the simplest case: motion along a straight line. We also treat the moving thing, whether a car, a sprinter or a drone, as a single point. This is the [[phys-particle-model|particle model]]: size and shape are ignored, which is fine whenever they do not affect the motion we care about.',
        },
        {
          type: 'p',
          text: 'To describe where the particle is, choose a **coordinate system**: an origin, a positive direction and a unit. Then the position is a single signed number $x$, and as time passes it becomes a function $x(t)$. A negative $x$ is not "bad"; it just means the particle is on the negative side of the origin you chose.',
        },
        {
          type: 'figure',
          svg: FIG_MOTION,
          alt: 'Two motion diagrams along a horizontal x axis. Top row: dots at equal time intervals with gaps that grow from left to right, blue velocity arrows getting longer, and a red acceleration arrow pointing right. Bottom row: dots whose gaps shrink, velocity arrows getting shorter, and a red acceleration arrow pointing left.',
          caption: 'A [[phys-motion-diagram|motion diagram]] shows the particle at equal time intervals, like frames of a video. Growing gaps mean speeding up; shrinking gaps mean slowing down.',
          maxWidth: 520,
        },
        {
          type: 'definition',
          term: 'Displacement',
          text: 'The [[displacement]] over a time interval is the change in position, final minus initial: $\\Delta x = x_f - x_i$. It is signed: positive for a net move in the $+x$ direction, negative for a net move in the $-x$ direction. It does not care about the route in between.',
        },
        {
          type: 'p',
          text: 'Distance traveled is different: it adds up the length of every leg of the route, so it is never negative. Walk $5\\,\\text{m}$ in the $+x$ direction and then $2\\,\\text{m}$ back. Your displacement is $\\Delta x = +3\\,\\text{m}$, but you traveled $7\\,\\text{m}$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why physics prefers displacement',
          text: 'Displacement is what the laws of motion care about, because it is the integral of velocity (you will see this at the end of the lesson). Distance traveled throws away the sign, and with it the information about direction. A patrol that walks $10\\,\\text{km}$ out and $10\\,\\text{km}$ back has traveled $20\\,\\text{km}$, which matters for fatigue and fuel, but its displacement is zero, which is all that matters for where it ends up.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'concept',
      title: 'Average velocity: the slope of a secant',
      blocks: [
        {
          type: 'p',
          text: 'How fast, and in which direction, did the particle move over an interval? Divide its displacement by the elapsed time. This is the [[phys-average-velocity|average velocity]], and on a graph of $x$ against $t$ it is exactly the slope of the secant line between the two instants: the [[average-rate-of-change]] from calculus.',
        },
        {
          type: 'math',
          tex: 'v_{\\text{avg}} = \\frac{\\Delta x}{\\Delta t} = \\frac{x(t_2) - x(t_1)}{t_2 - t_1}',
          caption: 'Units: $\\text{m/s}$. The sign tells you the direction of the net motion.',
        },
        {
          type: 'p',
          text: 'Our running example for this lesson is a test drone on a straight track with position $x(t) = 2t^3 - 9t^2 + 12t + 1$ (meters, with $t$ in seconds). It flies out, backs up for a while, then flies out again.',
        },
        {
          type: 'graph',
          x: [-0.2, 3.4],
          y: [-1, 14],
          functions: [{ expr: X('x'), label: '$x(t) = 2t^3 - 9t^2 + 12t + 1$', color: 'blue', domain: [0, 3.3] }],
          tangents: [{ expr: X('x'), at: 'a', secantTo: 'a + h', color: 'purple' }],
          sliders: [
            { name: 'a', min: 0, max: 3, step: 0.05, value: 0, label: 'start time $t_1$ (s)' },
            { name: 'h', min: 0.05, max: 3, step: 0.05, value: 3, label: 'interval $\\Delta t$ (s)' },
          ],
          readouts: [
            { label: '$\\Delta x$ (m):', expr: `${X('a + h')} - ${X('a')}`, digits: 2 },
            { label: '$v_{\\text{avg}} = \\Delta x/\\Delta t$ (m/s):', expr: `(${X('a + h')} - ${X('a')})/h`, digits: 3 },
          ],
          caption: 'Horizontal axis: time $t$ (s). Vertical axis: position $x$ (m). Over $[0, 3]\\,\\text{s}$ the drone\'s average velocity is $\\frac{10 - 1}{3} = 3\\,\\text{m/s}$, even though it spent part of that time moving backwards. Shrink $\\Delta t$ and watch the secant settle onto a tangent.',
        },
        {
          type: 'p',
          text: '[[phys-average-speed|Average speed]] is distance traveled divided by elapsed time, and it can differ a lot from the size of the average velocity. Over $[0, 3]\\,\\text{s}$ the drone goes from $x = 1$ out to $6$, back to $5$, then out to $10\\,\\text{m}$. It travels $5 + 1 + 5 = 11\\,\\text{m}$, so its average speed is $11/3 = 3.67\\,\\text{m/s}$, while its average velocity is $3\\,\\text{m/s}$.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Average velocity is not the average of the velocities',
          text: 'If you drive $60\\,\\text{km}$ at $60\\,\\text{km/h}$ and then $60\\,\\text{km}$ at $30\\,\\text{km/h}$, your average velocity is not $45\\,\\text{km/h}$. The trip takes $1 + 2 = 3\\,\\text{h}$ for $120\\,\\text{km}$: $40\\,\\text{km/h}$. Always go back to the definition, total displacement over total time.',
        },
      ],
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'numeric',
      prompt: 'A reconnaissance drone on a straight road moves from $x = 120\\,\\text{m}$ to $x = -30\\,\\text{m}$ in $25.0\\,\\text{s}$. What is its average velocity? Include the sign, to 2 significant figures.',
      hint: 'Final position minus initial position, divided by the time.',
      answer: '(-30 - 120)/25',
      answerTex: '-6.0\\,\\text{m/s}',
      tolerance: 0.05,
      unit: 'm/s',
      label: '$v_{\\text{avg}} =$',
      explanation: '$\\Delta x = x_f - x_i = -30 - 120 = -150\\,\\text{m}$, so $v_{\\text{avg}} = \\frac{-150\\,\\text{m}}{25.0\\,\\text{s}} = -6.0\\,\\text{m/s}$. The minus sign carries real information: the drone\'s net motion was in the $-x$ direction. Answering $+6.0$ (or using $120 - 30 = 90\\,\\text{m}$) loses the direction or misreads where the drone ended up.',
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'concept',
      title: 'Instantaneous velocity is the derivative',
      blocks: [
        {
          type: 'p',
          text: 'A speedometer does not report an average over the trip; it reports how fast you are going *now*. Shrink the interval in the average velocity to zero and you get the [[velocity|instantaneous velocity]]. That limit is precisely the [[derivative]] of position, the [[instantaneous-rate-of-change]] you met in Calculus I.',
        },
        {
          type: 'theorem',
          name: 'Velocity',
          tex: 'v(t) = \\lim_{\\Delta t \\to 0} \\frac{x(t + \\Delta t) - x(t)}{\\Delta t} = \\frac{dx}{dt}',
          text: 'Geometrically, $v(t)$ is the slope of the tangent line to the $x$–$t$ graph. Its sign gives the direction of motion, and its magnitude $|v|$ is the **speed**.',
        },
        {
          type: 'graph',
          x: [-0.8, 3.3],
          y: [-1, 18.5],
          functions: [{ expr: X('x'), label: '$x(t)$', color: 'blue', domain: [0, 3.2] }],
          tangents: [{ expr: X('x'), at: 's', color: 'orange' }],
          segments: [
            { from: [-0.5, 0], to: [-0.5, 13.5], color: 'gray' },
            { from: [-0.5, X('s')], to: ['s', X('s')], color: 'gray', dashed: true },
            { from: [-0.5, X('s')], to: [-0.5, `${X('s')} + 0.3*${V('s')}`], color: 'red', arrow: true },
          ],
          points: [{ x: -0.5, y: X('s'), label: 'drone', color: 'red' }],
          sliders: [{ name: 's', min: 0, max: 3.2, step: 0.01, value: 0, label: 'time $t$ (s)', play: true, speed: 0.8 }],
          readouts: [
            { label: '$x$ (m):', expr: X('s'), digits: 2 },
            { label: '$v = dx/dt$ (m/s):', expr: V('s'), digits: 2 },
          ],
          caption: 'Press ▶. The red dot on the gray track at the left is the drone itself; it moves up and down the position axis while the graph is traced out in time. The red arrow is its velocity, and it always matches the slope of the orange tangent. Between $t = 1$ and $t = 2\\,\\text{s}$ the tangent slopes downward and the drone backs up.',
        },
        {
          type: 'derivation',
          title: 'When is the drone at rest, and when does it move backward?',
          steps: [
            { tex: 'x(t) = 2t^3 - 9t^2 + 12t + 1', why: 'Position in meters, $t$ in seconds.' },
            { tex: 'v(t) = \\frac{dx}{dt} = 6t^2 - 18t + 12', why: 'Power rule term by term. Check units: each coefficient picks up a $1/\\text{s}$, so $v$ is in m/s.' },
            { tex: 'v(t) = 6(t^2 - 3t + 2) = 6(t - 1)(t - 2)', why: 'Factor to find the sign changes.' },
            { tex: 'v = 0 \\text{ at } t = 1\\,\\text{s and } t = 2\\,\\text{s}', why: 'The drone is momentarily at rest: these are the turning points of the motion (the local max and min of $x$).' },
            { tex: 'v < 0 \\text{ for } 1 < t < 2, \\qquad v > 0 \\text{ otherwise}', why: 'Between the roots the two factors have opposite signs, so the drone moves in the $-x$ direction.' },
          ],
          result: 'The drone flies out until $t = 1\\,\\text{s}$ (reaching $x = 6\\,\\text{m}$), backs up to $x = 5\\,\\text{m}$ at $t = 2\\,\\text{s}$, then flies out again.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Velocity from frame data',
          text: 'A game or a telemetry log rarely has a formula for $x(t)$; it has positions sampled each frame. The velocity estimate is a difference quotient with $\\Delta t$ equal to the frame time: `v = (x_now - x_prev) / dt`. That is a secant slope standing in for the tangent slope. The **central** difference `(x_next - x_prev) / (2 * dt)` is noticeably more accurate when you can afford to look one frame ahead, so offline tools that have the whole recording (replays, telemetry analysis) can use it.',
        },
      ],
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'expr',
      prompt: 'A character controller logs the position of a sliding crate as $x(t) = 4t^3 - 3t^2 + 5$ (meters, $t$ in seconds). Find its velocity $v(t)$.',
      label: '$v(t) =$',
      answer: '12t^2 - 6t',
      answerTex: 'v(t) = 12t^2 - 6t',
      variables: ['t'],
      hint: 'Differentiate term by term; the constant $5$ only shifts where the crate is, not how fast it moves.',
      explanation: '$v = \\frac{dx}{dt} = 12t^2 - 6t$ (in m/s). The constant $5\\,\\text{m}$ is the starting position, and it disappears when you differentiate, as it should: moving the origin cannot change a velocity. Notice $v(0) = 0$, so the crate starts from rest.',
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'concept',
      title: 'Acceleration: how fast the velocity changes',
      blocks: [
        {
          type: 'p',
          text: 'Velocity itself can change. Its rate of change is the [[acceleration]], the derivative of velocity and the second derivative of position. Its units are $\\text{(m/s)/s} = \\text{m/s}^2$: "meters per second, every second".',
        },
        {
          type: 'theorem',
          name: 'Acceleration',
          tex: 'a(t) = \\frac{dv}{dt} = \\frac{d^2x}{dt^2}',
          text: 'On the $v$–$t$ graph, $a$ is the slope. On the $x$–$t$ graph, it is the [[concavity]]: $a > 0$ where the curve bends upward, $a < 0$ where it bends downward. (The rate of change of acceleration is called [[jerk]].)',
        },
        {
          type: 'p',
          text: 'Here is the crucial, often misunderstood point: the **sign of $a$ alone does not tell you whether the object speeds up**. Compare the signs of $v$ and $a$:',
        },
        {
          type: 'table',
          headers: ['$v$', '$a$', 'What happens'],
          rows: [
            ['$+$', '$+$', 'moving in $+x$, speeding up'],
            ['$+$', '$-$', 'moving in $+x$, slowing down'],
            ['$-$', '$-$', 'moving in $-x$, **speeding up**'],
            ['$-$', '$+$', 'moving in $-x$, slowing down'],
          ],
          caption: 'Same signs: speeding up. Opposite signs: slowing down. "Negative acceleration" is not a synonym for "deceleration".',
        },
        {
          type: 'p',
          text: 'For the drone, $a(t) = \\frac{d}{dt}(6t^2 - 18t + 12) = 12t - 18$. Press ▶ on each graph below (they share the same clock) and compare the three views of one motion.',
        },
        {
          type: 'graph',
          x: [-0.1, 3.3],
          y: [-1, 14],
          height: 220,
          functions: [{ expr: X('x'), label: '$x(t)$ (m)', color: 'blue', domain: [0, 3.2] }],
          tangents: [{ expr: X('x'), at: 's', color: 'orange' }],
          vlines: [{ x: 's', color: 'gray' }],
          sliders: [{ name: 's', min: 0, max: 3.2, step: 0.01, value: 0.5, label: 'time $t$ (s)', play: true, speed: 0.8 }],
          readouts: [{ label: '$x$ (m):', expr: X('s'), digits: 2 }],
          caption: 'Position: the slope of the tangent is $v$; the curve bends downward until $t = 1.5\\,\\text{s}$ ($a < 0$) and upward after ($a > 0$).',
        },
        {
          type: 'graph',
          x: [-0.1, 3.3],
          y: [-3, 17],
          height: 220,
          functions: [{ expr: V('x'), label: '$v(t)$ (m/s)', color: 'red', domain: [0, 3.2] }],
          tangents: [{ expr: V('x'), at: 's', color: 'orange' }],
          vlines: [{ x: 's', color: 'gray' }],
          sliders: [{ name: 's', min: 0, max: 3.2, step: 0.01, value: 0.5, label: 'time $t$ (s)', play: true, speed: 0.8 }],
          readouts: [
            { label: '$v$ (m/s):', expr: V('s'), digits: 2 },
            { label: 'speed $|v|$ (m/s):', expr: `abs(${V('s')})`, digits: 2 },
          ],
          caption: 'Velocity: its slope is $a$. The speed $|v|$ shrinks from $t = 0$ to $1\\,\\text{s}$, grows from $1$ to $1.5\\,\\text{s}$ (moving backward faster), shrinks again to $2\\,\\text{s}$, then grows.',
        },
        {
          type: 'graph',
          x: [-0.1, 3.3],
          y: [-20, 22],
          height: 220,
          functions: [{ expr: A('x'), label: '$a(t)$ (m/s²)', color: 'green', domain: [0, 3.2] }],
          points: [{ x: 's', y: A('s'), color: 'green' }],
          vlines: [{ x: 's', color: 'gray' }],
          sliders: [{ name: 's', min: 0, max: 3.2, step: 0.01, value: 0.5, label: 'time $t$ (s)', play: true, speed: 0.8 }],
          readouts: [
            { label: '$a$ (m/s²):', expr: A('s'), digits: 2 },
            { label: '$v \\cdot a$ (positive means speeding up):', expr: `${V('s')}*${A('s')}`, digits: 1 },
          ],
          caption: 'Acceleration: negative until $t = 1.5\\,\\text{s}$, positive after. Between $1$ and $1.5\\,\\text{s}$ both $v$ and $a$ are negative, so the drone is *speeding up* while backing up, despite the negative acceleration.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why "same sign means speeding up"',
          text: 'Speed squared is $v^2$, and $\\frac{d}{dt}(v^2) = 2v\\frac{dv}{dt} = 2va$ by the chain rule. So the speed grows exactly when $va > 0$ (same signs) and shrinks when $va < 0$. That is the readout under the green graph.',
        },
      ],
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'mcq',
      prompt: 'At some instant a car has velocity $v = -4.0\\,\\text{m/s}$ and acceleration $a = -2.0\\,\\text{m/s}^2$ (with $+x$ pointing east). Which describes its motion at that instant?',
      options: [
        { text: 'Moving west and slowing down', why: 'Slowing down requires $v$ and $a$ to have opposite signs. Here both are negative.' },
        { text: 'Moving west and speeding up', correct: true, why: '$v < 0$ means it is moving west; $a$ has the same sign, so the speed $|v|$ is increasing: in $1\\,\\text{s}$ the velocity will be $-6.0\\,\\text{m/s}$.' },
        { text: 'Moving east and slowing down', why: 'The velocity is negative, so the car moves west. "Negative acceleration" does not mean "slowing down".' },
        { text: 'Moving east and speeding up', why: 'A negative velocity means westward motion in this coordinate system.' },
      ],
      explanation: 'Direction of motion comes from the sign of $v$: negative, so west. Speeding up or slowing down comes from comparing signs: $v$ and $a$ agree, so the speed grows. After one more second $v = -4.0 + (-2.0)(1.0) = -6.0\\,\\text{m/s}$: faster, still westward.',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'truefalse',
      prompt: 'If an object\'s velocity is zero at some instant, its acceleration at that instant must also be zero.',
      answer: false,
      explanation: 'False. The drone has $v(1) = 0$ but $a(1) = 12(1) - 18 = -6\\,\\text{m/s}^2$: it is momentarily at rest while its velocity is changing from positive to negative. Zero velocity says the slope of $x(t)$ is zero; acceleration is about whether *velocity* is changing, and at a turning point it is. A ball at the top of its flight is the classic case, coming up in the free-fall lesson.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'concept',
      title: 'Running it backwards: integrate to get velocity and position',
      blocks: [
        {
          type: 'p',
          text: 'In physics we usually know the acceleration first, because forces determine it (that is Newton\'s second law, a few units ahead). To get the motion, undo the derivatives: integrate. By the [[fundamental-theorem-of-calculus]] in its [[net-change-theorem|net change]] form,',
        },
        {
          type: 'math',
          tex: 'v(t) = v_0 + \\int_0^t a(t\')\\,dt\', \\qquad x(t) = x_0 + \\int_0^t v(t\')\\,dt\'',
          caption: 'Each integration needs one piece of starting information: the initial velocity $v_0 = v(0)$ and the initial position $x_0 = x(0)$.',
        },
        {
          type: 'p',
          text: 'The geometry matches: the signed area under the $v$–$t$ graph is the displacement, and the area under the $a$–$t$ graph is the change in velocity. To get **distance traveled** instead, integrate the speed: $\\int |v|\\,dt$, which counts backward motion as positive.',
        },
        {
          type: 'graph',
          x: [-0.1, 3.2],
          y: [-3, 13],
          functions: [{ expr: V('x'), label: '$v(t) = 6t^2 - 18t + 12$', color: 'red', domain: [0, 3] }],
          areas: [
            { expr: `max(${V('x')}, 0)`, from: 0, to: 's', color: 'blue' },
            { expr: `min(${V('x')}, 0)`, from: 0, to: 's', color: 'orange' },
          ],
          sliders: [{ name: 's', min: 0, max: 3, step: 0.01, value: 0, label: 'time $t$ (s)', play: true, speed: 0.75 }],
          readouts: [
            { label: 'displacement $\\int_0^t v\\,dt$ (m):', expr: `${X('s')} - 1`, digits: 2 },
            { label: 'distance $\\int_0^t |v|\\,dt$ (m):', expr: `(${X('min(s, 1)')} - 1) + (6 - ${X('min(max(s, 1), 2)')}) + (${X('max(s, 2)')} - 5)`, digits: 2 },
          ],
          caption: 'Press ▶. Blue area (above the axis) adds to the displacement; orange area (below) subtracts. Both add to the distance. At $t = 3\\,\\text{s}$: displacement $9\\,\\text{m}$, distance $11\\,\\text{m}$, matching the secant card.',
        },
        {
          type: 'derivation',
          title: 'A drone starts from rest at $x = 0$ with $a(t) = 6 - 2t$ (in $\\text{m/s}^2$). Find $v(t)$, $x(t)$ and its position at $t = 6\\,\\text{s}$.',
          steps: [
            { tex: 'v(t) = v_0 + \\int_0^t (6 - 2t\')\\,dt\' = 0 + \\left[6t\' - t\'^2\\right]_0^t', why: 'Integrate the acceleration. Starting from rest means $v_0 = 0$.' },
            { tex: 'v(t) = 6t - t^2', why: 'Evaluate at the limits. Check: $dv/dt = 6 - 2t = a(t)$.' },
            { tex: 'x(t) = x_0 + \\int_0^t (6t\' - t\'^2)\\,dt\' = 0 + 3t^2 - \\tfrac{1}{3}t^3', why: 'Integrate again; $x_0 = 0$.' },
            { tex: 'v(6) = 36 - 36 = 0, \\qquad x(6) = 108 - 72 = 36\\,\\text{m}', why: 'Plug in $t = 6\\,\\text{s}$. The velocity is back to zero: the drone has just come to rest.' },
          ],
          result: 'The drone speeds up while $a > 0$ (top speed $v(3) = 9\\,\\text{m/s}$), slows while $a < 0$, and stops $36\\,\\text{m}$ from its start at $t = 6\\,\\text{s}$. Note that $a$ was **not constant**; integration handles that without any special formula.',
        },
        {
          type: 'p',
          text: 'A game engine does the same integration numerically, one frame at a time: each frame adds a thin rectangle of area to $v$ and to $x$. Those are Riemann sums, and they converge to the exact integral as the timestep shrinks:',
        },
        {
          type: 'code',
          title: 'integrate.cpp',
          runnable: true,
          code: `#include <cstdio>

// Acceleration of a drone (m/s^2) at time t (s).
double accel(double t) { return 6.0 - 2.0 * t; }

int main() {
    const double steps[] = {0.1, 0.01, 0.001};
    for (double dt : steps) {
        double t = 0.0, v = 0.0, x = 0.0;  // starts at rest at the origin
        const int n = static_cast<int>(6.0 / dt + 0.5);
        for (int i = 0; i < n; ++i) {
            x += v * dt;         // one thin rectangle of area under v(t)
            v += accel(t) * dt;  // one thin rectangle of area under a(t)
            t += dt;
        }
        std::printf("dt = %.3f s   v(6) = %.4f m/s   x(6) = %.4f m\\n", dt, v, x);
    }
    std::printf("exact          v(6) = 0.0000 m/s   x(6) = 36.0000 m\\n");
}`,
          output: `dt = 0.100 s   v(6) = 0.6000 m/s   x(6) = 37.7600 m
dt = 0.010 s   v(6) = 0.0600 m/s   x(6) = 36.1796 m
dt = 0.001 s   v(6) = 0.0060 m/s   x(6) = 36.0180 m
exact          v(6) = 0.0000 m/s   x(6) = 36.0000 m`,
          annotations: [
            { lines: 4, text: 'The non-constant acceleration from the worked example.' },
            { lines: 12, text: 'Position grows by $v\\,\\Delta t$: one left-endpoint rectangle under $v(t)$.' },
            { lines: 13, text: 'Velocity grows by $a\\,\\Delta t$: one rectangle under $a(t)$.' },
            { lines: 10, text: '$6/\\Delta t$ frames to reach $t = 6\\,\\text{s}$; `+ 0.5` rounds to the nearest integer.' },
          ],
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Better integrators later',
          text: 'The error shrinks in proportion to $\\Delta t$: ten times smaller steps, ten times smaller error. The game-physics unit compares smarter update rules (semi-implicit Euler, Verlet, RK4) that do much better at the same frame rate.',
        },
      ],
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'numeric',
      prompt: 'The graph shows a car\'s velocity: it speeds up from rest, cruises, then brakes to a stop. How far does it travel in the $8.0\\,\\text{s}$ shown? Give 2 significant figures.',
      graph: {
        type: 'graph',
        x: [-0.3, 9],
        y: [-1, 8],
        functions: [{ expr: CAR_V('x'), label: '$v(t)$ (m/s), $t$ in s', color: 'red', domain: [0, 8.5] }],
        points: [
          { x: 3, y: 6, label: '(3, 6)' },
          { x: 6, y: 6, label: '(6, 6)' },
          { x: 8, y: 0, label: '(8, 0)' },
        ],
      },
      hint: 'Displacement is the area under the $v$–$t$ graph: a triangle, a rectangle and another triangle.',
      answer: '33',
      answerTex: '33\\,\\text{m}',
      tolerance: 0.3,
      unit: 'm',
      label: '$\\Delta x =$',
      explanation: 'Split the area: speeding up, $\\tfrac12(3\\,\\text{s})(6\\,\\text{m/s}) = 9\\,\\text{m}$; cruising, $(3\\,\\text{s})(6\\,\\text{m/s}) = 18\\,\\text{m}$; braking, $\\tfrac12(2\\,\\text{s})(6\\,\\text{m/s}) = 6\\,\\text{m}$. Total $33\\,\\text{m}$. Since $v \\ge 0$ throughout, distance and displacement agree here. Multiplying the top speed by the total time ($48\\,\\text{m}$) ignores the time spent going slower.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'order',
      prompt: 'You are given $a(t)$, $v_0$ and $x_0$. Put the steps for finding the position at time $T$ in order.',
      lines: [
        'Integrate $a(t)$ to get $v(t)$ up to a constant',
        'Use $v(0) = v_0$ to fix that constant',
        'Integrate $v(t)$ to get $x(t)$ up to a constant',
        'Use $x(0) = x_0$ to fix that constant',
        'Evaluate $x(T)$ and check its units and sign',
      ],
      distractors: ['Use $x = x_0 + v_0 t + \\tfrac12 a t^2$ with $a = a(T)$'],
      explanation: 'Each integration introduces one unknown constant, and each initial condition pins one down, so they alternate: integrate, apply $v_0$; integrate, apply $x_0$. The distractor uses the constant-acceleration formula with a non-constant $a$, which gives the wrong answer (you will prove the formula in the next lesson, and see exactly why it needs $a$ constant).',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'error',
      prompt: 'A cart has $a(t) = 4t\\ \\text{m/s}^2$, starts at $x_0 = 0$ with $v_0 = 5\\ \\text{m/s}$. A student finds its position at $t = 3\\,\\text{s}$. Tap the first wrong line.',
      lines: [
        '$v(t) = \\int 4t\\,dt = 2t^2$',
        '$x(t) = \\int 2t^2\\,dt = \\tfrac{2}{3}t^3 + x_0 = \\tfrac{2}{3}t^3$',
        '$x(3) = \\tfrac{2}{3}(27)$',
        '$x(3) = 18\\,\\text{m}$',
      ],
      errorLines: [1],
      explanation: 'Line 1 drops the constant of integration. The [[antiderivative]] is $2t^2 + C$, and $v(0) = 5$ forces $C = 5$: $v(t) = 2t^2 + 5$. Then $x(t) = \\tfrac23 t^3 + 5t$, and $x(3) = 18 + 15 = 33\\,\\text{m}$. The student treated the cart as starting from rest, losing the $15\\,\\text{m}$ it covers thanks to its initial velocity. Line 2 handles $x_0$ correctly, but on the wrong $v(t)$.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'concept',
      title: 'Reading motion graphs',
      blocks: [
        {
          type: 'p',
          text: 'Physicists move fluidly between the three graphs of a motion. Two operations connect them: **slope** goes down the chain ($x \\to v \\to a$) and **area** goes up it ($a \\to \\Delta v$, $v \\to \\Delta x$).',
        },
        {
          type: 'table',
          headers: ['Graph', 'Its slope is…', 'Area under it is…', 'Also look for…'],
          rows: [
            ['$x$ vs $t$', 'velocity $v$', '(not useful)', 'concave up: $a > 0$; flat spot: momentarily at rest'],
            ['$v$ vs $t$', 'acceleration $a$', 'displacement $\\Delta x$', 'crossing the axis: reversing direction'],
            ['$a$ vs $t$', 'jerk', 'change in velocity $\\Delta v$', 'sign compared with $v$: speeding up or slowing'],
          ],
        },
        {
          type: 'p',
          text: 'Here is the car from the last question in all three views. Its acceleration is piecewise constant ($+2$, then $0$, then $-3\\,\\text{m/s}^2$), so the velocity graph is made of straight segments and the position graph of parabolic arcs joined smoothly.',
        },
        {
          type: 'graph',
          x: [-0.3, 9],
          y: [-2, 36],
          height: 220,
          functions: [{ expr: CAR_X('x'), label: '$x(t)$ (m)', color: 'blue', domain: [0, 9] }],
          tangents: [{ expr: CAR_X('x'), at: 's', color: 'orange' }],
          sliders: [{ name: 's', min: 0, max: 9, step: 0.01, value: 0, label: 'time $t$ (s)', play: true, speed: 2 }],
          readouts: [
            { label: '$x$ (m):', expr: CAR_X('s'), digits: 1 },
            { label: 'slope $= v$ (m/s):', expr: CAR_V('s'), digits: 2 },
          ],
          caption: 'Position: steepening (speeding up), straight (constant velocity), flattening (braking), then flat (parked at $33\\,\\text{m}$).',
        },
        {
          type: 'graph',
          x: [-0.3, 9],
          y: [-1, 8],
          height: 200,
          functions: [{ expr: CAR_V('x'), label: '$v(t)$ (m/s)', color: 'red', domain: [0, 9] }],
          areas: [{ expr: CAR_V('x'), from: 0, to: 's', color: 'blue' }],
          sliders: [{ name: 's', min: 0, max: 9, step: 0.01, value: 0, label: 'time $t$ (s)', play: true, speed: 2 }],
          readouts: [{ label: 'shaded area $= x(t) - x(0)$ (m):', expr: CAR_X('s'), digits: 1 }],
          caption: 'Velocity: the shaded area grows fastest when $v$ is largest, and it is exactly the position in the graph above.',
        },
        {
          type: 'graph',
          x: [-0.3, 9],
          y: [-4, 3],
          height: 180,
          functions: [{ expr: CAR_A('x'), label: '$a(t)$ (m/s²)', color: 'green', domain: [0.001, 9] }],
          areas: [{ expr: CAR_A('x'), from: 0.001, to: 's', color: 'green' }],
          sliders: [{ name: 's', min: 0, max: 9, step: 0.01, value: 0, label: 'time $t$ (s)', play: true, speed: 2 }],
          readouts: [{ label: 'signed area $= \\Delta v$ (m/s):', expr: CAR_V('s'), digits: 2 }],
          caption: 'Acceleration: $+2 \\times 3 = +6\\,\\text{m/s}$ of velocity gained, then $-3 \\times 2 = -6\\,\\text{m/s}$ lost. The jumps in $a$ are where the driver changes pedals.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'A graph is not a picture of the path',
          text: 'An $x$–$t$ graph that curves upward does not mean the car drives uphill; the car moves along a straight line the whole time. The vertical axis is position and the horizontal axis is *time*. Likewise, where two $v$–$t$ graphs cross, the objects have the same velocity, not the same position. Always read the axis labels first.',
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'Graph-matching questions are a staple of physics exams and of research tests such as the Test of Understanding Graphs in Kinematics (TUG-K). Work slope by slope: for each time interval, read the sign of the slope (and whether it is changing) on the given graph, then sketch the next graph down the chain. Check one area to confirm.',
        },
      ],
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'mcq',
      prompt: 'The graph shows the drone\'s position $x(t) = 2t^3 - 9t^2 + 12t + 1$. At which labeled instant is its velocity **negative** and its acceleration **positive**?',
      graph: {
        type: 'graph',
        x: [-0.1, 2.9],
        y: [0, 9.5],
        functions: [{ expr: X('x'), label: '$x(t)$ (m), $t$ in s', color: 'blue', domain: [0, 2.9] }],
        points: [
          { x: 0.5, y: X('0.5'), label: 'A' },
          { x: 1.25, y: X('1.25'), label: 'B' },
          { x: 1.75, y: X('1.75'), label: 'C' },
          { x: 2.5, y: X('2.5'), label: 'D' },
        ],
      },
      options: [
        { text: 'A', why: 'At A the graph rises (slope $v > 0$) and bends downward ($a < 0$): moving forward and slowing down.' },
        { text: 'B', why: 'At B the graph falls ($v < 0$) but still bends downward ($a < 0$): backing up and speeding up.' },
        { text: 'C', correct: true, why: 'At C the graph falls ($v < 0$) and bends upward ($a > 0$): backing up but slowing down, about to stop at $t = 2\\,\\text{s}$.' },
        { text: 'D', why: 'At D the graph rises ($v > 0$) and bends upward ($a > 0$): moving forward and speeding up.' },
      ],
      explanation: 'Read velocity as the slope and acceleration as the concavity. The curve is concave down before the inflection point at $t = 1.5\\,\\text{s}$ and concave up after it, and it falls between $t = 1$ and $t = 2\\,\\text{s}$. Only C ($t = 1.75\\,\\text{s}$) has a falling, concave-up graph. Algebra agrees: $v(1.75) = -1.125\\,\\text{m/s}$, $a(1.75) = 3\\,\\text{m/s}^2$.',
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'fill',
      prompt: 'Complete the rules that connect the motion graphs.',
      template: 'The slope of an $x$–$t$ graph is the ___. The slope of a $v$–$t$ graph is the ___. The area under a $v$–$t$ graph is the ___, and the area under an $a$–$t$ graph is the ___.',
      blanks: [{ answers: ['velocity'] }, { answers: ['acceleration'] }, { answers: ['displacement'] }, { answers: ['change in velocity'] }],
      wordBank: ['velocity', 'acceleration', 'displacement', 'change in velocity', 'distance traveled', 'position', 'speed'],
      explanation: 'Differentiation (slope) takes you from $x$ to $v$ to $a$; integration (area) takes you back, giving *changes*: $\\int v\\,dt = \\Delta x$ and $\\int a\\,dt = \\Delta v$. The area under $v$–$t$ is the signed displacement; it equals distance traveled only if $v$ never changes sign. To get the position itself, you also need where it started, $x_0$.',
    },
  ],
  takeaways: [
    'Choose an origin and a positive direction; position $x(t)$ is signed, and displacement $\\Delta x = x_f - x_i$ ignores the route, unlike distance traveled.',
    'Average velocity $\\Delta x/\\Delta t$ is a secant slope; instantaneous velocity $v = dx/dt$ is the tangent slope, and speed is $|v|$.',
    'Acceleration $a = dv/dt = d^2x/dt^2$. The object speeds up when $v$ and $a$ have the same sign, and slows down when they differ.',
    'Integrate to go back: $v = v_0 + \\int a\\,dt$ and $x = x_0 + \\int v\\,dt$; each step needs an initial condition, and works for any $a(t)$.',
    'Slopes go down the chain $x \\to v \\to a$; areas go up it ($\\int v\\,dt = \\Delta x$, $\\int a\\,dt = \\Delta v$).',
  ],
  reading: [
    {
      title: 'OpenStax University Physics Volume 1, Chapter 3: Motion Along a Straight Line',
      url: 'https://openstax.org/details/books/university-physics-volume-1',
      source: 'openstax',
      note: 'Sections 3.1 to 3.3 and 3.6 cover position, velocity and acceleration, including finding velocity and displacement by integration.',
    },
    {
      title: 'PhET: The Moving Man',
      url: 'https://phet.colorado.edu/',
      source: 'other',
      note: 'Search for "The Moving Man": drag a person along a line and watch the position, velocity and acceleration graphs draw themselves.',
    },
    {
      title: 'MIT OCW 8.01SC Classical Mechanics',
      url: 'https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/',
      source: 'other',
      note: 'Week 1 covers one-dimensional kinematics with calculus, with lecture videos and worked problems.',
    },
  ],
};
