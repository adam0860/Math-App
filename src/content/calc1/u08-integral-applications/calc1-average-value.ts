import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'calc1-average-value',
  title: 'The Average Value of a Function',
  summary: 'Averaging infinitely many values, the rectangle that matches the area, and the Mean Value Theorem for Integrals — then a look back at all of Calculus I.',
  minutes: 18,
  objectives: [
    'Explain why the average of $f$ on $[a, b]$ is $\\frac{1}{b-a}\\int_a^b f(x)\\,dx$, as a limit of ordinary averages',
    'Compute average values, including in applied contexts such as temperature and damage per second',
    'Interpret the average value as the height of a rectangle with the same area as the region under the curve',
    'State the Mean Value Theorem for Integrals and find a value $c$ where $f(c) = f_{\\text{avg}}$',
    'Connect average value to average rate of change and the Mean Value Theorem for derivatives',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Averaging infinitely many values',
      blocks: [
        {
          type: 'p',
          text: 'Averaging a list is easy: add the numbers, divide by how many there are. But what is the average temperature over a day, or the average height of $y = x^2$ on $[0, 3]$? A function has *infinitely many* values on an interval, so "add them all up and divide by how many" makes no sense as stated.',
        },
        {
          type: 'p',
          text: 'Calculus has a standard answer: approximate, then take a limit. Sample $f$ at $n$ equally spaced points $x_1, \\dots, x_n$ in $[a, b]$, one in each subinterval of width $\\Delta x = \\frac{b - a}{n}$, and average those samples. The trick is to notice that $\\frac{1}{n} = \\frac{\\Delta x}{b - a}$:',
        },
        {
          type: 'derivation',
          title: 'From a sample average to an integral',
          steps: [
            { tex: '\\frac{f(x_1) + f(x_2) + \\cdots + f(x_n)}{n} = \\frac{1}{n}\\sum_{i=1}^{n} f(x_i)', why: 'The ordinary average of $n$ sample values, written in [[sigma-notation]].' },
            { tex: '= \\frac{1}{b - a}\\sum_{i=1}^{n} f(x_i)\\,\\Delta x', why: 'Since $\\Delta x = \\frac{b-a}{n}$, we have $\\frac{1}{n} = \\frac{\\Delta x}{b - a}$. Substitute and pull the constant $\\frac{1}{b-a}$ out of the sum.' },
            { tex: '\\xrightarrow{\\;n \\to \\infty\\;} \\frac{1}{b - a}\\int_a^b f(x)\\,dx', why: 'The sum is now a [[riemann-sum]] for $f$ on $[a, b]$. For continuous $f$ it converges to the definite integral as $n \\to \\infty$.' },
          ],
          result: 'More and more samples, averaged, converge to the integral divided by the length of the interval.',
        },
        {
          type: 'definition',
          term: 'Average value of a function',
          text: 'The [[average-value]] of an integrable function $f$ on $[a, b]$ (with $a < b$) is\n\n$$f_{\\text{avg}} = \\frac{1}{b - a}\\int_a^b f(x)\\,dx.$$',
        },
        {
          type: 'graph',
          x: [-0.3, 3.4],
          y: [-0.6, 9.5],
          functions: [{ expr: 'x^2', label: '$f(x) = x^2$', domain: [0, 3.4] }],
          riemann: { expr: 'x^2', from: 0, to: 3, n: 'n', method: 'mid' },
          hlines: [{ y: 3, label: 'f_avg = 3' }],
          sliders: [{ name: 'n', min: 1, max: 30, step: 1, value: 3, label: 'number of samples $n$' }],
          readouts: [{ label: 'average of the $n$ midpoint samples $=$', expr: '3 - 3/(4n^2)', digits: 5 }],
          caption: 'Each rectangle\'s height is one sample. Their average climbs toward $f_{\\text{avg}} = \\frac{1}{3}\\int_0^3 x^2\\,dx = \\frac{1}{3} \\cdot 9 = 3$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why divide by $b - a$?',
          text: 'The integral by itself is a *total* — area, or (value) × (length) — so it grows when the interval grows, even if the function stays the same height. Dividing by the length $b - a$ turns that total back into a typical *height*, measured in the same units as $f$. It plays exactly the role of "divide by $n$" in an ordinary average.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'expr',
      prompt: 'Find the average value of $f(x) = x^2$ on the interval $[0, b]$, where $b > 0$. Your answer will be in terms of $b$.',
      hint: 'Compute $\\frac{1}{b - 0}\\int_0^b x^2\\,dx$.',
      label: '$f_{\\text{avg}} =$',
      variables: ['b'],
      domain: [0.5, 3],
      answer: 'b^2/3',
      answerTex: '\\frac{b^2}{3}',
      explanation: '$f_{\\text{avg}} = \\frac{1}{b}\\int_0^b x^2\\,dx = \\frac{1}{b}\\cdot\\frac{b^3}{3} = \\frac{b^2}{3}$. Check with $b = 3$: $\\frac{9}{3} = 3$, matching the graph. Note the average is only a third of the largest value $b^2$: the parabola spends most of the interval low down.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'The picture: a rectangle with the same area',
      blocks: [
        {
          type: 'p',
          text: 'Multiply the definition by $b - a$ and it says $f_{\\text{avg}} \\cdot (b - a) = \\int_a^b f(x)\\,dx$. The left side is the area of a rectangle with width $b - a$ and height $f_{\\text{avg}}$. So for a positive function:',
        },
        {
          type: 'math',
          tex: '\\underbrace{f_{\\text{avg}} \\cdot (b - a)}_{\\text{rectangle}} \\;=\\; \\underbrace{\\int_a^b f(x)\\,dx}_{\\text{region under the curve}}',
          caption: 'The average value is the height of the rectangle on $[a, b]$ that has exactly the same area as the region under the graph.',
        },
        {
          type: 'derivation',
          title: 'Average value of $\\sin x$ on $[0, \\pi]$',
          steps: [
            { tex: 'f_{\\text{avg}} = \\frac{1}{\\pi - 0}\\int_0^{\\pi} \\sin x\\,dx', why: 'Definition with $a = 0$, $b = \\pi$.' },
            { tex: '= \\frac{1}{\\pi}\\Big[-\\cos x\\Big]_0^{\\pi}', why: 'An antiderivative of $\\sin x$ is $-\\cos x$.' },
            { tex: '= \\frac{1}{\\pi}\\big[-\\cos\\pi - (-\\cos 0)\\big] = \\frac{1}{\\pi}\\big[1 + 1\\big]', why: '$\\cos \\pi = -1$ and $\\cos 0 = 1$, so $-(-1) + 1 = 2$.' },
            { tex: '= \\frac{2}{\\pi} \\approx 0.637', why: 'The arch has area $2$; spread over width $\\pi$, its average height is $\\frac{2}{\\pi}$.' },
          ],
          result: 'One arch of the sine wave has average height $\\frac{2}{\\pi} \\approx 0.637$ — above $0.5$, the middle of its range, because the arch is broad near the top and narrow near the bottom.',
        },
        {
          type: 'graph',
          x: [-0.2, 3.4],
          y: [-0.25, 1.25],
          xStep: 'pi',
          functions: [{ expr: 'sin(x)', label: '$y = \\sin x$', domain: [0, 'pi'] }],
          areas: [
            { expr: 'sin(x)', from: 0, to: 'pi', color: 'blue' },
            { expr: '2/pi', from: 0, to: 'pi', color: 'orange' },
          ],
          hlines: [{ y: '2/pi', label: 'y = 2/π', color: 'orange' }],
          points: [
            { x: 'arcsin(2/pi)', y: '2/pi', label: 'c₁' },
            { x: 'pi - arcsin(2/pi)', y: '2/pi', label: 'c₂' },
          ],
          caption: 'The orange rectangle (height $\\frac{2}{\\pi}$, width $\\pi$) has area $2$, the same as the blue arch. The bits of arch poking above the rectangle exactly fill the gaps below it.',
        },
        {
          type: 'callout',
          variant: 'analogy',
          title: 'Let the water settle',
          text: 'Imagine the region under the curve is water in a thin tank, held in the shape of the graph. Remove the barrier and the water levels out. The flat surface ends at height $f_{\\text{avg}}$: the same amount of water, now spread evenly over the same width.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'numeric',
      prompt: 'Find the average value of $f(x) = \\sqrt{x}$ on $[0, 4]$.',
      hint: 'Write $\\sqrt{x} = x^{1/2}$; its antiderivative is $\\frac{2}{3}x^{3/2}$. Then divide by the length of the interval.',
      label: '$f_{\\text{avg}} =$',
      answer: '4/3',
      answerTex: '\\frac{4}{3}',
      explanation: '$\\int_0^4 x^{1/2}\\,dx = \\frac{2}{3}x^{3/2}\\Big|_0^4 = \\frac{2}{3} \\cdot 8 = \\frac{16}{3}$ (since $4^{3/2} = 8$). Dividing by the length $4$: $f_{\\text{avg}} = \\frac{16}{3} \\cdot \\frac{1}{4} = \\frac{4}{3} \\approx 1.33$. Sanity check: it lies between the minimum $\\sqrt{0} = 0$ and the maximum $\\sqrt{4} = 2$, and above the endpoint average $1$ because $\\sqrt{x}$ rises fast and then levels off.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'truefalse',
      prompt: 'For any continuous function $f$, the average value of $f$ on $[a, b]$ equals $\\frac{f(a) + f(b)}{2}$, the average of its endpoint values.',
      answer: false,
      explanation: 'That shortcut only works for linear functions, whose graphs are straight (the region is a trapezoid). For $f(x) = x^2$ on $[0, 3]$ the endpoint average is $\\frac{0 + 9}{2} = 4.5$, but the true average is $3$. The average value depends on the values across the *whole* interval, which is why it needs an integral.',
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'concept',
      title: 'The Mean Value Theorem for Integrals',
      blocks: [
        {
          type: 'p',
          text: 'In the sine picture, the horizontal line $y = \\frac{2}{\\pi}$ hits the curve at two points. That is no accident: a continuous function always *takes on* its average value somewhere. (A class of students can average $82\\%$ without anyone scoring exactly $82$; a continuous function cannot do that.)',
        },
        {
          type: 'theorem',
          name: 'Mean Value Theorem for Integrals',
          tex: '\\int_a^b f(x)\\,dx = f(c)\\,(b - a) \\quad\\text{for some } c \\in [a, b]',
          text: 'If $f$ is **continuous** on $[a, b]$, then there is at least one number $c$ in $[a, b]$ with $f(c) = f_{\\text{avg}} = \\frac{1}{b-a}\\int_a^b f(x)\\,dx$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why it is true',
          text: 'By the [[extreme-value-theorem]], a continuous $f$ has a minimum value $m$ and a maximum value $M$ on $[a, b]$. Since $m \\le f(x) \\le M$, the integral is trapped between the areas of two rectangles: $m(b - a) \\le \\int_a^b f(x)\\,dx \\le M(b - a)$. Divide by $b - a$: $m \\le f_{\\text{avg}} \\le M$. Now $f$ is continuous and takes the values $m$ and $M$, so by the [[intermediate-value-theorem]] it takes every value in between — including $f_{\\text{avg}}$.',
        },
        {
          type: 'graph',
          x: [-0.3, 4.3],
          y: [-0.8, 17],
          functions: [{ expr: 'x^2', label: '$f(x) = x^2$', domain: [0, 4.3] }],
          areas: [
            { expr: 'x^2', from: 0, to: 'b', color: 'blue' },
            { expr: 'b^2/3', from: 0, to: 'b', color: 'orange' },
          ],
          hlines: [{ y: 'b^2/3', color: 'orange' }],
          vlines: [{ x: 'b', label: 'x = b' }],
          points: [{ x: 'b/sqrt(3)', y: 'b^2/3', label: '(c, f(c))' }],
          sliders: [{ name: 'b', min: 0.5, max: 4, step: 0.05, value: 3, label: 'right endpoint $b$' }],
          readouts: [
            { label: '$f_{\\text{avg}} = \\frac{b^2}{3} =$', expr: 'b^2/3', digits: 3 },
            { label: '$c = \\frac{b}{\\sqrt{3}} =$', expr: 'b/sqrt(3)', digits: 3 },
          ],
          caption: 'For $x^2$ on $[0, b]$, the curve meets the average-height line at $c = \\frac{b}{\\sqrt{3}} \\approx 0.577b$, always a little past the midpoint.',
        },
        {
          type: 'derivation',
          title: 'Find $c$ for $f(x) = x^2$ on $[0, 3]$',
          steps: [
            { tex: 'f_{\\text{avg}} = \\tfrac{1}{3}\\int_0^3 x^2\\,dx = \\tfrac{1}{3}\\cdot 9 = 3', why: 'First compute the average value (done on the first card).' },
            { tex: 'f(c) = c^2 = 3', why: 'The theorem promises a $c$ where the function equals its average.' },
            { tex: 'c = \\pm\\sqrt{3}', why: 'Solve the equation.' },
            { tex: 'c = \\sqrt{3} \\approx 1.732', why: 'Keep only solutions inside $[0, 3]$; $-\\sqrt{3}$ is outside.' },
          ],
          result: 'At $c = \\sqrt{3}$ the parabola is exactly at its average height $3$.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Continuity is not optional',
          text: 'Let $f(x) = 0$ on $[0, 1)$ and $f(x) = 1$ on $[1, 2]$. Its average on $[0, 2]$ is $\\frac{1}{2}(0 \\cdot 1 + 1 \\cdot 1) = \\frac{1}{2}$, but $f$ never equals $\\frac{1}{2}$ — it jumps right over it. The theorem guarantees $c$ only for continuous functions. Also, the theorem says *at least one* $c$; there may be several, as with the sine arch.',
        },
      ],
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'numeric',
      prompt: 'Find the number $c$ in $[1, 2]$ guaranteed by the Mean Value Theorem for Integrals for $f(x) = 3x^2$ on $[1, 2]$.',
      hint: 'First find $f_{\\text{avg}} = \\frac{1}{2 - 1}\\int_1^2 3x^2\\,dx$, then solve $3c^2 = f_{\\text{avg}}$.',
      label: '$c =$',
      answer: 'sqrt(7/3)',
      answerTex: '\\sqrt{\\tfrac{7}{3}} \\approx 1.528',
      explanation: '$\\int_1^2 3x^2\\,dx = x^3\\Big|_1^2 = 8 - 1 = 7$, and the interval has length $1$, so $f_{\\text{avg}} = 7$. Solve $3c^2 = 7$: $c^2 = \\frac{7}{3}$, so $c = \\pm\\sqrt{\\frac{7}{3}} \\approx \\pm 1.528$. Only the positive root lies in $[1, 2]$, so $c = \\sqrt{\\frac{7}{3}} \\approx 1.528$.',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'order',
      prompt: 'Put the steps for finding the value $c$ promised by the Mean Value Theorem for Integrals in order.',
      lines: [
        'Check that $f$ is continuous on $[a, b]$',
        'Compute $\\int_a^b f(x)\\,dx$',
        'Divide by $b - a$ to get $f_{\\text{avg}}$',
        'Solve $f(c) = f_{\\text{avg}}$ for $c$',
        'Keep only the solutions that lie in $[a, b]$',
      ],
      distractors: ['Solve $f\'(c) = 0$ for $c$'],
      explanation: 'Continuity is the hypothesis that makes $c$ exist. Then find the average (integral first, divided by length), set the function equal to it, and discard solutions outside the interval. The distractor finds critical points — useful for extrema, but unrelated to where $f$ equals its average.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'concept',
      title: 'Average value in context',
      blocks: [
        {
          type: 'p',
          text: 'Average value is how scientists and engineers summarise any quantity that varies continuously: average temperature, average power, average concentration of a drug in the bloodstream. Its units are always the units of $f$ itself.',
        },
        {
          type: 'derivation',
          title: 'Temperature $T(t) = 50 + 14\\sin\\left(\\frac{\\pi t}{12}\\right)$ °F, $t$ hours after 6 a.m. Average from 6 a.m. to 6 p.m.?',
          steps: [
            { tex: 'T_{\\text{avg}} = \\frac{1}{12 - 0}\\int_0^{12} \\left[50 + 14\\sin\\left(\\tfrac{\\pi t}{12}\\right)\\right]dt', why: 'Twelve hours: $t$ runs from $0$ to $12$.' },
            { tex: '\\int_0^{12} 50\\,dt = 600', why: 'A constant integrates to constant × length.' },
            { tex: 'u = \\tfrac{\\pi t}{12},\\quad dt = \\tfrac{12}{\\pi}\\,du,\\quad t: 0 \\to 12 \\;\\Rightarrow\\; u: 0 \\to \\pi', why: '[[u-substitution]] for the sine term, changing the limits along with the variable.' },
            { tex: '\\int_0^{12} 14\\sin\\left(\\tfrac{\\pi t}{12}\\right)dt = 14 \\cdot \\tfrac{12}{\\pi}\\int_0^{\\pi} \\sin u\\,du = \\tfrac{168}{\\pi} \\cdot 2 = \\tfrac{336}{\\pi}', why: 'We already know $\\int_0^\\pi \\sin u\\,du = 2$.' },
            { tex: 'T_{\\text{avg}} = \\tfrac{1}{12}\\left(600 + \\tfrac{336}{\\pi}\\right) = 50 + \\tfrac{28}{\\pi} \\approx 58.9 \\text{ °F}', why: 'Divide the total by the $12$ hours.' },
          ],
          result: 'The daytime average is about $58.9$ °F: well above the $50$ °F baseline, because the whole 12-hour window is the warm half of the cycle.',
        },
        {
          type: 'graph',
          x: [-0.5, 12.5],
          y: [44, 68],
          yStep: 4,
          functions: [{ expr: '50 + 14sin(pi*x/12)', label: '$T(t)$', domain: [0, 12] }],
          hlines: [
            { y: '50 + 28/pi', label: 'average ≈ 58.9', color: 'orange' },
            { y: 50, label: 'baseline 50', color: 'gray' },
          ],
          caption: 'The temperature peaks at $64$ °F at noon ($t = 6$); the average line sits $\\frac{2}{\\pi} \\approx 64\\%$ of the way from the baseline up to the peak — the sine-arch average again.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Averages in games',
          text: 'Game designers balance weapons by **damage per second** averaged over a fight: total damage $\\int_0^T d(t)\\,dt$ divided by the duration $T$. Profilers report average frame time the same way. And when a sound or animation curve is sampled every frame, `sum / count` of the samples is precisely the sample average from the first card — a Riemann-sum approximation of the average value that gets better as the sampling rate rises.',
        },
      ],
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'numeric',
      prompt: 'A boss in a game deals damage at a rate of $d(t) = 30 + 20\\sin\\left(\\frac{\\pi t}{10}\\right)$ damage per second. What is its average damage per second over the first $10$ seconds? (Exact answer or a decimal to two places.)',
      hint: 'Compute $\\frac{1}{10}\\int_0^{10} d(t)\\,dt$. For the sine term, substitute $u = \\frac{\\pi t}{10}$.',
      label: 'average $=$',
      unit: 'damage/s',
      answer: '30 + 40/pi',
      answerTex: '30 + \\frac{40}{\\pi} \\approx 42.73',
      tolerance: 0.01,
      explanation: 'The constant part contributes $\\int_0^{10} 30\\,dt = 300$. With $u = \\frac{\\pi t}{10}$, $dt = \\frac{10}{\\pi}du$ and $u$ runs from $0$ to $\\pi$: $\\int_0^{10} 20\\sin\\left(\\frac{\\pi t}{10}\\right)dt = 20 \\cdot \\frac{10}{\\pi} \\cdot 2 = \\frac{400}{\\pi}$. Average $= \\frac{1}{10}\\left(300 + \\frac{400}{\\pi}\\right) = 30 + \\frac{40}{\\pi} \\approx 42.73$ damage per second.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'The two Mean Value Theorems are one idea',
      blocks: [
        {
          type: 'p',
          text: 'What is the average value of a *derivative*? Apply the definition to $f\'$ and use the [[net-change-theorem]]:',
        },
        {
          type: 'math',
          tex: '(f\')_{\\text{avg}} = \\frac{1}{b - a}\\int_a^b f\'(x)\\,dx = \\frac{f(b) - f(a)}{b - a}',
          caption: 'The average value of a rate of change is the average rate of change.',
        },
        {
          type: 'p',
          text: 'The right side is the slope of the secant line — the [[average-rate-of-change]] from the derivative unit. So the two meanings of "average" agree: average velocity (displacement ÷ time) is the average value of the velocity function. And if $f\'$ is continuous, the MVT for Integrals gives a $c$ with $f\'(c) = \\frac{f(b) - f(a)}{b - a}$: that is the [[mean-value-theorem]] for derivatives. Two theorems, one idea, linked by the FTC.',
        },
        {
          type: 'derivation',
          title: 'Average velocity for $v(t) = t^2 - 4t + 3$ on $[0, 4]$ (from the Net Change lesson)',
          steps: [
            { tex: 'v_{\\text{avg}} = \\frac{1}{4}\\int_0^4 (t^2 - 4t + 3)\\,dt', why: 'Average value of the velocity function.' },
            { tex: '= \\frac{1}{4}\\cdot\\frac{4}{3} = \\frac{1}{3} \\text{ m/s}', why: 'We computed the displacement $\\int_0^4 v\\,dt = \\frac{4}{3}$ m in the Net Change lesson.' },
            { tex: 'v(c) = \\tfrac{1}{3} \\iff c^2 - 4c + \\tfrac{8}{3} = 0 \\iff c = 2 \\pm \\tfrac{2}{\\sqrt{3}}', why: 'Quadratic formula: $c = \\frac{4 \\pm \\sqrt{16 - 32/3}}{2} = 2 \\pm \\frac{1}{2}\\sqrt{\\frac{16}{3}} = 2 \\pm \\frac{2}{\\sqrt 3}$. Both ($\\approx 0.845$ and $\\approx 3.155$) lie in $[0, 4]$.' },
          ],
          result: 'The average velocity is $\\frac{1}{3}$ m/s, and at two instants the speedometer shows exactly that. (Average *speed* is different: total distance $4$ m over $4$ s gives $1$ m/s.)',
        },
        {
          type: 'graph',
          x: [-0.3, 4.4],
          y: [-0.8, 2.2],
          functions: [{ expr: 'x^3/3 - 2x^2 + 3x', label: '$s(t) = \\frac{t^3}{3} - 2t^2 + 3t$', domain: [0, 4.4] }],
          segments: [{ from: [0, 0], to: [4, '4/3'], color: 'orange', label: 'secant, slope 1/3' }],
          tangents: [
            { expr: 'x^3/3 - 2x^2 + 3x', at: '2 - 2/sqrt(3)', color: 'green' },
            { expr: 'x^3/3 - 2x^2 + 3x', at: '2 + 2/sqrt(3)', color: 'green' },
          ],
          caption: 'Position $s(t)$ with $s(0) = 0$. The orange secant has slope $\\frac{1}{3}$ (average velocity). At the two values of $c$, the green tangent lines are parallel to it: instantaneous velocity equals average velocity.',
        },
      ],
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'mcq',
      prompt: 'A car moves along a straight road with velocity $v(t)$ mph for $0 \\le t \\le 2$ hours, and $\\int_0^2 v(t)\\,dt = 110$. What is its average velocity over the trip?',
      options: [
        {
          text: '$110$ mph',
          why: '$110$ is the integral, which is the displacement in miles. It still needs dividing by the $2$ hours.',
        },
        {
          text: '$220$ mph',
          why: 'This multiplies by the length of the interval instead of dividing by it.',
        },
        {
          text: '$55$ mph',
          correct: true,
          why: '$v_{\\text{avg}} = \\frac{1}{2 - 0}\\int_0^2 v(t)\\,dt = \\frac{110}{2} = 55$ mph.',
        },
        {
          text: '$\\frac{v(0) + v(2)}{2}$, which cannot be found from this information',
          why: 'The endpoint average is not the average value unless $v$ is linear. And the information given is exactly enough.',
        },
      ],
      explanation: 'The average value of velocity is $\\frac{1}{b - a}\\int_a^b v(t)\\,dt$ = displacement ÷ time $= \\frac{110 \\text{ mi}}{2 \\text{ h}} = 55$ mph — the familiar algebra formula, now justified for velocities that change continuously.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'error',
      prompt: 'A student computes the average value of $f(x) = 6x^2$ on $[1, 3]$. Tap the first line that is wrong.',
      lines: [
        '$f_{\\text{avg}} = \\frac{1}{3}\\int_1^3 6x^2\\,dx$',
        '$\\int_1^3 6x^2\\,dx = \\Big[2x^3\\Big]_1^3$',
        '$= 2(27) - 2(1) = 52$',
        '$f_{\\text{avg}} = \\frac{52}{3}$',
      ],
      errorLines: [1],
      explanation: 'Line 1 divides by $b = 3$ instead of the length of the interval, $b - a = 3 - 1 = 2$. The integral in lines 2–3 is correct ($52$), so the correct average is $f_{\\text{avg}} = \\frac{52}{2} = 26$. Sanity check: $26$ lies between $f(1) = 6$ and $f(3) = 54$, as the Mean Value Theorem for Integrals requires.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'fill',
      prompt: 'Complete the summary of this lesson.',
      template: 'The average value of $f$ on $[a, b]$ is $\\int_a^b f(x)\\,dx$ divided by ___. Geometrically, it is the height of the ___ on $[a, b]$ with the same area as the region under the curve. If $f$ is ___ on $[a, b]$, then $f(c) = f_{\\text{avg}}$ for some $c$ in $[a, b]$.',
      blanks: [{ answers: ['$b - a$'] }, { answers: ['rectangle'] }, { answers: ['continuous'] }],
      wordBank: ['$b - a$', '$b$', '$2$', 'rectangle', 'triangle', 'continuous', 'increasing', 'positive'],
      explanation: 'Divide the total (the integral) by the length $b - a$ — not by $b$, and not by $2$ (that would be the endpoint-average mistake). The rectangle of width $b - a$ and height $f_{\\text{avg}}$ has the same area as the region. Continuity is the hypothesis of the Mean Value Theorem for Integrals: it lets the Extreme and Intermediate Value Theorems do their work.',
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'concept',
      title: 'Calculus I: complete. What comes next',
      blocks: [
        {
          type: 'p',
          text: '**You have finished Calculus I.** Take a moment to see how far you have come. You started with a question that seemed to have no answer — how steep is a curve at a single point? — and built the [[limit]] to answer it. From limits came the [[derivative]], and with it rates of change, tangent lines, optimization and curve sketching. Then a second question — how much accumulates? — led to Riemann sums and the [[definite-integral]].',
        },
        {
          type: 'p',
          text: 'The [[fundamental-theorem-of-calculus]] revealed that those two questions are inverses of each other, and this final unit cashed that in: net change, area between curves, and average value are all "add up thin slices, then let the FTC compute the sum". That one pattern — *slice, approximate, sum, take a limit* — is the engine of everything that comes next.',
        },
        {
          type: 'table',
          headers: ['In Calculus I you…', 'In Calculus II you will…'],
          rows: [
            ['sliced regions into strips to find **area between curves**', 'spin regions around an axis and slice them into disks, washers and shells to find **volumes**'],
            ['integrated velocity to get **displacement**', 'integrate force over distance to get **work**, and measure the **length of a curve**'],
            ['integrated with the power rule, FTC and $u$-substitution', 'master integration by parts, trig substitution, partial fractions and **numerical methods**'],
            ['solved $F\' = f$ for an antiderivative', 'solve **differential equations** like $y\' = ky$, and step through them with Euler\'s method — the core of game physics'],
            ['approximated functions by tangent lines', 'approximate functions by polynomials of any degree with **Taylor series** — how `sin` and `exp` are actually computed'],
          ],
          caption: 'Every Calculus II topic grows out of something you can already do.',
        },
        {
          type: 'callout',
          variant: 'history',
          title: 'You just retraced the 1600s',
          text: 'Fermat and Barrow computed tangents and areas by clever special arguments. Newton and Leibniz, independently in the 1660s–1680s, saw that differentiation and integration undo each other, turning those special tricks into a general method. Every lesson you have just completed would have been cutting-edge research less than four centuries ago.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Why this matters for a game developer',
          text: 'A physics engine is the Net Change Theorem on a loop: accumulate acceleration into velocity and velocity into position, frame after frame. Calculus II makes that loop rigorous (differential equations and Euler\'s method), tells you how large its errors get (numerical integration), and gives you the series behind every `std::sin` call. You now have the foundation for all of it.',
        },
      ],
    },
  ],
  takeaways: [
    'The average value of $f$ on $[a, b]$ is $f_{\\text{avg}} = \\frac{1}{b - a}\\int_a^b f(x)\\,dx$: the limit of ordinary averages of more and more samples.',
    'Geometrically, $f_{\\text{avg}}$ is the height of the rectangle on $[a, b]$ with the same area as the region under the curve.',
    'Mean Value Theorem for Integrals: if $f$ is continuous, $f(c) = f_{\\text{avg}}$ for at least one $c$ in $[a, b]$ (proved with the EVT and IVT).',
    'Divide by the interval length $b - a$, not by $b$; the endpoint average $\\frac{f(a) + f(b)}{2}$ is correct only for linear functions.',
    'The average value of $f\'$ is the average rate of change $\\frac{f(b) - f(a)}{b - a}$, which ties the integral MVT to the derivative MVT.',
    'Calculus I is complete: Calculus II extends the "slice, sum, take a limit" idea to volumes, work, arc length, differential equations and series.',
  ],
  reading: [
    {
      title: 'OpenStax Calculus Volume 1 — 5.3 The Fundamental Theorem of Calculus',
      url: 'https://openstax.org/books/calculus-volume-1/pages/5-3-the-fundamental-theorem-of-calculus',
      source: 'openstax',
      note: 'Opens with the Mean Value Theorem for Integrals and uses it to prove the FTC; the previous section, 5.2, defines average value.',
    },
    {
      title: "Paul's Online Notes — Average Function Value",
      url: 'https://tutorial.math.lamar.edu/Classes/CalcI/AvgFcnValue.aspx',
      source: 'paul',
      note: 'Short, clear section with worked examples of average value and the Mean Value Theorem for Integrals.',
    },
    {
      title: 'OpenStax Calculus Volume 2',
      url: 'https://openstax.org/books/calculus-volume-2/pages/1-introduction',
      source: 'openstax',
      note: 'A preview of where you are headed next: Chapter 2 starts with areas between curves and volumes.',
    },
  ],
};
