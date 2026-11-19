import type { Lesson } from '../../types';

const FIG_RECOIL = /*svg:phys-u06/f1.svg*/`<svg viewBox="0 0 520 210" xmlns="http://www.w3.org/2000/svg"><text x="10.0" y="40.0" font-size="14" text-anchor="start" font-weight="bold">before</text><path d="M110 36 L150 30 L220 30 L220 44 L180 44 L172 56 L162 56 L166 44 L150 44 L110 54 Z" fill="currentColor" class="f-gray" fill-opacity="0.35" stroke="currentColor" stroke-width="1.8"/><rect x="220" y="33" width="80" height="6" fill="currentColor" class="f-gray" fill-opacity="0.35" stroke="currentColor" stroke-width="1.5"/><ellipse cx="292" cy="36" rx="6" ry="3" fill="currentColor" class="f-orange"/><text x="330.0" y="42.0" font-size="13" text-anchor="start">everything at rest:  P = 0</text><line x1="10" y1="80" x2="510" y2="80" stroke="currentColor" class="s-gray" stroke-width="1" stroke-dasharray="4 4"/><text x="10.0" y="125.0" font-size="14" text-anchor="start" font-weight="bold">after</text><path d="M85 121 L125 115 L195 115 L195 129 L155 129 L147 141 L137 141 L141 129 L125 129 L85 139 Z" fill="currentColor" class="f-gray" fill-opacity="0.35" stroke="currentColor" stroke-width="1.8"/><rect x="195" y="118" width="80" height="6" fill="currentColor" class="f-gray" fill-opacity="0.35" stroke="currentColor" stroke-width="1.5"/><line x1="130.0" y1="160.0" x2="90.0" y2="160.0" stroke="currentColor" class="s-blue" stroke-width="3"/><path d="M80.0 160.0 L90.0 155.5 L90.0 164.5 Z" fill="currentColor" class="f-blue"/><text x="105.0" y="182.0" font-size="13" text-anchor="middle" class="t-blue" font-style="italic">V (recoil)</text><text x="105.0" y="198.0" font-size="12" text-anchor="middle">M = 3.4 kg</text><ellipse cx="400" cy="121" rx="6" ry="3" fill="currentColor" class="f-orange"/><line x1="410.0" y1="121.0" x2="490.0" y2="121.0" stroke="currentColor" class="s-red" stroke-width="3"/><path d="M500.0 121.0 L490.0 125.5 L490.0 116.5 Z" fill="currentColor" class="f-red"/><text x="450.0" y="145.0" font-size="13" text-anchor="middle" class="t-red" font-style="italic">v = 940 m/s</text><text x="450.0" y="162.0" font-size="12" text-anchor="middle">m = 4.0 g</text><text x="300.0" y="198.0" font-size="14" text-anchor="middle" font-weight="bold">MV + mv = 0</text></svg>`;

export const lesson: Lesson = {
  id: 'phys-momentum-impulse',
  title: 'Momentum and Impulse',
  summary: 'Newton actually wrote his second law as $\\vec F = d\\vec p/dt$. Integrating it over time gives the impulse–momentum theorem: the area under a force–time graph is the change in momentum. That one idea explains bat swings, airbags, parachute landings and rifle recoil.',
  minutes: 19,
  objectives: [
    'Compute momentum $\\vec p = m\\vec v$ as a vector and contrast it with kinetic energy',
    'Write Newton\'s second law as $\\vec F_{\\text{net}} = d\\vec p/dt$ and integrate it to get $\\vec J = \\int \\vec F\\,dt = \\Delta \\vec p$',
    'Find an impulse as the area under a force–time graph and compute average forces from $F_{\\text{avg}} = \\Delta p/\\Delta t$',
    'Explain how airbags, padding and bent knees reduce forces without changing the impulse',
    'Apply momentum conservation to recoil, and handle impulse as a vector in two dimensions',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Momentum: mass in motion',
      blocks: [
        {
          type: 'p',
          text: 'Stopping a slow freight train is harder than stopping a fast baseball, and stopping a bullet is harder than stopping a thrown pebble. "How hard is this to stop?" depends on both mass and velocity. Newton called the product the *quantity of motion*; we call it **momentum**.',
        },
        {
          type: 'definition',
          term: 'Linear momentum',
          text: 'The [[phys-momentum|momentum]] of a particle of mass $m$ moving with [[velocity]] $\\vec v$ is\n\n$$\\vec p = m\\vec v.$$\n\nIt is a **vector**, pointing along the velocity, with SI unit $\\text{kg}\\cdot\\text{m/s}$ (equivalently $\\text{N}\\cdot\\text{s}$). In components, $p_x = mv_x$ and $p_y = mv_y$.',
        },
        {
          type: 'p',
          text: 'Newton\'s second law in its original form is a statement about momentum. Since $m$ is constant for a particle, $\\frac{d\\vec p}{dt} = m\\frac{d\\vec v}{dt} = m\\vec a$, so',
        },
        { type: 'math', tex: '\\vec F_{\\text{net}} = \\frac{d\\vec p}{dt}', caption: 'Net force is the rate of change of momentum. This form also holds when mass changes, as for a rocket (later in this unit).' },
        {
          type: 'table',
          headers: ['Property', 'Momentum $\\vec p = m\\vec v$', 'Kinetic energy $K = \\tfrac12 mv^2$'],
          rows: [
            ['Type', 'vector', 'scalar'],
            ['Grows with speed like', '$v$', '$v^2$'],
            ['Changed by', 'impulse $\\int \\vec F\\,dt$ (force × time)', 'work $\\int \\vec F \\cdot d\\vec r$ (force × distance)'],
            ['Relation', '$p = \\sqrt{2mK}$', '$K = \\dfrac{p^2}{2m}$'],
          ],
          caption: 'Two different measures of "how much motion". They answer different questions.',
        },
        {
          type: 'derivation',
          title: 'A bullet versus a soccer ball',
          steps: [
            { tex: 'p_{\\text{bullet}} = (0.0040\\,\\text{kg})(950\\,\\text{m/s}) = 3.8\\,\\text{kg}\\cdot\\text{m/s}', why: 'Convert $4.0\\,\\text{g}$ to kilograms first.' },
            { tex: 'p_{\\text{ball}} = (0.43\\,\\text{kg})(10\\,\\text{m/s}) = 4.3\\,\\text{kg}\\cdot\\text{m/s}', why: 'A gently kicked soccer ball.' },
            { tex: 'K_{\\text{bullet}} = \\tfrac12(0.0040)(950)^2 = 1805\\,\\text{J}, \\quad K_{\\text{ball}} = \\tfrac12(0.43)(10)^2 = 21.5\\,\\text{J}', why: 'Same formula, very different weighting of speed.' },
          ],
          result: 'The ball has *more* momentum, yet the bullet has 84 times the kinetic energy. Momentum tells you how hard each is to stop (how much impulse); energy tells you how much damage it can do on the way (how much work).',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'mcq',
      prompt: 'A $1500\\,\\text{kg}$ car moves at $2.0\\,\\text{m/s}$ and a $0.145\\,\\text{kg}$ baseball at $40\\,\\text{m/s}$. Which statement is correct?',
      options: [
        { text: 'The car has more momentum, but the baseball has less kinetic energy than the car', correct: true, why: '$p_{\\text{car}} = 3000\\,\\text{kg}\\cdot\\text{m/s}$ vs $p_{\\text{ball}} = 5.8$; $K_{\\text{car}} = 3000\\,\\text{J}$ vs $K_{\\text{ball}} = 116\\,\\text{J}$. The car wins both.' },
        { text: 'The baseball has more momentum because it is much faster', why: 'Momentum is mass times velocity: $0.145 \\times 40 = 5.8$, while the car has $1500 \\times 2.0 = 3000$. Speed alone does not decide it.' },
        { text: 'They have equal momentum because both are moving', why: 'Momentum is a quantity, not a yes/no property of moving objects. Compute $mv$ for each.' },
        { text: 'The baseball has more kinetic energy because $K$ depends on $v^2$', why: 'The $v^2$ helps the ball, but $\\tfrac12(0.145)(40)^2 = 116\\,\\text{J}$ is still far less than $\\tfrac12(1500)(2.0)^2 = 3000\\,\\text{J}$.' },
      ],
      explanation: 'Always compute rather than guess: $p = mv$ gives $3000$ vs $5.8\\,\\text{kg}\\cdot\\text{m/s}$, and $K = \\tfrac12 mv^2$ gives $3000$ vs $116\\,\\text{J}$. A slowly rolling car carries far more of both than a fastball.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Impulse: the area under a force–time graph',
      blocks: [
        {
          type: 'p',
          text: 'In a collision, a kick or a bat swing, the force rises and falls in a few milliseconds, far too fast and too irregular to track with $F = ma$ moment by moment. But you rarely need the details. Integrate Newton\'s law over the contact time:',
        },
        {
          type: 'derivation',
          title: 'The impulse–momentum theorem',
          steps: [
            { tex: '\\frac{d\\vec p}{dt} = \\vec F_{\\text{net}}(t)', why: 'Newton\'s second law in momentum form.' },
            { tex: '\\int_{t_i}^{t_f} \\frac{d\\vec p}{dt}\\,dt = \\int_{t_i}^{t_f} \\vec F_{\\text{net}}\\,dt', why: 'Integrate both sides over the time of the interaction.' },
            { tex: '\\vec p_f - \\vec p_i = \\int_{t_i}^{t_f} \\vec F_{\\text{net}}\\,dt \\equiv \\vec J', why: 'Fundamental Theorem of Calculus on the left. The right side is called the impulse.' },
          ],
          result: 'The [[phys-impulse|impulse]] of the net force equals the change in momentum: $\\vec J = \\Delta \\vec p$.',
        },
        {
          type: 'theorem',
          name: 'Impulse–momentum theorem',
          tex: '\\vec J = \\int_{t_i}^{t_f} \\vec F\\,dt = \\Delta\\vec p = m\\vec v_f - m\\vec v_i',
          text: 'Graphically, the $x$-component of the impulse is the signed area under the $F_x$-versus-$t$ graph. The **average force** is the constant force that gives the same area over the same time: $\\vec F_{\\text{avg}} = \\vec J/\\Delta t$.',
        },
        {
          type: 'graph',
          x: [0, 22],
          y: [0, 5000],
          xStep: 2,
          yStep: 1000,
          height: 260,
          functions: [
            { expr: '(pi*3/(2*0.001w))*sin(pi*x/w)', domain: [0, 'w'], label: 'force on the ball (N); time in ms', color: 'blue' },
            { expr: '3/(0.001w)', domain: [0, 'w'], label: 'average force $J/\\Delta t$', color: 'orange', dashed: true },
          ],
          areas: [{ expr: '(pi*3/(2*0.001w))*sin(pi*x/w)', from: 0, to: 'w', color: 'blue' }],
          sliders: [{ name: 'w', min: 1, max: 20, step: 0.5, value: 2, label: 'contact time $\\Delta t$ (ms)' }],
          readouts: [
            { label: 'impulse (area) $=$', expr: '3', digits: 2 },
            { label: 'peak force (N) $=$', expr: 'pi*3/(2*0.001w)', digits: 0 },
            { label: 'average force (N) $=$', expr: '3/(0.001w)', digits: 0 },
          ],
          caption: 'Every pulse here delivers the same impulse, $3.0\\,\\text{N}\\cdot\\text{s}$. Stretch the contact time and the same area is spread out: the force drops in proportion. This single picture explains every safety device in the next card.',
        },
        {
          type: 'derivation',
          title: 'A bat hits a fastball',
          steps: [
            { tex: 'v_i = -40\\,\\text{m/s}, \\quad v_f = +50\\,\\text{m/s}, \\quad m = 0.145\\,\\text{kg}', why: 'Choose $+x$ toward the outfield. The pitch arrives moving in $-x$.' },
            { tex: 'J_x = m(v_f - v_i) = 0.145\\,[50 - (-40)] = 13.1\\,\\text{N}\\cdot\\text{s}', why: 'Impulse–momentum theorem. Reversing direction means the speeds *add*.' },
            { tex: 'F_{\\text{avg}} = \\frac{J_x}{\\Delta t} = \\frac{13.05\\,\\text{N}\\cdot\\text{s}}{1.2 \\times 10^{-3}\\,\\text{s}} \\approx 1.1 \\times 10^{4}\\,\\text{N}', why: 'A typical bat–ball contact lasts about $1.2\\,\\text{ms}$.' },
          ],
          result: 'For about a millisecond the bat pushes with over a tonne-weight of force, nearly 8000 times the ball\'s own weight. Gravity\'s impulse during the contact is utterly negligible.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why impulse is the right tool for collisions',
          text: 'During a brief collision the contact force is huge and unknown in detail, while ordinary forces like gravity act for so short a time that their impulse is tiny. So you can treat the collision as an instantaneous jump in momentum, $\\Delta \\vec p = \\vec J$. Game physics engines do exactly this: collision response applies an *impulse* in a single frame rather than a force over many frames.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'numeric',
      prompt: 'During a serve, the racket\'s force on a $0.058\\,\\text{kg}$ tennis ball rises linearly from $0$ to $1200\\,\\text{N}$ and falls linearly back to $0$, a triangle lasting $5.0\\,\\text{ms}$ in total. The ball starts essentially at rest (tossed up and momentarily stopped). How fast does it leave the racket? Give 3 significant figures.',
      hint: 'The impulse is the area of the triangle: $\\tfrac12 \\times$ base $\\times$ height. Then $v = J/m$.',
      answer: '0.5*1200*0.005/0.058',
      answerTex: '51.7\\,\\text{m/s}',
      tolerance: 0.4,
      label: '$v =$',
      unit: 'm/s',
      explanation: '$J = \\tfrac12(5.0 \\times 10^{-3}\\,\\text{s})(1200\\,\\text{N}) = 3.0\\,\\text{N}\\cdot\\text{s}$. Since $v_i = 0$, $v_f = J/m = 3.0/0.058 = 51.7\\,\\text{m/s}$ (about $186\\,\\text{km/h}$, a strong serve). Using the peak force for the whole $5.0\\,\\text{ms}$ (a rectangle) doubles the answer to $103\\,\\text{m/s}$.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Airbags, padding and landing rolls',
      blocks: [
        {
          type: 'p',
          text: 'In a crash, your momentum must go from $mv$ to zero. That change, and so the impulse, is fixed by your mass and speed. What you **can** control is how long the stop takes. Since $F_{\\text{avg}} = \\Delta p/\\Delta t$, stretching $\\Delta t$ shrinks the force.',
        },
        {
          type: 'derivation',
          title: 'A 75 kg driver stopping from 15 m/s (54 km/h)',
          steps: [
            { tex: '|\\Delta p| = (75\\,\\text{kg})(15\\,\\text{m/s}) = 1125\\,\\text{kg}\\cdot\\text{m/s}', why: 'Same for every way of stopping.' },
            { tex: '\\text{Dashboard, } \\Delta t \\approx 0.010\\,\\text{s}: \\quad F_{\\text{avg}} = \\frac{1125}{0.010} \\approx 1.1 \\times 10^{5}\\,\\text{N}', why: 'A hard surface stops you within a few centimetres: about 150 times body weight.' },
            { tex: '\\text{Belt + airbag, } \\Delta t \\approx 0.15\\,\\text{s}: \\quad F_{\\text{avg}} = \\frac{1125}{0.15} = 7.5 \\times 10^{3}\\,\\text{N}', why: 'The belt stretches and the airbag vents gas, so the stop takes 15 times longer: about 10 times body weight, survivable.' },
          ],
          result: 'Same impulse, one-fifteenth of the force. The airbag also spreads that force over a large area of chest and face, lowering the pressure.',
        },
        {
          type: 'graph',
          x: [0, 0.3],
          y: [0, 120],
          xStep: 0.05,
          yStep: 20,
          height: 250,
          functions: [{ expr: '1125/(1000x)', domain: [0.008, 0.3], label: 'average force (kN) to stop $1125\\,\\text{kg}\\cdot\\text{m/s}$' }],
          points: [{ x: 'd', y: '1125/(1000d)', color: 'red' }],
          sliders: [{ name: 'd', min: 0.01, max: 0.3, step: 0.005, value: 0.15, label: 'stopping time $\\Delta t$ (s)' }],
          readouts: [
            { label: '$F_{\\text{avg}}$ (kN) $=$', expr: '1125/(1000d)', digits: 1 },
            { label: 'in body weights $F/(mg) =$', expr: '1125/(d*75*9.8)', digits: 1 },
          ],
          caption: 'Horizontal axis: stopping time (s). The hyperbola $F = \\Delta p/\\Delta t$ is brutal at the short end: halving the time doubles the force.',
        },
        {
          type: 'list',
          items: [
            '**Parachute landing fall:** paratroopers land feet-together and roll through calves, thigh, hip and back. The roll lengthens the stopping time and distance and spreads the impulse over large muscle groups instead of the ankles.',
            '**Bending your knees** when you jump down from a truck does the same thing: a stiff-legged landing stops you in a few centimetres and milliseconds.',
            '**Helmet and armor padding** crushes in a controlled way, adding milliseconds. Crumple zones in cars are designed to collapse for the same reason.',
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Padding does not reduce the impulse',
          text: 'A common mistake is to say that an airbag "absorbs momentum". Your momentum change is the same with or without it: from $mv$ to $0$. The airbag changes the *time* (and area) over which that impulse is delivered. In fact a surface that makes you **bounce** delivers a *larger* impulse, because your momentum must be reversed, not just cancelled.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'truefalse',
      prompt: 'An airbag protects a driver because it reduces the driver\'s change in momentum during the crash.',
      answer: false,
      explanation: 'The driver goes from moving with the car to stopped either way, so $\\Delta p$ (and the impulse) is the same. The airbag increases the stopping **time**, and $F_{\\text{avg}} = \\Delta p/\\Delta t$ falls accordingly. It also spreads the force over a larger area.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'Recoil: momentum of a system',
      blocks: [
        {
          type: 'p',
          text: 'When a rifle fires, the expanding gas pushes the bullet forward and the rifle backward. By Newton\'s third law these forces are equal and opposite at every instant, and they last exactly as long as each other, so their impulses are equal and opposite. The bullet gains forward momentum; the rifle gains the same amount backward.',
        },
        {
          type: 'figure',
          svg: FIG_RECOIL,
          alt: 'Before: rifle and bullet at rest, total momentum zero. After: bullet moving right at 940 m/s, rifle recoiling left with velocity V.',
          caption: 'The rifle–bullet system starts with zero momentum. The internal forces cannot change the total, so it is still zero afterward.',
          maxWidth: 480,
        },
        {
          type: 'derivation',
          title: 'Recoil speed of a 3.4 kg rifle firing a 4.0 g bullet at 940 m/s',
          steps: [
            { tex: 'MV + mv = 0', why: 'System: rifle + bullet. Total momentum before firing is zero, and only internal forces act along $x$ during the brief firing (we neglect the shooter for now).' },
            { tex: 'V = -\\frac{m}{M}\\,v = -\\frac{0.0040}{3.4}(940\\,\\text{m/s})', why: 'Solve for the rifle\'s velocity; the minus sign means backward.' },
            { tex: 'V \\approx -1.1\\,\\text{m/s}', why: 'The mass ratio is $1/850$, so the speed ratio is $850$.' },
          ],
          result: 'The rifle kicks back at about $1.1\\,\\text{m/s}$. Its kinetic energy is $\\tfrac12(3.4)(1.1)^2 \\approx 2.1\\,\\text{J}$, against the bullet\'s $1.77\\,\\text{kJ}$: equal momenta, wildly unequal energies, because $K = p^2/(2m)$ favours the light object.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Action–reaction pairs do not cancel',
          text: 'The force of the gas on the bullet and on the rifle are a third-law pair, but they act on **different** objects, so they do not cancel for either one: the bullet accelerates forward, the rifle backward. They cancel only when you add up the momentum of the **whole system**, which is why the total stays zero.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Real recoil is a little larger',
          text: 'The propellant gas also leaves the muzzle fast, carrying forward momentum, so the rifle recoils somewhat more than the bullet alone predicts. Muzzle brakes redirect that gas sideways and backward to reduce felt recoil. Holding the rifle firmly adds your body\'s mass to $M$, which lowers $V$.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Recoil in games',
          text: 'Weapon kick in a shooter is often modelled as an impulse applied to the camera or character controller each shot: $\\Delta \\vec v = -\\vec p_{\\text{bullet}}/m_{\\text{player}}$ (scaled for feel), followed by a damped spring that recenters the aim.',
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'numeric',
      prompt: 'A $4.10\\,\\text{kg}$ rifle, held loosely, fires a $9.70\\,\\text{g}$ bullet at $830\\,\\text{m/s}$. Ignoring the propellant gas, what is the rifle\'s recoil **speed**? Give 3 significant figures.',
      hint: 'Total momentum stays zero: $MV = -mv$. Convert grams to kilograms.',
      answer: '0.0097*830/4.1',
      answerTex: '1.96\\,\\text{m/s}',
      tolerance: 0.015,
      label: '$|V| =$',
      unit: 'm/s',
      explanation: '$|V| = \\dfrac{m v}{M} = \\dfrac{(0.00970\\,\\text{kg})(830\\,\\text{m/s})}{4.10\\,\\text{kg}} = \\dfrac{8.05}{4.10} = 1.96\\,\\text{m/s}$. Leaving the bullet mass in grams gives $1964\\,\\text{m/s}$, a rifle faster than its bullet, which fails the sanity check immediately.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'concept',
      title: 'Impulse as a vector',
      blocks: [
        {
          type: 'p',
          text: 'Because momentum is a vector, impulse is too: $\\vec J = \\vec p_f - \\vec p_i$, computed component by component. A puck bouncing off the boards is the classic example. Let the wall run along the $x$-axis. If the bounce is perfectly elastic and the wall frictionless, the wall can only push perpendicular to itself, so $p_x$ is unchanged and $p_y$ reverses.',
        },
        {
          type: 'graph',
          x: [-1, 6],
          y: [-5.2, 5.2],
          equal: true,
          height: 300,
          segments: [
            { from: [0, 0], to: ['4.8cos(a*pi/180)', '-4.8sin(a*pi/180)'], color: 'blue', arrow: true, label: 'p before' },
            { from: [0, 0], to: ['4.8cos(a*pi/180)', '4.8sin(a*pi/180)'], color: 'green', arrow: true, label: 'p after' },
            { from: ['4.8cos(a*pi/180)', '-4.8sin(a*pi/180)'], to: ['4.8cos(a*pi/180)', '4.8sin(a*pi/180)'], color: 'red', arrow: true, label: 'Δp = J' },
          ],
          sliders: [{ name: 'a', min: 5, max: 90, step: 1, value: 30, label: 'angle $\\theta$ between path and wall (degrees)' }],
          readouts: [
            { label: '$|\\Delta \\vec p| = 2p\\sin\\theta =$', expr: '2*4.8sin(a*pi/180)', digits: 2 },
            { label: 'average force over $20\\,\\text{ms}$ (N) $=$', expr: '2*4.8sin(a*pi/180)/0.02', digits: 0 },
          ],
          caption: 'A $0.40\\,\\text{kg}$ puck at $12\\,\\text{m/s}$ has $p = 4.8\\,\\text{kg}\\cdot\\text{m/s}$. The boards run along the $x$-axis. Blue: momentum before; green: after; red: the change, drawn tip to tip. It is always perpendicular to the wall, and largest for a head-on hit ($90^\\circ$).',
        },
        {
          type: 'derivation',
          title: 'The puck at 30° to the boards',
          steps: [
            { tex: '\\vec p_i = (4.8\\cos 30^\\circ)\\,\\hat{\\imath} - (4.8\\sin 30^\\circ)\\,\\hat{\\jmath} = 4.16\\,\\hat{\\imath} - 2.40\\,\\hat{\\jmath}', why: 'Resolve into [[vector-components]] along and perpendicular to the wall.' },
            { tex: '\\vec p_f = 4.16\\,\\hat{\\imath} + 2.40\\,\\hat{\\jmath}', why: 'Elastic bounce off a frictionless wall: parallel part unchanged, perpendicular part reversed.' },
            { tex: '\\vec J = \\vec p_f - \\vec p_i = 4.80\\,\\hat{\\jmath}\\ \\text{kg}\\cdot\\text{m/s}', why: 'Subtract component by component. The $x$-parts cancel.' },
          ],
          result: 'The impulse is $4.8\\,\\text{N}\\cdot\\text{s}$ straight out from the boards, even though the puck\'s speed never changed. Over a $20\\,\\text{ms}$ contact that is an average force of $240\\,\\text{N}$.',
        },
        {
          type: 'p',
          text: 'Real force–time data comes from sensors as samples, not formulas. To get the impulse you integrate numerically, exactly as you would integrate any sampled signal.',
        },
        {
          type: 'code',
          title: 'impulse.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdio>
#include <initializer_list>

const double pi = std::acos(-1.0);
const double Fmax = 1500.0, tau = 0.008;   // peak force (N), contact time (s)

// Force on a soccer ball during a kick, as a force sensor would record it.
double force(double t) { return Fmax * std::sin(pi * t / tau); }

// Impulse J = integral of F dt by the trapezoid rule with n intervals.
double impulse(int n) {
    double h = tau / n, J = 0.0;
    for (int i = 0; i < n; ++i)
        J += 0.5 * (force(i * h) + force((i + 1) * h)) * h;
    return J;
}

int main() {
    const double m = 0.43;                     // ball mass, kg
    for (int n : {4, 8, 16, 64})
        std::printf("n = %2d samples: J = %.4f N*s\\n", n, impulse(n));
    double exact = 2 * Fmax * tau / pi;
    std::printf("exact 2*Fmax*tau/pi:  %.4f N*s\\n", exact);
    std::printf("average force: %.0f N, launch speed: %.2f m/s\\n", exact / tau, exact / m);
}`,
          output: `n =  4 samples: J = 7.2426 N*s
n =  8 samples: J = 7.5410 N*s
n = 16 samples: J = 7.6149 N*s
n = 64 samples: J = 7.6379 N*s
exact 2*Fmax*tau/pi:  7.6394 N*s
average force: 955 N, launch speed: 17.77 m/s`,
          annotations: [
            { lines: 9, text: 'A half-sine pulse: $F(t) = F_{\\max}\\sin(\\pi t/\\tau)$ for $0 \\le t \\le \\tau$.' },
            { lines: '12-17', text: 'Trapezoid rule: average the force at both ends of each interval and multiply by its width.' },
            { lines: 23, text: 'Exact area: $\\int_0^\\tau F_{\\max}\\sin(\\pi t/\\tau)\\,dt = \\frac{2F_{\\max}\\tau}{\\pi}$.' },
            { lines: 25, text: 'Average force $J/\\tau = \\frac{2}{\\pi}F_{\\max}$, and since the ball starts at rest, $v = J/m$.' },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'mcq',
      prompt: 'Two identical balls hit a wall at the same speed. Ball A sticks to the wall (it is covered in putty); ball B bounces straight back at the same speed. Which receives the larger impulse from the wall?',
      options: [
        { text: 'Ball B, twice as large as A\'s', correct: true, why: 'A: $\\Delta p = 0 - (-mv) = mv$. B: $\\Delta p = mv - (-mv) = 2mv$. Reversing momentum takes twice the impulse of stopping it.' },
        { text: 'Ball A, because it stops completely', why: 'Stopping removes $mv$; reversing removes $mv$ and then supplies another $mv$ in the other direction.' },
        { text: 'They receive equal impulses, because they hit at the same speed', why: 'The impulse depends on the change in momentum, which includes the final velocity.' },
        { text: 'It cannot be decided without the contact times', why: 'Impulse equals $\\Delta p$ regardless of how long the contact lasts. The contact time affects the average force, not the impulse.' },
      ],
      explanation: 'Take toward the wall as negative: both arrive with $p = -mv$. A ends at $0$, so $J_A = +mv$; B ends at $+mv$, so $J_B = +2mv$. This is why a bouncing hailstone damages a roof more than a splatting mudball of the same mass and speed, and why turbine blades are curved to turn water or gas back the way it came.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'error',
      prompt: 'A $0.50\\,\\text{kg}$ ball moving at $8.0\\,\\text{m/s}$ hits a wall head-on and rebounds at $6.0\\,\\text{m/s}$. A student finds the magnitude of the impulse from the wall. Tap the first line that is wrong.',
      lines: [
        '$J = \\Delta p = m(v_f - v_i)$',
        '$= (0.50)(6.0 - 8.0)$',
        '$= -1.0\\,\\text{kg}\\cdot\\text{m/s}$',
        'so $|J| = 1.0\\,\\text{N}\\cdot\\text{s}$',
      ],
      errorLines: [2],
      explanation: 'Line 2 treats both velocities as having the same sign. With $+x$ away from the wall, $v_i = -8.0\\,\\text{m/s}$ (toward the wall) and $v_f = +6.0\\,\\text{m/s}$. Then $J = 0.50[6.0 - (-8.0)] = 7.0\\,\\text{N}\\cdot\\text{s}$, seven times the student\'s answer. Momentum is a vector: in 1D, that means signs.',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'expr',
      prompt: 'A rocket sled\'s thrust falls off as its fuel burns: $F(t) = 400 - 80t$ newtons for $0 \\le t \\le 5\\,\\text{s}$. Ignoring friction and drag, and starting from rest, find the sled\'s momentum $p(t)$ (in $\\text{kg}\\cdot\\text{m/s}$) during the burn.',
      hint: 'Momentum gained is the impulse: $p(t) = \\int_0^t F(t\')\\,dt\'$.',
      answer: '400t - 40t^2',
      answerTex: 'p(t) = 400t - 40t^2',
      variables: ['t'],
      domain: [0, 5],
      label: '$p(t) =$',
      explanation: '$p(t) = 0 + \\int_0^t (400 - 80t\')\\,dt\' = 400t - 40t^2$. At burnout ($t = 5\\,\\text{s}$) the impulse is $2000 - 1000 = 1000\\,\\text{N}\\cdot\\text{s}$, the area of the triangle under $F(t)$. Note $dp/dt = 400 - 80t = F$, as Newton\'s law in momentum form demands.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'fill',
      prompt: 'Complete the statement of the impulse–momentum theorem.',
      template: 'The impulse of a force is $\\vec J = \\int \\vec F\\,$___, which equals the area under the force–___ graph. The net impulse equals the change in ___.',
      blanks: [{ answers: ['$dt$'] }, { answers: ['time'] }, { answers: ['momentum'] }],
      wordBank: ['$dt$', '$dx$', 'time', 'position', 'momentum', 'kinetic energy'],
      explanation: 'Impulse integrates force over **time** and changes momentum; work integrates force over **position** ($dx$) and changes kinetic energy. Keeping the two pairs straight ($\\int F\\,dt \\leftrightarrow \\Delta p$, $\\int F\\,dx \\leftrightarrow \\Delta K$) prevents most momentum–energy mix-ups.',
    },
  ],
  takeaways: [
    'Momentum $\\vec p = m\\vec v$ is a vector; Newton\'s second law reads $\\vec F_{\\text{net}} = d\\vec p/dt$.',
    'Impulse $\\vec J = \\int \\vec F\\,dt$ is the area under the force–time graph, and the net impulse equals $\\Delta \\vec p$.',
    'For a fixed $\\Delta p$, a longer stopping time means a smaller average force $F_{\\text{avg}} = \\Delta p/\\Delta t$: airbags, crumple zones, padding and landing rolls.',
    'A bounce needs more impulse than a stop, because the momentum is reversed.',
    'Recoil: internal third-law forces give equal and opposite impulses, so the system\'s total momentum is unchanged, even though the kinetic energies are very unequal.',
  ],
  reading: [
    {
      title: 'OpenStax University Physics Volume 1 — Chapter 9: Linear Momentum and Collisions',
      url: 'https://openstax.org/details/books/university-physics-volume-1',
      source: 'openstax',
      note: 'Sections 9.1–9.2 define momentum and impulse and work through force–time graphs and safety examples.',
    },
    {
      title: 'Khan Academy — Physics',
      url: 'https://www.khanacademy.org/science/physics',
      source: 'khan',
      note: 'The "Impacts and linear momentum" unit has short videos on impulse and force–time graphs.',
    },
    {
      title: 'Wikipedia — Impulse (physics)',
      url: 'https://en.wikipedia.org/wiki/Impulse_(physics)',
      source: 'wikipedia',
      note: 'A concise reference, including impulse in rocket engines (specific impulse).',
    },
  ],
};
