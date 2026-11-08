import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'la-linear-combinations',
  title: 'Linear Combinations and Span',
  summary: 'Scale some vectors, add them up: which targets can you reach? The question behind every linear system.',
  minutes: 18,
  objectives: [
    'Compute linear combinations and recognise them in lerp, colour mixing and blend shapes',
    'Write the vector equation $x_1\\mathbf{a}_1 + \\dots + x_p\\mathbf{a}_p = \\mathbf{b}$ as a linear system and as an augmented matrix',
    'Describe $\\operatorname{Span}\\{\\mathbf{v}\\}$ and $\\operatorname{Span}\\{\\mathbf{u}, \\mathbf{v}\\}$ geometrically in $\\mathbb{R}^2$ and $\\mathbb{R}^3$',
    'Decide whether $\\mathbf{b}$ is in a span by solving a small system with elimination, and find the weights when it is',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Linear combinations',
      blocks: [
        {
          type: 'p',
          text: 'The last lesson ended with lerp, $(1 - s)\\mathbf{a} + s\\mathbf{b}$: scale two vectors, then add. Allow any number of vectors and any scalars at all, and you get the single most important construction in linear algebra.',
        },
        {
          type: 'definition',
          term: 'Linear combination',
          text: 'Given vectors $\\mathbf{v}_1, \\dots, \\mathbf{v}_p$ in $\\mathbb{R}^n$ and scalars $c_1, \\dots, c_p$, the vector\n\n$$\\mathbf{y} = c_1\\mathbf{v}_1 + c_2\\mathbf{v}_2 + \\dots + c_p\\mathbf{v}_p$$\n\nis a [[linear-combination]] of $\\mathbf{v}_1, \\dots, \\mathbf{v}_p$ with **weights** $c_1, \\dots, c_p$. The weights can be any real numbers, including $0$ and negatives.',
        },
        {
          type: 'derivation',
          title: 'Compute $2\\mathbf{v}_1 - \\mathbf{v}_2 + 3\\mathbf{v}_3$ for $\\mathbf{v}_1 = (1, 0, 2)$, $\\mathbf{v}_2 = (3, -1, 1)$, $\\mathbf{v}_3 = (0, 2, -1)$',
          steps: [
            { tex: '2\\begin{bmatrix} 1 \\\\ 0 \\\\ 2 \\end{bmatrix} - \\begin{bmatrix} 3 \\\\ -1 \\\\ 1 \\end{bmatrix} + 3\\begin{bmatrix} 0 \\\\ 2 \\\\ -1 \\end{bmatrix}', why: 'Substitute the vectors. The weights are $2$, $-1$ and $3$.' },
            { tex: '= \\begin{bmatrix} 2 \\\\ 0 \\\\ 4 \\end{bmatrix} + \\begin{bmatrix} -3 \\\\ 1 \\\\ -1 \\end{bmatrix} + \\begin{bmatrix} 0 \\\\ 6 \\\\ -3 \\end{bmatrix}', why: 'Scale each vector first (the weight $-1$ flips every sign of $\\mathbf{v}_2$).' },
            { tex: '= \\begin{bmatrix} 2 - 3 + 0 \\\\ 0 + 1 + 6 \\\\ 4 - 1 - 3 \\end{bmatrix} = \\begin{bmatrix} -1 \\\\ 7 \\\\ 0 \\end{bmatrix}', why: 'Then add entry by entry.' },
          ],
          result: '$2\\mathbf{v}_1 - \\mathbf{v}_2 + 3\\mathbf{v}_3 = (-1, 7, 0)$.',
        },
        {
          type: 'p',
          text: 'You have been using linear combinations all along. Every vector in $\\mathbb{R}^3$ is a combination of the [[standard-basis]] vectors $\\mathbf{e}_1 = (1, 0, 0)$, $\\mathbf{e}_2 = (0, 1, 0)$, $\\mathbf{e}_3 = (0, 0, 1)$: $(x, y, z) = x\\mathbf{e}_1 + y\\mathbf{e}_2 + z\\mathbf{e}_3$ — these are the $\\mathbf{i}, \\mathbf{j}$ of trig, plus a third. Every colour on your screen is $r$ times red plus $g$ times green plus $b$ times blue. Lerp is a combination with weights $1 - s$ and $s$.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Blend shapes are linear combinations',
          text: 'Facial animation often uses **blend shapes** (morph targets). An artist sculpts a neutral face $\\mathbf{n}$ and a few expressions, and the engine stores the differences $\\mathbf{d}_k = \\text{expression}_k - \\mathbf{n}$ — each a vector in $\\mathbb{R}^{3V}$ for a mesh with $V$ vertices. A frame of animation is $\\mathbf{n} + w_1\\mathbf{d}_1 + w_2\\mathbf{d}_2 + \\dots$, with weights driven by sliders or motion capture: $w_{\\text{smile}} = 0.7$, $w_{\\text{blink}} = 1$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why only scaling and adding?',
          text: 'A linear combination never multiplies two vectors together, never squares an entry, never takes a square root. That restriction is the whole point: in unit 3 you will meet *linear transformations* — rotations, scalings, projections — and they are precisely the functions that respect linear combinations, $T(c_1\\mathbf{v}_1 + c_2\\mathbf{v}_2) = c_1T(\\mathbf{v}_1) + c_2T(\\mathbf{v}_2)$. That is why a GPU can transform just the three corners of a triangle and still get every interior point right.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'mcq',
      prompt: 'Let $\\mathbf{u} = (u_1, u_2)$ and $\\mathbf{v} = (v_1, v_2)$ be vectors in $\\mathbb{R}^2$. Which of these is **not**, in general, a linear combination of $\\mathbf{u}$ and $\\mathbf{v}$?',
      options: [
        { text: '$\\mathbf{0}$', why: 'It is: $\\mathbf{0} = 0\\mathbf{u} + 0\\mathbf{v}$. The zero vector is a combination of *any* vectors.' },
        { text: '$\\sqrt{2}\\,\\mathbf{u} - \\pi\\,\\mathbf{v}$', why: 'It is: the weights $\\sqrt2$ and $-\\pi$ are perfectly good real numbers. Weights do not need to be integers or positive.' },
        { text: '$(u_1v_1,\\; u_2v_2)$', correct: true, why: 'Right. Multiplying matching entries is a product of two vectors, which a linear combination never does — and the result can land outside the span. For $\\mathbf{u} = \\mathbf{v} = (1, 2)$ the span is the line of multiples of $(1, 2)$, but $(u_1v_1, u_2v_2) = (1, 4)$ is not on it.' },
        { text: '$\\mathbf{u}$', why: 'It is: $\\mathbf{u} = 1\\mathbf{u} + 0\\mathbf{v}$. Each vector in the list is a combination of the list.' },
      ],
      explanation: 'A linear combination may only scale each vector by a number and add the results. $\\mathbf{0}$, $\\mathbf{u}$ and $\\sqrt2\\,\\mathbf{u} - \\pi\\mathbf{v}$ all have that form, whatever $\\mathbf{u}$ and $\\mathbf{v}$ are. The entrywise product is built by multiplying the vectors together. For some vectors it happens to land in their span, but not in general: $\\mathbf{u} = \\mathbf{v} = (1, 2)$ gives $(1, 4)$, which is not a multiple of $(1, 2)$.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'The vector equation: can we reach b?',
      blocks: [
        {
          type: 'p',
          text: 'Now turn the question around. Instead of choosing weights and computing the result, fix a **target** $\\mathbf{b}$ and ask: are there weights $x_1, x_2$ with $x_1\\mathbf{a}_1 + x_2\\mathbf{a}_2 = \\mathbf{b}$? This is a **vector equation**; the unknowns are the weights. Try it by hand first: drag the sliders until the purple arrow hits the target.',
        },
        {
          type: 'graph',
          x: [-4, 8],
          y: [-2, 9],
          equal: true,
          segments: [
            { from: [0, 0], to: ['2p', 'p'], color: 'blue', arrow: true, label: 'x₁a₁' },
            { from: ['2p', 'p'], to: ['2p - q', 'p + 2q'], color: 'red', arrow: true, label: 'x₂a₂' },
            { from: [0, 0], to: ['2p - q', 'p + 2q'], color: 'purple', arrow: true },
          ],
          points: [{ x: 4, y: 7, label: 'target b = (4, 7)', color: 'green' }],
          sliders: [
            { name: 'p', min: -2, max: 4, step: 0.5, value: 1, label: '$x_1$' },
            { name: 'q', min: -2, max: 4, step: 0.5, value: 1, label: '$x_2$' },
          ],
          readouts: [
            { label: '$x_1\\mathbf{a}_1 + x_2\\mathbf{a}_2$: first entry', expr: '2p - q', digits: 2 },
            { label: 'second entry', expr: 'p + 2q', digits: 2 },
            { label: 'distance to target', expr: 'sqrt((2p - q - 4)^2 + (p + 2q - 7)^2)', digits: 3 },
          ],
          caption: 'Here $\\mathbf{a}_1 = (2, 1)$ and $\\mathbf{a}_2 = (-1, 2)$. Exactly one setting of the sliders puts the tip on $\\mathbf{b}$. Guessing works in 2D with two sliders; it will not work with ten vectors in $\\mathbb{R}^{50}$.',
        },
        {
          type: 'p',
          text: 'Algebra finds the weights without guessing. Expand the left side entry by entry and the vector equation becomes an ordinary [[system-of-equations|linear system]]:',
        },
        {
          type: 'math',
          tex: 'x_1\\begin{bmatrix} 2 \\\\ 1 \\end{bmatrix} + x_2\\begin{bmatrix} -1 \\\\ 2 \\end{bmatrix} = \\begin{bmatrix} 4 \\\\ 7 \\end{bmatrix} \\iff \\begin{cases} 2x_1 - x_2 = 4 \\\\ x_1 + 2x_2 = 7 \\end{cases} \\iff \\left[\\begin{array}{cc|c} 2 & -1 & 4 \\\\ 1 & 2 & 7 \\end{array}\\right]',
          caption: 'Vector equation, linear system, [[augmented-matrix]]: three notations for one problem. The vectors $\\mathbf{a}_1, \\mathbf{a}_2, \\mathbf{b}$ become the **columns** of the matrix.',
        },
        {
          type: 'derivation',
          title: 'Solve with elimination',
          steps: [
            { tex: '\\left[\\begin{array}{cc|c} 2 & -1 & 4 \\\\ 1 & 2 & 7 \\end{array}\\right] \\xrightarrow{R_1 \\leftrightarrow R_2} \\left[\\begin{array}{cc|c} 1 & 2 & 7 \\\\ 2 & -1 & 4 \\end{array}\\right]', why: 'Swapping rows is a legal [[row-operations|row operation]] (it just reorders the equations), and a leading $1$ makes the next step cleaner.' },
            { tex: '\\xrightarrow{R_2 - 2R_1} \\left[\\begin{array}{cc|c} 1 & 2 & 7 \\\\ 0 & -5 & -10 \\end{array}\\right]', why: 'Subtract twice row 1 from row 2 to eliminate $x_1$: $2 - 2 = 0$, $-1 - 4 = -5$, $4 - 14 = -10$.' },
            { tex: '-5x_2 = -10 \\implies x_2 = 2', why: 'Row 2 now involves only $x_2$.' },
            { tex: 'x_1 + 2(2) = 7 \\implies x_1 = 3', why: 'Back-substitute into row 1.' },
          ],
          result: '$\\mathbf{b} = 3\\mathbf{a}_1 + 2\\mathbf{a}_2$. Check: $3(2, 1) + 2(-1, 2) = (6 - 2,\\; 3 + 4) = (4, 7)$ ✓ — set the sliders to $x_1 = 3$, $x_2 = 2$.',
        },
        {
          type: 'theorem',
          name: 'Vector equations and augmented matrices',
          text: 'The vector equation $x_1\\mathbf{a}_1 + x_2\\mathbf{a}_2 + \\dots + x_p\\mathbf{a}_p = \\mathbf{b}$ has the same solution set as the linear system whose augmented matrix is $\\left[\\begin{array}{cccc|c} \\mathbf{a}_1 & \\mathbf{a}_2 & \\cdots & \\mathbf{a}_p & \\mathbf{b} \\end{array}\\right]$. In particular, $\\mathbf{b}$ is a linear combination of $\\mathbf{a}_1, \\dots, \\mathbf{a}_p$ exactly when that system is [[consistent-system|consistent]] (has at least one solution).',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the vectors become columns',
          text: 'Look at entry $i$ of the left side: it is $x_1(\\mathbf{a}_1)_i + x_2(\\mathbf{a}_2)_i + \\dots + x_p(\\mathbf{a}_p)_i$. Setting it equal to $b_i$ gives equation $i$ of the system, and its coefficients are the $i$-th entries of the vectors. So row $i$ of the matrix collects the $i$-th entries — which means each vector runs down a column. Two vectors are equal exactly when every entry matches, so the vector equation and the system are the same condition.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'fill',
      prompt: 'Find the weights with $x_1\\begin{bmatrix} 1 \\\\ 1 \\end{bmatrix} + x_2\\begin{bmatrix} 1 \\\\ -1 \\end{bmatrix} = \\begin{bmatrix} 6 \\\\ -2 \\end{bmatrix}$. Type each number.',
      template: '$x_1 =$ ___ $,\\quad x_2 =$ ___',
      blanks: [{ answers: ['2'] }, { answers: ['4'] }],
      hint: 'The system is $x_1 + x_2 = 6$ and $x_1 - x_2 = -2$. Add the two equations.',
      explanation: 'Entry by entry: $x_1 + x_2 = 6$ and $x_1 - x_2 = -2$. Adding the equations eliminates $x_2$: $2x_1 = 4$, so $x_1 = 2$, and then $x_2 = 6 - 2 = 4$. Check: $2(1, 1) + 4(1, -1) = (2 + 4,\\; 2 - 4) = (6, -2)$ ✓.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Span: everything you can reach',
      blocks: [
        {
          type: 'p',
          text: 'Instead of asking about one target at a time, collect **every** reachable target into a single set.',
        },
        {
          type: 'definition',
          term: 'Span',
          text: 'The [[span]] of $\\mathbf{v}_1, \\dots, \\mathbf{v}_p$, written $\\operatorname{Span}\\{\\mathbf{v}_1, \\dots, \\mathbf{v}_p\\}$, is the set of **all** linear combinations $c_1\\mathbf{v}_1 + \\dots + c_p\\mathbf{v}_p$. So "is $\\mathbf{b}$ in $\\operatorname{Span}\\{\\mathbf{a}_1, \\dots, \\mathbf{a}_p\\}$?" means exactly "does $x_1\\mathbf{a}_1 + \\dots + x_p\\mathbf{a}_p = \\mathbf{b}$ have a solution?"',
        },
        {
          type: 'list',
          items: [
            'Every span contains $\\mathbf{0}$ (all weights $0$) and each $\\mathbf{v}_i$ itself (weight $1$ on it, $0$ on the rest).',
            '$\\operatorname{Span}\\{\\mathbf{0}\\} = \\{\\mathbf{0}\\}$: scaling the zero vector goes nowhere.',
            'For $\\mathbf{v} \\ne \\mathbf{0}$, $\\operatorname{Span}\\{\\mathbf{v}\\}$ is all multiples $c\\mathbf{v}$: the **line through the origin** in the direction of $\\mathbf{v}$.',
            'If $\\mathbf{u}$ and $\\mathbf{v}$ are not multiples of each other, $\\operatorname{Span}\\{\\mathbf{u}, \\mathbf{v}\\}$ is a **plane through the origin**. In $\\mathbb{R}^2$ that plane is all of $\\mathbb{R}^2$; in $\\mathbb{R}^3$ it is a flat sheet that most vectors miss.',
            'If $\\mathbf{v}$ is a multiple of $\\mathbf{u}$, adding $\\mathbf{v}$ gains nothing: $\\operatorname{Span}\\{\\mathbf{u}, \\mathbf{v}\\} = \\operatorname{Span}\\{\\mathbf{u}\\}$, a line.',
          ],
        },
        {
          type: 'graph',
          x: [-6, 6],
          y: [-5, 5],
          equal: true,
          parametric: [
            { x: '-6 + t', y: '-3 + k*t', t: [-14, 14], color: 'blue' },
            { x: '-4 + t', y: '-2 + k*t', t: [-14, 14], color: 'blue' },
            { x: '-2 + t', y: '-1 + k*t', t: [-14, 14], color: 'blue' },
            { x: 't', y: 'k*t', t: [-14, 14], color: 'blue' },
            { x: '2 + t', y: '1 + k*t', t: [-14, 14], color: 'blue' },
            { x: '4 + t', y: '2 + k*t', t: [-14, 14], color: 'blue' },
            { x: '6 + t', y: '3 + k*t', t: [-14, 14], color: 'blue' },
            { x: '2t - 3', y: 't - 3k', t: [-8, 8], color: 'red' },
            { x: '2t - 2', y: 't - 2k', t: [-8, 8], color: 'red' },
            { x: '2t - 1', y: 't - k', t: [-8, 8], color: 'red' },
            { x: '2t', y: 't', t: [-8, 8], color: 'red' },
            { x: '2t + 1', y: 't + k', t: [-8, 8], color: 'red' },
            { x: '2t + 2', y: 't + 2k', t: [-8, 8], color: 'red' },
            { x: '2t + 3', y: 't + 3k', t: [-8, 8], color: 'red' },
          ],
          segments: [
            { from: [0, 0], to: [2, 1], color: 'purple', arrow: true, label: 'a₁' },
            { from: [0, 0], to: [1, 'k'], color: 'green', arrow: true, label: 'a₂' },
          ],
          sliders: [{ name: 'k', min: -2, max: 3, step: 0.1, value: 2, label: 'second entry of $\\mathbf{a}_2 = (1, k)$' }],
          caption: 'The grid lines are $x_1\\mathbf{a}_1 + x_2\\mathbf{a}_2$ with one weight held at an integer: a skewed graph paper whose crossings are the integer combinations. With $\\mathbf{a}_1 = (2, 1)$ fixed, it covers the whole plane — until you set $k = 0.5$. Then $\\mathbf{a}_2 = \\frac12\\mathbf{a}_1$, the grid collapses onto one line, and the span is just that line.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why a span is always flat and passes through the origin',
          text: 'It contains $\\mathbf{0}$, so it passes through the origin. Add two combinations and you get another combination (just add the weights); scale a combination and you get another (scale the weights). So a span can never bend, end or have a gap: from any two of its points it contains the whole line through them in both directions. In unit 6 such sets get a name — *subspaces*.',
        },
        {
          type: 'callout',
          variant: 'analogy',
          title: 'Two thrusters',
          text: 'A hovercraft has two thrusters you can fire forward or backward at any strength. If they push in different directions, you can reach every point of the floor. If they are mounted parallel, no amount of throttle gets you off one line. Spans measure what your "thrusters" can reach.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'mcq',
      prompt: 'In $\\mathbb{R}^3$, what is $\\operatorname{Span}\\left\\{ \\begin{bmatrix} 1 \\\\ 2 \\\\ 0 \\end{bmatrix}, \\begin{bmatrix} -2 \\\\ -4 \\\\ 0 \\end{bmatrix} \\right\\}$?',
      options: [
        { text: 'A plane through the origin', why: 'Two vectors span a plane only when neither is a multiple of the other. Here the second is $-2$ times the first.' },
        { text: 'All of $\\mathbb{R}^3$', why: 'Two vectors can never span $\\mathbb{R}^3$: at best they give a plane. You need at least three.' },
        { text: 'The $xy$-plane', why: 'Both vectors do lie in the $xy$-plane (third entry $0$), but their combinations only fill one line inside it. For example, $(1, 0, 0)$ is in the $xy$-plane but is not a multiple of $(1, 2, 0)$.' },
        { text: 'A line through the origin', correct: true, why: 'Right: $(-2, -4, 0) = -2(1, 2, 0)$, so every combination is a multiple of $(1, 2, 0)$.' },
      ],
      explanation: 'Since $\\mathbf{v}_2 = -2\\mathbf{v}_1$, any combination $c_1\\mathbf{v}_1 + c_2\\mathbf{v}_2 = (c_1 - 2c_2)\\mathbf{v}_1$ is a multiple of $\\mathbf{v}_1$. The span is the line through the origin in the direction $(1, 2, 0)$. The second vector is *redundant* — an idea unit 3 makes precise as linear dependence.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'expr',
      prompt: 'In $\\mathbb{R}^2$, $\\operatorname{Span}\\left\\{\\begin{bmatrix} 2 \\\\ -1 \\end{bmatrix}\\right\\}$ is a line through the origin. Write its equation in the form $y = \\dots$ (in terms of $x$).',
      label: '$y =$',
      answer: '-x/2',
      answerTex: '-\\tfrac{1}{2}x',
      hint: 'The span is all points $c(2, -1) = (2c, -c)$. Express the second coordinate in terms of the first.',
      explanation: 'Points of the span have the form $(x, y) = (2c, -c)$ for some scalar $c$. Then $c = \\frac{x}{2}$ and $y = -c = -\\frac{x}{2}$. The slope $-\\frac12$ is just rise over run of the direction vector: $\\frac{-1}{2}$. And the intercept is $0$, as it must be for any span.',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'truefalse',
      prompt: 'If $\\mathbf{a}_1$ and $\\mathbf{a}_2$ are any two **nonzero** vectors in $\\mathbb{R}^2$, then $\\operatorname{Span}\\{\\mathbf{a}_1, \\mathbf{a}_2\\} = \\mathbb{R}^2$.',
      answer: false,
      explanation: 'Being nonzero is not enough: the vectors must also point in different directions. For $\\mathbf{a}_1 = (2, 1)$ and $\\mathbf{a}_2 = (1, 0.5)$ — the $k = 0.5$ setting in the grid graph — every combination is a multiple of $(2, 1)$, so the span is a line and a target like $(0, 1)$ is unreachable. Two vectors in $\\mathbb{R}^2$ span $\\mathbb{R}^2$ exactly when neither is a multiple of the other.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'concept',
      title: 'Is b in the span? Solve a small system',
      blocks: [
        {
          type: 'p',
          text: 'In $\\mathbb{R}^3$ you cannot eyeball whether a vector lies in a plane, so use the theorem: $\\mathbf{b} \\in \\operatorname{Span}\\{\\mathbf{a}_1, \\mathbf{a}_2\\}$ exactly when the augmented matrix $[\\,\\mathbf{a}_1\\ \\mathbf{a}_2 \\mid \\mathbf{b}\\,]$ is consistent. You already know [[gaussian-elimination]] for small systems from algebra; that is all we need here (unit 2 develops full row reduction for systems of any size).',
        },
        {
          type: 'steps',
          items: [
            { title: 'Set up', text: 'Write the augmented matrix with $\\mathbf{a}_1, \\dots, \\mathbf{a}_p$ as columns and $\\mathbf{b}$ as the last column.' },
            { title: 'Eliminate', text: 'Use row operations to create zeros below the first entry of column 1, then below the second entry of column 2, and so on.' },
            { title: 'Look for a contradiction', text: 'A row $[\\,0 \\ \\cdots \\ 0 \\mid c\\,]$ with $c \\ne 0$ says $0 = c$: the system is [[inconsistent-system|inconsistent]] and $\\mathbf{b}$ is **not** in the span.' },
            { title: 'Otherwise, back-substitute', text: 'Solve for the weights from the bottom up, then check by computing $x_1\\mathbf{a}_1 + \\dots + x_p\\mathbf{a}_p$.' },
          ],
        },
        {
          type: 'derivation',
          title: 'Is $\\mathbf{b} = (-1, 3, -4)$ in $\\operatorname{Span}\\{\\mathbf{a}_1, \\mathbf{a}_2\\}$ for $\\mathbf{a}_1 = (1, 2, -1)$, $\\mathbf{a}_2 = (3, 1, 2)$?',
          steps: [
            { tex: '\\left[\\begin{array}{cc|c} 1 & 3 & -1 \\\\ 2 & 1 & 3 \\\\ -1 & 2 & -4 \\end{array}\\right]', why: 'Columns $\\mathbf{a}_1$, $\\mathbf{a}_2$, $\\mathbf{b}$. Three equations (one per entry), two unknown weights.' },
            { tex: '\\xrightarrow[R_3 + R_1]{R_2 - 2R_1} \\left[\\begin{array}{cc|c} 1 & 3 & -1 \\\\ 0 & -5 & 5 \\\\ 0 & 5 & -5 \\end{array}\\right]', why: 'Clear column 1 below the top: $R_2 - 2R_1 = (0, -5 \\mid 5)$ and $R_3 + R_1 = (0, 5 \\mid -5)$.' },
            { tex: '\\xrightarrow{R_3 + R_2} \\left[\\begin{array}{cc|c} 1 & 3 & -1 \\\\ 0 & -5 & 5 \\\\ 0 & 0 & 0 \\end{array}\\right]', why: 'Clear column 2 below row 2. The last row became $0 = 0$: no contradiction, so the system is consistent.' },
            { tex: '-5x_2 = 5 \\implies x_2 = -1', why: 'Row 2.' },
            { tex: 'x_1 + 3(-1) = -1 \\implies x_1 = 2', why: 'Back-substitute into row 1.' },
          ],
          result: 'Yes: $\\mathbf{b} = 2\\mathbf{a}_1 - \\mathbf{a}_2$. Check: $(2 - 3,\\; 4 - 1,\\; -2 - 2) = (-1, 3, -4)$ ✓.',
        },
        {
          type: 'derivation',
          title: 'Same $\\mathbf{a}_1, \\mathbf{a}_2$, but $\\mathbf{b}\' = (-1, 3, 0)$',
          steps: [
            { tex: '\\left[\\begin{array}{cc|c} 1 & 3 & -1 \\\\ 2 & 1 & 3 \\\\ -1 & 2 & 0 \\end{array}\\right] \\xrightarrow[R_3 + R_1]{R_2 - 2R_1} \\left[\\begin{array}{cc|c} 1 & 3 & -1 \\\\ 0 & -5 & 5 \\\\ 0 & 5 & -1 \\end{array}\\right]', why: 'The same row operations; only the last column differs. $R_3 + R_1 = (0, 5 \\mid -1)$.' },
            { tex: '\\xrightarrow{R_3 + R_2} \\left[\\begin{array}{cc|c} 1 & 3 & -1 \\\\ 0 & -5 & 5 \\\\ 0 & 0 & 4 \\end{array}\\right]', why: 'Row 3 now reads $0x_1 + 0x_2 = 4$, which is impossible.' },
          ],
          result: 'No weights work, so $\\mathbf{b}\' \\notin \\operatorname{Span}\\{\\mathbf{a}_1, \\mathbf{a}_2\\}$: it lies off the plane.',
        },
        {
          type: 'p',
          text: 'Geometrically, $\\operatorname{Span}\\{\\mathbf{a}_1, \\mathbf{a}_2\\}$ is a plane through the origin in $\\mathbb{R}^3$. The vector $\\mathbf{b}$ happens to lie in it; $\\mathbf{b}\'$, which differs only in its last entry, sits just off it. With three equations and only two unknowns, consistency is a genuine condition — most targets fail it.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: '$0 = 0$ is fine; $0 = 4$ is fatal',
          text: 'A row of all zeros, $[\\,0 \\ 0 \\mid 0\\,]$, just says $0 = 0$: one equation was redundant, and nothing is wrong. Only a row with zeros on the left and a **nonzero** number on the right signals "not in the span". Students often panic at the first and miss the second.',
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'A favourite exam question: "For what value of $h$ is $\\mathbf{b}$ in the span?" Carry $h$ through the elimination like any other number; the last row ends up as $[\\,0 \\ 0 \\mid \\text{(expression in } h)\\,]$, and you set that expression equal to $0$. Always finish by stating the weights and checking them.',
        },
      ],
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'numeric',
      prompt: 'For which value of $h$ is $\\mathbf{b} = \\begin{bmatrix} 3 \\\\ -2 \\\\ h \\end{bmatrix}$ in $\\operatorname{Span}\\left\\{ \\begin{bmatrix} 1 \\\\ 0 \\\\ 2 \\end{bmatrix}, \\begin{bmatrix} 0 \\\\ 1 \\\\ -1 \\end{bmatrix} \\right\\}$?',
      label: '$h =$',
      answer: '8',
      hint: 'The first two entries force the weights: $x_1 \\cdot 1 + x_2 \\cdot 0 = 3$ and $x_1 \\cdot 0 + x_2 \\cdot 1 = -2$.',
      explanation: 'The system is $x_1 = 3$, $x_2 = -2$, $2x_1 - x_2 = h$. The first two equations pin down the weights, and the third then *demands* $h = 2(3) - (-2) = 8$. In matrix form, $R_3 - 2R_1 + R_2$ leaves the row $[\\,0 \\ 0 \\mid h - 8\\,]$, which is consistent only when $h - 8 = 0$. For any other $h$, the target lies off the plane.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'error',
      prompt: 'A student checks whether $\\mathbf{b} = (4, 5, -1)$ is in $\\operatorname{Span}\\{(1, -1, 2), (2, 1, 1)\\}$. Tap the first line that is wrong.',
      lines: [
        '$\\left[\\begin{array}{cc|c} 1 & 2 & 4 \\\\ -1 & 1 & 5 \\\\ 2 & 1 & -1 \\end{array}\\right]$',
        '$R_2 + R_1,\\ R_3 - 2R_1:\\ \\left[\\begin{array}{cc|c} 1 & 2 & 4 \\\\ 0 & 3 & 9 \\\\ 0 & -3 & -7 \\end{array}\\right]$',
        '$R_3 + R_2:\\ \\left[\\begin{array}{cc|c} 1 & 2 & 4 \\\\ 0 & 3 & 9 \\\\ 0 & 0 & 2 \\end{array}\\right]$',
        'Row 3 says $0 = 2$, so $\\mathbf{b}$ is not in the span.',
      ],
      errorLines: [2],
      explanation: 'In line 2, $R_3 - 2R_1$ should give $(2 - 2,\\; 1 - 4 \\mid -1 - 8) = (0, -3 \\mid -9)$, not $-7$. With the correct row, $R_3 + R_2 = (0, 0 \\mid 0)$ — no contradiction. Then $3x_2 = 9$ gives $x_2 = 3$ and $x_1 = 4 - 6 = -2$, so $\\mathbf{b} = -2(1, -1, 2) + 3(2, 1, 1) = (4, 5, -1)$ ✓: it **is** in the span. One arithmetic slip flipped the conclusion — which is why you check the weights at the end.',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'concept',
      title: 'Three views of one question',
      blocks: [
        {
          type: 'p',
          text: 'Every linear system can be read two ways. In the **row picture**, each equation is a line (or plane), and a solution is a point lying on all of them. In the **column picture**, the columns are vectors, and a solution is a list of weights that combines them into $\\mathbf{b}$. The augmented matrix is neutral bookkeeping for both.',
        },
        {
          type: 'graph',
          x: [-1, 6],
          y: [-1, 5],
          equal: true,
          functions: [
            { expr: '2x - 4', label: 'row 1: $2x_1 - x_2 = 4$', color: 'blue' },
            { expr: '(7 - x)/2', label: 'row 2: $x_1 + 2x_2 = 7$', color: 'red' },
          ],
          points: [{ x: 3, y: 2, label: '(3, 2)', color: 'purple' }],
          caption: 'The row picture of the system from earlier, with $x_1$ on the horizontal axis and $x_2$ on the vertical. The lines cross at $(3, 2)$ — the same numbers that, in the column picture, were the weights $x_1 = 3$, $x_2 = 2$ that reached $\\mathbf{b} = (4, 7)$.',
        },
        {
          type: 'p',
          text: 'The column picture is the one that scales. Row pictures in $\\mathbb{R}^{50}$ are intersections of fifty "hyperplanes" — hopeless to imagine. The column picture just asks: is $\\mathbf{b}$ in the span of these columns? In unit 2 you will write the left side as a matrix times a vector, $A\\mathbf{x}$ with $A = [\\,\\mathbf{a}_1 \\ \\cdots \\ \\mathbf{a}_p\\,]$, and the slogan of the course will be: **$A\\mathbf{x}$ is a linear combination of the columns of $A$, with weights from $\\mathbf{x}$.**',
        },
        {
          type: 'code',
          title: 'blend.cpp (fragment)',
          code: `// Blend shapes: a face mesh with V vertices is one vector in R^(3V).
std::vector<float> face = neutral;               // start at the neutral pose
for (size_t k = 0; k < deltas.size(); ++k) {     // deltas[k] = shape_k - neutral
    const float w = weights[k];                  // e.g. smile = 0.7, blink = 1.0
    for (size_t i = 0; i < face.size(); ++i)
        face[i] += w * deltas[k][i];             // face = neutral + sum of w_k d_k
}`,
          annotations: [
            { lines: 2, text: 'The linear combination starts from the neutral pose $\\mathbf{n}$.' },
            { lines: '3-4', text: 'One weight $w_k$ per blend shape: these are the $x_k$ of a vector equation.' },
            { lines: '5-6', text: 'Scale and add, entry by entry. Asking "which weights reproduce this captured face?" is the vector equation $\\sum w_k\\mathbf{d}_k = \\mathbf{b} - \\mathbf{n}$ — usually with no exact solution, which is where least squares (unit 8) comes in.' },
          ],
        },
        {
          type: 'deepdive',
          title: 'Spans of three vectors in R³',
          blocks: [
            {
              type: 'p',
              text: 'Three vectors in $\\mathbb{R}^3$ usually span all of $\\mathbb{R}^3$ — but not always. If the third lies in the plane spanned by the first two, it adds nothing: $\\operatorname{Span}\\{\\mathbf{e}_1, \\mathbf{e}_2, \\mathbf{e}_1 + \\mathbf{e}_2\\}$ is still just the $xy$-plane, because $\\mathbf{e}_1 + \\mathbf{e}_2$ was already reachable. And if all three lie on one line, they span only that line.',
            },
            {
              type: 'p',
              text: 'Detecting such redundant vectors is the subject of *linear independence* (unit 3), and counting the non-redundant ones gives the *dimension* of the span (unit 6).',
            },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'mcq',
      prompt: 'Which augmented matrix represents the vector equation $x_1\\begin{bmatrix} 1 \\\\ 4 \\end{bmatrix} + x_2\\begin{bmatrix} -2 \\\\ 3 \\end{bmatrix} = \\begin{bmatrix} 5 \\\\ 0 \\end{bmatrix}$?',
      options: [
        { text: '$\\left[\\begin{array}{cc|c} 1 & 4 & 5 \\\\ -2 & 3 & 0 \\end{array}\\right]$', why: 'This writes the vectors as **rows**. Its first equation would be $x_1 + 4x_2 = 5$, but the first entry of the vector equation is $x_1 - 2x_2 = 5$.' },
        { text: '$\\left[\\begin{array}{cc|c} 1 & -2 & 5 \\\\ 4 & 3 & 0 \\end{array}\\right]$', correct: true, why: 'Right: $\\mathbf{a}_1$, $\\mathbf{a}_2$ and $\\mathbf{b}$ are the columns. Row 1 is the first entry, $x_1 - 2x_2 = 5$; row 2 is the second, $4x_1 + 3x_2 = 0$.' },
        { text: '$\\left[\\begin{array}{cc|c} 5 & 1 & -2 \\\\ 0 & 4 & 3 \\end{array}\\right]$', why: 'The target $\\mathbf{b}$ always goes in the **last** column, to the right of the bar; the columns left of the bar are the coefficients of the unknowns.' },
        { text: '$\\left[\\begin{array}{cc|c} 1 & -2 & 0 \\\\ 4 & 3 & 5 \\end{array}\\right]$', why: 'The entries of $\\mathbf{b}$ are swapped: the first entry of the equation must equal $5$, the first entry of $\\mathbf{b}$.' },
      ],
      explanation: 'Each vector becomes a column, in order, with $\\mathbf{b}$ last. Reading across row $i$ gives the equation for entry $i$: $x_1 - 2x_2 = 5$ and $4x_1 + 3x_2 = 0$. Writing the vectors as rows is the most common mistake — it silently solves a different system.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'order',
      prompt: 'Put the steps for deciding whether $\\mathbf{b}$ is in $\\operatorname{Span}\\{\\mathbf{a}_1, \\mathbf{a}_2\\}$ in order.',
      lines: [
        'Write the augmented matrix $[\\,\\mathbf{a}_1 \\ \\mathbf{a}_2 \\mid \\mathbf{b}\\,]$',
        'Use row operations to create zeros below the first entry of column 1',
        'Create zeros below the second entry of column 2',
        'Check for a row $[\\,0 \\ 0 \\mid c\\,]$ with $c \\ne 0$',
        'If there is none, back-substitute for $x_1, x_2$ and verify $x_1\\mathbf{a}_1 + x_2\\mathbf{a}_2 = \\mathbf{b}$',
      ],
      distractors: ['Add $\\mathbf{a}_1 + \\mathbf{a}_2$ and compare the result with $\\mathbf{b}$'],
      explanation: 'Set up with the vectors as columns, eliminate column by column, then read the bottom rows: a contradiction $0 = c$ means "not in the span"; otherwise the weights come from back-substitution, and plugging them in confirms the answer. The distractor tests only the single combination with weights $1, 1$ — the span contains infinitely many others.',
    },
  ],
  takeaways: [
    'A linear combination $c_1\\mathbf{v}_1 + \\dots + c_p\\mathbf{v}_p$ scales each vector by a weight and adds; lerp, colour mixing and blend shapes are all examples.',
    'The vector equation $x_1\\mathbf{a}_1 + \\dots + x_p\\mathbf{a}_p = \\mathbf{b}$ is the same as the linear system with augmented matrix $[\\,\\mathbf{a}_1 \\ \\cdots \\ \\mathbf{a}_p \\mid \\mathbf{b}\\,]$ — vectors become columns.',
    '$\\operatorname{Span}\\{\\mathbf{v}_1, \\dots, \\mathbf{v}_p\\}$ is the set of all linear combinations; it always contains $\\mathbf{0}$ and is flat.',
    'One nonzero vector spans a line through the origin; two non-parallel vectors span a plane through the origin (all of $\\mathbb{R}^2$ in the plane).',
    '$\\mathbf{b}$ is in the span exactly when the augmented system is consistent; a row $[\\,0 \\ \\cdots \\ 0 \\mid c\\,]$ with $c \\ne 0$ means it is not.',
  ],
  reading: [
    {
      title: '3Blue1Brown — Essence of linear algebra',
      url: 'https://www.3blue1brown.com/topics/linear-algebra',
      source: 'video',
      note: 'Chapter 2, "Linear combinations, span, and basis vectors", animates exactly the skewed-grid picture from this lesson.',
    },
    {
      title: 'Interactive Linear Algebra (Margalit & Rabinoff)',
      url: 'https://textbooks.math.gatech.edu/ila/',
      source: 'book',
      note: 'Section 2.2, "Vector Equations and Spans", has interactive figures where you drag weights to reach a target, plus many span-membership examples.',
    },
    {
      title: 'Wikipedia — Linear span',
      url: 'https://en.wikipedia.org/wiki/Linear_span',
      source: 'wikipedia',
      note: 'The formal definition, with the facts that a span is the smallest subspace containing the vectors.',
    },
    {
      title: 'Khan Academy — Linear algebra',
      url: 'https://www.khanacademy.org/math/linear-algebra',
      source: 'khan',
      note: 'The "Vectors and spaces" unit has videos on linear combinations and span with worked examples in $\\mathbb{R}^2$ and $\\mathbb{R}^3$.',
    },
  ],
};
