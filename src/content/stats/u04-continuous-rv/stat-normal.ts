import type { Lesson } from '../../types';

const QQ_SVG = '<svg viewBox="0 0 480 225" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="30" width="190" height="170" fill="none" class="s-gray" stroke-width="1"/><line x1="30.0" y1="200.0" x2="220.0" y2="58.3" class="s-gray" stroke-width="1.4" stroke-dasharray="5 4"/><circle cx="44.1" cy="197.2" r="3.2" class="f-blue"/><circle cx="62.5" cy="180.4" r="3.2" class="f-blue"/><circle cx="72.4" cy="178.4" r="3.2" class="f-blue"/><circle cx="79.7" cy="161.2" r="3.2" class="f-blue"/><circle cx="85.6" cy="159.3" r="3.2" class="f-blue"/><circle cx="90.7" cy="158.6" r="3.2" class="f-blue"/><circle cx="95.2" cy="149.1" r="3.2" class="f-blue"/><circle cx="99.4" cy="147.0" r="3.2" class="f-blue"/><circle cx="103.2" cy="145.6" r="3.2" class="f-blue"/><circle cx="106.9" cy="136.3" r="3.2" class="f-blue"/><circle cx="110.4" cy="133.5" r="3.2" class="f-blue"/><circle cx="113.7" cy="131.9" r="3.2" class="f-blue"/><circle cx="117.0" cy="130.7" r="3.2" class="f-blue"/><circle cx="120.2" cy="130.6" r="3.2" class="f-blue"/><circle cx="123.4" cy="124.3" r="3.2" class="f-blue"/><circle cx="126.6" cy="123.0" r="3.2" class="f-blue"/><circle cx="129.8" cy="121.3" r="3.2" class="f-blue"/><circle cx="133.0" cy="116.6" r="3.2" class="f-blue"/><circle cx="136.3" cy="115.9" r="3.2" class="f-blue"/><circle cx="139.6" cy="114.9" r="3.2" class="f-blue"/><circle cx="143.1" cy="112.8" r="3.2" class="f-blue"/><circle cx="146.8" cy="111.3" r="3.2" class="f-blue"/><circle cx="150.6" cy="111.0" r="3.2" class="f-blue"/><circle cx="154.8" cy="109.5" r="3.2" class="f-blue"/><circle cx="159.3" cy="105.5" r="3.2" class="f-blue"/><circle cx="164.4" cy="104.6" r="3.2" class="f-blue"/><circle cx="170.3" cy="102.6" r="3.2" class="f-blue"/><circle cx="177.6" cy="98.0" r="3.2" class="f-blue"/><circle cx="187.5" cy="90.9" r="3.2" class="f-blue"/><circle cx="205.9" cy="68.7" r="3.2" class="f-blue"/><text x="125.0" y="20" text-anchor="middle" font-size="13">normal data: straight</text><text x="125.0" y="218" text-anchor="middle" font-size="11" class="t-gray">normal quantiles</text><text x="22" y="115.0" text-anchor="middle" font-size="11" class="t-gray" transform="rotate(-90 22 115.0)">data (standardized)</text><rect x="270" y="30" width="190" height="170" fill="none" class="s-gray" stroke-width="1"/><line x1="270.0" y1="200.0" x2="460.0" y2="58.3" class="s-gray" stroke-width="1.4" stroke-dasharray="5 4"/><circle cx="284.1" cy="161.8" r="3.2" class="f-red"/><circle cx="302.5" cy="161.6" r="3.2" class="f-red"/><circle cx="312.4" cy="158.1" r="3.2" class="f-red"/><circle cx="319.7" cy="157.8" r="3.2" class="f-red"/><circle cx="325.6" cy="154.8" r="3.2" class="f-red"/><circle cx="330.7" cy="152.3" r="3.2" class="f-red"/><circle cx="335.2" cy="152.3" r="3.2" class="f-red"/><circle cx="339.4" cy="150.1" r="3.2" class="f-red"/><circle cx="343.2" cy="149.5" r="3.2" class="f-red"/><circle cx="346.9" cy="148.5" r="3.2" class="f-red"/><circle cx="350.4" cy="146.5" r="3.2" class="f-red"/><circle cx="353.7" cy="140.4" r="3.2" class="f-red"/><circle cx="357.0" cy="138.5" r="3.2" class="f-red"/><circle cx="360.2" cy="137.4" r="3.2" class="f-red"/><circle cx="363.4" cy="136.6" r="3.2" class="f-red"/><circle cx="366.6" cy="134.1" r="3.2" class="f-red"/><circle cx="369.8" cy="133.8" r="3.2" class="f-red"/><circle cx="373.0" cy="133.8" r="3.2" class="f-red"/><circle cx="376.3" cy="132.8" r="3.2" class="f-red"/><circle cx="379.6" cy="132.6" r="3.2" class="f-red"/><circle cx="383.1" cy="118.0" r="3.2" class="f-red"/><circle cx="386.8" cy="114.6" r="3.2" class="f-red"/><circle cx="390.6" cy="114.0" r="3.2" class="f-red"/><circle cx="394.8" cy="110.8" r="3.2" class="f-red"/><circle cx="399.3" cy="106.8" r="3.2" class="f-red"/><circle cx="404.4" cy="105.7" r="3.2" class="f-red"/><circle cx="410.3" cy="97.5" r="3.2" class="f-red"/><circle cx="417.6" cy="81.6" r="3.2" class="f-red"/><circle cx="427.5" cy="76.9" r="3.2" class="f-red"/><circle cx="445.9" cy="36.0" r="3.2" class="f-red"/><text x="365.0" y="20" text-anchor="middle" font-size="13">right-skewed data: curves up</text><text x="365.0" y="218" text-anchor="middle" font-size="11" class="t-gray">normal quantiles</text><text x="262" y="115.0" text-anchor="middle" font-size="11" class="t-gray" transform="rotate(-90 262 115.0)">data (standardized)</text></svg>';

const ks = (from: number, to: number) => Array.from({ length: to - from + 1 }, (_, i) => i + from);
const binStem = (k: number) => `nCr(n, ${k})*p^${k}*(1 - p)^(n - ${k})`;

export const lesson: Lesson = {
  id: 'stat-normal',
  title: 'The Normal Distribution',
  summary: 'The bell curve: its density and parameters, why it shows up everywhere, standardizing to z-scores, probabilities with $\\Phi$ and a z-table, percentiles and cutoffs with $\\Phi^{-1}$, the 68–95–99.7 rule, the normal approximation to the binomial with continuity correction, and checking normality with a Q-Q plot.',
  minutes: 21,
  objectives: [
    'Describe the normal density $N(\\mu, \\sigma^2)$ and how $\\mu$ and $\\sigma$ change its shape',
    'Standardize with $z = (x - \\mu)/\\sigma$ and compute normal probabilities with $\\Phi$ or a z-table',
    'Solve inverse problems: percentiles, cutoffs and required $\\sigma$, using $x_p = \\mu + z_p\\sigma$',
    'Apply the 68–95–99.7 rule, and explain why it fails for skewed data such as frame times',
    'Approximate binomial probabilities with a normal distribution and a continuity correction, and judge normality from a Q-Q plot',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'The bell curve',
      blocks: [
        {
          type: 'p',
          text: 'Measure the same length a thousand times, add up the scores on a hundred-question exam, sum the small random delays in a network path: the results pile up in a symmetric bell shape. That shape is the [[stat-normal-distribution|normal (Gaussian) distribution]], the most important distribution in statistics.',
        },
        {
          type: 'definition',
          term: 'Normal distribution $N(\\mu, \\sigma^2)$',
          text: 'A random variable $X \\sim N(\\mu, \\sigma^2)$ has density $$f(x) = \\frac{1}{\\sigma\\sqrt{2\\pi}}\\, e^{-\\frac{(x - \\mu)^2}{2\\sigma^2}}, \\qquad -\\infty < x < \\infty,$$ with mean $E[X] = \\mu$ and variance $\\operatorname{Var}(X) = \\sigma^2$. The second parameter is the **variance**, so $N(16, 2.25)$ has $\\sigma = 1.5$.',
        },
        {
          type: 'graph',
          x: [-8, 8],
          y: [0, 0.85],
          xStep: 1,
          yStep: 0.1,
          height: 270,
          functions: [
            { expr: 'normpdf(x)', color: 'gray', dashed: true, label: 'standard normal $N(0, 1)$' },
            { expr: 'normpdf((x - m)/s)/s', color: 'blue', label: '$N(\\mu, \\sigma^2)$' },
          ],
          vlines: [{ x: 'm', label: 'μ', color: 'orange' }],
          points: [
            { x: 'm - s', y: 'normpdf(1)/s', color: 'purple', label: 'μ − σ' },
            { x: 'm + s', y: 'normpdf(1)/s', color: 'purple', label: 'μ + σ' },
          ],
          sliders: [
            { name: 'm', min: -4, max: 4, step: 0.5, value: 1, label: 'mean $\\mu$' },
            { name: 's', min: 0.5, max: 3, step: 0.1, value: 1.5, label: 'standard deviation $\\sigma$' },
          ],
          readouts: [{ label: 'peak height $\\frac{1}{\\sigma\\sqrt{2\\pi}} =$', expr: '1/(s*sqrt(2pi))', digits: 4 }],
          caption: '$\\mu$ slides the bell without changing its shape; $\\sigma$ stretches it horizontally and, to keep the area $1$, squashes it vertically (double $\\sigma$, half the peak). The purple dots at $\\mu \\pm \\sigma$ are the inflection points, where the curve changes from bending down to bending up.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the inflection points are at $\\mu \\pm \\sigma$',
          text: 'Write $f(x) = C e^{-u^2/2}$ with $u = (x - \\mu)/\\sigma$. Differentiating twice with the chain rule gives $f\'\'(x) = \\frac{C}{\\sigma^2}(u^2 - 1)e^{-u^2/2}$, which changes sign exactly at $u = \\pm 1$, i.e. at $x = \\mu \\pm \\sigma$. So $\\sigma$ is visible on the graph: it is the distance from the center to where the bell stops curving downward.',
        },
        {
          type: 'p',
          text: '**Why is it everywhere?** The central limit theorem (two units ahead) says that a sum of many small, independent random effects is approximately normal, almost regardless of what the individual effects look like. A measurement error is a sum of many tiny disturbances; a test score is a sum of many item scores; a player\'s rating change over a season is a sum of many games. Where that story does not hold — one large effect, a hard boundary, multiplicative growth — the normal model can fail badly, as you will see at the end of this lesson.',
        },
        {
          type: 'deepdive',
          title: 'Where $\\sqrt{2\\pi}$ comes from',
          blocks: [
            {
              type: 'p',
              text: 'The constant makes the area $1$, so it must be $\\int_{-\\infty}^{\\infty} e^{-x^2/2}\\,dx = \\sqrt{2\\pi}$. This integral has no elementary antiderivative, but a famous trick (from multivariable calculus) computes it: square it, write the square as a double integral over the plane, and switch to polar coordinates, where an extra factor $r$ appears and makes it integrable:',
            },
            { type: 'math', tex: '\\left(\\int_{-\\infty}^{\\infty} e^{-x^2/2}dx\\right)^2 = \\int_0^{2\\pi}\\!\\!\\int_0^{\\infty} e^{-r^2/2}\\,r\\,dr\\,d\\theta = 2\\pi \\cdot 1' },
            {
              type: 'p',
              text: 'The same polar trick is behind the Box–Muller method that generates normal random numbers from two uniforms (used in the code later in this lesson).',
            },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'mcq',
      prompt: 'Two normal distributions have the same mean, but the second has **twice** the standard deviation of the first. How do their density curves compare?',
      options: [
        { text: 'The second is twice as wide and twice as tall', why: 'The total area must stay $1$. Twice as wide **and** twice as tall would have four times the area.' },
        { text: 'The second is twice as wide and half as tall', correct: true, why: 'The peak height is $\\frac{1}{\\sigma\\sqrt{2\\pi}}$, so doubling $\\sigma$ halves it, while the inflection points $\\mu \\pm \\sigma$ move twice as far out. Area stays $1$.' },
        { text: 'The second is shifted to the right by one standard deviation', why: 'Shifting is what changing $\\mu$ does. Both means are equal, so both curves are centered at the same place.' },
        { text: 'They have the same height, because the height depends only on $\\mu$', why: 'The height at the center is $\\frac{1}{\\sigma\\sqrt{2\\pi}}$ — it depends only on $\\sigma$, not on $\\mu$.' },
      ],
      explanation: 'Stretching a density horizontally by a factor $2$ forces it to shrink vertically by $2$ to keep the total probability $1$. In formulas: if $X \\sim N(\\mu, \\sigma^2)$ then $f(x) = \\frac{1}{\\sigma}\\varphi\\left(\\frac{x - \\mu}{\\sigma}\\right)$, where $\\varphi$ is the standard normal density, and the factor $\\frac{1}{\\sigma}$ is exactly that vertical squash.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Standardizing: z-scores',
      blocks: [
        {
          type: 'p',
          text: 'There are infinitely many normal distributions, but you only ever need one table. The reason: every normal variable is a stretched and shifted copy of the **standard normal**.',
        },
        {
          type: 'theorem',
          name: 'Standardization',
          tex: 'X \\sim N(\\mu, \\sigma^2) \\implies Z = \\frac{X - \\mu}{\\sigma} \\sim N(0, 1)',
          text: 'More generally, $aX + b \\sim N(a\\mu + b,\\ a^2\\sigma^2)$ for $a \\ne 0$: linear functions of normal variables are normal. $Z \\sim N(0, 1)$ is the [[stat-standard-normal|standard normal distribution]].',
        },
        {
          type: 'derivation',
          title: 'Proof by the CDF method',
          steps: [
            { tex: 'P(Z \\le z) = P\\left(\\frac{X - \\mu}{\\sigma} \\le z\\right) = P(X \\le \\mu + \\sigma z)', why: 'Multiply by $\\sigma > 0$ and add $\\mu$; the inequality keeps its direction.' },
            { tex: '= \\int_{-\\infty}^{\\mu + \\sigma z} \\frac{1}{\\sigma\\sqrt{2\\pi}}\\,e^{-(x - \\mu)^2/(2\\sigma^2)}\\,dx', why: 'Integrate the density of $X$.' },
            { tex: '= \\int_{-\\infty}^{z} \\frac{1}{\\sqrt{2\\pi}}\\,e^{-u^2/2}\\,du', why: '[[u-substitution|Substitute]] $u = (x - \\mu)/\\sigma$, $dx = \\sigma\\,du$: the $\\sigma$ cancels and the upper limit becomes $z$.' },
          ],
          result: 'That is the CDF of $N(0, 1)$, so $Z$ is standard normal. The mean and variance agree with the rules for $aX + b$: $E[Z] = (\\mu - \\mu)/\\sigma = 0$ and $\\operatorname{Var}(Z) = \\sigma^2/\\sigma^2 = 1$.',
        },
        {
          type: 'definition',
          term: 'z-score',
          text: 'The [[stat-z-score|z-score]] of a value $x$ is $z = \\dfrac{x - \\mu}{\\sigma}$: how many standard deviations $x$ lies above ($z > 0$) or below ($z < 0$) the mean.',
        },
        {
          type: 'p',
          text: 'z-Scores put different scales on a common footing. Suppose frame times in your game are $N(16, 1.5^2)$ ms; a $19$ ms frame has $z = \\frac{19 - 16}{1.5} = 2$. In another game with frame times $N(8, 0.5^2)$ ms, a $9$ ms frame also has $z = 2$: equally unusual for its game, even though the raw numbers are very different.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'numeric',
      prompt: 'Player ratings in a ranked mode are approximately $N(1500, 200^2)$. What is the z-score of a player rated $1850$? Two decimals.',
      hint: '$z = (x - \\mu)/\\sigma$.',
      label: '$z =$',
      answer: '(1850 - 1500)/200',
      answerTex: '1.75',
      tolerance: 0.005,
      explanation: '$z = \\frac{1850 - 1500}{200} = \\frac{350}{200} = 1.75$: the player is $1.75$ standard deviations above average. Dividing by the variance $200^2$ instead of the standard deviation is the classic slip — $\\sigma$, not $\\sigma^2$, has the same units as the ratings.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Computing probabilities with $\\Phi$',
      blocks: [
        {
          type: 'p',
          text: 'The standard normal CDF is called $\\Phi$: $\\Phi(z) = P(Z \\le z) = \\int_{-\\infty}^z \\frac{1}{\\sqrt{2\\pi}}e^{-u^2/2}\\,du$. The integrand has no elementary antiderivative (it is a [[nonelementary-integral|nonelementary integral]]), so $\\Phi$ is computed numerically — by a calculator, `normcdf` in this app, `std::erfc` in C++ via $\\Phi(z) = \\frac{1}{2}\\operatorname{erfc}(-z/\\sqrt{2})$, or a printed table.',
        },
        {
          type: 'theorem',
          name: 'Normal probabilities',
          tex: 'P(X \\le x) = \\Phi\\left(\\frac{x - \\mu}{\\sigma}\\right), \\qquad P(a \\le X \\le b) = \\Phi\\left(\\frac{b - \\mu}{\\sigma}\\right) - \\Phi\\left(\\frac{a - \\mu}{\\sigma}\\right), \\qquad \\Phi(-z) = 1 - \\Phi(z)',
          text: 'The last identity is symmetry: the area left of $-z$ equals the area right of $z$. So a table only needs $z \\ge 0$.',
        },
        {
          type: 'table',
          headers: ['$z$', '$\\Phi(z)$', '$z$', '$\\Phi(z)$', '$z$', '$\\Phi(z)$'],
          rows: [
            ['$0$', '$0.5000$', '$1.5$', '$0.9332$', '$2.33$', '$0.9901$'],
            ['$0.5$', '$0.6915$', '$1.645$', '$0.9500$', '$2.5$', '$0.9938$'],
            ['$1$', '$0.8413$', '$1.96$', '$0.9750$', '$2.576$', '$0.9950$'],
            ['$1.28$', '$0.8997$', '$2$', '$0.9772$', '$3$', '$0.9987$'],
          ],
          caption: 'A compact z-table. For negative $z$ use $\\Phi(-z) = 1 - \\Phi(z)$; for values in between, a full table or `normcdf` gives more digits.',
        },
        {
          type: 'graph',
          x: [-4, 4],
          y: [0, 0.45],
          xStep: 1,
          yStep: 0.1,
          height: 250,
          functions: [{ expr: 'normpdf(x)', label: '$\\varphi(z)$, the $N(0, 1)$ density' }],
          areas: [{ expr: 'normpdf(x)', from: 'a', to: 'b', color: 'blue' }],
          sliders: [
            { name: 'a', min: -4, max: 4, step: 0.05, value: -1, label: 'left $z$-value $a$' },
            { name: 'b', min: -4, max: 4, step: 0.05, value: 1.5, label: 'right $z$-value $b$ (keep $b \\ge a$)' },
          ],
          readouts: [
            { label: '$\\Phi(b) =$', expr: 'normcdf(b)', digits: 4 },
            { label: '$\\Phi(a) =$', expr: 'normcdf(a)', digits: 4 },
            { label: 'shaded area $\\Phi(b) - \\Phi(a) =$', expr: 'normcdf(b) - normcdf(a)', digits: 4 },
          ],
          caption: 'Every normal probability is an area like this one after standardizing. The defaults show the exam example below: $z$ from $-1$ to $1.5$.',
        },
        {
          type: 'derivation',
          title: 'Exam scores between 60 and 85',
          steps: [
            { tex: 'X \\sim N(70, 10^2): \\quad z_{60} = \\frac{60 - 70}{10} = -1, \\quad z_{85} = \\frac{85 - 70}{10} = 1.5', why: 'Standardize both endpoints.' },
            { tex: 'P(60 < X < 85) = \\Phi(1.5) - \\Phi(-1)', why: 'Area between the two z-values. ($<$ or $\\le$ makes no difference for a continuous variable.)' },
            { tex: '= \\Phi(1.5) - (1 - \\Phi(1)) = 0.9332 - 0.1587 = 0.7745', why: 'Symmetry for the negative value, then the table.' },
          ],
          result: 'About $77\\%$ of students score between $60$ and $85$.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Always sketch the bell first',
          text: 'Before computing, draw a bell, mark the mean, shade the region you want, and estimate the answer by eye ("a bit less than half", "a small tail"). Most normal-probability errors — using $\\Phi(z)$ for a right tail, or subtracting in the wrong order — produce answers that contradict the sketch.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'numeric',
      prompt: 'Frame times in a game are approximately $N(16, 1.5^2)$ ms. What fraction of frames take **longer than** $19$ ms? Four decimals.',
      hint: 'Standardize $19$, then take the right tail: $1 - \\Phi(z)$.',
      label: '$P(X > 19) =$',
      answer: '1 - normcdf(2)',
      answerTex: '1 - \\Phi(2) \\approx 0.0228',
      tolerance: 0.00006,
      explanation: '$z = \\frac{19 - 16}{1.5} = 2$, so $P(X > 19) = 1 - \\Phi(2) = 1 - 0.9772 = 0.0228$. At $60$ frames per second that is about $1.4$ slow frames every second — if frame times really were normal. (They usually are not; see the end of the lesson.)',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'error',
      prompt: 'Exam scores are $N(70, 10^2)$. A student computes the fraction of students who score **above** $85$. Tap the first wrong line.',
      lines: [
        '$z = \\dfrac{85 - 70}{10} = 1.5$',
        '$P(X > 85) = P(Z > 1.5)$',
        '$P(Z > 1.5) = \\Phi(1.5) = 0.9332$',
        'So about $93\\%$ of students score above $85$.',
      ],
      errorLines: [3],
      explanation: '$\\Phi(1.5)$ is the area to the **left** of $1.5$. The right tail is $P(Z > 1.5) = 1 - \\Phi(1.5) = 1 - 0.9332 = 0.0668$: about $6.7\\%$ score above $85$. A sketch catches this immediately: $85$ is above the mean, so the area beyond it must be less than half.',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'concept',
      title: 'The 68–95–99.7 rule, and rare events at scale',
      blocks: [
        {
          type: 'p',
          text: 'Three numbers from the table are worth memorizing. They answer "how much of a normal distribution lies within $k$ standard deviations of the mean?" without any calculation.',
        },
        {
          type: 'theorem',
          name: 'Empirical rule (68–95–99.7)',
          tex: 'P(|X - \\mu| \\le k\\sigma) = 2\\Phi(k) - 1 \\approx \\begin{cases} 0.683 & k = 1 \\\\ 0.954 & k = 2 \\\\ 0.997 & k = 3 \\end{cases}',
          text: 'This [[stat-empirical-rule|empirical rule]] holds for normal distributions only.',
        },
        {
          type: 'graph',
          x: [-4, 4],
          y: [0, 0.45],
          xStep: 1,
          yStep: 0.1,
          height: 240,
          functions: [{ expr: 'normpdf(x)', label: 'standard normal density' }],
          areas: [{ expr: 'normpdf(x)', from: '-k', to: 'k', color: 'green' }],
          vlines: [{ x: '-k', color: 'gray' }, { x: 'k', color: 'gray' }],
          sliders: [{ name: 'k', min: 0.5, max: 3.5, step: 0.05, value: 2, label: 'number of standard deviations $k$' }],
          readouts: [
            { label: 'within $\\pm k\\sigma$: $2\\Phi(k) - 1 =$', expr: '2normcdf(k) - 1', digits: 4 },
            { label: 'above $+k\\sigma$: $1 - \\Phi(k) =$', expr: '1 - normcdf(k)', digits: 5 },
          ],
          caption: 'Set $k = 1, 2, 3$ to see $68\\%$, $95\\%$, $99.7\\%$. The two unshaded tails are equal, so each holds half of what is left: $2.3\\%$ above $+2\\sigma$, $0.13\\%$ above $+3\\sigma$.',
        },
        {
          type: 'p',
          text: 'Rare events stop being rare at scale. If frame times were $N(16, 1.5^2)$, a frame slower than $\\mu + 3\\sigma = 20.5$ ms would have probability $0.00135$. But a game renders $60 \\times 60 = 3600$ frames a minute, so you would still see about $3600 \\times 0.00135 \\approx 4.9$ such frames **every minute**. The same arithmetic applies to millions of daily logins, matches or network packets: a "three-sigma event" happens constantly.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'The rule is about normal data only',
          text: 'For a skewed or heavy-tailed distribution the fractions can be very different — real frame times, with a long right tail of stutters, can have ten times as many values beyond $+3\\sigma$ (the simulation at the end of the lesson shows this). For *any* distribution, all that is guaranteed is at least $1 - 1/k^2$ within $k\\sigma$ (Chebyshev\'s inequality, in the Law of Large Numbers lesson): $75\\%$ within $2\\sigma$, not $95\\%$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'truefalse',
      prompt: 'For any distribution of session lengths, about $95\\%$ of sessions are within two standard deviations of the mean session length.',
      answer: false,
      explanation: 'The $95\\%$ figure comes from the normal distribution. Session lengths are typically strongly right-skewed (many short sessions, a few very long ones), and then the fraction within $2\\sigma$ can be noticeably different. For an arbitrary distribution the only guarantee is Chebyshev\'s bound: at least $1 - \\frac{1}{4} = 75\\%$ within $2\\sigma$.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'concept',
      title: 'Inverse problems: percentiles and cutoffs',
      blocks: [
        {
          type: 'p',
          text: 'Often the probability is given and the value is unknown: the rating that puts a player in the top $5\\%$, the score needed for an A, the tolerance a factory must hold. Run standardization backwards: find the $z$-value with the right area, then convert it to the original units.',
        },
        {
          type: 'theorem',
          name: 'Normal percentiles',
          tex: 'x_p = \\mu + z_p\\,\\sigma, \\qquad z_p = \\Phi^{-1}(p)',
          text: 'In this app $\\Phi^{-1}(p)$ is `invnorm(p)`. Statistics also uses the upper-tail notation $z_\\alpha$: the value with area $\\alpha$ to its **right**, so $z_\\alpha = \\Phi^{-1}(1 - \\alpha)$.',
        },
        {
          type: 'table',
          headers: ['upper-tail area $\\alpha$', '$0.10$', '$0.05$', '$0.025$', '$0.01$', '$0.005$'],
          rows: [['$z_\\alpha$', '$1.2816$', '$1.6449$', '$1.9600$', '$2.3263$', '$2.5758$']],
          caption: 'Critical values you will use constantly, from confidence intervals to hypothesis tests. For example $z_{0.025} = 1.96$: the middle $95\\%$ of a normal lies within $\\pm 1.96\\sigma$.',
        },
        {
          type: 'derivation',
          title: 'The top 5% of a rating ladder',
          steps: [
            { tex: 'X \\sim N(1500, 200^2), \\quad \\text{want } P(X > c) = 0.05', why: 'The cutoff $c$ has $5\\%$ of players above it, so $95\\%$ below: it is the $95$th percentile.' },
            { tex: 'z_{0.05} = \\Phi^{-1}(0.95) \\approx 1.645', why: 'From the critical-value table.' },
            { tex: 'c = 1500 + 1.645 \\times 200 \\approx 1829', why: 'Convert back: $x = \\mu + z\\sigma$.' },
          ],
          result: 'A "top $5\\%$" badge needs a rating of about $1829$. (Real rating systems like Elo and Glicko are only roughly normal, so live games compute such cutoffs from the actual distribution of player ratings.)',
        },
        {
          type: 'derivation',
          title: 'Quality control: what $\\sigma$ is acceptable?',
          steps: [
            { tex: 'X \\sim N(50, \\sigma^2) \\text{ mm}, \\quad \\text{want } P(|X - 50| \\le 0.5) = 0.99', why: 'A machine cuts parts with mean length $50$ mm; $99\\%$ must be within $\\pm 0.5$ mm.' },
            { tex: '\\frac{0.5}{\\sigma} = z_{0.005} = 2.576', why: 'The middle $99\\%$ leaves $0.5\\%$ in each tail, so the tolerance must be $2.576$ standard deviations.' },
            { tex: '\\sigma = \\frac{0.5}{2.576} \\approx 0.194 \\text{ mm}', why: 'Solve for $\\sigma$. The machine needs a standard deviation of at most about $0.19$ mm.' },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'numeric',
      prompt: 'Exam scores are $N(70, 10^2)$. What score is needed to be in the **top 10%**? Use $z_{0.10} = 1.2816$; two decimals.',
      hint: 'The cutoff is the $90$th percentile: $\\mu + z_{0.10}\\,\\sigma$.',
      label: '$c =$',
      answer: '70 + invnorm(0.9)*10',
      answerTex: '70 + 1.2816 \\times 10 \\approx 82.82',
      tolerance: 0.025,
      explanation: 'Top $10\\%$ means $90\\%$ below, so $c = 70 + z_{0.10}\\cdot 10 = 70 + 12.816 \\approx 82.82$. Using $\\Phi^{-1}(0.10) = -1.2816$ by mistake gives $57.18$, the cutoff for the **bottom** $10\\%$ — a sketch shows the cutoff must be above the mean.',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'concept',
      title: 'The normal approximation to the binomial',
      blocks: [
        {
          type: 'p',
          text: 'In the binomial lesson you saw $\\text{Bin}(n, p)$ turn into a bell as $n$ grew. That bell is the normal with the same mean and variance, so for large $n$ you can trade a long binomial sum for one $\\Phi$ value.',
        },
        {
          type: 'theorem',
          name: 'Normal approximation (with continuity correction)',
          tex: 'X \\sim \\text{Bin}(n, p) \\approx N\\left(np,\\ np(1-p)\\right): \\qquad P(X \\le k) \\approx \\Phi\\left(\\frac{k + 0.5 - np}{\\sqrt{np(1-p)}}\\right)',
          text: 'Use it when $np \\ge 10$ and $n(1-p) \\ge 10$, so the binomial is not squashed against $0$ or $n$.',
        },
        {
          type: 'p',
          text: 'The $+0.5$ is the [[stat-continuity-correction|continuity correction]]. A binomial puts its probability on integers; picture each $P(X = k)$ as a bar of width $1$ from $k - 0.5$ to $k + 0.5$. To approximate "$X \\le k$" with a curve, include the whole bar of $k$: integrate up to $k + 0.5$. For "$X \\ge k$", start at $k - 0.5$. For "$X = k$", integrate from $k - 0.5$ to $k + 0.5$ (without the correction you would get $0$).',
        },
        {
          type: 'graph',
          x: [20, 90],
          y: [0, 0.11],
          xStep: 10,
          yStep: 0.02,
          height: 270,
          segments: ks(20, 90).map((k) => ({ from: [k, 0] as [number, number], to: [k, binStem(k)] as [number, string], color: 'blue' as const })),
          functions: [{ expr: 'normpdf((x - n*p)/sqrt(n*p*(1 - p)))/sqrt(n*p*(1 - p))', color: 'red', label: 'normal curve $N(np, np(1-p))$' }],
          areas: [{ expr: 'normpdf((x - n*p)/sqrt(n*p*(1 - p)))/sqrt(n*p*(1 - p))', from: 'k - 0.5', to: 90, color: 'orange' }],
          vlines: [{ x: 'k - 0.5', label: 'k − 0.5', color: 'orange' }],
          sliders: [
            { name: 'n', min: 60, max: 120, step: 1, value: 100, label: 'games $n$' },
            { name: 'p', min: 0.4, max: 0.65, step: 0.01, value: 0.55, label: 'win probability $p$' },
            { name: 'k', min: 30, max: 85, step: 1, value: 60, label: 'at least $k$ wins' },
          ],
          readouts: [
            { label: 'with correction $1 - \\Phi\\left(\\frac{k - 0.5 - np}{\\sigma}\\right) =$', expr: '1 - normcdf((k - 0.5 - n*p)/sqrt(n*p*(1 - p)))', digits: 4 },
            { label: 'without $1 - \\Phi\\left(\\frac{k - np}{\\sigma}\\right) =$', expr: '1 - normcdf((k - n*p)/sqrt(n*p*(1 - p)))', digits: 4 },
          ],
          caption: 'Blue stems: $\\text{Bin}(n, p)$, the number of wins in $n$ games. Red: the matching normal density. Orange: the normal area used for $P(X \\ge k)$, starting half a unit early so that the whole bar of $k$ counts. With the defaults the exact binomial answer is $0.1831$; the corrected approximation gives $0.1829$, the uncorrected one $0.1574$.',
        },
        {
          type: 'derivation',
          title: 'A 55% player, 100 games: at least 60 wins?',
          steps: [
            { tex: '\\mu = np = 55, \\quad \\sigma = \\sqrt{100(0.55)(0.45)} = \\sqrt{24.75} \\approx 4.975', why: 'Mean and standard deviation of $\\text{Bin}(100, 0.55)$. Check: $np = 55 \\ge 10$ and $n(1-p) = 45 \\ge 10$.' },
            { tex: 'P(X \\ge 60) \\approx P\\left(Z \\ge \\frac{59.5 - 55}{4.975}\\right) = P(Z \\ge 0.905)', why: '"At least $60$" includes the bar of $60$, which starts at $59.5$.' },
            { tex: '= 1 - \\Phi(0.905) \\approx 0.183', why: 'Right tail. The exact binomial sum gives $0.1831$.' },
          ],
          result: 'A genuinely $55\\%$ player reaches $60$ wins in $100$ games about $18\\%$ of the time — so a $60$–$40$ record is weak evidence of a $60\\%$ player. Questions like "is this win rate real or luck?" are exactly what hypothesis testing formalizes later in the course.',
        },
      ],
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'numeric',
      prompt: 'With fair matchmaking, a player wins each game with probability $0.5$, independently. In $200$ games, use the normal approximation **with continuity correction** to estimate $P(X \\le 90)$, the chance of $90$ wins or fewer. Four decimals.',
      hint: '$\\mu = 100$, $\\sigma = \\sqrt{200 \\cdot 0.5 \\cdot 0.5} = \\sqrt{50}$. "At most $90$" goes up to $90.5$.',
      label: '$P(X \\le 90) \\approx$',
      answer: 'normcdf((90.5 - 100)/sqrt(50))',
      answerTex: '\\Phi\\left(\\frac{90.5 - 100}{\\sqrt{50}}\\right) = \\Phi(-1.34) \\approx 0.0896',
      tolerance: 0.001,
      explanation: '$\\sigma = \\sqrt{50} \\approx 7.071$, so $z = \\frac{90.5 - 100}{7.071} \\approx -1.34$ and $P \\approx \\Phi(-1.34) = 1 - \\Phi(1.34) \\approx 0.0896$ (a table with $z$ rounded to $-1.34$ gives $0.0901$, also accepted). The exact binomial value is $0.0895$. Without the correction, $\\Phi(-10/7.071) = \\Phi(-1.41) \\approx 0.079$ — noticeably worse.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'order',
      prompt: 'Order the steps for approximating a binomial probability $P(X \\ge k)$ with the normal distribution.',
      lines: [
        'Check that $np \\ge 10$ and $n(1-p) \\ge 10$',
        'Compute $\\mu = np$ and $\\sigma = \\sqrt{np(1-p)}$',
        'Apply the continuity correction: $P(X \\ge k) \\approx P(Y \\ge k - 0.5)$',
        'Standardize: $z = (k - 0.5 - \\mu)/\\sigma$',
        'Answer $1 - \\Phi(z)$',
      ],
      distractors: ['Apply the continuity correction: $P(X \\ge k) \\approx P(Y \\ge k + 0.5)$'],
      explanation: 'Check the conditions, match the mean and standard deviation, widen the event to cover whole bars (for $\\ge k$ start at $k - 0.5$), standardize, and take the right tail. The distractor shifts the wrong way: starting at $k + 0.5$ would leave out the bar for $X = k$ itself.',
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'concept',
      title: 'Is it really normal? Q-Q plots and real data',
      blocks: [
        {
          type: 'p',
          text: 'Everything in this lesson assumes normality, so check it before relying on it. A histogram helps, but the sharper tool is the [[stat-qq-plot|Q-Q plot]]: sort the data and plot each value against the quantile a normal distribution predicts for its position ($\\Phi^{-1}$ of about $\\frac{i - 0.5}{n}$ for the $i$-th smallest of $n$). Normal data falls near a straight line; departures from normality bend it in recognizable ways.',
        },
        {
          type: 'figure',
          svg: QQ_SVG,
          alt: 'Two Q-Q plots of 30 points each against normal quantiles, with a dashed reference line. Left: normal data, points close to the line. Right: right-skewed data, points flat and above the line at the left end and rising steeply above the line at the right end, curving upward.',
          caption: 'Left: normal data hugs the line. Right: right-skewed data curves upward — the largest values are much larger than a normal would predict (a long right tail), and the smallest are bunched together.',
          maxWidth: 480,
        },
        {
          type: 'list',
          items: [
            '**Measurement error** (a scale, a timer, a sensor): many small independent disturbances, typically close to normal.',
            '**Test scores:** roughly normal in the middle, but bounded by $0$ and $100$, so the tails are cut off; use the normal model away from the extremes.',
            '**Frame times and latency:** right-skewed, with a long tail of spikes (shader compiles, garbage collection, packet loss). The normal model underestimates spikes badly; report percentiles (p95, p99), or model $\\ln(\\text{time})$, which is often closer to normal.',
          ],
        },
        {
          type: 'code',
          title: 'normal_check.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdio>
#include <numbers>
#include <random>
#include <vector>

std::mt19937_64 rng(1234);
double uniform01() { return (rng() >> 11) * 0x1.0p-53; }   // uniform in [0, 1)

// Box-Muller: two independent uniforms -> one standard normal.
double standardNormal() {
    double u1 = 1.0 - uniform01();                          // in (0, 1], so log is finite
    double u2 = uniform01();
    return std::sqrt(-2.0 * std::log(u1)) * std::cos(2.0 * std::numbers::pi * u2);
}

// Fraction of samples more than k standard deviations from the sample mean.
void tails(const char* name, const std::vector<double>& v) {
    double sum = 0, sumSq = 0;
    for (double x : v) { sum += x; sumSq += x * x; }
    double n = double(v.size()), mean = sum / n, sd = std::sqrt(sumSq / n - mean * mean);
    int within[4] = {0, 0, 0, 0}, above3 = 0;
    for (double x : v) {
        for (int k = 1; k <= 3; ++k) within[k] += std::abs(x - mean) <= k * sd;
        above3 += x > mean + 3 * sd;
    }
    std::printf("%s mean %.2f sd %.2f | within 1,2,3 sd: %.4f %.4f %.4f | above +3 sd: %.4f\\n",
                name, mean, sd, within[1] / n, within[2] / n, within[3] / n, above3 / n);
}

int main() {
    const int N = 1'000'000;
    std::vector<double> normalFrames(N), skewedFrames(N);
    for (int i = 0; i < N; ++i) {
        normalFrames[i] = 16.0 + 1.5 * standardNormal();               // N(16, 1.5^2) ms
        skewedFrames[i] = 12.0 + std::exp(1.2 + 0.5 * standardNormal()); // right-skewed ms
    }
    tails("normal", normalFrames);
    tails("skewed", skewedFrames);
    std::printf("%-45s0.6827 0.9545 0.9973 | above +3 sd: 0.00135\\n", "normal theory:");
}`,
          output: `normal mean 16.00 sd 1.50 | within 1,2,3 sd: 0.6832 0.9545 0.9973 | above +3 sd: 0.0014
skewed mean 15.76 sd 2.01 | within 1,2,3 sd: 0.7641 0.9557 0.9846 | above +3 sd: 0.0154
normal theory:                               0.6827 0.9545 0.9973 | above +3 sd: 0.00135`,
          annotations: [
            { lines: '11-15', text: 'Box–Muller: $\\sqrt{-2\\ln U_1}\\cos(2\\pi U_2)$ is exactly $N(0, 1)$. Written by hand because `std::normal_distribution` produces different numbers on different standard libraries.' },
            { lines: 35, text: 'Normal frame times, $N(16, 1.5^2)$: $X = \\mu + \\sigma Z$ (standardization run backwards).' },
            { lines: 36, text: 'A right-skewed model: a $12$ ms floor plus a log-normal stutter term. Mean and standard deviation are similar to the normal one.' },
          ],
        },
        {
          type: 'p',
          text: 'Both data sets have similar means ($16.0$ and $15.8$ ms) and standard deviations ($1.5$ and $2.0$ ms), and both have about $95\\%$ within $2\\sigma$. But the skewed one has $1.5\\%$ of frames beyond $+3\\sigma$ — more than ten times the normal prediction of $0.135\\%$. A performance budget based on "$\\mu + 3\\sigma$ covers $99.9\\%$ of frames" would be wrong by an order of magnitude. Check the shape before trusting the bell.',
        },
      ],
    },
    // ------------------------------------------------------------------ 16
    {
      kind: 'mcq',
      prompt: 'You make a normal Q-Q plot of $500$ network latency measurements. The points follow the line in the middle, but at the right end they bend sharply **upward**, far above the line. What does this tell you?',
      options: [
        { text: 'The data has a longer right tail than a normal distribution: large latencies are more extreme than normal predicts', correct: true, why: 'Points above the line at the right end mean the largest observed values exceed the normal quantiles: a heavy right tail, typical of latency.' },
        { text: 'The data is normal; Q-Q plots always bend at the ends', why: 'With $500$ points, normal data stays close to the line except for small random wiggles. A sharp, systematic bend is a real departure.' },
        { text: 'The data has a shorter right tail than normal', why: 'A shorter tail would put the largest values **below** the normal quantiles, bending the plot downward at the right end.' },
        { text: 'The mean is larger than the normal model assumed', why: 'A wrong mean shifts the whole plot up or down parallel to the line; it does not bend only one end.' },
      ],
      explanation: 'A Q-Q plot compares observed quantiles with normal ones. At the right end, "above the line" means the observed high quantiles are larger than a normal would produce: a heavy right tail. For latency that is expected (occasional retransmits and queueing), and it means normal-based statements like "$99.7\\%$ within $3\\sigma$" will underestimate the slow requests. Percentiles or a log transform are better tools here.',
    },
  ],
  takeaways: [
    '$N(\\mu, \\sigma^2)$ has density $\\frac{1}{\\sigma\\sqrt{2\\pi}}e^{-(x-\\mu)^2/(2\\sigma^2)}$: symmetric about $\\mu$, inflection points at $\\mu \\pm \\sigma$, peak height $\\frac{1}{\\sigma\\sqrt{2\\pi}}$. Sums of many small independent effects are approximately normal (central limit theorem).',
    'Standardize with $z = (x - \\mu)/\\sigma$; then $P(X \\le x) = \\Phi(z)$, $P(X > x) = 1 - \\Phi(z)$ and $\\Phi(-z) = 1 - \\Phi(z)$. Sketch the bell first.',
    'Percentiles: $x_p = \\mu + z_p\\sigma$ with $z_p = \\Phi^{-1}(p)$; key critical values $1.645$, $1.96$, $2.576$.',
    '68–95–99.7 within $1, 2, 3$ standard deviations — for normal data only. At scale, three-sigma events happen constantly (about $5$ per minute at $60$ fps).',
    '$\\text{Bin}(n, p) \\approx N(np, np(1-p))$ when $np, n(1-p) \\ge 10$, with continuity correction ($\\le k$ → $k + 0.5$, $\\ge k$ → $k - 0.5$). Check normality with a Q-Q plot: skewed data such as frame times curve away from the line.',
  ],
  reading: [
    {
      title: 'OpenStax — Introductory Statistics',
      url: 'https://openstax.org/details/books/introductory-statistics',
      source: 'openstax',
      note: 'The normal distribution chapter has many more z-score, probability and percentile problems with full solutions.',
    },
    {
      title: 'Khan Academy — Statistics and probability',
      url: 'https://www.khanacademy.org/math/statistics-probability',
      source: 'khan',
      note: 'Short videos and practice on z-scores, the empirical rule and normal calculations.',
    },
    {
      title: 'Wikipedia — Normal distribution',
      url: 'https://en.wikipedia.org/wiki/Normal_distribution',
      source: 'wikipedia',
      note: 'Properties, the Gaussian integral, the error function and tables of quantiles in one place.',
    },
    {
      title: 'Seeing Theory — Brown University',
      url: 'https://seeing-theory.brown.edu/',
      source: 'other',
      note: 'Interactive visualizations of continuous distributions and the central limit theorem that pair well with this lesson.',
    },
  ],
};
