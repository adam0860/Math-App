import type { Lesson } from '../../types';

/** Column vector in TeX: col(1, 2, 3). */
const col = (...e: (string | number)[]) => `\\begin{bmatrix} ${e.join(' \\\\ ')} \\end{bmatrix}`;
/** Matrix in TeX from rows: mat([1, 2], [3, 4]). */
const mat = (...rows: (string | number)[][]) => `\\begin{bmatrix} ${rows.map((r) => r.join(' & ')).join(' \\\\ ')} \\end{bmatrix}`;

export const lesson: Lesson = {
  id: 'la-linear-independence',
  title: 'Linear Independence',
  summary: 'When does every vector in a set pull its weight? The homogeneous equation, pivot columns, and the geometry of redundancy.',
  minutes: 19,
  objectives: [
    'State the definition of linear independence using the equation $x_1\\mathbf{v}_1 + \\dots + x_p\\mathbf{v}_p = \\mathbf{0}$',
    'Decide independence by row reducing $[\\mathbf{v}_1 \\; \\cdots \\; \\mathbf{v}_p]$ and checking that every column is a pivot column',
    'Find an explicit linear dependence relation when a set is dependent',
    'Use the shortcuts: one or two vectors, more vectors than entries, sets containing $\\mathbf{0}$',
    'Explain dependence as "some vector is a combination of the others" and picture it in $\\mathbb{R}^2$ and $\\mathbb{R}^3$',
  ],
  steps: [
    // ------------------------------------------------------------------ 0
    {
      kind: 'concept',
      title: 'Redundant vectors',
      blocks: [
        {
          type: 'p',
          text: `In the last two units you asked which vectors a set can *reach*: its [[span]]. Some sets contain dead weight. Take $\\mathbf{v}_1 = ${col(1, 0, 0)}$, $\\mathbf{v}_2 = ${col(0, 1, 0)}$ and $\\mathbf{v}_3 = ${col(1, 1, 0)}$. Since $\\mathbf{v}_3 = \\mathbf{v}_1 + \\mathbf{v}_2$, anything you can build with all three you can already build with $\\mathbf{v}_1$ and $\\mathbf{v}_2$ alone. The span is the $x_1x_2$-plane either way; $\\mathbf{v}_3$ adds nothing.`,
        },
        {
          type: 'p',
          text: 'Checking "is $\\mathbf{v}_1$ a combination of the others? is $\\mathbf{v}_2$? is $\\mathbf{v}_3$?" one vector at a time is clumsy. There is a single symmetric test instead. Move everything to one side: $\\mathbf{v}_1 + \\mathbf{v}_2 - \\mathbf{v}_3 = \\mathbf{0}$. Redundancy shows up as a way to build the [[zero-vector]] **without** using all-zero weights.',
        },
        {
          type: 'definition',
          term: 'Linear independence',
          text: 'An indexed set $\\{\\mathbf{v}_1, \\dots, \\mathbf{v}_p\\}$ in $\\mathbb{R}^n$ is **[[linear-independence|linearly independent]]** if the vector equation\n\n$$x_1\\mathbf{v}_1 + x_2\\mathbf{v}_2 + \\cdots + x_p\\mathbf{v}_p = \\mathbf{0}$$\n\nhas **only** the [[trivial-solution]] $x_1 = x_2 = \\cdots = x_p = 0$. The set is **[[linear-dependence|linearly dependent]]** if there are weights $c_1, \\dots, c_p$, **not all zero**, with $c_1\\mathbf{v}_1 + \\cdots + c_p\\mathbf{v}_p = \\mathbf{0}$. Such an equation is called a [[linear-dependence-relation]].',
        },
        {
          type: 'p',
          text: 'For the example above, $1\\mathbf{v}_1 + 1\\mathbf{v}_2 + (-1)\\mathbf{v}_3 = \\mathbf{0}$ is a linear dependence relation, so the set is dependent. The pair $\\{\\mathbf{v}_1, \\mathbf{v}_2\\}$ on its own is independent: $x_1\\mathbf{v}_1 + x_2\\mathbf{v}_2$ has entries $x_1, x_2, 0$, which are all zero only when $x_1 = x_2 = 0$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why test with the zero vector?',
          text: 'Every set can make $\\mathbf{0}$: use all-zero weights. The question is whether that is the **only** way. And "only one way to make $\\mathbf{0}$" turns out to mean "only one way to make *anything*". Suppose $\\mathbf{b} = c_1\\mathbf{v}_1 + \\cdots + c_p\\mathbf{v}_p$ and also $\\mathbf{b} = d_1\\mathbf{v}_1 + \\cdots + d_p\\mathbf{v}_p$. Subtracting gives $(c_1 - d_1)\\mathbf{v}_1 + \\cdots + (c_p - d_p)\\mathbf{v}_p = \\mathbf{0}$. If the set is independent, every $c_i - d_i = 0$, so the two recipes were identical. Independence is exactly the condition under which each vector in the span has **one** recipe, which is what will let us use a set as a coordinate system later in the course.',
        },
        {
          type: 'callout',
          variant: 'analogy',
          title: 'Paint mixing',
          text: 'If your palette holds red, yellow and orange, the orange is redundant: you could mix it from red and yellow. Worse, a given shade now has many recipes (use orange, or use red plus yellow). A palette of red, yellow and blue has no redundancy: no colour on it can be mixed from the other two.',
        },
      ],
    },
    // ------------------------------------------------------------------ 1
    {
      kind: 'truefalse',
      prompt: 'The set $\\{\\mathbf{v}_1, \\mathbf{v}_2, \\mathbf{v}_3\\}$ is linearly independent because $x_1 = x_2 = x_3 = 0$ is a solution of $x_1\\mathbf{v}_1 + x_2\\mathbf{v}_2 + x_3\\mathbf{v}_3 = \\mathbf{0}$.',
      answer: false,
      explanation: 'All-zero weights solve this equation for **every** set of vectors, dependent or not, so that fact tells you nothing. Independence requires that the trivial solution be the **only** solution. For example, $\\{\\mathbf{v}, 2\\mathbf{v}, \\mathbf{w}\\}$ has the trivial solution and also the nontrivial one $2\\mathbf{v} - 1(2\\mathbf{v}) + 0\\mathbf{w} = \\mathbf{0}$.',
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'concept',
      title: 'Testing independence by row reduction',
      blocks: [
        {
          type: 'p',
          text: 'You already know how to answer "does this equation have only the trivial solution?". The vector equation $x_1\\mathbf{v}_1 + \\cdots + x_p\\mathbf{v}_p = \\mathbf{0}$ is the same as the matrix equation $A\\mathbf{x} = \\mathbf{0}$ with $A = [\\mathbf{v}_1 \\; \\cdots \\; \\mathbf{v}_p]$, because a [[matrix-vector-product]] is a linear combination of the columns. This is a [[homogeneous-system]], and it has nontrivial solutions exactly when it has a [[free-variable]].',
        },
        {
          type: 'theorem',
          name: 'Independence of the columns of a matrix',
          text: 'For an $m \\times n$ matrix $A$, the following are equivalent:\n\n1. The columns of $A$ are linearly independent.\n2. $A\\mathbf{x} = \\mathbf{0}$ has only the trivial solution.\n3. Every column of $A$ is a [[pivot-column]] (there are no free variables).',
        },
        {
          type: 'derivation',
          title: `Is $\\left\\{${col(1, 2, 3)}, ${col(4, 5, 6)}, ${col(2, 1, 0)}\\right\\}$ linearly independent?`,
          steps: [
            { tex: `A = ${mat([1, 4, 2], [2, 5, 1], [3, 6, 0])}`, why: 'Put the vectors in as **columns**. We can skip the augmented column of zeros: row operations never change it.' },
            { tex: `\\xrightarrow[R_3 - 3R_1]{R_2 - 2R_1} ${mat([1, 4, 2], [0, -3, -3], [0, -6, -6])}`, why: 'Clear column 1 below the first pivot. Row 2: $2 - 2(1) = 0$, $5 - 2(4) = -3$, $1 - 2(2) = -3$. Row 3: $3 - 3 = 0$, $6 - 12 = -6$, $0 - 6 = -6$.' },
            { tex: `\\xrightarrow{R_3 - 2R_2} ${mat([1, 4, 2], [0, -3, -3], [0, 0, 0])}`, why: 'Clear column 2 below its pivot $-3$: $-6 - 2(-3) = 0$ in both remaining entries.' },
            { tex: '\\text{pivots in columns } 1, 2 \\text{ only}', why: 'The matrix is now in [[echelon-form]]. Column 3 has no pivot, so $x_3$ is a free variable.' },
            { tex: '\\implies \\text{linearly dependent}', why: 'A free variable means infinitely many solutions of $A\\mathbf{x} = \\mathbf{0}$, so nontrivial ones exist.' },
          ],
          result: 'The set is linearly dependent. Echelon form was enough to decide; we never had to finish the reduction.',
        },
        {
          type: 'p',
          text: 'To find an actual dependence relation, finish to [[reduced-echelon-form]] and read off the solutions of $A\\mathbf{x} = \\mathbf{0}$.',
        },
        {
          type: 'derivation',
          title: 'Finding the dependence relation',
          steps: [
            { tex: `\\xrightarrow{-\\frac{1}{3}R_2} ${mat([1, 4, 2], [0, 1, 1], [0, 0, 0])} \\xrightarrow{R_1 - 4R_2} ${mat([1, 0, -2], [0, 1, 1], [0, 0, 0])}`, why: 'Scale the second pivot to $1$, then clear above it: $4 - 4(1) = 0$ and $2 - 4(1) = -2$.' },
            { tex: 'x_1 = 2x_3, \\qquad x_2 = -x_3, \\qquad x_3 \\text{ free}', why: 'Row 1 says $x_1 - 2x_3 = 0$ and row 2 says $x_2 + x_3 = 0$. Solve for the basic variables.' },
            { tex: 'x_3 = 1: \\quad 2\\mathbf{v}_1 - \\mathbf{v}_2 + \\mathbf{v}_3 = \\mathbf{0}', why: 'Any nonzero value of the free variable gives a nontrivial solution; $x_3 = 1$ keeps the numbers small.' },
            { tex: `2${col(1, 2, 3)} - ${col(4, 5, 6)} + ${col(2, 1, 0)} = ${col('2 - 4 + 2', '4 - 5 + 1', '6 - 6 + 0')} = ${col(0, 0, 0)}`, why: 'Always check a dependence relation by computing it. It takes ten seconds and catches arithmetic slips.' },
          ],
          result: '$2\\mathbf{v}_1 - \\mathbf{v}_2 + \\mathbf{v}_3 = \\mathbf{0}$ is a linear dependence relation.',
        },
        {
          type: 'p',
          text: `Compare an independent set: $${col(1, 1, 0)}, ${col(0, 1, 1)}, ${col(1, 0, 1)}$ row reduces to $${mat([1, 0, 1], [0, 1, -1], [0, 0, 2])}$ (use $R_2 - R_1$, then $R_3 - R_2$). All three columns are pivot columns, so the only solution is the trivial one.`,
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Decide with echelon form, explain with reduced form',
          text: 'To *decide* independence you only need any echelon form: count the pivot columns. You need the reduced echelon form only when the question asks for the dependence relation itself.',
        },
      ],
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'numeric',
      prompt: `For which value of $h$ is the set $\\left\\{${col(1, 2, -1)}, ${col(2, 5, 1)}, ${col(0, 1, 'h')}\\right\\}$ linearly dependent?`,
      hint: 'Row reduce $[\\mathbf{v}_1 \\; \\mathbf{v}_2 \\; \\mathbf{v}_3]$ and look at the last entry of column 3. When is it **not** a pivot?',
      label: '$h =$',
      answer: '3',
      explanation: `Row reduce: $${mat([1, 2, 0], [2, 5, 1], [-1, 1, 'h'])} \\xrightarrow[R_3 + R_1]{R_2 - 2R_1} ${mat([1, 2, 0], [0, 1, 1], [0, 3, 'h'])} \\xrightarrow{R_3 - 3R_2} ${mat([1, 2, 0], [0, 1, 1], [0, 0, 'h - 3'])}$. Column 3 is a pivot column unless $h - 3 = 0$. So the set is dependent exactly when $h = 3$, and independent for every other $h$.`,
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'fill',
      prompt: `The set $\\mathbf{v}_1 = ${col(1, 0, 1)}$, $\\mathbf{v}_2 = ${col(0, 1, 1)}$, $\\mathbf{v}_3 = ${col(2, -3, -1)}$ is linearly dependent. Write $\\mathbf{v}_3$ as a combination of $\\mathbf{v}_1$ and $\\mathbf{v}_2$.`,
      template: '$\\mathbf{v}_3 =$ ___ $\\mathbf{v}_1 \\, +$ ___ $\\mathbf{v}_2$',
      blanks: [{ answers: ['2'] }, { answers: ['-3'] }],
      hint: 'Solve $x_1\\mathbf{v}_1 + x_2\\mathbf{v}_2 = \\mathbf{v}_3$. The first two entries of $\\mathbf{v}_1, \\mathbf{v}_2$ make this quick.',
      explanation: `Row reducing $[\\mathbf{v}_1 \\; \\mathbf{v}_2 \\; \\mathbf{v}_3]$ gives $${mat([1, 0, 2], [0, 1, -3], [0, 0, 0])}$, so $x_1 = -2x_3$ and $x_2 = 3x_3$. With $x_3 = -1$ that says $2\\mathbf{v}_1 - 3\\mathbf{v}_2 - \\mathbf{v}_3 = \\mathbf{0}$, i.e. $\\mathbf{v}_3 = 2\\mathbf{v}_1 - 3\\mathbf{v}_2$. Check: $2${col(1, 0, 1)} - 3${col(0, 1, 1)} = ${col(2, -3, -1)}$.`,
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Sets of one or two vectors',
      blocks: [
        {
          type: 'p',
          text: 'Small sets can be judged at a glance. A single vector $\\{\\mathbf{v}\\}$ is independent exactly when $\\mathbf{v} \\ne \\mathbf{0}$: if $x\\mathbf{v} = \\mathbf{0}$ with $x \\ne 0$, dividing by $x$ forces $\\mathbf{v} = \\mathbf{0}$. Two vectors have an equally clean test.',
        },
        {
          type: 'theorem',
          name: 'Two vectors',
          text: 'A set $\\{\\mathbf{v}_1, \\mathbf{v}_2\\}$ is linearly dependent if and only if one of the vectors is a scalar multiple of the other. Geometrically: if and only if both vectors lie on one line through the origin.',
        },
        {
          type: 'derivation',
          title: 'Why the two-vector test works',
          steps: [
            { tex: 'c_1\\mathbf{v}_1 + c_2\\mathbf{v}_2 = \\mathbf{0}, \\quad (c_1, c_2) \\ne (0, 0)', why: 'Start from a dependence relation: at least one weight is nonzero.' },
            { tex: 'c_1 \\ne 0 \\implies \\mathbf{v}_1 = -\\tfrac{c_2}{c_1}\\,\\mathbf{v}_2', why: 'If $c_1 \\ne 0$, subtract $c_2\\mathbf{v}_2$ and divide by $c_1$. (If instead $c_1 = 0$, then $c_2 \\ne 0$ and the same move gives $\\mathbf{v}_2 = -\\tfrac{c_1}{c_2}\\mathbf{v}_1 = \\mathbf{0} = 0\\,\\mathbf{v}_1$.)' },
            { tex: '\\mathbf{v}_1 = k\\mathbf{v}_2 \\implies 1\\,\\mathbf{v}_1 - k\\,\\mathbf{v}_2 = \\mathbf{0}', why: 'Conversely, a multiple gives a relation whose weight on $\\mathbf{v}_1$ is $1 \\ne 0$, so it is nontrivial.' },
          ],
          result: 'Dependent $\\iff$ one vector is a multiple of the other.',
        },
        {
          type: 'p',
          text: `In the graph, $\\mathbf{u} = ${col(2, 1)}$ is fixed and $\\mathbf{w} = ${col(1, 'k')}$ moves with the slider. Row reducing $${mat([2, 1], [1, 'k'])}$ with $R_2 - \\tfrac{1}{2}R_1$ leaves a second pivot of $k - \\tfrac{1}{2}$. Slide $k$ to $0.5$ and watch the two dashed lines (the spans) merge.`,
        },
        {
          type: 'graph',
          x: [-4, 4],
          y: [-3, 4],
          equal: true,
          functions: [
            { expr: 'x/2', label: '$\\operatorname{Span}\\{\\mathbf{u}\\}$', color: 'blue', dashed: true },
            { expr: 'k*x', label: '$\\operatorname{Span}\\{\\mathbf{w}\\}$', color: 'red', dashed: true },
          ],
          segments: [
            { from: [0, 0], to: [2, 1], arrow: true, label: 'u', color: 'blue' },
            { from: [0, 0], to: [1, 'k'], arrow: true, label: 'w', color: 'red' },
          ],
          sliders: [{ name: 'k', min: -2, max: 3, step: 0.25, value: 2, label: '$k$ (second entry of $\\mathbf{w}$)' }],
          readouts: [{ label: 'second pivot $k - \\tfrac{1}{2} =$', expr: 'k - 0.5', digits: 2 }],
          caption: 'For $k \\ne \\tfrac{1}{2}$ the vectors point along different lines and are independent; together they span all of $\\mathbb{R}^2$. At $k = \\tfrac{1}{2}$, $\\mathbf{u} = 2\\mathbf{w}$: the pivot vanishes, the lines coincide and the set is dependent.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'The "multiple" test is only for two vectors',
          text: 'With three or more vectors, "no vector is a multiple of another" does **not** imply independence. In the row-reduction example, none of $(1, 2, 3)$, $(4, 5, 6)$, $(2, 1, 0)$ is a multiple of another, yet $2\\mathbf{v}_1 - \\mathbf{v}_2 + \\mathbf{v}_3 = \\mathbf{0}$. Dependence can involve three vectors at once.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'mcq',
      prompt: 'Which of these sets is linearly dependent?',
      options: [
        {
          text: `$\\left\\{${col(1, 2)}, ${col(2, 1)}\\right\\}$`,
          why: 'Neither is a multiple of the other ($2/1 \\ne 1/2$), so by the two-vector test the set is independent.',
        },
        {
          text: `$\\left\\{${col(3, 1, 2)}\\right\\}$`,
          why: 'A single **nonzero** vector is always independent: $x\\mathbf{v} = \\mathbf{0}$ forces $x = 0$.',
        },
        {
          text: `$\\left\\{${col(2, -4)}, ${col(-3, 6)}\\right\\}$`,
          correct: true,
          why: 'The second vector is $-\\tfrac{3}{2}$ times the first: $-\\tfrac{3}{2}(2, -4) = (-3, 6)$. Then $3\\mathbf{v}_1 + 2\\mathbf{v}_2 = \\mathbf{0}$ is a dependence relation.',
        },
        {
          text: `$\\left\\{${col(1, 0, 0)}, ${col(0, 1, 0)}, ${col(0, 0, 1)}\\right\\}$`,
          why: 'These are the columns of $I_3$; every column is a pivot column, so they are independent.',
        },
      ],
      explanation: 'For two vectors, compare entry ratios: $\\frac{-3}{2} = \\frac{6}{-4} = -1.5$, so $(-3, 6)$ is a multiple of $(2, -4)$ and both lie on the line $y = -2x$. The other sets either fail the multiple test or are visibly in echelon form with a pivot in every column.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'Two shortcuts: too many vectors, or a zero vector',
      blocks: [
        {
          type: 'p',
          text: 'Two situations force dependence before you do any arithmetic. Both follow from counting pivots.',
        },
        {
          type: 'theorem',
          name: 'More vectors than entries',
          text: 'If a set contains more vectors than there are entries in each vector, that is $p > n$ for $\\mathbf{v}_1, \\dots, \\mathbf{v}_p$ in $\\mathbb{R}^n$, then the set is linearly dependent.',
        },
        {
          type: 'derivation',
          title: 'Proof by counting pivots',
          steps: [
            { tex: 'A = [\\mathbf{v}_1 \\; \\cdots \\; \\mathbf{v}_p] \\text{ is } n \\times p', why: 'Each vector has $n$ entries, so $A$ has $n$ rows and $p$ columns.' },
            { tex: '\\#\\text{pivots} \\le n', why: 'In an echelon form each pivot sits in its own row, and there are only $n$ rows.' },
            { tex: '\\#\\text{non-pivot columns} \\ge p - n > 0', why: 'There are $p$ columns but at most $n$ of them can hold pivots.' },
            { tex: '\\implies A\\mathbf{x} = \\mathbf{0} \\text{ has a free variable}', why: 'Each non-pivot column gives a free variable, hence nontrivial solutions, hence dependence.' },
          ],
          result: 'Any $3$ vectors in $\\mathbb{R}^2$, any $4$ in $\\mathbb{R}^3$, any $101$ in $\\mathbb{R}^{100}$ are dependent.',
        },
        {
          type: 'p',
          text: `In $\\mathbb{R}^2$ you can see it. Take $\\mathbf{u} = ${col(2, 1)}$ and $\\mathbf{v} = ${col(-1, 2)}$, which are independent. Move a third vector $\\mathbf{w}$ anywhere with the sliders. The graph always finds weights with $\\mathbf{w} = c_1\\mathbf{u} + c_2\\mathbf{v}$ (the tip-to-tail path), so $c_1\\mathbf{u} + c_2\\mathbf{v} - \\mathbf{w} = \\mathbf{0}$ is a dependence relation.`,
        },
        {
          type: 'graph',
          x: [-5, 5],
          y: [-4, 5],
          equal: true,
          segments: [
            { from: [0, 0], to: [2, 1], arrow: true, label: 'u', color: 'blue' },
            { from: [0, 0], to: [-1, 2], arrow: true, label: 'v', color: 'green' },
            { from: [0, 0], to: ['2(2a + b)/5', '(2a + b)/5'], color: 'blue', dashed: true, label: 'c₁u' },
            { from: ['2(2a + b)/5', '(2a + b)/5'], to: ['a', 'b'], color: 'green', dashed: true, label: 'c₂v' },
            { from: [0, 0], to: ['a', 'b'], arrow: true, label: 'w', color: 'red' },
          ],
          sliders: [
            { name: 'a', min: -4, max: 4, step: 0.5, value: 3, label: 'first entry of $\\mathbf{w}$' },
            { name: 'b', min: -3, max: 4, step: 0.5, value: 3, label: 'second entry of $\\mathbf{w}$' },
          ],
          readouts: [
            { label: '$c_1 =$', expr: '(2a + b)/5', digits: 2 },
            { label: '$c_2 =$', expr: '(2b - a)/5', digits: 2 },
          ],
          caption: 'Wherever $\\mathbf{w}$ goes, it is $c_1\\mathbf{u} + c_2\\mathbf{v}$: two independent vectors already span $\\mathbb{R}^2$, so a third one is always redundant.',
        },
        {
          type: 'theorem',
          name: 'Sets containing the zero vector',
          text: 'If a set $\\{\\mathbf{v}_1, \\dots, \\mathbf{v}_p\\}$ contains $\\mathbf{0}$, it is linearly dependent. Proof: if $\\mathbf{v}_1 = \\mathbf{0}$, then $1\\mathbf{v}_1 + 0\\mathbf{v}_2 + \\cdots + 0\\mathbf{v}_p = \\mathbf{0}$, and the weight $1$ makes it nontrivial.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'The converse of the counting theorem is false',
          text: 'If $p \\le n$, the set *might* be independent, but nothing is guaranteed. $(1, 2, 3)$ and $(2, 4, 6)$ are only two vectors in $\\mathbb{R}^3$, and they are dependent. Having few vectors never proves independence; you still have to check.',
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'A favourite exam question lists four or five sets and asks which are dependent "without row reduction". Run the checklist: does it contain $\\mathbf{0}$? Is $p > n$? Is it two vectors that are multiples? Only if all three answers are no do you need to row reduce.',
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'truefalse',
      prompt: 'Any set of four vectors in $\\mathbb{R}^3$ is linearly dependent, no matter what the vectors are.',
      answer: true,
      explanation: 'Here $p = 4 > n = 3$. The matrix $[\\mathbf{v}_1 \\; \\mathbf{v}_2 \\; \\mathbf{v}_3 \\; \\mathbf{v}_4]$ is $3 \\times 4$, so it has at most $3$ pivots and at least one free variable. A nontrivial solution of $A\\mathbf{x} = \\mathbf{0}$ always exists, even if the vectors look "random".',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'concept',
      title: 'Dependence means one vector is built from the others',
      blocks: [
        {
          type: 'p',
          text: 'The definition uses the zero vector, but the idea we started with was redundancy. The next theorem says the two match exactly, and it adds a sharper "first offender" version that is useful in proofs.',
        },
        {
          type: 'theorem',
          name: 'Characterization of linearly dependent sets',
          text: 'An indexed set $S = \\{\\mathbf{v}_1, \\dots, \\mathbf{v}_p\\}$ of two or more vectors is linearly dependent if and only if at least one vector in $S$ is a linear combination of the others. In fact, if $S$ is dependent and $\\mathbf{v}_1 \\ne \\mathbf{0}$, then some $\\mathbf{v}_j$ with $j > 1$ is a linear combination of the **preceding** vectors $\\mathbf{v}_1, \\dots, \\mathbf{v}_{j-1}$.',
        },
        {
          type: 'derivation',
          title: 'Proof',
          steps: [
            { tex: '\\mathbf{v}_j = \\textstyle\\sum_{i \\ne j} c_i\\mathbf{v}_i \\implies \\sum_{i \\ne j} c_i\\mathbf{v}_i + (-1)\\mathbf{v}_j = \\mathbf{0}', why: '($\\Leftarrow$) If some vector is a combination of the others, subtract it. The weight $-1$ on $\\mathbf{v}_j$ is nonzero, so this is a dependence relation.' },
            { tex: 'c_1\\mathbf{v}_1 + \\cdots + c_p\\mathbf{v}_p = \\mathbf{0}, \\text{ not all } c_i = 0', why: '($\\Rightarrow$) Start from a dependence relation.' },
            { tex: 'j = \\text{largest index with } c_j \\ne 0', why: 'Every weight after position $j$ is zero, so the relation really reads $c_1\\mathbf{v}_1 + \\cdots + c_j\\mathbf{v}_j = \\mathbf{0}$.' },
            { tex: 'j = 1 \\text{ is impossible}', why: 'It would say $c_1\\mathbf{v}_1 = \\mathbf{0}$ with $c_1 \\ne 0$, forcing $\\mathbf{v}_1 = \\mathbf{0}$, which we assumed is not the case. So $j > 1$.' },
            { tex: '\\mathbf{v}_j = -\\frac{c_1}{c_j}\\mathbf{v}_1 - \\cdots - \\frac{c_{j-1}}{c_j}\\mathbf{v}_{j-1}', why: 'Move the other terms across and divide by $c_j \\ne 0$. This writes $\\mathbf{v}_j$ in terms of the vectors before it, proving both statements.' },
          ],
        },
        {
          type: 'p',
          text: 'For the earlier relation $2\\mathbf{v}_1 - \\mathbf{v}_2 + \\mathbf{v}_3 = \\mathbf{0}$, every vector can be solved for: $\\mathbf{v}_3 = -2\\mathbf{v}_1 + \\mathbf{v}_2$, $\\mathbf{v}_2 = 2\\mathbf{v}_1 + \\mathbf{v}_3$, $\\mathbf{v}_1 = \\tfrac{1}{2}\\mathbf{v}_2 - \\tfrac{1}{2}\\mathbf{v}_3$. You can solve for a vector exactly when its weight in the relation is nonzero.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why this matters: deleting a redundant vector keeps the span',
          text: 'If $\\mathbf{v}_j$ is a combination of the others, then any combination that uses $\\mathbf{v}_j$ can be rewritten without it: substitute its formula and collect terms. So removing $\\mathbf{v}_j$ leaves the span unchanged. Repeating this until no redundancy remains produces an independent set with the same span. That process is how a **basis** is built in a later unit.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'At least one, not every one',
          text: `The theorem does not say *every* vector in a dependent set is a combination of the others. In $\\left\\{${col(1, 0)}, ${col(2, 0)}, ${col(0, 1)}\\right\\}$ the first two are multiples, so the set is dependent, but $${col(0, 1)}$ is not a combination of $${col(1, 0)}$ and $${col(2, 0)}$, whose combinations all have second entry $0$.`,
        },
      ],
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'error',
      prompt: 'A student tests $\\mathbf{v}_1 = (1, 2, 0)$, $\\mathbf{v}_2 = (3, 1, 1)$, $\\mathbf{v}_3 = (4, 3, 1)$ (as column vectors) for independence. Tap the first line that is wrong.',
      lines: [
        `$A = ${mat([1, 3, 4], [2, 1, 3], [0, 1, 1])}$`,
        `$\\xrightarrow{R_2 - 2R_1} ${mat([1, 3, 4], [0, -5, -3], [0, 1, 1])}$`,
        `$\\xrightarrow{R_3 + \\frac{1}{5}R_2} ${mat([1, 3, 4], [0, -5, -3], [0, 0, '\\tfrac{2}{5}'])}$`,
        'Three pivot columns, so the set is linearly independent.',
      ],
      errorLines: [2],
      explanation: `In line 2 the third entry of row 2 should be $3 - 2(4) = -5$, not $-3$. With the correct row $(0, -5, -5)$, the step $R_3 + \\tfrac{1}{5}R_2$ gives $(0, 0, 0)$, so column 3 has no pivot and the set is **dependent**. Indeed $\\mathbf{v}_3 = \\mathbf{v}_1 + \\mathbf{v}_2$: $(1 + 3, 2 + 1, 0 + 1) = (4, 3, 1)$. Lines 3 and 4 follow correctly from the wrong matrix, which is why one slip can flip the conclusion.`,
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'The geometric picture in $\\mathbb{R}^3$',
      blocks: [
        {
          type: 'p',
          text: 'In $\\mathbb{R}^3$, independence is about how many genuinely different directions a set contains. A nonzero vector spans a line through the origin. Two independent vectors span a plane through the origin. A third vector adds a new direction only if it sticks **out** of that plane.',
        },
        {
          type: 'table',
          headers: ['Set in $\\mathbb{R}^3$', 'Independent when…', 'Dependent picture'],
          rows: [
            ['$\\{\\mathbf{v}_1\\}$', '$\\mathbf{v}_1 \\ne \\mathbf{0}$', 'the zero vector'],
            ['$\\{\\mathbf{v}_1, \\mathbf{v}_2\\}$', 'not on one line through $\\mathbf{0}$', 'both on one line (parallel or zero)'],
            ['$\\{\\mathbf{v}_1, \\mathbf{v}_2, \\mathbf{v}_3\\}$', 'not all in one plane through $\\mathbf{0}$', 'all three in one plane (or line)'],
            ['$4$ or more vectors', 'never', 'always dependent ($p > 3$)'],
          ],
        },
        {
          type: 'p',
          text: 'Precisely: if $\\{\\mathbf{v}_1, \\mathbf{v}_2\\}$ is independent, then $\\{\\mathbf{v}_1, \\mathbf{v}_2, \\mathbf{v}_3\\}$ is dependent if and only if $\\mathbf{v}_3$ lies in the plane $\\operatorname{Span}\\{\\mathbf{v}_1, \\mathbf{v}_2\\}$. That is the characterization theorem again: $\\mathbf{v}_3$ is the first vector that is a combination of the ones before it.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Degenerate frames in a game camera',
          text: 'A "look-at" camera builds its right vector as $\\mathbf{r} = \\mathbf{f} \\times \\mathbf{up}$ from the forward direction $\\mathbf{f}$ and the world up $(0, 1, 0)$. You saw that $\\|\\mathbf{a} \\times \\mathbf{b}\\| = \\|\\mathbf{a}\\|\\|\\mathbf{b}\\|\\sin\\theta$, which is $0$ exactly when $\\{\\mathbf{a}, \\mathbf{b}\\}$ is dependent. When the player looks straight up or down, $\\mathbf{f}$ is parallel to up, the cross product is $\\mathbf{0}$, normalising it divides by zero, and the camera spins or fills with NaNs. Engines test for this and switch to a different up vector.',
        },
        {
          type: 'code',
          title: 'dependent.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdio>

struct Vec3 { double x, y, z; };

Vec3 cross(Vec3 a, Vec3 b) {
    return {a.y * b.z - a.z * b.y, a.z * b.x - a.x * b.z, a.x * b.y - a.y * b.x};
}
double length(Vec3 v) { return std::sqrt(v.x * v.x + v.y * v.y + v.z * v.z); }

// {a, b} is dependent exactly when a x b = 0. With floats, "zero" needs a tolerance.
bool nearlyDependent(Vec3 a, Vec3 b, double eps = 1e-6) {
    return length(cross(a, b)) <= eps * length(a) * length(b);
}

int main() {
    const Vec3 up{0, 1, 0};
    const Vec3 forwards[] = {{0, 0, -1}, {0.6, 0, -0.8}, {0, -1, 0}, {1e-9, 1, 0}};
    for (Vec3 f : forwards) {
        std::printf("forward (%g, %g, %g): %s\\n", f.x, f.y, f.z,
                    nearlyDependent(f, up) ? "parallel to up, pick another up" : "ok");
    }
}`,
          output: `forward (0, 0, -1): ok
forward (0.6, 0, -0.8): ok
forward (0, -1, 0): parallel to up, pick another up
forward (1e-09, 1, 0): parallel to up, pick another up`,
          annotations: [
            { lines: '6-8', text: 'The cross product from the earlier vectors unit.' },
            { lines: '12-14', text: 'Compare against $\\varepsilon\\|\\mathbf{a}\\|\\|\\mathbf{b}\\|$, which tests $\\sin\\theta \\le \\varepsilon$ and so does not depend on how long the vectors are.' },
            { lines: 18, text: 'The last forward vector is not *exactly* parallel to up, but it is close enough to make the frame numerically useless.' },
          ],
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Independence in floating point',
          text: 'Exact arithmetic gives a yes-or-no answer. Floating point does not: a pivot of $10^{-15}$ is probably a zero polluted by rounding. Numerical libraries decide independence with a tolerance, using tools you will meet at the end of the course (the singular value decomposition). In ML the same issue appears as *multicollinearity*: features that are nearly combinations of each other make a regression unstable.',
        },
      ],
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'mcq',
      prompt: '$\\mathbf{v}_1$ and $\\mathbf{v}_2$ in $\\mathbb{R}^3$ are linearly independent. Exactly when is $\\{\\mathbf{v}_1, \\mathbf{v}_2, \\mathbf{v}_3\\}$ linearly dependent?',
      options: [
        {
          text: 'When $\\mathbf{v}_3$ is a multiple of $\\mathbf{v}_1$ or of $\\mathbf{v}_2$',
          why: 'That makes the set dependent, but it is not the only way. $\\mathbf{v}_3 = \\mathbf{v}_1 + \\mathbf{v}_2$ is a multiple of neither and still makes the set dependent.',
        },
        {
          text: 'When $\\mathbf{v}_3$ lies in the plane $\\operatorname{Span}\\{\\mathbf{v}_1, \\mathbf{v}_2\\}$',
          correct: true,
          why: 'Since $\\mathbf{v}_1 \\ne \\mathbf{0}$ and $\\mathbf{v}_2$ is not a multiple of $\\mathbf{v}_1$, the first vector that is a combination of earlier ones must be $\\mathbf{v}_3$. That means $\\mathbf{v}_3 \\in \\operatorname{Span}\\{\\mathbf{v}_1, \\mathbf{v}_2\\}$.',
        },
        {
          text: 'When $\\mathbf{v}_3$ is perpendicular to both $\\mathbf{v}_1$ and $\\mathbf{v}_2$',
          why: 'A nonzero vector perpendicular to the plane points straight **out** of it. That is the most independent choice possible.',
        },
        {
          text: 'Never, since $3$ vectors in $\\mathbb{R}^3$ are always independent',
          why: 'The counting theorem only forces dependence when $p > n$. With $p = n = 3$ either outcome can happen.',
        },
      ],
      explanation: 'By the characterization theorem, a dependent set with $\\mathbf{v}_1 \\ne \\mathbf{0}$ has some vector that is a combination of the vectors before it. It cannot be $\\mathbf{v}_2$ (that would make $\\{\\mathbf{v}_1, \\mathbf{v}_2\\}$ dependent), so it is $\\mathbf{v}_3$. Conversely, if $\\mathbf{v}_3 = a\\mathbf{v}_1 + b\\mathbf{v}_2$, then $a\\mathbf{v}_1 + b\\mathbf{v}_2 - \\mathbf{v}_3 = \\mathbf{0}$. Geometrically: three vectors are dependent when they are coplanar.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'order',
      prompt: 'Put the steps for testing $\\{\\mathbf{v}_1, \\dots, \\mathbf{v}_p\\}$ and, if it is dependent, finding a dependence relation in order.',
      lines: [
        'Form $A = [\\mathbf{v}_1 \\; \\cdots \\; \\mathbf{v}_p]$ with the vectors as columns',
        'Row reduce $A$ to an echelon form',
        'Check whether every column is a pivot column (if yes, stop: independent)',
        'Continue to reduced echelon form and write the basic variables in terms of the free ones',
        'Choose a nonzero value for a free variable to get the weights of a dependence relation',
      ],
      distractors: ['Check whether the augmented column of zeros is a pivot column'],
      explanation: 'Columns first, then echelon form to *decide*, then reduced form only if you need the relation itself. The distractor is the consistency test for $A\\mathbf{x} = \\mathbf{b}$; a column of zeros is never a pivot column, so a homogeneous system is always consistent, and that test says nothing about independence.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'numeric',
      prompt: 'Five vectors in $\\mathbb{R}^3$ are placed as the columns of a $3 \\times 5$ matrix $A$. What is the **smallest** possible number of free variables in $A\\mathbf{x} = \\mathbf{0}$?',
      hint: 'How many pivots can a matrix with $3$ rows have at most?',
      label: 'free variables $\\ge$',
      answer: '2',
      explanation: 'An echelon form of $A$ has at most one pivot per row, so at most $3$ pivots. With $5$ columns, at least $5 - 3 = 2$ columns are not pivot columns, giving at least $2$ free variables. (Exactly $2$ happens when the vectors span $\\mathbb{R}^3$.) So the set is dependent, and there is in fact a two-parameter family of dependence relations.',
    },
  ],
  takeaways: [
    '$\\{\\mathbf{v}_1, \\dots, \\mathbf{v}_p\\}$ is linearly independent when $x_1\\mathbf{v}_1 + \\cdots + x_p\\mathbf{v}_p = \\mathbf{0}$ has only the trivial solution; otherwise a nontrivial solution is a linear dependence relation.',
    'The columns of $A$ are independent $\\iff$ $A\\mathbf{x} = \\mathbf{0}$ has only the trivial solution $\\iff$ every column of $A$ is a pivot column.',
    'One vector: independent iff nonzero. Two vectors: dependent iff one is a multiple of the other (they share a line through $\\mathbf{0}$).',
    'More vectors than entries ($p > n$) forces dependence, and so does containing $\\mathbf{0}$. Few vectors never guarantees independence.',
    'A set of two or more vectors is dependent iff some vector is a combination of the others; removing such a vector does not change the span.',
    'Independence means every vector in the span has exactly one recipe, which is what makes a set usable as a coordinate system.',
  ],
  reading: [
    {
      title: 'Interactive Linear Algebra (Margalit & Rabinoff)',
      url: 'https://textbooks.math.gatech.edu/ila/',
      source: 'book',
      note: 'The section on linear independence has interactive 3D demos of vectors inside and outside a plane.',
    },
    {
      title: '3Blue1Brown — Essence of linear algebra',
      url: 'https://www.3blue1brown.com/topics/linear-algebra',
      source: 'video',
      note: 'The chapter on linear combinations, span and basis vectors animates exactly when a new vector adds a new dimension.',
    },
    {
      title: 'Wikipedia — Linear independence',
      url: 'https://en.wikipedia.org/wiki/Linear_independence',
      source: 'wikipedia',
      note: 'Definitions, the geometric meaning, and the connection to determinants and bases.',
    },
    {
      title: "Paul's Online Notes — Linear Algebra",
      url: 'https://tutorial.math.lamar.edu/Classes/LinAlg/LinAlg.aspx',
      source: 'paul',
      note: 'The "Linear Independence" section has extra worked examples in the classic course style.',
    },
  ],
};
