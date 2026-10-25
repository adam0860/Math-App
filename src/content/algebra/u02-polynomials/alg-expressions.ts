import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'alg-expressions',
  title: 'Variables, Expressions and Like Terms',
  summary: 'The vocabulary of algebra: what variables and expressions are, how to evaluate them, and how to simplify by combining like terms.',
  minutes: 15,
  objectives: [
    'Identify the terms, coefficients and constant of an algebraic expression',
    'Evaluate an expression by substituting values, using parentheses to protect signs',
    'Decide whether two terms are like terms, and explain why only like terms combine',
    'Simplify expressions using the distributive property and combining like terms',
    'Translate a verbal description into an algebraic expression (and into code)',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Variables: names for numbers',
      blocks: [
        {
          type: 'p',
          text: 'A [[variable]] is a letter that stands for a number — either a number we don\'t know yet, or a number that is allowed to change. If you have written code, you already know the idea: `int score = 0;` creates a named slot that can hold different values over time. In algebra, $x$ plays exactly that role.',
        },
        {
          type: 'p',
          text: 'An [[expression]] combines numbers and variables with operations: $3x^2 - 7x + 2$, $\\frac{a + b}{2}$, $5(n - 1)$. An expression has no equals sign — it is a *recipe* that produces a value once you know the variables. An [[equation]] such as $3x - 7 = 2$ is a *statement* that two expressions are equal, which may be true or false.',
        },
        {
          type: 'definition',
          term: 'Terms, coefficients and constants',
          text: 'The [[term|terms]] of an expression are the pieces joined by $+$ or $-$. In a term like $-7x$, the numerical factor $-7$ is the [[coefficient]] and $x$ is the variable part. A term with no variable, like $+2$, is a **constant term**.',
        },
        {
          type: 'table',
          headers: ['Term of $4x^2 - 7xy + 3 - x$', 'Coefficient', 'Variable part'],
          rows: [
            ['$4x^2$', '$4$', '$x^2$'],
            ['$-7xy$', '$-7$', '$xy$'],
            ['$+3$', '$3$', 'none (constant)'],
            ['$-x$', '$-1$', '$x$'],
          ],
          caption: 'The sign in front of a term belongs to the term. And a "bare" $x$ has an invisible coefficient of $1$, so $-x$ has coefficient $-1$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why think of subtraction as adding a negative',
          text: 'Writing $4x^2 - 7xy + 3 - x$ as $4x^2 + (-7xy) + 3 + (-x)$ turns every expression into a pure sum. Addition is commutative and associative, so the terms can then be moved around freely — each one carrying its own sign. That single idea powers everything else in this lesson.',
        },
      ],
    },
    {
      kind: 'mcq',
      prompt: 'What is the coefficient of $x$ in $5 - x + 3x^2$?',
      options: [
        { text: '$-1$', correct: true, why: 'The term is $-x = -1 \\cdot x$. The sign belongs to the term, and a bare $x$ has coefficient $1$.' },
        { text: '$1$', why: 'Close, but the minus sign in front of $x$ is part of the term, so the coefficient is $-1$.' },
        { text: '$0$', why: 'There *is* an $x$ term; it just has no visible number. An invisible coefficient is $1$ (here $-1$), not $0$.' },
        { text: '$3$', why: '$3$ is the coefficient of $x^2$, a different variable part.' },
      ],
      explanation: 'Rewrite the expression as a sum: $5 + (-1)x + 3x^2$. Now each coefficient is visible: the constant is $5$, the coefficient of $x$ is $-1$ and the coefficient of $x^2$ is $3$.',
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'concept',
      title: 'Evaluating an expression',
      blocks: [
        {
          type: 'p',
          text: 'To **evaluate** an expression, replace each variable with its value and follow the [[order-of-operations]]. The one habit that prevents most mistakes: **put every substituted value in parentheses**, especially negative numbers.',
        },
        {
          type: 'derivation',
          title: 'Evaluate $3x^2 - 2x + 5$ at $x = -2$',
          steps: [
            { tex: '3(-2)^2 - 2(-2) + 5', why: 'Replace every $x$ with $(-2)$, keeping the parentheses so the sign travels with the number.' },
            { tex: '= 3(4) - 2(-2) + 5', why: 'Exponents first: $(-2)^2 = (-2)(-2) = 4$.' },
            { tex: '= 12 + 4 + 5', why: 'Multiply: $3 \\cdot 4 = 12$ and $-2 \\cdot (-2) = +4$ (negative times negative is positive).' },
            { tex: '= 21', why: 'Add from left to right.' },
          ],
          result: 'The expression has value $21$ when $x = -2$.',
        },
        {
          type: 'compare',
          left: {
            title: 'Without parentheses',
            tone: 'bad',
            tex: ['-2^2 = -(2^2) = -4'],
            text: 'Exponents bind tighter than the minus sign, so this squares only the $2$.',
          },
          right: {
            title: 'With parentheses',
            tone: 'good',
            tex: ['(-2)^2 = (-2)(-2) = 4'],
            text: 'This squares the whole number $-2$, which is what substituting $x = -2$ into $x^2$ means.',
          },
        },
        {
          type: 'p',
          text: 'An expression is a little machine: feed in a value of $x$, get out a number. Drag the slider to feed in different inputs and watch the output change.',
        },
        {
          type: 'graph',
          x: [-3, 3],
          y: [-2, 40],
          yStep: 5,
          functions: [{ expr: '3x^2 - 2x + 5', label: '$3x^2 - 2x + 5$' }],
          points: [{ x: 'a', y: '3a^2 - 2a + 5', label: 'input → output' }],
          sliders: [{ name: 'a', min: -3, max: 3, step: 0.5, value: -2, label: '$x$' }],
          readouts: [{ label: 'value of $3x^2 - 2x + 5$:', expr: '3a^2 - 2a + 5', digits: 2 }],
          caption: 'At $x = -2$ the readout shows $21$, matching the worked example. Each point on the curve is one evaluation.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'Evaluate $2x^2 - 3xy + y^2$ when $x = -1$ and $y = 2$.',
      hint: 'Substitute with parentheses: $2(-1)^2 - 3(-1)(2) + (2)^2$.',
      answer: '12',
      explanation: '$2(-1)^2 = 2 \\cdot 1 = 2$; $-3(-1)(2) = +6$; $(2)^2 = 4$. Total: $2 + 6 + 4 = 12$. The most common wrong answer is $0$, from treating $-3xy$ as $-6$ — forgetting that $x$ itself is negative.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Like terms',
      blocks: [
        {
          type: 'definition',
          term: 'Like terms',
          text: '[[like-terms|Like terms]] have **exactly the same variable part**: the same variables raised to the same powers. Only their coefficients may differ. $5x^2$ and $-3x^2$ are like terms; $5x^2$ and $5x$ are not; $2xy$ and $7yx$ are (multiplication order doesn\'t matter).',
        },
        {
          type: 'p',
          text: 'Like terms can be combined into a single term by adding their coefficients: $5x^2 + (-3x^2) = 2x^2$. Unlike terms cannot be merged — $3x + 2x^2$ is already as simple as it gets.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why adding coefficients works',
          text: 'It is the [[distributive-property]] run backwards: $5x^2 + (-3x^2) = (5 + (-3))x^2 = 2x^2$. That step needs the **whole** variable part to be shared. In $3x + 2x^2$ the most you can pull out is $x$, leaving $x(3 + 2x)$ — the parentheses still hold two unlike pieces, so there is no single coefficient to add up.',
        },
        {
          type: 'callout',
          variant: 'analogy',
          title: 'Units',
          text: 'Think of the variable part as a unit. $3$ apples $+ 2$ apples $= 5$ apples, but $3$ apples $+ 2$ crates of apples is not "$5$ apple-crates". Likewise $x$ (a length) and $x^2$ (an area) are different kinds of quantity.',
        },
        {
          type: 'compare',
          left: {
            title: 'Wrong',
            tone: 'bad',
            tex: ['3x + 2x^2 = 5x^3', '4x + 3 = 7x'],
          },
          right: {
            title: 'Right',
            tone: 'good',
            tex: ['3x + 2x^2 \\text{ stays as is}', '4x + 3 \\text{ stays as is}'],
          },
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Test it with a number',
          text: 'Not sure if a simplification is legal? Plug in $x = 2$. $3(2) + 2(2)^2 = 14$, but $5(2)^3 = 40$. Different values, so the "simplification" was wrong. A correct simplification gives the same value for **every** input.',
        },
      ],
    },
    {
      kind: 'truefalse',
      prompt: '$3x^2y$ and $5xy^2$ are like terms, so $3x^2y + 5xy^2 = 8x^2y^2$.',
      answer: false,
      explanation: 'Both terms contain $x$ and $y$, but with different powers: $x^2y$ versus $xy^2$. Like terms need *identical* variable parts. Check with numbers: at $x = 1, y = 2$ the left side is $3(1)(2) + 5(1)(4) = 26$, but $8(1)(4) = 32$. The expression $3x^2y + 5xy^2$ is already fully simplified.',
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'concept',
      title: 'Combining like terms',
      blocks: [
        {
          type: 'p',
          text: 'To simplify an expression, group the like terms (each carrying its sign), then add the coefficients in each group. Finally write the result in **standard form**: highest power first, constant last.',
        },
        {
          type: 'derivation',
          title: 'Simplify $4x^2 + 3x - 7 - x^2 + 5x + 2$',
          steps: [
            { tex: '4x^2 + 3x + (-7) + (-x^2) + 5x + 2', why: 'Read subtraction as adding a negative, so every term carries its own sign.' },
            { tex: '= (4x^2 - x^2) + (3x + 5x) + (-7 + 2)', why: 'Commutative and associative properties: reorder and group the like terms.' },
            { tex: '= (4 - 1)x^2 + (3 + 5)x + (-5)', why: 'Distributive property: add the coefficients within each group. Remember $-x^2$ has coefficient $-1$.' },
            { tex: '= 3x^2 + 8x - 5', why: 'Write in standard form, highest power first.' },
          ],
          result: 'Six terms collapse to three: $3x^2 + 8x - 5$.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Cross them off as you go',
          text: 'On paper, underline all the $x^2$ terms once, the $x$ terms twice and box the constants. Count terms before and after: every original term must land in exactly one group.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Compilers do this too',
          text: 'An optimizing compiler rewrites `a*x + b*x` as `(a + b)*x` when it can prove the result is identical — one multiplication instead of two. It is the same distributive law. (For floating-point numbers the compiler is more careful, because rounding means the two forms can differ in the last bits.)',
        },
      ],
    },
    {
      kind: 'expr',
      prompt: 'Simplify by combining like terms.',
      tex: '6a - 2b + 3 - a + 7b - 8',
      variables: ['a', 'b'],
      answer: '5a + 5b - 5',
      answerTex: '5a + 5b - 5',
      hint: 'Three groups: the $a$ terms, the $b$ terms and the constants. $-a$ has coefficient $-1$.',
      explanation: '$a$ terms: $6a - a = 5a$. $b$ terms: $-2b + 7b = 5b$. Constants: $3 - 8 = -5$. So the expression simplifies to $5a + 5b - 5$ (which also equals $5(a + b - 1)$ — either form is accepted).',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Clearing parentheses with the distributive property',
      blocks: [
        {
          type: 'theorem',
          name: 'Distributive property',
          tex: 'a(b + c) = ab + ac \\qquad a(b - c) = ab - ac',
          text: 'The factor outside multiplies **every** term inside.',
        },
        {
          type: 'p',
          text: 'Many expressions hide like terms inside parentheses. Distribute first to release them, then combine. A minus sign in front of parentheses is just a factor of $-1$: $-(x - 2) = -1 \\cdot x + (-1)(-2) = -x + 2$.',
        },
        {
          type: 'derivation',
          title: 'Simplify $3(2x - 5) - 4(x - 2)$',
          steps: [
            { tex: '3(2x - 5) + (-4)(x - 2)', why: 'Attach the minus sign to the $4$: we are distributing $-4$, not $4$.' },
            { tex: '= 6x - 15 + (-4)(x) + (-4)(-2)', why: 'Distribute $3$ over $2x - 5$, and $-4$ over both terms of $x - 2$.' },
            { tex: '= 6x - 15 - 4x + 8', why: '$(-4)(-2) = +8$. This sign flip is the step people most often miss.' },
            { tex: '= (6x - 4x) + (-15 + 8)', why: 'Group the like terms.' },
            { tex: '= 2x - 7', why: 'Add the coefficients in each group.' },
          ],
          result: '$3(2x - 5) - 4(x - 2) = 2x - 7$. Check at $x = 0$: $3(-5) - 4(-2) = -15 + 8 = -7$ ✓.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Distribute the minus to every term',
          text: 'In $5x - 2(3x - 4)$ the $-2$ multiplies *both* $3x$ and $-4$, giving $-6x + 8$. Writing $-6x - 4$ (forgot to multiply $4$) or $-6x - 8$ (forgot the sign flip) are the two classic errors.',
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'Simplification questions are graded on the final form, but partial credit lives in the middle lines. Show the distributed line explicitly — "$-4(x - 2) = -4x + 8$" — so an instructor can see you handled the sign.',
        },
      ],
    },
    {
      kind: 'error',
      prompt: 'A student simplifies $5x - 2(3x - 4)$. Tap the first line that is wrong.',
      lines: [
        '$5x - 2(3x - 4)$',
        '$= 5x - 6x - 8$',
        '$= -x - 8$',
      ],
      errorLines: [2],
      explanation: 'Line 2 distributes $-2$ over $3x$ correctly but not over $-4$: $(-2)(-4) = +8$, not $-8$. The correct work is $5x - 6x + 8 = -x + 8$. Line 3 combines like terms correctly — on the wrong expression.',
    },
    {
      kind: 'expr',
      prompt: 'Simplify completely and write the answer in standard form.',
      tex: '2(3x^2 - x + 4) - (x^2 - 5x + 1)',
      answer: '5x^2 + 3x + 7',
      answerTex: '5x^2 + 3x + 7',
      hint: 'The minus in front of the second parentheses flips the sign of all three terms inside.',
      explanation: 'Distribute: $6x^2 - 2x + 8 - x^2 + 5x - 1$. Then combine: $x^2$ terms $6 - 1 = 5$, $x$ terms $-2 + 5 = 3$, constants $8 - 1 = 7$. Result: $5x^2 + 3x + 7$.',
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'concept',
      title: 'From words (and code) to expressions',
      blocks: [
        {
          type: 'p',
          text: 'Word problems and program specs describe expressions in English. Translate phrase by phrase, and use parentheses whenever a whole group is acted on.',
        },
        {
          type: 'table',
          headers: ['Words', 'Expression'],
          rows: [
            ['five less than twice a number', '$2n - 5$'],
            ['twice the result of subtracting a number from five', '$2(5 - n)$'],
            ['the product of $3$ and the sum of $x$ and $4$', '$3(x + 4)$'],
            ['the square of a number, decreased by $7$', '$n^2 - 7$'],
            ['the average of $a$ and $b$', '$\\frac{a + b}{2}$'],
          ],
          caption: '"Less than" reverses the order: "$5$ less than $2n$" is $2n - 5$, not $5 - 2n$.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Algebra notation vs. code notation',
          text: 'Code has no implicit multiplication — $3x$ must be written `3*x`. And in C, C++, Java and C# the caret `^` is **bitwise XOR**, not a power. Write $x^2$ as `x*x` (fast and exact for integers) or `std::pow(x, 2)`.',
        },
        {
          type: 'code',
          title: 'evaluate.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdio>

int main() {
    int x = -2;
    int good = 3 * x * x - 2 * x + 5;       // 3x^2 - 2x + 5
    int oops = 3 * (x ^ 2) - 2 * x + 5;     // ^ is XOR, not a power!
    double viaPow = 3 * std::pow(x, 2) - 2 * x + 5;
    std::printf("good = %d, oops = %d, viaPow = %.1f\\n", good, oops, viaPow);
}`,
          output: 'good = 21, oops = -3, viaPow = 21.0',
          annotations: [
            { lines: 6, text: 'The expression from the evaluation card, written with explicit `*`. It gives $21$, as we computed by hand.' },
            { lines: 7, text: '`x ^ 2` flips one bit of $-2$ and produces $-4$, so the whole expression becomes $3(-4) + 4 + 5 = -3$. It compiles without complaint.' },
            { lines: 8, text: '`std::pow` from `<cmath>` computes real powers and returns a `double`.' },
          ],
        },
      ],
    },
    {
      kind: 'mcq',
      prompt: 'Which expression means "twice the difference of a number $n$ and $7$"?',
      options: [
        { text: '$2n - 7$', why: 'This doubles only $n$ and then subtracts $7$: "seven less than twice a number".' },
        { text: '$2(7 - n)$', why: '"The difference of $n$ and $7$" means $n - 7$, in that order.' },
        { text: '$2(n - 7)$', correct: true, why: '"The difference of $n$ and $7$" is $n - 7$, and "twice" applies to the whole difference, so it needs parentheses.' },
        { text: '$(n - 7)^2$', why: '"Twice" means multiply by $2$, not square.' },
      ],
      explanation: 'Translate inside-out: "the difference of $n$ and $7$" is the group $(n - 7)$; "twice" that group is $2(n - 7) = 2n - 14$. Without parentheses, $2n - 7$ is a different expression — at $n = 10$ they give $6$ and $13$.',
    },
    {
      kind: 'fill',
      prompt: 'Complete the description of the expression $-4x^3 + x - 9$.',
      template: 'The coefficient of $x^3$ is ___, the coefficient of $x$ is ___, and the constant term is ___.',
      blanks: [{ answers: ['$-4$'] }, { answers: ['$1$'] }, { answers: ['$-9$'] }],
      wordBank: ['$-4$', '$4$', '$1$', '$0$', '$-9$', '$9$', '$3$'],
      explanation: 'Rewrite as a sum: $(-4)x^3 + 1x + (-9)$. The signs belong to the terms, so the coefficient of $x^3$ is $-4$ and the constant is $-9$. The $x$ term has an invisible coefficient of $1$. The $3$ is an exponent, not a coefficient.',
    },
  ],
  takeaways: [
    'An expression is a recipe that produces a value; an equation claims two expressions are equal.',
    'Each term carries its own sign. A bare $x$ has coefficient $1$, and $-x$ has coefficient $-1$.',
    'When evaluating, wrap substituted values in parentheses: $(-2)^2 = 4$ but $-2^2 = -4$.',
    'Like terms have identical variable parts; combine them by adding coefficients — it is the distributive property in reverse.',
    'A factor in front of parentheses (including a minus sign) multiplies every term inside.',
    'In code, multiplication is always explicit and `^` is XOR, not a power.',
  ],
  reading: [
    {
      title: 'OpenStax College Algebra 2e — 1.4 Polynomials',
      url: 'https://openstax.org/books/college-algebra-2e/pages/1-4-polynomials',
      source: 'openstax',
      note: 'Covers terms, coefficients and combining like terms, leading straight into the next lesson.',
    },
    {
      title: 'OpenStax College Algebra 2e — 1.1 Real Numbers: Algebra Essentials',
      url: 'https://openstax.org/books/college-algebra-2e/pages/1-1-real-numbers-algebra-essentials',
      source: 'openstax',
      note: 'The section on evaluating and simplifying algebraic expressions has many extra practice problems.',
    },
    {
      title: 'Khan Academy — Algebra 1',
      url: 'https://www.khanacademy.org/math/algebra',
      source: 'khan',
      note: 'The "Algebraic expressions" unit has short videos and unlimited practice on like terms and the distributive property.',
    },
  ],
};
