import type { Lesson } from '../../types';

// Ten noisy samples of sin(2πx) at x = 0, 1/9, …, 1 (noise SD 0.25), used for the overfitting demo.
const dataY = [0.01, 0.72, 1.03, 0.65, 0.05, -0.26, -0.76, -0.51, -0.8, 0.1];
// Least-squares polynomial fits to those points (numpy.polyfit, full precision).
const fit1 = '(-1.20381818181818)*x + (0.624909090909091)';
const fit3 = '(17.8978846153846)*x^3 + (-26.4939860139861)*x^2 + (8.62966783216785)*x + (0.0584895104895053)';
const fit9 =
  '(40260.2145072801)*x^9 + (-175186.915897694)*x^8 + (318952.382670015)*x^7 + (-315275.527973577)*x^6 + (183502.661205913)*x^5 + (-63696.1813603082)*x^4 + (12719.3099465984)*x^3 + (-1338.06977679956)*x^2 + (62.2166785715488)*x + (0.00999999998844591)';
// Mean squared error by polynomial degree: on the 10 training points, and on 200,000 fresh points.
const trainMse = [0.355, 0.208, 0.207, 0.021, 0.018, 0.017, 0.008, 0.007, 0.003, 0.0];
const testMse = [0.562, 0.3, 0.3, 0.08, 0.084, 0.091, 0.101, 0.104, 0.143, 0.336];
const curve = (ys: number[], color: 'blue' | 'red') =>
  ys.slice(1).map((y, i) => ({ from: [i, ys[i]] as [number, number], to: [i + 1, y] as [number, number], color }));

export const lesson: Lesson = {
  id: 'stat-games-ml',
  title: 'Statistics in Games and Machine Learning',
  summary: 'The course at work: telemetry funnels and retention curves, Elo ratings as online logistic regression, balancing with win-rate confidence intervals, catching cheaters with outlier statistics and base rates, the bias–variance trade-off, overfitting and cross-validation, confusion matrices with precision and recall — and a look back over the whole course and where to go next.',
  minutes: 26,
  objectives: [
    'Analyze a telemetry funnel and a retention curve, and compute expected player lifetime as the integral of the survival curve',
    'Compute Elo expected scores and rating updates, and explain the update as a gradient step on a logistic model',
    'Judge a balance change with win-rate confidence intervals while accounting for sample size and multiple comparisons',
    'Flag outliers with $z$-scores and robust statistics, and use Bayes\' theorem to find the precision of a cheat detector',
    'Explain the bias–variance trade-off, detect overfitting with cross-validation, and evaluate a classifier with a confusion matrix, precision and recall',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Telemetry and funnel analysis',
      blocks: [
        {
          type: 'p',
          text: 'Modern games log **telemetry**: timestamped events such as `install`, `tutorial_start`, `match_end` (with the hero, the result and the rating of every player), `purchase` and `crash`. Every technique in this course turns those tables of events into decisions. The first question is usually where players drop out.',
        },
        {
          type: 'p',
          text: 'A **funnel** follows a cohort of players through a sequence of steps and records how many reach each one. The **step conversion** is the fraction of players at one step who reach the next; the overall conversion is their product (the multiplication rule: $P(A \\cap B \\cap \\dots) = P(A)\\,P(B \\mid A)\\cdots$).',
        },
        {
          type: 'figure',
          svg: '<svg viewBox="0 0 520 262" xmlns="http://www.w3.org/2000/svg"><text x="400" y="16" font-size="12" font-weight="600" class="t-orange">step conversion</text><text x="142" y="48" text-anchor="end" font-size="12.5">Installed</text><rect x="150" y="28" width="210.0" height="30" rx="4" class="f-blue s-blue" fill-opacity="0.25" stroke-width="1.4"/><text x="366.0" y="48" font-size="12.5" font-weight="600">10,000</text><text x="142" y="90" text-anchor="end" font-size="12.5">Started tutorial</text><rect x="150" y="70" width="180.6" height="30" rx="4" class="f-blue s-blue" fill-opacity="0.25" stroke-width="1.4"/><text x="336.6" y="90" font-size="12.5" font-weight="600">8,600</text><text x="400" y="90" font-size="12.5" class="t-orange">86%</text><text x="142" y="132" text-anchor="end" font-size="12.5">Finished tutorial</text><rect x="150" y="112" width="135.4" height="30" rx="4" class="f-blue s-blue" fill-opacity="0.25" stroke-width="1.4"/><text x="291.4" y="132" font-size="12.5" font-weight="600">6,450</text><text x="400" y="132" font-size="12.5" class="t-orange">75%</text><text x="142" y="174" text-anchor="end" font-size="12.5">Played a match</text><rect x="150" y="154" width="108.4" height="30" rx="4" class="f-blue s-blue" fill-opacity="0.25" stroke-width="1.4"/><text x="264.4" y="174" font-size="12.5" font-weight="600">5,160</text><text x="400" y="174" font-size="12.5" class="t-orange">80%</text><text x="142" y="216" text-anchor="end" font-size="12.5">Returned day 1</text><rect x="150" y="196" width="54.2" height="30" rx="4" class="f-blue s-blue" fill-opacity="0.25" stroke-width="1.4"/><text x="210.2" y="216" font-size="12.5" font-weight="600">2,580</text><text x="400" y="216" font-size="12.5" class="t-orange">50%</text><text x="150" y="252" font-size="12.5" font-weight="600" class="t-green">overall: 2,580 / 10,000 = 0.86 × 0.75 × 0.80 × 0.50 = 25.8%</text></svg>',
          alt: 'A funnel of horizontal bars: Installed 10,000; Started tutorial 8,600 (86% step conversion); Finished tutorial 6,450 (75%); Played a match 5,160 (80%); Returned day 1 2,580 (50%). Overall conversion 25.8%.',
          caption: 'The biggest absolute loss is the last step (half of the players who played a match never came back), but the $25\\%$ who quit **during** the tutorial are often the cheapest to win back.',
          maxWidth: 520,
        },
        {
          type: 'p',
          text: 'Each step conversion is a proportion, so it gets a standard error and a confidence interval: the tutorial completion rate $\\hat{p} = 6450/8600 = 0.75$ has $\\operatorname{SE} = \\sqrt{0.75 \\cdot 0.25/8600} \\approx 0.0047$, so a $95\\%$ CI of about $0.75 \\pm 0.009$. Comparing funnels for two app versions is a two-proportion test at each step.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Funnels show association, not causation',
          text: 'Players who finish the tutorial retain far better than those who skip it. That does **not** prove the tutorial causes retention: motivated players both finish tutorials and come back. Forcing everyone through the tutorial might change nothing — or annoy the experienced players. Only a [[stat-randomized-experiment|randomized experiment]] (an A/B test) answers the causal question.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'numeric',
      prompt: 'A mobile game\'s funnel has step conversions $0.90$ (install $\\to$ open), $0.70$ (open $\\to$ finish tutorial), $0.80$ (tutorial $\\to$ first match) and $0.45$ (first match $\\to$ return on day 1). What fraction of installers return on day 1? Decimal to $4$ places.',
      hint: 'Multiply the step conversions.',
      label: 'overall conversion $=$',
      answer: '0.9*0.7*0.8*0.45',
      tolerance: 0.00005,
      answerTex: '0.2268',
      explanation: 'Overall conversion is the product of the conditional step probabilities: $0.90 \\times 0.70 \\times 0.80 \\times 0.45 = 0.2268$. Of $50{,}000$ installs, about $11{,}340$ return on day 1. Because the steps multiply, a $10\\%$ relative improvement at **any** step raises the overall rate by $10\\%$ — so fix the step that is cheapest to improve, not necessarily the leakiest.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Retention curves and player lifetime',
      blocks: [
        {
          type: 'p',
          text: 'Let $T$ be how many days a new player keeps playing. The [[stat-retention-curve|retention curve]] is its survival function $S(t) = P(T > t)$: D1, D7 and D30 retention are $S(1), S(7), S(30)$. If every player quit at a constant rate $\\lambda$, $T$ would be $\\text{Exp}(\\lambda)$ and $S(t) = e^{-\\lambda t}$. Real curves drop steeply and then flatten, because a cohort mixes **tourists** who leave fast with a **core** who stay. A two-group mixture captures this:',
        },
        {
          type: 'math',
          tex: 'S(t) = p\\,e^{-a t} + (1 - p)\\,e^{-b t}, \\qquad a \\gg b',
          caption: 'A fraction $p$ of tourists quit at rate $a$ per day; the core quits at the slow rate $b$. By the law of total probability, the cohort\'s survival is the weighted average.',
        },
        {
          type: 'derivation',
          title: 'Expected lifetime is the area under the retention curve',
          steps: [
            { tex: 'E[T] = \\int_0^\\infty t\\,f(t)\\,dt, \\qquad f(t) = -S\'(t)', why: 'The density is minus the derivative of the survival function, since $S = 1 - F$.' },
            { tex: '= \\Big[-t\\,S(t)\\Big]_0^\\infty + \\int_0^\\infty S(t)\\,dt', why: '[[integration-by-parts|Integration by parts]] with $u = t$, $dv = -S\'(t)\\,dt$, so $v = -S(t)$.' },
            { tex: '= \\int_0^\\infty S(t)\\,dt', why: 'The boundary term is $0$ at $t = 0$, and $t\\,S(t) \\to 0$ as $t \\to \\infty$ whenever $E[T]$ is finite (true for exponential tails).' },
            { tex: '\\int_0^\\infty \\left(p e^{-at} + (1-p)e^{-bt}\\right)dt = \\frac{p}{a} + \\frac{1-p}{b}', why: 'Each exponential integrates to $1/\\text{rate}$ (an [[improper-integral|improper integral]]).' },
            { tex: 'p = 0.6,\\ a = 0.5,\\ b = 0.02: \\quad E[T] = 1.2 + 20 = 21.2 \\text{ days}', why: 'The $40\\%$ core contributes $20$ of the $21.2$ days. Lifetime value is driven by the core.' },
          ],
          result: 'This is the continuous version of the tail-sum formula $E[X] = \\sum_{k \\ge 1} P(X \\ge k)$ from Discrete Math. Multiply $E[T]$ by revenue per player-day and you have a first estimate of lifetime value.',
        },
        {
          type: 'graph',
          x: [0, 60],
          y: [0, 1.05],
          xStep: 10,
          yStep: 0.25,
          height: 260,
          functions: [
            { expr: 'p*exp(-a*x) + (1 - p)*exp(-b*x)', color: 'blue', label: 'retention $S(t)$', domain: [0, 60] },
            { expr: '(1 - p)*exp(-b*x)', color: 'green', dashed: true, label: 'core players still active', domain: [0, 60] },
          ],
          areas: [{ expr: 'p*exp(-a*x) + (1 - p)*exp(-b*x)', from: 0, to: 60, color: 'blue' }],
          points: [
            { x: 1, y: 'p*exp(-a) + (1 - p)*exp(-b)', label: 'D1', color: 'blue' },
            { x: 7, y: 'p*exp(-7a) + (1 - p)*exp(-7b)', label: 'D7', color: 'blue' },
            { x: 30, y: 'p*exp(-30a) + (1 - p)*exp(-30b)', label: 'D30', color: 'blue' },
          ],
          sliders: [
            { name: 'p', min: 0, max: 1, step: 0.05, value: 0.6, label: 'tourist fraction $p$' },
            { name: 'a', min: 0.1, max: 2, step: 0.05, value: 0.5, label: 'tourist quit rate $a$ (per day)' },
            { name: 'b', min: 0.005, max: 0.1, step: 0.005, value: 0.02, label: 'core quit rate $b$ (per day)' },
          ],
          readouts: [
            { label: 'D1 $=$', expr: 'p*exp(-a) + (1 - p)*exp(-b)', digits: 3 },
            { label: 'D7 $=$', expr: 'p*exp(-7a) + (1 - p)*exp(-7b)', digits: 3 },
            { label: 'D30 $=$', expr: 'p*exp(-30a) + (1 - p)*exp(-30b)', digits: 3 },
            { label: '$E[T] = \\frac{p}{a} + \\frac{1-p}{b} =$', expr: 'p/a + (1 - p)/b', digits: 1 },
          ],
          caption: 'The horizontal axis is days since install. Defaults give D1 $\\approx 0.76$, D7 $\\approx 0.37$, D30 $\\approx 0.22$. Halving $b$ (a stickier endgame) adds far more lifetime than halving $a$: the shaded area, which is $E[T]$ (up to day $60$ here), lives mostly in the long tail.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Why the quit rate seems to fall',
          text: 'Among players still active on day $t$, the share of tourists keeps shrinking, so the cohort\'s daily quit rate (the [[stat-hazard-rate|hazard rate]] $f(t)/S(t)$) falls over time — even though no individual player became more loyal. It is a selection effect, a cousin of [[stat-simpsons-paradox|Simpson\'s paradox]]. Real analyses must also handle players who are still active when the data are pulled (*censoring*); survival analysis, for example the Kaplan–Meier estimator, does this properly.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'numeric',
      prompt: 'A cohort is modeled by $S(t) = 0.7\\,e^{-t} + 0.3\\,e^{-0.05t}$ ($t$ in days). What is the expected player lifetime $E[T] = \\int_0^\\infty S(t)\\,dt$ in days? Decimal to $1$ place.',
      hint: '$\\int_0^\\infty e^{-ct}\\,dt = 1/c$.',
      label: '$E[T] =$',
      answer: '0.7/1 + 0.3/0.05',
      tolerance: 0.05,
      unit: 'days',
      answerTex: '0.7 + 6 = 6.7',
      explanation: '$E[T] = \\frac{0.7}{1} + \\frac{0.3}{0.05} = 0.7 + 6 = 6.7$ days. The tourists ($70\\%$ of installs) contribute under a day in total; the $30\\%$ core contributes $6$ days. Improving early retention matters mainly because it moves players into the core.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Rating systems: Elo, Glicko and TrueSkill',
      blocks: [
        {
          type: 'p',
          text: 'Matchmaking needs a number for each player\'s skill, estimated from wins and losses. The [[stat-elo-rating|Elo system]] (from chess, 1960s) models the probability that A beats B as a **logistic function** of the rating difference and nudges ratings after each game.',
        },
        {
          type: 'theorem',
          name: 'Elo expected score and update',
          tex: 'E_A = \\frac{1}{1 + 10^{(R_B - R_A)/400}}, \\qquad R_A\' = R_A + K\\,(S_A - E_A)',
          text: '$S_A$ is the actual result ($1$ win, $\\frac{1}{2}$ draw, $0$ loss) and $K$ (often $16$–$40$) sets the step size. $B$ is updated with $E_B = 1 - E_A$, so the rating points that $A$ gains, $B$ loses.',
        },
        {
          type: 'p',
          text: 'The scale is chosen so that a $400$-point advantage means odds of $10$ to $1$: $E_A = \\frac{1}{1 + 10^{-1}} = \\frac{10}{11} \\approx 0.91$. Equal ratings give $E_A = \\frac{1}{2}$. Surprises move ratings a lot (a $1600$ player who beats a $1800$ player gains $K(1 - 0.24)$), expected results barely move them.',
        },
        {
          type: 'graph',
          x: [-800, 800],
          y: [0, 1],
          xStep: 200,
          yStep: 0.25,
          height: 250,
          functions: [{ expr: '1/(1 + 10^(-x/400))', color: 'blue', label: '$E_A$ as a function of $R_A - R_B$' }],
          points: [{ x: 'd', y: '1/(1 + 10^(-d/400))', color: 'orange', label: 'this match' }],
          hlines: [{ y: 0.5, color: 'gray' }],
          sliders: [
            { name: 'd', min: -800, max: 800, step: 25, value: -200, label: 'rating difference $R_A - R_B$' },
            { name: 'k', min: 8, max: 64, step: 8, value: 32, label: 'K-factor' },
          ],
          readouts: [
            { label: '$E_A =$', expr: '1/(1 + 10^(-d/400))', digits: 3 },
            { label: 'A wins: $R_A$ changes by $+K(1 - E_A) =$', expr: 'k*(1 - 1/(1 + 10^(-d/400)))', digits: 1 },
            { label: 'A loses: $R_A$ changes by $-K E_A =$', expr: '-k/(1 + 10^(-d/400))', digits: 1 },
          ],
          caption: 'The S-shaped logistic curve: the horizontal axis is the rating difference in Elo points. An underdog\'s win is worth many points, a favorite\'s win few. A larger $K$ adapts faster to real changes in skill but makes ratings noisier.',
        },
        {
          type: 'derivation',
          title: 'The Elo update is a gradient step on a logistic model',
          steps: [
            { tex: 'E_A = \\sigma\\big(c(R_A - R_B)\\big), \\quad \\sigma(z) = \\frac{1}{1 + e^{-z}}, \\ c = \\frac{\\ln 10}{400}', why: 'Rewrite $10^{-x/400} = e^{-cx}$: Elo\'s curve is the logistic function from [[stat-logistic-regression|logistic regression]].' },
            { tex: '\\ell(R_A) = S_A\\ln E_A + (1 - S_A)\\ln(1 - E_A)', why: 'The log-likelihood of one game\'s result under the model (a Bernoulli trial with success probability $E_A$).' },
            { tex: '\\frac{\\partial \\ell}{\\partial R_A} = \\left(\\frac{S_A}{E_A} - \\frac{1 - S_A}{1 - E_A}\\right)c\\,E_A(1 - E_A) = c\\,(S_A - E_A)', why: '[[chain-rule|Chain rule]] with $\\sigma\'(z) = \\sigma(z)(1 - \\sigma(z))$; then simplify the bracket over the common denominator $E_A(1 - E_A)$.' },
            { tex: 'R_A \\leftarrow R_A + \\eta\\, c\\,(S_A - E_A) = R_A + K(S_A - E_A)', why: 'One step of gradient ascent on the likelihood with learning rate $\\eta$; Elo\'s $K$ is $\\eta c$.' },
          ],
          result: 'Elo is **online [[stat-maximum-likelihood|maximum likelihood]]** for a logistic model, updated one game at a time by stochastic gradient ascent — the same algorithm that trains neural networks.',
        },
        {
          type: 'code',
          title: 'elo_sim.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdio>
#include <random>
#include <vector>

std::mt19937_64 rng(400);
double uniform01() { return (rng() >> 11) * 0x1.0p-53; }

// Probability that a player rated ra beats one rated rb.
double expectedScore(double ra, double rb) { return 1.0 / (1.0 + std::pow(10.0, (rb - ra) / 400.0)); }

int main() {
    const int n = 50;
    std::vector<double> skill(n), elo(n, 1500.0);    // hidden true strength, public rating
    for (int i = 0; i < n; ++i) skill[i] = 1100 + 20.0 * i;   // 1100 ... 2080

    const double K = 24;
    for (int game = 1; game <= 50'000; ++game) {
        int a = int(uniform01() * n), b = int(uniform01() * n);
        if (a == b) continue;
        double sA = uniform01() < expectedScore(skill[a], skill[b]) ? 1.0 : 0.0;   // play
        double eA = expectedScore(elo[a], elo[b]);                                  // predict
        elo[a] += K * (sA - eA);                                                    // update
        elo[b] -= K * (sA - eA);                                                    // zero-sum
        if (game == 500 || game == 50'000) {
            double mx = 0, my = 0, sxy = 0, sxx = 0, syy = 0;
            for (int i = 0; i < n; ++i) { mx += skill[i] / n; my += elo[i] / n; }
            for (int i = 0; i < n; ++i) {
                sxy += (skill[i] - mx) * (elo[i] - my);
                sxx += (skill[i] - mx) * (skill[i] - mx);
                syy += (elo[i] - my) * (elo[i] - my);
            }
            std::printf("after %5d games: r(skill, Elo) = %.3f, mean Elo %.1f\\n",
                        game, sxy / std::sqrt(sxx * syy), my);
        }
    }
    for (int i : {0, 25, 49})
        std::printf("true %4.0f  ->  Elo %4.0f\\n", skill[i], elo[i]);
}`,
          output: `after   500 games: r(skill, Elo) = 0.922, mean Elo 1500.0
after 50000 games: r(skill, Elo) = 0.992, mean Elo 1500.0
true 1100  ->  Elo 1051
true 1600  ->  Elo 1443
true 2080  ->  Elo 1972`,
          annotations: [
            { lines: 21, text: 'Results are generated from the **hidden** true skills with the logistic model, so we know the right answer.' },
            { lines: '22-24', text: 'Predict with the public ratings, then update both players by the surprise $S_A - E_A$.' },
            { lines: '25-33', text: 'The correlation coefficient $r$ between true skill and rating: $0.92$ after about $20$ games per player, $0.99$ later.' },
          ],
        },
        {
          type: 'p',
          text: 'Elo only measures **differences**: the average stays at $1500$, so the ratings sit about $90$ points below the true skills (whose average is $1590$), and the $K = 24$ steps leave noise of tens of points. **Glicko** adds a rating deviation per player — a new or long-absent player has a wide uncertainty and moves fast, a veteran moves slowly; it is a Bayesian update in disguise. **TrueSkill** (Xbox Live) keeps a normal belief $N(\\mu, \\sigma^2)$ per player, handles teams and free-for-alls, and ranks by a conservative $\\mu - 3\\sigma$.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Matchmaking',
          text: 'A matchmaker searches for opponents with $E_A \\approx 0.5$ (fair games feel best and teach the rating system the most) while keeping queue times short: start with a narrow rating window and widen it the longer a player waits. With team games, balance the predicted win probability of the two teams, and prefer pairing high-uncertainty players with each other so their ratings converge quickly.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'numeric',
      prompt: 'A player rated $1600$ beats a player rated $1800$. With $K = 32$, what is the winner\'s new Elo rating? Decimal to $1$ place.',
      hint: 'First $E_A = 1/(1 + 10^{200/400})$, then $R_A\' = 1600 + 32(1 - E_A)$.',
      label: '$R_A\' =$',
      answer: '1600 + 32*(1 - 1/(1 + 10^0.5))',
      tolerance: 0.06,
      answerTex: '1600 + 32(1 - 0.2403) \\approx 1624.3',
      explanation: '$E_A = \\frac{1}{1 + 10^{0.5}} = \\frac{1}{1 + 3.1623} \\approx 0.2403$: the underdog was expected to score about $0.24$. Winning ($S_A = 1$) gives $R_A\' = 1600 + 32(0.7597) \\approx 1624.3$, and the loser drops by the same $24.3$ to about $1775.7$. Had the favorite won, it would have gained only $32 \\times 0.2403 \\approx 7.7$.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'Balancing with win-rate confidence intervals',
      blocks: [
        {
          type: 'p',
          text: 'A hero won $1{,}040$ of $2{,}000$ ranked matches: $52\\%$. Is it overpowered? A win rate is a sample proportion, so put an error bar on it before anyone opens a patch-notes draft.',
        },
        {
          type: 'derivation',
          title: 'Is $52\\%$ over $2000$ games evidence of imbalance?',
          steps: [
            { tex: '\\hat{p} = \\frac{1040}{2000} = 0.52, \\quad \\operatorname{SE} = \\sqrt{\\frac{0.52 \\cdot 0.48}{2000}} \\approx 0.0112', why: 'The standard error of a proportion, $\\sqrt{\\hat{p}(1 - \\hat{p})/n}$.' },
            { tex: '0.52 \\pm 1.96(0.0112) = [0.498,\\ 0.542]', why: 'A $95\\%$ confidence interval uses $z_{0.025} = 1.96$.' },
            { tex: 'z = \\frac{0.52 - 0.50}{\\sqrt{0.25/2000}} \\approx 1.79, \\quad p\\text{-value} \\approx 0.074', why: 'The matching two-sided test of $H_0\\colon p = 0.5$ uses the null standard error $\\sqrt{0.5 \\cdot 0.5/n}$.' },
          ],
          result: 'The interval includes $50\\%$ and $p > 0.05$: $2000$ games cannot distinguish this hero from a perfectly balanced one. That is not proof it *is* balanced — just that the data are not yet decisive.',
        },
        {
          type: 'graph',
          x: [0.44, 0.56],
          y: [0, 90],
          xStep: 0.02,
          yStep: 20,
          height: 250,
          functions: [{ expr: 'normpdf((x - 0.5)/sqrt(0.25/n))/sqrt(0.25/n)', color: 'gray', label: 'win rates a balanced hero produces in $n$ games' }],
          areas: [
            { expr: 'normpdf((x - 0.5)/sqrt(0.25/n))/sqrt(0.25/n)', from: 0.52, to: 0.56, color: 'red' },
            { expr: 'normpdf((x - 0.5)/sqrt(0.25/n))/sqrt(0.25/n)', from: 0.44, to: 0.48, color: 'red' },
          ],
          vlines: [{ x: 0.52, label: 'observed 52%', color: 'orange' }],
          sliders: [{ name: 'n', min: 200, max: 10000, step: 200, value: 2000, label: 'games played $n$' }],
          readouts: [
            { label: 'two-sided $p$-value for $52\\%$:', expr: '2(1 - normcdf(0.02/sqrt(0.25/n)))', digits: 4 },
            { label: '$95\\%$ CI half-width:', expr: '1.96*sqrt(0.52*0.48/n)', digits: 4 },
          ],
          caption: 'The curve is the sampling distribution of the win rate of a hero whose true rate is exactly $50\\%$; the red tails are results at least as far from $50\\%$ as $52\\%$. At $n = 2000$ they hold $7\\%$ of the probability. Slide to $n = 8000$: the same $52\\%$ now has $p \\approx 0.0003$. Evidence depends on the effect **and** the sample size.',
        },
        {
          type: 'list',
          items: [
            '**Sample size**: to estimate a win rate within $\\pm 1$ percentage point at $95\\%$ confidence you need $n \\approx 1.96^2 (0.25)/0.01^2 \\approx 9600$ games — per hero, per rank bracket you care about.',
            '**Multiple comparisons**: with $40$ balanced heroes each tested at $\\alpha = 0.05$, you expect $40 \\times 0.05 = 2$ false alarms every patch. A Bonferroni correction tests each at $0.05/40$, i.e. $|z| > 3.23$.',
            '**Confounding**: a hero picked mostly by high-rated players looks strong because of its players. Compare within rating brackets, exclude mirror matches, or model skill and hero together (a regression with both).',
          ],
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Practical significance',
          text: 'With millions of matches, a $50.3\\%$ hero is "significantly" above $50\\%$ — and nobody cares. Decide in advance what size of imbalance is worth a patch (say $\\pm 2$ points), then ask whether the confidence interval lies outside that band.',
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'mcq',
      prompt: 'A newly released hero wins $53\\%$ of its first $400$ matches; the $95\\%$ confidence interval for its true win rate is $[0.481, 0.579]$. A designer says: "The interval contains $50\\%$, so the hero is balanced. No change needed." What is the best response?',
      options: [
        { text: 'Correct: since $50\\%$ is inside the interval, the data prove the hero is balanced.', why: 'Failing to reject $p = 0.5$ is not proof of $p = 0.5$. The same interval also contains $57\\%$, which would be badly overpowered.' },
        { text: 'Wrong: $53\\%$ is above $50\\%$, so the hero is overpowered and should be nerfed now.', why: 'A $3$-point gap over $400$ games is well within sampling noise (the half-width is about $5$ points). Patching on noise makes balance worse.' },
        { text: 'The data are inconclusive: true win rates from about $48\\%$ to $58\\%$ are all plausible. Collect more games before deciding.', correct: true, why: 'The interval is too wide to rule out either "balanced" or "clearly overpowered". About $9600$ games would narrow it to $\\pm 1$ point.' },
        { text: 'There is a $95\\%$ chance that the hero\'s win rate in the next $400$ matches will be between $48.1\\%$ and $57.9\\%$.', why: 'A confidence interval is about the long-run true rate, not about a future sample\'s win rate (which would vary even more, since it has its own noise).' },
      ],
      explanation: 'The interval is $0.53 \\pm 1.96\\sqrt{0.53 \\cdot 0.47/400} = 0.53 \\pm 0.049$. Both "balanced" ($50\\%$) and "overpowered" ($57\\%$) are consistent with it. Absence of evidence is not evidence of absence; the right move is more data, or a prior from similar heroes (as in the Bayesian lesson) to stabilize early estimates.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'concept',
      title: 'Catching cheaters: outliers and base rates',
      blocks: [
        {
          type: 'p',
          text: 'Aimbots leave statistical fingerprints: headshot rates, reaction times and tracking accuracy far outside human ranges. The simplest detector is a [[stat-z-score|z-score]]: how many standard errors is this player from what an honest player would produce?',
        },
        {
          type: 'derivation',
          title: 'A suspicious headshot rate',
          steps: [
            { tex: 'p_0 = 0.30, \\quad \\text{player: } 180 \\text{ headshots in } 400 \\text{ kills}, \\ \\hat{p} = 0.45', why: 'Typical players at this rank land $30\\%$ of kills as headshots.' },
            { tex: 'z = \\frac{0.45 - 0.30}{\\sqrt{0.30 \\cdot 0.70/400}} = \\frac{0.15}{0.0229} \\approx 6.5', why: 'Standardize with the binomial standard error under "honest player with $p = 0.30$".' },
            { tex: 'P(X \\ge 180 \\mid n = 400,\\ p = 0.3) \\approx 1.8 \\times 10^{-10}', why: 'The exact binomial tail confirms what $z \\approx 6.5$ suggests.' },
          ],
          result: 'Extremely unlikely for an honest player with a typical rate — but "typical" matters: a genuinely elite player might have $p = 0.40$. Compare against the right peer group.',
        },
        {
          type: 'p',
          text: 'Scale changes everything. With a million honest players, a threshold of $z > 4$ (one-sided tail $3.2 \\times 10^{-5}$) flags about $32$ innocent people **by chance alone**; $z > 5$ flags about $0.3$. This is the multiple-comparisons problem again, so thresholds must grow with the population. And when estimating "typical" behavior, use [[stat-robust-statistic|robust statistics]]: the mean and SD are dragged by the cheaters themselves, which hides them (*masking*), while the median and the median absolute deviation (MAD) are barely affected.',
        },
        {
          type: 'derivation',
          title: 'What does a flag mean? Base rates via Bayes',
          steps: [
            { tex: 'P(C) = 0.01, \\quad P(\\text{flag} \\mid C) = 0.90, \\quad P(\\text{flag} \\mid \\text{honest}) = 0.02', why: '$1\\%$ of players cheat; the detector catches $90\\%$ of them and wrongly flags $2\\%$ of honest players.' },
            { tex: 'P(\\text{flag}) = 0.01(0.90) + 0.99(0.02) = 0.009 + 0.0198 = 0.0288', why: 'Law of total probability over cheaters and honest players.' },
            { tex: 'P(C \\mid \\text{flag}) = \\frac{0.009}{0.0288} = 0.3125', why: '[[dm-bayes-theorem|Bayes\' theorem]]: true flags over all flags.' },
          ],
          result: 'Over two-thirds of flagged players are innocent, because honest players outnumber cheaters $99$ to $1$. Auto-banning on this detector would be a disaster; use it to queue cases for review, or demand more evidence (a second, independent signal multiplies the odds again).',
        },
      ],
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'numeric',
      prompt: 'A new anti-cheat model catches $95\\%$ of cheaters and flags $1\\%$ of honest players. If $0.5\\%$ of players cheat, what fraction of flagged players are actually cheating? Decimal to $3$ places.',
      hint: '$P(C \\mid \\text{flag}) = \\frac{0.005 \\cdot 0.95}{0.005 \\cdot 0.95 + 0.995 \\cdot 0.01}$.',
      label: '$P(C \\mid \\text{flag}) =$',
      answer: '0.005*0.95/(0.005*0.95 + 0.995*0.01)',
      tolerance: 0.0006,
      answerTex: '\\frac{0.00475}{0.00475 + 0.00995} \\approx 0.323',
      explanation: 'True flags: $0.005 \\times 0.95 = 0.00475$ of all players. False flags: $0.995 \\times 0.01 = 0.00995$. So $P(C \\mid \\text{flag}) = \\frac{0.00475}{0.01470} \\approx 0.323$: only about one flag in three is a cheater, despite "$95\\%$ detection" and "$1\\%$ false positives". The rarer the condition, the lower this number — the base-rate effect you first met with medical tests in Discrete Math.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'The bias–variance trade-off',
      blocks: [
        {
          type: 'p',
          text: 'Machine learning is statistics at scale, and its central tension is one you can derive in three lines. Measure an estimator $\\hat{\\theta}$ of $\\theta$ by its [[stat-mean-squared-error|mean squared error]] $E[(\\hat{\\theta} - \\theta)^2]$.',
        },
        {
          type: 'derivation',
          title: 'MSE = variance + bias²',
          steps: [
            { tex: '\\hat{\\theta} - \\theta = \\big(\\hat{\\theta} - E[\\hat{\\theta}]\\big) + \\big(E[\\hat{\\theta}] - \\theta\\big)', why: 'Add and subtract the estimator\'s mean. The second bracket is a constant: the **bias**.' },
            { tex: 'E[(\\hat{\\theta} - \\theta)^2] = E\\big[(\\hat{\\theta} - E\\hat{\\theta})^2\\big] + 2\\,\\text{Bias}\\cdot E\\big[\\hat{\\theta} - E\\hat{\\theta}\\big] + \\text{Bias}^2', why: 'Square the sum and use linearity of expectation; the bias comes out of the expectation because it is constant.' },
            { tex: '= \\operatorname{Var}(\\hat{\\theta}) + \\text{Bias}(\\hat{\\theta})^2', why: 'The middle term vanishes since $E[\\hat{\\theta} - E\\hat{\\theta}] = 0$.' },
          ],
          result: 'For predicting a new noisy value $Y = f(x) + \\varepsilon$, the same algebra gives expected error $= \\sigma_\\varepsilon^2 + \\text{Bias}^2 + \\text{Variance}$: irreducible noise plus the two parts you control.',
        },
        {
          type: 'p',
          text: 'Unbiasedness is therefore not sacred. Recall the Bayesian lesson: estimating a win rate from $n$ games by the shrunken estimate $\\frac{X + w/2}{n + w}$ (a Beta$(w/2, w/2)$ posterior mean) adds bias toward $\\frac{1}{2}$ but divides the variance by $(1 + w/n)^2$. The graph compares the two MSEs across true win rates $p$.',
        },
        {
          type: 'graph',
          x: [0, 1],
          y: [0, 0.05],
          xStep: 0.1,
          yStep: 0.01,
          height: 260,
          functions: [
            { expr: 'x(1 - x)/n', color: 'gray', label: 'raw rate $X/n$: unbiased, MSE $= \\frac{p(1-p)}{n}$' },
            { expr: '(w*(0.5 - x)/(n + w))^2 + n*x(1 - x)/(n + w)^2', color: 'purple', label: 'shrunken $\\frac{X + w/2}{n + w}$: $\\text{bias}^2 + \\text{variance}$' },
          ],
          sliders: [
            { name: 'n', min: 5, max: 100, step: 5, value: 10, label: 'games $n$' },
            { name: 'w', min: 0, max: 30, step: 1, value: 10, label: 'prior strength $w$' },
          ],
          readouts: [
            { label: 'at $p = 0.5$: raw MSE', expr: '0.25/n', digits: 4 },
            { label: 'shrunken MSE', expr: 'n*0.25/(n + w)^2', digits: 4 },
          ],
          caption: 'The horizontal axis is the true win rate $p$. With $n = 10$ and $w = 10$, shrinkage cuts the error four-fold for heroes near $50\\%$ — where nearly all heroes in a balanced game live — and only loses for rates beyond about $0.74$ or below $0.26$. Raise $n$ and the curves merge: with plenty of data, the prior stops mattering.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why this is the heart of machine learning',
          text: 'Every model choice trades bias for variance. A rigid model (a straight line) is stable from sample to sample but systematically wrong: high bias, low variance. A very flexible model (a high-degree polynomial, a huge network) can match anything, so it also matches the noise: low bias, high variance. Regularization — ridge and lasso penalties, weight decay, early stopping, Bayesian priors — deliberately adds a little bias to remove a lot of variance.',
        },
      ],
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'truefalse',
      prompt: 'Between two estimators of the same parameter, the unbiased one always has the smaller mean squared error.',
      answer: false,
      explanation: 'MSE $= \\operatorname{Var} + \\text{Bias}^2$. A biased estimator with much smaller variance can win: with $n = 10$ games and a true win rate of $0.5$, the raw rate has MSE $0.025$, while the shrunken $\\frac{X + 5}{20}$ is unbiased at that point and has MSE $0.00625$; even at $p = 0.7$ it is biased by $-0.1$ and still wins, $0.0153$ versus $0.021$. Unbiased estimators are not automatically the most accurate ones.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'concept',
      title: 'Overfitting and cross-validation',
      blocks: [
        {
          type: 'p',
          text: 'Ten noisy measurements of a smooth trend (think: average engagement across the ten levels of a world). Least squares fits polynomials of degree $1$, $3$ and $9$ — the same normal equations as in the regression unit, with columns $1, x, x^2, \\dots$',
        },
        {
          type: 'graph',
          x: [-0.02, 1.02],
          y: [-2.3, 1.5],
          xStep: 0.1,
          yStep: 0.5,
          height: 290,
          functions: [
            { expr: 'sin(2pi*x)', color: 'gray', dashed: true, label: 'true trend' },
            { expr: fit1, color: 'blue', label: 'degree 1', domain: [0, 1] },
            { expr: fit3, color: 'green', label: 'degree 3', domain: [0, 1] },
            { expr: fit9, color: 'red', label: 'degree 9', domain: [0, 1] },
          ],
          points: dataY.map((y, i) => ({ x: i / 9, y, color: 'orange' as const })),
          caption: 'The degree-$1$ line **underfits**: it misses the wave entirely (high bias). Degree $3$ follows the trend. Degree $9$ has $10$ coefficients for $10$ points, so it passes through every one — training error exactly $0$ — and plunges to $-2.1$ between the last two points, where the true trend is only about $-0.3$. It has memorized the noise: high variance.',
        },
        {
          type: 'graph',
          x: [-0.5, 9.5],
          y: [0, 0.6],
          xStep: 1,
          yStep: 0.1,
          height: 240,
          segments: [...curve(trainMse, 'blue'), ...curve(testMse, 'red')],
          points: [
            ...trainMse.map((y, i) => ({ x: i, y, color: 'blue' as const })),
            ...testMse.map((y, i) => ({ x: i, y, color: 'red' as const })),
          ],
          hlines: [{ y: 0.0625, label: 'noise σ² = 0.0625', color: 'gray' }],
          caption: 'Mean squared error against polynomial degree. Blue: on the $10$ training points — it only goes down. Red: on $200{,}000$ fresh points from the same process — it falls, bottoms out at degree $3$ ($0.080$, close to the noise floor $0.0625$), then climbs to $0.34$ at degree $9$. Training error cannot tell you when to stop.',
        },
        {
          type: 'definition',
          term: 'Overfitting',
          text: '[[stat-overfitting|Overfitting]] means fitting the noise in the training data rather than the pattern, so that performance on new data is worse than a simpler model\'s. It is detected only by evaluating on data the model did not see.',
        },
        {
          type: 'p',
          text: 'Fresh data is a luxury. [[stat-cross-validation|Cross-validation]] manufactures it: split the data into $k$ folds, fit on $k - 1$ of them, measure error on the held-out fold, rotate so every fold is held out once, and average.',
        },
        {
          type: 'figure',
          svg: '<svg viewBox="0 0 470 250" xmlns="http://www.w3.org/2000/svg"><text x="215.0" y="14" text-anchor="middle" font-size="12" class="t-gray">the data, split into 5 folds</text><text x="60" y="41" text-anchor="end" font-size="12.5">round 1</text><rect x="72" y="24" width="54" height="26" rx="3" class="f-orange s-orange" fill-opacity="0.45" stroke-width="1.3"/><text x="99.0" y="41" text-anchor="middle" font-size="11.5" font-weight="600">test</text><rect x="130" y="24" width="54" height="26" rx="3" class="f-blue s-blue" fill-opacity="0.18" stroke-width="1.3"/><rect x="188" y="24" width="54" height="26" rx="3" class="f-blue s-blue" fill-opacity="0.18" stroke-width="1.3"/><rect x="246" y="24" width="54" height="26" rx="3" class="f-blue s-blue" fill-opacity="0.18" stroke-width="1.3"/><rect x="304" y="24" width="54" height="26" rx="3" class="f-blue s-blue" fill-opacity="0.18" stroke-width="1.3"/><text x="374" y="41" font-size="12.5">→ error e₁</text><text x="60" y="77" text-anchor="end" font-size="12.5">round 2</text><rect x="72" y="60" width="54" height="26" rx="3" class="f-blue s-blue" fill-opacity="0.18" stroke-width="1.3"/><rect x="130" y="60" width="54" height="26" rx="3" class="f-orange s-orange" fill-opacity="0.45" stroke-width="1.3"/><text x="157.0" y="77" text-anchor="middle" font-size="11.5" font-weight="600">test</text><rect x="188" y="60" width="54" height="26" rx="3" class="f-blue s-blue" fill-opacity="0.18" stroke-width="1.3"/><rect x="246" y="60" width="54" height="26" rx="3" class="f-blue s-blue" fill-opacity="0.18" stroke-width="1.3"/><rect x="304" y="60" width="54" height="26" rx="3" class="f-blue s-blue" fill-opacity="0.18" stroke-width="1.3"/><text x="374" y="77" font-size="12.5">→ error e₂</text><text x="60" y="113" text-anchor="end" font-size="12.5">round 3</text><rect x="72" y="96" width="54" height="26" rx="3" class="f-blue s-blue" fill-opacity="0.18" stroke-width="1.3"/><rect x="130" y="96" width="54" height="26" rx="3" class="f-blue s-blue" fill-opacity="0.18" stroke-width="1.3"/><rect x="188" y="96" width="54" height="26" rx="3" class="f-orange s-orange" fill-opacity="0.45" stroke-width="1.3"/><text x="215.0" y="113" text-anchor="middle" font-size="11.5" font-weight="600">test</text><rect x="246" y="96" width="54" height="26" rx="3" class="f-blue s-blue" fill-opacity="0.18" stroke-width="1.3"/><rect x="304" y="96" width="54" height="26" rx="3" class="f-blue s-blue" fill-opacity="0.18" stroke-width="1.3"/><text x="374" y="113" font-size="12.5">→ error e₃</text><text x="60" y="149" text-anchor="end" font-size="12.5">round 4</text><rect x="72" y="132" width="54" height="26" rx="3" class="f-blue s-blue" fill-opacity="0.18" stroke-width="1.3"/><rect x="130" y="132" width="54" height="26" rx="3" class="f-blue s-blue" fill-opacity="0.18" stroke-width="1.3"/><rect x="188" y="132" width="54" height="26" rx="3" class="f-blue s-blue" fill-opacity="0.18" stroke-width="1.3"/><rect x="246" y="132" width="54" height="26" rx="3" class="f-orange s-orange" fill-opacity="0.45" stroke-width="1.3"/><text x="273.0" y="149" text-anchor="middle" font-size="11.5" font-weight="600">test</text><rect x="304" y="132" width="54" height="26" rx="3" class="f-blue s-blue" fill-opacity="0.18" stroke-width="1.3"/><text x="374" y="149" font-size="12.5">→ error e₄</text><text x="60" y="185" text-anchor="end" font-size="12.5">round 5</text><rect x="72" y="168" width="54" height="26" rx="3" class="f-blue s-blue" fill-opacity="0.18" stroke-width="1.3"/><rect x="130" y="168" width="54" height="26" rx="3" class="f-blue s-blue" fill-opacity="0.18" stroke-width="1.3"/><rect x="188" y="168" width="54" height="26" rx="3" class="f-blue s-blue" fill-opacity="0.18" stroke-width="1.3"/><rect x="246" y="168" width="54" height="26" rx="3" class="f-blue s-blue" fill-opacity="0.18" stroke-width="1.3"/><rect x="304" y="168" width="54" height="26" rx="3" class="f-orange s-orange" fill-opacity="0.45" stroke-width="1.3"/><text x="331.0" y="185" text-anchor="middle" font-size="11.5" font-weight="600">test</text><text x="374" y="185" font-size="12.5">→ error e₅</text><rect x="72" y="204" width="14" height="12" class="f-blue s-blue" fill-opacity="0.18" stroke-width="1.3"/><text x="92" y="214" font-size="12">train on these</text><rect x="220" y="204" width="14" height="12" class="f-orange s-orange" fill-opacity="0.45" stroke-width="1.3"/><text x="240" y="214" font-size="12">held out</text><text x="215.0" y="240" text-anchor="middle" font-size="13" font-weight="600" class="t-green">CV error = (e₁ + e₂ + e₃ + e₄ + e₅) / 5</text></svg>',
          alt: 'Five rows labeled round 1 to round 5, each with five boxes. In round k the k-th box is orange and labeled test; the other four are blue training folds. Each round produces an error e1 to e5, and the cross-validation error is their average.',
          caption: 'Five-fold cross-validation: every observation is used for testing exactly once and for training four times. Run it for each candidate model (each degree) and pick the one with the lowest CV error.',
          maxWidth: 470,
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Leakage: the silent overfitting',
          text: 'Cross-validation is only honest if the held-out fold is truly unseen. Classic leaks in game data: the same player\'s matches in both training and test folds (the model learns the player, not the pattern — split **by player**); random splits of time-ordered data (train on the past, test on the future); and choosing features or tuning settings on the whole data set first. Keep a final test set that you touch exactly once.',
        },
      ],
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'order',
      prompt: 'Put the steps of choosing a churn model\'s complexity with $5$-fold cross-validation in order.',
      lines: [
        'Set aside a final test set, and split the remaining data into $5$ folds (all of a player\'s sessions in the same fold).',
        'For each candidate model, train on $4$ folds and compute the error on the held-out fold.',
        'Rotate until each fold has been held out once, and average the $5$ errors for each model.',
        'Pick the model with the lowest average cross-validation error and refit it on all $5$ folds.',
        'Evaluate the chosen model once on the final test set and report that error.',
      ],
      distractors: ['Pick the model with the lowest training error, since it fits the data best.'],
      explanation: 'Split (respecting players), train and validate fold by fold, average, choose, refit, and only then touch the test set. The distractor picks by training error, which always favors the most flexible model — exactly the overfitting trap the degree-$9$ polynomial fell into. Using the test set more than once would turn it into another validation set and make the reported error optimistic.',
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'concept',
      title: 'Classifiers: confusion matrices, precision and recall',
      blocks: [
        {
          type: 'p',
          text: 'A cheat detector, a churn predictor and a toxic-chat filter are **classifiers**: they output a score and flag cases above a threshold. Comparing flags with the truth on labeled data gives a [[stat-confusion-matrix|confusion matrix]]. For the detector from before on $10{,}000$ players, $100$ of them cheaters:',
        },
        {
          type: 'table',
          headers: ['Detector', 'Actually cheating', 'Actually honest', 'Total'],
          rows: [
            ['**Flagged**', 'TP $= 90$', 'FP $= 198$', '$288$'],
            ['**Not flagged**', 'FN $= 10$', 'TN $= 9702$', '$9712$'],
            ['**Total**', '$100$', '$9900$', '$10{,}000$'],
          ],
          caption: 'True/false positives and negatives. The first column is the cheaters, the second the honest players.',
        },
        {
          type: 'list',
          items: [
            '**Accuracy** $= \\frac{TP + TN}{\\text{total}} = \\frac{9792}{10{,}000} = 97.9\\%$ — worse than the useless rule "flag nobody" ($99\\%$). With rare positives, accuracy is the wrong metric.',
            '**Precision** $= \\frac{TP}{TP + FP} = \\frac{90}{288} \\approx 0.31$: of the flagged players, how many are cheaters (the Bayes calculation from before).',
            '**Recall** (sensitivity, true positive rate) $= \\frac{TP}{TP + FN} = \\frac{90}{100} = 0.90$: of the cheaters, how many we catch.',
            '**False positive rate** $= \\frac{FP}{FP + TN} = \\frac{198}{9900} = 0.02$, and $F_1 = \\frac{2PR}{P + R} \\approx 0.46$ combines [[stat-precision-recall|precision and recall]] into one number.',
          ],
        },
        {
          type: 'graph',
          x: [-4, 7],
          y: [0, 0.45],
          xStep: 1,
          yStep: 0.1,
          height: 250,
          functions: [
            { expr: 'normpdf(x)', color: 'blue', label: 'honest players\' scores' },
            { expr: 'normpdf(x - d)', color: 'red', label: 'cheaters\' scores' },
          ],
          areas: [
            { expr: 'normpdf(x - d)', from: 'c', to: 7, color: 'red' },
            { expr: 'normpdf(x)', from: 'c', to: 7, color: 'blue' },
          ],
          vlines: [{ x: 'c', label: 'threshold', color: 'gray' }],
          sliders: [
            { name: 'c', min: -1, max: 5, step: 0.05, value: 2.05, label: 'threshold $c$' },
            { name: 'd', min: 0.5, max: 5, step: 0.1, value: 3.3, label: 'separation $d$ (detector quality)' },
          ],
          readouts: [
            { label: 'recall $=$', expr: '1 - normcdf(c - d)', digits: 3 },
            { label: 'false positive rate $=$', expr: '1 - normcdf(c)', digits: 4 },
            { label: 'precision ($1\\%$ cheat) $=$', expr: '0.01(1 - normcdf(c - d))/(0.01(1 - normcdf(c - d)) + 0.99(1 - normcdf(c)))', digits: 3 },
          ],
          caption: 'Scores are modeled as $N(0, 1)$ for honest players and $N(d, 1)$ for cheaters. Everything right of the threshold is flagged: red area $=$ recall, blue area $=$ false positive rate. Raise $c$ to $3.5$: precision climbs to about $0.95$ but recall drops to about $0.42$. Only a better detector (larger $d$) improves both at once.',
        },
        {
          type: 'graph',
          x: [0, 1],
          y: [0, 1],
          xStep: 0.2,
          yStep: 0.2,
          equal: true,
          height: 280,
          parametric: [{ x: '1 - normcdf(t)', y: '1 - normcdf(t - d)', t: [-6, 10], color: 'purple', label: 'ROC curve' }],
          segments: [{ from: [0, 0], to: [1, 1], color: 'gray', dashed: true, label: 'coin flip' }],
          points: [{ x: '1 - normcdf(c)', y: '1 - normcdf(c - d)', color: 'orange', label: 'threshold c' }],
          sliders: [
            { name: 'c', min: -1, max: 5, step: 0.05, value: 1, label: 'threshold $c$' },
            { name: 'd', min: 0, max: 5, step: 0.1, value: 1.5, label: 'separation $d$' },
          ],
          readouts: [{ label: 'area under the curve $\\Phi(d/\\sqrt{2}) =$', expr: 'normcdf(d/sqrt(2))', digits: 3 }],
          caption: 'The ROC curve traces (false positive rate, recall) as the threshold sweeps from high (bottom left) to low (top right). The diagonal is guessing; a perfect detector hugs the top-left corner. Here the detector is weaker ($d = 1.5$) so the trade-off is visible; set $d = 0$ to get the diagonal. The area under the curve (AUC) is the probability that a random cheater scores higher than a random honest player — here $\\Phi(d/\\sqrt{2})$. Note that the ROC curve ignores the base rate, so always check precision too.',
        },
      ],
    },
    // ------------------------------------------------------------------ 16
    {
      kind: 'error',
      prompt: 'A toxic-chat filter is evaluated on $1000$ labeled messages: TP $= 40$, FP $= 60$, FN $= 10$, TN $= 890$. Tap the first wrong line of this evaluation.',
      lines: [
        'Messages flagged: $TP + FP = 100$. Actually toxic: $TP + FN = 50$.',
        'Accuracy $= (40 + 890)/1000 = 0.93$.',
        'Precision $= TP/(TP + FN) = 40/50 = 0.80$.',
        'Recall $= TP/(TP + FN) = 40/50 = 0.80$.',
        'So precision and recall are both $0.80$: the filter is well balanced, and few of its flags are mistakes.',
      ],
      errorLines: [3],
      explanation: 'Precision divides by everything the filter **flagged**: $\\frac{TP}{TP + FP} = \\frac{40}{100} = 0.40$. Recall divides by everything that is **actually** toxic: $\\frac{TP}{TP + FN} = \\frac{40}{50} = 0.80$. Line 3 used recall\'s denominator, so the conclusion is wrong: the filter catches $80\\%$ of toxic messages, but $60\\%$ of its flags hit innocent messages — precision $0.40$, a poor trade for a filter that hides players\' chat. Memory aid: **p**recision is about the **p**redicted positives.',
    },
    // ------------------------------------------------------------------ 17
    {
      kind: 'concept',
      title: 'Course finale: what you can do now, and where to go next',
      blocks: [
        {
          type: 'p',
          text: 'You started this course summarizing a column of numbers. You can now model uncertainty with distributions, derive estimators with calculus, put honest error bars on anything, test claims, fit and diagnose models, update beliefs with data, and simulate what you cannot solve. Here is the whole arc, and where each piece shows up in a studio.',
        },
        {
          type: 'table',
          headers: ['Unit', 'Big idea', 'In a game studio'],
          rows: [
            ['1 Describing data', 'Center, spread, honest plots', 'Dashboards; frame-time percentiles, not just averages'],
            ['2 Probability toolkit', 'Rules of probability, Bayes', 'Reasoning about rare events and detectors'],
            ['3 Discrete random variables', 'Binomial, geometric, Poisson', 'Drop counts, pity timers, crashes per day'],
            ['4 Continuous random variables', 'Densities, exponential, normal', 'Latency, respawn timers, frame times'],
            ['5 Joint distributions', 'Covariance, sums of variables', 'Combining damage rolls, correlated stats'],
            ['6 Limit theorems', 'LLN, CLT', 'Why averages, error bars and Monte Carlo work'],
            ['7 Estimation', 'Standard error, MLE, confidence intervals', 'Win rates and drop rates with error bars'],
            ['8 Hypothesis testing', '$p$-values, power, A/B tests', 'Shipping features on evidence, not hunches'],
            ['9 Categorical data and resampling', 'Chi-square, permutation tests, bootstrap', 'Auditing loot tables; inference without formulas'],
            ['10 Regression', 'Least squares, inference, logistic regression', 'Predicting churn; modeling difficulty and skill'],
            ['11 Statistics for computing', 'Bayesian inference, simulation, ML', 'Bandits, ratings, cheat detection, model evaluation'],
          ],
          caption: 'Eleven units, one toolkit.',
        },
        {
          type: 'heading',
          text: 'Where to go next',
        },
        {
          type: 'list',
          items: [
            '**Machine learning.** You already know its foundations: least squares, logistic regression, MLE, the bias–variance trade-off, cross-validation. Next come regularization (ridge, lasso), decision trees and ensembles, neural networks trained by stochastic gradient descent, and **reinforcement learning** — whose simplest case is the multi-armed bandit from the Bayesian lesson. *An Introduction to Statistical Learning* (James, Witten, Hastie and Tibshirani) is the standard next book and is free online.',
            '**Data science.** The craft around the math: SQL and dataframes for telemetry, cleaning messy event logs, visualization, reproducible notebooks, and **causal inference** for the questions an A/B test cannot answer directly.',
            '**Experimental design.** Randomization, blocking, factorial designs that test several changes at once, sample-size and power planning, and sequential tests that allow safe early stopping — the discipline behind every trustworthy A/B test and playtest.',
            '**Bayesian data analysis and stochastic processes.** Hierarchical models and Markov chain Monte Carlo for many related rates at once (every hero, every map); Markov chains and queueing theory for matchmaking queues and server load.',
          ],
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Keep the habit, not just the formulas',
          text: 'Whatever you build next, ask four questions of every number: *How was it measured? How much would it vary if we measured again? Compared to what? And what would change my mind?* That habit — more than any single formula — is what this course was for.',
        },
      ],
    },
  ],
  takeaways: [
    'Funnels multiply step conversions; each step is a proportion with its own CI. Funnels show association; causal questions need randomized experiments.',
    'Retention is a survival curve $S(t)$; expected lifetime is $\\int_0^\\infty S(t)\\,dt$, e.g. $\\frac{p}{a} + \\frac{1-p}{b}$ for a two-group mixture.',
    'Elo: $E_A = 1/(1 + 10^{(R_B - R_A)/400})$, update $K(S_A - E_A)$ — a stochastic-gradient step on a logistic model. Glicko and TrueSkill add uncertainty.',
    'Balance with confidence intervals, plan sample sizes (about $9600$ games for $\\pm 1$ point), correct for many heroes, and decide what size of imbalance matters.',
    'Outlier detection needs thresholds that grow with the population and robust baselines; the precision of a detector depends on the base rate (Bayes).',
    'MSE $= \\operatorname{Var} + \\text{Bias}^2$. Flexible models overfit; choose complexity by cross-validation without leakage. Judge classifiers by precision and recall (and ROC), not accuracy, when positives are rare.',
  ],
  reading: [
    {
      title: 'Wikipedia — Elo rating system',
      url: 'https://en.wikipedia.org/wiki/Elo_rating_system',
      source: 'wikipedia',
      note: 'The logistic expected-score formula, the choice of $K$, rating inflation, and links to Glicko and TrueSkill.',
    },
    {
      title: 'Wikipedia — Bias–variance tradeoff',
      url: 'https://en.wikipedia.org/wiki/Bias%E2%80%93variance_tradeoff',
      source: 'wikipedia',
      note: 'The decomposition for prediction error, with the polynomial-fitting picture used in this lesson.',
    },
    {
      title: 'Wikipedia — Precision and recall',
      url: 'https://en.wikipedia.org/wiki/Precision_and_recall',
      source: 'wikipedia',
      note: 'Every confusion-matrix metric in one place, with the $F_1$ score and its relation to ROC curves.',
    },
    {
      title: 'Wikipedia — Design of experiments',
      url: 'https://en.wikipedia.org/wiki/Design_of_experiments',
      source: 'wikipedia',
      note: 'A map of the field to study next: randomization, blocking, factorial designs and their history from Fisher onward.',
    },
    {
      title: 'OpenStax — Introductory Statistics',
      url: 'https://openstax.org/details/books/introductory-statistics',
      source: 'openstax',
      note: 'A free reference for reviewing any topic from the course with many additional exercises.',
    },
  ],
};
