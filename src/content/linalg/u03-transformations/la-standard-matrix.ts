import type { Lesson } from '../../types';

/** Column vector in TeX: col(1, 2, 3). */
const col = (...e: (string | number)[]) => `\\begin{bmatrix} ${e.join(' \\\\ ')} \\end{bmatrix}`;
/** Matrix in TeX from rows: mat([1, 2], [3, 4]). */
const mat = (...rows: (string | number)[][]) => `\\begin{bmatrix} ${rows.map((r) => r.join(' & ')).join(' \\\\ ')} \\end{bmatrix}`;

export const lesson: Lesson = {
  id: 'la-standard-matrix',
  title: 'The Matrix of a Linear Transformation',
  summary: 'Every linear map on Rⁿ is a matrix in disguise: its columns are where the standard basis vectors land. Plus one-to-one and onto.',
  minutes: 18,
  objectives: [
    'Prove that every linear $T: \\mathbb{R}^n \\to \\mathbb{R}^m$ equals $\\mathbf{x} \\mapsto A\\mathbf{x}$ with $A = [T(\\mathbf{e}_1) \\; \\cdots \\; T(\\mathbf{e}_n)]$',
    'Find the standard matrix from a formula, from a geometric description, or from the images of other vectors',
    'Define one-to-one and onto, and test them with pivots: pivot in every column, pivot in every row',
    'Use the sizes $m$ and $n$ to rule out one-to-one or onto before computing',
  ],
  steps: [
    // ------------------------------------------------------------------ 0
    {
      kind: 'concept',
      title: 'A linear map is decided by a few vectors',
      blocks: [
        {
          type: 'p',
          text: 'In the last lesson, superposition let you compute $T(4\\mathbf{u} - \\mathbf{v})$ from $T(\\mathbf{u})$ and $T(\\mathbf{v})$ alone. Push that idea as far as it goes: pick vectors whose combinations reach **every** vector in $\\mathbb{R}^n$. Then their images determine $T$ everywhere.',
        },
        {
          type: 'p',
          text: `The natural choice is the [[standard-basis]] $\\mathbf{e}_1, \\dots, \\mathbf{e}_n$, the columns of the [[identity-matrix]] $I_n$. In $\\mathbb{R}^2$, $\\mathbf{e}_1 = ${col(1, 0)}$ and $\\mathbf{e}_2 = ${col(0, 1)}$. Any vector splits into them with its own entries as weights: $${col('x_1', 'x_2')} = x_1${col(1, 0)} + x_2${col(0, 1)}$.`,
        },
        {
          type: 'derivation',
          title: 'Suppose $T$ is linear with $T(\\mathbf{e}_1) = (2, 1)$ and $T(\\mathbf{e}_2) = (-1, 1)$. Find $T(3, 2)$.',
          steps: [
            { tex: `${col(3, 2)} = 3\\mathbf{e}_1 + 2\\mathbf{e}_2`, why: 'Split the input along the standard basis; the weights are just its entries.' },
            { tex: `T${col(3, 2)} = 3\\,T(\\mathbf{e}_1) + 2\\,T(\\mathbf{e}_2)`, why: 'Superposition: a linear map sends a combination to the same combination of images.' },
            { tex: `= 3${col(2, 1)} + 2${col(-1, 1)} = ${col('6 - 2', '3 + 2')} = ${col(4, 5)}`, why: 'Substitute the known images and add entry by entry.' },
          ],
          result: '$T(3, 2) = (4, 5)$, found without any formula for $T$.',
        },
        {
          type: 'p',
          text: 'The graph shows the same computation for any input. Walk $x_1$ copies of $T(\\mathbf{e}_1)$ (red), then $x_2$ copies of $T(\\mathbf{e}_2)$ (green): you end at $T(\\mathbf{x})$ (purple).',
        },
        {
          type: 'graph',
          x: [-5, 7],
          y: [-4, 6],
          equal: true,
          segments: [
            { from: [0, 0], to: [2, 1], arrow: true, color: 'red', label: 'T(e₁)' },
            { from: [0, 0], to: [-1, 1], arrow: true, color: 'green', label: 'T(e₂)' },
            { from: [0, 0], to: ['2p', 'p'], color: 'red', dashed: true },
            { from: ['2p', 'p'], to: ['2p - q', 'p + q'], color: 'green', dashed: true },
            { from: [0, 0], to: ['2p - q', 'p + q'], arrow: true, color: 'purple', label: 'T(x)' },
          ],
          sliders: [
            { name: 'p', min: -2, max: 3, step: 0.5, value: 3, label: '$x_1$' },
            { name: 'q', min: -2, max: 3, step: 0.5, value: 2, label: '$x_2$' },
          ],
          readouts: [
            { label: 'first entry of $T(\\mathbf{x}) = 2x_1 - x_2 =$', expr: '2p - q', digits: 2 },
            { label: 'second entry of $T(\\mathbf{x}) = x_1 + x_2 =$', expr: 'p + q', digits: 2 },
          ],
          caption: 'Every output is $x_1 T(\\mathbf{e}_1) + x_2 T(\\mathbf{e}_2)$: two arrows decide the whole map.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why two arrows are enough',
          text: 'A transformation of $\\mathbb{R}^2$ assigns an output to infinitely many inputs, so in general you would need an infinite table to describe it. Linearity collapses that table: once $T(\\mathbf{e}_1)$ and $T(\\mathbf{e}_2)$ are fixed, superposition leaves no freedom for any other output. This is why a $2 \\times 2$ matrix, just four numbers, can describe a rotation of the entire plane.',
        },
      ],
    },
    // ------------------------------------------------------------------ 1
    {
      kind: 'fill',
      prompt: '$T: \\mathbb{R}^2 \\to \\mathbb{R}^3$ is linear with $T(\\mathbf{e}_1) = (1, 0, 2)$ and $T(\\mathbf{e}_2) = (-3, 1, 4)$. Find $T(2, -1)$.',
      template: '$T(2, -1) = ($ ___ $,$ ___ $,$ ___ $)$',
      blanks: [{ answers: ['5'] }, { answers: ['-1'] }, { answers: ['0'] }],
      hint: '$(2, -1) = 2\\mathbf{e}_1 - \\mathbf{e}_2$.',
      explanation: `$T(2, -1) = 2T(\\mathbf{e}_1) - T(\\mathbf{e}_2) = 2${col(1, 0, 2)} - ${col(-3, 1, 4)} = ${col('2 + 3', '0 - 1', '4 - 4')} = ${col(5, -1, 0)}$. Careful with the first entry: subtracting $-3$ adds $3$.`,
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'concept',
      title: 'The standard matrix',
      blocks: [
        {
          type: 'p',
          text: 'Writing "$x_1T(\\mathbf{e}_1) + \\cdots + x_nT(\\mathbf{e}_n)$" should look familiar: it is a combination of vectors with the entries of $\\mathbf{x}$ as weights, which is exactly a matrix–vector product. So every linear map is a matrix transformation.',
        },
        {
          type: 'theorem',
          name: 'The standard matrix of a linear transformation',
          text: 'Let $T: \\mathbb{R}^n \\to \\mathbb{R}^m$ be linear. Then there is exactly one $m \\times n$ matrix $A$ with $T(\\mathbf{x}) = A\\mathbf{x}$ for every $\\mathbf{x}$ in $\\mathbb{R}^n$, namely\n\n$$A = \\big[\\,T(\\mathbf{e}_1) \\;\\; T(\\mathbf{e}_2) \\;\\; \\cdots \\;\\; T(\\mathbf{e}_n)\\,\\big].$$\n\n$A$ is called the **[[standard-matrix]]** of $T$: its $j$-th column is the image of the $j$-th standard basis vector.',
        },
        {
          type: 'derivation',
          title: 'Proof',
          steps: [
            { tex: '\\mathbf{x} = I_n\\mathbf{x} = x_1\\mathbf{e}_1 + x_2\\mathbf{e}_2 + \\cdots + x_n\\mathbf{e}_n', why: '$I_n\\mathbf{x} = \\mathbf{x}$, and a product with $I_n$ is the combination of its columns $\\mathbf{e}_j$ with weights $x_j$.' },
            { tex: 'T(\\mathbf{x}) = T(x_1\\mathbf{e}_1 + \\cdots + x_n\\mathbf{e}_n)', why: 'Apply $T$ to both sides.' },
            { tex: '= x_1T(\\mathbf{e}_1) + \\cdots + x_nT(\\mathbf{e}_n)', why: 'Linearity, in its superposition form.' },
            { tex: '= \\big[T(\\mathbf{e}_1) \\; \\cdots \\; T(\\mathbf{e}_n)\\big]\\,\\mathbf{x} = A\\mathbf{x}', why: 'Definition of the matrix–vector product: weights $x_j$ on the columns $T(\\mathbf{e}_j)$. This proves existence.' },
            { tex: 'B\\mathbf{x} = T(\\mathbf{x}) \\;\\forall\\mathbf{x} \\implies B\\mathbf{e}_j = T(\\mathbf{e}_j)', why: 'Uniqueness: if another matrix $B$ also works, plug in $\\mathbf{x} = \\mathbf{e}_j$.' },
            { tex: '\\implies \\text{column } j \\text{ of } B = T(\\mathbf{e}_j) = \\text{column } j \\text{ of } A', why: '$B\\mathbf{e}_j$ picks out column $j$ of $B$ (weight $1$ on column $j$, $0$ elsewhere). Every column agrees, so $B = A$.' },
          ],
          result: 'Linear transformations of $\\mathbb{R}^n$ and matrices are the same thing, seen from two angles.',
        },
        {
          type: 'derivation',
          title: 'Find the standard matrix of $T(x_1, x_2) = (x_1 - 2x_2,\\; 3x_2,\\; x_1 + x_2)$',
          steps: [
            { tex: 'T: \\mathbb{R}^2 \\to \\mathbb{R}^3 \\implies A \\text{ is } 3 \\times 2', why: 'Two inputs give two columns; three outputs give three rows.' },
            { tex: `T(\\mathbf{e}_1) = T(1, 0) = ${col('1 - 0', 0, '1 + 0')} = ${col(1, 0, 1)}`, why: 'Substitute $x_1 = 1$, $x_2 = 0$ into the formula.' },
            { tex: `T(\\mathbf{e}_2) = T(0, 1) = ${col('0 - 2', 3, '0 + 1')} = ${col(-2, 3, 1)}`, why: 'Substitute $x_1 = 0$, $x_2 = 1$.' },
            { tex: `A = ${mat([1, -2], [0, 3], [1, 1])}`, why: 'The images become the **columns**. Check one entry: row 2 of $A\\mathbf{x}$ is $0x_1 + 3x_2 = 3x_2$, matching the formula.' },
          ],
          result: 'Shortcut: with the formula written as $a_{i1}x_1 + \\cdots + a_{in}x_n$ in each entry, the coefficients of output entry $i$ form **row** $i$ of $A$.',
        },
        {
          type: 'compare',
          left: {
            title: 'Wrong: images as rows',
            tone: 'bad',
            tex: [`${mat(['\\text{---}', 'T(\\mathbf{e}_1)', '\\text{---}'], ['\\text{---}', 'T(\\mathbf{e}_2)', '\\text{---}'])}`],
            text: 'This is the transpose of the right answer. For a non-square $A$ it does not even have the right shape.',
          },
          right: {
            title: 'Right: images as columns',
            tone: 'good',
            tex: [`${mat(['|', '|'], ['T(\\mathbf{e}_1)', 'T(\\mathbf{e}_2)'], ['|', '|'])}`],
            text: 'Because $A\\mathbf{e}_j$ returns column $j$, the image of $\\mathbf{e}_j$ must be column $j$.',
          },
        },
      ],
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'error',
      prompt: 'A linear $T: \\mathbb{R}^2 \\to \\mathbb{R}^2$ has $T(\\mathbf{e}_1) = (1, 4)$ and $T(\\mathbf{e}_2) = (2, -3)$. A student computes $T(1, 1)$. Tap the first line that is wrong.',
      lines: [
        'The standard matrix has $T(\\mathbf{e}_1)$ and $T(\\mathbf{e}_2)$ as its building blocks.',
        `$A = ${mat([1, 4], [2, -3])}$`,
        `$T(1, 1) = A${col(1, 1)} = ${col('1 + 4', '2 - 3')}$`,
        `$T(1, 1) = ${col(5, -1)}$`,
      ],
      errorLines: [2],
      explanation: `Line 2 puts the images in as **rows**. The standard matrix is $A = [T(\\mathbf{e}_1) \\; T(\\mathbf{e}_2)] = ${mat([1, 2], [4, -3])}$. Then $T(1, 1) = A${col(1, 1)} = ${col(3, 1)}$. Sanity check with superposition: $T(1, 1) = T(\\mathbf{e}_1) + T(\\mathbf{e}_2) = (1 + 2, 4 - 3) = (3, 1)$. The student's $(5, -1)$ fails this check.`,
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'concept',
      title: 'From a geometric description to a matrix',
      blocks: [
        {
          type: 'p',
          text: 'The theorem turns a description in words ("rotate by $90^\\circ$", "squash onto a plane") into a matrix with no algebra at all. You only ask: **where does each standard basis vector go?**',
        },
        {
          type: 'steps',
          items: [
            { title: 'Track $\\mathbf{e}_1$', text: 'Use the geometric description to find $T(\\mathbf{e}_1)$. A sketch helps.' },
            { title: 'Track the rest', text: 'Do the same for $\\mathbf{e}_2, \\dots, \\mathbf{e}_n$.' },
            { title: 'Write the columns', text: 'Place $T(\\mathbf{e}_1), \\dots, T(\\mathbf{e}_n)$ side by side as the columns of $A$.' },
            { title: 'Check a vector', text: 'Test $A$ on one easy vector whose image you know from the picture.' },
          ],
        },
        {
          type: 'derivation',
          title: 'Rotation by $90^\\circ$ counterclockwise',
          steps: [
            { tex: `T(\\mathbf{e}_1) = ${col(0, 1)}`, why: 'The arrow pointing right, turned a quarter-turn counterclockwise, points up.' },
            { tex: `T(\\mathbf{e}_2) = ${col(-1, 0)}`, why: 'The arrow pointing up, turned a quarter-turn counterclockwise, points left.' },
            { tex: `A = ${mat([0, -1], [1, 0])}`, why: 'Images as columns.' },
            { tex: `A${col(1, 1)} = ${col(-1, 1)}`, why: 'Check: $(1, 1)$ points up-right at $45^\\circ$; a quarter turn gives up-left at $135^\\circ$, which is $(-1, 1)$.' },
          ],
          result: 'The $90^\\circ$ rotation has standard matrix $\\begin{bmatrix} 0 & -1 \\\\ 1 & 0 \\end{bmatrix}$, matching the formula $(x_1, x_2) \\mapsto (-x_2, x_1)$ from the last lesson.',
        },
        {
          type: 'graph',
          x: [-3, 3],
          y: [-1, 3],
          equal: true,
          segments: [
            { from: [1, 0], to: [1, 2], color: 'gray' },
            { from: [1, 2], to: [2, 2], color: 'gray' },
            { from: [1, 1], to: [1.7, 1], color: 'gray' },
            { from: [0, 1], to: [-2, 1], color: 'purple' },
            { from: [-2, 1], to: [-2, 2], color: 'purple' },
            { from: [-1, 1], to: [-1, 1.7], color: 'purple' },
            { from: [0, 0], to: [0, 1], arrow: true, color: 'red', label: 'T(e₁)' },
            { from: [0, 0], to: [-1, 0], arrow: true, color: 'green', label: 'T(e₂)' },
          ],
          caption: 'A gray letter F and its image under the $90^\\circ$ rotation (purple). Each point $(x_1, x_2)$ of the F went to $x_1T(\\mathbf{e}_1) + x_2T(\\mathbf{e}_2)$.',
        },
        {
          type: 'p',
          text: `Two more, by the same recipe. A horizontal stretch by a factor of $3$ sends $\\mathbf{e}_1 \\mapsto (3, 0)$ and leaves $\\mathbf{e}_2$ alone, so $A = ${mat([3, 0], [0, 1])}$. The projection of $\\mathbb{R}^3$ onto the $x_1x_2$-plane fixes $\\mathbf{e}_1$ and $\\mathbf{e}_2$ and flattens $\\mathbf{e}_3$ to $\\mathbf{0}$, so $A = ${mat([1, 0, 0], [0, 1, 0], [0, 0, 0])}$.`,
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Reading an object\'s axes off its matrix',
          text: 'In an engine, the rotation-and-scale part of an object\'s model matrix maps the object\'s local axes to the world. By the theorem, its columns **are** the object\'s local right, up and forward axes expressed in world coordinates (in engines that use column vectors; row-vector engines such as DirectX-style math store them as rows). So "give me this character\'s forward vector" is often just "read column 3", with no trigonometry.',
        },
      ],
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'fill',
      prompt: '$T: \\mathbb{R}^2 \\to \\mathbb{R}^2$ is linear, $T(1, 1) = (3, 1)$ and $T(1, -1) = (1, 5)$. Find its standard matrix $A$.',
      template: 'Row 1 of $A$: ___ , ___ . Row 2 of $A$: ___ , ___ .',
      blanks: [{ answers: ['2'] }, { answers: ['1'] }, { answers: ['3'] }, { answers: ['-2'] }],
      hint: 'Write $\\mathbf{e}_1 = \\tfrac{1}{2}\\big[(1, 1) + (1, -1)\\big]$ and $\\mathbf{e}_2 = \\tfrac{1}{2}\\big[(1, 1) - (1, -1)\\big]$, then use linearity.',
      explanation: `By linearity, $T(\\mathbf{e}_1) = \\tfrac{1}{2}\\big[T(1, 1) + T(1, -1)\\big] = \\tfrac{1}{2}(4, 6) = (2, 3)$ and $T(\\mathbf{e}_2) = \\tfrac{1}{2}\\big[T(1, 1) - T(1, -1)\\big] = \\tfrac{1}{2}(2, -4) = (1, -2)$. As columns: $A = ${mat([2, 1], [3, -2])}$. Check: $A${col(1, 1)} = ${col(3, 1)}$ and $A${col(1, -1)} = ${col(1, 5)}$.`,
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'numeric',
      prompt: '$T(x_1, x_2, x_3) = (2x_1 - x_3,\\; x_2 + 4x_3)$. What is the entry in row 2, column 3 of its standard matrix?',
      hint: 'Column 3 is $T(\\mathbf{e}_3) = T(0, 0, 1)$.',
      label: '$a_{23} =$',
      answer: '4',
      explanation: `$T(\\mathbf{e}_3) = T(0, 0, 1) = (-1, 4)$, so column 3 is $(-1, 4)$ and $a_{23} = 4$. The whole matrix is $${mat([2, 0, -1], [0, 1, 4])}$: row 2 lists the coefficients of $x_1, x_2, x_3$ in the second output, $0x_1 + 1x_2 + 4x_3$.`,
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'One-to-one and onto',
      blocks: [
        {
          type: 'p',
          text: 'The existence and uniqueness questions from the last lesson get names. They describe how well a transformation can be "undone".',
        },
        {
          type: 'definition',
          term: 'Onto and one-to-one',
          text: 'A transformation $T: \\mathbb{R}^n \\to \\mathbb{R}^m$ is\n\n- **[[onto]]** $\\mathbb{R}^m$ if every $\\mathbf{b}$ in $\\mathbb{R}^m$ is the image of **at least one** $\\mathbf{x}$ (the range is the whole codomain);\n- **[[one-to-one]]** if every $\\mathbf{b}$ in $\\mathbb{R}^m$ is the image of **at most one** $\\mathbf{x}$ (different inputs give different outputs).',
        },
        {
          type: 'p',
          text: 'For a linear map, one-to-one only has to be checked at a single output: $\\mathbf{0}$.',
        },
        {
          type: 'theorem',
          name: 'One-to-one test',
          text: 'A linear $T$ is one-to-one if and only if $T(\\mathbf{x}) = \\mathbf{0}$ has only the trivial solution.',
        },
        {
          type: 'derivation',
          title: 'Proof',
          steps: [
            { tex: 'T \\text{ one-to-one} \\implies T(\\mathbf{x}) = \\mathbf{0} \\text{ only for } \\mathbf{x} = \\mathbf{0}', why: '($\\Rightarrow$) We know $T(\\mathbf{0}) = \\mathbf{0}$. If $T$ is one-to-one, no other input can also map to $\\mathbf{0}$.' },
            { tex: 'T(\\mathbf{u}) = T(\\mathbf{v}) \\implies T(\\mathbf{u} - \\mathbf{v}) = T(\\mathbf{u}) - T(\\mathbf{v}) = \\mathbf{0}', why: '($\\Leftarrow$) Suppose two inputs share an output. Linearity turns the difference of outputs into the output of the difference.' },
            { tex: '\\implies \\mathbf{u} - \\mathbf{v} = \\mathbf{0} \\implies \\mathbf{u} = \\mathbf{v}', why: 'Only the trivial solution maps to $\\mathbf{0}$, so the two inputs were equal all along.' },
          ],
        },
        {
          type: 'theorem',
          name: 'Pivot tests for $T(\\mathbf{x}) = A\\mathbf{x}$, $A$ of size $m \\times n$',
          text: '1. $T$ is onto $\\mathbb{R}^m$ $\\iff$ the columns of $A$ span $\\mathbb{R}^m$ $\\iff$ $A$ has a pivot in **every row**.\n2. $T$ is one-to-one $\\iff$ the columns of $A$ are linearly independent $\\iff$ $A$ has a pivot in **every column**.',
        },
        {
          type: 'p',
          text: 'Part 1 is the spanning theorem from the previous unit: the range is the span of the columns. Part 2 combines the one-to-one test with the first lesson of this unit: $A\\mathbf{x} = \\mathbf{0}$ has only the trivial solution exactly when the columns are independent.',
        },
        {
          type: 'p',
          text: 'The graph shows a map that is neither. $T(x_1, x_2) = (x_1, 0)$ projects onto the $x_1$-axis. Drag $x_2$: the input moves along the dashed vertical line, but its image does not move. Many inputs, one output.',
        },
        {
          type: 'graph',
          x: [-4, 4],
          y: [-3, 3],
          equal: true,
          segments: [
            { from: [0, 0], to: ['p', 's'], arrow: true, color: 'blue', label: 'x' },
            { from: [0, 0], to: ['p', 0], arrow: true, color: 'red', label: 'T(x)' },
          ],
          vlines: [{ x: 'p', color: 'gray', dashed: true }],
          sliders: [
            { name: 'p', min: -3, max: 3, step: 0.5, value: 2, label: '$x_1$' },
            { name: 's', min: -2.5, max: 2.5, step: 0.5, value: 1.5, label: '$x_2$' },
          ],
          caption: 'Every point on the dashed line maps to the same image, so $T$ is not one-to-one ($A = \\begin{bmatrix} 1 & 0 \\\\ 0 & 0 \\end{bmatrix}$ has no pivot in column 2). The range is only the $x_1$-axis, so $T$ is not onto either (no pivot in row 2).',
        },
        {
          type: 'table',
          headers: ['Shape of $A$', 'Can $T$ be one-to-one?', 'Can $T$ be onto?'],
          rows: [
            ['$n > m$ (wide)', 'No: more columns than possible pivots', 'Yes, if a pivot in every row'],
            ['$n < m$ (tall)', 'Yes, if a pivot in every column', 'No: more rows than possible pivots'],
            ['$n = m$ (square)', 'Yes', 'Yes, and in fact exactly when it is one-to-one'],
          ],
          caption: 'The square case ("one-to-one $\\iff$ onto") is part of the Invertible Matrix Theorem in the next unit.',
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'mcq',
      prompt: 'Let $T: \\mathbb{R}^3 \\to \\mathbb{R}^2$ be the projection $T(x_1, x_2, x_3) = (x_1, x_2)$. Which statement is true?',
      options: [
        {
          text: '$T$ is one-to-one but not onto',
          why: '$T(0, 0, 1) = (0, 0) = T(\\mathbf{0})$: two different inputs share an output, so it is not one-to-one.',
        },
        {
          text: '$T$ is onto but not one-to-one',
          correct: true,
          why: `Its matrix $${mat([1, 0, 0], [0, 1, 0])}$ has a pivot in both rows (onto) but none in column 3 (not one-to-one).`,
        },
        {
          text: '$T$ is both one-to-one and onto',
          why: 'A map from $\\mathbb{R}^3$ to $\\mathbb{R}^2$ can never be one-to-one: a $2 \\times 3$ matrix has at most $2$ pivots for $3$ columns.',
        },
        {
          text: '$T$ is neither one-to-one nor onto',
          why: 'It is onto: any $(b_1, b_2)$ is the image of $(b_1, b_2, 0)$ (or of $(b_1, b_2, 7)$, for that matter).',
        },
      ],
      explanation: 'Every $(b_1, b_2)$ is hit, for example by $(b_1, b_2, 0)$, so $T$ is onto. But the whole vertical line $(b_1, b_2, t)$ lands on the same point, so $T$ is not one-to-one. In pivot language: the $2 \\times 3$ matrix has a pivot in every row, but column 3 has none.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'concept',
      title: 'Worked examples, and a game connection',
      blocks: [
        {
          type: 'derivation',
          title: 'Is $T(x_1, x_2) = (3x_1 + x_2,\\; 5x_1 + 7x_2,\\; x_1 + 3x_2)$ one-to-one? onto?',
          steps: [
            { tex: `A = ${mat([3, 1], [5, 7], [1, 3])}`, why: 'Read the coefficients row by row. $A$ is $3 \\times 2$, so $T: \\mathbb{R}^2 \\to \\mathbb{R}^3$.' },
            { tex: '\\text{columns } (3, 5, 1), (1, 7, 3) \\text{ are not multiples}', why: 'The ratios $3/1$, $5/7$, $1/3$ are different. Two vectors that are not multiples are independent.' },
            { tex: '\\implies T \\text{ is one-to-one}', why: 'Independent columns $\\iff$ one-to-one.' },
            { tex: '\\text{at most } 2 \\text{ pivots for } 3 \\text{ rows} \\implies T \\text{ is not onto}', why: 'Some row of the echelon form has no pivot, so the two columns span only a plane in $\\mathbb{R}^3$.' },
          ],
          result: 'One-to-one, not onto. The range is a plane through the origin in $\\mathbb{R}^3$.',
        },
        {
          type: 'derivation',
          title: `$T(\\mathbf{x}) = A\\mathbf{x}$ with $A = ${mat([1, -4, 8, 1], [0, 2, -1, 3], [0, 0, 0, 5])}$`,
          steps: [
            { tex: 'T: \\mathbb{R}^4 \\to \\mathbb{R}^3', why: '$A$ has $4$ columns and $3$ rows.' },
            { tex: '\\text{pivots: } 1,\\; 2,\\; 5 \\text{ (rows 1, 2, 3)}', why: '$A$ is already in echelon form. Each row has a leading entry, in columns $1$, $2$ and $4$.' },
            { tex: '\\implies T \\text{ is onto } \\mathbb{R}^3', why: 'A pivot in every row means $A\\mathbf{x} = \\mathbf{b}$ is consistent for every $\\mathbf{b}$.' },
            { tex: '\\text{column 3 has no pivot} \\implies T \\text{ is not one-to-one}', why: '$x_3$ is free, so $A\\mathbf{x} = \\mathbf{0}$ has nontrivial solutions. (We knew it already: $4$ vectors in $\\mathbb{R}^3$ are dependent.)' },
          ],
          result: 'Onto, not one-to-one.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Why mouse picking returns a ray',
          text: 'Rendering projects a 3D scene onto a 2D screen. That projection is like $T(x_1, x_2, x_3) = (x_1, x_2)$: onto, but not one-to-one, since an entire line of 3D points lands on the same pixel. So when the player clicks a pixel, the game cannot invert the projection to get *one* 3D point. It gets the whole preimage, a ray, and casts it into the scene to find the first object hit. Information lost by a map that is not one-to-one cannot be recovered.',
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'Expect "is $T$ one-to-one? onto? justify". The justification graders want is a pivot argument: "the echelon form has a pivot in every column, so the columns are independent, so $T$ is one-to-one". Size arguments ($n > m$ rules out one-to-one, $n < m$ rules out onto) count too, but say them explicitly.',
        },
      ],
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'truefalse',
      prompt: 'A linear transformation $T: \\mathbb{R}^3 \\to \\mathbb{R}^4$ can be onto $\\mathbb{R}^4$ if its standard matrix is chosen well.',
      answer: false,
      explanation: 'The standard matrix is $4 \\times 3$. Each pivot uses its own column, so there are at most $3$ pivots, and at least one of the $4$ rows has none. Three vectors can span at most a 3-dimensional piece of $\\mathbb{R}^4$. Such a $T$ *can* be one-to-one, but never onto.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'numeric',
      prompt: `For which value of $k$ is $T(\\mathbf{x}) = ${mat([1, 2], [3, 'k'])}\\mathbf{x}$ **not** one-to-one?`,
      hint: 'Row reduce and find when column 2 loses its pivot.',
      label: '$k =$',
      answer: '6',
      explanation: `$${mat([1, 2], [3, 'k'])} \\xrightarrow{R_2 - 3R_1} ${mat([1, 2], [0, 'k - 6'])}$. Column 2 is a pivot column unless $k - 6 = 0$. At $k = 6$ the second column $(2, 6)$ is $2$ times the first, the columns are dependent, and for example $T(2, -1) = \\mathbf{0} = T(\\mathbf{0})$. For a square matrix that is also exactly when $T$ fails to be onto.`,
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'order',
      prompt: 'Order the steps of the proof that every linear $T: \\mathbb{R}^n \\to \\mathbb{R}^m$ is a matrix transformation.',
      lines: [
        'Write $\\mathbf{x} = x_1\\mathbf{e}_1 + \\cdots + x_n\\mathbf{e}_n$',
        'Apply $T$ to both sides: $T(\\mathbf{x}) = T(x_1\\mathbf{e}_1 + \\cdots + x_n\\mathbf{e}_n)$',
        'Use linearity: $T(\\mathbf{x}) = x_1T(\\mathbf{e}_1) + \\cdots + x_nT(\\mathbf{e}_n)$',
        'Recognise a matrix–vector product: $T(\\mathbf{x}) = [T(\\mathbf{e}_1) \\; \\cdots \\; T(\\mathbf{e}_n)]\\,\\mathbf{x}$',
      ],
      distractors: ['Since $T(\\mathbf{0}) = \\mathbf{0}$, conclude that $T(\\mathbf{x}) = A\\mathbf{x}$'],
      explanation: 'Decompose the input along the standard basis, push $T$ through the combination using linearity, and recognise the result as the columns $T(\\mathbf{e}_j)$ weighted by $x_j$. The distractor uses a consequence of linearity that is far too weak: many nonlinear maps also fix $\\mathbf{0}$.',
    },
  ],
  takeaways: [
    'A linear map is determined by the images of the standard basis vectors: $T(\\mathbf{x}) = x_1T(\\mathbf{e}_1) + \\cdots + x_nT(\\mathbf{e}_n)$.',
    'Every linear $T: \\mathbb{R}^n \\to \\mathbb{R}^m$ is $\\mathbf{x} \\mapsto A\\mathbf{x}$ for exactly one $m \\times n$ matrix, the standard matrix $A = [T(\\mathbf{e}_1) \\; \\cdots \\; T(\\mathbf{e}_n)]$. Images go in as columns, not rows.',
    'To get $A$ from a picture, ask where each $\\mathbf{e}_j$ goes; from a formula, the coefficients of output $i$ form row $i$.',
    'Onto: every $\\mathbf{b}$ is hit at least once $\\iff$ columns span $\\mathbb{R}^m$ $\\iff$ pivot in every row.',
    'One-to-one: every $\\mathbf{b}$ is hit at most once $\\iff$ $T(\\mathbf{x}) = \\mathbf{0}$ only for $\\mathbf{x} = \\mathbf{0}$ $\\iff$ columns independent $\\iff$ pivot in every column.',
    'A wide matrix ($n > m$) is never one-to-one; a tall one ($n < m$) is never onto.',
  ],
  reading: [
    {
      title: 'Interactive Linear Algebra (Margalit & Rabinoff)',
      url: 'https://textbooks.math.gatech.edu/ila/',
      source: 'book',
      note: 'See the sections on the matrix of a linear transformation and on one-to-one and onto transformations, with many pictures of each case.',
    },
    {
      title: '3Blue1Brown — Essence of linear algebra',
      url: 'https://www.3blue1brown.com/topics/linear-algebra',
      source: 'video',
      note: 'The "Linear transformations and matrices" chapter is the visual version of the theorem $A = [T(\\mathbf{e}_1) \\; T(\\mathbf{e}_2)]$.',
    },
    {
      title: 'Wikipedia — Transformation matrix',
      url: 'https://en.wikipedia.org/wiki/Transformation_matrix',
      source: 'wikipedia',
      note: 'How to find the matrix of a linear map, with a gallery of standard 2D examples.',
    },
    {
      title: 'Wikipedia — Bijection, injection and surjection',
      url: 'https://en.wikipedia.org/wiki/Bijection,_injection_and_surjection',
      source: 'wikipedia',
      note: 'The general-function vocabulary behind one-to-one (injective) and onto (surjective), with arrow diagrams.',
    },
  ],
};
