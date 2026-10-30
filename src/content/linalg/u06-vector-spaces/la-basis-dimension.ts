import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'la-basis-dimension',
  title: 'Basis and Dimension',
  summary: 'A basis is a spanning set with no waste. Every basis of a space has the same size, and that size, the dimension, is the true number of degrees of freedom.',
  minutes: 18,
  objectives: [
    'Define a basis and check whether a set of vectors is a basis',
    'Use the Spanning Set Theorem to trim a spanning set down to a basis',
    'Find bases for $\\operatorname{Nul} A$ and $\\operatorname{Col} A$, and explain why $\\operatorname{Col} A$ uses the pivot columns of $A$ itself',
    'Explain why every basis of a space has the same number of vectors, and compute dimensions',
    'Classify the subspaces of $\\mathbb{R}^3$ by dimension and apply the Basis Theorem',
  ],
  steps: [
    {
      kind: 'concept',
      title: 'A basis: spanning with no waste',
      blocks: [
        {
          type: 'p',
          text: 'A spanning set lets you build every vector of a space. But a spanning set can contain redundant vectors, ones that are already combinations of the others. A **basis** is a spanning set with all the redundancy squeezed out.',
        },
        {
          type: 'definition',
          term: 'Basis',
          text: 'Let $H$ be a subspace of a vector space $V$. A set $\\mathcal{B} = \\{\\mathbf{b}_1, \\dots, \\mathbf{b}_p\\}$ in $V$ is a [[basis]] for $H$ if\n\n1. $\\mathcal{B}$ is [[linear-independence|linearly independent]], and\n2. $H = \\operatorname{Span}\\{\\mathbf{b}_1, \\dots, \\mathbf{b}_p\\}$.',
        },
        {
          type: 'p',
          text: 'There are two ways to fail. **Too few** vectors, and the set cannot span. **Too many**, and the set is dependent. A basis sits exactly in between: it is a *smallest possible* spanning set and a *largest possible* independent set.',
        },
        {
          type: 'list',
          items: [
            'The [[standard-basis]] of $\\mathbb{R}^n$ is $\\{\\mathbf{e}_1, \\dots, \\mathbf{e}_n\\}$, the columns of $I_n$.',
            'The standard basis of $\\mathbb{P}_n$ is $\\{1, t, t^2, \\dots, t^n\\}$: every polynomial of degree $\\le n$ is a combination $a_0 \\cdot 1 + a_1 t + \\cdots + a_n t^n$, and the only combination equal to the zero polynomial has all $a_i = 0$.',
            'The $n$ columns of an invertible $n \\times n$ matrix form a basis of $\\mathbb{R}^n$, by the [[invertible-matrix-theorem|Invertible Matrix Theorem]]: the columns are independent and span $\\mathbb{R}^n$.',
          ],
        },
        {
          type: 'p',
          text: 'Below, $\\mathbf{v}_1 = (2, 1)$ is fixed and you control $\\mathbf{v}_2$. The readouts show the weights $c_1, c_2$ needed to build $\\mathbf{w} = (3, 3)$ as $c_1\\mathbf{v}_1 + c_2\\mathbf{v}_2$.',
        },
        {
          type: 'graph',
          x: [-5, 6],
          y: [-4, 6],
          equal: true,
          segments: [
            { from: [0, 0], to: [2, 1], arrow: true, label: 'v₁', color: 'blue' },
            { from: [0, 0], to: ['a', 'b'], arrow: true, label: 'v₂', color: 'green' },
            { from: [0, 0], to: ['6(b - a)/(2b - a)', '3(b - a)/(2b - a)'], dashed: true, color: 'blue' },
            { from: ['6(b - a)/(2b - a)', '3(b - a)/(2b - a)'], to: [3, 3], dashed: true, color: 'green' },
          ],
          points: [{ x: 3, y: 3, label: 'w = (3, 3)', color: 'red' }],
          sliders: [
            { name: 'a', min: -3, max: 3, step: 0.1, value: -1, label: '$\\mathbf{v}_2$ first entry' },
            { name: 'b', min: -3, max: 3, step: 0.1, value: 1, label: '$\\mathbf{v}_2$ second entry' },
          ],
          readouts: [
            { label: '$\\det[\\,\\mathbf{v}_1\\ \\mathbf{v}_2\\,] =$', expr: '2b - a', digits: 2 },
            { label: '$c_1 =$', expr: '3(b - a)/(2b - a)', digits: 3 },
            { label: '$c_2 =$', expr: '3/(2b - a)', digits: 3 },
          ],
          caption: 'Make $\\mathbf{v}_2$ nearly parallel to $\\mathbf{v}_1$ (try $a = 2$, $b = 1.1$): the determinant approaches $0$ and the weights explode. When the vectors are exactly parallel, $\\{\\mathbf{v}_1, \\mathbf{v}_2\\}$ is not a basis and $\\mathbf{w}$ cannot be built at all.',
        },
      ],
    },
    {
      kind: 'mcq',
      prompt: 'Which set is a basis for $\\mathbb{R}^3$? (Vectors written as rows are column vectors.)',
      options: [
        {
          text: '$\\{(1, 0, 0),\\ (0, 1, 0)\\}$',
          why: 'Independent, but too few: every combination has third entry $0$, so $(0, 0, 1)$ is not in the span.',
        },
        {
          text: '$\\{(1, 2, 0),\\ (0, 1, 1),\\ (1, 3, 1)\\}$',
          why: 'Dependent: $(1, 3, 1) = (1, 2, 0) + (0, 1, 1)$. The span is only a plane.',
        },
        {
          text: '$\\{(1, 0, 1),\\ (2, 1, 0),\\ (0, 1, 3)\\}$',
          correct: true,
          why: 'The matrix with these columns has determinant $1(3 - 0) - 2(0 - 1) + 0 = 5 \\ne 0$, so it is invertible and its columns form a basis of $\\mathbb{R}^3$.',
        },
        {
          text: '$\\{(1, 0, 0),\\ (0, 1, 0),\\ (0, 0, 1),\\ (1, 1, 1)\\}$',
          why: 'It spans $\\mathbb{R}^3$, but four vectors in $\\mathbb{R}^3$ are always dependent: $(1, 1, 1) = \\mathbf{e}_1 + \\mathbf{e}_2 + \\mathbf{e}_3$.',
        },
      ],
      explanation: 'A basis of $\\mathbb{R}^3$ needs vectors that are independent **and** span. Two vectors cannot span $\\mathbb{R}^3$; four cannot be independent. With exactly three, put them in a $3 \\times 3$ matrix: a nonzero [[determinant]] means invertible, which means independent columns that span. For $\\begin{bmatrix} 1 & 2 & 0 \\\\ 0 & 1 & 1 \\\\ 1 & 0 & 3 \\end{bmatrix}$ the determinant is $5$.',
    },
    {
      kind: 'concept',
      title: 'The Spanning Set Theorem: trimming to a basis',
      blocks: [
        {
          type: 'p',
          text: 'If a spanning set has redundant vectors, you can throw them away without shrinking the span. Keep throwing until nothing is redundant, and what is left is a basis.',
        },
        {
          type: 'theorem',
          name: 'Spanning Set Theorem',
          text: 'Let $S = \\{\\mathbf{v}_1, \\dots, \\mathbf{v}_p\\}$ and $H = \\operatorname{Span} S$.\n\n(a) If some $\\mathbf{v}_k$ is a linear combination of the other vectors in $S$, then removing $\\mathbf{v}_k$ leaves a set that still spans $H$.\n\n(b) If $H \\ne \\{\\mathbf{0}\\}$, some subset of $S$ is a basis for $H$.',
        },
        {
          type: 'derivation',
          title: 'Why removing a redundant vector keeps the span: $\\mathbf{v}_1 = (1, 0, 2)$, $\\mathbf{v}_2 = (0, 1, -1)$, $\\mathbf{v}_3 = (2, 3, 1)$',
          steps: [
            { tex: '\\mathbf{v}_3 = 2\\mathbf{v}_1 + 3\\mathbf{v}_2', why: 'Check entry by entry: $2(1, 0, 2) + 3(0, 1, -1) = (2, 3, 4 - 3) = (2, 3, 1)$. So $\\mathbf{v}_3$ is redundant.' },
            { tex: '\\mathbf{x} = c_1\\mathbf{v}_1 + c_2\\mathbf{v}_2 + c_3\\mathbf{v}_3', why: 'Take any vector in $H = \\operatorname{Span}\\{\\mathbf{v}_1, \\mathbf{v}_2, \\mathbf{v}_3\\}$.' },
            { tex: '= c_1\\mathbf{v}_1 + c_2\\mathbf{v}_2 + c_3(2\\mathbf{v}_1 + 3\\mathbf{v}_2)', why: 'Substitute the expression for $\\mathbf{v}_3$.' },
            { tex: '= (c_1 + 2c_3)\\mathbf{v}_1 + (c_2 + 3c_3)\\mathbf{v}_2', why: 'Collect terms. Every vector of $H$ is a combination of $\\mathbf{v}_1$ and $\\mathbf{v}_2$ alone.' },
            { tex: 'H = \\operatorname{Span}\\{\\mathbf{v}_1, \\mathbf{v}_2\\}', why: 'And $\\{\\mathbf{v}_1, \\mathbf{v}_2\\}$ is independent (neither is a multiple of the other), so it is a basis for $H$.' },
          ],
          result: '$H$ is a plane in $\\mathbb{R}^3$ with basis $\\{\\mathbf{v}_1, \\mathbf{v}_2\\}$. Part (b) is just this step repeated: while the set is dependent, some vector is a combination of the others; remove it.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why a basis is the "right size"',
          text: 'Remove a vector from a basis and the span shrinks, because the removed vector is not a combination of the rest (that is what independence means). Add any vector of $H$ and the set becomes dependent, because the new vector already is a combination of the basis (that is what spanning means). So a basis is simultaneously a minimal spanning set and a maximal independent set.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Redundant blend shapes',
          text: 'A face rig stores blend shapes (morph targets) as offset vectors added to a neutral mesh, and an expression is a linear combination of them. If an artist sculpts "smile" and it turns out to equal "left smile" + "right smile", it adds nothing to the span of reachable expressions: the Spanning Set Theorem says it can be dropped without losing a single face, saving memory and animation channels.',
        },
      ],
    },
    {
      kind: 'truefalse',
      prompt: 'A basis for a subspace $H$ is a spanning set for $H$ that is as **large** as possible.',
      answer: false,
      explanation: 'It is the other way round: a basis is a spanning set that is as **small** as possible (remove any vector and it stops spanning), or equivalently an independent set that is as **large** as possible (add any vector and it becomes dependent). Spanning sets can be made arbitrarily large by adding redundant vectors.',
    },
    {
      kind: 'concept',
      title: 'Bases for Nul A and Col A',
      blocks: [
        {
          type: 'p',
          text: '**Null space.** The previous lesson\'s method, solving $A\\mathbf{x} = \\mathbf{0}$ in parametric vector form, already produces a basis. The vectors span by construction, and they are independent because each has a $1$ in its own free-variable slot where all the others have $0$.',
        },
        {
          type: 'p',
          text: '**Column space.** The columns of $A$ span $\\operatorname{Col} A$ by definition, so by the Spanning Set Theorem some of them form a basis. Which ones? Exactly the [[pivot-column|pivot columns]].',
        },
        {
          type: 'theorem',
          name: 'Basis for the column space',
          text: 'The pivot columns of a matrix $A$ form a basis for $\\operatorname{Col} A$. Use the columns of **$A$ itself**, in the positions where its echelon form has pivots.',
        },
        {
          type: 'derivation',
          title: 'Bases for $\\operatorname{Nul} A$ and $\\operatorname{Col} A$ with $A = \\begin{bmatrix} 1 & 2 & 0 & -1 \\\\ 2 & 4 & 1 & 1 \\\\ 3 & 6 & 1 & 0 \\end{bmatrix} \\sim R = \\begin{bmatrix} 1 & 2 & 0 & -1 \\\\ 0 & 0 & 1 & 3 \\\\ 0 & 0 & 0 & 0 \\end{bmatrix}$',
          steps: [
            { tex: '\\operatorname{Nul} A: \\ \\left\\{ \\begin{bmatrix} -2 \\\\ 1 \\\\ 0 \\\\ 0 \\end{bmatrix}, \\begin{bmatrix} 1 \\\\ 0 \\\\ -3 \\\\ 1 \\end{bmatrix} \\right\\}', why: 'From the previous lesson: $x_1 = -2x_2 + x_4$, $x_3 = -3x_4$, split by the free variables $x_2, x_4$.' },
            { tex: '\\mathbf{r}_2 = 2\\mathbf{r}_1, \\qquad \\mathbf{r}_4 = -\\mathbf{r}_1 + 3\\mathbf{r}_3', why: 'In the reduced form $R$ the dependencies among columns are visible at a glance (each non-pivot column is built from the pivot columns using its own entries as weights).' },
            { tex: '\\mathbf{a}_2 = 2\\mathbf{a}_1, \\qquad \\mathbf{a}_4 = -\\mathbf{a}_1 + 3\\mathbf{a}_3', why: 'The **same** relations hold for the columns of $A$. Check: $-(1, 2, 3) + 3(0, 1, 1) = (-1, 1, 0) = \\mathbf{a}_4$.' },
            { tex: '\\operatorname{Col} A = \\operatorname{Span}\\{\\mathbf{a}_1, \\mathbf{a}_3\\}', why: 'Spanning Set Theorem: drop the redundant columns $\\mathbf{a}_2$ and $\\mathbf{a}_4$.' },
            { tex: '\\operatorname{Col} A: \\ \\left\\{ \\begin{bmatrix} 1 \\\\ 2 \\\\ 3 \\end{bmatrix}, \\begin{bmatrix} 0 \\\\ 1 \\\\ 1 \\end{bmatrix} \\right\\}', why: '$\\mathbf{r}_1, \\mathbf{r}_3$ are independent (they are $\\mathbf{e}_1, \\mathbf{e}_2$), and the same relations-transfer argument shows $\\mathbf{a}_1, \\mathbf{a}_3$ are independent too.' },
          ],
          result: 'Basis of $\\operatorname{Nul} A$: 2 vectors in $\\mathbb{R}^4$. Basis of $\\operatorname{Col} A$: columns 1 and 3 of $A$, 2 vectors in $\\mathbb{R}^3$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the columns of A, not of its echelon form',
          text: 'Row operations do not change the solutions of $A\\mathbf{x} = \\mathbf{0}$. A solution $\\mathbf{x}$ is precisely a list of weights with $x_1\\mathbf{a}_1 + \\cdots + x_n\\mathbf{a}_n = \\mathbf{0}$, so $A$ and $R$ have **exactly the same linear dependence relations among their columns**. That is why the echelon form can tell you *which* columns to keep. But row operations **do** change the columns themselves, and with them the column space. Here the columns of $R$ all have third entry $0$, so $\\operatorname{Col} R$ is the $x_1x_2$-plane, while $\\mathbf{a}_1 = (1, 2, 3)$ is not even in it. $\\operatorname{Col} R \\ne \\operatorname{Col} A$.',
        },
        {
          type: 'compare',
          left: { title: 'Wrong', tone: 'bad', tex: ['\\operatorname{Col} A = \\operatorname{Span}\\left\\{ \\begin{bmatrix} 1 \\\\ 0 \\\\ 0 \\end{bmatrix}, \\begin{bmatrix} 0 \\\\ 1 \\\\ 0 \\end{bmatrix} \\right\\}'], text: 'Pivot columns of the echelon form $R$.' },
          right: { title: 'Right', tone: 'good', tex: ['\\operatorname{Col} A = \\operatorname{Span}\\left\\{ \\begin{bmatrix} 1 \\\\ 2 \\\\ 3 \\end{bmatrix}, \\begin{bmatrix} 0 \\\\ 1 \\\\ 1 \\end{bmatrix} \\right\\}'], text: 'The matching columns of $A$ itself.' },
        },
      ],
    },
    {
      kind: 'mcq',
      prompt: 'The matrix $A$ is row equivalent to the echelon form $B$. Which set is a basis for $\\operatorname{Col} A$?',
      tex: 'A = \\begin{bmatrix} 1 & 3 & 2 & 0 \\\\ 2 & 6 & 5 & 1 \\\\ -1 & -3 & 0 & 2 \\end{bmatrix} \\sim B = \\begin{bmatrix} 1 & 3 & 2 & 0 \\\\ 0 & 0 & 1 & 1 \\\\ 0 & 0 & 0 & 0 \\end{bmatrix}',
      options: [
        {
          text: '$\\{(1, 0, 0),\\ (2, 1, 0)\\}$, columns 1 and 3 of $B$',
          why: 'These span $\\operatorname{Col} B$, which is the plane "third entry $= 0$". But $\\mathbf{a}_1 = (1, 2, -1)$ has third entry $-1$, so $\\operatorname{Col} A$ is a different plane.',
        },
        {
          text: '$\\{(1, 2, -1),\\ (2, 5, 0)\\}$, columns 1 and 3 of $A$',
          correct: true,
          why: 'The pivots of $B$ are in columns 1 and 3, so columns 1 and 3 **of $A$** form a basis of $\\operatorname{Col} A$.',
        },
        {
          text: '$\\{(1, 2, -1),\\ (3, 6, -3)\\}$, columns 1 and 2 of $A$',
          why: 'Column 2 is $3$ times column 1, so this set is dependent and spans only a line.',
        },
        {
          text: 'All four columns of $A$',
          why: 'They span $\\operatorname{Col} A$, but four vectors in $\\mathbb{R}^3$ are dependent, so this is not a basis.',
        },
      ],
      explanation: 'Read the pivot **positions** from the echelon form (columns 1 and 3), then take those columns from the **original** matrix. Row reduction preserves dependence relations among columns ($\\mathbf{a}_2 = 3\\mathbf{a}_1$ and $\\mathbf{b}_2 = 3\\mathbf{b}_1$), but it changes the column space itself.',
    },
    {
      kind: 'error',
      prompt: 'A student finds a basis for $\\operatorname{Col} A$ with $A = \\begin{bmatrix} 1 & 2 & 1 \\\\ 2 & 4 & 3 \\\\ 1 & 2 & 2 \\end{bmatrix}$. Tap the first wrong line.',
      lines: [
        '$R_2 - 2R_1$ and $R_3 - R_1$ give $\\begin{bmatrix} 1 & 2 & 1 \\\\ 0 & 0 & 1 \\\\ 0 & 0 & 1 \\end{bmatrix}$.',
        '$R_3 - R_2$ gives the echelon form $\\begin{bmatrix} 1 & 2 & 1 \\\\ 0 & 0 & 1 \\\\ 0 & 0 & 0 \\end{bmatrix}$.',
        'The pivots are in columns 1 and 3.',
        'So a basis for $\\operatorname{Col} A$ is $\\{(1, 0, 0), (1, 1, 0)\\}$.',
      ],
      errorLines: [4],
      explanation: 'The row reduction and pivot positions are correct, but line 4 takes columns 1 and 3 of the **echelon form**. The basis must use columns 1 and 3 of $A$: $\\{(1, 2, 1), (1, 3, 2)\\}$. The echelon columns span the plane "third entry $= 0$", which does not even contain $\\mathbf{a}_1 = (1, 2, 1)$.',
    },
    {
      kind: 'concept',
      title: 'Dimension: every basis has the same size',
      blocks: [
        {
          type: 'p',
          text: 'A space has many bases: $\\{(1, 0), (0, 1)\\}$, $\\{(2, 1), (-1, 1)\\}$, and infinitely many more for $\\mathbb{R}^2$. Remarkably, they all have the **same number** of vectors. The key lemma: you can never have more independent vectors than a basis has.',
        },
        {
          type: 'derivation',
          title: 'Lemma: if $V$ has a basis $\\{\\mathbf{b}_1, \\dots, \\mathbf{b}_n\\}$, then any $p > n$ vectors $\\mathbf{u}_1, \\dots, \\mathbf{u}_p$ in $V$ are dependent',
          steps: [
            { tex: '\\mathbf{u}_j = a_{1j}\\mathbf{b}_1 + a_{2j}\\mathbf{b}_2 + \\cdots + a_{nj}\\mathbf{b}_n \\quad (j = 1, \\dots, p)', why: 'The basis spans $V$, so each $\\mathbf{u}_j$ is a combination of the $\\mathbf{b}_i$. Collect the weights into an $n \\times p$ matrix $M = [a_{ij}]$.' },
            { tex: 'M\\mathbf{c} = \\mathbf{0} \\text{ has a nontrivial solution } \\mathbf{c} = (c_1, \\dots, c_p)', why: '$M$ has more columns ($p$) than rows ($n$), so there is a free variable: a homogeneous system with more unknowns than equations always has nonzero solutions.' },
            { tex: 'c_1\\mathbf{u}_1 + \\cdots + c_p\\mathbf{u}_p = \\sum_{j} c_j \\sum_{i} a_{ij}\\mathbf{b}_i = \\sum_{i} \\Big( \\sum_{j} a_{ij}c_j \\Big)\\mathbf{b}_i', why: 'Substitute and swap the order of summation (the vector space axioms allow regrouping).' },
            { tex: '= \\sum_i (M\\mathbf{c})_i\\,\\mathbf{b}_i = \\sum_i 0 \\cdot \\mathbf{b}_i = \\mathbf{0}', why: 'The inner sum is entry $i$ of $M\\mathbf{c}$, which is $0$.' },
          ],
          result: 'A nontrivial combination of the $\\mathbf{u}_j$ equals $\\mathbf{0}$, so they are dependent.',
        },
        {
          type: 'p',
          text: 'Now suppose $V$ has a basis with $n$ vectors and another with $m$ vectors. The second basis is independent, so the lemma forces $m \\le n$; swapping roles gives $n \\le m$. Hence $m = n$.',
        },
        {
          type: 'definition',
          term: 'Dimension',
          text: 'If $V$ is spanned by a finite set, the [[dimension]] $\\dim V$ is the number of vectors in any basis of $V$. The dimension of $\\{\\mathbf{0}\\}$ is $0$. If $V$ is not spanned by any finite set, $V$ is **infinite-dimensional**.',
        },
        {
          type: 'table',
          headers: ['Space', 'A basis', 'Dimension'],
          rows: [
            ['$\\mathbb{R}^n$', '$\\mathbf{e}_1, \\dots, \\mathbf{e}_n$', '$n$'],
            ['$\\mathbb{P}_n$', '$1, t, \\dots, t^n$', '$n + 1$'],
            ['$M_{2 \\times 2}$', 'the four matrices with a single entry $1$', '$4$ (and $M_{m \\times n}$ has $mn$)'],
            ['$\\operatorname{Nul} A$', 'parametric vector form', 'number of free variables'],
            ['$\\operatorname{Col} A$', 'pivot columns of $A$', 'number of pivot columns'],
            ['All polynomials $\\mathbb{P}$; $C[a, b]$', 'no finite basis', 'infinite'],
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Count vectors, not entries',
          text: 'The plane $x - 2y + z = 0$ consists of vectors with 3 entries, but its dimension is $2$: its basis $\\{(2, 1, 0), (-1, 0, 1)\\}$ has two vectors. "Lives in $\\mathbb{R}^3$" and "is 3-dimensional" are different statements.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'Find the dimension of the subspace $H = \\left\\{ \\begin{bmatrix} a + 2b - c \\\\ 2a + 4b + c \\\\ 3c \\end{bmatrix} : a, b, c \\in \\mathbb{R} \\right\\}$ of $\\mathbb{R}^3$.',
      label: '$\\dim H =$',
      answer: '2',
      hint: 'Write $H$ as the span of three vectors, one for each of $a$, $b$, $c$. Are any of them redundant?',
      explanation: '$H = \\operatorname{Span}\\{(1, 2, 0), (2, 4, 0), (-1, 1, 3)\\}$. The second vector is $2$ times the first, so by the Spanning Set Theorem it can be dropped. The remaining two are not multiples of each other, so they are independent and form a basis. $\\dim H = 2$, a plane through the origin, even though $H$ was written with three parameters.',
    },
    {
      kind: 'numeric',
      prompt: 'What is the dimension of $H = \\{ p \\in \\mathbb{P}_3 : p(1) = 0 \\}$?',
      label: '$\\dim H =$',
      answer: '3',
      hint: 'Write $p = a_0 + a_1 t + a_2 t^2 + a_3 t^3$. The condition $p(1) = 0$ is one linear equation in the four coefficients. How many free variables?',
      explanation: '$p(1) = a_0 + a_1 + a_2 + a_3 = 0$ is one equation in four unknowns, so $a_1, a_2, a_3$ are free and $a_0 = -a_1 - a_2 - a_3$. Then $p = a_1(t - 1) + a_2(t^2 - 1) + a_3(t^3 - 1)$, and $\\{t - 1, t^2 - 1, t^3 - 1\\}$ is a basis. $\\dim H = 3$: one linear condition cut $\\dim \\mathbb{P}_3 = 4$ down by one.',
    },
    {
      kind: 'concept',
      title: 'Subspaces of R³ and the Basis Theorem',
      blocks: [
        {
          type: 'p',
          text: 'Dimension lets us list **every** subspace of $\\mathbb{R}^3$. A subspace $H$ has a basis of at most $3$ vectors (by the lemma), and the number of basis vectors pins down its shape.',
        },
        {
          type: 'table',
          headers: ['$\\dim H$', 'What $H$ is', 'Example'],
          rows: [
            ['$0$', 'just the origin, $\\{\\mathbf{0}\\}$', '$\\operatorname{Nul} I_3$'],
            ['$1$', 'a line through the origin', '$\\operatorname{Span}\\{(1, 1, 0)\\}$'],
            ['$2$', 'a plane through the origin', '$x - 2y + z = 0$'],
            ['$3$', 'all of $\\mathbb{R}^3$', '$\\operatorname{Col} A$ for any invertible $3 \\times 3$ $A$'],
          ],
          caption: 'There is nothing else: no subspace of $\\mathbb{R}^3$ is a curve, a shifted plane or a half-space.',
        },
        {
          type: 'theorem',
          name: 'The Basis Theorem',
          text: 'Let $V$ be a $p$-dimensional vector space, $p \\ge 1$. Any linearly independent set of exactly $p$ vectors in $V$ is automatically a basis. Any set of exactly $p$ vectors that spans $V$ is automatically a basis.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why half the work is enough',
          text: 'Suppose $p$ independent vectors did not span $V$. Then some $\\mathbf{v} \\in V$ is outside their span, and adding it keeps the set independent: $p + 1$ independent vectors in a $p$-dimensional space, contradicting the lemma. Conversely, if $p$ spanning vectors were dependent, the Spanning Set Theorem would trim them to a basis with fewer than $p$ vectors, contradicting that every basis has $p$. So when the count is right, one property gives you the other for free.',
        },
        {
          type: 'p',
          text: 'A related fact: if $H$ is a subspace of a finite-dimensional $V$, then $\\dim H \\le \\dim V$, and any independent set in $H$ can be enlarged to a basis of $H$.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Dimension versus "degrees of freedom"',
          text: 'Dimension is the number of floats you need to pin down an element of a **subspace**: a direction on the ground plane needs 2, a polynomial in $\\mathbb{P}_2$ needs 3 coefficients. Be careful with sets that are not subspaces. The rotations of 3D space have 3 degrees of freedom (yaw, pitch, roll), yet they are not a 3-dimensional subspace of the 9-dimensional space $M_{3 \\times 3}$: the sum of two rotation matrices is generally not a rotation. That curvature is exactly why rotations are interpolated with quaternion slerp rather than by lerping matrices.',
        },
      ],
    },
    {
      kind: 'truefalse',
      prompt: 'If $H$ is a 3-dimensional subspace of $\\mathbb{R}^5$ and $\\mathbf{v}_1, \\mathbf{v}_2, \\mathbf{v}_3$ are linearly independent vectors in $H$, then $\\{\\mathbf{v}_1, \\mathbf{v}_2, \\mathbf{v}_3\\}$ is a basis for $H$.',
      answer: true,
      explanation: 'This is the Basis Theorem applied to $V = H$ with $p = 3$: three independent vectors in a 3-dimensional space automatically span it. The ambient $\\mathbb{R}^5$ is irrelevant; what matters is that the vectors lie **in $H$** and that their number equals $\\dim H$.',
    },
    {
      kind: 'fill',
      prompt: 'Complete the facts about an $m \\times n$ matrix $A$.',
      template: '$\\dim \\operatorname{Nul} A$ equals the number of ___ in $A\\mathbf{x} = \\mathbf{0}$, and $\\dim \\operatorname{Col} A$ equals the number of ___ of $A$. A basis for $\\operatorname{Col} A$ is taken from the columns of ___.',
      blanks: [{ answers: ['free variables'] }, { answers: ['pivot columns'] }, { answers: ['$A$ itself'] }],
      wordBank: ['free variables', 'pivot columns', '$A$ itself', 'the echelon form', 'rows', 'basic variables'],
      explanation: 'Parametric vector form gives one null-space basis vector per free variable, and the pivot columns of $A$ form a basis for $\\operatorname{Col} A$. Since every column is either a pivot column or corresponds to a free variable, these two numbers add up to $n$, the theme of the next lesson. The columns come from $A$ itself because row operations change the column space.',
    },
  ],
  takeaways: [
    'A basis of $H$ is a linearly independent set that spans $H$: a smallest spanning set and a largest independent set.',
    'Spanning Set Theorem: deleting a vector that is a combination of the others keeps the span, so every finite spanning set of a nonzero space contains a basis.',
    'Basis of $\\operatorname{Nul} A$: the vectors of the parametric vector form. Basis of $\\operatorname{Col} A$: the pivot columns of $A$ itself, because row reduction preserves column dependence relations but changes the column space.',
    'Every basis of a space has the same number of vectors, its dimension: $\\dim \\mathbb{R}^n = n$, $\\dim \\mathbb{P}_n = n + 1$, $\\dim M_{m \\times n} = mn$.',
    'Subspaces of $\\mathbb{R}^3$ have dimension 0, 1, 2 or 3: the origin, lines and planes through the origin, and $\\mathbb{R}^3$. In a $p$-dimensional space, $p$ independent vectors or $p$ spanning vectors automatically form a basis.',
  ],
  reading: [
    {
      title: 'Interactive Linear Algebra — Basis and Dimension',
      url: 'https://textbooks.math.gatech.edu/ila/',
      source: 'book',
      note: 'The section on basis and dimension includes the Basis Theorem and many worked examples of bases for column and null spaces.',
    },
    {
      title: '3Blue1Brown — Linear combinations, span, and basis vectors',
      url: 'https://www.3blue1brown.com/topics/linear-algebra',
      source: 'video',
      note: 'Chapter 2 of *Essence of linear algebra* builds the geometric intuition for what a basis is.',
    },
    {
      title: 'Khan Academy — Linear algebra: basis of a subspace',
      url: 'https://www.khanacademy.org/math/linear-algebra',
      source: 'khan',
      note: 'Video walkthroughs of finding bases for null spaces and column spaces, and of why dimension is well defined.',
    },
    {
      title: 'Wikipedia — Dimension (vector space)',
      url: 'https://en.wikipedia.org/wiki/Dimension_(vector_space)',
      source: 'wikipedia',
      note: 'Formal statement and proof sketch that all bases have the same cardinality, including infinite-dimensional spaces.',
    },
  ],
};
