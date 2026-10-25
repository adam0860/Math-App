import type { GraphBlock, GraphColor, Lesson } from '../../types';

type Pt = NonNullable<GraphBlock['points']>[number];

const round6 = (v: number) => Math.round(v * 1e6) / 1e6;

/** Partial sums s_1..s_N of the series with terms a(n), as dots. */
const partialSums = (a: (n: number) => number, N: number, color?: GraphColor): Pt[] => {
  const out: Pt[] = [];
  let s = 0;
  for (let n = 1; n <= N; n++) {
    s += a(n);
    out.push({ x: n, y: round6(s), color });
  }
  return out;
};

/** a_n for the limit comparison example. */
const aLct = (n: number) => (2 * n * n + 3 * n) / Math.sqrt(5 + n ** 5);

export const lesson: Lesson = {
  id: 'calc2-comparison-tests',
  title: 'The Comparison Tests',
  summary: 'Decide the fate of a messy series by comparing it with a geometric or p-series you already understand: directly, or through a limit.',
  minutes: 18,
  objectives: [
    'State the Direct Comparison Test and explain why it works using bounded partial sums',
    'Set up inequalities in the correct direction to prove convergence or divergence',
    'State and apply the Limit Comparison Test, including computing the limit $\\lim \\frac{a_n}{b_n}$',
    'Choose a comparison series by keeping only the dominant terms of numerator and denominator',
    'Recognise when a comparison is inconclusive and how to repair it',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'The Direct Comparison Test',
      blocks: [
        {
          type: 'p',
          text: 'The Integral Test needs an antiderivative, and many series do not have a friendly one: try integrating $\\frac{1}{2^x + 1}$ or $\\frac{\\sin^2 x}{x^2}$. But we now own two complete families of reference series, geometric series and $p$-series. The idea of a comparison test: if your series is **smaller** than a convergent one, it converges too; if it is **bigger** than a divergent one, it diverges too.',
        },
        {
          type: 'theorem',
          name: 'Direct Comparison Test',
          text: 'Suppose $0 \\le a_n \\le b_n$ for all $n$ (or for all $n \\ge N$).\n\n(i) If $\\sum b_n$ converges, then $\\sum a_n$ converges.\n\n(ii) If $\\sum a_n$ diverges, then $\\sum b_n$ diverges.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why it works',
          text: 'Both series have nonnegative terms, so their partial sums $s_n = a_1 + \\cdots + a_n$ and $t_n = b_1 + \\cdots + b_n$ are increasing. Term by term, $s_n \\le t_n$. If $\\sum b_n$ converges to $T$, then $s_n \\le t_n \\le T$: the partial sums of $\\sum a_n$ increase and are bounded above, so they converge by the [[calc2-monotone-convergence-theorem|Monotone Convergence Theorem]]. For (ii), if $s_n \\to \\infty$ then $t_n \\ge s_n$ is dragged to $\\infty$ too.',
        },
        {
          type: 'derivation',
          title: 'Does $\\displaystyle\\sum_{n=1}^{\\infty} \\frac{1}{2^n + 1}$ converge?',
          steps: [
            { tex: '2^n + 1 > 2^n > 0', why: 'Adding $1$ makes the denominator bigger.' },
            { tex: '0 < \\frac{1}{2^n + 1} < \\frac{1}{2^n}', why: 'A bigger positive denominator makes a smaller fraction, so our terms are below the terms of the comparison series.' },
            { tex: '\\sum_{n=1}^{\\infty} \\frac{1}{2^n} = \\frac{1/2}{1 - 1/2} = 1', why: 'The comparison series is geometric with $r = \\frac{1}{2}$, so it converges.' },
            { tex: '\\implies \\sum_{n=1}^{\\infty} \\frac{1}{2^n + 1} \\text{ converges}', why: 'Part (i) of the Direct Comparison Test: smaller than a convergent series of positive terms.' },
          ],
          result: 'Converges, and its sum is less than $1$ (it is about $0.764$).',
        },
        {
          type: 'graph',
          x: [0, 16],
          y: [0, 1.2],
          xStep: 1,
          yStep: 0.25,
          points: [...partialSums((n) => 1 / 2 ** n, 15, 'blue'), ...partialSums((n) => 1 / (2 ** n + 1), 15, 'red')],
          hlines: [{ y: 1, label: 'y = 1', color: 'green' }],
          caption: 'Blue: partial sums of $\\sum \\frac{1}{2^n}$, climbing to $1$. Red: partial sums of $\\sum \\frac{1}{2^n + 1}$. The red dots always sit below the blue ones, so they are trapped below $1$, and being increasing they must converge.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Nonnegative terms only',
          text: 'The test needs $a_n \\ge 0$. Without it the argument collapses: $-1 \\le \\frac{1}{n^2}$ for every $n$, and $\\sum \\frac{1}{n^2}$ converges, but $\\sum (-1)$ certainly does not. Series with mixed signs are handled later in this unit with absolute convergence.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'truefalse',
      prompt: 'If $0 \\le a_n \\le b_n$ for all $n$ and $\\sum b_n$ **diverges**, then $\\sum a_n$ diverges.',
      answer: false,
      explanation: 'False: being smaller than a divergent series tells you nothing. For example $\\frac{1}{n^2} \\le \\frac{1}{n}$ and $\\sum \\frac{1}{n}$ diverges, yet $\\sum \\frac{1}{n^2}$ converges; meanwhile $\\frac{1}{2n} \\le \\frac{1}{n}$ and $\\sum \\frac{1}{2n}$ diverges. Smaller-than-divergent and bigger-than-convergent are both **inconclusive**.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Getting the inequality to point the right way',
      blocks: [
        {
          type: 'p',
          text: 'The only two useful comparisons are **"smaller than convergent"** (proves convergence) and **"bigger than divergent"** (proves divergence). So before writing anything, guess the answer, then build the inequality that proves your guess.',
        },
        {
          type: 'derivation',
          title: 'Does $\\displaystyle\\sum_{n=1}^{\\infty} \\frac{\\ln n}{n}$ converge?',
          steps: [
            { tex: '\\ln n > 1 \\quad \\text{for } n \\ge 3', why: '$\\ln n > 1$ exactly when $n > e \\approx 2.718$.' },
            { tex: '\\frac{\\ln n}{n} > \\frac{1}{n} \\quad \\text{for } n \\ge 3', why: 'Divide both sides by $n > 0$.' },
            { tex: '\\sum_{n=3}^{\\infty} \\frac{1}{n} \\text{ diverges}', why: 'The harmonic series without its first two terms still diverges (removing finitely many terms never changes convergence).' },
            { tex: '\\implies \\sum_{n=1}^{\\infty} \\frac{\\ln n}{n} \\text{ diverges}', why: 'Part (ii): bigger than a divergent series of nonnegative terms, from $n = 3$ on.' },
          ],
          result: 'Diverges. (The Integral Test gave the same verdict last lesson, with more work.)',
        },
        {
          type: 'p',
          text: 'Comparison also handles terms that wiggle, which the Integral Test cannot. Since $0 \\le \\sin^2 n \\le 1$, we get $0 \\le \\frac{\\sin^2 n}{n^2} \\le \\frac{1}{n^2}$, and $\\sum \\frac{1}{n^2}$ is a convergent $p$-series, so $\\sum \\frac{\\sin^2 n}{n^2}$ converges. Bounded factors like $\\sin^2 n$, $\\cos^2 n$, $2 + \\cos n$ or $\\arctan n$ are classic signals to compare.',
        },
        {
          type: 'compare',
          left: {
            title: 'Wrong direction (inconclusive)',
            tone: 'bad',
            tex: ['\\frac{1}{2^n - 1} > \\frac{1}{2^n}', '\\textstyle\\sum \\frac{1}{2^n} \\text{ converges}', '\\implies \\; ???'],
            text: 'Bigger than a convergent series: no conclusion.',
          },
          right: {
            title: 'A comparison that works',
            tone: 'good',
            tex: ['2^n - 1 \\ge 2^{n-1} \\;\\; (n \\ge 1)', '\\frac{1}{2^n - 1} \\le \\frac{1}{2^{n-1}}', '\\textstyle\\sum \\frac{1}{2^{n-1}} = 2 \\implies \\text{converges}'],
            text: 'Shrink the denominator a bit more cleverly, or use the Limit Comparison Test (next card).',
          },
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'The tempting comparison is often backwards',
          text: 'For $\\frac{1}{2^n - 1}$ or $\\frac{1}{n^2 - 5}$ the obvious comparison series ($\\frac{1}{2^n}$, $\\frac{1}{n^2}$) is *smaller* than your terms, so direct comparison with it proves nothing, even though the series clearly "behaves like" it. Rather than hunting for a clever inequality, use the limit version of the test.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'mcq',
      prompt: 'Which argument correctly proves that $\\displaystyle\\sum_{n=1}^{\\infty} \\frac{\\cos^2 n}{n^3}$ converges?',
      options: [
        {
          text: '$0 \\le \\frac{\\cos^2 n}{n^3} \\le \\frac{1}{n^3}$ and $\\sum \\frac{1}{n^3}$ converges',
          correct: true,
          why: 'Correct. Since $0 \\le \\cos^2 n \\le 1$, our terms are nonnegative and below a convergent $p$-series ($p = 3$). Direct comparison applies.',
        },
        {
          text: '$\\frac{\\cos^2 n}{n^3} \\le \\frac{1}{n}$ and $\\sum \\frac{1}{n}$ diverges',
          why: 'The inequality is true, but being smaller than a divergent series proves nothing.',
        },
        {
          text: 'The Integral Test with $f(x) = \\frac{\\cos^2 x}{x^3}$',
          why: '$f$ is not decreasing: $\\cos^2 x$ keeps returning to $0$ and back up to $1$, so $f$ oscillates. The Integral Test does not apply.',
        },
        {
          text: '$\\frac{\\cos^2 n}{n^3} \\to 0$, so the series converges',
          why: 'That is a misuse of the divergence test, which can only prove divergence.',
        },
      ],
      explanation: 'Bounded oscillating factors are exactly where direct comparison shines: replace the oscillating part by its maximum to get an upper bound you understand. Here $\\cos^2 n \\le 1$ gives $\\frac{\\cos^2 n}{n^3} \\le \\frac{1}{n^3}$, a convergent $p$-series.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'The Limit Comparison Test',
      blocks: [
        {
          type: 'p',
          text: 'Intuition says $\\frac{1}{2^n - 1}$ and $\\frac{1}{2^n}$ should share a fate: for large $n$ the $-1$ is negligible, and the two terms are nearly equal. The [[limit-comparison-test]] makes "nearly equal for large $n$" precise. Instead of an inequality, compute the **limit of the ratio** of the terms.',
        },
        {
          type: 'theorem',
          name: 'Limit Comparison Test',
          text: 'Suppose $a_n > 0$ and $b_n > 0$ for all $n$ (or all $n \\ge N$), and\n\n$$\\lim_{n \\to \\infty} \\frac{a_n}{b_n} = c, \\quad\\text{where } 0 < c < \\infty.$$\n\nThen $\\sum a_n$ and $\\sum b_n$ **either both converge or both diverge**.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why: a limit is an inequality in disguise',
          text: 'If $\\frac{a_n}{b_n} \\to c > 0$, then eventually the ratio stays between $\\frac{c}{2}$ and $\\frac{3c}{2}$ (take $\\varepsilon = \\frac{c}{2}$ in the definition of a limit). Multiplying by $b_n > 0$: $\\frac{c}{2} b_n < a_n < \\frac{3c}{2} b_n$ for all large $n$. If $\\sum b_n$ converges, so does $\\sum \\frac{3c}{2} b_n$, and the right inequality gives convergence of $\\sum a_n$. If $\\sum b_n$ diverges, so does $\\sum \\frac{c}{2} b_n$, and the left inequality gives divergence. The limit does the inequality-hunting for you.',
        },
        {
          type: 'derivation',
          title: 'Does $\\displaystyle\\sum_{n=1}^{\\infty} \\frac{1}{2^n - 1}$ converge?',
          steps: [
            { tex: 'a_n = \\frac{1}{2^n - 1}, \\qquad b_n = \\frac{1}{2^n}', why: 'Both are positive for $n \\ge 1$. Choose $b_n$ by dropping the $-1$, which is negligible next to $2^n$.' },
            { tex: '\\frac{a_n}{b_n} = \\frac{1}{2^n - 1} \\cdot \\frac{2^n}{1} = \\frac{2^n}{2^n - 1}', why: 'Dividing by a fraction is multiplying by its reciprocal.' },
            { tex: '= \\frac{1}{1 - 2^{-n}} \\to \\frac{1}{1 - 0} = 1', why: 'Divide top and bottom by $2^n$; then $2^{-n} \\to 0$.' },
            { tex: 'c = 1, \\quad 0 < 1 < \\infty', why: 'The limit is a positive finite number, so the test applies.' },
            { tex: '\\textstyle\\sum \\frac{1}{2^n} \\text{ converges} \\implies \\sum \\frac{1}{2^n - 1} \\text{ converges}', why: 'The comparison series is geometric with $r = \\frac{1}{2}$, and the two series share a fate.' },
          ],
          result: 'Converges by the Limit Comparison Test with $b_n = \\frac{1}{2^n}$.',
        },
        {
          type: 'p',
          text: 'The graph shows what the test is looking for. Take $a_n = \\frac{2n^2 + 3n}{\\sqrt{5 + n^5}}$ and try comparing it with $b_n = \\frac{1}{n^p}$ for different $p$. Only one choice of $p$ makes the ratio settle on a positive finite number.',
        },
        {
          type: 'graph',
          x: [0, 41],
          y: [0, 6],
          xStep: 5,
          points: Array.from({ length: 40 }, (_, i) => {
            const k = i + 1;
            return { x: k, y: `${round6(aLct(k))} * ${k}^p` };
          }),
          hlines: [{ y: 2, label: 'y = 2', color: 'green' }],
          sliders: [{ name: 'p', min: 0, max: 1, step: 0.05, value: 0.2, label: 'compare with $b_n = \\frac{1}{n^p}$, $p =$' }],
          caption: 'The dots are the ratios $\\frac{a_n}{b_n} = a_n \\cdot n^p$. For $p < \\frac{1}{2}$ they sink toward $0$; for $p > \\frac{1}{2}$ they climb without bound. At exactly $p = \\frac{1}{2}$ they level off at $c = 2$, the signal that $a_n$ behaves like $\\frac{2}{\\sqrt{n}}$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'numeric',
      prompt: 'To test $\\displaystyle\\sum_{n=1}^{\\infty} \\frac{3n^2 + 1}{n^4 + 2n}$, compare with $b_n = \\frac{1}{n^2}$. Compute $c = \\displaystyle\\lim_{n \\to \\infty} \\frac{a_n}{b_n}$.',
      hint: '$\\frac{a_n}{b_n} = \\frac{(3n^2 + 1)\\,n^2}{n^4 + 2n}$. Divide top and bottom by $n^4$.',
      label: '$c =$',
      answer: '3',
      explanation: '$\\frac{a_n}{b_n} = \\frac{3n^4 + n^2}{n^4 + 2n} = \\frac{3 + 1/n^2}{1 + 2/n^3} \\to 3$. Since $0 < 3 < \\infty$ and $\\sum \\frac{1}{n^2}$ is a convergent $p$-series ($p = 2$), the original series converges by the Limit Comparison Test.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'Choosing the comparison series',
      blocks: [
        {
          type: 'p',
          text: 'The art of the comparison tests is picking $b_n$. For algebraic expressions there is a mechanical rule: **for large $n$, only the fastest-growing term in the numerator and in the denominator matter.** Keep those, throw away everything else, and simplify. Constants can be dropped from $b_n$ too, since they do not affect convergence.',
        },
        {
          type: 'steps',
          items: [
            { title: 'Find the dominant terms', text: 'Highest power of $n$ in the numerator and denominator (under a root, take the root of the dominant term: $\\sqrt{5 + n^5} \\approx n^{5/2}$). Exponentials beat powers.' },
            { title: 'Simplify their ratio', text: 'e.g. $\\frac{2n^2}{n^{5/2}} = \\frac{2}{n^{1/2}}$. This tells you which $p$-series or geometric series your series behaves like.' },
            { title: 'Compute the limit', text: 'With $b_n$ equal to that simplified ratio (constant optional), $\\lim \\frac{a_n}{b_n}$ should come out positive and finite. If it does not, you made an algebra slip.' },
            { title: 'Conclude', text: 'State the fate of $\\sum b_n$, the value of $c$, and the conclusion, naming the test.' },
          ],
        },
        {
          type: 'derivation',
          title: 'Does $\\displaystyle\\sum_{n=1}^{\\infty} \\frac{2n^2 + 3n}{\\sqrt{5 + n^5}}$ converge?',
          steps: [
            { tex: 'a_n \\approx \\frac{2n^2}{\\sqrt{n^5}} = \\frac{2n^2}{n^{5/2}} = \\frac{2}{n^{1/2}}', why: 'Dominant terms: $2n^2$ on top, $\\sqrt{n^5} = n^{5/2}$ on the bottom. Subtract exponents: $2 - \\frac{5}{2} = -\\frac{1}{2}$.' },
            { tex: 'b_n = \\frac{1}{\\sqrt{n}}', why: 'Drop the constant $2$; it does not affect convergence.' },
            { tex: '\\frac{a_n}{b_n} = \\frac{(2n^2 + 3n)\\sqrt{n}}{\\sqrt{5 + n^5}} = \\frac{2n^{5/2} + 3n^{3/2}}{\\sqrt{5 + n^5}}', why: 'Multiply $a_n$ by the reciprocal of $b_n$, which is $\\sqrt{n} = n^{1/2}$.' },
            { tex: '= \\frac{2 + 3/n}{\\sqrt{5/n^5 + 1}} \\to \\frac{2 + 0}{\\sqrt{0 + 1}} = 2', why: 'Divide top and bottom by $n^{5/2} = \\sqrt{n^5}$; inside the root that means dividing by $n^5$.' },
            { tex: '0 < 2 < \\infty, \\quad \\textstyle\\sum \\frac{1}{\\sqrt{n}} \\text{ diverges } (p = \\tfrac{1}{2} \\le 1)', why: 'The limit is positive and finite, and the comparison series is a divergent $p$-series.' },
          ],
          result: 'Diverges by the Limit Comparison Test with $b_n = \\frac{1}{\\sqrt{n}}$, matching the graph on the previous card.',
        },
        {
          type: 'table',
          headers: ['$a_n$', 'dominant ratio', 'compare with', 'verdict'],
          rows: [
            ['$\\frac{n + 4}{n^3 - 2}$', '$\\frac{n}{n^3} = \\frac{1}{n^2}$', '$p = 2$', 'converges'],
            ['$\\frac{5}{\\sqrt{n} + 7}$', '$\\frac{5}{n^{1/2}}$', '$p = \\frac{1}{2}$', 'diverges'],
            ['$\\frac{3^n}{4^n - n}$', '$\\left(\\frac{3}{4}\\right)^n$', 'geometric, $r = \\frac{3}{4}$', 'converges'],
            ['$\\sin\\left(\\frac{1}{n}\\right)$', '$\\frac{1}{n}$ (since $\\frac{\\sin x}{x} \\to 1$)', '$p = 1$', 'diverges'],
          ],
          caption: 'The dominant-term rule guesses the answer; the Limit Comparison Test then proves it.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'This is Big-O thinking',
          text: 'Picking the dominant term is exactly what you do when analysing algorithms: an algorithm that takes $3n^2 + 50n + 7$ steps is $O(n^2)$, because for large inputs the other terms do not matter. The Limit Comparison Test is the series version of "these two functions are within a constant factor of each other", i.e. $a_n = \\Theta(b_n)$.',
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'Write out all four parts: the choice of $b_n$, the limit computation with its value $c$, the statement "$0 < c < \\infty$", and the fate of $\\sum b_n$. Saying "it behaves like $\\frac{1}{n^2}$ so it converges" without the limit is a guess, not a proof, and is graded that way.',
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'expr',
      prompt: 'Use the dominant-term rule: for large $n$, $a_n = \\dfrac{4n^3 - n}{n^5 + 7}$ behaves like a simple power of $n$ (keep the constant). Enter that simplified ratio of dominant terms.',
      variables: ['n'],
      domain: [1, 5],
      label: '$a_n \\approx$',
      answer: '4/n^2',
      answerTex: '\\frac{4}{n^2}',
      hint: 'Keep only $4n^3$ on top and $n^5$ on the bottom, then simplify.',
      explanation: 'The dominant terms are $4n^3$ and $n^5$, so $a_n \\approx \\frac{4n^3}{n^5} = \\frac{4}{n^2}$. With $b_n = \\frac{1}{n^2}$, $\\frac{a_n}{b_n} = \\frac{4n^5 - n^3}{n^5 + 7} \\to 4$, a positive finite limit, and $\\sum \\frac{1}{n^2}$ converges, so $\\sum a_n$ converges.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'mcq',
      prompt: 'What can you conclude about $\\displaystyle\\sum_{n=1}^{\\infty} \\sin\\left(\\frac{1}{n^2}\\right)$?',
      options: [
        {
          text: 'Diverges by the divergence test',
          why: '$\\sin\\left(\\frac{1}{n^2}\\right) \\to \\sin 0 = 0$, so the divergence test is inconclusive.',
        },
        {
          text: 'Diverges by limit comparison with $\\sum \\frac{1}{n}$',
          why: 'With $b_n = \\frac{1}{n}$, the ratio is $n \\sin\\left(\\frac{1}{n^2}\\right) \\to 0$, so $c = 0$ and the basic Limit Comparison Test does not apply. The terms are much smaller than $\\frac{1}{n}$.',
        },
        {
          text: 'Converges by limit comparison with $\\sum \\frac{1}{n^2}$',
          correct: true,
          why: 'Correct. With $x = \\frac{1}{n^2} \\to 0$, $\\frac{\\sin x}{x} \\to 1$, so $c = 1$; and $\\sum \\frac{1}{n^2}$ converges ($p = 2$).',
        },
        {
          text: 'No comparison test can decide it',
          why: 'The terms are positive (for $n \\ge 1$, $0 < \\frac{1}{n^2} \\le 1 < \\pi$), so comparison tests apply. Limit comparison with $\\frac{1}{n^2}$ settles it.',
        },
      ],
      explanation: 'For small $x$, $\\sin x \\approx x$, so $\\sin\\left(\\frac{1}{n^2}\\right)$ behaves like $\\frac{1}{n^2}$. Formally, $\\lim\\limits_{n\\to\\infty} \\frac{\\sin(1/n^2)}{1/n^2} = \\lim\\limits_{x \\to 0^+} \\frac{\\sin x}{x} = 1$. Since $0 < 1 < \\infty$ and $\\sum \\frac{1}{n^2}$ converges, so does the given series.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'concept',
      title: 'When the limit is $0$ or $\\infty$',
      blocks: [
        {
          type: 'p',
          text: 'If $\\lim \\frac{a_n}{b_n}$ comes out $0$ or $\\infty$, the two series are **not** the same size, and the basic test says nothing. Usually that means you picked the wrong $b_n$; go back to the dominant terms. But one-sided conclusions are still available, and they are worth knowing.',
        },
        {
          type: 'theorem',
          name: 'Limit comparison: the extreme cases',
          text: 'Let $a_n, b_n > 0$.\n\n• If $\\frac{a_n}{b_n} \\to 0$ (so $a_n$ is eventually much smaller) and $\\sum b_n$ **converges**, then $\\sum a_n$ converges.\n\n• If $\\frac{a_n}{b_n} \\to \\infty$ (so $a_n$ is eventually much bigger) and $\\sum b_n$ **diverges**, then $\\sum a_n$ diverges.',
        },
        {
          type: 'p',
          text: 'These are just direct comparison in disguise: a limit of $0$ means $a_n < b_n$ eventually, and a limit of $\\infty$ means $a_n > b_n$ eventually. For example, $\\frac{\\ln n}{n^2}$ against $b_n = \\frac{1}{n^{3/2}}$ gives $\\frac{\\ln n}{n^{1/2}} \\to 0$ (logarithms lose to every power), and $\\sum \\frac{1}{n^{3/2}}$ converges, so $\\sum \\frac{\\ln n}{n^2}$ converges.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'The other two combinations say nothing',
          text: 'Limit $0$ against a **divergent** $\\sum b_n$, or limit $\\infty$ against a **convergent** $\\sum b_n$, is inconclusive. These are the "smaller than divergent" and "bigger than convergent" dead ends again.',
        },
        {
          type: 'deepdive',
          title: 'Why logarithms need special care',
          blocks: [
            {
              type: 'p',
              text: 'A factor of $\\ln n$ is not a power of $n$, so it has no place in the dominant-term rule. The fix is to borrow a sliver of a power: $\\ln n$ grows more slowly than $n^{\\varepsilon}$ for every $\\varepsilon > 0$. So $\\frac{\\ln n}{n^2} < \\frac{n^{0.5}}{n^2} = \\frac{1}{n^{1.5}}$ for large $n$, which converges.',
            },
            {
              type: 'p',
              text: 'This trick fails right at the edge. For $\\frac{1}{n \\ln n}$ every comparison with a $p$-series is inconclusive: it is smaller than $\\frac{1}{n}$ (divergent) and bigger than $\\frac{1}{n^{1 + \\varepsilon}}$ (convergent). Only the Integral Test, as in the previous lesson, shows it diverges.',
            },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'order',
      prompt: 'Put the steps of a complete Limit Comparison Test solution in order.',
      lines: [
        'Check that $a_n > 0$ for all (large) $n$',
        'Pick $b_n$ from the dominant terms of $a_n$',
        'Compute $c = \\lim\\limits_{n \\to \\infty} \\frac{a_n}{b_n}$',
        'Verify that $0 < c < \\infty$',
        'State the fate of $\\sum b_n$ and conclude that $\\sum a_n$ shares it',
      ],
      distractors: ['Show that $a_n \\le b_n$ for every $n$'],
      explanation: 'The test needs positive terms, a well-chosen $b_n$, a limit that is positive and finite, and a known verdict for $\\sum b_n$, in that logical order. The distractor is the hypothesis of the *direct* comparison test; the whole point of the limit version is that no term-by-term inequality is required.',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'error',
      prompt: 'A student tests $\\displaystyle\\sum_{n=2}^{\\infty} \\frac{n + 5}{n^3 - 2}$. Tap the first line that is wrong.',
      lines: [
        'All terms are positive for $n \\ge 2$',
        'Compare with $b_n = \\frac{1}{n}$, the harmonic series',
        '$\\lim\\limits_{n \\to \\infty} \\dfrac{a_n}{b_n} = \\lim\\limits_{n \\to \\infty} \\dfrac{n^2 + 5n}{n^3 - 2} = 0$',
        'Since $\\sum \\frac{1}{n}$ diverges, the series diverges by the Limit Comparison Test',
      ],
      errorLines: [4],
      explanation: 'Lines 1–3 are correct (choosing $b_n = \\frac{1}{n}$ is unhelpful but not wrong, and the limit really is $0$). Line 4 draws a conclusion the test does not allow: $c = 0$ is not in $(0, \\infty)$, and limit $0$ against a *divergent* series is inconclusive. The dominant terms give $\\frac{n}{n^3} = \\frac{1}{n^2}$; with $b_n = \\frac{1}{n^2}$, $\\frac{a_n}{b_n} = \\frac{n^3 + 5n^2}{n^3 - 2} \\to 1$, so the series **converges**.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'fill',
      prompt: 'Match each series with the test that settles it most directly.',
      template: '$\\sum \\frac{2 + \\cos n}{n^3}$ is best handled by ___, while $\\sum \\frac{n^2 - 1}{n^4 + n}$ is best handled by ___.',
      blanks: [{ answers: ['direct comparison'] }, { answers: ['limit comparison'] }],
      wordBank: ['direct comparison', 'limit comparison', 'the divergence test', 'the geometric series test'],
      explanation: 'For $\\frac{2 + \\cos n}{n^3}$, bound the oscillating factor: $0 < \\frac{2 + \\cos n}{n^3} \\le \\frac{3}{n^3}$, a convergent series, so direct comparison gives convergence (a limit of the ratio would not even exist, since $2 + \\cos n$ keeps oscillating). For $\\frac{n^2 - 1}{n^4 + n}$, the $-1$ makes the term *smaller* than $\\frac{1}{n^2}$ (good), but juggling inequalities is clumsier than limit comparison with $\\frac{1}{n^2}$: the ratio tends to $1$, so it converges. The divergence test is inconclusive for both, since both terms go to $0$.',
    },
  ],
  takeaways: [
    'Direct Comparison: with $0 \\le a_n \\le b_n$, smaller than convergent converges and bigger than divergent diverges; the other two directions are inconclusive.',
    'Bounded oscillating factors ($\\sin^2 n$, $2 + \\cos n$) are a signal for direct comparison: replace them by their maximum.',
    'Limit Comparison: if $a_n, b_n > 0$ and $\\frac{a_n}{b_n} \\to c$ with $0 < c < \\infty$, the two series share a fate.',
    'Choose $b_n$ by keeping only the dominant terms of numerator and denominator; compare with $p$-series or geometric series.',
    'A ratio limit of $0$ or $\\infty$ usually means a poor choice of $b_n$; only "$0$ with convergent $b_n$" and "$\\infty$ with divergent $b_n$" give conclusions.',
  ],
  reading: [
    {
      title: 'OpenStax Calculus Volume 2 — 5.4 Comparison Tests',
      url: 'https://openstax.org/books/calculus-volume-2/pages/5-4-comparison-tests',
      source: 'openstax',
      note: 'Both comparison tests with proofs, worked examples and plenty of exercises.',
    },
    {
      title: "Paul's Online Notes — Comparison Test / Limit Comparison Test",
      url: 'https://tutorial.math.lamar.edu/Classes/CalcII/SeriesCompTest.aspx',
      source: 'paul',
      note: 'Especially good on choosing the comparison series and on getting the inequality to point the right way.',
    },
    {
      title: 'Khan Academy — Calculus 2',
      url: 'https://www.khanacademy.org/math/calculus-2',
      source: 'khan',
      note: 'The series unit has short videos and practice sets on direct and limit comparison.',
    },
  ],
};
