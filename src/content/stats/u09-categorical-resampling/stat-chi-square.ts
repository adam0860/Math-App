import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'stat-chi-square',
  title: 'Chi-Square Tests',
  summary: 'Testing claims about counts in categories: the chi-square distribution from squared normals, goodness-of-fit tests for dice and loot tables, tests of independence and homogeneity for contingency tables, the conditions that make them valid, and Simpson\'s paradox.',
  minutes: 19,
  objectives: [
    'Build the Pearson statistic $\\chi^2 = \\sum (O - E)^2 / E$ and explain why each squared deviation is divided by its expected count',
    'Describe the chi-square distribution: where it comes from, its density, mean $k$ and variance $2k$, and how its shape changes with degrees of freedom',
    'Run a goodness-of-fit test (is this die or loot table fair?) with the right degrees of freedom',
    'Compute expected counts and degrees of freedom for a contingency table and test independence or homogeneity',
    'Check the conditions (independent observations, counts not percentages, expected counts at least 5), and recognise Simpson\'s paradox in aggregated tables',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Counts in categories: is this die fair?',
      blocks: [
        {
          type: 'p',
          text: 'The tests so far compared **means** and **proportions**. Many questions in games are about a whole set of categories at once: are the six faces of a die equally likely? Does the loot table really drop Common, Rare and Legendary items at the advertised $70\\%$, $25\\%$ and $5\\%$? Does class choice depend on platform? The data are **counts** in categories, and we want one test for all categories together.',
        },
        {
          type: 'p',
          text: 'A playtester\'s physical die (used for a tabletop prototype) is rolled $n = 120$ times. If it is fair, each face has probability $\\frac16$, so the [[dm-expected-value|expected]] count per face is $E = 120 \\cdot \\frac16 = 20$. Here is what came up:',
        },
        {
          type: 'figure',
          svg: '<svg viewBox="0 0 480 270" xmlns="http://www.w3.org/2000/svg"><line x1="70" y1="190" x2="474" y2="190" stroke="currentColor" stroke-width="1.5"/><line x1="70" y1="190" x2="70" y2="12" stroke="currentColor" stroke-width="1.5"/><line x1="65" y1="190" x2="70" y2="190" stroke="currentColor"/><text x="61" y="195" text-anchor="end" font-size="13">0</text><line x1="65" y1="140" x2="70" y2="140" stroke="currentColor"/><text x="61" y="145" text-anchor="end" font-size="13">10</text><line x1="65" y1="90" x2="70" y2="90" stroke="currentColor"/><text x="61" y="95" text-anchor="end" font-size="13">20</text><line x1="65" y1="40" x2="70" y2="40" stroke="currentColor"/><text x="61" y="45" text-anchor="end" font-size="13">30</text><rect x="84.0" y="135" width="44" height="55" class="f-blue" fill-opacity="0.75"/><text x="106.0" y="208" text-anchor="middle" font-size="14" font-weight="600">1</text><text x="106.0" y="230" text-anchor="middle" font-size="13" class="t-blue">11</text><text x="106.0" y="252" text-anchor="middle" font-size="13" class="t-red">4.05</text><rect x="148.0" y="105" width="44" height="85" class="f-blue" fill-opacity="0.75"/><text x="170.0" y="208" text-anchor="middle" font-size="14" font-weight="600">2</text><text x="170.0" y="230" text-anchor="middle" font-size="13" class="t-blue">17</text><text x="170.0" y="252" text-anchor="middle" font-size="13" class="t-red">0.45</text><rect x="212.0" y="110" width="44" height="80" class="f-blue" fill-opacity="0.75"/><text x="234.0" y="208" text-anchor="middle" font-size="14" font-weight="600">3</text><text x="234.0" y="230" text-anchor="middle" font-size="13" class="t-blue">16</text><text x="234.0" y="252" text-anchor="middle" font-size="13" class="t-red">0.80</text><rect x="276.0" y="90" width="44" height="100" class="f-blue" fill-opacity="0.75"/><text x="298.0" y="208" text-anchor="middle" font-size="14" font-weight="600">4</text><text x="298.0" y="230" text-anchor="middle" font-size="13" class="t-blue">20</text><text x="298.0" y="252" text-anchor="middle" font-size="13" class="t-red">0.00</text><rect x="340.0" y="75" width="44" height="115" class="f-blue" fill-opacity="0.75"/><text x="362.0" y="208" text-anchor="middle" font-size="14" font-weight="600">5</text><text x="362.0" y="230" text-anchor="middle" font-size="13" class="t-blue">23</text><text x="362.0" y="252" text-anchor="middle" font-size="13" class="t-red">0.45</text><rect x="404.0" y="25" width="44" height="165" class="f-blue" fill-opacity="0.75"/><text x="426.0" y="208" text-anchor="middle" font-size="14" font-weight="600">6</text><text x="426.0" y="230" text-anchor="middle" font-size="13" class="t-blue">33</text><text x="426.0" y="252" text-anchor="middle" font-size="13" class="t-red">8.45</text><line x1="70" y1="90" x2="474" y2="90" class="s-orange" stroke-width="2.5" stroke-dasharray="7 5"/><text x="78" y="82" font-size="13" class="t-orange">E = 20</text><text x="4" y="208" font-size="12" class="t-gray">face</text><text x="4" y="230" font-size="12" class="t-blue">count O</text><text x="4" y="252" font-size="12" class="t-red">(O−E)²/E</text></svg>',
          alt: 'Bar chart of 120 die rolls: face 1 came up 11 times, face 2 17, face 3 16, face 4 20, face 5 23 and face 6 33. A dashed line marks the expected count 20. Under each bar is its contribution (O minus E) squared over E: 4.05, 0.45, 0.80, 0.00, 0.45 and 8.45.',
          caption: 'Observed counts $O$ against the expected count $E = 20$. The red row is each face\'s contribution to $\\chi^2$; the faces far from $20$ (the $1$ and the $6$) dominate.',
        },
        {
          type: 'definition',
          term: 'Pearson\'s chi-square statistic',
          text: 'For $k$ categories with observed counts $O_i$ and expected counts $E_i$ (computed from the null hypothesis), the [[stat-chi-square-statistic|chi-square statistic]] is\n\n$$\\chi^2 = \\sum_{i=1}^{k} \\frac{(O_i - E_i)^2}{E_i}.$$\n\nIt is $0$ when every count matches its expectation exactly, and grows as the counts drift away.',
        },
        {
          type: 'p',
          text: 'For the die, $\\chi^2 = \\frac{81 + 9 + 16 + 0 + 9 + 169}{20} = \\frac{284}{20} = 14.2$. Is $14.2$ big? To answer that we need the distribution of $\\chi^2$ when the die **is** fair. That is the job of the next two cards.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why square, and why divide by $E$?',
          text: 'Squaring stops positive and negative deviations from cancelling: they always sum to $0$, because $\\sum O_i = \\sum E_i = n$. Dividing by $E_i$ puts the cells on a common scale. A count $O_i$ is (approximately) Poisson or binomial with a small success probability, so its **variance is about $E_i$**. A miss of $10$ is huge when you expected $5$ and trivial when you expected $5000$. So $\\frac{O_i - E_i}{\\sqrt{E_i}}$ is roughly a standardized $z$-score, and $\\chi^2$ is a sum of squared $z$-scores.',
        },
        {
          type: 'derivation',
          title: 'Two categories: $\\chi^2$ is exactly $z^2$',
          steps: [
            { tex: 'O_1 \\sim \\text{Bin}(n, p), \\quad O_2 = n - O_1, \\quad E_1 = np, \\; E_2 = nq \\;\\; (q = 1 - p)', why: 'With two categories (success / failure) the first count is [[dm-binomial-distribution|binomial]] and the second is whatever is left.' },
            { tex: 'O_2 - E_2 = (n - O_1) - (n - np) = -(O_1 - E_1)', why: 'The two deviations are equal and opposite: the constraint $O_1 + O_2 = n$ at work.' },
            { tex: '\\chi^2 = (O_1 - np)^2\\left(\\frac{1}{np} + \\frac{1}{nq}\\right) = \\frac{(O_1 - np)^2}{n p q}', why: 'Factor out the common squared deviation, then $\\frac{1}{np} + \\frac{1}{nq} = \\frac{q + p}{npq} = \\frac{1}{npq}$.' },
            { tex: '= \\left(\\frac{O_1 - np}{\\sqrt{npq}}\\right)^2 = z^2', why: '$\\sqrt{npq}$ is the standard deviation of a binomial count, so this is the square of the usual one-proportion $z$ statistic.' },
          ],
          result: 'With $k = 2$ categories, $\\chi^2$ is the square of one approximately standard normal variable: one degree of freedom, not two. In general the constraint $\\sum O_i = n$ removes one dimension, and $\\chi^2$ behaves like a sum of $k - 1$ squared independent standard normals.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'numeric',
      prompt: 'A gacha banner advertises 3-star, 4-star and 5-star rates of $85\\%$, $13\\%$ and $2\\%$. In $500$ pulls a player records $436$, $59$ and $5$. Compute the chi-square statistic, to $2$ decimal places.',
      hint: 'Expected counts are $500 \\times 0.85$, $500 \\times 0.13$ and $500 \\times 0.02$. Then add up $(O - E)^2/E$.',
      label: '$\\chi^2 =$',
      answer: '121/425 + 36/65 + 25/10',
      answerTex: '\\chi^2 \\approx 3.34',
      tolerance: 0.006,
      explanation: 'The expected counts are $425$, $65$ and $10$. The contributions are $\\frac{(436 - 425)^2}{425} = \\frac{121}{425} \\approx 0.285$, $\\frac{(59 - 65)^2}{65} = \\frac{36}{65} \\approx 0.554$ and $\\frac{(5 - 10)^2}{10} = 2.5$, for a total of $\\chi^2 \\approx 3.34$. Notice the 5-star cell contributes most even though it is only $5$ pulls short: its expected count is small, so a shortfall of $5$ is a large relative miss. (With $2$ degrees of freedom this gives a p-value of about $0.19$, so these pulls are not evidence against the advertised rates.)',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'The chi-square distribution',
      blocks: [
        {
          type: 'definition',
          term: 'Chi-square distribution',
          text: 'If $Z_1, \\dots, Z_k$ are independent standard normal variables, then $Q = Z_1^2 + Z_2^2 + \\cdots + Z_k^2$ has the [[stat-chi-square-distribution|chi-square distribution]] with $k$ **[[stat-degrees-of-freedom|degrees of freedom]]**, written $Q \\sim \\chi^2_k$. Its density is\n\n$$f(x) = \\frac{x^{k/2 - 1}\\,e^{-x/2}}{2^{k/2}\\,\\Gamma(k/2)}, \\qquad x > 0.$$',
        },
        {
          type: 'p',
          text: 'Here $\\Gamma(s) = \\int_0^\\infty u^{s-1}e^{-u}\\,du$ is the gamma function, an [[improper-integral]] that [[integration-by-parts]] shows satisfies $\\Gamma(s + 1) = s\\,\\Gamma(s)$, so $\\Gamma(n) = (n - 1)!$; also $\\Gamma(\\frac12) = \\sqrt{\\pi}$. It is only there to make the density integrate to $1$. The degrees of freedom $k$ count how many independent squared normals are added up.',
        },
        {
          type: 'derivation',
          title: 'The density for $k = 1$, from scratch',
          steps: [
            { tex: 'F(x) = P(Z^2 \\le x) = P(-\\sqrt{x} \\le Z \\le \\sqrt{x}), \\quad x > 0', why: 'Start from the CDF of $Q = Z^2$. Squaring is not one-to-one, so both tails of $Z$ count.' },
            { tex: '= \\Phi(\\sqrt{x}) - \\Phi(-\\sqrt{x}) = 2\\Phi(\\sqrt{x}) - 1', why: 'Symmetry of the standard normal: $\\Phi(-a) = 1 - \\Phi(a)$.' },
            { tex: 'f(x) = F\'(x) = 2\\,\\varphi(\\sqrt{x}) \\cdot \\frac{1}{2\\sqrt{x}}', why: 'Differentiate with the [[chain-rule]]; the [[derivative]] of $\\Phi$ is the normal density $\\varphi(z) = \\frac{1}{\\sqrt{2\\pi}}e^{-z^2/2}$, and $\\frac{d}{dx}\\sqrt{x} = \\frac{1}{2\\sqrt{x}}$.' },
            { tex: '= \\frac{1}{\\sqrt{2\\pi}}\\,x^{-1/2}\\,e^{-x/2}', why: 'Substitute $\\varphi(\\sqrt{x}) = \\frac{1}{\\sqrt{2\\pi}}e^{-x/2}$ and cancel the $2$.' },
            { tex: '= \\frac{x^{1/2 - 1}\\,e^{-x/2}}{2^{1/2}\\,\\Gamma(1/2)}', why: 'Since $\\Gamma(\\frac12) = \\sqrt{\\pi}$, the denominator $\\sqrt{2}\\sqrt{\\pi} = \\sqrt{2\\pi}$. This is the general formula with $k = 1$.' },
          ],
          result: 'Summing $k$ independent copies (by convolution, or with moment generating functions) gives the general formula. Mean and variance follow from one squared normal: $E[Z^2] = \\operatorname{Var}(Z) = 1$ and $E[Z^4] = 3$, so $\\operatorname{Var}(Z^2) = 3 - 1 = 2$. Adding $k$ independent copies: $E[Q] = k$ and $\\operatorname{Var}(Q) = 2k$.',
        },
        {
          type: 'graph',
          x: [0, 30],
          y: [0, 0.5],
          xStep: 5,
          yStep: 0.1,
          functions: [
            { expr: 'x^(k/2 - 1)*exp(-x/2)/(2^(k/2)*gamma(k/2))', label: '$\\chi^2_k$ density', color: 'blue', domain: [0.0001, 30] },
            { expr: 'normpdf((x - k)/sqrt(2k))/sqrt(2k)', label: 'normal $N(k, 2k)$', color: 'gray', dashed: true },
          ],
          vlines: [{ x: 'k', label: 'mean k', color: 'orange' }],
          sliders: [{ name: 'k', min: 1, max: 20, step: 1, value: 3, label: 'degrees of freedom $k$' }],
          readouts: [
            { label: 'mean $= k =$', expr: 'k', digits: 0 },
            { label: 'SD $= \\sqrt{2k} =$', expr: 'sqrt(2k)', digits: 3 },
          ],
          caption: 'For $k = 1$ and $2$ the density is largest at $0$; from $k = 3$ on it rises to a peak at $k - 2$ and has a long right tail. As $k$ grows the curve slides right and becomes more symmetric, approaching the dashed normal curve (the CLT, since $Q$ is a sum of $k$ independent terms).',
        },
        {
          type: 'table',
          headers: ['df $k$', '1', '2', '3', '4', '5', '6', '8', '10'],
          rows: [
            ['$\\chi^2_{0.05,\\,k}$', '3.841', '5.991', '7.815', '9.488', '11.070', '12.592', '15.507', '18.307'],
            ['$\\chi^2_{0.01,\\,k}$', '6.635', '9.210', '11.345', '13.277', '15.086', '16.812', '20.090', '23.209'],
          ],
          caption: 'Upper-tail critical values: $P(\\chi^2_k > \\chi^2_{\\alpha,\\,k}) = \\alpha$. A statistic beyond the value in the $0.05$ row is significant at the $5\\%$ level.',
        },
        {
          type: 'callout',
          variant: 'note',
          text: 'With $k = 2$ the density is $\\frac12 e^{-x/2}$: the exponential distribution $\\text{Exp}(\\frac12)$ (rate $\\frac12$, mean $2$). So a $\\chi^2_2$ tail probability has the closed form $P(Q > q) = e^{-q/2}$, handy for checking a $3$-category test by hand.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'mcq',
      prompt: 'A loot table has $6$ tiers, so a goodness-of-fit test of it has $5$ degrees of freedom. Your data give $\\chi^2 = 4.2$. Before looking anything up, what is the sensible first reaction?',
      options: [
        {
          text: '$4.2$ is a perfectly ordinary value: a $\\chi^2_5$ variable averages $5$, so there is no evidence against the table',
          correct: true,
          why: 'The mean of $\\chi^2_k$ is $k = 5$, and $4.2$ is below it. The p-value is about $0.52$. Only values far into the right tail (beyond $11.07$ at the $5\\%$ level) are evidence against $H_0$.',
        },
        {
          text: 'Any $\\chi^2$ above $0$ means the table is wrong, because a fair table would give $0$',
          why: 'Random sampling almost never produces counts exactly equal to the expected counts. Under $H_0$ the statistic is spread around $k$, not piled up at $0$.',
        },
        {
          text: '$4.2$ is significant, because it exceeds the $\\chi^2_1$ critical value $3.841$',
          why: 'That compares with the wrong distribution. With $6$ categories the reference is $\\chi^2_5$, whose $5\\%$ critical value is $11.070$.',
        },
        {
          text: 'A small $\\chi^2$ like $4.2$ proves the loot table is exactly as advertised',
          why: 'A test can fail to find evidence against $H_0$, but it never proves $H_0$. With modest data, a table that is slightly off would often produce a $\\chi^2$ like this too.',
        },
      ],
      explanation: 'Under $H_0$, $\\chi^2$ behaves like a sum of $k - 1 = 5$ squared standard normals, so its typical size is about $5$ (give or take $\\sqrt{10} \\approx 3.2$). A value of $4.2$ sits in the middle of that distribution. Knowing $E[\\chi^2_k] = k$ is a quick sanity check on any chi-square result.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'The goodness-of-fit test',
      blocks: [
        {
          type: 'p',
          text: 'A [[stat-goodness-of-fit-test|goodness-of-fit test]] asks whether one categorical variable follows a **specified** distribution. The null hypothesis names every category probability; the alternative is simply "at least one is different".',
        },
        {
          type: 'steps',
          items: [
            { title: 'State hypotheses', text: '$H_0$: $P(\\text{category } i) = p_i$ for every $i$; $H_a$: at least one $p_i$ is wrong.' },
            { title: 'Expected counts', text: '[[stat-expected-count|Expected counts]] $E_i = n p_i$. Check every $E_i \\ge 5$.' },
            { title: 'Statistic', text: '$\\chi^2 = \\sum (O_i - E_i)^2 / E_i$.' },
            { title: 'Reference distribution', text: '$\\chi^2_{k-1}$: $k$ categories minus $1$ for the constraint $\\sum O_i = n$.' },
            { title: 'p-value and decision', text: 'The p-value is the **right-tail** area beyond the statistic. Reject $H_0$ if it is below $\\alpha$ (equivalently, if $\\chi^2 > \\chi^2_{\\alpha,\\,k-1}$).' },
          ],
        },
        {
          type: 'p',
          text: 'Only the right tail counts. A small $\\chi^2$ means the counts are *close* to expectation, which is never evidence against $H_0$. (A suspiciously tiny $\\chi^2$ can mean the data were faked or rounded, but that is a different question.)',
        },
        {
          type: 'derivation',
          title: 'Does the loot table match its advertised rates?',
          steps: [
            { tex: 'H_0: p_C = 0.70,\\; p_R = 0.25,\\; p_L = 0.05, \\qquad n = 400', why: 'The designer\'s claimed drop rates, tested against $400$ logged drops.' },
            { tex: 'E = (280,\\, 100,\\, 20), \\qquad O = (298,\\, 92,\\, 10)', why: '$E_i = 400\\,p_i$. All expected counts are at least $5$, and the observed counts add to $400$.' },
            { tex: '\\chi^2 = \\frac{18^2}{280} + \\frac{(-8)^2}{100} + \\frac{(-10)^2}{20} = 1.157 + 0.640 + 5.000 = 6.797', why: 'One term per tier. Half of the expected Legendary drops are missing, and that tier supplies most of the statistic.' },
            { tex: '\\text{df} = 3 - 1 = 2, \\qquad \\chi^2_{0.05,\\,2} = 5.991 < 6.797', why: 'Three tiers, one constraint. The statistic is beyond the $5\\%$ critical value.' },
            { tex: 'p = P(\\chi^2_2 > 6.797) = e^{-6.797/2} \\approx 0.033', why: 'For $2$ degrees of freedom the tail area has the closed form $e^{-q/2}$.' },
          ],
          result: 'At $\\alpha = 0.05$, reject $H_0$: the logged drops are inconsistent with the advertised rates. The cell contributions point to the cause: Legendary items drop about half as often as promised. (Time to check the drop code.)',
        },
        {
          type: 'p',
          text: 'Back to the die: $\\chi^2 = 14.2$ with $\\text{df} = 6 - 1 = 5$. Slide the statistic below to see its p-value as a tail area.',
        },
        {
          type: 'graph',
          x: [0, 25],
          y: [0, 0.18],
          xStep: 5,
          yStep: 0.05,
          functions: [{ expr: 'x^(3/2)*exp(-x/2)/(2^(5/2)*gamma(5/2))', label: '$\\chi^2_5$ density', color: 'blue' }],
          areas: [{ expr: 'x^(3/2)*exp(-x/2)/(2^(5/2)*gamma(5/2))', from: 'q', to: 25, color: 'red' }],
          vlines: [
            { x: 11.07, label: '5% critical value 11.07', color: 'gray' },
            { x: 'q', label: 'q', color: 'red' },
          ],
          sliders: [{ name: 'q', min: 0.5, max: 24, step: 0.1, value: 14.2, label: 'statistic $q$' }],
          readouts: [{ label: 'p-value $P(\\chi^2_5 > q) =$', expr: '2(1 - normcdf(sqrt(q))) + sqrt(2q/pi)*exp(-q/2)*(1 + q/3)', digits: 4 }],
          caption: 'At $q = 14.2$ the red tail has area $0.0144$: if the die were fair, a deviation this large would happen only about $1.4\\%$ of the time. Reject fairness at the $5\\%$ level. Drag $q$ to $11.07$ and the area is exactly $0.05$.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Estimated parameters cost degrees of freedom',
          text: 'Sometimes $H_0$ names a *family* rather than exact probabilities, such as "daily crash counts are $\\text{Pois}(\\lambda)$" with $\\lambda$ estimated from the data by $\\bar{x}$. Each parameter you estimate makes the fit look better than it should, so subtract one degree of freedom for each: $\\text{df} = k - 1 - m$ for $m$ estimated parameters.',
        },
        {
          type: 'code',
          title: 'die_pvalue.cpp',
          runnable: true,
          code: `#include <cstdio>
#include <random>

std::mt19937_64 rng(2024);
double uniform01() { return (rng() >> 11) * 0x1.0p-53; }   // 53 random bits in [0, 1)

// Pearson statistic for 120 rolls (expected count 20 per face), times 20 so it is an integer.
int sumSquaredDeviations(const int counts[6]) {
    int s = 0;
    for (int f = 0; f < 6; ++f) s += (counts[f] - 20) * (counts[f] - 20);
    return s;
}

int main() {
    const int observed[6] = {11, 17, 16, 20, 23, 33};
    const int obsSS = sumSquaredDeviations(observed);          // 284, so chi2 = 284/20
    std::printf("observed chi-square: %.2f\\n", obsSS / 20.0);

    const int trials = 200'000;
    int atLeastAsExtreme = 0;
    for (int t = 0; t < trials; ++t) {
        int counts[6] = {0, 0, 0, 0, 0, 0};
        for (int r = 0; r < 120; ++r) ++counts[int(uniform01() * 6)];   // a FAIR die
        if (sumSquaredDeviations(counts) >= obsSS) ++atLeastAsExtreme;
    }
    std::printf("simulated p-value: %.4f\\n", double(atLeastAsExtreme) / trials);
}`,
          output: `observed chi-square: 14.20
simulated p-value: 0.0149`,
          annotations: [
            { lines: 7, text: 'Comparing integer sums of squared deviations avoids any floating-point tie issues at exactly $\\chi^2 = 14.2$.' },
            { lines: '20-24', text: 'Simulate $200{,}000$ experiments of $120$ rolls of a **fair** die and count how often the statistic is at least as large as ours. That fraction is a [[dm-monte-carlo|Monte Carlo]] p-value.' },
          ],
        },
        {
          type: 'p',
          text: 'The simulation gives $0.0149$, close to the $\\chi^2_5$ answer $0.0144$. The chi-square distribution is a large-sample **approximation** to the exact distribution of the statistic; with every expected count at $20$ it is a good one. Simulating under $H_0$ is a preview of the next lesson\'s resampling methods.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'order',
      prompt: 'Put the steps of a chi-square goodness-of-fit test in order.',
      lines: [
        'State $H_0$, which specifies a probability $p_i$ for every category',
        'Compute expected counts $E_i = n p_i$ and check that each is at least $5$',
        'Compute $\\chi^2 = \\sum (O_i - E_i)^2 / E_i$',
        'Find the right-tail area of $\\chi^2_{k-1}$ beyond the statistic',
        'Compare the p-value with $\\alpha$ and state the conclusion in context',
      ],
      distractors: ['Find the area in both tails of $\\chi^2_{k-1}$'],
      explanation: 'The null hypothesis must come first because it determines the expected counts. Expected counts feed the statistic, the statistic is compared with $\\chi^2_{k-1}$, and the decision comes last. The p-value uses only the **right** tail: small values of $\\chi^2$ mean the data fit $H_0$ well, so they are never evidence against it.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'error',
      prompt: 'A student tests whether the die above is fair. Tap the first line that is wrong.',
      lines: [
        '$H_0$: each face has probability $\\frac16$, so $E_i = 120 \\cdot \\frac16 = 20$ for every face',
        '$\\chi^2 = \\frac{81 + 9 + 16 + 0 + 9 + 169}{20} = 14.2$',
        'There are $6$ faces, so $\\text{df} = 6$',
        'The critical value is $\\chi^2_{0.05,\\,6} = 12.592$, and $14.2 > 12.592$',
        'Reject $H_0$ at the $5\\%$ level: the die appears to be unfair',
      ],
      errorLines: [3],
      explanation: 'Line 3 forgets the constraint: the six counts must add to $120$, so once five are known the sixth is determined. The correct reference is $\\chi^2_{6-1} = \\chi^2_5$ with critical value $11.070$. Here the conclusion survives ($14.2 > 11.070$, p $\\approx 0.014$), but with a statistic between $11.07$ and $12.59$ the wrong df would have flipped the decision.',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'concept',
      title: 'Contingency tables and the test of independence',
      blocks: [
        {
          type: 'p',
          text: 'Now there are **two** categorical variables measured on each player, and the question is whether they are related. A [[stat-contingency-table|contingency table]] cross-tabulates the counts. Here $300$ randomly sampled players are classified by platform and by their main class:',
        },
        {
          type: 'table',
          headers: ['platform', 'Warrior', 'Mage', 'Rogue', 'total'],
          rows: [
            ['**PC**', '$50$ $(60)$', '$70$ $(57.5)$', '$30$ $(32.5)$', '$150$'],
            ['**Console**', '$70$ $(60)$', '$45$ $(57.5)$', '$35$ $(32.5)$', '$150$'],
            ['**total**', '$120$', '$115$', '$65$', '$300$'],
          ],
          caption: 'Observed counts, with expected counts under independence in parentheses.',
        },
        {
          type: 'p',
          text: 'In a [[stat-test-of-independence|test of independence]], $H_0$ says platform and class are independent: $P(\\text{row } i \\text{ and column } j) = P(\\text{row } i)\\,P(\\text{column } j)$ for every cell, exactly the definition of [[dm-independent-events]]. We do not know those marginal probabilities, so we estimate them by the marginal proportions.',
        },
        {
          type: 'derivation',
          title: 'Expected count for (PC, Warrior)',
          steps: [
            { tex: '\\hat{P}(\\text{PC}) = \\frac{150}{300}, \\qquad \\hat{P}(\\text{Warrior}) = \\frac{120}{300}', why: 'Estimate each marginal probability by its observed proportion.' },
            { tex: 'E_{11} = n \\cdot \\hat{P}(\\text{PC})\\,\\hat{P}(\\text{Warrior}) = 300 \\cdot \\frac{150}{300} \\cdot \\frac{120}{300}', why: 'Under independence the cell probability is the product; multiply by $n$ for a count.' },
            { tex: 'E_{ij} = \\frac{(\\text{row } i \\text{ total})(\\text{column } j \\text{ total})}{n} = \\frac{150 \\cdot 120}{300} = 60', why: 'One factor of $n$ cancels, leaving the formula you will use every time.' },
          ],
          result: 'Each expected count is (row total)(column total)/(grand total). The expected counts have the same margins as the observed table.',
        },
        {
          type: 'figure',
          svg: '<svg viewBox="0 0 520 230" xmlns="http://www.w3.org/2000/svg"><text x="160.0" y="28" text-anchor="middle" font-size="14" font-weight="600">Warrior</text><text x="260.0" y="28" text-anchor="middle" font-size="14" font-weight="600">Mage</text><text x="360.0" y="28" text-anchor="middle" font-size="14" font-weight="600">Rogue</text><text x="460.0" y="28" text-anchor="middle" font-size="14" class="t-gray" font-weight="600">total</text><text x="98" y="74.0" text-anchor="end" font-size="14" font-weight="600">PC</text><rect x="110" y="40" width="100" height="58" class="f-green" fill-opacity="0.28" stroke="currentColor" stroke-width="1"/><text x="160.0" y="65" text-anchor="middle" font-size="17" font-weight="700" class="t-green">50</text><text x="160.0" y="85" text-anchor="middle" font-size="12" class="t-green">free choice</text><rect x="210" y="40" width="100" height="58" class="f-green" fill-opacity="0.28" stroke="currentColor" stroke-width="1"/><text x="260.0" y="65" text-anchor="middle" font-size="17" font-weight="700" class="t-green">70</text><text x="260.0" y="85" text-anchor="middle" font-size="12" class="t-green">free choice</text><rect x="310" y="40" width="100" height="58" class="f-gray" fill-opacity="0.12" stroke="currentColor" stroke-width="1"/><text x="360.0" y="65" text-anchor="middle" font-size="17" font-weight="700" >30</text><text x="360.0" y="85" text-anchor="middle" font-size="12" class="t-gray">= 150 − 50 − 70</text><rect x="410" y="40" width="100" height="58" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/><text x="460.0" y="75.0" text-anchor="middle" font-size="16" class="t-gray">150</text><text x="98" y="132.0" text-anchor="end" font-size="14" font-weight="600">Console</text><rect x="110" y="98" width="100" height="58" class="f-gray" fill-opacity="0.12" stroke="currentColor" stroke-width="1"/><text x="160.0" y="123" text-anchor="middle" font-size="17" font-weight="700" >70</text><text x="160.0" y="143" text-anchor="middle" font-size="12" class="t-gray">= 120 − 50</text><rect x="210" y="98" width="100" height="58" class="f-gray" fill-opacity="0.12" stroke="currentColor" stroke-width="1"/><text x="260.0" y="123" text-anchor="middle" font-size="17" font-weight="700" >45</text><text x="260.0" y="143" text-anchor="middle" font-size="12" class="t-gray">= 115 − 70</text><rect x="310" y="98" width="100" height="58" class="f-gray" fill-opacity="0.12" stroke="currentColor" stroke-width="1"/><text x="360.0" y="123" text-anchor="middle" font-size="17" font-weight="700" >35</text><text x="360.0" y="143" text-anchor="middle" font-size="12" class="t-gray">= 65 − 30</text><rect x="410" y="98" width="100" height="58" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/><text x="460.0" y="133.0" text-anchor="middle" font-size="16" class="t-gray">150</text><rect x="110" y="156" width="100" height="40.599999999999994" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/><text x="160.0" y="182.3" text-anchor="middle" font-size="16" class="t-gray">120</text><rect x="210" y="156" width="100" height="40.599999999999994" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/><text x="260.0" y="182.3" text-anchor="middle" font-size="16" class="t-gray">115</text><rect x="310" y="156" width="100" height="40.599999999999994" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/><text x="360.0" y="182.3" text-anchor="middle" font-size="16" class="t-gray">65</text><rect x="410" y="156" width="100" height="40.599999999999994" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/><text x="460.0" y="182.3" text-anchor="middle" font-size="16" class="t-gray">300</text><text x="98" y="182.3" text-anchor="end" font-size="14" class="t-gray" font-weight="600">total</text><text x="310" y="226.6" text-anchor="middle" font-size="14">With the margins fixed, only (2 − 1)(3 − 1) = 2 cells are free.</text></svg>',
          alt: 'The 2 by 3 platform-by-class table with its row totals 150 and 150 and column totals 120, 115 and 65. Only the PC-Warrior cell (50) and PC-Mage cell (70) are marked as free choices; every other cell is forced by the totals, for example PC-Rogue equals 150 minus 50 minus 70.',
          caption: 'Why $\\text{df} = (r - 1)(c - 1)$: once the margins are fixed, choosing $2$ cells determines the rest.',
        },
        {
          type: 'p',
          text: 'The statistic has the same form, summed over all $rc$ cells: $\\chi^2 = \\sum_{\\text{cells}} \\frac{(O - E)^2}{E}$. Its degrees of freedom are the number of cells you can fill freely once the row and column totals are fixed, $(r - 1)(c - 1)$.',
        },
        {
          type: 'derivation',
          title: 'Is class choice independent of platform?',
          steps: [
            { tex: '\\chi^2 = 2\\left[\\frac{10^2}{60} + \\frac{12.5^2}{57.5} + \\frac{2.5^2}{32.5}\\right]', why: 'Both rows have the same expected counts and deviations of the same size (opposite signs), so each term appears twice.' },
            { tex: '= 2\\,[1.667 + 2.717 + 0.192] = 9.153', why: 'The Mage column contributes most: PC players pick Mage much more often than independence predicts.' },
            { tex: '\\text{df} = (2 - 1)(3 - 1) = 2, \\qquad p = e^{-9.153/2} \\approx 0.010', why: '$2$ degrees of freedom, so the closed-form tail $e^{-q/2}$ applies. Also $9.153 > 5.991$.' },
          ],
          result: 'Reject independence at the $5\\%$ level (though not quite at the $1\\%$ level, since $9.153 < 9.210$). Class preference differs by platform, mainly because PC players favour Mages. That is an association, not a cause: perhaps Mage play suits mouse aiming.',
        },
      ],
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'numeric',
      prompt: 'A crash-report sample has $400$ sessions: $240$ on PC and $160$ on console. In total $50$ sessions crashed. If crashing is independent of platform, how many **PC crashes** do you expect?',
      hint: 'Expected count = (row total)(column total)/(grand total).',
      label: '$E =$',
      answer: '30',
      answerTex: '30',
      explanation: '$E = \\frac{240 \\cdot 50}{400} = 30$. In words: $60\\%$ of sessions are on PC, so under independence $60\\%$ of the $50$ crashes, which is $30$, should be PC crashes. The other cells follow from the margins: $20$ console crashes, $210$ PC sessions without a crash and $140$ console sessions without one.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'concept',
      title: 'Homogeneity, conditions and 2 × 2 tables',
      blocks: [
        {
          type: 'p',
          text: 'A [[stat-test-of-homogeneity|test of homogeneity]] uses exactly the same arithmetic but a different design. Instead of one random sample classified two ways, you take **separate samples** from several populations and ask whether the distribution of one categorical variable is the same in each. Example: sample $200$ players from each of three regions and compare their distributions of preferred game mode.',
        },
        {
          type: 'compare',
          left: {
            title: 'Independence',
            tone: 'neutral',
            text: 'One sample; both variables are random. $H_0$: the variables are independent. Example: $300$ players classified by platform **and** class.',
          },
          right: {
            title: 'Homogeneity',
            tone: 'neutral',
            text: 'Several samples; group sizes fixed by design. $H_0$: every group has the same distribution. Example: $200$ players **from each** region, classified by mode.',
          },
        },
        {
          type: 'heading',
          text: 'Conditions for any chi-square test',
        },
        {
          type: 'list',
          items: [
            '**Counts, not percentages or averages.** The statistic depends on $n$: the same proportions with twice the data give twice the $\\chi^2$. Converting to percentages silently pretends $n = 100$.',
            '**Independent observations,** each falling in exactly one cell. Ten matches from the same player are not ten independent observations; neither are repeated pulls counted under several categories.',
            '**Expected counts at least $5$** in every cell (some texts allow a few cells down to $1$ if at least $80\\%$ are $5$ or more). The $\\chi^2$ approximation is a large-sample result; with small expected counts, merge sparse categories or use an exact test (Fisher\'s exact test for $2 \\times 2$ tables, or simulation as in the C++ program above).',
          ],
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the expected counts, not the observed ones, must be large',
          text: 'The approximation rests on each $\\frac{O - E}{\\sqrt{E}}$ being roughly normal under $H_0$. That depends on the **null** distribution of the count, whose mean is $E$; a Poisson or binomial count with a mean of $5$ or more is already reasonably bell-shaped. An observed $0$ in a cell with $E = 20$ is fine: it is simply strong evidence.',
        },
        {
          type: 'p',
          text: 'For a $2 \\times 2$ table, comparing two proportions, the chi-square test and the two-proportion $z$-test are the **same test**: $\\chi^2 = z^2$ (the $k = 2$ derivation earlier is the one-sample version), and the $\\chi^2_1$ p-value equals the two-sided $z$ p-value. For example, crash counts of $30/200$ on build A and $45/200$ on build B give $z = -1.922$ and $\\chi^2 = 3.692 = 1.922^2$, both with p $= 0.055$. The $z$ form has one advantage: it can be one-sided.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Significant is not the same as large',
          text: 'With telemetry from millions of sessions, every chi-square test rejects: a $0.1\\%$ difference in class popularity becomes "highly significant". Always look at the table itself (the cell proportions and which cells drive $\\chi^2$) and ask whether the difference matters for your design.',
        },
      ],
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'truefalse',
      prompt: 'Two regions have the same class percentages as in another study, but you only have the percentages, not the counts. You can still run the chi-square test by treating each region\'s percentages as counts out of $100$.',
      answer: false,
      explanation: 'The chi-square statistic is not scale-free: multiplying every count by $c$ multiplies $\\chi^2$ by $c$. Percentages behave like a sample of exactly $100$ per group, which overstates the evidence if the real samples were smaller and understates it if they were larger. You need the actual counts (or the percentages together with each group\'s $n$, from which you can recover them).',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'concept',
      title: 'Simpson\'s paradox: when the total table lies',
      blocks: [
        {
          type: 'p',
          text: 'You met Simpson\'s paradox in the probability-rules lesson; it matters even more once you start running tests on tables, because a chi-square test on an aggregated table can be confidently wrong. Collapsing a table over a third variable can reverse an association. A studio tests two tutorials. Tutorial A was shown mostly to newcomers to the genre (who finish tutorials less often), and B mostly to veterans. Here is how many players finished:',
        },
        {
          type: 'table',
          headers: ['group', 'Tutorial A', 'Tutorial B'],
          rows: [
            ['**Veterans**', '$81/87 = 93\\%$', '$234/270 = 87\\%$'],
            ['**Newcomers**', '$192/263 = 73\\%$', '$55/80 = 69\\%$'],
            ['**All players**', '$273/350 = 78\\%$', '$289/350 = 83\\%$'],
          ],
          caption: 'A has the higher completion rate in **each** group, yet the lower rate overall.',
        },
        {
          type: 'figure',
          svg: '<svg viewBox="0 0 520 290" xmlns="http://www.w3.org/2000/svg"><line x1="50" y1="200" x2="510" y2="200" stroke="currentColor" stroke-width="1.5"/><line x1="50" y1="200" x2="50" y2="35.0" stroke="currentColor" stroke-width="1.5"/><line x1="45" y1="200.0" x2="50" y2="200.0" stroke="currentColor"/><text x="41" y="204.0" text-anchor="end" font-size="12">0%</text><line x1="45" y1="160.0" x2="50" y2="160.0" stroke="currentColor"/><text x="41" y="164.0" text-anchor="end" font-size="12">25%</text><line x1="45" y1="120.0" x2="50" y2="120.0" stroke="currentColor"/><text x="41" y="124.0" text-anchor="end" font-size="12">50%</text><line x1="45" y1="80.0" x2="50" y2="80.0" stroke="currentColor"/><text x="41" y="84.0" text-anchor="end" font-size="12">75%</text><line x1="45" y1="40.0" x2="50" y2="40.0" stroke="currentColor"/><text x="41" y="44.0" text-anchor="end" font-size="12">100%</text><rect x="65" y="51.0344827586207" width="48" height="148.9655172413793" class="f-blue" fill-opacity="0.8"/><text x="89.0" y="45.0344827586207" text-anchor="middle" font-size="13" font-weight="700" class="t-blue">93%</text><text x="89.0" y="216" text-anchor="middle" font-size="13" font-weight="600">A</text><text x="89.0" y="232" text-anchor="middle" font-size="11" class="t-gray">81/87</text><rect x="121" y="61.333333333333314" width="48" height="138.66666666666669" class="f-orange" fill-opacity="0.8"/><text x="145.0" y="55.333333333333314" text-anchor="middle" font-size="13" font-weight="700" class="t-orange">87%</text><text x="145.0" y="216" text-anchor="middle" font-size="13" font-weight="600">B</text><text x="145.0" y="232" text-anchor="middle" font-size="11" class="t-gray">234/270</text><text x="117" y="255" text-anchor="middle" font-size="14" font-weight="700">Veterans</text><text x="117" y="273" text-anchor="middle" font-size="12" class="t-blue">A wins</text><rect x="215" y="83.19391634980988" width="48" height="116.80608365019012" class="f-blue" fill-opacity="0.8"/><text x="239.0" y="77.19391634980988" text-anchor="middle" font-size="13" font-weight="700" class="t-blue">73%</text><text x="239.0" y="216" text-anchor="middle" font-size="13" font-weight="600">A</text><text x="239.0" y="232" text-anchor="middle" font-size="11" class="t-gray">192/263</text><rect x="271" y="90.0" width="48" height="110.0" class="f-orange" fill-opacity="0.8"/><text x="295.0" y="84.0" text-anchor="middle" font-size="13" font-weight="700" class="t-orange">69%</text><text x="295.0" y="216" text-anchor="middle" font-size="13" font-weight="600">B</text><text x="295.0" y="232" text-anchor="middle" font-size="11" class="t-gray">55/80</text><text x="267" y="255" text-anchor="middle" font-size="14" font-weight="700">Newcomers</text><text x="267" y="273" text-anchor="middle" font-size="12" class="t-blue">A wins</text><line x1="363" y1="35" x2="363" y2="270" stroke="currentColor" stroke-dasharray="4 4" class="s-gray"/><rect x="377" y="75.19999999999999" width="48" height="124.80000000000001" class="f-blue" fill-opacity="0.8"/><text x="401.0" y="69.19999999999999" text-anchor="middle" font-size="13" font-weight="700" class="t-blue">78%</text><text x="401.0" y="216" text-anchor="middle" font-size="13" font-weight="600">A</text><text x="401.0" y="232" text-anchor="middle" font-size="11" class="t-gray">273/350</text><rect x="433" y="67.88571428571427" width="48" height="132.11428571428573" class="f-orange" fill-opacity="0.8"/><text x="457.0" y="61.88571428571427" text-anchor="middle" font-size="13" font-weight="700" class="t-orange">83%</text><text x="457.0" y="216" text-anchor="middle" font-size="13" font-weight="600">B</text><text x="457.0" y="232" text-anchor="middle" font-size="11" class="t-gray">289/350</text><text x="429" y="255" text-anchor="middle" font-size="14" font-weight="700">All players</text><text x="429" y="273" text-anchor="middle" font-size="12" class="t-orange">B wins</text></svg>',
          alt: 'Grouped bar chart. Veterans: tutorial A 93 percent (81 of 87), B 87 percent (234 of 270), A wins. Newcomers: A 73 percent (192 of 263), B 69 percent (55 of 80), A wins. All players: A 78 percent (273 of 350), B 83 percent (289 of 350), B wins.',
          caption: 'This is [[stat-simpsons-paradox|Simpson\'s paradox]]. The numbers are the famous kidney-stone treatment data of Charig et al. (1986), relabelled.',
        },
        {
          type: 'derivation',
          title: 'The overall rate is a weighted average',
          steps: [
            { tex: '\\hat{p}_A = \\tfrac{87}{350}(0.931) + \\tfrac{263}{350}(0.730) = 0.78', why: 'Overall completion is the average of the group rates, **weighted by how many of A\'s players were in each group**. A\'s weight sits mostly ($75\\%$) on the hard group.' },
            { tex: '\\hat{p}_B = \\tfrac{270}{350}(0.867) + \\tfrac{80}{350}(0.688) = 0.826', why: 'B\'s weight sits mostly ($77\\%$) on the easy group, the veterans.' },
            { tex: '\\hat{p}_A < \\hat{p}_B \\text{ even though A wins in each group}', why: 'Different weights, not different quality, produce the reversal. The comparison of totals mostly compares newcomers with veterans.' },
          ],
          result: 'Player experience is a **lurking** ([[stat-confounding-variable|confounding]]) **variable**: it affects completion *and* it determined which tutorial a player saw.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Which table should you believe?',
          text: 'Statistics alone cannot say; you need to know how the data arose. Here experience influenced who got which tutorial, so the fair comparison is **within** experience levels: A is better. The cure at design time is [[stat-randomized-experiment|randomization]], which makes the groups alike on every lurking variable, measured or not. That is why a proper A/B test randomizes players into variants instead of letting the matchmaker or the player choose.',
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'Expect to be handed a three-way table and asked to (1) compute the rates within each group and overall, (2) identify the lurking variable and (3) explain the reversal using the group sizes. "The weights differ" is the heart of every correct explanation.',
        },
      ],
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'mcq',
      prompt: 'In the tutorial data, which statement best explains why B looks better overall even though A is better for both veterans and newcomers?',
      options: [
        {
          text: 'A was mostly shown to newcomers, who complete tutorials less often, so A\'s overall rate is dragged down by the group mix',
          correct: true,
          why: 'Exactly: the overall rate is a weighted average of group rates, and A\'s weights sit mostly on the low-completion group.',
        },
        {
          text: 'The overall table has more data, so it is more reliable than the subgroup tables',
          why: 'Pooling adds data but also mixes groups with different baseline rates. Here pooling creates a misleading comparison; sample size does not fix confounding.',
        },
        {
          text: 'B must be the better tutorial, because the totals include everyone',
          why: 'Within every experience level A beats B. The totals mainly reflect who was assigned which tutorial.',
        },
        {
          text: 'It is a calculation error; a method that wins in every subgroup must win overall',
          why: 'That intuition is precisely what Simpson\'s paradox breaks. The arithmetic is correct: $78\\%$ vs $83\\%$ overall.',
        },
      ],
      explanation: 'Overall, $\\hat{p}_A = \\frac{87}{350}(0.93) + \\frac{263}{350}(0.73)$, dominated by the newcomer rate, while $\\hat{p}_B$ is dominated by the veteran rate. Experience is the lurking variable. Comparing within experience levels (or randomizing assignment in the first place) removes its effect.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'fill',
      prompt: 'Complete the recipe for a test of independence on an $r \\times c$ table with grand total $n$.',
      template: 'Each expected count is ___, the statistic is compared with a chi-square distribution with ___ degrees of freedom, and the p-value is the area in the ___ tail.',
      blanks: [{ answers: ['(row total)(column total)/$n$'] }, { answers: ['$(r-1)(c-1)$'] }, { answers: ['right'] }],
      wordBank: ['(row total)(column total)/$n$', '(row total + column total)/$n$', '$(r-1)(c-1)$', '$rc - 1$', 'right', 'left', 'two-sided'],
      explanation: 'Under independence, $P(\\text{cell}) = P(\\text{row})P(\\text{column})$, estimated by the marginal proportions, so $E = n \\cdot \\frac{R}{n} \\cdot \\frac{C}{n} = \\frac{RC}{n}$. Fixing the margins leaves $(r - 1)(c - 1)$ free cells. Only large values of $\\chi^2$ are evidence against $H_0$, so the p-value is a right-tail area. ($rc - 1$ would be the df for a goodness-of-fit test with $rc$ fully specified categories.)',
    },
  ],
  takeaways: [
    'Pearson\'s statistic $\\chi^2 = \\sum (O - E)^2 / E$ adds up squared standardized deviations; dividing by $E$ works because a count\'s variance is about its mean.',
    'The $\\chi^2_k$ distribution is a sum of $k$ squared independent standard normals, with mean $k$, variance $2k$ and a right skew that fades as $k$ grows. Only its right tail gives p-values.',
    'Goodness of fit uses $k - 1$ degrees of freedom (minus one more for each estimated parameter); independence and homogeneity tests use $E = \\frac{(\\text{row})(\\text{col})}{n}$ and $(r - 1)(c - 1)$ degrees of freedom.',
    'Use counts, independent observations and expected counts of at least $5$; otherwise merge categories, use an exact test or simulate. For a $2 \\times 2$ table, $\\chi^2 = z^2$.',
    'Simpson\'s paradox: an association can reverse when a lurking variable is aggregated away, because overall rates are weighted averages with different weights. Randomization prevents it.',
  ],
  reading: [
    {
      title: 'OpenStax Introductory Statistics, chapter 11: The Chi-Square Distribution',
      url: 'https://openstax.org/details/books/introductory-statistics',
      source: 'openstax',
      note: 'Free textbook with many worked goodness-of-fit, independence and homogeneity examples and practice sets.',
    },
    {
      title: 'Wikipedia: Pearson\'s chi-squared test',
      url: 'https://en.wikipedia.org/wiki/Pearson%27s_chi-squared_test',
      source: 'wikipedia',
      note: 'The statistic, its degrees of freedom and its history, including the connection to the multinomial distribution.',
    },
    {
      title: 'Wikipedia: Simpson\'s paradox',
      url: 'https://en.wikipedia.org/wiki/Simpson%27s_paradox',
      source: 'wikipedia',
      note: 'The kidney-stone and Berkeley admissions examples, with a vector picture of why the reversal happens.',
    },
    {
      title: 'Khan Academy: Statistics and probability',
      url: 'https://www.khanacademy.org/math/statistics-probability',
      source: 'khan',
      note: 'The "Chi-square tests for categorical data" unit has short videos on each test and on expected counts.',
    },
  ],
};
