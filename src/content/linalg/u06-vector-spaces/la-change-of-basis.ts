import type { Lesson } from '../../types';

const gridJ = [-4, -3, -2, -1, 0, 1, 2, 3, 4];

export const lesson: Lesson = {
  id: 'la-change-of-basis',
  title: 'Coordinates and Change of Basis',
  summary: 'A basis is a coordinate system. Learn to read a vector in any basis, convert between bases with a matrix, and turn world-space directions into a character\'s local space.',
  minutes: 18,
  objectives: [
    'Explain why every vector has unique coordinates relative to a basis, and compute $[\\mathbf{x}]_{\\mathcal{B}}$',
    'Use the change-of-coordinates matrix $P_{\\mathcal{B}}$ and its inverse to convert between $\\mathcal{B}$-coordinates and standard coordinates',
    'Find coordinates in abstract spaces such as $\\mathbb{P}_2$',
    'Compute the change-of-basis matrix $P_{\\mathcal{C} \\leftarrow \\mathcal{B}}$ between two non-standard bases',
    'Convert world-space directions into an object\'s local space using the transpose of an orthonormal basis matrix',
  ],
  steps: [
    {
      kind: 'concept',
      title: 'A basis is a coordinate system',
      blocks: [
        {
          type: 'p',
          text: 'When you write $\\mathbf{x} = (1, 5)$ you are secretly using the standard basis: $\\mathbf{x} = 1\\mathbf{e}_1 + 5\\mathbf{e}_2$. Any other basis gives another way to name the same vector, by listing the weights needed to build it. For that to work, the weights must be **unique**.',
        },
        {
          type: 'theorem',
          name: 'Unique Representation Theorem',
          text: 'Let $\\mathcal{B} = \\{\\mathbf{b}_1, \\dots, \\mathbf{b}_n\\}$ be a basis for a vector space $V$. Then each $\\mathbf{x}$ in $V$ can be written in **exactly one** way as $\\mathbf{x} = c_1\\mathbf{b}_1 + \\cdots + c_n\\mathbf{b}_n$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why both halves of "basis" matter',
          text: '**Existence** comes from spanning: every $\\mathbf{x}$ is some combination. **Uniqueness** comes from independence: if $\\mathbf{x} = \\sum c_i\\mathbf{b}_i = \\sum d_i\\mathbf{b}_i$, subtracting gives $\\sum (c_i - d_i)\\mathbf{b}_i = \\mathbf{0}$, and independence forces every $c_i - d_i = 0$. With a dependent set, the same vector would have many names, and "coordinates" would be ambiguous.',
        },
        {
          type: 'definition',
          term: 'Coordinate vector',
          text: 'If $\\mathbf{x} = c_1\\mathbf{b}_1 + \\cdots + c_n\\mathbf{b}_n$, the weights are the **$\\mathcal{B}$-coordinates of $\\mathbf{x}$**, and the [[coordinate-vector]] of $\\mathbf{x}$ relative to $\\mathcal{B}$ is $[\\mathbf{x}]_{\\mathcal{B}} = \\begin{bmatrix} c_1 \\\\ \\vdots \\\\ c_n \\end{bmatrix}$. The order of the basis vectors matters, so a basis here is an *ordered* list.',
        },
        {
          type: 'derivation',
          title: 'Find $[\\mathbf{x}]_{\\mathcal{B}}$ for $\\mathbf{x} = \\begin{bmatrix} 1 \\\\ 5 \\end{bmatrix}$, $\\mathcal{B} = \\left\\{ \\mathbf{b}_1 = \\begin{bmatrix} 2 \\\\ 1 \\end{bmatrix}, \\mathbf{b}_2 = \\begin{bmatrix} -1 \\\\ 1 \\end{bmatrix} \\right\\}$',
          steps: [
            { tex: 'c_1\\begin{bmatrix} 2 \\\\ 1 \\end{bmatrix} + c_2\\begin{bmatrix} -1 \\\\ 1 \\end{bmatrix} = \\begin{bmatrix} 1 \\\\ 5 \\end{bmatrix}', why: 'The coordinates are the weights that rebuild $\\mathbf{x}$ from the basis.' },
            { tex: '2c_1 - c_2 = 1, \\qquad c_1 + c_2 = 5', why: 'Compare entries to get a linear system.' },
            { tex: '3c_1 = 6 \\implies c_1 = 2, \\quad c_2 = 3', why: 'Add the equations to eliminate $c_2$, then back-substitute into $c_1 + c_2 = 5$.' },
            { tex: '2\\begin{bmatrix} 2 \\\\ 1 \\end{bmatrix} + 3\\begin{bmatrix} -1 \\\\ 1 \\end{bmatrix} = \\begin{bmatrix} 1 \\\\ 5 \\end{bmatrix} \\ \\checkmark', why: 'Always check by rebuilding $\\mathbf{x}$.' },
          ],
          result: '$[\\mathbf{x}]_{\\mathcal{B}} = \\begin{bmatrix} 2 \\\\ 3 \\end{bmatrix}$: "two steps of $\\mathbf{b}_1$, three steps of $\\mathbf{b}_2$". Same point, different name.',
        },
        {
          type: 'p',
          text: 'Picture it as graph paper drawn along the basis vectors. Below, $\\mathbf{b}_1 = (2, 1)$ and $\\mathbf{b}_2 = (k, 1)$; the gray lines form the $\\mathcal{B}$-grid. Choose $\\mathcal{B}$-coordinates $c_1, c_2$ and watch the standard coordinates of the same point.',
        },
        {
          type: 'graph',
          x: [-6, 6],
          y: [-4.5, 4.5],
          equal: true,
          height: 340,
          parametric: [
            ...gridJ.map((j) => ({ x: `${j}*k + 2t`, y: `${j} + t`, t: [-8, 8] as [number, number], color: 'gray' as const })),
            ...gridJ.map((i) => ({ x: `${2 * i} + k*t`, y: `${i} + t`, t: [-8, 8] as [number, number], color: 'gray' as const })),
          ],
          segments: [
            { from: [0, 0], to: [2, 1], arrow: true, label: 'b₁', color: 'blue' },
            { from: [0, 0], to: ['k', 1], arrow: true, label: 'b₂', color: 'green' },
            { from: [0, 0], to: ['2m', 'm'], dashed: true, color: 'blue' },
            { from: ['2m', 'm'], to: ['2m + k*n', 'm + n'], dashed: true, color: 'green' },
          ],
          points: [{ x: '2m + k*n', y: 'm + n', label: 'x', color: 'red' }],
          sliders: [
            { name: 'm', min: -2, max: 2, step: 0.5, value: 2, label: '$c_1$ ($\\mathcal{B}$-coordinate)' },
            { name: 'n', min: -3, max: 3, step: 0.5, value: 3, label: '$c_2$ ($\\mathcal{B}$-coordinate)' },
            { name: 'k', min: -2, max: 1.5, step: 0.1, value: -1, label: '$k$ (first entry of $\\mathbf{b}_2$)' },
          ],
          readouts: [
            { label: 'standard $x_1 = 2c_1 + kc_2 =$', expr: '2m + k*n', digits: 2 },
            { label: 'standard $x_2 = c_1 + c_2 =$', expr: 'm + n', digits: 2 },
          ],
          caption: 'With $k = -1$, $c_1 = 2$, $c_2 = 3$ the red point is $(1, 5)$, matching the worked example. Change $k$ to skew the grid: the point\'s $\\mathcal{B}$-coordinates stay put while its standard coordinates change.',
        },
      ],
    },
    {
      kind: 'fill',
      prompt: 'Let $\\mathcal{B} = \\left\\{ \\begin{bmatrix} 1 \\\\ 1 \\end{bmatrix}, \\begin{bmatrix} 1 \\\\ -1 \\end{bmatrix} \\right\\}$ and $\\mathbf{x} = \\begin{bmatrix} 5 \\\\ 1 \\end{bmatrix}$. Find $[\\mathbf{x}]_{\\mathcal{B}}$.',
      template: '$[\\mathbf{x}]_{\\mathcal{B}} = ($ ___ $,$ ___ $)$',
      blanks: [{ answers: ['3'] }, { answers: ['2'] }],
      hint: 'Solve $c_1 + c_2 = 5$ and $c_1 - c_2 = 1$.',
      explanation: 'Adding the equations gives $2c_1 = 6$, so $c_1 = 3$, and then $c_2 = 2$. Check: $3(1, 1) + 2(1, -1) = (5, 1)$. This basis is the standard grid rotated by $45^\\circ$ and stretched by $\\sqrt{2}$: the coordinates are "how far along each diagonal".',
    },
    {
      kind: 'concept',
      title: 'The change-of-coordinates matrix P_B',
      blocks: [
        {
          type: 'p',
          text: 'Solving a system every time is tedious. Notice that rebuilding $\\mathbf{x}$ from its coordinates is a linear combination of the basis vectors, and a linear combination is a matrix-vector product.',
        },
        {
          type: 'definition',
          term: 'Change-of-coordinates matrix',
          text: 'For a basis $\\mathcal{B} = \\{\\mathbf{b}_1, \\dots, \\mathbf{b}_n\\}$ of $\\mathbb{R}^n$, let $P_{\\mathcal{B}} = [\\,\\mathbf{b}_1\\ \\cdots\\ \\mathbf{b}_n\\,]$. Then\n\n$$\\mathbf{x} = P_{\\mathcal{B}}[\\mathbf{x}]_{\\mathcal{B}}, \\qquad [\\mathbf{x}]_{\\mathcal{B}} = P_{\\mathcal{B}}^{-1}\\mathbf{x}.$$\n\n$P_{\\mathcal{B}}$ converts $\\mathcal{B}$-coordinates **to** standard coordinates; its inverse converts standard coordinates **to** $\\mathcal{B}$-coordinates.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why P_B is always invertible',
          text: 'Its columns form a basis of $\\mathbb{R}^n$: $n$ independent vectors that span. By the Invertible Matrix Theorem, a square matrix with independent columns is invertible. So the conversion works in both directions, which is just the Unique Representation Theorem in matrix language.',
        },
        {
          type: 'derivation',
          title: 'Redo the example with $P_{\\mathcal{B}} = \\begin{bmatrix} 2 & -1 \\\\ 1 & 1 \\end{bmatrix}$',
          steps: [
            { tex: '\\det P_{\\mathcal{B}} = 2(1) - (-1)(1) = 3', why: 'Nonzero, as it must be for a basis.' },
            { tex: 'P_{\\mathcal{B}}^{-1} = \\frac{1}{3}\\begin{bmatrix} 1 & 1 \\\\ -1 & 2 \\end{bmatrix}', why: 'The $2 \\times 2$ inverse formula: swap the diagonal entries, negate the off-diagonal ones, divide by the determinant.' },
            { tex: '[\\mathbf{x}]_{\\mathcal{B}} = \\frac{1}{3}\\begin{bmatrix} 1 & 1 \\\\ -1 & 2 \\end{bmatrix}\\begin{bmatrix} 1 \\\\ 5 \\end{bmatrix} = \\frac{1}{3}\\begin{bmatrix} 6 \\\\ 9 \\end{bmatrix} = \\begin{bmatrix} 2 \\\\ 3 \\end{bmatrix}', why: 'Multiply: $(1 + 5)/3 = 2$ and $(-1 + 10)/3 = 3$.' },
            { tex: 'P_{\\mathcal{B}}\\begin{bmatrix} 2 \\\\ 3 \\end{bmatrix} = \\begin{bmatrix} 4 - 3 \\\\ 2 + 3 \\end{bmatrix} = \\begin{bmatrix} 1 \\\\ 5 \\end{bmatrix}', why: 'Going back: $P_{\\mathcal{B}}$ turns coordinates into the actual vector.' },
          ],
          result: 'Once $P_{\\mathcal{B}}^{-1}$ is computed, converting any number of vectors costs one matrix-vector product each.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Direction confusion',
          text: '$P_{\\mathcal{B}}$ has the basis vectors as columns, so multiplying by it **builds** the vector from coordinates. To **read off** coordinates you need $P_{\\mathcal{B}}^{-1}$. A quick self-check: $[\\mathbf{b}_1]_{\\mathcal{B}} = \\mathbf{e}_1$, so $P_{\\mathcal{B}}\\mathbf{e}_1$ must give $\\mathbf{b}_1$, the first column. It does.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'Let $\\mathcal{B} = \\left\\{ \\begin{bmatrix} 3 \\\\ 1 \\end{bmatrix}, \\begin{bmatrix} 2 \\\\ 1 \\end{bmatrix} \\right\\}$ and $\\mathbf{x} = \\begin{bmatrix} 7 \\\\ 3 \\end{bmatrix}$. Find the **second** $\\mathcal{B}$-coordinate $c_2$ of $\\mathbf{x}$.',
      label: '$c_2 =$',
      answer: '2',
      hint: '$P_{\\mathcal{B}} = \\begin{bmatrix} 3 & 2 \\\\ 1 & 1 \\end{bmatrix}$ has determinant $1$, so its inverse is easy.',
      explanation: '$P_{\\mathcal{B}}^{-1} = \\begin{bmatrix} 1 & -2 \\\\ -1 & 3 \\end{bmatrix}$ (determinant $3 - 2 = 1$). Then $[\\mathbf{x}]_{\\mathcal{B}} = \\begin{bmatrix} 7 - 6 \\\\ -7 + 9 \\end{bmatrix} = \\begin{bmatrix} 1 \\\\ 2 \\end{bmatrix}$, so $c_2 = 2$. Check: $1(3, 1) + 2(2, 1) = (7, 3)$.',
    },
    {
      kind: 'concept',
      title: 'Coordinates in any vector space',
      blocks: [
        {
          type: 'p',
          text: 'Coordinates turn abstract vectors into columns of numbers. Choose a basis $\\mathcal{B}$ of an $n$-dimensional space $V$, and the **coordinate mapping** $\\mathbf{x} \\mapsto [\\mathbf{x}]_{\\mathcal{B}}$ sends $V$ to $\\mathbb{R}^n$.',
        },
        {
          type: 'theorem',
          name: 'The coordinate mapping',
          text: 'If $\\mathcal{B}$ is a basis of $V$ with $n$ vectors, then $\\mathbf{x} \\mapsto [\\mathbf{x}]_{\\mathcal{B}}$ is a one-to-one linear transformation from $V$ **onto** $\\mathbb{R}^n$. (Such a map is called an **isomorphism**: $V$ and $\\mathbb{R}^n$ are the same vector space wearing different clothes.)',
        },
        {
          type: 'p',
          text: 'Linearity means $[\\mathbf{u} + \\mathbf{w}]_{\\mathcal{B}} = [\\mathbf{u}]_{\\mathcal{B}} + [\\mathbf{w}]_{\\mathcal{B}}$ and $[c\\mathbf{u}]_{\\mathcal{B}} = c[\\mathbf{u}]_{\\mathcal{B}}$: adding the weights adds the vectors. So any question about independence, span or dimension in $V$ can be answered by row reducing coordinate vectors in $\\mathbb{R}^n$. It is also why software can store a polynomial as a plain array of coefficients.',
        },
        {
          type: 'derivation',
          title: 'In $\\mathbb{P}_2$ with $\\mathcal{B} = \\{1,\\ 1 + t,\\ 1 + t + t^2\\}$, find $[p]_{\\mathcal{B}}$ for $p(t) = 4 + 5t + 2t^2$',
          steps: [
            { tex: 'c_1(1) + c_2(1 + t) + c_3(1 + t + t^2) = 4 + 5t + 2t^2', why: 'Coordinates are the weights that rebuild $p$ from the basis polynomials.' },
            { tex: '(c_1 + c_2 + c_3) + (c_2 + c_3)t + c_3 t^2 = 4 + 5t + 2t^2', why: 'Collect by powers of $t$.' },
            { tex: 'c_3 = 2, \\quad c_2 + c_3 = 5, \\quad c_1 + c_2 + c_3 = 4', why: 'Two polynomials are equal exactly when their coefficients match.' },
            { tex: 'c_3 = 2, \\quad c_2 = 3, \\quad c_1 = -1', why: 'The system is already triangular: back-substitute from the $t^2$ equation up.' },
          ],
          result: '$[p]_{\\mathcal{B}} = (-1, 3, 2)$. Check: $-1 + 3(1 + t) + 2(1 + t + t^2) = 4 + 5t + 2t^2$. In the standard basis $\\{1, t, t^2\\}$ the coordinates would simply be $(4, 5, 2)$.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Same data, different basis',
          text: 'Changing basis is the core of many algorithms. A Bezier curve stores control points, which are coordinates in the **Bernstein** basis of $\\mathbb{P}_3$, rather than power-basis coefficients; a JPEG stores **cosine-basis** coordinates of each $8 \\times 8$ block; spherical harmonics store lighting as coordinates in a basis of functions on the sphere. The object is the same; the basis is chosen so that the coordinates are meaningful, stable or compressible.',
        },
      ],
    },
    {
      kind: 'fill',
      prompt: 'In $\\mathbb{P}_2$ with the basis $\\mathcal{B} = \\{1,\\ 1 + t,\\ 1 + t + t^2\\}$, find the coordinate vector of $q(t) = 6 + 3t - t^2$.',
      template: '$[q]_{\\mathcal{B}} = ($ ___ $,$ ___ $,$ ___ $)$',
      blanks: [{ answers: ['3'] }, { answers: ['4'] }, { answers: ['-1'] }],
      hint: 'Match coefficients: $c_3$ is the $t^2$ coefficient, $c_2 + c_3$ the $t$ coefficient, $c_1 + c_2 + c_3$ the constant.',
      explanation: '$c_3 = -1$; $c_2 + c_3 = 3$ gives $c_2 = 4$; $c_1 + c_2 + c_3 = 6$ gives $c_1 = 6 - 3 = 3$. Check: $3 + 4(1 + t) - (1 + t + t^2) = 3 + 4 - 1 + (4 - 1)t - t^2 = 6 + 3t - t^2$.',
    },
    {
      kind: 'concept',
      title: 'Changing between two non-standard bases',
      blocks: [
        {
          type: 'p',
          text: 'Often neither basis is standard: you know a vector\'s coordinates in $\\mathcal{B}$ and need them in $\\mathcal{C}$. Because the coordinate mapping is linear, the conversion is a matrix, and its columns are easy to describe.',
        },
        {
          type: 'theorem',
          name: 'Change-of-basis matrix',
          tex: '[\\mathbf{x}]_{\\mathcal{C}} = P_{\\mathcal{C} \\leftarrow \\mathcal{B}}\\,[\\mathbf{x}]_{\\mathcal{B}}, \\qquad P_{\\mathcal{C} \\leftarrow \\mathcal{B}} = \\big[\\, [\\mathbf{b}_1]_{\\mathcal{C}}\\ \\ [\\mathbf{b}_2]_{\\mathcal{C}}\\ \\cdots\\ [\\mathbf{b}_n]_{\\mathcal{C}} \\,\\big]',
          text: 'The columns of the [[change-of-basis-matrix]] $P_{\\mathcal{C} \\leftarrow \\mathcal{B}}$ are the $\\mathcal{C}$-coordinates of the $\\mathcal{B}$ basis vectors. Its inverse is $P_{\\mathcal{B} \\leftarrow \\mathcal{C}}$. In $\\mathbb{R}^n$, $P_{\\mathcal{C} \\leftarrow \\mathcal{B}} = P_{\\mathcal{C}}^{-1}P_{\\mathcal{B}}$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why those columns',
          text: 'Write $\\mathbf{x} = x_1\\mathbf{b}_1 + \\cdots + x_n\\mathbf{b}_n$, so $[\\mathbf{x}]_{\\mathcal{B}} = (x_1, \\dots, x_n)$. Apply the linear coordinate map $[\\,\\cdot\\,]_{\\mathcal{C}}$: $[\\mathbf{x}]_{\\mathcal{C}} = x_1[\\mathbf{b}_1]_{\\mathcal{C}} + \\cdots + x_n[\\mathbf{b}_n]_{\\mathcal{C}}$, a combination of the columns listed above with weights $[\\mathbf{x}]_{\\mathcal{B}}$. The formula $P_{\\mathcal{C}}^{-1}P_{\\mathcal{B}}$ reads right to left: $P_{\\mathcal{B}}$ takes $\\mathcal{B}$-coordinates to standard, then $P_{\\mathcal{C}}^{-1}$ takes standard to $\\mathcal{C}$.',
        },
        {
          type: 'derivation',
          title: '$\\mathcal{B} = \\left\\{ \\begin{bmatrix} 3 \\\\ 1 \\end{bmatrix}, \\begin{bmatrix} 1 \\\\ 3 \\end{bmatrix} \\right\\}$, $\\mathcal{C} = \\left\\{ \\begin{bmatrix} 1 \\\\ 1 \\end{bmatrix}, \\begin{bmatrix} 1 \\\\ 2 \\end{bmatrix} \\right\\}$: find $P_{\\mathcal{C} \\leftarrow \\mathcal{B}}$',
          steps: [
            { tex: '\\left[\\begin{array}{cc|cc} \\mathbf{c}_1 & \\mathbf{c}_2 & \\mathbf{b}_1 & \\mathbf{b}_2 \\end{array}\\right] = \\left[\\begin{array}{cc|cc} 1 & 1 & 3 & 1 \\\\ 1 & 2 & 1 & 3 \\end{array}\\right]', why: 'Finding $[\\mathbf{b}_j]_{\\mathcal{C}}$ means solving $[\\,\\mathbf{c}_1\\ \\mathbf{c}_2\\,]\\mathbf{y} = \\mathbf{b}_j$. Both systems share a coefficient matrix, so solve them at once with two right-hand columns.' },
            { tex: '\\xrightarrow{R_2 - R_1} \\left[\\begin{array}{cc|cc} 1 & 1 & 3 & 1 \\\\ 0 & 1 & -2 & 2 \\end{array}\\right]', why: 'Clear below the first pivot.' },
            { tex: '\\xrightarrow{R_1 - R_2} \\left[\\begin{array}{cc|cc} 1 & 0 & 5 & -1 \\\\ 0 & 1 & -2 & 2 \\end{array}\\right]', why: 'Clear above the second pivot. The left block is now $I$.' },
            { tex: 'P_{\\mathcal{C} \\leftarrow \\mathcal{B}} = \\begin{bmatrix} 5 & -1 \\\\ -2 & 2 \\end{bmatrix}', why: 'The right block holds $[\\mathbf{b}_1]_{\\mathcal{C}}$ and $[\\mathbf{b}_2]_{\\mathcal{C}}$. Check: $5\\mathbf{c}_1 - 2\\mathbf{c}_2 = (5 - 2, 5 - 4) = (3, 1) = \\mathbf{b}_1$.' },
            { tex: '[\\mathbf{x}]_{\\mathcal{B}} = \\begin{bmatrix} 1 \\\\ 1 \\end{bmatrix} \\implies [\\mathbf{x}]_{\\mathcal{C}} = \\begin{bmatrix} 5 - 1 \\\\ -2 + 2 \\end{bmatrix} = \\begin{bmatrix} 4 \\\\ 0 \\end{bmatrix}', why: 'Use it. Check: $\\mathbf{b}_1 + \\mathbf{b}_2 = (4, 4)$ and $4\\mathbf{c}_1 + 0\\mathbf{c}_2 = (4, 4)$. Same vector.' },
          ],
          result: 'Row reduce $[\\,\\mathcal{C} \\mid \\mathcal{B}\\,] \\sim [\\,I \\mid P_{\\mathcal{C} \\leftarrow \\mathcal{B}}\\,]$: the basis you are converting **to** goes on the left.',
        },
        {
          type: 'p',
          text: 'Going back: $P_{\\mathcal{B} \\leftarrow \\mathcal{C}} = (P_{\\mathcal{C} \\leftarrow \\mathcal{B}})^{-1} = \\frac{1}{8}\\begin{bmatrix} 2 & 1 \\\\ 2 & 5 \\end{bmatrix}$ (the determinant is $10 - 2 = 8$).',
        },
      ],
    },
    {
      kind: 'fill',
      prompt: 'With the same $\\mathcal{B}$, $\\mathcal{C}$ and $P_{\\mathcal{C} \\leftarrow \\mathcal{B}} = \\begin{bmatrix} 5 & -1 \\\\ -2 & 2 \\end{bmatrix}$, a vector has $[\\mathbf{x}]_{\\mathcal{B}} = \\begin{bmatrix} 2 \\\\ -1 \\end{bmatrix}$. Find $[\\mathbf{x}]_{\\mathcal{C}}$.',
      template: '$[\\mathbf{x}]_{\\mathcal{C}} = ($ ___ $,$ ___ $)$',
      blanks: [{ answers: ['11'] }, { answers: ['-6'] }],
      hint: 'Multiply $P_{\\mathcal{C} \\leftarrow \\mathcal{B}}$ by $[\\mathbf{x}]_{\\mathcal{B}}$.',
      explanation: '$\\begin{bmatrix} 5 & -1 \\\\ -2 & 2 \\end{bmatrix}\\begin{bmatrix} 2 \\\\ -1 \\end{bmatrix} = \\begin{bmatrix} 10 + 1 \\\\ -4 - 2 \\end{bmatrix} = \\begin{bmatrix} 11 \\\\ -6 \\end{bmatrix}$. Check in standard coordinates: $2\\mathbf{b}_1 - \\mathbf{b}_2 = (6 - 1, 2 - 3) = (5, -1)$ and $11\\mathbf{c}_1 - 6\\mathbf{c}_2 = (11 - 6, 11 - 12) = (5, -1)$.',
    },
    {
      kind: 'mcq',
      prompt: 'Bases $\\mathcal{B}$ and $\\mathcal{C}$ of $\\mathbb{R}^n$ have matrices $P_{\\mathcal{B}}$ and $P_{\\mathcal{C}}$ (basis vectors as columns). Which matrix converts **$\\mathcal{C}$-coordinates into $\\mathcal{B}$-coordinates**?',
      options: [
        {
          text: '$P_{\\mathcal{C}}^{-1}P_{\\mathcal{B}}$',
          why: 'Read right to left: $\\mathcal{B}$-coordinates $\\to$ standard $\\to$ $\\mathcal{C}$-coordinates. That is $P_{\\mathcal{C} \\leftarrow \\mathcal{B}}$, the opposite direction.',
        },
        {
          text: '$P_{\\mathcal{B}}P_{\\mathcal{C}}^{-1}$',
          why: '$P_{\\mathcal{C}}^{-1}$ expects a standard vector, not $\\mathcal{C}$-coordinates, and $P_{\\mathcal{B}}$ then outputs a standard vector. The pieces are in the wrong order.',
        },
        {
          text: '$P_{\\mathcal{B}}^{-1}P_{\\mathcal{C}}$',
          correct: true,
          why: '$P_{\\mathcal{C}}$ turns $\\mathcal{C}$-coordinates into the standard vector, then $P_{\\mathcal{B}}^{-1}$ reads off its $\\mathcal{B}$-coordinates.',
        },
        {
          text: '$P_{\\mathcal{C}}P_{\\mathcal{B}}^{-1}$',
          why: 'This applies $P_{\\mathcal{B}}^{-1}$ first, which needs a standard vector as input. Not a coordinate conversion.',
        },
      ],
      explanation: 'Route every conversion through standard coordinates and read matrix products right to left: $[\\mathbf{x}]_{\\mathcal{B}} = P_{\\mathcal{B}}^{-1}\\mathbf{x} = P_{\\mathcal{B}}^{-1}P_{\\mathcal{C}}[\\mathbf{x}]_{\\mathcal{C}}$. So $P_{\\mathcal{B} \\leftarrow \\mathcal{C}} = P_{\\mathcal{B}}^{-1}P_{\\mathcal{C}}$, the inverse of $P_{\\mathcal{C} \\leftarrow \\mathcal{B}} = P_{\\mathcal{C}}^{-1}P_{\\mathcal{B}}$. The arrow notation helps: the subscripts "chain" like $P_{\\mathcal{B} \\leftarrow \\mathcal{E}}P_{\\mathcal{E} \\leftarrow \\mathcal{C}}$, with $\\mathcal{E}$ the standard basis.',
    },
    {
      kind: 'error',
      prompt: 'A student computes $P_{\\mathcal{C} \\leftarrow \\mathcal{B}}$ by row reduction. Tap the first wrong line.',
      lines: [
        'Column $j$ of $P_{\\mathcal{C} \\leftarrow \\mathcal{B}}$ is $[\\mathbf{b}_j]_{\\mathcal{C}}$.',
        '$[\\mathbf{b}_j]_{\\mathcal{C}}$ is the solution $\\mathbf{y}$ of $[\\,\\mathbf{c}_1\\ \\cdots\\ \\mathbf{c}_n\\,]\\mathbf{y} = \\mathbf{b}_j$.',
        'So row reduce $[\\,\\mathbf{b}_1\\ \\cdots\\ \\mathbf{b}_n \\mid \\mathbf{c}_1\\ \\cdots\\ \\mathbf{c}_n\\,]$ to $[\\,I \\mid P_{\\mathcal{C} \\leftarrow \\mathcal{B}}\\,]$.',
        'The right-hand block is the answer.',
      ],
      errorLines: [3],
      explanation: 'Line 2 correctly says the **coefficient matrix** is made of the $\\mathbf{c}$\'s and the **right-hand sides** are the $\\mathbf{b}$\'s. Line 3 puts them the other way round, which produces $P_{\\mathcal{B} \\leftarrow \\mathcal{C}}$ instead. The correct setup is $[\\,\\mathbf{c}_1\\ \\cdots\\ \\mathbf{c}_n \\mid \\mathbf{b}_1\\ \\cdots\\ \\mathbf{b}_n\\,] \\sim [\\,I \\mid P_{\\mathcal{C} \\leftarrow \\mathcal{B}}\\,]$: the target basis goes on the left.',
    },
    {
      kind: 'concept',
      title: 'Local space and world space',
      blocks: [
        {
          type: 'p',
          text: 'Every game object carries its own coordinate system. A character has a **right** vector $\\mathbf{r}$, an **up** vector $\\mathbf{u}$ and a **forward** vector $\\mathbf{f}$, given in world coordinates. These form a basis $\\mathcal{B}$, and the matrix with those columns, $R = [\\,\\mathbf{r}\\ \\mathbf{u}\\ \\mathbf{f}\\,]$, is exactly $P_{\\mathcal{B}}$. ("Object" or "local" space means $\\mathcal{B}$-coordinates; "world space" means standard coordinates.)',
        },
        {
          type: 'list',
          items: [
            '**Local to world:** a direction with local coordinates $\\mathbf{c} = (c_r, c_u, c_f)$ is $R\\mathbf{c} = c_r\\mathbf{r} + c_u\\mathbf{u} + c_f\\mathbf{f}$ in world space. "Two units forward, one unit right" becomes a world vector. (Positions also add the object\'s world position, the translation part of the 4×4 model matrix.)',
            '**World to local:** $\\mathbf{c} = R^{-1}\\mathbf{d}$. This answers questions like "is the enemy in front of me, and to my left or right?"',
          ],
        },
        {
          type: 'p',
          text: 'Here is the payoff. For a rotation-only transform, $\\mathbf{r}, \\mathbf{u}, \\mathbf{f}$ are unit vectors that are mutually perpendicular: an **orthonormal** basis. Then the inverse costs nothing.',
        },
        {
          type: 'derivation',
          title: 'Why $R^{-1} = R^{T}$ for an orthonormal basis',
          steps: [
            { tex: 'R^{T}R = \\begin{bmatrix} \\mathbf{r}^{T} \\\\ \\mathbf{u}^{T} \\\\ \\mathbf{f}^{T} \\end{bmatrix}\\begin{bmatrix} \\mathbf{r} & \\mathbf{u} & \\mathbf{f} \\end{bmatrix} = \\begin{bmatrix} \\mathbf{r}\\cdot\\mathbf{r} & \\mathbf{r}\\cdot\\mathbf{u} & \\mathbf{r}\\cdot\\mathbf{f} \\\\ \\mathbf{u}\\cdot\\mathbf{r} & \\mathbf{u}\\cdot\\mathbf{u} & \\mathbf{u}\\cdot\\mathbf{f} \\\\ \\mathbf{f}\\cdot\\mathbf{r} & \\mathbf{f}\\cdot\\mathbf{u} & \\mathbf{f}\\cdot\\mathbf{f} \\end{bmatrix}', why: 'Entry $(i, j)$ of $R^{T}R$ is row $i$ of $R^{T}$ (column $i$ of $R$) dotted with column $j$ of $R$.' },
            { tex: '= \\begin{bmatrix} 1 & 0 & 0 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 1 \\end{bmatrix} = I_3', why: 'Unit vectors have $\\mathbf{v}\\cdot\\mathbf{v} = 1$; perpendicular vectors have dot product $0$.' },
            { tex: '[\\mathbf{d}]_{\\mathcal{B}} = R^{T}\\mathbf{d} = \\begin{bmatrix} \\mathbf{r}\\cdot\\mathbf{d} \\\\ \\mathbf{u}\\cdot\\mathbf{d} \\\\ \\mathbf{f}\\cdot\\mathbf{d} \\end{bmatrix}', why: 'Since $R^{T}R = I$, $R^{T}$ is the inverse. Each local coordinate is just a [[dot-product]] with the corresponding axis.' },
          ],
          result: 'For an orthonormal basis, converting to local space is three dot products: no row reduction, no general inverse.',
        },
        {
          type: 'p',
          text: 'In 2D (top-down view), a character facing angle $\\theta$ has $\\mathbf{f} = (\\cos\\theta, \\sin\\theta)$ and $\\mathbf{r} = (\\sin\\theta, -\\cos\\theta)$. The target is fixed at $\\mathbf{d} = (3, 2)$ relative to the character. Rotate the character and watch the target\'s local coordinates.',
        },
        {
          type: 'graph',
          x: [-4, 4],
          y: [-3, 4],
          equal: true,
          segments: [
            { from: [0, 0], to: ['cos(a)', 'sin(a)'], arrow: true, label: 'f', color: 'blue' },
            { from: [0, 0], to: ['sin(a)', '-cos(a)'], arrow: true, label: 'r', color: 'red' },
            { from: [0, 0], to: ['(3cos(a) + 2sin(a))cos(a)', '(3cos(a) + 2sin(a))sin(a)'], dashed: true, color: 'blue' },
            { from: ['(3cos(a) + 2sin(a))cos(a)', '(3cos(a) + 2sin(a))sin(a)'], to: [3, 2], dashed: true, color: 'red' },
          ],
          points: [{ x: 3, y: 2, label: 'target (3, 2)', color: 'purple' }, { x: 0, y: 0, label: 'player' }],
          sliders: [{ name: 'a', min: -3.1, max: 3.1, step: 0.05, value: 0.6, label: 'facing angle $\\theta$' }],
          readouts: [
            { label: 'forward $\\mathbf{f}\\cdot\\mathbf{d} =$', expr: '3cos(a) + 2sin(a)', digits: 2 },
            { label: 'right $\\mathbf{r}\\cdot\\mathbf{d} =$', expr: '3sin(a) - 2cos(a)', digits: 2 },
          ],
          caption: 'Forward $> 0$: target in front. Right $> 0$: target to the right; $< 0$: to the left. Face the target exactly ($\\theta \\approx 0.59$) and the right component becomes $0$ while forward becomes $\\sqrt{13} \\approx 3.61$, the distance.',
        },
        {
          type: 'code',
          title: 'local_space.cpp',
          runnable: true,
          code: `#include <cstdio>

struct Vec3 { float x, y, z; };

float dot(Vec3 a, Vec3 b) { return a.x * b.x + a.y * b.y + a.z * b.z; }
Vec3 operator*(float s, Vec3 v) { return {s * v.x, s * v.y, s * v.z}; }
Vec3 operator+(Vec3 a, Vec3 b) { return {a.x + b.x, a.y + b.y, a.z + b.z}; }

struct Basis { Vec3 right, up, forward; };   // orthonormal columns of R

// World direction -> local coordinates: R^T d (three dot products).
Vec3 worldToLocal(const Basis& B, Vec3 d) {
    return {dot(B.right, d), dot(B.up, d), dot(B.forward, d)};
}

// Local coordinates -> world direction: R c (a linear combination).
Vec3 localToWorld(const Basis& B, Vec3 c) {
    return c.x * B.right + c.y * B.up + c.z * B.forward;
}

int main() {
    Basis B{{0.8f, 0.0f, -0.6f}, {0.0f, 1.0f, 0.0f}, {0.6f, 0.0f, 0.8f}};
    Vec3 toEnemy{5.0f, 2.0f, 0.0f};             // world-space direction

    Vec3 c = worldToLocal(B, toEnemy);
    std::printf("local: right %.2f, up %.2f, forward %.2f\\n", c.x, c.y, c.z);

    Vec3 back = localToWorld(B, c);
    std::printf("world again: (%.2f, %.2f, %.2f)\\n", back.x, back.y, back.z);
}`,
          output: `local: right 4.00, up 2.00, forward 3.00
world again: (5.00, 2.00, 0.00)`,
          annotations: [
            { lines: 9, text: 'The basis vectors, in world coordinates, are the columns of $R = P_{\\mathcal{B}}$.' },
            { lines: '12-14', text: '$R^{T}\\mathbf{d}$: valid as the inverse only because the basis is orthonormal.' },
            { lines: '17-19', text: '$R\\mathbf{c}$: rebuild the world vector as a linear combination of the axes.' },
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Non-uniform scale breaks the shortcut',
          text: 'If the object is scaled (say its basis is $2\\mathbf{r}, \\mathbf{u}, \\mathbf{f}$), the columns are no longer unit vectors and $R^{T} \\ne R^{-1}$. Engines either keep rotation and scale separate (invert the scale by dividing) or fall back to a true matrix inverse. The same issue is why normals are transformed by the inverse transpose.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'A character faces $\\mathbf{f} = (0.6, 0.8)$ with right vector $\\mathbf{r} = (0.8, -0.6)$. A pickup is at displacement $\\mathbf{d} = (2, 4)$ from the character. What is its **forward** coordinate in the character\'s local space?',
      label: 'forward $=$',
      answer: '22/5',
      answerTex: '4.4',
      hint: 'The basis is orthonormal, so the local coordinate is a dot product.',
      explanation: 'Forward coordinate $= \\mathbf{f}\\cdot\\mathbf{d} = 0.6(2) + 0.8(4) = 1.2 + 3.2 = 4.4$. The right coordinate is $\\mathbf{r}\\cdot\\mathbf{d} = 1.6 - 2.4 = -0.8$, so the pickup is $4.4$ units ahead and $0.8$ units to the **left**. Check: $-0.8\\mathbf{r} + 4.4\\mathbf{f} = (-0.64 + 2.64,\\ 0.48 + 3.52) = (2, 4)$.',
    },
    {
      kind: 'truefalse',
      prompt: 'For every basis $\\mathcal{B}$ of $\\mathbb{R}^n$, the change-of-coordinates matrix satisfies $P_{\\mathcal{B}}^{-1} = P_{\\mathcal{B}}^{T}$.',
      answer: false,
      explanation: 'That holds only when the basis is **orthonormal** (unit vectors, mutually perpendicular), because then $P_{\\mathcal{B}}^{T}P_{\\mathcal{B}}$ is the table of dot products, which is $I$. For $\\mathcal{B} = \\{(2, 1), (-1, 1)\\}$ from this lesson, $P_{\\mathcal{B}}^{T}P_{\\mathcal{B}} = \\begin{bmatrix} 5 & -1 \\\\ -1 & 2 \\end{bmatrix} \\ne I$, and the true inverse is $\\frac{1}{3}\\begin{bmatrix} 1 & 1 \\\\ -1 & 2 \\end{bmatrix}$.',
    },
    {
      kind: 'expr',
      prompt: 'In the 2D graph above, the character faces angle $\\theta$, so $\\mathbf{r} = (\\sin\\theta, -\\cos\\theta)$, and the target is at $\\mathbf{d} = (3, 2)$. Write the target\'s **right** coordinate as a function of $\\theta$ (type `theta`).',
      label: '$\\mathbf{r}\\cdot\\mathbf{d} =$',
      variables: ['theta'],
      answer: '3sin(theta) - 2cos(theta)',
      answerTex: '3\\sin\\theta - 2\\cos\\theta',
      hint: 'Dot product: multiply matching entries and add.',
      explanation: '$\\mathbf{r}\\cdot\\mathbf{d} = 3\\sin\\theta + 2(-\\cos\\theta) = 3\\sin\\theta - 2\\cos\\theta$. It is zero when $\\tan\\theta = \\frac{2}{3}$, i.e. $\\theta = \\arctan\\frac{2}{3} \\approx 0.588$ (facing the target) or that angle plus $\\pi$ (facing directly away). A steering AI uses exactly this sign test to decide whether to turn left or right.',
    },
  ],
  takeaways: [
    'Because a basis is independent and spanning, every vector has unique coordinates $[\\mathbf{x}]_{\\mathcal{B}}$: the weights that rebuild it.',
    '$P_{\\mathcal{B}} = [\\,\\mathbf{b}_1\\ \\cdots\\ \\mathbf{b}_n\\,]$ builds vectors from coordinates, $\\mathbf{x} = P_{\\mathcal{B}}[\\mathbf{x}]_{\\mathcal{B}}$; its inverse reads coordinates off, $[\\mathbf{x}]_{\\mathcal{B}} = P_{\\mathcal{B}}^{-1}\\mathbf{x}$.',
    'The coordinate map is a linear bijection $V \\to \\mathbb{R}^n$, so polynomial (and other abstract) problems can be solved with column vectors.',
    '$P_{\\mathcal{C} \\leftarrow \\mathcal{B}}$ has columns $[\\mathbf{b}_j]_{\\mathcal{C}}$; compute it by row reducing $[\\,\\mathcal{C} \\mid \\mathcal{B}\\,] \\sim [\\,I \\mid P_{\\mathcal{C} \\leftarrow \\mathcal{B}}\\,]$, or as $P_{\\mathcal{C}}^{-1}P_{\\mathcal{B}}$. Its inverse is $P_{\\mathcal{B} \\leftarrow \\mathcal{C}}$.',
    'An object\'s right/up/forward vectors form its local basis; for an orthonormal basis, world-to-local is $R^{T}\\mathbf{d}$, i.e. three dot products.',
  ],
  reading: [
    {
      title: '3Blue1Brown — Change of basis',
      url: 'https://www.3blue1brown.com/topics/linear-algebra',
      source: 'video',
      note: 'Chapter 13 of *Essence of linear algebra* animates "Jennifer\'s grid" versus ours, the clearest picture of what $P_{\\mathcal{B}}$ and its inverse do.',
    },
    {
      title: 'Khan Academy — Linear algebra: change of basis',
      url: 'https://www.khanacademy.org/math/linear-algebra',
      source: 'khan',
      note: 'The "alternate coordinate systems (bases)" unit works through coordinates, change-of-basis matrices and orthonormal bases with many examples.',
    },
    {
      title: 'Interactive Linear Algebra — Bases as coordinate systems',
      url: 'https://textbooks.math.gatech.edu/ila/',
      source: 'book',
      note: 'Look for the section on bases as coordinate systems for $\\mathcal{B}$-coordinates drawn on skewed grids.',
    },
    {
      title: 'Wikipedia — Change of basis',
      url: 'https://en.wikipedia.org/wiki/Change_of_basis',
      source: 'wikipedia',
      note: 'The general formulas, including how the matrix of a linear map changes under a change of basis (a preview of similarity).',
    },
  ],
};
