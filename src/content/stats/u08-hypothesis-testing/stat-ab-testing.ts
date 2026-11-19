import type { GraphBlock, Lesson } from '../../types';

// Power of a two-sided two-sample z test with n per group, standardized effect x, level a.
const power = (eff: string) =>
  `normcdf(abs(${eff})*sqrt(n/2) - invnorm(1 - a/2)) + normcdf(-abs(${eff})*sqrt(n/2) - invnorm(1 - a/2))`;

// One simulated A/A test (no true difference), z statistic recomputed every day for
// 30 days: z_k = (sum of k independent N(0,1) increments)/sqrt(k). Generated once with
// numpy (seed 38) and rounded; it first crosses 1.96 on day 11.
const zPath = [
  1.45, 1.12, 1.07, 1.36, 1.42, 1.92, 1.34, 1.57, 1.51, 1.85, 2.14, 2.31, 2.07, 1.86, 1.84, 1.66, 1.16,
  0.79, 0.85, 0.59, 0.51, 0.49, 0.18, 0.09, 0.34, 0.6, 0.68, 0.75, 0.69, 0.68,
];
const peekGraph: GraphBlock = {
  type: 'graph',
  x: [0, 31],
  y: [-2.6, 2.8],
  xStep: 5,
  yStep: 1,
  height: 250,
  points: zPath.map((z, i) => ({ x: i + 1, y: z, color: Math.abs(z) > 1.96 ? ('red' as const) : ('blue' as const) })),
  segments: zPath.slice(1).map((z, i) => ({ from: [i + 1, zPath[i]] as [number, number], to: [i + 2, z] as [number, number], color: 'blue' as const })),
  hlines: [
    { y: 1.96, label: 'z = 1.96', color: 'red' },
    { y: -1.96, label: 'z = −1.96', color: 'red' },
  ],
  vlines: [{ x: 11, label: 'day 11: "p < 0.05, ship it!"', color: 'orange' }],
  caption: 'The daily $z$ statistic of an **A/A test**: both groups get the identical game, so $H_0$ is true by construction. The path wanders like a random walk, pokes above $1.96$ on days $11$–$13$, and ends at $z = 0.68$ ($p = 0.50$) on day $30$. A team that checks every day and stops at the first significant result ships a "winner" on day $11$ that does nothing.',
};

export const lesson: Lesson = {
  id: 'stat-ab-testing',
  title: 'A/B Testing, Power and Multiple Comparisons',
  summary: 'Running experiments on a live game the right way: computing power and sample size before you start, designing an A/B test (randomization unit, primary and guardrail metrics, duration), and the three classic ways to fool yourself — peeking at results, testing many things at once, and p-hacking — with the corrections that keep error rates honest.',
  minutes: 21,
  objectives: [
    'Compute the power of a two-sample test and the sample size needed to detect a given effect',
    'Design an A/B test for a game feature: randomization unit, primary metric, guardrails, duration and sanity checks',
    'Explain, and demonstrate by simulation, why peeking with optional stopping inflates the false-positive rate',
    'Control the family-wise error rate with Bonferroni and the false discovery rate with Benjamini–Hochberg',
    'Recognize p-hacking and the winner\'s curse, and describe the practices that protect against them',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Power: will the test find the effect?',
      blocks: [
        {
          type: 'p',
          text: 'Before running an experiment, ask the question the previous lessons postponed: if the feature really works, how likely is the test to say so? That probability is the [[stat-power|power]], $1 - \\beta$. An underpowered test wastes players\' time and usually ends in "no significant difference" — a result that tells you almost nothing.',
        },
        {
          type: 'derivation',
          title: 'Power of a two-sample $z$ test',
          steps: [
            { tex: '\\bar{X}_B - \\bar{X}_A \\sim N\\left(\\delta, \\ \\sigma^2\\left(\\tfrac{1}{n} + \\tfrac{1}{n}\\right)\\right) = N\\left(\\delta, \\tfrac{2\\sigma^2}{n}\\right)', why: 'Two independent groups of $n$ players with common SD $\\sigma$ and true difference $\\delta$: the variances add.' },
            { tex: 'Z = \\frac{\\bar{X}_B - \\bar{X}_A}{\\sigma\\sqrt{2/n}} \\sim N\\left(\\frac{\\delta}{\\sigma\\sqrt{2/n}}, 1\\right) = N\\left(d\\sqrt{n/2},\\ 1\\right)', why: 'Standardizing by the SE shifts the whole distribution by $\\delta/\\operatorname{SE}$. Here $d = \\delta/\\sigma$ is the standardized [[stat-effect-size|effect size]] (Cohen\'s $d$).' },
            { tex: '1 - \\beta = P(|Z| \\ge z_{\\alpha/2}) \\approx \\Phi\\left(d\\sqrt{n/2} - z_{\\alpha/2}\\right)', why: 'The two-sided test rejects when $|Z| \\ge z_{\\alpha/2}$. For $d > 0$ the chance of landing beyond $-z_{\\alpha/2}$ in the wrong tail is negligible.' },
          ],
          result: 'Power depends on the effect size, the sample size and $\\alpha$ only through $d\\sqrt{n/2} - z_{\\alpha/2}$: bigger effects, more players or a looser $\\alpha$ all raise it.',
        },
        {
          type: 'graph',
          x: [-1, 1],
          y: [0, 1.05],
          xStep: 0.25,
          yStep: 0.2,
          height: 280,
          functions: [{ expr: power('x'), color: 'purple', label: 'power vs true effect size $d$' }],
          points: [{ x: 'd', y: power('d'), color: 'orange', label: 'your effect' }],
          hlines: [
            { y: 0.8, label: '80%', color: 'gray' },
            { y: 'a', color: 'red' },
          ],
          sliders: [
            { name: 'n', min: 10, max: 1000, step: 10, value: 100, label: 'players per group $n$' },
            { name: 'd', min: 0, max: 1, step: 0.01, value: 0.3, label: 'true effect size $d$' },
            { name: 'a', min: 0.01, max: 0.1, step: 0.01, value: 0.05, label: 'significance level $\\alpha$' },
          ],
          readouts: [
            { label: 'power at $d$:', expr: power('d'), digits: 3 },
            { label: '$n$ per group for $80\\%$ power at $d$:', expr: 'ceil(2(invnorm(1 - a/2) + invnorm(0.8))^2/d^2)', digits: 0 },
          ],
          caption: 'The **power curve**. At $d = 0$ (no effect) it equals $\\alpha$ (red line): rejecting there is a false positive. With $100$ players per group, a small effect $d = 0.3$ is detected only $56\\%$ of the time. Slide $n$ to $180$ and it reaches $80\\%$. The curve gets steeper as $n$ grows: large samples separate "no effect" from "small effect".',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Plan for 80% power at the smallest effect worth acting on',
          text: 'The convention is $\\alpha = 0.05$ and power $0.80$ at the smallest effect that would change your decision — the [[stat-minimum-detectable-effect|minimum detectable effect]] (MDE). Not the effect you hope for: optimistic effect sizes are the most common reason experiments are underpowered.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'numeric',
      prompt: 'A two-sided two-sample test at $\\alpha = 0.05$ ($z_{0.025} = 1.96$) has $n = 100$ players per group. The true standardized effect is $d = 0.3$. Using power $\\approx \\Phi\\left(d\\sqrt{n/2} - 1.96\\right)$, find the power. Give $2$ decimals.',
      hint: '$0.3\\sqrt{50} \\approx 2.121$.',
      label: 'power $\\approx$',
      answer: 'normcdf(0.3*sqrt(50) - 1.96)',
      answerTex: '0.56',
      tolerance: 0.006,
      explanation: '$d\\sqrt{n/2} = 0.3\\sqrt{50} \\approx 2.121$, so power $\\approx \\Phi(2.121 - 1.96) = \\Phi(0.161) \\approx 0.564$. The test misses this real effect $44\\%$ of the time — essentially a coin flip. To reach $80\\%$ you would need $n = 2(1.96 + 0.8416)^2/0.3^2 \\approx 175$ per group.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'How many players do you need?',
      blocks: [
        {
          type: 'p',
          text: 'Turn the power formula around. Demanding power $1 - \\beta$ means $d\\sqrt{n/2} - z_{\\alpha/2} = z_\\beta$, where $z_\\beta$ is the normal point with area $\\beta$ above it ($z_{0.20} = 0.8416$ for $80\\%$ power). Solve for $n$:',
        },
        {
          type: 'theorem',
          name: 'Sample size per group',
          tex: 'n = \\frac{2\\left(z_{\\alpha/2} + z_\\beta\\right)^2\\sigma^2}{\\delta^2} \\qquad\\text{(means)}, \\qquad n = \\frac{\\left(z_{\\alpha/2} + z_\\beta\\right)^2\\left[p_1(1-p_1) + p_2(1-p_2)\\right]}{(p_2 - p_1)^2} \\qquad\\text{(proportions)}',
          text: 'Round up. For $\\alpha = 0.05$ and $80\\%$ power, $2(1.96 + 0.8416)^2 \\approx 15.7$, giving the handy rule of thumb $n \\approx 16\\,\\sigma^2/\\delta^2$ per group.',
        },
        {
          type: 'derivation',
          title: 'Sizing a retention test',
          steps: [
            { tex: 'p_1 = 0.40,\\quad p_2 = 0.42,\\quad \\alpha = 0.05,\\quad 1 - \\beta = 0.80', why: 'Day-7 retention is $40\\%$. The team will ship the feature if it adds at least $2$ percentage points, so that is the MDE.' },
            { tex: 'n = \\frac{(1.96 + 0.8416)^2(0.40 \\cdot 0.60 + 0.42 \\cdot 0.58)}{0.02^2} = \\frac{7.849 \\times 0.4836}{0.0004}', why: 'Plug into the proportions formula.' },
            { tex: 'n \\approx 9490 \\text{ players per group}', why: 'About $19{,}000$ new players in total.' },
            { tex: '\\frac{18{,}980}{2000 \\text{ per day}} \\approx 9.5 \\text{ days} \\to 14 \\text{ days of enrollment} + 7', why: 'With $2000$ new players a day, enrollment takes $9.5$ days; round up to two full weeks so every weekday is equally represented, then wait $7$ more days to observe the last cohort\'s day-7 retention.' },
          ],
          result: 'Small effects on noisy binary metrics need big samples. Halving the MDE to $1$ point would need about $38{,}000$ players per group — four times as many.',
        },
        {
          type: 'graph',
          x: [0, 0.1],
          y: [0, 40000],
          xStep: 0.01,
          yStep: 5000,
          height: 250,
          functions: [{ expr: '(invnorm(0.975) + invnorm(0.8))^2*(b(1 - b) + (b + x)(1 - b - x))/x^2', color: 'blue', label: '$n$ per group ($\\alpha = 0.05$, power $80\\%$)', domain: [0.005, 0.1] }],
          points: [{ x: 0.02, y: '(invnorm(0.975) + invnorm(0.8))^2*(b(1 - b) + (b + 0.02)(0.98 - b))/0.0004', color: 'orange', label: 'MDE 2 points' }],
          sliders: [{ name: 'b', min: 0.02, max: 0.6, step: 0.01, value: 0.4, label: 'baseline rate $p_1$' }],
          readouts: [{ label: '$n$ per group at MDE $= 0.02$:', expr: 'ceil((invnorm(0.975) + invnorm(0.8))^2*(b(1 - b) + (b + 0.02)(0.98 - b))/0.0004)', digits: 0 }],
          caption: 'Required players per group versus the minimum detectable effect (in absolute percentage points, as a fraction). The curve rises like $1/\\text{MDE}^2$. Lower the baseline to a conversion-style rate such as $5\\%$: the variance $p(1-p)$ shrinks, and so does $n$ — but a 2-point lift on a $5\\%$ base is a huge relative change.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'numeric',
      prompt: 'Session length has $\\sigma = 20$ minutes. You want $80\\%$ power to detect a $\\delta = 2$-minute increase with a two-sided test at $\\alpha = 0.05$. Using $z_{0.025} = 1.96$ and $z_{0.20} = 0.8416$, how many players per group do you need? (Round up.)',
      hint: '$n = 2(z_{\\alpha/2} + z_\\beta)^2\\sigma^2/\\delta^2$, and $\\sigma^2/\\delta^2 = 100$.',
      label: '$n =$',
      answer: '1570',
      tolerance: 2,
      explanation: '$n = \\frac{2(1.96 + 0.8416)^2 \\cdot 20^2}{2^2} = 2(2.8016)^2 \\cdot 100 = 2 \\cdot 7.849 \\cdot 100 \\approx 1569.8$, so $1570$ players per group ($3140$ total). The rule of thumb $16\\sigma^2/\\delta^2 = 1600$ is close. A $2$-minute effect is only $d = 0.1$ standard deviations — small effects are expensive.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Designing an A/B test for a game feature',
      blocks: [
        {
          type: 'p',
          text: 'An [[stat-ab-test|A/B test]] is a [[stat-randomized-experiment|randomized controlled experiment]]: because players are assigned to versions by a coin flip, the only systematic difference between the groups is the feature. That is what lets you read a difference in outcomes as an **effect** of the feature, not a correlation. Here is the design for testing a daily login reward.',
        },
        {
          type: 'figure',
          svg: '<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg"><defs><marker id="abArrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="currentColor"/></marker></defs><rect x="10" y="20" width="130" height="56" rx="8" fill="none" stroke="currentColor" stroke-width="1.3"/><text x="75" y="44" text-anchor="middle" font-size="13" font-weight="600">new player</text><text x="75" y="62" text-anchor="middle" font-size="12" class="t-gray">id 48213</text><line x1="140" y1="48" x2="178" y2="48" stroke="currentColor" stroke-width="1.3" marker-end="url(#abArrow)"/><rect x="180" y="20" width="150" height="56" rx="8" fill="none" stroke="currentColor" stroke-width="1.3"/><text x="255" y="42" text-anchor="middle" font-size="12">hash(experiment, id)</text><text x="255" y="60" text-anchor="middle" font-size="12">mod 100</text><line x1="330" y1="40" x2="368" y2="28" stroke="currentColor" stroke-width="1.3" marker-end="url(#abArrow)"/><line x1="330" y1="56" x2="368" y2="70" stroke="currentColor" stroke-width="1.3" marker-end="url(#abArrow)"/><rect x="370" y="8" width="120" height="36" rx="8" class="f-blue s-blue" fill-opacity="0.12" stroke-width="1.3"/><text x="430" y="31" text-anchor="middle" font-size="12" class="t-blue">0–49: control A</text><rect x="370" y="54" width="120" height="36" rx="8" class="f-orange s-orange" fill-opacity="0.12" stroke-width="1.3"/><text x="430" y="77" text-anchor="middle" font-size="12" class="t-orange">50–99: variant B</text><text x="424" y="110" text-anchor="end" font-size="11" class="t-gray">measure both groups</text><line x1="430" y1="90" x2="430" y2="118" stroke="currentColor" stroke-width="1.3" marker-end="url(#abArrow)"/><rect x="250" y="120" width="240" height="92" rx="8" fill="none" stroke="currentColor" stroke-width="1.3"/><text x="262" y="142" font-size="12" font-weight="600">primary metric (chosen in advance)</text><text x="262" y="160" font-size="12" class="t-green">day-7 retention per player</text><text x="262" y="182" font-size="12" font-weight="600">guardrails (must not get worse)</text><text x="262" y="200" font-size="12" class="t-red">crash rate · revenue · match quality</text><line x1="250" y1="166" x2="232" y2="166" stroke="currentColor" stroke-width="1.3" marker-end="url(#abArrow)"/><rect x="10" y="120" width="220" height="92" rx="8" fill="none" stroke="currentColor" stroke-width="1.3"/><text x="22" y="142" font-size="12" font-weight="600">sanity checks</text><text x="22" y="160" font-size="12">sample ratio ≈ 50/50?</text><text x="22" y="178" font-size="12">A/A test passes?</text><text x="22" y="196" font-size="12">logging identical in A and B?</text><line x1="120" y1="212" x2="120" y2="238" stroke="currentColor" stroke-width="1.3" marker-end="url(#abArrow)"/><rect x="10" y="240" width="480" height="48" rx="8" class="f-green s-green" fill-opacity="0.10" stroke-width="1.3"/><text x="250" y="261" text-anchor="middle" font-size="12" font-weight="600">analyze once, at the planned sample size</text><text x="250" y="279" text-anchor="middle" font-size="12">(full weeks; n from the power calculation)</text></svg>',
          alt: 'Flow diagram. A new player with id 48213 goes to a box "hash(experiment, id) mod 100", which splits into "0–49: control A" and "50–99: variant B". Both groups are measured on a primary metric chosen in advance (day-7 retention per player) and guardrails that must not get worse (crash rate, revenue, match quality). Then sanity checks (sample ratio about 50/50, A/A test passes, logging identical in A and B), and finally "analyze once, at the planned sample size (full weeks; n from the power calculation)".',
          caption: 'The skeleton of a well-run experiment. Every decision in it is made **before** any results are seen.',
          maxWidth: 480,
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why randomization licenses causal claims',
          text: 'Compare players who **chose** to claim a login reward with those who did not, and the claimers will retain better — because engaged players claim rewards, not necessarily because rewards create engagement. Random assignment breaks that link: skill, enthusiasm, platform and time zone are spread evenly between A and B by chance, so the only systematic difference left is the feature. Any remaining imbalance is random, and random error is exactly what the p-value and confidence interval account for.',
        },
        {
          type: 'steps',
          items: [
            { title: 'Randomization unit: the player', text: 'Randomize players, not sessions or matches: a player who sees the reward on Monday but not Tuesday contaminates both groups, and the outcomes of one player\'s sessions are not independent. For social features (guild chat, trading), players influence each other, so randomize whole guilds or regions and analyze at that level.' },
            { title: 'One primary metric, chosen in advance', text: 'Pick the metric the decision rests on — day-7 retention per player — and write it down with the hypothesis and $\\alpha$. Prefer per-player metrics: "average session length" pooled over sessions overweights heavy players and violates independence.' },
            { title: 'Guardrail metrics', text: 'Metrics that must **not** get worse even if the primary one improves: crash rate, load time, revenue per player, match quality, reports of toxicity. A login reward that lifts retention but floods the economy with currency is not a win.' },
            { title: 'Sample size and duration', text: 'From the power calculation, then rounded up to **full weeks** (weekend players differ from weekday players) and long enough to outlast the **novelty effect** — players poke at anything new for a few days.' },
            { title: 'Sanity checks', text: 'Run an A/A test on the pipeline first. During the test, check the **sample ratio**: a $50/50$ design that delivers $52/48$ signals a bug in assignment or logging (a sample ratio mismatch) that invalidates the comparison.' },
          ],
        },
        {
          type: 'code',
          title: 'assignment.cpp',
          runnable: true,
          code: `#include <cstdint>
#include <cstdio>
#include <string>

// FNV-1a: a simple, stable 64-bit string hash (std::hash is not guaranteed to be
// the same across compilers, so never use it for experiment assignment).
std::uint64_t fnv1a(const std::string& s) {
    std::uint64_t h = 14695981039346656037ull;
    for (unsigned char c : s) {
        h ^= c;
        h *= 1099511628211ull;
    }
    return h;
}

// Same player + same experiment => same bucket, on every device and every login.
char variant(std::uint64_t playerId, const std::string& experiment) {
    std::uint64_t bucket = fnv1a(experiment + ":" + std::to_string(playerId)) % 100;
    return bucket < 50 ? 'A' : 'B';
}

int main() {
    std::printf("player 48213: %c, again: %c\\n", variant(48213, "login-reward-v2"),
                variant(48213, "login-reward-v2"));
    int countB = 0;
    const int players = 100'000;
    for (std::uint64_t id = 1; id <= players; ++id) countB += variant(id, "login-reward-v2") == 'B';
    std::printf("variant B: %d of %d players (%.2f%%)\\n", countB, players, 100.0 * countB / players);
}`,
          output: `player 48213: B, again: B
variant B: 50026 of 100000 players (50.03%)`,
          annotations: [
            { lines: 18, text: 'Hashing the experiment name together with the player id gives each experiment an independent split, so players in variant B of one test are not systematically in B of the next.' },
            { lines: '27-28', text: 'A sample-ratio check: $50{,}026$ of $100{,}000$ gives $z = \\frac{50026 - 50000}{\\sqrt{100000 \\cdot 0.25}} \\approx 0.16$ — consistent with a fair $50/50$ split.' },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'mcq',
      prompt: 'You are testing a new post-match screen. Which randomization unit is best?',
      options: [
        { text: 'Each match: flip a coin for every match to decide which screen appears', why: 'The same player would see both versions, so effects leak between groups (a player who likes the new screen may play more matches of both kinds), and a player\'s matches are not independent observations.' },
        { text: 'Each player: hash the player id so a player always sees the same version', correct: true, why: 'Each player experiences one consistent version, players are (approximately) independent, and per-player metrics such as retention are well defined.' },
        { text: 'Each day: everyone sees the new screen on even days and the old one on odd days', why: 'Day-to-day differences (weekends, events, patches) are confounded with the version, and every player sees both versions.' },
        { text: 'Each platform: PC players get the new screen, console players the old one', why: 'Platform is not random: PC and console players differ in many ways, so any difference could be due to the platform rather than the screen. That is an [[stat-observational-study|observational comparison]], not an experiment.' },
      ],
      explanation: 'Randomize at the level where (1) the treatment is experienced consistently, (2) units do not affect each other, and (3) your metric is defined — for most game features, the player. Analyze at the same level: compute each player\'s metric, then compare groups of players.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'truefalse',
      prompt: 'Your game gets so much traffic that the planned sample size for an A/B test is reached in $36$ hours. It is good practice to stop the test then, since the power calculation is satisfied.',
      answer: false,
      explanation: 'Sample size is necessary but not sufficient. Thirty-six hours (say, a Tuesday and Wednesday) over-represent weekday players and miss weekend behavior, and they capture players in the **novelty** phase, when anything new gets extra attention. Run for at least one full weekly cycle (usually two), even if that gives more players than the minimum — the extra data only add power.',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'concept',
      title: 'Peeking: why checking every day breaks the test',
      blocks: [
        {
          type: 'p',
          text: 'A dashboard updates the p-value every morning. It is tempting to stop the moment it dips below $0.05$ — the result is significant, why wait? Because $\\alpha = 0.05$ is the false-positive rate of **one** test at **one** planned time. Each extra look gives random noise another chance to cross the line. This is [[stat-optional-stopping|optional stopping]], or peeking.',
        },
        peekGraph,
        {
          type: 'callout',
          variant: 'why',
          title: 'Why each look adds risk',
          text: 'Under $H_0$ the cumulative difference between the arms is a sum of independent noise terms — a random walk — and $z$ at day $k$ is that sum divided by its standard deviation. A single look at a fixed day has a $5\\%$ chance of $|z| > 1.96$. But "at least one of $30$ looks" is a union of $30$ events, and although neighbouring days are strongly correlated (they share most of their data), later looks keep adding new chances. The probability of the union grows with every look.',
        },
        {
          type: 'p',
          text: 'How bad is it? Simulate many A/A tests (no true effect), peek at different frequencies, and stop at the first $|z| > 1.96$:',
        },
        {
          type: 'code',
          title: 'peeking.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdio>
#include <random>

std::mt19937_64 rng(42);
double uniform01() { return (rng() >> 11) * 0x1.0p-53; }

// A/A test: both variants convert at exactly 10%, so every "win" is a false positive.
// Each day 100 new players join each arm. The test runs for at most 30 days.
int main() {
    const double p = 0.10;
    const int perDay = 100, days = 30, reps = 20'000;
    const int lookEvery[] = {30, 10, 5, 1};   // days between peeks (30 = look once at the end)

    for (int every : lookEvery) {
        int falsePositives = 0;
        for (int r = 0; r < reps; ++r) {
            int convA = 0, convB = 0, n = 0;      // conversions so far, players per arm
            for (int day = 1; day <= days; ++day) {
                for (int i = 0; i < perDay; ++i) {
                    convA += uniform01() < p;
                    convB += uniform01() < p;
                }
                n += perDay;
                if (day % every != 0) continue;   // not a peeking day
                double pa = double(convA) / n, pb = double(convB) / n;
                double pool = (convA + convB) / (2.0 * n);
                double z = (pb - pa) / std::sqrt(pool * (1 - pool) * 2.0 / n);
                if (std::fabs(z) > 1.96) { ++falsePositives; break; }   // "significant!" stop
            }
        }
        std::printf("looks: %2d (every %2d days)   false positive rate %.3f\\n",
                    days / every, every, double(falsePositives) / reps);
    }
}`,
          output: `looks:  1 (every 30 days)   false positive rate 0.050
looks:  3 (every 10 days)   false positive rate 0.106
looks:  6 (every  5 days)   false positive rate 0.150
looks: 30 (every  1 days)   false positive rate 0.274`,
          annotations: [
            { lines: '20-23', text: 'One day of traffic: each new player in each arm converts with the same probability $0.10$.' },
            { lines: '26-28', text: 'The pooled two-proportion $z$ test from the previous lesson, on all data collected so far.' },
            { lines: 29, text: 'Optional stopping: declare victory and stop at the first significant look.' },
          ],
        },
        {
          type: 'p',
          text: 'Looking once gives the promised $5\\%$. Peeking daily for a month gives $27\\%$ — more than one "winning" feature in four is pure noise. With unlimited peeking the false-positive rate tends to $100\\%$: a random walk eventually crosses any fixed boundary.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'How to look early without cheating',
          text: 'Either commit to one analysis at the planned sample size (watch guardrails only, to stop for **harm**), or use a method designed for repeated looks: **group-sequential** boundaries such as O\'Brien–Fleming, which demand a very small p-value at early looks and close to $0.05$ at the end; **alpha spending**; or **always-valid** sequential p-values that many experimentation platforms provide. Each spends the $5\\%$ error budget across the looks instead of spending it fully at every look.',
        },
      ],
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'mcq',
      prompt: 'Which procedure keeps the false-positive rate of an A/B test at $5\\%$?',
      options: [
        { text: 'Check the p-value every day and stop as soon as $p < 0.05$', why: 'That is optional stopping: with $30$ daily looks the false-positive rate is about $27\\%$.' },
        { text: 'Check every day, but only stop if $p < 0.05$ on two days in a row', why: 'Requiring two consecutive hits reduces the inflation a little but does not remove it: consecutive $z$ values are highly correlated, so noise that crosses once often stays across for a few days.' },
        { text: 'Keep running the test until it becomes significant', why: 'Under $H_0$ this eventually "succeeds" with probability approaching $1$ — it guarantees a false positive given enough time.' },
        { text: 'Fix the sample size from a power calculation and test once at the end', correct: true, why: 'One planned test at one planned time has exactly the error rate $\\alpha$ it was designed for.' },
      ],
      explanation: 'The $5\\%$ guarantee belongs to a single test at a pre-planned sample size. Any rule that lets the data decide **when** to stop (and stops on success) gives noise extra chances. If you need early looks, use a sequential design whose boundaries were built for them.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'concept',
      title: 'Multiple comparisons: test twenty things, find one',
      blocks: [
        {
          type: 'p',
          text: 'A post-launch report compares the variant with control on $20$ metrics: retention, sessions, spend, match length, chat messages… Suppose the feature does nothing at all. Each test has a $5\\%$ false-positive rate, so the chance that **at least one** comes out significant is much larger.',
        },
        {
          type: 'derivation',
          title: 'The family-wise error rate',
          steps: [
            { tex: 'P(\\text{no false positives in } m \\text{ independent tests}) = (1 - \\alpha)^m', why: 'Every true null must avoid rejection; independence lets the probabilities multiply.' },
            { tex: '\\text{FWER} = 1 - (1 - \\alpha)^m', why: 'The [[stat-family-wise-error-rate|family-wise error rate]]: probability of at least one false positive (complement).' },
            { tex: 'm = 20,\\ \\alpha = 0.05: \\quad 1 - 0.95^{20} \\approx 0.64', why: 'Twenty metrics give a $64\\%$ chance of at least one "significant" finding from pure noise. On average, one of the twenty will be significant.' },
          ],
          result: 'If you test many things, something will be significant. Reporting only that one is how a feature that does nothing gets a glowing launch report.',
        },
        {
          type: 'graph',
          x: [0, 50],
          y: [0, 1.05],
          xStep: 10,
          yStep: 0.2,
          height: 240,
          functions: [
            { expr: '1 - (1 - a)^x', color: 'red', label: 'no correction: $1 - (1-\\alpha)^m$', domain: [1, 50] },
            { expr: '1 - (1 - a/x)^x', color: 'green', label: 'Bonferroni ($\\alpha/m$ per test)', domain: [1, 50] },
          ],
          sliders: [{ name: 'a', min: 0.01, max: 0.1, step: 0.01, value: 0.05, label: 'per-test level $\\alpha$' }],
          readouts: [{ label: 'FWER with $20$ tests, uncorrected:', expr: '1 - (1 - a)^20', digits: 3 }],
          caption: 'Chance of at least one false positive among $m$ independent tests of true nulls. Uncorrected (red), it races toward $1$. With Bonferroni (green), it stays just under $\\alpha$ however many tests you run.',
        },
        {
          type: 'theorem',
          name: 'Bonferroni correction',
          tex: 'P\\left(\\bigcup_{i=1}^{m}\\left\\{p_i \\le \\tfrac{\\alpha}{m}\\right\\}\\right) \\le \\sum_{i=1}^{m} P\\left(p_i \\le \\tfrac{\\alpha}{m}\\right) = m \\cdot \\frac{\\alpha}{m} = \\alpha',
          text: 'Test each of $m$ hypotheses at level $\\alpha/m$. The union bound $P(A_1 \\cup \\cdots \\cup A_m) \\le \\sum P(A_i)$ guarantees FWER $\\le \\alpha$ for **any** dependence between the tests. The [[stat-bonferroni-correction|Bonferroni correction]] is simple and always valid, but conservative when $m$ is large.',
        },
        {
          type: 'p',
          text: 'When you are screening many metrics for promising leads, controlling the chance of even **one** false positive is often too strict. The [[stat-false-discovery-rate|false discovery rate]] (FDR) instead controls the expected **fraction** of your discoveries that are false. The **Benjamini–Hochberg** procedure: sort the p-values $p_{(1)} \\le \\cdots \\le p_{(m)}$, find the largest $i$ with $p_{(i)} \\le \\frac{i}{m}q$, and reject the $i$ smallest. With $8$ metrics and $q = 0.05$, the thresholds are $0.00625, 0.0125, 0.01875, 0.025, \\dots, 0.05$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'numeric',
      prompt: 'A feature that does nothing is tested on $10$ independent metrics, each at $\\alpha = 0.05$. What is the probability that at least one comes out significant? Give $3$ decimals.',
      hint: 'Complement: the probability that none of the $10$ is significant is $0.95^{10}$.',
      label: 'FWER $=$',
      answer: '1 - 0.95^10',
      answerTex: '0.401',
      tolerance: 0.0006,
      explanation: '$1 - 0.95^{10} = 1 - 0.5987 = 0.401$. Four times in ten, a useless feature will have at least one "significant" metric to brag about. Bonferroni would test each metric at $0.05/10 = 0.005$, giving FWER $= 1 - 0.995^{10} \\approx 0.049$. Adding the probabilities, $10 \\times 0.05 = 0.5$, overcounts (that is the union bound, an upper limit).',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'mcq',
      prompt: 'A test reports $8$ metrics with p-values $0.001$, $0.008$, $0.012$, $0.041$, $0.042$, $0.26$, $0.45$, $0.78$. Using the **Bonferroni** correction with overall $\\alpha = 0.05$, how many metrics are significant?',
      options: [
        { text: '$5$', why: 'That counts every $p < 0.05$, i.e. no correction at all. With $8$ tests the per-test threshold must be $0.05/8$.' },
        { text: '$3$', why: 'That is the Benjamini–Hochberg (FDR) answer: $0.012 \\le \\frac{3}{8}(0.05) = 0.01875$ but $0.041 > \\frac{4}{8}(0.05) = 0.025$. Bonferroni is stricter.' },
        { text: '$1$', correct: true, why: 'The Bonferroni threshold is $0.05/8 = 0.00625$, and only $p = 0.001$ is below it.' },
        { text: '$0$', why: '$p = 0.001$ is below $0.00625$, so one metric survives.' },
      ],
      explanation: 'Bonferroni: compare each p-value with $\\alpha/m = 0.00625$ → only $0.001$ passes. Benjamini–Hochberg is more generous: thresholds $\\frac{i}{8}(0.05)$ give $0.001 \\le 0.00625$, $0.008 \\le 0.0125$, $0.012 \\le 0.01875$, then $0.041 > 0.025$, so it rejects the three smallest. Without correction, five metrics look significant — including two hovering at $0.04$, the classic signature of noise.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'concept',
      title: 'p-hacking and the replication crisis',
      blocks: [
        {
          type: 'p',
          text: 'Multiple comparisons do not have to be explicit. Every analysis involves choices: which metric, which subgroup ("Android players in Brazil on weekends"), which outlier rule, which date range, when to stop. If you try several and report the one that reaches $p < 0.05$, you have run many tests while reporting one. That is [[stat-p-hacking|p-hacking]], and it rarely feels like cheating from the inside — each choice seems reasonable after you see where it leads (the "garden of forking paths").',
        },
        {
          type: 'callout',
          variant: 'history',
          title: 'The replication crisis',
          text: 'In 2005 John Ioannidis argued that most published research findings are false, given small samples, flexible analyses and the bias toward publishing significant results. In 2015 the Open Science Collaboration repeated $100$ published psychology experiments: $97\\%$ of the originals had been significant, but only about $36\\%$ of the replications were, and the replicated effects were on average about half as large. Similar problems turned up in medicine, economics and machine learning benchmarks.',
        },
        {
          type: 'p',
          text: 'There is a subtler problem too, the **winner\'s curse**. Suppose a feature truly improves engagement by $d = 0.2$ and you test it with $50$ players per group: power is only about $17\\%$. In the runs that **do** reach significance, the estimated effect averages about $0.5$ — $2.5$ times the truth — because only the lucky overestimates clear the bar. Underpowered studies that "succeed" systematically exaggerate.',
        },
        {
          type: 'list',
          items: [
            '**Pre-register**: write down the hypothesis, primary metric, sample size, and analysis plan before the test starts.',
            '**Report everything**: all metrics and all variants tested, not just the winners, with effect sizes and confidence intervals.',
            '**Correct for multiplicity**: Bonferroni or Holm for a few confirmatory tests, Benjamini–Hochberg for screening.',
            '**Separate exploration from confirmation**: a surprising subgroup result is a hypothesis for the **next** experiment, not a conclusion.',
            '**Power the test properly**, and replicate important wins before betting the roadmap on them.',
          ],
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Build it into the platform',
          text: 'The best defense is tooling: an experimentation service that requires a primary metric and sample size at creation time, hides p-values until the planned end (or uses sequential tests), shows guardrails continuously, and labels every secondary metric as exploratory. Large studios and tech companies run thousands of experiments a year this way precisely because humans are bad at resisting a p-value that is almost significant.',
        },
      ],
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'error',
      prompt: 'Read this summary of a battle-pass experiment. Tap the first line where the analysis goes wrong.',
      lines: [
        'Players were randomized by player id: $50\\%$ saw the new battle pass, $50\\%$ the old one.',
        'The planned primary metric was 30-day revenue per player; the test ran the planned $4$ weeks.',
        'Revenue per player did not differ significantly ($p = 0.31$).',
        'We then compared the groups within $24$ country-and-platform segments, and "Android in Brazil" was significant ($p = 0.03$).',
        'Conclusion: the new battle pass increases revenue, so ship it to Android players in Brazil.',
      ],
      errorLines: [4],
      explanation: 'Lines 1–3 are a clean experiment with a null result on the pre-registered metric. Line 4 runs $24$ unplanned subgroup tests: even if the battle pass does nothing, $1 - 0.95^{24} \\approx 0.71$ is the chance that at least one segment shows $p < 0.05$. With Bonferroni the threshold would be $0.05/24 \\approx 0.002$, and $0.03$ is nowhere near it. The honest conclusion: no evidence of a revenue effect; "Android in Brazil" is at most a hypothesis to test in a new, pre-registered experiment.',
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'order',
      prompt: 'Put the steps of running an A/B test on a game feature in order.',
      lines: [
        'Write down the hypothesis, the primary metric, guardrail metrics and $\\alpha$',
        'Choose the minimum detectable effect and compute the sample size for $80\\%$ power',
        'Set the duration in full weeks and verify the assignment with an A/A test',
        'Randomize players by hashed id and run the test, watching only guardrails and the sample ratio',
        'At the planned end, run the pre-specified test on the primary metric',
        'Report the effect size with a confidence interval, plus all secondary metrics labeled as exploratory',
      ],
      explanation: 'Every decision that could be influenced by the results is made first: hypothesis, metric, $\\alpha$, MDE, sample size, duration. During the test you only look for **harm** (guardrails) and **bugs** (sample ratio). The confirmatory analysis happens once, as planned, and the report gives the size of the effect, not just a p-value.',
    },
  ],
  takeaways: [
    'Power $= P(\\text{reject} \\mid \\text{effect})$. For two groups of $n$: power $\\approx \\Phi(d\\sqrt{n/2} - z_{\\alpha/2})$, with $d = \\delta/\\sigma$.',
    'Sample size per group: $n = 2(z_{\\alpha/2} + z_\\beta)^2\\sigma^2/\\delta^2 \\approx 16\\sigma^2/\\delta^2$ for $\\alpha = 0.05$, $80\\%$ power. Halving the MDE quadruples $n$.',
    'A/B design: randomize players (hashed id), one pre-registered primary metric, guardrails, full-week duration, sample-ratio and A/A checks, one analysis at the planned end.',
    'Peeking with optional stopping inflates false positives: $30$ daily looks turn $5\\%$ into about $27\\%$. Use a fixed horizon or a sequential design.',
    '$m$ tests at level $\\alpha$: FWER $= 1 - (1-\\alpha)^m$ ($64\\%$ for $20$). Bonferroni ($\\alpha/m$) controls FWER by the union bound; Benjamini–Hochberg controls the false discovery rate.',
    'p-hacking (forking paths, subgroup fishing) and the winner\'s curse fueled the replication crisis. Pre-register, report everything, correct for multiplicity, and replicate.',
  ],
  reading: [
    {
      title: 'Wikipedia — A/B testing',
      url: 'https://en.wikipedia.org/wiki/A/B_testing',
      source: 'wikipedia',
      note: 'History and practice of online controlled experiments, with common pitfalls.',
    },
    {
      title: 'Wikipedia — Multiple comparisons problem',
      url: 'https://en.wikipedia.org/wiki/Multiple_comparisons_problem',
      source: 'wikipedia',
      note: 'Family-wise error rate, Bonferroni and Holm, and false discovery rate control explained side by side.',
    },
    {
      title: 'Wikipedia — Replication crisis',
      url: 'https://en.wikipedia.org/wiki/Replication_crisis',
      source: 'wikipedia',
      note: 'The large replication projects, their findings, and the reforms (pre-registration, registered reports) that followed.',
    },
    {
      title: 'Wikipedia — Power of a test',
      url: 'https://en.wikipedia.org/wiki/Power_of_a_test',
      source: 'wikipedia',
      note: 'Power analysis, its dependence on effect size, sample size and significance level, and its use in planning studies.',
    },
  ],
};
