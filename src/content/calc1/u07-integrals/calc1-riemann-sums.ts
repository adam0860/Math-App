import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'calc1-riemann-sums',
  title: 'Area and Riemann Sums',
  summary: 'Approximate the area under a curve with rectangles, then let the rectangles get infinitely thin.',
  minutes: 18,
  objectives: [
    'Read, write and evaluate sums in sigma notation',
    'Use the formulas for $\\sum c$, $\\sum i$, $\\sum i^2$ and $\\sum i^3$ to evaluate long sums in closed form',
    'Compute left, right and midpoint Riemann sums by hand, from a formula or from a table of data',
    'Predict when a Riemann sum over- or underestimates, and why midpoints do so well',
    'Find an exact area as the limit of a Riemann sum as $n \\to \\infty$',
  ],
  steps: [
    {
      kind: 'concept',
      title: 'The area problem',
      blocks: [
        {
          type: 'p',
          text: 'Geometry gives you areas of rectangles, triangles and circles. But what is the area of the region under $y = x^2$ between $x = 0$ and $x = 2$? Its top edge is curved, and no formula from geometry applies. This is the **area problem**, and it is the second great question of calculus, sitting alongside the tangent problem.',
        },
        {
          type: 'p',
          text: 'The strategy mirrors what we did with tangents. We cannot find the exact answer directly, so we **approximate** with shapes we understand — rectangles — and then ask what happens as the approximation gets better and better. Drag the slider to use more rectangles.',
        },
        {
          type: 'graph',
          x: [-0.3, 2.4],
          y: [-0.5, 4.5],
          functions: [{ expr: 'x^2', label: '$y = x^2$' }],
          riemann: { expr: 'x^2', from: 0, to: 2, n: 'n', method: 'right' },
          sliders: [{ name: 'n', min: 1, max: 50, step: 1, value: 4, label: '$n$ rectangles' }],
          readouts: [{ label: 'total rectangle area $\\approx$', expr: '4(n+1)(2n+1)/(3n^2)', digits: 5 }],
          caption: 'Each rectangle has width $\\frac{2}{n}$ and touches the curve at its right edge. As $n$ grows, the jagged staircase hugs the curve and the total area settles toward $2.6667\\ldots$',
        },
        {
          type: 'callout',
          variant: 'analogy',
          title: 'Pixels',
          text: 'A curved shape on a screen is drawn as a grid of square pixels. At low resolution the edge looks like a staircase; at high resolution you cannot tell it from the curve. Counting the pixels inside the shape is a way of measuring its area — a two-dimensional cousin of what we are about to do.',
        },
      ],
    },
    {
      kind: 'concept',
      title: 'Sigma notation',
      blocks: [
        {
          type: 'p',
          text: 'Adding up $50$ rectangle areas by writing every term is hopeless. [[sigma-notation]] is the compact way to write a long sum. The capital Greek letter $\\Sigma$ ("sigma", for **S**um) says "add up"; below and above it are where the index starts and stops.',
        },
        {
          type: 'math',
          tex: '\\sum_{i=1}^{n} a_i = a_1 + a_2 + a_3 + \\cdots + a_n',
          caption: '$i$ is the **index** of summation: it takes each integer value from $1$ up to $n$, and you add the resulting terms.',
        },
        {
          type: 'derivation',
          title: 'Evaluate $\\displaystyle\\sum_{i=1}^{4} (2i + 1)$',
          steps: [
            { tex: '\\sum_{i=1}^{4} (2i + 1) = (2\\cdot 1 + 1) + (2\\cdot 2 + 1) + (2\\cdot 3 + 1) + (2\\cdot 4 + 1)', why: 'Substitute each value $i = 1, 2, 3, 4$ into the expression $2i + 1$.' },
            { tex: '= 3 + 5 + 7 + 9', why: 'Evaluate each term.' },
            { tex: '= 24', why: 'Add them up.' },
          ],
          result: 'The sum is $24$.',
        },
        {
          type: 'p',
          text: 'Because a sigma is just repeated addition, the ordinary rules of arithmetic carry over: you can split a sum of terms, and pull a constant factor out front.',
        },
        {
          type: 'theorem',
          name: 'Properties of sums',
          tex: '\\sum_{i=1}^{n} (a_i + b_i) = \\sum_{i=1}^{n} a_i + \\sum_{i=1}^{n} b_i, \\qquad \\sum_{i=1}^{n} c\\,a_i = c\\sum_{i=1}^{n} a_i',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'A sigma is a for loop',
          text: '$\\sum_{i=1}^{n} a_i$ is exactly `for (int i = 1; i <= n; ++i) sum += a(i);`. The index is the loop variable, the bottom and top numbers are the loop bounds, and the expression is the loop body. Watch the bounds: starting at $0$ instead of $1$ is the math version of an off-by-one error.',
        },
        {
          type: 'callout',
          variant: 'warning',
          text: 'You may **not** split products: $\\sum a_i b_i \\neq \\left(\\sum a_i\\right)\\left(\\sum b_i\\right)$. Try $n = 2$ with $a_i = b_i = i$: the left side is $1 + 4 = 5$, the right is $3 \\cdot 3 = 9$.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'Evaluate $\\displaystyle\\sum_{i=2}^{5} (3i - 1)$.',
      hint: 'The index starts at $2$, not $1$. Write out the terms for $i = 2, 3, 4, 5$.',
      answer: '38',
      explanation: 'The terms are $3(2) - 1 = 5$, $3(3) - 1 = 8$, $3(4) - 1 = 11$ and $3(5) - 1 = 14$. Their sum is $5 + 8 + 11 + 14 = 38$. Starting at $i = 1$ by habit would add an extra term $2$ and give $40$.',
    },
    {
      kind: 'concept',
      title: 'Summation formulas',
      blocks: [
        {
          type: 'p',
          text: 'To find areas exactly we will need sums with $n$ terms where $n$ is a *variable*. Writing out terms is then impossible — we need closed formulas. Four of them do almost all the work:',
        },
        {
          type: 'theorem',
          name: 'Power sums',
          tex: '\\sum_{i=1}^{n} c = cn, \\quad \\sum_{i=1}^{n} i = \\frac{n(n+1)}{2}, \\quad \\sum_{i=1}^{n} i^2 = \\frac{n(n+1)(2n+1)}{6}, \\quad \\sum_{i=1}^{n} i^3 = \\left[\\frac{n(n+1)}{2}\\right]^2',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why $1 + 2 + \\cdots + n = \\frac{n(n+1)}{2}$',
          text: 'Write the sum forwards and backwards, then add the two rows column by column:\n\n$$\\begin{aligned} S &= 1 + 2 + \\cdots + n \\\\ S &= n + (n-1) + \\cdots + 1 \\\\ 2S &= (n+1) + (n+1) + \\cdots + (n+1) \\end{aligned}$$\n\nThere are $n$ columns, each summing to $n + 1$, so $2S = n(n+1)$. (Legend says Gauss did this as a schoolboy for $n = 100$.) The $\\sum i^2$ formula can be proved by induction or with a telescoping trick; $\\sum c = cn$ just says "add $c$ to itself $n$ times".',
        },
        {
          type: 'derivation',
          title: 'Evaluate $\\displaystyle\\sum_{i=1}^{10} (2i^2 - 3i)$',
          steps: [
            { tex: '\\sum_{i=1}^{10} (2i^2 - 3i) = 2\\sum_{i=1}^{10} i^2 - 3\\sum_{i=1}^{10} i', why: 'Split the sum and pull out the constants (properties of sums).' },
            { tex: '= 2\\cdot\\frac{10\\cdot 11\\cdot 21}{6} - 3\\cdot\\frac{10\\cdot 11}{2}', why: 'Apply the formulas with $n = 10$: $2n + 1 = 21$.' },
            { tex: '= 2(385) - 3(55)', why: '$\\frac{2310}{6} = 385$ and $\\frac{110}{2} = 55$.' },
            { tex: '= 770 - 165 = 605', why: 'Arithmetic.' },
          ],
          result: 'The sum is $605$ — no need to write out ten terms.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'O(n) versus O(1)',
          text: 'A loop that adds $n$ terms takes time proportional to $n$. The closed formula takes the same tiny amount of time whether $n$ is $10$ or $10^9$. Replacing loops with closed forms is a classic optimisation — but watch for integer overflow: `n * (n + 1)` overflows a 32-bit `int` once $n$ passes about $46{,}340$.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'Use the summation formulas to evaluate $\\displaystyle\\sum_{i=1}^{20} (3i + 2)$.',
      hint: 'Split it: $3\\sum i + \\sum 2$. Don\'t forget that $\\sum_{i=1}^{20} 2$ adds $2$ twenty times.',
      answer: '670',
      explanation: '$\\sum_{i=1}^{20} (3i + 2) = 3\\sum_{i=1}^{20} i + \\sum_{i=1}^{20} 2 = 3\\cdot\\frac{20\\cdot 21}{2} + 2\\cdot 20 = 3(210) + 40 = 670$. A common slip is to write $\\sum 2 = 2$; but a constant term is added once for every value of $i$.',
    },
    {
      kind: 'concept',
      title: 'Riemann sums: left, right and midpoint',
      blocks: [
        {
          type: 'p',
          text: 'Now we set up the rectangles precisely. To approximate the area under $f$ on $[a, b]$, cut the interval into $n$ equal pieces — a [[regular-partition]]:',
        },
        {
          type: 'math',
          tex: '\\Delta x = \\frac{b - a}{n}, \\qquad x_i = a + i\\,\\Delta x \\quad (i = 0, 1, \\ldots, n)',
          caption: 'So $x_0 = a$, $x_n = b$, and the $i$-th subinterval is $[x_{i-1}, x_i]$.',
        },
        {
          type: 'p',
          text: 'On each subinterval build a rectangle of width $\\Delta x$. Its height is $f(x_i^*)$, where $x_i^*$ is a [[sample-point]] somewhere in that subinterval. Adding the areas gives a [[riemann-sum]]:',
        },
        {
          type: 'definition',
          term: 'Riemann sum',
          text: '$$\\sum_{i=1}^{n} f(x_i^*)\\,\\Delta x$$\n\nThe three standard choices of sample point give the **left sum** $L_n$ ($x_i^* = x_{i-1}$), the **right sum** $R_n$ ($x_i^* = x_i$) and the **midpoint sum** $M_n$ ($x_i^* = \\frac{x_{i-1} + x_i}{2}$).',
        },
        {
          type: 'graph',
          x: [-0.3, 2.4],
          y: [-0.5, 4.5],
          functions: [{ expr: 'x^2', label: '$y = x^2$' }],
          riemann: { expr: 'x^2', from: 0, to: 2, n: 'n', method: 'left' },
          sliders: [{ name: 'n', min: 1, max: 40, step: 1, value: 4, label: '$n$' }],
          readouts: [
            { label: '$L_n =$', expr: '4(n-1)(2n-1)/(3n^2)', digits: 5 },
            { label: '$R_n =$', expr: '4(n+1)(2n+1)/(3n^2)', digits: 5 },
            { label: '$M_n =$', expr: '8/3 - 2/(3n^2)', digits: 5 },
          ],
          caption: 'Left-endpoint rectangles for $y = x^2$ on $[0, 2]$. Because the function is increasing, every left rectangle sits **below** the curve, so $L_n$ underestimates and $R_n$ overestimates. Compare how fast $M_n$ closes in.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Over or under?',
          text: 'If $f$ is **increasing** on $[a, b]$, then $L_n \\le \\text{area} \\le R_n$: left heights are each rectangle\'s minimum, right heights its maximum. If $f$ is **decreasing**, the inequalities flip. If $f$ goes up and down, you cannot tell without computing.',
        },
      ],
    },
    {
      kind: 'mcq',
      prompt: 'Let $f(x) = e^{-x}$ on $[0, 3]$. Which statement is true for every $n$?',
      options: [
        {
          text: '$L_n$ underestimates the area and $R_n$ overestimates it',
          why: 'That is the pattern for an *increasing* function. $e^{-x}$ is decreasing.',
        },
        {
          text: '$L_n$ overestimates the area and $R_n$ underestimates it',
          correct: true,
          why: 'For a decreasing function, the left endpoint is the highest point on each subinterval and the right endpoint the lowest.',
        },
        {
          text: 'Both $L_n$ and $R_n$ overestimate the area',
          why: 'They sit on opposite sides of the true area for any monotonic function: one uses each rectangle\'s maximum height, the other its minimum.',
        },
        {
          text: '$L_n = R_n$, because they use the same rectangles',
          why: 'They share $n - 1$ heights, but $L_n$ includes $f(0) = 1$ while $R_n$ includes $f(3) = e^{-3}$ instead. In fact $L_n - R_n = (f(0) - f(3))\\Delta x > 0$.',
        },
      ],
      explanation: '$f\'(x) = -e^{-x} < 0$, so $f$ is decreasing. On each subinterval $[x_{i-1}, x_i]$ the height is largest at the left end and smallest at the right end. Left rectangles therefore poke above the curve (overestimate) and right rectangles sit under it (underestimate).',
    },
    {
      kind: 'concept',
      title: 'Computing Riemann sums by hand',
      blocks: [
        {
          type: 'p',
          text: 'Let\'s compute all three sums for $f(x) = x^2$ on $[0, 2]$ with $n = 4$. Organise the work in a table: it keeps the sample points straight.',
        },
        {
          type: 'table',
          headers: ['subinterval', 'left $x$', '$f$', 'right $x$', '$f$', 'midpoint', '$f$'],
          rows: [
            ['$[0, 0.5]$', '$0$', '$0$', '$0.5$', '$0.25$', '$0.25$', '$0.0625$'],
            ['$[0.5, 1]$', '$0.5$', '$0.25$', '$1$', '$1$', '$0.75$', '$0.5625$'],
            ['$[1, 1.5]$', '$1$', '$1$', '$1.5$', '$2.25$', '$1.25$', '$1.5625$'],
            ['$[1.5, 2]$', '$1.5$', '$2.25$', '$2$', '$4$', '$1.75$', '$3.0625$'],
            ['**sum of heights**', '—', '$3.5$', '—', '$7.5$', '—', '$5.25$'],
          ],
          caption: '$\\Delta x = \\frac{2 - 0}{4} = 0.5$.',
        },
        {
          type: 'derivation',
          title: 'Multiply each column sum by $\\Delta x$',
          steps: [
            { tex: 'L_4 = 0.5\\,(0 + 0.25 + 1 + 2.25) = 0.5(3.5) = 1.75', why: 'Left endpoints $0, 0.5, 1, 1.5$. Factor out the common width $\\Delta x$ instead of multiplying four times.' },
            { tex: 'R_4 = 0.5\\,(0.25 + 1 + 2.25 + 4) = 0.5(7.5) = 3.75', why: 'Right endpoints $0.5, 1, 1.5, 2$.' },
            { tex: 'M_4 = 0.5\\,(0.0625 + 0.5625 + 1.5625 + 3.0625) = 0.5(5.25) = 2.625', why: 'Midpoints $0.25, 0.75, 1.25, 1.75$ — halfway across each subinterval.' },
          ],
          result: 'The true area turns out to be $\\frac{8}{3} \\approx 2.667$. The midpoint sum is off by only $0.04$; the endpoint sums are off by about $0.9$ and $1.1$.',
        },
        {
          type: 'graph',
          x: [-0.3, 2.4],
          y: [-0.5, 4.5],
          functions: [{ expr: 'x^2', label: '$y = x^2$' }],
          riemann: { expr: 'x^2', from: 0, to: 2, n: 'n', method: 'mid', color: 'purple' },
          sliders: [{ name: 'n', min: 1, max: 20, step: 1, value: 4, label: '$n$' }],
          readouts: [{ label: '$M_n =$', expr: '8/3 - 2/(3n^2)', digits: 5 }, { label: 'error $= \\frac{8}{3} - M_n =$', expr: '2/(3n^2)', digits: 5 }],
          caption: 'Midpoint rectangles. Each one pokes above the curve on one side and dips below on the other, so the errors largely cancel. Doubling $n$ cuts the error by a factor of $4$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the midpoint sum is so much better',
          text: 'On a short subinterval a smooth curve is nearly a straight line. A rectangle at the midpoint height has exactly the same area as the trapezoid under that line, because the triangle it cuts off on one side matches the triangle it adds on the other. The only error comes from the curve\'s *bending*, which is a much smaller effect. Endpoint sums, by contrast, are wrong even for straight lines.',
        },
        {
          type: 'callout',
          variant: 'warning',
          text: '$M_n$ is **not** the average of $L_n$ and $R_n$. Here $\\frac{L_4 + R_4}{2} = 2.75$, while $M_4 = 2.625$. Averaging the endpoint sums gives a different method, the trapezoid rule.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'Compute the right Riemann sum $R_3$ for $f(x) = x^2 + 1$ on $[0, 3]$.',
      hint: '$\\Delta x = 1$, and the right endpoints are $1, 2, 3$.',
      label: '$R_3 =$',
      answer: '17',
      explanation: 'With $\\Delta x = \\frac{3 - 0}{3} = 1$, the right endpoints are $x = 1, 2, 3$, with heights $f(1) = 2$, $f(2) = 5$, $f(3) = 10$. So $R_3 = 1\\cdot(2 + 5 + 10) = 17$. (The exact area is $12$; $f$ is increasing, so $R_3$ overestimates.)',
    },
    {
      kind: 'numeric',
      prompt: 'A game logs a car\'s speed every $2$ seconds. Estimate the distance it travels from $t = 0$ to $t = 8$ s using a **left** Riemann sum.',
      tex: '\\begin{array}{c|ccccc} t \\text{ (s)} & 0 & 2 & 4 & 6 & 8 \\\\ \\hline v \\text{ (m/s)} & 0 & 6 & 10 & 12 & 13 \\end{array}',
      hint: 'Distance $\\approx$ speed $\\times$ time on each interval. A left sum uses the speed at the start of each $2$-second interval: $t = 0, 2, 4, 6$.',
      label: 'distance $\\approx$',
      unit: 'm',
      answer: '56',
      explanation: 'On each interval the car travels about (speed) $\\times$ $\\Delta t$, with $\\Delta t = 2$. The left sum uses the speeds at $t = 0, 2, 4, 6$: $2(0 + 6 + 10 + 12) = 56$ m. The right sum would use $t = 2, 4, 6, 8$: $2(6 + 10 + 12 + 13) = 82$ m. Because the car is speeding up, the true distance is between $56$ and $82$ m. Area under a velocity curve is distance — a theme for the rest of this unit.',
    },
    {
      kind: 'concept',
      title: 'Exact area: let $n \\to \\infty$',
      blocks: [
        {
          type: 'p',
          text: 'Every Riemann sum is only an approximation. To get the **exact** area, we write $R_n$ as a formula in $n$ — this is where the summation formulas earn their keep — and take the [[limit]] as the number of rectangles goes to infinity.',
        },
        {
          type: 'derivation',
          title: 'Exact area under $y = x^2$ on $[0, 2]$',
          steps: [
            { tex: '\\Delta x = \\frac{2}{n}, \\qquad x_i = 0 + i\\cdot\\frac{2}{n} = \\frac{2i}{n}', why: 'Set up the regular partition with $a = 0$, $b = 2$.' },
            { tex: 'R_n = \\sum_{i=1}^{n} f(x_i)\\,\\Delta x = \\sum_{i=1}^{n} \\left(\\frac{2i}{n}\\right)^2 \\frac{2}{n}', why: 'Right endpoints: height $f(x_i) = x_i^2$, width $\\frac{2}{n}$.' },
            { tex: '= \\frac{8}{n^3}\\sum_{i=1}^{n} i^2', why: '$\\left(\\frac{2i}{n}\\right)^2\\cdot\\frac{2}{n} = \\frac{8i^2}{n^3}$. The factor $\\frac{8}{n^3}$ does not depend on $i$, so it comes out of the sum.' },
            { tex: '= \\frac{8}{n^3}\\cdot\\frac{n(n+1)(2n+1)}{6} = \\frac{4(n+1)(2n+1)}{3n^2}', why: 'Apply the $\\sum i^2$ formula, cancel one $n$ and simplify $\\frac{8}{6} = \\frac{4}{3}$.' },
            { tex: '\\lim_{n \\to \\infty} \\frac{4(2n^2 + 3n + 1)}{3n^2} = \\frac{4 \\cdot 2}{3} = \\frac{8}{3}', why: 'Expand the numerator. This is a [[limit-at-infinity]] of a rational function with equal degrees: the ratio of leading coefficients, $\\frac{8}{3}$.' },
          ],
          result: 'The area under $y = x^2$ from $0$ to $2$ is exactly $\\frac{8}{3}$ — matching the readouts on the earlier graphs.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the limit really is the area',
          text: 'For an increasing function every left sum is below the true area and every right sum above it: $L_n \\le A \\le R_n$. Here $L_n = \\frac{4(n-1)(2n-1)}{3n^2}$ also tends to $\\frac{8}{3}$. The area $A$ is trapped between two quantities that both approach $\\frac{8}{3}$, so by the [[squeeze-theorem]] reasoning, $A = \\frac{8}{3}$ exactly. No approximation is left.',
        },
        {
          type: 'p',
          text: 'Computers skip the algebra and just use a large $n$. The program below computes all three sums for increasing $n$ — notice how many more rectangles the endpoint sums need to match the accuracy of $M_n$.',
        },
        {
          type: 'code',
          title: 'riemann.cpp',
          runnable: true,
          code: `#include <cstdio>

double f(double x) { return x * x; }

int main() {
    const double a = 0.0, b = 2.0;
    for (int n = 10; n <= 10000; n *= 10) {
        double dx = (b - a) / n;
        double left = 0, right = 0, mid = 0;
        for (int i = 0; i < n; ++i) {
            double xl = a + i * dx;           // left endpoint of subinterval i
            left  += f(xl) * dx;
            right += f(xl + dx) * dx;
            mid   += f(xl + dx / 2) * dx;
        }
        std::printf("n = %5d  L = %.6f  R = %.6f  M = %.6f\\n", n, left, right, mid);
    }
}`,
          output: `n =    10  L = 2.280000  R = 3.080000  M = 2.660000
n =   100  L = 2.626800  R = 2.706800  M = 2.666600
n =  1000  L = 2.662668  R = 2.670668  M = 2.666666
n = 10000  L = 2.666267  R = 2.667067  M = 2.666667`,
          annotations: [
            { lines: 8, text: '$\\Delta x = \\frac{b - a}{n}$, the width of every rectangle.' },
            { lines: '10-15', text: 'One loop pass per subinterval: the sigma becomes a `for` loop, with the three sample points computed from the left endpoint.' },
            { lines: 16, text: 'The exact answer is $\\frac{8}{3} = 2.666667$. $M_{10}$ is already closer than $L_{1000}$.' },
          ],
        },
      ],
    },
    {
      kind: 'order',
      prompt: 'Put the steps for finding an exact area as a limit of right Riemann sums in order.',
      lines: [
        'Compute $\\Delta x = \\frac{b - a}{n}$ and $x_i = a + i\\,\\Delta x$',
        'Write $R_n = \\sum_{i=1}^{n} f(x_i)\\,\\Delta x$',
        'Expand and pull factors that don\'t depend on $i$ out of the sum',
        'Replace each $\\sum i^k$ with its closed formula in $n$',
        'Take $\\lim_{n \\to \\infty}$ of the resulting expression',
      ],
      distractors: ['Substitute $n = \\infty$ into $\\Delta x$ to get $\\Delta x = 0$'],
      explanation: 'The method builds a formula for $R_n$ that no longer contains a sigma, and only then takes the limit. Setting $\\Delta x = 0$ directly would make every rectangle zero and the sum meaningless — just as plugging $h = 0$ into a difference quotient gives $\\frac{0}{0}$. Limits, not substitution, handle "infinitely thin".',
    },
    {
      kind: 'expr',
      prompt: 'For $f(x) = 2x$ on $[0, 3]$, find the right Riemann sum $R_n$ as a simplified expression in $n$.',
      label: '$R_n =$',
      variables: ['n'],
      domain: [1, 10],
      answer: '9(n+1)/n',
      answerTex: '\\frac{9(n+1)}{n} = 9 + \\frac{9}{n}',
      hint: '$\\Delta x = \\frac{3}{n}$, $x_i = \\frac{3i}{n}$, so each term is $2\\cdot\\frac{3i}{n}\\cdot\\frac{3}{n}$. Then use $\\sum i = \\frac{n(n+1)}{2}$.',
      explanation: '$R_n = \\sum_{i=1}^{n} 2\\left(\\frac{3i}{n}\\right)\\frac{3}{n} = \\frac{18}{n^2}\\sum_{i=1}^{n} i = \\frac{18}{n^2}\\cdot\\frac{n(n+1)}{2} = \\frac{9(n+1)}{n}$. As $n \\to \\infty$ this tends to $9$ — and indeed the region is a triangle with base $3$ and height $6$, area $\\frac{1}{2}\\cdot 3\\cdot 6 = 9$.',
    },
    {
      kind: 'truefalse',
      prompt: 'For any function and any $n$, the midpoint sum equals the average of the left and right sums: $M_n = \\frac{L_n + R_n}{2}$.',
      answer: false,
      explanation: 'Averaging $L_n$ and $R_n$ averages the heights at the two *ends* of each subinterval; $M_n$ uses the height in the *middle*. For $y = x^2$ on $[0, 2]$ with $n = 4$: $\\frac{1.75 + 3.75}{2} = 2.75$ but $M_4 = 2.625$. They agree only for straight lines. The average $\\frac{L_n + R_n}{2}$ is the trapezoid rule, a separate method you will meet in Calculus II.',
    },
  ],
  takeaways: [
    '$\\sum_{i=1}^{n} a_i$ means "add $a_i$ for $i = 1$ to $n$" — a `for` loop. Sums split over addition and constants factor out, but products do not split.',
    'Key formulas: $\\sum c = cn$, $\\sum i = \\frac{n(n+1)}{2}$, $\\sum i^2 = \\frac{n(n+1)(2n+1)}{6}$, $\\sum i^3 = \\left[\\frac{n(n+1)}{2}\\right]^2$.',
    'A Riemann sum $\\sum f(x_i^*)\\,\\Delta x$ uses $n$ rectangles of width $\\Delta x = \\frac{b-a}{n}$; left, right and midpoint sums differ only in the sample point.',
    'For increasing $f$, $L_n$ underestimates and $R_n$ overestimates (reversed for decreasing $f$). Midpoint sums are much more accurate.',
    'The exact area is the limit of the Riemann sums as $n \\to \\infty$: write $R_n$ in closed form using the summation formulas, then take the limit.',
  ],
  reading: [
    {
      title: 'OpenStax Calculus Volume 1 — 5.1 Approximating Areas',
      url: 'https://openstax.org/books/calculus-volume-1/pages/5-1-approximating-areas',
      source: 'openstax',
      note: 'Sigma notation, the summation formulas and left/right sums, with many diagrams.',
    },
    {
      title: "Paul's Online Notes — Area Problem",
      url: 'https://tutorial.math.lamar.edu/Classes/CalcI/AreaProblem.aspx',
      source: 'paul',
      note: 'A careful walk through the rectangle approximations and their limit.',
    },
    {
      title: "Paul's Online Notes — Summation Notation",
      url: 'https://tutorial.math.lamar.edu/Classes/CalcI/SummationNotation.aspx',
      source: 'paul',
      note: 'Extra practice with sigma notation and the power-sum formulas.',
    },
  ],
};
