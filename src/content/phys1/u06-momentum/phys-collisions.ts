import type { Lesson } from '../../types';

const FIG_CARS = /*svg:phys-u06/f2.svg*/`<svg viewBox="0 0 520 225" xmlns="http://www.w3.org/2000/svg"><text x="10.0" y="22.0" font-size="14" text-anchor="start" font-weight="bold">before</text><rect x="40" y="40" width="80" height="34" rx="6" fill="currentColor" class="f-blue" fill-opacity="0.25" stroke="currentColor" stroke-width="2"/><circle cx="54" cy="76" r="7" fill="currentColor"/><circle cx="106" cy="76" r="7" fill="currentColor"/><text x="80.0" y="62.0" font-size="13" text-anchor="middle">1200 kg</text><line x1="125.0" y1="57.0" x2="185.0" y2="57.0" stroke="currentColor" class="s-blue" stroke-width="3"/><path d="M195.0 57.0 L185.0 61.5 L185.0 52.5 Z" fill="currentColor" class="f-blue"/><text x="160.0" y="48.0" font-size="12" text-anchor="middle" class="t-blue">15 m/s</text><rect x="260" y="40" width="110" height="34" rx="6" fill="currentColor" class="f-orange" fill-opacity="0.25" stroke="currentColor" stroke-width="2"/><circle cx="274" cy="76" r="7" fill="currentColor"/><circle cx="356" cy="76" r="7" fill="currentColor"/><text x="315.0" y="62.0" font-size="13" text-anchor="middle">1800 kg</text><line x1="375.0" y1="57.0" x2="412.0" y2="57.0" stroke="currentColor" class="s-orange" stroke-width="3"/><path d="M422.0 57.0 L412.0 61.5 L412.0 52.5 Z" fill="currentColor" class="f-orange"/><text x="400.0" y="48.0" font-size="12" text-anchor="middle" class="t-orange">10 m/s</text><line x1="10" y1="100" x2="510" y2="100" stroke="currentColor" class="s-gray" stroke-width="1" stroke-dasharray="4 4"/><text x="10.0" y="128.0" font-size="14" text-anchor="start" font-weight="bold">after</text><rect x="150" y="145" width="80" height="34" rx="6" fill="currentColor" class="f-blue" fill-opacity="0.25" stroke="currentColor" stroke-width="2"/><circle cx="164" cy="181" r="7" fill="currentColor"/><circle cx="216" cy="181" r="7" fill="currentColor"/><text x="190.0" y="167.0" font-size="13" text-anchor="middle">1200 kg</text><rect x="230" y="145" width="110" height="34" rx="6" fill="currentColor" class="f-orange" fill-opacity="0.25" stroke="currentColor" stroke-width="2"/><circle cx="244" cy="181" r="7" fill="currentColor"/><circle cx="326" cy="181" r="7" fill="currentColor"/><text x="285.0" y="167.0" font-size="13" text-anchor="middle">1800 kg</text><line x1="345.0" y1="162.0" x2="400.0" y2="162.0" stroke="currentColor" class="s-purple" stroke-width="3"/><path d="M410.0 162.0 L400.0 166.5 L400.0 157.5 Z" fill="currentColor" class="f-purple"/><text x="378.0" y="153.0" font-size="12" text-anchor="middle" class="t-purple">v = ?</text><text x="260.0" y="215.0" font-size="13" text-anchor="middle">stuck together: (1200)(15) + (1800)(10) = (3000) v</text></svg>`;
const FIG_BILLIARDS = /*svg:phys-u06/f3.svg*/`<svg viewBox="0 0 520 215" xmlns="http://www.w3.org/2000/svg"><text x="10.0" y="22.0" font-size="14" text-anchor="start" font-weight="bold">before</text><circle cx="70" cy="110" r="16" fill="none" stroke="currentColor" stroke-width="2"/><line x1="90.0" y1="110.0" x2="160.0" y2="110.0" stroke="currentColor" class="s-blue" stroke-width="3"/><path d="M170.0 110.0 L160.0 114.5 L160.0 105.5 Z" fill="currentColor" class="f-blue"/><text x="130.0" y="100.0" font-size="12" text-anchor="middle" class="t-blue">v₁ = 2.0 m/s</text><circle cx="215" cy="122" r="16" fill="currentColor" class="f-orange" fill-opacity="0.3" stroke="currentColor" stroke-width="2"/><text x="215.0" y="160.0" font-size="12" text-anchor="middle">at rest</text><line x1="262" y1="10" x2="262" y2="210" stroke="currentColor" class="s-gray" stroke-width="1" stroke-dasharray="4 4"/><text x="280.0" y="22.0" font-size="14" text-anchor="start" font-weight="bold">after</text><line x1="300" y1="115" x2="500" y2="115" stroke="currentColor" class="s-gray" stroke-width="1" stroke-dasharray="3 4"/><circle cx="330" cy="115" r="5" fill="currentColor"/><line x1="330.0" y1="115.0" x2="433.8" y2="55.0" stroke="currentColor" class="s-blue" stroke-width="3"/><path d="M442.5 50.0 L436.1 58.9 L431.6 51.2 Z" fill="currentColor" class="f-blue"/><text x="446.5" y="44.0" font-size="14" text-anchor="start" class="t-blue" font-style="italic">v₁′</text><line x1="330.0" y1="115.0" x2="362.5" y2="171.3" stroke="currentColor" class="s-orange" stroke-width="3"/><path d="M367.5 180.0 L358.6 173.5 L366.4 169.0 Z" fill="currentColor" class="f-orange"/><text x="375.5" y="184.0" font-size="14" text-anchor="start" class="t-orange" font-style="italic">v₂′</text><path d="M370 115 A40 40 0 0 0 364.6 95.0" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="376.0" y="107.0" font-size="12" text-anchor="start">30°</text><path d="M360 115 A30 30 0 0 1 345.0 141.0" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="366.0" y="141.0" font-size="12" text-anchor="start">60°</text><text x="400.0" y="205.0" font-size="12" text-anchor="middle">90° apart (equal masses, elastic)</text></svg>`;
const FIG_BALLISTIC = /*svg:phys-u06/f4.svg*/`<svg viewBox="0 0 480 225" xmlns="http://www.w3.org/2000/svg"><line x1="150" y1="20" x2="430" y2="20" stroke="currentColor" stroke-width="3"/><line x1="155" y1="20" x2="165" y2="10" stroke="currentColor" class="s-gray" stroke-width="1"/><line x1="169" y1="20" x2="179" y2="10" stroke="currentColor" class="s-gray" stroke-width="1"/><line x1="183" y1="20" x2="193" y2="10" stroke="currentColor" class="s-gray" stroke-width="1"/><line x1="197" y1="20" x2="207" y2="10" stroke="currentColor" class="s-gray" stroke-width="1"/><line x1="211" y1="20" x2="221" y2="10" stroke="currentColor" class="s-gray" stroke-width="1"/><line x1="225" y1="20" x2="235" y2="10" stroke="currentColor" class="s-gray" stroke-width="1"/><line x1="239" y1="20" x2="249" y2="10" stroke="currentColor" class="s-gray" stroke-width="1"/><line x1="253" y1="20" x2="263" y2="10" stroke="currentColor" class="s-gray" stroke-width="1"/><line x1="267" y1="20" x2="277" y2="10" stroke="currentColor" class="s-gray" stroke-width="1"/><line x1="281" y1="20" x2="291" y2="10" stroke="currentColor" class="s-gray" stroke-width="1"/><line x1="295" y1="20" x2="305" y2="10" stroke="currentColor" class="s-gray" stroke-width="1"/><line x1="309" y1="20" x2="319" y2="10" stroke="currentColor" class="s-gray" stroke-width="1"/><line x1="323" y1="20" x2="333" y2="10" stroke="currentColor" class="s-gray" stroke-width="1"/><line x1="337" y1="20" x2="347" y2="10" stroke="currentColor" class="s-gray" stroke-width="1"/><line x1="351" y1="20" x2="361" y2="10" stroke="currentColor" class="s-gray" stroke-width="1"/><line x1="365" y1="20" x2="375" y2="10" stroke="currentColor" class="s-gray" stroke-width="1"/><line x1="379" y1="20" x2="389" y2="10" stroke="currentColor" class="s-gray" stroke-width="1"/><line x1="393" y1="20" x2="403" y2="10" stroke="currentColor" class="s-gray" stroke-width="1"/><line x1="407" y1="20" x2="417" y2="10" stroke="currentColor" class="s-gray" stroke-width="1"/><line x1="421" y1="20" x2="431" y2="10" stroke="currentColor" class="s-gray" stroke-width="1"/><line x1="250" y1="20" x2="250" y2="150" stroke="currentColor" class="s-gray" stroke-width="1.5" stroke-dasharray="4 3"/><line x1="330" y1="20" x2="330" y2="150" stroke="currentColor" class="s-gray" stroke-width="1.5" stroke-dasharray="4 3"/><rect x="245" y="150" width="90" height="40" rx="3" fill="none" stroke="currentColor" class="s-gray" stroke-width="1.5" stroke-dasharray="4 3"/><line x1="250" y1="20" x2="318.9" y2="130.2" stroke="currentColor" stroke-width="2"/><line x1="330" y1="20" x2="398.9" y2="130.2" stroke="currentColor" stroke-width="2"/><rect x="313.9" y="130.2" width="90" height="40" rx="3" fill="currentColor" class="f-orange" fill-opacity="0.3" stroke="currentColor" stroke-width="2"/><text x="358.9" y="155.2" font-size="13" text-anchor="middle">M + m</text><line x1="440" y1="170" x2="440" y2="150.2" stroke="currentColor" stroke-width="1.5"/><line x1="432" y1="170" x2="448" y2="170" stroke="currentColor" stroke-width="1.5"/><line x1="432" y1="150.2" x2="448" y2="150.2" stroke="currentColor" stroke-width="1.5"/><text x="452.0" y="165.1" font-size="15" text-anchor="start" font-style="italic">h</text><ellipse cx="60" cy="170" rx="8" ry="4" fill="currentColor" class="f-red"/><line x1="75.0" y1="170.0" x2="160.0" y2="170.0" stroke="currentColor" class="s-red" stroke-width="3"/><path d="M170.0 170.0 L160.0 174.5 L160.0 165.5 Z" fill="currentColor" class="f-red"/><text x="115.0" y="158.0" font-size="13" text-anchor="middle" class="t-red" font-style="italic">m, v = ?</text><text x="290.0" y="215.0" font-size="12" text-anchor="middle">block M at rest</text></svg>`;

// Head-on collision: masses a and b (kg), restitution r, cart 1 at 4 m/s hits cart 2 at rest at t = 1 s.
const V1P = '(a - r*b)*4/(a + b)';
const V2P = '(1 + r)*a*4/(a + b)';
const X1 = `4*min(s, 1) + ${V1P}*max(s - 1, 0)`;
const X2 = `4 + ${V2P}*max(s - 1, 0)`;
const XCM = '4b/(a + b) + 4a*s/(a + b)';

// Ball dropped from 2 m onto a rigid floor with restitution r (g = 9.8 m/s^2). Closed form for the height at time v.
const T0 = 'sqrt(4/9.8)';
const VI = 'sqrt(39.2)';
const TINF = `(${T0} + 2*${VI}*r/(9.8*(1 - r)))`;
function bounceAfter(v: string): string {
  const sc = `min(${v}, ${TINF} - 0.0001)`;
  const w = `(1 - (${sc} - ${T0})*(1 - r)*9.8/(2*${VI}*r))`;
  const k = `floor(ln(${w})/ln(r))`;
  const tk = `(${T0} + 2*${VI}*r*(1 - r^(${k}))/(9.8*(1 - r)))`;
  const tau = `(${sc} - ${tk})`;
  return `${VI}*r^(${k} + 1)*${tau} - 4.9*${tau}^2`;
}
const STEP = '(sign(s - sqrt(4/9.8)) + 1)/2';
const BOUNCE_S = `(1 - ${STEP})*(2 - 4.9*min(s, ${T0})^2) + ${STEP}*(${bounceAfter('s')})`;

export const lesson: Lesson = {
  id: 'phys-collisions',
  title: 'Collisions',
  summary: 'In every collision of an isolated system, momentum is conserved; kinetic energy is conserved only if the collision is elastic. From those two facts come the 1D elastic formulas, the coefficient of restitution that physics engines use, and the analysis of 2D crashes.',
  minutes: 20,
  objectives: [
    'Explain why total momentum is conserved in a collision, using Newton\'s third law and the impulse–momentum theorem',
    'Classify collisions as elastic, inelastic or perfectly inelastic, and compute the kinetic energy lost',
    'Derive and apply the 1D elastic collision formulas, including the "relative velocity reverses" rule',
    'Use the coefficient of restitution $e$ to predict outcomes between elastic and perfectly inelastic',
    'Solve 2D collisions by conserving each momentum component separately',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Why momentum is conserved',
      blocks: [
        {
          type: 'p',
          text: 'Two objects collide. During contact, object 1 pushes on 2 with $\\vec F_{21}$ and object 2 pushes on 1 with $\\vec F_{12}$. Newton\'s third law says $\\vec F_{12} = -\\vec F_{21}$ at every instant, and the contact begins and ends at the same moment for both. So their impulses are equal and opposite.',
        },
        {
          type: 'derivation',
          title: 'Total momentum of a two-body system',
          steps: [
            { tex: '\\Delta \\vec p_1 = \\int \\vec F_{12}\\,dt, \\qquad \\Delta \\vec p_2 = \\int \\vec F_{21}\\,dt', why: 'Impulse–momentum theorem for each object, counting only the collision forces.' },
            { tex: '\\Delta \\vec p_1 + \\Delta \\vec p_2 = \\int (\\vec F_{12} + \\vec F_{21})\\,dt = 0', why: 'Third law: the integrand is zero at every instant.' },
            { tex: '\\vec p_{1i} + \\vec p_{2i} = \\vec p_{1f} + \\vec p_{2f}', why: 'Rearrange: the total momentum before equals the total after.' },
          ],
          result: 'Internal forces cannot change a system\'s total momentum. Only external forces can: $d\\vec P/dt = \\vec F_{\\text{ext}}$.',
        },
        {
          type: 'theorem',
          name: 'Conservation of momentum',
          tex: '\\vec F_{\\text{ext}} = \\vec 0 \\implies \\sum_i m_i \\vec v_{i,\\text{before}} = \\sum_i m_i \\vec v_{i,\\text{after}}',
          text: 'This is [[phys-conservation-of-momentum|conservation of momentum]] for an [[phys-isolated-system|isolated system]]. In a collision, external forces like gravity and road friction do act, but the collision lasts milliseconds, so their impulse is negligible compared with the huge contact forces. Momentum just before equals momentum just after.',
        },
        {
          type: 'figure',
          svg: FIG_CARS,
          alt: 'Before: a 1200 kg car at 15 m/s behind an 1800 kg truck at 10 m/s, both moving right. After: the two are locked together, moving right with unknown speed v.',
          caption: 'A rear-end collision in which the vehicles lock together.',
          maxWidth: 480,
        },
        {
          type: 'derivation',
          title: 'The locked vehicles\' speed',
          steps: [
            { tex: '(1200)(15) + (1800)(10) = (1200 + 1800)\\,v', why: 'Momentum before (each vehicle separately) equals momentum after (one combined mass). Both move in $+x$.' },
            { tex: '36\\,000 = 3000\\,v \\implies v = 12\\,\\text{m/s}', why: 'Solve. The answer lies between $10$ and $15\\,\\text{m/s}$, as it must.' },
          ],
          result: 'The wreck moves on at $12\\,\\text{m/s}$. Momentum conservation needed nothing about the crash forces, crumpling or duration.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'mcq',
      prompt: 'A heavy truck and a small car collide head-on. During the collision, how does the force of the truck on the car compare with the force of the car on the truck?',
      options: [
        { text: 'They are equal in magnitude and opposite in direction', correct: true, why: 'Newton\'s third law, with no exceptions for mass or speed. The car suffers more because the same force gives its smaller mass a much larger acceleration.' },
        { text: 'The truck exerts the larger force, because it is heavier', why: 'Mass determines how much each vehicle\'s velocity changes ($\\Delta v = J/m$), not the size of the interaction force.' },
        { text: 'The faster vehicle exerts the larger force', why: 'Speed affects how large the (shared) force is, but it is still the same on both: the forces are one interaction seen from two sides.' },
        { text: 'The car exerts no force on the truck, since the truck barely slows down', why: 'The truck does slow down, just by a small amount: $\\Delta v_{\\text{truck}} = J/m_{\\text{truck}}$ is small because its mass is large.' },
      ],
      explanation: 'Third-law forces are always equal and opposite, so the two vehicles receive equal and opposite impulses and equal and opposite momentum changes. Their velocity changes differ: $\\Delta v = \\Delta p/m$, so the lighter car\'s velocity changes far more. That is why the car\'s occupants experience the greater acceleration.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Elastic, inelastic and perfectly inelastic',
      blocks: [
        {
          type: 'p',
          text: 'Momentum is conserved in **every** collision of an isolated system. Kinetic energy is a different story. Crumpling metal, squashing a ball, heating and noise all take kinetic energy away. Collisions are classified by what happens to it.',
        },
        {
          type: 'table',
          headers: ['Type', 'Momentum', 'Kinetic energy', 'Example'],
          rows: [
            ['[[phys-elastic-collision|Elastic]]', 'conserved', 'conserved', 'billiard balls, steel bearings, atoms'],
            ['[[phys-inelastic-collision|Inelastic]]', 'conserved', 'partly lost', 'a tennis ball hitting a racket, most car crashes'],
            ['Perfectly inelastic', 'conserved', 'maximum loss: objects stick together', 'a bullet embedding in a block, a tackle, coupling railcars'],
          ],
          caption: '"Perfectly inelastic" does not mean all kinetic energy is lost; it means the objects end with a common velocity.',
        },
        {
          type: 'p',
          text: 'In the rear-end crash, kinetic energy went from $\\tfrac12(1200)(15)^2 + \\tfrac12(1800)(10)^2 = 225\\,\\text{kJ}$ to $\\tfrac12(3000)(12)^2 = 216\\,\\text{kJ}$. The missing $9\\,\\text{kJ}$ went into bending metal. Only the energy of motion *relative to the centre of mass* can be lost; the motion of the system as a whole has to continue.',
        },
        {
          type: 'figure',
          svg: FIG_BALLISTIC,
          alt: 'A ballistic pendulum: a bullet of mass m and unknown speed v flies toward a block of mass M hanging at rest from two strings; afterward block plus bullet swing up and rise a height h.',
          caption: 'The ballistic pendulum, the 18th-century way to measure bullet speeds: a collision, then a swing.',
          maxWidth: 420,
        },
        {
          type: 'derivation',
          title: 'Bullet speed from a ballistic pendulum: $m = 8.0\\,\\text{g}$, $M = 2.0\\,\\text{kg}$, rise $h = 0.12\\,\\text{m}$',
          steps: [
            { tex: '\\text{Stage 2 (swing): } \\tfrac12(m + M)V^2 = (m + M)gh \\implies V = \\sqrt{2gh} = 1.53\\,\\text{m/s}', why: 'After the collision only gravity does work (string tension is perpendicular to the motion), so mechanical energy is conserved.' },
            { tex: '\\text{Stage 1 (collision): } mv = (m + M)V', why: 'Perfectly inelastic: momentum conserved, kinetic energy **not** conserved. Work backward from the swing to the collision.' },
            { tex: 'v = \\frac{m + M}{m}V = \\frac{2.008}{0.0080}(1.53\\,\\text{m/s}) \\approx 385\\,\\text{m/s}', why: 'Solve for the bullet\'s speed. Use $g = 9.80\\,\\text{m/s}^2$.' },
          ],
          result: 'The bullet was moving at about $385\\,\\text{m/s}$. Only $m/(m + M) = 0.4\\%$ of its kinetic energy survives the collision; the rest goes into tearing wood and heat.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Use the right law for each stage',
          text: 'Energy conservation is valid for the swing but not for the collision; momentum conservation is valid for the collision but not for the swing (gravity and the strings act on the block for a long time). Mixing them up is the most common collision mistake.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'numeric',
      prompt: 'A $95.0\\,\\text{kg}$ linebacker running east at $6.00\\,\\text{m/s}$ tackles an $80.0\\,\\text{kg}$ running back moving west at $4.00\\,\\text{m/s}$, and they move off together. Find their common velocity, taking east as positive. Give 3 significant figures.',
      hint: 'West is negative: the running back\'s momentum is $(80.0)(-4.00)$. Then divide the total momentum by the total mass.',
      answer: '(95*6 - 80*4)/175',
      answerTex: '1.43\\,\\text{m/s (east)}',
      tolerance: 0.012,
      label: '$v =$',
      unit: 'm/s',
      explanation: 'Total momentum: $(95.0)(6.00) + (80.0)(-4.00) = 570 - 320 = 250\\,\\text{kg}\\cdot\\text{m/s}$. Total mass $175\\,\\text{kg}$, so $v = 250/175 = 1.43\\,\\text{m/s}$ east. Treating both velocities as positive gives $5.09\\,\\text{m/s}$, faster than the linebacker was running: a sure sign of a sign error.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Elastic collisions in one dimension',
      blocks: [
        {
          type: 'p',
          text: 'In a head-on elastic collision you know $m_1$, $m_2$, $v_1$, $v_2$ and want the two final velocities $v_1\'$ and $v_2\'$. Two unknowns need two equations, and you have exactly two: conservation of momentum and conservation of kinetic energy.',
        },
        {
          type: 'derivation',
          title: 'Deriving the elastic collision formulas',
          steps: [
            { tex: "m_1 v_1 + m_2 v_2 = m_1 v_1' + m_2 v_2'", why: 'Momentum conservation.' },
            { tex: "\\tfrac12 m_1 v_1^2 + \\tfrac12 m_2 v_2^2 = \\tfrac12 m_1 v_1'^2 + \\tfrac12 m_2 v_2'^2", why: 'Kinetic energy conservation (elastic).' },
            { tex: "m_1(v_1 - v_1') = m_2(v_2' - v_2)", why: 'Group each object\'s terms in the momentum equation.' },
            { tex: "m_1(v_1 - v_1')(v_1 + v_1') = m_2(v_2' - v_2)(v_2' + v_2)", why: 'Do the same in the energy equation (after cancelling $\\tfrac12$) and factor each difference of squares.' },
            { tex: "v_1 + v_1' = v_2' + v_2", why: 'Divide the energy equation by the momentum equation (valid when a collision actually happens, so $v_1 \\ne v_1\'$).' },
            { tex: "v_2' - v_1' = -(v_2 - v_1)", why: 'Rearranged: the relative velocity simply **reverses**. This linear equation replaces the quadratic energy equation.' },
            { tex: "v_1' = \\frac{m_1 - m_2}{m_1 + m_2}\\,v_1 + \\frac{2m_2}{m_1 + m_2}\\,v_2, \\quad v_2' = \\frac{2m_1}{m_1 + m_2}\\,v_1 + \\frac{m_2 - m_1}{m_1 + m_2}\\,v_2", why: 'Solve the two linear equations (momentum and reversed relative velocity) simultaneously.' },
          ],
          result: 'In an elastic collision the objects separate exactly as fast as they approached.',
        },
        {
          type: 'list',
          items: [
            '**Equal masses, target at rest:** $v_1\' = 0$, $v_2\' = v_1$. The objects swap velocities, as in a Newton\'s cradle or a straight billiard shot.',
            '**Heavy hits light ($m_1 \\gg m_2$):** $v_1\' \\approx v_1$, $v_2\' \\approx 2v_1$. A bowling ball barely notices the pin, which leaves at twice the ball\'s speed.',
            '**Light hits heavy ($m_1 \\ll m_2$):** $v_1\' \\approx -v_1$, $v_2\' \\approx 0$. A ball bouncing off a wall.',
          ],
        },
        {
          type: 'graph',
          x: [0, 3],
          y: [-4.5, 8.5],
          xStep: 0.5,
          yStep: 1,
          height: 270,
          functions: [
            { expr: '4', domain: [0, 1], color: 'blue', label: 'cart 1 velocity (m/s)' },
            { expr: V1P, domain: [1, 3], color: 'blue' },
            { expr: '0', domain: [0, 1], color: 'orange', label: 'cart 2 velocity (m/s)' },
            { expr: V2P, domain: [1, 3], color: 'orange' },
            { expr: '4a/(a + b)', color: 'purple', dashed: true, label: 'centre-of-mass velocity' },
          ],
          sliders: [
            { name: 'a', min: 0.5, max: 5, step: 0.1, value: 2, label: 'mass $m_1$ (kg)' },
            { name: 'b', min: 0.5, max: 5, step: 0.1, value: 1, label: 'mass $m_2$ (kg)' },
            { name: 'r', min: 0, max: 1, step: 0.05, value: 1, label: 'coefficient of restitution $e$ (1 = elastic)' },
          ],
          readouts: [
            { label: "$v_1' =$", expr: V1P, digits: 2 },
            { label: "$v_2' =$", expr: V2P, digits: 2 },
            { label: 'fraction of $K$ kept $=$', expr: `(a*(${V1P})^2 + b*(${V2P})^2)/(16a)`, digits: 3 },
          ],
          caption: 'Velocity versus time (s): cart 1 arrives at $4\\,\\text{m/s}$ and hits cart 2 at rest at $t = 1\\,\\text{s}$. Try $m_1 = m_2$ (velocities swap), then $m_1 \\ll m_2$ (cart 1 bounces back). Through every collision the purple centre-of-mass velocity is unchanged. Leave $e = 1$ for now; the next card explains it.',
        },
        {
          type: 'derivation',
          title: 'Why reactors use light moderators: a neutron hits a carbon-12 nucleus head-on',
          steps: [
            { tex: "v_1' = \\frac{1 - 12}{1 + 12}\\,v_1 = -\\frac{11}{13}\\,v_1", why: 'Elastic formula with $m_1 = 1\\,\\text{u}$ (neutron), $m_2 = 12\\,\\text{u}$, target at rest ($v_2 = 0$).' },
            { tex: "\\frac{K_1'}{K_1} = \\left(\\frac{11}{13}\\right)^2 = 0.716", why: 'Kinetic energy scales with speed squared.' },
            { tex: '\\text{Fraction transferred} = 1 - 0.716 = 0.284', why: 'Elastic, so the rest went to the carbon nucleus.' },
          ],
          result: 'Each head-on hit removes 28% of the neutron\'s energy. A hydrogen nucleus (same mass as the neutron) could take all of it, which is why water, rich in hydrogen, slows neutrons so effectively in naval and commercial reactors.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'numeric',
      prompt: 'A $2.0\\,\\text{kg}$ cart moving at $3.0\\,\\text{m/s}$ collides elastically and head-on with a $1.0\\,\\text{kg}$ cart at rest. What is the velocity of the $1.0\\,\\text{kg}$ cart afterward (positive in the original direction)?',
      hint: "Use $v_2' = \\dfrac{2m_1}{m_1 + m_2}v_1$ with $v_2 = 0$, or solve momentum plus \"relative velocity reverses\".",
      answer: '2*2*3/3',
      answerTex: '4.0\\,\\text{m/s}',
      tolerance: 0.03,
      label: "$v_2' =$",
      unit: 'm/s',
      explanation: "$v_2' = \\frac{2(2.0)}{3.0}(3.0) = 4.0\\,\\text{m/s}$ and $v_1' = \\frac{2.0 - 1.0}{3.0}(3.0) = 1.0\\,\\text{m/s}$. Check momentum: $6.0 = 2.0(1.0) + 1.0(4.0)$. Check energy: $9.0\\,\\text{J} = 1.0 + 8.0$. Check relative velocity: $3.0$ closing before, $4.0 - 1.0 = 3.0$ separating after.",
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'The coefficient of restitution',
      blocks: [
        {
          type: 'p',
          text: 'Real collisions sit between the two extremes. In an elastic collision the separation speed equals the approach speed; when objects stick, the separation speed is zero. The ratio measures "bounciness".',
        },
        {
          type: 'definition',
          term: 'Coefficient of restitution',
          text: "$$e = \\frac{\\text{speed of separation}}{\\text{speed of approach}} = -\\frac{v_2' - v_1'}{v_2 - v_1}$$\n\n$e = 1$: elastic. $0 < e < 1$: inelastic. $e = 0$: perfectly inelastic. The [[phys-coefficient-of-restitution|coefficient of restitution]] depends mostly on the materials, so engineers and game engines treat it as a material property.",
        },
        {
          type: 'p',
          text: 'Combined with momentum conservation, $e$ gives a complete prediction. For a target at rest: $v_1\' = \\dfrac{m_1 - e\\,m_2}{m_1 + m_2}v_1$ and $v_2\' = \\dfrac{(1 + e)\\,m_1}{m_1 + m_2}v_1$. Go back to the graph in the previous card and lower $e$: the two final velocities close in on the centre-of-mass velocity, and at $e = 0$ they merge into it.',
        },
        {
          type: 'graph',
          x: [-1, 20],
          y: [-1.2, 1.2],
          xStep: 2,
          yStep: 1,
          height: 150,
          points: [
            { x: X1, y: 0.2, color: 'blue', label: '1' },
            { x: X2, y: 0.2, color: 'orange', label: '2' },
            { x: XCM, y: -0.6, color: 'purple', label: 'CM' },
          ],
          sliders: [
            { name: 'a', min: 0.5, max: 5, step: 0.1, value: 1, label: 'mass $m_1$ (kg)' },
            { name: 'b', min: 0.5, max: 5, step: 0.1, value: 3, label: 'mass $m_2$ (kg)' },
            { name: 'r', min: 0, max: 1, step: 0.05, value: 0.5, label: 'restitution $e$' },
            { name: 's', min: 0, max: 3, step: 0.01, value: 0, label: 'time $t$ (s)', play: true, speed: 0.75 },
          ],
          readouts: [
            { label: "$v_1' =$", expr: V1P, digits: 2 },
            { label: "$v_2' =$", expr: V2P, digits: 2 },
          ],
          caption: 'Press play. Cart 1 (blue) moves at $4\\,\\text{m/s}$ along a track (position in m) and hits cart 2 (orange) at $t = 1\\,\\text{s}$. Whatever the masses and $e$, the purple centre of mass glides on at constant speed, untouched by the collision.',
        },
        {
          type: 'p',
          text: 'Dropping a ball on a rigid floor is the easy way to measure $e$. The floor does not move, so the ball\'s rebound speed is $e$ times its impact speed. Since height goes like speed squared, each bounce reaches $e^2$ times the previous height: $e = \\sqrt{h\'/h}$.',
        },
        {
          type: 'graph',
          x: [0, 6],
          y: [0, 2.2],
          xStep: 0.5,
          yStep: 0.5,
          height: 230,
          functions: [
            { expr: '2 - 4.9x^2', domain: [0, T0], color: 'gray' },
            { expr: bounceAfter('x'), domain: [T0, 6], color: 'gray', label: 'height (m) versus time (s)' },
          ],
          points: [{ x: 's', y: BOUNCE_S, color: 'red' }],
          sliders: [
            { name: 'r', min: 0.3, max: 0.9, step: 0.01, value: 0.8, label: 'coefficient of restitution $e$' },
            { name: 's', min: 0, max: 6, step: 0.01, value: 0, label: 'time $t$ (s)', play: true, speed: 1 },
          ],
          readouts: [
            { label: 'first rebound height $e^2(2\\,\\text{m}) =$', expr: '2r^2', digits: 3 },
            { label: 'time until it stops bouncing (s) $=$', expr: TINF, digits: 2 },
          ],
          caption: 'A ball dropped from $2\\,\\text{m}$, in real time. The bounce heights shrink geometrically. The flight times shrink geometrically too, so infinitely many bounces fit in a finite time: their sum is a geometric series, $t_0 + \\frac{2v_0}{g}\\cdot\\frac{e}{1 - e}$.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Restitution in a physics engine',
          text: 'Engines such as PhysX, Havok and Jolt give every material a restitution value and combine the two values of a touching pair (average, minimum, maximum or product, chosen per material). Collision response then applies one impulse along the contact normal, sized so the separation speed is $e$ times the approach speed. The code below is that impulse in 1D; the game-physics unit extends it to 3D rigid bodies.',
        },
        {
          type: 'code',
          title: 'collide.cpp',
          runnable: true,
          code: `#include <cstdio>

struct Body { double m, v; };   // mass (kg), velocity along x (m/s)

// Head-on collision with coefficient of restitution e (0 = stick, 1 = elastic).
// Works like a physics engine: compute one impulse J and apply +J and -J.
void collide(Body& a, Body& b, double e) {
    double vRel = a.v - b.v;                 // closing speed (positive if approaching)
    if (vRel <= 0) return;                   // already separating: no collision
    double mRed = a.m * b.m / (a.m + b.m);   // "reduced mass"
    double J = (1 + e) * mRed * vRel;        // impulse magnitude
    a.v -= J / a.m;
    b.v += J / b.m;
}

void run(const char* name, Body a, Body b, double e) {
    double K0 = 0.5 * a.m * a.v * a.v + 0.5 * b.m * b.v * b.v;
    double p0 = a.m * a.v + b.m * b.v;
    collide(a, b, e);
    double K1 = 0.5 * a.m * a.v * a.v + 0.5 * b.m * b.v * b.v;
    double p1 = a.m * a.v + b.m * b.v;
    double K1a = 0.5 * a.m * a.v * a.v;      // what body 1 keeps
    std::printf("%-15s v1'=%7.3f v2'=%7.3f  p:%9.2f ->%9.2f  K kept:%6.1f%%  by body 1:%6.1f%%\\n",
                name, a.v, b.v, p0, p1, 100 * K1 / K0, 100 * K1a / K0);
}

int main() {
    run("equal, elastic", {1, 4}, {1, 0}, 1.0);
    run("2:1, elastic", {2, 3}, {1, 0}, 1.0);
    run("1:3, e = 0.5", {1, 4}, {3, 0}, 0.5);
    run("stick together", {1200, 15}, {1800, 10}, 0.0);
    run("neutron on C-12", {1, 1}, {12, 0}, 1.0);
}`,
          output: `equal, elastic  v1'=  0.000 v2'=  4.000  p:     4.00 ->     4.00  K kept: 100.0%  by body 1:   0.0%
2:1, elastic    v1'=  1.000 v2'=  4.000  p:     6.00 ->     6.00  K kept: 100.0%  by body 1:  11.1%
1:3, e = 0.5    v1'= -0.500 v2'=  1.500  p:     4.00 ->     4.00  K kept:  43.8%  by body 1:   1.6%
stick together  v1'= 12.000 v2'= 12.000  p: 36000.00 -> 36000.00  K kept:  96.0%  by body 1:  38.4%
neutron on C-12 v1'= -0.846 v2'=  0.154  p:     1.00 ->     1.00  K kept: 100.0%  by body 1:  71.6%`,
          annotations: [
            { lines: 9, text: 'If the bodies are already moving apart, applying an impulse would glue them together. Real engines make the same check.' },
            { lines: '10-11', text: 'The impulse that makes the separation speed $e$ times the approach speed: $J = (1 + e)\\,\\mu\\,v_{\\text{rel}}$ with $\\mu = \\frac{m_1m_2}{m_1 + m_2}$.' },
            { lines: '12-13', text: 'Equal and opposite impulses (Newton\'s third law), so momentum is conserved automatically.' },
            { lines: '28-32', text: 'The cases from this lesson: velocity swap, the 2:1 question, a bouncy 1:3 collision, the rear-end crash ($96\\%$ of $K$ kept) and the neutron moderator ($71.6\\%$ kept by the neutron).' },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'expr',
      prompt: 'A ball of mass $m$ moving at speed $v$ hits a ball of mass $M$ at rest in a head-on **elastic** collision. Find the speed of the target ball $M$ afterward, in terms of $m$, $M$ and $v$.',
      hint: 'Use momentum conservation together with "relative velocity reverses": $v_2\' - v_1\' = v$.',
      answer: '2m*v/(m + M)',
      answerTex: "v_2' = \\dfrac{2mv}{m + M}",
      variables: ['m', 'M', 'v'],
      domain: [0.5, 3],
      label: "$v_2' =$",
      explanation: "Momentum: $mv = mv_1' + Mv_2'$. Elastic: $v_2' - v_1' = v$, so $v_1' = v_2' - v$. Substituting, $mv = m v_2' - mv + Mv_2'$, so $v_2' = \\dfrac{2mv}{m + M}$. Limits: $M = m$ gives $v$ (swap), $M \\to 0$ gives $2v$, and $M \\gg m$ gives nearly $0$.",
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'concept',
      title: 'Collisions in two dimensions',
      blocks: [
        {
          type: 'p',
          text: 'Momentum is a vector, so conservation holds **component by component**: $\\sum p_x$ and $\\sum p_y$ are each conserved. A 2D collision gives two momentum equations (plus an energy equation if it is elastic).',
        },
        {
          type: 'derivation',
          title: 'Accident reconstruction: two vehicles lock together at an intersection',
          steps: [
            { tex: 'P_x = (1500\\,\\text{kg})(20\\,\\text{m/s}) = 30\\,000\\,\\text{kg}\\cdot\\text{m/s}', why: 'A car heading east. The SUV heading north contributes nothing to $P_x$.' },
            { tex: 'P_y = (2000\\,\\text{kg})(15\\,\\text{m/s}) = 30\\,000\\,\\text{kg}\\cdot\\text{m/s}', why: 'The SUV heading north.' },
            { tex: 'v = \\frac{\\sqrt{P_x^2 + P_y^2}}{m_1 + m_2} = \\frac{42\\,426}{3500} = 12.1\\,\\text{m/s}', why: 'The wreck carries the total momentum; divide its magnitude by the total mass.' },
            { tex: '\\theta = \\arctan\\frac{P_y}{P_x} = 45^\\circ \\text{ north of east}', why: 'Direction of the total momentum vector.' },
          ],
          result: 'Investigators run this in reverse: from the skid marks\' direction and length they find the wreck\'s velocity, and from that the pre-crash speeds.',
        },
        {
          type: 'graph',
          x: [-3, 50],
          y: [-3, 62],
          equal: true,
          height: 300,
          segments: [
            { from: [0, 0], to: ['1.5u', 0], color: 'blue', arrow: true, label: 'car' },
            { from: ['1.5u', 0], to: ['1.5u', '2w'], color: 'orange', arrow: true, label: 'SUV' },
            { from: [0, 0], to: ['1.5u', '2w'], color: 'purple', arrow: true, label: 'total' },
          ],
          sliders: [
            { name: 'u', min: 5, max: 30, step: 0.5, value: 20, label: 'car speed, east (m/s), $1500\\,\\text{kg}$' },
            { name: 'w', min: 5, max: 30, step: 0.5, value: 15, label: 'SUV speed, north (m/s), $2000\\,\\text{kg}$' },
          ],
          readouts: [
            { label: 'wreck speed (m/s) $=$', expr: 'sqrt((1500u)^2 + (2000w)^2)/3500', digits: 2 },
            { label: 'direction (degrees north of east) $=$', expr: 'arctan(2000w/(1500u))*180/pi', digits: 1 },
          ],
          caption: 'Momentum vectors in units of $1000\\,\\text{kg}\\cdot\\text{m/s}$, added head to tail. The wreck\'s momentum (purple) is the vector sum.',
        },
        {
          type: 'figure',
          svg: FIG_BILLIARDS,
          alt: 'Billiard collision. Before: a cue ball moving right at 2.0 m/s toward a ball at rest, slightly below its path. After: the cue ball leaves at 30 degrees above the original line and the target ball at 60 degrees below; the two directions are 90 degrees apart.',
          caption: 'An off-centre elastic hit between equal masses: the balls always leave at right angles.',
          maxWidth: 460,
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why equal masses separate at 90°',
          text: "Cancel $m$ in momentum and energy conservation: $\\vec v_1 = \\vec v_1' + \\vec v_2'$ and $v_1^2 = v_1'^2 + v_2'^2$. Square the first with the [[dot-product]]: $v_1^2 = v_1'^2 + v_2'^2 + 2\\,\\vec v_1' \\cdot \\vec v_2'$. Comparing, $\\vec v_1' \\cdot \\vec v_2' = 0$: the final velocities are perpendicular (unless the hit is dead-on and one of them is zero). Pool players use this \"90-degree rule\" to predict where the cue ball goes.",
        },
      ],
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'numeric',
      prompt: 'A cue ball moving at $2.00\\,\\text{m/s}$ makes a glancing elastic collision with an identical ball at rest. Afterward the cue ball moves at $30.0^\\circ$ from its original direction. What is the cue ball\'s speed afterward? Give 3 significant figures.',
      hint: 'The two balls leave at $90^\\circ$ to each other, so the velocity triangle $\\vec v_1 = \\vec v_1\' + \\vec v_2\'$ is a right triangle with hypotenuse $v_1$.',
      answer: '2*cos(30*pi/180)',
      answerTex: '1.73\\,\\text{m/s}',
      tolerance: 0.012,
      label: "$v_1' =$",
      unit: 'm/s',
      explanation: "With equal masses, $\\vec v_1 = \\vec v_1' + \\vec v_2'$ and the two final velocities are perpendicular, so $v_1' = v_1\\cos 30.0^\\circ = 1.73\\,\\text{m/s}$ and $v_2' = v_1 \\sin 30.0^\\circ = 1.00\\,\\text{m/s}$ at $60.0^\\circ$ on the other side. Check: $1.73^2 + 1.00^2 = 4.00 = 2.00^2$, so kinetic energy is conserved. Using $\\sin 30^\\circ$ gives the target ball's speed instead.",
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'truefalse',
      prompt: 'In a perfectly inelastic collision, all of the kinetic energy is lost.',
      answer: false,
      explanation: 'The objects stick together, but the combined object keeps moving with the centre-of-mass velocity, carrying kinetic energy $\\tfrac12(m_1 + m_2)v_{\\text{cm}}^2$. In the rear-end crash, $216\\,\\text{kJ}$ of $225\\,\\text{kJ}$ survived. All of it is lost only if the total momentum was zero to begin with, as in a head-on crash of equal momenta.',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'error',
      prompt: 'A $10.0\\,\\text{g}$ bullet embeds in a $1.50\\,\\text{kg}$ ballistic pendulum, which then rises $0.200\\,\\text{m}$. A student computes the bullet\'s speed ($g = 9.80\\,\\text{m/s}^2$). Tap the first line that is wrong.',
      lines: [
        'Swing: $\\tfrac12(m + M)V^2 = (m + M)gh$, so $V = \\sqrt{2gh} = 1.98\\,\\text{m/s}$',
        'Collision: $\\tfrac12 mv^2 = \\tfrac12(m + M)V^2$',
        '$v = V\\sqrt{\\dfrac{m + M}{m}} = 1.98\\sqrt{151}$',
        '$v = 24.3\\,\\text{m/s}$',
      ],
      errorLines: [2],
      explanation: 'Line 2 conserves kinetic energy in a perfectly inelastic collision, where most of it becomes heat and deformation. The collision conserves **momentum**: $mv = (m + M)V$, so $v = \\dfrac{1.51}{0.0100}(1.98) = 299\\,\\text{m/s}$. The student\'s $24\\,\\text{m/s}$ is slower than a thrown baseball, which should have raised a flag.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'mcq',
      prompt: 'In a Newton\'s cradle of identical steel balls, you pull back one ball and release it. Why does exactly **one** ball fly off the other end, rather than two balls at half the speed?',
      options: [
        { text: 'Only one ball at the original speed conserves both momentum and kinetic energy', correct: true, why: 'Two balls at $v/2$ would conserve momentum ($2m \\cdot v/2 = mv$) but carry only $2 \\cdot \\tfrac12 m(v/2)^2 = \\tfrac14 mv^2$, half the kinetic energy. The nearly elastic steel balls do not lose that much.' },
        { text: 'Only one ball conserves momentum', why: 'Two balls at $v/2$ conserve momentum just as well. Momentum alone cannot decide the outcome.' },
        { text: 'The first ball only touches the ball next to it, so the force reaches only one ball at the end', why: 'The impulse passes through all the balls as a compression wave; which balls leave is decided by the conservation laws.' },
        { text: 'The end ball is pushed by the largest force', why: 'Force on its own does not explain the count; the outcome follows from momentum and energy both being conserved.' },
      ],
      explanation: 'Elastic collisions conserve two quantities. For $n$ balls leaving at speed $u$: momentum gives $nmu = mv$ and energy gives $n\\cdot\\tfrac12 mu^2 = \\tfrac12 mv^2$. Together they force $n = 1$ and $u = v$. Pull back two balls and two fly off, for the same reason.',
    },
  ],
  takeaways: [
    'Newton\'s third law makes internal impulses cancel, so the total momentum of an isolated system is conserved in every collision.',
    'Elastic collisions also conserve kinetic energy; inelastic ones lose some; perfectly inelastic ones stick together and lose the most allowed by momentum conservation.',
    'In a 1D elastic collision the relative velocity reverses: $v_2\' - v_1\' = -(v_2 - v_1)$. Equal masses swap velocities.',
    'The coefficient of restitution $e$ (separation speed over approach speed) interpolates from stick ($e = 0$) to elastic ($e = 1$); bounce heights scale by $e^2$.',
    'In 2D, conserve $p_x$ and $p_y$ separately. Equal masses in a glancing elastic collision leave at $90^\\circ$.',
    'Collisions never change the centre-of-mass velocity.',
  ],
  reading: [
    {
      title: 'OpenStax University Physics Volume 1 — Chapter 9: Linear Momentum and Collisions',
      url: 'https://openstax.org/details/books/university-physics-volume-1',
      source: 'openstax',
      note: 'Sections 9.3–9.5 cover conservation of momentum, collision types and 2D collisions with many worked examples.',
    },
    {
      title: 'PhET Interactive Simulations',
      url: 'https://phet.colorado.edu/',
      source: 'other',
      note: 'The "Collision Lab" simulation lets you set masses, velocities and elasticity in 1D and 2D and watch momentum vectors.',
    },
    {
      title: 'Wikipedia — Coefficient of restitution',
      url: 'https://en.wikipedia.org/wiki/Coefficient_of_restitution',
      source: 'wikipedia',
      note: 'Measured values for sports balls and materials, and the bounce-height method.',
    },
  ],
};
