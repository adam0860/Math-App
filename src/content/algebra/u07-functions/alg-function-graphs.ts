import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'alg-function-graphs',
  title: 'Reading the Graph of a Function',
  summary: 'Intercepts, rising and falling, peaks and valleys, symmetry and piecewise rules — everything a graph tells you at a glance.',
  minutes: 18,
  objectives: [
    'Read function values, intercepts and solutions of $f(x) = c$ from a graph',
    'State the intervals on which a function is increasing or decreasing, and compute an average rate of change',
    'Identify local and absolute maxima and minima, distinguishing the value from its location',
    'Test a function algebraically for even or odd symmetry',
    'Evaluate and graph piecewise-defined functions',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Values and intercepts',
      blocks: [
        {
          type: 'p',
          text: 'A graph is a picture of every input–output pair at once. To read $f(a)$, go to $x = a$ on the horizontal axis and move up or down until you hit the curve: the height there is $f(a)$. Reading in the other direction — "for which $x$ is $f(x) = c$?" — means drawing the horizontal line $y = c$ and finding where it meets the curve.',
        },
        {
          type: 'list',
          items: [
            'The [[y-intercept]] is where the graph crosses the $y$-axis. That is the input $x = 0$, so it is the point $(0, f(0))$. A function has **at most one** $y$-intercept (vertical line test!).',
            'The [[x-intercept|x-intercepts]] are where the graph meets the $x$-axis, i.e. where the output is $0$. The inputs that solve $f(x) = 0$ are called the [[zero-of-a-function|zeros]] of $f$. A function can have any number of them.',
          ],
        },
        {
          type: 'derivation',
          title: 'Intercepts of $f(x) = x^2 - 2x - 3$',
          steps: [
            { tex: 'f(0) = 0 - 0 - 3 = -3', why: 'The $y$-intercept: substitute $x = 0$.' },
            { tex: 'x^2 - 2x - 3 = 0', why: 'The $x$-intercepts: set the output equal to $0$.' },
            { tex: '(x - 3)(x + 1) = 0', why: 'Factor: two numbers with product $-3$ and sum $-2$ are $-3$ and $1$.' },
            { tex: 'x = 3 \\quad \\text{or} \\quad x = -1', why: 'Zero product property.' },
          ],
          result: '$y$-intercept $(0, -3)$; $x$-intercepts $(-1, 0)$ and $(3, 0)$.',
        },
        {
          type: 'graph',
          x: [-4, 6],
          y: [-5, 8],
          functions: [{ expr: 'x^2 - 2x - 3', label: '$f(x) = x^2 - 2x - 3$' }],
          hlines: [{ y: 'c', label: 'y = c', color: 'red' }],
          points: [
            { x: 0, y: -3, label: '(0, −3)' },
            { x: -1, y: 0, label: '(−1, 0)' },
            { x: 3, y: 0, label: '(3, 0)' },
            { x: '1 - sqrt(4 + c)', y: 'c', color: 'red' },
            { x: '1 + sqrt(4 + c)', y: 'c', color: 'red' },
          ],
          sliders: [{ name: 'c', min: -4, max: 6, step: 0.25, value: 2, label: '$c$' }],
          readouts: [
            { label: 'solutions of $f(x) = c$: $x \\approx$', expr: '1 - sqrt(4 + c)', digits: 3 },
            { label: 'and $x \\approx$', expr: '1 + sqrt(4 + c)', digits: 3 },
          ],
          caption: 'Slide $c$: the red line meets the graph where $f(x) = c$. At $c = 0$ you get the $x$-intercepts; at $c = -4$ (the vertex) the two solutions merge into one.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Coordinates, not just numbers',
          text: 'An intercept is a *point*. If asked for "the $x$-intercepts", give $(-1, 0)$ and $(3, 0)$; if asked for "the zeros", give the inputs $-1$ and $3$. Instructors care about the difference.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'numeric',
      prompt: 'Find the zeros of $f(x) = x^2 + x - 6$ (the $x$-coordinates of its $x$-intercepts). Enter both, separated by a comma.',
      label: '$x =$',
      answer: ['-3', '2'],
      hint: 'Set $f(x) = 0$ and factor: which two numbers multiply to $-6$ and add to $1$?',
      explanation: 'Solve $x^2 + x - 6 = 0$. Factor as $(x + 3)(x - 2) = 0$, so $x = -3$ or $x = 2$. Check: $f(2) = 4 + 2 - 6 = 0$ and $f(-3) = 9 - 3 - 6 = 0$. The graph crosses the $x$-axis at $(-3, 0)$ and $(2, 0)$.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Increasing, decreasing and average rate of change',
      blocks: [
        {
          type: 'p',
          text: 'Read a graph left to right, like text. Where it climbs, the function is **increasing**; where it falls, it is **decreasing**; where it is flat, it is **constant**. Precisely:',
        },
        {
          type: 'definition',
          term: 'Increasing and decreasing',
          text: '$f$ is [[increasing-function|increasing]] on an interval $I$ if for all $x_1 < x_2$ in $I$, $f(x_1) < f(x_2)$. It is [[decreasing-function|decreasing]] on $I$ if for all $x_1 < x_2$ in $I$, $f(x_1) > f(x_2)$. In words: a bigger input always gives a bigger (resp. smaller) output.',
        },
        {
          type: 'p',
          text: 'A good way to measure "how fast" a function climbs between two inputs is the slope of the line joining the two points on the graph — the [[average-rate-of-change]]:',
        },
        {
          type: 'math',
          tex: '\\frac{\\Delta y}{\\Delta x} = \\frac{f(b) - f(a)}{b - a}',
          caption: 'Positive on an interval where $f$ increases, negative where it decreases.',
        },
        {
          type: 'graph',
          x: [-3, 3],
          y: [-4, 4],
          functions: [{ expr: 'x^3 - 3x', label: '$f(x) = x^3 - 3x$' }],
          segments: [{ from: ['a', 'a^3 - 3a'], to: ['b', 'b^3 - 3b'], color: 'red' }],
          points: [
            { x: 'a', y: 'a^3 - 3a', color: 'red', label: 'A' },
            { x: 'b', y: 'b^3 - 3b', color: 'red', label: 'B' },
          ],
          sliders: [
            { name: 'a', min: -2.2, max: 2.2, step: 0.05, value: -2, label: '$a$' },
            { name: 'b', min: -2.2, max: 2.2, step: 0.05, value: -1.5, label: '$b$' },
          ],
          readouts: [{ label: 'average rate of change $\\frac{f(b) - f(a)}{b - a} =$', expr: '((b^3 - 3b) - (a^3 - 3a))/(b - a)', digits: 3 }],
          caption: 'Keep $a$ and $b$ close together and slide them across. The slope is positive left of $x = -1$, negative between $-1$ and $1$, and positive again after $1$.',
        },
        {
          type: 'p',
          text: 'From the graph, $f(x) = x^3 - 3x$ is increasing on $(-\\infty, -1)$, decreasing on $(-1, 1)$ and increasing on $(1, \\infty)$. The turning points are at $x = -1$ and $x = 1$.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Intervals of $x$, not $y$',
          text: 'Increasing/decreasing intervals are always stated with **inputs** — the left–right extent. A frequent mistake is to report the $y$-values the curve passes through, like "decreasing on $(-2, 2)$" for the function above, which uses the heights $2$ and $-2$ instead of the inputs $-1$ and $1$. (Most textbooks use open intervals here; at a single turning point the function is neither increasing nor decreasing.)',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why this matters for calculus',
          text: 'Shrink the interval in the average rate of change until $b$ is right next to $a$ and you get the slope *at a point* — the derivative. Calculus then turns "where is $f$ increasing?" into "where is the derivative positive?", an algebra problem instead of a picture-reading problem.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'mcq',
      prompt: 'The graph of $f(x) = -x^2 + 4x$ is shown. On which interval is $f$ decreasing?',
      graph: {
        type: 'graph',
        x: [-2, 6],
        y: [-5, 6],
        functions: [{ expr: '-x^2 + 4x', label: '$f(x) = -x^2 + 4x$' }],
        points: [{ x: 2, y: 4, label: '(2, 4)' }],
      },
      options: [
        {
          text: '$(-\\infty, 2)$',
          why: 'Reading left to right, the graph **rises** until $x = 2$. That is where $f$ is increasing.',
        },
        {
          text: '$(-\\infty, 4)$',
          why: '$4$ is the maximum *height*, a $y$-value. Intervals of increase/decrease are written with $x$-values.',
        },
        {
          text: '$(2, \\infty)$',
          correct: true,
          why: 'To the right of the vertex at $x = 2$, every step right takes the graph lower.',
        },
        {
          text: '$(0, 4)$',
          why: 'Those are the zeros of $f$. Between them the graph first rises and then falls, so it is not decreasing on the whole interval.',
        },
      ],
      explanation: 'The parabola opens downward with vertex $(2, 4)$. Moving left to right, it climbs until $x = 2$ and falls afterwards, so $f$ is increasing on $(-\\infty, 2)$ and decreasing on $(2, \\infty)$. Check with numbers: $f(3) = 3 > f(4) = 0$ even though $3 < 4$.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'numeric',
      prompt: 'Find the average rate of change of $f(x) = x^2 - 4x$ from $x = 1$ to $x = 4$.',
      answer: '1',
      hint: 'Compute $f(4)$ and $f(1)$, then $\\frac{f(4) - f(1)}{4 - 1}$.',
      explanation: '$f(4) = 16 - 16 = 0$ and $f(1) = 1 - 4 = -3$. So the average rate of change is $\\frac{0 - (-3)}{4 - 1} = \\frac{3}{3} = 1$. On average, the output rose by $1$ unit per unit of input — even though the parabola actually dips down to $-4$ at $x = 2$ in between. An average hides the details.',
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'concept',
      title: 'Peaks and valleys: local and absolute extrema',
      blocks: [
        {
          type: 'p',
          text: 'Where a function switches from increasing to decreasing, it has a peak; from decreasing to increasing, a valley. These are [[local-extremum|local (relative) extrema]] — "local" because they only need to beat their *neighbours*, not the whole graph.',
        },
        {
          type: 'definition',
          term: 'Local maximum and minimum',
          text: '$f$ has a **local maximum** at $x = c$ if $f(c) \\ge f(x)$ for all $x$ in some open interval around $c$; the number $f(c)$ is the local maximum **value**. A **local minimum** is defined the same way with $\\le$. If $f(c) \\ge f(x)$ for **every** $x$ in the domain, then $f(c)$ is the [[absolute-extremum|absolute maximum]] (similarly for absolute minimum).',
        },
        {
          type: 'graph',
          x: [-3, 3.2],
          y: [-4, 9],
          functions: [{ expr: 'x^3 - 3x', label: '$f(x) = x^3 - 3x$' }],
          points: [
            { x: -1, y: 2, label: 'local max (−1, 2)', color: 'green' },
            { x: 1, y: -2, label: 'local min (1, −2)', color: 'red' },
            { x: 2.5, y: 8.125, label: '(2.5, 8.125)' },
          ],
          hlines: [{ y: 2, color: 'green' }],
          caption: 'The peak at $(-1, 2)$ is higher than everything *near* it, but the graph rises past height $2$ again for $x > 2$ — so $2$ is not the absolute maximum.',
        },
        {
          type: 'derivation',
          title: 'Values at the turning points of $f(x) = x^3 - 3x$',
          steps: [
            { tex: 'f(-1) = (-1)^3 - 3(-1) = -1 + 3 = 2', why: 'Height at the peak, read off as $x = -1$ from the graph.' },
            { tex: 'f(1) = 1^3 - 3(1) = -2', why: 'Height at the valley, at $x = 1$.' },
            { tex: 'f(3) = 27 - 9 = 18 > 2', why: 'A larger input gives a larger output than the "peak", so the local max is not absolute.' },
          ],
          result: 'Local maximum value $2$ at $x = -1$; local minimum value $-2$ at $x = 1$. No absolute max or min, since $f(x) \\to \\pm\\infty$ at the ends.',
        },
        {
          type: 'callout',
          variant: 'exam',
          title: 'Value versus location',
          text: 'Say it like this: "$f$ has a local maximum **of $2$** **at $x = -1$**." The value is an output ($y$), the location is an input ($x$). Mixing the two up is the most common way to lose points on these questions.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Where this shows up',
          text: 'Finding the best value of something — the lowest cost, the highest score, the minimum error of a neural network — is a search for extrema. An algorithm like gradient descent walks downhill and stops in a valley, and it can get stuck in a *local* minimum that is not the absolute best. That distinction is exactly the one on this card.',
        },
      ],
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'truefalse',
      prompt: 'If a function has a local maximum at $x = c$, then $f(c)$ is the largest output the function ever produces.',
      answer: false,
      explanation: 'A local maximum only has to be at least as large as the outputs **near** $c$. For $f(x) = x^3 - 3x$, there is a local maximum of $2$ at $x = -1$, yet $f(3) = 18$. The statement describes an *absolute* maximum. Every absolute maximum (at an interior point) is a local maximum, but not the other way around.',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'concept',
      title: 'Symmetry: even and odd functions',
      blocks: [
        {
          type: 'p',
          text: 'Some graphs are mirror images of themselves. Spotting that symmetry halves your work: graph the right half, and the left half comes free. There are two kinds that matter for functions.',
        },
        {
          type: 'definition',
          term: 'Even and odd functions',
          text: '$f$ is [[even-function|even]] if $f(-x) = f(x)$ for every $x$ in the domain: the graph is symmetric about the $y$-axis. $f$ is [[odd-function|odd]] if $f(-x) = -f(x)$ for every $x$ in the domain: the graph is symmetric about the origin (a $180°$ rotation leaves it unchanged).',
        },
        {
          type: 'graph',
          x: [-3, 3],
          y: [-4, 4],
          equal: true,
          functions: [{ expr: 'x^3 - 3x', label: '$f(x) = x^3 - 3x$ (odd)' }],
          segments: [{ from: ['-a', '-(a^3 - 3a)'], to: ['a', 'a^3 - 3a'], color: 'red', dashed: true }],
          points: [
            { x: 'a', y: 'a^3 - 3a', color: 'red', label: '(a, f(a))' },
            { x: '-a', y: '-(a^3 - 3a)', color: 'red', label: '(−a, −f(a))' },
            { x: 0, y: 0 },
          ],
          sliders: [{ name: 'a', min: 0.1, max: 2.2, step: 0.05, value: 1.6, label: '$a$' }],
          caption: 'For an odd function, the points at $a$ and $-a$ are always opposite each other through the origin: the dashed segment\'s midpoint is $(0, 0)$.',
        },
        {
          type: 'derivation',
          title: 'Test $f(x) = x^3 - 4x$, $g(x) = x^4 - 2x^2 + 1$, $h(x) = x^2 + x$',
          steps: [
            { tex: 'f(-x) = (-x)^3 - 4(-x) = -x^3 + 4x = -(x^3 - 4x) = -f(x)', why: 'An odd power keeps the minus sign: $(-x)^3 = -x^3$. Every term flipped sign, so $f$ is **odd**.' },
            { tex: 'g(-x) = (-x)^4 - 2(-x)^2 + 1 = x^4 - 2x^2 + 1 = g(x)', why: 'Even powers erase the sign: $(-x)^4 = x^4$, $(-x)^2 = x^2$. Nothing changed, so $g$ is **even**.' },
            { tex: 'h(-x) = (-x)^2 + (-x) = x^2 - x', why: 'Compute $h(-x)$ the same way.' },
            { tex: 'x^2 - x \\ne h(x), \\quad x^2 - x \\ne -h(x) = -x^2 - x', why: 'It matches neither. One test point proves it: $h(-1) = 0$, while $h(1) = 2$ and $-h(1) = -2$. So $h$ is **neither**.' },
          ],
          result: 'Always compute $f(-x)$ fully, then compare it with both $f(x)$ and $-f(x)$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the names "even" and "odd"?',
          text: 'For polynomials the names come straight from the exponents. $(-x)^n = x^n$ when $n$ is even and $(-x)^n = -x^n$ when $n$ is odd. So a polynomial with only even powers (a constant counts as $x^0$) is even, one with only odd powers is odd, and a mix is neither. The words are not opposites: most functions are neither, and only $f(x) = 0$ is both.',
        },
      ],
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'mcq',
      prompt: 'Is $f(x) = x^3 + 1$ even, odd, both or neither?',
      options: [
        {
          text: 'Odd',
          why: '$x^3$ alone is odd, but the constant $1$ (which is $1 \\cdot x^0$, an even power) breaks the symmetry: $f(-x) = -x^3 + 1$, while $-f(x) = -x^3 - 1$.',
        },
        {
          text: 'Even',
          why: '$f(-1) = 0$ but $f(1) = 2$, so $f(-x) \\ne f(x)$.',
        },
        {
          text: 'Both',
          why: 'Only the zero function is both even and odd.',
        },
        {
          text: 'Neither',
          correct: true,
          why: '$f(-x) = -x^3 + 1$ equals neither $f(x) = x^3 + 1$ nor $-f(x) = -x^3 - 1$.',
        },
      ],
      explanation: 'Compute $f(-x) = (-x)^3 + 1 = -x^3 + 1$. Compare with $f(x) = x^3 + 1$ (different sign on $x^3$) and with $-f(x) = -x^3 - 1$ (different constant). It matches neither, so $f$ is neither even nor odd. Geometrically, the graph is $y = x^3$ shifted up by $1$, which moves its centre of symmetry from the origin to $(0, 1)$.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'expr',
      prompt: 'Let $f(x) = x^3 + 2x^2 - 5x$. Find and simplify $f(-x)$.',
      label: '$f(-x) =$',
      answer: '-x^3 + 2x^2 + 5x',
      answerTex: '-x^3 + 2x^2 + 5x',
      hint: 'Replace each $x$ with $(-x)$: $(-x)^3 + 2(-x)^2 - 5(-x)$.',
      explanation: '$(-x)^3 = -x^3$, $2(-x)^2 = 2x^2$ and $-5(-x) = 5x$, so $f(-x) = -x^3 + 2x^2 + 5x$. This is neither $f(x)$ nor $-f(x) = -x^3 - 2x^2 + 5x$ (the $x^2$ term has the wrong sign), so $f$ is neither even nor odd — as expected from its mix of odd and even powers.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'Piecewise-defined functions',
      blocks: [
        {
          type: 'p',
          text: 'Not every function is a single formula. A [[piecewise-function]] uses different formulas on different parts of the domain — like tax brackets, shipping rates, or a game\'s damage falloff ("full damage within 5 m, then decreasing"). You have already met one: the [[absolute-value]] function.',
        },
        {
          type: 'math',
          tex: '|x| = \\begin{cases} x, & x \\ge 0 \\\\ -x, & x < 0 \\end{cases}',
          caption: 'For negative inputs, $-x$ is positive: $|-3| = -(-3) = 3$.',
        },
        {
          type: 'p',
          text: 'To **evaluate**, first decide which condition the input satisfies, then use only that piece. To **graph**, draw each piece only over its own interval, with a solid dot where an endpoint is included and an open dot where it is not.',
        },
        {
          type: 'math',
          tex: 'f(x) = \\begin{cases} x + 2, & x < 0 \\\\ x^2, & 0 \\le x \\le 2 \\\\ 6 - x, & x > 2 \\end{cases}',
        },
        {
          type: 'derivation',
          title: 'Evaluate $f$ at $-1$, $0$, $2$ and $5$',
          steps: [
            { tex: 'f(-1) = -1 + 2 = 1', why: '$-1 < 0$, so use the first piece.' },
            { tex: 'f(0) = 0^2 = 0', why: '$0$ satisfies $0 \\le x \\le 2$ (not $x < 0$), so use the middle piece — even though the first piece would give $2$.' },
            { tex: 'f(2) = 2^2 = 4', why: '$2$ is included in the middle piece ($\\le 2$).' },
            { tex: 'f(5) = 6 - 5 = 1', why: '$5 > 2$, so use the last piece.' },
          ],
        },
        {
          type: 'graph',
          x: [-4, 7],
          y: [-2.5, 5.5],
          functions: [
            { expr: 'x + 2', domain: [-4, 0], label: '$x + 2$', color: 'blue' },
            { expr: 'x^2', domain: [0, 2], label: '$x^2$', color: 'green' },
            { expr: '6 - x', domain: [2, 7], label: '$6 - x$', color: 'purple' },
          ],
          points: [
            { x: 0, y: 2, open: true, color: 'blue', label: '(0, 2) not included' },
            { x: 0, y: 0, color: 'green', label: '(0, 0)' },
            { x: 2, y: 4, color: 'green', label: '(2, 4)' },
          ],
          caption: 'At $x = 0$ the graph **jumps** from height $2$ (open dot) down to $0$ (solid dot). At $x = 2$ the pieces meet, so there is no break there.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Piecewise = if / else',
          text: 'Every `if`/`else` chain that returns a value is a piecewise function. The conditions must not overlap (or the first match wins), exactly as each input in a math piecewise function must fall in one piece.',
        },
        {
          type: 'code',
          title: 'clamp.cpp',
          runnable: true,
          code: `#include <cstdio>

// A piecewise function: 0 below 0, x on [0, 1], 1 above 1.
double clamp01(double x) {
    if (x < 0) return 0;
    if (x > 1) return 1;
    return x;
}

int main() {
    double xs[] = {-0.5, 0.25, 0.8, 1.7};
    for (double x : xs) std::printf("clamp01(%g) = %g\\n", x, clamp01(x));
}`,
          output: `clamp01(-0.5) = 0
clamp01(0.25) = 0.25
clamp01(0.8) = 0.8
clamp01(1.7) = 1`,
          annotations: [
            { lines: '4-8', text: 'Three pieces: $0$ for $x < 0$, $1$ for $x > 1$, and $x$ in between. Games use `clamp` constantly — for health bars, volume, and keeping values on screen.' },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'numeric',
      prompt: 'Let $g(x) = \\begin{cases} 2x - 1, & x \\le 3 \\\\ x^2 - 10, & x > 3 \\end{cases}$. Find $g(3) + g(4)$.',
      answer: '11',
      hint: '$3$ satisfies $x \\le 3$; $4$ satisfies $x > 3$.',
      explanation: 'Since $3 \\le 3$, use the first piece: $g(3) = 2(3) - 1 = 5$. Since $4 > 3$, use the second: $g(4) = 16 - 10 = 6$. So $g(3) + g(4) = 11$. Using the wrong piece at the boundary, $g(3) = 9 - 10 = -1$, would give $5$ instead.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'error',
      prompt: 'A student tests whether $f(x) = x^3 + x^2$ is even or odd. Tap the first incorrect line.',
      lines: [
        '$f(-x) = (-x)^3 + (-x)^2$',
        '$= -x^3 - x^2$',
        '$= -(x^3 + x^2)$',
        '$= -f(x)$, so $f$ is odd',
      ],
      errorLines: [2],
      explanation: 'Line 2 treats $(-x)^2$ as $-x^2$. But squaring removes the sign: $(-x)^2 = (-x)(-x) = x^2$. Correctly, $f(-x) = -x^3 + x^2$, which equals neither $f(x)$ nor $-f(x) = -x^3 - x^2$. So $f$ is **neither** even nor odd — as you would expect from a mix of an odd power and an even power.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'concept',
      title: 'Putting it together: a full graph analysis',
      blocks: [
        {
          type: 'p',
          text: 'In College Algebra (and again in Calculus I) you will be asked to describe a function completely. Work through the same checklist every time; each item uses a tool from this lesson or the last.',
        },
        {
          type: 'steps',
          items: [
            { title: 'Domain', text: 'Look for denominators and even roots.' },
            { title: 'Intercepts', text: '$y$-intercept $f(0)$; $x$-intercepts from $f(x) = 0$.' },
            { title: 'Symmetry', text: 'Compute $f(-x)$: even, odd or neither?' },
            { title: 'Increasing / decreasing and extrema', text: 'From the graph, find where it rises and falls, and the peaks and valleys between.' },
            { title: 'Range', text: 'Read the lowest and highest heights the graph reaches.' },
          ],
        },
        {
          type: 'derivation',
          title: 'Analyse $f(x) = x^4 - 4x^2$',
          steps: [
            { tex: '\\text{Domain: } (-\\infty, \\infty)', why: 'A polynomial: no denominators, no roots.' },
            { tex: 'f(0) = 0; \\quad x^4 - 4x^2 = x^2(x - 2)(x + 2) = 0 \\implies x = 0, \\pm 2', why: 'Factor out $x^2$, then a difference of squares.' },
            { tex: 'f(-x) = (-x)^4 - 4(-x)^2 = x^4 - 4x^2 = f(x)', why: 'Only even powers, so $f$ is even: the graph is symmetric about the $y$-axis.' },
            { tex: 'f(\\pm\\sqrt{2}) = 4 - 8 = -4, \\quad f(0) = 0', why: 'The graph (below) has valleys at $x = \\pm\\sqrt{2}$ and a peak at $x = 0$. Evaluate there: $(\\sqrt{2})^4 = 4$ and $(\\sqrt{2})^2 = 2$.' },
            { tex: '\\text{Range: } [-4, \\infty)', why: 'The valleys at height $-4$ are the lowest points; the ends rise without bound.' },
          ],
          result: 'Decreasing on $(-\\infty, -\\sqrt{2})$ and $(0, \\sqrt{2})$; increasing on $(-\\sqrt{2}, 0)$ and $(\\sqrt{2}, \\infty)$. Local max $0$ at $x = 0$; absolute min $-4$ at $x = \\pm\\sqrt{2}$.',
        },
        {
          type: 'graph',
          x: [-3, 3],
          y: [-5, 5],
          functions: [{ expr: 'x^4 - 4x^2', label: '$f(x) = x^4 - 4x^2$' }],
          points: [
            { x: '-sqrt(2)', y: -4, label: '(−√2, −4)', color: 'red' },
            { x: 'sqrt(2)', y: -4, label: '(√2, −4)', color: 'red' },
            { x: 0, y: 0, label: '(0, 0)', color: 'green' },
            { x: -2, y: 0, label: '(−2, 0)' },
            { x: 2, y: 0, label: '(2, 0)' },
          ],
          caption: 'Even symmetry: the left half is the mirror image of the right half.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Finding turning points exactly',
          text: 'Here we read the turning points $x = \\pm\\sqrt{2}$ from the graph and confirmed them by evaluating. Locating them *exactly* without a graph is one of the first things you will learn to do with derivatives in Calculus I.',
        },
      ],
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'fill',
      prompt: 'The graph of $g(x) = x^3 - 12x$ is shown. Complete the description.',
      graph: {
        type: 'graph',
        x: [-5, 5],
        y: [-22, 22],
        yStep: 4,
        functions: [{ expr: 'x^3 - 12x', label: '$g(x) = x^3 - 12x$' }],
        points: [
          { x: -2, y: 16, label: '(−2, 16)' },
          { x: 2, y: -16, label: '(2, −16)' },
        ],
      },
      template: '$g$ has a local maximum value of ___ at $x =$ ___, and $g$ is decreasing on the interval ___.',
      blanks: [{ answers: ['$16$'] }, { answers: ['$-2$'] }, { answers: ['$(-2, 2)$'] }],
      wordBank: ['$16$', '$-16$', '$-2$', '$2$', '$(-2, 2)$', '$(-16, 16)$'],
      explanation: 'The peak is at $(-2, 16)$: the **value** is the height $16$ and the **location** is $x = -2$. Check: $g(-2) = -8 + 24 = 16$. Between the peak at $x = -2$ and the valley at $x = 2$ the graph falls, so $g$ is decreasing on $(-2, 2)$ — an interval of $x$-values, not the heights $(-16, 16)$.',
    },
  ],
  takeaways: [
    '$f(a)$ is the height of the graph at $x = a$; the solutions of $f(x) = c$ are where the line $y = c$ meets the graph.',
    'The $y$-intercept is $(0, f(0))$; the $x$-intercepts come from the zeros, the solutions of $f(x) = 0$.',
    'Increasing/decreasing intervals are written with $x$-values; the average rate of change $\\frac{f(b) - f(a)}{b - a}$ measures the climb.',
    'A local max/min only beats nearby outputs; an absolute one beats them all. State the value ($y$) *and* the location ($x$).',
    'Even: $f(-x) = f(x)$, symmetric about the $y$-axis. Odd: $f(-x) = -f(x)$, symmetric about the origin. Most functions are neither.',
    'For a piecewise function, choose the piece by the input\'s condition; use open and closed dots at the boundaries.',
  ],
  reading: [
    {
      title: 'OpenStax College Algebra 2e — 3.3 Rates of Change and Behavior of Graphs',
      url: 'https://openstax.org/books/college-algebra-2e/pages/3-3-rates-of-change-and-behavior-of-graphs',
      source: 'openstax',
      note: 'Average rate of change, increasing and decreasing intervals, and local and absolute extrema with many graphs.',
    },
    {
      title: 'OpenStax College Algebra 2e — 3.2 Domain and Range',
      url: 'https://openstax.org/books/college-algebra-2e/pages/3-2-domain-and-range',
      source: 'openstax',
      note: 'The second half of this section covers piecewise-defined functions and how to graph them.',
    },
    {
      title: 'Desmos Graphing Calculator',
      url: 'https://www.desmos.com/calculator',
      source: 'desmos',
      note: 'Type in $x^3 - 3x$ or a piecewise rule like `y = {x < 0: x + 2, x^2}` and click the turning points to see their coordinates.',
    },
  ],
};
