import type { Lesson } from '../../types';

// Durations (minutes) of 60 ranked matches; a surrender vote opens at 15 minutes.
const durations = [
  12, 12, 14, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18,
  18, 18, 19, 20, 23, 27, 27, 28, 28, 29, 30, 30, 30, 30, 31, 31, 31, 32, 32, 32,
  33, 33, 33, 33, 33, 33, 34, 34, 34, 35, 35, 36, 36, 36, 36, 37, 37, 38, 39, 41,
];
const counts = new Map<number, number>();
for (const d of durations) counts.set(d, (counts.get(d) ?? 0) + 1);
// Density-scale histogram height at x for bins of width w starting at 10:
// (number of values in x's bin) / (n * w).
const binCount = [...counts]
  .map(([v, k]) => `${k}*(1 - min(1, abs(floor((${v} - 10)/w) - floor((x - 10)/w))))`)
  .join(' + ');
const density = `(${binCount})/(60*w)`;

// Hours played vs. skill rating for 24 players (the last one is a smurf account).
const players: [number, number][] = [
  [6, 1060], [47, 1320], [50, 1330], [76, 1450], [79, 1430], [80, 1520], [96, 1430], [104, 1590],
  [107, 1510], [107, 1520], [143, 1550], [170, 1670], [184, 1690], [190, 1720], [219, 1720], [270, 1820],
  [270, 1910], [344, 1910], [359, 1870], [370, 1960], [371, 1900], [379, 1950], [379, 1950], [12, 1950],
];

export const lesson: Lesson = {
  id: 'stat-visualizing',
  title: 'Visualizing Data',
  summary: 'Graphs that show distributions honestly: bar charts for categories versus histograms for measurements (and how the bin width changes the story), dot plots and stem-and-leaf plots, the shapes of distributions and what skew does to the mean and median, side-by-side boxplots and scatterplots for comparisons — and the classic ways graphs mislead: truncated axes, area distortion and cherry-picked windows.',
  minutes: 20,
  objectives: [
    'Choose a bar chart for a categorical variable and a histogram for a quantitative one, and explain the difference',
    'Build frequency, relative-frequency and density histograms, and explain how the bin width changes what you see',
    'Read and draw dot plots and stem-and-leaf plots for small data sets',
    'Describe a distribution\'s shape (symmetric, skewed, bimodal) and predict how the mean and median relate',
    'Compare groups with side-by-side boxplots and describe a scatterplot by direction, form, strength and unusual points',
    'Spot truncated axes, area distortion and cherry-picked windows, and quantify distortion with the lie factor',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Why graph data? Distributions and bar charts',
      blocks: [
        {
          type: 'p',
          text: 'Summaries compress; graphs reveal. In 1973 the statistician Francis Anscombe published four small data sets that share the same means, the same variances, the same correlation and the same best-fit line — and look nothing alike when plotted: one is a clean linear cloud, one a perfect curve, one a line with a single outlier, one a vertical stack with one far point. **Always plot your data before you summarize it.**',
        },
        {
          type: 'p',
          text: 'What a graph of one variable shows is its **distribution**: which values occur and how often. For a categorical variable that means a count (or proportion) per category, from a **frequency table**. For a quantitative variable it means how the values spread along the number line.',
        },
        {
          type: 'figure',
          svg: '<svg viewBox="0 0 520 270" xmlns="http://www.w3.org/2000/svg"><text x="130" y="18" text-anchor="middle" font-size="13" font-weight="600">Bar chart: crash cause</text><line x1="40" y1="200" x2="245" y2="200" stroke="currentColor" stroke-width="1.2"/><line x1="40" y1="200" x2="40" y2="40" stroke="currentColor" stroke-width="1.2"/><text x="35" y="204.0" font-size="10" text-anchor="end">0</text><line x1="37" y1="200.0" x2="40" y2="200.0" stroke="currentColor" stroke-width="1"/><text x="35" y="170.7" font-size="10" text-anchor="end">100</text><line x1="37" y1="166.7" x2="40" y2="166.7" stroke="currentColor" stroke-width="1"/><text x="35" y="137.3" font-size="10" text-anchor="end">200</text><line x1="37" y1="133.3" x2="40" y2="133.3" stroke="currentColor" stroke-width="1"/><text x="35" y="104.0" font-size="10" text-anchor="end">300</text><line x1="37" y1="100.0" x2="40" y2="100.0" stroke="currentColor" stroke-width="1"/><text x="35" y="70.7" font-size="10" text-anchor="end">400</text><line x1="37" y1="66.7" x2="40" y2="66.7" stroke="currentColor" stroke-width="1"/><rect x="48" y="62.7" width="30" height="137.3" class="f-purple" fill-opacity="0.75"/><text x="63" y="213" font-size="9.5" text-anchor="end" transform="rotate(-35 63 213)">GPU driver</text><rect x="88" y="110.7" width="30" height="89.3" class="f-purple" fill-opacity="0.75"/><text x="103" y="213" font-size="9.5" text-anchor="end" transform="rotate(-35 103 213)">out of memory</text><rect x="128" y="149.7" width="30" height="50.3" class="f-purple" fill-opacity="0.75"/><text x="143" y="213" font-size="9.5" text-anchor="end" transform="rotate(-35 143 213)">shader</text><rect x="168" y="167.7" width="30" height="32.3" class="f-purple" fill-opacity="0.75"/><text x="183" y="213" font-size="9.5" text-anchor="end" transform="rotate(-35 183 213)">network</text><rect x="208" y="176.0" width="30" height="24.0" class="f-purple" fill-opacity="0.75"/><text x="223" y="213" font-size="9.5" text-anchor="end" transform="rotate(-35 223 213)">other</text><text x="130" y="262" text-anchor="middle" font-size="11" class="t-gray">categories: gaps, any order</text><text x="402" y="18" text-anchor="middle" font-size="13" font-weight="600">Histogram: session length</text><line x1="300" y1="200" x2="505" y2="200" stroke="currentColor" stroke-width="1.2"/><line x1="300" y1="200" x2="300" y2="40" stroke="currentColor" stroke-width="1.2"/><text x="295" y="204.0" font-size="10" text-anchor="end">0</text><line x1="297" y1="200.0" x2="300" y2="200.0" stroke="currentColor" stroke-width="1"/><text x="295" y="154.0" font-size="10" text-anchor="end">10</text><line x1="297" y1="150.0" x2="300" y2="150.0" stroke="currentColor" stroke-width="1"/><text x="295" y="104.0" font-size="10" text-anchor="end">20</text><line x1="297" y1="100.0" x2="300" y2="100.0" stroke="currentColor" stroke-width="1"/><text x="295" y="54.0" font-size="10" text-anchor="end">30</text><line x1="297" y1="50.0" x2="300" y2="50.0" stroke="currentColor" stroke-width="1"/><rect x="300.0" y="155.0" width="20.0" height="45.0" class="f-blue s-blue" fill-opacity="0.35" stroke-width="1"/><rect x="320.0" y="95.0" width="20.0" height="105.0" class="f-blue s-blue" fill-opacity="0.35" stroke-width="1"/><rect x="340.0" y="70.0" width="20.0" height="130.0" class="f-blue s-blue" fill-opacity="0.35" stroke-width="1"/><rect x="360.0" y="110.0" width="20.0" height="90.0" class="f-blue s-blue" fill-opacity="0.35" stroke-width="1"/><rect x="380.0" y="145.0" width="20.0" height="55.0" class="f-blue s-blue" fill-opacity="0.35" stroke-width="1"/><rect x="400.0" y="165.0" width="20.0" height="35.0" class="f-blue s-blue" fill-opacity="0.35" stroke-width="1"/><rect x="420.0" y="180.0" width="20.0" height="20.0" class="f-blue s-blue" fill-opacity="0.35" stroke-width="1"/><rect x="440.0" y="190.0" width="20.0" height="10.0" class="f-blue s-blue" fill-opacity="0.35" stroke-width="1"/><rect x="460.0" y="195.0" width="20.0" height="5.0" class="f-blue s-blue" fill-opacity="0.35" stroke-width="1"/><rect x="480.0" y="195.0" width="20.0" height="5.0" class="f-blue s-blue" fill-opacity="0.35" stroke-width="1"/><text x="300.0" y="214" font-size="10" text-anchor="middle">0</text><text x="340.0" y="214" font-size="10" text-anchor="middle">20</text><text x="380.0" y="214" font-size="10" text-anchor="middle">40</text><text x="420.0" y="214" font-size="10" text-anchor="middle">60</text><text x="460.0" y="214" font-size="10" text-anchor="middle">80</text><text x="500.0" y="214" font-size="10" text-anchor="middle">100</text><text x="505" y="228" font-size="10" text-anchor="end">minutes</text><text x="402" y="262" text-anchor="middle" font-size="11" class="t-gray">number line: adjacent bins, fixed order</text></svg>', // fig:barhist
          alt: 'Left: a bar chart titled crash cause with separated purple bars for GPU driver (412), out of memory (268), shader (151), network (97) and other (72), sorted from tallest to shortest; caption says categories, gaps, any order. Right: a histogram titled session length with adjacent blue bars over a number line from 0 to 100 minutes, peaking at 20 to 30 minutes with a long tail to the right; caption says number line, adjacent bins, fixed order.',
          caption: 'Same look, different meaning. A [[stat-bar-chart|bar chart]] (left) has one bar per category; the order is up to you (sorting by size makes a *Pareto chart*: fix the GPU driver crashes first). A [[stat-histogram|histogram]] (right) has bars on a number line; they touch because the bins tile an interval, and their order is fixed.',
          maxWidth: 520,
        },
        {
          type: 'list',
          items: [
            'In a bar chart, the **height** of each bar is the count, so the vertical axis must start at $0$ — otherwise the heights lie (more on this at the end).',
            'A **pie chart** shows the same proportions as angles, which people compare far less accurately than lengths. Prefer bars, especially for more than three categories.',
            'Never draw a histogram of a categorical variable or a bar chart with numeric "categories" like $17.2, 17.3, \\dots$ — if the variable is a measurement, bin it.',
          ],
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why plot first?',
          text: 'Every summary from the last lesson answers a narrow question and silently assumes the data are "nice". The mean of a two-peaked distribution can sit in a valley where almost no data lie; a standard deviation can be inflated by one hitch; a correlation can be produced by a single outlier. A plot shows the shape, the gaps, the clusters and the oddities that tell you which summaries are meaningful — and catches logging bugs (a spike of sessions lasting exactly $0$ seconds) before they reach a report.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'mcq',
      prompt: 'You want to show which GPU vendor (NVIDIA, AMD, Intel) the crashing machines in last week\'s crash reports had. Which display is appropriate?',
      options: [
        { text: 'A histogram of vendor', why: 'Histograms bin a number line. Vendor is categorical, so there is no number line and no meaningful bin width.' },
        { text: 'A bar chart of the count (or percentage) of crashes per vendor', correct: true, why: 'One bar per category, heights from zero. Comparing against each vendor\'s share of **all** players (not just crashing ones) would make it even more informative.' },
        { text: 'A scatterplot of vendor against crash count', why: 'Scatterplots relate two quantitative variables measured on the same units. Here there is one categorical variable.' },
        { text: 'A boxplot of vendor', why: 'Boxplots summarize a quantitative variable (quartiles need ordered numbers). A vendor name has no quartiles.' },
      ],
      explanation: 'Vendor is a categorical variable, so its distribution is a list of counts per category — a bar chart. Histograms, boxplots and scatterplots all need quantitative variables. One more thought for real analysis: $50\\%$ of crashes on one vendor means little until you know that vendor\'s share of the player base.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Histograms and the bin-width choice',
      blocks: [
        {
          type: 'p',
          text: 'To draw a histogram, cut an interval covering the data into **bins** of equal width, count the values in each bin, and draw adjacent bars. Use a consistent endpoint rule — here each bin $[a, b)$ includes its left end and excludes its right — so every value lands in exactly one bin.',
        },
        {
          type: 'p',
          text: 'Our data: the durations of $60$ ranked matches in a game where a surrender vote opens at $15$ minutes. On the vertical axis we can put the **count**, the **relative frequency** (count$/n$), or the **density** (relative frequency $\\div$ bin width).',
        },
        {
          type: 'derivation',
          title: 'A density-scale frequency table (bin width $5$ minutes)',
          steps: [
            { tex: '\\begin{array}{c|cccccccc} \\text{bin} & [10,15) & [15,20) & [20,25) & [25,30) & [30,35) & [35,40) & [40,45) \\\\ \\hline \\text{count} & 5 & 18 & 2 & 5 & 19 & 10 & 1 \\end{array}', why: 'Count the $60$ durations bin by bin. The counts add to $60$.' },
            { tex: '\\text{relative frequency of } [15, 20) = \\frac{18}{60} = 0.30', why: 'Divide by $n$: $30\\%$ of matches lasted from $15$ up to $20$ minutes.' },
            { tex: '\\text{density of } [15, 20) = \\frac{0.30}{5} = 0.06 \\text{ per minute}', why: 'Divide by the bin width. Now the bar\'s **area** ($0.06 \\times 5$) equals the proportion $0.30$.' },
            { tex: '\\sum_{\\text{bins}} \\text{density} \\times \\text{width} = \\sum \\frac{\\text{count}}{60} = 1', why: 'The areas of all bars add to $1$, whatever the bin width.' },
          ],
          result: 'On the density scale, **area = proportion**. That is what lets histograms with different bin widths share an axis — and it is exactly the property of the probability density functions you will meet in Unit 4, where $P(a \\le X \\le b)$ is an area under a curve.',
        },
        {
          type: 'graph',
          x: [8, 56],
          y: [0, 0.11],
          xStep: 4,
          yStep: 0.02,
          height: 280,
          riemann: { expr: density, from: 10, to: '10 + w*ceil(40/w)', n: 'ceil(40/w)', method: 'mid', color: 'blue' },
          functions: [{ expr: '0', color: 'gray', domain: [10, 50] }],
          sliders: [{ name: 'w', min: 1, max: 20, step: 1, value: 3, label: 'bin width $w$ (minutes)' }],
          readouts: [
            { label: 'number of bins $=$', expr: 'ceil(40/w)', digits: 0 },
            { label: 'total area $=$', expr: '1', digits: 0 },
          ],
          caption: 'Density histogram of the $60$ match durations. At $w = 3$ to $5$ you see two clusters: early surrenders around $15$–$20$ minutes and full games around $30$–$37$. At $w = 1$ the picture is spiky noise; at $w = 15$ it looks like one lopsided hump, and at $w = 20$ like two equal blocks. Same data, four stories.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Choosing the bin width',
          text: 'There is no single right answer, so try several. Rules of thumb exist — **Sturges** uses about $1 + \\log_2 n$ bins; the **Freedman–Diaconis** rule uses width $2\\,\\text{IQR}/n^{1/3}$, which adapts to spread and resists outliers. For these data, Freedman–Diaconis gives $2 \\cdot 16/60^{1/3} \\approx 8$ minutes, a bit coarse for spotting the two clusters. Rules are starting points; your eyes and your question decide.',
        },
        {
          type: 'code',
          title: 'text_histogram.cpp',
          runnable: true,
          code: `#include <cstdio>
#include <string>
#include <vector>

// Text histogram: count values in bins [start + k*width, start + (k+1)*width).
void histogram(const std::vector<int>& data, int start, int width, int bins) {
    std::vector<int> count(bins, 0);
    for (int x : data) {
        int k = (x - start) / width;              // which bin? (x >= start here)
        if (k >= 0 && k < bins) ++count[k];
    }
    for (int k = 0; k < bins; ++k) {
        int lo = start + k * width;
        std::printf("%2d-%2d | %s\\n", lo, lo + width - 1, std::string(count[k], '#').c_str());
    }
}

int main() {
    // Durations (minutes) of 60 ranked matches; a surrender vote opens at 15 minutes.
    const std::vector<int> minutes = {
        12, 12, 14, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18,
        18, 18, 19, 20, 23, 27, 27, 28, 28, 29, 30, 30, 30, 30, 31, 31, 31, 32, 32, 32,
        33, 33, 33, 33, 33, 33, 34, 34, 34, 35, 35, 36, 36, 36, 36, 37, 37, 38, 39, 41};
    std::printf("bin width 3:\\n");
    histogram(minutes, 10, 3, 11);
    std::printf("bin width 15:\\n");
    histogram(minutes, 10, 15, 3);
}`,
          output: `bin width 3:
10-12 | ##
13-15 | #######
16-18 | #############
19-21 | ##
22-24 | #
25-27 | ##
28-30 | #######
31-33 | ############
34-36 | #########
37-39 | ####
40-42 | #
bin width 15:
10-24 | #########################
25-39 | ##################################
40-54 | #`,
          annotations: [
            { lines: 9, text: 'Integer division finds the bin index. (For negative offsets C++ truncates toward zero, so use `std::floor` on doubles if data can lie left of `start`.)' },
            { lines: '24-27', text: 'Same data, two bin widths: width $3$ shows the two clusters; width $15$ merges them into what looks like a single skewed hump.' },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'numeric',
      prompt: 'A density-scale histogram of $80$ session lengths uses bins $5$ minutes wide. The bin $[20, 25)$ contains $12$ sessions. How tall is its bar (in "per minute")? Give $2$ decimal places or an exact fraction.',
      hint: 'Density $=$ (count$/n$) $\\div$ bin width.',
      label: 'height $=$',
      answer: '(12/80)/5',
      answerTex: '0.03',
      explanation: 'Relative frequency: $12/80 = 0.15$. Density: $0.15/5 = 0.03$ per minute. Check: the bar\'s area is $0.03 \\times 5 = 0.15$, the proportion of sessions in the bin. On a count scale the bar would be $12$ tall; on a relative-frequency scale $0.15$.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Dot plots and stem-and-leaf plots',
      blocks: [
        {
          type: 'p',
          text: 'For small data sets ($n$ up to about $50$) you can keep every value visible. A [[stat-dot-plot|dot plot]] puts one dot per value above a number line, stacking repeats — you saw one for the frame times. A [[stat-stem-and-leaf|stem-and-leaf plot]] does it in text: split each value into a **stem** (the leading digits) and a **leaf** (the last digit), write the stems in a column, and list each value\'s leaf beside its stem in order.',
        },
        {
          type: 'figure',
          svg: '<svg viewBox="0 0 520 230" xmlns="http://www.w3.org/2000/svg"><text x="20" y="22" font-size="13" font-weight="600">Ping (ms), n = 20</text><text x="60" y="52" font-size="17" text-anchor="end" font-family="monospace">2</text><text x="80" y="52" font-size="17" font-family="monospace" class="t-blue">3 5 7 8 8 9</text><text x="60" y="78" font-size="17" text-anchor="end" font-family="monospace">3</text><text x="80" y="78" font-size="17" font-family="monospace" class="t-blue">0 1 1 2 4 4 6 9</text><text x="60" y="104" font-size="17" text-anchor="end" font-family="monospace">4</text><text x="80" y="104" font-size="17" font-family="monospace" class="t-blue">2 5 7</text><text x="60" y="130" font-size="17" text-anchor="end" font-family="monospace">5</text><text x="80" y="130" font-size="17" font-family="monospace" class="t-blue">1 3</text><text x="60" y="156" font-size="17" text-anchor="end" font-family="monospace">6</text><text x="80" y="156" font-size="17" font-family="monospace" class="t-blue"></text><text x="60" y="182" font-size="17" text-anchor="end" font-family="monospace">7</text><text x="80" y="182" font-size="17" font-family="monospace" class="t-blue">8</text><line x1="68" y1="34" x2="68" y2="190" stroke="currentColor" stroke-width="1.5"/><text x="20" y="214" font-size="12" class="t-gray">key: 3 | 1 means 31 ms</text><text x="300" y="60" font-size="12">stem = tens digit</text><text x="300" y="80" font-size="12" class="t-blue">leaf = units digit</text><text x="300" y="112" font-size="12">turned sideways, the leaves</text><text x="300" y="128" font-size="12">form a histogram with bins</text><text x="300" y="144" font-size="12">of width 10 ms — and every</text><text x="300" y="160" font-size="12">value is still readable</text></svg>', // fig:stem
          alt: 'Stem-and-leaf plot titled Ping (ms), n = 20. Stem 2: leaves 3 5 7 8 8 9. Stem 3: leaves 0 1 1 2 4 4 6 9. Stem 4: leaves 2 5 7. Stem 5: leaves 1 3. Stem 6: no leaves. Stem 7: leaf 8. Key: 3 | 1 means 31 ms. A note explains that the stem is the tens digit, the leaf the units digit, and that turned sideways the leaves form a histogram with bins of width 10 ms.',
          caption: 'Twenty ping measurements. Rotate the page: the leaf rows are histogram bars of width $10$ ms. Right-skewed, centered in the $30$s, with a gap and a lone value at $78$ ms worth investigating.',
          maxWidth: 480,
        },
        {
          type: 'derivation',
          title: 'Reading values and the median off the plot',
          steps: [
            { tex: '2 \\mid 3\\ 5\\ 7\\ 8\\ 8\\ 9 \\ \\implies\\ 23, 25, 27, 28, 28, 29', why: 'Each leaf is one value: stem $2$ (tens) and leaf $3$ (units) is $23$ ms. The key line removes any doubt about units.' },
            { tex: 'n = 6 + 8 + 3 + 2 + 0 + 1 = 20', why: 'Count the leaves. Empty stems (here $6$) stay in the plot: they show the gap.' },
            { tex: '\\text{median} = \\tfrac{1}{2}\\left(x_{(10)} + x_{(11)}\\right)', why: 'With $n = 20$ (even), average the $10$th and $11$th values. The leaves are already sorted, so just count.' },
          ],
          result: 'Counting through stem $2$ (six values) into stem $3$: the $10$th value is $32$ and the $11$th is $34$, so the median is $33$ ms — you will do this yourself next.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'When stems are too coarse',
          text: 'If most data share one or two stems, **split the stems**: give each stem two lines, leaves $0$–$4$ on the first and $5$–$9$ on the second. That halves the bin width — the same choice as in a histogram. For two groups, a **back-to-back** stem-and-leaf plot shares the stems, with one group\'s leaves to the left and the other\'s to the right.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'numeric',
      prompt: 'Use the stem-and-leaf plot of the $20$ ping measurements (key: $3 \\mid 1$ means $31$ ms). What is the median ping?',
      figure: {
        type: 'figure',
        svg: '<svg viewBox="0 0 520 230" xmlns="http://www.w3.org/2000/svg"><text x="20" y="22" font-size="13" font-weight="600">Ping (ms), n = 20</text><text x="60" y="52" font-size="17" text-anchor="end" font-family="monospace">2</text><text x="80" y="52" font-size="17" font-family="monospace" class="t-blue">3 5 7 8 8 9</text><text x="60" y="78" font-size="17" text-anchor="end" font-family="monospace">3</text><text x="80" y="78" font-size="17" font-family="monospace" class="t-blue">0 1 1 2 4 4 6 9</text><text x="60" y="104" font-size="17" text-anchor="end" font-family="monospace">4</text><text x="80" y="104" font-size="17" font-family="monospace" class="t-blue">2 5 7</text><text x="60" y="130" font-size="17" text-anchor="end" font-family="monospace">5</text><text x="80" y="130" font-size="17" font-family="monospace" class="t-blue">1 3</text><text x="60" y="156" font-size="17" text-anchor="end" font-family="monospace">6</text><text x="80" y="156" font-size="17" font-family="monospace" class="t-blue"></text><text x="60" y="182" font-size="17" text-anchor="end" font-family="monospace">7</text><text x="80" y="182" font-size="17" font-family="monospace" class="t-blue">8</text><line x1="68" y1="34" x2="68" y2="190" stroke="currentColor" stroke-width="1.5"/><text x="20" y="214" font-size="12" class="t-gray">key: 3 | 1 means 31 ms</text><text x="300" y="60" font-size="12">stem = tens digit</text><text x="300" y="80" font-size="12" class="t-blue">leaf = units digit</text><text x="300" y="112" font-size="12">turned sideways, the leaves</text><text x="300" y="128" font-size="12">form a histogram with bins</text><text x="300" y="144" font-size="12">of width 10 ms — and every</text><text x="300" y="160" font-size="12">value is still readable</text></svg>', // fig:stem
        alt: 'Stem-and-leaf plot. Stem 2: 3 5 7 8 8 9. Stem 3: 0 1 1 2 4 4 6 9. Stem 4: 2 5 7. Stem 5: 1 3. Stem 6: none. Stem 7: 8. Key: 3 | 1 means 31 ms.',
        maxWidth: 420,
      },
      hint: 'There are $6$ values in the $20$s. Which values are the $10$th and $11$th overall?',
      label: 'median $=$',
      unit: 'ms',
      answer: '33',
      explanation: 'Values in order: $23, 25, 27, 28, 28, 29$ (positions $1$–$6$), then $30, 31, 31, 32$ (positions $7$–$10$), $34, 34, \\dots$ (position $11$ on). The median is $\\frac{32 + 34}{2} = 33$ ms. The mean is pulled up by the $78$ ms value: the values sum to $743$, so $\\bar{x} = 37.15$ ms — above the median, as you expect for right-skewed data.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'Shapes of distributions',
      blocks: [
        {
          type: 'p',
          text: 'Describe a distribution in four parts: **shape**, **center**, **spread**, and **unusual features** (outliers, gaps, clusters). Shape vocabulary:',
        },
        {
          type: 'figure',
          svg: '<svg viewBox="0 0 520 300" xmlns="http://www.w3.org/2000/svg"><text x="130.0" y="22" text-anchor="middle" font-size="12.5" font-weight="600">Symmetric</text><polyline points="15.0,119.8 16.2,119.8 17.3,119.8 18.4,119.7 19.6,119.7 20.7,119.7 21.9,119.6 23.1,119.6 24.2,119.6 25.3,119.5 26.5,119.4 27.6,119.4 28.8,119.3 30.0,119.2 31.1,119.1 32.2,119.0 33.4,118.9 34.5,118.8 35.7,118.7 36.9,118.6 38.0,118.4 39.1,118.3 40.3,118.1 41.5,117.9 42.6,117.7 43.8,117.4 44.9,117.2 46.0,116.9 47.2,116.7 48.3,116.4 49.5,116.0 50.6,115.7 51.8,115.3 53.0,114.9 54.1,114.4 55.3,114.0 56.4,113.5 57.5,113.0 58.7,112.4 59.9,111.8 61.0,111.2 62.2,110.5 63.3,109.8 64.4,109.1 65.6,108.3 66.8,107.5 67.9,106.6 69.1,105.7 70.2,104.7 71.4,103.7 72.5,102.7 73.7,101.6 74.8,100.5 76.0,99.3 77.1,98.1 78.2,96.9 79.4,95.6 80.6,94.2 81.7,92.8 82.8,91.4 84.0,90.0 85.1,88.5 86.3,87.0 87.5,85.4 88.6,83.8 89.8,82.2 90.9,80.6 92.1,78.9 93.2,77.3 94.4,75.6 95.5,73.9 96.6,72.2 97.8,70.5 99.0,68.8 100.1,67.1 101.2,65.4 102.4,63.8 103.5,62.1 104.7,60.5 105.9,58.9 107.0,57.4 108.1,55.9 109.3,54.4 110.4,53.0 111.6,51.6 112.8,50.3 113.9,49.0 115.0,47.9 116.2,46.8 117.4,45.7 118.5,44.8 119.7,43.9 120.8,43.1 121.9,42.4 123.1,41.7 124.3,41.2 125.4,40.8 126.5,40.4 127.7,40.2 128.8,40.0 130.0,40.0 131.2,40.0 132.3,40.2 133.4,40.4 134.6,40.8 135.8,41.2 136.9,41.7 138.1,42.4 139.2,43.1 140.4,43.9 141.5,44.8 142.6,45.7 143.8,46.8 145.0,47.9 146.1,49.0 147.3,50.3 148.4,51.6 149.5,53.0 150.7,54.4 151.8,55.9 153.0,57.4 154.2,58.9 155.3,60.5 156.4,62.1 157.6,63.8 158.8,65.4 159.9,67.1 161.1,68.8 162.2,70.5 163.3,72.2 164.5,73.9 165.7,75.6 166.8,77.3 168.0,78.9 169.1,80.6 170.2,82.2 171.4,83.8 172.5,85.4 173.7,87.0 174.9,88.5 176.0,90.0 177.1,91.4 178.3,92.8 179.4,94.2 180.6,95.6 181.8,96.9 182.9,98.1 184.0,99.3 185.2,100.5 186.3,101.6 187.5,102.7 188.7,103.7 189.8,104.7 191.0,105.7 192.1,106.6 193.2,107.5 194.4,108.3 195.6,109.1 196.7,109.8 197.9,110.5 199.0,111.2 200.1,111.8 201.3,112.4 202.5,113.0 203.6,113.5 204.8,114.0 205.9,114.4 207.0,114.9 208.2,115.3 209.3,115.7 210.5,116.0 211.7,116.4 212.8,116.7 213.9,116.9 215.1,117.2 216.2,117.4 217.4,117.7 218.6,117.9 219.7,118.1 220.8,118.3 222.0,118.4 223.2,118.6 224.3,118.7 225.5,118.8 226.6,118.9 227.7,119.0 228.9,119.1 230.0,119.2 231.2,119.3 232.4,119.4 233.5,119.4 234.6,119.5 235.8,119.6 236.9,119.6 238.1,119.6 239.2,119.7 240.4,119.7 241.5,119.7 242.7,119.8 243.8,119.8 245.0,119.8" fill="none" stroke="currentColor" stroke-width="1.8"/><line x1="15" y1="120" x2="245" y2="120" stroke="currentColor" stroke-width="1"/><line x1="130.0" y1="36" x2="130.0" y2="120" class="s-blue" stroke-width="1.6" stroke-dasharray="4 3"/><line x1="130.0" y1="36" x2="130.0" y2="120" class="s-orange" stroke-width="1.6" stroke-dasharray="4 3"/><text x="390.0" y="22" text-anchor="middle" font-size="12.5" font-weight="600">Right-skewed</text><polyline points="275.0,120.0 276.1,110.6 277.3,102.1 278.4,94.3 279.6,87.3 280.8,80.9 281.9,75.2 283.1,70.0 284.2,65.4 285.4,61.3 286.5,57.6 287.6,54.4 288.8,51.6 289.9,49.1 291.1,47.0 292.2,45.3 293.4,43.8 294.6,42.6 295.7,41.6 296.9,40.9 298.0,40.4 299.1,40.1 300.3,40.0 301.4,40.0 302.6,40.2 303.8,40.6 304.9,41.0 306.1,41.6 307.2,42.3 308.4,43.0 309.5,43.9 310.6,44.8 311.8,45.8 312.9,46.9 314.1,48.0 315.2,49.1 316.4,50.3 317.6,51.5 318.7,52.7 319.9,54.0 321.0,55.3 322.1,56.6 323.3,57.9 324.4,59.2 325.6,60.5 326.8,61.9 327.9,63.2 329.1,64.5 330.2,65.8 331.4,67.1 332.5,68.4 333.6,69.7 334.8,71.0 335.9,72.2 337.1,73.5 338.2,74.7 339.4,75.9 340.6,77.1 341.7,78.3 342.9,79.4 344.0,80.5 345.1,81.6 346.3,82.7 347.4,83.8 348.6,84.8 349.8,85.9 350.9,86.9 352.1,87.8 353.2,88.8 354.4,89.7 355.5,90.6 356.6,91.5 357.8,92.4 358.9,93.3 360.1,94.1 361.2,94.9 362.4,95.7 363.6,96.4 364.7,97.2 365.9,97.9 367.0,98.6 368.1,99.3 369.3,100.0 370.4,100.6 371.6,101.2 372.8,101.9 373.9,102.4 375.1,103.0 376.2,103.6 377.4,104.1 378.5,104.7 379.6,105.2 380.8,105.7 381.9,106.1 383.1,106.6 384.2,107.1 385.4,107.5 386.6,107.9 387.7,108.3 388.9,108.7 390.0,109.1 391.1,109.5 392.3,109.9 393.4,110.2 394.6,110.6 395.8,110.9 396.9,111.2 398.1,111.5 399.2,111.8 400.4,112.1 401.5,112.4 402.6,112.6 403.8,112.9 404.9,113.2 406.1,113.4 407.2,113.6 408.4,113.9 409.5,114.1 410.7,114.3 411.9,114.5 413.0,114.7 414.1,114.9 415.3,115.1 416.4,115.2 417.6,115.4 418.8,115.6 419.9,115.7 421.1,115.9 422.2,116.1 423.4,116.2 424.5,116.3 425.6,116.5 426.8,116.6 428.0,116.7 429.1,116.8 430.2,117.0 431.4,117.1 432.6,117.2 433.7,117.3 434.9,117.4 436.0,117.5 437.1,117.6 438.3,117.7 439.4,117.8 440.6,117.8 441.8,117.9 442.9,118.0 444.0,118.1 445.2,118.1 446.4,118.2 447.5,118.3 448.6,118.3 449.8,118.4 451.0,118.5 452.1,118.5 453.2,118.6 454.4,118.6 455.6,118.7 456.7,118.7 457.9,118.8 459.0,118.8 460.1,118.9 461.3,118.9 462.4,119.0 463.6,119.0 464.8,119.0 465.9,119.1 467.0,119.1 468.2,119.1 469.4,119.2 470.5,119.2 471.6,119.2 472.8,119.3 473.9,119.3 475.1,119.3 476.2,119.3 477.4,119.4 478.6,119.4 479.7,119.4 480.9,119.4 482.0,119.5 483.1,119.5 484.3,119.5 485.4,119.5 486.6,119.5 487.8,119.6 488.9,119.6 490.0,119.6 491.2,119.6 492.4,119.6 493.5,119.6 494.6,119.7 495.8,119.7 497.0,119.7 498.1,119.7 499.2,119.7 500.4,119.7 501.5,119.7 502.7,119.7 503.9,119.7 505.0,119.8" fill="none" stroke="currentColor" stroke-width="1.8"/><line x1="275" y1="120" x2="505" y2="120" stroke="currentColor" stroke-width="1"/><line x1="317.9" y1="36" x2="317.9" y2="120" class="s-blue" stroke-width="1.6" stroke-dasharray="4 3"/><line x1="326.1" y1="36" x2="326.1" y2="120" class="s-orange" stroke-width="1.6" stroke-dasharray="4 3"/><text x="130.0" y="157" text-anchor="middle" font-size="12.5" font-weight="600">Left-skewed</text><polyline points="15.0,254.8 16.1,254.7 17.3,254.7 18.4,254.7 19.6,254.7 20.8,254.7 21.9,254.7 23.1,254.7 24.2,254.7 25.4,254.7 26.5,254.6 27.6,254.6 28.8,254.6 30.0,254.6 31.1,254.6 32.2,254.6 33.4,254.5 34.5,254.5 35.7,254.5 36.9,254.5 38.0,254.5 39.1,254.4 40.3,254.4 41.5,254.4 42.6,254.4 43.8,254.3 44.9,254.3 46.0,254.3 47.2,254.3 48.3,254.2 49.5,254.2 50.6,254.2 51.8,254.1 53.0,254.1 54.1,254.1 55.2,254.0 56.4,254.0 57.5,254.0 58.7,253.9 59.8,253.9 61.0,253.8 62.1,253.8 63.3,253.7 64.4,253.7 65.6,253.6 66.8,253.6 67.9,253.5 69.1,253.5 70.2,253.4 71.3,253.3 72.5,253.3 73.7,253.2 74.8,253.1 75.9,253.1 77.1,253.0 78.2,252.9 79.4,252.8 80.5,252.8 81.7,252.7 82.8,252.6 84.0,252.5 85.1,252.4 86.3,252.3 87.5,252.2 88.6,252.1 89.7,252.0 90.9,251.8 92.1,251.7 93.2,251.6 94.3,251.5 95.5,251.3 96.6,251.2 97.8,251.1 99.0,250.9 100.1,250.7 101.2,250.6 102.4,250.4 103.5,250.2 104.7,250.1 105.9,249.9 107.0,249.7 108.2,249.5 109.3,249.3 110.4,249.1 111.6,248.9 112.8,248.6 113.9,248.4 115.0,248.2 116.2,247.9 117.4,247.6 118.5,247.4 119.6,247.1 120.8,246.8 121.9,246.5 123.1,246.2 124.3,245.9 125.4,245.6 126.6,245.2 127.7,244.9 128.8,244.5 130.0,244.1 131.2,243.7 132.3,243.3 133.4,242.9 134.6,242.5 135.8,242.1 136.9,241.6 138.1,241.1 139.2,240.7 140.4,240.2 141.5,239.7 142.7,239.1 143.8,238.6 144.9,238.0 146.1,237.4 147.2,236.9 148.4,236.2 149.5,235.6 150.7,235.0 151.9,234.3 153.0,233.6 154.2,232.9 155.3,232.2 156.4,231.4 157.6,230.7 158.8,229.9 159.9,229.1 161.1,228.3 162.2,227.4 163.3,226.5 164.5,225.6 165.6,224.7 166.8,223.8 168.0,222.8 169.1,221.9 170.2,220.9 171.4,219.8 172.6,218.8 173.7,217.7 174.8,216.6 176.0,215.5 177.1,214.4 178.3,213.3 179.4,212.1 180.6,210.9 181.8,209.7 182.9,208.5 184.0,207.2 185.2,206.0 186.3,204.7 187.5,203.4 188.7,202.1 189.8,200.8 191.0,199.5 192.1,198.2 193.2,196.9 194.4,195.5 195.6,194.2 196.7,192.9 197.9,191.6 199.0,190.3 200.2,189.0 201.3,187.7 202.4,186.5 203.6,185.3 204.8,184.1 205.9,183.0 207.0,181.9 208.2,180.8 209.4,179.8 210.5,178.9 211.7,178.0 212.8,177.3 213.9,176.6 215.1,176.0 216.2,175.6 217.4,175.2 218.6,175.0 219.7,175.0 220.8,175.1 222.0,175.4 223.1,175.9 224.3,176.6 225.4,177.6 226.6,178.8 227.7,180.3 228.9,182.0 230.0,184.1 231.2,186.6 232.4,189.4 233.5,192.6 234.7,196.3 235.8,200.4 237.0,205.0 238.1,210.2 239.3,215.9 240.4,222.3 241.5,229.3 242.7,237.1 243.8,245.6 245.0,255.0" fill="none" stroke="currentColor" stroke-width="1.8"/><line x1="15" y1="255" x2="245" y2="255" stroke="currentColor" stroke-width="1"/><line x1="202.1" y1="171" x2="202.1" y2="255" class="s-blue" stroke-width="1.6" stroke-dasharray="4 3"/><line x1="193.9" y1="171" x2="193.9" y2="255" class="s-orange" stroke-width="1.6" stroke-dasharray="4 3"/><text x="390.0" y="157" text-anchor="middle" font-size="12.5" font-weight="600">Bimodal</text><polyline points="275.0,254.8 276.1,254.7 277.3,254.7 278.4,254.6 279.6,254.6 280.8,254.5 281.9,254.4 283.1,254.2 284.2,254.1 285.4,253.9 286.5,253.7 287.6,253.5 288.8,253.3 289.9,253.0 291.1,252.6 292.2,252.3 293.4,251.8 294.6,251.3 295.7,250.8 296.9,250.2 298.0,249.5 299.1,248.8 300.3,247.9 301.4,247.0 302.6,246.0 303.8,244.9 304.9,243.7 306.1,242.4 307.2,240.9 308.4,239.4 309.5,237.8 310.6,236.0 311.8,234.2 312.9,232.2 314.1,230.2 315.2,228.0 316.4,225.8 317.6,223.5 318.7,221.0 319.9,218.6 321.0,216.1 322.1,213.5 323.3,210.9 324.4,208.3 325.6,205.7 326.8,203.2 327.9,200.7 329.1,198.2 330.2,195.8 331.4,193.6 332.5,191.4 333.6,189.4 334.8,187.6 335.9,185.9 337.1,184.4 338.2,183.2 339.4,182.1 340.6,181.2 341.7,180.6 342.9,180.3 344.0,180.1 345.1,180.2 346.3,180.6 347.4,181.2 348.6,182.0 349.8,183.1 350.9,184.3 352.1,185.8 353.2,187.4 354.4,189.2 355.5,191.2 356.6,193.3 357.8,195.5 358.9,197.8 360.1,200.1 361.2,202.6 362.4,205.0 363.6,207.5 364.7,210.0 365.9,212.4 367.0,214.8 368.1,217.1 369.3,219.3 370.4,221.5 371.6,223.5 372.8,225.5 373.9,227.3 375.1,228.9 376.2,230.5 377.4,231.8 378.5,233.0 379.6,234.1 380.8,234.9 381.9,235.6 383.1,236.2 384.2,236.5 385.4,236.7 386.6,236.7 387.7,236.5 388.9,236.2 390.0,235.7 391.1,235.1 392.3,234.2 393.4,233.3 394.6,232.2 395.8,230.9 396.9,229.5 398.1,228.0 399.2,226.3 400.4,224.5 401.5,222.6 402.6,220.7 403.8,218.6 404.9,216.5 406.1,214.2 407.2,212.0 408.4,209.7 409.5,207.3 410.7,204.9 411.9,202.6 413.0,200.2 414.1,197.9 415.3,195.6 416.4,193.4 417.6,191.2 418.8,189.1 419.9,187.1 421.1,185.2 422.2,183.5 423.4,181.9 424.5,180.4 425.6,179.1 426.8,177.9 428.0,177.0 429.1,176.2 430.2,175.6 431.4,175.2 432.6,175.0 433.7,175.0 434.9,175.2 436.0,175.6 437.1,176.2 438.3,177.0 439.4,177.9 440.6,179.1 441.8,180.4 442.9,181.9 444.0,183.5 445.2,185.3 446.4,187.2 447.5,189.2 448.6,191.3 449.8,193.5 451.0,195.7 452.1,198.1 453.2,200.4 454.4,202.8 455.6,205.3 456.7,207.7 457.9,210.1 459.0,212.5 460.1,214.9 461.3,217.2 462.4,219.5 463.6,221.7 464.8,223.9 465.9,226.0 467.0,228.0 468.2,230.0 469.4,231.9 470.5,233.6 471.6,235.3 472.8,236.9 473.9,238.4 475.1,239.9 476.2,241.2 477.4,242.5 478.6,243.6 479.7,244.7 480.9,245.7 482.0,246.6 483.1,247.5 484.3,248.3 485.5,249.0 486.6,249.6 487.8,250.2 488.9,250.8 490.1,251.3 491.2,251.7 492.4,252.1 493.5,252.4 494.6,252.8 495.8,253.0 496.9,253.3 498.1,253.5 499.2,253.7 500.4,253.9 501.5,254.0 502.7,254.2 503.9,254.3 505.0,254.4" fill="none" stroke="currentColor" stroke-width="1.8"/><line x1="275" y1="255" x2="505" y2="255" stroke="currentColor" stroke-width="1"/><line x1="402.6" y1="171" x2="402.6" y2="255" class="s-blue" stroke-width="1.6" stroke-dasharray="4 3"/><line x1="393.0" y1="171" x2="393.0" y2="255" class="s-orange" stroke-width="1.6" stroke-dasharray="4 3"/><line x1="150" y1="290" x2="172" y2="290" class="s-blue" stroke-width="1.6" stroke-dasharray="4 3"/><text x="178" y="294" font-size="12" class="t-blue">median</text><line x1="270" y1="290" x2="292" y2="290" class="s-orange" stroke-width="1.6" stroke-dasharray="4 3"/><text x="298" y="294" font-size="12" class="t-orange">mean</text></svg>', // fig:shapes
          alt: 'Four density curves with dashed lines for the median (blue) and mean (orange). Symmetric: a bell curve with mean and median together in the middle. Right-skewed: a peak on the left with a long tail to the right; the mean lies to the right of the median. Left-skewed: the mirror image; the mean lies to the left of the median. Bimodal: two peaks with a valley between; the mean and median both fall near the valley.',
          caption: 'The mean is pulled toward the long tail; the median much less so. In the bimodal case neither describes a typical value — both land near the valley between the two groups.',
          maxWidth: 520,
        },
        {
          type: 'list',
          items: [
            '**Symmetric**: the two sides mirror each other; mean $\\approx$ median. Measurement error, heights, well-behaved frame times.',
            '[[stat-skewed-distribution|Right-skewed]] (positively skewed): a long tail toward large values. Session lengths, ping, income, time to finish a level, money spent per player. Typically mean $>$ median.',
            '**Left-skewed**: a long tail toward small values, often because of a ceiling. Star ratings out of $5$, exam scores on an easy exam, fraction of a level completed. Typically mean $<$ median.',
            '[[stat-bimodal-distribution|Bimodal]]: two peaks, usually two different groups mixed together — the surrender and full-length matches, casual and hardcore players. The right move is to **split the groups**, not to summarize the mixture. (Our match durations: mean $26.0$, median $29.5$, and almost no match actually lasts $24$–$27$ minutes.)',
            '**Uniform**: roughly flat. A good random number generator\'s output, binned.',
          ],
        },
        {
          type: 'graph',
          x: [0, 100],
          y: [0, 0.11],
          xStep: 10,
          yStep: 0.02,
          height: 270,
          functions: [{ expr: 'exp(-(ln(x) - ln(20))^2/(2s^2))/(x*s*sqrt(2pi))', color: 'purple', domain: [0.01, 100], label: 'session-length density' }],
          vlines: [
            { x: '20exp(-s^2)', color: 'green' },
            { x: 20, color: 'blue' },
            { x: '20exp(s^2/2)', color: 'orange' },
          ],
          sliders: [{ name: 's', min: 0.2, max: 1, step: 0.05, value: 0.6, label: 'skewness parameter $s$' }],
          readouts: [
            { label: 'mode (green) $=$', expr: '20exp(-s^2)', digits: 1 },
            { label: 'median (blue) $=$', expr: '20', digits: 1 },
            { label: 'mean (orange) $=$', expr: '20exp(s^2/2)', digits: 1 },
          ],
          caption: 'A model of session lengths in minutes (a *lognormal* distribution, often used for durations). Its median is always $20$. Increase $s$ and the right tail stretches: the mean slides right, the peak (mode) slides left, and the order mode $<$ median $<$ mean opens up. At $s = 0.2$ the curve is nearly symmetric and all three nearly coincide.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'A rule of thumb, not a theorem',
          text: '"Mean $>$ median means right-skewed" holds for most textbook shapes, but it can fail, especially for discrete data or distributions with one long tail and a heavy cluster on the other side. Use the mean–median gap as a hint, and **look at the histogram** to decide.',
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'mcq',
      prompt: 'An analytics report says: mean session length $42$ minutes, median session length $31$ minutes. What shape is the distribution of session lengths most likely to have?',
      options: [
        { text: 'Symmetric', why: 'In a symmetric distribution the mean and median nearly coincide. An $11$-minute gap is large.' },
        { text: 'Left-skewed', why: 'A long left tail drags the mean **below** the median. Here the mean is above.' },
        { text: 'Right-skewed', correct: true, why: 'A long right tail (a few very long sessions) pulls the mean above the median. Session lengths are a classic right-skewed variable.' },
        { text: 'Uniform', why: 'A uniform distribution is symmetric, so its mean equals its median.' },
      ],
      explanation: 'The mean is pulled toward the long tail; the median stays with the bulk of the data. Mean $42 >$ median $31$ points to a long tail of long sessions — right skew. For a report, the median (or both, plus a histogram) describes the typical player better than the mean alone.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'truefalse',
      prompt: 'For a left-skewed distribution, such as ratings out of $5$ stars where most players give $4$ or $5$, the mean is typically **larger** than the median.',
      answer: false,
      explanation: 'In a left-skewed distribution the long tail points toward **small** values, and the few low ratings pull the mean down below the median. So typically mean $<$ median. Example: ratings $1, 4, 5, 5, 5$ have median $5$ and mean $4$.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'concept',
      title: 'Comparing groups, and two variables at once',
      blocks: [
        {
          type: 'p',
          text: 'To compare a quantitative variable across groups, draw **side-by-side boxplots** on a common axis. You compare centers (medians), spreads (box lengths, whiskers) and outliers at a glance — even for groups of very different sizes.',
        },
        {
          type: 'figure',
          svg: '<svg viewBox="0 0 520 240" xmlns="http://www.w3.org/2000/svg"><text x="58" y="45" font-size="13" text-anchor="end">Low</text><rect x="220.5" y="26" width="50.2" height="28" class="f-red s-red" fill-opacity="0.15" stroke-width="1.6"/><line x1="242.0" y1="26" x2="242.0" y2="54" class="s-red" stroke-width="2.6"/><line x1="191.8" y1="40" x2="220.5" y2="40" stroke="currentColor" stroke-width="1.4"/><line x1="270.7" y1="40" x2="328.0" y2="40" stroke="currentColor" stroke-width="1.4"/><line x1="191.8" y1="32" x2="191.8" y2="48" stroke="currentColor" stroke-width="1.4"/><line x1="328.0" y1="32" x2="328.0" y2="48" stroke="currentColor" stroke-width="1.4"/><circle cx="406.8" cy="40" r="4" fill="none" class="s-red" stroke-width="1.8"/><circle cx="449.8" cy="40" r="4" fill="none" class="s-red" stroke-width="1.8"/><text x="58" y="107" font-size="13" text-anchor="end">Mid</text><rect x="156.0" y="88" width="21.5" height="28" class="f-orange s-orange" fill-opacity="0.15" stroke-width="1.6"/><line x1="166.8" y1="88" x2="166.8" y2="116" class="s-orange" stroke-width="2.6"/><line x1="141.7" y1="102" x2="156.0" y2="102" stroke="currentColor" stroke-width="1.4"/><line x1="177.5" y1="102" x2="206.2" y2="102" stroke="currentColor" stroke-width="1.4"/><line x1="141.7" y1="94" x2="141.7" y2="110" stroke="currentColor" stroke-width="1.4"/><line x1="206.2" y1="94" x2="206.2" y2="110" stroke="currentColor" stroke-width="1.4"/><circle cx="256.3" cy="102" r="4" fill="none" class="s-orange" stroke-width="1.8"/><circle cx="285.0" cy="102" r="4" fill="none" class="s-orange" stroke-width="1.8"/><text x="58" y="169" font-size="13" text-anchor="end">High</text><rect x="109.4" y="150" width="10.8" height="28" class="f-green s-green" fill-opacity="0.15" stroke-width="1.6"/><line x1="113.0" y1="150" x2="113.0" y2="178" class="s-green" stroke-width="2.6"/><line x1="98.7" y1="164" x2="109.4" y2="164" stroke="currentColor" stroke-width="1.4"/><line x1="120.2" y1="164" x2="130.9" y2="164" stroke="currentColor" stroke-width="1.4"/><line x1="98.7" y1="156" x2="98.7" y2="172" stroke="currentColor" stroke-width="1.4"/><line x1="130.9" y1="156" x2="130.9" y2="172" stroke="currentColor" stroke-width="1.4"/><circle cx="191.8" cy="164" r="4" fill="none" class="s-green" stroke-width="1.8"/><line x1="70" y1="200" x2="500" y2="200" stroke="currentColor" stroke-width="1.2"/><line x1="70.0" y1="200" x2="70.0" y2="205" stroke="currentColor" stroke-width="1.2"/><text x="70.0" y="219" font-size="11" text-anchor="middle">5</text><line x1="141.7" y1="200" x2="141.7" y2="205" stroke="currentColor" stroke-width="1.2"/><text x="141.7" y="219" font-size="11" text-anchor="middle">15</text><line x1="213.3" y1="200" x2="213.3" y2="205" stroke="currentColor" stroke-width="1.2"/><text x="213.3" y="219" font-size="11" text-anchor="middle">25</text><line x1="285.0" y1="200" x2="285.0" y2="205" stroke="currentColor" stroke-width="1.2"/><text x="285.0" y="219" font-size="11" text-anchor="middle">35</text><line x1="356.7" y1="200" x2="356.7" y2="205" stroke="currentColor" stroke-width="1.2"/><text x="356.7" y="219" font-size="11" text-anchor="middle">45</text><line x1="428.3" y1="200" x2="428.3" y2="205" stroke="currentColor" stroke-width="1.2"/><text x="428.3" y="219" font-size="11" text-anchor="middle">55</text><line x1="500.0" y1="200" x2="500.0" y2="205" stroke="currentColor" stroke-width="1.2"/><text x="500.0" y="219" font-size="11" text-anchor="middle">65</text><text x="500" y="234" font-size="11" text-anchor="end">frame time (ms)</text><line x1="153.8" y1="18" x2="153.8" y2="200" class="s-gray" stroke-width="1" stroke-dasharray="3 3"/><text x="156.8" y="14" font-size="10.5" class="t-gray">16.7 ms (60 fps)</text><text x="58" y="234" font-size="11" text-anchor="end" class="t-gray">GPU tier</text></svg>', // fig:sidebox
          alt: 'Three horizontal boxplots of frame time in milliseconds by GPU tier, on a common axis from 5 to 65. Low tier (red): whiskers 22 to 41, box 26 to 33, median 29, outliers at 52 and 58. Mid tier (orange): whiskers 15 to 24, box 17 to 20, median 18.5, outliers at 31 and 35. High tier (green): whiskers 9 to 13.5, box 10.5 to 12, median 11, one outlier at 22. A dashed gray line marks 16.7 ms, the 60 fps budget.',
          caption: 'Frame times by GPU tier, with the $60$ fps budget marked. Center and spread both shrink on faster hardware, and every tier has occasional hitches.',
          maxWidth: 520,
        },
        {
          type: 'p',
          text: 'To relate **two** quantitative variables measured on the same units, draw a [[stat-scatterplot|scatterplot]]: one point $(x_i, y_i)$ per unit, with the explanatory variable on the horizontal axis. Describe it by **direction** (positive or negative), **form** (linear, curved, clusters), **strength** (how tightly points follow the form) and **unusual points**.',
        },
        {
          type: 'graph',
          x: [0, 420],
          y: [900, 2200],
          xStep: 50,
          yStep: 200,
          height: 280,
          points: [
            ...players.slice(0, -1).map(([h, r]) => ({ x: h, y: r, color: 'blue' as const })),
            { x: 12, y: 1950, color: 'red', label: 'smurf?' },
          ],
          caption: 'Hours played (horizontal) versus skill rating (vertical) for $24$ players. **Positive** direction, **curved** form (rating climbs fast at first, then levels off — diminishing returns), fairly **strong**, and one glaring unusual point: a $12$-hour account rated like a $370$-hour veteran. That is probably an experienced player on a new account, which matchmaking teams care a lot about.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'A scatterplot shows association, not cause',
          text: 'Playing more probably does raise rating, but a scatterplot alone cannot tell you that: better players may simply enjoy the game more and play more. This is the observational-study caveat from the first lesson. Units 5 and 10 put numbers on association (correlation, least-squares lines); neither turns association into causation.',
        },
      ],
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'mcq',
      prompt: 'Using the side-by-side boxplots of frame time by GPU tier (Low: box $26$–$33$, median $29$; Mid: box $17$–$20$, median $18.5$, whiskers $15$–$24$; High: box $10.5$–$12$, median $11$, whiskers $9$–$13.5$, one outlier at $22$; the $60$ fps budget is $16.7$ ms), which statement is supported?',
      figure: {
        type: 'figure',
        svg: '<svg viewBox="0 0 520 240" xmlns="http://www.w3.org/2000/svg"><text x="58" y="45" font-size="13" text-anchor="end">Low</text><rect x="220.5" y="26" width="50.2" height="28" class="f-red s-red" fill-opacity="0.15" stroke-width="1.6"/><line x1="242.0" y1="26" x2="242.0" y2="54" class="s-red" stroke-width="2.6"/><line x1="191.8" y1="40" x2="220.5" y2="40" stroke="currentColor" stroke-width="1.4"/><line x1="270.7" y1="40" x2="328.0" y2="40" stroke="currentColor" stroke-width="1.4"/><line x1="191.8" y1="32" x2="191.8" y2="48" stroke="currentColor" stroke-width="1.4"/><line x1="328.0" y1="32" x2="328.0" y2="48" stroke="currentColor" stroke-width="1.4"/><circle cx="406.8" cy="40" r="4" fill="none" class="s-red" stroke-width="1.8"/><circle cx="449.8" cy="40" r="4" fill="none" class="s-red" stroke-width="1.8"/><text x="58" y="107" font-size="13" text-anchor="end">Mid</text><rect x="156.0" y="88" width="21.5" height="28" class="f-orange s-orange" fill-opacity="0.15" stroke-width="1.6"/><line x1="166.8" y1="88" x2="166.8" y2="116" class="s-orange" stroke-width="2.6"/><line x1="141.7" y1="102" x2="156.0" y2="102" stroke="currentColor" stroke-width="1.4"/><line x1="177.5" y1="102" x2="206.2" y2="102" stroke="currentColor" stroke-width="1.4"/><line x1="141.7" y1="94" x2="141.7" y2="110" stroke="currentColor" stroke-width="1.4"/><line x1="206.2" y1="94" x2="206.2" y2="110" stroke="currentColor" stroke-width="1.4"/><circle cx="256.3" cy="102" r="4" fill="none" class="s-orange" stroke-width="1.8"/><circle cx="285.0" cy="102" r="4" fill="none" class="s-orange" stroke-width="1.8"/><text x="58" y="169" font-size="13" text-anchor="end">High</text><rect x="109.4" y="150" width="10.8" height="28" class="f-green s-green" fill-opacity="0.15" stroke-width="1.6"/><line x1="113.0" y1="150" x2="113.0" y2="178" class="s-green" stroke-width="2.6"/><line x1="98.7" y1="164" x2="109.4" y2="164" stroke="currentColor" stroke-width="1.4"/><line x1="120.2" y1="164" x2="130.9" y2="164" stroke="currentColor" stroke-width="1.4"/><line x1="98.7" y1="156" x2="98.7" y2="172" stroke="currentColor" stroke-width="1.4"/><line x1="130.9" y1="156" x2="130.9" y2="172" stroke="currentColor" stroke-width="1.4"/><circle cx="191.8" cy="164" r="4" fill="none" class="s-green" stroke-width="1.8"/><line x1="70" y1="200" x2="500" y2="200" stroke="currentColor" stroke-width="1.2"/><line x1="70.0" y1="200" x2="70.0" y2="205" stroke="currentColor" stroke-width="1.2"/><text x="70.0" y="219" font-size="11" text-anchor="middle">5</text><line x1="141.7" y1="200" x2="141.7" y2="205" stroke="currentColor" stroke-width="1.2"/><text x="141.7" y="219" font-size="11" text-anchor="middle">15</text><line x1="213.3" y1="200" x2="213.3" y2="205" stroke="currentColor" stroke-width="1.2"/><text x="213.3" y="219" font-size="11" text-anchor="middle">25</text><line x1="285.0" y1="200" x2="285.0" y2="205" stroke="currentColor" stroke-width="1.2"/><text x="285.0" y="219" font-size="11" text-anchor="middle">35</text><line x1="356.7" y1="200" x2="356.7" y2="205" stroke="currentColor" stroke-width="1.2"/><text x="356.7" y="219" font-size="11" text-anchor="middle">45</text><line x1="428.3" y1="200" x2="428.3" y2="205" stroke="currentColor" stroke-width="1.2"/><text x="428.3" y="219" font-size="11" text-anchor="middle">55</text><line x1="500.0" y1="200" x2="500.0" y2="205" stroke="currentColor" stroke-width="1.2"/><text x="500.0" y="219" font-size="11" text-anchor="middle">65</text><text x="500" y="234" font-size="11" text-anchor="end">frame time (ms)</text><line x1="153.8" y1="18" x2="153.8" y2="200" class="s-gray" stroke-width="1" stroke-dasharray="3 3"/><text x="156.8" y="14" font-size="10.5" class="t-gray">16.7 ms (60 fps)</text><text x="58" y="234" font-size="11" text-anchor="end" class="t-gray">GPU tier</text></svg>', // fig:sidebox
        alt: 'Side-by-side boxplots of frame time by GPU tier: Low (box 26 to 33, median 29, whiskers 22 to 41, outliers 52 and 58), Mid (box 17 to 20, median 18.5, whiskers 15 to 24, outliers 31 and 35), High (box 10.5 to 12, median 11, whiskers 9 to 13.5, outlier 22). Dashed line at 16.7 ms.',
        maxWidth: 480,
      },
      options: [
        { text: 'The mid tier has the most variable frame times', why: 'The mid tier\'s box spans $3$ ms; the low tier\'s spans $7$ ms with a much longer whisker range. Low is the most variable.' },
        { text: 'More than half of mid-tier frames miss the $16.7$ ms budget, while the high tier misses it only on rare outlier frames', correct: true, why: 'The mid-tier median ($18.5$) is above $16.7$, so more than half of its frames are slower than the budget. All high-tier values except the single outlier at $22$ ms lie below $13.5$ ms.' },
        { text: 'The typical low-tier frame takes about $41$ ms', why: '$41$ ms is the end of the low tier\'s upper whisker (its slowest non-outlier frames). The typical (median) frame takes $29$ ms.' },
        { text: 'The high tier has the fewest frames in the sample, since its box is the smallest', why: 'Box length shows spread (the IQR), not sample size. Boxplots do not show $n$ at all.' },
      ],
      explanation: 'Read medians for center, box lengths for spread, and remember that a boxplot hides the sample size. Since half the data lie above the median, a median above the budget line means most frames miss it. The high tier is fast and consistent but not perfect: the outlier at $22$ ms is a hitch players would notice.',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'concept',
      title: 'How graphs mislead',
      blocks: [
        {
          type: 'p',
          text: 'Most misleading graphs contain no false numbers. They mislead through design choices that make a small effect look large (or a large one small). Three classics:',
        },
        {
          type: 'figure',
          svg: '<svg viewBox="0 0 520 250" xmlns="http://www.w3.org/2000/svg"><text x="155.0" y="20" text-anchor="middle" font-size="13" font-weight="600" class="t-red">Axis starts at 50%</text><line x1="55" y1="200" x2="255" y2="200" stroke="currentColor" stroke-width="1.2"/><line x1="55" y1="200" x2="55" y2="40" stroke="currentColor" stroke-width="1.2"/><line x1="52" y1="200.0" x2="55" y2="200.0" stroke="currentColor" stroke-width="1"/><text x="49" y="204.0" font-size="10" text-anchor="end">50%</text><line x1="52" y1="153.1" x2="55" y2="153.1" stroke="currentColor" stroke-width="1"/><text x="49" y="157.1" font-size="10" text-anchor="end">50.5%</text><line x1="52" y1="106.3" x2="55" y2="106.3" stroke="currentColor" stroke-width="1"/><text x="49" y="110.3" font-size="10" text-anchor="end">51%</text><line x1="52" y1="59.4" x2="55" y2="59.4" stroke="currentColor" stroke-width="1"/><text x="49" y="63.4" font-size="10" text-anchor="end">51.5%</text><rect x="90" y="153.1" width="50" height="46.9" class="f-blue" fill-opacity="0.8"/><text x="115" y="147.1" font-size="11" text-anchor="middle">50.5%</text><text x="115" y="215" font-size="11" text-anchor="middle">Rifle A</text><rect x="175" y="59.4" width="50" height="140.6" class="f-orange" fill-opacity="0.8"/><text x="200" y="53.4" font-size="11" text-anchor="middle">51.5%</text><text x="200" y="215" font-size="11" text-anchor="middle">Rifle B</text><text x="405.0" y="20" text-anchor="middle" font-size="13" font-weight="600" class="">Axis starts at 0%</text><line x1="305" y1="200" x2="505" y2="200" stroke="currentColor" stroke-width="1.2"/><line x1="305" y1="200" x2="305" y2="40" stroke="currentColor" stroke-width="1.2"/><line x1="302" y1="200.0" x2="305" y2="200.0" stroke="currentColor" stroke-width="1"/><text x="299" y="204.0" font-size="10" text-anchor="end">0%</text><line x1="302" y1="150.0" x2="305" y2="150.0" stroke="currentColor" stroke-width="1"/><text x="299" y="154.0" font-size="10" text-anchor="end">20%</text><line x1="302" y1="100.0" x2="305" y2="100.0" stroke="currentColor" stroke-width="1"/><text x="299" y="104.0" font-size="10" text-anchor="end">40%</text><line x1="302" y1="50.0" x2="305" y2="50.0" stroke="currentColor" stroke-width="1"/><text x="299" y="54.0" font-size="10" text-anchor="end">60%</text><rect x="340" y="73.8" width="50" height="126.2" class="f-blue" fill-opacity="0.8"/><text x="365" y="67.8" font-size="11" text-anchor="middle">50.5%</text><text x="365" y="215" font-size="11" text-anchor="middle">Rifle A</text><rect x="425" y="71.2" width="50" height="128.8" class="f-orange" fill-opacity="0.8"/><text x="450" y="65.2" font-size="11" text-anchor="middle">51.5%</text><text x="450" y="215" font-size="11" text-anchor="middle">Rifle B</text><text x="155" y="238" text-anchor="middle" font-size="11" class="t-gray">B looks 3 times as good</text><text x="405" y="238" text-anchor="middle" font-size="11" class="t-gray">B is 1 point better</text></svg>', // fig:trunc
          alt: 'Two bar charts of the win rates of Rifle A (50.5%) and Rifle B (51.5%). Left, titled in red Axis starts at 50%: B\'s bar is three times as tall as A\'s; caption B looks 3 times as good. Right, axis starts at 0%: the bars are nearly equal; caption B is 1 point better.',
          caption: '**Truncated axis.** Starting a bar chart\'s axis at $50\\%$ turns a $1$-point difference into a bar three times as tall, because bar **length** is what the eye compares.',
          maxWidth: 520,
        },
        {
          type: 'p',
          text: 'Bars must start at zero because their length encodes the value. Line charts and dot plots encode values by **position**, so a zoomed axis is fine there — and often necessary to see variation — as long as the axis is clearly labeled.',
        },
        {
          type: 'figure',
          svg: '<svg viewBox="0 0 520 230" xmlns="http://www.w3.org/2000/svg"><text x="120" y="20" text-anchor="middle" font-size="13" font-weight="600">Area distortion</text><circle cx="62" cy="130" r="30" class="f-orange s-orange" fill-opacity="0.35" stroke-width="1.5"/><circle cx="165" cy="100" r="60" class="f-orange s-orange" fill-opacity="0.35" stroke-width="1.5"/><text x="62" y="134" text-anchor="middle" font-size="12">$1M</text><text x="165" y="104" text-anchor="middle" font-size="13">$2M</text><text x="62" y="178" text-anchor="middle" font-size="11">2025</text><text x="165" y="178" text-anchor="middle" font-size="11">2026</text><text x="115" y="205" text-anchor="middle" font-size="11" class="t-gray">revenue doubled; the diameter doubled,</text><text x="115" y="220" text-anchor="middle" font-size="11" class="t-gray">so the coin’s area is 4 times as large</text><rect x="486.9" y="45" width="18.1" height="140" class="f-red" fill-opacity="0.12"/><text x="387" y="20" text-anchor="middle" font-size="13" font-weight="600">Cherry-picked window</text><polyline points="270.0,69.8 274.5,62.8 279.0,60.1 283.6,58.0 288.1,60.5 292.6,69.4 297.1,77.5 301.6,81.2 306.2,91.5 310.7,96.1 315.2,93.0 319.7,93.8 324.2,87.2 328.8,83.7 333.3,78.0 337.8,78.2 342.3,76.1 346.8,78.9 351.3,87.6 355.9,94.6 360.4,103.0 364.9,112.5 369.4,111.7 373.9,112.3 378.5,110.6 383.0,106.9 387.5,96.8 392.0,95.0 396.5,92.4 401.1,93.7 405.6,100.0 410.1,106.5 414.6,117.8 419.1,122.8 423.7,129.7 428.2,128.6 432.7,127.1 437.2,127.2 441.7,121.5 446.2,116.0 450.8,108.9 455.3,112.1 459.8,114.7 464.3,123.0 468.8,130.0 473.4,138.8 477.9,145.4 482.4,147.6 486.9,147.7 491.4,142.9 496.0,139.2 500.5,132.3 505.0,128.5" fill="none" class="s-blue" stroke-width="1.8"/><polyline points="486.9,147.7 491.4,142.9 496.0,139.2 500.5,132.3 505.0,128.5" fill="none" class="s-red" stroke-width="3"/><line x1="270" y1="185" x2="505" y2="185" stroke="currentColor" stroke-width="1.2"/><text x="270" y="200" font-size="10.5">week 1</text><text x="505" y="200" font-size="10.5" text-anchor="end">week 52</text><text x="505" y="39" font-size="11" class="t-red" text-anchor="end">"DAU up 13%!"</text><text x="387" y="215" text-anchor="middle" font-size="11" class="t-gray">daily active users, whole year: down 25%</text></svg>', // fig:areacherry
          alt: 'Left, titled Area distortion: a small coin labeled $1M for 2025 and a coin with twice the diameter labeled $2M for 2026; note says revenue doubled, the diameter doubled, so the area is 4 times as large. Right, titled Cherry-picked window: a line chart of daily active users over 52 weeks trending down with wiggles; the last four weeks are highlighted in red with the label DAU up 13%; note says whole year down 25%.',
          caption: '**Area distortion** (left): scaling an icon\'s width *and* height by $2$ multiplies its area by $4$. **Cherry-picked window** (right): the final four weeks really did rise $13\\%$, during a year that fell $25\\%$.',
          maxWidth: 520,
        },
        {
          type: 'p',
          text: 'Other repeat offenders: two series on **dual axes** whose scales are chosen to make them appear to move together; **3D** bars and pies whose perspective inflates the front slices; **cumulative** charts that can only go up; and **unequal bin widths** on a count-scale histogram. Edward Tufte proposed a number for the distortion:',
        },
        {
          type: 'derivation',
          title: 'The lie factor of the truncated rifle chart',
          steps: [
            { tex: '\\text{effect in the data} = \\frac{51.5 - 50.5}{50.5} \\approx 0.0198 \\ (\\text{about } 2\\%)', why: 'Relative change in the actual win rates.' },
            { tex: '\\text{effect in the graphic} = \\frac{1.5 - 0.5}{0.5} = 2 \\ (200\\%)', why: 'With the axis starting at $50$, the bars are $0.5$ and $1.5$ units tall: the drawn length triples.' },
            { tex: '\\text{lie factor} = \\frac{2}{0.0198} \\approx 101', why: 'Tufte\'s [[stat-lie-factor|lie factor]]: the graphic exaggerates the effect about a hundredfold. An honest graph has a lie factor near $1$.' },
          ],
          result: 'For the coins, the data double ($+100\\%$) but the area quadruples ($+300\\%$): lie factor $3$.',
        },
        {
          type: 'callout',
          variant: 'exam',
          title: 'How to read any chart critically',
          text: 'Ask: Where does the axis start? Is the encoding length, position, area or angle? Who chose the time window, and what happened just outside it? Are two series on different scales? Is the baseline (all players, all crashes) shown? Exam questions on misleading graphs almost always hinge on one of these.',
        },
      ],
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'numeric',
      prompt: 'A bar chart compares daily active users before and after an update: $2.40$ million and $2.46$ million. Its vertical axis starts at $2.30$ million. What is the lie factor (graphic effect divided by data effect)? Give a whole number.',
      hint: 'Data: $\\frac{2.46 - 2.40}{2.40}$. Graphic: the bars are $0.10$ and $0.16$ (million) tall above the axis start.',
      label: 'lie factor $=$',
      answer: '(0.16/0.10 - 1)/(2.46/2.40 - 1)',
      answerTex: '24',
      tolerance: 0.5,
      explanation: 'Data effect: $\\frac{2.46}{2.40} - 1 = 0.025$ ($2.5\\%$). Graphic effect: the visible bars are $2.40 - 2.30 = 0.10$ and $2.46 - 2.30 = 0.16$ tall, so the second is $60\\%$ longer: $0.16/0.10 - 1 = 0.6$. Lie factor $= 0.6/0.025 = 24$: the chart exaggerates the growth $24$-fold. Starting the axis at $0$ gives bars of $2.40$ and $2.46$ and a lie factor of $1$.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'error',
      prompt: 'A producer shows a chart of daily active users (DAU) for the last $4$ weeks only. Over the full year DAU fell about $25\\%$, with several short rises along the way. Tap the first line where the reasoning goes wrong.',
      lines: [
        'Over the last $4$ weeks, daily active users rose from $66{,}000$ to $74{,}000$.',
        'That is a relative increase of $\\frac{74 - 66}{66} \\approx 12\\%$.',
        'The axis is zoomed, but the computed percentage does not depend on the axis.',
        'So the player base is growing, and the decline is over.',
      ],
      errorLines: [4],
      explanation: 'Lines 1–3 are correct: the numbers are real, $8/66 \\approx 12.1\\%$, and a computed percentage is unaffected by the axis. Line 4 generalizes from a cherry-picked window. Over the full year, DAU fell about $25\\%$, and the series has risen for a few weeks several times before (look at the earlier bumps) without the trend changing. Four weeks of an up-wiggle in a noisy, declining series is not evidence that the decline is over — you would need a longer window, and ideally a reason (a launch, an event) to expect a change.',
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'order',
      prompt: 'Put the steps for drawing a density-scale histogram in order.',
      lines: [
        'Choose equal-width bins that cover the data, with a consistent endpoint rule such as $[a, b)$.',
        'Count how many values fall in each bin.',
        'Divide each count by $n$ to get relative frequencies.',
        'Divide each relative frequency by the bin width to get densities.',
        'Draw adjacent bars with heights equal to the densities, so that the total area is $1$.',
      ],
      distractors: ['Sort the bins from tallest to shortest, as in a Pareto chart.'],
      explanation: 'Bins first (the endpoint rule makes every value land in exactly one bin), then counts, then the two divisions: by $n$ (proportions) and by the width (densities), so that area equals proportion. Sorting bins by height is for bar charts of categories; a histogram\'s bins must stay in number-line order.',
    },
  ],
  takeaways: [
    'Plot before you summarize (Anscombe\'s quartet). A distribution shows which values occur and how often.',
    'Bar charts for categorical variables (gaps, any order, axis from zero); histograms for quantitative ones (adjacent bins in number-line order).',
    'On a density-scale histogram, height $= \\frac{\\text{count}/n}{\\text{width}}$ and area $=$ proportion; total area is $1$. Bin width changes the story — try several.',
    'Dot plots and stem-and-leaf plots keep every value visible for small $n$, and you can read medians straight off them.',
    'Describe shape, center, spread and unusual features. Right skew: typically mean $>$ median; left skew: mean $<$ median; bimodal: split the groups.',
    'Side-by-side boxplots compare groups; scatterplots show direction, form, strength and unusual points — association, not causation.',
    'Truncated bar axes, area scaling and cherry-picked windows exaggerate effects; the lie factor (graphic effect / data effect) measures it.',
  ],
  reading: [
    {
      title: 'OpenStax — Introductory Statistics',
      url: 'https://openstax.org/details/books/introductory-statistics',
      source: 'openstax',
      note: 'Chapter 2 covers stem-and-leaf plots, histograms, frequency polygons and boxplots, with exercises on reading each.',
    },
    {
      title: 'Wikipedia — Anscombe\'s quartet',
      url: 'https://en.wikipedia.org/wiki/Anscombe%27s_quartet',
      source: 'wikipedia',
      note: 'The four data sets with identical summary statistics and completely different plots — the best one-picture argument for graphing data.',
    },
    {
      title: 'Wikipedia — Misleading graph',
      url: 'https://en.wikipedia.org/wiki/Misleading_graph',
      source: 'wikipedia',
      note: 'A catalog of distortions (truncated axes, improper scaling, 3D effects, omitted data) with examples and Tufte\'s lie factor.',
    },
    {
      title: 'Seeing Theory — Brown University',
      url: 'https://seeing-theory.brown.edu/',
      source: 'other',
      note: 'Interactive visual introductions to probability and statistics; a good companion for the rest of this course.',
    },
  ],
};
