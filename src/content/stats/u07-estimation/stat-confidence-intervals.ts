import type { GraphBlock, Lesson } from '../../types';

// ---------------------------------------------------------------- coverage demo
// 40 simulated playtests: n = 25 players each from a population with mu = 50, sigma = 10
// (so SE = 2). Sample means generated once (numpy, seed 172) and rounded.
const MU = 50;
const means = [
  49.01, 48.54, 52.16, 48.56, 53.31, 47.93, 50.97, 51.52, 51.37, 49.47, 49.6, 49.51, 52.85, 51.8,
  49.73, 48.04, 46.99, 48.51, 49.96, 46.64, 50.75, 51.44, 50.04, 51.85, 49.59, 49.95, 49.28, 53.0,
  47.82, 55.02, 50.03, 50.26, 48.72, 48.93, 51.66, 53.98, 46.78, 48.47, 51.85, 51.13,
];
// Half-width of the z-interval at confidence level c: z_{(1-c)/2} * SE.
const half = '2invnorm((1 + c)/2)';
const coverGraph: GraphBlock = {
  type: 'graph',
  x: [40, 60],
  y: [0, 43],
  xStep: 2,
  yStep: 10,
  height: 420,
  segments: means.map((m, i) => ({
    from: [`${m} - ${half}`, i + 1] as [string, number],
    to: [`${m} + ${half}`, i + 1] as [string, number],
    color: 'blue' as const,
  })),
  // A red dot marks each interval that misses mu; for covering intervals the y-coordinate
  // is 0/0 (undefined), so the dot is hidden.
  points: means.map((m, i) => ({
    x: m,
    y: `${i + 1} + 0/(sign(abs(${(m - MU).toFixed(2)}) - ${half}) + 1)`,
    color: 'red' as const,
  })),
  vlines: [{ x: MU, label: 'true μ = 50', color: 'gray' }],
  sliders: [{ name: 'c', min: 0.5, max: 0.99, step: 0.01, value: 0.95, label: 'confidence level $C$' }],
  readouts: [
    { label: '$z_{\\alpha/2} =$', expr: 'invnorm((1 + c)/2)', digits: 3 },
    {
      label: 'intervals that contain $\\mu$ (of $40$):',
      expr: means.map((m) => `(1 - sign(abs(${(m - MU).toFixed(2)}) - ${half}))/2`).join(' + '),
      digits: 0,
    },
  ],
  caption: 'Forty playtests, each computing $\\bar{x} \\pm z_{\\alpha/2}\\cdot 2$ (here $\\sigma = 10$, $n = 25$, so the SE is $2$). The true $\\mu = 50$ never moves; the **intervals** do. At $95\\%$, $38$ of the $40$ intervals catch $\\mu$ and two miss (red dots). Lower $C$ to $80\\%$: the intervals shrink and about $8$ miss. Raise it to $99\\%$: none miss here, but the intervals are wide.',
};

// ------------------------------------------------- actual coverage of Wald vs Wilson
// Coverage(p) = sum over k of P(X = k) * [p is inside the interval computed from k], n = 30.
const NP = 30;
const Z = 1.96;
const wald = Array.from({ length: NP + 1 }, (_, k) => {
  const q = k / NP;
  const h = Z * Math.sqrt((q * (1 - q)) / NP);
  return `nCr(${NP}, ${k})*x^${k}*(1 - x)^${NP - k}*(1 + sign(${h.toFixed(6)} - abs(${q.toFixed(6)} - x)))/2`;
}).join(' + ');
const wilson = Array.from({ length: NP + 1 }, (_, k) => {
  const q = k / NP;
  return `nCr(${NP}, ${k})*x^${k}*(1 - x)^${NP - k}*(1 + sign(${((Z * Z) / NP).toFixed(6)}*x*(1 - x) - (${q.toFixed(6)} - x)^2))/2`;
}).join(' + ');

export const lesson: Lesson = {
  id: 'stat-confidence-intervals',
  title: 'Confidence Intervals',
  summary: 'From a single estimate to a range of plausible values: deriving $z$- and $t$-intervals for a mean, intervals for a proportion (and why the textbook Wald interval misbehaves), choosing a sample size for a target margin of error, intervals for differences in A/B tests — and what "95% confident" does and does not mean.',
  minutes: 21,
  objectives: [
    'Derive the $z$-interval $\\bar{x} \\pm z_{\\alpha/2}\\sigma/\\sqrt{n}$ from the sampling distribution of $\\bar{X}$, and state the correct coverage interpretation',
    'Construct and interpret a $t$-interval for a mean when $\\sigma$ is unknown',
    'Construct a Wald interval for a proportion, explain when it fails, and describe the Wilson interval',
    'Choose the sample size needed for a target margin of error',
    'Build intervals for a difference of two means or two proportions, and avoid the common misinterpretations',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'From a point estimate to an interval',
      blocks: [
        {
          type: 'p',
          text: 'A playtest of $n = 40$ matches on a new map gives an average match length of $\\bar{x} = 52$ minutes. That point estimate is almost certainly not **exactly** $\\mu$. A more honest report is a range of plausible values, together with a statement of how reliable the method for producing the range is. That is a [[stat-confidence-interval|confidence interval]].',
        },
        {
          type: 'p',
          text: 'The recipe comes straight from the sampling distribution. Suppose for now that $\\sigma$ is known — say years of match data show $\\sigma = 8$ minutes and the new map changes the mean, not the spread. Then $Z = \\frac{\\bar{X} - \\mu}{\\sigma/\\sqrt{n}}$ is (approximately) standard normal, and we can trap it.',
        },
        {
          type: 'derivation',
          title: 'Deriving the $z$-interval',
          steps: [
            { tex: 'P\\left(-z_{\\alpha/2} \\le \\frac{\\bar{X} - \\mu}{\\sigma/\\sqrt{n}} \\le z_{\\alpha/2}\\right) = 1 - \\alpha', why: '$z_{\\alpha/2}$ is the point with area $\\alpha/2$ to its right under $N(0,1)$, so the middle has area $1 - \\alpha$. For $95\\%$, $\\alpha = 0.05$ and $z_{0.025} = 1.96$.' },
            { tex: 'P\\left(-z_{\\alpha/2}\\tfrac{\\sigma}{\\sqrt{n}} \\le \\bar{X} - \\mu \\le z_{\\alpha/2}\\tfrac{\\sigma}{\\sqrt{n}}\\right) = 1 - \\alpha', why: 'Multiply all three parts by the positive number $\\sigma/\\sqrt{n}$.' },
            { tex: 'P\\left(\\bar{X} - z_{\\alpha/2}\\tfrac{\\sigma}{\\sqrt{n}} \\le \\mu \\le \\bar{X} + z_{\\alpha/2}\\tfrac{\\sigma}{\\sqrt{n}}\\right) = 1 - \\alpha', why: 'Rearrange each inequality to isolate $\\mu$ (subtract $\\bar{X}$, multiply by $-1$, which flips both inequalities). Same event, so same probability.' },
            { tex: '\\bar{x} \\pm z_{\\alpha/2}\\frac{\\sigma}{\\sqrt{n}} = 52 \\pm 1.96\\cdot\\frac{8}{\\sqrt{40}} = 52 \\pm 2.48', why: 'Plug in the data. The interval is $(49.52, 54.48)$ minutes.' },
          ],
          result: 'The $95\\%$ $z$-interval for the mean match length is $(49.5, 54.5)$ minutes. The half-width $z_{\\alpha/2}\\,\\sigma/\\sqrt{n} = 2.48$ is the [[stat-margin-of-error|margin of error]].',
        },
        {
          type: 'p',
          text: 'Look closely at the third line: the random quantities are the **endpoints** $\\bar{X} \\pm \\dots$; $\\mu$ is a fixed number. The probability statement is about the interval landing on $\\mu$, not about $\\mu$ moving. Every confidence interval in this lesson has the shape **estimate $\\pm$ critical value $\\times$ standard error**.',
        },
        {
          type: 'graph',
          x: [-4, 4],
          y: [0, 0.45],
          xStep: 1,
          yStep: 0.1,
          height: 230,
          functions: [{ expr: 'normpdf(x)', color: 'blue', label: 'standard normal' }],
          areas: [{ expr: 'normpdf(x)', from: '-invnorm((1 + c)/2)', to: 'invnorm((1 + c)/2)', color: 'blue' }],
          vlines: [
            { x: 'invnorm((1 + c)/2)', label: 'z', color: 'orange' },
            { x: '-invnorm((1 + c)/2)', label: '−z', color: 'orange' },
          ],
          sliders: [{ name: 'c', min: 0.5, max: 0.995, step: 0.005, value: 0.95, label: 'confidence level $C = 1 - \\alpha$' }],
          readouts: [{ label: '$z_{\\alpha/2} = \\Phi^{-1}\\left(\\frac{1 + C}{2}\\right) =$', expr: 'invnorm((1 + c)/2)', digits: 3 }],
          caption: 'The shaded middle area is the confidence level $C$; each unshaded tail holds $\\alpha/2$. More confidence pushes $z_{\\alpha/2}$ outward, and the interval gets wider.',
        },
        {
          type: 'table',
          headers: ['confidence $C$', '$80\\%$', '$90\\%$', '$95\\%$', '$98\\%$', '$99\\%$'],
          rows: [['$z_{\\alpha/2}$', '$1.282$', '$1.645$', '$1.960$', '$2.326$', '$2.576$']],
          caption: 'Critical values of the standard normal for two-sided intervals.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'numeric',
      prompt: 'Ping times to a game server have known $\\sigma = 30$ ms. A sample of $n = 36$ pings averages $\\bar{x} = 120$ ms. Find the **upper** endpoint of a $90\\%$ $z$-interval for the mean ping (use $z_{0.05} = 1.645$). Give $2$ decimals.',
      hint: 'Margin of error $= z_{\\alpha/2}\\,\\sigma/\\sqrt{n}$; for $90\\%$, $\\alpha/2 = 0.05$.',
      label: 'upper endpoint $=$',
      unit: 'ms',
      answer: '120 + invnorm(0.95)*30/sqrt(36)',
      answerTex: '128.22',
      tolerance: 0.006,
      explanation: '$\\operatorname{SE} = 30/\\sqrt{36} = 5$ ms and the margin is $1.645 \\times 5 = 8.225$ ms, so the interval is $120 \\pm 8.22 = (111.78, 128.22)$ ms. A common slip is to use $1.96$ (that is the $95\\%$ value, giving $129.80$) or $z_{0.10} = 1.282$ (the one-sided $90\\%$ value).',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'What "95% confident" means: coverage',
      blocks: [
        {
          type: 'p',
          text: 'Before you collect data, the interval $\\bar{X} \\pm 1.96\\,\\sigma/\\sqrt{n}$ is random, and the probability that it will contain $\\mu$ is $0.95$. After you collect data, the interval $(49.52, 54.48)$ is two fixed numbers, and $\\mu$ is a fixed number. Either it is inside or it is not — there is nothing random left. So "95%" describes the **procedure**: it captures the true value in $95\\%$ of the samples it could be applied to. That long-run success rate is its **coverage**.',
        },
        coverGraph,
        {
          type: 'definition',
          term: 'Confidence level',
          text: 'A procedure that produces intervals $[L, U]$ from data has confidence level $1 - \\alpha$ if $P(L \\le \\theta \\le U) = 1 - \\alpha$ for every possible value of the parameter $\\theta$. "We are $95\\%$ confident that $\\mu$ is between $49.5$ and $54.5$" is shorthand for: this interval came from a method that works $95\\%$ of the time.',
        },
        {
          type: 'callout',
          variant: 'analogy',
          title: 'Ring toss',
          text: 'Think of a carnival player who rings the peg $95\\%$ of the time. Once a ring has landed, it either circles the peg or it does not; you just cannot see which from where you stand. Your $95\\%$ confidence is in the thrower, not in a particular ring. And the peg ($\\mu$) never moves — only the rings ($[L, U]$) are random.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'What about probability statements for μ?',
          text: 'If you want to say "there is a $95\\%$ probability that $\\mu$ is in this range", you need to treat $\\mu$ as uncertain with a probability distribution — a prior, updated by the data. That is a Bayesian [[stat-credible-interval|credible interval]], coming later in the course. With large samples and vague priors the two intervals are often numerically close, but they answer different questions.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'mcq',
      prompt: 'From $64$ test matches, a $95\\%$ confidence interval for the mean number of deaths per match in a new mode is $(2.1, 3.4)$. Which statement is correct?',
      options: [
        { text: 'There is a $95\\%$ probability that the true mean is between $2.1$ and $3.4$.', why: 'Once computed, the interval is fixed and so is $\\mu$: it either contains $\\mu$ or it does not. The $95\\%$ is the success rate of the method over repeated samples, not a probability about this one interval.' },
        { text: 'About $95\\%$ of matches in this mode have between $2.1$ and $3.4$ deaths.', why: 'This confuses the mean with individual values. The interval estimates the **average**; individual matches vary much more (by about the SD, not the SE).' },
        { text: 'If the study were repeated, $95\\%$ of the new sample means would fall between $2.1$ and $3.4$.', why: 'New sample means scatter around $\\mu$, not around this sample\'s $\\bar{x}$. On average only about $83\\%$ of replication means land inside a given $95\\%$ interval.' },
        { text: 'The interval came from a method that captures the true mean in $95\\%$ of samples, so $(2.1, 3.4)$ is a plausible range for the mean.', correct: true, why: 'This is the coverage interpretation: the confidence belongs to the procedure. The interval gives the values of $\\mu$ that are consistent with the data at that level.' },
      ],
      explanation: 'A confidence interval is a statement about $\\mu$ (a parameter), made by a method with a known long-run success rate. It is **not** a range for individual data values, not a prediction for future sample means, and — in the frequentist framework used here — not a probability distribution for $\\mu$.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'The t-interval: when σ is unknown',
      blocks: [
        {
          type: 'p',
          text: 'Knowing $\\sigma$ but not $\\mu$ is rare. Normally you estimate both from the same sample. Replacing $\\sigma$ by $s$ changes the pivot to $T = \\frac{\\bar{X} - \\mu}{S/\\sqrt{n}}$, which (for normal data) has the [[stat-t-distribution|$t$ distribution]] with $n - 1$ degrees of freedom. The same rearrangement as before gives:',
        },
        {
          type: 'theorem',
          name: 'One-sample $t$-interval',
          tex: '\\bar{x} \\pm t_{\\alpha/2,\\,n-1}\\,\\frac{s}{\\sqrt{n}}',
          text: 'A $100(1-\\alpha)\\%$ confidence interval for $\\mu$, exact when the population is normal and approximately right for other populations when $n$ is large enough for the CLT (roughly $n \\ge 30$ unless the data are strongly skewed or have outliers).',
        },
        {
          type: 'table',
          headers: ['df $n - 1$', '$4$', '$9$', '$11$', '$15$', '$19$', '$29$', '$49$', '$99$', '$\\infty$'],
          rows: [
            ['$90\\%$: $t_{0.05}$', '$2.132$', '$1.833$', '$1.796$', '$1.753$', '$1.729$', '$1.699$', '$1.677$', '$1.660$', '$1.645$'],
            ['$95\\%$: $t_{0.025}$', '$2.776$', '$2.262$', '$2.201$', '$2.131$', '$2.093$', '$2.045$', '$2.010$', '$1.984$', '$1.960$'],
            ['$99\\%$: $t_{0.005}$', '$4.604$', '$3.250$', '$3.106$', '$2.947$', '$2.861$', '$2.756$', '$2.680$', '$2.626$', '$2.576$'],
          ],
          caption: '$t$ critical values for two-sided intervals. Small samples pay a real price: at $n = 5$ the $95\\%$ multiplier is $2.776$, not $1.96$.',
        },
        {
          type: 'derivation',
          title: 'Frame time of a new build',
          steps: [
            { tex: 'n = 12,\\quad \\bar{x} = 16.9\\text{ ms},\\quad s = 1.8\\text{ ms}', why: 'Twelve benchmark runs of the new build, each reporting its average frame time. Run averages are close to normal, so the $t$-interval is appropriate.' },
            { tex: '\\operatorname{SE} = \\frac{s}{\\sqrt{n}} = \\frac{1.8}{\\sqrt{12}} \\approx 0.520\\text{ ms}', why: 'The **estimated** standard error.' },
            { tex: 't_{0.025,\\,11} = 2.201', why: 'From the table: $95\\%$ two-sided, $n - 1 = 11$ degrees of freedom.' },
            { tex: '16.9 \\pm 2.201(0.520) = 16.9 \\pm 1.14 = (15.76, 18.04)\\text{ ms}', why: 'Estimate $\\pm$ critical value $\\times$ SE.' },
          ],
          result: 'We are $95\\%$ confident the build\'s mean frame time is between $15.8$ and $18.0$ ms. Since the 60 fps budget is $16.7$ ms, the data cannot yet tell whether the build is within budget — run more benchmarks.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Check the data before trusting the interval',
          text: 'The $t$-interval is robust to mild non-normality but not to strong skew or outliers in small samples: one $200$ ms hitch among twelve runs inflates both $\\bar{x}$ and $s$. Plot the data first. For skewed metrics (purchase amounts, latencies) consider a log transform, a larger sample, or the [[stat-bootstrap|bootstrap]] (a later unit).',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'numeric',
      prompt: 'Sixteen playtesters rate a new level\'s difficulty on a $0$–$100$ scale: $\\bar{x} = 42.0$, $s = 6.0$. Find the **lower** endpoint of the $95\\%$ $t$-interval for the mean rating. Use $t_{0.025,\\,15} = 2.131$. Give $2$ decimals.',
      hint: '$\\operatorname{SE} = s/\\sqrt{n} = 6/4$.',
      label: 'lower endpoint $=$',
      answer: '42 - 2.131*6/sqrt(16)',
      answerTex: '38.80',
      tolerance: 0.006,
      explanation: '$\\operatorname{SE} = 6/\\sqrt{16} = 1.5$, margin $= 2.131 \\times 1.5 = 3.1965$, so the interval is $42.0 \\pm 3.20 = (38.80, 45.20)$. Using $z = 1.96$ instead would give $39.06$ — too narrow, because with only $16$ testers the uncertainty in $s$ is real and the $t$ multiplier accounts for it.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'Intervals for a proportion: Wald and Wilson',
      blocks: [
        {
          type: 'p',
          text: 'For a proportion, $\\hat{p}$ is approximately $N\\left(p, \\frac{p(1-p)}{n}\\right)$. Plugging $\\hat{p}$ into the unknown standard error gives the textbook **Wald interval**:',
        },
        {
          type: 'math',
          tex: '\\hat{p} \\pm z_{\\alpha/2}\\sqrt{\\frac{\\hat{p}(1 - \\hat{p})}{n}}',
        },
        {
          type: 'derivation',
          title: 'Win rate of the blue side',
          steps: [
            { tex: '\\hat{p} = \\frac{537}{1000} = 0.537', why: 'In $1000$ ranked matches the blue team won $537$.' },
            { tex: '\\operatorname{SE} = \\sqrt{\\frac{0.537 \\cdot 0.463}{1000}} \\approx 0.01577', why: 'Estimated standard error; $n\\hat{p} = 537$ and $n(1 - \\hat{p}) = 463$ are large, so the normal approximation is excellent.' },
            { tex: '0.537 \\pm 1.96(0.01577) = 0.537 \\pm 0.031 = (0.506, 0.568)', why: 'The $95\\%$ Wald interval.' },
          ],
          result: 'Blue wins between about $50.6\\%$ and $56.8\\%$ of matches: the whole interval is above $50\\%$, evidence of a real map-side advantage.',
        },
        {
          type: 'p',
          text: 'With large counts the Wald interval is fine. With small counts, or $p$ near $0$ or $1$, it fails badly. If $3$ of $20$ playtesters hit a crash bug, it gives $0.15 \\pm 0.156 = (-0.006, 0.306)$ — a negative rate. If $0$ of $50$ hit it, it gives $[0, 0]$, claiming certainty that the bug never happens. And even when it looks sensible, its actual coverage can be far below $95\\%$:',
        },
        {
          type: 'graph',
          x: [0, 1],
          y: [0.6, 1.01],
          xStep: 0.1,
          yStep: 0.1,
          height: 270,
          functions: [
            { expr: wald, color: 'red', label: 'Wald: actual coverage', domain: [0.002, 0.998] },
            { expr: wilson, color: 'green', label: 'Wilson: actual coverage', domain: [0.002, 0.998] },
          ],
          hlines: [{ y: 0.95, color: 'gray' }],
          caption: 'The exact probability that each nominal $95\\%$ interval contains the true $p$, for $n = 30$, computed by summing binomial probabilities over all $31$ possible outcomes; the gray line is the promised $95\\%$. The jagged lines come from the discreteness of $X$. The Wald interval (red) averages only about $88\\%$ and collapses near $0$ and $1$ (about $81\\%$ at $p = 0.1$). The Wilson interval (green) stays close to $95\\%$ almost everywhere.',
        },
        {
          type: 'definition',
          term: 'Wilson score interval',
          text: 'Instead of plugging in $\\hat{p}$, keep the true $p$ in the standard error and solve $|\\hat{p} - p| \\le z\\sqrt{p(1-p)/n}$ for $p$ (a quadratic inequality). The solution is the [[stat-wilson-interval|Wilson interval]] $$\\frac{\\hat{p} + \\frac{z^2}{2n} \\pm z\\sqrt{\\frac{\\hat{p}(1-\\hat{p})}{n} + \\frac{z^2}{4n^2}}}{1 + \\frac{z^2}{n}},$$ which is pulled toward $\\frac{1}{2}$ and never leaves $[0, 1]$. For $3$ of $20$: $(0.052, 0.360)$. For $0$ of $50$: $(0, 0.071)$.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Quick fixes in practice',
          text: 'For a fast approximation to Wilson, use the **Agresti–Coull** ("plus four") interval: add $2$ successes and $2$ failures, then use the Wald formula. And when you observe zero events in $n$ trials, the **rule of three** gives an approximate $95\\%$ upper bound of $3/n$: zero crashes in $50$ sessions means the crash rate is plausibly as high as $6\\%$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'truefalse',
      prompt: 'None of $50$ playtesters encountered a particular bug. The $95\\%$ Wald interval is $0 \\pm 1.96\\sqrt{0 \\cdot 1/50} = [0, 0]$, so we can be $95\\%$ confident that the bug rate is exactly zero.',
      answer: false,
      explanation: 'With $\\hat{p} = 0$ the estimated standard error is $0$, so the Wald interval collapses to a point — a failure of the method, not evidence of certainty. A bug that hits $2\\%$ of sessions has probability $0.98^{50} \\approx 0.36$ of never showing up in $50$ sessions. The Wilson interval gives $(0, 0.071)$ and the rule of three gives an upper bound of about $3/50 = 0.06$: the true rate could plausibly be several percent.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'concept',
      title: 'Choosing a sample size',
      blocks: [
        {
          type: 'p',
          text: 'Turn the margin-of-error formula around: decide how precise you need to be, then solve for $n$. For a mean with margin $E$ at confidence $1 - \\alpha$:',
        },
        {
          type: 'math',
          tex: 'E = z_{\\alpha/2}\\frac{\\sigma}{\\sqrt{n}} \\quad\\implies\\quad n = \\left(\\frac{z_{\\alpha/2}\\,\\sigma}{E}\\right)^2, \\quad\\text{rounded up}',
          caption: 'You need a planning value for $\\sigma$: from past data, a pilot study, or a conservative guess. Always round **up** — rounding down misses the target.',
        },
        {
          type: 'p',
          text: 'For a proportion, $E = z_{\\alpha/2}\\sqrt{p(1-p)/n}$ gives $n = z_{\\alpha/2}^2\\,p^*(1-p^*)/E^2$, where $p^*$ is a planning guess. Since $p(1-p)$ is largest at $p = \\frac{1}{2}$ (where it equals $\\frac{1}{4}$), using $p^* = 0.5$ guarantees the margin whatever the truth is.',
        },
        {
          type: 'derivation',
          title: 'A unit climate survey',
          steps: [
            { tex: 'n = \\frac{1.96^2 \\cdot 0.25}{0.03^2} = \\frac{0.9604}{0.0009} \\approx 1067.1', why: 'A command wants the proportion of personnel satisfied with a new policy to within $\\pm 3$ percentage points at $95\\%$ confidence, with no prior idea of $p$: use $p^* = 0.5$.' },
            { tex: 'n = 1068', why: 'Round up. This is why so many national polls survey about $1000$ people: it buys about $\\pm 3$ points.' },
            { tex: 'E = \\pm 5 \\text{ points}: \\ n = \\frac{0.9604}{0.0025} \\approx 384.2 \\to 385', why: 'Loosening the margin by a factor $5/3$ cuts the sample by $(5/3)^2 \\approx 2.8$.' },
          ],
          result: 'Precision is expensive: halving the margin quadruples the sample. Notice that the population size does not appear — a sample of $1068$ is as precise for a brigade as for a whole country (as long as the population is much larger than the sample).',
        },
        {
          type: 'graph',
          x: [0, 2000],
          y: [0, 0.1],
          xStep: 250,
          yStep: 0.02,
          height: 240,
          functions: [{ expr: 'invnorm((1 + c)/2)*0.5/sqrt(x)', color: 'purple', label: 'worst-case margin $z_{\\alpha/2}\\cdot 0.5/\\sqrt{n}$', domain: [20, 2000] }],
          hlines: [{ y: 0.03, label: '±3 points', color: 'gray' }],
          sliders: [{ name: 'c', min: 0.8, max: 0.99, step: 0.01, value: 0.95, label: 'confidence level $C$' }],
          readouts: [{ label: '$n$ needed for $\\pm 3$ points:', expr: 'ceil((invnorm((1 + c)/2)*0.5/0.03)^2)', digits: 0 }],
          caption: 'The margin of error for a proportion falls like $1/\\sqrt{n}$. Raising the confidence level lifts the whole curve: $\\pm 3$ points at $99\\%$ needs $1844$ people instead of $1068$.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'The margin of error only covers random sampling error',
          text: 'A survey answered only by players who visit the forums, or a poll with a $10\\%$ response rate, can be off by far more than $\\pm 3$ points. The formula assumes a random sample; it says nothing about selection bias, non-response, or badly worded questions.',
        },
      ],
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'numeric',
      prompt: 'Server latency has standard deviation about $\\sigma = 40$ ms. How many latency measurements do you need so that a $95\\%$ $z$-interval for the mean has margin of error at most $5$ ms? (Use $z_{0.025} = 1.96$.)',
      hint: '$n = (z\\sigma/E)^2$, then round up to a whole number.',
      label: '$n =$',
      answer: '246',
      explanation: '$n = \\left(\\frac{1.96 \\times 40}{5}\\right)^2 = 15.68^2 = 245.86$, and rounding **up** gives $n = 246$. With $246$ measurements the margin is $1.96 \\times 40/\\sqrt{246} \\approx 4.998$ ms; with $245$ it would be $5.009$ ms, just over the target.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'Comparing two groups: intervals for a difference',
      blocks: [
        {
          type: 'p',
          text: 'Most practical questions compare: does the new tutorial retain more players than the old one? Is the new map\'s average session longer? Estimate the **difference** of the two parameters, and use the fact that for **independent** samples the variances of the two estimates add (variances of independent random variables add, even when you subtract them).',
        },
        {
          type: 'theorem',
          name: 'Two-sample intervals (large samples)',
          tex: '(\\bar{x}_1 - \\bar{x}_2) \\pm z_{\\alpha/2}\\sqrt{\\frac{s_1^2}{n_1} + \\frac{s_2^2}{n_2}}, \\qquad (\\hat{p}_1 - \\hat{p}_2) \\pm z_{\\alpha/2}\\sqrt{\\frac{\\hat{p}_1(1-\\hat{p}_1)}{n_1} + \\frac{\\hat{p}_2(1-\\hat{p}_2)}{n_2}}',
          text: 'For means with small samples, replace $z_{\\alpha/2}$ by a $t$ critical value with Welch\'s degrees of freedom (computed by software; the formula is in the $t$-tests lesson), or conservatively with $\\min(n_1, n_2) - 1$ degrees of freedom. If the **same** players are measured twice (before/after), the samples are not independent: compute each player\'s difference and use a one-sample $t$-interval on the differences.',
        },
        {
          type: 'derivation',
          title: 'A/B test: day-1 retention',
          steps: [
            { tex: '\\hat{p}_A = \\frac{420}{1000} = 0.420, \\qquad \\hat{p}_B = \\frac{465}{1000} = 0.465', why: 'New players were randomly assigned to the old tutorial (A) or the new one (B); the counts are players who returned the next day.' },
            { tex: '\\operatorname{SE} = \\sqrt{\\frac{0.42 \\cdot 0.58}{1000} + \\frac{0.465 \\cdot 0.535}{1000}} \\approx 0.02219', why: 'Add the two variances, then take the root. The difference is noisier than either proportion alone.' },
            { tex: '0.045 \\pm 1.96(0.02219) = 0.045 \\pm 0.0435 = (0.0015, 0.0885)', why: '$\\hat{p}_B - \\hat{p}_A = 0.045$, plus or minus the margin.' },
          ],
          result: 'The new tutorial raises day-1 retention by somewhere between $0.15$ and $8.85$ percentage points. The interval barely excludes $0$, and it is wide: the improvement could be negligible or large. The interval tells you both "probably positive" **and** "we don\'t know how big" — more than a yes/no test would.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the standard errors don\'t simply add',
          text: '$\\operatorname{Var}(\\hat{p}_B - \\hat{p}_A) = \\operatorname{Var}(\\hat{p}_B) + \\operatorname{Var}(\\hat{p}_A)$ for independent groups, so the **variances** add and $\\operatorname{SE}_{\\text{diff}} = \\sqrt{\\operatorname{SE}_A^2 + \\operatorname{SE}_B^2}$, like the hypotenuse of a right triangle. Adding the SEs themselves ($0.0156 + 0.0158$) would overstate the uncertainty.',
        },
        {
          type: 'code',
          title: 'coverage.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdio>
#include <numbers>
#include <random>

std::mt19937_64 rng(95);
double uniform01() { return (rng() >> 11) * 0x1.0p-53; }
double normal01() {                                    // Box-Muller transform
    double u1 = 1.0 - uniform01(), u2 = uniform01();
    return std::sqrt(-2.0 * std::log(u1)) * std::cos(2.0 * std::numbers::pi * u2);
}

int main() {
    const int reps = 100'000;
    const double z = 1.96;

    // 95% t-interval for a mean: n = 10 normal frame times, mu = 16.7, sigma = 1.5.
    int hitT = 0;
    for (int r = 0; r < reps; ++r) {
        double s1 = 0, s2 = 0;
        for (int i = 0; i < 10; ++i) {
            double x = 16.7 + 1.5 * normal01();
            s1 += x;
            s2 += x * x;
        }
        double xbar = s1 / 10, s = std::sqrt((s2 - 10 * xbar * xbar) / 9);
        double half = 2.262 * s / std::sqrt(10.0);     // t_{0.025, 9} = 2.262
        if (std::fabs(xbar - 16.7) <= half) ++hitT;
    }

    // 95% Wald and Wilson intervals for a proportion: n = 30, p = 0.1.
    const int n = 30;
    const double p = 0.1;
    int hitWald = 0, hitWilson = 0;
    for (int r = 0; r < reps; ++r) {
        int k = 0;
        for (int i = 0; i < n; ++i) k += uniform01() < p;
        double ph = double(k) / n;
        if (std::fabs(ph - p) <= z * std::sqrt(ph * (1 - ph) / n)) ++hitWald;
        double c = (ph + z * z / (2 * n)) / (1 + z * z / n);
        double h = z * std::sqrt(ph * (1 - ph) / n + z * z / (4.0 * n * n)) / (1 + z * z / n);
        if (std::fabs(c - p) <= h) ++hitWilson;
    }
    std::printf("t-interval, normal data, n = 10:   coverage %.3f\\n", double(hitT) / reps);
    std::printf("Wald interval,   n = 30, p = 0.1:  coverage %.3f\\n", double(hitWald) / reps);
    std::printf("Wilson interval, n = 30, p = 0.1:  coverage %.3f\\n", double(hitWilson) / reps);
}`,
          output: `t-interval, normal data, n = 10:   coverage 0.950
Wald interval,   n = 30, p = 0.1:  coverage 0.809
Wilson interval, n = 30, p = 0.1:  coverage 0.973`,
          annotations: [
            { lines: '8-11', text: 'The [[stat-box-muller|Box–Muller transform]] turns two independent uniforms into a standard normal. Writing it yourself (instead of `std::normal_distribution`) makes the output identical on every compiler.' },
            { lines: '26-27', text: 'The interval covers $\\mu$ exactly when $|\\bar{x} - \\mu|$ is at most the half-width.' },
            { lines: '40-42', text: 'Wilson: center pulled toward $\\frac{1}{2}$, half-width from the formula on the previous card.' },
          ],
        },
        {
          type: 'p',
          text: 'Simulation is the honest way to check any interval method: generate data where you **know** the truth, compute the interval thousands of times, and count. The $t$-interval delivers its promised $95\\%$; the Wald interval for a rare-ish event delivers $81\\%$ — a "95%" interval that is wrong one time in five.',
        },
      ],
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'numeric',
      prompt: 'Average session length on a new map (group 1: $n_1 = 50$, $\\bar{x}_1 = 31.0$ min, $s_1 = 8$) versus the old map (group 2: $n_2 = 60$, $\\bar{x}_2 = 27.5$ min, $s_2 = 9$), independent random samples. Using the large-sample formula with $z_{0.025} = 1.96$, find the **margin of error** of the $95\\%$ interval for $\\mu_1 - \\mu_2$. Give $2$ decimals.',
      hint: '$\\operatorname{SE} = \\sqrt{s_1^2/n_1 + s_2^2/n_2}$ — square the SDs first.',
      label: 'margin $=$',
      unit: 'min',
      answer: '1.96*sqrt(64/50 + 81/60)',
      answerTex: '3.18',
      tolerance: 0.006,
      explanation: '$\\operatorname{SE} = \\sqrt{\\frac{64}{50} + \\frac{81}{60}} = \\sqrt{1.28 + 1.35} = \\sqrt{2.63} \\approx 1.622$, and the margin is $1.96 \\times 1.622 \\approx 3.18$ minutes. The interval is $3.5 \\pm 3.18 = (0.32, 6.68)$: the new map\'s sessions are longer, by somewhere between a third of a minute and nearly seven minutes. Forgetting to square the SDs ($\\sqrt{8/50 + 9/60}$) gives a far too small margin.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'concept',
      title: 'Reading intervals correctly',
      blocks: [
        {
          type: 'p',
          text: 'Three levers control the width of estimate $\\pm$ critical value $\\times$ SE: **confidence** (higher $C$, bigger multiplier, wider), **variability** (bigger $\\sigma$, wider), and **sample size** (width $\\propto 1/\\sqrt{n}$). There is no free lunch: you cannot get more confidence and a narrower interval without more data.',
        },
        {
          type: 'compare',
          left: {
            title: 'Misreadings',
            tone: 'bad',
            text: '"There is a $95\\%$ chance $\\mu$ is in $(49.5, 54.5)$."\n\n"$95\\%$ of matches last between $49.5$ and $54.5$ minutes."\n\n"The two groups\' intervals overlap, so there is no real difference."\n\n"A $99\\%$ interval is better because it is more confident."',
          },
          right: {
            title: 'Correct readings',
            tone: 'good',
            text: 'The **method** captures $\\mu$ in $95\\%$ of samples; this interval is a plausible range for $\\mu$.\n\nThe interval is about the **mean**; individual matches vary by about $\\sigma = 8$ minutes.\n\nCompare groups with an interval for the **difference**: overlapping individual intervals can still give a difference interval that excludes $0$.\n\nHigher confidence costs width; $95\\%$ is a convention, not a law.',
          },
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Overlap is not a test',
          text: 'Two $95\\%$ intervals with half-widths $h_1$ and $h_2$ overlap whenever the estimates differ by less than $h_1 + h_2$. But the interval for the difference has half-width $\\sqrt{h_1^2 + h_2^2}$, which is smaller. Example: $\\hat{p}_A = 0.420 \\pm 0.031$ and $\\hat{p}_B = 0.465 \\pm 0.031$ overlap, yet the difference interval $(0.0015, 0.0885)$ from the A/B test above excludes $0$. Always build the interval for the quantity you care about.',
        },
        {
          type: 'callout',
          variant: 'exam',
          title: 'What graders look for',
          text: 'State the parameter in words ("the mean frame time of all runs of this build"), check the conditions (random sample, independence, normality or large $n$, success/failure counts for proportions), show estimate $\\pm$ critical value $\\times$ SE, and interpret in context with the correct coverage language. An interval with no interpretation, or with "95% of the data", loses points.',
        },
      ],
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'error',
      prompt: 'An analyst summarizes twelve benchmark runs of a build (each run reports its average frame time). Tap the first line that goes wrong.',
      lines: [
        '$n = 12$, $\\bar{x} = 16.9$ ms, $s = 1.8$ ms, so the estimated SE is $1.8/\\sqrt{12} \\approx 0.520$ ms.',
        'With $11$ degrees of freedom, $t_{0.025,\\,11} = 2.201$.',
        'The $95\\%$ interval is $16.9 \\pm 2.201(0.520) = (15.76, 18.04)$ ms.',
        'So about $95\\%$ of future benchmark runs of this build will average between $15.76$ and $18.04$ ms.',
      ],
      errorLines: [4],
      explanation: 'Lines 1–3 correctly build a confidence interval for the **mean** run time $\\mu$. Line 4 turns it into a claim about **individual** runs, which scatter around $\\mu$ with SD about $s = 1.8$ ms — far more than the SE of $0.52$. A range meant to contain a single future run is a *prediction interval*, $\\bar{x} \\pm t_{0.025,\\,11}\\,s\\sqrt{1 + 1/n} = 16.9 \\pm 4.12 = (12.78, 21.02)$ ms, much wider than the confidence interval.',
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'order',
      prompt: 'Put the steps for a one-sample $t$-interval in order.',
      lines: [
        'Check the conditions: random sample, independent observations, roughly normal data or large $n$',
        'Compute $\\bar{x}$ and $s$ from the data',
        'Compute the estimated standard error $s/\\sqrt{n}$',
        'Look up $t_{\\alpha/2,\\,n-1}$ for the chosen confidence level',
        'Form $\\bar{x} \\pm t_{\\alpha/2,\\,n-1}\\,s/\\sqrt{n}$',
        'Interpret the interval in context as a plausible range for $\\mu$',
      ],
      explanation: 'Conditions first — if they fail (a convenience sample, strong skew with small $n$), no arithmetic will rescue the interval. Then the summary statistics, the standard error, the critical value (which depends on $n - 1$ and the confidence level), the interval itself, and an interpretation about the **mean** in the language of the problem.',
    },
    // ------------------------------------------------------------------ 16
    {
      kind: 'fill',
      prompt: 'Complete the statements about the width of a confidence interval for a mean.',
      template: 'Collecting four times as much data ___ the width. Raising the confidence level from $95\\%$ to $99\\%$ makes the interval ___. If the data are more variable (larger $\\sigma$), the interval is ___.',
      blanks: [{ answers: ['halves'] }, { answers: ['wider'] }, { answers: ['wider'] }],
      wordBank: ['halves', 'quarters', 'doubles', 'wider', 'wider', 'narrower'],
      explanation: 'The half-width is $z_{\\alpha/2}\\,\\sigma/\\sqrt{n}$. Multiplying $n$ by $4$ multiplies $\\sqrt{n}$ by $2$, so the width **halves** (not quarters). Going from $95\\%$ to $99\\%$ raises the multiplier from $1.960$ to $2.576$, a $31\\%$ **wider** interval. And the width is proportional to $\\sigma$, so more variable data give a **wider** interval.',
    },
  ],
  takeaways: [
    'Confidence intervals have the form estimate $\\pm$ critical value $\\times$ standard error, derived by rearranging a pivot such as $\\frac{\\bar{X} - \\mu}{\\sigma/\\sqrt{n}}$.',
    '"95% confidence" is the coverage of the **method**: it captures the fixed parameter in $95\\%$ of samples. A computed interval either contains $\\mu$ or not; it is not a range for the data or for future sample means.',
    '$z$-interval $\\bar{x} \\pm z_{\\alpha/2}\\sigma/\\sqrt{n}$ (known $\\sigma$); $t$-interval $\\bar{x} \\pm t_{\\alpha/2,\\,n-1}s/\\sqrt{n}$ (unknown $\\sigma$, normal data or large $n$).',
    'Wald $\\hat{p} \\pm z\\sqrt{\\hat{p}(1-\\hat{p})/n}$ under-covers for small counts or $p$ near $0$ or $1$; prefer Wilson (or plus-four). Zero events in $n$ trials: upper bound about $3/n$.',
    'Sample size: $n = (z\\sigma/E)^2$ for a mean, $n = z^2 p^*(1-p^*)/E^2$ for a proportion ($p^* = 0.5$ is safe: $1068$ for $\\pm 3$ points). Round up.',
    'For independent groups, variances add: $\\operatorname{SE}_{\\text{diff}} = \\sqrt{\\operatorname{SE}_1^2 + \\operatorname{SE}_2^2}$. Compare groups with an interval for the difference, not by checking overlap.',
  ],
  reading: [
    {
      title: 'OpenStax — Introductory Statistics',
      url: 'https://openstax.org/details/books/introductory-statistics',
      source: 'openstax',
      note: 'The confidence intervals chapter has many worked $z$, $t$ and proportion intervals plus sample-size problems.',
    },
    {
      title: 'Seeing Theory (Brown University)',
      url: 'https://seeing-theory.brown.edu/',
      source: 'other',
      note: 'The confidence interval animation in "Frequentist Inference" draws interval after interval so you can watch coverage happen.',
    },
    {
      title: 'Wikipedia — Binomial proportion confidence interval',
      url: 'https://en.wikipedia.org/wiki/Binomial_proportion_confidence_interval',
      source: 'wikipedia',
      note: 'Wald, Wilson, Agresti–Coull and Clopper–Pearson intervals compared, with the rule of three.',
    },
    {
      title: 'Khan Academy — Statistics and probability',
      url: 'https://www.khanacademy.org/math/statistics-probability',
      source: 'khan',
      note: 'The confidence intervals unit has short videos on interpretation and on margin of error with many practice problems.',
    },
  ],
};
