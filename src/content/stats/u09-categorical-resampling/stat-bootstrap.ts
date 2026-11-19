import type { Lesson } from '../../types';

// PMF of Bin(12, 1/2) for the sign-test graph.
const choose = (n: number, k: number): number => {
  let r = 1;
  for (let i = 1; i <= k; i++) r = (r * (n - k + i)) / i;
  return r;
};
const signPmf = Array.from({ length: 13 }, (_, k) => ({ k, p: choose(12, k) / 4096 }));

// Permutation distribution of (mean of "new" group - mean of "old" group) over all 70
// relabelings of the 8 tutorial players (computed by full enumeration).
const permCounts: [number, number][] = [
  [-11, 1], [-10, 1], [-9.5, 1], [-9, 1], [-8.5, 1], [-8, 1], [-7.5, 2], [-6.5, 2], [-6, 1], [-5.5, 3],
  [-4.5, 3], [-4, 1], [-3.5, 2], [-3, 2], [-2.5, 3], [-2, 2], [-1.5, 1], [-1, 4], [-0.5, 2], [0, 2],
  [0.5, 2], [1, 4], [1.5, 1], [2, 2], [2.5, 3], [3, 2], [3.5, 2], [4, 1], [4.5, 3], [5.5, 3],
  [6, 1], [6.5, 2], [7.5, 2], [8, 1], [8.5, 1], [9, 1], [9.5, 1], [10, 1], [11, 1],
];

// A sample of n = 20 from Exp(1) (sorted), for the empirical-CDF graph.
const expSample = [0.01, 0.21, 0.22, 0.3, 0.31, 0.35, 0.54, 0.57, 0.58, 0.71, 0.74, 0.88, 0.9, 0.9, 1.03, 1.07, 1.88, 2.81, 3.14, 3.38];

export const lesson: Lesson = {
  id: 'stat-bootstrap',
  title: 'Nonparametric Methods, Permutation Tests and the Bootstrap',
  summary: 'What to do when the normal-theory assumptions fail: the sign test and rank-sum tests, permutation tests built by enumerating every relabeling, and the bootstrap for standard errors and confidence intervals of any statistic, with why resampling works and where it breaks.',
  minutes: 20,
  objectives: [
    'Recognize when $t$ procedures are unreliable (small skewed samples, outliers, ordinal data) and what a nonparametric method assumes instead',
    'Carry out a sign test with the binomial distribution, and explain the idea of the Wilcoxon rank-sum (Mann–Whitney) test',
    'Run a permutation test by enumerating every relabeling, by hand for tiny samples and in C++ for larger ones',
    'Compute a bootstrap standard error and a percentile confidence interval, and explain the plug-in principle that justifies them',
    'Name the situations where resampling fails: extremes such as the maximum, dependent data, tiny or biased samples',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'When the assumptions fail',
      blocks: [
        {
          type: 'p',
          text: 'The $t$ procedures from the hypothesis-testing unit assume the data come from a normal population, or that $n$ is large enough for the central limit theorem to make $\\bar{x}$ approximately normal. Game data often break both: session lengths are strongly right-skewed, frame times have rare huge spikes, and playtest ratings are ordinal (a $5$ is better than a $4$, but not by a measurable amount).',
        },
        {
          type: 'p',
          text: 'Here is a typical case. A new build is supposed to shorten level load times. Four test machines ran each build (eight independent runs):',
        },
        {
          type: 'table',
          headers: ['build', 'load times (s)', 'mean', 'median'],
          rows: [
            ['old (A)', '$4.1,\\ 4.6,\\ 5.0,\\ 19.7$', '$8.35$', '$4.8$'],
            ['new (B)', '$3.2,\\ 3.5,\\ 3.9,\\ 4.4$', '$3.75$', '$3.7$'],
          ],
          caption: 'The $19.7$ s run hit a cold disk cache: an [[stat-outlier|outlier]], but a real observation.',
        },
        {
          type: 'p',
          text: 'Every new-build time but one beats every old-build time, yet a two-sample $t$-test gives $t = -1.21$ and a two-sided p-value of $0.27$. The single outlier inflates the old build\'s standard deviation so much that the $t$ statistic shrinks. With $n = 4$ per group there is no CLT to rescue us either.',
        },
        {
          type: 'definition',
          term: 'Nonparametric methods',
          text: 'A [[stat-nonparametric-test|nonparametric]] (distribution-free) method does not assume the data follow a particular family such as the normal. It works with **signs**, **ranks** or **relabelings** of the data, whose null distributions can be found by counting, or it lets the data stand in for the unknown population, as the bootstrap does.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'What you give up, and what you gain',
          text: 'If the data really are normal, a $t$-test squeezes slightly more power out of them, because it uses the exact sizes of the values. When the data are skewed, heavy-tailed or contaminated by outliers, the nonparametric test is often **more** powerful, and its p-value is exact rather than an approximation that may be badly off. For a game programmer the rule of thumb is simple: plot the data first; if they look nothing like a bell curve and $n$ is small, reach for the methods in this lesson.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'concept',
      title: 'The sign test',
      blocks: [
        {
          type: 'p',
          text: 'The simplest distribution-free test throws away everything except the **direction** of each observation. Twelve playtesters try both the old and the new control scheme and say which they prefer; $10$ prefer the new one and $2$ the old. Is that evidence of a real preference?',
        },
        {
          type: 'p',
          text: 'If there is no preference, each tester is a fair coin flip, so the number $X$ of "new" votes is [[dm-binomial-distribution|binomial]], $X \\sim \\text{Bin}(12, \\frac12)$. That null distribution needs no assumption about *how strongly* anyone feels, only that testers are independent. This is the [[stat-sign-test|sign test]]; the same idea tests whether a median equals $m_0$ (count observations above $m_0$) or compares paired measurements (count positive differences).',
        },
        {
          type: 'derivation',
          title: 'Sign test: 10 of 12 prefer the new controls',
          steps: [
            { tex: 'H_0: P(\\text{prefer new}) = \\tfrac12, \\qquad X \\sim \\text{Bin}(12, \\tfrac12) \\text{ under } H_0', why: 'No preference means each independent tester is equally likely to pick either scheme. (A tester with no preference at all is a tie and is dropped, reducing $n$.)' },
            { tex: 'P(X \\ge 10) = \\frac{\\binom{12}{10} + \\binom{12}{11} + \\binom{12}{12}}{2^{12}} = \\frac{66 + 12 + 1}{4096} = \\frac{79}{4096}', why: 'Results at least as extreme in the "new" direction: $10$, $11$ or $12$ votes. Each of the $2^{12}$ vote patterns is equally likely.' },
            { tex: 'p = 2 \\cdot \\frac{79}{4096} = \\frac{158}{4096} \\approx 0.039', why: 'Two-sided: a split of $2$ to $10$ the other way would be just as surprising, and $\\text{Bin}(12, \\frac12)$ is symmetric.' },
          ],
          result: 'At $\\alpha = 0.05$ the testers show a real preference for the new controls ($p \\approx 0.039$).',
        },
        {
          type: 'graph',
          x: [-0.8, 12.8],
          y: [0, 0.25],
          xStep: 1,
          yStep: 0.05,
          height: 240,
          segments: signPmf.map(({ k, p }) => ({
            from: [k, 0] as [number, number],
            to: [k, p] as [number, number],
            color: (k >= 10 || k <= 2 ? 'red' : 'blue') as 'red' | 'blue',
          })),
          points: signPmf.map(({ k, p }) => ({ x: k, y: p, color: (k >= 10 || k <= 2 ? 'red' : 'blue') as 'red' | 'blue' })),
          vlines: [{ x: 10, label: 'observed 10', color: 'orange' }],
          caption: 'The null distribution $\\text{Bin}(12, \\frac12)$ of the number of "new" votes. The red stems ($X \\ge 10$ or $X \\le 2$) are at least as extreme as what we saw; their heights add to the two-sided p-value $0.039$.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Robust, but wasteful',
          text: 'The sign test ignores how much better each scheme is. A tester who barely prefers the new controls counts the same as one who loves them. That makes it robust to anything, but it has lower power than tests that also use magnitudes or ranks.',
        },
      ],
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'numeric',
      prompt: 'A new renderer is benchmarked on $10$ levels, each run with both renderers. It is faster on $9$ of the $10$ levels (no ties). Find the **one-sided** sign-test p-value for "the new renderer tends to be faster", to $4$ decimal places.',
      hint: 'Under $H_0$ the number of levels where the new renderer wins is $\\text{Bin}(10, \\frac12)$. Add $P(X = 9)$ and $P(X = 10)$.',
      label: '$p =$',
      answer: '11/1024',
      answerTex: 'p = \\tfrac{11}{1024} \\approx 0.0107',
      tolerance: 0.00006,
      explanation: 'Each level is a paired comparison, so we count the signs of the differences. $P(X \\ge 9) = \\frac{\\binom{10}{9} + \\binom{10}{10}}{2^{10}} = \\frac{10 + 1}{1024} = \\frac{11}{1024} \\approx 0.0107$. The pairing matters: comparing the two renderers on the **same** level removes the large level-to-level differences in frame time, which would swamp a two-sample comparison.',
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'concept',
      title: 'Ranks: the Wilcoxon rank-sum (Mann–Whitney) test',
      blocks: [
        {
          type: 'p',
          text: 'Ranks keep more information than signs but are immune to outliers. Pool both groups, sort, and replace each value by its rank. For the load times:',
        },
        {
          type: 'table',
          headers: ['time (s)', '3.2', '3.5', '3.9', '4.1', '4.4', '4.6', '5.0', '19.7'],
          rows: [
            ['build', 'B', 'B', 'B', 'A', 'B', 'A', 'A', 'A'],
            ['rank', '$1$', '$2$', '$3$', '$4$', '$5$', '$6$', '$7$', '$8$'],
          ],
          caption: 'The outlier $19.7$ simply gets rank $8$. It would get rank $8$ if it were $197$, too.',
        },
        {
          type: 'p',
          text: 'The [[stat-rank-sum-test|Wilcoxon rank-sum test]] uses $W$ = the sum of the new build\'s ranks: $W = 1 + 2 + 3 + 5 = 11$. If the build makes no difference, the eight times are exchangeable, so the four ranks belonging to B are a random $4$-subset of $\\{1, \\dots, 8\\}$, and all $\\binom{8}{4} = 70$ subsets are equally likely.',
        },
        {
          type: 'derivation',
          title: 'Exact p-value by counting subsets',
          steps: [
            { tex: 'W_{\\min} = 1 + 2 + 3 + 4 = 10', why: 'The smallest possible rank sum: B owns the four fastest times.' },
            { tex: '\\{W \\le 11\\} = \\big\\{\\{1,2,3,4\\},\\ \\{1,2,3,5\\}\\big\\}', why: 'Only one other subset has sum $11$: replace the $4$ by a $5$. Any other change raises the sum by at least $2$.' },
            { tex: 'p = P(W \\le 11) = \\frac{2}{70} \\approx 0.029', why: 'One-sided, because the claim was that the new build is *faster* (small ranks). The two-sided p-value is $\\frac{4}{70} \\approx 0.057$.' },
          ],
          result: 'The rank test detects what the $t$-test missed ($0.029$ one-sided vs $0.27$ two-sided for $t$), because one wild value cannot dominate a rank sum.',
        },
        {
          type: 'p',
          text: 'The **Mann–Whitney $U$** statistic is the same test in different clothes: $U = W - W_{\\min} = 11 - 10 = 1$, the number of (B, A) pairs in which the B time is *slower*; here only $4.4 > 4.1$. For larger samples, under $H_0$, $W$ is approximately normal with mean $\\frac{n_1(N + 1)}{2}$ and variance $\\frac{n_1 n_2 (N + 1)}{12}$, where $n_1$ is the size of the group whose ranks you add and $N = n_1 + n_2$. For **paired** data, the Wilcoxon signed-rank test ranks the absolute differences and adds the ranks of the positive ones, a more powerful cousin of the sign test.',
        },
        {
          type: 'callout',
          variant: 'note',
          text: 'Rank tests compare whole distributions. They are often described as "testing medians", but strictly they test whether one group tends to produce larger values than the other. That is a median comparison only when the two distributions have the same shape.',
        },
      ],
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'mcq',
      prompt: 'In the load-time data, the outlier $19.7$ s is changed to $197$ s. What happens to the rank-sum p-value and to the $t$-test p-value?',
      options: [
        {
          text: 'The rank-sum p-value is unchanged; the $t$-test p-value gets even larger',
          correct: true,
          why: 'The ranks are identical ($197$ is still the largest value, rank $8$), so $W$ and its p-value do not move. For the $t$-test, the outlier raises group A\'s SD far more than its mean, so $|t|$ shrinks further and the p-value grows.',
        },
        {
          text: 'Both p-values get smaller, because the old build now looks even slower',
          why: 'The rank sum cannot see *how much* larger $197$ is. The $t$-test\'s denominator grows with the outlier faster than its numerator, so it becomes less significant, not more.',
        },
        {
          text: 'The rank-sum p-value gets smaller; the $t$-test p-value is unchanged',
          why: 'This reverses the roles. Ranks are unchanged by moving the largest value further out; the mean and SD that feed the $t$ statistic both change.',
        },
        {
          text: 'Neither changes, since the same build is still the slowest',
          why: 'The $t$ statistic uses the actual values, so it certainly changes. Only rank-based statistics are unaffected.',
        },
      ],
      explanation: 'A rank statistic depends only on the **order** of the pooled data, so any change that preserves the order leaves it unchanged. The two-sample $t$ statistic is $\\frac{\\bar{x}_B - \\bar{x}_A}{\\text{SE}}$; making the outlier ten times larger raises $\\bar{x}_A$ by about $44$ s but raises $s_A$ by about $89$ s, so $|t|$ falls. This robustness is why rank tests are a standard tool for latency and frame-time comparisons.',
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'concept',
      title: 'Permutation tests: shuffle the labels',
      blocks: [
        {
          type: 'p',
          text: 'The rank-sum test was a special case of a much more general idea. In a randomized experiment, $H_0$ ("the treatment does nothing") says each player\'s outcome would have been the same whichever group they landed in. The group labels are then just an arbitrary split, so **every relabeling is equally likely**. A [[stat-permutation-test|permutation test]] computes the statistic for every relabeling and asks how unusual the real one is.',
        },
        {
          type: 'p',
          text: 'Eight new players were randomly split: four saw a new tutorial, four the old one. Minutes played in the first session:',
        },
        {
          type: 'table',
          headers: ['tutorial', 'minutes', 'mean'],
          rows: [
            ['new', '$22,\\ 25,\\ 31,\\ 38$', '$29$'],
            ['old', '$14,\\ 18,\\ 20,\\ 24$', '$19$'],
          ],
        },
        {
          type: 'derivation',
          title: 'Permutation test for a difference in means',
          steps: [
            { tex: 'D_{\\text{obs}} = \\bar{x}_{\\text{new}} - \\bar{x}_{\\text{old}} = 29 - 19 = 10', why: 'Any statistic works; the difference in means is natural here. $H_a$: the new tutorial increases playtime (one-sided).' },
            { tex: '\\binom{8}{4} = 70 \\text{ ways to choose which 4 players are labelled "new"}', why: 'Under $H_0$ the eight numbers stay fixed and only the labels move. Randomization made all $70$ splits equally likely in the first place.' },
            { tex: 'D = \\frac{S_{\\text{new}}}{4} - \\frac{192 - S_{\\text{new}}}{4} = \\frac{2S_{\\text{new}} - 192}{4}', why: 'The grand total is $192$, so $D$ is determined by the sum $S_{\\text{new}}$ of the four "new" values: large $D$ means large $S_{\\text{new}}$.' },
            { tex: 'D \\ge 10 \\iff S_{\\text{new}} \\ge 116: \\quad \\{38, 31, 25, 24\\} \\ (118), \\ \\{38, 31, 25, 22\\} \\ (116)', why: 'Only two of the $70$ subsets reach $116$: the actual one and the one that swaps $22$ for $24$. Every other subset leaves out $38$, $31$ or $25$ and falls short.' },
            { tex: 'p = \\frac{2}{70} \\approx 0.029', why: 'The fraction of equally likely relabelings at least as extreme as the observed one.' },
          ],
          result: 'Reject $H_0$ at the $5\\%$ level: the new tutorial increased first-session playtime. The p-value is **exact**, with no normality assumption. (A Welch $t$-test gives $0.030$ here: with well-behaved data the two agree.)',
        },
        {
          type: 'graph',
          x: [-12, 13],
          y: [0, 0.065],
          xStep: 2,
          yStep: 0.02,
          height: 240,
          segments: permCounts.map(([d, c]) => ({
            from: [d, 0] as [number, number],
            to: [d, c / 70] as [number, number],
            color: (d >= 10 ? 'red' : 'blue') as 'red' | 'blue',
          })),
          vlines: [{ x: 10, label: 'D = 10', color: 'orange' }],
          caption: 'The **permutation distribution**: the difference in means for all $70$ relabelings (height = fraction of relabelings). It is centred at $0$, as $H_0$ predicts. The two red stems at $10$ and $11$ make up the p-value $\\frac{2}{70}$.',
        },
        {
          type: 'code',
          title: 'permutation_test.cpp',
          runnable: true,
          code: `#include <bit>
#include <cstdio>

int main() {
    // Minutes played in the first session. Players 0-3 got the NEW tutorial, 4-7 the old one.
    const int minutes[8] = {22, 25, 31, 38, 14, 18, 20, 24};
    int total = 0;
    for (int m : minutes) total += m;

    // Work with sums: diff of means = (S_new - S_old)/4 = (2*S_new - total)/4, so compare S_new.
    int observedNew = minutes[0] + minutes[1] + minutes[2] + minutes[3];   // 116
    std::printf("observed difference in means: %.2f minutes\\n", (2.0 * observedNew - total) / 4);

    int relabelings = 0, atLeastAsExtreme = 0;
    for (unsigned mask = 0; mask < 256; ++mask) {          // every subset of the 8 players...
        if (std::popcount(mask) != 4) continue;            // ...that has exactly 4 members
        ++relabelings;
        int s = 0;
        for (int i = 0; i < 8; ++i)
            if (mask & (1u << i)) s += minutes[i];         // these 4 play the role of "new"
        if (s >= observedNew) ++atLeastAsExtreme;
    }
    std::printf("relabelings: %d, at least as extreme: %d\\n", relabelings, atLeastAsExtreme);
    std::printf("exact one-sided p-value: %.4f\\n", double(atLeastAsExtreme) / relabelings);
}`,
          output: `observed difference in means: 10.00 minutes
relabelings: 70, at least as extreme: 2
exact one-sided p-value: 0.0286`,
          annotations: [
            { lines: 10, text: 'With the grand total fixed, the difference in means is an increasing function of the "new" sum, so we can compare integer sums and avoid floating-point ties.' },
            { lines: '15-16', text: 'Each 8-bit mask with exactly four 1 bits is one relabeling: $\\binom{8}{4} = 70$ of the $256$ masks. `std::popcount` (C++20, header `<bit>`) counts the 1 bits.' },
            { lines: '18-21', text: 'Sum the minutes of the players this mask labels "new" and compare with the observed sum.' },
          ],
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Too many relabelings? Sample them',
          text: 'Two groups of $50$ have $\\binom{100}{50} \\approx 10^{29}$ relabelings. Instead, shuffle the labels at random $B = 10{,}000$ times (with [[dm-fisher-yates]]) and use $p \\approx \\frac{1 + \\#\\{D^* \\ge D_{\\text{obs}}\\}}{1 + B}$. The $+1$s count the observed labeling itself and keep the estimate from ever being exactly $0$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'numeric',
      prompt: 'Five players are randomly assigned: three try a new weapon, with scores $5$, $9$, $11$, and two use the old weapon, with scores $4$ and $6$. Using the difference in means (new minus old) and all $\\binom{5}{2} = 10$ relabelings, find the exact **one-sided** permutation p-value for "the new weapon raises scores".',
      hint: 'The total is $35$, so a smaller sum for the two "old" players means a larger difference. The observed "old" sum is $4 + 6 = 10$. How many of the $10$ pairs have sum $\\le 10$?',
      label: '$p =$',
      answer: '2/10',
      answerTex: 'p = \\tfrac{2}{10} = 0.2',
      tolerance: 0.001,
      explanation: 'List the $10$ possible "old" pairs and their sums: $\\{4,5\\}{:}\\ 9$, $\\{4,6\\}{:}\\ 10$, $\\{4,9\\}{:}\\ 13$, $\\{4,11\\}{:}\\ 15$, $\\{5,6\\}{:}\\ 11$, $\\{5,9\\}{:}\\ 14$, $\\{5,11\\}{:}\\ 16$, $\\{6,9\\}{:}\\ 15$, $\\{6,11\\}{:}\\ 17$, $\\{9,11\\}{:}\\ 20$. Only $9$ and $10$ are $\\le 10$, so $p = \\frac{2}{10} = 0.2$. Note how coarse the p-values are with $5$ players: the smallest possible is $\\frac{1}{10}$, so this experiment could never reach $p < 0.05$, however good the weapon.',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'order',
      prompt: 'Put the steps of a permutation test for a randomized two-group experiment in order.',
      lines: [
        'Choose a test statistic, such as the difference in group means',
        'Compute the statistic for the actual group labels',
        'Recompute it for every relabeling (or many random shuffles) of the pooled data',
        'Count the relabelings whose statistic is at least as extreme as the observed one',
        'Divide by the number of relabelings to get the p-value',
      ],
      distractors: ['Resample each group with replacement and recompute the statistic'],
      explanation: 'A permutation test keeps the data fixed and moves only the labels, which is exactly what $H_0$ says is harmless. The distractor describes the bootstrap, which resamples **with replacement** to estimate variability; it does not build a null distribution.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'concept',
      title: 'The bootstrap: resampling your sample',
      blocks: [
        {
          type: 'p',
          text: 'Tests answer "is there an effect?" Often you want "how precise is my estimate?", which is a [[stat-standard-error|standard error]] or a [[stat-confidence-interval|confidence interval]]. For a mean, $\\operatorname{SE} = \\frac{s}{\\sqrt{n}}$. For a median, a $90$th percentile of frame times, a ratio of two means or a [[stat-trimmed-mean|trimmed mean]], there is no simple formula. Ideally you would draw thousands of new samples from the population and watch the statistic vary. You can\'t, but you can do the next best thing.',
        },
        {
          type: 'definition',
          term: 'The bootstrap',
          text: 'Given data $x_1, \\dots, x_n$ and a statistic $\\hat{\\theta}$: draw a **bootstrap sample** of size $n$ from the data **with replacement**, compute $\\hat{\\theta}^*$ on it, and repeat $B$ times (typically $B = 1000$ to $10{,}000$). The [[stat-bootstrap|bootstrap]] standard error is the standard deviation of $\\hat{\\theta}^*_1, \\dots, \\hat{\\theta}^*_B$. The $95\\%$ [[stat-bootstrap-percentile-interval|percentile interval]] runs from the $2.5$th to the $97.5$th percentile of the $\\hat{\\theta}^*$ values.',
        },
        {
          type: 'figure',
          svg: '<svg viewBox="0 0 520 420" xmlns="http://www.w3.org/2000/svg"><defs><marker id="ah" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="currentColor"/></marker></defs><text x="12" y="20" font-size="14" font-weight="700">Original sample</text><text x="12" y="38" font-size="12" class="t-gray">n = 6 session lengths</text><circle cx="180" cy="30" r="17" class="f-blue s-blue" fill-opacity="0.22" stroke-width="2"/><text x="180" y="35" text-anchor="middle" font-size="14" font-weight="700">3</text><circle cx="222" cy="30" r="17" class="f-red s-red" fill-opacity="0.22" stroke-width="2"/><text x="222" y="35" text-anchor="middle" font-size="14" font-weight="700">7</text><circle cx="264" cy="30" r="17" class="f-green s-green" fill-opacity="0.22" stroke-width="2"/><text x="264" y="35" text-anchor="middle" font-size="14" font-weight="700">8</text><circle cx="306" cy="30" r="17" class="f-purple s-purple" fill-opacity="0.22" stroke-width="2"/><text x="306" y="35" text-anchor="middle" font-size="14" font-weight="700">12</text><circle cx="348" cy="30" r="17" class="f-orange s-orange" fill-opacity="0.22" stroke-width="2"/><text x="348" y="35" text-anchor="middle" font-size="14" font-weight="700">20</text><circle cx="390" cy="30" r="17" class="f-teal s-teal" fill-opacity="0.22" stroke-width="2"/><text x="390" y="35" text-anchor="middle" font-size="14" font-weight="700">41</text><text x="420" y="35" font-size="14">median <tspan font-weight="700">10</tspan></text><line x1="260" y1="54" x2="260" y2="92" stroke="currentColor" stroke-width="1.5" marker-end="url(#ah)"/><text x="272" y="78" font-size="12" class="t-gray">draw 6 values WITH replacement</text><text x="12" y="123" font-size="13">resample 1</text><circle cx="180" cy="118" r="17" class="f-red s-red" fill-opacity="0.22" stroke-width="2"/><text x="180" y="123" text-anchor="middle" font-size="14" font-weight="700">7</text><circle cx="222" cy="118" r="17" class="f-red s-red" fill-opacity="0.22" stroke-width="2"/><text x="222" y="123" text-anchor="middle" font-size="14" font-weight="700">7</text><circle cx="264" cy="118" r="17" class="f-purple s-purple" fill-opacity="0.22" stroke-width="2"/><text x="264" y="123" text-anchor="middle" font-size="14" font-weight="700">12</text><circle cx="306" cy="118" r="17" class="f-orange s-orange" fill-opacity="0.22" stroke-width="2"/><text x="306" y="123" text-anchor="middle" font-size="14" font-weight="700">20</text><circle cx="348" cy="118" r="17" class="f-teal s-teal" fill-opacity="0.22" stroke-width="2"/><text x="348" y="123" text-anchor="middle" font-size="14" font-weight="700">41</text><circle cx="390" cy="118" r="17" class="f-blue s-blue" fill-opacity="0.22" stroke-width="2"/><text x="390" y="123" text-anchor="middle" font-size="14" font-weight="700">3</text><text x="420" y="123" font-size="14">median <tspan font-weight="700" class="t-red">9.5</tspan></text><text x="12" y="173" font-size="13">resample 2</text><circle cx="180" cy="168" r="17" class="f-green s-green" fill-opacity="0.22" stroke-width="2"/><text x="180" y="173" text-anchor="middle" font-size="14" font-weight="700">8</text><circle cx="222" cy="168" r="17" class="f-blue s-blue" fill-opacity="0.22" stroke-width="2"/><text x="222" y="173" text-anchor="middle" font-size="14" font-weight="700">3</text><circle cx="264" cy="168" r="17" class="f-green s-green" fill-opacity="0.22" stroke-width="2"/><text x="264" y="173" text-anchor="middle" font-size="14" font-weight="700">8</text><circle cx="306" cy="168" r="17" class="f-green s-green" fill-opacity="0.22" stroke-width="2"/><text x="306" y="173" text-anchor="middle" font-size="14" font-weight="700">8</text><circle cx="348" cy="168" r="17" class="f-purple s-purple" fill-opacity="0.22" stroke-width="2"/><text x="348" y="173" text-anchor="middle" font-size="14" font-weight="700">12</text><circle cx="390" cy="168" r="17" class="f-orange s-orange" fill-opacity="0.22" stroke-width="2"/><text x="390" y="173" text-anchor="middle" font-size="14" font-weight="700">20</text><text x="420" y="173" font-size="14">median <tspan font-weight="700" class="t-red">8</tspan></text><text x="12" y="223" font-size="13">resample 3</text><circle cx="180" cy="218" r="17" class="f-teal s-teal" fill-opacity="0.22" stroke-width="2"/><text x="180" y="223" text-anchor="middle" font-size="14" font-weight="700">41</text><circle cx="222" cy="218" r="17" class="f-orange s-orange" fill-opacity="0.22" stroke-width="2"/><text x="222" y="223" text-anchor="middle" font-size="14" font-weight="700">20</text><circle cx="264" cy="218" r="17" class="f-purple s-purple" fill-opacity="0.22" stroke-width="2"/><text x="264" y="223" text-anchor="middle" font-size="14" font-weight="700">12</text><circle cx="306" cy="218" r="17" class="f-teal s-teal" fill-opacity="0.22" stroke-width="2"/><text x="306" y="223" text-anchor="middle" font-size="14" font-weight="700">41</text><circle cx="348" cy="218" r="17" class="f-red s-red" fill-opacity="0.22" stroke-width="2"/><text x="348" y="223" text-anchor="middle" font-size="14" font-weight="700">7</text><circle cx="390" cy="218" r="17" class="f-orange s-orange" fill-opacity="0.22" stroke-width="2"/><text x="390" y="223" text-anchor="middle" font-size="14" font-weight="700">20</text><text x="420" y="223" font-size="14">median <tspan font-weight="700" class="t-red">20</tspan></text><text x="260" y="268" text-anchor="middle" font-size="18" class="t-gray">⋮</text><text x="272" y="268" font-size="12" class="t-gray">repeat B = 10,000 times</text><line x1="30" y1="390" x2="314" y2="390" stroke="currentColor" stroke-width="1.5"/><rect x="40" y="378" width="21" height="12" class="f-red" fill-opacity="0.6"/><rect x="64" y="360" width="21" height="30" class="f-red" fill-opacity="0.6"/><rect x="88" y="324" width="21" height="66" class="f-red" fill-opacity="0.6"/><rect x="112" y="300" width="21" height="90" class="f-red" fill-opacity="0.6"/><rect x="136" y="312" width="21" height="78" class="f-red" fill-opacity="0.6"/><rect x="160" y="336" width="21" height="54" class="f-red" fill-opacity="0.6"/><rect x="184" y="357" width="21" height="33" class="f-red" fill-opacity="0.6"/><rect x="208" y="372" width="21" height="18" class="f-red" fill-opacity="0.6"/><rect x="232" y="381" width="21" height="9" class="f-red" fill-opacity="0.6"/><rect x="256" y="384" width="21" height="6" class="f-red" fill-opacity="0.6"/><rect x="280" y="387" width="21" height="3" class="f-red" fill-opacity="0.6"/><text x="334" y="330" font-size="13">bootstrap distribution</text><text x="334" y="348" font-size="13">of the median:</text><text x="334" y="370" font-size="12" class="t-gray">its SD ≈ SE(median)</text><text x="334" y="386" font-size="12" class="t-gray">its 2.5%, 97.5% points ≈ CI</text><text x="172.0" y="410" text-anchor="middle" font-size="12" class="t-gray">medians of the resamples</text></svg>',
          alt: 'An original sample of six session lengths, 3, 7, 8, 12, 20 and 41, with median 10. An arrow labelled draw 6 values with replacement leads to three resamples: 7, 7, 12, 20, 41, 3 with median 9.5; 8, 3, 8, 8, 12, 20 with median 8; and 41, 20, 12, 41, 7, 20 with median 20. After repeating 10,000 times, a histogram shows the bootstrap distribution of the median, whose SD estimates the standard error and whose 2.5 and 97.5 percent points give a confidence interval.',
          caption: 'Each resample repeats some values and omits others (same colour = same original observation). The spread of the statistic across resamples stands in for its spread across real samples. (The histogram is schematic.)',
          maxWidth: 500,
        },
        {
          type: 'p',
          text: 'Sampling **with** replacement is essential: drawing $n$ values *without* replacement just reshuffles the data, and every "resample" would have exactly the same median. The program below bootstraps the median of $17$ skewed session lengths, and the mean for comparison.',
        },
        {
          type: 'code',
          title: 'bootstrap.cpp',
          runnable: true,
          code: `#include <algorithm>
#include <cmath>
#include <cstdio>
#include <random>
#include <vector>

std::mt19937_64 rng(42);
double uniform01() { return (rng() >> 11) * 0x1.0p-53; }    // 53 random bits in [0, 1)

double median(std::vector<double> v) {                       // by value: we sort a copy
    std::sort(v.begin(), v.end());
    std::size_t n = v.size();
    return n % 2 ? v[n / 2] : (v[n / 2 - 1] + v[n / 2]) / 2;
}

double mean(const std::vector<double>& v) {
    double s = 0;
    for (double x : v) s += x;
    return s / v.size();
}

double sd(const std::vector<double>& v) {                    // n - 1 in the denominator
    double m = mean(v), ss = 0;
    for (double x : v) ss += (x - m) * (x - m);
    return std::sqrt(ss / (v.size() - 1));
}

int main() {
    // Session lengths (minutes) of 17 playtesters: right-skewed, as session data usually are.
    const std::vector<double> data = {3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 17, 18, 22, 31, 45, 70};
    const std::size_t n = data.size();
    const int B = 10'000;

    std::vector<double> bootMedians, bootMeans, resample(n);
    for (int b = 0; b < B; ++b) {
        for (std::size_t i = 0; i < n; ++i)                  // n draws WITH replacement
            resample[i] = data[std::size_t(uniform01() * n)];
        bootMedians.push_back(median(resample));
        bootMeans.push_back(mean(resample));
    }

    std::printf("sample median %.1f, sample mean %.2f\\n", median(data), mean(data));
    std::printf("bootstrap SE of the mean:   %.2f  (formula s/sqrt(n): %.2f)\\n",
                sd(bootMeans), sd(data) / std::sqrt(double(n)));
    std::printf("bootstrap SE of the median: %.2f  (no simple formula)\\n", sd(bootMedians));

    std::sort(bootMedians.begin(), bootMedians.end());       // the 250th and 9750th smallest
    std::printf("95%% percentile CI for the median: [%.1f, %.1f]\\n",
                bootMedians[B / 40 - 1], bootMedians[B - B / 40 - 1]);
}`,
          output: `sample median 11.0, sample mean 17.18
bootstrap SE of the mean:   4.03  (formula s/sqrt(n): 4.20)
bootstrap SE of the median: 2.83  (no simple formula)
95% percentile CI for the median: [7.0, 18.0]`,
          annotations: [
            { lines: 8, text: 'A uniform number from the raw 64-bit output, so the program prints the same numbers with every compiler (`std::uniform_int_distribution` is not portable across standard libraries).' },
            { lines: '36-37', text: 'One bootstrap sample: $n$ independent draws, each picking one of the $n$ data points with probability $\\frac1n$. Repeats are expected.' },
            { lines: '43-44', text: 'For the mean we can check the bootstrap against the formula $s/\\sqrt{n}$. They agree closely; the next card explains the small gap.' },
            { lines: '47-49', text: 'The percentile interval: sort the $10{,}000$ bootstrap medians and read off the $250$th and $9750$th smallest.' },
          ],
        },
        {
          type: 'p',
          text: 'The bootstrap says the median $11$ minutes has a standard error of about $2.8$ minutes, and a $95\\%$ percentile interval for the population median is $[7, 18]$ minutes. That interval is lopsided around $11$, which honestly reflects the skew in the data; a symmetric "estimate $\\pm 1.96\\,\\operatorname{SE}$" interval would not.',
        },
      ],
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'numeric',
      prompt: 'A bootstrap sample of size $n = 10$ is drawn with replacement from $10$ data points. What is the probability that one particular data point (say, the largest) does **not** appear in it at all? Give $4$ decimal places.',
      hint: 'Each of the $10$ independent draws misses that point with probability $\\frac{9}{10}$.',
      label: '$P =$',
      answer: '0.9^10',
      answerTex: '\\left(\\tfrac{9}{10}\\right)^{10} \\approx 0.3487',
      tolerance: 0.00006,
      explanation: 'The draws are independent and each misses the point with probability $1 - \\frac{1}{10}$, so $P = 0.9^{10} \\approx 0.3487$. In general $(1 - \\frac1n)^n \\to e^{-1} \\approx 0.368$: a typical bootstrap sample leaves out about $37\\%$ of the original points and repeats others. (Machine-learning "bagging" uses those left-out points as a free test set.)',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'Why resampling works',
      blocks: [
        {
          type: 'p',
          text: 'The [[stat-sampling-distribution|sampling distribution]] of $\\hat{\\theta}$ depends on the unknown population distribution $F$. The bootstrap\'s move, called the **plug-in principle**, is to replace $F$ by the best estimate we have: the [[stat-empirical-cdf|empirical distribution]] $\\hat{F}_n$, which puts probability $\\frac1n$ on each data point. Drawing one value at random from the data **is** sampling from $\\hat{F}_n$.',
        },
        {
          type: 'compare',
          left: {
            title: 'Real world (unknowable)',
            tone: 'neutral',
            text: 'Population $F$ → sample of size $n$ → statistic $\\hat{\\theta}$. Repeating this would show how $\\hat{\\theta}$ varies around $\\theta$.',
          },
          right: {
            title: 'Bootstrap world (computable)',
            tone: 'neutral',
            text: '"Population" $\\hat{F}_n$ → resample of size $n$ → $\\hat{\\theta}^*$. Repeating this shows how $\\hat{\\theta}^*$ varies around $\\hat{\\theta}$.',
          },
        },
        {
          type: 'p',
          text: 'If $\\hat{F}_n$ is close to $F$, the two worlds behave alike, and the variability we can simulate on the right mirrors the variability we cannot see on the left. The Glivenko–Cantelli theorem guarantees that $\\hat{F}_n$ converges uniformly to $F$ as $n$ grows: the staircase hugs the true CDF.',
        },
        {
          type: 'graph',
          x: [0, 4.2],
          y: [0, 1.1],
          xStep: 1,
          yStep: 0.25,
          height: 260,
          functions: [{ expr: '1 - exp(-x)', label: 'true CDF $F(x) = 1 - e^{-x}$', color: 'gray', dashed: true }],
          segments: expSample.map((v, i) => ({
            from: [v, (i + 1) / 20] as [number, number],
            to: [i + 1 < expSample.length ? expSample[i + 1] : 4.2, (i + 1) / 20] as [number, number],
            color: 'blue' as const,
          })),
          caption: 'The empirical CDF $\\hat{F}_{20}$ (blue staircase) of $20$ draws from $\\text{Exp}(1)$ (rate $1$), against the true CDF. Each step is $\\frac{1}{20}$ high (the double step at $0.9$ is a tie). The bootstrap samples from the staircase as if it were the population.',
        },
        {
          type: 'derivation',
          title: 'The bootstrap SE of a mean, exactly',
          steps: [
            { tex: 'X^*_1, \\dots, X^*_n \\text{ i.i.d. from } \\hat{F}_n: \\quad E[X^*] = \\bar{x}', why: 'One bootstrap draw takes each data value with probability $\\frac1n$, so its mean is the average of the data.' },
            { tex: '\\operatorname{Var}(X^*) = \\frac{1}{n}\\sum_{i=1}^n (x_i - \\bar{x})^2 = \\hat{\\sigma}^2 = \\frac{n-1}{n}\\,s^2', why: 'Definition of [[dm-variance|variance]] for this discrete distribution. It divides by $n$, not $n - 1$: it is the plug-in variance.' },
            { tex: '\\operatorname{SE}^*(\\bar{X}^*) = \\frac{\\hat{\\sigma}}{\\sqrt{n}} = \\sqrt{\\frac{n-1}{n}}\\,\\frac{s}{\\sqrt{n}}', why: 'Variance of a mean of $n$ independent draws is $\\operatorname{Var}(X^*)/n$.' },
            { tex: '= \\sqrt{\\tfrac{16}{17}} \\cdot 4.20 \\approx 4.08', why: 'For the $17$ session lengths. The simulation gave $4.03$: the remaining gap is Monte Carlo noise from using $B = 10{,}000$ resamples.' },
          ],
          result: 'For the mean the bootstrap reproduces the textbook formula (up to the factor $\\sqrt{(n-1)/n}$, negligible for moderate $n$). That is the reassurance that lets us trust it for statistics with no formula, like the median.',
        },
        {
          type: 'callout',
          variant: 'analogy',
          text: 'Estimating the spread of an estimator from one sample sounds like lifting yourself by your own bootstraps, which is where the name comes from (Bradley Efron, 1979). It is less magical than it sounds: the sample is the best available picture of the population, and the bootstrap asks what would happen if that picture were exactly right.',
        },
      ],
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'truefalse',
      prompt: 'Because the bootstrap generates thousands of resamples, it effectively increases the sample size, so a bootstrap interval from $n = 10$ observations is as reliable as a $t$ interval from $n = 1000$.',
      answer: false,
      explanation: 'Every resample is built only from the original $10$ values: the bootstrap creates no new information about the population. It estimates the variability of a statistic **at the sample size you actually have**, and that variability is large for $n = 10$. Increasing $B$ only removes Monte Carlo noise from that estimate; it cannot shrink the true standard error, which depends on $n$.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'concept',
      title: 'The limits of resampling',
      blocks: [
        {
          type: 'p',
          text: 'The plug-in principle works when $\\hat{F}_n$ is a good stand-in for $F$ **and** the statistic depends smoothly on the distribution. Each failure below breaks one of those conditions.',
        },
        {
          type: 'list',
          items: [
            '**Extremes.** The sample maximum (the worst frame time, the top score) is a poor bootstrap target: a resample can never exceed the observed maximum, so the bootstrap distribution piles up at that one value (see below).',
            '**Small samples.** With $n = 8$ the staircase $\\hat{F}_n$ is a crude picture of $F$, and percentile intervals tend to be too narrow (they cover less than the advertised $95\\%$). Improved versions such as the BCa interval help, but no method fixes a tiny sample.',
            '**Dependent data.** Frame times, latency measurements and daily active users are time series: neighbouring values are correlated. Resampling individual points destroys that correlation and understates the SE. Use a **block bootstrap** that resamples whole stretches of consecutive values.',
            '**Biased samples.** If your telemetry only covers players who opted in, or a survey of troops only hears from those who answered, resampling reproduces the bias perfectly. The bootstrap measures random sampling error, never selection bias.',
            '**Permutation tests need exchangeability.** They are exact for randomized experiments. If the two groups differ in spread as well as centre, a significant result may reflect the spread rather than the means.',
          ],
        },
        {
          type: 'derivation',
          title: 'Why the bootstrap fails for the maximum',
          steps: [
            { tex: 'P\\big(\\max X^* < x_{(n)}\\big) = \\left(1 - \\tfrac{1}{n}\\right)^n', why: 'The resample misses the largest data value $x_{(n)}$ only if all $n$ independent draws miss it.' },
            { tex: 'P\\big(\\max X^* = x_{(n)}\\big) = 1 - \\left(1 - \\tfrac1n\\right)^n \\to 1 - e^{-1} \\approx 0.632', why: 'The complement. The limit is the same one as in the previous question.' },
          ],
          result: 'About $63\\%$ of the bootstrap maxima equal the observed maximum exactly, however large $n$ is. The true sampling distribution of a maximum is continuous, so the bootstrap picture is badly wrong, and it can never reveal how much larger the real worst case might be.',
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'Know the distinction cold: a **permutation test** shuffles labels *without* replacement to build a null distribution and get a p-value; the **bootstrap** resamples *with* replacement to estimate a standard error or confidence interval. Exams also like "when would the bootstrap fail?": extremes, tiny $n$, dependence, biased sampling.',
        },
      ],
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'mcq',
      prompt: 'For which task is the ordinary (resample individual points) bootstrap **least** trustworthy?',
      options: [
        {
          text: 'A $95\\%$ interval for the **worst** frame time a level will ever produce, from $200$ measured frames',
          correct: true,
          why: 'That is the maximum, the classic failure: resamples can never exceed the observed worst frame, and about $63\\%$ of bootstrap maxima equal it exactly. (Measured frames are also a time series, a second problem.)',
        },
        {
          text: 'The standard error of the median session length from $500$ independent players',
          why: 'A median from a large independent sample is a textbook bootstrap success: smooth enough, with plenty of data.',
        },
        {
          text: 'A confidence interval for the mean damage per hit from $1000$ independent hits',
          why: 'The bootstrap works well here, and it will agree with $\\bar{x} \\pm 1.96\\,s/\\sqrt{n}$.',
        },
        {
          text: 'The standard error of a trimmed mean of $300$ independent load times',
          why: 'Trimmed means are smooth statistics with no simple SE formula: a classic good use of the bootstrap.',
        },
      ],
      explanation: 'The bootstrap needs the statistic to depend smoothly on the data distribution and the data to be a good independent sample. A maximum depends on one extreme point that resamples cannot exceed, so its bootstrap distribution is a spike at the observed value. For worst-case questions, use extreme-value methods or simply collect much more data.',
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'error',
      prompt: 'An analyst bootstraps the median frame time from $n = 50$ independent frames. Tap the first line that is wrong.',
      lines: [
        'Compute the sample median of the $50$ frame times: $16.4$ ms',
        'Draw $50$ values from the data **without** replacement to form a resample',
        'Compute the median of the resample; repeat $B = 5000$ times',
        'Take the standard deviation of the $5000$ medians as the SE',
        'Conclude that the SE of the median is $0$ ms, so the median is exact',
      ],
      errorLines: [2],
      explanation: 'Line 2 is the mistake: drawing all $50$ values without replacement just reorders the data, so every "resample" has the same median, $16.4$ ms. That is why line 5 absurdly finds an SE of $0$. Bootstrap samples must be drawn **with** replacement, so that each resample repeats some frames and omits others (about $37\\%$ of them) and the median genuinely varies.',
    },
  ],
  takeaways: [
    'Nonparametric methods replace normality assumptions with counting: signs (sign test, $\\text{Bin}(n, \\frac12)$ under $H_0$), ranks (Wilcoxon rank-sum / Mann–Whitney) or relabelings (permutation tests).',
    'Ranks are immune to outliers: moving the largest value further out changes nothing, while a $t$ statistic can collapse.',
    'A permutation test recomputes the statistic for every equally likely relabeling (or many random shuffles); the p-value is the fraction at least as extreme as observed. It is exact in randomized experiments.',
    'The bootstrap resamples the data with replacement to estimate the SE of any statistic; the $95\\%$ percentile interval uses the $2.5$th and $97.5$th percentiles of the bootstrap replicates.',
    'Resampling works by the plug-in principle ($\\hat{F}_n \\approx F$); it fails for extremes like the maximum, tiny samples, dependent data and biased samples, and it never creates new information.',
  ],
  reading: [
    {
      title: 'Wikipedia: Bootstrapping (statistics)',
      url: 'https://en.wikipedia.org/wiki/Bootstrapping_(statistics)',
      source: 'wikipedia',
      note: 'History (Efron, 1979), the main bootstrap interval types, and the block bootstrap for time series.',
    },
    {
      title: 'Wikipedia: Mann–Whitney U test',
      url: 'https://en.wikipedia.org/wiki/Mann%E2%80%93Whitney_U_test',
      source: 'wikipedia',
      note: 'The rank-sum statistic, its normal approximation and tie corrections, and what exactly it tests.',
    },
    {
      title: 'Seeing Theory (Brown University)',
      url: 'https://seeing-theory.brown.edu/',
      source: 'other',
      note: 'The Frequentist Inference chapter animates the bootstrap: watch resamples being drawn and the bootstrap distribution build up.',
    },
    {
      title: 'MIT OCW 18.05 Introduction to Probability and Statistics',
      url: 'https://ocw.mit.edu/courses/18-05-introduction-to-probability-and-statistics-spring-2014/',
      source: 'other',
      note: 'The bootstrap reading and class notes give the empirical and percentile bootstrap with worked R examples.',
    },
  ],
};
