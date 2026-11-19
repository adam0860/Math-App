import type { Lesson } from '../../types';

const NET_SVG = '<svg viewBox="40 20 280 175" xmlns="http://www.w3.org/2000/svg"><line x1="250" y1="150" x2="201.3" y2="65.6" class="s-gray" stroke-width="1.2" stroke-dasharray="4 4"/><line x1="71.3" y1="65.6" x2="201.3" y2="65.6" class="s-gray" stroke-width="1.2" stroke-dasharray="4 4"/><line x1="120" y1="150" x2="241" y2="150" class="s-blue" stroke-width="2.6"/><path d="M250 150 L241 154.5 L241 145.5 Z" class="f-blue"/><line x1="120" y1="150" x2="75.8" y2="73.4" class="s-green" stroke-width="2.6"/><path d="M71.3 65.6 L79.6 71.1 L71.9 75.6 Z" class="f-green"/><line x1="120" y1="150" x2="195" y2="72" class="s-red" stroke-width="3"/><path d="M201.3 65.6 L198.3 75.2 L191.8 68.9 Z" class="f-red"/><rect x="107" y="137" width="26" height="26" rx="3" fill="none" stroke="currentColor" stroke-width="1.8"/><text x="120" y="180" font-size="11" text-anchor="middle" class="t-gray">crate, 5.0 kg</text><text x="220" y="172" font-size="14" text-anchor="start" class="t-blue"><tspan font-style="italic">F</tspan><tspan font-size="10" dy="3" font-style="normal">1</tspan></text><line x1="220" y1="160.5" x2="227" y2="160.5" class="s-blue" stroke-width="1.1"/><path d="M228.7 160.5 L226.3 158.2 L226.3 162.8 Z" class="f-blue"/><text x="248" y="172" font-size="11" text-anchor="start" class="t-blue">20 N</text><text x="35.3" y="69.6" font-size="14" text-anchor="start" class="t-green"><tspan font-style="italic">F</tspan><tspan font-size="10" dy="3" font-style="normal">2</tspan></text><line x1="35.3" y1="58.1" x2="42.3" y2="58.1" class="s-green" stroke-width="1.1"/><path d="M43.9 58.1 L41.6 55.8 L41.6 60.4 Z" class="f-green"/><text x="35.3" y="85.6" font-size="11" text-anchor="start" class="t-green">15 N</text><text x="209.3" y="69.6" font-size="14" text-anchor="start" class="t-red"><tspan font-style="italic">F</tspan><tspan font-size="10" dy="3" font-style="normal">net</tspan></text><line x1="209.3" y1="58.1" x2="216.3" y2="58.1" class="s-red" stroke-width="1.1"/><path d="M217.9 58.1 L215.6 55.8 L215.6 60.4 Z" class="f-red"/><path d="M146 150 A 26 26 0 0 0 107 127.5" fill="none" class="s-gray" stroke-width="1.2"/><text x="144" y="126" font-size="11" text-anchor="start">120°</text></svg>';
const PAIRS_SVG = '<svg viewBox="0 0 420 272" xmlns="http://www.w3.org/2000/svg"><path d="M10 262 Q 210 222 410 262" fill="none" stroke="currentColor" stroke-width="2"/><text x="372" y="252" font-size="12" text-anchor="middle">Earth</text><rect x="150" y="150" width="200" height="10" fill="none" stroke="currentColor" stroke-width="2"/><line x1="165" y1="160" x2="165" y2="236" stroke="currentColor" stroke-width="3"/><line x1="335" y1="160" x2="335" y2="234" stroke="currentColor" stroke-width="3"/><text x="355" y="147" font-size="12" text-anchor="start">table</text><rect x="200" y="122" width="64" height="28" rx="2" class="f-blue" opacity="0.18"/><rect x="200" y="122" width="64" height="28" rx="2" fill="none" class="s-blue" stroke-width="2"/><text x="232" y="141" font-size="11" text-anchor="middle">book</text><line x1="214" y1="136" x2="214" y2="187" class="s-purple" stroke-width="2.8"/><path d="M214 196 L209.5 187 L218.5 187 Z" class="f-purple"/><text x="222" y="194" font-size="13" text-anchor="start" class="t-purple" font-style="italic">W</text><line x1="190" y1="242" x2="190" y2="191" class="s-purple" stroke-width="2.8"/><path d="M190 182 L194.5 191 L185.5 191 Z" class="f-purple"/><text x="198" y="232" font-size="13" text-anchor="start" class="t-purple" font-style="italic">W′</text><line x1="250" y1="150" x2="250" y2="99" class="s-orange" stroke-width="2.8"/><path d="M250 90 L254.5 99 L245.5 99 Z" class="f-orange"/><text x="258" y="100" font-size="13" text-anchor="start" class="t-orange" font-style="italic">n</text><line x1="286" y1="152" x2="286" y2="203" class="s-orange" stroke-width="2.8"/><path d="M286 212 L281.5 203 L290.5 203 Z" class="f-orange"/><text x="294" y="206" font-size="13" text-anchor="start" class="t-orange" font-style="italic">n′</text><text x="14" y="22" font-size="13" text-anchor="start" class="t-purple" font-style="italic">W</text><text x="40" y="22" font-size="12" text-anchor="start" class="t-purple">Earth pulls book down</text><text x="14" y="41" font-size="13" text-anchor="start" class="t-purple" font-style="italic">W′</text><text x="40" y="41" font-size="12" text-anchor="start" class="t-purple">book pulls Earth up</text><text x="14" y="60" font-size="13" text-anchor="start" class="t-orange" font-style="italic">n</text><text x="40" y="60" font-size="12" text-anchor="start" class="t-orange">table pushes book up</text><text x="14" y="79" font-size="13" text-anchor="start" class="t-orange" font-style="italic">n′</text><text x="40" y="79" font-size="12" text-anchor="start" class="t-orange">book pushes table down</text><text x="240" y="32" font-size="12" text-anchor="start" class="t-purple">pair 1: W and W′ (gravity)</text><text x="240" y="51" font-size="12" text-anchor="start" class="t-orange">pair 2: n and n′ (contact)</text></svg>';
const BLOCKS_SVG = '<svg viewBox="0 0 420 225" xmlns="http://www.w3.org/2000/svg"><line x1="20" y1="90" x2="400" y2="90" stroke="currentColor" stroke-width="2"/><rect x="140" y="40" width="60" height="50" class="f-blue" opacity="0.15"/><rect x="140" y="40" width="60" height="50" fill="none" class="s-blue" stroke-width="2"/><rect x="200" y="55" width="44" height="35" class="f-green" opacity="0.15"/><rect x="200" y="55" width="44" height="35" fill="none" class="s-green" stroke-width="2"/><text x="170" y="70" font-size="14" text-anchor="middle" font-weight="600">A</text><text x="170" y="84" font-size="10" text-anchor="middle">3.0 kg</text><text x="222" y="76" font-size="14" text-anchor="middle" font-weight="600">B</text><text x="222" y="87" font-size="9" text-anchor="middle">2.0 kg</text><line x1="70" y1="65" x2="129" y2="65" class="s-red" stroke-width="2.8"/><path d="M138 65 L129 69.5 L129 60.5 Z" class="f-red"/><text x="84" y="56" font-size="14" text-anchor="start" class="t-red"><tspan font-style="italic">F</tspan></text><line x1="84" y1="44.5" x2="91" y2="44.5" class="s-red" stroke-width="1.1"/><path d="M92.7 44.5 L90.3 42.2 L90.3 46.8 Z" class="f-red"/><text x="116" y="56" font-size="11" text-anchor="start" class="t-red">15 N</text><text x="300" y="62" font-size="11" text-anchor="start" class="t-gray">frictionless floor</text><text x="20" y="128" font-size="11" text-anchor="start" class="t-gray">Free-body diagrams (horizontal forces; vertical ones cancel)</text><circle cx="130" cy="165" r="5" fill="currentColor"/><text x="130" y="187" font-size="13" text-anchor="middle" font-weight="600">A</text><line x1="130" y1="165" x2="196" y2="165" class="s-red" stroke-width="2.8"/><path d="M205 165 L196 169.5 L196 160.5 Z" class="f-red"/><text x="170" y="155" font-size="14" text-anchor="start" class="t-red"><tspan font-style="italic">F</tspan></text><line x1="170" y1="143.5" x2="177" y2="143.5" class="s-red" stroke-width="1.1"/><path d="M178.7 143.5 L176.3 141.2 L176.3 145.8 Z" class="f-red"/><text x="210" y="169" font-size="11" text-anchor="start" class="t-red">15 N</text><line x1="130" y1="165" x2="109" y2="165" class="s-orange" stroke-width="2.8"/><path d="M100 165 L109 160.5 L109 169.5 Z" class="f-orange"/><text x="84" y="155" font-size="13" text-anchor="start" class="t-orange"><tspan font-style="italic">P</tspan><tspan font-size="9" dy="3" font-style="normal">BA</tspan></text><line x1="84" y1="144.3" x2="90.5" y2="144.3" class="s-orange" stroke-width="1.1"/><path d="M92.1 144.3 L89.8 142 L89.8 146.6 Z" class="f-orange"/><circle cx="320" cy="165" r="5" fill="currentColor"/><text x="320" y="187" font-size="13" text-anchor="middle" font-weight="600">B</text><line x1="320" y1="165" x2="341" y2="165" class="s-orange" stroke-width="2.8"/><path d="M350 165 L341 169.5 L341 160.5 Z" class="f-orange"/><text x="328" y="155" font-size="13" text-anchor="start" class="t-orange"><tspan font-style="italic">P</tspan><tspan font-size="9" dy="3" font-style="normal">AB</tspan></text><line x1="328" y1="144.3" x2="334.5" y2="144.3" class="s-orange" stroke-width="1.1"/><path d="M336.1 144.3 L333.9 142 L333.9 146.6 Z" class="f-orange"/><text x="210" y="214" font-size="11" text-anchor="middle" class="t-orange">third-law pair: equal size, opposite direction, on different blocks</text></svg>';

// First-law graph: puck with v0 = 6 m/s on a surface with friction coefficient k (deceleration k*g).
const STOP = '(6/(9.8k))';
const PM = `min(s, ${STOP})`;
const PUCK_X = `(6*${PM} - 4.9k*${PM}^2)`;

// Second-law graph: F1 = f N along +x, F2 = p N at q degrees, mass m. Object starts at rest at the origin.
const FX = '(f + p*cos(q*pi/180))';
const FY = '(p*sin(q*pi/180))';
const OX = `(0.5*${FX}/m*s^2)`;
const OY = `(0.5*${FY}/m*s^2)`;

// Third-law graph: collision force pulse, peak 30 kN over 0.12 s.
const PULSE = '30000sin(pi*x/0.12)^2';

export const lesson: Lesson = {
  id: 'phys-newtons-laws',
  title: 'Force and Newton\'s Laws',
  summary: 'What a force is, why nothing is needed to keep an object moving, how $\\sum\\vec{F} = m\\vec{a}$ connects forces to the kinematics you already know, the difference between mass and weight, and Newton\'s third law with the force pairs people most often get wrong.',
  minutes: 21,
  objectives: [
    'Identify forces as interactions between two objects, and add them as vectors to find the net force',
    'State Newton\'s first law, explain inertia and inertial frames, and reject "a force is needed to keep it moving"',
    'Apply $\\sum\\vec{F} = m\\vec{a}$ in components to find accelerations from forces',
    'Distinguish mass from weight, and explain why all objects fall with the same acceleration in a vacuum',
    'Identify third-law pairs correctly and explain why they never cancel',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'What is a force?',
      blocks: [
        {
          type: 'p',
          text: 'Kinematics described motion: given $\\vec{a}(t)$, find $\\vec{v}$ and $\\vec{r}$. Dynamics answers the deeper question: **what determines** $\\vec{a}$? Newton\'s answer is forces, and his three laws are the rules connecting them to motion.',
        },
        {
          type: 'definition',
          term: 'Force',
          text: 'A [[phys-force|force]] is a push or a pull that one object (the **agent**) exerts on another. It is a [[vector]]: it has a magnitude, measured in [[phys-newton-unit|newtons]] ($1\\,\\text{N} = 1\\,\\text{kg}\\cdot\\text{m/s}^2$), and a direction.',
        },
        {
          type: 'list',
          items: [
            '**Contact forces** need touching: the normal force of a floor, friction, the tension of a rope, the push of your hand, air drag.',
            '**Long-range forces** act across empty space: gravity (and, later in physics, electric and magnetic forces).',
            '**The agent test.** For every force you draw, you must be able to say "the ___ pushes or pulls on the object". "The force of the throw" after the ball leaves your hand fails the test: nothing is touching the ball except air.',
          ],
        },
        {
          type: 'p',
          text: 'Several forces on one object combine into the [[phys-net-force|net force]], their vector sum. Only the net force matters for the motion: two $50\\,\\text{N}$ pulls in opposite directions have the same effect as no force at all.',
        },
        {
          type: 'figure',
          svg: NET_SVG,
          alt: 'A small square crate with two force arrows from its center: blue F1 of 20 newtons to the right and green F2 of 15 newtons at 120 degrees, up and to the left. Dashed lines complete a parallelogram, and a red arrow F net runs along its diagonal, up and to the right.',
          caption: 'Forces add tip to tail, or equivalently by the parallelogram rule. Here $\\vec{F}_{\\text{net}} = \\vec{F}_1 + \\vec{F}_2$ is about $18\\,\\text{N}$, not $35\\,\\text{N}$: magnitudes only add when the forces are parallel.',
          maxWidth: 360,
        },
        {
          type: 'callout',
          variant: 'history',
          title: 'Aristotle versus Galileo',
          text: 'For two thousand years, following Aristotle, people believed that the natural state of matter is rest and that a moving object needs a continuous push. Galileo noticed that a ball rolling down one ramp and up another rises almost to its starting height, and the smoother the ramps, the closer it gets. Flatten the second ramp and the ball should roll forever. Motion does not need a cause; **changes** in motion do.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'concept',
      title: 'The first law: inertia',
      blocks: [
        {
          type: 'theorem',
          name: 'Newton\'s first law',
          text: 'An object at rest stays at rest, and an object in motion keeps moving in a straight line at constant speed, unless a nonzero net force acts on it. In symbols: $\\vec{F}_{\\text{net}} = \\vec{0} \\iff \\vec{v}$ is constant.',
        },
        {
          type: 'p',
          text: 'This is [[phys-newtons-first-law|Newton\'s first law]]. The tendency to keep the same velocity is called [[phys-inertia|inertia]]. A hockey puck slides a long way on ice because there is little friction to change its velocity; on carpet it stops at once. In both cases the stopping is done by a force (friction), and in neither case does anything push the puck forward while it slides.',
        },
        {
          type: 'graph',
          x: [0, 60],
          y: [-1, 8],
          height: 260,
          functions: [{ expr: 'sqrt(max(36 - 19.6k*x, 0))', domain: [0, 'min(60, 36/(19.6k))'], color: 'blue', label: 'speed vs. position, $v(x) = \\sqrt{v_0^2 - 2\\mu g x}$' }],
          segments: [{ from: [PUCK_X, 0], to: [`${PUCK_X} + 0.8(6 - 9.8k*${PM})`, 0.001], color: 'blue', arrow: true }],
          points: [
            { x: PUCK_X, y: 0, color: 'red', label: 'puck' },
            { x: PUCK_X, y: `6 - 9.8k*${PM}`, color: 'blue' },
          ],
          sliders: [
            { name: 'k', min: 0, max: 0.3, step: 0.005, value: 0.1, label: 'friction coefficient $\\mu$' },
            { name: 's', min: 0, max: 10, step: 0.02, value: 0, label: 'time $t$ (s)', play: true },
          ],
          readouts: [
            { label: 'speed (m/s):', expr: `6 - 9.8k*${PM}` },
            { label: 'distance so far (m):', expr: PUCK_X },
          ],
          caption: 'A puck leaves your stick at $6\\,\\text{m/s}$; friction decelerates it at $\\mu g$. Press ▶, then slide $\\mu$ toward $0$ and play again: the stopping distance $v_0^2/(2\\mu g)$ grows without bound, and at $\\mu = 0$ the puck glides on at $6\\,\\text{m/s}$ forever. Horizontal axis: position along the ice (m); the blue curve and dot show the speed (m/s) at each position.',
        },
        {
          type: 'p',
          text: 'The first law also picks out which observers are allowed to use Newton\'s laws. In an [[phys-inertial-frame|inertial reference frame]] an object with no net force moves at constant velocity. The ground is (very nearly) inertial, and so is any frame moving at constant velocity relative to it, which is the relative-velocity result from the last unit. A braking bus is not: a ball on its floor rolls forward although nothing pushes it.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Misconception: "a force is needed to keep it moving"',
          text: 'Pushing a heavy box across a floor at constant speed does require a steady push, but only because friction pulls back just as hard. The **net** force is zero, exactly as the first law says for constant velocity. Remove friction and the same box keeps sliding after you let go. Whenever constant velocity seems to "need" a force, look for the opposing force that cancels it.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Inertia in a game loop',
          text: 'In a physics engine, a body with no forces simply keeps `velocity` from frame to frame: `pos += vel * dt`. Objects slow down only because the engine applies friction, drag or a "linear damping" factor (Unity\'s `Rigidbody.linearDamping`, called `drag` in older versions; PhysX\'s `setLinearDamping`). Set the damping to zero and remove friction, and a pushed crate slides across the level forever, the first law in code.',
        },
      ],
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'mcq',
      prompt: 'A hockey puck slides across nearly frictionless ice at a constant $8\\,\\text{m/s}$ after leaving the stick. Which forces act on the puck while it slides?',
      options: [
        { text: 'Gravity (down), the normal force from the ice (up), and a forward force from the stick', why: 'The stick stopped touching the puck when it was released. A force needs an agent in contact (or gravity): no agent, no force.' },
        { text: 'Gravity (down) and the normal force from the ice (up) only', correct: true, why: 'Those are the only interactions: Earth pulls down, the ice pushes up. They cancel, so the net force is zero and the velocity stays constant.' },
        { text: 'Gravity, the normal force, and a forward "force of motion" that slowly runs out', why: 'This is the medieval "impetus" idea. Motion needs no force; the first law says the puck keeps its velocity on its own.' },
        { text: 'No forces at all, since the puck is not accelerating', why: 'Zero acceleration means zero **net** force, not zero forces. Gravity and the normal force both act; they just cancel.' },
      ],
      explanation: 'Run the agent test: what is touching the puck? Only the ice (normal force, and negligible friction). Plus the long-range pull of the Earth. Up and down cancel, horizontal forces are absent, so $\\vec{F}_{\\text{net}} = \\vec{0}$ and the velocity is constant, the first law in action. This is a classic question from the Force Concept Inventory, a test physics departments use to measure exactly these misconceptions.',
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'concept',
      title: 'The second law: $\\sum\\vec{F} = m\\vec{a}$',
      blocks: [
        {
          type: 'p',
          text: 'Experiments show two simple facts. Push the same object with twice the net force and it accelerates twice as much. Apply the same net force to twice as much stuff and it accelerates half as much. The "amount of stuff" that resists acceleration is the [[phys-mass|mass]] $m$, the measure of inertia.',
        },
        {
          type: 'theorem',
          name: 'Newton\'s second law',
          tex: '\\sum\\vec{F} = m\\vec{a} \\qquad\\iff\\qquad \\sum F_x = m a_x, \\quad \\sum F_y = m a_y',
          text: '[[phys-newtons-second-law|Newton\'s second law]] holds in inertial frames. The acceleration points along the **net force**, which need not be the direction of motion (think of a projectile: velocity along the path, acceleration straight down).',
        },
        {
          type: 'derivation',
          title: 'Two forces on a $5.0\\,\\text{kg}$ crate (the figure above)',
          steps: [
            { tex: '\\vec{F}_1 = (20,\\ 0)\\,\\text{N}, \\qquad \\vec{F}_2 = (15\\cos 120^\\circ,\\ 15\\sin 120^\\circ) = (-7.5,\\ 13.0)\\,\\text{N}', why: 'Resolve each force into components, measuring angles from the $+x$ axis.' },
            { tex: '\\vec{F}_{\\text{net}} = (12.5,\\ 13.0)\\,\\text{N}, \\qquad F_{\\text{net}} = \\sqrt{12.5^2 + 13.0^2} = 18.0\\,\\text{N}', why: 'Add the components. (The weight and the floor\'s normal force cancel and are left out; assume no friction.)' },
            { tex: '\\vec{a} = \\frac{\\vec{F}_{\\text{net}}}{m} = (2.50,\\ 2.60)\\,\\text{m/s}^2, \\qquad a = \\frac{18.0}{5.0} = 3.61\\,\\text{m/s}^2', why: 'Divide each component by the mass.' },
            { tex: '\\theta = \\arctan\\frac{13.0}{12.5} = 46.1^\\circ', why: 'The acceleration points exactly along the net force.' },
          ],
          result: 'The crate accelerates at $3.61\\,\\text{m/s}^2$, $46.1^\\circ$ above the $+x$ axis (as seen from above, if the forces are horizontal).',
        },
        {
          type: 'graph',
          x: [-25, 40],
          y: [-8, 30],
          equal: true,
          parametric: [{ x: `0.5*${FX}/m*t^2`, y: `0.5*${FY}/m*t^2`, t: [0, 's'], color: 'gray', dashed: true }],
          segments: [
            { from: [OX, OY], to: [`${OX} + 0.6f`, OY], color: 'blue', arrow: true, label: 'F₁' },
            { from: [OX, OY], to: [`${OX} + 0.6p*cos(q*pi/180)`, `${OY} + 0.6p*sin(q*pi/180)`], color: 'green', arrow: true, label: 'F₂' },
            { from: [OX, OY], to: [`${OX} + 0.6${FX}`, `${OY} + 0.6${FY}`], color: 'red', arrow: true, label: 'F net' },
          ],
          points: [{ x: OX, y: OY, color: 'gray' }],
          sliders: [
            { name: 'f', min: 0, max: 30, step: 1, value: 20, label: '$F_1$ along $+x$ (N)' },
            { name: 'p', min: 0, max: 30, step: 1, value: 15, label: '$F_2$ (N)' },
            { name: 'q', min: 0, max: 180, step: 5, value: 120, label: 'direction of $\\vec{F}_2$ (°)' },
            { name: 'm', min: 1, max: 10, step: 0.5, value: 5, label: 'mass $m$ (kg)' },
            { name: 's', min: 0, max: 4, step: 0.02, value: 0, label: 'time $t$ (s)', play: true },
          ],
          readouts: [
            { label: '$F_{\\text{net}}$ (N):', expr: `sqrt(${FX}^2 + ${FY}^2)` },
            { label: '$a = F_{\\text{net}}/m$ (m/s²):', expr: `sqrt(${FX}^2 + ${FY}^2)/m` },
            { label: 'direction (°):', expr: `atan2(${FY}, ${FX})*180/pi` },
          ],
          caption: 'Top view of a crate on frictionless ice, starting from rest (meters; force arrows at $0.6\\,\\text{m}$ per N). Press ▶: the crate moves in a straight line along $\\vec{F}_{\\text{net}}$, covering $\\tfrac12 a t^2$. Make $\\vec{F}_2$ point opposite $\\vec{F}_1$ with equal size and the crate stays put. Double the mass and it covers half the distance in the same time.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: '$m\\vec{a}$ is not a force',
          text: 'The left side lists forces exerted by other objects; the right side is the **result**. Never draw an "$m\\vec{a}$" arrow on a force diagram, and never write $\\sum\\vec{F} + m\\vec{a} = 0$ in an inertial frame. If you find yourself adding a force whose agent you cannot name, it is probably $m\\vec{a}$ in disguise.',
        },
      ],
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'numeric',
      prompt: 'Two horizontal forces act on a $5.0\\,\\text{kg}$ crate on frictionless ice: $\\vec{F}_1 = 20\\,\\text{N}$ along $+x$ and $\\vec{F}_2 = 15\\,\\text{N}$ at $120^\\circ$ from $+x$. Find the magnitude of the crate\'s acceleration, to 3 significant figures.',
      hint: 'Resolve $\\vec{F}_2$ into components, add to $\\vec{F}_1$, find the magnitude of the net force, then divide by $m$.',
      label: '$a =$',
      unit: 'm/s²',
      answer: 'sqrt((20 + 15cos(2pi/3))^2 + (15sin(2pi/3))^2)/5',
      answerTex: '\\frac{\\sqrt{12.5^2 + 13.0^2}}{5.0} \\approx 3.61',
      tolerance: 0.03,
      explanation: '$F_{\\text{net},x} = 20 + 15\\cos 120^\\circ = 12.5\\,\\text{N}$ and $F_{\\text{net},y} = 15\\sin 120^\\circ = 13.0\\,\\text{N}$, so $F_{\\text{net}} = 18.0\\,\\text{N}$ and $a = 18.0/5.0 = 3.61\\,\\text{m/s}^2$. Adding the magnitudes ($35/5 = 7.0$) ignores directions; swapping sine and cosine for $\\vec{F}_2$ gives $6.77$.',
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'concept',
      title: 'Mass and weight',
      blocks: [
        {
          type: 'p',
          text: 'Near the Earth\'s surface, the Earth pulls every object straight down with a force proportional to its mass. That force is the object\'s [[phys-weight|weight]]: $\\vec{W} = m\\vec{g}$, where $g$ is the local gravitational field strength, $9.80\\,\\text{N/kg}$ ($= 9.80\\,\\text{m/s}^2$) here.',
        },
        {
          type: 'compare',
          left: { title: 'Mass $m$', tone: 'neutral', text: 'A scalar, in kilograms. Measures inertia: how hard it is to change the object\'s velocity. The same everywhere in the universe.' },
          right: { title: 'Weight $W = mg$', tone: 'neutral', text: 'A force vector, in newtons, pointing down. The gravitational pull of the planet. Changes with location: smaller on the Moon, zero far out in space.' },
        },
        {
          type: 'table',
          headers: ['Location', '$g$ (m/s²)', 'Weight of an $80\\,\\text{kg}$ soldier', 'Mass'],
          rows: [
            ['Earth', '$9.80$', '$784\\,\\text{N}$', '$80\\,\\text{kg}$'],
            ['Moon', '$1.62$', '$130\\,\\text{N}$', '$80\\,\\text{kg}$'],
            ['Mars', '$3.71$', '$297\\,\\text{N}$', '$80\\,\\text{kg}$'],
            ['Jupiter (cloud tops)', '$24.8$', '$1980\\,\\text{N}$', '$80\\,\\text{kg}$'],
          ],
          caption: 'Weight changes with $g$; mass does not. On the Moon it is easy to lift the soldier, but just as hard as on Earth to stop them when they run into you: stopping depends on mass.',
        },
        {
          type: 'derivation',
          title: 'Why heavy and light objects fall together',
          steps: [
            { tex: '\\sum F_y = -mg', why: 'In a vacuum the only force on a falling object is its weight.' },
            { tex: 'm a_y = -mg', why: 'Newton\'s second law in the vertical direction.' },
            { tex: 'a_y = -g', why: 'The mass cancels: twice the mass means twice the pull **and** twice the inertia.' },
          ],
          result: 'Every object falls with the same acceleration in a vacuum, as Apollo 15 astronaut David Scott showed on the Moon in 1971 by dropping a hammer and a falcon feather, which landed together. In air, drag spoils this, which the friction-and-drag lesson quantifies.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the cancellation is not an accident',
          text: 'Two different properties appear in $m a_y = -mg$: the **inertial** mass on the left (resistance to acceleration) and the **gravitational** mass on the right (how strongly gravity pulls). Experiments show they are equal to better than one part in $10^{14}$. Newton took this as a coincidence; Einstein made it the foundation of general relativity, where gravity is not a force at all but the geometry of spacetime.',
        },
      ],
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'truefalse',
      prompt: 'In a vacuum, a $10\\,\\text{kg}$ bowling ball dropped from a tower reaches the ground before a $1\\,\\text{kg}$ ball dropped at the same moment, because gravity pulls on it ten times harder.',
      answer: false,
      explanation: 'Gravity does pull ten times harder on the $10\\,\\text{kg}$ ball, but that ball also has ten times the inertia. $a = W/m = mg/m = g$ for both, so they fall side by side. The idea that heavy objects fall faster is Aristotle\'s; Galileo refuted it, and in air it is only (somewhat) true because drag affects light objects relatively more.',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'concept',
      title: 'The third law: forces come in pairs',
      blocks: [
        {
          type: 'p',
          text: 'Forces are interactions, so they always come in pairs. When you push on a wall, the wall pushes back on you; that backward push is what moves you when you push off from the side of a pool.',
        },
        {
          type: 'theorem',
          name: 'Newton\'s third law',
          tex: '\\vec{F}_{A \\text{ on } B} = -\\vec{F}_{B \\text{ on } A}',
          text: '[[phys-newtons-third-law|The two forces of a pair]] are equal in magnitude and opposite in direction; they are the **same type** of force (both gravitational, both contact); and they act on **different objects**.',
        },
        {
          type: 'figure',
          svg: PAIRS_SVG,
          alt: 'A book resting on a table that stands on the Earth. Purple arrows: W, the Earth pulling the book down, drawn from the book; W prime, the book pulling the Earth up, drawn from the Earth\'s surface. Orange arrows: n, the table pushing the book up; n prime, the book pushing the table down. A legend lists the four forces and groups them into pair 1 (W and W prime, gravity) and pair 2 (n and n prime, contact).',
          caption: 'Two forces act **on the book**: $W$ and $n$. They are equal and opposite because the book is at rest (first law), **not** because of the third law: they are of different types and both act on the book. The third-law partners are $W\'$ (on the Earth) and $n\'$ (on the table).',
          maxWidth: 440,
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why third-law pairs never cancel',
          text: 'Forces cancel only when they act on the **same** object. The two forces in a pair act on different objects, so each appears in a different object\'s second-law equation. A horse can pull a cart: the cart pulls back on the horse just as hard, but the horse moves because the ground pushes it forward (friction on its hooves) harder than the cart pulls back.',
        },
        {
          type: 'derivation',
          title: 'Equal forces, unequal accelerations: a car hits a truck',
          steps: [
            { tex: 'F_{\\text{truck on car}} = F_{\\text{car on truck}} = 3.0 \\times 10^4\\,\\text{N}', why: 'At the peak of the collision the forces are equal in magnitude, whichever vehicle is bigger or faster. Third law.' },
            { tex: 'a_{\\text{car}} = \\frac{3.0 \\times 10^4}{1200} = 25\\,\\text{m/s}^2', why: 'Second law for the $1200\\,\\text{kg}$ car alone.' },
            { tex: 'a_{\\text{truck}} = \\frac{3.0 \\times 10^4}{6000} = 5.0\\,\\text{m/s}^2', why: 'Second law for the $6000\\,\\text{kg}$ truck alone: same force, five times the mass.' },
          ],
          result: 'The car\'s occupants experience five times the acceleration, which is why the smaller vehicle fares worse even though the forces are identical.',
        },
        {
          type: 'graph',
          x: [0, 0.12],
          y: [-30, 30],
          height: 250,
          functions: [
            { expr: `${PULSE}/1200`, color: 'red', label: 'car, $1200\\,\\text{kg}$: $a = F/m$ (m/s²)' },
            { expr: `-${PULSE}/k`, color: 'blue', label: 'truck: $a = -F/M$ (m/s²)' },
          ],
          vlines: [{ x: 's', color: 'gray' }],
          sliders: [
            { name: 'k', min: 1200, max: 12000, step: 100, value: 6000, label: 'truck mass $M$ (kg)' },
            { name: 's', min: 0, max: 0.12, step: 0.001, value: 0.06, label: 'time $t$ (s)', play: true, speed: 0.03 },
          ],
          readouts: [
            { label: 'force on each (kN):', expr: '30sin(pi*s/0.12)^2' },
            { label: 'car $a$ (m/s²):', expr: '30000sin(pi*s/0.12)^2/1200' },
            { label: 'truck $a$ (m/s²):', expr: '-30000sin(pi*s/0.12)^2/k' },
          ],
          caption: 'A collision lasting $0.12\\,\\text{s}$ with a force pulse peaking at $30\\,\\text{kN}$ on **each** vehicle (equal and opposite at every instant). The accelerations differ by the mass ratio. Set $M = 1200\\,\\text{kg}$: two identical cars get mirror-image accelerations.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Recoil, walking and rockets',
          text: 'A rifle pushes the bullet forward and the bullet pushes the rifle back: recoil. You walk because your foot pushes back on the ground and static friction from the ground pushes you forward. A rocket pushes exhaust gas backward and the gas pushes the rocket forward, with no air needed. The momentum unit turns all three into numbers.',
        },
      ],
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'mcq',
      prompt: 'A book rests on a table. According to Newton\'s third law, what is the partner of the book\'s weight (the Earth\'s gravitational pull on the book)?',
      options: [
        { text: 'The normal force of the table pushing up on the book', why: 'The most common wrong answer. The normal force is a contact force from the table, and it acts on the book, the same object as the weight. Third-law partners act on different objects and are the same type of force.' },
        { text: 'The book\'s gravitational pull upward on the Earth', correct: true, why: 'The pair is "Earth pulls book" and "book pulls Earth": same interaction (gravity), equal and opposite, on different objects.' },
        { text: 'The book pushing down on the table', why: 'That is the partner of the **normal force** (table pushes book up, book pushes table down), a contact pair.' },
        { text: 'There is no partner, because the book is not moving', why: 'Third-law pairs exist for every interaction, whatever the motion. Being at rest is about the net force on the book, which is the first law.' },
      ],
      explanation: 'To find a partner, swap the roles: "$A$ pulls $B$" becomes "$B$ pulls $A$". Earth pulls book, so book pulls Earth (up, with $mg$). The book\'s pull gives the Earth an acceleration around $10^{-24}\\,\\text{m/s}^2$, too small to notice because of the Earth\'s enormous mass. Weight and normal force are equal here only because the book does not accelerate.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'concept',
      title: 'Solving Newton\'s-law problems',
      blocks: [
        {
          type: 'p',
          text: 'Physics problems become routine once you follow the same steps every time. This is the strategy you will use for the rest of the course, from elevators to orbits.',
        },
        {
          type: 'steps',
          items: [
            { title: 'Choose the system', text: 'Decide which object (or objects) you are applying the second law to.' },
            { title: 'Identify interactions', text: 'Everything touching the object exerts a contact force; add gravity. Use the agent test.' },
            { title: 'Draw a free-body diagram', text: 'The object as a dot or box, every force as an arrow from it, and coordinate axes. Note the direction of $\\vec{a}$ beside it.' },
            { title: 'Write the second law in components', text: '$\\sum F_x = m a_x$ and $\\sum F_y = m a_y$, with signs from your axes.' },
            { title: 'Solve symbolically, then substitute', text: 'Get a formula first; plug in numbers last.' },
            { title: 'Check', text: 'Units, signs, and limiting cases (what if a mass goes to zero or an angle to $90^\\circ$?).' },
          ],
        },
        {
          type: 'figure',
          svg: BLOCKS_SVG,
          alt: 'Two blocks side by side on a frictionless floor: A, 3.0 kilograms, and B, 2.0 kilograms. A red arrow F of 15 newtons pushes A to the right. Below, free-body diagrams as dots: A has F to the right and P B A to the left; B has P A B to the right. A note says they form a third-law pair: equal size, opposite direction, on different blocks.',
          caption: 'You push block A, and A pushes B. The contact forces $\\vec{P}_{AB}$ (A on B) and $\\vec{P}_{BA}$ (B on A) are a third-law pair.',
          maxWidth: 440,
        },
        {
          type: 'derivation',
          title: 'Two blocks pushed together',
          steps: [
            { tex: '\\text{System A+B: } F = (m_A + m_B)\\,a \\implies a = \\frac{15}{3.0 + 2.0} = 3.0\\,\\text{m/s}^2', why: 'Treat both blocks as one system. The contact forces are internal: they act within the system and cancel in pairs, so only $F$ appears.' },
            { tex: '\\text{Block B alone: } P_{AB} = m_B\\,a = 2.0 \\times 3.0 = 6.0\\,\\text{N}', why: 'The only horizontal force on B is the push from A, and B has the same acceleration as A.' },
            { tex: '\\text{Block A alone: } F - P_{BA} = m_A a \\implies 15 - 6.0 = 3.0 \\times 3.0 \\ \\checkmark', why: 'A check: by the third law $P_{BA} = P_{AB} = 6.0\\,\\text{N}$, and A\'s equation balances.' },
          ],
          result: 'The contact force is $6.0\\,\\text{N}$, less than your $15\\,\\text{N}$ push: A needs part of the push to accelerate itself. Limiting case: if $m_A \\to 0$, $P \\to F$; the massless block just transmits the push.',
        },
        {
          type: 'code',
          title: 'force_accumulator.cpp',
          runnable: true,
          code: `#include <cstdio>

struct Vec2 {
    double x, y;
};
Vec2 operator+(Vec2 a, Vec2 b) { return {a.x + b.x, a.y + b.y}; }
Vec2 operator*(double s, Vec2 v) { return {s * v.x, s * v.y}; }

struct Body {
    double mass;
    Vec2 pos{0, 0}, vel{0, 0};
    Vec2 forceAccum{0, 0};                    // sum of forces this step

    void addForce(Vec2 f) { forceAccum = forceAccum + f; }
    void integrate(double dt) {
        Vec2 acc = (1.0 / mass) * forceAccum; // Newton's second law: a = (sum F) / m
        vel = vel + dt * acc;                 // semi-implicit Euler
        pos = pos + dt * vel;
        forceAccum = {0, 0};                  // forces must be re-applied every step
    }
};

int main() {
    const double g = 9.8, dt = 1.0 / 60.0;
    Body drone{2.0};                          // 2.0 kg
    for (int step = 1; step <= 120; ++step) { // 2.0 s at 60 Hz
        drone.addForce({0.0, -drone.mass * g}); // weight
        drone.addForce({4.0, 24.0});            // rotor thrust (N)
        drone.integrate(dt);
        if (step % 60 == 0)
            std::printf("t = %.1f s: pos = (%.3f, %.3f) m, vel = (%.3f, %.3f) m/s\\n",
                        step * dt, drone.pos.x, drone.pos.y, drone.vel.x, drone.vel.y);
    }
    std::printf("exact at 2.0 s: pos = (4.000, 4.400) m, vel = (4.000, 4.400) m/s\\n");
}`,
          output: `t = 1.0 s: pos = (1.017, 1.118) m, vel = (2.000, 2.200) m/s
t = 2.0 s: pos = (4.033, 4.437) m, vel = (4.000, 4.400) m/s
exact at 2.0 s: pos = (4.000, 4.400) m, vel = (4.000, 4.400) m/s`,
          annotations: [
            { lines: '12-14', text: 'The force accumulator pattern used by Box2D, Bullet, PhysX and most hand-written engines: gameplay code calls `addForce` any number of times per step.' },
            { lines: 16, text: 'The whole of Newton\'s second law, $\\vec{a} = \\sum\\vec{F}/m$, in one line.' },
            { lines: '27-28', text: 'Weight $(0, -mg)$ plus thrust $(4, 24)$ N gives $\\sum\\vec{F} = (4.0, 4.4)$ N and $\\vec{a} = (2.0, 2.2)\\,\\text{m/s}^2$, so exactly $\\vec{r} = \\tfrac12\\vec{a}t^2 = (4.0, 4.4)$ m at $2.0$ s. The small position error is the integrator\'s, not the physics\'.' },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'error',
      prompt: 'You push horizontally with $F = 30\\,\\text{N}$ on a $4.0\\,\\text{kg}$ block A, which pushes a $2.0\\,\\text{kg}$ block B ahead of it on a frictionless floor. A student finds the force A exerts on B. Tap the first wrong line.',
      lines: [
        'Both blocks move together, so treat A + B as one system of mass $6.0$ kg.',
        '$a = \\dfrac{F}{m_A + m_B} = \\dfrac{30}{6.0} = 5.0$ m/s²',
        'The force of A on B equals the applied force, so $P_{AB} = 30$ N.',
        'Check on B: $a_B = P_{AB}/m_B = 30/2.0 = 15$ m/s².',
      ],
      errorLines: [3],
      explanation: 'The applied force acts on A, not on B. Apply the second law to B alone: the only horizontal force on B is $P_{AB}$, so $P_{AB} = m_B a = 2.0 \\times 5.0 = 10\\,\\text{N}$. Line 4 then exposes the error: $15\\,\\text{m/s}^2$ contradicts the shared acceleration of $5.0\\,\\text{m/s}^2$ from line 2. Forces are not "passed along" undiminished; part of your push accelerates A itself.',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'numeric',
      prompt: 'You push a $4.0\\,\\text{kg}$ box with a horizontal force of $20\\,\\text{N}$, and it pushes a $6.0\\,\\text{kg}$ box ahead of it across a frictionless floor. What force does the first box exert on the second? Give 3 significant figures.',
      hint: 'Find the common acceleration from the whole system, then apply the second law to the $6.0\\,\\text{kg}$ box alone.',
      label: '$P =$',
      unit: 'N',
      answer: '6*20/10',
      answerTex: '6.0 \\times \\frac{20}{10.0} = 12.0',
      tolerance: 0.1,
      explanation: 'System: $a = 20/(4.0 + 6.0) = 2.0\\,\\text{m/s}^2$. The front box has only the contact force: $P = 6.0 \\times 2.0 = 12.0\\,\\text{N}$. Check on the back box: $20 - 12.0 = 8.0 = 4.0 \\times 2.0$ ✓. Answering $20\\,\\text{N}$ forgets that the back box needs $8.0\\,\\text{N}$ of the push to accelerate itself.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'expr',
      prompt: 'A sled of mass $m$ on frictionless ice is pulled by a rope with tension $F$ at angle $\\theta$ above the horizontal. The sled stays on the ice. Write its horizontal acceleration.',
      hint: 'Only the horizontal component of the rope force accelerates the sled horizontally. Gravity and the normal force are vertical.',
      label: '$a_x =$',
      answer: 'F*cos(theta)/m',
      answerTex: 'a_x = \\frac{F\\cos\\theta}{m}',
      variables: ['F', 'm', 'theta'],
      domain: [0.2, 1.3],
      explanation: 'Horizontal second law: $\\sum F_x = F\\cos\\theta = m a_x$, so $a_x = F\\cos\\theta/m$. Check the limits: $\\theta = 0$ gives $F/m$ (all of the pull is useful), and $\\theta = 90^\\circ$ gives $0$ (a straight-up pull cannot move the sled sideways). The vertical component reduces the normal force, which matters once friction appears.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'order',
      prompt: 'Order the steps of the Newton\'s-law problem-solving strategy.',
      lines: [
        'Choose the object (system) to analyze',
        'Identify every interaction: contact forces and gravity',
        'Draw a free-body diagram with coordinate axes',
        'Write $\\sum F_x = m a_x$ and $\\sum F_y = m a_y$',
        'Solve symbolically, substitute numbers, and check units and limiting cases',
      ],
      distractors: ['Add an $m\\vec{a}$ arrow to the free-body diagram'],
      explanation: 'System first (otherwise "the forces" is ambiguous), then interactions, then the diagram that records them, then the law in components, then algebra and checks. The distractor is the classic mistake: $m\\vec{a}$ is the result of the forces, not one of them.',
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'fill',
      prompt: 'Complete the summary of Newton\'s laws.',
      template: 'With zero net force, an object moves with constant ___. The acceleration points along the ___. Third-law pair forces act on ___ objects, so they never cancel each other.',
      blanks: [{ answers: ['velocity'] }, { answers: ['net force'] }, { answers: ['different'] }],
      wordBank: ['velocity', 'speed only', 'net force', 'velocity vector', 'different', 'the same'],
      explanation: 'First law: $\\vec{F}_{\\text{net}} = \\vec{0}$ means constant velocity (speed **and** direction). Second law: $\\vec{a} = \\vec{F}_{\\text{net}}/m$, so $\\vec{a}$ is parallel to the net force, not to the velocity. Third law: the partners act on different objects, so they appear in different free-body diagrams.',
    },
  ],
  takeaways: [
    'A force is a push or pull by an identifiable agent; forces on one object add as vectors to the net force. Units: $1\\,\\text{N} = 1\\,\\text{kg}\\cdot\\text{m/s}^2$.',
    'First law: zero net force means constant velocity. No force is needed to keep something moving; friction and drag are what stop things.',
    'Second law: $\\sum\\vec{F} = m\\vec{a}$ in inertial frames, component by component. $m\\vec{a}$ is the result, never a force on the diagram.',
    'Weight $W = mg$ is a force that depends on location; mass is inertia and does not. In a vacuum $a = g$ for every object because the mass cancels.',
    'Third law: $\\vec{F}_{A\\text{ on }B} = -\\vec{F}_{B\\text{ on }A}$, same type, different objects, never cancelling. The normal force is **not** the partner of the weight.',
  ],
  reading: [
    {
      title: 'OpenStax — University Physics Volume 1, Chapter 5',
      url: 'https://openstax.org/details/books/university-physics-volume-1',
      source: 'openstax',
      note: 'Sections 5.1 to 5.5 cover forces, the three laws, mass and weight, with many worked examples.',
    },
    {
      title: 'Wikipedia — Newton\'s laws of motion',
      url: 'https://en.wikipedia.org/wiki/Newton%27s_laws_of_motion',
      source: 'wikipedia',
      note: 'History, precise statements, and the laws\' limits (relativity, quantum mechanics).',
    },
    {
      title: 'MIT OCW 8.01SC — Classical Mechanics',
      url: 'https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/',
      source: 'other',
      note: 'The Newton\'s laws lessons include short concept videos and worked problems on pairs and contact forces.',
    },
    {
      title: 'PhET — Forces and Motion: Basics',
      url: 'https://phet.colorado.edu/',
      source: 'other',
      note: 'Search for "Forces and Motion": push crates with and without friction and watch net force and acceleration.',
    },
  ],
};
