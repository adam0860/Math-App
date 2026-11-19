import type { Lesson } from '../../types';

const COMPONENTS_SVG = '<svg viewBox="0 25 420 212" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="200" x2="368.8" y2="200" class="s-gray" stroke-width="1.3"/><polyline points="40,200 43.5,195 47.1,190.1 50.6,185.4 54.2,180.7 57.7,176.2 61.3,171.9 64.8,167.6 68.4,163.5 71.9,159.5 75.5,155.7 79,151.9 82.6,148.3 86.1,144.8 89.7,141.5 93.2,138.2 96.8,135.1 100.3,132.2 103.9,129.3 107.4,126.6 111,124 114.5,121.5 118.1,119.2 121.6,117 125.1,114.9 128.7,112.9 132.2,111.1 135.8,109.4 139.3,107.8 142.9,106.3 146.4,105 150,103.8 153.5,102.7 157.1,101.8 160.6,100.9 164.2,100.2 167.7,99.7 171.3,99.2 174.8,98.9 178.4,98.7 181.9,98.7 185.5,98.7 189,98.9 192.6,99.2 196.1,99.7 199.7,100.2 203.2,100.9 206.7,101.8 210.3,102.7 213.8,103.8 217.4,105 220.9,106.3 224.5,107.8 228,109.4 231.6,111.1 235.1,112.9 238.7,114.9 242.2,117 245.8,119.2 249.3,121.5 252.9,124 256.4,126.6 260,129.3 263.5,132.2 267.1,135.1 270.6,138.2 274.2,141.5 277.7,144.8 281.3,148.3 284.8,151.9 288.3,155.7 291.9,159.5 295.4,163.5 299,167.6 302.5,171.9 306.1,176.2 309.6,180.7 313.2,185.4 316.7,190.1 320.3,195 323.8,200" fill="none" class="s-teal" stroke-width="2" stroke-dasharray="6 4"/><line x1="73.3" y1="200" x2="73.3" y2="159.5" class="s-red" stroke-width="1.4" stroke-dasharray="3 3"/><path d="M73.3 152.5 L76.8 159.5 L69.8 159.5 Z" class="f-red"/><line x1="40" y1="200" x2="68.1" y2="159.9" class="s-blue" stroke-width="2.6"/><path d="M73.3 152.5 L71.8 162.4 L64.4 157.3 Z" class="f-blue"/><line x1="40" y1="200" x2="66.3" y2="200" class="s-green" stroke-width="1.8"/><path d="M73.3 200 L66.3 203.5 L66.3 196.5 Z" class="f-green"/><circle cx="40" cy="200" r="4" fill="currentColor"/><line x1="144.2" y1="124" x2="144.2" y2="107.2" class="s-red" stroke-width="1.4" stroke-dasharray="3 3"/><path d="M144.2 100.2 L147.7 107.2 L140.7 107.2 Z" class="f-red"/><line x1="111" y1="124" x2="136.9" y2="105.5" class="s-blue" stroke-width="2.6"/><path d="M144.2 100.2 L139.5 109.1 L134.3 101.8 Z" class="f-blue"/><line x1="111" y1="124" x2="137.2" y2="124" class="s-green" stroke-width="1.8"/><path d="M144.2 124 L137.2 127.5 L137.2 120.5 Z" class="f-green"/><circle cx="111" cy="124" r="4" fill="currentColor"/><line x1="181.9" y1="98.7" x2="208.2" y2="98.7" class="s-green" stroke-width="1.8"/><path d="M215.2 98.7 L208.2 102.2 L208.2 95.2 Z" class="f-green"/><circle cx="181.9" cy="98.7" r="4" fill="currentColor"/><line x1="286.1" y1="124" x2="286.1" y2="140.8" class="s-red" stroke-width="1.4" stroke-dasharray="3 3"/><path d="M286.1 147.8 L282.6 140.8 L289.6 140.8 Z" class="f-red"/><line x1="252.9" y1="124" x2="278.8" y2="142.5" class="s-blue" stroke-width="2.6"/><path d="M286.1 147.8 L276.2 146.2 L281.4 138.9 Z" class="f-blue"/><line x1="252.9" y1="124" x2="279.1" y2="124" class="s-green" stroke-width="1.8"/><path d="M286.1 124 L279.1 127.5 L279.1 120.5 Z" class="f-green"/><circle cx="252.9" cy="124" r="4" fill="currentColor"/><line x1="357.1" y1="200" x2="357.1" y2="240.5" class="s-red" stroke-width="1.4" stroke-dasharray="3 3"/><path d="M357.1 247.5 L353.6 240.5 L360.6 240.5 Z" class="f-red"/><line x1="323.8" y1="200" x2="351.9" y2="240.1" class="s-blue" stroke-width="2.6"/><path d="M357.1 247.5 L348.2 242.7 L355.6 237.6 Z" class="f-blue"/><line x1="323.8" y1="200" x2="350.1" y2="200" class="s-green" stroke-width="1.8"/><path d="M357.1 200 L350.1 203.5 L350.1 196.5 Z" class="f-green"/><circle cx="323.8" cy="200" r="4" fill="currentColor"/><text x="44" y="138" font-size="14" text-anchor="start" class="t-blue"><tspan font-style="italic">v</tspan><tspan font-size="10" dy="3" font-style="normal">0</tspan></text><line x1="44" y1="126.5" x2="51" y2="126.5" class="s-blue" stroke-width="1.1"/><path d="M52.7 126.5 L50.3 124.2 L50.3 128.8 Z" class="f-blue"/><text x="181.9" y="82.7" font-size="12" text-anchor="middle">top: vᵧ = 0, so v = vₓ (horizontal)</text><text x="50" y="222" font-size="13" text-anchor="start" class="t-green"><tspan font-style="italic">v</tspan><tspan font-size="9" dy="3" font-style="normal">x</tspan></text><line x1="50" y1="211.3" x2="56.5" y2="211.3" class="s-green" stroke-width="1.1"/><path d="M58.1 211.3 L55.9 209 L55.9 213.6 Z" class="f-green"/><text x="76" y="221" font-size="11" text-anchor="start" class="t-green">the same at every point</text><text x="150.2" y="116.1" font-size="13" text-anchor="start" class="t-red"><tspan font-style="italic">v</tspan><tspan font-size="9" dy="3" font-style="normal">y</tspan></text><line x1="150.2" y1="105.5" x2="156.7" y2="105.5" class="s-red" stroke-width="1.1"/><path d="M158.3 105.5 L156.1 103.2 L156.1 107.8 Z" class="f-red"/><text x="294.1" y="146" font-size="12" text-anchor="start" class="t-red">vᵧ &lt; 0</text><line x1="372" y1="40" x2="372" y2="73" class="s-purple" stroke-width="2.6"/><path d="M372 82 L367.5 73 L376.5 73 Z" class="f-purple"/><text x="380" y="66" font-size="14" text-anchor="start" class="t-purple"><tspan font-style="italic">a</tspan></text><line x1="380" y1="54.5" x2="387" y2="54.5" class="s-purple" stroke-width="1.1"/><path d="M388.7 54.5 L386.3 52.2 L386.3 56.8 Z" class="f-purple"/><text x="368" y="100" font-size="11" text-anchor="middle" class="t-purple">a = g, down,</text><text x="368" y="114" font-size="11" text-anchor="middle" class="t-purple">at every point</text></svg>';

// Graph helpers (calculator syntax). Sliders: v = launch speed (m/s), a = launch angle (degrees), s = time (s).
const VX = '(v*cos(a*pi/180))';
const VY = '(v*sin(a*pi/180))';
const TF = `(2*${VY}/9.8)`; // flight time on level ground
const M = `min(s, ${TF})`; // clamped time: the ball stops when it lands
const PX = `${VX}*${M}`;
const PY = `(${VY}*${M} - 4.9*${M}^2)`;

// Launch from height h: flight time (positive root of the quadratic).
const TH = `((${VY} + sqrt(${VY}^2 + 19.6h))/9.8)`;
const MH = `min(s, ${TH})`;

// Aiming: target (p, q), speed v. tan(theta) = (v^2 -/+ sqrt(D))/(g p).
const DISC = '(v^4 - 9.8(9.8p^2 + 2q*v^2))';
const K1 = `((v^2 - sqrt(${DISC}))/(9.8p))`;
const K2 = `((v^2 + sqrt(${DISC}))/(9.8p))`;

export const lesson: Lesson = {
  id: 'phys-projectile-motion',
  title: 'Projectile Motion',
  summary: 'A projectile is constant velocity sideways plus free fall downward. Derive the parabolic trajectory, the range and maximum height, handle launches from a height, solve for the launch angle that hits a target (the aiming problem in every artillery game), and see why real ballistic paths are not parabolas.',
  minutes: 20,
  objectives: [
    'Set up projectile motion as two independent 1D motions with $a_x = 0$ and $a_y = -g$',
    'Derive the trajectory $y(x)$, the time of flight, the maximum height and the range $R = v_0^2\\sin 2\\theta/g$',
    'Show with calculus that $45^\\circ$ maximizes range on level ground, and why complementary angles tie',
    'Solve launches from a height using the quadratic formula and the physically correct root',
    'Compute the two launch angles that hit a given target, and explain qualitatively how air drag changes the path',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'The model: free fall plus constant sideways velocity',
      blocks: [
        {
          type: 'p',
          text: 'A [[projectile-motion|projectile]] is anything launched and then left to gravity: a thrown grenade, a basketball, a mortar round, a character mid-jump. You met the vertical part as a quadratic in algebra. Now you can build the whole 2D motion from the last lesson\'s key idea: the $x$ and $y$ motions are independent.',
        },
        {
          type: 'p',
          text: 'The model has four assumptions: $g$ is constant ($9.80\\,\\text{m/s}^2$ downward), there is **no air resistance**, the ground is flat, and the projectile is a point (no spin). Then the only acceleration is $\\vec{a} = -g\\,\\hat{\\jmath}$. Put the launch point at the origin and launch with speed $v_0$ at angle $\\theta$ above horizontal.',
        },
        {
          type: 'derivation',
          title: 'Integrating $\\vec{a} = (0, -g)$',
          steps: [
            { tex: 'v_{0x} = v_0\\cos\\theta, \\qquad v_{0y} = v_0\\sin\\theta', why: 'Resolve the launch velocity into components (trigonometry of the right triangle with hypotenuse $v_0$).' },
            { tex: 'v_x(t) = v_0\\cos\\theta, \\qquad v_y(t) = v_0\\sin\\theta - g t', why: 'Integrate $a_x = 0$ and $a_y = -g$; the initial velocity components are the constants of integration.' },
            { tex: 'x(t) = (v_0\\cos\\theta)\\,t, \\qquad y(t) = (v_0\\sin\\theta)\\,t - \\tfrac12 g t^2', why: 'Integrate once more; launching from the origin makes both constants zero.' },
          ],
          result: 'Horizontally: constant velocity. Vertically: free fall with an initial upward velocity. The shared $t$ is the only link between them.',
        },
        {
          type: 'figure',
          svg: COMPONENTS_SVG,
          alt: 'A dashed parabolic path with five dots. At each dot a green horizontal arrow of the same length (v x), a dashed red vertical arrow (v y) which shrinks to zero at the top and points down afterwards, and a blue arrow for the total velocity tangent to the path. A purple arrow labeled a points down with the note a = g, down, at every point.',
          caption: '$v_x$ (green) never changes. $v_y$ (red) decreases by $9.80\\,\\text{m/s}$ every second, passes through zero at the top and grows downward. The velocity (blue) is always tangent to the path; the acceleration is always $g$ straight down.',
          maxWidth: 460,
        },
        {
          type: 'graph',
          x: [0, 95],
          y: [0, 48],
          equal: true,
          parametric: [
            { x: `${VX}*t`, y: `${VY}*t - 4.9t^2`, t: [0, TF], color: 'gray', dashed: true },
            { x: `${VX}*t`, y: `${VY}*t - 4.9t^2`, t: [0, M], color: 'teal', label: 'path so far' },
          ],
          segments: [
            { from: [PX, PY], to: [`${PX} + 0.8${VX}`, `${PY} + 0.8(${VY} - 9.8${M})`], color: 'blue', arrow: true, label: 'v' },
            { from: [PX, PY], to: [PX, `${PY} - 0.8*9.8`], color: 'purple', arrow: true, label: 'a' },
          ],
          points: [{ x: PX, y: PY, color: 'blue' }],
          sliders: [
            { name: 'v', min: 5, max: 30, step: 0.5, value: 26, label: 'launch speed $v_0$ (m/s)' },
            { name: 'a', min: 5, max: 85, step: 1, value: 55, label: 'launch angle $\\theta$ (degrees)' },
            { name: 's', min: 0, max: 6.2, step: 0.02, value: 0, label: 'time $t$ (s)', play: true },
          ],
          readouts: [
            { label: '$v_x$ (m/s):', expr: VX },
            { label: '$v_y$ (m/s):', expr: `${VY} - 9.8${M}` },
            { label: 'speed (m/s):', expr: `sqrt(${VX}^2 + (${VY} - 9.8${M})^2)` },
            { label: 'flight time (s):', expr: TF },
          ],
          caption: 'Press ▶ (meters and seconds, $g = 9.80\\,\\text{m/s}^2$). The purple acceleration arrow never changes, even at the top. Watch $v_x$ stay fixed while $v_y$ runs down through zero and goes negative; the speed is smallest at the top, where it equals $v_x$. Arrows are drawn at $0.8\\,\\text{m}$ per $\\text{m/s}$ or $\\text{m/s}^2$.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'At the top, $\\vec{a}$ is not zero',
          text: 'At the peak $v_y = 0$, and it is tempting to say the projectile "stops" there. It does not: $v_x$ is still $v_0\\cos\\theta$, and the acceleration is still $g$ downward. If $\\vec{a}$ were zero at the top, $v_y$ would stay zero and the projectile would fly off horizontally forever. Acceleration is the rate of change of velocity, not the velocity itself.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'mcq',
      prompt: 'A grenade is thrown at $40^\\circ$ above the horizontal. Ignoring air resistance, what is its acceleration at the highest point of its path?',
      options: [
        { text: 'Zero, because it momentarily stops rising', why: '$v_y = 0$ at the top, but $v_y$ is changing: it was positive just before and is negative just after. A changing velocity means nonzero acceleration.' },
        { text: '$9.80\\,\\text{m/s}^2$ straight down', correct: true, why: 'Gravity is the only force, so $\\vec{a} = -g\\,\\hat{\\jmath}$ at every point of the flight, the top included.' },
        { text: '$9.80\\,\\text{m/s}^2$ along the direction of motion, which is horizontal at the top', why: 'Nothing pushes the grenade forward after release, so there is no horizontal acceleration: $v_x$ stays constant.' },
        { text: 'Less than $9.80\\,\\text{m/s}^2$, because part of the motion is horizontal', why: 'The horizontal motion does not dilute gravity. The vertical acceleration is the full $g$ regardless of $v_x$.' },
      ],
      explanation: 'With no air resistance, gravity is the only interaction, so $\\vec{a} = (0, -g)$ throughout the flight. At the top the velocity is horizontal (magnitude $v_0\\cos 40^\\circ$) and the acceleration is perpendicular to it, pure "turning" acceleration in the language of the last lesson: the speed is at its minimum there.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Trajectory, flight time, height and range',
      blocks: [
        {
          type: 'p',
          text: 'The equations $x(t)$ and $y(t)$ are [[parametric-equations|parametric equations]] for the path. Eliminating $t$ gives the [[phys-trajectory|trajectory]] as a function $y(x)$, and reveals its shape.',
        },
        {
          type: 'derivation',
          title: 'The path is a parabola',
          steps: [
            { tex: 't = \\frac{x}{v_0\\cos\\theta}', why: 'Solve the horizontal equation for time (valid for $\\theta \\ne 90^\\circ$).' },
            { tex: 'y = v_0\\sin\\theta\\,\\frac{x}{v_0\\cos\\theta} - \\frac{g}{2}\\,\\frac{x^2}{v_0^2\\cos^2\\theta}', why: 'Substitute into $y(t)$.' },
            { tex: 'y = (\\tan\\theta)\\,x - \\frac{g}{2v_0^2\\cos^2\\theta}\\,x^2', why: 'Simplify: $y = bx - cx^2$ with $c > 0$, a downward parabola through the origin.' },
          ],
          result: 'The first term is the straight line the projectile would follow without gravity; the $x^2$ term is how far gravity has pulled it below that line.',
        },
        {
          type: 'derivation',
          title: 'Time of flight, maximum height and range (level ground)',
          steps: [
            { tex: 'v_y = 0 \\implies t_{\\text{top}} = \\frac{v_0\\sin\\theta}{g}', why: 'At the peak the vertical velocity is zero.' },
            { tex: 'H = y(t_{\\text{top}}) = \\frac{v_0^2\\sin^2\\theta}{g} - \\frac{v_0^2\\sin^2\\theta}{2g} = \\frac{v_0^2\\sin^2\\theta}{2g}', why: 'Substitute $t_{\\text{top}}$ into $y(t)$.' },
            { tex: 'y = 0 \\implies t\\left(v_0\\sin\\theta - \\tfrac12 g t\\right) = 0 \\implies T = \\frac{2v_0\\sin\\theta}{g}', why: 'Landing at launch height: the nonzero root. The flight is symmetric, $T = 2t_{\\text{top}}$.' },
            { tex: 'R = v_0\\cos\\theta \\cdot T = \\frac{2v_0^2\\sin\\theta\\cos\\theta}{g} = \\frac{v_0^2\\sin 2\\theta}{g}', why: 'Constant $v_x$ times flight time, then the double-angle identity $2\\sin\\theta\\cos\\theta = \\sin 2\\theta$.' },
          ],
          result: 'For $v_0 = 20\\,\\text{m/s}$ at $50^\\circ$: $T = 3.13\\,\\text{s}$, $H = 12.0\\,\\text{m}$, $R = 40.2\\,\\text{m}$.',
        },
        {
          type: 'theorem',
          name: 'Level-ground projectile',
          tex: 'T = \\frac{2v_0\\sin\\theta}{g}, \\qquad H = \\frac{v_0^2\\sin^2\\theta}{2g}, \\qquad R = \\frac{v_0^2\\sin 2\\theta}{g}',
          text: 'The [[phys-horizontal-range|range formula]] assumes the projectile lands at the height it was launched from. For any other landing height, go back to $x(t)$ and $y(t)$.',
        },
        {
          type: 'graph',
          x: [0, 95],
          y: [0, 48],
          equal: true,
          parametric: [
            { x: `${VX}*t`, y: `${VY}*t - 4.9t^2`, t: [0, TF], color: 'blue', label: 'angle $\\theta$' },
            { x: 'v*cos((90 - a)*pi/180)*t', y: 'v*sin((90 - a)*pi/180)*t - 4.9t^2', t: [0, '2v*sin((90 - a)*pi/180)/9.8'], color: 'orange', dashed: true, label: 'angle $90^\\circ - \\theta$' },
          ],
          points: [
            { x: `${VX}*${VY}/9.8`, y: `${VY}^2/19.6`, color: 'blue', label: 'H' },
            { x: `${VX}*${TF}`, y: 0, color: 'red', label: 'R' },
          ],
          sliders: [
            { name: 'v', min: 5, max: 30, step: 0.5, value: 25, label: 'launch speed $v_0$ (m/s)' },
            { name: 'a', min: 5, max: 85, step: 1, value: 30, label: 'launch angle $\\theta$ (degrees)' },
          ],
          readouts: [
            { label: '$T$ (s):', expr: TF },
            { label: '$H$ (m):', expr: `${VY}^2/19.6` },
            { label: '$R$ at $\\theta$ (m):', expr: 'v^2*sin(2a*pi/180)/9.8' },
            { label: '$R$ at $90^\\circ - \\theta$ (m):', expr: 'v^2*sin(2(90 - a)*pi/180)/9.8' },
          ],
          caption: 'Both paths land at the same point: $\\sin 2\\theta = \\sin(180^\\circ - 2\\theta) = \\sin 2(90^\\circ - \\theta)$. The steeper shot climbs higher and stays up longer. At $\\theta = 45^\\circ$ the two paths merge into the longest one.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'expr',
      prompt: 'A ball is launched from the origin with $v_{0x} = 10\\,\\text{m/s}$ and $v_{0y} = 10\\,\\text{m/s}$. Using $g = 9.80\\,\\text{m/s}^2$, write its trajectory $y$ as a function of $x$ (both in meters).',
      hint: 'Use $t = x/v_{0x}$ in $y = v_{0y}t - \\frac12 g t^2$.',
      label: '$y(x) =$',
      answer: 'x - 0.049x^2',
      answerTex: 'y = x - 0.049x^2',
      domain: [0, 20],
      explanation: '$t = x/10$, so $y = 10\\cdot\\frac{x}{10} - 4.9\\left(\\frac{x}{10}\\right)^2 = x - 0.049x^2$. The coefficient $0.049 = \\frac{g}{2v_{0x}^2}$ only involves the horizontal speed. Check: the ball lands where $y = 0$, at $x = 1/0.049 = 20.4\\,\\text{m}$, which matches $R = v_0^2\\sin 2\\theta/g = 200/9.8$.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Why 45° goes farthest',
      blocks: [
        {
          type: 'p',
          text: 'Launch angle trades flight time against horizontal speed. A low shot moves fast sideways but lands almost at once; a steep shot hangs in the air but barely moves forward. The range $R(\\theta) = \\frac{v_0^2}{g}\\sin 2\\theta$ is a product of the two, and calculus finds the best compromise.',
        },
        {
          type: 'derivation',
          title: 'Maximize $R(\\theta)$ on $0 < \\theta < 90^\\circ$',
          steps: [
            { tex: '\\frac{dR}{d\\theta} = \\frac{2v_0^2}{g}\\cos 2\\theta', why: 'Differentiate with the chain rule ($\\theta$ in radians).' },
            { tex: '\\cos 2\\theta = 0 \\implies 2\\theta = 90^\\circ \\implies \\theta = 45^\\circ', why: 'Set the derivative to zero; $2\\theta$ lies between $0^\\circ$ and $180^\\circ$, so this is the only critical point.' },
            { tex: '\\frac{d^2R}{d\\theta^2} = -\\frac{4v_0^2}{g}\\sin 2\\theta < 0 \\text{ at } 45^\\circ', why: 'Second-derivative test: a maximum.' },
            { tex: 'R_{\\max} = \\frac{v_0^2}{g}', why: 'Substitute $\\sin 90^\\circ = 1$.' },
          ],
          result: 'Range peaks at $45^\\circ$ with $R_{\\max} = v_0^2/g$, and it grows with the **square** of the launch speed.',
        },
        {
          type: 'graph',
          x: [0, 90],
          y: [0, 100],
          xStep: 15,
          yStep: 20,
          height: 260,
          functions: [
            { expr: 'v^2*sin(2x*pi/180)/9.8', color: 'red', label: 'range $R(\\theta)$ (m)' },
            { expr: '(v*sin(x*pi/180))^2/19.6', color: 'blue', dashed: true, label: 'max height $H(\\theta)$ (m)' },
          ],
          points: [{ x: 45, y: 'v^2/9.8', color: 'red', label: '45°' }],
          sliders: [{ name: 'v', min: 5, max: 30, step: 0.5, value: 25, label: 'launch speed $v_0$ (m/s)' }],
          readouts: [{ label: '$R_{\\max} = v_0^2/g$ (m):', expr: 'v^2/9.8' }],
          caption: 'Horizontal axis: launch angle in degrees. The range curve is symmetric about $45^\\circ$ and flat near the top: $40^\\circ$ or $50^\\circ$ loses only $1.5\\%$ of the range. Double $v_0$ and every height on both curves quadruples.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Real artillery and real athletes',
          text: 'The $45^\\circ$ rule is a vacuum result on level ground. Launching from a height lowers the best angle (you will see why on the next card), and so does air drag for most projectiles, while very long-range shells that climb into thin air can do best above $45^\\circ$. Gunners and fire-control computers therefore use range tables measured or simulated with drag, not $R = v_0^2\\sin 2\\theta/g$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'numeric',
      prompt: 'A soccer ball is kicked at $25.0\\,\\text{m/s}$ at $35.0^\\circ$ above level ground. Ignoring air resistance and using $g = 9.80\\,\\text{m/s}^2$, how far away does it land? Give 3 significant figures.',
      hint: 'Level ground: $R = v_0^2\\sin 2\\theta/g$. Make sure your calculator is in degree mode.',
      label: '$R =$',
      unit: 'm',
      answer: '25^2*sin(70*pi/180)/9.8',
      answerTex: '\\frac{(25.0)^2\\sin 70.0^\\circ}{9.80} \\approx 59.9',
      tolerance: 0.45,
      explanation: '$R = \\frac{625\\sin 70^\\circ}{9.80} = \\frac{625 \\times 0.9397}{9.80} \\approx 59.9\\,\\text{m}$. Common slips: $\\sin 35^\\circ$ instead of $\\sin 70^\\circ$ gives $36.6\\,\\text{m}$; a calculator in radian mode gives $49.4\\,\\text{m}$. A real ball with drag and spin would land noticeably shorter.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'Launching from a height',
      blocks: [
        {
          type: 'p',
          text: 'Fire from a cliff, a rooftop or a helicopter and the landing point is below the launch point, so the level-ground formulas no longer apply. Go back to the parametric equations, now with $y_0 = h$, and find when $y = 0$.',
        },
        {
          type: 'derivation',
          title: 'A stone thrown from a 20 m cliff at 15 m/s, 30° above horizontal',
          steps: [
            { tex: 'v_{0x} = 15\\cos 30^\\circ = 12.99\\,\\text{m/s}, \\qquad v_{0y} = 15\\sin 30^\\circ = 7.50\\,\\text{m/s}', why: 'Components of the launch velocity.' },
            { tex: '0 = 20 + 7.50\\,t - 4.90\\,t^2', why: 'Landing condition $y(T) = 0$ with $y(t) = h + v_{0y}t - \\frac12 g t^2$ and $g = 9.80\\,\\text{m/s}^2$.' },
            { tex: 'T = \\frac{7.50 + \\sqrt{7.50^2 + 4(4.90)(20)}}{2(4.90)} = \\frac{7.50 + 21.17}{9.80} = 2.93\\,\\text{s}', why: 'Quadratic formula. Keep the **positive** root: the negative root ($-1.39$ s) is when a stone on this parabola would have been at ground level **before** launch, which is not part of this motion.' },
            { tex: 'R = v_{0x}T = 12.99 \\times 2.926 = 38.0\\,\\text{m}', why: 'Horizontal distance from the foot of the cliff.' },
          ],
          result: 'The stone lands $38.0\\,\\text{m}$ out after $2.93\\,\\text{s}$. In general $T = \\dfrac{v_0\\sin\\theta + \\sqrt{v_0^2\\sin^2\\theta + 2gh}}{g}$.',
        },
        {
          type: 'graph',
          x: [-5, 95],
          y: [0, 65],
          equal: true,
          parametric: [
            { x: `${VX}*t`, y: `h + ${VY}*t - 4.9t^2`, t: [0, TH], color: 'gray', dashed: true },
            { x: `${VX}*t`, y: `h + ${VY}*t - 4.9t^2`, t: [0, MH], color: 'teal' },
          ],
          segments: [{ from: [0, 0], to: [0, 'h'], color: 'gray' }],
          points: [
            { x: `${VX}*${MH}`, y: `h + ${VY}*${MH} - 4.9*${MH}^2`, color: 'blue' },
            { x: 0, y: 'h', color: 'gray', open: true },
          ],
          sliders: [
            { name: 'h', min: 0, max: 30, step: 1, value: 20, label: 'launch height $h$ (m)' },
            { name: 'v', min: 5, max: 25, step: 0.5, value: 15, label: 'launch speed $v_0$ (m/s)' },
            { name: 'a', min: 0, max: 80, step: 1, value: 30, label: 'launch angle $\\theta$ (degrees)' },
            { name: 's', min: 0, max: 5.5, step: 0.02, value: 0, label: 'time $t$ (s)', play: true },
          ],
          readouts: [
            { label: 'flight time $T$ (s):', expr: TH },
            { label: 'range (m):', expr: `${VX}*${TH}` },
            { label: 'best angle $\\arctan\\frac{v_0}{\\sqrt{v_0^2 + 2gh}}$ (°):', expr: 'arctan(v/sqrt(v^2 + 19.6h))*180/pi' },
            { label: 'best range (m):', expr: '(v/9.8)sqrt(v^2 + 19.6h)' },
          ],
          caption: 'The defaults are the worked example. Raise $h$ and the best angle drops below $45^\\circ$: from a height the projectile gets extra flight time for free, so it pays to spend more of $v_0$ on horizontal speed. With $h = 20\\,\\text{m}$ and $v_0 = 15\\,\\text{m/s}$, $30^\\circ$ is almost optimal ($31.1^\\circ$ gives $38.02\\,\\text{m}$).',
        },
        {
          type: 'p',
          text: 'The special case $\\theta = 0$ is a horizontal launch: $T = \\sqrt{2h/g}$, the same as a simple drop, and the horizontal distance is $x = v_0\\sqrt{2h/g}$. That is how an aircraft releasing a supply crate (or a bomb) must "lead" its target: the payload keeps the aircraft\'s horizontal velocity and lands far ahead of the release point.',
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'numeric',
      prompt: 'A transport aircraft flying level at $80.0\\,\\text{m/s}$ and $500\\,\\text{m}$ above flat ground releases a supply crate. Ignoring air resistance and using $g = 9.80\\,\\text{m/s}^2$, how far ahead of the release point (horizontally) does the crate land? Give 3 significant figures.',
      hint: 'The crate starts with the aircraft\'s velocity: $v_{0x} = 80.0\\,\\text{m/s}$, $v_{0y} = 0$. Find the fall time from the vertical motion.',
      label: '$x =$',
      unit: 'm',
      answer: '80*sqrt(2*500/9.8)',
      answerTex: '80.0\\sqrt{\\frac{2(500)}{9.80}} \\approx 808',
      tolerance: 6,
      explanation: 'Vertical: $500 = \\frac12(9.80)T^2$, so $T = \\sqrt{1000/9.80} = 10.1\\,\\text{s}$. Horizontal: $x = 80.0 \\times 10.1 \\approx 808\\,\\text{m}$. Forgetting the $\\frac12$ (using $T = \\sqrt{h/g}$) gives $571\\,\\text{m}$. In reality a crate under a parachute is dominated by drag, which is exactly why the next lessons model it.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'concept',
      title: 'Aiming: which angle hits the target?',
      blocks: [
        {
          type: 'p',
          text: 'Games ask the inverse question constantly. An AI tank, a grenade-throwing enemy, a trajectory preview in an artillery game: the target is at $(x, y)$ relative to the launcher and the launch speed $v$ is fixed by the weapon. What angle should it fire at?',
        },
        {
          type: 'derivation',
          title: 'Solve the trajectory equation for $\\theta$',
          steps: [
            { tex: 'y = x\\tan\\theta - \\frac{g x^2}{2v^2}\\,(1 + \\tan^2\\theta)', why: 'The trajectory equation with $\\frac{1}{\\cos^2\\theta} = 1 + \\tan^2\\theta$.' },
            { tex: '\\frac{g x^2}{2v^2}\\,u^2 - x\\,u + \\left(y + \\frac{g x^2}{2v^2}\\right) = 0, \\qquad u = \\tan\\theta', why: 'Collect terms: a quadratic in $u = \\tan\\theta$.' },
            { tex: '\\tan\\theta = \\frac{v^2 \\pm \\sqrt{v^4 - g\\left(g x^2 + 2y v^2\\right)}}{g x}', why: 'Quadratic formula, then multiply top and bottom by $v^2/x$ to tidy up.' },
          ],
          result: 'Two roots: a flat **direct-fire** arc and a high **lob**. A negative discriminant means the target is out of range at this speed.',
        },
        {
          type: 'graph',
          x: [0, 100],
          y: [-5, 65],
          height: 320,
          parametric: [
            { x: 't', y: `${K1}*t - 4.9t^2*(1 + ${K1}^2)/v^2`, t: [0, 'p'], color: 'blue', label: 'low arc' },
            { x: 't', y: `${K2}*t - 4.9t^2*(1 + ${K2}^2)/v^2`, t: [0, 'p'], color: 'orange', dashed: true, label: 'high arc' },
          ],
          points: [
            { x: 'p', y: 'q', color: 'red', label: 'target' },
            { x: 0, y: 0, color: 'gray' },
          ],
          sliders: [
            { name: 'v', min: 10, max: 35, step: 0.5, value: 30, label: 'launch speed $v$ (m/s)' },
            { name: 'p', min: 10, max: 95, step: 1, value: 60, label: 'target distance $x$ (m)' },
            { name: 'q', min: -5, max: 30, step: 1, value: 5, label: 'target height $y$ (m)' },
          ],
          readouts: [
            { label: 'discriminant (≥ 0 means reachable):', expr: DISC, digits: 0 },
            { label: 'low angle (°):', expr: `arctan(${K1})*180/pi` },
            { label: 'high angle (°):', expr: `arctan(${K2})*180/pi` },
          ],
          caption: 'Both arcs pass through the red target. Push the target out (or lower $v$) until the arcs merge: that is the edge of the reachable region, where the discriminant is zero. Beyond it the curves vanish and the angle readouts become undefined: no angle works.',
        },
        {
          type: 'code',
          title: 'aim.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdio>
#include <numbers>
#include <optional>
#include <utility>

constexpr double g = 9.8;  // m/s^2

// Launch angles (radians) that hit a target at horizontal distance x > 0 and
// height y, with launch speed v. Returns {low, high}, or nothing if out of range.
std::optional<std::pair<double, double>> aimAngles(double v, double x, double y) {
    double v2 = v * v;
    double disc = v2 * v2 - g * (g * x * x + 2.0 * y * v2);
    if (disc < 0.0) return std::nullopt;            // target out of reach
    double root = std::sqrt(disc);
    return std::pair{std::atan((v2 - root) / (g * x)), std::atan((v2 + root) / (g * x))};
}

// Check an angle by stepping the projectile (semi-implicit Euler) until it reaches x.
double heightAt(double v, double angle, double x, double dt) {
    double px = 0, py = 0, vx = v * std::cos(angle), vy = v * std::sin(angle);
    while (px < x) {
        vy -= g * dt;
        px += vx * dt;
        py += vy * dt;
    }
    return py;
}

int main() {
    const double v = 30.0, tx = 60.0, ty = 5.0;   // speed, target position
    constexpr double deg = 180.0 / std::numbers::pi;
    if (auto a = aimAngles(v, tx, ty)) {
        auto [low, high] = *a;
        std::printf("low  arc: %.2f deg, sim height at target %.2f m\\n", low * deg, heightAt(v, low, tx, 1e-4));
        std::printf("high arc: %.2f deg, sim height at target %.2f m\\n", high * deg, heightAt(v, high, tx, 1e-4));
    }
    if (!aimAngles(v, 120.0, 0.0)) std::printf("target at 120 m: out of range (max %.1f m)\\n", v * v / g);
}`,
          output: `low  arc: 26.00 deg, sim height at target 5.00 m
high arc: 68.77 deg, sim height at target 5.00 m
target at 120 m: out of range (max 91.8 m)`,
          annotations: [
            { lines: '11-17', text: 'The formula from the derivation. `std::optional` makes "out of range" impossible to ignore at the call site.' },
            { lines: '20-28', text: 'An independent check: integrate the motion numerically and see where the projectile is when it reaches the target\'s $x$.' },
            { lines: 38, text: 'On level ground the farthest reachable target is $v^2/g$, here $91.8\\,\\text{m}$, so $120\\,\\text{m}$ fails.' },
          ],
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Game-feel gravity: designing a jump',
          text: 'Platformer designers rarely pick $g$ from physics. They choose a jump height $H$ and a time to the apex $t_h$, and solve: from $H = \\frac12 g t_h^2$ and $v_0 = g t_h$ you get $g = 2H/t_h^2$ and $v_0 = 2H/t_h$. A $2.0\\,\\text{m}$ jump that peaks in $0.40\\,\\text{s}$ needs $g = 25\\,\\text{m/s}^2$ (about $2.5$ times real gravity) and a takeoff speed of $10\\,\\text{m/s}$. Many games also use a larger "fall gravity" after the apex so jumps feel snappy rather than floaty: the arc is then two half-parabolas.',
        },
      ],
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'error',
      prompt: 'A ball is kicked at $18.0\\,\\text{m/s}$ at $40.0^\\circ$ above the horizontal. A student computes its maximum height ($g = 9.80\\,\\text{m/s}^2$, no air resistance). Tap the first wrong line.',
      lines: [
        'At the maximum height the vertical velocity is zero: $v_y = 0$.',
        'Use $v_y^2 = v_{0y}^2 - 2gH$ with $v_y = 0$, so $H = \\dfrac{v_{0y}^2}{2g}$.',
        'The initial vertical velocity is $v_{0y} = v_0 = 18.0$ m/s.',
        '$H = \\dfrac{18.0^2}{2(9.80)} = 16.5$ m.',
      ],
      errorLines: [3],
      explanation: 'Only the vertical component of the launch velocity fights gravity: $v_{0y} = v_0\\sin 40^\\circ = 11.57\\,\\text{m/s}$. Then $H = \\frac{11.57^2}{2(9.80)} = 6.83\\,\\text{m}$. Using the full $18.0\\,\\text{m/s}$ is the answer for a ball kicked straight up. Lines 1 and 2 are correct: the speed at the top is not zero, but $v_y$ is.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'Why real trajectories are not parabolas',
      blocks: [
        {
          type: 'p',
          text: 'Everything so far assumed no air. For a slow, dense object over a short distance (a dropped wrench, a shot put) that is a good approximation. For a bullet, an artillery shell, a golf ball or a badminton shuttle it is badly wrong, because air pushes back on anything moving through it with a **drag** force that grows with speed and points opposite the velocity.',
        },
        {
          type: 'list',
          items: [
            '**Shorter and lower.** Drag removes horizontal speed all the way, and it adds to gravity on the way up.',
            '**Asymmetric.** The projectile reaches its peak sooner and closer than halfway, then comes down more steeply than it went up.',
            '**Lower best angle** for most projectiles: speed is precious, so it pays to aim flatter.',
            '**Other effects** at long range: wind, spin (lift on golf balls, the spin drift of rifle rounds), the decrease of air density with altitude, and for artillery even the rotation of the Earth.',
          ],
        },
        {
          type: 'graph',
          x: [0, 130],
          y: [0, 62],
          equal: true,
          parametric: [
            { x: '35cos(a*pi/180)*t', y: '35sin(a*pi/180)*t - 4.9t^2', t: [0, '70sin(a*pi/180)/9.8'], color: 'gray', dashed: true, label: 'no air (parabola)' },
            { x: '35cos(a*pi/180)*k*(1 - e^(-t/k))', y: '(35sin(a*pi/180) + 9.8k)*k*(1 - e^(-t/k)) - 9.8k*t', t: [0, '70sin(a*pi/180)/9.8'], color: 'red', label: 'with linear drag' },
          ],
          sliders: [
            { name: 'a', min: 15, max: 75, step: 1, value: 45, label: 'launch angle $\\theta$ (degrees)' },
            { name: 'k', min: 2, max: 30, step: 0.5, value: 5, label: 'drag time constant $\\tau$ (s); larger = less drag' },
          ],
          readouts: [
            { label: 'terminal speed $g\\tau$ (m/s):', expr: '9.8k' },
            { label: 'vacuum range (m):', expr: '35^2*sin(2a*pi/180)/9.8' },
          ],
          caption: 'Launch speed $35\\,\\text{m/s}$. The red path uses the simplest drag model, a force proportional to velocity, for which $x(t) = v_{0x}\\tau(1 - e^{-t/\\tau})$ has a closed form (derived in the friction-and-drag lesson). With $\\tau = 5\\,\\text{s}$ the range drops from $125\\,\\text{m}$ to about $73\\,\\text{m}$, the apex comes at $2.0\\,\\text{s}$ of a $4.4\\,\\text{s}$ flight, and the best angle falls to about $38^\\circ$. Slide $\\tau$ up and the red path relaxes onto the parabola.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why drag makes the descent steeper',
          text: 'Drag eats horizontal velocity continuously, and nothing replaces it, so $v_x$ is much smaller on the way down than on the way up. Vertically, drag opposes the rise and then opposes the fall, so the projectile climbs to a lower peak quickly and falls more slowly. Small $v_x$ combined with a long fall gives a steep, nearly vertical descent. Mortar and artillery rounds arrive at much steeper angles than they were fired at for this reason.',
        },
        {
          type: 'p',
          text: 'Real bullets and shells feel drag closer to proportional to $v^2$, which has no simple closed form in two dimensions; ballistic calculators integrate it numerically, exactly like the `heightAt` loop above with one more force term. The friction-and-drag lesson in the next unit sets up both drag laws and derives terminal velocity.',
        },
      ],
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'mcq',
      prompt: 'Compared with the vacuum parabola for the same launch speed and angle, what does air drag do to a projectile\'s path?',
      options: [
        { text: 'It shortens the path but keeps it symmetric, like a smaller parabola', why: 'A smaller parabola would still be symmetric. Drag removes horizontal speed throughout the flight, so the second half is compressed and steeper than the first.' },
        { text: 'It lowers the peak, shortens the range, and makes the descent steeper than the ascent', correct: true, why: 'Drag opposes the climb (lower peak), keeps reducing $v_x$ (shorter range), and leaves little $v_x$ for the descent (steeper fall).' },
        { text: 'It only changes the range; the maximum height is set by gravity alone', why: 'On the way up drag acts downward along with gravity, so the projectile decelerates faster vertically and peaks lower.' },
        { text: 'It makes the projectile land farther away because it falls more slowly', why: 'It does fall more slowly at the end, but it has also lost most of its horizontal speed, and the net effect is always a shorter range.' },
      ],
      explanation: 'Drag acts opposite the velocity at every instant. Going up, it has a downward component (adding to gravity) and a backward component. Coming down, its vertical component points up and slows the fall, but the backward component keeps working on $v_x$. The result is the lopsided, shortened path in the graph: a lower peak reached early, then a steep descent.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'truefalse',
      prompt: 'Ignoring air resistance, doubling a projectile\'s launch speed (same angle, level ground) doubles its range.',
      answer: false,
      explanation: '$R = v_0^2\\sin 2\\theta/g$ depends on $v_0^2$, so doubling $v_0$ **quadruples** the range. The reason: doubling $v_0$ doubles both $v_x$ and the flight time $T = 2v_0\\sin\\theta/g$, and range is their product. The maximum height $H = v_0^2\\sin^2\\theta/(2g)$ quadruples too.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'order',
      prompt: 'Order the steps for finding where a projectile launched from a height $h$ lands.',
      lines: [
        'Resolve the launch velocity: $v_{0x} = v_0\\cos\\theta$, $v_{0y} = v_0\\sin\\theta$',
        'Write $y(t) = h + v_{0y}t - \\tfrac12 g t^2$ and set $y(T) = 0$',
        'Solve the quadratic and keep the positive root $T$',
        'Compute the horizontal distance $x = v_{0x}T$',
      ],
      distractors: ['Use $R = v_0^2\\sin 2\\theta/g$ and add $h$'],
      explanation: 'Components first, then the vertical equation alone determines the flight time (the horizontal motion is irrelevant to **when** it lands), then constant $v_x$ gives **where**. The distractor is wrong: the range formula assumes equal launch and landing heights, and adding $h$ to a horizontal distance mixes unrelated quantities.',
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'fill',
      prompt: 'Complete the facts about level-ground projectiles without air resistance.',
      template: 'The range is greatest at a launch angle of ___. Launch angles of $30^\\circ$ and ___ give the same range. At the highest point the vertical velocity is ___ and the acceleration is ___.',
      blanks: [{ answers: ['$45^\\circ$'] }, { answers: ['$60^\\circ$'] }, { answers: ['zero'] }, { answers: ['$g$ downward'] }],
      wordBank: ['$45^\\circ$', '$60^\\circ$', '$90^\\circ$', 'zero', '$g$ downward', '$v_0\\cos\\theta$'],
      explanation: '$R \\propto \\sin 2\\theta$ peaks at $2\\theta = 90^\\circ$. Complementary angles tie because $\\sin 60^\\circ = \\sin 120^\\circ$. At the top $v_y = 0$ (the velocity is the horizontal $v_0\\cos\\theta$), while the acceleration is $g$ downward everywhere along the path.',
    },
  ],
  takeaways: [
    'Projectile motion (no air) is two independent motions: $x = (v_0\\cos\\theta)t$ at constant velocity and $y = (v_0\\sin\\theta)t - \\tfrac12 g t^2$ in free fall, linked only by $t$.',
    '$\\vec{a} = g$ downward at every point, including the top, where $v_y = 0$ but $v_x = v_0\\cos\\theta$.',
    'Level ground: $T = 2v_0\\sin\\theta/g$, $H = v_0^2\\sin^2\\theta/(2g)$, $R = v_0^2\\sin 2\\theta/g$, maximal at $45^\\circ$; range scales as $v_0^2$.',
    'From a height, solve $y(T) = 0$ with the quadratic formula and keep the positive root; the best angle drops below $45^\\circ$.',
    'Aiming: $\\tan\\theta = \\dfrac{v^2 \\pm \\sqrt{v^4 - g(gx^2 + 2yv^2)}}{gx}$ gives a flat arc and a lob, or none if out of range. Drag makes real paths shorter, lower and steeper on the way down.',
  ],
  reading: [
    {
      title: 'OpenStax — University Physics Volume 1, Section 4.3',
      url: 'https://openstax.org/details/books/university-physics-volume-1',
      source: 'openstax',
      note: 'Projectile motion with the same derivations and many solved problems, including launches from heights.',
    },
    {
      title: 'PhET — Projectile Motion simulation',
      url: 'https://phet.colorado.edu/',
      source: 'other',
      note: 'Search for "Projectile Motion": a cannon simulator where you can switch air resistance on and off and compare paths.',
    },
    {
      title: 'Wikipedia — Range of a projectile',
      url: 'https://en.wikipedia.org/wiki/Range_of_a_projectile',
      source: 'wikipedia',
      note: 'The range formula, launches from heights and the optimal-angle results, with derivations.',
    },
    {
      title: 'Wikipedia — Projectile motion',
      url: 'https://en.wikipedia.org/wiki/Projectile_motion',
      source: 'wikipedia',
      note: 'Includes the angle needed to hit a target and the trajectory with linear air resistance.',
    },
  ],
};
