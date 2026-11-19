import type { Lesson } from '../../types';

// Two fair dice: P(S = s) = (6 - |s - 7|)/36 for s = 2..12.
const diceSums = Array.from({ length: 11 }, (_, i) => i + 2);
const diceP = (s: number) => (6 - Math.abs(s - 7)) / 36;

// Two funds: SD 20% and 10%, correlation r (slider). Portfolio SD in % at weight w.
const sdAt = (w: string) => `100sqrt(0.04(${w})^2 + 0.01(1 - (${w}))^2 + 0.04(${w})(1 - (${w}))r)`;
const wStar = 'max((0.01 - 0.02r)/(0.05 - 0.04r), 0)';

export const lesson: Lesson = {
  id: 'stat-sums',
  title: 'Sums and Linear Combinations of Random Variables',
  summary: 'The mean and variance of sums and linear combinations (with covariance), why averaging $n$ measurements divides the standard deviation by $\\sqrt{n}$, portfolio-style variance reduction, sums of independent normals, and the distribution of a sum by convolution — dice, uniforms, damage over time and combined latency.',
  minutes: 20,
  objectives: [
    'Compute $E$ and $\\operatorname{Var}$ of $aX + bY$ and of longer linear combinations, including the covariance term',
    'Explain why the standard deviation of an average of $n$ independent measurements is $\\sigma/\\sqrt{n}$, and what correlation does to that',
    'Choose weights that minimize the variance of a combination (portfolio / variance reduction)',
    'Use the fact that independent normals sum to a normal to compute probabilities about totals and differences',
    'Find the distribution of a sum of independent variables by convolution, for dice and for uniform densities',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Mean and variance of a sum',
      blocks: [
        {
          type: 'p',
          text: 'Totals are everywhere: total damage over a fight, total latency through client, network and server, total gold over a session, the sum of rounding errors in a long computation. You already know half the story from Discrete Math: expectation is linear, $E[X + Y] = E[X] + E[Y]$, always — dependent or not. The other half, the variance, is where covariance enters.',
        },
        {
          type: 'derivation',
          title: 'Deriving $\\operatorname{Var}(X + Y)$',
          steps: [
            { tex: '\\operatorname{Var}(X + Y) = \\operatorname{Cov}(X + Y,\\ X + Y)', why: 'Variance is the covariance of a variable with itself.' },
            { tex: '= \\operatorname{Cov}(X, X) + \\operatorname{Cov}(X, Y) + \\operatorname{Cov}(Y, X) + \\operatorname{Cov}(Y, Y)', why: 'Bilinearity: expand like $(a + b)(a + b)$.' },
            { tex: '= \\operatorname{Var}(X) + \\operatorname{Var}(Y) + 2\\operatorname{Cov}(X, Y)', why: 'Symmetry of covariance merges the two middle terms.' },
          ],
          result: 'It is the identity $(a + b)^2 = a^2 + b^2 + 2ab$ for random variables. When $X$ and $Y$ tend to move together ($\\operatorname{Cov} > 0$), their deviations reinforce and the total is more variable; when they move oppositely, deviations cancel.',
        },
        {
          type: 'theorem',
          name: 'Linear combinations',
          tex: '\\begin{aligned} E\\Big[\\sum_i a_i X_i\\Big] &= \\sum_i a_i\\,E[X_i] \\\\ \\operatorname{Var}\\Big(\\sum_i a_i X_i\\Big) &= \\sum_i a_i^2 \\operatorname{Var}(X_i) + 2\\sum_{i < j} a_i a_j \\operatorname{Cov}(X_i, X_j) \\end{aligned}',
          text: 'In matrix form the variance is $\\mathbf{a}^T\\Sigma\\mathbf{a}$ with the [[stat-covariance-matrix|covariance matrix]] $\\Sigma$. For two variables: $\\operatorname{Var}(aX + bY) = a^2\\operatorname{Var}(X) + b^2\\operatorname{Var}(Y) + 2ab\\operatorname{Cov}(X, Y)$.',
        },
        {
          type: 'derivation',
          title: 'Kill–death difference in the arena table',
          steps: [
            { tex: 'E[X - Y] = 0.90 - 0.80 = 0.10', why: 'Linearity, with the means from the joint-distribution lesson.' },
            { tex: '\\operatorname{Var}(X - Y) = \\operatorname{Var}(X) + \\operatorname{Var}(Y) - 2\\operatorname{Cov}(X, Y)', why: 'Take $a = 1$, $b = -1$: the cross term gets the factor $2ab = -2$.' },
            { tex: '= 0.59 + 0.56 - 2(-0.12) = 1.39', why: 'Values from the covariance lesson. Subtracting a negatively correlated variable *adds* variance.' },
          ],
          result: 'The K–D difference has mean $0.1$ and standard deviation $\\sqrt{1.39} \\approx 1.18$. Because kills and deaths move oppositely, a good round is good on both counts and a bad round bad on both, so the difference swings more than either variable alone.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'numeric',
      prompt: '$\\operatorname{Var}(X) = 4$, $\\operatorname{Var}(Y) = 9$ and $\\rho = \\operatorname{Corr}(X, Y) = -0.5$. Find $\\operatorname{Var}(X - Y)$.',
      hint: 'First turn the correlation into a covariance: $\\operatorname{Cov} = \\rho\\,\\sigma_X\\sigma_Y$.',
      label: '$\\operatorname{Var}(X - Y) =$',
      answer: '19',
      explanation: '$\\operatorname{Cov}(X, Y) = \\rho\\,\\sigma_X\\sigma_Y = (-0.5)(2)(3) = -3$. Then $\\operatorname{Var}(X - Y) = 4 + 9 - 2(-3) = 19$. Two common slips: forgetting the covariance term (giving $13$) and using $+2\\operatorname{Cov}$ for a difference (giving $7$, which is $\\operatorname{Var}(X + Y)$). For a difference the cross term is $2(1)(-1)\\operatorname{Cov}$.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Independent sums and the power of averaging',
      blocks: [
        {
          type: 'p',
          text: 'When the variables are independent (or merely uncorrelated), every covariance term vanishes and **variances add**. Two consequences drive much of statistics.',
        },
        {
          type: 'derivation',
          title: 'Sum and average of $n$ independent measurements',
          steps: [
            { tex: 'S_n = X_1 + \\cdots + X_n, \\quad X_i \\text{ independent, each with mean } \\mu \\text{ and variance } \\sigma^2', why: 'For example $n$ frame-time samples, $n$ hits of a weapon, $n$ survey responses.' },
            { tex: 'E[S_n] = n\\mu, \\qquad \\operatorname{Var}(S_n) = n\\sigma^2, \\qquad \\operatorname{SD}(S_n) = \\sigma\\sqrt{n}', why: 'Linearity; for the variance all covariances are $0$.' },
            { tex: '\\bar{X} = \\frac{S_n}{n}: \\quad E[\\bar{X}] = \\mu, \\qquad \\operatorname{Var}(\\bar{X}) = \\frac{n\\sigma^2}{n^2} = \\frac{\\sigma^2}{n}', why: 'Scaling by $\\frac{1}{n}$ multiplies the variance by $\\frac{1}{n^2}$.' },
            { tex: '\\operatorname{SD}(\\bar{X}) = \\frac{\\sigma}{\\sqrt{n}}', why: 'Take the square root.' },
          ],
          result: 'A total grows more variable as you add terms, but only like $\\sqrt{n}$ — slower than its mean grows. An average gets **less** variable like $1/\\sqrt{n}$. To halve the noise of a benchmark, you need four times as many runs. This $\\sigma/\\sqrt{n}$ is the seed of the law of large numbers and of every confidence interval in Unit 7.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why $\\sqrt{n}$ and not $n$?',
          text: 'If the errors all had the same sign, $n$ of them would add up to $n$ times one error. Independent errors don\'t: some are positive and some negative, and they partly cancel. Standard deviations do not add — **variances** do, because the cross terms $2\\operatorname{Cov}(X_i, X_j)$ that would make the errors "line up" are all zero. Adding $n$ equal variances gives $n\\sigma^2$, and the square root turns that into $\\sigma\\sqrt{n}$. It is Pythagoras: independent errors are perpendicular, so their lengths combine like the sides of a right triangle, not like collinear segments.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Averaging correlated measurements helps less',
          text: 'Consecutive frame times are not independent: a heavy scene makes many frames slow together. If every pair has correlation $\\rho > 0$, the variance formula keeps $n(n - 1)$ covariance terms: $$\\operatorname{Var}(\\bar{X}) = \\frac{\\sigma^2}{n}\\big(1 + (n - 1)\\rho\\big) \\ \\to\\ \\rho\\,\\sigma^2 \\text{ as } n \\to \\infty.$$ The noise no longer goes to zero — no number of samples from one play session averages away the session\'s own quirks. Benchmark across many independent sessions instead.',
        },
        {
          type: 'graph',
          x: [0, 100],
          y: [0, 1.05],
          xStep: 10,
          yStep: 0.25,
          height: 260,
          functions: [
            { expr: '1/sqrt(x)', domain: [1, 100], color: 'gray', dashed: true, label: 'independent: $1/\\sqrt{n}$' },
            { expr: 'sqrt((1 + (x - 1)r)/x)', domain: [1, 100], color: 'blue', label: '$\\operatorname{SD}(\\bar{X})/\\sigma$ with correlation $\\rho$' },
          ],
          hlines: [{ y: 'sqrt(r)', label: 'floor √ρ', color: 'red' }],
          sliders: [{ name: 'r', min: 0, max: 0.5, step: 0.01, value: 0.1, label: 'pairwise correlation $\\rho$' }],
          readouts: [
            { label: '$\\operatorname{SD}(\\bar{X})/\\sigma$ at $n = 100$:', expr: 'sqrt((1 + 99r)/100)', digits: 3 },
            { label: 'limit $\\sqrt{\\rho}$:', expr: 'sqrt(r)', digits: 3 },
          ],
          caption: 'Horizontal axis: the number of measurements $n$. With $\\rho = 0$ the curves agree and the noise keeps shrinking. Even $\\rho = 0.1$ stops the improvement near $\\sqrt{0.1} \\approx 0.32\\sigma$: $100$ correlated samples are worth only about $9$ independent ones.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'numeric',
      prompt: 'A single latency measurement has standard deviation $\\sigma = 4$ ms. How many **independent** measurements must you average so that the average has standard deviation $0.5$ ms?',
      hint: 'Solve $\\sigma/\\sqrt{n} = 0.5$.',
      label: '$n =$',
      answer: '64',
      explanation: '$\\frac{4}{\\sqrt{n}} = 0.5 \\implies \\sqrt{n} = 8 \\implies n = 64$. Cutting the standard deviation by a factor of $8$ costs a factor of $8^2 = 64$ in measurements — the square-root law in action. If you answered $8$, you divided the standard deviation by $n$ instead of $\\sqrt{n}$.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Linear combinations: reducing variance by mixing',
      blocks: [
        {
          type: 'p',
          text: 'The covariance term is not just a nuisance — you can exploit it. Suppose you split savings between two funds, a fraction $w$ in fund $A$ (return $X$, standard deviation $20\\%$ per year) and $1 - w$ in fund $B$ (return $Y$, standard deviation $10\\%$), with correlation $\\rho$. The portfolio return is the linear combination $R = wX + (1 - w)Y$.',
        },
        {
          type: 'derivation',
          title: 'The minimum-variance mix',
          steps: [
            { tex: 'V(w) = \\operatorname{Var}(R) = w^2\\sigma_X^2 + (1 - w)^2\\sigma_Y^2 + 2w(1 - w)\\rho\\,\\sigma_X\\sigma_Y', why: 'The two-variable formula with $a = w$, $b = 1 - w$ and $\\operatorname{Cov} = \\rho\\sigma_X\\sigma_Y$.' },
            { tex: 'V\'(w) = 2w\\sigma_X^2 - 2(1 - w)\\sigma_Y^2 + 2(1 - 2w)\\rho\\sigma_X\\sigma_Y = 0', why: 'Minimize a quadratic in $w$ with a derivative.' },
            { tex: 'w^* = \\frac{\\sigma_Y^2 - \\rho\\sigma_X\\sigma_Y}{\\sigma_X^2 + \\sigma_Y^2 - 2\\rho\\sigma_X\\sigma_Y}', why: 'Collect the $w$ terms. The denominator is $\\operatorname{Var}(X - Y) > 0$, so this is a minimum.' },
            { tex: '\\rho = 0: \\quad w^* = \\frac{0.01}{0.04 + 0.01} = 0.2, \\quad V(0.2) = 0.04(0.04) + 0.64(0.01) = 0.008', why: 'With $\\sigma_X^2 = 0.04$, $\\sigma_Y^2 = 0.01$.' },
          ],
          result: 'With uncorrelated funds, putting $20\\%$ in the **riskier** fund gives a standard deviation of $\\sqrt{0.008} \\approx 8.9\\%$ — lower than the safe fund alone ($10\\%$). Diversification is variance reduction: independent fluctuations partly cancel.',
        },
        {
          type: 'graph',
          x: [0, 1],
          y: [0, 22],
          xStep: 0.1,
          yStep: 5,
          height: 260,
          functions: [
            { expr: '100sqrt(0.04x^2 + 0.01(1 - x)^2 + 0.04x(1 - x)r)', domain: [0, 1], color: 'blue', label: 'portfolio SD (%) against weight $w$ in fund $A$' },
          ],
          points: [
            { x: wStar, y: sdAt(wStar), color: 'red', label: 'minimum' },
            { x: 'm', y: sdAt('m'), color: 'blue', label: 'your mix' },
          ],
          hlines: [{ y: 10, label: 'fund B alone', color: 'gray' }],
          sliders: [
            { name: 'r', min: -1, max: 1, step: 0.05, value: 0, label: 'correlation $\\rho$ between the funds' },
            { name: 'm', min: 0, max: 1, step: 0.01, value: 0.6, label: 'your weight $w$ (move it to the red dot)' },
          ],
          readouts: [
            { label: 'best weight $w^*$ (no short selling) $=$', expr: wStar, digits: 3 },
            { label: 'smallest SD (%) $=$', expr: sdAt(wStar), digits: 2 },
            { label: 'SD at your weight (%) $=$', expr: sdAt('m'), digits: 2 },
          ],
          caption: 'The more negative the correlation, the deeper the dip: at $\\rho = -1$ the mix $w = \\frac{1}{3}$ has **zero** variance (the funds\' swings cancel exactly). For $\\rho \\ge 0.5$ the dip disappears and the safest choice is all of fund $B$. The same mathematics chooses weights for combining sensor readings, ensemble models in machine learning, or two noisy estimates of a player\'s skill.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Variance reduction in Monte Carlo code',
          text: 'Simulations use the covariance term on purpose; this is called [[stat-variance-reduction|variance reduction]]. **Antithetic variates**: estimate $E[g(U)]$ with pairs $\\frac{1}{2}\\big(g(U) + g(1 - U)\\big)$; for monotone $g$ the two halves are negatively correlated, so the pair\'s variance is smaller than for two independent draws. **Common random numbers**: when comparing two versions of a game balance in simulation, feed both the same random seed so that their difference $X - Y$ has a large positive $\\operatorname{Cov}(X, Y)$ subtracted from its variance.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'truefalse',
      prompt: 'If $X$ and $Y$ are independent, then $\\operatorname{Var}(X - Y) = \\operatorname{Var}(X) - \\operatorname{Var}(Y)$.',
      answer: false,
      explanation: 'False: variances **add** even for a difference. $\\operatorname{Var}(X - Y) = \\operatorname{Var}(X) + (-1)^2\\operatorname{Var}(Y) - 2\\operatorname{Cov}(X, Y) = \\operatorname{Var}(X) + \\operatorname{Var}(Y)$ when the covariance is $0$. Subtracting a random quantity adds its uncertainty; the formula in the statement could even give a negative "variance" (try $\\operatorname{Var}(X) = 1$, $\\operatorname{Var}(Y) = 4$).',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'Sums of independent normals are normal',
      blocks: [
        {
          type: 'p',
          text: 'Means and variances of a sum are easy; its **shape** is generally not. The [[stat-normal-distribution|normal]] family is special: it is closed under addition.',
        },
        {
          type: 'theorem',
          name: 'Sums of independent normal random variables',
          tex: 'X \\sim N(\\mu_1, \\sigma_1^2),\\ Y \\sim N(\\mu_2, \\sigma_2^2) \\text{ independent} \\implies aX + bY + c \\sim N\\big(a\\mu_1 + b\\mu_2 + c,\\ a^2\\sigma_1^2 + b^2\\sigma_2^2\\big)',
          text: 'The mean and variance come from the general rules; the theorem adds that the result is again **normal**. It extends to any number of independent normals.',
        },
        {
          type: 'derivation',
          title: 'Total request latency',
          steps: [
            { tex: 'T = C + N + S, \\quad C \\sim N(12, 3^2),\\ N \\sim N(40, 8^2),\\ S \\sim N(20, 4^2)', why: 'Client processing, network round trip and server time in ms, modeled as independent normals (a simplification: real latencies are right-skewed).' },
            { tex: 'T \\sim N(12 + 40 + 20,\\ 9 + 64 + 16) = N(72,\\ 89)', why: 'Means add; **variances** (not standard deviations) add. $\\operatorname{SD}(T) = \\sqrt{89} \\approx 9.43$, not $3 + 8 + 4 = 15$.' },
            { tex: 'P(T > 90) = P\\left(Z > \\frac{90 - 72}{\\sqrt{89}}\\right) = 1 - \\Phi(1.908) \\approx 0.0282', why: 'Standardize and use the standard normal CDF $\\Phi$.' },
          ],
          result: 'About $2.8\\%$ of requests exceed a $90$ ms budget. Adding standard deviations would have overstated the spread and predicted far more timeouts.',
        },
        {
          type: 'p',
          text: 'Differences work the same way and answer "which is bigger?" questions: $P(X > Y) = P(X - Y > 0)$, and $X - Y \\sim N(\\mu_1 - \\mu_2,\\ \\sigma_1^2 + \\sigma_2^2)$.',
        },
        {
          type: 'deepdive',
          title: 'Why the sum stays normal: completing the square',
          blocks: [
            {
              type: 'p',
              text: 'For independent $X, Y \\sim N(0, 1)$, the density of $S = X + Y$ is the [[stat-convolution|convolution]] $f_S(s) = \\int_{-\\infty}^{\\infty} \\varphi(x)\\,\\varphi(s - x)\\,dx$ (derived later in this lesson), where $\\varphi(z) = \\frac{1}{\\sqrt{2\\pi}}e^{-z^2/2}$.',
            },
            {
              type: 'derivation',
              steps: [
                { tex: 'f_S(s) = \\frac{1}{2\\pi}\\int_{-\\infty}^{\\infty} e^{-\\frac{1}{2}\\left(x^2 + (s - x)^2\\right)}\\,dx', why: 'Multiply the two densities.' },
                { tex: 'x^2 + (s - x)^2 = 2\\left(x - \\tfrac{s}{2}\\right)^2 + \\tfrac{s^2}{2}', why: 'Complete the square in $x$.' },
                { tex: 'f_S(s) = \\frac{1}{2\\pi}e^{-s^2/4}\\int_{-\\infty}^{\\infty} e^{-(x - s/2)^2}\\,dx = \\frac{1}{2\\pi}e^{-s^2/4}\\sqrt{\\pi}', why: 'The factor without $x$ comes out; $\\int e^{-u^2}\\,du = \\sqrt{\\pi}$ (the Gaussian integral).' },
                { tex: '= \\frac{1}{\\sqrt{2\\pi \\cdot 2}}\\,e^{-s^2/(2 \\cdot 2)}', why: 'Rewrite: this is exactly the $N(0, 2)$ density.' },
              ],
              result: 'General means and variances follow by shifting and scaling. The key is that a product of Gaussians in $x$ is again a Gaussian in $x$, which integrates to a Gaussian in $s$.',
            },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'numeric',
      prompt: 'Player A\'s reaction time is $X \\sim N(250, 30^2)$ ms and player B\'s is $Y \\sim N(230, 40^2)$ ms, independent. Find $P(X > Y)$, the probability that A reacts **slower**. Give $4$ decimal places.',
      hint: '$X - Y$ is normal. Find its mean and standard deviation, then $P(X - Y > 0)$.',
      label: '$P(X > Y) \\approx$',
      answer: 'normcdf(0.4)',
      tolerance: 0.0006,
      answerTex: '\\Phi(0.4) \\approx 0.6554',
      explanation: '$D = X - Y \\sim N(250 - 230,\\ 30^2 + 40^2) = N(20,\\ 2500)$, so $\\operatorname{SD}(D) = 50$. Then $P(D > 0) = P\\left(Z > \\frac{0 - 20}{50}\\right) = P(Z > -0.4) = \\Phi(0.4) \\approx 0.6554$. Even with a $20$ ms worse average, B\'s larger spread means A is slower only about $66\\%$ of the time. Using $\\sigma = 40 - 30 = 10$ is the classic error: variances add for differences.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'concept',
      title: 'The distribution of a sum: convolution',
      blocks: [
        {
          type: 'p',
          text: 'For non-normal variables you have to work out the shape of a sum yourself. Take independent $X$ and $Y$ and ask for $P(X + Y = s)$. Every way of reaching $s$ pairs some value $x$ of $X$ with the single value $s - x$ of $Y$ that completes it. Adding over $x$ gives the [[stat-convolution|convolution]] formula.',
        },
        {
          type: 'theorem',
          name: 'Convolution',
          tex: 'p_{X+Y}(s) = \\sum_x p_X(x)\\,p_Y(s - x), \\qquad f_{X+Y}(s) = \\int_{-\\infty}^{\\infty} f_X(x)\\,f_Y(s - x)\\,dx',
          text: 'for **independent** $X$ and $Y$. Independence is what turns $P(X = x, Y = s - x)$ into the product.',
        },
        {
          type: 'derivation',
          title: 'Two dice: why the PMF is a triangle',
          steps: [
            { tex: 'p_S(4) = p(1)p(3) + p(2)p(2) + p(3)p(1) = \\tfrac{3}{36}', why: 'Pairs $(x, 4 - x)$ with both values in $1..6$: $x = 1, 2, 3$.' },
            { tex: 'p_S(s) = \\frac{\\#\\{x : 1 \\le x \\le 6,\\ 1 \\le s - x \\le 6\\}}{36} = \\frac{6 - |s - 7|}{36}', why: 'Each term is $\\frac{1}{36}$; the count of valid $x$ rises by one per step up to $s = 7$, then falls.' },
          ],
          result: 'Flat $\\ast$ flat $=$ triangle. Convolving with a third die rounds the triangle into a bell (3d6 has $P(S = 10) = \\frac{27}{216}$) — a first glimpse of the central limit theorem.',
        },
        {
          type: 'graph',
          x: [1, 13],
          y: [0, 0.2],
          xStep: 1,
          yStep: 0.05,
          height: 210,
          segments: diceSums.map((s) => ({ from: [s, 0] as [number, number], to: [s, diceP(s)] as [number, number], color: 'blue' as const })),
          points: diceSums.map((s) => ({ x: s, y: diceP(s), color: 'blue' as const })),
          caption: 'The PMF of the sum of two dice: $p_S(s) = \\frac{6 - |s - 7|}{36}$, a discrete triangle from $\\frac{1}{36}$ at $2$ and $12$ to $\\frac{6}{36}$ at $7$.',
        },
        {
          type: 'heading',
          text: 'Two uniform densities',
        },
        {
          type: 'p',
          text: 'For $X, Y \\sim U(0, 1)$ independent, $f_X(x)f_Y(s - x)$ equals $1$ exactly when $0 \\le x \\le 1$ **and** $0 \\le s - x \\le 1$, i.e. $s - 1 \\le x \\le s$. So $f_S(s)$ is the **length of the overlap** of $[0, 1]$ and $[s - 1, s]$: it is $s$ for $0 \\le s \\le 1$ and $2 - s$ for $1 \\le s \\le 2$ — the triangle $f_S(s) = 1 - |s - 1|$. Slide the window to see it:',
        },
        {
          type: 'graph',
          x: [-1.2, 3.2],
          y: [0, 1.4],
          xStep: 0.5,
          yStep: 0.5,
          height: 250,
          functions: [
            { expr: '1', domain: [0, 1], color: 'blue', label: '$f_X(x)$ on $[0, 1]$' },
            { expr: '1', domain: ['s - 1', 's'], color: 'orange', dashed: true, label: '$f_Y(s - x)$: the window $[s - 1, s]$' },
            { expr: '1 - abs(x - 1)', domain: [0, 2], color: 'purple', label: 'result $f_S$ (read the horizontal axis as $s$)' },
          ],
          areas: [{ expr: '1', from: 'max(0, s - 1)', to: 'min(1, s)', color: 'green' }],
          segments: [
            { from: [0, 0], to: [0, 1], color: 'blue' },
            { from: [1, 0], to: [1, 1], color: 'blue' },
            { from: ['s - 1', 0], to: ['s - 1', 1], color: 'orange', dashed: true },
            { from: ['s', 0], to: ['s', 1], color: 'orange', dashed: true },
          ],
          points: [{ x: 's', y: '1 - abs(s - 1)', color: 'purple', label: 'f_S(s)' }],
          sliders: [{ name: 's', min: 0, max: 2, step: 0.01, value: 0.6, label: 'the sum $s$' }],
          readouts: [{ label: 'overlap length $= f_S(s) =$', expr: 'min(1, s) - max(0, s - 1)', digits: 3 }],
          caption: 'The blue box is $f_X$; the dashed orange box is $f_Y(s - x)$, the window of $x$-values that can pair with $X$ to make the sum $s$. The green overlap has area $f_S(s)$, plotted as the purple dot. As $s$ moves from $0$ to $2$ the dot traces the triangle.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Convolution in graphics and audio',
          text: 'The same sum-of-products slides a kernel across an image (blur, sharpen, edge detection in post-processing) or an impulse response across a sound (reverb). A box blur applied twice is a triangle (tent) filter, and applied many times it approaches a Gaussian blur — the picture you just saw, one dimension at a time.',
        },
      ],
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'numeric',
      prompt: '$X$ and $Y$ are independent $U(0, 1)$. Find $P(X + Y \\le 1.5)$. Give a decimal.',
      hint: 'The density of the sum is the triangle $1 - |s - 1|$ on $[0, 2]$. The complement $P(S > 1.5)$ is a small triangle.',
      label: '$P(X + Y \\le 1.5) =$',
      answer: '0.875',
      tolerance: 0.0001,
      answerTex: '0.875',
      explanation: 'The region $S > 1.5$ is the small triangle under $f_S(s) = 2 - s$ from $1.5$ to $2$: base $0.5$, height $0.5$, area $\\frac{1}{2}(0.5)(0.5) = 0.125$. So $P(S \\le 1.5) = 1 - 0.125 = 0.875$. Geometrically, it is the area of the unit square below the line $x + y = 1.5$. Treating $S$ as uniform on $[0, 2]$ would give $0.75$ — sums of uniforms are not uniform.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'Damage over time: $X_1 + \\cdots + X_n$ is not $nX$',
      blocks: [
        {
          type: 'p',
          text: 'A poison deals $10$ ticks of damage, each an independent uniform integer from $8$ to $12$. A big hit deals $10$ times **one** such roll. Both average $100$. Are they the same?',
        },
        {
          type: 'derivation',
          title: 'Same mean, very different spread',
          steps: [
            { tex: 'X \\sim \\text{Uniform}\\{8, \\dots, 12\\}: \\quad E[X] = 10, \\quad \\operatorname{Var}(X) = \\tfrac{(-2)^2 + (-1)^2 + 0 + 1^2 + 2^2}{5} = 2', why: 'Average squared deviation from $10$ over five equally likely values.' },
            { tex: '\\text{poison: } \\operatorname{Var}(X_1 + \\cdots + X_{10}) = 10 \\cdot 2 = 20, \\quad \\operatorname{SD} \\approx 4.47', why: 'Independent ticks: variances add.' },
            { tex: '\\text{big hit: } \\operatorname{Var}(10X) = 10^2 \\cdot 2 = 200, \\quad \\operatorname{SD} \\approx 14.1', why: 'One roll scaled by $10$: the variance scales by $10^2$.' },
          ],
          result: 'Ten independent rolls partly cancel each other\'s luck; one roll multiplied by ten does not. The poison almost never strays far from $100$ — it reaches $110$ or more only $1.6\\%$ of the time, against $40\\%$ for the big hit ($110$ or $120$).',
        },
        {
          type: 'table',
          headers: ['Total damage', 'Mean', 'SD', '$P(\\text{total} \\ge 110)$'],
          rows: [
            ['$10$ independent ticks $X_1 + \\cdots + X_{10}$', '$100$', '$\\sqrt{20} \\approx 4.47$', '$0.0158$'],
            ['one hit $10X$', '$100$', '$\\sqrt{200} \\approx 14.1$', '$0.4$'],
          ],
          caption: 'Designers use this deliberately: many small independent rolls feel consistent and fair; one big roll feels swingy and exciting.',
        },
        {
          type: 'code',
          title: 'convolve.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdio>
#include <vector>

// A PMF on 0, 1, 2, ...: pmf[k] = P(X = k).
using Pmf = std::vector<double>;

// Distribution of X + Y for independent X, Y: p_S(s) = sum over x of p_X(x) * p_Y(s - x).
Pmf convolve(const Pmf& a, const Pmf& b) {
    Pmf s(a.size() + b.size() - 1, 0.0);
    for (std::size_t x = 0; x < a.size(); ++x)
        for (std::size_t y = 0; y < b.size(); ++y)
            s[x + y] += a[x] * b[y];            // the pair (x, y) contributes to the sum x + y
    return s;
}

int main() {
    Pmf die(7, 1.0 / 6); die[0] = 0;          // faces 1..6
    Pmf twoDice = convolve(die, die);
    std::printf("2d6: P(S = 7) = %.4f, P(S = 2) = %.4f\\n", twoDice[7], twoDice[2]);

    // Damage over time: 10 independent ticks, each uniform on {8, ..., 12}.
    Pmf tick(13, 0.0);
    for (int d = 8; d <= 12; ++d) tick[d] = 0.2;
    Pmf total = {1.0};                        // the sum of zero ticks is 0 with probability 1
    for (int i = 0; i < 10; ++i) total = convolve(total, tick);

    double mean = 0, var = 0, tail = 0;
    for (std::size_t s = 0; s < total.size(); ++s) mean += s * total[s];
    for (std::size_t s = 0; s < total.size(); ++s) var += (s - mean) * (s - mean) * total[s];
    for (std::size_t s = 110; s < total.size(); ++s) tail += total[s];
    std::printf("DoT total: mean %.2f, SD %.3f, P(total >= 110) = %.4f\\n", mean, std::sqrt(var), tail);
}`,
          output: `2d6: P(S = 7) = 0.1667, P(S = 2) = 0.0278
DoT total: mean 100.00, SD 4.472, P(total >= 110) = 0.0158`,
          annotations: [
            { lines: '9-15', text: 'Discrete convolution: every pair of values $(x, y)$ adds its probability $p_X(x)p_Y(y)$ to the slot $x + y$. Exactly the formula $\\sum_x p_X(x)p_Y(s - x)$, organized by pairs.' },
            { lines: 26, text: 'Convolving ten times gives the exact PMF of the total — no simulation, no approximation.' },
            { lines: '28-31', text: 'Mean, variance and a tail probability straight from the PMF. The SD matches $\\sqrt{20} \\approx 4.472$.' },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'error',
      prompt: 'A student computes the variance of the sum of two fair dice. (One die has variance $\\frac{35}{12}$.) Tap the first wrong line.',
      lines: [
        'Let $X_1, X_2$ be the two dice; each has $\\operatorname{Var}(X_i) = \\frac{35}{12}$.',
        'The dice are identically distributed, so $X_1 + X_2 = 2X_1$ in distribution.',
        '$\\operatorname{Var}(2X_1) = 4 \\cdot \\frac{35}{12} = \\frac{35}{3}$.',
        'So the sum of two dice has standard deviation $\\sqrt{35/3} \\approx 3.42$.',
      ],
      errorLines: [2],
      explanation: 'Identically distributed is not the same as identical. $2X_1$ takes only the even values $2, 4, \\dots, 12$, each with probability $\\frac{1}{6}$; $X_1 + X_2$ takes all values $2..12$ with the triangular PMF. Since the dice are independent, $\\operatorname{Var}(X_1 + X_2) = \\frac{35}{12} + \\frac{35}{12} = \\frac{35}{6}$, and the standard deviation is $\\sqrt{35/6} \\approx 2.42$, not $3.42$.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'mcq',
      prompt: 'Each option deals $100$ damage on average, built from rolls $X \\sim \\text{Uniform}\\{8, \\dots, 12\\}$ ($\\operatorname{Var} = 2$). Which has the **smallest** standard deviation of total damage?',
      options: [
        { text: 'One hit dealing $10X$', why: '$\\operatorname{Var} = 100 \\cdot 2 = 200$, $\\operatorname{SD} \\approx 14.1$. Scaling a single roll scales its spread.' },
        { text: '$10$ hits that all reuse **one** shared roll $X$ (a volley)', why: 'The hits are perfectly correlated, so the total is $10X$ again: every covariance term is as large as possible. $\\operatorname{SD} \\approx 14.1$.' },
        { text: '$5$ hits, each dealing $2X_i$ with independent rolls', why: '$\\operatorname{Var} = 5 \\cdot 4 \\cdot 2 = 40$, $\\operatorname{SD} \\approx 6.32$. Better, but each hit is still a scaled roll.' },
        { text: '$10$ hits with independent rolls $X_1 + \\cdots + X_{10}$', correct: true, why: '$\\operatorname{Var} = 10 \\cdot 2 = 20$, $\\operatorname{SD} \\approx 4.47$. The most independent pieces, each as small as possible.' },
      ],
      explanation: 'For $k$ independent hits of $\\frac{10}{k}X_i$ each, $\\operatorname{Var} = k\\left(\\frac{10}{k}\\right)^2 \\cdot 2 = \\frac{200}{k}$: more, smaller independent pieces mean less variance ($k = 1, 5, 10$ give $200, 40, 20$). Correlation undoes the benefit — the shared-roll volley has $k = 10$ hits but the variance of a single hit, because $\\operatorname{Var}(\\sum X) = \\sum\\operatorname{Var} + 2\\sum\\operatorname{Cov}$ and all its covariances are maximal.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'fill',
      prompt: 'Complete the variance of a linear combination of two random variables.',
      template: '$\\operatorname{Var}(aX + bY) = a^2\\operatorname{Var}(X) +$ ___ $+ 2ab$ ___, and when $X$ and $Y$ are independent the last term is ___.',
      blanks: [{ answers: ['$b^2\\operatorname{Var}(Y)$'] }, { answers: ['$\\operatorname{Cov}(X, Y)$'] }, { answers: ['$0$'] }],
      wordBank: ['$b^2\\operatorname{Var}(Y)$', '$b\\operatorname{Var}(Y)$', '$\\operatorname{Cov}(X, Y)$', '$\\rho$', '$0$', '$\\operatorname{Var}(X)\\operatorname{Var}(Y)$'],
      explanation: 'Expanding $\\operatorname{Cov}(aX + bY, aX + bY)$ by bilinearity gives $a^2\\operatorname{Var}(X) + b^2\\operatorname{Var}(Y) + 2ab\\operatorname{Cov}(X, Y)$. Constants come out **squared** in the variance terms (variance has squared units), and the cross term uses the covariance, not $\\rho$ (you would need $\\rho\\,\\sigma_X\\sigma_Y$). Independence makes the covariance $0$.',
    },
  ],
  takeaways: [
    '$E[aX + bY] = aE[X] + bE[Y]$ always; $\\operatorname{Var}(aX + bY) = a^2\\operatorname{Var}(X) + b^2\\operatorname{Var}(Y) + 2ab\\operatorname{Cov}(X, Y)$, or $\\mathbf{a}^T\\Sigma\\mathbf{a}$ in general.',
    'For independent terms variances add — even for differences. A sum of $n$ has SD $\\sigma\\sqrt{n}$; an average has SD $\\sigma/\\sqrt{n}$ (positive correlation sets a floor of $\\sqrt{\\rho}\\,\\sigma$).',
    'Mixing imperfectly correlated variables reduces variance: $w^* = \\frac{\\sigma_Y^2 - \\operatorname{Cov}}{\\sigma_X^2 + \\sigma_Y^2 - 2\\operatorname{Cov}}$.',
    'Independent normals sum to a normal: means add, variances add. Use it for totals, and for $P(X > Y) = P(X - Y > 0)$.',
    'The distribution of a sum of independent variables is the convolution $\\sum_x p_X(x)p_Y(s - x)$ or $\\int f_X(x)f_Y(s - x)\\,dx$: two dice or two uniforms give a triangle.',
    '$X_1 + \\cdots + X_n$ (independent) has variance $n\\sigma^2$; $nX$ has $n^2\\sigma^2$. Many small independent rolls are far more consistent than one big one.',
  ],
  reading: [
    {
      title: 'Wikipedia — Sum of normally distributed random variables',
      url: 'https://en.wikipedia.org/wiki/Sum_of_normally_distributed_random_variables',
      source: 'wikipedia',
      note: 'Three proofs that independent normals add to a normal (convolution, characteristic functions, geometry) and what changes when they are correlated.',
    },
    {
      title: 'Wikipedia — Convolution of probability distributions',
      url: 'https://en.wikipedia.org/wiki/Convolution_of_probability_distributions',
      source: 'wikipedia',
      note: 'The general convolution formulas, with a table of families that are closed under addition (normal, Poisson, gamma, binomial with equal $p$).',
    },
    {
      title: 'MIT OCW 18.05 — Introduction to Probability and Statistics',
      url: 'https://ocw.mit.edu/courses/18-05-introduction-to-probability-and-statistics-spring-2014/',
      source: 'other',
      note: 'The notes on covariance include the variance of sums and many worked problems with linear combinations.',
    },
  ],
};
