import type { GraphBlock, GraphColor, Lesson } from '../../types';

type Pt = NonNullable<GraphBlock['points']>[number];

/** Dots (n, a_n) for n = 1..N, rounded so the data stays readable. */
const dots = (f: (n: number) => number, N: number, color?: GraphColor): Pt[] =>
  Array.from({ length: N }, (_, i) => ({ x: i + 1, y: Math.round(f(i + 1) * 1e6) / 1e6, color }));

/** a_1 = start, a_{n+1} = g(a_n), as dots. */
const recursiveDots = (start: number, g: (a: number) => number, N: number, color?: GraphColor): Pt[] => {
  const out: Pt[] = [];
  let a = start;
  for (let n = 1; n <= N; n++) {
    out.push({ x: n, y: Math.round(a * 1e6) / 1e6, color });
    a = g(a);
  }
  return out;
};

export const lesson: Lesson = {
  id: 'calc2-sequences',
  title: 'Sequences',
  summary: 'Infinite lists of numbers, what it means for them to settle down, and the theorem that guarantees they do.',
  minutes: 18,
  objectives: [
    'Write out terms of a sequence given by an explicit formula or a recursion',
    'Explain the precise meaning of $\\lim_{n \\to \\infty} a_n = L$ and decide whether a sequence converges',
    'Compute limits of sequences with limit laws, L\'Hôpital\'s rule (via a function), the Squeeze Theorem and the behaviour of $r^n$',
    'Show that a sequence is monotonic and bounded',
    'Use the Monotone Convergence Theorem to prove a recursive sequence converges, then find its limit',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'What is a sequence?',
      blocks: [
        {
          type: 'p',
          text: 'A [[sequence]] is an infinite, ordered list of numbers: $a_1, a_2, a_3, \\dots$. The number $a_n$ is the **$n$-th term**, and the whole list is written $\\{a_n\\}$ or $\\{a_n\\}_{n=1}^{\\infty}$. Order matters: $1, 2, 3, \\dots$ and $2, 1, 3, \\dots$ are different sequences.',
        },
        {
          type: 'definition',
          term: 'Sequence',
          text: 'A sequence is a function whose domain is the positive integers (sometimes starting at $0$ or another integer). Instead of $f(n)$ we write $a_n$.',
        },
        {
          type: 'p',
          text: 'There are two common ways to describe one. An **explicit formula** gives $a_n$ directly from $n$, such as $a_n = \\frac{n}{n+1}$, which produces $\\frac{1}{2}, \\frac{2}{3}, \\frac{3}{4}, \\dots$. A **recursive formula** gives a starting value and a rule that builds each term from the one before, such as $a_1 = 3$, $a_{n+1} = 2a_n - 1$, which produces $3, 5, 9, 17, \\dots$.',
        },
        {
          type: 'graph',
          x: [0, 21],
          y: [-0.1, 1.2],
          xStep: 2,
          points: dots((n) => n / (n + 1), 20),
          hlines: [{ y: 1, label: 'y = 1' }],
          caption: 'The graph of $a_n = \\frac{n}{n+1}$ is a row of **dots**, one for each positive integer $n$, not a connected curve. The dots creep up toward the line $y = 1$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why think of a sequence as a function?',
          text: 'Because then everything you know about functions transfers. A sequence has a graph (the dots above), it can be increasing or decreasing, and it can have a limit as its input grows. The only difference is that the input $n$ jumps from integer to integer, so "as $n \\to \\infty$" means "far along the list", never "as $n$ approaches some number".',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Recursion is how games update state',
          text: 'A game loop is a recursive sequence. Each frame, `position = position + velocity * dt` computes $x_{n+1}$ from $x_n$. The value on frame $n$ is the $n$-th term of a sequence, and asking "where does this end up?" is asking for the limit of that sequence.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'numeric',
      prompt: 'A sequence is defined recursively by $a_1 = 3$ and $a_{n+1} = 2a_n - 1$. Find $a_5$.',
      hint: 'Build it one term at a time: $a_2 = 2(3) - 1 = 5$, then $a_3$, $a_4$, $a_5$.',
      label: '$a_5 =$',
      answer: '33',
      explanation: 'Apply the rule four times: $a_2 = 2(3) - 1 = 5$, $a_3 = 2(5) - 1 = 9$, $a_4 = 2(9) - 1 = 17$, $a_5 = 2(17) - 1 = 33$. The terms are $2^n + 1$ in disguise, which you can confirm: $2^5 + 1 = 33$. A recursion needs every earlier term; an explicit formula like $a_n = 2^n + 1$ jumps straight to any term.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'The limit of a sequence',
      blocks: [
        {
          type: 'p',
          text: 'We say $a_n$ **converges to $L$** if the terms get as close to $L$ as we like and *stay* that close, once we go far enough along the list. If no such number $L$ exists, the sequence **diverges**. This is the [[limit-of-a-sequence]], and it is the same idea as a [[limit-at-infinity]] for functions, restricted to integer inputs.',
        },
        {
          type: 'definition',
          term: 'Limit of a sequence',
          text: '$\\lim\\limits_{n \\to \\infty} a_n = L$ means: for every $\\varepsilon > 0$ there is an integer $N$ such that $|a_n - L| < \\varepsilon$ for **every** $n > N$. Then $\\{a_n\\}$ is [[convergent]]; otherwise it is [[divergent]].',
        },
        {
          type: 'p',
          text: 'Read it as a challenge game. Your opponent draws a band of half-width $\\varepsilon$ around $L$, as thin as they like. You must answer with a point $N$ in the list after which *every* term lies inside the band. If you can always win, the limit is $L$. Try it below with $a_n = 1 + \\frac{(-1)^n}{n}$, which hops above and below $1$.',
        },
        {
          type: 'graph',
          x: [0, 31],
          y: [-0.2, 1.8],
          xStep: 5,
          yStep: 0.5,
          points: dots((n) => 1 + (-1) ** n / n, 30),
          hlines: [
            { y: '1 + w', color: 'green' },
            { y: '1 - w', color: 'green' },
            { y: 1, color: 'gray', label: 'L = 1' },
          ],
          sliders: [{ name: 'w', min: 0.04, max: 0.6, step: 0.01, value: 0.3, label: 'band half-width $\\varepsilon$' }],
          readouts: [{ label: 'every term with $n > N$ is in the band, where $N = \\lfloor 1/\\varepsilon \\rfloor =$', expr: 'floor(1/w)', digits: 0 }],
          caption: 'Since $|a_n - 1| = \\frac{1}{n}$, the term is inside the band exactly when $\\frac{1}{n} < \\varepsilon$, i.e. $n > \\frac{1}{\\varepsilon}$. Shrink the band: $N$ grows, but there is always a working $N$. So $a_n \\to 1$.',
        },
        {
          type: 'p',
          text: 'Two classic ways to diverge: the terms can grow without bound, like $a_n = n^2$ (we write $a_n \\to \\infty$, which is a *kind* of divergence, not a limit value), or they can refuse to settle, like $a_n = (-1)^n$, which flips between $-1$ and $1$ forever. No band of width less than $1$ can contain all the late terms of $(-1)^n$, whatever $L$ you try.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Only the tail matters',
          text: 'Changing, adding or deleting any *finite* number of terms never changes whether a sequence converges, or its limit. The definition only cares about the terms with $n > N$. This is why many theorems in this unit say "eventually": a property only has to hold from some point on.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'fill',
      prompt: 'Complete the precise definition of $\\lim_{n \\to \\infty} a_n = L$.',
      template: 'For ___ $\\varepsilon > 0$ there is an integer $N$ such that ___ for all $n > N$.',
      blanks: [{ answers: ['every'] }, { answers: ['$|a_n - L| < \\varepsilon$'] }],
      wordBank: ['every', 'some', '$|a_n - L| < \\varepsilon$', '$|a_n - L| > \\varepsilon$', '$|a_N - L| < \\varepsilon$'],
      explanation: 'The challenge must be met for **every** tolerance $\\varepsilon$, however small; meeting it for *some* $\\varepsilon$ proves nothing ($(-1)^n$ stays within $\\varepsilon = 5$ of $0$). And the inequality must hold for **all** late terms $a_n$, not just the single term $a_N$: a sequence that touches $L$ once and then wanders off does not converge.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Computing limits: borrow from functions',
      blocks: [
        {
          type: 'p',
          text: 'You almost never use $\\varepsilon$ and $N$ to compute a limit. Instead, the next theorem lets you recycle every limit technique from Calculus I.',
        },
        {
          type: 'theorem',
          name: 'Limits of sequences from functions',
          text: 'If $\\lim\\limits_{x \\to \\infty} f(x) = L$ and $a_n = f(n)$ for every integer $n$, then $\\lim\\limits_{n \\to \\infty} a_n = L$.',
        },
        {
          type: 'p',
          text: 'The [[limit-laws]] (sums, products, quotients, constant multiples) also hold for sequences, and so does continuity: if $a_n \\to L$ and $g$ is continuous at $L$, then $g(a_n) \\to g(L)$. For rational expressions, divide top and bottom by the highest power of $n$ in the denominator.',
        },
        {
          type: 'derivation',
          title: 'Find $\\lim\\limits_{n \\to \\infty} \\dfrac{n^2 + 1}{3n^2 - n}$',
          steps: [
            { tex: '\\lim_{n \\to \\infty} \\frac{n^2 + 1}{3n^2 - n} = \\lim_{n \\to \\infty} \\frac{(n^2 + 1)/n^2}{(3n^2 - n)/n^2}', why: 'Divide numerator and denominator by $n^2$, the highest power in the denominator. This does not change the value of the fraction.' },
            { tex: '= \\lim_{n \\to \\infty} \\frac{1 + \\frac{1}{n^2}}{3 - \\frac{1}{n}}', why: 'Simplify each piece: $\\frac{n^2}{n^2} = 1$, $\\frac{1}{n^2}$, $\\frac{3n^2}{n^2} = 3$, $\\frac{n}{n^2} = \\frac{1}{n}$.' },
            { tex: '= \\frac{1 + 0}{3 - 0} = \\frac{1}{3}', why: 'Since $\\frac{1}{n} \\to 0$ and $\\frac{1}{n^2} \\to 0$, the quotient law gives the ratio of the limits (the denominator limit $3$ is not zero).' },
          ],
          result: 'The sequence converges to $\\frac{1}{3}$, the ratio of the leading coefficients.',
        },
        {
          type: 'derivation',
          title: 'Find $\\lim\\limits_{n \\to \\infty} \\dfrac{\\ln n}{n}$',
          steps: [
            { tex: 'f(x) = \\frac{\\ln x}{x}, \\qquad a_n = f(n)', why: 'Move to a function of a real variable $x$. L\'Hôpital\'s rule needs derivatives, and $n$ only takes integer values, so we cannot differentiate with respect to $n$ directly.' },
            { tex: '\\lim_{x \\to \\infty} \\frac{\\ln x}{x} \\quad \\left(\\tfrac{\\infty}{\\infty}\\right)', why: 'Both top and bottom grow without bound: an indeterminate form, so [[lhopitals-rule]] applies.' },
            { tex: '= \\lim_{x \\to \\infty} \\frac{1/x}{1} = \\lim_{x \\to \\infty} \\frac{1}{x} = 0', why: 'Differentiate top and bottom separately: $(\\ln x)\' = \\frac{1}{x}$ and $(x)\' = 1$.' },
            { tex: '\\implies \\lim_{n \\to \\infty} \\frac{\\ln n}{n} = 0', why: 'By the theorem above: the function has limit $0$, so the sequence of its values at integers does too.' },
          ],
          result: '$\\frac{\\ln n}{n} \\to 0$: logarithms grow more slowly than any positive power of $n$.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'The theorem only runs one way',
          text: 'If $f(x)$ has no limit, the sequence $f(n)$ might still converge. Take $a_n = \\sin(\\pi n)$: every term is $\\sin(\\pi n) = 0$, so $a_n \\to 0$, even though $\\sin(\\pi x)$ oscillates forever as $x \\to \\infty$. The function is sampled only at integers, and that can hide its wiggles.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'numeric',
      prompt: 'Find $\\displaystyle\\lim_{n \\to \\infty} \\frac{5n^3 - 2n}{2n^3 + 7}$.',
      hint: 'Divide numerator and denominator by $n^3$.',
      answer: '5/2',
      answerTex: '\\frac{5}{2}',
      explanation: 'Dividing by $n^3$ gives $\\frac{5 - 2/n^2}{2 + 7/n^3} \\to \\frac{5 - 0}{2 + 0} = \\frac{5}{2}$. When the top and bottom have the same degree, the limit is the ratio of the leading coefficients. The lower-order terms $-2n$ and $7$ become irrelevant far out in the sequence.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'error',
      prompt: 'A student finds $\\lim_{n \\to \\infty} \\left(1 + \\frac{2}{n}\\right)^n$. Tap the first line that is wrong.',
      lines: [
        'Let $y = \\left(1 + \\frac{2}{x}\\right)^x$, so $\\ln y = x \\ln\\left(1 + \\frac{2}{x}\\right) = \\dfrac{\\ln(1 + 2/x)}{1/x}$',
        'This is $\\frac{0}{0}$ as $x \\to \\infty$, so by L\'Hôpital: $\\lim \\ln y = \\lim \\dfrac{\\frac{-2/x^2}{1 + 2/x}}{-1/x^2}$',
        '$= \\lim\\limits_{x \\to \\infty} \\dfrac{2}{1 + 2/x} = 2$',
        'Therefore $\\lim\\limits_{n \\to \\infty} \\left(1 + \\frac{2}{n}\\right)^n = 2$',
      ],
      errorLines: [4],
      explanation: 'Everything up to line 3 is right, but line 3 found the limit of $\\ln y$, not of $y$. Since $\\ln y \\to 2$ and $e^x$ is continuous, $y = e^{\\ln y} \\to e^2 \\approx 7.389$. The correct answer is $\\lim\\limits_{n\\to\\infty}\\left(1 + \\frac{2}{n}\\right)^n = e^2$. In general $\\left(1 + \\frac{k}{n}\\right)^n \\to e^k$, the compound-interest limit from algebra.',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'concept',
      title: 'Squeezes, absolute values and $r^n$',
      blocks: [
        {
          type: 'p',
          text: 'When a sequence wobbles (because of $\\cos n$ or $(-1)^n$), trap it between two simpler sequences. The [[squeeze-theorem]] works for sequences exactly as for functions: if $b_n \\le a_n \\le c_n$ for all large $n$ and $b_n \\to L$ and $c_n \\to L$, then $a_n \\to L$.',
        },
        {
          type: 'derivation',
          title: 'Find $\\lim\\limits_{n \\to \\infty} \\dfrac{\\cos n}{n}$',
          steps: [
            { tex: '-1 \\le \\cos n \\le 1', why: 'Cosine of any real number lies between $-1$ and $1$.' },
            { tex: '-\\frac{1}{n} \\le \\frac{\\cos n}{n} \\le \\frac{1}{n}', why: 'Divide all three parts by $n > 0$; dividing by a positive number keeps the inequalities pointing the same way.' },
            { tex: '\\lim_{n \\to \\infty} \\left(-\\frac{1}{n}\\right) = 0 = \\lim_{n \\to \\infty} \\frac{1}{n}', why: 'Both outer sequences go to $0$.' },
            { tex: '\\implies \\lim_{n \\to \\infty} \\frac{\\cos n}{n} = 0', why: 'The middle sequence is squeezed between two sequences with the same limit.' },
          ],
          result: 'The bounded wobble of $\\cos n$ is crushed by the $\\frac{1}{n}$ factor.',
        },
        {
          type: 'theorem',
          name: 'Absolute value theorem',
          text: 'If $|a_n| \\to 0$, then $a_n \\to 0$. (Squeeze $a_n$ between $-|a_n|$ and $|a_n|$.) For example, $\\frac{(-1)^n}{n} \\to 0$ because $\\left|\\frac{(-1)^n}{n}\\right| = \\frac{1}{n} \\to 0$. This only works for the limit $0$: $|(-1)^n| \\to 1$, yet $(-1)^n$ diverges.',
        },
        {
          type: 'p',
          text: 'The single most important family of sequences in this unit is the [[geometric-sequence]] $a_n = r^n$. Drag $r$ and watch its behaviour change at $r = -1$ and $r = 1$.',
        },
        {
          type: 'graph',
          x: [0, 21],
          y: [-2.5, 2.5],
          xStep: 2,
          points: Array.from({ length: 20 }, (_, i) => ({ x: i + 1, y: `r^${i + 1}` })),
          hlines: [{ y: 0, color: 'gray' }],
          sliders: [{ name: 'r', min: -1.2, max: 1.2, step: 0.01, value: 0.8, label: '$r$' }],
          readouts: [{ label: '$r^{20} =$', expr: 'r^20', digits: 5 }],
          caption: 'For $|r| < 1$ the dots collapse to $0$ (alternating sides when $r < 0$). At $r = 1$ they sit at $1$. At $r = -1$ they flip forever, and for $|r| > 1$ they escape (dots leave the window).',
        },
        {
          type: 'table',
          headers: ['$r$', 'behaviour of $r^n$', 'verdict'],
          rows: [
            ['$-1 < r < 1$', 'shrinks to $0$', 'converges to $0$'],
            ['$r = 1$', 'constant $1$', 'converges to $1$'],
            ['$r = -1$', 'alternates $-1, 1, -1, \\dots$', 'diverges'],
            ['$|r| > 1$', '$|r^n| \\to \\infty$', 'diverges'],
          ],
          caption: 'The sequence $\\{r^n\\}$ converges exactly when $-1 < r \\le 1$.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Friction in a game is a geometric sequence',
          text: 'A common way to slow an object is `velocity *= 0.98;` every frame. After $n$ frames the speed is $v_0 (0.98)^n$, a geometric sequence with $r = 0.98$, so it tends to $0$ but never reaches it exactly. That is why engines also snap tiny speeds to zero, e.g. `if (std::abs(v) < 1e-3) v = 0;`.',
        },
        {
          type: 'deepdive',
          title: 'Who wins? A growth ladder for $n \\to \\infty$',
          blocks: [
            {
              type: 'p',
              text: 'Many limits come down to which part grows faster. For any constants $p > 0$ and $b > 1$, each sequence below is eventually overwhelmed by the next, so the ratio of an earlier one to a later one tends to $0$:',
            },
            { type: 'math', tex: '\\ln n \\;\\ll\\; n^p \\;\\ll\\; b^n \\;\\ll\\; n! \\;\\ll\\; n^n' },
            {
              type: 'p',
              text: 'So $\\frac{n^{10}}{2^n} \\to 0$ and $\\frac{100^n}{n!} \\to 0$, even though both start out enormous. The first follows from L\'Hôpital applied ten times; the second because, once $n > 200$, each new factor $\\frac{100}{n}$ is less than $\\frac{1}{2}$. You will use this ladder constantly when testing series.',
            },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'mcq',
      prompt: 'Which of these sequences **diverges**?',
      options: [
        {
          text: '$a_n = \\dfrac{(-1)^n}{n}$',
          why: 'Converges to $0$ by the absolute value theorem: $\\left|\\frac{(-1)^n}{n}\\right| = \\frac{1}{n} \\to 0$. The sign flips, but the flips shrink to nothing.',
        },
        {
          text: '$a_n = (0.99)^n$',
          why: 'A geometric sequence with $|r| = 0.99 < 1$, so it converges to $0$ (slowly).',
        },
        {
          text: '$a_n = \\dfrac{(-1)^n n}{n + 1}$',
          correct: true,
          why: 'Correct. The size $\\frac{n}{n+1}$ approaches $1$, so the even terms approach $1$ and the odd terms approach $-1$. The terms never settle near a single number.',
        },
        {
          text: '$a_n = \\dfrac{n}{n + 1}$',
          why: 'Converges to $1$: divide top and bottom by $n$ to get $\\frac{1}{1 + 1/n} \\to 1$.',
        },
      ],
      explanation: 'An alternating sign only causes divergence when the size of the terms does *not* shrink to $0$. For $\\frac{(-1)^n n}{n+1}$ the late terms are near $1$ and near $-1$ in turn, so no single $L$ works. For $\\frac{(-1)^n}{n}$ both "sides" close in on $0$.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'concept',
      title: 'Monotonic and bounded sequences',
      blocks: [
        {
          type: 'p',
          text: 'Two properties of a sequence will let us prove convergence *without knowing the limit in advance*. A sequence is a [[monotonic-sequence]] if it only ever moves in one direction, and a [[bounded-sequence]] if it is fenced in.',
        },
        {
          type: 'definition',
          term: 'Monotonic',
          text: '$\\{a_n\\}$ is **increasing** if $a_n \\le a_{n+1}$ for all $n$, and **decreasing** if $a_n \\ge a_{n+1}$ for all $n$ (some books say *non-decreasing* / *non-increasing* and reserve "increasing" for strict $<$). It is **monotonic** if it is either one.',
        },
        {
          type: 'definition',
          term: 'Bounded',
          text: '$\\{a_n\\}$ is **bounded above** if some $M$ has $a_n \\le M$ for all $n$, **bounded below** if some $m$ has $a_n \\ge m$ for all $n$, and **bounded** if both hold.',
        },
        {
          type: 'p',
          text: 'There are three standard ways to show monotonicity: check the sign of $a_{n+1} - a_n$; for positive terms, compare $\\frac{a_{n+1}}{a_n}$ with $1$; or show that $f\'(x)$ has one sign, where $a_n = f(n)$.',
        },
        {
          type: 'derivation',
          title: 'Show $a_n = \\dfrac{n}{n+1}$ is increasing and bounded',
          steps: [
            { tex: 'a_{n+1} - a_n = \\frac{n+1}{n+2} - \\frac{n}{n+1}', why: 'To compare consecutive terms, subtract. Replace every $n$ by $n + 1$ to get $a_{n+1}$.' },
            { tex: '= \\frac{(n+1)^2 - n(n+2)}{(n+1)(n+2)}', why: 'Combine over the common denominator $(n+1)(n+2)$.' },
            { tex: '= \\frac{n^2 + 2n + 1 - n^2 - 2n}{(n+1)(n+2)} = \\frac{1}{(n+1)(n+2)} > 0', why: 'Expand and cancel. The result is positive because the denominator is a product of positive numbers.' },
            { tex: '0 < \\frac{n}{n+1} < 1', why: 'For bounds: numerator and denominator are positive, and the numerator is smaller than the denominator.' },
          ],
          result: 'Each term exceeds the one before, and every term lies between $0$ and $1$: the sequence is increasing and bounded.',
        },
        {
          type: 'theorem',
          name: 'Convergent implies bounded',
          text: 'Every convergent sequence is bounded. (Past some $N$, all terms are within $1$ of $L$; the finitely many terms before $N$ are bounded by the largest of them.) Equivalently: **an unbounded sequence diverges.**',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Bounded alone is not enough',
          text: 'The converse fails: $(-1)^n$ is bounded (between $-1$ and $1$) but diverges. Boundedness stops a sequence from escaping; it does not stop it from bouncing around. Something has to prevent the bouncing, and that is what monotonicity does.',
        },
      ],
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'truefalse',
      prompt: 'Every bounded sequence converges.',
      answer: false,
      explanation: 'False. $a_n = (-1)^n$ never leaves $[-1, 1]$, but it alternates between two values forever and has no limit. The true statements are: every *convergent* sequence is bounded, and every bounded **monotonic** sequence converges (the theorem on the next card).',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'concept',
      title: 'The Monotone Convergence Theorem',
      blocks: [
        {
          type: 'p',
          text: 'Picture an increasing sequence that is bounded above by $M$. It moves right along the number line, never backwards, and never past the wall at $M$. It cannot oscillate (it is monotonic) and cannot escape (it is bounded). Intuitively, it has nowhere to go except to pile up against some number at or below $M$. That is the [[calc2-monotone-convergence-theorem|Monotone Convergence Theorem]].',
        },
        {
          type: 'theorem',
          name: 'Monotone Convergence Theorem',
          text: 'Every bounded, monotonic sequence converges. More precisely: an increasing sequence that is bounded above converges, and a decreasing sequence that is bounded below converges.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why it is true: the real numbers have no gaps',
          text: 'The set of terms of an increasing, bounded-above sequence has a **least upper bound** $L$ (the [[real-number|real numbers]] are *complete*: every nonempty set bounded above has a least upper bound). Given $\\varepsilon > 0$, the number $L - \\varepsilon$ is *not* an upper bound, so some term $a_N > L - \\varepsilon$. Because the sequence increases, every later term is also in $(L - \\varepsilon, L]$. That is exactly the definition of $a_n \\to L$. In the rational numbers alone the theorem fails: $1, 1.4, 1.41, 1.414, \\dots$ increases toward $\\sqrt{2}$, which is not rational.',
        },
        {
          type: 'p',
          text: 'The theorem shines on recursive sequences, where there is no formula for $a_n$ to take a limit of. Consider $a_1 = 1$, $a_{n+1} = \\sqrt{2 + a_n}$: the terms are $1, 1.732, 1.932, 1.983, 1.996, \\dots$',
        },
        {
          type: 'graph',
          x: [0, 13],
          y: [0, 2.5],
          xStep: 1,
          yStep: 0.5,
          points: recursiveDots(1, (a) => Math.sqrt(2 + a), 12),
          hlines: [{ y: 2, label: 'y = 2 (the bound)', color: 'green' }],
          caption: 'The dots of $a_{n+1} = \\sqrt{2 + a_n}$ climb but never cross $2$. The theorem guarantees they converge; the algebra below shows the limit is $2$.',
        },
        {
          type: 'derivation',
          title: 'Prove $a_1 = 1$, $a_{n+1} = \\sqrt{2 + a_n}$ converges and find the limit',
          steps: [
            { tex: 'a_n < 2 \\implies a_{n+1} = \\sqrt{2 + a_n} < \\sqrt{4} = 2', why: '**Bounded above** by induction: $a_1 = 1 < 2$, and if one term is below $2$, so is the next, because $\\sqrt{\\;}$ is increasing.' },
            { tex: 'a_{n+1}^2 - a_n^2 = 2 + a_n - a_n^2 = (2 - a_n)(1 + a_n) > 0', why: '**Increasing**: since $0 < a_n < 2$, both factors are positive. So $a_{n+1}^2 > a_n^2$, and for positive numbers that means $a_{n+1} > a_n$.' },
            { tex: '\\lim_{n \\to \\infty} a_n = L \\text{ exists}', why: 'The sequence is increasing and bounded above, so the Monotone Convergence Theorem applies. Only *now* may we give the limit a name.' },
            { tex: 'L = \\sqrt{2 + L}', why: 'Take the limit of both sides of the recursion. As $n \\to \\infty$, both $a_{n+1}$ and $a_n$ tend to $L$, and $\\sqrt{2 + x}$ is continuous.' },
            { tex: 'L^2 - L - 2 = 0 \\implies (L - 2)(L + 1) = 0', why: 'Square both sides and factor.' },
            { tex: 'L = 2', why: 'Reject $L = -1$: every term is positive, so the limit cannot be negative (it was an extraneous root introduced by squaring).' },
          ],
          result: 'The sequence converges, and its limit is $2$.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Prove convergence before solving $L = g(L)$',
          text: 'The "take limits of both sides" trick assumes the limit exists. Try it on $a_1 = 1$, $a_{n+1} = 2a_n$: it gives $L = 2L$, so $L = 0$. But the sequence is $1, 2, 4, 8, \\dots$, which diverges to $\\infty$. The equation only tells you what the limit must be *if there is one*.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Smooth camera follow',
          text: 'A classic smoothing trick moves a camera a fixed fraction of the remaining distance each frame: `cam += 0.1f * (target - cam);`. That is the recursion $c_{n+1} = c_n + 0.1(T - c_n)$. If $c_1 < T$, the sequence is increasing and bounded above by $T$, so by the theorem it converges, and solving $L = L + 0.1(T - L)$ gives $L = T$. The camera glides in and settles on the target.',
        },
      ],
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'numeric',
      prompt: 'The sequence $a_1 = 2$, $a_{n+1} = \\sqrt{6 + a_n}$ is increasing and bounded above by $3$, so it converges. Find its limit.',
      hint: 'Let $L = \\lim a_n$, take the limit of both sides of the recursion, and solve. Remember which root makes sense.',
      label: '$\\lim a_n =$',
      answer: '3',
      explanation: 'By the Monotone Convergence Theorem the limit $L$ exists. Taking limits in the recursion gives $L = \\sqrt{6 + L}$, so $L^2 - L - 6 = 0$, i.e. $(L - 3)(L + 2) = 0$. All terms are positive, so $L = -2$ is impossible and $L = 3$. The terms $2, 2.828, 2.971, 2.995, \\dots$ confirm it.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'order',
      prompt: 'Put the steps for finding the limit of a recursive sequence $a_{n+1} = g(a_n)$ in a logically valid order.',
      lines: [
        'Show the sequence is bounded (usually by induction)',
        'Show the sequence is monotonic (usually by induction or by comparing $a_{n+1}$ with $a_n$)',
        'Conclude by the Monotone Convergence Theorem that $L = \\lim a_n$ exists',
        'Take limits of both sides of the recursion to get $L = g(L)$',
        'Solve for $L$ and reject any root that the bounds rule out',
      ],
      distractors: ['Assume $L$ exists and immediately solve $L = g(L)$'],
      explanation: 'Existence comes first: boundedness and monotonicity (in either order, though bounds are often needed inside the monotonicity proof, as on the previous card) feed the Monotone Convergence Theorem. Only then is $L = g(L)$ meaningful. The distractor skips the proof of existence, which gives nonsense for sequences like $a_{n+1} = 2a_n$.',
    },
  ],
  takeaways: [
    'A sequence is a function on the positive integers; its graph is a set of dots, and $a_n \\to L$ means the terms eventually stay within any tolerance $\\varepsilon$ of $L$.',
    'To compute $\\lim a_n$, use limit laws, the function theorem (if $f(x) \\to L$ then $f(n) \\to L$, e.g. with L\'Hôpital), or the Squeeze Theorem.',
    '$r^n$ converges exactly when $-1 < r \\le 1$ (to $0$ if $|r| < 1$, to $1$ if $r = 1$).',
    'Convergent implies bounded, but bounded does not imply convergent: $(-1)^n$.',
    'Monotone Convergence Theorem: a bounded monotonic sequence converges. For recursions, prove existence first, then solve $L = g(L)$.',
  ],
  reading: [
    {
      title: 'OpenStax Calculus Volume 2 — 5.1 Sequences',
      url: 'https://openstax.org/books/calculus-volume-2/pages/5-1-sequences',
      source: 'openstax',
      note: 'Free textbook section with many more limit examples and a full treatment of the Monotone Convergence Theorem.',
    },
    {
      title: "Paul's Online Notes — Sequences",
      url: 'https://tutorial.math.lamar.edu/Classes/CalcII/Sequences.aspx',
      source: 'paul',
      note: 'Clear notes on limits of sequences, with the function theorem and squeeze examples.',
    },
    {
      title: "Paul's Online Notes — More on Sequences",
      url: 'https://tutorial.math.lamar.edu/Classes/CalcII/MoreSequences.aspx',
      source: 'paul',
      note: 'Monotonic and bounded sequences, with worked examples of proving each property.',
    },
  ],
};
