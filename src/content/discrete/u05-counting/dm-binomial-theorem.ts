import type { GraphBlock, Lesson } from '../../types';

// Row n of Pascal's triangle divided by 2^n: the fraction of subsets of an n-set that have size k.
const K = Array.from({ length: 21 }, (_, k) => k);
const rowGraph: GraphBlock = {
  type: 'graph',
  x: [-0.5, 20.5],
  y: [0, 0.55],
  xStep: 2,
  yStep: 0.1,
  height: 280,
  segments: K.map((k) => ({
    from: [k, 0] as [number, number],
    to: [k, `nCr(n, min(${k}, n))/2^n*(sign(n - ${k} + 0.5) + 1)/2`] as [number, string],
    color: 'blue' as const,
  })),
  points: K.map((k) => ({ x: k, y: `nCr(n, ${k})/2^n`, color: 'blue' as const })),
  sliders: [{ name: 'n', min: 1, max: 20, step: 1, value: 6, label: 'row $n$' }],
  readouts: [
    { label: 'largest entry $\\binom{n}{\\lfloor n/2 \\rfloor} =$', expr: 'nCr(n, floor(n/2))', digits: 0 },
    { label: 'row sum $2^n =$', expr: '2^n', digits: 0 },
  ],
  caption: 'Dot $k$ shows $\\binom{n}{k} / 2^n$, the fraction of all subsets of an $n$-element set that have exactly $k$ elements. The row is symmetric ($\\binom{n}{k} = \\binom{n}{n-k}$), peaks in the middle, and as $n$ grows it takes on a bell shape that narrows relative to $n$ — most subsets have about $n/2$ elements. You will meet this shape again as the binomial distribution.',
};

export const lesson: Lesson = {
  id: 'dm-binomial-theorem',
  title: "The Binomial Theorem and Pascal's Triangle",
  summary: "Why $\\binom{n}{k}$ appears in $(x+y)^n$, Pascal's identity and the triangle it builds, identities like $\\sum_k \\binom{n}{k} = 2^n$ and Vandermonde's, counting shortest paths on a game grid, and computing binomial coefficients in C++ without overflow.",
  minutes: 18,
  objectives: [
    'State the binomial theorem and prove it by counting, then use it to find any coefficient of $(ax + by)^n$',
    "Prove Pascal's identity combinatorially and use it to build Pascal's triangle",
    'Derive $\\sum_k \\binom{n}{k} = 2^n$, the alternating-sum identity and Vandermonde\'s identity, and apply them to counting problems',
    'Count shortest grid paths with $\\binom{m+n}{m}$, including paths forced through a point',
    'Compute $\\binom{n}{k}$ in code with the multiplicative formula or a Pascal table, and explain why the naive factorial formula fails',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'The binomial theorem, proved by counting',
      blocks: [
        {
          type: 'p',
          text: 'In College Algebra you met the [[binomial-theorem]] as a formula for expanding powers. Here is *why* it is true — a one-paragraph counting argument that also explains why [[binomial-coefficient|binomial coefficients]] carry that name.',
        },
        {
          type: 'theorem',
          name: 'The binomial theorem',
          tex: '(x + y)^n = \\sum_{k=0}^{n} \\binom{n}{k} x^{n-k} y^{k} = \\binom{n}{0}x^n + \\binom{n}{1}x^{n-1}y + \\cdots + \\binom{n}{n}y^n',
          text: 'for every integer $n \\ge 0$ and all numbers $x, y$ (indeed, for elements of any commutative ring).',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Proof: each term is a choice',
          text: 'Write $(x + y)^n = (x + y)(x + y)\\cdots(x + y)$ with $n$ factors. Multiplying out (distributing fully) produces one term for each way of **choosing $x$ or $y$ from every factor** — $2^n$ terms in all, by the product rule. A term equals $x^{n-k}y^k$ exactly when $y$ was chosen from $k$ of the factors. Choosing *which* $k$ factors supply a $y$ is choosing a $k$-subset of the $n$ factors: $\\binom{n}{k}$ ways. So after collecting like terms, the coefficient of $x^{n-k}y^k$ is $\\binom{n}{k}$. $\\blacksquare$',
        },
        {
          type: 'derivation',
          title: 'Watch it happen for $(x + y)^3$',
          steps: [
            { tex: '(x+y)(x+y)(x+y) = xxx + xxy + xyx + xyy + yxx + yxy + yyx + yyy', why: 'One term per way to pick a letter from each of the $3$ factors: $2^3 = 8$ words.' },
            { tex: '= x^3 + 3x^2y + 3xy^2 + y^3', why: 'The words with exactly one $y$ are $xxy, xyx, yxx$ — one for each choice of which factor supplies the $y$: $\\binom{3}{1} = 3$. Likewise $\\binom{3}{2} = 3$ words have two $y$s.' },
          ],
          result: 'The coefficients $1, 3, 3, 1$ are $\\binom{3}{0}, \\binom{3}{1}, \\binom{3}{2}, \\binom{3}{3}$.',
        },
        {
          type: 'derivation',
          title: 'Coefficient of $x^3$ in $(2x - 3)^5$',
          steps: [
            { tex: '(2x - 3)^5 = \\sum_{k=0}^{5}\\binom{5}{k}(2x)^{5-k}(-3)^k', why: 'Apply the theorem with "$x$" $= 2x$ and "$y$" $= -3$. Keep the sign inside $y$.' },
            { tex: '5 - k = 3 \\implies k = 2', why: 'We need the power of $x$ to be $3$.' },
            { tex: '\\binom{5}{2}(2x)^3(-3)^2 = 10 \\cdot 8x^3 \\cdot 9', why: 'The constants inside the binomial get raised to the same powers as $x$: $2^3 = 8$ and $(-3)^2 = 9$.' },
            { tex: '= 720x^3', why: 'Multiply.' },
          ],
          result: 'The coefficient of $x^3$ is $720$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'numeric',
      prompt: 'Find the coefficient of $x^2y^3$ in the expansion of $(2x - y)^5$.',
      hint: 'The term with $y^3$ has $k = 3$. Remember that the "$y$" of the theorem is $-y$ here.',
      label: 'coefficient $=$',
      answer: '-40',
      explanation: 'The general term is $\\binom{5}{k}(2x)^{5-k}(-y)^k$. For $x^2y^3$ we need $k = 3$: $\\binom{5}{3}(2x)^2(-y)^3 = 10 \\cdot 4x^2 \\cdot (-y^3) = -40x^2y^3$. The odd power of $-y$ makes the coefficient negative; forgetting the $2^2$ gives $-10$, and forgetting the sign gives $40$.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'error',
      prompt: 'A student finds the coefficient of $x^2$ in $(x + 2)^4$. Tap the first wrong line.',
      lines: [
        'The general term is $\\binom{4}{k}x^{4-k}2^k$.',
        'For $x^2$ we need $4 - k = 2$, so $k = 2$.',
        'The term is $\\binom{4}{2}x^2 \\cdot 2 = 12x^2$.',
        'So the coefficient of $x^2$ is $12$.',
      ],
      errorLines: [3],
      explanation: 'With $k = 2$ the constant factor is $2^k = 2^2 = 4$, not $2$. The term is $\\binom{4}{2}x^2 \\cdot 4 = 6 \\cdot 4\\,x^2 = 24x^2$, so the coefficient is $24$. (Check: $(x+2)^4 = x^4 + 8x^3 + 24x^2 + 32x + 16$.) The constant in a binomial is raised to the same power $k$ as the variable it rides with.',
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'concept',
      title: "Pascal's identity and Pascal's triangle",
      blocks: [
        {
          type: 'p',
          text: 'Arrange the binomial coefficients in rows, row $n$ holding $\\binom{n}{0}, \\binom{n}{1}, \\dots, \\binom{n}{n}$. Every inner entry is the sum of the two entries above it. That is not a coincidence of small numbers; it is a theorem with a two-line combinatorial proof.',
        },
        {
          type: 'figure',
          svg: '<svg viewBox="0 0 520 325" xmlns="http://www.w3.org/2000/svg"><text x="22" y="33" font-size="12" class="t-gray">n = 0</text><text x="270.0" y="33" text-anchor="middle" font-size="15">1</text><text x="22" y="69" font-size="12" class="t-gray">n = 1</text><text x="245.0" y="69" text-anchor="middle" font-size="15">1</text><text x="295.0" y="69" text-anchor="middle" font-size="15">1</text><text x="22" y="105" font-size="12" class="t-gray">n = 2</text><text x="220.0" y="105" text-anchor="middle" font-size="15">1</text><text x="270.0" y="105" text-anchor="middle" font-size="15">2</text><text x="320.0" y="105" text-anchor="middle" font-size="15">1</text><text x="22" y="141" font-size="12" class="t-gray">n = 3</text><text x="195.0" y="141" text-anchor="middle" font-size="15">1</text><text x="245.0" y="141" text-anchor="middle" font-size="15">3</text><text x="295.0" y="141" text-anchor="middle" font-size="15">3</text><text x="345.0" y="141" text-anchor="middle" font-size="15">1</text><text x="22" y="177" font-size="12" class="t-gray">n = 4</text><text x="170.0" y="177" text-anchor="middle" font-size="15">1</text><text x="220.0" y="177" text-anchor="middle" font-size="15">4</text><text x="270.0" y="177" text-anchor="middle" font-size="15">6</text><text x="320.0" y="177" text-anchor="middle" font-size="15">4</text><text x="370.0" y="177" text-anchor="middle" font-size="15">1</text><text x="22" y="213" font-size="12" class="t-gray">n = 5</text><text x="145.0" y="213" text-anchor="middle" font-size="15">1</text><text x="195.0" y="213" text-anchor="middle" font-size="15">5</text><circle cx="245.0" cy="208" r="15" class="f-blue s-blue" fill-opacity="0.15" stroke-width="1.5"/><text x="245.0" y="213" text-anchor="middle" font-size="15" class="t-blue">10</text><circle cx="295.0" cy="208" r="15" class="f-blue s-blue" fill-opacity="0.15" stroke-width="1.5"/><text x="295.0" y="213" text-anchor="middle" font-size="15" class="t-blue">10</text><text x="345.0" y="213" text-anchor="middle" font-size="15">5</text><text x="395.0" y="213" text-anchor="middle" font-size="15">1</text><text x="22" y="249" font-size="12" class="t-gray">n = 6</text><text x="120.0" y="249" text-anchor="middle" font-size="15">1</text><text x="170.0" y="249" text-anchor="middle" font-size="15">6</text><text x="220.0" y="249" text-anchor="middle" font-size="15">15</text><circle cx="270.0" cy="244" r="15" class="f-red s-red" fill-opacity="0.15" stroke-width="1.5"/><text x="270.0" y="249" text-anchor="middle" font-size="15" class="t-red">20</text><text x="320.0" y="249" text-anchor="middle" font-size="15">15</text><text x="370.0" y="249" text-anchor="middle" font-size="15">6</text><text x="420.0" y="249" text-anchor="middle" font-size="15">1</text><text x="22" y="285" font-size="12" class="t-gray">n = 7</text><text x="95.0" y="285" text-anchor="middle" font-size="15">1</text><text x="145.0" y="285" text-anchor="middle" font-size="15">7</text><text x="195.0" y="285" text-anchor="middle" font-size="15">21</text><text x="245.0" y="285" text-anchor="middle" font-size="15">35</text><text x="295.0" y="285" text-anchor="middle" font-size="15">35</text><text x="345.0" y="285" text-anchor="middle" font-size="15">21</text><text x="395.0" y="285" text-anchor="middle" font-size="15">7</text><text x="445.0" y="285" text-anchor="middle" font-size="15">1</text><line x1="254.7" y1="222.0" x2="260.3" y2="230.0" class="s-red" stroke-width="1.8"/><line x1="285.3" y1="222.0" x2="279.7" y2="230.0" class="s-red" stroke-width="1.8"/><text x="430" y="186" font-size="13" class="t-red">10 + 10 = 20</text><text x="500" y="318" text-anchor="end" font-size="12" class="t-gray">entry k of row n is C(n, k)</text></svg>',
          alt: "Pascal's triangle, rows 0 to 7. In row 5 the two middle entries, 10 and 10, are circled in blue, with red lines down to the circled 20 in row 6, annotated 10 + 10 = 20.",
          caption: '[[pascals-triangle|Pascal\'s triangle]]. The highlighted entries show $\\binom{5}{2} + \\binom{5}{3} = \\binom{6}{3}$. The edges are $1$ because $\\binom{n}{0} = \\binom{n}{n} = 1$; the symmetry is $\\binom{n}{k} = \\binom{n}{n-k}$.',
        },
        {
          type: 'theorem',
          name: "Pascal's identity",
          tex: '\\binom{n+1}{k} = \\binom{n}{k-1} + \\binom{n}{k}, \\qquad 1 \\le k \\le n',
        },
        {
          type: 'derivation',
          title: 'Combinatorial proof',
          steps: [
            { tex: 'S = \\{\\, k\\text{-element subsets of a set } T \\text{ with } |T| = n+1 \\,\\}, \\quad |S| = \\binom{n+1}{k}', why: 'The set we will count in a second way.' },
            { tex: '\\text{fix one element } a \\in T', why: 'Say $a$ is *you*, and the subsets are squads of $k$ chosen from $n + 1$ players. Every squad either includes you or does not — two disjoint cases.' },
            { tex: '\\text{squads containing } a: \\ \\binom{n}{k-1}', why: 'You are in; choose your $k - 1$ squadmates from the other $n$ players.' },
            { tex: '\\text{squads not containing } a: \\ \\binom{n}{k}', why: 'You are out; all $k$ members come from the other $n$ players.' },
            { tex: '\\binom{n+1}{k} = \\binom{n}{k-1} + \\binom{n}{k}', why: 'Sum rule over the two disjoint cases. $\\blacksquare$' },
          ],
          result: 'The "fix one element and split into cases" move is the most useful idea in combinatorial proofs.',
        },
        {
          type: 'deepdive',
          title: 'The algebraic proof, for comparison',
          blocks: [
            {
              type: 'math',
              tex: '\\binom{n}{k-1} + \\binom{n}{k} = \\frac{n!}{(k-1)!\\,(n-k+1)!} + \\frac{n!}{k!\\,(n-k)!} = \\frac{n!\\,k + n!\\,(n-k+1)}{k!\\,(n-k+1)!} = \\frac{(n+1)!}{k!\\,(n+1-k)!}',
              caption: 'Common denominator $k!\\,(n-k+1)!$, then $n!\\,(k + n - k + 1) = (n+1)!$. Correct — but it explains nothing about *why*.',
            },
          ],
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Pascal\'s identity is a dynamic-programming recurrence',
          text: 'Filling the triangle row by row computes every $\\binom{n}{k}$ using only additions — no multiplication, no division, no huge factorials. That is the standard way to precompute binomial coefficients in programs, and later in this lesson you will see it applied on a game grid.',
        },
      ],
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'fill',
      prompt: "Use Pascal's identity to compute $\\binom{7}{3}$ from row $6$ ($1, 6, 15, 20, 15, 6, 1$).",
      template: '$\\binom{7}{3} = \\binom{6}{\\,?\\,} + \\binom{6}{3}$ where $? =$ ___ , so $\\binom{7}{3} =$ ___ $+ 20 =$ ___',
      blanks: [{ answers: ['2'] }, { answers: ['15'] }, { answers: ['35'] }],
      wordBank: ['2', '3', '4', '6', '15', '20', '35', '41'],
      explanation: "Pascal's identity with $n + 1 = 7$, $k = 3$ gives $\\binom{7}{3} = \\binom{6}{2} + \\binom{6}{3} = 15 + 20 = 35$: the two entries *above* sit at positions $k - 1 = 2$ and $k = 3$ of row $6$. Check: $\\frac{7 \\cdot 6 \\cdot 5}{3!} = 35$.",
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'order',
      prompt: "Arrange the combinatorial proof of Pascal's identity $\\binom{n+1}{k} = \\binom{n}{k-1} + \\binom{n}{k}$.",
      lines: [
        'Count the $k$-element subsets of a set $T$ of size $n + 1$; there are $\\binom{n+1}{k}$ of them.',
        'Fix one particular element $a \\in T$; each subset either contains $a$ or does not.',
        'Subsets containing $a$: choose the other $k - 1$ elements from the remaining $n$, giving $\\binom{n}{k-1}$.',
        'Subsets not containing $a$: choose all $k$ elements from the remaining $n$, giving $\\binom{n}{k}$.',
        'The two cases are disjoint and cover every subset, so by the sum rule $\\binom{n+1}{k} = \\binom{n}{k-1} + \\binom{n}{k}$. $\\blacksquare$',
      ],
      explanation: 'Set to count → split into cases by a fixed element → count each case → combine with the sum rule. The order of the two middle cases matches the order of the terms on the right side, $\\binom{n}{k-1}$ (contains $a$) then $\\binom{n}{k}$ (does not).',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'Identities from the theorem: row sums and Vandermonde',
      blocks: [
        {
          type: 'p',
          text: 'Plugging numbers into the binomial theorem produces identities, and each one also has a counting proof. The most important: **the entries of row $n$ add up to $2^n$**.',
        },
        {
          type: 'derivation',
          title: 'Two proofs that $\\sum_{k=0}^{n}\\binom{n}{k} = 2^n$',
          steps: [
            { tex: '(1 + 1)^n = \\sum_{k=0}^{n}\\binom{n}{k}1^{n-k}1^k', why: 'Algebraic proof: set $x = y = 1$ in the binomial theorem.' },
            { tex: '2^n = \\sum_{k=0}^{n}\\binom{n}{k}', why: 'Every power of $1$ is $1$.' },
            { tex: '\\text{subsets of an } n\\text{-set} = \\sum_{k}(\\text{subsets of size } k)', why: 'Combinatorial proof: split all subsets by size (sum rule). Size $k$ contributes $\\binom{n}{k}$, while the total is $2^n$ (in or out for each element).' },
          ],
          result: '$\\binom{n}{0} + \\binom{n}{1} + \\cdots + \\binom{n}{n} = 2^n$.',
        },
        {
          type: 'p',
          text: 'Setting $x = 1$, $y = -1$ instead gives $\\sum_{k}(-1)^k\\binom{n}{k} = (1 - 1)^n = 0$ for $n \\ge 1$. Moving the negative terms across says: **an $n$-element set ($n \\ge 1$) has as many even-sized subsets as odd-sized ones** — $2^{n-1}$ each.',
        },
        rowGraph,
        {
          type: 'theorem',
          name: "Vandermonde's identity",
          tex: '\\binom{m+n}{r} = \\sum_{k=0}^{r}\\binom{m}{k}\\binom{n}{r-k}',
          text: 'Proof: choose $r$ players from $m$ humans and $n$ bots. Directly: $\\binom{m+n}{r}$. By cases on the number $k$ of humans chosen: $\\binom{m}{k}$ ways for the humans times $\\binom{n}{r-k}$ for the bots, summed over $k$ (terms with $k > m$ or $r - k > n$ are $0$).',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Splitting by "how many of this kind"',
          text: 'Vandermonde\'s proof is a pattern you will use constantly: when a selection mixes two kinds of objects, split into cases by how many of the first kind are chosen, use the product rule inside each case, and add. It is the standard way to handle "at least" and "at most" conditions.',
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'mcq',
      prompt: 'How many subsets of a $10$-element set have an **even** number of elements (counting the empty set)?',
      options: [
        { text: '$1024$', why: 'That is the number of *all* subsets, $2^{10}$. Only some have even size.' },
        { text: '$252$', why: 'That is $\\binom{10}{5}$, the number of subsets of size exactly $5$ — and $5$ is odd anyway.' },
        { text: '$512$', correct: true, why: 'The alternating-sum identity says even-sized and odd-sized subsets are equally many, so each is half of $2^{10}$.' },
        { text: '$256$', why: 'That is $2^8$. The even and odd subsets split $2^{10}$ into two equal halves, not four.' },
      ],
      explanation: 'From $\\sum_k(-1)^k\\binom{10}{k} = 0$: (even-sized count) $-$ (odd-sized count) $= 0$, and the two together make $2^{10} = 1024$. So each is $512$. Direct check: $\\binom{10}{0} + \\binom{10}{2} + \\cdots + \\binom{10}{10} = 1 + 45 + 210 + 210 + 45 + 1 = 512$. A bijective view: toggling element $1$ in or out switches parity and pairs every even subset with an odd one.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'truefalse',
      prompt: 'The identity $\\sum_{k=0}^{n}(-1)^k\\binom{n}{k} = 0$ holds for **every** integer $n \\ge 0$.',
      answer: false,
      explanation: 'It fails at $n = 0$: the sum is just $\\binom{0}{0} = 1$, and the theorem gives $(1 - 1)^0 = 0^0 = 1$. The identity is true for every $n \\ge 1$. Combinatorially: the empty set has one even-sized subset (itself) and no odd-sized ones, so the pairing argument breaks down — there is no element to toggle. Checking the smallest case is a habit worth keeping.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'numeric',
      prompt: 'A $4$-member squad is chosen from $5$ human players and $6$ bots. In how many ways can it be chosen so that it contains **at least $2$ bots**?',
      hint: 'Split into cases by the number of bots ($2$, $3$ or $4$), and use the product rule inside each case.',
      label: 'squads $=$',
      answer: '265',
      explanation: 'Cases by the number of bots $b$: $b = 2$: $\\binom{6}{2}\\binom{5}{2} = 15 \\cdot 10 = 150$. $b = 3$: $\\binom{6}{3}\\binom{5}{1} = 20 \\cdot 5 = 100$. $b = 4$: $\\binom{6}{4}\\binom{5}{0} = 15$. Total $265$. Check by complement: all squads $\\binom{11}{4} = 330$, minus those with $0$ bots ($\\binom{5}{4} = 5$) or $1$ bot ($\\binom{6}{1}\\binom{5}{3} = 60$): $330 - 65 = 265$. ✓ (Summing all five cases would give $330$: Vandermonde.)',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'Shortest paths on a grid',
      blocks: [
        {
          type: 'p',
          text: 'A game character on a tile grid moves one tile right ($R$) or up ($U$) per step. How many **shortest** routes lead from $(0, 0)$ to $(5, 3)$? Any shortest route uses exactly $5$ $R$ moves and $3$ $U$ moves, in some order — and every arrangement of those $8$ letters is a valid route.',
        },
        {
          type: 'figure',
          svg: '<svg viewBox="0 0 440 270" xmlns="http://www.w3.org/2000/svg"><line x1="60" y1="200" x2="60" y2="14" stroke="currentColor" stroke-width="1" class="s-gray"/><line x1="122" y1="200" x2="122" y2="14" stroke="currentColor" stroke-width="1" class="s-gray"/><line x1="184" y1="200" x2="184" y2="14" stroke="currentColor" stroke-width="1" class="s-gray"/><line x1="246" y1="200" x2="246" y2="14" stroke="currentColor" stroke-width="1" class="s-gray"/><line x1="308" y1="200" x2="308" y2="14" stroke="currentColor" stroke-width="1" class="s-gray"/><line x1="370" y1="200" x2="370" y2="14" stroke="currentColor" stroke-width="1" class="s-gray"/><line x1="60" y1="200" x2="370" y2="200" stroke="currentColor" stroke-width="1" class="s-gray"/><line x1="60" y1="138" x2="370" y2="138" stroke="currentColor" stroke-width="1" class="s-gray"/><line x1="60" y1="76" x2="370" y2="76" stroke="currentColor" stroke-width="1" class="s-gray"/><line x1="60" y1="14" x2="370" y2="14" stroke="currentColor" stroke-width="1" class="s-gray"/><path d="M60,200 L122,200 L184,200 L184,138 L246,138 L246,76 L308,76 L370,76 L370,14" fill="none" class="s-blue" stroke-width="4" stroke-linejoin="round" stroke-linecap="round"/><circle cx="60" cy="200" r="3.5" fill="currentColor" class="f-gray"/><circle cx="60" cy="138" r="3.5" fill="currentColor" class="f-gray"/><circle cx="60" cy="76" r="3.5" fill="currentColor" class="f-gray"/><circle cx="60" cy="14" r="3.5" fill="currentColor" class="f-gray"/><circle cx="122" cy="200" r="3.5" fill="currentColor" class="f-gray"/><circle cx="122" cy="138" r="3.5" fill="currentColor" class="f-gray"/><circle cx="122" cy="76" r="3.5" fill="currentColor" class="f-gray"/><circle cx="122" cy="14" r="3.5" fill="currentColor" class="f-gray"/><circle cx="184" cy="200" r="3.5" fill="currentColor" class="f-gray"/><circle cx="184" cy="138" r="3.5" fill="currentColor" class="f-gray"/><circle cx="184" cy="76" r="3.5" fill="currentColor" class="f-gray"/><circle cx="184" cy="14" r="3.5" fill="currentColor" class="f-gray"/><circle cx="246" cy="200" r="3.5" fill="currentColor" class="f-gray"/><circle cx="246" cy="138" r="3.5" fill="currentColor" class="f-gray"/><circle cx="246" cy="76" r="3.5" fill="currentColor" class="f-gray"/><circle cx="246" cy="14" r="3.5" fill="currentColor" class="f-gray"/><circle cx="308" cy="200" r="3.5" fill="currentColor" class="f-gray"/><circle cx="308" cy="138" r="3.5" fill="currentColor" class="f-gray"/><circle cx="308" cy="76" r="3.5" fill="currentColor" class="f-gray"/><circle cx="308" cy="14" r="3.5" fill="currentColor" class="f-gray"/><circle cx="370" cy="200" r="3.5" fill="currentColor" class="f-gray"/><circle cx="370" cy="138" r="3.5" fill="currentColor" class="f-gray"/><circle cx="370" cy="76" r="3.5" fill="currentColor" class="f-gray"/><circle cx="370" cy="14" r="3.5" fill="currentColor" class="f-gray"/><circle cx="60" cy="200" r="9" class="f-green" fill-opacity="0.9"/><text x="46" y="220" font-size="13" text-anchor="middle">start (0,0)</text><circle cx="370" cy="14" r="9" class="f-red" fill-opacity="0.9"/><text x="370" y="-2" font-size="13" text-anchor="middle">goal (5,3)</text><text x="91.0" y="192.0" text-anchor="middle" font-size="13" class="t-blue">R</text><text x="153.0" y="192.0" text-anchor="middle" font-size="13" class="t-blue">R</text><text x="196.0" y="174.0" text-anchor="middle" font-size="13" class="t-blue">U</text><text x="215.0" y="130.0" text-anchor="middle" font-size="13" class="t-blue">R</text><text x="258.0" y="112.0" text-anchor="middle" font-size="13" class="t-blue">U</text><text x="277.0" y="68.0" text-anchor="middle" font-size="13" class="t-blue">R</text><text x="339.0" y="68.0" text-anchor="middle" font-size="13" class="t-blue">R</text><text x="382.0" y="50.0" text-anchor="middle" font-size="13" class="t-blue">U</text><text x="215" y="252" text-anchor="middle" font-size="15">R R U R U R R U</text></svg>',
          alt: 'A grid of points 6 wide and 4 tall. A blue path from start (0,0) at the bottom left to goal (5,3) at the top right moves right, right, up, right, up, right, right, up, with each segment labeled R or U.',
          caption: 'One shortest route, written as the word $RRURURRU$. Route ↔ word is a bijection, so counting routes means counting words.',
          maxWidth: 420,
        },
        {
          type: 'theorem',
          name: 'Lattice paths',
          tex: '\\#\\{\\text{shortest paths from } (0,0) \\text{ to } (m,n)\\} = \\binom{m+n}{m} = \\binom{m+n}{n}',
          text: 'A path is a word of length $m + n$ with $m$ $R$s and $n$ $U$s, and such a word is determined by **which** $m$ of its $m + n$ positions hold an $R$.',
        },
        {
          type: 'p',
          text: 'For the figure: $\\binom{8}{3} = 56$ routes. To count routes **through** a waypoint, multiply: a route through $(2, 1)$ is a route to $(2, 1)$ followed by a route from $(2, 1)$ onward (product rule). Routes **avoiding** a blocked tile are total minus through (complement).',
        },
        {
          type: 'figure',
          svg: '<svg viewBox="0 0 440 250" xmlns="http://www.w3.org/2000/svg"><line x1="77" y1="200" x2="105" y2="200" class="s-gray" stroke="currentColor" stroke-width="1.2"/><line x1="60" y1="183" x2="60" y2="155" class="s-gray" stroke="currentColor" stroke-width="1.2"/><line x1="77" y1="138" x2="105" y2="138" class="s-gray" stroke="currentColor" stroke-width="1.2"/><line x1="60" y1="121" x2="60" y2="93" class="s-gray" stroke="currentColor" stroke-width="1.2"/><line x1="77" y1="76" x2="105" y2="76" class="s-gray" stroke="currentColor" stroke-width="1.2"/><line x1="60" y1="59" x2="60" y2="31" class="s-gray" stroke="currentColor" stroke-width="1.2"/><line x1="77" y1="14" x2="105" y2="14" class="s-gray" stroke="currentColor" stroke-width="1.2"/><line x1="139" y1="200" x2="167" y2="200" class="s-gray" stroke="currentColor" stroke-width="1.2"/><line x1="122" y1="183" x2="122" y2="155" class="s-gray" stroke="currentColor" stroke-width="1.2"/><line x1="139" y1="138" x2="167" y2="138" class="s-gray" stroke="currentColor" stroke-width="1.2"/><line x1="122" y1="121" x2="122" y2="93" class="s-gray" stroke="currentColor" stroke-width="1.2"/><line x1="139" y1="76" x2="167" y2="76" class="s-gray" stroke="currentColor" stroke-width="1.2"/><line x1="122" y1="59" x2="122" y2="31" class="s-gray" stroke="currentColor" stroke-width="1.2"/><line x1="139" y1="14" x2="167" y2="14" class="s-gray" stroke="currentColor" stroke-width="1.2"/><line x1="201" y1="200" x2="229" y2="200" class="s-gray" stroke="currentColor" stroke-width="1.2"/><line x1="184" y1="183" x2="184" y2="155" class="s-gray" stroke="currentColor" stroke-width="1.2"/><line x1="201" y1="138" x2="229" y2="138" class="s-gray" stroke="currentColor" stroke-width="1.2"/><line x1="184" y1="121" x2="184" y2="93" class="s-gray" stroke="currentColor" stroke-width="1.2"/><line x1="201" y1="76" x2="229" y2="76" class="s-gray" stroke="currentColor" stroke-width="1.2"/><line x1="184" y1="59" x2="184" y2="31" class="s-gray" stroke="currentColor" stroke-width="1.2"/><line x1="201" y1="14" x2="229" y2="14" class="s-gray" stroke="currentColor" stroke-width="1.2"/><line x1="263" y1="200" x2="291" y2="200" class="s-gray" stroke="currentColor" stroke-width="1.2"/><line x1="246" y1="183" x2="246" y2="155" class="s-gray" stroke="currentColor" stroke-width="1.2"/><line x1="263" y1="138" x2="291" y2="138" class="s-gray" stroke="currentColor" stroke-width="1.2"/><line x1="246" y1="121" x2="246" y2="93" class="s-gray" stroke="currentColor" stroke-width="1.2"/><line x1="263" y1="76" x2="291" y2="76" class="s-gray" stroke="currentColor" stroke-width="1.2"/><line x1="246" y1="59" x2="246" y2="31" class="s-gray" stroke="currentColor" stroke-width="1.2"/><line x1="263" y1="14" x2="291" y2="14" class="s-gray" stroke="currentColor" stroke-width="1.2"/><line x1="325" y1="200" x2="353" y2="200" class="s-gray" stroke="currentColor" stroke-width="1.2"/><line x1="308" y1="183" x2="308" y2="155" class="s-gray" stroke="currentColor" stroke-width="1.2"/><line x1="325" y1="138" x2="353" y2="138" class="s-gray" stroke="currentColor" stroke-width="1.2"/><line x1="308" y1="121" x2="308" y2="93" class="s-gray" stroke="currentColor" stroke-width="1.2"/><line x1="325" y1="76" x2="353" y2="76" class="s-gray" stroke="currentColor" stroke-width="1.2"/><line x1="308" y1="59" x2="308" y2="31" class="s-gray" stroke="currentColor" stroke-width="1.2"/><line x1="325" y1="14" x2="353" y2="14" class="s-gray" stroke="currentColor" stroke-width="1.2"/><line x1="370" y1="183" x2="370" y2="155" class="s-gray" stroke="currentColor" stroke-width="1.2"/><line x1="370" y1="121" x2="370" y2="93" class="s-gray" stroke="currentColor" stroke-width="1.2"/><line x1="370" y1="59" x2="370" y2="31" class="s-gray" stroke="currentColor" stroke-width="1.2"/><circle cx="60" cy="200" r="15" fill="none" stroke="currentColor" stroke-width="1" class="s-gray"/><text x="60" y="205" text-anchor="middle" font-size="14">1</text><circle cx="60" cy="138" r="15" fill="none" stroke="currentColor" stroke-width="1" class="s-gray"/><text x="60" y="143" text-anchor="middle" font-size="14">1</text><circle cx="60" cy="76" r="15" fill="none" stroke="currentColor" stroke-width="1" class="s-gray"/><text x="60" y="81" text-anchor="middle" font-size="14">1</text><circle cx="60" cy="14" r="15" fill="none" stroke="currentColor" stroke-width="1" class="s-gray"/><text x="60" y="19" text-anchor="middle" font-size="14">1</text><circle cx="122" cy="200" r="15" fill="none" stroke="currentColor" stroke-width="1" class="s-gray"/><text x="122" y="205" text-anchor="middle" font-size="14">1</text><circle cx="122" cy="138" r="15" fill="none" stroke="currentColor" stroke-width="1" class="s-gray"/><text x="122" y="143" text-anchor="middle" font-size="14">2</text><circle cx="122" cy="76" r="15" fill="none" stroke="currentColor" stroke-width="1" class="s-gray"/><text x="122" y="81" text-anchor="middle" font-size="14">3</text><circle cx="122" cy="14" r="15" fill="none" stroke="currentColor" stroke-width="1" class="s-gray"/><text x="122" y="19" text-anchor="middle" font-size="14">4</text><circle cx="184" cy="200" r="15" fill="none" stroke="currentColor" stroke-width="1" class="s-gray"/><text x="184" y="205" text-anchor="middle" font-size="14">1</text><circle cx="184" cy="138" r="15" fill="none" stroke="currentColor" stroke-width="1" class="s-gray"/><text x="184" y="143" text-anchor="middle" font-size="14">3</text><circle cx="184" cy="76" r="16" class="f-blue s-blue" fill-opacity="0.18" stroke-width="1.6"/><text x="184" y="81" text-anchor="middle" font-size="14" class="t-blue">6</text><circle cx="184" cy="14" r="15" fill="none" stroke="currentColor" stroke-width="1" class="s-gray"/><text x="184" y="19" text-anchor="middle" font-size="14">10</text><circle cx="246" cy="200" r="15" fill="none" stroke="currentColor" stroke-width="1" class="s-gray"/><text x="246" y="205" text-anchor="middle" font-size="14">1</text><circle cx="246" cy="138" r="16" class="f-blue s-blue" fill-opacity="0.18" stroke-width="1.6"/><text x="246" y="143" text-anchor="middle" font-size="14" class="t-blue">4</text><circle cx="246" cy="76" r="16" class="f-red s-red" fill-opacity="0.18" stroke-width="1.6"/><text x="246" y="81" text-anchor="middle" font-size="14" class="t-red">10</text><circle cx="246" cy="14" r="15" fill="none" stroke="currentColor" stroke-width="1" class="s-gray"/><text x="246" y="19" text-anchor="middle" font-size="14">20</text><circle cx="308" cy="200" r="15" fill="none" stroke="currentColor" stroke-width="1" class="s-gray"/><text x="308" y="205" text-anchor="middle" font-size="14">1</text><circle cx="308" cy="138" r="15" fill="none" stroke="currentColor" stroke-width="1" class="s-gray"/><text x="308" y="143" text-anchor="middle" font-size="14">5</text><circle cx="308" cy="76" r="15" fill="none" stroke="currentColor" stroke-width="1" class="s-gray"/><text x="308" y="81" text-anchor="middle" font-size="14">15</text><circle cx="308" cy="14" r="15" fill="none" stroke="currentColor" stroke-width="1" class="s-gray"/><text x="308" y="19" text-anchor="middle" font-size="14">35</text><circle cx="370" cy="200" r="15" fill="none" stroke="currentColor" stroke-width="1" class="s-gray"/><text x="370" y="205" text-anchor="middle" font-size="14">1</text><circle cx="370" cy="138" r="15" fill="none" stroke="currentColor" stroke-width="1" class="s-gray"/><text x="370" y="143" text-anchor="middle" font-size="14">6</text><circle cx="370" cy="76" r="15" fill="none" stroke="currentColor" stroke-width="1" class="s-gray"/><text x="370" y="81" text-anchor="middle" font-size="14">21</text><circle cx="370" cy="14" r="15" fill="none" stroke="currentColor" stroke-width="1" class="s-gray"/><text x="370" y="19" text-anchor="middle" font-size="14">56</text><line x1="202.0" y1="76.0" x2="227.0" y2="76.0" class="s-red" stroke-width="2"/><path d="M228.0,76.0 L220.0,81.0 L220.0,71.0 Z" class="f-red"/><line x1="246.0" y1="120.0" x2="246.0" y2="95.0" class="s-red" stroke-width="2"/><path d="M246.0,94.0 L251.0,102.0 L241.0,102.0 Z" class="f-red"/><text x="215" y="238" text-anchor="middle" font-size="13">paths to a point = paths to its left neighbor + paths to the one below</text></svg>',
          alt: 'The same grid with a number at each point: the bottom row and left column are all 1; other entries include 2, 3, 6, 10, 20 and 56 at the top right. The 10 at (3,2) is red with arrows from the 6 at its left and the 4 below it.',
          caption: 'Label each point with its number of shortest routes from $(0,0)$. A route to a point arrives either from the left or from below, so each label is the sum of those two neighbours — Pascal\'s identity, rotated $45^\\circ$. The top right reads $56 = \\binom{8}{3}$.',
          maxWidth: 420,
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'From counting to pathfinding',
          text: 'The "sum of the left and lower neighbour" table is a dynamic-programming fill, and it keeps working when you mark some tiles as walls (set their count to $0$) — where no closed formula exists. Counting routes this way is the cousin of the shortest-path algorithms (BFS, Dijkstra, A*) you will build in the graphs unit; on an open grid with only right/up moves, they all agree that there are $\\binom{m+n}{m}$ ties for "shortest".',
        },
      ],
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'numeric',
      prompt: 'Moving only right or up, how many shortest routes go from $(0, 0)$ to $(5, 3)$ **passing through** the waypoint $(2, 1)$?',
      hint: 'Routes to $(2, 1)$, times routes from $(2, 1)$ to $(5, 3)$.',
      label: 'routes $=$',
      answer: '30',
      explanation: 'To reach $(2, 1)$: $2$ $R$s and $1$ $U$, so $\\binom{3}{1} = 3$ routes. From $(2, 1)$ to $(5, 3)$: $3$ $R$s and $2$ $U$s, so $\\binom{5}{2} = 10$ routes. Any first leg can be followed by any second leg: $3 \\cdot 10 = 30$. (A brute-force check over all $56$ routes agrees.) The routes avoiding $(2, 1)$ number $56 - 30 = 26$.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'concept',
      title: 'Binomial coefficients in code without overflow',
      blocks: [
        {
          type: 'p',
          text: 'The textbook formula $\\binom{n}{k} = \\frac{n!}{k!(n-k)!}$ is a trap in code. $21!$ already exceeds $2^{64}$, so `factorial(25)` silently wraps around and the "answer" is garbage — even though $\\binom{25}{12} = 5{,}200{,}300$ is small. Two better methods:',
        },
        {
          type: 'derivation',
          title: 'The multiplicative formula, for $\\binom{8}{3}$',
          steps: [
            { tex: 'r_0 = 1', why: 'Start with $\\binom{5}{0} = 1$. In general we walk $r_i = \\binom{n-k+i}{i}$ from $i = 0$ up to $i = k$.' },
            { tex: 'r_1 = r_0 \\cdot \\tfrac{6}{1} = 6', why: 'Multiply by $n - k + i = 6$, then divide by $i = 1$. Now $r_1 = \\binom{6}{1}$.' },
            { tex: 'r_2 = r_1 \\cdot \\tfrac{7}{2} = \\tfrac{42}{2} = 21', why: 'Multiply **first** ($6 \\cdot 7 = 42$), then divide by $2$. $r_2 = \\binom{7}{2} = 21$, an integer, so the division is exact.' },
            { tex: 'r_3 = r_2 \\cdot \\tfrac{8}{3} = \\tfrac{168}{3} = 56', why: '$r_3 = \\binom{8}{3} = 56$. Each step uses $\\binom{m+1}{i+1} = \\binom{m}{i}\\cdot\\frac{m+1}{i+1}$.' },
          ],
          result: 'Only $k$ steps, all intermediate values small, and every division exact. Use $k \\to \\min(k, n-k)$ first to take fewer steps.',
        },
        {
          type: 'code',
          title: 'binomial.cpp',
          runnable: true,
          code: `#include <cstdint>
#include <cstdio>
#include <vector>

using u64 = std::uint64_t;

// Naive: n! / (k! (n-k)!) -- the factorials overflow for n > 20.
u64 factorial(int n) {
    u64 f = 1;
    for (int i = 2; i <= n; ++i) f *= i;   // silently wraps around mod 2^64
    return f;
}
u64 binomNaive(int n, int k) { return factorial(n) / (factorial(k) * factorial(n - k)); }

// Multiplicative: after step i, r == C(n - k + i, i), always an integer.
u64 binom(int n, int k) {
    if (k < 0 || k > n) return 0;
    if (k > n - k) k = n - k;              // C(n,k) = C(n,n-k): fewer steps
    u64 r = 1;
    for (int i = 1; i <= k; ++i)
        r = r * (n - k + i) / i;           // multiply first, then divide exactly
    return r;
}

// Pascal's identity, row by row, everything reduced mod p.
u64 binomMod(int n, int k, u64 p) {
    std::vector<u64> row(k + 1, 0);
    row[0] = 1;
    for (int m = 1; m <= n; ++m)
        for (int j = (m < k ? m : k); j >= 1; --j)  // right to left: reuse one row
            row[j] = (row[j] + row[j - 1]) % p;
    return row[k];
}

int main() {
    std::printf("naive  C(25,12) = %llu\\n", (unsigned long long)binomNaive(25, 12));
    std::printf("binom  C(25,12) = %llu\\n", (unsigned long long)binom(25, 12));
    std::printf("binom  C(52,5)  = %llu\\n", (unsigned long long)binom(52, 5));
    std::printf("binom  C(60,30) = %llu\\n", (unsigned long long)binom(60, 30));
    std::printf("C(1000,500) mod 1000000007 = %llu\\n",
                (unsigned long long)binomMod(1000, 500, 1000000007ULL));
}`,
          output: `naive  C(25,12) = 2
binom  C(25,12) = 5200300
binom  C(52,5)  = 2598960
binom  C(60,30) = 118264581564861424
C(1000,500) mod 1000000007 = 159835829`,
          annotations: [
            { lines: '8-13', text: 'Unsigned overflow wraps modulo $2^{64}$ without any error, so the naive version confidently prints $2$.' },
            { lines: '20-21', text: 'Multiplying before dividing keeps the division exact: $r \\cdot (n-k+i)$ equals $i \\cdot \\binom{n-k+i}{i}$.' },
            { lines: '26-33', text: 'Pascal\'s identity needs only additions, so reducing mod $p$ at every step is safe (modular arithmetic from the number theory unit). Iterating $j$ downward lets one array hold the current row.' },
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Even the multiplicative formula has a ceiling',
          text: '$\\binom{60}{30} \\approx 1.2 \\times 10^{17}$ fits in 64 bits, and so does every intermediate product on the way. But $\\binom{68}{34} \\approx 2.8 \\times 10^{19}$ does not fit at all. For larger values use 128-bit integers, big-integer libraries, floating point (via logarithms) when an approximation will do, or work modulo a prime as above.',
        },
      ],
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'mcq',
      prompt: 'In `r = r * (n - k + i) / i;`, why is the integer division by `i` always exact (no remainder)?',
      codeOptions: false,
      options: [
        { text: 'Because $i$ is always a factor of $n - k + i$', why: 'Not true: in the $\\binom{8}{3}$ example, at $i = 2$ we have $n - k + i = 7$, which $2$ does not divide. Divisibility comes from the product, not from either factor alone.' },
        { text: 'Because after the multiplication, the value is $i \\cdot \\binom{n-k+i}{i}$, a multiple of $i$', correct: true, why: 'Before the step $r = \\binom{n-k+i-1}{i-1}$, and $\\binom{m}{i-1}\\cdot(m+1) = i\\binom{m+1}{i}$ with $m = n - k + i - 1$. So the product is exactly $i$ times an integer.' },
        { text: 'Because C++ rounds integer division correctly', why: 'C++ integer division *truncates* toward zero. If the division were not exact, truncation would introduce an error, and the result would be wrong. It works only because the division is exact.' },
        { text: 'It is not always exact; the code relies on the errors cancelling out', why: 'There are no errors to cancel. Each intermediate value is exactly the integer $\\binom{n-k+i}{i}$.' },
      ],
      explanation: 'The loop maintains the invariant $r = \\binom{n-k+i}{i}$ after step $i$. Multiplying $\\binom{m}{i-1}$ by $m + 1$ gives $i\\binom{m+1}{i}$ (the committee–chair identity in disguise), which is divisible by $i$. That is also why the order matters: `r / i * (n - k + i)` would divide too early and truncate.',
    },
  ],
  takeaways: [
    'Binomial theorem: $(x+y)^n = \\sum_k \\binom{n}{k}x^{n-k}y^k$, because the coefficient of $x^{n-k}y^k$ counts the ways to pick which $k$ of the $n$ factors supply $y$.',
    "Pascal's identity $\\binom{n+1}{k} = \\binom{n}{k-1} + \\binom{n}{k}$: fix one element; each subset contains it or not.",
    'Row sums: $\\sum_k\\binom{n}{k} = 2^n$; alternating sums are $0$ for $n \\ge 1$ (as many even subsets as odd). Vandermonde: $\\binom{m+n}{r} = \\sum_k\\binom{m}{k}\\binom{n}{r-k}$.',
    'Shortest right/up grid paths from $(0,0)$ to $(m,n)$: $\\binom{m+n}{m}$. Through a waypoint: multiply the two legs.',
    'In code, never compute $n!$; use the multiplicative loop (multiply, then divide exactly) or a Pascal table (additions only, safe mod $p$).',
  ],
  reading: [
    {
      title: 'Levin — Discrete Mathematics: An Open Introduction (Sections 1.2, 1.4)',
      url: 'https://discrete.openmathbooks.org/dmoi3.html',
      source: 'book',
      note: 'Binomial coefficients introduced through bit strings, lattice paths and subsets — the same three viewpoints as this lesson.',
    },
    {
      title: "Wikipedia — Pascal's triangle",
      url: "https://en.wikipedia.org/wiki/Pascal%27s_triangle",
      source: 'wikipedia',
      note: 'Many more patterns hidden in the triangle, including the hockey-stick identity and Fibonacci diagonals.',
    },
    {
      title: "Wikipedia — Vandermonde's identity",
      url: "https://en.wikipedia.org/wiki/Vandermonde%27s_identity",
      source: 'wikipedia',
      note: 'Algebraic and combinatorial proofs, and its connection to the hypergeometric distribution in probability.',
    },
  ],
};
