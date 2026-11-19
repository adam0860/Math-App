import type { Lesson } from '../../types';

// Frame-time stress test from the previous lesson: n = 8, xbar = 45, Sxx = 4200,
// b0 = 44/7, b1 = 39/350, SSE = 1.9714, s = 0.5732, t_{0.025,6} = 2.447.
const enemies = [10, 20, 30, 40, 50, 60, 70, 80];
const frameMs = [7.8, 8.0, 10.1, 9.9, 12.4, 12.6, 14.5, 15.1];
const fitted = '(44/7 + 39x/350)';
const ciHalf = (x: string) => `2.447*0.5732*sqrt(1/8 + (${x} - 45)^2/4200)`;
const piHalf = (x: string) => `2.447*0.5732*sqrt(1 + 1/8 + (${x} - 45)^2/4200)`;

// Influence demo: the 8 points plus a movable 9th point (p, q).
// Base sums: n = 8, Σx = 360, Σy = 90.4, Σx² = 20400, Σxy = 4536.
const slope9 = '(9*(4536 + p*q) - (360 + p)*(90.4 + q))/(9*(20400 + p^2) - (360 + p)^2)';
const intercept9 = `((90.4 + q) - ${slope9}*(360 + p))/9`;

// Day-N retention (% of installs still playing).
const days = [1, 2, 3, 5, 7, 10, 14, 21, 30];
const retention = [46.5, 41.9, 38.6, 33.3, 29.4, 22.4, 17.3, 9.4, 4.1];

export const lesson: Lesson = {
  id: 'stat-regression-inference',
  title: 'Inference and Diagnostics for Regression',
  summary: 'The simple linear regression model and its four assumptions; the sampling distribution and standard error of the slope; $t$ tests and confidence intervals for the slope; confidence versus prediction intervals; residual plots, outliers, leverage and influence; and log transformations.',
  minutes: 22,
  objectives: [
    'State the simple linear regression model and its assumptions (linearity, independence, normal errors, constant variance) and estimate $\\sigma$ by $s = \\sqrt{\\operatorname{SSE}/(n-2)}$',
    'Derive the mean and standard error of the slope $b_1$, and use them for a $t$ test and a confidence interval for $\\beta_1$',
    'Distinguish a confidence interval for the mean response from a prediction interval for a new observation, and explain why the latter is wider',
    'Read residual plots for nonlinearity, non-constant variance and dependence, and tell outliers, high-leverage points and influential points apart',
    'Use a log transformation to straighten exponential relationships and interpret the slope on the log scale',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'The simple linear regression model',
      blocks: [
        {
          type: 'p',
          text: 'The least-squares line describes **this** data set. To ask how far the slope could be off, or whether it could really be $0$, we need a model of how the data were generated: a true line plus random error.',
        },
        {
          type: 'definition',
          term: 'Simple linear regression model',
          text: 'The [[stat-simple-linear-regression-model|simple linear regression model]] says\n\n$$Y_i = \\beta_0 + \\beta_1 x_i + \\varepsilon_i, \\qquad \\varepsilon_1, \\dots, \\varepsilon_n \\text{ independent } N(0, \\sigma^2).$$\n\nThe $x_i$ are treated as fixed numbers. $\\beta_0$, $\\beta_1$ and $\\sigma$ are unknown parameters; the least-squares $b_0$, $b_1$ estimate the first two.',
        },
        {
          type: 'figure',
          svg: '<svg viewBox="0 0 520 310" xmlns="http://www.w3.org/2000/svg"><line x1="50" y1="260" x2="510" y2="260" stroke="currentColor" stroke-width="1.5"/><line x1="50" y1="260" x2="50" y2="15" stroke="currentColor" stroke-width="1.5"/><text x="508" y="298" text-anchor="end" font-size="13">x (enemies)</text><text x="56" y="22" font-size="13">y (frame time)</text><line x1="50.0" y1="213.8" x2="486.99999999999994" y2="67.5" class="s-blue" stroke-width="2.5"/><text x="68.4" y="78" font-size="13" class="t-blue">mean line E[Y] = β₀ + β₁x</text><polyline points="142.0,216.6 142.7,216.6 142.9,215.5 143.2,214.4 143.6,213.2 144.0,212.1 144.6,211.0 145.4,209.9 146.3,208.8 147.3,207.6 148.6,206.5 150.1,205.4 151.9,204.3 153.9,203.2 156.1,202.0 158.7,200.9 161.5,199.8 164.5,198.7 167.8,197.6 171.2,196.4 174.8,195.3 178.4,194.2 182.0,193.1 185.6,192.0 189.0,190.8 192.1,189.7 194.9,188.6 197.4,187.5 199.4,186.4 200.8,185.2 201.7,184.1 202.0,183.0 201.7,181.9 200.8,180.8 199.4,179.6 197.4,178.5 194.9,177.4 192.1,176.3 189.0,175.2 185.6,174.0 182.0,172.9 178.4,171.8 174.8,170.7 171.2,169.6 167.8,168.4 164.5,167.3 161.5,166.2 158.7,165.1 156.1,164.0 153.9,162.8 151.9,161.7 150.1,160.6 148.6,159.5 147.3,158.4 146.3,157.2 145.4,156.1 144.6,155.0 144.0,153.9 143.6,152.8 143.2,151.6 142.9,150.5 142.7,149.4 142.0,149.4" fill="currentColor" fill-opacity="0.08" class="s-purple" stroke-width="1.8"/><line x1="142.0" y1="216.6" x2="142.0" y2="149.4" class="s-gray" stroke-dasharray="3 3"/><text x="142.0" y="278" text-anchor="middle" font-size="12" class="t-gray">x = 20</text><circle cx="143.8" cy="192.0" r="3.5" class="f-orange"/><circle cx="140.7" cy="185.8" r="3.5" class="f-orange"/><circle cx="141.3" cy="170.3" r="3.5" class="f-orange"/><circle cx="139.3" cy="189.2" r="3.5" class="f-orange"/><circle cx="145.0" cy="174.6" r="3.5" class="f-orange"/><polyline points="280.0,170.4 280.7,170.4 280.9,169.3 281.2,168.2 281.6,167.0 282.0,165.9 282.6,164.8 283.4,163.7 284.3,162.6 285.3,161.4 286.6,160.3 288.1,159.2 289.9,158.1 291.9,157.0 294.1,155.8 296.7,154.7 299.5,153.6 302.5,152.5 305.8,151.4 309.2,150.2 312.8,149.1 316.4,148.0 320.0,146.9 323.6,145.8 327.0,144.6 330.1,143.5 332.9,142.4 335.4,141.3 337.4,140.2 338.8,139.0 339.7,137.9 340.0,136.8 339.7,135.7 338.8,134.6 337.4,133.4 335.4,132.3 332.9,131.2 330.1,130.1 327.0,129.0 323.6,127.8 320.0,126.7 316.4,125.6 312.8,124.5 309.2,123.4 305.8,122.2 302.5,121.1 299.5,120.0 296.7,118.9 294.1,117.8 291.9,116.6 289.9,115.5 288.1,114.4 286.6,113.3 285.3,112.2 284.3,111.0 283.4,109.9 282.6,108.8 282.0,107.7 281.6,106.6 281.2,105.4 280.9,104.3 280.7,103.2 280.0,103.2" fill="currentColor" fill-opacity="0.08" class="s-purple" stroke-width="1.8"/><line x1="280.0" y1="170.4" x2="280.0" y2="103.2" class="s-gray" stroke-dasharray="3 3"/><text x="280.0" y="278" text-anchor="middle" font-size="12" class="t-gray">x = 50</text><circle cx="278.4" cy="133.7" r="3.5" class="f-orange"/><circle cx="282.8" cy="147.5" r="3.5" class="f-orange"/><circle cx="282.1" cy="134.5" r="3.5" class="f-orange"/><circle cx="280.0" cy="137.7" r="3.5" class="f-orange"/><circle cx="277.4" cy="143.8" r="3.5" class="f-orange"/><polyline points="418.0,124.2 418.7,124.2 418.9,123.1 419.2,122.0 419.6,120.8 420.0,119.7 420.6,118.6 421.4,117.5 422.3,116.4 423.3,115.2 424.6,114.1 426.1,113.0 427.9,111.9 429.9,110.8 432.1,109.6 434.7,108.5 437.5,107.4 440.5,106.3 443.8,105.2 447.2,104.0 450.8,102.9 454.4,101.8 458.0,100.7 461.6,99.6 465.0,98.4 468.1,97.3 470.9,96.2 473.4,95.1 475.4,94.0 476.8,92.8 477.7,91.7 478.0,90.6 477.7,89.5 476.8,88.4 475.4,87.2 473.4,86.1 470.9,85.0 468.1,83.9 465.0,82.8 461.6,81.6 458.0,80.5 454.4,79.4 450.8,78.3 447.2,77.2 443.8,76.0 440.5,74.9 437.5,73.8 434.7,72.7 432.1,71.6 429.9,70.4 427.9,69.3 426.1,68.2 424.6,67.1 423.3,66.0 422.3,64.8 421.4,63.7 420.6,62.6 420.0,61.5 419.6,60.4 419.2,59.2 418.9,58.1 418.7,57.0 418.0,57.0" fill="currentColor" fill-opacity="0.08" class="s-purple" stroke-width="1.8"/><line x1="418.0" y1="124.2" x2="418.0" y2="57.0" class="s-gray" stroke-dasharray="3 3"/><text x="418.0" y="278" text-anchor="middle" font-size="12" class="t-gray">x = 80</text><circle cx="416.6" cy="98.6" r="3.5" class="f-orange"/><circle cx="415.4" cy="91.3" r="3.5" class="f-orange"/><circle cx="420.2" cy="86.0" r="3.5" class="f-orange"/><circle cx="420.4" cy="109.0" r="3.5" class="f-orange"/><circle cx="415.1" cy="101.6" r="3.5" class="f-orange"/><text x="350.0" y="176.79999999999998" font-size="12" class="t-purple">same normal spread σ</text><text x="350.0" y="192.79999999999998" font-size="12" class="t-purple">at every x</text></svg>',
          alt: 'A straight blue mean line rising from left to right. At x equals 20, 50 and 80 a purple normal curve is drawn sideways, centred on the line and of identical width, with a few orange data points scattered along each.',
          caption: 'At each $x$, the response is normal, centred on the true line, with the same spread $\\sigma$. The data are draws from these curves.',
        },
        {
          type: 'list',
          items: [
            '**L**inearity: the mean of $Y$ is a straight-line function of $x$.',
            '**I**ndependence: the errors are independent (no player counted twice, no drifting time series).',
            '**N**ormality: the errors are normally distributed.',
            '**E**qual variance: $\\sigma$ is the same at every $x$.',
          ],
        },
        {
          type: 'p',
          text: 'The residuals $e_i$ are our stand-ins for the unseen errors $\\varepsilon_i$, so we estimate $\\sigma$ from them with the **residual standard error**',
        },
        {
          type: 'math',
          tex: 's = \\sqrt{\\frac{\\operatorname{SSE}}{n - 2}} = \\sqrt{\\frac{\\sum e_i^2}{n-2}}, \\qquad \\text{frame times: } s = \\sqrt{\\frac{1.971}{6}} = 0.573 \\text{ ms}',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why $n - 2$?',
          text: 'The sample variance divides by $n - 1$ because the deviations from $\\bar{x}$ obey one constraint (they sum to $0$). The residuals obey **two**: $\\sum e_i = 0$ and $\\sum x_i e_i = 0$, the normal equations. So only $n - 2$ of them are free: the residuals have $n - 2$ [[stat-degrees-of-freedom|degrees of freedom]], one lost for each estimated coefficient. Dividing by $n - 2$ makes $s^2$ an unbiased estimator of $\\sigma^2$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'numeric',
      prompt: 'A regression of match length (minutes) on map size, fitted to $n = 12$ maps, leaves a residual sum of squares $\\operatorname{SSE} = 45$. Estimate $\\sigma$, to $3$ decimal places.',
      hint: 'Divide SSE by $n - 2$, not by $n$ or $n - 1$, then take the square root.',
      label: '$s =$',
      answer: 'sqrt(45/10)',
      answerTex: 's = \\sqrt{4.5} \\approx 2.121 \\text{ min}',
      tolerance: 0.0006,
      explanation: '$s = \\sqrt{\\frac{45}{12 - 2}} = \\sqrt{4.5} \\approx 2.121$ minutes: matches typically land about $2$ minutes from the line\'s prediction. Dividing by $11$ (giving $2.023$) would treat the residuals as if only one constraint tied them together; the fitted line imposes two.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'The sampling distribution of the slope',
      blocks: [
        {
          type: 'p',
          text: 'Repeat the stress test and the frame times come out slightly different, and so does $b_1$. Under the model, $b_1$ is a random variable. Its distribution follows from one observation: $b_1$ is a **linear combination** of the $Y_i$.',
        },
        {
          type: 'derivation',
          title: 'Mean and variance of $b_1$',
          steps: [
            { tex: 'b_1 = \\frac{\\sum (x_i - \\bar{x})(Y_i - \\bar{Y})}{S_{xx}} = \\sum_{i} c_i Y_i, \\qquad c_i = \\frac{x_i - \\bar{x}}{S_{xx}}', why: 'The $\\bar{Y}$ term drops out because $\\sum (x_i - \\bar{x})\\bar{Y} = \\bar{Y}\\sum(x_i - \\bar{x}) = 0$. The weights $c_i$ are fixed numbers.' },
            { tex: '\\sum c_i = 0, \\qquad \\sum c_i x_i = \\frac{\\sum (x_i - \\bar{x})x_i}{S_{xx}} = 1, \\qquad \\sum c_i^2 = \\frac{S_{xx}}{S_{xx}^2} = \\frac{1}{S_{xx}}', why: 'Three facts about the weights. The middle one uses $\\sum (x_i - \\bar{x})x_i = \\sum (x_i - \\bar{x})^2 = S_{xx}$.' },
            { tex: 'E[b_1] = \\sum c_i(\\beta_0 + \\beta_1 x_i) = \\beta_0 \\cdot 0 + \\beta_1 \\cdot 1 = \\beta_1', why: 'Linearity of expectation with $E[Y_i] = \\beta_0 + \\beta_1 x_i$. So $b_1$ is **unbiased**.' },
            { tex: '\\operatorname{Var}(b_1) = \\sum c_i^2\\,\\sigma^2 = \\frac{\\sigma^2}{S_{xx}}', why: 'For independent $Y_i$ with common variance $\\sigma^2$, variances add with squared weights.' },
            { tex: 'b_1 \\sim N\\!\\left(\\beta_1, \\frac{\\sigma^2}{S_{xx}}\\right), \\qquad \\operatorname{SE}(b_1) = \\frac{s}{\\sqrt{S_{xx}}}', why: 'A linear combination of independent normals is normal. Replacing the unknown $\\sigma$ by $s$ gives the [[stat-standard-error|standard error]].' },
          ],
          result: 'For the frame times: $\\operatorname{SE}(b_1) = \\frac{0.573}{\\sqrt{4200}} = 0.00884$ ms per enemy.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Design lesson: spread your $x$-values',
          text: '$\\operatorname{Var}(b_1) = \\sigma^2/S_{xx}$ shrinks as the $x$-values spread out. Testing at $10, 20, \\dots, 80$ enemies gives $S_{xx} = 4200$; eight runs spread evenly between $40$ and $50$ enemies would give $S_{xx} \\approx 86$ and a slope SE $7$ times larger. When you control $x$ (benchmarks, playtests), test across a wide range.',
        },
        {
          type: 'code',
          title: 'slope_sampling.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdio>
#include <numbers>
#include <random>

std::mt19937_64 rng(1);
double uniform01() { return (rng() >> 11) * 0x1.0p-53; }     // 53 random bits in [0, 1)
double normal01() {                                          // Box-Muller: one N(0, 1) draw
    double u1 = 1.0 - uniform01(), u2 = uniform01();         // u1 in (0, 1], so log(u1) is finite
    return std::sqrt(-2.0 * std::log(u1)) * std::cos(2.0 * std::numbers::pi * u2);
}

int main() {
    // True model: frame time = 6.3 + 0.11 * enemies + error, error ~ N(0, 0.57^2).
    const double beta0 = 6.3, beta1 = 0.11, sigma = 0.57;
    const double x[8] = {10, 20, 30, 40, 50, 60, 70, 80};
    const double xbar = 45, sxx = 4200;
    const double tCrit = 2.447;                              // t_{0.025, 6}
    const int reps = 100'000;

    double sumB1 = 0, sumB1Sq = 0;
    int covered = 0;
    for (int r = 0; r < reps; ++r) {
        double y[8], ybar = 0;
        for (int i = 0; i < 8; ++i) { y[i] = beta0 + beta1 * x[i] + sigma * normal01(); ybar += y[i] / 8; }
        double sxy = 0;
        for (int i = 0; i < 8; ++i) sxy += (x[i] - xbar) * (y[i] - ybar);
        double b1 = sxy / sxx, b0 = ybar - b1 * xbar, sse = 0;
        for (int i = 0; i < 8; ++i) sse += (y[i] - b0 - b1 * x[i]) * (y[i] - b0 - b1 * x[i]);
        double se = std::sqrt(sse / 6) / std::sqrt(sxx);     // SE(b1) = s / sqrt(Sxx)
        sumB1 += b1;
        sumB1Sq += b1 * b1;
        if (std::fabs(b1 - beta1) <= tCrit * se) ++covered; // did the 95% CI catch beta1?
    }
    double mean = sumB1 / reps, sd = std::sqrt(sumB1Sq / reps - mean * mean);
    std::printf("average b1: %.4f   (true slope 0.1100)\\n", mean);
    std::printf("SD of b1:   %.5f  (theory sigma/sqrt(Sxx) = %.5f)\\n", sd, sigma / std::sqrt(sxx));
    std::printf("95%% CI coverage: %.3f\\n", double(covered) / reps);
}`,
          output: `average b1: 0.1100   (true slope 0.1100)
SD of b1:   0.00881  (theory sigma/sqrt(Sxx) = 0.00880)
95% CI coverage: 0.950`,
          annotations: [
            { lines: '8-11', text: '[[stat-box-muller|Box–Muller]] turns two uniforms into a standard normal. Generating normals ourselves (instead of `std::normal_distribution`) makes the output identical on every standard library.' },
            { lines: 25, text: 'Simulate one stress test from the true model: the same eight $x$-values, fresh normal errors.' },
            { lines: '30-33', text: 'Build the $95\\%$ $t$ interval $b_1 \\pm 2.447\\,\\operatorname{SE}(b_1)$ (the next card) and record whether it contains the true slope.' },
          ],
        },
        {
          type: 'p',
          text: 'Across $100{,}000$ simulated stress tests, $b_1$ averages the true slope (unbiased), its standard deviation matches $\\sigma/\\sqrt{S_{xx}}$, and the $t$ interval catches the true slope $95\\%$ of the time, exactly as the theory promises when the model holds.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'concept',
      title: 'Testing and estimating the slope',
      blocks: [
        {
          type: 'p',
          text: 'Standardizing $b_1$ with the estimated SE gives a [[stat-t-distribution|$t$ distribution]], for the same reason as in the one-sample $t$ procedures: replacing $\\sigma$ by $s$ adds uncertainty, and $s$ has $n - 2$ degrees of freedom.',
        },
        {
          type: 'theorem',
          name: 'Inference for the slope',
          tex: 't = \\frac{b_1 - \\beta_1}{\\operatorname{SE}(b_1)} \\sim t_{n-2}, \\qquad \\text{CI: } b_1 \\pm t_{\\alpha/2,\\,n-2}\\,\\operatorname{SE}(b_1)',
          text: 'The usual test is $H_0: \\beta_1 = 0$ ("$x$ has no linear relationship with the mean of $Y$"), with statistic $t = b_1/\\operatorname{SE}(b_1)$.',
        },
        {
          type: 'derivation',
          title: 'Does each enemy really cost frame time?',
          steps: [
            { tex: 'H_0: \\beta_1 = 0, \\qquad H_a: \\beta_1 \\ne 0', why: 'Two-sided: we ask whether there is any linear relationship at all.' },
            { tex: 't = \\frac{0.11143}{0.008845} = 12.60, \\qquad \\text{df} = 8 - 2 = 6', why: 'Slope and standard error from the previous card.' },
            { tex: 'p = 2P(t_6 > 12.60) \\approx 0.00002', why: 'Far beyond the critical value $2.447$; the tail area comes from software.' },
            { tex: '0.11143 \\pm 2.447 \\times 0.008845 = 0.1114 \\pm 0.0216 = (0.090,\\ 0.133)', why: 'The $95\\%$ confidence interval uses $t_{0.025,\\,6} = 2.447$ from the table below.' },
          ],
          result: 'Overwhelming evidence that frame time rises with enemy count. We are $95\\%$ confident each extra enemy adds between $0.090$ and $0.133$ ms, so a budget of $1$ ms buys roughly $7.5$ to $11$ enemies.',
        },
        {
          type: 'table',
          headers: ['df', '2', '4', '6', '8', '10', '12', '15', '20', '30', '60', '$\\infty$'],
          rows: [
            ['$t_{0.025}$', '4.303', '2.776', '2.447', '2.306', '2.228', '2.179', '2.131', '2.086', '2.042', '2.000', '1.960'],
            ['$t_{0.005}$', '9.925', '4.604', '3.707', '3.355', '3.169', '3.055', '2.947', '2.845', '2.750', '2.660', '2.576'],
          ],
          caption: 'Two-sided critical values: use $t_{0.025}$ for $95\\%$ intervals and $5\\%$ tests, $t_{0.005}$ for $99\\%$ and $1\\%$. For regression, df $= n - 2$.',
        },
        {
          type: 'graph',
          x: [-5, 5],
          y: [0, 0.42],
          xStep: 1,
          yStep: 0.1,
          height: 240,
          functions: [
            { expr: 'gamma((k+1)/2)/(sqrt(k*pi)*gamma(k/2))*(1 + x^2/k)^(-(k+1)/2)', label: '$t_k$ density', color: 'blue' },
            { expr: 'normpdf(x)', label: '$N(0, 1)$', color: 'gray', dashed: true },
          ],
          vlines: [
            { x: -1.96, color: 'gray' },
            { x: 1.96, label: '±1.96', color: 'gray' },
          ],
          sliders: [{ name: 'k', min: 1, max: 30, step: 1, value: 6, label: 'degrees of freedom $k = n - 2$' }],
          caption: 'With few data points the $t$ density has heavy tails, so the critical value is well beyond $1.96$ ($2.447$ for $k = 6$). As $k$ grows, $t_k$ approaches the normal curve.',
        },
        {
          type: 'callout',
          variant: 'note',
          text: 'Testing $\\beta_1 = 0$ is the same as testing whether the population correlation is $0$: $t = \\frac{r\\sqrt{n-2}}{\\sqrt{1 - r^2}}$ gives the identical statistic. For the frame times, $\\frac{0.9816\\sqrt{6}}{\\sqrt{1 - 0.9636}} = 12.60$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'numeric',
      prompt: 'A regression of win rate (%) on average ping (ms) over $n = 12$ players gives slope $b_1 = -0.12$ percentage points per ms with $\\operatorname{SE}(b_1) = 0.05$. Compute the $t$ statistic for $H_0: \\beta_1 = 0$.',
      hint: '$t = (b_1 - 0)/\\operatorname{SE}(b_1)$.',
      label: '$t =$',
      answer: '-0.12/0.05',
      answerTex: 't = -2.4',
      tolerance: 0.005,
      explanation: '$t = \\frac{-0.12}{0.05} = -2.4$ with $12 - 2 = 10$ degrees of freedom. Since $|t| = 2.4 > t_{0.025,\\,10} = 2.228$, the slope is significantly different from $0$ at the $5\\%$ level: higher ping is associated with lower win rate. (Associated, not proven to cause: players on bad connections may differ in other ways.)',
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'numeric',
      prompt: 'For $n = 14$ maps, the slope of match length (min) on map size (km²) is $b_1 = 0.85$ with $\\operatorname{SE}(b_1) = 0.20$. Using $t_{0.025,\\,12} = 2.179$, give **both** endpoints of the $95\\%$ confidence interval for $\\beta_1$, to $3$ decimal places, separated by a comma.',
      hint: '$b_1 \\pm t^* \\cdot \\operatorname{SE}(b_1)$, with $t^* \\cdot \\operatorname{SE} = 2.179 \\times 0.20$.',
      label: 'CI:',
      answer: ['0.85 - 2.179*0.2', '0.85 + 2.179*0.2'],
      answerTex: '(0.414,\\ 1.286)',
      tolerance: 0.0006,
      explanation: 'The margin of error is $2.179 \\times 0.20 = 0.4358$, so the interval is $0.85 \\pm 0.436 = (0.414,\\ 1.286)$ minutes per km². It excludes $0$, which matches a two-sided test rejecting $\\beta_1 = 0$ at the $5\\%$ level. Interpretation: we are $95\\%$ confident that each extra km² of map adds between about $0.41$ and $1.29$ minutes to the **average** match.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'order',
      prompt: 'Put the steps of a $t$ test for the slope in order.',
      lines: [
        'State $H_0: \\beta_1 = 0$ and $H_a: \\beta_1 \\ne 0$',
        'Fit the least-squares line and check the residual plot',
        'Compute $s = \\sqrt{\\operatorname{SSE}/(n-2)}$ and $\\operatorname{SE}(b_1) = s/\\sqrt{S_{xx}}$',
        'Compute $t = b_1/\\operatorname{SE}(b_1)$',
        'Find the p-value from $t_{n-2}$ and state the conclusion in context',
      ],
      distractors: ['Find the p-value from $t_{n-1}$, as in the one-sample $t$ test'],
      explanation: 'Hypotheses first, then the fit, and the residual plot before trusting any p-value. The standard error needs $s$, the statistic needs the SE, and the p-value comes from $t$ with $n - 2$ degrees of freedom: two coefficients were estimated, so the residuals carry $n - 2$ independent pieces of information, not $n - 1$.',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'concept',
      title: 'Confidence intervals vs prediction intervals',
      blocks: [
        {
          type: 'p',
          text: 'At $x^* = 45$ enemies the line predicts $\\hat{y}^* = 11.3$ ms. Two different questions can be asked about that number:',
        },
        {
          type: 'compare',
          left: {
            title: 'Mean response',
            tone: 'neutral',
            text: '"What is the **average** frame time over all frames with $45$ enemies?" Uncertainty comes only from estimating the line. Answer: a **confidence interval** for $\\beta_0 + \\beta_1 x^*$.',
          },
          right: {
            title: 'One new observation',
            tone: 'neutral',
            text: '"How long will the **next** frame with $45$ enemies take?" Add the frame\'s own scatter $\\sigma$ around the line. Answer: a [[stat-prediction-interval|prediction interval]].',
          },
        },
        {
          type: 'derivation',
          title: 'Variance of the fitted value at $x^*$',
          steps: [
            { tex: '\\hat{Y}^* = b_0 + b_1 x^* = \\bar{Y} + b_1(x^* - \\bar{x})', why: 'Substitute $b_0 = \\bar{Y} - b_1\\bar{x}$.' },
            { tex: '\\operatorname{Var}(\\hat{Y}^*) = \\frac{\\sigma^2}{n} + (x^* - \\bar{x})^2\\frac{\\sigma^2}{S_{xx}}', why: '$\\operatorname{Var}(\\bar{Y}) = \\sigma^2/n$, $\\operatorname{Var}(b_1) = \\sigma^2/S_{xx}$, and $\\bar{Y}$ and $b_1$ are uncorrelated: $\\operatorname{Cov}(\\bar{Y}, b_1) = \\sum \\frac1n c_i \\sigma^2 = 0$ because $\\sum c_i = 0$.' },
            { tex: '\\operatorname{Var}(Y_{\\text{new}} - \\hat{Y}^*) = \\sigma^2 + \\operatorname{Var}(\\hat{Y}^*)', why: 'A new observation has its own independent error, so the variances add.' },
          ],
          result: 'Replacing $\\sigma$ by $s$: the CI for the mean is $\\hat{y}^* \\pm t\\,s\\sqrt{\\frac1n + \\frac{(x^* - \\bar{x})^2}{S_{xx}}}$; the PI for a new value is $\\hat{y}^* \\pm t\\,s\\sqrt{1 + \\frac1n + \\frac{(x^* - \\bar{x})^2}{S_{xx}}}$.',
        },
        {
          type: 'graph',
          x: [0, 120],
          y: [4, 22],
          xStep: 10,
          yStep: 2,
          functions: [
            { expr: fitted, label: 'fitted line', color: 'green' },
            { expr: `${fitted} + ${ciHalf('x')}`, label: '95% CI for the mean', color: 'blue', dashed: true },
            { expr: `${fitted} - ${ciHalf('x')}`, color: 'blue', dashed: true },
            { expr: `${fitted} + ${piHalf('x')}`, label: '95% prediction interval', color: 'purple' },
            { expr: `${fitted} - ${piHalf('x')}`, color: 'purple' },
          ],
          points: enemies.map((x, i) => ({ x, y: frameMs[i], color: 'gray' as const })),
          vlines: [{ x: 'a', label: 'x*', color: 'orange' }],
          sliders: [{ name: 'a', min: 0, max: 120, step: 1, value: 45, label: 'enemies $x^*$' }],
          readouts: [
            { label: '$\\hat{y}^* =$', expr: '44/7 + 39a/350', digits: 2 },
            { label: 'CI half-width', expr: ciHalf('a'), digits: 2 },
            { label: 'PI half-width', expr: piHalf('a'), digits: 2 },
          ],
          caption: 'At $x^* = 45$: CI $11.30 \\pm 0.50$ ms, PI $11.30 \\pm 1.49$ ms. Both bands are narrowest at $\\bar{x} = 45$ and flare out as $x^*$ moves away, fastest beyond the data (try $x^* = 120$): extrapolation is uncertain even if the model is right.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'More data cannot shrink a prediction interval to zero',
          text: 'As $n \\to \\infty$ the CI for the mean shrinks to a point, but the PI only shrinks to about $\\hat{y}^* \\pm 1.96\\sigma$: individual frames keep their own scatter however well you know the line. For frame budgets, the PI (or a high percentile) is usually the number that matters.',
        },
      ],
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'mcq',
      prompt: 'At $x^* = 45$ enemies, the $95\\%$ confidence interval for the mean response is $(10.80,\\ 11.80)$ ms and the $95\\%$ prediction interval is $(9.81,\\ 12.79)$ ms. Which statement is correct?',
      options: [
        {
          text: 'We are $95\\%$ confident the **average** frame time at $45$ enemies is between $10.80$ and $11.80$ ms, and a **single** new frame at $45$ enemies will likely fall between $9.81$ and $12.79$ ms',
          correct: true,
          why: 'The CI targets the mean of $Y$ at $x^*$; the PI targets one new observation, which carries extra scatter $\\sigma$, so it is wider.',
        },
        {
          text: '$95\\%$ of all frames at $45$ enemies take between $10.80$ and $11.80$ ms',
          why: 'That confuses the interval for the mean with a range for individual frames. Individual frames scatter about $0.57$ ms around the line, far more than the CI\'s width suggests.',
        },
        {
          text: 'The prediction interval is wider because it uses a larger confidence level',
          why: 'Both are $95\\%$ intervals. The PI is wider because it includes the variance $\\sigma^2$ of a single observation around the line.',
        },
        {
          text: 'There is a $95\\%$ probability that the true mean frame time is in $(10.80,\\ 11.80)$',
          why: 'In frequentist inference the true mean is fixed; the $95\\%$ describes how often the **procedure** captures it in repeated samples, not a probability about this one interval.',
        },
      ],
      explanation: 'The CI half-width is $2.447 \\cdot 0.573\\sqrt{\\frac18 + 0} = 0.50$ ms; the PI half-width is $2.447 \\cdot 0.573\\sqrt{1 + \\frac18} = 1.49$ ms. The extra "$1 +$" under the root is the variance of the new frame itself, and it dominates.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'truefalse',
      prompt: 'With enough data, a $95\\%$ prediction interval for a new observation can be made as narrow as you like.',
      answer: false,
      explanation: 'The prediction-interval half-width is $t\\,s\\sqrt{1 + \\frac1n + \\frac{(x^* - \\bar{x})^2}{S_{xx}}}$. As $n$ grows, the $\\frac1n$ and $\\frac{1}{S_{xx}}$ terms vanish and $t \\to 1.96$, but the $1$ under the square root stays, so the half-width approaches $1.96\\sigma$, not $0$. Only the confidence interval for the **mean** response shrinks to zero width.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'Residual plots: checking the assumptions',
      blocks: [
        {
          type: 'p',
          text: 'Every p-value and interval in this lesson assumes LINE. The data cannot confirm the assumptions, but the residuals can expose violations. The main tool is a [[stat-residual-plot|residual plot]]: residuals $e_i$ against fitted values $\\hat{y}_i$ (or against $x$).',
        },
        {
          type: 'figure',
          svg: '<svg viewBox="0 0 520 200" xmlns="http://www.w3.org/2000/svg"><rect x="5" y="5" width="160" height="130" fill="none" stroke="currentColor" class="s-gray" stroke-width="1"/><line x1="5" y1="70.0" x2="165" y2="70.0" stroke="currentColor" stroke-dasharray="4 3" class="s-gray"/><circle cx="24.6" cy="43.6" r="3" class="f-blue" fill-opacity="0.8"/><circle cx="32.2" cy="75.6" r="3" class="f-blue" fill-opacity="0.8"/><circle cx="38.1" cy="49.3" r="3" class="f-blue" fill-opacity="0.8"/><circle cx="38.6" cy="46.4" r="3" class="f-blue" fill-opacity="0.8"/><circle cx="44.2" cy="89.7" r="3" class="f-blue" fill-opacity="0.8"/><circle cx="45.2" cy="86.8" r="3" class="f-blue" fill-opacity="0.8"/><circle cx="51.6" cy="92.1" r="3" class="f-blue" fill-opacity="0.8"/><circle cx="63.4" cy="86.2" r="3" class="f-blue" fill-opacity="0.8"/><circle cx="66.2" cy="76.6" r="3" class="f-blue" fill-opacity="0.8"/><circle cx="67.2" cy="73.7" r="3" class="f-blue" fill-opacity="0.8"/><circle cx="75.0" cy="13.0" r="3" class="f-blue" fill-opacity="0.8"/><circle cx="81.5" cy="84.0" r="3" class="f-blue" fill-opacity="0.8"/><circle cx="81.7" cy="78.0" r="3" class="f-blue" fill-opacity="0.8"/><circle cx="83.8" cy="57.3" r="3" class="f-blue" fill-opacity="0.8"/><circle cx="84.1" cy="96.4" r="3" class="f-blue" fill-opacity="0.8"/><circle cx="84.7" cy="80.2" r="3" class="f-blue" fill-opacity="0.8"/><circle cx="85.0" cy="69.6" r="3" class="f-blue" fill-opacity="0.8"/><circle cx="86.6" cy="48.6" r="3" class="f-blue" fill-opacity="0.8"/><circle cx="88.2" cy="106.4" r="3" class="f-blue" fill-opacity="0.8"/><circle cx="91.3" cy="32.0" r="3" class="f-blue" fill-opacity="0.8"/><circle cx="96.8" cy="79.8" r="3" class="f-blue" fill-opacity="0.8"/><circle cx="100.5" cy="65.3" r="3" class="f-blue" fill-opacity="0.8"/><circle cx="100.7" cy="46.5" r="3" class="f-blue" fill-opacity="0.8"/><circle cx="105.3" cy="51.7" r="3" class="f-blue" fill-opacity="0.8"/><circle cx="108.9" cy="40.7" r="3" class="f-blue" fill-opacity="0.8"/><circle cx="110.3" cy="65.2" r="3" class="f-blue" fill-opacity="0.8"/><circle cx="114.5" cy="70.5" r="3" class="f-blue" fill-opacity="0.8"/><circle cx="126.6" cy="61.2" r="3" class="f-blue" fill-opacity="0.8"/><circle cx="128.5" cy="97.6" r="3" class="f-blue" fill-opacity="0.8"/><circle cx="138.5" cy="36.4" r="3" class="f-blue" fill-opacity="0.8"/><circle cx="142.9" cy="91.5" r="3" class="f-blue" fill-opacity="0.8"/><circle cx="146.8" cy="104.9" r="3" class="f-blue" fill-opacity="0.8"/><circle cx="146.9" cy="13.0" r="3" class="f-blue" fill-opacity="0.8"/><circle cx="148.2" cy="73.8" r="3" class="f-blue" fill-opacity="0.8"/><circle cx="148.8" cy="102.7" r="3" class="f-blue" fill-opacity="0.8"/><circle cx="148.8" cy="18.7" r="3" class="f-blue" fill-opacity="0.8"/><circle cx="151.0" cy="79.1" r="3" class="f-blue" fill-opacity="0.8"/><circle cx="152.5" cy="40.6" r="3" class="f-blue" fill-opacity="0.8"/><circle cx="153.6" cy="93.0" r="3" class="f-blue" fill-opacity="0.8"/><circle cx="154.7" cy="76.9" r="3" class="f-blue" fill-opacity="0.8"/><text x="85.0" y="155" text-anchor="middle" font-size="14" font-weight="700" class="t-green">random band</text><text x="85.0" y="173" text-anchor="middle" font-size="12" class="t-gray">assumptions look fine</text><rect x="180" y="5" width="160" height="130" fill="none" stroke="currentColor" class="s-gray" stroke-width="1"/><line x1="180" y1="70.0" x2="340" y2="70.0" stroke="currentColor" stroke-dasharray="4 3" class="s-gray"/><circle cx="199.6" cy="49.8" r="3" class="f-blue" fill-opacity="0.8"/><circle cx="207.2" cy="66.0" r="3" class="f-blue" fill-opacity="0.8"/><circle cx="213.1" cy="69.2" r="3" class="f-blue" fill-opacity="0.8"/><circle cx="213.6" cy="63.3" r="3" class="f-blue" fill-opacity="0.8"/><circle cx="219.2" cy="65.3" r="3" class="f-blue" fill-opacity="0.8"/><circle cx="220.2" cy="54.6" r="3" class="f-blue" fill-opacity="0.8"/><circle cx="226.6" cy="88.0" r="3" class="f-blue" fill-opacity="0.8"/><circle cx="238.4" cy="84.1" r="3" class="f-blue" fill-opacity="0.8"/><circle cx="241.2" cy="97.9" r="3" class="f-blue" fill-opacity="0.8"/><circle cx="242.2" cy="95.2" r="3" class="f-blue" fill-opacity="0.8"/><circle cx="250.0" cy="108.6" r="3" class="f-blue" fill-opacity="0.8"/><circle cx="256.5" cy="110.1" r="3" class="f-blue" fill-opacity="0.8"/><circle cx="256.7" cy="105.0" r="3" class="f-blue" fill-opacity="0.8"/><circle cx="258.8" cy="108.2" r="3" class="f-blue" fill-opacity="0.8"/><circle cx="259.1" cy="99.5" r="3" class="f-blue" fill-opacity="0.8"/><circle cx="259.7" cy="104.6" r="3" class="f-blue" fill-opacity="0.8"/><circle cx="260.0" cy="90.2" r="3" class="f-blue" fill-opacity="0.8"/><circle cx="261.6" cy="98.3" r="3" class="f-blue" fill-opacity="0.8"/><circle cx="263.2" cy="98.1" r="3" class="f-blue" fill-opacity="0.8"/><circle cx="266.3" cy="90.4" r="3" class="f-blue" fill-opacity="0.8"/><circle cx="271.8" cy="93.2" r="3" class="f-blue" fill-opacity="0.8"/><circle cx="275.5" cy="95.6" r="3" class="f-blue" fill-opacity="0.8"/><circle cx="275.7" cy="95.9" r="3" class="f-blue" fill-opacity="0.8"/><circle cx="280.3" cy="93.3" r="3" class="f-blue" fill-opacity="0.8"/><circle cx="283.9" cy="81.8" r="3" class="f-blue" fill-opacity="0.8"/><circle cx="285.3" cy="82.8" r="3" class="f-blue" fill-opacity="0.8"/><circle cx="289.5" cy="81.9" r="3" class="f-blue" fill-opacity="0.8"/><circle cx="301.6" cy="64.1" r="3" class="f-blue" fill-opacity="0.8"/><circle cx="303.5" cy="71.2" r="3" class="f-blue" fill-opacity="0.8"/><circle cx="313.5" cy="46.9" r="3" class="f-blue" fill-opacity="0.8"/><circle cx="317.9" cy="52.7" r="3" class="f-blue" fill-opacity="0.8"/><circle cx="321.8" cy="24.5" r="3" class="f-blue" fill-opacity="0.8"/><circle cx="321.9" cy="33.5" r="3" class="f-blue" fill-opacity="0.8"/><circle cx="323.2" cy="30.0" r="3" class="f-blue" fill-opacity="0.8"/><circle cx="323.8" cy="25.8" r="3" class="f-blue" fill-opacity="0.8"/><circle cx="323.8" cy="30.2" r="3" class="f-blue" fill-opacity="0.8"/><circle cx="326.0" cy="27.0" r="3" class="f-blue" fill-opacity="0.8"/><circle cx="327.5" cy="13.0" r="3" class="f-blue" fill-opacity="0.8"/><circle cx="328.6" cy="18.5" r="3" class="f-blue" fill-opacity="0.8"/><circle cx="329.7" cy="23.4" r="3" class="f-blue" fill-opacity="0.8"/><text x="260.0" y="155" text-anchor="middle" font-size="14" font-weight="700" class="t-red">curve</text><text x="260.0" y="173" text-anchor="middle" font-size="12" class="t-gray">relationship is not linear</text><rect x="355" y="5" width="160" height="130" fill="none" stroke="currentColor" class="s-gray" stroke-width="1"/><line x1="355" y1="70.0" x2="515" y2="70.0" stroke="currentColor" stroke-dasharray="4 3" class="s-gray"/><circle cx="374.6" cy="67.7" r="3" class="f-blue" fill-opacity="0.8"/><circle cx="382.2" cy="82.1" r="3" class="f-blue" fill-opacity="0.8"/><circle cx="388.1" cy="55.9" r="3" class="f-blue" fill-opacity="0.8"/><circle cx="388.6" cy="71.5" r="3" class="f-blue" fill-opacity="0.8"/><circle cx="394.2" cy="69.5" r="3" class="f-blue" fill-opacity="0.8"/><circle cx="395.2" cy="46.8" r="3" class="f-blue" fill-opacity="0.8"/><circle cx="401.6" cy="44.6" r="3" class="f-blue" fill-opacity="0.8"/><circle cx="413.4" cy="68.3" r="3" class="f-blue" fill-opacity="0.8"/><circle cx="416.2" cy="60.4" r="3" class="f-blue" fill-opacity="0.8"/><circle cx="417.2" cy="52.9" r="3" class="f-blue" fill-opacity="0.8"/><circle cx="425.0" cy="40.4" r="3" class="f-blue" fill-opacity="0.8"/><circle cx="431.5" cy="72.5" r="3" class="f-blue" fill-opacity="0.8"/><circle cx="431.7" cy="67.4" r="3" class="f-blue" fill-opacity="0.8"/><circle cx="433.8" cy="45.8" r="3" class="f-blue" fill-opacity="0.8"/><circle cx="434.1" cy="64.7" r="3" class="f-blue" fill-opacity="0.8"/><circle cx="434.7" cy="54.9" r="3" class="f-blue" fill-opacity="0.8"/><circle cx="435.0" cy="57.8" r="3" class="f-blue" fill-opacity="0.8"/><circle cx="436.6" cy="93.2" r="3" class="f-blue" fill-opacity="0.8"/><circle cx="438.2" cy="87.9" r="3" class="f-blue" fill-opacity="0.8"/><circle cx="441.3" cy="127.0" r="3" class="f-blue" fill-opacity="0.8"/><circle cx="446.8" cy="76.0" r="3" class="f-blue" fill-opacity="0.8"/><circle cx="450.5" cy="38.1" r="3" class="f-blue" fill-opacity="0.8"/><circle cx="450.7" cy="96.5" r="3" class="f-blue" fill-opacity="0.8"/><circle cx="455.3" cy="39.1" r="3" class="f-blue" fill-opacity="0.8"/><circle cx="458.9" cy="44.1" r="3" class="f-blue" fill-opacity="0.8"/><circle cx="460.3" cy="71.4" r="3" class="f-blue" fill-opacity="0.8"/><circle cx="464.5" cy="70.2" r="3" class="f-blue" fill-opacity="0.8"/><circle cx="476.6" cy="67.5" r="3" class="f-blue" fill-opacity="0.8"/><circle cx="478.5" cy="96.4" r="3" class="f-blue" fill-opacity="0.8"/><circle cx="488.5" cy="79.4" r="3" class="f-blue" fill-opacity="0.8"/><circle cx="492.9" cy="71.6" r="3" class="f-blue" fill-opacity="0.8"/><circle cx="496.8" cy="48.5" r="3" class="f-blue" fill-opacity="0.8"/><circle cx="496.9" cy="42.1" r="3" class="f-blue" fill-opacity="0.8"/><circle cx="498.2" cy="96.4" r="3" class="f-blue" fill-opacity="0.8"/><circle cx="498.8" cy="40.5" r="3" class="f-blue" fill-opacity="0.8"/><circle cx="498.8" cy="97.8" r="3" class="f-blue" fill-opacity="0.8"/><circle cx="501.0" cy="76.1" r="3" class="f-blue" fill-opacity="0.8"/><circle cx="502.5" cy="56.5" r="3" class="f-blue" fill-opacity="0.8"/><circle cx="503.6" cy="70.8" r="3" class="f-blue" fill-opacity="0.8"/><circle cx="504.7" cy="74.7" r="3" class="f-blue" fill-opacity="0.8"/><text x="435.0" y="155" text-anchor="middle" font-size="14" font-weight="700" class="t-red">fan</text><text x="435.0" y="173" text-anchor="middle" font-size="12" class="t-gray">variance grows with x</text></svg>',
          alt: 'Three residual plots. Left, labelled random band: points scattered evenly above and below zero with no pattern; assumptions look fine. Middle, labelled curve: residuals positive at both ends and negative in the middle, a U shape; the relationship is not linear. Right, labelled fan: residuals tightly packed near zero on the left and spreading wider to the right; variance grows with x.',
          caption: 'What to look for. Only the left plot supports the model.',
        },
        {
          type: 'list',
          items: [
            '**Curve** (nonlinearity): the straight line is the wrong shape. Fix: transform $x$ or $y$, or add an $x^2$ term (a multiple regression).',
            '**Fan** ([[stat-heteroscedasticity|non-constant variance]]): the scatter grows with $x$, typical of times, counts and money. The standard errors are wrong. Fix: often a log transformation of $y$.',
            '**Dependence**: plot residuals in **time order**. Long runs of same-sign residuals or slow waves mean the errors are correlated (thermal throttling during a benchmark, a server slowly filling its cache), and the SEs are too small.',
            '**Non-normality**: a normal [[stat-qq-plot|Q–Q plot]] of the residuals should be roughly straight. This assumption matters least: with moderate $n$ the CLT makes $b_1$ approximately normal anyway; what it does affect is prediction intervals.',
          ],
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'A classic exam move: show a scatterplot with $r = 0.95$ and a clearly curved residual plot, then ask whether a linear model is appropriate. The answer is no. Strong correlation and a significant slope do not certify linearity; the residual plot does the checking.',
        },
      ],
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'mcq',
      prompt: 'A line is fitted to Day-$N$ player retention against $N$. Its residual plot is shown. What does it indicate?',
      figure: {
        type: 'figure',
        svg: '<svg viewBox="0 0 360 220" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="10" width="290" height="170" fill="none" stroke="currentColor" class="s-gray"/><line x1="50" y1="95.0" x2="340" y2="95.0" stroke="currentColor" stroke-dasharray="4 3" class="s-gray"/><circle cx="328.0" cy="22.0" r="4.5" class="f-blue"/><circle cx="318.8" cy="60.4" r="4.5" class="f-blue"/><circle cx="309.7" cy="83.2" r="4.5" class="f-blue"/><circle cx="291.3" cy="111.8" r="4.5" class="f-blue"/><circle cx="273.0" cy="124.1" r="4.5" class="f-blue"/><circle cx="245.4" cy="156.3" r="4.5" class="f-blue"/><circle cx="208.8" cy="148.3" r="4.5" class="f-blue"/><circle cx="144.6" cy="121.4" r="4.5" class="f-blue"/><circle cx="62.0" cy="27.5" r="4.5" class="f-blue"/><text x="195.0" y="208" text-anchor="middle" font-size="13">fitted value ŷ</text><text x="38" y="100.0" text-anchor="end" font-size="13">0</text><text x="18" y="75.0" text-anchor="middle" font-size="13" transform="rotate(-90 18 75.0)">residual</text></svg>',
        alt: 'A residual plot of nine points against fitted values: residuals are large and positive at both ends and negative in the middle, forming a U shape.',
        maxWidth: 380,
      },
      options: [
        {
          text: 'The relationship is curved, so a straight line is the wrong model; try transforming $y$ (for example $\\ln y$)',
          correct: true,
          why: 'A U-shaped residual pattern means the line overshoots in the middle and undershoots at both ends: classic curvature.',
        },
        {
          text: 'The variance is not constant, so only the standard errors need fixing',
          why: 'Non-constant variance shows up as a fan. Here the residuals move systematically with the fitted value, which is a problem with the shape of the model itself.',
        },
        {
          text: 'The model is fine, because the residuals average to zero',
          why: 'Least-squares residuals **always** average to zero when there is an intercept. That says nothing about whether the model fits.',
        },
        {
          text: 'The errors are not normal, so a rank-based test is needed',
          why: 'Normality is checked with a Q–Q plot. A systematic U pattern points to the wrong mean function, which no test of the slope can repair.',
        },
      ],
      explanation: 'Retention decays roughly exponentially: it drops fast at first and then levels off. A straight line cannot bend, so it lies above the data in the middle and below it at the ends, and the residuals trace a U. The fix (two cards ahead) is to model $\\ln(\\text{retention})$, which is linear in days.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'error',
      prompt: 'An analyst models Day-$N$ retention (%) for $N = 1$ to $30$. Tap the first line where the reasoning goes wrong.',
      lines: [
        'Least-squares fit: $\\widehat{\\text{retention}} = 41.9 - 1.45N$',
        '$R^2 = 0.92$, and the slope\'s $t$ test gives $p < 0.001$',
        'Since $R^2$ is high and the slope is significant, the linear model is appropriate',
        'Predicted Day-45 retention: $41.9 - 1.45 \\times 45 \\approx -23\\%$',
      ],
      errorLines: [3],
      explanation: 'Lines 1 and 2 are correct computations. Line 3 is the flaw: neither a high $R^2$ nor a small p-value shows that the **form** of the model is right. The residual plot (the U shape in the previous question) shows curvature, and line 4 exposes the consequence: a negative percentage, from a straight line extrapolated past where the curve flattens. A log model predicts about $1.3\\%$ at Day 45.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'concept',
      title: 'Outliers, leverage and influence',
      blocks: [
        {
          type: 'p',
          text: 'Unusual points come in two flavours, and they do different damage. An [[stat-outlier|outlier]] in $y$ has a large residual: it sits far above or below the pattern. A point with high [[stat-leverage|leverage]] has an unusual $x$-value, far from $\\bar{x}$: it sits at the end of the lever and can tilt the line.',
        },
        {
          type: 'math',
          tex: 'h_i = \\frac{1}{n} + \\frac{(x_i - \\bar{x})^2}{S_{xx}}',
          caption: 'Leverage in simple regression. It depends only on $x$; values range from $\\frac1n$ (at $\\bar{x}$) up to $1$. The average leverage is $\\frac2n$; values above about $\\frac{4}{n}$ deserve a look.',
        },
        {
          type: 'p',
          text: 'An [[stat-influential-point|influential point]] is one whose removal would change the fit substantially. Influence needs **both**: high leverage **and** a position off the pattern. Move the orange point below and watch the green line.',
        },
        {
          type: 'graph',
          x: [0, 160],
          y: [0, 30],
          xStep: 20,
          yStep: 5,
          functions: [
            { expr: fitted, label: 'fit without the orange point', color: 'gray', dashed: true },
            { expr: `${intercept9} + ${slope9}*x`, label: 'fit with it', color: 'green' },
          ],
          points: [
            ...enemies.map((x, i) => ({ x, y: frameMs[i], color: 'blue' as const })),
            { x: 'p', y: 'q', color: 'orange' as const },
          ],
          sliders: [
            { name: 'p', min: 0, max: 150, step: 1, value: 140, label: 'orange point: enemies $p$' },
            { name: 'q', min: 0, max: 30, step: 0.1, value: 8, label: 'orange point: frame time $q$' },
          ],
          readouts: [
            { label: 'slope with the point', expr: slope9, digits: 4 },
            { label: 'slope without it', expr: '39/350', digits: 4 },
            { label: 'leverage $h$', expr: '1/9 + (p - (360 + p)/9)^2/(20400 + p^2 - (360 + p)^2/9)', digits: 3 },
          ],
          caption: 'At $(140, 8)$ (an unrealistically fast frame at a huge load, perhaps a logging bug) the point has leverage $0.69$ and drags the slope from $0.111$ to $0.015$. Now set $q = 21.9$, right on the old line: same leverage, almost no influence. Finally set $p = 45$, $q = 20$: a big outlier at $\\bar{x}$ only lifts the line and leaves the slope at $0.111$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the far-out points have the power',
          text: 'Least squares minimizes **squared** residuals, so a point that would have a large residual pulls hard, and a point far from $\\bar{x}$ can be accommodated by rotating the line around $(\\bar{x}, \\bar{y})$, which a point near $\\bar{x}$ cannot do. Cook\'s distance combines the two effects into one number per point.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Investigate, don\'t just delete',
          text: 'An influential point may be a logging error (fix it), a different regime (the game behaves differently above $100$ enemies: model that separately), or the most informative observation you have. Report the fit with and without it, and never drop points just to improve $R^2$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'numeric',
      prompt: 'In the original frame-time data ($n = 8$, $\\bar{x} = 45$, $S_{xx} = 4200$), compute the leverage of the point at $x = 80$ enemies, to $3$ decimal places.',
      hint: '$h = \\frac1n + \\frac{(x - \\bar{x})^2}{S_{xx}}$.',
      label: '$h =$',
      answer: '1/8 + 35^2/4200',
      answerTex: 'h = \\tfrac18 + \\tfrac{35^2}{4200} \\approx 0.417',
      tolerance: 0.0006,
      explanation: '$h = 0.125 + \\frac{1225}{4200} = 0.125 + 0.2917 = 0.417$. The two end points ($x = 10$ and $x = 80$) have the highest leverage in the design; the middle points ($40$ and $50$) have only $0.125 + \\frac{25}{4200} \\approx 0.131$. All are below $\\frac4n = 0.5$, and since the end points also follow the pattern, none of them is influential.',
    },
    // ------------------------------------------------------------------ 16
    {
      kind: 'concept',
      title: 'Transformations: straightening curves with logs',
      blocks: [
        {
          type: 'p',
          text: 'Many relationships in games are multiplicative, not additive. [[stat-retention-curve|Player retention]] loses roughly the same **fraction** of the remaining players each day: $R = a e^{bN}$ with $b < 0$. Taking the [[natural-logarithm]] turns that into a straight line:',
        },
        {
          type: 'math',
          tex: 'R = a e^{bN} \\iff \\ln R = \\ln a + bN',
          caption: 'So regress $\\ln R$ on $N$ with ordinary least squares, then transform back.',
        },
        {
          type: 'graph',
          x: [0, 32],
          y: [-5, 55],
          xStep: 5,
          yStep: 10,
          functions: [
            { expr: '41.934 - 1.4463x', label: 'straight line (residuals U-shaped)', color: 'red', dashed: true },
            { expr: '50.81exp(-0.0820x)', label: 'exponential fit $50.8\\,e^{-0.082N}$', color: 'green' },
          ],
          points: days.map((d, i) => ({ x: d, y: retention[i], color: 'blue' as const })),
          hlines: [{ y: 0 }],
          caption: 'Day-$N$ retention (% of installs still playing). The straight line misses systematically and goes negative after Day $29$; the exponential curve, fitted as a line on the log scale, follows the data.',
        },
        {
          type: 'graph',
          x: [0, 32],
          y: [1, 4.2],
          xStep: 5,
          yStep: 0.5,
          height: 240,
          functions: [{ expr: '3.928 - 0.0820x', label: '$\\widehat{\\ln R} = 3.928 - 0.0820N$', color: 'green' }],
          points: days.map((d, i) => ({ x: d, y: Math.log(retention[i]), color: 'blue' as const })),
          caption: 'The same data with $\\ln R$ on the vertical axis: now a straight line fits ($R^2 = 0.998$) and the residuals show no pattern.',
        },
        {
          type: 'derivation',
          title: 'Interpreting a slope on the log scale',
          steps: [
            { tex: '\\widehat{\\ln R} = 3.928 - 0.0820\\,N', why: 'Least-squares fit of $\\ln R$ on $N$ for the nine data points.' },
            { tex: '\\hat{R} = e^{3.928}\\,e^{-0.0820N} = 50.8 \\times (0.921)^N', why: 'Exponentiate both sides; $e^{a + b} = e^a e^b$.' },
            { tex: '\\frac{\\hat{R}(N+1)}{\\hat{R}(N)} = e^{-0.0820} = 0.921', why: 'One more day multiplies predicted retention by $e^{b}$, whatever $N$ is.' },
          ],
          result: 'Each additional day keeps about $92.1\\%$ of the remaining players, a $7.9\\%$ daily loss. For small $|b|$, $e^b \\approx 1 + b$, so the slope itself ($-0.082$) reads directly as "about $-8\\%$ per day".',
        },
        {
          type: 'list',
          items: [
            '**Log $y$** (exponential growth or decay; also tames a fan of increasing variance): slope $b$ means $y$ is multiplied by $e^b$ per unit of $x$.',
            '**Log both** (power laws $y = ax^k$, common for costs vs sizes): $\\ln y = \\ln a + k\\ln x$, and the slope $k$ is an elasticity: $1\\%$ more $x$ gives about $k\\%$ more $y$.',
            'A log needs positive values; and a prediction $e^{\\widehat{\\ln y}}$ estimates the **median** of $y$ at that $x$, not its mean.',
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 17
    {
      kind: 'fill',
      prompt: 'Interpret a log-scale regression.',
      template: 'A model $\\widehat{\\ln y} = 2.1 + 0.05x$ says that each one-unit increase in $x$ multiplies the predicted $y$ by ___, which is roughly a ___ increase.',
      blanks: [{ answers: ['$e^{0.05}$'] }, { answers: ['$5\\%$'] }],
      wordBank: ['$e^{0.05}$', '$0.05$', '$e^{2.1}$', '$5\\%$', '$0.05\\%$', '$2.1\\%$'],
      explanation: 'Adding $1$ to $x$ adds $0.05$ to $\\ln y$, and adding $0.05$ to a logarithm multiplies the quantity by $e^{0.05} \\approx 1.051$: about a $5\\%$ increase (exactly $5.1\\%$). The intercept $2.1$ only sets the starting level, $e^{2.1} \\approx 8.2$ at $x = 0$.',
    },
  ],
  takeaways: [
    'The model $Y_i = \\beta_0 + \\beta_1x_i + \\varepsilon_i$ with independent $N(0, \\sigma^2)$ errors (LINE) underlies every interval and test; estimate $\\sigma$ by $s = \\sqrt{\\operatorname{SSE}/(n-2)}$.',
    '$b_1$ is a linear combination of the $Y_i$: unbiased, with $\\operatorname{SE}(b_1) = s/\\sqrt{S_{xx}}$. Test and estimate with $t = (b_1 - \\beta_1)/\\operatorname{SE}(b_1) \\sim t_{n-2}$; spreading the $x$-values shrinks the SE.',
    'A confidence interval for the mean response uses $\\sqrt{\\frac1n + \\frac{(x^*-\\bar{x})^2}{S_{xx}}}$; a prediction interval for one new value adds $1$ under the root, so it never shrinks below about $\\pm 1.96\\sigma$. Both widen away from $\\bar{x}$.',
    'Check assumptions with residual plots: a curve means nonlinearity, a fan means non-constant variance, waves in time order mean dependence. A high $R^2$ or small p-value is not a model check.',
    'Influence = leverage (unusual $x$) + a large departure from the pattern. Logs straighten multiplicative relationships: in $\\widehat{\\ln y} = a + bx$, each unit of $x$ multiplies $y$ by $e^b$.',
  ],
  reading: [
    {
      title: 'OpenStax Introductory Statistics, chapter 12: Linear Regression and Correlation',
      url: 'https://openstax.org/details/books/introductory-statistics',
      source: 'openstax',
      note: 'Testing the significance of the correlation coefficient, prediction, and outliers, with worked examples.',
    },
    {
      title: 'MIT OCW 18.05 Introduction to Probability and Statistics',
      url: 'https://ocw.mit.edu/courses/18-05-introduction-to-probability-and-statistics-spring-2014/',
      source: 'other',
      note: 'The linear regression reading derives least squares and its sampling distribution at the level of this lesson.',
    },
    {
      title: 'Wikipedia: Prediction interval',
      url: 'https://en.wikipedia.org/wiki/Prediction_interval',
      source: 'wikipedia',
      note: 'Prediction intervals for regression and for a single new observation, and how they differ from confidence intervals.',
    },
    {
      title: 'Wikipedia: Leverage (statistics)',
      url: 'https://en.wikipedia.org/wiki/Leverage_(statistics)',
      source: 'wikipedia',
      note: 'The hat matrix, leverage bounds, and the connection to influence and Cook\'s distance.',
    },
  ],
};
