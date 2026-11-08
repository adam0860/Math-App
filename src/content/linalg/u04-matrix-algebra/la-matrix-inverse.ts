import type { Lesson } from '../../types';

// Rotation by d degrees, used in the "undo a rotation" graph.
const C = 'cos(d*pi/180)';
const S = 'sin(d*pi/180)';

export const lesson: Lesson = {
  id: 'la-matrix-inverse',
  title: 'The Inverse of a Matrix',
  summary: 'Undo a transformation: the 2×2 inverse formula, inverse rules, elementary matrices, and row reducing [A | I] to [I | A⁻¹].',
  minutes: 19,
  objectives: [
    'Define an invertible matrix and verify a proposed inverse by multiplying',
    'Invert a $2 \\times 2$ matrix with the formula and explain why it works and when it fails',
    'Solve $A\\mathbf{x} = \\mathbf{b}$ with $A^{-1}$, and explain why software row reduces instead',
    'Use $(AB)^{-1} = B^{-1}A^{-1}$ and $(A^{T})^{-1} = (A^{-1})^{T}$',
    'Find $A^{-1}$ by row reducing $\\left[\\begin{array}{c|c} A & I \\end{array}\\right]$, and explain the method with elementary matrices',
    'Invert rotations, scales, shears and reflections geometrically',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Undoing a matrix',
      blocks: [
        {
          type: 'p',
          text: 'For numbers, $5^{-1} = \\frac{1}{5}$ undoes multiplication by $5$: $\\frac{1}{5} \\cdot 5 = 1$. For matrices the question is: given the transformation $\\mathbf{x} \\mapsto A\\mathbf{x}$, is there a matrix that sends every output back to the input it came from? In a game this is everyday work: turning a world-space hit point back into a character\'s local space, or building a camera\'s view matrix, means inverting a transform.',
        },
        {
          type: 'definition',
          term: 'Invertible matrix',
          text: 'An $n \\times n$ matrix $A$ is [[invertible-matrix|invertible]] if there is an $n \\times n$ matrix $C$ with\n\n$$CA = I_n \\quad \\text{and} \\quad AC = I_n.$$\n\nThen $C$ is the [[inverse-matrix|inverse]] of $A$, written $A^{-1}$. A square matrix that is not invertible is called [[singular-matrix|singular]].',
        },
        {
          type: 'p',
          text: 'Only [[square-matrix|square matrices]] get inverses in this sense. (A $3 \\times 2$ matrix maps $\\mathbb{R}^2$ into $\\mathbb{R}^3$; it cannot hit every point of $\\mathbb{R}^3$, so no matrix can undo it in both directions.) Checking a claimed inverse is easy — just multiply:',
        },
        {
          type: 'derivation',
          title: 'Check that $C = \\begin{bmatrix} -7 & -5 \\\\ 3 & 2 \\end{bmatrix}$ inverts $A = \\begin{bmatrix} 2 & 5 \\\\ -3 & -7 \\end{bmatrix}$',
          steps: [
            { tex: 'AC = \\begin{bmatrix} 2(-7) + 5(3) & 2(-5) + 5(2) \\\\ -3(-7) - 7(3) & -3(-5) - 7(2) \\end{bmatrix}', why: 'Row–column rule for each of the four entries.' },
            { tex: '= \\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix} = I_2', why: 'Arithmetic: $-14 + 15 = 1$, $-10 + 10 = 0$, $21 - 21 = 0$, $15 - 14 = 1$.' },
            { tex: 'CA = \\begin{bmatrix} -7(2) - 5(-3) & -7(5) - 5(-7) \\\\ 3(2) + 2(-3) & 3(5) + 2(-7) \\end{bmatrix} = I_2', why: 'The definition asks for both orders, since matrix products do not commute in general. (The Invertible Matrix Theorem will show one order is enough for square matrices.)' },
          ],
          result: '$A^{-1} = \\begin{bmatrix} -7 & -5 \\\\ 3 & 2 \\end{bmatrix}$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why we can say *the* inverse',
          text: 'Suppose $B$ and $C$ both work: $BA = AB = I$ and $CA = AC = I$. Then $B = BI = B(AC) = (BA)C = IC = C$. Associativity forces any two inverses to be equal, so the notation $A^{-1}$ is unambiguous.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'truefalse',
      prompt: 'A $2 \\times 3$ matrix $A$ can be invertible if its rows are linearly independent.',
      answer: false,
      explanation: 'Invertibility is defined only for square matrices: we need $CA = I$ and $AC = I$ with the same $C$. For a $2 \\times 3$ matrix, $C$ would have to be $3 \\times 2$, making $CA$ a $3 \\times 3$ matrix — but $CA\\mathbf{x} = C(A\\mathbf{x})$ passes through $\\mathbb{R}^2$, so every output is a combination of the two columns of $C$. Two vectors cannot span $\\mathbb{R}^3$, so $CA$ misses some vectors and can never equal $I_3$. Independent rows give a one-sided inverse ($AC = I_2$ is possible), not a true inverse.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'The 2×2 formula',
      blocks: [
        {
          type: 'p',
          text: 'For $2 \\times 2$ matrices there is a formula worth memorising: swap the diagonal entries, negate the off-diagonal entries, and divide by one special number.',
        },
        {
          type: 'theorem',
          name: 'Inverse of a 2×2 matrix',
          tex: 'A = \\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix}, \\qquad A^{-1} = \\frac{1}{ad - bc}\\begin{bmatrix} d & -b \\\\ -c & a \\end{bmatrix} \\quad (ad - bc \\ne 0)',
          text: 'If $ad - bc = 0$, then $A$ is not invertible. The number $ad - bc$ is the [[determinant]] of $A$, $\\det A$; determinants get their own unit next.',
        },
        {
          type: 'derivation',
          title: 'Why the formula works',
          steps: [
            { tex: '\\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix}\\begin{bmatrix} d & -b \\\\ -c & a \\end{bmatrix} = \\begin{bmatrix} ad - bc & -ab + ba \\\\ cd - dc & -cb + da \\end{bmatrix}', why: 'Multiply $A$ by the "swap and negate" matrix using the row–column rule.' },
            { tex: '= (ad - bc)\\,I_2', why: 'The off-diagonal entries cancel, and both diagonal entries equal $ad - bc$.' },
            { tex: 'A \\cdot \\tfrac{1}{ad - bc}\\begin{bmatrix} d & -b \\\\ -c & a \\end{bmatrix} = I_2', why: 'If $ad - bc \\ne 0$, divide by it (a scalar moves freely through the product). The same computation in the other order also gives $I_2$.' },
          ],
          result: 'Whenever $ad - bc \\ne 0$, the formula gives a matrix that multiplies $A$ to $I$ on both sides.',
        },
        {
          type: 'derivation',
          title: 'Invert $A = \\begin{bmatrix} 4 & 7 \\\\ 2 & 6 \\end{bmatrix}$',
          steps: [
            { tex: 'ad - bc = 4 \\cdot 6 - 7 \\cdot 2 = 10', why: 'Nonzero, so $A$ is invertible.' },
            { tex: 'A^{-1} = \\frac{1}{10}\\begin{bmatrix} 6 & -7 \\\\ -2 & 4 \\end{bmatrix}', why: 'Swap $4$ and $6$, negate $7$ and $2$, divide by $10$.' },
            { tex: '= \\begin{bmatrix} 0.6 & -0.7 \\\\ -0.2 & 0.4 \\end{bmatrix}', why: 'Distribute the scalar $\\frac{1}{10}$.' },
          ],
          result: 'Check one entry of $AA^{-1}$: row 1 of $A$ with column 1 of $A^{-1}$ gives $4(0.6) + 7(-0.2) = 2.4 - 1.4 = 1$. ✓',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why $ad - bc = 0$ means no inverse',
          text: 'If $ad - bc = 0$, the computation above says $A\\begin{bmatrix} d \\\\ -c \\end{bmatrix} = \\mathbf{0}$ and $A\\begin{bmatrix} -b \\\\ a \\end{bmatrix} = \\mathbf{0}$. Unless $A = 0$ (clearly not invertible), one of these vectors is nonzero, so $A$ sends a nonzero vector to $\\mathbf{0}$ — and it also sends $\\mathbf{0}$ to $\\mathbf{0}$. Two different inputs, one output: no matrix can undo that. Geometrically, $ad - bc = 0$ means the columns $(a, c)$ and $(b, d)$ are parallel, so the whole plane gets flattened onto a line.',
        },
        {
          type: 'graph',
          x: [-3, 5],
          y: [-3, 5],
          equal: true,
          segments: [
            { from: [0, 0], to: ['a', 'c'], color: 'blue', arrow: true, label: 'Ae1' },
            { from: [0, 0], to: ['b', 'd'], color: 'red', arrow: true, label: 'Ae2' },
            { from: ['a', 'c'], to: ['a + b', 'c + d'], color: 'gray' },
            { from: ['b', 'd'], to: ['a + b', 'c + d'], color: 'gray' },
          ],
          sliders: [
            { name: 'a', min: -2, max: 3, step: 0.1, value: 2, label: '$a$' },
            { name: 'b', min: -2, max: 3, step: 0.1, value: 1, label: '$b$' },
            { name: 'c', min: -2, max: 3, step: 0.1, value: 1, label: '$c$' },
            { name: 'd', min: -2, max: 3, step: 0.1, value: 2, label: '$d$' },
          ],
          readouts: [
            { label: '$ad - bc =$', expr: 'a*d - b*c' },
            { label: '$(A^{-1})_{11} = \\frac{d}{ad - bc} =$', expr: 'd/(a*d - b*c)' },
            { label: '$(A^{-1})_{12} = \\frac{-b}{ad - bc} =$', expr: '-b/(a*d - b*c)' },
          ],
          caption: 'The image of the unit square under $A$. Make the two column arrows nearly parallel (try $a = 2, b = 1, c = 1, d = 0.6$): the parallelogram flattens, $ad - bc$ heads to $0$, and the entries of $A^{-1}$ blow up. At exactly $ad - bc = 0$ the inverse is undefined.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'fill',
      prompt: 'Use the formula to find the inverse of $A = \\begin{bmatrix} 5 & 2 \\\\ 7 & 3 \\end{bmatrix}$. Type the entries of $A^{-1}$.',
      template: 'Row 1: ___ , ___\nRow 2: ___ , ___',
      blanks: [{ answers: ['3'] }, { answers: ['-2'] }, { answers: ['-7'] }, { answers: ['5'] }],
      hint: 'First compute $ad - bc = 5 \\cdot 3 - 2 \\cdot 7$.',
      explanation: '$ad - bc = 15 - 14 = 1$, so $A^{-1} = \\frac{1}{1}\\begin{bmatrix} 3 & -2 \\\\ -7 & 5 \\end{bmatrix} = \\begin{bmatrix} 3 & -2 \\\\ -7 & 5 \\end{bmatrix}$. Check: row 1 of $A$ with column 1 of $A^{-1}$ gives $15 - 14 = 1$, and with column 2 gives $-10 + 10 = 0$.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'numeric',
      prompt: 'For which values of $k$ is $\\begin{bmatrix} k & 2 \\\\ 8 & k \\end{bmatrix}$ **not** invertible? Enter all values, separated by commas.',
      label: '$k =$',
      answer: ['4', '-4'],
      answerTex: 'k = 4 \\text{ or } k = -4',
      hint: 'The matrix is singular exactly when $ad - bc = 0$.',
      explanation: '$ad - bc = k \\cdot k - 2 \\cdot 8 = k^2 - 16$, which is $0$ when $k = \\pm 4$. For $k = 4$ the columns are $(4, 8)$ and $(2, 4)$ — parallel, since the first is twice the second. For $k = -4$ they are $(-4, 8)$ and $(2, -4)$, again parallel. Forgetting the negative root is the usual slip.',
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'concept',
      title: 'Solving Ax = b with an inverse (and why software doesn\'t)',
      blocks: [
        {
          type: 'theorem',
          name: 'Unique solutions from an inverse',
          text: 'If $A$ is an invertible $n \\times n$ matrix, then for every $\\mathbf{b}$ in $\\mathbb{R}^n$ the equation $A\\mathbf{x} = \\mathbf{b}$ has the **unique** solution $\\mathbf{x} = A^{-1}\\mathbf{b}$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why: existence and uniqueness',
          text: '**It is a solution:** $A(A^{-1}\\mathbf{b}) = (AA^{-1})\\mathbf{b} = I\\mathbf{b} = \\mathbf{b}$. **It is the only one:** if $A\\mathbf{u} = \\mathbf{b}$, multiply both sides on the left by $A^{-1}$ to get $A^{-1}A\\mathbf{u} = A^{-1}\\mathbf{b}$, that is, $\\mathbf{u} = A^{-1}\\mathbf{b}$. That left-multiplication is exactly the "cancellation" that failed in the last lesson — it is legal now because $A^{-1}$ exists.',
        },
        {
          type: 'derivation',
          title: 'Solve $3x_1 + 5x_2 = 7$, $\\; x_1 + 2x_2 = 3$',
          steps: [
            { tex: 'A = \\begin{bmatrix} 3 & 5 \\\\ 1 & 2 \\end{bmatrix}, \\quad \\mathbf{b} = \\begin{bmatrix} 7 \\\\ 3 \\end{bmatrix}', why: 'Write the system as $A\\mathbf{x} = \\mathbf{b}$.' },
            { tex: 'A^{-1} = \\frac{1}{3 \\cdot 2 - 5 \\cdot 1}\\begin{bmatrix} 2 & -5 \\\\ -1 & 3 \\end{bmatrix} = \\begin{bmatrix} 2 & -5 \\\\ -1 & 3 \\end{bmatrix}', why: '$ad - bc = 1$; swap the diagonal, negate the off-diagonal.' },
            { tex: '\\mathbf{x} = A^{-1}\\mathbf{b} = \\begin{bmatrix} 2(7) - 5(3) \\\\ -1(7) + 3(3) \\end{bmatrix} = \\begin{bmatrix} -1 \\\\ 2 \\end{bmatrix}', why: 'Multiply the inverse by $\\mathbf{b}$.' },
            { tex: '3(-1) + 5(2) = 7, \\quad -1 + 2(2) = 3 \\;\\checkmark', why: 'Always worth substituting back.' },
          ],
          result: '$x_1 = -1$, $x_2 = 2$.',
        },
        {
          type: 'p',
          text: 'That is elegant for theory and for $2 \\times 2$ hand work. For real computation, though, numerical software **does not** form $A^{-1}$ to solve one system. Row reduction (as an LU factorization) costs about $\\frac{2}{3}n^3$ arithmetic operations; computing $A^{-1}$ costs about $2n^3$ — roughly three times as much — and then you still multiply $A^{-1}\\mathbf{b}$. Forming the inverse also tends to amplify rounding error.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Solve, don\'t invert',
          text: 'In a numerics library like Eigen you write `x = A.partialPivLu().solve(b);` rather than `x = A.inverse() * b;`. The big exception is games: a $4 \\times 4$ transform is inverted once per frame and then applied to thousands of points, and rigid transforms have cheap special-case inverses (coming up at the end of this lesson and in the homogeneous-coordinates lesson). There, `glm::inverse(m)` is exactly the right tool.',
        },
      ],
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'numeric',
      prompt: 'The matrix $A = \\begin{bmatrix} 2 & 1 \\\\ 5 & 3 \\end{bmatrix}$ has $A^{-1} = \\begin{bmatrix} 3 & -1 \\\\ -5 & 2 \\end{bmatrix}$. Use it to solve $A\\mathbf{x} = \\begin{bmatrix} 4 \\\\ 9 \\end{bmatrix}$. What is $x_2$?',
      label: '$x_2 =$',
      answer: '-2',
      hint: '$x_2$ is row 2 of $A^{-1}$ dotted with $\\mathbf{b}$.',
      explanation: '$\\mathbf{x} = A^{-1}\\mathbf{b} = \\begin{bmatrix} 3(4) - 1(9) \\\\ -5(4) + 2(9) \\end{bmatrix} = \\begin{bmatrix} 3 \\\\ -2 \\end{bmatrix}$, so $x_2 = -2$. Check in the original system: $2(3) + (-2) = 4$ and $5(3) + 3(-2) = 9$. ✓',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'concept',
      title: 'Algebra of inverses: socks and shoes',
      blocks: [
        {
          type: 'theorem',
          name: 'Properties of inverses',
          text: 'If $A$ and $B$ are invertible $n \\times n$ matrices, then:\n\n1. $A^{-1}$ is invertible and $(A^{-1})^{-1} = A$.\n2. $AB$ is invertible and $(AB)^{-1} = B^{-1}A^{-1}$.\n3. $A^{T}$ is invertible and $(A^{T})^{-1} = (A^{-1})^{T}$.\n4. For a scalar $r \\ne 0$, $(rA)^{-1} = \\frac{1}{r}A^{-1}$; and $(A^k)^{-1} = (A^{-1})^k$.',
        },
        {
          type: 'derivation',
          title: 'Proof that $(AB)^{-1} = B^{-1}A^{-1}$',
          steps: [
            { tex: '(AB)(B^{-1}A^{-1}) = A(BB^{-1})A^{-1}', why: 'Associativity lets us regroup: the inner $B$ meets its inverse.' },
            { tex: '= AIA^{-1} = AA^{-1} = I', why: '$BB^{-1} = I$, multiplying by $I$ changes nothing, and $AA^{-1} = I$.' },
            { tex: '(B^{-1}A^{-1})(AB) = B^{-1}(A^{-1}A)B = B^{-1}IB = I', why: 'Same idea in the other order: now the inner $A$ meets its inverse.' },
          ],
          result: '$B^{-1}A^{-1}$ multiplies $AB$ to $I$ on both sides, so it is the inverse. The order reverses, just as it did for transposes.',
        },
        {
          type: 'callout',
          variant: 'analogy',
          title: 'Socks and shoes',
          text: 'In the morning you put on socks ($B$), then shoes ($A$): the combined operation is $AB$. To undo it you take off the **shoes first**, then the socks: $B^{-1}A^{-1}$. Undoing a sequence of steps always reverses their order. For three matrices, $(ABC)^{-1} = C^{-1}B^{-1}A^{-1}$.',
        },
        {
          type: 'p',
          text: 'Property 3 follows from the transpose rule: $A^{T}(A^{-1})^{T} = (A^{-1}A)^{T} = I^{T} = I$, and similarly in the other order. This combination — inverse and transpose together — shows up in every 3D renderer:',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Why normals use the inverse transpose',
          text: 'A surface normal $\\mathbf{n}$ is perpendicular to every tangent vector $\\mathbf{u}$ on the surface: $\\mathbf{n}^{T}\\mathbf{u} = 0$. If a model matrix $M$ (say a non-uniform scale) moves tangents to $M\\mathbf{u}$, then $M\\mathbf{n}$ is usually **not** perpendicular any more. Use $\\mathbf{n}\' = (M^{-1})^{T}\\mathbf{n}$ instead: $\\mathbf{n}\'^{T}(M\\mathbf{u}) = \\mathbf{n}^{T}M^{-1}M\\mathbf{u} = \\mathbf{n}^{T}\\mathbf{u} = 0$. In GLM this is `glm::transpose(glm::inverse(glm::mat3(model)))` — the famous "normal matrix" — which GLM also offers as `glm::inverseTranspose`.',
        },
      ],
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'mcq',
      prompt: '$A$, $B$ and $C$ are invertible $n \\times n$ matrices. Which expression equals $(ABC)^{-1}$?',
      options: [
        { text: '$A^{-1}B^{-1}C^{-1}$', why: 'This keeps the original order. Multiply it by $ABC$: $(A^{-1}B^{-1}C^{-1})(ABC)$ has $C^{-1}$ next to $A$, which does not cancel. Only works if the matrices commute.' },
        { text: '$C^{-1}B^{-1}A^{-1}$', correct: true, why: 'Check: $(ABC)(C^{-1}B^{-1}A^{-1}) = AB(CC^{-1})B^{-1}A^{-1} = A(BB^{-1})A^{-1} = AA^{-1} = I$. Each matrix meets its own inverse from the inside out.' },
        { text: '$\\frac{1}{ABC}$', why: 'Dividing by a matrix is not defined. "Division" by a matrix means multiplying by its inverse on a specific side.' },
        { text: '$(CBA)^{T}$', why: 'Transposes and inverses are different operations, and $(CBA)^{T} = A^{T}B^{T}C^{T}$ keeps the original order. Even for orthogonal matrices (where $Q^{T} = Q^{-1}$) it becomes $A^{-1}B^{-1}C^{-1}$, which is the wrong order; the inverse would be $(ABC)^{T}$.' },
      ],
      explanation: 'Socks and shoes with three layers: the transformation $ABC$ applies $C$ first and $A$ last, so undoing it removes $A$ first: $(ABC)^{-1} = C^{-1}B^{-1}A^{-1}$. Notice that $(ABC)(C^{-1}B^{-1}A^{-1})$ cancels from the middle outward.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'concept',
      title: 'Elementary matrices: row operations as multiplication',
      blocks: [
        {
          type: 'p',
          text: 'Here is the bridge between row reduction and matrix algebra. An [[elementary-matrix]] is a matrix obtained by performing **one** elementary [[row-operations|row operation]] on an identity matrix. The remarkable fact: performing that row operation on any $A$ gives the same result as multiplying $EA$.',
        },
        {
          type: 'table',
          headers: ['Row operation on $I_3$', 'Elementary matrix $E$', 'Its inverse $E^{-1}$'],
          rows: [
            ['Replacement $R_3 \\to R_3 - 4R_1$', '$\\begin{bmatrix} 1 & 0 & 0 \\\\ 0 & 1 & 0 \\\\ -4 & 0 & 1 \\end{bmatrix}$', '$\\begin{bmatrix} 1 & 0 & 0 \\\\ 0 & 1 & 0 \\\\ 4 & 0 & 1 \\end{bmatrix}$ (add $4R_1$ back)'],
            ['Interchange $R_1 \\leftrightarrow R_2$', '$\\begin{bmatrix} 0 & 1 & 0 \\\\ 1 & 0 & 0 \\\\ 0 & 0 & 1 \\end{bmatrix}$', 'itself (swap again)'],
            ['Scaling $R_3 \\to 5R_3$', '$\\begin{bmatrix} 1 & 0 & 0 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 5 \\end{bmatrix}$', '$\\begin{bmatrix} 1 & 0 & 0 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & \\frac{1}{5} \\end{bmatrix}$'],
          ],
          caption: 'Every row operation can be reversed by another row operation of the same type, so every elementary matrix is invertible.',
        },
        {
          type: 'math',
          tex: '\\begin{bmatrix} 1 & 0 & 0 \\\\ 0 & 1 & 0 \\\\ -4 & 0 & 1 \\end{bmatrix}\\begin{bmatrix} a & b & c \\\\ d & e & f \\\\ g & h & i \\end{bmatrix} = \\begin{bmatrix} a & b & c \\\\ d & e & f \\\\ g - 4a & h - 4b & i - 4c \\end{bmatrix}',
          caption: 'By the row view of multiplication, row 3 of $EA$ is $(-4, 0, 1)A = -4(\\text{row } 1) + (\\text{row } 3)$: exactly $R_3 - 4R_1$.',
        },
        {
          type: 'theorem',
          name: 'Invertibility and row reduction',
          text: 'An $n \\times n$ matrix $A$ is invertible if and only if $A$ is [[row-equivalent]] to $I_n$. In that case, any sequence of row operations that reduces $A$ to $I_n$ also transforms $I_n$ into $A^{-1}$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the same row operations build the inverse',
          text: 'If row operations $E_1, \\dots, E_k$ take $A$ to $I$, then $(E_k \\cdots E_2E_1)A = I$. The product $E_k \\cdots E_1$ is invertible (each factor is), so multiplying by its inverse gives $A = (E_k \\cdots E_1)^{-1}$, which is invertible, with $A^{-1} = E_k \\cdots E_1 = (E_k \\cdots E_1)\\,I$. Read that last expression aloud: **apply the same row operations to $I$**. Conversely, if $A$ is invertible then $A\\mathbf{x} = \\mathbf{b}$ always has exactly one solution, so there are no [[free-variable|free variables]]: every column has a [[pivot]], and a square matrix with $n$ pivots reduces to $I_n$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'numeric',
      prompt: 'The elementary matrix $E = \\begin{bmatrix} 1 & 0 & 0 \\\\ 0 & 1 & 0 \\\\ 4 & 0 & 1 \\end{bmatrix}$ performs $R_3 \\to R_3 + 4R_1$. What is the $(3, 1)$ entry of $E^{-1}$?',
      label: '$(E^{-1})_{31} =$',
      answer: '-4',
      hint: 'Which row operation undoes "add 4 times row 1 to row 3"? Do that operation to $I_3$.',
      explanation: 'To undo adding $4R_1$ to $R_3$, subtract it again: $R_3 \\to R_3 - 4R_1$. Doing that to $I_3$ gives $E^{-1} = \\begin{bmatrix} 1 & 0 & 0 \\\\ 0 & 1 & 0 \\\\ -4 & 0 & 1 \\end{bmatrix}$, so the entry is $-4$. Check: $E^{-1}E$ has row 3 equal to $(-4)(1, 0, 0) + (4, 0, 1) = (0, 0, 1)$. ✓',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'concept',
      title: 'The algorithm: row reduce [A | I]',
      blocks: [
        {
          type: 'steps',
          items: [
            { title: 'Augment', text: 'Write the $n \\times 2n$ matrix $\\left[\\begin{array}{c|c} A & I \\end{array}\\right]$.' },
            { title: 'Row reduce', text: 'Apply row operations to the **whole** augmented matrix, aiming for $I$ on the left (reduced echelon form).' },
            { title: 'Read off', text: 'If the left block becomes $I$, the right block is $A^{-1}$: $\\left[\\begin{array}{c|c} I & A^{-1} \\end{array}\\right]$. If a row of zeros appears on the left, $A$ has fewer than $n$ pivots and is **not** invertible — stop.' },
          ],
        },
        {
          type: 'derivation',
          title: 'Invert $A = \\begin{bmatrix} 1 & 2 & 3 \\\\ 0 & 1 & 4 \\\\ 5 & 6 & 0 \\end{bmatrix}$',
          steps: [
            { tex: '\\left[\\begin{array}{ccc|ccc} 1 & 2 & 3 & 1 & 0 & 0 \\\\ 0 & 1 & 4 & 0 & 1 & 0 \\\\ 5 & 6 & 0 & 0 & 0 & 1 \\end{array}\\right]', why: 'Augment $A$ with $I_3$.' },
            { tex: '\\xrightarrow{R_3 - 5R_1} \\left[\\begin{array}{ccc|ccc} 1 & 2 & 3 & 1 & 0 & 0 \\\\ 0 & 1 & 4 & 0 & 1 & 0 \\\\ 0 & -4 & -15 & -5 & 0 & 1 \\end{array}\\right]', why: 'Clear below the first pivot. Row 3 becomes $(5, 6, 0 \\mid 0, 0, 1) - 5(1, 2, 3 \\mid 1, 0, 0)$; the right half changes too.' },
            { tex: '\\xrightarrow{R_3 + 4R_2} \\left[\\begin{array}{ccc|ccc} 1 & 2 & 3 & 1 & 0 & 0 \\\\ 0 & 1 & 4 & 0 & 1 & 0 \\\\ 0 & 0 & 1 & -5 & 4 & 1 \\end{array}\\right]', why: 'Clear below the second pivot: $-15 + 16 = 1$. Three pivots, so $A$ is invertible; now work upward.' },
            { tex: '\\xrightarrow{R_2 - 4R_3} \\left[\\begin{array}{ccc|ccc} 1 & 2 & 3 & 1 & 0 & 0 \\\\ 0 & 1 & 0 & 20 & -15 & -4 \\\\ 0 & 0 & 1 & -5 & 4 & 1 \\end{array}\\right]', why: 'Clear above the third pivot in row 2: $(0, 1, 0) - 4(-5, 4, 1) = (20, -15, -4)$ on the right.' },
            { tex: '\\xrightarrow{R_1 - 3R_3} \\left[\\begin{array}{ccc|ccc} 1 & 2 & 0 & 16 & -12 & -3 \\\\ 0 & 1 & 0 & 20 & -15 & -4 \\\\ 0 & 0 & 1 & -5 & 4 & 1 \\end{array}\\right]', why: 'Clear above the third pivot in row 1: $(1, 0, 0) - 3(-5, 4, 1) = (16, -12, -3)$.' },
            { tex: '\\xrightarrow{R_1 - 2R_2} \\left[\\begin{array}{ccc|ccc} 1 & 0 & 0 & -24 & 18 & 5 \\\\ 0 & 1 & 0 & 20 & -15 & -4 \\\\ 0 & 0 & 1 & -5 & 4 & 1 \\end{array}\\right]', why: 'Clear above the second pivot: $(16, -12, -3) - 2(20, -15, -4) = (-24, 18, 5)$. The left block is $I_3$.' },
          ],
          result: '$A^{-1} = \\begin{bmatrix} -24 & 18 & 5 \\\\ 20 & -15 & -4 \\\\ -5 & 4 & 1 \\end{bmatrix}$. Check one entry of $AA^{-1}$: row 1 of $A$ with column 1 of $A^{-1}$ gives $-24 + 40 - 15 = 1$. ✓',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Check your answer',
          text: 'Arithmetic slips are easy in a $3 \\times 6$ reduction. Multiply $A$ by your answer, or at least compute one row of $AA^{-1}$: you should get a row of $I$. Also note: you never need to know in advance whether $A$ is invertible — the algorithm tells you.',
        },
        {
          type: 'code',
          title: 'inverse.cpp',
          runnable: true,
          code: `#include <array>
#include <cmath>
#include <cstdio>
#include <optional>
#include <utility>

using Mat3 = std::array<std::array<double, 3>, 3>;

// Row reduce [A | I] to [I | A^-1]. Returns nothing if A is singular.
std::optional<Mat3> inverse(Mat3 A) {
    Mat3 X{};                                    // right half: starts as I
    for (int i = 0; i < 3; ++i) X[i][i] = 1.0;

    for (int col = 0; col < 3; ++col) {
        int p = col;                             // partial pivoting:
        for (int r = col + 1; r < 3; ++r)        // pick the largest entry
            if (std::fabs(A[r][col]) > std::fabs(A[p][col])) p = r;
        if (std::fabs(A[p][col]) < 1e-12) return std::nullopt;  // no pivot
        std::swap(A[p], A[col]);                 // interchange
        std::swap(X[p], X[col]);

        double s = A[col][col];                  // scale pivot row to 1
        for (int j = 0; j < 3; ++j) { A[col][j] /= s; X[col][j] /= s; }

        for (int r = 0; r < 3; ++r) {            // clear the rest of the column
            if (r == col) continue;
            double f = A[r][col];
            for (int j = 0; j < 3; ++j) {        // replacement: R_r - f R_col
                A[r][j] -= f * A[col][j];
                X[r][j] -= f * X[col][j];
            }
        }
    }
    return X;
}

int main() {
    Mat3 A{{{1, 2, 3}, {0, 1, 4}, {5, 6, 0}}};
    if (auto inv = inverse(A)) {
        for (const auto& row : *inv)
            std::printf("%8.3f %8.3f %8.3f\\n", row[0], row[1], row[2]);
    }
    Mat3 B{{{1, 2, 3}, {4, 5, 9}, {7, 8, 15}}};  // column 3 = column 1 + column 2
    if (!inverse(B)) std::printf("B is singular\\n");
}`,
          output: ` -24.000   18.000    5.000
  20.000  -15.000   -4.000
  -5.000    4.000    1.000
B is singular`,
          annotations: [
            { lines: '11-12', text: 'The right half of $\\left[\\begin{array}{c|c} A & I \\end{array}\\right]$ starts as the identity.' },
            { lines: '15-17', text: 'Partial pivoting: swap up the row with the largest entry in the column. In exact arithmetic any nonzero pivot works; in floating point, big pivots keep rounding errors small.' },
            { lines: 18, text: 'No usable pivot means fewer than $n$ pivots: the matrix is singular (up to a tolerance).' },
            { lines: '25-32', text: 'Every operation is applied to both halves — that is the whole trick.' },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'error',
      prompt: 'A student inverts $A = \\begin{bmatrix} 4 & 3 \\\\ 1 & 1 \\end{bmatrix}$. Tap the first wrong line.',
      lines: [
        '$ad - bc = 4 \\cdot 1 - 3 \\cdot 1 = 1$',
        '$A^{-1} = \\frac{1}{1}\\begin{bmatrix} 4 & -3 \\\\ -1 & 1 \\end{bmatrix}$',
        '$A^{-1} = \\begin{bmatrix} 4 & -3 \\\\ -1 & 1 \\end{bmatrix}$',
      ],
      errorLines: [2],
      explanation: 'Line 2 negates the off-diagonal entries but forgets to **swap** the diagonal entries $a = 4$ and $d = 1$. The correct inverse is $\\begin{bmatrix} 1 & -3 \\\\ -1 & 4 \\end{bmatrix}$. Multiplying catches the slip at once: with the student\'s matrix, row 1 of $A$ times column 1 gives $4 \\cdot 4 + 3 \\cdot (-1) = 13 \\ne 1$.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'concept',
      title: 'Inverses of geometric transforms',
      blocks: [
        {
          type: 'p',
          text: 'For the transformations of graphics you rarely need the algorithm: ask "what motion undoes this one?" and write down its matrix.',
        },
        {
          type: 'table',
          headers: ['Transform', 'Matrix', 'Inverse', 'Why'],
          rows: [
            ['Rotation by $\\theta$', '$R_\\theta = \\begin{bmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{bmatrix}$', '$R_{-\\theta} = R_\\theta^{T}$', 'rotate back by $\\theta$'],
            ['Scale', '$\\begin{bmatrix} s_x & 0 \\\\ 0 & s_y \\end{bmatrix}$', '$\\begin{bmatrix} 1/s_x & 0 \\\\ 0 & 1/s_y \\end{bmatrix}$', 'needs $s_x, s_y \\ne 0$'],
            ['Shear', '$\\begin{bmatrix} 1 & k \\\\ 0 & 1 \\end{bmatrix}$', '$\\begin{bmatrix} 1 & -k \\\\ 0 & 1 \\end{bmatrix}$', 'shear back by $-k$'],
            ['Reflection across the $x$-axis', '$\\begin{bmatrix} 1 & 0 \\\\ 0 & -1 \\end{bmatrix}$', 'itself', 'reflecting twice = identity'],
            ['Projection onto the $x$-axis', '$\\begin{bmatrix} 1 & 0 \\\\ 0 & 0 \\end{bmatrix}$', 'none', 'the $y$-information is gone'],
          ],
        },
        {
          type: 'derivation',
          title: 'Why the inverse of a rotation is its transpose',
          steps: [
            { tex: 'R_{-\\theta} = \\begin{bmatrix} \\cos(-\\theta) & -\\sin(-\\theta) \\\\ \\sin(-\\theta) & \\cos(-\\theta) \\end{bmatrix}', why: 'Undoing a rotation by $\\theta$ means rotating by $-\\theta$.' },
            { tex: '= \\begin{bmatrix} \\cos\\theta & \\sin\\theta \\\\ -\\sin\\theta & \\cos\\theta \\end{bmatrix} = R_\\theta^{T}', why: 'Cosine is even and sine is odd: $\\cos(-\\theta) = \\cos\\theta$, $\\sin(-\\theta) = -\\sin\\theta$. The result is $R_\\theta$ with rows and columns swapped.' },
            { tex: 'R_\\theta^{T}R_\\theta = \\begin{bmatrix} \\cos^2\\theta + \\sin^2\\theta & 0 \\\\ 0 & \\sin^2\\theta + \\cos^2\\theta \\end{bmatrix} = I', why: 'Direct check: the off-diagonal entries are $\\cos\\theta(-\\sin\\theta) + \\sin\\theta\\cos\\theta = 0$, and the Pythagorean identity gives $1$ on the diagonal.' },
          ],
          result: 'For any rotation, $R^{-1} = R^{T}$: the cheapest inverse there is — no division, just reading entries in a different order.',
        },
        {
          type: 'graph',
          x: [-3, 3],
          y: [-3, 3],
          equal: true,
          segments: [
            { from: [0, 0], to: [2, 1], color: 'gray', arrow: true, label: 'v' },
            { from: [0, 0], to: [`2*${C} - ${S}`, `2*${S} + ${C}`], color: 'blue', arrow: true, label: 'Rv' },
            { from: [0, 0], to: [`2*${C} + ${S}`, `-2*${S} + ${C}`], color: 'red', arrow: true, label: 'Rᵀv' },
          ],
          parametric: [{ x: 'sqrt(5)cos(t)', y: 'sqrt(5)sin(t)', t: [0, '2pi'], color: 'gray', dashed: true }],
          sliders: [{ name: 'd', min: -180, max: 180, step: 5, value: 50, label: 'angle $\\theta$ (degrees)' }],
          readouts: [{ label: '$(R^{T}R)_{11} = \\cos^2\\theta + \\sin^2\\theta =$', expr: `${C}^2 + ${S}^2` }],
          caption: '$R_\\theta$ (blue) turns $\\mathbf{v}$ counterclockwise by $\\theta$; $R_\\theta^{T}$ (red) turns it by the same amount clockwise. Both stay on the circle, because rotations preserve length.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Cheap inverses in engines',
          text: 'Engines exploit these shortcuts constantly. A camera\'s orientation is a rotation, so the rotation part of its view matrix is just the transpose of the camera\'s rotation. Matrices with $Q^{-1} = Q^{T}$ are called [[orthogonal-matrix|orthogonal matrices]]; you will meet them properly in the last unit. A general `glm::inverse` costs dozens of multiplications plus a division and can lose precision; a transpose costs nothing.',
        },
      ],
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'numeric',
      prompt: '$R$ rotates the plane counterclockwise by $30^\\circ$. What is the $(1, 2)$ entry (row 1, column 2) of $R^{-1}$?',
      label: '$(R^{-1})_{12} =$',
      answer: '1/2',
      answerTex: '\\tfrac{1}{2}',
      hint: '$R^{-1} = R^{T}$. Which entry of $R$ moves into position $(1, 2)$?',
      explanation: '$R = \\begin{bmatrix} \\cos 30^\\circ & -\\sin 30^\\circ \\\\ \\sin 30^\\circ & \\cos 30^\\circ \\end{bmatrix}$, so $R^{-1} = R^{T} = \\begin{bmatrix} \\cos 30^\\circ & \\sin 30^\\circ \\\\ -\\sin 30^\\circ & \\cos 30^\\circ \\end{bmatrix}$. Its $(1, 2)$ entry is $\\sin 30^\\circ = \\frac{1}{2}$. The wrong answer $-\\frac{1}{2}$ comes from reading $R$ itself instead of its inverse.',
    },
    // ------------------------------------------------------------------ 16
    {
      kind: 'mcq',
      prompt: 'Which of these $2 \\times 2$ transformations has **no** inverse?',
      options: [
        { text: 'Shear $\\begin{bmatrix} 1 & 3 \\\\ 0 & 1 \\end{bmatrix}$', why: 'Invertible: shear back with $\\begin{bmatrix} 1 & -3 \\\\ 0 & 1 \\end{bmatrix}$. Also $ad - bc = 1 \\ne 0$.' },
        { text: 'Reflection $\\begin{bmatrix} 0 & 1 \\\\ 1 & 0 \\end{bmatrix}$ across $y = x$', why: 'Invertible: reflecting twice gives the identity, so it is its own inverse ($ad - bc = -1 \\ne 0$).' },
        { text: 'Scale $\\begin{bmatrix} 2 & 0 \\\\ 0 & \\frac{1}{2} \\end{bmatrix}$', why: 'Invertible: scale by $\\frac{1}{2}$ and $2$ to undo it ($ad - bc = 1$).' },
        { text: 'Projection $\\begin{bmatrix} 0 & 0 \\\\ 0 & 1 \\end{bmatrix}$ onto the $y$-axis', correct: true, why: 'It sends $(3, 5)$ and $(-1, 5)$ to the same point $(0, 5)$; once the $x$-coordinate is erased no matrix can recover it. Indeed $ad - bc = 0$.' },
      ],
      explanation: 'A transformation is invertible exactly when no information is lost — different inputs give different outputs. Rotations, nonzero scales, shears and reflections are all reversible motions; projections flatten the plane onto a line, sending many points to the same place. The test $ad - bc \\ne 0$ agrees in every case.',
    },
  ],
  takeaways: [
    'An $n \\times n$ matrix $A$ is invertible if some $A^{-1}$ satisfies $AA^{-1} = A^{-1}A = I$; the inverse is unique, and only square matrices qualify.',
    'For $2 \\times 2$: $A^{-1} = \\frac{1}{ad - bc}\\begin{bmatrix} d & -b \\\\ -c & a \\end{bmatrix}$, and $A$ is singular exactly when $ad - bc = 0$.',
    'If $A$ is invertible, $A\\mathbf{x} = \\mathbf{b}$ has the unique solution $A^{-1}\\mathbf{b}$ — but numerical code solves by row reduction (LU) instead of forming $A^{-1}$.',
    '$(AB)^{-1} = B^{-1}A^{-1}$ (socks and shoes) and $(A^{T})^{-1} = (A^{-1})^{T}$; normals transform by $(M^{-1})^{T}$.',
    'Row operations are left-multiplications by elementary matrices; row reducing $\\left[\\begin{array}{c|c} A & I \\end{array}\\right]$ to $\\left[\\begin{array}{c|c} I & A^{-1} \\end{array}\\right]$ finds the inverse or proves there is none.',
    'Geometric inverses: rotate back ($R^{-1} = R^{T}$), scale by reciprocals, shear by $-k$; projections have no inverse.',
  ],
  reading: [
    {
      title: 'Interactive Linear Algebra — Matrix Inverses',
      url: 'https://textbooks.math.gatech.edu/ila/',
      source: 'book',
      note: 'Section 3.5 of Margalit & Rabinoff covers the inverse, the $\\left[\\begin{array}{c|c} A & I \\end{array}\\right]$ algorithm and inverse transformations with interactive figures.',
    },
    {
      title: '3Blue1Brown — Inverse matrices, column space and null space',
      url: 'https://www.3blue1brown.com/topics/linear-algebra',
      source: 'video',
      note: 'Chapter 7 of *Essence of linear algebra* shows the inverse as "playing the transformation in reverse".',
    },
    {
      title: "Paul's Online Notes — Linear Algebra",
      url: 'https://tutorial.math.lamar.edu/Classes/LinAlg/LinAlg.aspx',
      source: 'paul',
      note: 'The chapter on systems and matrices has extra worked inverse computations and elementary-matrix examples.',
    },
    {
      title: 'Wikipedia — Invertible matrix',
      url: 'https://en.wikipedia.org/wiki/Invertible_matrix',
      source: 'wikipedia',
      note: 'Properties, the Gauss–Jordan method, and the numerical issues of inverting large matrices.',
    },
  ],
};
