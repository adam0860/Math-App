import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'la-invertible-matrix-theorem',
  title: 'The Invertible Matrix Theorem',
  summary: 'For square matrices, a dozen different-looking facts are all the same fact. Why, what it looks like, and what happens when a matrix is only *almost* singular.',
  minutes: 18,
  objectives: [
    'State the Invertible Matrix Theorem and explain why each statement is equivalent to invertibility',
    'Decide whether a square matrix is invertible by counting pivots, and draw every other conclusion from that',
    'Recognise that the theorem applies only to square matrices',
    'Relate invertible matrices to invertible linear transformations',
    'Describe singular matrices geometrically, and explain why nearly singular (ill-conditioned) matrices are dangerous in floating point',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'One theorem that ties the course together',
      blocks: [
        {
          type: 'p',
          text: 'You now know many different questions to ask about a matrix: Does $A\\mathbf{x} = \\mathbf{0}$ have nontrivial solutions? Are the columns independent? Do they span? Is $\\mathbf{x} \\mapsto A\\mathbf{x}$ [[one-to-one]]? [[onto|Onto]]? Is $A$ invertible? For a general $m \\times n$ matrix these questions have different answers. For a **square** matrix, they all have the *same* answer. That is the [[invertible-matrix-theorem]].',
        },
        {
          type: 'theorem',
          name: 'The Invertible Matrix Theorem (IMT)',
          text: 'Let $A$ be a square $n \\times n$ matrix. The following statements are equivalent — either they are all true or they are all false.\n\n(a) $A$ is invertible.\n(b) $A$ is row equivalent to $I_n$.\n(c) $A$ has $n$ pivot positions.\n(d) $A\\mathbf{x} = \\mathbf{0}$ has only the trivial solution.\n(e) The columns of $A$ are linearly independent.\n(f) The transformation $\\mathbf{x} \\mapsto A\\mathbf{x}$ is one-to-one.\n(g) $A\\mathbf{x} = \\mathbf{b}$ has at least one solution for every $\\mathbf{b}$ in $\\mathbb{R}^n$.\n(h) The columns of $A$ span $\\mathbb{R}^n$.\n(i) The transformation $\\mathbf{x} \\mapsto A\\mathbf{x}$ maps $\\mathbb{R}^n$ onto $\\mathbb{R}^n$.\n(j) There is an $n \\times n$ matrix $C$ with $CA = I$ (a left inverse).\n(k) There is an $n \\times n$ matrix $D$ with $AD = I$ (a right inverse).\n(l) $A^{T}$ is invertible.',
        },
        {
          type: 'p',
          text: 'Read it as a toolbox: to prove $A$ is invertible, check **whichever statement is easiest**. To use invertibility, draw **whichever conclusion you need**. And if any one statement fails, every one of them fails — the matrix is [[singular-matrix|singular]], and you know a dozen things about it at once.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why squareness is the secret ingredient',
          text: 'Two earlier facts carry the whole theorem. The "one-to-one" statements (d), (e), (f) are all about a pivot in **every column**. The "onto" statements (g), (h), (i) are all about a pivot in **every row**. In a general $m \\times n$ matrix those are different conditions. But an $n \\times n$ matrix has as many rows as columns, and each pivot uses up one row and one column — so "$n$ pivots", "a pivot in every column" and "a pivot in every row" all mean the same thing.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'mcq',
      prompt: '$A$ is a $4 \\times 4$ matrix, and the only solution of $A\\mathbf{x} = \\mathbf{0}$ is $\\mathbf{x} = \\mathbf{0}$. Which statement **must** be true?',
      options: [
        { text: 'Some equation $A\\mathbf{x} = \\mathbf{b}$ has infinitely many solutions', why: 'Statement (d) gives (a), and then every $A\\mathbf{x} = \\mathbf{b}$ has exactly one solution, $A^{-1}\\mathbf{b}$.' },
        { text: 'The columns of $A$ span $\\mathbb{R}^4$', correct: true, why: 'That is statement (h). Since $A$ is square, (d) implies all the others, including the "onto" ones.' },
        { text: '$A^{T}$ is singular', why: 'The opposite: (d) implies (a), which implies (l), so $A^{T}$ is invertible.' },
        { text: 'Nothing about $\\mathbf{b}$-equations can be concluded: (d) is only about $\\mathbf{b} = \\mathbf{0}$', why: 'For non-square matrices that caution is right. For square matrices the IMT links (d) to (g): no free variables means a pivot in every column, which for a square matrix means a pivot in every row.' },
      ],
      explanation: '$A\\mathbf{x} = \\mathbf{0}$ having only the trivial solution is statement (d). Because $A$ is square, the IMT says (d) is equivalent to everything else on the list — so the columns span $\\mathbb{R}^4$, $A$ is invertible, and each $A\\mathbf{x} = \\mathbf{b}$ has exactly one solution.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Why it is true, part 1: the one-to-one loop',
      blocks: [
        {
          type: 'p',
          text: 'Proving twelve statements equivalent does not take $12 \\times 11$ separate proofs. We build **loops of implications**: if (a) ⇒ (j) ⇒ (d) ⇒ (c) ⇒ (b) ⇒ (a), then starting anywhere on the loop you can travel to anywhere else, so all five are equivalent.',
        },
        {
          type: 'derivation',
          title: 'The loop (a) ⇒ (j) ⇒ (d) ⇒ (c) ⇒ (b) ⇒ (a)',
          steps: [
            { tex: '\\text{(a)} \\Rightarrow \\text{(j)}', why: 'If $A$ is invertible, take $C = A^{-1}$; then $CA = I$.' },
            { tex: '\\text{(j)} \\Rightarrow \\text{(d)}', why: 'Suppose $CA = I$ and $A\\mathbf{x} = \\mathbf{0}$. Then $\\mathbf{x} = I\\mathbf{x} = CA\\mathbf{x} = C\\mathbf{0} = \\mathbf{0}$. So only the trivial solution exists.' },
            { tex: '\\text{(d)} \\Rightarrow \\text{(c)}', why: 'If $A\\mathbf{x} = \\mathbf{0}$ has only the trivial solution, there are no free variables, so every one of the $n$ columns is a pivot column: $n$ pivots.' },
            { tex: '\\text{(c)} \\Rightarrow \\text{(b)}', why: 'Each row holds at most one pivot, and in echelon form the pivots step strictly to the right as you go down. With $n$ pivots in $n$ rows and $n$ columns, the pivot of row $i$ must be in column $i$: the pivots run down the diagonal, so the reduced echelon form is $I_n$.' },
            { tex: '\\text{(b)} \\Rightarrow \\text{(a)}', why: 'Proved in the last lesson with elementary matrices: if $E_k \\cdots E_1 A = I$, then $A^{-1} = E_k \\cdots E_1$.' },
          ],
          result: '(a), (b), (c), (d), (j) are all equivalent.',
        },
        {
          type: 'p',
          text: 'Two more statements join through facts you already know. (d) ⇔ (e): a nontrivial solution of $A\\mathbf{x} = x_1\\mathbf{a}_1 + \\cdots + x_n\\mathbf{a}_n = \\mathbf{0}$ *is* a [[linear-dependence|dependence relation]] among the columns. (d) ⇔ (f): a linear map is one-to-one exactly when only $\\mathbf{0}$ maps to $\\mathbf{0}$ (if $A\\mathbf{u} = A\\mathbf{v}$, then $A(\\mathbf{u} - \\mathbf{v}) = \\mathbf{0}$).',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'A one-sided inverse is enough',
          text: 'Statement (j) gives a bonus. If you find a square $C$ with $CA = I$, you do **not** need to check $AC = I$: (j) ⇒ (a), so $A^{-1}$ exists, and $C = C(AA^{-1}) = (CA)A^{-1} = A^{-1}$. For square matrices, one order of multiplication is enough to verify an inverse.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'truefalse',
      prompt: 'If $A$ is an $n \\times n$ matrix whose columns are linearly independent, then $A\\mathbf{x} = \\mathbf{b}$ has a solution for every $\\mathbf{b}$ in $\\mathbb{R}^n$.',
      answer: true,
      explanation: 'Independent columns is statement (e) and "solvable for every $\\mathbf{b}$" is statement (g). For a square matrix they are equivalent: independence means a pivot in every column, and with as many rows as columns that is a pivot in every row, which guarantees a solution for every $\\mathbf{b}$. In fact the solution is unique: $\\mathbf{x} = A^{-1}\\mathbf{b}$.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Why it is true, part 2: the onto loop and the transpose',
      blocks: [
        {
          type: 'derivation',
          title: 'The loop (a) ⇒ (k) ⇒ (g) ⇒ (a)',
          steps: [
            { tex: '\\text{(a)} \\Rightarrow \\text{(k)}', why: 'Take $D = A^{-1}$; then $AD = I$.' },
            { tex: '\\text{(k)} \\Rightarrow \\text{(g)}', why: 'If $AD = I$, then for any $\\mathbf{b}$ the vector $\\mathbf{x} = D\\mathbf{b}$ works: $A(D\\mathbf{b}) = (AD)\\mathbf{b} = \\mathbf{b}$. So every equation has a solution.' },
            { tex: '\\text{(g)} \\Rightarrow \\text{(c)}', why: 'From the matrix-equation lesson: $A\\mathbf{x} = \\mathbf{b}$ is solvable for every $\\mathbf{b}$ exactly when $A$ has a pivot in every row. With $n$ rows, that is $n$ pivots.' },
            { tex: '\\text{(c)} \\Rightarrow \\text{(a)}', why: 'Already shown in part 1: (c) ⇒ (b) ⇒ (a).' },
          ],
          result: '(g) and (k) join the club.',
        },
        {
          type: 'list',
          items: [
            '(g) ⇔ (h): $A\\mathbf{x}$ is a linear combination of the columns, so "every $\\mathbf{b}$ is some $A\\mathbf{x}$" says exactly that the columns [[span]] $\\mathbb{R}^n$.',
            '(h) ⇔ (i): "every $\\mathbf{b}$ is an output" is the definition of onto.',
            '(a) ⇔ (l): if $A$ is invertible, $(A^{-1})^{T}$ is an inverse of $A^{T}$ (last lesson). Conversely, if $A^{T}$ is invertible, apply that same fact to $A^{T}$: then $(A^{T})^{T} = A$ is invertible.',
          ],
        },
        {
          type: 'p',
          text: 'Statement (l) quietly doubles the theorem. Applying (e) and (h) to $A^{T}$, whose columns are the rows of $A$: **$A$ is invertible exactly when its rows are linearly independent, and exactly when its rows span $\\mathbb{R}^n$.**',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Square matrices only',
          text: 'For a non-square matrix the two halves come apart. A $3 \\times 2$ matrix like $\\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\\\ 0 & 0 \\end{bmatrix}$ has independent columns (one-to-one) but its outputs all lie in the $x_1x_2$-plane (not onto). A $2 \\times 3$ matrix can be onto but never one-to-one: three columns in $\\mathbb{R}^2$ are always dependent. Before you quote the IMT, check that $A$ is square.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'truefalse',
      prompt: 'If $A$ is a $3 \\times 2$ matrix with linearly independent columns, then $A\\mathbf{x} = \\mathbf{b}$ has a solution for every $\\mathbf{b}$ in $\\mathbb{R}^3$.',
      answer: false,
      explanation: 'The IMT needs a square matrix. A $3 \\times 2$ matrix has at most $2$ pivots, so some row has no pivot, and some $\\mathbf{b}$ in $\\mathbb{R}^3$ is unreachable: two columns span at most a plane in $\\mathbb{R}^3$. Example: with columns $\\mathbf{e}_1, \\mathbf{e}_2$, the equation has no solution for $\\mathbf{b} = \\mathbf{e}_3$. Independent columns only give "at most one solution", not "at least one".',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'Using the theorem',
      blocks: [
        {
          type: 'p',
          text: 'In practice, the IMT turns one row reduction into a dozen conclusions. You do not need the inverse itself — just count pivots, which an echelon form (not even reduced) reveals.',
        },
        {
          type: 'derivation',
          title: 'Is $A = \\begin{bmatrix} 1 & 0 & -2 \\\\ 3 & 1 & -2 \\\\ -5 & -1 & 9 \\end{bmatrix}$ invertible?',
          steps: [
            { tex: '\\xrightarrow{R_2 - 3R_1,\\; R_3 + 5R_1} \\begin{bmatrix} 1 & 0 & -2 \\\\ 0 & 1 & 4 \\\\ 0 & -1 & -1 \\end{bmatrix}', why: 'Clear the first column below the pivot $1$.' },
            { tex: '\\xrightarrow{R_3 + R_2} \\begin{bmatrix} 1 & 0 & -2 \\\\ 0 & 1 & 4 \\\\ 0 & 0 & 3 \\end{bmatrix}', why: 'Clear below the second pivot: $-1 + 1 = 0$ and $-1 + 4 = 3$.' },
            { tex: '\\text{3 pivots in a } 3 \\times 3 \\text{ matrix}', why: 'Echelon form shows the pivots $1, 1, 3$; no need to reduce further.' },
          ],
          result: 'By (c), $A$ is invertible. For free: its columns are independent and span $\\mathbb{R}^3$, $\\mathbf{x} \\mapsto A\\mathbf{x}$ is one-to-one and onto, and $A^{T}$ is invertible.',
        },
        {
          type: 'p',
          text: 'Sometimes you can decide without any row reduction. In $B = \\begin{bmatrix} 1 & 2 & 3 \\\\ 4 & 5 & 9 \\\\ 7 & 8 & 15 \\end{bmatrix}$, column 3 is column 1 plus column 2. So the columns are dependent — (e) fails — and therefore **everything** fails: $B$ is singular, some $B\\mathbf{x} = \\mathbf{b}$ has no solution, and the map $\\mathbf{x} \\mapsto B\\mathbf{x}$ is neither one-to-one nor onto. Other instant giveaways: a zero row or column, or two equal (or proportional) rows or columns.',
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'A favourite exam question: "$A$ is $n \\times n$ and [one fact]. Explain why [another fact]." Name both statements, say they are equivalent by the IMT **because $A$ is square**, and you are done. Another favourite asks which value of a parameter makes a matrix singular: row reduce with the parameter in place and find when a pivot disappears.',
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'numeric',
      prompt: 'For which value of $k$ is $A = \\begin{bmatrix} 1 & 2 & 3 \\\\ 2 & 5 & 7 \\\\ 1 & 3 & k \\end{bmatrix}$ singular?',
      label: '$k =$',
      answer: '4',
      hint: 'Row reduce with $k$ in place: $R_2 - 2R_1$, $R_3 - R_1$, then clear below the second pivot. When is the last pivot missing?',
      explanation: '$R_2 - 2R_1$ gives $(0, 1, 1)$ and $R_3 - R_1$ gives $(0, 1, k - 3)$. Then $R_3 - R_2$ gives $(0, 0, k - 4)$. If $k \\ne 4$ there are $3$ pivots and $A$ is invertible; if $k = 4$ the last row is zero, there are only $2$ pivots, and by the IMT $A$ is singular. (Check: with $k = 4$, row 3 equals row 2 minus row 1.)',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'concept',
      title: 'Invertible linear transformations',
      blocks: [
        {
          type: 'definition',
          term: 'Invertible linear transformation',
          text: 'A [[linear-transformation]] $T: \\mathbb{R}^n \\to \\mathbb{R}^n$ is [[la-invertible-transformation|invertible]] if there is a function $S: \\mathbb{R}^n \\to \\mathbb{R}^n$ with\n\n$$S(T(\\mathbf{x})) = \\mathbf{x} \\quad \\text{and} \\quad T(S(\\mathbf{x})) = \\mathbf{x} \\quad \\text{for all } \\mathbf{x} \\text{ in } \\mathbb{R}^n.$$\n\n$S$ undoes $T$, and $T$ undoes $S$.',
        },
        {
          type: 'theorem',
          name: 'Invertible maps and invertible matrices',
          text: 'Let $T: \\mathbb{R}^n \\to \\mathbb{R}^n$ be linear with standard matrix $A$. Then $T$ is invertible if and only if $A$ is invertible, and in that case the inverse map is $S(\\mathbf{x}) = A^{-1}\\mathbf{x}$ — the only function that satisfies both equations.',
        },
        {
          type: 'derivation',
          title: 'Proof',
          steps: [
            { tex: 'A \\text{ invertible} \\implies S(\\mathbf{x}) = A^{-1}\\mathbf{x} \\text{ works}', why: '$S(T(\\mathbf{x})) = A^{-1}A\\mathbf{x} = \\mathbf{x}$ and $T(S(\\mathbf{x})) = AA^{-1}\\mathbf{x} = \\mathbf{x}$.' },
            { tex: 'T \\text{ invertible} \\implies T \\text{ is onto}', why: 'Any $\\mathbf{b}$ is an output: $\\mathbf{b} = T(S(\\mathbf{b}))$.' },
            { tex: '\\implies A \\text{ is invertible}', why: 'Onto is statement (i) of the IMT, and $A$ is square because $T$ maps $\\mathbb{R}^n$ to itself.' },
            { tex: 'S(\\mathbf{x}) = A^{-1}A\\,S(\\mathbf{x}) = A^{-1}T(S(\\mathbf{x})) = A^{-1}\\mathbf{x}', why: 'Insert $A^{-1}A = I$, recognise $A\\,S(\\mathbf{x}) = T(S(\\mathbf{x}))$, then use $T(S(\\mathbf{x})) = \\mathbf{x}$. So any inverse map must be $\\mathbf{x} \\mapsto A^{-1}\\mathbf{x}$.' },
          ],
          result: 'Inverting a linear transformation and inverting its matrix are the same problem.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Undo is a matrix inverse',
          text: 'Editor "undo" for a transform gizmo, converting a mouse ray from screen space back into the world, finding where a bullet hit in a bone\'s local space — each is "apply the inverse transformation", which is "multiply by the inverse matrix". The IMT tells you exactly when that is possible: when the transformation loses no information.',
        },
      ],
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'concept',
      title: 'Singular matrices squash space',
      blocks: [
        {
          type: 'p',
          text: 'What does a singular $2 \\times 2$ matrix *do*? Its columns are dependent, so they lie on one line through the origin (or are both $\\mathbf{0}$). Every output $A\\mathbf{x} = x_1\\mathbf{a}_1 + x_2\\mathbf{a}_2$ lies on that line: **the whole plane is squashed onto a line** (or a point). Drag the slider to watch it happen.',
        },
        {
          type: 'graph',
          x: [-4, 6.5],
          y: [-3, 3.5],
          equal: true,
          height: 320,
          segments: [
            { from: [0, 0], to: [2, 1], color: 'blue', arrow: true, label: 'Ae1' },
            { from: [0, 0], to: ['a', 1], color: 'red', arrow: true, label: 'Ae2' },
            { from: [2, 1], to: ['2 + a', 2], color: 'gray' },
            { from: ['a', 1], to: ['2 + a', 2], color: 'gray' },
          ],
          parametric: [{ x: '2cos(t) + a*sin(t)', y: 'cos(t) + sin(t)', t: [0, '2pi'], color: 'purple', label: 'image of the unit circle' }],
          functions: [{ expr: 'x/2', color: 'gray', dashed: true, label: 'line $y = x/2$' }],
          sliders: [{ name: 'a', min: -2, max: 4, step: 0.05, value: 0, label: 'top-right entry $a$' }],
          readouts: [{ label: '$ad - bc = 2 - a =$', expr: '2 - a' }],
          caption: 'The image of the unit square (gray parallelogram) and unit circle (purple ellipse) under $A = \\begin{bmatrix} 2 & a \\\\ 1 & 1 \\end{bmatrix}$. As $a \\to 2$ the second column swings onto the line of the first, the parallelogram and ellipse collapse onto the dashed line, and $ad - bc \\to 0$.',
        },
        {
          type: 'p',
          text: 'At $a = 2$, $A = \\begin{bmatrix} 2 & 2 \\\\ 1 & 1 \\end{bmatrix}$ and $A\\mathbf{x} = (x_1 + x_2)\\begin{bmatrix} 2 \\\\ 1 \\end{bmatrix}$. You can see **both** failures of the IMT at once:',
        },
        {
          type: 'list',
          items: [
            '**Not one-to-one:** $(1, 0)$ and $(0, 1)$ both land on $(2, 1)$, and the whole line $x_1 + x_2 = 0$ is crushed to $\\mathbf{0}$. Information is lost, so no inverse can bring it back.',
            '**Not onto:** a vector off the dashed line, like $(0, 1)$, is never an output, so $A\\mathbf{x} = (0, 1)$ has no solution.',
          ],
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why both fail together',
          text: 'A linear map cannot "spend" dimensions it does not have. Squashing a direction to $\\mathbf{0}$ (losing one-to-one-ness) leaves only a lower-dimensional set of outputs, which cannot fill the whole plane (losing onto-ness) — and vice versa. In $\\mathbb{R}^3$ the same story holds: a singular $3 \\times 3$ matrix flattens space onto a plane, a line or a point, like a shadow projection. You will make "dimension" precise in the vector-spaces unit, where this becomes the Rank–Nullity Theorem.',
        },
      ],
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'mcq',
      prompt: 'A $2 \\times 2$ matrix $A$ sends every vector in $\\mathbb{R}^2$ to a point on the line $y = 3x$. What can you conclude about $\\mathbf{x} \\mapsto A\\mathbf{x}$?',
      options: [
        { text: 'It is one-to-one but not onto', why: 'For a square matrix, one-to-one and onto stand or fall together. Squashing the plane onto a line must send different inputs to the same output.' },
        { text: 'It is onto but not one-to-one', why: 'Not onto: a vector like $(1, 0)$ is not on the line $y = 3x$, so it is never an output.' },
        { text: 'It is neither one-to-one nor onto, so $A$ is singular', correct: true, why: 'Outputs miss everything off the line (not onto), and by the IMT a square matrix that fails one statement fails them all.' },
        { text: 'It is invertible, because the line passes through the origin', why: 'Every linear map sends $\\mathbf{0}$ to $\\mathbf{0}$, so its image always contains the origin. That says nothing about invertibility.' },
      ],
      explanation: 'The columns $A\\mathbf{e}_1$ and $A\\mathbf{e}_2$ both lie on the line $y = 3x$, so they are dependent and do not span $\\mathbb{R}^2$. Statement (h) fails, so by the IMT every statement fails: not onto, not one-to-one, not invertible.',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'concept',
      title: 'Almost singular: ill-conditioned matrices',
      blocks: [
        {
          type: 'p',
          text: 'The IMT is a yes/no theorem, but computers live in the grey zone. A matrix can be invertible in exact arithmetic yet so close to singular that floating-point answers are garbage. Such a matrix is [[la-ill-conditioned|ill-conditioned]]. The classic cause is nearly parallel columns — two lines that cross at a very shallow angle.',
        },
        {
          type: 'derivation',
          title: 'Solve $x_1 + x_2 = 2$, $\\; x_1 + 1.001x_2 = 2.001 + \\delta$',
          steps: [
            { tex: 'A = \\begin{bmatrix} 1 & 1 \\\\ 1 & 1.001 \\end{bmatrix}, \\quad ad - bc = 0.001', why: 'Invertible, but only just: the columns $(1, 1)$ and $(1, 1.001)$ are almost parallel.' },
            { tex: '0.001\\,x_2 = 0.001 + \\delta', why: 'Subtract the first equation from the second ($R_2 - R_1$).' },
            { tex: 'x_2 = 1 + 1000\\,\\delta, \\quad x_1 = 2 - x_2 = 1 - 1000\\,\\delta', why: 'Divide by $0.001$ — this division is where small changes get multiplied by $1000$ — then back-substitute.' },
          ],
          result: 'With $\\delta = 0$ the solution is $(1, 1)$. Change $b_2$ by just $\\delta = 0.001$ (a $0.05\\%$ change) and the solution jumps to $(0, 2)$.',
        },
        {
          type: 'graph',
          x: [-2, 4],
          y: [-2, 4],
          equal: true,
          functions: [
            { expr: '2 - x', label: '$x_1 + x_2 = 2$', color: 'blue' },
            { expr: '(2.01 + s - x)/1.01', label: '$x_1 + 1.01x_2 = 2.01 + s$', color: 'red' },
          ],
          points: [{ x: '1 - 100s', y: '1 + 100s', label: 'solution', color: 'purple' }],
          sliders: [{ name: 's', min: -0.02, max: 0.02, step: 0.001, value: 0, label: 'tiny change $s$ in $b_2$' }],
          readouts: [
            { label: '$x_1 =$', expr: '1 - 100s' },
            { label: '$x_2 =$', expr: '1 + 100s' },
          ],
          caption: 'Here the second coefficient is $1.01$, so errors are amplified $100\\times$: nudging $b_2$ by $0.01$ moves the intersection by $1$ unit in each coordinate. The two lines are nearly parallel, so their crossing point slides a long way when either line shifts a hair.',
        },
        {
          type: 'p',
          text: 'The amplification factor is measured by the **condition number** $\\kappa(A) = \\|A\\|\\,\\|A^{-1}\\|$ (made precise in the SVD lesson). For the $1.001$ matrix above, $\\kappa(A) \\approx 4000$. A useful rule of thumb: solving $A\\mathbf{x} = \\mathbf{b}$ can lose about $\\log_{10}\\kappa(A)$ significant digits. A `double` carries about $16$ digits, so losing $3.6$ is harmless; a `float` carries only about $7$, leaving roughly $3$ — and real ill-conditioned matrices have $\\kappa$ in the millions.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Never test `det == 0`',
          text: 'In floating point a singular matrix rarely has determinant exactly $0$, and an invertible one can have a tiny determinant just from scaling ($0.01 I_4$ has determinant $10^{-8}$). Robust code compares a pivot or determinant against a tolerance **relative to the size of the entries**, prefers well-conditioned constructions (orthonormal bases, normalised quaternions), and avoids inverting nearly degenerate transforms — a scale of $0.0001$ on an axis, or a camera whose near plane is absurdly close. `glm::inverse` does not check for you: give it a singular matrix and you get infinities or NaNs that spread through every frame.',
        },
      ],
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'numeric',
      prompt: 'Using the same matrix $A = \\begin{bmatrix} 1 & 1 \\\\ 1 & 1.001 \\end{bmatrix}$, solve $x_1 + x_2 = 2$, $\\; x_1 + 1.001x_2 = 1.999$. What is $x_1$?',
      label: '$x_1 =$',
      answer: '3',
      hint: 'Subtract the equations: $0.001x_2 = 1.999 - 2$.',
      explanation: '$R_2 - R_1$ gives $0.001x_2 = -0.001$, so $x_2 = -1$ and $x_1 = 2 - (-1) = 3$. Check: $3 + 1.001(-1) = 1.999$. ✓ Compared with $\\mathbf{b} = (2, 2.001)$, whose solution is $(1, 1)$, a change of $0.002$ in $b_2$ moved $x_1$ by $2$ — a factor of $1000$, exactly as the formula $x_1 = 1 - 1000\\delta$ with $\\delta = -0.002$ predicts.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'fill',
      prompt: 'Complete this chain of equivalent statements for a square $n \\times n$ matrix $A$.',
      template: '$A$ is invertible $\\iff$ $A\\mathbf{x} = \\mathbf{0}$ has only the ___ solution $\\iff$ the columns of $A$ are linearly ___ $\\iff$ the columns of $A$ ___ $\\mathbb{R}^n$ $\\iff$ $A$ has ___ pivot positions.',
      blanks: [{ answers: ['trivial'] }, { answers: ['independent'] }, { answers: ['span'] }, { answers: ['$n$'] }],
      wordBank: ['trivial', 'nontrivial', 'independent', 'dependent', 'span', 'are orthogonal in', '$n$', '$n - 1$'],
      explanation: 'These are statements (d), (e), (h) and (c) of the IMT. Each says, in a different language, that row reduction finds a pivot in every row and every column. If any one fails — a nontrivial solution, a dependence, a vector the columns miss, a missing pivot — they all fail.',
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'error',
      prompt: 'A student reasons about a matrix $A$. Tap the first line that is not justified.',
      lines: [
        '$A$ is a $3 \\times 4$ matrix whose columns span $\\mathbb{R}^3$.',
        'So $A$ has a pivot in every row: $3$ pivot positions.',
        'So $A\\mathbf{x} = \\mathbf{b}$ has a solution for every $\\mathbf{b}$ in $\\mathbb{R}^3$.',
        'By the Invertible Matrix Theorem, the columns of $A$ are linearly independent.',
      ],
      errorLines: [4],
      explanation: 'Lines 1–3 are correct facts about any $m \\times n$ matrix (spanning ⇔ pivot in every row ⇔ always solvable). Line 4 applies the IMT to a $3 \\times 4$ matrix, but the theorem only holds for **square** matrices. In fact the conclusion is false: four columns in $\\mathbb{R}^3$ can have at most $3$ pivots, so at least one column is free and the columns are always dependent.',
    },
    // ------------------------------------------------------------------ 16
    {
      kind: 'mcq',
      prompt: 'Let $A$ be $n \\times n$. Which statement is **not** equivalent to "$A$ is invertible"?',
      options: [
        { text: 'The rows of $A$ are linearly independent', why: 'Equivalent: the rows of $A$ are the columns of $A^{T}$, and by (l) $A^{T}$ is invertible exactly when $A$ is.' },
        { text: '$A$ has no zero entries', correct: true, why: 'Not equivalent. $\\begin{bmatrix} 1 & 2 \\\\ 2 & 4 \\end{bmatrix}$ has no zero entries and is singular; $I_n$ is full of zeros and is invertible.' },
        { text: '$\\mathbf{x} \\mapsto A\\mathbf{x}$ is one-to-one', why: 'Equivalent: this is statement (f).' },
        { text: 'There is a matrix $D$ with $AD = I$', why: 'Equivalent: this is statement (k). For square matrices a one-sided inverse is automatically two-sided.' },
      ],
      explanation: 'Invertibility is about the *relationships* among columns (or rows) — independence, spanning, pivots — not about individual entries. Zero entries are harmless (the identity is mostly zeros), and a matrix with no zeros can still have dependent columns.',
    },
  ],
  takeaways: [
    'For a square matrix, invertible ⇔ row equivalent to $I$ ⇔ $n$ pivots ⇔ $A\\mathbf{x} = \\mathbf{0}$ only trivially ⇔ independent columns ⇔ one-to-one ⇔ solvable for every $\\mathbf{b}$ ⇔ columns span ⇔ onto ⇔ left inverse ⇔ right inverse ⇔ $A^{T}$ invertible.',
    'The proof works because in an $n \\times n$ matrix "a pivot in every column" and "a pivot in every row" both mean "$n$ pivots".',
    'The IMT applies only to square matrices; for $m \\ne n$, one-to-one and onto are separate questions.',
    'A linear map $T: \\mathbb{R}^n \\to \\mathbb{R}^n$ is invertible exactly when its matrix is, and $T^{-1}(\\mathbf{x}) = A^{-1}\\mathbf{x}$.',
    'A singular matrix squashes space into a lower-dimensional set: it loses information (not one-to-one) and misses outputs (not onto) at the same time.',
    'Nearly singular (ill-conditioned) matrices amplify tiny errors; in floating point, use tolerances and avoid inverting near-degenerate transforms.',
  ],
  reading: [
    {
      title: 'Interactive Linear Algebra — The Invertible Matrix Theorem',
      url: 'https://textbooks.math.gatech.edu/ila/',
      source: 'book',
      note: 'Section 3.6 of Margalit & Rabinoff states the theorem with pictures of what each equivalent condition means geometrically.',
    },
    {
      title: 'Wikipedia — Invertible matrix',
      url: 'https://en.wikipedia.org/wiki/Invertible_matrix',
      source: 'wikipedia',
      note: 'Its "Invertible matrix theorem" section lists even more equivalent conditions, including ones you will meet with determinants and eigenvalues.',
    },
    {
      title: 'Wikipedia — Condition number',
      url: 'https://en.wikipedia.org/wiki/Condition_number',
      source: 'wikipedia',
      note: 'How numerical analysts measure how badly a matrix amplifies errors, with the rule of thumb about lost digits.',
    },
    {
      title: '3Blue1Brown — Inverse matrices, column space and null space',
      url: 'https://www.3blue1brown.com/topics/linear-algebra',
      source: 'video',
      note: 'Chapter 7 of *Essence of linear algebra* shows exactly the squashing picture of a singular transformation.',
    },
  ],
};
