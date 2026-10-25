import type { Lesson } from '../../types';

/** Points (n, |a_{n+1}/a_n|) and (n, |a_n|^(1/n)) for a_n = n^p / r^n, using the graph sliders p and r. */
const ratioPoints = Array.from({ length: 30 }, (_, i) => {
  const k = i + 1;
  return { x: k, y: `((${k + 1})/${k})^p / r`, color: 'blue' as const };
});
const rootPoints = Array.from({ length: 30 }, (_, i) => {
  const k = i + 1;
  return { x: k, y: `${k}^(p/${k}) / r`, color: 'purple' as const };
});

export const lesson: Lesson = {
  id: 'calc2-ratio-root-tests',
  title: 'Absolute Convergence and the Ratio and Root Tests',
  summary: 'Why convergence that survives taking absolute values is the robust kind, and two tests that compare any series with a geometric one.',
  minutes: 19,
  objectives: [
    'Classify a series as absolutely convergent, conditionally convergent or divergent',
    'Prove that absolute convergence implies convergence, and explain why conditionally convergent series can be rearranged to any sum',
    'Apply the Ratio Test, simplifying ratios of factorials and powers correctly',
    'Apply the Root Test to series whose terms are $n$th powers',
    'Recognise when $L = 1$ makes both tests inconclusive and switch tools',
  ],
  steps: [
    // 1 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Absolute versus conditional convergence',
      blocks: [
        {
          type: 'p',
          text: 'Most series with mixed signs are not neatly alternating: think $\\sum \\frac{\\sin n}{n^2}$, whose signs wander irregularly. A powerful trick handles all of them at once: throw away the signs and ask whether the series of **absolute values** $\\sum |a_n|$ converges. That is a positive series, so every positive-series test is available.',
        },
        {
          type: 'definition',
          term: 'Absolute and conditional convergence',
          text: '$\\sum a_n$ is **[[absolute-convergence|absolutely convergent]]** if $\\sum |a_n|$ converges.\n\n$\\sum a_n$ is **[[conditional-convergence|conditionally convergent]]** if $\\sum a_n$ converges but $\\sum |a_n|$ diverges.',
        },
        {
          type: 'theorem',
          name: 'Absolute convergence implies convergence',
          tex: '\\sum |a_n| \\text{ converges} \\implies \\sum a_n \\text{ converges}',
        },
        {
          type: 'derivation',
          title: 'Proof',
          steps: [
            { tex: '-|a_n| \\le a_n \\le |a_n|', why: 'Every number lies between its absolute value and the negative of its absolute value.' },
            { tex: '0 \\le a_n + |a_n| \\le 2|a_n|', why: 'Add $|a_n|$ to every part of the inequality.' },
            { tex: '\\sum \\big(a_n + |a_n|\\big) \\text{ converges}', why: 'It is a series of non-negative terms bounded by the convergent series $\\sum 2|a_n|$, so the [[comparison-test]] applies.' },
            { tex: '\\sum a_n = \\sum \\big(a_n + |a_n|\\big) - \\sum |a_n|', why: 'Write $a_n = (a_n + |a_n|) - |a_n|$. The difference of two convergent series converges.' },
          ],
          result: 'If the sizes alone add up to something finite, the signs can only help: cancellation never makes things worse.',
        },
        {
          type: 'table',
          headers: ['Series', '$\\sum |a_n|$', 'Verdict'],
          rows: [
            ['$\\sum \\frac{(-1)^{n-1}}{n^2}$', '$\\sum \\frac{1}{n^2}$ converges ($p = 2$)', 'absolutely convergent'],
            ['$\\sum \\frac{\\sin n}{n^2}$', '$\\frac{|\\sin n|}{n^2} \\le \\frac{1}{n^2}$, converges by comparison', 'absolutely convergent'],
            ['$\\sum \\frac{(-1)^{n-1}}{n}$', '$\\sum \\frac{1}{n}$ diverges', 'conditionally convergent (by the AST)'],
            ['$\\sum (-1)^n \\frac{n}{n+1}$', 'diverges', 'divergent (terms do not go to $0$)'],
          ],
          caption: 'Every series lands in exactly one of three bins: absolutely convergent, conditionally convergent, or divergent.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the converse fails',
          text: 'The alternating harmonic series converges only *because of* cancellation: its positive terms $1 + \\frac{1}{3} + \\frac{1}{5} + \\cdots$ add to $\\infty$ and its negative terms add to $-\\infty$, and they are interleaved so precisely that the partial sums settle down. Absolute convergence needs no such luck — the total size is finite. That difference has dramatic consequences, as the next card shows.',
        },
      ],
    },
    {
      kind: 'mcq',
      prompt: 'Classify $\\displaystyle\\sum_{n=1}^{\\infty} (-1)^n \\frac{n}{n^2 + 1}$.',
      options: [
        {
          text: 'Absolutely convergent',
          why: '$\\sum \\frac{n}{n^2+1}$ behaves like $\\sum \\frac{1}{n}$: the limit comparison $\\frac{n/(n^2+1)}{1/n} = \\frac{n^2}{n^2+1} \\to 1$ shows it diverges.',
        },
        {
          text: 'Conditionally convergent',
          correct: true,
          why: 'The absolute series diverges (like $\\frac{1}{n}$), but the alternating series passes the AST: $b_n = \\frac{n}{n^2+1} \\to 0$ and is decreasing.',
        },
        {
          text: 'Divergent, because $\\sum \\frac{n}{n^2+1}$ diverges',
          why: 'A divergent absolute series does not make the original diverge — the alternating harmonic series is the standard counterexample.',
        },
        {
          text: 'Divergent by the Divergence Test',
          why: 'The terms do go to $0$: $\\frac{n}{n^2+1} \\to 0$. The Divergence Test is inconclusive.',
        },
      ],
      explanation: 'Two checks. **Absolute:** $\\frac{n}{n^2+1} \\sim \\frac{1}{n}$, and the limit comparison test with the harmonic series shows $\\sum |a_n|$ diverges. **Plain:** with $f(x) = \\frac{x}{x^2+1}$, $f\'(x) = \\frac{1 - x^2}{(x^2+1)^2} \\le 0$ for $x \\ge 1$, so $b_n$ decreases to $0$ and the AST gives convergence. Converges, but not absolutely: conditionally convergent.',
    },
    {
      kind: 'truefalse',
      prompt: 'If $\\sum |a_n|$ diverges, then $\\sum a_n$ diverges.',
      answer: false,
      explanation: 'The alternating harmonic series is the counterexample: $\\sum \\left|\\frac{(-1)^{n-1}}{n}\\right| = \\sum \\frac{1}{n}$ diverges, yet $\\sum \\frac{(-1)^{n-1}}{n}$ converges (to $\\ln 2$). The true statement goes the other way: if $\\sum |a_n|$ **converges**, so does $\\sum a_n$. When the absolute series diverges you must test the original series separately.',
    },
    // 2 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Deep dive: rearranging a series can change its sum',
      blocks: [
        {
          type: 'p',
          text: 'For finite sums, order never matters: $a + b + c = c + a + b$. It is tempting to assume the same for infinite series. For conditionally convergent series, that assumption is spectacularly false. Here is the alternating harmonic series with its terms reordered — one positive term, then two negative terms — using every term exactly once.',
        },
        {
          type: 'derivation',
          title: 'Rearranging $1 - \\frac{1}{2} + \\frac{1}{3} - \\frac{1}{4} + \\cdots = \\ln 2$',
          steps: [
            { tex: '1 - \\tfrac{1}{2} - \\tfrac{1}{4} + \\tfrac{1}{3} - \\tfrac{1}{6} - \\tfrac{1}{8} + \\tfrac{1}{5} - \\tfrac{1}{10} - \\tfrac{1}{12} + \\cdots', why: 'Pattern: the next odd reciprocal (positive), then the next two even reciprocals (negative). Every term of the original series appears exactly once.' },
            { tex: '= \\left(1 - \\tfrac{1}{2}\\right) - \\tfrac{1}{4} + \\left(\\tfrac{1}{3} - \\tfrac{1}{6}\\right) - \\tfrac{1}{8} + \\left(\\tfrac{1}{5} - \\tfrac{1}{10}\\right) - \\tfrac{1}{12} + \\cdots', why: 'Group each positive term $\\frac{1}{2k-1}$ with the negative term $\\frac{1}{4k-2}$ right after it. (Grouping consecutive terms is safe here because the terms tend to $0$, so the grouped partial sums differ from the ungrouped ones by vanishing amounts.)' },
            { tex: '= \\tfrac{1}{2} - \\tfrac{1}{4} + \\tfrac{1}{6} - \\tfrac{1}{8} + \\tfrac{1}{10} - \\tfrac{1}{12} + \\cdots', why: 'Each bracket is $\\frac{1}{2k-1} - \\frac{1}{2(2k-1)} = \\frac{1}{2(2k-1)}$: $\\frac{1}{2}, \\frac{1}{6}, \\frac{1}{10}, \\dots$' },
            { tex: '= \\tfrac{1}{2}\\left(1 - \\tfrac{1}{2} + \\tfrac{1}{3} - \\tfrac{1}{4} + \\cdots\\right)', why: 'Factor out $\\frac{1}{2}$: what is left is the original series.' },
            { tex: '= \\tfrac{1}{2}\\ln 2', why: 'The original series sums to $\\ln 2$.' },
          ],
          result: 'Same terms, different order, and the sum dropped from $\\ln 2 \\approx 0.693$ to $\\frac{1}{2}\\ln 2 \\approx 0.347$.',
        },
        {
          type: 'theorem',
          name: 'Riemann Rearrangement Theorem',
          text: 'If $\\sum a_n$ is conditionally convergent, then for **any** real number $T$ there is a rearrangement of its terms that converges to $T$ — and there are rearrangements that diverge to $\\infty$ or $-\\infty$. If $\\sum a_n$ is absolutely convergent, **every** rearrangement converges to the same sum.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why you can hit any target',
          text: 'In a conditionally convergent series the positive terms alone sum to $+\\infty$ and the negative terms alone to $-\\infty$ (if either part were finite, the whole series would converge absolutely). So: add positive terms until you pass $T$, then negative terms until you drop below it, then positives again… You never run out of either supply, and since the terms shrink to $0$, the overshoots shrink too. The partial sums zero in on $T$. This is the [[calc2-riemann-rearrangement]] in one paragraph.',
        },
        {
          type: 'code',
          title: 'rearrange.cpp',
          runnable: true,
          code: `#include <cstdio>

// Rearrange 1 - 1/2 + 1/3 - 1/4 + ... so that it sums to any target.
double rearranged(double target, int terms) {
    double sum = 0.0;
    int nextOdd = 1;   // next unused positive term is 1/nextOdd
    int nextEven = 2;  // next unused negative term is -1/nextEven
    for (int i = 0; i < terms; ++i) {
        if (sum <= target) {
            sum += 1.0 / nextOdd;
            nextOdd += 2;
        } else {
            sum -= 1.0 / nextEven;
            nextEven += 2;
        }
    }
    return sum;
}

int main() {
    const double targets[] = {-1.0, 0.5, 1.5, 3.0};
    for (double t : targets)
        std::printf("target %5.2f  ->  sum of first million terms = %.6f\\n", t, rearranged(t, 1000000));
}`,
          output: `target -1.00  ->  sum of first million terms = -0.999993
target  0.50  ->  sum of first million terms = 0.500000
target  1.50  ->  sum of first million terms = 1.499998
target  3.00  ->  sum of first million terms = 2.999957`,
          annotations: [
            { lines: '6-7', text: 'Two separate supplies of terms: positives $1, \\frac{1}{3}, \\frac{1}{5}, \\dots$ and negatives $\\frac{1}{2}, \\frac{1}{4}, \\dots$ Each is used in its own order, exactly once.' },
            { lines: '9-15', text: 'The greedy rule from the theorem: below the target, take a positive term; above it, take a negative one.' },
            { lines: 21, text: 'The same terms reach four different "sums". Large targets converge slowly, because the positive terms grow the sum only logarithmically.' },
          ],
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Order matters in floating point too',
          text: 'Computers meet a finite cousin of this every day: floating-point addition is not associative, so `(a + b) + c` can differ from `a + (b + c)`. Summing a big array in parallel (as GPUs and multithreaded physics engines do) adds in a different order each run, and the last digits can change. Numerical code that must be reproducible — lockstep multiplayer simulations, for example — fixes the summation order.',
        },
      ],
    },
    {
      kind: 'mcq',
      prompt: 'Which series is guaranteed to have the same sum no matter how its terms are rearranged?',
      options: [
        {
          text: '$\\sum \\frac{(-1)^{n-1}}{n}$',
          why: 'Conditionally convergent: the lesson just rearranged it to sum to $\\frac{1}{2}\\ln 2$ instead of $\\ln 2$.',
        },
        {
          text: '$\\sum \\frac{(-1)^{n-1}}{\\sqrt{n}}$',
          why: 'It converges by the AST, but $\\sum \\frac{1}{\\sqrt{n}}$ diverges ($p = \\frac{1}{2}$). Conditionally convergent, so rearrangements can change the sum.',
        },
        {
          text: '$\\sum \\frac{(-1)^{n-1}}{n^2}$',
          correct: true,
          why: '$\\sum \\frac{1}{n^2}$ converges, so this series converges absolutely — and absolutely convergent series give the same sum in every order.',
        },
        {
          text: '$\\sum (-1)^{n-1} \\frac{n}{n+1}$',
          why: 'This series diverges (its terms do not approach $0$), so there is no sum to preserve.',
        },
      ],
      explanation: 'By the Riemann Rearrangement Theorem, rearrangements are harmless exactly for absolutely convergent series. Test the absolute values: only $\\sum \\frac{1}{n^2}$ (a $p$-series with $p = 2 > 1$) converges.',
    },
    // 3 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'The Ratio Test: is it eventually geometric?',
      blocks: [
        {
          type: 'p',
          text: 'A [[geometric-series]] is the easiest series of all: each term is $r$ times the previous one, and it converges exactly when $|r| < 1$. The Ratio Test asks whether a series *eventually behaves* like a geometric series, by measuring the ratio of consecutive terms far out in the tail.',
        },
        {
          type: 'theorem',
          name: 'Ratio Test',
          tex: 'L = \\lim_{n \\to \\infty} \\left| \\frac{a_{n+1}}{a_n} \\right|',
          text: 'If $L < 1$, the series $\\sum a_n$ converges **absolutely**. If $L > 1$ (including $L = \\infty$), the series **diverges**. If $L = 1$, the test is **inconclusive**.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why it works',
          text: 'If $L < 1$, pick a number $r$ with $L < r < 1$. Far enough out (say $n \\ge N$) every ratio is below $r$, so $|a_{N+1}| \\le r|a_N|$, $|a_{N+2}| \\le r^2|a_N|$, and in general $|a_{N+k}| \\le |a_N|\\,r^k$. The tail is dominated by a convergent geometric series, so $\\sum |a_n|$ converges by comparison. If $L > 1$, eventually $|a_{n+1}| > |a_n|$: the terms *grow*, so they cannot approach $0$ and the series diverges.',
        },
        {
          type: 'derivation',
          title: 'Test $\\displaystyle\\sum_{n=1}^{\\infty} \\frac{n^3}{3^n}$',
          steps: [
            { tex: '\\left|\\frac{a_{n+1}}{a_n}\\right| = \\frac{(n+1)^3}{3^{n+1}} \\cdot \\frac{3^n}{n^3}', why: 'Replace every $n$ by $n + 1$ for $a_{n+1}$, then multiply by the reciprocal of $a_n$ (dividing by a fraction).' },
            { tex: '= \\left(\\frac{n+1}{n}\\right)^3 \\cdot \\frac{1}{3}', why: 'Collect the polynomial parts together and the exponential parts together: $\\frac{3^n}{3^{n+1}} = \\frac{1}{3}$.' },
            { tex: '= \\left(1 + \\frac{1}{n}\\right)^3 \\cdot \\frac{1}{3} \\to 1 \\cdot \\frac{1}{3} = \\frac{1}{3}', why: 'As $n \\to \\infty$, $\\frac{1}{n} \\to 0$.' },
          ],
          result: '$L = \\frac{1}{3} < 1$, so the series converges absolutely. The polynomial $n^3$ only contributes a factor tending to $1$; the exponential $3^n$ decides everything.',
        },
        {
          type: 'p',
          text: 'The graph shows the ratios for $a_n = \\frac{n^p}{r^n}$. Push $p$ up: the first few ratios can be far above $1$ (the terms grow at first), yet the ratios always drift down to $\\frac{1}{r}$. Only the limit matters.',
        },
        {
          type: 'graph',
          x: [0, 31],
          y: [0, 3],
          yStep: 0.5,
          points: ratioPoints,
          hlines: [
            { y: 1, label: 'ratio = 1', color: 'red' },
            { y: '1/r', label: 'L = 1/r', color: 'green' },
          ],
          sliders: [
            { name: 'p', min: 0, max: 8, step: 1, value: 3, label: '$p$ (power of $n$)' },
            { name: 'r', min: 0.5, max: 4, step: 0.1, value: 3, label: '$r$ (base of $r^n$)' },
          ],
          readouts: [{ label: '$L = \\frac{1}{r} =$', expr: '1/r', digits: 3 }],
          caption: 'Ratios $\\left|\\frac{a_{n+1}}{a_n}\\right| = \\left(\\frac{n+1}{n}\\right)^p \\frac{1}{r}$. With $r > 1$ the dots settle below the red line (convergence); slide $r$ below $1$ and they settle above it (divergence).',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'Find the Ratio Test limit $L$ for $\\displaystyle\\sum_{n=1}^{\\infty} \\frac{n^2\\, 2^n}{5^n}$.',
      label: '$L =$',
      answer: '2/5',
      answerTex: '\\frac{2}{5}',
      hint: 'Group it as $\\left(\\frac{n+1}{n}\\right)^2 \\cdot \\frac{2^{n+1}}{2^n} \\cdot \\frac{5^n}{5^{n+1}}$.',
      explanation: '$\\left|\\frac{a_{n+1}}{a_n}\\right| = \\frac{(n+1)^2 2^{n+1}}{5^{n+1}} \\cdot \\frac{5^n}{n^2 2^n} = \\left(\\frac{n+1}{n}\\right)^2 \\cdot \\frac{2}{5} \\to \\frac{2}{5}$. Since $L = \\frac{2}{5} < 1$, the series converges absolutely. (In fact it is $\\sum n^2 \\left(\\frac{2}{5}\\right)^n$: a geometric series with a polynomial "passenger" that cannot change the outcome.)',
    },
    // 4 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Factorials: where the Ratio Test shines',
      blocks: [
        {
          type: 'p',
          text: 'The Ratio Test is the tool of choice whenever a [[factorial]] appears, because factorial ratios collapse. The key identity is $(n+1)! = (n+1)\\cdot n!$, and more generally a larger factorial is a smaller one times the missing factors:',
        },
        {
          type: 'math',
          tex: '\\frac{(n+1)!}{n!} = n+1, \\qquad \\frac{(2n+2)!}{(2n)!} = (2n+2)(2n+1), \\qquad \\frac{(n+2)!}{n!} = (n+2)(n+1)',
          caption: 'Write the bigger factorial out until you reach the smaller one, then cancel.',
        },
        {
          type: 'derivation',
          title: 'Test $\\displaystyle\\sum_{n=0}^{\\infty} \\frac{5^n}{n!}$',
          steps: [
            { tex: '\\left|\\frac{a_{n+1}}{a_n}\\right| = \\frac{5^{n+1}}{(n+1)!} \\cdot \\frac{n!}{5^n}', why: 'Ratio of consecutive terms, written as a product with the reciprocal of $a_n$.' },
            { tex: '= \\frac{5}{n+1}', why: '$\\frac{5^{n+1}}{5^n} = 5$ and $\\frac{n!}{(n+1)!} = \\frac{1}{n+1}$.' },
            { tex: '\\to 0', why: 'The numerator is fixed while the denominator grows without bound.' },
          ],
          result: '$L = 0 < 1$: converges absolutely. The terms actually grow at first — $a_4 = a_5 = \\frac{625}{24} \\approx 26$ — but once $n + 1 > 5$ each term is a shrinking fraction of the last. (The sum is $e^5$, as you will see with Taylor series.)',
        },
        {
          type: 'derivation',
          title: 'Test $\\displaystyle\\sum_{n=1}^{\\infty} \\frac{n!}{n^n}$',
          steps: [
            { tex: '\\left|\\frac{a_{n+1}}{a_n}\\right| = \\frac{(n+1)!}{(n+1)^{n+1}} \\cdot \\frac{n^n}{n!}', why: 'Careful: in $a_{n+1}$ *both* the base and the exponent of $n^n$ become $n + 1$.' },
            { tex: '= \\frac{(n+1)\\, n^n}{(n+1)^{n+1}} = \\frac{n^n}{(n+1)^n}', why: 'Cancel $\\frac{(n+1)!}{n!} = n + 1$ against one factor of $(n+1)^{n+1} = (n+1)(n+1)^n$.' },
            { tex: '= \\left(\\frac{n}{n+1}\\right)^n = \\frac{1}{\\left(1 + \\frac{1}{n}\\right)^n}', why: 'Combine into one power, then flip: $\\frac{n}{n+1} = \\frac{1}{(n+1)/n}$.' },
            { tex: '\\to \\frac{1}{e}', why: 'The famous limit $\\left(1 + \\frac{1}{n}\\right)^n \\to e$ from Calculus I.' },
          ],
          result: '$L = \\frac{1}{e} \\approx 0.368 < 1$, so $\\sum \\frac{n!}{n^n}$ converges: $n^n$ outgrows $n!$.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'The Ratio Test is useless on $p$-series',
          text: 'For any rational function or power of $n$ the ratio tends to $1$. Both $\\sum \\frac{1}{n}$ (diverges) and $\\sum \\frac{1}{n^2}$ (converges) give $L = \\lim \\left(\\frac{n}{n+1}\\right)^p = 1$. So $L = 1$ genuinely tells you nothing — switch to a [[p-series]], comparison or integral test. If you see only polynomials and roots in $n$, don\'t reach for the Ratio Test at all.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Growth rates you already know',
          text: 'The Ratio Test formalises the growth ranking you know from algorithm analysis: polynomial $n^k$ ≪ exponential $c^n$ ≪ factorial $n!$ ≪ $n^n$. A brute-force search over all orderings of $n$ items costs $O(n!)$, which is why it collapses past $n \\approx 12$ even though $O(2^n)$ might still be fine.',
        },
      ],
    },
    {
      kind: 'fill',
      prompt: 'Simplify these factorial ratios.',
      template: '$\\dfrac{(n+1)!}{n!} =$ ___ and $\\dfrac{(2n+2)!}{(2n)!} =$ ___',
      blanks: [{ answers: ['$n+1$'] }, { answers: ['$(2n+2)(2n+1)$'] }],
      wordBank: ['$n+1$', '$n$', '$(n+1)!$', '$2n+2$', '$(2n+2)(2n+1)$', '$2$'],
      explanation: '$(n+1)! = (n+1)\\cdot n!$, so the first ratio is $n+1$. For the second, $(2n+2)! = (2n+2)(2n+1)\\cdot(2n)!$ — going from $2n$ to $2n + 2$ adds **two** new factors. Writing just $2n + 2$ is the classic slip; it drops the factor $2n + 1$.',
    },
    {
      kind: 'numeric',
      prompt: 'Find the Ratio Test limit $L$ for $\\displaystyle\\sum_{n=1}^{\\infty} \\frac{(n!)^2}{(2n)!}$.',
      label: '$L =$',
      answer: '1/4',
      answerTex: '\\frac{1}{4}',
      hint: '$\\frac{((n+1)!)^2}{(n!)^2} = (n+1)^2$ and $\\frac{(2n)!}{(2n+2)!} = \\frac{1}{(2n+2)(2n+1)}$.',
      explanation: '$\\frac{a_{n+1}}{a_n} = \\frac{(n+1)^2}{(2n+2)(2n+1)} = \\frac{(n+1)^2}{2(n+1)(2n+1)} = \\frac{n+1}{2(2n+1)}$. Dividing top and bottom by $n$: $\\frac{1 + 1/n}{4 + 2/n} \\to \\frac{1}{4}$. Since $L = \\frac{1}{4} < 1$, the series converges.',
    },
    {
      kind: 'error',
      prompt: 'A student applies the Ratio Test to $\\displaystyle\\sum_{n=1}^{\\infty} \\frac{(n!)^2}{(2n)!}$. Tap the first incorrect line.',
      lines: [
        '$a_{n+1} = \\dfrac{((n+1)!)^2}{(2n+2)!}$',
        '$\\dfrac{a_{n+1}}{a_n} = \\dfrac{((n+1)!)^2}{(n!)^2} \\cdot \\dfrac{(2n)!}{(2n+2)!}$',
        '$= (n+1)^2 \\cdot \\dfrac{(2n)!}{(2n+2)!}$',
        '$= \\dfrac{(n+1)^2}{2n+2}$',
        '$= \\dfrac{n+1}{2} \\to \\infty$, so the series diverges.',
      ],
      errorLines: [4],
      explanation: 'Line 4 treats $\\frac{(2n+2)!}{(2n)!}$ as $2n+2$, but two factors separate those factorials: $(2n+2)! = (2n+2)(2n+1)(2n)!$. The correct ratio is $\\frac{(n+1)^2}{(2n+2)(2n+1)} = \\frac{n+1}{2(2n+1)} \\to \\frac{1}{4}$, so the series **converges**. One missing factor flipped the conclusion.',
    },
    // 5 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'The Root Test',
      blocks: [
        {
          type: 'p',
          text: 'When the whole term is raised to the $n$th power, ratios get messy but $n$th roots are clean. The idea is the same: if $|a_n| \\approx L^n$ for large $n$, then $\\sqrt[n]{|a_n|} \\approx L$ and the series behaves like a geometric series with ratio $L$.',
        },
        {
          type: 'theorem',
          name: 'Root Test',
          tex: 'L = \\lim_{n \\to \\infty} \\sqrt[n]{|a_n|} = \\lim_{n \\to \\infty} |a_n|^{1/n}',
          text: 'If $L < 1$, $\\sum a_n$ converges absolutely. If $L > 1$ (or $L = \\infty$), it diverges. If $L = 1$, the test is inconclusive. Same conclusions as the Ratio Test, same reason: comparison with a geometric series.',
        },
        {
          type: 'derivation',
          title: 'Test $\\displaystyle\\sum_{n=1}^{\\infty} \\left(\\frac{2n+3}{3n+1}\\right)^n$',
          steps: [
            { tex: '\\sqrt[n]{|a_n|} = \\left(\\left(\\frac{2n+3}{3n+1}\\right)^n\\right)^{1/n} = \\frac{2n+3}{3n+1}', why: 'The terms are positive, and the $n$th root undoes the $n$th power exactly.' },
            { tex: '= \\frac{2 + 3/n}{3 + 1/n} \\to \\frac{2}{3}', why: 'Divide numerator and denominator by $n$, the highest power present.' },
          ],
          result: '$L = \\frac{2}{3} < 1$: converges absolutely. Try that with the Ratio Test and you would be fighting $\\frac{(2n+5)^{n+1}(3n+1)^n}{(3n+4)^{n+1}(2n+3)^n}$.',
        },
        {
          type: 'p',
          text: 'One limit makes the Root Test work on terms that mix powers of $n$ with exponentials: $\\sqrt[n]{n} \\to 1$. To see it, take logs: $\\ln\\left(n^{1/n}\\right) = \\frac{\\ln n}{n} \\to 0$, so $n^{1/n} \\to e^0 = 1$. Consequently $\\sqrt[n]{n^p} = \\left(n^{1/n}\\right)^p \\to 1$ for any fixed $p$: polynomial factors are invisible to the Root Test.',
        },
        {
          type: 'graph',
          x: [0, 31],
          y: [0, 3],
          yStep: 0.5,
          points: [...ratioPoints, ...rootPoints],
          hlines: [
            { y: 1, label: '1', color: 'red' },
            { y: '1/r', label: 'L = 1/r', color: 'green' },
          ],
          sliders: [
            { name: 'p', min: 0, max: 8, step: 1, value: 4, label: '$p$' },
            { name: 'r', min: 0.5, max: 4, step: 0.1, value: 2, label: '$r$' },
          ],
          caption: 'For $a_n = \\frac{n^p}{r^n}$: blue dots are ratios $\\left|\\frac{a_{n+1}}{a_n}\\right|$, purple dots are roots $\\sqrt[n]{|a_n|} = \\frac{n^{p/n}}{r}$. Both head to the same $L = \\frac{1}{r}$ — the roots more slowly, because $n^{1/n}$ approaches $1$ slowly.',
        },
        {
          type: 'table',
          headers: ['The terms contain…', 'Reach for', 'Example'],
          rows: [
            ['factorials, or products like $1 \\cdot 3 \\cdot 5 \\cdots (2n-1)$', 'Ratio Test', '$\\sum \\frac{n!}{10^n}$: $L = \\infty$, diverges'],
            ['powers $c^n$ times polynomials', 'either (Ratio is usually easier)', '$\\sum \\frac{n^3}{3^n}$: $L = \\frac{1}{3}$'],
            ['an expression raised to the $n$th power, $(\\dots)^n$', 'Root Test', '$\\sum \\left(\\frac{2n+3}{3n+1}\\right)^n$: $L = \\frac{2}{3}$'],
            ['only polynomials and roots of $n$', 'neither — both give $L = 1$', 'use $p$-series / comparison'],
          ],
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'When a Ratio or Root Test gives $L < 1$, write "converges **absolutely** by the Ratio (Root) Test" — instructors often ask you to classify, and these tests always establish absolute convergence. If you get $L = 1$, say "inconclusive" and move on to another test; claiming convergence or divergence from $L = 1$ is a guaranteed deduction.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'Find the Root Test limit $L$ for $\\displaystyle\\sum_{n=1}^{\\infty} \\left(1 + \\frac{1}{n}\\right)^{-n^2}$.',
      label: '$L =$',
      answer: '1/e',
      answerTex: '\\frac{1}{e}',
      minDecimals: 3,
      hint: 'Take the $n$th root: $\\left(\\left(1 + \\frac{1}{n}\\right)^{-n^2}\\right)^{1/n} = \\left(1 + \\frac{1}{n}\\right)^{-n}$.',
      explanation: 'The $n$th root divides the exponent by $n$: $\\sqrt[n]{a_n} = \\left(1 + \\frac{1}{n}\\right)^{-n} = \\frac{1}{(1 + 1/n)^n} \\to \\frac{1}{e} \\approx 0.368$. Since $L < 1$ the series converges (absolutely). A decimal like $0.368$ is accepted.',
    },
    {
      kind: 'mcq',
      prompt: 'For which series is the Ratio Test **inconclusive**?',
      options: [
        {
          text: '$\\sum \\frac{n}{2^n}$',
          why: '$\\frac{n+1}{n}\\cdot\\frac{1}{2} \\to \\frac{1}{2} < 1$: the test works and shows convergence.',
        },
        {
          text: '$\\sum \\frac{3^n}{n!}$',
          why: '$\\frac{3}{n+1} \\to 0 < 1$: the test works and shows convergence.',
        },
        {
          text: '$\\sum \\frac{n!}{2^n}$',
          why: '$\\frac{n+1}{2} \\to \\infty > 1$: the test works and shows divergence.',
        },
        {
          text: '$\\sum \\frac{1}{n^2 + 1}$',
          correct: true,
          why: '$\\frac{n^2+1}{(n+1)^2+1} \\to 1$, so the Ratio Test says nothing — even though the series converges (compare with $\\frac{1}{n^2}$).',
        },
      ],
      explanation: 'The Ratio Test detects geometric-like (exponential or faster) behaviour. A rational function of $n$ like $\\frac{1}{n^2+1}$ changes too slowly: consecutive terms are nearly equal, the ratio tends to $1$, and the test is inconclusive. The comparison $\\frac{1}{n^2+1} < \\frac{1}{n^2}$ settles it instead.',
    },
    {
      kind: 'truefalse',
      prompt: 'If the Ratio Test gives $L > 1$, then the terms $a_n$ do not approach $0$.',
      answer: true,
      explanation: 'If $\\left|\\frac{a_{n+1}}{a_n}\\right| \\to L > 1$, then from some $N$ on every ratio exceeds $1$, so $|a_N| < |a_{N+1}| < |a_{N+2}| < \\cdots$. The sizes keep increasing, so they cannot approach $0$. That is why $L > 1$ gives divergence: it is really the Divergence Test in disguise.',
    },
  ],
  takeaways: [
    '$\\sum a_n$ converges absolutely if $\\sum |a_n|$ converges, conditionally if it converges but $\\sum |a_n|$ does not. Absolute convergence implies convergence.',
    'Conditionally convergent series can be rearranged to sum to any number (Riemann); absolutely convergent series have the same sum in every order.',
    'Ratio Test: $L = \\lim \\left|\\frac{a_{n+1}}{a_n}\\right|$. $L < 1$ converges absolutely, $L > 1$ diverges, $L = 1$ inconclusive. Best for factorials and exponentials.',
    'Root Test: $L = \\lim \\sqrt[n]{|a_n|}$, same conclusions. Best when the term is an $n$th power; remember $\\sqrt[n]{n} \\to 1$.',
    'Both tests give $L = 1$ for every $p$-series and rational function, so use comparison tests for those.',
  ],
  reading: [
    {
      title: 'OpenStax Calculus Volume 2 — 5.6 Ratio and Root Tests',
      url: 'https://openstax.org/books/calculus-volume-2/pages/5-6-ratio-and-root-tests',
      source: 'openstax',
      note: 'Free textbook section with proofs of both tests and a summary of every convergence test.',
    },
    {
      title: "Paul's Online Notes — Absolute Convergence",
      url: 'https://tutorial.math.lamar.edu/Classes/CalcII/AbsoluteConvergence.aspx',
      source: 'paul',
      note: 'Covers absolute vs conditional convergence and works through the rearrangement example in detail.',
    },
    {
      title: "Paul's Online Notes — Ratio Test",
      url: 'https://tutorial.math.lamar.edu/Classes/CalcII/RatioTest.aspx',
      source: 'paul',
      note: 'Many factorial examples, plus careful discussion of the $L = 1$ case.',
    },
    {
      title: 'Wikipedia — Riemann series theorem',
      url: 'https://en.wikipedia.org/wiki/Riemann_series_theorem',
      source: 'wikipedia',
      note: 'The full statement and proof of the rearrangement theorem, with the alternating harmonic examples.',
    },
  ],
};
