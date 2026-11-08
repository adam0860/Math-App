import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'la-rank',
  title: 'Rank and the Rank–Nullity Theorem',
  summary: 'One number, the rank, measures how much a matrix really does. Every column is either a pivot or a free variable, and that simple count controls everything.',
  minutes: 17,
  objectives: [
    'Define the row space and find a basis for it from an echelon form',
    'Define rank, and explain why $\\operatorname{rank} A^{T} = \\operatorname{rank} A$',
    'State and apply the Rank–Nullity Theorem $\\operatorname{rank} A + \\dim \\operatorname{Nul} A = n$',
    'Add rank and dimension conditions to the Invertible Matrix Theorem',
    'Recognise a rank-1 matrix as an outer product and explain why low rank means compression',
  ],
  steps: [
    {
      kind: 'concept',
      title: 'The row space',
      blocks: [
        {
          type: 'p',
          text: 'The columns of $A$ span the column space. The rows deserve a space too. Each row of an $m \\times n$ matrix has $n$ entries; regard it as a vector in $\\mathbb{R}^n$ (stand it up as a column).',
        },
        {
          type: 'definition',
          term: 'Row space',
          text: 'The [[row-space]] of $A$, written $\\operatorname{Row} A$, is the set of all linear combinations of the rows of $A$. It is a subspace of $\\mathbb{R}^n$. Because the rows of $A$ are the columns of $A^{T}$, $\\operatorname{Row} A = \\operatorname{Col} A^{T}$.',
        },
        {
          type: 'theorem',
          name: 'Row operations preserve the row space',
          text: 'If $A$ and $B$ are row equivalent, then $\\operatorname{Row} A = \\operatorname{Row} B$. If $B$ is in echelon form, its nonzero rows form a basis for $\\operatorname{Row} A$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why row operations do not change the row space',
          text: 'Each row operation replaces rows by combinations of the old rows (swap, scale by a nonzero number, add a multiple of one row to another). So every row of $B$ lies in $\\operatorname{Row} A$, giving $\\operatorname{Row} B \\subseteq \\operatorname{Row} A$. Row operations are reversible, so the same argument gives $\\operatorname{Row} A \\subseteq \\operatorname{Row} B$. The nonzero rows of an echelon form are independent because each has its leading entry in a column where every row below it has a $0$, so no row can be built from the rows beneath it.',
        },
        {
          type: 'derivation',
          title: 'Basis for $\\operatorname{Row} A$ with $A = \\begin{bmatrix} 1 & 2 & 0 & -1 \\\\ 2 & 4 & 1 & 1 \\\\ 3 & 6 & 1 & 0 \\end{bmatrix}$',
          steps: [
            { tex: 'A \\sim \\begin{bmatrix} 1 & 2 & 0 & -1 \\\\ 0 & 0 & 1 & 3 \\\\ 0 & 0 & 0 & 0 \\end{bmatrix}', why: 'The same reduction as in the previous two lessons: $R_2 - 2R_1$, $R_3 - 3R_1$, $R_3 - R_2$.' },
            { tex: '\\operatorname{Row} A: \\ \\left\\{ (1, 2, 0, -1),\\ (0, 0, 1, 3) \\right\\}', why: 'The nonzero rows of the echelon form. Written as rows here for readability; as vectors they live in $\\mathbb{R}^4$.' },
            { tex: '(0, 0, 1, 3) = \\text{row}_2(A) - 2\\,\\text{row}_1(A)', why: 'Sanity check: each basis vector really is a combination of the rows of $A$.' },
          ],
          result: '$\\dim \\operatorname{Row} A = 2$, the number of pivots.',
        },
        {
          type: 'compare',
          left: { title: 'Row A', tone: 'neutral', text: 'Use the nonzero rows of the **echelon form**. Row operations keep the row space the same, so the simplified rows are fine.' },
          right: { title: 'Col A', tone: 'neutral', text: 'Use the pivot columns of **$A$ itself**. Row operations change the column space and keep only the column dependence relations.' },
        },
        {
          type: 'callout',
          variant: 'warning',
          text: 'Do not take "the rows of $A$ in the pivot rows". Row swaps and row combinations scramble which original rows matter; in general the first $r$ rows of $A$ need not span $\\operatorname{Row} A$. Use the echelon rows.',
        },
      ],
    },
    {
      kind: 'mcq',
      prompt: 'An $m \\times n$ matrix $A$ is row reduced to an echelon form $B$. Which recipe gives correct bases?',
      options: [
        {
          text: '$\\operatorname{Row} A$: nonzero rows of $B$. $\\operatorname{Col} A$: pivot columns of $A$.',
          correct: true,
          why: 'Row operations preserve the row space (so $B$\'s rows work) but change the column space (so you must go back to $A$\'s columns).',
        },
        {
          text: '$\\operatorname{Row} A$: nonzero rows of $B$. $\\operatorname{Col} A$: pivot columns of $B$.',
          why: 'The row half is right, but $\\operatorname{Col} B$ is generally a different subspace from $\\operatorname{Col} A$.',
        },
        {
          text: '$\\operatorname{Row} A$: the rows of $A$ in the pivot rows. $\\operatorname{Col} A$: pivot columns of $A$.',
          why: 'Row swaps and replacements mix rows, so the rows of $A$ in those positions need not span $\\operatorname{Row} A$.',
        },
        {
          text: 'Both from $B$: its nonzero rows and its pivot columns.',
          why: 'Fine for $\\operatorname{Row} A$, wrong for $\\operatorname{Col} A$: the columns of $B$ usually have zeros where $A$\'s columns do not.',
        },
      ],
      explanation: 'The asymmetry comes from what row operations preserve. They preserve the **span of the rows** (every new row is a combination of old rows, reversibly) and the **dependence relations among the columns** (the solutions of $A\\mathbf{x} = \\mathbf{0}$), but not the span of the columns.',
    },
    {
      kind: 'concept',
      title: 'Rank, and why rank A = rank Aᵀ',
      blocks: [
        {
          type: 'definition',
          term: 'Rank',
          text: 'The [[rank]] of $A$ is the dimension of its column space: $\\operatorname{rank} A = \\dim \\operatorname{Col} A$. The **[[nullity]]** of $A$ is $\\dim \\operatorname{Nul} A$.',
        },
        {
          type: 'p',
          text: 'Everything in the previous lesson turns these into counts you can read off one echelon form:',
        },
        {
          type: 'list',
          items: [
            '$\\dim \\operatorname{Col} A$ = number of pivot columns (pivot columns of $A$ form a basis).',
            '$\\dim \\operatorname{Row} A$ = number of nonzero rows of the echelon form = number of pivots (each nonzero echelon row has exactly one pivot).',
            '$\\dim \\operatorname{Nul} A$ = number of free variables = number of non-pivot columns.',
          ],
        },
        {
          type: 'theorem',
          name: 'Row rank equals column rank',
          tex: '\\dim \\operatorname{Row} A = \\dim \\operatorname{Col} A = \\operatorname{rank} A, \\qquad \\operatorname{rank} A^{T} = \\operatorname{rank} A',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why this is surprising, and why it is true',
          text: 'The columns of a $3 \\times 100$ matrix live in $\\mathbb{R}^3$ and the rows in $\\mathbb{R}^{100}$: completely different spaces. Yet the number of independent rows always equals the number of independent columns. The proof is a single observation: both counts equal the number of **pivots** in an echelon form. Since $\\operatorname{Col} A^{T} = \\operatorname{Row} A$, we also get $\\operatorname{rank} A^{T} = \\operatorname{rank} A$.',
        },
        {
          type: 'p',
          text: 'In particular, $\\operatorname{rank} A \\le \\min(m, n)$: there cannot be more pivots than rows or than columns. A matrix with $\\operatorname{rank} A = \\min(m, n)$ is said to have **full rank**.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'Find the rank of $M = \\begin{bmatrix} 1 & 2 & 0 & 1 \\\\ 2 & 4 & 1 & 3 \\\\ 0 & 0 & 1 & 1 \\\\ 3 & 6 & 1 & 4 \\end{bmatrix}$.',
      label: '$\\operatorname{rank} M =$',
      answer: '2',
      hint: 'Row reduce and count pivots. Or look for rows that are combinations of others.',
      explanation: '$R_2 - 2R_1 = (0, 0, 1, 1)$ and $R_4 - 3R_1 = (0, 0, 1, 1)$, so rows 2, 3 and 4 are now identical. Subtracting the new row 2 from rows 3 and 4 leaves $\\begin{bmatrix} 1 & 2 & 0 & 1 \\\\ 0 & 0 & 1 & 1 \\\\ 0 & 0 & 0 & 0 \\\\ 0 & 0 & 0 & 0 \\end{bmatrix}$: two pivots, so $\\operatorname{rank} M = 2$. Row view: row 2 $= 2\\,$row 1 $+$ row 3 and row 4 $= 3\\,$row 1 $+$ row 3. Column view: column 2 $= 2\\,$column 1 and column 4 $=$ column 1 $+$ column 3. Two independent rows, two independent columns, as the theorem promises.',
    },
    {
      kind: 'concept',
      title: 'The Rank–Nullity Theorem',
      blocks: [
        {
          type: 'p',
          text: 'Every column of $A$ is either a pivot column or the column of a free variable, never both, never neither. Count both kinds and you get the number of columns. That one-line observation is one of the most-used theorems in linear algebra.',
        },
        {
          type: 'theorem',
          name: 'Rank–Nullity Theorem',
          tex: '\\operatorname{rank} A + \\dim \\operatorname{Nul} A = n',
          text: 'for every $m \\times n$ matrix $A$, where $n$ is the number of **columns**. In words: (pivot columns) + (free variables) = (columns).',
        },
        {
          type: 'p',
          text: 'Read it as a conservation law for $T(\\mathbf{x}) = A\\mathbf{x}$. The domain $\\mathbb{R}^n$ has $n$ dimensions. The ones that are crushed form $\\operatorname{Nul} A$; the ones that survive show up in the output as $\\operatorname{Col} A$. Dimensions are never created and never vanish without trace.',
        },
        {
          type: 'p',
          text: 'Below, $A = \\begin{bmatrix} 1 & p \\\\ 2 & q \\end{bmatrix}$. You see the images of $\\mathbf{e}_1$ and $\\mathbf{e}_2$ and the parallelogram that the unit square becomes. The dashed orange arrow is $A\\mathbf{n}$ for the test vector $\\mathbf{n} = (-p, 1)$, which always equals $(0,\\ q - 2p)$.',
        },
        {
          type: 'graph',
          x: [-3, 4],
          y: [-3, 7],
          equal: true,
          segments: [
            { from: [0, 0], to: [1, 2], arrow: true, label: 'Ae₁', color: 'blue' },
            { from: [0, 0], to: ['p', 'q'], arrow: true, label: 'Ae₂', color: 'green' },
            { from: [1, 2], to: ['1 + p', '2 + q'], color: 'gray' },
            { from: ['p', 'q'], to: ['1 + p', '2 + q'], color: 'gray' },
            { from: [0, 0], to: [0, 'q - 2p'], arrow: true, dashed: true, label: 'An', color: 'orange' },
          ],
          sliders: [
            { name: 'p', min: -2, max: 2, step: 0.1, value: 1, label: '$p$' },
            { name: 'q', min: -2, max: 4, step: 0.1, value: 3, label: '$q$' },
          ],
          readouts: [{ label: '$\\det A = q - 2p =$', expr: 'q - 2p', digits: 2 }],
          caption: 'Set $q = 2p$ (for example $p = 1$, $q = 2$). The parallelogram flattens onto the line $y = 2x$: $\\operatorname{rank} A$ drops from $2$ to $1$. At the same moment $A\\mathbf{n}$ shrinks to $\\mathbf{0}$, so $\\operatorname{Nul} A$ grows from $\\{\\mathbf{0}\\}$ to the line through $\\mathbf{n}$. Rank lost, nullity gained: the sum stays $2$.',
        },
        {
          type: 'derivation',
          title: 'A $4 \\times 6$ matrix $A$ has rank $4$. Find $\\dim \\operatorname{Nul} A$ and decide whether $A\\mathbf{x} = \\mathbf{b}$ is solvable for every $\\mathbf{b}$.',
          steps: [
            { tex: '\\dim \\operatorname{Nul} A = n - \\operatorname{rank} A = 6 - 4 = 2', why: 'Rank–Nullity with $n = 6$ columns. Two free variables, so $\\operatorname{Nul} A$ is a plane in $\\mathbb{R}^6$.' },
            { tex: '\\dim \\operatorname{Col} A = 4 = \\dim \\mathbb{R}^4', why: '$\\operatorname{Col} A$ is a subspace of $\\mathbb{R}^4$ (4 rows) with dimension 4.' },
            { tex: '\\operatorname{Col} A = \\mathbb{R}^4', why: 'By the Basis Theorem, a 4-dimensional subspace of $\\mathbb{R}^4$ is all of $\\mathbb{R}^4$: 4 independent pivot columns automatically span.' },
          ],
          result: 'Every $\\mathbf{b}$ in $\\mathbb{R}^4$ is reachable, and each system $A\\mathbf{x} = \\mathbf{b}$ has a 2-parameter family of solutions.',
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'Rank–Nullity questions are exam favourites: "a $7 \\times 10$ matrix has a 4-dimensional null space; is it onto?" ($\\operatorname{rank} = 6 < 7$, so no). Always ask yourself: which number is $n$? It is the number of **columns**, the dimension of the input space.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'A $7 \\times 9$ matrix $A$ has a 3-dimensional null space. What is $\\operatorname{rank} A$?',
      label: '$\\operatorname{rank} A =$',
      answer: '6',
      hint: 'Rank–Nullity uses the number of columns.',
      explanation: '$\\operatorname{rank} A = n - \\dim \\operatorname{Nul} A = 9 - 3 = 6$. Since $6 < 7$ (the number of rows), $\\operatorname{Col} A$ is a 6-dimensional subspace of $\\mathbb{R}^7$, so some systems $A\\mathbf{x} = \\mathbf{b}$ are inconsistent. And $\\operatorname{Row} A$ is a 6-dimensional subspace of $\\mathbb{R}^9$.',
    },
    {
      kind: 'truefalse',
      prompt: 'There is a $6 \\times 9$ matrix whose null space has dimension $2$.',
      answer: false,
      explanation: 'Rank–Nullity would give $\\operatorname{rank} A = 9 - 2 = 7$. But the rank is at most the number of rows, $6$ (there cannot be more than one pivot per row). So the null space of a $6 \\times 9$ matrix has dimension at least $9 - 6 = 3$: a wide matrix always crushes at least $n - m$ dimensions.',
    },
    {
      kind: 'error',
      prompt: 'Tap the first wrong line.',
      lines: [
        '$A$ is $5 \\times 8$, so $A\\mathbf{x} = \\mathbf{0}$ has $8$ unknowns.',
        'An echelon form of $A$ has $3$ pivots, so $\\operatorname{rank} A = 3$.',
        'By Rank–Nullity, $\\dim \\operatorname{Nul} A = 5 - 3 = 2$.',
        'So $\\operatorname{Nul} A$ is a 2-dimensional subspace of $\\mathbb{R}^8$.',
      ],
      errorLines: [3],
      explanation: 'Line 3 subtracts from the number of **rows**. Rank–Nullity counts columns: $\\dim \\operatorname{Nul} A = n - \\operatorname{rank} A = 8 - 3 = 5$. That matches the free-variable count: $8$ unknowns, $3$ of them basic, $5$ free. The correct conclusion is that $\\operatorname{Nul} A$ is a 5-dimensional subspace of $\\mathbb{R}^8$. (The number $5 - 3 = 2$ does mean something: it is $\\dim \\operatorname{Nul} A^{T}$.)',
    },
    {
      kind: 'concept',
      title: 'Rank and the Invertible Matrix Theorem',
      blocks: [
        {
          type: 'p',
          text: 'For a square $n \\times n$ matrix, Rank–Nullity reads $\\operatorname{rank} A + \\dim \\operatorname{Nul} A = n$. So "full column space" and "trivial null space" are the same condition seen from two sides, which is the deep reason the [[invertible-matrix-theorem|Invertible Matrix Theorem]] works. We can now add these statements to it.',
        },
        {
          type: 'theorem',
          name: 'Invertible Matrix Theorem (continued)',
          text: 'For an $n \\times n$ matrix $A$, the following are equivalent to "$A$ is invertible" and to all earlier IMT statements (such as $\\det A \\ne 0$):\n\n- The columns of $A$ form a basis of $\\mathbb{R}^n$.\n- $\\operatorname{Col} A = \\mathbb{R}^n$.\n- $\\operatorname{rank} A = n$.\n- $\\operatorname{Nul} A = \\{\\mathbf{0}\\}$.\n- $\\dim \\operatorname{Nul} A = 0$.\n- $\\operatorname{Row} A = \\mathbb{R}^n$.',
        },
        {
          type: 'derivation',
          title: 'Why $\\operatorname{rank} A = n$ forces invertibility',
          steps: [
            { tex: '\\operatorname{rank} A = n \\implies \\dim \\operatorname{Nul} A = n - n = 0', why: 'Rank–Nullity.' },
            { tex: '\\implies \\operatorname{Nul} A = \\{\\mathbf{0}\\}', why: 'The only 0-dimensional subspace is $\\{\\mathbf{0}\\}$: $A\\mathbf{x} = \\mathbf{0}$ has only the trivial solution, so $\\mathbf{x} \\mapsto A\\mathbf{x}$ is [[one-to-one]].' },
            { tex: '\\operatorname{Col} A \\text{ is } n\\text{-dimensional in } \\mathbb{R}^n \\implies \\operatorname{Col} A = \\mathbb{R}^n', why: 'Basis Theorem: $n$ independent columns in $\\mathbb{R}^n$ span it, so the map is also [[onto]].' },
            { tex: '\\implies A \\text{ is invertible}', why: 'One-to-one and onto: each $\\mathbf{b}$ has exactly one preimage, which is what invertibility means.' },
          ],
          result: 'For square matrices, rank $n$, nullity $0$, and invertibility are one and the same.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Rank deficiency in an engine',
          text: 'A transform matrix whose rank drops below 3 has squashed space onto a plane or line: a scale of $0$ on some axis, or a camera basis built from parallel vectors (the classic `lookAt` bug when the view direction is parallel to the world up vector). Such a matrix has no inverse, so anything that needs one breaks: normal matrices, picking rays, world-to-local conversions. Engines guard against it by checking $|\\det| > \\varepsilon$ before inverting.',
        },
      ],
    },
    {
      kind: 'mcq',
      prompt: 'A $5 \\times 5$ matrix $A$ has rank $4$. Which statement must be true?',
      options: [
        {
          text: '$A\\mathbf{x} = \\mathbf{0}$ has nontrivial solutions',
          correct: true,
          why: '$\\dim \\operatorname{Nul} A = 5 - 4 = 1$, so the null space is a line of solutions.',
        },
        {
          text: '$A$ is invertible',
          why: 'Invertibility needs rank $5$. With rank $4$, $\\det A = 0$.',
        },
        {
          text: '$A\\mathbf{x} = \\mathbf{b}$ is consistent for every $\\mathbf{b}$ in $\\mathbb{R}^5$',
          why: '$\\operatorname{Col} A$ is only 4-dimensional, a proper subspace of $\\mathbb{R}^5$, so some $\\mathbf{b}$ are unreachable.',
        },
        {
          text: 'The rows of $A$ are linearly independent',
          why: '$\\dim \\operatorname{Row} A = \\operatorname{rank} A = 4$, so the five rows span only a 4-dimensional space and must be dependent.',
        },
      ],
      explanation: 'Rank $4 < 5$ means one dimension is crushed: nullity $1$. By the Invertible Matrix Theorem every one of its statements fails together: not invertible, columns dependent, rows dependent, not onto, not one-to-one, $\\det A = 0$.',
    },
    {
      kind: 'concept',
      title: 'Low rank in practice: outer products and compression',
      blocks: [
        {
          type: 'p',
          text: 'The simplest nonzero matrices have rank $1$. For column vectors $\\mathbf{u} \\in \\mathbb{R}^m$ and $\\mathbf{v} \\in \\mathbb{R}^n$, the **outer product** $\\mathbf{u}\\mathbf{v}^{T}$ is the $m \\times n$ matrix with entries $u_i v_j$.',
        },
        {
          type: 'derivation',
          title: 'An outer product and its rank',
          steps: [
            { tex: '\\begin{bmatrix} 1 \\\\ 2 \\\\ 3 \\end{bmatrix} \\begin{bmatrix} 4 & 5 \\end{bmatrix} = \\begin{bmatrix} 4 & 5 \\\\ 8 & 10 \\\\ 12 & 15 \\end{bmatrix}', why: 'A $3 \\times 1$ times a $1 \\times 2$ matrix is $3 \\times 2$; entry $(i, j)$ is $u_i v_j$.' },
            { tex: '\\text{column } j = v_j\\,\\mathbf{u}: \\quad \\begin{bmatrix} 4 \\\\ 8 \\\\ 12 \\end{bmatrix} = 4\\mathbf{u}, \\ \\begin{bmatrix} 5 \\\\ 10 \\\\ 15 \\end{bmatrix} = 5\\mathbf{u}', why: 'Every column is a multiple of $\\mathbf{u}$, so $\\operatorname{Col}(\\mathbf{u}\\mathbf{v}^{T}) = \\operatorname{Span}\\{\\mathbf{u}\\}$.' },
            { tex: '\\operatorname{rank}(\\mathbf{u}\\mathbf{v}^{T}) = 1', why: 'For nonzero $\\mathbf{u}$ and $\\mathbf{v}$. Likewise every row is a multiple of $\\mathbf{v}^{T}$.' },
          ],
          result: 'Conversely, every rank-1 matrix is an outer product: its columns are all multiples $v_j\\mathbf{u}$ of one vector $\\mathbf{u}$ spanning the column space.',
        },
        {
          type: 'p',
          text: 'Storage tells the story. An $m \\times n$ matrix has $mn$ entries, but a rank-1 matrix is determined by $m + n$ numbers. A rank-$k$ matrix can be written as a sum of $k$ outer products, so it needs only $k(m + n)$ numbers. A $1000 \\times 1000$ image that is well approximated by rank $50$ needs $50 \\cdot 2000 = 100\\,000$ numbers instead of $1\\,000\\,000$. In the last unit you will meet the singular value decomposition, which finds the **best** rank-$k$ approximation of any matrix.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Separable blur: rank 1 on the GPU',
          text: 'The $3 \\times 3$ blur kernel $\\begin{bmatrix} 1 & 2 & 1 \\\\ 2 & 4 & 2 \\\\ 1 & 2 & 1 \\end{bmatrix}$ is the outer product of $(1, 2, 1)$ with itself, so it has rank 1. Filtering with it equals a horizontal pass with $(1, 2, 1)$ followed by a vertical pass. For a $k \\times k$ kernel that is $2k$ multiplies per pixel instead of $k^2$: $30$ instead of $225$ for $k = 15$. This is why bloom and depth-of-field shaders blur in two passes. (Gaussian kernels are rank 1 because $e^{-(x^2 + y^2)} = e^{-x^2}e^{-y^2}$.)',
        },
        {
          type: 'code',
          title: 'separable.cpp',
          runnable: true,
          code: `#include <cstdio>

int main() {
    int img[5][5];
    for (int i = 0; i < 5; ++i)
        for (int j = 0; j < 5; ++j) img[i][j] = (3 * i + j * j) % 7;

    const int k[3] = {1, 2, 1};                 // 1D kernel
    int K[3][3];                                // K = k k^T (rank 1)
    for (int i = 0; i < 3; ++i)
        for (int j = 0; j < 3; ++j) K[i][j] = k[i] * k[j];

    // Direct 2D filter: 9 multiplies per output pixel.
    int direct[3][3] = {};
    for (int r = 1; r <= 3; ++r)
        for (int c = 1; c <= 3; ++c)
            for (int i = -1; i <= 1; ++i)
                for (int j = -1; j <= 1; ++j)
                    direct[r - 1][c - 1] += K[i + 1][j + 1] * img[r + i][c + j];

    // Separable: horizontal pass, then vertical pass (3 + 3 multiplies).
    int h[5][3] = {};
    for (int r = 0; r < 5; ++r)
        for (int c = 1; c <= 3; ++c)
            for (int j = -1; j <= 1; ++j) h[r][c - 1] += k[j + 1] * img[r][c + j];
    int sep[3][3] = {};
    for (int r = 1; r <= 3; ++r)
        for (int c = 0; c < 3; ++c)
            for (int i = -1; i <= 1; ++i) sep[r - 1][c] += k[i + 1] * h[r + i][c];

    for (int r = 0; r < 3; ++r)
        std::printf("direct: %3d %3d %3d   separable: %3d %3d %3d\\n",
                    direct[r][0], direct[r][1], direct[r][2],
                    sep[r][0], sep[r][1], sep[r][2]);
}`,
          output: `direct:  37  36  46   separable:  37  36  46
direct:  43  42  45   separable:  43  42  45
direct:  56  55  44   separable:  56  55  44`,
          annotations: [
            { lines: '9-11', text: 'Build the $3 \\times 3$ kernel as the outer product $\\mathbf{k}\\mathbf{k}^{T}$.' },
            { lines: '14-19', text: 'Direct filtering of the interior $3 \\times 3$ pixels: 9 multiplies each.' },
            { lines: '22-29', text: 'Two 1D passes. Because $K_{ij} = k_i k_j$, the double sum factors into two single sums.' },
          ],
        },
        {
          type: 'callout',
          variant: 'note',
          text: 'Low rank shows up all over computing: recommender systems model a huge user-by-item rating matrix as low rank, and the LoRA technique fine-tunes a large neural network by learning only a low-rank update $BA$ to each weight matrix instead of the full matrix.',
        },
      ],
    },
    {
      kind: 'fill',
      prompt: 'Let $\\mathbf{u} = \\begin{bmatrix} 2 \\\\ -1 \\end{bmatrix}$ and $\\mathbf{v} = \\begin{bmatrix} 3 \\\\ 1 \\\\ 4 \\end{bmatrix}$. Enter the **second row** of the $2 \\times 3$ outer product $\\mathbf{u}\\mathbf{v}^{T}$.',
      template: 'Second row of $\\mathbf{u}\\mathbf{v}^{T}$: $[$ ___ $,$ ___ $,$ ___ $]$',
      blanks: [{ answers: ['-3'] }, { answers: ['-1'] }, { answers: ['-4'] }],
      hint: 'Entry $(i, j)$ is $u_i v_j$, so row $2$ is $u_2$ times $\\mathbf{v}^{T}$.',
      explanation: 'Row 2 is $u_2\\mathbf{v}^{T} = -1 \\cdot (3, 1, 4) = (-3, -1, -4)$. The full matrix is $\\begin{bmatrix} 6 & 2 & 8 \\\\ -3 & -1 & -4 \\end{bmatrix}$: both rows are multiples of $\\mathbf{v}^{T}$ and all three columns are multiples of $\\mathbf{u}$, so the rank is $1$. Six entries, but only $2 + 3 = 5$ numbers of information (and really $4$, since $\\mathbf{u}$ and $\\mathbf{v}$ can trade a scale factor).',
    },
    {
      kind: 'numeric',
      prompt: 'A $200 \\times 300$ grayscale image is approximated by a matrix of rank $10$, stored as a sum of $10$ outer products $\\mathbf{u}_i\\mathbf{v}_i^{T}$. How many numbers must be stored?',
      answer: '5000',
      unit: 'numbers',
      hint: 'Each outer product needs one $\\mathbf{u}_i \\in \\mathbb{R}^{200}$ and one $\\mathbf{v}_i \\in \\mathbb{R}^{300}$.',
      explanation: 'Each term needs $200 + 300 = 500$ numbers, so $10$ terms need $10 \\cdot 500 = 5000$. The full image has $200 \\cdot 300 = 60\\,000$ pixels, so the rank-10 version uses about $8\\%$ of the storage. Whether it *looks* good depends on how close the image is to low rank; the SVD answers that optimally.',
    },
  ],
  takeaways: [
    '$\\operatorname{Row} A$ is spanned by the rows; row operations preserve it, so the nonzero rows of an echelon form are a basis.',
    '$\\operatorname{rank} A = \\dim \\operatorname{Col} A = \\dim \\operatorname{Row} A$ = number of pivots, hence $\\operatorname{rank} A^{T} = \\operatorname{rank} A$ and $\\operatorname{rank} A \\le \\min(m, n)$.',
    'Rank–Nullity: $\\operatorname{rank} A + \\dim \\operatorname{Nul} A = n$ (columns), because every column is either a pivot column or a free variable.',
    'For $n \\times n$ matrices: invertible $\\iff \\operatorname{rank} A = n \\iff \\operatorname{Nul} A = \\{\\mathbf{0}\\} \\iff$ the columns form a basis of $\\mathbb{R}^n$.',
    'A rank-1 matrix is an outer product $\\mathbf{u}\\mathbf{v}^{T}$; rank $k$ means $k(m + n)$ numbers suffice, the idea behind separable filters and low-rank compression.',
  ],
  reading: [
    {
      title: 'MIT OCW 18.06 — The four fundamental subspaces (Strang)',
      url: 'https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/',
      source: 'other',
      note: 'Lecture 10 places the row space, column space, null space and left null space in one picture, with their dimensions $r$, $r$, $n - r$, $m - r$.',
    },
    {
      title: 'Interactive Linear Algebra — The Rank Theorem',
      url: 'https://textbooks.math.gatech.edu/ila/',
      source: 'book',
      note: 'Look for the Rank Theorem section, which proves Rank–Nullity by counting pivots and free variables and connects it to the IMT.',
    },
    {
      title: 'Wikipedia — Rank–nullity theorem',
      url: 'https://en.wikipedia.org/wiki/Rank%E2%80%93nullity_theorem',
      source: 'wikipedia',
      note: 'Statements for matrices and abstract linear maps, with several proofs.',
    },
    {
      title: 'Wikipedia — Separable filter',
      url: 'https://en.wikipedia.org/wiki/Separable_filter',
      source: 'wikipedia',
      note: 'How rank-1 kernels let image filters run as two cheap 1D passes, with the Gaussian blur as the main example.',
    },
  ],
};
