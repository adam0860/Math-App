import type { Lesson, Plot3DBlock } from '../../types';

// ── Expression builders for the roller-coaster TNB plot ─────────────────────
// Track: r(s) = <3cos s, 3sin s, 0.8 sin 3s>, a circle with three hills.
type V = [string, string, string];
const cross = (a: V, b: V): V => [
  `(${a[1]})*(${b[2]}) - (${a[2]})*(${b[1]})`,
  `(${a[2]})*(${b[0]}) - (${a[0]})*(${b[2]})`,
  `(${a[0]})*(${b[1]}) - (${a[1]})*(${b[0]})`,
];
const len = (a: V) => `sqrt((${a[0]})^2 + (${a[1]})^2 + (${a[2]})^2)`;
const scale = (a: V, k: string): V => [`(${k})*(${a[0]})`, `(${k})*(${a[1]})`, `(${k})*(${a[2]})`];
const add = (a: V, b: V): V => [`${a[0]} + ${b[0]}`, `${a[1]} + ${b[1]}`, `${a[2]} + ${b[2]}`];

const P: V = ['3cos(s)', '3sin(s)', '0.8sin(3s)'];
const R1: V = ['-3sin(s)', '3cos(s)', '2.4cos(3s)'];
const R2: V = ['-3cos(s)', '-3sin(s)', '-7.2sin(3s)'];
const C = cross(R1, R2);
const Tv = scale(R1, `1/${len(R1)}`);
const Bv = scale(C, `1/${len(C)}`);
const Nv = cross(Bv, Tv);
const kappa = `${len(C)}/(${len(R1)})^3`;
const rho = `(${len(R1)})^3/${len(C)}`;
const L = '1.6';
// Osculating circle: center P + rho N, points center + rho(-cos(t) N + sin(t) T).
const center = add(P, scale(Nv, rho));
const circle = add(center, add(scale(Nv, `-${rho}*cos(t)`), scale(Tv, `${rho}*sin(t)`)));

const coaster: Plot3DBlock = {
  type: 'plot3d',
  x: [-3.6, 3.6],
  y: [-3.6, 3.6],
  z: [-3.4, 2.4],
  equal: true,
  curves: [
    { x: '3cos(t)', y: '3sin(t)', z: '0.8sin(3t)', t: [0, '2pi'], color: 'gray', label: 'track' },
    { x: circle[0], y: circle[1], z: circle[2], t: [0, '2pi'], color: 'purple', dashed: true, label: 'osculating circle' },
  ],
  points: [{ x: P[0], y: P[1], z: P[2], color: 'gray' }],
  vectors: [
    { from: P, to: add(P, scale(Tv, L)), color: 'red', label: 'T' },
    { from: P, to: add(P, scale(Nv, L)), color: 'blue', label: 'N' },
    { from: P, to: add(P, scale(Bv, L)), color: 'green', label: 'B' },
  ],
  sliders: [{ name: 's', min: 0, max: 6.28, step: 0.01, value: 0.4, label: 'position on the track $t$', play: true, speed: 0.6, loop: true }],
  readouts: [
    { label: 'curvature $\\kappa =$', expr: kappa, digits: 3 },
    { label: 'radius $1/\\kappa =$', expr: rho, digits: 3 },
  ],
  view: { azimuth: 40, elevation: 20 },
  caption: 'A coaster track $\\vec r(t) = \\langle 3\\cos t, 3\\sin t, 0.8\\sin 3t \\rangle$ with its TNB frame: $\\vec T$ (red) forward, $\\vec N$ (blue) toward the inside of the turn, $\\vec B$ (green) completing a right-handed frame. Press ▶: on the hilltops and in the dips $\\vec N$ swings up or down and the osculating circle shrinks, because the track bends hardest there.',
};

export const lesson: Lesson = {
  id: 'calc3-arc-length-curvature',
  title: 'Arc Length, Curvature and the TNB Frame',
  summary: 'Measure a space curve, reparametrize it by distance travelled, measure how sharply it bends, and attach the moving T, N, B frame that orients a coaster car or a camera on a rail.',
  minutes: 19,
  objectives: [
    'Compute the length of a space curve with $L = \\int_a^b |\\vec r\\,\'(t)|\\,dt$',
    'Find the arc-length function $s(t)$ and reparametrize a curve by arc length',
    'Compute curvature with $\\kappa = |\\vec T\\,\'|/|\\vec r\\,\'|$ and $\\kappa = |\\vec r\\,\' \\times \\vec r\\,\'\'|/|\\vec r\\,\'|^3$',
    'Find the unit tangent, principal normal and binormal vectors and explain the TNB frame',
    'Explain how games use these frames for cameras and tracks, and where the Frenet frame breaks down',
  ],
  steps: [
    // 1 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'The length of a space curve',
      blocks: [
        {
          type: 'p',
          text: 'In Calculus II you measured a curve by inscribing a polyline and letting the segments shrink, which produced the [[arc-length-integral]]. Exactly the same argument works in space. The only change is that each tiny chord now has three legs, $\\Delta x$, $\\Delta y$, $\\Delta z$, and the distance formula in 3D takes care of them.',
        },
        {
          type: 'derivation',
          title: 'From chords to an integral',
          steps: [
            { tex: '\\Delta s_i = \\sqrt{(\\Delta x_i)^2 + (\\Delta y_i)^2 + (\\Delta z_i)^2}', why: 'The length of one chord, by the 3D distance formula.' },
            { tex: '\\approx \\sqrt{f\'(t_i)^2 + g\'(t_i)^2 + h\'(t_i)^2}\\,\\Delta t', why: 'Over a short parameter step, $\\Delta x_i \\approx f\'(t_i)\\,\\Delta t$ and likewise for $y$ and $z$ (the [[linear-approximation]]); factor $\\Delta t$ out of the root.' },
            { tex: '= |\\vec r\\,\'(t_i)|\\,\\Delta t', why: 'The root is the length of the vector $\\vec r\\,\'(t_i) = \\langle f\', g\', h\' \\rangle$.' },
            { tex: 'L = \\lim_{n \\to \\infty} \\sum_{i=1}^{n} |\\vec r\\,\'(t_i)|\\,\\Delta t = \\int_a^b |\\vec r\\,\'(t)|\\,dt', why: 'Add the chords and take the limit; the sum is a Riemann sum.' },
          ],
          result: 'Length = $\\int$ speed $dt$: the [[calc3-arc-length-space-curve|arc length of a space curve]] is the integral of $|\\vec r\\,\'(t)|$.',
        },
        {
          type: 'theorem',
          name: 'Arc length of a space curve',
          tex: 'L = \\int_a^b |\\vec r\\,\'(t)|\\,dt = \\int_a^b \\sqrt{f\'(t)^2 + g\'(t)^2 + h\'(t)^2}\\,dt',
          text: 'for a smooth curve traced **exactly once** as $t$ increases from $a$ to $b$.',
        },
        {
          type: 'plot3d',
          x: [-2.3, 2.3],
          y: [-2.3, 2.3],
          z: [0, 6.4],
          curves: [
            { x: '2cos(t)', y: '2sin(t)', z: 't', t: [0, '2pi'], color: 'blue', label: 'helix $\\langle 2\\cos t, 2\\sin t, t \\rangle$' },
            {
              x: '2cos(2pi*floor(t*n/(2pi))/n) + (2cos(2pi*(floor(t*n/(2pi)) + 1)/n) - 2cos(2pi*floor(t*n/(2pi))/n))*(t*n/(2pi) - floor(t*n/(2pi)))',
              y: '2sin(2pi*floor(t*n/(2pi))/n) + (2sin(2pi*(floor(t*n/(2pi)) + 1)/n) - 2sin(2pi*floor(t*n/(2pi))/n))*(t*n/(2pi) - floor(t*n/(2pi)))',
              z: 't',
              t: [0, 6.283],
              color: 'red',
              label: 'inscribed polyline',
            },
          ],
          sliders: [{ name: 'n', min: 2, max: 24, step: 1, value: 4, label: 'number of chords $n$' }],
          readouts: [
            { label: 'polyline length $=$', expr: 'n*sqrt(8 - 8cos(2pi/n) + (2pi/n)^2)', digits: 4 },
            { label: '$2\\pi\\sqrt5 =$', expr: '2pi*sqrt(5)', digits: 4 },
          ],
          view: { azimuth: 30, elevation: 15 },
          caption: 'One turn of a helix and an inscribed polyline with $n$ chords. As $n$ grows the polyline hugs the helix and its length climbs toward $2\\pi\\sqrt5 \\approx 14.05$.',
        },
        {
          type: 'derivation',
          title: 'One turn of the helix $\\vec r(t) = \\langle 2\\cos t, 2\\sin t, t \\rangle$',
          steps: [
            { tex: '\\vec r\\,\'(t) = \\langle -2\\sin t,\\ 2\\cos t,\\ 1 \\rangle', why: 'Differentiate each component.' },
            { tex: '|\\vec r\\,\'(t)| = \\sqrt{4\\sin^2 t + 4\\cos^2 t + 1} = \\sqrt5', why: 'Use $\\sin^2 t + \\cos^2 t = 1$. The speed is constant.' },
            { tex: 'L = \\int_0^{2\\pi} \\sqrt5\\,dt = 2\\pi\\sqrt5 \\approx 14.05', why: 'One turn is $0 \\le t \\le 2\\pi$.' },
          ],
          result: 'Check by unrolling the cylinder: one turn becomes the hypotenuse of a right triangle with legs $4\\pi$ (the circumference) and $2\\pi$ (the rise), and $\\sqrt{16\\pi^2 + 4\\pi^2} = 2\\pi\\sqrt5$. ✓',
        },
      ],
    },
    // 2
    {
      kind: 'numeric',
      prompt: 'Find the length of $\\vec r(t) = \\left\\langle 2t,\\ t^2,\\ \\tfrac13 t^3 \\right\\rangle$ for $0 \\le t \\le 3$.',
      hint: '$|\\vec r\\,\'(t)|^2 = 4 + 4t^2 + t^4$ is a perfect square.',
      label: '$L =$',
      answer: '15',
      explanation: '$\\vec r\\,\'(t) = \\langle 2, 2t, t^2 \\rangle$ and $|\\vec r\\,\'(t)| = \\sqrt{t^4 + 4t^2 + 4} = \\sqrt{(t^2 + 2)^2} = t^2 + 2$. So $L = \\int_0^3 (t^2 + 2)\\,dt = \\left[\\tfrac{t^3}{3} + 2t\\right]_0^3 = 9 + 6 = 15$. As in Calculus II, exam problems that come out exactly usually hide a perfect square under the root.',
    },
    // 3 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'The arc-length parameter',
      blocks: [
        {
          type: 'p',
          text: 'Most parametrizations run at varying speed: equal steps in $t$ cover unequal distances. The **arc-length function** measures how far you have travelled along the curve since $t = a$:',
        },
        {
          type: 'math',
          tex: 's(t) = \\int_a^t |\\vec r\\,\'(u)|\\,du, \\qquad \\frac{ds}{dt} = |\\vec r\\,\'(t)|',
          caption: 'The second formula is the Fundamental Theorem of Calculus: distance grows at the rate of the speed.',
        },
        {
          type: 'p',
          text: 'If you can solve $s = s(t)$ for $t$ and substitute, you get the same curve described by distance travelled. This [[arc-length-parametrization]], which you met for plane curves in Calculus II, is the curve\'s "natural" description: it does not depend on how fast anything moves, so geometric quantities like curvature are defined with it.',
        },
        {
          type: 'derivation',
          title: 'Reparametrize the helix $\\vec r(t) = \\langle 2\\cos t, 2\\sin t, t \\rangle$ by arc length from $t = 0$',
          steps: [
            { tex: 's(t) = \\int_0^t \\sqrt5\\,du = \\sqrt5\\,t', why: 'We found $|\\vec r\\,\'| = \\sqrt5$ above.' },
            { tex: 't = \\frac{s}{\\sqrt5}', why: 'Solve for $t$.' },
            { tex: '\\vec r(s) = \\left\\langle 2\\cos\\frac{s}{\\sqrt5},\\ 2\\sin\\frac{s}{\\sqrt5},\\ \\frac{s}{\\sqrt5} \\right\\rangle', why: 'Substitute into $\\vec r$.' },
            { tex: '\\left|\\frac{d\\vec r}{ds}\\right| = \\sqrt{\\tfrac45\\sin^2\\tfrac{s}{\\sqrt5} + \\tfrac45\\cos^2\\tfrac{s}{\\sqrt5} + \\tfrac15} = 1', why: 'Check: by the chain rule each component picks up a factor $\\frac{1}{\\sqrt5}$, and the speed is exactly $1$.' },
          ],
          result: 'An arc-length parametrization always has **unit speed**: $s$ advances one unit of distance per unit of parameter.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Constant-speed motion along a spline',
          text: 'Game paths (Bézier and Catmull-Rom splines) almost never have an exact arc-length parametrization, because $s(t)$ has no closed form. Engines approximate it: sample the curve, store the running chord-length total in a table, and look up the $t$ that matches a desired distance (binary search plus interpolation). That table is a numerical $s(t)$ and its inverse, and it is how a train or a camera dolly moves at a steady speed along a [[bezier-curve]].',
        },
        {
          type: 'callout',
          variant: 'warning',
          text: 'The formula $L = \\int_a^b |\\vec r\\,\'(t)|\\,dt$ counts every pass. The circle $\\langle \\cos t, \\sin t, 0 \\rangle$ on $0 \\le t \\le 4\\pi$ gives $4\\pi$: the length of the *path travelled*, twice the circumference. Make sure the interval traces the curve exactly once if you want the curve\'s length.',
        },
      ],
    },
    // 4
    {
      kind: 'mcq',
      prompt: 'A curve is parametrized by arc length, $\\vec r(s)$. Which statement is always true?',
      options: [
        { text: '$|\\vec r(s)| = 1$ for every $s$', why: 'That would put the curve on the unit sphere. Arc length controls the *speed*, not the distance from the origin.' },
        { text: '$|\\vec r\\,\'(s)| = 1$ for every $s$', correct: true, why: '$\\frac{ds}{ds} = 1 = |\\vec r\\,\'(s)|$: the curve is traced at unit speed.' },
        { text: '$\\vec r\\,\'\'(s) = \\vec 0$ for every $s$', why: 'Constant speed does not mean constant velocity: the direction can still change, as on a circle.' },
        { text: '$\\vec r\\,\'(s) \\cdot \\vec r(s) = 0$ for every $s$', why: 'That holds when $|\\vec r|$ is constant (the point stays on a sphere), not in general.' },
      ],
      explanation: 'The arc-length function satisfies $\\frac{ds}{dt} = |\\vec r\\,\'(t)|$. When the parameter *is* $s$, this reads $1 = |\\vec r\\,\'(s)|$. So $\\vec r\\,\'(s)$ is already the unit tangent vector $\\vec T(s)$, which is what makes the arc-length parametrization so convenient for defining curvature.',
    },
    // 5 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Curvature: how fast the direction turns',
      blocks: [
        {
          type: 'p',
          text: 'A straight road never changes direction; a hairpin bend changes direction fast. To make this precise, follow the unit tangent $\\vec T$ and ask how quickly it turns **per unit of distance travelled**. Using distance (not time) makes the answer a property of the curve alone, the same whether you drive the bend slowly or fast.',
        },
        {
          type: 'definition',
          term: 'Curvature',
          text: 'The [[calc3-curvature|curvature]] of a smooth curve is $\\kappa = \\left|\\dfrac{d\\vec T}{ds}\\right|$, the rate at which the unit tangent vector turns with respect to arc length. Since $\\frac{d\\vec T}{dt} = \\frac{d\\vec T}{ds}\\frac{ds}{dt}$ by the chain rule and $\\frac{ds}{dt} = |\\vec r\\,\'(t)|$, in any parametrization $$\\kappa(t) = \\frac{|\\vec T\\,\'(t)|}{|\\vec r\\,\'(t)|}.$$',
        },
        {
          type: 'derivation',
          title: 'A circle of radius $a$ has curvature $1/a$',
          steps: [
            { tex: '\\vec r(t) = \\langle a\\cos t,\\ a\\sin t,\\ 0 \\rangle, \\quad \\vec r\\,\'(t) = \\langle -a\\sin t,\\ a\\cos t,\\ 0 \\rangle', why: 'Differentiate each component.' },
            { tex: '|\\vec r\\,\'(t)| = a, \\quad \\vec T(t) = \\langle -\\sin t,\\ \\cos t,\\ 0 \\rangle', why: 'Divide by the length $\\sqrt{a^2\\sin^2 t + a^2\\cos^2 t} = a$.' },
            { tex: '\\vec T\\,\'(t) = \\langle -\\cos t,\\ -\\sin t,\\ 0 \\rangle, \\quad |\\vec T\\,\'(t)| = 1', why: 'Differentiate again.' },
            { tex: '\\kappa = \\frac{|\\vec T\\,\'|}{|\\vec r\\,\'|} = \\frac{1}{a}', why: 'Divide by the speed. Forgetting this division would give $\\kappa = 1$ for every circle.' },
          ],
          result: 'Small circles bend sharply (large $\\kappa$); huge circles are nearly straight ($\\kappa \\to 0$). A line has $\\kappa = 0$.',
        },
        {
          type: 'p',
          text: 'This suggests reading curvature as "one over the radius of the best-fitting circle". At each point where $\\kappa > 0$, the **[[calc3-osculating-circle|osculating circle]]** (Latin *osculari*, to kiss) is the circle that touches the curve, shares its tangent, bends toward the same side and has radius $\\rho = 1/\\kappa$. Slide the point along the parabola:',
        },
        {
          type: 'graph',
          x: [-3, 3],
          y: [-0.6, 4],
          equal: true,
          functions: [{ expr: 'x^2', label: '$y = x^2$', color: 'blue' }],
          parametric: [{ x: '-4a^3 + ((1 + 4a^2)^1.5/2)cos(t)', y: '3a^2 + 0.5 + ((1 + 4a^2)^1.5/2)sin(t)', t: [0, '2pi'], color: 'purple', dashed: true, label: 'osculating circle' }],
          points: [
            { x: 'a', y: 'a^2', color: 'red' },
            { x: '-4a^3', y: '3a^2 + 0.5', color: 'purple', label: 'center' },
          ],
          sliders: [{ name: 'a', min: -1.2, max: 1.2, step: 0.02, value: 0.4, label: 'point $x = a$', play: true }],
          readouts: [
            { label: '$\\kappa = \\dfrac{2}{(1 + 4a^2)^{3/2}} =$', expr: '2/(1 + 4a^2)^1.5' },
            { label: 'radius $\\rho = 1/\\kappa =$', expr: '(1 + 4a^2)^1.5/2' },
          ],
          caption: 'At the vertex the parabola bends hardest: $\\kappa = 2$, so the kissing circle has radius $\\frac12$. Moving out along the arms, the curve straightens, $\\kappa$ falls and the circle balloons.',
        },
        {
          type: 'callout',
          variant: 'analogy',
          text: 'Curvature is how hard you must turn the steering wheel to stay on the road. A wheel angle fixes the radius of the circle the car drives on, whatever its speed. That is why road and track designers specify curvature, and why a sudden jump in curvature (a straight joined directly to a tight arc) feels like a jerk: the wheel would have to snap instantly.',
        },
      ],
    },
    // 6 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'A formula you can actually use',
      blocks: [
        {
          type: 'p',
          text: 'Computing $\\vec T\\,\'$ means differentiating a quotient with a square root in it, which gets messy fast. The [[cross-product]] gives a shortcut that needs only $\\vec r\\,\'$ and $\\vec r\\,\'\'$.',
        },
        {
          type: 'derivation',
          title: 'Deriving $\\kappa = |\\vec r\\,\' \\times \\vec r\\,\'\'| / |\\vec r\\,\'|^3$',
          steps: [
            { tex: '\\vec r\\,\' = |\\vec r\\,\'|\\,\\vec T', why: 'The definition of $\\vec T$, rearranged. Write $v = |\\vec r\\,\'|$ for the speed.' },
            { tex: '\\vec r\\,\'\' = v\'\\,\\vec T + v\\,\\vec T\\,\'', why: 'Differentiate with the product rule for a scalar times a vector.' },
            { tex: '\\vec r\\,\' \\times \\vec r\\,\'\' = v v\'\\,(\\vec T \\times \\vec T) + v^2\\,(\\vec T \\times \\vec T\\,\')', why: 'Cross $v\\vec T$ with each term.' },
            { tex: '= v^2\\,(\\vec T \\times \\vec T\\,\')', why: 'Any vector crossed with itself is $\\vec 0$.' },
            { tex: '|\\vec r\\,\' \\times \\vec r\\,\'\'| = v^2\\,|\\vec T|\\,|\\vec T\\,\'|\\sin 90^\\circ = v^2 |\\vec T\\,\'|', why: '$|\\vec T| = 1$ is constant, so $\\vec T \\perp \\vec T\\,\'$ (the constant-length fact from the last lesson).' },
            { tex: '\\kappa = \\frac{|\\vec T\\,\'|}{v} = \\frac{|\\vec r\\,\' \\times \\vec r\\,\'\'|}{v^3}', why: 'Solve for $|\\vec T\\,\'|$ and divide by $v$.' },
          ],
        },
        {
          type: 'theorem',
          name: 'Curvature formulas',
          tex: '\\kappa = \\frac{|\\vec r\\,\'(t) \\times \\vec r\\,\'\'(t)|}{|\\vec r\\,\'(t)|^3}, \\qquad \\kappa = \\frac{|f\'\'(x)|}{\\left(1 + f\'(x)^2\\right)^{3/2}} \\ \\text{ for } y = f(x)',
          text: 'The plane-curve version comes from $\\vec r(x) = \\langle x, f(x), 0 \\rangle$: then $\\vec r\\,\' = \\langle 1, f\', 0 \\rangle$, $\\vec r\\,\'\' = \\langle 0, f\'\', 0 \\rangle$ and $\\vec r\\,\' \\times \\vec r\\,\'\' = \\langle 0, 0, f\'\' \\rangle$.',
        },
        {
          type: 'derivation',
          title: 'The twisted cubic $\\vec r(t) = \\langle t, t^2, t^3 \\rangle$ at $t = 0$, and the helix',
          steps: [
            { tex: '\\vec r\\,\'(t) = \\langle 1, 2t, 3t^2 \\rangle, \\quad \\vec r\\,\'\'(t) = \\langle 0, 2, 6t \\rangle', why: 'Differentiate twice.' },
            { tex: '\\vec r\\,\'(0) \\times \\vec r\\,\'\'(0) = \\langle 1, 0, 0 \\rangle \\times \\langle 0, 2, 0 \\rangle = \\langle 0, 0, 2 \\rangle', why: '$\\mathbf{i} \\times 2\\mathbf{j} = 2\\mathbf{k}$.' },
            { tex: '\\kappa(0) = \\frac{2}{1^3} = 2', why: 'Apply the formula: $|\\langle 0,0,2 \\rangle| = 2$ and $|\\vec r\\,\'(0)| = 1$.' },
            { tex: '\\text{helix } \\langle a\\cos t, a\\sin t, bt \\rangle: \\ \\vec r\\,\' \\times \\vec r\\,\'\' = \\langle ab\\sin t, -ab\\cos t, a^2 \\rangle', why: 'With $\\vec r\\,\' = \\langle -a\\sin t, a\\cos t, b \\rangle$ and $\\vec r\\,\'\' = \\langle -a\\cos t, -a\\sin t, 0 \\rangle$.' },
            { tex: '\\kappa = \\frac{a\\sqrt{a^2 + b^2}}{(a^2 + b^2)^{3/2}} = \\frac{a}{a^2 + b^2}', why: 'The cross product has length $\\sqrt{a^2b^2 + a^4} = a\\sqrt{a^2 + b^2}$.' },
          ],
          result: 'The helix $\\langle 2\\cos t, 2\\sin t, t \\rangle$ has constant curvature $\\frac{2}{4 + 1} = \\frac25$: less than the $\\frac12$ of its shadow circle, because the climb straightens it out.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the cross product sees bending',
          text: 'The acceleration $\\vec r\\,\'\'$ mixes two effects: speeding up along the path (a multiple of $\\vec T$) and turning (a multiple of $\\vec T\\,\'$). Crossing with $\\vec r\\,\'$, which points along $\\vec T$, wipes out the first effect and keeps only the second. That is why the formula needs no knowledge of how the speed varies: a car that brakes on a straight road has $\\vec r\\,\' \\times \\vec r\\,\'\' = \\vec 0$ and correctly gets $\\kappa = 0$.',
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'Expect "find the curvature at a point": the cross-product formula is almost always the fastest route. Plug in the value of $t$ **before** taking the cross product and the lengths, so you work with numbers rather than expressions.',
        },
      ],
    },
    // 7
    {
      kind: 'numeric',
      prompt: 'Find the curvature of the twisted cubic $\\vec r(t) = \\langle t, t^2, t^3 \\rangle$ at $t = 1$. Give a decimal to 3 places or an exact value.',
      hint: '$\\vec r\\,\'(1) = \\langle 1, 2, 3 \\rangle$ and $\\vec r\\,\'\'(1) = \\langle 0, 2, 6 \\rangle$.',
      label: '$\\kappa(1) =$',
      answer: 'sqrt(19)/(7*sqrt(14))',
      answerTex: '\\frac{2\\sqrt{19}}{14\\sqrt{14}} = \\frac{\\sqrt{19}}{7\\sqrt{14}} \\approx 0.166',
      tolerance: 0.001,
      explanation: '$\\langle 1, 2, 3 \\rangle \\times \\langle 0, 2, 6 \\rangle = \\langle 2\\cdot 6 - 3\\cdot 2,\\ 3\\cdot 0 - 1\\cdot 6,\\ 1\\cdot 2 - 2\\cdot 0 \\rangle = \\langle 6, -6, 2 \\rangle$, with length $\\sqrt{76} = 2\\sqrt{19}$. And $|\\vec r\\,\'(1)|^3 = (\\sqrt{14})^3 = 14\\sqrt{14}$. So $\\kappa(1) = \\frac{2\\sqrt{19}}{14\\sqrt{14}} \\approx 0.166$: much gentler than the $\\kappa = 2$ at $t = 0$.',
    },
    // 8
    {
      kind: 'error',
      prompt: 'A student computes the curvature of the circle $\\vec r(t) = \\langle 3\\cos t, 3\\sin t, 0 \\rangle$. Tap the first wrong line.',
      lines: [
        '$\\vec r\\,\'(t) = \\langle -3\\sin t, 3\\cos t, 0 \\rangle$, so $|\\vec r\\,\'(t)| = 3$',
        '$\\vec T(t) = \\langle -\\sin t, \\cos t, 0 \\rangle$',
        '$\\vec T\\,\'(t) = \\langle -\\cos t, -\\sin t, 0 \\rangle$, so $|\\vec T\\,\'(t)| = 1$',
        '$\\kappa = |\\vec T\\,\'(t)| = 1$',
      ],
      errorLines: [4],
      explanation: 'Curvature is $|d\\vec T/ds|$, the turning per unit **distance**, and $|\\vec T\\,\'(t)|$ is the turning per unit of $t$. Divide by the speed: $\\kappa = \\frac{|\\vec T\\,\'(t)|}{|\\vec r\\,\'(t)|} = \\frac13$. That matches $\\kappa = 1/a$ for a circle of radius $a = 3$. A curvature of $1$ for every circle would be a red flag.',
    },
    // 9 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'The normal, the binormal and the TNB frame',
      blocks: [
        {
          type: 'p',
          text: '$\\vec T$ tells you which way the curve is heading. Because $|\\vec T| = 1$, its derivative $\\vec T\\,\'$ is perpendicular to it, and it points the way $\\vec T$ is turning: toward the inside of the bend. Normalize it, then complete the set with a cross product:',
        },
        {
          type: 'math',
          tex: '\\vec T = \\frac{\\vec r\\,\'}{|\\vec r\\,\'|}, \\qquad \\vec N = \\frac{\\vec T\\,\'}{|\\vec T\\,\'|}, \\qquad \\vec B = \\vec T \\times \\vec N',
          caption: '$\\vec N$ is the **principal unit normal** (defined where $\\kappa \\ne 0$) and $\\vec B$ is the **binormal**.',
        },
        {
          type: 'p',
          text: 'The three are mutually [[orthogonal]] unit vectors, a right-handed [[orthonormal-basis]] that rides along the curve: the **[[calc3-tnb-frame|TNB frame]]** (or Frenet frame). $\\vec T$ and $\\vec N$ span the **osculating plane**, the plane the curve is bending in at that moment and the plane of the osculating circle. $\\vec B$ is perpendicular to it. Press ▶ and ride the coaster:',
        },
        coaster,
        {
          type: 'derivation',
          title: 'The TNB frame of the helix $\\vec r(t) = \\langle 2\\cos t, 2\\sin t, t \\rangle$',
          steps: [
            { tex: '\\vec T = \\tfrac{1}{\\sqrt5}\\langle -2\\sin t,\\ 2\\cos t,\\ 1 \\rangle', why: '$\\vec r\\,\' = \\langle -2\\sin t, 2\\cos t, 1 \\rangle$ has constant length $\\sqrt5$.' },
            { tex: '\\vec T\\,\' = \\tfrac{1}{\\sqrt5}\\langle -2\\cos t,\\ -2\\sin t,\\ 0 \\rangle, \\quad |\\vec T\\,\'| = \\tfrac{2}{\\sqrt5}', why: 'Differentiate; the constant $\\frac{1}{\\sqrt5}$ comes along.' },
            { tex: '\\vec N = \\langle -\\cos t,\\ -\\sin t,\\ 0 \\rangle', why: 'Divide by the length. $\\vec N$ is horizontal and points straight at the axis of the helix.' },
            { tex: '\\vec B = \\vec T \\times \\vec N = \\tfrac{1}{\\sqrt5}\\langle \\sin t,\\ -\\cos t,\\ 2 \\rangle', why: 'First component: $(2\\cos t)(0) - (1)(-\\sin t) = \\sin t$; second: $(1)(-\\cos t) - (-2\\sin t)(0) = -\\cos t$; third: $(-2\\sin t)(-\\sin t) - (2\\cos t)(-\\cos t) = 2$.' },
            { tex: '\\kappa = \\frac{|\\vec T\\,\'|}{|\\vec r\\,\'|} = \\frac{2/\\sqrt5}{\\sqrt5} = \\frac25', why: 'Matches $\\frac{a}{a^2 + b^2}$ with $a = 2$, $b = 1$.' },
          ],
          result: 'Check orthogonality: $\\vec T \\cdot \\vec N = \\frac{1}{\\sqrt5}(2\\sin t\\cos t - 2\\cos t\\sin t + 0) = 0$ ✓, and $\\vec T \\cdot \\vec B = \\frac15(-2\\sin^2 t - 2\\cos^2 t + 2) = 0$ ✓.',
        },
        {
          type: 'deepdive',
          title: 'Torsion and the Frenet–Serret formulas',
          blocks: [
            {
              type: 'p',
              text: 'Curvature measures how fast $\\vec T$ turns. The **[[calc3-torsion|torsion]]** $\\tau$ measures how fast the osculating plane twists, through the turning of $\\vec B$: $\\frac{d\\vec B}{ds} = -\\tau\\vec N$. Together with $\\frac{d\\vec T}{ds} = \\kappa\\vec N$ and $\\frac{d\\vec N}{ds} = -\\kappa\\vec T + \\tau\\vec B$, these are the Frenet–Serret formulas: the derivative of the frame is expressed in the frame itself.',
            },
            {
              type: 'p',
              text: 'A plane curve has $\\tau = 0$ ($\\vec B$ is constant). The helix $\\langle a\\cos t, a\\sin t, bt \\rangle$ has constant $\\tau = \\frac{b}{a^2 + b^2}$. A remarkable theorem says that $\\kappa(s)$ and $\\tau(s)$ determine the curve completely, up to where you place it and how you rotate it.',
            },
          ],
        },
      ],
    },
    // 10
    {
      kind: 'fill',
      prompt: 'Complete the definition of the binormal vector so that $\\vec T$, $\\vec N$, $\\vec B$ form a right-handed frame.',
      template: '$\\vec B =$ ___ $\\times$ ___',
      blanks: [{ answers: ['$\\vec T$'] }, { answers: ['$\\vec N$'] }],
      wordBank: ['$\\vec T$', '$\\vec N$', '$\\vec B$', '$\\vec r\\,\'\'$'],
      explanation: '$\\vec B = \\vec T \\times \\vec N$, in that order. Swapping to $\\vec N \\times \\vec T$ would give $-\\vec B$ and a left-handed frame. Both factors are unit vectors at right angles, so $|\\vec B| = 1 \\cdot 1 \\cdot \\sin 90^\\circ = 1$ with no normalizing needed.',
    },
    // 11 ────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Frames for cameras, coasters and tracks',
      blocks: [
        {
          type: 'p',
          text: 'A camera on a rail, a coaster car or a racing drone needs more than a position: it needs an **orientation**, three axes saying forward, up and right. The TNB frame is the textbook answer: forward $= \\vec T$, with $\\vec N$ and $\\vec B$ giving the other two axes. Feed them into the columns of a rotation matrix and the object banks into each turn automatically.',
        },
        {
          type: 'code',
          title: 'frenet.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdio>

struct Vec3 { double x, y, z; };
Vec3 operator+(Vec3 a, Vec3 b) { return {a.x + b.x, a.y + b.y, a.z + b.z}; }
Vec3 operator-(Vec3 a, Vec3 b) { return {a.x - b.x, a.y - b.y, a.z - b.z}; }
Vec3 operator*(double s, Vec3 v) { return {s * v.x, s * v.y, s * v.z}; }
Vec3 cross(Vec3 a, Vec3 b) {
    return {a.y * b.z - a.z * b.y, a.z * b.x - a.x * b.z, a.x * b.y - a.y * b.x};
}
double length(Vec3 v) { return std::sqrt(v.x * v.x + v.y * v.y + v.z * v.z); }
double show(double v) { return std::fabs(v) < 5e-5 ? 0.0 : v; }  // no "-0.0000"

Vec3 track(double t) { return {2 * std::cos(t), 2 * std::sin(t), t}; }  // helix

int main() {
    const double t = 1.0, h = 1e-3;
    Vec3 d1 = (1 / (2 * h)) * (track(t + h) - track(t - h));               // r'
    Vec3 d2 = (1 / (h * h)) * (track(t + h) - 2 * track(t) + track(t - h)); // r''
    Vec3 c = cross(d1, d2);
    Vec3 T = (1 / length(d1)) * d1;
    Vec3 B = (1 / length(c)) * c;
    Vec3 N = cross(B, T);
    double kappa = length(c) / std::pow(length(d1), 3);
    std::printf("T = (%.4f, %.4f, %.4f)\\n", T.x, T.y, T.z);
    std::printf("N = (%.4f, %.4f, %.4f)\\n", N.x, N.y, show(N.z));
    std::printf("B = (%.4f, %.4f, %.4f)\\n", B.x, B.y, B.z);
    std::printf("kappa = %.4f (exact 0.4000)\\n", kappa);
}`,
          output: `T = (-0.7526, 0.4833, 0.4472)
N = (-0.5403, -0.8415, 0.0000)
B = (0.3763, -0.2416, 0.8944)
kappa = 0.4000 (exact 0.4000)`,
          annotations: [
            { lines: 14, text: 'Any path works here: a spline segment, a recorded flight path. Only positions are needed.' },
            { lines: '18-19', text: 'Central differences for $\\vec r\\,\'$ and $\\vec r\\,\'\'$. The second difference divides by $h^2$, so $h$ cannot be tiny without rounding error taking over.' },
            { lines: '20-23', text: 'Computing $\\vec B$ first from $\\vec r\\,\' \\times \\vec r\\,\'\'$ (which points along $\\vec T \\times \\vec N$, as the curvature derivation showed) avoids differentiating $\\vec T$ numerically. Then $\\vec N = \\vec B \\times \\vec T$.' },
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Where the Frenet frame fails',
          text: 'On a **straight** section $\\vec T\\,\' = \\vec 0$, so $\\vec N$ is undefined and the code above divides by zero. Near an **inflection** (where the bend switches sides, like an S-curve) $\\vec N$ flips abruptly to the other side, and a camera using it would spin $180^\\circ$ about its forward axis. Production engines therefore use a **rotation-minimizing (parallel-transport) frame**: start with any up vector, and at each sample rotate the previous frame by the smallest rotation that carries the old $\\vec T$ to the new one. The Frenet frame remains the right tool for analysis (curvature, banking angle), just not as a raw camera orientation.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Banking a track',
          text: 'Physics I says a car taking a turn of radius $\\rho$ at speed $v$ needs a sideways (centripetal) acceleration $v^2/\\rho = \\kappa v^2$. Track designers bank the rails so that the normal force supplies it. Curvature is therefore what tells a coaster designer or a racing game how steeply to tilt each piece of track.',
        },
      ],
    },
    // 12
    {
      kind: 'mcq',
      prompt: 'A game camera follows a rail and uses the Frenet frame for its orientation. On a perfectly straight stretch of rail, what goes wrong?',
      options: [
        { text: '$\\vec T$ is undefined, so the camera does not know which way is forward', why: '$\\vec T = \\vec r\\,\'/|\\vec r\\,\'|$ is fine on a straight smooth section: it points along the rail.' },
        { text: '$\\vec N$ is undefined because $\\vec T\\,\' = \\vec 0$, so "up" and "right" are undetermined', correct: true, why: 'With zero curvature there is no bend to point toward; $\\vec T\\,\'/|\\vec T\\,\'|$ is $\\vec 0/0$.' },
        { text: 'The curvature becomes infinite', why: 'A straight line has curvature $0$, not infinity.' },
        { text: 'Nothing: the Frenet frame is defined everywhere on a smooth curve', why: 'Smoothness guarantees $\\vec T$, but $\\vec N$ also needs $\\kappa \\ne 0$.' },
      ],
      explanation: 'The principal normal is $\\vec T\\,\'/|\\vec T\\,\'|$, and on a straight section $\\vec T$ is constant, so $\\vec T\\,\' = \\vec 0$. The forward axis survives, but the frame cannot decide how to roll. That is one reason engines use rotation-minimizing frames for cameras.',
    },
    // 13
    {
      kind: 'expr',
      prompt: 'Use the plane-curve formula to find the curvature of $y = \\ln x$ as a function of $x$ (for $x > 0$).',
      hint: '$f\'(x) = \\frac1x$ and $f\'\'(x) = -\\frac{1}{x^2}$. Simplify by multiplying top and bottom by $x^3$.',
      label: '$\\kappa(x) =$',
      variables: ['x'],
      domain: [0.3, 3],
      answer: 'x/(x^2 + 1)^(3/2)',
      answerTex: '\\frac{x}{(x^2 + 1)^{3/2}}',
      explanation: '$\\kappa = \\frac{|-1/x^2|}{(1 + 1/x^2)^{3/2}} = \\frac{1/x^2}{(x^2 + 1)^{3/2}/x^3} = \\frac{x}{(x^2 + 1)^{3/2}}$, using $(1 + 1/x^2)^{3/2} = \\left(\\frac{x^2 + 1}{x^2}\\right)^{3/2} = \\frac{(x^2 + 1)^{3/2}}{x^3}$ for $x > 0$. It is largest where $\\kappa\'(x) = 0$, at $x = \\frac{1}{\\sqrt2}$, and tends to $0$ as $x \\to \\infty$: the log curve flattens out.',
    },
    // 14
    {
      kind: 'order',
      prompt: 'Put the steps for finding the TNB frame of a curve $\\vec r(t)$ in order.',
      lines: [
        'Differentiate to get $\\vec r\\,\'(t)$ and its length $|\\vec r\\,\'(t)|$',
        'Divide: $\\vec T = \\vec r\\,\'/|\\vec r\\,\'|$',
        'Differentiate $\\vec T$ to get $\\vec T\\,\'(t)$',
        'Normalize: $\\vec N = \\vec T\\,\'/|\\vec T\\,\'|$',
        'Take the cross product $\\vec B = \\vec T \\times \\vec N$',
      ],
      distractors: ['Normalize $\\vec r\\,\'\'$ to get $\\vec N$'],
      explanation: 'Each vector is built from the previous one: $\\vec T$ from $\\vec r\\,\'$, $\\vec N$ from the derivative of $\\vec T$, and $\\vec B$ from both. The distractor is a common mistake: $\\vec r\\,\'\'$ points along $\\vec N$ only when the speed is constant. In general $\\vec r\\,\'\' = v\'\\vec T + \\kappa v^2\\vec N$ also has a component along $\\vec T$.',
    },
    // 15
    {
      kind: 'truefalse',
      prompt: 'A space curve with the same positive curvature at every point must be a circle.',
      answer: false,
      explanation: 'The helix $\\langle a\\cos t, a\\sin t, bt \\rangle$ has constant curvature $\\frac{a}{a^2 + b^2}$ but is not a circle: it also has constant nonzero *torsion*, which lifts it out of a plane. For **plane** curves the statement is true (constant $\\kappa > 0$ forces a circle or an arc of one), which is why the helix surprises people.',
    },
  ],
  takeaways: [
    'Arc length in space: $L = \\int_a^b |\\vec r\\,\'(t)|\\,dt$, the integral of speed over a once-traced interval.',
    'The arc-length function $s(t) = \\int_a^t |\\vec r\\,\'(u)|\\,du$ reparametrizes a curve at unit speed; games approximate it with lookup tables.',
    'Curvature $\\kappa = |d\\vec T/ds| = |\\vec T\\,\'|/|\\vec r\\,\'| = |\\vec r\\,\' \\times \\vec r\\,\'\'|/|\\vec r\\,\'|^3$; a circle of radius $a$ has $\\kappa = 1/a$, and $1/\\kappa$ is the radius of the osculating circle.',
    'The TNB frame $\\vec T = \\vec r\\,\'/|\\vec r\\,\'|$, $\\vec N = \\vec T\\,\'/|\\vec T\\,\'|$, $\\vec B = \\vec T \\times \\vec N$ is a moving right-handed orthonormal frame.',
    'The Frenet frame fails where $\\kappa = 0$ and flips at inflections, so camera and track systems use rotation-minimizing frames.',
  ],
  reading: [
    {
      title: 'OpenStax Calculus Volume 3, Chapter 3: Vector-Valued Functions',
      url: 'https://openstax.org/details/books/calculus-volume-3',
      source: 'openstax',
      note: 'Section 3.3 develops arc length, curvature, the normal and binormal vectors and the osculating circle.',
    },
    {
      title: 'Wikipedia: Frenet–Serret formulas',
      url: 'https://en.wikipedia.org/wiki/Frenet%E2%80%93Serret_formulas',
      source: 'wikipedia',
      note: 'The full theory of the TNB frame, torsion, and animations of the frame moving along curves.',
    },
    {
      title: 'Wikipedia: Curvature',
      url: 'https://en.wikipedia.org/wiki/Curvature',
      source: 'wikipedia',
      note: 'Curvature of curves and its generalizations to surfaces, with the osculating circle explained visually.',
    },
  ],
};
