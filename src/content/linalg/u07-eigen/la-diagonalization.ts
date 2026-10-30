import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'la-diagonalization',
  title: 'Diagonalization',
  summary: 'Rewrite a matrix as $PDP^{-1}$: change to eigenvector coordinates, scale each axis, change back. Powers and coupled systems become easy.',
  minutes: 19,
  objectives: [
    'Explain what $A = PDP^{-1}$ means and why the columns of $P$ must be eigenvectors',
    'State and prove the Diagonalization Theorem, and use "$n$ distinct eigenvalues" as a sufficient test',
    'Diagonalize a $3 \\times 3$ matrix with a repeated eigenvalue',
    'Recognise a non-diagonalizable matrix by comparing geometric and algebraic multiplicity',
    'Compute $A^k = PD^kP^{-1}$ and explain how diagonalization decouples a linear system',
  ],
  steps: [
    {
      kind: 'concept',
      title: 'Why diagonal matrices are the easy ones',
      blocks: [
        {
          type: 'p',
          text: 'A [[diagonal-matrix]] acts on each coordinate separately: $D = \\begin{bmatrix} 4 & 0 \\\\ 0 & -1 \\end{bmatrix}$ multiplies $x_1$ by $4$ and $x_2$ by $-1$, and the two never interact. Its powers are trivial too: $D^k = \\begin{bmatrix} 4^k & 0 \\\\ 0 & (-1)^k \\end{bmatrix}$, because multiplying diagonal matrices just multiplies their diagonal entries.',
        },
        {
          type: 'p',
          text: 'Most matrices are not diagonal. But the last two lessons suggest a way around that: along its eigenvectors, a matrix *does* act by plain scaling. If we measure vectors in eigenvector coordinates, the matrix should look diagonal. Writing that idea as a formula is called diagonalization.',
        },
        {
          type: 'definition',
          term: 'Diagonalizable',
          text: 'A square matrix $A$ is [[diagonalizable]] if $A = PDP^{-1}$ for some invertible matrix $P$ and diagonal matrix $D$. Equivalently, $A$ is [[similar-matrices|similar]] to a diagonal matrix.',
        },
        {
          type: 'p',
          text: 'Read $PDP^{-1}\\mathbf{x}$ from right to left, the way it acts: $P^{-1}$ converts $\\mathbf{x}$ into coordinates relative to the columns of $P$ (a [[change-of-basis-matrix|change of basis]]), $D$ scales each of those coordinates, and $P$ converts back to standard coordinates.',
        },
        {
          type: 'derivation',
          title: 'Check that $A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 2 \\end{bmatrix} = PDP^{-1}$ with $P = \\begin{bmatrix} 2 & 1 \\\\ 3 & -1 \\end{bmatrix}$, $D = \\begin{bmatrix} 4 & 0 \\\\ 0 & -1 \\end{bmatrix}$',
          steps: [
            { tex: '\\mathbf{v}_1 = \\begin{bmatrix} 2 \\\\ 3 \\end{bmatrix} \\ (\\lambda_1 = 4), \\qquad \\mathbf{v}_2 = \\begin{bmatrix} 1 \\\\ -1 \\end{bmatrix} \\ (\\lambda_2 = -1)', why: 'The eigenpairs from the previous lessons. $P$ has $\\mathbf{v}_1, \\mathbf{v}_2$ as columns, and $D$ has the matching eigenvalues in the **same order**.' },
            { tex: 'AP = \\begin{bmatrix} A\\mathbf{v}_1 & A\\mathbf{v}_2 \\end{bmatrix} = \\begin{bmatrix} 8 & -1 \\\\ 12 & 1 \\end{bmatrix}', why: 'Column $j$ of $AP$ is $A$ times column $j$ of $P$: $A(2, 3) = (8, 12)$ and $A(1, -1) = (-1, 1)$.' },
            { tex: 'PD = \\begin{bmatrix} 4\\mathbf{v}_1 & -1\\mathbf{v}_2 \\end{bmatrix} = \\begin{bmatrix} 8 & -1 \\\\ 12 & 1 \\end{bmatrix}', why: 'Multiplying by a diagonal matrix on the **right** scales the columns of $P$ by the diagonal entries.' },
            { tex: 'AP = PD \\implies A = PDP^{-1}', why: '$\\det P = -2 - 3 = -5 \\ne 0$, so $P$ is invertible; multiply both sides on the right by $P^{-1}$.' },
          ],
          result: 'So $A = PDP^{-1}$ with $P^{-1} = \\frac{1}{5}\\begin{bmatrix} 1 & 1 \\\\ 3 & -2 \\end{bmatrix}$. Checking $AP = PD$ avoids computing $P^{-1}$ at all.',
        },
        {
          type: 'callout',
          variant: 'analogy',
          title: 'Translate, act, translate back',
          text: 'Think of a function that only understands local coordinates, like a bone transform in a skeleton. To apply it to a world-space point you convert into the bone\'s space, apply the simple operation there, then convert back to world space. $PDP^{-1}$ is the same sandwich, and the "local space" is the eigenvector basis, where the operation is pure per-axis scaling.',
        },
      ],
    },
    {
      kind: 'mcq',
      prompt: '$A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 2 \\end{bmatrix}$ has eigenvalue $4$ with eigenvector $(2, 3)$ and eigenvalue $-1$ with eigenvector $(1, -1)$. Which choice gives $A = PDP^{-1}$?',
      options: [
        {
          text: '$P = \\begin{bmatrix} 2 & 1 \\\\ 3 & -1 \\end{bmatrix}$, $D = \\begin{bmatrix} -1 & 0 \\\\ 0 & 4 \\end{bmatrix}$',
          why: 'Column 1 of $P$ belongs to $\\lambda = 4$, but $D$ puts $-1$ first. Then $PD$ has first column $-(2, 3)$, while $AP$ has first column $(8, 12)$.',
        },
        {
          text: '$P = \\begin{bmatrix} 2 & 3 \\\\ 1 & -1 \\end{bmatrix}$, $D = \\begin{bmatrix} 4 & 0 \\\\ 0 & -1 \\end{bmatrix}$',
          why: 'This $P$ has the eigenvectors as **rows**. The formula needs them as columns, because $AP$ applies $A$ to each column of $P$.',
        },
        {
          text: '$P = \\begin{bmatrix} 2 & 1 \\\\ 3 & -1 \\end{bmatrix}$, $D = \\begin{bmatrix} 4 & 0 \\\\ 0 & -1 \\end{bmatrix}$',
          correct: true,
          why: 'Eigenvectors as columns, eigenvalues in the matching order: $AP = PD$ column by column.',
        },
        {
          text: '$P = \\begin{bmatrix} 2 & 1 \\\\ 3 & -1 \\end{bmatrix}$, $D = \\begin{bmatrix} 1 & 0 \\\\ 0 & 2 \\end{bmatrix}$',
          why: '$D$ must hold the eigenvalues, not the diagonal entries of $A$.',
        },
      ],
      explanation: 'The recipe is rigid: column $j$ of $P$ is an eigenvector, and entry $(j, j)$ of $D$ is *its* eigenvalue. You may choose any order you like (or rescale the eigenvectors), as long as $P$ and $D$ are ordered the same way.',
    },
    {
      kind: 'concept',
      title: 'The Diagonalization Theorem',
      blocks: [
        {
          type: 'p',
          text: 'The check above works in general and also runs backwards. That gives an exact description of which matrices can be diagonalized.',
        },
        {
          type: 'theorem',
          name: 'The Diagonalization Theorem',
          text: 'An $n \\times n$ matrix $A$ is diagonalizable **if and only if** $A$ has $n$ linearly independent eigenvectors. In that case $A = PDP^{-1}$ exactly when the columns of $P$ are $n$ independent eigenvectors and the diagonal entries of $D$ are the corresponding eigenvalues, in the same order.',
        },
        {
          type: 'derivation',
          title: 'Proof',
          steps: [
            { tex: 'P = \\begin{bmatrix} \\mathbf{v}_1 & \\cdots & \\mathbf{v}_n \\end{bmatrix}, \\quad D = \\begin{bmatrix} \\lambda_1 & & \\\\ & \\ddots & \\\\ & & \\lambda_n \\end{bmatrix}', why: 'Take any $n \\times n$ matrix $P$ with columns $\\mathbf{v}_i$ and any diagonal $D$.' },
            { tex: 'AP = \\begin{bmatrix} A\\mathbf{v}_1 & \\cdots & A\\mathbf{v}_n \\end{bmatrix}, \\quad PD = \\begin{bmatrix} \\lambda_1\\mathbf{v}_1 & \\cdots & \\lambda_n\\mathbf{v}_n \\end{bmatrix}', why: 'Matrix multiplication works column by column; right-multiplying by $D$ scales column $i$ by $\\lambda_i$.' },
            { tex: 'AP = PD \\iff A\\mathbf{v}_i = \\lambda_i\\mathbf{v}_i \\text{ for every } i', why: 'Two matrices are equal exactly when their columns are equal.' },
            { tex: 'P \\text{ invertible} \\iff \\{\\mathbf{v}_1, \\dots, \\mathbf{v}_n\\} \\text{ linearly independent}', why: 'Invertible Matrix Theorem. Independence also forces every $\\mathbf{v}_i \\ne \\mathbf{0}$, so each one really is an eigenvector.' },
            { tex: 'A = PDP^{-1} \\iff AP = PD \\text{ with } P \\text{ invertible}', why: 'Multiply on the right by $P^{-1}$ or by $P$. Combine the last three lines.' },
          ],
          result: '$A = PDP^{-1}$ holds exactly when the columns of $P$ are $n$ independent eigenvectors with eigenvalues $\\lambda_1, \\dots, \\lambda_n$. Such a set is called an **eigenvector basis** of $\\mathbb{R}^n$.',
        },
        {
          type: 'theorem',
          name: 'A sufficient condition',
          text: 'If an $n \\times n$ matrix has $n$ **distinct** eigenvalues, it is diagonalizable.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why distinct eigenvalues are enough',
          text: 'Pick one eigenvector for each of the $n$ distinct eigenvalues. In the first lesson of this unit you proved that eigenvectors for distinct eigenvalues are linearly independent, so these $n$ vectors are independent, and the Diagonalization Theorem applies. That is why $\\begin{bmatrix} 1 & 2 \\\\ 3 & 2 \\end{bmatrix}$ (eigenvalues $4$ and $-1$) had to be diagonalizable.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Sufficient, not necessary',
          text: 'Repeated eigenvalues do **not** rule diagonalization out. The identity $I_3$ has the single eigenvalue $1$ three times, yet it is already diagonal. With a repeated eigenvalue you simply have to check whether its eigenspace is big enough, as the next two cards show.',
        },
      ],
    },
    {
      kind: 'truefalse',
      prompt: 'If an $n \\times n$ matrix has fewer than $n$ distinct eigenvalues, it cannot be diagonalized.',
      answer: false,
      explanation: 'Having $n$ distinct eigenvalues is sufficient, not necessary. What actually matters is having $n$ independent eigenvectors. A repeated eigenvalue can still supply several independent eigenvectors if its eigenspace has dimension equal to its multiplicity: $I_n$ and $2I_n$ are diagonal already, and the $3 \\times 3$ example on the next card has eigenvalue $-2$ twice and is diagonalizable.',
    },
    {
      kind: 'fill',
      prompt: 'The columns of $P = \\begin{bmatrix} 1 & 3 \\\\ 1 & 2 \\end{bmatrix}$ are eigenvectors of $A = \\begin{bmatrix} 4 & -3 \\\\ 2 & -1 \\end{bmatrix}$. Find the diagonal matrix $D$ with $A = PDP^{-1}$.',
      hint: 'Multiply $A$ by each column of $P$ and see what multiple of that column comes out.',
      template: '$D = \\begin{bmatrix} d_1 & 0 \\\\ 0 & d_2 \\end{bmatrix}$ with $d_1 =$ ___ and $d_2 =$ ___',
      blanks: [{ answers: ['1'] }, { answers: ['2'] }],
      explanation: '$A(1, 1) = (4 - 3,\\ 2 - 1) = (1, 1) = 1 \\cdot (1, 1)$ and $A(3, 2) = (12 - 6,\\ 6 - 2) = (6, 4) = 2 \\cdot (3, 2)$. The eigenvalues go into $D$ in the order of the columns, so $D = \\begin{bmatrix} 1 & 0 \\\\ 0 & 2 \\end{bmatrix}$. Cross-check: $1 + 2 = 3 = \\operatorname{tr} A$ and $1 \\cdot 2 = 2 = \\det A$.',
    },
    {
      kind: 'concept',
      title: 'A $3 \\times 3$ example with a repeated eigenvalue',
      blocks: [
        {
          type: 'p',
          text: 'Let us diagonalize $A = \\begin{bmatrix} 1 & 3 & 3 \\\\ -3 & -5 & -3 \\\\ 3 & 3 & 1 \\end{bmatrix}$. Its characteristic polynomial is $\\det(A - \\lambda I) = -(\\lambda - 1)(\\lambda + 2)^2$ (computed in the deep dive below), so the eigenvalues are $1$ and $-2$, with $-2$ of algebraic multiplicity $2$. Quick check: $1 + (-2) + (-2) = -3 = \\operatorname{tr} A$. ✓',
        },
        {
          type: 'derivation',
          title: 'Diagonalize $A$',
          steps: [
            { tex: 'A - I = \\begin{bmatrix} 0 & 3 & 3 \\\\ -3 & -6 & -3 \\\\ 3 & 3 & 0 \\end{bmatrix} \\sim \\begin{bmatrix} 1 & 0 & -1 \\\\ 0 & 1 & 1 \\\\ 0 & 0 & 0 \\end{bmatrix}', why: 'Eigenspace for $\\lambda = 1$: row reduce $A - I$. One free variable ($x_3$).' },
            { tex: 'x_1 = x_3,\\ x_2 = -x_3 \\implies \\mathbf{v}_1 = \\begin{bmatrix} 1 \\\\ -1 \\\\ 1 \\end{bmatrix}', why: 'Set $x_3 = 1$. The eigenspace for $\\lambda = 1$ is a line.' },
            { tex: 'A + 2I = \\begin{bmatrix} 3 & 3 & 3 \\\\ -3 & -3 & -3 \\\\ 3 & 3 & 3 \\end{bmatrix} \\sim \\begin{bmatrix} 1 & 1 & 1 \\\\ 0 & 0 & 0 \\\\ 0 & 0 & 0 \\end{bmatrix}', why: 'Eigenspace for $\\lambda = -2$: note $A - (-2)I = A + 2I$. Divide row 1 by $3$ and clear the other rows. **Two** free variables.' },
            { tex: 'x_1 = -x_2 - x_3 \\implies \\mathbf{v}_2 = \\begin{bmatrix} -1 \\\\ 1 \\\\ 0 \\end{bmatrix},\\ \\mathbf{v}_3 = \\begin{bmatrix} -1 \\\\ 0 \\\\ 1 \\end{bmatrix}', why: 'Parametric vector form with $x_2, x_3$ free. The eigenspace for $-2$ is a plane, dimension $2$ — as large as the multiplicity.' },
            { tex: 'P = \\begin{bmatrix} 1 & -1 & -1 \\\\ -1 & 1 & 0 \\\\ 1 & 0 & 1 \\end{bmatrix}, \\quad D = \\begin{bmatrix} 1 & 0 & 0 \\\\ 0 & -2 & 0 \\\\ 0 & 0 & -2 \\end{bmatrix}', why: 'Eigenvectors as columns, eigenvalues in matching order. $\\mathbf{v}_1$ comes from a different eigenvalue than $\\mathbf{v}_2, \\mathbf{v}_3$, and $\\mathbf{v}_2, \\mathbf{v}_3$ are a basis of their eigenspace, so all three are independent ($\\det P = 1$).' },
            { tex: 'AP = \\begin{bmatrix} 1 & 2 & 2 \\\\ -1 & -2 & 0 \\\\ 1 & 0 & -2 \\end{bmatrix} = PD', why: 'Check without inverting: column 1 of $AP$ is $\\mathbf{v}_1$, columns 2 and 3 are $-2\\mathbf{v}_2$ and $-2\\mathbf{v}_3$.' },
          ],
          result: '$A = PDP^{-1}$. Geometrically: $A$ fixes the line through $(1, -1, 1)$ and multiplies every vector in the plane spanned by $(-1, 1, 0)$ and $(-1, 0, 1)$ by $-2$.',
        },
        {
          type: 'deepdive',
          title: 'Computing the characteristic polynomial without expanding a cubic',
          blocks: [
            {
              type: 'p',
              text: 'Determinant properties let you factor as you go. Adding row 2 to row 1 does not change the determinant, and the new row 1 is $(-2 - \\lambda,\\ -2 - \\lambda,\\ 0)$, so the factor $(-2 - \\lambda)$ can be pulled out of that row:',
            },
            {
              type: 'math',
              tex: '\\det(A - \\lambda I) = (-2 - \\lambda)\\begin{vmatrix} 1 & 1 & 0 \\\\ -3 & -5 - \\lambda & -3 \\\\ 3 & 3 & 1 - \\lambda \\end{vmatrix}',
            },
            {
              type: 'p',
              text: 'Now subtract column 1 from column 2 (again no change to the determinant) and expand along row 1, which has become $(1, 0, 0)$:',
            },
            {
              type: 'math',
              tex: '(-2 - \\lambda)\\begin{vmatrix} -2 - \\lambda & -3 \\\\ 0 & 1 - \\lambda \\end{vmatrix} = (-2 - \\lambda)^2(1 - \\lambda) = -(\\lambda + 2)^2(\\lambda - 1)',
            },
          ],
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'Instructors grade the **matching**: $P$ and $D$ must list eigenvectors and eigenvalues in the same order, and $P$ must be invertible. Different correct answers are possible (reorder the columns, rescale eigenvectors, pick another basis of an eigenspace), so show the check $AP = PD$ to prove yours works.',
        },
      ],
    },
    {
      kind: 'error',
      prompt: 'A student diagonalizes $A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 2 \\end{bmatrix}$. Tap the first line that is wrong.',
      lines: [
        'Eigenvalues: $\\det(A - \\lambda I) = (\\lambda - 4)(\\lambda + 1)$, so $\\lambda = 4, -1$.',
        'Eigenvectors: $(2, 3)$ for $\\lambda = 4$ and $(1, -1)$ for $\\lambda = -1$.',
        '$P = \\begin{bmatrix} 2 & 1 \\\\ 3 & -1 \\end{bmatrix}$',
        '$D = \\begin{bmatrix} -1 & 0 \\\\ 0 & 4 \\end{bmatrix}$',
        'Therefore $A = PDP^{-1}$.',
      ],
      errorLines: [4],
      explanation: 'Lines 1–3 are correct, but line 4 lists the eigenvalues in the opposite order to the columns of $P$. Column 1 of $P$ is $(2, 3)$, which belongs to $\\lambda = 4$, so $D$ must be $\\begin{bmatrix} 4 & 0 \\\\ 0 & -1 \\end{bmatrix}$. With the student\'s $D$, the first column of $PD$ is $(-2, -3)$, while the first column of $AP$ is $(8, 12)$.',
    },
    {
      kind: 'concept',
      title: 'When diagonalization fails: not enough eigenvectors',
      blocks: [
        {
          type: 'p',
          text: 'Take the horizontal [[shear]] $A = \\begin{bmatrix} 1 & k \\\\ 0 & 1 \\end{bmatrix}$ with $k \\ne 0$. It is triangular, so its only eigenvalue is $1$, with algebraic multiplicity $2$. If it were diagonalizable, $D$ would have to be $I$, and then $A = PIP^{-1} = I$, which it is not. Drag the sliders to see the geometric reason.',
        },
        {
          type: 'graph',
          x: [-2, 3],
          y: [-0.6, 1.6],
          equal: true,
          segments: [
            { from: [0, 0], to: [1, 0], color: 'gray', dashed: true },
            { from: [1, 0], to: [1, 1], color: 'gray', dashed: true },
            { from: [0, 1], to: [1, 1], color: 'gray', dashed: true },
            { from: [0, 0], to: [0, 1], color: 'gray', dashed: true },
            { from: [0, 0], to: ['k', 1], color: 'purple' },
            { from: [1, 0], to: ['1 + k', 1], color: 'purple' },
            { from: ['k', 1], to: ['1 + k', 1], color: 'purple' },
            { from: [0, 0], to: ['cos(d*pi/180)', 'sin(d*pi/180)'], arrow: true, color: 'blue', label: 'x' },
            { from: [0, 0], to: ['cos(d*pi/180) + k*sin(d*pi/180)', 'sin(d*pi/180)'], arrow: true, color: 'red', label: 'Ax' },
          ],
          hlines: [{ y: 0, label: 'eigenspace (x-axis)', color: 'green' }],
          sliders: [
            { name: 'k', min: -1.5, max: 1.5, step: 0.05, value: 1, label: 'shear factor $k$' },
            { name: 'd', min: 0, max: 180, step: 1, value: 60, label: 'direction of $\\mathbf{x}$ (degrees)' },
          ],
          readouts: [{ label: '$\\det[\\,\\mathbf{x} \\;\\; A\\mathbf{x}\\,] = -k\\sin^2\\theta =$', expr: '-k(sin(d*pi/180))^2', digits: 3 }],
          caption: 'The purple parallelogram is the image of the dashed unit square. For $k \\ne 0$ the arrows line up only at $0^\\circ$ and $180^\\circ$: the $x$-axis is the **only** eigen-direction. One line of eigenvectors cannot form a basis of $\\mathbb{R}^2$.',
        },
        {
          type: 'derivation',
          title: 'Eigenspace of the shear $A = \\begin{bmatrix} 1 & 1 \\\\ 0 & 1 \\end{bmatrix}$',
          steps: [
            { tex: '\\det(A - \\lambda I) = (1 - \\lambda)^2', why: 'Triangular, so the characteristic polynomial is the product of the diagonal entries of $A - \\lambda I$. $\\lambda = 1$ has algebraic multiplicity $2$.' },
            { tex: 'A - I = \\begin{bmatrix} 0 & 1 \\\\ 0 & 0 \\end{bmatrix}', why: 'Subtract $1$ on the diagonal.' },
            { tex: 'x_2 = 0,\\ x_1 \\text{ free} \\implies \\operatorname{Nul}(A - I) = \\operatorname{Span}\\{\\mathbf{e}_1\\}', why: 'The only equation is $x_2 = 0$, so there is one free variable: the eigenspace is 1-dimensional.' },
          ],
          result: 'The eigenvalue $1$ is a double root but has only a 1-dimensional eigenspace. $A$ has at most one independent eigenvector, so it is **not** diagonalizable.',
        },
        {
          type: 'definition',
          term: 'Geometric multiplicity',
          text: 'The [[geometric-multiplicity]] of an eigenvalue $\\lambda$ is $\\dim \\operatorname{Nul}(A - \\lambda I)$, the dimension of its eigenspace (the number of free variables in $(A - \\lambda I)\\mathbf{x} = \\mathbf{0}$).',
        },
        {
          type: 'theorem',
          name: 'Multiplicities and diagonalizability',
          text: 'For every eigenvalue, $1 \\le$ geometric multiplicity $\\le$ algebraic multiplicity. An $n \\times n$ matrix is diagonalizable if and only if the dimensions of its eigenspaces add up to $n$; equivalently, its characteristic polynomial factors completely into real linear factors **and** the geometric multiplicity equals the algebraic multiplicity for every eigenvalue.',
        },
        {
          type: 'p',
          text: 'Two kinds of failure, then: too few *real* eigenvalues (a rotation, whose eigenvalues are complex, cannot be diagonalized using real matrices), or an eigenspace that is too small (the shear). The bases of the separate eigenspaces, taken together, are always independent, so whenever the dimensions add up to $n$ they form an eigenvector basis.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'Find the **geometric** multiplicity of the eigenvalue $2$ for $A = \\begin{bmatrix} 2 & 1 & 0 \\\\ 0 & 2 & 0 \\\\ 0 & 0 & 3 \\end{bmatrix}$.',
      hint: 'Count the free variables in $(A - 2I)\\mathbf{x} = \\mathbf{0}$.',
      label: '$\\dim \\operatorname{Nul}(A - 2I) =$',
      answer: '1',
      explanation: '$A - 2I = \\begin{bmatrix} 0 & 1 & 0 \\\\ 0 & 0 & 0 \\\\ 0 & 0 & 1 \\end{bmatrix}$ gives $x_2 = 0$ and $x_3 = 0$ with only $x_1$ free, so the eigenspace is $\\operatorname{Span}\\{\\mathbf{e}_1\\}$, of dimension $1$. The algebraic multiplicity of $2$ is $2$ (the diagonal is $2, 2, 3$), so $1 < 2$: the eigenspaces have total dimension $1 + 1 = 2 < 3$, and $A$ is not diagonalizable. The top-left $2 \\times 2$ block is a shear.',
    },
    {
      kind: 'mcq',
      prompt: 'Which matrix is **not** diagonalizable?',
      options: [
        {
          text: '$\\begin{bmatrix} 3 & 1 \\\\ 0 & 5 \\end{bmatrix}$',
          why: 'Two distinct eigenvalues, $3$ and $5$, so it is diagonalizable.',
        },
        {
          text: '$\\begin{bmatrix} 3 & 0 \\\\ 0 & 3 \\end{bmatrix}$',
          why: 'It is already diagonal ($P = I$). The repeated eigenvalue $3$ has a 2-dimensional eigenspace: all of $\\mathbb{R}^2$.',
        },
        {
          text: '$\\begin{bmatrix} 3 & 1 \\\\ 0 & 3 \\end{bmatrix}$',
          correct: true,
          why: 'Eigenvalue $3$ has algebraic multiplicity $2$, but $A - 3I = \\begin{bmatrix} 0 & 1 \\\\ 0 & 0 \\end{bmatrix}$ has a 1-dimensional null space. Only one independent eigenvector.',
        },
        {
          text: '$\\begin{bmatrix} 1 & 2 \\\\ 3 & 2 \\end{bmatrix}$',
          why: 'Distinct eigenvalues $4$ and $-1$; we diagonalized it at the start of the lesson.',
        },
      ],
      explanation: 'Distinct eigenvalues guarantee diagonalizability. With a repeated eigenvalue, compare the multiplicities: for $\\begin{bmatrix} 3 & 1 \\\\ 0 & 3 \\end{bmatrix}$ the geometric multiplicity ($1$) is smaller than the algebraic multiplicity ($2$). It is $3I$ plus a shear, and the shear part is what breaks it.',
    },
    {
      kind: 'concept',
      title: 'Payoff 1: fast powers $A^k = PD^kP^{-1}$',
      blocks: [
        {
          type: 'p',
          text: 'Repeatedly applying a transformation is everywhere: a population model run for 50 years, a Markov chain run for 1000 steps, a physics update applied every frame. Diagonalization turns $A^k$ into powers of numbers.',
        },
        {
          type: 'derivation',
          title: 'Why $A^k = PD^kP^{-1}$',
          steps: [
            { tex: 'A^2 = (PDP^{-1})(PDP^{-1})', why: 'Write each factor in diagonalized form.' },
            { tex: '= PD(P^{-1}P)DP^{-1} = PD^2P^{-1}', why: 'Matrix multiplication is associative, and $P^{-1}P = I$ cancels in the middle.' },
            { tex: 'A^k = PD^kP^{-1}', why: 'The same cancellation happens between every adjacent pair of factors (formally, by induction on $k$).' },
          ],
          result: 'Only the diagonal matrix gets raised to the power, and $D^k$ just raises each diagonal entry to the $k$th power.',
        },
        {
          type: 'derivation',
          title: 'A formula for $A^k$, where $A = \\begin{bmatrix} 7 & 2 \\\\ -4 & 1 \\end{bmatrix}$',
          steps: [
            { tex: '\\det(A - \\lambda I) = \\lambda^2 - 8\\lambda + 15 = (\\lambda - 5)(\\lambda - 3)', why: 'Trace $8$, determinant $7 + 8 = 15$.' },
            { tex: '\\lambda = 5: \\begin{bmatrix} 1 \\\\ -1 \\end{bmatrix}, \\qquad \\lambda = 3: \\begin{bmatrix} 1 \\\\ -2 \\end{bmatrix}', why: '$A - 5I = \\begin{bmatrix} 2 & 2 \\\\ -4 & -4 \\end{bmatrix}$ gives $x_1 = -x_2$; $A - 3I = \\begin{bmatrix} 4 & 2 \\\\ -4 & -2 \\end{bmatrix}$ gives $x_2 = -2x_1$.' },
            { tex: 'P = \\begin{bmatrix} 1 & 1 \\\\ -1 & -2 \\end{bmatrix}, \\quad P^{-1} = \\begin{bmatrix} 2 & 1 \\\\ -1 & -1 \\end{bmatrix}', why: '$\\det P = -2 + 1 = -1$; swap the diagonal, negate the off-diagonal, divide by $-1$.' },
            { tex: 'A^k = \\begin{bmatrix} 1 & 1 \\\\ -1 & -2 \\end{bmatrix}\\begin{bmatrix} 5^k & 0 \\\\ 0 & 3^k \\end{bmatrix}\\begin{bmatrix} 2 & 1 \\\\ -1 & -1 \\end{bmatrix}', why: 'Plug into $A^k = PD^kP^{-1}$.' },
            { tex: '= \\begin{bmatrix} 5^k & 3^k \\\\ -5^k & -2 \\cdot 3^k \\end{bmatrix}\\begin{bmatrix} 2 & 1 \\\\ -1 & -1 \\end{bmatrix}', why: 'First multiply $PD^k$: scale column 1 of $P$ by $5^k$ and column 2 by $3^k$.' },
            { tex: '= \\begin{bmatrix} 2 \\cdot 5^k - 3^k & 5^k - 3^k \\\\ 2 \\cdot 3^k - 2 \\cdot 5^k & 2 \\cdot 3^k - 5^k \\end{bmatrix}', why: 'Multiply by $P^{-1}$, row by column. Sanity check $k = 1$: $\\begin{bmatrix} 10 - 3 & 5 - 3 \\\\ 6 - 10 & 6 - 5 \\end{bmatrix} = A$. ✓' },
          ],
          result: 'One formula gives every power of $A$. For large $k$ the $5^k$ terms dominate: $A^k$ grows like $5^k$, the size of the largest eigenvalue.',
        },
        {
          type: 'code',
          title: 'powers.cpp',
          runnable: true,
          code: `#include <array>
#include <cstdio>

using Mat2 = std::array<std::array<long long, 2>, 2>;

Mat2 mul(const Mat2& X, const Mat2& Y) {
    Mat2 out{};
    for (int i = 0; i < 2; ++i)
        for (int j = 0; j < 2; ++j)
            out[i][j] = X[i][0] * Y[0][j] + X[i][1] * Y[1][j];
    return out;
}

long long ipow(long long b, int k) {
    long long r = 1;
    while (k-- > 0) r *= b;
    return r;
}

int main() {
    const Mat2 A = {{{7, 2}, {-4, 1}}};
    const int k = 10;

    Mat2 Ak = A;  // brute force: k - 1 matrix products
    for (int i = 1; i < k; ++i) Ak = mul(Ak, A);

    long long f = ipow(5, k), g = ipow(3, k);  // eigenvalues 5 and 3
    Mat2 closed = {{{2 * f - g, f - g}, {2 * g - 2 * f, 2 * g - f}}};

    std::printf("loop:   %lld %lld / %lld %lld\\n", Ak[0][0], Ak[0][1], Ak[1][0], Ak[1][1]);
    std::printf("closed: %lld %lld / %lld %lld\\n", closed[0][0], closed[0][1], closed[1][0], closed[1][1]);
}`,
          output: `loop:   19472201 9706576 / -19413152 -9647527
closed: 19472201 9706576 / -19413152 -9647527`,
          annotations: [
            { lines: '24-25', text: 'The direct way: $k - 1$ full matrix multiplications.' },
            { lines: '27-28', text: 'The diagonalized way: two scalar powers plugged into the formula derived above.' },
          ],
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'In practice',
          text: 'For a fixed small matrix, repeated squaring ($A^{16} = (((A^2)^2)^2)^2$) is often simpler and avoids needing eigenvectors. Diagonalization wins when you need a **closed form** in $k$, the long-run behaviour, or functions of a matrix beyond powers. Beware in floating point: if the eigenvectors are nearly parallel, $P$ is close to singular and $P^{-1}$ amplifies rounding error.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'Using the formula on the card for $A = \\begin{bmatrix} 7 & 2 \\\\ -4 & 1 \\end{bmatrix}$, find the $(1, 2)$ entry (row 1, column 2) of $A^5$.',
      hint: 'The $(1, 2)$ entry of $A^k$ is $5^k - 3^k$.',
      label: '$(A^5)_{12} =$',
      answer: '2882',
      explanation: '$(A^5)_{12} = 5^5 - 3^5 = 3125 - 243 = 2882$. Computing $A^5$ directly would take four $2 \\times 2$ matrix products; the formula needs two powers of numbers. (Full answer: $A^5 = \\begin{bmatrix} 6007 & 2882 \\\\ -5764 & -2639 \\end{bmatrix}$.)',
    },
    {
      kind: 'expr',
      prompt: '$A = \\begin{bmatrix} 4 & -3 \\\\ 2 & -1 \\end{bmatrix} = PDP^{-1}$ with $P = \\begin{bmatrix} 3 & 1 \\\\ 2 & 1 \\end{bmatrix}$, $D = \\begin{bmatrix} 2 & 0 \\\\ 0 & 1 \\end{bmatrix}$, $P^{-1} = \\begin{bmatrix} 1 & -1 \\\\ -2 & 3 \\end{bmatrix}$. Find the $(1, 1)$ entry of $A^k$ as an expression in $k$.',
      hint: 'First $PD^k = \\begin{bmatrix} 3 \\cdot 2^k & 1 \\\\ 2 \\cdot 2^k & 1 \\end{bmatrix}$ (since $1^k = 1$). Then take row 1 of that times column 1 of $P^{-1}$.',
      label: '$(A^k)_{11} =$',
      variables: ['k'],
      domain: [0, 4],
      answer: '3*2^k - 2',
      answerTex: '3 \\cdot 2^k - 2',
      explanation: 'Row 1 of $PD^k$ is $(3 \\cdot 2^k,\\ 1)$ and column 1 of $P^{-1}$ is $(1, -2)$, so $(A^k)_{11} = 3 \\cdot 2^k \\cdot 1 + 1 \\cdot (-2) = 3 \\cdot 2^k - 2$. Checks: $k = 0$ gives $1$ (the identity), $k = 1$ gives $4$, and $A^2 = \\begin{bmatrix} 10 & -9 \\\\ 6 & -5 \\end{bmatrix}$ has $(1,1)$ entry $10 = 3 \\cdot 4 - 2$. ✓',
    },
    {
      kind: 'concept',
      title: 'Payoff 2: decoupling a system',
      blocks: [
        {
          type: 'p',
          text: 'Many models update several quantities that influence each other: $\\mathbf{x}_{k+1} = A\\mathbf{x}_k$, where each new entry depends on all the old ones. That coupling is what makes them hard to reason about. Diagonalization removes it by changing variables to eigenvector coordinates.',
        },
        {
          type: 'derivation',
          title: 'Decoupling $\\mathbf{x}_{k+1} = A\\mathbf{x}_k$ when $A = PDP^{-1}$',
          steps: [
            { tex: '\\mathbf{x}_k = P\\mathbf{y}_k \\quad (\\text{i.e. } \\mathbf{y}_k = P^{-1}\\mathbf{x}_k)', why: 'New variables: $\\mathbf{y}_k$ is the coordinate vector of $\\mathbf{x}_k$ in the eigenvector basis.' },
            { tex: 'P\\mathbf{y}_{k+1} = AP\\mathbf{y}_k', why: 'Substitute into $\\mathbf{x}_{k+1} = A\\mathbf{x}_k$.' },
            { tex: '\\mathbf{y}_{k+1} = P^{-1}AP\\,\\mathbf{y}_k = D\\mathbf{y}_k', why: 'Multiply on the left by $P^{-1}$, and $P^{-1}AP = D$.' },
            { tex: 'y_{i,k+1} = \\lambda_i\\, y_{i,k} \\implies y_{i,k} = \\lambda_i^{\\,k}\\, y_{i,0}', why: 'Because $D$ is diagonal, each new coordinate depends only on its own old value: $n$ separate one-variable problems, each a geometric sequence.' },
          ],
          result: 'In eigenvector coordinates the system falls apart into independent pieces, each simply multiplied by its eigenvalue every step.',
        },
        {
          type: 'p',
          text: 'The same trick works for continuous systems $\\mathbf{x}\'(t) = A\\mathbf{x}(t)$. In Calculus II you solved $y\' = ky$ with $y = Ce^{kt}$; after substituting $\\mathbf{x} = P\\mathbf{y}$, each coordinate obeys $y_i\' = \\lambda_i y_i$, so $y_i(t) = c_i e^{\\lambda_i t}$. The next lesson uses the discrete version to predict long-run behaviour.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Modes in physics and graphics',
          text: 'Engineers call the eigenvectors of a vibrating system its **modes**. A soft body, a cloth patch or a bridge in a destruction sim can be simulated cheaply by keeping just a few low-frequency modes, each evolving independently: this is *modal analysis*, and it is diagonalization at work. Principal component analysis (PCA), used for compressing animation data and fitting bounding volumes, diagonalizes a covariance matrix for the same reason: to find independent directions.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the eigenvector basis is "the right coordinates"',
          text: 'In standard coordinates, $\\mathbf{e}_1$ and $\\mathbf{e}_2$ get mixed by $A$. In eigenvector coordinates nothing gets mixed, because each basis vector is mapped to a multiple of itself. Choosing coordinates adapted to the transformation is the central idea of this unit; the next unit does the same with orthogonal bases.',
        },
      ],
    },
    {
      kind: 'order',
      prompt: 'Put the steps of diagonalizing an $n \\times n$ matrix $A$ in order.',
      lines: [
        'Solve $\\det(A - \\lambda I) = 0$ to find the eigenvalues',
        'For each eigenvalue, find a basis of $\\operatorname{Nul}(A - \\lambda I)$',
        'If the eigenspace dimensions add up to less than $n$, stop: $A$ is not diagonalizable',
        'Build $P$ from the $n$ eigenvectors and $D$ from their eigenvalues, in matching order',
        'Check that $AP = PD$',
      ],
      distractors: ['Row reduce $A$ to echelon form and use its pivots as $D$'],
      explanation: 'Eigenvalues first (characteristic equation), then a basis for each eigenspace (null spaces). The count test comes before building $P$, because $P$ must be square and invertible. Finally $AP = PD$ verifies everything without inverting $P$. Row reduction of $A$ itself plays no role: it changes the eigenvalues.',
    },
  ],
  takeaways: [
    '$A$ is diagonalizable when $A = PDP^{-1}$: columns of $P$ are eigenvectors, the diagonal of $D$ holds their eigenvalues in the same order.',
    'Diagonalization Theorem: an $n \\times n$ matrix is diagonalizable if and only if it has $n$ linearly independent eigenvectors; $n$ distinct eigenvalues are enough but not necessary.',
    'Geometric multiplicity ($\\dim \\operatorname{Nul}(A - \\lambda I)$) is at most the algebraic multiplicity; when it is smaller, as for a shear, the matrix is not diagonalizable.',
    'Powers are easy in diagonal form: $A^k = PD^kP^{-1}$, and the largest $|\\lambda|$ controls how fast $A^k$ grows.',
    'Changing to eigenvector coordinates decouples $\\mathbf{x}_{k+1} = A\\mathbf{x}_k$ into independent equations $y_{i,k+1} = \\lambda_i y_{i,k}$.',
  ],
  reading: [
    {
      title: 'Interactive Linear Algebra — Diagonalization',
      url: 'https://textbooks.math.gatech.edu/ila/',
      source: 'book',
      note: 'The diagonalization section has interactive pictures of $PDP^{-1}$ as "change coordinates, scale, change back".',
    },
    {
      title: 'Wikipedia — Diagonalizable matrix',
      url: 'https://en.wikipedia.org/wiki/Diagonalizable_matrix',
      source: 'wikipedia',
      note: 'Covers the multiplicity criterion and applications such as computing matrix functions.',
    },
    {
      title: '3Blue1Brown — Essence of linear algebra',
      url: 'https://www.3blue1brown.com/topics/linear-algebra',
      source: 'video',
      note: 'The eigenvectors chapter ends with an "eigenbasis" segment showing why powers of a diagonal matrix are easy.',
    },
    {
      title: 'MIT OCW 18.06 — Linear Algebra (Strang)',
      url: 'https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/',
      source: 'other',
      note: 'Lecture 22, "Diagonalization and Powers of A", derives $A^k = S\\Lambda^k S^{-1}$ (Strang\'s notation for $PD^kP^{-1}$).',
    },
  ],
};
