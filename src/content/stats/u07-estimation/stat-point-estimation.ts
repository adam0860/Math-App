import type { Lesson } from '../../types';

// Relative likelihood L(p)/L(p-hat) for k wins in 20 matches, data replicated m times.
const relLik = '(20x/k)^(k*m)*((1 - x)/(1 - k/20))^((20 - k)*m)';

export const lesson: Lesson = {
  id: 'stat-point-estimation',
  title: 'Point Estimation and Maximum Likelihood',
  summary: 'How to judge an estimator (bias, variance, mean squared error), why the sample variance divides by $n - 1$, and two general recipes for building estimators: the method of moments and maximum likelihood — the principle behind the loss functions that train machine-learning models.',
  minutes: 21,
  objectives: [
    'Define an estimator\'s bias, variance and mean squared error, and prove $\\operatorname{MSE} = \\operatorname{Var} + \\operatorname{Bias}^2$',
    'Prove that $\\bar{X}$ and $S^2$ (with divisor $n - 1$) are unbiased, and explain where the $n - 1$ comes from',
    'Build method-of-moments estimators and recognize their weaknesses',
    'Derive maximum likelihood estimators with calculus for Bernoulli, Poisson, exponential and normal data, and use the invariance property',
    'Compare estimators by simulation, explain consistency, and connect maximum likelihood to cross-entropy and squared-error loss in machine learning',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Estimators and how to judge them',
      blocks: [
        {
          type: 'p',
          text: 'A model has unknown **parameters**: a loot box\'s legendary rate $p$, the crash rate $\\lambda$ of a server, the mean $\\mu$ and spread $\\sigma$ of match lengths. Call a generic parameter $\\theta$. An [[stat-estimator|estimator]] is a rule $\\hat{\\theta} = g(X_1, \\dots, X_n)$ that turns a sample into a guess. Because the sample is random, $\\hat{\\theta}$ is a random variable with its own sampling distribution; the number it gives for your actual data is the **estimate**.',
        },
        {
          type: 'p',
          text: 'There are always many candidate rules. For the center of a symmetric distribution you could use the sample mean, the median, or the midpoint of the smallest and largest values. To choose, look at how each one\'s sampling distribution sits around the truth.',
        },
        {
          type: 'figure',
          svg: '<svg viewBox="0 0 500 330" xmlns="http://www.w3.org/2000/svg"><circle cx="125" cy="92" r="55" fill="none" stroke="currentColor" stroke-opacity="0.45" stroke-width="1.2"/><circle cx="125" cy="92" r="37" fill="none" stroke="currentColor" stroke-opacity="0.45" stroke-width="1.2"/><circle cx="125" cy="92" r="19" fill="none" stroke="currentColor" stroke-opacity="0.45" stroke-width="1.2"/><circle cx="125" cy="92" r="3" fill="currentColor"/><circle cx="117.3" cy="85.7" r="4" class="f-green" fill-opacity="0.8"/><circle cx="123.3" cy="96.4" r="4" class="f-green" fill-opacity="0.8"/><circle cx="138.2" cy="94.5" r="4" class="f-green" fill-opacity="0.8"/><circle cx="120.0" cy="89.0" r="4" class="f-green" fill-opacity="0.8"/><circle cx="134.1" cy="103.8" r="4" class="f-green" fill-opacity="0.8"/><circle cx="128.9" cy="86.3" r="4" class="f-green" fill-opacity="0.8"/><circle cx="115.7" cy="103.6" r="4" class="f-green" fill-opacity="0.8"/><circle cx="128.2" cy="83.2" r="4" class="f-green" fill-opacity="0.8"/><circle cx="125.1" cy="86.7" r="4" class="f-green" fill-opacity="0.8"/><circle cx="119.2" cy="90.8" r="4" class="f-green" fill-opacity="0.8"/><path d="M119 86 L131 98 M119 98 L131 86" stroke="currentColor" stroke-width="2.2"/><text x="125" y="166" text-anchor="middle" font-size="13">low bias, low variance</text><circle cx="375" cy="92" r="55" fill="none" stroke="currentColor" stroke-opacity="0.45" stroke-width="1.2"/><circle cx="375" cy="92" r="37" fill="none" stroke="currentColor" stroke-opacity="0.45" stroke-width="1.2"/><circle cx="375" cy="92" r="19" fill="none" stroke="currentColor" stroke-opacity="0.45" stroke-width="1.2"/><circle cx="375" cy="92" r="3" fill="currentColor"/><circle cx="396.1" cy="87.2" r="4" class="f-orange" fill-opacity="0.8"/><circle cx="402.9" cy="74.5" r="4" class="f-orange" fill-opacity="0.8"/><circle cx="407.8" cy="90.3" r="4" class="f-orange" fill-opacity="0.8"/><circle cx="386.3" cy="78.2" r="4" class="f-orange" fill-opacity="0.8"/><circle cx="393.3" cy="79.2" r="4" class="f-orange" fill-opacity="0.8"/><circle cx="390.0" cy="81.3" r="4" class="f-orange" fill-opacity="0.8"/><circle cx="403.1" cy="77.7" r="4" class="f-orange" fill-opacity="0.8"/><circle cx="392.5" cy="76.7" r="4" class="f-orange" fill-opacity="0.8"/><circle cx="392.1" cy="66.1" r="4" class="f-orange" fill-opacity="0.8"/><circle cx="405.9" cy="68.8" r="4" class="f-orange" fill-opacity="0.8"/><path d="M391 72 L403 84 M391 84 L403 72" stroke="currentColor" stroke-width="2.2"/><text x="375" y="166" text-anchor="middle" font-size="13">high bias, low variance</text><circle cx="125" cy="245" r="55" fill="none" stroke="currentColor" stroke-opacity="0.45" stroke-width="1.2"/><circle cx="125" cy="245" r="37" fill="none" stroke="currentColor" stroke-opacity="0.45" stroke-width="1.2"/><circle cx="125" cy="245" r="19" fill="none" stroke="currentColor" stroke-opacity="0.45" stroke-width="1.2"/><circle cx="125" cy="245" r="3" fill="currentColor"/><circle cx="140.3" cy="270.9" r="4" class="f-blue" fill-opacity="0.8"/><circle cx="83.8" cy="259.7" r="4" class="f-blue" fill-opacity="0.8"/><circle cx="99.8" cy="253.7" r="4" class="f-blue" fill-opacity="0.8"/><circle cx="120.2" cy="202.9" r="4" class="f-blue" fill-opacity="0.8"/><circle cx="115.3" cy="246.4" r="4" class="f-blue" fill-opacity="0.8"/><circle cx="136.6" cy="223.2" r="4" class="f-blue" fill-opacity="0.8"/><circle cx="132.6" cy="225.3" r="4" class="f-blue" fill-opacity="0.8"/><circle cx="113.5" cy="231.8" r="4" class="f-blue" fill-opacity="0.8"/><circle cx="145.2" cy="267.1" r="4" class="f-blue" fill-opacity="0.8"/><circle cx="162.8" cy="269.0" r="4" class="f-blue" fill-opacity="0.8"/><path d="M119 239 L131 251 M119 251 L131 239" stroke="currentColor" stroke-width="2.2"/><text x="125" y="319" text-anchor="middle" font-size="13">low bias, high variance</text><circle cx="375" cy="245" r="55" fill="none" stroke="currentColor" stroke-opacity="0.45" stroke-width="1.2"/><circle cx="375" cy="245" r="37" fill="none" stroke="currentColor" stroke-opacity="0.45" stroke-width="1.2"/><circle cx="375" cy="245" r="19" fill="none" stroke="currentColor" stroke-opacity="0.45" stroke-width="1.2"/><circle cx="375" cy="245" r="3" fill="currentColor"/><circle cx="413.0" cy="272.7" r="4" class="f-red" fill-opacity="0.8"/><circle cx="370.4" cy="241.0" r="4" class="f-red" fill-opacity="0.8"/><circle cx="427.8" cy="229.6" r="4" class="f-red" fill-opacity="0.8"/><circle cx="393.7" cy="242.7" r="4" class="f-red" fill-opacity="0.8"/><circle cx="406.1" cy="230.7" r="4" class="f-red" fill-opacity="0.8"/><circle cx="383.7" cy="251.9" r="4" class="f-red" fill-opacity="0.8"/><circle cx="391.2" cy="213.3" r="4" class="f-red" fill-opacity="0.8"/><circle cx="414.5" cy="198.2" r="4" class="f-red" fill-opacity="0.8"/><circle cx="353.0" cy="198.8" r="4" class="f-red" fill-opacity="0.8"/><circle cx="416.6" cy="230.9" r="4" class="f-red" fill-opacity="0.8"/><path d="M391 225 L403 237 M391 237 L403 225" stroke="currentColor" stroke-width="2.2"/><text x="375" y="319" text-anchor="middle" font-size="13">high bias, high variance</text><text x="250" y="16" text-anchor="middle" font-size="12" class="t-gray">bullseye = true θ · dot = estimate from one sample · × = average of the estimates</text></svg>',
          alt: 'Four targets. Top left: dots tightly clustered on the bullseye (low bias, low variance). Top right: dots tightly clustered but up and to the right of the bullseye (high bias, low variance). Bottom left: dots widely scattered around the bullseye, their average on target (low bias, high variance). Bottom right: dots widely scattered with their average off target (high bias, high variance).',
          caption: 'Imagine repeating the study many times. **Bias** is how far the average estimate (×) sits from the truth; **variance** is how widely individual estimates scatter. You want both small.',
          maxWidth: 480,
        },
        {
          type: 'definition',
          term: 'Bias and variance of an estimator',
          text: 'The [[stat-estimator-bias|bias]] is $\\operatorname{Bias}(\\hat{\\theta}) = E[\\hat{\\theta}] - \\theta$; the estimator is **unbiased** if the bias is $0$ for every possible $\\theta$. The variance $\\operatorname{Var}(\\hat{\\theta})$ measures the scatter, and its square root is the standard error.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'More data shrinks variance, not bias',
          text: 'If your crash reporter only uploads when the game restarts online, crashes on offline sessions are never counted. The estimated crash rate is biased low, and collecting a million more sessions just gives you a very precise wrong answer. Bias comes from **how** the data are produced; only fixing the process (or modeling the missing part) removes it.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'mcq',
      prompt: 'A studio estimates average weekly play time from an in-game survey that pops up after a match. Players who play more see the survey more often, so heavy players are over-represented. What happens to the estimate if the studio collects $10$ times as many survey responses the same way?',
      options: [
        { text: 'Both its bias and its variance shrink, so it converges to the true average', why: 'Only the variance shrinks. The over-representation of heavy players is built into how responses are collected, and it is the same in a sample of any size.' },
        { text: 'Its variance shrinks but its bias stays: it converges to the wrong value', correct: true, why: 'The standard error falls by a factor of $\\sqrt{10}$, but the estimate centers on the average of the **over-weighted** population, which is too high. More data just makes you more confident in it.' },
        { text: 'Its bias shrinks but its variance stays the same', why: 'Bias does not depend on $n$ here, and variance always falls as you average more independent responses.' },
        { text: 'Nothing changes, because the survey is biased', why: 'The precision does improve; the problem is that it improves around the wrong center.' },
      ],
      explanation: 'Sample size controls **variance** ($\\operatorname{SE} \\propto 1/\\sqrt{n}$); the **sampling process** controls bias. Here each player\'s chance of answering grows with play time, so $E[\\hat{\\theta}]$ exceeds the population mean no matter how many answers you collect. This is [[stat-selection-bias|selection bias]]. Fixes: sample players (not matches) at random, or weight each response by the inverse of its chance of being selected.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Mean squared error and the bias–variance tradeoff',
      blocks: [
        {
          type: 'p',
          text: 'Bias and variance are two kinds of error. A single number that combines them is the [[stat-mean-squared-error|mean squared error]], the average squared distance from the truth: $\\operatorname{MSE}(\\hat{\\theta}) = E\\left[(\\hat{\\theta} - \\theta)^2\\right]$.',
        },
        {
          type: 'derivation',
          title: 'MSE = variance + bias squared',
          steps: [
            { tex: '\\hat{\\theta} - \\theta = (\\hat{\\theta} - E[\\hat{\\theta}]) + (E[\\hat{\\theta}] - \\theta)', why: 'Add and subtract the mean of the estimator. The first piece is random scatter; the second, $b = \\operatorname{Bias}(\\hat{\\theta})$, is a constant.' },
            { tex: '(\\hat{\\theta} - \\theta)^2 = (\\hat{\\theta} - E[\\hat{\\theta}])^2 + 2b(\\hat{\\theta} - E[\\hat{\\theta}]) + b^2', why: 'Expand $(u + b)^2 = u^2 + 2bu + b^2$.' },
            { tex: 'E[(\\hat{\\theta} - \\theta)^2] = \\operatorname{Var}(\\hat{\\theta}) + 2b \\cdot 0 + b^2', why: 'Take expectations term by term (linearity). The middle term vanishes because $E[\\hat{\\theta} - E[\\hat{\\theta}]] = 0$.' },
            { tex: '\\operatorname{MSE}(\\hat{\\theta}) = \\operatorname{Var}(\\hat{\\theta}) + \\operatorname{Bias}(\\hat{\\theta})^2', why: 'Both pieces are non-negative, so a small MSE requires **both** small variance and small bias.' },
          ],
          result: 'For an unbiased estimator, MSE is just the variance. But a little bias can be worth it if it buys a big drop in variance.',
        },
        {
          type: 'p',
          text: 'This is the [[stat-bias-variance-tradeoff|bias–variance tradeoff]] in action. To estimate a mean $\\mu = 10$, use the "shrunk" estimator $c\\bar{X}$ for a constant $c$. Its bias is $(c - 1)\\mu$ and its variance is $c^2\\sigma^2/n$, so $\\operatorname{MSE}(c) = c^2\\frac{\\sigma^2}{n} + (c - 1)^2\\mu^2$. The ordinary mean is $c = 1$.',
        },
        {
          type: 'graph',
          x: [0, 1.4],
          y: [0, 160],
          xStep: 0.2,
          yStep: 20,
          height: 270,
          functions: [
            { expr: 'x^2*s^2/n', color: 'blue', dashed: true, label: 'variance $c^2\\sigma^2/n$' },
            { expr: '100(x - 1)^2', color: 'red', dashed: true, label: 'squared bias $(c-1)^2\\mu^2$' },
            { expr: 'x^2*s^2/n + 100(x - 1)^2', color: 'purple', label: 'MSE' },
          ],
          points: [
            { x: '100/(100 + s^2/n)', y: '100(s^2/n)/(100 + s^2/n)', color: 'purple', label: 'best c' },
            { x: 1, y: 's^2/n', color: 'gray', label: 'x̄ (c = 1)' },
          ],
          sliders: [
            { name: 's', min: 2, max: 40, step: 1, value: 20, label: 'population SD $\\sigma$' },
            { name: 'n', min: 1, max: 50, step: 1, value: 4, label: 'sample size $n$' },
          ],
          readouts: [
            { label: 'best $c = \\frac{\\mu^2}{\\mu^2 + \\sigma^2/n} =$', expr: '100/(100 + s^2/n)', digits: 3 },
            { label: 'MSE of $\\bar{X}$:', expr: 's^2/n', digits: 2 },
            { label: 'MSE at best $c$:', expr: '100(s^2/n)/(100 + s^2/n)', digits: 2 },
          ],
          caption: 'With $\\sigma = 20$ and $n = 4$, shrinking halfway ($c = 0.5$) cuts the MSE from $100$ to $50$. As $n$ grows, $\\bar{X}$ gets precise and the best $c$ moves toward $1$: with plenty of data, bias is never worth it. (The catch: the best $c$ depends on the unknown $\\mu$. Real shrinkage methods pull toward a sensible prior guess instead.)',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'The same tradeoff trains your models',
          text: 'Regularization in machine learning — ridge regression, weight decay, dropout — deliberately biases a model toward simpler answers to cut its variance across training sets. Rating systems do it too: a new player\'s rating starts near the population average and moves only as evidence piles up, because an unbiased estimate from three matches would be wildly noisy.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'numeric',
      prompt: 'An estimator of average match length has bias $+0.3$ minutes and standard error $0.4$ minutes. What is its mean squared error (in minutes²)?',
      hint: '$\\operatorname{MSE} = \\operatorname{Var} + \\operatorname{Bias}^2$, and the variance is the SE squared.',
      label: '$\\operatorname{MSE} =$',
      unit: 'min²',
      answer: '0.25',
      explanation: '$\\operatorname{Var} = 0.4^2 = 0.16$ and $\\operatorname{Bias}^2 = 0.3^2 = 0.09$, so $\\operatorname{MSE} = 0.16 + 0.09 = 0.25$ min², a root-mean-squared error of $\\sqrt{0.25} = 0.5$ minutes. (Bias and SE combine like the legs of a right triangle: $\\sqrt{0.3^2 + 0.4^2} = 0.5$.) Adding the SE and the bias directly, $0.7$, overstates the error.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Why the sample variance divides by n − 1',
      blocks: [
        {
          type: 'p',
          text: 'The previous lesson showed $E[\\bar{X}] = \\mu$: the sample mean is unbiased for **any** population. For the variance, the obvious estimator is the average squared deviation, $\\frac{1}{n}\\sum (X_i - \\bar{X})^2$. It is biased. Here is the proof, and the fix.',
        },
        {
          type: 'derivation',
          title: 'The expected sum of squared deviations',
          steps: [
            { tex: '\\sum_{i=1}^{n}(X_i - \\bar{X})^2 = \\sum_{i=1}^{n} X_i^2 - n\\bar{X}^2', why: 'Expand: $\\sum X_i^2 - 2\\bar{X}\\sum X_i + n\\bar{X}^2$, and $\\sum X_i = n\\bar{X}$, so the last two terms combine to $-n\\bar{X}^2$.' },
            { tex: 'E[X_i^2] = \\operatorname{Var}(X_i) + (E[X_i])^2 = \\sigma^2 + \\mu^2', why: 'The variance shortcut $\\operatorname{Var}(Y) = E[Y^2] - (E[Y])^2$, rearranged.' },
            { tex: 'E[\\bar{X}^2] = \\operatorname{Var}(\\bar{X}) + (E[\\bar{X}])^2 = \\frac{\\sigma^2}{n} + \\mu^2', why: 'The same shortcut applied to $\\bar{X}$, whose variance is $\\sigma^2/n$ and mean is $\\mu$.' },
            { tex: 'E\\left[\\sum (X_i - \\bar{X})^2\\right] = n(\\sigma^2 + \\mu^2) - n\\left(\\frac{\\sigma^2}{n} + \\mu^2\\right)', why: 'Linearity of expectation applied to line 1.' },
            { tex: '= n\\sigma^2 - \\sigma^2 = (n - 1)\\sigma^2', why: 'The $n\\mu^2$ terms cancel.' },
          ],
          result: 'So $E\\left[\\frac{1}{n}\\sum(X_i - \\bar{X})^2\\right] = \\frac{n-1}{n}\\sigma^2 < \\sigma^2$, while $S^2 = \\frac{1}{n-1}\\sum (X_i - \\bar{X})^2$ satisfies $E[S^2] = \\sigma^2$ exactly — for every population with finite variance. Dividing by $n - 1$ is called **Bessel\'s correction**.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why deviations from $\\bar{x}$ come out too small',
          text: 'The quantity we really want is $\\frac{1}{n}\\sum (X_i - \\mu)^2$, whose expectation is exactly $\\sigma^2$. But $\\mu$ is unknown, so we measure deviations from $\\bar{x}$ instead — and $\\bar{x}$ is the number that makes $\\sum (x_i - c)^2$ **as small as possible** (set the derivative $-2\\sum(x_i - c)$ to zero: $c = \\bar{x}$). Measuring from the sample\'s own center always understates the spread around the true center. The shortfall is exactly one $\\sigma^2$ on average: one degree of freedom spent estimating $\\mu$.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Unbiased is not everything',
          text: 'Two surprises. First, $S$ is **not** unbiased for $\\sigma$: the square root is concave, so $E[S] < \\sqrt{E[S^2]} = \\sigma$ (Jensen\'s inequality). Second, for normal data the divisor $n$ has a slightly **smaller** MSE than $n - 1$, and $n + 1$ smaller still. We use $n - 1$ by convention, because it makes $S^2$ unbiased and plugs neatly into the $t$ and $\\chi^2$ results.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'error',
      prompt: 'A student tries to show what to divide $\\sum(X_i - \\bar{X})^2$ by to get an unbiased variance estimator. Tap the first wrong line.',
      lines: [
        '$\\sum (X_i - \\bar{X})^2 = \\sum X_i^2 - n\\bar{X}^2$.',
        '$E[X_i^2] = \\sigma^2 + \\mu^2$ for each $i$.',
        '$E[\\bar{X}^2] = (E[\\bar{X}])^2 = \\mu^2$.',
        '$E\\left[\\sum (X_i - \\bar{X})^2\\right] = n(\\sigma^2 + \\mu^2) - n\\mu^2 = n\\sigma^2$.',
        'So dividing by $n$ gives an unbiased estimator of $\\sigma^2$.',
      ],
      errorLines: [3],
      explanation: '$E[\\bar{X}^2] \\ne (E[\\bar{X}])^2$: the mean of a square is the square of the mean **plus the variance**. Since $\\operatorname{Var}(\\bar{X}) = \\sigma^2/n$, the correct line is $E[\\bar{X}^2] = \\frac{\\sigma^2}{n} + \\mu^2$. Then $E\\left[\\sum(X_i - \\bar{X})^2\\right] = n\\sigma^2 + n\\mu^2 - \\sigma^2 - n\\mu^2 = (n-1)\\sigma^2$, so the unbiased divisor is $n - 1$. The mistake treats $\\bar{X}$ as if it were the constant $\\mu$ — exactly the error that Bessel\'s correction fixes.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'The method of moments',
      blocks: [
        {
          type: 'p',
          text: 'How do you invent an estimator for a new model? The oldest general recipe: the population moments $E[X], E[X^2], \\dots$ are functions of the parameters; the sample moments $\\bar{x}, \\frac{1}{n}\\sum x_i^2, \\dots$ estimate them (by the law of large numbers). Set them equal and solve. That is the [[stat-method-of-moments|method of moments]]: use as many moment equations as there are parameters.',
        },
        {
          type: 'derivation',
          title: 'Three method-of-moments estimators',
          steps: [
            { tex: '\\text{Exp}(\\lambda): \\ E[X] = \\frac{1}{\\lambda} \\implies \\bar{x} = \\frac{1}{\\hat{\\lambda}} \\implies \\hat{\\lambda} = \\frac{1}{\\bar{x}}', why: 'Times between crashes are often modeled as exponential with **rate** $\\lambda$ (mean $1/\\lambda$). One parameter, one equation.' },
            { tex: '\\text{Uniform}(0, \\theta): \\ E[X] = \\frac{\\theta}{2} \\implies \\hat{\\theta} = 2\\bar{x}', why: 'A respawn timer uniform on $[0, \\theta]$ seconds has mean $\\theta/2$.' },
            { tex: 'N(\\mu, \\sigma^2): \\ \\bar{x} = \\hat{\\mu}, \\quad \\tfrac{1}{n}\\textstyle\\sum x_i^2 = \\hat{\\sigma}^2 + \\hat{\\mu}^2', why: 'Two parameters need two equations: the first and second moments, using $E[X^2] = \\sigma^2 + \\mu^2$.' },
            { tex: '\\implies \\hat{\\sigma}^2 = \\tfrac{1}{n}\\textstyle\\sum x_i^2 - \\bar{x}^2 = \\tfrac{1}{n}\\sum (x_i - \\bar{x})^2', why: 'Subtract; the identity from the previous card turns it into the average squared deviation — the version with divisor $n$, slightly biased.' },
          ],
          result: 'Quick, intuitive, and consistent: as $n$ grows, sample moments converge to population moments, so the estimates converge to the truth.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Moments can give impossible answers',
          text: 'The method uses only the averages of the data, and that can throw away information you obviously have. For the uniform respawn timer, if one observed timer was $12$ s, then certainly $\\theta \\ge 12$ — yet $2\\bar{x}$ can be smaller than $12$. You will see this in the next question, and the fix later in this lesson.',
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'numeric',
      prompt: 'A respawn timer is uniformly distributed on $[0, \\theta]$ seconds. Four observed timers were $3$, $1$, $12$ and $4$ seconds. What is the method-of-moments estimate $\\hat{\\theta} = 2\\bar{x}$?',
      hint: 'Average the four values, then double.',
      label: '$\\hat{\\theta} =$',
      unit: 's',
      answer: '10',
      explanation: '$\\bar{x} = \\frac{3 + 1 + 12 + 4}{4} = 5$, so $\\hat{\\theta} = 2 \\cdot 5 = 10$ seconds. But you **observed** a $12$-second timer, so $\\theta \\ge 12$ for certain: the estimate is impossible. The method-of-moments estimator ignores the most informative statistic here, the largest observation. Maximum likelihood (next) uses it.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'concept',
      title: 'Maximum likelihood: the most plausible parameter',
      blocks: [
        {
          type: 'p',
          text: 'Maximum likelihood flips the usual question. Normally you fix the parameter and ask how probable various data are. Now the data are fixed — you observed them — and you ask: **which parameter value would have made these data most probable?**',
        },
        {
          type: 'definition',
          term: 'Likelihood and the MLE',
          text: 'For independent observations $x_1, \\dots, x_n$ with PMF or PDF $f(x; \\theta)$, the [[stat-likelihood-function|likelihood]] is $L(\\theta) = \\prod_{i=1}^{n} f(x_i; \\theta)$ and the **log-likelihood** is $\\ell(\\theta) = \\ln L(\\theta) = \\sum_{i=1}^{n} \\ln f(x_i; \\theta)$. The [[stat-maximum-likelihood|maximum likelihood estimator]] $\\hat{\\theta}$ is the value of $\\theta$ that maximizes $L$ (equivalently $\\ell$, since $\\ln$ is increasing).',
        },
        {
          type: 'derivation',
          title: 'MLE for a win rate (Bernoulli $p$)',
          steps: [
            { tex: 'L(p) = \\prod_{i=1}^{n} p^{x_i}(1-p)^{1-x_i} = p^{k}(1-p)^{n-k}', why: 'Each match is a win ($x_i = 1$, probability $p$) or a loss ($x_i = 0$, probability $1 - p$), independently. With $k = \\sum x_i$ wins the exponents add up.' },
            { tex: '\\ell(p) = k\\ln p + (n - k)\\ln(1 - p)', why: 'Logs turn products into sums and exponents into factors — much easier to differentiate.' },
            { tex: '\\ell\'(p) = \\frac{k}{p} - \\frac{n - k}{1 - p} = 0', why: 'Set the [[derivative]] to zero to find the critical point (the chain rule gives the minus sign on the second term).' },
            { tex: 'k(1 - p) = (n - k)p \\implies k = np \\implies \\hat{p} = \\frac{k}{n}', why: 'Cross-multiply; the $kp$ terms cancel.' },
            { tex: '\\ell\'\'(p) = -\\frac{k}{p^2} - \\frac{n - k}{(1-p)^2} < 0', why: 'Negative everywhere on $(0, 1)$, so $\\ell$ is concave and the critical point is the global maximum.' },
          ],
          result: 'The MLE of a win rate is the observed fraction of wins — reassuring. The recipe is what generalizes: write $L$, take logs, differentiate, solve, check.',
        },
        {
          type: 'graph',
          x: [0, 1],
          y: [0, 1.15],
          xStep: 0.1,
          yStep: 0.25,
          height: 260,
          functions: [{ expr: relLik, color: 'blue', label: 'relative likelihood $L(p)/L(\\hat{p})$', domain: [0, 1] }],
          vlines: [{ x: 'k/20', label: 'p̂ = k/n', color: 'orange' }],
          sliders: [
            { name: 'k', min: 1, max: 19, step: 1, value: 13, label: 'wins $k$ of $20$' },
            { name: 'm', min: 1, max: 10, step: 1, value: 1, label: 'data $\\times m$ (same win fraction)' },
          ],
          readouts: [
            { label: '$\\hat{p} = k/20 =$', expr: 'k/20', digits: 2 },
            { label: 'matches $n = 20m =$', expr: '20m', digits: 0 },
          ],
          caption: 'The likelihood curve for the observed data, scaled so its peak is $1$. Move $k$: the peak follows the observed win fraction. Raise $m$: the same fraction from more matches gives a **narrower** curve — fewer values of $p$ remain plausible. That narrowing is the likelihood version of the standard error shrinking.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Likelihood is not the probability of the parameter',
          text: '$L(p)$ is the probability of the **data** for each value of $p$; as a function of $p$ it need not integrate to $1$. Saying "$p = 0.65$ is the most likely value of $p$" mixes the two up. To get genuine probabilities for parameters you need a prior distribution and Bayes\' theorem — the Bayesian approach, later in the course.',
        },
      ],
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'expr',
      prompt: 'A hero won $7$ of $20$ matches, so its log-likelihood is $\\ell(p) = 7\\ln p + 13\\ln(1 - p)$. Enter the derivative $\\ell\'(p)$.',
      hint: '$\\frac{d}{dp}\\ln(1 - p) = \\frac{-1}{1 - p}$ by the chain rule.',
      label: '$\\ell\'(p) =$',
      answer: '7/p - 13/(1 - p)',
      answerTex: '\\frac{7}{p} - \\frac{13}{1 - p}',
      variables: ['p'],
      domain: [0.1, 0.9],
      explanation: '$\\ell\'(p) = \\frac{7}{p} - \\frac{13}{1 - p}$. Setting it to zero: $7(1 - p) = 13p$, so $7 = 20p$ and $\\hat{p} = 0.35 = 7/20$, the observed win fraction. Forgetting the chain rule\'s factor $-1$ gives $\\frac{7}{p} + \\frac{13}{1-p}$, which is never zero on $(0,1)$ — a sign something went wrong.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'MLEs for Poisson, exponential and normal data',
      blocks: [
        {
          type: 'derivation',
          title: 'Poisson: crashes per day',
          steps: [
            { tex: 'L(\\lambda) = \\prod_{i=1}^{n} \\frac{e^{-\\lambda}\\lambda^{x_i}}{x_i!}', why: 'The server\'s daily crash counts $x_1, \\dots, x_n$ are modeled as independent $\\text{Pois}(\\lambda)$ (the [[stat-poisson-distribution|Poisson distribution]]).' },
            { tex: '\\ell(\\lambda) = -n\\lambda + \\left(\\sum x_i\\right)\\ln\\lambda - \\sum \\ln(x_i!)', why: 'Log of each factor: $-\\lambda + x_i\\ln\\lambda - \\ln(x_i!)$, summed. The last sum does not involve $\\lambda$.' },
            { tex: '\\ell\'(\\lambda) = -n + \\frac{\\sum x_i}{\\lambda} = 0 \\implies \\hat{\\lambda} = \\frac{\\sum x_i}{n} = \\bar{x}', why: 'Differentiate and solve. $\\ell\'\'(\\lambda) = -\\sum x_i/\\lambda^2 < 0$ (when $\\sum x_i > 0$), so it is a maximum.' },
          ],
          result: 'The MLE of the Poisson rate is the average count.',
        },
        {
          type: 'derivation',
          title: 'Exponential (rate $\\lambda$): time between crashes',
          steps: [
            { tex: 'L(\\lambda) = \\prod_{i=1}^{n}\\lambda e^{-\\lambda x_i} = \\lambda^n e^{-\\lambda\\sum x_i}', why: 'Exponential density with rate $\\lambda$ (mean $1/\\lambda$).' },
            { tex: '\\ell(\\lambda) = n\\ln\\lambda - \\lambda\\sum x_i', why: 'Take logs.' },
            { tex: '\\ell\'(\\lambda) = \\frac{n}{\\lambda} - \\sum x_i = 0 \\implies \\hat{\\lambda} = \\frac{n}{\\sum x_i} = \\frac{1}{\\bar{x}}', why: '$\\ell\'\'(\\lambda) = -n/\\lambda^2 < 0$, a maximum. Same answer as the method of moments here.' },
          ],
          result: 'Gaps averaging $\\bar{x} = 4$ hours give $\\hat{\\lambda} = 0.25$ crashes per hour.',
        },
        {
          type: 'derivation',
          title: 'Normal: both $\\mu$ and $\\sigma^2$',
          steps: [
            { tex: '\\ell(\\mu, v) = -\\frac{n}{2}\\ln(2\\pi v) - \\frac{1}{2v}\\sum (x_i - \\mu)^2, \\quad v = \\sigma^2', why: 'Log of $\\prod \\frac{1}{\\sqrt{2\\pi v}}e^{-(x_i - \\mu)^2/(2v)}$. With two parameters, maximize in one while holding the other fixed (a *partial derivative*: differentiate with respect to one variable, treating the other as a constant).' },
            { tex: '\\frac{\\partial \\ell}{\\partial \\mu} = \\frac{1}{v}\\sum (x_i - \\mu) = 0 \\implies \\hat{\\mu} = \\bar{x}', why: 'Whatever $v$ is, $\\ell$ is maximized in $\\mu$ by minimizing $\\sum(x_i - \\mu)^2$, which happens at $\\mu = \\bar{x}$.' },
            { tex: '\\frac{\\partial \\ell}{\\partial v} = -\\frac{n}{2v} + \\frac{1}{2v^2}\\sum (x_i - \\bar{x})^2 = 0', why: 'Now plug in $\\hat{\\mu} = \\bar{x}$ and differentiate with respect to $v$.' },
            { tex: '\\hat{\\sigma}^2 = \\frac{1}{n}\\sum (x_i - \\bar{x})^2', why: 'Multiply by $2v^2$ and solve. Note the divisor $n$: the MLE of the variance is the slightly **biased** one.' },
          ],
          result: 'Maximum likelihood does not promise unbiasedness. It promises something else: excellent behavior as $n$ grows (next cards).',
        },
        {
          type: 'theorem',
          name: 'Invariance of the MLE',
          text: 'If $\\hat{\\theta}$ is the MLE of $\\theta$, then the MLE of any function $g(\\theta)$ is $g(\\hat{\\theta})$. For example, the MLE of the mean time between crashes $1/\\lambda$ is $1/\\hat{\\lambda} = \\bar{x}$, and the MLE of $\\sigma$ is $\\sqrt{\\hat{\\sigma}^2}$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'numeric',
      prompt: 'A game server logged these crash counts over $7$ days: $3, 0, 2, 5, 1, 1, 2$. Model the daily count as $\\text{Pois}(\\lambda)$. Using the MLE and the invariance property, estimate the probability that tomorrow has **no** crashes. Give $4$ decimals.',
      hint: 'First $\\hat{\\lambda} = \\bar{x}$. Then $P(X = 0) = e^{-\\lambda}$, so plug in $\\hat{\\lambda}$.',
      label: '$\\widehat{P}(X = 0) =$',
      answer: 'e^(-2)',
      answerTex: '0.1353',
      tolerance: 0.0001,
      explanation: '$\\sum x_i = 3 + 0 + 2 + 5 + 1 + 1 + 2 = 14$, so $\\hat{\\lambda} = 14/7 = 2$ crashes per day. The probability of zero crashes is $g(\\lambda) = e^{-\\lambda}$, and by invariance its MLE is $e^{-\\hat{\\lambda}} = e^{-2} \\approx 0.1353$. (The observed fraction of crash-free days, $1/7 \\approx 0.143$, is another estimate — but it uses only whether each count was zero, so it is noisier.)',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'concept',
      title: 'Comparing estimators: the German tank problem',
      blocks: [
        {
          type: 'p',
          text: 'In World War II, Allied statisticians estimated German tank production from the serial numbers on captured tanks. Model: tanks are numbered $1, 2, \\dots, N$, and you see $k$ distinct serials at random. The MLE needs no calculus: the probability of any particular set of $k$ serials is $1/\\binom{N}{k}$ if $N \\ge m$ (the largest serial seen) and $0$ otherwise. That [[binomial-coefficient]] grows with $N$, so the likelihood is largest at the **smallest allowed** $N$: $\\hat{N}_{\\text{MLE}} = m$.',
        },
        {
          type: 'p',
          text: 'But $m$ is always at most $N$, so it is biased low. Correcting for the expected gap above the largest serial gives the unbiased estimator $m + \\frac{m}{k} - 1$. The method of moments gives $2\\bar{x} - 1$ (since $E[X] = \\frac{N+1}{2}$). Which is best? Simulate:',
        },
        {
          type: 'code',
          title: 'german_tanks.cpp',
          runnable: true,
          code: `#include <algorithm>
#include <cmath>
#include <cstdio>
#include <random>

std::mt19937_64 rng(1943);
double uniform01() { return (rng() >> 11) * 0x1.0p-53; }

int main() {
    const int N = 300;             // true number of tanks (serials 1..N)
    const int k = 5;               // captured tanks per "sample"
    const int reps = 200'000;
    const char* names[3] = {"method of moments 2*xbar - 1", "MLE: max serial m",
                            "unbiased: m + m/k - 1"};
    double sum[3] = {}, sumSq[3] = {};
    int impossible = 0;            // MoM estimate below a serial we actually saw

    for (int r = 0; r < reps; ++r) {
        int serial[k];
        for (int i = 0; i < k; ++i) {                      // k distinct serials
            bool fresh;
            do {
                serial[i] = 1 + int(uniform01() * N);
                fresh = std::find(serial, serial + i, serial[i]) == serial + i;
            } while (!fresh);
        }
        double xbar = 0;
        for (int s : serial) xbar += s;
        xbar /= k;
        double m = *std::max_element(serial, serial + k);
        double est[3] = {2 * xbar - 1, m, m + m / k - 1};
        if (est[0] < m) ++impossible;
        for (int j = 0; j < 3; ++j) {
            sum[j] += est[j];
            sumSq[j] += (est[j] - N) * (est[j] - N);       // squared error
        }
    }
    std::printf("true N = %d, k = %d captured serials\\n", N, k);
    for (int j = 0; j < 3; ++j)
        std::printf("%-29s bias %7.2f   RMSE %6.2f\\n",
                    names[j], sum[j] / reps - N, std::sqrt(sumSq[j] / reps));
    std::printf("MoM estimate below the largest serial seen: %.1f%% of samples\\n",
                100.0 * impossible / reps);
}`,
          output: `true N = 300, k = 5 captured serials
method of moments 2*xbar - 1  bias   -0.07   RMSE  77.13
MLE: max serial m             bias  -49.21   RMSE  64.73
unbiased: m + m/k - 1         bias   -0.05   RMSE  50.46
MoM estimate below the largest serial seen: 20.2% of samples`,
          annotations: [
            { lines: '20-26', text: 'Draw $k$ **distinct** serials (captured tanks are different tanks): redraw any duplicate.' },
            { lines: '30-31', text: 'The three estimators from the text, computed from the same sample so they are compared fairly.' },
            { lines: 35, text: 'Accumulate squared error; RMSE $= \\sqrt{\\text{MSE}}$ is in the same units as $N$ (tanks).' },
          ],
        },
        {
          type: 'p',
          text: 'Both $2\\bar{x} - 1$ and the corrected maximum are unbiased, yet the corrected maximum is far more precise (RMSE $50$ versus $77$), and the method of moments gives an impossible answer one time in five. The raw MLE is biased by about $-49$, yet it **still** beats the method of moments on MSE. Theory agrees: the exact RMSEs are $76.9$, $64.6$ and $50.4$.',
        },
        {
          type: 'callout',
          variant: 'history',
          title: 'Serial numbers versus spies',
          text: 'Conventional intelligence estimates of German tank output were several times too high. The serial-number estimates came within a few percent of the production figures found in German records after the war. Treating equipment markings as a random sample is still a standard technique for estimating production and fleet sizes.',
        },
        {
          type: 'definition',
          term: 'Consistency',
          text: 'An estimator $\\hat{\\theta}_n$ is [[stat-consistent-estimator|consistent]] if it converges in probability to $\\theta$: $P(|\\hat{\\theta}_n - \\theta| > \\varepsilon) \\to 0$ as $n \\to \\infty$ for every $\\varepsilon > 0$. A sufficient condition is $\\operatorname{MSE}(\\hat{\\theta}_n) \\to 0$, i.e. both bias and variance vanish (by Chebyshev\'s inequality).',
        },
        {
          type: 'p',
          text: 'Consistency is the bare minimum: with enough data, you get the right answer. $\\bar{X}$ is consistent; the divisor-$n$ variance is biased but consistent (its bias $-\\sigma^2/n$ vanishes); MLEs are consistent under mild conditions. Even better, for large $n$ an MLE is approximately normal with the smallest possible variance among well-behaved estimators — which is why it is the default method in most of statistics.',
        },
      ],
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'truefalse',
      prompt: 'Every unbiased estimator is consistent.',
      answer: false,
      explanation: 'Counterexample: estimate $\\mu$ by $X_1$, the **first** observation only, ignoring the rest. $E[X_1] = \\mu$, so it is unbiased, but its variance is $\\sigma^2$ no matter how large $n$ is, so it never concentrates around $\\mu$. Consistency needs the variance to vanish too. (Conversely, biased estimators can be consistent: $\\frac{1}{n}\\sum(X_i - \\bar{X})^2$ has bias $-\\sigma^2/n \\to 0$ and variance $\\to 0$.)',
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'concept',
      title: 'Maximum likelihood is how machine-learning models are trained',
      blocks: [
        {
          type: 'p',
          text: 'Suppose a model predicts, for match $i$, the probability $q_i$ that the player wins (from their rating, hero, map, …), and the outcome is $y_i \\in \\{0, 1\\}$. If outcomes are independent Bernoulli($q_i$), the likelihood of all the results is the same Bernoulli product as before, with a different $q_i$ for each match.',
        },
        {
          type: 'derivation',
          title: 'From likelihood to cross-entropy',
          steps: [
            { tex: 'L = \\prod_{i=1}^{n} q_i^{\\,y_i}(1 - q_i)^{1 - y_i}', why: 'Each match contributes $q_i$ if it was a win and $1 - q_i$ if it was a loss.' },
            { tex: '-\\ln L = -\\sum_{i=1}^{n}\\left[y_i\\ln q_i + (1 - y_i)\\ln(1 - q_i)\\right]', why: 'Take logs and flip the sign, so that maximizing $L$ becomes minimizing a positive loss.' },
          ],
          result: 'This is the **binary cross-entropy** loss (log loss). Training a classifier by minimizing cross-entropy **is** maximum likelihood estimation of its parameters.',
        },
        {
          type: 'p',
          text: 'The [[stat-cross-entropy|cross-entropy]] punishes confident mistakes hard: a match predicted as a $99\\%$ win that ends in a loss costs $-\\ln 0.01 \\approx 4.6$, while a $60\\%$ prediction that misses costs only $-\\ln 0.4 \\approx 0.92$. The same story holds for regression: if $y_i = f(x_i) + \\varepsilon_i$ with normal noise $\\varepsilon_i \\sim N(0, \\sigma^2)$, the log-likelihood is $-\\frac{1}{2\\sigma^2}\\sum (y_i - f(x_i))^2$ plus a constant, so maximum likelihood **is** least squares — the [[least-squares-solution|least-squares solution]] you met in linear algebra.',
        },
        {
          type: 'code',
          title: 'log_loss.cpp (excerpt)',
          code: `// Negative log-likelihood of 0/1 outcomes y under predicted win probabilities q.
double crossEntropy(const std::vector<int>& y, const std::vector<double>& q) {
    const double eps = 1e-12;                 // keep log() away from log(0)
    double loss = 0;
    for (std::size_t i = 0; i < y.size(); ++i) {
        double qi = std::clamp(q[i], eps, 1 - eps);
        loss -= y[i] ? std::log(qi) : std::log(1 - qi);
    }
    return loss / y.size();                   // average per match
}`,
          annotations: [
            { lines: 3, text: 'A prediction of exactly $0$ or $1$ that turns out wrong has infinite loss; clamping keeps training numerically stable.' },
            { lines: 7, text: 'Only one of the two terms is nonzero for each match, so compute just that one.' },
          ],
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Why logs in code, too',
          text: 'Never compute a likelihood as a raw product of thousands of probabilities: $0.5^{1100}$ underflows to $0$ in a `double`. Sum log-probabilities instead. Every serious statistics and ML library works with log-likelihoods for exactly this reason.',
        },
      ],
    },
    // ------------------------------------------------------------------ 16
    {
      kind: 'mcq',
      prompt: 'A matchmaking model predicted a $90\\%$ chance that Team A would win. Team A **lost**. What does this match contribute to the cross-entropy loss (natural log)?',
      options: [
        { text: '$-\\ln 0.9 \\approx 0.105$', why: 'That is the loss if Team A had **won**. When the outcome is a loss ($y = 0$) the term is $-\\ln(1 - q)$, the log of the probability the model gave to what actually happened.' },
        { text: '$0.9^2 = 0.81$', why: 'That is the squared error $(y - q)^2 = (0 - 0.9)^2$, a different loss (the Brier score), not cross-entropy.' },
        { text: '$-\\ln 0.1 \\approx 2.303$', correct: true, why: 'The model gave the actual outcome probability $1 - 0.9 = 0.1$, and the loss is $-\\ln 0.1 \\approx 2.303$ — large, because the model was confident and wrong.' },
        { text: '$\\ln 0.1 \\approx -2.303$', why: 'The sign is flipped: cross-entropy is the **negative** log-likelihood, so every term is non-negative.' },
      ],
      explanation: 'Each match contributes $-\\ln(\\text{probability the model assigned to the actual outcome})$. Team A lost, and the model gave that only $0.1$, so the term is $-\\ln 0.1 \\approx 2.303$. Had it predicted $50\\%$, the cost would have been $-\\ln 0.5 \\approx 0.693$. Minimizing the total pushes the model toward the parameter values under which the observed results are most probable — maximum likelihood.',
    },
    // ------------------------------------------------------------------ 17
    {
      kind: 'order',
      prompt: 'Put the steps for finding a maximum likelihood estimator with calculus in order.',
      lines: [
        'Write the likelihood $L(\\theta) = \\prod_i f(x_i; \\theta)$ for the observed data',
        'Take logs: $\\ell(\\theta) = \\sum_i \\ln f(x_i; \\theta)$',
        'Differentiate: compute $\\ell\'(\\theta)$',
        'Solve $\\ell\'(\\theta) = 0$ for $\\theta$',
        'Check it is a maximum (e.g. $\\ell\'\'(\\hat{\\theta}) < 0$) and that it lies in the allowed range',
      ],
      explanation: 'Likelihood first (it encodes the model and the data), then logs (products become sums), then the derivative, the critical point, and a check. The last step matters: the German tank example shows the maximum can sit at a **boundary** of the allowed range, where the derivative is not zero, so always look at the shape of $L$ too.',
    },
  ],
  takeaways: [
    'An estimator is a random variable. Judge it by bias $E[\\hat{\\theta}] - \\theta$, variance, and $\\operatorname{MSE} = \\operatorname{Var} + \\operatorname{Bias}^2$. More data cuts variance, never bias from the sampling process.',
    '$E\\left[\\sum(X_i - \\bar{X})^2\\right] = (n-1)\\sigma^2$, so $S^2$ with divisor $n - 1$ is unbiased: deviations from $\\bar{x}$ understate deviations from $\\mu$ by one degree of freedom.',
    'Method of moments: match population and sample moments. Simple and consistent, but can ignore key information ($2\\bar{x}$ below the largest observation).',
    'Maximum likelihood: maximize $\\ell(\\theta) = \\sum \\ln f(x_i; \\theta)$. Bernoulli $\\hat{p} = k/n$; Poisson $\\hat{\\lambda} = \\bar{x}$; exponential (rate) $\\hat{\\lambda} = 1/\\bar{x}$; normal $\\hat{\\mu} = \\bar{x}$, $\\hat{\\sigma}^2 = \\frac{1}{n}\\sum(x_i - \\bar{x})^2$. MLEs are invariant: the MLE of $g(\\theta)$ is $g(\\hat{\\theta})$.',
    'Unbiased is not the same as best: a little bias can lower MSE (shrinkage, the tank MLE beating the method of moments). Consistency means the estimator converges to the truth as $n \\to \\infty$.',
    'Minimizing cross-entropy is maximum likelihood for Bernoulli outcomes; least squares is maximum likelihood under normal noise.',
  ],
  reading: [
    {
      title: 'MIT OCW 18.05 — Introduction to Probability and Statistics',
      url: 'https://ocw.mit.edu/courses/18-05-introduction-to-probability-and-statistics-spring-2014/',
      source: 'other',
      note: 'The class notes on maximum likelihood estimates work many more examples, including the uniform and the German tank-style "capture" problems.',
    },
    {
      title: 'Wikipedia — Maximum likelihood estimation',
      url: 'https://en.wikipedia.org/wiki/Maximum_likelihood_estimation',
      source: 'wikipedia',
      note: 'The general theory: consistency, asymptotic normality, efficiency, and the connection to cross-entropy and least squares.',
    },
    {
      title: 'Wikipedia — German tank problem',
      url: 'https://en.wikipedia.org/wiki/German_tank_problem',
      source: 'wikipedia',
      note: 'The full history, the derivation of $m + m/k - 1$, and a table comparing statistical and intelligence estimates with the true figures.',
    },
    {
      title: 'Wikipedia — Bias–variance tradeoff',
      url: 'https://en.wikipedia.org/wiki/Bias%E2%80%93variance_tradeoff',
      source: 'wikipedia',
      note: 'How the MSE decomposition becomes the central tradeoff of machine learning and model selection.',
    },
  ],
};
