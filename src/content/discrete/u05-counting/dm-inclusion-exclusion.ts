import type { Lesson } from '../../types';

// D(n)/n! for n = 1..10, computed exactly from D(n) = round(n!/e).
const derangementPoints = Array.from({ length: 10 }, (_, i) => {
  const n = i + 1;
  let f = 1;
  for (let j = 2; j <= n; j++) f *= j;
  return { x: n, y: Math.round(f / Math.E) / f, color: 'blue' as const };
});

export const lesson: Lesson = {
  id: 'dm-inclusion-exclusion',
  title: 'Inclusion–Exclusion and Distributing Objects',
  summary: 'Counting unions of overlapping sets with inclusion–exclusion, derangements and the surprising $1/e$, stars and bars for handing out identical loot, multinomial coefficients for words like MISSISSIPPI, and a decision chart for every counting problem in this unit.',
  minutes: 20,
  objectives: [
    'Apply inclusion–exclusion to two, three and $n$ sets, and prove that it counts every element exactly once',
    'Count derangements with inclusion–exclusion and explain why the fraction of derangements tends to $1/e$',
    'Count combinations with repetition and distributions of identical objects with stars and bars, including "at least one each"',
    'Count arrangements of words with repeated letters using multinomial coefficients',
    'Classify a counting problem (order? repetition? identical or distinct objects?) and choose the right formula',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Inclusion–exclusion for two and three sets',
      blocks: [
        {
          type: 'p',
          text: 'In the first lesson of this unit you fixed the sum rule for overlapping sets: $|A \\cup B| = |A| + |B| - |A \\cap B|$. The picture says why — adding the two circles counts the lens in the middle twice.',
        },
        {
          type: 'figure',
          svg: '<svg viewBox="0 0 440 240" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="420" height="200" rx="10" fill="none" stroke="currentColor" stroke-width="1.2" class="s-gray"/><circle cx="180" cy="108" r="78" class="f-blue s-blue" fill-opacity="0.18" stroke-width="2"/><circle cx="260" cy="108" r="78" class="f-orange s-orange" fill-opacity="0.18" stroke-width="2"/><text x="110" y="40" font-size="16" class="t-blue">A</text><text x="322" y="40" font-size="16" class="t-orange">B</text><text x="140" y="113" text-anchor="middle" font-size="13">in A only</text><text x="300" y="113" text-anchor="middle" font-size="13">in B only</text><text x="220" y="113" text-anchor="middle" font-size="13">A ∩ B</text><text x="220" y="232" text-anchor="middle" font-size="13" class="t-red">elements of A ∩ B are counted twice by |A| + |B|</text></svg>',
          alt: 'A Venn diagram of two overlapping circles A and B inside a rectangle. The regions are labeled in A only, A intersect B, and in B only. A note says elements of A intersect B are counted twice by |A| + |B|.',
          maxWidth: 420,
        },
        {
          type: 'p',
          text: 'With three sets the overlaps overlap. Adding $|A| + |B| + |C|$ counts the pairwise lenses twice, so subtract the three pairwise intersections. But the very center, $A \\cap B \\cap C$, was added $3$ times and then subtracted $3$ times — it is now counted $0$ times, so add it back once.',
        },
        {
          type: 'theorem',
          name: 'Inclusion–exclusion for three sets',
          text: 'This is the three-set case of the [[dm-inclusion-exclusion|principle of inclusion–exclusion]].',
          tex: '|A \\cup B \\cup C| = |A| + |B| + |C| - |A \\cap B| - |A \\cap C| - |B \\cap C| + |A \\cap B \\cap C|',
        },
        {
          type: 'table',
          headers: ['An element lying in exactly…', 'added by singles', 'subtracted by pairs', 'added by the triple', 'net count'],
          rows: [
            ['$1$ set', '$1$', '$0$', '$0$', '$1$'],
            ['$2$ sets', '$2$', '$1$', '$0$', '$1$'],
            ['$3$ sets', '$3$', '$3$', '$1$', '$1$'],
          ],
          caption: 'The proof, region by region: every element of the union is counted exactly once.',
        },
        {
          type: 'derivation',
          title: 'How many integers from 1 to 1000 are divisible by 3, 5 or 7?',
          steps: [
            { tex: '|A| = \\lfloor 1000/3 \\rfloor = 333,\\quad |B| = \\lfloor 1000/5 \\rfloor = 200,\\quad |C| = \\lfloor 1000/7 \\rfloor = 142', why: 'The multiples of $d$ up to $N$ are $d, 2d, \\dots, \\lfloor N/d \\rfloor d$. ($\\lfloor x \\rfloor$, the *floor*, rounds down.)' },
            { tex: '|A \\cap B| = \\lfloor 1000/15 \\rfloor = 66,\\quad |A \\cap C| = \\lfloor 1000/21 \\rfloor = 47,\\quad |B \\cap C| = \\lfloor 1000/35 \\rfloor = 28', why: 'Divisible by both $3$ and $5$ means divisible by $15$, because $3$ and $5$ are coprime (number theory unit). Same for $21$ and $35$.' },
            { tex: '|A \\cap B \\cap C| = \\lfloor 1000/105 \\rfloor = 9', why: 'Divisible by all three means divisible by $3 \\cdot 5 \\cdot 7 = 105$.' },
            { tex: '333 + 200 + 142 - 66 - 47 - 28 + 9 = 543', why: 'Inclusion–exclusion: add singles, subtract pairs, add the triple.' },
          ],
          result: '$543$ integers — and the other $1000 - 543 = 457$ are divisible by none of them.',
        },
        {
          type: 'figure',
          svg: '<svg viewBox="0 0 460 330" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="440" height="310" rx="10" fill="none" stroke="currentColor" stroke-width="1.2" class="s-gray"/><circle cx="185" cy="130" r="88" class="f-blue s-blue" fill-opacity="0.16" stroke-width="2"/><circle cx="275" cy="130" r="88" class="f-orange s-orange" fill-opacity="0.16" stroke-width="2"/><circle cx="230" cy="210" r="88" class="f-green s-green" fill-opacity="0.16" stroke-width="2"/><text x="90" y="50" font-size="15" class="t-blue">A: ÷3</text><text x="318" y="50" font-size="15" class="t-orange">B: ÷5</text><text x="320" y="300" font-size="15" class="t-green">C: ÷7</text><text x="150" y="115" text-anchor="middle" font-size="16">229</text><text x="310" y="115" text-anchor="middle" font-size="16">115</text><text x="230" y="265" text-anchor="middle" font-size="16">76</text><text x="230" y="100" text-anchor="middle" font-size="16">57</text><text x="185" y="190" text-anchor="middle" font-size="16">38</text><text x="275" y="190" text-anchor="middle" font-size="16">19</text><text x="230" y="160" text-anchor="middle" font-size="16">9</text><text x="60" y="300" text-anchor="middle" font-size="14" class="t-gray">457</text></svg>',
          alt: 'A three-circle Venn diagram for the integers 1 to 1000. A is divisible by 3, B by 5, C by 7. Region counts: A only 229, B only 115, C only 76, A and B only 57, A and C only 38, B and C only 19, all three 9, outside all circles 457.',
          caption: 'The exact count in each of the $8$ regions, found by brute force. The seven regions inside the circles add to $543$, matching the formula.',
          maxWidth: 440,
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'numeric',
      prompt: 'How many integers from $1$ to $100$ are divisible by $2$, $3$ or $5$?',
      hint: 'Singles: $\\lfloor 100/2 \\rfloor$, $\\lfloor 100/3 \\rfloor$, $\\lfloor 100/5 \\rfloor$. Pairs use $6, 10, 15$; the triple uses $30$.',
      label: 'count $=$',
      answer: '74',
      explanation: 'Singles: $50 + 33 + 20 = 103$. Pairs: $\\lfloor 100/6 \\rfloor + \\lfloor 100/10 \\rfloor + \\lfloor 100/15 \\rfloor = 16 + 10 + 6 = 32$. Triple: $\\lfloor 100/30 \\rfloor = 3$. Total $103 - 32 + 3 = 74$ (confirmed by checking all $100$ numbers). So $26$ numbers up to $100$ are divisible by none of $2, 3, 5$ — they are $1$ and the numbers whose prime factors are all at least $7$.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'The general formula, and why it works',
      blocks: [
        {
          type: 'p',
          text: 'The pattern continues for any number of sets: add the sizes of the single sets, subtract all pairwise intersections, add all triple intersections, and so on, alternating signs.',
        },
        {
          type: 'theorem',
          name: 'The principle of inclusion–exclusion',
          tex: '\\left| A_1 \\cup \\cdots \\cup A_n \\right| = \\sum_{i}|A_i| - \\sum_{i<j}|A_i \\cap A_j| + \\sum_{i<j<k}|A_i \\cap A_j \\cap A_k| - \\cdots + (-1)^{n+1}|A_1 \\cap \\cdots \\cap A_n|',
          text: 'The $j$-th sum runs over all $\\binom{n}{j}$ choices of $j$ of the sets, with sign $(-1)^{j+1}$.',
        },
        {
          type: 'derivation',
          title: 'Proof: each element of the union is counted exactly once',
          steps: [
            { tex: 'x \\text{ lies in exactly } r \\ge 1 \\text{ of the sets}', why: 'Pick any element of the union, and let $r$ be the number of sets containing it.' },
            { tex: 'x \\text{ appears in } \\binom{r}{j} \\text{ of the } j\\text{-fold intersections}', why: 'An intersection of $j$ sets contains $x$ exactly when all $j$ sets are among the $r$ that contain $x$.' },
            { tex: '\\text{net count} = \\binom{r}{1} - \\binom{r}{2} + \\binom{r}{3} - \\cdots + (-1)^{r+1}\\binom{r}{r}', why: 'Collect $x$\'s contributions from every sum, with their signs. Sums with $j > r$ contribute nothing.' },
            { tex: '= 1 - \\sum_{j=0}^{r}(-1)^j\\binom{r}{j} = 1 - (1 - 1)^r = 1', why: 'Add and subtract the $j = 0$ term $\\binom{r}{0} = 1$, then use the binomial theorem from the previous lesson. Since $r \\ge 1$, $(1 - 1)^r = 0$.' },
          ],
          result: 'Every element of the union is counted exactly once, and elements outside the union are never counted. $\\blacksquare$',
        },
        {
          type: 'p',
          text: 'Usually you want the elements with **none** of the properties: $N - |A_1 \\cup \\cdots \\cup A_n|$, where $N$ is the size of the universe. Inclusion–exclusion shines whenever "has property $i$" is easy to count and **intersections are easy too** — typically because the sets are symmetric, so every $j$-fold intersection has the same size.',
        },
        {
          type: 'derivation',
          title: 'Hand out 5 different items to 3 players so that every player gets at least one',
          steps: [
            { tex: 'N = 3^5 = 243', why: 'Without restriction, each of the $5$ distinct items independently goes to one of $3$ players (product rule).' },
            { tex: '|A_i| = 2^5 = 32', why: '$A_i$ = distributions where player $i$ gets nothing: every item goes to one of the other $2$ players.' },
            { tex: '|A_i \\cap A_j| = 1^5 = 1, \\quad |A_1 \\cap A_2 \\cap A_3| = 0', why: 'Two players empty-handed: everything goes to the third. All three empty: impossible.' },
            { tex: '243 - \\left(3 \\cdot 32 - 3 \\cdot 1 + 0\\right) = 243 - 93 = 150', why: 'Universe minus the union, with $\\binom{3}{1}$ singles and $\\binom{3}{2}$ pairs.' },
          ],
          result: '$150$ fair-ish deals (each player gets something). In function language: there are $150$ onto functions from a $5$-set to a $3$-set.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'error',
      prompt: 'A student counts the integers from $1$ to $60$ divisible by $2$, $3$ or $5$. Tap the first wrong line.',
      lines: [
        'Singles: $|A| + |B| + |C| = 30 + 20 + 12 = 62$.',
        'Pairs (multiples of $6$, $10$, $15$): $10 + 6 + 4 = 20$.',
        'Triple (multiples of $30$): $2$.',
        'By inclusion–exclusion, $|A \\cup B \\cup C| = 62 - 20 - 2 = 40$.',
      ],
      errorLines: [4],
      explanation: 'The signs alternate: the triple intersection is **added**, not subtracted. The multiples of $30$ were added $3$ times by the singles and subtracted $3$ times by the pairs, so they must be added back once: $62 - 20 + 2 = 44$. A brute-force check of $1, \\dots, 60$ gives $44$.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Derangements: the hat-check problem',
      blocks: [
        {
          type: 'p',
          text: '$n$ guests check their hats; the attendant hands them back in a uniformly random order. How many orders give **nobody** their own hat? Such a [[permutation]] — one with no fixed point — is a [[dm-derangement|derangement]], and $D_n$ denotes their number. Secret-Santa draws where nobody draws themselves are exactly derangements.',
        },
        {
          type: 'derivation',
          title: 'Counting $D_n$ with inclusion–exclusion',
          steps: [
            { tex: 'A_i = \\{\\text{permutations with guest } i \\text{ getting hat } i\\}', why: 'The "bad" properties. A derangement is a permutation in none of the $A_i$.' },
            { tex: '|A_{i_1} \\cap \\cdots \\cap A_{i_j}| = (n - j)!', why: 'Fix $j$ particular guests to their own hats; the other $n - j$ hats can be arranged in any of $(n-j)!$ ways.' },
            { tex: '\\left|\\textstyle\\bigcup A_i\\right| = \\sum_{j=1}^{n}(-1)^{j+1}\\binom{n}{j}(n-j)!', why: 'Inclusion–exclusion; by symmetry each of the $\\binom{n}{j}$ $j$-fold intersections has the same size.' },
            { tex: 'D_n = n! - \\left|\\textstyle\\bigcup A_i\\right| = \\sum_{j=0}^{n}(-1)^j\\binom{n}{j}(n-j)!', why: 'Complement; the $j = 0$ term is $n!$ itself.' },
            { tex: '= \\sum_{j=0}^{n}(-1)^j\\frac{n!}{j!} = n!\\left(1 - \\frac{1}{1!} + \\frac{1}{2!} - \\cdots + \\frac{(-1)^n}{n!}\\right)', why: '$\\binom{n}{j}(n-j)! = \\frac{n!}{j!\\,(n-j)!}(n-j)! = \\frac{n!}{j!}$.' },
          ],
          result: '$D_1, D_2, \\dots, D_6 = 0, 1, 2, 9, 44, 265$ (each verified by listing all permutations).',
        },
        {
          type: 'p',
          text: 'Divide by $n!$ to get the **probability** that a random permutation is a derangement: $1 - 1 + \\frac{1}{2!} - \\frac{1}{3!} + \\cdots$. The infinite version of this alternating sum is the series for $e^{-1}$ (you may know $e^x = \\sum x^j/j!$ from calculus; here it is just a fact you can check numerically). The partial sums converge astonishingly fast:',
        },
        {
          type: 'graph',
          x: [0, 10.5],
          y: [0, 0.6],
          xStep: 1,
          yStep: 0.1,
          height: 260,
          points: [...derangementPoints, { x: 'n', y: 'floor(n!/e + 0.5)/n!', color: 'red' }],
          hlines: [{ y: '1/e', label: '1/e ≈ 0.3679', color: 'gray' }],
          sliders: [{ name: 'n', min: 1, max: 10, step: 1, value: 4, label: 'number of guests $n$' }],
          readouts: [
            { label: '$D_n =$', expr: 'floor(n!/e + 0.5)', digits: 0 },
            { label: '$n! =$', expr: 'n!', digits: 0 },
            { label: '$P(\\text{nobody gets own hat}) = D_n/n! \\approx$', expr: 'floor(n!/e + 0.5)/n!', digits: 6 },
          ],
          caption: 'The fraction of derangements $D_n / n!$ zig-zags around $1/e$ and is within $0.0001$ of it by $n = 7$. With $10$ guests or $10{,}000$, the chance that nobody gets their own hat is essentially the same: about $36.8\\%$. (For $n \\ge 1$, $D_n$ is $n!/e$ rounded to the nearest integer.)',
        },
        {
          type: 'code',
          title: 'derangements.cpp',
          runnable: true,
          code: `#include <algorithm>
#include <cstdio>
#include <numeric>
#include <vector>

// Count permutations of {0..n-1} with no fixed point by trying them all.
long long bruteForce(int n) {
    std::vector<int> p(n);
    std::iota(p.begin(), p.end(), 0);            // 0, 1, ..., n-1 (sorted)
    long long count = 0;
    do {
        bool fixedPoint = false;
        for (int i = 0; i < n; ++i)
            if (p[i] == i) fixedPoint = true;    // person i got their own hat
        if (!fixedPoint) ++count;
    } while (std::next_permutation(p.begin(), p.end()));
    return count;
}

int main() {
    // Recurrence D(n) = (n - 1) * (D(n-1) + D(n-2)), with D(0) = 1, D(1) = 0.
    long long d[11] = {1, 0};
    double factorial = 1;
    std::printf(" n  brute  formula  D(n)/n!\\n");
    for (int n = 1; n <= 10; ++n) {
        if (n >= 2) d[n] = (n - 1) * (d[n - 1] + d[n - 2]);
        factorial *= n;
        if (n <= 8)
            std::printf("%2d %6lld %8lld  %.6f\\n", n, bruteForce(n), d[n], d[n] / factorial);
        else
            std::printf("%2d      - %8lld  %.6f\\n", n, d[n], d[n] / factorial);
    }
    std::printf("1/e = %.6f\\n", 1 / 2.718281828459045);
}`,
          output: ` n  brute  formula  D(n)/n!
 1      0        0  0.000000
 2      1        1  0.500000
 3      2        2  0.333333
 4      9        9  0.375000
 5     44       44  0.366667
 6    265      265  0.368056
 7   1854     1854  0.367857
 8  14833    14833  0.367882
 9      -   133496  0.367879
10      -  1334961  0.367879
1/e = 0.367879`,
          annotations: [
            { lines: '7-18', text: 'The brute-force referee: all $n!$ permutations via `std::next_permutation`, keeping those with no fixed point. Feasible up to about $n = 11$.' },
            { lines: '21-26', text: 'A recurrence (why it holds: guest $1$ gets some hat $i \\ne 1$ in $n - 1$ ways; then either guest $i$ takes hat $1$, leaving a derangement of $n - 2$, or not, which behaves like a derangement of $n - 1$). The recurrences unit treats such formulas systematically.' },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'numeric',
      prompt: 'Five players draw names for a Secret-Santa gift swap by a uniformly random permutation. In how many of the $5! = 120$ possible draws does **nobody** draw their own name?',
      hint: '$D_5 = 5!\\left(1 - 1 + \\frac{1}{2!} - \\frac{1}{3!} + \\frac{1}{4!} - \\frac{1}{5!}\\right)$.',
      label: '$D_5 =$',
      answer: '44',
      explanation: '$D_5 = \\frac{5!}{0!} - \\frac{5!}{1!} + \\frac{5!}{2!} - \\frac{5!}{3!} + \\frac{5!}{4!} - \\frac{5!}{5!} = 120 - 120 + 60 - 20 + 5 - 1 = 44$. So $44/120 \\approx 36.7\\%$ of draws work on the first try — already close to $1/e$. (The recurrence agrees: $D_5 = 4(D_4 + D_3) = 4(9 + 2) = 44$.)',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'order',
      prompt: 'Arrange the steps of the inclusion–exclusion derivation of $D_n$.',
      lines: [
        'Let $A_i$ be the set of permutations that send $i$ to itself; derangements are the permutations in none of the $A_i$.',
        'Any intersection of $j$ of the sets $A_i$ has $(n - j)!$ elements, and there are $\\binom{n}{j}$ such intersections.',
        'By inclusion–exclusion, $|A_1 \\cup \\cdots \\cup A_n| = \\sum_{j=1}^{n}(-1)^{j+1}\\binom{n}{j}(n-j)!$.',
        'Subtract from $n!$ to get $D_n = \\sum_{j=0}^{n}(-1)^j\\binom{n}{j}(n-j)!$.',
        'Simplify $\\binom{n}{j}(n-j)! = \\frac{n!}{j!}$ to get $D_n = n!\\sum_{j=0}^{n}\\frac{(-1)^j}{j!}$.',
      ],
      explanation: 'Name the bad properties, size their intersections, apply inclusion–exclusion to the union, take the complement, then simplify. This five-step template solves every "none of the bad things happen" problem where the intersections are symmetric.',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'concept',
      title: 'Stars and bars: combinations with repetition',
      blocks: [
        {
          type: 'p',
          text: 'A boss drops $7$ identical gold coins, to be split among $3$ players. Only the **amounts** matter: $(2, 4, 1)$ means player 1 gets $2$, player 2 gets $4$, player 3 gets $1$. How many splits are possible? Equivalently: how many solutions does $x_1 + x_2 + x_3 = 7$ have in nonnegative integers?',
        },
        {
          type: 'figure',
          svg: '<svg viewBox="0 0 470 170" xmlns="http://www.w3.org/2000/svg"><circle cx="56" cy="70" r="15" class="f-orange s-orange" fill-opacity="0.35" stroke-width="1.8"/><text x="56" y="75" text-anchor="middle" font-size="13" class="t-orange">G</text><circle cx="100" cy="70" r="15" class="f-orange s-orange" fill-opacity="0.35" stroke-width="1.8"/><text x="100" y="75" text-anchor="middle" font-size="13" class="t-orange">G</text><line x1="138" y1="38" x2="138" y2="102" stroke="currentColor" stroke-width="4" class="s-purple"/><circle cx="174" cy="70" r="15" class="f-orange s-orange" fill-opacity="0.35" stroke-width="1.8"/><text x="174" y="75" text-anchor="middle" font-size="13" class="t-orange">G</text><circle cx="218" cy="70" r="15" class="f-orange s-orange" fill-opacity="0.35" stroke-width="1.8"/><text x="218" y="75" text-anchor="middle" font-size="13" class="t-orange">G</text><circle cx="262" cy="70" r="15" class="f-orange s-orange" fill-opacity="0.35" stroke-width="1.8"/><text x="262" y="75" text-anchor="middle" font-size="13" class="t-orange">G</text><circle cx="306" cy="70" r="15" class="f-orange s-orange" fill-opacity="0.35" stroke-width="1.8"/><text x="306" y="75" text-anchor="middle" font-size="13" class="t-orange">G</text><line x1="344" y1="38" x2="344" y2="102" stroke="currentColor" stroke-width="4" class="s-purple"/><circle cx="380" cy="70" r="15" class="f-orange s-orange" fill-opacity="0.35" stroke-width="1.8"/><text x="380" y="75" text-anchor="middle" font-size="13" class="t-orange">G</text><text x="88" y="135" text-anchor="middle" font-size="14">player 1: 2</text><text x="250" y="135" text-anchor="middle" font-size="14">player 2: 4</text><text x="410" y="135" text-anchor="middle" font-size="14">player 3: 1</text><text x="235" y="22" text-anchor="middle" font-size="14">7 coins (stars) + 2 dividers (bars) = 9 slots</text><text x="235" y="162" text-anchor="middle" font-size="13" class="t-gray">choose which 2 of the 9 slots hold bars: C(9, 2) = 36 distributions</text></svg>',
          alt: 'A row of nine slots: two gold coins, a purple bar, four gold coins, a purple bar, one gold coin. Labels underneath read player 1: 2, player 2: 4, player 3: 1.',
          caption: 'Write the coins as stars and separate the players\' shares with $3 - 1 = 2$ bars. The split $(2, 4, 1)$ becomes $\\star\\star|\\star\\star\\star\\star|\\star$. A split with an empty share just has two bars side by side, like $\\star\\star\\star||\\star\\star\\star\\star$ for $(3, 0, 4)$.',
          maxWidth: 460,
        },
        {
          type: 'theorem',
          name: 'Stars and bars',
          tex: '\\#\\{(x_1, \\dots, x_n) \\in \\mathbb{N}^n : x_1 + \\cdots + x_n = k\\} = \\binom{n + k - 1}{k} = \\binom{n + k - 1}{n - 1}',
          text: 'This counts: ways to distribute $k$ **identical** objects among $n$ **distinct** recipients; and $k$-[[dm-combination-with-repetition|combinations with repetition]] from $n$ types (multisets of size $k$). Here $\\mathbb{N} = \\{0, 1, 2, \\dots\\}$, so a recipient may get nothing.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why: a bijection with words',
          text: 'Each distribution corresponds to exactly one word made of $k$ stars and $n - 1$ bars (read off the shares between bars), and each such word gives back exactly one distribution. A word of length $n + k - 1$ is determined by **which** $n - 1$ positions hold bars: $\\binom{n+k-1}{n-1}$. For the coins: $\\binom{9}{2} = 36$ splits.',
        },
        {
          type: 'derivation',
          title: 'At least one coin each: 7 coins, 3 players',
          steps: [
            { tex: 'y_i = x_i - 1 \\ge 0', why: 'Hand every player $1$ coin up front; then distribute the rest freely. Substituting $x_i = y_i + 1$ turns "$x_i \\ge 1$" into "$y_i \\ge 0$".' },
            { tex: 'y_1 + y_2 + y_3 = 7 - 3 = 4', why: '$3$ coins are already given out.' },
            { tex: '\\binom{3 + 4 - 1}{3 - 1} = \\binom{6}{2} = 15', why: 'Stars and bars with $k = 4$ stars and $n = 3$ recipients.' },
          ],
          result: 'In general, $k$ identical objects among $n$ recipients with **at least one each**: $\\binom{k-1}{n-1}$ (put bars in $n - 1$ of the $k - 1$ gaps between stars).',
        },
        {
          type: 'p',
          text: 'Same formula, different story: choosing $6$ potions from a shop with $4$ potion types, where you may buy several of the same type and order does not matter, is a multiset of size $6$ from $4$ types — $\\binom{4 + 6 - 1}{6} = \\binom{9}{6} = 84$ shopping baskets.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Identical versus distinct objects',
          text: 'Stars and bars is for **identical** objects (coins, units of XP, potions of a type). If the items are **distinct** (a sword, a shield, a ring), each item independently chooses a recipient: $n^k$ ways by the product rule. Mixing these up is the most common error in distribution problems.',
        },
      ],
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'mcq',
      prompt: '$10$ identical gold coins are split among $4$ players, and **every player must get at least one coin**. How many splits are possible?',
      options: [
        { text: '$\\binom{13}{3} = 286$', why: 'That is the count with no minimum (stars and bars with $k = 10$, $n = 4$). It includes splits where some player gets nothing.' },
        { text: '$\\binom{9}{3} = 84$', correct: true, why: 'Give each player one coin first, then split the remaining $6$ freely: $\\binom{4 + 6 - 1}{3} = \\binom{9}{3} = 84$.' },
        { text: '$4^{10} = 1{,}048{,}576$', why: 'That counts distributions of $10$ **distinct** coins (each chooses a player). The coins are identical; only the amounts matter.' },
        { text: '$\\binom{10}{4} = 210$', why: 'That chooses $4$ of the $10$ coins, which is not a distribution at all. Here we choose positions for $3$ bars among $9$ gaps.' },
      ],
      explanation: 'Substitute $x_i = y_i + 1$: $y_1 + y_2 + y_3 + y_4 = 6$ with $y_i \\ge 0$, so $\\binom{6 + 4 - 1}{4 - 1} = \\binom{9}{3} = 84$. Or directly: place $3$ bars in $3$ of the $9$ gaps between $10$ stars. A brute-force enumeration of all positive solutions confirms $84$.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'truefalse',
      prompt: 'The number of ways to hand out $5$ **different** items (sword, shield, helmet, ring, potion) to $3$ players, with no restriction, is $\\binom{5 + 3 - 1}{3 - 1} = 21$.',
      answer: false,
      explanation: 'Stars and bars counts only *how many* items each player receives, which is all that matters for identical items. With distinct items, *which* items matter: each of the $5$ items independently goes to one of $3$ players, so there are $3^5 = 243$ ways. The $21$ counts only the possible "item-count profiles" like $(2, 2, 1)$.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'Multinomial coefficients: arranging repeated letters',
      blocks: [
        {
          type: 'p',
          text: 'How many distinct strings can be made by rearranging the letters of `MISSISSIPPI`? There are $11$ letters, but swapping two `S`s changes nothing, so $11!$ overcounts.',
        },
        {
          type: 'derivation',
          title: 'Method 1: choose positions for each letter',
          steps: [
            { tex: '\\binom{11}{4}', why: 'Choose which $4$ of the $11$ positions hold the `S`s (unordered: the `S`s are identical).' },
            { tex: '\\binom{7}{4}', why: 'Choose which $4$ of the remaining $7$ positions hold the `I`s.' },
            { tex: '\\binom{3}{2}\\binom{1}{1}', why: 'Then $2$ of the remaining $3$ positions for the `P`s, and the last position for `M`.' },
            { tex: '330 \\cdot 35 \\cdot 3 \\cdot 1 = 34{,}650', why: 'Product rule.' },
          ],
          result: '$34{,}650$ distinct strings.',
        },
        {
          type: 'derivation',
          title: 'Method 2: the division rule',
          steps: [
            { tex: '11!', why: 'Pretend the letters are all different: $\\text{M I}_1 \\text{S}_1 \\text{S}_2 \\dots$ — then there are $11!$ arrangements.' },
            { tex: '\\frac{11!}{4!\\,4!\\,2!\\,1!}', why: 'Each real string is produced by exactly $4!$ relabelings of the `S`s, $4!$ of the `I`s, $2!$ of the `P`s and $1!$ of the `M` — the same number for every string, so divide.' },
            { tex: '= \\frac{39{,}916{,}800}{24 \\cdot 24 \\cdot 2} = 34{,}650', why: 'Same answer, as it must be.' },
          ],
        },
        {
          type: 'theorem',
          name: 'Multinomial coefficient',
          tex: '\\binom{n}{k_1, k_2, \\dots, k_m} = \\frac{n!}{k_1!\\,k_2!\\cdots k_m!}, \\qquad k_1 + \\cdots + k_m = n',
          text: 'The [[dm-multinomial-coefficient|multinomial coefficient]] counts arrangements of $n$ objects of which $k_1$ are of type $1$, …, $k_m$ of type $m$; equivalently, ways to split $n$ **distinct** objects into labeled groups of sizes $k_1, \\dots, k_m$. With $m = 2$ it is just $\\binom{n}{k_1}$.',
        },
        {
          type: 'p',
          text: 'The group-splitting reading matters in games: dealing $9$ distinct items into a $2$-slot belt, a $3$-slot bag and a $4$-slot chest (slots within each container unordered) can be done in $\\frac{9!}{2!\\,3!\\,4!} = 1260$ ways. And the **multinomial theorem** generalizes the binomial theorem: the coefficient of $x^{k_1}y^{k_2}z^{k_3}$ in $(x + y + z)^n$ is $\\binom{n}{k_1, k_2, k_3}$, by the same "which factor supplies which variable" argument.',
        },
      ],
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'numeric',
      prompt: 'How many distinct strings can be formed by rearranging all the letters of `BANANA`?',
      hint: '$6$ letters: three `A`s, two `N`s, one `B`.',
      label: 'strings $=$',
      answer: '60',
      explanation: '$\\binom{6}{3, 2, 1} = \\frac{6!}{3!\\,2!\\,1!} = \\frac{720}{12} = 60$. By positions: choose $3$ of $6$ positions for the `A`s ($20$), $2$ of the remaining $3$ for the `N`s ($3$), and the last for `B`: $20 \\cdot 3 = 60$. Listing all $720$ orderings and removing duplicates by computer also leaves $60$.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'concept',
      title: 'Summary: which counting formula?',
      blocks: [
        {
          type: 'p',
          text: 'You now have the complete toolkit of this unit. Most problems reduce to **selecting $k$ items from $n$ kinds** (or distributing objects into boxes), and two questions pick the formula.',
        },
        {
          type: 'figure',
          svg: '<svg viewBox="0 0 500 310" xmlns="http://www.w3.org/2000/svg"><line x1="224.0" y1="53.0" x2="146.0" y2="107.0" stroke="currentColor" stroke-width="1.6"/><path d="M146.0,107.0 L150.5,99.2 L154.9,105.5 Z" fill="currentColor"/><line x1="276.0" y1="53.0" x2="354.0" y2="107.0" stroke="currentColor" stroke-width="1.6"/><path d="M354.0,107.0 L345.1,105.5 L349.5,99.2 Z" fill="currentColor"/><line x1="109.7" y1="143.0" x2="74.9" y2="204.0" stroke="currentColor" stroke-width="1.6"/><path d="M74.9,204.0 L75.6,195.0 L82.2,198.8 Z" fill="currentColor"/><line x1="131.1" y1="143.0" x2="168.9" y2="204.0" stroke="currentColor" stroke-width="1.6"/><path d="M168.9,204.0 L161.4,199.1 L167.9,195.1 Z" fill="currentColor"/><line x1="369.7" y1="143.0" x2="334.9" y2="204.0" stroke="currentColor" stroke-width="1.6"/><path d="M334.9,204.0 L335.6,195.0 L342.2,198.8 Z" fill="currentColor"/><line x1="391.7" y1="143.0" x2="431.2" y2="204.0" stroke="currentColor" stroke-width="1.6"/><path d="M431.2,204.0 L423.5,199.2 L430.0,195.1 Z" fill="currentColor"/><rect x="145" y="17" width="210" height="36" rx="5" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="250" y="40" text-anchor="middle" font-size="14">Does order matter?</text><rect x="25" y="107" width="190" height="36" rx="5" fill="none" stroke="currentColor" stroke-width="1.6" class="s-blue"/><text x="120" y="130" text-anchor="middle" font-size="14" class="t-blue">Repetition allowed?</text><rect x="285" y="107" width="190" height="36" rx="5" fill="none" stroke="currentColor" stroke-width="1.6" class="s-green"/><text x="380" y="130" text-anchor="middle" font-size="14" class="t-green">Repetition allowed?</text><rect x="10" y="204" width="100" height="52" rx="5" fill="none" stroke="currentColor" stroke-width="1.6" class="s-blue"/><text x="60" y="235" text-anchor="middle" font-size="16" class="t-blue">nᵏ</text><rect x="130" y="204" width="110" height="52" rx="5" fill="none" stroke="currentColor" stroke-width="1.6" class="s-blue"/><text x="185" y="235" text-anchor="middle" font-size="16" class="t-blue">P(n, k)</text><rect x="260" y="204" width="120" height="52" rx="5" fill="none" stroke="currentColor" stroke-width="1.6" class="s-green"/><text x="320" y="235" text-anchor="middle" font-size="15" class="t-green">C(n+k−1, k)</text><rect x="403" y="204" width="90" height="52" rx="5" fill="none" stroke="currentColor" stroke-width="1.6" class="s-green"/><text x="448" y="235" text-anchor="middle" font-size="16" class="t-green">C(n, k)</text><text x="178.2" y="74.6" text-anchor="middle" font-size="13">yes</text><text x="321.8" y="74.6" text-anchor="middle" font-size="13">no</text><text x="80.7" y="174.0" text-anchor="middle" font-size="13">yes</text><text x="161.5" y="173.7" text-anchor="middle" font-size="13">no</text><text x="340.7" y="174.0" text-anchor="middle" font-size="13">yes</text><text x="422.8" y="173.5" text-anchor="middle" font-size="13">no</text><text x="60" y="274" text-anchor="middle" font-size="12" class="t-gray">strings</text><text x="185" y="274" text-anchor="middle" font-size="12" class="t-gray">arrangements</text><text x="320" y="274" text-anchor="middle" font-size="12" class="t-gray">stars and bars</text><text x="448" y="274" text-anchor="middle" font-size="12" class="t-gray">subsets</text><text x="250" y="300" text-anchor="middle" font-size="12" class="t-gray">select k items from n types / distinct objects</text></svg>',
          alt: 'A decision tree. Does order matter? If yes: repetition allowed? yes gives n to the k (strings), no gives P(n, k) (arrangements). If order does not matter: repetition allowed? yes gives C(n+k−1, k) (stars and bars), no gives C(n, k) (subsets).',
          caption: 'Two yes/no questions select one of the four basic formulas.',
          maxWidth: 480,
        },
        {
          type: 'table',
          headers: ['Situation', 'Count', 'Example'],
          rows: [
            ['Ordered, repetition allowed', '$n^k$', '4-digit PIN: $10^4$'],
            ['Ordered, no repetition', '$P(n,k) = \\frac{n!}{(n-k)!}$', 'Podium of 3 from 8: $336$'],
            ['Unordered, no repetition', '$\\binom{n}{k}$', '5-card hand: $\\binom{52}{5}$'],
            ['Unordered, repetition allowed', '$\\binom{n+k-1}{k}$', '6 potions from 4 types: $84$'],
            ['$k$ distinct objects into $n$ boxes', '$n^k$', '5 items to 3 players: $243$'],
            ['$k$ identical objects into $n$ boxes', '$\\binom{n+k-1}{n-1}$', '7 coins to 3 players: $36$'],
            ['Arrange $n$ objects with repeated types', '$\\frac{n!}{k_1!\\cdots k_m!}$', 'MISSISSIPPI: $34{,}650$'],
            ['"None of the bad properties"', 'inclusion–exclusion', 'Derangements, onto functions'],
          ],
        },
        {
          type: 'callout',
          variant: 'exam',
          title: 'On an exam',
          text: 'Write one sentence stating **what a single outcome looks like** ("an outcome is a multiset of 6 potion types") before writing any formula. Then add any constraints ("at least one each" → substitute; "at least one bad thing" → complement or inclusion–exclusion). Graders give partial credit for a correct model even with an arithmetic slip, and none for a formula applied to the wrong model.',
        },
      ],
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'fill',
      prompt: 'Match each problem to its count.',
      template: 'Ways to pick $3$ pizza toppings from $8$, doubles allowed (order irrelevant): ___ . Ways to award gold, silver and bronze among $8$ racers: ___ . Ways to pick $3$ different toppings from $8$: ___ .',
      blanks: [{ answers: ['$\\binom{10}{3}$'] }, { answers: ['$P(8,3)$'] }, { answers: ['$\\binom{8}{3}$'] }],
      wordBank: ['$\\binom{10}{3}$', '$P(8,3)$', '$\\binom{8}{3}$', '$8^3$', '$3^8$', '$\\binom{11}{3}$'],
      explanation: 'Toppings with doubles: unordered with repetition, $\\binom{8 + 3 - 1}{3} = \\binom{10}{3} = 120$. Medals: ordered, no repetition, $P(8, 3) = 336$. Different toppings: unordered, no repetition, $\\binom{8}{3} = 56$. The unused $8^3 = 512$ would be ordered **with** repetition (e.g. a 3-scoop cone where the order of scoops matters and flavours may repeat).',
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'mcq',
      prompt: 'Which formula counts the number of solutions of $x_1 + x_2 + x_3 + x_4 = 12$ with each $x_i$ an integer and $x_i \\ge 2$?',
      options: [
        { text: '$\\binom{15}{3}$', why: 'That ignores the lower bound: it counts solutions with $x_i \\ge 0$.' },
        { text: '$\\binom{11}{3}$', why: 'That is the "at least $1$ each" count, $\\binom{12 - 1}{4 - 1}$. Here each variable needs at least $2$.' },
        { text: '$\\binom{7}{3}$', correct: true, why: 'Set $y_i = x_i - 2 \\ge 0$: then $y_1 + \\cdots + y_4 = 12 - 8 = 4$, and stars and bars gives $\\binom{4 + 4 - 1}{3} = \\binom{7}{3} = 35$.' },
        { text: '$\\binom{12}{4}$', why: 'This chooses $4$ of $12$ things without repetition — a different model. A solution is a distribution of $12$ identical units into $4$ boxes.' },
      ],
      explanation: 'Lower bounds are handled by "pre-paying": give each variable its minimum, then distribute what is left with no restriction. $12 - 4 \\cdot 2 = 4$ units remain for $4$ boxes, so $\\binom{4 + 4 - 1}{4 - 1} = \\binom{7}{3} = 35$ (a brute-force count agrees). Upper bounds ($x_i \\le 5$, say) are harder: they need inclusion–exclusion on the "too many" events.',
    },
  ],
  takeaways: [
    'Inclusion–exclusion: add singles, subtract pairs, add triples, … ; it counts every element of the union once because $\\sum_{j \\ge 1}(-1)^{j+1}\\binom{r}{j} = 1$.',
    '"None of the bad properties" $= N - |A_1 \\cup \\cdots \\cup A_n|$; it works best when intersections are symmetric and easy to count.',
    'Derangements: $D_n = n!\\sum_{j=0}^{n}\\frac{(-1)^j}{j!}$, and $D_n/n! \\to 1/e \\approx 0.368$ remarkably fast.',
    'Stars and bars: $k$ identical objects into $n$ boxes in $\\binom{n+k-1}{n-1}$ ways; with at least one per box, $\\binom{k-1}{n-1}$. Distinct objects: $n^k$.',
    'Multinomial coefficients $\\frac{n!}{k_1!\\cdots k_m!}$ count arrangements with repeated types (MISSISSIPPI: $34{,}650$).',
    'Before any formula, describe one outcome: order? repetition? identical or distinct objects?',
  ],
  reading: [
    {
      title: 'Levin — Discrete Mathematics: An Open Introduction (Sections 1.5–1.6)',
      url: 'https://discrete.openmathbooks.org/dmoi3.html',
      source: 'book',
      note: 'Stars and bars and advanced counting with inclusion–exclusion, including derangements, with many exercises.',
    },
    {
      title: 'Wikipedia — Inclusion–exclusion principle',
      url: 'https://en.wikipedia.org/wiki/Inclusion%E2%80%93exclusion_principle',
      source: 'wikipedia',
      note: 'The general formula, its proof, and applications such as counting onto functions and derangements.',
    },
    {
      title: 'Wikipedia — Stars and bars (combinatorics)',
      url: 'https://en.wikipedia.org/wiki/Stars_and_bars_(combinatorics)',
      source: 'wikipedia',
      note: 'Both stars-and-bars theorems with pictures, and how lower and upper bounds change the count.',
    },
  ],
};
