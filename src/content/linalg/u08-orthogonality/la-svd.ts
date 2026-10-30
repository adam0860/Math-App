import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'la-svd',
  title: 'Symmetric Matrices and the SVD',
  summary: 'Symmetric matrices diagonalize with perpendicular axes, and every matrix becomes rotate, stretch, rotate: the singular value decomposition, the course finale.',
  minutes: 20,
  objectives: [
    'Explain why a symmetric matrix has real eigenvalues and orthogonal eigenvectors, and orthogonally diagonalize it as $A = PDP^{T}$',
    'Remove the cross term from a quadratic form and sketch its level curve as a rotated ellipse',
    'Describe the SVD $A = U\\Sigma V^{T}$ geometrically: the unit circle maps to an ellipse whose semi-axes are the singular values',
    'Compute the singular values and the full SVD of a $2 \\times 2$ matrix from the eigenvalues and eigenvectors of $A^{T}A$',
    'Use truncated SVDs for low-rank approximation and image compression, and describe PCA in terms of the SVD',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Symmetric matrices have perpendicular eigenvectors',
      blocks: [
        {
          type: 'p',
          text: 'A [[symmetric-matrix]] is a square matrix with $A^{T} = A$: the entry in row $i$, column $j$ equals the entry in row $j$, column $i$. They are everywhere. Every $A^{T}A$ is symmetric (since $(A^{T}A)^{T} = A^{T}A$). So are physics\' inertia tensors, the covariance matrices of statistics and ML, and the Hessian matrices of second derivatives you will meet in multivariable calculus.',
        },
        {
          type: 'p',
          text: 'In the eigenvalue unit you saw that a general matrix can have complex eigenvalues (a rotation does) or too few eigenvectors to diagonalize. Symmetric matrices have neither problem, and they add a bonus: their eigenvectors are perpendicular.',
        },
        {
          type: 'theorem',
          name: 'Eigenvectors of a symmetric matrix',
          text: 'If $A$ is symmetric, then all its eigenvalues are real, and any two eigenvectors from **different** eigenspaces are orthogonal.',
        },
        {
          type: 'derivation',
          title: 'Proof of orthogonality: move $A$ across the dot product',
          steps: [
            { tex: 'A\\mathbf{v}_1 = \\lambda_1\\mathbf{v}_1, \\quad A\\mathbf{v}_2 = \\lambda_2\\mathbf{v}_2, \\quad \\lambda_1 \\ne \\lambda_2', why: 'Take eigenvectors for two distinct eigenvalues.' },
            { tex: '\\lambda_1(\\mathbf{v}_1 \\cdot \\mathbf{v}_2) = (A\\mathbf{v}_1) \\cdot \\mathbf{v}_2 = (A\\mathbf{v}_1)^{T}\\mathbf{v}_2 = \\mathbf{v}_1^{T}A^{T}\\mathbf{v}_2', why: 'Write the dot product as a matrix product and use $(A\\mathbf{v})^{T} = \\mathbf{v}^{T}A^{T}$.' },
            { tex: '= \\mathbf{v}_1^{T}A\\mathbf{v}_2 = \\mathbf{v}_1^{T}(\\lambda_2\\mathbf{v}_2) = \\lambda_2(\\mathbf{v}_1 \\cdot \\mathbf{v}_2)', why: 'Here symmetry is used: $A^{T} = A$. Then $\\mathbf{v}_2$ is an eigenvector.' },
            { tex: '(\\lambda_1 - \\lambda_2)(\\mathbf{v}_1 \\cdot \\mathbf{v}_2) = 0 \\implies \\mathbf{v}_1 \\cdot \\mathbf{v}_2 = 0', why: 'Subtract. Since $\\lambda_1 - \\lambda_2 \\ne 0$, the dot product must vanish.' },
          ],
          result: 'Distinct eigenvalues of a symmetric matrix have perpendicular eigenvectors.',
        },
        {
          type: 'derivation',
          title: 'Eigenvalues and eigenvectors of $A = \\begin{bmatrix} 2 & 2 \\\\ 2 & 5 \\end{bmatrix}$',
          steps: [
            { tex: '\\det(A - \\lambda I) = (2 - \\lambda)(5 - \\lambda) - 4 = \\lambda^2 - 7\\lambda + 6 = (\\lambda - 6)(\\lambda - 1)', why: 'The characteristic equation.' },
            { tex: '\\lambda = 6: \\; \\begin{bmatrix} -4 & 2 \\\\ 2 & -1 \\end{bmatrix}\\mathbf{v} = \\mathbf{0} \\implies \\mathbf{v}_1 = \\begin{bmatrix} 1 \\\\ 2 \\end{bmatrix}', why: 'Both rows say $v_2 = 2v_1$.' },
            { tex: '\\lambda = 1: \\; \\begin{bmatrix} 1 & 2 \\\\ 2 & 4 \\end{bmatrix}\\mathbf{v} = \\mathbf{0} \\implies \\mathbf{v}_2 = \\begin{bmatrix} 2 \\\\ -1 \\end{bmatrix}', why: 'Both rows say $v_1 = -2v_2$.' },
            { tex: '\\mathbf{v}_1 \\cdot \\mathbf{v}_2 = 2 - 2 = 0 \\;\\checkmark', why: 'Perpendicular, as the theorem promised.' },
          ],
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why symmetry is the right condition',
          text: 'The proof hinged on one identity: $(A\\mathbf{x}) \\cdot \\mathbf{y} = \\mathbf{x} \\cdot (A\\mathbf{y})$ for all $\\mathbf{x}, \\mathbf{y}$. That identity holds exactly when $A^{T} = A$. It says $A$ treats both sides of a dot product the same way, so there is no preferred "twist", and the stretching directions come out square to each other.',
        },
        {
          type: 'deepdive',
          title: 'Why the eigenvalues are real',
          blocks: [
            {
              type: 'p',
              text: 'Allow complex entries for a moment. Suppose $A\\mathbf{x} = \\lambda\\mathbf{x}$ with $\\mathbf{x} \\ne \\mathbf{0}$, and let $\\bar{\\mathbf{x}}$ be the entrywise complex conjugate. Then $\\bar{\\mathbf{x}}^{T}A\\mathbf{x} = \\lambda\\,\\bar{\\mathbf{x}}^{T}\\mathbf{x}$, and $\\bar{\\mathbf{x}}^{T}\\mathbf{x} = \\sum |x_i|^2$ is a positive real number. The number $\\bar{\\mathbf{x}}^{T}A\\mathbf{x}$ equals its own conjugate: its conjugate is $\\mathbf{x}^{T}A\\bar{\\mathbf{x}}$ ($A$ is real), and transposing that $1 \\times 1$ matrix gives $\\bar{\\mathbf{x}}^{T}A^{T}\\mathbf{x} = \\bar{\\mathbf{x}}^{T}A\\mathbf{x}$. So it is real, and $\\lambda$ is a quotient of two real numbers.',
            },
          ],
        },
      ],
    },
    {
      kind: 'truefalse',
      prompt: 'For **any** square matrix, eigenvectors belonging to different eigenvalues are orthogonal.',
      answer: false,
      explanation: 'That is special to symmetric matrices. For example $A = \\begin{bmatrix} 1 & 1 \\\\ 0 & 2 \\end{bmatrix}$ has eigenvalues $1$ and $2$ with eigenvectors $(1, 0)$ and $(1, 1)$, whose dot product is $1 \\ne 0$. For any matrix, eigenvectors for distinct eigenvalues are linearly **independent**, but only symmetry makes them perpendicular.',
    },
    {
      kind: 'numeric',
      prompt: 'Find the eigenvalues of the symmetric matrix $\\begin{bmatrix} 3 & 1 \\\\ 1 & 3 \\end{bmatrix}$. Enter both.',
      hint: 'Solve $(3 - \\lambda)^2 - 1 = 0$.',
      answer: ['4', '2'],
      explanation: '$(3 - \\lambda)^2 = 1$ gives $3 - \\lambda = \\pm 1$, so $\\lambda = 2$ or $\\lambda = 4$. The eigenvectors are $(1, 1)$ for $\\lambda = 4$ and $(1, -1)$ for $\\lambda = 2$, which are perpendicular, as they must be.',
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'concept',
      title: 'The Spectral Theorem',
      blocks: [
        {
          type: 'p',
          text: 'Normalize the perpendicular eigenvectors and put them in the columns of $P$. Then $P$ is an orthogonal matrix, $P^{-1} = P^{T}$, and the diagonalization $A = PDP^{-1}$ from the eigenvalue unit becomes $A = PDP^{T}$. A matrix that can be written this way is called **orthogonally diagonalizable**. The remarkable fact is that symmetric matrices are exactly the ones that are.',
        },
        {
          type: 'theorem',
          name: 'The Spectral Theorem',
          tex: 'A = PDP^{T}, \\quad P^{T}P = I, \\quad D \\text{ diagonal}',
          text: 'An $n \\times n$ real matrix $A$ is orthogonally diagonalizable if and only if $A$ is symmetric. Then $A$ has $n$ real eigenvalues (counted with multiplicity), and there is an orthonormal basis of $\\mathbb{R}^n$ made of eigenvectors of $A$. This is the [[spectral-theorem]].',
        },
        {
          type: 'p',
          text: 'One direction is easy: if $A = PDP^{T}$ then $A^{T} = (P^{T})^{T}D^{T}P^{T} = PDP^{T} = A$. The other direction (every symmetric matrix has enough eigenvectors, even with repeated eigenvalues) takes more work. Within a repeated eigenspace you may need Gram–Schmidt to choose perpendicular eigenvectors.',
        },
        {
          type: 'derivation',
          title: 'Orthogonally diagonalize $A = \\begin{bmatrix} 2 & 2 \\\\ 2 & 5 \\end{bmatrix}$',
          steps: [
            { tex: '\\mathbf{u}_1 = \\tfrac{1}{\\sqrt{5}}\\begin{bmatrix} 1 \\\\ 2 \\end{bmatrix} \\; (\\lambda = 6), \\qquad \\mathbf{u}_2 = \\tfrac{1}{\\sqrt{5}}\\begin{bmatrix} 2 \\\\ -1 \\end{bmatrix} \\; (\\lambda = 1)', why: 'Normalize the eigenvectors from the last card; both have length $\\sqrt{5}$.' },
            { tex: 'P = \\tfrac{1}{\\sqrt{5}}\\begin{bmatrix} 1 & 2 \\\\ 2 & -1 \\end{bmatrix}, \\quad D = \\begin{bmatrix} 6 & 0 \\\\ 0 & 1 \\end{bmatrix}', why: 'Eigenvalues in $D$ in the same order as their eigenvectors in $P$.' },
            { tex: 'PDP^{T} = \\tfrac{1}{5}\\begin{bmatrix} 1 & 2 \\\\ 2 & -1 \\end{bmatrix}\\begin{bmatrix} 6 & 12 \\\\ 2 & -1 \\end{bmatrix} = \\tfrac{1}{5}\\begin{bmatrix} 10 & 10 \\\\ 10 & 25 \\end{bmatrix} = \\begin{bmatrix} 2 & 2 \\\\ 2 & 5 \\end{bmatrix} \\;\\checkmark', why: 'Check: $DP^{T}$ scales the rows of $P^{T}$ by $6$ and $1$; the two factors of $\\frac{1}{\\sqrt{5}}$ give $\\frac15$.' },
          ],
          result: '$A = PDP^{T}$ with no matrix inversion needed.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Spectral decomposition',
          text: 'Multiplying out $PDP^{T}$ column by row gives $A = \\lambda_1\\mathbf{u}_1\\mathbf{u}_1^{T} + \\cdots + \\lambda_n\\mathbf{u}_n\\mathbf{u}_n^{T}$. Each $\\mathbf{u}_j\\mathbf{u}_j^{T}$ is the projection matrix onto the line through $\\mathbf{u}_j$ (from the projections lesson, $UU^{T}$ with one column). So a symmetric matrix **projects onto perpendicular axes and scales each projection by its eigenvalue**.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Principal axes in physics engines',
          text: 'A rigid body\'s inertia tensor is a symmetric $3 \\times 3$ matrix. Physics engines diagonalize it once when the body is created: the eigenvectors are the **principal axes** (the directions it spins about without wobbling) and the eigenvalues are the principal moments. Storing $D$ and the rotation $P$ instead of the full tensor makes every later step cheaper.',
        },
      ],
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Quadratic forms and ellipses',
      blocks: [
        {
          type: 'p',
          text: 'A [[la-quadratic-form]] on $\\mathbb{R}^n$ is a function $Q(\\mathbf{x}) = \\mathbf{x}^{T}A\\mathbf{x}$ with $A$ symmetric. In $\\mathbb{R}^2$, with $\\mathbf{x} = (x, y)$, it is a polynomial where every term has degree exactly $2$:',
        },
        {
          type: 'math',
          tex: '\\begin{bmatrix} x & y \\end{bmatrix}\\begin{bmatrix} a & b \\\\ b & c \\end{bmatrix}\\begin{bmatrix} x \\\\ y \\end{bmatrix} = ax^2 + 2bxy + cy^2',
          caption: 'The cross-term coefficient is split evenly between the two off-diagonal entries.',
        },
        {
          type: 'p',
          text: 'For our matrix, $Q(\\mathbf{x}) = 2x^2 + 4xy + 5y^2$. The cross term $4xy$ makes the level curve $Q = 6$ a tilted ellipse that is hard to sketch. The Spectral Theorem untilts it: substitute $\\mathbf{x} = P\\mathbf{y}$ (new coordinates $\\mathbf{y} = (y_1, y_2)$ along the eigenvector axes). Then',
        },
        {
          type: 'math',
          tex: 'Q = \\mathbf{x}^{T}A\\mathbf{x} = (P\\mathbf{y})^{T}A(P\\mathbf{y}) = \\mathbf{y}^{T}(P^{T}AP)\\mathbf{y} = \\mathbf{y}^{T}D\\mathbf{y} = 6y_1^2 + y_2^2',
          caption: 'The **Principal Axes Theorem**: an orthogonal change of variable removes every cross term.',
        },
        {
          type: 'graph',
          x: [-4, 4],
          y: [-3, 3],
          equal: true,
          parametric: [
            { x: '(sqrt(k/6)*cos(t) + 2*sqrt(k)*sin(t))/sqrt(5)', y: '(2*sqrt(k/6)*cos(t) - sqrt(k)*sin(t))/sqrt(5)', t: [0, '2pi'], label: '$2x^2 + 4xy + 5y^2 = k$', color: 'blue' },
          ],
          functions: [
            { expr: '2x', label: 'eigenvector axis $\\lambda = 6$', color: 'gray', dashed: true },
            { expr: '-x/2', label: 'eigenvector axis $\\lambda = 1$', color: 'gray', dashed: true },
          ],
          segments: [
            { from: [0, 0], to: ['sqrt(k/6)/sqrt(5)', '2*sqrt(k/6)/sqrt(5)'], arrow: true, color: 'red', label: '√(k/6)' },
            { from: [0, 0], to: ['2*sqrt(k)/sqrt(5)', '-sqrt(k)/sqrt(5)'], arrow: true, color: 'green', label: '√k' },
          ],
          sliders: [{ name: 'k', min: 0.5, max: 12, step: 0.5, value: 6, label: 'level $k$' }],
          readouts: [
            { label: 'short semi-axis $\\sqrt{k/6} =$', expr: 'sqrt(k/6)', digits: 3 },
            { label: 'long semi-axis $\\sqrt{k} =$', expr: 'sqrt(k)', digits: 3 },
          ],
          caption: 'Level curves of $Q$ are ellipses aligned with the eigenvectors. The **large** eigenvalue $6$ gives the **short** axis: $Q$ grows fastest in that direction, so you reach level $k$ sooner.',
        },
        {
          type: 'p',
          text: 'The signs of the eigenvalues classify the form. All positive: $Q(\\mathbf{x}) > 0$ for every $\\mathbf{x} \\ne \\mathbf{0}$ (**positive definite**; level curves are ellipses, like this one). Mixed signs: **indefinite** (hyperbolas; a saddle shape). In multivariable calculus this becomes the second-derivative test for functions of several variables, and positive definite matrices are exactly what makes energy functions and ML loss surfaces bowl-shaped.',
        },
      ],
    },
    {
      kind: 'expr',
      prompt: 'Write the quadratic form $Q(\\mathbf{x}) = \\mathbf{x}^{T}A\\mathbf{x}$ for $A = \\begin{bmatrix} 1 & 3 \\\\ 3 & -2 \\end{bmatrix}$ and $\\mathbf{x} = \\begin{bmatrix} x \\\\ y \\end{bmatrix}$, as a polynomial in $x$ and $y$.',
      label: '$Q(x, y) =$',
      variables: ['x', 'y'],
      answer: 'x^2 + 6x*y - 2y^2',
      answerTex: 'x^2 + 6xy - 2y^2',
      hint: 'Diagonal entries give the $x^2$ and $y^2$ coefficients; the cross term is $2 \\cdot$ (off-diagonal entry) $\\cdot\\, xy$.',
      explanation: '$A\\mathbf{x} = (x + 3y,\\ 3x - 2y)$, and $\\mathbf{x} \\cdot A\\mathbf{x} = x(x + 3y) + y(3x - 2y) = x^2 + 6xy - 2y^2$. The $xy$ term collects contributions from **both** off-diagonal entries, $3 + 3 = 6$. (The eigenvalues here are $\\frac{-1 \\pm \\sqrt{45}}{2}$, one positive and one negative, so this form is indefinite.)',
    },
    {
      kind: 'mcq',
      prompt: 'Which symmetric matrix $A$ gives $Q(\\mathbf{x}) = 3x^2 + 4xy + y^2$ as $\\mathbf{x}^{T}A\\mathbf{x}$?',
      options: [
        { text: '$\\begin{bmatrix} 3 & 4 \\\\ 4 & 1 \\end{bmatrix}$', why: 'This double counts: it produces $3x^2 + 8xy + y^2$, because each off-diagonal entry contributes once.' },
        { text: '$\\begin{bmatrix} 3 & 4 \\\\ 0 & 1 \\end{bmatrix}$', why: 'This does give $3x^2 + 4xy + y^2$, but it is not symmetric. Quadratic forms are always written with the symmetric matrix, which is unique.' },
        { text: '$\\begin{bmatrix} 3 & 2 \\\\ 2 & 1 \\end{bmatrix}$', correct: true, why: 'Diagonal $3$ and $1$; the cross coefficient $4$ is split as $2 + 2$.' },
        { text: '$\\begin{bmatrix} 1 & 2 \\\\ 2 & 3 \\end{bmatrix}$', why: 'The diagonal is swapped: this gives $x^2 + 4xy + 3y^2$.' },
      ],
      explanation: 'For $\\begin{bmatrix} a & b \\\\ b & c \\end{bmatrix}$ the form is $ax^2 + 2bxy + cy^2$. Matching: $a = 3$, $c = 1$, $2b = 4$ so $b = 2$.',
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'concept',
      title: 'The SVD: rotate, stretch, rotate',
      blocks: [
        {
          type: 'p',
          text: 'The Spectral Theorem only applies to symmetric matrices, and diagonalization only to some square ones. The [[singular-value-decomposition]] works for **every** matrix, square or not, and has a beautiful geometric meaning. Play with the matrix below and watch what it does to the unit circle.',
        },
        {
          type: 'graph',
          x: [-4, 4],
          y: [-3.2, 3.2],
          equal: true,
          parametric: [
            { x: 'cos(t)', y: 'sin(t)', t: [0, '2pi'], color: 'gray', dashed: true, label: 'unit circle' },
            { x: 'a*cos(t) + b*sin(t)', y: 'c*cos(t) + d*sin(t)', t: [0, '2pi'], color: 'blue', label: 'image under $A$' },
          ],
          segments: [
            { from: [0, 0], to: ['cos(atan2(2*(a*b + c*d), a^2 + c^2 - b^2 - d^2)/2)', 'sin(atan2(2*(a*b + c*d), a^2 + c^2 - b^2 - d^2)/2)'], arrow: true, dashed: true, color: 'red', label: 'v1' },
            { from: [0, 0], to: ['-sin(atan2(2*(a*b + c*d), a^2 + c^2 - b^2 - d^2)/2)', 'cos(atan2(2*(a*b + c*d), a^2 + c^2 - b^2 - d^2)/2)'], arrow: true, dashed: true, color: 'green', label: 'v2' },
            { from: [0, 0], to: ['a*cos(atan2(2*(a*b + c*d), a^2 + c^2 - b^2 - d^2)/2) + b*sin(atan2(2*(a*b + c*d), a^2 + c^2 - b^2 - d^2)/2)', 'c*cos(atan2(2*(a*b + c*d), a^2 + c^2 - b^2 - d^2)/2) + d*sin(atan2(2*(a*b + c*d), a^2 + c^2 - b^2 - d^2)/2)'], arrow: true, color: 'red', label: 'Av1 = σ1 u1' },
            { from: [0, 0], to: ['-a*sin(atan2(2*(a*b + c*d), a^2 + c^2 - b^2 - d^2)/2) + b*cos(atan2(2*(a*b + c*d), a^2 + c^2 - b^2 - d^2)/2)', '-c*sin(atan2(2*(a*b + c*d), a^2 + c^2 - b^2 - d^2)/2) + d*cos(atan2(2*(a*b + c*d), a^2 + c^2 - b^2 - d^2)/2)'], arrow: true, color: 'green', label: 'Av2 = σ2 u2' },
          ],
          sliders: [
            { name: 'a', min: -2, max: 2, step: 0.1, value: 1, label: '$a_{11}$' },
            { name: 'b', min: -2, max: 2, step: 0.1, value: 1, label: '$a_{12}$' },
            { name: 'c', min: -2, max: 2, step: 0.1, value: 0, label: '$a_{21}$' },
            { name: 'd', min: -2, max: 2, step: 0.1, value: 1, label: '$a_{22}$' },
          ],
          readouts: [
            { label: '$\\sigma_1 =$', expr: 'sqrt(((a^2 + b^2 + c^2 + d^2) + sqrt(max(0, (a^2 + b^2 + c^2 + d^2)^2 - 4*(a*d - b*c)^2)))/2)', digits: 3 },
            { label: '$\\sigma_2 =$', expr: 'sqrt(max(0, ((a^2 + b^2 + c^2 + d^2) - sqrt(max(0, (a^2 + b^2 + c^2 + d^2)^2 - 4*(a*d - b*c)^2)))/2))', digits: 3 },
            { label: '$|\\det A| =$', expr: 'abs(a*d - b*c)', digits: 3 },
          ],
          caption: '$A = \\begin{bmatrix} a_{11} & a_{12} \\\\ a_{21} & a_{22} \\end{bmatrix}$ starts as a shear. The perpendicular unit vectors $\\mathbf{v}_1, \\mathbf{v}_2$ (dashed) land on the ellipse\'s **perpendicular semi-axes**. Their lengths are the singular values; notice $\\sigma_1\\sigma_2 = |\\det A|$. Make $A$ singular (e.g. $a_{21} = 1$ with the defaults): the ellipse flattens to a segment and $\\sigma_2 = 0$.',
        },
        {
          type: 'theorem',
          name: 'Singular value decomposition',
          tex: 'A = U\\Sigma V^{T}',
          text: 'Every $m \\times n$ matrix $A$ factors this way, with $U$ an $m \\times m$ orthogonal matrix, $V$ an $n \\times n$ orthogonal matrix, and $\\Sigma$ an $m \\times n$ matrix that is zero except for the diagonal entries $\\sigma_1 \\ge \\sigma_2 \\ge \\cdots \\ge \\sigma_r > 0$, where $r = \\operatorname{rank} A$. The $\\sigma_i$ are the [[singular-values]] of $A$; the columns of $V$ and $U$ are its right and left **singular vectors**.',
        },
        {
          type: 'p',
          text: 'Read $A\\mathbf{x} = U(\\Sigma(V^{T}\\mathbf{x}))$ right to left. $V^{T}$ is orthogonal: it **rotates** (or reflects) so that $\\mathbf{v}_1, \\mathbf{v}_2$ line up with the axes. $\\Sigma$ **stretches** along the axes by $\\sigma_1, \\sigma_2$, turning the circle into an axis-aligned ellipse. $U$ **rotates** that ellipse into its final position, sending the axes to $\\mathbf{u}_1, \\mathbf{u}_2$. Column by column, $A\\mathbf{v}_i = \\sigma_i\\mathbf{u}_i$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why every linear map is this simple',
          text: 'Back in the transformations unit, shears, rotations and scales looked like different species. The SVD says they are not: **every** linear map is a rotation, then an axis-aligned scale, then another rotation (allowing reflections). The only thing that differs between matrices is the two rotations and the stretch factors. A shear, for instance, is a rotate–stretch–rotate in disguise: try the default matrix above.',
        },
      ],
    },
    {
      kind: 'fill',
      prompt: 'Complete the key fact used to compute an SVD.',
      template: 'The singular values of $A$ are the ___ of the eigenvalues of ___ .',
      blanks: [{ answers: ['square roots'] }, { answers: ['$A^{T}A$'] }],
      wordBank: ['square roots', 'squares', 'absolute values', '$A^{T}A$', '$A$', '$A + A^{T}$'],
      explanation: 'For a unit vector $\\mathbf{v}$, $\\|A\\mathbf{v}\\|^2 = \\mathbf{v}^{T}A^{T}A\\mathbf{v}$, so lengths of $A\\mathbf{v}$ are governed by the symmetric matrix $A^{T}A$. Its eigenvalues are the **squared** stretch factors, hence $\\sigma_i = \\sqrt{\\lambda_i}$. The eigenvalues of $A$ itself are a different thing: they can be negative or complex, and they need not equal the stretch factors (a shear has eigenvalues $1, 1$ but stretches by $1.618$).',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Computing an SVD',
      blocks: [
        {
          type: 'p',
          text: 'The recipe comes straight from $\\|A\\mathbf{v}\\|^2 = (A\\mathbf{v}) \\cdot (A\\mathbf{v}) = \\mathbf{v}^{T}A^{T}A\\mathbf{v}$. The matrix $A^{T}A$ is symmetric, so by the Spectral Theorem it has an orthonormal eigenvector basis $\\mathbf{v}_1, \\dots, \\mathbf{v}_n$. Its eigenvalues are never negative: $\\lambda_i = \\lambda_i\\|\\mathbf{v}_i\\|^2 = \\mathbf{v}_i^{T}A^{T}A\\mathbf{v}_i = \\|A\\mathbf{v}_i\\|^2 \\ge 0$. So $\\sigma_i = \\sqrt{\\lambda_i} = \\|A\\mathbf{v}_i\\|$.',
        },
        {
          type: 'steps',
          items: [
            { title: 'Eigen-decompose $A^{T}A$', text: 'Find its eigenvalues $\\lambda_1 \\ge \\lambda_2 \\ge \\cdots \\ge 0$ and orthonormal eigenvectors $\\mathbf{v}_1, \\mathbf{v}_2, \\dots$. These are the columns of $V$.' },
            { title: 'Singular values', text: '$\\sigma_i = \\sqrt{\\lambda_i}$, placed on the diagonal of $\\Sigma$ in decreasing order.' },
            { title: 'Left singular vectors', text: 'For each $\\sigma_i > 0$, $\\mathbf{u}_i = \\frac{1}{\\sigma_i}A\\mathbf{v}_i$. (If $U$ needs more columns, extend to an orthonormal basis of $\\mathbb{R}^m$.)' },
          ],
        },
        {
          type: 'derivation',
          title: 'SVD of $A = \\begin{bmatrix} 3 & 0 \\\\ 4 & 5 \\end{bmatrix}$',
          steps: [
            { tex: 'A^{T}A = \\begin{bmatrix} 3 & 4 \\\\ 0 & 5 \\end{bmatrix}\\begin{bmatrix} 3 & 0 \\\\ 4 & 5 \\end{bmatrix} = \\begin{bmatrix} 25 & 20 \\\\ 20 & 25 \\end{bmatrix}', why: 'Entries are dot products of the columns of $A$: $9 + 16$, $0 + 20$, $0 + 25$.' },
            { tex: '(25 - \\lambda)^2 - 400 = 0 \\implies \\lambda_1 = 45, \\; \\lambda_2 = 5', why: '$25 - \\lambda = \\pm 20$.' },
            { tex: '\\mathbf{v}_1 = \\tfrac{1}{\\sqrt{2}}\\begin{bmatrix} 1 \\\\ 1 \\end{bmatrix}, \\quad \\mathbf{v}_2 = \\tfrac{1}{\\sqrt{2}}\\begin{bmatrix} 1 \\\\ -1 \\end{bmatrix}', why: 'For $\\lambda = 45$, $A^{T}A - 45I = \\begin{bmatrix} -20 & 20 \\\\ 20 & -20 \\end{bmatrix}$ gives $v_1 = v_2$; for $\\lambda = 5$, rows $20v_1 + 20v_2 = 0$. Normalize.' },
            { tex: '\\sigma_1 = \\sqrt{45} = 3\\sqrt{5}, \\quad \\sigma_2 = \\sqrt{5}', why: 'Square roots of the eigenvalues. Check: $\\sigma_1\\sigma_2 = 15 = |\\det A|$.' },
            { tex: '\\mathbf{u}_1 = \\frac{A\\mathbf{v}_1}{\\sigma_1} = \\frac{1}{3\\sqrt{5}} \\cdot \\frac{1}{\\sqrt{2}}\\begin{bmatrix} 3 \\\\ 9 \\end{bmatrix} = \\frac{1}{\\sqrt{10}}\\begin{bmatrix} 1 \\\\ 3 \\end{bmatrix}', why: '$A(1, 1) = (3, 9)$; and $\\frac{3}{3\\sqrt{5}\\sqrt{2}} = \\frac{1}{\\sqrt{10}}$.' },
            { tex: '\\mathbf{u}_2 = \\frac{A\\mathbf{v}_2}{\\sigma_2} = \\frac{1}{\\sqrt{5}} \\cdot \\frac{1}{\\sqrt{2}}\\begin{bmatrix} 3 \\\\ -1 \\end{bmatrix} = \\frac{1}{\\sqrt{10}}\\begin{bmatrix} 3 \\\\ -1 \\end{bmatrix}', why: '$A(1, -1) = (3, -1)$. Check $\\mathbf{u}_1 \\cdot \\mathbf{u}_2 = \\frac{3 - 3}{10} = 0$.' },
            { tex: 'A = \\underbrace{\\tfrac{1}{\\sqrt{10}}\\begin{bmatrix} 1 & 3 \\\\ 3 & -1 \\end{bmatrix}}_{U}\\underbrace{\\begin{bmatrix} 3\\sqrt{5} & 0 \\\\ 0 & \\sqrt{5} \\end{bmatrix}}_{\\Sigma}\\underbrace{\\tfrac{1}{\\sqrt{2}}\\begin{bmatrix} 1 & 1 \\\\ 1 & -1 \\end{bmatrix}}_{V^{T}}', why: 'Assemble ($V$ happens to be symmetric, so $V^{T} = V$). Multiplying out returns $A$.' },
          ],
          result: '$A$ stretches by at most $3\\sqrt{5} \\approx 6.71$ (in direction $\\mathbf{v}_1$) and at least $\\sqrt{5} \\approx 2.24$ (in direction $\\mathbf{v}_2$).',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the $\\mathbf{u}_i$ come out orthonormal',
          text: '$(A\\mathbf{v}_i) \\cdot (A\\mathbf{v}_j) = \\mathbf{v}_i^{T}A^{T}A\\mathbf{v}_j = \\lambda_j(\\mathbf{v}_i \\cdot \\mathbf{v}_j)$, which is $0$ for $i \\ne j$ and $\\lambda_i = \\sigma_i^2$ for $i = j$. So the images $A\\mathbf{v}_i$ are perpendicular with lengths $\\sigma_i$, and dividing by $\\sigma_i$ makes them unit vectors. The perpendicular inputs $\\mathbf{v}_i$ are exactly the ones whose outputs stay perpendicular.',
        },
        {
          type: 'callout',
          variant: 'warning',
          text: 'Singular values are not eigenvalues of $A$. For $\\begin{bmatrix} 3 & 0 \\\\ 4 & 5 \\end{bmatrix}$ (triangular), the eigenvalues are $3$ and $5$, while the singular values are $6.71$ and $2.24$. They agree only in special cases, such as a symmetric matrix with nonnegative eigenvalues.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'Find the singular values of $A = \\begin{bmatrix} 2 & 2 \\\\ 1 & -1 \\end{bmatrix}$. Enter both.',
      hint: 'Compute $A^{T}A$ first; it is $\\begin{bmatrix} 5 & 3 \\\\ 3 & 5 \\end{bmatrix}$.',
      answer: ['2sqrt(2)', 'sqrt(2)'],
      answerTex: '2\\sqrt{2},\\ \\sqrt{2}',
      explanation: '$A^{T}A = \\begin{bmatrix} 4 + 1 & 4 - 1 \\\\ 4 - 1 & 4 + 1 \\end{bmatrix} = \\begin{bmatrix} 5 & 3 \\\\ 3 & 5 \\end{bmatrix}$, with eigenvalues $5 \\pm 3 = 8, 2$. So $\\sigma_1 = \\sqrt{8} = 2\\sqrt{2} \\approx 2.83$ and $\\sigma_2 = \\sqrt{2} \\approx 1.41$. Check: $\\sigma_1\\sigma_2 = 4 = |\\det A| = |-2 - 2|$.',
    },
    {
      kind: 'error',
      prompt: 'A student finds the largest stretch factor of $A = \\begin{bmatrix} 4 & 0 \\\\ 3 & -5 \\end{bmatrix}$. Tap the first wrong line.',
      lines: [
        '$A^{T}A = \\begin{bmatrix} 16 + 9 & -15 \\\\ -15 & 25 \\end{bmatrix} = \\begin{bmatrix} 25 & -15 \\\\ -15 & 25 \\end{bmatrix}$',
        '$\\det(A^{T}A - \\lambda I) = (25 - \\lambda)^2 - 225 = 0$',
        '$25 - \\lambda = \\pm 15$, so $\\lambda = 40$ or $\\lambda = 10$',
        '$\\sigma_1 = 40$ and $\\sigma_2 = 10$',
        'So $A$ stretches the unit circle by at most $40$',
      ],
      errorLines: [4],
      explanation: 'Line 4 forgets the square root: singular values are $\\sigma_i = \\sqrt{\\lambda_i}$, so $\\sigma_1 = \\sqrt{40} = 2\\sqrt{10} \\approx 6.32$ and $\\sigma_2 = \\sqrt{10} \\approx 3.16$. A quick check would have caught it: $\\sigma_1\\sigma_2$ must equal $|\\det A| = |-20| = 20$, and $40 \\cdot 10 = 400 = (\\det A)^2$. The eigenvalues of $A^{T}A$ are **squared** stretches.',
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'concept',
      title: 'Low-rank approximation, compression and PCA',
      blocks: [
        {
          type: 'p',
          text: 'Multiply out $U\\Sigma V^{T}$ column by row and the SVD becomes a sum of simple pieces, each a rank-1 matrix (an outer product $\\mathbf{u}_i\\mathbf{v}_i^{T}$, every row a multiple of $\\mathbf{v}_i^{T}$), weighted by importance:',
        },
        {
          type: 'math',
          tex: 'A = \\sigma_1\\mathbf{u}_1\\mathbf{v}_1^{T} + \\sigma_2\\mathbf{u}_2\\mathbf{v}_2^{T} + \\cdots + \\sigma_r\\mathbf{u}_r\\mathbf{v}_r^{T}',
        },
        {
          type: 'p',
          text: 'Keep only the first $k$ terms and you get $A_k$, the [[la-low-rank-approximation|rank-$k$ approximation]] of $A$. The **Eckart–Young theorem** says no matrix of rank $k$ is closer to $A$ (measuring distance as the square root of the sum of squared entry differences), and the error is governed by the singular values you threw away. It is the Best Approximation Theorem again, now in a space of matrices.',
        },
        {
          type: 'derivation',
          title: 'Rank-1 approximation of $A = \\begin{bmatrix} 3 & 0 \\\\ 4 & 5 \\end{bmatrix}$',
          steps: [
            { tex: 'A_1 = \\sigma_1\\mathbf{u}_1\\mathbf{v}_1^{T} = 3\\sqrt{5} \\cdot \\tfrac{1}{\\sqrt{10}}\\begin{bmatrix} 1 \\\\ 3 \\end{bmatrix} \\tfrac{1}{\\sqrt{2}}\\begin{bmatrix} 1 & 1 \\end{bmatrix}', why: 'The first term of the sum, using the SVD from the previous card.' },
            { tex: '= \\tfrac{3}{2}\\begin{bmatrix} 1 & 1 \\\\ 3 & 3 \\end{bmatrix} = \\begin{bmatrix} 1.5 & 1.5 \\\\ 4.5 & 4.5 \\end{bmatrix}', why: '$\\frac{3\\sqrt{5}}{\\sqrt{10}\\sqrt{2}} = \\frac{3\\sqrt{5}}{\\sqrt{20}} = \\frac{3}{2}$; the outer product $(1, 3)(1, 1)^{T}$ has rows $(1, 1)$ and $(3, 3)$.' },
            { tex: 'A - A_1 = \\begin{bmatrix} 1.5 & -1.5 \\\\ -0.5 & 0.5 \\end{bmatrix}, \\quad \\sqrt{1.5^2 + 1.5^2 + 0.5^2 + 0.5^2} = \\sqrt{5} = \\sigma_2', why: 'The error is exactly the discarded term $\\sigma_2\\mathbf{u}_2\\mathbf{v}_2^{T}$, and its size is the discarded singular value.' },
          ],
          result: 'One rank-1 matrix (5 numbers stored as $\\sigma_1$, $\\mathbf{u}_1$, $\\mathbf{v}_1$) captures most of $A$; the dropped part has size $\\sqrt{5}$ out of a total $\\sqrt{50}$.',
        },
        {
          type: 'p',
          text: '**Image compression.** A grayscale image is an $m \\times n$ matrix of brightness values. Natural images have rapidly decaying singular values, so $A_k$ with small $k$ already looks right. Storing $A_k$ takes $k$ numbers $\\sigma_i$, $k$ vectors $\\mathbf{u}_i$ of length $m$ and $k$ vectors $\\mathbf{v}_i$ of length $n$: $k(m + n + 1)$ numbers instead of $mn$. For a $1000 \\times 1000$ image and $k = 50$ that is about $100{,}000$ numbers instead of $1{,}000{,}000$. (JPEG uses a fixed cosine basis instead, which is faster, but the "keep the big coefficients" idea is the same.)',
        },
        {
          type: 'p',
          text: '**Principal component analysis (PCA).** Put $N$ data points (rows) in a matrix, subtract the mean of each column so the cloud is centred at the origin, and take the SVD. The right singular vectors $\\mathbf{v}_1, \\mathbf{v}_2, \\dots$ are the [[la-pca|principal components]]: $\\mathbf{v}_1$ is the direction along which the data is most spread out, $\\mathbf{v}_2$ the most spread direction perpendicular to it, and so on. The variance along $\\mathbf{v}_i$ is $\\sigma_i^2/(N - 1)$, and these are the eigenvectors of the (symmetric) covariance matrix. Projecting onto the first few components reduces dimension while keeping as much variation as possible.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'SVD and PCA in engine code',
          text: '**Oriented bounding boxes:** run PCA on a mesh\'s vertices and use the principal axes as the box axes, giving a much tighter collision box than an axis-aligned one. **Animation compression:** a long clip is a big matrix (frames × joint channels); a truncated SVD stores it in a fraction of the memory. **Nearest rotation:** for a drifted matrix $M = U\\Sigma V^{T}$, the closest orthogonal matrix is $UV^{T}$ (set every $\\sigma_i$ to $1$), which re-orthonormalizes without favouring any axis, unlike Gram–Schmidt. The same trick (the Kabsch algorithm) finds the best rotation aligning two point sets, used in physics shape matching and motion capture.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'An $800 \\times 600$ grayscale image is stored as a rank-$20$ SVD approximation ($\\sigma_1, \\dots, \\sigma_{20}$ plus the corresponding $\\mathbf{u}_i$ and $\\mathbf{v}_i$). How many numbers does that take?',
      hint: 'Each term needs one $\\sigma_i$, one $\\mathbf{u}_i$ with $800$ entries and one $\\mathbf{v}_i$ with $600$ entries.',
      label: 'numbers stored $=$',
      answer: '28020',
      explanation: 'Each rank-1 term costs $1 + 800 + 600 = 1401$ numbers, so $20$ terms cost $20 \\times 1401 = 28{,}020$. The full image has $800 \\times 600 = 480{,}000$ pixels, so this is under $6\\%$ of the original. Whether it *looks* acceptable depends on how fast the image\'s singular values decay.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'Looking back: what this course built',
      blocks: [
        {
          type: 'p',
          text: 'The SVD is a fitting place to finish, because almost every idea in this course is inside it. Here is the path you took.',
        },
        {
          type: 'table',
          headers: ['Unit', 'The big idea', 'Where it lives in an engine'],
          rows: [
            ['Vectors', 'Linear combinations, span, dot and cross products', 'Positions, velocities, lighting ($\\mathbf{n} \\cdot \\mathbf{l}$), facing tests, normals'],
            ['Linear systems', 'Row reduction solves $A\\mathbf{x} = \\mathbf{b}$ and describes every solution', 'Constraint solvers, intersection of lines and planes'],
            ['Transformations', 'A linear map is determined by where it sends $\\mathbf{e}_1, \\dots, \\mathbf{e}_n$', 'Rotations, scales, shears, reflections'],
            ['Matrix algebra', 'Multiplication is composition; inverses undo', 'Model–view–projection chains, $4 \\times 4$ homogeneous transforms'],
            ['Determinants', 'Signed area and volume scale factor', 'Winding order, back-face culling, detecting mirrored transforms'],
            ['Vector spaces', 'Subspaces, bases, dimension, rank, coordinates', 'Local versus world space, change of basis'],
            ['Eigenvalues', 'Directions a matrix only stretches; $A = PDP^{-1}$', 'Stability of simulations, PageRank, Markov chains'],
            ['Orthogonality', 'Projections, Gram–Schmidt, least squares, SVD', 'Camera bases, collision, curve fitting, compression, PCA'],
          ],
          caption: 'Eight units, one toolkit.',
        },
        {
          type: 'p',
          text: 'In $A = U\\Sigma V^{T}$: $U$ and $V$ are orthogonal matrices, **changes of basis** to perpendicular axes, the rotations of the transformations unit. $\\Sigma$ is the **diagonal** matrix of diagonalization, with the **rank** visible as its number of nonzero entries. The $\\sigma_i$ come from **eigenvalues** of the symmetric matrix $A^{T}A$, and their product is $|\\det A|$ for a square matrix. The first $r$ columns of $U$ are an orthonormal basis of $\\operatorname{Col} A$, and the last $n - r$ columns of $V$ are one for $\\operatorname{Nul} A$. Truncating the sum is a **projection** onto the best low-rank approximation, and the SVD solves **least-squares** problems even when the columns are dependent.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Where to go next',
          text: 'Natural next steps for a game programmer: **quaternions** (rotations without matrix drift or gimbal lock), **numerical linear algebra** (LU, QR and SVD algorithms and their stability), **multivariable calculus** (gradients, Jacobians and Hessians are matrices; positive definite Hessians mean minima), and **computer graphics** texts, which use every chapter of this course on every frame. A great way to consolidate it all: write a small math library (vec3, mat3, mat4, quaternion, a least-squares fitter) in C++ and test it against the worked examples here.',
        },
        {
          type: 'callout',
          variant: 'history',
          text: 'The SVD was discovered independently by Eugenio Beltrami (1873) and Camille Jordan (1874) as a fact about quadratic forms. It became a practical tool only in 1965, when Gene Golub and William Kahan published a stable way to compute it on a computer. Today it runs inside search engines, recommendation systems, image processing and almost every numerical library.',
        },
      ],
    },
  ],
  takeaways: [
    'A symmetric matrix ($A^{T} = A$) has real eigenvalues and perpendicular eigenvectors for distinct eigenvalues.',
    'Spectral Theorem: $A$ is orthogonally diagonalizable, $A = PDP^{T}$ with $P$ orthogonal, if and only if $A$ is symmetric.',
    'A quadratic form $\\mathbf{x}^{T}A\\mathbf{x}$ loses its cross terms in eigenvector coordinates; positive eigenvalues give elliptical level curves along the eigenvectors.',
    'Every matrix has an SVD $A = U\\Sigma V^{T}$: rotate, stretch along axes, rotate. The unit circle maps to an ellipse with semi-axes $\\sigma_i\\mathbf{u}_i = A\\mathbf{v}_i$.',
    'Singular values are $\\sigma_i = \\sqrt{\\lambda_i(A^{T}A)}$; the $\\mathbf{v}_i$ are eigenvectors of $A^{T}A$ and $\\mathbf{u}_i = A\\mathbf{v}_i / \\sigma_i$.',
    'Truncating $A = \\sum \\sigma_i\\mathbf{u}_i\\mathbf{v}_i^{T}$ gives the best rank-$k$ approximation: compression, PCA, bounding boxes and nearest rotations all follow.',
  ],
  reading: [
    {
      title: 'Wikipedia — Singular value decomposition',
      url: 'https://en.wikipedia.org/wiki/Singular_value_decomposition',
      source: 'wikipedia',
      note: 'The rotate–stretch–rotate animation, the connection to eigenvalues, and a long list of applications including the pseudoinverse and low-rank approximation.',
    },
    {
      title: 'Wikipedia — Spectral theorem',
      url: 'https://en.wikipedia.org/wiki/Spectral_theorem',
      source: 'wikipedia',
      note: 'The finite-dimensional statement for symmetric matrices and how it generalizes far beyond this course.',
    },
    {
      title: 'Wikipedia — Principal component analysis',
      url: 'https://en.wikipedia.org/wiki/Principal_component_analysis',
      source: 'wikipedia',
      note: 'PCA via the SVD and via the covariance matrix, with pictures of principal axes of a point cloud.',
    },
    {
      title: 'MIT OCW 18.06 (Strang) — Symmetric matrices and the SVD',
      url: 'https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/',
      source: 'other',
      note: 'Lectures 25 and 29 cover symmetric matrices, positive definiteness and the SVD, with the same $A^{T}A$ recipe used here.',
    },
    {
      title: '3Blue1Brown — Essence of linear algebra',
      url: 'https://www.3blue1brown.com/topics/linear-algebra',
      source: 'video',
      note: 'The whole series is a perfect visual review of the course, from vectors and transformations to eigenvectors.',
    },
  ],
};
