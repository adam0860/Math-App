import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'alg-systems-matrices',
  title: 'Three Variables and Matrix Row Reduction',
  summary: 'Scale elimination up to three unknowns, then strip away the variables and let a matrix do the bookkeeping.',
  minutes: 20,
  objectives: [
    'Solve a system of three linear equations in three variables by elimination and back-substitution',
    'Write the augmented matrix of a system and translate a matrix back into equations',
    'Perform the three elementary row operations and explain why they preserve the solution set',
    'Use Gaussian elimination to reach row-echelon form and solve by back-substitution',
    'Recognise inconsistent and dependent systems in a reduced matrix and write a parametric solution',
    'Write a system as a matrix equation $A\\mathbf{x} = \\mathbf{b}$ — the starting point of linear algebra',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Three unknowns, three equations',
      blocks: [
        {
          type: 'p',
          text: 'Many problems have more than two unknowns: the $x$, $y$ and $z$ coordinates of a point in a 3D game world, or three prices, or three forces. A linear equation in three variables looks like $ax + by + cz = d$, and a solution of a system is an **ordered triple** $(x, y, z)$ that makes every equation true.',
        },
        {
          type: 'math',
          tex: '\\begin{cases} x + y + z = 6 \\\\ 2x - y + z = 3 \\\\ x + 2y - z = 2 \\end{cases}',
          caption: 'Our running example. Its solution turns out to be $(1, 2, 3)$.',
        },
        {
          type: 'p',
          text: 'Check: $1 + 2 + 3 = 6$, $2 - 2 + 3 = 3$ and $1 + 4 - 3 = 2$. All three hold. As before, satisfying one or two equations is not enough.',
        },
        {
          type: 'p',
          text: 'Geometrically, the graph of $ax + by + cz = d$ in 3D space is a **plane** — a flat sheet. Three planes can meet in a single point (one solution), share a whole line (infinitely many), or have no point common to all three (no solution — for example, two parallel sheets). The same three cases as for lines: one, infinitely many, or none.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why we usually need three equations',
          text: 'Think of each unknown as a *degree of freedom* — a direction you can still move. With no equations, a point can be anywhere in space. One equation pins it to a plane (2 freedoms left), a second independent equation cuts that plane down to a line (1 left), and a third pins down a point (0 left). "Independent" matters: an equation that is just a combination of the others removes nothing.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'mcq',
      prompt: 'Which ordered triple is a solution of this system?',
      tex: '\\begin{cases} x + y + z = 4 \\\\ 2x + y - z = 0 \\\\ x - 2y + z = 7 \\end{cases}',
      hint: 'Test each triple in all three equations. Several pass the first equation.',
      options: [
        { text: '$(1, 0, 3)$', why: 'First equation: $4$ ✓. Second: $2 + 0 - 3 = -1 \\ne 0$ ✗.' },
        { text: '$(3, -1, 2)$', why: 'First: $4$ ✓. Third: $3 + 2 + 2 = 7$ ✓. But second: $6 - 1 - 2 = 3 \\ne 0$ ✗ — two out of three is not a solution.' },
        { text: '$(0, 1, 3)$', why: 'First: $4$ ✓. Second: $0 + 1 - 3 = -2 \\ne 0$ ✗.' },
        { text: '$(2, -1, 3)$', correct: true, why: '$2 - 1 + 3 = 4$, $4 - 1 - 3 = 0$ and $2 + 2 + 3 = 7$. All three hold.' },
      ],
      explanation: 'Every option satisfies the first equation, and $(3, -1, 2)$ even satisfies the third — but only $(2, -1, 3)$ satisfies all three. In 3D terms, the other triples lie on one or two of the planes, but not at the point where all three meet.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Elimination in three variables',
      blocks: [
        {
          type: 'p',
          text: 'The strategy is to reduce the problem to one you already know. Use elimination **twice** to remove the same variable, giving a $2 \\times 2$ system; solve that; then back-substitute to get the third variable.',
        },
        {
          type: 'derivation',
          title: 'Solve the running example',
          steps: [
            { tex: '\\text{(1) } x + y + z = 6 \\quad \\text{(2) } 2x - y + z = 3 \\quad \\text{(3) } x + 2y - z = 2', why: 'Label the equations so each step can say what it combines.' },
            { tex: '(1) + (3): \\quad 2x + 3y = 8', why: 'Equation (3) has $-z$ and (1) has $+z$, so adding eliminates $z$. Call this (A).' },
            { tex: '(2) + (3): \\quad 3x + y = 5', why: 'Eliminate the **same** variable $z$ again, using a different pair. Call this (B). Eliminating a different variable here would leave you with three unknowns still.' },
            { tex: '3 \\times (B) - (A): \\quad 9x + 3y - 2x - 3y = 15 - 8', why: 'Now (A) and (B) are a $2 \\times 2$ system in $x$ and $y$. Scale (B) by $3$ to match the $3y$ in (A), then subtract.' },
            { tex: '7x = 7 \\implies x = 1', why: 'The $y$-terms cancel; divide by $7$.' },
            { tex: '3(1) + y = 5 \\implies y = 2', why: 'Back-substitute $x = 1$ into (B).' },
            { tex: '1 + 2 + z = 6 \\implies z = 3', why: 'Back-substitute both values into (1).' },
            { tex: '2(1) - 2 + 3 = 3 \\;\\checkmark \\qquad 1 + 2(2) - 3 = 2 \\;\\checkmark', why: 'Check in the equations not used in the last step.' },
          ],
          result: 'The solution is $(x, y, z) = (1, 2, 3)$.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Choosing the variable to eliminate',
          text: 'Pick the variable whose coefficients are already $\\pm 1$ or opposites in several equations — here $z$ had coefficients $+1, +1, -1$, so two plain additions did the job. A little scanning before you start saves a lot of arithmetic.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'numeric',
      prompt: 'Solve the system. What is $y$?',
      tex: '\\begin{cases} x + y + z = 0 \\\\ 2x + y - z = 0 \\\\ x - y + 2z = 7 \\end{cases}',
      hint: 'Add the first two equations to eliminate $z$. Then add $2\\times$ (second) to the third to eliminate $z$ again.',
      label: '$y =$',
      answer: '-3',
      explanation: '(1) + (2): $3x + 2y = 0$. $2 \\times$(2) + (3): $4x + 2y - 2z + x - y + 2z = 0 + 7$, i.e. $5x + y = 7$. From the second, $y = 7 - 5x$; substituting: $3x + 14 - 10x = 0$, so $x = 2$ and $y = -3$. Then (1) gives $z = 0 - 2 + 3 = 1$. Check (3): $2 + 3 + 2 = 7$ ✓. Solution $(2, -3, 1)$.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Augmented matrices: just the numbers',
      blocks: [
        {
          type: 'p',
          text: 'Look back at that elimination: the letters $x$, $y$, $z$ never did anything. They just sat in their columns while the **coefficients** changed. So we drop them and keep only the numbers, arranged in a rectangular grid called a [[matrix]].',
        },
        {
          type: 'definition',
          term: 'Augmented matrix',
          text: 'The [[augmented-matrix]] of a linear system has one **row** per equation and one **column** per variable, plus a final column (after a bar) for the constants. A matrix with $m$ rows and $n$ columns is called an $m \\times n$ matrix.',
        },
        {
          type: 'math',
          tex: '\\begin{cases} x + y + z = 6 \\\\ 2x - y + z = 3 \\\\ x + 2y - z = 2 \\end{cases} \\quad \\longleftrightarrow \\quad \\left[\\begin{array}{ccc|c} 1 & 1 & 1 & 6 \\\\ 2 & -1 & 1 & 3 \\\\ 1 & 2 & -1 & 2 \\end{array}\\right]',
          caption: 'Column 1 holds the $x$-coefficients, column 2 the $y$-coefficients, column 3 the $z$-coefficients; the bar stands for the equals signs.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Missing variables are zeros',
          text: 'Before writing the matrix, line up the variables in the same order in every equation. If a variable is missing, its coefficient is $0$ and you **must** write that $0$: the equation $3x - z = 1$ becomes the row $[\\,3 \\;\\; 0 \\;\\; {-1} \\mid 1\\,]$. Skipping it would shift the $-1$ into the $y$ column and describe a different equation.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Matrices are 2D arrays',
          text: 'In code an augmented matrix is simply `double M[3][4]` — or `std::vector<std::vector<double>>` for any size — where `M[i][j]` is row $i$, column $j$. Every operation in this lesson is a loop over one row. That is why matrices, not equations with letters, are how computers (and GPUs) handle linear systems.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'fill',
      prompt: 'Write the augmented matrix of this system, with columns in the order $x, y, z$.',
      tex: '\\begin{cases} x + 2y - z = 4 \\\\ 3x - z = 1 \\\\ 5y + 2z = 0 \\end{cases}',
      template: 'Row 2 of the matrix is ___ and row 3 is ___.',
      blanks: [{ answers: ['$[\\,3 \\;\\; 0 \\;\\; {-1} \\mid 1\\,]$'] }, { answers: ['$[\\,0 \\;\\; 5 \\;\\; 2 \\mid 0\\,]$'] }],
      wordBank: [
        '$[\\,3 \\;\\; 0 \\;\\; {-1} \\mid 1\\,]$',
        '$[\\,3 \\;\\; {-1} \\mid 1\\,]$',
        '$[\\,3 \\;\\; 0 \\;\\; 1 \\mid 1\\,]$',
        '$[\\,0 \\;\\; 5 \\;\\; 2 \\mid 0\\,]$',
        '$[\\,5 \\;\\; 2 \\;\\; 0 \\mid 0\\,]$',
      ],
      explanation: 'Equation 2, $3x - z = 1$, has no $y$, so its $y$-entry is $0$: $[\\,3 \\;\\; 0 \\;\\; {-1} \\mid 1\\,]$. Equation 3, $5y + 2z = 0$, has no $x$: $[\\,0 \\;\\; 5 \\;\\; 2 \\mid 0\\,]$. Dropping the zeros (or losing the minus sign on $-z$) would encode different equations. The full matrix is $\\left[\\begin{smallmatrix} 1 & 2 & -1 & | & 4 \\\\ 3 & 0 & -1 & | & 1 \\\\ 0 & 5 & 2 & | & 0 \\end{smallmatrix}\\right]$.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'The three row operations',
      blocks: [
        {
          type: 'p',
          text: 'Every move in elimination corresponds to an operation on the rows of the matrix. There are exactly three, called the elementary [[row-operations]]:',
        },
        {
          type: 'table',
          headers: ['Operation', 'Notation', 'In equation language', 'Undone by'],
          rows: [
            ['Swap two rows', '$R_1 \\leftrightarrow R_2$', 'list the equations in a different order', 'swapping back'],
            ['Scale a row by $k \\neq 0$', '$R_2 \\to 3R_2$', 'multiply both sides of an equation by $k$', 'scaling by $\\frac{1}{k}$'],
            ['Add a multiple of another row', '$R_2 \\to R_2 - 2R_1$', 'replace an equation by itself plus a multiple of another', '$R_2 \\to R_2 + 2R_1$'],
          ],
          caption: 'Read $R_2 \\to R_2 - 2R_1$ as "replace row 2 by row 2 minus twice row 1". Row 1 itself does not change.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why row operations never change the solutions',
          text: 'Each operation is a legal move on equations, so any solution of the old system still solves the new one. And each operation can be **undone** by another row operation (last column of the table), so any solution of the new system also solves the old one. Same solutions both ways: the systems are *equivalent*. That is also why scaling by $0$ is banned — it erases an equation and cannot be undone.',
        },
        {
          type: 'p',
          text: 'You can watch this on a $2 \\times 2$ system. The rows $[\\,2 \\;\\; 1 \\mid 4\\,]$ and $[\\,4 \\;\\; 3 \\mid 10\\,]$ are the lines $2x + y = 4$ and $4x + 3y = 10$, which meet at $(1, 2)$. The operation $R_2 \\to R_2 + kR_1$ replaces the second line with $(4 + 2k)x + (3 + k)y = 10 + 4k$:',
        },
        {
          type: 'graph',
          x: [-2, 4],
          y: [-2, 6],
          functions: [
            { expr: '4 - 2x', label: '$R_1$: $2x + y = 4$', color: 'blue' },
            { expr: '(10 + 4k - (4 + 2k)x)/(3 + k)', label: 'new $R_2$', color: 'red' },
          ],
          points: [{ x: 1, y: 2, label: '(1, 2)' }],
          sliders: [{ name: 'k', min: -2.5, max: 2, step: 0.1, value: 0, label: '$k$ in $R_2 \\to R_2 + kR_1$' }],
          readouts: [{ label: 'new row 2: $x$-entry $4 + 2k =$', expr: '4 + 2k', digits: 2 }],
          caption: 'The red line pivots around the solution $(1, 2)$ but never leaves it. At $k = -2$ the $x$-entry becomes $0$ and the line is horizontal: $y = 2$. That is the row operation elimination would choose.',
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'mcq',
      prompt: 'Apply $R_2 \\to R_2 - 3R_1$ to this matrix. What is the new row 2?',
      tex: '\\left[\\begin{array}{cc|c} 1 & 2 & 5 \\\\ 3 & 4 & 6 \\end{array}\\right]',
      hint: 'Compute $3R_1 = [\\,3 \\;\\; 6 \\mid 15\\,]$, then subtract it from $R_2$ entry by entry — including the last column.',
      options: [
        { text: '$[\\,0 \\;\\; {-2} \\mid 6\\,]$', why: 'The constant column was left alone. Row operations act on the **whole** row: $6 - 3(5) = -9$.' },
        { text: '$[\\,0 \\;\\; 2 \\mid 9\\,]$', why: 'This is $3R_1 - R_2$: the subtraction is backwards, flipping every sign.' },
        { text: '$[\\,0 \\;\\; {-2} \\mid {-9}\\,]$', correct: true, why: '$[\\,3 - 3 \\;\\; 4 - 6 \\mid 6 - 15\\,] = [\\,0 \\;\\; {-2} \\mid {-9}\\,]$.' },
        { text: '$[\\,2 \\;\\; 2 \\mid 1\\,]$', why: 'This is $R_2 - R_1$: the multiplier $3$ was forgotten.' },
      ],
      explanation: 'Entry by entry: $3 - 3 \\cdot 1 = 0$, $4 - 3 \\cdot 2 = -2$, $6 - 3 \\cdot 5 = -9$. The new matrix says $x + 2y = 5$ and $-2y = -9$, so $y = 4.5$ and $x = 5 - 9 = -4$. Row 1 is unchanged by this operation.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'concept',
      title: 'Gaussian elimination',
      blocks: [
        {
          type: 'p',
          text: '[[gaussian-elimination]] is elimination run in a fixed order, column by column, so it always works — for $3$ unknowns or $3$ million. The goal is a staircase shape called [[row-echelon-form]]: each row\'s first nonzero entry (its **pivot**) sits to the right of the pivot above it, with only zeros below every pivot.',
        },
        {
          type: 'steps',
          items: [
            { title: 'First column', text: 'Get a nonzero pivot at the top (swap rows if needed), then add multiples of row 1 to make every entry **below** it zero.' },
            { title: 'Next column', text: 'Ignore row 1. In the rows below, repeat: pivot, then zeros below it.' },
            { title: 'Repeat', text: 'Continue until the matrix is a staircase (row-echelon form).' },
            { title: 'Back-substitute', text: 'Turn the last row back into an equation, solve it, and substitute upward ([[back-substitution]]).' },
          ],
        },
        {
          type: 'derivation',
          title: 'Row-reduce the running example',
          steps: [
            { tex: '\\left[\\begin{array}{ccc|c} 1 & 1 & 1 & 6 \\\\ 2 & -1 & 1 & 3 \\\\ 1 & 2 & -1 & 2 \\end{array}\\right]', why: 'Start with the augmented matrix. The top-left $1$ is a convenient first pivot.' },
            { tex: '\\xrightarrow{\\substack{R_2 - 2R_1 \\\\ R_3 - R_1}} \\left[\\begin{array}{ccc|c} 1 & 1 & 1 & 6 \\\\ 0 & -3 & -1 & -9 \\\\ 0 & 1 & -2 & -4 \\end{array}\\right]', why: 'Clear column 1 below the pivot. Row 2: $[2-2,\\; -1-2,\\; 1-2 \\mid 3-12]$. Row 3: $[1-1,\\; 2-1,\\; -1-1 \\mid 2-6]$.' },
            { tex: '\\xrightarrow{R_2 \\leftrightarrow R_3} \\left[\\begin{array}{ccc|c} 1 & 1 & 1 & 6 \\\\ 0 & 1 & -2 & -4 \\\\ 0 & -3 & -1 & -9 \\end{array}\\right]', why: 'Swap to bring a $1$ into the second pivot position — it keeps the next step free of fractions. (Optional, but tidy.)' },
            { tex: '\\xrightarrow{R_3 + 3R_2} \\left[\\begin{array}{ccc|c} 1 & 1 & 1 & 6 \\\\ 0 & 1 & -2 & -4 \\\\ 0 & 0 & -7 & -21 \\end{array}\\right]', why: 'Clear below the second pivot: $[0,\\; -3+3,\\; -1-6 \\mid -9-12]$. Now the matrix is in row-echelon form.' },
            { tex: '-7z = -21 \\implies z = 3', why: 'Translate the last row back into an equation.' },
            { tex: 'y - 2z = -4 \\implies y = -4 + 6 = 2', why: 'Row 2 as an equation; substitute $z = 3$.' },
            { tex: 'x + y + z = 6 \\implies x = 6 - 2 - 3 = 1', why: 'Row 1; substitute $y$ and $z$.' },
          ],
          result: 'Same answer as before, $(1, 2, 3)$ — but now every step was a mechanical row operation.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'The algorithm in C++',
          text: 'Below is Gaussian elimination as a program. Real libraries add **partial pivoting** — using the largest available entry as each pivot — because dividing by a tiny pivot amplifies floating-point rounding errors. For an $n \\times n$ system the work grows like $n^3$, which is why solving huge systems (physics, graphics, machine learning) is a serious computing job.',
        },
        {
          type: 'code',
          title: 'gauss.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdio>
#include <utility>

int main() {
    // x + y + z = 6,  2x - y + z = 3,  x + 2y - z = 2
    double M[3][4] = {{1, 1, 1, 6},
                      {2, -1, 1, 3},
                      {1, 2, -1, 2}};
    const int n = 3;

    // Forward elimination: create zeros below each pivot
    for (int col = 0; col < n; ++col) {
        int best = col;  // partial pivoting: largest |entry| becomes the pivot
        for (int r = col + 1; r < n; ++r)
            if (std::fabs(M[r][col]) > std::fabs(M[best][col])) best = r;
        for (int j = 0; j <= n; ++j) std::swap(M[col][j], M[best][j]);

        for (int r = col + 1; r < n; ++r) {
            double factor = M[r][col] / M[col][col];
            for (int j = col; j <= n; ++j) M[r][j] -= factor * M[col][j];
        }
    }

    // Back-substitution: solve the bottom row first, then work upward
    double sol[3];
    for (int i = n - 1; i >= 0; --i) {
        double s = M[i][n];
        for (int j = i + 1; j < n; ++j) s -= M[i][j] * sol[j];
        sol[i] = s / M[i][i];
    }
    std::printf("x = %g, y = %g, z = %g\\n", sol[0], sol[1], sol[2]);
}`,
          output: 'x = 1, y = 2, z = 3',
          annotations: [
            { lines: '7-9', text: 'The augmented matrix, stored as a 2D array.' },
            { lines: '14-17', text: 'Partial pivoting: swap the row with the largest entry in this column to the pivot position (row operation 1).' },
            { lines: '19-22', text: 'Row operation 3: $R_r \\to R_r - (\\text{factor})\\,R_{\\text{col}}$, chosen so the entry below the pivot becomes $0$.' },
            { lines: '26-31', text: 'Back-substitution from the bottom row up.' },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'order',
      prompt: 'Put the steps of Gaussian elimination for a $3 \\times 3$ system in order.',
      lines: [
        'Write the augmented matrix',
        'Use row 1\'s pivot to make the entries below it in column 1 zero',
        'Use row 2\'s pivot to make the entry below it in column 2 zero',
        'Solve the last row for $z$',
        'Back-substitute to find $y$, then $x$',
      ],
      distractors: ['Make the entries in the last column zero'],
      explanation: 'Gaussian elimination works column by column, left to right, creating zeros **below** each pivot until the matrix is a staircase; then back-substitution runs bottom to top. The constants column is never "zeroed out" — it carries the right-hand sides along and holds the answers.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'numeric',
      prompt: 'This augmented matrix is already in row-echelon form. Use back-substitution to find $x$.',
      tex: '\\left[\\begin{array}{ccc|c} 1 & -1 & 2 & 5 \\\\ 0 & 1 & 3 & 7 \\\\ 0 & 0 & 2 & 4 \\end{array}\\right]',
      hint: 'Row 3 says $2z = 4$. Row 2 says $y + 3z = 7$. Row 1 says $x - y + 2z = 5$.',
      label: '$x =$',
      answer: '2',
      explanation: 'From the bottom: $2z = 4$ gives $z = 2$. Then $y + 3(2) = 7$ gives $y = 1$. Finally $x - 1 + 2(2) = 5$ gives $x = 5 + 1 - 4 = 2$. The solution is $(2, 1, 2)$.',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'concept',
      title: 'Reduced form and the special cases',
      blocks: [
        {
          type: 'p',
          text: 'You can keep going past row-echelon form: scale each pivot to $1$ and also clear the entries **above** each pivot. The result, **reduced row-echelon form**, needs no back-substitution — the answer is printed in the last column. This version is called Gauss–Jordan elimination.',
        },
        {
          type: 'math',
          tex: '\\left[\\begin{array}{ccc|c} 1 & 0 & 0 & 1 \\\\ 0 & 1 & 0 & 2 \\\\ 0 & 0 & 1 & 3 \\end{array}\\right] \\quad \\Longleftrightarrow \\quad x = 1,\\; y = 2,\\; z = 3',
          caption: 'The reduced form of the running example.',
        },
        {
          type: 'p',
          text: 'Row reduction also detects the other two cases automatically. Consider $x + 2z = 3$, $y - z = 1$ and $x + y + z = 4$. The third equation is just the sum of the first two, so $R_3 \\to R_3 - R_1 - R_2$ wipes it out:',
        },
        {
          type: 'math',
          tex: '\\left[\\begin{array}{ccc|c} 1 & 0 & 2 & 3 \\\\ 0 & 1 & -1 & 1 \\\\ 1 & 1 & 1 & 4 \\end{array}\\right] \\xrightarrow{R_3 - R_1 - R_2} \\left[\\begin{array}{ccc|c} 1 & 0 & 2 & 3 \\\\ 0 & 1 & -1 & 1 \\\\ 0 & 0 & 0 & 0 \\end{array}\\right]',
        },
        {
          type: 'derivation',
          title: 'Read off the solution set',
          steps: [
            { tex: '0x + 0y + 0z = 0', why: 'The zero row says $0 = 0$: always true, no information. The system is consistent but dependent.' },
            { tex: 'z = t \\quad (t \\text{ any real number})', why: 'Column 3 has no pivot, so $z$ is a [[free-variable]]: it can be anything. Name its value $t$.' },
            { tex: 'y - z = 1 \\implies y = 1 + t', why: 'Row 2, solved for its pivot variable $y$.' },
            { tex: 'x + 2z = 3 \\implies x = 3 - 2t', why: 'Row 1, solved for its pivot variable $x$.' },
          ],
          result: 'Infinitely many solutions: $(x, y, z) = (3 - 2t,\\; 1 + t,\\; t)$. For instance $t = 0$ gives $(3, 1, 0)$ and $t = 1$ gives $(1, 2, 1)$. Geometrically, the three planes share a whole line.',
        },
        {
          type: 'table',
          headers: ['You find a row like…', 'It means', 'Solutions'],
          rows: [
            ['$[\\,0 \\;\\; 0 \\;\\; 0 \\mid 5\\,]$', '$0 = 5$, a contradiction ([[inconsistent-system|inconsistent]])', 'none'],
            ['$[\\,0 \\;\\; 0 \\;\\; 0 \\mid 0\\,]$ and a column with no pivot', '$0 = 0$; at least one free variable ([[dependent-system|dependent]])', 'infinitely many'],
            ['a pivot in every variable column, no contradiction', 'every variable is determined', 'exactly one'],
          ],
          caption: 'If the third equation above were $x + y + z = 5$ instead, the same row operation would leave $[\\,0 \\;\\; 0 \\;\\; 0 \\mid 1\\,]$: no solution.',
        },
      ],
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'truefalse',
      prompt: 'If row reduction produces a row of all zeros, $[\\,0 \\;\\; 0 \\;\\; 0 \\mid 0\\,]$, the system has no solution.',
      answer: false,
      explanation: 'An all-zero row means $0x + 0y + 0z = 0$, which is always **true** — that equation was redundant (a combination of the others). It signals a possible free variable and infinitely many solutions, not a contradiction. "No solution" is the row $[\\,0 \\;\\; 0 \\;\\; 0 \\mid c\\,]$ with $c \\ne 0$, which says $0 = c$.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'error',
      prompt: 'A student solves $\\begin{cases} 2x + y = 4 \\\\ 4x + 3y = 10 \\end{cases}$ with row operations. Tap the first line that is wrong.',
      lines: [
        'Augmented matrix: $\\left[\\begin{smallmatrix} 2 & 1 & | & 4 \\\\ 4 & 3 & | & 10 \\end{smallmatrix}\\right]$',
        '$R_2 \\to R_2 - 2R_1$ gives the new row 2: $[\\,0 \\;\\; 1 \\mid 6\\,]$',
        'Row 2 says $y = 6$',
        'Row 1: $2x + 6 = 4$, so $x = -1$',
      ],
      errorLines: [2],
      explanation: 'In line 2 the constant was computed as $10 - 4 = 6$, forgetting to multiply row 1\'s constant by $2$. Correctly, $10 - 2 \\cdot 4 = 2$, so row 2 is $[\\,0 \\;\\; 1 \\mid 2\\,]$, giving $y = 2$ and $2x + 2 = 4$, so $x = 1$. Check: $4(1) + 3(2) = 10$ ✓. The student\'s $(-1, 6)$ fails it: $-4 + 18 = 14$.',
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'concept',
      title: 'The bridge to linear algebra: $A\\mathbf{x} = \\mathbf{b}$',
      blocks: [
        {
          type: 'p',
          text: 'In linear algebra a system is written as a single equation between matrices. Split the augmented matrix at the bar: the **coefficient matrix** $A$, the column of unknowns $\\mathbf{x}$, and the column of constants $\\mathbf{b}$.',
        },
        {
          type: 'math',
          tex: '\\underbrace{\\begin{bmatrix} 1 & 1 & 1 \\\\ 2 & -1 & 1 \\\\ 1 & 2 & -1 \\end{bmatrix}}_{A} \\underbrace{\\begin{bmatrix} x \\\\ y \\\\ z \\end{bmatrix}}_{\\mathbf{x}} = \\underbrace{\\begin{bmatrix} 6 \\\\ 3 \\\\ 2 \\end{bmatrix}}_{\\mathbf{b}}',
          caption: 'Multiplying row $i$ of $A$ by the column $\\mathbf{x}$ (multiply matching entries and add) gives the left side of equation $i$.',
        },
        {
          type: 'p',
          text: 'There is a second way to read the same equation, column by column. It says that some combination of the **columns** of $A$ adds up to $\\mathbf{b}$:',
        },
        {
          type: 'math',
          tex: 'x\\begin{bmatrix} 1 \\\\ 2 \\\\ 1 \\end{bmatrix} + y\\begin{bmatrix} 1 \\\\ -1 \\\\ 2 \\end{bmatrix} + z\\begin{bmatrix} 1 \\\\ 1 \\\\ -1 \\end{bmatrix} = \\begin{bmatrix} 6 \\\\ 3 \\\\ 2 \\end{bmatrix}',
          caption: 'With $(x, y, z) = (1, 2, 3)$: $\\;(1 + 2 + 3,\\; 2 - 2 + 3,\\; 1 + 4 - 3) = (6, 3, 2)$ ✓.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why this viewpoint matters',
          text: 'The column picture turns "solve a system" into "can these vectors be combined to reach $\\mathbf{b}$?" — a question about **linear combinations**, the central idea of linear algebra. A unique solution exists for every $\\mathbf{b}$ exactly when row reduction puts a pivot in every column of a square $A$; then $A$ has an **inverse** $A^{-1}$ and $\\mathbf{x} = A^{-1}\\mathbf{b}$, just as $3x = 6$ gives $x = 3^{-1} \\cdot 6$.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Where you will meet this in CS',
          text: 'Every 3D game multiplies matrices by vectors thousands of times per frame to rotate, scale and project models (a vertex is a column vector $\\mathbf{x}$; the camera transform is $A$). Physics engines solve $A\\mathbf{x} = \\mathbf{b}$ for contact forces, and machine-learning libraries solve it for best-fit lines. In Python it is one call: `numpy.linalg.solve(A, b)` — Gaussian elimination under the hood.',
        },
      ],
    },
    // ------------------------------------------------------------------ 16
    {
      kind: 'mcq',
      prompt: 'Which matrix equation represents the system $2x + 3y = 5$, $x - y = 0$?',
      options: [
        { text: '$\\begin{bmatrix} 2 & 1 \\\\ 3 & -1 \\end{bmatrix}\\begin{bmatrix} x \\\\ y \\end{bmatrix} = \\begin{bmatrix} 5 \\\\ 0 \\end{bmatrix}$', why: 'The coefficients were written down the columns instead of across the rows. Row 1 would then mean $2x + y = 5$.' },
        { text: '$\\begin{bmatrix} 2 & 3 \\\\ 1 & 1 \\end{bmatrix}\\begin{bmatrix} x \\\\ y \\end{bmatrix} = \\begin{bmatrix} 5 \\\\ 0 \\end{bmatrix}$', why: 'The sign of $-y$ was lost; row 2 would mean $x + y = 0$.' },
        { text: '$\\begin{bmatrix} 2 & 3 \\\\ 1 & -1 \\end{bmatrix}\\begin{bmatrix} x \\\\ y \\end{bmatrix} = \\begin{bmatrix} 5 \\\\ 0 \\end{bmatrix}$', correct: true, why: 'Each row of $A$ holds one equation\'s coefficients: row 1 gives $2x + 3y$ and row 2 gives $x - y$.' },
        { text: '$\\begin{bmatrix} 2 & 3 & 5 \\\\ 1 & -1 & 0 \\end{bmatrix}\\begin{bmatrix} x \\\\ y \\end{bmatrix} = \\begin{bmatrix} 0 \\\\ 0 \\end{bmatrix}$', why: 'This puts the constants inside $A$ (as in an augmented matrix). A $2 \\times 3$ matrix cannot even multiply a column with $2$ entries.' },
      ],
      explanation: 'In $A\\mathbf{x} = \\mathbf{b}$, row $i$ of $A$ is the list of coefficients of equation $i$ (in variable order), and $\\mathbf{b}$ holds the constants. Checking with the solution $(1, 1)$: $\\begin{bmatrix} 2 \\cdot 1 + 3 \\cdot 1 \\\\ 1 - 1 \\end{bmatrix} = \\begin{bmatrix} 5 \\\\ 0 \\end{bmatrix}$ ✓.',
    },
    // ------------------------------------------------------------------ 17
    {
      kind: 'expr',
      prompt: 'Row reduction of a system in $x, y, z$ ends in the reduced matrix below. Let $z = t$ be the free variable. Express $x$ in terms of $t$.',
      tex: '\\left[\\begin{array}{ccc|c} 1 & 0 & -3 & 2 \\\\ 0 & 1 & 1 & 5 \\\\ 0 & 0 & 0 & 0 \\end{array}\\right]',
      hint: 'Row 1 is the equation $x - 3z = 2$. Substitute $z = t$ and solve for $x$.',
      label: '$x =$',
      variables: ['t'],
      answer: '2 + 3t',
      answerTex: '2 + 3t',
      explanation: 'Row 1 means $x - 3z = 2$, so $x = 2 + 3z = 2 + 3t$. Row 2 means $y + z = 5$, so $y = 5 - t$. The full solution set is $(2 + 3t,\\; 5 - t,\\; t)$ — a line in space. Writing solutions as a fixed point plus $t$ times a direction, $(2, 5, 0) + t(3, -1, 1)$, is exactly how linear algebra describes them.',
    },
  ],
  takeaways: [
    'A system in three variables is solved by eliminating one variable twice to get a $2 \\times 2$ system, then back-substituting.',
    'An augmented matrix stores only the coefficients and constants; missing variables must be written as $0$.',
    'The three row operations — swap, scale by a nonzero number, add a multiple of another row — never change the solution set because each is reversible.',
    'Gaussian elimination creates zeros below each pivot to reach row-echelon form; back-substitution then finishes the job.',
    'A row $[\\,0 \\cdots 0 \\mid c\\,]$ with $c \\ne 0$ means no solution; a missing pivot (free variable) means infinitely many, written parametrically.',
    'Every linear system is a matrix equation $A\\mathbf{x} = \\mathbf{b}$ — the language of linear algebra.',
  ],
  reading: [
    {
      title: 'OpenStax College Algebra 2e — 7.2 Systems of Linear Equations: Three Variables',
      url: 'https://openstax.org/books/college-algebra-2e/pages/7-2-systems-of-linear-equations-three-variables',
      source: 'openstax',
      note: 'More three-variable examples, including the geometric pictures of the dependent and inconsistent cases.',
    },
    {
      title: 'OpenStax College Algebra 2e — 7.6 Solving Systems with Gaussian Elimination',
      url: 'https://openstax.org/books/college-algebra-2e/pages/7-6-solving-systems-with-gaussian-elimination',
      source: 'openstax',
      note: 'Step-by-step row reduction of augmented matrices, with practice problems.',
    },
    {
      title: "Paul's Online Notes — Augmented Matrices",
      url: 'https://tutorial.math.lamar.edu/Classes/Alg/AugmentedMatrix.aspx',
      source: 'paul',
      note: 'Clear worked examples of row operations, including systems with no or infinitely many solutions.',
    },
    {
      title: '3Blue1Brown — Essence of Linear Algebra',
      url: 'https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab',
      source: 'video',
      note: 'The best visual preview of your next course: vectors, linear combinations, matrices as transformations and determinants.',
    },
  ],
};
