import type { Lesson } from '../../types';

// Seesaw: child 25 kg at x = -2 m, adult 40 kg at x = d; net counterclockwise torque and a clamped tilt angle.
const TAU = '(9.8*(25*2 - 40*d))';
const TILT = `max(min(0.002*${TAU}, 0.15), -0.15)`;

// Tipping box: width 1, height 2, pivot corner at the origin, tilted clockwise by a degrees.
const C = 'cos(a*pi/180)';
const S = 'sin(a*pi/180)';
const corner = (x: number, y: number): [string, string] => [`${x}*${C} + ${y}*${S}`, `-(${x})*${S} + ${y}*${C}`];

// Ladder: 10 kg uniform ladder, 75 kg climber a fraction p of the way up, angle q degrees from the floor.
const MU = (p: string) => `(5 + 75*${p})/(85*tan(q*pi/180))`;

export const lesson: Lesson = {
  id: 'phys-static-equilibrium',
  title: 'Static Equilibrium',
  summary: 'The two conditions for an object to stay at rest, ΣF = 0 and Στ = 0, the center of gravity, and how to solve beams, booms, ladders and tipping problems.',
  minutes: 19,
  objectives: [
    'State and justify the two conditions for static equilibrium, $\\sum\\vec{F} = \\vec{0}$ and $\\sum\\vec{\\tau} = \\vec{0}$',
    'Locate the center of gravity and explain why the weight acts there',
    'Solve equilibrium problems by choosing a pivot that eliminates unknown forces',
    'Analyse beams, hinged booms with cables, and ladders, including the minimum angle before slipping',
    'Predict when an object tips over and relate stability to the height of the center of gravity',
  ],
  steps: [
    {
      kind: 'concept',
      title: 'Two conditions, not one',
      blocks: [
        {
          type: 'p',
          text: 'Bridges, cranes, ladders and bookshelves have one job: stay put. An object is in **static equilibrium** when it is at rest and stays at rest: its center of mass does not accelerate, **and** it does not start to rotate.',
        },
        {
          type: 'p',
          text: 'Zero net force is not enough. Push up on one end of a bar and down on the other with equal forces: the forces cancel, so the center of mass stays put, but the bar spins. A pair of equal, opposite forces that do not share a line of action is called a [[phys-couple|couple]].',
        },
        {
          type: 'figure',
          svg: /*fig:se-couple*/`<svg viewBox="0 0 440 190" xmlns="http://www.w3.org/2000/svg"><rect x="80" y="95" width="280" height="14" rx="0" fill="currentColor" class="f-gray" fill-opacity="0.2"/><rect x="80" y="95" width="280" height="14" rx="0" fill="none" stroke="currentColor" stroke-width="1.4"/><circle cx="220" cy="102" r="4" fill="currentColor"/><text x="220" y="130" font-size="12" text-anchor="middle" class="t-gray">CM</text><line x1="90" y1="102" x2="90" y2="36.3" stroke="currentColor" class="s-red" stroke-width="2.4"/><path d="M90,30 L85.5,39 L94.5,39 Z" fill="currentColor" class="f-red"/><text x="100" y="40" font-size="15" text-anchor="start" class="t-red" font-style="italic" font-weight="600">F</text><line x1="350" y1="102" x2="350" y2="167.7" stroke="currentColor" class="s-red" stroke-width="2.4"/><path d="M350,174 L354.5,165 L345.5,165 Z" fill="currentColor" class="f-red"/><text x="340" y="172" font-size="15" text-anchor="end" class="t-red" font-style="italic" font-weight="600">F</text><path d="M267,119.1 A50,50 0 0 1 173,119.1" fill="none" stroke="currentColor" class="s-orange" stroke-width="1.8"/><path d="M173,119.1 L172,128 L179.5,125.3 Z" fill="currentColor" class="f-orange"/><text x="220" y="175" font-size="13" text-anchor="middle" class="t-orange">ΣF = 0, but the bar spins</text></svg>`,
          alt: 'A horizontal bar with an upward force F at its left end and an equal downward force F at its right end. A curved arrow shows the bar turning clockwise even though the net force is zero.',
          caption: 'A couple: $\\sum\\vec{F} = \\vec{0}$, but $\\sum\\tau \\ne 0$, so the bar starts to spin.',
          maxWidth: 420,
        },
        {
          type: 'theorem',
          name: 'Conditions for static equilibrium',
          tex: '\\sum\\vec{F}_{\\text{ext}} = \\vec{0} \\qquad \\text{and} \\qquad \\sum\\vec{\\tau}_{\\text{ext}} = \\vec{0}',
          text: '[[phys-static-equilibrium]]: a rigid body at rest stays at rest when both hold. The first keeps the center of mass from accelerating ($\\sum\\vec{F} = M\\vec{a}_{\\text{cm}}$); the second keeps the body from starting to rotate ($\\sum\\vec{\\tau} = d\\vec{L}/dt$). In a plane this gives three equations: $\\sum F_x = 0$, $\\sum F_y = 0$, $\\sum\\tau_z = 0$.',
        },
        {
          type: 'derivation',
          title: 'Why you may take torques about any point',
          steps: [
            { tex: '\\vec{\\tau}_{P} = \\sum_i (\\vec{r}_i - \\vec{r}_P) \\times \\vec{F}_i', why: 'Torque of all the forces about an arbitrary point $P$; $\\vec{r}_i$ is where force $i$ acts, measured from the origin $O$.' },
            { tex: '= \\sum_i \\vec{r}_i \\times \\vec{F}_i - \\vec{r}_P \\times \\sum_i \\vec{F}_i', why: 'Distribute the cross product; $\\vec{r}_P$ is the same for every term, so it factors out.' },
            { tex: '= \\vec{\\tau}_O - \\vec{r}_P \\times \\vec{0} = \\vec{\\tau}_O', why: 'In equilibrium the net force is zero, so the second term vanishes.' },
          ],
          result: 'If the forces balance and the torques balance about one point, they balance about **every** point. So you are free to choose the most convenient pivot.',
        },
      ],
    },
    {
      kind: 'mcq',
      prompt: 'A meter stick lies on frictionless ice. Two people pull on it with horizontal forces of equal magnitude in opposite directions, one at each end, both perpendicular to the stick. What happens?',
      options: [
        {
          text: 'Its center stays at rest but the stick starts to rotate',
          correct: true,
          why: 'The forces form a couple: $\\sum\\vec{F} = 0$ keeps the center of mass at rest, but the torques add, so the stick spins up about its center.',
        },
        {
          text: 'Nothing: the forces cancel, so it is in equilibrium',
          why: 'Cancelling forces is only one of the two conditions. These forces have different lines of action and produce a net torque.',
        },
        {
          text: 'It accelerates in the direction of the larger force',
          why: 'The forces are equal in magnitude, so there is no net force and the center of mass does not accelerate.',
        },
        {
          text: 'It moves sideways without rotating',
          why: 'Sideways motion of the center would need a net force, which is zero here.',
        },
      ],
      explanation: 'Each force has lever arm $0.50\\,\\text{m}$ about the center and both turn the stick the same way, so $\\sum\\tau = 2(0.50)F \\ne 0$. Static equilibrium needs **both** $\\sum\\vec{F} = \\vec{0}$ and $\\sum\\vec{\\tau} = \\vec{0}$.',
    },
    {
      kind: 'concept',
      title: 'Center of gravity',
      blocks: [
        {
          type: 'p',
          text: 'Gravity pulls on every particle of a body. To compute its torque you would have to add up millions of tiny torques, unless all that weight can be replaced by a single force acting at one point. It can.',
        },
        {
          type: 'derivation',
          title: 'Torque of gravity on an extended body (uniform $\\vec{g}$)',
          steps: [
            { tex: '\\vec{\\tau}_{\\text{grav}} = \\sum_i \\vec{r}_i \\times (m_i\\vec{g})', why: 'Each particle\'s weight $m_i\\vec{g}$ acts at its own position $\\vec{r}_i$.' },
            { tex: '= \\Big(\\sum_i m_i\\vec{r}_i\\Big) \\times \\vec{g}', why: '$\\vec{g}$ is the same for every particle, so it factors out of the sum.' },
            { tex: '= M\\vec{r}_{\\text{cm}} \\times \\vec{g} = \\vec{r}_{\\text{cm}} \\times (M\\vec{g})', why: 'By the definition of the [[calc2-center-of-mass]], $\\sum m_i\\vec{r}_i = M\\vec{r}_{\\text{cm}}$.' },
          ],
          result: 'The whole weight $M\\vec{g}$ acts as if it were applied at the center of mass.',
        },
        {
          type: 'definition',
          term: 'Center of gravity',
          text: 'The [[phys-center-of-gravity]] is the point where the total weight effectively acts, for computing torques. In a uniform gravitational field (everything in this course) it coincides with the center of mass. A uniform beam\'s weight acts at its midpoint.',
        },
        {
          type: 'p',
          text: 'The simplest equilibrium is a seesaw on a central pivot. Below, a $25\\,\\text{kg}$ child sits at the left end of a $4.0\\,\\text{m}$ plank, $2.0\\,\\text{m}$ from the pivot. Slide the $40\\,\\text{kg}$ adult along the right side. The plank\'s own weight acts at the pivot, so it has no torque.',
        },
        {
          type: 'graph',
          x: [-2.6, 2.6],
          y: [-1.3, 1.1],
          equal: true,
          segments: [
            { from: [`-2*cos(${TILT})`, `-2*sin(${TILT})`], to: [`2*cos(${TILT})`, `2*sin(${TILT})`], color: 'gray' },
            { from: [0, 0], to: [-0.25, -0.6], color: 'gray' },
            { from: [0, 0], to: [0.25, -0.6], color: 'gray' },
            { from: [-0.25, -0.6], to: [0.25, -0.6], color: 'gray' },
            { from: [`-2*cos(${TILT})`, `-2*sin(${TILT})`], to: [`-2*cos(${TILT})`, `-2*sin(${TILT}) - 0.5`], color: 'blue', arrow: true },
            { from: [`d*cos(${TILT})`, `d*sin(${TILT})`], to: [`d*cos(${TILT})`, `d*sin(${TILT}) - 0.8`], color: 'red', arrow: true },
          ],
          points: [
            { x: `-2*cos(${TILT})`, y: `-2*sin(${TILT})`, color: 'blue', label: 'child 25 kg' },
            { x: `d*cos(${TILT})`, y: `d*sin(${TILT})`, color: 'red', label: 'adult 40 kg' },
          ],
          sliders: [{ name: 'd', min: 0, max: 2, step: 0.05, value: 0.6, label: 'adult\'s distance from the pivot $d$ (m)' }],
          readouts: [
            { label: 'child\'s torque (N·m, CCW) $=$', expr: '9.8*25*2', digits: 0 },
            { label: 'adult\'s torque (N·m, CW) $=$', expr: '9.8*40*d', digits: 0 },
            { label: 'net torque (N·m, + = CCW) $=$', expr: TAU, digits: 0 },
          ],
          caption: 'Weights are drawn in proportion to the masses. When the net torque is not zero the plank tips toward the side that wins. Find the balance point: it is where $40d = 25 \\times 2$.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'On the seesaw above (uniform plank pivoted at its center), where must the $40\\,\\text{kg}$ adult sit to balance the $25\\,\\text{kg}$ child at $2.0\\,\\text{m}$ from the pivot? Give the distance from the pivot to 3 significant figures.',
      hint: 'Torques about the pivot: $m_1 g\\,d_1 = m_2 g\\,d_2$. Why can you ignore the plank\'s weight and the pivot\'s force?',
      answer: '25*2/40',
      answerTex: '1.25',
      tolerance: 0.01,
      unit: 'm',
      label: '$d =$',
      explanation: 'About the pivot, the pivot\'s force has zero lever arm and the plank\'s weight acts at the pivot (its center), so only the people count: $(25)(9.80)(2.0) = (40)(9.80)d$, giving $d = 1.25\\,\\text{m}$. Notice $g$ cancels: balance depends only on mass times distance.',
    },
    {
      kind: 'concept',
      title: 'A strategy, and a beam on two supports',
      blocks: [
        {
          type: 'steps',
          items: [
            { title: 'Choose the system', text: 'Usually one rigid object: the beam, the boom, the ladder.' },
            { title: 'Draw an extended free-body diagram', text: 'Draw the object itself (not a dot) and put every force **where it acts**: weights at centers of gravity, supports at contact points.' },
            { title: 'Choose a pivot', text: 'Take torques about a point where an unknown force acts. That force then has no lever arm and disappears from the torque equation.' },
            { title: 'Write the three equations', text: '$\\sum F_x = 0$, $\\sum F_y = 0$, $\\sum\\tau = 0$ (counterclockwise positive). Solve, then check with torques about a second point.' },
          ],
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the pivot choice matters so much',
          text: 'In a plane you get three equations, so you can find three unknowns. You could take torques about any point and grind through simultaneous equations. But a torque equation about the point where an unknown force acts contains **one fewer** unknown, often leaving a single unknown you can solve for directly. Physics does not care which point you choose; your algebra does.',
        },
        {
          type: 'figure',
          svg: /*fig:se-beam*/`<svg viewBox="0 0 480 215" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="113" width="400" height="14" rx="0" fill="currentColor" class="f-gray" fill-opacity="0.2"/><rect x="40" y="113" width="400" height="14" rx="0" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M46,127 L30,200 L62,200 Z" fill="currentColor" class="f-gray" fill-opacity="0.35"/><path d="M46,127 L30,200 L62,200 Z" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M434,127 L418,200 L450,200 Z" fill="currentColor" class="f-gray" fill-opacity="0.35"/><path d="M434,127 L418,200 L450,200 Z" fill="none" stroke="currentColor" stroke-width="1.4"/><line x1="10" y1="200" x2="470" y2="200" stroke="currentColor" class="s-gray" stroke-width="1.6"/><line x1="10" y1="200" x2="3" y2="208" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="20" y1="200" x2="13" y2="208" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="30" y1="200" x2="23" y2="208" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="40" y1="200" x2="33" y2="208" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="50" y1="200" x2="43" y2="208" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="60" y1="200" x2="53" y2="208" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="70" y1="200" x2="63" y2="208" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="80" y1="200" x2="73" y2="208" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="90" y1="200" x2="83" y2="208" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="100" y1="200" x2="93" y2="208" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="110" y1="200" x2="103" y2="208" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="120" y1="200" x2="113" y2="208" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="130" y1="200" x2="123" y2="208" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="140" y1="200" x2="133" y2="208" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="150" y1="200" x2="143" y2="208" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="160" y1="200" x2="153" y2="208" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="170" y1="200" x2="163" y2="208" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="180" y1="200" x2="173" y2="208" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="190" y1="200" x2="183" y2="208" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="200" y1="200" x2="193" y2="208" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="210" y1="200" x2="203" y2="208" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="220" y1="200" x2="213" y2="208" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="230" y1="200" x2="223" y2="208" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="240" y1="200" x2="233" y2="208" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="250" y1="200" x2="243" y2="208" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="260" y1="200" x2="253" y2="208" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="270" y1="200" x2="263" y2="208" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="280" y1="200" x2="273" y2="208" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="290" y1="200" x2="283" y2="208" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="300" y1="200" x2="293" y2="208" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="310" y1="200" x2="303" y2="208" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="320" y1="200" x2="313" y2="208" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="330" y1="200" x2="323" y2="208" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="340" y1="200" x2="333" y2="208" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="350" y1="200" x2="343" y2="208" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="360" y1="200" x2="353" y2="208" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="370" y1="200" x2="363" y2="208" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="380" y1="200" x2="373" y2="208" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="390" y1="200" x2="383" y2="208" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="400" y1="200" x2="393" y2="208" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="410" y1="200" x2="403" y2="208" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="420" y1="200" x2="413" y2="208" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="430" y1="200" x2="423" y2="208" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="440" y1="200" x2="433" y2="208" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="450" y1="200" x2="443" y2="208" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="460" y1="200" x2="453" y2="208" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="470" y1="200" x2="463" y2="208" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="175.3" y1="127" x2="175.3" y2="179.7" stroke="currentColor" class="s-red" stroke-width="2.4"/><path d="M175.3,186 L179.8,177 L170.8,177 Z" fill="currentColor" class="f-red"/><text x="167.3" y="170" font-size="12" text-anchor="end" class="t-red">person 70 kg</text><line x1="240" y1="127" x2="240" y2="163.7" stroke="currentColor" class="s-gray" stroke-width="2.4"/><path d="M240,170 L244.5,161 L235.5,161 Z" fill="currentColor" class="f-gray"/><text x="248" y="160" font-size="12" text-anchor="start" class="t-gray">beam 40 kg</text><line x1="46" y1="127" x2="46" y2="56.3" stroke="currentColor" class="s-blue" stroke-width="2.4"/><path d="M46,50 L41.5,59 L50.5,59 Z" fill="currentColor" class="f-blue"/><text x="54" y="58" font-size="15" text-anchor="start" class="t-blue" font-style="italic">n<tspan dy="4" font-size="11">L</tspan><tspan dy="-4"></tspan></text><line x1="434" y1="127" x2="434" y2="56.3" stroke="currentColor" class="s-blue" stroke-width="2.4"/><path d="M434,50 L429.5,59 L438.5,59 Z" fill="currentColor" class="f-blue"/><text x="426" y="58" font-size="15" text-anchor="end" class="t-blue" font-style="italic">n<tspan dy="4" font-size="11">R</tspan><tspan dy="-4"></tspan></text><line x1="46" y1="30" x2="175.3" y2="30" stroke="currentColor" class="s-gray" stroke-width="1.2"/><line x1="46" y1="24" x2="46" y2="36" stroke="currentColor" class="s-gray" stroke-width="1.2"/><line x1="175.3" y1="24" x2="175.3" y2="36" stroke="currentColor" class="s-gray" stroke-width="1.2"/><text x="110.7" y="24" font-size="12" text-anchor="middle" class="t-gray">2.0 m</text><line x1="175.3" y1="30" x2="434" y2="30" stroke="currentColor" class="s-gray" stroke-width="1.2"/><line x1="434" y1="24" x2="434" y2="36" stroke="currentColor" class="s-gray" stroke-width="1.2"/><text x="304.7" y="24" font-size="12" text-anchor="middle" class="t-gray">4.0 m</text><line x1="175.3" y1="36" x2="175.3" y2="110" stroke="currentColor" class="s-gray" stroke-width="0.8" stroke-dasharray="5 4"/></svg>`,
          alt: 'A uniform 6.0 m beam resting on supports at both ends. A person stands 2.0 m from the left end. The weights of the person and the beam point down; the support forces n_L and n_R point up.',
          caption: 'A $40\\,\\text{kg}$, $6.0\\,\\text{m}$ uniform beam with a $70\\,\\text{kg}$ person $2.0\\,\\text{m}$ from the left support.',
          maxWidth: 480,
        },
        {
          type: 'derivation',
          title: 'Support forces on the beam ($g = 9.80\\,\\text{m/s}^2$)',
          steps: [
            { tex: '\\sum\\tau_L = n_R(6.0) - (70)(9.80)(2.0) - (40)(9.80)(3.0) = 0', why: 'Torques about the **left** support, so $n_L$ drops out. The person\'s and beam\'s weights turn the beam clockwise (negative), $n_R$ counterclockwise.' },
            { tex: 'n_R = \\frac{1372 + 1176}{6.0} \\approx 425\\,\\text{N}', why: 'Solve for the one unknown left.' },
            { tex: '\\sum F_y = n_L + n_R - (110)(9.80) = 0 \\implies n_L = 1078 - 425 \\approx 653\\,\\text{N}', why: 'Vertical force balance gives the other support.' },
            { tex: '\\sum\\tau_R = -n_L(6.0) + (686)(4.0) + (392)(3.0) = -3920 + 2744 + 1176 = 0 \\ \\checkmark', why: 'Check with torques about the right support: they balance (using the unrounded $n_L = 653.3\\,\\text{N}$).' },
          ],
          result: 'The support nearer the person carries more: $653\\,\\text{N}$ on the left, $425\\,\\text{N}$ on the right.',
        },
        {
          type: 'graph',
          x: [0, 6],
          y: [0, 1100],
          xStep: 1,
          yStep: 100,
          height: 260,
          functions: [
            { expr: '(40*9.8*3 + 70*9.8*(6 - x))/6', label: 'left support $n_L$ (N)', color: 'blue' },
            { expr: '(40*9.8*3 + 70*9.8*x)/6', label: 'right support $n_R$ (N)', color: 'red' },
          ],
          points: [
            { x: 'p', y: '(40*9.8*3 + 70*9.8*(6 - p))/6', color: 'blue' },
            { x: 'p', y: '(40*9.8*3 + 70*9.8*p)/6', color: 'red' },
          ],
          vlines: [{ x: 'p', label: 'person', color: 'gray' }],
          sliders: [{ name: 'p', min: 0, max: 6, step: 0.1, value: 2, label: 'person\'s distance from the left support (m)', play: true, speed: 1.5 }],
          readouts: [
            { label: '$n_L$ (N) $=$', expr: '(40*9.8*3 + 70*9.8*(6 - p))/6', digits: 0 },
            { label: '$n_R$ (N) $=$', expr: '(40*9.8*3 + 70*9.8*p)/6', digits: 0 },
            { label: '$n_L + n_R$ (N) $=$', expr: '110*9.8', digits: 0 },
          ],
          caption: 'Press ▶ to walk the person across. The load shifts linearly from one support to the other, while the total always equals the combined weight, $1078\\,\\text{N}$.',
        },
        {
          type: 'code',
          title: 'beam.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdio>
#include <vector>

// Support forces on a beam resting on two supports (at x = 0 and x = L),
// carrying point loads. Sum of torques about the left support gives nR;
// sum of vertical forces gives nL.
struct Load { const char* name; double mass, x; };   // kg, m from left support

int main() {
    const double g = 9.80, L = 6.0;
    std::vector<Load> loads = {
        {"beam (at its center)", 40.0, 3.0},
        {"person", 70.0, 2.0},
        {"toolbox", 15.0, 5.5},
    };
    double W = 0.0, moment = 0.0;
    for (const Load& ld : loads) {
        double w = ld.mass * g;
        std::printf("%-21s %6.1f N at x = %.1f m\\n", ld.name, w, ld.x);
        W += w;               // total weight
        moment += w * ld.x;   // clockwise torque about the left support
    }
    double nR = moment / L;   // nR * L = sum of w * x
    double nL = W - nR;       // nL + nR = W
    std::printf("total weight %.1f N\\n", W);
    std::printf("nL = %.1f N, nR = %.1f N\\n", nL, nR);
    double tauRight = -nL * L + (W * L - moment); // torques about the right end
    std::printf("balanced about the right end too: %s\\n", std::fabs(tauRight) < 1e-9 ? "yes" : "no");
}`,
          output: `beam (at its center)   392.0 N at x = 3.0 m
person                 686.0 N at x = 2.0 m
toolbox                147.0 N at x = 5.5 m
total weight 1225.0 N
nL = 665.6 N, nR = 559.4 N
balanced about the right end too: yes`,
          annotations: [
            { lines: 13, text: 'A uniform beam\'s weight acts at its center of gravity, the midpoint.' },
            { lines: 22, text: 'Torques about the left support: the left support force has no lever arm and never appears.' },
            { lines: '24-25', text: '$\\sum\\tau = 0$ gives $n_R$; then $\\sum F_y = 0$ gives $n_L$.' },
            { lines: 28, text: 'Independent check about a different pivot, as the strategy recommends.' },
          ],
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'The same uniform $6.0\\,\\text{m}$, $40\\,\\text{kg}$ beam rests on supports at its two ends. The $70\\,\\text{kg}$ person now stands $1.5\\,\\text{m}$ from the **left** end. Find the force from the **right** support. Use $g = 9.80\\,\\text{m/s}^2$ and give 3 significant figures.',
      hint: 'Take torques about the left support so that $n_L$ disappears.',
      answer: '(40*9.8*3 + 70*9.8*1.5)/6',
      answerTex: '368',
      tolerance: 2,
      unit: 'N',
      label: '$n_R =$',
      explanation: '$\\sum\\tau_L = 0$: $n_R(6.0) = (70)(9.80)(1.5) + (40)(9.80)(3.0) = 1029 + 1176 = 2205$, so $n_R = 367.5 \\approx 368\\,\\text{N}$. Then $n_L = 1078 - 368 = 710\\,\\text{N}$. Measuring the person\'s lever arm from the wrong end ($4.5\\,\\text{m}$) gives $n_R = 711\\,\\text{N}$, the left support\'s value: always ask which support should carry more.',
    },
    {
      kind: 'concept',
      title: 'Hinges, cables and cranes',
      blocks: [
        {
          type: 'p',
          text: 'A hinge or pin can push in any direction, so its force has **two** unknown components, $H_x$ and $H_y$. A cable can only pull, along its own length. The classic setup is a horizontal boom hinged to a wall and held up by a cable, like a sign bracket or a small crane arm.',
        },
        {
          type: 'figure',
          svg: /*fig:se-boom*/`<svg viewBox="0 0 460 300" xmlns="http://www.w3.org/2000/svg"><line x1="60" y1="20" x2="60" y2="260" stroke="currentColor" class="s-gray" stroke-width="1.6"/><line x1="60" y1="20" x2="52" y2="27" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="60" y1="30" x2="52" y2="37" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="60" y1="40" x2="52" y2="47" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="60" y1="50" x2="52" y2="57" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="60" y1="60" x2="52" y2="67" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="60" y1="70" x2="52" y2="77" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="60" y1="80" x2="52" y2="87" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="60" y1="90" x2="52" y2="97" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="60" y1="100" x2="52" y2="107" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="60" y1="110" x2="52" y2="117" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="60" y1="120" x2="52" y2="127" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="60" y1="130" x2="52" y2="137" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="60" y1="140" x2="52" y2="147" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="60" y1="150" x2="52" y2="157" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="60" y1="160" x2="52" y2="167" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="60" y1="170" x2="52" y2="177" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="60" y1="180" x2="52" y2="187" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="60" y1="190" x2="52" y2="197" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="60" y1="200" x2="52" y2="207" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="60" y1="210" x2="52" y2="217" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="60" y1="220" x2="52" y2="227" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="60" y1="230" x2="52" y2="237" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="60" y1="240" x2="52" y2="247" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="60" y1="250" x2="52" y2="257" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="60" y1="260" x2="52" y2="267" stroke="currentColor" class="s-gray" stroke-width="1.1"/><rect x="60" y="194" width="330" height="12" rx="0" fill="currentColor" class="f-gray" fill-opacity="0.2"/><rect x="60" y="194" width="330" height="12" rx="0" fill="none" stroke="currentColor" stroke-width="1.4"/><circle cx="60" cy="200" r="6" fill="currentColor" class="f-gray"/><text x="68" y="228" font-size="12" text-anchor="start" class="t-gray">hinge</text><line x1="60" y1="9.5" x2="390" y2="200" stroke="currentColor" stroke-width="1.8"/><circle cx="60" cy="9.5" r="4" fill="currentColor"/><path d="M340,200 A50,50 0 0 1 346.7,175" fill="none" stroke="currentColor" class="s-orange" stroke-width="1.6"/><text x="328" y="188" font-size="13" text-anchor="end" class="t-orange">30°</text><line x1="390" y1="206" x2="390" y2="230" stroke="currentColor" stroke-width="1.6"/><rect x="372" y="230" width="36" height="30" rx="0" fill="currentColor" class="f-red" fill-opacity="0.25"/><rect x="372" y="230" width="36" height="30" rx="0" fill="none" stroke="currentColor" stroke-width="1.4"/><text x="390" y="250" font-size="11" text-anchor="middle">50 kg</text><line x1="390" y1="200" x2="308.9" y2="153.2" stroke="currentColor" class="s-blue" stroke-width="2.6"/><path d="M303.4,150 L308.9,158.4 L313.4,150.6 Z" fill="currentColor" class="f-blue"/><text x="313.4" y="146" font-size="15" text-anchor="start" class="t-blue" font-style="italic" font-weight="600">T</text><line x1="225" y1="200" x2="225" y2="248.7" stroke="currentColor" class="s-gray" stroke-width="2.2"/><path d="M225,255 L229.5,246 L220.5,246 Z" fill="currentColor" class="f-gray"/><text x="233" y="250" font-size="13" text-anchor="start" class="t-gray" font-style="italic">m<tspan dy="4" font-size="11">b</tspan><tspan dy="-4">g</tspan></text><line x1="60" y1="200" x2="123.7" y2="200" stroke="currentColor" class="s-green" stroke-width="2.4"/><path d="M130,200 L121,195.5 L121,204.5 Z" fill="currentColor" class="f-green"/><text x="134" y="192" font-size="14" text-anchor="start" class="t-green" font-style="italic">H<tspan dy="4" font-size="11">x</tspan><tspan dy="-4"></tspan></text><line x1="60" y1="200" x2="60" y2="156.3" stroke="currentColor" class="s-green" stroke-width="2.4"/><path d="M60,150 L55.5,159 L64.5,159 Z" fill="currentColor" class="f-green"/><text x="68" y="156" font-size="14" text-anchor="start" class="t-green" font-style="italic">H<tspan dy="4" font-size="11">y</tspan><tspan dy="-4"></tspan></text><text x="225" y="144" font-size="12" text-anchor="middle">cable</text><text x="245" y="288" font-size="12" text-anchor="middle" class="t-gray">boom: 3.0 m, 20 kg, uniform</text></svg>`,
          alt: 'A horizontal uniform boom hinged to a wall at its left end and held by a cable from its right end to a point higher on the wall, at 30 degrees above the boom. A 50 kg load hangs from the right end. Forces on the boom: tension T along the cable, the boom weight at its center, and hinge components H_x and H_y.',
          caption: 'A $3.0\\,\\text{m}$, $20\\,\\text{kg}$ uniform boom carrying a $50\\,\\text{kg}$ load at its tip. The cable makes $30^\\circ$ with the boom.',
          maxWidth: 440,
        },
        {
          type: 'derivation',
          title: 'Tension and hinge force ($g = 9.80\\,\\text{m/s}^2$)',
          steps: [
            { tex: '\\sum\\tau_{\\text{hinge}} = T\\sin 30^\\circ\\,(3.0) - (20)(9.80)(1.5) - (50)(9.80)(3.0) = 0', why: 'Torques about the **hinge** remove both unknown hinge components. Only the vertical part of $T$, $T\\sin 30^\\circ$, has a lever arm along the horizontal boom.' },
            { tex: 'T = \\frac{294 + 1470}{1.5} = 1176\\,\\text{N}', why: 'Solve. The cable carries far more than the $686\\,\\text{N}$ total weight because it pulls at a shallow angle.' },
            { tex: '\\sum F_x = H_x - T\\cos 30^\\circ = 0 \\implies H_x \\approx 1018\\,\\text{N}', why: 'The cable pulls the boom toward the wall; the wall pushes back outward on the boom.' },
            { tex: '\\sum F_y = H_y + T\\sin 30^\\circ - 686 = 0 \\implies H_y = 686 - 588 = 98\\,\\text{N}', why: 'The hinge supplies the small part of the weight that the cable does not.' },
          ],
          result: 'Shallow cables are expensive: the tension scales as $1/\\sin\\phi$, so halving the angle roughly doubles it.',
        },
        {
          type: 'graph',
          x: [5, 90],
          y: [0, 4000],
          xStep: 10,
          yStep: 500,
          height: 260,
          functions: [
            { expr: '588/sin(x*pi/180)', label: 'cable tension $T$ (N)', color: 'blue' },
            { expr: '588*cos(x*pi/180)/sin(x*pi/180)', label: 'hinge push $H_x$ (N)', color: 'green' },
          ],
          points: [
            { x: 'c', y: '588/sin(c*pi/180)', color: 'blue' },
            { x: 'c', y: '588*cos(c*pi/180)/sin(c*pi/180)', color: 'green' },
          ],
          hlines: [{ y: 686, label: 'total weight 686 N', color: 'gray' }],
          sliders: [{ name: 'c', min: 8, max: 90, step: 1, value: 30, label: 'cable angle $\\phi$ above the boom (degrees)' }],
          readouts: [
            { label: '$T$ (N) $=$', expr: '588/sin(c*pi/180)', digits: 0 },
            { label: '$H_x$ (N) $=$', expr: '588*cos(c*pi/180)/sin(c*pi/180)', digits: 0 },
            { label: '$H_y$ (N) $=$', expr: '686 - 588', digits: 0 },
          ],
          caption: 'Horizontal axis: cable angle in degrees. From the torque equation, $T\\sin\\phi = 588\\,\\text{N}$ for every angle, so $H_y = 98\\,\\text{N}$ never changes, while $T$ and $H_x$ blow up as the cable flattens. Engineers keep cable and strut angles well away from $0^\\circ$ for this reason.',
        },
        {
          type: 'callout',
          variant: 'analogy',
          title: 'Cranes and recovery vehicles',
          text: 'A truck crane or a vehicle-recovery boom is the same problem with bigger numbers. The load\'s torque about the tipping edge (the outriggers) must be outweighed by the vehicle\'s own weight times its lever arm. That is why the load chart allows less weight the farther out the boom reaches, and why outriggers are spread wide before lifting.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'Rebuild the boom bracket above with a steeper cable: the uniform $3.0\\,\\text{m}$, $20\\,\\text{kg}$ boom is hinged at the wall, carries a $50\\,\\text{kg}$ load at its tip, and the cable from the tip now makes $40^\\circ$ with the horizontal boom. Find the cable tension. Use $g = 9.80\\,\\text{m/s}^2$ and give 3 significant figures.',
      hint: 'Torques about the hinge: $T\\sin 40^\\circ (3.0) = (20)(9.80)(1.5) + (50)(9.80)(3.0)$.',
      answer: '(20*9.8*1.5 + 50*9.8*3)/(3*sin(40pi/180))',
      answerTex: '915',
      tolerance: 5,
      unit: 'N',
      label: '$T =$',
      explanation: 'The hinge torque equation gives $T = \\frac{294 + 1470}{3.0\\sin 40^\\circ} = \\frac{1764}{1.928} \\approx 915\\,\\text{N}$, down from $1176\\,\\text{N}$ at $30^\\circ$. Using $\\cos 40^\\circ$ instead (the wrong component for the lever arm along the boom) gives $768\\,\\text{N}$; forgetting the boom\'s own weight gives $762\\,\\text{N}$.',
    },
    {
      kind: 'concept',
      title: 'Ladders',
      blocks: [
        {
          type: 'p',
          text: 'A ladder leaning on a wall is the classic exam problem because it uses all three equations and friction. Model the wall as frictionless (it can only push horizontally) and the floor as rough (normal force up, static friction toward the wall).',
        },
        {
          type: 'figure',
          svg: /*fig:se-ladder*/`<svg viewBox="150 0 260 290" xmlns="http://www.w3.org/2000/svg"><line x1="165" y1="270" x2="400" y2="270" stroke="currentColor" class="s-gray" stroke-width="1.6"/><line x1="165" y1="270" x2="158" y2="278" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="175" y1="270" x2="168" y2="278" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="185" y1="270" x2="178" y2="278" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="195" y1="270" x2="188" y2="278" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="205" y1="270" x2="198" y2="278" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="215" y1="270" x2="208" y2="278" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="225" y1="270" x2="218" y2="278" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="235" y1="270" x2="228" y2="278" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="245" y1="270" x2="238" y2="278" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="255" y1="270" x2="248" y2="278" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="265" y1="270" x2="258" y2="278" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="275" y1="270" x2="268" y2="278" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="285" y1="270" x2="278" y2="278" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="295" y1="270" x2="288" y2="278" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="305" y1="270" x2="298" y2="278" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="315" y1="270" x2="308" y2="278" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="325" y1="270" x2="318" y2="278" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="335" y1="270" x2="328" y2="278" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="345" y1="270" x2="338" y2="278" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="355" y1="270" x2="348" y2="278" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="365" y1="270" x2="358" y2="278" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="375" y1="270" x2="368" y2="278" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="385" y1="270" x2="378" y2="278" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="395" y1="270" x2="388" y2="278" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="360" y1="20" x2="360" y2="270" stroke="currentColor" class="s-gray" stroke-width="1.6"/><line x1="360" y1="20" x2="368" y2="27" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="360" y1="30" x2="368" y2="37" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="360" y1="40" x2="368" y2="47" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="360" y1="50" x2="368" y2="57" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="360" y1="60" x2="368" y2="67" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="360" y1="70" x2="368" y2="77" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="360" y1="80" x2="368" y2="87" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="360" y1="90" x2="368" y2="97" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="360" y1="100" x2="368" y2="107" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="360" y1="110" x2="368" y2="117" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="360" y1="120" x2="368" y2="127" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="360" y1="130" x2="368" y2="137" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="360" y1="140" x2="368" y2="147" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="360" y1="150" x2="368" y2="157" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="360" y1="160" x2="368" y2="167" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="360" y1="170" x2="368" y2="177" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="360" y1="180" x2="368" y2="187" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="360" y1="190" x2="368" y2="197" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="360" y1="200" x2="368" y2="207" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="360" y1="210" x2="368" y2="217" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="360" y1="220" x2="368" y2="227" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="360" y1="230" x2="368" y2="237" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="360" y1="240" x2="368" y2="247" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="360" y1="250" x2="368" y2="257" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="360" y1="260" x2="368" y2="267" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="360" y1="270" x2="368" y2="277" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="230" y1="270" x2="360" y2="44.8" stroke="currentColor" stroke-width="3"/><line x1="240.2" y1="244.9" x2="252.2" y2="238.9" stroke="currentColor" class="s-gray" stroke-width="1.4"/><line x1="256.5" y1="216.7" x2="268.5" y2="210.7" stroke="currentColor" class="s-gray" stroke-width="1.4"/><line x1="272.8" y1="188.6" x2="284.8" y2="182.6" stroke="currentColor" class="s-gray" stroke-width="1.4"/><line x1="289" y1="160.4" x2="301" y2="154.4" stroke="currentColor" class="s-gray" stroke-width="1.4"/><line x1="305.2" y1="132.3" x2="317.2" y2="126.3" stroke="currentColor" class="s-gray" stroke-width="1.4"/><line x1="321.5" y1="104.1" x2="333.5" y2="98.1" stroke="currentColor" class="s-gray" stroke-width="1.4"/><line x1="337.8" y1="76" x2="349.8" y2="70" stroke="currentColor" class="s-gray" stroke-width="1.4"/><circle cx="295" cy="157.4" r="4" fill="currentColor"/><line x1="295" y1="157.4" x2="295" y2="231.1" stroke="currentColor" class="s-gray" stroke-width="2.4"/><path d="M295,237.4 L299.5,228.4 L290.5,228.4 Z" fill="currentColor" class="f-gray"/><text x="303" y="233.4" font-size="14" text-anchor="start" class="t-gray" font-style="italic">mg</text><line x1="360" y1="44.8" x2="281.3" y2="44.8" stroke="currentColor" class="s-blue" stroke-width="2.4"/><path d="M275,44.8 L284,49.3 L284,40.3 Z" fill="currentColor" class="f-blue"/><text x="272" y="36.8" font-size="14" text-anchor="end" class="t-blue" font-style="italic">n<tspan dy="4" font-size="11">wall</tspan><tspan dy="-4"></tspan></text><line x1="230" y1="270" x2="230" y2="181.3" stroke="currentColor" class="s-blue" stroke-width="2.4"/><path d="M230,175 L225.5,184 L234.5,184 Z" fill="currentColor" class="f-blue"/><text x="222" y="184" font-size="14" text-anchor="end" class="t-blue" font-style="italic">n<tspan dy="4" font-size="11">floor</tspan><tspan dy="-4"></tspan></text><line x1="230" y1="270" x2="293.7" y2="270" stroke="currentColor" class="s-red" stroke-width="2.4"/><path d="M300,270 L291,265.5 L291,274.5 Z" fill="currentColor" class="f-red"/><text x="302" y="262" font-size="14" text-anchor="start" class="t-red" font-style="italic">f<tspan dy="4" font-size="11">s</tspan><tspan dy="-4"></tspan></text><path d="M270,270 A40,40 0 0 0 250,235.4" fill="none" stroke="currentColor" class="s-orange" stroke-width="1.6"/><text x="278" y="252" font-size="15" text-anchor="middle" class="t-orange" font-style="italic">θ</text><text x="352" y="18" font-size="12" text-anchor="end" class="t-gray">frictionless wall</text></svg>`,
          alt: 'A uniform ladder leaning against a frictionless wall at angle theta to the floor. Forces: weight mg at the ladder\'s midpoint, horizontal normal force from the wall at the top, upward normal force from the floor at the bottom, and static friction at the bottom pointing toward the wall.',
          caption: 'Free-body diagram of a uniform ladder of length $L$. Only floor friction stops the bottom from sliding out.',
          maxWidth: 300,
        },
        {
          type: 'derivation',
          title: 'Steepest angle needed for a uniform ladder (no climber)',
          steps: [
            { tex: '\\sum F_y = n_{\\text{floor}} - mg = 0 \\implies n_{\\text{floor}} = mg', why: 'Only two vertical forces, because the frictionless wall pushes horizontally.' },
            { tex: '\\sum F_x = f_s - n_{\\text{wall}} = 0 \\implies f_s = n_{\\text{wall}}', why: 'Friction at the floor must balance the wall\'s push.' },
            { tex: '\\sum\\tau_{\\text{base}} = n_{\\text{wall}}\\,L\\sin\\theta - mg\\,\\tfrac{L}{2}\\cos\\theta = 0', why: 'Torques about the base (removes $n_{\\text{floor}}$ and $f_s$). The wall force is horizontal at height $L\\sin\\theta$; the weight is vertical at horizontal distance $\\tfrac{L}{2}\\cos\\theta$.' },
            { tex: 'f_s = n_{\\text{wall}} = \\frac{mg}{2\\tan\\theta}', why: 'Solve the torque equation and use the force balance.' },
            { tex: '\\frac{mg}{2\\tan\\theta} \\le \\mu_s mg \\implies \\tan\\theta \\ge \\frac{1}{2\\mu_s}', why: 'Static friction can supply at most $\\mu_s n_{\\text{floor}} = \\mu_s mg$.' },
          ],
          result: 'With $\\mu_s = 0.40$: $\\tan\\theta_{\\min} = 1.25$, so $\\theta_{\\min} \\approx 51.3^\\circ$. Any shallower and the ladder slides out. Notice $m$ and $L$ cancel.',
        },
        {
          type: 'graph',
          x: [0, 1],
          y: [0, 1.2],
          xStep: 0.1,
          yStep: 0.2,
          height: 260,
          functions: [{ expr: MU('x'), label: 'friction coefficient needed $f_s / n_{\\text{floor}}$', color: 'blue' }],
          hlines: [{ y: 'u', color: 'red' }],
          points: [{ x: 'p', y: MU('p'), color: 'orange', label: 'climber' }],
          sliders: [
            { name: 'q', min: 45, max: 85, step: 1, value: 65, label: 'ladder angle $\\theta$ (degrees)' },
            { name: 'u', min: 0.1, max: 1, step: 0.05, value: 0.4, label: 'floor $\\mu_s$' },
            { name: 'p', min: 0, max: 1, step: 0.01, value: 0, label: 'climber position (fraction of the way up)', play: true, speed: 0.25 },
          ],
          readouts: [
            { label: 'needed $= \\frac{m/2 + Mx}{(m + M)\\tan\\theta} =$', expr: MU('p'), digits: 3 },
            { label: 'slips? (1 = yes, 0 = no)', expr: `(sign(${MU('p')} - u) + 1)/2`, digits: 0 },
          ],
          caption: 'A $10\\,\\text{kg}$ ladder with a $75\\,\\text{kg}$ climber a fraction $x$ of the way up. The friction needed grows as the climber rises, because their weight\'s lever arm about the base grows. Press ▶ to climb: where the blue line crosses the red dashed line (the available $\\mu_s$), the ladder slips. Steeper ladders (larger $\\theta$) need much less friction.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'The 4-to-1 rule',
          text: 'Ladder safety guidance says to place the base one unit out for every four units of height, which is $\\theta = \\arctan 4 \\approx 76^\\circ$. On the graph, set $\\theta = 76^\\circ$: even with the climber at the top, the friction needed stays below about $0.24$, which most dry floors provide.',
        },
      ],
    },
    {
      kind: 'expr',
      prompt: 'A uniform ladder leans against a frictionless wall, with coefficient of static friction $\\mu$ at the floor. Find the **smallest angle** $\\theta$ between the ladder and the floor (in radians) at which it can stand without slipping, as a function of $\\mu$.',
      hint: 'From the derivation, $\\tan\\theta_{\\min} = \\frac{1}{2\\mu}$.',
      variables: ['mu'],
      domain: [0.2, 1.5],
      label: '$\\theta_{\\min} =$',
      answer: 'arctan(1/(2mu))',
      answerTex: '\\arctan\\left(\\frac{1}{2\\mu}\\right)',
      explanation: 'Torques about the base give $n_{\\text{wall}} = \\frac{mg}{2\\tan\\theta}$; force balance gives $f_s = n_{\\text{wall}}$ and $n_{\\text{floor}} = mg$. Requiring $f_s \\le \\mu mg$ gives $\\tan\\theta \\ge \\frac{1}{2\\mu}$, so $\\theta_{\\min} = \\arctan\\frac{1}{2\\mu}$. More friction allows a shallower angle; $\\mu \\to 0$ forces $\\theta \\to 90^\\circ$.',
    },
    {
      kind: 'error',
      prompt: 'A student writes the torque equation about the base of a uniform ladder (length $L$, angle $\\theta$ to the floor, frictionless wall). Tap the first wrong line.',
      lines: [
        'Forces: $mg$ at the midpoint, $n_{\\text{wall}}$ horizontal at the top; $n_{\\text{floor}}$ and $f_s$ act at the base.',
        'Lever arm of $n_{\\text{wall}}$ about the base: $L\\sin\\theta$ (the height of the top).',
        'Lever arm of $mg$ about the base: $\\tfrac{L}{2}\\sin\\theta$.',
        '$n_{\\text{wall}}L\\sin\\theta = mg\\tfrac{L}{2}\\sin\\theta \\implies n_{\\text{wall}} = \\tfrac12 mg$',
      ],
      errorLines: [3],
      explanation: 'The lever arm of a **vertical** force is the **horizontal** distance to its line of action: $\\tfrac{L}{2}\\cos\\theta$, not $\\tfrac{L}{2}\\sin\\theta$. With the correct arm, $n_{\\text{wall}} = \\frac{mg}{2\\tan\\theta}$, which depends on the angle as it must: a nearly vertical ladder barely presses on the wall. The student\'s answer, independent of $\\theta$, is a warning sign.',
    },
    {
      kind: 'concept',
      title: 'Stability and tipping',
      blocks: [
        {
          type: 'p',
          text: 'An object resting on a base stays upright as long as the vertical line through its center of gravity passes **inside** the base of support. Tilt it, and gravity\'s torque about the pivot edge pulls it back. Tilt it past the point where the center of gravity is directly above the edge, and the same torque pulls it over.',
        },
        {
          type: 'figure',
          svg: /*fig:se-tip*/`<svg viewBox="0 0 500 280" xmlns="http://www.w3.org/2000/svg"><line x1="10" y1="230" x2="490" y2="230" stroke="currentColor" class="s-gray" stroke-width="1.6"/><line x1="10" y1="230" x2="3" y2="238" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="20" y1="230" x2="13" y2="238" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="30" y1="230" x2="23" y2="238" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="40" y1="230" x2="33" y2="238" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="50" y1="230" x2="43" y2="238" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="60" y1="230" x2="53" y2="238" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="70" y1="230" x2="63" y2="238" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="80" y1="230" x2="73" y2="238" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="90" y1="230" x2="83" y2="238" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="100" y1="230" x2="93" y2="238" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="110" y1="230" x2="103" y2="238" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="120" y1="230" x2="113" y2="238" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="130" y1="230" x2="123" y2="238" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="140" y1="230" x2="133" y2="238" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="150" y1="230" x2="143" y2="238" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="160" y1="230" x2="153" y2="238" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="170" y1="230" x2="163" y2="238" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="180" y1="230" x2="173" y2="238" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="190" y1="230" x2="183" y2="238" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="200" y1="230" x2="193" y2="238" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="210" y1="230" x2="203" y2="238" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="220" y1="230" x2="213" y2="238" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="230" y1="230" x2="223" y2="238" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="240" y1="230" x2="233" y2="238" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="250" y1="230" x2="243" y2="238" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="260" y1="230" x2="253" y2="238" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="270" y1="230" x2="263" y2="238" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="280" y1="230" x2="273" y2="238" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="290" y1="230" x2="283" y2="238" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="300" y1="230" x2="293" y2="238" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="310" y1="230" x2="303" y2="238" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="320" y1="230" x2="313" y2="238" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="330" y1="230" x2="323" y2="238" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="340" y1="230" x2="333" y2="238" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="350" y1="230" x2="343" y2="238" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="360" y1="230" x2="353" y2="238" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="370" y1="230" x2="363" y2="238" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="380" y1="230" x2="373" y2="238" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="390" y1="230" x2="383" y2="238" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="400" y1="230" x2="393" y2="238" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="410" y1="230" x2="403" y2="238" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="420" y1="230" x2="413" y2="238" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="430" y1="230" x2="423" y2="238" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="440" y1="230" x2="433" y2="238" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="450" y1="230" x2="443" y2="238" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="460" y1="230" x2="453" y2="238" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="470" y1="230" x2="463" y2="238" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="480" y1="230" x2="473" y2="238" stroke="currentColor" class="s-gray" stroke-width="1.1"/><line x1="490" y1="230" x2="483" y2="238" stroke="currentColor" class="s-gray" stroke-width="1.1"/><path d="M71.5,215.4 L140,230 L171.2,83.3 L102.7,68.7 Z" fill="currentColor" class="f-gray" fill-opacity="0.15"/><path d="M71.5,215.4 L140,230 L171.2,83.3 L102.7,68.7 Z" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="121.4" cy="149.4" r="5" fill="currentColor" class="f-green"/><text x="113.4" y="141.4" font-size="12" text-anchor="end" class="t-green">CG</text><line x1="121.4" y1="149.4" x2="121.4" y2="230" stroke="currentColor" class="s-green" stroke-width="1.4" stroke-dasharray="5 4"/><line x1="121.4" y1="149.4" x2="121.4" y2="188.1" stroke="currentColor" class="s-green" stroke-width="2"/><path d="M121.4,194.4 L125.9,185.4 L116.9,185.4 Z" fill="currentColor" class="f-green"/><circle cx="140" cy="230" r="4.5" fill="currentColor"/><text x="90" y="264" font-size="12" text-anchor="middle" class="t-green">CG over the base: falls back</text><path d="M343.4,188.9 L400,230 L488.2,108.6 L431.5,67.5 Z" fill="currentColor" class="f-gray" fill-opacity="0.15"/><path d="M343.4,188.9 L400,230 L488.2,108.6 L431.5,67.5 Z" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="415.8" cy="148.8" r="5" fill="currentColor" class="f-red"/><text x="407.8" y="140.8" font-size="12" text-anchor="end" class="t-red">CG</text><line x1="415.8" y1="148.8" x2="415.8" y2="230" stroke="currentColor" class="s-red" stroke-width="1.4" stroke-dasharray="5 4"/><line x1="415.8" y1="148.8" x2="415.8" y2="187.5" stroke="currentColor" class="s-red" stroke-width="2"/><path d="M415.8,193.8 L420.3,184.8 L411.3,184.8 Z" fill="currentColor" class="f-red"/><circle cx="400" cy="230" r="4.5" fill="currentColor"/><text x="350" y="264" font-size="12" text-anchor="middle" class="t-red">CG past the pivot: tips over</text><text x="110" y="24" font-size="12" text-anchor="middle" class="t-gray">tilted 12°</text><text x="360" y="24" font-size="12" text-anchor="middle" class="t-gray">tilted 36°</text></svg>`,
          alt: 'Two tall boxes tilted about their bottom right corner. In the first, tilted 12 degrees, the vertical line from the center of gravity lands inside the base, so the box falls back. In the second, tilted 36 degrees, the line lands beyond the pivot corner, so the box tips over.',
          caption: 'Tipping is decided by where the vertical line through the center of gravity lands relative to the pivot edge.',
          maxWidth: 480,
        },
        {
          type: 'graph',
          x: [-2.3, 1.8],
          y: [-0.2, 2.4],
          equal: true,
          segments: [
            { from: [-2.3, 0], to: [1.8, 0], color: 'gray' },
            { from: corner(-1, 0), to: corner(0, 0), color: 'blue' },
            { from: corner(0, 0), to: corner(0, 2), color: 'blue' },
            { from: corner(0, 2), to: corner(-1, 2), color: 'blue' },
            { from: corner(-1, 2), to: corner(-1, 0), color: 'blue' },
            { from: corner(-0.5, 1), to: [corner(-0.5, 1)[0], 0], color: 'red', dashed: true },
            { from: corner(-0.5, 1), to: [corner(-0.5, 1)[0], `${corner(-0.5, 1)[1]} - 0.5`], color: 'red', arrow: true },
          ],
          points: [
            { x: corner(-0.5, 1)[0], y: corner(-0.5, 1)[1], color: 'red', label: 'CG' },
            { x: 0, y: 0, color: 'gray', label: 'pivot edge' },
          ],
          sliders: [{ name: 'a', min: 0, max: 50, step: 0.5, value: 15, label: 'tilt angle (degrees)', play: true, speed: 10 }],
          readouts: [
            { label: 'horizontal position of CG relative to the edge (m) $=$', expr: corner(-0.5, 1)[0], digits: 3 },
            { label: 'height of CG (m) $=$', expr: corner(-0.5, 1)[1], digits: 3 },
          ],
          caption: 'A box $1\\,\\text{m}$ wide and $2\\,\\text{m}$ tall, tilted about its right edge. Press ▶. While the CG is left of the edge (negative position), gravity\'s torque restores it. At $\\tan\\theta = \\frac{w}{h} = 0.5$, about $26.6^\\circ$, the CG is directly above the edge; beyond that it tips.',
        },
        {
          type: 'graph',
          x: [0, 90],
          y: [0, 1.3],
          xStep: 10,
          yStep: 0.2,
          height: 220,
          functions: [{ expr: '0.5*sin(x*pi/180) + cos(x*pi/180)', label: 'height of CG (m) vs tilt (degrees)', color: 'red' }],
          vlines: [{ x: 26.57, label: 'tipping point', color: 'gray' }],
          caption: 'Gravitational potential energy $U = Mgy_{\\text{cm}}$ follows the CG height. Upright is a **minimum** of $U$ (stable equilibrium: small tilts raise the CG). The peak at $26.6^\\circ$ is an **unstable** equilibrium, balanced on the edge. The barrier height is what you must lift the CG to topple it.',
        },
        {
          type: 'callout',
          variant: 'analogy',
          title: 'Vehicle rollover',
          text: 'A vehicle tips on a side slope when its CG passes over the downhill wheels: $\\tan\\theta_{\\text{tip}} = \\frac{T}{2h}$, where $T$ is the track width and $h$ the CG height. The ratio $\\frac{T}{2h}$ is the **static stability factor**. A car with $T = 1.6\\,\\text{m}$ and $h = 0.70\\,\\text{m}$ has $1.14$ (tipping at about $49^\\circ$ on a static slope, or a sideways acceleration near $1.14g$ in a turn, ignoring suspension). Tall armored vehicles carry their mass high, lowering this factor, which is why rollover drills are part of crew training.',
        },
      ],
    },
    {
      kind: 'mcq',
      prompt: 'Two crates have the same mass and the same square base, but crate A is twice as tall as crate B, with the mass spread uniformly in each. Which statement is correct?',
      options: [
        {
          text: 'A tips over at a smaller tilt angle than B',
          correct: true,
          why: 'The tipping angle satisfies $\\tan\\theta = \\frac{w/2}{h_{\\text{cg}}}$. A\'s center of gravity is twice as high, so it reaches the edge at a smaller angle.',
        },
        {
          text: 'They tip at the same angle because their masses are equal',
          why: 'Mass cancels from the tipping condition. Geometry (CG height versus base width) decides.',
        },
        {
          text: 'B tips first because it is wider relative to its height',
          why: 'A relatively wider base makes a body **more** stable, not less.',
        },
        {
          text: 'A is more stable because it is taller and heavier-looking',
          why: 'Height without a wider base only raises the CG, which reduces stability.',
        },
      ],
      explanation: 'With base width $w$: for A ($h_{\\text{cg}} = h$), $\\tan\\theta_A = \\frac{w}{2h}$; for B ($h_{\\text{cg}} = h/2$), $\\tan\\theta_B = \\frac{w}{h}$, twice as large. Lowering the CG or widening the base increases stability: the logic behind wide-track race cars and keeping heavy cargo low.',
    },
    {
      kind: 'truefalse',
      prompt: 'In a static equilibrium problem you must take torques about the center of mass, otherwise the torque equation gives the wrong answer.',
      answer: false,
      explanation: 'When $\\sum\\vec{F} = \\vec{0}$, the net torque is the same about every point (the first card proves it). So any pivot works, and the smart choice is the point where an unknown force acts: a hinge, a support, the base of a ladder. Those forces then have zero lever arm and vanish from the equation.',
    },
    {
      kind: 'order',
      prompt: 'Order the steps for finding the support forces on a beam in static equilibrium.',
      lines: [
        'Draw the beam with every force at its point of application, including the beam\'s weight at its center of gravity',
        'Choose a pivot at one support so that its unknown force has zero lever arm',
        'Write $\\sum\\tau = 0$ about that pivot and solve for the other support force',
        'Use $\\sum F_y = 0$ to find the remaining support force',
        'Check by taking torques about a different point',
      ],
      distractors: ['Put all the forces at the center of mass so the diagram is simpler'],
      explanation: 'An extended free-body diagram comes first, because torque depends on *where* each force acts. A pivot at an unknown force removes it; the torque equation then gives one unknown, force balance gives the other, and a second torque equation checks the work. Moving forces to the center of mass (a point-particle diagram) throws away the lever arms, which is exactly the information equilibrium of rigid bodies needs.',
    },
  ],
  takeaways: [
    'Static equilibrium needs both $\\sum\\vec{F} = \\vec{0}$ and $\\sum\\vec{\\tau} = \\vec{0}$; a couple has zero net force but still causes rotation.',
    'In a uniform field the weight acts at the center of gravity, which is the center of mass.',
    'If the forces balance, the torques balance about every point: choose a pivot where an unknown force acts to eliminate it.',
    'Hinges supply two unknown components; cables pull along themselves, and shallow cable angles mean large tensions ($T \\propto 1/\\sin\\phi$).',
    'A uniform ladder on a frictionless wall needs $\\tan\\theta \\ge \\frac{1}{2\\mu_s}$; an object tips once the vertical through its CG passes its pivot edge, and a lower CG or wider base means more stability.',
  ],
  reading: [
    {
      title: 'OpenStax University Physics Volume 1, Chapter 12: Static Equilibrium and Elasticity',
      url: 'https://openstax.org/details/books/university-physics-volume-1',
      source: 'openstax',
      note: 'Sections 12.1 and 12.2 present the equilibrium conditions and many worked examples with beams, ladders and booms.',
    },
    {
      title: 'PhET Interactive Simulations',
      url: 'https://phet.colorado.edu/',
      source: 'other',
      note: 'The "Balancing Act" simulation lets you experiment with torque balance on a plank.',
    },
    {
      title: 'Khan Academy: Physics',
      url: 'https://www.khanacademy.org/science/physics',
      source: 'khan',
      note: 'The torque and equilibrium videos work through seesaw and beam problems step by step.',
    },
  ],
};
