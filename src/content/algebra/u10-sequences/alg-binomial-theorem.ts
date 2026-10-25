import type { Lesson } from '../../types';

const pascalPoints = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((k) => ({ x: k, y: `nCr(n, ${k})/2^n`, color: 'blue' as const }));

export const lesson: Lesson = {
  id: 'alg-binomial-theorem',
  title: 'Counting and the Binomial Theorem',
  summary: 'Count without listing: the multiplication principle, factorials, permutations and combinations — and how combinations expand $(a + b)^n$.',
  minutes: 19,
  objectives: [
    'Count outcomes of multi-stage choices with the multiplication principle',
    'Compute factorials and permutations $_nP_r = \\frac{n!}{(n-r)!}$, and explain why $0! = 1$',
    'Compute combinations $\\binom{n}{r} = \\frac{n!}{r!(n-r)!}$ and decide whether order matters in a problem',
    'Build Pascal\'s triangle and explain why each entry is the sum of the two above it',
    'Expand $(a + b)^n$ with the binomial theorem and find a specific coefficient or term',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'The multiplication principle',
      blocks: [
        {
          type: 'p',
          text: '**Counting** sounds trivial until the answer is in the millions. The tools in this lesson let you count arrangements and selections without listing them — the foundation of probability, of analysing algorithms, and of a large part of the discrete math course you are heading into.',
        },
        {
          type: 'p',
          text: 'Everything starts with one rule. If you have $3$ shirts and $4$ pairs of pants, each shirt can be paired with each pair of pants, so there are $3 \\times 4 = 12$ outfits.',
        },
        {
          type: 'definition',
          term: 'Multiplication principle',
          text: 'If a task is done in stages, with $n_1$ choices for the first stage, $n_2$ choices for the second stage (no matter what was chosen first), and so on, then the whole task can be done in $n_1 \\cdot n_2 \\cdots n_k$ ways. This is the [[multiplication-principle]] (also called the fundamental counting principle).',
        },
        {
          type: 'derivation',
          title: 'How many 3-letter codes use three *different* letters?',
          steps: [
            { tex: '\\text{1st letter: } 26 \\text{ choices}', why: 'Any of the 26 letters can go first.' },
            { tex: '\\text{2nd letter: } 25 \\text{ choices}', why: 'Repeats are not allowed, so one letter is used up — whichever it was, $25$ remain.' },
            { tex: '\\text{3rd letter: } 24 \\text{ choices}', why: 'Two letters are used up.' },
            { tex: '26 \\cdot 25 \\cdot 24 = 15{,}600', why: 'The number of choices at each stage does not depend on *which* earlier letters were chosen, so the multiplication principle applies.' },
          ],
          result: 'There are $15{,}600$ such codes. If repeats were allowed it would be $26^3 = 17{,}576$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why multiply?',
          text: 'Picture the choices as a grid: one row for each first choice, one column for each second choice. Every cell is one combined outcome, and a grid with $m$ rows and $n$ columns has $mn$ cells. With more stages the grid becomes a box (or a tree that branches $n_1$ ways, then $n_2$ ways from each branch, …), and the count is still the product.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Nested loops multiply',
          text: 'A loop over $m$ values containing a loop over $n$ values runs its body $mn$ times — the multiplication principle in code. It also explains why there are $2^n$ different bit strings of length $n$ (two choices per bit) and therefore why an $n$-bit integer has $2^n$ possible values: $256$ for a byte.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'numeric',
      prompt: 'A website requires usernames made of $2$ letters followed by $3$ digits, like `QX407`. Letters and digits may repeat. How many usernames are possible?',
      answer: '676000',
      answerTex: '676{,}000',
      hint: 'Five stages: two with $26$ choices, three with $10$ choices. Type the number without commas.',
      explanation: 'By the multiplication principle: $26 \\cdot 26 \\cdot 10 \\cdot 10 \\cdot 10 = 676 \\cdot 1000 = 676{,}000$. Because repeats are allowed, every stage keeps its full set of choices.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Factorials and permutations: when order matters',
      blocks: [
        {
          type: 'p',
          text: 'How many ways can you line up $5$ different books on a shelf? There are $5$ choices for the first spot, $4$ for the second, then $3$, $2$, $1$: in total $5 \\cdot 4 \\cdot 3 \\cdot 2 \\cdot 1 = 120$. Products like this are so common they get their own symbol.',
        },
        {
          type: 'definition',
          term: 'Factorial',
          text: 'For a positive integer $n$, the [[factorial]] $n! = n(n-1)(n-2)\\cdots 2 \\cdot 1$ is the number of ways to arrange $n$ distinct objects in a row. By definition $0! = 1$. Recursively: $0! = 1$ and $n! = n \\cdot (n-1)!$.',
        },
        {
          type: 'p',
          text: 'Often you arrange only some of the objects. A [[permutation]] is an ordered arrangement. Awarding gold, silver and bronze among $8$ runners can be done in $8 \\cdot 7 \\cdot 6 = 336$ ways: start a factorial and stop after $r$ factors. To write this compactly, divide away the factors you did not use:',
        },
        {
          type: 'theorem',
          name: 'Permutations of $r$ objects from $n$',
          tex: '{}_nP_r = \\frac{n!}{(n-r)!} = \\underbrace{n(n-1)\\cdots(n-r+1)}_{r \\text{ factors}}',
        },
        {
          type: 'derivation',
          title: 'Simplify $\\dfrac{10!}{7!}$ without a calculator',
          steps: [
            { tex: '\\frac{10!}{7!} = \\frac{10 \\cdot 9 \\cdot 8 \\cdot 7!}{7!}', why: 'Expand $10!$ only until $7!$ appears: $10! = 10 \\cdot 9 \\cdot 8 \\cdot (7 \\cdot 6 \\cdots 1) = 10 \\cdot 9 \\cdot 8 \\cdot 7!$.' },
            { tex: '= 10 \\cdot 9 \\cdot 8', why: 'Cancel the common factor $7!$.' },
            { tex: '= 720', why: 'Multiply. This is $_{10}P_3$: the number of ordered podiums from $10$ racers.' },
          ],
          result: '$\\frac{10!}{7!} = 720$ — never compute $10! = 3{,}628{,}800$ just to divide most of it away.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why is $0! = 1$?',
          text: 'Three reasons agree. **Counting:** there is exactly one way to arrange zero objects — do nothing. **The recursion:** $n! = n \\cdot (n-1)!$ with $n = 1$ gives $1! = 1 \\cdot 0!$, forcing $0! = 1$. **Formulas:** with $r = n$, $_nP_n = \\frac{n!}{0!}$ must equal $n!$ (arrange all $n$ objects), which works only if $0! = 1$.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Factorials overflow fast',
          text: '$12! = 479{,}001{,}600$ fits in a 32-bit `int`, but $13! \\approx 6.2 \\times 10^9$ does not; $20!$ is the largest factorial that fits in a 64-bit `long long`. Code that computes $\\binom{n}{r}$ as `fact(n) / (fact(r) * fact(n - r))` breaks for modest $n$ — real implementations multiply and divide step by step instead. (In this app\'s calculator you can type `5!`, `nPr(8,3)` and `nCr(8,3)`.)',
        },
        {
          type: 'callout',
          variant: 'warning',
          text: 'Factorials do not distribute: $(2n)! \\ne 2 \\cdot n!$ and $(a + b)! \\ne a! + b!$. For example $(2 \\cdot 3)! = 720$, but $2 \\cdot 3! = 12$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'numeric',
      prompt: 'A club of $12$ members elects a president, a vice-president and a treasurer (three different people). In how many ways can this be done?',
      answer: '1320',
      hint: 'The offices are different, so order matters: $_{12}P_3$.',
      explanation: 'There are $12$ choices for president, then $11$ for vice-president, then $10$ for treasurer: $12 \\cdot 11 \\cdot 10 = 1320 = \\frac{12!}{9!}$. Order matters because Ana-as-president-and-Ben-as-VP is a different outcome from the reverse.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'truefalse',
      prompt: '$0! = 0$, because the factorial of a number is a product and any product involving $0$ is $0$.',
      answer: false,
      explanation: '$0! = 1$. The factorial $n!$ is the product of the integers from $1$ to $n$ — for $n = 0$ that is an empty product with no factors at all, and an empty product is $1$ (just as an empty sum is $0$). It also counts the one way to arrange nothing, and it is the only value that keeps $n! = n \\cdot (n-1)!$ true at $n = 1$.',
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'concept',
      title: 'Combinations: when order does not matter',
      blocks: [
        {
          type: 'p',
          text: 'Choosing a 3-person *committee* from 8 people is different from electing three *officers*: the committee {Ana, Ben, Cy} is the same no matter what order you name them in. A selection where order does not matter is a [[combination]].',
        },
        {
          type: 'p',
          text: 'Here is the key idea. Count ordered lists first (a permutation count), then notice that each unordered group was counted once for every way of ordering it. With 4 letters and groups of 3:',
        },
        {
          type: 'table',
          headers: ['Combination (unordered)', 'Its $3! = 6$ orderings (permutations)'],
          rows: [
            ['$\\{A, B, C\\}$', 'ABC, ACB, BAC, BCA, CAB, CBA'],
            ['$\\{A, B, D\\}$', 'ABD, ADB, BAD, BDA, DAB, DBA'],
            ['$\\{A, C, D\\}$', 'ACD, ADC, CAD, CDA, DAC, DCA'],
            ['$\\{B, C, D\\}$', 'BCD, BDC, CBD, CDB, DBC, DCB'],
          ],
          caption: '$_4P_3 = 24$ ordered lists, grouped into $\\frac{24}{3!} = 4$ combinations.',
        },
        {
          type: 'theorem',
          name: 'Combinations of $r$ objects from $n$',
          tex: '\\binom{n}{r} = {}_nC_r = \\frac{{}_nP_r}{r!} = \\frac{n!}{r!\\,(n-r)!}',
          text: 'Read $\\binom{n}{r}$ as "$n$ choose $r$". It is called a [[binomial-coefficient]], for reasons you will see shortly.',
        },
        {
          type: 'derivation',
          title: 'How many 3-person committees can be formed from 8 people?',
          steps: [
            { tex: '{}_8P_3 = 8 \\cdot 7 \\cdot 6 = 336', why: 'First count *ordered* choices of 3 people.' },
            { tex: '\\binom{8}{3} = \\frac{336}{3!}', why: 'Each committee appears $3! = 6$ times in that count — once for each ordering of its members — so divide by $6$.' },
            { tex: '= \\frac{336}{6} = 56', why: 'Arithmetic. Same as $\\frac{8!}{3!\\,5!}$.' },
          ],
          result: 'There are $56$ committees, versus $336$ slates of officers.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why $\\binom{n}{r} = \\binom{n}{n-r}$',
          text: 'Choosing the $r$ people who are **on** the committee is the same as choosing the $n - r$ people who are **left off**. So $\\binom{8}{3} = \\binom{8}{5} = 56$, and $\\binom{n}{0} = \\binom{n}{n} = 1$ (choose nobody, or everybody). The formula agrees: swapping $r$ and $n - r$ just swaps the two factorials in the denominator.',
        },
        {
          type: 'callout',
          variant: 'exam',
          title: 'The question to ask every time',
          text: '"If I rearrange the chosen items, do I get a **different** outcome?" Yes → permutation (podiums, passwords, seat assignments). No → combination (committees, poker hands, pizza toppings). If items can repeat, neither formula applies directly — go back to the multiplication principle. For instance, there are $\\binom{52}{5} = 2{,}598{,}960$ five-card poker hands, because the order you are dealt the cards does not matter.',
        },
      ],
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'mcq',
      prompt: 'Which situation is counted by a **combination** $\\binom{n}{r}$?',
      options: [
        {
          text: 'Awarding 1st, 2nd and 3rd prize among 10 contestants',
          why: 'The prizes are different, so swapping two winners gives a different outcome: order matters. That is $_{10}P_3 = 720$.',
        },
        {
          text: 'Choosing 4 toppings for a pizza from a list of 10',
          correct: true,
          why: 'Mushroom-olive-onion-pepper is the same pizza in any order, and toppings are distinct, so this is $\\binom{10}{4} = 210$.',
        },
        {
          text: 'Arranging 4 different books on a shelf',
          why: 'Different orders on the shelf are different arrangements: $4! = 24$ permutations.',
        },
        {
          text: 'Making a 4-digit PIN where digits may repeat',
          why: 'Order matters (1234 ≠ 4321) *and* repeats are allowed, so neither formula applies. The multiplication principle gives $10^4 = 10{,}000$.',
        },
      ],
      explanation: 'Combinations count *unordered* selections of *distinct* items without repetition. Only the pizza toppings fit: rearranging the chosen toppings does not create a new pizza.',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'numeric',
      prompt: 'How many different 4-person teams can be chosen from a group of $10$ people?',
      answer: '210',
      hint: 'A team has no positions, so order does not matter: $\\binom{10}{4} = \\frac{10!}{4!\\,6!}$.',
      explanation: '$\\binom{10}{4} = \\frac{10 \\cdot 9 \\cdot 8 \\cdot 7}{4!} = \\frac{5040}{24} = 210$. Dividing by $4! = 24$ removes the different orderings of the same four people. (Calculator: `nCr(10,4)`.)',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'expr',
      prompt: 'At a party of $n$ people, everyone shakes hands with everyone else exactly once. Write the number of handshakes as a polynomial in $n$.',
      variables: ['n'],
      label: 'handshakes $=$',
      answer: 'n(n - 1)/2',
      answerTex: '\\binom{n}{2} = \\frac{n(n-1)}{2}',
      hint: 'A handshake is an unordered pair of people: $\\binom{n}{2}$. Simplify $\\frac{n!}{2!\\,(n-2)!}$ by cancelling $(n-2)!$. Type a polynomial, not `nCr`.',
      explanation: 'Each handshake is a pair of people, and the pair {Ana, Ben} is the same handshake as {Ben, Ana}, so the count is $\\binom{n}{2} = \\frac{n!}{2!\\,(n-2)!} = \\frac{n(n-1)\\,(n-2)!}{2\\,(n-2)!} = \\frac{n(n-1)}{2}$. Another way: each of $n$ people shakes $n - 1$ hands, but that counts every handshake twice. This is also the number of edges in a complete graph — and the $\\frac{n(n-1)}{2}$ from nested loops in the previous lesson.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'concept',
      title: 'Pascal\'s triangle',
      blocks: [
        {
          type: 'p',
          text: 'Arrange the binomial coefficients in rows: row $n$ lists $\\binom{n}{0}, \\binom{n}{1}, \\dots, \\binom{n}{n}$. The result is [[pascals-triangle|Pascal\'s triangle]]. Every row starts and ends with $1$, and every inside entry is the **sum of the two entries above it**.',
        },
        {
          type: 'math',
          tex: '\\begin{array}{c} 1 \\\\ 1 \\quad 1 \\\\ 1 \\quad 2 \\quad 1 \\\\ 1 \\quad 3 \\quad 3 \\quad 1 \\\\ 1 \\quad 4 \\quad 6 \\quad 4 \\quad 1 \\\\ 1 \\quad 5 \\quad 10 \\quad 10 \\quad 5 \\quad 1 \\\\ 1 \\quad 6 \\quad 15 \\quad 20 \\quad 15 \\quad 6 \\quad 1 \\end{array}',
          caption: 'Rows $0$ to $6$. For example $\\binom{6}{2} = 15$ is the third entry of row $6$ (counting from $\\binom{6}{0}$), and $15 = 5 + 10$.',
        },
        {
          type: 'theorem',
          name: 'Pascal\'s rule',
          tex: '\\binom{n}{r} = \\binom{n-1}{r-1} + \\binom{n-1}{r} \\qquad (1 \\le r \\le n - 1)',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why each entry is the sum of the two above',
          text: 'Count the $r$-person committees from $n$ people by focusing on one particular person, Zoe. Either Zoe **is** on the committee — then choose the other $r - 1$ members from the remaining $n - 1$ people: $\\binom{n-1}{r-1}$ ways — or she **is not**, and all $r$ members come from the other $n - 1$: $\\binom{n-1}{r}$ ways. Every committee is in exactly one of these two cases, so the counts add. No algebra required — this is a *combinatorial proof*, a technique you will use often in discrete math.',
        },
        {
          type: 'graph',
          x: [-0.5, 12.5],
          y: [0, 0.55],
          points: pascalPoints,
          sliders: [{ name: 'n', min: 1, max: 12, step: 1, value: 12, label: 'row $n$' }],
          readouts: [{ label: 'row sum $\\binom{n}{0} + \\cdots + \\binom{n}{n} = 2^n =$', expr: '2^n' }],
          caption: 'Dots show row $n$ divided by its sum $2^n$: the probability of getting exactly $k$ heads in $n$ fair coin flips. Slide $n$ down and back up: as $n$ grows the shape becomes the famous bell curve — and stays symmetric because $\\binom{n}{k} = \\binom{n}{n-k}$.',
        },
        {
          type: 'code',
          title: 'pascal.cpp',
          runnable: true,
          code: `#include <iostream>
#include <vector>

int main() {
    std::vector<long long> row{1};                 // row 0
    for (int n = 0; n <= 6; ++n) {
        for (std::size_t k = 0; k < row.size(); ++k)
            std::cout << (k ? " " : "") << row[k];
        std::cout << '\\n';
        std::vector<long long> next(row.size() + 1, 1);
        for (std::size_t k = 1; k < row.size(); ++k)
            next[k] = row[k - 1] + row[k];         // Pascal's rule
        row = next;
    }
}`,
          output: `1
1 1
1 2 1
1 3 3 1
1 4 6 4 1
1 5 10 10 5 1
1 6 15 20 15 6 1`,
          annotations: [
            { lines: 5, text: 'Row $0$ is just $1$.' },
            { lines: 10, text: 'The next row is one entry longer and starts and ends with $1$.' },
            { lines: 12, text: 'Each inside entry is the sum of the two above it — only additions, so no factorial overflow.' },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'fill',
      prompt: 'Row 6 of Pascal\'s triangle is shown. Use Pascal\'s rule to fill in the missing entries of row 7.',
      tex: '\\text{Row 6:}\\quad 1 \\quad 6 \\quad 15 \\quad 20 \\quad 15 \\quad 6 \\quad 1',
      template: 'Row 7: $1,\\ 7,$ ___ $,\\ 35,\\ 35,$ ___ $,\\ 7,\\ 1$',
      blanks: [{ answers: ['21'] }, { answers: ['21'] }],
      hint: 'Each entry is the sum of the two entries diagonally above it in row 6.',
      explanation: 'The third entry of row 7 is $6 + 15 = 21$, and by symmetry the sixth entry is $15 + 6 = 21$. (The middle entries are $15 + 20 = 35$.) So row 7 is $1, 7, 21, 35, 35, 21, 7, 1$ — and indeed $\\binom{7}{2} = \\frac{7 \\cdot 6}{2} = 21$. The entries add to $128 = 2^7$, a handy check.',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'concept',
      title: 'The binomial theorem',
      blocks: [
        {
          type: 'p',
          text: 'Now the payoff. Expand a few powers of the [[binomial]] $a + b$ and look at the coefficients:',
        },
        {
          type: 'math',
          tex: '\\begin{aligned} (a+b)^2 &= a^2 + 2ab + b^2 \\\\ (a+b)^3 &= a^3 + 3a^2 b + 3ab^2 + b^3 \\\\ (a+b)^4 &= a^4 + 4a^3 b + 6a^2 b^2 + 4ab^3 + b^4 \\end{aligned}',
          caption: 'The coefficients are rows $2$, $3$ and $4$ of Pascal\'s triangle.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why combinations appear',
          text: '$(a + b)^4 = (a + b)(a + b)(a + b)(a + b)$. Multiplying out means choosing either $a$ or $b$ from **each** of the 4 factors and multiplying the choices. You get $a^2 b^2$ whenever you pick $b$ from exactly 2 of the 4 factors — and there are $\\binom{4}{2} = 6$ ways to choose which 2. So the coefficient of $a^2 b^2$ is $6$. In general, the coefficient of $a^{n-k} b^k$ counts the ways to choose which $k$ of the $n$ factors contribute a $b$.',
        },
        {
          type: 'theorem',
          name: 'Binomial theorem',
          tex: '(a + b)^n = \\sum_{k=0}^{n} \\binom{n}{k} a^{\\,n-k} b^{\\,k} = a^n + \\binom{n}{1}a^{n-1}b + \\binom{n}{2}a^{n-2}b^2 + \\cdots + b^n',
          text: 'Valid for every non-negative integer $n$. The [[binomial-theorem]] has $n + 1$ terms; in each, the exponents of $a$ and $b$ add up to $n$.',
        },
        {
          type: 'derivation',
          title: 'Expand $(x + 2)^4$',
          steps: [
            { tex: '(x+2)^4 = \\sum_{k=0}^{4} \\binom{4}{k} x^{4-k}\\, 2^k', why: 'Binomial theorem with $a = x$, $b = 2$, $n = 4$.' },
            { tex: '= 1 \\cdot x^4 + 4 \\cdot x^3 \\cdot 2 + 6 \\cdot x^2 \\cdot 2^2 + 4 \\cdot x \\cdot 2^3 + 1 \\cdot 2^4', why: 'Write the five terms, $k = 0, \\dots, 4$, using row $4$ of Pascal\'s triangle: $1, 4, 6, 4, 1$. The power of $x$ falls as the power of $2$ rises.' },
            { tex: '= x^4 + 8x^3 + 24x^2 + 32x + 16', why: 'Simplify each term. The powers of $2$ are part of the coefficients — do not forget them.' },
          ],
          result: '$(x + 2)^4 = x^4 + 8x^3 + 24x^2 + 32x + 16$. Check with $x = 1$: $3^4 = 81 = 1 + 8 + 24 + 32 + 16$ ✓.',
        },
        {
          type: 'compare',
          left: { title: 'Wrong', tone: 'bad', tex: ['(x + 2)^4 = x^4 + 2^4 = x^4 + 16'] },
          right: { title: 'Right', tone: 'good', tex: ['(x + 2)^4 = x^4 + 8x^3 + 24x^2 + 32x + 16'] },
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Subtraction: let $b$ be negative',
          text: 'For $(x - y)^n$, use $b = -y$. Then $b^k = (-y)^k$ is negative for odd $k$, so the signs alternate: $(x - y)^3 = x^3 - 3x^2 y + 3xy^2 - y^3$. Keep the sign *inside* the power: $(-3)^2 = 9$, not $-9$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'error',
      prompt: 'A student expands $(x + 3)^3$. Tap the first line that is wrong.',
      lines: [
        '$(x+3)^3 = \\binom{3}{0}x^3 + \\binom{3}{1}x^2(3) + \\binom{3}{2}x(3)^2 + \\binom{3}{3}(3)^3$',
        '$= x^3 + 3 \\cdot 3x^2 + 3 \\cdot 3x + 27$',
        '$= x^3 + 9x^2 + 9x + 27$',
      ],
      errorLines: [2],
      explanation: 'Line 1 is a correct use of the binomial theorem. Line 2 drops the square on the $3$ in the third term: $\\binom{3}{2} x (3)^2 = 3 \\cdot 9x = 27x$, not $9x$. The correct expansion is $(x + 3)^3 = x^3 + 9x^2 + 27x + 27$. Quick check at $x = 1$: $4^3 = 64 = 1 + 9 + 27 + 27$, while the student\'s version gives $46$.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'concept',
      title: 'Finding one term without expanding everything',
      blocks: [
        {
          type: 'p',
          text: 'For $(a + b)^{20}$ you would never write all $21$ terms. Instead, use the **general term**: the term containing $b^k$ is $\\binom{n}{k} a^{n-k} b^k$. Because $k$ starts at $0$, this is the $(k+1)$-st term.',
        },
        {
          type: 'derivation',
          title: 'Find the constant term of $\\left(x^2 + \\dfrac{1}{x}\\right)^6$',
          steps: [
            { tex: '\\binom{6}{k} (x^2)^{6-k} \\left(\\frac{1}{x}\\right)^k', why: 'General term with $a = x^2$, $b = \\frac{1}{x} = x^{-1}$, $n = 6$.' },
            { tex: '= \\binom{6}{k} x^{12 - 2k} \\, x^{-k} = \\binom{6}{k} x^{12 - 3k}', why: 'Power of a power multiplies exponents; then add the exponents of $x$.' },
            { tex: '12 - 3k = 0 \\implies k = 4', why: 'A constant term has $x^0$. Solve for $k$ (it must be a whole number from $0$ to $6$, and it is).' },
            { tex: '\\binom{6}{4} = \\frac{6!}{4!\\,2!} = 15', why: 'Evaluate the coefficient for $k = 4$. It equals $\\binom{6}{2}$ by symmetry.' },
          ],
          result: 'The constant term is $15$ (it is the 5th term, since $k = 4$).',
        },
        {
          type: 'p',
          text: 'Two special cases of the binomial theorem are worth remembering. Setting $a = b = 1$ gives the row sums of Pascal\'s triangle:',
        },
        {
          type: 'math',
          tex: '\\sum_{k=0}^{n} \\binom{n}{k} = (1 + 1)^n = 2^n',
          caption: 'Counting interpretation: a set with $n$ elements has $2^n$ subsets — $\\binom{n}{k}$ of them have exactly $k$ elements.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Subsets, bit strings and probability',
          text: 'A subset of $\\{0, 1, \\dots, n-1\\}$ can be stored as an $n$-bit mask (bit $i$ on means element $i$ is in). There are $2^n$ masks, and $\\binom{n}{k}$ of them have exactly $k$ ones. Looping `for (unsigned m = 0; m < (1u << n); ++m)` visits every subset — a standard brute-force technique. The same numbers give probabilities: $\\binom{n}{k}/2^n$ is the chance of exactly $k$ heads in $n$ coin flips, the **binomial distribution**.',
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'Exams often ask for "the coefficient of $x^5$" or "the 4th term". Write the general term, simplify the power of $x$, solve for $k$, then evaluate. Watch two traps: the $(k+1)$-st term has index $k$, and the coefficient includes the powers of any numbers inside $a$ and $b$ (and their signs).',
        },
      ],
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'numeric',
      prompt: 'Find the coefficient of $x^2$ in the expansion of $(2x - 1)^5$.',
      label: 'coefficient $=$',
      answer: '-40',
      hint: 'General term: $\\binom{5}{k}(2x)^{5-k}(-1)^k$. Which $k$ gives $x^2$?',
      explanation: 'With $a = 2x$ and $b = -1$, the general term is $\\binom{5}{k}(2x)^{5-k}(-1)^k$. For $x^2$ we need $5 - k = 2$, so $k = 3$: $\\binom{5}{3}(2x)^2(-1)^3 = 10 \\cdot 4x^2 \\cdot (-1) = -40x^2$. Forgetting to square the $2$ gives $-20$; forgetting the sign gives $40$.',
    },
    // ------------------------------------------------------------------ 16
    {
      kind: 'mcq',
      prompt: 'What is $\\binom{8}{0} + \\binom{8}{1} + \\binom{8}{2} + \\cdots + \\binom{8}{8}$?',
      options: [
        {
          text: '$255$',
          why: 'That is $2^8 - 1$, which leaves out one term — usually $\\binom{8}{0} = 1$ (the empty subset). The sum starts at $k = 0$.',
        },
        {
          text: '$40{,}320$',
          why: 'That is $8!$, the number of ways to *order* 8 objects, not the number of ways to choose a subset of them.',
        },
        {
          text: '$256$',
          correct: true,
          why: 'Set $a = b = 1$ in the binomial theorem: the sum is $(1 + 1)^8 = 2^8 = 256$. It counts all subsets of an 8-element set.',
        },
        {
          text: '$64$',
          why: 'That is $8^2$ (or $2^6$). The sum of row $n$ is $2^n$, not $n^2$.',
        },
      ],
      explanation: 'By the binomial theorem, $\\sum_{k=0}^{8}\\binom{8}{k} 1^{8-k} 1^k = (1 + 1)^8 = 256$. Counting argument: each of the 8 elements is either in or out of a subset — $2$ choices, $8$ times, so $2^8$ subsets — and grouping the subsets by size $k$ gives the terms $\\binom{8}{k}$. Row 8 of Pascal\'s triangle, $1 + 8 + 28 + 56 + 70 + 56 + 28 + 8 + 1$, confirms it.',
    },
  ],
  takeaways: [
    'Multiplication principle: multi-stage choices multiply — nested loops, bit strings ($2^n$) and passwords all follow it.',
    'Permutations (order matters): $_nP_r = \\frac{n!}{(n-r)!}$; arranging all $n$ objects gives $n!$, and $0! = 1$.',
    'Combinations (order does not matter): $\\binom{n}{r} = \\frac{n!}{r!(n-r)!}$ — the permutation count divided by the $r!$ orderings of each group.',
    'Pascal\'s triangle lists $\\binom{n}{r}$; each entry is the sum of the two above it, rows are symmetric and row $n$ sums to $2^n$.',
    'Binomial theorem: $(a + b)^n = \\sum_{k=0}^{n}\\binom{n}{k}a^{n-k}b^k$; the general term finds any single coefficient, including signs and constants.',
  ],
  reading: [
    {
      title: 'OpenStax College Algebra 2e — 9.5 Counting Principles',
      url: 'https://openstax.org/books/college-algebra-2e/pages/9-5-counting-principles',
      source: 'openstax',
      note: 'More practice with the multiplication principle, permutations and combinations, including arrangements with repeated letters.',
    },
    {
      title: 'OpenStax College Algebra 2e — 9.6 Binomial Theorem',
      url: 'https://openstax.org/books/college-algebra-2e/pages/9-6-binomial-theorem',
      source: 'openstax',
      note: 'Worked examples of expanding binomials and finding a single term.',
    },
    {
      title: "Wikipedia — Pascal's triangle",
      url: 'https://en.wikipedia.org/wiki/Pascal%27s_triangle',
      source: 'wikipedia',
      note: 'The triangle\'s history (it was known in India, Persia and China centuries before Pascal) and many hidden patterns.',
    },
  ],
};
