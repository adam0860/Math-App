import type { Lesson } from '../../types';

const ks = (n: number) => Array.from({ length: n + 1 }, (_, i) => i);
const poisStem = (k: number) => `exp(-l)*l^${k}/${k}!`;
const binStem = (k: number) => `nCr(n, ${k})*(l/n)^${k}*(1 - l/n)^(n - ${k})`;

const TIMELINE_SVG = '<svg viewBox="0 0 480 150" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="30" width="70" height="60" class="f-blue" fill-opacity="0.07"/><rect x="170" y="30" width="70" height="60" class="f-blue" fill-opacity="0.07"/><rect x="310" y="30" width="70" height="60" class="f-blue" fill-opacity="0.07"/><line x1="30" y1="60" x2="462" y2="60" stroke="currentColor" stroke-width="1.5"/><path d="M462 60 l-8 -4 v8 z" fill="currentColor"/><line x1="30" y1="54" x2="30" y2="66" stroke="currentColor" stroke-width="1.2"/><text x="30" y="82" text-anchor="middle" font-size="12" class="t-gray">0</text><line x1="100" y1="54" x2="100" y2="66" stroke="currentColor" stroke-width="1.2"/><text x="100" y="82" text-anchor="middle" font-size="12" class="t-gray">1</text><line x1="170" y1="54" x2="170" y2="66" stroke="currentColor" stroke-width="1.2"/><text x="170" y="82" text-anchor="middle" font-size="12" class="t-gray">2</text><line x1="240" y1="54" x2="240" y2="66" stroke="currentColor" stroke-width="1.2"/><text x="240" y="82" text-anchor="middle" font-size="12" class="t-gray">3</text><line x1="310" y1="54" x2="310" y2="66" stroke="currentColor" stroke-width="1.2"/><text x="310" y="82" text-anchor="middle" font-size="12" class="t-gray">4</text><line x1="380" y1="54" x2="380" y2="66" stroke="currentColor" stroke-width="1.2"/><text x="380" y="82" text-anchor="middle" font-size="12" class="t-gray">5</text><line x1="450" y1="54" x2="450" y2="66" stroke="currentColor" stroke-width="1.2"/><text x="450" y="82" text-anchor="middle" font-size="12" class="t-gray">6</text><text x="464" y="64" font-size="12" class="t-gray">t</text><text x="420" y="100" font-size="11" class="t-gray">minutes</text><circle cx="54.5" cy="60" r="5.5" class="f-orange s-orange" stroke-width="1"/><circle cx="93.0" cy="60" r="5.5" class="f-orange s-orange" stroke-width="1"/><circle cx="110.5" cy="60" r="5.5" class="f-orange s-orange" stroke-width="1"/><circle cx="198.0" cy="60" r="5.5" class="f-orange s-orange" stroke-width="1"/><circle cx="208.5" cy="60" r="5.5" class="f-orange s-orange" stroke-width="1"/><circle cx="213.4" cy="60" r="5.5" class="f-orange s-orange" stroke-width="1"/><circle cx="296.0" cy="60" r="5.5" class="f-orange s-orange" stroke-width="1"/><circle cx="373.0" cy="60" r="5.5" class="f-orange s-orange" stroke-width="1"/><circle cx="401.0" cy="60" r="5.5" class="f-orange s-orange" stroke-width="1"/><circle cx="439.5" cy="60" r="5.5" class="f-orange s-orange" stroke-width="1"/><text x="30" y="22" font-size="12" class="t-gray">player joins (dots) over six minutes</text><text x="65" y="122" text-anchor="middle" font-size="17" font-weight="600" class="t-blue">2</text><text x="135" y="122" text-anchor="middle" font-size="17" font-weight="600" class="t-blue">1</text><text x="205" y="122" text-anchor="middle" font-size="17" font-weight="600" class="t-blue">3</text><text x="275" y="122" text-anchor="middle" font-size="17" font-weight="600" class="t-blue">1</text><text x="345" y="122" text-anchor="middle" font-size="17" font-weight="600" class="t-blue">1</text><text x="415" y="122" text-anchor="middle" font-size="17" font-weight="600" class="t-blue">2</text><text x="30" y="144" font-size="12" class="t-gray">joins in each minute: each ~ Pois(λ), independent of the others</text></svg>';

export const lesson: Lesson = {
  id: 'stat-poisson',
  title: 'The Poisson Distribution',
  summary: 'Counting events that have no fixed number of trials — crashes per day, bugs per thousand lines, players joining per minute: the Poisson distribution as a limit of binomials, the Poisson process, mean = variance = $\\lambda$, the Poisson approximation, and sums of independent Poisson counts.',
  minutes: 18,
  objectives: [
    'Derive the Poisson PMF as the limit of $\\text{Bin}(n, \\lambda/n)$ and compute Poisson probabilities',
    'Model counts in time or space with a Poisson process, scaling the rate to the interval: $\\text{Pois}(\\lambda t)$',
    'Show that a Poisson variable has mean and variance both equal to $\\lambda$, and use this to spot overdispersed data',
    'Approximate binomial probabilities with large $n$ and small $p$ by a Poisson distribution, and judge the error',
    'Add independent Poisson counts and prove that the sum is Poisson',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Counting events with no fixed number of trials',
      blocks: [
        {
          type: 'p',
          text: 'Your game\'s servers crash about twice a day. How likely is a day with three or more crashes? There is no "$n$ trials, each a success with probability $p$" here: a crash could happen at any instant, and nobody can say how many chances there were. What you know is a **rate**.',
        },
        {
          type: 'p',
          text: 'The same situation is everywhere in software and games: bugs per thousand lines of code, players joining a lobby per minute, packets lost per second, typos per page, enemy spawns per wave in a random-spawn system. For counts like these, the standard model is the [[stat-poisson-distribution|Poisson distribution]].',
        },
        {
          type: 'definition',
          term: 'Poisson distribution',
          text: '$X \\sim \\text{Pois}(\\lambda)$, with $\\lambda > 0$ the average count, has PMF $$p_X(k) = \\frac{e^{-\\lambda}\\lambda^k}{k!}, \\qquad k = 0, 1, 2, \\dots$$',
        },
        {
          type: 'p',
          text: 'Check that it is a valid PMF: every term is positive, and by the [[maclaurin-series|Maclaurin series]] $e^{\\lambda} = \\sum_{k \\ge 0} \\lambda^k/k!$, so $\\sum_k p_X(k) = e^{-\\lambda}e^{\\lambda} = 1$. The factor $e^{-\\lambda}$ is exactly the normalizing constant. (Here $e$ is [[eulers-number|Euler\'s number]], and $p_X(0) = e^{-\\lambda}$ is the chance of no events at all.)',
        },
        {
          type: 'graph',
          x: [-0.8, 25],
          y: [0, 0.4],
          xStep: 5,
          yStep: 0.1,
          height: 270,
          functions: [{ expr: 'exp(-l)*l^x/x!', color: 'gray', dashed: true, domain: [0, 25], label: 'smooth envelope $e^{-\\lambda}\\lambda^x/x!$' }],
          segments: ks(25).map((k) => ({ from: [k, 0] as [number, number], to: [k, poisStem(k)] as [number, string], color: 'blue' as const })),
          vlines: [{ x: 'l', label: 'λ', color: 'orange' }],
          sliders: [{ name: 'l', min: 1, max: 15, step: 0.5, value: 2, label: 'rate $\\lambda$' }],
          readouts: [
            { label: '$P(X = 0) = e^{-\\lambda} =$', expr: 'exp(-l)', digits: 4 },
            { label: 'mean $\\lambda$, standard deviation $\\sqrt{\\lambda} =$', expr: 'sqrt(l)', digits: 3 },
          ],
          caption: 'Stems: $\\text{Pois}(\\lambda)$. For small $\\lambda$ the distribution is piled against $0$ and right-skewed; as $\\lambda$ grows it spreads out (standard deviation $\\sqrt{\\lambda}$) and looks more and more like a bell. When $\\lambda$ is a whole number, $k = \\lambda - 1$ and $k = \\lambda$ tie for the most likely count.',
        },
        {
          type: 'derivation',
          title: 'Three or more crashes in a day',
          steps: [
            { tex: 'X \\sim \\text{Pois}(2)', why: 'Crashes per day, average $2$.' },
            { tex: 'P(X \\le 2) = e^{-2}\\left(\\frac{2^0}{0!} + \\frac{2^1}{1!} + \\frac{2^2}{2!}\\right) = 5e^{-2}', why: 'Sum the PMF for $k = 0, 1, 2$; the terms are $1 + 2 + 2$.' },
            { tex: 'P(X \\ge 3) = 1 - 5e^{-2} \\approx 1 - 0.6767 = 0.3233', why: 'Complement: the support is infinite, so "$\\ge 3$" can only be computed this way.' },
          ],
          result: 'About one day in three has at least three crashes, even when nothing has changed. A three-crash day is not, by itself, evidence that the latest patch broke something.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'numeric',
      prompt: 'A support team receives on average $4$ bug reports per hour, modeled as $\\text{Pois}(4)$. Find the probability of **at most one** report in an hour. Four decimals.',
      hint: '$P(X = 0) + P(X = 1) = e^{-4}(1 + 4)$.',
      label: '$P(X \\le 1) =$',
      answer: '5*exp(-4)',
      answerTex: '5e^{-4} \\approx 0.0916',
      tolerance: 0.00006,
      explanation: '$P(X = 0) = e^{-4} \\approx 0.0183$ and $P(X = 1) = 4e^{-4} \\approx 0.0733$, so $P(X \\le 1) = 5e^{-4} \\approx 0.0916$. A quiet hour (one report or none) happens less than one hour in ten, so a team should not plan staffing around "a typical quiet hour".',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Where the formula comes from: the limit of binomials',
      blocks: [
        {
          type: 'p',
          text: 'Here is the idea behind the formula. Chop the day into $n$ tiny slots — seconds, milliseconds — so small that two crashes never land in the same slot. Each slot then holds $0$ or $1$ crash, a Bernoulli trial. To keep the average at $\\lambda$ crashes per day, each slot must have probability $p = \\lambda/n$. So the count is $\\text{Bin}(n, \\lambda/n)$, and the finer the slots, the better the model. Let $n \\to \\infty$.',
        },
        {
          type: 'derivation',
          title: '$\\text{Bin}(n, \\lambda/n) \\to \\text{Pois}(\\lambda)$',
          steps: [
            { tex: 'P(X_n = k) = \\frac{n!}{k!\\,(n-k)!}\\left(\\frac{\\lambda}{n}\\right)^k\\left(1 - \\frac{\\lambda}{n}\\right)^{n-k}', why: 'The binomial PMF with $p = \\lambda/n$; $k$ is fixed while $n$ grows.' },
            { tex: '= \\frac{\\lambda^k}{k!} \\cdot \\frac{n(n-1)\\cdots(n-k+1)}{n^k} \\cdot \\left(1 - \\frac{\\lambda}{n}\\right)^{n} \\cdot \\left(1 - \\frac{\\lambda}{n}\\right)^{-k}', why: 'Cancel $(n-k)!$ against $n!$, leaving $k$ factors on top; move $\\lambda^k$ and $k!$ to the front; split the last power into $n$ and $-k$.' },
            { tex: '\\frac{n(n-1)\\cdots(n-k+1)}{n^k} = 1 \\cdot \\left(1 - \\frac{1}{n}\\right)\\cdots\\left(1 - \\frac{k-1}{n}\\right) \\to 1', why: 'A fixed number $k$ of factors, each tending to $1$.' },
            { tex: '\\left(1 - \\frac{\\lambda}{n}\\right)^{n} \\to e^{-\\lambda}', why: 'The [[limit]] that defines $e^x$: $(1 + x/n)^n \\to e^x$, here with $x = -\\lambda$. (Take logs: $n\\ln(1 - \\lambda/n) \\to -\\lambda$ by L\'Hôpital\'s rule.)' },
            { tex: '\\left(1 - \\frac{\\lambda}{n}\\right)^{-k} \\to 1', why: 'A fixed power of something tending to $1$.' },
            { tex: 'P(X_n = k) \\to \\frac{\\lambda^k}{k!}\\cdot 1 \\cdot e^{-\\lambda} \\cdot 1 = \\frac{e^{-\\lambda}\\lambda^k}{k!}', why: 'Multiply the limits (limit laws).' },
          ],
          result: 'The Poisson distribution is what the binomial becomes when there are very many opportunities, each very unlikely, with a fixed average number of successes $\\lambda = np$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why rare events "forget" $n$ and $p$ separately',
          text: 'Only the product $\\lambda = np$ survives the limit. A million players each crashing with probability $2 \\times 10^{-6}$ and a thousand players each with probability $0.002$ produce essentially the same distribution of crash counts. That is why you can model a count with a single rate, without ever knowing how many "chances" there were.',
        },
        {
          type: 'p',
          text: 'You can run the derivation as a program: split each minute into $1000$ slots, let a player join in each slot with probability $3/1000$, and compare the counts with $\\text{Pois}(3)$.',
        },
        {
          type: 'code',
          title: 'poisson_slots.cpp',
          runnable: true,
          code: `#include <array>
#include <cmath>
#include <cstdio>
#include <random>

std::mt19937_64 rng(11);
double uniform01() { return (rng() >> 11) * 0x1.0p-53; }   // uniform in [0, 1)

int main() {
    const double lambda = 3.0;      // players join at 3 per minute on average
    const int slots = 1000;         // split each minute into 1000 tiny slots
    const double p = lambda / slots;
    const int minutes = 100'000;

    std::array<long, 13> hist{};
    double sum = 0, sumSq = 0;
    for (int m = 0; m < minutes; ++m) {
        int joins = 0;
        for (int s = 0; s < slots; ++s)
            if (uniform01() < p) ++joins;   // at most one join per slot
        if (joins < 13) ++hist[joins];
        sum += joins;
        sumSq += double(joins) * joins;
    }
    double mean = sum / minutes;
    std::printf("mean %.3f   variance %.3f   (Poisson: both = 3)\\n\\n", mean, sumSq / minutes - mean * mean);

    std::printf(" k   simulated   Poisson(3)\\n");
    double pk = std::exp(-lambda);      // P(X = 0)
    for (int k = 0; k <= 8; ++k) {
        std::printf(" %d   %.4f      %.4f\\n", k, double(hist[k]) / minutes, pk);
        pk *= lambda / (k + 1);         // P(X = k+1) = P(X = k) * lambda / (k+1)
    }
}`,
          output: `mean 3.001   variance 2.976   (Poisson: both = 3)

 k   simulated   Poisson(3)
 0   0.0497      0.0498
 1   0.1481      0.1494
 2   0.2237      0.2240
 3   0.2254      0.2240
 4   0.1690      0.1680
 5   0.1013      0.1008
 6   0.0502      0.0504
 7   0.0209      0.0216
 8   0.0081      0.0081`,
          annotations: [
            { lines: '18-20', text: 'One simulated minute: $1000$ Bernoulli trials with $p = 0.003$, i.e. one draw from $\\text{Bin}(1000, 0.003)$.' },
            { lines: 32, text: 'Compute the Poisson PMF by the ratio $p_X(k+1)/p_X(k) = \\lambda/(k+1)$ — no factorials, so no overflow even for large $k$.' },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'fill',
      prompt: 'Complete the key limits in the derivation of the Poisson distribution from $\\text{Bin}(n, \\lambda/n)$.',
      template: 'As $n \\to \\infty$ with $k$ fixed, $\\left(1 - \\frac{\\lambda}{n}\\right)^n$ tends to ___, and $\\frac{n(n-1)\\cdots(n-k+1)}{n^k}$ tends to ___. The parameter that survives the limit is $\\lambda =$ ___.',
      blanks: [{ answers: ['$e^{-\\lambda}$'] }, { answers: ['$1$'] }, { answers: ['$np$'] }],
      wordBank: ['$e^{-\\lambda}$', '$0$', '$1$', '$e^{\\lambda}$', '$np$', '$n/p$', '$p$'],
      explanation: 'The compound-interest limit $(1 + x/n)^n \\to e^x$ with $x = -\\lambda$ gives $e^{-\\lambda}$ — not $0$, even though $1 - \\lambda/n < 1$, because the exponent grows as the base approaches $1$. The ratio of $k$ factors each near $n$ to $n^k$ tends to $1$. Only $\\lambda = np$, the expected count, remains.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Mean = variance = $\\lambda$, and when the model fails',
      blocks: [
        {
          type: 'p',
          text: 'Since $\\text{Pois}(\\lambda)$ is the limit of $\\text{Bin}(n, \\lambda/n)$, whose mean is $np = \\lambda$ and variance $np(1-p) = \\lambda(1 - \\lambda/n) \\to \\lambda$, we expect both to equal $\\lambda$. Here is a direct proof from the series.',
        },
        {
          type: 'derivation',
          title: 'The mean and variance of $\\text{Pois}(\\lambda)$',
          steps: [
            { tex: 'E[X] = \\sum_{k=0}^{\\infty} k\\,\\frac{e^{-\\lambda}\\lambda^k}{k!} = \\sum_{k=1}^{\\infty} \\frac{e^{-\\lambda}\\lambda^k}{(k-1)!}', why: 'The $k = 0$ term is $0$; for $k \\ge 1$, $k/k! = 1/(k-1)!$.' },
            { tex: '= \\lambda e^{-\\lambda}\\sum_{j=0}^{\\infty} \\frac{\\lambda^j}{j!} = \\lambda e^{-\\lambda}e^{\\lambda} = \\lambda', why: 'Pull out one $\\lambda$ and shift the index $j = k - 1$; the remaining sum is the series for $e^{\\lambda}$.' },
            { tex: 'E[X(X-1)] = \\sum_{k=2}^{\\infty} \\frac{e^{-\\lambda}\\lambda^k}{(k-2)!} = \\lambda^2', why: 'Same trick with $k(k-1)/k! = 1/(k-2)!$, pulling out $\\lambda^2$. The **factorial moment** $E[X(X-1)]$ is easier than $E[X^2]$ because it cancels two factors.' },
            { tex: '\\operatorname{Var}(X) = E[X(X-1)] + E[X] - (E[X])^2 = \\lambda^2 + \\lambda - \\lambda^2 = \\lambda', why: 'Since $E[X^2] = E[X(X-1)] + E[X]$ by linearity, then the variance shortcut.' },
          ],
          result: 'Mean $\\lambda$, variance $\\lambda$, standard deviation $\\sqrt{\\lambda}$. A server averaging $100$ crashes a month will typically see $100 \\pm 10$.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Overdispersion: when the variance is too big',
          text: 'Mean = variance is a built-in **test** of the model. Suppose ten days of crash counts are $0, 1, 0, 9, 0, 2, 1, 7, 0, 0$: the mean is $2$, but the values swing far more than $\\pm\\sqrt{2}$ — the variance is about $10$. Such [[stat-overdispersion|overdispersion]] means the events are not independent at a constant rate: crashes cluster (one bad deploy causes many), or the rate differs between days (weekend traffic). The Poisson model will badly underestimate the chance of bad days. A common fix is the negative binomial, whose variance can exceed its mean.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'A quick sanity check for count data',
          text: 'Before fitting a Poisson model to telemetry, compare the sample mean and variance of the counts. A ratio near $1$ is consistent with Poisson; a ratio of $2$, $5$ or $10$ is a red flag. (The chi-square lesson later gives a formal goodness-of-fit test.)',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'truefalse',
      prompt: 'Weekly counts of a rare boss-spawn event average $3$ with a variance of about $12$. A Poisson model with $\\lambda = 3$ should describe these counts well.',
      answer: false,
      explanation: 'A Poisson count has variance equal to its mean, so $\\text{Pois}(3)$ predicts variance $3$, not $12$. A variance four times the mean signals overdispersion: the spawns cluster or the rate changes from week to week (events, patches, player numbers). The Poisson model would make extreme weeks look far rarer than they really are.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'The Poisson process: events in time and space',
      blocks: [
        {
          type: 'p',
          text: 'The slot argument works for **any** stretch of time, not just one day. Events that occur "completely at random" at a constant average rate form a [[stat-poisson-process|Poisson process]], and the count in every interval is Poisson.',
        },
        {
          type: 'figure',
          svg: TIMELINE_SVG,
          alt: 'A timeline from 0 to 6 minutes with ten orange dots marking player joins at irregular times, including three close together between minutes 2 and 3. Below, the counts per minute are 2, 1, 3, 1, 1, 2.',
          caption: 'A Poisson process of player joins. Events are scattered irregularly and sometimes clump by pure chance (three joins in minute $3$). The count in each one-minute window is $\\text{Pois}(\\lambda)$, and counts in non-overlapping windows are independent.',
          maxWidth: 500,
        },
        {
          type: 'definition',
          term: 'Poisson process with rate $\\lambda$',
          text: 'Events occur over time such that: (1) counts in non-overlapping intervals are independent; (2) the rate $\\lambda$ (events per unit time) is constant; (3) two events never occur at exactly the same instant. Then the number of events $N(t)$ in any interval of length $t$ satisfies $$N(t) \\sim \\text{Pois}(\\lambda t).$$',
        },
        {
          type: 'p',
          text: 'The essential move is **scaling the rate to the interval**: the Poisson parameter is the expected count in *that* interval. Players join at $3$ per minute, so in $5$ minutes the count is $\\text{Pois}(15)$; in $20$ seconds, $\\text{Pois}(1)$. The same idea works in space: bugs at $0.6$ per thousand lines give a $2500$-line file $\\text{Pois}(1.5)$ bugs; scratches on a display panel at $0.02$ per cm² give a $500$ cm² panel $\\text{Pois}(10)$.',
        },
        {
          type: 'derivation',
          title: 'Players joining a lobby',
          steps: [
            { tex: '\\lambda = 3 \\text{ per minute}, \\quad t = 5 \\text{ min} \\implies N \\sim \\text{Pois}(15)', why: 'Expected joins in the window: rate times length.' },
            { tex: 'P(N \\le 10) = \\sum_{k=0}^{10} \\frac{e^{-15}15^k}{k!} \\approx 0.118', why: 'Summed numerically (any statistics library does this in one call).' },
          ],
          result: 'If a match needs $11$ players, then about $12\\%$ of the time the lobby is still not full after $5$ minutes, even though $15$ joins are expected. Queue-time design is all about these tails.',
        },
        {
          type: 'callout',
          variant: 'analogy',
          title: 'The assumptions in plain words',
          text: 'Independence: one player joining does not make the next more or less likely. Constant rate: no rush hour within the window. No simultaneous events: friends who join as a party of four break this (one "event" brings four players), and so do crash cascades. When an assumption fails, model the thing that *is* Poisson — party arrivals, say — and build up from there.',
        },
        {
          type: 'p',
          text: 'One more connection to look forward to: the **gaps** between consecutive events of a Poisson process are random too. Their distribution — the exponential distribution — is the subject of the next unit.',
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'numeric',
      prompt: 'A codebase has on average $0.6$ bugs per thousand lines, scattered like a Poisson process. A new file has $2500$ lines. What is the probability that it contains **at least two** bugs? Four decimals.',
      hint: 'First scale the rate: $\\lambda = 0.6 \\times 2.5$. Then use the complement of $\\{0, 1\\}$.',
      label: '$P(X \\ge 2) =$',
      answer: '1 - 2.5*exp(-1.5)',
      answerTex: '1 - 2.5e^{-1.5} \\approx 0.4422',
      tolerance: 0.00006,
      explanation: '$2500$ lines is $2.5$ thousand lines, so $X \\sim \\text{Pois}(0.6 \\times 2.5) = \\text{Pois}(1.5)$. Then $P(X \\le 1) = e^{-1.5}(1 + 1.5) = 2.5e^{-1.5} \\approx 0.5578$, and $P(X \\ge 2) \\approx 0.4422$. Using $\\lambda = 0.6$ (forgetting to scale) would give $0.1219$ — the most common Poisson mistake.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'error',
      prompt: 'Players join a lobby as a Poisson process at $3$ per minute. A student computes the probability that exactly $2$ players join in a $20$-second window. Tap the first wrong line.',
      lines: [
        'Joins form a Poisson process with rate $3$ per minute.',
        'The count in the window is $X \\sim \\text{Pois}(3)$, since the rate is $3$.',
        '$P(X = 2) = \\dfrac{e^{-3}\\,3^2}{2!}$',
        '$P(X = 2) \\approx 0.2240$',
      ],
      errorLines: [2],
      explanation: 'The Poisson parameter must be the expected count **in the window**, not the rate per minute. Twenty seconds is $\\frac{1}{3}$ minute, so $X \\sim \\text{Pois}(3 \\cdot \\tfrac{1}{3}) = \\text{Pois}(1)$, and $P(X = 2) = \\frac{e^{-1}}{2} \\approx 0.1839$. Lines 3–4 evaluate the formula correctly for the wrong $\\lambda$.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'concept',
      title: 'The Poisson approximation to the binomial',
      blocks: [
        {
          type: 'p',
          text: 'The limit also runs the other way, as a computational shortcut: when $n$ is large and $p$ is small, $\\text{Bin}(n, p) \\approx \\text{Pois}(np)$. Before computers this saved enormous arithmetic ($\\binom{1000}{3}$ is unpleasant by hand); today it is still the fastest way to *reason* about rare events at scale.',
        },
        {
          type: 'graph',
          x: [-0.8, 15.8],
          y: [0, 0.45],
          xStep: 1,
          yStep: 0.1,
          height: 270,
          segments: [
            ...ks(15).map((k) => ({ from: [k - 0.13, 0] as [number, number], to: [k - 0.13, binStem(k)] as [number, string], color: 'red' as const })),
            ...ks(15).map((k) => ({ from: [k + 0.13, 0] as [number, number], to: [k + 0.13, poisStem(k)] as [number, string], color: 'blue' as const })),
          ],
          points: [
            ...ks(15).map((k) => ({ x: k - 0.13, y: binStem(k), color: 'red' as const })),
            ...ks(15).map((k) => ({ x: k + 0.13, y: poisStem(k), color: 'blue' as const })),
          ],
          sliders: [
            { name: 'n', min: 10, max: 200, step: 1, value: 10, label: 'trials $n$' },
            { name: 'l', min: 1, max: 8, step: 0.5, value: 2, label: 'mean $\\lambda = np$' },
          ],
          readouts: [
            { label: '$p = \\lambda / n =$', expr: 'l/n', digits: 4 },
            { label: 'binomial $P(X = 0) = (1 - p)^n =$', expr: '(1 - l/n)^n', digits: 4 },
            { label: 'Poisson $P(X = 0) = e^{-\\lambda} =$', expr: 'exp(-l)', digits: 4 },
            { label: 'error bound $2np^2 = 2\\lambda^2/n =$', expr: '2l^2/n', digits: 4 },
          ],
          caption: 'Red: $\\text{Bin}(n, \\lambda/n)$. Blue: $\\text{Pois}(\\lambda)$. With $n = 10$ and $\\lambda = 2$ ($p = 0.2$) the binomial is visibly narrower. Slide $n$ up to $200$ ($p = 0.01$) and the stems become nearly identical. Raising $\\lambda$ with $n$ fixed makes $p$ larger and the match worse.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'When to use it',
          text: 'A common rule of thumb: $n \\ge 20$ and $p \\le 0.05$ (or $n \\ge 100$ and $np \\le 10$ for very good accuracy). The approximation is about **small $p$**, not just large $n$: $\\text{Bin}(1000, 0.5)$ is not close to $\\text{Pois}(500)$ — its variance is $250$, not $500$.',
        },
        {
          type: 'derivation',
          title: 'A thousand players, a rare crash',
          steps: [
            { tex: 'X \\sim \\text{Bin}(1000, 0.002) \\approx \\text{Pois}(2)', why: 'Each of $1000$ concurrent players independently hits a rare crash with probability $0.002$ this hour; $np = 2$.' },
            { tex: 'P(X = 0) \\approx e^{-2} \\approx 0.1353 \\quad (\\text{exact: } 0.998^{1000} \\approx 0.1351)', why: 'Poisson versus the exact binomial — they agree to three decimals.' },
            { tex: 'P(X \\ge 5) \\approx 1 - e^{-2}\\left(1 + 2 + 2 + \\tfrac{4}{3} + \\tfrac{2}{3}\\right) = 1 - 7e^{-2} \\approx 0.0527', why: 'Complement of $k = 0, \\dots, 4$, whose terms $2^k/k!$ are $1, 2, 2, \\frac{4}{3}, \\frac{2}{3}$. The exact binomial value is $0.0525$.' },
          ],
          result: 'An hour with five or more crash reports happens about once a day (one hour in nineteen) purely by chance — worth knowing before paging an engineer for it.',
        },
        {
          type: 'deepdive',
          title: 'How good is the approximation? Le Cam\'s bound',
          blocks: [
            {
              type: 'p',
              text: 'A theorem of Lucien Le Cam bounds the total error over all $k$ at once: if $X$ is a sum of independent Bernoulli($p_i$) variables (the $p_i$ may even differ) and $\\lambda = \\sum p_i$, then',
            },
            { type: 'math', tex: '\\sum_{k=0}^{\\infty}\\left|P(X = k) - \\frac{e^{-\\lambda}\\lambda^k}{k!}\\right| < 2\\sum_i p_i^2 \\quad (= 2np^2 \\text{ when all } p_i = p)' },
            {
              type: 'p',
              text: 'For $1000$ players with $p = 0.002$ the bound is $2 \\cdot 1000 \\cdot 0.002^2 = 0.008$, so no probability computed from the Poisson can be off by more than $0.008$. The bound depends on $np^2 = \\lambda p$: with $\\lambda$ fixed, smaller $p$ means a better approximation. The graph\'s last readout shows it.',
            },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'numeric',
      prompt: 'A gacha banner gives a featured character with probability $0.5\\%$ per pull. Across $400$ independent pulls, use the **Poisson approximation** to find the probability of getting exactly $3$ featured characters. Four decimals.',
      hint: '$\\lambda = np = 400 \\times 0.005$, then $P(X = 3) = e^{-\\lambda}\\lambda^3/3!$.',
      label: '$P(X = 3) \\approx$',
      answer: 'exp(-2)*2^3/6',
      answerTex: '\\frac{e^{-2}\\,2^3}{3!} \\approx 0.1804',
      tolerance: 0.0006,
      explanation: '$\\lambda = 400 \\times 0.005 = 2$, so $P(X = 3) \\approx \\frac{e^{-2} \\cdot 8}{6} = \\frac{4}{3}e^{-2} \\approx 0.1804$. The exact binomial value is $\\binom{400}{3}(0.005)^3(0.995)^{397} \\approx 0.1809$, within Le Cam\'s bound $2 \\cdot 400 \\cdot 0.005^2 = 0.02$ (and in fact much closer).',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'concept',
      title: 'Sums of independent Poisson counts',
      blocks: [
        {
          type: 'p',
          text: 'Server A crashes at $1.5$ per day and server B at $1.0$ per day, independently. The **total** crashes per day should be Poisson with rate $2.5$ — merging two independent random streams of events gives a random stream at the combined rate. Here is the proof.',
        },
        {
          type: 'theorem',
          name: 'Sum of independent Poissons',
          tex: 'X \\sim \\text{Pois}(\\lambda_1),\\ Y \\sim \\text{Pois}(\\lambda_2) \\text{ independent} \\implies X + Y \\sim \\text{Pois}(\\lambda_1 + \\lambda_2)',
        },
        {
          type: 'derivation',
          title: 'Proof by convolution',
          steps: [
            { tex: 'P(X + Y = n) = \\sum_{k=0}^{n} P(X = k)\\,P(Y = n - k)', why: 'Split the event by the value of $X$: the cases $X = k, Y = n - k$ are disjoint, and independence lets us multiply.' },
            { tex: '= \\sum_{k=0}^{n} \\frac{e^{-\\lambda_1}\\lambda_1^k}{k!}\\cdot\\frac{e^{-\\lambda_2}\\lambda_2^{n-k}}{(n-k)!}', why: 'Substitute both PMFs.' },
            { tex: '= \\frac{e^{-(\\lambda_1 + \\lambda_2)}}{n!}\\sum_{k=0}^{n}\\binom{n}{k}\\lambda_1^k\\lambda_2^{n-k}', why: 'Factor out the exponentials and multiply and divide by $n!$, since $\\frac{n!}{k!(n-k)!} = \\binom{n}{k}$.' },
            { tex: '= \\frac{e^{-(\\lambda_1 + \\lambda_2)}(\\lambda_1 + \\lambda_2)^n}{n!}', why: 'The [[binomial-theorem|binomial theorem]] collapses the sum to $(\\lambda_1 + \\lambda_2)^n$.' },
          ],
          result: 'That is the $\\text{Pois}(\\lambda_1 + \\lambda_2)$ PMF. By induction, any finite sum of independent Poissons is Poisson with the rates added — and the mean and variance add, as they must.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'The reverse: thinning',
          text: 'Splitting works too. If crashes arrive as $\\text{Pois}(\\lambda)$ and each one independently produces a usable dump file with probability $q$, the number of dump files is $\\text{Pois}(\\lambda q)$, and the crashes without dumps are an independent $\\text{Pois}(\\lambda(1-q))$. Merging and splitting make Poisson processes the building blocks of queueing models for servers and matchmaking.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Independence matters, and only Poissons add this way',
          text: 'If server B tends to crash when server A does (a shared database), the total is not Poisson: its variance exceeds its mean. And adding a Poisson to a non-Poisson count gives no simple answer. The general machinery for sums of random variables comes in the Joint Distributions unit.',
        },
      ],
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'numeric',
      prompt: 'Server A crashes at an average of $1.5$ times per day and server B at $1.0$ per day, independently, each as a Poisson count. What is the probability of exactly $2$ crashes **in total** on a given day? Four decimals.',
      hint: 'The total is $\\text{Pois}(1.5 + 1.0)$.',
      label: '$P(X + Y = 2) =$',
      answer: 'exp(-2.5)*2.5^2/2',
      answerTex: '\\frac{e^{-2.5}(2.5)^2}{2!} \\approx 0.2565',
      tolerance: 0.00006,
      explanation: 'The total is $\\text{Pois}(2.5)$, so $P = \\frac{e^{-2.5}(2.5)^2}{2} = 3.125e^{-2.5} \\approx 0.2565$. You could also add the three cases $(2, 0), (1, 1), (0, 2)$: $e^{-1.5}\\frac{1.5^2}{2}e^{-1} + 1.5e^{-1.5}e^{-1} + e^{-1.5}\\frac{1}{2}e^{-1} = e^{-2.5}(1.125 + 1.5 + 0.5)$ — the same $3.125e^{-2.5}$, as the theorem promises.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'mcq',
      prompt: 'Which of these counts is the **worst** fit for a Poisson model?',
      options: [
        { text: 'The number of typos per page in a long design document', why: 'Typos are rare, scattered and roughly independent, at a fairly steady rate per page: a textbook Poisson example.' },
        { text: 'The number of heads in $10$ coin flips', correct: true, why: 'There is a fixed number of trials ($10$), the count can never exceed $10$, and $p = 0.5$ is not small. This is exactly $\\text{Bin}(10, 0.5)$, whose variance $2.5$ is half its mean $5$ — far from Poisson.' },
        { text: 'The number of players who join a lobby in a quiet minute', why: 'Arrivals from many independent players, each unlikely to join in any given second, are the standard Poisson process (as long as parties don\'t join together).' },
        { text: 'The number of radioactive decays a detector records in one second', why: 'Radioactive decay is the classic physical Poisson process: an enormous number of atoms, each with a tiny chance of decaying, independently.' },
      ],
      explanation: 'Poisson counts come from many opportunities with a small chance each, at a constant rate, with no fixed upper limit. Coin flips have a small fixed $n$ and a large $p$; the right model is the binomial. A quick test: Poisson needs variance $\\approx$ mean, but $\\text{Bin}(10, 0.5)$ has mean $5$ and variance $2.5$.',
    },
  ],
  takeaways: [
    '$X \\sim \\text{Pois}(\\lambda)$: $P(X = k) = e^{-\\lambda}\\lambda^k/k!$ for $k = 0, 1, 2, \\dots$ It models counts of independent events at a constant rate — crashes, bugs, arrivals — with no fixed number of trials.',
    'It is the limit of $\\text{Bin}(n, \\lambda/n)$: many opportunities, each unlikely, with $np = \\lambda$ fixed. So $\\text{Bin}(n, p) \\approx \\text{Pois}(np)$ when $n$ is large and $p$ small (error at most $2np^2$).',
    'Mean and variance are both $\\lambda$. Count data with variance much larger than the mean is overdispersed, and a Poisson model will underestimate extremes.',
    'In a Poisson process with rate $\\lambda$, the count in an interval of length $t$ is $\\text{Pois}(\\lambda t)$: always scale the rate to the interval (time, lines of code, area).',
    'Independent Poisson counts add: $\\text{Pois}(\\lambda_1) + \\text{Pois}(\\lambda_2) = \\text{Pois}(\\lambda_1 + \\lambda_2)$, proved by convolution and the binomial theorem.',
  ],
  reading: [
    {
      title: 'Wikipedia — Poisson distribution',
      url: 'https://en.wikipedia.org/wiki/Poisson_distribution',
      source: 'wikipedia',
      note: 'Derivations, properties, the history (Bortkiewicz\'s horse-kick deaths) and a long list of applications.',
    },
    {
      title: 'Wikipedia — Poisson point process',
      url: 'https://en.wikipedia.org/wiki/Poisson_point_process',
      source: 'wikipedia',
      note: 'The process view in time and space, including merging (superposition) and thinning.',
    },
    {
      title: 'OpenStax — Introductory Statistics',
      url: 'https://openstax.org/details/books/introductory-statistics',
      source: 'openstax',
      note: 'The Poisson section of the discrete random variables chapter has many applied word problems with worked solutions.',
    },
    {
      title: 'MIT OCW 18.05 — Introduction to Probability and Statistics',
      url: 'https://ocw.mit.edu/courses/18-05-introduction-to-probability-and-statistics-spring-2014/',
      source: 'other',
      note: 'Notes and problem sets that use the Poisson distribution alongside the binomial and geometric.',
    },
  ],
};
