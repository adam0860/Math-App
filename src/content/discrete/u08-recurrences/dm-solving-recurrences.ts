import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'dm-solving-recurrences',
  title: 'Solving Linear Recurrences and Generating Functions',
  summary: 'Turn a recurrence into a polynomial equation and read off a closed form — from $3 \\cdot 2^n - (-1)^n$ to Binet\'s formula for Fibonacci — then let generating functions do the bookkeeping.',
  minutes: 20,
  objectives: [
    'Recognize linear homogeneous recurrences with constant coefficients and write their characteristic equations',
    'Solve degree-2 recurrences with distinct or repeated characteristic roots, fitting the constants to the initial conditions',
    'Derive Binet\'s formula $F_n = \\frac{\\varphi^n - \\psi^n}{\\sqrt{5}}$ and explain why $F_n$ is the nearest integer to $\\varphi^n/\\sqrt{5}$',
    'Find a particular solution of a nonhomogeneous recurrence when the extra term is a constant or a polynomial',
    'Use ordinary generating functions to solve a recurrence and to count, and check closed forms by computing terms in code',
  ],
  steps: [
    // ------------------------------------------------------------------ 0
    {
      kind: 'concept',
      title: 'Linear homogeneous recurrences and the characteristic equation',
      blocks: [
        {
          type: 'p',
          text: 'Last lesson, iteration solved recurrences that reach back one term. For $F_n = F_{n-1} + F_{n-2}$ it got stuck. The fix is a clever guess that works for a whole family of recurrences at once.',
        },
        {
          type: 'definition',
          term: 'Linear homogeneous recurrence with constant coefficients',
          text: 'A [[dm-linear-homogeneous-recurrence|linear homogeneous recurrence relation of degree $k$ with constant coefficients]] has the form\n\n$$a_n = c_1 a_{n-1} + c_2 a_{n-2} + \\cdots + c_k a_{n-k}, \\quad c_k \\ne 0,$$\n\nwhere $c_1, \\dots, c_k$ are real constants. **Linear**: each earlier term appears to the first power, not squared or multiplied together. **Homogeneous**: no extra term that is free of the $a$\'s. **Constant coefficients**: the $c_i$ do not depend on $n$.',
        },
        {
          type: 'table',
          headers: ['Recurrence', 'In this family?', 'Why'],
          rows: [
            ['$F_n = F_{n-1} + F_{n-2}$', 'yes, degree $2$', '$c_1 = c_2 = 1$'],
            ['$a_n = 5a_{n-1} - 6a_{n-2}$', 'yes, degree $2$', '$c_1 = 5$, $c_2 = -6$'],
            ['$P_n = 1.05\\,P_{n-1}$', 'yes, degree $1$', 'a geometric sequence'],
            ['$H_n = 2H_{n-1} + 1$', 'no: nonhomogeneous', 'the $+1$ does not involve any $H$'],
            ['$a_n = a_{n-1}^2$', 'no: not linear', 'a term is squared'],
            ['$a_n = n\\,a_{n-1}$', 'no: coefficient depends on $n$', 'this one gives $a_n = n!\\,a_0$'],
          ],
        },
        {
          type: 'p',
          text: 'Degree-1 recurrences $a_n = ra_{n-1}$ have solutions $a_n = \\alpha r^n$. So try the same shape for degree $2$: look for solutions of the form $a_n = r^n$ with $r \\ne 0$.',
        },
        {
          type: 'derivation',
          title: 'Where the characteristic equation comes from',
          steps: [
            { tex: 'a_n = c_1 a_{n-1} + c_2 a_{n-2}', why: 'A degree-2 recurrence of our family.' },
            { tex: 'r^n = c_1 r^{n-1} + c_2 r^{n-2}', why: 'Substitute the guess $a_n = r^n$ (and $a_{n-1} = r^{n-1}$, $a_{n-2} = r^{n-2}$).' },
            { tex: 'r^2 = c_1 r + c_2', why: 'Divide both sides by $r^{n-2}$, which is allowed because $r \\ne 0$.' },
            { tex: 'r^2 - c_1 r - c_2 = 0', why: 'Move everything to one side. This is the [[dm-characteristic-equation|characteristic equation]]; its solutions are the **characteristic roots**.' },
          ],
          result: '$a_n = r^n$ solves the recurrence exactly when $r$ is a root of $r^2 - c_1 r - c_2 = 0$. A recurrence problem has become a [[quadratic-equation]].',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why combinations of solutions are solutions',
          text: 'If $s_n$ and $t_n$ both satisfy $a_n = c_1 a_{n-1} + c_2 a_{n-2}$, then so does $\\alpha s_n + \\beta t_n$ for any constants: multiply the two equations by $\\alpha$ and $\\beta$ and add. This works **because** the recurrence is linear and homogeneous — a $+1$ or a square would break it. So two roots $r_1, r_2$ give a whole family $\\alpha_1 r_1^n + \\alpha_2 r_2^n$, with two free constants to match the two initial conditions.',
        },
      ],
    },
    // ------------------------------------------------------------------ 1
    {
      kind: 'mcq',
      prompt: 'Which recurrence is a **linear homogeneous recurrence with constant coefficients**?',
      options: [
        { text: '$a_n = a_{n-1} + 2^n$', why: 'The term $2^n$ does not involve any $a_k$, so the recurrence is nonhomogeneous.' },
        { text: '$a_n = 3a_{n-1} + 4a_{n-3}$', correct: true, why: 'Right: each earlier term appears linearly with a constant coefficient, and there is no extra term. It has degree $3$ (it reaches back three steps), with $c_1 = 3$, $c_2 = 0$, $c_3 = 4$.' },
        { text: '$a_n = n\\,a_{n-2}$', why: 'The coefficient $n$ changes with $n$, so the coefficients are not constant.' },
        { text: '$a_n = a_{n-1}\\,a_{n-2}$', why: 'A product of two earlier terms is not linear.' },
      ],
      explanation: 'Check the three words one at a time. Linear: earlier terms only to the first power, never multiplied together. Homogeneous: every term on the right contains some $a_k$. Constant coefficients: the multipliers are fixed numbers. Only $a_n = 3a_{n-1} + 4a_{n-3}$ passes all three; its characteristic equation is $r^3 - 3r^2 - 4 = 0$.',
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'concept',
      title: 'Distinct roots: fit the constants',
      blocks: [
        {
          type: 'theorem',
          name: 'Distinct characteristic roots',
          tex: 'a_n = \\alpha_1 r_1^n + \\alpha_2 r_2^n',
          text: 'If $r^2 - c_1 r - c_2 = 0$ has two **distinct** roots $r_1 \\ne r_2$, then every solution of $a_n = c_1 a_{n-1} + c_2 a_{n-2}$ has this form, and the constants $\\alpha_1, \\alpha_2$ are determined by the two initial conditions.',
        },
        {
          type: 'derivation',
          title: 'Solve $a_n = a_{n-1} + 2a_{n-2}$ with $a_0 = 2$, $a_1 = 7$',
          steps: [
            { tex: 'r^2 - r - 2 = 0', why: 'Characteristic equation with $c_1 = 1$, $c_2 = 2$.' },
            { tex: '(r - 2)(r + 1) = 0 \\implies r_1 = 2,\\ r_2 = -1', why: 'Factor. The roots are distinct.' },
            { tex: 'a_n = \\alpha_1 2^n + \\alpha_2 (-1)^n', why: 'General solution from the theorem.' },
            { tex: 'n = 0:\\ \\alpha_1 + \\alpha_2 = 2; \\qquad n = 1:\\ 2\\alpha_1 - \\alpha_2 = 7', why: 'Plug in the initial conditions: $2^0 = (-1)^0 = 1$, and $2^1 = 2$, $(-1)^1 = -1$.' },
            { tex: '3\\alpha_1 = 9 \\implies \\alpha_1 = 3,\\ \\alpha_2 = -1', why: 'Add the two equations to eliminate $\\alpha_2$, then back-substitute.' },
            { tex: 'a_n = 3 \\cdot 2^n - (-1)^n', why: 'The solution.' },
          ],
          result: 'Check $n = 2$: the recurrence gives $a_2 = 7 + 2 \\cdot 2 = 11$, and the formula gives $12 - 1 = 11$ ✓.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why every solution has this form',
          text: 'A solution is fixed by $a_0$ and $a_1$ (the recurrence then forces every later term). So it is enough that the family $\\alpha_1 r_1^n + \\alpha_2 r_2^n$ can hit **any** pair $(a_0, a_1)$. That means solving $\\alpha_1 + \\alpha_2 = a_0$, $\\alpha_1 r_1 + \\alpha_2 r_2 = a_1$. Subtracting $r_2$ times the first from the second gives $\\alpha_1(r_1 - r_2) = a_1 - r_2 a_0$, which we can divide by exactly because $r_1 \\ne r_2$. With a repeated root this division fails, which is why that case needs a different form.',
        },
        {
          type: 'steps',
          items: [
            { title: 'Characteristic equation', text: 'Replace $a_{n-j}$ by $r^{k-j}$: $r^k - c_1 r^{k-1} - \\cdots - c_k = 0$.' },
            { title: 'Roots', text: 'Solve it (factor, or use the [[quadratic-formula]] for degree $2$).' },
            { title: 'General solution', text: 'One term $\\alpha_i r_i^n$ per distinct root (repeated roots: next card).' },
            { title: 'Constants', text: 'Use the $k$ initial conditions to get $k$ linear equations; solve them.' },
            { title: 'Check', text: 'Compute $a_2$ (and $a_3$) both from the recurrence and from your formula.' },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'expr',
      prompt: 'Solve $a_n = 5a_{n-1} - 6a_{n-2}$ with $a_0 = 1$ and $a_1 = 0$.',
      label: '$a_n =$',
      answer: '3*2^n - 2*3^n',
      answerTex: '3 \\cdot 2^n - 2 \\cdot 3^n',
      variables: ['n'],
      domain: [0, 6],
      hint: 'The characteristic equation $r^2 - 5r + 6 = 0$ factors as $(r - 2)(r - 3) = 0$. Then solve for $\\alpha_1, \\alpha_2$ in $a_n = \\alpha_1 2^n + \\alpha_2 3^n$.',
      explanation: 'Roots $2$ and $3$, so $a_n = \\alpha_1 2^n + \\alpha_2 3^n$. From $a_0 = 1$: $\\alpha_1 + \\alpha_2 = 1$. From $a_1 = 0$: $2\\alpha_1 + 3\\alpha_2 = 0$. Subtract twice the first equation from the second: $\\alpha_2 = -2$, so $\\alpha_1 = 3$. Hence $a_n = 3 \\cdot 2^n - 2 \\cdot 3^n$. Check: the recurrence gives $a_2 = 5 \\cdot 0 - 6 \\cdot 1 = -6$, and $12 - 18 = -6$ ✓.',
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'concept',
      title: 'Fibonacci, the golden ratio and Binet\'s formula',
      blocks: [
        {
          type: 'p',
          text: 'Now the payoff. The [[dm-fibonacci-numbers|Fibonacci numbers]] satisfy $F_n = F_{n-1} + F_{n-2}$ with $F_0 = 0$, $F_1 = 1$. The characteristic equation is $r^2 - r - 1 = 0$, and the quadratic formula gives two irrational roots:',
        },
        {
          type: 'math',
          tex: '\\varphi = \\frac{1 + \\sqrt{5}}{2} \\approx 1.618, \\qquad \\psi = \\frac{1 - \\sqrt{5}}{2} \\approx -0.618',
          caption: '$\\varphi$ is the [[dm-golden-ratio|golden ratio]]. Note $\\varphi + \\psi = 1$ and $\\varphi - \\psi = \\sqrt{5}$.',
        },
        {
          type: 'derivation',
          title: 'Fit the constants: $F_n = \\alpha_1 \\varphi^n + \\alpha_2 \\psi^n$',
          steps: [
            { tex: 'n = 0:\\ \\alpha_1 + \\alpha_2 = 0 \\implies \\alpha_2 = -\\alpha_1', why: 'Use $F_0 = 0$.' },
            { tex: 'n = 1:\\ \\alpha_1 \\varphi - \\alpha_1 \\psi = 1', why: 'Use $F_1 = 1$ and substitute $\\alpha_2 = -\\alpha_1$.' },
            { tex: '\\alpha_1 (\\varphi - \\psi) = \\alpha_1 \\sqrt{5} = 1 \\implies \\alpha_1 = \\frac{1}{\\sqrt{5}},\\ \\alpha_2 = -\\frac{1}{\\sqrt{5}}', why: 'Factor out $\\alpha_1$; $\\varphi - \\psi = \\frac{2\\sqrt{5}}{2} = \\sqrt{5}$.' },
            { tex: 'F_n = \\frac{\\varphi^n - \\psi^n}{\\sqrt{5}}', why: 'Substitute back. This is [[dm-binet-formula|Binet\'s formula]].' },
          ],
          result: 'A formula full of $\\sqrt{5}$ that always produces whole numbers: $\\frac{\\varphi^2 - \\psi^2}{\\sqrt{5}} = \\frac{(\\varphi - \\psi)(\\varphi + \\psi)}{\\sqrt{5}} = \\frac{\\sqrt{5} \\cdot 1}{\\sqrt{5}} = 1 = F_2$ ✓.',
        },
        {
          type: 'p',
          text: 'Since $|\\psi| < 1$, the term $\\psi^n/\\sqrt{5}$ shrinks toward $0$ quickly; it is already less than $\\frac{1}{2}$ in size for $n = 0$ ($\\frac{1}{\\sqrt{5}} \\approx 0.447$). So $F_n$ is simply **the integer nearest to $\\varphi^n / \\sqrt{5}$**, and $F_n = \\Theta(\\varphi^n)$: Fibonacci numbers grow exponentially with ratio $\\varphi$.',
        },
        {
          type: 'graph',
          x: [0, 12],
          y: [0, 160],
          xStep: 1,
          yStep: 20,
          functions: [{ expr: '((1+sqrt(5))/2)^x/sqrt(5)', label: '$\\varphi^n/\\sqrt{5}$', color: 'blue' }],
          points: [
            { x: 0, y: 0, label: 'F₀', color: 'red' },
            { x: 1, y: 1, color: 'red' },
            { x: 2, y: 1, color: 'red' },
            { x: 3, y: 2, color: 'red' },
            { x: 4, y: 3, color: 'red' },
            { x: 5, y: 5, color: 'red' },
            { x: 6, y: 8, color: 'red' },
            { x: 7, y: 13, label: 'F₇ = 13', color: 'red' },
            { x: 8, y: 21, color: 'red' },
            { x: 9, y: 34, color: 'red' },
            { x: 10, y: 55, label: 'F₁₀ = 55', color: 'red' },
            { x: 11, y: 89, color: 'red' },
            { x: 12, y: 144, label: 'F₁₂ = 144', color: 'red' },
            { x: 'n', y: '((1+sqrt(5))/2)^n/sqrt(5)', color: 'blue' },
          ],
          sliders: [{ name: 'n', min: 0, max: 12, step: 1, value: 7, label: '$n$' }],
          readouts: [
            { label: '$\\varphi^n/\\sqrt{5} =$', expr: '((1+sqrt(5))/2)^n/sqrt(5)', digits: 4 },
            { label: 'nearest integer $= F_n =$', expr: 'floor(((1+sqrt(5))/2)^n/sqrt(5) + 0.5)', digits: 0 },
            { label: 'error $F_n - \\varphi^n/\\sqrt{5} = -\\psi^n/\\sqrt{5} =$', expr: '-((1-sqrt(5))/2)^n/sqrt(5)', digits: 5 },
          ],
          caption: 'The red Fibonacci points sit on the smooth exponential $\\varphi^n/\\sqrt{5}$. Slide $n$: the error alternates in sign (since $\\psi < 0$) and shrinks by a factor of $0.618$ each step.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'The golden ratio in game code',
          text: '**Fibonacci hashing** multiplies a key by $2^{64}/\\varphi$ (the constant `0x9E3779B97F4A7C15`) and keeps the top bits; because $\\varphi$ is "the most irrational number", consecutive keys spread evenly over the table. The same irrationality gives the **golden angle** $360^\\circ(1 - 1/\\varphi) \\approx 137.5^\\circ$, used to scatter points evenly on a disc or sphere — sunflower-style foliage placement and sampling patterns.',
        },
      ],
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'numeric',
      prompt: 'The ratios $\\frac{F_{n+1}}{F_n}$ are $1, 2, 1.5, 1.667, 1.6, 1.625, \\dots$ What is $\\displaystyle\\lim_{n \\to \\infty} \\frac{F_{n+1}}{F_n}$? Give the exact value or a decimal to $3$ places.',
      answer: '(1+sqrt(5))/2',
      answerTex: '\\varphi = \\frac{1 + \\sqrt{5}}{2} \\approx 1.618',
      minDecimals: 3,
      hint: 'By Binet, $F_n \\approx \\varphi^n / \\sqrt{5}$ for large $n$. What happens to the ratio of consecutive terms?',
      explanation: 'For large $n$ the $\\psi^n$ terms vanish, so $\\frac{F_{n+1}}{F_n} \\approx \\frac{\\varphi^{n+1}/\\sqrt{5}}{\\varphi^n/\\sqrt{5}} = \\varphi = \\frac{1 + \\sqrt{5}}{2} \\approx 1.618$. In general, when one characteristic root is strictly larger in absolute value than the others, the ratio of consecutive terms tends to that dominant root (provided its coefficient is not $0$).',
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'concept',
      title: 'Repeated roots',
      blocks: [
        {
          type: 'p',
          text: 'Consider $a_n = 6a_{n-1} - 9a_{n-2}$. Its characteristic equation $r^2 - 6r + 9 = (r - 3)^2 = 0$ has the single root $r = 3$, twice. The family $\\alpha_1 3^n + \\alpha_2 3^n = (\\alpha_1 + \\alpha_2)3^n$ has only **one** free constant — not enough for two initial conditions. We need a second, genuinely different solution.',
        },
        {
          type: 'theorem',
          name: 'Repeated characteristic root',
          tex: 'a_n = \\alpha_1 r_0^n + \\alpha_2\\, n\\, r_0^n = (\\alpha_1 + \\alpha_2 n)\\, r_0^n',
          text: 'If $r^2 - c_1 r - c_2 = 0$ has a single repeated root $r_0$, every solution of $a_n = c_1 a_{n-1} + c_2 a_{n-2}$ has this form.',
        },
        {
          type: 'derivation',
          title: 'Why $n r_0^n$ is a solution',
          steps: [
            { tex: '(r - r_0)^2 = r^2 - 2r_0 r + r_0^2 \\implies c_1 = 2r_0,\\ c_2 = -r_0^2', why: 'A repeated root means the characteristic polynomial is a perfect square; match coefficients with $r^2 - c_1 r - c_2$.' },
            { tex: 'c_1 (n-1) r_0^{n-1} + c_2 (n-2) r_0^{n-2}', why: 'Substitute $a_k = k r_0^k$ into the right side of the recurrence.' },
            { tex: '= 2r_0 (n-1) r_0^{n-1} - r_0^2 (n-2) r_0^{n-2}', why: 'Use $c_1 = 2r_0$, $c_2 = -r_0^2$.' },
            { tex: '= r_0^n \\big(2(n-1) - (n-2)\\big) = n\\, r_0^n \\;✓', why: 'Both terms are multiples of $r_0^n$; the bracket simplifies to $2n - 2 - n + 2 = n$. That is $a_n$.' },
          ],
          result: '$n r_0^n$ satisfies the recurrence, and it is not a constant multiple of $r_0^n$ — exactly the second solution we needed.',
        },
        {
          type: 'derivation',
          title: 'Solve $a_n = 6a_{n-1} - 9a_{n-2}$ with $a_0 = 1$, $a_1 = 6$',
          steps: [
            { tex: 'a_n = (\\alpha_1 + \\alpha_2 n)\\,3^n', why: 'Repeated root $r_0 = 3$.' },
            { tex: 'n = 0:\\ \\alpha_1 = 1', why: 'At $n = 0$ the $n$ term vanishes and $3^0 = 1$.' },
            { tex: 'n = 1:\\ (1 + \\alpha_2) \\cdot 3 = 6 \\implies \\alpha_2 = 1', why: 'Divide by $3$ and subtract $1$.' },
            { tex: 'a_n = (n + 1)\\,3^n', why: 'The solution. Check $n = 2$: recurrence $6 \\cdot 6 - 9 \\cdot 1 = 27$, formula $3 \\cdot 9 = 27$ ✓.' },
          ],
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Higher degree and complex roots',
          text: 'The same pattern holds for degree $k$: a root of multiplicity $m$ contributes $(\\alpha_0 + \\alpha_1 n + \\cdots + \\alpha_{m-1} n^{m-1}) r^n$. Roots can also be complex: $a_n = -a_{n-2}$ has $r^2 + 1 = 0$, $r = \\pm i$, and its solutions repeat with period $4$, like $1, 0, -1, 0, 1, 0, \\dots$ — the discrete cousin of $\\cos$ and $\\sin$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'error',
      prompt: 'A student solves $a_n = 4a_{n-1} - 4a_{n-2}$ with $a_0 = 1$, $a_1 = 4$. Tap the first wrong line.',
      lines: [
        'The characteristic equation is $r^2 - 4r + 4 = 0$.',
        'It factors as $(r - 2)^2 = 0$, so $r = 2$ is a repeated root.',
        'The general solution is $a_n = \\alpha_1 2^n + \\alpha_2 2^n$.',
        '$a_0 = 1$ gives $\\alpha_1 + \\alpha_2 = 1$; $a_1 = 4$ gives $2\\alpha_1 + 2\\alpha_2 = 4$, so $\\alpha_1 + \\alpha_2 = 2$.',
        'These contradict each other, so the recurrence has no solution.',
      ],
      errorLines: [3],
      explanation: 'Line 3 uses the distinct-roots form for a repeated root. $\\alpha_1 2^n + \\alpha_2 2^n$ is just $(\\alpha_1 + \\alpha_2)2^n$ — one constant in disguise — so it cannot fit two initial conditions (hence the "contradiction"). The correct form is $(\\alpha_1 + \\alpha_2 n)2^n$: $a_0 = 1$ gives $\\alpha_1 = 1$, and $a_1 = 4$ gives $2(1 + \\alpha_2) = 4$, so $\\alpha_2 = 1$ and $a_n = (n + 1)2^n$. Check: $a_2 = 16 - 4 = 12 = 3 \\cdot 4$ ✓. A recurrence with initial conditions always has exactly one solution, so line 5 was a red flag.',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'expr',
      prompt: 'Solve $a_n = 10a_{n-1} - 25a_{n-2}$ with $a_0 = 1$ and $a_1 = 15$.',
      label: '$a_n =$',
      answer: '(1 + 2n)*5^n',
      answerTex: '(1 + 2n)\\,5^n',
      variables: ['n'],
      domain: [0, 5],
      hint: '$r^2 - 10r + 25 = (r - 5)^2$. Use $a_n = (\\alpha_1 + \\alpha_2 n)5^n$.',
      explanation: 'The root $r = 5$ is repeated, so $a_n = (\\alpha_1 + \\alpha_2 n)5^n$. $a_0 = 1$ gives $\\alpha_1 = 1$; $a_1 = 15$ gives $5(1 + \\alpha_2) = 15$, so $\\alpha_2 = 2$. Thus $a_n = (1 + 2n)5^n$. Check: the recurrence gives $a_2 = 150 - 25 = 125$, and $(1 + 4) \\cdot 25 = 125$ ✓.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'concept',
      title: 'Nonhomogeneous recurrences (briefly)',
      blocks: [
        {
          type: 'p',
          text: 'Many recurrences have an extra term that does not involve the sequence, like the $+1$ in $H_n = 2H_{n-1} + 1$ or a deposit in a savings model. These are **nonhomogeneous**: $a_n = c_1 a_{n-1} + \\cdots + c_k a_{n-k} + F(n)$. Dropping $F(n)$ gives the **associated homogeneous** recurrence, which you can already solve.',
        },
        {
          type: 'theorem',
          name: 'Structure of the solutions',
          tex: 'a_n = p_n + h_n',
          text: 'If $p_n$ is any one [[dm-particular-solution|particular solution]] of the nonhomogeneous recurrence, then every solution is $p_n$ plus a solution $h_n$ of the associated homogeneous recurrence. (The difference of two solutions cancels $F(n)$, so it solves the homogeneous one.)',
        },
        {
          type: 'table',
          headers: ['Extra term $F(n)$', 'Try $p_n =$', 'Caution'],
          rows: [
            ['constant $d$', '$A$', 'if $1$ is a characteristic root, try $An$ instead'],
            ['polynomial of degree $m$', '$A_m n^m + \\cdots + A_1 n + A_0$', 'if $1$ is a root of multiplicity $s$, multiply the guess by $n^s$'],
            ['$s^n$', '$A\\,s^n$', 'if $s$ is a root of multiplicity $m$, multiply the guess by $n^m$'],
          ],
          caption: 'Substitute the guess, then match coefficients to find $A$, $A_0, A_1, \\dots$.',
        },
        {
          type: 'derivation',
          title: 'The Tower of Hanoi again: $H_n = 2H_{n-1} + 1$, $H_0 = 0$',
          steps: [
            { tex: 'A = 2A + 1 \\implies A = -1', why: 'The extra term is a constant, so try $p_n = A$. ($1$ is not a characteristic root: the root is $2$.)' },
            { tex: 'h_n = \\alpha\\, 2^n', why: 'The associated homogeneous recurrence $h_n = 2h_{n-1}$.' },
            { tex: 'H_n = \\alpha\\, 2^n - 1', why: 'General solution $= p_n + h_n$.' },
            { tex: 'H_0 = \\alpha - 1 = 0 \\implies \\alpha = 1, \\quad H_n = 2^n - 1', why: 'Fit the initial condition **after** adding the particular solution — never before.' },
          ],
          result: 'The same answer backward substitution gave, with no sums to evaluate.',
        },
        {
          type: 'derivation',
          title: 'A polynomial term: $a_n = 3a_{n-1} + 2n$, $a_1 = 3$',
          steps: [
            { tex: 'p_n = cn + d', why: '$F(n) = 2n$ has degree $1$; $1$ is not a root (the root is $3$).' },
            { tex: 'cn + d = 3\\big(c(n-1) + d\\big) + 2n = (3c + 2)n + (3d - 3c)', why: 'Substitute $p_n$ into the recurrence and collect powers of $n$.' },
            { tex: 'c = 3c + 2 \\implies c = -1; \\qquad d = 3d - 3c \\implies d = -\\tfrac{3}{2}', why: 'Match the coefficients of $n$ and the constants: $-2d = -3c = 3$.' },
            { tex: 'a_n = \\alpha\\, 3^n - n - \\tfrac{3}{2}', why: 'Add the homogeneous solution $\\alpha 3^n$.' },
            { tex: 'a_1 = 3\\alpha - 1 - \\tfrac{3}{2} = 3 \\implies \\alpha = \\tfrac{11}{6}', why: 'Fit $a_1 = 3$: $3\\alpha = \\frac{11}{2}$.' },
          ],
          result: '$a_n = \\frac{11}{6} \\cdot 3^n - n - \\frac{3}{2}$. Check: recurrence $a_2 = 9 + 4 = 13$; formula $\\frac{11}{6} \\cdot 9 - 2 - 1.5 = 16.5 - 3.5 = 13$ ✓.',
        },
      ],
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'fill',
      prompt: 'Solve $a_n = 2a_{n-1} + 3$ with $a_0 = 1$.',
      template: 'Try a constant particular solution $p_n = A$: $A = 2A + 3$ gives $A =$ ___ . Adding the homogeneous solutions $\\alpha 2^n$, the general solution is $a_n =$ ___ . Then $a_0 = 1$ gives $1 = \\alpha - 3$, so $\\alpha =$ ___ .',
      blanks: [{ answers: ['$-3$'] }, { answers: ['$\\alpha 2^n - 3$'] }, { answers: ['$4$'] }],
      wordBank: ['$-3$', '$3$', '$\\alpha 2^n - 3$', '$\\alpha 2^n + 3$', '$4$', '$-2$'],
      explanation: '$A = 2A + 3 \\implies -A = 3 \\implies A = -3$. The general solution is $a_n = \\alpha 2^n - 3$, and $a_0 = \\alpha - 3 = 1$ gives $\\alpha = 4$, so $a_n = 4 \\cdot 2^n - 3$. Check: $a_1 = 2 \\cdot 1 + 3 = 5$ and $8 - 3 = 5$ ✓. The classic mistake is fitting $\\alpha$ to the initial condition **before** adding $p_n$.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'Generating functions',
      blocks: [
        {
          type: 'p',
          text: 'A [[dm-generating-function|generating function]] packs an entire sequence into a single object: the sequence becomes the coefficients of a power series. Then operations on sequences (shifting, adding, convolving) become algebra on functions.',
        },
        {
          type: 'definition',
          term: 'Ordinary generating function',
          text: 'The ordinary generating function of $a_0, a_1, a_2, \\dots$ is\n\n$$G(x) = a_0 + a_1 x + a_2 x^2 + \\cdots = \\sum_{n=0}^{\\infty} a_n x^n.$$\n\nHere $x$ is only a placeholder that keeps the terms in order: $a_n$ is "the coefficient of $x^n$". We treat these as **formal** power series and never plug in a number, so convergence is not an issue.',
        },
        {
          type: 'table',
          headers: ['Sequence', 'Generating function', 'Why'],
          rows: [
            ['$1, 1, 1, 1, \\dots$', '$\\dfrac{1}{1 - x}$', '[[geometric-series]]: $(1 - x)(1 + x + x^2 + \\cdots) = 1$'],
            ['$1, a, a^2, a^3, \\dots$', '$\\dfrac{1}{1 - ax}$', 'replace $x$ by $ax$ in the line above'],
            ['$\\binom{m}{0}, \\binom{m}{1}, \\dots, \\binom{m}{m}$', '$(1 + x)^m$', 'the [[binomial-theorem]]'],
            ['$a_{n-1}$ (shifted right)', '$x\\,G(x)$', 'multiplying by $x$ moves every coefficient up one place'],
          ],
        },
        {
          type: 'derivation',
          title: 'Solve $H_n = 2H_{n-1} + 1$ ($n \\ge 1$), $H_0 = 0$, with $G(x) = \\sum H_n x^n$',
          steps: [
            { tex: '\\sum_{n \\ge 1} H_n x^n = 2\\sum_{n \\ge 1} H_{n-1} x^n + \\sum_{n \\ge 1} x^n', why: 'Multiply the recurrence by $x^n$ and add over every $n$ where it holds.' },
            { tex: 'G(x) - H_0 = 2x\\,G(x) + \\frac{x}{1 - x}', why: 'Left: all of $G$ except the $n = 0$ term. Middle: factor out $x$ to get $x\\sum H_{n-1}x^{n-1} = xG(x)$. Right: $x + x^2 + \\cdots = \\frac{x}{1-x}$.' },
            { tex: 'G(x)(1 - 2x) = \\frac{x}{1 - x} \\implies G(x) = \\frac{x}{(1 - x)(1 - 2x)}', why: 'Use $H_0 = 0$ and solve for $G$ — ordinary algebra.' },
            { tex: '= \\frac{1}{1 - 2x} - \\frac{1}{1 - x}', why: '[[partial-fractions]]: write $\\frac{x}{(1-x)(1-2x)} = \\frac{A}{1-2x} + \\frac{B}{1-x}$; then $x = A(1 - x) + B(1 - 2x)$, and $x = \\frac{1}{2}$ gives $A = 1$, $x = 1$ gives $B = -1$.' },
            { tex: '= \\sum_{n \\ge 0} 2^n x^n - \\sum_{n \\ge 0} x^n \\implies H_n = 2^n - 1', why: 'Expand each piece with the table and read off the coefficient of $x^n$.' },
          ],
          result: 'The same $2^n - 1$, found by pure algebra. For Fibonacci the same steps give $\\sum F_n x^n = \\frac{x}{1 - x - x^2}$, whose partial fractions bring back $\\varphi$ and $\\psi$.',
        },
        {
          type: 'heading',
          text: 'Counting with generating functions',
        },
        {
          type: 'p',
          text: 'Multiplying polynomials adds exponents and multiplies coefficients: $x^i \\cdot x^j = x^{i+j}$. So if exponents are **amounts** and coefficients are **numbers of ways**, a product counts the ways to combine choices. One six-sided die is $x + x^2 + \\cdots + x^6$ (one way to roll each value). Three dice: the coefficient of $x^s$ in $(x + x^2 + \\cdots + x^6)^3$ is the number of ordered rolls summing to $s$. Coins work the same way: pennies contribute $1 + x + x^2 + \\cdots = \\frac{1}{1-x}$, nickels $1 + x^5 + x^{10} + \\cdots = \\frac{1}{1 - x^5}$.',
        },
        {
          type: 'code',
          title: 'dice_gf.cpp',
          runnable: true,
          code: `#include <cstdio>
#include <vector>

// Multiply two polynomials given by their coefficient lists.
std::vector<long> multiply(const std::vector<long>& p, const std::vector<long>& q) {
    std::vector<long> r(p.size() + q.size() - 1, 0);
    for (std::size_t i = 0; i < p.size(); ++i)
        for (std::size_t j = 0; j < q.size(); ++j)
            r[i + j] += p[i] * q[j];          // x^i * x^j = x^(i+j)
    return r;
}

int main() {
    // One six-sided die: x + x^2 + ... + x^6  (coefficient of x^s = ways to roll s).
    std::vector<long> die = {0, 1, 1, 1, 1, 1, 1};
    std::vector<long> g = {1};                  // the polynomial 1
    for (int k = 0; k < 3; ++k) g = multiply(g, die);

    for (std::size_t s = 3; s < g.size(); ++s)
        std::printf("sum %2zu: %2ld ways\\n", s, g[s]);
}`,
          output: `sum  3:  1 ways
sum  4:  3 ways
sum  5:  6 ways
sum  6: 10 ways
sum  7: 15 ways
sum  8: 21 ways
sum  9: 25 ways
sum 10: 27 ways
sum 11: 27 ways
sum 12: 25 ways
sum 13: 21 ways
sum 14: 15 ways
sum 15: 10 ways
sum 16:  6 ways
sum 17:  3 ways
sum 18:  1 ways`,
          annotations: [
            { lines: 9, text: 'Polynomial multiplication is a *convolution*: the ways to reach total $i + j$ add up over every split into $i$ and $j$.' },
            { lines: 15, text: 'Index = exponent. `die[s]` is the coefficient of $x^s$: one way for each face $1$ to $6$.' },
            { lines: 17, text: 'Three factors of the die polynomial. Dividing each count by $6^3 = 216$ gives the probability of each sum — loot and damage-roll tables are built exactly like this.' },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'numeric',
      prompt: 'Using the generating function $\\dfrac{1}{(1 - x)(1 - x^5)(1 - x^{10})}$, the coefficient of $x^{25}$ counts the ways to make $25$ cents from pennies, nickels and dimes (order does not matter). What is it?',
      label: 'ways $=$',
      answer: '12',
      hint: 'Pick the number of dimes $d$ and nickels $k$ with $10d + 5k \\le 25$; the pennies then fill the rest in exactly one way.',
      explanation: 'A term $x^{25}$ arises by choosing $x^{10d}$ from the dime factor, $x^{5k}$ from the nickel factor and $x^{p}$ from the penny factor with $10d + 5k + p = 25$. For each $(d, k)$ with $10d + 5k \\le 25$ there is exactly one $p$. $d = 0$: $k = 0, \\dots, 5$ ($6$ ways); $d = 1$: $k = 0, \\dots, 3$ ($4$ ways); $d = 2$: $k = 0, 1$ ($2$ ways). Total $6 + 4 + 2 = 12$.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'concept',
      title: 'Trust, but verify: checking solutions in code',
      blocks: [
        {
          type: 'p',
          text: 'Every method in this lesson ends with a formula, and every formula can hide an arithmetic slip. The cheapest insurance is to compute terms two ways — from the recurrence, and from your closed form — and compare. A few lines of code check hundreds of terms; a pen-and-paper check of $a_2$ and $a_3$ catches most mistakes on an exam.',
        },
        {
          type: 'code',
          title: 'check_solutions.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdint>
#include <cstdio>

int main() {
    // 1) a(n) = a(n-1) + 2a(n-2), a(0) = 2, a(1) = 7  vs  3*2^n - (-1)^n
    std::int64_t prev = 2, cur = 7;
    bool ok = true;
    for (int n = 2; n <= 40; ++n) {
        std::int64_t next = cur + 2 * prev;
        prev = cur;
        cur = next;
        std::int64_t formula = 3 * (std::int64_t(1) << n) - (n % 2 ? -1 : 1);
        if (cur != formula) ok = false;
    }
    std::printf("3*2^n - (-1)^n matches for n <= 40: %s\\n", ok ? "yes" : "NO");

    // 2) a(n) = 6a(n-1) - 9a(n-2), a(0) = 1, a(1) = 6  vs  (1 + n) 3^n
    prev = 1; cur = 6; ok = true;
    std::int64_t pow3 = 3;
    for (int n = 2; n <= 30; ++n) {
        std::int64_t next = 6 * cur - 9 * prev;
        prev = cur;
        cur = next;
        pow3 *= 3;
        if (cur != (1 + n) * pow3) ok = false;
    }
    std::printf("(1 + n) 3^n matches for n <= 30: %s\\n", ok ? "yes" : "NO");

    // 3) Binet's formula in double precision vs exact Fibonacci numbers
    const double phi = (1 + std::sqrt(5.0)) / 2;
    std::uint64_t f0 = 0, f1 = 1;               // F(n), F(n+1)
    for (int n = 0; n <= 92; ++n) {
        double binet = std::pow(phi, n) / std::sqrt(5.0);
        if (std::llround(binet) != static_cast<long long>(f0)) {
            std::printf("Binet + rounding first fails at n = %d\\n", n);
            std::printf("  exact F(n)   = %llu\\n", (unsigned long long)f0);
            std::printf("  double Binet = %.1f\\n", binet);
            break;
        }
        std::uint64_t f2 = f0 + f1;
        f0 = f1;
        f1 = f2;
    }
}`,
          output: `3*2^n - (-1)^n matches for n <= 40: yes
(1 + n) 3^n matches for n <= 30: yes
Binet + rounding first fails at n = 71
  exact F(n)   = 308061521170129
  double Binet = 308061521170129.7`,
          annotations: [
            { lines: 13, text: '`1 << n` is $2^n$ (exact in 64-bit integers), and $(-1)^n$ is $-1$ for odd $n$, $+1$ for even $n$.' },
            { lines: '30-41', text: 'Binet is exact in real arithmetic, but a `double` has only 53 bits of precision ($\\approx 16$ significant digits). By $n = 71$, $F_n$ has 15 digits and the rounding error in $\\varphi^n$ exceeds $\\frac{1}{2}$.' },
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Closed form is not always the best code',
          text: 'Binet\'s formula is a beautiful **analysis** tool (it proves $F_n = \\Theta(\\varphi^n)$), but for computing exact Fibonacci numbers the integer loop is both faster and correct. Use closed forms to understand growth; use integer recurrences — or fast matrix powers, $\\Theta(\\log n)$ by repeated squaring — to compute exact values.',
        },
        {
          type: 'callout',
          variant: 'exam',
          title: 'Checking is not proving',
          text: 'Agreement on finitely many terms is evidence, not proof. A proof needs: the formula satisfies the recurrence for **all** $n$ (by algebra or [[dm-mathematical-induction|induction]]) **and** matches the initial conditions. For formulas built by the characteristic-root method the first part is automatic, which is why matching $a_0$ and $a_1$ suffices there. Graders want to see the initial conditions used explicitly.',
        },
      ],
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'truefalse',
      prompt: 'If a proposed formula agrees with a sequence for $n = 1, 2, 3, 4, 5$, then the formula is proved correct for all $n$.',
      answer: false,
      explanation: 'Finite agreement proves nothing on its own. Classic example: place $n$ points on a circle and join every pair by a chord; the number of regions is $1, 2, 4, 8, 16$ for $n = 1, \\dots, 5$, which shouts "$2^{n-1}$" — but for $n = 6$ it is $31$, not $32$. (The true formula is $\\binom{n}{4} + \\binom{n}{2} + 1$.) To prove a closed form, show it satisfies the recurrence for every $n$ and matches the initial conditions, typically by induction.',
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'order',
      prompt: 'Put the steps for solving $a_n = c_1 a_{n-1} + c_2 a_{n-2}$ with given $a_0$, $a_1$ in order.',
      lines: [
        'Write the characteristic equation $r^2 - c_1 r - c_2 = 0$',
        'Find its roots',
        'Write the general solution: $\\alpha_1 r_1^n + \\alpha_2 r_2^n$, or $(\\alpha_1 + \\alpha_2 n)r_0^n$ for a repeated root',
        'Use $a_0$ and $a_1$ to set up two equations for $\\alpha_1, \\alpha_2$ and solve them',
        'Check $a_2$ from the recurrence against the formula',
      ],
      distractors: ['Use $a_0$ and $a_1$ to find the roots $r_1$ and $r_2$'],
      explanation: 'The roots depend only on the recurrence (the coefficients $c_1$, $c_2$), never on the initial conditions — that is the distractor\'s mistake. The initial conditions are used once, at the end, to pin down the constants $\\alpha_1$ and $\\alpha_2$. A final check of $a_2$ catches most algebra slips.',
    },
  ],
  takeaways: [
    'A linear homogeneous recurrence with constant coefficients $a_n = c_1 a_{n-1} + \\cdots + c_k a_{n-k}$ has solutions $r^n$ exactly for the roots of $r^k - c_1 r^{k-1} - \\cdots - c_k = 0$, and linear combinations of solutions are solutions.',
    'Distinct roots: $a_n = \\alpha_1 r_1^n + \\alpha_2 r_2^n$. Repeated root: $a_n = (\\alpha_1 + \\alpha_2 n) r_0^n$. Fit the constants to the initial conditions last.',
    'Binet: $F_n = \\frac{\\varphi^n - \\psi^n}{\\sqrt{5}}$ with $\\varphi = \\frac{1+\\sqrt{5}}{2}$; $F_n$ is the integer nearest $\\varphi^n/\\sqrt{5}$, so $F_n = \\Theta(\\varphi^n)$ and $F_{n+1}/F_n \\to \\varphi$.',
    'Nonhomogeneous: general solution = one particular solution + all homogeneous solutions; guess a constant or polynomial of the same shape as the extra term.',
    'An ordinary generating function $\\sum a_n x^n$ turns a recurrence into an algebraic equation; partial fractions and $\\frac{1}{1 - ax} = \\sum a^n x^n$ read off $a_n$. Products of generating functions count combinations (dice, coins).',
    'Always check a closed form against computed terms — and remember that checking finitely many terms is not a proof.',
  ],
  reading: [
    {
      title: 'Levin — Discrete Mathematics: An Open Introduction',
      url: 'https://discrete.openmathbooks.org/dmoi3.html',
      source: 'book',
      note: 'Its sections on solving recurrence relations and on generating functions match this lesson closely and have many short exercises with hints.',
    },
    {
      title: 'MIT OCW 6.042J — Mathematics for Computer Science',
      url: 'https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-fall-2010/',
      source: 'other',
      note: 'The linear recurrences and generating functions chapters give the general method, including how to guess particular solutions.',
    },
    {
      title: 'Wikipedia — Fibonacci sequence',
      url: 'https://en.wikipedia.org/wiki/Fibonacci_sequence',
      source: 'wikipedia',
      note: 'Binet\'s formula, the golden ratio, the matrix form, and dozens of identities, with proofs.',
    },
    {
      title: 'Wikipedia — Generating function',
      url: 'https://en.wikipedia.org/wiki/Generating_function',
      source: 'wikipedia',
      note: 'Surveys ordinary and exponential generating functions with worked examples of solving recurrences and counting problems.',
    },
  ],
};
