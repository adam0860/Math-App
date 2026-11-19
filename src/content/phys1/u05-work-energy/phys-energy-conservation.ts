import type { Lesson } from '../../types';

const FIG_BARS = /*svg:phys-u05/f5.svg*/`<svg viewBox="0 0 460 205" xmlns="http://www.w3.org/2000/svg"><line x1="20" y1="170" x2="440" y2="170" stroke="currentColor" stroke-width="2"/><text x="40" y="190" font-size="15" text-anchor="middle" font-style="italic">K<tspan font-size="10" dy="4" font-style="normal">i</tspan></text><text x="90" y="190" font-size="15" text-anchor="middle" font-style="italic">U<tspan font-size="10" dy="4" font-style="normal">g,i</tspan></text><rect x="124" y="60.0" width="32" height="110.0" fill="currentColor" class="f-purple" fill-opacity="0.75"/><text x="140" y="190" font-size="15" text-anchor="middle" font-style="italic">U<tspan font-size="10" dy="4" font-style="normal">s,i</tspan></text><text x="225" y="190" font-size="15" text-anchor="middle" font-style="italic">W<tspan font-size="10" dy="4" font-style="normal">ext</tspan></text><text x="310" y="190" font-size="15" text-anchor="middle" font-style="italic">K<tspan font-size="10" dy="4" font-style="normal">f</tspan></text><rect x="344" y="60.0" width="32" height="110.0" fill="currentColor" class="f-blue" fill-opacity="0.75"/><text x="360" y="190" font-size="15" text-anchor="middle" font-style="italic">U<tspan font-size="10" dy="4" font-style="normal">g,f</tspan></text><text x="410" y="190" font-size="15" text-anchor="middle" font-style="italic">U<tspan font-size="10" dy="4" font-style="normal">s,f</tspan></text><line x1="185" y1="40" x2="185" y2="198" stroke="currentColor" class="s-gray" stroke-width="1.5" stroke-dasharray="4 4"/><line x1="265" y1="40" x2="265" y2="198" stroke="currentColor" class="s-gray" stroke-width="1.5" stroke-dasharray="4 4"/><text x="205.0" y="120.0" font-size="22" text-anchor="middle">+</text><text x="287.0" y="120.0" font-size="22" text-anchor="middle">=</text><text x="90.0" y="28.0" font-size="12" text-anchor="middle">initial: spring compressed</text><text x="360.0" y="28.0" font-size="12" text-anchor="middle">final: top of flight</text><text x="225.0" y="28.0" font-size="12" text-anchor="middle">work in</text><text x="140.0" y="54.0" font-size="12" text-anchor="middle" class="t-purple">0.64 J</text><text x="360.0" y="54.0" font-size="12" text-anchor="middle" class="t-blue">0.64 J</text></svg>`;
const FIG_LOOP = /*svg:phys-u05/f6.svg*/`<svg viewBox="0 0 470 215" xmlns="http://www.w3.org/2000/svg"><path d="M20 30 C 90 30, 120 200, 220 200 L 330 200" fill="none" stroke="currentColor" stroke-width="2.5"/><circle cx="330" cy="130" r="70" fill="none" stroke="currentColor" stroke-width="2.5"/><line x1="330" y1="200" x2="460" y2="200" stroke="currentColor" stroke-width="2.5"/><circle cx="330" cy="69" r="9" fill="currentColor" class="f-blue"/><circle cx="34" cy="21" r="9" fill="currentColor" class="f-blue"/><line x1="332.0" y1="74.0" x2="332.0" y2="114.0" stroke="currentColor" class="s-purple" stroke-width="2.5"/><path d="M332.0 124.0 L327.5 114.0 L336.5 114.0 Z" fill="currentColor" class="f-purple"/><text x="338.0" y="112.0" font-size="14" text-anchor="start" class="t-purple" font-style="italic" font-weight="bold">mg</text><line x1="314.0" y1="74.0" x2="314.0" y2="96.0" stroke="currentColor" class="s-green" stroke-width="2.5"/><path d="M314.0 106.0 L309.5 96.0 L318.5 96.0 Z" fill="currentColor" class="f-green"/><text x="307.0" y="104.0" font-size="14" text-anchor="end" class="t-green" font-style="italic" font-weight="bold">n</text><line x1="330.0" y1="54.0" x2="285.0" y2="54.0" stroke="currentColor" class="s-red" stroke-width="2.5"/><path d="M275.0 54.0 L285.0 49.5 L285.0 58.5 Z" fill="currentColor" class="f-red"/><text x="270.0" y="48.0" font-size="14" text-anchor="end" class="t-red" font-style="italic" font-weight="bold">v</text><line x1="330" y1="130" x2="390.6" y2="165.0" stroke="currentColor" class="s-gray" stroke-width="1.5"/><text x="362.0" y="160.0" font-size="14" text-anchor="start" font-style="italic">R</text><line x1="8" y1="21" x2="8" y2="200" stroke="currentColor" class="s-gray" stroke-width="1.5" stroke-dasharray="4 4"/><line x1="8.0" y1="110.0" x2="8.0" y2="31.0" stroke="currentColor" class="s-gray" stroke-width="1.5"/><path d="M8.0 24.0 L11.2 31.0 L4.8 31.0 Z" fill="currentColor" class="f-gray"/><line x1="8.0" y1="120.0" x2="8.0" y2="190.0" stroke="currentColor" class="s-gray" stroke-width="1.5"/><path d="M8.0 197.0 L4.8 190.0 L11.2 190.0 Z" fill="currentColor" class="f-gray"/><text x="16.0" y="118.0" font-size="15" text-anchor="start" font-style="italic">h</text><line x1="410" y1="60" x2="410" y2="200" stroke="currentColor" class="s-gray" stroke-width="1.5" stroke-dasharray="4 4"/><text x="417.0" y="134.0" font-size="14" text-anchor="start" font-style="italic">2R</text></svg>`;

// Thrown ball for the energy-bar animation: speed v (m/s), angle a (degrees), time s (s), mass 0.50 kg.
const TF = '2v*sin(a*pi/180)/9.8';
const TAU = `min(s, ${TF})`;
const BX = `v*cos(a*pi/180)*${TAU}`;
const BY = `v*sin(a*pi/180)*${TAU} - 4.9*(${TAU})^2`;
const KB = `0.25*((v*cos(a*pi/180))^2 + (v*sin(a*pi/180) - 9.8*${TAU})^2)`;
const UB = `0.5*9.8*(${BY})`;
const EB = '0.25v^2';

// Roller-coaster track (heights in m) and the car's energy expressed as a height (E / mg).
const H = '9 + 6cos(pi*x/10) + 0.006x^2';
const HS = '9 + 6cos(pi*s/10) + 0.006s^2';
const EH = '15 + v^2/19.6';
const SPEED = `sqrt(19.6*(15 - (${HS})) + v^2)`;

export const lesson: Lesson = {
  id: 'phys-energy-conservation',
  title: 'Conservation of Energy',
  summary: 'When only conservative forces do work, $K + U$ never changes. Add friction and the missing mechanical energy shows up as thermal energy. With one bookkeeping equation you can solve roller coasters, pendulums, loops and launchers, and know when forces are the better tool.',
  minutes: 20,
  objectives: [
    'Derive conservation of mechanical energy from the work–energy theorem and $\\Delta U = -W_{\\text{c}}$',
    'Solve problems with $K_i + U_i + W_{\\text{nc}} = K_f + U_f$, using energy bar charts to organize them',
    'Account for kinetic friction as $\\Delta E_{\\text{mech}} = -f_k d$, with $d$ the path length, and identify the thermal energy produced',
    'Combine energy with Newton\'s second law for circular motion to analyze a loop-the-loop',
    'Decide when energy methods beat force methods, and when they cannot answer the question',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Mechanical energy is conserved',
      blocks: [
        {
          type: 'p',
          text: 'You now have two facts. The work–energy theorem says the work done by **all** forces changes the kinetic energy. And the work done by **conservative** forces equals $-\\Delta U$. Split the forces into conservative and nonconservative and put the two facts together.',
        },
        {
          type: 'derivation',
          title: 'From the work–energy theorem to energy conservation',
          steps: [
            { tex: 'W_{\\text{c}} + W_{\\text{nc}} = \\Delta K', why: 'Work–energy theorem, with the net work split into conservative and nonconservative parts.' },
            { tex: '-\\Delta U + W_{\\text{nc}} = \\Delta K', why: 'Definition of potential energy: $W_{\\text{c}} = -\\Delta U$ (sum over every conservative force: gravity, springs).' },
            { tex: '\\Delta K + \\Delta U = W_{\\text{nc}}', why: 'Rearrange.' },
            { tex: '\\text{If } W_{\\text{nc}} = 0: \\quad K_i + U_i = K_f + U_f', why: 'With no nonconservative work, the change in $K + U$ is zero.' },
          ],
          result: 'The **mechanical energy** $E_{\\text{mech}} = K + U$ is constant whenever nonconservative forces do no work.',
        },
        {
          type: 'theorem',
          name: 'Conservation of mechanical energy',
          tex: 'K_i + U_i = K_f + U_f \\qquad (W_{\\text{nc}} = 0)',
          text: '[[phys-mechanical-energy|Mechanical energy]] can shift between kinetic and potential forms, but its total stays fixed. Forces that do no work (a normal force on a fixed surface, the tension in a pendulum string) are allowed: they are perpendicular to the motion.',
        },
        {
          type: 'p',
          text: 'Watch it happen. A $0.50\\,\\text{kg}$ ball is thrown from the ground ($g = 9.80\\,\\text{m/s}^2$, no air resistance). The bars on the right are scaled so that the total energy always fills the gray bar.',
        },
        {
          type: 'graph',
          x: [0, 52],
          y: [-1, 22],
          xStep: 5,
          yStep: 5,
          height: 280,
          parametric: [{ x: 'v*cos(a*pi/180)*t', y: 'v*sin(a*pi/180)*t - 4.9t^2', t: [0, TF], color: 'gray', dashed: true }],
          points: [{ x: BX, y: BY, color: 'blue' }],
          segments: [{ from: [BX, BY], to: [`${BX} + 0.4v*cos(a*pi/180)`, `${BY} + 0.4(v*sin(a*pi/180) - 9.8*${TAU})`], color: 'red', arrow: true }],
          areas: [
            { expr: `18*${KB}/(${EB})`, from: 45, to: 47.5, color: 'green' },
            { expr: '18', expr2: `18*${KB}/(${EB})`, from: 45, to: 47.5, color: 'blue' },
            { expr: '18', from: 49, to: 51.5, color: 'gray' },
          ],
          sliders: [
            { name: 'v', min: 5, max: 20, step: 0.5, value: 15, label: 'launch speed $v_0$ (m/s)' },
            { name: 'a', min: 10, max: 90, step: 1, value: 50, label: 'launch angle (degrees)' },
            { name: 's', min: 0, max: 4.1, step: 0.01, value: 0.6, label: 'time $t$ (s)', play: true },
          ],
          readouts: [
            { label: '$K =$', expr: KB, digits: 1 },
            { label: '$U = mgy =$', expr: UB, digits: 1 },
            { label: '$E = K + U =$', expr: `${KB} + ${UB}`, digits: 1 },
          ],
          caption: 'Left bar: $K$ (green) stacked under $U$ (blue); right bar: the total $E$ (gray). Press play: green drains into blue on the way up and flows back on the way down, while $E$ never moves. At the top, $K$ is **not** zero unless you throw straight up: the horizontal velocity (red arrow) remains.',
        },
        {
          type: 'derivation',
          title: 'Speed after falling 20 m from rest',
          steps: [
            { tex: 'K_i + U_i = K_f + U_f \\implies 0 + mgh = \\tfrac12 mv^2 + 0', why: 'Choose $U = 0$ at the bottom. Released from rest, so $K_i = 0$. Air resistance neglected.' },
            { tex: 'v = \\sqrt{2gh} = \\sqrt{2(9.80)(20)} = 19.8\\,\\text{m/s}', why: 'The mass cancels.' },
          ],
          result: 'Every object dropped from $20\\,\\text{m}$ in a vacuum lands at $19.8\\,\\text{m/s}$, whatever its mass. Heavier objects do **not** fall faster: twice the mass means twice the potential energy *and* twice the inertia.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'mcq',
      prompt: 'From the top of a cliff you throw three identical balls with the **same speed**: one straight up, one horizontally and one straight down. Ignoring air resistance, which hits the ground below with the greatest speed?',
      options: [
        { text: 'All three land with the same speed', correct: true, why: 'Each starts with the same $K$ and the same $U$, and falls to the same final height. Energy conservation gives the same final $K$, so the same speed.' },
        { text: 'The one thrown straight down', why: 'It lands *soonest*, but not fastest. The ball thrown up comes back down past the cliff top with the same speed it was thrown at, moving downward.' },
        { text: 'The one thrown straight up', why: 'It goes higher first, but it gains back only what it lost climbing. Its extra height above the cliff contributes nothing net.' },
        { text: 'The one thrown horizontally', why: 'Direction does not enter the energy equation. $K$ depends only on speed.' },
      ],
      explanation: '$\\tfrac12 mv_f^2 = \\tfrac12 mv_0^2 + mgh$ gives $v_f = \\sqrt{v_0^2 + 2gh}$ for all three: same $v_0$, same drop $h$. The directions at impact differ, and so do the flight times, but energy is a scalar and does not care about direction.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'A strategy for energy problems',
      blocks: [
        {
          type: 'steps',
          items: [
            { title: 'Choose the system', text: 'Usually the object plus Earth (so gravity is potential energy) plus any springs.' },
            { title: 'Pick two states', text: 'Sketch the initial and final situations: positions, speeds, spring stretches. Choose the zero of $U_g$.' },
            { title: 'List the nonconservative work', text: 'Friction, drag, pushes and pulls from outside. If there is none, $W_{\\text{nc}} = 0$.' },
            { title: 'Write the energy equation', text: '$K_i + U_{g,i} + U_{s,i} + W_{\\text{nc}} = K_f + U_{g,f} + U_{s,f}$. An energy bar chart helps.' },
            { title: 'Solve and check', text: 'Solve symbolically first, then plug in numbers. Check units, signs and limiting cases.' },
          ],
        },
        {
          type: 'p',
          text: 'A spring launcher points straight up. The spring ($k = 200\\,\\text{N/m}$) is compressed $8.0\\,\\text{cm}$ beneath a $50\\,\\text{g}$ ball. How high above its starting point does the ball rise? Below is the **energy bar chart** (Knight\'s favourite tool): one bar for each energy form, before and after.',
        },
        {
          type: 'figure',
          svg: FIG_BARS,
          alt: 'Energy bar chart. Initial: kinetic 0, gravitational 0, spring 0.64 J. Work in: 0. Final: kinetic 0, gravitational 0.64 J, spring 0.',
          caption: 'Initially all the energy is in the spring; at the top of the flight it is all gravitational. The bars on each side of the equals sign must add up to the same total.',
          maxWidth: 440,
        },
        {
          type: 'derivation',
          title: 'Height reached by the launched ball ($g = 9.80\\,\\text{m/s}^2$)',
          steps: [
            { tex: 'K_i + U_{g,i} + U_{s,i} = K_f + U_{g,f} + U_{s,f}', why: 'No friction or air resistance: $W_{\\text{nc}} = 0$.' },
            { tex: '0 + 0 + \\tfrac12 kx^2 = 0 + mgh + 0', why: '$U_g = 0$ at the starting (compressed) position. At the top of its flight the ball is momentarily at rest and the spring is relaxed.' },
            { tex: 'h = \\frac{kx^2}{2mg} = \\frac{(200)(0.080)^2}{2(0.050)(9.80)}', why: 'Solve symbolically first, then substitute SI values (grams to kilograms, centimetres to metres).' },
            { tex: '= \\frac{1.28}{0.98} = 1.31\\,\\text{m}', why: 'Units: $\\frac{\\text{N/m}\\cdot\\text{m}^2}{\\text{kg}\\cdot\\text{m/s}^2} = \\frac{\\text{N}\\cdot\\text{m}}{\\text{N}} = \\text{m}$.' },
          ],
          result: 'The ball rises $1.31\\,\\text{m}$ above its starting point. No time, no acceleration, no differential equation: the spring force varied, and it did not matter.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why energy methods are so efficient',
          text: 'Energy is a **scalar** and depends only on the **states**, not on what happens in between. You never need the shape of the track, the time taken or how the spring force varied. Everything in the middle is summarized by the work, and for conservative forces even that is replaced by $\\Delta U$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'numeric',
      prompt: 'A pendulum bob on a $2.00\\,\\text{m}$ string is pulled aside until the string makes $35.0^\\circ$ with the vertical, then released from rest. How fast is it moving at the bottom of its swing? Use $g = 9.80\\,\\text{m/s}^2$ and give 3 significant figures.',
      hint: 'The bob starts higher than the bottom by $h = L - L\\cos\\theta$. The string\'s tension is always perpendicular to the motion, so it does no work.',
      answer: 'sqrt(2*9.8*2*(1 - cos(35*pi/180)))',
      answerTex: '2.66\\,\\text{m/s}',
      tolerance: 0.02,
      label: '$v =$',
      unit: 'm/s',
      explanation: 'The bob\'s height above the lowest point is $h = L(1 - \\cos 35.0^\\circ) = 2.00(1 - 0.8192) = 0.362\\,\\text{m}$. Energy conservation: $mgh = \\tfrac12 mv^2$, so $v = \\sqrt{2gh} = \\sqrt{2(9.80)(0.362)} = 2.66\\,\\text{m/s}$. Taking $h = L\\sin\\theta$ or $h = L\\cos\\theta$ is the usual geometry slip; draw the vertical drop from the pivot to see that the bob sits $L\\cos\\theta$ *below the pivot*.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'When friction acts: thermal energy',
      blocks: [
        {
          type: 'p',
          text: 'Kinetic friction does negative work $-f_k d$, where $d$ is the **distance slid along the path** (not the displacement). So mechanical energy drops: $\\Delta E_{\\text{mech}} = -f_k d$. Rub your hands together and you can feel where it goes: the sliding surfaces warm up. The lost mechanical energy becomes [[phys-thermal-energy|thermal energy]].',
        },
        {
          type: 'theorem',
          name: 'Energy with kinetic friction',
          tex: 'K_i + U_i - f_k d = K_f + U_f, \\qquad \\Delta E_{\\text{th}} = f_k d',
          text: 'Including thermal energy, the total $K + U + E_{\\text{th}}$ is conserved. Energy is never created or destroyed; friction just converts the useful mechanical kind into a dispersed kind you cannot easily get back.',
        },
        {
          type: 'graph',
          x: [0, 30],
          y: [0, 110],
          xStep: 5,
          yStep: 20,
          height: 260,
          functions: [
            { expr: 'max(v^2 - 19.6m*x, 0)', label: 'kinetic energy $K$', color: 'green' },
            { expr: 'min(19.6m*x, v^2)', label: 'thermal energy $E_{\\text{th}} = f_k x$', color: 'red' },
            { expr: 'v^2', label: 'total $K + E_{\\text{th}}$', color: 'gray', dashed: true },
          ],
          vlines: [{ x: 'v^2/(19.6m)', label: 'stops', color: 'purple' }],
          sliders: [
            { name: 'v', min: 2, max: 10, step: 0.5, value: 8, label: 'initial speed $v_0$ (m/s)' },
            { name: 'm', min: 0.05, max: 0.8, step: 0.01, value: 0.2, label: 'coefficient of kinetic friction $\\mu_k$' },
          ],
          readouts: [{ label: 'stopping distance $v_0^2/(2\\mu_k g) =$', expr: 'v^2/(19.6m)', digits: 2 }],
          caption: 'A $2.0\\,\\text{kg}$ block slides on a level floor ($g = 9.80\\,\\text{m/s}^2$). Horizontal axis: distance slid (m); vertical: energy (J). Kinetic energy falls linearly with distance, because friction removes $f_k = \\mu_k mg$ joules per metre, and reappears as thermal energy. The total is constant.',
        },
        {
          type: 'derivation',
          title: 'A 20 kg sled on an 8.0 m high hill',
          steps: [
            { tex: 'E_{\\text{mech},i} = mgh = (20)(9.80)(8.0) = 1568\\,\\text{J}', why: 'Starts from rest at the top; $U_g = 0$ at the bottom.' },
            { tex: 'E_{\\text{mech},f} = \\tfrac12 mv^2 = \\tfrac12(20)(10)^2 = 1000\\,\\text{J}', why: 'It reaches the bottom at $10\\,\\text{m/s}$ (measured), not the frictionless $\\sqrt{2gh} = 12.5\\,\\text{m/s}$.' },
            { tex: '-f_k d = 1000 - 1568 = -568\\,\\text{J}', why: 'The missing mechanical energy is the friction work.' },
            { tex: 'f_k = \\frac{568\\,\\text{J}}{40\\,\\text{m}} = 14.2\\,\\text{N}', why: 'The slope is $40\\,\\text{m}$ long, measured along the snow.' },
          ],
          result: 'Friction converted $568\\,\\text{J}$ into thermal energy of the sled\'s runners and the snow, with an average friction force of $14.2\\,\\text{N}$.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Path length, not displacement',
          text: 'A puck that slides 3 m out and 3 m back has zero displacement but loses $f_k \\times 6\\,\\text{m}$. Friction\'s work always uses the total distance slid. This is exactly why friction has no potential energy.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'numeric',
      prompt: 'A $2.00\\,\\text{kg}$ block slides from rest down a ramp $3.00\\,\\text{m}$ long inclined at $30.0^\\circ$. The coefficient of kinetic friction is $0.250$. How fast is it moving at the bottom? Use $g = 9.80\\,\\text{m/s}^2$ and give 3 significant figures.',
      hint: 'Drop height $h = (3.00)\\sin 30.0^\\circ$. Normal force $n = mg\\cos 30.0^\\circ$, so $f_k = \\mu_k mg\\cos 30.0^\\circ$. Then $mgh - f_k d = \\tfrac12 mv^2$.',
      answer: 'sqrt(2*9.8*1.5 - 2*0.25*9.8*cos(30*pi/180)*3)',
      answerTex: '4.08\\,\\text{m/s}',
      tolerance: 0.03,
      label: '$v =$',
      unit: 'm/s',
      explanation: '$mgh = (2.00)(9.80)(1.50) = 29.4\\,\\text{J}$. Friction: $f_k = 0.250 \\times (2.00)(9.80)\\cos 30.0^\\circ = 4.24\\,\\text{N}$, so $f_k d = 12.7\\,\\text{J}$ becomes thermal energy. Then $\\tfrac12(2.00)v^2 = 29.4 - 12.7 = 16.7\\,\\text{J}$ and $v = 4.08\\,\\text{m/s}$. Without friction you would get $5.42\\,\\text{m/s}$; using $n = mg$ instead of $mg\\cos 30^\\circ$ gives $3.83\\,\\text{m/s}$.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'Roller coasters',
      blocks: [
        {
          type: 'p',
          text: 'A roller coaster is energy conservation you can ride. Ignoring friction, the speed anywhere on the track depends only on the height there: $\\tfrac12 mv^2 + mgy = \\tfrac12 mv_0^2 + mgy_0$, so $v = \\sqrt{v_0^2 + 2g(y_0 - y)}$. The track\'s shape, its steepness and the time taken are irrelevant.',
        },
        {
          type: 'graph',
          x: [0, 29.5],
          y: [0, 24],
          xStep: 5,
          yStep: 5,
          height: 280,
          functions: [{ expr: H, domain: [0, 25], color: 'gray', label: 'track height $y(x)$ (m)' }],
          hlines: [{ y: EH, color: 'red', label: 'E / mg' }],
          points: [{ x: 's', y: `${HS} + 0*${SPEED}`, color: 'blue' }],
          areas: [
            { expr: `min(${HS}, ${EH})`, from: 26.5, to: 28.8, color: 'blue' },
            { expr: EH, expr2: `min(${HS}, ${EH})`, from: 26.5, to: 28.8, color: 'green' },
          ],
          sliders: [
            { name: 'v', min: 0, max: 12, step: 0.5, value: 8, label: 'speed at the first crest $v_0$ (m/s)' },
            { name: 's', min: 0, max: 25, step: 0.05, value: 6, label: 'car position along the track $x$ (m)', play: true, speed: 4 },
          ],
          readouts: [
            { label: 'speed $v =$', expr: SPEED, digits: 2 },
            { label: '$K$ (kJ, 500 kg car) $=$', expr: `0.5*500*(${SPEED})^2/1000`, digits: 1 },
            { label: '$U_g$ (kJ) $=$', expr: `500*9.8*(${HS})/1000 + 0*${SPEED}`, digits: 1 },
          ],
          caption: 'Bar on the right: $U_g$ (blue) with $K$ (green) stacked on top, both drawn as "heights" ($U/mg$ and $K/mg$), so together they always reach the red $E/mg$ line. The slider moves the car along the track (it is not real time). Now set $v_0 = 0$: the second crest ($17.4\\,\\text{m}$ high) is higher than the start ($15\\,\\text{m}$), so the car stalls and rolls back, and the readouts go undefined at the crest: the car never gets there (past it, they describe a place the car cannot reach). You need $v_0 \\ge 6.9\\,\\text{m/s}$.',
        },
        {
          type: 'p',
          text: 'Loops add a twist: at the top of a loop of radius $R$, the car is moving in a circle, so the net downward force must supply the centripetal acceleration: $n + mg = mv^2/R$. The track can push ($n \\ge 0$) but cannot pull, so the car stays on only if $v_{\\text{top}}^2 \\ge gR$. Energy then tells you how high to start.',
        },
        {
          type: 'figure',
          svg: FIG_LOOP,
          alt: 'A car starts at rest at height h, rolls down and enters a vertical loop of radius R. At the top of the loop, both the normal force n and the weight mg point down toward the centre; the velocity is horizontal.',
          caption: 'At the top of the loop, both $n$ and $m\\vec g$ point toward the centre. The top is $2R$ above the bottom.',
          maxWidth: 440,
        },
        {
          type: 'derivation',
          title: 'Minimum release height for a loop of radius $R$ (frictionless, from rest)',
          steps: [
            { tex: 'n + mg = \\frac{mv_{\\text{top}}^2}{R}, \\quad n \\ge 0 \\implies v_{\\text{top}}^2 \\ge gR', why: 'Newton\'s second law toward the centre at the top. The barely-making-it case is $n = 0$.' },
            { tex: 'mgh = \\tfrac12 mv_{\\text{top}}^2 + mg(2R)', why: 'Energy conservation from the release point to the top of the loop, with $U_g = 0$ at the bottom.' },
            { tex: 'h = \\frac{v_{\\text{top}}^2}{2g} + 2R \\ge \\frac{gR}{2g} + 2R = \\frac52 R', why: 'Solve for $h$ and insert the minimum $v_{\\text{top}}^2 = gR$.' },
          ],
          result: 'The car must start at least $2.5R$ high, not just $2R$: it needs leftover speed at the top. Forces set the condition; energy connects it to the start.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Why real loops are teardrops',
          text: 'With $h = 2.5R$ the car reaches the bottom with $v^2 = 5gR$, so there $n - mg = mv^2/R$ gives $n = 6mg$: six g\'s. That is why modern coasters use clothoid (teardrop) loops whose radius is large at the bottom and small at the top. Fighter pilots meet the same physics: pulling out of a dive at high speed in a tight radius loads the body with $n = mg + mv^2/R$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'numeric',
      prompt: 'A coaster car starts from rest $30.0\\,\\text{m}$ above the bottom of a vertical loop of radius $10.0\\,\\text{m}$ (frictionless). What normal force does the seat exert on a $60.0\\,\\text{kg}$ rider at the **top** of the loop? Use $g = 9.80\\,\\text{m/s}^2$ and give 3 significant figures.',
      hint: 'Energy: $v_{\\text{top}}^2 = 2g(h - 2R)$. Then at the top $n + mg = mv^2/R$, with both forces pointing down toward the centre.',
      answer: '60*(2*9.8*(30 - 20)/10 - 9.8)',
      answerTex: '588\\,\\text{N}',
      tolerance: 5,
      label: '$n =$',
      unit: 'N',
      explanation: 'The top is $2R = 20.0\\,\\text{m}$ up, so $v_{\\text{top}}^2 = 2(9.80)(30.0 - 20.0) = 196\\,\\text{m}^2/\\text{s}^2$. Toward the centre: $n + mg = mv^2/R = (60.0)(196)/10.0 = 1176\\,\\text{N}$, so $n = 1176 - 588 = 588\\,\\text{N}$, exactly the rider\'s weight. Measuring the drop to the bottom ($30\\,\\text{m}$) instead of to the top gives $2940\\,\\text{N}$; forgetting gravity in the force equation gives $1176\\,\\text{N}$.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'concept',
      title: 'Energy or forces? Choosing a method',
      blocks: [
        {
          type: 'p',
          text: 'Energy and Newton\'s laws are the same physics (you derived one from the other), but they answer different questions efficiently. Experienced problem-solvers pick deliberately.',
        },
        {
          type: 'compare',
          left: {
            title: 'Use energy when…',
            tone: 'good',
            text: 'You want a **speed at a position**, a height reached, a spring compression or a distance slid. Forces vary along the path (springs, curved tracks) but you only care about the endpoints. The path is complicated but the forces doing work are conservative or friction with a known path length.',
          },
          right: {
            title: 'Use forces and kinematics when…',
            tone: 'neutral',
            text: 'You want a **time**, an acceleration, a **direction**, or a force itself (a normal force, a tension, whether a car leaves the track). Energy is a single scalar equation: it gives one unknown and never says when or in which direction.',
          },
        },
        {
          type: 'p',
          text: 'Many problems need both, like the loop: forces for the condition at the top, energy to connect it to the start. Ballistics is another. With air drag, mechanical energy steadily drains, and the energy bookkeeping still balances if you track how much drag has removed. The simulation below integrates a baseball\'s flight with quadratic drag and checks the books every second.',
        },
        {
          type: 'code',
          title: 'drag_energy.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdio>

int main() {
    const double m = 0.145, g = 9.8;     // baseball, kg; m/s^2
    const double c = 0.00088;            // drag constant (1/2) rho Cd A, kg/m
    const double dt = 1e-4;              // s
    const double pi = std::acos(-1.0);
    double x = 0, y = 0;
    double vx = 40 * std::cos(35 * pi / 180), vy = 40 * std::sin(35 * pi / 180);
    double lost = 0;                     // energy removed by drag so far, J
    double t = 0;
    int next = 0;

    std::printf("  t (s)    K (J)    U (J)  lost (J)  K+U+lost\\n");
    while (y >= 0) {
        if (t >= next - 1e-9) {
            double K = 0.5 * m * (vx * vx + vy * vy), U = m * g * y;
            std::printf("%7.1f %8.2f %8.2f %8.2f %9.2f\\n", t, K, U, lost, K + U + lost);
            ++next;
        }
        double v = std::sqrt(vx * vx + vy * vy);
        double Fx = -c * v * vx, Fy = -c * v * vy - m * g;   // drag opposes velocity
        lost += c * v * v * v * dt;          // drag power F.v = -c v^3, so this much leaves
        vx += Fx / m * dt;
        vy += Fy / m * dt;
        x += vx * dt;
        y += vy * dt;
        t += dt;
    }
    std::printf("lands at x = %.1f m (no air: %.1f m)\\n", x, 40.0 * 40.0 * std::sin(70 * pi / 180) / g);
}`,
          output: `  t (s)    K (J)    U (J)  lost (J)  K+U+lost
    0.0   116.00     0.00     0.00    116.00
    1.0    58.69    22.80    34.51    116.00
    2.0    38.12    29.04    48.83    116.00
    3.0    36.02    21.43    58.54    116.00
    4.0    44.41     1.80    69.79    116.00
lands at x = 95.5 m (no air: 153.4 m)`,
          annotations: [
            { lines: 6, text: 'Quadratic drag $F = cv^2$, opposite to the velocity, with a typical value for a baseball.' },
            { lines: 23, text: 'Drag force components: $-cv\\,v_x$ and $-cv\\,v_y$, so the vector is $-cv\\,\\vec v$.' },
            { lines: 24, text: 'Rate of energy loss: $-\\vec F_{\\text{drag}} \\cdot \\vec v = cv^3$ (power, from the previous lesson), times $dt$.' },
            { lines: '25-28', text: 'Semi-implicit Euler step.' },
            { lines: 19, text: 'The last column stays at $116.00\\,\\text{J}$: $K + U$ alone falls, but nothing is unaccounted for.' },
          ],
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Energy as a debugging tool in game physics',
          text: 'Logging total energy is the quickest health check for a physics engine. In a frictionless, drag-free test scene (a pendulum, a bouncing ragdoll limb), $K + U$ should stay nearly constant. If it creeps upward, the integrator or the timestep is injecting energy, and objects will eventually jitter or explode. The game-physics unit returns to this.',
        },
      ],
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'mcq',
      prompt: 'A block is released from rest at the top of a frictionless curved ramp of known height and unknown shape. Which of these can energy conservation **not** tell you?',
      options: [
        { text: 'How long the block takes to reach the bottom', correct: true, why: 'Time depends on the shape: a steep drop and a gentle slope of the same height give the same final speed but very different times. Energy has no time in it.' },
        { text: 'The block\'s speed at the bottom', why: 'This is energy\'s specialty: $v = \\sqrt{2gh}$, whatever the shape.' },
        { text: 'The block\'s speed when it is halfway down in height', why: 'Energy gives the speed at any height: $v = \\sqrt{2g(h/2)}$.' },
        { text: 'How far it compresses a spring of known $k$ at the bottom', why: 'Set $mgh = \\tfrac12 kx^2$ (with $U_g$ measured to the spring\'s level). Energy handles this directly.' },
      ],
      explanation: 'Energy conservation relates speeds, heights and spring deformations between two states. It contains no time and no direction, so questions about *when* or about forces at a point need Newton\'s second law and kinematics, and on an unknown curved ramp those need the shape.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'error',
      prompt: 'A ball is launched at $20.0\\,\\text{m/s}$ at $60.0^\\circ$ above the horizontal. A student uses energy to find its maximum height ($g = 9.80\\,\\text{m/s}^2$, no air resistance). Tap the first line that is wrong.',
      lines: [
        '$K_i + U_i = K_{\\text{top}} + U_{\\text{top}}$',
        '$\\tfrac12 mv_0^2 + 0 = 0 + mgh$',
        '$h = \\dfrac{v_0^2}{2g}$',
        '$h = \\dfrac{(20.0)^2}{2(9.80)} = 20.4\\,\\text{m}$',
      ],
      errorLines: [2],
      explanation: 'Line 2 sets $K_{\\text{top}} = 0$. At the top only the *vertical* velocity is zero; the horizontal component $v_0\\cos 60.0^\\circ = 10.0\\,\\text{m/s}$ remains. Correctly, $\\tfrac12 mv_0^2 = \\tfrac12 m(v_0\\cos\\theta)^2 + mgh$, so $h = \\dfrac{(v_0\\sin\\theta)^2}{2g} = \\dfrac{(17.3)^2}{19.6} = 15.3\\,\\text{m}$. Neither the velocity nor the acceleration is zero at the top of a non-vertical throw; the acceleration is $g$ downward the whole time.',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'truefalse',
      prompt: 'If the net force on an object is zero, its mechanical energy must be conserved.',
      answer: false,
      explanation: 'Push a crate up a ramp at constant speed: the net force is zero, so $K$ is constant, but $U_g$ rises. Your push does positive nonconservative work, and $\\Delta E_{\\text{mech}} = W_{\\text{nc}} > 0$. Mechanical energy is conserved when nonconservative forces do **no work**, which is a different condition from zero net force.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'fill',
      prompt: 'Complete the general energy equation.',
      template: 'In general, $K_i + U_i\\,+$ ___ $= K_f + U_f$. When kinetic friction is the only nonconservative force, that term equals ___, where $d$ is the ___ slid.',
      blanks: [{ answers: ['$W_{\\text{nc}}$'] }, { answers: ['$-f_k d$'] }, { answers: ['path length'] }],
      wordBank: ['$W_{\\text{nc}}$', '$W_{\\text{net}}$', '$-f_k d$', '$+f_k d$', 'path length', 'displacement'],
      explanation: 'Only nonconservative work changes mechanical energy (the conservative work is already in $\\Delta U$; using $W_{\\text{net}}$ would count it twice). Friction removes energy, so its work is $-f_k d$, with $d$ the total distance slid along the path.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'order',
      prompt: 'Order the steps for solving "how fast is the sled at the bottom of the hill?" with energy.',
      lines: [
        'Choose the system (sled + Earth) and the zero of gravitational potential energy, and identify the initial and final states with their heights and speeds',
        'Find the nonconservative work, such as $-f_k d$ for friction, and write $K_i + U_i + W_{\\text{nc}} = K_f + U_f$',
        'Solve for $v_f$, then check units and the frictionless limit',
      ],
      explanation: 'Set up the bookkeeping (system, zero level, states) before writing the equation, and account for every nonconservative force before solving. The final check against the frictionless answer $\\sqrt{v_i^2 + 2gh}$ catches sign errors: friction must make the sled slower, never faster.',
    },
  ],
  takeaways: [
    'Combining $W_{\\text{net}} = \\Delta K$ with $W_{\\text{c}} = -\\Delta U$ gives $\\Delta K + \\Delta U = W_{\\text{nc}}$.',
    'With no nonconservative work, mechanical energy $K + U$ is conserved: speeds depend only on heights and spring stretches, not on path shape or mass.',
    'Kinetic friction removes $f_k d$ of mechanical energy ($d$ = path length) and turns it into thermal energy; $K + U + E_{\\text{th}}$ is always conserved.',
    'Loops need both tools: forces give $v_{\\text{top}}^2 \\ge gR$, energy gives a start height of at least $2.5R$.',
    'Use energy for speeds, heights and distances; use forces and kinematics for times, directions and the forces themselves.',
  ],
  reading: [
    {
      title: 'OpenStax University Physics Volume 1 — Chapter 8: Potential Energy and Conservation of Energy',
      url: 'https://openstax.org/details/books/university-physics-volume-1',
      source: 'openstax',
      note: 'Sections 8.3 and 8.5 cover conservation of mechanical energy, friction and the general conservation law.',
    },
    {
      title: 'PhET Interactive Simulations',
      url: 'https://phet.colorado.edu/',
      source: 'other',
      note: 'Search for "Energy Skate Park": build a track with loops, add friction and watch the thermal energy bar grow.',
    },
    {
      title: 'Wikipedia — Conservation of energy',
      url: 'https://en.wikipedia.org/wiki/Conservation_of_energy',
      source: 'wikipedia',
      note: 'History of the principle from Leibniz\'s *vis viva* to Joule\'s experiments on heat.',
    },
  ],
};
