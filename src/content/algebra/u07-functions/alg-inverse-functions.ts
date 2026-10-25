import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'alg-inverse-functions',
  title: 'Inverse Functions',
  summary: 'Running a function backwards: when it is possible, how to find the formula, and why the graph flips across $y = x$.',
  minutes: 18,
  objectives: [
    'Explain what an inverse function does and read $f^{-1}$ notation correctly',
    'Decide whether a function is one-to-one using the horizontal line test',
    'Find a formula for $f^{-1}$ by swapping $x$ and $y$ and solving',
    'Verify that two functions are inverses using composition',
    'Graph an inverse by reflecting across $y = x$, and restrict a domain to make a function invertible',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Undoing a function',
      blocks: [
        {
          type: 'p',
          text: 'A function turns inputs into outputs. Often we need the reverse: given the output, recover the input. A thermometer app converts Celsius to Fahrenheit with $F = \\frac{9}{5}C + 32$; a user who types a Fahrenheit value wants the Celsius one back. The function that does the reverse trip is the **inverse**.',
        },
        {
          type: 'p',
          text: 'Think of $f(x) = 2x + 3$ as a recipe: *multiply by 2, then add 3*. To undo it, reverse the steps **and** the order: *subtract 3, then divide by 2*. That gives $f^{-1}(x) = \\frac{x - 3}{2}$. Check: $f(5) = 13$, and $f^{-1}(13) = \\frac{10}{2} = 5$. The inverse took us home.',
        },
        {
          type: 'definition',
          term: 'Inverse function',
          text: 'Let $f$ be a one-to-one function with domain $A$ and range $B$. Its [[inverse-function]] $f^{-1}$ has domain $B$ and range $A$, and is defined by\n\n$$f^{-1}(y) = x \\iff f(x) = y.$$\n\nIn words: $f^{-1}$ sends each output of $f$ back to the input that produced it.',
        },
        {
          type: 'table',
          headers: ['$x$', '$0$', '$1$', '$2$', '$3$'],
          rows: [
            ['$f(x) = 2x + 3$', '$3$', '$5$', '$7$', '$9$'],
          ],
          caption: 'Reading the table backwards gives $f^{-1}$: $f^{-1}(3) = 0$, $f^{-1}(5) = 1$, $f^{-1}(7) = 2$, $f^{-1}(9) = 3$. Inputs and outputs trade places.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: '$f^{-1}$ is not $\\frac{1}{f}$',
          text: 'The $-1$ in $f^{-1}$ is **not** an exponent. $f^{-1}(x)$ means "the inverse function evaluated at $x$", while $\\frac{1}{f(x)}$ is the reciprocal of the output. For $f(x) = 2x + 3$: $f^{-1}(5) = 1$, but $\\frac{1}{f(5)} = \\frac{1}{13}$. (The notation is borrowed from composition: just as $5^{-1} \\cdot 5 = 1$, we have $f^{-1} \\circ f = $ "do nothing".)',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Inverses in programs',
          text: 'Encode/decode, serialize/deserialize, compress/decompress, encrypt/decrypt: each pair is a function and its inverse. In games, a camera converts **world** coordinates to **screen** coordinates to draw things; when the player clicks, you need the inverse — screen to world — to know what was clicked.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'truefalse',
      prompt: 'For any invertible function, $f^{-1}(x) = \\dfrac{1}{f(x)}$.',
      answer: false,
      explanation: 'The superscript $-1$ denotes the **inverse function**, not a reciprocal. For $f(x) = 2x + 3$, the inverse is $f^{-1}(x) = \\frac{x - 3}{2}$, whereas $\\frac{1}{f(x)} = \\frac{1}{2x + 3}$. At $x = 5$ these are $1$ and $\\frac{1}{13}$. If you want the reciprocal, write $\\frac{1}{f(x)}$ or $[f(x)]^{-1}$.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'numeric',
      prompt: 'Let $f(x) = 2x^3 - 5$. Find $f^{-1}(11)$.',
      label: '$f^{-1}(11) =$',
      answer: '2',
      hint: '$f^{-1}(11)$ is the input $x$ with $f(x) = 11$. Solve $2x^3 - 5 = 11$.',
      explanation: 'By definition, $f^{-1}(11) = x$ means $f(x) = 11$. Solve: $2x^3 - 5 = 11 \\implies 2x^3 = 16 \\implies x^3 = 8 \\implies x = 2$. Check: $f(2) = 16 - 5 = 11$. ✓ You do not need a formula for $f^{-1}$ to evaluate it at one number — just solve $f(x) = $ that number.',
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'concept',
      title: 'One-to-one functions and the horizontal line test',
      blocks: [
        {
          type: 'p',
          text: 'Not every function can be undone. Take $f(x) = x^2$. Both $f(3) = 9$ and $f(-3) = 9$. If someone tells you "the output was $9$", what was the input — $3$ or $-3$? There is no way to know, so a reverse rule would have to give *two* outputs for the input $9$. That is not a function.',
        },
        {
          type: 'definition',
          term: 'One-to-one function',
          text: 'A function is [[one-to-one-function|one-to-one]] if different inputs always give different outputs: $x_1 \\ne x_2 \\implies f(x_1) \\ne f(x_2)$. Equivalently, $f(x_1) = f(x_2)$ forces $x_1 = x_2$. **Only one-to-one functions have inverses.**',
        },
        {
          type: 'theorem',
          name: 'Horizontal line test',
          text: 'A function is one-to-one if and only if **no horizontal line meets its graph more than once**.',
        },
        {
          type: 'graph',
          x: [-3, 3],
          y: [-2, 5],
          functions: [
            { expr: 'x^2', label: '$y = x^2$ (fails)', color: 'blue' },
            { expr: 'x^3', label: '$y = x^3$ (passes)', color: 'red' },
          ],
          hlines: [{ y: 'c', label: 'y = c', color: 'gray' }],
          points: [
            { x: '-sqrt(c)', y: 'c', color: 'blue' },
            { x: 'sqrt(c)', y: 'c', color: 'blue' },
            { x: 'cbrt(c)', y: 'c', color: 'red' },
          ],
          sliders: [{ name: 'c', min: 0.25, max: 4.5, step: 0.25, value: 2, label: '$c$' }],
          caption: 'Every horizontal line above the $x$-axis hits the parabola twice (two inputs share an output) but hits $y = x^3$ exactly once.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why horizontal lines this time?',
          text: 'A horizontal line $y = c$ collects all points with output $c$. Two intersection points mean two inputs with the same output — exactly what makes undoing ambiguous. Compare the vertical line test, which checks that each *input* has one output (is it a function?). The horizontal line test checks that each *output* has one input (is the inverse a function?). Same idea, axes swapped.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'A quick sufficient condition',
          text: 'A function that is **increasing on its entire domain** (or decreasing on its entire domain) is automatically one-to-one: bigger inputs always give bigger outputs, so no output can repeat. Lines with nonzero slope, $x^3$, $\\sqrt{x}$ and (in a later unit) $e^x$ and $\\ln x$ all qualify.',
        },
      ],
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'mcq',
      prompt: 'Which function is one-to-one on its whole domain (so has an inverse)?',
      options: [
        { text: '$f(x) = x^2 - 4$', why: '$f(2) = f(-2) = 0$. A parabola always fails the horizontal line test.' },
        { text: '$f(x) = |x|$', why: '$|3| = |-3| = 3$, so two inputs share an output. The V shape fails the horizontal line test.' },
        { text: '$f(x) = x^3 + 2$', correct: true, why: 'This is $x^3$ shifted up $2$; it is increasing everywhere, so every horizontal line meets it exactly once.' },
        { text: '$f(x) = x^4$', why: 'Even powers lose the sign: $(-1)^4 = 1^4$. Fails the horizontal line test.' },
      ],
      explanation: 'Look for two different inputs with the same output. Even functions like $x^2 - 4$, $|x|$ and $x^4$ always have them, since $f(-a) = f(a)$. In contrast, $x^3 + 2$ is strictly increasing, so it is one-to-one; its inverse is $\\sqrt[3]{x - 2}$.',
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'concept',
      title: 'Finding the inverse formula',
      blocks: [
        {
          type: 'p',
          text: 'Reversing a recipe step by step works for simple functions, but a systematic algorithm handles anything you can solve algebraically. The idea: an inverse swaps the roles of input and output, so swap $x$ and $y$ in the equation — then solve for the new output.',
        },
        {
          type: 'steps',
          items: [
            { title: 'Check one-to-one', text: 'If $f$ is not one-to-one, there is no inverse (unless you restrict the domain).' },
            { title: 'Write $y = f(x)$', text: 'Replace $f(x)$ with $y$.' },
            { title: 'Swap $x$ and $y$', text: 'This is the "trade places" step.' },
            { title: 'Solve for $y$', text: 'Use any algebra needed — this is where the work is.' },
            { title: 'Rename', text: 'Write the result as $f^{-1}(x)$, and state its domain (= the range of $f$).' },
          ],
        },
        {
          type: 'derivation',
          title: 'Find $f^{-1}$ for $f(x) = \\dfrac{2x + 1}{x - 3}$',
          steps: [
            { tex: 'y = \\frac{2x + 1}{x - 3}', why: 'Write $y$ for $f(x)$. (This $f$ is one-to-one; its graph is a transformed $\\frac{1}{x}$.)' },
            { tex: 'x = \\frac{2y + 1}{y - 3}', why: 'Swap $x$ and $y$.' },
            { tex: 'x(y - 3) = 2y + 1', why: 'Multiply both sides by $y - 3$ to clear the fraction.' },
            { tex: 'xy - 3x = 2y + 1', why: 'Distribute.' },
            { tex: 'xy - 2y = 3x + 1', why: 'Collect every $y$-term on one side, everything else on the other.' },
            { tex: 'y(x - 2) = 3x + 1', why: 'Factor out $y$ — the key move when $y$ appears in more than one term.' },
            { tex: 'y = \\frac{3x + 1}{x - 2}', why: 'Divide by $x - 2$ (valid for $x \\ne 2$).' },
          ],
          result: '$f^{-1}(x) = \\dfrac{3x + 1}{x - 2}$, with domain $x \\ne 2$ — matching the range of $f$, which never outputs $2$.',
        },
        {
          type: 'table',
          headers: ['Property', '$f(x) = \\frac{2x+1}{x-3}$', '$f^{-1}(x) = \\frac{3x+1}{x-2}$'],
          rows: [
            ['Domain', 'all $x \\ne 3$', 'all $x \\ne 2$'],
            ['Range', 'all $y \\ne 2$', 'all $y \\ne 3$'],
          ],
          caption: 'Domain and range swap, just as inputs and outputs do.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'lerp and inverse lerp',
          text: 'Game code is full of $\\text{lerp}(a, b, t) = a + (b - a)t$, which turns a fraction $t \\in [0, 1]$ into a value between $a$ and $b$. Solving $v = a + (b - a)t$ for $t$ gives its inverse, `inverseLerp(a, b, v)` $= \\frac{v - a}{b - a}$, which answers "what fraction of the way from $a$ to $b$ is $v$?" — perfect for health bars and progress meters.',
        },
      ],
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'expr',
      prompt: 'Find the inverse of $f(x) = 5x - 7$.',
      label: '$f^{-1}(x) =$',
      answer: '(x + 7)/5',
      answerTex: '\\frac{x + 7}{5}',
      hint: 'Swap: $x = 5y - 7$. Now solve for $y$.',
      explanation: 'Write $y = 5x - 7$, swap to get $x = 5y - 7$, then solve: $x + 7 = 5y$, so $y = \\frac{x + 7}{5}$. This matches the recipe view: $f$ multiplies by $5$ then subtracts $7$, so $f^{-1}$ adds $7$ then divides by $5$. A common slip is $\\frac{x}{5} + 7$, which undoes the steps in the wrong order.',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'order',
      prompt: 'Put the steps for finding the inverse of $f(x) = \\dfrac{x + 4}{3}$ in order.',
      lines: [
        '$y = \\dfrac{x + 4}{3}$',
        '$x = \\dfrac{y + 4}{3}$',
        '$3x = y + 4$',
        '$y = 3x - 4$',
        '$f^{-1}(x) = 3x - 4$',
      ],
      distractors: ['$y = 3x + 4$'],
      explanation: 'Write $y = f(x)$, swap $x$ and $y$, multiply both sides by $3$, subtract $4$, and rename. The distractor $3x + 4$ comes from adding $4$ instead of subtracting it. Check the answer: $f(f^{-1}(x)) = \\frac{(3x - 4) + 4}{3} = x$. ✓',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'expr',
      prompt: 'Find the inverse of $f(x) = \\dfrac{x}{x + 2}$.',
      label: '$f^{-1}(x) =$',
      answer: '2x/(1 - x)',
      answerTex: '\\frac{2x}{1 - x}',
      domain: [2, 5],
      hint: 'Swap to $x = \\frac{y}{y + 2}$, multiply by $y + 2$, collect the $y$-terms on one side and factor out $y$.',
      explanation: 'Swap: $x = \\frac{y}{y + 2}$. Multiply: $x(y + 2) = y$, so $xy + 2x = y$. Collect $y$-terms: $2x = y - xy = y(1 - x)$. Divide: $y = \\frac{2x}{1 - x}$ (equivalently $\\frac{-2x}{x - 1}$). Check at $x = 2$: $f(2) = \\frac{2}{4} = \\frac{1}{2}$, and $f^{-1}\\left(\\frac{1}{2}\\right) = \\frac{1}{1/2} = 2$. ✓',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'concept',
      title: 'Verifying inverses with composition',
      blocks: [
        {
          type: 'p',
          text: 'If $f^{-1}$ really undoes $f$, then doing $f$ and then $f^{-1}$ should leave you exactly where you started — and so should the reverse order. "Leave the input unchanged" is the [[identity-function]] $I(x) = x$. This gives a clean test.',
        },
        {
          type: 'theorem',
          name: 'Inverse function property',
          tex: 'f\\big(f^{-1}(x)\\big) = x \\text{ for all } x \\text{ in the domain of } f^{-1}, \\qquad f^{-1}\\big(f(x)\\big) = x \\text{ for all } x \\text{ in the domain of } f',
          text: 'Conversely, if $f(g(x)) = x$ and $g(f(x)) = x$ on the appropriate domains, then $g = f^{-1}$.',
        },
        {
          type: 'derivation',
          title: 'Verify that $f(x) = x^3 + 1$ and $g(x) = \\sqrt[3]{x - 1}$ are inverses',
          steps: [
            { tex: 'f\\big(g(x)\\big) = \\left(\\sqrt[3]{x - 1}\\right)^3 + 1', why: 'Substitute $g(x)$ for the $x$ in $f$.' },
            { tex: '= (x - 1) + 1 = x', why: 'Cubing undoes a cube root, for every real number.' },
            { tex: 'g\\big(f(x)\\big) = \\sqrt[3]{(x^3 + 1) - 1}', why: 'Now substitute $f(x)$ into $g$.' },
            { tex: '= \\sqrt[3]{x^3} = x', why: 'A cube root undoes cubing, for every real $x$ (including negatives: $\\sqrt[3]{-8} = -2$).' },
          ],
          result: 'Both compositions give $x$, so $g = f^{-1}$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why check both directions — and the domains?',
          text: 'Consider $f(x) = x^2$ and $g(x) = \\sqrt{x}$. One direction looks perfect: $f(g(x)) = (\\sqrt{x})^2 = x$ for $x \\ge 0$. But the other fails: $g(f(x)) = \\sqrt{x^2} = |x|$, which equals $x$ only when $x \\ge 0$; for instance $g(f(-3)) = 3$. The second composition exposes that $x^2$ (on all of $\\mathbb{R}$) is not one-to-one. Checking both directions, with domains, catches this.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Inverses commute',
          text: 'In the last lesson you saw that $f \\circ g \\ne g \\circ f$ in general. A function and its inverse are the great exception: both orders give the identity.',
        },
      ],
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'error',
      prompt: 'A student checks whether $f(x) = 2x - 6$ and $g(x) = \\frac{x}{2} + 3$ are inverses. Tap the first incorrect line.',
      lines: [
        '$f(g(x)) = 2\\left(\\frac{x}{2} + 3\\right) - 6$',
        '$= x + 6 - 6 = x$',
        '$g(f(x)) = \\frac{2x - 6}{2} + 3$',
        '$= x - 6 + 3$',
        '$= x - 3$, so $f$ and $g$ are not inverses',
      ],
      errorLines: [4],
      explanation: 'Line 4 divides only the first term by $2$. Correctly, $\\frac{2x - 6}{2} = x - 3$, so $g(f(x)) = x - 3 + 3 = x$. Both compositions give $x$, so $f$ and $g$ **are** inverses. That makes sense: $f$ multiplies by $2$ then subtracts $6$; $g$ divides by $2$ then adds $3$ — and $\\frac{x + 6}{2} = \\frac{x}{2} + 3$.',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'concept',
      title: 'The graph of an inverse: reflect across $y = x$',
      blocks: [
        {
          type: 'p',
          text: 'If $(a, b)$ is on the graph of $f$, then $f(a) = b$, so $f^{-1}(b) = a$: the point $(b, a)$ is on the graph of $f^{-1}$. Swapping the coordinates of every point is a reflection across the line $y = x$. So the graph of $f^{-1}$ is the mirror image of the graph of $f$ in that diagonal line.',
        },
        {
          type: 'graph',
          x: [-4, 4],
          y: [-4, 4],
          equal: true,
          functions: [
            { expr: 'x^3 + 1', label: '$f(x) = x^3 + 1$', color: 'blue' },
            { expr: 'cbrt(x - 1)', label: '$f^{-1}(x) = \\sqrt[3]{x - 1}$', color: 'red' },
            { expr: 'x', label: '$y = x$', color: 'gray', dashed: true },
          ],
          segments: [{ from: ['a', 'a^3 + 1'], to: ['a^3 + 1', 'a'], color: 'purple', dashed: true }],
          points: [
            { x: 'a', y: 'a^3 + 1', color: 'blue', label: '(a, f(a))' },
            { x: 'a^3 + 1', y: 'a', color: 'red', label: '(f(a), a)' },
          ],
          sliders: [{ name: 'a', min: -1.5, max: 1.4, step: 0.05, value: 1, label: '$a$' }],
          readouts: [{ label: '$f(a) =$', expr: 'a^3 + 1', digits: 3 }],
          caption: 'Each blue point $(a, f(a))$ has a red partner $(f(a), a)$. The dashed segment joining them is perpendicular to $y = x$ and is cut in half by it — the definition of a mirror image.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why swapping coordinates is a reflection',
          text: 'The midpoint of $(a, b)$ and $(b, a)$ is $\\left(\\frac{a+b}{2}, \\frac{a+b}{2}\\right)$, which lies on $y = x$. The segment between them has slope $\\frac{a - b}{b - a} = -1$, perpendicular to $y = x$ (slope $1$). A point and its image being equidistant from a line, on a perpendicular, is exactly what "reflection" means.',
        },
        {
          type: 'p',
          text: 'This also explains the horizontal line test: reflecting across $y = x$ turns horizontal lines into vertical lines. The reflected graph passes the vertical line test (is a function) exactly when the original passes the horizontal line test.',
        },
      ],
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'mcq',
      prompt: 'The point $(2, -5)$ is on the graph of a one-to-one function $f$. Which point must be on the graph of $f^{-1}$?',
      options: [
        { text: '$(-5, 2)$', correct: true, why: '$f(2) = -5$ means $f^{-1}(-5) = 2$: swap the coordinates.' },
        { text: '$(-2, 5)$', why: 'Negating both coordinates is a rotation about the origin, not an inverse.' },
        { text: '$\\left(\\frac{1}{2}, -\\frac{1}{5}\\right)$', why: 'Taking reciprocals treats $f^{-1}$ as $\\frac{1}{f}$ — the classic notation trap.' },
        { text: '$(2, 5)$', why: 'That is a reflection across the $x$-axis (the graph of $-f$).' },
      ],
      explanation: 'An inverse swaps inputs and outputs. Since $f$ sends $2 \\mapsto -5$, $f^{-1}$ sends $-5 \\mapsto 2$, so $(-5, 2)$ is on the graph of $f^{-1}$ — the reflection of $(2, -5)$ across $y = x$.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'concept',
      title: 'Restricting the domain',
      blocks: [
        {
          type: 'p',
          text: 'What about $x^2$? It is not one-to-one on all of $\\mathbb{R}$, but it *is* one-to-one if we keep only the right half, $x \\ge 0$. On that [[restricted-domain]], the inverse is $\\sqrt{x}$ — which is precisely why $\\sqrt{x}$ is defined to be the non-negative root. Choosing a piece of the graph that passes the horizontal line test is how mathematicians invert functions that are not one-to-one.',
        },
        {
          type: 'derivation',
          title: 'Invert $f(x) = (x - 2)^2 + 1$ on the domain $x \\ge 2$',
          steps: [
            { tex: 'y = (x - 2)^2 + 1, \\quad x \\ge 2', why: 'On $x \\ge 2$ we keep the right half of the parabola (vertex $(2, 1)$), which is increasing and so one-to-one. Its range is $[1, \\infty)$.' },
            { tex: 'x = (y - 2)^2 + 1, \\quad y \\ge 2', why: 'Swap $x$ and $y$ — including in the restriction: the inverse\'s outputs must be $\\ge 2$.' },
            { tex: '(y - 2)^2 = x - 1', why: 'Subtract $1$.' },
            { tex: 'y - 2 = \\pm\\sqrt{x - 1}', why: 'Take square roots: two candidates.' },
            { tex: 'y - 2 = +\\sqrt{x - 1}', why: 'Since $y \\ge 2$, $y - 2 \\ge 0$, so we need the non-negative root. The restriction picks the sign.' },
            { tex: 'f^{-1}(x) = 2 + \\sqrt{x - 1}, \\quad x \\ge 1', why: 'Add $2$. Domain of $f^{-1}$ = range of $f$ = $[1, \\infty)$.' },
          ],
        },
        {
          type: 'graph',
          x: [-1, 7],
          y: [-1, 7],
          equal: true,
          functions: [
            { expr: '(x - 2)^2 + 1', label: 'full parabola', color: 'gray', dashed: true },
            { expr: '(x - 2)^2 + 1', domain: [2, 7], label: '$f(x) = (x-2)^2 + 1,\\ x \\ge 2$', color: 'blue' },
            { expr: '2 + sqrt(x - 1)', label: '$f^{-1}(x) = 2 + \\sqrt{x - 1}$', color: 'red' },
            { expr: 'x', label: '$y = x$', color: 'gray', dashed: true },
          ],
          points: [
            { x: 2, y: 1, label: '(2, 1)', color: 'blue' },
            { x: 1, y: 2, label: '(1, 2)', color: 'red' },
          ],
          caption: 'Only the solid blue half is used. Its mirror image across $y = x$ is the red curve; the dashed left half would mirror to the lower branch $2 - \\sqrt{x - 1}$.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Coming up',
          text: 'This idea returns twice soon. The logarithm $\\ln x$ is defined as the inverse of $e^x$ (which is one-to-one already). The inverse trig functions $\\arcsin$, $\\arccos$ and $\\arctan$ exist only because we restrict $\\sin$, $\\cos$ and $\\tan$ to one well-chosen interval each — and in calculus, the derivative of an inverse comes straight from the reflection across $y = x$.',
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'When a problem says "restrict the domain so that $f$ is one-to-one, then find $f^{-1}$", graders check that your $\\pm$ sign matches the restriction and that you state the domain of $f^{-1}$. A formula without its domain is usually marked incomplete.',
        },
      ],
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'expr',
      prompt: 'Let $f(x) = (x + 1)^2$ with the restricted domain $x \\le -1$. Find $f^{-1}(x)$ (valid for $x \\ge 0$).',
      label: '$f^{-1}(x) =$',
      answer: '-1 - sqrt(x)',
      answerTex: '-1 - \\sqrt{x}',
      domain: [0.1, 5],
      hint: 'After swapping and taking square roots, you get $y + 1 = \\pm\\sqrt{x}$. The inverse\'s outputs must satisfy $y \\le -1$. Which sign does that force?',
      explanation: 'Swap: $x = (y + 1)^2$ with $y \\le -1$. Square roots: $y + 1 = \\pm\\sqrt{x}$. Because $y \\le -1$, we have $y + 1 \\le 0$, so we need the **negative** root: $y + 1 = -\\sqrt{x}$, giving $f^{-1}(x) = -1 - \\sqrt{x}$. Check: $f(-3) = 4$ and $f^{-1}(4) = -1 - 2 = -3$. ✓ The answer $-1 + \\sqrt{x}$ would send $4$ to $1$, which is not in the restricted domain.',
    },
  ],
  takeaways: [
    '$f^{-1}$ reverses $f$: $f^{-1}(y) = x \\iff f(x) = y$. The notation does **not** mean $\\frac{1}{f}$.',
    'Only one-to-one functions have inverses; graphically, they pass the horizontal line test.',
    'To find $f^{-1}$: write $y = f(x)$, swap $x$ and $y$, solve for $y$. The domain of $f^{-1}$ is the range of $f$, and vice versa.',
    'Verify with composition: $f(f^{-1}(x)) = x$ and $f^{-1}(f(x)) = x$ — check both, on the right domains.',
    'The graph of $f^{-1}$ is the reflection of the graph of $f$ across $y = x$: $(a, b) \\leftrightarrow (b, a)$.',
    'A function that is not one-to-one can be inverted on a restricted domain; the restriction decides the sign of any $\\pm$.',
  ],
  reading: [
    {
      title: 'OpenStax College Algebra 2e — 3.7 Inverse Functions',
      url: 'https://openstax.org/books/college-algebra-2e/pages/3-7-inverse-functions',
      source: 'openstax',
      note: 'Inverses from tables, formulas and graphs, with more domain-restriction examples.',
    },
    {
      title: "Paul's Online Notes — Inverse Functions",
      url: 'https://tutorial.math.lamar.edu/Classes/Alg/InverseFunctions.aspx',
      source: 'paul',
      note: 'Worked examples of the swap-and-solve method, each verified by composition in both directions.',
    },
    {
      title: 'Khan Academy — Algebra 2',
      url: 'https://www.khanacademy.org/math/algebra2',
      source: 'khan',
      note: 'The functions unit has short videos and practice sets on inverses and the horizontal line test.',
    },
  ],
};
