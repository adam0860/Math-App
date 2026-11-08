import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'dm-strong-induction',
  title: 'Strong Induction and Well-Ordering',
  summary: 'When the next case depends on cases further back: prime factorizations, postage stamps, Fibonacci numbers, recursively defined structures, and the "smallest counterexample" trick.',
  minutes: 19,
  objectives: [
    'State strong induction and explain why it is no more powerful than ordinary induction',
    'Prove that every integer $n \\ge 2$ is a product of primes, and solve postage-stamp problems with several base cases',
    'Use the well-ordering principle to give "smallest counterexample" proofs',
    'Read and write recursive definitions such as $n!$ and the Fibonacci numbers, and prove facts about them',
    'Use structural induction on recursively defined sets such as full binary trees',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'When one step back is not enough',
      blocks: [
        {
          type: 'p',
          text: 'Try to prove "every integer $n \\ge 2$ is a product of primes" by ordinary induction. If $k + 1$ is prime, fine. If not, $k + 1 = ab$ with smaller factors, say $36 = 4 \\cdot 9$. Knowing that $35$ (the case $k$) is a product of primes tells you nothing about $4$ or $9$. You need the claim for **all** smaller numbers, not just the previous one.',
        },
        {
          type: 'theorem',
          name: 'Strong induction',
          tex: '\\Big(P(b) \\;\\land\\; \\forall k \\ge b\\, \\big( P(b) \\land P(b+1) \\land \\dots \\land P(k) \\to P(k+1) \\big)\\Big) \\;\\to\\; \\forall n \\ge b\\; P(n)',
          text: 'Prove the base case(s); then, for arbitrary $k \\ge b$, assume $P(j)$ for **every** $j$ with $b \\le j \\le k$, and prove $P(k+1)$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why strong induction is not actually stronger',
          text: 'Let $Q(n)$ be "$P(b), P(b+1), \\dots, P(n)$ are all true". Ordinary induction on $Q$ is exactly strong induction on $P$: $Q(b)$ is the base case, and $Q(k) \\to Q(k+1)$ needs only $P(k+1)$ from all the earlier $P$s. So anything strong induction proves, ordinary induction proves too. The name describes a stronger *hypothesis*, which makes the step easier to write, not a stronger principle.',
        },
        {
          type: 'callout',
          variant: 'analogy',
          title: 'The domino picture, upgraded',
          text: 'In ordinary induction, each domino is knocked over by the one just before it. In strong induction, a domino may be knocked over by **any** combination of earlier dominoes. It still falls, because by the time we reach it, all the earlier ones have fallen.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'truefalse',
      prompt: 'There are statements that can be proved by strong induction but cannot be proved by ordinary induction.',
      answer: false,
      explanation: 'The two principles are equivalent. Any strong-induction proof of $P(n)$ becomes an ordinary-induction proof of $Q(n)$ = "$P(b) \\land \\dots \\land P(n)$", and $Q(n)$ implies $P(n)$. Strong induction is a convenience: use it whenever the step naturally reaches back more than one case.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Every integer $n \\ge 2$ is a product of primes',
      blocks: [
        {
          type: 'p',
          text: 'Recall that a prime is an integer $p > 1$ whose only positive divisors are $1$ and $p$; an integer $n > 1$ that is not prime is **composite**, meaning $n = ab$ with $1 < a, b < n$. A single prime counts as a product of one prime.',
        },
        {
          type: 'derivation',
          title: 'Theorem: every integer $n \\ge 2$ is a product of one or more primes.',
          steps: [
            { tex: '\\textbf{Base } (n = 2): \\; 2 \\text{ is prime.}', why: 'A product of a single prime.' },
            { tex: '\\textbf{Strong IH: } \\text{every } j \\text{ with } 2 \\le j \\le k \\text{ is a product of primes.}', why: 'Let $k \\ge 2$ be arbitrary and assume the claim for all integers from $2$ up to $k$.' },
            { tex: '\\text{Case 1: } k + 1 \\text{ is prime.}', why: 'Then it is a product of one prime. Done.' },
            { tex: '\\text{Case 2: } k + 1 = ab, \\quad 2 \\le a, b \\le k', why: 'Composite means a factorization into two factors that are each at least $2$ and so each at most $\\frac{k+1}{2} \\le k$.' },
            { tex: 'a = p_1 \\cdots p_r, \\quad b = q_1 \\cdots q_s', why: 'The strong hypothesis applies to $a$ and $b$, because both lie between $2$ and $k$. Ordinary induction would only give us $k$.' },
            { tex: 'k + 1 = p_1 \\cdots p_r \\, q_1 \\cdots q_s \\quad \\blacksquare', why: 'Multiply the two factorizations.' },
          ],
          result: 'This is the existence half of the Fundamental Theorem of Arithmetic (Unit 4 adds uniqueness). It also fills in the fact Euclid\'s proof needed: every $n > 1$ has a prime divisor.',
        },
        {
          type: 'figure',
          svg: '<svg viewBox="0 0 520 245" xmlns="http://www.w3.org/2000/svg"><line x1="242.8" y1="40.2" x2="164.6" y2="86.4" stroke="currentColor" stroke-width="1.6"/><line x1="277.2" y1="40.2" x2="355.4" y2="86.4" stroke="currentColor" stroke-width="1.6"/><line x1="139.0" y1="108.0" x2="106.0" y2="147.0" stroke="currentColor" stroke-width="1.6"/><line x1="161.0" y1="108.0" x2="194.0" y2="147.0" stroke="currentColor" stroke-width="1.6"/><line x1="196.6" y1="174.8" x2="178.4" y2="207.2" stroke="currentColor" stroke-width="1.6"/><line x1="213.4" y1="174.8" x2="231.6" y2="207.2" stroke="currentColor" stroke-width="1.6"/><line x1="361.1" y1="109.5" x2="338.9" y2="145.5" stroke="currentColor" stroke-width="1.6"/><line x1="381.0" y1="108.0" x2="414.0" y2="147.0" stroke="currentColor" stroke-width="1.6"/><line x1="321.6" y1="174.8" x2="303.4" y2="207.2" stroke="currentColor" stroke-width="1.6"/><line x1="338.4" y1="174.8" x2="356.6" y2="207.2" stroke="currentColor" stroke-width="1.6"/><circle cx="260" cy="30" r="20" fill="none" stroke="currentColor" stroke-width="1.6" class="s-blue"/><text x="260" y="35" text-anchor="middle" font-size="13" class="t-blue">360</text><circle cx="150" cy="95" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="150" y="100" text-anchor="middle" font-size="13">18</text><circle cx="370" cy="95" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="370" y="100" text-anchor="middle" font-size="13">20</text><circle cx="95" cy="160" r="17" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.6" class="s-green f-green"/><text x="95" y="165" text-anchor="middle" font-size="13" class="t-green">2</text><circle cx="205" cy="160" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="205" y="165" text-anchor="middle" font-size="13">9</text><circle cx="170" cy="222" r="17" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.6" class="s-green f-green"/><text x="170" y="227" text-anchor="middle" font-size="13" class="t-green">3</text><circle cx="240" cy="222" r="17" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.6" class="s-green f-green"/><text x="240" y="227" text-anchor="middle" font-size="13" class="t-green">3</text><circle cx="330" cy="160" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="330" y="165" text-anchor="middle" font-size="13">4</text><circle cx="425" cy="160" r="17" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.6" class="s-green f-green"/><text x="425" y="165" text-anchor="middle" font-size="13" class="t-green">5</text><circle cx="295" cy="222" r="17" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.6" class="s-green f-green"/><text x="295" y="227" text-anchor="middle" font-size="13" class="t-green">2</text><circle cx="365" cy="222" r="17" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.6" class="s-green f-green"/><text x="365" y="227" text-anchor="middle" font-size="13" class="t-green">2</text><text x="20" y="30" text-anchor="start" font-size="12" class="t-gray">composite: split</text><text x="20" y="46" text-anchor="start" font-size="12" class="t-gray">into smaller factors</text><text x="470" y="222" text-anchor="middle" font-size="12" class="t-green">prime: stop</text></svg>',
          alt: 'Factor tree: 360 splits into 18 and 20; 18 splits into 2 and 9, 9 into 3 and 3; 20 splits into 4 and 5, 4 into 2 and 2. The leaves 2, 3, 3, 2, 2, 5 are prime and highlighted.',
          caption: 'The proof is a recursive algorithm: split a composite into smaller factors, recurse, stop at primes. $360 = 2^3 \\cdot 3^2 \\cdot 5$. Any split works, which is why the hypothesis must cover *every* smaller number.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'numeric',
      prompt: 'Write $360$ as a product of primes. How many prime factors does it have, **counted with repetition** (so $12 = 2 \\cdot 2 \\cdot 3$ has $3$)?',
      label: 'count $=$',
      answer: '6',
      hint: 'Use the factor tree: $360 = 18 \\cdot 20$.',
      explanation: '$360 = 18 \\cdot 20 = (2 \\cdot 3 \\cdot 3)(2 \\cdot 2 \\cdot 5) = 2^3 \\cdot 3^2 \\cdot 5$, which has $3 + 2 + 1 = 6$ prime factors. Splitting differently ($360 = 10 \\cdot 36$, say) gives the same multiset of primes, a fact proved in Unit 4.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Postage stamps: several base cases',
      blocks: [
        {
          type: 'p',
          text: 'A game shop sells only $4$-coin and $5$-coin tokens. Which totals can you pay exactly? Small amounts are spotty ($11$ is impossible), but from $12$ on everything works. Strong induction proves it, with a twist: the step reaches back **four** cases, so it needs four base cases.',
        },
        {
          type: 'table',
          headers: ['Amount', '$12$', '$13$', '$14$', '$15$'],
          rows: [['Tokens', '$4 + 4 + 4$', '$4 + 4 + 5$', '$4 + 5 + 5$', '$5 + 5 + 5$']],
          caption: 'The four base cases, checked by hand.',
        },
        {
          type: 'derivation',
          title: 'Theorem: every amount $n \\ge 12$ is a sum of $4$s and $5$s.',
          steps: [
            { tex: '\\textbf{Base: } n = 12, 13, 14, 15', why: 'Shown in the table.' },
            { tex: '\\textbf{Strong IH: } \\text{every } j \\text{ with } 12 \\le j \\le k \\text{ works, for some } k \\ge 15', why: 'The step only needs to handle $k + 1 \\ge 16$, since $12$ to $15$ are already done.' },
            { tex: '12 \\le (k + 1) - 4 \\le k', why: 'Since $k + 1 \\ge 16$, subtracting $4$ leaves at least $12$, so the hypothesis applies to $k - 3$.' },
            { tex: 'k + 1 = \\big((k + 1) - 4\\big) + 4', why: 'Pay $k - 3$ the known way, then add one $4$-token. $\\blacksquare$' },
          ],
          result: 'The step reaches back $4$, so four consecutive base cases are needed: with only $n = 12$, the step for $13$ would need $9$, which is not covered.',
        },
        {
          type: 'code',
          title: 'strong.cpp',
          runnable: true,
          code: `#include <cstdio>
#include <vector>

// Strong induction as recursion: factor n >= 2 into primes.
void factor(int n, std::vector<int>& out) {
    for (int d = 2; d * d <= n; ++d)
        if (n % d == 0) {                 // n = d * (n / d), both smaller than n
            factor(d, out);               // "inductive hypothesis" on a smaller value
            factor(n / d, out);
            return;
        }
    out.push_back(n);                     // no divisor: n is prime (a base case)
}

// Postage with 4- and 5-cent stamps: returns the number of 4-cent stamps, or -1.
int fours(int n) {
    if (n == 12) return 3;                // 4+4+4
    if (n == 13) return 2;                // 4+4+5
    if (n == 14) return 1;                // 4+5+5
    if (n == 15) return 0;                // 5+5+5
    if (n < 12) {                         // small amounts: brute force
        for (int a = 0; 4 * a <= n; ++a)
            if ((n - 4 * a) % 5 == 0) return a;
        return -1;
    }
    return fours(n - 4) + 1;              // strong IH on n - 4, then add a 4-cent stamp
}

int main() {
    std::vector<int> f;
    factor(360, f);
    std::printf("360 =");
    for (int p : f) std::printf(" %d", p);
    std::printf("\\n");

    std::printf("impossible amounts:");
    for (int n = 1; n <= 30; ++n)
        if (fours(n) < 0) std::printf(" %d", n);
    std::printf("\\n");
    int a = fours(27);
    std::printf("27 = %d x 4 + %d x 5\\n", a, (27 - 4 * a) / 5);
}`,
          output: `360 = 2 2 2 3 3 5
impossible amounts: 1 2 3 6 7 11
27 = 3 x 4 + 3 x 5`,
          annotations: [
            { lines: '7-10', text: 'The recursive calls are on $d$ and $n / d$, which can be **any** smaller numbers, not just $n - 1$: strong induction, as code.' },
            { lines: 12, text: 'A prime has no divisor up to $\\sqrt{n}$; it is a factorization by itself.' },
            { lines: '17-20', text: 'Four base cases, one per remainder when dividing by $4$.' },
            { lines: 26, text: 'The inductive step: reduce to $n - 4$, which is at least $12$ when $n \\ge 16$.' },
          ],
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Same idea in games',
          text: 'Making exact change from coin denominations, or checking which damage totals a set of weapon hits can produce, is the same problem. The recursion above re-solves subproblems; storing results in a table instead (dynamic programming, Unit 8) makes it fast for large amounts.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'numeric',
      prompt: 'Now the shop sells only $3$-coin and $5$-coin tokens. What is the **largest** amount that **cannot** be paid exactly?',
      label: 'amount $=$',
      answer: '7',
      hint: 'List small amounts: which of $1, 2, \\dots, 10$ can be made? Once three consecutive amounts work, adding $3$s covers everything after them.',
      explanation: 'Possible: $3, 5, 6, 8 = 3 + 5, 9 = 3 + 3 + 3, 10 = 5 + 5$. Impossible: $1, 2, 4, 7$. Since $8, 9, 10$ all work and the step adds a $3$, strong induction with these three base cases shows every $n \\ge 8$ works. So the largest impossible amount is $7$. (For two coprime coin values $a$, $b$ it is always $ab - a - b$: here $15 - 3 - 5 = 7$, and for $4$ and $5$ it is $11$.)',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'order',
      prompt: 'Order the lines of a strong induction proof that every amount $n \\ge 8$ can be paid with $3$- and $5$-coin tokens.',
      lines: [
        'Base cases: $8 = 3 + 5$, $9 = 3 + 3 + 3$, $10 = 5 + 5$.',
        'Let $k \\ge 10$ and assume every amount $j$ with $8 \\le j \\le k$ can be paid.',
        'Since $k + 1 \\ge 11$, the amount $(k + 1) - 3$ is between $8$ and $k$.',
        'By the hypothesis, $(k + 1) - 3$ can be paid; adding one $3$-token pays $k + 1$.',
        'By strong induction, every $n \\ge 8$ can be paid.',
      ],
      distractors: ['Base case: $8 = 3 + 5$ (one base case is enough).'],
      explanation: 'The step subtracts $3$, so it reaches back three amounts and needs three base cases ($8, 9, 10$). Then for $k + 1 \\ge 11$ the smaller amount $k - 2 \\ge 8$ is covered by the hypothesis. With only the base case $8$, the step for $9$ would need $6$, which is outside the range covered.',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'concept',
      title: 'The well-ordering principle',
      blocks: [
        {
          type: 'theorem',
          name: 'Well-ordering principle',
          text: 'Every **nonempty** set of natural numbers has a **least element**.',
        },
        {
          type: 'p',
          text: 'It sounds obvious, and for $\\mathbb{N}$ it is taken as an axiom. But it is special: $\\mathbb{Z}$ has no least element, and neither do the positive rationals ($\\frac{1}{2}, \\frac{1}{3}, \\frac{1}{4}, \\dots$ keep shrinking). The [[dm-well-ordering-principle|well-ordering principle]] is equivalent to induction and to strong induction; each can be proved from the others.',
        },
        {
          type: 'p',
          text: 'It powers a style of proof by contradiction called **smallest counterexample** (or "minimal criminal"): suppose the theorem fails; then the set of counterexamples is nonempty, so it has a smallest member $m$. Show that $m$ leads to an even smaller counterexample, which is impossible.',
        },
        {
          type: 'derivation',
          title: 'Prime factorization again, by well-ordering',
          steps: [
            { tex: 'C = \\{ n \\ge 2 : n \\text{ is not a product of primes} \\}', why: 'The set of counterexamples. Suppose, for contradiction, that $C$ is nonempty.' },
            { tex: 'm = \\min C', why: 'Well-ordering gives a least counterexample $m$.' },
            { tex: 'm \\text{ is not prime} \\implies m = ab, \\; 2 \\le a, b < m', why: 'A prime would be a product of one prime, so $m$ is composite.' },
            { tex: 'a, b \\notin C', why: 'They are smaller than $m$, the least counterexample, so they are products of primes.' },
            { tex: 'm = ab \\text{ is a product of primes: contradiction.} \\quad \\blacksquare', why: 'Multiply the two factorizations. So $C$ is empty.' },
          ],
          result: 'Same mathematics as the strong induction proof, organised as a contradiction. Use whichever reads more naturally.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Why algorithms terminate',
          text: 'Well-ordering is the reason a loop that strictly decreases a natural-number quantity must stop: the values cannot decrease forever, since the set of values visited has a least element. Euclid\'s gcd algorithm, binary search and many game-AI planners are proved to terminate this way, with a non-negative integer "variant" (remaining range size, remaining moves) that drops every iteration.',
        },
      ],
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'mcq',
      prompt: 'Which of these sets has **no** least element?',
      options: [
        { text: '$\\{ n \\in \\mathbb{N} : n^2 > 50 \\}$', why: 'A nonempty set of natural numbers always has a least element; here it is $8$ ($7^2 = 49 \\le 50 < 64$).' },
        { text: '$\\{ n \\in \\mathbb{Z} : n \\ge -5 \\}$', why: 'This set of integers is bounded below and its least element is $-5$.' },
        { text: 'The positive rational numbers', correct: true, why: 'For any positive rational $r$, the number $r/2$ is a smaller positive rational, so no element is least.' },
        { text: 'The set of positive even integers', why: 'Its least element is $2$; it is a nonempty subset of $\\mathbb{N}$.' },
      ],
      explanation: 'Well-ordering holds for every nonempty subset of $\\mathbb{N}$ (and for any set of integers bounded below), but not for the positive rationals or reals: halving always gives something smaller. That is exactly why induction works on integers but has no direct analogue on $\\mathbb{Q}$ or $\\mathbb{R}$.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'concept',
      title: 'Recursive definitions: factorial and Fibonacci',
      blocks: [
        {
          type: 'p',
          text: 'A [[dm-recursive-definition|recursive definition]] gives base values and a rule that builds each new value from earlier ones, like a [[recursive-formula]] for a [[sequence]]. Induction is the natural way to prove things about such objects, because the proof can mirror the definition.',
        },
        {
          type: 'table',
          headers: ['Object', 'Base case(s)', 'Recursive rule'],
          rows: [
            ['[[factorial|Factorial]] $n!$', '$0! = 1$', '$n! = n \\cdot (n-1)!$ for $n \\ge 1$'],
            ['Powers $2^n$', '$2^0 = 1$', '$2^n = 2 \\cdot 2^{n-1}$'],
            ['Fibonacci $F_n$', '$F_0 = 0$, $F_1 = 1$', '$F_n = F_{n-1} + F_{n-2}$ for $n \\ge 2$'],
          ],
          caption: 'Fibonacci looks back **two** steps, so it needs two base cases, and proofs about it usually need strong induction.',
        },
        {
          type: 'derivation',
          title: 'Theorem: $F_n < 2^n$ for all $n \\ge 0$.',
          steps: [
            { tex: '\\textbf{Base: } F_0 = 0 < 1 = 2^0, \\quad F_1 = 1 < 2 = 2^1', why: 'Two base cases, because the recursive rule only applies from $n = 2$.' },
            { tex: '\\textbf{Strong IH: } F_j < 2^j \\text{ for all } 0 \\le j \\le k, \\text{ some } k \\ge 1', why: 'Then $k + 1 \\ge 2$, so the recursion applies to $F_{k+1}$.' },
            { tex: 'F_{k+1} = F_k + F_{k-1} < 2^k + 2^{k-1}', why: 'Apply the hypothesis to **both** earlier terms; $k - 1 \\ge 0$ is in range.' },
            { tex: '< 2^k + 2^k = 2^{k+1} \\quad \\blacksquare', why: 'Since $2^{k-1} < 2^k$.' },
          ],
          result: 'In fact $F_n$ grows like $\\varphi^n$ with $\\varphi = \\frac{1 + \\sqrt{5}}{2} \\approx 1.618$, the golden ratio: $F_n$ is the integer nearest to $\\frac{\\varphi^n}{\\sqrt{5}}$. Unit 8 derives that formula.',
        },
        {
          type: 'graph',
          x: [0, 12.5],
          y: [0, 160],
          yStep: 20,
          functions: [
            { expr: '((1 + sqrt(5))/2)^x/sqrt(5)', label: '$\\varphi^n / \\sqrt{5}$', color: 'blue', dashed: true },
            { expr: '2^x', label: '$2^n$ (the bound we proved)', color: 'gray' },
          ],
          points: [
            { x: 0, y: 0, color: 'red' }, { x: 1, y: 1, color: 'red' }, { x: 2, y: 1, color: 'red' },
            { x: 3, y: 2, color: 'red' }, { x: 4, y: 3, color: 'red' }, { x: 5, y: 5, color: 'red' },
            { x: 6, y: 8, color: 'red' }, { x: 7, y: 13, color: 'red' }, { x: 8, y: 21, color: 'red' },
            { x: 9, y: 34, color: 'red' }, { x: 10, y: 55, color: 'red', label: 'F₁₀ = 55' }, { x: 11, y: 89, color: 'red' },
            { x: 12, y: 144, color: 'red', label: 'F₁₂ = 144' },
          ],
          caption: 'Red dots are $F_0, \\dots, F_{12}$. They hug $\\frac{\\varphi^n}{\\sqrt{5}}$ almost exactly and stay well under $2^n$: exponential growth with a smaller base.',
        },
      ],
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'numeric',
      prompt: 'With $F_0 = 0$, $F_1 = 1$ and $F_n = F_{n-1} + F_{n-2}$, compute $F_{10}$.',
      label: '$F_{10} =$',
      answer: '55',
      hint: 'Build the list: $0, 1, 1, 2, 3, 5, \\dots$',
      explanation: 'The sequence runs $F_0, \\dots, F_{10} = 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55$. Each term is the sum of the two before it, so you only ever need to remember the last two values: that is how an efficient loop computes Fibonacci numbers (a naive recursive function recomputes the same values exponentially many times).',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'error',
      prompt: 'Find the first incorrect line in this "proof" that every Fibonacci number is even.',
      lines: [
        'Claim: $F_n$ is even for every $n \\ge 0$.',
        'Base case: $F_0 = 0$ is even.',
        'Strong hypothesis: for some $k \\ge 0$, the numbers $F_0, F_1, \\dots, F_k$ are all even.',
        'Then $F_{k+1} = F_k + F_{k-1}$ is a sum of two even numbers, so it is even.',
        'By strong induction, every $F_n$ is even.',
      ],
      errorLines: [4],
      explanation: 'Line 4 uses $F_{k+1} = F_k + F_{k-1}$ for every $k \\ge 0$, but for $k = 0$ that would be $F_1 = F_0 + F_{-1}$, and $F_{-1}$ is not defined: the recurrence only holds from $n = 2$. So $F_1$ must be a second base case, and $F_1 = 1$ is odd, so the claim is false. When the step looks back two terms, you need two base cases.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'concept',
      title: 'Structural induction: proofs about recursive structures',
      blocks: [
        {
          type: 'p',
          text: 'Recursion defines not just sequences but **sets**: strings, lists, expressions, trees. For example, strings over an alphabet: the empty string is a string, and if $w$ is a string and $a$ a symbol, then $wa$ is a string. Proofs about such sets use [[dm-structural-induction|structural induction]]: prove the property for the base elements, then show each construction rule preserves it.',
        },
        {
          type: 'definition',
          term: 'Full binary tree (recursive definition)',
          text: '**Base:** a single node is a full binary tree. **Rule:** if $T_1$ and $T_2$ are full binary trees, then a new root whose left subtree is $T_1$ and right subtree is $T_2$ is a full binary tree. Nothing else is. (So every node has either $0$ or $2$ children.)',
        },
        {
          type: 'figure',
          svg: '<svg viewBox="0 0 520 215" xmlns="http://www.w3.org/2000/svg"><line x1="390.6" y1="48.2" x2="360.4" y2="81.8" stroke="currentColor" stroke-width="1.6"/><line x1="405.4" y1="48.2" x2="435.6" y2="81.8" stroke="currentColor" stroke-width="1.6"/><line x1="347.3" y1="99.4" x2="328.7" y2="130.6" stroke="currentColor" stroke-width="1.6"/><line x1="358.7" y1="99.4" x2="377.3" y2="130.6" stroke="currentColor" stroke-width="1.6"/><line x1="377.7" y1="149.6" x2="363.3" y2="175.4" stroke="currentColor" stroke-width="1.6"/><line x1="388.3" y1="149.6" x2="402.7" y2="175.4" stroke="currentColor" stroke-width="1.6"/><circle cx="55" cy="95" r="11" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.6" class="s-green f-green"/><circle cx="215" cy="60" r="11" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.6" class="s-blue f-blue"/><circle cx="398" cy="40" r="11" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.6" class="s-blue f-blue"/><circle cx="353" cy="90" r="11" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.6" class="s-blue f-blue"/><circle cx="443" cy="90" r="11" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.6" class="s-green f-green"/><circle cx="323" cy="140" r="11" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.6" class="s-green f-green"/><circle cx="383" cy="140" r="11" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.6" class="s-blue f-blue"/><circle cx="358" cy="185" r="11" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.6" class="s-green f-green"/><circle cx="408" cy="185" r="11" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.6" class="s-green f-green"/><text x="55" y="20" text-anchor="middle" font-size="13">Base rule</text><text x="55" y="135" text-anchor="middle" font-size="12" class="t-gray">one node</text><text x="55" y="152" text-anchor="middle" font-size="12" class="t-gray">1 leaf, 0 internal</text><text x="215" y="20" text-anchor="middle" font-size="13">Recursive rule</text><text x="215" y="175" text-anchor="middle" font-size="12" class="t-gray">new root + two full</text><text x="215" y="192" text-anchor="middle" font-size="12" class="t-gray">binary trees T₁, T₂</text><text x="398" y="15" text-anchor="middle" font-size="13">Example</text><text x="462" y="150" text-anchor="start" font-size="12" class="t-green">4 leaves</text><text x="462" y="168" text-anchor="start" font-size="12" class="t-blue">3 internal</text><text x="175" y="140" text-anchor="middle" font-size="13">T₁</text><text x="255" y="140" text-anchor="middle" font-size="13">T₂</text><path d="M175 98 L150 150 L200 150 Z" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M255 98 L230 150 L280 150 Z" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M125 10 L125 205" stroke="currentColor" class="s-gray" stroke-width="0.8"/><path d="M310 10 L310 205" stroke="currentColor" class="s-gray" stroke-width="0.8"/><path d="M207 68 L175 98 M223 68 L255 98" stroke="currentColor" stroke-width="1.6" fill="none"/></svg>',
          alt: 'Three panels. Base rule: a single node, one leaf and zero internal nodes. Recursive rule: a new root joined to two subtrees T1 and T2. Example: a full binary tree with four leaves and three internal nodes.',
          caption: 'Every full binary tree is built by these two rules. In each example, leaves $=$ internal nodes $+ 1$.',
        },
        {
          type: 'derivation',
          title: 'Theorem: in every full binary tree, leaves $=$ internal nodes $+ 1$.',
          steps: [
            { tex: '\\textbf{Base: } L = 1, \\; I = 0 \\implies L = I + 1', why: 'A single node is a leaf and there are no internal nodes.' },
            { tex: '\\textbf{Step: } T \\text{ built from } T_1, T_2 \\text{ with } L_i = I_i + 1', why: 'Structural hypothesis: the property holds for the parts the rule combines.' },
            { tex: 'L(T) = L_1 + L_2, \\quad I(T) = I_1 + I_2 + 1', why: 'The new root is internal; it adds no leaves; all other nodes keep their status.' },
            { tex: 'L(T) = (I_1 + 1) + (I_2 + 1) = (I_1 + I_2 + 1) + 1 = I(T) + 1 \\quad \\blacksquare', why: 'Substitute the hypothesis and regroup.' },
          ],
          result: 'No integer $n$ appears: the induction runs over how the tree was built. (It is secretly strong induction on the number of nodes, since $T_1$ and $T_2$ are smaller than $T$.)',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Structural induction is how you prove recursive functions on trees',
          text: 'A function like `int countLeaves(Node* t)` with cases "leaf: return 1" and "internal: return countLeaves(left) + countLeaves(right)" is proved correct exactly like the theorem above: base case for a leaf, inductive step assuming the calls on the subtrees are correct. Scene graphs, behavior trees and BSPs in game engines are all recursive structures; Unit 10 studies trees in depth.',
        },
      ],
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'fill',
      prompt: 'A full binary tree has $10$ internal nodes. Complete the statements.',
      template: 'It has ___ leaves, because a structural induction proof shows that leaves always equal internal nodes plus one. In that proof, the single-node tree is the ___.',
      blanks: [{ answers: ['$11$'] }, { answers: ['base case'] }],
      wordBank: ['$11$', '$10$', '$20$', 'base case', 'inductive step', 'counterexample'],
      explanation: 'By the theorem, $L = I + 1 = 10 + 1 = 11$, for a total of $21$ nodes. The single node is the base case of the recursive definition, so it is the base case of the structural induction; the "new root over $T_1$ and $T_2$" rule is the inductive step.',
    },
  ],
  takeaways: [
    'Strong induction assumes $P(b), \\dots, P(k)$ to prove $P(k+1)$; it is equivalent to ordinary induction but more convenient when cases reach further back.',
    'If the step reaches back $m$ cases (subtract $4$, use $F_{k-1}$), prove $m$ consecutive base cases.',
    'Every integer $n \\ge 2$ is a product of primes; every amount $n \\ge 12$ is a sum of $4$s and $5$s.',
    'Well-ordering: every nonempty subset of $\\mathbb{N}$ has a least element. It gives "smallest counterexample" proofs and guarantees that strictly decreasing natural-number loops terminate.',
    'Recursive definitions (factorial, Fibonacci) are proved about by induction that mirrors the definition; $F_n < 2^n$ and $F_n \\approx \\varphi^n/\\sqrt{5}$.',
    'Structural induction proves properties of recursively built sets (strings, trees): base elements first, then each construction rule.',
  ],
  reading: [
    {
      title: 'Levin — Discrete Mathematics: An Open Introduction (Section 2.5, Induction)',
      url: 'https://discrete.openmathbooks.org/dmoi3.html',
      source: 'book',
      note: 'Includes strong induction, with the postage stamp and prime factorization examples.',
    },
    {
      title: 'MIT OCW 6.042J — Mathematics for Computer Science',
      url: 'https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-fall-2010/',
      source: 'other',
      note: 'Covers strong induction, the well-ordering principle and structural induction on recursive data types.',
    },
    {
      title: 'Wikipedia — Well-ordering principle',
      url: 'https://en.wikipedia.org/wiki/Well-ordering_principle',
      source: 'wikipedia',
      note: 'The principle, its equivalence with induction, and example proofs.',
    },
    {
      title: 'Wikipedia — Structural induction',
      url: 'https://en.wikipedia.org/wiki/Structural_induction',
      source: 'wikipedia',
      note: 'Induction over lists, trees and other recursively defined structures, as used in programming language theory.',
    },
  ],
};
