import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'la-linear-systems',
  title: 'Systems of Linear Equations and Augmented Matrices',
  summary: 'Why every linear system has none, one or infinitely many solutions, and why the three row operations can never change the answer.',
  minutes: 17,
  objectives: [
    'Recognise a linear equation in $n$ unknowns and describe a solution as a vector in $\\mathbb{R}^n$',
    'Prove that a linear system has no solution, exactly one, or infinitely many, and picture each case with lines in $\\mathbb{R}^2$ and planes in $\\mathbb{R}^3$',
    'Write the coefficient and augmented matrices of a system with any number of equations and unknowns',
    'Explain why the elementary row operations preserve the solution set, and spot "row operations" that do not',
    'Use row equivalence to decide whether a system is consistent',
  ],
  steps: [
    // ------------------------------------------------------------------ 0
    {
      kind: 'concept',
      title: 'Linear equations in $n$ unknowns',
      blocks: [
        {
          type: 'p',
          text: 'In College Algebra you solved systems in $x$, $y$ and maybe $z$. Linear algebra needs systems with *any* number of unknowns — a skinned character mesh, a cloth simulation or a least-squares fit can easily have thousands. So we stop naming unknowns with letters and number them instead: $x_1, x_2, \\dots, x_n$.',
        },
        {
          type: 'definition',
          term: 'Linear equation',
          text: 'A **linear equation** in the unknowns $x_1, \\dots, x_n$ is one that can be written\n\n$$a_1x_1 + a_2x_2 + \\cdots + a_nx_n = b,$$\n\nwhere the **coefficients** $a_1, \\dots, a_n$ and the right-hand side $b$ are real numbers (usually known in advance). A [[system-of-equations|system of linear equations]] (a *linear system*) is a finite collection of such equations in the same unknowns.',
        },
        {
          type: 'p',
          text: 'Each unknown appears only to the first power, multiplied by a constant, and unknowns are never multiplied together or fed into functions. So $4x_1 - 5x_2 + 2 = x_1$ and $x_2 = 2(\\sqrt{6} - x_1) + x_3$ are linear (rearrange them into the form above), while $4x_1 - 5x_2 = x_1x_2$ and $x_2 = 2\\sqrt{x_1} - 6$ are not.',
        },
        {
          type: 'p',
          text: 'A **solution** of the system is a list of numbers $(s_1, s_2, \\dots, s_n)$ that makes *every* equation true when $s_i$ is substituted for $x_i$. We will treat such a list as a column vector in [[euclidean-space|$\\mathbb{R}^n$]], so a solution is a *point* (or arrow) in $n$-dimensional space. The set of all solutions is the **solution set**, and two systems with the same solution set are called **equivalent**.',
        },
        {
          type: 'math',
          tex: '\\begin{aligned} x_1 - 2x_2 + x_3 &= 0 \\\\ 2x_2 - 8x_3 &= 8 \\\\ 5x_1 - 5x_3 &= 10 \\end{aligned} \\qquad \\text{has the solution} \\qquad \\mathbf{x} = \\begin{bmatrix} 1 \\\\ 0 \\\\ -1 \\end{bmatrix}',
          caption: 'Check: $1 - 0 - 1 = 0$, $\\;0 + 8 = 8$, $\\;5 + 5 = 10$. A solution must satisfy all three equations at once.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why insist on "linear"?',
          text: 'Linear equations are exactly the ones whose left side respects addition and scaling: doubling every $x_i$ doubles $a_1x_1 + \\cdots + a_nx_n$, and the value at a sum is the sum of the values. That one property is what makes the whole machinery of this course work — elimination, the "none, one or infinitely many" theorem on the next card, and later matrices and transformations. Nonlinear systems ($x_1x_2 = 3$, $\\sin x_1 = x_2$) can have exactly two, or seventeen, solutions and need different tools, such as Newton\'s method.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Where big linear systems come from in games',
          text: 'A physics engine resolving a stack of boxes writes one equation per contact; an animation system blending bones writes one per joint; a lightmap baker solves for the brightness of thousands of surface patches at once. Each is $a_1x_1 + \\cdots + a_nx_n = b$ repeated many times — which is why numbering the unknowns (and storing them in an array) beats naming them.',
        },
      ],
    },
    // ------------------------------------------------------------------ 1
    {
      kind: 'mcq',
      prompt: 'Which equation is **linear** in the unknowns $x_1, x_2, x_3$?',
      options: [
        {
          text: '$x_1x_2 + x_3 = 1$',
          why: 'The product $x_1x_2$ multiplies two unknowns together, so the left side is not of the form $a_1x_1 + a_2x_2 + a_3x_3$.',
        },
        {
          text: '$\\sqrt{x_1} + x_2 = 0$',
          why: 'The unknown $x_1$ sits inside a square root. Linear equations only multiply unknowns by constants.',
        },
        {
          text: '$2x_1 - \\sqrt{3}\\,x_2 = x_3 + 4$',
          correct: true,
          why: 'The square root is applied to the *constant* $3$, not to an unknown. Rearranged: $2x_1 - \\sqrt{3}\\,x_2 - x_3 = 4$, with coefficients $2, -\\sqrt{3}, -1$.',
        },
        {
          text: '$\\dfrac{1}{x_1} + x_2 = 3$',
          why: '$\\frac{1}{x_1} = x_1^{-1}$ is a power other than $1$, so this is not linear (and $x_1 = 0$ is not even allowed).',
        },
      ],
      explanation: 'An equation is linear when, after moving everything to one side, each unknown appears only to the first power multiplied by a constant. Irrational *coefficients* like $\\sqrt{3}$ are fine; the restriction is on how the *unknowns* appear.',
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'concept',
      title: 'None, one, or infinitely many',
      blocks: [
        {
          type: 'p',
          text: 'A linear equation in two unknowns is a line in $\\mathbb{R}^2$, and a solution of a system of two such equations is a point on both lines. Two lines can cross once, be parallel, or coincide. Drag the sliders and watch all three happen.',
        },
        {
          type: 'graph',
          x: [-5, 5],
          y: [-4, 5],
          equal: true,
          functions: [
            { expr: '(x + 2)/2', label: '$x_1 - 2x_2 = -2$', color: 'blue' },
            { expr: '(a*x - b)/2', label: '$a x_1 - 2x_2 = b$', color: 'red' },
          ],
          sliders: [
            { name: 'a', min: -2, max: 4, step: 0.5, value: 3, label: '$a$' },
            { name: 'b', min: -5, max: 5, step: 0.5, value: 2, label: '$b$' },
          ],
          readouts: [
            { label: 'after subtracting: $(a - 1)x_1 = b + 2$, with $a - 1 =$', expr: 'a - 1', digits: 2 },
            { label: '$b + 2 =$', expr: 'b + 2', digits: 2 },
          ],
          caption: 'Horizontal axis $x_1$, vertical axis $x_2$. Set $a = 1$: the lines become parallel. Then set $b = -2$: they coincide. Any $a \\ne 1$ gives exactly one crossing.',
        },
        {
          type: 'p',
          text: 'The readouts show the algebra behind the picture. Subtracting the blue equation from the red one leaves $(a - 1)x_1 = b + 2$. If $a - 1 \\neq 0$ we can divide: one solution. If $a - 1 = 0$ but $b + 2 \\neq 0$, the equation reads $0 = b + 2 \\neq 0$: no solution. If both are $0$, it reads $0 = 0$ and every point of the line works.',
        },
        {
          type: 'definition',
          term: 'Consistent and inconsistent',
          text: 'A system is [[consistent-system|consistent]] if it has at least one solution, and [[inconsistent-system|inconsistent]] if it has none.',
        },
        {
          type: 'theorem',
          name: 'The three possibilities',
          text: 'Every system of linear equations has either **no solution**, **exactly one solution**, or **infinitely many solutions**. It can never have exactly two (or any other finite number greater than one).',
        },
        {
          type: 'derivation',
          title: 'Proof: two solutions force infinitely many',
          steps: [
            { tex: '\\mathbf{p} \\neq \\mathbf{q} \\text{ both solve } a_1x_1 + \\cdots + a_nx_n = b', why: 'Suppose the system has two different solutions. It is enough to look at one equation of the system; the same argument applies to each.' },
            { tex: '\\mathbf{x}_t = \\mathbf{p} + t(\\mathbf{q} - \\mathbf{p}) = (1 - t)\\mathbf{p} + t\\,\\mathbf{q}, \\quad t \\in \\mathbb{R}', why: 'Every point on the line through $\\mathbf{p}$ and $\\mathbf{q}$ — the same parametrisation as `lerp(p, q, t)` in game code.' },
            { tex: '\\sum_{j=1}^{n} a_j\\big((1-t)p_j + t\\,q_j\\big) = (1 - t)\\sum_{j=1}^{n} a_jp_j + t\\sum_{j=1}^{n} a_jq_j', why: 'Substitute the components of $\\mathbf{x}_t$ into the left side and split the sum. This is where linearity is used: no products of unknowns, so the sum distributes.' },
            { tex: '= (1 - t)\\,b + t\\,b = b', why: 'Both $\\mathbf{p}$ and $\\mathbf{q}$ satisfy the equation, so each sum equals $b$.' },
            { tex: '\\mathbf{x}_s \\neq \\mathbf{x}_t \\text{ whenever } s \\neq t', why: '$\\mathbf{x}_s - \\mathbf{x}_t = (s - t)(\\mathbf{q} - \\mathbf{p})$, which is nonzero because $\\mathbf{q} \\neq \\mathbf{p}$. Different values of $t$ give different solutions.' },
          ],
          result: 'Every point of the line through $\\mathbf{p}$ and $\\mathbf{q}$ solves every equation, so there are infinitely many solutions. Hence "more than one" already means "infinitely many".',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why this fails for nonlinear equations',
          text: 'The step "$= (1 - t)b + tb$" needed the left side to split over the combination $(1-t)\\mathbf{p} + t\\mathbf{q}$. For $x_1^2 = 1$, the solutions $1$ and $-1$ exist, but their midpoint $0$ does not solve it. Linearity is exactly what makes the segment between two solutions consist of solutions.',
        },
      ],
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'numeric',
      prompt: 'For which value of $h$ is this system **inconsistent**?',
      tex: '\\begin{aligned} x_1 + 3x_2 &= 2 \\\\ 3x_1 + h\\,x_2 &= 5 \\end{aligned}',
      hint: 'Subtract $3$ times the first equation from the second. When does the result read $0 = $ (something nonzero)?',
      label: '$h =$',
      answer: '9',
      explanation: 'Equation 2 minus $3 \\times$ equation 1 gives $(h - 9)x_2 = 5 - 6 = -1$. If $h \\neq 9$, then $x_2 = \\frac{-1}{h - 9}$ and there is exactly one solution. If $h = 9$, the equation becomes $0 = -1$: no solution. Geometrically, $h = 9$ makes the second line $3x_1 + 9x_2 = 5$ parallel to $x_1 + 3x_2 = 2$ (which is the same as $3x_1 + 9x_2 = 6$) — same slope, different line.',
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'order',
      prompt: 'Put the steps of the proof "two solutions imply infinitely many" in order.',
      lines: [
        'Suppose $\\mathbf{p} \\neq \\mathbf{q}$ are both solutions.',
        'For each real $t$, form $\\mathbf{x}_t = (1 - t)\\mathbf{p} + t\\,\\mathbf{q}$.',
        'Substitute into each equation: the left side becomes $(1 - t)b_i + t\\,b_i$.',
        'That equals $b_i$, so every $\\mathbf{x}_t$ is a solution.',
        'Different $t$ give different $\\mathbf{x}_t$ because $\\mathbf{q} - \\mathbf{p} \\neq \\mathbf{0}$, so there are infinitely many.',
      ],
      distractors: ['Average the two solutions to get the only other solution, $\\frac{1}{2}(\\mathbf{p} + \\mathbf{q})$.'],
      explanation: 'The proof builds the whole line through the two solutions, checks that substitution gives $(1 - t)b_i + tb_i = b_i$ thanks to linearity, and finally checks the points are all different. The midpoint is indeed a solution, but it is only one of infinitely many — the distractor stops far too early.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Planes in $\\mathbb{R}^3$ (and beyond)',
      blocks: [
        {
          type: 'p',
          text: 'One linear equation in three unknowns, $a_1x_1 + a_2x_2 + a_3x_3 = b$ (not all $a_i$ zero), describes a **plane** in $\\mathbb{R}^3$. In the trig course you met the dot product; this equation is $\\mathbf{n} \\cdot \\mathbf{x} = b$ with $\\mathbf{n} = (a_1, a_2, a_3)$ read as a column vector, so $\\mathbf{n}$ is perpendicular to the plane. Solving a $3 \\times 3$ system means finding the points common to three planes.',
        },
        {
          type: 'table',
          headers: ['Picture', 'Common points', 'Everyday model'],
          rows: [
            ['three planes meet at a single point', 'exactly one', 'two walls and the floor at a room corner'],
            ['three planes share a line', 'infinitely many (a line)', 'three pages of an open book, meeting at the spine'],
            ['all three are the same plane', 'infinitely many (a plane)', 'one sheet of paper written down three times'],
            ['two planes are parallel and distinct', 'none', 'floor and ceiling'],
            ['each pair meets, but the three lines of intersection are parallel', 'none', 'a ridge tent: two sloping sides and the ground'],
          ],
          caption: 'The last row is the sneaky one: no two planes are parallel, yet there is no common point.',
        },
        {
          type: 'p',
          text: 'With four or more unknowns we lose the pictures — an equation in $\\mathbb{R}^4$ describes a 3-dimensional "hyperplane" — but nothing in the algebra cares. The theorem from the last card holds in every dimension, and row reduction (next lesson) treats $3$ unknowns and $3000$ the same way.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Three planes in a camera frustum',
          text: 'A camera\'s view volume (the *frustum*) is bounded by six planes $\\mathbf{n}_i \\cdot \\mathbf{x} = d_i$. To draw debug lines or compute shadow-map bounds, an engine finds each corner as the intersection of three planes — for example near, left and top — which is a $3 \\times 3$ linear system. The code must handle the "no single point" cases: if two of the planes are parallel, the system has no unique solution and a naive formula divides by zero.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Counting is not enough',
          text: 'It is tempting to think "$3$ equations, $3$ unknowns, so one solution". The table shows that every outcome is possible with three equations in three unknowns. Whether the equations are *independent* of each other matters, not just how many there are — a theme of the next two units.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'truefalse',
      prompt: 'A system of **two** linear equations in **three** unknowns can have exactly one solution.',
      answer: false,
      explanation: 'Each equation is a plane in $\\mathbb{R}^3$ (assuming its coefficients are not all zero). Two planes are either parallel and distinct (no solution), identical (a whole plane of solutions), or they meet in a line (infinitely many). They never meet in a single point. In general, fewer equations than unknowns can never pin down a unique solution — you will see the algebraic reason (a "free variable" is always left over) two lessons from now.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'Coefficient and augmented matrices',
      blocks: [
        {
          type: 'p',
          text: 'You already know the trick of dropping the letters and keeping the numbers. Let us make the vocabulary precise, because the rest of the course leans on it. A [[matrix]] with $m$ rows and $n$ columns is an $m \\times n$ matrix (rows first, always), and the entry in row $i$, column $j$ is written $a_{ij}$.',
        },
        {
          type: 'definition',
          term: 'Coefficient and augmented matrix',
          text: 'For a system of $m$ equations in $n$ unknowns, the [[coefficient-matrix]] $A$ is the $m \\times n$ matrix whose entry $a_{ij}$ is the coefficient of $x_j$ in equation $i$. The [[augmented-matrix]] is $A$ with the column of right-hand sides attached: an $m \\times (n + 1)$ matrix, written $\\left[\\,A \\mid \\mathbf{b}\\,\\right]$.',
        },
        {
          type: 'math',
          tex: '\\begin{aligned} x_1 - 2x_2 \\phantom{{}+x_3} + 5x_4 &= 7 \\\\ 3x_2 - x_3 + x_4 &= 0 \\\\ 4x_1 \\phantom{{}-2x_2} + x_3 - 6x_4 &= -2 \\end{aligned} \\qquad \\left[\\begin{array}{cccc|c} 1 & -2 & 0 & 5 & 7 \\\\ 0 & 3 & -1 & 1 & 0 \\\\ 4 & 0 & 1 & -6 & -2 \\end{array}\\right]',
          caption: 'Three equations, four unknowns: $A$ is $3 \\times 4$ and the augmented matrix is $3 \\times 5$. Here $a_{14} = 5$ and $a_{32} = 0$ because $x_2$ is missing from equation 3.',
        },
        {
          type: 'p',
          text: 'Two dictionaries to keep in your head: **row $i$ ↔ equation $i$**, and **column $j$ ↔ unknown $x_j$** (the last column of the augmented matrix ↔ the right-hand sides). Column $j$ of $A$ lists everything $x_j$ contributes to each equation; that column-by-column view will become the central idea of the last lesson in this unit.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why carry the right-hand side along',
          text: 'Every manipulation of an equation acts on both sides at once. Keeping $\\mathbf{b}$ glued to $A$ as an extra column means a single operation on rows updates coefficients and constants together, so you can never forget to change one side. Leave it off and you are solving a different problem.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Matrices in memory',
          text: 'Engines rarely use `std::vector<std::vector<double>>` for matrices; they store all $mn$ entries in one flat array. In **row-major** order (C, C++, DirectX conventions) entry $a_{ij}$ lives at index `i * n + j` (zero-based); in **column-major** order (OpenGL, GLSL, Eigen\'s default) it is `j * m + i`. Mixing up the two silently transposes your matrix — a classic graphics bug.',
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'fill',
      prompt: 'Answer these questions about the system below.',
      tex: '\\begin{aligned} 2x_1 + x_3 - x_5 &= 4 \\\\ x_2 - 3x_4 &= 0 \\end{aligned}',
      template: 'The coefficient matrix has ___ rows and ___ columns, the augmented matrix has ___ columns, and the entry $a_{24}$ is ___.',
      blanks: [{ answers: ['2'] }, { answers: ['5'] }, { answers: ['6'] }, { answers: ['-3'] }],
      hint: 'Count equations for rows and unknowns ($x_1$ to $x_5$) for columns. $a_{24}$ is the coefficient of $x_4$ in equation 2.',
      explanation: 'There are $2$ equations and $5$ unknowns, so $A$ is $2 \\times 5$, and adding the right-hand side column makes the augmented matrix $2 \\times 6$: $\\left[\\begin{smallmatrix} 2 & 0 & 1 & 0 & -1 & | & 4 \\\\ 0 & 1 & 0 & -3 & 0 & | & 0 \\end{smallmatrix}\\right]$. Entry $a_{24}$ is row $2$, column $4$: the coefficient of $x_4$ in the second equation, $-3$. Missing unknowns still get a column, filled with zeros.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'concept',
      title: 'Elementary row operations, and why they are safe',
      blocks: [
        {
          type: 'p',
          text: 'Solving a system means replacing it with a simpler *equivalent* system. Three moves are allowed, called the elementary [[row-operations]]. Their standard names are worth learning because textbooks and software use them:',
        },
        {
          type: 'table',
          headers: ['Name', 'Notation', 'Undone by'],
          rows: [
            ['**Replacement**: add a multiple of another row', '$R_i \\to R_i + cR_j$ $(j \\neq i)$', '$R_i \\to R_i - cR_j$'],
            ['**Interchange**: swap two rows', '$R_i \\leftrightarrow R_j$', '$R_i \\leftrightarrow R_j$ again'],
            ['**Scaling**: multiply a row by $c \\neq 0$', '$R_i \\to cR_i$', '$R_i \\to \\frac{1}{c}R_i$'],
          ],
          caption: 'Every elementary row operation is undone by an elementary row operation of the same type.',
        },
        {
          type: 'derivation',
          title: 'Why replacement preserves the solution set',
          steps: [
            { tex: '\\text{old: } \\; E_i: \\; \\textstyle\\sum_k a_{ik}x_k = b_i, \\qquad E_j: \\; \\sum_k a_{jk}x_k = b_j', why: 'Two equations of the old system. The replacement $R_i \\to R_i + cR_j$ changes only equation $i$.' },
            { tex: '\\text{new } E_i\': \\; \\textstyle\\sum_k (a_{ik} + c\\,a_{jk})x_k = b_i + c\\,b_j', why: 'Adding $c$ times row $j$ to row $i$ entry by entry, right-hand side included.' },
            { tex: '\\mathbf{s} \\text{ solves old} \\implies \\textstyle\\sum_k (a_{ik} + c\\,a_{jk})s_k = b_i + c\\,b_j', why: 'Split the sum: $\\sum a_{ik}s_k + c\\sum a_{jk}s_k = b_i + cb_j$. So every old solution satisfies the new system (the other equations did not change).' },
            { tex: '\\text{old } E_i = E_i\' - c\\,E_j', why: 'Row $j$ is still present in the new system, so the operation $R_i \\to R_i - cR_j$ recovers the old row $i$ exactly.' },
            { tex: '\\mathbf{s} \\text{ solves new} \\implies \\mathbf{s} \\text{ solves old}', why: 'Apply the same argument to the reverse operation: every new solution satisfies the old system.' },
          ],
          result: 'Each system\'s solutions solve the other, so the solution sets are equal. The same two-directional argument works for interchange and scaling.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'The real reason: reversibility',
          text: 'Any combination of equations is satisfied by every old solution, so the solution set can only *grow* or stay the same under a row operation. It cannot grow if you can get back: the reverse operation would then have to shrink it. Reversibility is the whole point — and it explains both bans: scaling by $0$ and "replacing" a row with a multiple of *itself* destroy information that no operation can recover.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Do row operations one at a time',
          text: 'Doing $R_1 \\to R_1 - R_2$ and $R_2 \\to R_2 - R_1$ **simultaneously** (each using the *old* rows) turns rows $\\mathbf{r}_1, \\mathbf{r}_2$ into $\\mathbf{r}_1 - \\mathbf{r}_2$ and $\\mathbf{r}_2 - \\mathbf{r}_1$ — one is minus the other, so an equation has been lost and new solutions can appear. Several replacements in one step are fine only when they all add multiples of the same untouched row, as in "$R_2 \\to R_2 - 2R_1$, $R_3 \\to R_3 + R_1$".',
        },
      ],
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'mcq',
      prompt: 'Which operation on the rows of an augmented matrix is **not** guaranteed to preserve the solution set?',
      options: [
        {
          text: '$R_2 \\to R_2 - 5R_1$',
          why: 'An ordinary replacement; it is undone by $R_2 \\to R_2 + 5R_1$.',
        },
        {
          text: '$R_1 \\to R_1 + R_2$ and $R_2 \\to R_2 + R_1$ at the same time, both using the old rows',
          correct: true,
          why: 'The new rows are both $\\mathbf{r}_1 + \\mathbf{r}_2$ — identical. One equation is lost, and the original two cannot be recovered, so the solution set can grow.',
        },
        {
          text: '$R_2 \\to -R_2$',
          why: 'Scaling by $-1 \\neq 0$; undone by scaling by $-1$ again.',
        },
        {
          text: '$R_3 \\to 3R_3 - R_1$',
          why: 'This is scaling $R_3$ by $3$ followed by a replacement — two legal steps in a row. It is safe because the coefficient on $R_3$ itself is nonzero.',
        },
      ],
      explanation: 'An operation preserves the solution set when it can be reversed. Simultaneous replacements that each use the other row are not a sequence of elementary operations: from $\\mathbf{r}_1 + \\mathbf{r}_2$ written twice there is no way back to $\\mathbf{r}_1$ and $\\mathbf{r}_2$. For example, $x_1 = 1,\\ x_2 = 2$ would become $x_1 + x_2 = 3$ twice — a whole line of solutions instead of one point.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'fill',
      prompt: 'Apply $R_3 \\to R_3 - 2R_1$ and type the new row 3.',
      tex: '\\left[\\begin{array}{ccc|c} 1 & -3 & 2 & 4 \\\\ 0 & 1 & 5 & -1 \\\\ 2 & -5 & 7 & 3 \\end{array}\\right]',
      template: 'New $R_3 = [$ ___ $\\;$ ___ $\\;$ ___ $\\mid$ ___ $]$',
      blanks: [{ answers: ['0'] }, { answers: ['1'] }, { answers: ['3'] }, { answers: ['-5'] }],
      hint: 'Compute $2R_1 = [\\,2 \\;\\; {-6} \\;\\; 4 \\mid 8\\,]$, then subtract it from $R_3$ entry by entry — including the last column.',
      explanation: 'Entry by entry: $2 - 2(1) = 0$, $\\;-5 - 2(-3) = 1$, $\\;7 - 2(2) = 3$, and on the right $3 - 2(4) = -5$. So the new row is $[\\,0 \\;\\; 1 \\;\\; 3 \\mid -5\\,]$. The most common slip is forgetting the right-hand column or the sign when subtracting a negative entry.',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'concept',
      title: 'Row equivalence and deciding consistency',
      blocks: [
        {
          type: 'definition',
          term: 'Row equivalent',
          text: 'Two matrices are [[row-equivalent]], written $A \\sim B$, if a sequence of elementary row operations transforms $A$ into $B$. Because each operation is reversible, $A \\sim B$ implies $B \\sim A$.',
        },
        {
          type: 'theorem',
          name: 'Row equivalence preserves solutions',
          text: 'If the augmented matrices of two linear systems are row equivalent, the two systems have the same solution set.',
        },
        {
          type: 'p',
          text: 'This turns "is the system consistent?" into a matrix question: row-reduce until it is obvious. You do not need to finish solving. A triangular shape is enough to see whether some row has become $[\\,0 \\;\\; 0 \\;\\; \\cdots \\;\\; 0 \\mid c\\,]$ with $c \\neq 0$.',
        },
        {
          type: 'derivation',
          title: 'Is this system consistent?',
          steps: [
            { tex: '\\begin{aligned} 2x_1 + 5x_2 + x_3 &= 4 \\\\ x_1 + 2x_2 - x_3 &= 3 \\\\ 3x_1 + 7x_2 \\phantom{{}+x_3} &= 9 \\end{aligned} \\qquad \\left[\\begin{array}{ccc|c} 2 & 5 & 1 & 4 \\\\ 1 & 2 & -1 & 3 \\\\ 3 & 7 & 0 & 9 \\end{array}\\right]', why: 'Write the augmented matrix. Equation 3 has no $x_3$, so its entry is $0$.' },
            { tex: '\\xrightarrow{R_1 \\leftrightarrow R_2} \\left[\\begin{array}{ccc|c} 1 & 2 & -1 & 3 \\\\ 2 & 5 & 1 & 4 \\\\ 3 & 7 & 0 & 9 \\end{array}\\right]', why: 'Interchange, purely for convenience: a $1$ in the top-left corner keeps the arithmetic free of fractions.' },
            { tex: '\\xrightarrow[R_3 - 3R_1]{R_2 - 2R_1} \\left[\\begin{array}{ccc|c} 1 & 2 & -1 & 3 \\\\ 0 & 1 & 3 & -2 \\\\ 0 & 1 & 3 & 0 \\end{array}\\right]', why: 'Two replacements that both use the unchanged row 1, so doing them in one step is safe. Row 2: $[2, 5, 1 \\mid 4] - 2[1, 2, -1 \\mid 3]$. Row 3: $[3, 7, 0 \\mid 9] - 3[1, 2, -1 \\mid 3]$.' },
            { tex: '\\xrightarrow{R_3 - R_2} \\left[\\begin{array}{ccc|c} 1 & 2 & -1 & 3 \\\\ 0 & 1 & 3 & -2 \\\\ 0 & 0 & 0 & 2 \\end{array}\\right]', why: 'Clear the entry below the $1$ in row 2. The left side of row 3 vanishes completely, but the right side does not: $0 - (-2) = 2$.' },
            { tex: '0x_1 + 0x_2 + 0x_3 = 2', why: 'Translate row 3 back into an equation. No choice of $x_1, x_2, x_3$ makes $0 = 2$ true.' },
          ],
          result: 'The final system has no solution, and it is equivalent to the original — so the original system is **inconsistent**. Geometrically, no two of the three planes are parallel (no normal vector is a multiple of another), yet they share no point: this is the ridge-tent case from the table.',
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'Exam questions often hide a parameter: "for which $h$ is the system consistent?" Row-reduce with $h$ in place, keep it in the right-hand column, and look at the row whose left side becomes all zeros. The system is consistent exactly when that row\'s right-hand entry is $0$.',
        },
        {
          type: 'deepdive',
          title: 'Row equivalence is an equivalence relation',
          blocks: [
            {
              type: 'p',
              text: 'It is **reflexive** ($A \\sim A$: scale any row by $1$), **symmetric** (reverse each operation in reverse order) and **transitive** (do one sequence of operations, then the other). So matrices split into classes of mutually row-equivalent matrices. The next lesson shows that each class contains exactly one matrix in *reduced echelon form* — a canonical representative that answers every question about the system at a glance.',
            },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'error',
      prompt: 'A student checks whether this system is consistent. Tap the first line that is wrong.',
      tex: '\\left[\\begin{array}{ccc|c} 1 & -1 & 2 & 1 \\\\ 2 & 1 & 1 & 5 \\\\ 1 & 2 & -1 & 4 \\end{array}\\right]',
      lines: [
        '$R_2 \\to R_2 - 2R_1$ gives the new row 2: $[\\,0 \\;\\; 3 \\;\\; {-3} \\mid 3\\,]$',
        '$R_3 \\to R_3 - R_1$ gives the new row 3: $[\\,0 \\;\\; 3 \\;\\; {-3} \\mid 5\\,]$',
        '$R_3 \\to R_3 - R_2$ gives the new row 3: $[\\,0 \\;\\; 0 \\;\\; 0 \\mid 2\\,]$',
        'Row 3 says $0 = 2$, so the system is inconsistent.',
      ],
      errorLines: [2],
      explanation: 'Line 2 computes the right-hand side as $4 + 1 = 5$ instead of $4 - 1 = 3$. The correct new row 3 is $[\\,0 \\;\\; 3 \\;\\; {-3} \\mid 3\\,]$, which is identical to row 2, so $R_3 \\to R_3 - R_2$ gives $[\\,0 \\;\\; 0 \\;\\; 0 \\mid 0\\,]$, meaning $0 = 0$. The system is **consistent** (with infinitely many solutions — for example $x_1 = 2,\\ x_2 = 1,\\ x_3 = 0$ checks in all three equations). One arithmetic slip flipped the conclusion.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'numeric',
      prompt: 'For which value of $k$ is this system **consistent**?',
      tex: '\\begin{aligned} x_1 - 2x_2 &= 3 \\\\ -2x_1 + 4x_2 &= k \\end{aligned}',
      hint: 'Use $R_2 \\to R_2 + 2R_1$ on the augmented matrix and look at the new row 2.',
      label: '$k =$',
      answer: '-6',
      explanation: '$\\left[\\begin{smallmatrix} 1 & -2 & | & 3 \\\\ -2 & 4 & | & k \\end{smallmatrix}\\right] \\xrightarrow{R_2 + 2R_1} \\left[\\begin{smallmatrix} 1 & -2 & | & 3 \\\\ 0 & 0 & | & k + 6 \\end{smallmatrix}\\right]$. Row 2 reads $0 = k + 6$, which is true only when $k = -6$. Then the second equation is just $-2$ times the first — the same line — and there are infinitely many solutions. For any other $k$ the lines are parallel and distinct, so there are none. Exactly one solution is impossible here for every $k$.',
    },
  ],
  takeaways: [
    'A linear equation is $a_1x_1 + \\cdots + a_nx_n = b$; a solution is a vector in $\\mathbb{R}^n$ that satisfies every equation of the system at once.',
    'Every linear system has no solution, exactly one, or infinitely many: if $\\mathbf{p} \\neq \\mathbf{q}$ are solutions, so is every $(1-t)\\mathbf{p} + t\\mathbf{q}$.',
    'Geometrically, equations in two unknowns are lines in $\\mathbb{R}^2$ and in three unknowns planes in $\\mathbb{R}^3$; three planes can fail to meet even when no two are parallel.',
    'A system of $m$ equations in $n$ unknowns has an $m \\times n$ coefficient matrix $A$ and an $m \\times (n+1)$ augmented matrix $[\\,A \\mid \\mathbf{b}\\,]$.',
    'Replacement, interchange and scaling (by $c \\neq 0$) preserve the solution set because each is reversible; row-equivalent augmented matrices describe systems with the same solutions.',
    'A system is inconsistent exactly when row reduction produces a row $[\\,0 \\;\\cdots\\; 0 \\mid c\\,]$ with $c \\neq 0$.',
  ],
  reading: [
    {
      title: 'Interactive Linear Algebra — Systems of Linear Equations',
      url: 'https://textbooks.math.gatech.edu/ila/',
      source: 'book',
      note: 'Chapter 1 has interactive 3D figures of three planes meeting in a point, a line, or not at all.',
    },
    {
      title: "Paul's Online Notes — Linear Algebra",
      url: 'https://tutorial.math.lamar.edu/Classes/LinAlg/LinAlg.aspx',
      source: 'paul',
      note: 'The "Systems of Equations and Matrices" chapter gives extra worked examples of augmented matrices and row operations.',
    },
    {
      title: 'Wikipedia — System of linear equations',
      url: 'https://en.wikipedia.org/wiki/System_of_linear_equations',
      source: 'wikipedia',
      note: 'A good overview of the geometric interpretations and the "none, one or infinitely many" property.',
    },
  ],
};
