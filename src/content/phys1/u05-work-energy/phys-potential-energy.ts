import type { Lesson } from '../../types';

const FIG_LOOPS = /*svg:phys-u05/f3.svg*/`<svg viewBox="0 0 520 240" xmlns="http://www.w3.org/2000/svg"><text x="140.0" y="22.0" font-size="14" text-anchor="middle" font-weight="bold">gravity</text><line x1="70.0" y1="159.0" x2="70.0" y2="81.0" stroke="currentColor" class="s-blue" stroke-width="2.5"/><path d="M70.0 71.0 L74.5 81.0 L65.5 81.0 Z" fill="currentColor" class="f-blue"/><line x1="84.0" y1="60.0" x2="186.0" y2="60.0" stroke="currentColor" class="s-blue" stroke-width="2.5"/><path d="M196.0 60.0 L186.0 64.5 L186.0 55.5 Z" fill="currentColor" class="f-blue"/><line x1="210.0" y1="71.0" x2="210.0" y2="149.0" stroke="currentColor" class="s-blue" stroke-width="2.5"/><path d="M210.0 159.0 L205.5 149.0 L214.5 149.0 Z" fill="currentColor" class="f-blue"/><line x1="196.0" y1="170.0" x2="94.0" y2="170.0" stroke="currentColor" class="s-blue" stroke-width="2.5"/><path d="M84.0 170.0 L94.0 165.5 L94.0 174.5 Z" fill="currentColor" class="f-blue"/><circle cx="70" cy="170" r="3.5" fill="currentColor"/><circle cx="70" cy="60" r="3.5" fill="currentColor"/><circle cx="210" cy="60" r="3.5" fill="currentColor"/><circle cx="210" cy="170" r="3.5" fill="currentColor"/><text x="62.0" y="186.0" font-size="13" text-anchor="end">A</text><text x="62.0" y="54.0" font-size="13" text-anchor="end">B</text><text x="218.0" y="54.0" font-size="13" text-anchor="start">C</text><text x="218.0" y="186.0" font-size="13" text-anchor="start">D</text><text x="60.0" y="120.0" font-size="13" text-anchor="end" class="t-blue">−mgh</text><text x="140.0" y="50.0" font-size="13" text-anchor="middle" class="t-blue">0</text><text x="220.0" y="120.0" font-size="13" text-anchor="start" class="t-blue">+mgh</text><text x="140.0" y="190.0" font-size="13" text-anchor="middle" class="t-blue">0</text><text x="140.0" y="226.0" font-size="14" text-anchor="middle" class="t-blue" font-weight="bold">total: 0</text><text x="390.0" y="22.0" font-size="14" text-anchor="middle" font-weight="bold">kinetic friction</text><line x1="320.0" y1="159.0" x2="320.0" y2="81.0" stroke="currentColor" class="s-red" stroke-width="2.5"/><path d="M320.0 71.0 L324.5 81.0 L315.5 81.0 Z" fill="currentColor" class="f-red"/><line x1="334.0" y1="60.0" x2="436.0" y2="60.0" stroke="currentColor" class="s-red" stroke-width="2.5"/><path d="M446.0 60.0 L436.0 64.5 L436.0 55.5 Z" fill="currentColor" class="f-red"/><line x1="460.0" y1="71.0" x2="460.0" y2="149.0" stroke="currentColor" class="s-red" stroke-width="2.5"/><path d="M460.0 159.0 L455.5 149.0 L464.5 149.0 Z" fill="currentColor" class="f-red"/><line x1="446.0" y1="170.0" x2="344.0" y2="170.0" stroke="currentColor" class="s-red" stroke-width="2.5"/><path d="M334.0 170.0 L344.0 165.5 L344.0 174.5 Z" fill="currentColor" class="f-red"/><circle cx="320" cy="170" r="3.5" fill="currentColor"/><circle cx="320" cy="60" r="3.5" fill="currentColor"/><circle cx="460" cy="60" r="3.5" fill="currentColor"/><circle cx="460" cy="170" r="3.5" fill="currentColor"/><text x="312.0" y="186.0" font-size="13" text-anchor="end">A</text><text x="312.0" y="54.0" font-size="13" text-anchor="end">B</text><text x="468.0" y="54.0" font-size="13" text-anchor="start">C</text><text x="468.0" y="186.0" font-size="13" text-anchor="start">D</text><text x="310.0" y="120.0" font-size="13" text-anchor="end" class="t-red">−f d</text><text x="390.0" y="50.0" font-size="13" text-anchor="middle" class="t-red">−f d</text><text x="470.0" y="120.0" font-size="13" text-anchor="start" class="t-red">−f d</text><text x="390.0" y="190.0" font-size="13" text-anchor="middle" class="t-red">−f d</text><text x="390.0" y="226.0" font-size="14" text-anchor="middle" class="t-red" font-weight="bold">total: −4f d</text></svg>`;
const FIG_STABILITY = /*svg:phys-u05/f4.svg*/`<svg viewBox="0 0 530 195" xmlns="http://www.w3.org/2000/svg"><path d="M20 70 Q 95 190 170 70" fill="none" stroke="currentColor" stroke-width="2.5"/><circle cx="95" cy="117" r="12" fill="currentColor" class="f-blue"/><text x="95.0" y="165.0" font-size="14" text-anchor="middle" class="t-green" font-weight="bold">stable</text><text x="95.0" y="184.0" font-size="12" text-anchor="middle">U minimum, U″ > 0</text><path d="M195 150 Q 270 30 345 150" fill="none" stroke="currentColor" stroke-width="2.5"/><circle cx="270" cy="78" r="12" fill="currentColor" class="f-blue"/><text x="270.0" y="165.0" font-size="14" text-anchor="middle" class="t-red" font-weight="bold">unstable</text><text x="270.0" y="184.0" font-size="12" text-anchor="middle">U maximum, U″ < 0</text><line x1="370" y1="120" x2="510" y2="120" stroke="currentColor" stroke-width="2.5"/><circle cx="440" cy="108" r="12" fill="currentColor" class="f-blue"/><text x="440.0" y="165.0" font-size="14" text-anchor="middle" class="t-gray" font-weight="bold">neutral</text><text x="440.0" y="184.0" font-size="12" text-anchor="middle">U flat</text><line x1="110.0" y1="95.0" x2="127.3" y2="90.2" stroke="currentColor" class="s-orange" stroke-width="2"/><path d="M135.0 88.0 L128.3 93.6 L126.3 86.7 Z" fill="currentColor" class="f-orange"/><line x1="285.0" y1="62.0" x2="304.3" y2="67.7" stroke="currentColor" class="s-orange" stroke-width="2"/><path d="M312.0 70.0 L303.3 71.2 L305.4 64.3 Z" fill="currentColor" class="f-orange"/></svg>`;

// Spring oscillator for the animated energy diagram: k = 8 N/m, m = 2 kg, so omega = 2 rad/s.
const XS = 'A*cos(2s)';
const US = `4(${XS})^2`;

// Outer and inner turning points of U = x^4 - 4x^2 at energy E.
const OUTER = 'sqrt(2 + sqrt(4 + E))';
const INNER = 'sqrt(2 - sqrt(4 + E))';

export const lesson: Lesson = {
  id: 'phys-potential-energy',
  title: 'Potential Energy and Conservative Forces',
  summary: 'Some forces store the work they absorb and give it back. Those conservative forces have a potential energy $U$, the force is its downhill slope $F = -dU/dx$, and a graph of $U(x)$ shows where an object can go, where it turns around and where it can rest.',
  minutes: 20,
  objectives: [
    'Define potential energy through $\\Delta U = -W_{\\text{c}}$ and compute $U_g = mgy$ and $U_s = \\tfrac12 kx^2$',
    'Distinguish conservative from nonconservative forces by path independence and by the work done around a closed loop',
    'Find a force from its potential energy with $F_x = -\\dfrac{dU}{dx}$, and a potential energy from its force by integration',
    'Read an energy diagram: allowed regions, turning points where $U = E$, and the kinetic energy $E - U$',
    'Locate equilibrium points and classify them as stable or unstable using $U\'\'(x)$',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Stored work: potential energy',
      blocks: [
        {
          type: 'p',
          text: 'Lift a 15 kg pack slowly from the ground onto a truck bed 1.4 m up. You do $+mgh = 206\\,\\text{J}$ of work on it, and gravity does $-206\\,\\text{J}$. The pack has no extra kinetic energy at the end, yet the energy is not gone: knock the pack off the truck and gravity gives all $206\\,\\text{J}$ back as kinetic energy on the way down. The energy was **stored in the arrangement** of pack and Earth.',
        },
        {
          type: 'definition',
          term: 'Potential energy',
          text: 'For a conservative force (defined on the next card), the change in [[phys-potential-energy|potential energy]] is minus the work that force does:\n\n$$\\Delta U = U_f - U_i = -W_{\\text{c}}.$$\n\nWhen the force does negative work (you lift against gravity, you stretch a spring), $U$ increases: energy is stored. When it does positive work, $U$ decreases and the stored energy is released.',
        },
        {
          type: 'derivation',
          title: 'Gravitational potential energy near Earth',
          steps: [
            { tex: 'W_g = -mg\\,(y_f - y_i)', why: 'Gravity\'s work along any path depends only on the change in height (previous lesson\'s line integral, with $y$ measured upward).' },
            { tex: '\\Delta U_g = -W_g = mg\\,y_f - mg\\,y_i', why: 'Definition of potential energy change.' },
            { tex: 'U_g = mgy \\quad (+\\text{ any constant})', why: 'Any function whose change is $mg\\,\\Delta y$ works. Choosing $U_g = 0$ at $y = 0$ is a free choice of reference level.' },
          ],
          result: 'For the pack: $\\Delta U_g = (15\\,\\text{kg})(9.80\\,\\text{m/s}^2)(1.4\\,\\text{m}) = 206\\,\\text{J}$, whatever you call "zero height".',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why only changes in $U$ matter',
          text: 'Physics only ever uses $\\Delta U$ (or the slope of $U$, as you will see). Adding a constant to $U$ changes neither, so the zero of potential energy is yours to choose: the floor, the tabletop, the bottom of a hill. Choose whatever makes the arithmetic easiest, then **stick with it** for the whole problem.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Whose energy is it?',
          text: 'Strictly, gravitational potential energy belongs to the pack–Earth **system**, not to the pack alone; it is energy of interaction. Saying "the pack\'s potential energy" is a harmless shorthand as long as Earth\'s own motion is negligible, which it always is here.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'mcq',
      prompt: 'A 2.0 kg rock sits on a table. Student A measures heights from the floor; student B measures from the tabletop. The rock then falls from the table to the floor. Which quantity do A and B **agree** on?',
      options: [
        { text: 'The change in the rock\'s gravitational potential energy during the fall', correct: true, why: '$\\Delta U = mg\\,\\Delta y$, and the drop $\\Delta y$ is the same whichever level is called zero.' },
        { text: 'The rock\'s potential energy while it sits on the table', why: 'A says $mgh_{\\text{table}}$, B says $0$. Values of $U$ depend on the reference level.' },
        { text: 'The rock\'s potential energy when it lands on the floor', why: 'A says $0$, B says $-mgh_{\\text{table}}$. Negative potential energy is perfectly fine; it just means below the chosen zero.' },
        { text: 'Nothing: their answers will all differ', why: 'Changes in $U$, the work gravity does and the landing speed are all independent of the reference level.' },
      ],
      explanation: 'The reference level adds the same constant to every value of $U$, so it cancels in every difference. Only $\\Delta U$ has physical consequences (for example, the landing speed), and that is the same for both students.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Conservative and nonconservative forces',
      blocks: [
        {
          type: 'p',
          text: 'Potential energy only makes sense if $U$ has a single value at each position. That requires the work done between two points to be the same along every path; otherwise "the energy stored at B" would depend on how you got there. Forces with this property are called **conservative**.',
        },
        {
          type: 'definition',
          term: 'Conservative force',
          text: 'A force is [[phys-conservative-force|conservative]] if the work it does on an object moving between two points is **independent of the path**. Equivalently, the work it does around **any closed path** is zero. Gravity and ideal spring forces are conservative. Forces for which this fails, such as kinetic friction, air drag, and the push of your muscles, are [[phys-nonconservative-force|nonconservative]].',
        },
        {
          type: 'figure',
          svg: FIG_LOOPS,
          alt: 'Two square loops A to B to C to D and back to A. Gravity loop in a vertical plane: work minus mgh up, zero across, plus mgh down, zero across, total zero. Friction loop on a horizontal floor: minus f d on each of four sides, total minus 4 f d.',
          caption: 'Left: a loop in a vertical plane of height $h$. Gravity takes energy on the way up and returns it on the way down: net zero. Right: a loop of side $d$ on a horizontal floor. Friction always opposes the motion, so every leg costs $f_k d$ and nothing comes back.',
          maxWidth: 480,
        },
        {
          type: 'table',
          headers: ['Force', 'Conservative?', 'Potential energy'],
          rows: [
            ['Gravity near Earth', 'yes', '$U_g = mgy$'],
            ['Ideal spring', 'yes', '$U_s = \\tfrac12 kx^2$'],
            ['Universal gravitation, electric force', 'yes', 'in later units'],
            ['Kinetic friction, air drag', 'no', 'none: work depends on path length'],
            ['Normal force, tension, your push', 'not by nature', 'treated as external work'],
            ['The swirl force $(-y, x)$ from the work lesson', 'no', 'none: $6.28\\,\\text{J}$ vs $4.00\\,\\text{J}$ on two paths'],
          ],
          caption: 'Only conservative forces get a potential energy. The work of every other force is tracked separately.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why a closed loop is the test',
          text: 'If paths 1 and 2 both run from A to B, then going out along 1 and back along 2 reversed is a closed loop with work $W_1 - W_2$. So "zero work around every loop" and "same work along every path" are the same statement. For friction, a round trip on the floor always costs energy, so friction fails the test.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'truefalse',
      prompt: 'A hockey puck slides around a closed loop on the ice and returns to its starting point. The total work done on it by kinetic friction during the loop is zero, because its displacement is zero.',
      answer: false,
      explanation: 'Friction always points opposite to the velocity, so it does negative work on **every** part of the trip: $W_f = -f_k \\times (\\text{path length})$, not $-f_k \\times |\\Delta \\vec r|$. Zero work around a closed loop is precisely the property friction lacks; it is a nonconservative force with no potential energy.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Elastic potential energy',
      blocks: [
        {
          type: 'p',
          text: 'The spring force $F_{s,x} = -kx$ is conservative: its work $W_s = \\tfrac12 kx_i^2 - \\tfrac12 kx_f^2$ depends only on the endpoints. Comparing with $\\Delta U = -W_s$ identifies the stored energy.',
        },
        {
          type: 'theorem',
          name: 'Elastic potential energy of a spring',
          tex: 'U_s = \\tfrac12 k x^2',
          text: 'Here $x$ is the stretch or compression measured from the **natural length**, which is the natural zero of $U_s$. Stretched or compressed by the same amount, the spring stores the same [[phys-elastic-potential-energy|elastic potential energy]].',
        },
        {
          type: 'graph',
          x: [-0.12, 0.12],
          y: [-0.3, 6],
          xStep: 0.02,
          yStep: 1,
          height: 270,
          functions: [{ expr: '0.5k*x^2', label: '$U_s = \\tfrac12 kx^2$ (J)' }],
          tangents: [{ expr: '0.5k*x^2', at: 'p', color: 'orange' }],
          segments: [{ from: ['p', '0.5k*p^2'], to: ['p - 0.001k*p', '0.5k*p^2'], color: 'red', arrow: true, label: 'F' }],
          points: [{ x: 'p', y: '0.5k*p^2', color: 'blue' }],
          sliders: [
            { name: 'k', min: 200, max: 1000, step: 10, value: 800, label: 'spring constant $k$ (N/m)' },
            { name: 'p', min: -0.1, max: 0.1, step: 0.005, value: 0.05, label: 'stretch $x$ (m); negative means compressed' },
          ],
          readouts: [
            { label: '$U_s =$', expr: '0.5k*p^2', digits: 3 },
            { label: 'spring force $F_{s,x} = -kx =$', expr: '-k*p', digits: 1 },
          ],
          caption: 'Horizontal axis: $x$ in metres. The red arrow (scaled) is the spring force on the attached object: it always points toward the bottom of the bowl. The orange tangent\'s slope is $kx$, the negative of the force. That is no accident: see the next card.',
        },
        {
          type: 'derivation',
          title: 'A spring with $k = 800\\,\\text{N/m}$ compressed by $5.0\\,\\text{cm}$',
          steps: [
            { tex: 'x = -0.050\\,\\text{m}', why: 'Convert centimetres to metres. The sign does not matter for $U_s$ because $x$ is squared.' },
            { tex: 'U_s = \\tfrac12 (800\\,\\text{N/m})(0.050\\,\\text{m})^2 = 1.0\\,\\text{J}', why: 'Units: $\\text{N/m} \\cdot \\text{m}^2 = \\text{N}\\cdot\\text{m} = \\text{J}$.' },
          ],
          result: 'Compressing the same spring twice as far ($10\\,\\text{cm}$) stores $4.0\\,\\text{J}$: quadratic, just like $\\tfrac12 mv^2$.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Measure from the natural length',
          text: 'If a spring hangs with a mass on it, its "current length" is not its natural length. $U_s = \\tfrac12 kx^2$ needs $x$ measured from where the spring would sit with nothing attached. Using the wrong origin is the most common spring-energy error.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'numeric',
      prompt: 'A dart gun\'s spring has $k = 320\\,\\text{N/m}$. Loading a dart compresses it by $6.5\\,\\text{cm}$. How much elastic potential energy is stored? Give 3 significant figures.',
      hint: 'Convert to metres first: $x = 0.065\\,\\text{m}$. Then $U_s = \\tfrac12 kx^2$.',
      answer: '0.5*320*0.065^2',
      answerTex: '0.676\\,\\text{J}',
      tolerance: 0.004,
      label: '$U_s =$',
      unit: 'J',
      explanation: '$U_s = \\tfrac12(320\\,\\text{N/m})(0.065\\,\\text{m})^2 = 160 \\times 0.004225 = 0.676\\,\\text{J}$. Dropping the $\\tfrac12$ gives $1.35\\,\\text{J}$; leaving $x$ in centimetres gives $6760$, which is obviously far too large for a toy.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'Force from potential energy: $F = -dU/dx$',
      blocks: [
        {
          type: 'p',
          text: 'So far we went from force to potential energy by integrating. The reverse direction is even more useful: if you know $U(x)$, one derivative gives the force.',
        },
        {
          type: 'derivation',
          title: 'Differentiating the definition',
          steps: [
            { tex: '\\Delta U = -W_{\\text{c}} = -\\int_{x_i}^{x_f} F_x\\,dx', why: 'Definition of $\\Delta U$, with the work written as an integral.' },
            { tex: 'dU = -F_x\\,dx', why: 'For a tiny displacement $dx$ the integral is just $F_x\\,dx$.' },
            { tex: 'F_x = -\\frac{dU}{dx}', why: 'Divide by $dx$. This is the [[derivative]] version of the same statement, the Fundamental Theorem of Calculus run backward.' },
          ],
          result: 'Check: $U_g = mgy$ gives $F_y = -mg$ (down), and $U_s = \\tfrac12 kx^2$ gives $F_x = -kx$ (Hooke\'s law). Both correct.',
        },
        {
          type: 'p',
          text: '**Reading it off a graph:** the force is the *negative slope* of $U(x)$. Where $U$ rises to the right, the force points left; where $U$ falls to the right, it points right. Either way the force pushes the object **downhill on the $U$ graph**, toward lower potential energy, exactly like a ball on a real hillside.',
        },
        {
          type: 'graph',
          x: [-2.5, 2.5],
          y: [-7, 6],
          xStep: 0.5,
          yStep: 1,
          height: 280,
          functions: [{ expr: 'x^4 - 4x^2 + x', label: '$U(x) = x^4 - 4x^2 + x$ (J, $x$ in m)' }],
          tangents: [{ expr: 'x^4 - 4x^2 + x', at: 'a', color: 'orange' }],
          segments: [{ from: ['a', 'a^4 - 4a^2 + a'], to: ['a - 0.06(4a^3 - 8a + 1)', 'a^4 - 4a^2 + a'], color: 'red', arrow: true }],
          points: [{ x: 'a', y: 'a^4 - 4a^2 + a', color: 'blue' }],
          sliders: [{ name: 'a', min: -2.2, max: 2.2, step: 0.01, value: -0.6, label: 'position $x$ (m)', play: true }],
          readouts: [
            { label: '$U =$', expr: 'a^4 - 4a^2 + a', digits: 2 },
            { label: 'slope $dU/dx =$', expr: '4a^3 - 8a + 1', digits: 2 },
            { label: '$F_x = -dU/dx =$', expr: '-(4a^3 - 8a + 1)', digits: 2 },
          ],
          caption: 'The red arrow (scaled) is the force. It always points downhill, vanishes where the tangent is flat, and is largest where $U$ is steepest. Press play to sweep across.',
        },
        {
          type: 'derivation',
          title: 'Force for $U(x) = 3x^2 - x^3$ (J, $x$ in m) at $x = 1\\,\\text{m}$',
          steps: [
            { tex: '\\frac{dU}{dx} = 6x - 3x^2', why: 'Power rule, term by term.' },
            { tex: 'F_x = -\\frac{dU}{dx} = -6x + 3x^2', why: 'Do not forget the minus sign.' },
            { tex: 'F_x(1) = -6 + 3 = -3\\,\\text{N}', why: 'The force points in $-x$: at $x = 1$, $U$ is increasing, so downhill is to the left.' },
          ],
        },
        {
          type: 'deepdive',
          title: 'In three dimensions: the gradient',
          blocks: [
            {
              type: 'p',
              text: 'When $U$ depends on $x$, $y$ and $z$, each force component is minus the rate of change of $U$ in that direction with the others held fixed (a *partial derivative*): $F_x = -\\frac{\\partial U}{\\partial x}$, and so on. Together, $\\vec F = -\\nabla U$, the negative **gradient**. It points in the direction in which $U$ decreases fastest, which is why a ball on a bumpy surface rolls along the steepest way down.',
            },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'expr',
      prompt: 'An object moving along the $x$-axis has potential energy $U(x) = 2x^4 - 8x^2$ (joules, $x$ in metres). Find the force $F_x(x)$.',
      hint: 'Differentiate $U$ and change the sign.',
      answer: '-8x^3 + 16x',
      answerTex: 'F_x(x) = -8x^3 + 16x',
      label: '$F_x(x) =$',
      explanation: '$\\dfrac{dU}{dx} = 8x^3 - 16x$, so $F_x = -\\dfrac{dU}{dx} = -8x^3 + 16x$. Check a point: at $x = 1$, $U$ is decreasing ($dU/dx = -8$), so downhill is to the right and $F_x = +8\\,\\text{N}$, as the formula gives.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'concept',
      title: 'Energy diagrams: where can it go?',
      blocks: [
        {
          type: 'p',
          text: 'If only conservative forces do work, the total mechanical energy $E = K + U$ stays constant (the next lesson proves this). On a graph of $U(x)$, draw $E$ as a horizontal line. At every position the kinetic energy is the gap between them: $K = E - U(x)$.',
        },
        {
          type: 'list',
          items: [
            '**Allowed regions:** since $K \\ge 0$, the object can only be where $U(x) \\le E$, below the energy line.',
            '**[[phys-turning-point|Turning points]]:** where $U(x) = E$, $K = 0$. The object stops momentarily and the force sends it back.',
            '**Speed:** largest where $U$ is lowest, because there the gap $E - U$ is biggest. $v = \\sqrt{2(E - U)/m}$.',
          ],
        },
        {
          type: 'p',
          text: 'Here is the simplest case: a $2.0\\,\\text{kg}$ block on a spring with $k = 8.0\\,\\text{N/m}$, released from rest at $x = A$. Press play and watch the energy slosh between the bars while the total stays put.',
        },
        {
          type: 'graph',
          x: [-1.6, 2.4],
          y: [0, 4.6],
          xStep: 0.5,
          yStep: 1,
          height: 290,
          functions: [{ expr: '4x^2', domain: [-1.07, 1.07], label: '$U = \\tfrac12 kx^2 = 4x^2$' }],
          hlines: [{ y: '4A^2', color: 'gray', label: 'E' }],
          areas: [
            { expr: US, from: 1.55, to: 1.75, color: 'red' },
            { expr: `4A^2 - ${US}`, from: 1.85, to: 2.05, color: 'green' },
            { expr: '4A^2', from: 2.15, to: 2.35, color: 'gray' },
          ],
          segments: [{ from: [XS, US], to: [XS, '4A^2'], color: 'green' }],
          points: [
            { x: XS, y: US, color: 'blue' },
            { x: 'A', y: '4A^2', color: 'purple', label: 'turning point' },
            { x: '-A', y: '4A^2', color: 'purple' },
          ],
          sliders: [
            { name: 'A', min: 0.3, max: 1, step: 0.05, value: 0.9, label: 'release position (amplitude) $A$ (m)' },
            { name: 's', min: 0, max: 6.28, step: 0.01, value: 0.5, label: 'time $t$ (s)', play: true, speed: 1.2 },
          ],
          readouts: [
            { label: '$x =$', expr: XS, digits: 2 },
            { label: '$U =$', expr: US, digits: 2 },
            { label: '$K = E - U =$', expr: `4A^2 - ${US}`, digits: 2 },
            { label: '$E =$', expr: '4A^2', digits: 2 },
          ],
          caption: 'Blue dot: the block\'s position and potential energy. Green line: its kinetic energy, the gap up to $E$. Bars on the right: $U$ (red), $K$ (green), $E$ (gray). The block reverses at the purple turning points $x = \\pm A$, where $K = 0$, and is fastest at $x = 0$.',
        },
        {
          type: 'p',
          text: 'Now a richer landscape, the "double well" $U(x) = x^4 - 4x^2$. Lower the energy line below zero and the particle is trapped in one well, with two turning points; raise it above the central hump and it roams across both wells.',
        },
        {
          type: 'graph',
          x: [-2.6, 2.6],
          y: [-4.5, 6],
          xStep: 0.5,
          yStep: 1,
          height: 280,
          functions: [{ expr: 'x^4 - 4x^2', label: '$U(x) = x^4 - 4x^2$ (J)' }],
          hlines: [{ y: 'E', color: 'red', label: 'E' }],
          areas: [{ expr: 'max(E, x^4 - 4x^2)', expr2: 'x^4 - 4x^2', from: `-${OUTER}`, to: OUTER, color: 'green' }],
          points: [
            { x: OUTER, y: 'E', color: 'purple' },
            { x: `-${OUTER}`, y: 'E', color: 'purple' },
            { x: INNER, y: 'E', color: 'purple' },
            { x: `-${INNER}`, y: 'E', color: 'purple' },
          ],
          sliders: [{ name: 'E', min: -3.9, max: 5, step: 0.05, value: -2, label: 'total energy $E$ (J)' }],
          readouts: [
            { label: 'outer turning points $\\pm\\sqrt{2 + \\sqrt{4 + E}} = \\pm$', expr: OUTER, digits: 3 },
            { label: 'inner turning points (only if $E < 0$) $\\pm$', expr: INNER, digits: 3 },
          ],
          caption: 'Green: the kinetic energy available at each position (only where $U \\le E$). Purple: turning points, from solving $x^4 - 4x^2 = E$ as a quadratic in $x^2$. At $E = -2\\,\\text{J}$ a particle in the right well bounces between $0.765$ and $1.848\\,\\text{m}$.',
        },
        {
          type: 'callout',
          variant: 'analogy',
          title: 'A marble on a track',
          text: 'Picture $U(x)$ as the shape of a frictionless track and $E$ as the height the marble was released from (for gravity, $U = mgy$ makes this literal). The marble can never climb above its release height, it slows on the way up each hill and stops where the track reaches that height. Molecules, planets and pinballs all obey the same picture.',
        },
      ],
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'mcq',
      prompt: 'A particle moves along $x$ with the potential energy shown, $U(x) = x^4 - 4x^2 + x$. It is released from rest at $x = -2.2\\,\\text{m}$, so its total energy is the red line, $E \\approx 1.87\\,\\text{J}$. Only conservative forces act. Where is the particle moving **fastest**?',
      graph: {
        type: 'graph',
        x: [-2.5, 2.5],
        y: [-6.5, 4],
        xStep: 0.5,
        yStep: 1,
        height: 250,
        functions: [{ expr: 'x^4 - 4x^2 + x', label: '$U(x)$ (J)' }],
        hlines: [{ y: 1.8656, color: 'red', label: 'E' }],
        points: [{ x: -2.2, y: 1.8656, color: 'purple', label: 'release' }],
      },
      options: [
        { text: 'Near $x = -1.47\\,\\text{m}$, the bottom of the deep left well', correct: true, why: 'Speed is largest where $K = E - U$ is largest, which is where $U$ is lowest: the global minimum, $U \\approx -5.44\\,\\text{J}$.' },
        { text: 'Near $x = 1.35\\,\\text{m}$, the bottom of the right well', why: 'That is also a local minimum, but a shallower one ($U \\approx -2.62\\,\\text{J}$), so less kinetic energy is available there.' },
        { text: 'Near $x = 0.13\\,\\text{m}$, the top of the hump', why: 'At a local maximum of $U$ the particle is locally *slowest*. It does get over this hump, since $E > U$ there, but slowly.' },
        { text: 'At $x = -2.2\\,\\text{m}$, where it starts', why: 'It is released from rest, so this is a turning point: $K = 0$, speed zero.' },
      ],
      explanation: 'On an energy diagram the kinetic energy is the vertical gap between the $E$ line and the $U$ curve. The gap is biggest at the lowest point of $U$ within the allowed region, the deep well near $x = -1.47\\,\\text{m}$. The particle crosses the hump (where $U \\approx 0.06\\,\\text{J} < E$) and turns around at $x \\approx 1.99\\,\\text{m}$, where $U = E$ again.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'Equilibrium and stability',
      blocks: [
        {
          type: 'p',
          text: 'Where the $U$ graph is flat, $dU/dx = 0$, so the force is zero: an object placed there at rest stays there. These are **equilibrium points**. Whether the equilibrium survives a small nudge depends on the shape of $U$ nearby.',
        },
        {
          type: 'figure',
          svg: FIG_STABILITY,
          alt: 'Three balls: one at the bottom of a valley (stable), one on top of a hill (unstable), one on a flat surface (neutral); small orange arrows show a nudge.',
          caption: 'Nudge each ball to the right. In the valley the force pushes it back; on the hilltop the force pushes it farther away; on the flat it just stays where you put it.',
          maxWidth: 480,
        },
        {
          type: 'list',
          items: [
            '**Stable equilibrium:** a minimum of $U$, so $U\'\'(x_0) > 0$. Displace the object and the force points back toward $x_0$: it oscillates about the minimum. A pendulum hanging straight down; a marble in a bowl.',
            '**Unstable equilibrium:** a maximum of $U$, so $U\'\'(x_0) < 0$. Any nudge grows. A pencil balanced on its tip; a ball on a hilltop.',
            '**Neutral equilibrium:** $U$ is flat over a region. A ball on a level floor.',
          ],
        },
        {
          type: 'derivation',
          title: 'Equilibria of $U(x) = x^4 - 4x^2$',
          steps: [
            { tex: 'U\'(x) = 4x^3 - 8x = 4x(x^2 - 2) = 0', why: 'Equilibrium means zero force, so set the derivative to zero and factor.' },
            { tex: 'x = 0, \\quad x = \\pm\\sqrt2 \\approx \\pm1.414\\,\\text{m}', why: 'Solve each factor.' },
            { tex: 'U\'\'(x) = 12x^2 - 8', why: 'Second derivative, the curvature of the graph.' },
            { tex: 'U\'\'(0) = -8 < 0, \\qquad U\'\'(\\pm\\sqrt2) = 24 - 8 = 16 > 0', why: 'Second-derivative test from Calculus I.' },
          ],
          result: '$x = 0$ is unstable (the top of the hump); $x = \\pm\\sqrt2$ are stable (the bottoms of the wells, where $U = -4\\,\\text{J}$).',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why every stable equilibrium acts like a spring',
          text: 'Near a minimum $x_0$, approximate $U$ by its tangent parabola (the first terms of its Taylor expansion): $U(x) \\approx U(x_0) + U\'(x_0)(x - x_0) + \\tfrac12 U\'\'(x_0)(x - x_0)^2$. At equilibrium $U\'(x_0) = 0$, so $U \\approx U(x_0) + \\tfrac12 k_{\\text{eff}}(x - x_0)^2$ with $k_{\\text{eff}} = U\'\'(x_0)$. Small displacements feel a Hooke\'s-law force $-k_{\\text{eff}}(x - x_0)$. This is why oscillations, the subject of a later unit, are everywhere.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Energy diagrams in code',
          text: 'Given only a function `U(x)`, a program can find the force (a numerical derivative), the equilibria (where the force changes sign) and the turning points for an energy $E$ (where $U - E$ changes sign), using bisection. Game AI and procedural tools use the same "scan for sign changes, then refine" pattern constantly.',
        },
        {
          type: 'code',
          title: 'energy_diagram.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdio>

double U(double x) { return x * x * x * x - 4 * x * x + x; }  // potential energy, J

// Force from potential energy: F = -dU/dx, by a central difference.
double force(double x) {
    const double h = 1e-5;
    return -(U(x + h) - U(x - h)) / (2 * h);
}

// Bisection: a root of g in [a, b], given that g(a) and g(b) differ in sign.
template <class G>
double bisect(G g, double a, double b) {
    for (int i = 0; i < 60; ++i) {
        double m = 0.5 * (a + b);
        if ((g(a) < 0) == (g(m) < 0)) a = m; else b = m;
    }
    return 0.5 * (a + b);
}

int main() {
    const double dx = 0.01;
    std::printf("Equilibria (F = 0):\\n");
    for (double x = -3; x < 3; x += dx) {
        if ((force(x) < 0) != (force(x + dx) < 0)) {
            double x0 = bisect(force, x, x + dx);
            double curv = (U(x0 + 1e-3) - 2 * U(x0) + U(x0 - 1e-3)) / 1e-6;  // U''
            std::printf("  x = %6.3f m  U = %6.3f J  %s\\n", x0, U(x0), curv > 0 ? "stable" : "unstable");
        }
    }
    const double E = 1.0;  // total mechanical energy, J
    auto g = [&](double x) { return U(x) - E; };
    std::printf("Turning points for E = %.1f J (U = E):\\n", E);
    for (double x = -3; x < 3; x += dx)
        if ((g(x) < 0) != (g(x + dx) < 0))
            std::printf("  x = %6.3f m\\n", bisect(g, x, x + dx));
}`,
          output: `Equilibria (F = 0):
  x = -1.473 m  U = -5.444 J  stable
  x =  0.126 m  U =  0.063 J  unstable
  x =  1.347 m  U = -2.619 J  stable
Turning points for E = 1.0 J (U = E):
  x = -2.162 m
  x =  1.937 m`,
          annotations: [
            { lines: 4, text: 'The landscape from the multiple-choice question: $U(x) = x^4 - 4x^2 + x$.' },
            { lines: '7-10', text: 'Central difference: the slope of a short secant centred on $x$, then the minus sign of $F = -dU/dx$.' },
            { lines: '13-20', text: 'Halve the bracketing interval 60 times; the root is then pinned down to machine precision.' },
            { lines: 28, text: 'Second difference $\\frac{U(x+h) - 2U(x) + U(x-h)}{h^2} \\approx U\'\'(x)$ classifies the equilibrium.' },
            { lines: '32-37', text: 'Turning points are the roots of $U(x) - E$.' },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'numeric',
      prompt: 'A simple model of the interaction between two atoms gives $U(x) = \\dfrac{8}{x^2} - \\dfrac{4}{x}$ (joules, $x > 0$ in metres, a scaled-up toy model). At what separation $x$ is the pair in equilibrium?',
      hint: 'Set $\\dfrac{dU}{dx} = -\\dfrac{16}{x^3} + \\dfrac{4}{x^2} = 0$ and solve for $x$.',
      answer: '4',
      answerTex: '4.00\\,\\text{m}',
      tolerance: 0.02,
      label: '$x_0 =$',
      unit: 'm',
      explanation: '$\\dfrac{dU}{dx} = -\\dfrac{16}{x^3} + \\dfrac{4}{x^2} = \\dfrac{4x - 16}{x^3} = 0$ gives $x_0 = 4\\,\\text{m}$. It is stable: $U\'\'(x) = \\dfrac{48}{x^4} - \\dfrac{8}{x^3}$, so $U\'\'(4) = 0.1875 - 0.125 > 0$. At closer range the $8/x^2$ term dominates and the atoms repel; farther out the $-4/x$ term pulls them together. Real molecular bonds have exactly this shape.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'error',
      prompt: 'A student finds the force at $x = 1\\,\\text{m}$ for the potential energy $U(x) = 5x^2 - 2x^3$ (joules, $x$ in metres). Tap the first line that is wrong.',
      lines: [
        '$F_x = -\\dfrac{dU}{dx}$',
        '$\\dfrac{dU}{dx} = 10x - 6x^2$',
        '$F_x = -10x - 6x^2$',
        '$F_x(1) = -10 - 6 = -16\\,\\text{N}$',
      ],
      errorLines: [3],
      explanation: 'Line 3 distributes the minus sign over only the first term. Correctly, $F_x = -(10x - 6x^2) = -10x + 6x^2$, so $F_x(1) = -10 + 6 = -4\\,\\text{N}$. Quick check: at $x = 1$, $dU/dx = 4 > 0$ ($U$ rising to the right), so the force is $-4\\,\\text{N}$, pointing left, downhill.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'order',
      prompt: 'Put the steps for finding and classifying the equilibrium points of a potential energy $U(x)$ in order.',
      lines: [
        'Differentiate to get $dU/dx$',
        'Set $dU/dx = 0$ (zero force) and solve for the positions $x_0$',
        'Compute the second derivative $U\'\'(x)$',
        'Evaluate $U\'\'(x_0)$ at each solution',
        'Call it stable if $U\'\'(x_0) > 0$ and unstable if $U\'\'(x_0) < 0$',
      ],
      distractors: ['Set $U(x) = 0$ and solve for $x$'],
      explanation: 'Equilibrium is about the **force**, $-dU/dx$, being zero, so you set the derivative (not $U$ itself) to zero. The second derivative then tells you whether $U$ curves up (a minimum, stable) or down (a maximum, unstable). The distractor finds where $U$ crosses its arbitrary zero level, which has no physical meaning.',
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'fill',
      prompt: 'Complete the rules for reading an energy diagram.',
      template: 'At each position, the kinetic energy is the vertical gap between the ___ line and the $U(x)$ curve. Turning points are where ___, and a stable equilibrium sits at a ___ of $U$.',
      blanks: [{ answers: ['total energy'] }, { answers: ['$U = E$'] }, { answers: ['minimum'] }],
      wordBank: ['total energy', 'zero', '$U = E$', '$U = 0$', '$F = E$', 'minimum', 'maximum'],
      explanation: '$K = E - U(x)$, so the gap between the total-energy line and the curve is the kinetic energy. It vanishes where $U = E$: the turning points. The force pushes downhill on the $U$ graph, so a minimum is where a displaced object gets pushed back (stable).',
    },
  ],
  takeaways: [
    'A conservative force does path-independent work (zero around every closed loop); only such forces have a potential energy, defined by $\\Delta U = -W_{\\text{c}}$.',
    'Near Earth $U_g = mgy$ and for a spring $U_s = \\tfrac12 kx^2$; the zero of $U$ is a free choice because only changes matter.',
    'Friction and drag are nonconservative: their work depends on the path length and is not stored.',
    'Force is the negative slope of potential energy: $F_x = -dU/dx$, pointing downhill on the $U$ graph.',
    'On an energy diagram, $K = E - U$: motion is allowed where $U \\le E$, turning points are where $U = E$, and the speed is greatest at the lowest $U$.',
    'Equilibria have $dU/dx = 0$: stable at minima ($U\'\' > 0$, behaving like a spring with $k_{\\text{eff}} = U\'\'$), unstable at maxima.',
  ],
  reading: [
    {
      title: 'OpenStax University Physics Volume 1 — Chapter 8: Potential Energy and Conservation of Energy',
      url: 'https://openstax.org/details/books/university-physics-volume-1',
      source: 'openstax',
      note: 'Sections 8.1–8.2 and 8.4 cover potential energy, conservative forces and potential energy diagrams with stability.',
    },
    {
      title: 'PhET Interactive Simulations',
      url: 'https://phet.colorado.edu/',
      source: 'other',
      note: 'The "Energy Skate Park" simulation lets you draw a track and watch kinetic and potential energy bars trade off, an energy diagram you can ride.',
    },
    {
      title: 'Wikipedia — Conservative force',
      url: 'https://en.wikipedia.org/wiki/Conservative_force',
      source: 'wikipedia',
      note: 'The equivalent definitions (path independence, closed loops, gradient of a potential) with examples.',
    },
  ],
};
