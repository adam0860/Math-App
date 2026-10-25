import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'alg-transformations',
  title: 'Transformations of Functions',
  summary: 'Shift, stretch and flip a graph by editing its formula — and understand why the horizontal moves feel backwards.',
  minutes: 18,
  objectives: [
    'Graph vertical and horizontal shifts of a parent function, and explain why $f(x - h)$ moves right',
    'Reflect graphs across the $x$- and $y$-axes using $-f(x)$ and $f(-x)$',
    'Apply vertical and horizontal stretches and compressions',
    'Track where a point goes under $g(x) = a\\,f\\big(b(x - h)\\big) + k$',
    'Write the equation of a transformed graph and recover parameters from a point',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'One graph, a whole family — and vertical shifts',
      blocks: [
        {
          type: 'p',
          text: 'You do not need to plot $y = -2(x - 1)^2 + 3$ point by point. It is the plain parabola $y = x^2$ moved, stretched and flipped. Learn a handful of [[parent-function|parent functions]] and a few rules for how edits to a formula move a graph, and you can sketch thousands of functions in seconds.',
        },
        {
          type: 'table',
          headers: ['Parent', 'Shape', 'Key point(s)'],
          rows: [
            ['$x^2$', 'U-shaped parabola', 'vertex $(0, 0)$; $(1, 1)$'],
            ['$|x|$', 'V shape', 'corner $(0, 0)$; $(1, 1)$'],
            ['$\\sqrt{x}$', 'half a sideways parabola, starts at origin', '$(0, 0)$, $(1, 1)$, $(4, 2)$'],
            ['$x^3$', 'S-shaped, odd', '$(0, 0)$, $(1, 1)$, $(-1, -1)$'],
            ['$\\frac{1}{x}$', 'two branches, asymptotes on the axes', '$(1, 1)$, $(-1, -1)$'],
          ],
          caption: 'The toolkit. A [[transformation]] moves these key points, and the rest of the curve follows.',
        },
        {
          type: 'p',
          text: 'The simplest edit: add a constant **outside** the function. In $g(x) = f(x) + k$, every output is $k$ more than before, so every point rises by $k$ — a vertical [[translation]]. Negative $k$ moves the graph down.',
        },
        {
          type: 'graph',
          x: [-5, 5],
          y: [-4, 6],
          functions: [
            { expr: 'abs(x)', label: '$y = |x|$', color: 'gray', dashed: true },
            { expr: 'abs(x) + k', label: '$y = |x| + k$', color: 'blue' },
          ],
          points: [{ x: 0, y: 'k', label: 'corner (0, k)', color: 'blue' }],
          sliders: [{ name: 'k', min: -3, max: 4, step: 0.5, value: 2, label: '$k$' }],
          caption: 'The whole V moves up or down as one piece; its shape never changes.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why adding outside moves vertically',
          text: 'The point $(x, f(x))$ on $f$ becomes $(x, f(x) + k)$ on $g$: same input, output increased by $k$. A change made **outside** the function acts on outputs, which are the $y$-coordinates. Hold on to that idea — "outside affects $y$, inside affects $x$" organises this entire lesson.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'mcq',
      prompt: 'How is the graph of $g(x) = |x| - 3$ related to the graph of $y = |x|$?',
      options: [
        { text: 'Shifted up 3', why: 'Up would be $|x| + 3$. Subtracting $3$ from every output lowers the graph.' },
        { text: 'Shifted down 3', correct: true, why: 'The $-3$ is outside the absolute value, so it lowers every output by $3$. The corner moves from $(0, 0)$ to $(0, -3)$.' },
        { text: 'Shifted right 3', why: 'A horizontal shift needs a change *inside*: $|x - 3|$.' },
        { text: 'Shifted left 3', why: 'That would be $|x + 3|$, a change to the input.' },
      ],
      explanation: 'The constant sits **outside** the function, so it acts on the outputs: $g(x) = f(x) - 3$ moves every point down $3$ units. The corner moves from $(0, 0)$ to $(0, -3)$, and the $x$-intercepts become $(\\pm 3, 0)$.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Horizontal shifts: the one that feels backwards',
      blocks: [
        {
          type: 'p',
          text: 'Now edit the **input**: $g(x) = f(x - h)$. With $h = 2$, this is $g(x) = f(x - 2)$ — and the graph moves **right** by $2$, not left. Almost everyone expects the opposite the first time, so let us see exactly why.',
        },
        {
          type: 'graph',
          x: [-6, 6],
          y: [-1, 8],
          functions: [
            { expr: 'x^2', label: '$y = x^2$', color: 'gray', dashed: true },
            { expr: '(x - h)^2', label: '$y = (x - h)^2$', color: 'blue' },
          ],
          points: [{ x: 'h', y: 0, label: 'vertex (h, 0)', color: 'blue' }],
          sliders: [{ name: 'h', min: -4, max: 4, step: 0.5, value: 2, label: '$h$' }],
          readouts: [{ label: 'vertex at $x =$', expr: 'h', digits: 2 }],
          caption: 'With $h = 2$ the formula reads $(x - 2)^2$ and the vertex sits at $x = 2$. With $h = -3$ it reads $(x + 3)^2$ and the vertex is at $x = -3$.',
        },
        {
          type: 'derivation',
          title: 'Where does the vertex of $g(x) = (x - 2)^2$ go?',
          steps: [
            { tex: 'f(0) = 0^2 = 0', why: 'The parent $f(x) = x^2$ has its lowest output, $0$, at input $0$.' },
            { tex: 'g(x) = f(x - 2) = 0 \\iff x - 2 = 0', why: '$g$ produces that same output only when the thing *fed into* $f$ is $0$.' },
            { tex: '\\iff x = 2', why: 'So $g$ reaches the vertex height at $x = 2$: two units to the **right**.' },
          ],
          result: 'Every feature of $f$ at input $x_0$ shows up in $g(x) = f(x - h)$ at input $x_0 + h$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the sign flips',
          text: '$g(x) = f(x - 2)$ always looks up what $f$ did at an input $2$ units **smaller**. To see what $f$ does at $0$, $g$ must be at $x = 2$. So $g$ lags $2$ units behind $f$ — every event happens $2$ units later, which on a left-to-right axis means further right. Inside changes act on inputs, and to undo "$-2$" you must *add* $2$ to the input.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'A time delay is a right shift',
          text: 'In a game, if an enemy\'s height over time is `f(t)`, then a second enemy running `f(t - 0.5)` performs the identical jump half a second **later**. Replay systems, echo effects in audio and "follow the leader" trails all use this: delay by $h$ means evaluate at $t - h$, and on a time graph that is a shift to the right.',
        },
        {
          type: 'compare',
          left: { title: 'Wrong', tone: 'bad', text: '$y = (x + 4)^2$ has its vertex at $x = 4$ ("plus means right").' },
          right: { title: 'Right', tone: 'good', text: '$y = (x + 4)^2 = (x - (-4))^2$, so $h = -4$: the vertex is at $x = -4$, four units **left**. Solve "inside $= 0$": $x + 4 = 0 \\Rightarrow x = -4$.' },
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'truefalse',
      prompt: 'The graph of $y = (x + 2)^2$ is the graph of $y = x^2$ shifted **right** 2 units.',
      answer: false,
      explanation: 'The vertex of $(x + 2)^2$ is where the inside is zero: $x + 2 = 0$, so $x = -2$. The graph moves **left** 2. Writing it as $(x - (-2))^2$ shows $h = -2$. A plus sign inside the function moves the graph left, a minus sign moves it right.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'expr',
      prompt: 'Write the function whose graph is $y = \\sqrt{x}$ shifted **3 units left** and **1 unit down**.',
      label: '$g(x) =$',
      answer: 'sqrt(x + 3) - 1',
      answerTex: '\\sqrt{x + 3} - 1',
      domain: [-2, 3],
      hint: 'Left 3 is a change inside the root; down 1 is a change outside.',
      explanation: 'Left $3$ means replacing $x$ with $x + 3$ (so the starting point $(0, 0)$ moves to $x = -3$). Down $1$ means subtracting $1$ from the output. Together: $g(x) = \\sqrt{x + 3} - 1$, which starts at $(-3, -1)$. Check: $g(-3) = \\sqrt{0} - 1 = -1$. ✓',
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'concept',
      title: 'Reflections across the axes',
      blocks: [
        {
          type: 'p',
          text: 'A negative sign creates a [[reflection]]. Where you put it decides which axis acts as the mirror — and the "outside/inside" rule tells you which.',
        },
        {
          type: 'list',
          items: [
            '$y = -f(x)$: the minus is **outside**, so it negates outputs. $(x, y) \\mapsto (x, -y)$: reflection across the **$x$-axis** (upside down).',
            '$y = f(-x)$: the minus is **inside**, so it negates inputs. $(x, y) \\mapsto (-x, y)$: reflection across the **$y$-axis** (left–right mirror).',
          ],
        },
        {
          type: 'graph',
          x: [-6, 6],
          y: [-3.5, 3.5],
          equal: true,
          functions: [
            { expr: 'sqrt(x)', label: '$y = \\sqrt{x}$', color: 'blue' },
            { expr: '-sqrt(x)', label: '$y = -\\sqrt{x}$', color: 'red' },
            { expr: 'sqrt(-x)', label: '$y = \\sqrt{-x}$', color: 'green' },
          ],
          points: [
            { x: 4, y: 2, label: '(4, 2)', color: 'blue' },
            { x: 4, y: -2, label: '(4, −2)', color: 'red' },
            { x: -4, y: 2, label: '(−4, 2)', color: 'green' },
          ],
          caption: 'The point $(4, 2)$ on $\\sqrt{x}$ goes to $(4, -2)$ on $-\\sqrt{x}$ and to $(-4, 2)$ on $\\sqrt{-x}$. Note that $\\sqrt{-x}$ is defined for $x \\le 0$.',
        },
        {
          type: 'derivation',
          title: 'Why $f(-x)$ mirrors left–right',
          steps: [
            { tex: '(x_0, y_0) \\text{ on } f \\iff f(x_0) = y_0', why: 'Start with any point on the original graph.' },
            { tex: 'g(x) = f(-x) \\implies g(-x_0) = f(x_0) = y_0', why: 'Feed $g$ the input $-x_0$: inside, $f$ receives $-(-x_0) = x_0$.' },
            { tex: '(-x_0, y_0) \\text{ on } g', why: 'Same height, opposite side of the $y$-axis.' },
          ],
          result: 'Every point is mirrored across the $y$-axis.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Connection to symmetry',
          text: 'An even function satisfies $f(-x) = f(x)$: reflecting it across the $y$-axis changes nothing. An odd function satisfies $f(-x) = -f(x)$: reflecting across the $y$-axis gives the same result as reflecting across the $x$-axis. Symmetry is just "this transformation leaves the graph unchanged".',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Flipping sprites',
          text: 'Making a 2D character face left is a reflection: draw each pixel at $-x$ instead of $x$ (about the sprite\'s centre). Many engines do this by setting the horizontal scale to $-1$ — the same as $f(-x)$, the case $b = -1$ of the horizontal stretch on the next card.',
        },
      ],
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'mcq',
      prompt: 'The point $(2, -3)$ lies on the graph of $y = f(x)$. Which point must lie on the graph of $y = f(-x)$?',
      options: [
        { text: '$(2, 3)$', why: 'That is the reflection across the $x$-axis, which belongs to $y = -f(x)$.' },
        { text: '$(-2, 3)$', why: 'That negates both coordinates — the graph of $y = -f(-x)$ (a rotation by $180°$).' },
        { text: '$(-2, -3)$', correct: true, why: 'Negating the input mirrors across the $y$-axis: the $x$-coordinate changes sign, the height stays $-3$.' },
        { text: '$(-3, 2)$', why: 'Swapping the coordinates is a reflection across $y = x$ — that belongs to inverse functions, not to $f(-x)$.' },
      ],
      explanation: 'Check it directly: on $g(x) = f(-x)$, the input $x = -2$ gives $g(-2) = f(2) = -3$. So $(-2, -3)$ is on $g$. The minus sign is inside the function, so it acts on the $x$-coordinate only.',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'concept',
      title: 'Stretches and compressions',
      blocks: [
        {
          type: 'p',
          text: 'Multiplying instead of adding scales the graph — a [[stretch-and-compression|stretch or compression]]. Again, outside means $y$ and inside means $x$, and the inside one is again "backwards".',
        },
        {
          type: 'list',
          items: [
            '$y = a\\,f(x)$ (outside): every output is multiplied by $a$. $(x, y) \\mapsto (x, ay)$. A **vertical stretch** if $|a| > 1$, a **vertical compression** if $0 < |a| < 1$.',
            '$y = f(bx)$ (inside): $(x, y) \\mapsto \\left(\\frac{x}{b}, y\\right)$. A **horizontal compression** by a factor of $\\frac{1}{b}$ if $|b| > 1$, a **horizontal stretch** if $0 < |b| < 1$.',
            'A negative $a$ or $b$ adds a reflection on top of the scaling.',
          ],
        },
        {
          type: 'graph',
          x: [-3, 3],
          y: [-6, 6],
          functions: [
            { expr: 'x^3 - 3x', label: '$f(x) = x^3 - 3x$', color: 'gray', dashed: true },
            { expr: 'a((b x)^3 - 3(b x))', label: '$y = a\\,f(bx)$', color: 'blue' },
          ],
          points: [
            { x: '-1/b', y: '2a', color: 'blue' },
            { x: '1/b', y: '-2a', color: 'blue' },
          ],
          sliders: [
            { name: 'a', min: -2.5, max: 2.5, step: 0.25, value: 1.5, label: '$a$ (vertical)' },
            { name: 'b', min: 0.25, max: 3, step: 0.25, value: 2, label: '$b$ (horizontal)' },
          ],
          readouts: [
            { label: 'turning points at $x = \\pm\\frac{1}{b} =$ $\\pm$', expr: '1/b', digits: 3 },
            { label: 'turning-point heights $\\pm 2a =$ $\\pm$', expr: '2a', digits: 3 },
          ],
          caption: 'The parent has turning points at $(\\mp 1, \\pm 2)$. Increase $b$ and they slide *toward* the $y$-axis (at $x = \\pm\\frac{1}{b}$); increase $a$ and they move away from the $x$-axis (heights $\\pm 2a$).',
        },
        {
          type: 'derivation',
          title: 'Why $f(2x)$ squeezes the graph',
          steps: [
            { tex: 'f(-1) = 2', why: 'The parent $f(x) = x^3 - 3x$ peaks at input $-1$ with height $2$.' },
            { tex: 'g(x) = f(2x) = 2 \\text{ when } 2x = -1', why: '$g$ reaches the same peak when the input *fed to* $f$ is $-1$.' },
            { tex: '\\implies x = -\\tfrac{1}{2}', why: 'Divide by $2$: the peak arrives at half the distance from the $y$-axis.' },
          ],
          result: '$f(2x)$ runs through $f$\'s features twice as fast, so the graph is compressed horizontally by a factor of $\\frac{1}{2}$.',
        },
        {
          type: 'callout',
          variant: 'analogy',
          title: 'Playback speed',
          text: 'Think of $f(bx)$ as playing a video at speed $b$. At double speed ($b = 2$) every scene happens in half the time, so the timeline is compressed. At half speed ($b = \\frac{1}{2}$) everything takes twice as long — a horizontal stretch.',
        },
        {
          type: 'deepdive',
          title: 'When a horizontal scale equals a vertical one',
          blocks: [
            {
              type: 'p',
              text: 'For some parents the two kinds of scaling are interchangeable. Since $(bx)^2 = b^2 x^2$, compressing $x^2$ horizontally by $\\frac{1}{2}$ gives the same graph as stretching it vertically by $4$. Similarly $\\sqrt{4x} = 2\\sqrt{x}$ and $|3x| = 3|x|$. This is why a parabola $y = a x^2$ only needs one shape parameter. For $x^3 - 3x$ on the previous graph, though, no vertical stretch imitates $f(2x)$ — the turning points move sideways, which a vertical stretch can never do.',
            },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'numeric',
      prompt: 'The point $(6, 4)$ lies on the graph of $y = f(x)$. On the graph of $y = 3f(2x)$, the corresponding point is $(p, 12)$. Find $p$.',
      label: '$p =$',
      answer: '3',
      hint: 'You need $2x$ to equal $6$ so that $f$ receives its input $6$.',
      explanation: 'For $3f(2x)$ to use the known value $f(6) = 4$, the inside must be $6$: $2x = 6$, so $x = 3$. Then $y = 3f(6) = 3 \\cdot 4 = 12$. The inside factor $2$ **divides** the $x$-coordinate ($6 \\to 3$), while the outside factor $3$ multiplies the $y$-coordinate ($4 \\to 12$). Answering $12$ for $p$ means you multiplied instead of divided.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'concept',
      title: 'Combining transformations',
      blocks: [
        {
          type: 'p',
          text: 'All four moves fit in one formula. With the parameters in the positions shown, you can read off every transformation at once:',
        },
        {
          type: 'theorem',
          name: 'General transformation',
          tex: 'g(x) = a\\,f\\big(b(x - h)\\big) + k \\qquad (x, y) \\;\\mapsto\\; \\left(\\frac{x}{b} + h,\\; a y + k\\right)',
          text: 'Outside ($y$): scale by $a$, then shift by $k$. Inside ($x$): scale by $\\frac{1}{b}$, then shift by $h$. Reflections come from negative $a$ or $b$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the point rule works (no memorised order needed)',
          text: 'Suppose $(x_0, y_0)$ is on $f$, so $f(x_0) = y_0$. For $g$ to use that value we need the inside to equal $x_0$: $b(x - h) = x_0$, so $x = \\frac{x_0}{b} + h$. At that input, $g(x) = a f(x_0) + k = a y_0 + k$. That is the whole rule. Notice the $x$-operations are the *reverse* of what the formula does to $x$ (it subtracts $h$ then multiplies by $b$; we divide by $b$ then add $h$) — undoing operations in reverse order, like taking off socks and shoes.',
        },
        {
          type: 'derivation',
          title: 'Build $g(x) = -2(x - 1)^2 + 3$ from $f(x) = x^2$',
          steps: [
            { tex: 'y = (x - 1)^2', why: 'Inside: replace $x$ with $x - 1$. Shift right $1$; vertex $(0,0) \\to (1, 0)$.' },
            { tex: 'y = 2(x - 1)^2', why: 'Outside: multiply outputs by $2$. Vertical stretch; $(2, 1) \\to (2, 2)$.' },
            { tex: 'y = -2(x - 1)^2', why: 'Outside: negate outputs. Reflect across the $x$-axis; the parabola now opens down.' },
            { tex: 'y = -2(x - 1)^2 + 3', why: 'Outside: add $3$ last. Shift up $3$; vertex $(1, 0) \\to (1, 3)$.' },
          ],
          result: 'A downward parabola, twice as steep as $x^2$, with vertex $(1, 3)$ — this is the [[vertex-form]] from the parabola lesson, now understood as transformations.',
        },
        {
          type: 'graph',
          x: [-4, 8],
          y: [-5, 6],
          functions: [
            { expr: 'sqrt(x)', label: '$y = \\sqrt{x}$', color: 'gray', dashed: true },
            { expr: 'a sqrt(b(x - h)) + k', label: '$y = a\\sqrt{b(x - h)} + k$', color: 'blue' },
          ],
          points: [{ x: 'h', y: 'k', label: 'start (h, k)', color: 'blue' }],
          sliders: [
            { name: 'a', min: -3, max: 3, step: 0.25, value: 1, label: '$a$' },
            { name: 'b', min: -3, max: 3, step: 0.25, value: 1, label: '$b$' },
            { name: 'h', min: -3, max: 4, step: 0.5, value: 0, label: '$h$' },
            { name: 'k', min: -3, max: 3, step: 0.5, value: 0, label: '$k$' },
          ],
          caption: 'Play with all four. The starting point of the root always sits at $(h, k)$. A negative $b$ makes the curve run to the left; a negative $a$ turns it upside down. ($b = 0$ flattens everything into a line, which is why $b$ must be nonzero.)',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Factor out $b$ first',
          text: 'In $f(2x + 6)$ the shift is **not** $6$. Factor: $f(2x + 6) = f\\big(2(x + 3)\\big)$, so $b = 2$ and $h = -3$: compress by $\\frac{1}{2}$, then shift left $3$. Reading the shift before factoring is the most common transformation error on exams.',
        },
      ],
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'order',
      prompt: 'Starting from $y = x^2$, put the equations in order so that each step applies **one** transformation and the chain ends at $y = -2(x + 1)^2 + 4$.',
      lines: ['$y = x^2$', '$y = (x + 1)^2$', '$y = 2(x + 1)^2$', '$y = -2(x + 1)^2$', '$y = -2(x + 1)^2 + 4$'],
      distractors: ['$y = (x - 1)^2$'],
      explanation: 'Shift left $1$ (inside: $x \\to x + 1$), stretch vertically by $2$, reflect across the $x$-axis, then shift up $4$. The vertical shift must come last among the outside operations: if you added $4$ before multiplying by $-2$, it would be multiplied too. The distractor $(x - 1)^2$ shifts the wrong way — $x + 1$ inside means **left**.',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'expr',
      prompt: 'Start with $f(x) = x^2$. Shift it right $2$, stretch it vertically by a factor of $3$, reflect it across the $x$-axis, and finally shift it up $5$. Write the resulting function.',
      label: '$g(x) =$',
      answer: '-3(x - 2)^2 + 5',
      answerTex: '-3(x - 2)^2 + 5',
      hint: 'Use $a f(x - h) + k$ with $a = -3$ (stretch and reflection), $h = 2$, $k = 5$.',
      explanation: 'Right $2$: $(x - 2)^2$. Stretch by $3$: $3(x - 2)^2$. Reflect: $-3(x - 2)^2$. Up $5$: $-3(x - 2)^2 + 5$. The result is a downward parabola with vertex $(2, 5)$. Expanded, this is $-3x^2 + 12x - 7$, which is also accepted.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'error',
      prompt: 'A student describes how the graph of $g(x) = f(2x + 6)$ relates to the graph of $f$. Tap the first incorrect line.',
      lines: [
        '$g(x) = f(2x + 6)$',
        '$= f\\big(2(x + 6)\\big)$',
        'So $b = 2$ and $h = -6$',
        'Compress horizontally by $\\frac{1}{2}$, then shift left $6$',
      ],
      errorLines: [2],
      explanation: 'Line 2 factors incorrectly: $2(x + 6) = 2x + 12$, not $2x + 6$. Correctly, $2x + 6 = 2(x + 3)$, so $b = 2$ and $h = -3$: compress horizontally by $\\frac{1}{2}$, then shift **left 3**. Check with a point: if $(4, y_0)$ is on $f$, then $g$ needs $2x + 6 = 4$, so $x = -1$, and indeed $\\frac{4}{2} - 3 = -1$.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'concept',
      title: 'Reading the equation off a graph',
      blocks: [
        {
          type: 'p',
          text: 'Transformations also run backwards: given a graph, identify its parent, locate the key point (vertex, corner, starting point) to get $h$ and $k$, then use one more point to find the stretch factor $a$.',
        },
        {
          type: 'graph',
          x: [-5, 4],
          y: [-4, 5],
          functions: [{ expr: '-2abs(x + 1) + 3', label: 'mystery V' }],
          points: [
            { x: -1, y: 3, label: 'corner (−1, 3)' },
            { x: 1, y: -1, label: '(1, −1)' },
          ],
          caption: 'An upside-down V: parent $|x|$, reflected, with corner at $(-1, 3)$.',
        },
        {
          type: 'derivation',
          title: 'Find the equation of the V',
          steps: [
            { tex: 'g(x) = a\\,|x - h| + k', why: 'The shape is a V, so the parent is $|x|$.' },
            { tex: 'g(x) = a\\,|x + 1| + 3', why: 'The corner (the image of $(0,0)$) is $(h, k) = (-1, 3)$.' },
            { tex: '-1 = a\\,|1 + 1| + 3', why: 'The graph passes through $(1, -1)$: substitute $x = 1$, $g(x) = -1$.' },
            { tex: '-4 = 2a \\implies a = -2', why: 'Subtract $3$, then divide by $2$. Negative, as expected for a V that opens downward.' },
          ],
          result: '$g(x) = -2|x + 1| + 3$.',
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'Two classic exam tasks: (1) "Describe the transformations, in order, that take $f$ to $g$" — state horizontal changes from the inside (scale, then shift) and vertical changes from the outside (scale/reflect, then shift); and (2) "Find $a$ given that the graph passes through a point", exactly like the derivation above.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Transforms everywhere in graphics',
          text: 'Every sprite or 3D model in a game is drawn by applying scale, reflection and translation to its vertices — usually packed into a single *transform matrix* (you will meet matrices again in linear algebra). The order problem is real there too: "scale then translate" and "translate then scale" put the object in different places, for exactly the reason that $2(x + 3) \\ne 2x + 3$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'numeric',
      prompt: 'The parabola $y = a(x - 2)^2 - 1$ passes through the point $(4, 7)$. Find $a$.',
      label: '$a =$',
      answer: '2',
      hint: 'Substitute $x = 4$ and $y = 7$, then solve for $a$.',
      explanation: 'Substitute: $7 = a(4 - 2)^2 - 1 = 4a - 1$. Add $1$: $8 = 4a$, so $a = 2$. The graph is $y = x^2$ shifted right $2$, down $1$ and stretched vertically by $2$. Check: $2(2)^2 - 1 = 7$. ✓',
    },
  ],
  takeaways: [
    '**Outside changes affect $y$** (they act on outputs); **inside changes affect $x$** (they act on inputs) — and inside changes act "backwards".',
    '$f(x) + k$ shifts up $k$; $f(x - h)$ shifts **right** $h$ (so $f(x + 3)$ shifts left $3$).',
    '$-f(x)$ reflects across the $x$-axis; $f(-x)$ reflects across the $y$-axis.',
    '$a f(x)$ scales vertically by $a$; $f(bx)$ scales horizontally by $\\frac{1}{b}$.',
    'For $g(x) = a f\\big(b(x - h)\\big) + k$, a point $(x, y)$ on $f$ moves to $\\left(\\frac{x}{b} + h,\\ ay + k\\right)$. Factor out $b$ before reading $h$.',
    'To recover an equation from a graph: parent shape → key point gives $(h, k)$ → one more point gives $a$.',
  ],
  reading: [
    {
      title: 'OpenStax College Algebra 2e — 3.5 Transformation of Functions',
      url: 'https://openstax.org/books/college-algebra-2e/pages/3-5-transformation-of-functions',
      source: 'openstax',
      note: 'Covers shifts, reflections, stretches and combined transformations with tables of points and many graphs.',
    },
    {
      title: "Paul's Online Notes — Transformations",
      url: 'https://tutorial.math.lamar.edu/Classes/Alg/Transformations.aspx',
      source: 'paul',
      note: 'A compact summary of the shift and reflection rules with worked graphing examples.',
    },
    {
      title: 'Desmos Graphing Calculator',
      url: 'https://www.desmos.com/calculator',
      source: 'desmos',
      note: 'Type $a|x - h| + k$ and Desmos offers sliders for each letter automatically — a great way to build intuition.',
    },
  ],
};
