import type { CheatSheet } from '../types';

export const statsCheatSheets: CheatSheet[] = [
  // ------------------------------------------------------------------
  {
    id: 'stat-descriptive',
    title: 'Descriptive Statistics',
    course: 'stats',
    icon: '📊',
    description:
      'Center, spread and position for a sample: mean, median, sample variance with n − 1, quartiles and the IQR, z-scores, the five-number summary, outlier rules, the empirical rule and Chebyshev.',
    sections: [
      {
        title: 'Center',
        items: [
          {
            label: '[[stat-sample-mean|Sample mean]] and population mean',
            tex: '\\begin{aligned} &\\bar{x} = \\frac{1}{n}\\sum_{i=1}^{n} x_i, \\\\ &\\mu = \\frac{1}{N}\\sum_{i=1}^{N} x_i \\end{aligned}',
            text: 'The balance point of the data. Pulled toward long tails and outliers.',
          },
          { label: 'Weighted mean', tex: '\\bar{x}_w = \\frac{\\sum w_i x_i}{\\sum w_i}', text: 'E.g. average over servers weighted by player count.' },
          {
            label: '[[stat-median|Median]]',
            text: 'Sort the data; the middle value ($n$ odd) or the average of the two middle values ($n$ even). Position $\\frac{n+1}{2}$ in sorted order. Resistant to outliers.',
          },
          {
            label: 'Mode, trimmed mean',
            text: 'The mode is the most frequent value (the only "center" for categorical data). A $10\\%$ trimmed mean drops the lowest and highest $10\\%$ before averaging.',
          },
          {
            label: 'Shape from center',
            text: 'Right-skewed (long right tail, e.g. session lengths, frame times): mean $>$ median. Left-skewed: mean $<$ median. Symmetric: about equal.',
          },
        ],
      },
      {
        title: 'Spread',
        items: [
          {
            label: '[[stat-sample-variance|Sample variance]] and standard deviation',
            tex: '\\begin{aligned} &s^2 = \\frac{1}{n - 1}\\sum_{i=1}^{n}(x_i - \\bar{x})^2, \\\\ &s = \\sqrt{s^2} \\end{aligned}',
            text: 'Divide by $n - 1$ (not $n$) so that $E[S^2] = \\sigma^2$: the deviations from $\\bar{x}$ rather than $\\mu$ are slightly too small, and only $n - 1$ of them are free. Population: $\\sigma^2 = \\frac{1}{N}\\sum (x_i - \\mu)^2$.',
          },
          {
            label: 'Computational form',
            tex: 's^2 = \\frac{\\sum x_i^2 - n\\bar{x}^2}{n - 1}',
            text: 'One pass over the data, but it can lose precision when the mean is large; Welford\'s algorithm is the numerically stable streaming version.',
          },
          { label: 'Range and [[stat-iqr|IQR]]', tex: '\\text{range} = \\max - \\min, \\qquad \\text{IQR} = Q_3 - Q_1', text: 'The IQR spans the middle $50\\%$ and resists outliers.' },
          { label: 'Coefficient of variation', tex: 'CV = \\frac{s}{\\bar{x}}', text: 'Spread relative to the mean, for comparing data on different scales (positive data only).' },
        ],
      },
      {
        title: 'Position and outliers',
        items: [
          {
            label: '[[stat-z-score|$z$-score]]',
            tex: 'z = \\frac{x - \\bar{x}}{s} \\quad \\left(\\text{or } \\frac{x - \\mu}{\\sigma}\\right)',
            text: 'How many standard deviations a value lies from the mean; unit-free.',
          },
          {
            label: 'Percentiles and quartiles',
            text: 'The $p$-th [[stat-percentile|percentile]] has about $p\\%$ of the data at or below it. $Q_1$ = 25th, $Q_2$ = median, $Q_3$ = 75th percentile (software conventions differ slightly for small $n$).',
          },
          {
            label: '[[stat-five-number-summary|Five-number summary]] and [[stat-boxplot|boxplot]]',
            tex: '\\min, \\ Q_1, \\ \\text{median}, \\ Q_3, \\ \\max',
          },
          {
            label: '$1.5 \\times$ IQR rule for [[stat-outlier|outliers]]',
            tex: 'x < Q_1 - 1.5\\,\\text{IQR} \\quad \\text{or} \\quad x > Q_3 + 1.5\\,\\text{IQR}',
            text: 'Flags points for a closer look; it does not prove they are errors. Robust alternative to $|z| > 3$.',
          },
        ],
      },
      {
        title: 'How much data lies near the mean',
        items: [
          {
            label: '[[stat-empirical-rule|Empirical rule]] (bell-shaped data)',
            tex: '\\begin{aligned} &\\approx 68\\% \\text{ within } 1\\sigma \\\\ &\\approx 95\\% \\text{ within } 2\\sigma \\\\ &\\approx 99.7\\% \\text{ within } 3\\sigma \\end{aligned}',
            text: 'Exact normal values: $68.27\\%$, $95.45\\%$, $99.73\\%$.',
          },
          {
            label: '[[stat-chebyshev-inequality|Chebyshev]] (any distribution)',
            tex: 'P(|X - \\mu| < k\\sigma) \\ge 1 - \\frac{1}{k^2}',
            text: 'At least $75\\%$ within $2\\sigma$ and $88.9\\%$ within $3\\sigma$, whatever the shape.',
          },
        ],
      },
    ],
  },

  // ------------------------------------------------------------------
  {
    id: 'stat-probability',
    title: 'Probability Rules & Bayes',
    course: 'stats',
    icon: '🎲',
    description:
      'Axioms, complements and unions, conditional probability and independence, the law of total probability, Bayes\' theorem in standard and odds form, and counting.',
    sections: [
      {
        title: 'Basic rules',
        items: [
          { label: 'Axioms', tex: '\\begin{aligned} &P(A) \\ge 0, \\\\ &P(S) = 1, \\\\ &A \\cap B = \\varnothing \\implies P(A \\cup B) = P(A) + P(B) \\end{aligned}' },
          { label: 'Complement', tex: 'P(A^c) = 1 - P(A)', text: '$P(\\text{at least one}) = 1 - P(\\text{none})$: e.g. at least one crit in $5$ hits at $20\\%$ is $1 - 0.8^5 \\approx 0.672$.' },
          { label: 'Addition rule', tex: 'P(A \\cup B) = P(A) + P(B) - P(A \\cap B)' },
          { label: 'Three events', tex: '\\begin{aligned} P(A \\cup B \\cup C) = {} &P(A) + P(B) + P(C) \\\\ &- P(AB) - P(AC) - P(BC) \\\\ &+ P(ABC) \\end{aligned}' },
          { label: 'Equally likely outcomes', tex: 'P(A) = \\frac{|A|}{|S|}' },
        ],
      },
      {
        title: 'Conditioning and independence',
        items: [
          { label: '[[dm-conditional-probability|Conditional probability]]', tex: 'P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)}, \\quad P(B) > 0' },
          { label: 'Multiplication rule', tex: '\\begin{aligned} &P(A \\cap B) = P(A \\mid B)\\,P(B) \\\\ &P(A_1 \\cdots A_n) = P(A_1)P(A_2 \\mid A_1) \\\\ &\\qquad\\cdots P(A_n \\mid A_1 \\cdots A_{n-1}) \\end{aligned}' },
          {
            label: '[[dm-independent-events|Independence]]',
            tex: '\\begin{aligned} A \\perp B &\\iff P(A \\cap B) = P(A)\\,P(B) \\\\ &\\iff P(A \\mid B) = P(A) \\end{aligned}',
            text: 'Disjoint events with positive probabilities are never independent: knowing one happened rules out the other.',
          },
          {
            label: 'Law of total probability',
            tex: '\\begin{aligned} &P(A) = \\sum_{i} P(A \\mid B_i)\\,P(B_i) \\\\ &(B_1, B_2, \\dots \\text{ a partition of } S) \\end{aligned}',
          },
        ],
      },
      {
        title: 'Bayes\' theorem',
        items: [
          {
            label: '[[dm-bayes-theorem|Bayes\' theorem]]',
            tex: 'P(B_j \\mid A) = \\frac{P(A \\mid B_j)\\,P(B_j)}{\\sum_i P(A \\mid B_i)\\,P(B_i)}',
          },
          {
            label: 'Odds form',
            tex: '\\frac{P(H \\mid E)}{P(H^c \\mid E)} = \\frac{P(E \\mid H)}{P(E \\mid H^c)} \\cdot \\frac{P(H)}{P(H^c)}',
            text: 'Posterior odds = likelihood ratio $\\times$ prior odds. Independent pieces of evidence multiply their likelihood ratios.',
          },
          {
            label: 'Base rates: a worked example',
            tex: 'P(\\text{cheat} \\mid \\text{flag}) = \\frac{0.01(0.90)}{0.01(0.90) + 0.99(0.02)} = 0.3125',
            text: '$1\\%$ prevalence, $90\\%$ detection, $2\\%$ false positives: over two-thirds of flags are innocent. Sensitivity $P(+ \\mid D)$, specificity $P(- \\mid D^c)$.',
          },
        ],
      },
      {
        title: 'Counting',
        items: [
          { label: 'Ordered selections (permutations)', tex: 'P(n, k) = \\frac{n!}{(n - k)!}' },
          { label: 'Unordered selections ([[binomial-coefficient|combinations]])', tex: '\\binom{n}{k} = \\frac{n!}{k!\\,(n - k)!}' },
          { label: 'With replacement', tex: '\\begin{aligned} &n^k \\text{ ordered}, \\\\ &\\binom{n + k - 1}{k} \\text{ unordered} \\end{aligned}' },
        ],
      },
    ],
  },

  // ------------------------------------------------------------------
  {
    id: 'stat-discrete-distributions',
    title: 'Discrete Distributions',
    course: 'stats',
    icon: '🔢',
    description:
      'PMFs and CDFs, expectation and variance rules, and the Bernoulli, binomial, geometric, negative binomial, hypergeometric and Poisson distributions with their means, variances and uses.',
    sections: [
      {
        title: 'Random variables',
        items: [
          { label: '[[stat-pmf|PMF]] and [[stat-cdf|CDF]]', tex: '\\begin{aligned} &p_X(x) = P(X = x), \\\\ &F_X(x) = P(X \\le x) = \\sum_{t \\le x} p_X(t) \\end{aligned}' },
          { label: 'Expectation', tex: 'E[X] = \\sum_x x\\,p_X(x), \\qquad E[g(X)] = \\sum_x g(x)\\,p_X(x)' },
          { label: 'Variance', tex: '\\operatorname{Var}(X) = E[(X - \\mu)^2] = E[X^2] - (E[X])^2' },
          {
            label: 'Linear rules',
            tex: '\\begin{aligned} &E[aX + b] = aE[X] + b, \\\\ &\\operatorname{Var}(aX + b) = a^2\\operatorname{Var}(X) \\end{aligned}',
            text: '$E[X + Y] = E[X] + E[Y]$ always; $\\operatorname{Var}(X + Y) = \\operatorname{Var}(X) + \\operatorname{Var}(Y)$ when $X, Y$ are independent.',
          },
        ],
      },
      {
        title: 'The standard distributions',
        items: [
          {
            label: 'PMFs ($q = 1 - p$)',
            tex: '\\def\\arraystretch{1.6}\\begin{array}{l|l} \\text{Distribution} & p_X(k) \\\\ \\hline \\text{Bernoulli}(p) & p^k q^{1-k}, \\ k \\in \\{0, 1\\} \\\\ \\text{Bin}(n, p) & \\binom{n}{k}p^k q^{n-k}, \\ 0 \\le k \\le n \\\\ \\text{Geom}(p) & q^{k-1}p, \\ k = 1, 2, \\dots \\\\ \\text{NegBin}(r, p) & \\binom{k-1}{r-1}p^r q^{k-r}, \\ k = r, r+1, \\dots \\\\ \\text{Hypergeo}(N, K, n) & \\frac{\\binom{K}{k}\\binom{N-K}{n-k}}{\\binom{N}{n}} \\\\ \\text{Pois}(\\lambda) & \\frac{e^{-\\lambda}\\lambda^k}{k!}, \\ k = 0, 1, 2, \\dots \\end{array}',
            text: 'Geometric and negative binomial here count **trials** (including the successes); some software counts failures instead, which subtracts $1$ (or $r$) from the mean.',
          },
          {
            label: 'Means and variances',
            tex: '\\def\\arraystretch{1.6}\\begin{array}{l|c|c} \\text{Distribution} & E[X] & \\operatorname{Var}(X) \\\\ \\hline \\text{Bernoulli}(p) & p & pq \\\\ \\text{Bin}(n, p) & np & npq \\\\ \\text{Geom}(p) & \\frac{1}{p} & \\frac{q}{p^2} \\\\ \\text{NegBin}(r, p) & \\frac{r}{p} & \\frac{rq}{p^2} \\\\ \\text{Hypergeo}(N, K, n) & n\\frac{K}{N} & n\\frac{K}{N}\\Big(1 - \\frac{K}{N}\\Big)\\frac{N - n}{N - 1} \\\\ \\text{Pois}(\\lambda) & \\lambda & \\lambda \\end{array}',
          },
          {
            label: 'When to use which',
            text: '**Bernoulli**: one success/failure trial. **Binomial**: number of successes in $n$ independent trials with the same $p$. **Geometric**: trials until the first success (the first rare drop). **Negative binomial**: trials until the $r$th success. **Hypergeometric**: successes in $n$ draws without replacement from a finite pool (cards from a deck). **Poisson**: counts of rare, independent events in a fixed interval (crashes per day, messages per second).',
          },
          {
            label: '[[dm-binomial-distribution|Binomial]] conditions (BINS)',
            text: '**B**inary outcomes, **I**ndependent trials, fixed **N**umber of trials, the **S**ame $p$ each trial. Example: $\\text{Bin}(10, 0.3)$ has mean $3$ and variance $2.1$.',
          },
          {
            label: '[[dm-geometric-distribution|Geometric]] memorylessness',
            tex: '\\begin{aligned} &P(X > k) = q^k \\\\ &P(X > m + k \\mid X > m) = P(X > k) \\end{aligned}',
            text: 'Past failures do not make the next success more likely: no "due" drops.',
          },
          {
            label: '[[stat-hypergeometric-distribution|Hypergeometric]] vs binomial',
            text: 'Drawing without replacement multiplies the binomial variance by the [[stat-finite-population-correction|finite population correction]] $\\frac{N - n}{N - 1}$. If $n \\le 5\\%$ of $N$, the binomial is a fine approximation.',
          },
          {
            label: '[[stat-poisson-distribution|Poisson]] facts',
            tex: '\\begin{aligned} &\\text{Bin}(n, p) \\approx \\text{Pois}(np) \\quad (n \\text{ large}, p \\text{ small}) \\\\ &X \\sim \\text{Pois}(\\lambda_1),\\ Y \\sim \\text{Pois}(\\lambda_2) \\text{ independent} \\\\ &\\quad\\implies X + Y \\sim \\text{Pois}(\\lambda_1 + \\lambda_2) \\end{aligned}',
            text: 'Mean = variance is the Poisson signature; variance much larger than the mean signals overdispersion (e.g. crashes clustered after a bad patch).',
          },
        ],
      },
    ],
  },

  // ------------------------------------------------------------------
  {
    id: 'stat-continuous-distributions',
    title: 'Continuous Distributions',
    course: 'stats',
    icon: '📈',
    description:
      'Densities and CDFs, the uniform, exponential, normal, gamma, t and chi-square distributions with their means and variances, standardizing, Φ values and the z and t critical values you need most.',
    sections: [
      {
        title: 'Densities',
        items: [
          {
            label: '[[stat-pdf|PDF]] and CDF',
            tex: '\\begin{aligned} &P(a \\le X \\le b) = \\int_a^b f_X(x)\\,dx = F_X(b) - F_X(a), \\\\ &f_X(x) = F_X\'(x) \\end{aligned}',
            text: '$P(X = a) = 0$ for a continuous variable, so $<$ and $\\le$ give the same probabilities. A density can exceed $1$; its total area is $1$.',
          },
          { label: 'Expectation and variance', tex: '\\begin{aligned} &E[X] = \\int_{-\\infty}^{\\infty} x f_X(x)\\,dx, \\\\ &\\operatorname{Var}(X) = \\int (x - \\mu)^2 f_X(x)\\,dx = E[X^2] - \\mu^2 \\end{aligned}' },
          { label: 'Percentile (quantile)', tex: 'F_X(x_p) = p \\iff x_p = F_X^{-1}(p)' },
        ],
      },
      {
        title: 'The standard distributions',
        items: [
          {
            label: 'Densities (rate convention: $\\text{Exp}(\\lambda)$ has mean $1/\\lambda$)',
            tex: '\\def\\arraystretch{1.6}\\begin{array}{l|l} \\text{Distribution} & f_X(x) \\\\ \\hline \\text{Uniform}(a, b) & \\frac{1}{b - a}, \\ a \\le x \\le b \\\\ \\text{Exp}(\\lambda) & \\lambda e^{-\\lambda x}, \\ x \\ge 0 \\\\ N(\\mu, \\sigma^2) & \\frac{1}{\\sigma\\sqrt{2\\pi}}e^{-(x - \\mu)^2/(2\\sigma^2)} \\\\ \\text{Gamma}(k, \\lambda) & \\frac{\\lambda^k x^{k-1}e^{-\\lambda x}}{\\Gamma(k)}, \\ x > 0 \\\\ t_\\nu & \\frac{\\Gamma(\\frac{\\nu+1}{2})}{\\sqrt{\\nu\\pi}\\,\\Gamma(\\frac{\\nu}{2})}\\Big(1 + \\frac{x^2}{\\nu}\\Big)^{-\\frac{\\nu+1}{2}} \\\\ \\chi^2_k & \\frac{x^{k/2 - 1}e^{-x/2}}{2^{k/2}\\,\\Gamma(k/2)}, \\ x > 0 \\end{array}',
            text: '$\\Gamma(a) = \\int_0^\\infty u^{a-1}e^{-u}\\,du$, $\\Gamma(n) = (n - 1)!$, $\\Gamma(\\frac{1}{2}) = \\sqrt{\\pi}$.',
          },
          {
            label: 'Means and variances',
            tex: '\\def\\arraystretch{1.6}\\begin{array}{l|c|c} \\text{Distribution} & E[X] & \\operatorname{Var}(X) \\\\ \\hline \\text{Uniform}(a, b) & \\frac{a + b}{2} & \\frac{(b - a)^2}{12} \\\\ \\text{Exp}(\\lambda) & \\frac{1}{\\lambda} & \\frac{1}{\\lambda^2} \\\\ N(\\mu, \\sigma^2) & \\mu & \\sigma^2 \\\\ \\text{Gamma}(k, \\lambda) & \\frac{k}{\\lambda} & \\frac{k}{\\lambda^2} \\\\ t_\\nu & 0 \\ (\\nu > 1) & \\frac{\\nu}{\\nu - 2} \\ (\\nu > 2) \\\\ \\chi^2_k & k & 2k \\end{array}',
          },
          {
            label: '[[stat-exponential-distribution|Exponential]]',
            tex: '\\begin{aligned} &F(x) = 1 - e^{-\\lambda x}, \\\\ &P(X > s + t \\mid X > s) = P(X > t) \\end{aligned}',
            text: 'Memoryless waiting time between events of a Poisson process with rate $\\lambda$.',
          },
          {
            label: 'Building blocks',
            text: '[[stat-gamma-distribution|Gamma]]$(k, \\lambda)$ = sum of $k$ independent $\\text{Exp}(\\lambda)$ (whole $k$). [[stat-chi-square-distribution|Chi-square]] $\\chi^2_k$ = sum of $k$ squared independent $N(0, 1)$ = Gamma$(k/2, 1/2)$. [[stat-t-distribution|$t_\\nu$]] $= Z/\\sqrt{V/\\nu}$ with $Z \\sim N(0,1)$, $V \\sim \\chi^2_\\nu$ independent; $t_\\nu \\to N(0, 1)$ as $\\nu \\to \\infty$.',
          },
        ],
      },
      {
        title: 'The normal distribution',
        items: [
          {
            label: 'Standardizing ([[stat-standard-normal|standard normal]])',
            tex: '\\begin{aligned} &Z = \\frac{X - \\mu}{\\sigma} \\sim N(0, 1), \\\\ &P(X \\le x) = \\Phi\\left(\\frac{x - \\mu}{\\sigma}\\right), \\\\ &\\Phi(-z) = 1 - \\Phi(z) \\end{aligned}',
          },
          {
            label: '$\\Phi(z)$ essentials',
            tex: '\\def\\arraystretch{1.6}\\begin{array}{c|c|c|c} z & \\Phi(z) & z & \\Phi(z) \\\\ \\hline 0.5 & 0.6915 & 1.96 & 0.9750 \\\\ 1 & 0.8413 & 2 & 0.9772 \\\\ 1.282 & 0.9000 & 2.326 & 0.9900 \\\\ 1.5 & 0.9332 & 2.576 & 0.9950 \\\\ 1.645 & 0.9500 & 3 & 0.9987 \\end{array}',
          },
          {
            label: 'Critical values $z_{\\alpha/2}$ for confidence level $C = 1 - \\alpha$',
            tex: '\\def\\arraystretch{1.6}\\begin{array}{c|c|c} C & \\alpha & z_{\\alpha/2} \\\\ \\hline 80\\% & 0.20 & 1.282 \\\\ 90\\% & 0.10 & 1.645 \\\\ 95\\% & 0.05 & 1.960 \\\\ 98\\% & 0.02 & 2.326 \\\\ 99\\% & 0.01 & 2.576 \\\\ 99.9\\% & 0.001 & 3.291 \\end{array}',
            text: 'So $z_{0.05} = 1.645$ (the $90\\%$ two-sided or $95\\%$ one-sided value), $z_{0.025} = 1.96$, $z_{0.005} = 2.576$; also $z_{0.01} = 2.326$ and $z_{0.20} = 0.842$ (for $80\\%$ power).',
          },
          {
            label: '$t$ critical values $t_{\\alpha,\\,\\nu}$ (upper-tail area $\\alpha$)',
            tex: '\\def\\arraystretch{1.6}\\begin{array}{c|c|c|c} \\nu & t_{0.05} & t_{0.025} & t_{0.005} \\\\ \\hline 1 & 6.314 & 12.706 & 63.657 \\\\ 2 & 2.920 & 4.303 & 9.925 \\\\ 3 & 2.353 & 3.182 & 5.841 \\\\ 4 & 2.132 & 2.776 & 4.604 \\\\ 5 & 2.015 & 2.571 & 4.032 \\\\ 10 & 1.812 & 2.228 & 3.169 \\\\ 15 & 1.753 & 2.131 & 2.947 \\\\ 20 & 1.725 & 2.086 & 2.845 \\\\ 30 & 1.697 & 2.042 & 2.750 \\\\ 60 & 1.671 & 2.000 & 2.660 \\\\ \\infty & 1.645 & 1.960 & 2.576 \\end{array}',
            text: '$t_{0.025,\\,\\nu}$ is the $95\\%$ two-sided value, $t_{0.005,\\,\\nu}$ the $99\\%$ one. The $\\infty$ row is the normal.',
          },
          {
            label: 'Normal approximation to the binomial',
            tex: '\\begin{aligned} &X \\sim \\text{Bin}(n, p) \\approx N(np,\\ np(1 - p)), \\\\ &P(X \\le k) \\approx \\Phi\\left(\\frac{k + 0.5 - np}{\\sqrt{np(1-p)}}\\right) \\end{aligned}',
            text: 'Use when $np \\ge 10$ and $n(1 - p) \\ge 10$; the $+0.5$ is the [[stat-continuity-correction|continuity correction]].',
          },
        ],
      },
    ],
  },

  // ------------------------------------------------------------------
  {
    id: 'stat-joint-limits',
    title: 'Joint Distributions & Limit Theorems',
    course: 'stats',
    icon: '🔗',
    description:
      'Joint, marginal and conditional distributions, covariance and correlation, means and variances of sums, Markov and Chebyshev inequalities, the law of large numbers and the central limit theorem.',
    sections: [
      {
        title: 'Joint distributions',
        items: [
          {
            label: '[[stat-joint-distribution|Joint]] and [[stat-marginal-distribution|marginal]]',
            tex: '\\begin{aligned} &p_X(x) = \\sum_y p_{X,Y}(x, y), \\\\ &f_X(x) = \\int_{-\\infty}^{\\infty} f_{X,Y}(x, y)\\,dy \\end{aligned}',
          },
          { label: 'Conditional', tex: '\\begin{aligned} &f_{Y \\mid X}(y \\mid x) = \\frac{f_{X,Y}(x, y)}{f_X(x)}, \\\\ &E[Y] = E\\big[E[Y \\mid X]\\big] \\end{aligned}' },
          { label: 'Independence', tex: 'X \\perp Y \\iff f_{X,Y}(x, y) = f_X(x)\\,f_Y(y) \\text{ for all } x, y' },
          { label: 'Expectation of a function', tex: 'E[g(X, Y)] = \\iint g(x, y)\\,f_{X,Y}(x, y)\\,dx\\,dy' },
        ],
      },
      {
        title: 'Covariance and correlation',
        items: [
          { label: '[[stat-covariance|Covariance]]', tex: '\\begin{aligned} \\operatorname{Cov}(X, Y) &= E[(X - \\mu_X)(Y - \\mu_Y)] \\\\ &= E[XY] - E[X]E[Y] \\end{aligned}' },
          {
            label: '[[stat-correlation|Correlation]]',
            tex: '\\begin{aligned} &\\rho = \\frac{\\operatorname{Cov}(X, Y)}{\\sigma_X\\sigma_Y}, \\\\ &-1 \\le \\rho \\le 1 \\end{aligned}',
            text: '$|\\rho| = 1$ only for an exact linear relation. Independent $\\implies \\rho = 0$, but $\\rho = 0$ does not imply independence ($Y = X^2$ with $X$ symmetric). Correlation is not causation.',
          },
          { label: 'Bilinearity', tex: '\\begin{aligned} &\\operatorname{Cov}(aX + b, cY + d) = ac\\operatorname{Cov}(X, Y), \\\\ &\\operatorname{Cov}(X, X) = \\operatorname{Var}(X) \\end{aligned}' },
        ],
      },
      {
        title: 'Sums and averages',
        items: [
          { label: 'Linear combinations', tex: '\\begin{aligned} &E[aX + bY] = aE[X] + bE[Y] \\\\ &\\operatorname{Var}(aX + bY) = a^2\\operatorname{Var}(X) + b^2\\operatorname{Var}(Y) \\\\ &\\qquad\\qquad + 2ab\\operatorname{Cov}(X, Y) \\end{aligned}' },
          { label: 'Independent sum', tex: '\\operatorname{Var}(X_1 + \\cdots + X_n) = \\sum \\operatorname{Var}(X_i) \\quad \\text{(independent)}', text: 'Variances add, standard deviations do not. $\\operatorname{Var}(X - Y) = \\operatorname{Var}(X) + \\operatorname{Var}(Y)$ for independent $X, Y$.' },
          {
            label: 'Sample mean of i.i.d. data',
            tex: '\\begin{aligned} &E[\\bar{X}] = \\mu, \\\\ &\\operatorname{Var}(\\bar{X}) = \\frac{\\sigma^2}{n}, \\\\ &\\operatorname{SD}(\\bar{X}) = \\frac{\\sigma}{\\sqrt{n}} \\end{aligned}',
          },
          {
            label: 'Closed families',
            text: 'Independent normals: $aX + bY \\sim N(a\\mu_X + b\\mu_Y,\\ a^2\\sigma_X^2 + b^2\\sigma_Y^2)$. Independent Poissons add to a Poisson; binomials with the same $p$ add to a binomial. In general the density of a sum is a convolution: $f_{X+Y}(s) = \\int f_X(x)f_Y(s - x)\\,dx$.',
          },
        ],
      },
      {
        title: 'Inequalities and limit theorems',
        items: [
          { label: '[[stat-markov-inequality|Markov]] ($X \\ge 0$)', tex: 'P(X \\ge a) \\le \\frac{E[X]}{a}, \\quad a > 0' },
          { label: '[[stat-chebyshev-inequality|Chebyshev]]', tex: 'P(|X - \\mu| \\ge k\\sigma) \\le \\frac{1}{k^2}' },
          {
            label: '[[stat-law-of-large-numbers|Law of large numbers]]',
            tex: 'P\\left(|\\bar{X}_n - \\mu| \\ge \\varepsilon\\right) \\le \\frac{\\sigma^2}{n\\varepsilon^2} \\to 0',
            text: 'Sample averages converge to the mean (Chebyshev applied to $\\bar{X}_n$). It says nothing about "evening out" in the short run.',
          },
          {
            label: '[[stat-central-limit-theorem|Central limit theorem]]',
            tex: '\\begin{aligned} &\\frac{\\bar{X}_n - \\mu}{\\sigma/\\sqrt{n}} \\xrightarrow{d} N(0, 1), \\\\ &\\sum_{i=1}^{n} X_i \\approx N(n\\mu,\\ n\\sigma^2) \\end{aligned}',
            text: 'For i.i.d. data with finite variance. Rule of thumb $n \\ge 30$; more for strongly skewed data, fewer for symmetric data.',
          },
        ],
      },
    ],
  },

  // ------------------------------------------------------------------
  {
    id: 'stat-estimation',
    title: 'Estimation',
    course: 'stats',
    icon: '📏',
    description:
      'Bias, MSE and standard errors; maximum likelihood; confidence intervals for means, proportions and differences; and sample-size formulas.',
    sections: [
      {
        title: 'Estimators',
        items: [
          {
            label: '[[stat-estimator-bias|Bias]] and [[stat-mean-squared-error|MSE]]',
            tex: '\\begin{aligned} &\\operatorname{Bias}(\\hat{\\theta}) = E[\\hat{\\theta}] - \\theta, \\\\ &\\operatorname{MSE}(\\hat{\\theta}) = \\operatorname{Var}(\\hat{\\theta}) + \\operatorname{Bias}(\\hat{\\theta})^2 \\end{aligned}',
            text: 'Unbiased: $\\bar{X}$ for $\\mu$, $\\hat{p}$ for $p$, $S^2$ (with $n - 1$) for $\\sigma^2$. Consistent: $\\hat{\\theta}_n \\to \\theta$ as $n \\to \\infty$.',
          },
          {
            label: '[[stat-maximum-likelihood|Maximum likelihood]]',
            tex: '\\begin{aligned} &L(\\theta) = \\prod_{i=1}^{n} f(x_i \\mid \\theta), \\\\ &\\hat{\\theta}_{\\text{MLE}} = \\arg\\max_\\theta \\ln L(\\theta) \\quad \\left(\\text{solve } \\frac{d}{d\\theta}\\ln L = 0\\right) \\end{aligned}',
          },
          {
            label: 'Standard MLEs',
            tex: '\\begin{aligned} &\\text{Bernoulli: } \\hat{p} = \\bar{x} \\qquad \\text{Poisson: } \\hat{\\lambda} = \\bar{x} \\\\ &\\text{Exp}(\\lambda)\\text{: } \\hat{\\lambda} = \\frac{1}{\\bar{x}} \\\\ &\\text{Normal: } \\hat{\\mu} = \\bar{x},\\ \\hat{\\sigma}^2 = \\frac{1}{n}\\sum (x_i - \\bar{x})^2 \\end{aligned}',
            text: 'The normal MLE of $\\sigma^2$ divides by $n$ and is slightly biased. MLEs are invariant: the MLE of $g(\\theta)$ is $g(\\hat{\\theta})$.',
          },
          { label: 'Method of moments', text: 'Set sample moments equal to population moments and solve, e.g. $\\bar{x} = k/\\lambda$ and $s^2 = k/\\lambda^2$ for a Gamma give $\\hat{\\lambda} = \\bar{x}/s^2$, $\\hat{k} = \\bar{x}^2/s^2$.' },
        ],
      },
      {
        title: 'Standard errors',
        items: [
          { label: '[[stat-standard-error|Standard error]] of a mean', tex: '\\operatorname{SE}(\\bar{x}) = \\frac{\\sigma}{\\sqrt{n}} \\approx \\frac{s}{\\sqrt{n}}' },
          { label: 'Proportion', tex: '\\operatorname{SE}(\\hat{p}) = \\sqrt{\\frac{\\hat{p}(1 - \\hat{p})}{n}}' },
          { label: 'Difference of means (independent)', tex: '\\operatorname{SE}(\\bar{x}_1 - \\bar{x}_2) = \\sqrt{\\frac{s_1^2}{n_1} + \\frac{s_2^2}{n_2}}' },
          { label: 'Difference of proportions', tex: '\\operatorname{SE}(\\hat{p}_1 - \\hat{p}_2) = \\sqrt{\\frac{\\hat{p}_1(1 - \\hat{p}_1)}{n_1} + \\frac{\\hat{p}_2(1 - \\hat{p}_2)}{n_2}}' },
          { label: 'Paired data', tex: '\\operatorname{SE}(\\bar{d}) = \\frac{s_d}{\\sqrt{n}}, \\quad d_i = x_i - y_i', text: 'Analyze the differences as one sample (same player before and after a patch).' },
        ],
      },
      {
        title: 'Confidence intervals',
        items: [
          { label: 'General shape of a [[stat-confidence-interval|confidence interval]]', tex: '\\text{estimate} \\pm (\\text{critical value}) \\times \\operatorname{SE}' },
          { label: 'Mean, $\\sigma$ known', tex: '\\bar{x} \\pm z_{\\alpha/2}\\frac{\\sigma}{\\sqrt{n}}' },
          { label: 'Mean, $\\sigma$ unknown', tex: '\\bar{x} \\pm t_{\\alpha/2,\\,n-1}\\frac{s}{\\sqrt{n}}', text: 'Assumes roughly normal data or large $n$.' },
          {
            label: 'Proportion (Wald and [[stat-wilson-interval|Wilson]])',
            tex: '\\begin{aligned} &\\hat{p} \\pm z_{\\alpha/2}\\sqrt{\\frac{\\hat{p}(1 - \\hat{p})}{n}}, \\\\ &\\frac{\\hat{p} + \\frac{z^2}{2n} \\pm z\\sqrt{\\frac{\\hat{p}(1-\\hat{p})}{n} + \\frac{z^2}{4n^2}}}{1 + \\frac{z^2}{n}} \\end{aligned}',
            text: 'Wald needs $n\\hat{p} \\ge 10$ and $n(1 - \\hat{p}) \\ge 10$; Wilson behaves well for small $n$ and rates near $0$ or $1$ (e.g. $7/20$: Wald $[0.141, 0.559]$, Wilson $[0.181, 0.567]$).',
          },
          {
            label: 'Difference of means (Welch)',
            tex: '\\begin{aligned} &(\\bar{x}_1 - \\bar{x}_2) \\pm t_{\\alpha/2,\\,\\nu}\\sqrt{\\frac{s_1^2}{n_1} + \\frac{s_2^2}{n_2}}, \\\\ &\\nu = \\frac{\\left(\\frac{s_1^2}{n_1} + \\frac{s_2^2}{n_2}\\right)^2}{\\frac{(s_1^2/n_1)^2}{n_1 - 1} + \\frac{(s_2^2/n_2)^2}{n_2 - 1}} \\end{aligned}',
            text: 'Conservative shortcut: $\\nu = \\min(n_1, n_2) - 1$.',
          },
          { label: 'Difference of proportions', tex: '(\\hat{p}_1 - \\hat{p}_2) \\pm z_{\\alpha/2}\\sqrt{\\frac{\\hat{p}_1(1 - \\hat{p}_1)}{n_1} + \\frac{\\hat{p}_2(1 - \\hat{p}_2)}{n_2}}' },
          {
            label: 'Interpretation',
            text: '$95\\%$ of intervals built this way cover the true parameter over repeated samples. A computed interval either contains $\\theta$ or not; it is **not** "$95\\%$ of the data" nor "$P(\\theta \\in [a, b]) = 0.95$" (that is a Bayesian credible interval).',
          },
        ],
      },
      {
        title: 'Sample size for a margin of error E',
        items: [
          { label: 'Mean', tex: 'n = \\left(\\frac{z_{\\alpha/2}\\,\\sigma}{E}\\right)^2' },
          {
            label: 'Proportion',
            tex: 'n = \\frac{z_{\\alpha/2}^2\\,p(1 - p)}{E^2} \\le \\frac{z_{\\alpha/2}^2}{4E^2}',
            text: 'Round **up**. With no guess for $p$ use $p = 0.5$: $\\pm 3$ points at $95\\%$ needs $n = 1.96^2/(4 \\cdot 0.03^2) \\approx 1067.1$, so $1068$. Halving $E$ quadruples $n$.',
          },
        ],
      },
    ],
  },

  // ------------------------------------------------------------------
  {
    id: 'stat-hypothesis-tests',
    title: 'Hypothesis Tests',
    course: 'stats',
    icon: '⚖️',
    description:
      'The steps of a test, what a p-value does and does not mean, error types and power, the common z, t and chi-square tests with their conditions and degrees of freedom, and multiple comparisons.',
    sections: [
      {
        title: 'The logic',
        items: [
          {
            label: 'Steps',
            text: '(1) State $H_0$ (no effect, e.g. $\\mu = \\mu_0$) and $H_a$ ($\\ne$, $<$ or $>$) **before** looking at the data. (2) Choose $\\alpha$. (3) Check conditions. (4) Compute the test statistic. (5) Find the $p$-value. (6) Reject $H_0$ if $p \\le \\alpha$; state the conclusion in context.',
          },
          {
            label: 'Test statistic',
            tex: '\\text{statistic} = \\frac{\\text{estimate} - \\text{null value}}{\\operatorname{SE} \\text{ under } H_0}',
          },
          {
            label: '$p$-value',
            tex: '\\begin{aligned} p = P(&\\text{a statistic at least as} \\\\ &\\text{extreme as observed} \\mid H_0 \\text{ true}) \\end{aligned}',
            text: 'Two-sided $z$: $p = 2(1 - \\Phi(|z|))$. It is **not** $P(H_0 \\text{ true})$, not the probability the result is due to chance, and not a measure of effect size. Failing to reject does not prove $H_0$.',
          },
          {
            label: 'Duality with intervals',
            text: 'A two-sided test at level $\\alpha$ rejects $H_0\\colon \\theta = \\theta_0$ exactly when $\\theta_0$ lies outside the $(1 - \\alpha)$ confidence interval.',
          },
        ],
      },
      {
        title: 'Errors and power',
        items: [
          {
            label: 'Decision table',
            tex: '\\def\\arraystretch{1.5}\\begin{array}{l|c|c} & H_0 \\text{ true} & H_0 \\text{ false} \\\\ \\hline \\text{reject} & \\text{Type I } (\\alpha) & \\text{power } (1 - \\beta) \\\\ \\text{keep} & \\text{correct } (1 - \\alpha) & \\text{Type II } (\\beta) \\end{array}',
          },
          {
            label: 'Power of a one-sided $z$ test ($H_a\\colon \\mu > \\mu_0$, true mean $\\mu_1$)',
            tex: '1 - \\beta = \\Phi\\left(\\frac{(\\mu_1 - \\mu_0)\\sqrt{n}}{\\sigma} - z_\\alpha\\right)',
            text: 'Power rises with the effect size, $n$ and $\\alpha$, and falls with $\\sigma$. Example: $\\mu_1 - \\mu_0 = 0.5$, $\\sigma = 2$, $n = 40$, $\\alpha = 0.05$ gives power $\\approx 0.47$.',
          },
          {
            label: 'Sample size for power $1 - \\beta$ (two-sided)',
            tex: '\\begin{aligned} &n = \\left(\\frac{(z_{\\alpha/2} + z_\\beta)\\,\\sigma}{\\delta}\\right)^2, \\\\ &\\text{per group for two means: } n = \\frac{2(z_{\\alpha/2} + z_\\beta)^2\\sigma^2}{\\delta^2} \\end{aligned}',
            text: '$80\\%$ power at $\\alpha = 0.05$: $z_{\\alpha/2} + z_\\beta = 1.960 + 0.842 = 2.802$.',
          },
          {
            label: 'Multiple comparisons',
            tex: '\\begin{aligned} &P(\\text{at least one false positive}) = 1 - (1 - \\alpha)^m \\\\ &\\text{Bonferroni: test each at } \\alpha/m \\end{aligned}',
            text: '$20$ tests at $\\alpha = 0.05$: $1 - 0.95^{20} \\approx 0.64$. Peeking at a running A/B test and stopping at the first $p < 0.05$ has the same problem.',
          },
        ],
      },
      {
        title: 'Common tests',
        items: [
          {
            label: 'Test statistics for means and proportions',
            tex: '\\def\\arraystretch{1.8}\\begin{array}{l|c|c} \\text{Test} & \\text{Statistic} & \\text{df} \\\\ \\hline \\text{one-sample } z & \\frac{\\bar{x} - \\mu_0}{\\sigma/\\sqrt{n}} & - \\\\ \\text{one-sample } t & \\frac{\\bar{x} - \\mu_0}{s/\\sqrt{n}} & n - 1 \\\\ \\text{paired } t & \\frac{\\bar{d} - \\delta_0}{s_d/\\sqrt{n}} & n - 1 \\\\ \\text{Welch two-sample } t & \\frac{\\bar{x}_1 - \\bar{x}_2}{\\sqrt{s_1^2/n_1 + s_2^2/n_2}} & \\nu \\text{ (Welch)} \\\\ \\text{pooled two-sample } t & \\frac{\\bar{x}_1 - \\bar{x}_2}{s_p\\sqrt{1/n_1 + 1/n_2}} & n_1 + n_2 - 2 \\\\ \\text{one proportion} & \\frac{\\hat{p} - p_0}{\\sqrt{p_0(1 - p_0)/n}} & - \\\\ \\text{two proportions} & \\frac{\\hat{p}_1 - \\hat{p}_2}{\\sqrt{\\hat{p}(1 - \\hat{p})(1/n_1 + 1/n_2)}} & - \\\\ \\text{regression slope} & \\frac{b_1}{\\operatorname{SE}(b_1)} & n - 2 \\end{array}',
            text: 'Pooled variance $s_p^2 = \\frac{(n_1 - 1)s_1^2 + (n_2 - 1)s_2^2}{n_1 + n_2 - 2}$; pooled proportion $\\hat{p} = \\frac{x_1 + x_2}{n_1 + n_2}$. The $z$ statistics are compared with $N(0, 1)$, the others with $t_{\\text{df}}$.',
          },
          {
            label: 'Conditions',
            text: '**$z$ for a mean**: $\\sigma$ known; data normal or $n$ large. **One-sample and paired $t$**: random sample; data (or differences) roughly normal, or $n \\ge 30$. **Welch $t$**: independent groups, each roughly normal or large; **pooled $t$** also assumes equal variances. **One proportion**: $np_0 \\ge 10$ and $n(1 - p_0) \\ge 10$. **Two proportions**: at least $10$ successes and $10$ failures in each group. **Slope**: linear trend with independent, normal, equal-variance errors. Every test also needs independent observations (random sampling or random assignment). Prefer Welch unless you have a reason to assume equal variances.',
          },
          {
            label: 'Chi-square tests ([[stat-chi-square-statistic|statistic]])',
            tex: '\\chi^2 = \\sum_{\\text{cells}} \\frac{(O - E)^2}{E}',
          },
          {
            label: 'Expected counts and df',
            tex: '\\def\\arraystretch{1.8}\\begin{array}{l|c|c} \\text{Test} & E & \\text{df} \\\\ \\hline \\text{goodness of fit} & n\\,p_i & k - 1 \\\\ \\text{two-way table} & \\frac{R \\cdot C}{n} & (r - 1)(c - 1) \\end{array}',
            text: 'The two-way table case covers both the test of independence and the test of homogeneity; for each cell, $R$ and $C$ are its row and column totals. Conditions: counts (not percentages), independent observations, all [[stat-expected-count|expected counts]] $\\ge 5$. Always right-tailed. Subtract one more df per parameter estimated from the data.',
          },
          {
            label: 'Chi-square critical values $\\chi^2_{\\alpha,\\,\\text{df}}$',
            tex: '\\def\\arraystretch{1.6}\\begin{array}{c|c|c||c|c|c} \\text{df} & \\chi^2_{0.05} & \\chi^2_{0.01} & \\text{df} & \\chi^2_{0.05} & \\chi^2_{0.01} \\\\ \\hline 1 & 3.841 & 6.635 & 6 & 12.592 & 16.812 \\\\ 2 & 5.991 & 9.210 & 7 & 14.067 & 18.475 \\\\ 3 & 7.815 & 11.345 & 8 & 15.507 & 20.090 \\\\ 4 & 9.488 & 13.277 & 9 & 16.919 & 21.666 \\\\ 5 & 11.070 & 15.086 & 10 & 18.307 & 23.209 \\end{array}',
          },
        ],
      },
    ],
  },

  // ------------------------------------------------------------------
  {
    id: 'stat-regression-bayes',
    title: 'Regression & Bayesian',
    course: 'stats',
    icon: '📉',
    description:
      'Least-squares lines, correlation and R², inference for the slope, prediction intervals, multiple and logistic regression, and Bayesian updating with conjugate priors.',
    sections: [
      {
        title: 'Simple linear regression',
        items: [
          {
            label: 'Sums of squares',
            tex: '\\begin{aligned} &S_{xx} = \\sum (x_i - \\bar{x})^2, \\quad S_{yy} = \\sum (y_i - \\bar{y})^2 \\\\ &S_{xy} = \\sum (x_i - \\bar{x})(y_i - \\bar{y}) \\end{aligned}',
          },
          {
            label: '[[stat-least-squares-line|Least-squares line]] $\\hat{y} = b_0 + b_1 x$',
            tex: '\\begin{aligned} &b_1 = \\frac{S_{xy}}{S_{xx}} = r\\,\\frac{s_y}{s_x}, \\\\ &b_0 = \\bar{y} - b_1\\bar{x} \\end{aligned}',
            text: 'Minimizes $\\sum (y_i - \\hat{y}_i)^2$; the line passes through $(\\bar{x}, \\bar{y})$.',
          },
          { label: '[[stat-correlation|Correlation]] coefficient', tex: 'r = \\frac{S_{xy}}{\\sqrt{S_{xx}S_{yy}}} = \\frac{1}{n - 1}\\sum \\left(\\frac{x_i - \\bar{x}}{s_x}\\right)\\left(\\frac{y_i - \\bar{y}}{s_y}\\right)' },
          {
            label: '[[stat-coefficient-of-determination|$R^2$]]',
            tex: '\\begin{aligned} &R^2 = 1 - \\frac{SSE}{SST} \\\\ &SSE = \\sum (y_i - \\hat{y}_i)^2, \\quad SST = S_{yy} \\\\ &R^2 = r^2 \\text{ (one predictor)} \\end{aligned}',
            text: 'The fraction of the variation in $y$ explained by the line. Always plot the [[stat-residual|residuals]]: curvature or a funnel shape breaks the model.',
          },
          { label: 'Matrix form (normal equations)', tex: 'X^\\mathsf{T}X\\,\\hat{\\boldsymbol\\beta} = X^\\mathsf{T}\\mathbf{y} \\implies \\hat{\\boldsymbol\\beta} = (X^\\mathsf{T}X)^{-1}X^\\mathsf{T}\\mathbf{y}', text: 'The [[least-squares-solution|least-squares solution]] from linear algebra; works for any number of predictors.' },
        ],
      },
      {
        title: 'Inference for regression',
        items: [
          { label: 'Residual standard error', tex: 's = \\sqrt{\\frac{SSE}{n - 2}}' },
          {
            label: 'Slope',
            tex: '\\begin{aligned} &\\operatorname{SE}(b_1) = \\frac{s}{\\sqrt{S_{xx}}}, \\\\ &t = \\frac{b_1}{\\operatorname{SE}(b_1)}, \\\\ &b_1 \\pm t_{\\alpha/2,\\,n-2}\\operatorname{SE}(b_1) \\end{aligned}',
            text: 'Conditions (LINE): **L**inear trend, **I**ndependent errors, **N**ormal errors, **E**qual variance.',
          },
          {
            label: 'Mean response vs [[stat-prediction-interval|prediction interval]] at $x^*$',
            tex: '\\begin{aligned} &\\hat{y}^* \\pm t_{\\alpha/2,\\,n-2}\\,s\\sqrt{\\frac{1}{n} + \\frac{(x^* - \\bar{x})^2}{S_{xx}}} \\\\ &\\text{vs} \\\\ &\\hat{y}^* \\pm t_{\\alpha/2,\\,n-2}\\,s\\sqrt{1 + \\frac{1}{n} + \\frac{(x^* - \\bar{x})^2}{S_{xx}}} \\end{aligned}',
            text: 'The prediction interval for one new observation is always wider. Both widen away from $\\bar{x}$; extrapolation is risky.',
          },
          { label: 'Multiple regression', tex: 'R^2_{\\text{adj}} = 1 - (1 - R^2)\\frac{n - 1}{n - p - 1}', text: '$p$ predictors. Each coefficient is the effect of its predictor **holding the others fixed**.' },
        ],
      },
      {
        title: 'Logistic regression',
        items: [
          {
            label: '[[stat-logistic-regression|Logistic regression]] model',
            tex: '\\ln\\frac{p}{1 - p} = \\beta_0 + \\beta_1 x \\iff p = \\frac{1}{1 + e^{-(\\beta_0 + \\beta_1 x)}}',
            text: 'Linear in the [[stat-log-odds|log-odds]]; fitted by maximum likelihood, not least squares.',
          },
          { label: 'Odds ratio', tex: '\\frac{\\text{odds}(x + 1)}{\\text{odds}(x)} = e^{\\beta_1}', text: 'Each one-unit increase in $x$ multiplies the odds by $e^{\\beta_1}$.' },
        ],
      },
      {
        title: 'Bayesian updating',
        items: [
          {
            label: '[[stat-posterior-distribution|Posterior]] $\\propto$ likelihood $\\times$ prior',
            tex: 'f(\\theta \\mid x) = \\frac{p(x \\mid \\theta)\\,f(\\theta)}{\\int p(x \\mid \\theta)\\,f(\\theta)\\,d\\theta}',
          },
          {
            label: '[[stat-beta-distribution|Beta]]–Binomial update',
            tex: '\\begin{aligned} &\\text{Beta}(\\alpha, \\beta) + k \\text{ successes in } n \\text{ trials} \\\\ &\\quad\\implies \\text{Beta}(\\alpha + k,\\ \\beta + n - k) \\\\ &E[\\theta \\mid \\text{data}] = \\frac{\\alpha + k}{\\alpha + \\beta + n} \\end{aligned}',
            text: 'Beta$(\\alpha, \\beta)$: mean $\\frac{\\alpha}{\\alpha + \\beta}$, variance $\\frac{\\alpha\\beta}{(\\alpha + \\beta)^2(\\alpha + \\beta + 1)}$; Beta$(1, 1)$ is uniform. Example: Beta$(10, 10)$ prior, $14$ wins and $6$ losses $\\to$ Beta$(24, 16)$, mean $0.60$ (raw rate $0.70$).',
          },
          {
            label: 'Other [[stat-conjugate-prior|conjugate pairs]]',
            tex: '\\begin{aligned} &\\text{Gamma}(\\alpha, \\beta) + \\text{Poisson counts} \\\\ &\\quad\\to \\text{Gamma}\\left(\\alpha + \\textstyle\\sum x_i,\\ \\beta + n\\right) \\\\ &\\text{Gamma}(\\alpha, \\beta) + \\text{Exp times} \\\\ &\\quad\\to \\text{Gamma}\\left(\\alpha + n,\\ \\beta + \\textstyle\\sum x_i\\right) \\end{aligned}',
            text: 'Normal mean with known $\\sigma^2$ and prior $N(\\mu_0, \\tau_0^2)$: posterior precision $\\frac{1}{\\tau_0^2} + \\frac{n}{\\sigma^2}$, posterior mean the precision-weighted average of $\\mu_0$ and $\\bar{x}$.',
          },
          {
            label: '[[stat-credible-interval|Credible interval]]',
            text: '$[a, b]$ with $P(a \\le \\theta \\le b \\mid \\text{data}) = 0.95$, usually the $2.5\\%$ and $97.5\\%$ posterior quantiles. A Bayesian A/B test reports $P(\\theta_B > \\theta_A \\mid \\text{data})$, estimated by sampling both posteriors.',
          },
        ],
      },
    ],
  },
];
