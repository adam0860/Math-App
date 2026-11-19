import type { Lesson } from '../../types';

// Running example: 11 frame times (ms) from a playtest capture, with one hitch.
const frames = [14, 15, 16, 16, 17, 17, 17, 18, 19, 21];
const stackY = (i: number) => 0.35 + 0.45 * frames.slice(0, i).filter((v) => v === frames[i]).length;

export const lesson: Lesson = {
  id: 'stat-summaries',
  title: 'Center, Spread and the Five-Number Summary',
  summary: 'Summarizing a quantitative variable with frame-time data from a game: mean, median, mode, weighted and trimmed means and why the median shrugs off a hitch; range, variance and standard deviation (with a first look at $n - 1$ and a numerically stable algorithm); quartiles, the five-number summary, boxplots and the $1.5 \\cdot \\text{IQR}$ outlier rule; z-scores and percentiles such as p99.',
  minutes: 22,
  objectives: [
    'Compute the mean, median and mode, and explain why the mean minimizes squared error while the median minimizes absolute error',
    'Use weighted and trimmed means, and judge which summaries are robust to outliers',
    'Compute the range, sample variance and standard deviation, and explain what dividing by $n - 1$ is for',
    'Find quartiles, the IQR and the five-number summary, draw a boxplot, and flag outliers with the $1.5 \\cdot \\text{IQR}$ rule',
    'Standardize values with z-scores, interpret percentiles such as p99 frame time, and predict how summaries change under unit conversions',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'The running example, and the mean',
      blocks: [
        {
          type: 'p',
          text: 'You capture $11$ consecutive frames during a playtest on a mid-range PC. At $60$ frames per second each frame has a budget of $1000/60 \\approx 16.7$ ms. Here are the frame times, already sorted:',
        },
        {
          type: 'table',
          headers: ['Frame (sorted)', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'],
          rows: [['ms', '14', '15', '16', '16', '17', '17', '17', '18', '19', '21', '50']],
          caption: 'Ten ordinary frames and one **hitch** of $50$ ms — the stutter a player actually notices (a shader compile, a garbage-collection pause, an asset streaming stall).',
        },
        {
          type: 'p',
          text: 'Write the data as $x_1, \\dots, x_n$, and the sorted values as $x_{(1)} \\le x_{(2)} \\le \\cdots \\le x_{(n)}$ (the **order statistics**). The first question about any quantitative variable is: what is a typical value? That is a measure of **center**.',
        },
        {
          type: 'definition',
          term: 'Sample mean',
          text: 'The [[stat-sample-mean|sample mean]] is $\\bar{x} = \\dfrac{1}{n}\\displaystyle\\sum_{i=1}^{n} x_i$. For a whole population of size $N$ the same formula gives the population mean $\\mu$.',
        },
        {
          type: 'derivation',
          title: 'Mean frame time',
          steps: [
            { tex: '\\sum x_i = 14 + 15 + 16 + 16 + 17 + 17 + 17 + 18 + 19 + 21 + 50', why: 'Add all $n = 11$ values — the hitch included.' },
            { tex: '= 170 + 50 = 220', why: 'The ten ordinary frames sum to $170$.' },
            { tex: '\\bar{x} = \\frac{220}{11} = 20 \\text{ ms}', why: 'Divide by the number of values.' },
          ],
          result: 'The mean is $20$ ms — larger than $10$ of the $11$ frames. Without the hitch it would be $170/10 = 17$ ms. One value moved the mean by $3$ ms.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'The mean is a balance point',
          text: 'The deviations from the mean always sum to zero: $\\sum (x_i - \\bar{x}) = \\sum x_i - n\\bar{x} = n\\bar{x} - n\\bar{x} = 0$. Put equal weights at the data values on a ruler and it balances at $\\bar{x}$. Here the hitch sits $30$ ms to the right, and that long lever arm is balanced by ten small deviations to the left ($-6, -5, \\dots, +1$). Far-out values have huge leverage, which is exactly why one hitch drags the mean.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'concept',
      title: 'The median, the mode, and what each one minimizes',
      blocks: [
        {
          type: 'definition',
          term: 'Median and mode',
          text: 'The [[stat-median|median]] is the middle of the sorted data: $x_{((n+1)/2)}$ when $n$ is odd, and the average of the two middle values $\\frac{1}{2}\\left(x_{(n/2)} + x_{(n/2+1)}\\right)$ when $n$ is even. The [[stat-mode|mode]] is the most frequent value.',
        },
        {
          type: 'p',
          text: 'With $n = 11$ the median is the $6$th sorted value: $17$ ms. The mode is also $17$ ms (three frames). The hitch is just "one value above the middle"; how far above does not matter. Mean $20$ versus median $17$: when they disagree this much, the data have a long tail or an outlier, and you should look at the data before reporting either.',
        },
        {
          type: 'p',
          text: 'There is a deeper way to see the difference. Suppose you must summarize the data by a single number $c$, and you pay a penalty for each value\'s miss $x_i - c$. Which $c$ is best depends on the penalty:',
        },
        {
          type: 'derivation',
          title: 'The mean minimizes the sum of squared errors',
          steps: [
            { tex: 'S(c) = \\sum_{i=1}^{n} (x_i - c)^2', why: 'The total squared error of the guess $c$. It is a quadratic in $c$ that opens upward, so it has one minimum.' },
            { tex: 'S\'(c) = \\sum_{i=1}^{n} -2(x_i - c) = -2\\left(\\sum x_i - nc\\right)', why: 'Differentiate term by term (chain rule): $\\frac{d}{dc}(x_i - c)^2 = -2(x_i - c)$.' },
            { tex: 'S\'(c) = 0 \\iff c = \\frac{1}{n}\\sum x_i = \\bar{x}', why: 'Set the [[derivative]] to zero. $S\'\'(c) = 2n > 0$, so it is a minimum.' },
          ],
          result: 'The mean is the **least-squares** summary. The median minimizes the sum of **absolute** errors $\\sum |x_i - c|$ instead: moving $c$ to the right lowers each term for values above $c$ and raises it for values below, so the sum keeps falling while more values lie above $c$ than below — it bottoms out in the middle.',
        },
        {
          type: 'graph',
          x: [10, 30],
          y: [0, 160],
          xStep: 2,
          yStep: 20,
          height: 280,
          functions: [
            { expr: '(1026 + 11(x - 20)^2)/25', color: 'orange', label: 'squared error $\\sum (x_i - c)^2 \\div 25$' },
            { expr: 'abs(x-14) + abs(x-15) + 2abs(x-16) + 3abs(x-17) + abs(x-18) + abs(x-19) + abs(x-21) + abs(x-50)', color: 'blue', label: 'absolute error $\\sum |x_i - c|$' },
          ],
          points: [
            { x: 'c', y: '(1026 + 11(c - 20)^2)/25', color: 'orange' },
            { x: 'c', y: 'abs(c-14) + abs(c-15) + 2abs(c-16) + 3abs(c-17) + abs(c-18) + abs(c-19) + abs(c-21) + abs(c-50)', color: 'blue' },
          ],
          vlines: [
            { x: 20, label: 'mean 20', color: 'orange' },
            { x: 17, label: 'median 17', color: 'blue' },
          ],
          sliders: [{ name: 'c', min: 10, max: 30, step: 0.1, value: 24, label: 'summary value $c$ (ms)' }],
          readouts: [
            { label: '$\\sum (x_i - c)^2 =$', expr: '1026 + 11(c - 20)^2', digits: 1 },
            { label: '$\\sum |x_i - c| =$', expr: 'abs(c-14) + abs(c-15) + 2abs(c-16) + 3abs(c-17) + abs(c-18) + abs(c-19) + abs(c-21) + abs(c-50)', digits: 1 },
          ],
          caption: 'Slide $c$ and watch both penalties for the $11$ frame times. The squared error is a parabola with its bottom at the mean, $20$; the absolute error is piecewise linear (a kink at every data value) with its bottom at the median, $17$. The hitch at $50$ pulls the parabola\'s minimum right; it barely affects the absolute error\'s.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'L2 loss versus L1 loss',
          text: 'In machine learning this is the choice between **L2 (squared) loss**, whose best constant prediction is the mean, and **L1 (absolute) loss**, whose best constant prediction is the median. L2 lets a few corrupted labels drag the model around; L1 shrugs them off. "Huber loss" is squared for small errors and absolute for large ones — the best of both.',
        },
      ],
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'numeric',
      prompt: 'Eight playtest sessions lasted $12, 45, 8, 30, 22, 95, 18, 40$ minutes. What is the **median** session length?',
      hint: 'Sort first. With $n = 8$ (even), average the $4$th and $5$th sorted values.',
      label: 'median $=$',
      unit: 'min',
      answer: '26',
      explanation: 'Sorted: $8, 12, 18, 22, 30, 40, 45, 95$. With $n = 8$ the median is the average of the $4$th and $5$th values: $\\frac{22 + 30}{2} = 26$ minutes. The mean is $270/8 = 33.75$ minutes, pulled up by the $95$-minute session — typical of session lengths, which have a long right tail.',
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'concept',
      title: 'Robustness: drag the outlier',
      blocks: [
        {
          type: 'p',
          text: 'A statistic is [[stat-robust-statistic|robust]] (or resistant) if a few wild values cannot move it much. Try it: the slider moves the eleventh frame anywhere from $10$ to $60$ ms while the other ten stay put.',
        },
        {
          type: 'graph',
          x: [8, 62],
          y: [0, 2.2],
          xStep: 4,
          yStep: 5,
          height: 230,
          points: [
            ...frames.map((v, i) => ({ x: v, y: stackY(i), color: 'blue' as const })),
            { x: 'v', y: 0.35, color: 'red', label: 'frame 11' },
            { x: '(170 + v)/11', y: 1.65, color: 'orange', label: 'mean', open: true },
            { x: 17, y: 2, color: 'blue', label: 'median', open: true },
          ],
          vlines: [
            { x: '(170 + v)/11', color: 'orange' },
            { x: 17, color: 'blue' },
          ],
          sliders: [{ name: 'v', min: 10, max: 60, step: 0.5, value: 50, label: 'eleventh frame time $v$ (ms)' }],
          readouts: [
            { label: 'mean $=$', expr: '(170 + v)/11', digits: 2 },
            { label: 'median $=$', expr: '17', digits: 1 },
            { label: '$10\\%$ trimmed mean $=$', expr: '(170 + v - min(v, 14) - max(v, 21))/9', digits: 2 },
            { label: 'std. dev. $s =$', expr: 'sqrt((2926 + v^2 - (170 + v)^2/11)/10)', digits: 2 },
            { label: 'IQR $=$', expr: 'max(18, min(v, 19)) - max(15, min(v, 16))', digits: 1 },
          ],
          caption: 'Dot plot of the frame times. As the red frame runs off to the right, the mean chases it ($\\bar{x}$ grows by $1/11$ ms per ms) and the standard deviation explodes, while the median and IQR do not move at all once $v$ is past the middle of the data.',
        },
        {
          type: 'p',
          text: 'One way to make "robust" precise is the **breakdown point**: the fraction of the data you must corrupt to move a statistic arbitrarily far. For the mean it is $0$ — a single value suffices. For the median it is $50\\%$: until half the values are wild, the middle value is still an honest one.',
        },
        {
          type: 'definition',
          term: 'Trimmed and weighted means',
          text: 'A $10\\%$ [[stat-trimmed-mean|trimmed mean]] drops the lowest and highest $10\\%$ of values (rounding down to whole values) and averages the rest — robust like a median, but using more of the data. A [[stat-weighted-mean|weighted mean]] $\\bar{x}_w = \\dfrac{\\sum w_i x_i}{\\sum w_i}$ counts value $x_i$ with weight $w_i \\ge 0$; use it when values summarize groups of different sizes.',
        },
        {
          type: 'derivation',
          title: 'Trimmed mean of the frame times',
          steps: [
            { tex: '0.10 \\times 11 = 1.1 \\implies \\text{drop } 1 \\text{ value from each end}', why: 'Round the number to trim down to a whole number of values.' },
            { tex: '\\text{remove } 14 \\text{ and } 50: \\quad 15, 16, 16, 17, 17, 17, 18, 19, 21', why: 'The trim removes the smallest and the largest value, whatever they are.' },
            { tex: '\\bar{x}_{\\text{trim}} = \\frac{220 - 14 - 50}{9} = \\frac{156}{9} \\approx 17.33 \\text{ ms}', why: 'Average the $9$ remaining values.' },
          ],
          result: 'The trimmed mean $17.33$ sits next to the median $17$, far from the raw mean $20$.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Robust does not mean "better"',
          text: 'For frame pacing, the hitch is the most important frame in the capture! The median says the game typically runs at $17$ ms, which is true; the mean, max and high percentiles reveal that something stalls. Choose the summary that answers your question — and never delete an outlier just because it is inconvenient. Investigate it: is it a measurement glitch, or the bug you are looking for?',
        },
      ],
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'numeric',
      prompt: 'A character\'s win rate is $60\\%$ on map A ($200$ matches), $45\\%$ on map B ($300$ matches) and $50\\%$ on map C ($500$ matches). What is the overall win rate across all $1{,}000$ matches? Give a decimal to $3$ places.',
      hint: 'Weight each map\'s win rate by its number of matches: $\\bar{x}_w = \\frac{\\sum w_i x_i}{\\sum w_i}$.',
      label: 'overall win rate $=$',
      answer: '(0.6*200 + 0.45*300 + 0.5*500)/1000',
      answerTex: '0.505',
      tolerance: 0.0005,
      explanation: 'Wins: $0.60(200) + 0.45(300) + 0.50(500) = 120 + 135 + 250 = 505$, so the overall rate is $505/1000 = 0.505$. That is a weighted mean of the three rates with weights $200, 300, 500$. The unweighted average $(0.60 + 0.45 + 0.50)/3 \\approx 0.517$ is wrong because it treats the $200$ matches on map A as if they counted as much as the $500$ on map C.',
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'concept',
      title: 'Spread: range, variance and standard deviation',
      blocks: [
        {
          type: 'p',
          text: 'Two builds can both average $17$ ms per frame; one delivers $16$–$18$ ms every frame, the other alternates $8$ and $26$. Players feel the second as stutter. Center is not enough: we need **spread**. The simplest measure, the [[stat-range|range]] $x_{(n)} - x_{(1)}$, uses only the two most extreme values ($50 - 14 = 36$ ms here), so one hitch dominates it.',
        },
        {
          type: 'definition',
          term: 'Sample variance and standard deviation',
          text: 'The [[stat-sample-variance|sample variance]] is $s^2 = \\dfrac{1}{n-1}\\displaystyle\\sum_{i=1}^{n} (x_i - \\bar{x})^2$, and the **sample standard deviation** is $s = \\sqrt{s^2}$, in the same units as the data. For a whole population, $\\sigma^2 = \\frac{1}{N}\\sum (x_i - \\mu)^2$ — the data version of the [[dm-variance|variance]] of a random variable.',
        },
        {
          type: 'derivation',
          title: 'Standard deviation of the ten ordinary frames',
          steps: [
            { tex: '\\bar{x} = \\frac{170}{10} = 17', why: 'Leave out the hitch for now, so we see the spread of normal frames.' },
            { tex: 'x_i - \\bar{x}: \\ -3, -2, -1, -1, 0, 0, 0, 1, 2, 4', why: 'Deviations from the mean for $14, 15, 16, 16, 17, 17, 17, 18, 19, 21$. Check: they sum to $0$.' },
            { tex: '\\sum (x_i - \\bar{x})^2 = 9 + 4 + 1 + 1 + 0 + 0 + 0 + 1 + 4 + 16 = 36', why: 'Square each deviation so that negative and positive misses both count.' },
            { tex: 's^2 = \\frac{36}{10 - 1} = 4, \\qquad s = \\sqrt{4} = 2 \\text{ ms}', why: 'Divide by $n - 1 = 9$, then take the square root to return to milliseconds.' },
          ],
          result: 'Ordinary frames typically land about $2$ ms from $17$ ms. With the hitch included, $\\sum (x_i - 20)^2 = 1026$, so $s^2 = 1026/10 = 102.6$ and $s \\approx 10.13$ ms: one frame quintupled the standard deviation.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why square, and why $n - 1$?',
          text: 'Squaring makes every deviation positive and, unlike $|x_i - \\bar{x}|$, is smooth (differentiable) and plays well with algebra: variances of independent quantities add, a fact you will use constantly from Unit 5 on. As for $n - 1$: we measure deviations from $\\bar{x}$, not from the unknown true mean $\\mu$, and $\\bar{x}$ is by construction the point that makes $\\sum (x_i - c)^2$ **smallest**. So the sum is systematically a bit too small, and dividing by $n - 1$ instead of $n$ exactly corrects this on average. Another view: the deviations must sum to $0$, so only $n - 1$ of them are free (**degrees of freedom**). Unit 7 proves that $E[s^2] = \\sigma^2$.',
        },
        {
          type: 'p',
          text: 'Expanding the square gives a shortcut, $\\sum (x_i - \\bar{x})^2 = \\sum x_i^2 - n\\bar{x}^2$. It is fine on paper but dangerous in floating point: when the values are large and close together, it subtracts two huge, nearly equal numbers and the digits that matter cancel away. Real code uses **Welford\'s algorithm**, which updates the mean and the sum of squared deviations one value at a time.',
        },
        {
          type: 'code',
          title: 'running_stats.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdio>
#include <vector>

// Welford's online algorithm: one pass, numerically stable.
struct RunningStats {
    long long n = 0;
    double mean = 0.0;
    double m2 = 0.0;                      // sum of squared deviations from the current mean
    void add(double x) {
        ++n;
        double delta = x - mean;
        mean += delta / n;                // update the mean
        m2 += delta * (x - mean);         // old deviation times new deviation
    }
    double variance() const { return m2 / (n - 1); }   // sample variance s^2
};

int main() {
    const std::vector<double> frameMs = {14, 15, 16, 16, 17, 17, 17, 18, 19, 21, 50};
    // The same data twice: as plain durations, and shifted by a huge constant
    // (as if they were timestamps). Shifting must not change the variance.
    for (double shift : {0.0, 1e9}) {
        RunningStats w;
        double sum = 0, sumSq = 0;
        for (double f : frameMs) {
            double x = f + shift;
            w.add(x);
            sum += x;
            sumSq += x * x;
        }
        double n = double(frameMs.size());
        double textbook = (sumSq - sum * sum / n) / (n - 1);   // "shortcut" formula
        std::printf("shift %.0e: Welford s^2 = %.4f, s = %.4f | shortcut s^2 = %.4f\\n",
                    shift, w.variance(), std::sqrt(w.variance()), textbook);
    }
}`,
          output: `shift 0e+00: Welford s^2 = 102.6000, s = 10.1292 | shortcut s^2 = 102.6000
shift 1e+09: Welford s^2 = 102.6000, s = 10.1292 | shortcut s^2 = 0.0000`,
          annotations: [
            { lines: '10-15', text: 'Each new value nudges the mean by $\\delta/n$ and adds (old deviation) $\\times$ (new deviation) to the running sum of squares. No huge intermediate numbers ever appear.' },
            { lines: '33', text: 'The shortcut formula: with values near $10^9$, $\\sum x_i^2 \\approx 1.1 \\times 10^{19}$, and a `double` holds only about $16$ significant digits. The variance ($\\approx 10^2$) is lost entirely in the subtraction.' },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'error',
      prompt: 'A tester computes the standard deviation of five frame times: $3, 5, 7, 9, 11$ ms. Tap the first wrong line.',
      lines: [
        '$\\bar{x} = \\dfrac{3 + 5 + 7 + 9 + 11}{5} = 7$.',
        'Deviations from the mean: $-4, -2, 0, 2, 4$.',
        '$s^2 = \\dfrac{1}{n - 1}\\sum (x_i - \\bar{x}) = \\dfrac{-4 - 2 + 0 + 2 + 4}{4} = 0$.',
        'So $s = 0$: the frame times have no spread.',
      ],
      errorLines: [3],
      explanation: 'Line 3 forgets to **square** the deviations. Unsquared deviations always sum to $0$ (the mean is the balance point), so this "formula" would give $0$ for every data set. Correctly: $\\sum (x_i - \\bar{x})^2 = 16 + 4 + 0 + 4 + 16 = 40$, $s^2 = 40/4 = 10$, and $s = \\sqrt{10} \\approx 3.16$ ms.',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'concept',
      title: 'Quartiles, the five-number summary and boxplots',
      blocks: [
        {
          type: 'p',
          text: 'The median splits the data in half. Splitting each half again gives the [[stat-quartiles|quartiles]]: about a quarter of the data lie below $Q_1$, half below the median $Q_2$, three quarters below $Q_3$. Their difference is a robust measure of spread.',
        },
        {
          type: 'definition',
          term: 'Quartiles (median-of-halves rule), IQR, five-number summary',
          text: '$Q_1$ is the median of the lower half of the sorted data and $Q_3$ the median of the upper half, where, when $n$ is odd, the overall median is left out of both halves. The [[stat-iqr|interquartile range]] is $\\text{IQR} = Q_3 - Q_1$, the spread of the middle $50\\%$. The [[stat-five-number-summary|five-number summary]] is (min, $Q_1$, median, $Q_3$, max).',
        },
        {
          type: 'derivation',
          title: 'Five-number summary and outliers for the frame times',
          steps: [
            { tex: '14,\\ 15,\\ 16,\\ 16,\\ 17,\\ \\boxed{17},\\ 17,\\ 18,\\ 19,\\ 21,\\ 50', why: 'Sorted data; the median is the $6$th value, $17$.' },
            { tex: 'Q_1 = \\text{median}(14, 15, 16, 16, 17) = 16, \\quad Q_3 = \\text{median}(17, 18, 19, 21, 50) = 19', why: 'The lower and upper halves have $5$ values each (the median is excluded since $n$ is odd).' },
            { tex: '\\text{IQR} = 19 - 16 = 3 \\text{ ms}', why: 'The middle half of the frames spans just $3$ ms.' },
            { tex: '\\text{fences: } Q_1 - 1.5\\,\\text{IQR} = 11.5, \\quad Q_3 + 1.5\\,\\text{IQR} = 23.5', why: 'The $1.5 \\cdot \\text{IQR}$ rule: values beyond these fences are flagged as outliers.' },
            { tex: '50 > 23.5 \\implies 50 \\text{ is an outlier}', why: 'No value is below $11.5$; only the hitch is beyond the upper fence.' },
          ],
          result: 'Five-number summary: $(14, 16, 17, 19, 50)$, with $50$ flagged as an [[stat-outlier|outlier]].',
        },
        {
          type: 'figure',
          svg: '<svg viewBox="0 0 520 260" xmlns="http://www.w3.org/2000/svg"><circle cx="74.8" cy="58" r="4.5" class="f-blue"/><circle cx="86.0" cy="58" r="4.5" class="f-blue"/><circle cx="97.1" cy="58" r="4.5" class="f-blue"/><circle cx="97.1" cy="47" r="4.5" class="f-blue"/><circle cx="108.3" cy="58" r="4.5" class="f-blue"/><circle cx="108.3" cy="47" r="4.5" class="f-blue"/><circle cx="108.3" cy="36" r="4.5" class="f-blue"/><circle cx="119.5" cy="58" r="4.5" class="f-blue"/><circle cx="130.7" cy="58" r="4.5" class="f-blue"/><circle cx="153.1" cy="58" r="4.5" class="f-blue"/><circle cx="477.6" cy="58" r="4.5" class="f-red"/><text x="30" y="20" font-size="12" class="t-gray">the 11 frame times (dot plot)</text><rect x="97.1" y="100" width="33.6" height="40" class="f-blue s-blue" fill-opacity="0.15" stroke-width="1.8"/><line x1="108.3" y1="100" x2="108.3" y2="140" class="s-blue" stroke-width="2.6"/><line x1="74.8" y1="120" x2="97.1" y2="120" stroke="currentColor" stroke-width="1.6"/><line x1="130.7" y1="120" x2="153.1" y2="120" stroke="currentColor" stroke-width="1.6"/><line x1="74.8" y1="110" x2="74.8" y2="130" stroke="currentColor" stroke-width="1.6"/><line x1="153.1" y1="110" x2="153.1" y2="130" stroke="currentColor" stroke-width="1.6"/><circle cx="477.6" cy="120" r="5" fill="none" class="s-red" stroke-width="2"/><line x1="46.8" y1="168" x2="46.8" y2="225" class="s-orange" stroke-width="1.2" stroke-dasharray="4 3"/><line x1="181.1" y1="168" x2="181.1" y2="225" class="s-orange" stroke-width="1.2" stroke-dasharray="4 3"/><text x="50.8" y="200" font-size="11" class="t-orange">lower fence 11.5</text><text x="185.1" y="185" font-size="11" class="t-orange">upper fence 23.5</text><text x="94.1" y="96" font-size="11" text-anchor="end">Q₁ = 16</text><text x="133.7" y="96" font-size="11" text-anchor="start">Q₃ = 19</text><text x="68.8" y="124" font-size="11" text-anchor="end">min 14</text><text x="159.1" y="136" font-size="11" text-anchor="start">max* 21</text><line x1="108.3" y1="140" x2="108.3" y2="150" class="s-gray" stroke-width="0.8"/><text x="108.3" y="162" font-size="11" text-anchor="middle">median 17</text><text x="477.6" y="106" font-size="11" text-anchor="middle" class="t-red">outlier 50</text><text x="321.0" y="150" font-size="10.5" text-anchor="middle" class="t-gray">* whisker ends at the largest non-outlier</text><line x1="30" y1="225" x2="500" y2="225" stroke="currentColor" stroke-width="1.2"/><line x1="30.0" y1="225" x2="30.0" y2="230" stroke="currentColor" stroke-width="1.2"/><text x="30.0" y="244" font-size="11" text-anchor="middle">10</text><line x1="86.0" y1="225" x2="86.0" y2="230" stroke="currentColor" stroke-width="1.2"/><text x="86.0" y="244" font-size="11" text-anchor="middle">15</text><line x1="141.9" y1="225" x2="141.9" y2="230" stroke="currentColor" stroke-width="1.2"/><text x="141.9" y="244" font-size="11" text-anchor="middle">20</text><line x1="197.9" y1="225" x2="197.9" y2="230" stroke="currentColor" stroke-width="1.2"/><text x="197.9" y="244" font-size="11" text-anchor="middle">25</text><line x1="253.8" y1="225" x2="253.8" y2="230" stroke="currentColor" stroke-width="1.2"/><text x="253.8" y="244" font-size="11" text-anchor="middle">30</text><line x1="309.8" y1="225" x2="309.8" y2="230" stroke="currentColor" stroke-width="1.2"/><text x="309.8" y="244" font-size="11" text-anchor="middle">35</text><line x1="365.7" y1="225" x2="365.7" y2="230" stroke="currentColor" stroke-width="1.2"/><text x="365.7" y="244" font-size="11" text-anchor="middle">40</text><line x1="421.7" y1="225" x2="421.7" y2="230" stroke="currentColor" stroke-width="1.2"/><text x="421.7" y="244" font-size="11" text-anchor="middle">45</text><line x1="477.6" y1="225" x2="477.6" y2="230" stroke="currentColor" stroke-width="1.2"/><text x="477.6" y="244" font-size="11" text-anchor="middle">50</text><text x="500" y="244" font-size="11" text-anchor="end">ms</text><path d="M97.1 92 L97.1 86 L130.7 86 L130.7 92" fill="none" class="s-blue" stroke-width="1.2"/><text x="113.9" y="81" font-size="11" text-anchor="middle" class="t-blue">IQR = 3</text></svg>', // fig:boxplot
          alt: 'A dot plot of the eleven frame times above a horizontal boxplot on an axis from 10 to 50 ms. The box runs from Q1 = 16 to Q3 = 19 with the median line at 17, labeled IQR = 3. The left whisker goes to the minimum 14 and the right whisker to 21, the largest non-outlier. The value 50 is drawn as a separate circle labeled outlier. Dashed orange lines mark the lower fence at 11.5 and the upper fence at 23.5.',
          caption: 'A [[stat-boxplot|boxplot]] draws the five-number summary, with one change: whiskers stop at the most extreme values **inside** the fences, and outliers are plotted individually. The tiny box and the lone point say "consistent frames, one severe hitch" at a glance.',
          maxWidth: 520,
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why $1.5 \\cdot \\text{IQR}$?',
          text: 'It is a convention from John Tukey, chosen because it works well in practice: for normally distributed data (Unit 4) the fences sit about $2.7$ standard deviations from the mean, so fewer than $1\\%$ of perfectly ordinary values get flagged. Because quartiles are robust, the fences themselves are not dragged outward by the outliers they are meant to catch — unlike a rule such as "more than $2s$ from $\\bar{x}$", where the hitch inflates $s$ and partly hides itself.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Software uses different quartile rules',
          text: 'There are about a dozen conventions for quartiles. NumPy\'s default interpolates between sorted values and gives $Q_3 = 18.5$ for these data, not $19$. For large data sets the differences are negligible; for small ones, state your rule. On exams, use the rule your course teaches — in this course, median of halves.',
        },
      ],
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'numeric',
      prompt: 'Thirteen ping measurements (ms), sorted: $18, 20, 21, 21, 22, 23, 24, 25, 26, 28, 28, 31, 58$. Using the median-of-halves rule, find the **upper fence** $Q_3 + 1.5 \\cdot \\text{IQR}$.',
      hint: 'The median is the $7$th value. Each half then has $6$ values, so each quartile is an average of two values.',
      label: 'upper fence $=$',
      unit: 'ms',
      answer: '38.5',
      explanation: 'The median is the $7$th value, $24$. Lower half: $18, 20, 21, 21, 22, 23$, so $Q_1 = \\frac{21 + 21}{2} = 21$. Upper half: $25, 26, 28, 28, 31, 58$, so $Q_3 = \\frac{28 + 28}{2} = 28$. Then $\\text{IQR} = 7$ and the upper fence is $28 + 1.5 \\cdot 7 = 38.5$ ms. The $58$ ms ping is flagged as an outlier; the $31$ is not.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'mcq',
      prompt: 'Look at the boxplot of the frame times in the lesson: box from $16$ to $19$, median $17$, whiskers to $14$ and $21$, an outlier at $50$. Which statement does a boxplot like this support?',
      options: [
        { text: 'About $25\\%$ of the frames take longer than $19$ ms', correct: true, why: '$Q_3 = 19$: about three quarters of the data lie at or below it, so about a quarter lie above. (With only $11$ values, "about" matters: here $2$ frames exceed $19$ ms and $3$ are at least $19$.)' },
        { text: 'The mean frame time is $17$ ms', why: 'The line in the box is the **median**. A boxplot does not show the mean; here the mean is $20$ ms because of the outlier.' },
        { text: 'Half of the frames take between $14$ and $21$ ms', why: 'Half of the data lie in the **box** ($Q_1$ to $Q_3$), from $16$ to $19$. The whiskers extend further.' },
        { text: 'The whiskers show that the frame times are normally distributed', why: 'A boxplot shows the five-number summary and outliers, not a distribution\'s exact shape. Many different shapes give the same boxplot.' },
      ],
      explanation: 'Read a boxplot by quarters: below the box (min to $Q_1$), the two halves of the box, and above it ($Q_3$ to max) each hold about a quarter of the data. The median line is not the mean, and the box (not the whiskers) holds the middle half.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'z-scores and percentiles',
      blocks: [
        {
          type: 'p',
          text: 'Is a $21$ ms frame unusual? It depends on the spread of its data set. A [[stat-z-score|z-score]] measures a value\'s distance from the mean in units of standard deviations, which makes values from different scales comparable.',
        },
        {
          type: 'math',
          tex: 'z = \\frac{x - \\bar{x}}{s}',
          caption: 'Positive $z$: above the mean; negative: below. For the ten ordinary frames ($\\bar{x} = 17$, $s = 2$), the $21$ ms frame has $z = (21 - 17)/2 = 2$.',
        },
        {
          type: 'derivation',
          title: 'Which frame is more unusual?',
          steps: [
            { tex: '\\text{GPU A: } \\bar{x} = 16.8,\\ s = 1.2; \\qquad \\text{GPU B: } \\bar{x} = 22.0,\\ s = 3.5', why: 'Two long captures on two graphics cards. B is slower and less consistent.' },
            { tex: 'z_A = \\frac{20.4 - 16.8}{1.2} = 3.0', why: 'A $20.4$ ms frame on GPU A.' },
            { tex: 'z_B = \\frac{30.0 - 22.0}{3.5} \\approx 2.29', why: 'A $30.0$ ms frame on GPU B — slower in absolute terms.' },
          ],
          result: 'The $20.4$ ms frame on GPU A is the more unusual event ($3$ standard deviations out, versus $2.29$), even though $30$ ms is the worse frame time. Unusual is relative to the data\'s own spread.',
        },
        {
          type: 'p',
          text: 'Standardizing is a linear change of units, so it never changes the shape of the data; it just re-centers at $0$ and rescales to $s = 1$. In general, if $y_i = a x_i + b$, then $\\bar{y} = a\\bar{x} + b$ and $s_y = |a|\\,s_x$: shifting moves the center but not the spread; scaling stretches both. Converting milliseconds to seconds ($a = 0.001$) divides the mean and the standard deviation by $1000$ and the variance by $10^6$.',
        },
        {
          type: 'definition',
          term: 'Percentile',
          text: 'The $k$-th [[stat-percentile|percentile]] is a value with about $k\\%$ of the data at or below it. One common rule (**nearest rank**): sort the data and take the value at position $\\lceil k n / 100 \\rceil$. The median is the $50$th percentile, $Q_1$ and $Q_3$ the $25$th and $75$th.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'p99 frame time and "1% lows"',
          text: 'Performance teams report percentiles because players feel the tail. For a capture of $10{,}000$ frames, the **p99 frame time** is the $9{,}900$th sorted value: $1\\%$ of frames are slower. Benchmarks call the frame rate at that frame time the "$1\\%$ low". Two builds with the same average FPS can have very different p99s — and the one with the better p99 feels smoother. Server teams do the same with request latency (p50, p95, p99).',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Do not average frame rates',
          text: 'FPS is $1000/\\text{(frame ms)}$, which is not linear, so averages do not convert. Two frames of $10$ and $30$ ms run at $100$ and $33.3$ FPS; averaging those gives $66.7$ FPS. But the two frames took $40$ ms in total — $2$ frames per $40$ ms is $50$ FPS. The honest average frame rate is $1000/\\bar{x}$ for the mean frame time $\\bar{x}$; averaging per-frame FPS overweights the fast frames and flatters the build.',
        },
      ],
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'numeric',
      prompt: 'On GPU B, frame times have mean $\\bar{x} = 22.0$ ms and standard deviation $s = 3.5$ ms. What is the z-score of a $30.0$ ms frame? Give $2$ decimal places.',
      hint: '$z = (x - \\bar{x})/s$.',
      label: '$z =$',
      answer: '8/3.5',
      answerTex: '2.29',
      tolerance: 0.005,
      explanation: '$z = \\frac{30.0 - 22.0}{3.5} = \\frac{8}{3.5} \\approx 2.29$. The frame is about $2.3$ standard deviations slower than average on that GPU — unusual, but less so than a $20.4$ ms frame on GPU A ($z = 3.0$), whose frames are far more consistent.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'fill',
      prompt: 'Complete the statements about changing units.',
      template: 'Converting every frame time from milliseconds to seconds multiplies each value by $0.001$. The mean is multiplied by ___, the standard deviation by ___, and the variance by ___. If instead a fixed $5$ ms of input latency is added to every value, the mean increases by ___ ms and the standard deviation changes by ___ ms.',
      blanks: [{ answers: ['$0.001$'] }, { answers: ['$0.001$'] }, { answers: ['$10^{-6}$'] }, { answers: ['$5$'] }, { answers: ['$0$'] }],
      wordBank: ['$0.001$', '$0.001$', '$10^{-6}$', '$5$', '$0$', '$25$', '$\\sqrt{0.001}$'],
      explanation: 'For $y = ax + b$: $\\bar{y} = a\\bar{x} + b$, $s_y = |a| s_x$ and $s_y^2 = a^2 s_x^2$. With $a = 0.001$, the mean and SD scale by $0.001$ and the variance by $0.001^2 = 10^{-6}$ (variance is in squared units). Adding $5$ shifts every value, and the mean, by $5$, but every deviation $x_i - \\bar{x}$ is unchanged, so the SD changes by $0$.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'truefalse',
      prompt: 'A benchmark logs the frame rate of every frame. If you average those per-frame FPS values, you get the same number as $1000$ divided by the mean frame time in milliseconds.',
      answer: false,
      explanation: 'Averages do not pass through nonlinear functions. Frames of $10$ and $30$ ms have FPS values $100$ and $33.3$, averaging $66.7$, while $1000/20 = 50$ FPS is the true rate (two frames in $40$ ms). Averaging per-frame FPS gives the arithmetic mean of $1000/x_i$, which is always at least $1000/\\bar{x}$ and equals it only when every frame takes the same time — so it systematically flatters uneven builds.',
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'order',
      prompt: 'Put the steps for flagging outliers with the $1.5 \\cdot \\text{IQR}$ rule in order.',
      lines: [
        'Sort the data.',
        'Find the median, then $Q_1$ and $Q_3$ as the medians of the lower and upper halves.',
        'Compute $\\text{IQR} = Q_3 - Q_1$.',
        'Compute the fences $Q_1 - 1.5\\,\\text{IQR}$ and $Q_3 + 1.5\\,\\text{IQR}$.',
        'Flag every value below the lower fence or above the upper fence, then investigate each one.',
      ],
      distractors: ['Delete the largest and smallest values before computing the quartiles.'],
      explanation: 'Quartiles need sorted data; the IQR needs the quartiles; the fences need the IQR. The final step is "investigate", not "delete": an outlier may be a logging glitch — or the hitch you are hunting. The distractor would bias the quartiles and is not part of the rule.',
    },
  ],
  takeaways: [
    'Center: mean $\\bar{x} = \\frac{1}{n}\\sum x_i$ (balance point, minimizes $\\sum (x_i - c)^2$), median (middle value, minimizes $\\sum |x_i - c|$), mode (most frequent). Weighted mean $\\frac{\\sum w_i x_i}{\\sum w_i}$ for groups of different sizes.',
    'The mean, SD and range have breakdown point $0$: one hitch moves them arbitrarily. The median, IQR and trimmed means are robust. Robust is not automatically better — the outlier may be the story.',
    'Spread: $s^2 = \\frac{1}{n-1}\\sum (x_i - \\bar{x})^2$, $s = \\sqrt{s^2}$. Dividing by $n - 1$ compensates for measuring deviations from $\\bar{x}$ (proved in Unit 7). Compute with Welford\'s algorithm, not $\\sum x^2 - n\\bar{x}^2$.',
    'Five-number summary (min, $Q_1$, median, $Q_3$, max) and boxplots; outliers lie beyond $Q_1 - 1.5\\,\\text{IQR}$ or $Q_3 + 1.5\\,\\text{IQR}$. Quartile conventions differ between tools.',
    '$z = (x - \\bar{x})/s$ compares values across scales. For $y = ax + b$: $\\bar{y} = a\\bar{x} + b$, $s_y = |a|s_x$.',
    'Percentiles (p95, p99) describe the tail that players feel. Averages do not commute with nonlinear transforms: average frame times, then convert to FPS.',
  ],
  reading: [
    {
      title: 'OpenStax — Introductory Statistics',
      url: 'https://openstax.org/details/books/introductory-statistics',
      source: 'openstax',
      note: 'Chapter 2 (Descriptive Statistics) covers measures of center and spread, quartiles, boxplots and z-scores with many practice problems.',
    },
    {
      title: 'Wikipedia — Algorithms for calculating variance',
      url: 'https://en.wikipedia.org/wiki/Algorithms_for_calculating_variance',
      source: 'wikipedia',
      note: 'Why the naive one-pass formula fails in floating point, and Welford\'s algorithm with its parallel (merge) version used in real telemetry pipelines.',
    },
    {
      title: 'Wikipedia — Quartile',
      url: 'https://en.wikipedia.org/wiki/Quartile',
      source: 'wikipedia',
      note: 'Compares the common quartile conventions on worked examples, so you can tell why two tools disagree.',
    },
    {
      title: 'Khan Academy — Statistics and probability',
      url: 'https://www.khanacademy.org/math/statistics-probability',
      source: 'khan',
      note: 'The "Summarizing quantitative data" unit has short videos and drills on box plots, IQR, outliers and standard deviation.',
    },
  ],
};
