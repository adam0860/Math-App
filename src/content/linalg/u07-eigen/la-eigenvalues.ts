import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'la-eigenvalues',
  title: 'Eigenvectors and Eigenvalues',
  summary: 'Most vectors get knocked off their line by a matrix. A few special directions only stretch or flip, and they unlock everything that follows.',
  minutes: 18,
  objectives: [
    'State the definition $A\\mathbf{x} = \\lambda\\mathbf{x}$, $\\mathbf{x} \\ne \\mathbf{0}$, and check whether a given vector is an eigenvector',
    'Describe eigenvectors geometrically as directions that a transformation only stretches, shrinks or flips',
    'Find the eigenspace for a given eigenvalue as $\\operatorname{Nul}(A - \\lambda I)$ and write a basis for it',
    'Read off the eigenvalues of a triangular matrix and explain why $0$ is an eigenvalue exactly when $A$ is singular',
    'Explain why eigenvectors for distinct eigenvalues are linearly independent',
  ],
  steps: [
    {
      kind: 'concept',
      title: 'Directions a matrix does not turn',
      blocks: [
        {
          type: 'p',
          text: 'Feed a vector $\\mathbf{x}$ into a [[linear-transformation]] $\\mathbf{x} \\mapsto A\\mathbf{x}$ and, almost always, the output points somewhere new: it is rotated, sheared, knocked off the line through $\\mathbf{x}$. But for many matrices there are a few special directions where nothing turns. A vector on one of those lines comes out on the *same line*, only stretched, shrunk or flipped.',
        },
        {
          type: 'p',
          text: 'Those directions are the skeleton of the transformation. Once you know them, a messy matrix becomes "stretch by 4 along this line, flip along that one", and questions like "what does $A^{100}$ do?" become easy. This unit is about finding them and using them.',
        },
        {
          type: 'definition',
          term: 'Eigenvector and eigenvalue',
          text: 'Let $A$ be an $n \\times n$ matrix. An [[eigenvector]] of $A$ is a **nonzero** vector $\\mathbf{x}$ such that $A\\mathbf{x} = \\lambda\\mathbf{x}$ for some scalar $\\lambda$. The scalar $\\lambda$ is called an [[eigenvalue]] of $A$, and $\\mathbf{x}$ is an eigenvector *corresponding to* $\\lambda$.',
        },
        {
          type: 'p',
          text: 'Only square matrices have eigenvectors: $A\\mathbf{x}$ must live in the same space as $\\mathbf{x}$ for "$A\\mathbf{x}$ is a multiple of $\\mathbf{x}$" to make sense. Checking a candidate is just one matrix–vector product.',
        },
        {
          type: 'derivation',
          title: 'Is $\\mathbf{u} = \\begin{bmatrix} 2 \\\\ 3 \\end{bmatrix}$ an eigenvector of $A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 2 \\end{bmatrix}$? Is $\\mathbf{w} = \\begin{bmatrix} 1 \\\\ 1 \\end{bmatrix}$?',
          steps: [
            { tex: 'A\\mathbf{u} = \\begin{bmatrix} 1 & 2 \\\\ 3 & 2 \\end{bmatrix}\\begin{bmatrix} 2 \\\\ 3 \\end{bmatrix} = \\begin{bmatrix} 1\\cdot 2 + 2 \\cdot 3 \\\\ 3 \\cdot 2 + 2 \\cdot 3 \\end{bmatrix} = \\begin{bmatrix} 8 \\\\ 12 \\end{bmatrix}', why: 'Multiply: each entry of $A\\mathbf{u}$ is a row of $A$ dotted with $\\mathbf{u}$.' },
            { tex: '\\begin{bmatrix} 8 \\\\ 12 \\end{bmatrix} = 4\\begin{bmatrix} 2 \\\\ 3 \\end{bmatrix} = 4\\mathbf{u}', why: 'Both entries are $4$ times the entries of $\\mathbf{u}$, with the *same* factor. So $\\mathbf{u}$ is an eigenvector and $\\lambda = 4$.' },
            { tex: 'A\\mathbf{w} = \\begin{bmatrix} 1 + 2 \\\\ 3 + 2 \\end{bmatrix} = \\begin{bmatrix} 3 \\\\ 5 \\end{bmatrix}', why: 'Same test for $\\mathbf{w}$.' },
            { tex: '\\frac{3}{1} \\ne \\frac{5}{1} \\implies A\\mathbf{w} \\ne \\lambda\\mathbf{w} \\text{ for every } \\lambda', why: 'To be a multiple of $\\mathbf{w} = (1, 1)$ the two entries would have to be equal. They are not, so $A$ turned $\\mathbf{w}$ off its line.' },
          ],
          result: '$\\mathbf{u}$ is an eigenvector of $A$ with eigenvalue $4$; $\\mathbf{w}$ is not an eigenvector.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the definition insists on $\\mathbf{x} \\ne \\mathbf{0}$',
          text: 'The zero vector satisfies $A\\mathbf{0} = \\lambda\\mathbf{0}$ for *every* number $\\lambda$. If we allowed it, every real number would be an eigenvalue of every matrix and the idea would be useless. So eigen*vectors* must be nonzero. The eigen*value*, on the other hand, may perfectly well be $0$: that just means $A\\mathbf{x} = \\mathbf{0}$ for some nonzero $\\mathbf{x}$.',
        },
      ],
    },
    {
      kind: 'mcq',
      prompt: 'Which vector is an eigenvector of $A = \\begin{bmatrix} 5 & 2 \\\\ 2 & 2 \\end{bmatrix}$?',
      hint: 'Multiply each candidate by $A$ and see whether the result is a multiple of the candidate.',
      options: [
        {
          text: '$\\begin{bmatrix} 1 \\\\ 2 \\end{bmatrix}$',
          why: '$A\\begin{bmatrix} 1 \\\\ 2 \\end{bmatrix} = \\begin{bmatrix} 9 \\\\ 6 \\end{bmatrix}$. The ratios are $9$ and $3$, not equal, so this vector gets turned.',
        },
        {
          text: '$\\begin{bmatrix} 1 \\\\ 1 \\end{bmatrix}$',
          why: '$A\\begin{bmatrix} 1 \\\\ 1 \\end{bmatrix} = \\begin{bmatrix} 7 \\\\ 4 \\end{bmatrix}$, which is not a multiple of $(1, 1)$.',
        },
        {
          text: '$\\begin{bmatrix} 2 \\\\ 1 \\end{bmatrix}$',
          correct: true,
          why: '$A\\begin{bmatrix} 2 \\\\ 1 \\end{bmatrix} = \\begin{bmatrix} 12 \\\\ 6 \\end{bmatrix} = 6\\begin{bmatrix} 2 \\\\ 1 \\end{bmatrix}$, so it is an eigenvector with eigenvalue $6$.',
        },
        {
          text: '$\\begin{bmatrix} 0 \\\\ 0 \\end{bmatrix}$',
          why: 'It is true that $A\\mathbf{0} = 6\\cdot\\mathbf{0}$, but the zero vector is excluded from being an eigenvector by definition.',
        },
      ],
      explanation: 'The test is always the same: compute $A\\mathbf{x}$ and check whether it equals one scalar times $\\mathbf{x}$, entry by entry with the *same* scalar. Only $(2, 1)$ passes, with $A\\mathbf{x} = 6\\mathbf{x}$. The zero vector passes the equation trivially, which is exactly why the definition rules it out.',
    },
    {
      kind: 'numeric',
      prompt: 'The vector $\\mathbf{v} = \\begin{bmatrix} -1 \\\\ 2 \\end{bmatrix}$ is also an eigenvector of $A = \\begin{bmatrix} 5 & 2 \\\\ 2 & 2 \\end{bmatrix}$. What is its eigenvalue?',
      hint: 'Compute $A\\mathbf{v}$ and compare it with $\\mathbf{v}$.',
      label: '$\\lambda =$',
      answer: '1',
      explanation: '$A\\mathbf{v} = \\begin{bmatrix} 5(-1) + 2(2) \\\\ 2(-1) + 2(2) \\end{bmatrix} = \\begin{bmatrix} -1 \\\\ 2 \\end{bmatrix} = 1 \\cdot \\mathbf{v}$. An eigenvalue of $1$ means $A$ leaves every vector on this line completely unchanged. So $A$ has (at least) two eigen-directions: $(2, 1)$, stretched by $6$, and $(-1, 2)$, left alone.',
    },
    {
      kind: 'concept',
      title: 'Hunting eigenvectors by rotating a test vector',
      blocks: [
        {
          type: 'p',
          text: 'Here is the geometric picture. Take a unit vector $\\mathbf{x}$ at angle $\\theta$ and draw $A\\mathbf{x}$ next to it. As you sweep $\\theta$, the red output swings around, usually pointing in a different direction from the blue input. At an eigenvector the two arrows fall onto **one line**: either pointing the same way ($\\lambda > 0$) or opposite ways ($\\lambda < 0$).',
        },
        {
          type: 'graph',
          x: [-5, 5],
          y: [-5, 5],
          equal: true,
          parametric: [
            { x: 'cos(t)', y: 'sin(t)', t: [0, '2pi'], color: 'gray', dashed: true },
            { x: 'cos(t) + 2sin(t)', y: '3cos(t) + 2sin(t)', t: [0, '2pi'], color: 'purple', dashed: true, label: 'images of all unit vectors' },
          ],
          segments: [
            { from: [0, 0], to: ['cos(d*pi/180)', 'sin(d*pi/180)'], arrow: true, color: 'blue', label: 'x' },
            { from: [0, 0], to: ['cos(d*pi/180) + 2sin(d*pi/180)', '3cos(d*pi/180) + 2sin(d*pi/180)'], arrow: true, color: 'red', label: 'Ax' },
          ],
          sliders: [{ name: 'd', min: 0, max: 180, step: 0.5, value: 20, label: 'angle $\\theta$ of $\\mathbf{x}$ (degrees)' }],
          readouts: [
            { label: '$\\det[\\,\\mathbf{x} \\;\\; A\\mathbf{x}\\,]$ (zero when parallel)', expr: '3(cos(d*pi/180))^2 + sin(d*pi/180)cos(d*pi/180) - 2(sin(d*pi/180))^2', digits: 3 },
            { label: '$\\mathbf{x} \\cdot A\\mathbf{x}$ (equals $\\lambda$ when parallel)', expr: '(cos(d*pi/180))^2 + 5sin(d*pi/180)cos(d*pi/180) + 2(sin(d*pi/180))^2', digits: 3 },
          ],
          caption: '$A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 2 \\end{bmatrix}$. Sweep $\\theta$ from $0^\\circ$ to $180^\\circ$ and find the two angles where the arrows line up. The determinant readout is the signed area of the parallelogram they span, so it hits $0$ exactly there.',
        },
        {
          type: 'p',
          text: 'You should find two directions. Near $56^\\circ$ the red arrow lies along the blue one, $4$ times longer: that is the line through $(2, 3)$ from the first card. At $135^\\circ$ the red arrow points exactly *backwards*: $A\\mathbf{x} = -\\mathbf{x}$, eigenvalue $-1$. Every other direction gets turned.',
        },
        {
          type: 'table',
          headers: ['eigenvalue', 'what $A$ does along that line'],
          rows: [
            ['$\\lambda > 1$', 'stretches (same direction, longer)'],
            ['$\\lambda = 1$', 'leaves every vector on the line fixed'],
            ['$0 < \\lambda < 1$', 'shrinks toward the origin'],
            ['$\\lambda = 0$', 'collapses the line onto $\\mathbf{0}$'],
            ['$\\lambda < 0$', 'flips to the opposite direction, scaled by $|\\lambda|$'],
          ],
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Not every matrix has real eigenvectors',
          text: 'A 2D [[rotation-matrix]] by $90^\\circ$ turns **every** nonzero vector, so in the plane it has no eigenvector at all. Try to picture an arrow that ends up on its own line after a quarter turn: there is none. The next lesson explains what happens to its eigenvalues (they turn out to be complex numbers).',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Eigenvectors you already use in game code',
          text: 'The **axis** of a 3D rotation is an eigenvector with eigenvalue $1$: the rotation leaves points on its axis fixed. Engines recover the axis-angle form of an orientation matrix this way. Another: an *oriented bounding box* is often fitted by taking the eigenvectors of the covariance matrix of a mesh\'s vertices. Those directions are the axes along which the points spread out most and least.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'Use the graph (or algebra) for $A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 2 \\end{bmatrix}$. Between $0^\\circ$ and $90^\\circ$ there is one angle $\\theta$ where $\\mathbf{x}$ and $A\\mathbf{x}$ point the same way. Find $\\theta$ in degrees (to the nearest half degree).',
      hint: 'That eigen-direction is the line through $(2, 3)$. Its angle satisfies $\\tan\\theta = \\frac{3}{2}$.',
      label: '$\\theta \\approx$',
      unit: 'degrees',
      answer: 'arctan(3/2)*180/pi',
      answerTex: '\\arctan\\tfrac{3}{2} \\approx 56.31^\\circ',
      tolerance: 0.5,
      explanation: 'We showed $A(2, 3) = 4(2, 3)$, so the eigenvectors for $\\lambda = 4$ are the nonzero multiples of $(2, 3)$. The unit vector in that direction is at angle $\\theta = \\arctan\\frac{3}{2} \\approx 56.31^\\circ$ (it lies in quadrant I, so plain arctangent is right). On the graph, at $\\theta \\approx 56.3^\\circ$ the determinant readout crosses $0$ and $\\mathbf{x} \\cdot A\\mathbf{x}$ reads $4$, the eigenvalue.',
    },
    {
      kind: 'concept',
      title: 'Finding all eigenvectors for a given eigenvalue',
      blocks: [
        {
          type: 'p',
          text: 'Guess-and-check is fine for testing a vector. To find *all* eigenvectors for a number $\\lambda$, turn the definition into a linear system. Move everything to one side and factor out $\\mathbf{x}$, using $\\lambda\\mathbf{x} = \\lambda I\\mathbf{x}$ (where $I$ is the [[identity-matrix]]):',
        },
        {
          type: 'math',
          tex: 'A\\mathbf{x} = \\lambda\\mathbf{x} \\iff A\\mathbf{x} - \\lambda I\\mathbf{x} = \\mathbf{0} \\iff (A - \\lambda I)\\mathbf{x} = \\mathbf{0}',
          caption: 'An eigenvector problem is a [[homogeneous-system]] in disguise.',
        },
        {
          type: 'p',
          text: 'So $\\lambda$ is an eigenvalue of $A$ exactly when $(A - \\lambda I)\\mathbf{x} = \\mathbf{0}$ has a **nontrivial** solution, and the eigenvectors are those nontrivial solutions. The full solution set (including $\\mathbf{0}$) is a [[null-space]], which is why it gets its own name.',
        },
        {
          type: 'definition',
          term: 'Eigenspace',
          text: 'If $\\lambda$ is an eigenvalue of $A$, the [[eigenspace]] of $A$ for $\\lambda$ is $\\operatorname{Nul}(A - \\lambda I)$: the set of all eigenvectors for $\\lambda$ together with the zero vector. It is a [[subspace]] of $\\mathbb{R}^n$.',
        },
        {
          type: 'derivation',
          title: 'Show that $\\lambda = 4$ is an eigenvalue of $A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 2 \\end{bmatrix}$ and find its eigenspace',
          steps: [
            { tex: 'A - 4I = \\begin{bmatrix} 1 - 4 & 2 \\\\ 3 & 2 - 4 \\end{bmatrix} = \\begin{bmatrix} -3 & 2 \\\\ 3 & -2 \\end{bmatrix}', why: 'Subtract $4$ from the **diagonal entries only**: $4I$ has $4$s on the diagonal and $0$s elsewhere.' },
            { tex: '\\left[\\begin{array}{cc|c} -3 & 2 & 0 \\\\ 3 & -2 & 0 \\end{array}\\right] \\xrightarrow{R_2 + R_1} \\left[\\begin{array}{cc|c} -3 & 2 & 0 \\\\ 0 & 0 & 0 \\end{array}\\right]', why: 'Row reduce the augmented matrix of $(A - 4I)\\mathbf{x} = \\mathbf{0}$. A zero row appears, so there is a [[free-variable]] and therefore nontrivial solutions: $4$ *is* an eigenvalue.' },
            { tex: '-3x_1 + 2x_2 = 0 \\implies x_1 = \\tfrac{2}{3}x_2', why: 'Read off the remaining equation; $x_2$ is free.' },
            { tex: '\\mathbf{x} = x_2\\begin{bmatrix} 2/3 \\\\ 1 \\end{bmatrix} = s\\begin{bmatrix} 2 \\\\ 3 \\end{bmatrix}', why: 'Write the solution in [[parametric-vector-form]]. Rescaling by $3$ (put $x_2 = 3s$) clears the fraction; any nonzero multiple is an equally good basis vector.' },
          ],
          result: 'The eigenspace for $\\lambda = 4$ is $\\operatorname{Span}\\left\\{\\begin{bmatrix} 2 \\\\ 3 \\end{bmatrix}\\right\\}$, the line through the origin we found on the graph.',
        },
        {
          type: 'compare',
          left: { title: 'Wrong: subtract $\\lambda$ from every entry', tone: 'bad', tex: ['A - 4 = \\begin{bmatrix} -3 & -2 \\\\ -1 & -2 \\end{bmatrix}'] },
          right: { title: 'Right: subtract $\\lambda I$', tone: 'good', tex: ['A - 4I = \\begin{bmatrix} -3 & 2 \\\\ 3 & -2 \\end{bmatrix}'] },
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why an eigenspace is a subspace',
          text: 'Directly: if $A\\mathbf{u} = \\lambda\\mathbf{u}$ and $A\\mathbf{v} = \\lambda\\mathbf{v}$, then $A(\\mathbf{u} + \\mathbf{v}) = \\lambda\\mathbf{u} + \\lambda\\mathbf{v} = \\lambda(\\mathbf{u} + \\mathbf{v})$ and $A(c\\mathbf{u}) = \\lambda(c\\mathbf{u})$. Sums and scalar multiples of eigenvectors for the **same** $\\lambda$ stay in the set. (For *different* eigenvalues this fails: $\\mathbf{u} + \\mathbf{v}$ is generally not an eigenvector at all.)',
        },
      ],
    },
    {
      kind: 'fill',
      prompt: 'Find a basis for the eigenspace of $A = \\begin{bmatrix} 4 & 1 \\\\ 2 & 3 \\end{bmatrix}$ for $\\lambda = 2$. Scale your basis vector so its first entry is $1$.',
      hint: 'Form $A - 2I$ (subtract $2$ on the diagonal only), then solve $(A - 2I)\\mathbf{x} = \\mathbf{0}$.',
      template: 'Basis vector $\\mathbf{v} = ($ ___ $,$ ___ $)$ (as a column vector).',
      blanks: [{ answers: ['1'] }, { answers: ['-2'] }],
      explanation: '$A - 2I = \\begin{bmatrix} 2 & 1 \\\\ 2 & 1 \\end{bmatrix}$, which row reduces to $\\begin{bmatrix} 2 & 1 \\\\ 0 & 0 \\end{bmatrix}$. The equation $2x_1 + x_2 = 0$ gives $x_2 = -2x_1$, so the eigenspace is $\\operatorname{Span}\\{(1, -2)\\}$. Check: $A(1, -2) = (4 - 2,\\ 2 - 6) = (2, -4) = 2(1, -2)$. ✓',
    },
    {
      kind: 'concept',
      title: 'Eigenspaces can be bigger than a line',
      blocks: [
        {
          type: 'p',
          text: 'In $\\mathbb{R}^3$ an eigenspace can be a line, a plane, or even all of $\\mathbb{R}^3$ (for $A = 2I$, every nonzero vector is an eigenvector). Its dimension is the number of free variables in $(A - \\lambda I)\\mathbf{x} = \\mathbf{0}$.',
        },
        {
          type: 'derivation',
          title: 'Eigenspace of $A = \\begin{bmatrix} 4 & -1 & 6 \\\\ 2 & 1 & 6 \\\\ 2 & -1 & 8 \\end{bmatrix}$ for $\\lambda = 2$',
          steps: [
            { tex: 'A - 2I = \\begin{bmatrix} 2 & -1 & 6 \\\\ 2 & -1 & 6 \\\\ 2 & -1 & 6 \\end{bmatrix}', why: 'Subtract $2$ from each diagonal entry: $4 - 2 = 2$, $1 - 2 = -1$, $8 - 2 = 6$.' },
            { tex: '\\sim \\begin{bmatrix} 2 & -1 & 6 \\\\ 0 & 0 & 0 \\\\ 0 & 0 & 0 \\end{bmatrix}', why: 'Subtract row 1 from rows 2 and 3. Only one pivot, so two free variables ($x_2$ and $x_3$): the eigenspace will be 2-dimensional.' },
            { tex: '2x_1 - x_2 + 6x_3 = 0 \\implies x_1 = \\tfrac{1}{2}x_2 - 3x_3', why: 'Solve the one remaining equation for the basic variable $x_1$.' },
            { tex: '\\mathbf{x} = x_2\\begin{bmatrix} 1/2 \\\\ 1 \\\\ 0 \\end{bmatrix} + x_3\\begin{bmatrix} -3 \\\\ 0 \\\\ 1 \\end{bmatrix}', why: 'Parametric vector form: collect the $x_2$ terms and the $x_3$ terms.' },
            { tex: '\\text{basis: } \\left\\{ \\begin{bmatrix} 1 \\\\ 2 \\\\ 0 \\end{bmatrix}, \\begin{bmatrix} -3 \\\\ 0 \\\\ 1 \\end{bmatrix} \\right\\}', why: 'Scale the first vector by $2$ to clear the fraction. The two vectors are independent (neither is a multiple of the other), so they form a [[basis]].' },
          ],
          result: 'The eigenspace for $\\lambda = 2$ is a plane through the origin in $\\mathbb{R}^3$. $A$ acts on that whole plane as "multiply by $2$".',
        },
        {
          type: 'p',
          text: 'Check one vector: $A(-3, 0, 1) = (-12 + 6,\\ -6 + 6,\\ -6 + 8) = (-6, 0, 2) = 2(-3, 0, 1)$. ✓ A quick check like this catches almost every arithmetic slip.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'If you get only the trivial solution',
          text: 'If $(A - \\lambda I)\\mathbf{x} = \\mathbf{0}$ row reduces to a pivot in every column, the only solution is $\\mathbf{x} = \\mathbf{0}$, which means $\\lambda$ is **not** an eigenvalue. If you were told it is one, recheck the subtraction on the diagonal: that is where the mistake almost always is.',
        },
      ],
    },
    {
      kind: 'error',
      prompt: 'A student looks for the eigenspace of $A = \\begin{bmatrix} 3 & 1 \\\\ 1 & 3 \\end{bmatrix}$ for $\\lambda = 2$. Tap the first line that is wrong.',
      lines: [
        'Solve $(A - 2I)\\mathbf{x} = \\mathbf{0}$.',
        '$A - 2I = \\begin{bmatrix} 1 & -1 \\\\ -1 & 1 \\end{bmatrix}$',
        'Row reduce: $\\begin{bmatrix} 1 & -1 \\\\ 0 & 0 \\end{bmatrix}$, so $x_1 = x_2$.',
        'The eigenspace is $\\operatorname{Span}\\left\\{\\begin{bmatrix} 1 \\\\ 1 \\end{bmatrix}\\right\\}$.',
      ],
      errorLines: [2],
      explanation: 'Line 2 subtracts $2$ from *every* entry instead of only the diagonal. Correctly, $A - 2I = \\begin{bmatrix} 1 & 1 \\\\ 1 & 1 \\end{bmatrix}$, which gives $x_1 = -x_2$ and the eigenspace $\\operatorname{Span}\\{(1, -1)\\}$. Check: $A(1, -1) = (2, -2) = 2(1, -1)$. ✓ The student\'s answer $(1, 1)$ *is* an eigenvector, but for $\\lambda = 4$, since $A(1, 1) = (4, 4)$. Always plug your answer back in.',
    },
    {
      kind: 'concept',
      title: 'Two eigenvalue facts you can see without solving anything',
      blocks: [
        {
          type: 'theorem',
          name: 'Eigenvalues of a triangular matrix',
          text: 'The eigenvalues of a [[triangular-matrix]] (upper or lower) are exactly the entries on its main diagonal.',
        },
        {
          type: 'p',
          text: '**Why.** If $A$ is triangular, so is $A - \\lambda I$; its diagonal entries are $a_{11} - \\lambda, \\dots, a_{nn} - \\lambda$. A triangular matrix is singular exactly when some diagonal entry is $0$ (its [[determinant]] is the product of the diagonal entries). So $(A - \\lambda I)\\mathbf{x} = \\mathbf{0}$ has a nontrivial solution exactly when $\\lambda$ equals some $a_{ii}$.',
        },
        {
          type: 'theorem',
          name: 'Zero as an eigenvalue',
          text: '$0$ is an eigenvalue of $A$ if and only if $A$ is not invertible (a [[singular-matrix]]).',
        },
        {
          type: 'p',
          text: '**Why.** $\\lambda = 0$ is an eigenvalue $\\iff$ $(A - 0I)\\mathbf{x} = A\\mathbf{x} = \\mathbf{0}$ has a nontrivial solution $\\iff$ $A$ is singular, by the [[invertible-matrix-theorem]]. So you can add a new line to that theorem: *$A$ is invertible if and only if $0$ is not an eigenvalue of $A$.*',
        },
        {
          type: 'derivation',
          title: 'Eigenvalues of $A = \\begin{bmatrix} 3 & 6 & -8 \\\\ 0 & 0 & 6 \\\\ 0 & 0 & 2 \\end{bmatrix}$',
          steps: [
            { tex: 'A - \\lambda I = \\begin{bmatrix} 3 - \\lambda & 6 & -8 \\\\ 0 & -\\lambda & 6 \\\\ 0 & 0 & 2 - \\lambda \\end{bmatrix}', why: 'Subtracting $\\lambda I$ only changes the diagonal, so the zeros below it stay zero: still upper triangular.' },
            { tex: '\\det(A - \\lambda I) = (3 - \\lambda)(-\\lambda)(2 - \\lambda)', why: 'The determinant of a triangular matrix is the product of its diagonal entries.' },
            { tex: '= 0 \\iff \\lambda \\in \\{3,\\ 0,\\ 2\\}', why: 'A product is zero exactly when a factor is zero; those are the values where $A - \\lambda I$ is singular.' },
            { tex: '0 \\text{ is an eigenvalue} \\implies A \\text{ is singular}', why: 'Consistent with the second theorem: indeed $\\det A = 3 \\cdot 0 \\cdot 2 = 0$.' },
          ],
          result: 'The eigenvalues are $3$, $0$ and $2$ — the diagonal entries — and $A$ is not invertible.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Only for triangular matrices',
          text: 'Do not read eigenvalues off the diagonal of a general matrix. $A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 2 \\end{bmatrix}$ has diagonal entries $1$ and $2$, but its eigenvalues are $4$ and $-1$. Row reducing to a triangular form does not help either: row operations change the eigenvalues.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'Find all eigenvalues of $A = \\begin{bmatrix} 2 & 5 & -1 \\\\ 0 & -3 & 4 \\\\ 0 & 0 & 7 \\end{bmatrix}$. Enter them separated by commas.',
      hint: 'Look at the shape of the matrix.',
      label: '$\\lambda =$',
      answer: ['2', '-3', '7'],
      explanation: '$A$ is upper triangular, so $A - \\lambda I$ is too, and it is singular exactly when $\\lambda$ hits a diagonal entry: $\\lambda = 2, -3, 7$. None of them is $0$, so $A$ is also invertible (its determinant is $2 \\cdot (-3) \\cdot 7 = -42$).',
    },
    {
      kind: 'truefalse',
      prompt: 'Because $A\\mathbf{0} = \\lambda\\mathbf{0}$ for every scalar $\\lambda$, the zero vector counts as an eigenvector of every square matrix.',
      answer: false,
      explanation: 'The equation does hold for $\\mathbf{x} = \\mathbf{0}$, and that is precisely why the definition excludes it: otherwise every number would be an eigenvalue of every matrix. Eigenvectors must be nonzero. The zero vector does belong to every *eigenspace*, though, because an eigenspace is a null space and null spaces always contain $\\mathbf{0}$.',
    },
    {
      kind: 'concept',
      title: 'Different eigenvalues give independent eigenvectors',
      blocks: [
        {
          type: 'p',
          text: 'In the running example, $(2, 3)$ (for $\\lambda = 4$) and $(1, -1)$ (for $\\lambda = -1$) are clearly not multiples of each other. That is no accident.',
        },
        {
          type: 'theorem',
          name: 'Eigenvectors for distinct eigenvalues are independent',
          text: 'If $\\mathbf{v}_1, \\dots, \\mathbf{v}_r$ are eigenvectors of $A$ corresponding to **distinct** eigenvalues $\\lambda_1, \\dots, \\lambda_r$, then the set $\\{\\mathbf{v}_1, \\dots, \\mathbf{v}_r\\}$ is [[linear-independence|linearly independent]].',
        },
        {
          type: 'derivation',
          title: 'Proof for two eigenvectors ($\\lambda_1 \\ne \\lambda_2$)',
          steps: [
            { tex: 'c_1\\mathbf{v}_1 + c_2\\mathbf{v}_2 = \\mathbf{0}', why: 'Suppose some combination is zero. We must show $c_1 = c_2 = 0$.' },
            { tex: 'c_1\\lambda_1\\mathbf{v}_1 + c_2\\lambda_2\\mathbf{v}_2 = \\mathbf{0}', why: 'Multiply both sides by $A$ and use $A\\mathbf{v}_i = \\lambda_i\\mathbf{v}_i$.' },
            { tex: 'c_1\\lambda_2\\mathbf{v}_1 + c_2\\lambda_2\\mathbf{v}_2 = \\mathbf{0}', why: 'Separately, multiply the first equation by the number $\\lambda_2$.' },
            { tex: 'c_1(\\lambda_1 - \\lambda_2)\\mathbf{v}_1 = \\mathbf{0}', why: 'Subtract the last two equations: the $\\mathbf{v}_2$ terms cancel.' },
            { tex: 'c_1 = 0', why: '$\\lambda_1 - \\lambda_2 \\ne 0$ and $\\mathbf{v}_1 \\ne \\mathbf{0}$ (eigenvectors are nonzero), so the scalar $c_1$ must be $0$.' },
            { tex: 'c_2\\mathbf{v}_2 = \\mathbf{0} \\implies c_2 = 0', why: 'Put $c_1 = 0$ back into the first equation; again $\\mathbf{v}_2 \\ne \\mathbf{0}$.' },
          ],
          result: 'Only the trivial combination gives $\\mathbf{0}$, so $\\{\\mathbf{v}_1, \\mathbf{v}_2\\}$ is independent.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why this should feel inevitable',
          text: 'If $\\mathbf{v}_2$ were a multiple of $\\mathbf{v}_1$, it would lie on the same line, and $A$ acts on that line by a single scale factor. One line cannot be stretched by $4$ and by $-1$ at the same time. The proof above is that sentence made rigorous, and the same "multiply by $A$, then subtract" trick extends to any number of eigenvectors.',
        },
        {
          type: 'deepdive',
          title: 'The general proof',
          blocks: [
            {
              type: 'p',
              text: 'Suppose the set were dependent. Let $p$ be the smallest index such that $\\mathbf{v}_{p+1}$ is a combination of the earlier, independent vectors: $\\mathbf{v}_{p+1} = c_1\\mathbf{v}_1 + \\dots + c_p\\mathbf{v}_p$. Multiplying by $A$ gives $\\lambda_{p+1}\\mathbf{v}_{p+1} = c_1\\lambda_1\\mathbf{v}_1 + \\dots + c_p\\lambda_p\\mathbf{v}_p$; multiplying the original by $\\lambda_{p+1}$ and subtracting gives $\\mathbf{0} = c_1(\\lambda_1 - \\lambda_{p+1})\\mathbf{v}_1 + \\dots + c_p(\\lambda_p - \\lambda_{p+1})\\mathbf{v}_p$.',
            },
            {
              type: 'p',
              text: 'Since $\\mathbf{v}_1, \\dots, \\mathbf{v}_p$ are independent, every coefficient $c_i(\\lambda_i - \\lambda_{p+1})$ is $0$, and since the eigenvalues are distinct, every $c_i = 0$. Then $\\mathbf{v}_{p+1} = \\mathbf{0}$, which is impossible for an eigenvector. Contradiction.',
            },
          ],
        },
        {
          type: 'heading',
          text: 'Eigenvectors make powers easy',
        },
        {
          type: 'p',
          text: 'Here is a first taste of why all this pays off. If $A\\mathbf{x} = \\lambda\\mathbf{x}$, then applying $A$ again just multiplies by $\\lambda$ again: $A^2\\mathbf{x} = A(\\lambda\\mathbf{x}) = \\lambda A\\mathbf{x} = \\lambda^2\\mathbf{x}$, and in general $A^k\\mathbf{x} = \\lambda^k\\mathbf{x}$. Applying a transform $k$ times to an eigenvector costs one power of a number instead of $k$ matrix products. The diagonalization lesson builds on exactly this.',
        },
      ],
    },
    {
      kind: 'mcq',
      prompt: 'A $3 \\times 3$ matrix $A$ has eigenvalues $1$, $2$ and $5$, with eigenvectors $\\mathbf{v}_1$, $\\mathbf{v}_2$, $\\mathbf{v}_3$ respectively. Which statement **must** be true?',
      options: [
        {
          text: '$\\mathbf{v}_1, \\mathbf{v}_2, \\mathbf{v}_3$ are mutually orthogonal',
          why: 'Not in general. For $A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 2 \\end{bmatrix}$ the eigenvectors $(2, 3)$ and $(1, -1)$ have dot product $-1$. (Orthogonality is guaranteed only for special matrices, such as symmetric ones, in a later unit.)',
        },
        {
          text: '$\\mathbf{v}_1 + \\mathbf{v}_2$ is an eigenvector with eigenvalue $3$',
          why: '$A(\\mathbf{v}_1 + \\mathbf{v}_2) = \\mathbf{v}_1 + 2\\mathbf{v}_2$, which is not a multiple of $\\mathbf{v}_1 + \\mathbf{v}_2$ because $\\mathbf{v}_1, \\mathbf{v}_2$ are independent. Eigenvalues do not add.',
        },
        {
          text: '$A$ is singular',
          why: '$0$ is not among the eigenvalues, so $A\\mathbf{x} = \\mathbf{0}$ has only the trivial solution and $A$ is invertible.',
        },
        {
          text: '$\\{\\mathbf{v}_1, \\mathbf{v}_2, \\mathbf{v}_3\\}$ is linearly independent, hence a basis of $\\mathbb{R}^3$',
          correct: true,
          why: 'The eigenvalues are distinct, so the eigenvectors are independent; three independent vectors in $\\mathbb{R}^3$ form a basis.',
        },
      ],
      explanation: 'Distinct eigenvalues force independent eigenvectors, and $n$ independent vectors in $\\mathbb{R}^n$ are a basis. That basis of eigenvectors is the key ingredient of diagonalization, two lessons from now. Orthogonality is a much stronger property that general matrices do not have.',
    },
    {
      kind: 'numeric',
      prompt: 'Suppose $A\\mathbf{v} = -2\\mathbf{v}$ where $\\mathbf{v} = \\begin{bmatrix} 1 \\\\ 3 \\end{bmatrix}$. What is the **second** entry of $A^3\\mathbf{v}$?',
      hint: 'Apply $A$ three times: each application multiplies an eigenvector by its eigenvalue.',
      label: 'second entry $=$',
      answer: '-24',
      explanation: '$A^3\\mathbf{v} = (-2)^3\\mathbf{v} = -8\\begin{bmatrix} 1 \\\\ 3 \\end{bmatrix} = \\begin{bmatrix} -8 \\\\ -24 \\end{bmatrix}$. You never needed to know $A$ itself: on its eigenvector, $A$ acts like the number $-2$, so $A^3$ acts like $(-2)^3 = -8$. The negative eigenvalue flips the vector each time, and an odd number of flips leaves it pointing backwards.',
    },
    {
      kind: 'order',
      prompt: 'Put the steps in order to decide whether a number $\\lambda$ is an eigenvalue of $A$ and, if so, find a basis for its eigenspace.',
      lines: [
        'Form $A - \\lambda I$ by subtracting $\\lambda$ from each diagonal entry',
        'Row reduce the augmented matrix of $(A - \\lambda I)\\mathbf{x} = \\mathbf{0}$',
        'If there is no free variable, stop: $\\lambda$ is not an eigenvalue',
        'Otherwise write the solution in parametric vector form',
        'The vectors multiplying the free variables form a basis for the eigenspace',
      ],
      distractors: ['Row reduce $A$ itself and read the eigenvalues off the diagonal'],
      explanation: 'An eigenspace is the null space of $A - \\lambda I$, so the method is the null-space recipe from the Vector Spaces unit applied to that matrix. A pivot in every column means only the trivial solution, so $\\lambda$ is not an eigenvalue. The distractor is a classic mistake: row operations change eigenvalues, so the echelon form of $A$ tells you nothing about them.',
    },
  ],
  takeaways: [
    'An eigenvector of a square matrix $A$ is a nonzero $\\mathbf{x}$ with $A\\mathbf{x} = \\lambda\\mathbf{x}$; the scalar $\\lambda$ (which may be $0$) is its eigenvalue.',
    'Geometrically, eigenvectors are the directions $A$ does not turn: it only stretches, shrinks, collapses or flips them by the factor $\\lambda$.',
    'The eigenspace for $\\lambda$ is $\\operatorname{Nul}(A - \\lambda I)$; find it by row reducing $(A - \\lambda I)\\mathbf{x} = \\mathbf{0}$, subtracting $\\lambda$ on the diagonal only.',
    'The eigenvalues of a triangular matrix are its diagonal entries, and $0$ is an eigenvalue exactly when $A$ is singular.',
    'Eigenvectors for distinct eigenvalues are linearly independent, and $A^k\\mathbf{x} = \\lambda^k\\mathbf{x}$ for an eigenvector $\\mathbf{x}$.',
  ],
  reading: [
    {
      title: '3Blue1Brown — Eigenvectors and eigenvalues (Essence of linear algebra)',
      url: 'https://www.3blue1brown.com/topics/linear-algebra',
      source: 'video',
      note: 'The chapter on eigenvectors animates exactly the "vectors that stay on their own line" picture from this lesson.',
    },
    {
      title: 'Interactive Linear Algebra — Eigenvalues and Eigenvectors',
      url: 'https://textbooks.math.gatech.edu/ila/',
      source: 'book',
      note: 'Margalit and Rabinoff\'s chapter on eigenvalues has interactive demos for finding eigenvectors geometrically.',
    },
    {
      title: 'Wikipedia — Eigenvalues and eigenvectors',
      url: 'https://en.wikipedia.org/wiki/Eigenvalues_and_eigenvectors',
      source: 'wikipedia',
      note: 'A broad overview with many applications, from vibration analysis to facial recognition.',
    },
    {
      title: "Paul's Online Notes — Linear Algebra",
      url: 'https://tutorial.math.lamar.edu/Classes/LinAlg/LinAlg.aspx',
      source: 'paul',
      note: 'The eigenvalues section has extra worked examples of finding eigenspaces by row reduction.',
    },
  ],
};
