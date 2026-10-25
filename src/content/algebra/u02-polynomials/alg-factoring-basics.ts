import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'alg-factoring-basics',
  title: 'Factoring: GCF and Grouping',
  summary: 'Run multiplication backwards: pull out the greatest common factor, and factor four-term polynomials by grouping.',
  minutes: 16,
  objectives: [
    'Explain what it means to factor a polynomial and why factored form is useful',
    'Find the greatest common factor (GCF) of a set of monomials',
    'Factor out a GCF — including a negative GCF or a common binomial — and check by distributing',
    'Factor four-term polynomials by grouping, rearranging terms when needed',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Factoring is multiplication in reverse',
      blocks: [
        {
          type: 'p',
          text: 'In the last lesson you multiplied: $5x^2(3x^2 - 2x + 5) = 15x^4 - 10x^3 + 25x^2$. [[factoring|Factoring]] runs that arrow backwards — start from the sum and recover a product that equals it.',
        },
        {
          type: 'math',
          tex: '\\underbrace{5x^2(3x^2 - 2x + 5)}_{\\text{factored form}} \\;\\xrightarrow{\\ \\text{expand}\\ }\\; \\underbrace{15x^4 - 10x^3 + 25x^2}_{\\text{expanded form}} \\;\\xrightarrow{\\ \\text{factor}\\ }\\; 5x^2(3x^2 - 2x + 5)',
        },
        {
          type: 'p',
          text: 'It is the same idea as factoring a whole number: $60 = 2^2 \\cdot 3 \\cdot 5$. Both forms are the *same number*; the factored form just shows its building blocks. A polynomial is **factored** when it is written as a single product, and **factored completely** when none of the factors can be factored further.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why bother factoring?',
          text: 'Products are easy to reason about. A product is zero exactly when one of its factors is zero, which is how you will solve equations like $x^2 - 5x + 6 = 0$ in a later unit. Common factors also cancel in fractions, just as $\\frac{6}{9} = \\frac{2 \\cdot 3}{3 \\cdot 3} = \\frac{2}{3}$ — the key to the rational expressions lesson. Expanded form is best for adding; factored form is best for multiplying, dividing and solving.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Factoring always comes with a free check',
          text: 'Multiplication is easy and factoring is a search. So after you factor, *expand your answer*: if you get the original polynomial back, you are right. Make this a habit on every problem.',
        },
      ],
    },
    {
      kind: 'mcq',
      prompt: 'Which is the factored form of $12x + 18$ using the **greatest** common factor?',
      options: [
        { text: '$3(4x + 6)$', why: 'Equal to $12x + 18$, but $4x + 6$ still has a common factor of $2$, so $3$ was not the greatest common factor.' },
        { text: '$6(2x + 3)$', correct: true, why: '$\\gcd(12, 18) = 6$, and $2x + 3$ has no common factor left.' },
        { text: '$6(2x + 18)$', why: 'Each term must be divided by $6$: $18 \\div 6 = 3$. Expanding $6(2x + 18)$ gives $12x + 108$.' },
        { text: '$2(6x + 9)$', why: 'Correct but incomplete: $6x + 9$ still shares a factor of $3$.' },
      ],
      explanation: 'The largest number dividing both $12$ and $18$ is $6$, so $12x + 18 = 6 \\cdot 2x + 6 \\cdot 3 = 6(2x + 3)$. The answers $3(4x + 6)$ and $2(6x + 9)$ are true equations, but they are not factored completely — the expression inside still has a common factor.',
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'concept',
      title: 'The greatest common factor of monomials',
      blocks: [
        {
          type: 'definition',
          term: 'Greatest common factor (GCF)',
          text: 'The [[greatest-common-factor]] of several monomials is the largest monomial that divides each of them. Build it in two parts: the GCF of the coefficients, times each variable that appears in **every** term, raised to the **smallest** power that appears.',
        },
        {
          type: 'derivation',
          title: 'GCF of $12x^3y^2$, $18x^2y^4$ and $30x^4y^3$',
          steps: [
            { tex: '\\gcd(12, 18, 30) = 6', why: '$12 = 2^2 \\cdot 3$, $18 = 2 \\cdot 3^2$, $30 = 2 \\cdot 3 \\cdot 5$. The primes common to all three are one $2$ and one $3$.' },
            { tex: 'x^3,\\ x^2,\\ x^4 \\;\\Rightarrow\\; x^2', why: 'Every term has at least two factors of $x$, but not every term has three. Smallest exponent: $2$.' },
            { tex: 'y^2,\\ y^4,\\ y^3 \\;\\Rightarrow\\; y^2', why: 'Same reasoning for $y$: the smallest exponent is $2$.' },
            { tex: '\\text{GCF} = 6x^2y^2', why: 'Multiply the pieces together.' },
          ],
          result: 'The GCF is $6x^2y^2$. Dividing each term by it leaves $2x$, $3y^2$ and $5x^2y$ — whole monomials, as they must be.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the smallest exponent?',
          text: 'Write the powers out: $x^3 = x \\cdot x \\cdot x$ and $x^2 = x \\cdot x$. Only two $x$\'s are shared by *both*. Taking $x^3$ out of $x^2$ would leave $x^{-1}$, which is not a polynomial. A variable missing from even one term (exponent $0$ there) is not part of the GCF at all.',
        },
      ],
    },
    {
      kind: 'fill',
      prompt: 'Find the GCF of $8a^4b^2$ and $20a^2b^5$.',
      template: 'The numerical part of the GCF is ___ and the variable part is ___.',
      blanks: [{ answers: ['$4$'] }, { answers: ['$a^2b^2$'] }],
      wordBank: ['$4$', '$2$', '$40$', '$a^2b^2$', '$a^4b^5$', '$a^2b^5$', '$ab$'],
      explanation: '$\\gcd(8, 20) = 4$. For each variable take the smaller exponent: $a^{\\min(4,2)} = a^2$ and $b^{\\min(2,5)} = b^2$. So the GCF is $4a^2b^2$. ($a^4b^5$ uses the *largest* exponents — that would be part of a least common multiple, not a common factor.)',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Factoring out the GCF',
      blocks: [
        {
          type: 'steps',
          items: [
            { title: 'Find the GCF', text: 'Of all the terms, as on the previous card.' },
            { title: 'Divide each term by it', text: 'These quotients go inside the parentheses, one per original term.' },
            { title: 'Check', text: 'Distribute to get the original back, and make sure the parentheses have no common factor left.' },
          ],
        },
        {
          type: 'derivation',
          title: 'Factor $15x^4 - 10x^3 + 25x^2$',
          steps: [
            { tex: '\\text{GCF} = 5x^2', why: '$\\gcd(15, 10, 25) = 5$; the smallest power of $x$ is $x^2$.' },
            { tex: '= 5x^2 \\cdot 3x^2 + 5x^2 \\cdot (-2x) + 5x^2 \\cdot 5', why: 'Divide each term by $5x^2$: $\\frac{15x^4}{5x^2} = 3x^2$, $\\frac{-10x^3}{5x^2} = -2x$, $\\frac{25x^2}{5x^2} = 5$.' },
            { tex: '= 5x^2(3x^2 - 2x + 5)', why: 'Distributive property in reverse: pull the shared factor out front.' },
          ],
          result: '$15x^4 - 10x^3 + 25x^2 = 5x^2(3x^2 - 2x + 5)$.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'A term that *is* the GCF leaves a 1',
          text: 'In $4x^2 + 2x$ the GCF is $2x$, and $\\frac{2x}{2x} = 1$, so $4x^2 + 2x = 2x(2x + 1)$. Writing $2x(2x)$ loses a term — expand it and you get $4x^2$, not the original. The number of terms inside the parentheses always equals the number of terms you started with.',
        },
        {
          type: 'p',
          text: 'Two variations show up constantly. When the leading coefficient is negative, it is conventional to factor out a **negative** GCF, which flips every sign inside: $-3x^2 + 6x - 9 = -3(x^2 - 2x + 3)$. And the GCF does not have to be a monomial — a whole **binomial** can be common to every term:',
        },
        {
          type: 'derivation',
          title: 'Factor $3x(x - 2) + 5(x - 2)$',
          steps: [
            { tex: '3x\\,\\color{#e5484d}{(x - 2)} + 5\\,\\color{#e5484d}{(x - 2)}', why: 'Two terms, and both contain the factor $(x - 2)$.' },
            { tex: '= (x - 2)(3x + 5)', why: 'Pull out $(x - 2)$ exactly as you would pull out a single letter: think of $3A + 5A = A(3 + 5)$ with $A = x - 2$.' },
          ],
          result: 'This "common binomial" move is the heart of factoring by grouping, next.',
        },
      ],
    },
    {
      kind: 'error',
      prompt: 'A student factors $4x^3 + 10x^2 + 2x$. Tap the first line that is wrong.',
      lines: [
        'The GCF of $4x^3$, $10x^2$ and $2x$ is $2x$.',
        '$4x^3 + 10x^2 + 2x = 2x \\cdot 2x^2 + 2x \\cdot 5x + 2x \\cdot 1$',
        '$= 2x(2x^2 + 5x)$',
        'So $4x^3 + 10x^2 + 2x = 2x(2x^2 + 5x)$.',
      ],
      errorLines: [3],
      explanation: 'Line 2 is correct, but line 3 drops the last factor: $\\frac{2x}{2x} = 1$, not nothing. The correct factorisation is $2x(2x^2 + 5x + 1)$. Expanding would have caught it: $2x(2x^2 + 5x) = 4x^3 + 10x^2$, which is missing the $2x$. (Also, $2x^2 + 5x$ itself still has a common factor $x$ — another red flag.)',
    },
    {
      kind: 'expr',
      prompt: 'Complete the factorisation by entering the polynomial that belongs inside the parentheses.',
      tex: '6x^3y - 15x^2y^2 + 9xy^3 = 3xy\\,(\\;?\\;)',
      variables: ['x', 'y'],
      label: '$? =$',
      answer: '2x^2 - 5xy + 3y^2',
      answerTex: '2x^2 - 5xy + 3y^2',
      hint: 'Divide each of the three terms by $3xy$.',
      explanation: '$\\frac{6x^3y}{3xy} = 2x^2$, $\\frac{-15x^2y^2}{3xy} = -5xy$, $\\frac{9xy^3}{3xy} = 3y^2$. So $6x^3y - 15x^2y^2 + 9xy^3 = 3xy(2x^2 - 5xy + 3y^2)$. Check by distributing $3xy$ back over the three terms.',
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'concept',
      title: 'Factoring by grouping',
      blocks: [
        {
          type: 'p',
          text: 'Some polynomials have no common factor across *all* terms, but split into groups that each have one. [[factoring-by-grouping|Factoring by grouping]] is the standard tool for four terms: factor each pair separately, and hope a common binomial appears.',
        },
        {
          type: 'derivation',
          title: 'Factor $x^3 + 3x^2 + 2x + 6$',
          steps: [
            { tex: '= (x^3 + 3x^2) + (2x + 6)', why: 'There is no GCF of all four terms, so split into two pairs.' },
            { tex: '= x^2(x + 3) + 2(x + 3)', why: 'Factor the GCF out of each pair: $x^2$ from the first, $2$ from the second.' },
            { tex: '= (x + 3)(x^2 + 2)', why: 'Both terms now share the binomial $(x + 3)$; factor it out as on the previous card.' },
          ],
          result: '$x^3 + 3x^2 + 2x + 6 = (x + 3)(x^2 + 2)$. Check: $(x + 3)(x^2 + 2) = x^3 + 2x + 3x^2 + 6$ ✓.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why grouping works (when it works)',
          text: 'Multiply out any product of two binomials, $(A + B)(C + D) = AC + AD + BC + BD$, and you get four terms in which the first pair shares $A$ and the second pair shares $B$. Grouping just un-does that expansion. If the binomials left in the two pairs are **not identical**, then either the terms need to be paired differently or the polynomial doesn\'t factor this way.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Make the binomials match',
          text: 'After factoring the first pair, you know exactly which binomial you need from the second pair. Choose the factor (including its sign!) that produces it.',
        },
      ],
    },
    {
      kind: 'order',
      prompt: 'Put the steps for factoring $2xy - 6x + 5y - 15$ by grouping in order.',
      lines: [
        'Group in pairs: $(2xy - 6x) + (5y - 15)$',
        'Factor each pair: $2x(y - 3) + 5(y - 3)$',
        'Factor out the common binomial: $(y - 3)(2x + 5)$',
        'Check by expanding: $2xy + 5y - 6x - 15$ ✓',
      ],
      distractors: ['Factor each pair: $2x(y - 3) + 5(y + 3)$'],
      explanation: 'The first pair has GCF $2x$, leaving $y - 3$; the second has GCF $5$, leaving $y - 3$ as well — a match, so $(y - 3)$ comes out: $(y - 3)(2x + 5)$. The distractor has $5(y + 3) = 5y + 15$, which has the wrong sign on $15$, and its binomials don\'t match.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Grouping with negatives and rearranging',
      blocks: [
        {
          type: 'p',
          text: 'Most grouping mistakes happen in the second pair when it starts with a minus sign. Factor out the **negative**, so that the leftover binomial matches the first one.',
        },
        {
          type: 'derivation',
          title: 'Factor $x^3 - 2x^2 - 5x + 10$',
          steps: [
            { tex: '= (x^3 - 2x^2) + (-5x + 10)', why: 'Pair the terms, keeping each sign with its term.' },
            { tex: '= x^2(x - 2) - 5(x - 2)', why: 'From the second pair factor out $-5$: $\\frac{-5x}{-5} = x$ and $\\frac{10}{-5} = -2$, which gives the matching $(x - 2)$.' },
            { tex: '= (x - 2)(x^2 - 5)', why: 'Factor out the common binomial $(x - 2)$.' },
          ],
          result: '$x^3 - 2x^2 - 5x + 10 = (x - 2)(x^2 - 5)$. Factoring out $+5$ instead would give $5(-x + 2)$, which does not visibly match $(x - 2)$.',
        },
        {
          type: 'p',
          text: 'Sometimes the given order of terms pairs the wrong ones. Since addition is commutative, you may reorder before grouping:',
        },
        {
          type: 'derivation',
          title: 'Factor $ax + by + bx + ay$',
          steps: [
            { tex: '(ax + by) + (bx + ay)', why: 'In this order the pairs have no common factors at all — grouping stalls.' },
            { tex: '= (ax + ay) + (bx + by)', why: 'Reorder so each pair shares a letter.' },
            { tex: '= a(x + y) + b(x + y)', why: 'Factor $a$ from the first pair and $b$ from the second.' },
            { tex: '= (x + y)(a + b)', why: 'Pull out the common binomial.' },
          ],
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'An expression like $x^2(x - 2) - 5(x - 2)$ is **not** an acceptable final answer — it is still a difference of two terms. Instructors mark it incomplete. The last step, pulling out the common binomial, is what makes it a product.',
        },
      ],
    },
    {
      kind: 'mcq',
      prompt: 'Factor completely: $x^3 - 4x^2 - 3x + 12$.',
      options: [
        { text: '$(x - 4)(x^2 + 3)$', why: 'Expanding gives $x^3 + 3x - 4x^2 - 12$: the signs of the last two terms are wrong. The second pair needs $-3$ factored out.' },
        { text: '$x^2(x - 4) - 3(x - 4)$', why: 'This is a correct intermediate step, but it is a difference of two terms, not a product. Pull out $(x - 4)$.' },
        { text: '$(x + 4)(x^2 - 3)$', why: 'Expanding gives $x^3 - 3x + 4x^2 - 12$, so the $x^2$ term has the wrong sign.' },
        { text: '$(x - 4)(x^2 - 3)$', correct: true, why: '$x^2(x - 4) - 3(x - 4) = (x - 4)(x^2 - 3)$, and expanding returns the original.' },
      ],
      explanation: 'Group: $(x^3 - 4x^2) + (-3x + 12)$. Factor each pair: $x^2(x - 4) - 3(x - 4)$ — factoring out $-3$ makes the binomials match. Then $(x - 4)(x^2 - 3)$. Check: $x^3 - 3x - 4x^2 + 12$ ✓.',
    },
    {
      kind: 'truefalse',
      prompt: 'The expression $2x(x + 3) + 5(x + 3)$ is in factored form.',
      answer: false,
      explanation: 'The last operation performed is the **addition** in the middle, so it is a sum of two terms, not a product. Factoring out the shared binomial gives the factored form $(x + 3)(2x + 5)$. A good test: an expression is factored when the very last operation you would do to evaluate it is a multiplication.',
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'concept',
      title: 'Checking, and factoring in code',
      blocks: [
        {
          type: 'p',
          text: 'Factored and expanded forms are the same function, so they produce the same output for every input — their graphs are literally the same curve. Use the slider to compare them at any $x$.',
        },
        {
          type: 'graph',
          x: [-4.5, 2],
          y: [-12, 20],
          yStep: 4,
          functions: [
            { expr: 'x^3 + 3x^2 + 2x + 6', label: '$x^3 + 3x^2 + 2x + 6$' },
            { expr: '(x + 3)(x^2 + 2)', label: '$(x + 3)(x^2 + 2)$', color: 'orange', dashed: true },
          ],
          points: [{ x: 'k', y: 'k^3 + 3k^2 + 2k + 6' }, { x: -3, y: 0, label: '(−3, 0)', color: 'red' }],
          sliders: [{ name: 'k', min: -4, max: 1.5, step: 0.5, value: 1, label: '$x$' }],
          readouts: [
            { label: 'expanded:', expr: 'k^3 + 3k^2 + 2k + 6', digits: 3 },
            { label: 'factored:', expr: '(k + 3)(k^2 + 2)', digits: 3 },
          ],
          caption: 'The dashed curve sits exactly on top of the solid one. The factored form also explains the red point: the output is $0$ at $x = -3$ because the factor $x + 3$ is zero there.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Horner\'s method: factoring for speed',
          text: 'Repeatedly factoring out $x$ rewrites a polynomial as nested multiply-adds: $2x^3 - 3x^2 + 4x - 5 = ((2x - 3)x + 4)x - 5$. A degree-$n$ polynomial then costs only $n$ multiplications and $n$ additions, with no powers at all. Numerical libraries evaluate polynomials this way.',
        },
        {
          type: 'code',
          title: 'horner.cpp',
          runnable: true,
          code: `#include <cstdio>
#include <vector>

// Evaluates c[0]*x^n + c[1]*x^(n-1) + ... + c[n]
double horner(const std::vector<double>& c, double x) {
    double result = 0.0;
    for (double coef : c) result = result * x + coef;
    return result;
}

int main() {
    std::vector<double> p = {2, -3, 4, -5};  // 2x^3 - 3x^2 + 4x - 5
    for (int x = 0; x <= 3; ++x)
        std::printf("p(%d) = %g\\n", x, horner(p, x));
}`,
          output: `p(0) = -5
p(1) = -2
p(2) = 7
p(3) = 34`,
          annotations: [
            { lines: 7, text: 'One multiply and one add per coefficient. The loop computes $(((0 \\cdot x + 2)x - 3)x + 4)x - 5$ from the inside out.' },
            { lines: 12, text: 'Coefficients from the highest power down — the same array layout used for adding polynomials.' },
          ],
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'When $14x^3 - 21x^2$ is factored completely, it becomes $k\\,x^2(2x - 3)$. What is $k$?',
      hint: 'What is the greatest common factor of $14$ and $21$?',
      label: '$k =$',
      answer: '7',
      explanation: '$\\gcd(14, 21) = 7$ and the smallest power of $x$ is $x^2$, so the GCF is $7x^2$. Dividing: $\\frac{14x^3}{7x^2} = 2x$ and $\\frac{-21x^2}{7x^2} = -3$. So $14x^3 - 21x^2 = 7x^2(2x - 3)$ and $k = 7$.',
    },
  ],
  takeaways: [
    'Factoring rewrites a sum as a product; expanding your answer is always a valid check.',
    'The GCF of monomials is the GCF of the coefficients times each shared variable to its smallest power.',
    'After factoring out a GCF, the parentheses keep one term per original term — a term equal to the GCF leaves $1$.',
    'Factor out a negative GCF to flip every sign inside, and treat a common binomial just like a common letter.',
    'Grouping: factor each pair, make the binomials match (watch the sign), then factor out the common binomial.',
    'An answer like $x^2(x - 2) - 5(x - 2)$ is not factored — the final operation must be multiplication.',
  ],
  reading: [
    {
      title: 'OpenStax College Algebra 2e — 1.5 Factoring Polynomials',
      url: 'https://openstax.org/books/college-algebra-2e/pages/1-5-factoring-polynomials',
      source: 'openstax',
      note: 'Covers the GCF and grouping (and the trinomial methods of the next lesson) with many exercises.',
    },
    {
      title: "Paul's Online Notes — Factoring Polynomials",
      url: 'https://tutorial.math.lamar.edu/Classes/Alg/Factoring.aspx',
      source: 'paul',
      note: 'Clear examples of factoring out the GCF and of grouping, including the sign traps.',
    },
    {
      title: "Wikipedia — Horner's method",
      url: 'https://en.wikipedia.org/wiki/Horner%27s_method',
      source: 'wikipedia',
      note: 'The nested-factoring evaluation scheme from the code example, with its history and efficiency analysis.',
    },
  ],
};
