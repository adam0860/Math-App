import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'dm-big-o',
  title: 'Growth of Functions and Big-O',
  summary: 'Why we measure algorithms by how their work grows, and the precise language of $O$, $\\Omega$ and $\\Theta$ that every CS course and interview uses.',
  minutes: 18,
  objectives: [
    'Explain what an algorithm is and why running time is measured by counting operations as a function of input size $n$',
    'State the formal definitions of $O$, $\\Omega$ and $\\Theta$ and prove bounds by exhibiting witnesses $C$ and $k$',
    'Prove that a degree-$d$ polynomial is $\\Theta(n^d)$, and prove that a function is *not* $O(g)$',
    'Rank the standard growth classes $1, \\log n, n, n\\log n, n^2, 2^n, n!$ and explain why the base of a logarithm does not matter',
    'Translate a growth class into real time, such as what $n = 10^6$ costs inside a 16 ms game frame',
  ],
  steps: [
    // ------------------------------------------------------------------ 0
    {
      kind: 'concept',
      title: 'Algorithms, and why we count instead of time',
      blocks: [
        {
          type: 'p',
          text: 'Every program you write is built from algorithms: finding the closest enemy, sorting a leaderboard, searching an inventory. Before we can ask which algorithm is *better*, we need a way to measure them that does not depend on whose laptop you happen to be using.',
        },
        {
          type: 'definition',
          term: 'Algorithm',
          text: 'An [[dm-algorithm|algorithm]] is a finite sequence of precise instructions for solving a problem or performing a computation. A good algorithm has **input** and **output**, every step is **definite** (unambiguous) and **effective** (actually doable), it is **correct** (right output for every valid input), it is **finite** (always halts), and it is **general** (works for every input of the stated kind, not just one).',
        },
        {
          type: 'p',
          text: 'Here is a tiny one: find the largest value in a list. Keep a "best so far", walk through the remaining items, and replace the best whenever you see something bigger. For a list of $n$ items that is exactly $n - 1$ comparisons, whatever the values are.',
        },
        {
          type: 'code',
          title: 'find_max.cpp',
          runnable: true,
          code: `#include <cstdio>
#include <vector>

// Returns the largest element; counts the comparisons it makes.
int findMax(const std::vector<int>& a, long& comparisons) {
    int best = a[0];
    for (std::size_t i = 1; i < a.size(); ++i) {
        ++comparisons;
        if (a[i] > best) best = a[i];
    }
    return best;
}

int main() {
    for (int n : {10, 1000, 1000000}) {
        std::vector<int> a(n);
        for (int i = 0; i < n; ++i) a[i] = static_cast<int>((i * 7919LL) % n); // some scrambled data
        long comparisons = 0;
        int m = findMax(a, comparisons);
        std::printf("n = %7d  max = %7d  comparisons = %ld\\n", n, m, comparisons);
    }
}`,
          output: `n =      10  max =       9  comparisons = 9
n =    1000  max =     999  comparisons = 999
n = 1000000  max =  999999  comparisons = 999999`,
          annotations: [
            { lines: 6, text: 'Start with the first item as the best so far.' },
            { lines: '7-10', text: 'One comparison per remaining item: $n - 1$ in total. This count is a property of the algorithm, not of the machine.' },
            { lines: 17, text: 'Multiplying by the prime $7919$ (mod $n$) scrambles $0, 1, \\dots, n-1$; `7919LL` keeps the product from overflowing an `int`.' },
          ],
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why count operations, not seconds?',
          text: 'A stopwatch measures the algorithm **plus** the CPU, the compiler, the cache, the other programs running and the specific input. Run the same code on a console dev kit and on a ten-year-old laptop and you get different seconds but the **same count** of comparisons. So we pick a *basic operation* (a comparison, an addition, a memory access), count how many times it runs as a function $T(n)$ of the input size $n$, and study how $T(n)$ **grows**. Seconds are roughly $T(n)$ times a machine-dependent constant, and the next cards show that constants are exactly what the analysis is designed to ignore.',
        },
      ],
    },
    // ------------------------------------------------------------------ 1
    {
      kind: 'mcq',
      prompt: 'Your teammate times two pathfinding functions on their PC and says function A is 3 ms faster. Why is counting operations as a function of $n$ a better basis for choosing between them?',
      options: [
        { text: 'Timings are always inaccurate, so they should never be used.', why: 'Timings are useful (profilers exist for a reason). They just mix the algorithm with the machine and one particular input.' },
        { text: 'An operation count describes the algorithm itself and how its work grows with $n$, independent of hardware and of one test size.', correct: true, why: 'Right. The 3 ms could flip on a bigger map or a different CPU; a growth rate like $n$ versus $n^2$ tells you what happens as maps get larger on any machine.' },
        { text: 'Counting operations gives the exact running time in seconds.', why: 'It does not: seconds also depend on the machine. The count tells you how the time *scales*.' },
        { text: 'Faster code always performs fewer operations, so the count and the timing must agree.', why: 'Not necessarily: cache behaviour and constant factors can make an algorithm with more operations faster for small inputs.' },
      ],
      explanation: 'A timing is one data point for one machine and one input size. The operation count $T(n)$ is a formula: it predicts how the work changes as the input grows, and that prediction holds on every machine up to a constant factor. That is why algorithm analysis is phrased in counts and growth rates.',
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'concept',
      title: 'Growth beats constants',
      blocks: [
        {
          type: 'p',
          text: 'Suppose algorithm A uses $T_A(n) = 100n$ operations and algorithm B uses $T_B(n) = n^2$. For a list of $10$ items, B wins easily: $100$ operations against $1000$. For $10\\,000$ items, A wins by a factor of $100$. Which is "faster" depends on $n$ — but only up to a point.',
        },
        {
          type: 'table',
          headers: ['$n$', '$T_A(n) = 100n$', '$T_B(n) = n^2$', 'winner'],
          rows: [
            ['$10$', '$1\\,000$', '$100$', 'B'],
            ['$100$', '$10\\,000$', '$10\\,000$', 'tie'],
            ['$1\\,000$', '$100\\,000$', '$1\\,000\\,000$', 'A (10× fewer)'],
            ['$10^6$', '$10^8$', '$10^{12}$', 'A (10 000× fewer)'],
          ],
          caption: 'Past the crossover at $n = 100$, A stays ahead forever, and its lead keeps growing.',
        },
        {
          type: 'graph',
          x: [0, 250],
          y: [0, 40000],
          xStep: 50,
          yStep: 10000,
          functions: [
            { expr: 'c*x', label: '$c \\cdot n$', color: 'blue' },
            { expr: 'x^2', label: '$n^2$', color: 'red' },
          ],
          sliders: [{ name: 'c', min: 1, max: 200, step: 1, value: 100, label: 'constant $c$' }],
          readouts: [{ label: 'crossover at $n =$', expr: 'c' }],
          caption: 'Make $c$ as large as you like: $c \\cdot n$ and $n^2$ still cross (at $n = c$), and after that the quadratic is worse forever. A bigger constant only delays the crossover.',
        },
        {
          type: 'p',
          text: 'This is the central insight of the whole topic. For large inputs, the **form** of $T(n)$ (linear, quadratic, exponential) matters far more than its constant factors or its smaller terms. In $T(n) = 3n^2 + 5n + 2$, the $3n^2$ term is $99.98\\%$ of the total once $n = 10\\,000$. We want notation that keeps the $n^2$ and throws away the rest — honestly, with a precise definition.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Small $n$ still matters in practice',
          text: 'Asymptotic analysis is about large $n$. For tiny inputs a "worse" algorithm with small constants can win, which is why real sort routines switch to insertion sort for short subarrays. Growth rate tells you what scales; profiling tells you what is fastest at your actual sizes.',
        },
      ],
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'numeric',
      prompt: 'Algorithm A uses $500n$ operations and algorithm B uses $5n^2$. What is the smallest positive integer $n$ for which B uses **strictly more** operations than A?',
      label: '$n =$',
      answer: '101',
      hint: 'Solve $5n^2 > 500n$ for positive $n$.',
      explanation: 'For $n > 0$, divide $5n^2 > 500n$ by $5n$ to get $n > 100$. At $n = 100$ the two are equal ($50\\,000$ each), so the first integer where B is strictly worse is $n = 101$. From there on the gap only grows: at $n = 1000$, B does $5\\,000\\,000$ operations against A\'s $500\\,000$.',
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'concept',
      title: 'Big-O: the formal definition',
      blocks: [
        {
          type: 'p',
          text: 'We want "$f$ grows no faster than $g$" to mean: once $n$ is large enough, $f(n)$ is at most a constant multiple of $g(n)$. The two constants that make this precise are called **witnesses**.',
        },
        {
          type: 'definition',
          term: 'Big-O',
          text: 'Let $f$ and $g$ be functions from $\\mathbb{N}$ (or $\\mathbb{R}$) to $\\mathbb{R}$. We say $f(n)$ is $O(g(n))$ ([[big-o-notation]]) if there are constants $C > 0$ and $k$ such that\n\n$$|f(n)| \\le C\\,|g(n)| \\quad \\text{whenever } n > k.$$\n\nThe pair $(C, k)$ is a pair of **witnesses**. $C$ absorbs constant factors; $k$ lets us ignore small $n$.',
        },
        {
          type: 'derivation',
          title: 'Prove that $3n^2 + 5n + 2$ is $O(n^2)$',
          steps: [
            { tex: '\\text{Let } n > 1. \\text{ Then } n < n^2 \\text{ and } 1 < n^2.', why: 'We get to choose $k$, so we pick $k = 1$ to make every lower power of $n$ at most $n^2$.' },
            { tex: '3n^2 + 5n + 2 \\le 3n^2 + 5n^2 + 2n^2', why: 'Replace $n$ by the larger $n^2$ and $1$ by the larger $n^2$. Each term only grows, so the inequality is safe. (All terms are positive, so the absolute values in the definition change nothing.)' },
            { tex: '= 10n^2', why: 'Add the coefficients: $3 + 5 + 2 = 10$.' },
            { tex: '\\therefore\\ |3n^2 + 5n + 2| \\le 10\\,|n^2| \\text{ for all } n > 1', why: 'This is the definition with witnesses $C = 10$ and $k = 1$.' },
          ],
          result: '$3n^2 + 5n + 2$ is $O(n^2)$, with witnesses $C = 10$, $k = 1$.',
        },
        {
          type: 'graph',
          x: [0, 10],
          y: [0, 400],
          xStep: 1,
          yStep: 50,
          functions: [
            { expr: '3x^2 + 5x + 2', label: '$f(n) = 3n^2 + 5n + 2$', color: 'blue' },
            { expr: 'C*x^2', label: '$C \\cdot n^2$', color: 'red', dashed: true },
          ],
          sliders: [{ name: 'C', min: 1, max: 12, step: 0.5, value: 10, label: 'witness $C$' }],
          readouts: [{ label: '$C n^2 - f(n)$ at $n = 6$:', expr: 'C*36 - 140' }],
          caption: 'With $C = 10$ the dashed curve is above $f$ for every $n > 1$. Slide to $C = 4$: it now crosses $f$ near $n \\approx 5.4$, so $C = 4$, $k = 6$ is another valid pair. For $C \\le 3$ it never gets above $f$, since $f(n) > 3n^2$ always.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Three things big-O does not say',
          text: '**Witnesses are not unique**: if $(C, k)$ works, so does any larger $C$ or $k$. **Big-O is only an upper bound**: $3n^2 + 5n + 2$ is also $O(n^3)$ and $O(2^n)$ — true but less informative. **The "=" in $f(n) = O(n^2)$ is not equality**: it means "$f$ belongs to the set of functions bounded by $Cn^2$". You can write $n = O(n^2)$, but $O(n^2) = n$ is meaningless.',
        },
      ],
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'fill',
      prompt: 'Complete the proof that $7n + 3$ is $O(n)$.',
      template: 'For every $n > 1$ we have $3 \\le$ ___ , so $7n + 3 \\le$ ___ . Therefore $7n + 3$ is $O(n)$ with witnesses $C =$ ___ and $k = 1$.',
      blanks: [{ answers: ['$3n$'] }, { answers: ['$10n$'] }, { answers: ['$10$'] }],
      wordBank: ['$3n$', '$10n$', '$10$', '$7$', '$n^2$', '$7n^2$'],
      explanation: 'Since $n > 1$, the constant $3$ is at most $3n$. Replacing it gives $7n + 3 \\le 7n + 3n = 10n$, which is exactly $|f(n)| \\le C|g(n)|$ with $C = 10$ and $g(n) = n$. Choosing $C = 7$ fails (the $+3$ always pushes $7n + 3$ above $7n$), and bounding by $7n^2$ would only prove the weaker statement $O(n^2)$.',
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'numeric',
      prompt: 'We want witnesses for $3n^2 + 5n + 2 \\le 4n^2$, i.e. $C = 4$. What is the **smallest integer** $m$ such that the inequality holds for every integer $n \\ge m$?',
      label: '$m =$',
      answer: '6',
      hint: 'Move everything to one side: you need $n^2 - 5n - 2 \\ge 0$. Find where the parabola crosses zero.',
      explanation: '$3n^2 + 5n + 2 \\le 4n^2 \\iff n^2 - 5n - 2 \\ge 0$. The roots of $n^2 - 5n - 2$ are $\\frac{5 \\pm \\sqrt{33}}{2}$, and the positive root is about $5.37$. The parabola opens upward, so the inequality holds for $n \\ge 5.37$, i.e. for every integer $n \\ge 6$. Check: at $n = 5$, $f = 102 > 100 = 4 \\cdot 25$; at $n = 6$, $f = 140 \\le 144$. So $C = 4$, $k = 5$ (meaning $n > 5$) is a valid pair of witnesses — a smaller $C$ costs you a larger $k$.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'Proving "not big-O", and the polynomial theorem',
      blocks: [
        {
          type: 'p',
          text: 'To show $f$ is **not** $O(g)$, you must show that **no** pair of witnesses works. That is a statement about all $C$ and $k$, so the natural tool is proof by contradiction: assume witnesses exist and derive something false.',
        },
        {
          type: 'derivation',
          title: 'Prove that $n^2$ is not $O(n)$',
          steps: [
            { tex: '\\text{Suppose } n^2 \\le C n \\text{ for all } n > k', why: 'Assume, for contradiction, that some witnesses $C > 0$ and $k$ exist.' },
            { tex: '\\implies n \\le C \\text{ for all } n > k', why: 'Divide both sides by $n$, which is positive for $n > k \\ge 0$ (we may assume $k \\ge 0$ since enlarging $k$ keeps the witnesses valid).' },
            { tex: '\\text{Take } n = \\max(k, C) + 1', why: 'This $n$ is larger than $k$, so the inequality must hold for it. Note $C$ and $k$ are fixed numbers chosen *before* $n$.' },
            { tex: '\\implies n > C, \\text{ contradicting } n \\le C', why: 'Our chosen $n$ exceeds $C$, so the claimed bound fails. No witnesses can exist.' },
          ],
          result: '$n^2$ is not $O(n)$: no constant multiple of $n$ stays above $n^2$ forever.',
        },
        {
          type: 'p',
          text: 'The trick in the first proof — "replace every lower power of $n$ by the top power" — works for any [[polynomial]], and gives the most-used fact in algorithm analysis:',
        },
        {
          type: 'theorem',
          name: 'Polynomials are big-O of their leading power',
          tex: 'f(n) = a_d n^d + a_{d-1} n^{d-1} + \\cdots + a_1 n + a_0 \\implies f(n) \\text{ is } O(n^d)',
          text: 'Witnesses: $C = |a_d| + |a_{d-1}| + \\cdots + |a_0|$ and $k = 1$.',
        },
        {
          type: 'derivation',
          title: 'Proof',
          steps: [
            { tex: '|f(n)| \\le |a_d| n^d + |a_{d-1}| n^{d-1} + \\cdots + |a_1| n + |a_0|', why: 'The triangle inequality $|x + y| \\le |x| + |y|$, applied term by term; $n^i$ is positive for $n > 0$.' },
            { tex: '\\le |a_d| n^d + |a_{d-1}| n^{d} + \\cdots + |a_1| n^d + |a_0| n^d', why: 'For $n > 1$, every power $n^i$ with $i \\le d$ is at most $n^d$.' },
            { tex: '= \\big(|a_d| + |a_{d-1}| + \\cdots + |a_0|\\big)\\, n^d', why: 'Factor out $n^d$. The bracket is a constant: it does not depend on $n$.' },
          ],
          result: 'So $|f(n)| \\le C n^d$ for all $n > 1$. Negative coefficients are handled by the absolute values.',
        },
        {
          type: 'callout',
          variant: 'exam',
          title: 'What graders look for',
          text: 'A big-O proof must name **specific** witnesses ($C = 10$, $k = 1$) and show the inequality holds for **every** $n > k$. Both $C$ and $k$ must be constants — they may not depend on $n$. The classic lost-points move is "choose $C = n$".',
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'error',
      prompt: 'A student "proves" that $n^2$ is $O(n)$. Tap the first line that is wrong.',
      lines: [
        'We need constants $C$ and $k$ with $n^2 \\le Cn$ for all $n > k$.',
        'For $n > 0$, dividing by $n$ shows this is the same as $n \\le C$.',
        'Choose $C = n$ and $k = 1$.',
        'Then $n \\le C$ holds for every $n > 1$.',
        'So $n^2$ is $O(n)$.',
      ],
      errorLines: [3],
      explanation: 'Line 3 breaks the definition: $C$ must be a **constant**, fixed before $n$ is chosen. "$C = n$" is a different number for every $n$, so it is not a witness at all. Lines 1–2 are a fine setup; the correct conclusion is the opposite one: whatever constant $C$ you fix, $n = C + 1$ violates $n \\le C$, so $n^2$ is **not** $O(n)$.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'concept',
      title: 'Big-Omega and Big-Theta',
      blocks: [
        {
          type: 'p',
          text: 'Big-O is an upper bound, like $\\le$. Saying merge sort is $O(n^{10})$ is true but useless. To say an algorithm is *at least* this slow, or *exactly* this order of growth, we need two companions.',
        },
        {
          type: 'definition',
          term: 'Big-Omega and Big-Theta',
          text: '$f(n)$ is $\\Omega(g(n))$ ([[dm-big-omega|big-Omega]]) if there are constants $C > 0$ and $k$ with $|f(n)| \\ge C\\,|g(n)|$ whenever $n > k$.\n\n$f(n)$ is $\\Theta(g(n))$ ([[dm-big-theta|big-Theta]]) if $f(n)$ is both $O(g(n))$ and $\\Omega(g(n))$. Equivalently, there are $C_1, C_2 > 0$ and $k$ with $C_1|g(n)| \\le |f(n)| \\le C_2|g(n)|$ for $n > k$.',
        },
        {
          type: 'table',
          headers: ['Notation', 'Reads as', 'Like', 'Example'],
          rows: [
            ['$f = O(g)$', '$f$ grows no faster than $g$', '$\\le$', '$5n + 1 = O(n^2)$'],
            ['$f = \\Omega(g)$', '$f$ grows at least as fast as $g$', '$\\ge$', '$n^2 = \\Omega(n \\log n)$'],
            ['$f = \\Theta(g)$', '$f$ and $g$ grow at the same rate', '$=$', '$3n^2 + 5n + 2 = \\Theta(n^2)$'],
          ],
          caption: 'The analogy is only about growth: $f = \\Theta(g)$ allows $f = 1000g$.',
        },
        {
          type: 'derivation',
          title: 'Finish the proof that $3n^2 + 5n + 2$ is $\\Theta(n^2)$',
          steps: [
            { tex: '3n^2 + 5n + 2 \\ge 3n^2 \\text{ for all } n > 0', why: 'The dropped terms $5n + 2$ are positive when $n > 0$, so removing them can only make the left side smaller.' },
            { tex: '\\implies 3n^2 + 5n + 2 \\text{ is } \\Omega(n^2)', why: 'This is the $\\Omega$ definition with $C = 3$, $k = 0$.' },
            { tex: '3n^2 \\le 3n^2 + 5n + 2 \\le 10n^2 \\text{ for } n > 1', why: 'Combine with the big-O proof ($C = 10$, $k = 1$), using the larger $k$ for both.' },
          ],
          result: '$3n^2 + 5n + 2$ is $\\Theta(n^2)$, sandwiched between $3n^2$ and $10n^2$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why every polynomial is $\\Theta$ of its leading power',
          text: 'If $a_d > 0$, the lower terms together are at most $S n^{d-1}$ in size, with $S = |a_{d-1}| + \\cdots + |a_0|$. Once $n \\ge 2S/a_d$, that is at most $\\frac{a_d}{2} n^d$, so the leading term can lose at most half of itself: $f(n) \\ge \\frac{a_d}{2} n^d$. Together with the upper bound, $f(n) = \\Theta(n^d)$. This is why you can read the growth of a polynomial operation count straight off its highest power.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'A calculus shortcut (optional)',
          text: 'If you know limits: when $\\lim_{n \\to \\infty} f(n)/g(n)$ is a positive finite number, $f = \\Theta(g)$; when it is $0$, $f = O(g)$ but not $\\Omega(g)$. Handy for checking, but the witness definitions are what you must be able to use in a proof.',
        },
      ],
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'truefalse',
      prompt: 'Since $3n + 2$ is $O(n^2)$, it is also $\\Theta(n^2)$.',
      answer: false,
      explanation: '$\\Theta(n^2)$ also needs the lower bound $3n + 2 \\ge Cn^2$ for large $n$, which fails: dividing by $n$ would need $3 + 2/n \\ge Cn$, impossible once $n > 5/C$. The truth is $3n + 2 = \\Theta(n)$. Big-O is only an upper bound, so "$O(n^2)$" is a true but loose statement about a linear function.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'The growth hierarchy',
      blocks: [
        {
          type: 'p',
          text: 'A handful of functions describe almost every algorithm you will meet. Each one in this list is $O$ of the next but not $\\Omega$ of it — every step to the right is a genuinely faster-growing class:',
        },
        {
          type: 'math',
          tex: '1 \\;\\prec\\; \\log n \\;\\prec\\; \\sqrt{n} \\;\\prec\\; n \\;\\prec\\; n \\log n \\;\\prec\\; n^2 \\;\\prec\\; n^3 \\;\\prec\\; 2^n \\;\\prec\\; n!',
          caption: '$f \\prec g$ means $f$ is $O(g)$ but $g$ is not $O(f)$. Typical sources: array lookup, binary search, a single loop, merge sort, all pairs, all triples, all subsets, all orderings.',
        },
        {
          type: 'graph',
          x: [0, 20],
          y: [0, 100],
          xStep: 2,
          yStep: 10,
          functions: [
            { expr: 'log_2(x)', label: '$\\log_2 n$', color: 'teal', domain: [0.01, 20] },
            { expr: 'x', label: '$n$', color: 'green' },
            { expr: 'x*log_2(x)', label: '$n \\log_2 n$', color: 'blue', domain: [0.01, 20] },
            { expr: 'x^2', label: '$n^2$', color: 'orange' },
            { expr: '2^x', label: '$2^n$', color: 'red' },
          ],
          points: [
            { x: 1, y: 1, label: '1!', color: 'purple' },
            { x: 2, y: 2, label: '2!', color: 'purple' },
            { x: 3, y: 6, label: '3!', color: 'purple' },
            { x: 4, y: 24, label: '4!', color: 'purple' },
            { x: 5, y: 120, label: '5! = 120', color: 'purple' },
          ],
          caption: 'For small $n$ the curves tangle; by $n = 20$ the order is settled. $2^n$ leaves the window at $n \\approx 6.6$, and $n!$ (purple dots) is already off the chart at $n = 5$.',
        },
        {
          type: 'p',
          text: 'Two of the links have short proofs. **$\\log_2 n \\prec n$**: since $n < 2^n$ for every $n \\ge 1$ (a quick induction), taking $\\log_2$ of both sides gives $\\log_2 n < n$. **$2^n \\prec n!$**: compare factor by factor. $n! = 1 \\cdot 2 \\cdot 3 \\cdot 4 \\cdots n$ and $2^n = 2 \\cdot 2 \\cdot 2 \\cdot 2 \\cdots 2$; from the fourth factor on, every factor of $n!$ is at least as big, and $4! = 24 \\ge 16 = 2^4$, so $n! \\ge 2^n$ for $n \\ge 4$. And $\\frac{n!}{2^n} \\ge \\frac{3}{4} \\cdot \\frac{n}{2}$ grows without bound, so $n!$ is not $O(2^n)$. More generally, every power $n^a$ is $O(2^n)$, and $\\log n$ is $O(n^a)$ for every $a > 0$.',
        },
        {
          type: 'heading',
          text: 'Why "$O(\\log n)$" never names a base',
        },
        {
          type: 'derivation',
          title: 'Logarithms of different bases are $\\Theta$ of each other',
          steps: [
            { tex: '\\log_a n = \\frac{\\log_b n}{\\log_b a}', why: 'The change-of-base formula for [[logarithm|logarithms]], valid for bases $a, b > 1$.' },
            { tex: '= \\frac{1}{\\log_b a} \\cdot \\log_b n', why: 'Rewrite as a constant times $\\log_b n$. Since $a > 1$ and $b > 1$, $\\log_b a$ is a fixed positive number.' },
            { tex: '\\implies \\log_a n = \\Theta(\\log_b n)', why: 'Use $C_1 = C_2 = 1/\\log_b a$ in the $\\Theta$ definition. Switching base only multiplies by a constant, which $\\Theta$ ignores.' },
          ],
          result: '$\\log_2 n$, $\\ln n$ and $\\log_{10} n$ are all $\\Theta(\\log n)$. Computer scientists usually *mean* $\\log_2$, but in big-O the base is irrelevant.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Bases do matter in exponents',
          text: 'The base of a **logarithm** is just a constant factor; the base of an **exponential** is not. $4^n = (2^n)^2$, and $4^n / 2^n = 2^n$ is unbounded, so $4^n$ is **not** $O(2^n)$. Likewise $2^{n+1} = 2 \\cdot 2^n$ is $\\Theta(2^n)$, but $2^{2n}$ is not.',
        },
      ],
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'order',
      prompt: 'Arrange these functions from **slowest-growing** (top) to **fastest-growing** (bottom).',
      lines: ['$\\log_2 n$', '$\\sqrt{n}$', '$n \\log_2 n$', '$n^2$', '$2^n$', '$n!$'],
      explanation: 'Each function is $O$ of the next but not the other way round: $\\log_2 n \\prec \\sqrt{n}$ (any positive power of $n$ beats a logarithm), $\\sqrt{n} \\prec n \\log_2 n$, $n\\log_2 n \\prec n^2$ (divide both by $n$: $\\log_2 n \\prec n$), $n^2 \\prec 2^n$ (any polynomial loses to an exponential), and $2^n \\prec n!$ (from $n = 4$ on, each factor of $n!$ is at least $2$, and the factors keep growing).',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'numeric',
      prompt: 'For $n > 1$, compute $\\dfrac{\\log_2 n}{\\log_8 n}$. (It is the same for every $n$.)',
      answer: '3',
      hint: 'Change of base: $\\log_8 n = \\dfrac{\\log_2 n}{\\log_2 8}$.',
      explanation: '$\\log_8 n = \\frac{\\log_2 n}{\\log_2 8} = \\frac{\\log_2 n}{3}$, so the ratio is $3$ for every $n > 1$. For example $n = 64$: $\\log_2 64 = 6$ and $\\log_8 64 = 2$. A constant ratio is exactly why $O(\\log_2 n)$ and $O(\\log_8 n)$ are the same class.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'concept',
      title: 'What $n = 10^6$ costs in a 16 ms frame',
      blocks: [
        {
          type: 'p',
          text: 'Let\'s make the classes concrete. A game running at 60 frames per second has about $16$ ms per frame for *everything*: physics, AI, animation, rendering. Use the rough model that a modern core does about $10^9$ simple operations per second. Then one frame buys you roughly $1.6 \\times 10^7$ operations. Suppose some per-frame task touches $n = 10^6$ things (particles, grid cells, navmesh polygons).',
        },
        {
          type: 'table',
          headers: ['Class', 'Operations at $n = 10^6$', 'Time at $10^9$ ops/s', 'Fits in 16 ms?'],
          rows: [
            ['$1$', '$1$', '$1$ ns', 'yes'],
            ['$\\log_2 n$', '$\\approx 20$', '$20$ ns', 'yes'],
            ['$n$', '$10^6$', '$1$ ms', 'yes'],
            ['$n \\log_2 n$', '$\\approx 2 \\times 10^7$', '$\\approx 20$ ms', 'no — just over'],
            ['$n^2$', '$10^{12}$', '$1000$ s $\\approx 17$ min', 'no'],
            ['$2^n$', '$\\approx 10^{301\\,030}$', 'far longer than the age of the universe ($\\approx 4 \\times 10^{17}$ s)', 'never'],
            ['$n!$', '$\\approx 10^{5\\,565\\,709}$', 'even longer', 'never'],
          ],
          caption: 'Rough numbers, but the conclusions are robust: a $10\\times$ faster machine moves $n^2$ from 17 minutes to 100 seconds — still unplayable.',
        },
        {
          type: 'code',
          title: 'frame_budget.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdio>

int main() {
    const double n = 1e6;
    const double opsPerSec = 1e9;          // rough model: 1 simple op per ns
    const double budget = 0.016 * opsPerSec; // ops that fit in a 16 ms frame

    struct Row { const char* name; double ops; };
    const Row rows[] = {
        {"log n  ", std::log2(n)},
        {"n      ", n},
        {"n log n", n * std::log2(n)},
        {"n^2    ", n * n},
    };
    for (const Row& r : rows)
        std::printf("%s %10.3g ops  %10.3g ms  %s\\n", r.name, r.ops,
                    r.ops / opsPerSec * 1000, r.ops <= budget ? "fits" : "too slow");

    // 2^n and n! overflow a double, so work with log10 of the count.
    std::printf("2^n     10^%.0f ops\\n", n * std::log10(2.0));
    std::printf("n!      10^%.0f ops\\n", std::lgamma(n + 1) / std::log(10.0));
}`,
          output: `log n         19.9 ops    1.99e-05 ms  fits
n            1e+06 ops           1 ms  fits
n log n   1.99e+07 ops        19.9 ms  too slow
n^2          1e+12 ops       1e+06 ms  too slow
2^n     10^301030 ops
n!      10^5565709 ops`,
          annotations: [
            { lines: 7, text: '$0.016 \\text{ s} \\times 10^9 \\text{ ops/s} = 1.6 \\times 10^7$ operations per frame.' },
            { lines: '20-22', text: '$\\log_{10}(2^n) = n\\log_{10} 2$, and `std::lgamma(n + 1)` is $\\ln(n!)$; dividing by $\\ln 10$ converts it to $\\log_{10}$.' },
          ],
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Where this bites in games',
          text: 'Checking every pair of $n$ colliders is $\\frac{n(n-1)}{2} = \\Theta(n^2)$ tests: fine for $100$ objects ($4950$ tests), hopeless for $10^5$ (about $5 \\times 10^9$). Engines use a broad phase — uniform grids, spatial hashing, bounding-volume trees — so each object is only tested against nearby ones, bringing typical cost close to $\\Theta(n)$ or $\\Theta(n \\log n)$. Choosing the right growth class matters more than any micro-optimisation.',
        },
      ],
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'numeric',
      prompt: 'Using the model above (a 16 ms frame and $10^9$ operations per second), an algorithm performs exactly $n^2$ operations. What is the **largest** $n$ it can handle within one frame?',
      label: '$n =$',
      answer: '4000',
      hint: 'The budget is $0.016 \\times 10^9$ operations. Solve $n^2 \\le$ budget.',
      explanation: 'The frame budget is $0.016 \\times 10^9 = 1.6 \\times 10^7$ operations. We need $n^2 \\le 1.6 \\times 10^7$, so $n \\le \\sqrt{1.6 \\times 10^7} = 4000$ (indeed $4000^2 = 16\\,000\\,000$). Compare a linear algorithm, which could handle $n = 1.6 \\times 10^7$ — four thousand times more.',
    },
    // ------------------------------------------------------------------ 16
    {
      kind: 'mcq',
      prompt: 'Which of these functions is $\\Theta(n^2)$?',
      options: [
        { text: '$n^2 \\log_2 n$', why: 'The extra factor $\\log_2 n$ grows without bound, so no constant $C$ gives $n^2 \\log_2 n \\le Cn^2$. It is $\\Omega(n^2)$ but not $O(n^2)$.' },
        { text: '$1000n$', why: 'This is $O(n^2)$ but not $\\Omega(n^2)$: it is $\\Theta(n)$. A big coefficient does not change the growth class.' },
        { text: '$\\dfrac{n^2}{2} + 100\\,n \\log_2 n$', correct: true, why: 'Right. $100n\\log_2 n$ is $O(n^2)$, so the sum is at most a constant times $n^2$, and it is at least $\\frac{1}{2}n^2$. Sandwiched: $\\Theta(n^2)$.' },
        { text: '$n(n-1)(n-2)$', why: 'Multiplying out gives $n^3 - 3n^2 + 2n$, a cubic: $\\Theta(n^3)$.' },
      ],
      explanation: 'For $\\Theta(n^2)$ you need both bounds. $\\frac{n^2}{2} + 100n\\log_2 n \\ge \\frac{1}{2}n^2$ for $n \\ge 1$, and since $\\log_2 n < n$, it is $\\le \\frac{1}{2}n^2 + 100n^2 = 100.5n^2$. The others fail one side: $1000n$ is too small, $n^2\\log_2 n$ and the cubic are too big.',
    },
  ],
  takeaways: [
    'An algorithm is a finite, precise, general procedure; we measure it by counting basic operations $T(n)$ as a function of input size, because counts are machine-independent.',
    '$f = O(g)$ means $|f(n)| \\le C|g(n)|$ for all $n > k$, for some constant witnesses $C$ and $k$; $\\Omega$ flips the inequality, and $\\Theta$ means both.',
    'To prove $f$ is not $O(g)$, assume witnesses exist and pick an $n > k$ that breaks the inequality; witnesses can never depend on $n$.',
    'A degree-$d$ polynomial with nonzero leading coefficient is $\\Theta(n^d)$: drop constants and lower-order terms.',
    'Growth hierarchy: $1 \\prec \\log n \\prec n \\prec n\\log n \\prec n^2 \\prec 2^n \\prec n!$. Log bases are interchangeable in big-O; exponential bases are not.',
    'At $n = 10^6$ and $10^9$ ops/s, $n$ takes a millisecond, $n\\log n$ about a 16 ms frame, $n^2$ about 17 minutes, and $2^n$ forever.',
  ],
  reading: [
    {
      title: 'Levin — Discrete Mathematics: An Open Introduction',
      url: 'https://discrete.openmathbooks.org/dmoi3.html',
      source: 'book',
      note: 'A free, readable discrete math text whose exercises are good practice for the proof techniques used in witness arguments.',
    },
    {
      title: 'MIT OCW 6.042J — Mathematics for Computer Science',
      url: 'https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-fall-2010/',
      source: 'other',
      note: 'The lecture notes on asymptotic notation give the same definitions with many more worked examples and limit-based shortcuts.',
    },
    {
      title: 'Wikipedia — Big O notation',
      url: 'https://en.wikipedia.org/wiki/Big_O_notation',
      source: 'wikipedia',
      note: 'Has a long table of common orders of growth and the family of related notations ($o$, $\\omega$, $\\Omega$, $\\Theta$).',
    },
    {
      title: 'Khan Academy — Computer science: asymptotic notation',
      url: 'https://www.khanacademy.org/computing/computer-science',
      source: 'khan',
      note: 'The algorithms course has short interactive articles on big-$\\Theta$, big-O and big-$\\Omega$ with graphs like the ones in this lesson.',
    },
  ],
};
