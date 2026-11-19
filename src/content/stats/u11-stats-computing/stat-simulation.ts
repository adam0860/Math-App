import type { Lesson } from '../../types';

// Histogram (density scale) of 5000 Box–Muller normals from mt19937_64(5), bins of width 0.5 on [-4, 4].
const bmHist = [0.0004, 0.0012, 0.01, 0.0304, 0.0864, 0.1948, 0.3104, 0.3672, 0.3772, 0.2964, 0.1848, 0.0876, 0.0396, 0.0108, 0.0008, 0.002];
const histSegments = bmHist.flatMap((h, i) => {
  const a = -4 + 0.5 * i;
  const b = a + 0.5;
  return [
    { from: [a, 0] as [number, number], to: [a, h] as [number, number], color: 'blue' as const },
    { from: [a, h] as [number, number], to: [b, h] as [number, number], color: 'blue' as const },
    { from: [b, h] as [number, number], to: [b, 0] as [number, number], color: 'blue' as const },
  ];
});

export const lesson: Lesson = {
  id: 'stat-simulation',
  title: 'Simulation and Generating Random Variables',
  summary: 'How a computer turns 64 random bits into any distribution you need: seeded pseudorandom generators and unbiased integers, inverse transform sampling for exponentials and loot tables, Box–Muller normals, rejection sampling, the O(1) alias method for weighted drops, Monte Carlo estimation with its 1/√n error, and variance reduction — all in deterministic, runnable C++.',
  minutes: 23,
  objectives: [
    'Explain how a seeded pseudorandom generator produces reproducible uniforms, build a uniform double from 53 random bits, and avoid modulo bias',
    'Generate exponential and discrete (loot table) random variables by inverse transform sampling, and prove why it works',
    'Derive the Box–Muller transform from polar coordinates and use it to generate normal random variables',
    'Apply rejection sampling and the alias method, and state their costs (acceptance rate $1/M$; $O(1)$ per draw)',
    'Estimate an expectation or integral by Monte Carlo with a standard error, plan the sample size from the $1/\\sqrt{n}$ law, and reduce variance with antithetic variates',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Pseudorandom numbers and seeds',
      blocks: [
        {
          type: 'p',
          text: 'Every simulation in this course — bootstrap resamples, Monte Carlo $p$-values, the Bayesian A/B test — starts from a stream of uniform random numbers. A computer cannot flip coins; it runs a [[dm-pseudorandom-generator|pseudorandom number generator]] (PRNG): a deterministic state machine whose outputs pass statistical tests for randomness. You met the classic linear congruential generator in Discrete Math\'s lesson *RSA, Hashing and Pseudorandom Numbers*.',
        },
        {
          type: 'p',
          text: 'C++\'s `std::mt19937_64` (the 64-bit Mersenne Twister) keeps $312$ 64-bit words of state and has period $2^{19937} - 1$, so it never repeats in practice. The **seed** fixes the starting state, and therefore the entire stream. That is a feature: the same seed reproduces a bug, a replay, a procedurally generated level or a failing unit test exactly.',
        },
        {
          type: 'heading',
          text: 'From bits to the numbers you need',
        },
        {
          type: 'list',
          items: [
            '**Uniform on $[0, 1)$**: keep the top $53$ bits (a `double`\'s precision) and scale: `(rng() >> 11) * 0x1.0p-53`. Every result is a multiple of $2^{-53}$, never $1$. Dividing a full 64-bit value by $2^{64}$ instead can round up to exactly $1.0$.',
            '**Integer in $\\{0, \\dots, n-1\\}$**: `rng() % n` is biased unless $n$ divides $2^{64}$, because the raw range does not split evenly into $n$ blocks. Fix it by rejecting the few raw values above the largest multiple of $n$ and drawing again.',
            '**Every other distribution**: transform uniforms. The rest of this lesson is the toolbox.',
          ],
        },
        {
          type: 'code',
          title: 'seeds.cpp',
          runnable: true,
          code: `#include <cstdint>
#include <cstdio>
#include <random>

// A uniform double in [0, 1): keep the top 53 bits (a double's precision).
double uniform01(std::mt19937_64& rng) { return (rng() >> 11) * 0x1.0p-53; }

// An unbiased integer in [0, n): reject the few raw values that would
// make some remainders more common than others.
std::uint64_t randBelow(std::mt19937_64& rng, std::uint64_t n) {
    const std::uint64_t limit = UINT64_MAX - UINT64_MAX % n;   // a multiple of n
    std::uint64_t r;
    do { r = rng(); } while (r >= limit);
    return r % n;
}

int main() {
    for (int run = 1; run <= 2; ++run) {
        std::mt19937_64 rng(12345);                 // same seed, same stream
        std::printf("run %d:", run);
        for (int i = 0; i < 4; ++i) std::printf(" %.6f", uniform01(rng));
        std::printf("  d6:");
        for (int i = 0; i < 6; ++i) std::printf(" %d", int(randBelow(rng, 6)) + 1);
        std::printf("\\n");
    }
    std::mt19937_64 other(12346);                   // a different seed
    std::printf("seed 12346: %.6f\\n", uniform01(other));
}`,
          output: `run 1: 0.357630 0.400443 0.689383 0.559736  d6: 3 6 3 3 2 4
run 2: 0.357630 0.400443 0.689383 0.559736  d6: 3 6 3 3 2 4
seed 12346: 0.523137`,
          annotations: [
            { lines: 6, text: 'The shift keeps $53$ bits; `0x1.0p-53` is $2^{-53}$ written as a hexadecimal floating-point literal.' },
            { lines: '11-13', text: '`limit` is the largest multiple of $n$ that fits (here $n = 6$). Raw values at or above it are thrown away, so each remainder comes from exactly `limit / n` raw values. A redraw happens with probability below $n/2^{64}$.' },
            { lines: 19, text: 'Seeding afresh reproduces the whole stream: both runs print the same numbers. A seed one larger gives an unrelated stream.' },
          ],
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Why this course builds its own transforms',
          text: 'The C++ standard specifies `mt19937_64` bit for bit, but **not** `std::uniform_real_distribution`, `std::normal_distribution` and friends: libstdc++, libc++ and MSVC produce different numbers from the same seed. For lockstep multiplayer, replays and cross-platform tests you need identical results everywhere, so engines write their own transforms from raw bits — exactly what this lesson teaches. (And never use Mersenne Twister for anything secret: $312$ consecutive outputs reveal its state.)',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'numeric',
      prompt: 'An old handheld\'s generator returns integers $r \\in \\{0, 1, \\dots, 255\\}$, each with probability $\\frac{1}{256}$. A die roll is computed as `r % 6 + 1`. What is the probability of rolling a $1$? Exact fraction or decimal to $4$ places.',
      hint: '$256 = 6 \\cdot 42 + 4$. Which remainders get one extra raw value?',
      label: '$P(\\text{roll} = 1) =$',
      answer: '43/256',
      tolerance: 0.00005,
      answerTex: '\\tfrac{43}{256} \\approx 0.1680',
      explanation: 'The values $0, \\dots, 251$ form $42$ complete blocks of $6$, so each remainder gets $42$ of them. The leftover values $252, 253, 254, 255$ have remainders $0, 1, 2, 3$, giving those faces a $43$rd value. A roll of $1$ is remainder $0$: probability $\\frac{43}{256} \\approx 0.1680$, versus $\\frac{42}{256} \\approx 0.1641$ for a $5$ or $6$ — a $2.4\\%$ relative bias that players in a long campaign would actually feel. With 64-bit output the same bias is about $10^{-18}$, but rejection removes it entirely.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Inverse transform sampling',
      blocks: [
        {
          type: 'p',
          text: 'The most general trick, [[stat-inverse-transform-sampling|inverse transform sampling]]: feed a uniform number through the inverse of the CDF you want. Think of the CDF $F$ as a staircase from $0$ to $1$; pick a random height $u$, walk across until you hit the curve, and read off $x$. Steep parts of $F$ (where the density is high) catch many heights, so values land there often.',
        },
        {
          type: 'theorem',
          name: 'Inverse transform sampling',
          tex: 'U \\sim \\text{Uniform}(0, 1), \\ \\ X = F^{-1}(U) \\implies P(X \\le x) = F(x)',
          text: 'for any continuous, strictly increasing CDF $F$ (so $F^{-1}$ exists). For a discrete distribution, let $X$ be the smallest value $x$ with $F(x) > U$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Proof in one line',
          text: 'Since $F$ is increasing, $F^{-1}(U) \\le x$ exactly when $U \\le F(x)$. So $P(X \\le x) = P(U \\le F(x)) = F(x)$, because a uniform $U$ falls below any level $c \\in [0, 1]$ with probability $c$. The [[inverse-function|inverse function]] does all the work.',
        },
        {
          type: 'derivation',
          title: 'Sampling $\\text{Exp}(\\lambda)$ (rate $\\lambda$, mean $1/\\lambda$)',
          steps: [
            { tex: 'u = F(x) = 1 - e^{-\\lambda x}', why: 'The exponential CDF for $x \\ge 0$. We solve for $x$ in terms of $u$.' },
            { tex: 'e^{-\\lambda x} = 1 - u', why: 'Isolate the exponential.' },
            { tex: '-\\lambda x = \\ln(1 - u)', why: 'Take the [[natural-logarithm|natural log]] of both sides ($1 - u > 0$).' },
            { tex: 'x = F^{-1}(u) = -\\frac{\\ln(1 - u)}{\\lambda}', why: 'Divide by $-\\lambda$. Since $1 - U$ is also uniform, $-\\ln(U)/\\lambda$ works too — but with $U \\in [0, 1)$, only $1 - U$ is guaranteed nonzero, so $\\ln$ stays finite.' },
          ],
          result: 'One logarithm per sample gives respawn timers, times between server requests, or time to the next crash in a Poisson process.',
        },
        {
          type: 'graph',
          x: [0, 8],
          y: [0, 1.1],
          xStep: 1,
          yStep: 0.25,
          height: 260,
          functions: [
            { expr: '1 - exp(-l*x)', color: 'blue', label: 'CDF $F(x) = 1 - e^{-\\lambda x}$', domain: [0, 8] },
            { expr: 'l*exp(-l*x)', color: 'gray', dashed: true, label: 'density $\\lambda e^{-\\lambda x}$', domain: [0, 8] },
          ],
          segments: [
            { from: [0, 'u'], to: ['-ln(1 - u)/l', 'u'], color: 'orange', arrow: true },
            { from: ['-ln(1 - u)/l', 'u'], to: ['-ln(1 - u)/l', 0], color: 'orange', arrow: true },
          ],
          sliders: [
            { name: 'u', min: 0.01, max: 0.99, step: 0.01, value: 0.7, label: 'uniform draw $u$' },
            { name: 'l', min: 0.2, max: 1, step: 0.05, value: 0.5, label: 'rate $\\lambda$' },
          ],
          readouts: [{ label: '$x = -\\ln(1 - u)/\\lambda =$', expr: '-ln(1 - u)/l', digits: 3 }],
          caption: 'Follow the orange path: height $u$ across to the CDF, then down to $x$. Slide $u$ evenly from $0.01$ to $0.99$ and watch $x$: it moves slowly at first (dense region near $0$) and then races off to the right (the long tail).',
        },
        {
          type: 'heading',
          text: 'Discrete version: loot tables',
        },
        {
          type: 'p',
          text: 'For a drop table common $0.70$, rare $0.20$, epic $0.08$, legendary $0.02$, store the cumulative probabilities $0.70, 0.90, 0.98, 1.00$ and return the first tier whose cumulative value exceeds $u$. A linear scan costs $O(n)$; since the cumulative table is sorted, a [[dm-binary-search|binary search]] costs $O(\\log n)$.',
        },
        {
          type: 'code',
          title: 'inverse_transform.cpp',
          runnable: true,
          code: `#include <algorithm>
#include <cmath>
#include <cstdio>
#include <random>
#include <vector>

std::mt19937_64 rng(99);
double uniform01() { return (rng() >> 11) * 0x1.0p-53; }

// Exp(rate): solve u = F(x) = 1 - e^(-rate x) for x.
double exponential(double rate) { return -std::log(1.0 - uniform01()) / rate; }

int main() {
    const int n = 1'000'000;
    double sum = 0;
    int over4 = 0;
    for (int i = 0; i < n; ++i) {
        double x = exponential(0.5);                  // mean 1/0.5 = 2 seconds
        sum += x;
        if (x > 4) ++over4;
    }
    std::printf("Exp(0.5): mean %.3f (exact 2), P(X > 4) %.4f (exact %.4f)\\n",
                sum / n, double(over4) / n, std::exp(-2.0));

    // Discrete inverse transform: cumulative table + binary search.
    const char* names[] = {"common", "rare", "epic", "legendary"};
    const std::vector<double> cdf = {0.70, 0.90, 0.98, 1.00};   // F at each tier
    int count[4] = {0, 0, 0, 0};
    for (int i = 0; i < n; ++i) {
        double u = uniform01();
        // first tier whose cumulative probability exceeds u
        int tier = int(std::upper_bound(cdf.begin(), cdf.end(), u) - cdf.begin());
        ++count[tier];
    }
    for (int k = 0; k < 4; ++k)
        std::printf("%-9s %.4f\\n", names[k], double(count[k]) / n);
}`,
          output: `Exp(0.5): mean 2.000 (exact 2), P(X > 4) 0.1353 (exact 0.1353)
common    0.7008
rare      0.2000
epic      0.0796
legendary 0.0196`,
          annotations: [
            { lines: 11, text: 'The derivation above, in one line. `1.0 - uniform01()` lies in $(0, 1]$, so the logarithm is finite.' },
            { lines: 22, text: '$P(X > 4) = e^{-0.5 \\cdot 4} = e^{-2}$ for the exponential; the simulation agrees to four places.' },
            { lines: 32, text: '`std::upper_bound` returns the first element **greater than** $u$ — exactly "the smallest $x$ with $F(x) > u$". It is a binary search.' },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'expr',
      prompt: 'A spawner places enemies at distance $X \\in [0, 1]$ (in arena radii) with density $f(x) = 2x$, so more enemies appear near the edge. Its CDF is $F(x) = x^2$. Give the inverse-transform formula $X = F^{-1}(u)$.',
      hint: 'Solve $u = x^2$ for $x \\ge 0$.',
      label: '$F^{-1}(u) =$',
      answer: 'sqrt(u)',
      variables: ['u'],
      domain: [0.01, 1],
      answerTex: '\\sqrt{u}',
      explanation: '$F(x) = \\int_0^x 2s\\,ds = x^2$. Setting $u = x^2$ and taking the nonnegative root gives $X = \\sqrt{U}$. Check: $P(\\sqrt{U} \\le x) = P(U \\le x^2) = x^2$. This is also how you pick a **uniform point in a disc**: radius $\\sqrt{U}$ (not $U$, which would crowd points at the center) and a uniform angle.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'error',
      prompt: 'A programmer derives a sampler for $\\text{Exp}(\\lambda)$ with rate $\\lambda = 4$ (mean $0.25$ s between network packets). Tap the first wrong line.',
      lines: [
        'Set $u = F(x) = 1 - e^{-4x}$.',
        'Then $e^{-4x} = 1 - u$.',
        'Taking logs: $-4x = \\ln(1 - u)$.',
        'So $x = -4\\ln(1 - u)$.',
        'Check the mean: $E[X] = 4$ s, matching the rate.',
      ],
      errorLines: [4],
      explanation: 'From $-4x = \\ln(1 - u)$ you must **divide** by $-4$: $x = -\\frac{\\ln(1 - u)}{4}$. Multiplying gives samples with mean $4$ s — sixteen times too large — and the last line "confirms" the bug by confusing the rate with the mean. In the rate convention, $\\text{Exp}(\\lambda)$ has mean $1/\\lambda = 0.25$ s. Simulating and printing the sample mean catches this mistake immediately.',
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'concept',
      title: 'Normal random variables: the Box–Muller transform',
      blocks: [
        {
          type: 'p',
          text: 'Inverse transform for the normal needs $\\Phi^{-1}$, which has no closed form (it can be approximated numerically, but that is slow and fiddly). Box and Muller (1958) found a beautiful detour, the [[stat-box-muller|Box–Muller transform]]: two normals are easier than one, because a **pair** of independent standard normals is simple in polar coordinates.',
        },
        {
          type: 'derivation',
          title: 'Deriving the Box–Muller transform',
          steps: [
            { tex: 'f(z_1, z_2) = \\frac{1}{\\sqrt{2\\pi}}e^{-z_1^2/2}\\cdot\\frac{1}{\\sqrt{2\\pi}}e^{-z_2^2/2} = \\frac{1}{2\\pi}e^{-(z_1^2 + z_2^2)/2}', why: 'Independent variables: the joint density is the product of the two standard normal densities. It depends only on the distance from the origin.' },
            { tex: 'z_1 = r\\cos\\theta, \\ z_2 = r\\sin\\theta, \\quad dz_1\\,dz_2 = r\\,dr\\,d\\theta', why: 'Switch to [[polar-coordinates|polar coordinates]]; the area element picks up the factor $r$.' },
            { tex: 'f(r, \\theta) = \\underbrace{\\frac{1}{2\\pi}}_{\\theta \\text{ uniform on } [0, 2\\pi)} \\cdot \\underbrace{r\\,e^{-r^2/2}}_{\\text{density of } R}', why: 'The joint density of $(R, \\Theta)$ factors into a function of $\\theta$ times a function of $r$, so the angle and radius are **independent**, and the angle is uniform.' },
            { tex: 'P(R > r) = \\int_r^\\infty s\\,e^{-s^2/2}\\,ds = e^{-r^2/2}', why: 'Substitute $v = s^2/2$, $dv = s\\,ds$.' },
            { tex: 'e^{-R^2/2} = U_1 \\implies R = \\sqrt{-2\\ln U_1}', why: 'Inverse transform on the tail: $P(R > r)$ is uniform when evaluated at $R$, so set it equal to a uniform $U_1$ and solve.' },
            { tex: 'Z_1 = \\sqrt{-2\\ln U_1}\\cos(2\\pi U_2), \\quad Z_2 = \\sqrt{-2\\ln U_1}\\sin(2\\pi U_2)', why: 'Angle $\\Theta = 2\\pi U_2$, then back to Cartesian coordinates.' },
          ],
          result: 'Two independent uniforms give two independent $N(0, 1)$ values. For $N(\\mu, \\sigma^2)$ return $\\mu + \\sigma Z$.',
        },
        {
          type: 'graph',
          x: [-4, 4],
          y: [0, 0.45],
          xStep: 1,
          yStep: 0.1,
          height: 240,
          segments: histSegments,
          functions: [{ expr: 'normpdf(x)', color: 'red', label: 'standard normal density $\\varphi(z)$' }],
          caption: 'A density-scaled histogram (blue) of $5000$ Box–Muller values against the $N(0, 1)$ density. The bars wobble around the curve by sampling noise of the size the $1/\\sqrt{n}$ law predicts.',
        },
        {
          type: 'code',
          title: 'box_muller.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdio>
#include <numbers>
#include <random>

std::mt19937_64 rng(31);
double uniform01() { return (rng() >> 11) * 0x1.0p-53; }

// Box-Muller: two uniforms in, two independent N(0, 1) values out.
void boxMuller(double& z1, double& z2) {
    double u1 = 1.0 - uniform01();                 // in (0, 1], so log(u1) is finite
    double u2 = uniform01();
    double r = std::sqrt(-2.0 * std::log(u1));     // radius: P(R > r) = e^(-r^2/2)
    double theta = 2.0 * std::numbers::pi * u2;    // angle: uniform on [0, 2pi)
    z1 = r * std::cos(theta);
    z2 = r * std::sin(theta);
}

int main() {
    const int pairs = 500'000;
    double sum = 0, sumSq = 0, sumProd = 0;
    int within[4] = {0, 0, 0, 0};
    for (int i = 0; i < pairs; ++i) {
        double z1, z2;
        boxMuller(z1, z2);
        sumProd += z1 * z2;
        for (double z : {z1, z2}) {
            sum += z;
            sumSq += z * z;
            for (int k = 1; k <= 3; ++k) if (std::abs(z) < k) ++within[k];
        }
    }
    const int n = 2 * pairs;
    double mean = sum / n, sd = std::sqrt((sumSq - n * mean * mean) / (n - 1));
    std::printf("n = %d  mean %.4f  sd %.3f  E[Z1 Z2] %.3f\\n", n, mean, sd, sumProd / pairs);
    for (int k = 1; k <= 3; ++k)
        std::printf("within %d sd: %.4f\\n", k, double(within[k]) / n);

    // Any normal: X = mu + sigma Z.  Frame times with mu = 16.7 ms, sigma = 1.2 ms:
    double z1, z2;
    boxMuller(z1, z2);
    std::printf("two frame times: %.2f ms, %.2f ms\\n", 16.7 + 1.2 * z1, 16.7 + 1.2 * z2);
}`,
          output: `n = 1000000  mean -0.0004  sd 1.001  E[Z1 Z2] -0.002
within 1 sd: 0.6821
within 2 sd: 0.9544
within 3 sd: 0.9972
two frame times: 16.84 ms, 17.98 ms`,
          annotations: [
            { lines: '11-16', text: 'The derivation\'s last line. $u_1$ comes from $1 - U$ so it is never $0$.' },
            { lines: 26, text: '$E[Z_1Z_2] \\approx 0$: the two outputs of one call are uncorrelated (in fact independent), so both can be used.' },
            { lines: '36-37', text: 'The empirical rule: $68.27\\%$, $95.45\\%$, $99.73\\%$ within $1, 2, 3$ standard deviations. The simulation agrees to about three decimals.' },
          ],
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Faster variants',
          text: 'The **Marsaglia polar method** avoids $\\sin$ and $\\cos$ by picking a random point in the unit disc (rejecting points outside it). High-performance libraries use the **ziggurat** algorithm, a rejection sampler built from layered rectangles. All produce exact normals; they differ only in speed.',
        },
      ],
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'numeric',
      prompt: 'Box–Muller receives $u_1 = 0.5$ and $u_2 = 0.125$. Compute $Z_1 = \\sqrt{-2\\ln u_1}\\cos(2\\pi u_2)$. Decimal to $4$ places.',
      hint: '$2\\pi \\cdot 0.125 = \\pi/4$, and $\\cos(\\pi/4) = \\frac{\\sqrt{2}}{2}$.',
      label: '$Z_1 =$',
      answer: 'sqrt(ln(2))',
      tolerance: 0.00006,
      answerTex: '\\sqrt{\\ln 2} \\approx 0.8326',
      explanation: '$R = \\sqrt{-2\\ln 0.5} = \\sqrt{2\\ln 2} \\approx 1.1774$ and $\\Theta = 2\\pi(0.125) = \\pi/4$. So $Z_1 = \\sqrt{2\\ln 2}\\cdot\\frac{\\sqrt{2}}{2} = \\sqrt{\\ln 2} \\approx 0.8326$, and $Z_2 = R\\sin(\\pi/4)$ is the same value. (Equal outputs are a coincidence of this angle; over many draws $Z_1$ and $Z_2$ are independent.)',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'concept',
      title: 'Rejection sampling',
      blocks: [
        {
          type: 'p',
          text: 'Sometimes $F^{-1}$ is hopeless: the CDF of the density $f(x) = 6x(1-x)$ on $[0, 1]$ (a Beta$(2, 2)$, handy for "usually mid-range" random stats) is $3x^2 - 2x^3$, and inverting it means solving a cubic for every sample. [[stat-rejection-sampling|Rejection sampling]] needs only the ability to **evaluate** $f$.',
        },
        {
          type: 'steps',
          items: [
            { title: 'Choose an envelope', text: 'An easy density $g$ and a constant $M$ with $f(x) \\le M g(x)$ for all $x$. Here $g = 1$ on $[0, 1]$ and $M = 1.5$ (the maximum of $f$, at $x = \\frac{1}{2}$).' },
            { title: 'Propose', text: 'Draw $X$ from $g$ and an independent $U \\sim \\text{Uniform}(0, 1)$.' },
            { title: 'Accept or reject', text: 'If $U \\le \\frac{f(X)}{M g(X)}$, return $X$. Otherwise go back to step 2.' },
          ],
        },
        {
          type: 'derivation',
          title: 'Why accepted values have density $f$',
          steps: [
            { tex: 'P(X \\le x \\text{ and accepted}) = \\int_{-\\infty}^{x} g(s)\\cdot\\frac{f(s)}{M g(s)}\\, ds = \\frac{F(x)}{M}', why: 'A proposal lands near $s$ with density $g(s)$ and is then accepted with probability $f(s)/(Mg(s))$. The $g$\'s cancel.' },
            { tex: 'P(\\text{accepted}) = \\frac{F(\\infty)}{M} = \\frac{1}{M}', why: 'Let $x \\to \\infty$; $F(\\infty) = 1$ because $f$ is a density.' },
            { tex: 'P(X \\le x \\mid \\text{accepted}) = \\frac{F(x)/M}{1/M} = F(x)', why: 'Conditional probability. The accepted values have exactly the CDF $F$.' },
          ],
          result: 'Geometrically: scatter points uniformly under the curve $Mg$ and keep those under $f$. The kept points\' $x$-coordinates have density $f$, and the fraction kept is area under $f$ over area under $Mg$, which is $1/M$.',
        },
        {
          type: 'graph',
          x: [0, 1],
          y: [0, 3.2],
          xStep: 0.1,
          yStep: 0.5,
          height: 250,
          functions: [
            { expr: '6x(1 - x)', color: 'green', label: 'target $f(x) = 6x(1-x)$' },
            { expr: 'c', color: 'red', label: 'envelope $M g(x) = M$' },
          ],
          areas: [
            { expr: '6x(1 - x)', from: 0, to: 1, color: 'green' },
            { expr: 'c', expr2: '6x(1 - x)', from: 0, to: 1, color: 'red' },
          ],
          sliders: [{ name: 'c', min: 1.5, max: 3, step: 0.05, value: 1.5, label: 'envelope height $M$' }],
          readouts: [
            { label: 'acceptance rate $1/M =$', expr: '1/c', digits: 3 },
            { label: 'proposals per sample $M =$', expr: 'c', digits: 2 },
          ],
          caption: 'Green: accepted region (area $1$). Red: wasted proposals (area $M - 1$). Any $M \\ge 1.5$ gives exact samples, but a loose envelope wastes work: at $M = 3$ two of every three proposals are thrown away.',
        },
        {
          type: 'code',
          title: 'rejection.cpp',
          runnable: true,
          code: `#include <cstdio>
#include <random>

std::mt19937_64 rng(8);
double uniform01() { return (rng() >> 11) * 0x1.0p-53; }

double f(double x) { return 6.0 * x * (1.0 - x); }   // target density on [0, 1], max 1.5

long long proposals = 0;

// Rejection sampling with a Uniform(0, 1) proposal (g = 1) and M = 1.5.
double sampleTarget() {
    const double M = 1.5;
    while (true) {
        ++proposals;
        double x = uniform01();                  // propose from g
        double u = uniform01();
        if (u * M <= f(x)) return x;             // accept with probability f(x) / (M g(x))
    }
}

int main() {
    const int n = 1'000'000;
    double sum = 0, sumSq = 0;
    for (int i = 0; i < n; ++i) {
        double x = sampleTarget();
        sum += x;
        sumSq += x * x;
    }
    double mean = sum / n, var = sumSq / n - mean * mean;
    std::printf("acceptance rate %.4f (theory 1/M = %.4f)\\n", double(n) / proposals, 1 / 1.5);
    std::printf("mean %.4f (exact 0.5)  variance %.4f (exact 0.05)\\n", mean, var);
}`,
          output: `acceptance rate 0.6667 (theory 1/M = 0.6667)
mean 0.5001 (exact 0.5)  variance 0.0501 (exact 0.05)`,
          annotations: [
            { lines: 18, text: '$U \\le f(X)/M$ written without division. `f` need not even be normalized: any $f$ known up to a constant works, with $M$ adjusted to match.' },
            { lines: 30, text: 'Beta$(2,2)$ has mean $\\frac{1}{2}$ and variance $\\frac{2 \\cdot 2}{4^2 \\cdot 5} = 0.05$.' },
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'The cost is geometric — and explodes in high dimensions',
          text: 'The number of proposals per sample is [[dm-geometric-distribution|geometric]] with mean $M$. In one or two dimensions a good envelope keeps $M$ small. In $d$ dimensions, $M$ typically grows exponentially in $d$ (a box around a ball wastes almost everything when $d$ is large), which is why high-dimensional posteriors are sampled with Markov chain Monte Carlo instead.',
        },
      ],
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'mcq',
      prompt: 'You want samples from $f(x) = 3x^2$ on $[0, 1]$ by rejection sampling with a Uniform$(0, 1)$ proposal. What is the smallest valid $M$, and what fraction of proposals is accepted?',
      options: [
        { text: '$M = 1$; every proposal is accepted', why: '$f(1) = 3 > 1$, so $f \\le 1 \\cdot g$ fails near $x = 1$. With $M = 1$ the sampler would cap the density at $1$ and produce the wrong distribution.' },
        { text: '$M = 3$; about $\\frac{1}{3}$ of proposals are accepted', correct: true, why: '$M$ must cover the maximum of $f/g = 3x^2$, which is $3$ at $x = 1$. The acceptance probability is $1/M = \\frac{1}{3}$, so you need $3$ proposals per sample on average.' },
        { text: '$M = 3$; about $\\frac{2}{3}$ of proposals are accepted', why: 'The accepted fraction is $1/M$, the area under $f$ (which is $1$) divided by the area under the envelope ($M$). $\\frac{2}{3}$ is the **rejected** fraction.' },
        { text: '$M = \\frac{3}{2}$; about $\\frac{2}{3}$ of proposals are accepted', why: '$\\frac{3}{2}$ is the envelope for $6x(1 - x)$, whose maximum is $1.5$. For $3x^2$ the maximum is $3$.' },
      ],
      explanation: 'The envelope must satisfy $3x^2 \\le M$ on $[0, 1]$, so $M = 3$, and each proposal is accepted with probability $1/M = 1/3$. Here inverse transform would actually be better: $F(x) = x^3$, so $X = U^{1/3}$ costs one uniform and one cube root per sample. Rejection sampling is the tool for when $F^{-1}$ is unavailable.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'concept',
      title: 'Weighted loot tables in O(1): the alias method',
      blocks: [
        {
          type: 'p',
          text: 'A big game might sample a $5000$-entry weighted table (loot across every zone, procedural decorations, particle variants) millions of times per session. Inverse transform with binary search costs about $\\log_2 5000 \\approx 13$ comparisons per draw. The [[stat-alias-method|alias method]] (Walker 1974, Vose 1991) gets that down to **one** uniform and **one** comparison, after an $O(n)$ setup.',
        },
        {
          type: 'p',
          text: 'Idea: multiply each probability by $n$, so the $n$ heights average exactly $1$. Then redistribute the excess of tall bars into short ones until every column has height $1$ and holds **at most two** items: its own item (its "keep" share) and one **alias** that tops it up.',
        },
        {
          type: 'figure',
          svg: '<svg viewBox="0 0 520 250" xmlns="http://www.w3.org/2000/svg"><text x="130" y="20" text-anchor="middle" font-size="13" font-weight="600">heights n·pᵢ (average 1)</text><rect x="30" y="60.0" width="44" height="140.0" class="f-blue s-blue" fill-opacity="0.25" stroke-width="1.5"/><text x="52.0" y="55.0" text-anchor="middle" font-size="12">2.0</text><text x="52.0" y="216" text-anchor="middle" font-size="11.5">common</text><rect x="84" y="116.0" width="44" height="84.0" class="f-green s-green" fill-opacity="0.25" stroke-width="1.5"/><text x="106.0" y="111.0" text-anchor="middle" font-size="12">1.2</text><text x="106.0" y="216" text-anchor="middle" font-size="11.5">rare</text><rect x="138" y="158.0" width="44" height="42.0" class="f-purple s-purple" fill-opacity="0.25" stroke-width="1.5"/><text x="160.0" y="153.0" text-anchor="middle" font-size="12">0.6</text><text x="160.0" y="216" text-anchor="middle" font-size="11.5">epic</text><rect x="192" y="186.0" width="44" height="14.0" class="f-orange s-orange" fill-opacity="0.25" stroke-width="1.5"/><text x="214.0" y="181.0" text-anchor="middle" font-size="12">0.2</text><text x="214.0" y="216" text-anchor="middle" font-size="11.5">legend.</text><line x1="22" y1="130" x2="246" y2="130" stroke="currentColor" stroke-dasharray="5 4" stroke-width="1.2"/><text x="18" y="134" text-anchor="end" font-size="11">1</text><line x1="22" y1="200" x2="246" y2="200" stroke="currentColor" stroke-width="1.2"/><path d="M250 130 L278 130" stroke="currentColor" stroke-width="1.6" fill="none"/><path d="M278 125 L286 130 L278 135 z" fill="currentColor"/><text x="400" y="20" text-anchor="middle" font-size="13" font-weight="600">alias table: every column height 1</text><rect x="300" y="130.0" width="44" height="70.0" class="f-blue s-blue" fill-opacity="0.25" stroke-width="1.5"/><text x="322.0" y="169.0" text-anchor="middle" font-size="11.5">1.0</text><text x="322.0" y="216" text-anchor="middle" font-size="11.5">col 0</text><rect x="354" y="172.0" width="44" height="28.0" class="f-green s-green" fill-opacity="0.25" stroke-width="1.5"/><text x="376.0" y="190.0" text-anchor="middle" font-size="11.5">0.4</text><rect x="354" y="130.0" width="44" height="42.0" class="f-blue s-blue" fill-opacity="0.25" stroke-width="1.5"/><text x="376.0" y="155.0" text-anchor="middle" font-size="11.5">0.6</text><text x="376.0" y="216" text-anchor="middle" font-size="11.5">col 1</text><rect x="408" y="158.0" width="44" height="42.0" class="f-purple s-purple" fill-opacity="0.25" stroke-width="1.5"/><text x="430.0" y="183.0" text-anchor="middle" font-size="11.5">0.6</text><rect x="408" y="130.0" width="44" height="28.0" class="f-blue s-blue" fill-opacity="0.25" stroke-width="1.5"/><text x="430.0" y="148.0" text-anchor="middle" font-size="11.5">0.4</text><text x="430.0" y="216" text-anchor="middle" font-size="11.5">col 2</text><rect x="462" y="186.0" width="44" height="14.0" class="f-orange s-orange" fill-opacity="0.25" stroke-width="1.5"/><text x="484.0" y="197.0" text-anchor="middle" font-size="11.5">0.2</text><rect x="462" y="130.0" width="44" height="56.0" class="f-green s-green" fill-opacity="0.25" stroke-width="1.5"/><text x="484.0" y="162.0" text-anchor="middle" font-size="11.5">0.8</text><text x="484.0" y="216" text-anchor="middle" font-size="11.5">col 3</text><line x1="292" y1="200" x2="516" y2="200" stroke="currentColor" stroke-width="1.2"/><rect x="40" y="232" width="14" height="12" class="f-blue s-blue" fill-opacity="0.25" stroke-width="1.5"/><text x="60" y="243" font-size="12">common</text><rect x="155" y="232" width="14" height="12" class="f-green s-green" fill-opacity="0.25" stroke-width="1.5"/><text x="175" y="243" font-size="12">rare</text><rect x="270" y="232" width="14" height="12" class="f-purple s-purple" fill-opacity="0.25" stroke-width="1.5"/><text x="290" y="243" font-size="12">epic</text><rect x="385" y="232" width="14" height="12" class="f-orange s-orange" fill-opacity="0.25" stroke-width="1.5"/><text x="405" y="243" font-size="12">legendary</text></svg>',
          alt: 'Left: bars of height 2.0 (common), 1.2 (rare), 0.6 (epic), 0.2 (legendary) with a dashed line at height 1. Right: four columns of height 1. Column 0 is all common. Column 1 is 0.4 rare below 0.6 common. Column 2 is 0.6 epic below 0.4 common. Column 3 is 0.2 legendary below 0.8 rare.',
          caption: 'Probabilities $0.50, 0.30, 0.15, 0.05$ times $n = 4$. Check the right side: common has $1.0 + 0.6 + 0.4 = 2.0$, rare $0.4 + 0.8 = 1.2$, epic $0.6$, legendary $0.2$ — the same areas as on the left, now packed into equal columns.',
          maxWidth: 520,
        },
        {
          type: 'p',
          text: 'To sample, pick a column uniformly (one uniform $V$ times $n$; the integer part is the column) and use the fractional part as a second, independent uniform: below the column\'s keep share, return its own item; otherwise return its alias. Each item\'s total probability is its total area divided by $n$ — exactly $p_i$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the packing always succeeds',
          text: 'The heights average $1$, so the total shortfall of the short bars equals the total excess of the tall ones. Each step takes one short bar $s$, fills it to $1$ with part of one tall bar $\\ell$, and finishes column $s$ forever; $\\ell$ shrinks and is reclassified as short or tall. Every step finishes one column, so after at most $n - 1$ steps all columns are done: $O(n)$ setup.',
        },
        {
          type: 'code',
          title: 'alias_table.cpp',
          runnable: true,
          code: `#include <cstdio>
#include <random>
#include <vector>

std::mt19937_64 rng(3);
double uniform01() { return (rng() >> 11) * 0x1.0p-53; }

// Vose's alias method: O(n) setup, O(1) per sample.
struct AliasTable {
    std::vector<double> keep;   // probability of keeping column i's own item
    std::vector<int> alias;     // the item that fills the rest of column i

    explicit AliasTable(const std::vector<double>& p) : keep(p.size()), alias(p.size()) {
        const int n = int(p.size());
        std::vector<double> h(n);
        std::vector<int> small, large;
        for (int i = 0; i < n; ++i) {
            h[i] = p[i] * n;                       // average column height becomes 1
            (h[i] < 1.0 ? small : large).push_back(i);
        }
        while (!small.empty() && !large.empty()) {
            int s = small.back(); small.pop_back();
            int l = large.back(); large.pop_back();
            keep[s] = h[s];                        // s fills h[s] of its column...
            alias[s] = l;                          // ...and l tops it up to 1
            h[l] -= 1.0 - h[s];
            (h[l] < 1.0 ? small : large).push_back(l);
        }
        for (int i : large) { keep[i] = 1.0; alias[i] = i; }
        for (int i : small) { keep[i] = 1.0; alias[i] = i; }   // rounding leftovers
    }

    int sample() const {
        double u = uniform01() * keep.size();      // one uniform picks a column...
        int col = int(u);
        double frac = u - col;                     // ...and its fractional part a side
        return frac < keep[col] ? col : alias[col];
    }
};

int main() {
    const char* names[] = {"common", "rare", "epic", "legendary"};
    AliasTable table({0.50, 0.30, 0.15, 0.05});
    for (int i = 0; i < 4; ++i)
        std::printf("column %d: keep %-9s %.2f, else %s\\n",
                    i, names[i], table.keep[i], names[table.alias[i]]);
    const int n = 1'000'000;
    int count[4] = {0, 0, 0, 0};
    for (int i = 0; i < n; ++i) ++count[table.sample()];
    for (int i = 0; i < 4; ++i) std::printf("%-9s %.4f\\n", names[i], double(count[i]) / n);
}`,
          output: `column 0: keep common    1.00, else common
column 1: keep rare      0.40, else common
column 2: keep epic      0.60, else common
column 3: keep legendary 0.20, else rare
common    0.4996
rare      0.3008
epic      0.1499
legendary 0.0497`,
          annotations: [
            { lines: '21-28', text: 'The packing loop from the "why" box. With these probabilities it reproduces the figure exactly.' },
            { lines: '33-38', text: 'Sampling: no loop, no search. Splitting one uniform into an integer part and a fractional part is safe here because $53$ bits leave plenty of precision for both.' },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'fill',
      prompt: 'Match each way of sampling from a weighted table of $n$ items with its cost **per draw** (after any setup).',
      template: 'Linear scan of the probabilities: ___ . Binary search of the cumulative table: ___ . Alias method: ___ .',
      blanks: [{ answers: ['$O(n)$'] }, { answers: ['$O(\\log n)$'] }, { answers: ['$O(1)$'] }],
      wordBank: ['$O(n)$', '$O(\\log n)$', '$O(1)$', '$O(n \\log n)$', '$O(n^2)$'],
      explanation: 'A linear scan may walk the whole table: $O(n)$ (fine for $5$ tiers, and fastest in practice when the common items come first). A binary search on the sorted cumulative probabilities halves the range each step: $O(\\log n)$. The alias method uses one uniform and one comparison: $O(1)$, after $O(n)$ setup. Prefer it for large tables that are sampled far more often than they change — every weight change means rebuilding the table.',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'concept',
      title: 'Monte Carlo estimation and its error',
      blocks: [
        {
          type: 'p',
          text: 'A [[dm-monte-carlo|Monte Carlo]] estimate of a quantity $\\theta = E[h(X)]$ draws $X_1, \\dots, X_n$ independently and averages: $\\hat{\\theta}_n = \\frac{1}{n}\\sum h(X_i)$. Probabilities are expectations of indicators, and integrals are expectations too ([[stat-monte-carlo-integration|Monte Carlo integration]], from the limit-theorems unit): $\\int_a^b h(x)\\,dx = (b - a)\\,E[h(U)]$ for $U$ uniform on $[a, b]$.',
        },
        {
          type: 'theorem',
          name: 'Monte Carlo error',
          tex: 'E[\\hat{\\theta}_n] = \\theta, \\qquad \\operatorname{SE}(\\hat{\\theta}_n) = \\frac{\\sigma}{\\sqrt{n}}, \\qquad \\hat{\\theta}_n \\pm 1.96\\,\\frac{s}{\\sqrt{n}} \\ \\text{ is an approximate } 95\\% \\text{ CI}',
          text: 'The [[stat-standard-error|standard error]] uses $\\sigma^2 = \\operatorname{Var}(h(X))$, estimated by the sample variance $s^2$ of the $h(X_i)$. Unbiasedness is linearity of expectation; the standard error comes from variances adding over independent draws; the interval is the central limit theorem.',
        },
        {
          type: 'p',
          text: 'The error shrinks like $1/\\sqrt{n}$: **one more correct decimal digit costs $100$ times as many samples.** The program below estimates $\\int_0^1 e^{-x^2}\\,dx \\approx 0.746824$, an integral with no elementary antiderivative.',
        },
        {
          type: 'code',
          title: 'monte_carlo.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdio>
#include <random>

std::mt19937_64 rng(17);
double uniform01() { return (rng() >> 11) * 0x1.0p-53; }

double h(double x) { return std::exp(-x * x); }      // estimate the integral of h on [0, 1]

int main() {
    const double exact = 0.746824132812427;            // (sqrt(pi)/2) erf(1)
    std::printf("      n   estimate  std. error  actual error\\n");
    for (int n : {100, 10'000, 1'000'000}) {
        double sum = 0, sumSq = 0;
        for (int i = 0; i < n; ++i) {
            double v = h(uniform01());
            sum += v;
            sumSq += v * v;
        }
        double mean = sum / n;
        double s = std::sqrt((sumSq - n * mean * mean) / (n - 1));   // sample sd
        std::printf("%7d   %.5f    %.5f     %.5f\\n", n, mean, s / std::sqrt(n), std::abs(mean - exact));
    }

    // Antithetic variates: average h(U) and h(1 - U). Same budget of 10^6 evaluations.
    const int pairs = 500'000;
    double sum = 0, sumSq = 0;
    for (int i = 0; i < pairs; ++i) {
        double u = uniform01();
        double v = 0.5 * (h(u) + h(1.0 - u));
        sum += v;
        sumSq += v * v;
    }
    double mean = sum / pairs, s = std::sqrt((sumSq - pairs * mean * mean) / (pairs - 1));
    std::printf("antithetic, 10^6 evaluations: %.5f, std. error %.5f\\n", mean, s / std::sqrt(pairs));
}`,
          output: `      n   estimate  std. error  actual error
    100   0.74336    0.01936     0.00346
  10000   0.74594    0.00202     0.00088
1000000   0.74707    0.00020     0.00024
antithetic, 10^6 evaluations: 0.74680, std. error 0.00004`,
          annotations: [
            { lines: 21, text: 'The sample SD of the $h$ values; $s \\approx 0.201$, the true $\\sigma$ of $e^{-U^2}$.' },
            { lines: 22, text: 'Each $100\\times$ increase in $n$ shrinks the standard error $10\\times$. The actual errors are of the size the standard error predicts — sometimes smaller, sometimes a bit larger.' },
            { lines: '25-35', text: 'Antithetic variates, explained in the next card: $5\\times$ smaller error for the same work.' },
          ],
        },
        {
          type: 'graph',
          x: [0, 10000],
          y: [0, 0.04],
          xStep: 2000,
          yStep: 0.01,
          height: 240,
          functions: [{ expr: '1.96*s/sqrt(x)', color: 'purple', label: '$95\\%$ half-width $1.96\\,\\sigma/\\sqrt{n}$', domain: [100, 10000] }],
          points: [{ x: 'n', y: '1.96*s/sqrt(n)', color: 'purple' }],
          sliders: [
            { name: 's', min: 0.05, max: 1, step: 0.05, value: 0.2, label: 'standard deviation $\\sigma$ of $h(X)$' },
            { name: 'n', min: 100, max: 10000, step: 100, value: 2500, label: 'samples $n$' },
          ],
          readouts: [
            { label: 'half-width at this $n$:', expr: '1.96*s/sqrt(n)', digits: 4 },
            { label: '$n$ for half-width $0.001$:', expr: '(1.96*s/0.001)^2', digits: 0 },
          ],
          caption: 'The horizontal axis is the number of samples $n$. The curve drops steeply at first and then crawls: going from $n = 2500$ to $10{,}000$ only halves the error. Doubling $\\sigma$ needs four times the samples for the same precision — which is why reducing $\\sigma$ (next card) pays off so well.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Path tracing is Monte Carlo',
          text: 'A path tracer estimates each pixel\'s brightness — an integral of light over all directions and bounces — by averaging random light paths. The grainy noise of a low-sample render is Monte Carlo standard error: $4\\times$ the samples per pixel halves it. Crucially, the $1/\\sqrt{n}$ rate does not depend on the **dimension** of the integral, while grid-based rules degrade badly as dimensions grow. That is why Monte Carlo rules high-dimensional problems, from rendering to Bayesian statistics.',
        },
      ],
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'numeric',
      prompt: 'A Monte Carlo estimate of a balance metric has $\\sigma \\approx 0.2$ per sample. How many samples $n$ are needed for a $95\\%$ confidence half-width of $0.001$? Use $z = 1.96$; give a whole number.',
      hint: 'Solve $1.96\\,\\sigma/\\sqrt{n} = 0.001$ for $n$.',
      label: '$n =$',
      answer: '(1.96*0.2/0.001)^2',
      tolerance: 500,
      answerTex: '\\left(\\tfrac{1.96 \\cdot 0.2}{0.001}\\right)^2 = 153{,}664',
      explanation: '$\\sqrt{n} = \\frac{1.96 \\cdot 0.2}{0.001} = 392$, so $n = 392^2 = 153{,}664$ samples. With the integral above ($\\sigma \\approx 0.201$) that matches the table: about $10^5$ samples give a standard error near $0.0006$. Rounding $1.96$ to $2$ gives $160{,}000$ — fine in practice, but here use $1.96$.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'truefalse',
      prompt: 'To cut the standard error of a Monte Carlo estimate in half, you need to double the number of samples.',
      answer: false,
      explanation: 'The standard error is $\\sigma/\\sqrt{n}$. Halving it requires $\\sqrt{n}$ to double, so $n$ must be **quadrupled**. Doubling $n$ only reduces the error by a factor $\\sqrt{2} \\approx 1.41$. This square-root law is the reason variance reduction is worth so much: halving $\\sigma$ is as good as quadrupling the sample size.',
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'concept',
      title: 'Variance reduction: same work, smaller error',
      blocks: [
        {
          type: 'p',
          text: 'Since the error is $\\sigma/\\sqrt{n}$, you can attack $\\sigma$ instead of $n$. [[stat-variance-reduction|Variance reduction]] techniques change **what** you average without changing its expectation.',
        },
        {
          type: 'derivation',
          title: 'Antithetic variates: pair $U$ with $1 - U$',
          steps: [
            { tex: 'Y = \\tfrac{1}{2}\\left(h(U) + h(1 - U)\\right), \\quad E[Y] = \\theta', why: '$1 - U$ is uniform too, so both terms have mean $\\theta$; linearity gives $E[Y] = \\theta$.' },
            { tex: '\\operatorname{Var}(Y) = \\tfrac{1}{4}\\left(\\sigma^2 + \\sigma^2 + 2\\operatorname{Cov}(h(U), h(1-U))\\right) = \\tfrac{\\sigma^2}{2}(1 + \\rho)', why: 'Variance of a sum includes twice the covariance; write the covariance as $\\rho\\sigma^2$ with $\\rho$ the correlation of $h(U)$ and $h(1-U)$.' },
            { tex: '\\text{two independent draws: } \\tfrac{\\sigma^2}{2}', why: 'The fair comparison uses the same number of evaluations of $h$: two.' },
            { tex: 'e^{-x^2} \\text{ on } [0, 1]: \\ \\rho \\approx -0.96 \\implies \\text{variance } 25\\times \\text{ smaller}', why: 'For a monotone $h$, a small $U$ pairs with a large $1 - U$, so the errors cancel: $1/(1 + \\rho) = 1/0.04 = 25$.' },
          ],
          result: 'Matching the program: standard error $0.00020 \\to 0.00004$, five times smaller (variance $25$ times) for the same $10^6$ evaluations. Antithetics help whenever $h$ is monotone, and can hurt when $\\rho > 0$.',
        },
        {
          type: 'list',
          items: [
            '**Control variates**: if $g(X)$ is correlated with $h(X)$ and $E[g(X)]$ is known exactly, average $h(X) - c\\,(g(X) - E[g(X)])$. The best $c$ is a regression slope, $\\operatorname{Cov}(h, g)/\\operatorname{Var}(g)$.',
            '**Importance sampling**: to estimate a rare probability such as $P(\\text{latency} > 500\\text{ ms}) \\approx 10^{-6}$, plain sampling needs around $10^8$ draws to see enough hits. Instead draw from a density $g$ that makes the rare region common, and weight each draw by $f(x)/g(x)$ so the average is still unbiased.',
            '**Stratified and quasi-random sampling**: force the draws to cover the space evenly (one per stratum, or low-discrepancy sequences such as Sobol points and the blue-noise patterns renderers use).',
          ],
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Always report the standard error',
          text: 'A simulation result without an error estimate is a number you cannot trust. Print $s/\\sqrt{n}$ next to every Monte Carlo estimate — it costs one extra running sum, and it tells you when to stop.',
        },
      ],
    },
    // ------------------------------------------------------------------ 16
    {
      kind: 'mcq',
      prompt: 'For which integrand on $[0, 1]$ would antithetic pairs $(U, 1 - U)$ give **no** improvement over the same number of independent draws (in fact making things worse)?',
      options: [
        { text: '$h(x) = e^{-x^2}$', why: 'This is decreasing on $[0, 1]$, so $h(U)$ and $h(1 - U)$ are strongly negatively correlated ($\\rho \\approx -0.96$) and the variance drops $25$-fold.' },
        { text: '$h(x) = x$', why: 'Here $h(U) + h(1 - U) = 1$ exactly: $\\rho = -1$ and each pair returns the exact answer $\\frac{1}{2}$, zero variance. The best possible case.' },
        { text: '$h(x) = x(1 - x)$', correct: true, why: 'This is symmetric about $\\frac{1}{2}$: $h(1 - U) = h(U)$, so $\\rho = +1$. Each pair is one value counted twice, with variance $\\sigma^2$ instead of $\\sigma^2/2$ — half the effective sample size.' },
        { text: '$h(x) = x^3$', why: 'Increasing on $[0, 1]$, so again $\\rho < 0$ and antithetics help.' },
      ],
      explanation: 'The antithetic variance per pair is $\\frac{\\sigma^2}{2}(1 + \\rho)$. Monotone functions give $\\rho < 0$ (a gain); a function symmetric about $\\frac{1}{2}$ gives $\\rho = 1$ (a loss). Before using a variance-reduction trick, check its assumptions — or simply measure both standard errors, as the program does.',
    },
  ],
  takeaways: [
    'A PRNG is a seeded deterministic state machine. Same seed, same stream — essential for replays, tests and bug reports. Build $U \\in [0, 1)$ from the top $53$ bits; avoid `rng() % n` bias by rejection; write your own transforms for cross-platform determinism.',
    'Inverse transform: $X = F^{-1}(U)$ has CDF $F$. Exponential: $X = -\\ln(1 - U)/\\lambda$. Discrete tables: first value whose cumulative probability exceeds $U$ (binary search).',
    'Box–Muller: $Z_{1,2} = \\sqrt{-2\\ln U_1}\\,(\\cos, \\sin)(2\\pi U_2)$ — from the polar form of two independent normals. Then $X = \\mu + \\sigma Z$.',
    'Rejection sampling: propose from $g$, accept with probability $f/(Mg)$; acceptance rate $1/M$. The alias method samples an $n$-item table in $O(1)$ after $O(n)$ setup.',
    'Monte Carlo: $\\hat{\\theta} = \\frac{1}{n}\\sum h(X_i)$ is unbiased with $\\operatorname{SE} = \\sigma/\\sqrt{n}$, independent of dimension. Halving the error costs $4\\times$ the samples.',
    'Variance reduction attacks $\\sigma$: antithetic pairs give variance $\\frac{\\sigma^2}{2}(1 + \\rho)$; control variates, importance sampling and stratification are the other standard tools.',
  ],
  reading: [
    {
      title: 'Wikipedia — Inverse transform sampling',
      url: 'https://en.wikipedia.org/wiki/Inverse_transform_sampling',
      source: 'wikipedia',
      note: 'The method for continuous and discrete distributions, with the generalized inverse for CDFs that have jumps or flat parts.',
    },
    {
      title: 'Wikipedia — Box–Muller transform',
      url: 'https://en.wikipedia.org/wiki/Box%E2%80%93Muller_transform',
      source: 'wikipedia',
      note: 'The derivation, the polar variant that avoids trigonometry, and comparisons with the ziggurat algorithm.',
    },
    {
      title: 'Wikipedia — Alias method',
      url: 'https://en.wikipedia.org/wiki/Alias_method',
      source: 'wikipedia',
      note: 'Walker\'s original idea and Vose\'s numerically stable $O(n)$ construction used in this lesson.',
    },
    {
      title: 'MIT OCW 18.05 — Introduction to Probability and Statistics',
      url: 'https://ocw.mit.edu/courses/18-05-introduction-to-probability-and-statistics-spring-2014/',
      source: 'other',
      note: 'Its computational problem sets use simulation throughout — a good place to practice turning probability questions into code.',
    },
  ],
};
