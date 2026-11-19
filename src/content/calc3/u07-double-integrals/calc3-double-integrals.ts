import type { Lesson, Plot3DBlock } from '../../types';

// f(x, y) = 16 - x^2 - 2y^2 on R = [0, 2] x [0, 2]. Exact volume 48.
// Midpoint Riemann boxes with an n x n grid: the box over cell (i, j) has height
// f(center). `mid(v)` is the center of the cell that contains v (clamped at v = 2).
const mid = (v: string) => `((min(floor(${v}*n/2), n - 1) + 0.5)*2/n)`;
const boxTop = `16 - ${mid('x')}^2 - 2*${mid('y')}^2`;
const wireframe: NonNullable<Plot3DBlock['curves']> = [
  ...[0, 0.5, 1, 1.5, 2].map((c) => ({ x: `${c}`, y: 't', z: `16 - ${c * c} - 2t^2`, t: [0, 2] as [number, number], color: 'red' as const })),
  ...[0, 0.5, 1, 1.5, 2].map((c) => ({ x: 't', y: `${c}`, z: `16 - t^2 - ${2 * c * c}`, t: [0, 2] as [number, number], color: 'red' as const })),
];
wireframe[0] = { ...wireframe[0], label: 'the surface $z = 16 - x^2 - 2y^2$' };

const surfaceF = '16 - x^2 - 2y^2';

export const lesson: Lesson = {
  id: 'calc3-double-integrals',
  title: 'Double Integrals over Rectangles',
  summary: 'Volume under a surface by stacking boxes, then by slicing: double Riemann sums, iterated integrals, Fubini\'s theorem and the average value of a function of two variables.',
  minutes: 18,
  objectives: [
    'Approximate the volume under $z = f(x, y)$ over a rectangle with a double Riemann sum, and explain why the midpoint rule converges',
    'Define the double integral $\\iint_R f\\,dA$ as a limit and interpret it as signed volume',
    'Evaluate iterated integrals by partial integration, holding one variable fixed',
    'Use Fubini\'s theorem to choose the easier order of integration, and recognise when it can fail',
    'Compute the average value of $f(x, y)$ over a rectangle',
  ],
  steps: [
    // 1 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Volume under a surface: stacking boxes',
      blocks: [
        {
          type: 'p',
          text: 'In Calculus I you found the area under $y = f(x)$ by covering it with thin rectangles and taking a limit: a [[riemann-sum]] that became a [[definite-integral]]. Now go up one dimension. Take a function $f(x, y) \\ge 0$ defined on a rectangle $R = [a, b] \\times [c, d]$ in the $xy$-plane. Its graph $z = f(x, y)$ is a surface, and the solid between that surface and $R$ has some volume $V$. How do you compute it?',
        },
        {
          type: 'p',
          text: 'Same plan, with boxes instead of rectangles. Cut $[a, b]$ into $m$ pieces of width $\\Delta x$ and $[c, d]$ into $n$ pieces of width $\\Delta y$. That chops $R$ into $mn$ small subrectangles $R_{ij}$, each of area $\\Delta A = \\Delta x\\,\\Delta y$. Over each one, stand a box whose height is the value of $f$ at a sample point $(x_{ij}^*, y_{ij}^*)$ in $R_{ij}$.',
        },
        {
          type: 'definition',
          term: '[[calc3-double-riemann-sum|Double Riemann sum]]',
          text: '$\\displaystyle\\sum_{i=1}^{m}\\sum_{j=1}^{n} f(x_{ij}^*, y_{ij}^*)\\,\\Delta A$: the total volume of the $mn$ boxes. Each term is (height) $\\times$ (base area) of one box. With the centers of the subrectangles as sample points it is called the **midpoint rule**.',
        },
        {
          type: 'plot3d',
          x: [0, 2],
          y: [0, 2],
          z: [0, 16],
          resolution: 36,
          surfaces: [{ expr: boxTop, color: 'blue', opacity: 0.9, label: 'tops of the boxes' }],
          parametricSurfaces: [
            { x: 'u', y: '0', z: `v*(16 - ${mid('u')}^2 - 2*${mid('0')}^2)`, u: [0, 2], v: [0, 1], color: 'blue', opacity: 0.75 },
            { x: 'u', y: '2', z: `v*(16 - ${mid('u')}^2 - 2*${mid('2')}^2)`, u: [0, 2], v: [0, 1], color: 'blue', opacity: 0.75 },
            { x: '0', y: 'u', z: `v*(16 - ${mid('0')}^2 - 2*${mid('u')}^2)`, u: [0, 2], v: [0, 1], color: 'blue', opacity: 0.75 },
            { x: '2', y: 'u', z: `v*(16 - ${mid('2')}^2 - 2*${mid('u')}^2)`, u: [0, 2], v: [0, 1], color: 'blue', opacity: 0.75 },
          ],
          curves: wireframe,
          sliders: [{ name: 'n', min: 1, max: 8, step: 1, value: 2, label: 'boxes per side $n$' }],
          readouts: [
            { label: 'midpoint sum $=$', expr: '48 + 4/n^2', digits: 5 },
            { label: 'exact volume $=$', expr: '48', digits: 5 },
          ],
          view: { azimuth: 35, elevation: 28 },
          caption: 'The solid under $z = 16 - x^2 - 2y^2$ over $R = [0, 2] \\times [0, 2]$, approximated by $n^2$ boxes whose heights are $f$ at the box centers. The red wireframe is the true surface. As $n$ grows the skyline hugs the surface and the total box volume approaches $48$.',
        },
        {
          type: 'table',
          headers: ['$n$ (boxes per side)', '$1$', '$2$', '$4$', '$8$', '$16$'],
          rows: [['midpoint sum', '$52$', '$49$', '$48.25$', '$48.0625$', '$48.015625$']],
          caption: 'For this surface the midpoint sum works out to exactly $48 + \\frac{4}{n^2}$, so the error falls by a factor of $4$ every time $n$ doubles.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why boxes, and why they converge',
          text: 'On a tiny subrectangle a continuous $f$ barely changes, so a flat-topped box is almost the same shape as the true column of the solid. The error in each box is (small change in height) $\\times$ (small area), and there are many boxes, but the height error shrinks as the boxes shrink. Taking $m, n \\to \\infty$ drives the total error to zero, exactly as in one variable.',
        },
      ],
    },
    // 2
    {
      kind: 'numeric',
      prompt: 'Estimate the volume under $z = 16 - x^2 - 2y^2$ over $R = [0, 2] \\times [0, 2]$ with a double Riemann sum using $m = n = 2$ and the **upper right corner** of each subrectangle as the sample point.',
      hint: 'The four sample points are $(1, 1), (1, 2), (2, 1), (2, 2)$, and each subrectangle has area $\\Delta A = 1 \\cdot 1 = 1$.',
      answer: '34',
      label: '$V \\approx$',
      explanation: 'The heights are $f(1, 1) = 16 - 1 - 2 = 13$, $f(1, 2) = 16 - 1 - 8 = 7$, $f(2, 1) = 16 - 4 - 2 = 10$ and $f(2, 2) = 16 - 4 - 8 = 4$. With $\\Delta A = 1$ the sum is $13 + 7 + 10 + 4 = 34$. That badly underestimates the true volume $48$: $f$ decreases in both $x$ and $y$, so the upper right corner is the *lowest* point of each subrectangle and every box sits below the surface. The midpoint rule with the same four boxes gives $49$, far closer.',
    },
    // 3 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'The double integral',
      blocks: [
        {
          type: 'p',
          text: 'The [[stat-double-integral|double integral]] is what the Riemann sums approach as the grid gets finer. You met it in probability as a tool; here it gets a proper definition.',
        },
        {
          type: 'theorem',
          name: 'Double integral over a rectangle',
          tex: '\\iint_R f(x, y)\\,dA = \\lim_{m, n \\to \\infty} \\sum_{i=1}^{m}\\sum_{j=1}^{n} f(x_{ij}^*, y_{ij}^*)\\,\\Delta A',
          text: 'provided the limit exists and is the same for every choice of sample points. Then $f$ is called **integrable** on $R$. Every continuous $f$ on $R$ is integrable, and so is a bounded $f$ whose discontinuities lie on finitely many smooth curves.',
        },
        {
          type: 'p',
          text: 'When $f \\ge 0$, $\\iint_R f\\,dA$ is the volume of the solid above $R$ and below the surface. When $f$ takes both signs it is a **signed volume**: boxes below the $xy$-plane have negative height, so they count negatively, just as area below the $x$-axis did in Calculus I. Writing $dA$ instead of $dx\\,dy$ is deliberate: it says "a tiny piece of area", without committing to how you will slice it.',
        },
        {
          type: 'list',
          items: [
            '**Linearity:** $\\iint_R (f + g)\\,dA = \\iint_R f\\,dA + \\iint_R g\\,dA$ and $\\iint_R cf\\,dA = c\\iint_R f\\,dA$.',
            '**Comparison:** if $f \\le g$ on $R$, then $\\iint_R f\\,dA \\le \\iint_R g\\,dA$.',
            '**Constants:** $\\iint_R k\\,dA = k \\cdot \\text{Area}(R)$, the volume of a box of height $k$.',
          ],
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Two kinds of limit',
          text: 'Here $m, n \\to \\infty$ means *both* counts grow without bound, so every subrectangle shrinks in both directions. Shrinking only the $x$-widths would leave long thin strips whose heights can vary a lot along $y$, and the sum would not settle down.',
        },
      ],
    },
    // 4
    {
      kind: 'truefalse',
      prompt: 'On $R = [-1, 1] \\times [0, 1]$, the double integral $\\iint_R x\\,dA$ equals the total volume of the solid between the plane $z = x$ and the $xy$-plane.',
      answer: false,
      explanation: 'The double integral is a **signed** volume. Over $x < 0$ the plane $z = x$ lies below the $xy$-plane, and that wedge counts negatively; it exactly cancels the wedge over $x > 0$, so $\\iint_R x\\,dA = 0$. The total (unsigned) volume between the plane and the $xy$-plane is $\\iint_R |x|\\,dA = 1$: two wedges of volume $\\tfrac12$ each.',
    },
    // 5 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Iterated integrals: slice the solid',
      blocks: [
        {
          type: 'p',
          text: 'You almost never evaluate a double integral from the limit definition. Instead you slice, just like the volume-by-slicing method from Calculus I: volume $= \\int (\\text{area of a cross-section})\\,dx$.',
        },
        {
          type: 'p',
          text: 'Freeze $x$ at some value. The plane through that $x$, parallel to the $yz$-plane, cuts the solid in a flat slice. Its area is an ordinary one-variable integral in $y$ with $x$ held constant, $A(x) = \\int_c^d f(x, y)\\,dy$. This is **partial integration**, the integral analogue of a partial derivative. Then add up the slices: $V = \\int_a^b A(x)\\,dx$.',
        },
        {
          type: 'plot3d',
          x: [0, 2],
          y: [0, 2],
          z: [0, 16],
          surfaces: [{ expr: surfaceF, color: 'blue', opacity: 0.45, label: '$z = 16 - x^2 - 2y^2$' }],
          parametricSurfaces: [{ x: 's', y: '2u', z: 'v*(16 - s^2 - 2*(2u)^2)', u: [0, 1], v: [0, 1], color: 'orange', opacity: 0.95, label: 'the slice at $x = s$' }],
          curves: [{ x: 's', y: 't', z: '16 - s^2 - 2t^2', t: [0, 2], color: 'red' }],
          sliders: [{ name: 's', min: 0, max: 2, step: 0.05, value: 0.6, label: 'slice position $x = s$', play: true }],
          readouts: [{ label: 'slice area $A(s) = \\frac{80}{3} - 2s^2 =$', expr: '80/3 - 2s^2', digits: 4 }],
          view: { azimuth: 30, elevation: 20 },
          caption: 'Freeze $x = s$ and the solid\'s cross-section is the orange region under the red curve $z = f(s, y)$. Press play: as the slice sweeps from $x = 0$ to $x = 2$ its area shrinks from $26.67$ to $18.67$, and adding up all those areas gives the volume.',
        },
        {
          type: 'derivation',
          title: 'Evaluate $\\displaystyle\\int_0^2\\int_0^2 (16 - x^2 - 2y^2)\\,dy\\,dx$',
          steps: [
            { tex: 'A(x) = \\int_0^2 (16 - x^2 - 2y^2)\\,dy', why: 'The inner integral, with $dy$ innermost: $x$ is a constant while you integrate in $y$.' },
            { tex: '= \\left[16y - x^2 y - \\tfrac23 y^3\\right]_{y=0}^{y=2}', why: 'Antidifferentiate in $y$. The term $x^2$ is a constant, so its antiderivative is $x^2 y$, not $\\tfrac13 x^3$.' },
            { tex: '= 32 - 2x^2 - \\tfrac{16}{3} = \\tfrac{80}{3} - 2x^2', why: 'Substitute $y = 2$ and $y = 0$; the lower limit gives $0$. The result is a function of $x$ alone: the slice area.' },
            { tex: 'V = \\int_0^2 \\left(\\tfrac{80}{3} - 2x^2\\right) dx = \\left[\\tfrac{80}{3}x - \\tfrac23 x^3\\right]_0^2', why: 'The outer integral adds up the slice areas.' },
            { tex: '= \\tfrac{160}{3} - \\tfrac{16}{3} = \\tfrac{144}{3} = 48', why: 'Evaluate at $x = 2$; the lower limit gives $0$.' },
          ],
          result: 'The volume is exactly $48$, the number the boxes were closing in on.',
        },
        {
          type: 'definition',
          term: '[[calc3-iterated-integral|Iterated integral]]',
          text: '$\\displaystyle\\int_a^b\\int_c^d f(x, y)\\,dy\\,dx$ means $\\displaystyle\\int_a^b\\left[\\int_c^d f(x, y)\\,dy\\right] dx$: work from the inside out. The inner differential ($dy$) is paired with the inner limits ($c$ to $d$).',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Match each differential with its limits',
          text: 'In $\\int_a^b\\int_c^d f\\,dy\\,dx$ the limits nest like parentheses: the innermost integral sign goes with the innermost differential. A common slip is to read the limits left to right and integrate $y$ from $a$ to $b$.',
        },
      ],
    },
    // 6
    {
      kind: 'expr',
      prompt: 'Compute the inner integral (partial integration with respect to $y$):',
      tex: '\\int_1^2 \\left(6x^2 y - 2x\\right) dy',
      hint: 'Treat $x$ as a constant. The antiderivative of $6x^2 y$ in $y$ is $3x^2 y^2$, and of $-2x$ it is $-2xy$.',
      label: 'result $=$',
      answer: '9x^2 - 2x',
      answerTex: '9x^2 - 2x',
      explanation: '$\\int_1^2 (6x^2 y - 2x)\\,dy = \\left[3x^2 y^2 - 2xy\\right]_{y=1}^{y=2} = (12x^2 - 4x) - (3x^2 - 2x) = 9x^2 - 2x$. The answer is a function of $x$ only: integrating out $y$ removes it. If you also integrate this from $x = 0$ to $x = 3$ you get $\\left[3x^3 - x^2\\right]_0^3 = 81 - 9 = 72$, the full iterated integral.',
    },
    // 7 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Fubini\'s theorem: either order works',
      blocks: [
        {
          type: 'p',
          text: 'You could just as well slice the other way: freeze $y$, integrate in $x$, then add up over $y$. The slices look different, but they fill the same solid, so the total should be the same. For the example, $\\int_0^2 (16 - x^2 - 2y^2)\\,dx = \\tfrac{88}{3} - 4y^2$, and $\\int_0^2 \\left(\\tfrac{88}{3} - 4y^2\\right) dy = \\tfrac{176}{3} - \\tfrac{32}{3} = 48$ again.',
        },
        {
          type: 'plot3d',
          x: [0, 2],
          y: [0, 2],
          z: [0, 16],
          surfaces: [{ expr: surfaceF, color: 'blue', opacity: 0.45, label: '$z = 16 - x^2 - 2y^2$' }],
          parametricSurfaces: [{ x: '2u', y: 'q', z: 'v*(16 - (2u)^2 - 2q^2)', u: [0, 1], v: [0, 1], color: 'green', opacity: 0.95, label: 'the slice at $y = q$' }],
          curves: [{ x: 't', y: 'q', z: '16 - t^2 - 2q^2', t: [0, 2], color: 'red' }],
          sliders: [{ name: 'q', min: 0, max: 2, step: 0.05, value: 0.6, label: 'slice position $y = q$', play: true }],
          readouts: [{ label: 'slice area $B(q) = \\frac{88}{3} - 4q^2 =$', expr: '88/3 - 4q^2', digits: 4 }],
          view: { azimuth: 30, elevation: 20 },
          caption: 'The same solid sliced parallel to the $xz$-plane. These slices shrink faster (from $29.33$ to $13.33$) because $f$ falls faster in $y$, yet their areas still add up to $48$.',
        },
        {
          type: 'theorem',
          name: '[[calc3-fubinis-theorem|Fubini\'s theorem]] (rectangles)',
          tex: '\\iint_R f(x, y)\\,dA = \\int_a^b\\int_c^d f(x, y)\\,dy\\,dx = \\int_c^d\\int_a^b f(x, y)\\,dx\\,dy',
          text: 'if $f$ is continuous on $R = [a, b] \\times [c, d]$. More generally it holds when $f$ is bounded on $R$, is discontinuous only on finitely many smooth curves, and the iterated integrals exist.',
        },
        {
          type: 'p',
          text: 'Since both orders give the same number, **choose the order that makes the integrals easy**. A favourite example: $\\iint_R y\\sin(xy)\\,dA$ with $R = [1, 2] \\times [0, \\pi]$.',
        },
        {
          type: 'derivation',
          title: 'Choosing the order: $\\iint_R y\\sin(xy)\\,dA$, $R = [1, 2] \\times [0, \\pi]$',
          steps: [
            { tex: '\\int_0^\\pi\\int_1^2 y\\sin(xy)\\,dx\\,dy', why: 'Integrate in $x$ first. With $y$ fixed, $y\\sin(xy)$ is exactly the derivative of $-\\cos(xy)$ with respect to $x$, so no technique is needed. (Integrating in $y$ first would need integration by parts.)' },
            { tex: '= \\int_0^\\pi \\Big[-\\cos(xy)\\Big]_{x=1}^{x=2}\\,dy = \\int_0^\\pi \\big(-\\cos 2y + \\cos y\\big)\\,dy', why: 'Evaluate the inner antiderivative at $x = 2$ and $x = 1$.' },
            { tex: '= \\Big[-\\tfrac12\\sin 2y + \\sin y\\Big]_0^\\pi = 0', why: 'Both sines vanish at $0$ and at $\\pi$.' },
          ],
          result: 'The signed volume is $0$: the surface dips below the $xy$-plane exactly as much as it rises above it.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Separable integrands split',
          text: 'If $f(x, y) = g(x)\\,h(y)$ on a rectangle, the double integral is a product of two single integrals: $\\iint_R g(x)h(y)\\,dA = \\left(\\int_a^b g(x)\\,dx\\right)\\left(\\int_c^d h(y)\\,dy\\right)$. The inner integral $\\int_c^d g(x)h(y)\\,dy = g(x)\\int_c^d h(y)\\,dy$, and that last integral is a constant that pulls out of the outer one.',
        },
        {
          type: 'deepdive',
          title: 'When Fubini fails',
          blocks: [
            {
              type: 'p',
              text: 'The hypotheses matter. Take $f(x, y) = \\dfrac{x^2 - y^2}{(x^2 + y^2)^2}$ on $[0, 1] \\times [0, 1]$, which blows up near the origin. Since $\\dfrac{\\partial}{\\partial y}\\dfrac{y}{x^2 + y^2} = \\dfrac{x^2 - y^2}{(x^2 + y^2)^2}$, the inner integral in $y$ is $\\dfrac{1}{1 + x^2}$, and:',
            },
            {
              type: 'math',
              tex: '\\int_0^1\\int_0^1 f\\,dy\\,dx = \\int_0^1 \\frac{dx}{1 + x^2} = \\frac{\\pi}{4}, \\qquad \\int_0^1\\int_0^1 f\\,dx\\,dy = -\\frac{\\pi}{4}',
              caption: 'Swapping the order flips the sign, because $f(y, x) = -f(x, y)$.',
            },
            {
              type: 'p',
              text: 'Nothing is wrong with the arithmetic. The function is unbounded, and $\\iint |f|\\,dA = \\infty$, so the double integral does not exist; the two iterated integrals add the same infinite positive and negative parts in different orders. Fubini\'s theorem (in its general form, due to Tonelli and Fubini) guarantees equal orders whenever $\\iint_R |f|\\,dA$ is finite.',
            },
          ],
        },
      ],
    },
    // 8
    {
      kind: 'mcq',
      prompt: 'You want $\\iint_R x\\,e^{xy}\\,dA$ over $R = [0, 1] \\times [0, 1]$. Which plan is best?',
      options: [
        { text: 'Integrate in $y$ first: $\\int_0^1\\int_0^1 x e^{xy}\\,dy\\,dx$', correct: true, why: 'With $x$ fixed, $x e^{xy}$ is the $y$-derivative of $e^{xy}$, so the inner integral is $e^{x} - 1$ with no technique at all.' },
        { text: 'Integrate in $x$ first: $\\int_0^1\\int_0^1 x e^{xy}\\,dx\\,dy$', why: 'This works but needs integration by parts in $x$, then produces terms like $\\frac{e^y}{y}$ that are hard to integrate in $y$. Fubini lets you avoid this.' },
        { text: 'Split it as $\\left(\\int_0^1 x\\,dx\\right)\\left(\\int_0^1 e^{xy}\\,dy\\right)$', why: '$x e^{xy}$ is not a product $g(x)h(y)$: the exponent mixes $x$ and $y$, so the separable shortcut does not apply.' },
        { text: 'Either order is equally easy', why: 'Both orders give the same *value* (Fubini), but the work is very different. Always look for the order whose inner antiderivative is immediate.' },
      ],
      explanation: 'Fubini says both orders agree, so pick the easy one. Inner in $y$: $\\int_0^1 x e^{xy}\\,dy = \\left[e^{xy}\\right]_{y=0}^{y=1} = e^x - 1$. Outer: $\\int_0^1 (e^x - 1)\\,dx = (e - 1) - 1 = e - 2 \\approx 0.718$. The factor $x$ in front is exactly what the chain rule produces when you differentiate $e^{xy}$ in $y$, which is the clue.',
    },
    // 9
    {
      kind: 'numeric',
      prompt: 'Evaluate $\\displaystyle\\iint_R x^2\\cos y\\,dA$ where $R = [0, 3] \\times \\left[0, \\tfrac{\\pi}{2}\\right]$.',
      hint: 'The integrand is a product $g(x)h(y)$ on a rectangle, so it splits into two single integrals.',
      answer: '9',
      label: '$\\iint_R x^2\\cos y\\,dA =$',
      explanation: 'Separate: $\\left(\\int_0^3 x^2\\,dx\\right)\\left(\\int_0^{\\pi/2}\\cos y\\,dy\\right) = \\left[\\tfrac{x^3}{3}\\right]_0^3 \\cdot \\left[\\sin y\\right]_0^{\\pi/2} = 9 \\cdot 1 = 9$. As an iterated integral you would get the same thing: the inner $\\int_0^{\\pi/2} x^2\\cos y\\,dy = x^2$, then $\\int_0^3 x^2\\,dx = 9$.',
    },
    // 10 ────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Average value, and the midpoint rule in code',
      blocks: [
        {
          type: 'p',
          text: 'In one variable the [[average-value]] of $f$ on $[a, b]$ was the integral divided by the length. In two variables, divide by the area.',
        },
        {
          type: 'theorem',
          name: 'Average value over a rectangle',
          tex: 'f_{\\text{avg}} = \\frac{1}{A(R)}\\iint_R f(x, y)\\,dA',
          text: 'where $A(R) = (b - a)(d - c)$ is the area of $R$. Geometrically, $f_{\\text{avg}}$ is the height of the flat-topped box over $R$ that has the same volume as the solid under the surface.',
        },
        {
          type: 'plot3d',
          x: [0, 2],
          y: [0, 2],
          z: [0, 16],
          surfaces: [
            { expr: surfaceF, color: 'blue', opacity: 0.8, label: '$z = 16 - x^2 - 2y^2$' },
            { expr: '12', color: 'green', opacity: 0.55, label: 'average height $z = 12$' },
          ],
          parametricSurfaces: [
            { x: '2u', y: '0', z: 'v*(16 - 4u^2)', u: [0, 1], v: [0, 1], color: 'blue', opacity: 0.35 },
            { x: '2u', y: '2', z: 'v*(8 - 4u^2)', u: [0, 1], v: [0, 1], color: 'blue', opacity: 0.35 },
            { x: '0', y: '2u', z: 'v*(16 - 8u^2)', u: [0, 1], v: [0, 1], color: 'blue', opacity: 0.35 },
            { x: '2', y: '2u', z: 'v*(12 - 8u^2)', u: [0, 1], v: [0, 1], color: 'blue', opacity: 0.35 },
          ],
          resolution: 20,
          view: { azimuth: 40, elevation: 18 },
          caption: 'Volume $48$ over a base of area $4$ gives $f_{\\text{avg}} = 12$. The part of the solid sticking up through the green plane would exactly fill the empty space under the plane where the surface dips below it: level the solid off and it becomes a box of height $12$ over $R$.',
        },
        {
          type: 'p',
          text: 'This is the continuous version of a very familiar computation. The average elevation of a terrain tile stored as a heightmap is the mean of its samples, and the mean of samples taken at cell centers is exactly the midpoint rule divided by the area. Military mapping software does this when it reports the mean elevation of a grid square; a game does it when it levels a building site.',
        },
        {
          type: 'code',
          title: 'midpoint2d.cpp',
          runnable: true,
          code: `#include <cstdio>

// f(x, y) = 16 - x^2 - 2y^2 on R = [0, 2] x [0, 2]. Exact volume: 48.
double f(double x, double y) { return 16.0 - x * x - 2.0 * y * y; }

// Midpoint rule: m columns, n rows, one box per subrectangle.
double midpoint2D(double a, double b, double c, double d, int m, int n) {
    const double dx = (b - a) / m;
    const double dy = (d - c) / n;
    double sum = 0.0;
    for (int i = 0; i < m; ++i) {
        const double x = a + (i + 0.5) * dx;      // center of column i
        for (int j = 0; j < n; ++j) {
            const double y = c + (j + 0.5) * dy;  // center of row j
            sum += f(x, y);                       // height of box (i, j)
        }
    }
    return sum * dx * dy;                         // every box has base area dx*dy
}

int main() {
    const double exact = 48.0;
    const double area = 4.0;                      // area of R
    for (int n = 1; n <= 64; n *= 4) {
        const double V = midpoint2D(0.0, 2.0, 0.0, 2.0, n, n);
        std::printf("n = %2d  V = %.6f  error = %.6f  avg height = %.4f\\n",
                    n, V, V - exact, V / area);
    }
}`,
          output: `n =  1  V = 52.000000  error = 4.000000  avg height = 13.0000
n =  4  V = 48.250000  error = 0.250000  avg height = 12.0625
n = 16  V = 48.015625  error = 0.015625  avg height = 12.0039
n = 64  V = 48.000977  error = 0.000977  avg height = 12.0002`,
          annotations: [
            { lines: '11-16', text: 'The double sum is two nested loops: the outer loop walks the columns ($x$), the inner loop walks the rows ($y$). That is an iterated sum, the discrete twin of an iterated integral.' },
            { lines: 18, text: 'Factor $\\Delta x\\,\\Delta y$ out of the sum: every box has the same base. Dividing by the area instead gives the plain average of the sampled heights.' },
            { lines: 24, text: 'Quadrupling $n$ divides the error by $16$: the midpoint rule\'s error behaves like $\\frac{1}{n^2}$, the same as in one variable.' },
          ],
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Cost grows with dimension',
          text: 'A 1D midpoint rule with $n$ samples has error about $\\frac{1}{n^2}$. In 2D you need $n^2$ samples for the same accuracy, and in $d$ dimensions $n^d$. That "curse of dimensionality" is why high-dimensional integrals (light transport in a path tracer, for instance) use Monte Carlo sampling instead of grids: its error shrinks like $\\frac{1}{\\sqrt{N}}$ no matter the dimension.',
        },
      ],
    },
    // 11
    {
      kind: 'numeric',
      prompt: 'Find the average value of $f(x, y) = x y^2$ over the rectangle $R = [0, 2] \\times [0, 3]$.',
      hint: 'Compute $\\iint_R xy^2\\,dA$ (it splits into a product) and divide by the area of $R$.',
      answer: '3',
      label: '$f_{\\text{avg}} =$',
      explanation: '$\\iint_R xy^2\\,dA = \\left(\\int_0^2 x\\,dx\\right)\\left(\\int_0^3 y^2\\,dy\\right) = 2 \\cdot 9 = 18$. The area of $R$ is $2 \\cdot 3 = 6$, so $f_{\\text{avg}} = \\frac{18}{6} = 3$. Sanity check: $f$ ranges from $0$ to $f(2, 3) = 18$ on $R$, and $3$ lies in that range (it is low because $f$ is small on most of $R$ and only large near the far corner).',
    },
    // 12
    {
      kind: 'error',
      prompt: 'A student evaluates $\\displaystyle\\int_0^1\\int_0^2 (xy + y^2)\\,dx\\,dy$. Tap the first line that is wrong.',
      lines: [
        'The inner integral is in $x$, so $y$ is held constant.',
        '$\\displaystyle\\int_0^2 (xy + y^2)\\,dx = \\left[\\frac{x^2 y}{2} + \\frac{y^3}{3}\\right]_{x=0}^{x=2}$',
        '$= 2y + \\dfrac{y^3}{3}$',
        '$\\displaystyle\\int_0^1 \\left(2y + \\frac{y^3}{3}\\right) dy = 1 + \\frac{1}{12} = \\frac{13}{12}$',
      ],
      errorLines: [2],
      explanation: 'Line 2 integrates $y^2$ as if the variable were $y$. With $y$ held constant, $y^2$ is a constant, and its antiderivative in $x$ is $xy^2$. Correctly: $\\left[\\frac{x^2 y}{2} + xy^2\\right]_{x=0}^{x=2} = 2y + 2y^2$, and then $\\int_0^1 (2y + 2y^2)\\,dy = 1 + \\frac23 = \\frac53$. (Line 3 then wrongly evaluates $\\frac{y^3}{3}$ "at $x = 2$" as if it did not depend on $x$, a symptom of the same confusion.)',
    },
    // 13
    {
      kind: 'order',
      prompt: 'Put the steps for evaluating $\\displaystyle\\int_a^b\\int_c^d f(x, y)\\,dy\\,dx$ in order.',
      lines: [
        'Hold $x$ fixed and find an antiderivative of $f(x, y)$ with respect to $y$',
        'Evaluate it from $y = c$ to $y = d$, leaving a function $A(x)$ of $x$ alone',
        'Find an antiderivative of $A(x)$ with respect to $x$',
        'Evaluate it from $x = a$ to $x = b$ to get a number',
      ],
      distractors: ['Evaluate the antiderivative in $y$ from $y = a$ to $y = b$'],
      explanation: 'Work from the inside out. The inner integral ($dy$, limits $c$ to $d$) is a partial integration that turns $f(x, y)$ into the slice area $A(x)$. The outer integral ($dx$, limits $a$ to $b$) adds up the slices. The distractor pairs $dy$ with the outer limits, the classic nesting mistake.',
    },
  ],
  takeaways: [
    'A double Riemann sum adds up boxes $f(x_{ij}^*, y_{ij}^*)\\,\\Delta A$; its limit is $\\iint_R f\\,dA$, the signed volume under $z = f(x, y)$.',
    'An iterated integral works from the inside out: the inner integral holds the outer variable fixed and gives the area of a slice.',
    'Fubini\'s theorem: for continuous $f$ on a rectangle both orders give the same value, so choose the order with the easier inner integral. Without its hypotheses (an unbounded $f$) the orders can disagree.',
    'On a rectangle, a separable integrand $g(x)h(y)$ splits into $\\left(\\int g\\right)\\left(\\int h\\right)$.',
    'Average value: $f_{\\text{avg}} = \\frac{1}{A(R)}\\iint_R f\\,dA$, the height of the box with the same volume. The midpoint rule is the mean of the cell-center samples times the area.',
  ],
  reading: [
    {
      title: 'OpenStax Calculus Volume 3 — Chapter 5: Multiple Integration',
      url: 'https://openstax.org/details/books/calculus-volume-3',
      source: 'openstax',
      note: 'Section 5.1 builds double integrals over rectangles from Riemann sums, with Fubini\'s theorem and many worked iterated integrals.',
    },
    {
      title: "Paul's Online Math Notes — Calculus III",
      url: 'https://tutorial.math.lamar.edu/Classes/CalcIII/CalcIII.aspx',
      source: 'other',
      note: 'The Double Integrals and Iterated Integrals sections give extra practice choosing the order of integration.',
    },
    {
      title: 'MIT OCW 18.02SC Multivariable Calculus',
      url: 'https://ocw.mit.edu/courses/18-02sc-multivariable-calculus-fall-2010/',
      source: 'other',
      note: 'Unit 3 opens with double integrals as volume, with short recitation videos on iterated integrals.',
    },
    {
      title: "Wikipedia — Fubini's theorem",
      url: 'https://en.wikipedia.org/wiki/Fubini%27s_theorem',
      source: 'wikipedia',
      note: 'States the precise hypotheses and collects counterexamples where the two iterated integrals differ.',
    },
  ],
};
