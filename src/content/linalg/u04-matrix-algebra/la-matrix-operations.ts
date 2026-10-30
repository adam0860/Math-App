import type { Lesson } from '../../types';

// Expressions for the rotation-and-shear graph (d = angle in degrees, k = shear factor).
const C = 'cos(d*pi/180)';
const S = 'sin(d*pi/180)';

export const lesson: Lesson = {
  id: 'la-matrix-operations',
  title: 'Matrix Operations and Multiplication',
  summary: 'Add, scale, multiply and transpose matrices, and see why the product is defined so that it composes transformations.',
  minutes: 18,
  objectives: [
    'Add matrices, multiply them by scalars, and state when these operations are defined',
    'Explain why the product $AB$ is defined so that $(AB)\\mathbf{x} = A(B\\mathbf{x})$, and compute it column by column',
    'Compute single entries and whole products with the row–column rule, checking sizes first',
    'Use the algebra rules that hold (associativity, distributivity) and avoid the ones that fail ($AB \\ne BA$, no cancellation, zero divisors)',
    'Compute powers and transposes, and prove $(AB)^{T} = B^{T}A^{T}$',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Matrices as objects: notation, sums and scalar multiples',
      blocks: [
        {
          type: 'p',
          text: 'So far a [[matrix]] has been a tool: the coefficients of a system, or the [[standard-matrix]] of a [[linear-transformation]]. In this unit matrices become objects in their own right, with their own arithmetic. That arithmetic is exactly what a game engine does every frame when it combines a model\'s scale, rotation and position into one matrix.',
        },
        {
          type: 'p',
          text: 'An $m \\times n$ matrix has $m$ rows and $n$ columns. The entry in row $i$ and column $j$ is $a_{ij}$ (row first, always). We often write $A$ by its columns, $A = \\begin{bmatrix} \\mathbf{a}_1 & \\mathbf{a}_2 & \\cdots & \\mathbf{a}_n \\end{bmatrix}$, where each $\\mathbf{a}_j$ is a vector in $\\mathbb{R}^m$.',
        },
        {
          type: 'list',
          items: [
            'A [[square-matrix]] has $m = n$. Its **main diagonal** is $a_{11}, a_{22}, \\dots, a_{nn}$.',
            'A [[diagonal-matrix]] is square with every off-diagonal entry $0$.',
            'The [[identity-matrix]] $I_n$ is the $n \\times n$ diagonal matrix with $1$s on the diagonal. Its columns are $\\mathbf{e}_1, \\dots, \\mathbf{e}_n$, so $I_n\\mathbf{x} = \\mathbf{x}$ for every $\\mathbf{x}$.',
            'The [[la-zero-matrix|zero matrix]] $0$ has every entry $0$ (any size).',
          ],
        },
        {
          type: 'definition',
          term: 'Sum and scalar multiple',
          text: 'If $A$ and $B$ are both $m \\times n$, then $A + B$ is the $m \\times n$ matrix with entries $a_{ij} + b_{ij}$, and for a scalar $r$, $rA$ has entries $r\\,a_{ij}$. A sum of matrices of **different sizes is undefined**.',
        },
        {
          type: 'derivation',
          title: 'Compute $A - 2B$ for $A = \\begin{bmatrix} 4 & 0 & 5 \\\\ -1 & 3 & 2 \\end{bmatrix}$, $B = \\begin{bmatrix} 1 & 1 & 1 \\\\ 3 & 5 & 7 \\end{bmatrix}$',
          steps: [
            { tex: '2B = \\begin{bmatrix} 2 & 2 & 2 \\\\ 6 & 10 & 14 \\end{bmatrix}', why: 'A scalar multiple multiplies **every** entry by $2$.' },
            { tex: 'A - 2B = \\begin{bmatrix} 4 - 2 & 0 - 2 & 5 - 2 \\\\ -1 - 6 & 3 - 10 & 2 - 14 \\end{bmatrix}', why: 'Both matrices are $2 \\times 3$, so subtraction is defined, and it works entry by entry in matching positions.' },
            { tex: '= \\begin{bmatrix} 2 & -2 & 3 \\\\ -7 & -7 & -12 \\end{bmatrix}', why: 'Simplify each entry.' },
          ],
          result: '$A - 2B = \\begin{bmatrix} 2 & -2 & 3 \\\\ -7 & -7 & -12 \\end{bmatrix}$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why these rules are the "obvious" ones',
          text: 'An $m \\times n$ matrix is just a list of $mn$ numbers arranged in a grid, and entrywise addition and scaling treat it exactly like a long vector in $\\mathbb{R}^{mn}$. So every rule you know for vectors carries over: $A + B = B + A$, $(A + B) + C = A + (B + C)$, $A + 0 = A$, $r(A + B) = rA + rB$, $(r + s)A = rA + sA$, $r(sA) = (rs)A$. The interesting operation — the one with genuinely new behaviour — is multiplication.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'fill',
      prompt: 'Let $A = \\begin{bmatrix} 1 & -2 \\\\ 3 & 0 \\end{bmatrix}$ and $B = \\begin{bmatrix} 4 & 1 \\\\ -1 & 5 \\end{bmatrix}$. Type the entries of $2A - B$.',
      template: 'Row 1: ___ , ___\nRow 2: ___ , ___',
      blanks: [{ answers: ['-2'] }, { answers: ['-5'] }, { answers: ['7'] }, { answers: ['-5'] }],
      hint: 'First double every entry of $A$, then subtract the entry of $B$ in the same position.',
      explanation: '$2A = \\begin{bmatrix} 2 & -4 \\\\ 6 & 0 \\end{bmatrix}$, so $2A - B = \\begin{bmatrix} 2 - 4 & -4 - 1 \\\\ 6 - (-1) & 0 - 5 \\end{bmatrix} = \\begin{bmatrix} -2 & -5 \\\\ 7 & -5 \\end{bmatrix}$. The classic slip is $6 - (-1) = 5$: subtracting a negative adds.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Multiplication is composition',
      blocks: [
        {
          type: 'p',
          text: 'Here is the question that defines matrix multiplication. Suppose $B$ is $n \\times p$ and $A$ is $m \\times n$. Then $\\mathbf{x} \\mapsto B\\mathbf{x}$ takes $\\mathbb{R}^p$ to $\\mathbb{R}^n$, and $\\mathbf{y} \\mapsto A\\mathbf{y}$ takes $\\mathbb{R}^n$ to $\\mathbb{R}^m$. Doing one after the other, $\\mathbf{x} \\mapsto A(B\\mathbf{x})$, is a [[composition]] of linear maps — and it is linear too. So it has a standard matrix. **We define $AB$ to be that matrix.**',
        },
        {
          type: 'derivation',
          title: 'Find the matrix of $\\mathbf{x} \\mapsto A(B\\mathbf{x})$',
          steps: [
            { tex: 'B\\mathbf{x} = x_1\\mathbf{b}_1 + x_2\\mathbf{b}_2 + \\cdots + x_p\\mathbf{b}_p', why: 'A [[matrix-vector-product]] is the [[linear-combination]] of the columns of $B$ with weights from $\\mathbf{x}$.' },
            { tex: 'A(B\\mathbf{x}) = A(x_1\\mathbf{b}_1) + \\cdots + A(x_p\\mathbf{b}_p)', why: 'Multiplication by $A$ is linear, so it distributes over the sum.' },
            { tex: '= x_1(A\\mathbf{b}_1) + x_2(A\\mathbf{b}_2) + \\cdots + x_p(A\\mathbf{b}_p)', why: 'Linearity again: scalars pull out, $A(c\\mathbf{v}) = c\\,A\\mathbf{v}$.' },
            { tex: '= \\begin{bmatrix} A\\mathbf{b}_1 & A\\mathbf{b}_2 & \\cdots & A\\mathbf{b}_p \\end{bmatrix} \\mathbf{x}', why: 'Read the previous line backwards: it is a linear combination of the vectors $A\\mathbf{b}_j$ with weights $x_j$, which is exactly a matrix with those columns times $\\mathbf{x}$.' },
          ],
          result: 'The single matrix that does "$B$ first, then $A$" has columns $A\\mathbf{b}_1, \\dots, A\\mathbf{b}_p$.',
        },
        {
          type: 'definition',
          term: 'Matrix product (column definition)',
          text: 'If $A$ is $m \\times n$ and $B = \\begin{bmatrix} \\mathbf{b}_1 & \\cdots & \\mathbf{b}_p \\end{bmatrix}$ is $n \\times p$, the [[matrix-product]] is the $m \\times p$ matrix\n\n$$AB = \\begin{bmatrix} A\\mathbf{b}_1 & A\\mathbf{b}_2 & \\cdots & A\\mathbf{b}_p \\end{bmatrix}.$$\n\nBy construction, $(AB)\\mathbf{x} = A(B\\mathbf{x})$ for every $\\mathbf{x}$ in $\\mathbb{R}^p$.',
        },
        {
          type: 'derivation',
          title: 'Compute $AB$ for $A = \\begin{bmatrix} 2 & 3 \\\\ 1 & -5 \\end{bmatrix}$, $B = \\begin{bmatrix} 4 & 3 & 6 \\\\ 1 & -2 & 3 \\end{bmatrix}$',
          steps: [
            { tex: '\\text{sizes: } (2 \\times 2)(2 \\times 3) \\to 2 \\times 3', why: 'Inner sizes match ($2 = 2$), so the product exists; the outer sizes give its shape.' },
            { tex: 'A\\mathbf{b}_1 = 4\\begin{bmatrix} 2 \\\\ 1 \\end{bmatrix} + 1\\begin{bmatrix} 3 \\\\ -5 \\end{bmatrix} = \\begin{bmatrix} 11 \\\\ -1 \\end{bmatrix}', why: 'Column 1 of $B$ supplies the weights $4, 1$ on the columns of $A$.' },
            { tex: 'A\\mathbf{b}_2 = 3\\begin{bmatrix} 2 \\\\ 1 \\end{bmatrix} - 2\\begin{bmatrix} 3 \\\\ -5 \\end{bmatrix} = \\begin{bmatrix} 0 \\\\ 13 \\end{bmatrix}', why: 'Weights $3, -2$ from column 2 of $B$.' },
            { tex: 'A\\mathbf{b}_3 = 6\\begin{bmatrix} 2 \\\\ 1 \\end{bmatrix} + 3\\begin{bmatrix} 3 \\\\ -5 \\end{bmatrix} = \\begin{bmatrix} 21 \\\\ -9 \\end{bmatrix}', why: 'Weights $6, 3$ from column 3 of $B$.' },
            { tex: 'AB = \\begin{bmatrix} 11 & 0 & 21 \\\\ -1 & 13 & -9 \\end{bmatrix}', why: 'Place the three results side by side as columns.' },
          ],
          result: 'Each column of $AB$ is $A$ applied to the matching column of $B$ — and is a linear combination of the columns of $A$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why read right to left',
          text: 'In $(AB)\\mathbf{x} = A(B\\mathbf{x})$ the vector meets $B$ **first**. So a product of transformation matrices is read right to left, like function composition $f(g(x))$. If a sprite is scaled by $S$, then rotated by $R$, the combined matrix is $RS$, not $SR$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'mcq',
      prompt: '$A$ is $3 \\times 2$, $B$ is $2 \\times 4$ and $C$ is $4 \\times 3$. Which product is **not** defined?',
      options: [
        { text: '$AB$', why: '$(3 \\times 2)(2 \\times 4)$: the inner sizes are both $2$, so $AB$ exists and is $3 \\times 4$.' },
        { text: '$CA$', why: '$(4 \\times 3)(3 \\times 2)$: inner sizes $3 = 3$, so $CA$ exists and is $4 \\times 2$.' },
        { text: '$AC$', correct: true, why: '$(3 \\times 2)(4 \\times 3)$: $A$ has $2$ columns but $C$ has $4$ rows. Each column of $C$ is in $\\mathbb{R}^4$, and $A$ only accepts vectors in $\\mathbb{R}^2$.' },
        { text: '$BC$', why: '$(2 \\times 4)(4 \\times 3)$: inner sizes $4 = 4$, so $BC$ exists and is $2 \\times 3$.' },
      ],
      explanation: '$AB$ needs (columns of $A$) = (rows of $B$), because $A$ must be able to act on each column of $B$. Write the sizes side by side: the two inner numbers must match, and the outer two give the size of the product.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'The row–column rule',
      blocks: [
        {
          type: 'p',
          text: 'Computing whole columns is great for understanding, but to get one entry fast you want a formula. Entry $i$ of the column $A\\mathbf{b}_j$ is row $i$ of $A$ times $\\mathbf{b}_j$ — a [[dot-product]] of a row with a column. That is the [[la-row-column-rule|row–column rule]].',
        },
        {
          type: 'theorem',
          name: 'Row–column rule',
          tex: '(AB)_{ij} = a_{i1}b_{1j} + a_{i2}b_{2j} + \\cdots + a_{in}b_{nj} = \\sum_{k=1}^{n} a_{ik}\\,b_{kj}',
          text: 'The $(i, j)$ entry of $AB$ is (row $i$ of $A$) $\\cdot$ (column $j$ of $B$). The rows of $A$ and the columns of $B$ both have $n$ entries — the inner size — which is why the inner sizes must match.',
        },
        {
          type: 'derivation',
          title: 'Compute $AB$ for $A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}$, $B = \\begin{bmatrix} 5 & 6 \\\\ 7 & 8 \\end{bmatrix}$',
          steps: [
            { tex: '(AB)_{11} = 1 \\cdot 5 + 2 \\cdot 7 = 19', why: 'Row 1 of $A$, $(1, 2)$, dotted with column 1 of $B$, $(5, 7)$.' },
            { tex: '(AB)_{12} = 1 \\cdot 6 + 2 \\cdot 8 = 22', why: 'Same row 1, now column 2 of $B$, $(6, 8)$.' },
            { tex: '(AB)_{21} = 3 \\cdot 5 + 4 \\cdot 7 = 43', why: 'Row 2 of $A$, $(3, 4)$, with column 1 of $B$.' },
            { tex: '(AB)_{22} = 3 \\cdot 6 + 4 \\cdot 8 = 50', why: 'Row 2 with column 2.' },
            { tex: 'AB = \\begin{bmatrix} 19 & 22 \\\\ 43 & 50 \\end{bmatrix}', why: 'Assemble: the row index comes from $A$, the column index from $B$.' },
          ],
          result: '$AB = \\begin{bmatrix} 19 & 22 \\\\ 43 & 50 \\end{bmatrix}$. (Keep this example — we will multiply in the other order soon.)',
        },
        {
          type: 'p',
          text: 'There is also a **row view**: row $i$ of $AB$ equals (row $i$ of $A$)$\\,B$, a combination of the *rows* of $B$. Column view, row view and entry view are three readings of the same definition; use whichever makes the problem easiest.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'The triple loop every engine has',
          text: 'The row–column rule is literally three nested loops: for each row $i$, for each column $j$, sum over $k$. An $m \\times n$ times $n \\times p$ product costs $mnp$ multiplications — $64$ for two $4 \\times 4$ transform matrices, and $10^{9}$ multiply-adds for two $1000 \\times 1000$ matrices, which is why GPUs and BLAS libraries are tuned so hard for it. Below, C++ templates even check the size rule at compile time.',
        },
        {
          type: 'code',
          title: 'matmul.cpp',
          runnable: true,
          code: `#include <array>
#include <cstddef>
#include <cstdio>

// M rows, N columns, stored row by row.
template <std::size_t M, std::size_t N>
using Matrix = std::array<std::array<int, N>, M>;

// (M x N) times (N x P) gives (M x P). Mismatched sizes do not compile.
template <std::size_t M, std::size_t N, std::size_t P>
Matrix<M, P> mul(const Matrix<M, N>& A, const Matrix<N, P>& B) {
    Matrix<M, P> C{};  // zero-initialised
    for (std::size_t i = 0; i < M; ++i)
        for (std::size_t j = 0; j < P; ++j)
            for (std::size_t k = 0; k < N; ++k)
                C[i][j] += A[i][k] * B[k][j];  // row i of A . column j of B
    return C;
}

template <std::size_t M, std::size_t N>
void print(const char* name, const Matrix<M, N>& X) {
    std::printf("%s =\\n", name);
    for (const auto& row : X) {
        for (int v : row) std::printf("%4d", v);
        std::printf("\\n");
    }
}

int main() {
    Matrix<2, 2> A{{{1, 2}, {3, 4}}};
    Matrix<2, 2> B{{{5, 6}, {7, 8}}};
    Matrix<2, 3> C{{{4, 3, 6}, {1, -2, 3}}};
    print("AB", mul(A, B));
    print("BA", mul(B, A));
    print("AC", mul(A, C));
    // mul(C, A);  // compile error: C is 2x3, A is 2x2, inner sizes 3 != 2
}`,
          output: `AB =
  19  22
  43  50
BA =
  23  34
  31  46
AC =
   6  -1  12
  16   1  30`,
          annotations: [
            { lines: '6-7', text: 'A matrix as an array of rows; the sizes are part of the type.' },
            { lines: '10-11', text: 'The signature encodes the size rule: the inner size $N$ is shared, the result is $M \\times P$.' },
            { lines: '16', text: 'The row–column rule: accumulate $a_{ik}b_{kj}$ over $k$.' },
            { lines: 36, text: 'Uncomment this and the compiler rejects it — the size check costs nothing at run time.' },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'numeric',
      prompt: 'Let $A = \\begin{bmatrix} 2 & -1 & 0 \\\\ 1 & 3 & 4 \\end{bmatrix}$ and $B = \\begin{bmatrix} 1 & 2 \\\\ 0 & -1 \\\\ 5 & 3 \\end{bmatrix}$. Find the $(2, 2)$ entry of $AB$.',
      label: '$(AB)_{22} =$',
      answer: '11',
      hint: 'Row 2 of $A$ is $(1, 3, 4)$; column 2 of $B$ is $(2, -1, 3)$. Dot them.',
      explanation: '$(AB)_{22} = 1 \\cdot 2 + 3 \\cdot (-1) + 4 \\cdot 3 = 2 - 3 + 12 = 11$. You never need the rest of the product to get one entry. (For the record, $AB = \\begin{bmatrix} 2 & 5 \\\\ 21 & 11 \\end{bmatrix}$, a $2 \\times 2$ matrix because the outer sizes are $2$ and $2$.)',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'fill',
      prompt: 'Compute the product $\\begin{bmatrix} 1 & 2 \\\\ 0 & -1 \\end{bmatrix}\\begin{bmatrix} 3 & 1 \\\\ 2 & 4 \\end{bmatrix}$ and type its entries.',
      template: 'Row 1: ___ , ___\nRow 2: ___ , ___',
      blanks: [{ answers: ['7'] }, { answers: ['9'] }, { answers: ['-2'] }, { answers: ['-4'] }],
      hint: 'Entry $(i, j)$ is row $i$ of the left matrix dotted with column $j$ of the right matrix.',
      explanation: 'Row 1 $(1, 2)$: with column 1 $(3, 2)$ gives $3 + 4 = 7$; with column 2 $(1, 4)$ gives $1 + 8 = 9$. Row 2 $(0, -1)$: with $(3, 2)$ gives $0 - 2 = -2$; with $(1, 4)$ gives $0 - 4 = -4$. So the product is $\\begin{bmatrix} 7 & 9 \\\\ -2 & -4 \\end{bmatrix}$. A common wrong answer multiplies entry by entry ($\\begin{bmatrix} 3 & 2 \\\\ 0 & -4 \\end{bmatrix}$) — that is not matrix multiplication.',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'concept',
      title: 'The rules that still hold',
      blocks: [
        {
          type: 'p',
          text: 'Matrix multiplication keeps most of the algebra you trust from numbers. Let $A$ be $m \\times n$, let $r$ be a scalar, and let $B, C$ have sizes for which the expressions are defined.',
        },
        {
          type: 'table',
          headers: ['Rule', 'Name'],
          rows: [
            ['$A(BC) = (AB)C$', 'associative law'],
            ['$A(B + C) = AB + AC$', 'left distributive law'],
            ['$(B + C)A = BA + CA$', 'right distributive law'],
            ['$r(AB) = (rA)B = A(rB)$', 'scalars move freely'],
            ['$I_m A = A = A I_n$', 'identity for multiplication'],
          ],
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why associativity is free',
          text: 'Both $A(BC)$ and $(AB)C$ are the matrix of the same composite map "apply $C$, then $B$, then $A$": for every $\\mathbf{x}$, $(A(BC))\\mathbf{x} = A((BC)\\mathbf{x}) = A(B(C\\mathbf{x}))$ and $((AB)C)\\mathbf{x} = (AB)(C\\mathbf{x}) = A(B(C\\mathbf{x}))$. Two matrices that do the same thing to every vector have the same columns (look at $\\mathbf{x} = \\mathbf{e}_j$), so they are equal. Composition of functions is associative, so matrix multiplication is too — no index juggling required.',
        },
        {
          type: 'derivation',
          title: 'Prove the left distributive law, column by column',
          steps: [
            { tex: 'A(B + C) = \\begin{bmatrix} A(\\mathbf{b}_1 + \\mathbf{c}_1) & \\cdots & A(\\mathbf{b}_p + \\mathbf{c}_p) \\end{bmatrix}', why: 'Column $j$ of $B + C$ is $\\mathbf{b}_j + \\mathbf{c}_j$; apply the column definition of the product.' },
            { tex: '= \\begin{bmatrix} A\\mathbf{b}_1 + A\\mathbf{c}_1 & \\cdots & A\\mathbf{b}_p + A\\mathbf{c}_p \\end{bmatrix}', why: 'The matrix–vector product is linear: $A(\\mathbf{u} + \\mathbf{v}) = A\\mathbf{u} + A\\mathbf{v}$.' },
            { tex: '= AB + AC', why: 'Split the columns into two matrices added entrywise.' },
          ],
          result: 'Every rule in the table is inherited from the linearity of $\\mathbf{x} \\mapsto A\\mathbf{x}$ or from associativity of composition.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Associativity saves millions of multiplications',
          text: 'A mesh with $100{,}000$ vertices is transformed by projection $P$, view $V$ and model $M$. Computing $P(V(M\\mathbf{v}))$ for every vertex costs three $4 \\times 4$ matrix–vector products per vertex. Associativity lets you compute $PVM$ **once** per object (two $4 \\times 4$ products) and then do one matrix–vector product per vertex. Vertex shaders receive exactly this precomputed "MVP" matrix.',
        },
      ],
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'concept',
      title: 'What fails: order matters',
      blocks: [
        {
          type: 'p',
          text: 'Multiply the earlier example in the other order: $BA = \\begin{bmatrix} 5 & 6 \\\\ 7 & 8 \\end{bmatrix}\\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix} = \\begin{bmatrix} 23 & 34 \\\\ 31 & 46 \\end{bmatrix}$, while $AB = \\begin{bmatrix} 19 & 22 \\\\ 43 & 50 \\end{bmatrix}$. **In general $AB \\ne BA$.** Geometrically this is no surprise: "rotate then shear" and "shear then rotate" are different motions.',
        },
        {
          type: 'graph',
          x: [-3.5, 3.5],
          y: [-3.5, 3.5],
          equal: true,
          height: 340,
          segments: [
            { from: [0, 0], to: [1, 0], color: 'gray', dashed: true },
            { from: [1, 0], to: [1, 1], color: 'gray', dashed: true },
            { from: [1, 1], to: [0, 1], color: 'gray', dashed: true },
            { from: [0, 1], to: [0, 0], color: 'gray', dashed: true },
            // RS: shear first, then rotate (blue)
            { from: [0, 0], to: [C, S], color: 'blue', arrow: true, label: 'RS e1' },
            { from: [0, 0], to: [`k*${C} - ${S}`, `k*${S} + ${C}`], color: 'blue', arrow: true, label: 'RS e2' },
            { from: [C, S], to: [`${C} + k*${C} - ${S}`, `${S} + k*${S} + ${C}`], color: 'blue' },
            { from: [`k*${C} - ${S}`, `k*${S} + ${C}`], to: [`${C} + k*${C} - ${S}`, `${S} + k*${S} + ${C}`], color: 'blue' },
            // SR: rotate first, then shear (red)
            { from: [0, 0], to: [`${C} + k*${S}`, S], color: 'red', arrow: true, label: 'SR e1' },
            { from: [0, 0], to: [`k*${C} - ${S}`, C], color: 'red', arrow: true, label: 'SR e2' },
            { from: [`${C} + k*${S}`, S], to: [`${C} + k*${S} + k*${C} - ${S}`, `${S} + ${C}`], color: 'red' },
            { from: [`k*${C} - ${S}`, C], to: [`${C} + k*${S} + k*${C} - ${S}`, `${S} + ${C}`], color: 'red' },
          ],
          sliders: [
            { name: 'd', min: -180, max: 180, step: 5, value: 90, label: 'rotation angle $\\theta$ (degrees)' },
            { name: 'k', min: -2, max: 2, step: 0.1, value: 1, label: 'shear factor $k$' },
          ],
          readouts: [
            { label: '$(RS)_{11} = \\cos\\theta =$', expr: C },
            { label: '$(SR)_{11} = \\cos\\theta + k\\sin\\theta =$', expr: `${C} + k*${S}` },
          ],
          caption: 'Gray: the unit square. Blue: its image under $RS$ (shear $S = \\begin{bmatrix} 1 & k \\\\ 0 & 1 \\end{bmatrix}$ first, then rotate by $\\theta$). Red: under $SR$ (rotate first, then shear). They agree only in special cases — try $k = 0$ or $\\theta = 0$.',
        },
        {
          type: 'p',
          text: 'With $\\theta = 90^\\circ$ and $k = 1$: $R = \\begin{bmatrix} 0 & -1 \\\\ 1 & 0 \\end{bmatrix}$, $S = \\begin{bmatrix} 1 & 1 \\\\ 0 & 1 \\end{bmatrix}$, and $RS = \\begin{bmatrix} 0 & -1 \\\\ 1 & 1 \\end{bmatrix}$ but $SR = \\begin{bmatrix} 1 & -1 \\\\ 1 & 0 \\end{bmatrix}$. Two more number habits break:',
        },
        {
          type: 'list',
          items: [
            '**No cancellation.** $AB = AC$ does *not* imply $B = C$, even when $A \\ne 0$.',
            '**Zero divisors.** $AB = 0$ can happen with $A \\ne 0$ and $B \\ne 0$. For example $\\begin{bmatrix} 1 & 2 \\\\ 2 & 4 \\end{bmatrix}\\begin{bmatrix} 2 & -4 \\\\ -1 & 2 \\end{bmatrix} = \\begin{bmatrix} 0 & 0 \\\\ 0 & 0 \\end{bmatrix}$, and even $\\begin{bmatrix} 0 & 1 \\\\ 0 & 0 \\end{bmatrix}^2 = 0$.',
          ],
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why cancellation fails',
          text: 'Take $A = \\begin{bmatrix} 1 & 2 \\\\ 2 & 4 \\end{bmatrix}$: its columns are parallel, so it squashes the whole plane onto one line, and every vector along $(2, -1)$ is sent to $\\mathbf{0}$. Then $AB = A \\cdot 0$ with $B = \\begin{bmatrix} 2 & -4 \\\\ -1 & 2 \\end{bmatrix} \\ne 0$: $A$ destroys exactly the information that tells $B$ and $0$ apart. With numbers, only $0$ destroys information; with matrices, any matrix that collapses a direction does. The next two lessons show that cancellation **does** work when $A$ is invertible.',
        },
        {
          type: 'compare',
          left: { title: 'Wrong (number habits)', tone: 'bad', tex: ['(A + B)^2 = A^2 + 2AB + B^2', 'AB = AC \\implies B = C'] },
          right: { title: 'Right (matrices)', tone: 'good', tex: ['(A + B)^2 = A^2 + AB + BA + B^2', 'AB = AC \\not\\Rightarrow B = C \\text{ in general}'] },
        },
      ],
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'truefalse',
      prompt: 'If $A$, $B$, $C$ are $2 \\times 2$ matrices with $A \\ne 0$ and $AB = AC$, then $B = C$.',
      answer: false,
      explanation: 'Counterexample: $A = \\begin{bmatrix} 1 & 2 \\\\ 2 & 4 \\end{bmatrix}$, $B = \\begin{bmatrix} 2 & -4 \\\\ -1 & 2 \\end{bmatrix}$, $C = 0$. Then $AB = 0 = AC$ but $B \\ne C$. The equation $AB = AC$ says $A(B - C) = 0$, and a nonzero matrix can still kill the nonzero matrix $B - C$ when $A$ collapses some direction. Cancellation is valid when $A$ is invertible — the subject of the next lesson.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'error',
      prompt: 'A student expands $(A + B)^2$ for $n \\times n$ matrices and tests it on $A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}$, $B = \\begin{bmatrix} 5 & 6 \\\\ 7 & 8 \\end{bmatrix}$. Tap the first wrong line.',
      lines: [
        '$(A + B)^2 = (A + B)(A + B)$',
        '$= A(A + B) + B(A + B)$',
        '$= A^2 + AB + BA + B^2$',
        '$= A^2 + 2AB + B^2$',
      ],
      errorLines: [4],
      explanation: 'Line 4 combines $AB + BA$ into $2AB$, which requires $AB = BA$. For these matrices $AB = \\begin{bmatrix} 19 & 22 \\\\ 43 & 50 \\end{bmatrix}$ and $BA = \\begin{bmatrix} 23 & 34 \\\\ 31 & 46 \\end{bmatrix}$, so the formula is off: $(A + B)^2 = \\begin{bmatrix} 116 & 144 \\\\ 180 & 224 \\end{bmatrix}$ but $A^2 + 2AB + B^2 = \\begin{bmatrix} 112 & 132 \\\\ 192 & 228 \\end{bmatrix}$. Lines 1–3 are correct: they use only the definition of a square and the two distributive laws (in the right order).',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'concept',
      title: 'Powers and the transpose',
      blocks: [
        {
          type: 'p',
          text: 'For a square $A$, $A^k = A A \\cdots A$ ($k$ factors) and $A^0 = I$. Because of associativity the grouping does not matter. Powers mean "apply the transformation $k$ times": the shear $\\begin{bmatrix} 1 & 1 \\\\ 0 & 1 \\end{bmatrix}$ applied five times is $\\begin{bmatrix} 1 & 5 \\\\ 0 & 1 \\end{bmatrix}$, a shear by $5$. Powers are **not** entrywise: $\\begin{bmatrix} 1 & 2 \\\\ 3 & 0 \\end{bmatrix}^2 = \\begin{bmatrix} 7 & 2 \\\\ 3 & 6 \\end{bmatrix}$, not $\\begin{bmatrix} 1 & 4 \\\\ 9 & 0 \\end{bmatrix}$.',
        },
        {
          type: 'definition',
          term: 'Transpose',
          text: 'The [[transpose]] of an $m \\times n$ matrix $A$ is the $n \\times m$ matrix $A^{T}$ whose columns are the rows of $A$: $(A^{T})_{ij} = a_{ji}$. For example $\\begin{bmatrix} 1 & 2 & 3 \\\\ 4 & 5 & 6 \\end{bmatrix}^{T} = \\begin{bmatrix} 1 & 4 \\\\ 2 & 5 \\\\ 3 & 6 \\end{bmatrix}$.',
        },
        {
          type: 'theorem',
          name: 'Properties of the transpose',
          tex: '(A^{T})^{T} = A, \\quad (A + B)^{T} = A^{T} + B^{T}, \\quad (rA)^{T} = rA^{T}, \\quad (AB)^{T} = B^{T}A^{T}',
          text: 'The transpose of a product is the product of the transposes **in reverse order**.',
        },
        {
          type: 'derivation',
          title: 'Why $(AB)^{T} = B^{T}A^{T}$',
          steps: [
            { tex: '\\big((AB)^{T}\\big)_{ij} = (AB)_{ji}', why: 'Definition of transpose: swap the indices.' },
            { tex: '= \\sum_{k} a_{jk}\\,b_{ki}', why: 'Row–column rule for entry $(j, i)$ of $AB$.' },
            { tex: '= \\sum_{k} b_{ki}\\,a_{jk}', why: 'Numbers commute, so swap the factors in each term.' },
            { tex: '= \\sum_{k} (B^{T})_{ik}\\,(A^{T})_{kj}', why: '$b_{ki} = (B^{T})_{ik}$ and $a_{jk} = (A^{T})_{kj}$.' },
            { tex: '= (B^{T}A^{T})_{ij}', why: 'That is the row–column rule for entry $(i, j)$ of $B^{T}A^{T}$.' },
          ],
          result: 'Every entry agrees, so $(AB)^{T} = B^{T}A^{T}$. Check with our example: $(AB)^{T} = \\begin{bmatrix} 19 & 43 \\\\ 22 & 50 \\end{bmatrix} = B^{T}A^{T}$, while $A^{T}B^{T} = (BA)^{T} = \\begin{bmatrix} 23 & 31 \\\\ 34 & 46 \\end{bmatrix}$.',
        },
        {
          type: 'p',
          text: 'Sizes give a quick sanity check: if $A$ is $m \\times n$ and $B$ is $n \\times p$, then $B^{T}$ is $p \\times n$ and $A^{T}$ is $n \\times m$, so $B^{T}A^{T}$ is defined and $p \\times m$ — while $A^{T}B^{T}$ usually is not even defined. One more identity you will use constantly: for column vectors, $\\mathbf{u} \\cdot \\mathbf{v} = \\mathbf{u}^{T}\\mathbf{v}$, a $1 \\times n$ times $n \\times 1$ product.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Transposes in graphics code',
          text: 'Some engines treat vectors as rows and write $\\mathbf{v}^{T}M^{T}$ where others write $M\\mathbf{v}$ — the same computation, transposed, thanks to $(M\\mathbf{v})^{T} = \\mathbf{v}^{T}M^{T}$. The homogeneous-coordinates lesson at the end of this unit untangles the OpenGL vs DirectX conventions using exactly this rule.',
        },
      ],
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'numeric',
      prompt: 'Let $A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 0 \\end{bmatrix}$. Find the $(1, 1)$ entry of $A^2$.',
      label: '$(A^2)_{11} =$',
      answer: '7',
      hint: '$A^2 = AA$. Use row 1 of $A$ dotted with column 1 of $A$.',
      explanation: 'Row 1 of $A$ is $(1, 2)$ and column 1 of $A$ is $(1, 3)$, so $(A^2)_{11} = 1 \\cdot 1 + 2 \\cdot 3 = 7$. Squaring entrywise would give $1^2 = 1$ — the most common wrong answer. The full square is $A^2 = \\begin{bmatrix} 7 & 2 \\\\ 3 & 6 \\end{bmatrix}$.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'order',
      prompt: 'A vertex $\\mathbf{v}$ is first scaled by $S$, then rotated by $R$, then sheared by $H$. Arrange the factors from left to right so that $M\\mathbf{v} = H(R(S\\mathbf{v}))$.',
      lines: ['$H$', '$R$', '$S$'],
      explanation: 'The vector meets the **rightmost** matrix first. Since $S$ acts first it sits next to $\\mathbf{v}$, and $H$, which acts last, sits on the far left: $M = HRS$. By associativity $HRS\\mathbf{v} = H(R(S\\mathbf{v}))$, so precomputing $M$ once gives the same result for every vertex.',
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'mcq',
      prompt: '$A$ is $2 \\times 3$ and $B$ is $3 \\times 4$. Which expression equals $(AB)^{T}$?',
      options: [
        { text: '$A^{T}B^{T}$', why: '$A^{T}$ is $3 \\times 2$ and $B^{T}$ is $4 \\times 3$: the inner sizes $2$ and $4$ do not even match. Keeping the order is the classic mistake.' },
        { text: '$B^{T}A^{T}$', correct: true, why: '$B^{T}$ is $4 \\times 3$ and $A^{T}$ is $3 \\times 2$, giving $4 \\times 2$ — the same size as $(AB)^{T}$. The order reverses.' },
        { text: '$BA$', why: '$B$ is $3 \\times 4$ and $A$ is $2 \\times 3$: inner sizes $4 \\ne 2$, so $BA$ is undefined. Transposing is not the same as swapping the factors.' },
        { text: '$AB$, since transposing changes nothing', why: '$AB$ is $2 \\times 4$ but $(AB)^{T}$ is $4 \\times 2$. Only symmetric square matrices equal their own transpose.' },
      ],
      explanation: '$(AB)^{T} = B^{T}A^{T}$: transposing a product reverses the order of the factors. The size check alone eliminates the wrong options: $(AB)^{T}$ must be $4 \\times 2$.',
    },
  ],
  takeaways: [
    'Sums and scalar multiples are entrywise and need equal sizes; they obey all the usual vector rules.',
    '$AB = \\begin{bmatrix} A\\mathbf{b}_1 & \\cdots & A\\mathbf{b}_p \\end{bmatrix}$ is defined so that $(AB)\\mathbf{x} = A(B\\mathbf{x})$: the product is the matrix of the composition, read right to left.',
    'An $m \\times n$ times an $n \\times p$ matrix is $m \\times p$; entry $(i, j)$ is row $i$ of $A$ dotted with column $j$ of $B$.',
    'Associativity and distributivity hold, but in general $AB \\ne BA$, $AB = AC$ does not give $B = C$, and $AB = 0$ is possible with $A, B \\ne 0$.',
    'Powers are repeated products, not entrywise powers; $(AB)^{T} = B^{T}A^{T}$, with the order reversed.',
  ],
  reading: [
    {
      title: 'Interactive Linear Algebra — Matrix Multiplication',
      url: 'https://textbooks.math.gatech.edu/ila/',
      source: 'book',
      note: 'Section 3.4 of Margalit & Rabinoff develops the product as composition, with interactive demos of non-commuting transformations.',
    },
    {
      title: '3Blue1Brown — Matrix multiplication as composition',
      url: 'https://www.3blue1brown.com/topics/linear-algebra',
      source: 'video',
      note: 'Chapter 4 of *Essence of linear algebra* animates why $AB$ means "apply $B$, then $A$" and why order matters.',
    },
    {
      title: 'Wikipedia — Matrix multiplication',
      url: 'https://en.wikipedia.org/wiki/Matrix_multiplication',
      source: 'wikipedia',
      note: 'Definitions, properties and the algorithms (including Strassen\'s) used to multiply large matrices fast.',
    },
    {
      title: 'MIT OCW 18.06 — Lecture 3: Multiplication and inverse matrices',
      url: 'https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/',
      source: 'other',
      note: 'Gilbert Strang presents five ways to multiply matrices: by entries, columns, rows, column-times-row, and blocks.',
    },
  ],
};
