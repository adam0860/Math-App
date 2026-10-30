import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'la-solution-sets',
  title: 'Solution Sets and Parametric Vector Form',
  summary: 'Describe every solution of a linear system at once: basic and free variables, homogeneous systems, and the picture of a solution set as a shifted line or plane.',
  minutes: 18,
  objectives: [
    'Classify the unknowns of a system as basic or free from its reduced echelon form and write the general solution',
    'Decide when a homogeneous system $A\\mathbf{x} = \\mathbf{0}$ has a nontrivial solution',
    'Write any solution set in parametric vector form $\\mathbf{x} = \\mathbf{p} + s\\mathbf{u} + t\\mathbf{v}$',
    'Explain why the solutions of $A\\mathbf{x} = \\mathbf{b}$ are a translate of the solutions of $A\\mathbf{x} = \\mathbf{0}$',
    'Set up and solve applied problems such as balancing chemical equations and network flow',
  ],
  steps: [
    // ------------------------------------------------------------------ 0
    {
      kind: 'concept',
      title: 'Basic and free variables',
      blocks: [
        {
          type: 'p',
          text: 'The last lesson ended with this reduced echelon form, whose third column has no pivot:',
        },
        {
          type: 'math',
          tex: '\\left[\\begin{array}{cccc|c} 1 & 0 & 2 & 0 & 3 \\\\ 0 & 1 & -1 & 0 & 1 \\\\ 0 & 0 & 0 & 1 & -2 \\end{array}\\right]',
          caption: 'Pivot columns $1, 2, 4$. Column $3$ is not a pivot column.',
        },
        {
          type: 'definition',
          term: 'Basic and free variables',
          text: 'The unknowns that correspond to pivot columns are [[basic-variable|basic variables]]. The others are [[free-variable|free variables]]. In a consistent system, each nonzero row of the RREF contains exactly one basic variable, so each row can be solved for its basic variable in terms of the free ones.',
        },
        {
          type: 'derivation',
          title: 'The general solution',
          steps: [
            { tex: 'x_1 + 2x_3 = 3 \\implies x_1 = 3 - 2x_3', why: 'Row 1 contains the basic variable $x_1$ and the free variable $x_3$. Move the free term to the right.' },
            { tex: 'x_2 - x_3 = 1 \\implies x_2 = 1 + x_3', why: 'Row 2: solve for the basic variable $x_2$.' },
            { tex: 'x_4 = -2', why: 'Row 3: the basic variable $x_4$ happens not to depend on $x_3$ at all. It is still basic — its column has a pivot.' },
            { tex: 'x_3 \\text{ is free}', why: 'Column 3 has no pivot, so no row is solved for $x_3$. It may take any real value.' },
          ],
          result: 'This list is the **general solution**: every solution arises from exactly one choice of $x_3$. For example $x_3 = 0$ gives $(3, 1, 0, -2)$ and $x_3 = 1$ gives $(1, 2, 1, -2)$; both check in the original equations.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why each choice gives exactly one solution',
          text: 'In the RREF every leading $1$ is alone in its column, so row $i$ involves its own basic variable and *no other* basic variable — only free ones. Once you pick values for the free variables, each row hands you its basic variable directly; there is nothing left to choose and nothing to contradict. So solutions correspond one-to-one with choices of the free variables. This is also why you should not solve a free variable in terms of the others: free variables are the inputs, basic variables the outputs.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Free variables are degrees of freedom',
          text: 'A ragdoll\'s elbow is a hinge: of the six ways a forearm could move relative to the upper arm (three translations, three rotations), the joint constraints remove five. The constraint equations, linearised, have one free variable left — the bend angle. Physics engines describe every joint type (ball, hinge, slider) by exactly this count of free versus constrained unknowns.',
        },
      ],
    },
    // ------------------------------------------------------------------ 1
    {
      kind: 'fill',
      prompt: 'An augmented matrix in the unknowns $x_1, x_2, x_3, x_4$ has the reduced echelon form below. Write the basic variables in terms of the free ones. Type each coefficient as a signed number.',
      tex: '\\left[\\begin{array}{cccc|c} 1 & -3 & 0 & 2 & 5 \\\\ 0 & 0 & 1 & -4 & 1 \\\\ 0 & 0 & 0 & 0 & 0 \\end{array}\\right]',
      template: '$x_1 =$ ___ $+\\,($ ___ $)\\,x_2 + ($ ___ $)\\,x_4$, and $x_3 =$ ___ $+\\,($ ___ $)\\,x_4$.',
      blanks: [{ answers: ['5'] }, { answers: ['3'] }, { answers: ['-2'] }, { answers: ['1'] }, { answers: ['4'] }],
      hint: 'Row 1 reads $x_1 - 3x_2 + 2x_4 = 5$. Move the free-variable terms to the right side, flipping their signs.',
      explanation: 'Pivots are in columns $1$ and $3$, so $x_1, x_3$ are basic and $x_2, x_4$ are free. Row 1: $x_1 - 3x_2 + 2x_4 = 5 \\implies x_1 = 5 + 3x_2 - 2x_4$. Row 2: $x_3 - 4x_4 = 1 \\implies x_3 = 1 + 4x_4$. The signs flip as each term crosses the equals sign — the most common error here.',
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'mcq',
      prompt: 'Which unknowns are **free** for the system whose augmented matrix has this reduced echelon form?',
      tex: '\\left[\\begin{array}{ccccc|c} 1 & 0 & 3 & 0 & -1 & 2 \\\\ 0 & 1 & -2 & 0 & 4 & 0 \\\\ 0 & 0 & 0 & 1 & 5 & -3 \\end{array}\\right]',
      options: [
        {
          text: '$x_1, x_2, x_4$',
          why: 'These are the unknowns with pivot columns — the **basic** variables.',
        },
        {
          text: '$x_5$ only',
          why: 'Column 3 has no pivot either, so $x_3$ is also free.',
        },
        {
          text: '$x_3$ and $x_5$',
          correct: true,
          why: 'Pivots sit in columns $1, 2, 4$. The unknowns of the non-pivot columns $3$ and $5$ are free.',
        },
        {
          text: 'None: there are three nonzero rows, so the solution is unique',
          why: 'Uniqueness needs a pivot in every one of the $5$ coefficient columns. Three rows can hold at most three pivots.',
        },
      ],
      explanation: 'Free variables are read from the **columns**: every coefficient column without a pivot gives a free variable. Here $5$ unknowns and $3$ pivots leave $5 - 3 = 2$ free variables, $x_3$ and $x_5$. The general solution is $x_1 = 2 - 3x_3 + x_5$, $\\;x_2 = 2x_3 - 4x_5$, $\\;x_4 = -3 - 5x_5$.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Homogeneous systems',
      blocks: [
        {
          type: 'definition',
          term: 'Homogeneous system',
          text: 'A linear system is [[homogeneous-system|homogeneous]] if every right-hand side is $0$. In matrix shorthand (made official next lesson): $A\\mathbf{x} = \\mathbf{0}$. Setting every unknown to $0$ always works; $\\mathbf{x} = \\mathbf{0}$ is the [[trivial-solution]]. Any other solution is a [[nontrivial-solution]].',
        },
        {
          type: 'p',
          text: 'Since a homogeneous system is always consistent, the existence and uniqueness theorem leaves just one question: is the solution unique (only $\\mathbf{0}$) or not?',
        },
        {
          type: 'theorem',
          name: 'Nontrivial solutions',
          text: 'The homogeneous system $A\\mathbf{x} = \\mathbf{0}$ has a nontrivial solution **if and only if** it has at least one free variable. In particular, a homogeneous system with **more unknowns than equations** always has a nontrivial solution.',
        },
        {
          type: 'derivation',
          title: 'Solve $x_1 + 2x_2 - x_3 = 0$, $\\;2x_1 + 5x_2 + x_3 = 0$, $\\;x_1 + 3x_2 + 2x_3 = 0$',
          steps: [
            { tex: '\\left[\\begin{array}{ccc|c} 1 & 2 & -1 & 0 \\\\ 2 & 5 & 1 & 0 \\\\ 1 & 3 & 2 & 0 \\end{array}\\right] \\xrightarrow[R_3 - R_1]{R_2 - 2R_1} \\left[\\begin{array}{ccc|c} 1 & 2 & -1 & 0 \\\\ 0 & 1 & 3 & 0 \\\\ 0 & 1 & 3 & 0 \\end{array}\\right]', why: 'Forward phase, column 1. Notice the zero column on the right never changes — row operations turn zeros into zeros.' },
            { tex: '\\xrightarrow{R_3 - R_2} \\left[\\begin{array}{ccc|c} 1 & 2 & -1 & 0 \\\\ 0 & 1 & 3 & 0 \\\\ 0 & 0 & 0 & 0 \\end{array}\\right] \\xrightarrow{R_1 - 2R_2} \\left[\\begin{array}{ccc|c} 1 & 0 & -7 & 0 \\\\ 0 & 1 & 3 & 0 \\\\ 0 & 0 & 0 & 0 \\end{array}\\right]', why: 'Row 3 vanishes, so column 3 gets no pivot: $x_3$ is free. Then clear above the pivot in column 2 to reach the RREF.' },
            { tex: 'x_1 = 7x_3, \\quad x_2 = -3x_3, \\quad x_3 \\text{ free}', why: 'Solve each row for its basic variable: $x_1 - 7x_3 = 0$ and $x_2 + 3x_3 = 0$.' },
            { tex: '\\mathbf{x} = \\begin{bmatrix} 7x_3 \\\\ -3x_3 \\\\ x_3 \\end{bmatrix} = x_3 \\begin{bmatrix} 7 \\\\ -3 \\\\ 1 \\end{bmatrix}', why: 'Collect the solution as a vector and factor out the free variable.' },
          ],
          result: 'Three equations, three unknowns, yet infinitely many solutions: the solution set is $\\operatorname{Span}\\{(7, -3, 1)\\}$ (as a column vector), a **line through the origin** in $\\mathbb{R}^3$. Choosing $x_3 = 0$ recovers the trivial solution.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why more unknowns than equations forces a free variable',
          text: 'Each pivot needs its own row, so a matrix with $m$ rows has at most $m$ pivots. With $n > m$ columns, at least $n - m$ columns are left without a pivot, and each one is a free variable. For a homogeneous system that is all it takes: consistent (always) plus a free variable means infinitely many solutions. The converse fails — a square system can have free variables too, as the example shows.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'You may drop the zero column',
          text: 'Because the last column of $[\\,A \\mid \\mathbf{0}\\,]$ stays zero under every row operation, many people row-reduce $A$ alone when solving a homogeneous system. Just remember the right-hand sides are $0$ when you read off the solution.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'truefalse',
      prompt: 'A homogeneous system of three equations in three unknowns always has only the trivial solution.',
      answer: false,
      explanation: 'Having as many equations as unknowns does not guarantee a pivot in every column. In the worked example, $x_1 + 2x_2 - x_3 = 0$, $2x_1 + 5x_2 + x_3 = 0$, $x_1 + 3x_2 + 2x_3 = 0$ has the nontrivial solutions $x_3(7, -3, 1)$, because the third equation is a combination of the first two. "Only the trivial solution" happens exactly when every column of the coefficient matrix is a pivot column.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'numeric',
      prompt: 'A homogeneous system $A\\mathbf{x} = \\mathbf{0}$ has a $3 \\times 5$ coefficient matrix with $3$ pivot columns. Its solution set can be written as $\\operatorname{Span}\\{\\mathbf{v}_1, \\dots, \\mathbf{v}_k\\}$, with one vector per free variable. What is $k$?',
      hint: 'Free variables = number of unknowns minus number of pivot columns.',
      label: '$k =$',
      answer: '2',
      explanation: '$A$ has $5$ columns (unknowns) and $3$ pivot columns (basic variables), so $5 - 3 = 2$ unknowns are free. Factoring each free variable out of the general solution gives one vector per free variable, so the solution set is the span of $2$ vectors — a plane through the origin in $\\mathbb{R}^5$. Later in the course this number becomes the *nullity* of $A$.',
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'concept',
      title: 'Parametric vector form',
      blocks: [
        {
          type: 'p',
          text: 'The last step of the example — collecting the solution as a vector and splitting it by free variable — is the key move of this lesson. With two free variables it produces two vectors and a plane.',
        },
        {
          type: 'derivation',
          title: 'Solve the single equation $2x_1 - 6x_2 - 4x_3 = 0$',
          steps: [
            { tex: 'x_1 - 3x_2 - 2x_3 = 0', why: 'Scale by $\\frac{1}{2}$: the RREF of the $1 \\times 3$ matrix $[\\,2 \\;\\; {-6} \\;\\; {-4}\\,]$ is $[\\,1 \\;\\; {-3} \\;\\; {-2}\\,]$. Pivot in column 1, so $x_2$ and $x_3$ are free.' },
            { tex: 'x_1 = 3x_2 + 2x_3', why: 'Solve for the basic variable.' },
            { tex: '\\mathbf{x} = \\begin{bmatrix} x_1 \\\\ x_2 \\\\ x_3 \\end{bmatrix} = \\begin{bmatrix} 3x_2 + 2x_3 \\\\ x_2 \\\\ x_3 \\end{bmatrix}', why: 'Write the whole solution as a vector. The free variables appear as themselves.' },
            { tex: '= \\begin{bmatrix} 3x_2 \\\\ x_2 \\\\ 0 \\end{bmatrix} + \\begin{bmatrix} 2x_3 \\\\ 0 \\\\ x_3 \\end{bmatrix} = x_2\\begin{bmatrix} 3 \\\\ 1 \\\\ 0 \\end{bmatrix} + x_3\\begin{bmatrix} 2 \\\\ 0 \\\\ 1 \\end{bmatrix}', why: 'Split the vector into one piece per free variable (vector addition is entrywise), then factor each free variable out as a scalar.' },
            { tex: '\\mathbf{x} = s\\,\\mathbf{u} + t\\,\\mathbf{v}, \\quad \\mathbf{u} = \\begin{bmatrix} 3 \\\\ 1 \\\\ 0 \\end{bmatrix},\\; \\mathbf{v} = \\begin{bmatrix} 2 \\\\ 0 \\\\ 1 \\end{bmatrix},\\; s, t \\in \\mathbb{R}', why: 'Rename the free variables as parameters $s = x_2$, $t = x_3$.' },
          ],
          result: 'The solution set is $\\operatorname{Span}\\{\\mathbf{u}, \\mathbf{v}\\}$: a plane through the origin. This way of writing it is its [[parametric-vector-form]].',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the vectors are never redundant',
          text: 'Look at the free-variable slots: $\\mathbf{u}$ has a $1$ in slot 2 and a $0$ in slot 3, while $\\mathbf{v}$ has $0$ and $1$. That pattern is automatic — each free variable\'s vector has a $1$ in its own slot and $0$ in every other free slot — so no vector is a combination of the others. Each free variable really adds a new direction. (Unit 3 names this property linear independence.)',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Implicit versus parametric planes',
          text: 'Engines store planes both ways. The implicit form $\\mathbf{n} \\cdot \\mathbf{x} = d$ is ideal for "which side is this point on?" tests (culling, collision). The parametric form $\\mathbf{p} + s\\mathbf{u} + t\\mathbf{v}$ is ideal for *generating* points: placing decals, texture coordinates on a wall, sampling an area light. Row-reducing the implicit equation, as above, converts one into the other. Going back, $\\mathbf{u} \\times \\mathbf{v} = (1, -3, -2)$ (as a column) is parallel to $\\mathbf{n} = (2, -6, -4)$, as the cross product promises.',
        },
      ],
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'fill',
      prompt: 'Write the solution set of the single equation $x_1 + 4x_2 - 5x_3 = 0$ in parametric vector form, with $x_2$ and $x_3$ free. (The triples are column vectors.)',
      template: '$\\mathbf{x} = x_2\\,($ ___ $,\\ 1,\\ 0) + x_3\\,($ ___ $,\\ 0,\\ 1)$',
      blanks: [{ answers: ['-4'] }, { answers: ['5'] }],
      hint: 'Solve for $x_1$ first: $x_1 = -4x_2 + 5x_3$.',
      explanation: 'The basic variable is $x_1 = -4x_2 + 5x_3$, so $\\mathbf{x} = (-4x_2 + 5x_3,\\ x_2,\\ x_3) = x_2(-4, 1, 0) + x_3(5, 0, 1)$. Check each vector in the equation: $-4 + 4(1) - 0 = 0$ ✓ and $5 + 0 - 5(1) = 0$ ✓. The solution set is a plane through the origin.',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'concept',
      title: '$A\\mathbf{x} = \\mathbf{b}$ is a shifted copy of $A\\mathbf{x} = \\mathbf{0}$',
      blocks: [
        {
          type: 'p',
          text: 'Now give the same equation a nonzero right-hand side: $x_1 - 3x_2 - 2x_3 = 4$. The same steps give $x_1 = 4 + 3x_2 + 2x_3$, and splitting by free variable leaves one extra *constant* vector:',
        },
        {
          type: 'math',
          tex: '\\mathbf{x} = \\begin{bmatrix} 4 + 3x_2 + 2x_3 \\\\ x_2 \\\\ x_3 \\end{bmatrix} = \\underbrace{\\begin{bmatrix} 4 \\\\ 0 \\\\ 0 \\end{bmatrix}}_{\\mathbf{p}} + s\\begin{bmatrix} 3 \\\\ 1 \\\\ 0 \\end{bmatrix} + t\\begin{bmatrix} 2 \\\\ 0 \\\\ 1 \\end{bmatrix}',
          caption: 'Same direction vectors $\\mathbf{u}, \\mathbf{v}$ as before, plus the fixed vector $\\mathbf{p}$ (the solution with $s = t = 0$).',
        },
        {
          type: 'theorem',
          name: 'Structure of the solution set',
          text: 'Suppose $A\\mathbf{x} = \\mathbf{b}$ is consistent and $\\mathbf{p}$ is one solution. Then the solution set of $A\\mathbf{x} = \\mathbf{b}$ is the set of all vectors $\\mathbf{w} = \\mathbf{p} + \\mathbf{v}_h$, where $\\mathbf{v}_h$ is any solution of the homogeneous system $A\\mathbf{x} = \\mathbf{0}$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why: subtract two solutions',
          text: 'Write each equation as $L_i(\\mathbf{x}) = b_i$, where $L_i(\\mathbf{x}) = a_{i1}x_1 + \\cdots + a_{in}x_n$. Because $L_i$ is linear, $L_i(\\mathbf{x} + \\mathbf{y}) = L_i(\\mathbf{x}) + L_i(\\mathbf{y})$.\n\n**Every $\\mathbf{p} + \\mathbf{v}_h$ is a solution:** $L_i(\\mathbf{p} + \\mathbf{v}_h) = b_i + 0 = b_i$.\n\n**Every solution has that form:** if $\\mathbf{w}$ is a solution, then $L_i(\\mathbf{w} - \\mathbf{p}) = b_i - b_i = 0$, so $\\mathbf{v}_h = \\mathbf{w} - \\mathbf{p}$ solves the homogeneous system and $\\mathbf{w} = \\mathbf{p} + \\mathbf{v}_h$.',
        },
        {
          type: 'p',
          text: 'Geometrically: take the solution set of $A\\mathbf{x} = \\mathbf{0}$ (a line or plane through the origin) and **translate** it by $\\mathbf{p}$. The result is parallel to the original. Drag the sliders for the one-equation system $x_1 - 2x_2 = b$ in $\\mathbb{R}^2$:',
        },
        {
          type: 'graph',
          x: [-6, 6],
          y: [-4, 4],
          equal: true,
          functions: [
            { expr: 'x/2', label: '$x_1 - 2x_2 = 0$', color: 'gray', dashed: true },
            { expr: '(x - b)/2', label: '$x_1 - 2x_2 = b$', color: 'blue' },
          ],
          segments: [
            { from: [0, 0], to: ['b', 0], arrow: true, color: 'red', label: 'p' },
            { from: [0, 0], to: ['2s', 's'], arrow: true, color: 'green', dashed: true, label: 'sv' },
            { from: ['b', 0], to: ['b + 2s', 's'], arrow: true, color: 'green', label: 'sv' },
          ],
          points: [{ x: 'b + 2s', y: 's', label: 'p + sv', color: 'purple' }],
          sliders: [
            { name: 'b', min: -4, max: 4, step: 0.5, value: 2, label: '$b$' },
            { name: 's', min: -2, max: 2, step: 0.1, value: 1, label: '$s$' },
          ],
          readouts: [{ label: '$x_1 - 2x_2$ at the purple point $=$', expr: '(b + 2s) - 2s', digits: 2 }],
          caption: 'Here $\\mathbf{p} = (b, 0)$ and $\\mathbf{v} = (2, 1)$. Moving $s$ slides the point along the blue line, and the readout never changes: it always equals $b$. The green dashed arrow $s\\mathbf{v}$ moves along the gray homogeneous line through the origin. Changing $b$ moves the blue line, but it stays parallel to the gray one.',
        },
        {
          type: 'callout',
          variant: 'analogy',
          title: 'One answer, then every answer',
          text: 'The same structure appears in differential equations. Every solution of the linear equation $y\' + y = 3$ is one particular solution, $y = 3$, plus a solution of the homogeneous equation $y\' + y = 0$, which you can solve by separation of variables: $Ce^{-x}$. So $y = 3 + Ce^{-x}$. Any time a problem is linear, "particular + homogeneous" is the shape of the answer.',
        },
      ],
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'mcq',
      prompt: 'The solutions of a system $A\\mathbf{x} = \\mathbf{b}$ in $\\mathbb{R}^3$ are $\\mathbf{x} = \\mathbf{p} + t\\mathbf{v}$ with $\\mathbf{p} = (1, 2, 0)$ and $\\mathbf{v} = (3, -1, 4)$ (column vectors), $t \\in \\mathbb{R}$. Which describes the solution set of $A\\mathbf{x} = \\mathbf{0}$?',
      options: [
        {
          text: 'The line through $\\mathbf{p}$ parallel to $\\mathbf{v}$',
          why: 'That is the solution set of $A\\mathbf{x} = \\mathbf{b}$ itself. It does not pass through the origin, so it cannot be the homogeneous solution set, which always contains $\\mathbf{0}$.',
        },
        {
          text: 'The line through the origin in the direction of $\\mathbf{v}$, i.e. $\\operatorname{Span}\\{\\mathbf{v}\\}$',
          correct: true,
          why: 'The homogeneous solutions are exactly the differences of two solutions of $A\\mathbf{x} = \\mathbf{b}$: $(\\mathbf{p} + t\\mathbf{v}) - \\mathbf{p} = t\\mathbf{v}$.',
        },
        {
          text: 'Only the trivial solution $\\mathbf{x} = \\mathbf{0}$',
          why: 'If the homogeneous system had only $\\mathbf{0}$, then $A\\mathbf{x} = \\mathbf{b}$ would have only the single solution $\\mathbf{p}$, not a whole line.',
        },
        {
          text: 'The plane $\\operatorname{Span}\\{\\mathbf{p}, \\mathbf{v}\\}$',
          why: '$\\mathbf{p}$ is not a homogeneous solution: $A\\mathbf{p} = \\mathbf{b} \\neq \\mathbf{0}$ (if $\\mathbf{b}$ were $\\mathbf{0}$, the two solution sets would be the same line).',
        },
      ],
      explanation: 'By the structure theorem, solutions of $A\\mathbf{x} = \\mathbf{b}$ are $\\mathbf{p}$ plus homogeneous solutions. Since they form the line $\\mathbf{p} + t\\mathbf{v}$, the homogeneous solutions are $t\\mathbf{v}$: the parallel line through the origin. Translating back by $\\mathbf{p}$ shifts it onto the original line.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'concept',
      title: 'The recipe, on a system with two free variables',
      blocks: [
        {
          type: 'steps',
          items: [
            { title: 'Row reduce', text: 'Reduce the augmented matrix to reduced echelon form. If the last column is a pivot column, stop: no solutions.' },
            { title: 'Solve for the basic variables', text: 'Write each basic variable in terms of the free variables, one RREF row at a time.' },
            { title: 'Write $\\mathbf{x}$ as a vector', text: 'List all $n$ unknowns as one column, substituting the expressions for the basic variables.' },
            { title: 'Split', text: 'Separate the constants (that is $\\mathbf{p}$) from the terms of each free variable, and factor each free variable out as a parameter.' },
          ],
        },
        {
          type: 'derivation',
          title: 'Solve $\\begin{aligned} x_1 + 2x_2 - x_4 &= 4 \\\\ 2x_1 + 4x_2 + x_3 &= 5 \\\\ -x_1 - 2x_2 + x_3 + 3x_4 &= -7 \\end{aligned}$',
          steps: [
            { tex: '\\left[\\begin{array}{cccc|c} 1 & 2 & 0 & -1 & 4 \\\\ 2 & 4 & 1 & 0 & 5 \\\\ -1 & -2 & 1 & 3 & -7 \\end{array}\\right] \\xrightarrow[R_3 + R_1]{R_2 - 2R_1} \\left[\\begin{array}{cccc|c} 1 & 2 & 0 & -1 & 4 \\\\ 0 & 0 & 1 & 2 & -3 \\\\ 0 & 0 & 1 & 2 & -3 \\end{array}\\right]', why: 'Clear column 1. Column 2 is then zero below row 1, so the next pivot is in column 3.' },
            { tex: '\\xrightarrow{R_3 - R_2} \\left[\\begin{array}{cccc|c} 1 & 2 & 0 & -1 & 4 \\\\ 0 & 0 & 1 & 2 & -3 \\\\ 0 & 0 & 0 & 0 & 0 \\end{array}\\right]', why: 'Row 3 vanishes. Row 1 already has $0$ above the pivot in column 3, so this is the RREF. Pivot columns $1, 3$: basic $x_1, x_3$; free $x_2, x_4$. The last column is not a pivot column, so the system is consistent.' },
            { tex: 'x_1 = 4 - 2x_2 + x_4, \\qquad x_3 = -3 - 2x_4', why: 'Solve each nonzero row for its basic variable.' },
            { tex: '\\mathbf{x} = \\begin{bmatrix} 4 - 2x_2 + x_4 \\\\ x_2 \\\\ -3 - 2x_4 \\\\ x_4 \\end{bmatrix} = \\begin{bmatrix} 4 \\\\ 0 \\\\ -3 \\\\ 0 \\end{bmatrix} + x_2\\begin{bmatrix} -2 \\\\ 1 \\\\ 0 \\\\ 0 \\end{bmatrix} + x_4\\begin{bmatrix} 1 \\\\ 0 \\\\ -2 \\\\ 1 \\end{bmatrix}', why: 'Constants go into $\\mathbf{p}$; the $x_2$ terms and the $x_4$ terms each form one vector.' },
          ],
          result: '$\\mathbf{x} = \\mathbf{p} + s\\mathbf{u} + t\\mathbf{v}$ with $\\mathbf{p} = (4, 0, -3, 0)$, $\\mathbf{u} = (-2, 1, 0, 0)$, $\\mathbf{v} = (1, 0, -2, 1)$: a plane in $\\mathbb{R}^4$ that misses the origin. Check: $\\mathbf{p}$ satisfies all three original equations ($4 = 4$, $8 - 3 = 5$, $-4 - 3 = -7$), and $\\mathbf{u}$, $\\mathbf{v}$ satisfy them with right-hand sides $0$.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Different-looking answers can both be right',
          text: '$\\mathbf{p}$ is just *one* solution: $\\mathbf{p} + \\mathbf{u} = (2, 1, -3, 0)$ would serve equally well, and so would replacing $\\mathbf{u}$ by $2\\mathbf{u}$. Before marking your answer wrong against a key, check that your $\\mathbf{p}$ solves the system and your direction vectors solve the homogeneous system, and that you have the same number of them.',
        },
      ],
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'expr',
      prompt: 'A system in $x_1, x_2, x_3$ has the reduced augmented matrix below. With $x_3 = t$, find $x_2$ as a function of $t$.',
      tex: '\\left[\\begin{array}{ccc|c} 1 & 0 & -2 & 4 \\\\ 0 & 1 & 3 & -1 \\\\ 0 & 0 & 0 & 0 \\end{array}\\right]',
      hint: 'Row 2 is the equation $x_2 + 3x_3 = -1$.',
      label: '$x_2 =$',
      variables: ['t'],
      answer: '-1 - 3t',
      answerTex: '-1 - 3t',
      explanation: 'Row 2 says $x_2 + 3x_3 = -1$, so $x_2 = -1 - 3t$. Likewise row 1 gives $x_1 = 4 + 2t$. In parametric vector form, $\\mathbf{x} = (4, -1, 0) + t(2, -3, 1)$: a line through $(4, -1, 0)$ parallel to $(2, -3, 1)$.',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'error',
      prompt: 'A student writes the solution set for the reduced augmented matrix below in parametric vector form. Tap the first line that is wrong.',
      tex: '\\left[\\begin{array}{cccc|c} 1 & 0 & -2 & 1 & 3 \\\\ 0 & 1 & 1 & -4 & 0 \\end{array}\\right]',
      lines: [
        'Pivots in columns 1 and 2, so $x_1, x_2$ are basic and $x_3, x_4$ are free.',
        '$x_1 = 3 + 2x_3 - x_4$',
        '$x_2 = x_3 - 4x_4$',
        '$\\mathbf{x} = (3, 0, 0, 0) + x_3(2, 1, 1, 0) + x_4(-1, -4, 0, 1)$',
      ],
      errorLines: [3],
      explanation: 'Row 2 reads $x_2 + x_3 - 4x_4 = 0$, so $x_2 = -x_3 + 4x_4$: both signs must flip when the terms move across. The student kept the signs. The correct form is $\\mathbf{x} = (3, 0, 0, 0) + x_3(2, -1, 1, 0) + x_4(-1, 4, 0, 1)$. A quick check catches it: plugging the student\'s vector $(2, 1, 1, 0)$ into row 2 with right side $0$ gives $1 + 1 = 2 \\neq 0$.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'concept',
      title: 'Applications: chemistry and network flow',
      blocks: [
        {
          type: 'p',
          text: 'Many applied problems are homogeneous systems in disguise, and the free variable is a real-world scaling freedom.',
        },
        {
          type: 'derivation',
          title: 'Balance $x_1\\,\\text{C}_3\\text{H}_8 + x_2\\,\\text{O}_2 \\to x_3\\,\\text{CO}_2 + x_4\\,\\text{H}_2\\text{O}$ (burning propane)',
          steps: [
            { tex: '\\text{C: } 3x_1 = x_3, \\quad \\text{H: } 8x_1 = 2x_4, \\quad \\text{O: } 2x_2 = 2x_3 + x_4', why: 'Each element must have as many atoms on the left as on the right: one linear equation per element.' },
            { tex: '\\begin{bmatrix} 3 & 0 & -1 & 0 \\\\ 8 & 0 & 0 & -2 \\\\ 0 & 2 & -2 & -1 \\end{bmatrix} \\sim \\begin{bmatrix} 1 & 0 & 0 & -\\frac{1}{4} \\\\ 0 & 1 & 0 & -\\frac{5}{4} \\\\ 0 & 0 & 1 & -\\frac{3}{4} \\end{bmatrix}', why: 'Move everything to the left: a homogeneous system, $3$ equations in $4$ unknowns, so a free variable is guaranteed. Row reduction (zero column omitted) gives this RREF; $x_4$ is free.' },
            { tex: '\\mathbf{x} = x_4 \\begin{bmatrix} 1/4 \\\\ 5/4 \\\\ 3/4 \\\\ 1 \\end{bmatrix}', why: 'Read off $x_1 = \\frac{1}{4}x_4$, $x_2 = \\frac{5}{4}x_4$, $x_3 = \\frac{3}{4}x_4$.' },
            { tex: 'x_4 = 4 \\implies \\mathbf{x} = (1, 5, 3, 4)', why: 'Chemists want the smallest positive whole numbers, so choose $x_4$ to clear the denominators.' },
          ],
          result: '$\\text{C}_3\\text{H}_8 + 5\\,\\text{O}_2 \\to 3\\,\\text{CO}_2 + 4\\,\\text{H}_2\\text{O}$. The free variable reflects a physical fact: burning twice as much propane balances just as well.',
        },
        {
          type: 'p',
          text: 'A **network** — streets, pipes, a game\'s resource economy — consists of junctions (nodes) joined by branches carrying flows. At each node, *flow in = flow out*: one linear equation per node. External inflows and outflows become the right-hand sides, and the free variables describe how traffic can circulate without changing what enters and leaves.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Flow conservation in games',
          text: 'The same equations balance a colony-sim\'s production chain (iron in = iron out at each factory), route agents through a navigation graph, or check that a level\'s water pipes never create or destroy water. When the system has free variables, the designer — or an optimiser — gets to choose them.',
        },
      ],
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'numeric',
      prompt: 'Four one-way streets form a loop $A \\to B \\to C \\to D \\to A$ with flows $x_1$ (on $AB$), $x_2$ ($BC$), $x_3$ ($CD$), $x_4$ ($DA$), in cars per minute. From outside, $50$ cars/min enter at $A$, $30$ leave at $B$, $40$ enter at $C$, and $60$ leave at $D$. Since the streets are one-way, every flow must be $\\ge 0$. What is the **smallest possible** flow $x_2$ on street $BC$?',
      graph: {
        type: 'graph',
        x: [-5, 5],
        y: [-4, 4],
        equal: true,
        segments: [
          { from: [-2, 2], to: [2, 2], arrow: true, color: 'blue', label: 'x1' },
          { from: [2, 2], to: [2, -2], arrow: true, color: 'blue', label: 'x2' },
          { from: [2, -2], to: [-2, -2], arrow: true, color: 'blue', label: 'x3' },
          { from: [-2, -2], to: [-2, 2], arrow: true, color: 'blue', label: 'x4' },
          { from: [-4, 3.5], to: [-2, 2], arrow: true, color: 'green', label: '50 in' },
          { from: [2, 2], to: [4, 3.5], arrow: true, color: 'red', label: '30 out' },
          { from: [4, -3.5], to: [2, -2], arrow: true, color: 'green', label: '40 in' },
          { from: [-2, -2], to: [-4, -3.5], arrow: true, color: 'red', label: '60 out' },
        ],
        points: [
          { x: -2, y: 2, label: 'A' },
          { x: 2, y: 2, label: 'B' },
          { x: 2, y: -2, label: 'C' },
          { x: -2, y: -2, label: 'D' },
        ],
        caption: 'Flow in = flow out at every junction.',
      },
      hint: 'Write one equation per junction, e.g. at $A$: $50 + x_4 = x_1$. Solve with $x_4$ free, then use $x_4 \\ge 0$.',
      label: 'minimum $x_2 =$',
      unit: 'cars/min',
      answer: '20',
      explanation: 'Junctions: $A$: $x_1 = 50 + x_4$; $B$: $x_1 = 30 + x_2$; $C$: $x_3 = x_2 + 40$; $D$: $x_3 = 60 + x_4$. Row reduction leaves one free variable (one equation is redundant, because total inflow $90$ equals total outflow $90$). With $x_4 = t$: $x_1 = 50 + t$, $x_2 = 20 + t$, $x_3 = 60 + t$, i.e. $\\mathbf{x} = (50, 20, 60, 0) + t(1, 1, 1, 1)$. The direction $(1, 1, 1, 1)$ is cars circling the loop. All flows are $\\ge 0$ exactly when $t \\ge 0$, so the smallest $x_2$ is $20$, when $DA$ carries no traffic.',
    },
  ],
  takeaways: [
    'Basic variables belong to pivot columns, free variables to the other columns; the general solution expresses the basic variables in terms of the free ones.',
    'A homogeneous system $A\\mathbf{x} = \\mathbf{0}$ always has the trivial solution, and has nontrivial ones exactly when there is a free variable — guaranteed when there are more unknowns than equations.',
    'Parametric vector form: write $\\mathbf{x}$ as a column, then split it into a constant vector plus one vector per free variable, $\\mathbf{x} = \\mathbf{p} + s\\mathbf{u} + t\\mathbf{v}$.',
    'The solutions of a consistent $A\\mathbf{x} = \\mathbf{b}$ are $\\mathbf{p} + \\mathbf{v}_h$: the homogeneous solution set (through the origin) translated by one particular solution $\\mathbf{p}$.',
    'The particular solution and the direction vectors are not unique; check your answer by substitution instead of comparing it with a key.',
    'Balancing chemical equations and conserving flow in networks lead to linear systems whose free variables are real-world freedoms.',
  ],
  reading: [
    {
      title: 'Interactive Linear Algebra — Parametric Form and Solution Sets',
      url: 'https://textbooks.math.gatech.edu/ila/',
      source: 'book',
      note: 'Sections 1.3 and 2.4 develop parametric form and the "translate of the homogeneous solutions" picture with interactive 3D figures.',
    },
    {
      title: 'Khan Academy — Linear Algebra',
      url: 'https://www.khanacademy.org/math/linear-algebra',
      source: 'khan',
      note: 'The videos on reduced row echelon form and null spaces work through parametric solutions step by step.',
    },
    {
      title: 'Wikipedia — Chemical equation',
      url: 'https://en.wikipedia.org/wiki/Chemical_equation',
      source: 'wikipedia',
      note: 'Background on balancing chemical equations, which this lesson turns into a homogeneous linear system.',
    },
  ],
};
