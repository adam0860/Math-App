import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'calc1-extrema',
  title: 'Maximum and Minimum Values',
  summary: 'Where a function peaks and bottoms out — and a foolproof method for finding those points on a closed interval.',
  minutes: 18,
  objectives: [
    'Distinguish absolute (global) extrema from local extrema, on a graph and by definition',
    'State the Extreme Value Theorem precisely and explain what goes wrong when a hypothesis fails',
    'Explain Fermat\'s theorem and why $f\'(c) = 0$ does *not* guarantee an extremum',
    'Find the critical numbers of a function, including points where $f\'$ does not exist',
    'Use the closed interval method to find absolute extrema of a continuous function on $[a, b]$',
  ],
  steps: [
    {
      kind: 'concept',
      title: 'Peaks and valleys: absolute extrema',
      blocks: [
        {
          type: 'p',
          text: 'A huge share of applied mathematics is a search for the *best* value: the cheapest design, the shortest path, the highest point of a jump arc, the moment a projectile is closest to a target. Mathematically, every one of these asks for the largest or smallest output of a function. This unit is about how derivatives find those values, and this lesson lays the foundation.',
        },
        {
          type: 'p',
          text: 'First we need precise vocabulary. The highest output a function ever reaches on its domain is its **absolute maximum**; the lowest is its **absolute minimum**. Together they are called [[absolute-extremum|absolute extrema]] (singular: extremum).',
        },
        {
          type: 'definition',
          term: 'Absolute maximum and minimum',
          text: 'Let $c$ be a number in the domain $D$ of $f$. Then $f(c)$ is the **absolute maximum** value of $f$ on $D$ if $f(c) \\ge f(x)$ for **every** $x$ in $D$, and the **absolute minimum** value if $f(c) \\le f(x)$ for every $x$ in $D$.',
        },
        {
          type: 'p',
          text: 'Notice the distinction between the *value* $f(c)$ (a height, a $y$-number) and the *location* $c$ (an $x$-number). "The maximum is $37$" and "the maximum occurs at $x = -1$" answer different questions; exam questions often ask for both.',
        },
        {
          type: 'graph',
          x: [-1.5, 4.5],
          y: [-35, 42],
          yStep: 10,
          functions: [{ expr: '3x^4 - 16x^3 + 18x^2', label: '$f(x) = 3x^4 - 16x^3 + 18x^2$, $-1 \\le x \\le 4$', domain: [-1, 4] }],
          points: [
            { x: -1, y: 37, label: 'abs max (−1, 37)', color: 'green' },
            { x: 0, y: 0, label: 'local min (0, 0)', color: 'purple' },
            { x: 1, y: 5, label: 'local max (1, 5)', color: 'purple' },
            { x: 3, y: -27, label: 'abs + local min (3, −27)', color: 'red' },
            { x: 4, y: 32, label: '(4, 32)' },
          ],
          caption: 'On $[-1, 4]$ the absolute maximum is $37$, reached at the left endpoint. The absolute minimum is $-27$, at $x = 3$. The bump at $x = 1$ is a peak only *locally*.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Brute force is not enough',
          text: 'A program can approximate a maximum by sampling $f$ at thousands of points and keeping the biggest. That works until the true peak is a narrow spike between samples, or until each evaluation is expensive (a physics simulation, a neural network). Calculus narrows the search to a *handful* of candidate points that are guaranteed to contain the answer.',
        },
      ],
    },
    {
      kind: 'concept',
      title: 'Local extrema: the view from nearby',
      blocks: [
        {
          type: 'p',
          text: 'In the graph above, the point $(1, 5)$ is not the highest point overall, but if you stood there you would see lower ground in both directions. That is a **local maximum**: a peak compared with its *neighbours*. Think of a hilltop that is not the tallest mountain in the range.',
        },
        {
          type: 'definition',
          term: 'Local maximum and minimum',
          text: '$f(c)$ is a **local maximum** value of $f$ if $f(c) \\ge f(x)$ for all $x$ in some **open interval** containing $c$. It is a **local minimum** value if $f(c) \\le f(x)$ for all $x$ in some open interval containing $c$. Collectively these are [[local-extremum|local extrema]] (also called relative extrema).',
        },
        {
          type: 'table',
          headers: ['Point', 'Absolute?', 'Local?', 'Reason'],
          rows: [
            ['$(-1, 37)$', 'max', 'no', 'Highest point overall, but it is an endpoint: no open interval around $-1$ lies in the domain.'],
            ['$(0, 0)$', 'no', 'min', 'Lower than everything near it, but $-27$ is lower.'],
            ['$(1, 5)$', 'no', 'max', 'Higher than its neighbours, but far below $37$.'],
            ['$(3, -27)$', 'min', 'min', 'Lowest point overall *and* lowest locally.'],
            ['$(4, 32)$', 'no', 'no', 'An endpoint that is neither the highest nor the lowest value.'],
          ],
          caption: 'Classifying the special points of $f(x) = 3x^4 - 16x^3 + 18x^2$ on $[-1, 4]$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the definition says "open interval"',
          text: 'A local extremum is about comparing $f(c)$ with values on **both** sides of $c$. Requiring an open interval around $c$ forces $c$ to have neighbours left and right inside the domain. That is exactly what makes calculus work here: with points on both sides, we can talk about the slope at $c$, which leads straight to Fermat\'s theorem two cards from now.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Endpoints: check your textbook\'s convention',
          text: 'With the open-interval definition (used by Stewart and in this app), an endpoint can **never** be a local extremum, though it can be an absolute one. Some textbooks (including OpenStax) use a one-sided version that allows endpoints. Either way, endpoints must be checked when hunting for absolute extrema — that part never changes.',
        },
      ],
    },
    {
      kind: 'mcq',
      prompt: 'For $f(x) = 3x^4 - 16x^3 + 18x^2$ on $[-1, 4]$ (graphed below), which statement is correct?',
      graph: {
        type: 'graph',
        x: [-1.5, 4.5],
        y: [-35, 42],
        yStep: 10,
        functions: [{ expr: '3x^4 - 16x^3 + 18x^2', domain: [-1, 4] }],
        points: [
          { x: -1, y: 37 },
          { x: 0, y: 0 },
          { x: 1, y: 5 },
          { x: 3, y: -27 },
          { x: 4, y: 32 },
        ],
      },
      options: [
        {
          text: '$f$ has a local maximum at $x = 1$ but its absolute maximum occurs at $x = -1$',
          correct: true,
          why: 'At $x = 1$ the value $5$ beats all nearby values, but the overall highest value is $f(-1) = 37$ at the endpoint.',
        },
        {
          text: 'The absolute maximum is $5$, at $x = 1$',
          why: 'This is the only "hilltop" in the picture, but absolute means "compared with the whole domain". $f(-1) = 37$ and $f(4) = 32$ are both larger.',
        },
        {
          text: 'The absolute minimum is $0$, at $x = 0$',
          why: '$(0, 0)$ is a local minimum, but $f(3) = -27$ is lower.',
        },
        {
          text: '$f$ has a local maximum at $x = 4$',
          why: 'With our open-interval definition, an endpoint cannot be a local extremum — and $f(4) = 32$ is not even the highest value on the interval.',
        },
      ],
      explanation: 'The two words answer different questions: *local* compares $f(c)$ with nearby values only, *absolute* compares it with every value on the domain. Here the absolute maximum $37$ sits at an endpoint, the absolute minimum $-27$ at $x = 3$, and $x = 1$ is a local maximum only.',
    },
    {
      kind: 'concept',
      title: 'The Extreme Value Theorem: when a max is guaranteed',
      blocks: [
        {
          type: 'p',
          text: 'Before we hunt for a maximum, it helps to know one exists. Plenty of functions have none: $f(x) = x$ on all of $\\mathbb{R}$ grows forever. Remarkably, two simple hypotheses guarantee both an absolute maximum and an absolute minimum.',
        },
        {
          type: 'theorem',
          name: 'Extreme Value Theorem (EVT)',
          text: 'If $f$ is **continuous** on a **closed** interval $[a, b]$, then $f$ attains an absolute maximum value $f(c)$ and an absolute minimum value $f(d)$ at some numbers $c$ and $d$ in $[a, b]$.',
        },
        {
          type: 'p',
          text: 'The [[extreme-value-theorem]] is a cousin of the [[intermediate-value-theorem]]: both promise that something exists without telling you where. Every hypothesis is essential — drop either one and the conclusion can fail:',
        },
        {
          type: 'table',
          headers: ['Function', 'What fails', 'Result'],
          rows: [
            ['$f(x) = x$ on $(0, 1)$', 'interval not closed', 'Values get arbitrarily close to $0$ and $1$ but never reach them: no max, no min.'],
            ['$f(x) = \\frac{1}{x}$ on $(0, 1]$', 'interval not closed', 'Minimum $1$ at $x = 1$, but $f$ blows up near $0$: no max.'],
            ['$f(x) = x^2$ on $[0, \\infty)$', 'interval not bounded', 'Minimum $0$, but no maximum.'],
            ['$f(x) = x$ for $0 \\le x < 1$, $f(1) = 0$', 'not continuous at $1$', 'Values approach $1$ but never equal it: no max.'],
          ],
          caption: 'Each counterexample breaks exactly one hypothesis of the EVT.',
        },
        {
          type: 'graph',
          x: [-0.2, 1.4],
          y: [-0.2, 1.4],
          equal: true,
          functions: [{ expr: 'x', label: '$y = x$ on $(0, 1)$', domain: [0, 1] }],
          points: [
            { x: 0, y: 0, open: true, label: 'not included' },
            { x: 1, y: 1, open: true, label: 'not included' },
          ],
          hlines: [{ y: 1 }],
          caption: 'On the open interval $(0, 1)$, every value $f(x) = x$ is beaten by a slightly larger one, so there is no largest value. The "obvious" maximum $1$ is never actually reached.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why continuity and closedness matter',
          text: 'Continuity rules out jumps and blow-ups, so the graph cannot sneak toward a height without arriving. A closed, bounded interval includes its endpoints, so the graph cannot escape off the edge of the interval toward a value it never reaches. The full proof relies on the *completeness* of the real numbers (no "gaps" in $\\mathbb{R}$) and belongs to a real analysis course.',
        },
        {
          type: 'callout',
          variant: 'tip',
          text: 'The EVT gives a guarantee, not a converse. A function can fail the hypotheses and still have extrema — e.g. $\\cos x$ on $(-\\infty, \\infty)$ has maximum $1$ and minimum $-1$. The theorem only says what *must* happen when the hypotheses hold.',
        },
      ],
    },
    {
      kind: 'mcq',
      prompt: 'For which function does the Extreme Value Theorem **guarantee** an absolute maximum and an absolute minimum?',
      options: [
        {
          text: '$f(x) = \\frac{1}{x}$ on $[-1, 1]$',
          why: '$\\frac{1}{x}$ is not continuous at $0$, which lies inside $[-1, 1]$. In fact it has neither a max nor a min there.',
        },
        {
          text: '$f(x) = x^2$ on $(-1, 2)$',
          why: 'The interval is open. This function happens to have a minimum ($0$ at $x = 0$) but no maximum: values approach $4$ without reaching it.',
        },
        {
          text: '$f(x) = \\sqrt{x}$ on $[0, 9]$',
          correct: true,
          why: '$\\sqrt{x}$ is continuous on all of $[0, 9]$ (one-sided at $0$, which is all a closed interval needs) and the interval is closed, so the EVT applies. The min is $0$ and the max is $3$.',
        },
        {
          text: '$f(x) = \\tan x$ on $[0, \\pi]$',
          why: '$\\tan x$ has a vertical asymptote at $x = \\frac{\\pi}{2}$, so it is not continuous on $[0, \\pi]$.',
        },
      ],
      explanation: 'The EVT needs two things: continuity on the whole interval, and a closed interval $[a, b]$. Only $\\sqrt{x}$ on $[0, 9]$ has both. Always check for points inside the interval where the function breaks (division by zero, asymptotes).',
    },
    {
      kind: 'concept',
      title: 'Fermat\'s theorem: flat tops and bottoms',
      blocks: [
        {
          type: 'p',
          text: 'Look at any smooth peak or valley and the tangent line there is horizontal. That observation, made precise, is the key that turns "find the maximum" into an algebra problem.',
        },
        {
          type: 'theorem',
          name: 'Fermat\'s Theorem',
          text: 'If $f$ has a local maximum or local minimum at $c$, **and** $f\'(c)$ exists, then $f\'(c) = 0$.',
        },
        {
          type: 'graph',
          x: [-2.5, 2.5],
          y: [-3, 3],
          functions: [{ expr: 'x^3 - 3x', label: '$f(x) = x^3 - 3x$' }],
          tangents: [{ expr: 'x^3 - 3x', at: 'a' }],
          sliders: [{ name: 'a', min: -2.2, max: 2.2, step: 0.05, value: -1.6, label: '$a$' }],
          readouts: [{ label: 'tangent slope $f\'(a) = 3a^2 - 3 =$', expr: '3a^2 - 3', digits: 3 }],
          caption: 'Slide the tangent along the curve. At the local maximum $(-1, 2)$ and the local minimum $(1, -2)$ the slope is exactly $0$; everywhere else it is not.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why Fermat\'s theorem is true',
          text: 'Suppose $f$ has a local maximum at $c$. Then for small $h$, $f(c + h) \\le f(c)$, so $f(c+h) - f(c) \\le 0$.\n\nFor $h > 0$, dividing by a positive $h$ keeps the sign: $\\frac{f(c+h) - f(c)}{h} \\le 0$, so the right-hand limit gives $f\'(c) \\le 0$.\n\nFor $h < 0$, dividing by a negative $h$ flips it: $\\frac{f(c+h) - f(c)}{h} \\ge 0$, so the left-hand limit gives $f\'(c) \\ge 0$.\n\nSince $f\'(c)$ exists, both one-sided limits equal it, and the only number that is both $\\le 0$ and $\\ge 0$ is $0$. (A local minimum works the same with the inequalities reversed.)',
        },
        {
          type: 'compare',
          left: {
            title: 'The converse is false',
            tone: 'bad',
            tex: ['f(x) = x^3', "f'(0) = 0", '\\text{but no extremum at } 0'],
            text: '$x^3$ keeps increasing through $0$: the tangent is flat for an instant, but the curve never turns around.',
          },
          right: {
            title: 'Extremum without $f\'(c) = 0$',
            tone: 'neutral',
            tex: ['f(x) = |x|', '\\text{minimum at } 0', "f'(0) \\text{ does not exist}"],
            text: 'A corner can be a minimum. Fermat says nothing here, because its hypothesis "$f\'(c)$ exists" fails.',
          },
        },
        {
          type: 'callout',
          variant: 'history',
          text: 'Pierre de Fermat found maxima and minima this way in the 1630s, decades before Newton and Leibniz formalised derivatives. His method of "adequality" essentially set a difference quotient to zero and then let the increment vanish.',
        },
      ],
    },
    {
      kind: 'truefalse',
      prompt: 'If $f\'(c) = 0$, then $f$ has a local maximum or a local minimum at $x = c$.',
      answer: false,
      explanation: 'This is the converse of Fermat\'s theorem, and it is false. For $f(x) = x^3$, $f\'(0) = 3 \\cdot 0^2 = 0$, yet $x^3 < 0$ just left of $0$ and $x^3 > 0$ just right, so there is no extremum. A horizontal tangent makes $c$ a *candidate*; whether it is actually a max, a min or neither must be checked separately (the next lessons give tests for that).',
    },
    {
      kind: 'concept',
      title: 'Critical numbers: the list of suspects',
      blocks: [
        {
          type: 'p',
          text: 'Fermat\'s theorem, together with the $|x|$ example, says a local extremum at $c$ can only happen in two ways: the tangent is horizontal ($f\'(c) = 0$), or there is no tangent slope at all ($f\'(c)$ does not exist). Those inputs get a name.',
        },
        {
          type: 'definition',
          term: 'Critical number',
          text: 'A [[critical-number]] of $f$ is a number $c$ **in the domain of** $f$ such that either $f\'(c) = 0$ or $f\'(c)$ does not exist.',
        },
        {
          type: 'theorem',
          name: 'Fermat, restated',
          text: 'If $f$ has a local extremum at $c$, then $c$ is a critical number of $f$.',
        },
        {
          type: 'derivation',
          title: 'Find the critical numbers of $f(x) = x^{3/5}(4 - x)$',
          steps: [
            { tex: 'f(x) = 4x^{3/5} - x^{8/5}', why: 'Distribute first so we can use the power rule term by term instead of the product rule. Note $x^{3/5} = \\sqrt[5]{x^3}$ is defined for every real $x$, so the domain is $\\mathbb{R}$.' },
            { tex: "f'(x) = \\tfrac{12}{5}x^{-2/5} - \\tfrac{8}{5}x^{3/5}", why: 'Power rule: $\\frac{d}{dx}x^{3/5} = \\frac{3}{5}x^{-2/5}$ and $\\frac{d}{dx}x^{8/5} = \\frac{8}{5}x^{3/5}$.' },
            { tex: '= \\frac{12 - 8x}{5x^{2/5}}', why: 'Common denominator $5x^{2/5}$: multiply the second term by $\\frac{x^{2/5}}{x^{2/5}}$, using $x^{3/5} \\cdot x^{2/5} = x$.' },
            { tex: "f'(x) = 0 \\iff 12 - 8x = 0 \\iff x = \\tfrac{3}{2}", why: 'A fraction is zero exactly when its numerator is zero (and the denominator is not).' },
            { tex: "f'(0) \\text{ does not exist}", why: 'At $x = 0$ the denominator $5x^{2/5}$ is $0$. Since $0$ **is** in the domain of $f$, it counts.' },
          ],
          result: 'The critical numbers are $x = \\frac{3}{2}$ and $x = 0$.',
        },
        {
          type: 'graph',
          x: [-2, 5],
          y: [-4, 4],
          functions: [{ expr: 'root(x, 5)^3 * (4 - x)', label: '$y = x^{3/5}(4 - x)$' }],
          points: [
            { x: 1.5, y: '1.5^0.6 * 2.5', label: 'f′ = 0 (local max)' },
            { x: 0, y: 0, label: 'f′ DNE (vertical tangent)' },
          ],
          caption: 'Both critical numbers are visible: a smooth peak at $x = \\frac{3}{2}$ and a vertical tangent at $x = 0$. Being critical makes a point a suspect, not a culprit — $x = 0$ turns out to be neither a max nor a min.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: '"In the domain" is part of the definition',
          text: 'For $f(x) = \\frac{1}{x}$, $f\'(x) = -\\frac{1}{x^2}$ does not exist at $x = 0$ — but neither does $f$. A function cannot have a max or min at a point where it has no value, so $0$ is **not** a critical number of $\\frac{1}{x}$.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'Find all critical numbers of $f(x) = 2x^3 - 3x^2 - 12x + 1$. Enter them separated by commas.',
      label: '$x =$',
      answer: ['-1', '2'],
      hint: 'Differentiate, set $f\'(x) = 0$, and factor out the common factor $6$.',
      explanation: '$f\'(x) = 6x^2 - 6x - 12 = 6(x^2 - x - 2) = 6(x - 2)(x + 1)$. A polynomial\'s derivative exists everywhere, so the only critical numbers come from $f\'(x) = 0$: $x = 2$ and $x = -1$.',
    },
    {
      kind: 'concept',
      title: 'The closed interval method',
      blocks: [
        {
          type: 'p',
          text: 'Now combine everything. On a closed interval, the EVT promises an absolute max and min exist. Each one occurs either at an endpoint or at an interior point; an interior extremum is also a local extremum, so by Fermat it occurs at a critical number. That leaves a short, finite list of candidates — just evaluate $f$ at each.',
        },
        {
          type: 'steps',
          items: [
            { title: 'Check the hypotheses', text: 'Confirm $f$ is continuous on the closed interval $[a, b]$.' },
            { title: 'Find critical numbers', text: 'Solve $f\'(x) = 0$ and find where $f\'$ does not exist. Keep only those **inside** $(a, b)$.' },
            { title: 'Evaluate', text: 'Compute $f$ at every critical number from step 2 **and** at both endpoints $a$ and $b$.' },
            { title: 'Compare', text: 'The largest value is the absolute maximum; the smallest is the absolute minimum.' },
          ],
        },
        {
          type: 'derivation',
          title: 'Absolute extrema of $f(x) = x^3 - 3x^2 + 1$ on $[-\\frac{1}{2}, 4]$',
          steps: [
            { tex: '\\text{polynomial} \\implies \\text{continuous on } [-\\tfrac12, 4]', why: 'Polynomials are continuous everywhere, so the EVT guarantees a max and a min exist.' },
            { tex: "f'(x) = 3x^2 - 6x = 3x(x - 2)", why: 'Power rule, then factor out $3x$.' },
            { tex: 'x = 0, \\quad x = 2', why: '$f\'$ exists everywhere, so the critical numbers are the zeros of $f\'$. Both lie inside $(-\\frac12, 4)$, so both are kept.' },
            { tex: 'f(0) = 1, \\quad f(2) = 8 - 12 + 1 = -3', why: 'Evaluate $f$ at the critical numbers.' },
            { tex: 'f(-\\tfrac12) = -\\tfrac18 - \\tfrac34 + 1 = \\tfrac18, \\quad f(4) = 64 - 48 + 1 = 17', why: 'Evaluate $f$ at the endpoints. Careful with $(-\\frac12)^3 = -\\frac18$ and $3(-\\frac12)^2 = \\frac34$.' },
            { tex: '\\max = 17 \\text{ at } x = 4, \\quad \\min = -3 \\text{ at } x = 2', why: 'Compare the four values $1, -3, \\frac18, 17$.' },
          ],
          result: 'The absolute maximum is $17$ (at the endpoint $x = 4$) and the absolute minimum is $-3$ (at the critical number $x = 2$).',
        },
        {
          type: 'graph',
          x: [-1, 4.5],
          y: [-5, 19],
          yStep: 5,
          functions: [{ expr: 'x^3 - 3x^2 + 1', label: '$y = x^3 - 3x^2 + 1$', domain: [-0.5, 4] }],
          points: [
            { x: -0.5, y: 0.125, label: '(−½, ⅛)' },
            { x: 0, y: 1, label: '(0, 1)' },
            { x: 2, y: -3, label: 'min (2, −3)', color: 'red' },
            { x: 4, y: 17, label: 'max (4, 17)', color: 'green' },
          ],
          caption: 'The local maximum at $(0, 1)$ is a candidate that loses: the right endpoint is much higher.',
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'Graders look for the full candidate table: every critical number in the interval, both endpoints, and the value of $f$ at each. The most common lost points: forgetting an endpoint, including a critical number that lies *outside* $[a, b]$, and arithmetic slips with negative inputs.',
        },
        {
          type: 'code',
          title: 'closed_interval.cpp',
          runnable: true,
          code: `#include <cstdio>
#include <vector>

double f(double x) { return x * x * x - 3 * x * x + 1; }

int main() {
    const double a = -0.5, b = 4.0;
    // Candidates: both endpoints + critical numbers (f'(x) = 3x(x - 2) = 0).
    std::vector<double> candidates = {a, b, 0.0, 2.0};

    double maxX = a, minX = a;
    for (double c : candidates) {
        std::printf("f(%g) = %g\\n", c, f(c));
        if (f(c) > f(maxX)) maxX = c;
        if (f(c) < f(minX)) minX = c;
    }
    std::printf("absolute max %g at x = %g\\n", f(maxX), maxX);
    std::printf("absolute min %g at x = %g\\n", f(minX), minX);
}`,
          output: `f(-0.5) = 0.125
f(4) = 17
f(0) = 1
f(2) = -3
absolute max 17 at x = 4
absolute min -3 at x = 2`,
          annotations: [
            { lines: 9, text: 'Calculus did the hard part: instead of millions of samples, only four candidates can possibly win.' },
            { lines: '12-16', text: 'Step 3 and 4 of the method: evaluate at each candidate and keep the best.' },
          ],
        },
      ],
    },
    {
      kind: 'order',
      prompt: 'Put the steps of the closed interval method in order.',
      lines: [
        'Check that $f$ is continuous on $[a, b]$',
        'Compute $f\'(x)$',
        'Find the critical numbers of $f$ that lie in $(a, b)$',
        'Evaluate $f$ at those critical numbers and at $a$ and $b$',
        'The largest value is the absolute max; the smallest is the absolute min',
      ],
      distractors: ['Keep only the critical numbers where $f\'\'(x) < 0$'],
      explanation: 'Continuity first (it is what guarantees the extrema exist), then derivative, critical numbers, a table of values including the endpoints, and finally a comparison. No second-derivative information is needed: on a closed interval, simply comparing values settles everything, and discarding candidates early risks throwing away the winner.',
    },
    {
      kind: 'numeric',
      prompt: 'Find the absolute **maximum value** of $f(x) = 2x^3 - 3x^2 - 12x + 1$ on $[-2, 3]$. (You found its critical numbers two questions ago.)',
      label: 'max value $=$',
      answer: '8',
      hint: 'Evaluate $f$ at $x = -2, -1, 2, 3$ and compare.',
      explanation: 'The critical numbers $-1$ and $2$ both lie in $[-2, 3]$. The candidates give $f(-2) = -16 - 12 + 24 + 1 = -3$, $f(-1) = -2 - 3 + 12 + 1 = 8$, $f(2) = 16 - 12 - 24 + 1 = -19$ and $f(3) = 54 - 27 - 36 + 1 = -8$. The largest is $8$ (at $x = -1$); the smallest, $-19$ at $x = 2$, is the absolute minimum.',
    },
    {
      kind: 'concept',
      title: 'Beyond polynomials: trig functions and corners',
      blocks: [
        {
          type: 'p',
          text: 'The method never changes, but non-polynomial functions add two wrinkles: trig equations can have several solutions in the interval, and $f\'$ may fail to exist somewhere. Both must be handled to get a complete candidate list.',
        },
        {
          type: 'derivation',
          title: 'Absolute extrema of $f(x) = x - 2\\sin x$ on $[0, 2\\pi]$',
          steps: [
            { tex: "f'(x) = 1 - 2\\cos x", why: 'Derivative of $x$ is $1$; derivative of $\\sin x$ is $\\cos x$. $f\'$ exists everywhere.' },
            { tex: '1 - 2\\cos x = 0 \\iff \\cos x = \\tfrac12', why: 'Set the derivative equal to zero and isolate the cosine.' },
            { tex: 'x = \\tfrac{\\pi}{3}, \\quad x = \\tfrac{5\\pi}{3}', why: 'On $[0, 2\\pi]$ cosine equals $\\frac12$ in quadrant I and quadrant IV. Missing the second solution is the classic error.' },
            { tex: 'f(\\tfrac{\\pi}{3}) = \\tfrac{\\pi}{3} - 2 \\cdot \\tfrac{\\sqrt3}{2} = \\tfrac{\\pi}{3} - \\sqrt3 \\approx -0.685', why: '$\\sin\\frac{\\pi}{3} = \\frac{\\sqrt3}{2}$.' },
            { tex: 'f(\\tfrac{5\\pi}{3}) = \\tfrac{5\\pi}{3} + \\sqrt3 \\approx 6.968', why: '$\\sin\\frac{5\\pi}{3} = -\\frac{\\sqrt3}{2}$, and subtracting $2 \\cdot (-\\frac{\\sqrt3}{2})$ adds $\\sqrt3$.' },
            { tex: 'f(0) = 0, \\quad f(2\\pi) = 2\\pi \\approx 6.283', why: 'Endpoints: $\\sin 0 = \\sin 2\\pi = 0$.' },
          ],
          result: 'Absolute max $\\frac{5\\pi}{3} + \\sqrt3 \\approx 6.97$ at $x = \\frac{5\\pi}{3}$; absolute min $\\frac{\\pi}{3} - \\sqrt3 \\approx -0.68$ at $x = \\frac{\\pi}{3}$.',
        },
        {
          type: 'graph',
          x: [-0.3, 6.6],
          y: [-1.5, 7.8],
          xStep: 'pi',
          functions: [{ expr: 'x - 2sin(x)', label: '$y = x - 2\\sin x$', domain: [0, '2pi'] }],
          points: [
            { x: 'pi/3', y: 'pi/3 - sqrt(3)', label: 'min', color: 'red' },
            { x: '5pi/3', y: '5pi/3 + sqrt(3)', label: 'max', color: 'green' },
            { x: '2pi', y: '2pi', label: '(2π, 2π)' },
          ],
          caption: 'The maximum at $x = \\frac{5\\pi}{3}$ only narrowly beats the right endpoint — you would not want to guess from a sketch.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Don\'t forget where $f\'$ does not exist',
          text: 'For $f(x) = x^{2/3}$, $f\'(x) = \\frac{2}{3x^{1/3}}$ is **never** zero, so a student who only solves $f\'(x) = 0$ finds no critical numbers. But $f\'(0)$ does not exist while $f(0) = 0$ does, so $0$ is critical — and it is exactly where the minimum lives (a cusp).',
        },
      ],
    },
    {
      kind: 'error',
      prompt: 'A student finds the absolute extrema of $f(x) = x^{2/3}$ on $[-1, 8]$. Tap the first line that is wrong.',
      lines: [
        '$f$ is continuous on $[-1, 8]$, so absolute extrema exist.',
        '$f\'(x) = \\frac{2}{3}x^{-1/3} = \\dfrac{2}{3\\sqrt[3]{x}}$',
        '$f\'(x)$ is never $0$, so $f$ has no critical numbers.',
        'Endpoints: $f(-1) = 1$ and $f(8) = 4$.',
        'Absolute max $4$ at $x = 8$; absolute min $1$ at $x = -1$.',
      ],
      errorLines: [3],
      explanation: 'Line 3 is right that $f\'$ is never zero, but a critical number can also be a point where $f\'$ **does not exist**. $f\'(0)$ is undefined (division by zero) while $f(0) = 0$ is defined, so $0$ is a critical number. Adding it to the table: $f(-1) = 1$, $f(0) = 0$, $f(8) = 4$. The absolute max is $4$ at $x = 8$ and the absolute min is $0$ at $x = 0$.',
    },
    {
      kind: 'fill',
      prompt: 'Complete the summary of where absolute extrema can occur.',
      template: 'If $f$ is continuous on $[a, b]$, its absolute extrema occur either at an ___ of the interval or at a ___ inside it, where $f\'$ is ___ or does not exist.',
      blanks: [{ answers: ['endpoint'] }, { answers: ['critical number'] }, { answers: ['$0$'] }],
      wordBank: ['endpoint', 'critical number', '$0$', 'inflection point', '$1$', 'asymptote'],
      explanation: 'The EVT guarantees the extrema exist; Fermat\'s theorem shows that an extremum in the interior must sit at a critical number ($f\'(c) = 0$ or $f\'(c)$ undefined). The only other places are the endpoints, where Fermat does not apply because there is no open interval around them. Hence the candidate list: endpoints + critical numbers.',
    },
    {
      kind: 'numeric',
      prompt: 'Find the absolute **minimum value** of $f(x) = x - 2\\sin x$ on $[0, \\pi]$. Give an exact answer or a decimal to at least 2 places.',
      label: 'min value $=$',
      answer: 'pi/3 - sqrt(3)',
      answerTex: '\\frac{\\pi}{3} - \\sqrt{3} \\approx -0.685',
      hint: 'Which solutions of $\\cos x = \\frac12$ lie in $[0, \\pi]$? Compare with the endpoint values.',
      explanation: 'Only $x = \\frac{\\pi}{3}$ solves $\\cos x = \\frac12$ in $[0, \\pi]$ ($\\frac{5\\pi}{3}$ is outside the interval and must be discarded). The candidates are $f(0) = 0$, $f(\\frac{\\pi}{3}) = \\frac{\\pi}{3} - \\sqrt3 \\approx -0.685$ and $f(\\pi) = \\pi - 2\\sin\\pi = \\pi \\approx 3.14$. The smallest is $\\frac{\\pi}{3} - \\sqrt3$.',
    },
  ],
  takeaways: [
    'An **absolute** extremum compares $f(c)$ with every value on the domain; a **local** extremum compares it only with values on an open interval around $c$.',
    'Extreme Value Theorem: a function continuous on a closed interval $[a, b]$ attains both an absolute max and an absolute min there.',
    'Fermat\'s theorem: at a local extremum where $f\'(c)$ exists, $f\'(c) = 0$. The converse is false ($x^3$ at $0$).',
    'Critical numbers are points in the domain where $f\'(c) = 0$ or $f\'(c)$ does not exist; they are the only interior candidates for extrema.',
    'Closed interval method: evaluate $f$ at the critical numbers in $(a, b)$ and at both endpoints; the largest and smallest values win.',
  ],
  reading: [
    {
      title: 'OpenStax Calculus Volume 1 — 4.3 Maxima and Minima',
      url: 'https://openstax.org/books/calculus-volume-1/pages/4-3-maxima-and-minima',
      source: 'openstax',
      note: 'Free textbook section covering the EVT, Fermat\'s theorem and the closed interval method with more examples.',
    },
    {
      title: "Paul's Online Notes — Minimum and Maximum Values",
      url: 'https://tutorial.math.lamar.edu/Classes/CalcI/MinMaxValues.aspx',
      source: 'paul',
      note: 'Careful discussion of absolute vs relative extrema with many graphs.',
    },
    {
      title: "Paul's Online Notes — Finding Absolute Extrema",
      url: 'https://tutorial.math.lamar.edu/Classes/CalcI/AbsExtrema.aspx',
      source: 'paul',
      note: 'Extra practice with the closed interval method, including trig and root functions.',
    },
  ],
};
