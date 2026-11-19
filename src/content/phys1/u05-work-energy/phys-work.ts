import type { Lesson } from '../../types';

const FIG_SLED = /*svg:phys-u05/f1.svg*/`<svg viewBox="0 0 420 210" xmlns="http://www.w3.org/2000/svg"><line x1="20" y1="150" x2="400" y2="150" stroke="currentColor" stroke-width="2"/><line x1="35" y1="150" x2="25" y2="160" stroke="currentColor" class="s-gray" stroke-width="1"/><line x1="53" y1="150" x2="43" y2="160" stroke="currentColor" class="s-gray" stroke-width="1"/><line x1="71" y1="150" x2="61" y2="160" stroke="currentColor" class="s-gray" stroke-width="1"/><line x1="89" y1="150" x2="79" y2="160" stroke="currentColor" class="s-gray" stroke-width="1"/><line x1="107" y1="150" x2="97" y2="160" stroke="currentColor" class="s-gray" stroke-width="1"/><line x1="125" y1="150" x2="115" y2="160" stroke="currentColor" class="s-gray" stroke-width="1"/><line x1="143" y1="150" x2="133" y2="160" stroke="currentColor" class="s-gray" stroke-width="1"/><line x1="161" y1="150" x2="151" y2="160" stroke="currentColor" class="s-gray" stroke-width="1"/><line x1="179" y1="150" x2="169" y2="160" stroke="currentColor" class="s-gray" stroke-width="1"/><line x1="197" y1="150" x2="187" y2="160" stroke="currentColor" class="s-gray" stroke-width="1"/><line x1="215" y1="150" x2="205" y2="160" stroke="currentColor" class="s-gray" stroke-width="1"/><line x1="233" y1="150" x2="223" y2="160" stroke="currentColor" class="s-gray" stroke-width="1"/><line x1="251" y1="150" x2="241" y2="160" stroke="currentColor" class="s-gray" stroke-width="1"/><line x1="269" y1="150" x2="259" y2="160" stroke="currentColor" class="s-gray" stroke-width="1"/><line x1="287" y1="150" x2="277" y2="160" stroke="currentColor" class="s-gray" stroke-width="1"/><line x1="305" y1="150" x2="295" y2="160" stroke="currentColor" class="s-gray" stroke-width="1"/><line x1="323" y1="150" x2="313" y2="160" stroke="currentColor" class="s-gray" stroke-width="1"/><line x1="341" y1="150" x2="331" y2="160" stroke="currentColor" class="s-gray" stroke-width="1"/><line x1="359" y1="150" x2="349" y2="160" stroke="currentColor" class="s-gray" stroke-width="1"/><line x1="377" y1="150" x2="367" y2="160" stroke="currentColor" class="s-gray" stroke-width="1"/><line x1="395" y1="150" x2="385" y2="160" stroke="currentColor" class="s-gray" stroke-width="1"/><rect x="110" y="112" width="90" height="38" rx="5" fill="none" stroke="currentColor" stroke-width="2"/><text x="155.0" y="136.0" font-size="13" text-anchor="middle">sled</text><line x1="200" y1="124" x2="303.9" y2="124" stroke="currentColor" class="s-gray" stroke-width="1.5" stroke-dasharray="5 4"/><line x1="303.9" y1="124" x2="303.9" y2="64.0" stroke="currentColor" class="s-gray" stroke-width="1.5" stroke-dasharray="5 4"/><line x1="200.0" y1="124.0" x2="295.3" y2="69.0" stroke="currentColor" class="s-red" stroke-width="3"/><path d="M303.9 64.0 L297.5 72.9 L293.0 65.1 Z" fill="currentColor" class="f-red"/><text x="285.9" y="56.0" font-size="17" text-anchor="start" class="t-red" font-style="italic" font-weight="bold">F</text><path d="M234 124 A34 34 0 0 0 229.4 107.0" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="240.0" y="118.0" font-size="15" text-anchor="start" font-style="italic">θ</text><text x="256.0" y="141.0" font-size="13" text-anchor="middle" class="t-blue" font-style="italic">F cos θ</text><text x="311.9" y="98.0" font-size="13" text-anchor="start" class="t-gray" font-style="italic">F sin θ</text><line x1="110.0" y1="182.0" x2="320.0" y2="182.0" stroke="currentColor" class="s-green" stroke-width="2.5"/><path d="M330.0 182.0 L320.0 186.5 L320.0 177.5 Z" fill="currentColor" class="f-green"/><text x="220.0" y="200.0" font-size="13" text-anchor="middle" class="t-green">displacement Δr (length d)</text></svg>`;
const FIG_INCLINE = /*svg:phys-u05/f2.svg*/`<svg viewBox="0 0 420 230" xmlns="http://www.w3.org/2000/svg"><path d="M30 200 L400 200 L400 65.3 Z" fill="currentColor" class="f-gray" fill-opacity="0.12" stroke="currentColor" stroke-width="2"/><path d="M76 200 A46 46 0 0 0 73.2 184.3" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="82.0" y="194.0" font-size="13" text-anchor="start">20°</text><rect x="214.0" y="80.8" width="60" height="40" rx="4" fill="currentColor" class="f-blue" fill-opacity="0.15" stroke="currentColor" stroke-width="2" transform="rotate(-20 244.0 100.8)"/><circle cx="244.0" cy="100.8" r="3.5" fill="currentColor"/><line x1="244.0" y1="100.8" x2="323.9" y2="71.8" stroke="currentColor" class="s-red" stroke-width="3"/><path d="M333.3 68.3 L325.4 76.0 L322.3 67.5 Z" fill="currentColor" class="f-red"/><text x="339.3" y="64.3" font-size="15" text-anchor="start" class="t-red" font-style="italic" font-weight="bold">F</text><line x1="244.0" y1="100.8" x2="223.5" y2="44.4" stroke="currentColor" class="s-green" stroke-width="3"/><path d="M220.0 35.1 L227.7 42.9 L219.2 46.0 Z" fill="currentColor" class="f-green"/><text x="204.0" y="31.1" font-size="15" text-anchor="start" class="t-green" font-style="italic" font-weight="bold">n</text><line x1="244.0" y1="100.8" x2="244.0" y2="168.8" stroke="currentColor" class="s-purple" stroke-width="3"/><path d="M244.0 178.8 L239.5 168.8 L248.5 168.8 Z" fill="currentColor" class="f-purple"/><text x="252.0" y="174.8" font-size="15" text-anchor="start" class="t-purple" font-style="italic" font-weight="bold">mg</text><line x1="244.0" y1="100.8" x2="201.7" y2="116.2" stroke="currentColor" class="s-orange" stroke-width="3"/><path d="M192.3 119.6 L200.2 112.0 L203.2 120.5 Z" fill="currentColor" class="f-orange"/><text x="178.3" y="135.6" font-size="15" text-anchor="start" class="t-orange" font-style="italic" font-weight="bold">f</text><line x1="138.8" y1="177.4" x2="228.1" y2="144.9" stroke="currentColor" class="s-teal" stroke-width="2"/><path d="M237.5 141.5 L229.6 149.1 L226.6 140.7 Z" fill="currentColor" class="f-teal"/><text x="194.2" y="183.5" font-size="13" text-anchor="middle" class="t-teal">d = 3.0 m</text></svg>`;

// Ramp profiles for the path-independence graph (x from 0 to 4 m, y in m).
const CURVE = '1.5 + 1.5cos(pi*x/4)';
const CURVE_S = '1.5 + 1.5cos(pi*s/4)';
const LINE_S = '3 - 0.75s';

export const lesson: Lesson = {
  id: 'phys-work',
  title: 'Work Done by a Force',
  summary: 'Work is how a force transfers energy: the dot product $\\vec F \\cdot \\Delta\\vec r$ for a constant force, an integral when the force varies, and a line integral along a curved path.',
  minutes: 20,
  objectives: [
    'Compute the work done by a constant force with $W = \\vec F \\cdot \\Delta \\vec r = F\\,\\Delta r\\cos\\theta$, in magnitude–angle or component form',
    'Decide whether a force does positive, negative or zero work, and add the works of several forces to get the net work',
    'Find the work done by a variable force as $\\int F_x\\,dx$, the signed area under an $F_x$-versus-$x$ graph',
    'Compute the work done by a spring, $W_s = \\tfrac12 k x_i^2 - \\tfrac12 k x_f^2$, with the correct sign',
    'Set up work along a curved path as $\\int \\vec F \\cdot d\\vec r$ and recognise when the result depends on the path',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'What physicists mean by work',
      blocks: [
        {
          type: 'p',
          text: 'In everyday speech, holding a 30 kg rucksack still for an hour is hard work. In physics it is **no work at all**, because the pack does not move. Physics reserves the word for something precise: a force does work on an object when it acts *while the object moves*, and the work measures how much energy that force transfers into (or out of) the object\'s motion.',
        },
        {
          type: 'p',
          text: 'You met [[work]] in Calculus II as "force times distance". Physics adds one essential refinement: only the part of the force **along the motion** counts. A rope pulling a sled partly forward and partly upward does work only through its forward component. The [[dot-product]] picks out exactly that component.',
        },
        {
          type: 'figure',
          svg: FIG_SLED,
          alt: 'A sled on level ground pulled by a force F at angle theta above the horizontal; dashed components F cos theta (horizontal) and F sin theta (vertical); a green displacement arrow along the ground.',
          caption: 'Only $F\\cos\\theta$, the component of $\\vec F$ along the displacement, does work. The upward part $F\\sin\\theta$ is perpendicular to the motion.',
          maxWidth: 440,
        },
        {
          type: 'definition',
          term: 'Work done by a constant force',
          text: 'If a constant force $\\vec F$ acts on an object while the object undergoes a [[displacement]] $\\Delta\\vec r$, the work done by that force is\n\n$$W = \\vec F \\cdot \\Delta\\vec r = F\\,\\Delta r\\cos\\theta,$$\n\nwhere $\\theta$ is the angle between $\\vec F$ and $\\Delta \\vec r$. Work is a **scalar**. Its SI unit is the [[phys-joule|joule]]: $1\\,\\text{J} = 1\\,\\text{N}\\cdot\\text{m} = 1\\,\\text{kg}\\cdot\\text{m}^2/\\text{s}^2$.',
        },
        {
          type: 'derivation',
          title: 'Pulling a sled: 120 N at 30° for 15 m',
          steps: [
            { tex: '\\text{System: the sled. Displacement } \\Delta r = 15\\,\\text{m along } +x', why: 'Always start by naming the object whose work you want and the direction it moves.' },
            { tex: '\\theta = 30^\\circ \\text{ between } \\vec F \\text{ and } \\Delta\\vec r', why: 'The rope makes $30^\\circ$ with the ground, and the sled moves along the ground.' },
            { tex: 'W = F\\,\\Delta r\\cos\\theta = (120\\,\\text{N})(15\\,\\text{m})\\cos 30^\\circ', why: 'Definition of work for a constant force.' },
            { tex: '= 1800 \\times 0.8660\\,\\text{J} \\approx 1.56 \\times 10^{3}\\,\\text{J}', why: '$\\cos 30^\\circ = \\frac{\\sqrt3}{2} \\approx 0.8660$. Three significant figures, like the data.' },
          ],
          result: 'The rope does about $1.56\\,\\text{kJ}$ of work on the sled. Pulling straight forward would give $1.80\\,\\text{kJ}$; the angled pull "wastes" part of the force lifting.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why only the parallel component counts',
          text: 'A force perpendicular to the velocity can bend the path but cannot speed the object up or slow it down. In the next lesson you will prove that the net work equals the change in $\\tfrac12 mv^2$, so a force that cannot change the speed must do zero work. The $\\cos\\theta$ factor is how the definition builds that in.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'mcq',
      prompt: 'A crate slides **down** a rough ramp. Which force does **negative** work on the crate during the slide?',
      options: [
        { text: 'Kinetic friction', correct: true, why: 'Friction on the crate points up the ramp, opposite the displacement down the ramp: $\\theta = 180^\\circ$, so $W = -f_k d$.' },
        { text: 'Gravity', why: 'The crate moves downhill, so it has a downward component of displacement along $m\\vec g$. Gravity does *positive* work here.' },
        { text: 'The normal force', why: 'The normal force is perpendicular to the ramp surface and therefore to the displacement: $\\cos 90^\\circ = 0$, so it does zero work.' },
        { text: 'None: a sliding crate has no forces opposing it', why: 'Friction opposes sliding. Forgetting friction is the classic "missing force" mistake.' },
      ],
      explanation: 'Compare each force\'s direction with the displacement (down the slope). Gravity has a component along it (positive work), the normal force is perpendicular (zero work), and kinetic friction points up the slope, against the motion (negative work).',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Positive, negative and zero work',
      blocks: [
        {
          type: 'p',
          text: 'The sign of $W$ is set by $\\cos\\theta$. Turn the slider and watch the blue component $F\\cos\\theta$ along the displacement shrink, vanish at $90^\\circ$ and then point backward.',
        },
        {
          type: 'graph',
          x: [-4, 6],
          y: [-1.6, 3.6],
          equal: true,
          height: 260,
          segments: [
            { from: [0, -0.9], to: [5, -0.9], color: 'green', arrow: true, label: 'Δr = 5 m' },
            { from: ['3cos(a*pi/180)', '3sin(a*pi/180)'], to: ['3cos(a*pi/180)', 0], color: 'gray', dashed: true },
            { from: [0, 0], to: ['3cos(a*pi/180)', 0], color: 'blue', arrow: true },
            { from: [0, 0], to: ['3cos(a*pi/180)', '3sin(a*pi/180)'], color: 'red', arrow: true, label: 'F = 30 N' },
          ],
          points: [{ x: 0, y: 0, color: 'gray' }],
          sliders: [{ name: 'a', min: 0, max: 180, step: 1, value: 30, label: 'angle $\\theta$ between $\\vec F$ and $\\Delta\\vec r$ (degrees)' }],
          readouts: [
            { label: '$F\\cos\\theta =$', expr: '30cos(a*pi/180)', digits: 2 },
            { label: '$W = F\\,\\Delta r\\cos\\theta =$', expr: '150cos(a*pi/180)', digits: 1 },
          ],
          caption: 'Red: the force. Blue: its component along the displacement (green). $W > 0$ for $\\theta < 90^\\circ$, $W = 0$ at $90^\\circ$, $W < 0$ beyond. At $180^\\circ$ the force directly opposes the motion and $W = -150\\,\\text{J}$.',
        },
        {
          type: 'list',
          items: [
            '**Positive work** ($0 \\le \\theta < 90^\\circ$): the force has a component along the motion and feeds energy in. Gravity on a falling object; an engine pushing a car forward.',
            '**Negative work** ($90^\\circ < \\theta \\le 180^\\circ$): the force opposes the motion and takes energy out. Kinetic friction; brakes; gravity on a ball as it rises.',
            '**Zero work** ($\\theta = 90^\\circ$, or no displacement): the normal force on a car driving on level ground; the tension in a string whirling a ball in a circle; gravity on a satellite in a circular orbit.',
          ],
        },
        {
          type: 'p',
          text: 'With [[vector-components]], the dot product needs no angle at all: $W = F_x\\,\\Delta x + F_y\\,\\Delta y + F_z\\,\\Delta z$. For $\\vec F = (3\\,\\hat{\\imath} + 4\\,\\hat{\\jmath})\\,\\text{N}$ acting during $\\Delta\\vec r = (5\\,\\hat{\\imath} - 2\\,\\hat{\\jmath})\\,\\text{m}$, $W = 15 - 8 = 7\\,\\text{J}$.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Muscle fatigue is not mechanical work',
          text: 'Carrying a ruck across level ground at constant velocity, your upward support force is perpendicular to your horizontal displacement, so it does zero work on the pack. You still get tired because muscle fibres hold a load by repeatedly contracting and relaxing, which burns chemical energy *inside* you. That is physiology, not work done on the pack.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Net work',
          text: 'Work is done by *each* force separately. The net work on an object is the sum of the individual works, $W_{\\text{net}} = W_1 + W_2 + \\cdots$, which equals the work done by the net force $\\sum \\vec F$ (because the dot product distributes over addition). Always say *which* force\'s work you mean.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'numeric',
      prompt: 'A soldier drags a casualty-evacuation sled 40.0 m across flat ground, pulling on a strap with a constant force of 180 N directed 25.0° above the horizontal. How much work does the strap do on the sled? Give 3 significant figures.',
      hint: 'Only the horizontal component of the pull is along the displacement: $W = F d\\cos\\theta$.',
      answer: '180*40*cos(25*pi/180)',
      answerTex: '6.53 \\times 10^{3}\\,\\text{J}',
      tolerance: 40,
      label: '$W =$',
      unit: 'J',
      explanation: 'The displacement is horizontal and the strap makes $25.0^\\circ$ with it, so $W = (180\\,\\text{N})(40.0\\,\\text{m})\\cos 25.0^\\circ = 7200 \\times 0.9063 \\approx 6.53 \\times 10^{3}\\,\\text{J}$. Using $\\sin 25^\\circ$ gives $3.04\\,\\text{kJ}$, the work the vertical component *would* do if the sled moved vertically, which it does not. Ignoring the angle gives $7.20\\,\\text{kJ}$.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Variable forces: work is an integral',
      blocks: [
        {
          type: 'p',
          text: 'Real forces change as things move: a winch cable\'s pull drops as the drum fills, a rubber band pulls harder the more you stretch it. For a force along the $x$-axis that depends on position, chop the motion into tiny steps $dx$. On each step the force is nearly constant, so the work is $F_x(x)\\,dx$. Adding the steps and letting $dx \\to 0$ is exactly a [[definite-integral]]:',
        },
        {
          type: 'theorem',
          name: 'Work by a variable force in one dimension',
          tex: 'W = \\int_{x_i}^{x_f} F_x(x)\\,dx',
          text: 'Graphically, $W$ is the **signed area** between the $F_x$-versus-$x$ graph and the $x$-axis. Area above the axis ($F_x > 0$ while moving in $+x$) counts positive; area below counts negative.',
        },
        {
          type: 'graph',
          x: [0, 6.5],
          y: [-8, 14],
          xStep: 1,
          yStep: 2,
          height: 270,
          functions: [{ expr: '12 - 3x', label: '$F_x(x) = 12 - 3x$ (N, $x$ in m)' }],
          areas: [{ expr: '12 - 3x', from: 'a', to: 'b', color: 'blue' }],
          sliders: [
            { name: 'a', min: 0, max: 6, step: 0.1, value: 1, label: 'start $x_i$' },
            { name: 'b', min: 0, max: 6, step: 0.1, value: 3, label: 'end $x_f$ (keep $x_f \\ge x_i$)' },
          ],
          readouts: [{ label: '$W = \\int_{x_i}^{x_f}(12 - 3x)\\,dx =$', expr: '12(b - a) - 1.5(b^2 - a^2)', digits: 2 }],
          caption: 'Drag $x_f$ past $4\\,\\text{m}$, where the force reverses. The shaded area below the axis subtracts: from $0$ to $8\\,\\text{m}$ the positive and negative areas cancel and the net work is zero.',
        },
        {
          type: 'derivation',
          title: 'A winch whose pull fades: $F(x) = 800 - 40x$ newtons, from $x = 0$ to $10$ m',
          steps: [
            { tex: 'W = \\int_0^{10} (800 - 40x)\\,dx', why: 'The cable pulls along the motion, so $F_x = F(x)$. Integrate from the initial to the final position.' },
            { tex: '= \\Big[\\,800x - 20x^2\\,\\Big]_0^{10}', why: '[[antiderivative|Antiderivative]] term by term: $\\int 40x\\,dx = 20x^2$.' },
            { tex: '= (8000 - 2000) - 0 = 6000\\,\\text{J}', why: 'Evaluate at the limits (Fundamental Theorem of Calculus).' },
          ],
          result: 'The winch does $6.0\\,\\text{kJ}$ of work. Check: the force falls linearly from $800\\,\\text{N}$ to $400\\,\\text{N}$, so the average force is $600\\,\\text{N}$, and $600 \\times 10 = 6000\\,\\text{J}$.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Do not use $W = Fd$ with a changing force',
          text: '$W = F d$ assumes $F$ is constant. With a variable force you must integrate, or (for a straight-line graph only) use the average force. Plugging in the starting force $800\\,\\text{N}$ above would give $8000\\,\\text{J}$, a 33% overestimate.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'expr',
      prompt: 'A cart rides a shaped magnetic track that pushes it along $x$ with force $F_x(x) = 3x^2 - 2x$ (newtons, $x$ in metres). Find the work done on the cart as it moves from $x = 0$ to $x = d$, as a function of $d$.',
      hint: 'Integrate $3x^2 - 2x$ from $0$ to $d$.',
      answer: 'd^3 - d^2',
      answerTex: 'W(d) = d^3 - d^2',
      variables: ['d'],
      domain: [0, 3],
      label: '$W(d) =$',
      explanation: '$W = \\int_0^d (3x^2 - 2x)\\,dx = \\big[x^3 - x^2\\big]_0^d = d^3 - d^2$ joules. Sanity check: for $0 < d < 1$ this is negative, because $F_x < 0$ for $0 < x < \\tfrac23$ and the track first pushes backward. At $d = 1$ the positive and negative areas cancel exactly.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'The work done by a spring',
      blocks: [
        {
          type: 'p',
          text: 'Springs are the most important variable force in mechanics. By [[hookes-law]], the force *you* apply to hold a spring at extension $x$ (measured from its natural length) is $kx$. The force the **spring** exerts on whatever is attached is the opposite, a restoring force:',
        },
        { type: 'math', tex: 'F_{s,x} = -kx', caption: 'Stretched ($x > 0$): the spring pulls back toward $-x$. Compressed ($x < 0$): it pushes toward $+x$.' },
        {
          type: 'derivation',
          title: 'Work done by the spring as the end moves from $x_i$ to $x_f$',
          steps: [
            { tex: 'W_s = \\int_{x_i}^{x_f} (-kx)\\,dx', why: 'Work by a variable force along $x$, with the spring force $F_{s,x} = -kx$.' },
            { tex: '= -\\tfrac12 k x^2 \\Big|_{x_i}^{x_f}', why: 'Antiderivative of $-kx$ is $-\\tfrac12 kx^2$.' },
            { tex: '= \\tfrac12 k x_i^2 - \\tfrac12 k x_f^2', why: 'Upper limit minus lower limit, written with the initial term first.' },
          ],
          result: 'Moving away from the natural length ($|x_f| > |x_i|$), the spring does negative work: it resists. Moving back toward it, the spring does positive work.',
        },
        {
          type: 'graph',
          x: [-0.35, 0.35],
          y: [-200, 200],
          xStep: 0.1,
          yStep: 50,
          height: 260,
          functions: [{ expr: '-k*x', label: '$F_{s,x} = -kx$ (N)' }],
          areas: [{ expr: '-k*x', from: 'a', to: 'b', color: 'purple' }],
          sliders: [
            { name: 'k', min: 100, max: 600, step: 10, value: 400, label: 'spring constant $k$ (N/m)' },
            { name: 'a', min: -0.3, max: 0.3, step: 0.01, value: 0, label: 'start $x_i$ (m)' },
            { name: 'b', min: -0.3, max: 0.3, step: 0.01, value: 0.15, label: 'end $x_f$ (m), keep $x_f \\ge x_i$' },
          ],
          readouts: [{ label: 'work by the spring $W_s = \\tfrac12 k x_i^2 - \\tfrac12 k x_f^2 =$', expr: '0.5k*a^2 - 0.5k*b^2', digits: 2 }],
          caption: 'Stretching from $0$ to $0.15\\,\\text{m}$ with $k = 400\\,\\text{N/m}$ shades a triangle below the axis: $W_s = -4.5\\,\\text{J}$. Now set $x_i = 0.15$, $x_f = 0.30$: the next $15\\,\\text{cm}$ costs $-13.5\\,\\text{J}$, three times as much. Try $x_i = -0.15$, $x_f = 0.15$: the two triangles cancel.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the factor ½',
          text: 'The force grows linearly from $0$ to $kx$ as you stretch, so its *average* over the stretch is $\\tfrac12 kx$. Average force times distance gives $\\tfrac12 kx \\cdot x = \\tfrac12 kx^2$: the area of a triangle, not a rectangle. Using $kx \\cdot x$ doubles the answer.',
        },
        {
          type: 'p',
          text: 'If you stretch the spring slowly (so the end does not speed up), your hand\'s force is $+kx$ and the work **you** do is the negative of the spring\'s: $W_{\\text{you}} = \\tfrac12 kx_f^2 - \\tfrac12 kx_i^2$. That energy is not lost; the next lessons show it is stored and can be returned.',
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'error',
      prompt: 'A spring with $k = 250\\,\\text{N/m}$ is already stretched $0.10\\,\\text{m}$. A student computes the work needed to stretch it further, to $0.20\\,\\text{m}$. Tap the first line that is wrong.',
      lines: [
        '$W_{\\text{you}} = \\int_{0.10}^{0.20} kx\\,dx$',
        '$= \\tfrac12 k (0.20 - 0.10)^2$',
        '$= \\tfrac12 (250)(0.10)^2$',
        '$= 1.25\\,\\text{J}$',
      ],
      errorLines: [2],
      explanation: 'Line 2 evaluates the integral as $\\tfrac12 k(\\Delta x)^2$. The antiderivative must be evaluated at each limit: $\\tfrac12 k(x_f^2 - x_i^2) = \\tfrac12(250)(0.0400 - 0.0100) = 3.75\\,\\text{J}$, three times the student\'s value. The second $10\\,\\text{cm}$ is harder than the first because the spring is already pulling back with $25\\,\\text{N}$ at the start.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'numeric',
      prompt: 'A car\'s crash-test bumper spring has $k = 3.0 \\times 10^{4}\\,\\text{N/m}$. In a slow impact it is compressed from its natural length by $0.12\\,\\text{m}$. What work does the **spring** do on the car during the compression? Include the sign; give 3 significant figures.',
      hint: 'Use $W_s = \\tfrac12 k x_i^2 - \\tfrac12 k x_f^2$ with $x_i = 0$. Does the spring push with or against the car\'s motion?',
      answer: '-0.5*3*10^4*0.12^2',
      answerTex: '-216\\,\\text{J}',
      tolerance: 2,
      label: '$W_s =$',
      unit: 'J',
      explanation: '$W_s = \\tfrac12 k(0)^2 - \\tfrac12 (3.0 \\times 10^{4})(0.12)^2 = -216\\,\\text{J}$. The spring pushes back against the car while the car moves into it, so its work is negative: it takes $216\\,\\text{J}$ out of the car\'s motion. Forgetting the $\\tfrac12$ gives $-432\\,\\text{J}$; dropping the sign gives $+216\\,\\text{J}$, the work done *on* the spring.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'concept',
      title: 'Work along a curved path',
      blocks: [
        {
          type: 'p',
          text: 'In two or three dimensions an object follows a path $C$, and the force may change in both size and direction along it. Chop the path into tiny displacement vectors $d\\vec r = dx\\,\\hat{\\imath} + dy\\,\\hat{\\jmath}$, take the dot product with the local force on each one and add:',
        },
        {
          type: 'theorem',
          name: 'Work along a path (a line integral)',
          tex: 'W = \\int_C \\vec F \\cdot d\\vec r = \\int_C \\left(F_x\\,dx + F_y\\,dy\\right)',
          text: 'To evaluate it, describe the path with a parameter, $x(u)$ and $y(u)$, so that $dx = x\'(u)\\,du$ and $dy = y\'(u)\\,du$, and you are back to an ordinary single integral in $u$.',
        },
        {
          type: 'p',
          text: '**Gravity is special.** Near Earth $\\vec F = -mg\\,\\hat{\\jmath}$, so $\\vec F\\cdot d\\vec r = -mg\\,dy$ and $W_g = -mg\\,(y_f - y_i)$ *whatever the path*. Slide the two balls below: their works differ along the way but agree at the bottom.',
        },
        {
          type: 'graph',
          x: [-0.4, 4.6],
          y: [-0.4, 3.6],
          equal: true,
          height: 280,
          functions: [{ expr: CURVE, color: 'blue', domain: [0, 4], label: 'curved ramp' }],
          segments: [
            { from: [0, 3], to: [4, 0], color: 'orange' },
            { from: ['s', CURVE_S], to: ['s', `${CURVE_S} - 0.6`], color: 'purple', arrow: true },
          ],
          points: [
            { x: 's', y: CURVE_S, color: 'blue' },
            { x: 's', y: LINE_S, color: 'orange' },
          ],
          sliders: [{ name: 's', min: 0, max: 4, step: 0.02, value: 1.6, label: 'horizontal position $x$ of both balls (m)', play: true }],
          readouts: [
            { label: '$W_g$ on the curved ramp $= mg(3 - y) =$', expr: `2*9.8*(3 - (${CURVE_S}))`, digits: 1 },
            { label: '$W_g$ on the straight ramp $=$', expr: `2*9.8*(3 - (${LINE_S}))`, digits: 1 },
          ],
          caption: 'Two $2.0\\,\\text{kg}$ balls go from $(0, 3)$ to $(4, 0)$ by different routes; the purple arrow is the weight $m\\vec g$, the same on both. Midway the works differ, because the heights differ. At $x = 4$ both equal $mg(3\\,\\text{m}) = 58.8\\,\\text{J}$.',
        },
        {
          type: 'p',
          text: 'Not every force is so forgiving. Consider a "swirl" force $\\vec F = (-y\\,\\hat{\\imath} + x\\,\\hat{\\jmath})\\,\\text{N}$, the kind of push a stirred fluid gives a floating object. It always points counterclockwise around the origin.',
        },
        {
          type: 'derivation',
          title: 'Swirl force along a quarter circle of radius 2 m, from $(2, 0)$ to $(0, 2)$',
          steps: [
            { tex: 'x = 2\\cos u,\\quad y = 2\\sin u,\\qquad 0 \\le u \\le \\tfrac{\\pi}{2}', why: 'Parametrize the arc by its angle (polar coordinates with $r = 2$).' },
            { tex: 'dx = -2\\sin u\\,du,\\quad dy = 2\\cos u\\,du', why: 'Differentiate each coordinate with respect to $u$.' },
            { tex: 'F_x\\,dx + F_y\\,dy = (-2\\sin u)(-2\\sin u\\,du) + (2\\cos u)(2\\cos u\\,du)', why: 'Substitute $F_x = -y = -2\\sin u$ and $F_y = x = 2\\cos u$.' },
            { tex: '= 4(\\sin^2 u + \\cos^2 u)\\,du = 4\\,du', why: 'Pythagorean identity. The force is tangent to the circle, so the dot product is just $|\\vec F|\\,|d\\vec r|$.' },
            { tex: 'W_{\\text{arc}} = \\int_0^{\\pi/2} 4\\,du = 2\\pi \\approx 6.28\\,\\text{J}', why: 'An ordinary integral in $u$.' },
          ],
          result: 'Along the straight chord from $(2, 0)$ to $(0, 2)$ the same force does only $4.00\\,\\text{J}$ (the deep dive below shows it). Same endpoints, different work: for this force the path matters.',
        },
        {
          type: 'graph',
          x: [-1, 2.8],
          y: [-0.4, 2.8],
          equal: true,
          height: 260,
          parametric: [{ x: '2cos(t)', y: '2sin(t)', t: [0, 'pi/2'], color: 'blue', label: 'quarter circle' }],
          segments: [
            { from: [2, 0], to: [0, 2], color: 'orange' },
            { from: [2, 0], to: [2, 0.7], color: 'red', arrow: true },
            { from: ['2cos(pi/6)', '2sin(pi/6)'], to: ['2cos(pi/6) - 0.35*2sin(pi/6)', '2sin(pi/6) + 0.35*2cos(pi/6)'], color: 'red', arrow: true },
            { from: ['2cos(pi/3)', '2sin(pi/3)'], to: ['2cos(pi/3) - 0.35*2sin(pi/3)', '2sin(pi/3) + 0.35*2cos(pi/3)'], color: 'red', arrow: true },
            { from: [0, 2], to: [-0.7, 2], color: 'red', arrow: true },
            { from: [1, 1], to: [0.65, 1.35], color: 'red', arrow: true },
          ],
          points: [
            { x: '2cos(u*pi/2)', y: '2sin(u*pi/2)', color: 'blue' },
            { x: '2 - 2u', y: '2u', color: 'orange' },
          ],
          sliders: [{ name: 'u', min: 0, max: 1, step: 0.01, value: 0.5, label: 'fraction of the trip completed $u$', play: true }],
          readouts: [
            { label: 'work so far on the arc $= 2\\pi u =$', expr: '2pi*u', digits: 2 },
            { label: 'work so far on the chord $= 4u =$', expr: '4u', digits: 2 },
          ],
          caption: 'Red arrows: the swirl force (scaled down). On the arc it is always along the motion; on the chord it is partly sideways. Press play: the two totals finish at $6.28\\,\\text{J}$ and $4.00\\,\\text{J}$.',
        },
        {
          type: 'deepdive',
          title: 'The straight chord, worked out',
          blocks: [
            {
              type: 'derivation',
              steps: [
                { tex: 'x = 2 - 2u,\\quad y = 2u,\\qquad 0 \\le u \\le 1', why: 'Straight line from $(2, 0)$ at $u = 0$ to $(0, 2)$ at $u = 1$.' },
                { tex: 'dx = -2\\,du,\\quad dy = 2\\,du', why: 'Differentiate.' },
                { tex: 'F_x\\,dx + F_y\\,dy = (-2u)(-2\\,du) + (2 - 2u)(2\\,du) = 4\\,du', why: 'Substitute $F_x = -y$ and $F_y = x$; the $u$ terms cancel.' },
                { tex: 'W_{\\text{chord}} = \\int_0^1 4\\,du = 4\\,\\text{J}', why: 'Integrate over the parameter range.' },
              ],
            },
          ],
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'A line integral is a loop in code',
          text: 'Physics engines never evaluate line integrals symbolically. They sum $\\vec F \\cdot \\Delta \\vec r$ over many short steps, which is the definition of the integral before taking the limit. The program below does that for both paths.',
        },
        {
          type: 'code',
          title: 'work_path.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdio>
#include <initializer_list>

struct Vec2 { double x, y; };

// The "swirl" force F = (-y, x) newtons, like a stirred fluid.
Vec2 force(Vec2 r) { return {-r.y, r.x}; }

// Add up F . dr over many short straight steps along a path r(u), 0 <= u <= 1.
template <class Path>
double workAlong(Path r, int steps) {
    double W = 0.0;
    for (int i = 0; i < steps; ++i) {
        Vec2 a = r(double(i) / steps), b = r(double(i + 1) / steps);
        Vec2 mid = {(a.x + b.x) / 2, (a.y + b.y) / 2};
        Vec2 F = force(mid);                       // force at the middle of the step
        W += F.x * (b.x - a.x) + F.y * (b.y - a.y); // dot product F . dr
    }
    return W;
}

int main() {
    const double pi = std::acos(-1.0);
    auto arc  = [&](double u) { return Vec2{2 * std::cos(u * pi / 2), 2 * std::sin(u * pi / 2)}; };
    auto line = [](double u) { return Vec2{2 - 2 * u, 2 * u}; };
    for (int n : {4, 40, 400})
        std::printf("n = %3d  arc: %.4f J   line: %.4f J\\n", n, workAlong(arc, n), workAlong(line, n));
}`,
          output: `n =   4  arc: 6.1229 J   line: 4.0000 J
n =  40  arc: 6.2816 J   line: 4.0000 J
n = 400  arc: 6.2832 J   line: 4.0000 J`,
          annotations: [
            { lines: 8, text: 'The force field: given a position, return the force there.' },
            { lines: '11-20', text: 'Walk the path in `steps` chords. Each chord contributes $\\vec F \\cdot \\Delta\\vec r$, evaluated with the force at the chord\'s midpoint.' },
            { lines: 18, text: 'The dot product in components: $F_x\\,\\Delta x + F_y\\,\\Delta y$.' },
            { lines: '27-28', text: 'Run both paths with 4, 40 and 400 steps. The arc converges to $2\\pi$; the chord is exact for any $n$ because its integrand is constant.' },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'truefalse',
      prompt: 'The normal force can never do work on an object, because it is always perpendicular to the surface.',
      answer: false,
      explanation: 'The normal force is perpendicular to the *surface*, not necessarily to the *displacement*. When an elevator carries you upward, the floor\'s normal force points up and you move up: it does positive work on you. It does zero work only when the object slides along a stationary surface.',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'concept',
      title: 'Putting it together: every force on a box',
      blocks: [
        {
          type: 'p',
          text: 'A typical problem asks for the work done by each force and the net work. The method: draw the free-body diagram, find each force (using Newton\'s second law perpendicular to the motion where needed), then apply $W = F d\\cos\\theta$ force by force. In this lesson the normal force is written $n$.',
        },
        {
          type: 'figure',
          svg: FIG_INCLINE,
          alt: 'Free-body diagram of a box on a 20 degree incline: pull F up the slope, normal force n perpendicular to the slope, weight mg straight down, friction f down the slope; displacement d = 3.0 m up the slope.',
          caption: 'A $5.0\\,\\text{kg}$ box pulled $3.0\\,\\text{m}$ up a $20^\\circ$ incline by $F = 50\\,\\text{N}$ parallel to the slope; $\\mu_k = 0.20$; $g = 9.80\\,\\text{m/s}^2$.',
          maxWidth: 440,
        },
        {
          type: 'derivation',
          title: 'Work done by each force',
          steps: [
            { tex: 'W_F = (50\\,\\text{N})(3.0\\,\\text{m})\\cos 0^\\circ = 150\\,\\text{J}', why: 'The pull is along the displacement.' },
            { tex: 'W_n = 0', why: 'The normal force is perpendicular to the slope and to the displacement.' },
            { tex: 'W_g = -mg\\sin 20^\\circ\\,d = -(5.0)(9.80)(0.342)(3.0) = -50.3\\,\\text{J}', why: 'The angle between $m\\vec g$ and $\\Delta\\vec r$ is $110^\\circ$, and $\\cos 110^\\circ = -\\sin 20^\\circ$. Equivalently $W_g = -mg\\,\\Delta y$ with $\\Delta y = d\\sin 20^\\circ = 1.03\\,\\text{m}$.' },
            { tex: 'n = mg\\cos 20^\\circ = 46.0\\,\\text{N} \\implies f_k = \\mu_k n = 9.21\\,\\text{N}', why: 'No acceleration perpendicular to the slope, so $n$ balances the perpendicular component of the weight.' },
            { tex: 'W_f = -f_k d = -(9.21)(3.0) = -27.6\\,\\text{J}', why: 'Kinetic friction points down the slope, against the motion ($\\theta = 180^\\circ$).' },
            { tex: 'W_{\\text{net}} = 150 + 0 - 50.3 - 27.6 = 72.1\\,\\text{J}', why: 'Net work is the sum of the individual works.' },
          ],
          result: 'The net work is $+72.1\\,\\text{J}$. In the next lesson you will see that this number is exactly the kinetic energy the box gains.',
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'Instructors check three things: the correct angle for each force (gravity on an incline is the usual trap), the normal force from the perpendicular force balance rather than $n = mg$, and the signs. A table with one row per force (force, angle, work) earns partial credit even when the arithmetic slips.',
        },
      ],
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'numeric',
      prompt: 'A 12.0 kg crate is pulled 4.00 m along a **level** floor by a rope that pulls with 75.0 N at 20.0° above the horizontal. The coefficient of kinetic friction is 0.300. Find the **net** work done on the crate. Use $g = 9.80\\,\\text{m/s}^2$ and give 3 significant figures.',
      hint: 'The rope\'s upward component reduces the normal force: $n = mg - F\\sin 20^\\circ$. Then add $W_{\\text{rope}}$, $W_f$, $W_g = 0$ and $W_n = 0$.',
      answer: '75*4*cos(20*pi/180) - 0.3*(12*9.8 - 75*sin(20*pi/180))*4',
      answerTex: '172\\,\\text{J}',
      tolerance: 1.5,
      label: '$W_{\\text{net}} =$',
      unit: 'J',
      explanation: 'Rope: $W = (75.0)(4.00)\\cos 20.0^\\circ = 281.9\\,\\text{J}$. Vertical balance: $n + F\\sin 20.0^\\circ = mg$, so $n = 117.6 - 25.65 = 91.95\\,\\text{N}$ and $f_k = 0.300 \\times 91.95 = 27.6\\,\\text{N}$, giving $W_f = -110.3\\,\\text{J}$. Gravity and the normal force are perpendicular to the motion. Net: $281.9 - 110.3 \\approx 172\\,\\text{J}$. Using $n = mg$ gives $141\\,\\text{J}$; adding $F\\sin 20^\\circ$ to $mg$ instead of subtracting gives $110\\,\\text{J}$; forgetting friction gives $282\\,\\text{J}$.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'mcq',
      prompt: 'The graph shows the force $F_x$ on an object moving along the $x$-axis. How much work does this force do as the object moves from $x = 0$ to $x = 6\\,\\text{m}$?',
      graph: {
        type: 'graph',
        x: [0, 6.5],
        y: [-12, 12],
        xStep: 1,
        yStep: 2,
        height: 240,
        functions: [
          { expr: '5x', domain: [0, 2], color: 'blue' },
          { expr: '10', domain: [2, 4], color: 'blue' },
          { expr: '10 - 10(x - 4)', domain: [4, 6], color: 'blue' },
        ],
        areas: [
          { expr: '5x', from: 0, to: 2, color: 'blue' },
          { expr: '10', from: 2, to: 4, color: 'blue' },
          { expr: '10 - 10(x - 4)', from: 4, to: 6, color: 'blue' },
        ],
        caption: '$F_x$ in newtons versus $x$ in metres.',
      },
      options: [
        { text: '$30\\,\\text{J}$', correct: true, why: 'Areas: triangle $\\tfrac12(2)(10) = 10$, rectangle $2 \\times 10 = 20$, then $+5$ above the axis from $4$ to $5$ and $-5$ below it from $5$ to $6$. Total $30\\,\\text{J}$.' },
        { text: '$40\\,\\text{J}$', why: 'This counts the triangle below the axis (from $5$ to $6$ m) as positive. There the force points backward while the object moves forward: negative work.' },
        { text: '$60\\,\\text{J}$', why: 'That is $10\\,\\text{N} \\times 6\\,\\text{m}$, as if the force were $10\\,\\text{N}$ the whole way. The force varies, so use the area.' },
        { text: '$35\\,\\text{J}$', why: 'This stops at $x = 5\\,\\text{m}$. The last metre contributes $-5\\,\\text{J}$.' },
      ],
      explanation: 'Work is the signed area under the $F_x$-versus-$x$ graph. Split it into simple shapes: $10 + 20 + 5 - 5 = 30\\,\\text{J}$. Regions below the axis subtract, because there the force opposes the motion.',
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'fill',
      prompt: 'Complete the summary of work.',
      template: 'For a constant force, $W = \\vec F \\cdot \\Delta \\vec r$, a ___ product, so only the force component along the motion counts. For a force that varies with position, $W$ is the signed ___ under the $F_x$-versus-$x$ graph. The work done **by** a spring stretched from its natural length to $x$ is ___.',
      blanks: [{ answers: ['dot'] }, { answers: ['area'] }, { answers: ['$-\\tfrac12 kx^2$'] }],
      wordBank: ['dot', 'cross', 'area', 'slope', '$-\\tfrac12 kx^2$', '$+\\tfrac12 kx^2$', '$-kx^2$'],
      explanation: 'Work uses the dot product (a scalar), never the cross product. With a variable force you integrate, which is the area under the graph. The spring pulls back while you stretch it, so its work is negative: $W_s = \\tfrac12 k(0)^2 - \\tfrac12 kx^2 = -\\tfrac12 kx^2$. The work *you* do is $+\\tfrac12 kx^2$.',
    },
    // ------------------------------------------------------------------ 16
    {
      kind: 'order',
      prompt: 'Put the steps for finding the work done by a variable force in the right order.',
      lines: [
        'Choose the object and a coordinate axis along its motion',
        'Write the force component along the motion as a function of position, $F_x(x)$',
        'Set up $\\int_{x_i}^{x_f} F_x(x)\\,dx$ with the initial position as the lower limit',
        'Find an antiderivative and evaluate it at the limits',
        'Check the sign: is the force mostly with or against the motion?',
      ],
      distractors: ['Multiply the initial force by the distance moved'],
      explanation: 'Set up before you compute: object and axis, then the force as a function of position, then the integral with limits in the order the motion happens (initial to final). Evaluating the antiderivative is the easy part. The final sign check catches most errors. The distractor is $W = Fd$, which only works for a constant force.',
    },
  ],
  takeaways: [
    'Work transfers energy: $W = \\vec F \\cdot \\Delta\\vec r = F\\,\\Delta r\\cos\\theta$ for a constant force. Only the component along the motion counts.',
    'Work is positive when the force has a component along the motion, negative when against it, and zero when perpendicular or when nothing moves.',
    'For a position-dependent force, $W = \\int_{x_i}^{x_f} F_x\\,dx$: the signed area under the $F_x$-versus-$x$ graph.',
    'A spring does $W_s = \\tfrac12 kx_i^2 - \\tfrac12 kx_f^2$; the factor $\\tfrac12$ comes from the force growing linearly.',
    'Along a curved path, $W = \\int_C \\vec F \\cdot d\\vec r$. Gravity\'s work depends only on the change in height; for some forces the path matters.',
    'The net work is the sum of the works done by every force on the object.',
  ],
  reading: [
    {
      title: 'OpenStax University Physics Volume 1 — Chapter 7: Work and Kinetic Energy',
      url: 'https://openstax.org/details/books/university-physics-volume-1',
      source: 'openstax',
      note: 'Section 7.1 covers work by constant and variable forces, springs and line integrals, with many worked examples.',
    },
    {
      title: 'Khan Academy — Physics',
      url: 'https://www.khanacademy.org/science/physics',
      source: 'khan',
      note: 'The "Work and energy" unit has short videos on work as force times displacement and on the area under force graphs.',
    },
    {
      title: 'Wikipedia — Work (physics)',
      url: 'https://en.wikipedia.org/wiki/Work_(physics)',
      source: 'wikipedia',
      note: 'A compact reference for the line-integral definition and the units of work.',
    },
  ],
};
