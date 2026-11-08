import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'la-vectors-rn',
  title: 'Vectors in Rⁿ',
  summary: 'Why linear algebra runs every game engine, and its first object: the vector as a column of numbers you can add, scale and move things with.',
  minutes: 18,
  objectives: [
    'Explain where linear algebra shows up in graphics, game engines, physics and machine learning',
    'Write vectors in $\\mathbb{R}^n$ as column vectors and decide when two vectors are equal',
    'Add vectors and multiply them by scalars, algebraically and geometrically (tip-to-tail, parallelogram)',
    'Use the algebraic properties of $\\mathbb{R}^n$ to solve a vector equation, justifying each step',
    'Tell points from direction vectors in game code: displacement $=$ target $-$ position, new position $=$ point $+$ vector',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Why linear algebra runs every game engine',
      blocks: [
        {
          type: 'p',
          text: 'Every frame of a modern game, the engine takes each vertex of each mesh — often millions of them — and moves it from the model\'s own coordinates into the world, then into the camera\'s point of view, then onto the screen. Every one of those moves is a **matrix times a vector**. Then, for each pixel, a shader decides how bright the surface is by comparing its normal with the direction to the light: a **dot product**. The normal itself came from a **cross product**.',
        },
        {
          type: 'p',
          text: 'It does not stop at graphics. Physics engines integrate velocities and resolve collisions with vector projections. Skeletal animation blends poses with weighted sums of vectors. A neural network layer is a matrix–vector product followed by a simple nonlinearity; Google\'s PageRank is an eigenvector; image compression and recommendation systems run on the singular value decomposition. Linear algebra is the shared language of all of them.',
        },
        {
          type: 'graph',
          x: [-4, 4],
          y: [-3, 3],
          equal: true,
          segments: [
            { from: ['2cos(a)', '2sin(a)'], to: ['-cos(a) - sin(a)', '-sin(a) + cos(a)'], color: 'blue' },
            { from: ['-cos(a) - sin(a)', '-sin(a) + cos(a)'], to: ['-0.5cos(a)', '-0.5sin(a)'], color: 'blue' },
            { from: ['-0.5cos(a)', '-0.5sin(a)'], to: ['-cos(a) + sin(a)', '-sin(a) - cos(a)'], color: 'blue' },
            { from: ['-cos(a) + sin(a)', '-sin(a) - cos(a)'], to: ['2cos(a)', '2sin(a)'], color: 'blue' },
            { from: [0, 0], to: ['3cos(a)', '3sin(a)'], color: 'orange', dashed: true, arrow: true, label: 'forward' },
          ],
          sliders: [{ name: 'a', min: 0, max: 6.28, step: 0.02, value: 0.5, label: 'rotation angle $\\theta$ (radians)' }],
          readouts: [
            { label: 'nose vertex $(2, 0)$ is now at $x =$', expr: '2cos(a)', digits: 3 },
            { label: '$y =$', expr: '2sin(a)', digits: 3 },
          ],
          caption: 'A ship made of four vertices. Rotating it applies one rule to every vertex: $(x, y) \\mapsto (x\\cos\\theta - y\\sin\\theta,\\; x\\sin\\theta + y\\cos\\theta)$. In unit 3 you will package that rule as a single $2 \\times 2$ matrix; in unit 4, as the $4 \\times 4$ matrices real engines use.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why "linear" is the magic word',
          text: 'Linear operations — adding vectors and multiplying them by numbers — are the ones computers do best. They can be run in parallel on thousands of GPU cores, a whole chain of them collapses into one matrix, and undoing them is predictable. And even nonlinear problems are usually attacked by linear approximation: you met that idea in Calculus I, where the derivative gave the best *linear* approximation to a curve.',
        },
        {
          type: 'list',
          items: [
            '**Units 1–2:** vectors, linear combinations, dot and cross products; solving linear systems by row reduction.',
            '**Units 3–4:** linear transformations and matrices — rotations, scales, shears, projections — and the homogeneous $4 \\times 4$ matrices of every engine.',
            '**Unit 5:** determinants as signed area, volume and orientation.',
            '**Units 6–8:** vector spaces, bases and change of coordinates; eigenvalues; orthogonality, least squares and the SVD.',
          ],
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'One line you will fully understand by unit 4',
          text: 'The heart of almost every vertex shader is `gl_Position = projection * view * model * vec4(position, 1.0);` — three matrices applied to one vector. By the end of unit 4 you will know what each matrix does, why they multiply right to left, and why the position gets a fourth entry equal to $1$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'concept',
      title: 'Vectors in Rⁿ: ordered lists of numbers',
      blocks: [
        {
          type: 'p',
          text: 'In trigonometry you met [[vector|vectors]] as arrows in the plane, written $\\langle 3, 2 \\rangle$. Linear algebra keeps the arrow picture but leads with the algebra: a vector is an **ordered list of real numbers**, and we write the list vertically.',
        },
        {
          type: 'definition',
          term: 'Vectors in $\\mathbb{R}^n$',
          text: 'A vector in $\\mathbb{R}^n$ is an ordered list of $n$ real numbers, its **entries** (or components), written as a column:\n\n$$\\mathbf{v} = \\begin{bmatrix} v_1 \\\\ v_2 \\\\ \\vdots \\\\ v_n \\end{bmatrix}.$$\n\nThe set of all such vectors is [[euclidean-space|$n$-dimensional Euclidean space]] $\\mathbb{R}^n$. The [[zero-vector]] $\\mathbf{0}$ has every entry equal to $0$.',
        },
        {
          type: 'math',
          tex: '\\begin{bmatrix} 3 \\\\ 2 \\end{bmatrix} \\in \\mathbb{R}^2, \\qquad \\begin{bmatrix} 1 \\\\ -4 \\\\ 0.5 \\end{bmatrix} \\in \\mathbb{R}^3, \\qquad \\begin{bmatrix} 2 \\\\ 0 \\\\ -1 \\\\ 7 \\\\ 3 \\end{bmatrix} \\in \\mathbb{R}^5',
          caption: 'Read $\\in$ as "is an element of". The $\\mathbb{R}^5$ vector cannot be drawn, but you can still add, scale and compare it.',
        },
        {
          type: 'p',
          text: 'Notation for the whole course: vectors are bold lowercase letters ($\\mathbf{u}$, $\\mathbf{v}$, $\\mathbf{x}$, $\\mathbf{b}$) and numbers — called [[scalar|scalars]] — are plain italic ($c$, $x_1$). Columns take a lot of vertical space, so in running text we sometimes write $(1, -4, 0.5)$ **to mean the column vector** above. The trig notation $\\langle \\,\\cdot\\, \\rangle$ retires here.',
        },
        {
          type: 'definition',
          term: 'Equality of vectors',
          text: 'Two vectors $\\mathbf{u}$ and $\\mathbf{v}$ are **equal** when they lie in the same $\\mathbb{R}^n$ and $u_i = v_i$ for every $i = 1, \\dots, n$. So one vector equation in $\\mathbb{R}^n$ is really $n$ ordinary equations, one per entry.',
        },
        {
          type: 'derivation',
          title: 'Find $x$ and $y$ with $\\begin{bmatrix} x + 2y \\\\ 3x - y \\end{bmatrix} = \\begin{bmatrix} 4 \\\\ 5 \\end{bmatrix}$',
          steps: [
            { tex: 'x + 2y = 4, \\qquad 3x - y = 5', why: 'Two vectors in $\\mathbb{R}^2$ are equal exactly when their first entries match and their second entries match.' },
            { tex: 'y = 3x - 5', why: 'Solve the second equation for $y$ so we can substitute.' },
            { tex: 'x + 2(3x - 5) = 4 \\implies 7x = 14 \\implies x = 2', why: 'Substitute into the first equation, distribute, and collect $x$ terms: $x + 6x - 10 = 4$.' },
            { tex: 'y = 3(2) - 5 = 1', why: 'Back-substitute $x = 2$.' },
          ],
          result: '$x = 2$, $y = 1$. Check: $(2 + 2,\\; 6 - 1) = (4, 5)$.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Order and size both matter',
          text: '$(1, 2) \\ne (2, 1)$: the entries are an *ordered* list. And $\\begin{bmatrix} 1 \\\\ 2 \\end{bmatrix} \\in \\mathbb{R}^2$ is **not** equal to $\\begin{bmatrix} 1 \\\\ 2 \\\\ 0 \\end{bmatrix} \\in \\mathbb{R}^3$ — they live in different spaces, so the question does not even typecheck. In code, turning a `Vec2` into a `Vec3` is a *choice* you make (append $z = 0$? $z = 1$?), never automatic.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why columns, and why lists instead of arrows?',
          text: 'Arrows stop being drawable after $\\mathbb{R}^3$, but the algebra of lists works identically for every $n$ — so we define everything with lists and keep the pictures in $\\mathbb{R}^2$ and $\\mathbb{R}^3$ as intuition. We write the lists as columns because, from unit 2 on, a matrix $A$ acts on a vector by multiplying it from the left, $A\\mathbf{x}$, and the shapes only line up when $\\mathbf{x}$ stands as a column.',
        },
      ],
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'fill',
      prompt: 'Find $x$ and $y$ so that $\\begin{bmatrix} x + y \\\\ x - y \\\\ 2x \\end{bmatrix} = \\begin{bmatrix} 5 \\\\ 1 \\\\ 6 \\end{bmatrix}$. Type each number.',
      template: '$x =$ ___ $,\\quad y =$ ___',
      blanks: [{ answers: ['3'] }, { answers: ['2'] }],
      hint: 'Equal vectors means equal entries: three equations. The third one alone gives $x$.',
      explanation: 'Entry by entry: $x + y = 5$, $x - y = 1$ and $2x = 6$. The third equation gives $x = 3$, and then $y = 5 - 3 = 2$. The second equation is a free check: $3 - 2 = 1$ ✓. If the check had failed, there would be **no** solution — three equations in two unknowns can be contradictory.',
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'concept',
      title: 'Adding and scaling vectors',
      blocks: [
        {
          type: 'p',
          text: 'The two basic operations work entry by entry, exactly as in 2D — but now in any dimension. You can only add vectors from the **same** $\\mathbb{R}^n$.',
        },
        {
          type: 'math',
          tex: '\\mathbf{u} + \\mathbf{v} = \\begin{bmatrix} u_1 + v_1 \\\\ \\vdots \\\\ u_n + v_n \\end{bmatrix}, \\qquad c\\,\\mathbf{v} = \\begin{bmatrix} c\\,v_1 \\\\ \\vdots \\\\ c\\,v_n \\end{bmatrix}, \\qquad \\mathbf{u} - \\mathbf{v} = \\mathbf{u} + (-1)\\mathbf{v}',
          caption: 'Sum, scalar multiple and difference in $\\mathbb{R}^n$.',
        },
        {
          type: 'derivation',
          title: 'Compute $2\\mathbf{u} - 3\\mathbf{v}$ for $\\mathbf{u} = (1, -2, 4)$ and $\\mathbf{v} = (3, 0, -1)$',
          steps: [
            { tex: '2\\mathbf{u} = \\begin{bmatrix} 2 \\\\ -4 \\\\ 8 \\end{bmatrix}, \\qquad 3\\mathbf{v} = \\begin{bmatrix} 9 \\\\ 0 \\\\ -3 \\end{bmatrix}', why: 'Scalar multiplication: multiply every entry by the scalar.' },
            { tex: '2\\mathbf{u} - 3\\mathbf{v} = \\begin{bmatrix} 2 - 9 \\\\ -4 - 0 \\\\ 8 - (-3) \\end{bmatrix}', why: 'Subtract matching entries.' },
            { tex: '= \\begin{bmatrix} -7 \\\\ -4 \\\\ 11 \\end{bmatrix}', why: 'Careful with the last entry: subtracting $-3$ means adding $3$.' },
          ],
          result: '$2\\mathbf{u} - 3\\mathbf{v} = (-7, -4, 11)$.',
        },
        {
          type: 'p',
          text: 'Geometrically nothing changes from trig. **Tip-to-tail:** to draw $\\mathbf{u} + \\mathbf{v}$, place the tail of $\\mathbf{v}$ at the tip of $\\mathbf{u}$; the sum runs from the start to the finish. Doing $\\mathbf{v}$ first gives the same point, so the two routes form a **parallelogram** whose diagonal is the sum. Multiplying by $c$ stretches the arrow by $|c|$ and flips it when $c < 0$. With both arrows drawn from the origin, $\\mathbf{u} - \\mathbf{v}$ is the arrow **from the tip of $\\mathbf{v}$ to the tip of $\\mathbf{u}$** — because $\\mathbf{v} + (\\mathbf{u} - \\mathbf{v}) = \\mathbf{u}$.',
        },
        {
          type: 'graph',
          x: [-6, 8],
          y: [-5, 6],
          equal: true,
          segments: [
            { from: [0, 0], to: [3, 1], color: 'blue', arrow: true, label: 'u' },
            { from: [0, 0], to: ['c*a', 'c*b'], color: 'red', arrow: true, label: 'cv' },
            { from: [3, 1], to: ['3 + c*a', '1 + c*b'], color: 'red', dashed: true },
            { from: ['c*a', 'c*b'], to: ['3 + c*a', '1 + c*b'], color: 'blue', dashed: true },
            { from: [0, 0], to: ['3 + c*a', '1 + c*b'], color: 'purple', arrow: true, label: 'u + cv' },
          ],
          sliders: [
            { name: 'a', min: -4, max: 4, step: 0.5, value: 1, label: '$v_1$' },
            { name: 'b', min: -4, max: 4, step: 0.5, value: 3, label: '$v_2$' },
            { name: 'c', min: -2, max: 2, step: 0.25, value: 1, label: 'scalar $c$' },
          ],
          readouts: [
            { label: '$\\mathbf{u} + c\\mathbf{v}$: first entry', expr: '3 + c*a', digits: 2 },
            { label: 'second entry', expr: '1 + c*b', digits: 2 },
          ],
          caption: 'Here $\\mathbf{u} = (3, 1)$. The dashed sides close the parallelogram: $\\mathbf{u}$-then-$c\\mathbf{v}$ and $c\\mathbf{v}$-then-$\\mathbf{u}$ end at the same point. Set $c = -1$ to see $\\mathbf{u} - \\mathbf{v}$, and $c = 0$ to see that $\\mathbf{u} + 0\\mathbf{v} = \\mathbf{u}$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why 2D pictures stay honest in any dimension',
          text: 'Any two vectors in $\\mathbb{R}^n$ — even in $\\mathbb{R}^{100}$ — lie together in some flat plane through the origin. The parallelogram for $\\mathbf{u} + \\mathbf{v}$ sits inside that plane, so the 2D sketch is not an analogy: it is an exact picture of what happens. That is why linear algebraists happily draw two arrows on paper while thinking about a thousand dimensions.',
        },
      ],
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'mcq',
      prompt: 'Vectors $\\mathbf{u}$ and $\\mathbf{v}$ are both drawn starting at the origin. Which arrow represents $\\mathbf{u} - \\mathbf{v}$?',
      graph: {
        type: 'graph',
        x: [-1, 5],
        y: [-1, 4],
        equal: true,
        segments: [
          { from: [0, 0], to: [4, 1], color: 'blue', arrow: true, label: 'u' },
          { from: [0, 0], to: [1, 3], color: 'red', arrow: true, label: 'v' },
          { from: [1, 3], to: [4, 1], color: 'gray', dashed: true },
        ],
      },
      options: [
        { text: 'The arrow from the tip of $\\mathbf{u}$ to the tip of $\\mathbf{v}$', why: 'That arrow is $\\mathbf{v} - \\mathbf{u}$: starting from $\\mathbf{u}$ you add it to land on $\\mathbf{v}$. It has the right length but the opposite direction.' },
        { text: 'The arrow from the tip of $\\mathbf{v}$ to the tip of $\\mathbf{u}$', correct: true, why: 'Right: $\\mathbf{v} + (\\mathbf{u} - \\mathbf{v}) = \\mathbf{u}$, so $\\mathbf{u} - \\mathbf{v}$ is what takes you from $\\mathbf{v}$\'s tip to $\\mathbf{u}$\'s tip. "End minus start" — $\\mathbf{u}$ is the end.' },
        { text: 'The diagonal of the parallelogram starting at the origin', why: 'That diagonal is $\\mathbf{u} + \\mathbf{v}$, here $(5, 4)$. The *other* diagonal of the parallelogram is the difference.' },
        { text: 'The arrow from the origin to $(3, 2)$', why: 'Check the arithmetic: $\\mathbf{u} - \\mathbf{v} = (4 - 1,\\; 1 - 3) = (3, -2)$, not $(3, 2)$. A sign slip in the second entry.' },
      ],
      explanation: 'Here $\\mathbf{u} = (4, 1)$, $\\mathbf{v} = (1, 3)$ and $\\mathbf{u} - \\mathbf{v} = (3, -2)$. The dashed segment from $(1, 3)$ to $(4, 1)$ moves $3$ right and $2$ down — exactly $(3, -2)$. Drawn from the origin, the same vector would end at $(3, -2)$; a vector does not care where it starts.',
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'numeric',
      prompt: 'Find the scalar $c$ such that $c\\begin{bmatrix} 2 \\\\ -6 \\\\ 4 \\end{bmatrix} = \\begin{bmatrix} -3 \\\\ 9 \\\\ -6 \\end{bmatrix}$.',
      hint: 'Equality must hold in every entry. Use the first entry to find $c$, then check the others.',
      label: '$c =$',
      answer: '-3/2',
      answerTex: '-\\tfrac{3}{2}',
      explanation: 'The first entry needs $2c = -3$, so $c = -\\frac32$. Check the rest: $-\\frac32 \\cdot (-6) = 9$ ✓ and $-\\frac32 \\cdot 4 = -6$ ✓. One $c$ works for all three entries, so the vectors are scalar multiples: they lie on the same line through the origin, pointing in opposite directions (because $c < 0$). If different entries had demanded different values of $c$, no scalar would work.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'The rules of vector algebra',
      blocks: [
        {
          type: 'p',
          text: 'Vector arithmetic obeys the same rules you have used for numbers since algebra — as long as you only add vectors and multiply them by scalars. These eight properties are worth knowing by name, because every manipulation of a vector equation is justified by one of them.',
        },
        {
          type: 'theorem',
          name: 'Algebraic properties of $\\mathbb{R}^n$',
          tex: '\\begin{aligned} &\\text{(1) } \\mathbf{u} + \\mathbf{v} = \\mathbf{v} + \\mathbf{u} && \\text{(5) } c(\\mathbf{u} + \\mathbf{v}) = c\\mathbf{u} + c\\mathbf{v} \\\\ &\\text{(2) } (\\mathbf{u} + \\mathbf{v}) + \\mathbf{w} = \\mathbf{u} + (\\mathbf{v} + \\mathbf{w}) && \\text{(6) } (c + d)\\mathbf{u} = c\\mathbf{u} + d\\mathbf{u} \\\\ &\\text{(3) } \\mathbf{u} + \\mathbf{0} = \\mathbf{u} && \\text{(7) } c(d\\mathbf{u}) = (cd)\\mathbf{u} \\\\ &\\text{(4) } \\mathbf{u} + (-\\mathbf{u}) = \\mathbf{0} && \\text{(8) } 1\\mathbf{u} = \\mathbf{u} \\end{aligned}',
          text: 'for all $\\mathbf{u}, \\mathbf{v}, \\mathbf{w}$ in $\\mathbb{R}^n$ and all scalars $c, d$. Here $-\\mathbf{u}$ means $(-1)\\mathbf{u}$.',
        },
        {
          type: 'derivation',
          title: 'Proof of property (5): $c(\\mathbf{u} + \\mathbf{v}) = c\\mathbf{u} + c\\mathbf{v}$',
          steps: [
            { tex: 'c(\\mathbf{u} + \\mathbf{v}) = c\\begin{bmatrix} u_1 + v_1 \\\\ \\vdots \\\\ u_n + v_n \\end{bmatrix} = \\begin{bmatrix} c(u_1 + v_1) \\\\ \\vdots \\\\ c(u_n + v_n) \\end{bmatrix}', why: 'Apply the definitions: first add entrywise, then multiply every entry by $c$.' },
            { tex: '= \\begin{bmatrix} cu_1 + cv_1 \\\\ \\vdots \\\\ cu_n + cv_n \\end{bmatrix}', why: 'Each entry is an ordinary real number, and real numbers obey the distributive law $c(a + b) = ca + cb$.' },
            { tex: '= \\begin{bmatrix} cu_1 \\\\ \\vdots \\\\ cu_n \\end{bmatrix} + \\begin{bmatrix} cv_1 \\\\ \\vdots \\\\ cv_n \\end{bmatrix} = c\\mathbf{u} + c\\mathbf{v}', why: 'Read the definition of vector addition backwards, then recognise each column as a scalar multiple.' },
          ],
          result: 'Every one of the eight properties is proved the same way: unpack into entries, use the matching fact about real numbers, repack.',
        },
        {
          type: 'derivation',
          title: 'Solve $3\\mathbf{x} - \\mathbf{u} = \\mathbf{x} + \\mathbf{v}$ for $\\mathbf{u} = (4, -2, 1)$, $\\mathbf{v} = (0, 6, 3)$',
          steps: [
            { tex: '3\\mathbf{x} - \\mathbf{u} + \\mathbf{u} - \\mathbf{x} = \\mathbf{x} + \\mathbf{v} + \\mathbf{u} - \\mathbf{x}', why: 'Add $\\mathbf{u} - \\mathbf{x}$ to both sides. Equal vectors stay equal when you add the same vector to each.' },
            { tex: '2\\mathbf{x} = \\mathbf{u} + \\mathbf{v}', why: 'Properties (1)–(4) cancel $-\\mathbf{u} + \\mathbf{u}$ and $\\mathbf{x} - \\mathbf{x}$ to $\\mathbf{0}$; property (6) combines $3\\mathbf{x} - \\mathbf{x} = (3 - 1)\\mathbf{x}$.' },
            { tex: '\\mathbf{x} = \\tfrac12(\\mathbf{u} + \\mathbf{v})', why: 'Multiply both sides by the scalar $\\frac12$; properties (7) and (8) give $\\frac12(2\\mathbf{x}) = 1\\mathbf{x} = \\mathbf{x}$.' },
            { tex: '\\mathbf{x} = \\tfrac12 \\begin{bmatrix} 4 \\\\ 4 \\\\ 4 \\end{bmatrix} = \\begin{bmatrix} 2 \\\\ 2 \\\\ 2 \\end{bmatrix}', why: 'Now compute: $\\mathbf{u} + \\mathbf{v} = (4 + 0,\\, -2 + 6,\\, 1 + 3)$.' },
          ],
          result: '$\\mathbf{x} = (2, 2, 2)$. Check: $3\\mathbf{x} - \\mathbf{u} = (2, 8, 5)$ and $\\mathbf{x} + \\mathbf{v} = (2, 8, 5)$ ✓.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'There is no "dividing by a vector"',
          text: 'You may divide by a nonzero *scalar* (multiply by $\\frac1c$), but $\\frac{\\mathbf{u}}{\\mathbf{v}}$ means nothing, and neither does $\\mathbf{u}\\mathbf{v}$ — so far we have no product of two vectors at all. (The dot and cross products later in this unit are new, carefully defined operations. Shaders do offer an entry-by-entry product, handy for tinting colours, but it is not one of the operations of linear algebra.)',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'These eight rules define the whole subject',
          text: 'In unit 6 you will turn this theorem around: any set of objects with an addition and a scalar multiplication obeying these eight rules is called a [[vector-space]]. Polynomials, audio signals, matrices and functions all qualify, so everything you learn for columns of numbers applies to them too.',
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'error',
      prompt: 'A student solves $2\\mathbf{x} + \\mathbf{u} = \\mathbf{v}$ for $\\mathbf{u} = (2, 0, -4)$ and $\\mathbf{v} = (6, 2, 0)$. Tap the first line that is wrong.',
      lines: [
        '$2\\mathbf{x} + \\mathbf{u} = \\mathbf{v}$',
        '$2\\mathbf{x} = \\mathbf{v} + \\mathbf{u}$',
        '$2\\mathbf{x} = (8, 2, -4)$',
        '$\\mathbf{x} = (4, 1, -2)$',
      ],
      errorLines: [2],
      explanation: 'To isolate $2\\mathbf{x}$ you add $-\\mathbf{u}$ to both sides, so line 2 should read $2\\mathbf{x} = \\mathbf{v} - \\mathbf{u}$. Then $2\\mathbf{x} = (6 - 2,\\; 2 - 0,\\; 0 - (-4)) = (4, 2, 4)$ and $\\mathbf{x} = (2, 1, 2)$. Check: $2(2, 1, 2) + (2, 0, -4) = (6, 2, 0) = \\mathbf{v}$ ✓. Lines 3 and 4 do their arithmetic correctly — on the wrong equation.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'concept',
      title: 'R³ as space, Rⁿ as data',
      blocks: [
        {
          type: 'p',
          text: 'In $\\mathbb{R}^3$ the picture is three mutually perpendicular axes. The usual math convention is **right-handed**: $x$ to the right, $y$ up, $z$ toward you. Engines pick their own labels — Unreal uses $z$ as "up", Unity uses $y$ — and some flip the handedness. The arithmetic is identical; only the meaning of each slot changes, which is why importing a model from one tool into another sometimes leaves it lying on its back.',
        },
        {
          type: 'p',
          text: 'For larger $n$, think of a vector as a **record of data** — a fixed list of numbers where each slot has a meaning. Addition and scaling still make sense slot by slot:',
        },
        {
          type: 'table',
          headers: ['Data', 'Entries', 'Lives in'],
          rows: [
            ['A position or velocity in a 3D world', '$x, y, z$', '$\\mathbb{R}^3$'],
            ['An RGBA colour', 'red, green, blue, alpha', '$\\mathbb{R}^4$'],
            ['A mesh vertex: position, normal, texture coordinates', '$3 + 3 + 2$', '$\\mathbb{R}^8$'],
            ['A $64 \\times 64$ grayscale image', 'one brightness per pixel', '$\\mathbb{R}^{4096}$'],
            ['The state of 100 particles (position and velocity)', '$100 \\times 6$', '$\\mathbb{R}^{600}$'],
          ],
          caption: 'Averaging two images, blending two colours or interpolating two vertices is just vector arithmetic in the right $\\mathbb{R}^n$.',
        },
        {
          type: 'p',
          text: 'The most-used blend in all of game programming is [[linear-interpolation]], or **lerp**: for $s$ between $0$ and $1$,',
        },
        {
          type: 'math',
          tex: '\\operatorname{lerp}(\\mathbf{a}, \\mathbf{b}, s) = (1 - s)\\,\\mathbf{a} + s\\,\\mathbf{b} = \\mathbf{a} + s(\\mathbf{b} - \\mathbf{a})',
          caption: 'At $s = 0$ you get $\\mathbf{a}$, at $s = 1$ you get $\\mathbf{b}$, and at $s = \\frac12$ the midpoint. The second form reads "start at $\\mathbf{a}$ and go the fraction $s$ of the way to $\\mathbf{b}$".',
        },
        {
          type: 'graph',
          x: [-5, 5],
          y: [-3, 4],
          equal: true,
          segments: [{ from: [-3, -1], to: [3, 2], color: 'gray', dashed: true }],
          points: [
            { x: -3, y: -1, label: 'a', color: 'blue' },
            { x: 3, y: 2, label: 'b', color: 'red' },
            { x: '-3 + 6s', y: '-1 + 3s', label: 'lerp(a, b, s)', color: 'purple' },
          ],
          sliders: [{ name: 's', min: -0.5, max: 1.5, step: 0.05, value: 0.25, label: '$s$' }],
          readouts: [
            { label: 'point $= (1 - s)\\mathbf{a} + s\\mathbf{b}$: $x =$', expr: '-3 + 6s', digits: 2 },
            { label: '$y =$', expr: '-1 + 3s', digits: 2 },
          ],
          caption: 'Here $\\mathbf{a} = (-3, -1)$ and $\\mathbf{b} = (3, 2)$. For $0 \\le s \\le 1$ the point stays on the segment; outside that range lerp *extrapolates* along the same line.',
        },
        {
          type: 'derivation',
          title: 'Blend orange $(255, 128, 0)$ halfway to blue $(0, 64, 255)$',
          steps: [
            { tex: '(1 - \\tfrac12)\\begin{bmatrix} 255 \\\\ 128 \\\\ 0 \\end{bmatrix} + \\tfrac12\\begin{bmatrix} 0 \\\\ 64 \\\\ 255 \\end{bmatrix}', why: 'Lerp with $s = \\frac12$: equal weights on both colours.' },
            { tex: '= \\begin{bmatrix} 127.5 \\\\ 64 \\\\ 0 \\end{bmatrix} + \\begin{bmatrix} 0 \\\\ 32 \\\\ 127.5 \\end{bmatrix} = \\begin{bmatrix} 127.5 \\\\ 96 \\\\ 127.5 \\end{bmatrix}', why: 'Scale each vector, then add entrywise. Each channel is averaged independently.' },
          ],
          result: 'A muted purple, $(127.5, 96, 127.5)$ — rounded to $(128, 96, 128)$ if the channels are stored as bytes.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Lerp everywhere',
          text: 'GLSL calls it `mix(a, b, s)`, C++20 has `std::lerp(a, b, s)` for scalars in `<cmath>`, and every engine has a vector version. Camera smoothing, animation blending, colour gradients, health-bar fades: all are $(1 - s)\\mathbf{a} + s\\mathbf{b}$. In the next lesson this becomes a special case of a much bigger idea, the *linear combination*.',
        },
      ],
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'fill',
      prompt: 'A health bar fades from colour $\\mathbf{a} = (200, 40, 0)$ toward $\\mathbf{b} = (0, 120, 240)$. Compute $\\operatorname{lerp}(\\mathbf{a}, \\mathbf{b}, 0.25)$. Type each entry.',
      template: '$($ ___ $,$ ___ $,$ ___ $)$',
      blanks: [{ answers: ['150'] }, { answers: ['60'] }, { answers: ['60'] }],
      hint: 'Compute $0.75\\,\\mathbf{a} + 0.25\\,\\mathbf{b}$ entry by entry.',
      explanation: '$(1 - 0.25)\\mathbf{a} + 0.25\\,\\mathbf{b} = 0.75(200, 40, 0) + 0.25(0, 120, 240) = (150, 30, 0) + (0, 30, 60) = (150, 60, 60)$. The other form gives the same result: $\\mathbf{a} + 0.25(\\mathbf{b} - \\mathbf{a}) = (200, 40, 0) + 0.25(-200, 80, 240) = (150, 60, 60)$. A common slip is weighting the wrong end: $0.25\\,\\mathbf{a} + 0.75\\,\\mathbf{b}$ is the colour three-quarters of the way along.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'numeric',
      prompt: 'A $64 \\times 64$ **colour** image stores a red, a green and a blue value for every pixel. If the whole image is treated as one vector in $\\mathbb{R}^n$, what is $n$?',
      label: '$n =$',
      answer: '12288',
      explanation: 'There are $64 \\times 64 = 4096$ pixels and $3$ numbers per pixel, so the image is a single vector in $\\mathbb{R}^{12288}$. Adding two such vectors blends two images; scaling one changes its brightness. Machine-learning models treat images exactly like this — as points in a very high-dimensional $\\mathbb{R}^n$.',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'concept',
      title: 'Points and vectors in a game',
      blocks: [
        {
          type: 'p',
          text: 'In engine code, a character\'s position and its velocity are both stored as a `Vec3`. But they are different kinds of things. A **point** is a *location* ("the guard is here"); a **vector** is a *displacement* or rate ("move this far", "this fast in this direction"). Only some combinations make sense:',
        },
        {
          type: 'table',
          headers: ['Operation', 'Result', 'Meaning'],
          rows: [
            ['point $-$ point', 'vector', 'displacement: $\\mathbf{d} = \\text{target} - \\text{position}$'],
            ['point $+$ vector', 'point', 'move: new position $= \\mathbf{p} + \\Delta t\\,\\mathbf{v}$'],
            ['vector $\\pm$ vector, scalar $\\times$ vector', 'vector', 'combine or rescale motions (velocity $+$ wind)'],
            ['point $+$ point', 'meaningless', 'depends on where the origin happens to be'],
          ],
        },
        {
          type: 'derivation',
          title: 'Why point $+$ point is meaningless but point $-$ point is fine',
          steps: [
            { tex: '\\mathbf{p} \\mapsto \\mathbf{p} + \\mathbf{c}, \\qquad \\mathbf{q} \\mapsto \\mathbf{q} + \\mathbf{c}', why: 'Move the world origin (large open worlds really do this to keep coordinates small — a "floating origin"). Every point\'s coordinates shift by the same vector $\\mathbf{c}$.' },
            { tex: '(\\mathbf{q} + \\mathbf{c}) - (\\mathbf{p} + \\mathbf{c}) = \\mathbf{q} - \\mathbf{p}', why: 'The $\\mathbf{c}$\'s cancel: the displacement between two points does not depend on the origin. It is a genuine geometric fact.' },
            { tex: '(\\mathbf{p} + \\mathbf{c}) + (\\mathbf{q} + \\mathbf{c}) = (\\mathbf{p} + \\mathbf{q}) + 2\\mathbf{c}', why: 'The sum shifts by $2\\mathbf{c}$, not $\\mathbf{c}$, so it does not describe a fixed location in the world — it is an artefact of the coordinate choice.' },
          ],
          result: 'Combinations whose weights add to $1$, like the midpoint $\\frac12\\mathbf{p} + \\frac12\\mathbf{q} = \\mathbf{p} + \\frac12(\\mathbf{q} - \\mathbf{p})$ or any lerp, *are* meaningful: they shift by exactly $\\mathbf{c}$.',
        },
        {
          type: 'graph',
          x: [-6, 6],
          y: [-4, 5],
          equal: true,
          points: [
            { x: -3, y: -2, label: 'guard P', color: 'blue' },
            { x: 'a', y: 'b', label: 'player Q', color: 'red' },
          ],
          segments: [{ from: [-3, -2], to: ['a', 'b'], color: 'purple', arrow: true, label: 'd = Q − P' }],
          sliders: [
            { name: 'a', min: -5, max: 5, step: 0.5, value: 3, label: 'player $x$' },
            { name: 'b', min: -3, max: 4, step: 0.5, value: 2, label: 'player $y$' },
          ],
          readouts: [
            { label: '$\\mathbf{d} = Q - P$: first entry', expr: 'a + 3', digits: 2 },
            { label: 'second entry', expr: 'b + 2', digits: 2 },
          ],
          caption: 'A top-down view. The displacement "target minus position" always points **from** the guard **to** the player. Reverse the subtraction and the guard would run away.',
        },
        {
          type: 'code',
          title: 'chase.cpp',
          runnable: true,
          code: `#include <cstdio>

struct Vec3 { double x, y, z; };

Vec3 operator+(Vec3 a, Vec3 b) { return {a.x + b.x, a.y + b.y, a.z + b.z}; }
Vec3 operator-(Vec3 a, Vec3 b) { return {a.x - b.x, a.y - b.y, a.z - b.z}; }
Vec3 operator*(double s, Vec3 v) { return {s * v.x, s * v.y, s * v.z}; }

int main() {
    Vec3 guard  = {2.0, 0.0, 1.0};      // a point
    Vec3 player = {8.0, 0.0, -7.0};     // a point
    Vec3 d = player - guard;            // point - point = vector
    std::printf("d = (%g, %g, %g)\\n", d.x, d.y, d.z);

    Vec3 vel = 0.25 * d;                // a quarter of d per second
    const double dt = 0.5;              // half-second steps
    Vec3 p = guard;
    for (int step = 1; step <= 4; ++step) {
        p = p + dt * vel;               // point + vector = point
        std::printf("t = %.1f  p = (%g, %g, %g)\\n", step * dt, p.x, p.y, p.z);
    }
}`,
          output: `d = (6, 0, -8)
t = 0.5  p = (2.75, 0, 0)
t = 1.0  p = (3.5, 0, -1)
t = 1.5  p = (4.25, 0, -2)
t = 2.0  p = (5, 0, -3)`,
          annotations: [
            { lines: '5-7', text: 'Entrywise addition, subtraction and scalar multiplication — the definitions from this lesson, one line each.' },
            { lines: 12, text: 'Displacement $=$ target $-$ position: $(8 - 2,\\; 0 - 0,\\; -7 - 1) = (6, 0, -8)$.' },
            { lines: 15, text: 'Velocity is a vector: $\\frac14\\mathbf{d} = (1.5, 0, -2)$ units per second.' },
            { lines: 19, text: 'Euler step: point $+$ vector. After $2$ s the guard is at $\\mathbf{p} + 2\\mathbf{v} = (5, 0, -3)$, half-way to the player.' },
          ],
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Teaching the type system the difference',
          text: 'Some math libraries use separate `Point3` and `Vector3` types so that `point + point` will not compile. Most engines use one `Vec3` and rely on you. In unit 4 you will see the standard trick: append a fourth entry $w = 1$ to points and $w = 0$ to directions, and a single $4 \\times 4$ matrix then moves points while leaving directions unshifted.',
        },
      ],
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'mcq',
      prompt: 'In a game, `player.pos` and `enemy.pos` are positions (points) and `player.vel` and `wind` are velocities (vectors). Which expression is a **bug** — it has no geometric meaning?',
      codeOptions: true,
      options: [
        { text: 'enemy.pos - player.pos', why: 'Point minus point: the displacement from player to enemy. Meaningful — it is the arrow an AI would aim along.' },
        { text: 'player.pos + dt * player.vel', why: 'Point plus vector: where the player will be after `dt` seconds. This is the Euler step.' },
        { text: 'player.pos + enemy.pos', correct: true, why: 'Point plus point depends on where the origin is, so it describes no fixed place. (If you wanted the midpoint, write `player.pos + 0.5 * (enemy.pos - player.pos)`.)' },
        { text: 'player.vel + wind', why: 'Vector plus vector: the player\'s velocity through the air plus the air\'s own velocity — the actual ground velocity.' },
      ],
      explanation: 'Ask what each result *is*. A difference of points is a displacement, a point plus a displacement is a new point, and velocities combine into velocities. A sum of two positions changes by $2\\mathbf{c}$ when the origin moves by $\\mathbf{c}$, so it is not a location in the world at all — a classic source of "works at the origin, breaks elsewhere" bugs.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'expr',
      prompt: 'A drone starts at the point $\\mathbf{p}_0 = (4, 10, -2)$ and flies with constant velocity $\\mathbf{v} = (3, -2, 0.5)$ units per second, so its position after $t$ seconds is $\\mathbf{p}(t) = \\mathbf{p}_0 + t\\,\\mathbf{v}$. Write the **second** entry ($y$-coordinate) of $\\mathbf{p}(t)$.',
      label: '$y(t) =$',
      variables: ['t'],
      answer: '10 - 2t',
      answerTex: '10 - 2t',
      hint: 'Take the second entry of $\\mathbf{p}_0$ and add $t$ times the second entry of $\\mathbf{v}$.',
      explanation: 'Entry by entry, $\\mathbf{p}(t) = (4 + 3t,\\; 10 - 2t,\\; -2 + 0.5t)$, so $y(t) = 10 - 2t$. The drone loses $2$ units of height per second and reaches $y = 0$ at $t = 5$. This "point plus $t$ times a direction" form is a parametric line — you will use it constantly, from ray casting to describing solution sets in unit 2.',
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'truefalse',
      prompt: 'If the game shifts its world origin (every coordinate changes by the same vector $\\mathbf{c}$), the displacement vector from the guard to the player changes too.',
      answer: false,
      explanation: 'The displacement is $\\mathbf{q} - \\mathbf{p}$, and $(\\mathbf{q} + \\mathbf{c}) - (\\mathbf{p} + \\mathbf{c}) = \\mathbf{q} - \\mathbf{p}$: the shift cancels. That is exactly why displacements and velocities are "real" geometric objects while raw coordinates are bookkeeping, and why floating-origin systems can recentre a huge world without breaking any AI or physics that works with differences.',
    },
  ],
  takeaways: [
    'Linear algebra is the language of graphics (transforms, lighting, normals), physics, animation blending and machine learning — and GPUs are built to do it fast.',
    'A vector in $\\mathbb{R}^n$ is an ordered list of $n$ real numbers, written as a column; two vectors are equal exactly when they have the same size and every entry matches.',
    'Addition and scalar multiplication work entry by entry; geometrically, addition is tip-to-tail (the parallelogram diagonal), and $\\mathbf{u} - \\mathbf{v}$ runs from the tip of $\\mathbf{v}$ to the tip of $\\mathbf{u}$.',
    'The eight algebraic properties of $\\mathbb{R}^n$ justify every step of solving a vector equation — but there is no division by a vector.',
    'Lerp, $(1 - s)\\mathbf{a} + s\\mathbf{b}$, blends any two vectors: positions, colours, poses.',
    'In games, point $-$ point $=$ displacement vector, point $+$ vector $=$ point, and point $+$ point is a bug.',
  ],
  reading: [
    {
      title: '3Blue1Brown — Essence of linear algebra',
      url: 'https://www.3blue1brown.com/topics/linear-algebra',
      source: 'video',
      note: 'Chapter 1, "Vectors, what even are they?", connects the arrow, list-of-numbers and abstract views of vectors in eleven animated minutes.',
    },
    {
      title: 'Interactive Linear Algebra (Margalit & Rabinoff)',
      url: 'https://textbooks.math.gatech.edu/ila/',
      source: 'book',
      note: 'Free online textbook; its section on vectors in Chapter 2 has interactive demos of addition and scalar multiplication in $\\mathbb{R}^2$ and $\\mathbb{R}^3$.',
    },
    {
      title: 'Khan Academy — Linear algebra',
      url: 'https://www.khanacademy.org/math/linear-algebra',
      source: 'khan',
      note: 'The "Vectors and spaces" unit has short videos and exercises on adding and scaling vectors in $\\mathbb{R}^n$.',
    },
    {
      title: 'Wikipedia — Euclidean vector',
      url: 'https://en.wikipedia.org/wiki/Euclidean_vector',
      source: 'wikipedia',
      note: 'Covers the geometric and coordinate views of vectors, and the distinction between position vectors and displacements.',
    },
  ],
};
