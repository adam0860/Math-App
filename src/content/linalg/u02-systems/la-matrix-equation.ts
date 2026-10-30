import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'la-matrix-equation',
  title: 'The Matrix Equation Ax = b',
  summary: 'Define the matrix–vector product as a combination of columns, compute it fast with the row–column rule, and learn exactly when $A\\mathbf{x} = \\mathbf{b}$ can be solved for every $\\mathbf{b}$.',
  minutes: 17,
  objectives: [
    'Compute $A\\mathbf{x}$ both as a linear combination of the columns of $A$ and with the row–column rule',
    'Translate between a matrix equation, a vector equation and an augmented matrix',
    'Prove and use the linearity properties $A(\\mathbf{u} + \\mathbf{v}) = A\\mathbf{u} + A\\mathbf{v}$ and $A(c\\mathbf{u}) = cA\\mathbf{u}$',
    'Decide whether the columns of $A$ span $\\mathbb{R}^m$ by checking for a pivot in every row',
    'Explain why linearity lets a GPU transform a mesh by transforming only its vertices',
  ],
  steps: [
    // ------------------------------------------------------------------ 0
    {
      kind: 'concept',
      title: '$A\\mathbf{x}$ is a combination of the columns of $A$',
      blocks: [
        {
          type: 'p',
          text: 'In the vectors unit you formed [[linear-combination|linear combinations]] $c_1\\mathbf{v}_1 + \\cdots + c_n\\mathbf{v}_n$. Stack the vectors side by side as the columns of a matrix and put the weights in a vector: the combination becomes a *product* of the matrix and the vector. This single definition powers the rest of the course.',
        },
        {
          type: 'definition',
          term: 'Matrix–vector product',
          text: 'If $A$ is an $m \\times n$ matrix with columns $\\mathbf{a}_1, \\dots, \\mathbf{a}_n$ and $\\mathbf{x}$ is in $\\mathbb{R}^n$, the [[matrix-vector-product]] $A\\mathbf{x}$ is the linear combination of the columns of $A$ using the entries of $\\mathbf{x}$ as weights:\n\n$$A\\mathbf{x} = \\begin{bmatrix} \\mathbf{a}_1 & \\mathbf{a}_2 & \\cdots & \\mathbf{a}_n \\end{bmatrix} \\begin{bmatrix} x_1 \\\\ \\vdots \\\\ x_n \\end{bmatrix} = x_1\\mathbf{a}_1 + x_2\\mathbf{a}_2 + \\cdots + x_n\\mathbf{a}_n.$$\n\n$A\\mathbf{x}$ is defined only when the number of **columns** of $A$ equals the number of entries of $\\mathbf{x}$. The result lies in $\\mathbb{R}^m$.',
        },
        {
          type: 'derivation',
          title: 'Compute $\\begin{bmatrix} 1 & 2 & -1 \\\\ 0 & -5 & 3 \\end{bmatrix}\\begin{bmatrix} 4 \\\\ 3 \\\\ 7 \\end{bmatrix}$',
          steps: [
            { tex: '= 4\\begin{bmatrix} 1 \\\\ 0 \\end{bmatrix} + 3\\begin{bmatrix} 2 \\\\ -5 \\end{bmatrix} + 7\\begin{bmatrix} -1 \\\\ 3 \\end{bmatrix}', why: 'A $2 \\times 3$ matrix times a vector in $\\mathbb{R}^3$: three columns, three weights. Weight $x_j$ multiplies column $j$.' },
            { tex: '= \\begin{bmatrix} 4 \\\\ 0 \\end{bmatrix} + \\begin{bmatrix} 6 \\\\ -15 \\end{bmatrix} + \\begin{bmatrix} -7 \\\\ 21 \\end{bmatrix}', why: 'Scalar multiplication: multiply each entry of a column by its weight.' },
            { tex: '= \\begin{bmatrix} 3 \\\\ 6 \\end{bmatrix}', why: 'Vector addition, entry by entry: $4 + 6 - 7 = 3$ and $0 - 15 + 21 = 6$.' },
          ],
          result: 'The product is a vector in $\\mathbb{R}^2$ — as many entries as $A$ has **rows** — even though $\\mathbf{x}$ was in $\\mathbb{R}^3$.',
        },
        {
          type: 'p',
          text: 'Below, $A$ has columns $\\mathbf{a}_1 = (2, 1)$ and $\\mathbf{a}_2 = (-1, 2)$ (as column vectors). The sliders are the entries of $\\mathbf{x}$. The green arrow $A\\mathbf{x}$ is built by walking $x_1$ copies of $\\mathbf{a}_1$, then $x_2$ copies of $\\mathbf{a}_2$.',
        },
        {
          type: 'graph',
          x: [-6, 6],
          y: [-5, 6],
          equal: true,
          segments: [
            { from: [0, 0], to: [2, 1], arrow: true, color: 'gray', dashed: true, label: 'a1' },
            { from: [0, 0], to: [-1, 2], arrow: true, color: 'gray', dashed: true, label: 'a2' },
            { from: [0, 0], to: ['2a', 'a'], arrow: true, color: 'blue', label: 'x1·a1' },
            { from: ['2a', 'a'], to: ['2a - b', 'a + 2b'], arrow: true, color: 'red', label: 'x2·a2' },
            { from: [0, 0], to: ['2a - b', 'a + 2b'], arrow: true, color: 'green', label: 'Ax' },
          ],
          sliders: [
            { name: 'a', min: -2, max: 2, step: 0.1, value: 1, label: '$x_1$' },
            { name: 'b', min: -2, max: 2, step: 0.1, value: 1.5, label: '$x_2$' },
          ],
          readouts: [
            { label: 'first entry of $A\\mathbf{x}$: $2x_1 - x_2 =$', expr: '2a - b', digits: 2 },
            { label: 'second entry of $A\\mathbf{x}$: $x_1 + 2x_2 =$', expr: 'a + 2b', digits: 2 },
          ],
          caption: 'Challenge: find $\\mathbf{x}$ with $A\\mathbf{x} = (3, 4)$. You are solving the system $2x_1 - x_2 = 3$, $\\;x_1 + 2x_2 = 4$ by hand-eye coordination. (Answer: $x_1 = 2$, $x_2 = 1$.)',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why define the product this way',
          text: 'Because it is exactly what a linear system computes. The left side of the system $2x_1 - x_2 = 3$, $\\;x_1 + 2x_2 = 4$ is the vector $x_1(2, 1) + x_2(-1, 2)$: each unknown multiplies the column of its coefficients. Defining $A\\mathbf{x}$ as that combination lets us write any system, of any size, as the single equation $A\\mathbf{x} = \\mathbf{b}$ — and it turns $A$ into a machine that eats vectors in $\\mathbb{R}^n$ and outputs vectors in $\\mathbb{R}^m$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 1
    {
      kind: 'fill',
      prompt: 'Compute $A\\mathbf{x}$ as a linear combination of the columns of $A$.',
      tex: 'A = \\begin{bmatrix} 1 & 4 \\\\ -2 & 0 \\\\ 3 & -1 \\end{bmatrix}, \\qquad \\mathbf{x} = \\begin{bmatrix} 2 \\\\ -1 \\end{bmatrix}',
      template: '$A\\mathbf{x} = ($ ___ $,$ ___ $,$ ___ $)$, written here as a row to save space.',
      blanks: [{ answers: ['-2'] }, { answers: ['-4'] }, { answers: ['7'] }],
      hint: '$A\\mathbf{x} = 2\\,\\mathbf{a}_1 + (-1)\\,\\mathbf{a}_2$ with $\\mathbf{a}_1 = (1, -2, 3)$ and $\\mathbf{a}_2 = (4, 0, -1)$.',
      explanation: '$2(1, -2, 3) + (-1)(4, 0, -1) = (2, -4, 6) + (-4, 0, 1) = (-2, -4, 7)$. $A$ is $3 \\times 2$, so it takes a vector in $\\mathbb{R}^2$ (two weights, one per column) and returns a vector in $\\mathbb{R}^3$ (one entry per row).',
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'concept',
      title: 'The row–column rule',
      blocks: [
        {
          type: 'p',
          text: 'The column definition is the right way to *think* about $A\\mathbf{x}$. For computing a single entry, there is a faster route: look at what lands in row $i$. Each column contributes its $i$-th entry times its weight, so entry $i$ of $A\\mathbf{x}$ is $a_{i1}x_1 + a_{i2}x_2 + \\cdots + a_{in}x_n$ — the [[dot-product]] of row $i$ of $A$ with $\\mathbf{x}$.',
        },
        {
          type: 'theorem',
          name: 'Row–column rule',
          tex: '(A\\mathbf{x})_i = \\sum_{j=1}^{n} a_{ij}\\,x_j = (\\text{row } i \\text{ of } A) \\cdot \\mathbf{x}',
          text: 'If $A\\mathbf{x}$ is defined, its $i$-th entry is the sum of the products of corresponding entries from row $i$ of $A$ and from $\\mathbf{x}$.',
        },
        {
          type: 'derivation',
          title: 'The same product, row by row',
          steps: [
            { tex: '(A\\mathbf{x})_1 = (1)(4) + (2)(3) + (-1)(7) = 3', why: 'Row 1 of $A$ is $(1, 2, -1)$; dot it with $\\mathbf{x} = (4, 3, 7)$.' },
            { tex: '(A\\mathbf{x})_2 = (0)(4) + (-5)(3) + (3)(7) = 6', why: 'Row 2 of $A$ is $(0, -5, 3)$.' },
            { tex: 'A\\mathbf{x} = \\begin{bmatrix} 3 \\\\ 6 \\end{bmatrix}', why: 'Same answer as the column computation — it must be: the same six products are added, just grouped by row instead of by column.' },
          ],
          result: 'Use the row–column rule to compute; use the column picture to understand.',
        },
        {
          type: 'p',
          text: 'One special matrix deserves a name. The [[identity-matrix]] $I_n$ has $1$s on the diagonal and $0$s elsewhere; its columns are the standard basis vectors $\\mathbf{e}_1, \\dots, \\mathbf{e}_n$. Then $I_n\\mathbf{x} = x_1\\mathbf{e}_1 + \\cdots + x_n\\mathbf{e}_n = \\mathbf{x}$ for every $\\mathbf{x}$. More generally, $A\\mathbf{e}_j = \\mathbf{a}_j$: multiplying by $\\mathbf{e}_j$ picks out column $j$.',
        },
        {
          type: 'code',
          title: 'matvec.cpp',
          runnable: true,
          code: `#include <cstdio>

constexpr int M = 2, N = 3;

// Row view: entry i is (row i of A) . x
void mulRows(const double A[M][N], const double x[N], double y[M]) {
    for (int i = 0; i < M; ++i) {
        y[i] = 0.0;
        for (int j = 0; j < N; ++j) y[i] += A[i][j] * x[j];
    }
}

// Column view: y = x1*a1 + x2*a2 + ... + xn*an
void mulCols(const double A[M][N], const double x[N], double y[M]) {
    for (int i = 0; i < M; ++i) y[i] = 0.0;
    for (int j = 0; j < N; ++j)
        for (int i = 0; i < M; ++i) y[i] += x[j] * A[i][j];
}

int main() {
    const double A[M][N] = {{1, 2, -1}, {0, -5, 3}};
    const double x[N] = {4, 3, 7};
    double r[M], c[M];
    mulRows(A, x, r);
    mulCols(A, x, c);
    std::printf("rows:    (%g, %g)\\n", r[0], r[1]);
    std::printf("columns: (%g, %g)\\n", c[0], c[1]);
}`,
          output: `rows:    (3, 6)
columns: (3, 6)`,
          annotations: [
            { lines: 9, text: 'Inner loop over $j$: a dot product of row $i$ with $\\mathbf{x}$.' },
            { lines: '16-17', text: 'Outer loop over columns: add $x_j$ times column $j$ into the running total (an "axpy" — $a\\mathbf{x} + \\mathbf{y}$).' },
            { lines: 22, text: 'C arrays are row-major: `A[i]` is row $i$, stored contiguously.' },
          ],
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Same math, different speed',
          text: 'Both functions do $mn$ multiply-adds. Which is faster depends on memory layout: with row-major storage the row version walks memory in order, while the column version is the natural choice for column-major libraries (Eigen, GLSL, Fortran\'s LAPACK). SIMD instructions and GPUs exploit either form — the four rows of a $4 \\times 4$ matrix can be dotted with a vector in parallel.',
        },
      ],
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'numeric',
      prompt: 'Use the row–column rule to find the **third** entry of $A\\mathbf{x}$.',
      tex: 'A = \\begin{bmatrix} 2 & -1 & 3 \\\\ 0 & 4 & 1 \\\\ -3 & 2 & 5 \\end{bmatrix}, \\qquad \\mathbf{x} = \\begin{bmatrix} 1 \\\\ 2 \\\\ -1 \\end{bmatrix}',
      hint: 'Dot row 3, $(-3, 2, 5)$, with $\\mathbf{x}$.',
      label: '$(A\\mathbf{x})_3 =$',
      answer: '-4',
      explanation: '$(-3)(1) + (2)(2) + (5)(-1) = -3 + 4 - 5 = -4$. You never needed rows 1 and 2 — that is the advantage of the row–column rule. (For the record, $A\\mathbf{x} = (-3, 7, -4)$.)',
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'error',
      prompt: 'A student computes $A\\mathbf{x}$ for $A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}$ and $\\mathbf{x} = \\begin{bmatrix} 5 \\\\ 6 \\end{bmatrix}$. Tap the first line that is wrong.',
      lines: [
        '$A\\mathbf{x} = x_1\\mathbf{a}_1 + x_2\\mathbf{a}_2$',
        '$= 5\\begin{bmatrix} 1 \\\\ 2 \\end{bmatrix} + 6\\begin{bmatrix} 3 \\\\ 4 \\end{bmatrix}$',
        '$= \\begin{bmatrix} 5 + 18 \\\\ 10 + 24 \\end{bmatrix}$',
        '$= \\begin{bmatrix} 23 \\\\ 34 \\end{bmatrix}$',
      ],
      errorLines: [2],
      explanation: 'Line 2 uses the **rows** $(1, 2)$ and $(3, 4)$ as if they were columns. The columns of $A$ are $\\mathbf{a}_1 = (1, 3)$ and $\\mathbf{a}_2 = (2, 4)$, so $A\\mathbf{x} = 5(1, 3) + 6(2, 4) = (5 + 12,\\ 15 + 24) = (17, 39)$. The row–column rule confirms it: $(1, 2) \\cdot (5, 6) = 17$ and $(3, 4) \\cdot (5, 6) = 39$. Mixing up rows and columns computes $A^{T}\\mathbf{x}$ instead — the same bug as reading a row-major matrix as column-major.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Three ways to write the same system',
      blocks: [
        {
          type: 'p',
          text: 'We now have three notations for one linear system, and you should be able to jump between them without thinking.',
        },
        {
          type: 'theorem',
          name: 'Three equivalent views',
          text: 'If $A$ is an $m \\times n$ matrix with columns $\\mathbf{a}_1, \\dots, \\mathbf{a}_n$ and $\\mathbf{b}$ is in $\\mathbb{R}^m$, then the **matrix equation** $A\\mathbf{x} = \\mathbf{b}$, the **vector equation** $x_1\\mathbf{a}_1 + \\cdots + x_n\\mathbf{a}_n = \\mathbf{b}$, and the **linear system** with augmented matrix $[\\,\\mathbf{a}_1 \\;\\cdots\\; \\mathbf{a}_n \\;\\; \\mathbf{b}\\,]$ all have the same solution set.',
        },
        {
          type: 'p',
          text: 'The first two are equal by the definition of $A\\mathbf{x}$; the vector equation and the system are the same thing written entry by entry. The payoff is a key fact: $A\\mathbf{x} = \\mathbf{b}$ **has a solution if and only if $\\mathbf{b}$ is a linear combination of the columns of $A$**, that is, $\\mathbf{b} \\in \\operatorname{Span}\\{\\mathbf{a}_1, \\dots, \\mathbf{a}_n\\}$.',
        },
        {
          type: 'derivation',
          title: 'Is $\\mathbf{b} = (4, 1, 7)$ in $\\operatorname{Span}\\{\\mathbf{a}_1, \\mathbf{a}_2\\}$ with $\\mathbf{a}_1 = (1, 0, 2)$, $\\mathbf{a}_2 = (2, 1, 3)$?',
          steps: [
            { tex: 'x_1\\begin{bmatrix} 1 \\\\ 0 \\\\ 2 \\end{bmatrix} + x_2\\begin{bmatrix} 2 \\\\ 1 \\\\ 3 \\end{bmatrix} = \\begin{bmatrix} 4 \\\\ 1 \\\\ 7 \\end{bmatrix}', why: 'A span question is a vector equation: are there weights that build $\\mathbf{b}$ from the columns?' },
            { tex: '\\left[\\begin{array}{cc|c} 1 & 2 & 4 \\\\ 0 & 1 & 1 \\\\ 2 & 3 & 7 \\end{array}\\right] \\xrightarrow{R_3 - 2R_1} \\left[\\begin{array}{cc|c} 1 & 2 & 4 \\\\ 0 & 1 & 1 \\\\ 0 & -1 & -1 \\end{array}\\right]', why: 'Switch to the augmented-matrix view: the vectors become columns, $\\mathbf{b}$ goes after the bar. Clear column 1.' },
            { tex: '\\xrightarrow{R_3 + R_2} \\left[\\begin{array}{cc|c} 1 & 2 & 4 \\\\ 0 & 1 & 1 \\\\ 0 & 0 & 0 \\end{array}\\right] \\xrightarrow{R_1 - 2R_2} \\left[\\begin{array}{cc|c} 1 & 0 & 2 \\\\ 0 & 1 & 1 \\\\ 0 & 0 & 0 \\end{array}\\right]', why: 'The last column is not a pivot column, so the system is consistent. Finish the backward phase to find the weights.' },
            { tex: '2\\mathbf{a}_1 + 1\\mathbf{a}_2 = (2 + 2,\\; 0 + 1,\\; 4 + 3) = (4, 1, 7) \\;\\checkmark', why: 'Read off $x_1 = 2$, $x_2 = 1$ and check in the vector view.' },
          ],
          result: 'Yes: $\\mathbf{b} = 2\\mathbf{a}_1 + \\mathbf{a}_2$. In matrix language, $\\mathbf{x} = (2, 1)$ solves $A\\mathbf{x} = \\mathbf{b}$ for $A = [\\,\\mathbf{a}_1 \\;\\; \\mathbf{a}_2\\,]$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why three views are better than one',
          text: 'Each view is good at something different. The **augmented matrix** is for computing — row reduction. The **vector equation** is for geometry — can these arrows reach $\\mathbf{b}$? The **matrix equation** is for algebra — $A$ is an object you can multiply, invert and compose, and $A\\mathbf{x} = \\mathbf{b}$ looks like $ax = b$. Most theorems in linear algebra are proved by translating a question from one view into another.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'mcq',
      prompt: 'Which **vector equation** has the same solution set as the system with augmented matrix below?',
      tex: '\\left[\\begin{array}{cc|c} 1 & 3 & 5 \\\\ 2 & -1 & 4 \\end{array}\\right]',
      options: [
        {
          text: '$x_1\\begin{bmatrix} 1 \\\\ 3 \\end{bmatrix} + x_2\\begin{bmatrix} 2 \\\\ -1 \\end{bmatrix} = \\begin{bmatrix} 5 \\\\ 4 \\end{bmatrix}$',
          why: 'These vectors are the **rows** of the coefficient matrix. The weights must multiply the columns.',
        },
        {
          text: '$x_1\\begin{bmatrix} 1 \\\\ 2 \\end{bmatrix} + x_2\\begin{bmatrix} 3 \\\\ -1 \\end{bmatrix} + x_3\\begin{bmatrix} 5 \\\\ 4 \\end{bmatrix} = \\mathbf{0}$',
          why: 'This treats the right-hand side as a third column with its own unknown — a homogeneous system in three unknowns, with a different solution set.',
        },
        {
          text: '$x_1\\begin{bmatrix} 1 \\\\ 2 \\end{bmatrix} + x_2\\begin{bmatrix} 3 \\\\ -1 \\end{bmatrix} = \\begin{bmatrix} 5 \\\\ 4 \\end{bmatrix}$',
          correct: true,
          why: 'Column $j$ of the coefficient matrix is weighted by $x_j$, and the last column is the target $\\mathbf{b}$.',
        },
        {
          text: '$\\begin{bmatrix} 1 & 2 \\\\ 3 & -1 \\end{bmatrix}\\mathbf{x} = \\begin{bmatrix} 5 \\\\ 4 \\end{bmatrix}$',
          why: 'This is a matrix equation, and with the transposed matrix: its first row says $x_1 + 2x_2 = 5$ instead of $x_1 + 3x_2 = 5$.',
        },
      ],
      explanation: 'The system is $x_1 + 3x_2 = 5$, $\\;2x_1 - x_2 = 4$. Reading down the columns: $x_1$ contributes $(1, 2)$ and $x_2$ contributes $(3, -1)$, so the vector equation is $x_1(1, 2) + x_2(3, -1) = (5, 4)$. Its solution is $x_1 = 17/7$, $x_2 = 6/7$, and it is the same in all three views.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'Linearity, and why GPUs love it',
      blocks: [
        {
          type: 'theorem',
          name: 'Properties of the matrix–vector product',
          tex: 'A(\\mathbf{u} + \\mathbf{v}) = A\\mathbf{u} + A\\mathbf{v}, \\qquad A(c\\,\\mathbf{u}) = c\\,(A\\mathbf{u})',
          text: 'for every $m \\times n$ matrix $A$, all vectors $\\mathbf{u}, \\mathbf{v}$ in $\\mathbb{R}^n$, and every scalar $c$.',
        },
        {
          type: 'derivation',
          title: 'Proof of $A(\\mathbf{u} + \\mathbf{v}) = A\\mathbf{u} + A\\mathbf{v}$',
          steps: [
            { tex: 'A(\\mathbf{u} + \\mathbf{v}) = (u_1 + v_1)\\mathbf{a}_1 + \\cdots + (u_n + v_n)\\mathbf{a}_n', why: 'Definition of $A\\mathbf{x}$ with $\\mathbf{x} = \\mathbf{u} + \\mathbf{v}$, whose entries are $u_j + v_j$.' },
            { tex: '= (u_1\\mathbf{a}_1 + v_1\\mathbf{a}_1) + \\cdots + (u_n\\mathbf{a}_n + v_n\\mathbf{a}_n)', why: 'Scalar multiplication distributes over addition of scalars: $(s + t)\\mathbf{a} = s\\mathbf{a} + t\\mathbf{a}$.' },
            { tex: '= (u_1\\mathbf{a}_1 + \\cdots + u_n\\mathbf{a}_n) + (v_1\\mathbf{a}_1 + \\cdots + v_n\\mathbf{a}_n)', why: 'Vector addition is commutative and associative, so the terms can be regrouped.' },
            { tex: '= A\\mathbf{u} + A\\mathbf{v}', why: 'Definition of $A\\mathbf{u}$ and $A\\mathbf{v}$ again.' },
          ],
          result: 'The proof of $A(c\\mathbf{u}) = cA\\mathbf{u}$ is the same idea: $(cu_1)\\mathbf{a}_1 + \\cdots + (cu_n)\\mathbf{a}_n = c(u_1\\mathbf{a}_1 + \\cdots + u_n\\mathbf{a}_n)$.',
        },
        {
          type: 'p',
          text: 'Together they say $A(c\\mathbf{u} + d\\mathbf{v}) = cA\\mathbf{u} + dA\\mathbf{v}$: **$A$ maps linear combinations to linear combinations with the same weights.** Two quick consequences: $A\\mathbf{0} = \\mathbf{0}$, and if $A\\mathbf{p} = \\mathbf{b}$ and $A\\mathbf{v}_h = \\mathbf{0}$ then $A(\\mathbf{p} + \\mathbf{v}_h) = \\mathbf{b}$ — the structure theorem from the last lesson in one line.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'A GPU transforms a mesh by transforming its corners',
          text: 'A character mesh may have a million vertices, and every frame each one is multiplied by the same model–view–projection matrix (a $4 \\times 4$ matrix acting on vectors in $\\mathbb{R}^4$ — unit 4 explains the extra coordinate). The vertex shader runs this product for thousands of vertices simultaneously: each product is independent, just $16$ multiply-adds. Linearity is why transforming only the **corners** is enough. A point on an edge is $(1 - t)\\mathbf{P} + t\\mathbf{Q}$, and $A\\big((1 - t)\\mathbf{P} + t\\mathbf{Q}\\big) = (1 - t)A\\mathbf{P} + tA\\mathbf{Q}$ — the same point on the transformed edge. So the rasteriser can fill in the transformed triangle by interpolating its transformed corners. (The final perspective divide is not linear, which is exactly why GPUs need perspective-correct interpolation.)',
        },
        {
          type: 'code',
          title: 'transform.cpp (sketch)',
          code: `struct Vec4 { float x, y, z, w; };
struct Mat4 { float m[4][4]; };          // row-major

Vec4 operator*(const Mat4& A, const Vec4& v) {
    return { A.m[0][0]*v.x + A.m[0][1]*v.y + A.m[0][2]*v.z + A.m[0][3]*v.w,
             A.m[1][0]*v.x + A.m[1][1]*v.y + A.m[1][2]*v.z + A.m[1][3]*v.w,
             A.m[2][0]*v.x + A.m[2][1]*v.y + A.m[2][2]*v.z + A.m[2][3]*v.w,
             A.m[3][0]*v.x + A.m[3][1]*v.y + A.m[3][2]*v.z + A.m[3][3]*v.w };
}

void transformMesh(const Mat4& mvp, const std::vector<Vec4>& in, std::vector<Vec4>& out) {
    for (std::size_t k = 0; k < in.size(); ++k)
        out[k] = mvp * in[k];            // a GPU runs these in parallel
}`,
          annotations: [
            { lines: '4-9', text: 'The row–column rule, unrolled: each output entry is a row of $A$ dotted with $\\mathbf{v}$.' },
            { lines: '11-14', text: 'The CPU version loops; on a GPU each iteration is a separate vertex-shader invocation, run thousands at a time.' },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'numeric',
      prompt: 'For some matrix $A$, $A\\mathbf{u} = \\begin{bmatrix} 1 \\\\ 3 \\end{bmatrix}$ and $A\\mathbf{v} = \\begin{bmatrix} -2 \\\\ 4 \\end{bmatrix}$. Find the **second** entry of $A(2\\mathbf{u} - 3\\mathbf{v})$.',
      hint: 'Linearity: $A(2\\mathbf{u} - 3\\mathbf{v}) = 2A\\mathbf{u} - 3A\\mathbf{v}$. You do not need $A$ itself.',
      label: 'second entry $=$',
      answer: '-6',
      explanation: '$A(2\\mathbf{u} - 3\\mathbf{v}) = 2A\\mathbf{u} - 3A\\mathbf{v} = 2(1, 3) - 3(-2, 4) = (2 + 6,\\ 6 - 12) = (8, -6)$. The second entry is $-6$. Knowing what $A$ does to a few vectors tells you what it does to every combination of them — the idea behind the "matrix of a transformation" in the next unit.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'expr',
      prompt: 'A $2 \\times 2$ matrix $A$ satisfies $A\\mathbf{e}_1 = \\begin{bmatrix} 3 \\\\ 2 \\end{bmatrix}$ and $A\\mathbf{e}_2 = \\begin{bmatrix} -1 \\\\ 5 \\end{bmatrix}$. Give the **second** entry of $A\\begin{bmatrix} t \\\\ 2 \\end{bmatrix}$ as an expression in $t$.',
      hint: '$(t, 2) = t\\,\\mathbf{e}_1 + 2\\,\\mathbf{e}_2$. Apply linearity — or notice that $A\\mathbf{e}_j$ is column $j$ of $A$.',
      label: 'second entry $=$',
      variables: ['t'],
      answer: '2t + 10',
      answerTex: '2t + 10',
      explanation: '$A\\mathbf{e}_1$ and $A\\mathbf{e}_2$ are the columns of $A$, so $A = \\left[\\begin{smallmatrix} 3 & -1 \\\\ 2 & 5 \\end{smallmatrix}\\right]$. Then $A(t, 2) = t(3, 2) + 2(-1, 5) = (3t - 2,\\ 2t + 10)$. The second entry is $2t + 10$. As $t$ varies, $A(t, 2)$ traces a line — the image of the line $x_2 = 2$.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'concept',
      title: 'When is $A\\mathbf{x} = \\mathbf{b}$ solvable for every $\\mathbf{b}$?',
      blocks: [
        {
          type: 'p',
          text: 'So far we asked whether one particular $\\mathbf{b}$ can be reached. A stronger question: can $A\\mathbf{x} = \\mathbf{b}$ be solved for **every** $\\mathbf{b}$ in $\\mathbb{R}^m$? Equivalently, do the columns of $A$ [[span]] all of $\\mathbb{R}^m$? Remarkably, a single row reduction of $A$ alone answers it.',
        },
        {
          type: 'theorem',
          name: 'Spanning theorem',
          text: 'Let $A$ be an $m \\times n$ matrix. The following statements are all true or all false:\n\n(a) For each $\\mathbf{b}$ in $\\mathbb{R}^m$, the equation $A\\mathbf{x} = \\mathbf{b}$ has a solution.\n\n(b) Each $\\mathbf{b}$ in $\\mathbb{R}^m$ is a linear combination of the columns of $A$.\n\n(c) The columns of $A$ span $\\mathbb{R}^m$.\n\n(d) $A$ has a pivot position in every **row**.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why (d) is equivalent to (a)',
          text: '(a), (b), (c) say the same thing in the three views. Now let $U$ be an echelon form of $A$; the row operations taking $A$ to $U$ take $[\\,A \\mid \\mathbf{b}\\,]$ to $[\\,U \\mid \\mathbf{d}\\,]$ for some $\\mathbf{d}$.\n\n**(d) ⇒ (a):** if every row of $U$ has a pivot, the last column of $[\\,U \\mid \\mathbf{d}\\,]$ cannot be a pivot column, whatever $\\mathbf{d}$ is. So every system is consistent.\n\n**Not (d) ⇒ not (a):** if $U$ has no pivot in its last row, that row is all zeros. Choose $\\mathbf{d}$ with last entry $1$: then $[\\,U \\mid \\mathbf{d}\\,]$ says $0 = 1$. Row operations are reversible, so undo them on $[\\,U \\mid \\mathbf{d}\\,]$: you get $[\\,A \\mid \\mathbf{b}\\,]$ for some $\\mathbf{b}$ — and that $A\\mathbf{x} = \\mathbf{b}$ is inconsistent.',
        },
        {
          type: 'derivation',
          title: 'Do the columns of $A = \\begin{bmatrix} 1 & 2 & 1 \\\\ 2 & 5 & 4 \\\\ 1 & 3 & 3 \\end{bmatrix}$ span $\\mathbb{R}^3$?',
          steps: [
            { tex: '\\left[\\begin{array}{ccc|c} 1 & 2 & 1 & b_1 \\\\ 2 & 5 & 4 & b_2 \\\\ 1 & 3 & 3 & b_3 \\end{array}\\right] \\xrightarrow[R_3 - R_1]{R_2 - 2R_1} \\left[\\begin{array}{ccc|c} 1 & 2 & 1 & b_1 \\\\ 0 & 1 & 2 & b_2 - 2b_1 \\\\ 0 & 1 & 2 & b_3 - b_1 \\end{array}\\right]', why: 'Row-reduce with a general $\\mathbf{b}$ so we can see exactly which right-hand sides work. The operations act on the $b$-column like on any other.' },
            { tex: '\\xrightarrow{R_3 - R_2} \\left[\\begin{array}{ccc|c} 1 & 2 & 1 & b_1 \\\\ 0 & 1 & 2 & b_2 - 2b_1 \\\\ 0 & 0 & 0 & b_1 - b_2 + b_3 \\end{array}\\right]', why: '$(b_3 - b_1) - (b_2 - 2b_1) = b_1 - b_2 + b_3$. The coefficient part has no pivot in row 3.' },
            { tex: 'A\\mathbf{x} = \\mathbf{b} \\text{ consistent} \\iff b_1 - b_2 + b_3 = 0', why: 'Row 3 says $0 = b_1 - b_2 + b_3$. For example $\\mathbf{b} = \\mathbf{e}_1 = (1, 0, 0)$ gives $0 = 1$: no solution.' },
          ],
          result: 'No: $A$ has only two pivots in three rows. The columns span just the **plane** $b_1 - b_2 + b_3 = 0$ through the origin in $\\mathbb{R}^3$, and any $\\mathbf{b}$ off that plane is unreachable.',
        },
        {
          type: 'graph',
          x: [-6, 6],
          y: [-6, 6],
          equal: true,
          functions: [{ expr: '2x', label: 'line through $\\mathbf{a}_1$', color: 'gray', dashed: true }],
          segments: [
            { from: [0, 0], to: [1, 2], arrow: true, color: 'blue', dashed: true, label: 'a1' },
            { from: [0, 0], to: ['k', 2], arrow: true, color: 'red', dashed: true, label: 'a2' },
            { from: [0, 0], to: ['a + k*b', '2a + 2b'], arrow: true, color: 'green', label: 'Ax' },
          ],
          sliders: [
            { name: 'k', min: -2, max: 3, step: 0.25, value: 2, label: '$k$ in $\\mathbf{a}_2 = (k, 2)$' },
            { name: 'a', min: -2, max: 2, step: 0.1, value: 1, label: '$x_1$' },
            { name: 'b', min: -2, max: 2, step: 0.1, value: -1, label: '$x_2$' },
          ],
          readouts: [{ label: 'after $R_2 - 2R_1$, row 2 of $A$ is $[\\,0 \\;\\; 2 - 2k\\,]$; $\\;2 - 2k =$', expr: '2 - 2k', digits: 2 }],
          caption: '$A = [\\,\\mathbf{a}_1 \\;\\; \\mathbf{a}_2\\,]$ with $\\mathbf{a}_1 = (1, 2)$, $\\mathbf{a}_2 = (k, 2)$. While $2 - 2k \\neq 0$ there is a pivot in both rows, and moving $x_1, x_2$ sends $A\\mathbf{x}$ anywhere in the plane. Set $k = 1$: row 2 loses its pivot, the columns line up, and $A\\mathbf{x}$ is stuck on the gray line whatever $\\mathbf{x}$ is.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Pivot in every row of $A$ — not of the augmented matrix',
          text: 'The theorem is about the coefficient matrix $A$. A pivot in every row of $[\\,A \\mid \\mathbf{b}\\,]$ could be a pivot in the last column — an inconsistent system. Also note the size limit: an $m \\times n$ matrix has at most $n$ pivots, so if $n < m$ (fewer columns than rows) its columns can **never** span $\\mathbb{R}^m$. Two vectors cannot span $\\mathbb{R}^3$.',
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'Expect "Do the columns of $A$ span $\\mathbb{R}^m$?" and "Is $A\\mathbf{x} = \\mathbf{b}$ consistent for all $\\mathbf{b}$?" on every first exam — they are the same question. Row-reduce $A$ (not the augmented matrix), count pivots per row, and cite the theorem. If the answer is no, describing the reachable $\\mathbf{b}$\'s (like $b_1 - b_2 + b_3 = 0$) earns full marks.',
        },
      ],
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'truefalse',
      prompt: 'The columns of a $3 \\times 2$ matrix can span $\\mathbb{R}^3$, as long as the two columns are not multiples of each other.',
      answer: false,
      explanation: 'A $3 \\times 2$ matrix has only $2$ columns, so at most $2$ pivot positions — but spanning $\\mathbb{R}^3$ needs a pivot in each of the $3$ rows. Geometrically, two non-parallel vectors span a plane through the origin, never all of space. Any $\\mathbf{b}$ off that plane makes $A\\mathbf{x} = \\mathbf{b}$ inconsistent.',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'numeric',
      prompt: 'For the matrix $A = \\begin{bmatrix} 1 & 2 & 1 \\\\ 2 & 5 & 4 \\\\ 1 & 3 & 3 \\end{bmatrix}$ from the worked example, find $h$ so that $A\\mathbf{x} = \\mathbf{b}$ is consistent for $\\mathbf{b} = \\begin{bmatrix} 1 \\\\ 4 \\\\ h \\end{bmatrix}$.',
      hint: 'The worked example showed $A\\mathbf{x} = \\mathbf{b}$ is consistent exactly when $b_1 - b_2 + b_3 = 0$.',
      label: '$h =$',
      answer: '3',
      explanation: 'The condition $b_1 - b_2 + b_3 = 0$ becomes $1 - 4 + h = 0$, so $h = 3$. Check by row reduction: the $b$-column becomes $(1,\\ 4 - 2,\\ 1 - 4 + 3) = (1, 2, 0)$, so the last row is all zeros and the system is consistent. One solution is $\\mathbf{x} = (-3, 2, 0)$: indeed $-3(1, 2, 1) + 2(2, 5, 3) = (1, 4, 3)$.',
    },
  ],
  takeaways: [
    '$A\\mathbf{x} = x_1\\mathbf{a}_1 + \\cdots + x_n\\mathbf{a}_n$: a linear combination of the columns of $A$, defined when $A$ has as many columns as $\\mathbf{x}$ has entries; the result has one entry per row of $A$.',
    'Row–column rule: entry $i$ of $A\\mathbf{x}$ is (row $i$ of $A$) $\\cdot\\, \\mathbf{x}$. Use it to compute; use the column picture to understand.',
    'The matrix equation $A\\mathbf{x} = \\mathbf{b}$, the vector equation $\\sum x_j\\mathbf{a}_j = \\mathbf{b}$ and the augmented matrix $[\\,A \\mid \\mathbf{b}\\,]$ have the same solutions; $A\\mathbf{x} = \\mathbf{b}$ is consistent iff $\\mathbf{b} \\in \\operatorname{Span}\\{\\mathbf{a}_1, \\dots, \\mathbf{a}_n\\}$.',
    'Linearity: $A(\\mathbf{u} + \\mathbf{v}) = A\\mathbf{u} + A\\mathbf{v}$ and $A(c\\mathbf{u}) = cA\\mathbf{u}$, so $A$ maps lines and edges to lines and edges — why GPUs only transform vertices.',
    'The columns of $A$ span $\\mathbb{R}^m$ (equivalently, $A\\mathbf{x} = \\mathbf{b}$ is consistent for every $\\mathbf{b}$) iff $A$ has a pivot in every row; impossible when $A$ has fewer columns than rows.',
  ],
  reading: [
    {
      title: '3Blue1Brown — Essence of Linear Algebra',
      url: 'https://www.3blue1brown.com/topics/linear-algebra',
      source: 'video',
      note: 'The chapters on linear combinations and on matrices as linear transformations animate exactly the column picture of $A\\mathbf{x}$.',
    },
    {
      title: 'Interactive Linear Algebra — Matrix Equations',
      url: 'https://textbooks.math.gatech.edu/ila/',
      source: 'book',
      note: 'Section 2.3 covers $A\\mathbf{x} = \\mathbf{b}$, the three views and the spanning criterion, with interactive pictures of column spans.',
    },
    {
      title: 'Wikipedia — Matrix multiplication',
      url: 'https://en.wikipedia.org/wiki/Matrix_multiplication',
      source: 'wikipedia',
      note: 'Treats the matrix–vector product as a special case of matrix multiplication and discusses its row and column interpretations and computational cost.',
    },
  ],
};
