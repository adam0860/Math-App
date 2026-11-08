import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'dm-induction',
  title: 'Mathematical Induction',
  summary: 'Knock over the first domino and make sure each one topples the next: the proof technique behind sum formulas, loop invariants and every recursive function you trust.',
  minutes: 20,
  objectives: [
    'State the principle of mathematical induction and explain why it is valid',
    'Write complete induction proofs with a clearly marked base case, inductive hypothesis and inductive step',
    'Prove sum formulas, geometric sums, inequalities such as $2^n > n$, and divisibility facts such as $6 \\mid n^3 - n$',
    'Connect induction to loop invariants and to the correctness of recursive functions',
    'Find the flaw in classic bad induction proofs, such as "all horses are the same color"',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'The domino principle',
      blocks: [
        {
          type: 'p',
          text: 'Many statements are about every natural number: $1 + 2 + \\dots + n = \\frac{n(n+1)}{2}$, "$2^n > n$", "this loop is correct after $n$ iterations". A direct proof would need to handle infinitely many $n$ at once. [[dm-mathematical-induction|Mathematical induction]] handles them one step at a time.',
        },
        {
          type: 'figure',
          svg: '<svg viewBox="0 40 520 172" xmlns="http://www.w3.org/2000/svg"><path d="M10 140 L510 140" stroke="currentColor" stroke-width="1.4" class="s-gray"/><rect x="40" y="60" width="14" height="80" rx="2" fill="currentColor" fill-opacity="0.75" class="f-orange" transform="rotate(62 54 140)"/><text x="47.0" y="160" text-anchor="middle" font-size="12">P(1)</text><rect x="92" y="60" width="14" height="80" rx="2" fill="currentColor" fill-opacity="0.75" class="f-orange" transform="rotate(38 106 140)"/><text x="99.0" y="160" text-anchor="middle" font-size="12">P(2)</text><rect x="144" y="60" width="14" height="80" rx="2" fill="currentColor" fill-opacity="0.75" class="f-orange" transform="rotate(14 158 140)"/><text x="151.0" y="160" text-anchor="middle" font-size="12">P(3)</text><rect x="196" y="60" width="14" height="80" rx="2" fill="currentColor" fill-opacity="0.75" class="f-blue" transform="rotate(0 210 140)"/><text x="203.0" y="160" text-anchor="middle" font-size="12">P(4)</text><rect x="248" y="60" width="14" height="80" rx="2" fill="currentColor" fill-opacity="0.75" class="f-blue" transform="rotate(0 262 140)"/><text x="255.0" y="160" text-anchor="middle" font-size="12">P(5)</text><rect x="300" y="60" width="14" height="80" rx="2" fill="currentColor" fill-opacity="0.75" class="f-blue" transform="rotate(0 314 140)"/><text x="307.0" y="160" text-anchor="middle" font-size="12">P(6)</text><rect x="352" y="60" width="14" height="80" rx="2" fill="currentColor" fill-opacity="0.75" class="f-blue" transform="rotate(0 366 140)"/><text x="359.0" y="160" text-anchor="middle" font-size="12">P(7)</text><rect x="404" y="60" width="14" height="80" rx="2" fill="currentColor" fill-opacity="0.75" class="f-blue" transform="rotate(0 418 140)"/><text x="411.0" y="160" text-anchor="middle" font-size="12">P(8)</text><text x="456" y="110" text-anchor="middle" font-size="20">…</text><path d="M14 70 L34 70" stroke="currentColor" stroke-width="2" class="s-red"/><path d="M34 70 L27 65 L27 75 Z" fill="currentColor" class="f-red"/><text x="10" y="58" font-size="12" class="t-red">push</text><text x="20" y="188" font-size="12" class="t-gray" text-anchor="start">Base case: P(1) falls.   Inductive step: if P(k) falls, it knocks over P(k + 1).</text><text x="20" y="206" font-size="12" class="t-gray" text-anchor="start">Together: every domino falls, so P(n) is true for every n ≥ 1.</text></svg>',
          alt: 'A row of dominoes labelled P(1), P(2), P(3) and so on. A push arrow knocks the first; the first three are falling into each other and the rest still stand.',
          caption: 'Two facts guarantee every domino falls: the first one is pushed, and every domino that falls knocks over the next. Neither fact alone is enough.',
        },
        {
          type: 'theorem',
          name: 'Principle of mathematical induction',
          tex: '\\Big(P(b) \\;\\land\\; \\forall k \\ge b\\, \\big(P(k) \\to P(k+1)\\big)\\Big) \\;\\to\\; \\forall n \\ge b\\; P(n)',
          text: 'To prove $P(n)$ for every integer $n \\ge b$: prove the **base case** $P(b)$, then prove the **inductive step**: for an arbitrary $k \\ge b$, assuming $P(k)$ (the **inductive hypothesis**), show $P(k+1)$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why induction works',
          text: 'Unroll it with modus ponens. $P(b)$ is true. The step with $k = b$ gives $P(b) \\to P(b+1)$, so $P(b+1)$. With $k = b + 1$ it gives $P(b+2)$, and so on: any particular $n$ is reached after $n - b$ steps. More rigorously: if some $P(n)$ failed, there would be a **smallest** failing $n$ (the well-ordering principle, lesson 4). It is not $b$, so $P(n - 1)$ is true, and the step forces $P(n)$ true: a contradiction.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'The inductive step does not assume what you are proving',
          text: 'You assume $P(k)$ for **one** arbitrary $k$ and prove $P(k+1)$; you never assume "$P(n)$ for all $n$". The step proves a conditional, $P(k) \\to P(k+1)$, which is a different claim from $P(k)$ itself.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'mcq',
      prompt: 'In the inductive step of a proof that $P(n)$ holds for all $n \\ge 1$, what exactly do you do?',
      options: [
        { text: 'Assume $P(n)$ holds for all $n \\ge 1$ and show $P(k+1)$.', why: 'That assumes the entire theorem, which is circular reasoning.' },
        { text: 'Show $P(k)$ and $P(k+1)$ are both true for some $k$.', why: 'Checking two particular cases is not a proof; the step must work for **every** $k \\ge 1$.' },
        { text: 'For an arbitrary $k \\ge 1$, assume $P(k)$ and use it to prove $P(k+1)$.', correct: true, why: 'This proves $\\forall k \\ge 1\\, (P(k) \\to P(k+1))$, the domino link, without assuming the theorem.' },
        { text: 'Prove $P(k+1)$ directly without using $P(k)$.', why: 'Allowed in principle, but then you did not need induction. The whole point is that $P(k)$ helps prove $P(k+1)$.' },
      ],
      explanation: 'The inductive step proves a conditional for an arbitrary $k$: if $P(k)$, then $P(k+1)$. Together with the base case, this pushes truth from $b$ to $b + 1$ to $b + 2$ and on forever.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Your first induction proof: $1 + 2 + \\dots + n$',
      blocks: [
        {
          type: 'p',
          text: 'Here is the most famous sum in mathematics, written with [[sigma-notation]]. The picture explains *why* it is true; induction *proves* it in a form that generalises to sums with no nice picture.',
        },
        {
          type: 'figure',
          svg: '<svg viewBox="20 0 500 180" xmlns="http://www.w3.org/2000/svg"><rect x="150" y="20" width="22" height="22" rx="3" fill="currentColor" fill-opacity="0.7" class="f-blue"/><rect x="174" y="20" width="22" height="22" rx="3" fill="currentColor" fill-opacity="0.7" class="f-orange"/><rect x="198" y="20" width="22" height="22" rx="3" fill="currentColor" fill-opacity="0.7" class="f-orange"/><rect x="222" y="20" width="22" height="22" rx="3" fill="currentColor" fill-opacity="0.7" class="f-orange"/><rect x="246" y="20" width="22" height="22" rx="3" fill="currentColor" fill-opacity="0.7" class="f-orange"/><rect x="270" y="20" width="22" height="22" rx="3" fill="currentColor" fill-opacity="0.7" class="f-orange"/><rect x="150" y="44" width="22" height="22" rx="3" fill="currentColor" fill-opacity="0.7" class="f-blue"/><rect x="174" y="44" width="22" height="22" rx="3" fill="currentColor" fill-opacity="0.7" class="f-blue"/><rect x="198" y="44" width="22" height="22" rx="3" fill="currentColor" fill-opacity="0.7" class="f-orange"/><rect x="222" y="44" width="22" height="22" rx="3" fill="currentColor" fill-opacity="0.7" class="f-orange"/><rect x="246" y="44" width="22" height="22" rx="3" fill="currentColor" fill-opacity="0.7" class="f-orange"/><rect x="270" y="44" width="22" height="22" rx="3" fill="currentColor" fill-opacity="0.7" class="f-orange"/><rect x="150" y="68" width="22" height="22" rx="3" fill="currentColor" fill-opacity="0.7" class="f-blue"/><rect x="174" y="68" width="22" height="22" rx="3" fill="currentColor" fill-opacity="0.7" class="f-blue"/><rect x="198" y="68" width="22" height="22" rx="3" fill="currentColor" fill-opacity="0.7" class="f-blue"/><rect x="222" y="68" width="22" height="22" rx="3" fill="currentColor" fill-opacity="0.7" class="f-orange"/><rect x="246" y="68" width="22" height="22" rx="3" fill="currentColor" fill-opacity="0.7" class="f-orange"/><rect x="270" y="68" width="22" height="22" rx="3" fill="currentColor" fill-opacity="0.7" class="f-orange"/><rect x="150" y="92" width="22" height="22" rx="3" fill="currentColor" fill-opacity="0.7" class="f-blue"/><rect x="174" y="92" width="22" height="22" rx="3" fill="currentColor" fill-opacity="0.7" class="f-blue"/><rect x="198" y="92" width="22" height="22" rx="3" fill="currentColor" fill-opacity="0.7" class="f-blue"/><rect x="222" y="92" width="22" height="22" rx="3" fill="currentColor" fill-opacity="0.7" class="f-blue"/><rect x="246" y="92" width="22" height="22" rx="3" fill="currentColor" fill-opacity="0.7" class="f-orange"/><rect x="270" y="92" width="22" height="22" rx="3" fill="currentColor" fill-opacity="0.7" class="f-orange"/><rect x="150" y="116" width="22" height="22" rx="3" fill="currentColor" fill-opacity="0.7" class="f-blue"/><rect x="174" y="116" width="22" height="22" rx="3" fill="currentColor" fill-opacity="0.7" class="f-blue"/><rect x="198" y="116" width="22" height="22" rx="3" fill="currentColor" fill-opacity="0.7" class="f-blue"/><rect x="222" y="116" width="22" height="22" rx="3" fill="currentColor" fill-opacity="0.7" class="f-blue"/><rect x="246" y="116" width="22" height="22" rx="3" fill="currentColor" fill-opacity="0.7" class="f-blue"/><rect x="270" y="116" width="22" height="22" rx="3" fill="currentColor" fill-opacity="0.7" class="f-orange"/><text x="222.0" y="162" text-anchor="middle" font-size="13">n + 1 = 6 columns</text><text x="138" y="85.0" text-anchor="end" font-size="13">n = 5 rows</text><text x="310" y="50" font-size="13" class="t-blue">blue: 1 + 2 + 3 + 4 + 5</text><text x="310" y="72" font-size="13" class="t-orange">orange: 5 + 4 + 3 + 2 + 1</text><text x="310" y="100" font-size="13">together: 5 · 6 = 30</text><text x="310" y="122" font-size="13">so each sum is 30 / 2 = 15</text></svg>',
          alt: 'A 5 by 6 grid of squares split into a blue staircase of 1, 2, 3, 4, 5 squares and an orange staircase of 5, 4, 3, 2, 1 squares.',
          caption: 'Two copies of the staircase $1 + 2 + \\dots + n$ fill an $n \\times (n+1)$ rectangle, so the sum is $\\frac{n(n+1)}{2}$.',
        },
        {
          type: 'derivation',
          title: 'Theorem: for every integer $n \\ge 1$, $\\;\\sum_{i=1}^{n} i = \\frac{n(n+1)}{2}$.',
          steps: [
            { tex: 'P(n): \\; 1 + 2 + \\dots + n = \\frac{n(n+1)}{2}', why: 'Write $P(n)$ explicitly first. Most induction errors come from being vague about what $P(n)$ says.' },
            { tex: '\\textbf{Base case } (n = 1): \\; 1 = \\frac{1 \\cdot 2}{2}', why: 'Both sides equal $1$, so $P(1)$ holds.' },
            { tex: '\\textbf{Inductive hypothesis: } 1 + 2 + \\dots + k = \\frac{k(k+1)}{2}', why: 'Let $k \\ge 1$ be arbitrary and assume $P(k)$.' },
            { tex: '\\textbf{Goal: } 1 + 2 + \\dots + (k+1) = \\frac{(k+1)(k+2)}{2}', why: 'Write down $P(k+1)$ so you know the target.' },
            { tex: '1 + \\dots + k + (k+1) = \\frac{k(k+1)}{2} + (k+1)', why: 'The left side contains the sum from the hypothesis; replace it. This is where the IH is used.' },
            { tex: '= \\frac{k(k+1) + 2(k+1)}{2} = \\frac{(k+1)(k+2)}{2}', why: 'Common denominator, then factor out $(k + 1)$. This is exactly the goal.' },
          ],
          result: 'By induction, the formula holds for every $n \\ge 1$. $\\blacksquare$',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'The pattern of every inductive step',
          text: 'Write $P(k+1)$. Find $P(k)$ hiding inside it (here, the first $k$ terms). Replace that part using the hypothesis. Do algebra until you reach the right side of $P(k+1)$. If you never used the hypothesis, something is wrong.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'numeric',
      prompt: 'Use the formula to compute $1 + 2 + 3 + \\dots + 200$.',
      label: 'sum $=$',
      answer: '20100',
      hint: '$\\frac{n(n+1)}{2}$ with $n = 200$.',
      explanation: '$\\frac{200 \\cdot 201}{2} = 100 \\cdot 201 = 20100$. A loop would take $200$ additions; the proved formula takes one multiplication. That is the practical payoff of a proof: you can replace a computation with a formula you *know* is right.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Geometric sums',
      blocks: [
        {
          type: 'p',
          text: 'A [[geometric-series|geometric sum]] adds successive powers: $1 + r + r^2 + \\dots + r^n$. In binary, $1 + 2 + 4 + \\dots + 2^n$ is a row of $n + 1$ one-bits, which is one less than $2^{n+1}$: $1111_2 = 15 = 2^4 - 1$. Induction proves the general formula.',
        },
        {
          type: 'derivation',
          title: 'Theorem: for $r \\ne 1$ and every $n \\ge 0$, $\\;\\sum_{i=0}^{n} r^i = \\frac{r^{n+1} - 1}{r - 1}$.',
          steps: [
            { tex: '\\textbf{Base } (n = 0): \\; r^0 = 1 = \\frac{r - 1}{r - 1}', why: 'The sum has one term, $1$. Dividing by $r - 1$ is legal since $r \\ne 1$.' },
            { tex: '\\textbf{IH: } \\sum_{i=0}^{k} r^i = \\frac{r^{k+1} - 1}{r - 1}', why: 'Assume $P(k)$ for an arbitrary $k \\ge 0$.' },
            { tex: '\\sum_{i=0}^{k+1} r^i = \\frac{r^{k+1} - 1}{r - 1} + r^{k+1}', why: 'Split off the last term and apply the IH to the rest.' },
            { tex: '= \\frac{r^{k+1} - 1 + r^{k+2} - r^{k+1}}{r - 1}', why: 'Common denominator: $r^{k+1} = \\frac{r^{k+1}(r - 1)}{r - 1}$.' },
            { tex: '= \\frac{r^{k+2} - 1}{r - 1}', why: 'The $r^{k+1}$ terms cancel, leaving $P(k+1)$. $\\blacksquare$' },
          ],
          result: 'With $r = 2$: $1 + 2 + \\dots + 2^n = 2^{n+1} - 1$, which is why an `unsigned` with all $32$ bits set equals $2^{32} - 1$.',
        },
        {
          type: 'graph',
          x: [0, 12],
          y: [-1, 11],
          functions: [{ expr: '(1 - r^(floor(x) + 1))/(1 - r)', label: 'partial sum $S_n$ (step at each $n$)', color: 'blue' }],
          hlines: [{ y: '1/(1 - r)', label: 'limit 1/(1 − r)', color: 'red' }],
          points: [{ x: 'n', y: '(1 - r^(n + 1))/(1 - r)', label: 'S_n', color: 'purple' }],
          sliders: [
            { name: 'r', min: -0.9, max: 0.9, step: 0.05, value: 0.5, label: 'ratio $r$' },
            { name: 'n', min: 0, max: 12, step: 1, value: 3, label: '$n$' },
          ],
          readouts: [
            { label: '$S_n = \\frac{1 - r^{n+1}}{1 - r} =$', expr: '(1 - r^(n + 1))/(1 - r)', digits: 4 },
            { label: '$\\frac{1}{1 - r} =$', expr: '1/(1 - r)', digits: 4 },
          ],
          caption: 'For $|r| < 1$ the term $r^{n+1}$ shrinks, so the partial sums approach $\\frac{1}{1 - r}$: with $r = \\tfrac12$, $1 + \\tfrac12 + \\tfrac14 + \\dots$ approaches $2$. Negative $r$ makes the sums zig-zag toward the limit.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'expr',
      prompt: 'Compute a few values of $1 + 3 + 5 + \\dots + (2n - 1)$ (the sum of the first $n$ odd numbers), guess a closed form, then (on paper) prove it by induction. Enter your formula in terms of $n$.',
      label: '$1 + 3 + \\dots + (2n-1) =$',
      answer: 'n^2',
      answerTex: 'n^2',
      variables: ['n'],
      hint: '$1 = 1$, $1 + 3 = 4$, $1 + 3 + 5 = 9$, $1 + 3 + 5 + 7 = 16$…',
      explanation: 'The sums are $1, 4, 9, 16, \\dots$: perfect squares, so guess $n^2$. Induction: the base case $n = 1$ gives $1 = 1^2$. If $1 + 3 + \\dots + (2k - 1) = k^2$, then adding the next odd number gives $k^2 + (2k + 1) = (k + 1)^2$. Notice the workflow: experiment, conjecture, then prove. Induction verifies a formula; it does not invent one.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'Inequalities: $2^n > n$, and why the base case matters',
      blocks: [
        {
          type: 'p',
          text: 'Induction proves inequalities too. The algebra is different: instead of an exact equality you need a chain of $\\ge$ and $>$ steps, each justified.',
        },
        {
          type: 'derivation',
          title: 'Theorem: $2^n > n$ for every integer $n \\ge 1$.',
          steps: [
            { tex: '\\textbf{Base } (n = 1): \\; 2^1 = 2 > 1', why: 'True.' },
            { tex: '\\textbf{IH: } 2^k > k \\text{ for some arbitrary } k \\ge 1', why: 'Assume $P(k)$.' },
            { tex: '2^{k+1} = 2 \\cdot 2^k > 2k', why: 'Rewrite to expose $2^k$, then use the IH (multiplying an inequality by $2 > 0$ keeps its direction).' },
            { tex: '2k = k + k \\ge k + 1', why: 'Because $k \\ge 1$. This is where the restriction $k \\ge 1$ is used.' },
            { tex: '\\therefore\\; 2^{k+1} > k + 1 \\quad \\blacksquare', why: 'Chain the two steps: $2^{k+1} > 2k \\ge k + 1$.' },
          ],
        },
        {
          type: 'p',
          text: 'Some inequalities are false for small $n$ and only start later, so the base case is **not** always $0$ or $1$. Compare $n!$ and $2^n$ (recall $n! = 1 \\cdot 2 \\cdots n$, the [[factorial]]):',
        },
        {
          type: 'graph',
          x: [0, 6.5],
          y: [0, 130],
          yStep: 20,
          functions: [{ expr: '2^x', label: '$2^n$', color: 'blue', dashed: true }],
          points: [
            { x: 0, y: 1, color: 'red' },
            { x: 1, y: 1, color: 'red' },
            { x: 2, y: 2, color: 'red' },
            { x: 3, y: 6, color: 'red' },
            { x: 4, y: 24, color: 'red', label: '4! = 24 > 16' },
            { x: 5, y: 120, color: 'red', label: '5! = 120' },
            { x: 4, y: 16, color: 'blue' },
            { x: 3, y: 8, color: 'blue' },
          ],
          caption: 'Red dots are $n!$, the blue curve is $2^n$. $n! > 2^n$ fails for $n \\le 3$ and holds from $n = 4$ on, so an induction proof must start at base case $n = 4$. The inductive step works because $(k+1)! = (k+1) \\cdot k! > (k+1) \\cdot 2^k \\ge 2 \\cdot 2^k$ when $k + 1 \\ge 2$.',
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'In an inequality step, write the chain on one line with each relation justified, and say where the hypothesis $k \\ge b$ is used. Graders look for that: an inductive step that never uses $k \\ge b$ often secretly fails for small $k$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'numeric',
      prompt: 'What is the smallest positive integer $n$ for which $n! > 2^n$? (This is the base case an induction proof of "$n! > 2^n$ for all $n \\ge b$" must use.)',
      label: '$n =$',
      answer: '4',
      hint: 'Compare $n!$ and $2^n$ for $n = 1, 2, 3, 4$.',
      explanation: '$1! = 1 < 2$, $2! = 2 < 4$, $3! = 6 < 8$, but $4! = 24 > 16$. From there the inductive step keeps it going, since each step multiplies the left side by $k + 1 \\ge 5$ and the right side only by $2$. So the theorem is "$n! > 2^n$ for all $n \\ge 4$", with base case $n = 4$.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'concept',
      title: 'Divisibility: $6 \\mid n^3 - n$',
      blocks: [
        {
          type: 'p',
          text: 'For divisibility claims, the inductive step usually writes the $(k+1)$ expression as "the $k$ expression plus something you can see is divisible". Recall $a \\mid b$ means $b = am$ for some integer $m$.',
        },
        {
          type: 'derivation',
          title: 'Theorem: for every integer $n \\ge 0$, $\\;6 \\mid n^3 - n$.',
          steps: [
            { tex: '\\textbf{Base } (n = 0): \\; 0^3 - 0 = 0 = 6 \\cdot 0', why: '$6 \\mid 0$, since $0$ is a multiple of every integer.' },
            { tex: '\\textbf{IH: } k^3 - k = 6m \\text{ for some integer } m', why: 'Assume $P(k)$ for an arbitrary $k \\ge 0$ and unpack "divides".' },
            { tex: '(k+1)^3 - (k+1) = k^3 + 3k^2 + 3k + 1 - k - 1', why: 'Expand the cube: $(k+1)^3 = k^3 + 3k^2 + 3k + 1$.' },
            { tex: '= (k^3 - k) + 3k(k + 1)', why: 'Regroup to expose the IH expression; the leftover is $3k^2 + 3k = 3k(k+1)$.' },
            { tex: '= 6m + 3 \\cdot 2j = 6(m + j)', why: '$k(k+1)$ is a product of consecutive integers, hence even (last lesson): $k(k+1) = 2j$.' },
          ],
          result: 'So $6 \\mid (k+1)^3 - (k+1)$, and by induction $6 \\mid n^3 - n$ for all $n \\ge 0$. $\\blacksquare$ (Check: $5^3 - 5 = 120 = 6 \\cdot 20$.)',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Proofs can use earlier theorems',
          text: 'The step needed "$k(k+1)$ is even", proved by cases in the last lesson. Real proofs are built from earlier results like functions calling library code. You can also see $n^3 - n = (n-1)n(n+1)$, three consecutive integers, which gives a direct proof as well.',
        },
      ],
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'order',
      prompt: 'Put the lines of an induction proof that $3 \\mid 4^n - 1$ for all $n \\ge 0$ in order.',
      lines: [
        'Base case: $4^0 - 1 = 0 = 3 \\cdot 0$, so $3 \\mid 4^0 - 1$.',
        'Inductive hypothesis: for some $k \\ge 0$, $4^k - 1 = 3m$ with $m \\in \\mathbb{Z}$.',
        'Then $4^{k+1} - 1 = 4 \\cdot 4^k - 1 = 4(3m + 1) - 1$.',
        'So $4^{k+1} - 1 = 12m + 3 = 3(4m + 1)$.',
        'Hence $3 \\mid 4^{k+1} - 1$, and by induction $3 \\mid 4^n - 1$ for all $n \\ge 0$.',
      ],
      distractors: ['Assume $3 \\mid 4^n - 1$ for every $n \\ge 0$.'],
      explanation: 'Base case, hypothesis, then the step: rewrite $4^{k+1}$ as $4 \\cdot 4^k$, replace $4^k$ by $3m + 1$ from the hypothesis, simplify to $3(4m + 1)$, conclude. The distractor assumes the whole theorem, which is circular.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'Induction in code: loop invariants and recursion',
      blocks: [
        {
          type: 'p',
          text: 'Every time you trust a loop or a recursive function, you are doing induction, usually without saying so. Making it explicit is how you write code that is correct on the first try.',
        },
        {
          type: 'definition',
          term: 'Loop invariant',
          text: 'A [[dm-loop-invariant|loop invariant]] is a statement about the loop variables that is true before the first iteration (**initialization** = base case) and stays true after each iteration if it was true before (**maintenance** = inductive step). When the loop exits, the invariant plus the exit condition gives the result (**termination**).',
        },
        {
          type: 'code',
          title: 'induction.cpp',
          runnable: true,
          code: `#include <cassert>
#include <cstdio>
#include <initializer_list>

// Recursive sum 1 + 2 + ... + n. Correct by induction on n.
long long sumTo(int n) {
    if (n == 0) return 0;              // base case
    return sumTo(n - 1) + n;           // trust the smaller call (inductive hypothesis)
}

// Iterative sum, checked against its loop invariant.
long long sumLoop(int n) {
    long long s = 0;
    int i = 1;
    while (i <= n) {
        assert(s == (long long)(i - 1) * i / 2);   // invariant: s = 1 + ... + (i - 1)
        s += i;
        ++i;
    }
    assert(s == (long long)n * (n + 1) / 2);       // invariant at exit, where i = n + 1
    return s;
}

int main() {
    for (int n : {0, 1, 5, 100, 1000})
        std::printf("n = %4d  recursive = %6lld  loop = %6lld  n(n+1)/2 = %6lld\\n",
                    n, sumTo(n), sumLoop(n), (long long)n * (n + 1) / 2);

    unsigned total = 0;
    for (int k = 0; k < 8; ++k) total += 1u << k;  // 1 + 2 + 4 + ... + 128
    std::printf("2^0 + ... + 2^7 = %u = 2^8 - 1 = %u\\n", total, (1u << 8) - 1);
}`,
          output: `n =    0  recursive =      0  loop =      0  n(n+1)/2 =      0
n =    1  recursive =      1  loop =      1  n(n+1)/2 =      1
n =    5  recursive =     15  loop =     15  n(n+1)/2 =     15
n =  100  recursive =   5050  loop =   5050  n(n+1)/2 =   5050
n = 1000  recursive = 500500  loop = 500500  n(n+1)/2 = 500500
2^0 + ... + 2^7 = 255 = 2^8 - 1 = 255`,
          annotations: [
            { lines: 7, text: 'Base case: `sumTo(0)` returns $0$, the empty sum. Correct.' },
            { lines: 8, text: 'Inductive step: **if** `sumTo(n - 1)` is correct, adding `n` makes `sumTo(n)` correct. That is the whole correctness proof of a recursive function.' },
            { lines: '13-14', text: 'Initialization: with $i = 1$, the invariant says $s = 0$, the empty sum. True.' },
            { lines: '16-18', text: 'Maintenance: if $s = 1 + \\dots + (i-1)$, then after `s += i; ++i;` it equals $1 + \\dots + i$ with the new $i$ one larger, so the invariant holds again.' },
            { lines: 20, text: 'Termination: the loop exits with $i = n + 1$, so the invariant becomes $s = 1 + \\dots + n$.' },
            { lines: 30, text: 'The geometric sum with $r = 2$: eight one-bits make $2^8 - 1 = 255$.' },
          ],
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Trust the recursive call',
          text: 'Beginners trace recursion all the way down and get lost. Induction says you do not have to: check the base case, then assume the recursive call on a **smaller** input returns the right answer and verify that your function builds the correct result from it. The same "leap of faith" proves merge sort, tree traversals and flood fill correct. Just make sure the input really gets smaller, or the dominoes never reach the base case (infinite recursion).',
        },
      ],
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'fill',
      prompt: 'Match the parts of a loop-invariant argument to induction.',
      template: 'Showing the invariant holds before the first iteration is the ___. Showing that one iteration preserves it is the ___.',
      blanks: [{ answers: ['base case'] }, { answers: ['inductive step'] }],
      wordBank: ['base case', 'inductive step', 'termination', 'counterexample'],
      explanation: 'Initialization proves $P(0)$: the invariant is true after zero iterations (base case). Maintenance proves $P(k) \\to P(k+1)$: if it holds after $k$ iterations, it holds after $k + 1$ (inductive step). Termination is the extra piece that turns the invariant into the final answer when the loop condition fails.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'concept',
      title: 'Flawed induction: all horses are the same color',
      blocks: [
        {
          type: 'p',
          text: 'A wrong induction proof usually fails in one of two ways: the base case is false or missing, or the inductive step fails for some value of $k$ (often the smallest one). Here is a famous "proof" by George Pólya of an obviously false claim. Read it carefully before looking at the flaw.',
        },
        {
          type: 'steps',
          items: [
            { title: 'Claim', text: '$P(n)$: in any set of $n \\ge 1$ horses, all the horses have the same color.' },
            { title: 'Base case', text: 'A set with one horse: it has the same color as itself. ✓' },
            { title: 'Inductive step', text: 'Assume any $k$ horses share a color. Take $k + 1$ horses $h_1, \\dots, h_{k+1}$. Without $h_{k+1}$, the $k$ horses $h_1, \\dots, h_k$ share a color. Without $h_1$, the $k$ horses $h_2, \\dots, h_{k+1}$ share a color. The groups overlap, so all $k + 1$ share one color.' },
          ],
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Where it breaks',
          text: 'The step must work for **every** $k \\ge 1$. Try $k = 1$: the two horses $h_1, h_2$ split into the groups $\\{h_1\\}$ and $\\{h_2\\}$, which do **not** overlap. Each group is one color, but nothing links them. So $P(1) \\to P(2)$ is never proved, and the domino chain breaks at the very first link. For $k \\ge 2$ the argument is fine, but that does not help, since $P(2)$ is false.',
        },
        {
          type: 'compare',
          left: {
            title: 'Missing base case',
            tone: 'bad',
            text: '"$2n + 1$ is even for all $n \\ge 0$." Step: if $2k + 1$ is even, then $2(k+1) + 1 = (2k + 1) + 2$ is even. The step is valid, but $P(0)$ says $1$ is even, which is false. No domino is ever pushed.',
          },
          right: {
            title: 'Step that fails for small $k$',
            tone: 'bad',
            text: 'The horses: base case true, step valid for $k \\ge 2$ but false for $k = 1$. The chain breaks between the first and second domino.',
          },
        },
      ],
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'error',
      prompt: 'Here is the horses argument as numbered lines. Tap the first line that is **not justified** for every $k \\ge 1$.',
      lines: [
        'Base case: any set of $1$ horse is all one color.',
        'Assume every set of $k$ horses is all one color, for some $k \\ge 1$.',
        'Let $h_1, \\dots, h_{k+1}$ be horses. By the hypothesis, $h_1, \\dots, h_k$ share a color.',
        'By the hypothesis, $h_2, \\dots, h_{k+1}$ share a color.',
        'Some horse is in both groups, so all $k + 1$ horses share a color.',
      ],
      errorLines: [5],
      explanation: 'Lines 1 to 4 are fine for every $k \\ge 1$. Line 5 claims the groups $\\{h_1, \\dots, h_k\\}$ and $\\{h_2, \\dots, h_{k+1}\\}$ share a horse, but for $k = 1$ they are $\\{h_1\\}$ and $\\{h_2\\}$, which share nothing. The overlap $\\{h_2, \\dots, h_k\\}$ is nonempty only when $k \\ge 2$. Since the step fails at $k = 1$, $P(2)$ is never established.',
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'mcq',
      prompt: 'A "proof" that $2n + 1$ is even for all $n \\ge 0$ shows: if $2k + 1$ is even, then $2(k+1) + 1 = (2k + 1) + 2$ is even. What is wrong?',
      options: [
        { text: 'The inductive step is invalid.', why: 'The step is actually fine: an even number plus $2$ is even. The problem is elsewhere.' },
        { text: 'Nothing; the claim is true.', why: '$2n + 1$ is odd for every integer $n$, so the claim is false.' },
        { text: 'There is no base case, and the base case $n = 0$ is false ($1$ is not even).', correct: true, why: 'A valid step only transfers truth. With no true starting point, nothing is proved.' },
        { text: 'Induction cannot be used to prove statements about parity.', why: 'Induction proves parity facts all the time (for example, $n^2 + n$ is even). The method is fine; the base case is not.' },
      ],
      explanation: 'The inductive step proves $P(k) \\to P(k+1)$, which is vacuously true here because every $P(k)$ is false. Implications chain truth, but only from a true start. Always prove the base case, even when it looks trivial.',
    },
  ],
  takeaways: [
    'Induction: prove the base case $P(b)$ and the step $P(k) \\to P(k+1)$ for arbitrary $k \\ge b$; then $P(n)$ holds for all $n \\ge b$.',
    'In the step, write $P(k+1)$, find $P(k)$ inside it, substitute the hypothesis, and finish with algebra.',
    'Key results: $\\sum_{i=1}^n i = \\frac{n(n+1)}{2}$; $\\sum_{i=0}^n r^i = \\frac{r^{n+1}-1}{r-1}$ for $r \\ne 1$; $2^n > n$; $n! > 2^n$ for $n \\ge 4$; $6 \\mid n^3 - n$.',
    'The base case is not always $0$ or $1$: start where the statement first becomes true.',
    'Loop invariants are induction on iterations (initialization, maintenance, termination); a recursive function is correct if its base case is right and it builds correctly on smaller calls.',
    'Flawed proofs skip the base case or have a step that fails for some $k$, like the horses argument at $k = 1$.',
  ],
  reading: [
    {
      title: 'Levin — Discrete Mathematics: An Open Introduction (Section 2.5, Induction)',
      url: 'https://discrete.openmathbooks.org/dmoi3.html',
      source: 'book',
      note: 'Induction proofs of sums, inequalities and divisibility, with the domino picture and many exercises.',
    },
    {
      title: 'MIT OCW 6.042J — Mathematics for Computer Science',
      url: 'https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-fall-2010/',
      source: 'other',
      note: 'The induction lectures include invariants and the correctness of algorithms, central to CS.',
    },
    {
      title: 'Wikipedia — Mathematical induction',
      url: 'https://en.wikipedia.org/wiki/Mathematical_induction',
      source: 'wikipedia',
      note: 'History, formal statement, and variants including strong and structural induction.',
    },
    {
      title: 'Wikipedia — All horses are the same color',
      url: 'https://en.wikipedia.org/wiki/All_horses_are_the_same_color',
      source: 'wikipedia',
      note: 'The full paradox and a careful explanation of why the inductive step fails.',
    },
  ],
};
