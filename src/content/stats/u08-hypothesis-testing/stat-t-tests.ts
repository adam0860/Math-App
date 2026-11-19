import type { GraphBlock, Lesson } from '../../types';

// Actual Type I error rate of a nominal 5% one-sample t test when the population is
// exponential (strongly right-skewed). Simulated with numpy: 400,000 samples per n
// (150,000 for n = 100, 200).
const ns = [5, 10, 15, 20, 30, 50, 100, 200];
const twoSided = [0.1167, 0.0989, 0.0888, 0.0811, 0.0734, 0.065, 0.0591, 0.0544];
const lowerTail = [0.1577, 0.1323, 0.1194, 0.1094, 0.0986, 0.0866, 0.0755, 0.0671];
const upperTail = [0.0108, 0.0137, 0.017, 0.0189, 0.022, 0.0267, 0.0329, 0.0358];
const series = (ys: number[], color: 'blue' | 'red' | 'green') => ({
  points: ys.map((y, i) => ({ x: ns[i], y, color })),
  segments: ys.slice(1).map((y, i) => ({ from: [ns[i], ys[i]] as [number, number], to: [ns[i + 1], y] as [number, number], color })),
});
const s2 = series(twoSided, 'blue');
const sl = series(lowerTail, 'red');
const su = series(upperTail, 'green');
const robustGraph: GraphBlock = {
  type: 'graph',
  x: [-12, 210],
  y: [0, 0.17],
  xStep: 25,
  yStep: 0.02,
  height: 260,
  points: [...s2.points, ...sl.points, ...su.points],
  segments: [...s2.segments, ...sl.segments, ...su.segments],
  hlines: [{ y: 0.05, color: 'gray' }],
  caption: 'Actual false-positive rate of a $5\\%$ $t$ test when the data are exponential (strongly right-skewed) and $H_0$ is true, by sample size $n$. **Blue**: two-sided. **Red**: one-sided, $H_a: \\mu < \\mu_0$. **Green**: one-sided, $H_a: \\mu > \\mu_0$. For normal data all three would sit on the gray line at $0.05$. The two-sided rate falls to about $6\\%$ by $n = 100$; the one-sided rates are still well off at $n = 200$.',
};

export const lesson: Lesson = {
  id: 'stat-t-tests',
  title: 't-Tests and Tests for Proportions',
  summary: 'The everyday toolkit of significance tests, each with a full worked example and a decision: one-sample $z$ and $t$ tests for a mean, the one-proportion $z$ test, Welch\'s two-sample $t$ test, the paired $t$ test (before and after a balance patch), and the two-proportion $z$ test — plus the assumptions behind them and how badly things go when those assumptions fail.',
  minutes: 21,
  objectives: [
    'Carry out one-sample $z$ and $t$ tests for a mean and a one-proportion $z$ test, from hypotheses to conclusion',
    'Compare two independent means with Welch\'s $t$ test, including its degrees of freedom',
    'Recognize paired data and analyze it with a paired $t$ test, and explain why pairing increases power',
    'Compare two proportions with the pooled two-proportion $z$ test',
    'Check the assumptions (independence, normality, sample size) and judge how robust each test is to violations',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Testing a mean: the one-sample z and t tests',
      blocks: [
        {
          type: 'p',
          text: 'Every test in this lesson follows the recipe from the previous lesson: hypotheses, a test statistic of the form (estimate $-$ null value) / SE, a p-value from the null distribution, a decision, and a conclusion in context. What changes is the estimate, its standard error, and the reference distribution.',
        },
        {
          type: 'p',
          text: 'For a mean with **known** $\\sigma$, the statistic $z = \\frac{\\bar{x} - \\mu_0}{\\sigma/\\sqrt{n}}$ is compared with $N(0, 1)$: the one-sample $z$ test. With $\\sigma$ unknown — the usual case — use $s$ and compare with the $t$ distribution with $n - 1$ degrees of freedom: the one-sample [[stat-t-distribution|$t$]] test.',
        },
        {
          type: 'theorem',
          name: 'One-sample $t$ test',
          tex: 't = \\frac{\\bar{x} - \\mu_0}{s/\\sqrt{n}}, \\qquad \\text{df} = n - 1',
          text: 'Tests $H_0: \\mu = \\mu_0$. Conditions: a random sample of independent observations from a population that is roughly normal, or $n$ large enough for the CLT (more on that below).',
        },
        {
          type: 'derivation',
          title: 'Is the new build over the 60 fps budget?',
          steps: [
            { tex: 'H_0: \\mu = 16.7 \\text{ ms} \\quad H_a: \\mu > 16.7 \\text{ ms}, \\quad \\alpha = 0.05', why: 'The performance team decided in advance that only a **slower** build triggers action, so the alternative is one-sided. $16.7$ ms per frame is $60$ frames per second.' },
            { tex: 'n = 20,\\quad \\bar{x} = 17.4,\\quad s = 1.5', why: 'Average frame time in each of $20$ benchmark runs. A dot plot of the run averages shows no outliers or strong skew.' },
            { tex: 't = \\frac{17.4 - 16.7}{1.5/\\sqrt{20}} = \\frac{0.7}{0.3354} \\approx 2.09', why: 'The run mean is $2.09$ estimated standard errors above the budget.' },
            { tex: 't_{0.05,\\,19} = 1.729 < 2.09 \\implies p < 0.05 \\ (\\text{software: } p = 0.025)', why: 'Compare with the one-sided critical value for $19$ degrees of freedom; software gives the exact p-value $P(T_{19} \\ge 2.09) \\approx 0.025$.' },
          ],
          result: 'Reject $H_0$ at $\\alpha = 0.05$: the data give significant evidence that the build\'s mean frame time exceeds $16.7$ ms. Effect size: about $0.7$ ms over budget (roughly $57$ fps instead of $60$).',
        },
        {
          type: 'table',
          headers: ['df', '$7$', '$11$', '$19$', '$24$', '$34$', '$64$', '$\\infty$'],
          rows: [
            ['one-sided $5\\%$: $t_{0.05}$', '$1.895$', '$1.796$', '$1.729$', '$1.711$', '$1.691$', '$1.669$', '$1.645$'],
            ['two-sided $5\\%$: $t_{0.025}$', '$2.365$', '$2.201$', '$2.093$', '$2.064$', '$2.032$', '$1.998$', '$1.960$'],
            ['two-sided $1\\%$: $t_{0.005}$', '$3.499$', '$3.106$', '$2.861$', '$2.797$', '$2.728$', '$2.655$', '$2.576$'],
          ],
          caption: '$t$ critical values used in this lesson. Reject when $|t|$ (two-sided) or $t$ in the direction of $H_a$ (one-sided) is at least the critical value.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'numeric',
      prompt: 'A designer wants the average rating of a new quest to differ from the studio benchmark of $50$. From $n = 25$ playtesters: $\\bar{x} = 52.4$, $s = 6.0$. Compute the $t$ statistic for $H_0: \\mu = 50$.',
      hint: 'Estimated SE $= s/\\sqrt{n} = 6/5$.',
      label: '$t =$',
      answer: '(52.4 - 50)/(6/sqrt(25))',
      answerTex: '2.00',
      tolerance: 0.005,
      explanation: '$\\operatorname{SE} = 6/\\sqrt{25} = 1.2$, so $t = \\frac{52.4 - 50}{1.2} = 2.0$ with $24$ degrees of freedom. The test is two-sided ("differ"), and $t_{0.025,\\,24} = 2.064 > 2.0$, so we **fail to reject** at $\\alpha = 0.05$ (software: $p \\approx 0.057$). With $z$ critical values ($1.96$) you would have wrongly rejected — the $t$ distribution\'s heavier tails matter at $n = 25$.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Testing a proportion: the one-proportion z test',
      blocks: [
        {
          type: 'theorem',
          name: 'One-proportion $z$ test',
          tex: 'z = \\frac{\\hat{p} - p_0}{\\sqrt{p_0(1-p_0)/n}}',
          text: 'Tests $H_0: p = p_0$ using the normal approximation. Conditions: independent trials and $np_0 \\ge 10$, $n(1 - p_0) \\ge 10$. The standard error uses the **null** value $p_0$, because the p-value is computed assuming $H_0$ is true. (For small counts use the exact binomial probabilities instead.)',
        },
        {
          type: 'derivation',
          title: 'Is the gacha rate as advertised?',
          steps: [
            { tex: 'H_0: p = 0.02 \\quad H_a: p < 0.02, \\quad \\alpha = 0.05', why: 'A game advertises a $2\\%$ chance of a top-rarity character per pull. Players suspect it is lower. (Many regions legally require published drop rates to be accurate.)' },
            { tex: 'n = 5000,\\quad x = 82,\\quad \\hat{p} = 0.0164', why: 'A logged sample of pulls. Check: $np_0 = 100 \\ge 10$ and $n(1-p_0) = 4900 \\ge 10$.' },
            { tex: '\\operatorname{SE}_0 = \\sqrt{\\frac{0.02 \\cdot 0.98}{5000}} \\approx 0.001980', why: 'Standard error under $H_0$.' },
            { tex: 'z = \\frac{0.0164 - 0.02}{0.001980} \\approx -1.82, \\qquad p = \\Phi(-1.82) \\approx 0.034', why: 'One-sided in the lower direction, so the p-value is the **left** tail. (The exact binomial $P(X \\le 82)$ is $0.035$ — the approximation is good.)' },
          ],
          result: 'Since $0.034 < 0.05$, reject $H_0$: these pulls show significant evidence that the rate is below $2\\%$. Before accusing the publisher, though, ask where the data came from.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'The test assumes a random sample',
          text: 'If the $5000$ pulls came from a fan site where players log their pulls voluntarily, the sample may not be random ([[stat-selection-bias|selection bias]]): frustrated players may be more eager to log a dry streak. A significance test measures only **random** sampling error. It cannot detect, let alone fix, a biased data-collection process — and here the bias would point in exactly the direction of the "finding".',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'numeric',
      prompt: 'A designer claims $25\\%$ of players finish the tutorial dungeon in under $10$ minutes. In a random sample of $400$ players, $116$ did. Test $H_0: p = 0.25$ against $H_a: p \\ne 0.25$. What is the **two-sided p-value**? Give $3$ decimals.',
      hint: '$\\hat{p} = 0.29$; SE under $H_0$ is $\\sqrt{0.25 \\cdot 0.75/400}$. Then $p = 2(1 - \\Phi(|z|))$.',
      label: 'p-value $\\approx$',
      answer: '2(1 - normcdf((116/400 - 0.25)/sqrt(0.25*0.75/400)))',
      answerTex: '0.065',
      tolerance: 0.002,
      explanation: '$\\hat{p} = 116/400 = 0.29$, $\\operatorname{SE}_0 = \\sqrt{0.1875/400} \\approx 0.02165$, so $z = \\frac{0.29 - 0.25}{0.02165} \\approx 1.85$. The two-sided p-value is $2(1 - \\Phi(1.85)) \\approx 2(0.032) \\approx 0.065$. Since $0.065 > 0.05$, we fail to reject: the data are consistent with the designer\'s $25\\%$, though they hint it may be a bit higher. Forgetting to double gives $0.032$ and the opposite decision.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Comparing two independent means: Welch\'s t test',
      blocks: [
        {
          type: 'p',
          text: 'Two independent groups — players randomly assigned to an old or new tutorial — give two sample means. Test $H_0: \\mu_1 = \\mu_2$ with the difference $\\bar{x}_1 - \\bar{x}_2$, whose standard error comes from adding the two variances (the groups are independent):',
        },
        {
          type: 'theorem',
          name: 'Welch\'s two-sample $t$ test',
          tex: 't = \\frac{\\bar{x}_1 - \\bar{x}_2}{\\sqrt{\\dfrac{s_1^2}{n_1} + \\dfrac{s_2^2}{n_2}}}, \\qquad \\nu = \\frac{\\left(\\dfrac{s_1^2}{n_1} + \\dfrac{s_2^2}{n_2}\\right)^2}{\\dfrac{(s_1^2/n_1)^2}{n_1 - 1} + \\dfrac{(s_2^2/n_2)^2}{n_2 - 1}}',
          text: '[[stat-welch-t-test|Welch\'s test]] compares $t$ with a $t$ distribution with $\\nu$ degrees of freedom (the Welch–Satterthwaite approximation; usually not a whole number). A safe hand-calculation shortcut is $\\nu = \\min(n_1, n_2) - 1$, which gives a slightly larger p-value.',
        },
        {
          type: 'derivation',
          title: 'Does the new tutorial lengthen first sessions?',
          steps: [
            { tex: 'H_0: \\mu_{\\text{new}} = \\mu_{\\text{old}} \\quad H_a: \\mu_{\\text{new}} \\ne \\mu_{\\text{old}}, \\quad \\alpha = 0.05', why: 'Two-sided: a shorter first session would also be worth knowing about.' },
            { tex: '\\text{new: } n_1 = 40,\\ \\bar{x}_1 = 34.2,\\ s_1 = 9.5 \\qquad \\text{old: } n_2 = 35,\\ \\bar{x}_2 = 29.8,\\ s_2 = 12.1', why: 'Minutes played in the first session, for randomly assigned new players.' },
            { tex: '\\operatorname{SE} = \\sqrt{\\frac{9.5^2}{40} + \\frac{12.1^2}{35}} = \\sqrt{2.256 + 4.183} \\approx 2.538', why: 'Square each SD, divide by its own $n$, add, and take the root.' },
            { tex: 't = \\frac{34.2 - 29.8}{2.538} \\approx 1.73, \\qquad \\nu \\approx 64.3', why: 'Plug the two variance pieces $2.256$ and $4.183$ into the Welch–Satterthwaite formula.' },
            { tex: '|t| = 1.73 < t_{0.025,\\,64} \\approx 1.998 \\implies p \\approx 0.088', why: 'Not beyond the two-sided critical value; software gives $p \\approx 0.088$.' },
          ],
          result: 'Fail to reject $H_0$ at $\\alpha = 0.05$. The $95\\%$ CI for the difference, $4.4 \\pm 1.998(2.538) = (-0.7, 9.5)$ minutes, shows why: the new tutorial might add nearly ten minutes or slightly reduce play time. The test is inconclusive, not negative — a bigger test is needed.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'What about the pooled t test?',
          text: 'Older textbooks pool the two variances into one estimate, assuming $\\sigma_1 = \\sigma_2$. When that assumption is wrong and the group sizes differ, the pooled test\'s error rate can be badly off. Welch\'s test loses almost nothing when the variances are equal and protects you when they are not, so it is the sensible default (it is R\'s default, too).',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'mcq',
      prompt: 'Thirty players each play $10$ matches with the **old** aiming controls and $10$ matches with the **new** ones (in random order), and you record each player\'s average accuracy under both. Which test fits?',
      options: [
        { text: 'Welch\'s two-sample $t$ test comparing the $30$ "old" averages with the $30$ "new" averages', why: 'Those two lists are not independent: each player appears in both, and a skilled player is accurate with either control scheme. Treating them as independent throws away the pairing and inflates the standard error.' },
        { text: 'A paired $t$ test on the $30$ per-player differences (new $-$ old)', correct: true, why: 'Each player is measured under both conditions, so the natural data are the $30$ differences. A one-sample $t$ test on them removes the large player-to-player variation in skill.' },
        { text: 'A two-proportion $z$ test', why: 'Accuracy averages are quantitative measurements, not counts of yes/no outcomes in two independent groups.' },
        { text: 'A one-proportion $z$ test of whether accuracy is $50\\%$', why: 'The question compares two control schemes; a fixed benchmark of $50\\%$ is not part of it.' },
      ],
      explanation: 'Ask: are the two sets of numbers from **different** subjects (independent samples) or the **same** subjects measured twice (paired)? Same players, two conditions → paired. Randomizing the order (old first or new first) protects against learning effects. The next card shows how much power pairing can add.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'Paired data: before and after a balance patch',
      blocks: [
        {
          type: 'p',
          text: 'A patch nerfs the SMG. To measure the effect on time-to-kill (TTK), eight testers each run the same scripted engagement before and after the patch. Players differ a lot in aim, so TTKs range from about $390$ to $490$ ms. But every tester\'s TTK went **up**.',
        },
        {
          type: 'figure',
          svg: '<svg viewBox="0 0 500 290" xmlns="http://www.w3.org/2000/svg"><line x1="70" y1="250.0" x2="385" y2="250.0" stroke="currentColor" stroke-opacity="0.12"/><text x="62" y="254.0" text-anchor="end" font-size="11" class="t-gray">380</text><line x1="70" y1="213.3" x2="385" y2="213.3" stroke="currentColor" stroke-opacity="0.12"/><text x="62" y="217.3" text-anchor="end" font-size="11" class="t-gray">400</text><line x1="70" y1="176.7" x2="385" y2="176.7" stroke="currentColor" stroke-opacity="0.12"/><text x="62" y="180.7" text-anchor="end" font-size="11" class="t-gray">420</text><line x1="70" y1="140.0" x2="385" y2="140.0" stroke="currentColor" stroke-opacity="0.12"/><text x="62" y="144.0" text-anchor="end" font-size="11" class="t-gray">440</text><line x1="70" y1="103.3" x2="385" y2="103.3" stroke="currentColor" stroke-opacity="0.12"/><text x="62" y="107.3" text-anchor="end" font-size="11" class="t-gray">460</text><line x1="70" y1="66.7" x2="385" y2="66.7" stroke="currentColor" stroke-opacity="0.12"/><text x="62" y="70.7" text-anchor="end" font-size="11" class="t-gray">480</text><line x1="70" y1="30.0" x2="385" y2="30.0" stroke="currentColor" stroke-opacity="0.12"/><text x="62" y="34.0" text-anchor="end" font-size="11" class="t-gray">500</text><text x="22" y="140" text-anchor="middle" font-size="12" transform="rotate(-90 22 140)">time to kill (ms)</text><line x1="150" y1="191.3" x2="330" y2="156.5" class="s-green" stroke-width="1.8"/><circle cx="150" cy="191.3" r="4.5" class="f-blue"/><circle cx="330" cy="156.5" r="4.5" class="f-orange"/><line x1="150" y1="217.0" x2="330" y2="204.2" class="s-green" stroke-width="1.8"/><circle cx="150" cy="217.0" r="4.5" class="f-blue"/><circle cx="330" cy="204.2" r="4.5" class="f-orange"/><line x1="150" y1="112.5" x2="330" y2="85.0" class="s-green" stroke-width="1.8"/><circle cx="150" cy="112.5" r="4.5" class="f-blue"/><circle cx="330" cy="85.0" r="4.5" class="f-orange"/><line x1="150" y1="158.3" x2="330" y2="127.2" class="s-green" stroke-width="1.8"/><circle cx="150" cy="158.3" r="4.5" class="f-blue"/><circle cx="330" cy="127.2" r="4.5" class="f-orange"/><line x1="150" y1="233.5" x2="330" y2="229.8" class="s-green" stroke-width="1.8"/><circle cx="150" cy="233.5" r="4.5" class="f-blue"/><circle cx="330" cy="229.8" r="4.5" class="f-orange"/><line x1="150" y1="85.0" x2="330" y2="50.2" class="s-green" stroke-width="1.8"/><circle cx="150" cy="85.0" r="4.5" class="f-blue"/><circle cx="330" cy="50.2" r="4.5" class="f-orange"/><line x1="150" y1="138.2" x2="330" y2="118.0" class="s-green" stroke-width="1.8"/><circle cx="150" cy="138.2" r="4.5" class="f-blue"/><circle cx="330" cy="118.0" r="4.5" class="f-orange"/><line x1="150" y1="204.2" x2="330" y2="167.5" class="s-green" stroke-width="1.8"/><circle cx="150" cy="204.2" r="4.5" class="f-blue"/><circle cx="330" cy="167.5" r="4.5" class="f-orange"/><text x="150" y="276" text-anchor="middle" font-size="13" class="t-blue">before patch</text><text x="330" y="276" text-anchor="middle" font-size="13" class="t-orange">after patch</text><text x="398" y="96" font-size="12">every tester:</text><text x="398" y="113" font-size="12" class="t-green">TTK went up</text><text x="398" y="140" font-size="12">SD across</text><text x="398" y="157" font-size="12">testers ≈ 30 ms</text><text x="398" y="184" font-size="12">SD of the</text><text x="398" y="201" font-size="12">changes ≈ 6.5 ms</text></svg>',
          alt: 'Slope chart of time-to-kill for 8 testers. Each line connects a tester\'s before value (blue, 389 to 470 ms) to their after value (orange, 391 to 489 ms). All eight lines slope upward. Annotations: SD across testers about 30 ms; SD of the changes about 6.5 ms.',
          caption: 'Each line is one tester. The spread **between** testers is large; the spread of the **changes** is small. A paired analysis looks only at the changes.',
          maxWidth: 480,
        },
        {
          type: 'theorem',
          name: 'Paired $t$ test',
          tex: 'd_i = x_{i,\\text{after}} - x_{i,\\text{before}}, \\qquad t = \\frac{\\bar{d} - 0}{s_d/\\sqrt{n}}, \\qquad \\text{df} = n - 1',
          text: 'The [[stat-paired-t-test|paired $t$ test]] is a one-sample $t$ test on the differences, testing $H_0: \\mu_d = 0$. It needs the differences (not the raw values) to be roughly normal.',
        },
        {
          type: 'derivation',
          title: 'Did the nerf raise time-to-kill?',
          steps: [
            { tex: 'd = (19, 7, 15, 17, 2, 19, 11, 20) \\text{ ms}', why: 'After minus before for each tester: $431 - 412$, $405 - 398$, and so on.' },
            { tex: '\\bar{d} = \\frac{110}{8} = 13.75, \\qquad s_d = \\sqrt{\\frac{297.5}{7}} \\approx 6.52', why: 'Mean and sample SD of the eight differences ($\\sum (d_i - \\bar{d})^2 = 297.5$).' },
            { tex: 't = \\frac{13.75}{6.52/\\sqrt{8}} = \\frac{13.75}{2.305} \\approx 5.97, \\quad \\text{df} = 7', why: 'One-sample $t$ statistic on the differences.' },
            { tex: '5.97 > t_{0.005,\\,7} = 3.499 \\implies p < 0.01 \\ (\\text{software: } p = 0.0006)', why: 'Two-sided $H_a: \\mu_d \\ne 0$; far beyond even the $1\\%$ critical value.' },
          ],
          result: 'Strong evidence that the patch increased TTK: by $13.75$ ms on average, $95\\%$ CI $13.75 \\pm 2.365(2.305) = (8.3, 19.2)$ ms.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why pairing is so powerful',
          text: 'Analyze the same numbers **wrongly**, as two independent groups, and Welch\'s test gives $t = 0.90$, $p = 0.39$ — no evidence at all. The difference of means is the same $13.75$ ms, but the independent-samples SE includes the huge between-player spread (SDs about $29$ and $33$ ms). The paired SE uses only the spread of the changes ($6.5$ ms). In symbols, $\\operatorname{Var}(X - Y) = \\sigma_X^2 + \\sigma_Y^2 - 2\\operatorname{Cov}(X, Y)$: a player\'s before and after TTKs are strongly correlated, and the covariance term cancels most of the variance.',
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'numeric',
      prompt: 'After a matchmaking change, $12$ players\' average queue times changed by $\\bar{d} = -1.8$ minutes (after $-$ before), with $s_d = 2.4$ minutes. Compute the paired $t$ statistic. Give $2$ decimals.',
      hint: 'SE $= s_d/\\sqrt{12}$.',
      label: '$t =$',
      answer: '-1.8/(2.4/sqrt(12))',
      answerTex: '-2.60',
      tolerance: 0.005,
      explanation: '$\\operatorname{SE} = 2.4/\\sqrt{12} \\approx 0.693$, so $t = -1.8/0.693 \\approx -2.60$ with $11$ degrees of freedom. Two-sided: $|t| = 2.60 > t_{0.025,\\,11} = 2.201$, so reject $H_0: \\mu_d = 0$ at $\\alpha = 0.05$ (software: $p \\approx 0.025$). Queue times dropped by about $1.8$ minutes on average. The sign matters: a negative $t$ means the "after" values were smaller.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'concept',
      title: 'Comparing two proportions',
      blocks: [
        {
          type: 'p',
          text: 'Retention, conversion, and completion rates are proportions, and most game A/B tests compare two of them. Under $H_0: p_1 = p_2$ both groups share one success probability, and the best estimate of it uses **all** the data: the **pooled proportion** $\\hat{p} = \\frac{x_1 + x_2}{n_1 + n_2}$.',
        },
        {
          type: 'theorem',
          name: 'Two-proportion $z$ test',
          tex: 'z = \\frac{\\hat{p}_1 - \\hat{p}_2}{\\sqrt{\\hat{p}(1 - \\hat{p})\\left(\\frac{1}{n_1} + \\frac{1}{n_2}\\right)}}',
          text: 'The [[stat-two-proportion-z-test|two-proportion $z$ test]]. Conditions: independent groups (ideally random assignment) and at least about $10$ successes and $10$ failures in each group. For a **confidence interval** use the unpooled SE from the previous unit, since there is no null hypothesis to assume.',
        },
        {
          type: 'derivation',
          title: 'Does a daily login reward improve day-7 retention?',
          steps: [
            { tex: 'H_0: p_B = p_A \\quad H_a: p_B \\ne p_A, \\quad \\alpha = 0.05', why: 'Group A: no reward (control). Group B: daily login reward. New players were randomly assigned, $5000$ per group.' },
            { tex: '\\hat{p}_A = \\frac{1200}{5000} = 0.240, \\quad \\hat{p}_B = \\frac{1310}{5000} = 0.262', why: 'Players still active on day 7.' },
            { tex: '\\hat{p} = \\frac{1200 + 1310}{10000} = 0.251', why: 'Pooled proportion under $H_0$.' },
            { tex: '\\operatorname{SE}_0 = \\sqrt{0.251 \\cdot 0.749\\left(\\tfrac{1}{5000} + \\tfrac{1}{5000}\\right)} \\approx 0.00867', why: 'Standard error of $\\hat{p}_B - \\hat{p}_A$ if $H_0$ is true.' },
            { tex: 'z = \\frac{0.262 - 0.240}{0.00867} \\approx 2.54, \\qquad p = 2(1 - \\Phi(2.54)) \\approx 0.011', why: 'Two-sided p-value.' },
          ],
          result: 'Reject $H_0$: the login reward raised day-7 retention, by $2.2$ percentage points ($95\\%$ CI $0.5$ to $3.9$ points, unpooled SE $0.00867$). Whether $2.2$ points justify the reward\'s cost to the economy is a design decision, not a statistical one.',
        },
      ],
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'numeric',
      prompt: 'A store redesign is A/B tested with $600$ players per group. In the control group $90$ players made a purchase; in the redesign group $120$ did. Compute the pooled two-proportion $z$ statistic (redesign $-$ control). Give $2$ decimals.',
      hint: 'Pooled $\\hat{p} = 210/1200 = 0.175$.',
      label: '$z =$',
      answer: '(120/600 - 90/600)/sqrt(0.175*0.825*(2/600))',
      answerTex: '2.28',
      tolerance: 0.006,
      explanation: '$\\hat{p}_{\\text{redesign}} = 0.20$, $\\hat{p}_{\\text{control}} = 0.15$, pooled $\\hat{p} = 0.175$. $\\operatorname{SE}_0 = \\sqrt{0.175 \\cdot 0.825 \\cdot \\frac{2}{600}} \\approx 0.02194$, so $z = \\frac{0.05}{0.02194} \\approx 2.28$, two-sided $p \\approx 0.023$: a significant $5$-point lift in purchase rate.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'Assumptions and robustness',
      blocks: [
        {
          type: 'p',
          text: 'Every test above rests on three kinds of assumption. They are not equally important.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            '**Independence** (most important, least robust). Observations must not influence each other. Ten matches from the same player are not ten independent observations; nor are sessions from players in the same guild for a social feature. Dependence usually makes the real SE larger than the formula says, so p-values come out too small. Fix it in the design: randomize and analyze at the level of the independent unit (usually the player).',
            '**Normality** (for $t$ procedures). Thanks to the CLT, $t$ tests are robust to moderate non-normality, especially two-sided and with $n \\ge 30$. They are **not** robust to strong skew or outliers in small samples, and one-sided tests suffer most.',
            '**Sample size** (for $z$ tests of proportions). At least about $10$ expected successes and failures per group; otherwise use exact binomial methods. Welch\'s test removes the old **equal-variance** worry for two means.',
          ],
        },
        robustGraph,
        {
          type: 'callout',
          variant: 'code',
          title: 'Frame times are not normal',
          text: 'Frame-time and latency data are right-skewed with occasional huge spikes (shader compiles, garbage collection, packet loss). A $t$ test on raw frame times from a short capture can be dominated by a single hitch. Options: compare [[stat-median|medians]] or high percentiles (the "1% low" fps gamers care about), log-transform the data, or use rank-based and resampling methods such as the [[stat-permutation-test|permutation test]] (next unit). And always plot the data before testing.',
        },
      ],
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'truefalse',
      prompt: 'Thanks to the central limit theorem, a one-sided $t$ test at $\\alpha = 0.05$ on $n = 20$ observations from a strongly right-skewed population has a false-positive rate very close to $5\\%$.',
      answer: false,
      explanation: 'The CLT helps, but slowly for skewed data. With an exponential population and $n = 20$, the simulation shows a false-positive rate of about $11\\%$ for $H_a: \\mu < \\mu_0$ and under $2\\%$ for $H_a: \\mu > \\mu_0$ — both far from $5\\%$. The reason: for right-skewed data, $\\bar{x}$ and $s$ are positively correlated, which skews the $t$ statistic to the left. Two-sided tests partly cancel the two errors ($8\\%$ at $n = 20$), and all versions improve as $n$ grows.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'concept',
      title: 'Choosing the test, and computing it in C++',
      blocks: [
        {
          type: 'table',
          headers: ['Data and question', 'Test', 'Statistic', 'Reference'],
          rows: [
            ['one mean, $\\sigma$ known', 'one-sample $z$', '$\\frac{\\bar{x} - \\mu_0}{\\sigma/\\sqrt{n}}$', '$N(0, 1)$'],
            ['one mean, $\\sigma$ unknown', 'one-sample $t$', '$\\frac{\\bar{x} - \\mu_0}{s/\\sqrt{n}}$', '$t_{n-1}$'],
            ['one proportion', 'one-proportion $z$', '$\\frac{\\hat{p} - p_0}{\\sqrt{p_0(1-p_0)/n}}$', '$N(0, 1)$'],
            ['two independent means', 'Welch $t$', '$\\frac{\\bar{x}_1 - \\bar{x}_2}{\\sqrt{s_1^2/n_1 + s_2^2/n_2}}$', '$t_\\nu$ (Welch df)'],
            ['same subjects measured twice', 'paired $t$', '$\\frac{\\bar{d}}{s_d/\\sqrt{n}}$', '$t_{n-1}$'],
            ['two independent proportions', 'two-proportion $z$', '$\\frac{\\hat{p}_1 - \\hat{p}_2}{\\sqrt{\\hat{p}(1-\\hat{p})(1/n_1 + 1/n_2)}}$', '$N(0, 1)$'],
          ],
          caption: 'The first question is always the design: one group or two, independent or paired, measurements or yes/no outcomes.',
        },
        {
          type: 'p',
          text: 'Statistical software computes $t$ p-values with special functions. You can do it yourself with Calculus II: the two-sided p-value is $1 - 2\\int_0^{|t|} f_T(x)\\,dx$, and Simpson\'s rule evaluates that [[definite-integral]] to many digits. The program below runs Welch\'s test on the tutorial data, the paired test on the TTK data — and then the wrong, unpaired analysis of the same TTK numbers.',
        },
        {
          type: 'code',
          title: 'ttests.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdio>
#include <numbers>
#include <vector>

// Density of the t distribution with k degrees of freedom (k may be fractional).
double tDensity(double x, double k) {
    double logC = std::lgamma((k + 1) / 2) - std::lgamma(k / 2) - 0.5 * std::log(k * std::numbers::pi);
    return std::exp(logC - (k + 1) / 2 * std::log1p(x * x / k));
}

// Two-sided p-value P(|T| >= |t|) = 1 - 2 * integral of the density from 0 to |t|.
double twoSidedP(double t, double k) {
    const int m = 2000;                        // Simpson's rule, m even
    double a = 0, b = std::fabs(t), h = (b - a) / m, sum = tDensity(a, k) + tDensity(b, k);
    for (int i = 1; i < m; ++i) sum += (i % 2 ? 4 : 2) * tDensity(a + i * h, k);
    return 1 - 2 * (sum * h / 3);
}

struct Summary { double mean, sd; int n; };

Summary summarize(const std::vector<double>& x) {
    double s = 0, ss = 0;
    for (double v : x) s += v;
    double m = s / x.size();
    for (double v : x) ss += (v - m) * (v - m);
    return {m, std::sqrt(ss / (x.size() - 1)), int(x.size())};
}

void welch(Summary a, Summary b) {
    double va = a.sd * a.sd / a.n, vb = b.sd * b.sd / b.n;
    double t = (a.mean - b.mean) / std::sqrt(va + vb);
    double df = (va + vb) * (va + vb) / (va * va / (a.n - 1) + vb * vb / (b.n - 1));
    std::printf("Welch:  t = %.3f, df = %.1f, two-sided p = %.4f\\n", t, df, twoSidedP(t, df));
}

int main() {
    // Tutorial A/B test: session minutes, new tutorial vs old (summary statistics).
    welch({34.2, 9.5, 40}, {29.8, 12.1, 35});

    // SMG time-to-kill (ms) for the same 8 testers, before and after the patch.
    std::vector<double> before = {412, 398, 455, 430, 389, 470, 441, 405};
    std::vector<double> after  = {431, 405, 470, 447, 391, 489, 452, 425};
    std::vector<double> diff;
    for (std::size_t i = 0; i < before.size(); ++i) diff.push_back(after[i] - before[i]);
    Summary d = summarize(diff);
    double t = d.mean / (d.sd / std::sqrt(d.n));
    std::printf("Paired: mean diff = %.2f, t = %.3f, df = %d, two-sided p = %.4f\\n",
                d.mean, t, d.n - 1, twoSidedP(t, d.n - 1));

    // The same numbers wrongly analyzed as two independent groups:
    welch(summarize(after), summarize(before));
}`,
          output: `Welch:  t = 1.734, df = 64.3, two-sided p = 0.0877
Paired: mean diff = 13.75, t = 5.966, df = 7, two-sided p = 0.0006
Welch:  t = 0.895, df = 13.8, two-sided p = 0.3861`,
          annotations: [
            { lines: '7-10', text: 'The $t$ density from the sampling-distributions lesson, computed with `std::lgamma` (the log of the gamma function) so that large $k$ does not overflow.' },
            { lines: '13-18', text: 'Simpson\'s rule: weights $1, 4, 2, 4, \\dots, 4, 1$ times $h/3$. The density is smooth, so $2000$ panels give far more accuracy than we print.' },
            { lines: '30-35', text: 'Welch: add the two variance pieces, then the Welch–Satterthwaite degrees of freedom.' },
            { lines: '44-49', text: 'Paired: reduce to differences, then a one-sample $t$ test on them.' },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'order',
      prompt: 'Put the steps of a paired $t$ test in order.',
      lines: [
        'Compute each subject\'s difference $d_i = x_{i,\\text{after}} - x_{i,\\text{before}}$',
        'Compute the mean $\\bar{d}$ and standard deviation $s_d$ of the differences',
        'Compute the standard error $s_d/\\sqrt{n}$',
        'Compute $t = \\bar{d}/(s_d/\\sqrt{n})$',
        'Compare with the $t$ distribution with $n - 1$ degrees of freedom to get the p-value',
        'Decide at level $\\alpha$ and report $\\bar{d}$ with a confidence interval',
      ],
      explanation: 'The paired test reduces two columns of data to one column of differences right away; after that it is exactly a one-sample $t$ test of $\\mu_d = 0$ with $n - 1$ degrees of freedom, where $n$ is the number of **pairs**. Reporting $\\bar{d}$ with its interval gives the effect size, not just the decision.',
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'error',
      prompt: 'An analyst runs Welch\'s test on the tutorial data (new: $n_1 = 40$, $\\bar{x}_1 = 34.2$, $s_1 = 9.5$; old: $n_2 = 35$, $\\bar{x}_2 = 29.8$, $s_2 = 12.1$). Tap the first wrong line.',
      lines: [
        '$H_0: \\mu_1 = \\mu_2$ versus $H_a: \\mu_1 \\ne \\mu_2$.',
        'Difference of means: $34.2 - 29.8 = 4.4$ minutes.',
        '$\\operatorname{SE} = \\sqrt{9.5/40 + 12.1/35} = \\sqrt{0.2375 + 0.3457} \\approx 0.764$.',
        '$t = 4.4/0.764 \\approx 5.76$, so $p < 0.001$: reject $H_0$.',
      ],
      errorLines: [3],
      explanation: 'The standard error adds **variances**, $s^2/n$, not standard deviations over $n$. Correctly, $\\operatorname{SE} = \\sqrt{9.5^2/40 + 12.1^2/35} = \\sqrt{2.256 + 4.183} \\approx 2.538$, so $t \\approx 1.73$ and $p \\approx 0.088$: fail to reject. Forgetting to square the SDs shrank the SE by a factor of more than $3$ and turned an inconclusive result into a "highly significant" one.',
    },
  ],
  takeaways: [
    'One-sample $t$: $t = \\frac{\\bar{x} - \\mu_0}{s/\\sqrt{n}}$ with $n - 1$ df ($z$ with $\\sigma$ known). One proportion: $z = \\frac{\\hat{p} - p_0}{\\sqrt{p_0(1-p_0)/n}}$, using $p_0$ in the SE.',
    'Two independent means: Welch\'s $t = \\frac{\\bar{x}_1 - \\bar{x}_2}{\\sqrt{s_1^2/n_1 + s_2^2/n_2}}$ with Welch–Satterthwaite df (conservatively $\\min(n_1, n_2) - 1$). Prefer it to the pooled test.',
    'Paired data (same subjects twice): one-sample $t$ on the differences. Pairing removes between-subject variation — the TTK example went from $p = 0.39$ (wrong, unpaired) to $p = 0.0006$.',
    'Two proportions: pooled $\\hat{p}$ in the test\'s SE; unpooled SE for the confidence interval.',
    'Independence matters most; $t$ tests tolerate moderate non-normality (especially two-sided, $n \\ge 30$) but not strong skew or outliers in small samples, and one-sided tests are the most fragile.',
    'Always finish with a decision **and** an effect size with a confidence interval, and question how the data were collected.',
  ],
  reading: [
    {
      title: 'OpenStax — Introductory Statistics',
      url: 'https://openstax.org/details/books/introductory-statistics',
      source: 'openstax',
      note: 'The chapters on hypothesis testing with one and two samples work through every test in this lesson, including matched pairs.',
    },
    {
      title: 'Wikipedia — Welch\'s t-test',
      url: 'https://en.wikipedia.org/wiki/Welch%27s_t-test',
      source: 'wikipedia',
      note: 'The statistic, the Welch–Satterthwaite degrees of freedom, and why it is preferred to the pooled test.',
    },
    {
      title: 'Wikipedia — Student\'s t-test',
      url: 'https://en.wikipedia.org/wiki/Student%27s_t-test',
      source: 'wikipedia',
      note: 'One-sample, paired and two-sample versions side by side, with their assumptions.',
    },
    {
      title: 'Khan Academy — Statistics and probability',
      url: 'https://www.khanacademy.org/math/statistics-probability',
      source: 'khan',
      note: 'The significance tests units have many short practice problems for one- and two-sample tests of means and proportions.',
    },
  ],
};
