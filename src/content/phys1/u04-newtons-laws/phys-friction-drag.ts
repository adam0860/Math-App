import type { Lesson } from '../../types';

const INCLINE_F_SVG = '<svg viewBox="0 0 400 230" xmlns="http://www.w3.org/2000/svg"><path d="M30 200 L321.4 200 L321.4 45.1 Z" fill="none" stroke="currentColor" stroke-width="2"/><path d="M75 200 A 45 45 0 0 0 69.7 178.9" fill="none" class="s-gray" stroke-width="1.3"/><text x="82" y="192" font-size="13" text-anchor="start">θ</text><path d="M175.7 122.5 L219.8 99.1 L204.8 70.8 L160.7 94.3 Z" class="f-blue" opacity="0.15"/><path d="M175.7 122.5 L219.8 99.1 L204.8 70.8 L160.7 94.3 Z" fill="none" class="s-blue" stroke-width="2"/><line x1="190.2" y1="96.7" x2="190.2" y2="182.7" class="s-purple" stroke-width="2.8"/><path d="M190.2 191.7 L185.7 182.7 L194.7 182.7 Z" class="f-purple"/><text x="196.2" y="193.7" font-size="14" text-anchor="start" class="t-purple" font-style="italic">mg</text><line x1="190.2" y1="96.7" x2="155.1" y2="30.6" class="s-green" stroke-width="2.8"/><path d="M150.9 22.6 L159.1 28.4 L151.1 32.7 Z" class="f-green"/><text x="144.9" y="18.6" font-size="14" text-anchor="end" class="t-green" font-style="italic">n</text><line x1="197.8" y1="110.8" x2="229.2" y2="94.1" class="s-orange" stroke-width="2.8"/><path d="M237.1 89.9 L231.3 98.1 L227.1 90.1 Z" class="f-orange"/><text x="241.1" y="105.9" font-size="14" text-anchor="start" class="t-orange" font-style="italic">f</text><text x="253.1" y="105.9" font-size="11" text-anchor="start" class="t-orange">(up the slope)</text><line x1="190.2" y1="96.7" x2="157.9" y2="113.9" class="s-purple" stroke-width="1.8" stroke-dasharray="5 3"/><path d="M150.9 117.6 L156.1 110.3 L159.8 117.4 Z" class="f-purple"/><text x="142.9" y="133.6" font-size="12" text-anchor="end" class="t-purple">mg sin θ</text><line x1="75" y1="70" x2="117.4" y2="47.5" class="s-gray" stroke-width="1.6"/><path d="M123.6 44.2 L119 50.6 L115.7 44.4 Z" class="f-gray"/><text x="127.6" y="44.2" font-size="12" text-anchor="start" font-style="italic">x</text><line x1="75" y1="70" x2="52.5" y2="27.6" class="s-gray" stroke-width="1.6"/><path d="M49.2 21.4 L55.6 26 L49.4 29.3 Z" class="f-gray"/><text x="45.2" y="21.4" font-size="12" text-anchor="end" font-style="italic">y</text></svg>';
const SKYDIVER_SVG = '<svg viewBox="0 10 400 242" xmlns="http://www.w3.org/2000/svg"><line x1="70" y1="110" x2="70" y2="189" class="s-purple" stroke-width="2.6"/><path d="M70 198 L65.5 189 L74.5 189 Z" class="f-purple"/><text x="78" y="194" font-size="13" text-anchor="start" class="t-purple" font-style="italic">mg</text><circle cx="70" cy="110" r="6" class="f-blue"/><text x="70" y="226" font-size="12" text-anchor="middle">just after the jump</text><text x="70" y="243" font-size="11" text-anchor="middle" class="t-gray">v ≈ 0, a = g</text><line x1="36" y1="102" x2="36" y2="106" class="s-gray" stroke-width="1.6"/><path d="M36 112 L33 106 L39 106 Z" class="f-gray"/><text x="30" y="116" font-size="12" text-anchor="end" font-style="italic">v</text><line x1="200" y1="110" x2="200" y2="189" class="s-purple" stroke-width="2.6"/><path d="M200 198 L195.5 189 L204.5 189 Z" class="f-purple"/><text x="208" y="194" font-size="13" text-anchor="start" class="t-purple" font-style="italic">mg</text><line x1="200" y1="110" x2="200" y2="69.5" class="s-teal" stroke-width="2.6"/><path d="M200 60.5 L204.5 69.5 L195.5 69.5 Z" class="f-teal"/><text x="208" y="70.5" font-size="13" text-anchor="start" class="t-teal" font-style="italic">D</text><circle cx="200" cy="110" r="6" class="f-blue"/><text x="200" y="226" font-size="12" text-anchor="middle">speeding up</text><text x="200" y="243" font-size="11" text-anchor="middle" class="t-gray">D < mg, a < g</text><line x1="166" y1="102" x2="166" y2="122" class="s-gray" stroke-width="1.6"/><path d="M166 128 L163 122 L169 122 Z" class="f-gray"/><text x="160" y="116" font-size="12" text-anchor="end" font-style="italic">v</text><line x1="330" y1="110" x2="330" y2="189" class="s-purple" stroke-width="2.6"/><path d="M330 198 L325.5 189 L334.5 189 Z" class="f-purple"/><text x="338" y="194" font-size="13" text-anchor="start" class="t-purple" font-style="italic">mg</text><line x1="330" y1="110" x2="330" y2="31" class="s-teal" stroke-width="2.6"/><path d="M330 22 L334.5 31 L325.5 31 Z" class="f-teal"/><text x="338" y="32" font-size="13" text-anchor="start" class="t-teal" font-style="italic">D</text><circle cx="330" cy="110" r="6" class="f-blue"/><text x="330" y="226" font-size="12" text-anchor="middle">terminal velocity</text><text x="330" y="243" font-size="11" text-anchor="middle" class="t-gray">D = mg, a = 0</text><line x1="296" y1="102" x2="296" y2="136" class="s-gray" stroke-width="1.6"/><path d="M296 142 L293 136 L299 136 Z" class="f-gray"/><text x="290" y="116" font-size="12" text-anchor="end" font-style="italic">v</text></svg>';

// Friction vs. applied force for a 40 kg crate (n = 392 N). p = mu_s, q = mu_k.
const SLIP = '((1 + sign(x - 392p))/2)';
const FRIC = `(x*(1 - ${SLIP}) + 392q*${SLIP})`;
const FRIC_U = FRIC.split('x').join('u');

// Incline with friction: angle a (degrees), mu_s p, mu_k q. Block fixed halfway up a 10 m ramp.
const TH = '(a*pi/180)';
const BX = `5cos${TH}`;
const BY = `5sin${TH}`;
const SLIPS = `((1 + sign(sin${TH} - p*cos${TH}))/2)`;
const FR = `(sin${TH}*(1 - ${SLIPS}) + q*cos${TH}*${SLIPS})`; // friction in units of mg

// Parachute: free-fall terminal speed 51.6 m/s, canopy terminal speed 5.5 m/s, deploy at time d.
const VD = '(51.6tanh(9.8d/51.6))';
const KD = `(0.5ln((${VD} + 5.5)/(${VD} - 5.5)))`;
const UC = `(9.8(x - d)/5.5 + ${KD})`;

// Baseball trajectory with quadratic drag (from the C++ program / solve_ivp), every 0.5 s, plus the landing point.
const DRAG_PTS: [number, number][] = [
  [0, 0], [17.3, 10.9], [32.7, 18.4], [46.7, 22.8], [59.6, 24.5], [71.5, 23.7], [82.6, 20.6], [93.0, 15.3], [102.6, 8.1], [110.6, 0],
];
const VAC_PTS: [number, number][] = [
  [0, 0], [18.4, 11.7], [36.9, 20.9], [55.3, 27.7], [73.7, 32.0], [92.2, 33.9], [110.6, 33.3], [129.0, 30.3], [147.4, 24.8], [165.9, 16.9],
];

export const lesson: Lesson = {
  id: 'phys-friction-drag',
  title: 'Friction, Drag and Terminal Velocity',
  summary: 'Static friction that adjusts up to a limit and kinetic friction that does not, friction on ramps and in braking, then drag forces in air: linear and quadratic drag, terminal velocity derived from the differential equation, parachutes, and why a real ballistic path is far from a parabola.',
  minutes: 22,
  objectives: [
    'Use $f_s \\le \\mu_s n$ and $f_k = \\mu_k n$ correctly, including when static friction is less than its maximum',
    'Solve incline and braking problems with friction, and explain why anti-lock brakes stop a car sooner',
    'Describe linear and quadratic drag, and compute terminal velocity from the force balance',
    'Solve $m\\,dv/dt = mg - bv$ by separation of variables and interpret the time constant',
    'Integrate a projectile with quadratic drag numerically and compare it with the vacuum parabola',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Static and kinetic friction',
      blocks: [
        {
          type: 'p',
          text: 'Push gently on a heavy crate and it does not move: the floor pushes back along the surface just as hard as you push. Push harder and at some point it breaks free and slides, and then keeping it sliding is easier than starting it. Those are the two regimes of friction, a contact force parallel to the surface.',
        },
        {
          type: 'theorem',
          name: 'The friction model',
          tex: 'f_s \\le \\mu_s n \\qquad\\qquad f_k = \\mu_k n',
          text: '[[phys-static-friction|Static friction]] (no sliding) takes **whatever value** is needed to prevent sliding, up to a maximum $\\mu_s n$. [[phys-kinetic-friction|Kinetic friction]] (sliding) has the fixed size $\\mu_k n$ and points opposite the sliding velocity. The [[phys-coefficient-of-friction|coefficients of friction]] are dimensionless, and usually $\\mu_k < \\mu_s$. As before, $n$ is the normal force.',
        },
        {
          type: 'graph',
          x: [0, 400],
          y: [0, 420],
          height: 270,
          functions: [{ expr: FRIC, color: 'orange', label: 'friction force $f$ (N)' }, { expr: 'x', color: 'gray', dashed: true, label: '$f = F$' }],
          points: [{ x: 'u', y: FRIC_U, color: 'red' }],
          sliders: [
            { name: 'u', min: 0, max: 400, step: 2, value: 150, label: 'your push $F$ (N)' },
            { name: 'p', min: 0.1, max: 1, step: 0.01, value: 0.5, label: '$\\mu_s$' },
            { name: 'q', min: 0.05, max: 1, step: 0.01, value: 0.4, label: '$\\mu_k$ (keep $\\le \\mu_s$)' },
          ],
          readouts: [
            { label: 'friction (N):', expr: FRIC_U },
            { label: 'max static $\\mu_s n$ (N):', expr: '392p' },
            { label: 'acceleration (m/s²):', expr: `(u - ${FRIC_U})/40` },
          ],
          caption: 'A $40\\,\\text{kg}$ crate on a level floor ($n = 392\\,\\text{N}$ with $g = 9.80\\,\\text{m/s}^2$). Below $\\mu_s n$, static friction exactly matches your push (the dashed line) and nothing moves. Past it the crate breaks free, friction drops to $\\mu_k n$, and the excess force accelerates the crate. (Once sliding, friction stays kinetic even if you then push less.)',
        },
        {
          type: 'table',
          headers: ['Surfaces', '$\\mu_s$', '$\\mu_k$'],
          rows: [
            ['Rubber on dry concrete', '$1.0$', '$0.7$'],
            ['Rubber on wet concrete', '$0.5$–$0.7$', '$0.3$–$0.5$'],
            ['Wood on wood', '$0.5$', '$0.3$'],
            ['Steel on steel (dry)', '$0.6$', '$0.3$'],
            ['Steel on steel (oiled)', '$0.05$', '$0.03$'],
            ['Waxed ski on wet snow', '$0.14$', '$0.1$'],
            ['Ice on ice', '$0.1$', '$0.03$'],
            ['Teflon on steel', '$0.04$', '$0.04$'],
          ],
          caption: 'Typical values (after OpenStax Table 6.1). Real coefficients vary a lot with surface finish, temperature and contamination, so treat them as two-significant-figure estimates.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why friction barely depends on contact area',
          text: 'Surfaces touch only at microscopic high points (asperities), where they partially bond. Press harder and the asperities flatten, so the **true** contact area grows in proportion to the normal force, whatever the apparent area. Friction comes from breaking those bonds, so it is proportional to $n$ and roughly independent of the apparent area. Static friction is larger because stationary contacts have time to bond more strongly.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'mcq',
      prompt: 'A $40\\,\\text{kg}$ crate rests on a floor with $\\mu_s = 0.50$, so the maximum static friction is $196\\,\\text{N}$. You push horizontally with $80\\,\\text{N}$ and it does not move. What is the friction force on the crate?',
      options: [
        { text: '$196\\,\\text{N}$, because static friction is $\\mu_s n$', why: '$\\mu_s n$ is the **maximum**. If friction were $196\\,\\text{N}$ against an $80\\,\\text{N}$ push, the crate would accelerate backward toward you.' },
        { text: '$80\\,\\text{N}$, opposite your push', correct: true, why: 'The crate stays at rest, so $\\sum F_x = 0$: friction exactly balances the push.' },
        { text: '$157\\,\\text{N}$, the kinetic friction $\\mu_k n$', why: 'Kinetic friction applies only while the surfaces slide. Nothing is sliding.' },
        { text: '$0\\,\\text{N}$, because the crate is not moving', why: 'Then your $80\\,\\text{N}$ would be unbalanced and the crate would accelerate. Something must cancel it.' },
      ],
      explanation: 'Static friction is a "responsive" force, like the normal force: it takes whatever value the second law requires, up to $\\mu_s n$. Here $a = 0$, so $f_s = 80\\,\\text{N}$. The inequality $f_s \\le \\mu_s n$ tells you only whether the crate **can** stay put; you need $\\sum\\vec{F} = m\\vec{a}$ to find the actual value.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Friction on a ramp',
      blocks: [
        {
          type: 'figure',
          svg: INCLINE_F_SVG,
          alt: 'A block resting on a ramp inclined at angle theta, with tilted x and y axes. Forces from the block: purple weight mg straight down, green normal force n perpendicular to the ramp, and orange static friction f pointing up the slope. A dashed purple component mg sin theta points down the slope.',
          caption: 'At rest on a ramp, static friction points **up** the slope and cancels $mg\\sin\\theta$. The normal force is $mg\\cos\\theta$, so the maximum available friction is $\\mu_s mg\\cos\\theta$.',
          maxWidth: 420,
        },
        {
          type: 'derivation',
          title: 'When does the block start to slide?',
          steps: [
            { tex: 'n = mg\\cos\\theta, \\qquad f_s = mg\\sin\\theta', why: 'Perpendicular and along-slope balance for a block at rest (tilted axes).' },
            { tex: 'mg\\sin\\theta \\le \\mu_s\\, mg\\cos\\theta \\iff \\tan\\theta \\le \\mu_s', why: 'Static friction can hold only if the friction needed does not exceed the maximum.' },
            { tex: '\\theta_{\\text{slip}} = \\arctan\\mu_s', why: 'The critical angle (angle of repose) is independent of mass. Tilting a ramp until a block slips is a standard way to **measure** $\\mu_s$.' },
            { tex: 'a = g(\\sin\\theta - \\mu_k\\cos\\theta) \\quad \\text{once sliding}', why: 'Down-slope second law with kinetic friction $\\mu_k mg\\cos\\theta$ pointing up the slope.' },
          ],
          result: 'With $\\mu_s = 0.50$ the block slips at $26.6^\\circ$; with $\\mu_k = 0.40$ it then accelerates at $9.80(\\sin 26.6^\\circ - 0.40\\cos 26.6^\\circ) = 0.88\\,\\text{m/s}^2$.',
        },
        {
          type: 'graph',
          x: [-1, 11],
          y: [-1, 9.5],
          equal: true,
          segments: [
            { from: [0, 0], to: [`10cos${TH}`, 0], color: 'gray' },
            { from: [`10cos${TH}`, 0], to: [`10cos${TH}`, `10sin${TH}`], color: 'gray' },
            { from: [0, 0], to: [`10cos${TH}`, `10sin${TH}`], color: 'gray' },
            { from: [BX, BY], to: [BX, `${BY} - 3`], color: 'purple', arrow: true, label: 'mg' },
            { from: [BX, BY], to: [`${BX} - 3cos${TH}*sin${TH}`, `${BY} + 3cos${TH}^2 + 0.001`], color: 'green', arrow: true, label: 'n' },
            { from: [BX, BY], to: [`${BX} + 3${FR}*cos${TH} + 0.001`, `${BY} + 3${FR}*sin${TH}`], color: 'orange', arrow: true, label: 'f' },
          ],
          points: [{ x: BX, y: BY, color: 'blue' }],
          sliders: [
            { name: 'a', min: 0, max: 50, step: 0.2, value: 15, label: 'ramp angle $\\theta$ (°)', play: true },
            { name: 'p', min: 0.1, max: 1, step: 0.01, value: 0.5, label: '$\\mu_s$' },
            { name: 'q', min: 0.05, max: 1, step: 0.01, value: 0.4, label: '$\\mu_k$' },
          ],
          readouts: [
            { label: 'friction needed $\\sin\\theta$ (×mg):', expr: `sin${TH}` },
            { label: 'max static $\\mu_s\\cos\\theta$ (×mg):', expr: `p*cos${TH}` },
            { label: 'slip angle $\\arctan\\mu_s$ (°):', expr: 'arctan(p)*180/pi' },
            { label: 'acceleration (m/s²):', expr: `9.8max(sin${TH} - q*cos${TH}, 0)*${SLIPS}` },
          ],
          caption: 'Press ▶ to tilt the ramp slowly (forces in units of $mg$, $3\\,\\text{m}$ per $mg$). The orange friction arrow grows to match $mg\\sin\\theta$ until it hits its ceiling $\\mu_s mg\\cos\\theta$; past the slip angle it drops to the kinetic value $\\mu_k mg\\cos\\theta$ and the block accelerates down the slope.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'numeric',
      prompt: 'A box slides down a ramp inclined at $30.0^\\circ$ with $\\mu_k = 0.200$. Find its acceleration down the ramp, using $g = 9.80\\,\\text{m/s}^2$. Give 3 significant figures.',
      hint: 'Tilted axes: $n = mg\\cos\\theta$, kinetic friction $\\mu_k n$ up the slope, gravity component $mg\\sin\\theta$ down the slope.',
      label: '$a =$',
      unit: 'm/s²',
      answer: '9.8*(sin(pi/6) - 0.2*cos(pi/6))',
      answerTex: '9.80(\\sin 30^\\circ - 0.200\\cos 30^\\circ) \\approx 3.20',
      tolerance: 0.025,
      explanation: '$ma = mg\\sin\\theta - \\mu_k mg\\cos\\theta$, so $a = 9.80(0.500 - 0.200 \\times 0.866) = 9.80 \\times 0.327 = 3.20\\,\\text{m/s}^2$. Using $n = mg$ instead of $mg\\cos\\theta$ gives $2.94\\,\\text{m/s}^2$; forgetting friction gives $4.90\\,\\text{m/s}^2$. Notice that the mass cancels.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Braking, tires and friction in games',
      blocks: [
        {
          type: 'p',
          text: 'A braking car is decelerated by friction from the road on its tires. Which friction depends on whether the wheels are still rolling: a rolling tire\'s contact patch is momentarily at rest on the road (static friction), while a locked, skidding tire slides (kinetic friction).',
        },
        {
          type: 'derivation',
          title: 'Stopping distance',
          steps: [
            { tex: 'n = mg, \\qquad f = \\mu mg \\implies a = -\\mu g', why: 'Level road; friction is the only horizontal force. $\\mu$ is $\\mu_k$ for a skid, up to $\\mu_s$ for rolling tires at the limit of grip.' },
            { tex: '0 = v_0^2 - 2\\mu g\\,d \\implies d = \\frac{v_0^2}{2\\mu g}', why: 'Constant-acceleration relation $v^2 = v_0^2 + 2a\\Delta x$ with final speed zero.' },
            { tex: 'v_0 = 25\\,\\text{m/s}: \\quad d_{\\text{skid}} = \\frac{625}{2(0.7)(9.80)} = 45.6\\,\\text{m}, \\qquad d_{\\mu = 1.0} = 31.9\\,\\text{m}', why: 'Rubber on dry concrete, $\\mu_k = 0.7$ versus $\\mu_s = 1.0$, at about $90\\,\\text{km/h}$.' },
          ],
          result: 'Anti-lock brakes (ABS) release and reapply the brakes many times per second to keep the tires rolling near the limit of static friction. That can cut the braking distance substantially and, just as important, a rolling tire can still steer. The distance is independent of mass and grows with $v_0^2$: double the speed, four times the distance.',
        },
        {
          type: 'graph',
          x: [0, 40],
          y: [0, 120],
          height: 260,
          functions: [
            { expr: 'x^2/(2*0.7*9.8)', color: 'red', label: 'locked wheels, $\\mu_k = 0.7$' },
            { expr: 'x^2/(2*9.8)', color: 'green', label: 'rolling at the grip limit, $\\mu_s = 1.0$' },
            { expr: 'x^2/(2k*9.8)', color: 'blue', dashed: true, label: 'your $\\mu$' },
          ],
          points: [{ x: 'v', y: 'v^2/(2k*9.8)', color: 'blue' }],
          sliders: [
            { name: 'k', min: 0.1, max: 1.2, step: 0.05, value: 0.4, label: 'friction coefficient $\\mu$' },
            { name: 'v', min: 5, max: 40, step: 0.5, value: 25, label: 'initial speed $v_0$ (m/s)' },
          ],
          readouts: [
            { label: 'braking distance (m):', expr: 'v^2/(2k*9.8)' },
            { label: '$v_0$ in km/h:', expr: '3.6v' },
          ],
          caption: 'Horizontal axis: speed in m/s; vertical: braking distance in m (reaction time not included). Wet roads ($\\mu \\approx 0.4$) more than double the distance; ice ($\\mu \\approx 0.1$) is off the chart. Every curve is a parabola because $d \\propto v_0^2$.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Friction in physics engines',
          text: 'PhysX, Havok, Jolt and Box2D implement Coulomb friction just like this: at each contact the solver allows a tangential impulse up to $\\mu$ times the normal impulse. Each material carries a static and a dynamic coefficient, and engines must decide how to **combine** two materials at a contact; PhysX and Unity offer average, minimum, multiply and maximum modes. Character controllers often fake friction instead (snapping velocity to zero when there is no input), because true friction makes characters feel sluggish to start and slow to stop.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'error',
      prompt: 'A $12\\,\\text{kg}$ crate slides down a $35^\\circ$ ramp with $\\mu_k = 0.30$. A student computes the kinetic friction force ($g = 9.80\\,\\text{m/s}^2$). Tap the first wrong line.',
      lines: [
        'The crate is sliding, so friction is kinetic: $f_k = \\mu_k n$.',
        'The normal force is $n = mg = (12)(9.80) = 117.6$ N.',
        'So $f_k = 0.30 \\times 117.6 = 35.3$ N, pointing up the ramp.',
        'Net force down the ramp: $mg\\sin 35^\\circ - f_k = 67.5 - 35.3 = 32.2$ N.',
      ],
      errorLines: [2],
      explanation: 'On a ramp the normal force balances only the perpendicular component of the weight: $n = mg\\cos 35^\\circ = 117.6 \\times 0.819 = 96.3\\,\\text{N}$. Then $f_k = 0.30 \\times 96.3 = 28.9\\,\\text{N}$ and the net force down the ramp is $67.5 - 28.9 = 38.6\\,\\text{N}$ ($a = 3.2\\,\\text{m/s}^2$). "The normal force equals $mg$" strikes again.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'Drag: friction from a fluid',
      blocks: [
        {
          type: 'p',
          text: 'An object moving through air or water has to push the fluid out of the way, and the fluid pushes back: the [[phys-drag-force|drag force]]. It points opposite the velocity **relative to the fluid**, and unlike kinetic friction it depends strongly on speed. Two models cover most situations.',
        },
        {
          type: 'compare',
          left: {
            title: 'Linear drag',
            tone: 'neutral',
            tex: ['\\vec{F}_D = -b\\,\\vec{v}'],
            text: 'Small, slow objects in viscous flow: dust, mist droplets, bacteria, a ball bearing sinking in honey. $b$ depends on size and the fluid\'s viscosity.',
          },
          right: {
            title: 'Quadratic drag',
            tone: 'neutral',
            tex: ['F_D = \\tfrac12 C\\rho A v^2'],
            text: 'Everyday and military objects in air: balls, skydivers, cars, bullets. $C$ is the drag coefficient (shape), $\\rho$ the air [[density]] (about $1.2\\,\\text{kg/m}^3$ at sea level), $A$ the cross-sectional area.',
          },
        },
        {
          type: 'figure',
          svg: SKYDIVER_SVG,
          alt: 'Three free-body diagrams of a falling skydiver as a dot. Left, just after the jump: only a long downward weight mg, a tiny velocity arrow. Middle, speeding up: weight mg down and a shorter drag D up. Right, terminal velocity: weight mg down and an equal drag D up, and the longest velocity arrow.',
          caption: 'As the skydiver speeds up, drag grows until it balances the weight. From then on the net force is zero and the speed stays constant: the [[phys-terminal-velocity|terminal velocity]].',
          maxWidth: 420,
        },
        {
          type: 'derivation',
          title: 'Terminal speed of a spread-eagle skydiver',
          steps: [
            { tex: 'mg = \\tfrac12 C\\rho A v_t^2', why: 'At terminal velocity $a = 0$, so drag equals weight.' },
            { tex: 'v_t = \\sqrt{\\frac{2mg}{C\\rho A}}', why: 'Solve for $v_t$. Heavier, denser, more streamlined objects fall faster.' },
            { tex: '= \\sqrt{\\frac{2(80)(9.80)}{(0.70)(1.2)(0.70)}} = 51.6\\,\\text{m/s} \\approx 186\\,\\text{km/h}', why: '$m = 80\\,\\text{kg}$, $C \\approx 0.70$ and $A \\approx 0.70\\,\\text{m}^2$ for a belly-down skydiver.' },
          ],
          result: 'A head-down skydiver halves $CA$ and falls well over $70\\,\\text{m/s}$. Check the units: $\\sqrt{\\text{kg}\\cdot\\text{m/s}^2 / (\\text{kg/m}^3 \\cdot \\text{m}^2)} = \\sqrt{\\text{m}^2/\\text{s}^2} = \\text{m/s}$.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Which law applies?',
          text: 'The switch between the two regimes is governed by a dimensionless ratio of inertial to viscous effects, the Reynolds number. Roughly: if the object is millimeters across or smaller and moving slowly, use linear drag; if it is the size of a ball or a person moving at everyday speeds, use quadratic drag. Real drag curves also have surprises, like the "drag crisis" that lets dimpled golf balls fly farther.',
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'concept',
      title: 'Terminal velocity from the differential equation',
      blocks: [
        {
          type: 'p',
          text: 'Terminal velocity tells you where the speed ends up. To know how it gets there, write the second law as a [[differential-equation|differential equation]] for $v(t)$. Take down as positive and start from rest.',
        },
        {
          type: 'derivation',
          title: 'Linear drag: solve $m\\dfrac{dv}{dt} = mg - bv$',
          steps: [
            { tex: '\\frac{dv}{dt} = \\frac{b}{m}\\,(v_t - v), \\qquad v_t = \\frac{mg}{b}', why: 'Factor out $b/m$. The right side vanishes at $v = v_t$: the terminal speed again.' },
            { tex: '\\int_0^{v} \\frac{dv\'}{v_t - v\'} = \\int_0^{t} \\frac{b}{m}\\,dt\'', why: 'Separation of variables: divide by $(v_t - v)$, multiply by $dt$, and integrate both sides from the initial state ($t = 0$, $v = 0$). This is the [[separable-equation|separable equation]] method.' },
            { tex: '-\\ln\\frac{v_t - v}{v_t} = \\frac{t}{\\tau}, \\qquad \\tau = \\frac{m}{b}', why: 'The antiderivative of $\\frac{1}{v_t - v}$ is $-\\ln(v_t - v)$; evaluate between the limits.' },
            { tex: 'v(t) = v_t\\left(1 - e^{-t/\\tau}\\right)', why: 'Exponentiate and solve for $v$. Check: $v(0) = 0$, $v \\to v_t$, and for small $t$, $v \\approx v_t t/\\tau = gt$, free fall.' },
          ],
          result: 'The time constant $\\tau = m/b = v_t/g$ sets the scale: after $\\tau$ the object is at $63\\%$ of $v_t$, after $3\\tau$ at $95\\%$.',
        },
        {
          type: 'p',
          text: 'Quadratic drag, $m\\,dv/dt = mg - cv^2$, separates the same way (with partial fractions) and gives a hyperbolic tangent. You can check it without Calculus II: differentiate $v = v_t\\tanh(gt/v_t)$ to get $\\frac{dv}{dt} = g\\,\\text{sech}^2(gt/v_t) = g\\left(1 - \\frac{v^2}{v_t^2}\\right)$, which is exactly $g - \\frac{c}{m}v^2$ when $v_t^2 = mg/c$.',
        },
        {
          type: 'math',
          tex: 'v_{\\text{lin}}(t) = v_t\\left(1 - e^{-gt/v_t}\\right), \\qquad v_{\\text{quad}}(t) = v_t \\tanh\\!\\left(\\frac{gt}{v_t}\\right)',
          caption: 'Both written with the same $v_t$, using $\\tau = v_t/g$ for the linear case. The quadratic one gets there faster: $95\\%$ of $v_t$ at $1.83\\,v_t/g$ instead of $3\\,v_t/g$.',
        },
        {
          type: 'graph',
          x: [0, 20],
          y: [0, 70],
          height: 270,
          functions: [
            { expr: '9.8x', color: 'gray', dashed: true, label: 'no air: $v = gt$' },
            { expr: 'w*tanh(9.8x/w)', color: 'red', label: 'quadratic drag' },
            { expr: 'w*(1 - e^(-9.8x/w))', color: 'blue', label: 'linear drag' },
          ],
          hlines: [{ y: 'w', color: 'gray', label: 'terminal speed' }],
          points: [
            { x: 's', y: 'w*tanh(9.8s/w)', color: 'red' },
            { x: 's', y: 'w*(1 - e^(-9.8s/w))', color: 'blue' },
          ],
          sliders: [
            { name: 'w', min: 10, max: 60, step: 0.2, value: 51.6, label: 'terminal speed $v_t$ (m/s)' },
            { name: 's', min: 0, max: 20, step: 0.05, value: 0, label: 'time $t$ (s)', play: true },
          ],
          readouts: [
            { label: 'quadratic: $v$ (m/s):', expr: 'w*tanh(9.8s/w)' },
            { label: 'linear: $v$ (m/s):', expr: 'w*(1 - e^(-9.8s/w))' },
            { label: 'quadratic: 95% at (s):', expr: '1.8318w/9.8' },
          ],
          caption: 'Speed versus time from rest. All three curves start with slope $g$: at first the speed is small and drag negligible. The defaults are the skydiver ($v_t = 51.6\\,\\text{m/s}$), who reaches $95\\%$ of terminal speed after about $9.7\\,\\text{s}$ of free fall.',
        },
      ],
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'expr',
      prompt: 'A $2.0\\,\\text{kg}$ object is released from rest in a fluid with linear drag, $b = 0.50\\,\\text{kg/s}$. Take $g = 9.80\\,\\text{m/s}^2$ and down as positive. Write its speed $v(t)$ in m/s, with $t$ in seconds.',
      hint: '$v_t = mg/b$ and $\\tau = m/b$; then $v(t) = v_t(1 - e^{-t/\\tau})$.',
      label: '$v(t) =$',
      answer: '39.2(1 - e^(-t/4))',
      answerTex: 'v(t) = 39.2\\left(1 - e^{-t/4.0}\\right)',
      variables: ['t'],
      domain: [0, 10],
      explanation: '$v_t = \\frac{(2.0)(9.80)}{0.50} = 39.2\\,\\text{m/s}$ and $\\tau = \\frac{2.0}{0.50} = 4.0\\,\\text{s}$, so $v(t) = 39.2(1 - e^{-t/4.0})$. Check: $v\'(0) = 39.2/4.0 = 9.8 = g$, free fall at the start, as it must be when the object is barely moving.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'numeric',
      prompt: 'A paratrooper with gear has total mass $110\\,\\text{kg}$. In a stable belly-down freefall position, $C = 0.80$ and $A = 0.80\\,\\text{m}^2$; air density is $1.20\\,\\text{kg/m}^3$. Find the terminal speed, using $g = 9.80\\,\\text{m/s}^2$. Give 3 significant figures.',
      hint: 'Quadratic drag balance: $mg = \\frac12 C\\rho A v_t^2$.',
      label: '$v_t =$',
      unit: 'm/s',
      answer: 'sqrt(2*110*9.8/(0.8*1.2*0.8))',
      answerTex: '\\sqrt{\\frac{2(110)(9.80)}{(0.80)(1.20)(0.80)}} \\approx 53.0',
      tolerance: 0.4,
      explanation: '$v_t = \\sqrt{\\frac{2156}{0.768}} = \\sqrt{2807} \\approx 53.0\\,\\text{m/s}$ (about $190\\,\\text{km/h}$). Forgetting the factor $2$ (or the $\\frac12$ in the drag law) gives $37.5\\,\\text{m/s}$. More mass raises $v_t$ only as $\\sqrt{m}$.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'Parachutes and real ballistics',
      blocks: [
        {
          type: 'p',
          text: 'A parachute does one thing: it multiplies $CA$, here by a factor of nearly $90$. Since $v_t \\propto 1/\\sqrt{CA}$, the terminal speed drops by a factor of about $9$, from about $52\\,\\text{m/s}$ to about $5.5\\,\\text{m/s}$. Landing at $5.5\\,\\text{m/s}$ is like jumping off a wall $v^2/2g = 1.5\\,\\text{m}$ high, which is why paratroopers train the parachute landing fall.',
        },
        {
          type: 'graph',
          x: [0, 40],
          y: [0, 60],
          height: 260,
          functions: [
            { expr: '51.6tanh(9.8x/51.6)', domain: [0, 'd'], color: 'red', label: 'freefall' },
            { expr: `5.5cosh${UC}/sinh${UC}`, domain: ['d', 40], color: 'blue', label: 'canopy open' },
          ],
          hlines: [{ y: 5.5, color: 'gray', label: '5.5 m/s' }],
          vlines: [{ x: 'd', color: 'gray', label: 'deploy' }],
          sliders: [{ name: 'd', min: 4, max: 30, step: 0.5, value: 15, label: 'deploy at time (s)', play: true }],
          readouts: [
            { label: 'speed at deployment (m/s):', expr: VD },
            { label: 'speed $0.5\\,\\text{s}$ later (m/s):', expr: `5.5cosh(9.8*0.5/5.5 + ${KD})/sinh(9.8*0.5/5.5 + ${KD})` },
          ],
          caption: 'Speed versus time for a jump, with the canopy modeled as opening instantly (quadratic drag before and after; terminal speeds $51.6$ and $5.5\\,\\text{m/s}$). After deployment $v(t) = v_t\\coth(\\dots)$ plunges to nearly $5.5\\,\\text{m/s}$ in well under a second. Real canopies take a couple of seconds to inflate, which spreads the deceleration out; an instant opening would subject the jumper to dangerous loads.',
        },
        {
          type: 'p',
          text: 'Projectiles feel drag in two dimensions: $\\vec{F}_D = -c\\,|\\vec{v}|\\,\\vec{v}$, always opposite the velocity. Because $|\\vec{v}|$ couples the components, $x$ and $y$ are **no longer independent** and there is no closed-form solution. Ballistic calculators, fire-control computers and game engines all integrate it numerically, step by step.',
        },
        {
          type: 'code',
          title: 'drag_trajectory.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdio>
#include <initializer_list>
#include <numbers>

struct State {
    double x, y, vx, vy, t;
};

// Fly a projectile until it returns to y = 0. k = c/m is the quadratic drag
// constant per unit mass (1/m): drag acceleration = -k |v| v.
State fly(double v0, double angleDeg, double k, double dt, double& maxHeight, bool print) {
    const double g = 9.8;
    double a = angleDeg * std::numbers::pi / 180.0;
    State s{0.0, 0.0, v0 * std::cos(a), v0 * std::sin(a), 0.0};
    maxHeight = 0.0;
    int step = 0;
    while (true) {
        double speed = std::hypot(s.vx, s.vy);
        double ax = -k * speed * s.vx;            // drag opposes velocity
        double ay = -g - k * speed * s.vy;        // gravity plus drag
        State next = s;
        next.vx += ax * dt;                       // semi-implicit Euler
        next.vy += ay * dt;
        next.x += next.vx * dt;
        next.y += next.vy * dt;
        next.t += dt;
        if (next.y < 0.0) {                       // interpolate the landing point
            double f = s.y / (s.y - next.y);
            return {s.x + f * (next.x - s.x), 0.0, next.vx, next.vy, s.t + f * dt};
        }
        s = next;
        maxHeight = std::fmax(maxHeight, s.y);
        if (print && ++step % 10000 == 0) std::printf("  t = %.1f s: (%.1f, %.1f) m\\n", s.t, s.x, s.y);
    }
}

int main() {
    const double v0 = 45.0, angle = 35.0, dt = 1e-4;
    const double k = 0.5 * 0.35 * 1.2 * 0.00421 / 0.145;  // baseball: C = 0.35, rho = 1.2, A = 0.00421 m^2
    for (double kk : {0.0, k}) {
        double h;
        std::printf("%s\\n", kk == 0.0 ? "vacuum:" : "with quadratic drag:");
        State land = fly(v0, angle, kk, dt, h, kk != 0.0);
        double impact = std::atan2(-land.vy, land.vx) * 180.0 / std::numbers::pi;
        std::printf("  range %.0f m, max height %.1f m, flight %.2f s, impact %.0f deg below horizontal, speed %.1f m/s\\n",
                    land.x, h, land.t, impact, std::hypot(land.vx, land.vy));
    }
}`,
          output: `vacuum:
  range 194 m, max height 34.0 m, flight 5.27 s, impact 35 deg below horizontal, speed 45.0 m/s
with quadratic drag:
  t = 1.0 s: (32.7, 18.4) m
  t = 2.0 s: (59.6, 24.5) m
  t = 3.0 s: (82.6, 20.6) m
  t = 4.0 s: (102.6, 8.1) m
  range 111 m, max height 24.5 m, flight 4.45 s, impact 48 deg below horizontal, speed 26.1 m/s`,
          annotations: [
            { lines: '20-21', text: 'Drag acceleration $-k|\\vec{v}|\\vec{v}$ with $k = \\frac{C\\rho A}{2m}$: its size is $kv^2$ and it points against $\\vec{v}$. The $|\\vec{v}|$ factor couples $x$ and $y$.' },
            { lines: '28-31', text: 'Linear interpolation between the last two steps finds where the ball crosses $y = 0$, so the range does not depend on where a step happens to land.' },
            { lines: 40, text: 'A baseball ($145\\,\\text{g}$, $7.3\\,\\text{cm}$ across) hit at $45\\,\\text{m/s}$ ($100\\,\\text{mph}$) at $35^\\circ$.' },
          ],
        },
        {
          type: 'graph',
          x: [0, 200],
          y: [0, 40],
          height: 230,
          parametric: [{ x: '36.862t', y: '25.811t - 4.9t^2', t: [0, 5.268], color: 'gray', dashed: true, label: 'vacuum parabola' }],
          points: [
            ...DRAG_PTS.map(([x, y]) => ({ x, y, color: 'red' as const })),
            ...VAC_PTS.map(([x, y]) => ({ x, y, color: 'gray' as const, open: true })),
          ],
          caption: 'The program\'s baseball, every $0.5\\,\\text{s}$: with drag (red dots, checked against an independent `solve_ivp` integration) and without (open gray dots on the dashed parabola), in meters. Drag costs $43\\%$ of the range and about $10\\,\\text{m}$ of height, the dots bunch up as the ball slows, and the ball lands at $48^\\circ$ instead of $35^\\circ$, steeper than it was launched.',
        },
      ],
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'mcq',
      prompt: 'A skydiver has reached terminal velocity, falling at a steady $52\\,\\text{m/s}$. Which statement about the forces on them is correct?',
      options: [
        { text: 'Drag is slightly larger than the weight, which is why the speed stops increasing', why: 'If drag exceeded the weight, the net force would point up and the skydiver would slow down.' },
        { text: 'Drag equals the weight, so the net force is zero', correct: true, why: 'Constant velocity means zero acceleration, so by the first law the forces balance exactly: $\\frac12 C\\rho A v_t^2 = mg$.' },
        { text: 'The weight is larger than the drag; otherwise the skydiver would not be falling', why: 'Moving downward does not need a net downward force. At constant velocity the net force is zero, whatever the direction of motion.' },
        { text: 'Gravity has stopped acting because the skydiver is no longer accelerating', why: 'Gravity acts as strongly as ever. It is balanced, not absent.' },
      ],
      explanation: 'This is the first law again: constant velocity $\\iff$ zero net force. Terminal velocity is the speed at which drag, which grows with speed, has grown just enough to cancel the weight. The idea that falling "requires" more down-force than up-force is the same misconception as "a force is needed to keep it moving".',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'truefalse',
      prompt: 'A solid steel ball and a hollow plastic ball of exactly the same size and shape are dropped together from a tall tower. In air, they hit the ground at the same time.',
      answer: false,
      explanation: 'Same size and shape means the same drag at the same speed, but the steel ball has much more weight to push through it. Its terminal speed $\\sqrt{2mg/(C\\rho A)}$ is much higher, and at any speed its deceleration from drag, $F_D/m$, is much smaller. In a vacuum they would land together; in air, over a long drop, the heavy ball wins clearly. So "heavier falls faster" is false in a vacuum but partly true in air, and drag is the reason.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'order',
      prompt: 'Order the steps for finding $v(t)$ of an object falling from rest with linear drag.',
      lines: [
        'Draw the free-body diagram: weight $mg$ down, drag $bv$ up',
        'Write the second law: $m\\,dv/dt = mg - bv$',
        'Separate variables: $\\dfrac{dv}{v_t - v} = \\dfrac{b}{m}\\,dt$ with $v_t = mg/b$',
        'Integrate from $(0, 0)$ to $(t, v)$ and solve: $v = v_t(1 - e^{-t/\\tau})$',
        'Check: $v(0) = 0$, initial slope $g$, and $v \\to v_t$ as $t \\to \\infty$',
      ],
      distractors: ['Use $v = v_0 + at$ with $a = g - bv/m$'],
      explanation: 'Physics first (diagram, law), then the math (separate, integrate, apply the initial condition), then sanity checks. The distractor uses a constant-acceleration formula for an acceleration that changes with $v$, which is exactly what drag makes impossible.',
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'fill',
      prompt: 'Complete the summary.',
      template: 'Static friction can be anything up to ___. Kinetic friction equals ___. At terminal velocity the drag force equals the ___.',
      blanks: [{ answers: ['$\\mu_s n$'] }, { answers: ['$\\mu_k n$'] }, { answers: ['weight'] }],
      wordBank: ['$\\mu_s n$', '$\\mu_k n$', '$\\mu_s mg$', 'weight', 'normal force', 'velocity'],
      explanation: '$f_s \\le \\mu_s n$ (whatever is needed, up to the limit) and $f_k = \\mu_k n$ (fixed while sliding). Both use the normal force $n$, which is not always $mg$, so $\\mu_s mg$ is a trap. Terminal velocity is where drag has grown to balance the weight and the net force is zero.',
    },
  ],
  takeaways: [
    'Static friction is responsive: $f_s \\le \\mu_s n$, equal to whatever prevents sliding. Kinetic friction is $f_k = \\mu_k n$ opposite the sliding, with usually $\\mu_k < \\mu_s$.',
    'On a ramp $n = mg\\cos\\theta$; a block holds while $\\tan\\theta \\le \\mu_s$ and then slides with $a = g(\\sin\\theta - \\mu_k\\cos\\theta)$.',
    'Braking distance $d = v_0^2/(2\\mu g)$: independent of mass, quadruples when speed doubles; ABS keeps static friction and steering.',
    'Drag opposes velocity: $bv$ for small slow objects, $\\frac12 C\\rho Av^2$ for everyday ones. Terminal speed $v_t = mg/b$ or $\\sqrt{2mg/(C\\rho A)}$.',
    'From $m\\,dv/dt = mg - bv$: $v = v_t(1 - e^{-t/\\tau})$; quadratic drag gives $v_t\\tanh(gt/v_t)$. With drag, $x$ and $y$ couple, paths are shorter and steeper, and you integrate numerically.',
  ],
  reading: [
    {
      title: 'OpenStax — University Physics Volume 1, Sections 6.2 and 6.4',
      url: 'https://openstax.org/details/books/university-physics-volume-1',
      source: 'openstax',
      note: 'Friction (with the coefficient table used here) and drag force with terminal velocity, including the calculus derivation.',
    },
    {
      title: 'Wikipedia — Terminal velocity',
      url: 'https://en.wikipedia.org/wiki/Terminal_velocity',
      source: 'wikipedia',
      note: 'Derivations for both drag laws, typical skydiver speeds, and terminal velocity in the linear (Stokes) regime.',
    },
    {
      title: 'Wikipedia — Drag (physics)',
      url: 'https://en.wikipedia.org/wiki/Drag_(physics)',
      source: 'wikipedia',
      note: 'Drag coefficients for common shapes, the Reynolds number and the drag crisis.',
    },
    {
      title: 'Wikipedia — Friction',
      url: 'https://en.wikipedia.org/wiki/Friction',
      source: 'wikipedia',
      note: 'The Coulomb friction model, its microscopic origin, and where it breaks down.',
    },
  ],
};
