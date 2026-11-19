import type { Lesson } from '../../types';

// Session lengths: Gamma population with mean 24 and sd 10 (shape 5.76, rate 0.24).
// The mean of n draws is exactly Gamma(shape 5.76n, rate 0.24n).
const xbarGamma = 'exp((5.76n - 1)ln(x) - 0.24n*x - lgamma(5.76n) + 5.76n*ln(0.24n))';
const population = 'exp(4.76ln(x) - 0.24x - lgamma(5.76) + 5.76ln(0.24))';

// Density of p-hat drawn as a histogram: bar of width 1/n at k/n with height n*P(X = k).
const phatHist = 'n*nCr(n, floor(n*x + 0.5))*p^floor(n*x + 0.5)*(1 - p)^(n - floor(n*x + 0.5))';

export const lesson: Lesson = {
  id: 'stat-sampling-distributions',
  title: 'Sampling Distributions and Standard Error',
  summary: 'A statistic computed from a random sample is itself a random variable. Its distribution — the sampling distribution — tells you how much an estimate wobbles from sample to sample: the standard error $\\sigma/\\sqrt{n}$ for $\\bar{x}$, $\\sqrt{p(1-p)/n}$ for $\\hat{p}$, and why estimating $\\sigma$ with $s$ leads to the $t$ distribution.',
  minutes: 19,
  objectives: [
    'Explain why a statistic such as $\\bar{x}$ or $\\hat{p}$ is a random variable, and distinguish the distribution of the data from the sampling distribution of a statistic',
    'Derive $E[\\bar{X}] = \\mu$ and $\\operatorname{SD}(\\bar{X}) = \\sigma/\\sqrt{n}$, and use the normal approximation to find probabilities about $\\bar{x}$ and $\\hat{p}$',
    'Compute and interpret the standard error, and use the $\\sqrt{n}$ law to plan how much data you need',
    'Explain why replacing $\\sigma$ by $s$ gives the $t$ distribution with $n - 1$ degrees of freedom, and read $t$ critical values',
    'State the $\\chi^2$ result for $s^2$ and its normality assumption, and simulate a sampling distribution in C++',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'A statistic is a random variable',
      blocks: [
        {
          type: 'p',
          text: 'You want the average session length of everyone who plays your game — a fixed but unknown [[stat-parameter|parameter]] $\\mu$. You cannot measure every player, so you take a random sample of $n = 25$ players and compute their average $\\bar{x}$. That number is a [[stat-statistic|statistic]]: anything computed from the sample alone.',
        },
        {
          type: 'p',
          text: 'Here is the key shift in thinking. Before you draw the sample, the $25$ session lengths are random variables $X_1, \\dots, X_{25}$, so their average $\\bar{X} = \\frac{1}{n}\\sum X_i$ is a [[dm-random-variable|random variable]] too. Draw a different sample and you get a different $\\bar{x}$. (Capital $\\bar{X}$ is the random variable; lowercase $\\bar{x}$ is the number your particular sample produced.)',
        },
        {
          type: 'figure',
          svg: '<svg viewBox="0 0 500 250" xmlns="http://www.w3.org/2000/svg"><ellipse cx="70" cy="125" rx="58" ry="80" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="70" y="95" text-anchor="middle" font-size="13" font-weight="600">Population</text><text x="70" y="115" text-anchor="middle" font-size="12">all players</text><text x="70" y="140" text-anchor="middle" font-size="13" class="t-blue">μ = 24</text><text x="70" y="158" text-anchor="middle" font-size="13" class="t-blue">σ = 10</text><text x="70" y="226" text-anchor="middle" font-size="11" class="t-gray">fixed, unknown</text><text x="253" y="20" text-anchor="middle" font-size="12" font-weight="600">random samples, n = 25 each</text><g font-size="13"><path d="M128 90 L176 46" class="s-gray" stroke-width="1.3" fill="none"/><path d="M130 110 L176 96" class="s-gray" stroke-width="1.3" fill="none"/><path d="M130 140 L176 146" class="s-gray" stroke-width="1.3" fill="none"/><path d="M126 165 L176 206" class="s-gray" stroke-width="1.3" fill="none"/><rect x="178" y="30" width="150" height="32" rx="6" fill="none" stroke="currentColor" stroke-width="1.2"/><text x="188" y="51">sample 1</text><text x="318" y="51" text-anchor="end" class="t-orange">x̄ = 25.3</text><rect x="178" y="80" width="150" height="32" rx="6" fill="none" stroke="currentColor" stroke-width="1.2"/><text x="188" y="101">sample 2</text><text x="318" y="101" text-anchor="end" class="t-orange">x̄ = 22.1</text><rect x="178" y="130" width="150" height="32" rx="6" fill="none" stroke="currentColor" stroke-width="1.2"/><text x="188" y="151">sample 3</text><text x="318" y="151" text-anchor="end" class="t-orange">x̄ = 24.6</text><text x="253" y="181" text-anchor="middle" font-size="16" class="t-gray">⋮</text><rect x="178" y="190" width="150" height="32" rx="6" fill="none" stroke="currentColor" stroke-width="1.2"/><text x="188" y="211">sample k</text><text x="318" y="211" text-anchor="end" class="t-orange">x̄ = 23.4</text></g><path d="M334 126 L362 126" class="s-orange" stroke-width="1.6" fill="none"/><path d="M362 126 L355 121 M362 126 L355 131" class="s-orange" stroke-width="1.6" fill="none"/><line x1="372" y1="180" x2="492" y2="180" stroke="currentColor" stroke-width="1.2"/><g class="f-orange" fill-opacity="0.35"><rect x="380" y="172" width="12" height="8"/><rect x="392" y="160" width="12" height="20"/><rect x="404" y="140" width="12" height="40"/><rect x="416" y="112" width="12" height="68"/><rect x="428" y="100" width="12" height="80"/><rect x="440" y="114" width="12" height="66"/><rect x="452" y="138" width="12" height="42"/><rect x="464" y="160" width="12" height="20"/><rect x="476" y="171" width="12" height="9"/></g><line x1="434" y1="92" x2="434" y2="186" class="s-blue" stroke-width="1.3" stroke-dasharray="4 3"/><text x="434" y="200" text-anchor="middle" font-size="12" class="t-blue">μ = 24</text><text x="432" y="60" text-anchor="middle" font-size="12" font-weight="600">histogram of the x̄\'s</text><text x="432" y="76" text-anchor="middle" font-size="12">= sampling distribution</text><text x="432" y="222" text-anchor="middle" font-size="11" class="t-gray">spread = SE = σ/√n = 2</text></svg>',
          alt: 'A population (all players, mean 24, standard deviation 10) feeds several random samples of 25 players. Each sample gives its own x-bar: 25.3, 22.1, 24.6, 23.4. An arrow leads to a histogram of many x-bars, centered at 24, labeled the sampling distribution, with spread SE = σ/√n = 2.',
          caption: 'Imagine repeating the sampling over and over. Each sample gives its own $\\bar{x}$; the histogram of all those $\\bar{x}$ values is the **sampling distribution** of $\\bar{X}$. In practice you only ever see **one** sample — the theory tells you what the histogram would look like.',
          maxWidth: 500,
        },
        {
          type: 'definition',
          term: 'Sampling distribution',
          text: 'The [[stat-sampling-distribution|sampling distribution]] of a statistic is its probability distribution over all possible random samples of size $n$ from the population. Its standard deviation is called the [[stat-standard-error|standard error]] ($\\operatorname{SE}$) of the statistic.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why this is the foundation of inference',
          text: 'Every question of the form "how far off could my estimate be?" is a question about the sampling distribution. A playtest says the new map averages $25.3$ minutes — is that really different from the old map\'s $24$, or would a second batch of $25$ testers easily give $22.1$? You can only answer if you know how much $\\bar{X}$ varies from sample to sample. Confidence intervals and hypothesis tests (the rest of this unit and the next) are both built on this one idea.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'truefalse',
      prompt: 'You record session lengths for $n = 100$ random players. The **sampling distribution of $\\bar{X}$** is the histogram of those $100$ session lengths.',
      answer: false,
      explanation: 'The histogram of the $100$ observations shows the distribution of the **data** — individual session lengths, with spread about $\\sigma$. The sampling distribution of $\\bar{X}$ is the distribution of the **average** across many hypothetical repeated samples of $100$ players; it is centered at $\\mu$ with the much smaller spread $\\sigma/\\sqrt{100} = \\sigma/10$. Your one sample contributes a single point, $\\bar{x}$, to that distribution.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'The sampling distribution of the sample mean',
      blocks: [
        {
          type: 'p',
          text: 'Take a random sample $X_1, \\dots, X_n$: independent random variables from a population with mean $\\mu$ and variance $\\sigma^2$ (statisticians say *i.i.d.* — independent and identically distributed). Using the rules for sums of random variables, we can pin down the center and spread of $\\bar{X}$ without knowing the population\'s shape.',
        },
        {
          type: 'derivation',
          title: 'Mean and variance of $\\bar{X}$',
          steps: [
            { tex: 'E[\\bar{X}] = E\\left[\\frac{1}{n}\\sum_{i=1}^{n} X_i\\right] = \\frac{1}{n}\\sum_{i=1}^{n} E[X_i]', why: 'Linearity of [[dm-expected-value|expectation]]: constants come out, and the expectation of a sum is the sum of expectations.' },
            { tex: '= \\frac{1}{n} \\cdot n\\mu = \\mu', why: 'Every $X_i$ comes from the same population, so $E[X_i] = \\mu$.' },
            { tex: '\\operatorname{Var}(\\bar{X}) = \\frac{1}{n^2}\\operatorname{Var}\\left(\\sum_{i=1}^{n} X_i\\right)', why: '$\\operatorname{Var}(aY) = a^2\\operatorname{Var}(Y)$ with $a = 1/n$ — the constant comes out **squared**.' },
            { tex: '= \\frac{1}{n^2} \\cdot n\\sigma^2 = \\frac{\\sigma^2}{n}', why: 'For **independent** variables, variances add: $n$ copies of $\\sigma^2$. This is where independence is used.' },
            { tex: '\\operatorname{SD}(\\bar{X}) = \\frac{\\sigma}{\\sqrt{n}}', why: 'Take the square root to get back to the original units (minutes).' },
          ],
          result: 'The sample mean is centered on the truth, and its spread shrinks like $1/\\sqrt{n}$. For the shape: if the population is normal, $\\bar{X}$ is exactly normal; otherwise the central limit theorem makes it approximately $N(\\mu, \\sigma^2/n)$ once $n$ is moderately large.',
        },
        {
          type: 'p',
          text: 'Session lengths are right-skewed — most sessions are short, a few run very long. The gray curve below is such a population with $\\mu = 24$ and $\\sigma = 10$ minutes. The blue curve is the **exact** density of $\\bar{X}$ for samples of size $n$, and the dashed red curve is the normal approximation $N(24, 10^2/n)$. Slide $n$ upward.',
        },
        {
          type: 'graph',
          x: [0, 56],
          y: [0, 0.42],
          xStep: 4,
          yStep: 0.1,
          height: 300,
          functions: [
            { expr: population, color: 'gray', label: 'population (one session)', domain: [0.01, 56] },
            { expr: xbarGamma, color: 'blue', label: 'exact density of $\\bar{X}$', domain: [0.01, 56] },
            { expr: 'normpdf((x - 24)/(10/sqrt(n)))/(10/sqrt(n))', color: 'red', dashed: true, label: 'normal approx. $N(24, 100/n)$' },
          ],
          vlines: [{ x: 24, label: 'μ = 24', color: 'gray' }],
          sliders: [{ name: 'n', min: 1, max: 100, step: 1, value: 4, label: 'sample size $n$' }],
          readouts: [
            { label: '$\\operatorname{SE} = 10/\\sqrt{n} =$', expr: '10/sqrt(n)', digits: 3 },
            { label: '$P(|\\bar{X} - 24| < 2) \\approx 2\\Phi(2/\\operatorname{SE}) - 1 =$', expr: '2normcdf(2sqrt(n)/10) - 1', digits: 4 },
          ],
          caption: 'At $n = 1$ the blue curve **is** the skewed population. By $n = 25$ the exact curve and the normal approximation nearly coincide, centered at $\\mu = 24$ with $\\operatorname{SE} = 2$. Quadrupling $n$ to $100$ halves the width again. The population never changes — only the distribution of the average does.',
        },
        {
          type: 'derivation',
          title: 'How close will a sample of $25$ get?',
          steps: [
            { tex: '\\bar{X} \\approx N\\left(24, \\left(\\tfrac{10}{\\sqrt{25}}\\right)^2\\right) = N(24, 2^2)', why: 'Center $\\mu = 24$, standard error $\\sigma/\\sqrt{n} = 10/5 = 2$, approximately normal by the CLT.' },
            { tex: 'P(22 < \\bar{X} < 26) = P\\left(\\frac{22 - 24}{2} < Z < \\frac{26 - 24}{2}\\right)', why: 'Standardize: subtract the mean of $\\bar{X}$ and divide by **its** standard deviation, the SE — not by $\\sigma$.' },
            { tex: '= \\Phi(1) - \\Phi(-1) = 2\\Phi(1) - 1 \\approx 0.6827', why: 'By symmetry $\\Phi(-1) = 1 - \\Phi(1)$, and $\\Phi(1) \\approx 0.84134$.' },
          ],
          result: 'About $68\\%$ of playtests with $25$ players land within $2$ minutes of the true mean; with $n = 100$ (SE $= 1$) it is $P(|Z| < 2) \\approx 95\\%$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'numeric',
      prompt: 'Session lengths have $\\mu = 24$ and $\\sigma = 10$ minutes. For a random sample of $n = 25$ players, find $P(\\bar{X} > 27)$ using the normal approximation. Give $4$ decimals. (Use $\\Phi(1.5) = 0.9332$.)',
      hint: 'Standardize with the standard error $10/\\sqrt{25}$, not with $\\sigma$.',
      label: '$P(\\bar{X} > 27) \\approx$',
      answer: '1 - normcdf(1.5)',
      answerTex: '0.0668',
      tolerance: 0.0001,
      explanation: '$\\operatorname{SE} = 10/\\sqrt{25} = 2$, so $z = \\frac{27 - 24}{2} = 1.5$ and $P(\\bar{X} > 27) = 1 - \\Phi(1.5) \\approx 1 - 0.9332 = 0.0668$. A **single** session longer than $27$ minutes is common (only $0.3$ standard deviations above the mean; about a third of sessions are that long), but an **average** of $25$ sessions that high is rare: averaging cancels out much of the individual variation. Dividing by $\\sigma = 10$ instead of the SE is the classic slip — it gives $1 - \\Phi(0.3) \\approx 0.38$.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Standard error and the square-root law',
      blocks: [
        {
          type: 'definition',
          term: 'Standard error of the mean',
          text: '$\\operatorname{SE}(\\bar{X}) = \\dfrac{\\sigma}{\\sqrt{n}}$. Since $\\sigma$ is usually unknown, in practice you report the **estimated** standard error $\\dfrac{s}{\\sqrt{n}}$, where $s$ is the sample standard deviation (with divisor $n - 1$).',
        },
        {
          type: 'p',
          text: 'Keep the two spreads apart. The standard deviation $s$ describes how much **individual players** differ from one another; it does not shrink as you collect more data. The standard error describes how much your **estimate** would move if you repeated the study; it shrinks with $n$. A report of "mean $24.1$ min, SD $10.2$" describes players. "Mean $24.1$ min, SE $1.0$" describes your precision.',
        },
        {
          type: 'graph',
          x: [0, 400],
          y: [0, 6],
          xStep: 50,
          yStep: 1,
          height: 250,
          functions: [{ expr: 's/sqrt(x)', color: 'blue', label: '$\\operatorname{SE} = \\sigma/\\sqrt{n}$', domain: [1, 400] }],
          points: [
            { x: 'n', y: 's/sqrt(n)', color: 'orange', label: 'n' },
            { x: '4n', y: 's/(2sqrt(n))', color: 'green', label: '4n: half the SE' },
          ],
          sliders: [
            { name: 's', min: 2, max: 30, step: 1, value: 10, label: 'population SD $\\sigma$' },
            { name: 'n', min: 4, max: 100, step: 1, value: 25, label: 'sample size $n$' },
          ],
          readouts: [
            { label: 'SE at $n$:', expr: 's/sqrt(n)', digits: 3 },
            { label: 'SE at $4n$:', expr: 's/sqrt(4n)', digits: 3 },
          ],
          caption: 'The curve falls steeply at first and then flattens: the first few dozen players buy a lot of precision, later ones much less. The green point is always at half the height of the orange one but **four times** as far right.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why precision costs a square',
          text: 'Errors in individual observations partly cancel when you average them, but only partly: the variance of the sum grows like $n$, so its standard deviation grows like $\\sqrt{n}$, and dividing by $n$ leaves $\\sqrt{n}/n = 1/\\sqrt{n}$. To cut the SE by a factor of $k$ you need $k^2$ times the data. That is why a telemetry dashboard with a million sessions has tiny error bars, and why one more decimal place of precision costs $100$ times the players.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Error bars in a telemetry dashboard',
          text: 'When your analytics pipeline aggregates a metric per build, store three running numbers per group — $n$, $\\sum x$ and $\\sum x^2$ — so you can report the mean **and** its standard error $s/\\sqrt{n}$. A "regression" in average frame time between two builds means little until you compare it with the SEs: a $0.2$ ms change with SE $0.5$ ms is noise.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'numeric',
      prompt: 'Match lengths have standard deviation $\\sigma = 8$ minutes. What is the **smallest** number of matches you must sample so that the standard error of the mean match length is at most $0.5$ minutes?',
      hint: 'Solve $8/\\sqrt{n} \\le 0.5$ for $n$.',
      label: '$n =$',
      answer: '256',
      explanation: '$\\frac{8}{\\sqrt{n}} \\le 0.5 \\iff \\sqrt{n} \\ge 16 \\iff n \\ge 256$. Check: $8/\\sqrt{256} = 8/16 = 0.5$. Notice the square: halving the target SE to $0.25$ would need $n = 1024$, four times as many matches.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'The sampling distribution of a sample proportion',
      blocks: [
        {
          type: 'p',
          text: 'Many game metrics are proportions: win rate, day-1 retention, the fraction of players who finish the tutorial. If each of $n$ independent matches is a win with probability $p$, the number of wins is $X \\sim \\text{Bin}(n, p)$ (see [[dm-binomial-distribution|the binomial distribution]]), and the sample proportion is $\\hat{p} = X/n$. It is just a sample mean of $0$/$1$ indicators, so everything above applies.',
        },
        {
          type: 'derivation',
          title: 'Center and spread of $\\hat{p}$',
          steps: [
            { tex: 'E[\\hat{p}] = \\frac{E[X]}{n} = \\frac{np}{n} = p', why: 'The binomial mean is $np$; dividing by the constant $n$ divides the mean by $n$.' },
            { tex: '\\operatorname{Var}(\\hat{p}) = \\frac{\\operatorname{Var}(X)}{n^2} = \\frac{np(1-p)}{n^2} = \\frac{p(1-p)}{n}', why: 'The binomial variance is $np(1-p)$; the constant $1/n$ comes out squared.' },
            { tex: '\\operatorname{SE}(\\hat{p}) = \\sqrt{\\frac{p(1-p)}{n}}', why: 'Square root. Here $\\sigma = \\sqrt{p(1-p)}$ is the SD of a single $0$/$1$ outcome, so this is $\\sigma/\\sqrt{n}$ again.' },
          ],
          result: 'By the CLT, $\\hat{p}$ is approximately $N\\left(p, \\frac{p(1-p)}{n}\\right)$ when the expected counts of both outcomes are reasonably large. A common rule: $np \\ge 10$ and $n(1-p) \\ge 10$.',
        },
        {
          type: 'graph',
          x: [-0.1, 1],
          y: [0, 12],
          xStep: 0.1,
          yStep: 2,
          height: 280,
          functions: [
            { expr: phatHist, color: 'blue', label: 'exact distribution of $\\hat{p}$ (as a histogram)', domain: ['-0.5/n', '1 + 0.5/n'] },
            { expr: 'normpdf((x - p)/sqrt(p(1 - p)/n))/sqrt(p(1 - p)/n)', color: 'red', dashed: true, label: 'normal approx.' },
          ],
          vlines: [{ x: 'p', label: 'p', color: 'gray' }],
          sliders: [
            { name: 'n', min: 5, max: 200, step: 5, value: 20, label: 'number of matches $n$' },
            { name: 'p', min: 0.02, max: 0.98, step: 0.01, value: 0.1, label: 'true win rate $p$' },
          ],
          readouts: [
            { label: '$np =$', expr: 'n*p', digits: 1 },
            { label: '$n(1-p) =$', expr: 'n*(1 - p)', digits: 1 },
            { label: '$\\operatorname{SE}(\\hat{p}) =$', expr: 'sqrt(p(1 - p)/n)', digits: 4 },
          ],
          caption: 'Each bar sits at a possible value $k/n$ with area $P(X = k)$. With $n = 20$ and $p = 0.1$ ($np = 2$) the distribution is lumpy and skewed and the normal curve even puts probability below $0$. Raise $n$ until $np \\ge 10$ and the bars hug the bell curve. Try $p = 0.5$: symmetric, and the approximation is good much sooner.',
        },
        {
          type: 'derivation',
          title: 'Can a strong hero look weak?',
          steps: [
            { tex: 'p = 0.52,\\ n = 400: \\quad \\operatorname{SE} = \\sqrt{\\frac{0.52 \\cdot 0.48}{400}} \\approx 0.0250', why: 'A hero with a true $52\\%$ win rate, judged on its last $400$ matches. $np = 208$ and $n(1-p) = 192$, so the normal approximation is fine.' },
            { tex: 'P(\\hat{p} < 0.50) \\approx \\Phi\\left(\\frac{0.50 - 0.52}{0.0250}\\right) = \\Phi(-0.80) \\approx 0.21', why: 'Standardize with the SE of $\\hat{p}$. (The exact binomial answer, $P(X \\le 199)$, is $0.197$ — close.)' },
          ],
          result: 'About one time in five, $400$ matches make a genuinely above-average hero look **below** $50\\%$. Balance decisions made from small samples chase noise.',
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'mcq',
      prompt: 'For which situation is the normal approximation to the sampling distribution of $\\hat{p}$ **not** reasonable?',
      options: [
        { text: '$n = 400$ matches, $p = 0.52$', why: '$np = 208$ and $n(1-p) = 192$, both far above $10$. The approximation is excellent.' },
        { text: '$n = 50$ players, $p = 0.5$', why: '$np = n(1-p) = 25$, and $p = 0.5$ makes the binomial symmetric, so the approximation works well even for modest $n$.' },
        { text: '$n = 200$ loot boxes, $p = 0.01$ legendary rate', correct: true, why: '$np = 2$: you expect only two legendaries, so $\\hat{p}$ takes just a few values ($0$, $0.005$, $0.01$, …) with a strongly right-skewed distribution. The normal curve would even give $\\hat{p} < 0$ noticeable probability.' },
        { text: '$n = 1000$ sessions, $p = 0.03$ crash rate', why: '$np = 30$ and $n(1-p) = 970$: both at least $10$, so the skew from the small $p$ has been tamed by the large $n$.' },
      ],
      explanation: 'The condition is about **expected counts**, not about $n$ alone: you need roughly $np \\ge 10$ and $n(1-p) \\ge 10$. Rare events (drop rates, crash rates) need large samples before $\\hat{p}$ looks normal: with $p = 0.01$ you need about $n = 1000$. For small expected counts use the exact binomial (or Poisson) distribution instead.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'concept',
      title: 'Estimating σ with s: the t distribution',
      blocks: [
        {
          type: 'p',
          text: 'To use $Z = \\dfrac{\\bar{X} - \\mu}{\\sigma/\\sqrt{n}} \\sim N(0, 1)$ you need $\\sigma$, and you almost never know it. The natural fix is to plug in the sample standard deviation $s$. But $S$ is itself a random variable: in some samples it comes out too small, and then the ratio is blown up. So the plugged-in statistic',
        },
        {
          type: 'math',
          tex: 'T = \\frac{\\bar{X} - \\mu}{S/\\sqrt{n}}',
        },
        {
          type: 'p',
          text: 'has **heavier tails** than $Z$: extreme values are more likely, because both the numerator and the denominator wobble. If the population is normal, its distribution is known exactly.',
        },
        {
          type: 'theorem',
          name: 'Student\'s t distribution',
          tex: 'f_T(x) = \\frac{\\Gamma\\left(\\frac{k+1}{2}\\right)}{\\sqrt{k\\pi}\\,\\Gamma\\left(\\frac{k}{2}\\right)}\\left(1 + \\frac{x^2}{k}\\right)^{-\\frac{k+1}{2}}',
          text: 'If $X_1, \\dots, X_n$ are i.i.d. $N(\\mu, \\sigma^2)$, then $T = \\frac{\\bar{X} - \\mu}{S/\\sqrt{n}}$ has the [[stat-t-distribution|$t$ distribution]] with $k = n - 1$ [[stat-degrees-of-freedom|degrees of freedom]], written $t_{n-1}$. Here $\\Gamma$ is the gamma function, $\\Gamma(a) = \\int_0^\\infty u^{a-1}e^{-u}\\,du$ (an [[improper-integral]] that extends the factorial: $\\Gamma(m) = (m-1)!$).',
        },
        {
          type: 'graph',
          x: [-5, 5],
          y: [0, 0.45],
          xStep: 1,
          yStep: 0.1,
          height: 270,
          functions: [
            { expr: 'normpdf(x)', color: 'gray', dashed: true, label: 'standard normal' },
            { expr: 'gamma((k+1)/2)/(sqrt(k*pi)*gamma(k/2))*(1 + x^2/k)^(-(k+1)/2)', color: 'blue', label: '$t$ with $k$ degrees of freedom' },
          ],
          areas: [
            { expr: 'gamma((k+1)/2)/(sqrt(k*pi)*gamma(k/2))*(1 + x^2/k)^(-(k+1)/2)', from: 1.96, to: 5, color: 'blue' },
            { expr: 'gamma((k+1)/2)/(sqrt(k*pi)*gamma(k/2))*(1 + x^2/k)^(-(k+1)/2)', from: -5, to: -1.96, color: 'blue' },
          ],
          sliders: [{ name: 'k', min: 1, max: 60, step: 1, value: 3, label: 'degrees of freedom $k$' }],
          readouts: [
            { label: 'peak height $f_T(0) =$', expr: 'gamma((k+1)/2)/(sqrt(k*pi)*gamma(k/2))', digits: 4 },
            { label: 'normal peak $\\varphi(0) =$', expr: 'normpdf(0)', digits: 4 },
          ],
          caption: 'With few degrees of freedom the $t$ curve is lower in the middle and much fatter in the tails, so more than $5\\%$ of its area lies beyond $\\pm 1.96$ (shaded): about $14.5\\%$ at $k = 3$. As $k$ grows the curve merges with the normal — by $k = 30$ they are hard to tell apart.',
        },
        {
          type: 'table',
          headers: ['df $k$', '$1$', '$4$', '$9$', '$14$', '$19$', '$29$', '$60$', '$\\infty$ ($z$)'],
          rows: [
            ['$t_{0.05,\\,k}$', '$6.314$', '$2.132$', '$1.833$', '$1.761$', '$1.729$', '$1.699$', '$1.671$', '$1.645$'],
            ['$t_{0.025,\\,k}$', '$12.706$', '$2.776$', '$2.262$', '$2.145$', '$2.093$', '$2.045$', '$2.000$', '$1.960$'],
            ['$t_{0.005,\\,k}$', '$63.657$', '$4.604$', '$3.250$', '$2.977$', '$2.861$', '$2.756$', '$2.660$', '$2.576$'],
          ],
          caption: 'Upper critical values: $t_{\\alpha,\\,k}$ has area $\\alpha$ to its right under $t_k$. With $9$ degrees of freedom ($n = 10$), the middle $95\\%$ runs out to $\\pm 2.262$ instead of $\\pm 1.96$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why $n - 1$ degrees of freedom?',
          text: '$S^2$ is built from the deviations $X_i - \\bar{X}$, and these always sum to zero: $\\sum (X_i - \\bar{X}) = \\sum X_i - n\\bar{X} = 0$. Once you know $n - 1$ of them, the last one is forced. So $S^2$ carries only $n - 1$ independent pieces of information about the spread, and the less information, the more $S$ wobbles and the heavier the tails of $T$.',
        },
        {
          type: 'callout',
          variant: 'history',
          title: 'Student was a brewer',
          text: 'William Sealy Gosset worked on quality control at the Guinness brewery in Dublin, where experiments on barley and yeast had tiny samples. He found that using $s$ in place of $\\sigma$ made the normal tables wrong for small $n$, worked out the correct distribution, and published it in 1908 under the pen name "Student" because Guinness did not want competitors to know it was using statistics.',
        },
      ],
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'numeric',
      prompt: 'A new build is benchmarked on $n = 16$ test levels. The average frame time is $\\bar{x} = 17.3$ ms with sample standard deviation $s = 1.6$ ms. If the true mean frame time were $\\mu = 16.7$ ms, what value of the statistic $T = \\dfrac{\\bar{x} - \\mu}{s/\\sqrt{n}}$ would this sample give? Give $2$ decimals.',
      hint: 'First compute the estimated standard error $s/\\sqrt{n}$.',
      label: '$T =$',
      answer: '(17.3 - 16.7)/(1.6/sqrt(16))',
      answerTex: '1.50',
      tolerance: 0.005,
      explanation: 'Estimated SE $= 1.6/\\sqrt{16} = 0.4$ ms, so $T = \\frac{17.3 - 16.7}{0.4} = \\frac{0.6}{0.4} = 1.5$: the sample mean sits $1.5$ estimated standard errors above $16.7$. If the frame times are roughly normal, $T$ is compared with the $t_{15}$ distribution, not $N(0, 1)$. The difference matters in the tail: $P(T_{15} > 1.5) \\approx 0.077$ while $P(Z > 1.5) \\approx 0.067$.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'The chi-square distribution and the sample variance',
      blocks: [
        {
          type: 'p',
          text: 'The [[stat-sample-variance|sample variance]] $S^2 = \\frac{1}{n-1}\\sum (X_i - \\bar{X})^2$ has a sampling distribution too. For a **normal** population it is a rescaled version of a new family of densities.',
        },
        {
          type: 'definition',
          term: 'Chi-square distribution',
          text: 'If $Z_1, \\dots, Z_k$ are independent $N(0, 1)$, then $Z_1^2 + \\cdots + Z_k^2$ has the [[stat-chi-square-distribution|chi-square distribution]] with $k$ degrees of freedom, $\\chi^2_k$. Its density is $f(x) = \\dfrac{x^{k/2 - 1}e^{-x/2}}{2^{k/2}\\,\\Gamma(k/2)}$ for $x > 0$, with mean $k$ and variance $2k$.',
        },
        {
          type: 'theorem',
          name: 'Sampling distribution of $S^2$ (normal population)',
          tex: '\\frac{(n-1)S^2}{\\sigma^2} \\sim \\chi^2_{n-1}, \\quad \\text{independent of } \\bar{X}',
          text: 'The $n - 1$ is the same degrees-of-freedom count as before: the $n$ squared deviations carry only $n - 1$ free pieces of information. The independence of $\\bar{X}$ and $S^2$ is special to normal populations, and it is exactly what makes $T$ have a clean $t$ distribution.',
        },
        {
          type: 'graph',
          x: [0, 50],
          y: [0, 0.3],
          xStep: 5,
          yStep: 0.05,
          height: 250,
          functions: [{ expr: 'x^(k/2 - 1)*exp(-x/2)/(2^(k/2)*gamma(k/2))', color: 'purple', label: '$\\chi^2_k$ density', domain: [0.05, 50] }],
          vlines: [{ x: 'k', label: 'mean k', color: 'gray' }],
          sliders: [{ name: 'k', min: 1, max: 30, step: 1, value: 9, label: 'degrees of freedom $k$' }],
          readouts: [{ label: 'SD $= \\sqrt{2k} =$', expr: 'sqrt(2k)', digits: 3 }],
          caption: 'Chi-square densities live on $x > 0$ and are right-skewed; the skew fades as $k$ grows (it is a sum of $k$ independent pieces, so the CLT kicks in). At $k = 1$ the density shoots up at $0$, because a single $Z^2$ is usually small.',
        },
        {
          type: 'derivation',
          title: 'How noisy is a variance estimate?',
          steps: [
            { tex: 'E[S^2] = \\frac{\\sigma^2}{n-1}E[\\chi^2_{n-1}] = \\frac{\\sigma^2}{n-1}(n-1) = \\sigma^2', why: 'Solve the theorem for $S^2 = \\frac{\\sigma^2}{n-1}\\chi^2_{n-1}$ and use the chi-square mean $k = n - 1$. ($S^2$ is centered on $\\sigma^2$ — the next lesson proves this for **any** population.)' },
            { tex: '\\operatorname{Var}(S^2) = \\frac{\\sigma^4}{(n-1)^2}\\cdot 2(n-1) = \\frac{2\\sigma^4}{n-1}', why: 'Chi-square variance $2k$; the constant $\\frac{\\sigma^2}{n-1}$ comes out squared.' },
            { tex: 'n = 10,\\ \\sigma^2 = 4: \\quad \\operatorname{SD}(S^2) = \\sqrt{2 \\cdot 16/9} \\approx 1.89', why: 'Frame-time variance $4\\text{ ms}^2$ measured from $10$ runs: the estimate typically misses by almost half of its true value.' },
            { tex: 'P\\left(2.700 < \\chi^2_9 < 19.023\\right) = 0.95 \\implies 1.20 < S^2 < 8.45 \\text{ in } 95\\% \\text{ of samples}', why: 'Multiply the chi-square quantiles by $\\sigma^2/(n-1) = 4/9$.' },
          ],
          result: 'Variances are much harder to estimate than means: with $10$ runs, a true variance of $4$ can easily show up as $1.5$ or $7$. Judge "consistency" metrics such as frame-time jitter only from large samples.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'This one really needs normality',
          text: 'The $t$ procedures are fairly robust to non-normal data because the CLT rescues $\\bar{X}$. The $\\chi^2$ result for $S^2$ has no such rescue: for heavy-tailed data (frame-time spikes, latency outliers) the true spread of $S^2$ can be several times what the formula says, however large $n$ is. Use it only when the data really look normal — or use the [[stat-bootstrap|bootstrap]] (a later unit).',
        },
      ],
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'truefalse',
      prompt: 'Because of the central limit theorem, $\\frac{(n-1)S^2}{\\sigma^2} \\sim \\chi^2_{n-1}$ holds approximately for **any** population once $n$ is large.',
      answer: false,
      explanation: 'The CLT is about **averages**, and it does make $\\bar{X}$ approximately normal. But the $\\chi^2$ result depends on the population\'s tails: the variance of $S^2$ involves the fourth moment $E[(X - \\mu)^4]$, which for a normal population equals $3\\sigma^4$ and gives $\\operatorname{Var}(S^2) = 2\\sigma^4/(n-1)$. Heavy-tailed data have a larger fourth moment, so $S^2$ varies more than the $\\chi^2$ formula says, and that error does **not** go away as $n$ grows. Inference about variances needs normal data (or resampling methods).',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'concept',
      title: 'Simulating a sampling distribution in C++',
      blocks: [
        {
          type: 'p',
          text: 'Theory says what $\\bar{X}$ does "over all possible samples". A computer can literally draw those samples. The program below draws $100{,}000$ samples of session lengths from a strongly skewed [[stat-exponential-distribution|exponential]] population with mean $20$ minutes (rate $\\lambda = 1/20$; in this course $\\text{Exp}(\\lambda)$ always means rate $\\lambda$, mean $1/\\lambda$, and here $\\sigma = 20$ too). For each sample it computes $\\bar{x}$, $s$ and $T$, then checks two things: does the spread of the $\\bar{x}$ values match $\\sigma/\\sqrt{n}$, and does $|T|$ exceed the $t$ critical value $5\\%$ of the time, as it would for normal data?',
        },
        {
          type: 'code',
          title: 'sampling_distribution.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdio>
#include <random>

std::mt19937_64 rng(2024);
double uniform01() { return (rng() >> 11) * 0x1.0p-53; }      // uniform in [0, 1)

// Session length in minutes: exponential with rate 1/20 (mean 20, sd 20).
double session() { return -20.0 * std::log(1.0 - uniform01()); }

int main() {
    const double mu = 20, sigma = 20;
    const int reps = 100'000;
    struct Case { int n; double tcrit; };                      // t_{0.025, n-1}
    std::printf("  n  mean(xbar)  sd(xbar)  sigma/sqrt(n)  P(|T| > t crit)\\n");
    for (Case c : {Case{5, 2.776}, Case{30, 2.045}, Case{100, 1.984}}) {
        double sum = 0, sumSq = 0;
        int rejections = 0;
        for (int r = 0; r < reps; ++r) {
            double s1 = 0, s2 = 0;
            for (int i = 0; i < c.n; ++i) {
                double x = session();
                s1 += x;
                s2 += x * x;
            }
            double xbar = s1 / c.n;
            double s = std::sqrt((s2 - c.n * xbar * xbar) / (c.n - 1));   // sample sd
            double T = (xbar - mu) / (s / std::sqrt(c.n));
            if (std::fabs(T) > c.tcrit) ++rejections;
            sum += xbar;
            sumSq += xbar * xbar;
        }
        double m = sum / reps;
        double sd = std::sqrt(sumSq / reps - m * m);
        std::printf("%3d  %9.3f  %8.3f  %13.3f  %15.4f\\n",
                    c.n, m, sd, sigma / std::sqrt(c.n), double(rejections) / reps);
    }
}`,
          output: `  n  mean(xbar)  sd(xbar)  sigma/sqrt(n)  P(|T| > t crit)
  5     19.996     8.910          8.944           0.1155
 30     19.999     3.657          3.651           0.0735
100     19.996     1.997          2.000           0.0577`,
          annotations: [
            { lines: 6, text: 'The top $53$ bits of a 64-bit random number, scaled by $2^{-53}$: a uniform double in $[0, 1)$, identical on every compiler (unlike `std::uniform_real_distribution`).' },
            { lines: 9, text: '[[stat-inverse-transform-sampling|Inverse-transform sampling]]: if $U$ is uniform, $-\\frac{1}{\\lambda}\\ln(1 - U)$ is $\\text{Exp}(\\lambda)$, because solving $F(x) = 1 - e^{-\\lambda x} = u$ gives $x = -\\ln(1-u)/\\lambda$.' },
            { lines: '20-28', text: 'One simulated playtest: accumulate $\\sum x$ and $\\sum x^2$, then $s^2 = \\frac{\\sum x^2 - n\\bar{x}^2}{n - 1}$ and the $t$ statistic.' },
            { lines: '33-34', text: 'The mean and SD of the $100{,}000$ simulated $\\bar{x}$ values: an empirical picture of the sampling distribution.' },
          ],
        },
        {
          type: 'p',
          text: 'Read the output column by column. The average of the $\\bar{x}$ values is $20$ for every $n$: $\\bar{X}$ is centered on $\\mu$ even for a skewed population. Their SD matches $\\sigma/\\sqrt{n}$ to within simulation noise — the formula needs only independence, not normality. But the last column shows where the $t$ theory breaks: with $n = 5$ skewed observations, $|T|$ exceeds the $t$ critical value $11.6\\%$ of the time instead of $5\\%$. By $n = 100$ the CLT has nearly fixed it ($5.8\\%$).',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Simulate before you trust',
          text: 'When you are unsure whether a formula applies to your data — skewed purchase amounts, heavy-tailed latencies, tiny playtests — simulate from a population that looks like your data and check the method\'s behavior, exactly as above. It takes twenty lines and a second of CPU, and it catches real mistakes.',
        },
      ],
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'error',
      prompt: 'A student computes how likely a sample of $36$ players is to have an average level above $21$, when levels have $\\mu = 20$ and $\\sigma = 12$. Tap the first wrong line.',
      lines: [
        '$\\bar{X}$ is approximately normal with mean $\\mu = 20$, by the CLT ($n = 36$).',
        'The standard error is $\\operatorname{SE} = \\sigma/n = 12/36 \\approx 0.333$.',
        '$z = \\frac{21 - 20}{0.333} = 3.0$.',
        '$P(\\bar{X} > 21) \\approx 1 - \\Phi(3.0) \\approx 0.0013$.',
      ],
      errorLines: [2],
      explanation: 'The standard error is $\\sigma/\\sqrt{n}$, not $\\sigma/n$: variances add to $n\\sigma^2$, so the SD of the sum is $\\sqrt{n}\\,\\sigma$, and dividing by $n$ gives $\\sigma/\\sqrt{n}$. Correctly, $\\operatorname{SE} = 12/6 = 2$, $z = \\frac{21 - 20}{2} = 0.5$ and $P(\\bar{X} > 21) \\approx 1 - \\Phi(0.5) \\approx 0.31$ — not rare at all. Dividing by $n$ makes estimates look far more precise than they are.',
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'fill',
      prompt: 'Complete the summary of this lesson\'s sampling distributions.',
      template: 'The standard error of $\\bar{X}$ is ___, and the standard error of $\\hat{p}$ is ___. Replacing $\\sigma$ by $s$ turns $Z$ into $T$, which has the $t$ distribution with ___ degrees of freedom when the population is normal.',
      blanks: [
        { answers: ['$\\sigma/\\sqrt{n}$'] },
        { answers: ['$\\sqrt{p(1-p)/n}$'] },
        { answers: ['$n - 1$'] },
      ],
      wordBank: ['$\\sigma/\\sqrt{n}$', '$\\sqrt{p(1-p)/n}$', '$n - 1$', '$\\sigma/n$', '$p(1-p)/n$', '$n$'],
      explanation: '$\\operatorname{SE}(\\bar{X}) = \\sigma/\\sqrt{n}$ because the variance of the mean is $\\sigma^2/n$. For a proportion, a single $0$/$1$ outcome has variance $p(1-p)$, so $\\operatorname{SE}(\\hat{p}) = \\sqrt{p(1-p)/n}$ — the same formula in disguise ($p(1-p)/n$ without the root is the **variance**). And $T = \\frac{\\bar{X} - \\mu}{S/\\sqrt{n}}$ has $n - 1$ degrees of freedom because the deviations from $\\bar{X}$ sum to zero, leaving $n - 1$ free pieces of information in $S$.',
    },
  ],
  takeaways: [
    'A statistic is a random variable; its **sampling distribution** describes how it varies over repeated random samples. You see one draw from it.',
    '$E[\\bar{X}] = \\mu$ and $\\operatorname{SE}(\\bar{X}) = \\sigma/\\sqrt{n}$ for any population (independence needed); the shape is normal for normal data and approximately normal for large $n$ by the CLT.',
    '$\\hat{p}$ has mean $p$ and $\\operatorname{SE} = \\sqrt{p(1-p)/n}$; it is approximately normal when $np \\ge 10$ and $n(1-p) \\ge 10$.',
    'SD describes individuals; SE describes the precision of an estimate. Halving the SE costs four times the data.',
    'With $s$ in place of $\\sigma$, $T = \\frac{\\bar{X} - \\mu}{S/\\sqrt{n}} \\sim t_{n-1}$ for normal data: heavier tails, approaching $N(0, 1)$ as the degrees of freedom grow.',
    'For normal data $(n-1)S^2/\\sigma^2 \\sim \\chi^2_{n-1}$, so $\\operatorname{Var}(S^2) = 2\\sigma^4/(n-1)$ — variances are noisy to estimate, and this result is not robust to non-normal tails.',
  ],
  reading: [
    {
      title: 'OpenStax — Introductory Statistics',
      url: 'https://openstax.org/details/books/introductory-statistics',
      source: 'openstax',
      note: 'The chapter on the central limit theorem covers the sampling distribution of the mean and of sums with many worked examples.',
    },
    {
      title: 'Seeing Theory (Brown University)',
      url: 'https://seeing-theory.brown.edu/',
      source: 'other',
      note: 'The "Frequentist Inference" chapter animates repeated sampling so you can watch a sampling distribution build up.',
    },
    {
      title: 'Wikipedia — Student\'s t-distribution',
      url: 'https://en.wikipedia.org/wiki/Student%27s_t-distribution',
      source: 'wikipedia',
      note: 'The density, its derivation as $Z/\\sqrt{V/k}$, a table of critical values, and the story of Gosset at Guinness.',
    },
    {
      title: 'Wikipedia — Standard error',
      url: 'https://en.wikipedia.org/wiki/Standard_error',
      source: 'wikipedia',
      note: 'Standard error versus standard deviation, and the standard errors of common statistics.',
    },
  ],
};
