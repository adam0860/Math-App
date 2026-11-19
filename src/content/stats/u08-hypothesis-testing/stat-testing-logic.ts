import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'stat-testing-logic',
  title: 'Hypotheses, p-Values and Errors',
  summary: 'The logic of a significance test: a null hypothesis, a test statistic, and the p-value — the probability, if nothing is going on, of data at least as extreme as yours. Significance levels, Type I and Type II errors, one- versus two-sided tests, the duality with confidence intervals, and why "statistically significant" does not mean "important".',
  minutes: 21,
  objectives: [
    'State null and alternative hypotheses about a parameter, and explain the proof-by-contradiction logic of a test',
    'Compute a $z$ test statistic and its p-value, and interpret the p-value correctly',
    'Make a decision at significance level $\\alpha$ and describe Type I and Type II errors and their probabilities',
    'Choose between one- and two-sided alternatives, and use the duality between tests and confidence intervals',
    'Distinguish statistical significance from practical significance and report effect sizes',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'The logic of a test: assume nothing is going on',
      blocks: [
        {
          type: 'p',
          text: 'Players complain that the blue side of a new map has an advantage. In $1000$ ranked matches, blue won $537$. That is more than half — but a fair coin flipped $1000$ times rarely lands exactly $500$ heads either. Is $537$ a real advantage, or the kind of fluctuation that happens by chance?',
        },
        {
          type: 'p',
          text: 'A significance test answers with a statistical version of proof by contradiction. **Assume** there is no advantage. Work out how surprising the data would be under that assumption. If they would be very surprising, the assumption is in trouble.',
        },
        {
          type: 'definition',
          term: 'Null and alternative hypotheses',
          text: 'The [[stat-null-hypothesis|null hypothesis]] $H_0$ is the "nothing special" claim, stated as an equality about a parameter: $H_0: p = 0.5$. The [[stat-alternative-hypothesis|alternative hypothesis]] $H_a$ is what you suspect instead: $H_a: p \\ne 0.5$ (or $p > 0.5$). Hypotheses are always about the **population parameter** ($p$, $\\mu$), never about the sample statistic ($\\hat{p}$, $\\bar{x}$) — you already know the statistic.',
        },
        {
          type: 'callout',
          variant: 'analogy',
          title: 'A courtroom',
          text: 'The defendant ($H_0$) is presumed innocent. The prosecution must present evidence that would be very unlikely if the defendant were innocent. If the evidence is strong, the verdict is "guilty" (reject $H_0$). If not, the verdict is "not guilty" (fail to reject $H_0$) — which is **not** a declaration of innocence, only a statement that the evidence was insufficient. A test never proves $H_0$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why put the boring claim in $H_0$?',
          text: 'Because it is the claim we can compute with. "$p = 0.5$" pins down the exact distribution of the win count, so we can calculate how unusual $537$ would be. "$p \\ne 0.5$" includes $0.51$, $0.6$, $0.99$… and gives no single distribution to compute with. The test is built on the hypothesis that makes a precise prediction.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'mcq',
      prompt: 'A designer suspects that a new weapon increases average kills per match, which was $\\mu = 8.0$ before the patch. A sample of $50$ matches after the patch gives $\\bar{x} = 8.6$. Which pair of hypotheses is set up correctly?',
      options: [
        { text: '$H_0: \\bar{x} = 8.0$, $H_a: \\bar{x} > 8.0$', why: 'Hypotheses are about the population mean $\\mu$, not the sample mean. We already know $\\bar{x} = 8.6$ — there is nothing to test about it.' },
        { text: '$H_0: \\mu = 8.6$, $H_a: \\mu \\ne 8.6$', why: '$8.6$ is what the data showed. The null should be the "no change" value $8.0$, and the alternative should express the designer\'s suspicion that kills went up.' },
        { text: '$H_0: \\mu > 8.0$, $H_a: \\mu = 8.0$', why: 'Reversed. The null must be the precise "no effect" claim with the equality, so it determines a distribution; the suspected effect goes in $H_a$.' },
        { text: '$H_0: \\mu = 8.0$, $H_a: \\mu > 8.0$', correct: true, why: 'The null is "no change" at the old value, stated about the parameter $\\mu$; the alternative is the suspected increase, decided **before** looking at the data.' },
      ],
      explanation: 'Three rules: (1) hypotheses concern parameters ($\\mu$, $p$), not statistics; (2) $H_0$ contains the equality — the specific value that lets you compute the null distribution; (3) $H_a$ is what you are looking for evidence of, and its direction comes from the question, not from the data you happen to see.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Test statistics: how far is the data from H₀?',
      blocks: [
        {
          type: 'p',
          text: 'A [[stat-test-statistic|test statistic]] measures how far the data fall from what $H_0$ predicts, in units of [[stat-standard-error|standard error]]. Under $H_0$ its distribution — the **null distribution** — is known, so every value can be judged.',
        },
        {
          type: 'math',
          tex: 'z = \\frac{\\text{estimate} - \\text{null value}}{\\operatorname{SE} \\text{ computed under } H_0}',
          caption: 'For a proportion: $z = \\dfrac{\\hat{p} - p_0}{\\sqrt{p_0(1 - p_0)/n}}$. For a mean with known $\\sigma$: $z = \\dfrac{\\bar{x} - \\mu_0}{\\sigma/\\sqrt{n}}$.',
        },
        {
          type: 'derivation',
          title: 'The blue-side test statistic',
          steps: [
            { tex: 'H_0: p = 0.5 \\quad\\text{vs}\\quad H_a: p \\ne 0.5', why: 'No side advantage versus some advantage either way. We had no reason in advance to expect blue rather than red to be favored, so the alternative is two-sided.' },
            { tex: '\\operatorname{SE}_0 = \\sqrt{\\frac{0.5 \\cdot 0.5}{1000}} \\approx 0.01581', why: 'The standard error of $\\hat{p}$ **if $H_0$ is true**. Using $p_0 = 0.5$ (not $\\hat{p}$) is the point: we are computing what the data would look like under the null.' },
            { tex: 'z = \\frac{0.537 - 0.5}{0.01581} \\approx 2.34', why: 'The observed win rate is $2.34$ standard errors above $0.5$.' },
            { tex: 'Z \\approx N(0, 1) \\text{ under } H_0', why: '$np_0 = n(1 - p_0) = 500 \\ge 10$, so the normal approximation to the binomial is excellent.' },
          ],
          result: 'If the map were fair, $\\hat{p}$ would be about $N(0.5, 0.0158^2)$, and the observed $0.537$ sits $2.34$ SEs out. How unusual is that? That is the p-value.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'numeric',
      prompt: 'A game should run at a mean frame time of $\\mu_0 = 16.7$ ms. From long experience $\\sigma = 2.4$ ms. A sample of $n = 64$ frames from a new build averages $\\bar{x} = 17.2$ ms. Compute the test statistic $z$ for $H_0: \\mu = 16.7$. Give $2$ decimals.',
      hint: 'SE $= \\sigma/\\sqrt{n} = 2.4/8$.',
      label: '$z =$',
      answer: '(17.2 - 16.7)/(2.4/sqrt(64))',
      answerTex: '1.67',
      tolerance: 0.005,
      explanation: '$\\operatorname{SE} = 2.4/\\sqrt{64} = 0.3$ ms, so $z = \\frac{17.2 - 16.7}{0.3} = \\frac{0.5}{0.3} \\approx 1.67$. The build\'s average frame time is $1.67$ standard errors above the target. Dividing by $\\sigma$ instead of $\\sigma/\\sqrt{n}$ would give $0.21$, wildly understating the evidence carried by $64$ frames.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'The p-value',
      blocks: [
        {
          type: 'definition',
          term: 'p-value',
          text: 'The [[stat-p-value|p-value]] is the probability, **computed assuming $H_0$ is true**, of getting a test statistic at least as extreme as the one observed — "extreme" meaning in the direction(s) of $H_a$. Small p-values mean the data would be surprising if $H_0$ were true.',
        },
        {
          type: 'graph',
          x: [-4, 4],
          y: [0, 0.45],
          xStep: 1,
          yStep: 0.1,
          height: 250,
          functions: [{ expr: 'normpdf(x)', color: 'blue', label: 'null distribution $N(0, 1)$' }],
          areas: [
            { expr: 'normpdf(x)', from: 'abs(z)', to: 4, color: 'red' },
            { expr: 'normpdf(x)', from: -4, to: '-abs(z)', color: 'orange' },
          ],
          vlines: [{ x: 'z', label: 'observed z', color: 'red' }],
          sliders: [{ name: 'z', min: -3.5, max: 3.5, step: 0.01, value: 2.34, label: 'observed test statistic $z$' }],
          readouts: [
            { label: 'one-sided ($H_a$: greater) $1 - \\Phi(z) =$', expr: '1 - normcdf(z)', digits: 4 },
            { label: 'two-sided $2(1 - \\Phi(|z|)) =$', expr: '2(1 - normcdf(abs(z)))', digits: 4 },
          ],
          caption: 'The p-value is a tail area of the null distribution. For the blue side, $z = 2.34$: the red tail alone is $0.0096$; the two-sided p-value counts both tails (red + orange), $0.0193$, because an equally large advantage for **red** would have been just as surprising. Slide $z$ toward $0$: the p-value grows toward $1$.',
        },
        {
          type: 'p',
          text: 'For the blue side: if the map were perfectly fair, a win rate at least as far from $50\\%$ as $53.7\\%$ (in either direction) would happen in only about $1.9\\%$ of seasons of $1000$ matches. Either the map is fair and we saw something rare, or the map is not fair. The data favor the second.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'What a p-value is not',
          text: 'The p-value is $P(\\text{data this extreme} \\mid H_0)$. It is **not** $P(H_0 \\mid \\text{data})$, the probability that the null is true — that would require Bayes\' theorem and a prior (compare $P(A \\mid B)$ with $P(B \\mid A)$ in [[dm-bayes-theorem|Bayes\' theorem]]). It is not the probability that the result is "due to chance", and $1 - p$ is not the probability that the effect is real. It also says nothing about how **large** the effect is.',
        },
        {
          type: 'code',
          title: 'pvalues_under_h0.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdio>
#include <random>

std::mt19937_64 rng(7);
double uniform01() { return (rng() >> 11) * 0x1.0p-53; }

// H0 is TRUE here: the blue side wins each match with probability exactly 0.5.
// Simulate 100,000 "seasons" of 1000 matches and test H0: p = 0.5 in each one.
int main() {
    const int n = 1000, seasons = 100'000;
    const double alphas[] = {0.01, 0.05, 0.10, 0.50};
    int count[4] = {};
    for (int s = 0; s < seasons; ++s) {
        int wins = 0;
        for (int i = 0; i < n; ++i) wins += uniform01() < 0.5;
        double z = (wins / double(n) - 0.5) / std::sqrt(0.25 / n);
        double p = std::erfc(std::fabs(z) / std::sqrt(2.0));   // two-sided p = 2(1 - Phi(|z|))
        for (int a = 0; a < 4; ++a) count[a] += p <= alphas[a];
    }
    for (int a = 0; a < 4; ++a)
        std::printf("P(p-value <= %.2f) = %.4f\\n", alphas[a], double(count[a]) / seasons);
}`,
          output: `P(p-value <= 0.01) = 0.0103
P(p-value <= 0.05) = 0.0543
P(p-value <= 0.10) = 0.0936
P(p-value <= 0.50) = 0.5057`,
          annotations: [
            { lines: 18, text: '$2(1 - \\Phi(|z|)) = \\operatorname{erfc}(|z|/\\sqrt{2})$, using the complementary error function from `<cmath>`.' },
            { lines: 19, text: 'Count how often the p-value falls at or below each threshold when $H_0$ is true.' },
          ],
        },
        {
          type: 'p',
          text: 'When $H_0$ is true, $P(\\text{p-value} \\le \\alpha) \\approx \\alpha$ for every $\\alpha$: p-values are (approximately) **uniformly distributed** on $[0, 1]$. So a fair map produces $p \\le 0.05$ in about $5\\%$ of seasons — that is exactly what "$5\\%$ false-alarm rate" will mean. (The small excess, $0.0543$ instead of $0.05$, comes from the win count being discrete; the exact value is $0.0537$.)',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'mcq',
      prompt: 'A test of $H_0$: "the new matchmaker does not change average queue time" gives $p = 0.03$. Which statement is correct?',
      options: [
        { text: 'There is a $3\\%$ probability that $H_0$ is true.', why: 'The p-value is computed **assuming** $H_0$ is true; it cannot also be the probability of $H_0$. That probability needs a prior and Bayes\' theorem.' },
        { text: 'If the matchmaker had no effect, data at least this extreme would occur about $3\\%$ of the time.', correct: true, why: 'Exactly the definition: a probability about the data, computed under the null.' },
        { text: 'There is a $97\\%$ probability that the matchmaker changes queue time.', why: 'This is the same mistake turned around: $1 - p$ is not the probability that $H_a$ is true.' },
        { text: 'The new matchmaker changes queue time by $3\\%$.', why: 'The p-value says nothing about the **size** of the effect. A tiny effect with a huge sample can give $p = 0.03$, and so can a large effect with a small sample.' },
      ],
      explanation: '$p = P(\\text{data at least this extreme} \\mid H_0)$. It measures how surprising the data are under the null — and that is all. Reversing the conditional (treating it as $P(H_0 \\mid \\text{data})$) is the single most common misreading in published research.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'Significance level and the decision',
      blocks: [
        {
          type: 'p',
          text: 'To turn evidence into a decision, fix a threshold **before** seeing the data: the [[stat-significance-level|significance level]] $\\alpha$, most often $0.05$. Then:',
        },
        {
          type: 'theorem',
          name: 'Decision rule',
          text: 'If $p \\le \\alpha$, **reject $H_0$**: the result is *statistically significant* at level $\\alpha$. If $p > \\alpha$, **fail to reject $H_0$**: the data are consistent with the null. Equivalently, reject when the test statistic lands in the **rejection region**, e.g. $|z| \\ge z_{\\alpha/2} = 1.96$ for a two-sided test at $\\alpha = 0.05$.',
        },
        {
          type: 'p',
          text: 'The two forms agree because $p \\le 0.05$ exactly when $|z|$ is at least as extreme as the point that cuts off $5\\%$ in the two tails. For the blue side, $|z| = 2.34 \\ge 1.96$ and $p = 0.019 \\le 0.05$: reject $H_0$ — the data give significant evidence of a side advantage. At the stricter $\\alpha = 0.01$ ($z_{0.005} = 2.576$) we would **not** reject. Reporting the p-value itself lets each reader apply their own $\\alpha$.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Say "fail to reject", not "accept"',
          text: 'Failing to reject $H_0$ means the data did not provide strong evidence against it — perhaps because there is no effect, perhaps because the sample was too small to detect one. "We found no significant difference in retention" is honest; "the new tutorial has no effect on retention" is a claim the test cannot support.',
        },
        {
          type: 'callout',
          variant: 'history',
          title: 'Where 0.05 came from',
          text: 'R. A. Fisher suggested in the 1920s that $p = 0.05$ was a convenient point to judge a result worth a second look — roughly two standard deviations. It was never meant as a universal law, and fields that run many tests use far stricter thresholds: particle physicists announced the Higgs boson only at "five sigma", a one-sided $p$ of about $3 \\times 10^{-7}$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'truefalse',
      prompt: 'A playtest finds no significant difference in completion time between two level layouts ($p = 0.40$ at $\\alpha = 0.05$). This shows that the two layouts have the same mean completion time.',
      answer: false,
      explanation: 'Failing to reject $H_0$ is absence of evidence, not evidence of absence. With $p = 0.40$ the data are consistent with no difference — and also, typically, with a difference large enough to matter, if the playtest was small. A confidence interval for the difference shows which effects remain plausible: if it runs from $-3$ to $+5$ minutes, the layouts might differ a lot. To show two things are equivalent you need a different design (an equivalence test with a pre-set margin).',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'concept',
      title: 'Type I and Type II errors',
      blocks: [
        {
          type: 'p',
          text: 'A test can be wrong in two different ways, and they have different costs.',
        },
        {
          type: 'figure',
          svg: '<svg viewBox="0 0 500 250" xmlns="http://www.w3.org/2000/svg"><text x="320" y="18" text-anchor="middle" font-size="13" font-weight="600">The truth (unknown to you)</text><text x="235" y="44" text-anchor="middle" font-size="13">H₀ is true</text><text x="405" y="44" text-anchor="middle" font-size="13">H₀ is false</text><text x="18" y="155" text-anchor="middle" font-size="13" font-weight="600" transform="rotate(-90 18 155)">Your decision</text><text x="92" y="100" text-anchor="middle" font-size="13">reject H₀</text><text x="92" y="190" text-anchor="middle" font-size="13">fail to</text><text x="92" y="207" text-anchor="middle" font-size="13">reject H₀</text><rect x="150" y="55" width="170" height="88" rx="8" class="f-red s-red" fill-opacity="0.13" stroke-width="1.5"/><text x="235" y="88" text-anchor="middle" font-size="14" font-weight="600" class="t-red">Type I error</text><text x="235" y="108" text-anchor="middle" font-size="12">false alarm</text><text x="235" y="128" text-anchor="middle" font-size="13" class="t-red">probability α</text><rect x="320" y="55" width="170" height="88" rx="8" class="f-green s-green" fill-opacity="0.13" stroke-width="1.5"/><text x="405" y="88" text-anchor="middle" font-size="14" font-weight="600" class="t-green">correct</text><text x="405" y="108" text-anchor="middle" font-size="12">real effect detected</text><text x="405" y="128" text-anchor="middle" font-size="13" class="t-green">power = 1 − β</text><rect x="150" y="143" width="170" height="88" rx="8" class="f-green s-green" fill-opacity="0.13" stroke-width="1.5"/><text x="235" y="176" text-anchor="middle" font-size="14" font-weight="600" class="t-green">correct</text><text x="235" y="196" text-anchor="middle" font-size="12">no effect, none claimed</text><text x="235" y="216" text-anchor="middle" font-size="13" class="t-green">probability 1 − α</text><rect x="320" y="143" width="170" height="88" rx="8" class="f-orange s-orange" fill-opacity="0.13" stroke-width="1.5"/><text x="405" y="176" text-anchor="middle" font-size="14" font-weight="600" class="t-orange">Type II error</text><text x="405" y="196" text-anchor="middle" font-size="12">missed detection</text><text x="405" y="216" text-anchor="middle" font-size="13" class="t-orange">probability β</text></svg>',
          alt: 'A two-by-two decision table. Columns: H0 is true, H0 is false. Rows: reject H0, fail to reject H0. Reject when H0 true: Type I error, false alarm, probability alpha. Reject when H0 false: correct, power 1 minus beta. Fail to reject when H0 true: correct, probability 1 minus alpha. Fail to reject when H0 false: Type II error, missed detection, probability beta.',
          caption: 'Each column is one possible truth, so the probabilities in a column add to $1$. You choose $\\alpha$ directly; $\\beta$ depends on how big the real effect is and how much data you have.',
          maxWidth: 480,
        },
        {
          type: 'definition',
          term: 'Error probabilities',
          text: 'A [[stat-type-i-error|Type I error]] rejects a true $H_0$; its probability is the significance level, $P(\\text{reject} \\mid H_0 \\text{ true}) = \\alpha$. A [[stat-type-ii-error|Type II error]] fails to reject a false $H_0$; its probability is $\\beta$, and $1 - \\beta$ is the [[stat-power|power]] of the test — the chance of detecting an effect that is really there.',
        },
        {
          type: 'graph',
          x: [-3.5, 6.5],
          y: [0, 0.45],
          xStep: 1,
          yStep: 0.1,
          height: 270,
          functions: [
            { expr: 'normpdf(x)', color: 'blue', label: 'null: $Z \\sim N(0, 1)$' },
            { expr: 'normpdf(x - d)', color: 'purple', label: 'if the true effect is $d$ SEs: $N(d, 1)$' },
          ],
          areas: [
            { expr: 'normpdf(x)', from: 'invnorm(1 - a)', to: 6.5, color: 'red' },
            { expr: 'normpdf(x - d)', from: -3.5, to: 'invnorm(1 - a)', color: 'orange' },
          ],
          vlines: [{ x: 'invnorm(1 - a)', label: 'reject →', color: 'gray' }],
          sliders: [
            { name: 'a', min: 0.005, max: 0.2, step: 0.005, value: 0.05, label: 'significance level $\\alpha$' },
            { name: 'd', min: 0, max: 5, step: 0.05, value: 2.5, label: 'true effect $d$ (in standard errors)' },
          ],
          readouts: [
            { label: 'critical value $z_\\alpha =$', expr: 'invnorm(1 - a)', digits: 3 },
            { label: '$\\beta = \\Phi(z_\\alpha - d) =$', expr: 'normcdf(invnorm(1 - a) - d)', digits: 4 },
            { label: 'power $1 - \\beta =$', expr: '1 - normcdf(invnorm(1 - a) - d)', digits: 4 },
          ],
          caption: 'A one-sided test ($H_a$: effect $> 0$) rejects when $z \\ge z_\\alpha$. **Red**: the area under the null beyond the cutoff, $\\alpha$. **Orange**: the area under the alternative below the cutoff, $\\beta$. Lower $\\alpha$ and the cutoff moves right: fewer false alarms, more misses. Only a bigger effect or more data (which moves the purple curve right) shrinks both.',
        },
        {
          type: 'callout',
          variant: 'analogy',
          title: 'A radar operator',
          text: 'A radar operator decides whether a blip is an aircraft. Set the detection threshold low and every bird and rain cloud triggers an alert (Type I errors: false alarms). Set it high and real contacts slip through (Type II errors: missed detections). The threshold trades one error for the other; a better radar — more data — reduces both. Which error is worse depends on the mission, and so does the choice of $\\alpha$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'numeric',
      prompt: 'A one-sided $z$ test at $\\alpha = 0.05$ rejects $H_0$ when $z \\ge 1.645$. Suppose the true effect is such that $Z$ actually follows $N(2.5, 1)$. What is the probability of a **Type II error**, $\\beta = \\Phi(1.645 - 2.5)$? Give $3$ decimals.',
      hint: '$\\Phi(-0.855) = 1 - \\Phi(0.855)$, and $\\Phi(0.855) \\approx 0.804$.',
      label: '$\\beta \\approx$',
      answer: 'normcdf(invnorm(0.95) - 2.5)',
      answerTex: '0.196',
      tolerance: 0.0015,
      explanation: 'A Type II error happens when $Z < 1.645$ even though $Z \\sim N(2.5, 1)$: $\\beta = P(Z < 1.645) = \\Phi\\left(\\frac{1.645 - 2.5}{1}\\right) = \\Phi(-0.855) \\approx 0.196$. So the test misses this effect about one time in five, and its power is $1 - \\beta \\approx 0.804$. Computing $1 - \\Phi(-0.855)$ instead gives the power, not $\\beta$.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'One-sided or two-sided?',
      blocks: [
        {
          type: 'p',
          text: 'A **two-sided** alternative ($H_a: \\mu \\ne \\mu_0$) looks for a difference in either direction, and its p-value counts both tails. A **one-sided** alternative ($H_a: \\mu > \\mu_0$ or $\\mu < \\mu_0$) looks in one direction only, and its p-value is one tail — half as large when the data point the expected way.',
        },
        {
          type: 'table',
          headers: ['$\\alpha$', '$0.10$', '$0.05$', '$0.01$'],
          rows: [
            ['one-sided critical value $z_\\alpha$', '$1.282$', '$1.645$', '$2.326$'],
            ['two-sided critical value $z_{\\alpha/2}$', '$1.645$', '$1.960$', '$2.576$'],
          ],
          caption: 'A one-sided test needs a less extreme statistic to reject, because all of $\\alpha$ sits in one tail.',
        },
        {
          type: 'p',
          text: 'Use one-sided only when **(a)** the direction was specified before seeing the data and **(b)** an effect in the other direction would lead to the same action as no effect. "Does the optimization **reduce** frame time?" can be one-sided if a slower build would simply be rejected either way. "Is this map unbalanced?" is two-sided: an advantage for either team matters.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Choosing the side after seeing the data is cheating',
          text: 'If you look at the data, see $\\bar{x}$ above $\\mu_0$, and only then choose $H_a: \\mu > \\mu_0$, you have quietly halved your p-value. Your real false-alarm rate is $2\\alpha$, because you would have tested the other direction had the data gone the other way. Most reviewers and A/B platforms default to two-sided tests for this reason.',
        },
      ],
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'fill',
      prompt: 'A test statistic comes out $z = 1.80$, and $1 - \\Phi(1.80) = 0.0359$. Complete the analysis at $\\alpha = 0.05$.',
      template: 'With $H_a: \\mu > \\mu_0$ the p-value is ___, so we ___ $H_0$. With $H_a: \\mu \\ne \\mu_0$ the p-value is ___, so we ___ $H_0$.',
      blanks: [{ answers: ['$0.0359$'] }, { answers: ['reject'] }, { answers: ['$0.072$'] }, { answers: ['fail to reject'] }],
      wordBank: ['$0.0359$', '$0.072$', '$0.9641$', 'reject', 'fail to reject', 'accept'],
      explanation: 'One-sided: $p = 1 - \\Phi(1.80) = 0.0359 \\le 0.05$, so reject. Two-sided: both tails count, $p = 2(0.0359) \\approx 0.072 > 0.05$, so fail to reject. (Equivalently: $1.80 \\ge 1.645$ but $1.80 < 1.96$.) The same data lead to different decisions — which is exactly why the alternative must be chosen before looking. "Accept" is never the right word for a null you could not reject, and $0.9641$ is $\\Phi(1.80)$, the wrong tail.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'concept',
      title: 'Tests and confidence intervals are two views of one idea',
      blocks: [
        {
          type: 'p',
          text: 'A two-sided test at level $\\alpha$ and a $100(1 - \\alpha)\\%$ [[stat-confidence-interval|confidence interval]] are built from the same ingredients — estimate, standard error, critical value — so they must agree.',
        },
        {
          type: 'derivation',
          title: 'Duality for a mean with known $\\sigma$',
          steps: [
            { tex: '\\text{reject } H_0: \\mu = \\mu_0 \\iff \\left|\\frac{\\bar{x} - \\mu_0}{\\sigma/\\sqrt{n}}\\right| \\ge z_{\\alpha/2}', why: 'The two-sided rejection rule at level $\\alpha$.' },
            { tex: '\\iff |\\bar{x} - \\mu_0| \\ge z_{\\alpha/2}\\frac{\\sigma}{\\sqrt{n}}', why: 'Multiply both sides by the positive SE.' },
            { tex: '\\iff \\mu_0 \\notin \\left(\\bar{x} - z_{\\alpha/2}\\tfrac{\\sigma}{\\sqrt{n}},\\ \\bar{x} + z_{\\alpha/2}\\tfrac{\\sigma}{\\sqrt{n}}\\right)', why: '$\\mu_0$ is at least one margin of error away from $\\bar{x}$ exactly when it lies outside the confidence interval.' },
          ],
          result: 'A two-sided level-$\\alpha$ test rejects $H_0: \\mu = \\mu_0$ exactly when $\\mu_0$ lies outside the $100(1-\\alpha)\\%$ confidence interval. The interval is the set of null values the test would **not** reject.',
        },
        {
          type: 'p',
          text: 'The blue-side interval from the previous lesson, $(0.506, 0.568)$, excludes $0.5$; the test rejected at $\\alpha = 0.05$. For proportions the agreement is approximate (the test uses $p_0$ in the SE, the Wald interval uses $\\hat{p}$), but it is exact for means and for the Wilson interval, which is built by inverting the test.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Prefer reporting the interval',
          text: 'The interval contains everything the test does (reject or not) **plus** the size of the effect and how precisely it is known. "Blue wins $53.7\\%$ of matches, $95\\%$ CI $50.6\\%$ to $56.8\\%$" tells a designer far more than "$p = 0.019$".',
        },
      ],
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'mcq',
      prompt: 'A $95\\%$ confidence interval for a build\'s mean frame time is $(16.2, 17.9)$ ms. What can you conclude about $H_0: \\mu = 16.7$ versus $H_a: \\mu \\ne 16.7$?',
      options: [
        { text: 'Reject $H_0$ at $\\alpha = 0.05$, because the interval does not equal $16.7$.', why: 'The question is whether $16.7$ lies inside the interval, and it does ($16.2 < 16.7 < 17.9$).' },
        { text: 'Fail to reject $H_0$ at $\\alpha = 0.05$, because $16.7$ lies inside the interval.', correct: true, why: 'By duality, a two-sided $5\\%$ test rejects exactly the null values outside the $95\\%$ interval. $16.7$ is inside, so it is a plausible value of $\\mu$.' },
        { text: 'Accept $H_0$: the build runs at exactly $16.7$ ms.', why: 'Every value from $16.2$ to $17.9$ is plausible, including $17.5$ ms (57 fps). Not rejecting is not proving.' },
        { text: 'Nothing can be concluded without the raw data.', why: 'The duality lets you read the two-sided level-$0.05$ decision straight off the $95\\%$ interval.' },
      ],
      explanation: 'The $95\\%$ interval is exactly the set of $\\mu_0$ values a two-sided $\\alpha = 0.05$ test would not reject. $16.7$ is inside, so $p > 0.05$. The interval also shows the data cannot rule out a mean as high as $17.9$ ms — the build might well be over budget, so collect more runs before deciding.',
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'concept',
      title: 'Statistical significance is not practical significance',
      blocks: [
        {
          type: 'p',
          text: 'The test statistic is (effect) / (standard error), and the SE shrinks like $1/\\sqrt{n}$. So with enough data, **any** nonzero effect, however tiny, becomes statistically significant — and with too little data, even a large effect may not.',
        },
        {
          type: 'derivation',
          title: 'Ten million matches',
          steps: [
            { tex: 'n = 10^7,\\quad \\hat{p} = 0.501', why: 'A live game logs ten million matches; the blue side wins $50.1\\%$.' },
            { tex: 'z = \\frac{0.501 - 0.5}{\\sqrt{0.25/10^7}} = \\frac{0.001}{0.000158} \\approx 6.32', why: 'The SE is tiny with ten million matches.' },
            { tex: 'p = 2(1 - \\Phi(6.32)) \\approx 2.5 \\times 10^{-10}', why: 'Overwhelming evidence that $p \\ne 0.5$.' },
          ],
          result: 'The advantage is "highly significant" and practically irrelevant: one extra win per thousand matches is far below anything a player could notice or a designer should spend a patch on.',
        },
        {
          type: 'definition',
          term: 'Effect size',
          text: 'An [[stat-effect-size|effect size]] measures **how big** an effect is, independent of sample size: the raw difference (percentage points, milliseconds), or a standardized difference such as Cohen\'s $d = \\frac{\\mu_1 - \\mu_2}{\\sigma}$ (conventionally, $0.2$ small, $0.5$ medium, $0.8$ large). Always report it, with a confidence interval, alongside any p-value.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Decide what matters before you test',
          text: 'Before analyzing, write down the smallest effect that would change a decision: "we patch the map if either side wins more than $52\\%$". Then judge the confidence interval against that threshold, not just against $0$. A significant result whose whole interval sits below the threshold is real but unimportant.',
        },
      ],
    },
    // ------------------------------------------------------------------ 16
    {
      kind: 'order',
      prompt: 'Put the steps of a significance test in order.',
      lines: [
        'State $H_0$ and $H_a$ about the parameter, and choose $\\alpha$',
        'Check the conditions (random sample, independence, sample size)',
        'Compute the test statistic from the data',
        'Find the p-value from the null distribution',
        'Compare $p$ with $\\alpha$ and decide to reject or fail to reject $H_0$',
        'State the conclusion in context, with an effect size and confidence interval',
      ],
      explanation: 'Hypotheses and $\\alpha$ come first, before the data can influence them. Conditions justify the null distribution. The statistic measures distance from $H_0$; the p-value converts it to a probability; the decision compares with the pre-set $\\alpha$; and the conclusion translates back into the problem\'s language — including how big the effect is, not just whether it is significant.',
    },
    // ------------------------------------------------------------------ 17
    {
      kind: 'error',
      prompt: 'An analyst tests whether a patch changed average match length from $\\mu_0 = 50$ minutes ($\\sigma$ known). Tap the first wrong line.',
      lines: [
        '$H_0: \\mu = 50$ versus $H_a: \\mu \\ne 50$, at $\\alpha = 0.05$.',
        'The data give $z = 1.88$.',
        'p-value $= 1 - \\Phi(1.88) = 0.030$.',
        'Since $0.030 < 0.05$, reject $H_0$: the patch changed the average match length.',
      ],
      errorLines: [3],
      explanation: 'The alternative is two-sided ($\\mu \\ne 50$), so the p-value must count both tails: $p = 2(1 - \\Phi(1.88)) = 2(0.030) = 0.060$. Since $0.060 > 0.05$, the correct decision is to **fail to reject** $H_0$. (Check with critical values: $1.88 < 1.96$.) Using a one-tail area with a two-sided alternative is a classic way to report "significant" results that are not.',
    },
  ],
  takeaways: [
    '$H_0$ is the precise "no effect" claim about a parameter; $H_a$ is the suspected effect, chosen before seeing data. A test is proof by contradiction with probabilities.',
    'Test statistic $=$ (estimate $-$ null value) / (SE under $H_0$). The p-value is $P(\\text{statistic at least this extreme} \\mid H_0)$ — not the probability that $H_0$ is true, and not the size of the effect.',
    'Reject $H_0$ when $p \\le \\alpha$. "Fail to reject" is not "accept": absence of evidence is not evidence of absence.',
    'Type I error (false alarm) has probability $\\alpha$; Type II error (miss) has probability $\\beta$; power $= 1 - \\beta$. For fixed data, lowering $\\alpha$ raises $\\beta$; more data lowers both.',
    'Two-sided p-values count both tails. Choose one-sided only in advance and only when the other direction would not change the action.',
    'A two-sided level-$\\alpha$ test rejects exactly the values outside the $100(1-\\alpha)\\%$ CI. With large $n$ tiny effects are significant — always report effect sizes and intervals.',
  ],
  reading: [
    {
      title: 'OpenStax — Introductory Statistics',
      url: 'https://openstax.org/details/books/introductory-statistics',
      source: 'openstax',
      note: 'The hypothesis testing chapters walk through the null and alternative, errors, and p-values with many short exercises.',
    },
    {
      title: 'Wikipedia — Misuse of p-values',
      url: 'https://en.wikipedia.org/wiki/Misuse_of_p-values',
      source: 'wikipedia',
      note: 'A catalogue of the common misreadings of p-values and the American Statistical Association\'s 2016 statement on them.',
    },
    {
      title: 'Wikipedia — Type I and type II errors',
      url: 'https://en.wikipedia.org/wiki/Type_I_and_type_II_errors',
      source: 'wikipedia',
      note: 'The decision table, the tradeoff between the two errors, and examples from medicine, security screening and signal detection.',
    },
    {
      title: 'MIT OCW 18.05 — Introduction to Probability and Statistics',
      url: 'https://ocw.mit.edu/courses/18-05-introduction-to-probability-and-statistics-spring-2014/',
      source: 'other',
      note: 'The class notes on null hypothesis significance testing give a careful frequentist treatment with rejection regions and power.',
    },
  ],
};
