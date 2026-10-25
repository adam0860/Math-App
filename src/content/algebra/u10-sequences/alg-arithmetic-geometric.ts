import type { Lesson } from '../../types';

const arithPoints = [1, 2, 3, 4, 5, 6, 7, 8].map((n) => ({ x: n, y: `a + ${n - 1}d` }));
const geoPoints = [1, 2, 3, 4, 5, 6, 7, 8].map((n) => ({ x: n, y: `2r^${n - 1}` }));
const partialSumPoints = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((n) => ({ x: n, y: `(1 - r^${n})/(1 - r)` }));

export const lesson: Lesson = {
  id: 'alg-arithmetic-geometric',
  title: 'Arithmetic and Geometric Sequences and Series',
  summary: 'Add the same amount or multiply by the same factor: two patterns with exact formulas for any term, any finite sum, and even some infinite sums.',
  minutes: 19,
  objectives: [
    'Recognise arithmetic and geometric sequences and find the common difference $d$ or common ratio $r$',
    'Write and use $a_n = a_1 + (n-1)d$ and $a_n = a_1 r^{n-1}$, including finding unknown terms',
    'Sum an arithmetic series with $S_n = \\frac{n(a_1 + a_n)}{2}$ and a finite geometric series with $S_n = \\frac{a_1(1 - r^n)}{1 - r}$',
    'Decide whether an infinite geometric series converges and, if it does, find its sum $\\frac{a_1}{1 - r}$',
    'Model real situations (raises, bounces, repeating decimals) with the right kind of sequence',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Arithmetic sequences: add the same amount each time',
      blocks: [
        {
          type: 'p',
          text: 'In $7, 11, 15, 19, \\dots$ every term is $4$ more than the one before. A sequence like this, where you always **add** the same number, is an [[arithmetic-sequence]]. The fixed amount is the [[common-difference]] $d = a_{n} - a_{n-1}$. It can be negative ($10, 7, 4, 1, \\dots$ has $d = -3$) or zero.',
        },
        {
          type: 'p',
          text: 'Recursively, $a_n = a_{n-1} + d$. To get an explicit formula, notice how many times $d$ has been added by the time you reach each term:',
        },
        {
          type: 'math',
          tex: 'a_1, \\quad a_1 + d, \\quad a_1 + 2d, \\quad a_1 + 3d, \\quad \\dots \\quad\\implies\\quad a_n = a_1 + (n - 1)d',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why $n - 1$ and not $n$?',
          text: 'Moving from term $1$ to term $n$ takes $n - 1$ steps, and each step adds one $d$. It is the fence-post problem: a fence with $n$ posts has only $n - 1$ gaps between them. Programmers meet the same thing as the off-by-one error.',
        },
        {
          type: 'derivation',
          title: 'Find the 50th term of $7, 11, 15, 19, \\dots$',
          steps: [
            { tex: 'a_1 = 7, \\quad d = 11 - 7 = 4', why: 'Read off the first term, and subtract neighbours to get $d$. (Check: $15 - 11 = 4$ too.)' },
            { tex: 'a_{50} = a_1 + (50 - 1)d', why: 'The explicit formula with $n = 50$: forty-nine steps of size $d$.' },
            { tex: '= 7 + 49 \\cdot 4', why: 'Substitute $a_1 = 7$ and $d = 4$.' },
            { tex: '= 7 + 196 = 203', why: 'Multiply before adding (order of operations).' },
          ],
          result: '$a_{50} = 203$, found without listing the 48 terms in between.',
        },
        {
          type: 'graph',
          x: [0, 9],
          y: [-15, 20],
          functions: [{ expr: 'a + (x - 1)d', label: '$y = a_1 + (x - 1)d$', color: 'gray', dashed: true }],
          points: arithPoints,
          sliders: [
            { name: 'a', min: -5, max: 5, step: 0.5, value: 2, label: 'first term $a_1$' },
            { name: 'd', min: -3, max: 3, step: 0.5, value: 1.5, label: 'common difference $d$' },
          ],
          readouts: [{ label: '$a_8 = a_1 + 7d =$', expr: 'a + 7d' }],
          caption: 'The terms of an arithmetic sequence always lie on a **line** of slope $d$. Arithmetic sequences are the discrete version of linear functions: equal steps in $n$ give equal changes in $a_n$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'numeric',
      prompt: 'An arithmetic sequence has $a_1 = 12$ and common difference $d = -5$. Find $a_{20}$.',
      label: '$a_{20} =$',
      answer: '-83',
      hint: '$a_{20} = a_1 + 19d$.',
      explanation: '$a_{20} = 12 + (20 - 1)(-5) = 12 - 95 = -83$. A common mistake is to use $20d$, which gives $-88$: only $19$ steps separate term $1$ from term $20$.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Geometric sequences: multiply by the same factor',
      blocks: [
        {
          type: 'p',
          text: 'In $2, 6, 18, 54, \\dots$ every term is $3$ **times** the one before. That makes it a [[geometric-sequence]], and the fixed multiplier is the [[common-ratio]] $r = \\frac{a_n}{a_{n-1}}$ (with $r \\ne 0$). By the same counting as before — $n - 1$ multiplications to reach term $n$ — the explicit formula is:',
        },
        {
          type: 'theorem',
          name: 'General term of a geometric sequence',
          tex: 'a_n = a_1 \\, r^{\\,n-1}',
          text: 'Recursively: $a_n = r \\cdot a_{n-1}$.',
        },
        {
          type: 'graph',
          x: [0, 9],
          y: [-10, 10],
          points: geoPoints,
          sliders: [{ name: 'r', min: -1.5, max: 1.5, step: 0.05, value: 1.3, label: 'common ratio $r$' }],
          readouts: [{ label: '$a_8 = 2r^7 =$', expr: '2r^7' }],
          caption: 'Here $a_1 = 2$. Try $r > 1$ (explosive growth), $0 < r < 1$ (decay toward $0$), $-1 < r < 0$ (alternating and shrinking) and $r < -1$ (alternating and growing). Geometric sequences are the discrete version of [[exponential-function|exponential functions]].',
        },
        {
          type: 'derivation',
          title: 'A geometric sequence has $a_2 = 6$ and $a_5 = 162$. Find $a_n$.',
          steps: [
            { tex: 'a_2 = a_1 r = 6, \\qquad a_5 = a_1 r^4 = 162', why: 'Write both known terms using $a_n = a_1 r^{n-1}$.' },
            { tex: '\\frac{a_1 r^4}{a_1 r} = \\frac{162}{6}', why: 'Dividing the equations cancels the unknown $a_1$ — the same trick as elimination in a system.' },
            { tex: 'r^3 = 27 \\implies r = 3', why: 'Simplify and take the (real) cube root.' },
            { tex: 'a_1 = \\frac{6}{r} = 2', why: 'Back-substitute into $a_1 r = 6$.' },
            { tex: 'a_n = 2 \\cdot 3^{\\,n-1}', why: 'Check: $a_5 = 2 \\cdot 3^4 = 2 \\cdot 81 = 162$ ✓.' },
          ],
          result: 'The sequence is $2, 6, 18, 54, 162, \\dots$ with $a_n = 2 \\cdot 3^{n-1}$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Additive vs. multiplicative change',
          text: 'Arithmetic: equal **differences**, so linear. Geometric: equal **ratios**, so exponential. To test a list of numbers, compute both $a_{n} - a_{n-1}$ and $\\frac{a_{n}}{a_{n-1}}$. Whichever one is constant tells you the type; if neither is, the sequence is neither (like $1, 4, 9, 16, \\dots$).',
        },
        {
          type: 'callout',
          variant: 'warning',
          text: 'Only $r$ is raised to the power: $a_1 r^{n-1}$ means $a_1 \\cdot \\left(r^{n-1}\\right)$, not $(a_1 r)^{n-1}$. For $2 \\cdot 3^{4}$ that is $162$, while $6^4 = 1296$.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Geometric sequences in games',
          text: 'Multiplying a velocity by a damping factor like `0.98` every frame produces a geometric sequence: after $n$ frames the speed is $v_0 (0.98)^n$. And when `std::vector` runs out of room it typically grows its capacity by a constant factor (often $1.5$ or $2$), so capacities form a geometric sequence — the reason `push_back` is fast on average.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'mcq',
      prompt: 'Which of these sequences is geometric?',
      options: [
        {
          text: '$2, 4, 6, 8, \\dots$',
          why: 'The differences are constant ($d = 2$), so this is arithmetic. The ratios $2, 1.5, 1.33\\dots$ are not constant.',
        },
        {
          text: '$1, 4, 9, 16, \\dots$',
          why: 'These are the squares $n^2$. Differences ($3, 5, 7$) and ratios ($4, 2.25, 1.78$) both change, so it is neither.',
        },
        {
          text: '$1, 2, 4, 7, 11, \\dots$',
          why: 'The differences grow by $1$ each time ($1, 2, 3, 4$), and the ratios vary. Neither arithmetic nor geometric.',
        },
        {
          text: '$48, -24, 12, -6, \\dots$',
          correct: true,
          why: 'Each term is $-\\frac{1}{2}$ times the previous one: $\\frac{-24}{48} = \\frac{12}{-24} = \\frac{-6}{12} = -\\frac{1}{2}$. A negative ratio makes the signs alternate.',
        },
      ],
      explanation: 'Test the ratio $\\frac{a_n}{a_{n-1}}$ between every pair of neighbours. Only $48, -24, 12, -6$ has a constant ratio, $r = -\\frac{1}{2}$. Alternating signs do not disqualify a sequence from being geometric — they just mean $r < 0$.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'expr',
      prompt: 'Find an explicit formula for the geometric sequence $5, 15, 45, 135, \\dots$',
      variables: ['n'],
      label: '$a_n =$',
      answer: '5*3^(n - 1)',
      answerTex: 'a_n = 5 \\cdot 3^{n-1}',
      hint: 'Find $r$ by dividing two neighbouring terms, then use $a_n = a_1 r^{n-1}$. Type powers with `^`.',
      explanation: '$a_1 = 5$ and $r = \\frac{15}{5} = 3$, so $a_n = 5 \\cdot 3^{n-1}$. Check: $a_4 = 5 \\cdot 3^3 = 135$ ✓. An equivalent form is $\\frac{5}{3} \\cdot 3^n$, but $5 \\cdot 3^n$ is wrong — it gives $15$ as the first term.',
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'concept',
      title: 'Arithmetic series: Gauss\'s trick, in general',
      blocks: [
        {
          type: 'p',
          text: 'A [[series]] is the sum of the terms of a sequence. The sum of the first $n$ terms, $S_n = a_1 + a_2 + \\cdots + a_n$, is called the $n$-th [[partial-sum]]. For an arithmetic sequence, the pairing trick from the last lesson works perfectly.',
        },
        {
          type: 'derivation',
          title: 'Deriving the sum of an [[arithmetic-series]]',
          steps: [
            { tex: 'S_n = a_1 + (a_1 + d) + \\cdots + (a_n - d) + a_n', why: 'Write the sum forwards. Each term is $d$ more than the one before.' },
            { tex: 'S_n = a_n + (a_n - d) + \\cdots + (a_1 + d) + a_1', why: 'Write the same sum backwards. Each term is $d$ less than the one before.' },
            { tex: '2S_n = (a_1 + a_n) + (a_1 + a_n) + \\cdots + (a_1 + a_n)', why: 'Add the two lines column by column: the $+d$ and $-d$ cancel, so every column is $a_1 + a_n$.' },
            { tex: '2S_n = n(a_1 + a_n)', why: 'There are $n$ columns, one for each term.' },
            { tex: 'S_n = \\frac{n(a_1 + a_n)}{2}', why: 'Divide by $2$.' },
          ],
          result: 'Substituting $a_n = a_1 + (n-1)d$ gives the alternative form $S_n = \\frac{n}{2}\\bigl(2a_1 + (n-1)d\\bigr)$, handy when you know $d$ but not the last term.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'What the formula really says',
          text: '$\\frac{a_1 + a_n}{2}$ is the **average** of the first and last terms. Because the terms are evenly spaced, that is also the average of *all* the terms. And any sum equals (number of terms) × (average term). So $S_n = n \\cdot \\frac{a_1 + a_n}{2}$ is simply "count times average".',
        },
        {
          type: 'derivation',
          title: 'Evaluate $7 + 11 + 15 + \\cdots + 203$',
          steps: [
            { tex: '203 = 7 + (n - 1) \\cdot 4', why: 'First count the terms: set the general term equal to the last term.' },
            { tex: '196 = 4(n - 1) \\implies n - 1 = 49 \\implies n = 50', why: 'Solve the linear equation. Equivalently, $n = \\frac{\\text{last} - \\text{first}}{d} + 1$.' },
            { tex: 'S_{50} = \\frac{50(7 + 203)}{2}', why: 'Apply $S_n = \\frac{n(a_1 + a_n)}{2}$.' },
            { tex: '= 25 \\cdot 210 = 5250', why: 'Simplify $\\frac{50}{2} = 25$ first to keep the arithmetic small.' },
          ],
          result: 'The sum is $5250$.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Count the terms carefully',
          text: 'The number of terms from $7$ to $203$ in steps of $4$ is $\\frac{203 - 7}{4} + 1 = 50$, not $\\frac{203 - 7}{4} = 49$. Forgetting the $+1$ is the single most common error in arithmetic-series problems (the fence-post problem again).',
        },
      ],
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'numeric',
      prompt: 'Find the sum $2 + 5 + 8 + \\cdots + 59$.',
      label: 'Sum $=$',
      answer: '610',
      hint: 'First find how many terms there are: $n = \\frac{59 - 2}{3} + 1$.',
      explanation: 'This is arithmetic with $a_1 = 2$ and $d = 3$. The number of terms is $\\frac{59 - 2}{3} + 1 = 19 + 1 = 20$. Then $S_{20} = \\frac{20(2 + 59)}{2} = 10 \\cdot 61 = 610$.',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'concept',
      title: 'Finite geometric series: the shift-and-subtract trick',
      blocks: [
        {
          type: 'p',
          text: 'Pairing does not work for geometric sums, because the terms are not evenly spaced. A different trick does: multiplying by $r$ shifts every term one place to the right, so almost everything cancels when you subtract.',
        },
        {
          type: 'derivation',
          title: 'Deriving the sum of a finite geometric series',
          steps: [
            { tex: 'S_n = a_1 + a_1 r + a_1 r^2 + \\cdots + a_1 r^{n-1}', why: 'The sum of the first $n$ terms ($n$ terms: exponents $0$ through $n - 1$).' },
            { tex: 'rS_n = \\phantom{a_1 + {}} a_1 r + a_1 r^2 + \\cdots + a_1 r^{n-1} + a_1 r^n', why: 'Multiply both sides by $r$. Every exponent goes up by one, so the list slides one place right.' },
            { tex: 'S_n - rS_n = a_1 - a_1 r^n', why: 'Subtract the second line from the first. Everything from $a_1 r$ to $a_1 r^{n-1}$ appears in both and cancels; only the first term of $S_n$ and the last term of $rS_n$ survive.' },
            { tex: 'S_n(1 - r) = a_1(1 - r^n)', why: 'Factor $S_n$ out on the left and $a_1$ out on the right.' },
            { tex: 'S_n = \\frac{a_1(1 - r^n)}{1 - r} \\quad (r \\ne 1)', why: 'Divide by $1 - r$, which is allowed only when $r \\ne 1$. (If $r = 1$, every term is $a_1$ and $S_n = n a_1$.)' },
          ],
          result: 'Sum of a finite [[geometric-series]]: $S_n = \\dfrac{a_1(1 - r^n)}{1 - r}$.',
        },
        {
          type: 'derivation',
          title: 'Evaluate $3 + 6 + 12 + \\cdots + 384$',
          steps: [
            { tex: 'a_1 = 3, \\quad r = 2', why: 'Each term doubles.' },
            { tex: '3 \\cdot 2^{n-1} = 384 \\implies 2^{n-1} = 128 = 2^7 \\implies n = 8', why: 'Count the terms by solving $a_n = 384$.' },
            { tex: 'S_8 = \\frac{3(1 - 2^8)}{1 - 2} = \\frac{3(1 - 256)}{-1}', why: 'Apply the formula with $n = 8$. Note the exponent is $n = 8$, not $n - 1$.' },
            { tex: '= \\frac{-765}{-1} = 765', why: 'Two negatives make a positive. A sum of positive terms must be positive — a quick sanity check.' },
          ],
          result: '$3 + 6 + 12 + \\cdots + 384 = 765$.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Why the biggest 32-bit unsigned integer is $2^{32} - 1$',
          text: 'With $a_1 = 1$ and $r = 2$: $1 + 2 + 4 + \\cdots + 2^{n-1} = \\frac{1 - 2^n}{1 - 2} = 2^n - 1$. A 32-bit unsigned integer with every bit set is exactly $2^0 + 2^1 + \\cdots + 2^{31} = 2^{32} - 1 = 4{,}294{,}967{,}295$ — the value of `UINT32_MAX`.',
        },
        {
          type: 'callout',
          variant: 'history',
          title: 'Grains on a chessboard',
          text: 'An old legend has a king offering a reward of one grain of rice on the first square of a chessboard, two on the second, four on the third, doubling each time. The total is $2^{64} - 1 \\approx 1.8 \\times 10^{19}$ grains — far more rice than has ever been grown. Exponential growth fools intuition.',
        },
      ],
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'order',
      prompt: 'Put the steps of the derivation of the finite geometric series formula in order.',
      lines: [
        'Write $S = a + ar + ar^2 + \\cdots + ar^{n-1}$',
        'Multiply by $r$: $rS = ar + ar^2 + \\cdots + ar^{n}$',
        'Subtract: $S - rS = a - ar^n$',
        'Factor: $S(1 - r) = a(1 - r^n)$',
        'Divide by $1 - r$ (assuming $r \\ne 1$): $S = \\dfrac{a(1 - r^n)}{1 - r}$',
      ],
      distractors: ['Add: $S + rS = a + ar^n$'],
      explanation: 'The key idea is that $rS$ is $S$ shifted by one term, so **subtracting** cancels every middle term. Adding would double them instead of cancelling them. Factoring then isolates $S$, and dividing requires $r \\ne 1$.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'error',
      prompt: 'A student evaluates $\\sum_{k=1}^{6} 2 \\cdot 3^{k-1}$. Tap the first line that is wrong.',
      lines: [
        '$\\sum_{k=1}^{6} 2 \\cdot 3^{k-1} = 2 + 6 + 18 + \\cdots$',
        '$a_1 = 2, \\quad r = 3, \\quad n = 6$',
        '$S_6 = \\dfrac{2(1 - 3^5)}{1 - 3}$',
        '$= \\dfrac{2(1 - 243)}{-2}$',
        '$= 242$',
      ],
      errorLines: [3],
      explanation: 'Line 3 uses the exponent $n - 1 = 5$, mixing up the *term* formula ($a_n = a_1 r^{n-1}$) with the *sum* formula, whose exponent is $n$. Correctly, $S_6 = \\frac{2(1 - 3^6)}{1 - 3} = \\frac{2(1 - 729)}{-2} = 728$. Check by adding: $2 + 6 + 18 + 54 + 162 + 486 = 728$. (The student\'s $242$ is the sum of only the first five terms.)',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'Infinite geometric series: adding forever',
      blocks: [
        {
          type: 'p',
          text: 'Can you add infinitely many numbers and get a finite answer? Walk halfway to a wall, then half the remaining distance, then half of what remains… Your total distance is $\\frac{1}{2} + \\frac{1}{4} + \\frac{1}{8} + \\cdots$, and you never pass the wall — the sum is exactly $1$.',
        },
        {
          type: 'p',
          text: 'To make "adding forever" precise, look at the partial sums $S_n = \\frac{a_1(1 - r^n)}{1 - r}$. If $|r| < 1$, then $r^n$ shrinks toward $0$ as $n$ grows (e.g. $0.5^{10} \\approx 0.001$), so $S_n$ settles toward $\\frac{a_1(1 - 0)}{1 - r}$. We define the infinite sum to be that value.',
        },
        {
          type: 'theorem',
          name: 'Sum of an infinite geometric series',
          tex: '\\sum_{k=1}^{\\infty} a_1 r^{k-1} = a_1 + a_1 r + a_1 r^2 + \\cdots = \\frac{a_1}{1 - r} \\qquad \\text{if } |r| < 1',
          text: 'If $|r| \\ge 1$ (and $a_1 \\ne 0$), the series has no sum: it *diverges*.',
        },
        {
          type: 'graph',
          x: [0, 13],
          y: [-0.5, 6],
          points: partialSumPoints,
          hlines: [{ y: '1/(1 - r)', label: 'a₁/(1 − r)' }],
          sliders: [{ name: 'r', min: -0.9, max: 0.8, step: 0.05, value: 0.5, label: 'ratio $r$' }],
          readouts: [
            { label: '$S_{12} =$', expr: '(1 - r^12)/(1 - r)', digits: 5 },
            { label: '$\\frac{a_1}{1 - r} =$', expr: '1/(1 - r)', digits: 5 },
          ],
          caption: 'Partial sums $S_1, S_2, \\dots, S_{12}$ of $1 + r + r^2 + \\cdots$ (so $a_1 = 1$). For $r > 0$ they climb steadily toward the dashed line; for $r < 0$ they zig-zag around it. The closer $|r|$ is to $1$, the slower they settle.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why $|r| < 1$ is essential',
          text: 'If $|r| \\ge 1$, the terms $a_1 r^{k-1}$ do not shrink, so each new term changes the total by at least $|a_1|$. Then $1 + 2 + 4 + \\cdots$ grows without bound, and $1 - 1 + 1 - 1 + \\cdots$ bounces between $1$ and $0$ forever. Plugging such an $r$ into $\\frac{a_1}{1 - r}$ produces a number, but it means nothing: $1 + 2 + 4 + \\cdots \\ne \\frac{1}{1 - 2} = -1$.',
        },
        {
          type: 'derivation',
          title: 'Write $0.\\overline{36} = 0.363636\\ldots$ as a fraction',
          steps: [
            { tex: '0.\\overline{36} = 0.36 + 0.0036 + 0.000036 + \\cdots', why: 'Split the decimal into its repeating blocks.' },
            { tex: '= \\frac{36}{100} + \\frac{36}{100^2} + \\frac{36}{100^3} + \\cdots', why: 'Each block is the previous one divided by $100$: geometric with $a_1 = \\frac{36}{100}$, $r = \\frac{1}{100}$.' },
            { tex: '= \\frac{36/100}{1 - 1/100}', why: '$|r| = \\frac{1}{100} < 1$, so the infinite-sum formula applies.' },
            { tex: '= \\frac{36/100}{99/100} = \\frac{36}{99} = \\frac{4}{11}', why: 'Multiply top and bottom by $100$, then reduce by the common factor $9$.' },
          ],
          result: '$0.\\overline{36} = \\frac{4}{11}$. Every repeating decimal is a geometric series, which is why every repeating decimal is a [[rational-number]].',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Use the first term, whatever it is',
          text: 'In $\\frac{a_1}{1 - r}$, the numerator is the **first term of the series**. For $\\sum_{k=1}^{\\infty} \\left(\\frac{1}{3}\\right)^k = \\frac{1}{3} + \\frac{1}{9} + \\cdots$, the first term is $\\frac{1}{3}$ (not $1$), so the sum is $\\frac{1/3}{1 - 1/3} = \\frac{1}{2}$.',
        },
        {
          type: 'callout',
          variant: 'note',
          text: 'In Calculus II you will study infinite series in general, where deciding whether a sum converges takes real work. Geometric series are the one family where you can answer completely: converge exactly when $|r| < 1$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'numeric',
      prompt: 'Find the sum of the infinite geometric series.',
      tex: '6 - 3 + \\frac{3}{2} - \\frac{3}{4} + \\cdots',
      label: 'Sum $=$',
      answer: '4',
      hint: 'Find $r$ by dividing the second term by the first. Check that $|r| < 1$.',
      explanation: 'Here $a_1 = 6$ and $r = \\frac{-3}{6} = -\\frac{1}{2}$, so $|r| < 1$ and the series converges to $\\frac{6}{1 - (-1/2)} = \\frac{6}{3/2} = 4$. The partial sums $6, 3, 4.5, 3.75, \\dots$ zig-zag around $4$, closing in from both sides.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'truefalse',
      prompt: 'The infinite series $8 - 12 + 18 - 27 + \\cdots$ has sum $\\dfrac{8}{1 - (-3/2)} = \\dfrac{16}{5}$.',
      answer: false,
      explanation: 'The ratio is $r = \\frac{-12}{8} = -\\frac{3}{2}$, and $|r| = 1.5 > 1$. The terms grow in size, so the partial sums $8, -4, 14, -13, \\dots$ swing ever wider and never settle: the series **diverges**. The formula $\\frac{a_1}{1 - r}$ is only valid when $|r| < 1$.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'fill',
      prompt: 'Convert the repeating decimal $0.\\overline{7} = 0.777\\ldots$ to a fraction.',
      template: 'Write $0.\\overline{7} = 0.7 + 0.07 + 0.007 + \\cdots$. The first term is ___, the common ratio is ___, so the sum is ___.',
      blanks: [{ answers: ['$\\frac{7}{10}$'] }, { answers: ['$\\frac{1}{10}$'] }, { answers: ['$\\frac{7}{9}$'] }],
      wordBank: ['$\\frac{7}{10}$', '$\\frac{1}{10}$', '$\\frac{7}{9}$', '$10$', '$\\frac{9}{7}$', '$\\frac{7}{100}$'],
      explanation: 'Each term is a tenth of the previous one, so $a_1 = \\frac{7}{10}$ and $r = \\frac{1}{10}$. The sum is $\\frac{7/10}{1 - 1/10} = \\frac{7/10}{9/10} = \\frac{7}{9}$. (Check on a calculator: $7 \\div 9 = 0.777\\ldots$) The same reasoning shows $0.\\overline{9} = \\frac{9/10}{9/10} = 1$.',
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'concept',
      title: 'Putting it together: choosing the right model',
      blocks: [
        {
          type: 'p',
          text: 'In applications, the first question is always: does the quantity change by a fixed **amount** (arithmetic) or by a fixed **percentage** (geometric)? Then decide whether you need one term or a total.',
        },
        {
          type: 'table',
          headers: ['Feature', 'Arithmetic', 'Geometric'],
          rows: [
            ['Pattern', 'add $d$', 'multiply by $r$'],
            ['$n$-th term', '$a_1 + (n-1)d$', '$a_1 r^{n-1}$'],
            ['Sum of $n$ terms', '$\\frac{n(a_1 + a_n)}{2}$', '$\\frac{a_1(1 - r^n)}{1 - r}$, $r \\ne 1$'],
            ['Infinite sum', 'diverges (unless every term is $0$)', '$\\frac{a_1}{1 - r}$ if $|r| < 1$'],
            ['Continuous cousin', 'linear function', 'exponential function'],
          ],
        },
        {
          type: 'derivation',
          title: 'Job A: \\$50,000 with \\$2,000 raises. Job B: \\$50,000 with 3% raises. Total pay over 10 years?',
          steps: [
            { tex: '\\text{A: } 50000,\\ 52000,\\ 54000,\\ \\dots \\quad (d = 2000)', why: 'A fixed-dollar raise adds the same amount each year: arithmetic.' },
            { tex: 'S_{10}^{A} = \\frac{10}{2}\\bigl(2 \\cdot 50000 + 9 \\cdot 2000\\bigr) = 5 \\cdot 118000 = 590000', why: 'Use $S_n = \\frac{n}{2}(2a_1 + (n-1)d)$, since we know $d$ but not the last salary.' },
            { tex: '\\text{B: } 50000,\\ 50000(1.03),\\ 50000(1.03)^2,\\ \\dots \\quad (r = 1.03)', why: 'A 3% raise multiplies the salary by $1.03$ each year: geometric.' },
            { tex: 'S_{10}^{B} = \\frac{50000(1 - 1.03^{10})}{1 - 1.03} \\approx 573194', why: 'Finite geometric sum with $n = 10$. Here $1.03^{10} \\approx 1.3439$.' },
          ],
          result: 'Over 10 years Job A pays about \\$16,800 more. Over a long enough career the percentage raises win — exponential growth always overtakes linear growth eventually.',
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'Word problems are usually graded on the setup: identify $a_1$, $d$ or $r$, and $n$ explicitly before using a formula. Watch whether the question asks for a single term ("the salary in year 10") or a sum ("total earned in 10 years") — they need different formulas.',
        },
      ],
    },
    // ------------------------------------------------------------------ 16
    {
      kind: 'numeric',
      prompt: 'A ball is dropped from a height of $10$ m. Each time it hits the ground it bounces back up to $60\\%$ of its previous height, forever. Find the total vertical distance it travels.',
      label: 'Distance $=$',
      unit: 'm',
      answer: '40',
      hint: 'After the first $10$ m drop, every bounce height is travelled twice (up and down). The bounce heights $6, 3.6, 2.16, \\dots$ form a geometric series.',
      explanation: 'The first drop is $10$ m. Then the ball rises $6$ m and falls $6$ m, rises $3.6$ m and falls $3.6$ m, and so on. The bounce heights form a geometric series with $a_1 = 6$ and $r = 0.6$, whose sum is $\\frac{6}{1 - 0.6} = 15$. Total: $10 + 2 \\cdot 15 = 40$ m. (Forgetting the factor $2$ gives $25$; forgetting the initial drop gives $30$.)',
    },
  ],
  takeaways: [
    'Arithmetic: constant difference $d$, $a_n = a_1 + (n-1)d$ — the discrete version of a line.',
    'Geometric: constant ratio $r$, $a_n = a_1 r^{n-1}$ — the discrete version of an exponential.',
    'Arithmetic series: $S_n = \\frac{n(a_1 + a_n)}{2}$ (count × average). Count terms with $\\frac{\\text{last} - \\text{first}}{d} + 1$.',
    'Finite geometric series: $S_n = \\frac{a_1(1 - r^n)}{1 - r}$ for $r \\ne 1$, derived by shifting with $r$ and subtracting.',
    'Infinite geometric series converge to $\\frac{a_1}{1 - r}$ exactly when $|r| < 1$; otherwise they diverge.',
  ],
  reading: [
    {
      title: 'OpenStax College Algebra 2e — 9.2 Arithmetic Sequences',
      url: 'https://openstax.org/books/college-algebra-2e/pages/9-2-arithmetic-sequences',
      source: 'openstax',
      note: 'Extra worked examples of finding terms and formulas for arithmetic sequences.',
    },
    {
      title: 'OpenStax College Algebra 2e — 9.4 Series and Their Notations',
      url: 'https://openstax.org/books/college-algebra-2e/pages/9-4-series-and-their-notations',
      source: 'openstax',
      note: 'Arithmetic, geometric and infinite geometric series, including annuity applications.',
    },
    {
      title: "Paul's Online Notes — Series: Special Series",
      url: 'https://tutorial.math.lamar.edu/Classes/CalcII/SpecialSeries.aspx',
      source: 'paul',
      note: 'A preview of how Calculus II treats geometric series as the first example of a convergent infinite series.',
    },
  ],
};
