import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'la-row-reduction',
  title: 'Row Reduction and Echelon Forms',
  summary: 'The row reduction algorithm in full: echelon forms, pivots, the one theorem that tells you how many solutions a system has, and what changes when a computer does it in floating point.',
  minutes: 19,
  objectives: [
    'State the conditions for echelon form and reduced echelon form, and identify pivot positions and pivot columns',
    'Carry out the forward and backward phases of the row reduction algorithm on any augmented matrix',
    'Explain why every matrix has exactly one reduced echelon form, but many echelon forms',
    'Use the existence and uniqueness theorem to decide whether a system has no, one, or infinitely many solutions',
    'Estimate the cost of elimination as $\\tfrac{2}{3}n^3$ flops and explain why software uses partial pivoting',
  ],
  steps: [
    // ------------------------------------------------------------------ 0
    {
      kind: 'concept',
      title: 'Echelon form and reduced echelon form',
      blocks: [
        {
          type: 'p',
          text: 'In College Algebra you reduced small systems to a "staircase" and back-substituted. To turn that into an algorithm that works for any matrix — and that a computer can run — we need precise definitions of the target shapes. The building block is the [[leading-entry]] of a row: its leftmost nonzero entry.',
        },
        {
          type: 'definition',
          term: 'Echelon form',
          text: 'A matrix is in [[echelon-form]] (row echelon form) if:\n\n1. All nonzero rows are above any rows of all zeros.\n2. Each leading entry is in a column to the right of the leading entry of the row above it.\n3. All entries in a column below a leading entry are zero.',
        },
        {
          type: 'definition',
          term: 'Reduced echelon form',
          text: 'A matrix in echelon form is in [[reduced-echelon-form]] (RREF) if, in addition:\n\n4. The leading entry in each nonzero row is $1$.\n5. Each leading $1$ is the only nonzero entry in its column.',
        },
        {
          type: 'math',
          tex: '\\underbrace{\\begin{bmatrix} \\blacksquare & * & * & * & * \\\\ 0 & \\blacksquare & * & * & * \\\\ 0 & 0 & 0 & \\blacksquare & * \\\\ 0 & 0 & 0 & 0 & 0 \\end{bmatrix}}_{\\text{echelon form}} \\qquad \\underbrace{\\begin{bmatrix} 1 & 0 & * & 0 & * \\\\ 0 & 1 & * & 0 & * \\\\ 0 & 0 & 0 & 1 & * \\\\ 0 & 0 & 0 & 0 & 0 \\end{bmatrix}}_{\\text{reduced echelon form}}',
          caption: '$\\blacksquare$ = any nonzero number, $*$ = any number. The steps of the staircase may be wider than one column (column 3 here).',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why these two shapes',
          text: 'Echelon form is exactly the shape where [[back-substitution]] works: going up, each row introduces at least one new unknown, so you can solve from the bottom row upward. Reduced echelon form goes further — every leading $1$ sits alone in its column, so each nonzero row says "this unknown $=$ number (minus terms in the unknowns without a leading entry)". You can read the solution off without any substitution.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Check the columns, not just the diagonal',
          text: 'RREF does **not** mean "identity matrix on the left". Condition 5 only says the column of each *leading* $1$ is otherwise zero. Columns without a leading entry (the $*$ column above) can hold anything. And a matrix with a leading $3$ is in echelon form but not reduced.',
        },
      ],
    },
    // ------------------------------------------------------------------ 1
    {
      kind: 'mcq',
      prompt: 'Which matrix is in **reduced** echelon form?',
      options: [
        {
          text: '$\\begin{bmatrix} 1 & 3 & 0 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 0 \\end{bmatrix}$',
          why: 'The leading $1$ of row 2 is in column 2, which also contains a $3$ above it. Condition 5 fails: it is in echelon form, but not reduced.',
        },
        {
          text: '$\\begin{bmatrix} 1 & 0 & 5 \\\\ 0 & 2 & 1 \\end{bmatrix}$',
          why: 'Row 2 has leading entry $2$, not $1$ (condition 4).',
        },
        {
          text: '$\\begin{bmatrix} 1 & 0 & 2 & 0 \\\\ 0 & 1 & -3 & 0 \\\\ 0 & 0 & 0 & 1 \\end{bmatrix}$',
          correct: true,
          why: 'Leading $1$s in columns $1, 2, 4$ move right as you go down, and each is the only nonzero entry in its column. Column 3 has no leading entry, so its $2$ and $-3$ are allowed.',
        },
        {
          text: '$\\begin{bmatrix} 0 & 0 & 0 \\\\ 1 & 2 & 0 \\\\ 0 & 0 & 1 \\end{bmatrix}$',
          why: 'A zero row sits above nonzero rows (condition 1). Swapping it to the bottom would fix that.',
        },
      ],
      explanation: 'Check the five conditions in order: zero rows at the bottom, leading entries stepping right, zeros below them, leading entries equal to $1$, and zeros above each leading $1$. Only the third matrix passes all five. A common misconception is that RREF needs an identity matrix on the left — the non-pivot column $3$ shows it does not.',
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'concept',
      title: 'Pivots, and why the reduced form is unique',
      blocks: [
        {
          type: 'p',
          text: 'Row reduction is full of choices: which row to swap up, whether to scale now or later. Remarkably, the end result never depends on them — once you insist on the *reduced* form.',
        },
        {
          type: 'theorem',
          name: 'Uniqueness of the reduced echelon form',
          text: 'Each matrix is row equivalent to **one and only one** matrix in reduced echelon form.',
        },
        {
          type: 'definition',
          term: 'Pivot position and pivot column',
          text: 'A [[pivot]] position in a matrix $A$ is a location that holds a leading $1$ in the reduced echelon form of $A$. A [[pivot-column]] is a column of $A$ that contains a pivot position. The nonzero entry of $A$ (or of an intermediate matrix) that sits in a pivot position and is used to create zeros is called a *pivot*.',
        },
        {
          type: 'p',
          text: 'Because the RREF is unique, so are the pivot positions — and since every echelon form of $A$ reduces to that same RREF by scaling and clearing upward (which never moves a leading entry), **every** echelon form has its leading entries in exactly the pivot positions. In practice you find the pivots from any echelon form; you never need to finish the reduction just to locate them.',
        },
        {
          type: 'compare',
          left: {
            title: 'Echelon forms: many',
            tone: 'neutral',
            tex: ['\\begin{bmatrix} 2 & 4 & 6 \\\\ 0 & 1 & 1 \\end{bmatrix} \\sim \\begin{bmatrix} 1 & 2 & 3 \\\\ 0 & 1 & 1 \\end{bmatrix} \\sim \\begin{bmatrix} 1 & 3 & 4 \\\\ 0 & 1 & 1 \\end{bmatrix}'],
            text: 'All three are in echelon form and row equivalent (scale row 1, then add row 2 to it).',
          },
          right: {
            title: 'Reduced echelon form: one',
            tone: 'good',
            tex: ['\\begin{bmatrix} 1 & 0 & 1 \\\\ 0 & 1 & 1 \\end{bmatrix}'],
            text: 'Every one of them reduces to this matrix. Pivot columns: $1$ and $2$ in all of them.',
          },
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the RREF cannot depend on your choices',
          text: 'A relation among columns, $c_1\\mathbf{a}_1 + \\cdots + c_n\\mathbf{a}_n = \\mathbf{0}$, says that $(c_1, \\dots, c_n)$ solves the system with coefficient matrix $A$ and right-hand side $\\mathbf{0}$. Row operations preserve solution sets, so **row-equivalent matrices have exactly the same column relations**. In an RREF those relations are visible: a column is a pivot column exactly when it is *not* a combination of the columns to its left, and each non-pivot column\'s entries are the coefficients that build it from the pivot columns. Both facts are determined by the relations of $A$, so only one RREF is possible.',
        },
        {
          type: 'deepdive',
          title: 'Seeing the column relations in an RREF',
          blocks: [
            {
              type: 'p',
              text: 'In $R = \\begin{bmatrix} 1 & 0 & 2 & 0 \\\\ 0 & 1 & -3 & 0 \\\\ 0 & 0 & 0 & 1 \\end{bmatrix}$, column 3 equals $2(\\text{col } 1) - 3(\\text{col } 2)$, while column 4 cannot be built from columns 1–3 (they all have $0$ in the last row). If $A \\sim R$, then the third column of $A$ must also equal $2\\mathbf{a}_1 - 3\\mathbf{a}_2$, and $\\mathbf{a}_4$ cannot be a combination of $\\mathbf{a}_1, \\mathbf{a}_2, \\mathbf{a}_3$. Any other reduced matrix would encode a different relation — impossible. (A full proof is in Lay\'s *Linear Algebra and Its Applications*, Appendix A.)',
            },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'truefalse',
      prompt: 'Every matrix has exactly one echelon form, so two people who row-reduce the same matrix correctly to echelon form always get the same answer.',
      answer: false,
      explanation: 'Echelon forms are not unique: scaling a row or adding a lower row to a higher one keeps a matrix in echelon form, so $\\left[\\begin{smallmatrix} 2 & 4 \\\\ 0 & 1 \\end{smallmatrix}\\right]$ and $\\left[\\begin{smallmatrix} 1 & 2 \\\\ 0 & 1 \\end{smallmatrix}\\right]$ are both echelon forms of the same matrix. What *is* unique is the **reduced** echelon form, and therefore the pivot positions — every echelon form has its leading entries in the same places.',
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'concept',
      title: 'The algorithm, part 1: the forward phase',
      blocks: [
        {
          type: 'p',
          text: 'The row reduction algorithm has two phases. The **forward phase** produces an echelon form, working left to right and top to bottom. The **backward phase** turns it into the reduced echelon form, working right to left and bottom to top.',
        },
        {
          type: 'steps',
          items: [
            { title: 'Find the pivot column', text: 'Begin with the leftmost nonzero column. This is a pivot column; its pivot position is at the top.' },
            { title: 'Choose a pivot', text: 'Select a nonzero entry in the pivot column. If necessary, interchange rows to move it into the pivot position.' },
            { title: 'Create zeros below', text: 'Use replacement operations to make every entry below the pivot zero.' },
            { title: 'Repeat on the submatrix', text: 'Cover the pivot row (and all rows above it). Apply steps 1–3 to the submatrix that remains, until no nonzero rows are left.' },
          ],
        },
        {
          type: 'derivation',
          title: 'Forward phase on a $3 \\times 4$ augmented matrix',
          steps: [
            { tex: '\\left[\\begin{array}{ccc|c} 0 & 2 & 4 & 8 \\\\ 1 & 3 & 2 & 1 \\\\ 2 & 5 & 6 & 10 \\end{array}\\right]', why: 'The system $2x_2 + 4x_3 = 8$, $\\;x_1 + 3x_2 + 2x_3 = 1$, $\\;2x_1 + 5x_2 + 6x_3 = 10$. Column 1 is the leftmost nonzero column, but its top entry is $0$ — it cannot be a pivot.' },
            { tex: '\\xrightarrow{R_1 \\leftrightarrow R_2} \\left[\\begin{array}{ccc|c} 1 & 3 & 2 & 1 \\\\ 0 & 2 & 4 & 8 \\\\ 2 & 5 & 6 & 10 \\end{array}\\right]', why: 'Step 2: interchange to bring a nonzero entry to the pivot position. By hand we pick the $1$ because it keeps fractions away.' },
            { tex: '\\xrightarrow{R_3 - 2R_1} \\left[\\begin{array}{ccc|c} 1 & 3 & 2 & 1 \\\\ 0 & 2 & 4 & 8 \\\\ 0 & -1 & 2 & 8 \\end{array}\\right]', why: 'Step 3: clear below the pivot. Row 2 already has a $0$ there. Row 3: $[2, 5, 6 \\mid 10] - 2[1, 3, 2 \\mid 1] = [0, -1, 2 \\mid 8]$.' },
            { tex: '\\xrightarrow{\\frac{1}{2}R_2} \\left[\\begin{array}{ccc|c} 1 & 3 & 2 & 1 \\\\ 0 & 1 & 2 & 4 \\\\ 0 & -1 & 2 & 8 \\end{array}\\right]', why: 'Step 4: cover row 1. In the remaining rows the leftmost nonzero column is column 2, with pivot $2$. Scaling it to $1$ is optional in the forward phase, but it makes the next multiplier an integer.' },
            { tex: '\\xrightarrow{R_3 + R_2} \\left[\\begin{array}{ccc|c} 1 & 3 & 2 & 1 \\\\ 0 & 1 & 2 & 4 \\\\ 0 & 0 & 4 & 12 \\end{array}\\right]', why: 'Clear below the second pivot: $[0, -1, 2 \\mid 8] + [0, 1, 2 \\mid 4] = [0, 0, 4 \\mid 12]$. Covering rows 1–2 leaves one row with pivot $4$ in column 3; nothing lies below it.' },
          ],
          result: 'Echelon form reached. The pivot positions are $(1,1)$, $(2,2)$, $(3,3)$, so columns $1, 2, 3$ are the pivot columns. The last column is not one, which (as you will see shortly) means the system is consistent.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Hand choices versus machine choices',
          text: 'By hand you choose pivots to keep numbers small and whole. A computer instead picks the entry of **largest absolute value** in the column (here the $2$ in row 3), for reasons of numerical accuracy covered at the end of this lesson. Both are correct: the reduced form you end with is the same.',
        },
      ],
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'order',
      prompt: 'Put the steps of the forward phase in the order the algorithm performs them for each new pivot.',
      lines: [
        'Find the leftmost column that is not all zeros (in the rows not yet covered).',
        'Choose a nonzero entry in that column and interchange rows to move it to the pivot position.',
        'Use replacement operations to create zeros in every position below the pivot.',
        'Cover the pivot row and repeat on the remaining submatrix.',
      ],
      distractors: ['Create zeros above the pivot.', 'Scale the last row so its leading entry is $1$.'],
      explanation: 'The forward phase only works *downward*: find a pivot column, put a nonzero pivot in place, clear below it, move on. Creating zeros above pivots and scaling pivots to $1$ belong to the backward phase, which starts from the bottom pivot once the echelon form is complete.',
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'fill',
      prompt: 'The first forward step on this matrix uses the pivot $1$ in row 1. After $R_2 \\to R_2 - 2R_1$ and $R_3 \\to R_3 + 3R_1$, what is the new row 3?',
      tex: '\\left[\\begin{array}{ccc|c} 1 & -2 & 3 & 1 \\\\ 2 & -3 & 8 & 4 \\\\ -3 & 5 & -7 & 2 \\end{array}\\right]',
      template: 'New $R_3 = [$ ___ $\\;$ ___ $\\;$ ___ $\\mid$ ___ $]$',
      blanks: [{ answers: ['0'] }, { answers: ['-1'] }, { answers: ['2'] }, { answers: ['5'] }],
      hint: '$3R_1 = [\\,3 \\;\\; {-6} \\;\\; 9 \\mid 3\\,]$. Add it to row 3.',
      explanation: '$[-3, 5, -7 \\mid 2] + [3, -6, 9 \\mid 3] = [0, -1, 2 \\mid 5]$. (Row 2 becomes $[0, 1, 2 \\mid 2]$.) Both replacements use row 1, which neither changes, so it is safe to do them in one step. Next, the forward phase would use the pivot $1$ in row 2 and $R_3 \\to R_3 + R_2$ to clear the $-1$.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'The algorithm, part 2: the backward phase',
      blocks: [
        {
          type: 'steps',
          items: [
            { title: 'Start at the bottom pivot', text: 'Beginning with the rightmost pivot and working up and to the left, scale each pivot row to make the pivot $1$.' },
            { title: 'Create zeros above', text: 'Use replacements with that row to make every entry above the pivot zero. Then move to the next pivot up.' },
          ],
        },
        {
          type: 'derivation',
          title: 'Backward phase: finish the $3 \\times 4$ example',
          steps: [
            { tex: '\\left[\\begin{array}{ccc|c} 1 & 3 & 2 & 1 \\\\ 0 & 1 & 2 & 4 \\\\ 0 & 0 & 4 & 12 \\end{array}\\right]', why: 'The echelon form from the forward phase.' },
            { tex: '\\xrightarrow{\\frac{1}{4}R_3} \\left[\\begin{array}{ccc|c} 1 & 3 & 2 & 1 \\\\ 0 & 1 & 2 & 4 \\\\ 0 & 0 & 1 & 3 \\end{array}\\right]', why: 'The rightmost pivot is the $4$ in row 3. Scale it to $1$.' },
            { tex: '\\xrightarrow[R_1 - 2R_3]{R_2 - 2R_3} \\left[\\begin{array}{ccc|c} 1 & 3 & 0 & -5 \\\\ 0 & 1 & 0 & -2 \\\\ 0 & 0 & 1 & 3 \\end{array}\\right]', why: 'Clear column 3 above the pivot. Row 2: $[0,1,2 \\mid 4] - 2[0,0,1 \\mid 3] = [0,1,0 \\mid -2]$. Row 1: $[1,3,2 \\mid 1] - 2[0,0,1 \\mid 3] = [1,3,0 \\mid -5]$. Both use row 3, so one step is safe.' },
            { tex: '\\xrightarrow{R_1 - 3R_2} \\left[\\begin{array}{ccc|c} 1 & 0 & 0 & 1 \\\\ 0 & 1 & 0 & -2 \\\\ 0 & 0 & 1 & 3 \\end{array}\\right]', why: 'Next pivot up: the $1$ in row 2. Clear above it: $-5 - 3(-2) = 1$.' },
            { tex: 'x_1 = 1, \\quad x_2 = -2, \\quad x_3 = 3', why: 'Each row of the RREF now reads "unknown $=$ number".' },
          ],
          result: 'Check in the original equations: $2(-2) + 4(3) = 8$ ✓, $\\;1 + 3(-2) + 2(3) = 1$ ✓, $\\;2 + 5(-2) + 6(3) = 10$ ✓. The unique solution is $\\mathbf{x} = (1, -2, 3)$ as a column vector.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why go bottom-up in the backward phase',
          text: 'When you clear above the bottom pivot, the pivot row has zeros everywhere to the left of the pivot, so the replacements change only that column (and the right-hand side) in the rows above — they cannot undo zeros you have already made. Working top-down instead would add rows with nonzero entries further right, creating fresh work. Bottom-up is the order that never wastes an operation.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Two names for one idea',
          text: 'Stopping after the forward phase and back-substituting is **Gaussian elimination**; running both phases to the RREF is **Gauss–Jordan elimination**. They take the same number of operations up to lower-order terms, and the RREF is what you want whenever there are free unknowns, as in the next example.',
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'error',
      prompt: 'A student runs the backward phase on the echelon form below. Tap the first line that is wrong.',
      tex: '\\left[\\begin{array}{ccc|c} 1 & 2 & -1 & 3 \\\\ 0 & 1 & 2 & 4 \\\\ 0 & 0 & 1 & 1 \\end{array}\\right]',
      lines: [
        'The bottom pivot is already $1$, so start clearing column 3.',
        '$R_2 \\to R_2 - 2R_3$: new row 2 is $[\\,0 \\;\\; 1 \\;\\; 0 \\mid 2\\,]$.',
        '$R_1 \\to R_1 + R_3$: new row 1 is $[\\,1 \\;\\; 2 \\;\\; 0 \\mid 2\\,]$.',
        '$R_1 \\to R_1 - 2R_2$: new row 1 is $[\\,1 \\;\\; 0 \\;\\; 0 \\mid -2\\,]$.',
        'So $\\mathbf{x} = (-2, 2, 1)$.',
      ],
      errorLines: [3],
      explanation: 'In line 3 the right-hand side should be $3 + 1 = 4$, not $2$ — the student subtracted instead of adding. The correct row 1 is $[\\,1 \\;\\; 2 \\;\\; 0 \\mid 4\\,]$, and then $R_1 - 2R_2$ gives $[\\,1 \\;\\; 0 \\;\\; 0 \\mid 0\\,]$. The solution is $\\mathbf{x} = (0, 2, 1)$. Check: $0 + 4 - 1 = 3$ ✓, while the student\'s answer gives $-2 + 4 - 1 = 1 \\neq 3$. Always substitute back into the original rows.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'concept',
      title: 'A $3 \\times 5$ example: when a column is skipped',
      blocks: [
        {
          type: 'p',
          text: 'With more unknowns than pivots, a column can be passed over: after covering the rows above, the remaining entries of some column may all be $0$. Step 1 of the algorithm then simply moves to the next column. Here is a system of three equations in four unknowns.',
        },
        {
          type: 'derivation',
          title: 'Reduce $\\begin{aligned} x_1 + x_2 + x_3 &= 4 \\\\ 2x_1 + 3x_2 + x_3 + x_4 &= 7 \\\\ -x_1 - 2x_3 + 2x_4 &= -7 \\end{aligned}$',
          steps: [
            { tex: '\\left[\\begin{array}{cccc|c} 1 & 1 & 1 & 0 & 4 \\\\ 2 & 3 & 1 & 1 & 7 \\\\ -1 & 0 & -2 & 2 & -7 \\end{array}\\right]', why: 'The augmented matrix: $3$ rows, $4$ unknowns plus the right-hand side. Pivot column 1, pivot $1$ already in place.' },
            { tex: '\\xrightarrow[R_3 + R_1]{R_2 - 2R_1} \\left[\\begin{array}{cccc|c} 1 & 1 & 1 & 0 & 4 \\\\ 0 & 1 & -1 & 1 & -1 \\\\ 0 & 1 & -1 & 2 & -3 \\end{array}\\right]', why: 'Clear column 1 below the pivot. Row 2: $[2,3,1,1 \\mid 7] - 2[1,1,1,0 \\mid 4]$. Row 3: $[-1,0,-2,2 \\mid -7] + [1,1,1,0 \\mid 4]$.' },
            { tex: '\\xrightarrow{R_3 - R_2} \\left[\\begin{array}{cccc|c} 1 & 1 & 1 & 0 & 4 \\\\ 0 & 1 & -1 & 1 & -1 \\\\ 0 & 0 & 0 & 1 & -2 \\end{array}\\right]', why: 'Cover row 1; the next pivot is the $1$ in row 2, column 2. Clearing below it also wipes out column 3 in row 3. Covering row 2, column 3 has only a $0$ left — no pivot there — so step 1 moves on to column 4, where row 3 has the pivot $1$. Echelon form reached.' },
            { tex: '\\xrightarrow{R_2 - R_3} \\left[\\begin{array}{cccc|c} 1 & 1 & 1 & 0 & 4 \\\\ 0 & 1 & -1 & 0 & 1 \\\\ 0 & 0 & 0 & 1 & -2 \\end{array}\\right]', why: 'Backward phase, rightmost pivot first (row 3, column 4). Row 1 already has $0$ above it; clear row 2: $[0,1,-1,1 \\mid -1] - [0,0,0,1 \\mid -2]$.' },
            { tex: '\\xrightarrow{R_1 - R_2} \\left[\\begin{array}{cccc|c} 1 & 0 & 2 & 0 & 3 \\\\ 0 & 1 & -1 & 0 & 1 \\\\ 0 & 0 & 0 & 1 & -2 \\end{array}\\right]', why: 'Next pivot up is row 2, column 2. Clear above it: $[1,1,1,0 \\mid 4] - [0,1,-1,0 \\mid 1] = [1,0,2,0 \\mid 3]$. All pivots are $1$ and alone in their columns: this is the RREF.' },
          ],
          result: 'Pivot columns: $1$, $2$ and $4$. Column 3 is not a pivot column. Reading the rows: $x_1 + 2x_3 = 3$, $\\;x_2 - x_3 = 1$, $\\;x_4 = -2$. The unknown $x_3$ is not pinned down — any value works, and $x_1, x_2$ adjust to it. The next lesson turns this into a formula for *every* solution.',
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'Graders check three things on a row reduction: that each step is a legal elementary operation (labelled, e.g. $R_2 - 2R_1$), that the arithmetic is right, and that the final matrix really satisfies all five RREF conditions. Label every arrow — it earns partial credit when the arithmetic slips and makes your own errors easy to find.',
        },
      ],
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'numeric',
      prompt: 'How many **pivot columns** does this matrix have?',
      tex: '\\begin{bmatrix} 1 & 2 & 3 & 4 \\\\ 2 & 4 & 7 & 9 \\\\ 3 & 6 & 10 & 13 \\end{bmatrix}',
      hint: 'Run the forward phase: clear column 1 with $R_2 - 2R_1$ and $R_3 - 3R_1$, then look at what is left.',
      label: 'number of pivot columns:',
      answer: '2',
      explanation: '$R_2 - 2R_1 = [0, 0, 1, 1]$ and $R_3 - 3R_1 = [0, 0, 1, 1]$. Column 2 now has only zeros below row 1, so it is skipped; the next pivot is the $1$ in row 2, column 3. Then $R_3 - R_2$ gives a zero row. The echelon form $\\left[\\begin{smallmatrix} 1 & 2 & 3 & 4 \\\\ 0 & 0 & 1 & 1 \\\\ 0 & 0 & 0 & 0 \\end{smallmatrix}\\right]$ has pivots in columns $1$ and $3$: two pivot columns.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'The existence and uniqueness theorem',
      blocks: [
        {
          type: 'p',
          text: 'Everything you need to know about *how many* solutions a system has is visible in the pivot pattern of its augmented matrix — usually after the forward phase alone.',
        },
        {
          type: 'theorem',
          name: 'Existence and uniqueness theorem',
          text: 'A linear system is **consistent** if and only if the rightmost column of its augmented matrix is **not** a pivot column — that is, if and only if an echelon form has no row of the form $[\\,0 \\;\\; \\cdots \\;\\; 0 \\mid b\\,]$ with $b \\neq 0$.\n\nIf the system is consistent, it has a **unique** solution when every column of the coefficient matrix is a pivot column, and **infinitely many** solutions when at least one column of the coefficient matrix is not a pivot column.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the theorem is true',
          text: '**Existence.** A pivot in the last column means some echelon row is $[\\,0 \\;\\cdots\\; 0 \\mid b\\,]$ with $b \\ne 0$, i.e. $0 = b$: no solution. If there is no such row, every nonzero row of the RREF can be solved for its pivot unknown, choosing any values for the others — so a solution exists.\n\n**Uniqueness.** If every coefficient column has a pivot, the RREF reads $x_1 = d_1, \\dots, x_n = d_n$: one solution. If some column $j$ has no pivot, $x_j$ never appears as a leading unknown, so you can give it any value and solve for the rest — infinitely many solutions.',
        },
        {
          type: 'table',
          headers: ['Echelon form (example)', 'Last column a pivot column?', 'Coefficient columns all pivot?', 'Solutions'],
          rows: [
            ['$\\left[\\begin{smallmatrix} 2 & 1 & | & 3 \\\\ 0 & 0 & | & 5 \\end{smallmatrix}\\right]$', 'yes', '—', 'none'],
            ['$\\left[\\begin{smallmatrix} 2 & 1 & | & 3 \\\\ 0 & 4 & | & 5 \\end{smallmatrix}\\right]$', 'no', 'yes', 'exactly one'],
            ['$\\left[\\begin{smallmatrix} 2 & 1 & 7 & | & 3 \\\\ 0 & 4 & 1 & | & 5 \\end{smallmatrix}\\right]$', 'no', 'no (column 3)', 'infinitely many'],
          ],
          caption: 'Read the pivots, then read off the answer — no need to finish solving.',
        },
        {
          type: 'p',
          text: 'See the theorem geometrically with the system $x_1 + h\\,x_2 = 3$, $\\;2x_1 + 4x_2 = k$. One replacement, $R_2 \\to R_2 - 2R_1$, gives the echelon row $[\\,0 \\;\\; 4 - 2h \\mid k - 6\\,]$. Where its pivot lands decides everything.',
        },
        {
          type: 'graph',
          x: [-4, 6],
          y: [-4, 5],
          equal: true,
          parametric: [{ x: '3 - h*t', y: 't', t: [-12, 12], label: '$x_1 + h x_2 = 3$', color: 'blue' }],
          functions: [{ expr: '(k - 2x)/4', label: '$2x_1 + 4x_2 = k$', color: 'red' }],
          sliders: [
            { name: 'h', min: -2, max: 4, step: 0.25, value: 0.5, label: '$h$' },
            { name: 'k', min: 0, max: 10, step: 0.5, value: 4, label: '$k$' },
          ],
          readouts: [
            { label: 'row 2 coefficient $4 - 2h =$', expr: '4 - 2h', digits: 2 },
            { label: 'row 2 right side $k - 6 =$', expr: 'k - 6', digits: 2 },
          ],
          caption: 'If $4 - 2h \\neq 0$, column 2 is a pivot column: one crossing. Set $h = 2$: the pivot of row 2 jumps to the last column (if $k \\neq 6$), and the lines are parallel. Then set $k = 6$: row 2 is all zeros, column 2 has no pivot, and the lines coincide.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'A zero row is not a contradiction',
          text: 'A row $[\\,0 \\;\\cdots\\; 0 \\mid 0\\,]$ says $0 = 0$: harmless, it just means one equation was redundant. It does **not** by itself mean infinitely many solutions either — $\\left[\\begin{smallmatrix} 1 & 0 & | & 2 \\\\ 0 & 1 & | & 3 \\\\ 0 & 0 & | & 0 \\end{smallmatrix}\\right]$ has exactly one. Count pivot columns, not zero rows.',
        },
        {
          type: 'p',
          text: 'One consequence is worth memorising: a consistent system with **more unknowns than equations** always has infinitely many solutions. There is at most one pivot per row, so at most $m$ pivots for $n > m$ columns — some coefficient column must miss out.',
        },
      ],
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'mcq',
      prompt: 'An augmented matrix has been reduced to the echelon form below. How many solutions does the system have?',
      tex: '\\left[\\begin{array}{cccc|c} 1 & 4 & -2 & 0 & 3 \\\\ 0 & 0 & 5 & 1 & -1 \\\\ 0 & 0 & 0 & 0 & 0 \\end{array}\\right]',
      options: [
        {
          text: 'None',
          why: 'There is no row $[\\,0 \\;\\cdots\\; 0 \\mid b\\,]$ with $b \\neq 0$; the zero row says $0 = 0$, which is fine.',
        },
        {
          text: 'Exactly one',
          why: 'Exactly one would need a pivot in every coefficient column. Columns $2$ and $4$ have none.',
        },
        {
          text: 'Infinitely many',
          correct: true,
          why: 'The last column is not a pivot column (consistent), and columns $2$ and $4$ of the coefficient matrix are not pivot columns, so $x_2$ and $x_4$ can be chosen freely.',
        },
        {
          text: 'Cannot tell until the matrix is in reduced echelon form',
          why: 'The pivot positions are already visible in any echelon form, and the theorem only needs those.',
        },
      ],
      explanation: 'Pivots sit in columns $1$ and $3$. The rightmost column has no pivot, so the system is consistent. Two of the four unknown-columns lack a pivot, so the solution set is infinite (in fact a 2-parameter family). Notice we never had to finish the reduction.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'numeric',
      prompt: 'For which value of $h$ is the rightmost column of this augmented matrix a pivot column (so the system is inconsistent)?',
      tex: '\\left[\\begin{array}{cc|c} 1 & h & 4 \\\\ 3 & 6 & 8 \\end{array}\\right]',
      hint: 'Apply $R_2 \\to R_2 - 3R_1$ and look at the new row 2.',
      label: '$h =$',
      answer: '2',
      explanation: '$R_2 - 3R_1$ gives $[\\,0 \\;\\; 6 - 3h \\mid 8 - 12\\,] = [\\,0 \\;\\; 6 - 3h \\mid -4\\,]$. If $6 - 3h \\neq 0$, the pivot of row 2 is in column 2, the last column is not a pivot column, and there is exactly one solution. If $h = 2$, row 2 becomes $[\\,0 \\;\\; 0 \\mid -4\\,]$: the pivot moves into the last column and the system says $0 = -4$, so it is inconsistent.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'concept',
      title: 'For programmers: cost and partial pivoting',
      blocks: [
        {
          type: 'p',
          text: 'Numerical analysts count **flops** (floating-point operations: one add, subtract, multiply or divide each). For an $n \\times (n+1)$ augmented matrix, clearing below the pivot in column $k$ updates $n - k + 1$ entries in each of the $n - k$ rows below — one multiply and one subtract per entry.',
        },
        {
          type: 'derivation',
          title: 'Counting the forward phase',
          steps: [
            { tex: '\\text{flops} \\approx \\sum_{k=1}^{n-1} 2(n - k)(n - k + 1)', why: 'Column $k$: $(n - k)$ rows, $(n - k + 1)$ entries each, $2$ flops per entry. (Computing each multiplier adds lower-order terms.)' },
            { tex: '= 2\\sum_{j=1}^{n-1} j(j + 1)', why: 'Substitute $j = n - k$, which runs from $n - 1$ down to $1$.' },
            { tex: '= \\tfrac{2}{3}(n - 1)\\,n\\,(n + 1)', why: 'Use $\\sum j^2 = \\frac{(n-1)n(2n-1)}{6}$ and $\\sum j = \\frac{(n-1)n}{2}$ for $j$ up to $n - 1$, then simplify.' },
            { tex: '\\approx \\tfrac{2}{3}n^3', why: 'For large $n$, the leading term dominates: $O(n^3)$ in [[big-o-notation]].' },
          ],
          result: 'The forward phase costs about $\\frac{2}{3}n^3$ flops; back-substitution costs only about $n^2$. Doubling $n$ multiplies the work by about $2^3 = 8$. A dense $1000 \\times 1000$ system takes roughly $6.7 \\times 10^8$ flops — well under a second on a CPU — but $n = 10^5$ is already $10^6$ times more.',
        },
        {
          type: 'p',
          text: 'Floating point brings a second issue. Exact arithmetic is happy with any nonzero pivot; doubles are not. Dividing by a tiny pivot creates a huge multiplier, and the huge numbers it produces swamp the information in the other entries. The fix is [[partial-pivoting]]: in each column, interchange rows to use the entry of **largest absolute value** as the pivot, so every multiplier has absolute value at most $1$.',
        },
        {
          type: 'code',
          title: 'pivot.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdio>
#include <utility>
#include <vector>

using Matrix = std::vector<std::vector<double>>;

// Solves an n x (n+1) augmented system. Assumes a unique solution.
std::vector<double> solve(Matrix M, bool partialPivoting) {
    const int n = static_cast<int>(M.size());
    for (int col = 0; col < n; ++col) {            // forward phase
        int p = col;
        if (partialPivoting)
            for (int r = col + 1; r < n; ++r)
                if (std::fabs(M[r][col]) > std::fabs(M[p][col])) p = r;
        std::swap(M[col], M[p]);                    // interchange
        for (int r = col + 1; r < n; ++r) {         // replacement
            double m = M[r][col] / M[col][col];
            for (int c = col; c <= n; ++c) M[r][c] -= m * M[col][c];
        }
    }
    std::vector<double> x(n);
    for (int r = n - 1; r >= 0; --r) {              // backward phase
        double s = M[r][n];
        for (int c = r + 1; c < n; ++c) s -= M[r][c] * x[c];
        x[r] = s / M[r][r];
    }
    return x;
}

int main() {
    Matrix tiny = {{1e-20, 1, 1}, {1, 1, 2}};
    for (bool pivot : {false, true}) {
        auto x = solve(tiny, pivot);
        std::printf("pivoting %-3s: x1 = %.6f, x2 = %.6f\\n",
                    pivot ? "on" : "off", x[0], x[1]);
    }
}`,
          output: `pivoting off: x1 = 0.000000, x2 = 1.000000
pivoting on : x1 = 1.000000, x2 = 1.000000`,
          annotations: [
            { lines: '12-15', text: 'Partial pivoting: find the row (at or below `col`) whose entry in this column has the largest absolute value.' },
            { lines: 16, text: 'Interchange that row into the pivot position (a no-op if it is already there).' },
            { lines: '17-20', text: 'Replacement: `m` is the multiplier; subtract `m` times the pivot row. Three nested loops — this is the $\\frac{2}{3}n^3$.' },
            { lines: '22-27', text: 'Back-substitution from the echelon form: about $n^2$ flops.' },
            { lines: 32, text: 'The system $10^{-20}x_1 + x_2 = 1$, $\\;x_1 + x_2 = 2$. Its exact solution is $x_1 = \\frac{1}{1 - 10^{-20}} \\approx 1$, $x_2 \\approx 1$.' },
          ],
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'What went wrong without pivoting',
          text: 'With pivot $10^{-20}$ the multiplier is $10^{20}$, so row 2 becomes $1 - 10^{20}$ and $2 - 10^{20}$. A double holds about 16 significant digits, so both round to $-10^{20}$ and the $1$ and $2$ vanish. Then $x_2 = 1$ and $x_1 = (1 - x_2)/10^{-20} = 0$ — completely wrong. Swapping first makes the multiplier $10^{-20}$, and nothing important is rounded away. Production libraries (LAPACK, Eigen\'s `partialPivLu`) always pivot. Physics engines, which re-solve contact systems every frame, usually avoid elimination altogether and use iterative methods such as projected Gauss–Seidel.',
        },
      ],
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'numeric',
      prompt: 'Solving a dense $1000 \\times 1000$ system by elimination takes $0.05$ s on some machine. Using the $\\frac{2}{3}n^3$ operation count, about how many times longer does a $2000 \\times 2000$ system take?',
      hint: 'Compare $\\frac{2}{3}(2000)^3$ with $\\frac{2}{3}(1000)^3$.',
      label: 'factor:',
      answer: '8',
      explanation: 'The ratio is $\\frac{\\frac{2}{3}(2n)^3}{\\frac{2}{3}n^3} = 2^3 = 8$: about $0.4$ s. Cubic growth is why game engines avoid big dense solves at runtime. They exploit structure instead — tiny fixed-size matrices ($3 \\times 3$, $4 \\times 4$) with hand-written formulas, sparse systems where most entries are zero, or iterative solvers that stop when the answer is "good enough" for this frame.',
    },
  ],
  takeaways: [
    'Echelon form: zero rows at the bottom, leading entries stepping right, zeros below them. Reduced echelon form adds: leading entries are $1$ and alone in their columns.',
    'Every matrix has many echelon forms but exactly one reduced echelon form, so pivot positions and pivot columns are well defined and can be read from any echelon form.',
    'Row reduction = forward phase (pivot, clear below, move down and right) + backward phase (from the bottom pivot: scale to $1$, clear above).',
    'Existence and uniqueness: consistent iff the last column of the augmented matrix is not a pivot column; then unique iff every coefficient column is a pivot column.',
    'A consistent system with more unknowns than equations always has infinitely many solutions.',
    'Elimination costs about $\\frac{2}{3}n^3$ flops; in floating point, partial pivoting (largest absolute value as pivot) keeps rounding errors from exploding.',
  ],
  reading: [
    {
      title: 'Interactive Linear Algebra — Row Reduction',
      url: 'https://textbooks.math.gatech.edu/ila/',
      source: 'book',
      note: 'Section 1.2 states the algorithm exactly as here and lets you step through row reductions interactively.',
    },
    {
      title: 'MIT OCW 18.06 — Lecture 2: Elimination with Matrices (Strang)',
      url: 'https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/',
      source: 'other',
      note: 'Strang\'s classic lecture on elimination, pivots and what happens when a pivot is zero.',
    },
    {
      title: 'Wikipedia — Gaussian elimination',
      url: 'https://en.wikipedia.org/wiki/Gaussian_elimination',
      source: 'wikipedia',
      note: 'Covers the operation count, Gauss–Jordan elimination, and the pseudocode with partial pivoting.',
    },
    {
      title: 'Wikipedia — Pivot element',
      url: 'https://en.wikipedia.org/wiki/Pivot_element',
      source: 'wikipedia',
      note: 'Explains why small pivots are dangerous in floating-point arithmetic and compares partial with complete pivoting.',
    },
  ],
};
