import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'dm-contradiction-cases',
  title: 'Proof by Contradiction and by Cases',
  summary: 'Assume the opposite and watch it collapse; split a problem into cases and conquer each one. Plus existence proofs and the power of a single counterexample.',
  minutes: 19,
  objectives: [
    'Structure a proof by contradiction and explain why it is valid',
    'Prove that $\\sqrt{2}$ is irrational and that there are infinitely many primes',
    'Write a proof by cases with exhaustive cases, such as $|xy| = |x||y|$ and "$n^2 + n$ is even"',
    'Distinguish constructive and nonconstructive existence proofs, and prove uniqueness',
    'Disprove a universal claim with a counterexample, and search for one in code',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Proof by contradiction',
      blocks: [
        {
          type: 'p',
          text: 'Some statements give you nothing to start from. "There is no largest integer." "$\\sqrt{2}$ is not a fraction." What would a direct proof even assume? The trick is to assume the statement is **false** and show that this assumption leads to nonsense.',
        },
        {
          type: 'definition',
          term: 'Proof by contradiction',
          text: 'To prove $P$: assume $\\neg P$, and derive a contradiction, some statement $R \\land \\neg R$ that can never be true. Conclude that $\\neg P$ is false, so $P$ is true. This is a [[dm-proof-by-contradiction|proof by contradiction]].',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why it is valid',
          text: 'The argument shows $\\neg P \\to (R \\land \\neg R)$. A conditional with a false conclusion is true only when its hypothesis is false (modus tollens). So $\\neg P$ is false, which means $P$ is true. In logic terms, $(\\neg P \\to \\text{F}) \\equiv P$ is a tautology.',
        },
        {
          type: 'derivation',
          title: 'Warm-up: there is no largest integer',
          steps: [
            { tex: '\\text{Suppose, for contradiction, that } N \\text{ is the largest integer.}', why: 'Assume the negation of the claim, and announce it clearly so the reader knows the method.' },
            { tex: 'N + 1 \\in \\mathbb{Z}', why: 'Integers are closed under addition.' },
            { tex: 'N + 1 > N', why: 'Adding $1$ increases any number.' },
            { tex: '\\text{So } N \\text{ is not the largest integer, a contradiction.} \\quad \\blacksquare', why: '$N$ is the largest and $N$ is not the largest: $R \\land \\neg R$. The assumption was false.' },
          ],
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Contradiction versus contrapositive',
          text: 'To prove $p \\to q$ by contradiction, you assume $p$ **and** $\\neg q$ and derive any contradiction. A contrapositive proof assumes only $\\neg q$ and must reach the specific target $\\neg p$. Every contrapositive proof can be rewritten as a contradiction proof, but when the contrapositive works, it is usually cleaner: it has a clear goal.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'mcq',
      prompt: 'You want to prove by contradiction that "there is no smallest positive rational number". How should the proof begin?',
      options: [
        { text: 'Suppose there is no smallest positive rational number.', why: 'That is the statement itself. A contradiction proof assumes the **negation** of what it wants to prove.' },
        { text: 'Suppose $r$ is a positive rational number. Then $r/2$ is smaller.', why: 'This is the key computation, but as a first line it skips the assumption that makes it a contradiction proof.' },
        { text: 'Suppose, for contradiction, that $r$ is the smallest positive rational number.', correct: true, why: 'This is the negation of the claim, named so it can be used. Next: $r/2$ is rational, positive and smaller than $r$, a contradiction.' },
        { text: 'Suppose every positive rational number is the smallest.', why: 'The negation of "there is no smallest" is "there exists a smallest", not "every one is the smallest".' },
      ],
      explanation: 'The claim is $\\neg \\exists r$ (r is the smallest positive rational). Its negation is $\\exists r$ (r is the smallest), so the proof names such an $r$. Then $\\tfrac{r}{2}$ is rational (a ratio of integers), positive, and less than $r$, contradicting minimality.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'The classic: $\\sqrt{2}$ is irrational',
      blocks: [
        {
          type: 'p',
          text: 'An [[irrational-number|irrational number]] is a real number that is not rational. "Not rational" is a negative statement, so contradiction is the natural tool: assume $\\sqrt{2}$ **is** a fraction and squeeze that fraction until it breaks.',
        },
        {
          type: 'p',
          text: 'We use two facts. Every fraction can be reduced to **lowest terms**, where numerator and denominator have no common factor greater than $1$ (divide out common factors until none remain). And from the last lesson: if $n^2$ is even, then $n$ is even.',
        },
        {
          type: 'derivation',
          title: 'Theorem: $\\sqrt{2}$ is irrational.',
          steps: [
            { tex: '\\text{Suppose } \\sqrt{2} = \\tfrac{a}{b}, \\; a, b \\in \\mathbb{Z}, \\; b \\ne 0, \\text{ in lowest terms.}', why: 'Assume the negation (that $\\sqrt{2}$ is rational) and choose the representation in lowest terms.' },
            { tex: '2 = \\frac{a^2}{b^2} \\implies a^2 = 2b^2', why: 'Square both sides and multiply by $b^2$.' },
            { tex: 'a^2 \\text{ is even} \\implies a \\text{ is even}', why: '$a^2 = 2 \\cdot b^2$ fits the definition of even; then the lemma from the last lesson applies.' },
            { tex: 'a = 2c \\implies 4c^2 = 2b^2 \\implies b^2 = 2c^2', why: 'Unpack "$a$ is even", substitute into $a^2 = 2b^2$, divide by $2$.' },
            { tex: 'b^2 \\text{ is even} \\implies b \\text{ is even}', why: 'Same reasoning as for $a$.' },
            { tex: '2 \\mid a \\text{ and } 2 \\mid b: \\text{ contradiction with lowest terms.} \\quad \\blacksquare', why: 'A common factor of $2$ contradicts the choice of lowest terms, so $\\sqrt{2}$ is not rational.' },
          ],
          result: 'The assumption "$\\sqrt{2}$ is rational" forced both "$a/b$ is in lowest terms" and "$a$ and $b$ share the factor $2$".',
        },
        {
          type: 'callout',
          variant: 'history',
          text: 'This proof is about 2,500 years old and is traditionally credited to the Pythagoreans, who believed every length was a ratio of whole numbers. In code the fact shows up every day: `std::sqrt(2.0)` is only an approximation, because no finite binary fraction (or any fraction) equals $\\sqrt{2}$ exactly.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'error',
      prompt: 'A student copies the $\\sqrt{2}$ argument to "prove" that $\\sqrt{4}$ is irrational, which is false since $\\sqrt{4} = 2$. Tap the first line that is wrong.',
      lines: [
        'Suppose $\\sqrt{4} = \\tfrac{a}{b}$ with integers $a, b$, $b \\ne 0$, in lowest terms.',
        'Then $a^2 = 4b^2$, so $a^2$ is even, hence $a$ is even.',
        'Write $a = 2c$. Then $4c^2 = 4b^2$, so $b^2 = c^2$.',
        'Therefore $b^2$ is even, so $b$ is even.',
        'Both $a$ and $b$ are even, contradicting lowest terms. So $\\sqrt{4}$ is irrational.',
      ],
      errorLines: [4],
      explanation: 'Line 4 claims $b^2$ is even, but line 3 only gives $b^2 = c^2$, which says nothing about parity. In the $\\sqrt{2}$ proof the factor $2$ survived ($b^2 = 2c^2$); here the $4$ cancels completely. Indeed $\\sqrt{4} = \\tfrac{2}{1}$ in lowest terms, with $b = 1$ odd. When a proof template "proves" something false, find the step that silently used a special feature of the original.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Euclid: there are infinitely many primes',
      blocks: [
        {
          type: 'p',
          text: 'A **prime** is an integer $p > 1$ whose only positive divisors are $1$ and $p$. The primes are the building blocks of the integers ($2, 3, 5, 7, 11, \\dots$), and the security of RSA (Unit 4) depends on them. Do they ever run out? Euclid answered around 300 BCE.',
        },
        {
          type: 'p',
          text: 'We use one fact proved in lesson 4 of this unit with strong induction: **every integer $n > 1$ has at least one prime divisor.**',
        },
        {
          type: 'derivation',
          title: 'Theorem: there are infinitely many primes.',
          steps: [
            { tex: '\\text{Suppose the primes are finite: } p_1, p_2, \\dots, p_n.', why: 'Assume the negation: a complete finite list of all primes.' },
            { tex: 'N = p_1 p_2 \\cdots p_n + 1', why: 'Build a number from the list. This is the creative step.' },
            { tex: 'N > 1 \\implies \\text{some prime } p_i \\text{ on the list divides } N', why: '$N$ has a prime divisor, and every prime is on the list.' },
            { tex: 'p_i \\mid p_1 p_2 \\cdots p_n', why: '$p_i$ is one of the factors of the product.' },
            { tex: 'p_i \\mid N - p_1 p_2 \\cdots p_n = 1', why: 'If $d$ divides two integers, it divides their difference: $N = p_i s$ and $p_1 \\cdots p_n = p_i t$ give $1 = p_i(s - t)$.' },
            { tex: 'p_i \\mid 1 \\text{ is impossible since } p_i \\ge 2. \\quad \\blacksquare', why: 'The only positive divisor of $1$ is $1$. Contradiction, so no finite list contains all primes.' },
          ],
          result: 'Dividing $N$ by any prime on the list leaves remainder $1$, so $N$\'s prime factors are all missing from the list.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: '$N$ itself need not be prime',
          text: 'A very common misreading is "$p_1 \\cdots p_n + 1$ is always prime". It is not: the proof only says $N$ has a prime factor **not on the list**. The program below shows the first failure.',
        },
        {
          type: 'code',
          title: 'euclid.cpp',
          runnable: true,
          code: `#include <cstdio>

long long smallestFactor(long long n) {           // smallest divisor > 1
    for (long long d = 2; d * d <= n; ++d)
        if (n % d == 0) return d;
    return n;                                     // no divisor up to sqrt(n): n is prime
}

int main() {
    const long long primes[] = {2, 3, 5, 7, 11, 13};
    long long product = 1;
    for (long long p : primes) {
        product *= p;
        long long N = product + 1;
        long long f = smallestFactor(N);
        if (f == N) std::printf("product up to %2lld, plus 1 = %5lld  (prime)\\n", p, N);
        else        std::printf("product up to %2lld, plus 1 = %5lld  = %lld x %lld\\n", p, N, f, N / f);
    }
}`,
          output: `product up to  2, plus 1 =     3  (prime)
product up to  3, plus 1 =     7  (prime)
product up to  5, plus 1 =    31  (prime)
product up to  7, plus 1 =   211  (prime)
product up to 11, plus 1 =  2311  (prime)
product up to 13, plus 1 = 30031  = 59 x 509`,
          annotations: [
            { lines: '3-7', text: 'Trial division only needs $d \\le \\sqrt{n}$: if $n = de$ with both factors above $\\sqrt{n}$, then $de > n$. (That fact is itself a little proof by contradiction.)' },
            { lines: '13-14', text: 'The Euclid numbers $2 \\cdot 3 \\cdots p + 1$.' },
            { lines: 17, text: '$30031 = 59 \\cdot 509$: not prime, but both factors are primes missing from $\\{2, 3, 5, 7, 11, 13\\}$, exactly as the proof predicts.' },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'numeric',
      prompt: 'Let $N = 2 \\cdot 3 \\cdot 5 \\cdot 7 \\cdot 11 \\cdot 13 + 1 = 30031$. What is the remainder when $N$ is divided by $7$?',
      label: 'remainder $=$',
      answer: '1',
      hint: 'You do not need to divide $30031$ by hand: $7$ divides the product.',
      explanation: '$7$ divides $2 \\cdot 3 \\cdot 5 \\cdot 7 \\cdot 11 \\cdot 13$, so that product is a multiple of $7$, and adding $1$ leaves remainder $1$. (Check: $30031 = 7 \\cdot 4290 + 1$.) The same holds for every prime on the list, which is precisely why none of them divides $N$.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'Proof by cases',
      blocks: [
        {
          type: 'p',
          text: 'Sometimes one argument cannot handle every input, but a few arguments can, each covering part of the domain. A [[dm-proof-by-cases|proof by cases]] splits the hypothesis into cases $C_1, \\dots, C_m$ that together cover **every** possibility, and proves the conclusion in each case.',
        },
        {
          type: 'theorem',
          name: 'Why it is valid',
          tex: '\\big((C_1 \\lor C_2) \\land (C_1 \\to q) \\land (C_2 \\to q)\\big) \\to q',
          text: 'This is a tautology: whichever case actually holds, its conditional delivers $q$. The cases must be **exhaustive**; they may overlap.',
        },
        {
          type: 'derivation',
          title: 'Theorem: for every integer $n$, $n^2 + n$ is even.',
          steps: [
            { tex: '\\text{Case 1: } n = 2k \\text{ is even.}', why: 'Every integer is even or odd, so two cases cover everything.' },
            { tex: 'n^2 + n = 4k^2 + 2k = 2(2k^2 + k)', why: 'Substitute and factor out $2$; $2k^2 + k$ is an integer. Even.' },
            { tex: '\\text{Case 2: } n = 2k + 1 \\text{ is odd.}', why: 'The remaining case.' },
            { tex: 'n^2 + n = (4k^2 + 4k + 1) + (2k + 1) = 2(2k^2 + 3k + 1)', why: 'Expand, collect, factor out $2$. Even again.' },
            { tex: '\\text{In both cases } n^2 + n \\text{ is even.} \\quad \\blacksquare', why: 'The cases were exhaustive, so the claim holds for every integer.' },
          ],
          result: 'A slicker proof: $n^2 + n = n(n + 1)$ is a product of two consecutive integers, one of which is even. Looking for such a factorization often removes the need for cases.',
        },
        {
          type: 'p',
          text: 'Absolute value is defined by cases, $|x| = x$ if $x \\ge 0$ and $|x| = -x$ if $x < 0$, so proofs about it naturally split into cases on signs.',
        },
        {
          type: 'figure',
          svg: '<svg viewBox="0 0 520 250" xmlns="http://www.w3.org/2000/svg"><line x1="232.1" y1="45.0" x2="156.0" y2="86.0" stroke="currentColor" stroke-width="1.6"/><path d="M156.0,86.0 L161.4,78.8 L165.0,85.5 Z" fill="currentColor"/><line x1="287.9" y1="45.0" x2="364.0" y2="86.0" stroke="currentColor" stroke-width="1.6"/><path d="M364.0,86.0 L355.0,85.5 L358.6,78.8 Z" fill="currentColor"/><line x1="117.9" y1="114.0" x2="77.1" y2="161.0" stroke="currentColor" stroke-width="1.6"/><path d="M77.1,161.0 L79.6,152.3 L85.4,157.4 Z" fill="currentColor"/><line x1="142.1" y1="114.0" x2="182.9" y2="161.0" stroke="currentColor" stroke-width="1.6"/><path d="M182.9,161.0 L174.6,157.4 L180.4,152.3 Z" fill="currentColor"/><line x1="377.9" y1="114.0" x2="337.1" y2="161.0" stroke="currentColor" stroke-width="1.6"/><path d="M337.1,161.0 L339.6,152.3 L345.4,157.4 Z" fill="currentColor"/><line x1="402.1" y1="114.0" x2="442.9" y2="161.0" stroke="currentColor" stroke-width="1.6"/><path d="M442.9,161.0 L434.6,157.4 L440.4,152.3 Z" fill="currentColor"/><rect x="205" y="15" width="110" height="30" rx="5" fill="none" stroke="currentColor" stroke-width="1.6" class="s-blue"/><text x="260" y="35" text-anchor="middle" font-size="13" class="t-blue">x, y real</text><rect x="90" y="86" width="80" height="28" rx="5" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="130" y="105" text-anchor="middle" font-size="13">x ≥ 0</text><rect x="350" y="86" width="80" height="28" rx="5" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="390" y="105" text-anchor="middle" font-size="13">x &lt; 0</text><rect x="27" y="161" width="76" height="28" rx="5" fill="none" stroke="currentColor" stroke-width="1.6" class="s-green"/><text x="65" y="180" text-anchor="middle" font-size="13" class="t-green">y ≥ 0</text><rect x="157" y="161" width="76" height="28" rx="5" fill="none" stroke="currentColor" stroke-width="1.6" class="s-green"/><text x="195" y="180" text-anchor="middle" font-size="13" class="t-green">y &lt; 0</text><rect x="287" y="161" width="76" height="28" rx="5" fill="none" stroke="currentColor" stroke-width="1.6" class="s-green"/><text x="325" y="180" text-anchor="middle" font-size="13" class="t-green">y ≥ 0</text><rect x="417" y="161" width="76" height="28" rx="5" fill="none" stroke="currentColor" stroke-width="1.6" class="s-green"/><text x="455" y="180" text-anchor="middle" font-size="13" class="t-green">y &lt; 0</text><text x="65" y="212" text-anchor="middle" font-size="12">|xy| = xy</text><text x="65" y="230" text-anchor="middle" font-size="12" class="t-gray">|x||y| = x · y</text><text x="195" y="212" text-anchor="middle" font-size="12">|xy| = −xy</text><text x="195" y="230" text-anchor="middle" font-size="12" class="t-gray">|x||y| = x(−y)</text><text x="325" y="212" text-anchor="middle" font-size="12">|xy| = −xy</text><text x="325" y="230" text-anchor="middle" font-size="12" class="t-gray">|x||y| = (−x)y</text><text x="455" y="212" text-anchor="middle" font-size="12">|xy| = xy</text><text x="455" y="230" text-anchor="middle" font-size="12" class="t-gray">|x||y| = (−x)(−y)</text></svg>',
          alt: 'Case tree: x, y real splits into x at least 0 and x less than 0, each splits into y at least 0 and y less than 0. In each of the four leaves, the absolute value of xy and the product of absolute values give the same expression.',
          caption: 'Theorem: $|xy| = |x||y|$ for all real $x, y$. Two sign choices for each variable give four exhaustive cases; in each leaf both sides reduce to the same expression. (When $xy = 0$, both $xy$ and $-xy$ equal $0$, so the boundary is safe.)',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: '"Without loss of generality"',
          text: 'When cases are symmetric, writers say "without loss of generality (WLOG), assume $x \\ge y$" and prove only one. That is honest only if the other case really is the same argument with letters swapped. Here, the case $x < 0, y \\ge 0$ is the mirror image of $x \\ge 0, y < 0$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'expr',
      prompt: 'In Case 2 above ($n = 2k + 1$), $n^2 + n$ is written as $2m$. Give $m$ in terms of $k$.',
      label: '$m =$',
      answer: '2k^2 + 3k + 1',
      answerTex: '2k^2 + 3k + 1',
      variables: ['k'],
      hint: 'Expand $(2k + 1)^2 + (2k + 1)$ and divide by $2$.',
      explanation: '$(2k + 1)^2 + (2k + 1) = 4k^2 + 4k + 1 + 2k + 1 = 4k^2 + 6k + 2 = 2(2k^2 + 3k + 1)$, so $m = 2k^2 + 3k + 1$, an integer. Check with $n = 3$ ($k = 1$): $9 + 3 = 12 = 2 \\cdot 6$ and $2 + 3 + 1 = 6$. ✓',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'truefalse',
      prompt: 'In a proof by cases, the cases must not overlap: no input may belong to two cases.',
      answer: false,
      explanation: 'The requirement is that the cases are **exhaustive** (every input is in at least one), not that they are disjoint. Overlap just means some inputs are proved twice, which is harmless: cases $x \\ge 0$ and $x \\le 0$ both contain $x = 0$ and still give a valid proof. Missing a case, on the other hand, breaks the proof.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'concept',
      title: 'Existence and uniqueness proofs',
      blocks: [
        {
          type: 'p',
          text: 'To prove $\\exists x\\, P(x)$ you need a witness. An [[dm-existence-proof|existence proof]] comes in two flavors.',
        },
        {
          type: 'list',
          items: [
            '**Constructive:** exhibit the witness and check it. "Some positive integer is a sum of two cubes in two different ways": $1729 = 1^3 + 12^3 = 9^3 + 10^3$. Done.',
            '**Nonconstructive:** show a witness must exist without saying which. Example below.',
          ],
        },
        {
          type: 'derivation',
          title: 'There exist irrational $a, b$ with $a^b$ rational (nonconstructive)',
          steps: [
            { tex: '\\text{Consider } x = \\sqrt{2}^{\\sqrt{2}}. \\text{ It is either rational or irrational.}', why: 'A proof by cases, with two exhaustive cases.' },
            { tex: '\\text{Case 1: } x \\text{ rational. Take } a = b = \\sqrt{2}.', why: 'Both are irrational (proved above) and $a^b = x$ is rational.' },
            { tex: '\\text{Case 2: } x \\text{ irrational. Take } a = x, \\; b = \\sqrt{2}.', why: 'Now both $a$ and $b$ are irrational.' },
            { tex: 'a^b = \\big(\\sqrt{2}^{\\sqrt{2}}\\big)^{\\sqrt{2}} = \\sqrt{2}^{\\,2} = 2', why: 'Power of a power: $(c^u)^v = c^{uv}$, and $\\sqrt{2} \\cdot \\sqrt{2} = 2$.' },
          ],
          result: 'Either way a pair exists, yet the proof does not tell us which case holds. (It is in fact Case 2, by a much harder theorem.)',
        },
        {
          type: 'p',
          text: '**Uniqueness**, written $\\exists! x\\, P(x)$, means exactly one $x$ works. Prove it in two parts: *existence* (some $x$ works) and *uniqueness* (if $x$ and $y$ both work, then $x = y$).',
        },
        {
          type: 'derivation',
          title: 'For real $a \\ne 0$ and $b$, the equation $ax + b = 0$ has a unique solution',
          steps: [
            { tex: '\\text{Existence: } x = -\\tfrac{b}{a} \\implies a\\left(-\\tfrac{b}{a}\\right) + b = -b + b = 0', why: 'Constructive: exhibit the solution and check it. $a \\ne 0$ makes the division legal.' },
            { tex: '\\text{Uniqueness: suppose } ax + b = 0 \\text{ and } ay + b = 0.', why: 'Take two arbitrary solutions.' },
            { tex: 'ax + b = ay + b \\implies ax = ay \\implies x = y', why: 'Subtract $b$, then divide by $a \\ne 0$. Any two solutions coincide. $\\blacksquare$' },
          ],
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Constructive proofs are algorithms',
          text: 'A constructive existence proof tells you *how to find* the witness, so it is really an algorithm: Euclid\'s proof even yields a procedure to find a new prime (factor $N$). Programmers usually want constructive proofs. A nonconstructive proof that a winning strategy exists in a game, like the strategy-stealing argument for Hex, may give no hint how to play it.',
        },
      ],
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'mcq',
      prompt: 'Which of these is a **constructive** proof that there is an integer $n > 1$ such that $n^2 + n + 41$ is not prime?',
      options: [
        { text: 'If every value were prime, a polynomial would produce only primes, which is impossible for non-constant polynomials.', why: 'This argues that a counterexample must exist (using a deeper theorem) but does not name one: nonconstructive.' },
        { text: 'Take $n = 40$: $40^2 + 40 + 41 = 1681 = 41 \\cdot 41$.', correct: true, why: 'It names a witness and verifies it. That is exactly a constructive existence proof.' },
        { text: 'We checked $n = 2, 3, \\dots, 39$ and all values were prime, so eventually one must fail.', why: 'Checking values that work proves nothing about values that fail; this is not a proof at all.' },
      ],
      explanation: 'A constructive proof of $\\exists n\\, P(n)$ exhibits a specific $n$ and checks $P(n)$. Here $n = 40$ gives $1600 + 40 + 41 = 1681 = 41^2$. Note that this witness is also a **counterexample** to the universal claim "for all $n$, $n^2 + n + 41$ is prime": disproving a $\\forall$ is the same as proving an $\\exists$.',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'concept',
      title: 'Counterexamples: one is enough',
      blocks: [
        {
          type: 'p',
          text: 'To show a universal claim $\\forall x\\, P(x)$ is **false**, you do not need a proof of anything general. By quantifier negation, $\\neg \\forall x\\, P(x) \\equiv \\exists x\\, \\neg P(x)$: a single [[dm-counterexample|counterexample]] settles it. For a claim $\\forall x\\, (P(x) \\to Q(x))$, the counterexample must satisfy $P$ and fail $Q$.',
        },
        {
          type: 'table',
          headers: ['Plausible claim', 'Counterexample'],
          rows: [
            ['Every odd integer $n > 1$ is prime.', '$9 = 3 \\cdot 3$'],
            ['$n^2 + n + 41$ is prime for every $n \\in \\mathbb{N}$.', '$n = 40$: $1681 = 41^2$'],
            ['If $p$ is prime, then $2^p - 1$ is prime.', '$p = 11$: $2047 = 23 \\cdot 89$'],
            ['If $a \\mid bc$, then $a \\mid b$ or $a \\mid c$.', '$a = 4$, $b = c = 2$: $4 \\mid 4$, but $4 \\nmid 2$'],
            ['For all reals, $\\sqrt{x^2} = x$.', '$x = -3$: $\\sqrt{9} = 3 \\ne -3$ (true identity: $\\sqrt{x^2} = |x|$)'],
          ],
        },
        {
          type: 'code',
          title: 'counterexample.cpp',
          runnable: true,
          code: `#include <cstdio>

bool isPrime(long long n) {
    if (n < 2) return false;
    for (long long d = 2; d * d <= n; ++d)
        if (n % d == 0) return false;
    return true;
}

int main() {
    // Claim: n*n + n + 41 is prime for every n >= 0.  Search for a counterexample.
    for (long long n = 0; n < 100; ++n) {
        long long v = n * n + n + 41;
        if (!isPrime(v)) {
            std::printf("counterexample: n = %lld gives %lld = 41 x %lld\\n", n, v, v / 41);
            break;
        }
    }
    // Claim: if p is prime then 2^p - 1 is prime.
    for (long long p = 2; p < 20; ++p) {
        if (!isPrime(p)) continue;
        long long m = (1LL << p) - 1;
        if (!isPrime(m)) { std::printf("counterexample: p = %lld gives 2^p - 1 = %lld\\n", p, m); break; }
    }
}`,
          output: `counterexample: n = 40 gives 1681 = 41 x 41
counterexample: p = 11 gives 2^p - 1 = 2047`,
          annotations: [
            { lines: '12-18', text: 'A search for $\\exists n\\, \\neg P(n)$. If it finds one, the universal claim is **disproved**. If it finds none, nothing is proved.' },
            { lines: 22, text: '`1LL << p` is $2^p$ as a 64-bit integer: shifting left by $p$ bits multiplies by $2^p$.' },
          ],
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the asymmetry between proving and disproving',
          text: 'A computer search can **disprove** a universal claim by finding one bad case, but it can never prove one over an infinite domain. That asymmetry is why mathematicians and testers alike value counterexamples, and why a proof is the only way to be sure. Property-based testing tools (QuickCheck, RapidCheck) automate exactly this counterexample search on your functions.',
        },
      ],
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'numeric',
      prompt: 'The claim "$n^2 - n + 41$ is prime for every positive integer $n$" is false. What is the **smallest** positive integer $n$ that is a counterexample?',
      label: '$n =$',
      answer: '41',
      hint: 'Look for an $n$ that makes every term divisible by $41$.',
      explanation: 'At $n = 41$: $41^2 - 41 + 41 = 41^2 = 1681$, which is not prime. For $n = 1, \\dots, 40$ the values are $n^2 - n + 41 = (n - 1)^2 + (n - 1) + 41$, the same as Euler\'s famous $m^2 + m + 41$ with $m = 0, \\dots, 39$, all prime. So $41$ is the first counterexample. Forty successes in a row proved nothing.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'truefalse',
      prompt: 'Since $2^2 - 1 = 3$, $2^3 - 1 = 7$, $2^5 - 1 = 31$ and $2^7 - 1 = 127$ are all prime, we have proved that $2^p - 1$ is prime for every prime $p$.',
      answer: false,
      explanation: 'Four examples cannot prove a statement about infinitely many primes, and here the statement is actually false: $p = 11$ gives $2^{11} - 1 = 2047 = 23 \\cdot 89$. Primes of the form $2^p - 1$ (Mersenne primes) exist, but they are rare, and the largest known primes are of this form.',
    },
  ],
  takeaways: [
    'Proof by contradiction: assume $\\neg P$, derive something impossible ($R \\land \\neg R$), conclude $P$. Natural for negative claims like "irrational" or "no largest".',
    '$\\sqrt{2}$ is irrational: lowest terms plus "$a^2$ even implies $a$ even" forces a common factor $2$.',
    'There are infinitely many primes: $p_1 \\cdots p_n + 1$ leaves remainder $1$ on division by each listed prime, though it need not be prime itself.',
    'Proof by cases needs exhaustive cases (overlap is fine); parity and sign are the most common splits.',
    'Existence proofs are constructive (show the witness) or nonconstructive; uniqueness means any two solutions are equal.',
    'One counterexample disproves a universal claim; no number of examples proves one.',
  ],
  reading: [
    {
      title: 'Levin — Discrete Mathematics: An Open Introduction (Section 3.2, Proofs)',
      url: 'https://discrete.openmathbooks.org/dmoi3.html',
      source: 'book',
      note: 'Proof by contradiction and proof by cases, including the irrationality of $\\sqrt{2}$.',
    },
    {
      title: 'Wikipedia — Euclid\'s theorem',
      url: 'https://en.wikipedia.org/wiki/Euclid%27s_theorem',
      source: 'wikipedia',
      note: 'Euclid\'s original proof and several modern variations of the infinitude of primes.',
    },
    {
      title: 'Wikipedia — Square root of 2',
      url: 'https://en.wikipedia.org/wiki/Square_root_of_2',
      source: 'wikipedia',
      note: 'Several different proofs of irrationality, plus history and computation of $\\sqrt{2}$.',
    },
    {
      title: 'MIT OCW 6.042J — Mathematics for Computer Science',
      url: 'https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-fall-2010/',
      source: 'other',
      note: 'Proof methods, including contradiction and cases, presented for computer scientists.',
    },
  ],
};
