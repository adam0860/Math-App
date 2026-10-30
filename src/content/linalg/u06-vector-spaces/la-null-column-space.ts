import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'la-null-column-space',
  title: 'Null Space and Column Space',
  summary: 'Every matrix carries two subspaces: the inputs it crushes to zero and the outputs it can reach. Learn to describe both, and why one is implicit and the other explicit.',
  minutes: 18,
  objectives: [
    'Define $\\operatorname{Nul} A$ and prove it is a subspace of $\\mathbb{R}^n$',
    'Find an explicit spanning set for $\\operatorname{Nul} A$ by solving $A\\mathbf{x} = \\mathbf{0}$',
    'Define $\\operatorname{Col} A$, and decide whether a vector $\\mathbf{b}$ lies in it',
    'Contrast the implicit description of $\\operatorname{Nul} A$ with the explicit description of $\\operatorname{Col} A$',
    'Find the kernel and range of a linear transformation, including derivative operators on polynomials',
  ],
  steps: [
    {
      kind: 'concept',
      title: 'The null space: what a matrix crushes to zero',
      blocks: [
        {
          type: 'p',
          text: 'In the unit on linear systems you solved [[homogeneous-system|homogeneous systems]] $A\\mathbf{x} = \\mathbf{0}$. The full solution set of such a system has a name, and it is the first of two subspaces that every matrix carries around.',
        },
        {
          type: 'definition',
          term: 'Null space',
          text: 'The [[null-space]] of an $m \\times n$ matrix $A$ is the set of all solutions of the homogeneous equation $A\\mathbf{x} = \\mathbf{0}$:\n\n$$\\operatorname{Nul} A = \\{ \\mathbf{x} \\in \\mathbb{R}^n : A\\mathbf{x} = \\mathbf{0} \\}.$$',
        },
        {
          type: 'p',
          text: 'Notice where it lives: $\\mathbf{x}$ is an *input* to $A$, so $\\operatorname{Nul} A$ is a set of vectors in $\\mathbb{R}^n$, where $n$ is the number of **columns**.',
        },
        {
          type: 'theorem',
          name: 'The null space is a subspace',
          text: 'For an $m \\times n$ matrix $A$, $\\operatorname{Nul} A$ is a subspace of $\\mathbb{R}^n$.',
        },
        {
          type: 'derivation',
          title: 'Proof with the three-part test',
          steps: [
            { tex: 'A\\mathbf{0} = \\mathbf{0} \\implies \\mathbf{0} \\in \\operatorname{Nul} A', why: 'Test 1: every entry of $A\\mathbf{0}$ is a sum of products with $0$.' },
            { tex: 'A\\mathbf{u} = \\mathbf{0},\\ A\\mathbf{v} = \\mathbf{0} \\implies A(\\mathbf{u} + \\mathbf{v}) = A\\mathbf{u} + A\\mathbf{v} = \\mathbf{0} + \\mathbf{0} = \\mathbf{0}', why: 'Test 2: matrix-vector multiplication distributes over addition.' },
            { tex: 'A(c\\mathbf{u}) = c(A\\mathbf{u}) = c\\mathbf{0} = \\mathbf{0}', why: 'Test 3: scalars pull out of a matrix-vector product.' },
          ],
          result: 'Sums and multiples of solutions of $A\\mathbf{x} = \\mathbf{0}$ are again solutions.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the right-hand side must be zero',
          text: 'The proof used $\\mathbf{0} + \\mathbf{0} = \\mathbf{0}$ and $c\\mathbf{0} = \\mathbf{0}$. Try it with $A\\mathbf{x} = \\mathbf{b}$ for $\\mathbf{b} \\ne \\mathbf{0}$: two solutions give $A(\\mathbf{u} + \\mathbf{v}) = 2\\mathbf{b} \\ne \\mathbf{b}$, and $\\mathbf{x} = \\mathbf{0}$ is not a solution at all. Geometrically, the solution set of $A\\mathbf{x} = \\mathbf{b}$ is the null space **shifted** away from the origin, just like the shifted lines in the last lesson.',
        },
      ],
    },
    {
      kind: 'truefalse',
      prompt: 'For any $m \\times n$ matrix $A$ and any $\\mathbf{b}$ in $\\mathbb{R}^m$, the solution set of $A\\mathbf{x} = \\mathbf{b}$ is a subspace of $\\mathbb{R}^n$.',
      answer: false,
      explanation: 'Only when $\\mathbf{b} = \\mathbf{0}$. If $\\mathbf{b} \\ne \\mathbf{0}$ then $A\\mathbf{0} = \\mathbf{0} \\ne \\mathbf{b}$, so the zero vector is not a solution and test 1 fails. (The solution set might even be empty.) When it is nonempty it is a translate $\\mathbf{p} + \\operatorname{Nul} A$ of the null space: a line or plane that misses the origin.',
    },
    {
      kind: 'concept',
      title: 'An explicit description of Nul A',
      blocks: [
        {
          type: 'p',
          text: 'The definition of $\\operatorname{Nul} A$ is **implicit**: it gives a *condition* ($A\\mathbf{x} = \\mathbf{0}$) to test, but it does not list any vectors. To get an **explicit** description, solve the system and write the solution in [[parametric-vector-form]]. The vectors that appear form a spanning set.',
        },
        {
          type: 'derivation',
          title: 'Find a spanning set for $\\operatorname{Nul} A$, where $A = \\begin{bmatrix} 1 & 2 & 0 & -1 \\\\ 2 & 4 & 1 & 1 \\\\ 3 & 6 & 1 & 0 \\end{bmatrix}$',
          steps: [
            { tex: 'A \\xrightarrow{R_2 - 2R_1,\\ R_3 - 3R_1} \\begin{bmatrix} 1 & 2 & 0 & -1 \\\\ 0 & 0 & 1 & 3 \\\\ 0 & 0 & 1 & 3 \\end{bmatrix}', why: 'Clear column 1 below the pivot. (For a homogeneous system the augmented column stays all zeros, so we can omit it.)' },
            { tex: '\\xrightarrow{R_3 - R_2} \\begin{bmatrix} 1 & 2 & 0 & -1 \\\\ 0 & 0 & 1 & 3 \\\\ 0 & 0 & 0 & 0 \\end{bmatrix}', why: 'Clear below the second pivot. This is already reduced echelon form: pivots in columns 1 and 3.' },
            { tex: 'x_1 + 2x_2 - x_4 = 0, \\qquad x_3 + 3x_4 = 0', why: 'Translate the nonzero rows back into equations. $x_2$ and $x_4$ have no pivot, so they are [[free-variable|free]].' },
            { tex: 'x_1 = -2x_2 + x_4, \\qquad x_3 = -3x_4', why: 'Solve each basic variable in terms of the free variables. Moving a term across the equals sign flips its sign.' },
            { tex: '\\mathbf{x} = \\begin{bmatrix} -2x_2 + x_4 \\\\ x_2 \\\\ -3x_4 \\\\ x_4 \\end{bmatrix} = x_2\\begin{bmatrix} -2 \\\\ 1 \\\\ 0 \\\\ 0 \\end{bmatrix} + x_4\\begin{bmatrix} 1 \\\\ 0 \\\\ -3 \\\\ 1 \\end{bmatrix}', why: 'Write the general solution as a vector, then split it by free variable: this is the parametric vector form.' },
          ],
          result: '$\\operatorname{Nul} A = \\operatorname{Span}\\{\\mathbf{u}, \\mathbf{v}\\}$ with $\\mathbf{u} = (-2, 1, 0, 0)$ and $\\mathbf{v} = (1, 0, -3, 1)$ (column vectors). It is a plane through the origin in $\\mathbb{R}^4$.',
        },
        {
          type: 'list',
          items: [
            'The method always produces a spanning set: every solution is a combination of these vectors, and every combination is a solution.',
            'The number of vectors equals the number of free variables. If there are **no** free variables, $\\operatorname{Nul} A = \\{\\mathbf{0}\\}$.',
            'The vectors are automatically linearly independent. Look at the free-variable slots (entries 2 and 4): $\\mathbf{u}$ has $(1, 0)$ there and $\\mathbf{v}$ has $(0, 1)$, so no combination can be $\\mathbf{0}$ unless both weights are $0$. We will use this in the next lesson.',
          ],
        },
        {
          type: 'callout',
          variant: 'tip',
          text: 'Check your spanning vectors by multiplying: $A\\mathbf{u}$ should be $\\mathbf{0}$. For $\\mathbf{u} = (-2, 1, 0, 0)$ the first row gives $1(-2) + 2(1) = 0$, the second $2(-2) + 4(1) = 0$, the third $3(-2) + 6(1) = 0$. Thirty seconds of checking catches nearly every sign slip.',
        },
      ],
    },
    {
      kind: 'fill',
      prompt: 'The matrix $A = \\begin{bmatrix} 1 & -2 & 3 \\\\ 2 & -3 & 5 \\end{bmatrix}$ has one free variable, $x_3$. Find the vector that spans $\\operatorname{Nul} A$, scaled so that its third entry is $1$.',
      template: '$\\operatorname{Nul} A = \\operatorname{Span}\\{\\mathbf{n}\\}$ with $\\mathbf{n} = ($ ___ $,$ ___ $,$ ___ $)$',
      blanks: [{ answers: ['-1'] }, { answers: ['1'] }, { answers: ['1'] }],
      hint: 'Row reduce: $R_2 - 2R_1$, then $R_1 + 2R_2$. Then solve for $x_1$ and $x_2$ in terms of $x_3$ and set $x_3 = 1$.',
      explanation: '$R_2 - 2R_1$ gives $\\begin{bmatrix} 1 & -2 & 3 \\\\ 0 & 1 & -1 \\end{bmatrix}$, and $R_1 + 2R_2$ gives $\\begin{bmatrix} 1 & 0 & 1 \\\\ 0 & 1 & -1 \\end{bmatrix}$. So $x_1 = -x_3$ and $x_2 = x_3$, i.e. $\\mathbf{x} = x_3(-1, 1, 1)$. Check: $1(-1) - 2(1) + 3(1) = 0$ and $2(-1) - 3(1) + 5(1) = 0$. The null space is a line through the origin in $\\mathbb{R}^3$.',
    },
    {
      kind: 'order',
      prompt: 'Put the steps for finding an explicit spanning set of $\\operatorname{Nul} A$ in order.',
      lines: [
        'Row reduce $A$ (or $[\\,A \\mid \\mathbf{0}\\,]$) to reduced echelon form',
        'Identify the free variables (columns without pivots)',
        'Solve for each basic variable in terms of the free variables',
        'Write $\\mathbf{x}$ as a linear combination of vectors, one per free variable',
        'Those vectors span $\\operatorname{Nul} A$',
      ],
      distractors: ['Take the pivot columns of $A$'],
      explanation: 'This is the parametric-vector-form procedure from solving homogeneous systems, read as a statement about a subspace. The distractor, "take the pivot columns of $A$", is how you get a spanning set for $\\operatorname{Col} A$, the subject of the next card. Mixing up the two recipes is a classic exam error.',
    },
    {
      kind: 'concept',
      title: 'The column space: everything A can reach',
      blocks: [
        {
          type: 'definition',
          term: 'Column space',
          text: 'The [[column-space]] of an $m \\times n$ matrix $A = [\\,\\mathbf{a}_1\\ \\cdots\\ \\mathbf{a}_n\\,]$ is the set of all linear combinations of its columns:\n\n$$\\operatorname{Col} A = \\operatorname{Span}\\{\\mathbf{a}_1, \\dots, \\mathbf{a}_n\\} = \\{ A\\mathbf{x} : \\mathbf{x} \\in \\mathbb{R}^n \\}.$$',
        },
        {
          type: 'p',
          text: 'The two descriptions agree because $A\\mathbf{x} = x_1\\mathbf{a}_1 + \\cdots + x_n\\mathbf{a}_n$: multiplying by $A$ *is* forming a combination of its columns with weights from $\\mathbf{x}$. Since a span is always a subspace, $\\operatorname{Col} A$ is a subspace of $\\mathbb{R}^m$, where $m$ is the number of **rows** (each column has $m$ entries).',
        },
        {
          type: 'p',
          text: 'Drag $x_1$ and $x_2$ to choose an input $\\mathbf{x}$ for $A = \\begin{bmatrix} 1 & 2 \\\\ 2 & 4 \\end{bmatrix}$. The output $A\\mathbf{x} = x_1\\mathbf{a}_1 + x_2\\mathbf{a}_2$ is built tip to tail from the scaled columns.',
        },
        {
          type: 'graph',
          x: [-5, 5],
          y: [-9, 9],
          functions: [
            { expr: '2x', label: '$\\operatorname{Col} A$: the line $y = 2x$', color: 'teal' },
            { expr: '-x/2', label: '$\\operatorname{Nul} A$: the line $x + 2y = 0$', color: 'orange', dashed: true },
          ],
          segments: [
            { from: [0, 0], to: ['a', 'b'], arrow: true, label: 'x', color: 'gray' },
            { from: [0, 0], to: ['a', '2a'], arrow: true, label: 'x₁a₁', color: 'blue' },
            { from: ['a', '2a'], to: ['a + 2b', '2a + 4b'], arrow: true, label: 'x₂a₂', color: 'green' },
            { from: [0, 0], to: ['a + 2b', '2a + 4b'], arrow: true, label: 'Ax', color: 'red' },
          ],
          sliders: [
            { name: 'a', min: -1.5, max: 1.5, step: 0.1, value: 1, label: '$x_1$' },
            { name: 'b', min: -1.5, max: 1.5, step: 0.1, value: 0.5, label: '$x_2$' },
          ],
          readouts: [
            { label: 'first entry of $A\\mathbf{x}$:', expr: 'a + 2b', digits: 2 },
            { label: 'second entry of $A\\mathbf{x}$:', expr: '2a + 4b', digits: 2 },
          ],
          caption: 'Wherever you put $\\mathbf{x}$, the red output lands on the teal line: $\\operatorname{Col} A$ is only a line, because the columns are parallel. Put $\\mathbf{x}$ on the orange line (try $x_1 = 1$, $x_2 = -0.5$) and the output collapses to $\\mathbf{0}$: that line is $\\operatorname{Nul} A$.',
        },
        {
          type: 'theorem',
          name: 'When is Col A everything?',
          text: '$\\operatorname{Col} A = \\mathbb{R}^m$ exactly when $A\\mathbf{x} = \\mathbf{b}$ has a solution for every $\\mathbf{b}$ in $\\mathbb{R}^m$, i.e. when the transformation $\\mathbf{x} \\mapsto A\\mathbf{x}$ is [[onto]]. For the matrix above it fails: $\\mathbf{b} = (1, 0)$ is not on the line $y = 2x$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why "b is in Col A" means "Ax = b is consistent"',
          text: 'By definition $\\mathbf{b} \\in \\operatorname{Col} A$ means $\\mathbf{b} = A\\mathbf{x}$ for some $\\mathbf{x}$. That is word for word the statement that the system $A\\mathbf{x} = \\mathbf{b}$ has a solution. So $\\operatorname{Col} A$ is the set of right-hand sides for which the system is solvable.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'For $A = \\begin{bmatrix} 1 & 2 \\\\ 2 & 4 \\end{bmatrix}$, find the value of $k$ for which $\\mathbf{b} = \\begin{bmatrix} 3 \\\\ k \\end{bmatrix}$ is in $\\operatorname{Col} A$.',
      label: '$k =$',
      answer: '6',
      hint: 'Every column of $A$ is a multiple of $(1, 2)$, so what does every vector in $\\operatorname{Col} A$ look like?',
      explanation: 'The second column is $2$ times the first, so $\\operatorname{Col} A = \\operatorname{Span}\\{(1, 2)\\}$: all vectors whose second entry is twice the first. For $(3, k)$ that forces $k = 6$. Equivalently, row reducing $\\left[\\begin{array}{cc|c} 1 & 2 & 3 \\\\ 2 & 4 & k \\end{array}\\right]$ gives the last row $[\\,0\\ \\ 0 \\mid k - 6\\,]$, which is consistent only when $k = 6$.',
    },
    {
      kind: 'concept',
      title: 'Implicit versus explicit: Nul A and Col A side by side',
      blocks: [
        {
          type: 'p',
          text: 'The two subspaces are described in opposite ways, and that decides which questions about them are easy.',
        },
        {
          type: 'table',
          headers: ['Property', '$\\operatorname{Nul} A$', '$\\operatorname{Col} A$'],
          rows: [
            ['Lives in', '$\\mathbb{R}^n$ (inputs; $n$ = number of columns)', '$\\mathbb{R}^m$ (outputs; $m$ = number of rows)'],
            ['Given by', 'a **condition**: $A\\mathbf{x} = \\mathbf{0}$ (implicit)', 'a **list**: span of the columns (explicit)'],
            ['Find vectors in it', 'work: row reduce and solve', 'free: any column, or any $A\\mathbf{x}$'],
            ['Test whether $\\mathbf{v}$ is in it', 'easy: compute $A\\mathbf{v}$, see if it is $\\mathbf{0}$', 'work: row reduce $[\\,A \\mid \\mathbf{v}\\,]$'],
            ['$= \\{\\mathbf{0}\\}$ or everything when', '$\\operatorname{Nul} A = \\{\\mathbf{0}\\}$ iff $\\mathbf{x} \\mapsto A\\mathbf{x}$ is one-to-one', '$\\operatorname{Col} A = \\mathbb{R}^m$ iff $\\mathbf{x} \\mapsto A\\mathbf{x}$ is onto'],
          ],
        },
        {
          type: 'derivation',
          title: 'With $A = \\begin{bmatrix} 1 & 2 & 0 & -1 \\\\ 2 & 4 & 1 & 1 \\\\ 3 & 6 & 1 & 0 \\end{bmatrix}$: is $\\mathbf{u} = (-1, 1, -3, 1)$ in $\\operatorname{Nul} A$? Is $\\mathbf{b} = (1, 4, 6)$ in $\\operatorname{Col} A$?',
          steps: [
            { tex: 'A\\mathbf{u} = \\begin{bmatrix} -1 + 2 + 0 - 1 \\\\ -2 + 4 - 3 + 1 \\\\ -3 + 6 - 3 + 0 \\end{bmatrix} = \\begin{bmatrix} 0 \\\\ 0 \\\\ 0 \\end{bmatrix}', why: 'Null space membership: just multiply. Each entry is a row of $A$ dotted with $\\mathbf{u}$. All zero, so $\\mathbf{u} \\in \\operatorname{Nul} A$ (indeed $\\mathbf{u}$ is the sum of the two spanning vectors found earlier).' },
            { tex: '\\left[\\begin{array}{cccc|c} 1 & 2 & 0 & -1 & 1 \\\\ 2 & 4 & 1 & 1 & 4 \\\\ 3 & 6 & 1 & 0 & 6 \\end{array}\\right] \\xrightarrow{R_2 - 2R_1,\\ R_3 - 3R_1} \\left[\\begin{array}{cccc|c} 1 & 2 & 0 & -1 & 1 \\\\ 0 & 0 & 1 & 3 & 2 \\\\ 0 & 0 & 1 & 3 & 3 \\end{array}\\right]', why: 'Column space membership: ask whether $A\\mathbf{x} = \\mathbf{b}$ is consistent, so row reduce the augmented matrix.' },
            { tex: '\\xrightarrow{R_3 - R_2} \\left[\\begin{array}{cccc|c} 1 & 2 & 0 & -1 & 1 \\\\ 0 & 0 & 1 & 3 & 2 \\\\ 0 & 0 & 0 & 0 & 1 \\end{array}\\right]', why: 'The last row says $0 = 1$: the system is inconsistent.' },
          ],
          result: '$\\mathbf{u} \\in \\operatorname{Nul} A$, but $\\mathbf{b} \\notin \\operatorname{Col} A$. Note that $\\mathbf{u}$ has 4 entries and $\\mathbf{b}$ has 3: they live in different spaces.',
        },
        {
          type: 'deepdive',
          title: 'Turning Col A into an implicit description',
          blocks: [
            {
              type: 'p',
              text: 'Row reduce $[\\,A \\mid \\mathbf{b}\\,]$ with a general $\\mathbf{b} = (b_1, b_2, b_3)$. The same row operations produce a last row $[\\,0\\ 0\\ 0\\ 0 \\mid b_3 - b_2 - b_1\\,]$ (first $b_2 - 2b_1$ and $b_3 - 3b_1$, then subtract: $(b_3 - 3b_1) - (b_2 - 2b_1)$). So',
            },
            { type: 'math', tex: '\\operatorname{Col} A = \\{ \\mathbf{b} \\in \\mathbb{R}^3 : b_3 = b_1 + b_2 \\}', caption: 'A plane through the origin in $\\mathbb{R}^3$, now described by an equation.' },
            {
              type: 'p',
              text: 'Every subspace can be described both ways. Converting a span into equations means row reducing with symbolic $\\mathbf{b}$; converting equations into a span means solving a homogeneous system.',
            },
          ],
        },
      ],
    },
    {
      kind: 'mcq',
      prompt: '$A$ is a $5 \\times 7$ matrix. Where do its null space and column space live?',
      options: [
        {
          text: '$\\operatorname{Nul} A \\subseteq \\mathbb{R}^7$ and $\\operatorname{Col} A \\subseteq \\mathbb{R}^5$',
          correct: true,
          why: 'Null space vectors are inputs $\\mathbf{x}$, which need 7 entries to multiply a matrix with 7 columns. Columns of $A$ have 5 entries, so their span is in $\\mathbb{R}^5$.',
        },
        {
          text: '$\\operatorname{Nul} A \\subseteq \\mathbb{R}^5$ and $\\operatorname{Col} A \\subseteq \\mathbb{R}^7$',
          why: 'This swaps them. "7 columns" means each input has 7 entries; "5 rows" means each column (and each output) has 5 entries.',
        },
        {
          text: 'Both are subspaces of $\\mathbb{R}^7$',
          why: 'Only the null space lives in $\\mathbb{R}^7$. A column of $A$ has one entry per row, so 5 entries.',
        },
        {
          text: 'Both are subspaces of $\\mathbb{R}^5$',
          why: 'Only the column space lives in $\\mathbb{R}^5$. You cannot multiply $A$ by a vector with 5 entries.',
        },
      ],
      explanation: 'Think of $A$ as a function $\\mathbb{R}^7 \\to \\mathbb{R}^5$. The null space is a set of **inputs** (in the domain $\\mathbb{R}^7$); the column space is the set of **outputs** (in the [[codomain]] $\\mathbb{R}^5$). Only for square matrices are they even in the same space.',
    },
    {
      kind: 'numeric',
      prompt: 'Using the same $A = \\begin{bmatrix} 1 & 2 & 0 & -1 \\\\ 2 & 4 & 1 & 1 \\\\ 3 & 6 & 1 & 0 \\end{bmatrix}$, find the value of $h$ for which $\\begin{bmatrix} 2 \\\\ -1 \\\\ h \\end{bmatrix}$ is in $\\operatorname{Col} A$.',
      label: '$h =$',
      answer: '1',
      hint: 'Row reduce $[\\,A \\mid \\mathbf{b}\\,]$ with the same three row operations as in the worked example, and make the last entry of the bottom row zero.',
      explanation: 'With $\\mathbf{b} = (2, -1, h)$: $R_2 - 2R_1$ makes the last entry of row 2 equal $-1 - 4 = -5$; $R_3 - 3R_1$ makes row 3 end in $h - 6$; then $R_3 - R_2$ leaves $[\\,0\\ 0\\ 0\\ 0 \\mid h - 6 + 5\\,] = [\\,0\\ 0\\ 0\\ 0 \\mid h - 1\\,]$. Consistent iff $h = 1$, matching the implicit description $b_3 = b_1 + b_2 = 2 + (-1) = 1$. Indeed $(2, -1, 1) = 2(1, 2, 3) - 5(0, 1, 1)$, a combination of columns 1 and 3.',
    },
    {
      kind: 'concept',
      title: 'Kernel and range of a linear transformation',
      blocks: [
        {
          type: 'p',
          text: 'Null space and column space are matrix words. The same two ideas make sense for any [[linear-transformation]] between vector spaces, even ones with no matrix in sight.',
        },
        {
          type: 'definition',
          term: 'Kernel and range',
          text: 'A transformation $T: V \\to W$ between vector spaces is **linear** if $T(\\mathbf{u} + \\mathbf{v}) = T(\\mathbf{u}) + T(\\mathbf{v})$ and $T(c\\mathbf{u}) = cT(\\mathbf{u})$ for all $\\mathbf{u}, \\mathbf{v}$ in $V$ and scalars $c$. Its [[kernel]] is $\\{ \\mathbf{u} \\in V : T(\\mathbf{u}) = \\mathbf{0} \\}$, a subspace of $V$. Its [[range]] is $\\{ T(\\mathbf{u}) : \\mathbf{u} \\in V \\}$, a subspace of $W$.',
        },
        {
          type: 'p',
          text: 'For $T(\\mathbf{x}) = A\\mathbf{x}$ the kernel is $\\operatorname{Nul} A$ and the range is $\\operatorname{Col} A$. The proofs that kernel and range are subspaces are the same three-line arguments as before, using only the two linearity rules.',
        },
        {
          type: 'p',
          text: 'Here is a linear transformation you have known since Calculus I. The derivative operator $D: \\mathbb{P}_3 \\to \\mathbb{P}_2$, $D(p) = p\'$, is linear because $(p + q)\' = p\' + q\'$ and $(cp)\' = cp\'$.',
        },
        {
          type: 'derivation',
          title: 'Kernel and range of $D(p) = p\'$ on $\\mathbb{P}_3$',
          steps: [
            { tex: 'D(a_0 + a_1 t + a_2 t^2 + a_3 t^3) = a_1 + 2a_2 t + 3a_3 t^2', why: 'Differentiate term by term with the power rule.' },
            { tex: 'D(p) = \\mathbf{0} \\iff a_1 = 0,\\ 2a_2 = 0,\\ 3a_3 = 0', why: 'A polynomial is the zero polynomial exactly when every coefficient is $0$.' },
            { tex: '\\ker D = \\{ a_0 \\} = \\operatorname{Span}\\{1\\}', why: 'Only $a_0$ is unrestricted: the kernel is the constant polynomials.' },
            { tex: 'b_0 + b_1 t + b_2 t^2 = D\\!\\left(b_0 t + \\tfrac{b_1}{2} t^2 + \\tfrac{b_2}{3} t^3\\right)', why: 'Every quadratic has a cubic antiderivative, so every element of $\\mathbb{P}_2$ is an output.' },
            { tex: '\\operatorname{range} D = \\mathbb{P}_2', why: 'The range is the whole codomain: $D$ is onto.' },
          ],
          result: 'The derivative crushes exactly the constants and reaches every polynomial of degree $\\le 2$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why antiderivatives come with "+ C"',
          text: 'If $D(F) = f$ and $D(G) = f$, then $D(G - F) = f - f = 0$ by linearity, so $G - F$ is in the kernel: a constant. Every solution of $D(p) = f$ is "one particular solution plus the kernel", which is exactly why antiderivatives are $F + C$. It is the same structure as $A\\mathbf{x} = \\mathbf{b}$, whose solutions are $\\mathbf{p} + \\operatorname{Nul} A$.',
        },
      ],
    },
    {
      kind: 'expr',
      prompt: 'Define $T: \\mathbb{P}_2 \\to \\mathbb{P}_2$ by $T(p) = p(t) - t\\,p\'(t)$. (It is linear.) Compute $T(3 + 2t + 5t^2)$.',
      label: '$T(3 + 2t + 5t^2) =$',
      variables: ['t'],
      answer: '3 - 5t^2',
      answerTex: '3 - 5t^2',
      hint: 'First find $p\'(t)$, multiply by $t$, then subtract from $p(t)$.',
      explanation: '$p\'(t) = 2 + 10t$, so $t\\,p\'(t) = 2t + 10t^2$ and $T(p) = 3 + 2t + 5t^2 - 2t - 10t^2 = 3 - 5t^2$. In general $T(a + bt + ct^2) = a - ct^2$: the $t$ term always cancels. So the kernel of $T$ is $\\operatorname{Span}\\{t\\}$ (set $a = c = 0$) and the range is $\\operatorname{Span}\\{1, t^2\\}$.',
    },
    {
      kind: 'mcq',
      prompt: 'The second-derivative operator $D^2: \\mathbb{P}_3 \\to \\mathbb{P}_1$, $D^2(p) = p\'\'$, is linear. What is its kernel?',
      options: [
        {
          text: 'The constant polynomials, $\\operatorname{Span}\\{1\\}$',
          why: 'Constants are in the kernel, but so is $t$: its second derivative is $0$ too.',
        },
        {
          text: '$\\mathbb{P}_1 = \\operatorname{Span}\\{1, t\\}$',
          correct: true,
          why: '$D^2(a_0 + a_1 t + a_2 t^2 + a_3 t^3) = 2a_2 + 6a_3 t$, which is zero iff $a_2 = a_3 = 0$. That leaves $a_0 + a_1 t$.',
        },
        {
          text: '$\\{\\mathbf{0}\\}$',
          why: 'Many nonzero polynomials have zero second derivative, for example $1$ and $t$.',
        },
        {
          text: '$\\operatorname{Span}\\{t^2, t^3\\}$',
          why: 'These are the polynomials whose second derivative is generally **not** zero. They control the range, not the kernel.',
        },
      ],
      explanation: '$D^2(p) = 2a_2 + 6a_3 t$, so the kernel is all $a_0 + a_1 t$: the lines. This matches calculus: if $f\'\' = 0$ then integrating twice gives $f = C_1 t + C_2$, two constants of integration for two derivatives. The range is all of $\\mathbb{P}_1$.',
    },
    {
      kind: 'concept',
      title: 'Null spaces in engines: invisible directions',
      blocks: [
        {
          type: 'p',
          text: 'A big null space means **information is lost**: different inputs give the same output. If $A\\mathbf{u} = A\\mathbf{v}$ then $A(\\mathbf{u} - \\mathbf{v}) = \\mathbf{0}$, so two inputs look identical after the transformation exactly when they differ by a vector of $\\operatorname{Nul} A$.',
        },
        {
          type: 'list',
          items: [
            '**Orthographic projection** to the screen, $P = \\begin{bmatrix} 1 & 0 & 0 \\\\ 0 & 1 & 0 \\end{bmatrix}$, has $\\operatorname{Nul} P = \\operatorname{Span}\\{\\mathbf{e}_3\\}$: moving a point along the view axis does not change where it is drawn. That is why depth must be stored separately, in the depth buffer.',
            '**Planar shadows** project each point along the light direction $\\mathbf{d}$ onto the ground. That map is linear and its kernel is $\\operatorname{Span}\\{\\mathbf{d}\\}$: every point on the same light ray casts the same shadow point.',
            '**Physics constraints**: the velocities allowed by a joint are often exactly the null space of a constraint matrix $J$, the motions with $J\\mathbf{v} = \\mathbf{0}$. A hinge leaves a one-dimensional null space (spin about the axis).',
          ],
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Verify a null space numerically',
          text: 'When you compute a null space by hand (or in a solver), the cheapest test is to multiply back. Any combination of the spanning vectors must also be crushed to zero.',
        },
        {
          type: 'code',
          title: 'nullcheck.cpp',
          runnable: true,
          code: `#include <cstdio>

int main() {
    const int A[3][4] = {{1, 2, 0, -1}, {2, 4, 1, 1}, {3, 6, 1, 0}};
    const int N[3][4] = {{-2, 1, 0, 0},     // u
                         {1, 0, -3, 1},     // v
                         {-8, 3, 6, -2}};   // 3u - 2v
    for (const auto& n : N) {
        int out[3] = {0, 0, 0};
        for (int i = 0; i < 3; ++i)
            for (int j = 0; j < 4; ++j) out[i] += A[i][j] * n[j];
        std::printf("A*(%d, %d, %d, %d) = (%d, %d, %d)\\n",
                    n[0], n[1], n[2], n[3], out[0], out[1], out[2]);
    }
}`,
          output: `A*(-2, 1, 0, 0) = (0, 0, 0)
A*(1, 0, -3, 1) = (0, 0, 0)
A*(-8, 3, 6, -2) = (0, 0, 0)`,
          annotations: [
            { lines: '5-7', text: 'The two spanning vectors of $\\operatorname{Nul} A$ found earlier, plus the combination $3\\mathbf{u} - 2\\mathbf{v}$.' },
            { lines: '10-11', text: 'Row $i$ of $A$ dotted with $\\mathbf{n}$ gives entry $i$ of $A\\mathbf{n}$.' },
          ],
        },
      ],
    },
    {
      kind: 'error',
      prompt: 'A student finds a spanning set for $\\operatorname{Nul} A$ when $A$ row reduces to $\\begin{bmatrix} 1 & 0 & 2 & -1 \\\\ 0 & 1 & -3 & 4 \\end{bmatrix}$. Tap the first wrong line.',
      lines: [
        'The pivots are in columns 1 and 2, so $x_3$ and $x_4$ are free.',
        'The equations are $x_1 + 2x_3 - x_4 = 0$ and $x_2 - 3x_3 + 4x_4 = 0$.',
        'So $x_1 = 2x_3 - x_4$ and $x_2 = -3x_3 + 4x_4$.',
        '$\\mathbf{x} = x_3(2, -3, 1, 0) + x_4(-1, 4, 0, 1)$',
      ],
      errorLines: [3],
      explanation: 'Line 3 forgets to flip the signs when moving the free-variable terms to the other side. Correctly $x_1 = -2x_3 + x_4$ and $x_2 = 3x_3 - 4x_4$, so $\\operatorname{Nul} A = \\operatorname{Span}\\{(-2, 3, 1, 0), (1, -4, 0, 1)\\}$. Multiplying back would have caught it: the first row times $(2, -3, 1, 0)$ gives $2 + 2 = 4 \\ne 0$.',
    },
  ],
  takeaways: [
    '$\\operatorname{Nul} A = \\{\\mathbf{x} : A\\mathbf{x} = \\mathbf{0}\\}$ is a subspace of $\\mathbb{R}^n$ ($n$ = columns). Its definition is implicit; solving $A\\mathbf{x} = \\mathbf{0}$ in parametric vector form gives an explicit spanning set, one vector per free variable.',
    '$\\operatorname{Col} A = \\operatorname{Span}\\{\\mathbf{a}_1, \\dots, \\mathbf{a}_n\\} = \\{A\\mathbf{x}\\}$ is a subspace of $\\mathbb{R}^m$ ($m$ = rows). Its definition is explicit; testing membership means checking whether $A\\mathbf{x} = \\mathbf{b}$ is consistent.',
    'Testing $\\mathbf{v} \\in \\operatorname{Nul} A$ is a multiplication; testing $\\mathbf{b} \\in \\operatorname{Col} A$ is a row reduction.',
    'For a linear transformation $T: V \\to W$, the kernel (a subspace of $V$) and range (a subspace of $W$) generalise $\\operatorname{Nul} A$ and $\\operatorname{Col} A$.',
    'The kernel of the derivative is the constants, which is why solutions of $D(p) = f$, like solutions of $A\\mathbf{x} = \\mathbf{b}$, are "particular solution + kernel".',
  ],
  reading: [
    {
      title: 'Interactive Linear Algebra — Subspaces (column space and null space)',
      url: 'https://textbooks.math.gatech.edu/ila/',
      source: 'book',
      note: 'Look for the section on subspaces, where column and null spaces are drawn interactively and computed step by step.',
    },
    {
      title: 'MIT OCW 18.06 — Column space and nullspace (Strang)',
      url: 'https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/',
      source: 'other',
      note: 'Lectures 6 and 7 cover exactly this material, with Strang\'s famous emphasis on the four fundamental subspaces.',
    },
    {
      title: '3Blue1Brown — Inverse matrices, column space and null space',
      url: 'https://www.3blue1brown.com/topics/linear-algebra',
      source: 'video',
      note: 'The animation of a transformation squashing the plane onto a line makes the null space and column space visible.',
    },
    {
      title: 'Wikipedia — Kernel (linear algebra)',
      url: 'https://en.wikipedia.org/wiki/Kernel_(linear_algebra)',
      source: 'wikipedia',
      note: 'Covers the kernel for matrices and abstract linear maps, with applications.',
    },
  ],
};
