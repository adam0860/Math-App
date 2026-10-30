import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'la-determinants',
  title: 'Computing Determinants',
  summary: 'From $ad - bc$ to any size: minors, cofactors, expansion along the best row or column, triangular shortcuts — and why programs never expand a big matrix this way.',
  minutes: 19,
  objectives: [
    'Compute a $2 \\times 2$ determinant and connect it to the inverse formula',
    'Find the minor $M_{ij}$ and cofactor $C_{ij}$ of any entry, using the checkerboard of signs',
    'Evaluate $3 \\times 3$ and $4 \\times 4$ determinants by cofactor expansion along any row or column',
    'Pick the row or column with the most zeros to minimize work',
    'Read off the determinant of a triangular matrix from its diagonal',
    'Explain why cofactor expansion costs about $n!$ operations and is never used for large matrices',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'The number hiding in the inverse formula',
      blocks: [
        {
          type: 'p',
          text: 'You have already met this number. In the inverse lesson, the inverse of a $2 \\times 2$ matrix came with a fraction in front:',
        },
        {
          type: 'math',
          tex: 'A = \\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix} \\quad\\implies\\quad A^{-1} = \\frac{1}{ad - bc}\\begin{bmatrix} d & -b \\\\ -c & a \\end{bmatrix}',
          caption: 'Valid only when $ad - bc \\ne 0$.',
        },
        {
          type: 'p',
          text: 'The single number $ad - bc$ decides everything. If it is nonzero, the inverse exists and the formula hands it to you. If it is zero, the formula divides by zero and $A$ is not invertible. That number is the [[determinant]] of $A$. This unit generalizes it to every [[square-matrix|square matrix]], finds fast ways to compute it, and then discovers what it *means*.',
        },
        {
          type: 'definition',
          term: 'Determinant of a $2 \\times 2$ matrix',
          text: '$$\\det A = \\begin{vmatrix} a & b \\\\ c & d \\end{vmatrix} = ad - bc.$$ Product of the main diagonal minus product of the other diagonal. The vertical bars mean "determinant of", **not** absolute value: a determinant can be negative.',
        },
        {
          type: 'derivation',
          title: 'Determinant and inverse of $A = \\begin{bmatrix} 3 & 1 \\\\ 4 & 2 \\end{bmatrix}$',
          steps: [
            { tex: '\\det A = (3)(2) - (1)(4)', why: 'Main diagonal $a d = 3 \\cdot 2$, minus the off diagonal $b c = 1 \\cdot 4$.' },
            { tex: '= 6 - 4 = 2', why: 'Nonzero, so $A$ is invertible.' },
            { tex: 'A^{-1} = \\frac{1}{2}\\begin{bmatrix} 2 & -1 \\\\ -4 & 3 \\end{bmatrix} = \\begin{bmatrix} 1 & -\\tfrac12 \\\\ -2 & \\tfrac32 \\end{bmatrix}', why: 'Swap $a$ and $d$, negate $b$ and $c$, divide by the determinant.' },
          ],
          result: '$\\det A = 2$. (Check: $A A^{-1}$ has first row $(3 - 2,\\; -\\tfrac32 + \\tfrac32) = (1, 0)$.)',
        },
        {
          type: 'graph',
          x: [-4, 6],
          y: [-4, 6],
          equal: true,
          segments: [
            { from: [0, 0], to: ['a', 'c'], arrow: true, color: 'blue', label: 'column 1' },
            { from: [0, 0], to: ['b', 'd'], arrow: true, color: 'red', label: 'column 2' },
            { from: ['a', 'c'], to: ['a + b', 'c + d'], dashed: true, color: 'gray' },
            { from: ['b', 'd'], to: ['a + b', 'c + d'], dashed: true, color: 'gray' },
          ],
          sliders: [
            { name: 'a', min: -3, max: 3, step: 0.5, value: 3, label: '$a$' },
            { name: 'b', min: -3, max: 3, step: 0.5, value: 1, label: '$b$' },
            { name: 'c', min: -3, max: 3, step: 0.5, value: 1, label: '$c$' },
            { name: 'd', min: -3, max: 3, step: 0.5, value: 2, label: '$d$' },
          ],
          readouts: [{ label: '$\\det A = ad - bc =$', expr: 'a*d - b*c', digits: 2 }],
          caption: 'The columns $(a, c)$ and $(b, d)$ of $A$ and the parallelogram they span. Make the arrows point the same (or opposite) way: the determinant hits $0$. Drag one arrow across the other: the sign flips. The third lesson of this unit proves that $|ad - bc|$ is exactly the area of this parallelogram.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why $ad - bc = 0$ means "not invertible"',
          text: 'Suppose the second column is a multiple of the first: $(b, d) = k(a, c)$. Then $ad - bc = a(kc) - (ka)c = 0$. Conversely, $ad - bc = 0$ forces the columns to be parallel (or one to be zero). Parallel columns are [[linear-dependence|linearly dependent]], so $A\\mathbf{x}$ can only reach points on one line, and no inverse can undo that. The determinant is a one-number test for exactly this collapse.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'numeric',
      prompt: 'Compute the determinant.',
      tex: '\\begin{vmatrix} 5 & -2 \\\\ 3 & 4 \\end{vmatrix}',
      hint: 'Main diagonal product minus off-diagonal product: $(5)(4) - (-2)(3)$.',
      label: '$\\det =$',
      answer: '26',
      explanation: '$ad - bc = (5)(4) - (-2)(3) = 20 - (-6) = 26$. The trap is the double negative: $b c = (-2)(3) = -6$, and subtracting $-6$ *adds* $6$. Since $26 \\ne 0$, this matrix is invertible.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Minors and cofactors',
      blocks: [
        {
          type: 'p',
          text: 'There is no "diagonal minus diagonal" formula that scales up nicely, so we define bigger determinants **recursively**: an $n \\times n$ determinant is built out of $(n-1) \\times (n-1)$ determinants, which are built out of smaller ones, down to $2 \\times 2$. The pieces have names.',
        },
        {
          type: 'definition',
          term: 'Minor and cofactor',
          text: 'For an $n \\times n$ matrix $A$, let $A_{ij}$ be the $(n-1) \\times (n-1)$ submatrix left after **deleting row $i$ and column $j$**. The [[minor]] of entry $a_{ij}$ is $M_{ij} = \\det A_{ij}$. The [[cofactor]] is the minor with a sign attached: $$C_{ij} = (-1)^{i+j} M_{ij}.$$',
        },
        {
          type: 'p',
          text: 'The sign $(-1)^{i+j}$ is $+$ when $i + j$ is even and $-$ when it is odd. Laid out over the matrix it makes a **checkerboard** that always starts with $+$ in the top-left corner:',
        },
        {
          type: 'math',
          tex: '\\begin{bmatrix} + & - & + \\\\ - & + & - \\\\ + & - & + \\end{bmatrix} \\qquad \\begin{bmatrix} + & - & + & - \\\\ - & + & - & + \\\\ + & - & + & - \\\\ - & + & - & + \\end{bmatrix}',
          caption: 'The sign of $C_{ij}$. Moving one step in any row or column direction flips it.',
        },
        {
          type: 'derivation',
          title: 'First-row cofactors of $A = \\begin{bmatrix} 2 & -1 & 3 \\\\ 0 & 4 & 1 \\\\ 5 & 2 & -2 \\end{bmatrix}$',
          steps: [
            { tex: 'C_{11} = (+1)\\begin{vmatrix} 4 & 1 \\\\ 2 & -2 \\end{vmatrix} = 4(-2) - (1)(2) = -10', why: 'Delete row 1 and column 1; what remains is the $2 \\times 2$ block in the bottom right. Position $(1,1)$ has sign $(-1)^{2} = +$.' },
            { tex: 'C_{12} = (-1)\\begin{vmatrix} 0 & 1 \\\\ 5 & -2 \\end{vmatrix} = -\\big(0 - 5\\big) = 5', why: 'Delete row 1 and column 2. Position $(1,2)$ has sign $(-1)^{3} = -$, so the minor $-5$ becomes the cofactor $+5$.' },
            { tex: 'C_{13} = (+1)\\begin{vmatrix} 0 & 4 \\\\ 5 & 2 \\end{vmatrix} = 0 - 20 = -20', why: 'Delete row 1 and column 3. Position $(1,3)$ has sign $(-1)^{4} = +$.' },
          ],
          result: 'Minors: $M_{11} = -10$, $M_{12} = -5$, $M_{13} = -20$. Cofactors: $C_{11} = -10$, $C_{12} = 5$, $C_{13} = -20$. Only the middle one changed sign.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the alternating signs?',
          text: 'Look at the $2 \\times 2$ case. Deleting row 1 and column 1 of $\\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix}$ leaves $d$; deleting row 1 and column 2 leaves $c$. So $C_{11} = d$ and $C_{12} = -c$, and $a C_{11} + b C_{12} = ad - bc$. The minus sign of $C_{12}$ **is** the minus sign in $ad - bc$. The checkerboard is what keeps that pattern going at every size — and in the next lesson you will see it is exactly what makes a row swap flip the sign of the determinant.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'mcq',
      prompt: 'For $A = \\begin{bmatrix} 2 & -1 & 3 \\\\ 0 & 4 & 1 \\\\ 5 & 2 & -2 \\end{bmatrix}$, what is the cofactor $C_{23}$?',
      hint: 'Delete row 2 and column 3, take the $2 \\times 2$ determinant, then apply the sign $(-1)^{2+3}$.',
      options: [
        { text: '$9$', why: 'That is the minor $M_{23} = (2)(2) - (-1)(5) = 9$. The cofactor also needs the sign $(-1)^{5} = -1$.' },
        { text: '$-9$', correct: true, why: 'Deleting row 2 and column 3 leaves $\\begin{vmatrix} 2 & -1 \\\\ 5 & 2 \\end{vmatrix} = 4 + 5 = 9$, and position $(2,3)$ carries a $-$ sign.' },
        { text: '$-1$', why: 'This comes from $(2)(2) - (-1)(5)$ computed as $4 - 5$: the double negative was lost. $-(-1)(5) = +5$.' },
        { text: '$-2$', why: 'That is $C_{32}$: deleting row **3** and column **2** leaves $\\begin{vmatrix} 2 & 3 \\\\ 0 & 1 \\end{vmatrix} = 2$, with sign $-$. For $C_{23}$, the first index is the row to delete.' },
      ],
      explanation: '$A_{23}$ keeps rows 1 and 3 and columns 1 and 2: $\\begin{bmatrix} 2 & -1 \\\\ 5 & 2 \\end{bmatrix}$. Its determinant is $M_{23} = 2 \\cdot 2 - (-1)(5) = 9$. Since $2 + 3 = 5$ is odd, $C_{23} = (-1)^5 \\cdot 9 = -9$. Minor first, sign second — keeping those two steps separate prevents most cofactor mistakes.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Cofactor expansion along the first row',
      blocks: [
        {
          type: 'p',
          text: 'Now the recursive definition. Walk across the first row; multiply each entry by its cofactor; add.',
        },
        {
          type: 'definition',
          term: 'Determinant of an $n \\times n$ matrix ($n \\ge 2$)',
          text: '$$\\det A = a_{11}C_{11} + a_{12}C_{12} + \\cdots + a_{1n}C_{1n} = \\sum_{j=1}^{n} (-1)^{1+j}\\, a_{1j}\\, M_{1j}.$$ For a $1 \\times 1$ matrix, $\\det [a] = a$. This is called [[cofactor-expansion]] along row 1.',
        },
        {
          type: 'p',
          text: 'For $n = 2$ it gives $a \\cdot d + b \\cdot (-c) = ad - bc$, so the new definition agrees with the old one. For $n = 3$, written out in full:',
        },
        {
          type: 'math',
          tex: '\\det A = a_{11}\\begin{vmatrix} a_{22} & a_{23} \\\\ a_{32} & a_{33} \\end{vmatrix} - a_{12}\\begin{vmatrix} a_{21} & a_{23} \\\\ a_{31} & a_{33} \\end{vmatrix} + a_{13}\\begin{vmatrix} a_{21} & a_{22} \\\\ a_{31} & a_{32} \\end{vmatrix}',
        },
        {
          type: 'derivation',
          title: 'Finish $\\det A$ for $A = \\begin{bmatrix} 2 & -1 & 3 \\\\ 0 & 4 & 1 \\\\ 5 & 2 & -2 \\end{bmatrix}$',
          steps: [
            { tex: '\\det A = a_{11}C_{11} + a_{12}C_{12} + a_{13}C_{13}', why: 'Expansion along row 1.' },
            { tex: '= (2)(-10) + (-1)(5) + (3)(-20)', why: 'Entries of row 1 times the cofactors from the previous card. Note $a_{12} = -1$ is the *entry*; the sign of the *cofactor* was already handled.' },
            { tex: '= -20 - 5 - 60', why: 'Multiply each pair.' },
            { tex: '= -85', why: 'Add. A negative determinant is perfectly fine — you will see in this unit\'s last lesson that the sign records orientation.' },
          ],
          result: '$\\det A = -85$, so $A$ is invertible.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'The diagonal trick is $3 \\times 3$ only',
          text: 'You may know the [[la-sarrus-rule|rule of Sarrus]]: copy the first two columns to the right of a $3 \\times 3$ matrix, add the three down-right diagonal products and subtract the three up-right ones. It is correct for $3 \\times 3$ — it is just the six terms of the formula above. It is **wrong** for $4 \\times 4$: a $4 \\times 4$ determinant has $24$ terms, while the diagonal pattern produces only $8$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'numeric',
      prompt: 'Use cofactor expansion along the first row to compute the determinant.',
      tex: '\\begin{vmatrix} 1 & 2 & 0 \\\\ 3 & -1 & 4 \\\\ 2 & 0 & 1 \\end{vmatrix}',
      hint: 'The third entry of row 1 is $0$, so only two terms survive: $1 \\cdot C_{11} + 2 \\cdot C_{12}$, and $C_{12}$ carries a minus sign.',
      label: '$\\det =$',
      answer: '9',
      explanation: '$\\det = 1\\begin{vmatrix} -1 & 4 \\\\ 0 & 1 \\end{vmatrix} - 2\\begin{vmatrix} 3 & 4 \\\\ 2 & 1 \\end{vmatrix} + 0 = 1(-1 - 0) - 2(3 - 8) = -1 + 10 = 9$. The zero in position $(1,3)$ meant you never had to compute $M_{13}$ at all.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'truefalse',
      prompt: 'The "diagonal" method — add the products of the down-right diagonals, subtract the products of the up-right diagonals (after copying columns) — correctly computes the determinant of a $4 \\times 4$ matrix.',
      answer: false,
      explanation: 'The rule of Sarrus only works for $3 \\times 3$. Expanding a $4 \\times 4$ determinant along a row gives $4$ terms, each containing a $3 \\times 3$ determinant with $6$ terms: $4 \\cdot 6 = 24$ products in total. Copying three columns and taking diagonals gives only $8$ products, so most of the determinant is missing. Use cofactor expansion (or the row reduction of the next lesson).',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'concept',
      title: 'Expand along any row or column',
      blocks: [
        {
          type: 'p',
          text: 'Row 1 is not special. A remarkable fact is that you can expand along **any** row or **any** column — as long as you use the cofactor signs from the checkerboard — and you always get the same number.',
        },
        {
          type: 'theorem',
          name: 'Cofactor (Laplace) expansion',
          tex: '\\det A = \\sum_{j=1}^{n} a_{ij}C_{ij} \\;\\;\\text{(along row } i\\text{)} \\qquad \\det A = \\sum_{i=1}^{n} a_{ij}C_{ij} \\;\\;\\text{(down column } j\\text{)}',
          text: 'for every choice of row $i$ or column $j$.',
        },
        {
          type: 'derivation',
          title: 'Same matrix, down column 1',
          steps: [
            { tex: '\\det A = a_{11}C_{11} + a_{21}C_{21} + a_{31}C_{31}', why: 'Column 1 of $A = \\begin{bmatrix} 2 & -1 & 3 \\\\ 0 & 4 & 1 \\\\ 5 & 2 & -2 \\end{bmatrix}$ is $2, 0, 5$. Signs down column 1: $+, -, +$.' },
            { tex: '= 2(-10) + 0 \\cdot C_{21} + 5\\,C_{31}', why: '$C_{11} = -10$ from before. The zero entry kills its whole term — no need to compute $C_{21}$.' },
            { tex: 'C_{31} = (+1)\\begin{vmatrix} -1 & 3 \\\\ 4 & 1 \\end{vmatrix} = -1 - 12 = -13', why: 'Delete row 3 and column 1. Position $(3,1)$: $3 + 1 = 4$ is even, so the sign is $+$.' },
            { tex: '\\det A = -20 + 5(-13) = -20 - 65 = -85', why: 'Matches the row-1 expansion, with one fewer $2 \\times 2$ determinant to compute.' },
          ],
          result: 'Same answer, $-85$, less work — because column 1 contained a zero.',
        },
        {
          type: 'p',
          text: 'That is the strategy: **expand along the row or column with the most zeros**. Every zero deletes a whole minor from the work.',
        },
        {
          type: 'derivation',
          title: 'Exploit a column of zeros: $\\begin{vmatrix} 3 & 0 & 4 \\\\ 2 & 0 & -1 \\\\ 5 & 7 & 6 \\end{vmatrix}$',
          steps: [
            { tex: '\\det = 0\\cdot C_{12} + 0 \\cdot C_{22} + 7\\,C_{32}', why: 'Column 2 has two zeros, so only the entry $a_{32} = 7$ contributes.' },
            { tex: '= 7 \\cdot (-1)^{3+2}\\begin{vmatrix} 3 & 4 \\\\ 2 & -1 \\end{vmatrix}', why: 'Position $(3,2)$ has $3 + 2 = 5$, odd, so the sign is $-$. Delete row 3 and column 2 for the minor.' },
            { tex: '= -7\\,(-3 - 8) = -7(-11)', why: 'The $2 \\times 2$ minor is $(3)(-1) - (4)(2) = -11$.' },
            { tex: '= 77', why: 'Two negatives make a positive.' },
          ],
          result: 'One $2 \\times 2$ determinant instead of three.',
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'Write the sign explicitly — $7 \\cdot (-1)^{3+2} M_{32}$ — rather than doing it in your head. Instructors award most of the credit for setting up the expansion correctly, and a forgotten checkerboard sign is the most common lost point. Also say which row or column you expanded along; it makes your work checkable.',
        },
        {
          type: 'deepdive',
          title: 'Why does every row and column give the same answer?',
          blocks: [
            {
              type: 'p',
              text: 'The cleanest proof uses the fact that, fully expanded, $\\det A$ is a sum of $n!$ terms, one for each way to choose one entry from every row and every column, each with a sign $\\pm 1$. Expanding along row $i$ simply groups those terms by which entry of row $i$ they contain; expanding down column $j$ groups them by which entry of column $j$ they contain. Same terms, grouped differently, same sum. Checking that the checkerboard signs match the term signs is a careful induction, which textbooks such as Lay\'s state without proof.',
            },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'fill',
      prompt: 'Fill in the cofactor signs for an expansion of a $3 \\times 3$ determinant along **row 2**.',
      template: '$\\det A =$ ___ $a_{21}M_{21}$ ___ $a_{22}M_{22}$ ___ $a_{23}M_{23}$',
      blanks: [{ answers: ['$-$'] }, { answers: ['$+$'] }, { answers: ['$-$'] }],
      wordBank: ['$-$', '$+$', '$-$', '$+$'],
      explanation: 'Row 2 of the checkerboard is $-\\;+\\;-$, because $(-1)^{2+1} = -1$, $(-1)^{2+2} = +1$, $(-1)^{2+3} = -1$. So $\\det A = -a_{21}M_{21} + a_{22}M_{22} - a_{23}M_{23}$. Only rows and columns with an odd index start with $+$.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'error',
      prompt: 'A student computes $\\det A$ for $A = \\begin{bmatrix} 1 & 3 & 2 \\\\ 4 & 0 & 1 \\\\ 2 & 5 & 0 \\end{bmatrix}$. Tap the first line that is wrong.',
      lines: [
        'Row 2 contains a zero, so expand along row 2.',
        '$\\det A = 4\\,M_{21} + 0 \\cdot M_{22} + 1 \\cdot M_{23}$',
        '$M_{21} = \\begin{vmatrix} 3 & 2 \\\\ 5 & 0 \\end{vmatrix} = -10, \\quad M_{23} = \\begin{vmatrix} 1 & 3 \\\\ 2 & 5 \\end{vmatrix} = -1$',
        '$\\det A = 4(-10) + 1(-1) = -41$',
      ],
      errorLines: [2],
      explanation: 'Line 2 uses $+$ signs throughout, but row 2 of the checkerboard is $-\\;+\\;-$. The correct setup is $\\det A = -4M_{21} + 0 \\cdot M_{22} - 1 \\cdot M_{23}$. The minors in line 3 are right, so $\\det A = -4(-10) - 1(-1) = 40 + 1 = 41$. The student got the right size with the wrong sign — a sign error that would wreck any later use, such as orientation tests.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'A $4 \\times 4$ determinant',
      blocks: [
        {
          type: 'p',
          text: 'A $4 \\times 4$ expansion produces four $3 \\times 3$ determinants, each producing three $2 \\times 2$ ones. That is a lot of arithmetic — unless zeros prune the tree. Scan every row **and** every column before you start.',
        },
        {
          type: 'derivation',
          title: '$\\det A$ for $A = \\begin{bmatrix} 2 & 1 & 0 & 3 \\\\ 0 & 3 & 0 & 1 \\\\ 4 & -1 & 2 & 5 \\\\ 1 & 0 & 0 & 2 \\end{bmatrix}$',
          steps: [
            { tex: '\\det A = 2 \\cdot C_{33}', why: 'Column 3 is $0, 0, 2, 0$: three zeros, the best choice. Only $a_{33} = 2$ survives.' },
            { tex: '= 2 \\cdot (+1)\\begin{vmatrix} 2 & 1 & 3 \\\\ 0 & 3 & 1 \\\\ 1 & 0 & 2 \\end{vmatrix}', why: 'Position $(3,3)$: $3 + 3 = 6$ is even, sign $+$. Delete row 3 and column 3 to get the minor.' },
            { tex: '= 2\\left[\\, 2\\begin{vmatrix} 3 & 1 \\\\ 0 & 2 \\end{vmatrix} - 0 + 1\\begin{vmatrix} 1 & 3 \\\\ 3 & 1 \\end{vmatrix} \\,\\right]', why: 'Expand the $3 \\times 3$ down its first column ($2, 0, 1$, signs $+, -, +$); the zero removes the middle term.' },
            { tex: '= 2\\,[\\,2(6 - 0) + (1 - 9)\\,]', why: 'Evaluate the two $2 \\times 2$ determinants: $3 \\cdot 2 - 1 \\cdot 0 = 6$ and $1 \\cdot 1 - 3 \\cdot 3 = -8$.' },
            { tex: '= 2\\,(12 - 8) = 8', why: 'Simplify inside the bracket, then multiply.' },
          ],
          result: '$\\det A = 8$, using just two $2 \\times 2$ determinants instead of twelve.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Keep the signs separate from the minors',
          text: 'Signs depend on the position in the matrix you are expanding **at that level**. After you drop to the $3 \\times 3$ minor, the checkerboard restarts with $+$ in its own top-left corner — the old row and column numbers no longer matter.',
        },
      ],
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'numeric',
      prompt: 'Compute the determinant. Choose your row or column wisely.',
      tex: '\\begin{vmatrix} 1 & 0 & 3 & -2 \\\\ 4 & 0 & 1 & 5 \\\\ 2 & 3 & -1 & 6 \\\\ 0 & 0 & 2 & 1 \\end{vmatrix}',
      hint: 'Column 2 has three zeros. The only nonzero entry is $a_{32} = 3$, and position $(3,2)$ has sign $-$.',
      label: '$\\det =$',
      answer: '111',
      explanation: 'Down column 2: $\\det = 3 \\cdot (-1)^{3+2} M_{32}$ with $M_{32} = \\begin{vmatrix} 1 & 3 & -2 \\\\ 4 & 1 & 5 \\\\ 0 & 2 & 1 \\end{vmatrix}$. Along row 1: $1(1 - 10) - 3(4 - 0) + (-2)(8 - 0) = -9 - 12 - 16 = -37$. So $\\det = 3 \\cdot (-1) \\cdot (-37) = 111$.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'concept',
      title: 'Triangular matrices: just multiply the diagonal',
      blocks: [
        {
          type: 'p',
          text: 'Some matrices are almost all zeros in a very useful pattern. A matrix is **upper triangular** if every entry *below* the main diagonal is $0$, and **lower triangular** if every entry *above* it is $0$. Either way it is a [[triangular-matrix]]. A [[diagonal-matrix]] is both.',
        },
        {
          type: 'theorem',
          name: 'Determinant of a triangular matrix',
          tex: '\\det A = a_{11}\\, a_{22} \\cdots a_{nn}',
          text: 'If $A$ is triangular, its determinant is the product of its diagonal entries.',
        },
        {
          type: 'derivation',
          title: 'Why, for an upper triangular $4 \\times 4$',
          steps: [
            { tex: '\\begin{vmatrix} 2 & 5 & -1 & 7 \\\\ 0 & -3 & 4 & 1 \\\\ 0 & 0 & 1 & 6 \\\\ 0 & 0 & 0 & 4 \\end{vmatrix} = 2\\begin{vmatrix} -3 & 4 & 1 \\\\ 0 & 1 & 6 \\\\ 0 & 0 & 4 \\end{vmatrix}', why: 'Expand down column 1: only $a_{11} = 2$ is nonzero, sign $+$. Its minor is again upper triangular.' },
            { tex: '= 2 \\cdot (-3)\\begin{vmatrix} 1 & 6 \\\\ 0 & 4 \\end{vmatrix}', why: 'Same move on the $3 \\times 3$: its first column is $-3, 0, 0$.' },
            { tex: '= 2 \\cdot (-3) \\cdot (1 \\cdot 4 - 6 \\cdot 0)', why: 'The last $2 \\times 2$ is triangular too; its off-diagonal product contains the $0$.' },
            { tex: '= 2 \\cdot (-3) \\cdot 1 \\cdot 4 = -24', why: 'Exactly the product of the diagonal. The entries above the diagonal ($5, -1, 7, 4, 1, 6$) never mattered.' },
          ],
          result: 'For a lower triangular matrix, expand along row 1 instead; the same peeling happens.',
        },
        {
          type: 'list',
          items: [
            '$\\det I_n = 1$: the [[identity-matrix]] is triangular with ones on the diagonal.',
            'A triangular matrix with a single $0$ on its diagonal has determinant $0$, so it is not invertible.',
            'For a diagonal matrix $D$, $\\det D$ is the product of the scale factors along each axis.',
          ],
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why this matters more than it looks',
          text: 'Row reduction turns *any* square matrix into a triangular one (an [[echelon-form]] of a square matrix is upper triangular). If we know how each row operation changes the determinant, we can row reduce and then just multiply the diagonal. That is the next lesson, and it is how computers actually do it.',
        },
      ],
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'numeric',
      prompt: 'Compute the determinant of this lower triangular matrix.',
      tex: '\\begin{bmatrix} 3 & 0 & 0 & 0 \\\\ 7 & -2 & 0 & 0 \\\\ 1 & 4 & 5 & 0 \\\\ 9 & -6 & 2 & \\tfrac12 \\end{bmatrix}',
      hint: 'Ignore everything below the diagonal and multiply $3, -2, 5, \\tfrac12$.',
      label: '$\\det =$',
      answer: '-15',
      explanation: 'The matrix is lower triangular, so $\\det = 3 \\cdot (-2) \\cdot 5 \\cdot \\tfrac12 = -15$. Expanding along row 1 confirms it: only $a_{11} = 3$ survives, and its minor is again lower triangular, and so on down the diagonal.',
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'concept',
      title: 'What cofactor expansion costs',
      blocks: [
        {
          type: 'p',
          text: 'Count the work. An $n \\times n$ expansion calls $n$ determinants of size $n - 1$, each of which calls $n - 1$ of size $n - 2$, and so on. With no zeros to help, the number of products you end up adding is',
        },
        {
          type: 'math',
          tex: 'n \\cdot (n-1) \\cdot (n-2) \\cdots 2 \\cdot 1 = n!',
        },
        {
          type: 'table',
          headers: ['$n$', 'terms in cofactor expansion ($n!$)', 'multiplications in row reduction ($\\approx n^3/3$)'],
          rows: [
            ['$3$', '$6$', '$\\approx 9$'],
            ['$4$', '$24$', '$\\approx 21$'],
            ['$10$', '$3{,}628{,}800$', '$\\approx 333$'],
            ['$20$', '$\\approx 2.4 \\times 10^{18}$', '$\\approx 2{,}700$'],
            ['$25$', '$\\approx 1.6 \\times 10^{25}$', '$\\approx 5{,}200$'],
          ],
          caption: 'Factorial growth versus cubic growth.',
        },
        {
          type: 'p',
          text: 'At a billion terms per second, a $20 \\times 20$ cofactor expansion would take about **77 years**; row reduction finishes in microseconds. Cofactor expansion is a superb *definition* and a fine hand method for small or sparse matrices, but it is a terrible general algorithm.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'What engines and libraries actually do',
          text: 'Games mostly need $3 \\times 3$ and $4 \\times 4$ determinants, and there cofactor formulas are perfect: written out by hand, with no recursion or branches, and sharing the $2 \\times 2$ sub-determinants between terms (math libraries such as GLM do exactly this for `mat4` determinants and inverses). For large matrices — physics constraint solvers, finite elements, machine learning — libraries row reduce, usually as an *LU decomposition*, at $O(n^3)$ cost.',
        },
        {
          type: 'code',
          title: 'cofactor_det.cpp',
          runnable: true,
          code: `#include <cstdio>
#include <vector>

using Matrix = std::vector<std::vector<double>>;
long long leafCalls = 0;

// Delete row 0 and column j.
Matrix minorMatrix(const Matrix& A, int j) {
    Matrix M;
    for (size_t r = 1; r < A.size(); ++r) {
        std::vector<double> row;
        for (size_t c = 0; c < A.size(); ++c)
            if ((int)c != j) row.push_back(A[r][c]);
        M.push_back(row);
    }
    return M;
}

double det(const Matrix& A) {
    if (A.size() == 1) { ++leafCalls; return A[0][0]; }
    double sum = 0.0, sign = 1.0;
    for (int j = 0; j < (int)A.size(); ++j) {
        sum += sign * A[0][j] * det(minorMatrix(A, j));
        sign = -sign;                      // + - + - across row 1
    }
    return sum;
}

int main() {
    Matrix A = {{2, 1, 0, 3},
                {0, 3, 0, 1},
                {4, -1, 2, 5},
                {1, 0, 0, 2}};
    std::printf("det A = %g\\n", det(A));
    std::printf("1x1 determinants evaluated: %lld\\n", leafCalls);
}`,
          output: `det A = 8
1x1 determinants evaluated: 24`,
          annotations: [
            { lines: '8-17', text: 'Builds the submatrix $A_{1j}$: skip row 0, skip column $j$. This copying alone makes the recursion slow.' },
            { lines: 20, text: 'Base case: $\\det [a] = a$. The counter records how many of these leaves the recursion reaches.' },
            { lines: '22-25', text: 'Expansion along the first row, with the alternating checkerboard sign.' },
            { lines: 35, text: '$24 = 4!$ leaves for a $4 \\times 4$ — this naive version does not even skip the zeros a human would exploit.' },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 16
    {
      kind: 'mcq',
      prompt: 'A naive program computes the determinant of a dense $12 \\times 12$ matrix by recursive cofactor expansion. About how many products does it end up adding?',
      options: [
        { text: '$12^3 = 1{,}728$', why: 'Cubic cost belongs to row reduction (about $12^3/3 \\approx 576$ multiplications), not to cofactor expansion.' },
        { text: '$2^{12} = 4{,}096$', why: 'Exponential growth like $2^n$ is bad, but factorial growth is far worse: $12! \\gg 2^{12}$.' },
        { text: '$12! \\approx 4.8 \\times 10^{8}$', correct: true, why: 'Each level multiplies the count by the current size: $12 \\cdot 11 \\cdot 10 \\cdots 1 = 479{,}001{,}600$ terms.' },
        { text: '$12^2 = 144$', why: 'That is just the number of entries in the matrix.' },
      ],
      explanation: 'Expanding a $12 \\times 12$ gives $12$ determinants of size $11$, each giving $11$ of size $10$, and so on: $12! = 479{,}001{,}600$ products. Row reduction needs only a few hundred multiplications. Factorial cost is why cofactor expansion is reserved for small matrices and hand work.',
    },
  ],
  takeaways: [
    'For $2 \\times 2$: $\\det\\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix} = ad - bc$, the number you divide by in the inverse formula; $\\det A = 0$ means not invertible.',
    'Minor $M_{ij}$: determinant after deleting row $i$ and column $j$. Cofactor $C_{ij} = (-1)^{i+j}M_{ij}$, signs in a checkerboard starting with $+$.',
    '$\\det A = \\sum_j a_{ij}C_{ij}$ along any row, or $\\sum_i a_{ij}C_{ij}$ down any column — all give the same value, so expand where the zeros are.',
    'The determinant of a triangular (or diagonal) matrix is the product of its diagonal entries; $\\det I = 1$.',
    'Full cofactor expansion costs about $n!$ operations — fine for $3 \\times 3$ and $4 \\times 4$, hopeless for large $n$, where row reduction ($\\approx n^3/3$) is used instead.',
    'The rule of Sarrus works only for $3 \\times 3$ matrices.',
  ],
  reading: [
    {
      title: 'Interactive Linear Algebra (Margalit & Rabinoff) — Chapter 4: Determinants',
      url: 'https://textbooks.math.gatech.edu/ila/',
      source: 'book',
      note: 'The free online text covers cofactor expansions with many worked examples; see the "Cofactor Expansions" section of the determinants chapter.',
    },
    {
      title: 'Wikipedia — Laplace expansion',
      url: 'https://en.wikipedia.org/wiki/Laplace_expansion',
      source: 'wikipedia',
      note: 'States cofactor expansion along any row or column and sketches the proof, plus its $n!$ computational cost.',
    },
    {
      title: "Paul's Online Notes — Linear Algebra",
      url: 'https://tutorial.math.lamar.edu/Classes/LinAlg/LinAlg.aspx',
      source: 'paul',
      note: 'The Determinants chapter has extra drill on minors, cofactors and expansion for $3 \\times 3$ and $4 \\times 4$ matrices.',
    },
    {
      title: 'MIT OCW 18.06 (Strang) — Linear Algebra',
      url: 'https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/',
      source: 'other',
      note: 'Lectures 18–19 build the determinant from its properties and derive the cofactor formula from them.',
    },
  ],
};
