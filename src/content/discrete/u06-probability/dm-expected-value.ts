import type { Lesson } from '../../types';

// Distribution of the sum of two fair dice: P(X = s) = (6 - |s - 7|)/36.
const diceSum = Array.from({ length: 11 }, (_, i) => i + 2);

export const lesson: Lesson = {
  id: 'dm-expected-value',
  title: 'Random Variables, Expected Value and Variance',
  summary: 'Random variables and their distributions; expected value and the power of linearity (fixed points, coupon collector); variance and standard deviation; the geometric distribution for rare drops; and game design with expectation: loot tables, gacha pity, crit damage, and why naive shuffles are biased while Fisher–Yates is fair.',
  minutes: 23,
  objectives: [
    'Define a random variable and its distribution, and compute expected values from a table or from outcomes',
    'Use linearity of expectation with indicator variables to find expectations without computing distributions (fixed points, matching pairs, coupon collector)',
    'Compute variance and standard deviation and explain what they say that the mean does not',
    'Use the geometric distribution to reason about "expected tries until a rare drop", and avoid the gambler\'s fallacy',
    'Apply expectation to loot tables, pity systems and critical hits, and prove that Fisher–Yates produces uniformly random shuffles while the naive shuffle does not',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Random variables and their distributions',
      blocks: [
        {
          type: 'p',
          text: 'So far we have asked "how likely is this event?" Often the outcome comes with a **number** attached — the sum of two dice, the gold a monster drops, the number of kills until a drop, the damage of a swing — and we want to reason about that number.',
        },
        {
          type: 'definition',
          term: 'Random variable',
          text: 'A [[dm-random-variable|random variable]] is a [[function]] $X : S \\to \\mathbb{R}$ that assigns a number to each outcome of the sample space. Its **distribution** lists the probabilities $P(X = x)$, where "$X = x$" is the event $\\{s \\in S : X(s) = x\\}$.',
        },
        {
          type: 'p',
          text: 'Despite the name, a random variable is neither random nor a variable: it is a fixed function. The randomness lives in which outcome $s$ occurs. For two dice, $X(a, b) = a + b$ maps the $36$ outcomes to the values $2, \\dots, 12$, and counting the outcomes in each event gives the distribution $P(X = s) = \\frac{6 - |s - 7|}{36}$.',
        },
        {
          type: 'graph',
          x: [1, 13],
          y: [0, 0.2],
          xStep: 1,
          yStep: 0.05,
          height: 230,
          segments: diceSum.map((s) => ({ from: [s, 0] as [number, number], to: [s, (6 - Math.abs(s - 7)) / 36] as [number, number], color: 'blue' as const })),
          points: diceSum.map((s) => ({ x: s, y: (6 - Math.abs(s - 7)) / 36, color: 'blue' as const })),
          vlines: [{ x: 7, label: 'mean 7', color: 'orange' }],
          caption: 'The distribution of the sum of two dice: $1/36$ at the ends rising to $6/36$ at $7$. The heights add to $1$.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Random variables in a game',
          text: 'Every number your game computes from random rolls is a random variable on the sample space of RNG outputs: the damage of a hit, the gold from a chest, the turn on which a boss enrages. Thinking of them as functions of the underlying outcome is what lets you combine them — add damage over a combo, multiply by a crit flag — and reason about the results exactly.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'numeric',
      prompt: 'Two fair dice are rolled, and $X$ is the **larger** of the two values (the maximum). What is $P(X = 4)$? Exact fraction.',
      hint: 'Count the pairs $(a, b)$ with $\\max(a, b) = 4$: both at most $4$, but not both at most $3$.',
      label: '$P(X = 4) =$',
      answer: '7/36',
      explanation: 'Pairs with both values $\\le 4$: $4^2 = 16$. Pairs with both $\\le 3$: $3^2 = 9$. The maximum is exactly $4$ for $16 - 9 = 7$ pairs: $(4,1), (4,2), (4,3), (4,4), (1,4), (2,4), (3,4)$. So $P(X = 4) = 7/36$. The "at most $k$ minus at most $k - 1$" trick works for any maximum.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Expected value: the long-run average',
      blocks: [
        {
          type: 'definition',
          term: 'Expected value',
          text: 'The [[dm-expected-value|expected value]] (mean) of a random variable $X$ is $$E[X] = \\sum_{x} x \\cdot P(X = x) = \\sum_{s \\in S} X(s)\\,p(s),$$ a weighted average of its values, weighted by their probabilities. (The two sums agree: the second just groups outcomes by their value.)',
        },
        {
          type: 'p',
          text: 'A fair die gives $E[X] = \\frac{1 + 2 + \\cdots + 6}{6} = 3.5$ — a value the die can never show. The expected value is not the most likely outcome; it is what the **average** of many independent repetitions settles toward (the *law of large numbers*). That makes it the right tool for anything that repeats: kills, pulls, hits, frames.',
        },
        {
          type: 'derivation',
          title: 'Expected gold from a loot table',
          steps: [
            { tex: '\\begin{array}{c|cccc} x & 10 & 50 & 200 & 1000 \\\\ \\hline P(X = x) & 0.60 & 0.30 & 0.09 & 0.01 \\end{array}', why: 'The drop table is the distribution of $X$ = gold per kill. Check: the probabilities add to $1$.' },
            { tex: 'E[X] = 10(0.60) + 50(0.30) + 200(0.09) + 1000(0.01)', why: 'Definition: value times probability, summed.' },
            { tex: '= 6 + 15 + 18 + 10 = 49', why: 'Notice the $1\\%$ jackpot contributes as much as the $60\\%$ common drop: rare but large values matter.' },
          ],
          result: 'Players earn $49$ gold per kill on average, so $1000$ kills yield about $49{,}000$ gold — the number an economy designer actually cares about.',
        },
        {
          type: 'graph',
          x: [-30, 1080],
          y: [0, 0.75],
          xStep: 100,
          yStep: 1,
          height: 250,
          segments: [
            { from: [10, 0], to: [10, '0.61 - r'], color: 'gray' },
            { from: [50, 0], to: [50, 0.3], color: 'blue' },
            { from: [200, 0], to: [200, 0.09], color: 'purple' },
            { from: [1000, 0], to: [1000, 'r'], color: 'orange' },
          ],
          points: [
            { x: 10, y: '0.61 - r', color: 'gray', label: '10 g' },
            { x: 50, y: 0.3, color: 'blue', label: '50 g: 0.30' },
            { x: 200, y: 0.09, color: 'purple', label: '200 g: 0.09' },
            { x: 1000, y: 'r', color: 'orange', label: '1000 g' },
          ],
          vlines: [{ x: '39.1 + 990r', label: 'E[X]', color: 'red' }],
          sliders: [{ name: 'r', min: 0, max: 0.1, step: 0.005, value: 0.01, label: 'legendary drop chance $r$ (taken from the common drop)' }],
          readouts: [
            { label: '$P(10\\text{ g}) = 0.61 - r =$', expr: '0.61 - r', digits: 3 },
            { label: '$P(1000\\text{ g}) = r =$', expr: 'r', digits: 3 },
            { label: '$E[X] = 10(0.61 - r) + 15 + 18 + 1000r =$', expr: '39.1 + 990r', digits: 2 },
          ],
          caption: 'Each stem\'s height is $P(X = x)$ for one tier (gold amounts on the horizontal axis). Moving probability from the $10$-gold tier to the $1000$-gold tier shifts the mean by $990$ gold per unit of probability: going from $r = 0.01$ to $0.02$ adds $9.9$ gold per kill — a $20\\%$ inflation of the economy from a "tiny" $1\\%$ change. The mean is the balance point of the stems.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'mcq',
      prompt: 'A mystery chest costs $30$ gold. It contains $100$ gold with probability $0.2$, and otherwise $10$ gold. What is the expected **profit** of buying one chest?',
      options: [
        { text: '$+28$ gold', why: 'That is $E[\\text{contents}] = 0.2(100) + 0.8(10) = 28$, but you paid $30$ for the chest. Profit subtracts the cost.' },
        { text: '$+25$ gold', why: 'That averages the two outcomes as if they were equally likely, $\\frac{100 + 10}{2} - 30 = 25$. The $100$-gold outcome has probability $0.2$, not $0.5$.' },
        { text: '$-2$ gold', correct: true, why: '$E[\\text{profit}] = 0.2(100 - 30) + 0.8(10 - 30) = 14 - 16 = -2$. Equivalently $28 - 30$.' },
        { text: '$-20$ gold', why: 'That is the loss in the *bad* case only ($10 - 30$). The expectation weights both cases by their probabilities.' },
      ],
      explanation: 'Profit $= $ contents $- 30$, and $E[\\text{contents}] = 0.2 \\cdot 100 + 0.8 \\cdot 10 = 28$, so $E[\\text{profit}] = 28 - 30 = -2$. The chest is a slow gold sink: over $100$ purchases a player loses about $200$ gold, even though one purchase in five feels like a big win. (Using $E[X - c] = E[X] - c$ is a first taste of linearity.)',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Linearity of expectation: the most useful theorem in this unit',
      blocks: [
        {
          type: 'theorem',
          name: 'Linearity of expectation',
          tex: 'E[X + Y] = E[X] + E[Y], \\qquad E[aX + b] = a\\,E[X] + b',
          text: 'for **any** random variables $X, Y$ on the same sample space and constants $a, b$ — whether or not $X$ and $Y$ are independent.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Proof: it is just rearranging a sum',
          text: '$E[X + Y] = \\sum_{s}(X(s) + Y(s))\\,p(s) = \\sum_s X(s)p(s) + \\sum_s Y(s)p(s) = E[X] + E[Y]$. Nothing about independence was used — each outcome simply contributes its two values separately. The second formula follows the same way, using $\\sum_s p(s) = 1$ for the constant $b$.',
        },
        {
          type: 'p',
          text: 'Its power comes from **indicator variables**. For an event $A$, let $I_A = 1$ if $A$ occurs and $0$ otherwise; then $E[I_A] = 1 \\cdot P(A) + 0 = P(A)$. To find the expected **number** of things that happen, write the count as a sum of indicators and add their probabilities. You never need the distribution of the count.',
        },
        {
          type: 'derivation',
          title: 'Expected number of fixed points of a random permutation',
          steps: [
            { tex: 'X = I_1 + I_2 + \\cdots + I_n, \\quad I_i = \\begin{cases} 1 & \\text{guest } i \\text{ gets own hat} \\\\ 0 & \\text{otherwise} \\end{cases}', why: 'The hat-check problem from the counting unit. $X$ counts guests who get their own hat; each $I_i$ is an indicator.' },
            { tex: 'E[I_i] = P(\\text{guest } i \\text{ gets own hat}) = \\frac{(n-1)!}{n!} = \\frac{1}{n}', why: 'Fix hat $i$ for guest $i$; the other $n - 1$ hats can be in any order.' },
            { tex: 'E[X] = \\sum_{i=1}^{n} E[I_i] = n \\cdot \\frac{1}{n} = 1', why: 'Linearity — even though the $I_i$ are dependent (if $n - 1$ guests have their own hats, so does the last).' },
          ],
          result: 'On average exactly one guest gets their own hat, for every $n$ (brute force over all permutations for $n \\le 6$ agrees). Computing the full distribution of $X$ would need inclusion–exclusion; linearity needed one line.',
        },
        {
          type: 'list',
          items: [
            'Sum of two dice: $E[X_1 + X_2] = 3.5 + 3.5 = 7$.',
            'Hearts in a $5$-card hand: $5$ indicators, each with probability $\\frac{13}{52}$, so $E = \\frac{5}{4}$ — although the cards are dependent.',
            'Binomial: successes in $n$ trials are $n$ indicators with probability $p$, so $E[X] = np$ — no binomial sums needed.',
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'numeric',
      prompt: 'In a room of $30$ people (365 equally likely birthdays), what is the **expected number of pairs** of people who share a birthday? Exact fraction or decimal to $4$ places.',
      hint: 'One indicator per pair of people. How many pairs, and what is the probability a given pair matches?',
      label: '$E[\\text{matching pairs}] =$',
      answer: '87/73',
      minDecimals: 4,
      explanation: 'There are $\\binom{30}{2} = 435$ pairs; a given pair shares a birthday with probability $1/365$. By linearity, $E = 435/365 = 87/73 \\approx 1.1918$. The indicators are dependent (if $A$ matches $B$ and $B$ matches $C$, then $A$ matches $C$), but linearity does not care. An expected value above $1$ fits with $P(\\text{at least one match}) \\approx 0.71$ from the birthday problem.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'The geometric distribution: waiting for a rare drop',
      blocks: [
        {
          type: 'p',
          text: 'An item drops with probability $p$ per kill, independently. Let $X$ be the number of kills **up to and including** the first drop. Then $X = k$ means $k - 1$ failures followed by a success: $P(X = k) = (1-p)^{k-1}p$ for $k = 1, 2, 3, \\dots$ This is the [[dm-geometric-distribution|geometric distribution]].',
        },
        {
          type: 'derivation',
          title: 'Why $E[X] = 1/p$',
          steps: [
            { tex: 'E[X] = p \\cdot 1 + (1-p)\\,(1 + E[X])', why: 'Condition on the first kill. With probability $p$ it drops and $X = 1$. With probability $1 - p$ you have used one kill and face the **same** situation again (independence), so you expect $1 + E[X]$ kills in total.' },
            { tex: 'E[X] = 1 + (1-p)E[X]', why: 'Expand: $p + (1-p) + (1-p)E[X]$, and $p + (1 - p) = 1$.' },
            { tex: 'p\\,E[X] = 1 \\implies E[X] = \\frac{1}{p}', why: 'Collect the $E[X]$ terms. (This assumes $E[X]$ is finite, which the series $\\sum k(1-p)^{k-1}p$ confirms.)' },
          ],
          result: 'A $2\\%$ drop takes $50$ kills on average; a $1$-in-$1000$ drop, $1000$ kills.',
        },
        {
          type: 'graph',
          x: [0, 150],
          y: [0, 1.05],
          xStep: 25,
          yStep: 0.25,
          height: 260,
          functions: [{ expr: '1 - (1 - p)^x', color: 'purple', label: '$P(X \\le k) = 1 - (1-p)^k$', domain: [0, 150] }],
          vlines: [{ x: '1/p', label: 'E[X] = 1/p', color: 'orange' }],
          hlines: [{ y: 0.5, label: '50%', color: 'gray' }],
          sliders: [{ name: 'p', min: 0.01, max: 0.2, step: 0.005, value: 0.02, label: 'drop chance $p$' }],
          readouts: [
            { label: 'expected kills $1/p =$', expr: '1/p', digits: 1 },
            { label: 'median: $50\\%$ have it after', expr: 'ceil(ln(0.5)/ln(1 - p))', digits: 0 },
            { label: '$P(\\text{still nothing after } 1/p \\text{ kills}) \\approx$', expr: '(1 - p)^(1/p)', digits: 3 },
          ],
          caption: 'The chance of having the drop within $k$ kills. With $p = 0.02$: half of players have it by kill $35$, but at the "expected" $50$ kills about $36\\%$ still have nothing ($\\approx 1/e$ for small $p$), and some unlucky players need $150$+. Averages hide a long tail.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'The gambler\'s fallacy: the RNG has no memory',
          text: 'After $80$ dry kills at $p = 0.02$, the next kill still drops with probability $0.02$, and the expected number of **additional** kills is still $50$. The geometric distribution is *memoryless*: $P(X > m + k \\mid X > m) = P(X > k)$. Players feel they are "due"; the math says they are not. That gap between feeling and math is exactly what pity systems (below) are designed to close.',
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'truefalse',
      prompt: 'If an item drops with probability $1\\%$ per kill (independently), then a player who kills $100$ monsters is guaranteed to get at least one drop.',
      answer: false,
      explanation: 'The expected number of drops in $100$ kills is $100 \\cdot 0.01 = 1$, but expectation is an average, not a guarantee. $P(\\text{no drop in } 100) = 0.99^{100} \\approx 0.366$, so more than a third of players get nothing; $P(\\text{at least one}) \\approx 0.634$. Only a pity mechanic can give a true guarantee.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'concept',
      title: 'The coupon collector: completing a set',
      blocks: [
        {
          type: 'p',
          text: 'A gacha banner has $n$ equally likely skins, and each pull gives one uniformly at random (duplicates possible). How many pulls does it take, on average, to own **all** $n$? This is the **coupon collector\'s problem**, and linearity plus the geometric distribution solves it.',
        },
        {
          type: 'derivation',
          title: 'Expected pulls to collect all $n$ types',
          steps: [
            { tex: 'T = T_1 + T_2 + \\cdots + T_n', why: 'Split the process into phases. $T_i$ = pulls spent while you own exactly $i - 1$ distinct skins, ending when you get a new one.' },
            { tex: 'T_i \\sim \\text{Geometric}\\left(\\tfrac{n - i + 1}{n}\\right)', why: 'In phase $i$, a pull is new with probability $\\frac{n - (i-1)}{n}$, independently each pull.' },
            { tex: 'E[T] = \\sum_{i=1}^{n} \\frac{n}{n - i + 1} = n\\left(\\frac{1}{n} + \\cdots + \\frac{1}{2} + \\frac{1}{1}\\right) = n\\,H_n', why: 'Linearity, then $E[\\text{Geometric}(q)] = 1/q$. $H_n = 1 + \\frac{1}{2} + \\cdots + \\frac{1}{n}$ is the $n$-th harmonic number.' },
          ],
          result: 'For $n = 6$ (all faces of a die): $6 H_6 = 14.7$ rolls. For $10$ skins: $10 H_{10} \\approx 29.3$ pulls. Since $H_n \\approx \\ln n + 0.577$, the cost grows like $n \\ln n$.',
        },
        {
          type: 'callout',
          variant: 'analogy',
          title: 'The last one is the hardest',
          text: 'The first skin takes $1$ pull. With $n = 10$, the last missing skin alone takes $10$ pulls on average — about a third of the whole $29.3$. Collectors feel this as "I keep getting duplicates", and it is the reason many games add duplicate protection or let players trade duplicates for currency.',
        },
      ],
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'numeric',
      prompt: 'A promo has $4$ equally likely collectible cards, one per pack. What is the expected number of packs needed to collect all $4$? Exact fraction or decimal.',
      hint: '$4\\left(1 + \\frac{1}{2} + \\frac{1}{3} + \\frac{1}{4}\\right)$, or add the phases $\\frac{4}{4} + \\frac{4}{3} + \\frac{4}{2} + \\frac{4}{1}$.',
      label: '$E[T] =$',
      answer: '25/3',
      explanation: 'Phases: $1 + \\frac{4}{3} + 2 + 4 = \\frac{3 + 4 + 6 + 12}{3} = \\frac{25}{3} \\approx 8.33$ packs. A simulation of $400{,}000$ collections averages $8.32$ — close, as the $1/\\sqrt{N}$ law predicts. Half of the expected cost ($4$ packs) is spent waiting for the last card.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'Variance and standard deviation: how far from the mean?',
      blocks: [
        {
          type: 'p',
          text: 'Two loot tables can have the same mean and feel completely different: "always $49$ gold" versus "usually $10$, occasionally $1000$". The expected value cannot tell them apart. The **spread** around the mean is measured by the [[dm-variance|variance]].',
        },
        {
          type: 'definition',
          term: 'Variance and standard deviation',
          text: 'With $\\mu = E[X]$: $\\operatorname{Var}(X) = E\\left[(X - \\mu)^2\\right] = E[X^2] - \\mu^2$, and the **standard deviation** is $\\sigma = \\sqrt{\\operatorname{Var}(X)}$, measured in the same units as $X$.',
        },
        {
          type: 'derivation',
          title: 'Variance of a fair die',
          steps: [
            { tex: '\\mu = E[X] = \\tfrac{7}{2}', why: 'Computed earlier.' },
            { tex: 'E[X^2] = \\frac{1 + 4 + 9 + 16 + 25 + 36}{6} = \\frac{91}{6}', why: '$X^2$ is also a random variable; average its values.' },
            { tex: '\\operatorname{Var}(X) = \\frac{91}{6} - \\frac{49}{4} = \\frac{182 - 147}{12} = \\frac{35}{12}', why: 'The shortcut $E[X^2] - \\mu^2$, which follows from expanding $(X - \\mu)^2 = X^2 - 2\\mu X + \\mu^2$ and using linearity: $E[X^2] - 2\\mu^2 + \\mu^2$.' },
            { tex: '\\sigma = \\sqrt{35/12} \\approx 1.71', why: 'A typical roll lands about $1.7$ away from $3.5$.' },
          ],
        },
        {
          type: 'p',
          text: 'Unlike the mean, variance is **not** linear in general, but two rules cover most needs: $\\operatorname{Var}(aX + b) = a^2\\operatorname{Var}(X)$, and **if $X$ and $Y$ are independent**, $\\operatorname{Var}(X + Y) = \\operatorname{Var}(X) + \\operatorname{Var}(Y)$. So a binomial count (a sum of $n$ independent indicators, each with variance $p(1-p)$) has variance $np(1-p)$, and the geometric distribution has variance $(1-p)/p^2$ — for a $5\\%$ drop, $\\sigma = \\sqrt{380} \\approx 19.5$ kills around a mean of $20$.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Variance is what players feel',
          text: 'The loot table above has mean $49$ but $\\operatorname{Var}(X) = E[X^2] - 49^2 = 14{,}410 - 2401 = 12{,}009$, so $\\sigma \\approx 110$ gold — more than twice the mean. That is why the simulation below still wobbles in the first decimal place after a million kills (the error of an average of $N$ samples is $\\sigma/\\sqrt{N}$). High variance makes a game feel exciting and streaky; low variance makes it feel fair and predictable. Designers tune both numbers, not just the mean.',
        },
      ],
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'error',
      prompt: 'A random variable $X$ equals $0$ or $2$, each with probability $\\frac{1}{2}$. Tap the first wrong line in this variance computation.',
      lines: [
        '$E[X] = 0 \\cdot \\frac{1}{2} + 2 \\cdot \\frac{1}{2} = 1$.',
        '$E[X^2] = (E[X])^2 = 1^2 = 1$.',
        '$\\operatorname{Var}(X) = E[X^2] - (E[X])^2 = 1 - 1 = 0$.',
        'So $X$ has no spread at all.',
      ],
      errorLines: [2],
      explanation: '$E[X^2]$ is the average of the **squared values**, not the square of the average: $E[X^2] = 0^2 \\cdot \\frac{1}{2} + 2^2 \\cdot \\frac{1}{2} = 2$. Then $\\operatorname{Var}(X) = 2 - 1 = 1$ and $\\sigma = 1$ — every value is exactly $1$ away from the mean. In fact $E[X^2] = (E[X])^2$ holds only when the variance is $0$, i.e. when $X$ is constant, so the conclusion "no spread" was baked into the mistake.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'concept',
      title: 'Expected value in game design: crits, loot and pity',
      blocks: [
        {
          type: 'p',
          text: 'Expected value is a designer\'s main balancing tool. Three standard calculations:',
        },
        {
          type: 'derivation',
          title: 'Expected damage per hit with critical strikes',
          steps: [
            { tex: 'D = \\begin{cases} b & \\text{probability } 1 - c \\\\ m\\,b & \\text{probability } c \\end{cases}', why: 'Base damage $b$; with crit chance $c$ the hit deals $m$ times as much.' },
            { tex: 'E[D] = (1 - c)\\,b + c\\,m\\,b = b\\,(1 + c(m - 1))', why: 'Definition of expected value, then factor. Each crit adds $(m - 1)b$ extra.' },
            { tex: 'b = 100,\\ c = 0.25,\\ m = 2: \\quad E[D] = 100(1 + 0.25) = 125', why: 'A $25\\%$ crit chance with double damage is worth a flat $+25\\%$ damage on average.' },
          ],
          result: 'This is why "+5% crit chance" and "+X% crit damage" can be compared on one scale: both change $c(m - 1)$. Damage over a whole fight is a sum of hits, so by linearity it is (number of hits) $\\times E[D]$.',
        },
        {
          type: 'heading',
          text: 'Pity systems',
        },
        {
          type: 'p',
          text: 'A gacha game gives a top-rarity character with probability $p = 0.006$ per pull, but **guarantees** one on pull $90$ if none appeared earlier ("hard pity"). Without pity, $E = 1/p \\approx 166.7$ pulls with an unbounded tail. With pity, the number of pulls $X$ is capped at $90$. A neat way to compute its mean is the **tail-sum formula** for random variables with values in $\\{1, 2, 3, \\dots\\}$:',
        },
        {
          type: 'math',
          tex: 'E[X] = \\sum_{k \\ge 1} P(X \\ge k) = \\sum_{k=1}^{90}(1-p)^{k-1} = \\frac{1 - (1-p)^{90}}{p} \\approx 69.7',
          caption: 'Why the tail sum works: $X = \\sum_{k \\ge 1} I_{X \\ge k}$ (a value $x$ is counted once for each $k = 1, \\dots, x$), then linearity. $P(X \\ge k) = (1-p)^{k-1}$ for $k \\le 90$ (the first $k - 1$ pulls failed) and $0$ beyond $90$. The sum is a [[geometric-series|geometric series]].',
        },
        {
          type: 'p',
          text: 'The pity system cuts the expected cost from about $167$ to about $70$ pulls, and since $P(\\text{reaching pull } 90) = 0.994^{89} \\approx 0.585$, **most** players are carried by the pity — so the advertised $0.6\\%$ rate badly understates the real one. Players care about the worst case; pity bounds it. That is the same lesson as the geometric graph: control the tail, not just the mean.',
        },
        {
          type: 'code',
          title: 'loot_ev.cpp',
          runnable: true,
          code: `#include <cstdio>
#include <random>
#include <vector>

struct Drop { int gold; double prob; };

std::mt19937_64 rng(7);
double uniform01() { return (rng() >> 11) * 0x1.0p-53; }   // 53 random bits in [0, 1)

// Weighted random choice: walk the table, subtracting probabilities.
int roll(const std::vector<Drop>& table) {
    double u = uniform01();
    for (const Drop& d : table) {
        if (u < d.prob) return d.gold;
        u -= d.prob;
    }
    return table.back().gold;                               // guard against rounding
}

int main() {
    const std::vector<Drop> table = {{10, 0.60}, {50, 0.30}, {200, 0.09}, {1000, 0.01}};
    double expected = 0;
    for (const Drop& d : table) expected += d.gold * d.prob;  // E[X] = sum of x * P(X = x)
    std::printf("expected gold per kill: %.2f\\n", expected);

    for (int kills : {100, 10'000, 1'000'000}) {
        long long total = 0;
        for (int k = 0; k < kills; ++k) total += roll(table);
        std::printf("average over %7d kills: %.2f\\n", kills, double(total) / kills);
    }

    // Expected damage per swing: 100 base, 25% crit chance, crits deal 2x.
    double base = 100, critChance = 0.25, critMult = 2.0;
    std::printf("expected damage per hit: %.1f\\n",
                base * ((1 - critChance) + critChance * critMult));
}`,
          output: `expected gold per kill: 49.00
average over     100 kills: 50.90
average over   10000 kills: 49.06
average over 1000000 kills: 48.83
expected damage per hit: 125.0`,
          annotations: [
            { lines: 8, text: 'Take the top $53$ bits of a 64-bit random number and scale by $2^{-53}$: a uniform double in $[0, 1)$ with every value equally spaced.' },
            { lines: '11-18', text: 'Weighted selection: the interval $[0, 1)$ is cut into pieces of length $0.60, 0.30, 0.09, 0.01$, and $u$ lands in each with exactly that probability.' },
            { lines: '26-30', text: 'Sample averages approach $E[X] = 49$, but slowly: with $\\sigma \\approx 110$, a million kills still leave an error around $\\sigma/\\sqrt{10^6} \\approx 0.11$.' },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'numeric',
      prompt: 'A rogue hits for $40$ base damage, has a $20\\%$ critical-hit chance, and crits deal $2.5\\times$ damage. What is the expected damage per hit?',
      hint: '$E[D] = b(1 + c(m - 1))$.',
      label: '$E[D] =$',
      answer: '52',
      explanation: '$E[D] = 0.8 \\cdot 40 + 0.2 \\cdot 100 = 32 + 20 = 52$, or $40(1 + 0.2 \\cdot 1.5) = 40 \\cdot 1.3 = 52$. A common slip is $40 \\cdot (1 + 0.2 \\cdot 2.5) = 60$, which adds the *whole* crit damage on top of the base instead of only the extra $1.5\\times$.',
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'concept',
      title: 'Fair shuffling: Fisher–Yates, and why the naive shuffle is biased',
      blocks: [
        {
          type: 'p',
          text: 'Shuffling a deck, a playlist or a spawn order means producing a **uniformly random permutation**: each of the $n!$ orders with probability $1/n!$. Here is the standard algorithm, the [[dm-fisher-yates|Fisher–Yates shuffle]]: for $i$ from $n - 1$ down to $1$, pick $j$ uniformly from $\\{0, \\dots, i\\}$ and swap `a[i]` with `a[j]`.',
        },
        {
          type: 'figure',
          svg: '<svg viewBox="0 0 470 305" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="20" width="38" height="36" rx="6" fill="none" stroke="currentColor" stroke-width="1.4"/><text x="59.0" y="44" text-anchor="middle" font-size="17">A</text><rect x="84" y="20" width="38" height="36" rx="6" fill="none" stroke="currentColor" stroke-width="1.4"/><text x="103.0" y="44" text-anchor="middle" font-size="17" class="t-orange">B</text><rect x="128" y="20" width="38" height="36" rx="6" fill="none" stroke="currentColor" stroke-width="1.4"/><text x="147.0" y="44" text-anchor="middle" font-size="17">C</text><rect x="172" y="20" width="38" height="36" rx="6" fill="none" stroke="currentColor" stroke-width="1.4"/><text x="191.0" y="44" text-anchor="middle" font-size="17">D</text><rect x="216" y="20" width="38" height="36" rx="6" fill="none" stroke="currentColor" stroke-width="1.4"/><text x="235.0" y="44" text-anchor="middle" font-size="17" class="t-orange">E</text><path d="M103.0 60 Q169.0 78 235.0 60" fill="none" class="s-orange" stroke-width="1.8"/><text x="274" y="44" font-size="13">i = 4: j = 1 from {0..4}</text><rect x="40" y="80" width="38" height="36" rx="6" fill="none" stroke="currentColor" stroke-width="1.4"/><text x="59.0" y="104" text-anchor="middle" font-size="17">A</text><rect x="84" y="80" width="38" height="36" rx="6" fill="none" stroke="currentColor" stroke-width="1.4"/><text x="103.0" y="104" text-anchor="middle" font-size="17">E</text><rect x="128" y="80" width="38" height="36" rx="6" fill="none" stroke="currentColor" stroke-width="1.4"/><text x="147.0" y="104" text-anchor="middle" font-size="17">C</text><rect x="172" y="80" width="38" height="36" rx="6" fill="none" stroke="currentColor" stroke-width="1.4"/><text x="191.0" y="104" text-anchor="middle" font-size="17" class="t-orange">D</text><rect x="216" y="80" width="38" height="36" rx="6" class="f-green s-green" fill-opacity="0.18" stroke-width="1.6"/><text x="235.0" y="104" text-anchor="middle" font-size="17">B</text><circle cx="191.0" cy="126" r="5" fill="none" class="s-orange" stroke-width="1.8"/><text x="274" y="104" font-size="13">i = 3: j = 3 from {0..3}  (stays)</text><rect x="40" y="140" width="38" height="36" rx="6" fill="none" stroke="currentColor" stroke-width="1.4"/><text x="59.0" y="164" text-anchor="middle" font-size="17" class="t-orange">A</text><rect x="84" y="140" width="38" height="36" rx="6" fill="none" stroke="currentColor" stroke-width="1.4"/><text x="103.0" y="164" text-anchor="middle" font-size="17">E</text><rect x="128" y="140" width="38" height="36" rx="6" fill="none" stroke="currentColor" stroke-width="1.4"/><text x="147.0" y="164" text-anchor="middle" font-size="17" class="t-orange">C</text><rect x="172" y="140" width="38" height="36" rx="6" class="f-green s-green" fill-opacity="0.18" stroke-width="1.6"/><text x="191.0" y="164" text-anchor="middle" font-size="17">D</text><rect x="216" y="140" width="38" height="36" rx="6" class="f-green s-green" fill-opacity="0.18" stroke-width="1.6"/><text x="235.0" y="164" text-anchor="middle" font-size="17">B</text><path d="M59.0 180 Q103.0 198 147.0 180" fill="none" class="s-orange" stroke-width="1.8"/><text x="274" y="164" font-size="13">i = 2: j = 0 from {0..2}</text><rect x="40" y="200" width="38" height="36" rx="6" fill="none" stroke="currentColor" stroke-width="1.4"/><text x="59.0" y="224" text-anchor="middle" font-size="17" class="t-orange">C</text><rect x="84" y="200" width="38" height="36" rx="6" fill="none" stroke="currentColor" stroke-width="1.4"/><text x="103.0" y="224" text-anchor="middle" font-size="17" class="t-orange">E</text><rect x="128" y="200" width="38" height="36" rx="6" class="f-green s-green" fill-opacity="0.18" stroke-width="1.6"/><text x="147.0" y="224" text-anchor="middle" font-size="17">A</text><rect x="172" y="200" width="38" height="36" rx="6" class="f-green s-green" fill-opacity="0.18" stroke-width="1.6"/><text x="191.0" y="224" text-anchor="middle" font-size="17">D</text><rect x="216" y="200" width="38" height="36" rx="6" class="f-green s-green" fill-opacity="0.18" stroke-width="1.6"/><text x="235.0" y="224" text-anchor="middle" font-size="17">B</text><path d="M59.0 240 Q81.0 258 103.0 240" fill="none" class="s-orange" stroke-width="1.8"/><text x="274" y="224" font-size="13">i = 1: j = 0 from {0..1}</text><rect x="40" y="260" width="38" height="36" rx="6" class="f-green s-green" fill-opacity="0.18" stroke-width="1.6"/><text x="59.0" y="284" text-anchor="middle" font-size="17">E</text><rect x="84" y="260" width="38" height="36" rx="6" class="f-green s-green" fill-opacity="0.18" stroke-width="1.6"/><text x="103.0" y="284" text-anchor="middle" font-size="17">C</text><rect x="128" y="260" width="38" height="36" rx="6" class="f-green s-green" fill-opacity="0.18" stroke-width="1.6"/><text x="147.0" y="284" text-anchor="middle" font-size="17">A</text><rect x="172" y="260" width="38" height="36" rx="6" class="f-green s-green" fill-opacity="0.18" stroke-width="1.6"/><text x="191.0" y="284" text-anchor="middle" font-size="17">D</text><rect x="216" y="260" width="38" height="36" rx="6" class="f-green s-green" fill-opacity="0.18" stroke-width="1.6"/><text x="235.0" y="284" text-anchor="middle" font-size="17">B</text><text x="274" y="284" font-size="13" class="t-green">done: E C A D B</text></svg>',
          alt: 'Five rows showing Fisher–Yates on A B C D E. Row 1: i = 4, j = 1, swap B and E. Row 2: i = 3, j = 3, D stays; B is green (done). Row 3: i = 2, j = 0, swap A and C; D and B done. Row 4: i = 1, j = 0, swap C and E. Row 5: all done: E C A D B.',
          caption: 'Each step picks a random element from the not-yet-placed part (white) and moves it into the next slot from the right, which is then final (green).',
          maxWidth: 460,
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Proof that Fisher–Yates is uniform',
          text: 'The algorithm makes $n - 1$ choices with $n, n-1, \\dots, 2$ options, so there are $n \\cdot (n-1) \\cdots 2 = n!$ equally likely choice sequences (product rule). Different sequences give **different** results: the last slot is filled by whichever element was chosen first, the next slot by the second choice among the rest, and so on, so the result determines the choices. $n!$ equally likely sequences mapped one-to-one onto the $n!$ permutations means each permutation has probability exactly $1/n!$. $\\blacksquare$',
        },
        {
          type: 'p',
          text: 'The tempting alternative — for every $i$, swap `a[i]` with `a[j]` for $j$ uniform in **all** of $\\{0, \\dots, n-1\\}$ — looks just as random. It is not. It makes $n$ choices with $n$ options each: $n^n$ equally likely paths. For a uniform result, every permutation would need exactly $n^n / n!$ paths. For $n = 3$ that is $27/6 = 4.5$ — not an integer, so some orders **must** come up more often than others.',
        },
        {
          type: 'code',
          title: 'shuffle_bias.cpp',
          runnable: true,
          code: `#include <cstdio>
#include <map>
#include <string>
#include <utility>

// Every sequence of random choices j is equally likely, so enumerating all of
// them and counting the resulting orders gives the EXACT output distribution.
int main() {
    std::map<std::string, int> naive, fisherYates;

    // Naive: for i = 0..2, swap a[i] with a[j], j uniform in {0,1,2}.  3^3 = 27 paths.
    for (int j0 = 0; j0 < 3; ++j0)
        for (int j1 = 0; j1 < 3; ++j1)
            for (int j2 = 0; j2 < 3; ++j2) {
                std::string a = "ABC";
                std::swap(a[0], a[j0]);
                std::swap(a[1], a[j1]);
                std::swap(a[2], a[j2]);
                ++naive[a];
            }

    // Fisher-Yates: for i = 2 down to 1, swap a[i] with a[j], j uniform in {0..i}.  3*2 = 6 paths.
    for (int j2 = 0; j2 <= 2; ++j2)
        for (int j1 = 0; j1 <= 1; ++j1) {
            std::string a = "ABC";
            std::swap(a[2], a[j2]);
            std::swap(a[1], a[j1]);
            ++fisherYates[a];
        }

    std::printf("order  naive (of 27)  Fisher-Yates (of 6)\\n");
    for (auto [order, count] : naive)
        std::printf("%s    %2d               %d\\n", order.c_str(), count, fisherYates[order]);
}`,
          output: `order  naive (of 27)  Fisher-Yates (of 6)
ABC     4               1
ACB     5               1
BAC     5               1
BCA     5               1
CAB     4               1
CBA     4               1`,
          annotations: [
            { lines: '12-20', text: 'Instead of calling a random number generator, loop over **every** possible sequence of choices. Each is equally likely, so the counts are exact probabilities (out of $27$).' },
            { lines: '23-29', text: 'Fisher–Yates has $3 \\cdot 2 = 6$ paths, one per permutation.' },
          ],
        },
        {
          type: 'p',
          text: 'The naive shuffle produces `ACB`, `BAC` and `BCA` with probability $5/27 \\approx 18.5\\%$ and the others with $4/27 \\approx 14.8\\%$ instead of $16.7\\%$ each. For a $52$-card deck the bias is subtler but real, and it has been exploited in online card games. In C++, use `std::shuffle(v.begin(), v.end(), rng)`, which implements Fisher–Yates — and seed the generator well: a 32-bit seed can reach at most $2^{32}$ of the $52! \\approx 8 \\times 10^{67}$ deck orders.',
        },
      ],
    },
    // ------------------------------------------------------------------ 16
    {
      kind: 'mcq',
      prompt: 'Why can the naive shuffle (swap each position with a uniformly random position among all $n$) **never** be uniform for $n = 3$?',
      options: [
        { text: 'Because it swaps an element with itself sometimes', why: 'Fisher–Yates also allows $j = i$ (a "swap" that does nothing), and it is perfectly uniform. Self-swaps are not the problem.' },
        { text: 'Because random number generators are not truly random', why: 'The bias exists even with a perfect source of randomness: it comes from the algorithm\'s structure, as the exact enumeration shows.' },
        { text: 'Because it makes too few swaps to mix the deck', why: 'It makes $n$ swaps, one more than Fisher–Yates. More swaps do not fix a counting mismatch.' },
        { text: 'Because its $3^3 = 27$ equally likely paths cannot be split evenly among the $3! = 6$ permutations', correct: true, why: 'A uniform result needs each permutation to get the same number of paths, $27/6 = 4.5$, which is impossible. So some permutations get $5$ paths and others $4$.' },
      ],
      explanation: 'Any algorithm whose randomness consists of $N$ equally likely paths can produce a uniform permutation only if $n!$ divides $N$. Fisher–Yates has $N = n!$ paths, one per permutation. The naive shuffle has $N = n^n$, and for $n \\ge 3$, $n - 1$ divides $n!$ but shares no factor with $n^n$, so $n! \\nmid n^n$ — the bias is unavoidable.',
    },
    // ------------------------------------------------------------------ 17
    {
      kind: 'order',
      prompt: 'Arrange the lines of a correct Fisher–Yates shuffle (with a helper `randomInt(lo, hi)` that returns a uniform integer in $[lo, hi]$, inclusive).',
      linesAreCode: true,
      lines: [
        'void shuffle(std::vector<int>& a) {',
        '    for (int i = (int)a.size() - 1; i > 0; --i) {',
        '        int j = randomInt(0, i);',
        '        std::swap(a[i], a[j]);',
        '    }',
        '}',
      ],
      distractors: ['        int j = randomInt(0, (int)a.size() - 1);'],
      explanation: 'The loop runs $i$ from the last index down to $1$, and $j$ is drawn from $\\{0, \\dots, i\\}$ — the not-yet-placed part, **including** $i$ itself (so an element can stay where it is). The distractor draws $j$ from the whole array, which turns the algorithm into a biased shuffle like the naive one.',
    },
  ],
  takeaways: [
    'A random variable is a function $X : S \\to \\mathbb{R}$; its distribution lists $P(X = x)$.',
    '$E[X] = \\sum_x x\\,P(X = x)$ is the long-run average. Linearity $E[X + Y] = E[X] + E[Y]$ holds always — with indicators, an expected count is a sum of probabilities (fixed points: $1$; matching pairs: $\\binom{n}{2}/365$).',
    'Geometric: $P(X = k) = (1-p)^{k-1}p$, $E[X] = 1/p$, memoryless. At the expected number of tries, about $1/e \\approx 37\\%$ still have nothing.',
    'Coupon collector: $E = nH_n \\approx n\\ln n$, dominated by the last few items.',
    '$\\operatorname{Var}(X) = E[X^2] - (E[X])^2$, $\\sigma = \\sqrt{\\operatorname{Var}}$; variances add for independent variables. Same mean, different variance, very different player experience.',
    'Crit damage: $E[D] = b(1 + c(m-1))$. Pity caps the tail: $E = \\frac{1 - (1-p)^{N}}{p}$. Shuffle with Fisher–Yates ($n!$ paths, one per permutation); the naive $n^n$-path shuffle is provably biased.',
  ],
  reading: [
    {
      title: 'MIT OCW 6.042J — Mathematics for Computer Science',
      url: 'https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-fall-2010/',
      source: 'other',
      note: 'The lectures on random variables and expectation cover linearity, the coupon collector and deviation from the mean in depth.',
    },
    {
      title: 'Wikipedia — Fisher–Yates shuffle',
      url: 'https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle',
      source: 'wikipedia',
      note: 'The algorithm, its history, and a careful discussion of the naive implementation\'s bias and of modulo bias in random integers.',
    },
    {
      title: "Wikipedia — Coupon collector's problem",
      url: "https://en.wikipedia.org/wiki/Coupon_collector%27s_problem",
      source: 'wikipedia',
      note: 'The $nH_n$ formula, its variance, and tail bounds that say how unlucky a collector can be.',
    },
  ],
};
