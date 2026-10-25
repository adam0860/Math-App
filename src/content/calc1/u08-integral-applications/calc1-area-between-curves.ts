import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'calc1-area-between-curves',
  title: 'Area Between Curves',
  summary: 'Slice a region into thin strips, add top minus bottom (or right minus left), and let the integral do the rest.',
  minutes: 18,
  objectives: [
    'Derive the formula $A = \\int_a^b [f(x) - g(x)]\\,dx$ by slicing a region into vertical strips',
    'Find the limits of integration by solving for the intersection points of two curves',
    'Handle curves that cross by splitting the interval and integrating $|f(x) - g(x)|$',
    'Set up and evaluate areas with horizontal slices, $A = \\int_c^d [x_R(y) - x_L(y)]\\,dy$',
    'Choose the slicing direction that makes a problem simplest',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'From area under a curve to area between curves',
      blocks: [
        {
          type: 'p',
          text: 'So far, a [[definite-integral]] has measured the signed area between *one* curve and the $x$-axis. But the $x$-axis is just the curve $y = 0$. Replace it with any other curve and you get a far more useful question: how much area lies **between** two graphs?',
        },
        {
          type: 'p',
          text: 'The method is the same one that built the integral in the first place: slice, approximate, add, take a limit. Cut the region into thin vertical strips of width $\\Delta x$. A strip at position $x$ reaches from the bottom curve $g(x)$ up to the top curve $f(x)$, so it is nearly a rectangle of height $f(x) - g(x)$.',
        },
        {
          type: 'math',
          tex: 'A \\approx \\sum_{i=1}^{n} \\big[f(x_i) - g(x_i)\\big]\\,\\Delta x \\;\\xrightarrow{\\;n \\to \\infty\\;}\\; \\int_a^b \\big[f(x) - g(x)\\big]\\,dx',
          caption: 'A Riemann sum of strip areas becomes an integral.',
        },
        {
          type: 'theorem',
          name: 'Area between curves (vertical slices)',
          tex: 'A = \\int_a^b \\big[f(x) - g(x)\\big]\\,dx',
          text: 'If $f$ and $g$ are continuous and $f(x) \\ge g(x)$ for all $x$ in $[a, b]$, this is the area of the region between $y = f(x)$ and $y = g(x)$ from $x = a$ to $x = b$. In words: **integrate top minus bottom**.',
        },
        {
          type: 'graph',
          x: [-0.6, 1.6],
          y: [-0.7, 3.4],
          functions: [
            { expr: 'e^x', label: '$y = e^x$ (top)' },
            { expr: 'x', label: '$y = x$ (bottom)', color: 'red' },
          ],
          areas: [{ expr: 'e^x', expr2: 'x', from: 0, to: 1, color: 'teal' }],
          segments: [{ from: ['s', 's'], to: ['s', 'e^s'], color: 'purple', label: 'height' }],
          vlines: [{ x: 0 }, { x: 1 }],
          sliders: [{ name: 's', min: 0, max: 1, step: 0.01, value: 0.5, label: 'strip position $x$' }],
          readouts: [{ label: 'strip height $e^x - x =$', expr: 'e^s - s', digits: 3 }],
          caption: 'The purple segment is one strip. Its height is always top minus bottom; the integral adds up all of them from $x = 0$ to $x = 1$.',
        },
        {
          type: 'derivation',
          title: 'Area between $y = e^x$ and $y = x$ on $[0, 1]$',
          steps: [
            { tex: 'A = \\int_0^1 \\big(e^x - x\\big)\\,dx', why: 'On $[0, 1]$, $e^x > x$ (for example $e^0 = 1 > 0$; in fact $e^x \\ge 1 + x > x$ everywhere), so $e^x$ is the top curve.' },
            { tex: '= \\Big[\\,e^x - \\tfrac{x^2}{2}\\,\\Big]_0^1', why: 'Antiderivatives: $e^x$ is its own antiderivative, and $\\int x\\,dx = \\frac{x^2}{2}$.' },
            { tex: '= \\left(e - \\tfrac{1}{2}\\right) - \\left(1 - 0\\right)', why: 'Upper limit minus lower limit. Remember $e^0 = 1$, not $0$.' },
            { tex: '= e - \\tfrac{3}{2} \\approx 1.218', why: 'Combine constants: $-\\frac{1}{2} - 1 = -\\frac{3}{2}$.' },
          ],
          result: 'The region has area $e - \\frac{3}{2} \\approx 1.218$ square units.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why "top minus bottom" works even below the axis',
          text: 'The height of a strip is the *distance* between two $y$-values, and the distance from $g(x)$ up to $f(x)$ is $f(x) - g(x)$ no matter where the strip sits. If $f(x) = -1$ and $g(x) = -4$, the strip is $-1 - (-4) = 3$ units tall, entirely below the axis. That is why this formula never needs the "areas below the axis count negative" correction: as long as you subtract the lower curve from the upper one, every strip is positive.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'mcq',
      prompt: 'On $[0, 1]$ the curve $y = \\sqrt{x}$ lies above $y = x^2$. Which integral gives the area of the region between them?',
      options: [
        {
          text: '$\\int_0^1 \\left(x^2 - \\sqrt{x}\\right)dx$',
          why: 'This is bottom minus top. It evaluates to $-\\frac{1}{3}$ — a negative "area" is the tell-tale sign of reversed order.',
        },
        {
          text: '$\\int_0^1 \\left(\\sqrt{x} - x^2\\right)dx$',
          correct: true,
          why: 'Top minus bottom over the interval: every strip has positive height $\\sqrt{x} - x^2$.',
        },
        {
          text: '$\\int_0^1 \\left(\\sqrt{x} + x^2\\right)dx$',
          why: 'Adding the curves gives the area under $\\sqrt{x}$ *plus* the area under $x^2$ — it double-counts instead of measuring the gap.',
        },
        {
          text: '$\\int_0^1 \\left(\\sqrt{x} - x^2\\right)^2 dx$',
          why: 'Squaring the height does not give an area; a strip\'s area is height × width, not height² × width.',
        },
      ],
      explanation: 'Each vertical strip runs from $y = x^2$ up to $y = \\sqrt{x}$, so its height is $\\sqrt{x} - x^2$. The area is $\\int_0^1 (\\sqrt{x} - x^2)\\,dx = \\frac{2}{3} - \\frac{1}{3} = \\frac{1}{3}$.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Finding the limits: where the curves meet',
      blocks: [
        {
          type: 'p',
          text: 'Often nobody hands you $a$ and $b$. Instead the region is "the region enclosed by" two curves, and its left and right edges are where the curves **intersect**. Set the two formulas equal and solve. Then test one point in between to see which curve is on top.',
        },
        {
          type: 'graph',
          x: [-4, 3.2],
          y: [-6, 5],
          functions: [
            { expr: '4 - x^2', label: '$y = 4 - x^2$' },
            { expr: 'x - 2', label: '$y = x - 2$', color: 'red' },
          ],
          areas: [{ expr: '4 - x^2', expr2: 'x - 2', from: -3, to: 2, color: 'teal' }],
          segments: [{ from: ['s', 's - 2'], to: ['s', '4 - s^2'], color: 'purple' }],
          points: [
            { x: -3, y: -5, label: '(−3, −5)' },
            { x: 2, y: 0, label: '(2, 0)' },
          ],
          sliders: [{ name: 's', min: -3, max: 2, step: 0.05, value: -0.5, label: 'strip position $x$' }],
          readouts: [{ label: 'strip height $(4 - x^2) - (x - 2) =$', expr: '(4 - s^2) - (s - 2)', digits: 3 }],
          caption: 'Much of this region lies below the $x$-axis, yet every strip height is positive. The tallest strip is at $x = -\\frac{1}{2}$, the vertex of the height function $6 - x - x^2$.',
        },
        {
          type: 'derivation',
          title: 'Area enclosed by $y = 4 - x^2$ and $y = x - 2$',
          steps: [
            { tex: '4 - x^2 = x - 2', why: 'The curves meet where their $y$-values are equal.' },
            { tex: 'x^2 + x - 6 = 0', why: 'Move everything to one side to get a quadratic equal to zero.' },
            { tex: '(x + 3)(x - 2) = 0 \\implies x = -3,\\ x = 2', why: 'Factor (numbers multiplying to $-6$ and adding to $1$: $3$ and $-2$). These are the limits of integration.' },
            { tex: 'x = 0:\\quad 4 - 0 = 4 \\;>\\; 0 - 2 = -2', why: 'Test a point between $-3$ and $2$: the parabola is on top.' },
            { tex: 'A = \\int_{-3}^{2} \\big[(4 - x^2) - (x - 2)\\big]\\,dx = \\int_{-3}^{2} \\big(6 - x - x^2\\big)\\,dx', why: 'Top minus bottom. Careful with the parentheses: $-(x - 2) = -x + 2$.' },
            { tex: '= \\Big[\\,6x - \\tfrac{x^2}{2} - \\tfrac{x^3}{3}\\,\\Big]_{-3}^{2}', why: 'Power rule term by term.' },
            { tex: '= \\left(12 - 2 - \\tfrac{8}{3}\\right) - \\left(-18 - \\tfrac{9}{2} + 9\\right) = \\tfrac{22}{3} - \\left(-\\tfrac{27}{2}\\right)', why: 'At $x = 2$: $12 - 2 - \\frac{8}{3} = \\frac{22}{3}$. At $x = -3$: $-18 - \\frac{9}{2} - \\frac{-27}{3} = -18 - \\frac{9}{2} + 9 = -\\frac{27}{2}$.' },
            { tex: '= \\tfrac{44}{6} + \\tfrac{81}{6} = \\tfrac{125}{6} \\approx 20.83', why: 'Common denominator $6$.' },
          ],
          result: 'The enclosed region has area $\\frac{125}{6} \\approx 20.83$ square units.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'The sign slip in "top minus bottom"',
          text: 'Writing $4 - x^2 - x - 2$ instead of $4 - x^2 - (x - 2)$ drops the parentheses and turns $+2$ into $-2$. Always wrap the bottom function in parentheses before subtracting. A negative final answer means you subtracted in the wrong order; a suspiciously small one often means a lost parenthesis.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'numeric',
      prompt: 'Find the area of the region enclosed by $y = x^2$ and $y = 2x$.',
      hint: 'Solve $x^2 = 2x$ for the limits. Test $x = 1$ to see which curve is on top.',
      label: '$A =$',
      answer: '4/3',
      answerTex: '\\frac{4}{3}',
      explanation: 'Intersections: $x^2 = 2x \\implies x(x - 2) = 0 \\implies x = 0, 2$. At $x = 1$, $2x = 2 > 1 = x^2$, so the line is on top. $A = \\int_0^2 (2x - x^2)\\,dx = \\left[x^2 - \\frac{x^3}{3}\\right]_0^2 = 4 - \\frac{8}{3} = \\frac{4}{3}$.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'When the curves cross: split the interval',
      blocks: [
        {
          type: 'p',
          text: 'If the curves cross *inside* $[a, b]$, "the top curve" changes partway through. Integrating $f - g$ straight across would subtract the pieces where $g$ is on top, exactly like signed area below the axis. The true area always uses a positive height:',
        },
        {
          type: 'math',
          tex: 'A = \\int_a^b \\big|f(x) - g(x)\\big|\\,dx',
          caption: 'In practice: find every crossing, split there, and integrate (top − bottom) on each piece.',
        },
        {
          type: 'graph',
          x: [-0.2, 3.4],
          y: [-1.3, 1.4],
          xStep: 'pi',
          functions: [
            { expr: 'sin(x)', label: '$y = \\sin x$' },
            { expr: 'cos(x)', label: '$y = \\cos x$', color: 'red' },
          ],
          areas: [
            { expr: 'cos(x)', expr2: 'sin(x)', from: 0, to: 'pi/4', color: 'orange' },
            { expr: 'sin(x)', expr2: 'cos(x)', from: 'pi/4', to: 'pi', color: 'green' },
          ],
          points: [{ x: 'pi/4', y: 'sqrt(2)/2', label: '(π/4, √2/2)' }],
          caption: 'Orange: $\\cos x$ on top. Green: $\\sin x$ on top. The curves swap at $x = \\frac{\\pi}{4}$.',
        },
        {
          type: 'derivation',
          title: 'Area between $y = \\sin x$ and $y = \\cos x$ on $[0, \\pi]$',
          steps: [
            { tex: '\\sin x = \\cos x \\implies \\tan x = 1 \\implies x = \\tfrac{\\pi}{4}', why: 'Divide by $\\cos x$ (it is not $0$ at a crossing, since $\\sin x$ and $\\cos x$ are never both $0$). In $[0, \\pi]$ the only solution is $\\frac{\\pi}{4}$.' },
            { tex: '\\int_0^{\\pi/4} (\\cos x - \\sin x)\\,dx = \\Big[\\sin x + \\cos x\\Big]_0^{\\pi/4} = \\sqrt{2} - 1', why: 'On $[0, \\frac{\\pi}{4}]$, cosine is on top (test $x = 0$: $1 > 0$). At $\\frac{\\pi}{4}$: $\\frac{\\sqrt{2}}{2} + \\frac{\\sqrt{2}}{2} = \\sqrt{2}$; at $0$: $0 + 1 = 1$.' },
            { tex: '\\int_{\\pi/4}^{\\pi} (\\sin x - \\cos x)\\,dx = \\Big[-\\cos x - \\sin x\\Big]_{\\pi/4}^{\\pi} = 1 + \\sqrt{2}', why: 'On $[\\frac{\\pi}{4}, \\pi]$, sine is on top (test $x = \\frac{\\pi}{2}$: $1 > 0$). At $\\pi$: $-(-1) - 0 = 1$; at $\\frac{\\pi}{4}$: $-\\sqrt{2}$. So $1 - (-\\sqrt{2})$.' },
            { tex: 'A = (\\sqrt{2} - 1) + (1 + \\sqrt{2}) = 2\\sqrt{2} \\approx 2.828', why: 'Add the two positive pieces.' },
          ],
          result: 'The area is $2\\sqrt{2}$. Compare the unsplit integral $\\int_0^\\pi (\\sin x - \\cos x)\\,dx = 2$, which wrongly subtracts the orange piece.',
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'Exam problems love intervals where the curves cross. Before integrating, always ask: "Do the curves intersect *between* my limits?" Solve $f(x) = g(x)$ even when the limits are given — any solution inside $(a, b)$ is a place where you must split.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'truefalse',
      prompt: 'If the curves $y = f(x)$ and $y = g(x)$ cross exactly once inside $[a, b]$, then $\\left|\\int_a^b [f(x) - g(x)]\\,dx\\right|$ equals the area between them on $[a, b]$.',
      answer: false,
      explanation: 'Taking the absolute value *after* integrating is too late: the piece where $g$ is on top has already been subtracted from the piece where $f$ is on top. For $\\sin x$ and $\\cos x$ on $[0, \\pi]$ the unsplit integral has absolute value $2$, but the area is $2\\sqrt{2}$. You need $\\int_a^b |f - g|\\,dx$: split at the crossing and add the pieces.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'numeric',
      prompt: 'Find the total area of the regions between $y = x^3$ and $y = x$ on $[-1, 1]$.',
      hint: 'The curves cross at $x = 0$. On $[-1, 0]$ test $x = -\\frac{1}{2}$; on $[0, 1]$ test $x = \\frac{1}{2}$.',
      label: '$A =$',
      answer: '1/2',
      answerTex: '\\frac{1}{2}',
      explanation: 'Solve $x^3 = x$: $x(x - 1)(x + 1) = 0$, so the curves cross at $-1, 0, 1$. On $[-1, 0]$, $x^3$ is on top (at $-\\frac{1}{2}$: $-\\frac{1}{8} > -\\frac{1}{2}$): $\\int_{-1}^0 (x^3 - x)\\,dx = 0 - \\left(\\frac{1}{4} - \\frac{1}{2}\\right) = \\frac{1}{4}$. On $[0, 1]$, $x$ is on top: $\\int_0^1 (x - x^3)\\,dx = \\frac{1}{2} - \\frac{1}{4} = \\frac{1}{4}$. Total $\\frac{1}{2}$. The unsplit integral $\\int_{-1}^1 (x - x^3)\\,dx$ is $0$ — the two equal pieces cancel completely.',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'concept',
      title: 'Slicing sideways: integrating with respect to $y$',
      blocks: [
        {
          type: 'p',
          text: 'Some regions are awkward with vertical strips. Take the region between the sideways parabola $x = y^2$ and the line $x = y + 2$. A vertical strip near $x = 0.5$ runs from the lower half of the parabola to the upper half, but a strip near $x = 3$ runs from the line to the parabola. The bottom boundary changes formula at $x = 1$, so vertical strips force you to split into two integrals.',
        },
        {
          type: 'p',
          text: 'Horizontal strips fix this. Each strip at height $y$ has thickness $\\Delta y$ and stretches from a **left** curve $x = x_L(y)$ to a **right** curve $x = x_R(y)$. Same slicing idea, with the roles of $x$ and $y$ swapped.',
        },
        {
          type: 'theorem',
          name: 'Area between curves (horizontal slices)',
          tex: 'A = \\int_c^d \\big[x_R(y) - x_L(y)\\big]\\,dy',
          text: 'If $x_R(y) \\ge x_L(y)$ for $c \\le y \\le d$: **integrate right minus left**, with limits that are $y$-values.',
        },
        {
          type: 'graph',
          x: [-1, 5],
          y: [-2.4, 3],
          equal: true,
          parametric: [
            { x: 't^2', y: 't', t: [-1.55, 1.75], label: '$x = y^2$ (left)' },
            { x: 't + 2', y: 't', t: [-2.4, 2.9], label: '$x = y + 2$ (right)', color: 'red' },
          ],
          areas: [
            { expr: 'sqrt(x)', expr2: '-sqrt(x)', from: 0, to: 1, color: 'teal' },
            { expr: 'sqrt(x)', expr2: 'x - 2', from: 1, to: 4, color: 'teal' },
          ],
          segments: [{ from: ['s^2', 's'], to: ['s + 2', 's'], color: 'purple' }],
          points: [
            { x: 1, y: -1, label: '(1, −1)' },
            { x: 4, y: 2, label: '(4, 2)' },
          ],
          sliders: [{ name: 's', min: -1, max: 2, step: 0.05, value: 0.5, label: 'strip height $y$' }],
          readouts: [{ label: 'strip length $(y + 2) - y^2 =$', expr: '(s + 2) - s^2', digits: 3 }],
          caption: 'Every horizontal strip runs from the parabola (left) to the line (right): one formula for the whole region.',
        },
        {
          type: 'derivation',
          title: 'Area between $x = y^2$ and $x = y + 2$',
          steps: [
            { tex: 'y^2 = y + 2 \\implies y^2 - y - 2 = 0 \\implies (y - 2)(y + 1) = 0', why: 'Intersections, solved for $y$ because the limits of a $dy$ integral are $y$-values.' },
            { tex: 'y = -1,\\ y = 2', why: 'These are the bottom and top of the region: $c = -1$, $d = 2$.' },
            { tex: 'y = 0:\\quad x_L = 0,\\ x_R = 2', why: 'Test a height between $-1$ and $2$: the parabola is on the left, the line on the right.' },
            { tex: 'A = \\int_{-1}^{2} \\big[(y + 2) - y^2\\big]\\,dy', why: 'Right minus left.' },
            { tex: '= \\Big[\\,\\tfrac{y^2}{2} + 2y - \\tfrac{y^3}{3}\\,\\Big]_{-1}^{2}', why: 'Power rule in the variable $y$.' },
            { tex: '= \\left(2 + 4 - \\tfrac{8}{3}\\right) - \\left(\\tfrac{1}{2} - 2 + \\tfrac{1}{3}\\right) = \\tfrac{10}{3} + \\tfrac{7}{6} = \\tfrac{9}{2}', why: 'At $y = 2$: $\\frac{10}{3}$. At $y = -1$: $\\frac{1}{2} - 2 + \\frac{1}{3} = -\\frac{7}{6}$. Then $\\frac{20}{6} + \\frac{7}{6} = \\frac{27}{6}$.' },
          ],
          result: 'The area is $\\frac{9}{2}$. With vertical strips you would need $\\int_0^1 2\\sqrt{x}\\,dx + \\int_1^4 (\\sqrt{x} - x + 2)\\,dx = \\frac{4}{3} + \\frac{19}{6}$ — the same $\\frac{9}{2}$, with twice the work.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Which way should I slice?',
          text: 'Look at the boundaries. If the top and bottom each have a single formula, slice vertically ($dx$). If the left and right each have a single formula — typically when the curves are given as $x = \\dots$ in terms of $y$ — slice horizontally ($dy$). Choose the direction that needs the fewest integrals.',
        },
      ],
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'mcq',
      prompt: 'The curves $x = y^2$ and $x = 2 - y^2$ enclose a region. They meet at $y = -1$ and $y = 1$. Which integral gives its area?',
      options: [
        {
          text: '$\\int_{-1}^{1} \\left(2y^2 - 2\\right)dy$',
          why: 'This is left minus right: $y^2 - (2 - y^2)$. It evaluates to $-\\frac{8}{3}$.',
        },
        {
          text: '$\\int_{0}^{2} \\left(2 - 2x\\right)dx$',
          why: 'This swaps the roles of the variables without re-solving the curves for $y$. The region spans $0 \\le x \\le 2$, but its vertical strips change formula at $x = 1$.',
        },
        {
          text: '$\\int_{-1}^{1} \\left(2 - y^2\\right)dy$',
          why: 'This is the area between $x = 2 - y^2$ and the $y$-axis ($x = 0$). It ignores the left boundary $x = y^2$.',
        },
        {
          text: '$\\int_{-1}^{1} \\left(2 - 2y^2\\right)dy$',
          correct: true,
          why: 'At $y = 0$ the curves give $x = 0$ and $x = 2$, so $x = 2 - y^2$ is on the right. Right minus left: $(2 - y^2) - y^2 = 2 - 2y^2$.',
        },
      ],
      explanation: 'Both boundaries are given as $x$ in terms of $y$, so horizontal strips are natural. Right minus left is $(2 - y^2) - y^2 = 2 - 2y^2$, from $y = -1$ to $y = 1$. Evaluating: $\\left[2y - \\frac{2y^3}{3}\\right]_{-1}^{1} = \\frac{4}{3} - \\left(-\\frac{4}{3}\\right) = \\frac{8}{3}$.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'numeric',
      prompt: 'Find the area of the region between the curve $x = 4 - y^2$ and the $y$-axis.',
      hint: 'The $y$-axis is the curve $x = 0$. The parabola meets it where $4 - y^2 = 0$.',
      label: '$A =$',
      answer: '32/3',
      answerTex: '\\frac{32}{3}',
      explanation: 'The left boundary is $x = 0$ and the right is $x = 4 - y^2$; they meet at $y = \\pm 2$. $A = \\int_{-2}^{2} (4 - y^2)\\,dy = \\left[4y - \\frac{y^3}{3}\\right]_{-2}^{2} = \\left(8 - \\frac{8}{3}\\right) - \\left(-8 + \\frac{8}{3}\\right) = \\frac{16}{3} + \\frac{16}{3} = \\frac{32}{3}$.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'A reliable strategy (and how a computer does it)',
      blocks: [
        {
          type: 'p',
          text: 'Every area-between-curves problem, from homework to exams, yields to the same routine. The calculus is one line; the work is in the setup.',
        },
        {
          type: 'steps',
          items: [
            { title: 'Sketch', text: 'Rough graphs of both curves. Shade the region. This prevents most mistakes.' },
            { title: 'Find intersections', text: 'Set the curves equal. These give the limits, and any crossing inside the interval is a place to split.' },
            { title: 'Choose a slice direction', text: 'Vertical ($dx$, top − bottom) or horizontal ($dy$, right − left), whichever needs fewer pieces.' },
            { title: 'Identify which curve is on top (or right)', text: 'Test one point in each piece.' },
            { title: 'Integrate and sanity-check', text: 'The answer must be positive. Compare with a rough estimate from your sketch.' },
          ],
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Area between curves in code',
          text: 'When there is no nice antiderivative — say the curves come from terrain data or a spline in a level editor — a program just adds up strips. This is the same Riemann sum that defined the integral, using midpoints for accuracy. Game engines use the idea for things like how much of a water volume lies under a surface, or the area swept between two paths.',
        },
        {
          type: 'code',
          title: 'area.cpp',
          runnable: true,
          code: `#include <cstdio>

double top(double x)    { return 4.0 - x * x; }  // upper curve
double bottom(double x) { return x - 2.0; }      // lower curve

int main() {
    const double a = -3.0, b = 2.0;
    const int counts[] = {5, 50, 500};
    for (int n : counts) {
        double dx = (b - a) / n, area = 0.0;
        for (int i = 0; i < n; ++i) {
            double x = a + (i + 0.5) * dx;          // midpoint of slice i
            area += (top(x) - bottom(x)) * dx;      // height times width
        }
        std::printf("n = %-4d area = %.6f\\n", n, area);
    }
    std::printf("exact:    area = %.6f\\n", 125.0 / 6.0);
}`,
          output: `n = 5    area = 21.250000
n = 50   area = 20.837500
n = 500  area = 20.833375
exact:    area = 20.833333`,
          annotations: [
            { lines: '3-4', text: 'The two boundary curves from the worked example: $4 - x^2$ on top, $x - 2$ below.' },
            { lines: 7, text: 'The intersection points we found by solving $4 - x^2 = x - 2$.' },
            { lines: 12, text: 'Sample each strip at its midpoint.' },
            { lines: 13, text: 'Strip area = (top − bottom) × width — the integrand of $\\int_a^b [f(x) - g(x)]\\,dx$.' },
          ],
        },
        {
          type: 'p',
          text: 'Ten times as many strips makes the error about a hundred times smaller ($0.417 \\to 0.004 \\to 0.00004$), the signature of the midpoint rule. You will study such error estimates in Calculus II\'s numerical integration lesson.',
        },
      ],
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'order',
      prompt: 'Order the steps for finding the area enclosed by $y = x + 2$ and $y = x^2$.',
      lines: [
        'Solve $x^2 = x + 2$ to get $x = -1$ and $x = 2$',
        'Test $x = 0$: $0 + 2 > 0^2$, so the line is on top',
        'Set up $\\int_{-1}^{2} \\left[(x + 2) - x^2\\right]dx$',
        'Evaluate $\\left[\\frac{x^2}{2} + 2x - \\frac{x^3}{3}\\right]_{-1}^{2} = \\frac{9}{2}$',
      ],
      distractors: ['Set up $\\int_{-1}^{2} \\left[x^2 - (x + 2)\\right]dx$'],
      explanation: 'Limits first (intersections), then which curve is on top, then the integral of top minus bottom, then evaluate: $\\left(2 + 4 - \\frac{8}{3}\\right) - \\left(\\frac{1}{2} - 2 + \\frac{1}{3}\\right) = \\frac{10}{3} + \\frac{7}{6} = \\frac{9}{2}$. The distractor subtracts in the wrong order and would give $-\\frac{9}{2}$.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'error',
      prompt: 'A student finds the area enclosed by $y = x^2$ and $y = 2x + 3$. Tap the first line that is wrong.',
      lines: [
        '$x^2 = 2x + 3 \\implies x^2 - 2x - 3 = 0 \\implies x = -1,\\ x = 3$',
        'At $x = 0$: $2(0) + 3 = 3 > 0 = 0^2$',
        '$A = \\int_{-1}^{3} \\left[x^2 - (2x + 3)\\right]dx$',
        '$= \\left[\\frac{x^3}{3} - x^2 - 3x\\right]_{-1}^{3} = -9 - \\frac{5}{3} = -\\frac{32}{3}$',
      ],
      errorLines: [3],
      explanation: 'Line 2 correctly shows the line $y = 2x + 3$ is on top, but line 3 then subtracts the line from the parabola — bottom minus top. The negative result in line 4 is the warning sign. Correct: $A = \\int_{-1}^{3} \\left(2x + 3 - x^2\\right)dx = \\left[x^2 + 3x - \\frac{x^3}{3}\\right]_{-1}^{3} = 9 - \\left(-\\frac{5}{3}\\right) = \\frac{32}{3}$.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'concept',
      title: 'Area between two rates: who is ahead?',
      blocks: [
        {
          type: 'p',
          text: 'Area between curves connects beautifully to the previous lesson. If two objects start at the same place with velocities $v_A(t)$ and $v_B(t)$, then by the [[net-change-theorem]] the gap between them after time $T$ is $\\int_0^T [v_A(t) - v_B(t)]\\,dt$. The area between the velocity graphs *is* the lead.',
        },
        {
          type: 'graph',
          x: [-0.4, 9.5],
          y: [-0.8, 9],
          functions: [
            { expr: '4', label: '$v_A = 4$ (drone A)', domain: [0, 9.5] },
            { expr: 'x', label: '$v_B = t$ (drone B)', color: 'red', domain: [0, 9.5] },
          ],
          areas: [
            { expr: '4', expr2: 'x', from: 0, to: 'min(T, 4)', color: 'green' },
            { expr: 'x', expr2: '4', from: 4, to: 'max(T, 4)', color: 'red' },
          ],
          vlines: [{ x: 'T', label: 't = T' }],
          sliders: [{ name: 'T', min: 0, max: 9, step: 0.1, value: 4, label: 'time $T$ (s)' }],
          readouts: [{ label: 'A\'s lead $\\int_0^T (4 - t)\\,dt = 4T - \\frac{T^2}{2} =$', expr: '4T - T^2/2', digits: 2 }],
          caption: 'Green: A is faster, so its lead grows. Red: B is faster and eats into the lead. B catches up when the red area equals the green area.',
        },
        {
          type: 'derivation',
          title: 'Drone A flies at $4$ m/s; drone B starts from rest with $v_B = t$ m/s. When does B catch up?',
          steps: [
            { tex: '\\text{lead}(T) = \\int_0^T (4 - t)\\,dt = 4T - \\tfrac{T^2}{2}', why: 'Net change in the gap between them: integrate the difference of the velocities.' },
            { tex: '\\text{lead}(4) = 16 - 8 = 8 \\text{ m}', why: 'The lead grows while $v_A > v_B$, i.e. until $t = 4$. This is the green area: a triangle with base $4$ and height $4$.' },
            { tex: '4T - \\tfrac{T^2}{2} = 0 \\implies T\\left(4 - \\tfrac{T}{2}\\right) = 0', why: 'B catches up when the gap returns to zero.' },
            { tex: 'T = 8 \\text{ s}', why: 'Discard $T = 0$ (the start). At $T = 8$ the red triangle (base $4$, height $4$) exactly cancels the green one.' },
          ],
          result: 'A leads by at most $8$ m (at $t = 4$ s), and B draws level at $t = 8$ s.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the maximum lead is at the crossing',
          text: 'The lead $L(T) = \\int_0^T (v_A - v_B)\\,dt$ has derivative $L\'(T) = v_A(T) - v_B(T)$ by FTC Part 1. It increases while A is faster and decreases while B is faster, so it peaks exactly where the velocity curves cross. Integrals and derivatives answering one question together: that is Calculus I in miniature.',
        },
      ],
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'fill',
      prompt: 'Summarise the two slicing methods.',
      template: 'With vertical strips you integrate with respect to ___ and each strip\'s height is ___. With horizontal strips you integrate with respect to ___ and each strip\'s length is ___.',
      blanks: [{ answers: ['$x$'] }, { answers: ['top − bottom'] }, { answers: ['$y$'] }, { answers: ['right − left'] }],
      wordBank: ['$x$', '$y$', 'top − bottom', 'right − left', 'bottom − top', 'left − right'],
      explanation: 'A vertical strip has width $dx$ and spans from the bottom curve to the top curve, so $A = \\int (\\text{top} - \\text{bottom})\\,dx$. A horizontal strip has thickness $dy$ and spans from the left curve to the right curve, so $A = \\int (\\text{right} - \\text{left})\\,dy$. Reversing either subtraction gives a negative answer.',
    },
  ],
  takeaways: [
    'Area between curves is a sum of thin strips: $A = \\int_a^b [f(x) - g(x)]\\,dx$, top minus bottom, valid even below the $x$-axis.',
    'When the region is "enclosed by" curves, the limits are the intersection points: set the curves equal and solve.',
    'If the curves cross inside the interval, split at each crossing: in general $A = \\int_a^b |f(x) - g(x)|\\,dx$.',
    'Horizontal slicing: $A = \\int_c^d [x_R(y) - x_L(y)]\\,dy$, right minus left, with $y$-limits. Choose the direction needing fewer integrals.',
    'A negative "area" always means the subtraction is backwards.',
    'The area between two velocity graphs is the gap between the objects — area between curves meets the Net Change Theorem.',
  ],
  reading: [
    {
      title: 'OpenStax Calculus Volume 1 — 6.1 Areas between Curves',
      url: 'https://openstax.org/books/calculus-volume-1/pages/6-1-areas-between-curves',
      source: 'openstax',
      note: 'Free textbook section covering vertical and horizontal slicing with many exercises.',
    },
    {
      title: "Paul's Online Notes — Area Between Curves",
      url: 'https://tutorial.math.lamar.edu/Classes/CalcI/AreaBetweenCurves.aspx',
      source: 'paul',
      note: 'Clear worked examples, including regions where the boundaries are functions of $y$.',
    },
    {
      title: 'Desmos Graphing Calculator',
      url: 'https://www.desmos.com/calculator',
      source: 'desmos',
      note: 'Graph two curves and shade between them with inequalities like $x^2 \\le y \\le 2x$ to check your sketches.',
    },
  ],
};
