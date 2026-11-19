import type { Lesson } from '../../types';

// Ball thrown straight up, drawn at 0.5 s intervals (spread sideways for clarity) with v and a arrows.
const FIG_THROW = `<svg viewBox="0 0 520 330" xmlns="http://www.w3.org/2000/svg">
<line x1="10" y1="262" x2="510" y2="262" stroke="currentColor" stroke-width="1.2" stroke-dasharray="5 4"/>
<circle cx="50" cy="262.0" r="7" class="f-blue" fill-opacity="0.85"/>
<line x1="62.0" y1="262.0" x2="62.0" y2="223.0" class="s-red" stroke-width="2.2"/><path d="M62.0,215.0 L66.0,223.0 L58.0,223.0 Z" class="f-red"/>
<line x1="38.0" y1="262.0" x2="38.0" y2="277.5" class="s-green" stroke-width="2.2"/><path d="M38.0,285.5 L34.0,277.5 L42.0,277.5 Z" class="f-green"/>
<text x="30.0" y="252.0" font-size="11" text-anchor="end" class="t-gray">0.0 s</text>
<circle cx="102" cy="172.0" r="7" class="f-blue" fill-opacity="0.85"/>
<line x1="114.0" y1="172.0" x2="114.0" y2="144.7" class="s-red" stroke-width="2.2"/><path d="M114.0,136.7 L118.0,144.7 L110.0,144.7 Z" class="f-red"/>
<line x1="90.0" y1="172.0" x2="90.0" y2="187.5" class="s-green" stroke-width="2.2"/><path d="M90.0,195.5 L86.0,187.5 L94.0,187.5 Z" class="f-green"/>
<text x="102.0" y="284.0" font-size="11" text-anchor="middle" class="t-gray">0.5 s</text>
<circle cx="154" cy="107.6" r="7" class="f-blue" fill-opacity="0.85"/>
<line x1="166.0" y1="107.6" x2="166.0" y2="92.1" class="s-red" stroke-width="2.2"/><path d="M166.0,84.1 L170.0,92.1 L162.0,92.1 Z" class="f-red"/>
<line x1="142.0" y1="107.6" x2="142.0" y2="123.2" class="s-green" stroke-width="2.2"/><path d="M142.0,131.2 L138.0,123.2 L146.0,123.2 Z" class="f-green"/>
<text x="154.0" y="284.0" font-size="11" text-anchor="middle" class="t-gray">1.0 s</text>
<circle cx="206" cy="69.1" r="7" class="f-blue" fill-opacity="0.85"/>
<line x1="218.0" y1="69.1" x2="218.0" y2="65.3" class="s-red" stroke-width="2.2"/><path d="M218.0,57.3 L222.0,65.3 L214.0,65.3 Z" class="f-red"/>
<line x1="194.0" y1="69.1" x2="194.0" y2="84.6" class="s-green" stroke-width="2.2"/><path d="M194.0,92.6 L190.0,84.6 L198.0,84.6 Z" class="f-green"/>
<text x="206.0" y="284.0" font-size="11" text-anchor="middle" class="t-gray">1.5 s</text>
<circle cx="258" cy="56.2" r="7" class="f-blue" fill-opacity="0.85"/>
<line x1="246.0" y1="56.2" x2="246.0" y2="71.7" class="s-green" stroke-width="2.2"/><path d="M246.0,79.7 L242.0,71.7 L250.0,71.7 Z" class="f-green"/>
<text x="258.0" y="284.0" font-size="11" text-anchor="middle" class="t-gray">2.0 s</text>
<circle cx="310" cy="69.1" r="7" class="f-blue" fill-opacity="0.85"/>
<line x1="322.0" y1="69.1" x2="322.0" y2="72.8" class="s-red" stroke-width="2.2"/><path d="M322.0,80.8 L318.0,72.8 L326.0,72.8 Z" class="f-red"/>
<line x1="298.0" y1="69.1" x2="298.0" y2="84.6" class="s-green" stroke-width="2.2"/><path d="M298.0,92.6 L294.0,84.6 L302.0,84.6 Z" class="f-green"/>
<text x="310.0" y="284.0" font-size="11" text-anchor="middle" class="t-gray">2.5 s</text>
<circle cx="362" cy="107.6" r="7" class="f-blue" fill-opacity="0.85"/>
<line x1="374.0" y1="107.6" x2="374.0" y2="123.2" class="s-red" stroke-width="2.2"/><path d="M374.0,131.2 L370.0,123.2 L378.0,123.2 Z" class="f-red"/>
<line x1="350.0" y1="107.6" x2="350.0" y2="123.2" class="s-green" stroke-width="2.2"/><path d="M350.0,131.2 L346.0,123.2 L354.0,123.2 Z" class="f-green"/>
<text x="362.0" y="284.0" font-size="11" text-anchor="middle" class="t-gray">3.0 s</text>
<circle cx="414" cy="172.0" r="7" class="f-blue" fill-opacity="0.85"/>
<line x1="426.0" y1="172.0" x2="426.0" y2="199.2" class="s-red" stroke-width="2.2"/><path d="M426.0,207.2 L422.0,199.2 L430.0,199.2 Z" class="f-red"/>
<line x1="402.0" y1="172.0" x2="402.0" y2="187.5" class="s-green" stroke-width="2.2"/><path d="M402.0,195.5 L398.0,187.5 L406.0,187.5 Z" class="f-green"/>
<text x="414.0" y="284.0" font-size="11" text-anchor="middle" class="t-gray">3.5 s</text>
<circle cx="466" cy="262.0" r="7" class="f-blue" fill-opacity="0.85"/>
<line x1="478.0" y1="262.0" x2="478.0" y2="301.0" class="s-red" stroke-width="2.2"/><path d="M478.0,309.0 L474.0,301.0 L482.0,301.0 Z" class="f-red"/>
<line x1="454.0" y1="262.0" x2="454.0" y2="277.5" class="s-green" stroke-width="2.2"/><path d="M454.0,285.5 L450.0,277.5 L458.0,277.5 Z" class="f-green"/>
<text x="446.0" y="252.0" font-size="11" text-anchor="end" class="t-gray">4.0 s</text>
<text x="258.0" y="22.2" font-size="12" text-anchor="middle" class="t-red" font-weight="700">top: v = 0</text>
<text x="258.0" y="38.2" font-size="12" text-anchor="middle" class="t-green" font-weight="700">a still = g down</text>
<text x="20.0" y="24.0" font-size="13" text-anchor="start" font-weight="700">Going up</text>
<text x="500.0" y="24.0" font-size="13" text-anchor="end" font-weight="700">Coming down</text>
<line x1="30.0" y1="322.0" x2="30.0" y2="309.0" class="s-red" stroke-width="2"/><path d="M30.0,302.0 L33.5,309.0 L26.5,309.0 Z" class="f-red"/>
<text x="40.0" y="318.0" font-size="12" text-anchor="start" class="t-red">velocity</text>
<line x1="120.0" y1="302.0" x2="120.0" y2="315.0" class="s-green" stroke-width="2"/><path d="M120.0,322.0 L116.5,315.0 L123.5,315.0 Z" class="f-green"/>
<text x="130.0" y="318.0" font-size="12" text-anchor="start" class="t-green">acceleration (the same at every instant)</text>
</svg>`;

// Ball thrown up at 15.0 m/s from the top of a 30.0 m cliff.
const FIG_CLIFF = `<svg viewBox="0 -6 520 306" xmlns="http://www.w3.org/2000/svg">
<line x1="20" y1="270" x2="500" y2="270" stroke="currentColor" stroke-width="1.5"/>
<path d="M20,270 L20,96.0 L200,96.0 L200,270 Z" class="f-gray" fill-opacity="0.25" stroke="currentColor" stroke-width="1.2"/>
<line x1="225" y1="96.0" x2="225" y2="29.4" class="s-blue" stroke-width="1.5" stroke-dasharray="4 3"/>
<line x1="239" y1="29.4" x2="239" y2="270" class="s-blue" stroke-width="1.5" stroke-dasharray="4 3"/>
<path d="M225,29.4 Q232,21.4 239,29.4" fill="none" class="s-blue" stroke-width="1.5" stroke-dasharray="4 3"/>
<circle cx="225" cy="96.0" r="6" class="f-blue"/>
<line x1="211.0" y1="96.0" x2="211.0" y2="57.0" class="s-red" stroke-width="2.4"/><path d="M211.0,48.0 L215.0,57.0 L207.0,57.0 Z" class="f-red"/>
<text x="205.0" y="66.0" font-size="13" text-anchor="end" class="t-red">v₀ = 15.0 m/s</text>
<circle cx="239" cy="264" r="6" class="f-blue" fill-opacity="0.5"/>
<text x="253.0" y="260.0" font-size="13" text-anchor="start" class="t-blue">lands: y = 0, t = ?</text>
<text x="253.0" y="33.4" font-size="13" text-anchor="start" class="t-gray">top: v = 0</text>
<line x1="430.0" y1="270.0" x2="430.0" y2="9.0" stroke="currentColor" stroke-width="1.2"/><path d="M430.0,0.0 L434.0,9.0 L426.0,9.0 Z" fill="currentColor"/>
<text x="420.0" y="14.0" font-size="13" text-anchor="end">+y</text>
<line x1="425" y1="270.0" x2="435" y2="270.0" stroke="currentColor"/>
<text x="440.0" y="264.0" font-size="12" text-anchor="start">y = 0 (ground)</text>
<line x1="425" y1="96.0" x2="435" y2="96.0" stroke="currentColor"/>
<text x="440.0" y="100.0" font-size="12" text-anchor="start">y₀ = 30.0 m</text>
<line x1="425" y1="29.4" x2="435" y2="29.4" stroke="currentColor"/>
<text x="440.0" y="33.4" font-size="12" text-anchor="start">y = 41.5 m (top)</text>
<line x1="390.0" y1="90.0" x2="390.0" y2="114.0" class="s-green" stroke-width="2.2"/><path d="M390.0,122.0 L386.0,114.0 L394.0,114.0 Z" class="f-green"/>
<text x="382.0" y="110.0" font-size="13" text-anchor="end" class="t-green">a = −g</text>
<text x="110.0" y="183.0" font-size="13" text-anchor="middle">cliff</text>
</svg>`;

// Bouncing ball dropped from 1.8 m (perfectly elastic bounces). T = fall time.
const T = 'sqrt(3.6/9.8)';
const U = (x: string) => `(${x} - 2*${T}*floor((${x} + ${T})/(2*${T})))`;

// Model rocket: net a = 20 + 5t (m/s^2) for 0 <= t <= 2 s, then free fall with g = 9.80 m/s^2.
const RY = (x: string) => `(10min(${x}, 2)^2 + 5/6*min(${x}, 2)^3 + 50max(${x} - 2, 0) - 4.9max(${x} - 2, 0)^2)`;
const RV = (x: string) => `(20min(${x}, 2) + 2.5min(${x}, 2)^2 - 9.8max(${x} - 2, 0))`;
const RA = (x: string) => `((20 + 5min(${x}, 2))*(1 - sign(${x} - 2))/2 - 9.8*(1 + sign(${x} - 2))/2)`;
const RLAND = '13.0648';

export const lesson: Lesson = {
  id: 'phys-free-fall',
  title: 'Free Fall and Motion Graphs',
  summary: 'Every object falls with the same acceleration $g$. Set up signs carefully, exploit the symmetry of vertical throws, read the motion graphs, and integrate directly when the acceleration is not constant.',
  minutes: 20,
  objectives: [
    'Explain why all objects in free fall share the acceleration $g$, and where air resistance breaks the model',
    'Apply the kinematic equations to vertical motion with a consistent sign convention ($a_y = -g$ with $+y$ up)',
    'Use the symmetry of a vertical throw: rise time, maximum height and return speed',
    'Solve throws from a height with the quadratic formula and interpret both roots',
    'Read free-fall motion on $y$–$t$, $v$–$t$ and $a$–$t$ graphs, and integrate $a(t)$ when the acceleration is not constant',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Everything falls the same way',
      blocks: [
        {
          type: 'p',
          text: 'Drop a bowling ball and a tennis ball side by side. Aristotle taught that the heavier one falls faster, and everyday experience with feathers and paper seems to agree. Galileo argued the opposite: without air resistance, **every object falls with the same acceleration**, regardless of its mass.',
        },
        {
          type: 'definition',
          term: 'Free fall',
          text: '[[phys-free-fall|Free fall]] is motion under gravity alone. Near Earth\'s surface every freely falling object has a constant downward acceleration of magnitude [[phys-free-fall-acceleration|$g$]], with $g = 9.80\\,\\text{m/s}^2$ in this course. It varies a little with location, from about $9.78$ at the equator to $9.83\\,\\text{m/s}^2$ at the poles.',
        },
        {
          type: 'graph',
          x: [-1.3, 1.6],
          y: [-0.25, 5.4],
          points: [
            { x: -0.8, y: '5 - 4.9*0^2', color: 'gray' },
            { x: -0.8, y: '5 - 4.9*0.1^2', color: 'gray' },
            { x: -0.8, y: '5 - 4.9*0.2^2', color: 'gray' },
            { x: -0.8, y: '5 - 4.9*0.3^2', color: 'gray' },
            { x: -0.8, y: '5 - 4.9*0.4^2', color: 'gray' },
            { x: -0.8, y: '5 - 4.9*0.5^2', color: 'gray' },
            { x: -0.8, y: '5 - 4.9*0.6^2', color: 'gray' },
            { x: -0.8, y: '5 - 4.9*0.7^2', color: 'gray' },
            { x: -0.8, y: '5 - 4.9*0.8^2', color: 'gray' },
            { x: -0.8, y: '5 - 4.9*0.9^2', color: 'gray' },
            { x: -0.8, y: '5 - 4.9*1^2', color: 'gray', label: 'every 0.1 s' },
            { x: 0.2, y: '5 - 4.9*min(s, sqrt(10/9.8))^2', color: 'red', label: 'bowling ball' },
            { x: 0.9, y: '5 - 4.9*min(s, sqrt(10/9.8))^2', color: 'blue', label: 'tennis ball' },
          ],
          hlines: [{ y: 0, color: 'gray' }],
          sliders: [{ name: 's', min: 0, max: 1.05, step: 0.005, value: 0, label: 'time (s)', play: true, speed: 0.26 }],
          readouts: [
            { label: 'fallen (m):', expr: '4.9*min(s, sqrt(10/9.8))^2', digits: 2 },
            { label: 'speed $gt$ (m/s):', expr: '9.8*min(s, sqrt(10/9.8))', digits: 2 },
          ],
          caption: 'A $5\\,\\text{m}$ drop in vacuum, in slow motion (press ▶). Both balls stay level the whole way and land together after $1.01\\,\\text{s}$. The gray "strobe" dots, one every $0.1\\,\\text{s}$, spread out because the speed grows by $0.98\\,\\text{m/s}$ in each interval.',
        },
        {
          type: 'callout',
          variant: 'history',
          title: 'A hammer and a feather on the Moon',
          text: 'In 1971 Apollo 15 astronaut David Scott dropped a geologist\'s hammer and a falcon feather side by side on the airless Moon, on live television. They hit the dust at the same instant. On Earth the feather flutters because air pushes back on it with a force comparable to its tiny weight, not because gravity treats it differently.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why mass cancels',
          text: 'A heavier object *is* pulled harder: the gravitational force is proportional to its mass. But a heavier object is also proportionally harder to accelerate. In the Newton\'s laws unit you will see the two effects cancel exactly, $a = F/m = mg/m = g$. Air drag does not scale with mass that way, which is why the model fails for feathers, parachutes and long-range bullets.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'truefalse',
      prompt: 'In a vacuum chamber, a $10\\,\\text{kg}$ steel ball dropped next to a $0.1\\,\\text{kg}$ rubber ball from the same height hits the floor first.',
      answer: false,
      explanation: 'False. With no air resistance both balls have the same acceleration $g$, so starting together from rest they have the same position and velocity at every instant and land together. The steel ball is pulled $100$ times harder, but it is also $100$ times harder to accelerate. In air the outcome can differ slightly, because drag is a larger fraction of the lighter ball\'s weight.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Signs and the free-fall equations',
      blocks: [
        {
          type: 'p',
          text: 'Free fall is constant-acceleration motion along a vertical axis, so all of the [[phys-kinematic-equations|kinematic equations]] apply with $x$ replaced by $y$. The only thing you must decide is the sign convention, and then stick to it.',
        },
        {
          type: 'theorem',
          name: 'Free fall with $+y$ up',
          tex: 'a_y = -g, \\qquad v_y = v_{0y} - gt, \\qquad y = y_0 + v_{0y}t - \\tfrac12gt^2, \\qquad v_y^2 = v_{0y}^2 - 2g\\,(y - y_0)',
          text: 'Here $g = +9.80\\,\\text{m/s}^2$ is a positive number (a magnitude). The minus sign says the acceleration points down. A velocity is positive while the object rises and negative while it falls.',
        },
        {
          type: 'derivation',
          title: 'A stone is dropped from rest off a $20.0\\,\\text{m}$ bridge. How long does it fall, and how fast does it hit the water?',
          steps: [
            { tex: 'y_0 = 20.0\\,\\text{m},\\; v_{0y} = 0,\\; a_y = -9.80\\,\\text{m/s}^2,\\; y = 0', why: 'Origin at the water, $+y$ up. "Dropped" means released from rest.' },
            { tex: '0 = 20.0 - \\tfrac12(9.80)\\,t^2 \\implies t = \\sqrt{\\frac{2(20.0)}{9.80}} = 2.02\\,\\text{s}', why: 'Position equation with $v_{0y} = 0$. Take the positive root: the fall happens after release.' },
            { tex: 'v_y = 0 - (9.80)(2.02) = -19.8\\,\\text{m/s}', why: 'Velocity equation. Negative: moving down, as it must be.' },
            { tex: '|v_y| = \\sqrt{2gh} = \\sqrt{2(9.80)(20.0)} = 19.8\\,\\text{m/s}\\;\\checkmark', why: 'Cross-check with the time-free equation $v^2 = v_0^2 - 2g\\,\\Delta y$, with $\\Delta y = -20.0\\,\\text{m}$.' },
          ],
          result: 'About $2$ seconds and $20\\,\\text{m/s}$ ($71\\,\\text{km/h}$). Drop height only enters through a square root: four times the height gives twice the time and twice the impact speed.',
        },
        {
          type: 'graph',
          x: [-0.6, 2.3],
          y: [-6.5, 21.5],
          functions: [{ expr: '20 - 4.9x^2', label: '$y(t) = 20.0 - 4.9t^2$ (m)', color: 'blue', domain: [0, 'sqrt(40/9.8)'] }],
          tangents: [{ expr: '20 - 4.9x^2', at: 'min(s, sqrt(40/9.8))', color: 'orange' }],
          segments: [
            { from: [-0.35, 0], to: [-0.35, 20.5], color: 'gray' },
            { from: [-0.35, '20 - 4.9min(s, sqrt(40/9.8))^2'], to: ['min(s, sqrt(40/9.8))', '20 - 4.9min(s, sqrt(40/9.8))^2'], color: 'gray', dashed: true },
            { from: [-0.2, '20 - 4.9min(s, sqrt(40/9.8))^2'], to: [-0.2, '20 - 4.9min(s, sqrt(40/9.8))^2 - 0.3*9.8min(s, sqrt(40/9.8))'], color: 'red', arrow: true },
          ],
          points: [{ x: -0.35, y: '20 - 4.9min(s, sqrt(40/9.8))^2', label: 'stone', color: 'red' }],
          sliders: [{ name: 's', min: 0, max: 2.1, step: 0.005, value: 0, label: 'time $t$ (s)', play: true, speed: 0.6 }],
          readouts: [
            { label: '$y$ (m):', expr: '20 - 4.9min(s, sqrt(40/9.8))^2', digits: 2 },
            { label: '$v_y$ (m/s):', expr: '-9.8min(s, sqrt(40/9.8))', digits: 2 },
          ],
          caption: 'Press ▶. The stone (left track) falls while the $y$–$t$ graph traces a downward-opening parabola. The tangent gets steeper and the red velocity arrow longer: equal times give equal *changes in velocity*, not equal distances.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'One convention per problem',
          text: 'You may choose $+y$ down instead (then $a_y = +g$), which is handy for pure drops. What you may not do is mix: writing $y = y_0 + v_0t + \\tfrac12gt^2$ with $+y$ up and $g = +9.80$ makes gravity push things *upward*. If an answer says a dropped stone rises, look for this.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'numeric',
      prompt: 'A climber drops a carabiner from rest off a ledge $45.0\\,\\text{m}$ above the ground. How long does it take to reach the ground? Use $g = 9.80\\,\\text{m/s}^2$, ignore air resistance, and give 3 significant figures.',
      hint: 'From rest: $h = \\tfrac12gt^2$, so $t = \\sqrt{2h/g}$.',
      answer: 'sqrt(2*45/9.8)',
      answerTex: '3.03\\,\\text{s}',
      tolerance: 0.02,
      unit: 's',
      label: '$t =$',
      explanation: 'With $+y$ up and the origin on the ground: $0 = 45.0 - \\tfrac12(9.80)t^2$, so $t = \\sqrt{\\frac{2(45.0)}{9.80}} = 3.03\\,\\text{s}$. Forgetting the $\\tfrac12$ gives $\\sqrt{45.0/9.80} = 2.14\\,\\text{s}$; forgetting the square root gives $9.18$. It lands at $9.80 \\times 3.03 = 29.7\\,\\text{m/s}$.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Throwing straight up: symmetry',
      blocks: [
        {
          type: 'p',
          text: 'Now throw a ball straight up at speed $v_0$. Free fall covers the **whole** flight: the way up, the top and the way down. The acceleration is $g$ downward throughout. On the way up that acceleration opposes the velocity, so the ball slows; on the way down it points along the velocity, so the ball speeds up.',
        },
        {
          type: 'figure',
          svg: FIG_THROW,
          alt: 'Nine snapshots of a ball thrown straight up at 19.6 meters per second, taken every 0.5 seconds and spread sideways for clarity. Red velocity arrows point up and shrink until the top at 2.0 seconds, where there is no velocity arrow, then point down and grow. Green acceleration arrows all point down and all have the same length.',
          caption: 'The snapshots are spread sideways for clarity; the real ball moves straight up and down. Red: velocity, which shrinks, vanishes at the top, then grows downward. Green: acceleration, identical at every instant, **including the top**.',
          maxWidth: 520,
        },
        {
          type: 'derivation',
          title: 'Rise time, maximum height, total time and return speed',
          steps: [
            { tex: 'v_y = v_0 - gt = 0 \\implies t_{\\text{top}} = \\frac{v_0}{g}', why: 'At the top the vertical velocity is zero, for an instant.' },
            { tex: 'H = \\frac{v_0^2}{2g}', why: 'From $v_y^2 = v_0^2 - 2g\\,\\Delta y$ with $v_y = 0$. Or substitute $t_{\\text{top}}$ into $y = v_0t - \\tfrac12gt^2$.' },
            { tex: '0 = v_0t - \\tfrac12gt^2 = t\\left(v_0 - \\tfrac12gt\\right) \\implies t_{\\text{flight}} = \\frac{2v_0}{g} = 2\\,t_{\\text{top}}', why: 'Back at launch height, $y = 0$. The root $t = 0$ is the launch; the other is the landing. The trip down takes as long as the trip up.' },
            { tex: 'v_y(t_{\\text{flight}}) = v_0 - g\\frac{2v_0}{g} = -v_0', why: 'It comes back at the same speed it left with, moving the other way.' },
          ],
          result: 'Thrown up at $19.6\\,\\text{m/s}$: top after $2.00\\,\\text{s}$ at $19.6\\,\\text{m}$, back down after $4.00\\,\\text{s}$ at $19.6\\,\\text{m/s}$. At each height the speed is the same going up and coming down.',
        },
        {
          type: 'graph',
          x: [-0.8, 5.3],
          y: [-11, 33],
          functions: [{ expr: 'w*x - 4.9x^2', label: '$y(t)$ (m)', color: 'blue', domain: [0, '2w/9.8'] }],
          segments: [
            { from: [-0.4, '(w*min(s, 2w/9.8) - 4.9min(s, 2w/9.8)^2)'], to: ['min(s, 2w/9.8)', '(w*min(s, 2w/9.8) - 4.9min(s, 2w/9.8)^2)'], color: 'gray', dashed: true },
            { from: [-0.25, '(w*min(s, 2w/9.8) - 4.9min(s, 2w/9.8)^2)'], to: [-0.25, '(w*min(s, 2w/9.8) - 4.9min(s, 2w/9.8)^2) + 0.4*(w - 9.8min(s, 2w/9.8))'], color: 'red', arrow: true },
            { from: [-0.6, '(w*min(s, 2w/9.8) - 4.9min(s, 2w/9.8)^2)'], to: [-0.6, '(w*min(s, 2w/9.8) - 4.9min(s, 2w/9.8)^2) - 0.4*9.8'], color: 'green', arrow: true },
          ],
          points: [
            { x: -0.4, y: '(w*min(s, 2w/9.8) - 4.9min(s, 2w/9.8)^2)', color: 'blue' },
            { x: 'min(s, 2w/9.8)', y: '(w*min(s, 2w/9.8) - 4.9min(s, 2w/9.8)^2)', color: 'blue' },
          ],
          hlines: [{ y: 'w^2/19.6', color: 'gray', label: 'H' }],
          sliders: [
            { name: 's', min: 0, max: 5.2, step: 0.01, value: 0, label: 'time $t$ (s)', play: true, speed: 1.3 },
            { name: 'w', min: 5, max: 25, step: 0.5, value: 19.6, label: 'launch speed $v_0$ (m/s)' },
          ],
          readouts: [
            { label: '$v_y$ (m/s):', expr: 'w - 9.8min(s, 2w/9.8)', digits: 2 },
            { label: '$a_y$ (m/s²):', expr: '-9.8', digits: 2 },
            { label: '$H = v_0^2/2g$ (m):', expr: 'w^2/19.6', digits: 2 },
          ],
          caption: 'Press ▶ (sped up 1.3×). On the track at the left: the ball, its velocity (red) and its acceleration (green). The red arrow shrinks to nothing at the top while the green one never changes.',
        },
        {
          type: 'graph',
          x: [-0.2, 5.3],
          y: [-26, 26],
          height: 220,
          functions: [{ expr: 'w - 9.8x', label: '$v_y(t) = v_0 - gt$ (m/s)', color: 'red', domain: [0, '2w/9.8'] }],
          points: [{ x: 'min(s, 2w/9.8)', y: 'w - 9.8min(s, 2w/9.8)', color: 'red' }],
          hlines: [{ y: 0, color: 'gray' }],
          sliders: [
            { name: 's', min: 0, max: 5.2, step: 0.01, value: 0, label: 'time $t$ (s)', play: true, speed: 1.3 },
            { name: 'w', min: 5, max: 25, step: 0.5, value: 19.6, label: 'launch speed $v_0$ (m/s)' },
          ],
          readouts: [{ label: 'slope $= a_y$ (m/s²):', expr: '-9.8', digits: 2 }],
          caption: 'The velocity graph is one straight line of slope $-g$. It passes through zero at the top without bending: nothing special happens to the acceleration there.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'mcq',
      prompt: 'A ball is thrown straight up. At the very top of its flight, what is its acceleration? (Ignore air resistance.)',
      options: [
        { text: 'Zero, because the ball is momentarily at rest', why: 'This is the classic misconception. Zero *velocity* does not mean zero acceleration. If $a$ were zero at the top, the velocity would stay zero and the ball would hover there.' },
        { text: '$9.80\\,\\text{m/s}^2$ downward', correct: true, why: 'Gravity acts throughout the flight. At the top the velocity is passing through zero, from positive to negative, at the rate $g$.' },
        { text: '$9.80\\,\\text{m/s}^2$ upward', why: 'Gravity always pulls down. An upward acceleration would require an upward push, which nothing provides once the ball leaves your hand.' },
        { text: 'It changes direction from upward to downward at the top', why: 'The *velocity* changes direction at the top; the acceleration is $g$ downward the entire time.' },
      ],
      explanation: 'Acceleration is the rate of change of velocity. Just before the top the velocity is slightly positive, just after slightly negative, and it is changing at $-9.80\\,\\text{m/s}^2$ throughout. The $v$–$t$ graph is a straight line with slope $-g$ that passes through zero at the top without kinking.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'numeric',
      prompt: 'A signal flare is fired straight up at $60.0\\,\\text{m/s}$. Ignoring air resistance, how high above the launch point does it rise? Use $g = 9.80\\,\\text{m/s}^2$ and give 3 significant figures.',
      hint: 'At the top $v_y = 0$. Use $v_y^2 = v_0^2 - 2gH$.',
      answer: '60^2/(2*9.8)',
      answerTex: '184\\,\\text{m}',
      tolerance: 1.2,
      unit: 'm',
      label: '$H =$',
      explanation: '$H = \\frac{v_0^2}{2g} = \\frac{(60.0)^2}{2(9.80)} = 184\\,\\text{m}$, reached after $\\frac{60.0}{9.80} = 6.12\\,\\text{s}$. Forgetting the $2$ gives $367\\,\\text{m}$. A real flare tops out well below $184\\,\\text{m}$: at $60\\,\\text{m/s}$ air drag on a light object is substantial, which is why ballistics needs more than the kinematic equations (see the drag lesson).',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'concept',
      title: 'Throws from a height: choosing the right root',
      blocks: [
        {
          type: 'p',
          text: 'When launch and landing heights differ, the position equation is a full quadratic in $t$. Solve it with the quadratic formula, then *think* about which root is physical.',
        },
        {
          type: 'figure',
          svg: FIG_CLIFF,
          alt: 'A cliff 30.0 meters high. A ball at its edge is thrown straight up at 15.0 meters per second, rises to 41.5 meters, then falls past the cliff edge to the ground at y equals 0. A vertical axis on the right marks y equals 0, 30.0 and 41.5 meters, and a green arrow shows the acceleration a equals minus g.',
          caption: 'Origin on the ground, $+y$ up: $y_0 = +30.0\\,\\text{m}$, $v_{0y} = +15.0\\,\\text{m/s}$, $a_y = -9.80\\,\\text{m/s}^2$.',
          maxWidth: 500,
        },
        {
          type: 'derivation',
          title: 'When does the ball hit the ground?',
          steps: [
            { tex: '0 = 30.0 + 15.0\\,t - 4.90\\,t^2', why: 'Set $y = 0$ in $y = y_0 + v_{0y}t - \\tfrac12gt^2$. One equation covers the whole flight, up and down.' },
            { tex: '4.90\\,t^2 - 15.0\\,t - 30.0 = 0', why: 'Standard form $at^2 + bt + c = 0$.' },
            { tex: 't = \\frac{15.0 \\pm \\sqrt{(15.0)^2 + 4(4.90)(30.0)}}{2(4.90)} = \\frac{15.0 \\pm 28.5}{9.80}', why: 'Quadratic formula. The discriminant is $225 + 588 = 813$.' },
            { tex: 't = 4.44\\,\\text{s} \\quad \\text{or} \\quad t = -1.38\\,\\text{s}', why: 'The positive root is the landing. The negative root is when a ball on this same parabola would have had to leave the *ground* to pass the cliff top at $15.0\\,\\text{m/s}$ upward at $t = 0$. It is mathematically valid, physically irrelevant here.' },
            { tex: 'v_y = 15.0 - 9.80(4.44) = -28.5\\,\\text{m/s}', why: 'Impact velocity. Check: $\\sqrt{v_0^2 + 2gh} = \\sqrt{225 + 588} = 28.5$. ✓ (The same $28.5$ as the square root of the discriminant: no coincidence.)' },
          ],
          result: 'The ball rises for $1.53\\,\\text{s}$ to $41.5\\,\\text{m}$, then falls, landing $4.44\\,\\text{s}$ after the throw at $28.5\\,\\text{m/s}$.',
        },
        {
          type: 'graph',
          x: [-1.6, 4.8],
          y: [-3, 45],
          functions: [
            { expr: '30 + 15x - 4.9x^2', label: '$y(t)$, the flight', color: 'blue', domain: [0, 4.4401] },
            { expr: '30 + 15x - 4.9x^2', label: 'same parabola before $t = 0$', color: 'gray', dashed: true, domain: [-1.3789, 0] },
          ],
          points: [
            { x: 'min(s, 4.4401)', y: '30 + 15min(s, 4.4401) - 4.9min(s, 4.4401)^2', color: 'red' },
            { x: 4.4401, y: 0, label: '4.44 s', color: 'blue' },
            { x: -1.3789, y: 0, label: '−1.38 s', color: 'gray', open: true },
          ],
          hlines: [{ y: 30, label: 'cliff top', color: 'gray' }],
          vlines: [{ x: 'min(s, 4.4401)', color: 'gray' }],
          sliders: [{ name: 's', min: 0, max: 4.6, step: 0.01, value: 0, label: 'time $t$ (s)', play: true, speed: 1.2 }],
          readouts: [
            { label: '$y$ (m):', expr: '30 + 15min(s, 4.4401) - 4.9min(s, 4.4401)^2', digits: 2 },
            { label: '$v_y$ (m/s):', expr: '15 - 9.8min(s, 4.4401)', digits: 2 },
          ],
          caption: 'Horizontal: time (s); vertical: height (m). Both roots of the quadratic are where the parabola meets $y = 0$. Only the one after the throw belongs to this problem; the dashed part is the parabola continued backward in time.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Check with a limiting case',
          text: 'Set $v_0 = 0$ in the root: $t = \\frac{\\sqrt{4(4.90)(30.0)}}{9.80} = \\sqrt{2(30.0)/9.80} = 2.47\\,\\text{s}$, the plain drop time. Set $y_0 = 0$: the roots become $0$ and $2v_0/g$, the symmetric throw. A formula that passes both checks is very likely right.',
        },
      ],
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'error',
      prompt: 'A ball is thrown upward at $10.0\\,\\text{m/s}$ from a $15.0\\,\\text{m}$ rooftop. A student finds its height after $2.00\\,\\text{s}$. Tap the first wrong line.',
      lines: [
        'Take $+y$ up with the origin at the ground: $y_0 = 15.0\\,\\text{m}$, $v_{0y} = +10.0\\,\\text{m/s}$.',
        'Gravity: $a_y = +9.80\\,\\text{m/s}^2$.',
        '$y = y_0 + v_{0y}t + \\tfrac12a_yt^2 = 15.0 + 10.0(2.00) + \\tfrac12(9.80)(2.00)^2$',
        '$y = 15.0 + 20.0 + 19.6 = 54.6\\,\\text{m}$',
      ],
      errorLines: [2],
      explanation: 'With $+y$ up, gravity points in the negative direction: $a_y = -9.80\\,\\text{m/s}^2$. Correctly, $y = 15.0 + 20.0 - 19.6 = 15.4\\,\\text{m}$: the ball has risen and come almost back down to roof level. The student\'s ball keeps accelerating upward forever, a clear sign that gravity\'s sign is wrong.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'expr',
      prompt: 'A ball is launched straight up with speed $v$ under gravity $g$ (no air resistance). Find the time it takes to come back to its launch height, in terms of $v$ and $g$.',
      label: '$t_{\\text{flight}} =$',
      answer: '2v/g',
      answerTex: 't_{\\text{flight}} = \\frac{2v}{g}',
      variables: ['v', 'g'],
      domain: [0.5, 3],
      hint: 'Set $y = vt - \\tfrac12gt^2$ equal to zero and factor out $t$.',
      explanation: '$0 = t\\left(v - \\tfrac12gt\\right)$ gives $t = 0$ (the launch) or $t = \\frac{2v}{g}$. That is twice the rise time $v/g$: the fall mirrors the rise. Check dimensions: $[L T^{-1}]/[L T^{-2}] = [T]$. ✓ A common slip is $v/g$, which only gets the ball to the top.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'Motion graphs of a bouncing ball',
      blocks: [
        {
          type: 'p',
          text: 'A bouncing ball is a great test of graph reading. Between bounces it is in free fall, so each arc of $y(t)$ is a downward parabola and $v_y(t)$ is a line of slope $-g$. At each bounce the floor pushes hard for a few milliseconds and the velocity flips from downward to upward almost instantly.',
        },
        {
          type: 'graph',
          x: [-0.05, 3.7],
          y: [-0.2, 2.1],
          height: 210,
          functions: [{ expr: `1.8 - 4.9*${U('x')}^2`, label: '$y(t)$ (m)', color: 'blue', domain: [0, 3.65] }],
          points: [{ x: 's', y: `1.8 - 4.9*${U('s')}^2`, color: 'blue' }],
          sliders: [{ name: 's', min: 0, max: 3.6, step: 0.005, value: 0, label: 'time $t$ (s)', play: true, speed: 0.9 }],
          readouts: [{ label: '$y$ (m):', expr: `1.8 - 4.9*${U('s')}^2`, digits: 2 }],
          caption: 'Height: identical parabolic arcs (perfectly elastic bounces from $1.8\\,\\text{m}$). The sharp corners at the floor are the bounces.',
        },
        {
          type: 'graph',
          x: [-0.05, 3.7],
          y: [-7, 7],
          height: 210,
          functions: [{ expr: `-9.8*${U('x')}`, label: '$v_y(t)$ (m/s)', color: 'red', domain: [0, 3.65] }],
          points: [{ x: 's', y: `-9.8*${U('s')}`, color: 'red' }],
          hlines: [{ y: 0, color: 'gray' }],
          sliders: [{ name: 's', min: 0, max: 3.6, step: 0.005, value: 0, label: 'time $t$ (s)', play: true, speed: 0.9 }],
          readouts: [{ label: '$v_y$ (m/s):', expr: `-9.8*${U('s')}`, digits: 2 }],
          caption: 'Velocity: a sawtooth. Every sloped piece has slope $-9.80\\,\\text{m/s}^2$, crossing zero at each top. Each near-vertical jump, from $-5.94$ to $+5.94\\,\\text{m/s}$, is a bounce.',
        },
        {
          type: 'graph',
          x: [-0.05, 3.7],
          y: [-12, 4],
          height: 170,
          functions: [{ expr: '-9.8', label: '$a_y(t)$ (m/s²) between bounces', color: 'green', domain: [0, 3.65] }],
          vlines: [
            { x: T, color: 'orange', label: 'bounce' },
            { x: `3*${T}`, color: 'orange', label: 'bounce' },
            { x: `5*${T}`, color: 'orange', label: 'bounce' },
          ],
          caption: 'Acceleration: $-g$ at all times except during each bounce, when it is a huge upward spike (around $+1000\\,\\text{m/s}^2$ for a contact lasting about $10\\,\\text{ms}$). The spike\'s area is the $+11.9\\,\\text{m/s}$ jump in velocity.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Bounces in a game engine',
          text: 'Physics engines do not simulate those milliseconds of squashing. They detect that the ball has penetrated the floor during a frame and simply flip the normal component of its velocity, multiplied by a restitution coefficient: `v.y = -e * v.y`. That is the near-vertical jump in the $v$–$t$ graph, done in one step. The game-physics unit builds this collision response properly.',
        },
      ],
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'fill',
      prompt: 'Describe the motion graphs of a ball thrown straight up and caught at the same height.',
      template: 'The $y$–$t$ graph is a ___. The $v_y$–$t$ graph is a ___ with slope ___. At the top, the velocity is ___ and the acceleration is ___.',
      blanks: [
        { answers: ['downward-opening parabola'] },
        { answers: ['straight line'] },
        { answers: ['$-g$', '$-g$ (downward)'] },
        { answers: ['zero'] },
        { answers: ['$-g$ (downward)', '$-g$'] },
      ],
      wordBank: ['downward-opening parabola', 'straight line', '$-g$', 'zero', '$-g$ (downward)', 'upward-opening parabola', 'horizontal line', '$+g$', 'zero too'],
      explanation: '$y = v_0t - \\tfrac12gt^2$ is quadratic with a negative leading coefficient: a downward-opening parabola. Its derivative $v_y = v_0 - gt$ is linear with slope $-g$. At the top $v_y = 0$, but the slope of $v_y(t)$, which is the acceleration, is still $-g$. "Zero too" is the misconception this lesson keeps confronting.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'concept',
      title: 'When the acceleration is not constant: integrate $a(t)$',
      blocks: [
        {
          type: 'p',
          text: 'Free fall is the textbook case of constant acceleration, but many motions are not. A rocket\'s acceleration grows as it burns off fuel; a skydiver\'s shrinks as drag builds up. Then the kinematic equations are simply wrong. Go back to the definitions and integrate, as in the first lesson of this unit.',
        },
        {
          type: 'derivation',
          title: 'A model rocket\'s net upward acceleration is $a(t) = 20 + 5t$ (in $\\text{m/s}^2$) during a $2.00\\,\\text{s}$ burn, starting from rest on the ground. Then it coasts in free fall. How high does it go?',
          steps: [
            { tex: 'v(t) = \\int_0^t (20 + 5t\')\\,dt\' = 20t + 2.5t^2', why: 'Starts from rest, $v_0 = 0$. The acceleration increases as fuel burns off, so we cannot use $v = v_0 + at$.' },
            { tex: 'y(t) = \\int_0^t (20t\' + 2.5t\'^2)\\,dt\' = 10t^2 + \\tfrac{5}{6}t^3', why: 'Starts on the ground, $y_0 = 0$.' },
            { tex: 'v(2) = 40 + 10 = 50.0\\,\\text{m/s}, \\qquad y(2) = 40 + 6.67 = 46.7\\,\\text{m}', why: 'Burnout values. These become the initial conditions of the free-fall phase.' },
            { tex: 'H = y(2) + \\frac{v(2)^2}{2g} = 46.7 + \\frac{(50.0)^2}{2(9.80)} = 46.7 + 127.6 = 174\\,\\text{m}', why: 'After burnout $a = -g$ is constant, so now the free-fall result $v_0^2/2g$ applies, starting from $46.7\\,\\text{m}$.' },
          ],
          result: 'Apex $174\\,\\text{m}$, reached at $t = 2.00 + 50.0/9.80 = 7.10\\,\\text{s}$. Using $\\tfrac12at^2$ with $a = 20$ for the burn would give $40\\,\\text{m}$ instead of $46.7\\,\\text{m}$ at burnout: the error comes from pretending $a$ is constant.',
        },
        {
          type: 'graph',
          x: [-0.3, 14],
          y: [-8, 190],
          functions: [{ expr: RY('x'), label: '$y(t)$ (m)', color: 'blue', domain: [0, RLAND] }],
          points: [{ x: `min(s, ${RLAND})`, y: RY(`min(s, ${RLAND})`), color: 'red' }],
          vlines: [{ x: 2, label: 'burnout', color: 'orange' }],
          hlines: [{ y: 174.22, label: 'apex 174 m', color: 'gray' }],
          sliders: [{ name: 's', min: 0, max: 13.5, step: 0.02, value: 0, label: 'time $t$ (s)', play: true, speed: 3 }],
          readouts: [
            { label: '$y$ (m):', expr: RY(`min(s, ${RLAND})`), digits: 1 },
            { label: '$v$ (m/s):', expr: RV(`min(s, ${RLAND})`), digits: 1 },
            { label: '$a$ (m/s²):', expr: RA(`min(s, ${RLAND})`), digits: 1 },
          ],
          caption: 'Press ▶ (3× speed). During the burn the curve bends upward ever more sharply ($a$ growing from $20$ to $30\\,\\text{m/s}^2$); after burnout it is an ordinary free-fall parabola. It lands at $13.1\\,\\text{s}$.',
        },
        {
          type: 'graph',
          x: [-0.3, 14],
          y: [-14, 34],
          height: 200,
          functions: [{ expr: RA('x'), label: '$a(t)$ (m/s²)', color: 'green', domain: [0.0001, RLAND] }],
          areas: [{ expr: RA('x'), from: 0.0001, to: `min(s, ${RLAND})`, color: 'green' }],
          sliders: [{ name: 's', min: 0, max: 13.5, step: 0.02, value: 0, label: 'time $t$ (s)', play: true, speed: 3 }],
          readouts: [{ label: 'signed area $= v(t)$ (m/s):', expr: RV(`min(s, ${RLAND})`), digits: 1 }],
          caption: 'The area under $a(t)$ is the velocity (starting from rest). The trapezoid of the burn adds $50\\,\\text{m/s}$; the free-fall rectangle then removes $9.80\\,\\text{m/s}$ each second.',
        },
        {
          type: 'code',
          title: 'rocket.cpp',
          runnable: true,
          code: `#include <cstdio>

// Net upward acceleration of a model rocket (m/s^2): engine burn for 2 s, then free fall.
double accel(double t) {
    const double g = 9.80;
    return t < 2.0 ? 20.0 + 5.0 * t : -g;
}

int main() {
    const double dt = 0.001;  // 1 ms steps
    double t = 0.0, y = 0.0, v = 0.0;
    double yMax = 0.0, tMax = 0.0;
    while (y >= 0.0) {                           // fly until it hits the ground
        double vNew = v + accel(t + dt / 2) * dt;  // area under a(t): midpoint rectangle
        y += 0.5 * (v + vNew) * dt;              // area under v(t): trapezoid
        v = vNew;
        t += dt;
        if (y > yMax) { yMax = y; tMax = t; }
        if (t > 1.9995 && t < 2.0005)
            std::printf("burnout: t = %.2f s, y = %.2f m, v = %.2f m/s\\n", t, y, v);
    }
    std::printf("apex:    t = %.2f s, y = %.2f m\\n", tMax, yMax);
    std::printf("landing: t = %.2f s, v = %.2f m/s\\n", t, v);
}`,
          output: `burnout: t = 2.00 s, y = 46.67 m, v = 50.00 m/s
apex:    t = 7.10 s, y = 174.22 m
landing: t = 13.06 s, v = -58.44 m/s`,
          annotations: [
            { lines: '4-7', text: 'Any $a(t)$ can go here, even one with no neat antiderivative. This is the advantage of integrating numerically.' },
            { lines: 14, text: 'Velocity grows by the area under $a(t)$ over one step, using the midpoint value of $a$.' },
            { lines: 15, text: 'Position grows by the area under $v(t)$: a trapezoid between the old and new velocity.' },
            { lines: 18, text: 'Record the highest point reached.' },
          ],
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Drag, parachutes and terminal velocity',
          text: 'Air drag makes the acceleration depend on the *velocity* rather than on time, so $a(t)$ is not known in advance. That leads to a differential equation, and to terminal velocity: a skydiver stops speeding up at about $55\\,\\text{m/s}$, and a parachute brings that down to about $5\\,\\text{m/s}$. The friction and drag lesson in the Newton\'s laws unit solves it.',
        },
      ],
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'numeric',
      prompt: 'A test sled starts from rest at $x = 0$ with acceleration $a(t) = 3t^2$ (in $\\text{m/s}^2$, $t$ in seconds). What is its position at $t = 2.0\\,\\text{s}$? Give 2 significant figures.',
      hint: 'Integrate twice: $v(t) = t^3$, then $x(t) = \\tfrac14 t^4$.',
      answer: '2^4/4',
      answerTex: '4.0\\,\\text{m}',
      tolerance: 0.05,
      unit: 'm',
      label: '$x =$',
      explanation: '$v(t) = \\int_0^t 3t\'^2\\,dt\' = t^3$ and $x(t) = \\int_0^t t\'^3\\,dt\' = \\tfrac14t^4$, so $x(2.0) = \\tfrac{16}{4} = 4.0\\,\\text{m}$. Plugging $a(2.0) = 12\\,\\text{m/s}^2$ into $\\tfrac12at^2$ would give $24\\,\\text{m}$, six times too much: that formula assumes the sled had the final acceleration the whole time, but its acceleration started at zero.',
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'order',
      prompt: 'Order the steps for finding a rocket\'s maximum height when its acceleration during the burn is a known function $a(t)$ and it coasts in free fall afterward.',
      lines: [
        'Integrate $a(t)$ over the burn, with $v_0 = 0$, to get $v(t)$',
        'Integrate $v(t)$, with $y_0 = 0$, to get $y(t)$ during the burn',
        'Evaluate $v$ and $y$ at burnout',
        'Use the burnout values as initial conditions for free fall, $a = -g$',
        'Set $v_y = 0$ to find the apex, and evaluate the height there',
      ],
      distractors: ['Apply $y = \\tfrac12at^2$ to the burn using the final acceleration'],
      explanation: 'Each phase needs the right model: integration while $a$ changes, then the constant-acceleration equations once only gravity acts. The phases are stitched together by passing the final state (position and velocity) of one phase as the initial state of the next, the same thing a game engine does every frame. The distractor treats a non-constant acceleration as constant.',
    },
  ],
  takeaways: [
    'In free fall every object, whatever its mass, has acceleration $g = 9.80\\,\\text{m/s}^2$ downward; air resistance is what makes feathers different.',
    'Pick $+y$ up and write $a_y = -g$ with $g > 0$; never mix sign conventions within a problem.',
    'Thrown straight up: $t_{\\text{top}} = v_0/g$, $H = v_0^2/2g$, back at launch height after $2v_0/g$ with speed $v_0$.',
    'At the top of the flight $v = 0$ but $a = -g$: the velocity graph is a straight line through zero.',
    'For launches from a height, solve the quadratic and keep the root that fits the physical situation.',
    'When $a$ depends on time, integrate $a(t)$ (analytically or numerically) instead of using the constant-acceleration equations.',
  ],
  reading: [
    {
      title: 'OpenStax University Physics Volume 1, Section 3.5: Free Fall',
      url: 'https://openstax.org/details/books/university-physics-volume-1',
      source: 'openstax',
      note: 'Free-fall examples with careful sign conventions, plus Section 3.6 on finding velocity and displacement from a non-constant acceleration.',
    },
    {
      title: 'Wikipedia: Free fall',
      url: 'https://en.wikipedia.org/wiki/Free_fall',
      source: 'wikipedia',
      note: 'History from Aristotle to Galileo, the Apollo 15 hammer-and-feather demonstration, and what "free fall" means in orbit.',
    },
    {
      title: 'MIT OCW 8.01SC Classical Mechanics',
      url: 'https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/',
      source: 'other',
      note: 'Week 1 problem sets include free-fall and non-constant acceleration problems solved with calculus.',
    },
  ],
};
