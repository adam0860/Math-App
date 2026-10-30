import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'la-determinant-properties',
  title: 'Properties of Determinants',
  summary: 'How row operations change a determinant, the fast way to compute one, and the rules $\\det(AB) = \\det A \\det B$, $\\det A^{T} = \\det A$ and $\\det(cA) = c^n \\det A$.',
  minutes: 19,
  objectives: [
    'State and justify how each of the three row operations changes a determinant',
    'Compute determinants efficiently by row reducing to triangular form',
    'Prove that $A$ is invertible exactly when $\\det A \\ne 0$, and use it to find when a matrix is singular',
    'Apply $\\det(AB) = \\det A \\det B$, $\\det(A^{T}) = \\det A$, $\\det(A^{-1}) = 1/\\det A$ and $\\det(cA) = c^n \\det A$',
    'Use linearity in one row, and avoid the false rule $\\det(A + B) = \\det A + \\det B$',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'What row operations do to a determinant',
      blocks: [
        {
          type: 'p',
          text: 'Cofactor expansion costs about $n!$ operations, but triangular matrices are trivial: multiply the diagonal. Row reduction turns any square matrix into a triangular one. The missing link is a precise account of how each [[row-operations|row operation]] changes the determinant along the way.',
        },
        {
          type: 'theorem',
          name: 'Row operations and the determinant',
          text: 'Let $A$ be a square matrix and $B$ the result of one row operation on $A$.\n\n1. **Replacement** (add a multiple of one row to another row): $\\det B = \\det A$.\n2. **Interchange** (swap two rows): $\\det B = -\\det A$.\n3. **Scaling** (multiply one row by $k$): $\\det B = k \\det A$.',
        },
        {
          type: 'derivation',
          title: 'Check all three on $A = \\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix}$, $\\det A = ad - bc$',
          steps: [
            { tex: '\\begin{vmatrix} a + kc & b + kd \\\\ c & d \\end{vmatrix} = (a + kc)d - (b + kd)c', why: 'Replacement $R_1 \\to R_1 + kR_2$, then the $2 \\times 2$ formula.' },
            { tex: '= ad + kcd - bc - kcd = ad - bc', why: 'The two $kcd$ terms cancel exactly. Replacement leaves the determinant unchanged.' },
            { tex: '\\begin{vmatrix} c & d \\\\ a & b \\end{vmatrix} = cb - da = -(ad - bc)', why: 'Interchange $R_1 \\leftrightarrow R_2$: the two products trade places, so the sign flips.' },
            { tex: '\\begin{vmatrix} ka & kb \\\\ c & d \\end{vmatrix} = kad - kbc = k(ad - bc)', why: 'Scaling $R_1$ by $k$: every term of the determinant contains exactly one entry from row 1, so every term picks up one factor of $k$.' },
          ],
          result: 'Replacement: no change. Swap: sign flip. Scale a row by $k$: determinant times $k$.',
        },
        {
          type: 'graph',
          x: [-5, 8],
          y: [-1, 6],
          equal: true,
          functions: [{ expr: '2 + (x - 1)/2', color: 'gray', dashed: true, label: 'where the tip of row 2 can slide' }],
          segments: [
            { from: [0, 0], to: [2, 1], arrow: true, color: 'blue', label: 'row 1' },
            { from: [0, 0], to: ['1 + 2k', '2 + k'], arrow: true, color: 'red', label: 'row 2 + k·row 1' },
            { from: [2, 1], to: ['3 + 2k', '3 + k'], dashed: true, color: 'purple' },
            { from: ['1 + 2k', '2 + k'], to: ['3 + 2k', '3 + k'], dashed: true, color: 'purple' },
          ],
          sliders: [{ name: 'k', min: -3, max: 2, step: 0.25, value: 0, label: '$k$' }],
          readouts: [{ label: '$\\det \\begin{bmatrix} 2 & 1 \\\\ 1 + 2k & 2 + k \\end{bmatrix} =$', expr: '2*(2 + k) - 1*(1 + 2k)', digits: 2 }],
          caption: 'The rows $(2, 1)$ and $(1, 2)$ span a parallelogram. The replacement $R_2 \\to R_2 + kR_1$ slides the tip of row 2 parallel to row 1: the parallelogram shears, but its base and height — and the determinant, $3$ — never change.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the rules hold for every size',
          text: '**Scaling:** expand along the scaled row; every term $a_{ij}C_{ij}$ picks up exactly one factor $k$. **Swap:** true for $2 \\times 2$ above; for larger $n$, expand along a row the swap did not touch — each minor has two of its rows swapped, so (by the smaller case) each minor flips sign, and so does the sum. A consequence: a matrix with **two equal rows** has determinant $0$, because swapping them changes nothing yet must flip the sign, and only $0 = -0$. **Replacement:** see the deep dive.',
        },
        {
          type: 'deepdive',
          title: 'Proof that replacement does not change the determinant',
          blocks: [
            {
              type: 'p',
              text: 'Let $B$ come from $A$ by $R_i \\to R_i + kR_l$ with $l \\ne i$. Rows other than $i$ are untouched, so the cofactors $C_{ij}$ along row $i$ are the same for $A$ and $B$. Expand $\\det B$ along row $i$:',
            },
            {
              type: 'math',
              tex: '\\det B = \\sum_{j} (a_{ij} + k\\,a_{lj})\\,C_{ij} = \\underbrace{\\sum_j a_{ij}C_{ij}}_{\\det A} + k \\underbrace{\\sum_j a_{lj}C_{ij}}_{=\\,0}',
            },
            {
              type: 'p',
              text: 'The second sum is the row-$i$ expansion of the matrix obtained from $A$ by copying row $l$ into row $i$. That matrix has two equal rows, so its determinant is $0$. Hence $\\det B = \\det A$.',
            },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'mcq',
      prompt: 'A $3 \\times 3$ matrix $A$ has $\\det A = 5$. Matrix $B$ is produced from $A$ by: swap $R_1 \\leftrightarrow R_3$, then $R_2 \\to 3R_2$, then $R_3 \\to R_3 - 4R_1$. What is $\\det B$?',
      hint: 'Track each operation separately: swap ($\\times(-1)$), scale ($\\times 3$), replacement ($\\times 1$).',
      options: [
        { text: '$15$', why: 'The scaling is accounted for, but the swap flips the sign.' },
        { text: '$-60$', why: 'A replacement $R_3 - 4R_1$ does **not** multiply the determinant by $-4$ (or $4$); it changes nothing.' },
        { text: '$-15$', correct: true, why: '$5 \\cdot (-1) \\cdot 3 \\cdot 1 = -15$.' },
        { text: '$-\\tfrac{5}{3}$', why: 'Scaling a row by $3$ multiplies the determinant by $3$; it does not divide.' },
      ],
      explanation: 'Swap: $\\det \\to -5$. Scaling row 2 by $3$: $\\det \\to -15$. Replacement: unchanged, $-15$. Only swaps and scalings affect a determinant; replacements — the operation used most in elimination — are free.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Computing determinants by row reduction',
      blocks: [
        {
          type: 'p',
          text: 'Now the fast method. Row reduce to an [[echelon-form]] using replacements (free) and swaps (each one flips the sign). An echelon form of a square matrix is upper triangular, so its determinant is the product of its diagonal — the [[pivot|pivots]].',
        },
        {
          type: 'steps',
          items: [
            { title: 'Eliminate', text: 'Use row replacements to create zeros below each pivot. If a pivot position holds $0$, swap in a lower row with a nonzero entry, and count the swap.' },
            { title: 'Factor if convenient', text: 'You may pull a common factor $k$ out of a row to simplify the numbers: $\\det A = k \\cdot \\det(\\text{new matrix})$.' },
            { title: 'Multiply the diagonal', text: 'Once the matrix $U$ is upper triangular, $\\det U = u_{11}u_{22}\\cdots u_{nn}$.' },
            { title: 'Fix the sign', text: '$\\det A = (-1)^{s} \\cdot (\\text{factors pulled out}) \\cdot \\det U$, where $s$ is the number of swaps.' },
          ],
        },
        {
          type: 'derivation',
          title: '$\\det A$ for $A = \\begin{bmatrix} 0 & 2 & -4 \\\\ 1 & 3 & 2 \\\\ 2 & 8 & 1 \\end{bmatrix}$',
          steps: [
            { tex: '\\det A = -\\begin{vmatrix} 1 & 3 & 2 \\\\ 0 & 2 & -4 \\\\ 2 & 8 & 1 \\end{vmatrix}', why: 'The $(1,1)$ entry is $0$, so swap $R_1 \\leftrightarrow R_2$. One swap: put a minus sign in front.' },
            { tex: '= -\\begin{vmatrix} 1 & 3 & 2 \\\\ 0 & 2 & -4 \\\\ 0 & 2 & -3 \\end{vmatrix}', why: '$R_3 \\to R_3 - 2R_1$: $(2, 8, 1) - (2, 6, 4) = (0, 2, -3)$. Replacement, no change.' },
            { tex: '= -\\begin{vmatrix} 1 & 3 & 2 \\\\ 0 & 2 & -4 \\\\ 0 & 0 & 1 \\end{vmatrix}', why: '$R_3 \\to R_3 - R_2$: $(0, 2, -3) - (0, 2, -4) = (0, 0, 1)$. Now upper triangular.' },
            { tex: '= -(1 \\cdot 2 \\cdot 1) = -2', why: 'Product of the diagonal, with the sign from the single swap.' },
          ],
          result: '$\\det A = -2$.',
        },
        {
          type: 'derivation',
          title: 'A $4 \\times 4$: $\\det\\begin{bmatrix} 2 & 4 & -2 & 6 \\\\ 1 & 3 & 1 & 2 \\\\ -1 & -1 & 4 & 0 \\\\ 3 & 5 & 2 & 9 \\end{bmatrix}$',
          steps: [
            { tex: '= 2\\begin{vmatrix} 1 & 2 & -1 & 3 \\\\ 1 & 3 & 1 & 2 \\\\ -1 & -1 & 4 & 0 \\\\ 3 & 5 & 2 & 9 \\end{vmatrix}', why: 'Factor $2$ out of row 1 (the scaling rule read backwards) to get a pivot of $1$.' },
            { tex: '= 2\\begin{vmatrix} 1 & 2 & -1 & 3 \\\\ 0 & 1 & 2 & -1 \\\\ 0 & 1 & 3 & 3 \\\\ 0 & -1 & 5 & 0 \\end{vmatrix}', why: '$R_2 - R_1$, $R_3 + R_1$, $R_4 - 3R_1$: three replacements, no change.' },
            { tex: '= 2\\begin{vmatrix} 1 & 2 & -1 & 3 \\\\ 0 & 1 & 2 & -1 \\\\ 0 & 0 & 1 & 4 \\\\ 0 & 0 & 7 & -1 \\end{vmatrix}', why: '$R_3 - R_2 = (0, 0, 1, 4)$ and $R_4 + R_2 = (0, 0, 7, -1)$.' },
            { tex: '= 2\\begin{vmatrix} 1 & 2 & -1 & 3 \\\\ 0 & 1 & 2 & -1 \\\\ 0 & 0 & 1 & 4 \\\\ 0 & 0 & 0 & -29 \\end{vmatrix}', why: '$R_4 - 7R_3$: $(0, 0, 7, -1) - (0, 0, 7, 28) = (0, 0, 0, -29)$.' },
            { tex: '= 2 \\cdot (1 \\cdot 1 \\cdot 1 \\cdot (-29)) = -58', why: 'Triangular: multiply the diagonal, then the factor $2$ pulled out at the start.' },
          ],
          result: '$\\det = -58$, with about a dozen multiplications instead of a $24$-term expansion.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'How numerical code computes a determinant',
          text: 'This is exactly the algorithm in linear-algebra libraries, usually packaged as an [[la-lu-decomposition|LU decomposition]], at about $n^3/3$ multiplications. With floating point there is one extra rule: **partial pivoting** — in each column, swap up the row with the largest absolute value, which keeps rounding errors from blowing up when a pivot is tiny. Each swap flips the sign, exactly as the theorem says.',
        },
        {
          type: 'code',
          title: 'det_elimination.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdio>
#include <utility>

constexpr int N = 4;

// Determinant by Gaussian elimination with partial pivoting.
// Reduces A in place.
double det(double A[N][N]) {
    double result = 1.0;
    for (int col = 0; col < N; ++col) {
        int p = col;                                   // row with largest |entry|
        for (int r = col + 1; r < N; ++r)
            if (std::fabs(A[r][col]) > std::fabs(A[p][col])) p = r;
        if (A[p][col] == 0.0) return 0.0;              // no pivot: singular
        if (p != col) {
            for (int c = 0; c < N; ++c) std::swap(A[p][c], A[col][c]);
            result = -result;                          // a swap flips the sign
        }
        result *= A[col][col];                         // multiply in the pivot
        for (int r = col + 1; r < N; ++r) {            // replacements: no change
            double m = A[r][col] / A[col][col];
            for (int c = col; c < N; ++c) A[r][c] -= m * A[col][c];
        }
    }
    return result;
}

int main() {
    double A[N][N] = {{2, 4, -2, 6},
                      {1, 3, 1, 2},
                      {-1, -1, 4, 0},
                      {3, 5, 2, 9}};
    std::printf("det A = %.6f\\n", det(A));
}`,
          output: 'det A = -58.000000',
          annotations: [
            { lines: '12-14', text: 'Partial pivoting: find the row with the largest entry in this column.' },
            { lines: 15, text: 'A column with no nonzero entry at or below the diagonal means no pivot, so $\\det A = 0$. (Real code compares against a small tolerance instead of exact $0$.)' },
            { lines: '16-19', text: 'Swap rows and flip the sign of the running determinant.' },
            { lines: 20, text: 'The pivot will sit on the diagonal of the triangular result, so multiply it in now.' },
            { lines: '21-24', text: 'Row replacements below the pivot — they do not change the determinant.' },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'numeric',
      prompt: 'Compute the determinant by row reducing to triangular form.',
      tex: '\\begin{vmatrix} 1 & 2 & 3 \\\\ 2 & 5 & 7 \\\\ -1 & 1 & 6 \\end{vmatrix}',
      hint: '$R_2 - 2R_1$ and $R_3 + R_1$ clear column 1. Then clear the entry below the second pivot.',
      label: '$\\det =$',
      answer: '6',
      explanation: '$R_2 - 2R_1 = (0, 1, 1)$ and $R_3 + R_1 = (0, 3, 9)$. Then $R_3 - 3R_2 = (0, 0, 6)$. The triangular matrix has diagonal $1, 1, 6$, and we used only replacements, so $\\det = 1 \\cdot 1 \\cdot 6 = 6$.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'error',
      prompt: 'A student computes $\\det A$ for $A = \\begin{bmatrix} 2 & 4 & 6 \\\\ 1 & 3 & 5 \\\\ 0 & 1 & 4 \\end{bmatrix}$ by row reduction. Tap the first line that is wrong.',
      lines: [
        '$\\det A = \\begin{vmatrix} 2 & 4 & 6 \\\\ 1 & 3 & 5 \\\\ 0 & 1 & 4 \\end{vmatrix}$',
        '$R_1 \\to \\tfrac12 R_1$: $\\;\\det A = \\begin{vmatrix} 1 & 2 & 3 \\\\ 1 & 3 & 5 \\\\ 0 & 1 & 4 \\end{vmatrix}$',
        '$R_2 \\to R_2 - R_1$: $\\;\\det A = \\begin{vmatrix} 1 & 2 & 3 \\\\ 0 & 1 & 2 \\\\ 0 & 1 & 4 \\end{vmatrix}$',
        '$R_3 \\to R_3 - R_2$: $\\;\\det A = \\begin{vmatrix} 1 & 2 & 3 \\\\ 0 & 1 & 2 \\\\ 0 & 0 & 2 \\end{vmatrix}$',
        '$\\det A = 1 \\cdot 1 \\cdot 2 = 2$',
      ],
      errorLines: [2],
      explanation: 'Line 2 scales row 1 by $\\tfrac12$, which multiplies the determinant by $\\tfrac12$ — so the new determinant is $\\tfrac12 \\det A$, not $\\det A$. The correct line is $\\det A = 2\\begin{vmatrix} 1 & 2 & 3 \\\\ 1 & 3 & 5 \\\\ 0 & 1 & 4 \\end{vmatrix}$ (factor the $2$ out front). The replacements afterwards are fine, so $\\det A = 2 \\cdot 2 = 4$. In row reduction for *solving systems*, scaling is harmless; for determinants you must record it.',
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'order',
      prompt: 'Put the steps of computing $\\det A$ by row reduction in order.',
      lines: [
        'If the first pivot position holds $0$, swap in a lower row and note one sign change',
        'Use row replacements to create zeros below each pivot, column by column',
        'Stop once the matrix is upper triangular',
        'Multiply the diagonal entries',
        'Multiply by $(-1)^s$ for the $s$ swaps (and by any factors pulled out of rows)',
      ],
      distractors: ['Scale every pivot to $1$ and ignore the scale factors'],
      explanation: 'Swaps and replacements produce an upper triangular matrix whose determinant is the product of its diagonal; the only bookkeeping is a sign for each swap and any factor you pulled out. You do **not** need reduced echelon form, and silently scaling pivots to $1$ changes the determinant.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: '$\\det A \\ne 0$ exactly when $A$ is invertible',
      blocks: [
        {
          type: 'p',
          text: 'The $2 \\times 2$ inverse formula hinted that a zero determinant means "no inverse". Row reduction proves it for every size.',
        },
        {
          type: 'theorem',
          name: 'Invertibility test',
          text: 'A square matrix $A$ is [[invertible-matrix|invertible]] if and only if $\\det A \\ne 0$.',
        },
        {
          type: 'derivation',
          title: 'Proof',
          steps: [
            { tex: 'A \\sim U \\text{ (echelon form, swaps and replacements only)}', why: 'Every matrix can be reduced to an echelon form $U$ without ever scaling a row.' },
            { tex: '\\det A = (-1)^{s}\\, \\det U = (-1)^{s}\\, u_{11}u_{22}\\cdots u_{nn}', why: 'Replacements change nothing, each of the $s$ swaps flips the sign, and $U$ is triangular.' },
            { tex: '\\det A \\ne 0 \\iff \\text{every } u_{ii} \\ne 0', why: '$(-1)^s$ is never zero, and a product is nonzero exactly when every factor is.' },
            { tex: '\\iff A \\text{ has } n \\text{ pivots} \\iff A \\text{ is invertible}', why: 'In a square echelon form, all diagonal entries are nonzero exactly when every column has a pivot — one of the equivalent conditions of the [[invertible-matrix-theorem]].' },
          ],
          result: 'So "$\\det A \\ne 0$" joins the Invertible Matrix Theorem: it is equivalent to $A$ having $n$ pivots, independent columns, $A\\mathbf{x} = \\mathbf{0}$ having only the trivial solution, and all the rest.',
        },
        {
          type: 'list',
          items: [
            'A row (or column) of zeros $\\implies \\det A = 0$.',
            'Two equal rows, or one row a multiple of another $\\implies \\det A = 0$.',
            'More generally, $\\det A = 0$ exactly when the columns (or rows) of $A$ are [[linear-dependence|linearly dependent]].',
          ],
        },
        {
          type: 'derivation',
          title: 'For which $k$ is $A = \\begin{bmatrix} k & 3 & 0 \\\\ 2 & k & 1 \\\\ 0 & 1 & 1 \\end{bmatrix}$ singular?',
          steps: [
            { tex: '\\det A = 0 \\cdot C_{31} + 1 \\cdot C_{32} + 1 \\cdot C_{33}', why: 'Expand along row 3, which has a zero. Signs along row 3: $+, -, +$.' },
            { tex: '= -\\begin{vmatrix} k & 0 \\\\ 2 & 1 \\end{vmatrix} + \\begin{vmatrix} k & 3 \\\\ 2 & k \\end{vmatrix}', why: '$C_{32}$ deletes row 3 and column 2 and carries a minus sign; $C_{33}$ deletes row 3 and column 3.' },
            { tex: '= -k + (k^2 - 6) = k^2 - k - 6', why: 'The two $2 \\times 2$ determinants are $k - 0$ and $k^2 - 6$.' },
            { tex: '= (k - 3)(k + 2) = 0 \\iff k = 3 \\text{ or } k = -2', why: 'Factor the quadratic and set the determinant to zero.' },
          ],
          result: '$A$ is singular for $k = 3$ and $k = -2$, and invertible for every other $k$.',
        },
        {
          type: 'graph',
          x: [-4, 5],
          y: [-8, 8],
          functions: [{ expr: 'x^2 - x - 6', label: '$\\det A$ as a function of $k$ (horizontal axis)' }],
          points: [
            { x: -2, y: 0, label: 'k = −2' },
            { x: 3, y: 0, label: 'k = 3' },
            { x: 'k', y: 'k^2 - k - 6', color: 'red' },
          ],
          sliders: [{ name: 'k', min: -4, max: 5, step: 0.25, value: 1, label: '$k$' }],
          readouts: [{ label: '$\\det A =$', expr: 'k^2 - k - 6', digits: 2 }],
          caption: 'The determinant is a polynomial in the entries. The matrix fails to be invertible only at the roots — a finite set of "bad" values.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Do not test singularity with `det == 0.0` in floating point',
          text: 'A small determinant does not mean "almost singular": $\\det(0.1 I_{20}) = 10^{-20}$ for a perfectly well-behaved matrix, and scaling a matrix changes its determinant enormously without changing how invertible it is. Numerical code checks pivots (or condition numbers) against a tolerance instead.',
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'numeric',
      prompt: 'Find **all** values of $k$ for which the matrix is not invertible. Enter them separated by commas.',
      tex: '\\begin{bmatrix} 1 & 1 & 1 \\\\ 1 & k & k^2 \\\\ 1 & 2 & 4 \\end{bmatrix}',
      hint: 'Row reduce: $R_2 - R_1$ and $R_3 - R_1$, then take the $2 \\times 2$ determinant that remains. Or look for values of $k$ that make two rows equal.',
      label: '$k =$',
      answer: ['1', '2'],
      explanation: '$R_2 - R_1 = (0,\\, k - 1,\\, k^2 - 1)$ and $R_3 - R_1 = (0, 1, 3)$, so $\\det = (k - 1)\\cdot 3 - (k^2 - 1)\\cdot 1 = -k^2 + 3k - 2 = -(k - 1)(k - 2)$. It vanishes at $k = 1$ (row 2 becomes equal to row 1) and $k = 2$ (row 2 becomes equal to row 3) — exactly the "two equal rows" situation.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'concept',
      title: 'Products: $\\det(AB) = \\det A \\cdot \\det B$',
      blocks: [
        {
          type: 'p',
          text: 'Determinants turn matrix multiplication — complicated, non-commutative — into ordinary multiplication of numbers.',
        },
        {
          type: 'theorem',
          name: 'Multiplicative property',
          tex: '\\det(AB) = (\\det A)(\\det B)',
          text: 'for any two $n \\times n$ matrices $A$ and $B$.',
        },
        {
          type: 'derivation',
          title: 'Check with $A = \\begin{bmatrix} 2 & 1 \\\\ 1 & 3 \\end{bmatrix}$, $B = \\begin{bmatrix} 1 & -1 \\\\ 2 & 4 \\end{bmatrix}$',
          steps: [
            { tex: '\\det A = 6 - 1 = 5, \\qquad \\det B = 4 + 2 = 6', why: 'The $2 \\times 2$ formula for each.' },
            { tex: 'AB = \\begin{bmatrix} 2 + 2 & -2 + 4 \\\\ 1 + 6 & -1 + 12 \\end{bmatrix} = \\begin{bmatrix} 4 & 2 \\\\ 7 & 11 \\end{bmatrix}', why: 'Row-times-column for each entry of the product.' },
            { tex: '\\det(AB) = 44 - 14 = 30 = 5 \\cdot 6', why: 'The determinant of the product equals the product of the determinants.' },
          ],
        },
        {
          type: 'derivation',
          title: 'Consequences',
          steps: [
            { tex: 'A A^{-1} = I \\implies \\det A \\cdot \\det(A^{-1}) = \\det I = 1', why: 'Take determinants of both sides and use the product rule; $\\det I = 1$ because $I$ is triangular with ones on the diagonal.' },
            { tex: '\\implies \\det(A^{-1}) = \\frac{1}{\\det A}', why: 'Divide — legal, because the previous line shows $\\det A \\ne 0$ whenever $A$ is invertible.' },
            { tex: '\\det(A^k) = (\\det A)^k', why: 'Apply the product rule $k - 1$ times to $A \\cdot A \\cdots A$.' },
            { tex: '\\det(AB) = \\det A \\det B = \\det B \\det A = \\det(BA)', why: 'Numbers commute even when matrices do not: $AB \\ne BA$ in general, yet their determinants agree.' },
          ],
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the product rule is true',
          text: 'If $A$ is singular, so is $AB$ (if $AB$ had an inverse $C$, then $A(BC) = I$ would make $A$ invertible), so both sides are $0$. If $A$ is invertible, write it as a product of [[elementary-matrix|elementary matrices]], $A = E_1E_2\\cdots E_p$. Multiplying $B$ on the left by an elementary matrix performs one row operation, so by this lesson\'s first theorem $\\det(EB) = \\det E \\cdot \\det B$, with $\\det E = 1$, $-1$ or $k$. Peel off one $E$ at a time and the rule follows. In the next lesson you will see the geometric reason: $|\\det|$ is the factor by which a transformation scales area, and doing two transformations scales area by the product of the factors.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Chained transforms in an engine',
          text: 'A world matrix is a product such as $T \\cdot R \\cdot S$ (translate, rotate, scale). Rotations have determinant $1$ and a translation\'s upper-left $3 \\times 3$ block is the identity, so the determinant of the upper-left $3 \\times 3$ block is just $s_x s_y s_z$ from the scale. You can read off "does this object get bigger, or mirrored?" without multiplying anything out.',
        },
      ],
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'truefalse',
      prompt: 'For any two $n \\times n$ matrices, $\\det(AB) = \\det(BA)$ — even when $AB \\ne BA$.',
      answer: true,
      explanation: 'True. $\\det(AB) = \\det A \\cdot \\det B$ and $\\det(BA) = \\det B \\cdot \\det A$, and multiplication of *numbers* is commutative. The matrices $AB$ and $BA$ can be completely different, yet they always share a determinant.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'Transposes, scalar multiples and linearity in a row',
      blocks: [
        {
          type: 'theorem',
          name: 'Transpose',
          tex: '\\det(A^{T}) = \\det A',
        },
        {
          type: 'p',
          text: 'Why: expanding $A^{T}$ along its first **row** is the same computation as expanding $A$ down its first **column** (the minors are transposes of each other, which have equal determinants by induction on size). The payoff: every statement about rows is also true about columns. Column replacements change nothing, column swaps flip the sign, a zero column forces $\\det = 0$.',
        },
        {
          type: 'theorem',
          name: 'Scalar multiple of an $n \\times n$ matrix',
          tex: '\\det(cA) = c^{n} \\det A',
        },
        {
          type: 'derivation',
          title: 'Why $c^n$ and not $c$',
          steps: [
            { tex: 'cA = \\text{(each of the } n \\text{ rows of } A \\text{ multiplied by } c)', why: 'Multiplying a matrix by a scalar multiplies **every** entry, so every row is scaled.' },
            { tex: '\\det(cA) = \\underbrace{c \\cdot c \\cdots c}_{n}\\, \\det A = c^n \\det A', why: 'Each row scaling multiplies the determinant by $c$, and there are $n$ of them.' },
            { tex: '3 \\times 3,\\ \\det A = 4: \\quad \\det(2A) = 2^3 \\cdot 4 = 32', why: 'Example: doubling all three rows multiplies the determinant by $8$, not $2$.' },
          ],
        },
        {
          type: 'theorem',
          name: 'Linearity in one row',
          tex: '\\begin{vmatrix} \\mathbf{r}_1 \\\\ \\mathbf{u} + \\mathbf{v} \\\\ \\mathbf{r}_3 \\end{vmatrix} = \\begin{vmatrix} \\mathbf{r}_1 \\\\ \\mathbf{u} \\\\ \\mathbf{r}_3 \\end{vmatrix} + \\begin{vmatrix} \\mathbf{r}_1 \\\\ \\mathbf{v} \\\\ \\mathbf{r}_3 \\end{vmatrix}, \\qquad \\begin{vmatrix} \\mathbf{r}_1 \\\\ c\\,\\mathbf{u} \\\\ \\mathbf{r}_3 \\end{vmatrix} = c\\begin{vmatrix} \\mathbf{r}_1 \\\\ \\mathbf{u} \\\\ \\mathbf{r}_3 \\end{vmatrix}',
          text: 'With all other rows held fixed, the determinant is a linear function of any single row (the same holds for columns).',
        },
        {
          type: 'p',
          text: 'Proof: expand along that row. The cofactors do not involve the row, so $\\sum_j (u_j + v_j)C_{ij} = \\sum_j u_jC_{ij} + \\sum_j v_jC_{ij}$. Note what linearity does **not** say: it lets you split *one* row while the others stay fixed. It does not let you split the whole matrix.',
        },
        {
          type: 'deepdive',
          title: 'Three properties that define the determinant',
          blocks: [
            {
              type: 'p',
              text: 'Strang\'s MIT course starts from the other end. Ask for a function of square matrices that (1) gives $\\det I = 1$, (2) flips sign when two rows are swapped, and (3) is linear in each row separately. Exactly one such function exists, and it is the determinant: properties (2) and (3) give the replacement rule, so any such function can be computed by row reduction, and the answer is forced. Cofactor expansion is then *derived* rather than assumed.',
            },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'mcq',
      prompt: 'Let $\\mathbf{r}_1, \\mathbf{r}_2, \\mathbf{r}_3, \\mathbf{s}$ be row vectors in $\\mathbb{R}^3$ with $\\det\\begin{bmatrix} \\mathbf{r}_1 \\\\ \\mathbf{r}_2 \\\\ \\mathbf{r}_3 \\end{bmatrix} = 5$ and $\\det\\begin{bmatrix} \\mathbf{r}_1 \\\\ \\mathbf{s} \\\\ \\mathbf{r}_3 \\end{bmatrix} = 2$. What is $\\det\\begin{bmatrix} \\mathbf{r}_1 \\\\ \\mathbf{r}_2 + 3\\mathbf{s} \\\\ \\mathbf{r}_3 \\end{bmatrix}$?',
      hint: 'Rows 1 and 3 are fixed, so the determinant is linear in row 2.',
      options: [
        { text: '$5$', why: 'This treats $\\mathbf{r}_2 + 3\\mathbf{s}$ like a row replacement. But $\\mathbf{s}$ is not one of the *other rows* of the matrix, so the replacement rule does not apply.' },
        { text: '$7$', why: 'Linearity also pulls the scalar out: the second determinant gets multiplied by $3$.' },
        { text: '$11$', correct: true, why: '$5 + 3 \\cdot 2 = 11$ by linearity in row 2.' },
        { text: '$21$', why: 'That multiplies both pieces by $3$; only the $\\mathbf{s}$ row was scaled.' },
      ],
      explanation: 'Linearity in row 2: $\\det[\\mathbf{r}_1;\\, \\mathbf{r}_2 + 3\\mathbf{s};\\, \\mathbf{r}_3] = \\det[\\mathbf{r}_1;\\, \\mathbf{r}_2;\\, \\mathbf{r}_3] + 3\\det[\\mathbf{r}_1;\\, \\mathbf{s};\\, \\mathbf{r}_3] = 5 + 6 = 11$. If $\\mathbf{s}$ had been $\\mathbf{r}_1$ or $\\mathbf{r}_3$, the second determinant would have two equal rows and vanish — that is exactly why replacement is free.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'fill',
      prompt: 'Complete the rules for an invertible $n \\times n$ matrix $A$ and a scalar $c$.',
      template: '$\\det(A^{-1}) =$ ___ , $\\quad \\det(cA) =$ ___ , $\\quad \\det(A^{T}) =$ ___',
      blanks: [{ answers: ['$\\dfrac{1}{\\det A}$'] }, { answers: ['$c^{n}\\det A$'] }, { answers: ['$\\det A$'] }],
      wordBank: ['$\\dfrac{1}{\\det A}$', '$c^{n}\\det A$', '$\\det A$', '$c\\,\\det A$', '$-\\det A$'],
      explanation: '$\\det(A^{-1}) = 1/\\det A$ because $\\det A \\det A^{-1} = \\det I = 1$. $\\det(cA) = c^n\\det A$ because all $n$ rows are scaled by $c$ (the tempting $c\\det A$ scales only one row). $\\det(A^T) = \\det A$, since expanding along rows of $A^T$ is expanding along columns of $A$. Nothing here produces $-\\det A$; only a row swap does that.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'concept',
      title: 'Classic mistakes, and the rules in one place',
      blocks: [
        {
          type: 'p',
          text: 'The determinant respects **products** but not **sums**. Most errors come from pretending otherwise.',
        },
        {
          type: 'compare',
          left: {
            title: 'Wrong',
            tone: 'bad',
            tex: ['\\det(A + B) = \\det A + \\det B', '\\det(cA) = c\\,\\det A', '\\det(A^{-1}) = -\\det A'],
          },
          right: {
            title: 'Right',
            tone: 'good',
            tex: ['\\det(AB) = \\det A \\cdot \\det B', '\\det(cA) = c^{n}\\det A', '\\det(A^{-1}) = 1/\\det A'],
          },
        },
        {
          type: 'p',
          text: 'One counterexample kills the sum rule. Take $A = B = I_2$: then $\\det(A + B) = \\det(2I_2) = 2^2 = 4$, but $\\det A + \\det B = 1 + 1 = 2$. There is no formula for $\\det(A + B)$ in terms of $\\det A$ and $\\det B$ at all.',
        },
        {
          type: 'table',
          headers: ['Operation or expression', 'Effect on the determinant'],
          rows: [
            ['Row (or column) replacement', 'unchanged'],
            ['Swap two rows (or columns)', 'multiplied by $-1$'],
            ['Scale one row (or column) by $k$', 'multiplied by $k$'],
            ['$AB$', '$\\det A \\cdot \\det B$'],
            ['$A^{T}$', '$\\det A$'],
            ['$A^{-1}$', '$1/\\det A$'],
            ['$A^{k}$', '$(\\det A)^{k}$'],
            ['$cA$ ($n \\times n$)', '$c^{n}\\det A$'],
            ['Triangular $A$', 'product of the diagonal'],
          ],
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'A favorite exam question: "If $A$ is $3 \\times 3$ with $\\det A = 2$, find $\\det(3A^{-1}A^{T})$" — and the like. Work from the outside in: scalar factor $c^n$ first, then split products, then handle each transpose, inverse and power. Always ask "how big is the matrix?" before touching the scalar.',
        },
      ],
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'numeric',
      prompt: '$A$ and $B$ are $3 \\times 3$ matrices with $\\det A = 2$ and $\\det B = -3$. Compute $\\det\\!\\left(2\\,A^{T} B^{2} A^{-1}\\right)$.',
      hint: 'The scalar contributes $2^3$. Then multiply $\\det A^{T}$, $\\det(B^2)$ and $\\det(A^{-1})$.',
      label: '$\\det =$',
      answer: '72',
      explanation: '$\\det(2M) = 2^3\\det M$ for a $3 \\times 3$ matrix $M$, and $\\det(A^TB^2A^{-1}) = \\det A^T \\cdot (\\det B)^2 \\cdot \\frac{1}{\\det A} = 2 \\cdot 9 \\cdot \\frac12 = 9$. So the answer is $8 \\cdot 9 = 72$. Notice $\\det A^T$ and $\\det A^{-1}$ cancel, and $(\\det B)^2 = 9$ is positive even though $\\det B$ is negative.',
    },
    // ------------------------------------------------------------------ 16
    {
      kind: 'mcq',
      prompt: '$A$ is a $4 \\times 4$ matrix with $\\det A = 3$. What is $\\det(-2A)$?',
      options: [
        { text: '$-6$', why: 'That is $c\\det A$ — it scales only one row by $-2$. All four rows are scaled.' },
        { text: '$-24$', why: 'That uses $(-2)^3$, the factor for a $3 \\times 3$ matrix. Here $n = 4$.' },
        { text: '$48$', correct: true, why: '$(-2)^4 \\cdot 3 = 16 \\cdot 3 = 48$.' },
        { text: '$-48$', why: 'An even power of $-2$ is positive: $(-2)^4 = 16$.' },
      ],
      explanation: '$\\det(cA) = c^n\\det A$ with $c = -2$ and $n = 4$: $(-2)^4 \\cdot 3 = 48$. In particular $\\det(-A) = \\det A$ for even $n$ but $-\\det A$ for odd $n$ — negating a $3 \\times 3$ matrix flips its determinant, negating a $4 \\times 4$ does not.',
    },
  ],
  takeaways: [
    'Row replacement leaves $\\det$ unchanged, a row swap flips its sign, and scaling a row by $k$ multiplies it by $k$; the same holds for columns because $\\det A^{T} = \\det A$.',
    'Fast method: reduce to triangular form with replacements and swaps, multiply the diagonal, and attach $(-1)^{\\#\\text{swaps}}$ — about $n^3/3$ work instead of $n!$.',
    '$A$ is invertible if and only if $\\det A \\ne 0$ — another condition in the Invertible Matrix Theorem.',
    '$\\det(AB) = \\det A \\det B$, so $\\det(A^{-1}) = 1/\\det A$, $\\det(A^k) = (\\det A)^k$, and $\\det(AB) = \\det(BA)$.',
    '$\\det(cA) = c^n \\det A$ for an $n \\times n$ matrix, and the determinant is linear in each row separately — but $\\det(A + B) \\ne \\det A + \\det B$ in general.',
  ],
  reading: [
    {
      title: 'MIT OCW 18.06 (Strang) — Linear Algebra',
      url: 'https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/',
      source: 'other',
      note: 'Lecture 18, "Properties of Determinants", derives all of these rules from three defining properties.',
    },
    {
      title: '3Blue1Brown — Essence of linear algebra',
      url: 'https://www.3blue1brown.com/topics/linear-algebra',
      source: 'video',
      note: 'The chapter on the determinant shows visually why $\\det(AB) = \\det A \\det B$: area scale factors multiply.',
    },
    {
      title: 'Interactive Linear Algebra (Margalit & Rabinoff)',
      url: 'https://textbooks.math.gatech.edu/ila/',
      source: 'book',
      note: 'The "Determinants: Definition" section computes determinants by row reduction and proves the multiplicative property.',
    },
    {
      title: 'Wikipedia — Determinant',
      url: 'https://en.wikipedia.org/wiki/Determinant',
      source: 'wikipedia',
      note: 'A compact list of properties, including multilinearity and the characterization by $\\det I = 1$, alternation and linearity.',
    },
  ],
};
