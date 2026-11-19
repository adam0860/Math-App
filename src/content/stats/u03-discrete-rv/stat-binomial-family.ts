import type { Lesson } from '../../types';

const ks = (n: number, from = 0) => Array.from({ length: n - from + 1 }, (_, i) => i + from);

// Binomial PMF stems for k = 0..40 with slider-driven n and p.
const binomStem = (k: number) => `nCr(n, ${k})*p^${k}*(1 - p)^(n - ${k})`;
// Hypergeometric with n = 10 draws, population N (slider), K = N/5 successes.
const hyperStem = (k: number) => `nCr(N/5, ${k})*nCr(N - N/5, ${10 - k})/nCr(N, 10)`;
const binom10Stem = (k: number) => `nCr(10, ${k})*0.2^${k}*0.8^${10 - k}`;
// Negative binomial: trials until the r-th success.
const nbStem = (k: number) => `nCr(${k} - 1, r - 1)*p^r*(1 - p)^(${k} - r)`;

export const lesson: Lesson = {
  id: 'stat-binomial-family',
  title: 'Binomial, Geometric and Hypergeometric Distributions',
  summary: 'The family of distributions built from yes/no trials: the binomial (with its mean and variance from indicators), the geometric in both conventions, the negative binomial for the $r$-th success, and the hypergeometric for sampling without replacement — plus how to pick the right one.',
  minutes: 19,
  objectives: [
    'Derive the mean $np$ and variance $np(1-p)$ of a binomial count from indicator variables, and describe how its shape depends on $n$ and $p$',
    'Use the geometric distribution in both the "trials" and "failures" conventions, and recognize which one a library uses',
    'Compute negative binomial probabilities for the trial on which the $r$-th success occurs',
    'Compute hypergeometric probabilities for sampling without replacement, and explain the finite population correction',
    'Choose between binomial, geometric, negative binomial and hypergeometric models from a description of the experiment',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'The binomial distribution, and its moments from indicators',
      blocks: [
        {
          type: 'p',
          text: 'Recall the [[dm-binomial-distribution|binomial distribution]]: run $n$ independent [[dm-bernoulli-trial|Bernoulli trials]], each a success with probability $p$, and let $X$ count the successes. Choosing which $k$ trials succeed gives the [[binomial-coefficient|binomial coefficient]], so',
        },
        {
          type: 'math',
          tex: 'X \\sim \\text{Bin}(n, p): \\qquad p_X(k) = \\binom{n}{k} p^k (1-p)^{n-k}, \\quad k = 0, 1, \\dots, n',
        },
        {
          type: 'p',
          text: 'Summing $k\\,p_X(k)$ directly to get the mean is painful. Instead, write the count as a sum of simple pieces. Let $I_j = 1$ if trial $j$ succeeds and $0$ otherwise (an **indicator**). Then $X = I_1 + I_2 + \\cdots + I_n$, and each piece is easy.',
        },
        {
          type: 'derivation',
          title: 'Mean and variance of $\\text{Bin}(n, p)$',
          steps: [
            { tex: 'E[I_j] = 1 \\cdot p + 0 \\cdot (1 - p) = p', why: 'An indicator\'s mean is the probability of its event.' },
            { tex: 'E[I_j^2] = p \\implies \\operatorname{Var}(I_j) = p - p^2 = p(1-p)', why: 'Since $0^2 = 0$ and $1^2 = 1$, $I_j^2 = I_j$. Then the shortcut $E[I_j^2] - (E[I_j])^2$.' },
            { tex: 'E[X] = \\sum_{j=1}^{n} E[I_j] = np', why: 'Linearity of expectation — true for any random variables.' },
            { tex: '\\operatorname{Var}(X) = \\sum_{j=1}^{n} \\operatorname{Var}(I_j) = np(1-p)', why: 'Variances add for **independent** variables (proved in the Joint Distributions unit). This step needs independence; the mean did not.' },
          ],
          result: 'A loot box gives a rare item with probability $0.15$; opening $20$ boxes gives $X \\sim \\text{Bin}(20, 0.15)$ rare items, with mean $3$ and standard deviation $\\sqrt{20(0.15)(0.85)} = \\sqrt{2.55} \\approx 1.60$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why $p(1-p)$ is largest at $p = \\tfrac{1}{2}$',
          text: 'A trial with $p$ near $0$ or $1$ is nearly certain, so it adds little randomness; a coin flip is maximally uncertain. The function $p(1-p)$ is a downward parabola with its peak $\\tfrac{1}{4}$ at $p = \\tfrac{1}{2}$. This is why the worst-case margin of error in polling (and in win-rate estimates) uses $p = \\tfrac{1}{2}$.',
        },
        {
          type: 'p',
          text: 'One more fact you will use constantly: "at least one success" is easiest through the complement, $P(X \\ge 1) = 1 - (1-p)^n$. For the $20$ boxes, $P(\\text{no rare item}) = 0.85^{20} \\approx 0.039$, so about $1$ player in $26$ opens all twenty and gets nothing.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'numeric',
      prompt: 'A player opens $10$ loot boxes, each independently containing a rare item with probability $0.15$. Find the probability of getting **at least two** rare items. Four decimals.',
      hint: 'Use the complement: $1 - P(X = 0) - P(X = 1)$.',
      label: '$P(X \\ge 2) =$',
      answer: '1 - 0.85^10 - 10*0.15*0.85^9',
      answerTex: '\\approx 0.4557',
      tolerance: 0.00006,
      explanation: '$P(X = 0) = 0.85^{10} \\approx 0.1969$ and $P(X = 1) = \\binom{10}{1}(0.15)(0.85)^9 \\approx 0.3474$. So $P(X \\ge 2) = 1 - 0.1969 - 0.3474 \\approx 0.4557$. Summing $P(X = 2) + \\dots + P(X = 10)$ would give the same answer with nine terms instead of two.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'The shape of the binomial',
      blocks: [
        {
          type: 'p',
          text: 'Two parameters control everything. The mean $np$ says where the distribution sits; $p$ says how lopsided it is; and $n$ controls how smooth and wide it looks. Explore before reading the summary below.',
        },
        {
          type: 'graph',
          x: [-1, 41],
          y: [0, 0.42],
          xStep: 5,
          yStep: 0.1,
          height: 280,
          segments: ks(40).map((k) => ({ from: [k, 0] as [number, number], to: [k, binomStem(k)] as [number, string], color: 'blue' as const })),
          vlines: [{ x: 'n*p', label: 'np', color: 'orange' }],
          sliders: [
            { name: 'n', min: 10, max: 40, step: 1, value: 20, label: 'trials $n$' },
            { name: 'p', min: 0.1, max: 0.9, step: 0.05, value: 0.15, label: 'success probability $p$' },
          ],
          readouts: [
            { label: 'mean $np =$', expr: 'n*p', digits: 2 },
            { label: '$\\sigma = \\sqrt{np(1-p)} =$', expr: 'sqrt(n*p*(1 - p))', digits: 3 },
            { label: 'mode $\\lfloor (n+1)p \\rfloor =$', expr: 'floor((n + 1)p)', digits: 0 },
            { label: 'skewness $\\frac{1 - 2p}{\\sqrt{np(1-p)}} =$', expr: '(1 - 2p)/sqrt(n*p*(1 - p))', digits: 3 },
          ],
          caption: 'The stems of $\\text{Bin}(n, p)$. Small $p$: piled up near $0$ with a right tail. $p = 0.5$: perfectly symmetric. Large $p$: the mirror image. Raise $n$ with $p$ fixed and the shape becomes a smooth, nearly symmetric bell — a preview of the normal approximation and the central limit theorem.',
        },
        {
          type: 'list',
          items: [
            '**Center:** the mean is $np$ and the most likely value (mode) is $\\lfloor (n+1)p \\rfloor$, always within $1$ of the mean.',
            '**Skew:** the skewness $\\frac{1 - 2p}{\\sqrt{np(1-p)}}$ is positive for $p < \\tfrac{1}{2}$, zero at $p = \\tfrac{1}{2}$, negative for $p > \\tfrac{1}{2}$, and shrinks toward $0$ as $n$ grows.',
            '**Spread:** $\\sigma = \\sqrt{np(1-p)}$ grows like $\\sqrt{n}$, while the mean grows like $n$. So the **proportion** $X/n$ has standard deviation $\\sqrt{p(1-p)/n}$, which shrinks: more games give a sharper win rate.',
          ],
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Win rates and streaks',
          text: 'A player with a true $50\\%$ win rate plays $40$ ranked games: $X \\sim \\text{Bin}(40, 0.5)$ has $\\sigma = \\sqrt{10} \\approx 3.2$ wins, so records anywhere from about $14$–$26$ to $26$–$14$ are routine luck. Matchmaking and rating systems are built to see through exactly this noise, which is why ratings move less as more games accumulate.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'mcq',
      prompt: 'An ace sniper hits each shot with probability $0.9$, independently. For $X$ = hits in $20$ shots, which description of the distribution is right?',
      options: [
        { text: 'Symmetric around $18$, because the binomial is always symmetric', why: 'The binomial is symmetric only when $p = \\tfrac{1}{2}$. Here the values pile up against the maximum $20$.' },
        { text: 'Right-skewed, with a long tail toward $20$', why: 'Values cannot exceed $20$, only $2$ above the mean, so there is no room for a long tail on the right. The long tail points the other way.' },
        { text: 'Left-skewed: bunched near $18$–$20$ with a tail toward lower counts', correct: true, why: 'With $p > \\tfrac{1}{2}$ the skewness $\\frac{1 - 2p}{\\sqrt{np(1-p)}} = \\frac{-0.8}{\\sqrt{1.8}} \\approx -0.60$ is negative: a few bad days produce the low counts.' },
        { text: 'Its mean is $20 \\cdot 0.1 = 2$', why: 'That is the expected number of **misses**. Hits have mean $np = 20(0.9) = 18$.' },
      ],
      explanation: 'The mean is $np = 18$ and the maximum possible is $20$, so the distribution is squeezed against the right wall and trails off to the left: negative skew, $\\gamma \\approx -0.60$. Note that the misses, $20 - X \\sim \\text{Bin}(20, 0.1)$, are the mirror image: right-skewed with mean $2$.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'The geometric distribution: two conventions',
      blocks: [
        {
          type: 'p',
          text: 'The binomial fixes the number of trials and counts successes. Flip that around — keep trying until the first success and count how long it took — and you get the [[dm-geometric-distribution|geometric distribution]]. Unfortunately, textbooks and libraries disagree about **what** to count.',
        },
        {
          type: 'table',
          headers: ['Feature', 'Trials convention (this course)', 'Failures convention'],
          rows: [
            ['Counts', '$X$ = trials up to and including the first success', '$Y = X - 1$ = failures before the first success'],
            ['Values', '$1, 2, 3, \\dots$', '$0, 1, 2, \\dots$'],
            ['PMF', '$p(1-p)^{k-1}$', '$p(1-p)^{k}$'],
            ['Mean', '$\\dfrac{1}{p}$', '$\\dfrac{1-p}{p}$'],
            ['Variance', '$\\dfrac{1-p}{p^2}$', '$\\dfrac{1-p}{p^2}$ (same: a shift doesn\'t change spread)'],
            ['Tail', '$P(X > k) = (1-p)^k$', '$P(Y \\ge k) = (1-p)^k$'],
            ['Used by', 'Discrete Math unit, most probability texts, NumPy and SciPy', 'C++ `std::geometric_distribution` (and `std::negative_binomial_distribution`)'],
          ],
          caption: 'This course always means the **trials** convention by "geometric". When you read a formula or call a library, check which one it uses.',
        },
        {
          type: 'derivation',
          title: '$E[X] = 1/p$ by differentiating a geometric series',
          steps: [
            { tex: 'E[X] = \\sum_{k=1}^{\\infty} k\\,p\\,q^{k-1}, \\qquad q = 1 - p', why: 'Definition of expectation with the trials-convention PMF.' },
            { tex: '\\sum_{k=0}^{\\infty} q^k = \\frac{1}{1 - q} \\implies \\sum_{k=1}^{\\infty} k\\,q^{k-1} = \\frac{1}{(1 - q)^2}', why: 'Differentiate the [[geometric-series|geometric series]] term by term in $q$; a power series may be differentiated inside its interval of convergence $|q| < 1$.' },
            { tex: 'E[X] = \\frac{p}{(1-q)^2} = \\frac{p}{p^2} = \\frac{1}{p}', why: 'Substitute and use $1 - q = p$.' },
          ],
          result: 'Differentiating twice gives $E[X(X-1)] = 2q/p^2$, and then $\\operatorname{Var}(X) = E[X(X-1)] + E[X] - (E[X])^2 = \\frac{2q + p - 1}{p^2} = \\frac{q}{p^2}$.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'An off-by-one bug waiting to happen',
          text: '`std::geometric_distribution<int> d(0.05)` returns the number of **failures**, with mean $19$, not $20$. Code that uses it as "kills until the drop" undercounts by exactly one every time — a bug that no amount of playtesting reveals, because the numbers still look plausible.',
        },
        {
          type: 'p',
          text: 'Like its continuous cousin the exponential distribution (next unit), the geometric is **memoryless**: $P(X > m + k \\mid X > m) = (1-p)^{m+k}/(1-p)^m = P(X > k)$. Twenty dry kills do not make the next one more likely.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'mcq',
      prompt: 'A programmer draws `std::geometric_distribution<int> d(0.2)` samples many times and averages them. What average should they expect?',
      options: [
        { text: '$5$', why: 'That is $1/p$, the mean in the **trials** convention. The C++ library counts failures before the first success, which is one less.' },
        { text: '$4$', correct: true, why: 'In the failures convention the mean is $(1-p)/p = 0.8/0.2 = 4$ — exactly $1$ less than the trials mean $5$.' },
        { text: '$0.2$', why: 'That is the success probability $p$ itself, not a count of trials or failures.' },
        { text: '$20$', why: 'That is the variance in the trials convention, $(1-p)/p^2 = 0.8/0.04 = 20$, not the mean.' },
      ],
      explanation: 'The standard library\'s geometric distribution returns the number of failures $Y$ before the first success, so $E[Y] = (1-p)/p = 4$. If you need "trials until success" ($E[X] = 1/p = 5$), add $1$ to each sample. Always check the convention before trusting a formula or an API.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'The negative binomial: waiting for the $r$-th success',
      blocks: [
        {
          type: 'p',
          text: 'A crafting recipe needs $3$ rare drops, each kill drops one with probability $0.1$. How many kills $X$ does it take? This is the [[stat-negative-binomial-distribution|negative binomial distribution]]: the number of trials until the $r$-th success. The geometric is the case $r = 1$.',
        },
        {
          type: 'derivation',
          title: 'The PMF of the $r$-th success time',
          steps: [
            { tex: '\\{X = k\\} = \\{\\text{trial } k \\text{ succeeds}\\} \\cap \\{\\text{exactly } r - 1 \\text{ successes in trials } 1, \\dots, k-1\\}', why: 'The $r$-th success happens at trial $k$ exactly when trial $k$ is a success and $r - 1$ successes came before it.' },
            { tex: 'P(X = k) = \\binom{k-1}{r-1} p^{r-1}(1-p)^{k-r} \\cdot p', why: 'The two events involve different trials, so they are independent: multiply a binomial probability for the first $k - 1$ trials by $p$ for the last.' },
            { tex: '= \\binom{k-1}{r-1} p^{r}(1-p)^{k-r}, \\qquad k = r, r+1, \\dots', why: 'Combine powers of $p$. The smallest possible value is $k = r$ (every trial a success).' },
            { tex: 'E[X] = \\frac{r}{p}, \\qquad \\operatorname{Var}(X) = \\frac{r(1-p)}{p^2}', why: 'After each success the process starts over, so $X$ is a sum of $r$ independent geometric waits; add $r$ copies of $1/p$ and of $(1-p)/p^2$.' },
          ],
          result: 'For the recipe ($r = 3$, $p = 0.1$): on average $30$ kills, standard deviation $\\sqrt{270} \\approx 16.4$ — a long right tail.',
        },
        {
          type: 'graph',
          x: [0, 80],
          y: [0, 0.12],
          xStep: 10,
          yStep: 0.02,
          height: 260,
          segments: ks(80, 1).map((k) => ({ from: [k, 0] as [number, number], to: [k, nbStem(k)] as [number, string], color: 'purple' as const })),
          vlines: [{ x: 'r/p', label: 'r/p', color: 'orange' }],
          sliders: [
            { name: 'r', min: 2, max: 8, step: 1, value: 3, label: 'successes needed $r$' },
            { name: 'p', min: 0.05, max: 0.25, step: 0.01, value: 0.1, label: 'success probability $p$' },
          ],
          readouts: [
            { label: 'mean $r/p =$', expr: 'r/p', digits: 1 },
            { label: '$\\sigma = \\sqrt{r(1-p)}/p =$', expr: 'sqrt(r*(1 - p))/p', digits: 2 },
          ],
          caption: 'Trials until the $r$-th success (no stems below $k = r$). As $r$ grows the peak moves right and the shape becomes more symmetric, because a sum of more independent waits is smoother. (For $r = 1$, the geometric, the most likely value is always $k = 1$.)',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Turn "within $n$ trials" into a binomial question',
          text: 'Finishing the craft within $20$ kills means getting at least $3$ drops in the first $20$ kills: $P(X \\le 20) = P(\\text{Bin}(20, 0.1) \\ge 3) \\approx 0.323$. Only one player in three is done by kill $20$. Waiting-time questions and counting questions are two views of the same trials.',
        },
        {
          type: 'code',
          title: 'crafting_wait.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdio>
#include <random>

std::mt19937_64 rng(42);
double uniform01() { return (rng() >> 11) * 0x1.0p-53; }   // uniform in [0, 1)

int main() {
    const double p = 0.10;   // rare-drop chance per kill
    const int r = 3;         // drops needed for the craft
    const int N = 1'000'000; // simulated players

    double sum = 0, sumSq = 0;
    int doneBy20 = 0;
    for (int i = 0; i < N; ++i) {
        int kills = 0, drops = 0;
        while (drops < r) {                  // Bernoulli trials until the r-th success
            ++kills;
            if (uniform01() < p) ++drops;
        }
        sum += kills;
        sumSq += double(kills) * kills;
        if (kills <= 20) ++doneBy20;
    }
    double mean = sum / N;
    std::printf("mean kills     %.3f  (exact r/p = 30)\\n", mean);
    std::printf("sd of kills    %.3f  (exact sqrt(r(1-p))/p = 16.432)\\n",
                std::sqrt(sumSq / N - mean * mean));
    std::printf("P(done by 20)  %.4f  (exact 0.3231)\\n", double(doneBy20) / N);

    // The standard library's geometric distribution counts FAILURES before the first success.
    std::geometric_distribution<int> geo(p);
    double total = 0;
    for (int i = 0; i < N; ++i) total += geo(rng);
    std::printf("std::geometric_distribution mean: %.1f  = (1-p)/p, not 1/p\\n", total / N);
}`,
          output: `mean kills     29.988  (exact r/p = 30)
sd of kills    16.430  (exact sqrt(r(1-p))/p = 16.432)
P(done by 20)  0.3236  (exact 0.3231)
std::geometric_distribution mean: 9.0  = (1-p)/p, not 1/p`,
          annotations: [
            { lines: 6, text: 'A uniform double from the top $53$ bits — written by hand so the output is identical with every standard library.' },
            { lines: '16-19', text: 'Simulate the definition directly: kill until the $r$-th drop.' },
            { lines: '31-34', text: 'The library distribution\'s exact samples differ between implementations, but its mean is $(1-p)/p = 9$ on all of them — one less than $1/p$, so every "kill count" built on it is off by one.' },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'numeric',
      prompt: 'Each attempt at a skill check succeeds with probability $0.3$, independently. What is the probability that the **second** success happens on exactly the **fifth** attempt? Four decimals.',
      hint: 'Negative binomial with $r = 2$, $k = 5$: exactly one success in the first $4$ attempts, then a success.',
      label: '$P(X = 5) =$',
      answer: 'nCr(4, 1)*0.3^2*0.7^3',
      answerTex: '\\binom{4}{1}(0.3)^2(0.7)^3 \\approx 0.1235',
      tolerance: 0.00006,
      explanation: 'The fifth attempt must succeed, and exactly one of the first four must succeed: $\\binom{4}{1}(0.3)(0.7)^3 \\cdot 0.3 = 4 \\cdot 0.09 \\cdot 0.343 = 0.12348$. Forgetting that the last trial is fixed and using $\\binom{5}{2}$ instead would count sequences where the second success came earlier.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'concept',
      title: 'The hypergeometric: sampling without replacement',
      blocks: [
        {
          type: 'p',
          text: 'Draw $5$ cards from a shuffled $52$-card deck. Is the number of aces binomial? No: once an ace is drawn, fewer remain, so the draws are **dependent**. Whenever you sample without replacement from a finite population — cards, a lot of manufactured parts, players selected for a survey — the count follows the [[stat-hypergeometric-distribution|hypergeometric distribution]].',
        },
        {
          type: 'definition',
          term: 'Hypergeometric distribution',
          text: 'A population of $N$ items contains $K$ "successes". Draw $n$ items without replacement, all $\\binom{N}{n}$ subsets equally likely, and let $X$ count the successes drawn. Then $$P(X = k) = \\frac{\\binom{K}{k}\\binom{N-K}{n-k}}{\\binom{N}{n}}.$$',
        },
        {
          type: 'derivation',
          title: 'Exactly two aces in a five-card hand',
          steps: [
            { tex: 'N = 52, \\quad K = 4, \\quad n = 5, \\quad k = 2', why: 'Population: the deck; successes: the aces; sample: the hand.' },
            { tex: '\\binom{4}{2}\\binom{48}{3} = 6 \\cdot 17{,}296 = 103{,}776', why: 'Favorable hands: choose $2$ of the $4$ aces and $3$ of the $48$ non-aces (product rule).' },
            { tex: 'P(X = 2) = \\frac{103{,}776}{\\binom{52}{5}} = \\frac{103{,}776}{2{,}598{,}960} \\approx 0.0399', why: 'Divide by the number of equally likely hands.' },
          ],
          result: 'About $4\\%$. The binomial formula with $p = 4/52$ would give $0.0465$ — wrong by $17\\%$, because it pretends the deck is reshuffled after every card.',
        },
        {
          type: 'p',
          text: 'The mean is the same as for the binomial with $p = K/N$: by symmetry, the $j$-th card drawn is equally likely to be any card in the deck, so each draw is a success with probability $K/N$, and linearity (which needs no independence) gives $E[X] = nK/N$. The variance is different:',
        },
        {
          type: 'theorem',
          name: 'Hypergeometric mean and variance',
          tex: 'E[X] = n\\frac{K}{N}, \\qquad \\operatorname{Var}(X) = n\\frac{K}{N}\\left(1 - \\frac{K}{N}\\right)\\cdot\\frac{N - n}{N - 1}',
          text: 'The last factor is the [[stat-finite-population-correction|finite population correction]]. It is less than $1$, and equals $0$ when $n = N$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why sampling without replacement is *less* variable',
          text: 'Drawing a heart makes the next heart less likely, and missing one makes the next more likely. The draws push against each other, so extreme counts are rarer than with independent draws. In the limit $n = N$ you take the whole deck and the count of hearts is exactly $13$ every time: zero variance, matching the correction factor $\\frac{N - N}{N - 1} = 0$. (The precise statement — negatively correlated indicators — comes in the covariance lesson.)',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Quality control: acceptance sampling',
          text: 'A shipment of $50$ parts contains $5$ defectives. The inspector tests $10$ and accepts the lot if none is defective. $P(\\text{accept}) = \\binom{45}{10}/\\binom{50}{10} \\approx 0.311$, so this plan lets a $10\\%$-defective lot through almost a third of the time. Such sampling plans were standardized by the U.S. military (MIL-STD-105, 1950) and are still how lots of parts and ammunition are inspected.',
        },
      ],
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'numeric',
      prompt: 'A lot of $20$ graphics cards contains $4$ defective ones. A tester picks $5$ cards at random (without replacement). What is the probability that **none** of the $5$ is defective? Four decimals.',
      hint: 'All $5$ must come from the $16$ good cards: $\\binom{16}{5}\\big/\\binom{20}{5}$.',
      label: '$P(X = 0) =$',
      answer: 'nCr(16, 5)/nCr(20, 5)',
      answerTex: '\\frac{4368}{15{,}504} \\approx 0.2817',
      tolerance: 0.00006,
      explanation: 'With $N = 20$, $K = 4$, $n = 5$, $k = 0$: $\\frac{\\binom{4}{0}\\binom{16}{5}}{\\binom{20}{5}} = \\frac{4368}{15{,}504} \\approx 0.2817$. The binomial shortcut $0.8^5 \\approx 0.3277$ overstates it noticeably, because $5$ of $20$ is a quarter of the population — far too large a fraction to ignore the dependence.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'error',
      prompt: 'A student computes the probability of exactly $2$ aces in a $5$-card poker hand. Tap the first wrong line.',
      lines: [
        'Let $X$ = number of aces among the $5$ cards dealt from a full $52$-card deck.',
        'Each card is an ace with probability $\\frac{4}{52}$, independently of the others, so $X \\sim \\text{Bin}(5, \\frac{4}{52})$.',
        '$P(X = 2) = \\binom{5}{2}\\left(\\frac{4}{52}\\right)^2\\left(\\frac{48}{52}\\right)^3$.',
        '$P(X = 2) \\approx 0.0465$.',
      ],
      errorLines: [2],
      explanation: 'Each card *is* an ace with probability $\\frac{4}{52}$ (by symmetry), but the cards are **not independent**: after one ace only $3$ remain among $51$ cards. Without replacement, $X$ is hypergeometric: $P(X = 2) = \\frac{\\binom{4}{2}\\binom{48}{3}}{\\binom{52}{5}} \\approx 0.0399$. Lines 3–4 compute the binomial formula correctly — for the wrong model.',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'concept',
      title: 'When the binomial approximates the hypergeometric',
      blocks: [
        {
          type: 'p',
          text: 'If the population is huge compared with the sample, removing a few items barely changes the proportion of successes, so the draws are *almost* independent and the binomial with $p = K/N$ is an excellent approximation. Polls of $1000$ voters from millions are binomial for all practical purposes. The graph shows the transition.',
        },
        {
          type: 'graph',
          x: [-0.8, 8.8],
          y: [0, 0.5],
          xStep: 1,
          yStep: 0.1,
          height: 260,
          segments: [
            ...ks(8).map((k) => ({ from: [k - 0.13, 0] as [number, number], to: [k - 0.13, hyperStem(k)] as [number, string], color: 'blue' as const })),
            ...ks(8).map((k) => ({ from: [k + 0.13, 0] as [number, number], to: [k + 0.13, binom10Stem(k)] as [number, string], color: 'red' as const })),
          ],
          points: [
            ...ks(8).map((k) => ({ x: k - 0.13, y: hyperStem(k), color: 'blue' as const })),
            ...ks(8).map((k) => ({ x: k + 0.13, y: binom10Stem(k), color: 'red' as const })),
          ],
          sliders: [{ name: 'N', min: 20, max: 500, step: 5, value: 20, label: 'population size $N$ (with $K = N/5$)' }],
          readouts: [
            { label: 'sample fraction $n/N =$', expr: '10/N', digits: 3 },
            { label: 'correction $\\frac{N - n}{N - 1} =$', expr: '(N - 10)/(N - 1)', digits: 3 },
            { label: 'hypergeometric $P(X = 2) =$', expr: 'nCr(N/5, 2)*nCr(N - N/5, 8)/nCr(N, 10)', digits: 4 },
            { label: 'binomial $P(X = 2) =$', expr: 'nCr(10, 2)*0.2^2*0.8^8', digits: 4 },
          ],
          caption: 'Blue: hypergeometric, $n = 10$ draws from $N$ items of which $20\\%$ are successes. Red: $\\text{Bin}(10, 0.2)$. At $N = 20$ (half the population sampled) the blue stems are much more concentrated. By $N = 200$ ($5\\%$ sampled) they nearly coincide.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Rule of thumb',
          text: 'Use the binomial in place of the hypergeometric when the sample is at most about $5\\%$ of the population ($n \\le 0.05N$). Then the correction factor is above $0.95$ and the probabilities agree to two decimals or better. For a $60$-card deck and a $7$-card hand ($12\\%$), use the exact hypergeometric.',
        },
      ],
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'truefalse',
      prompt: 'Drawing $10$ cards **without** replacement gives a more variable number of hearts than drawing $10$ cards **with** replacement (reshuffling each card back in).',
      answer: false,
      explanation: 'It is the other way round. Without replacement the variance is multiplied by $\\frac{N - n}{N - 1} = \\frac{42}{51} \\approx 0.82$: each heart drawn makes the next less likely, so extreme counts are rarer. The means are equal ($10 \\cdot \\frac{13}{52} = 2.5$ hearts either way); only the spread differs.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'concept',
      title: 'Choosing the right model',
      blocks: [
        {
          type: 'p',
          text: 'All four distributions come from yes/no trials. What separates them is **what is fixed** and **what is counted**. Ask these questions in order:',
        },
        {
          type: 'steps',
          items: [
            { title: 'Is the number of trials fixed in advance?', text: 'If yes, you are counting successes. Go to the next question. If no — you keep going until something happens — you are counting trials: geometric for the first success, negative binomial for the $r$-th.' },
            { title: 'Are the trials independent with the same $p$?', text: 'Sampling **with** replacement, coin flips, independent kills: binomial. Sampling **without** replacement from a finite population: hypergeometric (or binomial if the sample is under about $5\\%$ of the population).' },
            { title: 'Is there no natural "number of trials" at all?', text: 'Events scattered in time or space — crashes per day, players joining per minute — have no fixed $n$. That is the Poisson distribution, the subject of the next lesson.' },
          ],
        },
        {
          type: 'table',
          headers: ['Model', 'Fixed', 'Random quantity', 'Mean'],
          rows: [
            ['$\\text{Bin}(n, p)$', '$n$ independent trials', 'number of successes', '$np$'],
            ['Geometric$(p)$', 'stop at 1st success', 'trials needed', '$1/p$'],
            ['Negative binomial$(r, p)$', 'stop at $r$-th success', 'trials needed', '$r/p$'],
            ['Hypergeometric$(N, K, n)$', '$n$ draws, no replacement', 'successes drawn', '$nK/N$'],
          ],
          caption: 'The four trial-based models side by side.',
        },
        {
          type: 'callout',
          variant: 'exam',
          title: 'What instructors look for',
          text: 'Word problems test the model choice more than the arithmetic. State the model and check its assumptions in words ("$n = 12$ fixed, independent, same $p$, so binomial") before computing. The classic traps: "without replacement" hidden in the story, a geometric question phrased as "how many failures", and "at least one" that should be done by complement.',
        },
      ],
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'mcq',
      prompt: 'A trading card game deck has $60$ cards, including $4$ copies of a key card. You draw an opening hand of $7$. Which model fits $X$ = number of copies of the key card in your hand?',
      options: [
        { text: '$\\text{Bin}(7, \\frac{4}{60})$', why: 'The draws are without replacement and $7$ is about $12\\%$ of the deck — too large a fraction to treat the draws as independent.' },
        { text: 'Hypergeometric with $N = 60$, $K = 4$, $n = 7$', correct: true, why: 'A fixed number of draws without replacement from a finite population with $K$ successes is exactly the hypergeometric setting.' },
        { text: 'Geometric with $p = \\frac{4}{60}$', why: 'A geometric variable counts trials until the first success. Here the number of draws is fixed at $7$ and we count successes.' },
        { text: 'Negative binomial with $r = 4$', why: 'That would be the number of draws needed to collect all $4$ copies, not the number in a fixed hand.' },
      ],
      explanation: 'Seven cards drawn without replacement from $60$, of which $4$ are successes: hypergeometric. For example, $P(X \\ge 1) = 1 - \\binom{56}{7}/\\binom{60}{7} \\approx 0.40$. Deck-building tools for card games are hypergeometric calculators.',
    },
    // ------------------------------------------------------------------ 16
    {
      kind: 'fill',
      prompt: 'Complete the summary of the trial-based models.',
      template: 'A binomial count has variance ___. In the trials convention, a geometric waiting time has mean ___, and the trial of the $r$-th success has mean ___.',
      blanks: [{ answers: ['$np(1-p)$'] }, { answers: ['$1/p$'] }, { answers: ['$r/p$'] }],
      wordBank: ['$np(1-p)$', '$np$', '$1/p$', '$(1-p)/p$', '$r/p$', '$rp$', '$r(1-p)/p^2$'],
      explanation: 'Binomial: $n$ independent indicators, each with variance $p(1-p)$, add to $np(1-p)$ ($np$ is the mean). Geometric (trials): $1/p$; the failures convention would give $(1-p)/p$. Negative binomial: a sum of $r$ independent geometric waits, so the mean is $r/p$ — not $rp$, which would mean that needing more successes takes *fewer* trials when $p$ is small. ($r(1-p)/p^2$ is its variance.)',
    },
  ],
  takeaways: [
    '$\\text{Bin}(n, p)$ counts successes in $n$ independent trials; writing $X = \\sum I_j$ gives $E[X] = np$ (linearity) and $\\operatorname{Var}(X) = np(1-p)$ (independence).',
    'The binomial is right-skewed for $p < \\tfrac{1}{2}$, symmetric at $\\tfrac{1}{2}$, left-skewed above, and becomes bell-shaped as $n$ grows.',
    'Geometric: trials until the first success, mean $1/p$, variance $(1-p)/p^2$. The failures convention (used by `std::geometric_distribution`) has mean $(1-p)/p$ — check which one you have.',
    'Negative binomial: trial of the $r$-th success, $P(X = k) = \\binom{k-1}{r-1}p^r(1-p)^{k-r}$, mean $r/p$; and $P(X \\le n) = P(\\text{Bin}(n, p) \\ge r)$.',
    'Hypergeometric: sampling without replacement, $P(X = k) = \\binom{K}{k}\\binom{N-K}{n-k}/\\binom{N}{n}$, mean $nK/N$, variance reduced by $\\frac{N-n}{N-1}$. The binomial approximates it when $n \\le 0.05N$.',
  ],
  reading: [
    {
      title: 'OpenStax — Introductory Statistics',
      url: 'https://openstax.org/details/books/introductory-statistics',
      source: 'openstax',
      note: 'The discrete random variables chapter works through binomial, geometric and hypergeometric word problems step by step.',
    },
    {
      title: 'Wikipedia — Hypergeometric distribution',
      url: 'https://en.wikipedia.org/wiki/Hypergeometric_distribution',
      source: 'wikipedia',
      note: 'Derivations, the variance with the finite population correction, and applications from card games to Fisher\'s exact test.',
    },
    {
      title: 'Wikipedia — Negative binomial distribution',
      url: 'https://en.wikipedia.org/wiki/Negative_binomial_distribution',
      source: 'wikipedia',
      note: 'A useful table of the many conventions (trials versus failures, different parameter names) used across books and software.',
    },
    {
      title: 'MIT OCW 18.05 — Introduction to Probability and Statistics',
      url: 'https://ocw.mit.edu/courses/18-05-introduction-to-probability-and-statistics-spring-2014/',
      source: 'other',
      note: 'Class notes and problem sets on the standard discrete distributions at a calculus-based level.',
    },
  ],
};
