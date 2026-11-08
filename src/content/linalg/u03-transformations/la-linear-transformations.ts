import type { Lesson } from '../../types';

/** Column vector in TeX: col(1, 2, 3). */
const col = (...e: (string | number)[]) => `\\begin{bmatrix} ${e.join(' \\\\ ')} \\end{bmatrix}`;
/** Matrix in TeX from rows: mat([1, 2], [3, 4]). */
const mat = (...rows: (string | number)[][]) => `\\begin{bmatrix} ${rows.map((r) => r.join(' & ')).join(' \\\\ ')} \\end{bmatrix}`;

export const lesson: Lesson = {
  id: 'la-linear-transformations',
  title: 'Linear Transformations',
  summary: 'Functions that take vectors to vectors and respect addition and scaling: the mathematical shape of every vertex transform.',
  minutes: 18,
  objectives: [
    'Use the vocabulary of transformations: domain, codomain, image and range',
    'Evaluate a matrix transformation $\\mathbf{x} \\mapsto A\\mathbf{x}$ and decide whether a vector is in its range',
    'State the two properties that define a linear transformation and derive $T(\\mathbf{0}) = \\mathbf{0}$ and superposition',
    'Prove that scalings, projections and rotations are linear, and that translations and squaring are not',
    'Explain why a translation cannot be written as $\\mathbf{x} \\mapsto A\\mathbf{x}$, the problem homogeneous coordinates solve',
  ],
  steps: [
    // ------------------------------------------------------------------ 0
    {
      kind: 'concept',
      title: 'Functions that take vectors to vectors',
      blocks: [
        {
          type: 'p',
          text: 'So far you have treated $A\\mathbf{x} = \\mathbf{b}$ as an equation to solve. Now flip the point of view: think of $A$ as a machine that **acts** on $\\mathbf{x}$ and outputs a new vector $A\\mathbf{x}$. Feed it every vector in $\\mathbb{R}^n$ and you get a [[function]] from vectors to vectors. In graphics this is literal: a vertex shader takes each vertex position and outputs a transformed one.',
        },
        {
          type: 'definition',
          term: 'Transformation',
          text: 'A **transformation** (or function, or mapping) $T$ from $\\mathbb{R}^n$ to $\\mathbb{R}^m$ is a rule that assigns to each vector $\\mathbf{x}$ in $\\mathbb{R}^n$ a vector $T(\\mathbf{x})$ in $\\mathbb{R}^m$. We write $T: \\mathbb{R}^n \\to \\mathbb{R}^m$.\n\n- $\\mathbb{R}^n$ is the **[[domain]]** (where inputs live) and $\\mathbb{R}^m$ is the **[[codomain]]** (where outputs are allowed to live).\n- $T(\\mathbf{x})$ is the **[[image-of-a-vector|image]]** of $\\mathbf{x}$ under $T$.\n- The set of all images $T(\\mathbf{x})$ is the **[[range]]** of $T$. It is a subset of the codomain and can be strictly smaller.',
        },
        {
          type: 'p',
          text: 'The most important examples come from matrices. If $A$ is $m \\times n$, then $A\\mathbf{x}$ is defined exactly when $\\mathbf{x}$ has $n$ entries, and the result has $m$ entries. So $T(\\mathbf{x}) = A\\mathbf{x}$ is a transformation from $\\mathbb{R}^n$ to $\\mathbb{R}^m$, called a [[matrix-transformation]] and often written $\\mathbf{x} \\mapsto A\\mathbf{x}$. Columns of $A$ count the inputs; rows count the outputs.',
        },
        {
          type: 'derivation',
          title: `Evaluate $T(\\mathbf{u})$ for $A = ${mat([1, -3], [3, 5], [-1, 7])}$ and $\\mathbf{u} = ${col(2, -1)}$`,
          steps: [
            { tex: 'T: \\mathbb{R}^2 \\to \\mathbb{R}^3', why: '$A$ is $3 \\times 2$: it accepts vectors with $2$ entries and returns vectors with $3$ entries.' },
            { tex: `T(\\mathbf{u}) = A\\mathbf{u} = 2${col(1, 3, -1)} + (-1)${col(-3, 5, 7)}`, why: 'A matrix–vector product is the combination of the columns of $A$ with the entries of $\\mathbf{u}$ as weights.' },
            { tex: `= ${col('2 + 3', '6 - 5', '-2 - 7')} = ${col(5, 1, -9)}`, why: 'Add entry by entry. Watch the signs: $-1 \\cdot (-3) = +3$.' },
          ],
          result: 'The image of $\\mathbf{u} = (2, -1)$ is $T(\\mathbf{u}) = (5, 1, -9)$, a vector in $\\mathbb{R}^3$.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Transformations are functions in code too',
          text: 'In C++ a transformation is just a function `Vec3 T(Vec3 x)`. Domain and codomain are the parameter and return types. A matrix transformation is the special case where the body is "multiply by a fixed matrix", which is exactly what a GPU does to every vertex of a mesh, millions of times per frame.',
        },
      ],
    },
    // ------------------------------------------------------------------ 1
    {
      kind: 'fill',
      prompt: `Let $T(\\mathbf{x}) = A\\mathbf{x}$ with $A = ${mat([2, 0, -1], [1, 3, 4])}$. Compute the image of $\\mathbf{u} = ${col(1, -2, 3)}$.`,
      template: '$T(\\mathbf{u}) = ($ ___ $,$ ___ $)$',
      blanks: [{ answers: ['-1'] }, { answers: ['7'] }],
      hint: 'Take $1 \\cdot$ column 1 $- 2 \\cdot$ column 2 $+ 3 \\cdot$ column 3.',
      explanation: `$A\\mathbf{u} = 1${col(2, 1)} - 2${col(0, 3)} + 3${col(-1, 4)} = ${col('2 - 0 - 3', '1 - 6 + 12')} = ${col(-1, 7)}$. Here $T: \\mathbb{R}^3 \\to \\mathbb{R}^2$, so a vector with three entries goes in and one with two entries comes out.`,
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'concept',
      title: 'Two questions about any transformation',
      blocks: [
        {
          type: 'p',
          text: 'For a matrix transformation, the two big questions about $A\\mathbf{x} = \\mathbf{b}$ get a new geometric reading. **Existence:** is $\\mathbf{b}$ in the range of $T$, i.e. is it the image of *some* $\\mathbf{x}$? **Uniqueness:** is it the image of *only one* $\\mathbf{x}$? Both are answered by row reducing $[A \\mid \\mathbf{b}]$.',
        },
        {
          type: 'derivation',
          title: `Same $A$ as before: is $\\mathbf{b} = ${col(3, 2, -5)}$ in the range of $T$?`,
          steps: [
            { tex: `\\left[\\begin{array}{cc|c} 1 & -3 & 3 \\\\ 3 & 5 & 2 \\\\ -1 & 7 & -5 \\end{array}\\right]`, why: 'Solving $T(\\mathbf{x}) = \\mathbf{b}$ means solving $A\\mathbf{x} = \\mathbf{b}$, so row reduce the augmented matrix.' },
            { tex: `\\xrightarrow[R_3 + R_1]{R_2 - 3R_1} \\left[\\begin{array}{cc|c} 1 & -3 & 3 \\\\ 0 & 14 & -7 \\\\ 0 & 4 & -2 \\end{array}\\right]`, why: 'Row 2: $3 - 3 = 0$, $5 + 9 = 14$, $2 - 9 = -7$. Row 3: $-1 + 1 = 0$, $7 - 3 = 4$, $-5 + 3 = -2$.' },
            { tex: `\\xrightarrow{\\frac{1}{14}R_2} \\left[\\begin{array}{cc|c} 1 & -3 & 3 \\\\ 0 & 1 & -\\frac{1}{2} \\\\ 0 & 4 & -2 \\end{array}\\right] \\xrightarrow{R_3 - 4R_2} \\left[\\begin{array}{cc|c} 1 & -3 & 3 \\\\ 0 & 1 & -\\frac{1}{2} \\\\ 0 & 0 & 0 \\end{array}\\right]`, why: 'Scale to a pivot of $1$, then clear below it: $-2 - 4(-\\tfrac{1}{2}) = 0$. No row of the form $[0 \\; 0 \\mid \\text{nonzero}]$, so the system is consistent.' },
            { tex: 'x_2 = -\\tfrac{1}{2}, \\quad x_1 = 3 + 3x_2 = \\tfrac{3}{2}', why: 'Back-substitute. Both columns of $A$ are pivot columns, so there are no free variables and the solution is unique.' },
          ],
          result: '$\\mathbf{b}$ is in the range: $T(\\tfrac{3}{2}, -\\tfrac{1}{2}) = \\mathbf{b}$, and no other input maps to $\\mathbf{b}$.',
        },
        {
          type: 'p',
          text: 'Change the last entry to get $\\mathbf{c} = (3, 2, 5)$. The same row operations leave a last row $[0 \\;\\; 0 \\mid 10]$, which says $0 = 10$. So $\\mathbf{c}$ is **not** in the range. The range of this $T$ is the plane in $\\mathbb{R}^3$ spanned by the two columns of $A$, and $\\mathbf{c}$ lies off that plane.',
        },
        {
          type: 'p',
          text: `Try the existence question by hand in $\\mathbb{R}^2$. Here $T(\\mathbf{x}) = ${mat([2, 1], [1, 1])}\\mathbf{x}$. Move the input $\\mathbf{x}$ (blue) until its image $T(\\mathbf{x})$ (red) lands on the gray target point $(3, 2)$.`,
        },
        {
          type: 'graph',
          x: [-4, 6],
          y: [-3, 5],
          equal: true,
          segments: [
            { from: [0, 0], to: ['p', 'q'], arrow: true, label: 'x', color: 'blue' },
            { from: [0, 0], to: ['2p + q', 'p + q'], arrow: true, label: 'T(x)', color: 'red' },
          ],
          points: [{ x: 3, y: 2, label: 'target (3, 2)', color: 'gray' }],
          sliders: [
            { name: 'p', min: -3, max: 3, step: 0.5, value: 2, label: 'first entry of $\\mathbf{x}$' },
            { name: 'q', min: -3, max: 3, step: 0.5, value: -1, label: 'second entry of $\\mathbf{x}$' },
          ],
          readouts: [
            { label: 'first entry of $T(\\mathbf{x}) = 2p + q =$', expr: '2p + q', digits: 2 },
            { label: 'second entry of $T(\\mathbf{x}) = p + q =$', expr: 'p + q', digits: 2 },
          ],
          caption: 'The input $\\mathbf{x} = (1, 1)$ hits the target. Solving $A\\mathbf{x} = \\mathbf{b}$ is exactly this search, done by row reduction instead of by hand.',
        },
      ],
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'mcq',
      prompt: '$A$ is a $3 \\times 5$ matrix and $T(\\mathbf{x}) = A\\mathbf{x}$. What are the domain and codomain of $T$?',
      options: [
        {
          text: '$T: \\mathbb{R}^3 \\to \\mathbb{R}^5$',
          why: 'This swaps them. $A\\mathbf{x}$ is only defined when $\\mathbf{x}$ has as many entries as $A$ has **columns**, which is $5$.',
        },
        {
          text: '$T: \\mathbb{R}^5 \\to \\mathbb{R}^3$',
          correct: true,
          why: 'Inputs need $5$ entries (one weight per column), and each output is a combination of columns with $3$ entries.',
        },
        {
          text: '$T: \\mathbb{R}^{15} \\to \\mathbb{R}^{15}$',
          why: '$15$ counts the entries of $A$, which has nothing to do with the size of the vectors $T$ acts on.',
        },
        {
          text: '$T: \\mathbb{R}^3 \\to \\mathbb{R}^3$',
          why: 'Only a square matrix maps a space to itself. A $3 \\times 5$ matrix changes the number of entries.',
        },
      ],
      explanation: 'For an $m \\times n$ matrix, $\\mathbf{x} \\mapsto A\\mathbf{x}$ goes from $\\mathbb{R}^n$ (the number of columns) to $\\mathbb{R}^m$ (the number of rows). Here $m = 3$, $n = 5$: $T: \\mathbb{R}^5 \\to \\mathbb{R}^3$.',
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'concept',
      title: 'What makes a transformation linear',
      blocks: [
        {
          type: 'p',
          text: 'Most functions from $\\mathbb{R}^n$ to $\\mathbb{R}^m$ are a mess. The ones linear algebra studies are those that respect the two operations vectors have: addition and scalar multiplication. It does not matter whether you combine vectors first and then transform, or transform first and then combine.',
        },
        {
          type: 'definition',
          term: 'Linear transformation',
          text: 'A transformation $T: \\mathbb{R}^n \\to \\mathbb{R}^m$ is **[[linear-transformation|linear]]** if, for all $\\mathbf{u}, \\mathbf{v}$ in $\\mathbb{R}^n$ and all scalars $c$:\n\n1. $T(\\mathbf{u} + \\mathbf{v}) = T(\\mathbf{u}) + T(\\mathbf{v})$ (additivity)\n2. $T(c\\mathbf{u}) = c\\,T(\\mathbf{u})$ (homogeneity)',
        },
        {
          type: 'p',
          text: 'Every matrix transformation is linear: you showed in the previous unit that $A(\\mathbf{u} + \\mathbf{v}) = A\\mathbf{u} + A\\mathbf{v}$ and $A(c\\mathbf{u}) = c(A\\mathbf{u})$. Two consequences follow straight from the definition and are used constantly.',
        },
        {
          type: 'derivation',
          title: 'Consequences of linearity',
          steps: [
            { tex: 'T(\\mathbf{0}) = T(0 \\cdot \\mathbf{0}) = 0 \\cdot T(\\mathbf{0}) = \\mathbf{0}', why: 'Write $\\mathbf{0}$ as the scalar $0$ times a vector, use property 2 to pull the $0$ out, and any vector times $0$ is $\\mathbf{0}$. So a linear map always fixes the origin.' },
            { tex: 'T(c\\mathbf{u} + d\\mathbf{v}) = T(c\\mathbf{u}) + T(d\\mathbf{v})', why: 'Property 1 applied to the two vectors $c\\mathbf{u}$ and $d\\mathbf{v}$.' },
            { tex: '= c\\,T(\\mathbf{u}) + d\\,T(\\mathbf{v})', why: 'Property 2 on each term. Conversely, this single identity (for all $\\mathbf{u}, \\mathbf{v}, c, d$) implies both properties: take $c = d = 1$, or $d = 0$.' },
            { tex: 'T(c_1\\mathbf{v}_1 + \\cdots + c_p\\mathbf{v}_p) = c_1T(\\mathbf{v}_1) + \\cdots + c_pT(\\mathbf{v}_p)', why: 'Repeat the previous step one vector at a time (induction on $p$). This is the **superposition principle**.' },
          ],
          result: 'A linear map sends $\\mathbf{0}$ to $\\mathbf{0}$ and every linear combination to the same combination of images.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why "linear": grid lines stay straight, parallel and evenly spaced',
          text: 'The points $\\mathbf{p} + s\\mathbf{d}$ ($s$ real) form a line. Under a linear $T$ they go to $T(\\mathbf{p}) + s\\,T(\\mathbf{d})$, which is again a line (or a single point if $T(\\mathbf{d}) = \\mathbf{0}$). Lines with the same direction $\\mathbf{d}$ all get the new direction $T(\\mathbf{d})$, so parallel lines stay parallel, and equal steps in $s$ stay equal steps. Drag the matrix entries below: the grid can be stretched, sheared, rotated or flattened, but it never bends, and the origin never moves.',
        },
        {
          type: 'graph',
          x: [-5, 5],
          y: [-5, 5],
          equal: true,
          height: 340,
          segments: [
            { from: [0, 0], to: [2, 0], color: 'gray', dashed: true },
            { from: [0, 1], to: [2, 1], color: 'gray', dashed: true },
            { from: [0, 2], to: [2, 2], color: 'gray', dashed: true },
            { from: [0, 0], to: [0, 2], color: 'gray', dashed: true },
            { from: [1, 0], to: [1, 2], color: 'gray', dashed: true },
            { from: [2, 0], to: [2, 2], color: 'gray', dashed: true },
            { from: [0, 0], to: ['2a', '2c'], color: 'purple' },
            { from: ['b', 'd'], to: ['2a + b', '2c + d'], color: 'purple' },
            { from: ['2b', '2d'], to: ['2a + 2b', '2c + 2d'], color: 'purple' },
            { from: [0, 0], to: ['2b', '2d'], color: 'purple' },
            { from: ['a', 'c'], to: ['a + 2b', 'c + 2d'], color: 'purple' },
            { from: ['2a', '2c'], to: ['2a + 2b', '2c + 2d'], color: 'purple' },
            { from: [0, 0], to: ['a', 'c'], arrow: true, color: 'red', label: 'T(e₁)' },
            { from: [0, 0], to: ['b', 'd'], arrow: true, color: 'green', label: 'T(e₂)' },
          ],
          sliders: [
            { name: 'a', min: -2, max: 2, step: 0.25, value: 1.5, label: '$a$ (row 1, col 1)' },
            { name: 'b', min: -2, max: 2, step: 0.25, value: 0.5, label: '$b$ (row 1, col 2)' },
            { name: 'c', min: -2, max: 2, step: 0.25, value: 0.5, label: '$c$ (row 2, col 1)' },
            { name: 'd', min: -2, max: 2, step: 0.25, value: 1, label: '$d$ (row 2, col 2)' },
          ],
          caption: 'Gray: a $2 \\times 2$ block of grid squares. Purple: its image under $\\mathbf{x} \\mapsto \\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix}\\mathbf{x}$. Each grid square becomes a parallelogram, all four congruent. Set $b = 2a$, $d = 2c$ and the whole grid collapses onto a line.',
        },
      ],
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'fill',
      prompt: 'Complete the facts about a linear transformation $T$.',
      template: 'For all vectors and scalars, $T(\\mathbf{u} + \\mathbf{v}) =$ ___ and $T(c\\mathbf{u}) =$ ___ . As a consequence, $T(\\mathbf{0}) =$ ___ .',
      blanks: [{ answers: ['$T(\\mathbf{u}) + T(\\mathbf{v})$'] }, { answers: ['$c\\,T(\\mathbf{u})$'] }, { answers: ['$\\mathbf{0}$'] }],
      wordBank: ['$T(\\mathbf{u}) + T(\\mathbf{v})$', '$c\\,T(\\mathbf{u})$', '$\\mathbf{0}$', '$T(\\mathbf{u})\\,T(\\mathbf{v})$', '$T(\\mathbf{u}) + c$', '$\\mathbf{b}$'],
      explanation: 'Additivity and homogeneity are the definition. Then $T(\\mathbf{0}) = T(0\\cdot\\mathbf{0}) = 0\\cdot T(\\mathbf{0}) = \\mathbf{0}$. The distractor $\\mathbf{b}$ is what a translation $\\mathbf{x} \\mapsto \\mathbf{x} + \\mathbf{b}$ does to the origin, which is exactly why translations are not linear.',
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'concept',
      title: 'Examples: scaling, projection, rotation',
      blocks: [
        {
          type: 'p',
          text: 'To show a map is linear, either verify the two properties directly, or write it as $\\mathbf{x} \\mapsto A\\mathbf{x}$ (matrix maps are automatically linear). Here are three you will see in every engine.',
        },
        {
          type: 'list',
          items: [
            '**Scaling** $T(\\mathbf{x}) = r\\mathbf{x}$ for a fixed scalar $r$. For $0 \\le r < 1$ it is a *contraction* (shrinks toward the origin); for $r > 1$ a *dilation*. It equals $(rI)\\mathbf{x}$.',
            `**Projection onto the $x_1x_2$-plane** in $\\mathbb{R}^3$: $T(x_1, x_2, x_3) = (x_1, x_2, 0)$. It is $\\mathbf{x} \\mapsto ${mat([1, 0, 0], [0, 1, 0], [0, 0, 0])}\\mathbf{x}$: think of a shadow cast by a light directly overhead.`,
            `**Rotation by $90^\\circ$** counterclockwise in $\\mathbb{R}^2$: $T(x_1, x_2) = (-x_2, x_1)$. It is $\\mathbf{x} \\mapsto ${mat([0, -1], [1, 0])}\\mathbf{x}$. For example $(1, 0) \\mapsto (0, 1)$ and $(0, 1) \\mapsto (-1, 0)$.`,
          ],
        },
        {
          type: 'derivation',
          title: 'Prove directly that scaling by $r$ is linear',
          steps: [
            { tex: 'T(\\mathbf{u} + \\mathbf{v}) = r(\\mathbf{u} + \\mathbf{v}) = r\\mathbf{u} + r\\mathbf{v} = T(\\mathbf{u}) + T(\\mathbf{v})', why: 'Apply the rule to $\\mathbf{u} + \\mathbf{v}$, then use the distributive law for scalars over vector addition.' },
            { tex: 'T(c\\mathbf{u}) = r(c\\mathbf{u}) = c(r\\mathbf{u}) = c\\,T(\\mathbf{u})', why: 'Multiplying by $c$ and then $r$ is the same as by $r$ and then $c$: both are multiplying each entry by $rc$.' },
          ],
          result: 'Both properties hold for every $\\mathbf{u}, \\mathbf{v}, c$, so scaling is linear.',
        },
        {
          type: 'p',
          text: 'Rotation is linear for a geometric reason: rotating a whole parallelogram rotates its diagonal, so rotating $\\mathbf{u} + \\mathbf{v}$ gives the same arrow as adding the rotated $\\mathbf{u}$ and $\\mathbf{v}$. The graph checks this for the $90^\\circ$ rotation. Move $\\mathbf{u}$ and watch the red parallelogram stay a rotated copy of the blue one.',
        },
        {
          type: 'graph',
          x: [-5, 5],
          y: [-4, 5],
          equal: true,
          segments: [
            { from: [0, 0], to: ['p', 'q'], arrow: true, color: 'blue', label: 'u' },
            { from: [0, 0], to: [1, 2], arrow: true, color: 'blue', label: 'v' },
            { from: [0, 0], to: ['p + 1', 'q + 2'], arrow: true, color: 'blue', label: 'u + v' },
            { from: ['p', 'q'], to: ['p + 1', 'q + 2'], color: 'blue', dashed: true },
            { from: [1, 2], to: ['p + 1', 'q + 2'], color: 'blue', dashed: true },
            { from: [0, 0], to: ['-q', 'p'], arrow: true, color: 'red', label: 'T(u)' },
            { from: [0, 0], to: [-2, 1], arrow: true, color: 'red', label: 'T(v)' },
            { from: [0, 0], to: ['-q - 2', 'p + 1'], arrow: true, color: 'red', label: 'T(u + v)' },
            { from: ['-q', 'p'], to: ['-q - 2', 'p + 1'], color: 'red', dashed: true },
            { from: [-2, 1], to: ['-q - 2', 'p + 1'], color: 'red', dashed: true },
          ],
          sliders: [
            { name: 'p', min: -2, max: 3, step: 0.5, value: 2, label: 'first entry of $\\mathbf{u}$' },
            { name: 'q', min: -2, max: 3, step: 0.5, value: 0.5, label: 'second entry of $\\mathbf{u}$' },
          ],
          caption: 'Blue: $\\mathbf{u}$, $\\mathbf{v} = (1, 2)$ and their sum. Red: everything rotated by $90^\\circ$. The rotated sum is the diagonal of the rotated parallelogram: $T(\\mathbf{u} + \\mathbf{v}) = T(\\mathbf{u}) + T(\\mathbf{v})$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'mcq',
      prompt: 'Which transformation $T: \\mathbb{R}^2 \\to \\mathbb{R}^2$ is linear?',
      options: [
        {
          text: '$T(x_1, x_2) = (x_1 + 1,\\; x_2)$',
          why: '$T(0, 0) = (1, 0) \\ne \\mathbf{0}$. A linear map must fix the origin, so this translation fails immediately.',
        },
        {
          text: '$T(x_1, x_2) = (x_1 x_2,\\; x_2)$',
          why: 'Scaling fails: $T(2, 2) = (4, 2)$ but $2\\,T(1, 1) = 2(1, 1) = (2, 2)$. A product of two input entries is quadratic, not linear.',
        },
        {
          text: '$T(x_1, x_2) = (x_1 + x_2,\\; 3x_1)$',
          correct: true,
          why: `It equals $${mat([1, 1], [3, 0])}${col('x_1', 'x_2')}$, a matrix transformation, so it is linear. Every output entry is a fixed combination of the inputs with no constant term.`,
        },
        {
          text: '$T(x_1, x_2) = (|x_1|,\\; x_2)$',
          why: 'Homogeneity fails for negative scalars: $T(-1, 0) = (1, 0)$ but $-1 \\cdot T(1, 0) = (-1, 0)$.',
        },
      ],
      explanation: 'A quick test for a formula in coordinates: $T$ is linear exactly when each output entry is a combination $a_1x_1 + \\cdots + a_nx_n$ of the inputs with constant coefficients. No constants added, no products or powers of inputs, no absolute values or other functions applied to them.',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'concept',
      title: 'Non-examples, and why translation is not linear',
      blocks: [
        {
          type: 'p',
          text: 'The one transformation every game object needs (moving it) is not linear. A **[[translation]]** by a fixed vector $\\mathbf{b} \\ne \\mathbf{0}$ is $T(\\mathbf{x}) = \\mathbf{x} + \\mathbf{b}$. It slides every point the same amount, so shapes keep their size and orientation. But the origin moves.',
        },
        {
          type: 'derivation',
          title: 'Translation by $\\mathbf{b} \\ne \\mathbf{0}$ breaks every rule',
          steps: [
            { tex: 'T(\\mathbf{0}) = \\mathbf{0} + \\mathbf{b} = \\mathbf{b} \\ne \\mathbf{0}', why: 'A linear map must send $\\mathbf{0}$ to $\\mathbf{0}$. This alone proves $T$ is not linear.' },
            { tex: 'T(\\mathbf{u} + \\mathbf{v}) = \\mathbf{u} + \\mathbf{v} + \\mathbf{b}', why: 'Apply the rule once, to the sum.' },
            { tex: 'T(\\mathbf{u}) + T(\\mathbf{v}) = \\mathbf{u} + \\mathbf{v} + 2\\mathbf{b}', why: 'Apply it to each vector separately: $\\mathbf{b}$ gets added twice.' },
            { tex: 'T(2\\mathbf{u}) = 2\\mathbf{u} + \\mathbf{b} \\ne 2\\mathbf{u} + 2\\mathbf{b} = 2\\,T(\\mathbf{u})', why: 'Homogeneity fails the same way: the shift is not scaled along with the vector.' },
          ],
          result: 'Additivity and homogeneity both fail by a multiple of $\\mathbf{b}$, so they hold only when $\\mathbf{b} = \\mathbf{0}$.',
        },
        {
          type: 'graph',
          x: [-4, 5],
          y: [-3, 5],
          equal: true,
          segments: [
            { from: [0, 0], to: [1, 0], color: 'gray', dashed: true },
            { from: [1, 0], to: [1, 1], color: 'gray', dashed: true },
            { from: [1, 1], to: [0, 1], color: 'gray', dashed: true },
            { from: [0, 1], to: [0, 0], color: 'gray', dashed: true },
            { from: ['h', 'k'], to: ['h + 1', 'k'], color: 'orange' },
            { from: ['h + 1', 'k'], to: ['h + 1', 'k + 1'], color: 'orange' },
            { from: ['h + 1', 'k + 1'], to: ['h', 'k + 1'], color: 'orange' },
            { from: ['h', 'k + 1'], to: ['h', 'k'], color: 'orange' },
            { from: [0, 0], to: ['h', 'k'], arrow: true, color: 'red', label: 'b' },
          ],
          points: [{ x: 'h', y: 'k', label: 'T(0)', color: 'red' }],
          sliders: [
            { name: 'h', min: -3, max: 3, step: 0.5, value: 2, label: '$b_1$' },
            { name: 'k', min: -2, max: 3, step: 0.5, value: 1, label: '$b_2$' },
          ],
          readouts: [{ label: '$\\|T(\\mathbf{0}) - \\mathbf{0}\\| = \\|\\mathbf{b}\\| =$', expr: 'sqrt(h^2 + k^2)', digits: 3 }],
          caption: 'The unit square (gray) and its translate (orange). The corner at the origin is carried to $\\mathbf{b}$. Only $\\mathbf{b} = \\mathbf{0}$ keeps the origin fixed, and that translation does nothing.',
        },
        {
          type: 'compare',
          left: {
            title: 'Algebra "linear function"',
            tone: 'neutral',
            tex: ['f(x) = 3x + 2', 'f(0) = 2 \\ne 0'],
            text: 'Its graph is a line, but it is **not** a linear transformation of $\\mathbb{R}$: it adds a constant. Mathematicians call $\\mathbf{x} \\mapsto A\\mathbf{x} + \\mathbf{b}$ an **[[affine-transformation]]**.',
          },
          right: {
            title: 'Linear transformation of $\\mathbb{R}$',
            tone: 'good',
            tex: ['f(x) = 3x', 'f(0) = 0'],
            text: 'Every linear $T: \\mathbb{R} \\to \\mathbb{R}$ is multiplication by a constant: $T(x) = T(x \\cdot 1) = x\\,T(1)$.',
          },
        },
        {
          type: 'p',
          text: 'Nonlinearity can also hide in maps that *do* fix the origin. The squaring map $T(x_1, x_2) = (x_1^2, x_2)$ has $T(\\mathbf{0}) = \\mathbf{0}$, yet $T(2\\mathbf{e}_1) = (4, 0)$ while $2\\,T(\\mathbf{e}_1) = (2, 0)$. So $T(\\mathbf{0}) = \\mathbf{0}$ is necessary for linearity, not sufficient.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why this matters for game engines',
          text: 'Since $A\\mathbf{0} = \\mathbf{0}$ for every matrix, no $2 \\times 2$ matrix can move a 2D point and no $3 \\times 3$ matrix can move a 3D point. Yet engines store an object\'s rotation, scale **and** position in a single matrix. The trick, which you will meet in the next unit, is **[[homogeneous-coordinates]]**: write the 2D point $(x, y)$ as $(x, y, 1)$ in $\\mathbb{R}^3$. In that higher dimension a translation of the plane $z = 1$ *is* a linear map, so it fits in a $3 \\times 3$ matrix (and 3D translations fit in the famous $4 \\times 4$ matrices).',
        },
      ],
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'error',
      prompt: 'A student "proves" that translation $T(\\mathbf{x}) = \\mathbf{x} + \\mathbf{b}$ is additive. Tap the first line that is wrong.',
      lines: [
        '$T(\\mathbf{u} + \\mathbf{v}) = (\\mathbf{u} + \\mathbf{v}) + \\mathbf{b}$',
        '$= (\\mathbf{u} + \\mathbf{b}) + (\\mathbf{v} + \\mathbf{b})$',
        '$= T(\\mathbf{u}) + T(\\mathbf{v})$',
        'So $T$ is additive, and by the same argument linear.',
      ],
      errorLines: [2],
      explanation: 'Line 2 quietly adds a second copy of $\\mathbf{b}$: $(\\mathbf{u} + \\mathbf{b}) + (\\mathbf{v} + \\mathbf{b}) = \\mathbf{u} + \\mathbf{v} + 2\\mathbf{b}$, not $\\mathbf{u} + \\mathbf{v} + \\mathbf{b}$. Correctly, $T(\\mathbf{u}) + T(\\mathbf{v}) - T(\\mathbf{u} + \\mathbf{v}) = \\mathbf{b}$, which is nonzero, so translation is not additive. A faster disproof: $T(\\mathbf{0}) = \\mathbf{b} \\ne \\mathbf{0}$.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'truefalse',
      prompt: 'If a transformation $T: \\mathbb{R}^n \\to \\mathbb{R}^m$ satisfies $T(\\mathbf{0}) = \\mathbf{0}$, then $T$ is linear.',
      answer: false,
      explanation: 'Fixing the origin is a *consequence* of linearity, not a test that proves it. The squaring map $T(x_1, x_2) = (x_1^2, x_2)$ fixes $\\mathbf{0}$ but $T(2\\mathbf{e}_1) = (4, 0) \\ne (2, 0) = 2T(\\mathbf{e}_1)$. Use $T(\\mathbf{0}) \\ne \\mathbf{0}$ to *disprove* linearity quickly; to *prove* it, check both properties (or exhibit a matrix).',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'Linearity in code and in calculus',
      blocks: [
        {
          type: 'p',
          text: 'Superposition is what makes linear maps cheap. If you know what $T$ does to a few vectors, you know what it does to every combination of them, with no further work. The next lesson pushes this to its limit: knowing $T(\\mathbf{e}_1), \\dots, T(\\mathbf{e}_n)$ is enough to know $T$ completely.',
        },
        {
          type: 'p',
          text: 'You can also *test* linearity numerically. The program below compares $T(2\\mathbf{u} + \\mathbf{v})$ with $2T(\\mathbf{u}) + T(\\mathbf{v})$ for a matrix map and for a translation.',
        },
        {
          type: 'code',
          title: 'superposition.cpp',
          runnable: true,
          code: `#include <cstdio>

struct Vec2 { double x, y; };
Vec2 operator+(Vec2 a, Vec2 b) { return {a.x + b.x, a.y + b.y}; }
Vec2 operator*(double c, Vec2 v) { return {c * v.x, c * v.y}; }

// Linear: multiply by the matrix [[2, 1], [0, 1]].
Vec2 matrixMap(Vec2 v) { return {2 * v.x + v.y, v.y}; }
// Not linear: translate by (3, -1).
Vec2 translate(Vec2 v) { return {v.x + 3, v.y - 1}; }

template <class F>
void check(const char* name, F T) {
    const Vec2 u{1, 2}, v{-3, 1};
    Vec2 lhs = T(2 * u + v);     // T(2u + v)
    Vec2 rhs = 2 * T(u) + T(v);  // 2T(u) + T(v)
    std::printf("%-9s T(2u+v) = (%g, %g)   2T(u)+T(v) = (%g, %g)\\n",
                name, lhs.x, lhs.y, rhs.x, rhs.y);
}

int main() {
    check("matrix", matrixMap);
    check("translate", translate);
}`,
          output: `matrix    T(2u+v) = (3, 5)   2T(u)+T(v) = (3, 5)
translate T(2u+v) = (2, 4)   2T(u)+T(v) = (8, 2)`,
          annotations: [
            { lines: 8, text: 'Each output entry is a fixed combination of the inputs: a matrix map, so linear.' },
            { lines: 10, text: 'Adds a constant vector $\\mathbf{b} = (3, -1)$: affine, not linear.' },
            { lines: '15-16', text: 'For a linear $T$ these always agree. For the translation they differ by $(2 + 1 - 1)\\mathbf{b} = 2\\mathbf{b} = (6, -2)$: the weights sum to $3$, so the right side adds $\\mathbf{b}$ three times while the left side adds it once.' },
          ],
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Points versus directions',
          text: 'Under a linear $T$, the vector from $\\mathbf{p}$ to $\\mathbf{q}$ maps to $T(\\mathbf{q} - \\mathbf{p}) = T(\\mathbf{q}) - T(\\mathbf{p})$: the arrow between the images. Under a translation, $(\\mathbf{q} + \\mathbf{b}) - (\\mathbf{p} + \\mathbf{b}) = \\mathbf{q} - \\mathbf{p}$, so directions and velocities should **not** be moved at all. Engines keep this straight with the extra homogeneous coordinate: $w = 1$ for points (translated) and $w = 0$ for directions (not translated).',
        },
        {
          type: 'deepdive',
          title: 'You have been using linear maps since Calculus I',
          blocks: [
            {
              type: 'p',
              text: 'Differentiation is linear: $\\frac{d}{dx}(f + g) = f\' + g\'$ and $\\frac{d}{dx}(cf) = c f\'$. So is the definite integral, and so is the limit. That is why the sum and constant-multiple rules exist in every calculus course: they are additivity and homogeneity.',
            },
            {
              type: 'p',
              text: `Restrict to polynomials $a + bx + cx^2$ and record each one as the vector $(a, b, c)$. Then $\\frac{d}{dx}(a + bx + cx^2) = b + 2cx$, which is the vector $(b, 2c, 0)$. In other words differentiation becomes the matrix map $${col('a', 'b', 'c')} \\mapsto ${mat([0, 1, 0], [0, 0, 2], [0, 0, 0])}${col('a', 'b', 'c')}$. Linear algebra applies to far more than arrows.`,
            },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'numeric',
      prompt: 'For which value of $k$ is $T(x_1, x_2) = \\big(x_1 + kx_2 + (k - 2),\\; 3x_2\\big)$ a linear transformation?',
      hint: 'Compute $T(\\mathbf{0})$. What must it equal?',
      label: '$k =$',
      answer: '2',
      explanation: `A linear map must satisfy $T(\\mathbf{0}) = \\mathbf{0}$, and here $T(0, 0) = (k - 2, 0)$, so we need $k = 2$. For $k = 2$ the map is $T(x_1, x_2) = (x_1 + 2x_2, 3x_2) = ${mat([1, 2], [0, 3])}\\mathbf{x}$, a matrix transformation, so it really is linear. (Remember that $T(\\mathbf{0}) = \\mathbf{0}$ alone would not prove it; exhibiting the matrix does.)`,
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'numeric',
      prompt: '$T: \\mathbb{R}^2 \\to \\mathbb{R}^2$ is linear, with $T(\\mathbf{u}) = (2, 5)$ and $T(\\mathbf{v}) = (-1, 1)$. Find the **second** entry of $T(4\\mathbf{u} - \\mathbf{v})$.',
      hint: 'Superposition: $T(4\\mathbf{u} - \\mathbf{v}) = 4T(\\mathbf{u}) - T(\\mathbf{v})$.',
      label: 'second entry $=$',
      answer: '19',
      explanation: `By linearity, $T(4\\mathbf{u} - \\mathbf{v}) = 4T(\\mathbf{u}) - T(\\mathbf{v}) = 4${col(2, 5)} - ${col(-1, 1)} = ${col('8 + 1', '20 - 1')} = ${col(9, 19)}$. Notice that you never needed to know $\\mathbf{u}$, $\\mathbf{v}$ or a formula for $T$: the images of $\\mathbf{u}$ and $\\mathbf{v}$ determine $T$ on everything in their span.`,
    },
  ],
  takeaways: [
    '$T: \\mathbb{R}^n \\to \\mathbb{R}^m$ has domain $\\mathbb{R}^n$ and codomain $\\mathbb{R}^m$; $T(\\mathbf{x})$ is the image of $\\mathbf{x}$; the range is the set of all images.',
    'An $m \\times n$ matrix gives a matrix transformation $\\mathbf{x} \\mapsto A\\mathbf{x}$ from $\\mathbb{R}^n$ to $\\mathbb{R}^m$; "is $\\mathbf{b}$ in the range?" means "is $A\\mathbf{x} = \\mathbf{b}$ consistent?".',
    '$T$ is linear when $T(\\mathbf{u} + \\mathbf{v}) = T(\\mathbf{u}) + T(\\mathbf{v})$ and $T(c\\mathbf{u}) = cT(\\mathbf{u})$; then $T(\\mathbf{0}) = \\mathbf{0}$ and $T$ preserves every linear combination (superposition).',
    'Scalings, projections onto axes or coordinate planes, and rotations about the origin are linear; they keep grid lines straight, parallel and evenly spaced.',
    'Translations $\\mathbf{x} \\mapsto \\mathbf{x} + \\mathbf{b}$ ($\\mathbf{b} \\ne \\mathbf{0}$), squaring and absolute values are not linear. $T(\\mathbf{0}) \\ne \\mathbf{0}$ disproves linearity, but $T(\\mathbf{0}) = \\mathbf{0}$ does not prove it.',
    'Because $A\\mathbf{0} = \\mathbf{0}$, no ordinary matrix can translate; homogeneous coordinates (next unit) fix this by working one dimension higher.',
  ],
  reading: [
    {
      title: '3Blue1Brown — Essence of linear algebra',
      url: 'https://www.3blue1brown.com/topics/linear-algebra',
      source: 'video',
      note: 'The chapter "Linear transformations and matrices" shows the moving grid from this lesson in beautiful animation.',
    },
    {
      title: 'Interactive Linear Algebra (Margalit & Rabinoff)',
      url: 'https://textbooks.math.gatech.edu/ila/',
      source: 'book',
      note: 'The chapter on linear transformations treats matrix transformations, domain, codomain and range with interactive figures.',
    },
    {
      title: 'Wikipedia — Linear map',
      url: 'https://en.wikipedia.org/wiki/Linear_map',
      source: 'wikipedia',
      note: 'The general definition, examples beyond $\\mathbb{R}^n$ (derivatives, integrals) and the relation to matrices.',
    },
    {
      title: 'Khan Academy — Linear algebra',
      url: 'https://www.khanacademy.org/math/linear-algebra',
      source: 'khan',
      note: 'The "Matrix transformations" unit has short videos proving linearity of specific maps.',
    },
  ],
};
