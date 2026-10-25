import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'calc2-numerical-integration',
  title: 'Numerical Integration',
  summary: 'When no antiderivative formula exists (or you only have data), approximate the integral: midpoint, trapezoidal and Simpson\'s rules, with guaranteed error bounds.',
  minutes: 18,
  objectives: [
    'Approximate a definite integral with the midpoint, trapezoidal and Simpson\'s rules',
    'Explain where each formula comes from (rectangles, trapezoids, parabolas)',
    'Use concavity to predict whether the trapezoidal and midpoint rules over- or underestimate',
    'Use error bounds to choose $n$ that guarantees a required accuracy',
    'Apply Simpson\'s rule to tabulated data and implement it in C++',
  ],
  steps: [
    {
      kind: 'concept',
      title: 'Why approximate an integral?',
      blocks: [
        {
          type: 'p',
          text: 'The [[fundamental-theorem-of-calculus]] evaluates $\\int_a^b f(x)\\,dx$ as $F(b) - F(a)$ — but only if you can find an antiderivative $F$. Often you cannot:',
        },
        {
          type: 'list',
          items: [
            '**No formula exists.** $\\int_0^1 e^{-x^2}\\,dx$ is a definite number, but $e^{-x^2}$ has no elementary antiderivative ([[nonelementary-integral]]).',
            '**The function is only data.** A speedometer log, a sensor reading every 10 ms, or the positions your game recorded each frame. There is no formula to integrate at all.',
            '**A formula exists but is too costly.** A CAS answer with fifty terms is slower to evaluate than a good approximation.',
          ],
        },
        {
          type: 'p',
          text: 'You already know one approximation: a [[riemann-sum]]. Split $[a, b]$ into $n$ subintervals of width $\\Delta x = \\frac{b - a}{n}$ with endpoints $x_i = a + i\\,\\Delta x$, and add up rectangle areas. Left and right sums work, but they converge slowly: their error shrinks only like $\\frac{1}{n}$. This lesson builds three far better rules from the same grid of points.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why better rules matter',
          text: 'Each function evaluation costs time. If a method\'s error shrinks like $\\frac{1}{n}$, ten times the accuracy costs ten times the work. If it shrinks like $\\frac{1}{n^4}$ (Simpson\'s rule), doubling $n$ alone gives about sixteen times the accuracy. Smarter formulas beat brute force by orders of magnitude.',
        },
      ],
    },
    {
      kind: 'concept',
      title: 'The midpoint rule',
      blocks: [
        {
          type: 'p',
          text: 'Instead of measuring each rectangle\'s height at an endpoint, measure it at the **midpoint** $\\bar{x}_i = \\frac{x_{i-1} + x_i}{2}$ of the subinterval. Where the curve rises, the rectangle\'s overshoot on one side of the midpoint roughly cancels its shortfall on the other.',
        },
        {
          type: 'theorem',
          name: 'Midpoint rule',
          tex: '\\int_a^b f(x)\\,dx \\approx M_n = \\Delta x\\,\\big[f(\\bar{x}_1) + f(\\bar{x}_2) + \\cdots + f(\\bar{x}_n)\\big], \\qquad \\Delta x = \\frac{b - a}{n}',
        },
        {
          type: 'graph',
          x: [-0.2, 2.3],
          y: [-0.4, 4.4],
          functions: [{ expr: 'x^2', label: '$y = x^2$' }],
          riemann: { expr: 'x^2', from: 0, to: 2, n: 'n', method: 'mid' },
          sliders: [{ name: 'n', min: 1, max: 16, step: 1, value: 4, label: '$n$' }],
          readouts: [
            { label: '$M_n =$', expr: '8/3 - 2/(3n^2)', digits: 6 },
            { label: 'exact $\\int_0^2 x^2\\,dx =$', expr: '8/3', digits: 6 },
          ],
          caption: 'Each rectangle is as tall as the curve at its midpoint. Slide $n$ and watch $M_n$ close in on $\\frac{8}{3}$. (For $x^2$ the error is exactly $\\frac{2}{3n^2}$ — doubling $n$ cuts it by four.)',
        },
        {
          type: 'derivation',
          title: '$M_4$ for $\\displaystyle\\int_1^2 \\frac{1}{x}\\,dx$ (exact value $\\ln 2 \\approx 0.693147$)',
          steps: [
            { tex: '\\Delta x = \\frac{2 - 1}{4} = \\frac{1}{4}', why: 'Four equal subintervals: $[1, 1.25], [1.25, 1.5], [1.5, 1.75], [1.75, 2]$.' },
            { tex: '\\bar{x}_i = 1.125,\\ 1.375,\\ 1.625,\\ 1.875', why: 'The midpoint of each subinterval: average its two endpoints.' },
            { tex: 'M_4 = \\frac{1}{4}\\left(\\frac{1}{1.125} + \\frac{1}{1.375} + \\frac{1}{1.625} + \\frac{1}{1.875}\\right)', why: 'Evaluate $f(x) = \\frac{1}{x}$ at each midpoint, add, multiply by $\\Delta x$.' },
            { tex: '= \\frac{1}{4}\\left(\\frac{8}{9} + \\frac{8}{11} + \\frac{8}{13} + \\frac{8}{15}\\right) \\approx 0.691220', why: 'Since $1.125 = \\frac{9}{8}$ and so on, each reciprocal is a simple fraction.' },
          ],
          result: '$M_4 \\approx 0.691220$, an error of about $0.0019$ — already within $0.3\\%$ using just four function values.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'Use the midpoint rule with $n = 4$ to approximate $\\displaystyle\\int_0^2 x^3\\,dx$.',
      label: '$M_4 =$',
      answer: '31/8',
      answerTex: '\\frac{31}{8} = 3.875',
      hint: '$\\Delta x = \\frac{1}{2}$, and the midpoints are $0.25, 0.75, 1.25, 1.75$.',
      explanation: '$M_4 = \\frac{1}{2}\\left(0.25^3 + 0.75^3 + 1.25^3 + 1.75^3\\right) = \\frac{1}{2}(0.015625 + 0.421875 + 1.953125 + 5.359375) = \\frac{1}{2}(7.75) = 3.875$. The exact value is $\\left[\\frac{x^4}{4}\\right]_0^2 = 4$, so the error is $0.125$. The midpoint rule *under*estimates here because $x^3$ is concave up on $[0, 2]$ — a pattern explained two cards from now.',
    },
    {
      kind: 'concept',
      title: 'The trapezoidal rule',
      blocks: [
        {
          type: 'p',
          text: 'Another idea: on each subinterval, replace the curve by the straight segment joining $(x_{i-1}, f(x_{i-1}))$ to $(x_i, f(x_i))$. The region under it is a trapezoid with area $\\frac{\\Delta x}{2}\\big[f(x_{i-1}) + f(x_i)\\big]$. Adding all $n$ trapezoids, every interior point is shared by two neighbours, so it gets counted twice.',
        },
        {
          type: 'theorem',
          name: 'Trapezoidal rule',
          tex: '\\int_a^b f(x)\\,dx \\approx T_n = \\frac{\\Delta x}{2}\\big[f(x_0) + 2f(x_1) + 2f(x_2) + \\cdots + 2f(x_{n-1}) + f(x_n)\\big]',
        },
        {
          type: 'graph',
          x: [-0.2, 2.3],
          y: [-0.4, 4.4],
          functions: [{ expr: 'x^2', label: '$y = x^2$' }],
          riemann: { expr: 'x^2', from: 0, to: 2, n: 'n', method: 'trap' },
          sliders: [{ name: 'n', min: 1, max: 16, step: 1, value: 4, label: '$n$' }],
          readouts: [
            { label: '$T_n =$', expr: '8/3 + 4/(3n^2)', digits: 6 },
            { label: 'exact $=$', expr: '8/3', digits: 6 },
          ],
          caption: 'The trapezoids\' tops are chords of the parabola, which lie *above* it, so $T_n$ is always a little too big here. Compare with the midpoint graph: the trapezoid error ($\\frac{4}{3n^2}$) is twice the midpoint error and has the opposite sign.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the trapezoidal rule is the average of left and right sums',
          text: 'The trapezoid on $[x_{i-1}, x_i]$ has area $\\frac{1}{2}\\big[f(x_{i-1})\\Delta x + f(x_i)\\Delta x\\big]$: the average of the left rectangle and the right rectangle. Summing, $T_n = \\frac{L_n + R_n}{2}$. When $f$ is increasing, $L_n$ is too small and $R_n$ too big by nearly the same amount, so averaging cancels most of the error.',
        },
        {
          type: 'derivation',
          title: '$T_4$ for $\\displaystyle\\int_1^2 \\frac{1}{x}\\,dx$',
          steps: [
            { tex: 'x_i = 1,\\ 1.25,\\ 1.5,\\ 1.75,\\ 2, \\qquad \\Delta x = \\frac{1}{4}', why: 'The same grid as before, but now we use the endpoints $x_0, \\dots, x_4$.' },
            { tex: 'T_4 = \\frac{1/4}{2}\\big[f(1) + 2f(1.25) + 2f(1.5) + 2f(1.75) + f(2)\\big]', why: 'Weights $1, 2, 2, 2, 1$: the two outer endpoints belong to one trapezoid each, interior points to two.' },
            { tex: '= \\frac{1}{8}\\left[1 + 2(0.8) + 2\\left(\\tfrac{2}{3}\\right) + 2\\left(\\tfrac{4}{7}\\right) + 0.5\\right]', why: 'Evaluate $\\frac{1}{x}$: $\\frac{1}{1.25} = 0.8$, $\\frac{1}{1.5} = \\frac{2}{3}$, $\\frac{1}{1.75} = \\frac{4}{7}$.' },
            { tex: '\\approx \\frac{1}{8}(5.576190) \\approx 0.697024', why: 'Add inside the bracket, then multiply by $\\frac{1}{8}$.' },
          ],
          result: '$T_4 \\approx 0.697024$: error about $-0.0039$ (too big), roughly twice the midpoint error and opposite in sign.',
        },
      ],
    },
    {
      kind: 'error',
      prompt: 'A student approximates $\\int_0^2 x^2\\,dx$ with the trapezoidal rule, $n = 4$. Tap the first line that is wrong.',
      lines: [
        '$\\Delta x = \\frac{2 - 0}{4} = \\frac{1}{2}$, so $x_i = 0, 0.5, 1, 1.5, 2$',
        '$f(x_i) = 0,\\ 0.25,\\ 1,\\ 2.25,\\ 4$',
        '$T_4 = \\frac{1}{2}\\big[0 + 2(0.25) + 2(1) + 2(2.25) + 4\\big]$',
        '$= \\frac{1}{2}(11) = 5.5$',
      ],
      errorLines: [3],
      explanation: 'Line 3 multiplies by $\\Delta x = \\frac{1}{2}$ instead of $\\frac{\\Delta x}{2} = \\frac{1}{4}$. The bracket counts each interior point twice, so it must be halved. Correctly, $T_4 = \\frac{1}{4}(11) = 2.75$, close to the exact $\\frac{8}{3} \\approx 2.667$. A quick sanity check would have caught $5.5$: the region fits inside a $2 \\times 4$ rectangle, and the curve is well below its top for most of the interval.',
    },
    {
      kind: 'concept',
      title: 'How big is the error?',
      blocks: [
        {
          type: 'p',
          text: 'Define the error as $E = (\\text{exact}) - (\\text{approximation})$. Here is how the three rules from this lesson do on $\\int_1^2 \\frac{dx}{x} = \\ln 2$:',
        },
        {
          type: 'table',
          headers: ['$n$', '$E_M$', '$E_T$', '$E_S$ (next card)'],
          rows: [
            ['$4$', '$0.00193$', '$-0.00388$', '$-0.000107$'],
            ['$8$', '$0.000487$', '$-0.000975$', '$-0.00000735$'],
            ['$20$', '$0.0000781$', '$-0.000156$', '$-0.000000194$'],
          ],
          caption: 'Errors for $\\int_1^2 \\frac{1}{x}\\,dx$, computed directly. Doubling $n$ divides $E_M$ and $E_T$ by about $4$.',
        },
        {
          type: 'list',
          items: [
            '$E_M$ and $E_T$ have **opposite signs**, and $|E_M| \\approx \\frac{1}{2}|E_T|$.',
            'Doubling $n$ cuts both errors by a factor of about $4$: the error behaves like $\\frac{C}{n^2}$.',
          ],
        },
        {
          type: 'graph',
          x: [-0.2, 2.3],
          y: [-0.5, 8],
          functions: [{ expr: 'e^x', label: '$y = e^x$' }],
          riemann: { expr: 'e^x', from: 0, to: 2, n: 'n', method: 'trap', color: 'orange' },
          sliders: [{ name: 'n', min: 1, max: 8, step: 1, value: 2, label: '$n$' }],
          caption: 'For a concave-up function, every chord lies above the curve, so the trapezoidal rule **overestimates**. The midpoint rule underestimates (see the why-box). For concave-down functions both flip.',
        },
        {
          type: 'theorem',
          name: 'Error bounds for the midpoint and trapezoidal rules',
          tex: '|E_T| \\le \\frac{K(b - a)^3}{12n^2}, \\qquad |E_M| \\le \\frac{K(b - a)^3}{24n^2}',
          text: 'Here $K$ is any number with $|f\'\'(x)| \\le K$ for all $x$ in $[a, b]$ (this requires $f\'\'$ to exist there). These are [[numerical-integration-error-bound|error bounds]]: guarantees, not estimates.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the second derivative controls the error',
          text: 'Both rules are exact for straight lines: if $f$ is linear, a trapezoid *is* the region, and a midpoint rectangle has the same area as the trapezoid. So the error comes only from bending, which $f\'\'$ measures. For the midpoint rule, notice the rectangle\'s area equals the area of the trapezoid under the [[tangent-line]] at the midpoint (tilting the top around the midpoint does not change the area). A concave-up curve lies above its tangent lines, so $M_n$ underestimates; it lies below its chords, so $T_n$ overestimates.',
        },
        {
          type: 'derivation',
          title: 'How large must $n$ be for $T_n$ to approximate $\\int_1^2 \\frac{dx}{x}$ within $0.0001$?',
          steps: [
            { tex: 'f\'\'(x) = \\frac{2}{x^3} \\le \\frac{2}{1^3} = 2 \\text{ on } [1, 2], \\quad K = 2', why: '$f\' = -x^{-2}$, $f\'\' = 2x^{-3}$. It is decreasing and positive, so its maximum on $[1, 2]$ is at $x = 1$.' },
            { tex: '\\frac{K(b-a)^3}{12n^2} = \\frac{2 \\cdot 1^3}{12n^2} = \\frac{1}{6n^2} < 0.0001', why: 'Demand that the guaranteed bound be below the tolerance.' },
            { tex: 'n^2 > \\frac{1}{0.0006} \\approx 1666.7 \\implies n > 40.8', why: 'Solve for $n$: multiply both sides by $6n^2$ and divide by $0.0001$, then take square roots.' },
            { tex: 'n = 41', why: '$n$ must be a whole number, and $40$ is too small, so round **up**.' },
          ],
          result: '$n = 41$ guarantees $|E_T| < 0.0001$. For the midpoint rule the bound is half as big, so $n^2 > 833.3$ and $n = 29$ suffices.',
        },
      ],
    },
    {
      kind: 'truefalse',
      prompt: 'If $f\'\'(x) > 0$ on $[a, b]$, then the trapezoidal rule $T_n$ overestimates $\\int_a^b f(x)\\,dx$ for every $n$.',
      answer: true,
      explanation: 'If $f\'\' > 0$, the graph is concave up, and a concave-up curve lies below every chord joining two of its points. Each trapezoid\'s top is such a chord, so each trapezoid contains its slice of the region plus a little extra: $T_n > \\int_a^b f$. The midpoint rule does the opposite, because a concave-up curve lies above its tangent lines.',
    },
    {
      kind: 'numeric',
      prompt: 'Using the error bound, find the smallest $n$ that guarantees the trapezoidal rule approximates $\\int_1^2 \\frac{1}{x}\\,dx$ within $0.001$.',
      label: '$n =$',
      answer: '13',
      hint: 'As in the worked example, $K = 2$, so you need $\\frac{1}{6n^2} < 0.001$.',
      explanation: 'With $K = 2$, $b - a = 1$: $\\frac{2}{12n^2} = \\frac{1}{6n^2} < 0.001$ gives $n^2 > \\frac{1}{0.006} \\approx 166.7$, so $n > 12.9$. The smallest whole number is $n = 13$. (Check: $\\frac{1}{6 \\cdot 13^2} \\approx 0.00099 < 0.001$, while $\\frac{1}{6 \\cdot 12^2} \\approx 0.00116$ is too big.)',
    },
    {
      kind: 'concept',
      title: 'Simpson\'s rule: fit parabolas',
      blocks: [
        {
          type: 'p',
          text: 'Straight-line pieces ignore curvature. [[simpsons-rule|Simpson\'s rule]] takes the subintervals **in pairs** and, over each pair, replaces $f$ by the parabola through its three points. Parabolas can bend, so they hug a smooth curve much more closely.',
        },
        {
          type: 'graph',
          x: [-0.2, 2.3],
          y: [-0.3, 3.4],
          functions: [
            { expr: '2 + sin(2x)', label: '$y = 2 + \\sin 2x$' },
            { expr: '(x-1)(x-2) - (2+sin(2))x(x-2) + (2+sin(4))x(x-1)/2', label: 'parabola through 3 points', color: 'orange', dashed: true, domain: [0, 2] },
          ],
          areas: [{ expr: '(x-1)(x-2) - (2+sin(2))x(x-2) + (2+sin(4))x(x-1)/2', from: 0, to: 2, color: 'orange' }],
          points: [
            { x: 0, y: 2, label: 'x₀' },
            { x: 1, y: '2 + sin(2)', label: 'x₁' },
            { x: 2, y: '2 + sin(4)', label: 'x₂' },
          ],
          caption: 'One Simpson panel ($n = 2$): the dashed parabola passes through the curve at $x_0, x_1, x_2$, and Simpson\'s rule is the shaded area under the parabola. Even this crude fit tracks the curve\'s bend; with more panels the parabolas become nearly indistinguishable from it.',
        },
        {
          type: 'derivation',
          title: 'Area under the parabola through $(-h, y_0), (0, y_1), (h, y_2)$',
          steps: [
            { tex: 'p(x) = Ax^2 + Bx + C', why: 'Shift the panel so its middle point is at $x = 0$; areas do not change under a horizontal shift.' },
            { tex: '\\int_{-h}^{h} (Ax^2 + Bx + C)\\,dx = \\frac{2Ah^3}{3} + 2Ch = \\frac{h}{3}(2Ah^2 + 6C)', why: 'The odd term $Bx$ integrates to $0$ over a symmetric interval.' },
            { tex: 'y_0 + 4y_1 + y_2 = (Ah^2 - Bh + C) + 4C + (Ah^2 + Bh + C) = 2Ah^2 + 6C', why: 'Use $y_0 = p(-h)$, $y_1 = p(0) = C$, $y_2 = p(h)$. The $B$ terms cancel.' },
            { tex: '\\int_{-h}^{h} p(x)\\,dx = \\frac{h}{3}(y_0 + 4y_1 + y_2)', why: 'The two expressions match. We never need to find $A$, $B$, $C$ — only the three heights.' },
          ],
          result: 'Adding these panel areas over $[x_0, x_2], [x_2, x_4], \\dots$ gives weights $1, 4, 2, 4, 2, \\dots, 4, 1$: interior even points are shared by two panels.',
        },
        {
          type: 'theorem',
          name: 'Simpson\'s rule ($n$ even)',
          tex: 'S_n = \\frac{\\Delta x}{3}\\big[f(x_0) + 4f(x_1) + 2f(x_2) + 4f(x_3) + \\cdots + 2f(x_{n-2}) + 4f(x_{n-1}) + f(x_n)\\big]',
          text: 'Error bound: if $|f^{(4)}(x)| \\le K$ on $[a, b]$, then $|E_S| \\le \\dfrac{K(b - a)^5}{180n^4}$.',
        },
        {
          type: 'derivation',
          title: '$S_4$ for $\\displaystyle\\int_1^2 \\frac{1}{x}\\,dx$',
          steps: [
            { tex: 'S_4 = \\frac{1/4}{3}\\big[f(1) + 4f(1.25) + 2f(1.5) + 4f(1.75) + f(2)\\big]', why: 'Same five points as $T_4$; only the weights $1, 4, 2, 4, 1$ and the factor $\\frac{\\Delta x}{3}$ change.' },
            { tex: '= \\frac{1}{12}\\left[1 + 3.2 + \\tfrac{4}{3} + \\tfrac{16}{7} + 0.5\\right]', why: '$4(0.8) = 3.2$, $2 \\cdot \\frac{2}{3} = \\frac{4}{3}$, $4 \\cdot \\frac{4}{7} = \\frac{16}{7}$.' },
            { tex: '\\approx \\frac{1}{12}(8.319048) \\approx 0.693254', why: 'Add the bracket and divide by $12$.' },
          ],
          result: 'Error $\\approx -0.000107$: about $36$ times smaller than $T_4$\'s, from exactly the same five function values.',
        },
        {
          type: 'deepdive',
          title: 'Simpson\'s rule as a weighted average, and choosing $n$',
          blocks: [
            {
              type: 'p',
              text: 'Since $E_M \\approx -\\frac{1}{2}E_T$, the combination $\\frac{2M_n + T_n}{3}$ should cancel the leading error. It does, exactly: $S_{2n} = \\frac{2M_n + T_n}{3}$. For $\\ln 2$ with $n = 4$: $\\frac{2(0.691220) + 0.697024}{3} \\approx 0.693155 = S_8$.',
            },
            {
              type: 'p',
              text: 'To guarantee $|E_S| < 0.0001$ for $\\int_1^2 \\frac{dx}{x}$: $f^{(4)}(x) = \\frac{24}{x^5} \\le 24$, so we need $\\frac{24}{180n^4} < 0.0001$, i.e. $n^4 > 1333.3$, $n > 6.04$. Simpson needs $n$ even, so $n = 8$ — compared with $n = 41$ for the trapezoidal rule.',
            },
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          title: '$n$ must be even',
          text: 'Simpson\'s rule groups subintervals in pairs, so $n$ must be even and the weights must start and end with $1$ and alternate $4, 2, 4, \\dots, 4$ in between. A pattern ending in $\\dots 2, 1$ means you used an odd $n$.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'Use Simpson\'s rule with $n = 4$ to approximate $\\displaystyle\\int_0^4 x^4\\,dx$. Give the exact fraction or a decimal to at least 2 places.',
      label: '$S_4 =$',
      answer: '616/3',
      answerTex: '\\frac{616}{3} \\approx 205.33',
      hint: '$\\Delta x = 1$, so the points are $0, 1, 2, 3, 4$ and the weights are $1, 4, 2, 4, 1$.',
      explanation: '$S_4 = \\frac{1}{3}\\big[0^4 + 4(1^4) + 2(2^4) + 4(3^4) + 4^4\\big] = \\frac{1}{3}(0 + 4 + 32 + 324 + 256) = \\frac{616}{3} \\approx 205.33$. The exact value is $\\frac{4^5}{5} = 204.8$, an error of about $0.53$. Simpson is not exact here because $x^4$ has $f^{(4)} = 24 \\ne 0$; the bound $\\frac{24 \\cdot 4^5}{180 \\cdot 4^4} \\approx 0.53$ is in fact achieved exactly.',
    },
    {
      kind: 'mcq',
      prompt: 'For which integrand does Simpson\'s rule give the **exact** value of $\\int_0^2 f(x)\\,dx$ for every even $n$?',
      options: [
        {
          text: '$f(x) = x^4$',
          why: '$f^{(4)} = 24 \\ne 0$, so the error bound is positive. The previous question showed a real error for $x^4$.',
        },
        {
          text: '$f(x) = e^x$',
          why: 'Every derivative of $e^x$ is $e^x \\ne 0$; no parabola matches an exponential exactly.',
        },
        {
          text: '$f(x) = x^3 - 5x$',
          correct: true,
          why: 'For any cubic, $f^{(4)} = 0$, so $K = 0$ and the error bound $\\frac{K(b-a)^5}{180n^4}$ is $0$.',
        },
        {
          text: '$f(x) = \\sin x$',
          why: '$f^{(4)} = \\sin x$, which is not identically zero, so there is some (small) error.',
        },
      ],
      explanation: 'Simpson\'s rule is built from parabolas, so it is obviously exact for quadratics. Surprisingly, it is exact for **cubics** too: the error bound uses $f^{(4)}$, which vanishes for any polynomial of degree $\\le 3$. (Intuition: on a symmetric panel the extra $x^3$ term is odd and integrates to zero, and the rule ignores it in the same way.) That bonus degree is why Simpson\'s error shrinks like $\\frac{1}{n^4}$.',
    },
    {
      kind: 'concept',
      title: 'Data and code',
      blocks: [
        {
          type: 'p',
          text: 'Numerical rules need only **values** of $f$ at grid points, so they work on measurements as well as formulas. If a car\'s speed $v(t)$ is logged every $2$ seconds, then the distance travelled, $\\int v(t)\\,dt$ by the [[net-change-theorem]], can be estimated by applying the trapezoidal or Simpson\'s rule to the logged numbers.',
        },
        {
          type: 'p',
          text: 'Here is a complete C++ program comparing the trapezoidal and Simpson\'s rules on $\\int_1^2 \\frac{dx}{x} = \\ln 2$, and then using Simpson\'s rule on the "impossible" integral $\\int_0^1 e^{-x^2}\\,dx$.',
        },
        {
          type: 'code',
          title: 'simpson.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdio>

// Composite Simpson's rule on [a, b] with n subintervals (n must be even).
double simpson(double (*f)(double), double a, double b, int n) {
    const double dx = (b - a) / n;
    double sum = f(a) + f(b);
    for (int i = 1; i < n; ++i) {
        double w = (i % 2 == 1) ? 4.0 : 2.0;
        sum += w * f(a + i * dx);
    }
    return sum * dx / 3.0;
}

double trapezoid(double (*f)(double), double a, double b, int n) {
    const double dx = (b - a) / n;
    double sum = 0.5 * (f(a) + f(b));
    for (int i = 1; i < n; ++i) sum += f(a + i * dx);
    return sum * dx;
}

double recip(double x) { return 1.0 / x; }
double gauss(double x) { return std::exp(-x * x); }

int main() {
    const double exact = std::log(2.0);
    std::printf("n    trapezoid   simpson     |err T|     |err S|\\n");
    for (int n = 2; n <= 32; n *= 2) {
        double t = trapezoid(recip, 1.0, 2.0, n);
        double s = simpson(recip, 1.0, 2.0, n);
        std::printf("%-3d  %.8f  %.8f  %.2e    %.2e\\n", n, t, s,
                    std::fabs(t - exact), std::fabs(s - exact));
    }
    std::printf("integral of e^(-x^2) on [0,1] ~ %.8f\\n", simpson(gauss, 0.0, 1.0, 10));
}`,
          output: `n    trapezoid   simpson     |err T|     |err S|
2    0.70833333  0.69444444  1.52e-02    1.30e-03
4    0.69702381  0.69325397  3.88e-03    1.07e-04
8    0.69412185  0.69315453  9.75e-04    7.35e-06
16   0.69339120  0.69314765  2.44e-04    4.72e-07
32   0.69320821  0.69314721  6.10e-05    2.97e-08
integral of e^(-x^2) on [0,1] ~ 0.74682495`,
          annotations: [
            { lines: 5, text: 'Passing the integrand as a function pointer lets one routine integrate any `double -> double` function.' },
            { lines: 9, text: 'Odd-indexed interior points get weight $4$, even-indexed ones weight $2$.' },
            { lines: 12, text: 'The endpoints were added once with weight $1$; finally multiply by $\\frac{\\Delta x}{3}$.' },
            { lines: 17, text: 'Trapezoid: endpoints weighted $\\frac{1}{2}$, interior points $1$, all times $\\Delta x$ — the same as $\\frac{\\Delta x}{2}[1, 2, \\dots, 2, 1]$.' },
            { lines: 28, text: 'Doubling $n$ each pass: watch $|E_T|$ shrink by $4\\times$ and $|E_S|$ by $16\\times$.' },
          ],
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Numerical integration in game engines',
          text: 'A physics engine integrates velocity to get position every frame. The simplest scheme, Euler integration `pos += vel * dt`, is a left Riemann sum, with error proportional to `dt`. Better integrators are the same story as this lesson: the classic fourth-order Runge–Kutta method (RK4), applied to $y\' = f(t)$, reduces exactly to Simpson\'s rule on each step. Choosing an integrator is a trade-off between accuracy, stability and cost per frame.',
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'Typical exam tasks: compute $M_n$, $T_n$ or $S_n$ for a small $n$ (show the $\\Delta x$, the points and the weights); decide over- vs underestimate from concavity; and find $n$ from an error bound (find $K$ by maximising $|f\'\'|$ or $|f^{(4)}|$, solve, round **up**, and make $n$ even for Simpson).',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'A car\'s speed is recorded every $2$ seconds: $v(0) = 0$, $v(2) = 6$, $v(4) = 10$, $v(6) = 12$, $v(8) = 14$ (in m/s). Use Simpson\'s rule to estimate the distance travelled from $t = 0$ to $t = 8$.',
      label: 'distance $\\approx$',
      unit: 'm',
      answer: '212/3',
      answerTex: '\\frac{212}{3} \\approx 70.67 \\text{ m}',
      hint: '$\\Delta t = 2$, $n = 4$ (even, good). Weights $1, 4, 2, 4, 1$, and multiply by $\\frac{\\Delta t}{3}$.',
      explanation: '$S_4 = \\frac{2}{3}\\big[0 + 4(6) + 2(10) + 4(12) + 14\\big] = \\frac{2}{3}(106) = \\frac{212}{3} \\approx 70.67$ m. For comparison, the trapezoidal rule gives $\\frac{2}{2}\\big[0 + 2(6 + 10 + 12) + 14\\big] = 70$ m. With no formula for $v$, these estimates are the best the data allow.',
    },
    {
      kind: 'fill',
      prompt: 'Complete the pattern of weights inside the bracket for Simpson\'s rule with $n = 6$.',
      template: '$f(x_0), \\dots, f(x_6)$ get weights $1, 4, 2,$ ___ $,$ ___ $, 4,$ ___, and the bracket is multiplied by ___ .',
      blanks: [{ answers: ['$4$'] }, { answers: ['$2$'] }, { answers: ['$1$'] }, { answers: ['$\\frac{\\Delta x}{3}$'] }],
      wordBank: ['$1$', '$2$', '$4$', '$\\frac{\\Delta x}{3}$', '$\\frac{\\Delta x}{2}$', '$\\Delta x$'],
      explanation: 'With $n = 6$ there are three parabolic panels: $[x_0, x_2]$, $[x_2, x_4]$, $[x_4, x_6]$. Each panel contributes $\\frac{\\Delta x}{3}(1, 4, 1)$; the shared points $x_2$ and $x_4$ collect $1 + 1 = 2$. So the pattern is $1, 4, 2, 4, 2, 4, 1$ times $\\frac{\\Delta x}{3}$. The factor $\\frac{\\Delta x}{2}$ belongs to the trapezoidal rule.',
    },
  ],
  takeaways: [
    'With $\\Delta x = \\frac{b - a}{n}$: $M_n$ uses midpoints, $T_n = \\frac{\\Delta x}{2}[f_0 + 2f_1 + \\cdots + 2f_{n-1} + f_n]$, and $S_n = \\frac{\\Delta x}{3}[f_0 + 4f_1 + 2f_2 + \\cdots + 4f_{n-1} + f_n]$ ($n$ even).',
    'For concave-up $f$, the trapezoidal rule overestimates and the midpoint rule underestimates; $|E_M| \\approx \\frac{1}{2}|E_T|$.',
    'Error bounds: $|E_T| \\le \\frac{K(b-a)^3}{12n^2}$, $|E_M| \\le \\frac{K(b-a)^3}{24n^2}$ with $|f\'\'| \\le K$; $|E_S| \\le \\frac{K(b-a)^5}{180n^4}$ with $|f^{(4)}| \\le K$. Solve for $n$ and round up.',
    'Simpson\'s rule fits parabolas, is exact for cubics, and its error falls like $\\frac{1}{n^4}$ — usually the best of the three for smooth functions.',
    'These rules need only function values, so they integrate data and non-elementary functions, and they are the ideas behind physics-engine integrators.',
  ],
  reading: [
    {
      title: 'OpenStax Calculus Volume 2 — 3.6 Numerical Integration',
      url: 'https://openstax.org/books/calculus-volume-2/pages/3-6-numerical-integration',
      source: 'openstax',
      note: 'Midpoint, trapezoidal and Simpson\'s rules with error bounds and many exercises.',
    },
    {
      title: "Paul's Online Notes — Approximating Definite Integrals",
      url: 'https://tutorial.math.lamar.edu/Classes/CalcII/ApproximatingDefIntegrals.aspx',
      source: 'paul',
      note: 'Worked examples comparing all three rules, plus the error-bound formulas.',
    },
    {
      title: "Wikipedia — Simpson's rule",
      url: 'https://en.wikipedia.org/wiki/Simpson%27s_rule',
      source: 'wikipedia',
      note: 'Derivations, the error term, and higher-order relatives such as Simpson\'s 3/8 rule.',
    },
  ],
};
