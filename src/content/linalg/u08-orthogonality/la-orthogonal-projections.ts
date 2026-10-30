import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'la-orthogonal-projections',
  title: 'Orthogonal Sets and Projections',
  summary: 'Perpendicular bases make coordinates a matter of dot products, and projection finds the closest point in any subspace.',
  minutes: 19,
  objectives: [
    'Prove that an orthogonal set of nonzero vectors is linearly independent',
    'Find coordinates relative to an orthogonal basis with $c_j = \\dfrac{\\mathbf{y} \\cdot \\mathbf{u}_j}{\\mathbf{u}_j \\cdot \\mathbf{u}_j}$, without row reduction',
    'Recognise orthogonal matrices ($U^{T}U = I$) and explain why the inverse of a rotation is its transpose',
    'Describe the orthogonal complement $W^{\\perp}$ and use $(\\operatorname{Row} A)^{\\perp} = \\operatorname{Nul} A$',
    'Project a vector onto a subspace, split it as $\\mathbf{y} = \\hat{\\mathbf{y}} + \\mathbf{z}$, and find its distance to the subspace',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Orthogonal sets are independent',
      blocks: [
        {
          type: 'p',
          text: 'You already know that two vectors are [[orthogonal]] when their [[dot-product]] is zero. This unit is about what happens when a whole *set* of vectors is mutually perpendicular. The short answer: everything gets easier. Coordinates, inverses and closest points all collapse into a few dot products.',
        },
        {
          type: 'definition',
          term: 'Orthogonal set',
          text: 'A set $\\{\\mathbf{u}_1, \\dots, \\mathbf{u}_p\\}$ in $\\mathbb{R}^n$ is an [[orthogonal-set]] if every pair of distinct vectors is orthogonal: $\\mathbf{u}_i \\cdot \\mathbf{u}_j = 0$ whenever $i \\ne j$.',
        },
        {
          type: 'p',
          text: 'For example, $\\mathbf{u}_1 = \\begin{bmatrix} 3 \\\\ 1 \\\\ 1 \\end{bmatrix}$, $\\mathbf{u}_2 = \\begin{bmatrix} -1 \\\\ 2 \\\\ 1 \\end{bmatrix}$, $\\mathbf{u}_3 = \\begin{bmatrix} -1 \\\\ -4 \\\\ 7 \\end{bmatrix}$ form an orthogonal set: $\\mathbf{u}_1 \\cdot \\mathbf{u}_2 = -3 + 2 + 1 = 0$, $\\mathbf{u}_1 \\cdot \\mathbf{u}_3 = -3 - 4 + 7 = 0$ and $\\mathbf{u}_2 \\cdot \\mathbf{u}_3 = 1 - 8 + 7 = 0$. Three checks, one per pair.',
        },
        {
          type: 'theorem',
          name: 'Orthogonal sets are independent',
          text: 'If $S = \\{\\mathbf{u}_1, \\dots, \\mathbf{u}_p\\}$ is an orthogonal set of **nonzero** vectors in $\\mathbb{R}^n$, then $S$ is [[linear-independence|linearly independent]], and so it is a [[basis]] for the subspace it spans.',
        },
        {
          type: 'derivation',
          title: 'Proof: dot with $\\mathbf{u}_j$ to isolate one weight',
          steps: [
            { tex: 'c_1\\mathbf{u}_1 + c_2\\mathbf{u}_2 + \\cdots + c_p\\mathbf{u}_p = \\mathbf{0}', why: 'To prove independence, suppose some combination gives the zero vector. We must show every $c_j$ is $0$.' },
            { tex: '(c_1\\mathbf{u}_1 + \\cdots + c_p\\mathbf{u}_p) \\cdot \\mathbf{u}_j = \\mathbf{0} \\cdot \\mathbf{u}_j = 0', why: 'Take the dot product of both sides with one fixed vector $\\mathbf{u}_j$.' },
            { tex: 'c_1(\\mathbf{u}_1 \\cdot \\mathbf{u}_j) + \\cdots + c_p(\\mathbf{u}_p \\cdot \\mathbf{u}_j) = 0', why: 'The dot product distributes over sums and pulls out scalars.' },
            { tex: 'c_j(\\mathbf{u}_j \\cdot \\mathbf{u}_j) = 0', why: 'Every term with $i \\ne j$ vanishes, because $\\mathbf{u}_i \\cdot \\mathbf{u}_j = 0$. Only the $j$-th term survives.' },
            { tex: 'c_j = 0', why: '$\\mathbf{u}_j \\cdot \\mathbf{u}_j = \\|\\mathbf{u}_j\\|^2 > 0$ because $\\mathbf{u}_j \\ne \\mathbf{0}$, so we may divide by it. Since $j$ was arbitrary, all weights are zero.' },
          ],
          result: 'Only the trivial combination gives $\\mathbf{0}$, so the set is independent.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the word "nonzero" matters',
          text: 'The zero vector is orthogonal to everything, so $\\{\\mathbf{u}_1, \\mathbf{0}\\}$ is technically an orthogonal set. But any set containing $\\mathbf{0}$ is dependent ($1 \\cdot \\mathbf{0} = \\mathbf{0}$ is a nontrivial combination). The proof breaks exactly where we divide by $\\mathbf{u}_j \\cdot \\mathbf{u}_j$, which is $0$ for the zero vector.',
        },
        {
          type: 'callout',
          variant: 'warning',
          text: 'The converse is false. $\\begin{bmatrix} 1 \\\\ 0 \\end{bmatrix}$ and $\\begin{bmatrix} 1 \\\\ 1 \\end{bmatrix}$ are independent but not orthogonal (their dot product is $1$). Orthogonality is a much stronger, much more useful property.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'Find the value of $k$ that makes $\\begin{bmatrix} 1 \\\\ 2 \\\\ k \\end{bmatrix}$ orthogonal to $\\begin{bmatrix} 3 \\\\ -1 \\\\ 2 \\end{bmatrix}$.',
      hint: 'Set the dot product equal to $0$ and solve for $k$.',
      label: '$k =$',
      answer: '-1/2',
      explanation: 'The dot product is $1 \\cdot 3 + 2 \\cdot (-1) + k \\cdot 2 = 3 - 2 + 2k = 1 + 2k$. Orthogonal means this is $0$, so $2k = -1$ and $k = -\\frac{1}{2}$.',
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'concept',
      title: 'Orthogonal bases make coordinates easy',
      blocks: [
        {
          type: 'p',
          text: 'In the vector spaces unit, finding the [[coordinate-vector]] $[\\mathbf{y}]_{\\mathcal{B}}$ meant solving a linear system: row reduce $[\\,\\mathbf{b}_1 \\; \\cdots \\; \\mathbf{b}_p \\mid \\mathbf{y}\\,]$. With an **orthogonal basis** there is nothing to solve. The same trick as in the proof, dotting both sides with $\\mathbf{u}_j$, peels off one weight at a time.',
        },
        {
          type: 'theorem',
          name: 'Weights relative to an orthogonal basis',
          tex: '\\mathbf{y} = c_1\\mathbf{u}_1 + \\cdots + c_p\\mathbf{u}_p \\quad\\text{with}\\quad c_j = \\frac{\\mathbf{y} \\cdot \\mathbf{u}_j}{\\mathbf{u}_j \\cdot \\mathbf{u}_j}',
          text: 'Here $\\{\\mathbf{u}_1, \\dots, \\mathbf{u}_p\\}$ is an orthogonal basis for a subspace $W$ and $\\mathbf{y}$ is in $W$.',
        },
        {
          type: 'p',
          text: 'Why: dot $\\mathbf{y} = c_1\\mathbf{u}_1 + \\cdots + c_p\\mathbf{u}_p$ with $\\mathbf{u}_j$. All cross terms die, leaving $\\mathbf{y} \\cdot \\mathbf{u}_j = c_j(\\mathbf{u}_j \\cdot \\mathbf{u}_j)$. Divide. Each weight is computed **independently** of the others: no elimination, no back-substitution.',
        },
        {
          type: 'derivation',
          title: 'Write $\\mathbf{y} = \\begin{bmatrix} 6 \\\\ 1 \\\\ -8 \\end{bmatrix}$ in the orthogonal basis $\\{\\mathbf{u}_1, \\mathbf{u}_2, \\mathbf{u}_3\\}$ from the last card',
          steps: [
            { tex: '\\mathbf{y} \\cdot \\mathbf{u}_1 = 18 + 1 - 8 = 11, \\quad \\mathbf{u}_1 \\cdot \\mathbf{u}_1 = 9 + 1 + 1 = 11', why: 'Two dot products for the first weight: $\\mathbf{y}$ against $\\mathbf{u}_1 = (3, 1, 1)$, and $\\mathbf{u}_1$ against itself.' },
            { tex: 'c_1 = \\tfrac{11}{11} = 1', why: 'Apply $c_1 = \\frac{\\mathbf{y} \\cdot \\mathbf{u}_1}{\\mathbf{u}_1 \\cdot \\mathbf{u}_1}$.' },
            { tex: '\\mathbf{y} \\cdot \\mathbf{u}_2 = -6 + 2 - 8 = -12, \\quad \\mathbf{u}_2 \\cdot \\mathbf{u}_2 = 6 \\implies c_2 = -2', why: 'Same recipe with $\\mathbf{u}_2 = (-1, 2, 1)$: $\\frac{-12}{6} = -2$.' },
            { tex: '\\mathbf{y} \\cdot \\mathbf{u}_3 = -6 - 4 - 56 = -66, \\quad \\mathbf{u}_3 \\cdot \\mathbf{u}_3 = 66 \\implies c_3 = -1', why: 'And with $\\mathbf{u}_3 = (-1, -4, 7)$: $1 + 16 + 49 = 66$, so $\\frac{-66}{66} = -1$.' },
            { tex: '\\mathbf{u}_1 - 2\\mathbf{u}_2 - \\mathbf{u}_3 = \\begin{bmatrix} 3 + 2 + 1 \\\\ 1 - 4 + 4 \\\\ 1 - 2 - 7 \\end{bmatrix} = \\begin{bmatrix} 6 \\\\ 1 \\\\ -8 \\end{bmatrix} \\; \\checkmark', why: 'Always worth a check: the combination rebuilds $\\mathbf{y}$.' },
          ],
          result: '$[\\mathbf{y}]_{\\mathcal{B}} = \\begin{bmatrix} 1 \\\\ -2 \\\\ -1 \\end{bmatrix}$, found with six dot products and no row reduction.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Local coordinates in a game engine',
          text: 'Every object in an engine carries orthonormal axes `right`, `up`, `forward`. To express a world-space offset `d` in the object\'s local frame you do not invert anything: `local = { dot(d, right), dot(d, up), dot(d, forward) }`. That is this formula with $\\mathbf{u}_j \\cdot \\mathbf{u}_j = 1$. "Is the player in front of the guard?" is the sign of one of those weights.',
        },
      ],
    },
    {
      kind: 'fill',
      prompt: 'The vectors $\\mathbf{u}_1 = \\begin{bmatrix} 1 \\\\ 2 \\end{bmatrix}$ and $\\mathbf{u}_2 = \\begin{bmatrix} -2 \\\\ 1 \\end{bmatrix}$ form an orthogonal basis $\\mathcal{B}$ of $\\mathbb{R}^2$. Find the coordinates of $\\mathbf{y} = \\begin{bmatrix} 4 \\\\ 7 \\end{bmatrix}$. (Fractions such as 3/4 are fine.)',
      template: '$[\\mathbf{y}]_{\\mathcal{B}} = ($ ___ $,$ ___ $)$',
      blanks: [{ answers: ['18/5'] }, { answers: ['-1/5'] }],
      hint: 'Both basis vectors have $\\mathbf{u} \\cdot \\mathbf{u} = 5$.',
      explanation: '$c_1 = \\frac{\\mathbf{y} \\cdot \\mathbf{u}_1}{\\mathbf{u}_1 \\cdot \\mathbf{u}_1} = \\frac{4 + 14}{5} = \\frac{18}{5}$ and $c_2 = \\frac{\\mathbf{y} \\cdot \\mathbf{u}_2}{\\mathbf{u}_2 \\cdot \\mathbf{u}_2} = \\frac{-8 + 7}{5} = -\\frac{1}{5}$. Check: $\\frac{18}{5}(1, 2) - \\frac{1}{5}(-2, 1) = (\\frac{20}{5}, \\frac{35}{5}) = (4, 7)$.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Orthonormal sets and orthogonal matrices',
      blocks: [
        {
          type: 'p',
          text: 'If every vector in an orthogonal set also has length $1$, the set is **orthonormal**. Then $\\mathbf{u}_j \\cdot \\mathbf{u}_j = 1$ and the weight formula becomes just $c_j = \\mathbf{y} \\cdot \\mathbf{u}_j$. Any orthogonal set of nonzero vectors can be made orthonormal by dividing each vector by its [[norm]]. An [[orthonormal-basis]] is the gold standard of bases: the standard basis $\\mathbf{e}_1, \\dots, \\mathbf{e}_n$ is one, and so is any rotated copy of it.',
        },
        {
          type: 'theorem',
          name: 'Orthonormal columns',
          tex: 'U \\text{ has orthonormal columns} \\iff U^{T}U = I',
          text: 'For an $m \\times n$ matrix $U$. Then, for all $\\mathbf{x}, \\mathbf{y}$ in $\\mathbb{R}^n$: $\\|U\\mathbf{x}\\| = \\|\\mathbf{x}\\|$ and $(U\\mathbf{x}) \\cdot (U\\mathbf{y}) = \\mathbf{x} \\cdot \\mathbf{y}$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why $U^{T}U = I$ is the same statement',
          text: 'The $(i, j)$ entry of $U^{T}U$ is (row $i$ of $U^{T}$) times (column $j$ of $U$), which is $\\mathbf{u}_i \\cdot \\mathbf{u}_j$. So $U^{T}U = I$ says exactly: $\\mathbf{u}_i \\cdot \\mathbf{u}_i = 1$ on the diagonal and $\\mathbf{u}_i \\cdot \\mathbf{u}_j = 0$ off it. And lengths are preserved because $(U\\mathbf{x}) \\cdot (U\\mathbf{y}) = (U\\mathbf{x})^{T}(U\\mathbf{y}) = \\mathbf{x}^{T}U^{T}U\\mathbf{y} = \\mathbf{x}^{T}\\mathbf{y}$. Lengths and dot products survive, so angles survive too.',
        },
        {
          type: 'definition',
          term: 'Orthogonal matrix',
          text: 'A **square** matrix $U$ with orthonormal columns is an [[orthogonal-matrix]]. For such a matrix $U^{T}U = I$ means $U^{-1} = U^{T}$, and then $UU^{T} = I$ as well, so its **rows** are orthonormal too.',
        },
        {
          type: 'derivation',
          title: 'Why the inverse of a rotation is its transpose',
          steps: [
            { tex: 'R(\\theta) = \\begin{bmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{bmatrix}', why: 'The [[rotation-matrix]] from the transformations unit: its columns are the images of $\\mathbf{e}_1$ and $\\mathbf{e}_2$.' },
            { tex: 'R^{T}R = \\begin{bmatrix} \\cos\\theta & \\sin\\theta \\\\ -\\sin\\theta & \\cos\\theta \\end{bmatrix}\\begin{bmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{bmatrix}', why: 'Multiply by the [[transpose]] (rows and columns swapped).' },
            { tex: '= \\begin{bmatrix} \\cos^2\\theta + \\sin^2\\theta & -\\cos\\theta\\sin\\theta + \\sin\\theta\\cos\\theta \\\\ -\\sin\\theta\\cos\\theta + \\cos\\theta\\sin\\theta & \\sin^2\\theta + \\cos^2\\theta \\end{bmatrix}', why: 'Row-times-column for each of the four entries.' },
            { tex: '= \\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix}', why: 'The Pythagorean identity on the diagonal; the off-diagonal terms cancel exactly.' },
            { tex: 'R(\\theta)^{-1} = R(\\theta)^{T} = R(-\\theta)', why: 'So $R^{T}$ is the inverse. And it makes sense geometrically: $R^{T}$ has $\\sin\\theta$ negated, which is rotation by $-\\theta$, undoing the original turn.' },
          ],
          result: 'Every rotation matrix (in 2D or 3D) is orthogonal, so undoing a rotation costs a transpose, not a matrix inversion.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'The cheap inverse every engine uses',
          text: 'A camera\'s world transform is a rigid motion $\\mathbf{x} \\mapsto R\\mathbf{x} + \\mathbf{t}$. The view matrix is its inverse, $\\mathbf{x} \\mapsto R^{T}(\\mathbf{x} - \\mathbf{t}) = R^{T}\\mathbf{x} - R^{T}\\mathbf{t}$. Engines compute it with a transpose and one matrix-vector product instead of a general $4 \\times 4$ inverse: faster, and with no division to amplify rounding error.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'A naming trap',
          text: 'An "orthogonal matrix" must have ortho**normal** columns. A matrix whose columns are merely orthogonal, like $\\begin{bmatrix} 2 & 0 \\\\ 0 & 3 \\end{bmatrix}$, gives $U^{T}U = \\begin{bmatrix} 4 & 0 \\\\ 0 & 9 \\end{bmatrix}$, a diagonal matrix but not $I$, and it stretches lengths.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'If $U$ is an orthogonal matrix, what values can $\\det U$ take? Enter all possible values.',
      hint: 'Take the determinant of both sides of $U^{T}U = I$, and remember $\\det U^{T} = \\det U$.',
      answer: ['1', '-1'],
      explanation: '$\\det(U^{T}U) = \\det(U^{T})\\det(U) = (\\det U)^2$, and this must equal $\\det I = 1$. So $\\det U = \\pm 1$. Both happen: a rotation has determinant $1$, and a [[reflection-matrix]] such as $\\begin{bmatrix} 1 & 0 \\\\ 0 & -1 \\end{bmatrix}$ has determinant $-1$. Geometrically: an orthogonal map preserves area, but may flip orientation.',
    },
    {
      kind: 'truefalse',
      prompt: 'The matrix $\\begin{bmatrix} 1 & -1 \\\\ 1 & 1 \\end{bmatrix}$ is an orthogonal matrix, because its two columns are orthogonal.',
      answer: false,
      explanation: 'The columns are orthogonal ($1 \\cdot (-1) + 1 \\cdot 1 = 0$) but each has length $\\sqrt{2}$, so $U^{T}U = 2I \\ne I$. This matrix rotates by $45^\\circ$ **and** scales by $\\sqrt{2}$. Dividing by $\\sqrt{2}$ gives a genuine orthogonal matrix, the rotation $R(45^\\circ)$.',
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'concept',
      title: 'The orthogonal complement',
      blocks: [
        {
          type: 'p',
          text: 'A plane through the origin in $\\mathbb{R}^3$ is completely described by its normal vector $\\mathbf{n}$: the plane is every vector perpendicular to $\\mathbf{n}$. Turn that around and you get a general construction that works for any [[subspace]].',
        },
        {
          type: 'definition',
          term: 'Orthogonal complement',
          text: 'If $W$ is a subspace of $\\mathbb{R}^n$, its [[orthogonal-complement]] $W^{\\perp}$ ("W perp") is the set of all vectors orthogonal to **every** vector in $W$:\n\n$$W^{\\perp} = \\{\\mathbf{z} \\in \\mathbb{R}^n : \\mathbf{z} \\cdot \\mathbf{w} = 0 \\text{ for all } \\mathbf{w} \\in W\\}.$$',
        },
        {
          type: 'list',
          items: [
            '$W^{\\perp}$ is itself a subspace (sums and scalar multiples of vectors orthogonal to $\\mathbf{w}$ stay orthogonal to $\\mathbf{w}$).',
            'To test $\\mathbf{z} \\in W^{\\perp}$ you only need $\\mathbf{z}$ orthogonal to a **spanning set** of $W$: if $\\mathbf{z} \\cdot \\mathbf{w}_i = 0$ for each $i$, then $\\mathbf{z} \\cdot (c_1\\mathbf{w}_1 + \\cdots + c_k\\mathbf{w}_k) = 0$.',
            '$\\dim W + \\dim W^{\\perp} = n$, and $(W^{\\perp})^{\\perp} = W$.',
          ],
        },
        {
          type: 'theorem',
          name: 'The four fundamental subspaces, paired up',
          tex: '(\\operatorname{Row} A)^{\\perp} = \\operatorname{Nul} A \\qquad (\\operatorname{Col} A)^{\\perp} = \\operatorname{Nul} A^{T}',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the null space is perpendicular to the rows',
          text: '$A\\mathbf{x} = \\mathbf{0}$ says, entry by entry, that (row $i$ of $A$) $\\cdot\\, \\mathbf{x} = 0$ for every $i$. That is exactly "$\\mathbf{x}$ is orthogonal to every row", hence to the [[row-space]] they span. So solving a homogeneous system **is** computing an orthogonal complement. Applying the same fact to $A^{T}$, whose rows are the columns of $A$, gives the second identity. And [[rank-nullity-theorem|rank–nullity]] ($\\operatorname{rank} A + \\dim \\operatorname{Nul} A = n$) is then the statement $\\dim W + \\dim W^{\\perp} = n$ for $W = \\operatorname{Row} A$.',
        },
        {
          type: 'derivation',
          title: 'Find $W^{\\perp}$ for $W = \\operatorname{Span}\\left\\{\\begin{bmatrix} 1 \\\\ 1 \\\\ 0 \\end{bmatrix}, \\begin{bmatrix} 0 \\\\ 1 \\\\ 1 \\end{bmatrix}\\right\\}$',
          steps: [
            { tex: 'A = \\begin{bmatrix} 1 & 1 & 0 \\\\ 0 & 1 & 1 \\end{bmatrix}, \\qquad W = \\operatorname{Row} A', why: 'Put the spanning vectors in as the **rows** of a matrix.' },
            { tex: 'W^{\\perp} = \\operatorname{Nul} A', why: 'By the theorem, the complement of the row space is the null space.' },
            { tex: '\\begin{bmatrix} 1 & 1 & 0 \\\\ 0 & 1 & 1 \\end{bmatrix} \\xrightarrow{R_1 - R_2} \\begin{bmatrix} 1 & 0 & -1 \\\\ 0 & 1 & 1 \\end{bmatrix}', why: 'Row reduce to reduced echelon form.' },
            { tex: 'x_1 = x_3, \\quad x_2 = -x_3, \\quad x_3 \\text{ free}', why: 'Read off the basic variables in terms of the free variable.' },
            { tex: 'W^{\\perp} = \\operatorname{Span}\\left\\{\\begin{bmatrix} 1 \\\\ -1 \\\\ 1 \\end{bmatrix}\\right\\}', why: 'Parametric vector form with $x_3 = 1$. Check: $(1, -1, 1) \\cdot (1, 1, 0) = 0$ and $(1, -1, 1) \\cdot (0, 1, 1) = 0$.' },
          ],
          result: '$W$ is a plane ($\\dim 2$) and $W^{\\perp}$ is its normal line ($\\dim 1$): $2 + 1 = 3$. (The cross product $(1,1,0) \\times (0,1,1)$ gives the same direction.)',
        },
        {
          type: 'graph',
          x: [-4, 4],
          y: [-3, 3],
          equal: true,
          functions: [
            { expr: '2x', label: '$W = \\operatorname{Span}\\{(1, 2)\\}$', color: 'blue' },
            { expr: '-x/2', label: '$W^{\\perp} = \\operatorname{Span}\\{(-2, 1)\\}$', color: 'red' },
          ],
          segments: [
            { from: [0, 0], to: [1, 2], arrow: true, label: 'w', color: 'blue' },
            { from: [0, 0], to: [-2, 1], arrow: true, label: 'z', color: 'red' },
          ],
          caption: 'In $\\mathbb{R}^2$ the complement of a line through the origin is the perpendicular line: $1 + 1 = 2$ dimensions.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'A matrix $A$ is $4 \\times 6$ with $\\operatorname{rank} A = 3$. What is the dimension of $(\\operatorname{Row} A)^{\\perp}$?',
      hint: '$(\\operatorname{Row} A)^{\\perp}$ is a familiar subspace. Which one, and what does rank–nullity say about it?',
      label: '$\\dim (\\operatorname{Row} A)^{\\perp} =$',
      answer: '3',
      explanation: '$(\\operatorname{Row} A)^{\\perp} = \\operatorname{Nul} A$, a subspace of $\\mathbb{R}^6$ (vectors $\\mathbf{x}$ with $A\\mathbf{x} = \\mathbf{0}$ have $6$ entries). Rank–nullity gives $\\dim \\operatorname{Nul} A = 6 - 3 = 3$. Equivalently $\\dim \\operatorname{Row} A + \\dim (\\operatorname{Row} A)^{\\perp} = 6$ and $\\dim \\operatorname{Row} A = \\operatorname{rank} A = 3$.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Projecting onto a subspace',
      blocks: [
        {
          type: 'p',
          text: 'In the dot product lesson you met the [[vector-projection]] of $\\mathbf{y}$ onto a line spanned by $\\mathbf{u}$: $\\hat{\\mathbf{y}} = \\frac{\\mathbf{y} \\cdot \\mathbf{u}}{\\mathbf{u} \\cdot \\mathbf{u}}\\mathbf{u}$. The leftover piece $\\mathbf{z} = \\mathbf{y} - \\hat{\\mathbf{y}}$ is perpendicular to the line. Drag the slider to swing the line around and watch that right angle survive every position.',
        },
        {
          type: 'graph',
          x: [-4, 4.5],
          y: [-2.5, 4],
          equal: true,
          parametric: [{ x: 't*cos(a*pi/180)', y: 't*sin(a*pi/180)', t: [-7, 7], color: 'gray', label: '$L = \\operatorname{Span}\\{\\mathbf{u}\\}$' }],
          segments: [
            { from: [0, 0], to: [3, 2], arrow: true, label: 'y', color: 'blue' },
            { from: [0, 0], to: ['(3*cos(a*pi/180) + 2*sin(a*pi/180))*cos(a*pi/180)', '(3*cos(a*pi/180) + 2*sin(a*pi/180))*sin(a*pi/180)'], arrow: true, label: 'ŷ', color: 'green' },
            { from: ['(3*cos(a*pi/180) + 2*sin(a*pi/180))*cos(a*pi/180)', '(3*cos(a*pi/180) + 2*sin(a*pi/180))*sin(a*pi/180)'], to: [3, 2], dashed: true, label: 'z', color: 'red' },
          ],
          sliders: [{ name: 'a', min: 0, max: 180, step: 1, value: 15, label: 'line angle (degrees) $a$' }],
          readouts: [
            { label: '$\\hat{\\mathbf{y}} \\cdot \\mathbf{z} =$', expr: '(3*cos(a*pi/180) + 2*sin(a*pi/180))*cos(a*pi/180)*(3 - (3*cos(a*pi/180) + 2*sin(a*pi/180))*cos(a*pi/180)) + (3*cos(a*pi/180) + 2*sin(a*pi/180))*sin(a*pi/180)*(2 - (3*cos(a*pi/180) + 2*sin(a*pi/180))*sin(a*pi/180))', digits: 4 },
            { label: 'distance $\\|\\mathbf{z}\\| =$', expr: 'abs(-3*sin(a*pi/180) + 2*cos(a*pi/180))', digits: 3 },
          ],
          caption: '$\\mathbf{y} = (3, 2)$ splits into $\\hat{\\mathbf{y}}$ (green, on the line) plus $\\mathbf{z}$ (red, perpendicular). At $a \\approx 34^\\circ$ the line passes through $\\mathbf{y}$ and $\\mathbf{z}$ shrinks to $\\mathbf{0}$; at $a \\approx 124^\\circ$ the line is perpendicular to $\\mathbf{y}$ and $\\hat{\\mathbf{y}} = \\mathbf{0}$.',
        },
        {
          type: 'p',
          text: 'The same idea works for any subspace $W$: split $\\mathbf{y}$ into a piece **in** $W$ and a piece **perpendicular to** $W$. With an orthogonal basis, you just add up the projections onto each basis vector.',
        },
        {
          type: 'theorem',
          name: 'Orthogonal Decomposition Theorem',
          text: 'Let $W$ be a subspace of $\\mathbb{R}^n$. Every $\\mathbf{y}$ in $\\mathbb{R}^n$ can be written **uniquely** as $\\mathbf{y} = \\hat{\\mathbf{y}} + \\mathbf{z}$ with $\\hat{\\mathbf{y}}$ in $W$ and $\\mathbf{z}$ in $W^{\\perp}$. If $\\{\\mathbf{u}_1, \\dots, \\mathbf{u}_p\\}$ is any **orthogonal** basis of $W$, then\n\n$$\\hat{\\mathbf{y}} = \\operatorname{proj}_W \\mathbf{y} = \\frac{\\mathbf{y} \\cdot \\mathbf{u}_1}{\\mathbf{u}_1 \\cdot \\mathbf{u}_1}\\mathbf{u}_1 + \\cdots + \\frac{\\mathbf{y} \\cdot \\mathbf{u}_p}{\\mathbf{u}_p \\cdot \\mathbf{u}_p}\\mathbf{u}_p.$$\n\n$\\hat{\\mathbf{y}}$ is the [[orthogonal-projection]] of $\\mathbf{y}$ onto $W$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why $\\mathbf{z}$ really is perpendicular to $W$',
          text: 'Write $c_i = \\frac{\\mathbf{y} \\cdot \\mathbf{u}_i}{\\mathbf{u}_i \\cdot \\mathbf{u}_i}$. Then $\\mathbf{z} \\cdot \\mathbf{u}_j = \\mathbf{y} \\cdot \\mathbf{u}_j - \\sum_i c_i(\\mathbf{u}_i \\cdot \\mathbf{u}_j) = \\mathbf{y} \\cdot \\mathbf{u}_j - c_j(\\mathbf{u}_j \\cdot \\mathbf{u}_j) = 0$, using orthogonality to kill the cross terms. Orthogonal to each basis vector means orthogonal to all of $W$. **Uniqueness:** if $\\hat{\\mathbf{y}} + \\mathbf{z} = \\hat{\\mathbf{y}}_1 + \\mathbf{z}_1$, then $\\hat{\\mathbf{y}} - \\hat{\\mathbf{y}}_1 = \\mathbf{z}_1 - \\mathbf{z}$ lies in both $W$ and $W^{\\perp}$, so it is orthogonal to itself, and only $\\mathbf{0}$ is. So $\\hat{\\mathbf{y}}$ does not depend on which orthogonal basis you used.',
        },
        {
          type: 'derivation',
          title: 'Project $\\mathbf{y} = \\begin{bmatrix} 1 \\\\ 2 \\\\ 3 \\end{bmatrix}$ onto $W = \\operatorname{Span}\\{\\mathbf{u}_1, \\mathbf{u}_2\\}$, $\\mathbf{u}_1 = \\begin{bmatrix} 2 \\\\ 5 \\\\ -1 \\end{bmatrix}$, $\\mathbf{u}_2 = \\begin{bmatrix} -2 \\\\ 1 \\\\ 1 \\end{bmatrix}$',
          steps: [
            { tex: '\\mathbf{u}_1 \\cdot \\mathbf{u}_2 = -4 + 5 - 1 = 0', why: 'First confirm the basis is orthogonal; the formula is only valid if it is.' },
            { tex: '\\frac{\\mathbf{y} \\cdot \\mathbf{u}_1}{\\mathbf{u}_1 \\cdot \\mathbf{u}_1} = \\frac{2 + 10 - 3}{4 + 25 + 1} = \\frac{9}{30} = \\frac{3}{10}', why: 'Weight on $\\mathbf{u}_1$.' },
            { tex: '\\frac{\\mathbf{y} \\cdot \\mathbf{u}_2}{\\mathbf{u}_2 \\cdot \\mathbf{u}_2} = \\frac{-2 + 2 + 3}{4 + 1 + 1} = \\frac{3}{6} = \\frac{1}{2}', why: 'Weight on $\\mathbf{u}_2$.' },
            { tex: '\\hat{\\mathbf{y}} = \\tfrac{3}{10}\\begin{bmatrix} 2 \\\\ 5 \\\\ -1 \\end{bmatrix} + \\tfrac{1}{2}\\begin{bmatrix} -2 \\\\ 1 \\\\ 1 \\end{bmatrix} = \\begin{bmatrix} -2/5 \\\\ 2 \\\\ 1/5 \\end{bmatrix}', why: 'Add the two projections: $\\frac{6}{10} - 1 = -\\frac{2}{5}$, $\\frac{15}{10} + \\frac{1}{2} = 2$, $-\\frac{3}{10} + \\frac{1}{2} = \\frac{1}{5}$.' },
            { tex: '\\mathbf{z} = \\mathbf{y} - \\hat{\\mathbf{y}} = \\begin{bmatrix} 7/5 \\\\ 0 \\\\ 14/5 \\end{bmatrix}', why: 'The component perpendicular to $W$.' },
            { tex: '\\mathbf{z} \\cdot \\mathbf{u}_1 = \\tfrac{14}{5} - \\tfrac{14}{5} = 0, \\quad \\mathbf{z} \\cdot \\mathbf{u}_2 = -\\tfrac{14}{5} + \\tfrac{14}{5} = 0', why: 'Check: $\\mathbf{z}$ is orthogonal to both basis vectors, so it lies in $W^{\\perp}$.' },
          ],
          result: '$\\mathbf{y} = \\begin{bmatrix} -2/5 \\\\ 2 \\\\ 1/5 \\end{bmatrix} + \\begin{bmatrix} 7/5 \\\\ 0 \\\\ 14/5 \\end{bmatrix}$, a vector in $W$ plus a vector in $W^{\\perp}$.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'With an orthonormal basis it is one matrix',
          text: 'If $U = [\\,\\mathbf{u}_1 \\; \\cdots \\; \\mathbf{u}_p\\,]$ has orthonormal columns spanning $W$, then $\\operatorname{proj}_W \\mathbf{y} = UU^{T}\\mathbf{y}$. ($U^{T}\\mathbf{y}$ lists the weights $\\mathbf{y} \\cdot \\mathbf{u}_j$; multiplying by $U$ recombines them.) Note $U^{T}U = I_p$ but $UU^{T}$ is the $n \\times n$ projection matrix, which is not $I_n$ unless $W = \\mathbb{R}^n$.',
        },
      ],
    },
    {
      kind: 'error',
      prompt: 'A student projects $\\mathbf{y} = \\begin{bmatrix} 3 \\\\ 1 \\\\ 2 \\end{bmatrix}$ onto $W = \\operatorname{Span}\\{\\mathbf{u}_1, \\mathbf{u}_2\\}$ with $\\mathbf{u}_1 = \\begin{bmatrix} 1 \\\\ 1 \\\\ 0 \\end{bmatrix}$, $\\mathbf{u}_2 = \\begin{bmatrix} 1 \\\\ -1 \\\\ 1 \\end{bmatrix}$. Tap the first line that is wrong.',
      lines: [
        '$\\mathbf{u}_1 \\cdot \\mathbf{u}_2 = 1 - 1 + 0 = 0$, so the basis is orthogonal',
        '$\\mathbf{y} \\cdot \\mathbf{u}_1 = 4$ and $\\mathbf{u}_1 \\cdot \\mathbf{u}_1 = 2$, so $c_1 = 2$',
        '$\\mathbf{y} \\cdot \\mathbf{u}_2 = 4$ and $\\|\\mathbf{u}_2\\| = \\sqrt{3}$, so $c_2 = \\frac{4}{\\sqrt{3}}$',
        '$\\hat{\\mathbf{y}} = 2\\mathbf{u}_1 + \\frac{4}{\\sqrt{3}}\\mathbf{u}_2$',
      ],
      errorLines: [3],
      explanation: 'Line 3 divides by the length $\\|\\mathbf{u}_2\\| = \\sqrt{3}$ instead of $\\mathbf{u}_2 \\cdot \\mathbf{u}_2 = \\|\\mathbf{u}_2\\|^2 = 3$. The weight is $c_2 = \\frac{4}{3}$, so $\\hat{\\mathbf{y}} = 2\\begin{bmatrix} 1 \\\\ 1 \\\\ 0 \\end{bmatrix} + \\frac{4}{3}\\begin{bmatrix} 1 \\\\ -1 \\\\ 1 \\end{bmatrix} = \\begin{bmatrix} 10/3 \\\\ 2/3 \\\\ 4/3 \\end{bmatrix}$. (Dividing by $\\|\\mathbf{u}\\|$ once is right only if you also use the unit vector $\\mathbf{u}/\\|\\mathbf{u}\\|$ in the sum: two factors of $\\|\\mathbf{u}\\|$ in total.)',
    },
    {
      kind: 'order',
      prompt: 'Put the steps for computing $\\operatorname{proj}_W \\mathbf{y}$ in order, given a spanning set of $W$ that is supposed to be orthogonal.',
      lines: [
        'Check $\\mathbf{u}_i \\cdot \\mathbf{u}_j = 0$ for every pair $i \\ne j$',
        'For each $j$, compute the weight $\\frac{\\mathbf{y} \\cdot \\mathbf{u}_j}{\\mathbf{u}_j \\cdot \\mathbf{u}_j}$',
        'Form $\\hat{\\mathbf{y}} = \\sum_j \\frac{\\mathbf{y} \\cdot \\mathbf{u}_j}{\\mathbf{u}_j \\cdot \\mathbf{u}_j}\\mathbf{u}_j$',
        'Compute $\\mathbf{z} = \\mathbf{y} - \\hat{\\mathbf{y}}$ and check $\\mathbf{z} \\cdot \\mathbf{u}_j = 0$ for each $j$',
      ],
      distractors: ['Row reduce $[\\,\\mathbf{u}_1 \\; \\mathbf{u}_2 \\mid \\mathbf{y}\\,]$ to find the weights'],
      explanation: 'Orthogonality comes first because the formula is only valid for an orthogonal basis. Then compute each weight independently, add up the projections, and finish with the self-check that the remainder is perpendicular to $W$. Row reduction is not needed (and $[\\,\\mathbf{u}_1 \\; \\mathbf{u}_2 \\mid \\mathbf{y}\\,]$ is usually inconsistent anyway, since $\\mathbf{y}$ need not lie in $W$).',
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'concept',
      title: 'The Best Approximation Theorem',
      blocks: [
        {
          type: 'p',
          text: 'Why care about $\\hat{\\mathbf{y}}$? Because it is the point of $W$ **closest** to $\\mathbf{y}$. That turns countless "find the nearest…" problems into a projection: the nearest point on a plane, the best fit of a model to data (next lessons), the best low-rank picture of an image (last lesson).',
        },
        {
          type: 'theorem',
          name: 'Best Approximation Theorem',
          tex: '\\|\\mathbf{y} - \\hat{\\mathbf{y}}\\| < \\|\\mathbf{y} - \\mathbf{v}\\| \\quad \\text{for every } \\mathbf{v} \\in W,\\ \\mathbf{v} \\ne \\hat{\\mathbf{y}}',
          text: 'Here $W$ is a subspace of $\\mathbb{R}^n$, $\\mathbf{y}$ is any vector and $\\hat{\\mathbf{y}} = \\operatorname{proj}_W \\mathbf{y}$. The **distance from $\\mathbf{y}$ to $W$** is $\\|\\mathbf{y} - \\hat{\\mathbf{y}}\\|$.',
        },
        {
          type: 'derivation',
          title: 'Proof: Pythagoras in $n$ dimensions',
          steps: [
            { tex: '\\mathbf{y} - \\mathbf{v} = (\\mathbf{y} - \\hat{\\mathbf{y}}) + (\\hat{\\mathbf{y}} - \\mathbf{v})', why: 'Add and subtract $\\hat{\\mathbf{y}}$. Take any other $\\mathbf{v}$ in $W$.' },
            { tex: '\\mathbf{y} - \\hat{\\mathbf{y}} \\in W^{\\perp}, \\qquad \\hat{\\mathbf{y}} - \\mathbf{v} \\in W', why: 'The first piece is $\\mathbf{z}$. The second is a difference of two vectors in the subspace $W$, so it is in $W$. Hence the two pieces are orthogonal.' },
            { tex: '\\|\\mathbf{y} - \\mathbf{v}\\|^2 = \\|\\mathbf{y} - \\hat{\\mathbf{y}}\\|^2 + \\|\\hat{\\mathbf{y}} - \\mathbf{v}\\|^2', why: 'Pythagorean theorem: for orthogonal $\\mathbf{a}, \\mathbf{b}$, $\\|\\mathbf{a} + \\mathbf{b}\\|^2 = \\mathbf{a}\\cdot\\mathbf{a} + 2\\,\\mathbf{a}\\cdot\\mathbf{b} + \\mathbf{b}\\cdot\\mathbf{b}$ and the middle term is $0$.' },
            { tex: '\\|\\mathbf{y} - \\mathbf{v}\\|^2 > \\|\\mathbf{y} - \\hat{\\mathbf{y}}\\|^2', why: 'If $\\mathbf{v} \\ne \\hat{\\mathbf{y}}$ the second term is strictly positive. Take square roots (both sides are nonnegative).' },
          ],
          result: 'Any other point of $W$ is farther from $\\mathbf{y}$, so $\\hat{\\mathbf{y}}$ is the unique closest point.',
        },
        {
          type: 'p',
          text: 'In the worked example on the previous card, the distance from $\\mathbf{y} = (1, 2, 3)$ to the plane $W$ is $\\|\\mathbf{z}\\| = \\left\\|\\left(\\tfrac{7}{5}, 0, \\tfrac{14}{5}\\right)\\right\\| = \\tfrac{7}{5}\\sqrt{1 + 4} = \\tfrac{7\\sqrt{5}}{5} \\approx 3.13$.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Closest point on a plane',
          text: 'Collision code constantly asks for the closest point on a plane (or on a triangle\'s supporting plane) to a sphere\'s centre $\\mathbf{p}$. With a unit normal $\\mathbf{n}$ and the plane through the origin, the answer is $\\mathbf{p} - (\\mathbf{p} \\cdot \\mathbf{n})\\mathbf{n}$: subtract the $W^{\\perp}$ component, keep the $W$ component. The sphere hits the plane when the distance $|\\mathbf{p} \\cdot \\mathbf{n}|$ is less than its radius. For a plane not through the origin, shift by a point on it first.',
        },
        {
          type: 'callout',
          variant: 'note',
          text: 'Two equivalent ways to project onto a plane in $\\mathbb{R}^3$: add the projections onto an orthogonal basis of the plane, or subtract the projection onto its normal ($\\operatorname{proj}_W \\mathbf{y} = \\mathbf{y} - \\operatorname{proj}_{W^{\\perp}} \\mathbf{y}$). The second is one dot product when the normal is known.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'Find the distance from $\\mathbf{y} = \\begin{bmatrix} 3 \\\\ 1 \\\\ 2 \\end{bmatrix}$ to $W = \\operatorname{Span}\\left\\{\\begin{bmatrix} 1 \\\\ 1 \\\\ 0 \\end{bmatrix}, \\begin{bmatrix} 1 \\\\ -1 \\\\ 1 \\end{bmatrix}\\right\\}$. (From the find-the-mistake question: $\\hat{\\mathbf{y}} = \\left(\\tfrac{10}{3}, \\tfrac{2}{3}, \\tfrac{4}{3}\\right)$.)',
      hint: 'Distance is $\\|\\mathbf{y} - \\hat{\\mathbf{y}}\\|$.',
      label: 'distance $=$',
      answer: 'sqrt(6)/3',
      answerTex: '\\frac{\\sqrt{6}}{3}',
      explanation: '$\\mathbf{z} = \\mathbf{y} - \\hat{\\mathbf{y}} = \\left(3 - \\tfrac{10}{3}, 1 - \\tfrac{2}{3}, 2 - \\tfrac{4}{3}\\right) = \\left(-\\tfrac{1}{3}, \\tfrac{1}{3}, \\tfrac{2}{3}\\right)$. Its length is $\\tfrac{1}{3}\\sqrt{1 + 1 + 4} = \\tfrac{\\sqrt{6}}{3} \\approx 0.816$. Check it is perpendicular: $\\mathbf{z} \\cdot (1, 1, 0) = 0$ and $\\mathbf{z} \\cdot (1, -1, 1) = -\\tfrac13 - \\tfrac13 + \\tfrac23 = 0$. In fact $\\mathbf{z}$ is a multiple of $(-1, 1, 2) = (1,-1,1) \\times (1,1,0)$, the plane\'s normal.',
    },
    {
      kind: 'mcq',
      prompt: '$\\mathbf{y} = \\begin{bmatrix} 4 \\\\ 2 \\end{bmatrix}$ and $L = \\operatorname{Span}\\left\\{\\begin{bmatrix} 1 \\\\ 1 \\end{bmatrix}\\right\\}$. Which point of $L$ is closest to $\\mathbf{y}$?',
      options: [
        { text: '$(3, 3)$', correct: true, why: '$\\frac{\\mathbf{y} \\cdot \\mathbf{u}}{\\mathbf{u} \\cdot \\mathbf{u}} = \\frac{6}{2} = 3$, so $\\hat{\\mathbf{y}} = 3(1, 1)$. The residual $(1, -1)$ is perpendicular to $(1, 1)$.' },
        { text: '$(6, 6)$', why: 'This uses the weight $\\mathbf{y} \\cdot \\mathbf{u} = 6$ without dividing by $\\mathbf{u} \\cdot \\mathbf{u} = 2$; that is only right for a unit vector $\\mathbf{u}$.' },
        { text: '$(2, 2)$', why: 'This is just the smaller coordinate repeated. The residual $(2, 0)$ is not perpendicular to $(1, 1)$, so this is not the closest point.' },
        { text: '$(3\\sqrt{2}, 3\\sqrt{2})$', why: 'This divides by $\\|\\mathbf{u}\\| = \\sqrt{2}$ instead of $\\|\\mathbf{u}\\|^2 = 2$.' },
      ],
      explanation: 'The closest point is the orthogonal projection $\\hat{\\mathbf{y}} = \\frac{\\mathbf{y} \\cdot \\mathbf{u}}{\\mathbf{u} \\cdot \\mathbf{u}}\\mathbf{u} = \\frac{4 + 2}{2}(1, 1) = (3, 3)$. The distance from $\\mathbf{y}$ to $L$ is $\\|(1, -1)\\| = \\sqrt{2}$; by the Best Approximation Theorem every other point of $L$ is farther away.',
    },
  ],
  takeaways: [
    'An orthogonal set of nonzero vectors is automatically linearly independent: dot the dependence equation with $\\mathbf{u}_j$ to isolate $c_j$.',
    'Relative to an orthogonal basis, $c_j = \\dfrac{\\mathbf{y} \\cdot \\mathbf{u}_j}{\\mathbf{u}_j \\cdot \\mathbf{u}_j}$; with an orthonormal basis, simply $c_j = \\mathbf{y} \\cdot \\mathbf{u}_j$.',
    '$U$ has orthonormal columns iff $U^{T}U = I$; such maps preserve lengths, dot products and angles. A square one is an orthogonal matrix with $U^{-1} = U^{T}$, so a rotation is undone by its transpose.',
    '$W^{\\perp}$ is everything perpendicular to $W$; $(\\operatorname{Row} A)^{\\perp} = \\operatorname{Nul} A$, $(\\operatorname{Col} A)^{\\perp} = \\operatorname{Nul} A^{T}$ and $\\dim W + \\dim W^{\\perp} = n$.',
    'Every $\\mathbf{y}$ splits uniquely as $\\hat{\\mathbf{y}} + \\mathbf{z}$ with $\\hat{\\mathbf{y}} = \\operatorname{proj}_W \\mathbf{y} \\in W$ and $\\mathbf{z} \\in W^{\\perp}$; the projection formula needs an orthogonal basis.',
    '$\\hat{\\mathbf{y}}$ is the closest point of $W$ to $\\mathbf{y}$, and $\\|\\mathbf{y} - \\hat{\\mathbf{y}}\\|$ is the distance from $\\mathbf{y}$ to $W$.',
  ],
  reading: [
    {
      title: 'Interactive Linear Algebra (Margalit & Rabinoff) — Chapter 6: Orthogonality',
      url: 'https://textbooks.math.gatech.edu/ila/',
      source: 'book',
      note: 'Sections on orthogonal complements and orthogonal projection, with interactive 3D demos of projecting onto planes.',
    },
    {
      title: 'Wikipedia — Orthogonal matrix',
      url: 'https://en.wikipedia.org/wiki/Orthogonal_matrix',
      source: 'wikipedia',
      note: 'Rotations, reflections, the determinant $\\pm 1$ and why orthogonal matrices are numerically well-behaved.',
    },
    {
      title: 'MIT OCW 18.06 (Strang) — Orthogonal vectors and subspaces; Projections onto subspaces',
      url: 'https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/',
      source: 'other',
      note: 'Lectures 14 and 15 develop the four fundamental subspaces and projection matrices from exactly this point of view.',
    },
  ],
};
