import type { Lesson } from '../../types';

// Running example: D = { 0 <= x <= 2, x^2 <= y <= 2x }, f(x, y) = xy, integral 8/3.
// In the 3D plot, (u, v) in [0, 1]^2 parametrizes D: x = 2u, y = 4u^2 + v(4u - 4u^2).
const X = '2u';
const Y = '(4u^2 + v*(4u - 4u^2))';

export const lesson: Lesson = {
  id: 'calc3-general-regions',
  title: 'Double Integrals over General Regions',
  summary: 'Integrate over regions bounded by curves: type I and type II regions, reading limits off a sketch, reversing the order of integration, and area as a double integral.',
  minutes: 19,
  objectives: [
    'Describe a region as type I (vertical strips) or type II (horizontal strips) and write the matching iterated integral',
    'Set up limits from a sketch, splitting a region when one description needs two pieces',
    'Reverse the order of integration to turn an impossible inner integral into an easy one',
    'Compute areas and volumes as double integrals over general regions',
  ],
  steps: [
    // 1 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Beyond rectangles: type I regions',
      blocks: [
        {
          type: 'p',
          text: 'Real regions are rarely rectangles: a lake, a lamina cut along a curve, the shadow of a solid. To define $\\iint_D f\\,dA$ over a bounded region $D$, enclose $D$ in a rectangle $R$ and extend $f$ by zero outside $D$. The new function has jumps only along the boundary of $D$, so if that boundary is made of finitely many smooth curves it is still integrable, and $\\iint_D f\\,dA$ means $\\iint_R$ of the extended function.',
        },
        {
          type: 'p',
          text: 'That definition is clean but useless for computing. What you actually do is slice, as before; the only change is that the slices no longer all have the same length. Take $D$ to be the region between the line $y = 2x$ and the parabola $y = x^2$. A vertical line at position $x$ enters $D$ on the parabola and leaves on the line, so the inner integral in $y$ runs from $x^2$ to $2x$.',
        },
        {
          type: 'graph',
          x: [-0.4, 2.6],
          y: [-0.4, 5],
          functions: [
            { expr: '2x', label: '$y = 2x$ (top)', color: 'blue', domain: [-0.2, 2.25] },
            { expr: 'x^2', label: '$y = x^2$ (bottom)', color: 'purple', domain: [-0.4, 2.1] },
          ],
          areas: [{ expr: '2x', expr2: 'x^2', from: 0, to: 2, color: 'blue' }],
          segments: [{ from: ['s', 's^2'], to: ['s', '2s'], color: 'red', arrow: true, label: 'strip' }],
          points: [
            { x: 0, y: 0, label: '(0, 0)' },
            { x: 2, y: 4, label: '(2, 4)' },
          ],
          sliders: [{ name: 's', min: 0, max: 2, step: 0.05, value: 0.8, label: 'strip position $x$', play: true }],
          readouts: [
            { label: 'enters at $y = x^2 =$', expr: 's^2', digits: 3 },
            { label: 'leaves at $y = 2x =$', expr: '2s', digits: 3 },
          ],
          caption: 'Every vertical line through $D$ enters on the bottom curve $y = x^2$ and leaves on the top curve $y = 2x$. Those curves are the inner limits; the extreme strips, at $x = 0$ and $x = 2$, are the outer limits.',
        },
        {
          type: 'definition',
          term: '[[calc3-type-i-region|Type I region]]',
          text: '$D = \\{(x, y) : a \\le x \\le b,\\ g_1(x) \\le y \\le g_2(x)\\}$, with $g_1, g_2$ continuous. For such a region $\\displaystyle\\iint_D f\\,dA = \\int_a^b\\int_{g_1(x)}^{g_2(x)} f(x, y)\\,dy\\,dx$. Fubini\'s theorem extends to these regions.',
        },
        {
          type: 'plot3d',
          x: [0, 2],
          y: [0, 4],
          z: [0, 8],
          parametricSurfaces: [
            { x: X, y: Y, z: `${X}*${Y}`, u: [0, 1], v: [0, 1], color: 'blue', opacity: 0.6, label: 'top: $z = xy$' },
            { x: X, y: Y, z: '0', u: [0, 1], v: [0, 1], color: 'gray', opacity: 0.5, label: 'the base region $D$' },
            { x: 's', y: 's^2 + u*(2s - s^2)', z: 'v*s*(s^2 + u*(2s - s^2))', u: [0, 1], v: [0, 1], color: 'orange', opacity: 0.95, label: 'the slice at $x = s$' },
          ],
          curves: [
            { x: '2t', y: '4t^2', z: '8t^3', t: [0, 1], color: 'purple' },
            { x: '2t', y: '4t', z: '8t^2', t: [0, 1], color: 'blue' },
          ],
          sliders: [{ name: 's', min: 0.05, max: 1.95, step: 0.05, value: 1.3, label: 'slice position $x = s$', play: true }],
          readouts: [{ label: 'slice area $A(s) = 2s^3 - \\frac{s^5}{2} =$', expr: '2s^3 - s^5/2', digits: 4 }],
          view: { azimuth: 165, elevation: 32 },
          caption: 'The solid under $z = xy$ above $D$. A slice at $x = s$ now only runs from $y = s^2$ to $y = 2s$, so its width changes with $s$. Adding up the slice areas from $x = 0$ to $x = 2$ gives the volume $\\frac83$.',
        },
        {
          type: 'derivation',
          title: '$\\displaystyle\\iint_D xy\\,dA$ with vertical strips',
          steps: [
            { tex: '\\int_0^2\\int_{x^2}^{2x} xy\\,dy\\,dx', why: 'Type I: $x$ runs between the outermost strips $0$ and $2$ (where the curves meet, $x^2 = 2x$), and $y$ runs from the bottom curve to the top curve.' },
            { tex: '\\int_{x^2}^{2x} xy\\,dy = \\left[\\tfrac12 x y^2\\right]_{y=x^2}^{y=2x} = \\tfrac12 x(4x^2 - x^4) = 2x^3 - \\tfrac12 x^5', why: 'Partial integration in $y$ with $x$ constant. The limits are functions of $x$, so substitute them and simplify; the result depends on $x$ alone.' },
            { tex: '\\int_0^2 \\left(2x^3 - \\tfrac12 x^5\\right) dx = \\left[\\tfrac12 x^4 - \\tfrac{1}{12}x^6\\right]_0^2', why: 'Integrate the slice area over the outer interval.' },
            { tex: '= 8 - \\tfrac{64}{12} = \\tfrac{8}{3}', why: '$2^4 = 16$ and $2^6 = 64$.' },
          ],
          result: '$\\iint_D xy\\,dA = \\frac83 \\approx 2.667$.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Outer limits are always constants',
          text: 'The inner limits may depend on the outer variable; the outer limits never may. After both integrations the answer must be a number. If a variable survives to the end, the limits were nested wrongly.',
        },
      ],
    },
    // 2
    {
      kind: 'mcq',
      prompt: 'Which iterated integral describes $\\iint_D f\\,dA$ for the region $D$ bounded by $y = x$ and $y = x^2$, using vertical strips?',
      graph: {
        type: 'graph',
        x: [-0.3, 1.4],
        y: [-0.3, 1.4],
        equal: true,
        functions: [
          { expr: 'x', label: '$y = x$', color: 'blue', domain: [-0.2, 1.3] },
          { expr: 'x^2', label: '$y = x^2$', color: 'purple', domain: [-0.3, 1.15] },
        ],
        areas: [{ expr: 'x', expr2: 'x^2', from: 0, to: 1, color: 'blue' }],
      },
      options: [
        { text: '$\\displaystyle\\int_0^1\\int_{x^2}^{x} f(x, y)\\,dy\\,dx$', correct: true, why: 'On $0 < x < 1$ the line is above the parabola ($x > x^2$), so a vertical strip enters at $y = x^2$ and leaves at $y = x$.' },
        { text: '$\\displaystyle\\int_0^1\\int_{x}^{x^2} f(x, y)\\,dy\\,dx$', why: 'The limits are upside down: on $(0, 1)$, $x^2 < x$, so this integrates from top to bottom and gives the negative of the answer.' },
        { text: '$\\displaystyle\\int_{x^2}^{x}\\int_0^1 f(x, y)\\,dy\\,dx$', why: 'The variable limits are on the outside. The outer integral must have constant limits, or the answer will still contain $x$.' },
        { text: '$\\displaystyle\\int_0^1\\int_0^1 f(x, y)\\,dy\\,dx$', why: 'That is the whole unit square, not the thin region between the curves.' },
      ],
      explanation: 'The curves meet where $x = x^2$, at $x = 0$ and $x = 1$: those are the constant outer limits. For each $x$ in between, the strip runs from the lower curve $y = x^2$ to the upper curve $y = x$. With $f = 1$ this gives the area $\\int_0^1 (x - x^2)\\,dx = \\frac16$.',
    },
    // 3 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Type II regions: horizontal strips',
      blocks: [
        {
          type: 'p',
          text: 'You can also sweep the region with horizontal strips. Solve each boundary curve for $x$: the line $y = 2x$ becomes $x = \\frac{y}{2}$ and the parabola $y = x^2$ (with $x \\ge 0$) becomes $x = \\sqrt{y}$. A horizontal line at height $y$ enters $D$ on the left at $x = \\frac{y}{2}$ and leaves on the right at $x = \\sqrt{y}$, for $0 \\le y \\le 4$.',
        },
        {
          type: 'graph',
          x: [-0.4, 2.6],
          y: [-0.4, 5],
          functions: [
            { expr: '2x', label: '$x = \\frac{y}{2}$ (left)', color: 'blue', domain: [-0.2, 2.25] },
            { expr: 'x^2', label: '$x = \\sqrt{y}$ (right)', color: 'purple', domain: [-0.4, 2.1] },
          ],
          areas: [{ expr: '2x', expr2: 'x^2', from: 0, to: 2, color: 'green' }],
          segments: [{ from: ['k/2', 'k'], to: ['sqrt(k)', 'k'], color: 'red', arrow: true, label: 'strip' }],
          sliders: [{ name: 'k', min: 0, max: 4, step: 0.05, value: 1.5, label: 'strip height $y$', play: true }],
          readouts: [
            { label: 'enters at $x = \\frac{y}{2} =$', expr: 'k/2', digits: 3 },
            { label: 'leaves at $x = \\sqrt{y} =$', expr: 'sqrt(k)', digits: 3 },
          ],
          caption: 'The same region swept left to right. Now the curves are the **inner $x$-limits**, and the outer limits are the lowest and highest strips, $y = 0$ and $y = 4$.',
        },
        {
          type: 'definition',
          term: '[[calc3-type-ii-region|Type II region]]',
          text: '$D = \\{(x, y) : c \\le y \\le d,\\ h_1(y) \\le x \\le h_2(y)\\}$, with $h_1, h_2$ continuous. Then $\\displaystyle\\iint_D f\\,dA = \\int_c^d\\int_{h_1(y)}^{h_2(y)} f(x, y)\\,dx\\,dy$.',
        },
        {
          type: 'derivation',
          title: 'The same integral with horizontal strips',
          steps: [
            { tex: '\\int_0^4\\int_{y/2}^{\\sqrt{y}} xy\\,dx\\,dy', why: 'Type II: left curve $x = \\frac{y}{2}$, right curve $x = \\sqrt{y}$, and $y$ from $0$ to $4$.' },
            { tex: '\\int_{y/2}^{\\sqrt{y}} xy\\,dx = \\left[\\tfrac12 x^2 y\\right]_{x=y/2}^{x=\\sqrt{y}} = \\tfrac12 y\\left(y - \\tfrac{y^2}{4}\\right) = \\tfrac12 y^2 - \\tfrac18 y^3', why: 'Now $y$ is the constant. $(\\sqrt{y})^2 = y$ and $\\left(\\frac{y}{2}\\right)^2 = \\frac{y^2}{4}$.' },
            { tex: '\\int_0^4 \\left(\\tfrac12 y^2 - \\tfrac18 y^3\\right) dy = \\left[\\tfrac16 y^3 - \\tfrac{1}{32}y^4\\right]_0^4 = \\tfrac{64}{6} - 8 = \\tfrac83', why: '$4^3 = 64$ and $4^4 = 256$, and $\\frac{256}{32} = 8$.' },
          ],
          result: 'Same answer, $\\frac83$, as Fubini\'s theorem promises: the two orders slice the same solid in different directions.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the limits come from a sketch, not from algebra',
          text: 'The integrand plays no part in the limits. Limits describe the **region**, and the clearest description comes from a picture: draw a typical strip, follow it in the direction of integration, and note which curve it enters through and which it exits through. Algebra only tells you where the curves cross (here $x^2 = 2x$ at $x = 0, 2$). Students who skip the sketch tend to put the top and bottom curves the wrong way round.',
        },
      ],
    },
    // 4
    {
      kind: 'numeric',
      prompt: 'Evaluate $\\displaystyle\\iint_D (x + y)\\,dA$, where $D$ is the region under $y = x^2$ above the $x$-axis for $0 \\le x \\le 1$.',
      hint: 'Type I: $\\int_0^1\\int_0^{x^2} (x + y)\\,dy\\,dx$. The inner integral is $xy + \\frac{y^2}{2}$ evaluated from $0$ to $x^2$.',
      answer: '7/20',
      answerTex: '\\frac{7}{20}',
      label: '$\\iint_D (x + y)\\,dA =$',
      explanation: 'Inner: $\\left[xy + \\tfrac12 y^2\\right]_0^{x^2} = x^3 + \\tfrac12 x^4$. Outer: $\\int_0^1 \\left(x^3 + \\tfrac12 x^4\\right) dx = \\tfrac14 + \\tfrac{1}{10} = \\tfrac{7}{20} = 0.35$. A quick bound: on $D$, $x + y \\le 2$, and $D$ has area $\\frac13$, so the integral must be at most $\\frac23$. ✓',
    },
    // 5 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Choosing the description: when one type needs two pieces',
      blocks: [
        {
          type: 'p',
          text: 'Many regions are both type I and type II, like the one above. Some are only one type, and some are neither and must be split into pieces. Since $\\iint_{D_1 \\cup D_2} f\\,dA = \\iint_{D_1} f\\,dA + \\iint_{D_2} f\\,dA$ when the pieces overlap only along boundary curves, splitting always works, but it doubles the work. A good choice of strips avoids it.',
        },
        {
          type: 'p',
          text: 'Take $D$ bounded by the line $y = x - 1$ and the parabola $y^2 = 2x + 6$, which opens to the right. They meet where $(x - 1)^2 = 2x + 6$, so $x^2 - 4x - 5 = 0$ and $x = -1$ or $x = 5$: the points $(-1, -2)$ and $(5, 4)$.',
        },
        {
          type: 'graph',
          x: [-4, 6.5],
          y: [-4, 5.5],
          equal: true,
          implicit: [{ expr: 'y^2 - 2x - 6', levels: [0], label: '$y^2 = 2x + 6$, i.e. $x = \\frac{y^2}{2} - 3$', color: 'purple' }],
          functions: [{ expr: 'x - 1', label: '$y = x - 1$, i.e. $x = y + 1$', color: 'blue', domain: [-3, 6.5] }],
          areas: [
            { expr: 'sqrt(2x + 6)', expr2: '-sqrt(2x + 6)', from: -3, to: -1, color: 'green' },
            { expr: 'sqrt(2x + 6)', expr2: 'x - 1', from: -1, to: 5, color: 'green' },
          ],
          segments: [{ from: ['k^2/2 - 3', 'k'], to: ['k + 1', 'k'], color: 'red', arrow: true }],
          vlines: [{ x: -1, label: 'x = −1', color: 'gray' }],
          points: [
            { x: -1, y: -2, label: '(−1, −2)' },
            { x: 5, y: 4, label: '(5, 4)' },
          ],
          sliders: [{ name: 'k', min: -2, max: 4, step: 0.05, value: 1, label: 'strip height $y$', play: true }],
          caption: 'Horizontal strips always enter on the parabola $x = \\frac{y^2}{2} - 3$ and leave on the line $x = y + 1$: one integral. Vertical strips change their bottom curve at $x = -1$ (gray line): left of it they run from the lower half of the parabola to the upper half, right of it from the line to the parabola, so a type I set-up needs two integrals.',
        },
        {
          type: 'derivation',
          title: '$\\displaystyle\\iint_D xy\\,dA$ as a type II region',
          steps: [
            { tex: '\\int_{-2}^{4}\\int_{y^2/2 - 3}^{y + 1} xy\\,dx\\,dy', why: 'One description: $-2 \\le y \\le 4$, from the left curve $x = \\frac{y^2}{2} - 3$ to the right curve $x = y + 1$.' },
            { tex: '= \\int_{-2}^{4} \\frac{y}{2}\\left[(y + 1)^2 - \\left(\\tfrac{y^2}{2} - 3\\right)^2\\right] dy', why: 'Inner integral: $\\int xy\\,dx = \\frac12 x^2 y$, evaluated at the two curves.' },
            { tex: '= \\frac12\\int_{-2}^{4} \\left(-\\tfrac14 y^5 + 4y^3 + 2y^2 - 8y\\right) dy', why: 'Expand: $(y + 1)^2 - \\left(\\frac{y^2}{2} - 3\\right)^2 = -\\frac{y^4}{4} + 4y^2 + 2y - 8$, then multiply by $y$.' },
            { tex: '= \\frac12\\left[-\\tfrac{y^6}{24} + y^4 + \\tfrac23 y^3 - 4y^2\\right]_{-2}^{4} = \\frac12(72) = 36', why: 'At $y = 4$ the bracket is $-\\frac{512}{3} + 256 + \\frac{128}{3} - 64 = \\frac{192}{3} = 64$; at $y = -2$ it is $-\\frac{8}{3} + 16 - \\frac{16}{3} - 16 = -8$. The difference is $72$.' },
          ],
          result: '$\\iint_D xy\\,dA = 36$. The type I route (two integrals, with $\\pm\\sqrt{2x + 6}$ limits) gives the same $36$ with far more algebra.',
        },
        {
          type: 'steps',
          items: [
            { title: 'Sketch', text: 'Draw the boundary curves and find where they intersect.' },
            { title: 'Pick a strip direction', text: 'Vertical strips if every vertical line enters through one curve and leaves through one curve; horizontal strips if the same is true sideways. Prefer the one that does not change curves partway.' },
            { title: 'Inner limits', text: 'Follow a typical strip: the curve it enters through is the lower limit, the curve it leaves through is the upper limit, written as functions of the outer variable.' },
            { title: 'Outer limits', text: 'The constant values of the outer variable at the first and last strips.' },
          ],
        },
      ],
    },
    // 6
    {
      kind: 'fill',
      prompt: 'The region $D$ under $y = \\sqrt{x}$, above the $x$-axis, for $0 \\le x \\le 4$ is type I: $0 \\le x \\le 4$, $0 \\le y \\le \\sqrt{x}$. Describe it as a type II region.',
      template: '$D$: $0 \\le y \\le$ ___ , and ___ $\\le x \\le$ ___',
      blanks: [{ answers: ['$2$'] }, { answers: ['$y^2$'] }, { answers: ['$4$'] }],
      wordBank: ['$2$', '$y^2$', '$4$', '$\\sqrt{y}$', '$0$', '$\\sqrt{x}$'],
      hint: 'Sketch it. The top of the region is at $y = \\sqrt{4}$. A horizontal strip enters through the curve (solve $y = \\sqrt{x}$ for $x$) and leaves through the line $x = 4$.',
      explanation: 'The highest point of $D$ is $(4, 2)$, so $0 \\le y \\le 2$. A horizontal strip at height $y$ starts on the curve $y = \\sqrt{x}$, i.e. $x = y^2$, and ends at the vertical line $x = 4$. So $\\iint_D f\\,dA = \\int_0^2\\int_{y^2}^{4} f\\,dx\\,dy$. Check with $f = 1$: $\\int_0^2 (4 - y^2)\\,dy = 8 - \\frac83 = \\frac{16}{3}$, and $\\int_0^4 \\sqrt{x}\\,dx = \\frac23 \\cdot 8 = \\frac{16}{3}$. ✓',
    },
    // 7 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Reversing the order of integration',
      blocks: [
        {
          type: 'p',
          text: 'Sometimes the order you are handed is impossible. Try $\\displaystyle\\int_0^1\\int_x^1 \\sin(y^2)\\,dy\\,dx$: the inner integral needs an antiderivative of $\\sin(y^2)$, and there is no elementary one. But a double integral does not care how you slice it. Read the region off the limits, redraw it, and describe it the other way.',
        },
        {
          type: 'graph',
          x: [-0.25, 1.35],
          y: [-0.25, 1.35],
          equal: true,
          functions: [{ expr: 'x', label: '$y = x$', color: 'blue', domain: [-0.2, 1.3] }],
          hlines: [{ y: 1, label: 'y = 1', color: 'purple' }],
          areas: [{ expr: '1', expr2: 'x', from: 0, to: 1, color: 'blue' }],
          segments: [
            { from: [0.3, 0.3], to: [0.3, 1], color: 'gray', dashed: true, arrow: true },
            { from: [0, 'k'], to: ['k', 'k'], color: 'red', arrow: true },
          ],
          sliders: [{ name: 'k', min: 0.02, max: 1, step: 0.02, value: 0.7, label: 'horizontal strip at $y$' }],
          caption: 'The limits $0 \\le x \\le 1$, $x \\le y \\le 1$ describe the triangle above $y = x$. The given order uses vertical strips (gray dashed). Reversed, each horizontal strip (red) runs from $x = 0$ to $x = y$, for $0 \\le y \\le 1$.',
        },
        {
          type: 'derivation',
          title: 'Reverse $\\displaystyle\\int_0^1\\int_x^1 \\sin(y^2)\\,dy\\,dx$',
          steps: [
            { tex: 'D = \\{0 \\le x \\le 1,\\ x \\le y \\le 1\\}', why: 'Read the region off the given limits: outer $x$ from $0$ to $1$, inner $y$ from the line $y = x$ up to $y = 1$. Sketch it: a triangle with vertices $(0, 0)$, $(0, 1)$, $(1, 1)$.' },
            { tex: 'D = \\{0 \\le y \\le 1,\\ 0 \\le x \\le y\\}', why: 'Describe the same triangle with horizontal strips: each starts on the $y$-axis and ends on the line $x = y$.' },
            { tex: '\\int_0^1\\int_0^y \\sin(y^2)\\,dx\\,dy = \\int_0^1 y\\sin(y^2)\\,dy', why: 'Now the inner integral is in $x$, and $\\sin(y^2)$ is a constant: $\\int_0^y \\sin(y^2)\\,dx = y\\sin(y^2)$.' },
            { tex: '= \\left[-\\tfrac12\\cos(y^2)\\right]_0^1 = \\tfrac12(1 - \\cos 1)', why: '[[u-substitution]] $u = y^2$: the factor $y$ produced by the inner integral is exactly the $du$ we needed.' },
          ],
          result: '$\\approx 0.2298$. A numerical double integral of the original order gives the same $0.229849$.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'The tell-tale sign',
          text: 'Exercises that ask you to reverse the order usually feature an inner integrand with no elementary antiderivative: $e^{x^2}$, $\\sin(y^2)$, $\\sqrt{x^3 + 1}$, $\\frac{\\sin x}{x}$. After reversing, the new inner integral is trivial (the integrand is constant in that variable) and multiplies by exactly the factor that a $u$-substitution needs.',
        },
        {
          type: 'compare',
          left: {
            title: 'Wrong',
            tone: 'bad',
            tex: ['\\int_0^1\\int_x^1 f\\,dy\\,dx = \\int_0^1\\int_y^1 f\\,dx\\,dy'],
            text: 'Swapping the letters in the limits is not reversing the order. This describes a different triangle (below the line $y = x$).',
          },
          right: {
            title: 'Right',
            tone: 'good',
            tex: ['\\int_0^1\\int_x^1 f\\,dy\\,dx = \\int_0^1\\int_0^y f\\,dx\\,dy'],
            text: 'Sketch the region, then read horizontal strips off the sketch.',
          },
        },
      ],
    },
    // 8
    {
      kind: 'numeric',
      prompt: 'Evaluate $\\displaystyle\\int_0^1\\int_y^1 e^{x^2}\\,dx\\,dy$ by reversing the order of integration.',
      hint: 'The region is $0 \\le y \\le 1$, $y \\le x \\le 1$: the triangle below $y = x$. As a type I region it is $0 \\le x \\le 1$, $0 \\le y \\le x$.',
      answer: '(e - 1)/2',
      answerTex: '\\frac{e - 1}{2}',
      label: 'value $=$',
      explanation: 'Reversed: $\\int_0^1\\int_0^x e^{x^2}\\,dy\\,dx = \\int_0^1 x e^{x^2}\\,dx = \\left[\\tfrac12 e^{x^2}\\right]_0^1 = \\frac{e - 1}{2} \\approx 0.8591$. In the given order the inner integral $\\int_y^1 e^{x^2}\\,dx$ has no elementary antiderivative, so reversing is the only exact route. A decimal such as $0.859$ is accepted.',
    },
    // 9
    {
      kind: 'error',
      prompt: 'A student reverses the order in $\\displaystyle\\int_0^1\\int_{x^2}^{1} x^3\\sin(y^3)\\,dy\\,dx$. Tap the first wrong line.',
      lines: [
        'Region: $0 \\le x \\le 1$, $x^2 \\le y \\le 1$, the part of the unit square above the parabola $y = x^2$.',
        'As a type II region: $0 \\le y \\le 1$, $\\sqrt{y} \\le x \\le 1$.',
        '$\\displaystyle\\int_0^1\\int_{\\sqrt{y}}^{1} x^3\\sin(y^3)\\,dx\\,dy = \\int_0^1 \\frac{1 - y^2}{4}\\sin(y^3)\\,dy$',
        'This still has no elementary antiderivative, so the integral cannot be evaluated exactly.',
      ],
      errorLines: [2],
      explanation: 'Line 2 takes the wrong side of the parabola. A horizontal strip at height $y$ in the region **above** $y = x^2$ starts on the $y$-axis ($x = 0$) and ends on the parabola, $x = \\sqrt{y}$. Correctly: $\\int_0^1\\int_0^{\\sqrt{y}} x^3\\sin(y^3)\\,dx\\,dy = \\int_0^1 \\frac{y^2}{4}\\sin(y^3)\\,dy = \\left[-\\frac{1}{12}\\cos(y^3)\\right]_0^1 = \\frac{1 - \\cos 1}{12} \\approx 0.0383$. When the reversed integral refuses to work out, suspect the limits first.',
    },
    // 10 ────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Area, volume and a numerical check',
      blocks: [
        {
          type: 'p',
          text: 'Integrate the constant $1$ and you get the volume of a slab of height $1$ over $D$, which numerically equals the area of $D$:',
        },
        {
          type: 'theorem',
          name: 'Area as a double integral',
          tex: 'A(D) = \\iint_D 1\\,dA',
          text: 'For a type I region this is $\\int_a^b [g_2(x) - g_1(x)]\\,dx$, the "top minus bottom" formula from Calculus I. The double integral simply makes the inner step visible.',
        },
        {
          type: 'p',
          text: 'Other properties carry over from rectangles: linearity, comparison, and **additivity** over regions that overlap only on their boundaries. Comparison gives quick estimates: if $m \\le f \\le M$ on $D$, then $m\\,A(D) \\le \\iint_D f\\,dA \\le M\\,A(D)$.',
        },
        {
          type: 'p',
          text: 'Volumes of solids with slanted tops work the same way. Find the volume of the tetrahedron bounded by the planes $x + 2y + z = 2$, $x = 2y$, $x = 0$ and $z = 0$.',
        },
        {
          type: 'plot3d',
          x: [0, 1],
          y: [0, 1],
          z: [0, 2],
          parametricSurfaces: [
            { x: 'u', y: 'u/2 + v*(1 - u)', z: '2 - 2u - 2v*(1 - u)', u: [0, 1], v: [0, 1], color: 'blue', opacity: 0.6, label: 'top: $z = 2 - x - 2y$' },
            { x: 'u', y: 'u/2 + v*(1 - u)', z: '0', u: [0, 1], v: [0, 1], color: 'gray', opacity: 0.55, label: 'base triangle $D$' },
            { x: '0', y: 'u', z: 'v*(2 - 2u)', u: [0, 1], v: [0, 1], color: 'green', opacity: 0.35, label: 'the plane $x = 0$' },
            { x: 'u', y: 'u/2', z: 'v*(2 - 2u)', u: [0, 1], v: [0, 1], color: 'orange', opacity: 0.45, label: 'the plane $x = 2y$' },
          ],
          view: { azimuth: 70, elevation: 24 },
          caption: 'The tetrahedron with vertices $(0, 0, 0)$, $(0, 1, 0)$, $(1, \\tfrac12, 0)$ and $(0, 0, 2)$. Its shadow on the $xy$-plane is the gray triangle $D$, bounded by $x = 0$, $x = 2y$ and $x + 2y = 2$ (where the top meets the floor).',
        },
        {
          type: 'derivation',
          title: 'Volume of the tetrahedron',
          steps: [
            { tex: 'D: \\ 0 \\le x \\le 1, \\quad \\tfrac{x}{2} \\le y \\le 1 - \\tfrac{x}{2}', why: 'The floor edges are $y = \\frac{x}{2}$ (from $x = 2y$) and $y = 1 - \\frac{x}{2}$ (from $x + 2y = 2$ with $z = 0$). They meet at $x = 1$.' },
            { tex: 'V = \\int_0^1\\int_{x/2}^{1 - x/2} (2 - x - 2y)\\,dy\\,dx', why: 'Height of the solid above $(x, y)$: the top plane solved for $z$, minus the floor $z = 0$.' },
            { tex: '= \\int_0^1 \\Big[(2 - x)y - y^2\\Big]_{y = x/2}^{y = 1 - x/2} dx = \\int_0^1 (x^2 - 2x + 1)\\,dx', why: 'At the upper limit the bracket is $(2 - x)(1 - \\frac{x}{2}) - (1 - \\frac{x}{2})^2 = (1 - \\frac{x}{2})^2$; at the lower limit it is $(2 - x)\\frac{x}{2} - \\frac{x^2}{4} = x - \\frac34 x^2$. Subtract: $1 - 2x + x^2$.' },
            { tex: '= \\int_0^1 (1 - x)^2\\,dx = \\tfrac13', why: 'Antiderivative $-\\frac13(1 - x)^3$, evaluated from $0$ to $1$.' },
          ],
          result: '$V = \\frac13$. Check with geometry: the apex $(0, 0, 2)$ sits at height $2$ directly above the corner $(0, 0)$ of the base triangle $D$, whose area is $\\frac12 \\cdot 1 \\cdot 1 = \\frac12$, so $V = \\frac13 \\cdot \\frac12 \\cdot 2 = \\frac13$. ✓',
        },
        {
          type: 'code',
          title: 'general_region.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdio>

// Integrate f(x, y) = xy over D: 0 <= x <= 2, x^2 <= y <= 2x. Exact: 8/3.
double f(double x, double y) { return x * y; }
double g1(double x) { return x * x; }   // bottom curve
double g2(double x) { return 2.0 * x; } // top curve

// (a) Extend f by zero: midpoint grid on the box [0,2] x [0,4], keep cells whose center is in D.
double masked(int n) {
    const double dx = 2.0 / n, dy = 4.0 / n;
    double sum = 0.0;
    for (int i = 0; i < n; ++i)
        for (int j = 0; j < n; ++j) {
            const double x = (i + 0.5) * dx, y = (j + 0.5) * dy;
            if (g1(x) <= y && y <= g2(x)) sum += f(x, y);
        }
    return sum * dx * dy;
}

// (b) Type I iterated midpoint rule: each column gets its own y-limits.
double iterated(int n) {
    const double dx = 2.0 / n;
    double sum = 0.0;
    for (int i = 0; i < n; ++i) {
        const double x = (i + 0.5) * dx;
        const double c = g1(x), d = g2(x), dy = (d - c) / n;
        double inner = 0.0;
        for (int j = 0; j < n; ++j) inner += f(x, c + (j + 0.5) * dy);
        sum += inner * dy;              // area of the slice at x
    }
    return sum * dx;
}

int main() {
    const double exact = 8.0 / 3.0;
    for (int n = 10; n <= 1000; n *= 10)
        std::printf("n = %4d  masked error = %.6f  iterated error = %.6f\\n",
                    n, std::fabs(masked(n) - exact), std::fabs(iterated(n) - exact));
}`,
          output: `n =   10  masked error = 1.170133  iterated error = 0.026433
n =  100  masked error = 0.102152  iterated error = 0.000267
n = 1000  masked error = 0.010573  iterated error = 0.000003`,
          annotations: [
            { lines: '10-19', text: 'The "extend by zero" definition, literally: test each cell center against the region. This is how a rasterizer decides which pixels a shape covers.' },
            { lines: '22-33', text: 'The type I iterated integral: the inner loop spans exactly $g_1(x) \\le y \\le g_2(x)$, so no cell straddles the boundary.' },
            { lines: 37, text: 'Ten times more cells per side: the masked error drops about $10\\times$ (it behaves like $\\frac1n$), the iterated error about $100\\times$ (like $\\frac{1}{n^2}$).' },
          ],
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Jagged edges cost accuracy',
          text: 'The masked sum treats every boundary cell as all-in or all-out, the same staircase error you see as aliasing on a rasterized edge. Its error is proportional to the number of boundary cells times the cell area, roughly $\\frac1n$. Following the boundary exactly with variable limits, as the type I integral does, restores the midpoint rule\'s $\\frac{1}{n^2}$.',
        },
      ],
    },
    // 11
    {
      kind: 'truefalse',
      prompt: 'Reversing the order of integration in $\\displaystyle\\int_0^1\\int_0^x f(x, y)\\,dy\\,dx$ gives $\\displaystyle\\int_0^1\\int_0^y f(x, y)\\,dx\\,dy$.',
      answer: false,
      explanation: 'The given limits describe the triangle $0 \\le y \\le x \\le 1$, below the line $y = x$, with vertices $(0, 0)$, $(1, 0)$, $(1, 1)$. A horizontal strip at height $y$ runs from the line $x = y$ to the edge $x = 1$, so the reversed integral is $\\int_0^1\\int_y^1 f\\,dx\\,dy$. The proposed answer describes the *other* half of the unit square. With $f = x$, the original gives $\\int_0^1 x^2\\,dx = \\frac13$, while the proposed one gives $\\int_0^1 \\frac{y^2}{2}\\,dy = \\frac16$.',
    },
    // 12
    {
      kind: 'order',
      prompt: 'Put the steps for reversing the order of a double integral in order.',
      lines: [
        'Read the region off the given limits: outer variable between constants, inner variable between two curves',
        'Sketch the region and label each boundary curve',
        'Solve the boundary curves for the other variable and draw a strip in the new direction',
        'Write the new inner limits (entry curve to exit curve) and constant outer limits, then evaluate',
      ],
      distractors: ['Swap the two pairs of limits and swap $dx$ with $dy$'],
      explanation: 'Reversing is about the region, not the symbols. The limits define the region; the sketch shows its shape; the new strips (after solving each curve for the other variable) give the new limits. The distractor is the most common wrong method: just swapping the limits around.',
    },
    // 13
    {
      kind: 'mcq',
      prompt: 'Which double integral gives the **area** of the region between the curves $y = x^2$ and $y = 2x$?',
      options: [
        { text: '$\\displaystyle\\int_0^2\\int_{x^2}^{2x} xy\\,dy\\,dx$', why: 'That integrates $f = xy$, giving the volume $\\frac83$ under $z = xy$. For area the integrand is $1$.' },
        { text: '$\\displaystyle\\int_0^4\\int_{y/2}^{\\sqrt{y}} 1\\,dx\\,dy$', correct: true, why: 'Type II description of the region with integrand $1$: horizontal strips from $x = \\frac{y}{2}$ to $x = \\sqrt{y}$. It equals $\\int_0^4 (\\sqrt{y} - \\frac{y}{2})\\,dy = \\frac{16}{3} - 4 = \\frac43$.' },
        { text: '$\\displaystyle\\int_0^2\\int_{2x}^{x^2} 1\\,dy\\,dx$', why: 'The limits are reversed (on $(0, 2)$, $2x > x^2$), so this gives $-\\frac43$.' },
        { text: '$\\displaystyle\\int_0^4\\int_{\\sqrt{y}}^{y/2} 1\\,dx\\,dy$', why: 'On $(0, 4)$, $\\frac{y}{2} < \\sqrt{y}$, so these limits run right to left and give $-\\frac43$.' },
      ],
      explanation: 'Area is $\\iint_D 1\\,dA$. In type I form: $\\int_0^2 (2x - x^2)\\,dx = 4 - \\frac83 = \\frac43$. In type II form: $\\int_0^4 \\left(\\sqrt{y} - \\frac{y}{2}\\right) dy = \\frac23 \\cdot 8 - 4 = \\frac43$. Either description works, as long as each strip runs from its entry curve to its exit curve.',
    },
  ],
  takeaways: [
    'Over a general region, the inner limits are the curves a typical strip enters and leaves through; the outer limits are constants.',
    'Type I (vertical strips): $\\int_a^b\\int_{g_1(x)}^{g_2(x)} f\\,dy\\,dx$. Type II (horizontal strips): $\\int_c^d\\int_{h_1(y)}^{h_2(y)} f\\,dx\\,dy$.',
    'Choose the description that does not change curves partway; otherwise split the region and add.',
    'To reverse the order, sketch the region and re-read it with strips in the other direction; never just swap the limits.',
    '$A(D) = \\iint_D 1\\,dA$, and volume between $z = 0$ and $z = f$ over $D$ is $\\iint_D f\\,dA$.',
  ],
  reading: [
    {
      title: 'OpenStax Calculus Volume 3 — Chapter 5: Multiple Integration',
      url: 'https://openstax.org/details/books/calculus-volume-3',
      source: 'openstax',
      note: 'Section 5.2 covers type I and type II regions, decomposing regions and changing the order of integration, with many sketches.',
    },
    {
      title: "Paul's Online Math Notes — Calculus III",
      url: 'https://tutorial.math.lamar.edu/Classes/CalcIII/CalcIII.aspx',
      source: 'other',
      note: 'The section on double integrals over general regions has a long set of worked limit set-ups and order reversals.',
    },
    {
      title: 'Khan Academy — Multivariable calculus',
      url: 'https://www.khanacademy.org/math/multivariable-calculus',
      source: 'khan',
      note: 'The double integrals videos show how to read limits from a sketch for non-rectangular regions.',
    },
  ],
};
