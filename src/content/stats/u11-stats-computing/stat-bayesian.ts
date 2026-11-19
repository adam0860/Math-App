import type { Lesson } from '../../types';

// Beta(a, b) density written with the gamma function, for graph expressions.
const betaPdf = (a: string, b: string) => `gamma((${a}) + (${b}))/(gamma(${a})*gamma(${b}))*x^((${a}) - 1)*(1 - x)^((${b}) - 1)`;
// Same density through lgamma, for parameters whose gamma values would overflow (a + b > 170).
const betaPdfLog = (a: string, b: string) => `exp(lgamma((${a}) + (${b})) - lgamma(${a}) - lgamma(${b}) + ((${a}) - 1)*ln(x) + ((${b}) - 1)*ln(1 - x))`;

export const lesson: Lesson = {
  id: 'stat-bayesian',
  title: 'Bayesian Inference',
  summary: 'Treat an unknown rate as a random quantity: prior times likelihood gives the posterior. The Beta–Binomial model for drop rates and win rates, posterior means and credible intervals versus confidence intervals, the Gamma–Poisson model for crash rates, Bayesian A/B tests, and a first look at Thompson sampling for multi-armed bandits.',
  minutes: 22,
  objectives: [
    'Compute a posterior density from a prior and a likelihood with Bayes\' rule for densities, including the normalizing integral',
    'Update a Beta prior with binomial data, interpret the parameters as pseudo-counts, and compute posterior means and variances',
    'Contrast a credible interval with a confidence interval, and explain how the posterior mean shrinks the raw rate toward the prior',
    'Use the Gamma–Poisson conjugate pair for event rates such as crashes per day',
    'Estimate $P(\\theta_B > \\theta_A \\mid \\text{data})$ in a Bayesian A/B test by simulation, and describe how Thompson sampling uses posteriors to balance exploration and exploitation',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'From Bayes\' theorem to Bayesian inference',
      blocks: [
        {
          type: 'p',
          text: 'In discrete math you used [[dm-bayes-theorem|Bayes\' theorem]] to update the probability of an **event** after evidence: $P(A \\mid B) = P(B \\mid A)P(A)/P(B)$. Everything in this course since then has been *frequentist*: a parameter such as a drop rate $\\theta$ is a fixed unknown number, and probability describes how the **data** would vary over repeated samples.',
        },
        {
          type: 'p',
          text: 'The Bayesian view makes one change: your uncertainty about $\\theta$ itself is described by a probability distribution. Before the data you hold a **prior**; after the data, Bayes\' theorem turns it into a **posterior**. Since $\\theta$ is continuous (any rate in $[0, 1]$), the sums of the discrete theorem become integrals.',
        },
        {
          type: 'definition',
          term: 'Prior, likelihood, posterior',
          text: 'The [[stat-prior-distribution|prior]] $f(\\theta)$ is a density describing beliefs about $\\theta$ before seeing data. The [[stat-likelihood-function|likelihood]] $p(x \\mid \\theta)$ is the probability of the observed data $x$ for each value of $\\theta$, viewed as a function of $\\theta$. The [[stat-posterior-distribution|posterior]] $f(\\theta \\mid x)$ is the updated density:',
        },
        {
          type: 'math',
          tex: 'f(\\theta \\mid x) = \\frac{p(x \\mid \\theta)\\, f(\\theta)}{\\displaystyle\\int p(x \\mid \\theta)\\, f(\\theta)\\, d\\theta} \\qquad\\text{i.e.}\\qquad \\text{posterior} \\propto \\text{likelihood} \\times \\text{prior}',
          caption: 'The denominator is $p(x)$, the total probability of the data averaged over all $\\theta$. It does not depend on $\\theta$: it only rescales the curve so the area is $1$.',
        },
        {
          type: 'derivation',
          title: 'A new player wins 2 of their first 3 matches. What is their win rate?',
          steps: [
            { tex: 'f(\\theta) = 1, \\quad 0 \\le \\theta \\le 1', why: 'A **uniform prior**: before any matches, every win rate is considered equally plausible.' },
            { tex: 'p(x \\mid \\theta) = \\binom{3}{2}\\theta^2(1-\\theta) = 3\\theta^2(1-\\theta)', why: 'The data are $2$ wins in $3$ independent matches, a [[dm-binomial-distribution|binomial]] count with success probability $\\theta$.' },
            { tex: '\\int_0^1 3\\theta^2(1-\\theta)\\cdot 1\\, d\\theta = 3\\left(\\tfrac{1}{3} - \\tfrac{1}{4}\\right) = \\tfrac{1}{4}', why: 'The normalizing constant: integrate likelihood $\\times$ prior over every possible $\\theta$.' },
            { tex: 'f(\\theta \\mid x) = \\frac{3\\theta^2(1-\\theta)}{1/4} = 12\\,\\theta^2(1-\\theta)', why: 'Divide by the constant. Check: $\\int_0^1 12\\theta^2(1 - \\theta)\\,d\\theta = 12 \\cdot \\frac{1}{12} = 1$.' },
            { tex: 'E[\\theta \\mid x] = \\int_0^1 \\theta \\cdot 12\\theta^2(1-\\theta)\\, d\\theta = 12\\left(\\tfrac{1}{4} - \\tfrac{1}{5}\\right) = \\tfrac{3}{5}', why: 'The posterior mean is an ordinary expectation of a continuous random variable.' },
          ],
          result: 'The posterior mean is $0.6$, not the raw $2/3$: three matches are weak evidence, and the flat prior pulls the estimate toward the middle. (This is Laplace\'s *rule of succession*, $\\frac{k+1}{n+2}$.)',
        },
        {
          type: 'graph',
          x: [0, 1],
          y: [0, 2.2],
          xStep: 0.1,
          yStep: 0.5,
          height: 260,
          functions: [
            { expr: '1', color: 'gray', dashed: true, label: 'prior $f(\\theta) = 1$' },
            { expr: '3x^2(1 - x)', color: 'orange', dashed: true, label: 'likelihood $3\\theta^2(1-\\theta)$' },
            { expr: '12x^2(1 - x)', color: 'blue', label: 'posterior $12\\theta^2(1-\\theta)$' },
          ],
          areas: [{ expr: '12x^2(1 - x)', from: 'u', to: 1, color: 'blue' }],
          vlines: [{ x: 'u', label: 'θ = u', color: 'blue' }],
          sliders: [{ name: 'u', min: 0, max: 1, step: 0.01, value: 0.5, label: 'threshold $u$' }],
          readouts: [{ label: '$P(\\theta > u \\mid \\text{2 of 3}) = 1 - 4u^3 + 3u^4 =$', expr: '1 - 4u^3 + 3u^4', digits: 3 }],
          caption: 'The horizontal axis is the win rate $\\theta$. The posterior has the likelihood\'s shape (the prior is flat) but four times the height, so its area is $1$. The shaded area is the posterior probability that the true win rate exceeds $u$: about $0.69$ for $u = 0.5$. A frequentist method cannot make that statement, because for it $\\theta$ is not random.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why "proportional to" is enough',
          text: 'The denominator $p(x)$ is the same number for every $\\theta$. So you can multiply likelihood by prior, drop every factor that does not involve $\\theta$ (like the $\\binom{3}{2}$), and fix the scale at the end by making the area $1$. This "work up to a constant" habit is what makes the rest of the lesson short.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'numeric',
      prompt: 'A player wins **both** of their first two matches. With a uniform prior on the win rate $\\theta$, the posterior is $f(\\theta \\mid x) = 3\\theta^2$ on $[0, 1]$. What is the posterior probability that $\\theta > \\frac{1}{2}$? Exact fraction or decimal to $3$ places.',
      hint: 'Integrate $3\\theta^2$ from $\\frac{1}{2}$ to $1$.',
      label: '$P(\\theta > \\tfrac{1}{2} \\mid x) =$',
      answer: '7/8',
      minDecimals: 3,
      answerTex: '\\tfrac{7}{8} = 0.875',
      explanation: 'The likelihood is $\\theta^2$ and the prior is $1$, so the posterior is $c\\,\\theta^2$ with $c\\int_0^1 \\theta^2\\,d\\theta = c/3 = 1$, giving $3\\theta^2$. Then $P(\\theta > \\frac{1}{2}) = \\int_{1/2}^{1} 3\\theta^2\\, d\\theta = \\theta^3\\Big|_{1/2}^{1} = 1 - \\frac{1}{8} = \\frac{7}{8}$. Two wins make "better than a coin flip" quite plausible, but not certain: the posterior still gives $\\frac{1}{8}$ to $\\theta < \\frac{1}{2}$.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'The Beta distribution and the Beta–Binomial update',
      blocks: [
        {
          type: 'p',
          text: 'The posterior $12\\theta^2(1-\\theta)$ has the form $\\theta^{a}(1-\\theta)^{b}$. Densities of this shape form a whole family that is tailor-made for unknown probabilities.',
        },
        {
          type: 'definition',
          term: 'Beta distribution',
          text: 'For $\\alpha, \\beta > 0$, $\\theta \\sim$ [[stat-beta-distribution|Beta]]$(\\alpha, \\beta)$ has density $$f(\\theta) = \\frac{\\Gamma(\\alpha + \\beta)}{\\Gamma(\\alpha)\\Gamma(\\beta)}\\,\\theta^{\\alpha - 1}(1-\\theta)^{\\beta - 1}, \\quad 0 < \\theta < 1,$$ with mean $\\dfrac{\\alpha}{\\alpha + \\beta}$, mode $\\dfrac{\\alpha - 1}{\\alpha + \\beta - 2}$ (for $\\alpha, \\beta > 1$) and variance $\\dfrac{\\alpha\\beta}{(\\alpha + \\beta)^2(\\alpha + \\beta + 1)}$.',
        },
        {
          type: 'p',
          text: 'Here $\\Gamma$ is the **gamma function** $\\Gamma(a) = \\int_0^\\infty u^{a-1}e^{-u}\\,du$, an [[improper-integral|improper integral]] that extends the factorial: [[integration-by-parts|integration by parts]] gives $\\Gamma(a + 1) = a\\,\\Gamma(a)$, and $\\Gamma(1) = 1$, so $\\Gamma(n) = (n-1)!$ for positive integers. The fraction in front is just the constant that makes the area $1$. Beta$(1, 1)$ is the uniform prior, and our posterior $12\\theta^2(1-\\theta)$ is Beta$(3, 2)$: $\\frac{\\Gamma(5)}{\\Gamma(3)\\Gamma(2)} = \\frac{24}{2 \\cdot 1} = 12$.',
        },
        {
          type: 'theorem',
          name: 'Beta–Binomial update',
          tex: '\\theta \\sim \\text{Beta}(\\alpha, \\beta), \\ \\ k \\text{ successes in } n \\text{ trials} \\implies \\theta \\mid \\text{data} \\sim \\text{Beta}(\\alpha + k,\\ \\beta + n - k)',
          text: 'Add the successes to $\\alpha$ and the failures to $\\beta$. The posterior is in the same family as the prior, which is what makes the Beta a [[stat-conjugate-prior|conjugate prior]] for binomial data.',
        },
        {
          type: 'derivation',
          title: 'Proof: multiply and recognize the shape',
          steps: [
            { tex: 'f(\\theta \\mid k) \\propto \\underbrace{\\theta^{k}(1-\\theta)^{n-k}}_{\\text{likelihood}} \\cdot \\underbrace{\\theta^{\\alpha-1}(1-\\theta)^{\\beta-1}}_{\\text{prior}}', why: 'Posterior $\\propto$ likelihood $\\times$ prior. The constants $\\binom{n}{k}$ and $\\frac{\\Gamma(\\alpha+\\beta)}{\\Gamma(\\alpha)\\Gamma(\\beta)}$ do not involve $\\theta$, so they are dropped.' },
            { tex: '= \\theta^{(\\alpha + k) - 1}(1-\\theta)^{(\\beta + n - k) - 1}', why: 'Add exponents of equal bases.' },
            { tex: '\\implies \\theta \\mid k \\sim \\text{Beta}(\\alpha + k, \\beta + n - k)', why: 'This is the shape of a Beta density, and a density is determined by its shape: the constant must be the Beta one, since the area has to be $1$.' },
          ],
        },
        {
          type: 'p',
          text: 'So $\\alpha$ and $\\beta$ act like **pseudo-counts**: a Beta$(\\alpha, \\beta)$ prior is worth roughly $\\alpha$ successes and $\\beta$ failures seen before, and $\\alpha + \\beta$ is the **prior strength**. Example: a new hero\'s win rate. Most heroes land near $50\\%$, so a designer picks Beta$(10, 10)$ (mean $0.5$, strength $20$). After $14$ wins and $6$ losses the posterior is Beta$(24, 16)$ with mean $24/40 = 0.60$, while the raw rate is $14/20 = 0.70$.',
        },
        {
          type: 'graph',
          x: [0, 1],
          y: [0, 10],
          xStep: 0.1,
          yStep: 2,
          height: 300,
          functions: [
            { expr: betaPdf('w*m', 'w*(1 - m)'), color: 'gray', dashed: true, label: 'prior $\\text{Beta}(wm, w(1-m))$' },
            { expr: betaPdf('w*m + s', 'w*(1 - m) + f'), color: 'blue', label: 'posterior $\\text{Beta}(wm + s, w(1-m) + f)$' },
          ],
          vlines: [{ x: 's/(s + f)', label: 'raw rate', color: 'orange' }],
          sliders: [
            { name: 's', min: 0, max: 40, step: 1, value: 14, label: 'successes (wins) $s$' },
            { name: 'f', min: 0, max: 40, step: 1, value: 6, label: 'failures (losses) $f$' },
            { name: 'w', min: 1, max: 40, step: 1, value: 20, label: 'prior strength $w = \\alpha_0 + \\beta_0$' },
            { name: 'm', min: 0.05, max: 0.95, step: 0.05, value: 0.5, label: 'prior mean $m$' },
          ],
          readouts: [
            { label: 'posterior mean $\\frac{wm + s}{w + s + f} =$', expr: '(w*m + s)/(w + s + f)', digits: 3 },
            { label: 'raw rate $\\frac{s}{s + f} =$', expr: 's/(s + f)', digits: 3 },
            { label: 'posterior SD $=$', expr: 'sqrt((w*m + s)*(w*(1 - m) + f)/((w + s + f)^2*(w + s + f + 1)))', digits: 3 },
          ],
          caption: 'Start at $14$ wins, $6$ losses, prior Beta$(10, 10)$. Drag $w$ down to $2$ with $m = 0.5$ (the uniform prior): the posterior mean moves toward the raw $0.70$. Raise $s$ and $f$ together: the posterior narrows (its SD shrinks roughly like $1/\\sqrt{n}$) and the prior matters less and less.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Two integer counters per item',
          text: 'A live dashboard can keep a full posterior for every hero, weapon or loot source with just two numbers, `wins + alpha0` and `losses + beta0`, updated with one addition per match. No refitting, no stored history — and the result is a whole distribution, not just a point estimate.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'fill',
      prompt: 'Complete the Beta–Binomial update rule.',
      template: 'Prior Beta$(\\alpha, \\beta)$; data: $k$ successes in $n$ trials. Posterior: Beta$($ ___ $,$ ___ $)$, whose mean is ___ .',
      blanks: [{ answers: ['$\\alpha + k$'] }, { answers: ['$\\beta + n - k$'] }, { answers: ['$\\frac{\\alpha + k}{\\alpha + \\beta + n}$'] }],
      wordBank: ['$\\alpha + k$', '$\\beta + n - k$', '$\\beta + n$', '$\\alpha + n$', '$\\frac{\\alpha + k}{\\alpha + \\beta + n}$', '$\\frac{k}{n}$'],
      explanation: 'Successes add to $\\alpha$ and **failures** ($n - k$, not $n$) add to $\\beta$, so the posterior is Beta$(\\alpha + k, \\beta + n - k)$. Its mean is $\\frac{\\alpha + k}{(\\alpha + k) + (\\beta + n - k)} = \\frac{\\alpha + k}{\\alpha + \\beta + n}$ — the raw rate $k/n$ only when the prior is negligible.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'numeric',
      prompt: 'Designers believe a new mount drops at about $20\\%$ and encode this as a Beta$(2, 8)$ prior on the drop rate. In playtesting, it drops $3$ times in $40$ kills. What is the posterior mean drop rate? Decimal to $3$ places.',
      hint: 'Posterior Beta$(2 + 3, 8 + 37)$.',
      label: '$E[\\theta \\mid \\text{data}] =$',
      answer: '5/50',
      tolerance: 0.0005,
      answerTex: '\\frac{5}{50} = 0.100',
      explanation: 'Posterior: Beta$(2 + 3, 8 + (40 - 3)) = $ Beta$(5, 45)$, with mean $\\frac{5}{5 + 45} = 0.100$. The raw rate is $3/40 = 0.075$ and the prior mean $0.2$; the posterior sits between them, much closer to the data because $40$ kills outweigh a prior worth $10$. Its $95\\%$ credible interval is about $[0.034, 0.196]$, so the designers\' $20\\%$ is now near the edge of what is plausible.',
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'concept',
      title: 'Summarizing a posterior: shrinkage and credible intervals',
      blocks: [
        {
          type: 'p',
          text: 'The posterior is the full answer, but you usually report a point estimate and an interval. The **posterior mean** has a revealing form.',
        },
        {
          type: 'derivation',
          title: 'The posterior mean is a weighted average',
          steps: [
            { tex: '\\frac{\\alpha + k}{\\alpha + \\beta + n} = \\frac{\\alpha + \\beta}{\\alpha + \\beta + n}\\cdot\\frac{\\alpha}{\\alpha + \\beta} + \\frac{n}{\\alpha + \\beta + n}\\cdot\\frac{k}{n}', why: 'Split the numerator as $\\alpha + k$ and multiply and divide each part by what it needs. Expanding the right side gives back the left.' },
            { tex: '= (1 - w_n)\\cdot\\text{prior mean} + w_n \\cdot \\hat{p}, \\qquad w_n = \\frac{n}{\\alpha + \\beta + n}', why: 'The weights add to $1$. The data weight $w_n$ is the share of all counts, real and pseudo, that are real.' },
            { tex: '\\text{hero: } \\tfrac{20}{40}(0.5) + \\tfrac{20}{40}(0.7) = 0.6', why: 'Prior strength $20$ and $n = 20$ matches get equal weight.' },
          ],
          result: 'The raw rate is **shrunk** toward the prior mean, strongly when $n$ is small and hardly at all when $n \\gg \\alpha + \\beta$. That is exactly what you want for a leaderboard of item win rates: an item with $3/3$ wins should not top a list next to items with thousands of games.',
        },
        {
          type: 'definition',
          term: 'Credible interval',
          text: 'A $95\\%$ [[stat-credible-interval|credible interval]] is an interval $[a, b]$ with $P(a \\le \\theta \\le b \\mid \\text{data}) = 0.95$. The usual choice cuts $2.5\\%$ of posterior probability from each tail: $a$ and $b$ are the $0.025$ and $0.975$ quantiles of the posterior, found numerically (e.g. `scipy.stats.beta.ppf`) or by sorting simulated draws.',
        },
        {
          type: 'p',
          text: 'Example: $7$ wins in $20$ matches with a uniform prior gives Beta$(8, 14)$: posterior mean $8/22 \\approx 0.364$, mode $7/20 = 0.35$, and $95\\%$ credible interval $[0.181, 0.570]$. The textbook (Wald) confidence interval is $0.35 \\pm 1.96\\sqrt{0.35 \\cdot 0.65/20} = [0.141, 0.559]$.',
        },
        {
          type: 'graph',
          x: [0, 1],
          y: [0, 4.5],
          xStep: 0.1,
          yStep: 1,
          height: 250,
          functions: [{ expr: betaPdf('8', '14'), color: 'blue', label: 'posterior $\\text{Beta}(8, 14)$' }],
          areas: [{ expr: betaPdf('8', '14'), from: 0.1811, to: 0.5697, color: 'blue' }],
          vlines: [
            { x: 0.141, label: 'Wald CI', color: 'orange' },
            { x: 0.559, color: 'orange' },
          ],
          caption: 'The shaded region holds $95\\%$ of the posterior probability: the credible interval $[0.181, 0.570]$. The orange lines mark the $95\\%$ confidence interval $[0.141, 0.559]$, which is symmetric about $0.35$ and leans further toward $0$. For large $n$ the two nearly coincide; for small $n$ or rates near $0$ or $1$ they can differ noticeably.',
        },
        {
          type: 'table',
          headers: ['Question', '$95\\%$ [[stat-confidence-interval|confidence interval]]', '$95\\%$ credible interval'],
          rows: [
            ['What is random?', 'The interval (it depends on the sample); $\\theta$ is fixed', '$\\theta$ (it has a posterior); the data are fixed'],
            ['What "$95\\%$" means', '$95\\%$ of intervals built this way, over repeated samples, cover the true $\\theta$', 'Given these data and this prior, $P(a \\le \\theta \\le b) = 0.95$'],
            ['Needs a prior?', 'No', 'Yes — and with little data, the prior matters'],
            ['Can you say "$\\theta$ is in this interval with probability $0.95$"?', 'No: after the data the interval is fixed and either covers $\\theta$ or not', 'Yes, that is its definition'],
          ],
          caption: 'The sentence people *want* to say about a confidence interval is exactly the definition of a credible interval.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'The prior is an assumption: check it',
          text: 'With $20$ matches, Beta$(1,1)$ and Beta$(10,10)$ priors give noticeably different answers. Report the prior you used, and try a couple of reasonable alternatives (a *sensitivity analysis*). If the conclusion flips, you need more data, not a cleverer prior.',
        },
      ],
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'mcq',
      prompt: 'A drop-rate analysis reports a $95\\%$ **credible** interval of $[0.031, 0.058]$ (Beta posterior from a uniform prior). Which statement is a correct interpretation?',
      options: [
        { text: 'If the playtest were repeated many times, $95\\%$ of the intervals computed this way would contain the true drop rate.', why: 'That is the definition of a $95\\%$ *confidence* interval: a statement about the procedure over repeated samples. A credible interval is a statement about $\\theta$ given the data you actually have.' },
        { text: 'Given the data and the uniform prior, there is a $95\\%$ probability that the true drop rate is between $0.031$ and $0.058$.', correct: true, why: 'Exactly: $P(0.031 \\le \\theta \\le 0.058 \\mid \\text{data}) = 0.95$ under the posterior. The "given the prior" part matters: a different prior gives a different interval.' },
        { text: '$95\\%$ of players will see a drop rate between $3.1\\%$ and $5.8\\%$.', why: 'There is one true drop rate for everyone. The interval describes uncertainty about that single number, not a spread of individual experiences.' },
        { text: 'The true drop rate is exactly the midpoint, $0.0445$, with $95\\%$ confidence.', why: 'No point is singled out with $95\\%$ probability: for a continuous posterior, any single value has probability $0$. The interval as a whole carries the $95\\%$.' },
      ],
      explanation: 'A credible interval answers the question people naturally ask — "how likely is it that $\\theta$ lies here?" — and it can, because Bayesian inference treats $\\theta$ as uncertain. The price is that the answer is conditional on the prior. A confidence interval makes no prior assumption but only promises long-run coverage of the procedure.',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'concept',
      title: 'Conjugate priors beyond coins: the Gamma–Poisson model',
      blocks: [
        {
          type: 'p',
          text: 'Crash counts, bug reports and server disconnects per day are Poisson counts with an unknown **rate** $\\lambda > 0$. A Beta prior cannot work (it lives on $[0,1]$), but the same "recognize the shape" trick finds the right family: the [[stat-gamma-distribution|Gamma distribution]].',
        },
        {
          type: 'definition',
          term: 'Gamma distribution (recap, rate form)',
          text: 'As in the continuous-distributions unit, for shape $\\alpha > 0$ and rate $\\beta > 0$, $\\lambda \\sim \\text{Gamma}(\\alpha, \\beta)$ has density $f(\\lambda) = \\dfrac{\\beta^\\alpha}{\\Gamma(\\alpha)}\\lambda^{\\alpha-1}e^{-\\beta\\lambda}$ for $\\lambda > 0$, with mean $\\alpha/\\beta$ and variance $\\alpha/\\beta^2$. (Gamma$(1, \\beta)$ is $\\text{Exp}(\\beta)$ in the rate convention, mean $1/\\beta$.)',
        },
        {
          type: 'derivation',
          title: 'Gamma prior + Poisson counts',
          steps: [
            { tex: 'p(x_1, \\dots, x_n \\mid \\lambda) = \\prod_{i=1}^{n} \\frac{e^{-\\lambda}\\lambda^{x_i}}{x_i!} \\propto \\lambda^{\\sum x_i} e^{-n\\lambda}', why: 'Independent Poisson counts multiply. The $x_i!$ do not involve $\\lambda$, so drop them.' },
            { tex: 'f(\\lambda \\mid x) \\propto \\lambda^{\\sum x_i}e^{-n\\lambda}\\cdot\\lambda^{\\alpha - 1}e^{-\\beta\\lambda} = \\lambda^{(\\alpha + \\sum x_i) - 1}e^{-(\\beta + n)\\lambda}', why: 'Likelihood times prior; add the exponents of $\\lambda$ and of $e$.' },
            { tex: '\\lambda \\mid x \\sim \\text{Gamma}\\left(\\alpha + \\textstyle\\sum x_i,\\ \\beta + n\\right)', why: 'Recognize the Gamma shape. Pseudo-counts again: $\\alpha$ is like prior events, $\\beta$ like prior observation periods.' },
            { tex: '\\text{prior Gamma}(4, 2),\\ \\text{crashes } 3, 1, 4, 2, 5 \\implies \\text{Gamma}(19, 7)', why: 'A prior mean of $4/2 = 2$ crashes per day. Five days with $15$ crashes in total.' },
            { tex: 'E[\\lambda \\mid x] = \\tfrac{19}{7} \\approx 2.71 \\text{ crashes/day}', why: 'Between the prior mean $2$ and the raw rate $15/5 = 3$, weighted by $\\beta = 2$ prior days versus $n = 5$ real days.' },
          ],
          result: 'The $95\\%$ credible interval for the crash rate is about $[1.63, 4.06]$ per day.',
        },
        {
          type: 'graph',
          x: [0, 7],
          y: [0, 1.4],
          xStep: 1,
          yStep: 0.2,
          height: 260,
          functions: [
            { expr: '2^4/gamma(4)*x^3*exp(-2x)', color: 'gray', dashed: true, label: 'prior $\\text{Gamma}(4, 2)$' },
            { expr: '(2 + d)^(4 + c)/gamma(4 + c)*x^(3 + c)*exp(-(2 + d)x)', color: 'red', label: 'posterior $\\text{Gamma}(4 + c, 2 + d)$' },
          ],
          sliders: [
            { name: 'd', min: 0, max: 30, step: 1, value: 5, label: 'days observed $d$' },
            { name: 'c', min: 0, max: 90, step: 1, value: 15, label: 'total crashes $c$' },
          ],
          readouts: [
            { label: 'posterior mean $\\frac{4 + c}{2 + d} =$', expr: '(4 + c)/(2 + d)', digits: 3 },
            { label: 'raw rate $c/d =$', expr: 'c/d', digits: 3 },
            { label: 'posterior SD $\\frac{\\sqrt{4 + c}}{2 + d} =$', expr: 'sqrt(4 + c)/(2 + d)', digits: 3 },
          ],
          caption: 'The horizontal axis is the crash rate $\\lambda$ (crashes per day). With $d = 0$ the posterior is the prior. Set $d = 30$, $c = 90$: the posterior concentrates near $3$, the prior is almost forgotten. A patch that lowers the rate shows up as new data pulling the curve left.',
        },
        {
          type: 'table',
          headers: ['Data model', 'Conjugate prior', 'Posterior after $n$ observations'],
          rows: [
            ['Bernoulli / binomial, success prob. $\\theta$', 'Beta$(\\alpha, \\beta)$', 'Beta$(\\alpha + k, \\beta + n - k)$'],
            ['Poisson counts, rate $\\lambda$', 'Gamma$(\\alpha, \\beta)$', 'Gamma$(\\alpha + \\sum x_i, \\beta + n)$'],
            ['Exponential times, rate $\\lambda$', 'Gamma$(\\alpha, \\beta)$', 'Gamma$(\\alpha + n, \\beta + \\sum x_i)$'],
            ['Normal, known $\\sigma^2$, mean $\\mu$', '$N(\\mu_0, \\tau_0^2)$', 'Normal with precision $\\frac{1}{\\tau_0^2} + \\frac{n}{\\sigma^2}$ and mean $\\frac{\\mu_0/\\tau_0^2 + n\\bar{x}/\\sigma^2}{1/\\tau_0^2 + n/\\sigma^2}$'],
          ],
          caption: 'Conjugate pairs turn Bayesian updating into arithmetic. In the normal case precisions ($1/\\text{variance}$) add, and the mean is a precision-weighted average of $\\mu_0$ and $\\bar{x}$.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'When there is no conjugate prior',
          text: 'Real models (a rating for every player, a hierarchy of heroes within roles) rarely have conjugate forms. Then the posterior is approximated by evaluating likelihood $\\times$ prior on a grid (fine for one or two parameters) or, in general, by **Markov chain Monte Carlo** (MCMC): algorithms that produce random draws from a posterior known only up to its constant. Tools such as Stan and PyMC do this for you.',
        },
      ],
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'numeric',
      prompt: 'The crash rate per $1000$ sessions has a Gamma$(3, 1)$ prior (rate form, mean $3$). After a patch, four batches of $1000$ sessions produce $1, 0, 2, 1$ crashes. What is the posterior mean crash rate per $1000$ sessions? Decimal to $2$ places.',
      hint: 'Add the total count to $\\alpha$ and the number of batches to $\\beta$.',
      label: '$E[\\lambda \\mid x] =$',
      answer: '7/5',
      tolerance: 0.005,
      answerTex: '\\frac{7}{5} = 1.40',
      explanation: '$\\sum x_i = 1 + 0 + 2 + 1 = 4$ and $n = 4$, so the posterior is Gamma$(3 + 4, 1 + 4) = $ Gamma$(7, 5)$ with mean $7/5 = 1.40$. The raw rate is $4/4 = 1$; the prior (worth one batch with $3$ crashes) pulls it up a little. The posterior SD is $\\sqrt{7}/5 \\approx 0.53$, so the evidence that the patch helped is real but not yet overwhelming.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'error',
      prompt: 'An analyst updates a Beta$(3, 7)$ prior for a hero\'s win rate after the hero wins $12$ of $30$ matches. Tap the first wrong line.',
      lines: [
        'Prior: Beta$(\\alpha, \\beta) = $ Beta$(3, 7)$, prior mean $0.3$.',
        'Data: $k = 12$ wins, $n = 30$ matches.',
        'Posterior $\\alpha = 3 + 12 = 15$.',
        'Posterior $\\beta = 7 + 30 = 37$.',
        'Posterior mean $= 15/52 \\approx 0.288$, so the data made us *more* pessimistic.',
      ],
      errorLines: [4],
      explanation: '$\\beta$ counts **failures**, so it gains $n - k = 18$ losses, not all $30$ matches: posterior Beta$(15, 25)$. The posterior mean is $15/40 = 0.375$ — between the prior mean $0.3$ and the raw rate $12/30 = 0.4$, as it must be. Adding $n$ to $\\beta$ counts the wins twice (once as wins, once as losses), which is why the wrong answer landed outside that range.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'Bayesian A/B testing',
      blocks: [
        {
          type: 'p',
          text: 'Two tutorials are tested on new players. Tutorial A: $40$ of $200$ players return on day 7. Tutorial B: $55$ of $200$. With uniform priors the posteriors are $\\theta_A \\sim$ Beta$(41, 161)$ and $\\theta_B \\sim$ Beta$(56, 146)$, independent because the groups are. The question a producer asks is direct:',
        },
        {
          type: 'math',
          tex: 'P(\\theta_B > \\theta_A \\mid \\text{data}) = \\int_0^1\\!\\!\\int_{\\theta_A}^{1} f_A(\\theta_A)\\, f_B(\\theta_B)\\, d\\theta_B\\, d\\theta_A',
          caption: 'The probability of the region above the diagonal $\\theta_B > \\theta_A$ under the joint posterior (the product of the two independent posteriors).',
        },
        {
          type: 'p',
          text: 'The double integral has no tidy closed form, but it is easy by [[dm-monte-carlo|Monte Carlo]]: draw $\\theta_A$ and $\\theta_B$ from their posteriors many times and count how often $\\theta_B$ wins. The same draws give the distribution of the **lift** $\\theta_B - \\theta_A$, which says how *much* better B is.',
        },
        {
          type: 'graph',
          x: [0.05, 0.45],
          y: [0, 16],
          xStep: 0.05,
          yStep: 4,
          height: 260,
          functions: [
            { expr: betaPdfLog('41', '161'), color: 'gray', label: 'A: $\\text{Beta}(41, 161)$' },
            { expr: betaPdfLog('1 + k', '201 - k'), color: 'green', label: 'B: $\\text{Beta}(1 + k, 201 - k)$' },
          ],
          sliders: [{ name: 'k', min: 20, max: 80, step: 1, value: 55, label: 'B: players returning, of $200$, $k$' }],
          readouts: [
            { label: 'posterior mean of B $=$', expr: '(1 + k)/202', digits: 3 },
            { label: '$P(\\theta_B > \\theta_A) \\approx$ (normal approx.)', expr: 'normcdf(((1 + k)/202 - 41/202)/sqrt(41*161/(202^2*203) + (1 + k)*(201 - k)/(202^2*203)))', digits: 3 },
          ],
          caption: 'The readout approximates each posterior by a normal with the same mean and variance, so $\\theta_B - \\theta_A$ is roughly normal. At $k = 55$ it gives $0.961$, matching the exact value $0.9605$ and the simulation below. At $k = 40$ the curves coincide and the answer is $0.5$.',
        },
        {
          type: 'code',
          title: 'bayes_ab.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdio>
#include <numbers>
#include <random>

std::mt19937_64 rng(2024);
double uniform01() { return (rng() >> 11) * 0x1.0p-53; }      // [0, 1)

double normal01() {                                            // Box-Muller
    double u1 = 1.0 - uniform01(), u2 = uniform01();           // u1 in (0, 1]
    return std::sqrt(-2.0 * std::log(u1)) * std::cos(2.0 * std::numbers::pi * u2);
}

// Gamma(a, 1) for a >= 1 by Marsaglia-Tsang (a rejection sampler).
double gamma01(double a) {
    double d = a - 1.0 / 3.0, c = 1.0 / std::sqrt(9.0 * d);
    while (true) {
        double z = normal01(), v = 1.0 + c * z;
        if (v <= 0) continue;
        v = v * v * v;
        if (std::log(1.0 - uniform01()) < 0.5 * z * z + d - d * v + d * std::log(v))
            return d * v;
    }
}

double sampleBeta(double a, double b) {                        // Beta(a, b) from two Gammas
    double g = gamma01(a);
    return g / (g + gamma01(b));
}

int main() {
    // Uniform Beta(1, 1) priors. A: 40 of 200 players returned; B: 55 of 200.
    double aA = 1 + 40, bA = 1 + 160, aB = 1 + 55, bB = 1 + 145;
    const int draws = 1'000'000;
    int bWins = 0;
    double liftSum = 0;
    for (int i = 0; i < draws; ++i) {
        double pA = sampleBeta(aA, bA), pB = sampleBeta(aB, bB);
        if (pB > pA) ++bWins;
        liftSum += pB - pA;
    }
    std::printf("P(B better than A) ~ %.3f\\n", double(bWins) / draws);
    std::printf("E[pB - pA]         ~ %.4f\\n", liftSum / draws);
}`,
          output: `P(B better than A) ~ 0.961
E[pB - pA]         ~ 0.0743`,
          annotations: [
            { lines: '9-24', text: 'How to draw from a Gamma distribution is the subject of the next lesson (Box–Muller turns uniforms into normals; Marsaglia–Tsang is a rejection sampler). For now treat `gamma01` as a black box.' },
            { lines: '26-29', text: 'If $G_1 \\sim$ Gamma$(a, 1)$ and $G_2 \\sim$ Gamma$(b, 1)$ are independent, then $G_1/(G_1 + G_2) \\sim$ Beta$(a, b)$.' },
            { lines: '38-40', text: 'Each iteration is one joint posterior draw. The fraction with $p_B > p_A$ estimates the double integral; the average of $p_B - p_A$ estimates the expected lift (exactly $\\frac{56 - 41}{202} \\approx 0.0743$).' },
          ],
        },
        {
          type: 'callout',
          variant: 'exam',
          title: 'Compare with the frequentist test',
          text: 'The two-proportion $z$-test on the same data gives $z \\approx 1.76$ and a one-sided $p$-value of $0.039$. With flat priors, $P(\\theta_B > \\theta_A \\mid \\text{data}) \\approx 1 - p$ numerically, but the meanings differ: the $p$-value is $P(\\text{data this extreme} \\mid \\text{no difference})$, while the posterior probability is a direct statement about the rates. Instructors love asking which is which.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Peeking still has consequences',
          text: 'A posterior is a valid summary whenever you look at it. But a *decision rule* like "check every hour and ship B the moment $P(\\theta_B > \\theta_A) > 0.95$" ships changes that do nothing more often than $5\\%$ of the time. Simulate your stopping rule on A/A data (two identical variants) before trusting it.',
        },
      ],
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'truefalse',
      prompt: 'A Bayesian A/B test finds $P(\\theta_B > \\theta_A \\mid \\text{data}) = 0.96$. This shows that B\'s retention rate is substantially higher than A\'s — at least a few percentage points.',
      answer: false,
      explanation: 'The probability that B is better says nothing about **how much** better. With a huge sample, a lift of $0.1$ percentage points can have $P(\\theta_B > \\theta_A) = 0.96$ too. To judge size, look at the posterior of the lift $\\theta_B - \\theta_A$ (its mean and a credible interval) or compute $P(\\theta_B - \\theta_A > 0.02 \\mid \\text{data})$. Probability of a difference and size of a difference are separate questions — the same lesson as statistical versus practical significance.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'concept',
      title: 'Preview: multi-armed bandits and Thompson sampling',
      blocks: [
        {
          type: 'p',
          text: 'An A/B test sends half of all players to the worse variant until the test ends. If you are choosing among several store offers, difficulty curves or ad placements continuously, that is expensive. A **multi-armed bandit** (named after a row of slot machines) is the problem of choosing an arm each round to maximize total reward while still learning which arm is best: **explore** uncertain arms, **exploit** the one that looks best.',
        },
        {
          type: 'p',
          text: '[[stat-thompson-sampling|Thompson sampling]] (1933) solves it with posteriors and one clever move: each round, draw one plausible rate from each arm\'s posterior and play the arm whose **draw** is largest. An arm is chosen with exactly the posterior probability that it is the best arm. Uncertain arms have wide posteriors, so they sometimes produce large draws and get explored; clearly bad arms almost never do.',
        },
        {
          type: 'figure',
          svg: '<svg viewBox="0 0 480 250" xmlns="http://www.w3.org/2000/svg"><defs><marker id="tsah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="currentColor"/></marker></defs><rect x="20" y="20" width="190" height="70" rx="10" fill="none" class="s-blue" stroke-width="1.8"/><text x="115" y="44" text-anchor="middle" font-size="14" font-weight="600" class="t-blue">1. Beliefs</text><text x="115" y="64" text-anchor="middle" font-size="12.5">Beta(αₖ, βₖ) for each arm k</text><text x="115" y="80" text-anchor="middle" font-size="12.5">start at Beta(1, 1)</text><rect x="270" y="20" width="190" height="70" rx="10" fill="none" class="s-purple" stroke-width="1.8"/><text x="365" y="44" text-anchor="middle" font-size="14" font-weight="600" class="t-purple">2. Sample</text><text x="365" y="64" text-anchor="middle" font-size="12.5">draw one plausible rate</text><text x="365" y="80" text-anchor="middle" font-size="12.5">from each arm’s posterior</text><rect x="270" y="160" width="190" height="70" rx="10" fill="none" class="s-orange" stroke-width="1.8"/><text x="365" y="184" text-anchor="middle" font-size="14" font-weight="600" class="t-orange">3. Act</text><text x="365" y="204" text-anchor="middle" font-size="12.5">play the arm with the</text><text x="365" y="220" text-anchor="middle" font-size="12.5">largest draw</text><rect x="20" y="160" width="190" height="70" rx="10" fill="none" class="s-green" stroke-width="1.8"/><text x="115" y="184" text-anchor="middle" font-size="14" font-weight="600" class="t-green">4. Update</text><text x="115" y="204" text-anchor="middle" font-size="12.5">success: αₖ += 1</text><text x="115" y="220" text-anchor="middle" font-size="12.5">failure: βₖ += 1</text><line x1="212" y1="55" x2="266" y2="55" stroke="currentColor" stroke-width="1.6" marker-end="url(#tsah)"/><line x1="365" y1="92" x2="365" y2="156" stroke="currentColor" stroke-width="1.6" marker-end="url(#tsah)"/><line x1="268" y1="195" x2="214" y2="195" stroke="currentColor" stroke-width="1.6" marker-end="url(#tsah)"/><line x1="115" y1="158" x2="115" y2="94" stroke="currentColor" stroke-width="1.6" marker-end="url(#tsah)"/><text x="240" y="122" text-anchor="middle" font-size="12" class="t-gray">uncertain arms give</text><text x="240" y="138" text-anchor="middle" font-size="12" class="t-gray">wide draws → explored</text></svg>',
          alt: 'A loop of four boxes: 1 Beliefs, a Beta posterior per arm starting at Beta(1, 1); 2 Sample, draw one plausible rate from each arm\'s posterior; 3 Act, play the arm with the largest draw; 4 Update, add 1 to alpha on success or beta on failure; then back to 1.',
          caption: 'One round of Thompson sampling. The randomness of step 2 does the exploring; no tuning parameter is needed.',
          maxWidth: 480,
        },
        {
          type: 'code',
          title: 'thompson.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdio>
#include <numbers>
#include <random>

std::mt19937_64 rng(7);
double uniform01() { return (rng() >> 11) * 0x1.0p-53; }

double normal01() {
    double u1 = 1.0 - uniform01(), u2 = uniform01();
    return std::sqrt(-2.0 * std::log(u1)) * std::cos(2.0 * std::numbers::pi * u2);
}

double gamma01(double a) {                     // Marsaglia-Tsang, a >= 1
    double d = a - 1.0 / 3.0, c = 1.0 / std::sqrt(9.0 * d);
    while (true) {
        double z = normal01(), v = 1.0 + c * z;
        if (v <= 0) continue;
        v = v * v * v;
        if (std::log(1.0 - uniform01()) < 0.5 * z * z + d - d * v + d * std::log(v))
            return d * v;
    }
}

double sampleBeta(double a, double b) { double g = gamma01(a); return g / (g + gamma01(b)); }

int main() {
    const double trueRate[3] = {0.04, 0.05, 0.07};   // unknown to the algorithm
    double a[3] = {1, 1, 1}, b[3] = {1, 1, 1};       // Beta(1, 1) priors
    int pulls[3] = {0, 0, 0}, total = 0;
    const int rounds = 20'000;

    for (int r = 1; r <= rounds; ++r) {
        int best = 0;                                // 1. sample a rate from each posterior
        double bestDraw = -1;
        for (int k = 0; k < 3; ++k) {
            double draw = sampleBeta(a[k], b[k]);
            if (draw > bestDraw) { bestDraw = draw; best = k; }
        }
        bool success = uniform01() < trueRate[best]; // 2. play the arm with the best draw
        if (success) { a[best] += 1; ++total; }      // 3. Bayesian update
        else         { b[best] += 1; }
        ++pulls[best];
        if (r == 1000 || r == rounds)
            std::printf("after %5d rounds: pulls = %4d %4d %5d\\n", r, pulls[0], pulls[1], pulls[2]);
    }
    std::printf("successes: %d (an even split expects %.0f, always-best %.0f)\\n",
                total, rounds * (0.04 + 0.05 + 0.07) / 3, rounds * 0.07);
}`,
          output: `after  1000 rounds: pulls =  117  380   503
after 20000 rounds: pulls =  216 1535 18249
successes: 1383 (an even split expects 1067, always-best 1400)`,
          annotations: [
            { lines: '28-29', text: 'Three store offers that convert at $4\\%$, $5\\%$ and $7\\%$. The algorithm only ever sees successes and failures.' },
            { lines: '33-38', text: 'Thompson\'s rule: one posterior draw per arm, play the argmax.' },
            { lines: '41-42', text: 'The conjugate update from earlier: one addition.' },
          ],
        },
        {
          type: 'p',
          text: 'After $20{,}000$ rounds the best arm got over $91\\%$ of the traffic, and the bandit collected $1383$ conversions — close to the $1400$ an oracle that knew the best arm would expect, and far above the $1067$ of an even three-way split. The cost of learning, the gap to the oracle, is called **regret**; Thompson sampling keeps it growing only logarithmically in the number of rounds.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Bandits in live games',
          text: 'Bandits pick store offers, tune matchmaking parameters, order tutorial tips and choose push-notification times. Two caveats: rewards that arrive late (day-7 retention takes $7$ days) slow the updates, and player behavior drifts, so many systems discount old data. And because traffic is uneven, a bandit is worse than a fixed-split A/B test at producing a clean estimate of *how much* better the winner is — choose the tool by the goal.',
        },
      ],
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'order',
      prompt: 'Put the steps of one round of Thompson sampling with Beta posteriors in order.',
      lines: [
        'For every arm $k$, draw $\\tilde{\\theta}_k$ from its posterior Beta$(\\alpha_k, \\beta_k)$.',
        'Choose the arm $k^*$ with the largest draw $\\tilde{\\theta}_k$.',
        'Play arm $k^*$ and observe success or failure.',
        'Update: success adds $1$ to $\\alpha_{k^*}$, failure adds $1$ to $\\beta_{k^*}$.',
      ],
      distractors: ['Choose the arm with the largest posterior mean $\\frac{\\alpha_k}{\\alpha_k + \\beta_k}$.'],
      explanation: 'Sample, choose, act, update. The distractor is the "greedy" rule: always playing the highest posterior mean never explores, so an arm that was unlucky early can be abandoned forever. Choosing by a random draw instead is what makes each arm\'s chance of being played equal to the posterior probability that it is the best.',
    },
  ],
  takeaways: [
    'Bayesian inference treats a parameter as uncertain: posterior $\\propto$ likelihood $\\times$ prior, normalized by $\\int p(x \\mid \\theta) f(\\theta)\\,d\\theta$.',
    'Beta$(\\alpha, \\beta)$ prior + $k$ successes in $n$ trials $\\to$ Beta$(\\alpha + k, \\beta + n - k)$. The parameters are pseudo-counts; the density uses $\\Gamma$ to normalize.',
    'The posterior mean $\\frac{\\alpha + k}{\\alpha + \\beta + n}$ shrinks the raw rate toward the prior mean, less as $n$ grows.',
    'A $95\\%$ credible interval satisfies $P(a \\le \\theta \\le b \\mid \\text{data}) = 0.95$; a confidence interval promises $95\\%$ coverage over repeated samples. Credible intervals depend on the prior.',
    'Gamma$(\\alpha, \\beta)$ + Poisson counts $\\to$ Gamma$(\\alpha + \\sum x_i, \\beta + n)$. Conjugate pairs make updating arithmetic; otherwise use grids or MCMC.',
    'Bayesian A/B test: estimate $P(\\theta_B > \\theta_A \\mid \\text{data})$ and the lift by drawing from the posteriors. Thompson sampling plays the arm with the largest posterior draw, balancing exploration and exploitation.',
  ],
  reading: [
    {
      title: 'Seeing Theory — Bayesian Inference',
      url: 'https://seeing-theory.brown.edu/',
      source: 'other',
      note: 'The "Bayesian Inference" chapter animates priors turning into posteriors as coin flips arrive.',
    },
    {
      title: 'MIT OCW 18.05 — Introduction to Probability and Statistics',
      url: 'https://ocw.mit.edu/courses/18-05-introduction-to-probability-and-statistics-spring-2014/',
      source: 'other',
      note: 'Its Bayesian-updating classes (discrete and continuous priors, conjugate priors, probability intervals) parallel this lesson with many worked problems.',
    },
    {
      title: 'Wikipedia — Conjugate prior',
      url: 'https://en.wikipedia.org/wiki/Conjugate_prior',
      source: 'wikipedia',
      note: 'A large table of conjugate pairs with their posterior updates and pseudo-count interpretations.',
    },
    {
      title: 'Wikipedia — Thompson sampling',
      url: 'https://en.wikipedia.org/wiki/Thompson_sampling',
      source: 'wikipedia',
      note: 'The algorithm, its history back to 1933, and its regret guarantees.',
    },
  ],
};
