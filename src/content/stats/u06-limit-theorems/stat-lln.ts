import type { Lesson } from '../../types';

// Cumulative head counts from coin_flips.cpp (seeds 7, 8, 9): heads after n flips.
const SHORT_N = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86, 88, 90, 92, 94, 96, 98, 100, 102, 104, 106, 108, 110, 112, 114, 116, 118, 120, 122, 124, 126, 128, 130, 132, 134, 136, 138, 140, 142, 144, 146, 148, 150, 152, 154, 156, 158, 160, 162, 164, 166, 168, 170, 172, 174, 176, 178, 180, 182, 184, 186, 188, 190, 192, 194, 196, 198, 200, 205, 210, 215, 220, 225, 230, 235, 240, 245, 250, 255, 260, 265, 270, 275, 280, 285, 290, 295, 300, 305, 310, 315, 320, 325, 330, 335, 340, 345, 350, 355, 360, 365, 370, 375, 380, 385, 390, 395, 400, 405, 410, 415, 420, 425, 430, 435, 440, 445, 450, 455, 460, 465, 470, 475, 480, 485, 490, 495, 500, 505, 510, 515, 520, 525, 530, 535, 540, 545, 550, 555, 560, 565, 570, 575, 580, 585, 590, 595, 600, 605, 610, 615, 620, 625, 630, 635, 640, 645, 650, 655, 660, 665, 670, 675, 680, 685, 690, 695, 700, 705, 710, 715, 720, 725, 730, 735, 740, 745, 750, 755, 760, 765, 770, 775, 780, 785, 790, 795, 800, 805, 810, 815, 820, 825, 830, 835, 840, 845, 850, 855, 860, 865, 870, 875, 880, 885, 890, 895, 900, 905, 910, 915, 920, 925, 930, 935, 940, 945, 950, 955, 960, 965, 970, 975, 980, 985, 990, 995, 1000];
const LONG_N = Array.from({ length: 200 }, (_, i) => 50 * (i + 1));
const SHORT_HEADS = [
  [1, 1, 1, 2, 2, 3, 3, 4, 5, 6, 7, 7, 7, 7, 8, 9, 9, 9, 10, 10, 10, 11, 11, 11, 12, 12, 13, 13, 14, 14, 14, 15, 15, 16, 17, 18, 19, 19, 19, 19, 21, 21, 22, 23, 23, 24, 25, 26, 28, 29, 30, 31, 31, 33, 34, 36, 38, 39, 40, 42, 44, 46, 47, 47, 49, 50, 51, 51, 53, 54, 56, 56, 58, 60, 61, 62, 64, 66, 68, 70, 71, 72, 73, 75, 76, 77, 79, 79, 81, 81, 82, 84, 84, 85, 87, 88, 89, 91, 93, 94, 95, 95, 96, 97, 98, 100, 101, 102, 102, 103, 105, 105, 105, 105, 105, 107, 108, 108, 109, 110, 113, 114, 116, 119, 120, 122, 125, 128, 131, 131, 134, 135, 138, 140, 140, 144, 146, 148, 152, 156, 159, 162, 164, 166, 171, 173, 175, 179, 182, 184, 186, 190, 193, 196, 198, 202, 203, 204, 207, 211, 213, 215, 217, 218, 220, 223, 227, 229, 230, 233, 236, 239, 242, 244, 248, 248, 249, 253, 254, 255, 257, 261, 262, 265, 265, 266, 269, 270, 273, 276, 278, 281, 283, 286, 286, 290, 292, 296, 300, 302, 305, 308, 309, 312, 314, 316, 319, 323, 327, 329, 332, 333, 334, 337, 340, 344, 347, 350, 353, 355, 356, 358, 361, 366, 369, 371, 375, 378, 381, 384, 387, 389, 390, 391, 395, 396, 399, 401, 403, 407, 409, 412, 414, 416, 418, 420, 423, 425, 426, 431, 435, 438, 439, 440, 443, 446, 448, 452, 454, 457, 458, 461, 463, 467, 471, 472, 474, 479, 482, 483, 485, 488, 492, 496, 498, 500, 502, 505, 509, 511],
  [0, 1, 1, 1, 2, 3, 4, 4, 4, 4, 4, 5, 6, 6, 6, 7, 7, 7, 8, 8, 9, 10, 11, 12, 13, 14, 15, 15, 16, 17, 18, 18, 18, 19, 20, 20, 21, 21, 22, 23, 25, 27, 28, 30, 31, 32, 33, 34, 35, 37, 37, 38, 39, 40, 41, 42, 42, 43, 45, 47, 48, 50, 52, 53, 54, 55, 55, 55, 56, 57, 59, 59, 60, 61, 62, 62, 64, 65, 66, 67, 69, 70, 71, 73, 74, 75, 75, 76, 77, 78, 79, 79, 80, 82, 83, 85, 86, 87, 88, 89, 90, 92, 93, 93, 94, 96, 97, 98, 99, 101, 102, 103, 104, 105, 105, 105, 105, 106, 107, 108, 108, 111, 113, 116, 119, 121, 124, 127, 128, 130, 133, 134, 135, 137, 141, 144, 146, 147, 149, 151, 153, 154, 159, 160, 163, 165, 169, 170, 173, 176, 177, 177, 179, 183, 188, 190, 191, 191, 193, 196, 198, 201, 203, 205, 207, 208, 211, 213, 214, 216, 219, 221, 223, 225, 229, 232, 234, 238, 240, 243, 245, 247, 250, 252, 255, 258, 259, 262, 263, 265, 267, 270, 273, 276, 279, 282, 285, 287, 289, 292, 296, 299, 304, 306, 308, 309, 313, 316, 318, 321, 324, 326, 328, 332, 334, 336, 340, 341, 342, 346, 349, 350, 353, 356, 360, 361, 362, 365, 369, 372, 373, 375, 378, 381, 384, 386, 390, 393, 395, 396, 397, 400, 404, 405, 408, 412, 414, 417, 421, 423, 427, 430, 431, 434, 439, 440, 442, 444, 447, 450, 450, 454, 455, 457, 459, 462, 463, 465, 468, 470, 472, 474, 478, 479, 481, 483, 486, 488, 492, 494],
  [1, 2, 2, 3, 4, 4, 4, 4, 5, 5, 5, 6, 6, 6, 6, 6, 6, 7, 7, 7, 8, 8, 9, 9, 10, 10, 10, 11, 11, 12, 13, 14, 15, 15, 16, 16, 16, 17, 18, 18, 18, 19, 20, 21, 22, 24, 24, 24, 25, 25, 26, 26, 27, 29, 31, 33, 34, 35, 36, 38, 40, 41, 41, 41, 43, 45, 46, 48, 50, 51, 53, 54, 55, 55, 57, 57, 58, 60, 61, 62, 64, 64, 65, 65, 66, 67, 68, 69, 71, 72, 74, 76, 76, 77, 77, 77, 77, 77, 79, 80, 81, 82, 83, 83, 83, 85, 87, 89, 90, 92, 93, 94, 96, 96, 96, 96, 97, 97, 99, 99, 103, 104, 105, 108, 110, 114, 119, 120, 123, 125, 126, 128, 131, 133, 136, 139, 141, 143, 146, 149, 150, 155, 157, 157, 160, 162, 167, 169, 172, 174, 175, 177, 179, 180, 183, 186, 186, 187, 191, 192, 195, 199, 203, 206, 210, 214, 218, 220, 222, 226, 230, 234, 237, 238, 238, 241, 243, 245, 250, 252, 255, 256, 258, 259, 259, 261, 263, 264, 268, 270, 274, 277, 281, 284, 287, 289, 292, 294, 296, 301, 304, 309, 312, 313, 316, 320, 323, 327, 330, 334, 335, 337, 341, 344, 345, 349, 353, 356, 357, 360, 361, 364, 365, 368, 372, 373, 377, 380, 383, 386, 389, 390, 394, 397, 400, 403, 403, 405, 408, 412, 414, 417, 421, 424, 425, 427, 429, 432, 435, 438, 439, 440, 443, 448, 450, 452, 452, 455, 456, 458, 459, 460, 462, 462, 466, 467, 468, 470, 472, 475, 478, 478, 481, 484, 485, 486, 488, 489, 490, 494],
];
const LONG_HEADS = [
  [23, 54, 87, 110, 131, 156, 184, 211, 233, 255, 276, 302, 329, 355, 384, 407, 431, 457, 483, 511, 534, 561, 592, 619, 644, 674, 689, 716, 742, 766, 790, 811, 842, 869, 900, 920, 950, 976, 996, 1019, 1043, 1064, 1092, 1109, 1130, 1159, 1181, 1209, 1228, 1256, 1283, 1307, 1336, 1366, 1388, 1409, 1430, 1458, 1480, 1506, 1534, 1555, 1576, 1603, 1629, 1659, 1689, 1717, 1739, 1763, 1786, 1806, 1826, 1856, 1880, 1901, 1925, 1946, 1971, 2002, 2033, 2059, 2092, 2114, 2142, 2164, 2185, 2212, 2237, 2264, 2287, 2312, 2332, 2354, 2380, 2401, 2424, 2444, 2466, 2491, 2517, 2548, 2570, 2597, 2623, 2645, 2671, 2702, 2727, 2750, 2772, 2795, 2827, 2850, 2880, 2909, 2939, 2963, 2989, 3010, 3029, 3057, 3076, 3095, 3115, 3139, 3161, 3180, 3206, 3229, 3258, 3286, 3310, 3337, 3363, 3384, 3404, 3426, 3452, 3479, 3507, 3534, 3564, 3599, 3619, 3650, 3678, 3702, 3721, 3746, 3775, 3802, 3830, 3852, 3881, 3903, 3924, 3950, 3982, 4003, 4029, 4056, 4078, 4101, 4125, 4155, 4184, 4213, 4236, 4261, 4286, 4308, 4337, 4373, 4400, 4423, 4442, 4463, 4487, 4508, 4535, 4564, 4593, 4616, 4644, 4675, 4698, 4723, 4750, 4777, 4799, 4825, 4848, 4874, 4894, 4919, 4945, 4966, 4992, 5020],
  [31, 57, 83, 108, 130, 151, 176, 196, 216, 243, 265, 292, 321, 346, 372, 396, 423, 450, 470, 494, 520, 548, 572, 599, 627, 646, 668, 698, 728, 755, 781, 806, 832, 853, 875, 899, 928, 949, 980, 1004, 1028, 1055, 1081, 1104, 1127, 1156, 1181, 1210, 1227, 1252, 1272, 1303, 1332, 1358, 1383, 1415, 1443, 1468, 1495, 1518, 1542, 1570, 1593, 1621, 1656, 1683, 1710, 1735, 1762, 1782, 1804, 1827, 1849, 1873, 1898, 1923, 1946, 1968, 1986, 2015, 2039, 2064, 2094, 2115, 2138, 2161, 2187, 2211, 2232, 2257, 2283, 2305, 2325, 2350, 2374, 2403, 2428, 2446, 2469, 2495, 2518, 2537, 2561, 2594, 2619, 2641, 2658, 2680, 2709, 2736, 2753, 2782, 2803, 2827, 2852, 2879, 2906, 2928, 2948, 2969, 2991, 3023, 3034, 3058, 3084, 3112, 3145, 3168, 3194, 3220, 3247, 3275, 3304, 3331, 3353, 3380, 3413, 3438, 3458, 3486, 3515, 3545, 3570, 3599, 3619, 3646, 3678, 3700, 3719, 3741, 3766, 3787, 3817, 3843, 3869, 3891, 3915, 3945, 3977, 4006, 4033, 4060, 4087, 4109, 4136, 4156, 4185, 4211, 4240, 4273, 4292, 4314, 4340, 4366, 4386, 4406, 4430, 4455, 4483, 4502, 4530, 4556, 4578, 4600, 4628, 4652, 4682, 4702, 4726, 4754, 4773, 4794, 4817, 4842, 4861, 4892, 4920, 4945, 4966, 4989],
  [22, 51, 77, 99, 125, 149, 174, 192, 226, 252, 270, 301, 334, 360, 386, 412, 438, 458, 475, 494, 521, 547, 568, 595, 621, 642, 665, 690, 715, 746, 773, 797, 824, 848, 875, 899, 918, 940, 965, 996, 1012, 1037, 1060, 1081, 1105, 1127, 1155, 1182, 1210, 1235, 1265, 1288, 1311, 1332, 1352, 1381, 1409, 1442, 1466, 1494, 1515, 1539, 1563, 1592, 1616, 1645, 1666, 1693, 1726, 1756, 1786, 1815, 1836, 1865, 1895, 1917, 1945, 1974, 1996, 2017, 2045, 2079, 2104, 2135, 2155, 2181, 2209, 2236, 2257, 2286, 2310, 2340, 2364, 2387, 2409, 2434, 2455, 2483, 2506, 2533, 2555, 2575, 2604, 2628, 2648, 2679, 2701, 2727, 2751, 2776, 2801, 2828, 2859, 2880, 2904, 2933, 2958, 2981, 3002, 3026, 3048, 3079, 3101, 3127, 3156, 3180, 3206, 3233, 3256, 3279, 3302, 3329, 3348, 3380, 3405, 3424, 3454, 3481, 3504, 3531, 3554, 3584, 3610, 3631, 3656, 3682, 3705, 3725, 3747, 3765, 3786, 3804, 3832, 3853, 3875, 3906, 3940, 3958, 3983, 4010, 4032, 4049, 4068, 4092, 4118, 4142, 4169, 4193, 4216, 4239, 4261, 4286, 4313, 4342, 4376, 4403, 4433, 4454, 4484, 4504, 4527, 4549, 4576, 4595, 4612, 4629, 4651, 4674, 4698, 4723, 4751, 4776, 4798, 4826, 4848, 4870, 4895, 4922, 4942, 4966],
];

const runColors = ['blue', 'orange', 'green'] as const;

// Running proportion of heads for the first 1000 flips, as connected segments.
const proportionSegments = SHORT_HEADS.flatMap((heads, r) =>
  heads.slice(1).map((h, i) => ({
    from: [SHORT_N[i], heads[i] / SHORT_N[i]] as [number, number],
    to: [SHORT_N[i + 1], h / SHORT_N[i + 1]] as [number, number],
    color: runColors[r],
  })),
);

// Heads minus n/2 for the first 10,000 flips.
const deviationSegments = LONG_HEADS.flatMap((heads, r) =>
  heads.slice(1).map((h, i) => ({
    from: [LONG_N[i], heads[i] - LONG_N[i] / 2] as [number, number],
    to: [LONG_N[i + 1], h - LONG_N[i + 1] / 2] as [number, number],
    color: runColors[r],
  })),
);

// |error| of the pi estimate in pi_monte_carlo.cpp at n = 10^2, ..., 10^6.
const piErrors = [0.10159, 0.03841, 0.00999, 0.00363, 0.00194];
const intErrors = [0.01738, 0.0039, 0.00051, 0.00011, 0.00004];

export const lesson: Lesson = {
  id: 'stat-lln',
  title: 'The Law of Large Numbers',
  summary: 'Why averages settle down: Markov\'s and Chebyshev\'s inequalities (with proofs, and how loose they are), the weak law of large numbers proved from Chebyshev, running averages of simulated coin flips, what the law does **not** promise (the gambler\'s fallacy), and Monte Carlo integration with its $1/\\sqrt{n}$ error.',
  minutes: 20,
  objectives: [
    'State and prove Markov\'s inequality and Chebyshev\'s inequality, and judge how loose they are for common distributions',
    'Prove the weak law of large numbers from Chebyshev\'s inequality and use it to bound a sample size',
    'Read a running-average plot and explain why the proportion converges while the count of excess heads does not',
    'Recognize the gambler\'s fallacy as a misreading of the law of large numbers',
    'Estimate an integral (or $\\pi$) by Monte Carlo and predict how the error shrinks with $n$',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Markov\'s inequality: a bound from the mean alone',
      blocks: [
        {
          type: 'p',
          text: 'Suppose all you know about play sessions is that they average $20$ minutes. Can a third of sessions last more than $2$ hours? Intuitively no: if a third lasted $120$+ minutes, they alone would push the average to at least $40$. Turning that intuition into a theorem gives the first tool of this unit.',
        },
        {
          type: 'theorem',
          name: 'Markov\'s inequality',
          tex: 'X \\ge 0,\\ a > 0 \\implies P(X \\ge a) \\le \\frac{E[X]}{a}',
          text: '[[stat-markov-inequality|Markov\'s inequality]] is valid for **any** nonnegative random variable with a finite mean — nothing else about the distribution is needed.',
        },
        {
          type: 'derivation',
          title: 'Proof: compare $X$ with a step',
          steps: [
            { tex: 'a \\cdot \\mathbf{1}[X \\ge a] \\le X', why: 'Here $\\mathbf{1}[X \\ge a]$ is the indicator ($1$ if $X \\ge a$, else $0$). If $X \\ge a$ the left side is $a \\le X$; otherwise it is $0 \\le X$ because $X \\ge 0$. So the inequality holds for every outcome.' },
            { tex: 'E\\big[a \\cdot \\mathbf{1}[X \\ge a]\\big] \\le E[X]', why: 'Expectation preserves inequalities that hold outcome by outcome (it is a weighted average with nonnegative weights).' },
            { tex: 'a\\,P(X \\ge a) \\le E[X]', why: 'The expected value of an indicator is the probability of its event.' },
          ],
          result: 'Divide by $a$. For sessions with mean $20$ minutes: $P(X \\ge 120) \\le \\frac{20}{120} = \\frac{1}{6}$. A third is impossible; a sixth is the worst case.',
        },
        {
          type: 'graph',
          x: [0, 150],
          y: [0, 1.05],
          xStep: 25,
          yStep: 0.25,
          height: 250,
          functions: [
            { expr: 'min(m/x, 1)', domain: [0.5, 150], color: 'red', label: 'Markov bound $\\mu/a$' },
            { expr: 'exp(-x/m)', domain: [0, 150], color: 'blue', label: 'true tail if sessions are exponential, $e^{-a/\\mu}$' },
          ],
          vlines: [{ x: 'a', color: 'orange', label: 'a' }],
          sliders: [
            { name: 'm', min: 5, max: 40, step: 1, value: 20, label: 'mean session length $\\mu$ (min)' },
            { name: 'a', min: 10, max: 150, step: 1, value: 100, label: 'threshold $a$ (min)' },
          ],
          readouts: [
            { label: 'Markov: $P(X \\ge a) \\le$', expr: 'min(m/a, 1)', digits: 4 },
            { label: 'exponential: $P(X \\ge a) =$', expr: 'exp(-a/m)', digits: 4 },
          ],
          caption: 'Horizontal axis: the threshold. Markov\'s bound (red) is always above the true tail, but for an exponential distribution it is very loose far out: at $a = 5\\mu$ it says $\\le 0.2$ while the truth is $e^{-5} \\approx 0.007$. The bound is the price of knowing only the mean.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why such a crude bound is still useful',
          text: 'Markov\'s inequality is tight for *some* distribution (put probability $\\mu/a$ at exactly $a$ and the rest at $0$), so no better bound can follow from the mean alone. Its real value is as a **building block**: applied to cleverly chosen nonnegative variables such as $(X - \\mu)^2$ or $e^{tX}$, it produces much sharper bounds. The next card does the first of these.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'numeric',
      prompt: 'A server\'s response times are nonnegative with mean $50$ ms. Using only this fact, give the best upper bound Markov\'s inequality provides for $P(\\text{response} \\ge 400 \\text{ ms})$.',
      hint: '$P(X \\ge a) \\le E[X]/a$.',
      label: '$P(X \\ge 400) \\le$',
      answer: '1/8',
      tolerance: 0.0001,
      answerTex: '0.125',
      explanation: '$P(X \\ge 400) \\le \\frac{50}{400} = 0.125$. So at most $12.5\\%$ of requests can take $400$ ms or longer, whatever the shape of the distribution. Real latency tails are usually far thinner, but if all you are told is the average, this is the honest worst case.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Chebyshev\'s inequality: a bound from mean and variance',
      blocks: [
        {
          type: 'p',
          text: 'If you also know the standard deviation, you can bound how often $X$ strays **far from its mean** in either direction. The trick is to apply Markov to the squared distance.',
        },
        {
          type: 'theorem',
          name: 'Chebyshev\'s inequality',
          tex: 'P\\big(|X - \\mu| \\ge k\\sigma\\big) \\le \\frac{1}{k^2} \\qquad \\text{equivalently} \\qquad P\\big(|X - \\mu| \\ge \\varepsilon\\big) \\le \\frac{\\sigma^2}{\\varepsilon^2}',
          text: '[[stat-chebyshev-inequality|Chebyshev\'s inequality]] holds for any random variable with finite mean $\\mu$ and variance $\\sigma^2$, and any $k > 0$ (or $\\varepsilon > 0$).',
        },
        {
          type: 'derivation',
          title: 'Proof: Markov on the squared deviation',
          steps: [
            { tex: '\\{|X - \\mu| \\ge \\varepsilon\\} = \\{(X - \\mu)^2 \\ge \\varepsilon^2\\}', why: 'Both sides are nonnegative, so squaring does not change the event.' },
            { tex: 'P\\big((X - \\mu)^2 \\ge \\varepsilon^2\\big) \\le \\frac{E[(X - \\mu)^2]}{\\varepsilon^2}', why: 'Markov\'s inequality applied to the nonnegative variable $(X - \\mu)^2$ with threshold $\\varepsilon^2$.' },
            { tex: '= \\frac{\\sigma^2}{\\varepsilon^2}', why: 'The numerator is the definition of the variance. Put $\\varepsilon = k\\sigma$ for the $1/k^2$ form.' },
          ],
          result: 'At least $1 - \\frac{1}{k^2}$ of the probability lies within $k$ standard deviations of the mean: at least $75\\%$ within $2\\sigma$ and $88.9\\%$ within $3\\sigma$, for **every** distribution with finite variance.',
        },
        {
          type: 'table',
          headers: ['$k$', 'Chebyshev bound $1/k^2$', 'Normal', 'Exponential', 'Uniform'],
          rows: [
            ['$1.5$', '$0.444$', '$0.134$', '$0.082$', '$0.134$'],
            ['$2$', '$0.25$', '$0.046$', '$0.050$', '$0$'],
            ['$3$', '$0.111$', '$0.0027$', '$0.018$', '$0$'],
          ],
          caption: 'Actual values of $P(|X - \\mu| \\ge k\\sigma)$. Chebyshev is always safe but often $5$ to $40$ times too pessimistic. (Exponential: $e^{-(1 + k)}$ for $k \\ge 1$. Uniform: $\\max(1 - k/\\sqrt{3},\\ 0)$, since it never goes beyond $\\sqrt{3}\\,\\sigma$ from its mean.)',
        },
        {
          type: 'graph',
          x: [1, 4],
          y: [0, 0.6],
          xStep: 0.5,
          yStep: 0.1,
          height: 240,
          functions: [
            { expr: '1/x^2', color: 'red', label: 'Chebyshev $1/k^2$' },
            { expr: 'exp(-(1 + x))', color: 'orange', label: 'exponential' },
            { expr: '2(1 - normcdf(x))', color: 'blue', label: 'normal' },
            { expr: 'max(1 - x/sqrt(3), 0)', color: 'green', label: 'uniform' },
          ],
          caption: 'Horizontal axis: $k$, the distance from the mean in standard deviations. Every true tail lies under the red curve. The bound cannot be improved in general: the three-point distribution with $P(X = \\pm k) = \\frac{1}{2k^2}$ and $P(X = 0) = 1 - \\frac{1}{k^2}$ has $\\sigma = 1$ and hits it exactly.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'numeric',
      prompt: 'Frame times have mean $16$ ms and standard deviation $2$ ms; nothing else is known about their distribution. Use Chebyshev\'s inequality to bound the fraction of frames whose time differs from $16$ ms by $6$ ms or more. Give $3$ decimal places.',
      hint: 'How many standard deviations is $6$ ms?',
      label: '$P(|X - 16| \\ge 6) \\le$',
      answer: '1/9',
      tolerance: 0.0006,
      answerTex: '\\tfrac{1}{9} \\approx 0.111',
      explanation: '$6$ ms is $k = 6/2 = 3$ standard deviations, so $P(|X - 16| \\ge 6) \\le \\frac{1}{3^2} = \\frac{1}{9} \\approx 0.111$. Equivalently $\\sigma^2/\\varepsilon^2 = 4/36$. If frame times happened to be normal the true value would be about $0.003$; Chebyshev guarantees $0.111$ for *any* distribution, including spiky ones with long hitches.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'The weak law of large numbers',
      blocks: [
        {
          type: 'p',
          text: 'Here is the payoff: the [[stat-law-of-large-numbers|law of large numbers]]. Let $X_1, X_2, \\dots$ be independent with the same distribution (**i.i.d.**: independent and identically distributed), mean $\\mu$ and variance $\\sigma^2$, and let $\\bar{X}_n = \\frac{1}{n}(X_1 + \\cdots + X_n)$ be the sample mean. From the previous unit, $E[\\bar{X}_n] = \\mu$ and $\\operatorname{Var}(\\bar{X}_n) = \\sigma^2/n$. Chebyshev does the rest.',
        },
        {
          type: 'theorem',
          name: 'Weak law of large numbers',
          tex: '\\text{for every } \\varepsilon > 0: \\quad P\\big(|\\bar{X}_n - \\mu| \\ge \\varepsilon\\big) \\to 0 \\quad \\text{as } n \\to \\infty',
          text: 'We say $\\bar{X}_n$ **converges in probability** to $\\mu$. The theorem holds even without a finite variance (only $E|X| < \\infty$ is needed), but the proof below uses it.',
        },
        {
          type: 'derivation',
          title: 'Proof from Chebyshev',
          steps: [
            { tex: 'E[\\bar{X}_n] = \\mu, \\qquad \\operatorname{Var}(\\bar{X}_n) = \\frac{\\sigma^2}{n}', why: 'Linearity of expectation; variances of independent terms add, and the factor $\\frac{1}{n}$ comes out squared.' },
            { tex: 'P\\big(|\\bar{X}_n - \\mu| \\ge \\varepsilon\\big) \\le \\frac{\\operatorname{Var}(\\bar{X}_n)}{\\varepsilon^2} = \\frac{\\sigma^2}{n\\varepsilon^2}', why: 'Chebyshev\'s inequality applied to the random variable $\\bar{X}_n$.' },
            { tex: '\\frac{\\sigma^2}{n\\varepsilon^2} \\to 0 \\quad (n \\to \\infty)', why: '$\\sigma^2$ and $\\varepsilon$ are fixed; only $n$ grows. A probability squeezed between $0$ and something tending to $0$ tends to $0$.' },
          ],
          result: 'However narrow a band $\\mu \\pm \\varepsilon$ you choose, the sample mean lands inside it with probability approaching $1$. This is the theorem that makes "estimate a probability by its frequency" and "estimate a mean by an average" legitimate.',
        },
        {
          type: 'derivation',
          title: 'A guaranteed sample size',
          steps: [
            { tex: 'X_i \\in \\{0, 1\\},\\ \\mu = p,\\ \\sigma^2 = p(1 - p) \\le \\tfrac{1}{4}', why: 'Estimating a win rate $p$ from $n$ matches. The variance $p(1 - p)$ is largest at $p = \\frac{1}{2}$.' },
            { tex: 'P\\big(|\\bar{X}_n - p| \\ge 0.05\\big) \\le \\frac{1/4}{n(0.05)^2} \\le 0.05 \\iff n \\ge \\frac{1}{4(0.0025)(0.05)} = 2000', why: 'Require the Chebyshev bound to be at most $5\\%$ and solve for $n$.' },
          ],
          result: 'With $2000$ matches, the observed win rate is within $5$ percentage points of the truth with probability at least $95\\%$, **no matter what $p$ is**. The central limit theorem (next lesson) shows about $385$ matches already suffice — Chebyshev is safe but wasteful.',
        },
        {
          type: 'deepdive',
          title: 'The strong law, and when averages do not settle',
          blocks: [
            {
              type: 'p',
              text: 'The **strong** law of large numbers says more: with probability $1$, the sequence $\\bar{X}_1, \\bar{X}_2, \\dots$ actually converges to $\\mu$ (every single run of the experiment eventually stays near $\\mu$, not just most runs at each fixed $n$). It needs only a finite mean, and its proof is beyond this course.',
            },
            {
              type: 'p',
              text: 'Both laws need $E|X| < \\infty$. The Cauchy distribution, with density $\\frac{1}{\\pi(1 + x^2)}$, has no mean: its tails decay so slowly that $\\int |x| f(x)\\,dx$ diverges. The average of $n$ Cauchy variables has exactly the same Cauchy distribution as a single one — averaging does nothing at all. Heavy-tailed data (some loot economies, network outages, file sizes) can behave nearly this badly in practice.',
            },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'numeric',
      prompt: 'You estimate the mean of a fair die ($\\mu = 3.5$, $\\sigma^2 = \\frac{35}{12}$) by averaging $n$ rolls. Using Chebyshev\'s bound, what is the **smallest** $n$ that guarantees $P(|\\bar{X}_n - 3.5| \\ge 0.1) \\le 0.05$?',
      hint: 'Solve $\\frac{\\sigma^2}{n\\varepsilon^2} \\le 0.05$ for $n$, then round up to a whole number of rolls.',
      label: '$n =$',
      answer: '5834',
      explanation: 'We need $\\frac{35/12}{n(0.1)^2} \\le 0.05$, i.e. $n \\ge \\frac{35/12}{0.01 \\times 0.05} = \\frac{2.91\\overline{6}}{0.0005} = 5833.\\overline{3}$. Since $n$ must be a whole number and $5833$ falls just short, the smallest valid $n$ is $5834$. (Rounding down is the usual slip: a bound must be met, not almost met.)',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'Watching the law work: running averages',
      blocks: [
        {
          type: 'p',
          text: 'A theorem about probabilities is easier to believe when you watch it. The program below flips a fair coin a million times (and rolls a die alongside), printing the running proportion of heads and the running mean of the die at $n = 10, 100, \\dots, 10^6$.',
        },
        {
          type: 'code',
          title: 'coin_flips.cpp',
          runnable: true,
          code: `#include <cstdio>
#include <random>

int main() {
    std::mt19937_64 rng(7);
    long long heads = 0, pips = 0, checkpoint = 10;
    std::printf("%9s %9s %12s %9s\\n", "n", "heads/n", "heads - n/2", "die mean");
    for (long long n = 1; n <= 1'000'000; ++n) {
        heads += rng() >> 63;               // top bit of a 64-bit draw: a fair coin
        pips += 1 + rng() % 6;              // a die roll (modulo bias is negligible)
        if (n == checkpoint) {
            std::printf("%9lld %9.4f %12.1f %9.4f\\n", n, double(heads) / n,
                        heads - n / 2.0, double(pips) / n);
            checkpoint *= 10;
        }
    }
}`,
          output: `        n   heads/n  heads - n/2  die mean
       10    0.6000          1.0    2.9000
      100    0.5400          4.0    3.1000
     1000    0.5110         11.0    3.4740
    10000    0.5020         20.0    3.4989
   100000    0.4989       -106.0    3.5048
  1000000    0.4992       -801.0    3.5031`,
          annotations: [
            { lines: 9, text: 'The top bit of a 64-bit Mersenne Twister output is $0$ or $1$ with probability $\\frac{1}{2}$ each — one fair coin flip per draw.' },
            { lines: 10, text: '$2^{64}$ is not a multiple of $6$, so `% 6` favors some faces, but only by a relative amount of about $6 \\cdot 2^{-64} \\approx 3 \\times 10^{-19}$ — far below anything a simulation could detect.' },
            { lines: '12-13', text: 'Print the running proportion, the **excess** of heads over $n/2$, and the running die mean.' },
          ],
        },
        {
          type: 'p',
          text: 'Look at the two coin columns. The proportion closes in on $0.5$ ($0.6$, $0.54$, $0.511$, …, $0.4992$). But the excess $\\text{heads} - n/2$ does **not** shrink — it wanders to $-801$ after a million flips. Both behaviors are exactly what the theory predicts.',
        },
        {
          type: 'graph',
          x: [0, 1000],
          y: [0.3, 0.8],
          xStep: 100,
          yStep: 0.1,
          height: 270,
          segments: proportionSegments,
          functions: [
            { expr: '0.5 + 1/sqrt(x)', domain: [4, 1000], color: 'gray', dashed: true, label: '$0.5 \\pm 1/\\sqrt{n}$ (two standard deviations)' },
            { expr: '0.5 - 1/sqrt(x)', domain: [4, 1000], color: 'gray', dashed: true },
          ],
          hlines: [
            { y: '0.5 + b', color: 'red' },
            { y: '0.5 - b', color: 'red' },
          ],
          sliders: [{ name: 'b', min: 0.01, max: 0.2, step: 0.01, value: 0.05, label: 'band half-width $\\varepsilon$' }],
          readouts: [
            { label: 'Chebyshev at $n = 1000$: $P(|\\bar{X} - 0.5| \\ge \\varepsilon) \\le$', expr: 'min(0.25/(1000b^2), 1)', digits: 4 },
            { label: 'flips Chebyshev needs for a $5\\%$ bound:', expr: 'ceil(0.25/(0.05b^2))', digits: 0 },
          ],
          caption: 'Running proportion of heads $\\bar{X}_n$ for the first $1000$ flips of three runs of the program (seeds $7$, $8$, $9$; blue is the run printed above). Every run is wild early and then hugs $0.5$, staying mostly inside the $\\pm 1/\\sqrt{n}$ funnel. The red band is $0.5 \\pm \\varepsilon$: the weak law says that for each $\\varepsilon$, the chance of being outside it at a large $n$ goes to $0$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'truefalse',
      prompt: 'A fair coin has just landed heads $10$ times in a row. By the law of large numbers, tails is now more likely than heads on the next flip, so that the proportion can return to $\\frac{1}{2}$.',
      answer: false,
      explanation: 'False — this is the gambler\'s fallacy. The flips are independent, so the next one is heads with probability $\\frac{1}{2}$ regardless of history. The law of large numbers does not work by compensation; it works by **dilution**. In the next $1000$ flips you expect $500$ heads, so the total proportion is expected to be $\\frac{510}{1010} \\approx 0.505$: the early excess of $10$ is still there (on average), but it becomes a negligible fraction of a growing total.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'concept',
      title: 'What the law of large numbers does not say',
      blocks: [
        {
          type: 'p',
          text: 'The law is about the **average** $\\bar{X}_n = S_n/n$. It says nothing reassuring about the **sum** $S_n$ itself, and nothing at all about the next outcome.',
        },
        {
          type: 'list',
          items: [
            '**The excess does not shrink.** $S_n - n\\mu$ has standard deviation $\\sigma\\sqrt{n}$, which *grows*. After $10^6$ fair flips a gap of hundreds of heads is normal (the run above: $-801$, about $1.6$ standard deviations of $500$). Dividing by $n$ is what tames it: $\\sigma\\sqrt{n}/n = \\sigma/\\sqrt{n} \\to 0$.',
            '**No memory, no correction.** Independent trials cannot "know" they are behind. Streaks are not followed by compensating anti-streaks; they are simply outweighed by the many trials that follow.',
            '**It needs its assumptions.** Independence (or at least weak dependence), a common mean, and a finite mean. Correlated data, a drifting process (a patch changes the win rate mid-sample), or heavy tails can break it.',
            '**It gives no rate by itself.** "Eventually" may be very long. Chebyshev gives a crude rate; the central limit theorem gives the accurate one.',
          ],
        },
        {
          type: 'graph',
          x: [0, 10000],
          y: [-120, 120],
          xStep: 2000,
          yStep: 40,
          height: 260,
          segments: deviationSegments,
          functions: [
            { expr: 'sqrt(x)', domain: [0, 10000], color: 'gray', dashed: true, label: '$\\pm\\sqrt{n}$ (two standard deviations of $S_n - n/2$)' },
            { expr: '-sqrt(x)', domain: [0, 10000], color: 'gray', dashed: true },
          ],
          hlines: [{ y: 0, color: 'red' }],
          caption: 'The same three runs, now showing the excess $\\text{heads} - n/2$ over $10{,}000$ flips. The excess does not settle toward $0$: it wanders like a random walk, crossing $0$ now and then, inside a funnel whose width grows like $\\sqrt{n}$ (by $n = 10^6$ the blue run is at $-801$). The proportion still converges, because $\\sqrt{n}$ grows more slowly than $n$.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'The gambler\'s fallacy in games',
          text: 'Players who have opened $40$ loot boxes without a legendary feel "due"; a coach who has lost five coin tosses calls the opposite side; a soldier believes a quiet sector is "overdue" for contact. With independent trials none of this is true. Designers who want players to *feel* compensation must build it explicitly — pity timers, pseudo-random distribution (crit chance that rises after each miss), shuffled bags of outcomes — because plain independent RNG does not provide it.',
        },
      ],
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'mcq',
      prompt: 'A fair coin is flipped $n$ times and $S_n$ is the number of heads. Which statement does the law of large numbers support?',
      options: [
        { text: '$S_n - n/2$ tends to $0$ as $n$ grows.', why: 'No: $S_n - n/2$ has standard deviation $\\frac{1}{2}\\sqrt{n}$, which grows. The excess wanders farther from $0$, as the second graph shows.' },
        { text: 'For large $n$, $S_n/n$ is very likely to be within $0.01$ of $\\frac{1}{2}$.', correct: true, why: 'That is the weak law with $\\varepsilon = 0.01$: $P(|S_n/n - \\frac{1}{2}| \\ge 0.01) \\le \\frac{1/4}{n(0.01)^2} \\to 0$.' },
        { text: 'After a run of heads, tails becomes more likely for a while.', why: 'The gambler\'s fallacy. Independent flips have no memory; the law works by dilution, not compensation.' },
        { text: 'In every block of $100$ flips, about $50$ will be heads.', why: 'A block of $100$ is not "large" in this sense: the count has standard deviation $5$, so $40$ or $60$ heads are ordinary. The law is a limit statement about long averages.' },
      ],
      explanation: 'The law of large numbers concerns the **proportion** $S_n/n$: for any fixed tolerance $\\varepsilon$, the probability of missing $\\frac{1}{2}$ by $\\varepsilon$ or more goes to $0$. It does not make the raw excess shrink (that grows like $\\sqrt{n}$), it does not make outcomes depend on the past, and it does not promise anything about short blocks.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'Monte Carlo integration',
      blocks: [
        {
          type: 'p',
          text: 'The [[dm-monte-carlo|Monte Carlo method]] turns the law of large numbers into an algorithm: write the quantity you want as an expected value, then average many random samples. Integrals are the classic case: [[stat-monte-carlo-integration|Monte Carlo integration]].',
        },
        {
          type: 'derivation',
          title: 'An integral is an expected value',
          steps: [
            { tex: 'U \\sim U(a, b): \\quad E[g(U)] = \\int_a^b g(x)\\,\\frac{1}{b - a}\\,dx', why: 'The expected value of a function of a continuous variable: integrate $g$ against the density, which is $\\frac{1}{b - a}$ on $[a, b]$.' },
            { tex: 'I = \\int_a^b g(x)\\,dx = (b - a)\\,E[g(U)]', why: 'Multiply both sides by $b - a$.' },
            { tex: '\\hat{I}_n = \\frac{b - a}{n}\\sum_{i=1}^n g(U_i) \\ \\to\\ I', why: 'Replace the expectation by an average of i.i.d. samples. The law of large numbers guarantees convergence.' },
            { tex: '\\operatorname{SD}(\\hat{I}_n) = \\frac{(b - a)\\,\\sigma_g}{\\sqrt{n}}, \\quad \\sigma_g = \\operatorname{SD}\\big(g(U)\\big)', why: 'The variance of an average of $n$ independent terms, from the previous unit.' },
          ],
          result: 'The error shrinks like $1/\\sqrt{n}$: each extra correct digit costs $100$ times more samples. Estimating $\\pi$ works the same way with $g$ = "the dart $(U, V)$ lands in the quarter disk", whose mean is $\\frac{\\pi}{4}$.',
        },
        {
          type: 'code',
          title: 'pi_monte_carlo.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdio>
#include <numbers>
#include <random>

std::mt19937_64 rng(12345);
double uniform01() { return (rng() >> 11) * 0x1.0p-53; }

int main() {
    const double exactI = 0.7468241328124270;     // integral of exp(-x^2) on [0, 1]
    long long inside = 0, checkpoint = 100;
    double sumG = 0;
    std::printf("%9s %10s %9s %10s %9s\\n", "n", "pi est", "error", "I est", "error");
    for (long long n = 1; n <= 1'000'000; ++n) {
        double u = uniform01(), v = uniform01();
        if (u * u + v * v < 1.0) ++inside;           // dart lands in the quarter disk
        sumG += std::exp(-u * u);                     // g(U) for the integral
        if (n == checkpoint) {
            double piHat = 4.0 * inside / n, iHat = sumG / n;
            std::printf("%9lld %10.5f %9.5f %10.5f %9.5f\\n", n, piHat,
                        std::fabs(piHat - std::numbers::pi), iHat, std::fabs(iHat - exactI));
            checkpoint *= 10;
        }
    }
}`,
          output: `        n     pi est     error      I est     error
      100    3.04000   0.10159    0.72945   0.01738
     1000    3.18000   0.03841    0.75072   0.00390
    10000    3.13160   0.00999    0.74631   0.00051
   100000    3.13796   0.00363    0.74671   0.00011
  1000000    3.14354   0.00194    0.74687   0.00004`,
          annotations: [
            { lines: 16, text: 'The indicator of the quarter disk has mean $\\frac{\\pi}{4}$ and standard deviation $\\sqrt{\\frac{\\pi}{4}(1 - \\frac{\\pi}{4})} \\approx 0.41$, so $4 \\times$ (fraction inside) has $\\sigma \\approx 1.64$.' },
            { lines: 17, text: 'Here $[a, b] = [0, 1]$, so $\\hat{I}_n$ is just the average of $e^{-U^2}$. Its $\\sigma_g \\approx 0.20$ is much smaller, so this estimate is more accurate for the same $n$.' },
          ],
        },
        {
          type: 'graph',
          x: [1.5, 6.5],
          y: [-5.5, -0.5],
          xStep: 1,
          yStep: 1,
          height: 250,
          functions: [
            { expr: 'log(1.642) - x/2', color: 'blue', label: '$\\pi$: $\\log_{10}(1.64/\\sqrt{n})$' },
            { expr: 'log(0.201) - x/2', color: 'purple', label: 'integral: $\\log_{10}(0.20/\\sqrt{n})$' },
          ],
          points: [
            ...piErrors.map((err, i) => ({ x: i + 2, y: Math.log10(err), color: 'blue' as const })),
            ...intErrors.map((err, i) => ({ x: i + 2, y: Math.log10(err), color: 'purple' as const })),
          ],
          caption: 'A log–log plot: horizontal axis $\\log_{10} n$, vertical axis $\\log_{10}|\\text{error}|$. The dots are the errors printed by the program; the lines are the predicted typical error $\\sigma/\\sqrt{n}$, which on these axes is a straight line of slope $-\\frac{1}{2}$. Individual errors are random — and, since each row comes from one running average, correlated with the rows before — so they scatter around the lines (here the integral\'s happen to fall below), but the downward slope of $-\\frac{1}{2}$ is unmistakable.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Why renderers and AIs use Monte Carlo',
          text: 'The $1/\\sqrt{n}$ rate does not depend on the **dimension** of the integral. A grid rule with $10$ points per axis needs $10^{d}$ points in $d$ dimensions; Monte Carlo just needs samples. Path tracing estimates the rendering equation (an integral over all light paths, effectively infinite-dimensional) by averaging random paths per pixel — which is why noisy renders clean up so slowly and why denoisers exist. Monte Carlo tree search in game AI estimates the value of a move by averaging random playouts, for the same reason.',
        },
      ],
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'numeric',
      prompt: 'A Monte Carlo estimate of an integral has a typical error of about $0.01$ with $10^4$ samples. About how many samples are needed for a typical error of $0.001$?',
      hint: 'The error is proportional to $1/\\sqrt{n}$.',
      label: '$n \\approx$',
      answer: '10^6',
      answerTex: '10^6 = 1{,}000{,}000',
      explanation: 'Error $\\propto 1/\\sqrt{n}$, so dividing the error by $10$ requires multiplying $\\sqrt{n}$ by $10$, i.e. $n$ by $100$: $10^4 \\times 100 = 10^6$ samples. This is why Monte Carlo is great for a rough answer in any dimension and poor for many correct digits — and why variance-reduction tricks (which shrink $\\sigma_g$ instead of growing $n$) are so valuable.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'error',
      prompt: 'A student tries to prove the weak law of large numbers for i.i.d. $X_i$ with mean $\\mu$ and variance $\\sigma^2$. Tap the first wrong line.',
      lines: [
        '$E[\\bar{X}_n] = \\frac{1}{n}\\sum_{i=1}^n E[X_i] = \\mu$.',
        '$\\operatorname{Var}(\\bar{X}_n) = \\frac{1}{n}\\sum_{i=1}^n \\operatorname{Var}(X_i) = \\sigma^2$.',
        'By Chebyshev, $P(|\\bar{X}_n - \\mu| \\ge \\varepsilon) \\le \\frac{\\sigma^2}{\\varepsilon^2}$.',
        'This bound does not depend on $n$, so averaging more data does not help.',
      ],
      errorLines: [2],
      explanation: 'A constant factor comes out of a variance **squared**: $\\operatorname{Var}(\\frac{1}{n}S_n) = \\frac{1}{n^2}\\operatorname{Var}(S_n) = \\frac{1}{n^2} \\cdot n\\sigma^2 = \\frac{\\sigma^2}{n}$. With the correct variance, Chebyshev gives $\\frac{\\sigma^2}{n\\varepsilon^2} \\to 0$, which is the weak law. The student\'s conclusion contradicts the running-average graphs, a good hint that something upstream was wrong.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'order',
      prompt: 'Order the steps of the proof that $P(|X - \\mu| \\ge \\varepsilon) \\le \\sigma^2/\\varepsilon^2$.',
      lines: [
        'Rewrite the event: $|X - \\mu| \\ge \\varepsilon$ exactly when $(X - \\mu)^2 \\ge \\varepsilon^2$.',
        'Note that $Y = (X - \\mu)^2$ is a nonnegative random variable.',
        'Apply Markov\'s inequality: $P(Y \\ge \\varepsilon^2) \\le E[Y]/\\varepsilon^2$.',
        'Recognize $E[Y] = E[(X - \\mu)^2] = \\sigma^2$.',
      ],
      distractors: ['Assume $X$ is normally distributed so that $\\Phi$ can be used.'],
      explanation: 'Chebyshev is Markov applied to the squared deviation. Rewriting the event first makes Markov applicable (it needs a nonnegative variable and a threshold); the variance appears at the end as $E[(X - \\mu)^2]$. The distractor is wrong in spirit: the whole point of Chebyshev is that it holds for **every** distribution with finite variance, normal or not.',
    },
  ],
  takeaways: [
    'Markov: for $X \\ge 0$, $P(X \\ge a) \\le E[X]/a$. Proof: $a\\mathbf{1}[X \\ge a] \\le X$, then take expectations.',
    'Chebyshev: $P(|X - \\mu| \\ge k\\sigma) \\le 1/k^2$ for any distribution with finite variance — safe but often $5$–$40\\times$ too pessimistic.',
    'Weak law of large numbers: $P(|\\bar{X}_n - \\mu| \\ge \\varepsilon) \\le \\frac{\\sigma^2}{n\\varepsilon^2} \\to 0$, so sample means converge in probability to $\\mu$.',
    'The proportion converges but the excess $S_n - n\\mu$ grows like $\\sqrt{n}$. Convergence is by dilution, not compensation: the gambler\'s fallacy is false.',
    'Monte Carlo: $\\int_a^b g = (b - a)E[g(U)]$, estimated by an average with error $\\approx (b - a)\\sigma_g/\\sqrt{n}$ in any dimension — $100\\times$ the samples per extra digit.',
  ],
  reading: [
    {
      title: 'Seeing Theory (Brown University)',
      url: 'https://seeing-theory.brown.edu/',
      source: 'other',
      note: 'The "Basic Probability" chapter has an animated coin-flip running average that shows the law of large numbers in action.',
    },
    {
      title: 'Wikipedia — Law of large numbers',
      url: 'https://en.wikipedia.org/wiki/Law_of_large_numbers',
      source: 'wikipedia',
      note: 'Weak and strong versions, the Chebyshev proof, and the Cauchy counterexample where averaging fails.',
    },
    {
      title: "Wikipedia — Chebyshev's inequality",
      url: 'https://en.wikipedia.org/wiki/Chebyshev%27s_inequality',
      source: 'wikipedia',
      note: 'The history (Bienaymé and Chebyshev), the distributions that make it tight, and sharper one-sided versions.',
    },
    {
      title: 'MIT OCW 18.05 — Introduction to Probability and Statistics',
      url: 'https://ocw.mit.edu/courses/18-05-introduction-to-probability-and-statistics-spring-2014/',
      source: 'other',
      note: 'The class on the law of large numbers and the central limit theorem includes simulations and practice problems.',
    },
  ],
};
