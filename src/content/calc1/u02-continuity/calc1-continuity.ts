import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'calc1-continuity',
  title: 'Continuity and Discontinuities',
  summary: 'What it really means to draw a graph "without lifting your pen", the three ways a function can break, and how to glue pieces together seamlessly.',
  minutes: 17,
  objectives: [
    'State the three-part definition of continuity at a point and check each condition',
    'Classify a discontinuity as removable, jump or infinite using one-sided limits',
    'Use one-sided continuity to describe continuity on closed intervals',
    'Find where sums, products, quotients and compositions of familiar functions are continuous',
    'Choose a parameter that makes a piecewise function continuous',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'The definition: three conditions at a point',
      blocks: [
        {
          type: 'p',
          text: 'Informally, a function is continuous if you can draw its graph without lifting your pen. That picture is a good start, but it cannot settle hard cases, and it says nothing about *a single point*. Calculus needs a test you can actually run at $x = a$ using limits.',
        },
        {
          type: 'p',
          text: 'The idea: near $a$, the outputs $f(x)$ should home in on the actual value $f(a)$ — no hole, no jump, no surprise. In the language of [[limit|limits]], "what $f$ approaches" must equal "what $f$ is".',
        },
        {
          type: 'definition',
          term: 'Continuity at a point',
          text: 'A function $f$ is **continuous at $a$** if all three conditions hold:\n\n1. $f(a)$ is defined ($a$ is in the [[domain]] of $f$);\n2. $\\lim_{x \\to a} f(x)$ exists (both [[one-sided-limit|one-sided limits]] exist and agree);\n3. $\\lim_{x \\to a} f(x) = f(a)$.\n\nIf any condition fails, $f$ is **discontinuous at $a$**, and $a$ is called a point of discontinuity.',
        },
        {
          type: 'derivation',
          title: 'Is $f(x) = \\begin{cases} x^2 + 1, & x < 1 \\\\ 3x - 1, & x \\ge 1 \\end{cases}$ continuous at $x = 1$?',
          steps: [
            { tex: 'f(1) = 3(1) - 1 = 2', why: 'Condition 1. Since $1 \\ge 1$, the value at $x = 1$ comes from the **second** piece.' },
            { tex: '\\lim_{x \\to 1^-} f(x) = \\lim_{x \\to 1^-} (x^2 + 1) = 2', why: 'Approaching from the left means $x < 1$, so use the first piece. It is a polynomial, so substitute $x = 1$.' },
            { tex: '\\lim_{x \\to 1^+} f(x) = \\lim_{x \\to 1^+} (3x - 1) = 2', why: 'From the right $x > 1$, so use the second piece and substitute.' },
            { tex: '\\lim_{x \\to 1} f(x) = 2', why: 'Condition 2. The one-sided limits agree, so the two-sided limit exists.' },
            { tex: '\\lim_{x \\to 1} f(x) = 2 = f(1)', why: 'Condition 3. The limit equals the function value.' },
          ],
          result: 'All three conditions hold, so $f$ is continuous at $x = 1$: the two pieces meet exactly at the point $(1, 2)$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why three conditions instead of one?',
          text: 'The single equation $\\lim_{x \\to a} f(x) = f(a)$ secretly contains all three: it only makes sense if the left side exists (condition 2) and the right side exists (condition 1). Listing them separately is useful because **each one can fail on its own**, and *which* one fails tells you what kind of break you are looking at. When you prove continuity on an exam, check all three explicitly.',
        },
        {
          type: 'callout',
          variant: 'tip',
          text: 'Condition 3 is what makes "just plug it in" legal. Whenever $f$ is continuous at $a$, you may compute $\\lim_{x \\to a} f(x)$ by direct substitution — that is exactly what you did in the limits unit.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'mcq',
      prompt: 'Let $g(x) = \\dfrac{x^2 - 9}{x - 3}$. Which condition of continuity fails at $x = 3$?',
      options: [
        {
          text: 'Condition 1: $g(3)$ is not defined',
          correct: true,
          why: 'Substituting $x = 3$ gives $\\frac{0}{0}$, so $3$ is not in the domain. The first condition fails, and that is enough for a discontinuity.',
        },
        {
          text: 'Condition 2: $\\lim_{x \\to 3} g(x)$ does not exist',
          why: 'The limit does exist: for $x \\ne 3$, $g(x) = \\frac{(x-3)(x+3)}{x-3} = x + 3$, so the limit is $6$.',
        },
        {
          text: 'Condition 3 only: the limit is $6$ but $g(3) = 0$',
          why: '$\\frac{0}{0}$ is not $0$ — it is undefined. There is no value $g(3)$ to compare with.',
        },
        {
          text: 'None — $g$ is continuous at $3$ because it simplifies to $x + 3$',
          why: 'The simplification is only valid for $x \\ne 3$. The original formula still has a hole at $x = 3$.',
        },
      ],
      explanation: 'Factor: $g(x) = \\frac{(x - 3)(x + 3)}{x - 3} = x + 3$ for $x \\ne 3$. So $\\lim_{x \\to 3} g(x) = 6$ exists, but $g(3)$ is undefined. The graph is the line $y = x + 3$ with a hole at $(3, 6)$.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Three kinds of breaks',
      blocks: [
        {
          type: 'p',
          text: 'Discontinuities are sorted by *what the function does near* $a$, which you detect with one-sided limits. There are three types you must be able to recognise on sight.',
        },
        {
          type: 'heading',
          text: '1. Removable: the limit exists, but the point is wrong or missing',
        },
        {
          type: 'p',
          text: 'A [[removable-discontinuity]] occurs when $\\lim_{x \\to a} f(x) = L$ exists (a finite number), but either $f(a)$ is undefined (a [[hole]]) or $f(a) \\ne L$ (a displaced point). Redefining the single value $f(a) = L$ "removes" the break.',
        },
        {
          type: 'graph',
          x: [-1, 4],
          y: [-1, 6],
          height: 220,
          functions: [{ expr: '(x^2 - 4)/(x - 2)', label: '$y = \\frac{x^2 - 4}{x - 2}$, but $f(2) = 1$' }],
          points: [
            { x: 2, y: 4, open: true, label: '(2, 4) hole' },
            { x: 2, y: 1, label: 'f(2) = 1' },
          ],
          caption: 'The limit at $2$ is $4$, but the function value is $1$. Condition 3 fails. Redefining $f(2) = 4$ would repair it.',
        },
        {
          type: 'heading',
          text: '2. Jump: both one-sided limits exist but disagree',
        },
        {
          type: 'p',
          text: 'A [[jump-discontinuity]] occurs when $\\lim_{x \\to a^-} f(x)$ and $\\lim_{x \\to a^+} f(x)$ are both finite but different. Condition 2 fails, and no single value of $f(a)$ can fix it, because the two sides are heading to different heights.',
        },
        {
          type: 'graph',
          x: [-2, 4],
          y: [-3, 4],
          height: 220,
          functions: [
            { expr: 'x + 1', domain: [-2, 1], label: '$x + 1$ for $x < 1$' },
            { expr: 'x - 2', domain: [1, 4], label: '$x - 2$ for $x \\ge 1$', color: 'blue' },
          ],
          points: [
            { x: 1, y: 2, open: true, label: '(1, 2)' },
            { x: 1, y: -1, label: '(1, −1)' },
          ],
          caption: 'Left limit $2$, right limit $-1$: a jump of size $3$.',
        },
        {
          type: 'heading',
          text: '3. Infinite: the function blows up',
        },
        {
          type: 'p',
          text: 'An [[infinite-discontinuity]] occurs when at least one one-sided limit is $\\infty$ or $-\\infty$. The graph has a [[vertical-asymptote]] at $x = a$.',
        },
        {
          type: 'graph',
          x: [-3, 5],
          y: [-5, 5],
          height: 220,
          functions: [
            { expr: '1/(x - 1)', domain: [-3, 0.98], label: '$y = \\frac{1}{x - 1}$' },
            { expr: '1/(x - 1)', domain: [1.02, 5], color: 'blue' },
          ],
          vlines: [{ x: 1, label: 'x = 1' }],
          caption: 'As $x \\to 1^+$ the values go to $\\infty$; as $x \\to 1^-$ they go to $-\\infty$.',
        },
        {
          type: 'table',
          headers: ['Type', 'One-sided limits at $a$', 'Fixable by redefining $f(a)$?'],
          rows: [
            ['Removable', 'equal and finite', 'Yes'],
            ['Jump', 'finite but different', 'No'],
            ['Infinite', 'at least one is $\\pm\\infty$', 'No'],
          ],
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Jumps in games: snapping to a grid',
          text: 'Tile-based games compute a tile index with `floor(x / tileSize)`. As a function of $x$ that is a staircase: a jump discontinuity at every tile edge. That is exactly what you want for snapping, but it is a bug when a *visual* value jumps — a camera that snaps between tiles, or an animation curve whose pieces do not meet, produces a visible "pop". Smooth movement needs continuous functions.',
        },
        {
          type: 'deepdive',
          title: 'A fourth kind: oscillation',
          blocks: [
            {
              type: 'p',
              text: 'Some functions fail more violently. $f(x) = \\sin\\left(\\frac{1}{x}\\right)$ oscillates between $-1$ and $1$ infinitely often as $x \\to 0$, so neither one-sided limit exists, yet the function stays bounded. This is sometimes called an *essential* or *oscillating* discontinuity. Most courses (and this app) focus on the three types above.',
            },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'fill',
      prompt: 'Classify the discontinuities of $f(x) = \\dfrac{x + 3}{x^2 - 9}$.',
      template: '$f$ has a ___ discontinuity at $x = -3$ and a ___ discontinuity at $x = 3$.',
      blanks: [{ answers: ['removable'] }, { answers: ['infinite'] }],
      wordBank: ['removable', 'infinite', 'jump'],
      hint: 'Factor the denominator as $(x - 3)(x + 3)$ and cancel what you can.',
      explanation: 'For $x \\ne -3$, $f(x) = \\frac{x + 3}{(x - 3)(x + 3)} = \\frac{1}{x - 3}$. At $x = -3$ the limit is $\\frac{1}{-6} = -\\frac{1}{6}$, a finite number, but $f(-3)$ is undefined: **removable** (a hole). At $x = 3$ the factor $x - 3$ does not cancel, so $\\frac{1}{x - 3} \\to \\pm\\infty$: **infinite** (a vertical asymptote). A factor that cancels gives a hole; one that survives in the denominator gives an asymptote.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'numeric',
      prompt: 'The function $f(x) = \\dfrac{x^2 - x - 6}{x - 3}$ has a removable discontinuity at $x = 3$. What value should $f(3)$ be given to make $f$ continuous there?',
      label: '$f(3) =$',
      answer: '5',
      hint: 'Factor the numerator, cancel, and find the limit as $x \\to 3$.',
      explanation: 'Factor: $x^2 - x - 6 = (x - 3)(x + 2)$, so $f(x) = x + 2$ for $x \\ne 3$ and $\\lim_{x \\to 3} f(x) = 5$. Defining $f(3) = 5$ makes all three conditions hold. The repaired function is simply $y = x + 2$ — the hole has been filled.',
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'concept',
      title: 'One-sided continuity and continuity on an interval',
      blocks: [
        {
          type: 'p',
          text: 'Some functions only live on one side of a point. $f(x) = \\sqrt{x}$ is not defined for $x < 0$, so $\\lim_{x \\to 0} \\sqrt{x}$ (two-sided) does not exist. Yet the graph clearly starts at the origin without a break. [[one-sided-continuity|One-sided continuity]] captures this.',
        },
        {
          type: 'definition',
          term: 'One-sided continuity',
          text: '$f$ is **continuous from the right** at $a$ if $\\lim_{x \\to a^+} f(x) = f(a)$, and **continuous from the left** at $a$ if $\\lim_{x \\to a^-} f(x) = f(a)$. It is continuous at $a$ exactly when it is continuous from both sides.',
        },
        {
          type: 'definition',
          term: 'Continuity on an interval',
          text: '$f$ is **continuous on an open interval** $(a, b)$ if it is continuous at every point of it. It is **continuous on a closed interval** $[a, b]$ if it is continuous on $(a, b)$, continuous from the right at $a$, and continuous from the left at $b$.',
        },
        {
          type: 'p',
          text: 'So $\\sqrt{x}$ is continuous on $[0, \\infty)$: at $0$ only the right side is required. This endpoint convention matters in the next lesson, where theorems need continuity on a *closed* interval.',
        },
        {
          type: 'p',
          text: 'The **floor function** $\\lfloor x \\rfloor$ (the greatest integer $\\le x$) is the classic one-sided example. At $x = 2$: $\\lfloor 2 \\rfloor = 2$, values just to the right are also $2$, but values just to the left (like $1.99$) give $1$.',
        },
        {
          type: 'graph',
          x: [-1, 4],
          y: [-1.5, 4],
          height: 240,
          segments: [
            { from: [-1, -1], to: [0, -1], color: 'blue' },
            { from: [0, 0], to: [1, 0], color: 'blue' },
            { from: [1, 1], to: [2, 1], color: 'blue' },
            { from: [2, 2], to: [3, 2], color: 'blue' },
            { from: [3, 3], to: [4, 3], color: 'blue' },
          ],
          points: [
            { x: 0, y: 0, color: 'blue' },
            { x: 1, y: 1, color: 'blue' },
            { x: 2, y: 2, color: 'blue', label: '(2, 2)' },
            { x: 3, y: 3, color: 'blue' },
            { x: 0, y: -1, open: true, color: 'blue' },
            { x: 1, y: 0, open: true, color: 'blue' },
            { x: 2, y: 1, open: true, color: 'blue', label: '(2, 1)' },
            { x: 3, y: 2, open: true, color: 'blue' },
          ],
          caption: '$y = \\lfloor x \\rfloor$. Each step includes its left end (filled dot) and excludes its right end (open dot), so at every integer the function is continuous from the right but not from the left.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Not defined is not the same as discontinuous',
          text: 'Strictly speaking, continuity is only *asked about* at points where it could make sense. $\\frac{1}{x}$ is continuous at every point of its domain, so it is a **continuous function** — it just has a break at $0$, where it is not defined. Most textbooks still say "$\\frac{1}{x}$ has an infinite discontinuity at $0$". Read questions carefully: "continuous on its domain" and "continuous on $\\mathbb{R}$" are different claims.',
        },
      ],
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'mcq',
      prompt: 'Which statement about $f(x) = \\lfloor x \\rfloor$ at $x = 2$ is correct?',
      options: [
        {
          text: 'It is continuous from the left but not from the right',
          why: 'Backwards. The left-hand limit is $1$, which does not equal $f(2) = 2$.',
        },
        {
          text: 'It is continuous from the right but not from the left',
          correct: true,
          why: '$\\lim_{x \\to 2^+} \\lfloor x \\rfloor = 2 = f(2)$, while $\\lim_{x \\to 2^-} \\lfloor x \\rfloor = 1 \\ne 2$.',
        },
        {
          text: 'It is continuous at $2$',
          why: 'Continuity needs both sides to match $f(2)$. The left side approaches $1$.',
        },
        {
          text: 'It is continuous from neither side',
          why: 'The right side works: for $2 \\le x < 3$ the value is constantly $2$, which equals $f(2)$.',
        },
      ],
      explanation: 'Just right of $2$, $\\lfloor x \\rfloor = 2$; just left of $2$, $\\lfloor x \\rfloor = 1$. The value $f(2) = 2$ matches the right-hand limit only. This is a jump discontinuity of size $1$ that is right-continuous — the filled dot sits on the right-hand piece.',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'truefalse',
      prompt: 'If $\\lim_{x \\to a} f(x)$ exists, then $f$ is continuous at $a$.',
      answer: false,
      explanation: 'The limit existing is only condition 2. The function might be undefined at $a$ (like $\\frac{x^2 - 9}{x - 3}$ at $3$), or defined with the wrong value (like the displaced point $f(2) = 1$ earlier). Both are removable discontinuities: the limit exists, but continuity fails. You need the limit to *equal* $f(a)$.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'concept',
      title: 'Building continuous functions from pieces you know',
      blocks: [
        {
          type: 'p',
          text: 'Checking three conditions at every single point would be exhausting. Fortunately, continuity is preserved by the usual ways of combining functions — and every function you met in algebra and trig is continuous wherever it is defined.',
        },
        {
          type: 'theorem',
          name: 'Continuity of combinations',
          text: 'If $f$ and $g$ are continuous at $a$ and $c$ is a constant, then $f + g$, $f - g$, $cf$ and $fg$ are continuous at $a$, and $\\frac{f}{g}$ is continuous at $a$ provided $g(a) \\ne 0$.',
        },
        {
          type: 'theorem',
          name: 'Continuity of compositions',
          tex: '\\lim_{x \\to a} f\\big(g(x)\\big) = f\\Big(\\lim_{x \\to a} g(x)\\Big)',
          text: 'If $\\lim_{x \\to a} g(x) = L$ and $f$ is continuous at $L$, the limit may be moved inside $f$. In particular, if $g$ is continuous at $a$ and $f$ is continuous at $g(a)$, then $f \\circ g$ is continuous at $a$.',
        },
        {
          type: 'list',
          items: [
            '**Polynomials** are continuous on $(-\\infty, \\infty)$.',
            '**Rational functions** are continuous on their domains (everywhere the denominator is not zero).',
            '**Roots** $\\sqrt[n]{x}$ are continuous on their domains ($[0, \\infty)$ for even $n$, all reals for odd $n$).',
            '**Trig functions** are continuous on their domains; $\\sin$ and $\\cos$ everywhere, $\\tan$ except at odd multiples of $\\frac{\\pi}{2}$.',
            '**Exponentials** $b^x$ are continuous everywhere; **logarithms** are continuous on $(0, \\infty)$.',
          ],
        },
        {
          type: 'derivation',
          title: 'Where is $h(x) = \\dfrac{\\sqrt{x - 1}}{x - 3}$ continuous?',
          steps: [
            { tex: '\\sqrt{x - 1} \\text{ is continuous for } x - 1 \\ge 0, \\text{ i.e. } x \\ge 1', why: 'A composition: the polynomial $x - 1$ fed into $\\sqrt{\\;}$, which is continuous on $[0, \\infty)$. So we need the inside to be at least $0$.' },
            { tex: 'x - 3 \\text{ is continuous everywhere, and } x - 3 = 0 \\iff x = 3', why: 'The denominator is a polynomial; the quotient rule for continuity only excludes points where it is zero.' },
            { tex: 'h \\text{ is continuous on } [1, 3) \\cup (3, \\infty)', why: 'Combine: start from $x \\ge 1$ and remove $x = 3$. At the endpoint $1$ the continuity is from the right, which is all a closed endpoint needs.' },
          ],
          result: '$h$ is continuous on its whole domain, $[1, 3) \\cup (3, \\infty)$, with an infinite discontinuity at $x = 3$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the combination rules are true',
          text: 'They are the [[limit-laws]] in disguise. If $\\lim_{x \\to a} f(x) = f(a)$ and $\\lim_{x \\to a} g(x) = g(a)$, then the sum law gives $\\lim_{x \\to a} [f(x) + g(x)] = f(a) + g(a)$ — which is precisely the statement that $f + g$ is continuous at $a$. The quotient law needs a nonzero denominator, which is why $\\frac{f}{g}$ needs $g(a) \\ne 0$.',
        },
        {
          type: 'p',
          text: 'The composition rule lets you evaluate limits like $\\lim_{x \\to 2} \\sqrt{x^2 + 5} = \\sqrt{\\lim_{x \\to 2}(x^2 + 5)} = \\sqrt{9} = 3$ in one line: the square root is continuous at $9$, so the limit can pass inside it.',
        },
      ],
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'numeric',
      prompt: 'The function $h(x) = \\dfrac{x^2 + 1}{x^2 - 5x + 6}$ is continuous everywhere except at two values of $x$. Enter both, separated by a comma.',
      label: '$x =$',
      answer: ['2', '3'],
      hint: 'A rational function is continuous wherever its denominator is nonzero. Factor $x^2 - 5x + 6$.',
      explanation: 'The numerator and denominator are polynomials, hence continuous everywhere, so the quotient is continuous wherever the denominator is not zero. $x^2 - 5x + 6 = (x - 2)(x - 3)$ is zero at $x = 2$ and $x = 3$. Since $x^2 + 1$ is never zero, nothing cancels: both are infinite discontinuities.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'Gluing pieces together: choosing a parameter',
      blocks: [
        {
          type: 'p',
          text: 'A [[piecewise-function]] is built from formulas that are each continuous on their own intervals. The only places it can break are the **seams** where one formula hands over to the next. If a formula contains an unknown constant, you can often choose it so the seam closes.',
        },
        {
          type: 'p',
          text: 'Consider $f(x) = \\begin{cases} cx^2 + 1, & x < 2 \\\\ 4x - c, & x \\ge 2 \\end{cases}$. For $x \\ne 2$ each piece is a polynomial, so the only question is $x = 2$. Drag the slider and watch the gap at the seam.',
        },
        {
          type: 'graph',
          x: [-1, 4],
          y: [-1, 15],
          functions: [
            { expr: 'c*x^2 + 1', domain: [-1, 2], label: '$cx^2 + 1$' },
            { expr: '4x - c', domain: [2, 4], label: '$4x - c$', color: 'red' },
          ],
          points: [
            { x: 2, y: '4c + 1', open: true },
            { x: 2, y: '8 - c', color: 'red' },
          ],
          vlines: [{ x: 2, label: 'seam' }],
          sliders: [{ name: 'c', min: 0, max: 3, step: 0.05, value: 0.5, label: '$c$' }],
          readouts: [
            { label: 'left limit $4c + 1 =$', expr: '4c + 1' },
            { label: '$f(2) = 8 - c =$', expr: '8 - c' },
            { label: 'gap $=$', expr: '(8 - c) - (4c + 1)' },
          ],
          caption: 'The gap closes at exactly one value of $c$. Find it with the slider, then confirm it with algebra below.',
        },
        {
          type: 'derivation',
          title: 'Find $c$ so that $f$ is continuous at $x = 2$',
          steps: [
            { tex: '\\lim_{x \\to 2^-} f(x) = c(2)^2 + 1 = 4c + 1', why: 'Left of $2$ the first piece applies; it is a polynomial, so substitute $x = 2$.' },
            { tex: '\\lim_{x \\to 2^+} f(x) = 4(2) - c = 8 - c = f(2)', why: 'Right of $2$ (and at $2$ itself, since the second piece has $x \\ge 2$) the second piece applies.' },
            { tex: '4c + 1 = 8 - c', why: 'Continuity at the seam requires the left limit, right limit and value to agree. The right limit already equals $f(2)$, so one equation is enough.' },
            { tex: '5c = 7', why: 'Add $c$ to both sides and subtract $1$.' },
            { tex: 'c = \\frac{7}{5}', why: 'Divide by $5$.' },
          ],
          result: 'With $c = \\frac{7}{5} = 1.4$, both pieces arrive at height $4(1.4) + 1 = 6.6 = 8 - 1.4$, and $f$ is continuous everywhere.',
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'This is one of the most common continuity questions on exams. The recipe: (1) note each piece is continuous on its own interval; (2) compute the one-sided limits at the seam by substituting into the correct piece; (3) set them equal (and equal to $f(\\text{seam})$) and solve. With two unknown constants and two seams, you get two equations — a small system.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Seams in animation curves',
          text: 'Game animation and easing curves are often stitched together from polynomial pieces (splines). The same algebra you just did — make the pieces agree at the seam — is how spline libraries guarantee a curve has no jumps. (They go further and match slopes too, which is a derivative condition you will meet soon.) The program below checks the seam numerically.',
        },
        {
          type: 'code',
          title: 'seam.cpp',
          runnable: true,
          code: `#include <cstdio>

// f(x) = c x^2 + 1 for x < 2,  4x - c for x >= 2
double f(double x, double c) {
    if (x < 2.0) return c * x * x + 1.0;
    return 4.0 * x - c;
}

int main() {
    const double eps = 1e-6;
    const double cs[] = {1.0, 1.4, 2.0};
    for (double c : cs) {
        double left = f(2.0 - eps, c);   // just left of the seam
        double atSeam = f(2.0, c);       // the actual value f(2)
        std::printf("c = %.1f  left = %.4f  f(2) = %.4f  gap = %.4f\\n",
                    c, left, atSeam, atSeam - left);
    }
}`,
          output: `c = 1.0  left = 5.0000  f(2) = 7.0000  gap = 2.0000
c = 1.4  left = 6.6000  f(2) = 6.6000  gap = 0.0000
c = 2.0  left = 9.0000  f(2) = 6.0000  gap = -3.0000`,
          annotations: [
            { lines: '4-7', text: 'The piecewise function, written with an `if` exactly like the math.' },
            { lines: 13, text: 'A point a millionth to the left approximates the left-hand limit.' },
            { lines: 15, text: 'Only $c = 1.4$ closes the gap; other values leave a visible jump.' },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'numeric',
      prompt: 'Find the value of $k$ that makes $f(x) = \\begin{cases} kx + 3, & x < 1 \\\\ 2x^2 - k, & x \\ge 1 \\end{cases}$ continuous everywhere.',
      label: '$k =$',
      answer: '-1/2',
      answerTex: '-\\frac{1}{2}',
      hint: 'Substitute $x = 1$ into each piece and set the results equal.',
      explanation: 'Each piece is a polynomial, so the only possible break is at $x = 1$. Left limit: $k(1) + 3 = k + 3$. Right limit and value: $2(1)^2 - k = 2 - k$. Setting $k + 3 = 2 - k$ gives $2k = -1$, so $k = -\\frac{1}{2}$. Check: both pieces give $2.5$ at $x = 1$.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'error',
      prompt: 'A student finds $a$ so that $f(x) = \\begin{cases} x^2 - a, & x \\le 3 \\\\ ax + 1, & x > 3 \\end{cases}$ is continuous. Tap the first line that is wrong.',
      lines: [
        'Each piece is a polynomial, so only $x = 3$ needs checking.',
        'Left limit and value: $f(3) = 9 - a$. Right limit: $3a + 1$.',
        'Set them equal: $9 - a = 3a + 1$',
        'Rearrange: $9 - 1 = 3a - a$',
        'So $8 = 2a$ and $a = 4$.',
      ],
      errorLines: [4],
      explanation: 'Moving $-a$ from the left side to the right side means **adding** $a$ to both sides, giving $9 - 1 = 3a + a$, i.e. $8 = 4a$ and $a = 2$. Check: with $a = 2$ both pieces give $7$ at $x = 3$. With the student\'s $a = 4$, the left piece gives $5$ but the right gives $13$ — a jump.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'expr',
      prompt: 'The function $f(x) = \\dfrac{x^2 + x - 6}{x - 2}$ has a removable discontinuity at $x = 2$. Enter a formula for the continuous function $g$ that agrees with $f$ for every $x \\ne 2$ and fills the hole.',
      label: '$g(x) =$',
      answer: 'x + 3',
      hint: 'Factor the numerator: which factor cancels?',
      explanation: '$x^2 + x - 6 = (x - 2)(x + 3)$, so $f(x) = x + 3$ for $x \\ne 2$. The line $g(x) = x + 3$ is continuous everywhere, agrees with $f$ away from $2$, and has $g(2) = 5 = \\lim_{x \\to 2} f(x)$. This $g$ is called the *continuous extension* of $f$.',
    },
  ],
  takeaways: [
    '$f$ is continuous at $a$ when $f(a)$ is defined, $\\lim_{x \\to a} f(x)$ exists, and $\\lim_{x \\to a} f(x) = f(a)$; check all three.',
    'Removable: the limit exists but $f(a)$ is missing or wrong. Jump: finite one-sided limits disagree. Infinite: a one-sided limit is $\\pm\\infty$.',
    'At closed endpoints only one-sided continuity is required; $\\sqrt{x}$ is continuous on $[0, \\infty)$ and $\\lfloor x \\rfloor$ is right-continuous at every integer.',
    'Sums, products, quotients (nonzero denominator) and compositions of continuous functions are continuous, so polynomials, rational, root, trig, exponential and log functions are continuous on their domains.',
    'To make a piecewise function continuous, set the one-sided limits at each seam equal and solve for the parameter.',
  ],
  reading: [
    {
      title: 'OpenStax Calculus Volume 1 — 2.4 Continuity',
      url: 'https://openstax.org/books/calculus-volume-1/pages/2-4-continuity',
      source: 'openstax',
      note: 'The textbook section this lesson follows, with more classification examples and piecewise problems.',
    },
    {
      title: "Paul's Online Notes — Continuity",
      url: 'https://tutorial.math.lamar.edu/Classes/CalcI/Continuity.aspx',
      source: 'paul',
      note: 'Clear worked examples of checking the three conditions, plus a preview of the Intermediate Value Theorem.',
    },
    {
      title: 'Khan Academy — Calculus 1',
      url: 'https://www.khanacademy.org/math/calculus-1',
      source: 'khan',
      note: 'The "Limits and continuity" unit has short videos and practice sets on classifying discontinuities.',
    },
  ],
};
