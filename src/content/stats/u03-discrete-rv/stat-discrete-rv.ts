import type { Lesson } from '../../types';

// Running example: X = number of items in a loot chest.
const chest: [number, number][] = [
  [0, 0.1],
  [1, 0.4],
  [2, 0.3],
  [3, 0.2],
];
const chestCdf = [0.1, 0.5, 0.8, 1.0];

// 2d4 damage roll: P(X = s) = (4 - |s - 5|)/16 for s = 2..8.
const d4sum = Array.from({ length: 7 }, (_, i) => i + 2);
const p2d4 = (s: number) => (4 - Math.abs(s - 5)) / 16;

export const lesson: Lesson = {
  id: 'stat-discrete-rv',
  title: 'Random Variables, PMFs and CDFs',
  summary: 'Describe a discrete random variable completely with its PMF or its CDF, compute $E[g(X)]$ without finding the distribution of $g(X)$, transform means and variances, and meet moments and skewness — checked by simulation in C++.',
  minutes: 18,
  objectives: [
    'Write down and check a probability mass function, including finding a normalizing constant',
    'Build the CDF of a discrete random variable, read probabilities off it, and explain its jumps',
    'Compute $E[g(X)]$ with the law of the unconscious statistician, and explain why $E[g(X)] \\ne g(E[X])$ in general',
    'Use $E[aX + b] = aE[X] + b$, $\\operatorname{Var}(aX + b) = a^2 \\operatorname{Var}(X)$ and the shortcut $\\operatorname{Var}(X) = E[X^2] - (E[X])^2$',
    'Describe a distribution by its moments, and interpret skewness for loot tables',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Discrete random variables and the PMF',
      blocks: [
        {
          type: 'p',
          text: 'In Discrete Math you met the [[dm-random-variable|random variable]]: a function $X$ that attaches a number to each outcome in the [[dm-sample-space|sample space]] — the gold in a chest, the damage of a swing, the crashes in a play session. Statistics is mostly about such numbers, so this unit builds a toolkit for them.',
        },
        {
          type: 'p',
          text: 'A random variable is **discrete** when its possible values can be listed: finitely many, like $\\{0, 1, 2, 3\\}$, or a sequence, like $\\{0, 1, 2, \\dots\\}$. (Next unit handles variables such as frame time that fill a whole interval.) A discrete variable is completely described by how much probability sits on each value.',
        },
        {
          type: 'definition',
          term: 'Probability mass function (PMF)',
          text: 'The [[stat-pmf|PMF]] of a discrete random variable $X$ is $p_X(x) = P(X = x)$. Every PMF satisfies\n\n$$p_X(x) \\ge 0 \\quad \\text{and} \\quad \\sum_{x} p_X(x) = 1,$$\n\nand any function with these two properties is the PMF of some random variable. The set of values with $p_X(x) > 0$ is the **support** of $X$.',
        },
        {
          type: 'p',
          text: 'It is the same object as a [[dm-probability-distribution|probability distribution]], now living on the number line instead of on raw outcomes. Our running example: a loot chest contains $X$ items, with $p_X(0) = 0.1$, $p_X(1) = 0.4$, $p_X(2) = 0.3$, $p_X(3) = 0.2$. The probabilities are nonnegative and add to $1$, so this is a valid PMF.',
        },
        {
          type: 'graph',
          x: [-0.8, 4],
          y: [0, 0.5],
          xStep: 1,
          yStep: 0.1,
          height: 230,
          segments: chest.map(([k, p]) => ({ from: [k, 0] as [number, number], to: [k, p] as [number, number], color: 'blue' as const })),
          points: chest.map(([k, p]) => ({ x: k, y: p, color: 'blue' as const, label: String(p) })),
          caption: 'A PMF is drawn as **stems**: a spike of height $p_X(x)$ at each value. There is no probability *between* the integers — a chest cannot hold $1.5$ items.',
        },
        {
          type: 'derivation',
          title: 'Finding a normalizing constant',
          steps: [
            { tex: 'p_X(x) = c\\,x \\quad \\text{for } x = 1, 2, 3, 4', why: 'A designer says: "a chest with $x$ slots should be $x$ times as likely as a 1-slot chest." That fixes the *shape*; the constant $c$ must make the total $1$.' },
            { tex: 'c(1 + 2 + 3 + 4) = 1', why: 'Sum the PMF over the whole support and set the total equal to $1$.' },
            { tex: 'c = \\tfrac{1}{10}', why: 'So $p_X(x) = x/10$: probabilities $0.1, 0.2, 0.3, 0.4$. All are nonnegative, so both PMF conditions hold.' },
          ],
          result: 'Whenever a distribution is given "up to a constant", sum (or, next unit, integrate) and normalize.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'numeric',
      prompt: 'A random variable has PMF $p_X(x) = c\\,x^2$ for $x = 1, 2, 3$ (and $0$ otherwise). Find $c$. Give an exact fraction.',
      hint: 'Add $c \\cdot 1^2 + c \\cdot 2^2 + c \\cdot 3^2$ and set the sum equal to $1$.',
      label: '$c =$',
      answer: '1/14',
      explanation: 'The probabilities must add to $1$: $c(1 + 4 + 9) = 14c = 1$, so $c = \\frac{1}{14}$. The PMF is then $\\frac{1}{14}, \\frac{4}{14}, \\frac{9}{14}$ — each value nonnegative, total $1$. Squaring makes the largest value dominate: $X = 3$ carries about $64\\%$ of the probability.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'The CDF: accumulating probability',
      blocks: [
        {
          type: 'p',
          text: 'Many questions are about ranges, not single values: "at most $2$ items", "more than $100$ ms of lag", "fewer than $3$ crashes". The tool for ranges is the cumulative distribution function. It works for **every** random variable — discrete now, continuous next unit — which is why statistics uses it constantly.',
        },
        {
          type: 'definition',
          term: 'Cumulative distribution function (CDF)',
          text: 'The [[stat-cdf|CDF]] of $X$ is $F_X(x) = P(X \\le x)$, defined for **every** real number $x$. For a discrete variable, $F_X(x) = \\sum_{k \\le x} p_X(k)$.',
        },
        {
          type: 'graph',
          x: [-1, 4.5],
          y: [-0.05, 1.1],
          xStep: 1,
          yStep: 0.2,
          height: 260,
          segments: [
            { from: [-1, 0], to: [0, 0], color: 'blue' },
            ...chestCdf.map((v, k) => ({ from: [k, v] as [number, number], to: [k === 3 ? 4.5 : k + 1, v] as [number, number], color: 'blue' as const })),
            ...chestCdf.map((v, k) => ({ from: [k, k === 0 ? 0 : chestCdf[k - 1]] as [number, number], to: [k, v] as [number, number], color: 'gray' as const, dashed: true })),
          ],
          points: [
            ...chestCdf.map((v, k) => ({ x: k, y: v, color: 'blue' as const, label: `F(${k}) = ${v}` })),
            ...chestCdf.map((_, k) => ({ x: k, y: k === 0 ? 0 : chestCdf[k - 1], color: 'blue' as const, open: true })),
          ],
          caption: 'The chest CDF is a **step function**. It is flat between integers (no probability there) and jumps at each value $k$ by exactly $p_X(k)$: up $0.4$ at $1$, up $0.3$ at $2$. Filled dots show the value *at* the jump: $F_X(1) = 0.5$, because $P(X \\le 1)$ includes $X = 1$.',
        },
        {
          type: 'list',
          items: [
            '**Nondecreasing:** if $a < b$ then $F_X(a) \\le F_X(b)$ — adding values never removes probability.',
            '**Limits:** $F_X(x) \\to 0$ as $x \\to -\\infty$ and $F_X(x) \\to 1$ as $x \\to \\infty$.',
            '**Right-continuous:** at each jump, $F_X$ takes the upper value (the filled dot).',
            '**Ranges:** $P(a < X \\le b) = F_X(b) - F_X(a)$, and the jump at $k$ is $p_X(k) = F_X(k) - F_X(k^-)$, where $F_X(k^-)$ is the value just to the left.',
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'For discrete variables, $<$ and $\\le$ are different questions',
          text: '$P(X \\le 2) = F_X(2) = 0.8$, but $P(X < 2) = P(X \\le 1) = F_X(1) = 0.5$. The difference is exactly $p_X(2) = 0.3$. With integer values, translate every inequality into "$\\le$ some integer" before reading the CDF: $P(X \\ge 2) = 1 - P(X \\le 1) = 0.5$, and $P(1 \\le X \\le 3) = F_X(3) - F_X(0) = 0.9$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why bother with $F_X$ when $p_X$ already says everything?',
          text: 'For a discrete variable, $p_X$ and $F_X$ carry the same information: sum the PMF to get the CDF, take jumps of the CDF to get the PMF. But the CDF is the one definition that survives when single values have probability $0$ (as for continuous variables), and it is what you invert to turn uniform random numbers into any distribution you like — the basis of sampling in every game engine and simulator.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'numeric',
      prompt: 'The number of crashes $X$ in a play session has CDF values $F_X(0) = 0.35$, $F_X(1) = 0.70$, $F_X(2) = 0.90$, $F_X(3) = 1$ (no other values are possible). Find $P(1 \\le X \\le 2)$. Two decimals.',
      hint: '$1 \\le X \\le 2$ means $X \\le 2$ but not $X \\le 0$.',
      label: '$P(1 \\le X \\le 2) =$',
      answer: '0.55',
      tolerance: 0.005,
      explanation: '$P(1 \\le X \\le 2) = P(X \\le 2) - P(X \\le 0) = F_X(2) - F_X(0) = 0.90 - 0.35 = 0.55$. The tempting $F_X(2) - F_X(1) = 0.20$ is only $P(X = 2)$: subtracting $F_X(1)$ removes the value $1$ that the question includes. Equivalently, add the jumps: $p_X(1) + p_X(2) = 0.35 + 0.20 = 0.55$.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Expectation of a function: $E[g(X)]$',
      blocks: [
        {
          type: 'p',
          text: 'You know the [[dm-expected-value|expected value]] $E[X] = \\sum_x x\\,p_X(x)$, the long-run average. For the chest, $E[X] = 0(0.1) + 1(0.4) + 2(0.3) + 3(0.2) = 1.6$ items. Often, though, you need the average of something **computed from** $X$: damage after armor, gold value of the items, $X^2$ for a variance. Any function $g(X)$ is itself a random variable, so in principle you could find its PMF first. You don\'t have to.',
        },
        {
          type: 'theorem',
          name: 'Law of the unconscious statistician (LOTUS)',
          tex: 'E[g(X)] = \\sum_{x} g(x)\\, p_X(x)',
          text: 'Weight each **transformed** value $g(x)$ by the probability of the **original** value $x$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why LOTUS holds',
          text: 'Group the values of $X$ by where $g$ sends them. The event $g(X) = y$ is the union of the disjoint events $X = x$ over all $x$ with $g(x) = y$, so $P(g(X) = y) = \\sum_{x:\\,g(x) = y} p_X(x)$. Then $E[g(X)] = \\sum_y y\\,P(g(X) = y) = \\sum_y \\sum_{x:\\,g(x)=y} g(x)\\,p_X(x) = \\sum_x g(x)\\,p_X(x)$. It is the same sum, just added in a different order. (The name teases people who use the formula without realizing it needs this argument.)',
        },
        {
          type: 'p',
          text: 'Here is a damage-roll example. A weapon deals $X$ = the total of two four-sided dice (2d4), so $X \\in \\{2, \\dots, 8\\}$ with $p_X(s) = \\frac{4 - |s - 5|}{16}$. The target\'s armor absorbs $4$ points, so the damage dealt is $g(X) = \\max(X - 4, 0)$.',
        },
        {
          type: 'derivation',
          title: 'Average damage through armor',
          steps: [
            { tex: '\\begin{array}{c|ccccccc} x & 2 & 3 & 4 & 5 & 6 & 7 & 8 \\\\ \\hline 16\\,p_X(x) & 1 & 2 & 3 & 4 & 3 & 2 & 1 \\\\ g(x) & 0 & 0 & 0 & 1 & 2 & 3 & 4 \\end{array}', why: 'Count the dice pairs for each total (out of $16$) and apply $g(x) = \\max(x - 4, 0)$ to each value.' },
            { tex: 'E[g(X)] = \\tfrac{1}{16}\\left(0 + 0 + 0 + 1 \\cdot 4 + 2 \\cdot 3 + 3 \\cdot 2 + 4 \\cdot 1\\right)', why: 'LOTUS: transformed value times the probability of the original value. The rolls that armor fully absorbs contribute $0$.' },
            { tex: '= \\tfrac{20}{16} = 1.25', why: 'Arithmetic: $4 + 6 + 6 + 4 = 20$.' },
            { tex: 'g(E[X]) = \\max(5 - 4, 0) = 1', why: 'The tempting shortcut: plug the average roll $E[X] = 5$ into $g$. It gives a different answer.' },
          ],
          result: 'The true average damage is $1.25$ per hit, $25\\%$ more than "average roll minus armor" predicts. Armor wipes out low rolls (they cannot go below $0$) but only trims high ones, so the average of $g$ beats $g$ of the average.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: '$E[g(X)] \\ne g(E[X])$ unless $g$ is linear',
          text: 'Expectation passes through $aX + b$ and nothing else in general: $E[X^2] \\ne (E[X])^2$, $E[1/X] \\ne 1/E[X]$, $E[\\max(X - 4, 0)] \\ne \\max(E[X] - 4, 0)$. Balance spreadsheets that plug average stats into nonlinear formulas (armor, diminishing returns, crit caps) are systematically off — exactly the mistake LOTUS prevents.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'numeric',
      prompt: 'For the chest with $p_X(0) = 0.1$, $p_X(1) = 0.4$, $p_X(2) = 0.3$, $p_X(3) = 0.2$, each item doubles a reward, so the reward multiplier is $2^X$. Find $E[2^X]$. Two decimals.',
      hint: 'LOTUS: $\\sum_x 2^x\\,p_X(x)$, with $2^0 = 1$.',
      label: '$E[2^X] =$',
      answer: '3.7',
      tolerance: 0.005,
      explanation: '$E[2^X] = 1(0.1) + 2(0.4) + 4(0.3) + 8(0.2) = 0.1 + 0.8 + 1.2 + 1.6 = 3.7$. Compare $2^{E[X]} = 2^{1.6} \\approx 3.03$: plugging in the mean underestimates by about $18\\%$, because $2^x$ curves upward and rewards the high values disproportionately.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'Linear transformations and the variance shortcut',
      blocks: [
        {
          type: 'p',
          text: 'Recall the [[dm-variance|variance]] $\\operatorname{Var}(X) = E[(X - \\mu)^2]$ with $\\mu = E[X]$: the average squared distance from the mean, and $\\sigma = \\sqrt{\\operatorname{Var}(X)}$. With LOTUS we can now prove the rules for rescaling a variable — what happens to damage when a weapon upgrade multiplies it by $a$ and adds $b$, or to a temperature converted from °C to °F.',
        },
        {
          type: 'theorem',
          name: 'Linear transformations',
          tex: 'E[aX + b] = a\\,E[X] + b, \\qquad \\operatorname{Var}(aX + b) = a^2\\operatorname{Var}(X), \\qquad \\sigma_{aX+b} = |a|\\,\\sigma_X',
        },
        {
          type: 'derivation',
          title: 'Proof of the two rules',
          steps: [
            { tex: 'E[aX + b] = \\sum_x (ax + b)\\,p_X(x) = a\\sum_x x\\,p_X(x) + b\\sum_x p_X(x)', why: 'LOTUS with $g(x) = ax + b$, then split the sum.' },
            { tex: '= a\\,E[X] + b', why: 'The first sum is $E[X]$; the second is $1$ because the PMF sums to $1$.' },
            { tex: '\\operatorname{Var}(aX + b) = E\\left[\\left(aX + b - (a\\mu + b)\\right)^2\\right]', why: 'Definition of variance, using the mean $a\\mu + b$ just found.' },
            { tex: '= E\\left[a^2 (X - \\mu)^2\\right] = a^2\\,E\\left[(X - \\mu)^2\\right] = a^2 \\operatorname{Var}(X)', why: 'The $b$\'s cancel — shifting moves every value and the mean together, so distances don\'t change. Pull the constant $a^2$ out by the first rule.' },
          ],
        },
        {
          type: 'graph',
          x: [-10, 14],
          y: [0, 0.5],
          xStep: 2,
          yStep: 0.1,
          height: 250,
          segments: [
            ...chest.map(([k, p]) => ({ from: [k, 0] as [number, number], to: [k, p] as [number, number], color: 'gray' as const, dashed: true })),
            ...chest.map(([k, p]) => ({ from: [`a*${k} + b`, 0] as [string, number], to: [`a*${k} + b`, p] as [string, number], color: 'blue' as const })),
          ],
          points: chest.map(([k, p]) => ({ x: `a*${k} + b`, y: p, color: 'blue' as const })),
          vlines: [{ x: '1.6a + b', label: 'E[aX+b]', color: 'orange' }],
          sliders: [
            { name: 'a', min: -3, max: 3, step: 0.5, value: 2, label: 'scale $a$' },
            { name: 'b', min: -5, max: 5, step: 1, value: 1, label: 'shift $b$' },
          ],
          readouts: [
            { label: '$E[aX + b] = 1.6a + b =$', expr: '1.6a + b', digits: 2 },
            { label: '$\\operatorname{Var}(aX + b) = 0.84a^2 =$', expr: '0.84a^2', digits: 3 },
            { label: '$\\sigma_{aX+b} = |a| \\cdot 0.917 =$', expr: 'abs(a)*sqrt(0.84)', digits: 3 },
          ],
          caption: 'Gray: the chest PMF ($\\mu = 1.6$, $\\sigma^2 = 0.84$). Blue: $aX + b$. The heights never change — only the positions. Moving $b$ slides everything (mean moves, spread doesn\'t); $a$ stretches the spacing, and a negative $a$ mirrors it, which still gives a positive variance.',
        },
        {
          type: 'theorem',
          name: 'Variance shortcut',
          tex: '\\operatorname{Var}(X) = E[X^2] - (E[X])^2',
        },
        {
          type: 'derivation',
          title: 'Why the shortcut works, and the chest\'s variance',
          steps: [
            { tex: 'E[(X - \\mu)^2] = E[X^2 - 2\\mu X + \\mu^2]', why: 'Expand the square; $\\mu$ is a constant.' },
            { tex: '= E[X^2] - 2\\mu\\,E[X] + \\mu^2 = E[X^2] - \\mu^2', why: 'Linearity of expectation, then $E[X] = \\mu$ so $-2\\mu^2 + \\mu^2 = -\\mu^2$.' },
            { tex: 'E[X^2] = 0^2(0.1) + 1^2(0.4) + 2^2(0.3) + 3^2(0.2) = 3.4', why: 'LOTUS with $g(x) = x^2$ for the chest.' },
            { tex: '\\operatorname{Var}(X) = 3.4 - 1.6^2 = 0.84, \\quad \\sigma \\approx 0.917', why: 'Shortcut, with $E[X] = 1.6$ from before.' },
          ],
          result: 'The shortcut needs one pass through the table for $E[X]$ and $E[X^2]$, which is also how code computes variance in a single loop (with a numerical caveat you will meet in the computing unit: subtracting two large, nearly equal numbers loses precision).',
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'error',
      prompt: 'A random variable $X$ has $E[X] = 3$ and $\\operatorname{Var}(X) = 4$. A student finds the mean and standard deviation of $Y = 5 - 2X$. Tap the first wrong line.',
      lines: [
        '$E[Y] = 5 - 2E[X] = 5 - 6 = -1$',
        '$\\operatorname{Var}(Y) = (-2)^2 \\operatorname{Var}(X) + 5 = 16 + 5 = 21$',
        '$\\sigma_Y = \\sqrt{21} \\approx 4.58$',
      ],
      errorLines: [2],
      explanation: 'Line 2 adds the shift $5$ to the variance. A shift moves every value and the mean by the same amount, so it does not change any distance from the mean: $\\operatorname{Var}(5 - 2X) = (-2)^2 \\cdot 4 = 16$, and $\\sigma_Y = 4$ (twice $\\sigma_X = 2$). Line 1 is correct: means *do* feel the shift.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'concept',
      title: 'Moments: mean, spread, skew and beyond',
      blocks: [
        {
          type: 'p',
          text: 'The numbers $E[X]$ and $E[X^2]$ are the first two of a whole family. Each one captures a different feature of the shape, and together they describe a distribution more and more completely.',
        },
        {
          type: 'definition',
          term: 'Moments',
          text: 'The $k$-th [[stat-moment|moment]] of $X$ is $E[X^k]$, and the $k$-th **central moment** is $E[(X - \\mu)^k]$. The first moment is the mean; the second central moment is the variance.',
        },
        {
          type: 'p',
          text: 'The third central moment measures **asymmetry**. Cubing keeps the sign, so values far above the mean push it positive and values far below push it negative. Dividing by $\\sigma^3$ makes it unit-free; the result is the **skewness**, $\\gamma = E[(X - \\mu)^3]/\\sigma^3$. A symmetric distribution like the 2d4 roll has $\\gamma = 0$. The fourth standardized moment, the *kurtosis*, measures how heavy the tails are.',
        },
        {
          type: 'derivation',
          title: 'Skewness of a spiky loot table',
          steps: [
            { tex: '\\begin{array}{c|ccc} x \\text{ (gold)} & 10 & 20 & 100 \\\\ \\hline p_X(x) & 0.7 & 0.2 & 0.1 \\end{array}', why: 'Most drops are small; one in ten is a jackpot.' },
            { tex: '\\mu = 7 + 4 + 10 = 21, \\quad E[X^2] = 70 + 80 + 1000 = 1150', why: 'First and second moments by LOTUS. The jackpot supplies almost all of $E[X^2]$.' },
            { tex: '\\sigma^2 = 1150 - 21^2 = 709, \\quad \\sigma \\approx 26.6', why: 'Variance shortcut.' },
            { tex: 'E[(X - \\mu)^3] = 0.7(-11)^3 + 0.2(-1)^3 + 0.1(79)^3 = 48{,}372', why: 'Third central moment. The single term $0.1 \\cdot 79^3 \\approx 49{,}304$ swamps the negative ones.' },
            { tex: '\\gamma = \\frac{48{,}372}{709^{3/2}} \\approx 2.56', why: 'Standardize by $\\sigma^3$. A skewness above $1$ signals a long right tail.' },
          ],
          result: 'Strongly right-skewed: the mean ($21$) sits above what $90\\%$ of drops pay ($\\le 20$). Right skew is the norm for loot, session lengths, latency and frame times — keep it in mind whenever someone summarizes such data by a single average.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Moments are what telemetry dashboards compute',
          text: 'A stream of values can be summarized in one pass by keeping running sums of $x$, $x^2$, $x^3$ (or, more stably, running central moments), from which mean, variance and skewness follow. Later in the course the **method of moments** turns this around: choose a model\'s parameters so that its moments match the data\'s.',
        },
        {
          type: 'deepdive',
          title: 'The moment generating function',
          blocks: [
            {
              type: 'p',
              text: 'All the moments can be packed into a single function, $M_X(s) = E[e^{sX}] = \\sum_x e^{sx}\\,p_X(x)$ (LOTUS again). Differentiating under the sum and setting $s = 0$ pulls them out one at a time, because $\\frac{d^k}{ds^k} e^{sx} = x^k e^{sx}$:',
            },
            { type: 'math', tex: "M_X'(0) = E[X], \\qquad M_X''(0) = E[X^2], \\qquad M_X^{(k)}(0) = E[X^k]" },
            {
              type: 'p',
              text: 'It is the [[maclaurin-series|Maclaurin series]] idea in disguise: $M_X(s) = \\sum_k E[X^k]\\,s^k/k!$. MGFs make sums of independent variables easy (their MGFs multiply), which is one route to the central limit theorem.',
            },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'mcq',
      prompt: 'A free-to-play game logs how much each player spends per month. Most spend $\\$0$, a few spend $\\$5$–$\\$20$, and a handful of "whales" spend hundreds. What do you expect for this distribution?',
      options: [
        { text: 'Skewness near $0$, mean close to the typical player\'s spend', why: 'Skewness near $0$ needs the values balanced around the mean. Here a few huge values sit far above it with nothing comparable below (spending cannot go below $0$).' },
        { text: 'Positive skewness, mean well above what a typical player spends', correct: true, why: 'Large deviations above the mean, cubed, dominate the third central moment. The whales drag the mean far above the median, which may well be $\\$0$.' },
        { text: 'Negative skewness, because most values are at the low end', why: 'Skewness follows the long **tail**, not the bulk. A pile-up at the low end with a long tail to the right is positive (right) skew.' },
        { text: 'Skewness cannot be defined because most values are $0$', why: 'Repeated values are no problem: $E[(X - \\mu)^3]$ is defined whenever the third moment is finite.' },
      ],
      explanation: 'Spending is bounded below by $0$ and unbounded above, the classic recipe for right skew. Cubed deviations make the few whales dominate $E[(X - \\mu)^3]$, so $\\gamma > 0$, and the mean ("average revenue per user") is pulled far above the median. That is why studios report both, and why a single average can mislead.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'Checking it all by simulation',
      blocks: [
        {
          type: 'p',
          text: 'Every formula in this lesson makes a prediction you can test: roll 2d4 a million times, and the sample mean, the average of $X^2$, the average damage through armor and the fraction of rolls $\\le x$ should match $E[X]$, $E[X^2]$, $E[g(X)]$ and $F_X(x)$. The fraction of rolls at most $x$ is called the **empirical CDF**; it is the data version of $F_X$, and you will meet it again when we test whether data fits a model.',
        },
        {
          type: 'code',
          title: 'damage_roll.cpp',
          runnable: true,
          code: `#include <algorithm>
#include <array>
#include <cstdio>
#include <random>

int main() {
    std::mt19937_64 rng(2024);
    auto d4 = [&] { return int(rng() % 4) + 1; };   // 4 divides 2^64: exactly uniform

    const int N = 1'000'000;
    std::array<long, 9> count{};                     // count[s] = rolls with total s
    double sum = 0, sumSq = 0, sumArmor = 0;
    for (int i = 0; i < N; ++i) {
        int x = d4() + d4();                         // one 2d4 damage roll
        ++count[x];
        sum += x;
        sumSq += double(x) * x;
        sumArmor += std::max(x - 4, 0);              // damage left after 4 armor
    }
    double mean = sum / N;
    std::printf("mean       %.4f   (exact 5)\\n", mean);
    std::printf("E[X^2]     %.4f  (exact 27.5)\\n", sumSq / N);
    std::printf("Var        %.4f   (exact 2.5)\\n", sumSq / N - mean * mean);
    std::printf("E[g(X)]    %.4f   (exact 1.25, while g(E[X]) = 1)\\n", sumArmor / N);

    std::printf("\\n x   empirical CDF   exact CDF\\n");
    const int exactCount[9] = {0, 0, 1, 2, 3, 4, 3, 2, 1};   // out of 16
    long running = 0;
    int exactRunning = 0;
    for (int x = 2; x <= 8; ++x) {
        running += count[x];
        exactRunning += exactCount[x];
        std::printf(" %d   %.4f          %.4f\\n", x, double(running) / N, exactRunning / 16.0);
    }
}`,
          output: `mean       4.9984   (exact 5)
E[X^2]     27.4852  (exact 27.5)
Var        2.5015   (exact 2.5)
E[g(X)]    1.2488   (exact 1.25, while g(E[X]) = 1)

 x   empirical CDF   exact CDF
 2   0.0627          0.0625
 3   0.1878          0.1875
 4   0.3757          0.3750
 5   0.6253          0.6250
 6   0.8127          0.8125
 7   0.9375          0.9375
 8   1.0000          1.0000`,
          annotations: [
            { lines: 8, text: '`std::mt19937_64` is specified exactly by the C++ standard, and $4$ divides $2^{64}$, so `rng() % 4` is perfectly uniform and the output is identical on every compiler.' },
            { lines: '13-19', text: 'One pass accumulates everything: a histogram for the PMF/CDF and running sums for the first two moments and for $E[g(X)]$ (LOTUS, estimated by averaging $g$ of each sample).' },
            { lines: 23, text: 'The variance shortcut $E[X^2] - (E[X])^2$ applied to sample averages.' },
            { lines: '28-33', text: 'The empirical CDF: running totals of the histogram divided by $N$, next to the exact $F_X(x)$.' },
          ],
        },
        {
          type: 'graph',
          x: [1, 9],
          y: [0, 0.3],
          xStep: 1,
          yStep: 0.05,
          height: 220,
          segments: d4sum.map((s) => ({ from: [s, 0] as [number, number], to: [s, p2d4(s)] as [number, number], color: 'blue' as const })),
          points: d4sum.map((s) => ({ x: s, y: p2d4(s), color: 'blue' as const })),
          vlines: [{ x: 4.5, label: 'armor absorbs ≤ 4', color: 'red', dashed: true }],
          caption: 'The 2d4 PMF. Everything left of the red line is absorbed by armor and deals $0$; the right side deals $1, 2, 3, 4$. Symmetric, so its skewness is $0$.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'How close should the simulation be?',
          text: 'With $N = 10^6$ samples and $\\sigma \\approx 1.58$, the sample mean typically lands within about $\\sigma/\\sqrt{N} \\approx 0.0016$ of $5$ — and $4.9984$ does. A simulation is a check on your algebra, not a proof; if it disagrees by many multiples of $\\sigma/\\sqrt{N}$, suspect the math (or the code).',
        },
      ],
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'order',
      prompt: 'Put the steps for finding the standard deviation of a discrete random variable from its PMF table in order.',
      lines: [
        'Check that the probabilities are nonnegative and sum to $1$',
        'Compute $\\mu = E[X] = \\sum_x x\\,p_X(x)$',
        'Compute $E[X^2] = \\sum_x x^2\\,p_X(x)$ with LOTUS',
        'Subtract: $\\operatorname{Var}(X) = E[X^2] - \\mu^2$',
        'Take the square root: $\\sigma = \\sqrt{\\operatorname{Var}(X)}$',
      ],
      distractors: ['Square the mean to get $E[X^2] = \\mu^2$'],
      explanation: 'Validate the PMF, then find the first two moments, then combine them with the shortcut and take a square root so $\\sigma$ is in the units of $X$. The distractor is the classic slip: $E[X^2]$ is the average of the squares, not the square of the average. If they were equal, every variance would be $0$.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'truefalse',
      prompt: 'For a random variable $X$ that takes only integer values, $P(X < 3) = P(X \\le 3)$.',
      answer: false,
      explanation: '$P(X \\le 3) = P(X < 3) + P(X = 3)$, and for a discrete variable $P(X = 3) = p_X(3)$ can be positive. On the CDF graph that is the jump at $3$. With integer values, $P(X < 3) = P(X \\le 2) = F_X(2)$. (For continuous variables, next unit, the two *are* equal, because single points carry probability $0$.)',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'fill',
      prompt: 'Complete the facts about the CDF of a discrete random variable.',
      template: 'The CDF $F_X(x) = P(X \\le x)$ is ___ and jumps at each value $k$ by exactly ___. For a constant $a$, $\\operatorname{Var}(X + a)$ equals ___.',
      blanks: [{ answers: ['nondecreasing'] }, { answers: ['$p_X(k)$'] }, { answers: ['$\\operatorname{Var}(X)$'] }],
      wordBank: ['nondecreasing', 'decreasing', '$p_X(k)$', '$F_X(k)$', '$\\operatorname{Var}(X)$', '$\\operatorname{Var}(X) + a$', '$a^2\\operatorname{Var}(X)$'],
      explanation: 'Accumulating probability can only add, so $F_X$ never decreases; its jump at $k$ is the probability sitting on that value, $p_X(k) = F_X(k) - F_X(k^-)$ (not $F_X(k)$ itself, which includes all the values below $k$). Shifting by a constant moves the mean with the values, leaving every deviation $X - \\mu$ unchanged, so the variance is unchanged.',
    },
  ],
  takeaways: [
    'A discrete random variable is described by its PMF $p_X(x) = P(X = x)$: nonnegative values summing to $1$. Normalize a PMF given "up to a constant" by summing.',
    'The CDF $F_X(x) = P(X \\le x)$ is a nondecreasing step function from $0$ to $1$; its jumps are the PMF values, and $P(a < X \\le b) = F_X(b) - F_X(a)$. Watch $<$ versus $\\le$.',
    'LOTUS: $E[g(X)] = \\sum_x g(x)\\,p_X(x)$. In general $E[g(X)] \\ne g(E[X])$ — plugging averages into nonlinear formulas (armor, multipliers) is biased.',
    '$E[aX + b] = aE[X] + b$, $\\operatorname{Var}(aX + b) = a^2\\operatorname{Var}(X)$, and $\\operatorname{Var}(X) = E[X^2] - (E[X])^2$.',
    'Moments $E[X^k]$ and central moments $E[(X - \\mu)^k]$ describe shape: mean, variance, skewness (asymmetry, positive for long right tails like loot and spending), kurtosis.',
  ],
  reading: [
    {
      title: 'MIT OCW 18.05 — Introduction to Probability and Statistics',
      url: 'https://ocw.mit.edu/courses/18-05-introduction-to-probability-and-statistics-spring-2014/',
      source: 'other',
      note: 'The class notes on discrete random variables, expectation and variance are short, rigorous and full of exercises at exactly this level.',
    },
    {
      title: 'OpenStax — Introductory Statistics',
      url: 'https://openstax.org/details/books/introductory-statistics',
      source: 'openstax',
      note: 'The chapter on discrete random variables gives many more PMF-table examples of means and standard deviations.',
    },
    {
      title: 'Wikipedia — Law of the unconscious statistician',
      url: 'https://en.wikipedia.org/wiki/Law_of_the_unconscious_statistician',
      source: 'wikipedia',
      note: 'The statement for discrete and continuous variables, its proof, and the story behind the name.',
    },
    {
      title: 'Seeing Theory — Probability Distributions',
      url: 'https://seeing-theory.brown.edu/',
      source: 'other',
      note: 'Interactive visualizations of random variables, expectation and variance from Brown University.',
    },
  ],
};
