import type { GraphBlock, Lesson } from '../../types';

/** Partial sums S_1 … S_N of the alternating harmonic series and of the harmonic series. */
function partialSums(N: number, alternating: boolean): { x: number; y: number }[] {
  const out: { x: number; y: number }[] = [];
  let s = 0;
  for (let k = 1; k <= N; k++) {
    s += (alternating && k % 2 === 0 ? -1 : 1) / k;
    out.push({ x: k, y: Math.round(s * 10000) / 10000 });
  }
  return out;
}

function zigzag(N: number, alternating: boolean, color: 'blue' | 'red'): Pick<GraphBlock, 'points' | 'segments'> {
  const pts = partialSums(N, alternating);
  return {
    points: pts.map((p) => ({ ...p, color })),
    segments: pts.slice(1).map((p, i) => ({ from: [pts[i].x, pts[i].y] as [number, number], to: [p.x, p.y] as [number, number], color })),
  };
}

const alt20 = zigzag(20, true, 'blue');
const harm12 = zigzag(12, false, 'red');

export const lesson: Lesson = {
  id: 'calc2-alternating-series',
  title: 'Alternating Series',
  summary: 'When the signs flip back and forth, cancellation can tame a series that would otherwise blow up — and tells you exactly how close you are.',
  minutes: 18,
  objectives: [
    'Recognise an alternating series and write it in the form $\\sum (-1)^{n-1} b_n$ with $b_n > 0$',
    'State the three hypotheses of the Alternating Series Test and explain why they force convergence',
    'Check "eventually decreasing" with a derivative and avoid concluding divergence when the test does not apply',
    'Use the error bound $|S - S_n| \\le b_{n+1}$ to estimate a sum and to choose how many terms you need',
    'Predict whether a partial sum overshoots or undershoots the true sum',
  ],
  steps: [
    // 1 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Signs that take turns',
      blocks: [
        {
          type: 'p',
          text: 'Every convergence test you have met so far — the integral test, $p$-series, the comparison tests — works only for series whose terms are **positive**. Positive series have a simple life: the [[partial-sum|partial sums]] only climb, so the question is just whether the climb levels off. Now we let the signs change.',
        },
        {
          type: 'definition',
          term: 'Alternating series',
          text: 'An [[alternating-series]] is a series whose terms alternate strictly between positive and negative. It can be written as\n\n$$\\sum_{n=1}^{\\infty} (-1)^{n-1} b_n = b_1 - b_2 + b_3 - b_4 + \\cdots \\quad\\text{or}\\quad \\sum_{n=1}^{\\infty} (-1)^{n} b_n = -b_1 + b_2 - b_3 + \\cdots$$\n\nwhere every $b_n > 0$. The number $b_n = |a_n|$ is the *size* of the $n$th term; the factor $(-1)^n$ or $(-1)^{n-1}$ carries the sign.',
        },
        {
          type: 'p',
          text: 'The star example is the **alternating harmonic series** $1 - \\frac{1}{2} + \\frac{1}{3} - \\frac{1}{4} + \\cdots$. Its terms have exactly the same sizes as the [[harmonic-series]] $1 + \\frac{1}{2} + \\frac{1}{3} + \\cdots$, which diverges. Watch what flipping every other sign does to the partial sums.',
        },
        {
          type: 'graph',
          x: [0, 21],
          y: [0, 3.4],
          yStep: 0.5,
          points: [...harm12.points!, ...alt20.points!],
          segments: [...harm12.segments!, ...alt20.segments!],
          hlines: [{ y: 'ln(2)', label: 'ln 2 ≈ 0.693', color: 'gray' }],
          caption: 'Red: partial sums of the harmonic series climb forever (slowly, like $\\ln n$). Blue: partial sums of the alternating harmonic series zig-zag — up by $\\frac{1}{n}$, down by $\\frac{1}{n+1}$ — and the zig-zags shrink around $\\ln 2$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why cancellation can win',
          text: 'In the harmonic series every step pushes the total up. In the alternating version each step *undoes most of* the previous one: $1 - \\frac{1}{2} = \\frac{1}{2}$, then $+\\frac{1}{3} - \\frac{1}{4} = \\frac{1}{12}$, then $+\\frac{1}{5} - \\frac{1}{6} = \\frac{1}{30}$. Paired up, the net moves are $\\frac{1}{(2k-1)(2k)}$, which behave like $\\frac{1}{4k^2}$ — a convergent $p$-series. Cancellation turned a divergent size sequence into a convergent sum.',
        },
      ],
    },
    {
      kind: 'mcq',
      prompt: 'Which of these is an alternating series?',
      options: [
        {
          text: '$\\displaystyle\\sum_{n=1}^{\\infty} \\frac{\\cos(n\\pi)}{n^2}$',
          correct: true,
          why: '$\\cos(n\\pi) = (-1)^n$: it is $-1, 1, -1, 1, \\dots$ So the series is $\\sum (-1)^n \\frac{1}{n^2}$ with $b_n = \\frac{1}{n^2} > 0$.',
        },
        {
          text: '$\\displaystyle\\sum_{n=1}^{\\infty} \\frac{\\sin n}{n^2}$',
          why: 'The signs of $\\sin 1, \\sin 2, \\sin 3, \\dots$ are $+, +, +, -, -, -, \\dots$ — they change, but not every term. Mixed signs are not the same as alternating.',
        },
        {
          text: '$\\displaystyle\\sum_{n=1}^{\\infty} \\frac{(-1)^{2n}}{n^2}$',
          why: '$(-1)^{2n} = \\big((-1)^2\\big)^n = 1$ for every $n$, so every term is positive. The minus sign is a decoy.',
        },
        {
          text: '$\\displaystyle\\sum_{n=1}^{\\infty} \\frac{-1}{n^2}$',
          why: 'Every term is negative. That is just $-\\sum \\frac{1}{n^2}$, a positive series with a minus sign in front.',
        },
      ],
      explanation: 'An alternating series needs the sign to flip on **every** term. The trick is to simplify the sign factor: $\\cos(n\\pi) = (-1)^n$ alternates, $(-1)^{2n} = 1$ does not, and $\\sin n$ changes sign irregularly. Spotting $\\cos(n\\pi)$ in disguise is a classic exam move.',
    },
    // 2 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'The Alternating Series Test',
      blocks: [
        {
          type: 'p',
          text: 'The zig-zag picture suggests exactly what we need: the steps must get smaller (so each swing stays inside the previous one) and shrink to zero (so the swings close in on a single number). That is the whole test.',
        },
        {
          type: 'theorem',
          name: 'Alternating Series Test (Leibniz)',
          text: 'Suppose $b_n > 0$ for all $n$ and\n\n1. $b_{n+1} \\le b_n$ for all $n$ (the sizes are non-increasing), and\n2. $\\displaystyle\\lim_{n \\to \\infty} b_n = 0$.\n\nThen $\\displaystyle\\sum_{n=1}^{\\infty} (-1)^{n-1} b_n$ converges (and so does $\\sum (-1)^n b_n$, its negative).',
        },
        {
          type: 'p',
          text: 'This is the [[alternating-series-test]]. Notice what it does **not** say: it never proves divergence. If a hypothesis fails, the test is silent and you need another tool.',
        },
        {
          type: 'derivation',
          title: 'Why it works: even and odd partial sums squeeze together',
          steps: [
            {
              tex: 'S_{2k} = (b_1 - b_2) + (b_3 - b_4) + \\cdots + (b_{2k-1} - b_{2k})',
              why: 'Group the first $2k$ terms in pairs. Because $b_{n+1} \\le b_n$, every bracket is $\\ge 0$.',
            },
            {
              tex: 'S_2 \\le S_4 \\le S_6 \\le \\cdots',
              why: 'Going from $S_{2k}$ to $S_{2k+2}$ adds one more non-negative bracket, so the even partial sums form an increasing ([[monotonic-sequence|monotonic]]) sequence.',
            },
            {
              tex: 'S_{2k} = b_1 - (b_2 - b_3) - (b_4 - b_5) - \\cdots - (b_{2k-2} - b_{2k-1}) - b_{2k} \\le b_1',
              why: 'Regroup the same terms differently: from $b_1$ we subtract non-negative brackets and a positive $b_{2k}$. So the even partial sums never exceed $b_1$ — they are [[bounded-sequence|bounded]] above.',
            },
            {
              tex: '\\lim_{k \\to \\infty} S_{2k} = S \\text{ exists}',
              why: 'An increasing sequence that is bounded above converges (the Monotone Convergence Theorem for sequences).',
            },
            {
              tex: 'S_{2k+1} = S_{2k} + b_{2k+1} \\to S + 0 = S',
              why: 'Each odd partial sum is an even one plus the next term, and $b_{2k+1} \\to 0$ by hypothesis 2.',
            },
            {
              tex: '\\lim_{n \\to \\infty} S_n = S',
              why: 'Both the even-indexed and odd-indexed partial sums approach $S$, so the whole sequence of partial sums does.',
            },
          ],
          result: 'The even partial sums climb, the odd ones fall, and the gap between neighbours is a single term $b_{n+1} \\to 0$. They are forced to meet at one number $S$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why both hypotheses matter',
          text: '**Without $b_n \\to 0$** the swings never shrink: $1 - 1 + 1 - 1 + \\cdots$ bounces between $1$ and $0$ forever. **Without decreasing**, the "up" steps can outpace the "down" steps — the next question\'s counterexample shows a series with $b_n \\to 0$ that still diverges. Decreasing is what keeps each swing inside the previous one.',
        },
        {
          type: 'callout',
          variant: 'history',
          text: 'Gottfried Leibniz knew this test by the 1670s and described it in letters in 1705 and 1713, which is why it is often called the Leibniz test. He used it on series like $1 - \\frac{1}{3} + \\frac{1}{5} - \\cdots = \\frac{\\pi}{4}$, which you will meet again with power series.',
        },
      ],
    },
    {
      kind: 'truefalse',
      prompt: 'If $b_n > 0$ and $\\lim_{n\\to\\infty} b_n = 0$, then $\\sum (-1)^{n-1} b_n$ must converge, even if the $b_n$ are not decreasing.',
      answer: false,
      hint: 'Try building $b_n$ so the positive terms are much bigger than the negative ones.',
      explanation: 'Decreasing really is needed. Let $b_n = \\frac{1}{n}$ for odd $n$ and $b_n = \\frac{1}{n^2}$ for even $n$. Then $b_n \\to 0$, but the series is $\\left(1 + \\frac{1}{3} + \\frac{1}{5} + \\cdots\\right) - \\left(\\frac{1}{4} + \\frac{1}{16} + \\frac{1}{36} + \\cdots\\right)$. The positive part behaves like half the harmonic series and diverges to $\\infty$, while the negative part converges (it is $\\frac{1}{4}\\sum\\frac{1}{k^2}$). So the partial sums go to $\\infty$: the series diverges.',
    },
    // 3 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Using the test in practice',
      blocks: [
        {
          type: 'p',
          text: 'Two practical points make the test much more flexible. First, the decreasing condition only has to hold **eventually** — from some index $N$ on. A finite number of terms never affects whether a series converges. Second, the easiest way to show $b_n$ decreases is often to treat $b_n = f(n)$ and show $f\'(x) < 0$ for large $x$.',
        },
        {
          type: 'derivation',
          title: 'Does $\\displaystyle\\sum_{n=1}^{\\infty} (-1)^n \\frac{\\ln n}{n}$ converge?',
          steps: [
            { tex: 'b_n = \\frac{\\ln n}{n}', why: 'Strip off the sign factor $(-1)^n$. For $n \\ge 2$, $b_n > 0$ (and $b_1 = 0$ just contributes a zero term).' },
            { tex: '\\lim_{n \\to \\infty} \\frac{\\ln n}{n} = \\lim_{x \\to \\infty} \\frac{1/x}{1} = 0', why: 'Treat $n$ as a real variable $x$ and apply L\'Hôpital\'s rule to the $\\frac{\\infty}{\\infty}$ form. Hypothesis 2 holds.' },
            { tex: "f(x) = \\frac{\\ln x}{x} \\implies f'(x) = \\frac{\\frac{1}{x}\\cdot x - \\ln x \\cdot 1}{x^2} = \\frac{1 - \\ln x}{x^2}", why: 'Quotient rule.' },
            { tex: "f'(x) < 0 \\iff \\ln x > 1 \\iff x > e", why: 'The denominator $x^2$ is positive, so the sign is the sign of $1 - \\ln x$.' },
            { tex: 'b_3 \\ge b_4 \\ge b_5 \\ge \\cdots', why: 'Since $e \\approx 2.718$, $f$ is decreasing on $[3, \\infty)$. (Indeed $b_2 \\approx 0.347 < b_3 \\approx 0.366$: it is only *eventually* decreasing — and that is enough.)' },
          ],
          result: 'Both hypotheses hold from $n = 3$ on, so the series converges by the Alternating Series Test.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'If $b_n \\not\\to 0$, use the Divergence Test — not the AST',
          text: 'For $\\sum (-1)^n \\frac{n}{n+1}$ the sizes $b_n = \\frac{n}{n+1} \\to 1$. The AST does not apply, but that alone proves nothing. What proves divergence is the [[divergence-test]]: the terms $(-1)^n\\frac{n}{n+1}$ swing between values near $-1$ and $+1$, so $\\lim a_n \\ne 0$ (it does not even exist), and the series diverges. Always name the test that actually gives your conclusion.',
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'A full-credit AST answer has three parts: (1) identify $b_n$ and note $b_n > 0$; (2) show $\\lim b_n = 0$; (3) show $b_n$ is (eventually) decreasing — by $f\'(x) < 0$ or by comparing $b_{n+1}$ with $b_n$ directly. Then write "converges by the Alternating Series Test". Skipping step 3 is the most common way to lose points.',
        },
      ],
    },
    {
      kind: 'error',
      prompt: 'A student analyses $\\displaystyle\\sum_{n=1}^{\\infty} (-1)^{n} \\frac{n^2}{n^3 + 4}$. Tap the first line where the reasoning goes wrong.',
      lines: [
        '$b_n = \\dfrac{n^2}{n^3+4} > 0$ for all $n \\ge 1$.',
        '$\\lim_{n\\to\\infty} \\dfrac{n^2}{n^3 + 4} = 0$, since the denominator has higher degree.',
        '$b_1 = \\frac{1}{5}$ and $b_2 = \\frac{4}{12} = \\frac{1}{3}$, so $b_2 > b_1$.',
        'The terms are not decreasing, so the Alternating Series Test cannot be used.',
        'Therefore the series diverges.',
      ],
      errorLines: [4],
      explanation: 'Line 3 is a true fact, but line 4 draws the wrong conclusion: the sizes only need to decrease **eventually**. With $f(x) = \\frac{x^2}{x^3+4}$, $f\'(x) = \\frac{x(8 - x^3)}{(x^3+4)^2} < 0$ for $x > 2$, so $b_2 \\ge b_3 \\ge b_4 \\ge \\cdots$ ($\\frac{1}{3}, \\frac{9}{31}, \\frac{4}{17}, \\dots$). The AST applies and the series **converges**. Line 5 compounds the mistake: even when the AST fails, that never proves divergence.',
    },
    {
      kind: 'mcq',
      prompt: 'What can you conclude about $\\displaystyle\\sum_{n=1}^{\\infty} (-1)^n \\frac{n+1}{3n}$?',
      options: [
        {
          text: 'It converges by the Alternating Series Test.',
          why: 'The AST needs $b_n \\to 0$, but $b_n = \\frac{n+1}{3n} \\to \\frac{1}{3}$. Decreasing alone is not enough.',
        },
        {
          text: 'It diverges because the Alternating Series Test fails.',
          why: 'Right conclusion, wrong reason. A failed AST is inconclusive; it never proves divergence by itself.',
        },
        {
          text: 'It diverges by the Divergence Test.',
          correct: true,
          why: 'The terms alternate between values near $-\\frac{1}{3}$ and $+\\frac{1}{3}$, so $\\lim a_n$ is not $0$ (it does not exist). A series whose terms do not go to $0$ diverges.',
        },
        {
          text: 'It converges because the partial sums zig-zag.',
          why: 'Zig-zagging is not enough — the zig-zags must shrink to nothing. Here they stay about $\\frac{1}{3}$ tall forever.',
        },
      ],
      explanation: 'The sizes $b_n = \\frac{n+1}{3n} = \\frac{1}{3} + \\frac{1}{3n}$ decrease, but toward $\\frac{1}{3}$, not $0$. So the terms $a_n = (-1)^n b_n$ do not approach $0$, and the Divergence Test says the series diverges. The partial sums keep jumping by about $\\frac{1}{3}$ and never settle.',
    },
    // 4 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'How close is close? The error bound',
      blocks: [
        {
          type: 'p',
          text: 'The squeeze argument gives more than convergence. The true sum $S$ always lies **between any two consecutive partial sums**, so the distance from $S_n$ to $S$ is at most the distance from $S_n$ to $S_{n+1}$ — which is exactly the next term $b_{n+1}$.',
        },
        {
          type: 'theorem',
          name: 'Alternating Series Estimation Theorem',
          tex: '|S - S_n| \\le b_{n+1}',
          text: 'If $\\sum (-1)^{n-1} b_n$ satisfies the hypotheses of the Alternating Series Test and has sum $S$, then the error made by stopping after $n$ terms is no bigger than the first omitted term. Moreover $S$ lies between $S_n$ and $S_{n+1}$.',
        },
        {
          type: 'p',
          text: 'This [[calc2-alternating-series-estimation|error bound]] is rare luxury: for most series you know a sum exists but have no cheap guarantee on how far off a partial sum is. Drag $n$ below. The dashed envelope $\\ln 2 \\pm \\frac{1}{n+1}$ is the guaranteed error band, and every blue partial sum stays inside it.',
        },
        {
          type: 'graph',
          x: [0, 21],
          y: [0.3, 1.1],
          yStep: 0.1,
          points: alt20.points,
          segments: alt20.segments,
          functions: [
            { expr: 'ln(2) + 1/(x+1)', label: '$\\ln 2 + \\frac{1}{n+1}$', color: 'gray', dashed: true, domain: [1, 20] },
            { expr: 'ln(2) - 1/(x+1)', label: '$\\ln 2 - \\frac{1}{n+1}$', color: 'gray', dashed: true, domain: [1, 20] },
          ],
          hlines: [{ y: 'ln(2)', color: 'green' }],
          vlines: [{ x: 'n', label: 'n', color: 'orange' }],
          sliders: [{ name: 'n', min: 1, max: 20, step: 1, value: 4, label: '$n$' }],
          readouts: [
            { label: 'guaranteed bound $b_{n+1} = \\frac{1}{n+1} =$', expr: '1/(n+1)', digits: 4 },
          ],
          caption: 'Partial sums of $1 - \\frac{1}{2} + \\frac{1}{3} - \\cdots$ with the true sum $\\ln 2$ (green). Odd $n$ overshoot, even $n$ undershoot, and each partial sum is within $\\frac{1}{n+1}$ of $\\ln 2$.',
        },
        {
          type: 'derivation',
          title: 'Estimate $\\displaystyle\\sum_{n=0}^{\\infty} \\frac{(-1)^n}{n!}$ to within $0.001$',
          steps: [
            { tex: 'b_n = \\frac{1}{n!}', why: 'The sizes are positive, decreasing ($b_{n+1} = \\frac{b_n}{n+1} \\le b_n$) and tend to $0$, so the AST and the error bound apply.' },
            { tex: 'b_6 = \\frac{1}{720} \\approx 0.00139, \\qquad b_7 = \\frac{1}{5040} \\approx 0.000198', why: 'We need the first omitted term to be below $0.001$. $b_6$ is too big; $b_7$ is small enough.' },
            { tex: 'S \\approx 1 - 1 + \\frac{1}{2} - \\frac{1}{6} + \\frac{1}{24} - \\frac{1}{120} + \\frac{1}{720}', why: 'So stop just before $b_7$: keep the terms $n = 0$ through $n = 6$ (seven terms).' },
            { tex: '= \\frac{53}{144} \\approx 0.368056', why: 'Common denominator $720$: $\\frac{360 - 120 + 30 - 6 + 1}{720} = \\frac{265}{720} = \\frac{53}{144}$.' },
            { tex: '|S - 0.368056| \\le \\frac{1}{5040} < 0.000199', why: 'The estimation theorem: the error is at most the first omitted term.' },
          ],
          result: 'The sum is about $0.3681$, guaranteed to within $0.0002$. (Its exact value is $\\frac{1}{e} \\approx 0.367879$ — you will see why with Taylor series — and the actual error, $0.000176$, sits just under the bound.)',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'Compute the partial sum $S_4$ of the alternating harmonic series $1 - \\frac{1}{2} + \\frac{1}{3} - \\frac{1}{4} + \\cdots$. Give an exact fraction or a decimal.',
      label: '$S_4 =$',
      answer: '7/12',
      answerTex: '\\frac{7}{12}',
      minDecimals: 3,
      hint: 'Use the common denominator $12$.',
      explanation: '$S_4 = \\frac{12}{12} - \\frac{6}{12} + \\frac{4}{12} - \\frac{3}{12} = \\frac{7}{12} \\approx 0.5833$. By the estimation theorem it is within $b_5 = \\frac{1}{5} = 0.2$ of the true sum $\\ln 2 \\approx 0.6931$ — and indeed the actual error is about $0.11$. Since the last term used was subtracted, $S_4$ undershoots.',
    },
    {
      kind: 'numeric',
      prompt: 'How many terms of $\\displaystyle\\sum_{n=1}^{\\infty} \\frac{(-1)^{n-1}}{n^2}$ does the Alternating Series Estimation Theorem say you need so that the error $|S - S_n|$ is less than $0.005$? Give the smallest such $n$.',
      label: '$n =$',
      answer: '14',
      hint: 'You need $b_{n+1} = \\frac{1}{(n+1)^2} < 0.005$, i.e. $(n+1)^2 > 200$.',
      explanation: 'The bound is the first omitted term: $|S - S_n| \\le \\frac{1}{(n+1)^2}$. We need $\\frac{1}{(n+1)^2} < 0.005 \\iff (n+1)^2 > 200$. Since $14^2 = 196 < 200$ but $15^2 = 225 > 200$, the smallest choice is $n + 1 = 15$, so $n = 14$ terms. A classic slip is to solve $\\frac{1}{n^2} < 0.005$ and answer $15$ — that bounds the last term *used*, not the first one *omitted*.',
    },
    // 5 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Overshoot, undershoot, and a program that knows when to stop',
      blocks: [
        {
          type: 'p',
          text: 'Because $S$ is trapped between $S_n$ and $S_{n+1}$, you also know the **direction** of the error. If the last term you added was positive, you overshot: $S_n > S$. If it was negative, you undershot. Equivalently, the error $S - S_n$ has the same sign as the first omitted term.',
        },
        {
          type: 'table',
          headers: ['$n$', '$S_n$ for $\\sum \\frac{(-1)^{n-1}}{n}$', 'last term', 'position vs $\\ln 2 \\approx 0.6931$', 'bound $\\frac{1}{n+1}$'],
          rows: [
            ['$1$', '$1$', '$+1$', 'above', '$0.5$'],
            ['$2$', '$0.5$', '$-\\frac{1}{2}$', 'below', '$0.333$'],
            ['$3$', '$0.8333$', '$+\\frac{1}{3}$', 'above', '$0.25$'],
            ['$4$', '$0.5833$', '$-\\frac{1}{4}$', 'below', '$0.2$'],
            ['$5$', '$0.7833$', '$+\\frac{1}{5}$', 'above', '$0.167$'],
          ],
          caption: 'Each partial sum lands on the opposite side of $\\ln 2$ from the one before, and is within the bound.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'A free accuracy boost',
          text: 'Since $S$ lies between $S_n$ and $S_{n+1}$, their average $\\frac{S_n + S_{n+1}}{2}$ is usually a much better estimate than either one. For $n = 4$: $\\frac{0.5833 + 0.7833}{2} = 0.6833$, already within $0.01$ of $\\ln 2$.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Stopping rules in numerical code',
          text: 'Library routines that evaluate functions by summing series need a rule for when to stop. For alternating series with shrinking terms the rule is simple and *provably* safe: stop as soon as the next term is below your tolerance. The same oscillate-and-settle behaviour shows up in games — a damped spring, a camera that overshoots and settles, or a bouncing ball whose bounce heights shrink.',
        },
        {
          type: 'code',
          title: 'alternating_sum.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdio>

int main() {
    const double tol = 1e-6;   // accuracy we want
    double sum = 0.0;
    double term = 1.0;         // b_n = 1/n!, starting at n = 0
    int n = 0;
    while (term >= tol) {
        sum += (n % 2 == 0) ? term : -term;  // signs +, -, +, -, ...
        ++n;
        term /= n;             // 1/(n-1)!  ->  1/n!
    }
    std::printf("terms used: %d\\n", n);
    std::printf("estimate:   %.9f\\n", sum);
    std::printf("bound b_n:  %.3e\\n", term);
    std::printf("true error: %.3e\\n", std::fabs(sum - std::exp(-1.0)));
}`,
          output: `terms used: 10
estimate:   0.367879189
bound b_n:  2.756e-07
true error: 2.525e-07`,
          annotations: [
            { lines: 7, text: 'We sum $\\sum_{n \\ge 0} \\frac{(-1)^n}{n!}$, whose sizes $b_n = \\frac{1}{n!}$ satisfy the AST.' },
            { lines: 9, text: 'The stopping rule: keep going while the next term could still matter.' },
            { lines: 12, text: 'Each size is the previous one divided by $n$ — no factorials computed from scratch.' },
            { lines: 16, text: 'When the loop ends, `term` is the first omitted term: the guaranteed error bound.' },
          ],
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Coming next',
          text: 'The alternating harmonic series converges, but the series of its absolute values (the harmonic series) does not. Series like this are called [[conditional-convergence|conditionally convergent]], and they behave strangely — rearranging their terms can change the sum. That is the next lesson.',
        },
      ],
    },
    {
      kind: 'mcq',
      prompt: 'Let $S = \\sum_{n=1}^{\\infty} \\frac{(-1)^{n-1}}{n}$. Using $S_4 = \\frac{7}{12}$ and $S_5 = \\frac{47}{60}$, which statement is guaranteed by the estimation theorem alone?',
      options: [
        {
          text: '$\\frac{7}{12} < S < \\frac{47}{60}$',
          correct: true,
          why: 'The sum always lies between consecutive partial sums. $S_4$ ends with a subtraction (undershoot) and $S_5$ with an addition (overshoot).',
        },
        {
          text: '$S < \\frac{7}{12}$',
          why: 'The last term of $S_4$ was $-\\frac{1}{4}$, a subtraction, so $S_4$ undershoots: $S$ is *above* $\\frac{7}{12}$.',
        },
        {
          text: '$|S - \\frac{7}{12}| \\le \\frac{1}{4}$, and that is the best the theorem gives',
          why: 'True but weaker than necessary: the bound uses the first *omitted* term, $b_5 = \\frac{1}{5}$, not the last term used.',
        },
        {
          text: '$S > \\frac{47}{60}$',
          why: '$S_5$ ends by adding $\\frac{1}{5}$, so it overshoots: $S$ is *below* $\\frac{47}{60}$.',
        },
      ],
      explanation: 'The squeeze argument traps $S$ between every pair of consecutive partial sums: $S_4 = 0.5833 < S < 0.7833 = S_5$. That is consistent with the true value $\\ln 2 \\approx 0.6931$. Note that the interval has width exactly $b_5 = \\frac{1}{5}$, the error bound for $S_4$.',
    },
    {
      kind: 'numeric',
      prompt: 'You approximate $S = \\sum_{n=1}^{\\infty} \\frac{(-1)^{n-1}}{n^3}$ by $S_3 = 1 - \\frac{1}{8} + \\frac{1}{27}$. What is the guaranteed maximum error $b_4$?',
      label: '$|S - S_3| \\le$',
      answer: '1/64',
      answerTex: '\\frac{1}{64}',
      minDecimals: 4,
      explanation: 'The first omitted term is the $n = 4$ term, of size $b_4 = \\frac{1}{4^3} = \\frac{1}{64} \\approx 0.0156$. Since that omitted term is negative, $S_3 \\approx 0.9120$ overshoots, so $0.9120 - 0.0156 \\le S < 0.9120$. (The true sum is about $0.9015$, an actual error of $0.0105$.)',
    },
    {
      kind: 'fill',
      prompt: 'Complete the Alternating Series Test.',
      template: 'If $b_n > 0$, the sizes $b_n$ are eventually ___, and $\\lim b_n =$ ___, then $\\sum (-1)^{n-1} b_n$ converges, and stopping after $n$ terms gives error at most ___.',
      blanks: [{ answers: ['decreasing'] }, { answers: ['$0$'] }, { answers: ['$b_{n+1}$'] }],
      wordBank: ['decreasing', 'increasing', '$0$', '$1$', '$b_{n+1}$', '$b_n$', '$S_{n+1}$'],
      explanation: 'The two hypotheses are "eventually decreasing" and "$b_n \\to 0$". Under them the sum is trapped between consecutive partial sums, so the error after $n$ terms is at most the first omitted term $b_{n+1}$ — not $b_n$, the last term you kept.',
    },
  ],
  takeaways: [
    'An alternating series has the form $\\sum (-1)^{n-1} b_n$ or $\\sum (-1)^n b_n$ with $b_n > 0$; simplify sign factors like $\\cos(n\\pi) = (-1)^n$.',
    'Alternating Series Test: if $b_n$ is eventually decreasing and $b_n \\to 0$, the series converges. Both hypotheses are needed.',
    'A failed AST is inconclusive. If $b_n \\not\\to 0$, the series diverges by the Divergence Test.',
    'Estimation theorem: $|S - S_n| \\le b_{n+1}$, and $S$ lies between $S_n$ and $S_{n+1}$ — so you know both the size and the direction of the error.',
    'The alternating harmonic series converges (to $\\ln 2$) even though the harmonic series diverges: cancellation matters.',
  ],
  reading: [
    {
      title: 'OpenStax Calculus Volume 2 — 5.5 Alternating Series',
      url: 'https://openstax.org/books/calculus-volume-2/pages/5-5-alternating-series',
      source: 'openstax',
      note: 'Free textbook section with the proof of the test, the remainder estimate and many worked examples.',
    },
    {
      title: "Paul's Online Notes — Alternating Series Test",
      url: 'https://tutorial.math.lamar.edu/Classes/CalcII/AlternatingSeries.aspx',
      source: 'paul',
      note: 'Clear examples of checking "eventually decreasing", including cases where the test fails.',
    },
    {
      title: "Paul's Online Notes — Estimating the Value of a Series",
      url: 'https://tutorial.math.lamar.edu/Classes/CalcII/SeriesEstimating.aspx',
      source: 'paul',
      note: 'Compares error estimates for alternating series with those for the integral and comparison tests.',
    },
    {
      title: 'Wikipedia — Alternating series test',
      url: 'https://en.wikipedia.org/wiki/Alternating_series_test',
      source: 'wikipedia',
      note: 'Includes the counterexample showing why the decreasing hypothesis is needed.',
    },
  ],
};
