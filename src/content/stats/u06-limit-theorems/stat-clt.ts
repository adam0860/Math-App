import type { Lesson } from '../../types';

// ---------------------------------------------------------------------------
// Graph expressions (calculator syntax), built once here so the lesson stays readable.
// ---------------------------------------------------------------------------

// Hide a point (NaN) unless lo <= s <= hi, for integer s: sqrt(v)/sqrt(v) is 1 for v > 0, NaN for v < 0.
const keepIf = (v: string) => `sqrt(${v})/sqrt(${v})`;

// PMF of the sum of n fair dice at the integer s, by inclusion–exclusion:
// P(S = s) = 6^(-n) * sum_k (-1)^k C(n, k) C(s - 6k - 1, n - 1), over k with s - 6k >= n.
const diceSumPmf = (s: number) => {
  const terms = Array.from({ length: 8 }, (_, k) =>
    `${k % 2 ? '-' : '+'} nCr(n, ${k})*nCr(max(${s - 6 * k - 1}, 0), n - 1)*(1 + sign(${s - 6 * k} + 0.5 - n))/2`,
  ).join(' ');
  return `(${terms})/6^n*${keepIf(`6n - ${s} + 0.5`)}*${keepIf(`${s} - n + 0.5`)}`;
};
const diceS = Array.from({ length: 48 }, (_, i) => i + 1);

// Density of the standardized sum (S - n/2)/sqrt(n/12) of n independent U(0, 1) (Irwin–Hall).
const ihU = '(n/2 + x*sqrt(n/12))';
const irwinHallZ =
  'sqrt(n/12)/(n - 1)!*(' +
  Array.from({ length: 13 }, (_, k) => `${k % 2 ? '-' : '+'} nCr(n, ${k})*max(${ihU} - ${k}, 0)^(n - 1)*(1 + sign(${ihU} - ${k}))/2`).join(' ') +
  ')';

// Session lengths: Gamma population with mean 22 and SD 15 (shape K, scale T).
// The mean of n sessions is exactly Gamma(nK, T/n).
const K = 2.1511111;
const T = 10.2272727;
const gammaMean = `exp((n*${K} - 1)*ln(x) - x*n/${T} - lgamma(n*${K}) + n*${K}*ln(n/${T}))`;
const gammaPop = `exp((${K} - 1)*ln(x) - x/${T} - lgamma(${K}) - ${K}*ln(${T}))`;

// Standardized sum of n Exp(1) variables: S ~ Gamma(n, 1), Z = (S - n)/sqrt(n).
const expSumZ = 'sqrt(n)*exp((n - 1)*ln(n + x*sqrt(n)) - (n + x*sqrt(n)) - lgamma(n))';

// Binomial(n, p) PMF at k, and the exact CDF at the slider c as a finite sum.
const binom = (k: number) => `nCr(n, ${k})*p^${k}*(1 - p)^(n - ${k})`;
const atMostC = (k: number) => `(1 + sign(c - ${k} + 0.5))/2`;
const aboveC = (k: number) => `(1 - sign(c - ${k} + 0.5))/2`;
const binK = Array.from({ length: 51 }, (_, k) => k);
const binomCdf = binK.map((k) => `${binom(k)}*${atMostC(k)}`).join(' + ');
const binSd = 'sqrt(n*p*(1 - p))';

export const lesson: Lesson = {
  id: 'stat-clt',
  title: 'The Central Limit Theorem and Normal Approximations',
  summary: 'Why sums and averages of almost anything become normal: the central limit theorem with interactive dice, uniform and exponential sums, the sampling distribution of the mean ($\\sigma/\\sqrt{n}$), how large $n$ must be for skewed populations, normal approximations to the binomial and Poisson with the continuity correction, and applications to session lengths, total damage and rounding error.',
  minutes: 22,
  objectives: [
    'State the central limit theorem precisely, including its assumptions, and explain why sums of independent effects look normal',
    'Use $\\bar{X} \\approx N(\\mu, \\sigma^2/n)$ and $S_n \\approx N(n\\mu, n\\sigma^2)$ to compute probabilities about averages and totals',
    'Judge whether $n$ is large enough, using the skewness of the population',
    'Approximate binomial and Poisson probabilities with a normal distribution and the continuity correction',
    'Apply the CLT to telemetry, combat totals and accumulated rounding error',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'The central limit theorem',
      blocks: [
        {
          type: 'p',
          text: 'The law of large numbers says an average settles near $\\mu$. The [[stat-central-limit-theorem|central limit theorem]] (CLT) answers the next question: what does the **leftover randomness** look like? Astonishingly, the answer barely depends on what you are averaging. Dice, coin flips, session lengths, damage rolls — add enough independent copies and the total always takes the same bell shape: the [[stat-normal-distribution|normal distribution]].',
        },
        {
          type: 'theorem',
          name: 'Central limit theorem',
          tex: 'P\\left(\\frac{S_n - n\\mu}{\\sigma\\sqrt{n}} \\le z\\right) \\to \\Phi(z) \\quad \\text{for every } z, \\quad \\text{as } n \\to \\infty',
          text: 'Here $X_1, X_2, \\dots$ are **i.i.d.** with mean $\\mu$ and **finite** variance $\\sigma^2 > 0$, and $S_n = X_1 + \\cdots + X_n$. Equivalently, the standardized mean $\\frac{\\bar{X}_n - \\mu}{\\sigma/\\sqrt{n}}$ converges in distribution to $N(0, 1)$.',
        },
        {
          type: 'p',
          text: 'In practice you use it as an approximation for a fixed, large-enough $n$: $$S_n \\approx N(n\\mu,\\ n\\sigma^2), \\qquad \\bar{X}_n \\approx N\\left(\\mu,\\ \\frac{\\sigma^2}{n}\\right).$$ The mean and variance are exact (Unit 5); the CLT supplies the **shape**. Drag the slider to add dice:',
        },
        {
          type: 'graph',
          x: [0, 49],
          y: [0, 0.2],
          xStep: 5,
          yStep: 0.05,
          height: 260,
          points: diceS.map((s) => ({ x: s, y: diceSumPmf(s), color: 'blue' as const })),
          functions: [{ expr: 'normpdf((x - 3.5n)/sqrt(35n/12))/sqrt(35n/12)', color: 'red', label: 'normal curve $N(3.5n,\\ \\frac{35}{12}n)$' }],
          sliders: [{ name: 'n', min: 1, max: 8, step: 1, value: 2, label: 'number of dice $n$' }],
          readouts: [
            { label: 'mean $3.5n =$', expr: '3.5n', digits: 1 },
            { label: 'SD $\\sqrt{35n/12} =$', expr: 'sqrt(35n/12)', digits: 3 },
          ],
          caption: 'Blue dots: the exact PMF of the sum of $n$ fair dice (computed by inclusion–exclusion). Red: the normal density with the same mean and variance. One die is flat, two make a triangle, and by $n = 3$ or $4$ the dots already sit on the bell curve.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Intuition: why the bell, and why always the same one?',
          text: 'Each new term is convolved with the running total, and convolution smooths: corners round off, as you saw with two uniforms making a triangle. Smoothing again and again erases the details of the original shape. What survives is only what addition preserves exactly: the mean and the variance (they add). Among shapes, the normal is the fixed point of this process — the sum of two independent normals is normal again — so it is where every repeated sum ends up. Physically: anything that is the total of many small, independent nudges (measurement error, a player\'s points over a season, the height of a person) is approximately normal.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'truefalse',
      prompt: 'The central limit theorem says that if you collect a large enough sample, the data themselves will be approximately normally distributed.',
      answer: false,
      explanation: 'False — a very common misreading. The CLT is about the distribution of a **sum or average** of many observations, not about the observations. If session lengths are skewed, a sample of $10{,}000$ sessions is still skewed (a histogram of it looks like the population, by the law of large numbers). What becomes normal is the distribution of $\\bar{X}$ across repeated samples — the sampling distribution of the mean.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Watching sums of uniforms converge',
      blocks: [
        {
          type: 'p',
          text: 'Uniform variables make the cleanest demonstration, because the density of their sum is known exactly (it is called the Irwin–Hall distribution: piecewise polynomial pieces of degree $n - 1$). Standardize the sum to mean $0$ and variance $1$ and compare it with the standard normal density $\\varphi(z)$:',
        },
        {
          type: 'graph',
          x: [-3.5, 3.5],
          y: [0, 0.5],
          xStep: 1,
          yStep: 0.1,
          height: 260,
          functions: [
            { expr: irwinHallZ, color: 'blue', label: 'exact density of $\\frac{S_n - n/2}{\\sqrt{n/12}}$' },
            { expr: 'normpdf(x)', color: 'red', dashed: true, label: 'standard normal $\\varphi(z)$' },
          ],
          sliders: [{ name: 'n', min: 1, max: 12, step: 1, value: 1, label: 'number of uniforms $n$' }],
          caption: 'For $n = 1$ the standardized uniform is a box on $[-\\sqrt{3}, \\sqrt{3}]$. At $n = 2$ it is a triangle; at $n = 3$ it is made of three parabola pieces and already looks bell-shaped. By $n = 12$ the curves are hard to tell apart — though the blue density is exactly $0$ beyond $\\pm 6$, while the normal has (tiny) tails forever.',
        },
        {
          type: 'p',
          text: 'That last remark matters. Before fast Box–Muller code was common, games and simulations generated "normal" numbers as $U_1 + \\cdots + U_{12} - 6$, which has mean $0$ and variance $12 \\cdot \\frac{1}{12} = 1$ exactly. The program below checks how good this cheap normal is.',
        },
        {
          type: 'code',
          title: 'cheap_normal.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdio>
#include <random>

std::mt19937_64 rng(99);
double uniform01() { return (rng() >> 11) * 0x1.0p-53; }

// The classic "cheap normal": the sum of 12 uniforms has mean 6 and variance 12 * (1/12) = 1.
double cheapNormal() {
    double s = 0;
    for (int i = 0; i < 12; ++i) s += uniform01();
    return s - 6.0;
}

int main() {
    const int N = 1'000'000;
    int within[4] = {0, 0, 0, 0};                  // counts of |Z| < 1, 2, 3, and |Z| > 4
    double sum = 0, sumSq = 0;
    for (int i = 0; i < N; ++i) {
        double z = cheapNormal();
        sum += z; sumSq += z * z;
        for (int k = 1; k <= 3; ++k) if (std::fabs(z) < k) ++within[k - 1];
        if (std::fabs(z) > 4) ++within[3];
    }
    std::printf("mean %.4f, variance %.4f\\n", sum / N, sumSq / N - (sum / N) * (sum / N));
    std::printf("P(|Z| < 1) = %.4f   (normal 0.6827)\\n", double(within[0]) / N);
    std::printf("P(|Z| < 2) = %.4f   (normal 0.9545)\\n", double(within[1]) / N);
    std::printf("P(|Z| < 3) = %.4f   (normal 0.9973)\\n", double(within[2]) / N);
    std::printf("P(|Z| > 4) = %.6f (normal 0.000063)\\n", double(within[3]) / N);
}`,
          output: `mean -0.0035, variance 0.9998
P(|Z| < 1) = 0.6788   (normal 0.6827)
P(|Z| < 2) = 0.9555   (normal 0.9545)
P(|Z| < 3) = 0.9981   (normal 0.9973)
P(|Z| > 4) = 0.000010 (normal 0.000063)`,
          annotations: [
            { lines: '9-13', text: 'Twelve uniforms, each with variance $\\frac{1}{12}$: the sum has variance exactly $1$, which is why $12$ is the traditional choice.' },
            { lines: '22-23', text: 'Count how often $|Z|$ falls within $1$, $2$, $3$ standard deviations, and how often it exceeds $4$.' },
          ],
        },
        {
          type: 'p',
          text: 'The middle is excellent (the exact Irwin–Hall values are $0.6785$, $0.9554$, $0.9980$ — the simulation matches them to within its own noise). The **far tail** is not: $4\\sigma$ events are about $4$ times rarer than for a true normal, and beyond $6\\sigma$ they are impossible. The CLT is a statement about the bulk of the distribution; relative accuracy in the extreme tails needs much larger $n$. For risk questions ("how often does a server melt down?") that is exactly where you care.',
        },
        {
          type: 'deepdive',
          title: 'Why the CLT is true: a sketch with moment generating functions',
          blocks: [
            {
              type: 'p',
              text: 'The **moment generating function** of $X$ is $M_X(t) = E[e^{tX}]$. Two facts (proved in a probability theory course): if $X$ and $Y$ are independent then $M_{X+Y}(t) = M_X(t)M_Y(t)$ (because $e^{t(X+Y)} = e^{tX}e^{tY}$ and expectations of independent products multiply); and if $M_{Z_n}(t) \\to M_Z(t)$ near $t = 0$ then the distributions converge. The standard normal has $M_Z(t) = e^{t^2/2}$.',
            },
            {
              type: 'derivation',
              steps: [
                { tex: 'Z_n = \\frac{S_n - n\\mu}{\\sigma\\sqrt{n}} = \\frac{1}{\\sqrt{n}}\\sum_{i=1}^n Y_i, \\qquad Y_i = \\frac{X_i - \\mu}{\\sigma}', why: 'Standardize each term: the $Y_i$ are i.i.d. with mean $0$ and variance $1$.' },
                { tex: 'M_{Z_n}(t) = \\Big(M_Y\\big(t/\\sqrt{n}\\big)\\Big)^n', why: 'Independence turns the MGF of a sum into a product of $n$ equal factors.' },
                { tex: 'M_Y(s) = 1 + s\\,E[Y] + \\frac{s^2}{2}E[Y^2] + \\cdots = 1 + \\frac{s^2}{2} + o(s^2)', why: 'A [[taylor-series|Taylor expansion]] of $E[e^{sY}]$ at $s = 0$, using $E[Y] = 0$ and $E[Y^2] = 1$ (assuming the MGF exists near $0$).' },
                { tex: 'M_{Z_n}(t) = \\left(1 + \\frac{t^2}{2n} + o\\!\\left(\\tfrac{1}{n}\\right)\\right)^n \\to e^{t^2/2}', why: 'Put $s = t/\\sqrt{n}$, then use $(1 + a/n)^n \\to e^a$ from calculus.' },
              ],
              result: 'Only the first two moments survived the limit — the mean was removed by centering, the variance set to $1$, and everything else (skewness, the third term) is of order $1/\\sqrt{n}$ and vanishes. That is the precise sense in which the bell "forgets" the original shape.',
            },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'numeric',
      prompt: 'Let $S$ be the sum of $48$ independent $U(0, 1)$ random variables. Use the CLT to approximate $P(S > 26)$. Give $4$ decimal places. (Recall $\\operatorname{Var}(U) = \\frac{1}{12}$.)',
      hint: 'Find $E[S]$ and $\\operatorname{SD}(S)$, standardize $26$, and use $1 - \\Phi(z)$.',
      label: '$P(S > 26) \\approx$',
      answer: '1 - normcdf(1)',
      tolerance: 0.0006,
      answerTex: '1 - \\Phi(1) \\approx 0.1587',
      explanation: '$E[S] = 48 \\cdot \\frac{1}{2} = 24$ and $\\operatorname{Var}(S) = 48 \\cdot \\frac{1}{12} = 4$, so $\\operatorname{SD}(S) = 2$. Then $P(S > 26) \\approx P\\left(Z > \\frac{26 - 24}{2}\\right) = 1 - \\Phi(1) \\approx 0.1587$. The exact Irwin–Hall value is $0.1592$ — with $48$ uniforms the approximation is off by only $0.0005$. A frequent slip is to use $\\operatorname{SD} = 4$ (the variance) instead of $2$.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'The sampling distribution of the mean',
      blocks: [
        {
          type: 'p',
          text: 'The most important use of the CLT is for the sample mean. Imagine taking a sample of $n$ sessions, computing $\\bar{X}$, and repeating that over and over. The distribution of all those $\\bar{X}$ values is the **[[stat-sampling-distribution|sampling distribution]] of the mean**. You already know its center and spread; the CLT tells you its shape.',
        },
        {
          type: 'theorem',
          name: 'Sampling distribution of $\\bar{X}$',
          tex: '\\bar{X} \\approx N\\left(\\mu,\\ \\frac{\\sigma^2}{n}\\right), \\qquad \\operatorname{SD}(\\bar{X}) = \\frac{\\sigma}{\\sqrt{n}}',
          text: 'for i.i.d. observations with finite variance and $n$ large enough. The standard deviation $\\sigma/\\sqrt{n}$ of an estimator is called its **[[stat-standard-error|standard error]]**; Unit 7 builds confidence intervals on it.',
        },
        {
          type: 'derivation',
          title: 'Average session length in a playtest',
          steps: [
            { tex: '\\mu = 22 \\text{ min}, \\quad \\sigma = 15 \\text{ min}, \\quad n = 36', why: 'Session lengths are strongly right-skewed (most short, a few very long), but we only need $\\mu$ and $\\sigma$ for the CLT.' },
            { tex: '\\operatorname{SD}(\\bar{X}) = \\frac{15}{\\sqrt{36}} = 2.5 \\text{ min}', why: 'Standard error of the mean.' },
            { tex: 'P(\\bar{X} > 25) \\approx P\\left(Z > \\frac{25 - 22}{2.5}\\right) = 1 - \\Phi(1.2) \\approx 0.1151', why: 'Standardize using the sampling distribution, **not** the population SD of $15$.' },
          ],
          result: 'About $11.5\\%$ of playtests of $36$ sessions would show an average above $25$ minutes from chance alone. If a new build\'s playtest averages $25$ minutes, that alone is weak evidence that sessions got longer — the reasoning behind the hypothesis tests of Unit 8.',
        },
        {
          type: 'graph',
          x: [0, 70],
          y: [0, 0.2],
          xStep: 10,
          yStep: 0.05,
          height: 270,
          functions: [
            { expr: gammaPop, color: 'gray', label: 'population: individual session lengths' },
            { expr: gammaMean, color: 'blue', label: 'exact distribution of $\\bar{X}$' },
            { expr: 'normpdf((x - 22)/(15/sqrt(n)))/(15/sqrt(n))', color: 'red', dashed: true, label: 'CLT: $N(22,\\ 15^2/n)$' },
          ],
          vlines: [{ x: 22, label: 'μ = 22', color: 'gray' }],
          sliders: [{ name: 'n', min: 1, max: 60, step: 1, value: 4, label: 'sessions per sample $n$' }],
          readouts: [
            { label: 'standard error $15/\\sqrt{n} =$', expr: '15/sqrt(n)', digits: 2 },
            { label: '$P(\\bar{X} > 25)$ by the CLT $\\approx$', expr: '1 - normcdf(3/(15/sqrt(n)))', digits: 4 },
          ],
          caption: 'The gray curve is a skewed (gamma) model of single sessions with mean $22$ and SD $15$; it stays the same. The blue curve is the exact density of the average of $n$ sessions, the red dashed curve its CLT approximation. As $n$ grows the blue curve narrows like $1/\\sqrt{n}$ and loses its skew; at $n = 36$ the exact $P(\\bar{X} > 25)$ is $0.118$ versus the CLT\'s $0.115$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'numeric',
      prompt: 'Ping to a game server has mean $\\mu = 60$ ms and standard deviation $\\sigma = 20$ ms. A monitoring job averages $n = 50$ independent pings. Approximate the probability that the average exceeds $65$ ms. Give $4$ decimal places.',
      hint: 'Standard error $= \\sigma/\\sqrt{n}$. Then $z = (65 - 60)/\\text{SE}$.',
      label: '$P(\\bar{X} > 65) \\approx$',
      answer: '1 - normcdf(5/(20/sqrt(50)))',
      tolerance: 0.0006,
      answerTex: '1 - \\Phi(1.77) \\approx 0.0385',
      explanation: 'The standard error is $\\frac{20}{\\sqrt{50}} \\approx 2.828$ ms, so $z = \\frac{65 - 60}{2.828} \\approx 1.768$ and $P(\\bar{X} > 65) \\approx 1 - \\Phi(1.768) \\approx 0.0385$. Using $\\sigma = 20$ instead of the standard error would give $z = 0.25$ and a probability of about $0.40$ — the answer for a **single** ping, not an average of $50$.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'How large must $n$ be?',
      blocks: [
        {
          type: 'p',
          text: 'The theorem is a limit; it does not say when "large" begins. That depends on the population, mostly on its **asymmetry**. The standard measure is the [[stat-skewed-distribution|skewness]] $\\gamma = E\\left[\\left(\\frac{X - \\mu}{\\sigma}\\right)^3\\right]$, which is $0$ for symmetric distributions and positive for a long right tail. For a sum of $n$ i.i.d. terms the skewness is $\\gamma/\\sqrt{n}$: it fades, but slowly.',
        },
        {
          type: 'graph',
          x: [-3.5, 4.5],
          y: [0, 0.75],
          xStep: 1,
          yStep: 0.25,
          height: 260,
          functions: [
            { expr: expSumZ, color: 'blue', label: 'exact density of the standardized sum of $n$ exponentials' },
            { expr: 'normpdf(x)', color: 'red', dashed: true, label: 'standard normal' },
          ],
          sliders: [{ name: 'n', min: 1, max: 100, step: 1, value: 5, label: 'number of terms $n$' }],
          readouts: [{ label: 'skewness of the sum $2/\\sqrt{n} =$', expr: '2/sqrt(n)', digits: 3 }],
          caption: 'Exponential terms (skewness $2$): the standardized sum is a gamma density. At $n = 5$ it is still clearly lopsided — peak shifted left, long right tail. At $n = 30$ the shift is visible but small; even at $n = 100$ the skewness is $0.2$. Compare the dice and uniforms above, which have skewness $0$ and looked normal by $n = 4$.',
        },
        {
          type: 'table',
          headers: ['Population', 'Skewness $\\gamma$', '$n$ for the CLT to be decent (rough guide)'],
          rows: [
            ['Uniform, fair die', '$0$', '$5$ or so'],
            ['Exponential (waiting times, session lengths)', '$2$', '$30$ to $50$'],
            ['Bernoulli($p$), win/loss with $p = 0.5$', '$0$', '$np \\ge 10$ and $n(1-p) \\ge 10$'],
            ['Bernoulli($0.01$), a rare drop', '$\\frac{1 - 2p}{\\sqrt{p(1-p)}} \\approx 9.85$', 'about $1000$ or more'],
          ],
          caption: 'The popular "$n \\ge 30$" rule is just a rule of thumb for moderately skewed data. For very skewed data — rare events, heavy-tailed revenue per player — it can be badly wrong.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'When the CLT fails entirely',
          text: 'The theorem needs **finite variance** and (in this form) **independence**. Revenue per player in a free-to-play game can be so heavy-tailed (a few "whales" spend thousands) that sample means stay erratic far beyond any practical $n$. Strongly dependent data — consecutive frames, players in the same lobby — behave like far fewer independent observations. In both cases a normal approximation can understate the true uncertainty badly.',
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'mcq',
      prompt: 'You average $n = 40$ independent observations from each population below. For which one is the normal approximation to the distribution of $\\bar{X}$ **least** accurate?',
      options: [
        { text: 'Uniform on $[0, 10]$', why: 'Symmetric with no tails (skewness $0$): the mean of $40$ uniforms is extremely close to normal.' },
        { text: 'Fair die rolls', why: 'Also symmetric (skewness $0$); the dice graph above was already normal-looking at $n = 4$.' },
        { text: 'Exponential waiting times', why: 'Skewness $2$, so $\\bar{X}$ has skewness $2/\\sqrt{40} \\approx 0.32$: noticeably but mildly skewed. Not the worst here.' },
        { text: 'Indicators of a rare drop with $p = 0.01$', correct: true, why: 'Skewness $\\approx 9.85$, so $\\bar{X}$ still has skewness $\\approx 1.56$. With $40$ trials the count is usually $0$ (probability $0.99^{40} \\approx 0.67$), nothing like a bell curve.' },
      ],
      explanation: 'Accuracy depends on how skewed the population is, through $\\gamma/\\sqrt{n}$. The rare-drop indicator is the most skewed by far: with $np = 0.4$ expected drops, the count of drops is a lopsided distribution piled up at $0$, and $n$ would need to be in the thousands before the normal approximation is reasonable.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'concept',
      title: 'Normal approximation to the binomial, with continuity correction',
      blocks: [
        {
          type: 'p',
          text: 'A [[dm-binomial-distribution|binomial]] count $X \\sim \\text{Bin}(n, p)$ is a sum of $n$ independent Bernoulli($p$) indicators, so the CLT applies directly: $X \\approx N\\big(np,\\ np(1-p)\\big)$ when $np$ and $n(1-p)$ are both at least about $10$.',
        },
        {
          type: 'p',
          text: 'One adjustment matters. $X$ only takes integer values, and in a PMF drawn as bars, the bar for $k$ covers $[k - \\frac{1}{2}, k + \\frac{1}{2}]$. To capture the bars for $X \\le k$ you must integrate the normal curve up to $k + \\frac{1}{2}$, not $k$. This is the [[stat-continuity-correction|continuity correction]].',
        },
        {
          type: 'table',
          headers: ['Exact (integer $X$)', 'Normal approximation with continuity correction'],
          rows: [
            ['$P(X \\le k)$', '$\\Phi\\left(\\frac{k + 0.5 - \\mu}{\\sigma}\\right)$'],
            ['$P(X \\ge k)$', '$1 - \\Phi\\left(\\frac{k - 0.5 - \\mu}{\\sigma}\\right)$'],
            ['$P(X = k)$', '$\\Phi\\left(\\frac{k + 0.5 - \\mu}{\\sigma}\\right) - \\Phi\\left(\\frac{k - 0.5 - \\mu}{\\sigma}\\right)$'],
            ['$P(X < k) = P(X \\le k - 1)$', '$\\Phi\\left(\\frac{k - 0.5 - \\mu}{\\sigma}\\right)$'],
          ],
          caption: 'Rule: first rewrite the event with $\\le$ or $\\ge$ on whole numbers, then widen it by half a unit on each included end.',
        },
        {
          type: 'derivation',
          title: 'Is the new hero overtuned?',
          steps: [
            { tex: 'X \\sim \\text{Bin}(400,\\ 0.5): \\quad \\mu = 200, \\quad \\sigma = \\sqrt{400 \\cdot 0.5 \\cdot 0.5} = 10', why: 'If the hero is balanced, each of $400$ independent matches is a win with probability $0.5$.' },
            { tex: 'P(X \\ge 220) \\approx 1 - \\Phi\\left(\\frac{219.5 - 200}{10}\\right) = 1 - \\Phi(1.95) \\approx 0.0256', why: 'Continuity correction: the bars for $220, 221, \\dots$ start at $219.5$.' },
            { tex: '\\text{exact: } \\sum_{k=220}^{400}\\binom{400}{k}0.5^{400} \\approx 0.0255; \\quad \\text{no correction: } 1 - \\Phi(2) \\approx 0.0228', why: 'The corrected approximation is accurate to $0.0001$; skipping the correction is off by more than $10\\%$ of the answer.' },
          ],
          result: 'A balanced hero wins $220$ or more of $400$ matches only about $2.6\\%$ of the time, so observing $55\\%$ is fairly strong evidence of overtuning.',
        },
        {
          type: 'graph',
          x: [-1, 51],
          y: [0, 0.25],
          xStep: 5,
          yStep: 0.05,
          height: 270,
          segments: [
            ...binK.map((k) => ({ from: [k, 0] as [number, number], to: [k, `${binom(k)}*${atMostC(k)}`] as [number, string], color: 'blue' as const })),
            ...binK.map((k) => ({ from: [k, 0] as [number, number], to: [k, `${binom(k)}*${aboveC(k)}`] as [number, string], color: 'gray' as const })),
          ],
          functions: [{ expr: `normpdf((x - n*p)/${binSd})/${binSd}`, color: 'red', label: 'normal curve $N(np,\\ np(1-p))$' }],
          areas: [{ expr: `normpdf((x - n*p)/${binSd})/${binSd}`, from: -1, to: 'c + 0.5', color: 'red' }],
          vlines: [{ x: 'c + 0.5', label: 'c + 0.5', color: 'red' }],
          sliders: [
            { name: 'n', min: 5, max: 50, step: 1, value: 40, label: 'trials $n$' },
            { name: 'p', min: 0.02, max: 0.98, step: 0.01, value: 0.3, label: 'success probability $p$' },
            { name: 'c', min: 0, max: 50, step: 1, value: 9, label: 'cutoff $c$ for $P(X \\le c)$' },
          ],
          readouts: [
            { label: 'exact $P(X \\le c) =$', expr: binomCdf, digits: 4 },
            { label: 'normal with correction $=$', expr: `normcdf((c + 0.5 - n*p)/${binSd})`, digits: 4 },
            { label: 'normal without correction $=$', expr: `normcdf((c - n*p)/${binSd})`, digits: 4 },
          ],
          caption: 'Blue stems: the binomial probabilities included in $P(X \\le c)$; gray: the rest. The shaded area under the normal curve stops at $c + 0.5$, the right edge of the last included bar. Compare the readouts: with the correction the error is usually in the third decimal; without it, it can be several times larger. Now push $p$ to $0.05$: the PMF becomes lopsided and both approximations degrade, as $np \\ge 10$ fails.',
        },
      ],
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'numeric',
      prompt: '$X \\sim \\text{Bin}(100,\\ 0.3)$ counts critical hits in $100$ attacks. Use the normal approximation **with** continuity correction to estimate $P(X \\le 25)$. Give $4$ decimal places.',
      hint: '$\\mu = np$, $\\sigma = \\sqrt{np(1-p)}$. "At most $25$" includes the bar for $25$, which ends at $25.5$.',
      label: '$P(X \\le 25) \\approx$',
      answer: 'normcdf((25.5 - 30)/sqrt(21))',
      tolerance: 0.0006,
      answerTex: '\\Phi(-0.982) \\approx 0.1631',
      explanation: '$\\mu = 100 \\cdot 0.3 = 30$ and $\\sigma = \\sqrt{100 \\cdot 0.3 \\cdot 0.7} = \\sqrt{21} \\approx 4.583$. With the correction, $z = \\frac{25.5 - 30}{4.583} \\approx -0.982$ and $P(X \\le 25) \\approx \\Phi(-0.982) \\approx 0.1631$. The exact binomial value is $0.1631$ as well. Without the correction you would get $\\Phi(-1.091) \\approx 0.1376$, a sizable error.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'Normal approximation to the Poisson',
      blocks: [
        {
          type: 'p',
          text: 'Crash reports, server errors and incoming matchmaking requests are often modeled as [[stat-poisson-distribution|Poisson]] counts. A $\\text{Pois}(\\lambda)$ count has mean $\\lambda$ and variance $\\lambda$, and the sum of independent Poisson variables is again Poisson. So $\\text{Pois}(100)$ is the sum of $100$ independent $\\text{Pois}(1)$ counts, and the CLT gives $$\\text{Pois}(\\lambda) \\approx N(\\lambda,\\ \\lambda) \\quad \\text{for large } \\lambda,$$ with the same continuity correction, since Poisson counts are integers.',
        },
        {
          type: 'derivation',
          title: 'A crash-rate alarm',
          steps: [
            { tex: 'X \\sim \\text{Pois}(100): \\quad \\mu = 100, \\quad \\sigma = \\sqrt{100} = 10', why: 'A build normally produces $100$ crash reports per day.' },
            { tex: 'P(X \\ge 120) \\approx 1 - \\Phi\\left(\\frac{119.5 - 100}{10}\\right) = 1 - \\Phi(1.95) \\approx 0.0256', why: '"At least $120$" starts with the bar for $120$, whose left edge is $119.5$.' },
            { tex: '\\text{exact: } P(X \\ge 120) = 1 - \\sum_{k=0}^{119} e^{-100}\\frac{100^k}{k!} \\approx 0.0282', why: 'Computed by summing the Poisson PMF.' },
          ],
          result: 'An alarm at $120$ crashes per day would fire falsely on about $1$ day in $35$ to $40$. The approximation is decent but slightly low: the Poisson is right-skewed with skewness $1/\\sqrt{\\lambda} = 0.1$, so its right tail is a bit heavier than the normal\'s. For small $\\lambda$ (say under $20$), use the Poisson PMF directly.',
        },
        {
          type: 'callout',
          variant: 'exam',
          title: 'How these questions are graded',
          text: 'Instructors check four things: you checked the conditions ($np \\ge 10$ and $n(1-p) \\ge 10$, or $\\lambda$ large); you used the right mean and **standard deviation** (not the variance); you applied the continuity correction in the right direction; and you converted the event correctly ("more than $5$" is $X \\ge 6$, which becomes $5.5$). Writing the event in $\\le$ / $\\ge$ form first prevents most mistakes.',
        },
      ],
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'error',
      prompt: 'Crash reports $X \\sim \\text{Pois}(100)$ per day. A student approximates $P(X \\ge 120)$. Tap the first wrong line.',
      lines: [
        '$X \\approx N(100,\\ 100)$, so $\\sigma = 10$.',
        'With the continuity correction, $P(X \\ge 120) \\approx P(Y \\ge 120.5)$ for $Y \\sim N(100, 100)$.',
        '$z = \\frac{120.5 - 100}{10} = 2.05$.',
        '$P(X \\ge 120) \\approx 1 - \\Phi(2.05) \\approx 0.0202$.',
      ],
      errorLines: [2],
      explanation: 'The correction went the wrong way. The event $X \\ge 120$ **includes** the bar for $120$, which spans $[119.5, 120.5]$, so the normal area must start at $119.5$: $P(X \\ge 120) \\approx 1 - \\Phi\\left(\\frac{119.5 - 100}{10}\\right) = 1 - \\Phi(1.95) \\approx 0.0256$. Starting at $120.5$ computes $P(X \\ge 121)$ instead. (Exact: $0.0282$.)',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'concept',
      title: 'Applications: totals of many small random effects',
      blocks: [
        {
          type: 'p',
          text: 'Whenever a quantity is a **sum** of many independent pieces, the CLT lets you answer probability questions with just a mean and a variance.',
        },
        {
          type: 'derivation',
          title: 'Total damage over many hits',
          steps: [
            { tex: 'D_i \\sim U(80, 120): \\quad \\mu = 100, \\quad \\sigma = \\frac{40}{\\sqrt{12}} \\approx 11.55', why: 'Each hit deals a uniform random amount; for $U(a, b)$, $\\sigma = \\frac{b - a}{\\sqrt{12}}$.' },
            { tex: 'T = D_1 + \\cdots + D_{100}: \\quad E[T] = 10{,}000, \\quad \\operatorname{SD}(T) = 11.55\\sqrt{100} \\approx 115.5', why: 'Means add; variances add (independent hits), so the SD grows like $\\sqrt{n}$.' },
            { tex: 'P(T \\ge 10{,}200) \\approx 1 - \\Phi\\left(\\frac{200}{115.5}\\right) = 1 - \\Phi(1.732) \\approx 0.0416', why: 'CLT approximation for the total. (Damage is continuous here, so no continuity correction.)' },
          ],
          result: 'If a boss has $10{,}200$ HP, a player landing $100$ hits kills it only about $4\\%$ of the time, even though $100$ hits average $10{,}000$ — and the kill takes a little over $102$ hits *on average*. Encounter designers use exactly this to tune "hits to kill" so fights feel consistent.',
        },
        {
          type: 'heading',
          text: 'Accumulated rounding error',
        },
        {
          type: 'p',
          text: 'Round each of $n$ numbers to the nearest unit (a cent, a pixel, an integer damage value) before adding them. Each rounding error is roughly $U(-\\frac{1}{2}, \\frac{1}{2})$ units, with mean $0$ and standard deviation $\\frac{1}{\\sqrt{12}} \\approx 0.289$. The worst case for the total is $\\pm\\frac{n}{2}$ — but the CLT says the **typical** total error is only about $0.289\\sqrt{n}$, and it is approximately normal. Summing $10{,}000$ rounded values: worst case $5000$ units, yet $95\\%$ of the time the error is within $1.96 \\times 0.289 \\times 100 \\approx 57$ units. The same $\\sqrt{n}$ law describes how floating-point rounding errors typically accumulate in long sums, which is why naive summation is usually far better than its worst-case bound (and why Kahan summation exists for when it is not).',
        },
      ],
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'numeric',
      prompt: 'An in-game store rounds each of $300$ prices to the nearest cent before summing them. Treat each rounding error as independent and uniform on $[-0.005, 0.005]$ dollars. Approximate the probability that the total rounding error exceeds $\\$0.10$ in absolute value. Give $4$ decimal places.',
      hint: 'One error has SD $\\frac{0.01}{\\sqrt{12}}$. The total of $300$ has SD $\\frac{0.01}{\\sqrt{12}}\\sqrt{300}$ — simplify it.',
      label: '$P(|E| > 0.10) \\approx$',
      answer: '2*(1 - normcdf(2))',
      tolerance: 0.0006,
      answerTex: '2(1 - \\Phi(2)) \\approx 0.0455',
      explanation: 'Each error has $\\sigma = \\frac{0.01}{\\sqrt{12}}$, so the total has $\\operatorname{SD} = 0.01\\sqrt{\\frac{300}{12}} = 0.01 \\cdot 5 = 0.05$ dollars, with mean $0$. Then $P(|E| > 0.10) \\approx P(|Z| > 2) = 2(1 - \\Phi(2)) \\approx 0.0455$. The worst case is $300 \\times 0.005 = \\$1.50$, but errors that large essentially never happen: random rounding errors mostly cancel.',
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'order',
      prompt: 'Put the steps of a normal approximation for $P(X \\ge 15)$, $X \\sim \\text{Bin}(n, p)$, in order.',
      lines: [
        'Check the conditions: $np \\ge 10$ and $n(1-p) \\ge 10$.',
        'Compute $\\mu = np$ and $\\sigma = \\sqrt{np(1-p)}$.',
        'Apply the continuity correction: $P(X \\ge 15) \\approx P(Y \\ge 14.5)$ with $Y$ normal.',
        'Standardize: $z = (14.5 - \\mu)/\\sigma$.',
        'Answer $1 - \\Phi(z)$.',
      ],
      distractors: ['Apply the continuity correction: $P(X \\ge 15) \\approx P(Y \\ge 15.5)$ with $Y$ normal.'],
      explanation: 'Check that the approximation is justified, find the matching normal distribution, widen the integer event by half a unit on its included end ($X \\ge 15$ includes the bar $[14.5, 15.5]$, so start at $14.5$), standardize, and read the upper tail. The distractor uses $15.5$, which would compute $P(X \\ge 16)$.',
    },
  ],
  takeaways: [
    'CLT: for i.i.d. terms with finite variance, $\\frac{S_n - n\\mu}{\\sigma\\sqrt{n}} \\to N(0, 1)$ in distribution; in practice $S_n \\approx N(n\\mu, n\\sigma^2)$ and $\\bar{X} \\approx N(\\mu, \\sigma^2/n)$.',
    'The CLT is about sums and averages, not the data: a big sample of skewed data is still skewed, but its mean is nearly normal with standard error $\\sigma/\\sqrt{n}$.',
    'How large $n$ must be depends on skewness ($\\gamma/\\sqrt{n}$): symmetric populations need a handful, exponential-like ones $30$–$50$, rare events thousands; heavy tails or dependence can break it.',
    'Binomial $\\approx N(np, np(1-p))$ when $np, n(1-p) \\ge 10$; Poisson $\\approx N(\\lambda, \\lambda)$ for large $\\lambda$. Use the continuity correction: $P(X \\le k) \\approx \\Phi\\left(\\frac{k + 0.5 - \\mu}{\\sigma}\\right)$.',
    'Totals of many independent effects — damage over many hits, latency, rounding errors — are approximately normal with SD growing like $\\sqrt{n}$, far below the worst case.',
    'The approximation is best in the middle; relative accuracy in extreme tails needs much larger $n$ (the sum-of-$12$-uniforms "normal" never exceeds $\\pm 6$).',
  ],
  reading: [
    {
      title: 'OpenStax — Introductory Statistics',
      url: 'https://openstax.org/details/books/introductory-statistics',
      source: 'openstax',
      note: 'The chapter on the central limit theorem works through sampling distributions of means and sums with many applied exercises.',
    },
    {
      title: 'Seeing Theory (Brown University)',
      url: 'https://seeing-theory.brown.edu/',
      source: 'other',
      note: 'The "Probability Distributions" chapter includes an animated central limit theorem demo where you choose the population and watch sample means pile into a bell.',
    },
    {
      title: 'Wikipedia — Central limit theorem',
      url: 'https://en.wikipedia.org/wiki/Central_limit_theorem',
      source: 'wikipedia',
      note: 'Precise statements (Lindeberg–Lévy, Lyapunov), the Berry–Esseen bound on how fast the convergence is, and the history from de Moivre to Lévy.',
    },
    {
      title: 'Khan Academy — Statistics and probability',
      url: 'https://www.khanacademy.org/math/statistics-probability',
      source: 'khan',
      note: 'The unit on sampling distributions has short videos and practice on the sampling distribution of the mean and normal approximations.',
    },
  ],
};
