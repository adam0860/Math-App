import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'alg-order-of-operations',
  title: 'Order of Operations and Number Properties',
  summary: 'Why $2 + 3 \\cdot 4$ is $14$, why $-3^2$ is $-9$, and the handful of properties that justify every algebra move you will ever make.',
  minutes: 16,
  objectives: [
    'Evaluate expressions using the order of operations, including nested grouping and fraction bars',
    'Distinguish $-a^2$ from $(-a)^2$ and evaluate each correctly',
    'Name and use the commutative, associative, identity and inverse properties',
    'Explain why subtraction and division are not commutative or associative',
    'Apply the distributive property to expand and simplify expressions',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'One expression, one value',
      blocks: [
        {
          type: 'p',
          text: 'What is $2 + 3 \\cdot 4$? Working left to right gives $5 \\cdot 4 = 20$; doing the multiplication first gives $2 + 12 = 14$. Mathematics cannot tolerate an expression with two values, so everyone agrees on a convention: the [[order-of-operations]].',
        },
        {
          type: 'steps',
          items: [
            { title: 'Grouping', text: 'Simplify inside parentheses $( )$, brackets $[ ]$, absolute-value bars $| |$, radicals and above/below a fraction bar — innermost first.' },
            { title: 'Exponents', text: 'Evaluate powers (and roots).' },
            { title: 'Multiplication and division', text: 'These share **one** level. Do them left to right, whichever comes first.' },
            { title: 'Addition and subtraction', text: 'Also one shared level, again left to right.' },
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'PEMDAS is not six levels',
          text: 'The mnemonic PEMDAS (or BODMAS, GEMDAS) lists M before D and A before S, but those pairs are **ties** resolved left to right. $8 \\div 2 \\cdot 4 = 4 \\cdot 4 = 16$, not $8 \\div 8 = 1$. And $10 - 3 + 2 = 9$, not $10 - 5 = 5$.',
        },
        {
          type: 'derivation',
          title: 'Evaluate $20 - 6 \\div 3 \\cdot 2^2 + 1$',
          steps: [
            { tex: '20 - 6 \\div 3 \\cdot 2^2 + 1', why: 'No grouping symbols, so start with exponents.' },
            { tex: '= 20 - 6 \\div 3 \\cdot 4 + 1', why: '$2^2 = 4$.' },
            { tex: '= 20 - 2 \\cdot 4 + 1', why: 'Multiplication and division tie, so go left to right: the division $6 \\div 3$ comes first.' },
            { tex: '= 20 - 8 + 1', why: 'Then $2 \\cdot 4 = 8$.' },
            { tex: '= 12 + 1 = 13', why: 'Addition and subtraction tie: left to right, $20 - 8 = 12$ first, then $+1$.' },
          ],
          result: 'The value is $13$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why multiplication outranks addition',
          text: 'It is a convention, but a well-motivated one. Multiplication is repeated addition, so $3 \\cdot 4$ is a single "bundle" ($4 + 4 + 4$) that should be treated as one quantity. Algebra relies on this constantly: in $3x^2 + 2x + 7$ we want "three times $x$-squared" to be one term *without* writing $(3(x^2)) + (2x) + 7$. The order of operations is what lets polynomials be written compactly.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'numeric',
      prompt: 'Evaluate $20 - 12 \\div 4 \\cdot 2$.',
      hint: 'Division and multiplication tie: work left to right.',
      answer: '14',
      explanation: 'Left to right among $\\div$ and $\\cdot$: $12 \\div 4 = 3$, then $3 \\cdot 2 = 6$. Finally $20 - 6 = 14$. If you got $18.5$, you multiplied $4 \\cdot 2$ first and computed $20 - 12 \\div 8$; if you got $4$, you subtracted $20 - 12$ first and computed $8 \\div 4 \\cdot 2$.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Grouping symbols and the fraction bar',
      blocks: [
        {
          type: 'p',
          text: 'Grouping symbols override the usual order: whatever is inside is computed first. When groups are nested, start with the **innermost** and work outward. Brackets $[\\ ]$ are just parentheses in a different shape, used to make nesting easier to read.',
        },
        {
          type: 'derivation',
          title: 'Evaluate $2\\left[5 + 3(4 - 1)^2\\right] - 10 \\div 5$',
          steps: [
            { tex: '2\\left[5 + 3(4 - 1)^2\\right] - 10 \\div 5', why: 'The innermost group is $(4 - 1)$.' },
            { tex: '= 2\\left[5 + 3 \\cdot 3^2\\right] - 10 \\div 5', why: '$4 - 1 = 3$.' },
            { tex: '= 2\\left[5 + 3 \\cdot 9\\right] - 10 \\div 5', why: 'Still inside the brackets: exponents come next, $3^2 = 9$.' },
            { tex: '= 2\\left[5 + 27\\right] - 10 \\div 5', why: 'Inside the brackets, multiply before adding.' },
            { tex: '= 2 \\cdot 32 - 10 \\div 5', why: 'The brackets are now a single number.' },
            { tex: '= 64 - 2', why: 'Multiplication and division before subtraction.' },
            { tex: '= 62', why: 'Last, subtract.' },
          ],
          result: 'The value is $62$.',
        },
        {
          type: 'p',
          text: 'A **fraction bar is a grouping symbol** too: it means "(everything on top) divided by (everything on the bottom)". So you simplify the numerator and the denominator completely, then divide.',
        },
        {
          type: 'math',
          tex: '\\frac{12 - 4 \\cdot 2}{1 + 3} = \\frac{12 - 8}{4} = \\frac{4}{4} = 1',
          caption: 'Written on one line, this is $(12 - 4 \\cdot 2) \\div (1 + 3)$ — the parentheses are required.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'The fraction bar in code',
          text: 'Code has no fraction bar, so you must type the hidden parentheses. `(a + b) / 2` is the average of `a` and `b`; `a + b / 2` is $a + \\frac{b}{2}$. Forgetting these parentheses is one of the most common bugs when translating formulas into C++, especially in formulas like the quadratic formula `(-b + sqrt(d)) / (2 * a)`.',
        },
        {
          type: 'callout',
          variant: 'exam',
          title: 'About the viral $6 \\div 2(1 + 2)$',
          text: 'Under the standard convention it is $6 \\div 2 \\cdot 3 = 3 \\cdot 3 = 9$. Some people read "$2(1+2)$" as one tight unit and get $1$, which is why careful writers never produce such expressions. On exams, write division as a fraction ($\\frac{6}{2(1+2)}$ or $\\frac{6}{2}(1+2)$) so there is nothing to argue about.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'numeric',
      prompt: 'Evaluate the expression.',
      tex: '\\frac{4 + 2 \\cdot 3^2}{10 - 2 \\cdot 4}',
      hint: 'Simplify the whole numerator and the whole denominator first. In each, exponents come before multiplication.',
      answer: '11',
      explanation: 'Numerator: $3^2 = 9$, then $2 \\cdot 9 = 18$, then $4 + 18 = 22$. Denominator: $2 \\cdot 4 = 8$, then $10 - 8 = 2$. So the value is $\\frac{22}{2} = 11$. A common slip is $(2 \\cdot 3)^2 = 36$ — but the exponent applies only to the $3$.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'order',
      prompt: 'Put the lines of this evaluation of $18 \\div 3^2 \\cdot (7 - 4) + 1$ in order.',
      lines: [
        '$18 \\div 3^2 \\cdot (7 - 4) + 1$',
        '$= 18 \\div 3^2 \\cdot 3 + 1$',
        '$= 18 \\div 9 \\cdot 3 + 1$',
        '$= 2 \\cdot 3 + 1$',
        '$= 6 + 1$',
        '$= 7$',
      ],
      distractors: ['$= 18 \\div 27 + 1$'],
      explanation: 'Grouping first ($7 - 4 = 3$), then the exponent ($3^2 = 9$), then division and multiplication **left to right** ($18 \\div 9 = 2$, then $2 \\cdot 3 = 6$), then addition. The distractor multiplies $9 \\cdot 3$ before dividing, which breaks the left-to-right rule.',
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'concept',
      title: 'Exponents and negative signs',
      blocks: [
        {
          type: 'p',
          text: 'An exponent applies only to the thing **immediately** to its left. That single rule settles the most common sign mistake in algebra:',
        },
        {
          type: 'compare',
          left: {
            title: '$-3^2$: the exponent sees only $3$',
            tone: 'neutral',
            tex: ['-3^2 = -(3 \\cdot 3) = -9'],
            text: 'Read it as "the opposite of $3^2$".',
          },
          right: {
            title: '$(-3)^2$: the exponent sees $-3$',
            tone: 'neutral',
            tex: ['(-3)^2 = (-3)(-3) = 9'],
            text: 'The parentheses put the sign inside the base.',
          },
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why $-3^2$ is $-9$, not $9$',
          text: 'A leading minus sign means "multiply by $-1$": $-3^2 = -1 \\cdot 3^2$. Exponents come before multiplication, so the squaring happens first. This is also what makes algebra consistent: we want $-x^2$ to mean $-(x^2)$, so that $-x^2$ at $x = 3$ is $-9$. If $-x^2$ meant $(-x)^2$, it would be the same as $x^2$ and the minus sign would be pointless.',
        },
        {
          type: 'derivation',
          title: 'Evaluate $-3^2 + (-3)^2 - (-2)^3$',
          steps: [
            { tex: '-3^2 + (-3)^2 - (-2)^3', why: 'No operations inside the parentheses, so start with the three powers.' },
            { tex: '= -9 + (-3)^2 - (-2)^3', why: '$-3^2 = -(3^2) = -9$.' },
            { tex: '= -9 + 9 - (-2)^3', why: '$(-3)^2 = (-3)(-3) = 9$: a negative times a negative is positive.' },
            { tex: '= -9 + 9 - (-8)', why: '$(-2)^3 = (-2)(-2)(-2) = 4 \\cdot (-2) = -8$: an **odd** power of a negative stays negative.' },
            { tex: '= 0 + 8 = 8', why: 'Subtracting $-8$ is adding $8$.' },
          ],
          result: 'The value is $8$.',
        },
        {
          type: 'p',
          text: 'Here is the same idea in C++, plus two other traps that bite programmers: `^` is not "power", and dividing two `int`s throws away the remainder.',
        },
        {
          type: 'code',
          title: 'precedence.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdio>

int main() {
    std::printf("%d\\n", 2 + 3 * 4);       // * before +
    std::printf("%d\\n", 8 / 2 * 4);       // left to right
    std::printf("%g\\n", -std::pow(3, 2)); // -(3^2)
    std::printf("%g\\n", std::pow(-3, 2)); // (-3)^2
    std::printf("%d\\n", -3 ^ 2);          // NOT a power!
    std::printf("%d\\n", 7 / 2);           // integer division
}`,
          output: `14
16
-9
9
-1
3`,
          annotations: [
            { lines: 5, text: 'C++ uses the same precedence as math: $2 + 12 = 14$.' },
            { lines: 6, text: '`/` and `*` tie and run left to right: $(8 / 2) \\cdot 4 = 16$.' },
            { lines: '7-8', text: '`std::pow` makes the base explicit, so there is no ambiguity about the sign.' },
            { lines: 9, text: 'In C++, `^` is bitwise XOR, not exponentiation. `-3 ^ 2` flips one bit of $-3$ and gives $-1$.' },
            { lines: 10, text: 'Both operands are `int`, so the result is truncated to $3$. Write `7.0 / 2` to get $3.5$.' },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'mcq',
      prompt: 'Evaluate $-2^4$.',
      options: [
        { text: '$16$', why: 'This is $(-2)^4$. Without parentheses, the exponent applies only to the $2$.' },
        { text: '$-8$', why: 'This multiplies $2 \\cdot 4$ instead of raising $2$ to the fourth power.' },
        { text: '$-16$', correct: true, why: '$-2^4 = -(2^4) = -(2 \\cdot 2 \\cdot 2 \\cdot 2) = -16$.' },
        { text: '$8$', why: 'Exponents mean repeated multiplication, not multiplication by the exponent.' },
      ],
      explanation: 'The exponent binds tighter than the leading minus sign, so raise the $2$ to the fourth power first: $2^4 = 16$, then apply the minus: $-16$. Compare $(-2)^4 = 16$, where the minus sign is part of the base.',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'error',
      prompt: 'A student evaluates $30 - 8 \\div 2 \\cdot 4 + 1$. Tap the first line that is wrong.',
      lines: [
        '$30 - 8 \\div 2 \\cdot 4 + 1$',
        '$= 30 - 8 \\div 8 + 1$',
        '$= 30 - 1 + 1$',
        '$= 30$',
      ],
      errorLines: [2],
      explanation: 'Line 2 does the multiplication $2 \\cdot 4$ before the division, because "M comes before D in PEMDAS". They are tied and go left to right: $8 \\div 2 = 4$, then $4 \\cdot 4 = 16$. The correct value is $30 - 16 + 1 = 15$.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'concept',
      title: 'The properties behind every algebra move',
      blocks: [
        {
          type: 'p',
          text: 'When you rearrange or regroup terms, you are using a small set of properties of real numbers. College instructors often ask you to *name* them, because they are the justification for every step of a proof or a derivation.',
        },
        {
          type: 'table',
          headers: ['Property', 'Addition', 'Multiplication'],
          rows: [
            ['[[commutative-property|Commutative]] (order does not matter)', '$a + b = b + a$', '$ab = ba$'],
            ['[[associative-property|Associative]] (grouping does not matter)', '$(a + b) + c = a + (b + c)$', '$(ab)c = a(bc)$'],
            ['[[identity-element|Identity]]', '$a + 0 = a$', '$a \\cdot 1 = a$'],
            ['Inverse', '$a + (-a) = 0$', '$a \\cdot \\frac{1}{a} = 1$ for $a \\ne 0$'],
          ],
          caption: '$-a$ is the *additive inverse* (opposite) of $a$; $\\frac{1}{a}$ is the *multiplicative inverse* or [[reciprocal]].',
        },
        {
          type: 'derivation',
          title: 'Mental math, justified: $25 + 38 + 75$ and $4 \\cdot 17 \\cdot 25$',
          steps: [
            { tex: '25 + 38 + 75 = 25 + 75 + 38', why: '**Commutative** property of addition: swap $38$ and $75$.' },
            { tex: '= (25 + 75) + 38 = 100 + 38 = 138', why: '**Associative** property: group the friendly pair first.' },
            { tex: '4 \\cdot 17 \\cdot 25 = (4 \\cdot 25) \\cdot 17', why: 'Commutative and associative properties of multiplication.' },
            { tex: '= 100 \\cdot 17 = 1700', why: 'Now the multiplication is trivial.' },
          ],
          result: 'Rearranging is legal for sums and products — and that is exactly what makes it a tool.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why subtraction and division do not get these properties',
          text: 'One counterexample is enough to break a rule. $5 - 3 = 2$ but $3 - 5 = -2$, so subtraction is not commutative; $(8 - 4) - 2 = 2$ but $8 - (4 - 2) = 6$, so it is not associative. Division fails the same way: $(16 \\div 4) \\div 2 = 2$ but $16 \\div (4 \\div 2) = 8$. The fix is to **rewrite** them: $a - b = a + (-b)$ and $a \\div b = a \\cdot \\frac{1}{b}$. Once subtraction is "adding the opposite", you may rearrange freely: $5 - 3 = 5 + (-3) = (-3) + 5$.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Why zero has no reciprocal',
          text: 'A reciprocal of $0$ would be a number $r$ with $0 \\cdot r = 1$. But $0$ times anything is $0$, so no such $r$ exists. That is the real reason division by zero is undefined: dividing by $0$ would mean multiplying by a reciprocal that does not exist.',
        },
      ],
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'truefalse',
      prompt: 'Subtraction is associative: $(a - b) - c = a - (b - c)$ for all real numbers $a, b, c$.',
      answer: false,
      explanation: 'Try $a = 8$, $b = 4$, $c = 2$: $(8 - 4) - 2 = 2$ but $8 - (4 - 2) = 6$. In fact $a - (b - c) = a - b + c$, which matches $(a - b) - c$ only when $c = 0$. Rewriting as addition, $a + (-b) + (-c)$, is what lets you regroup safely.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'The distributive property',
      blocks: [
        {
          type: 'p',
          text: 'The [[distributive-property]] is the one property that connects multiplication with addition. It is the engine behind expanding, factoring, and combining like terms.',
        },
        {
          type: 'theorem',
          name: 'Distributive property',
          tex: 'a(b + c) = ab + ac \\qquad a(b - c) = ab - ac',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why it is true: an area picture',
          text: 'Take a rectangle of height $a$ and width $b + c$. Its area is $a(b + c)$. Now cut it into two rectangles of widths $b$ and $c$: their areas are $ab$ and $ac$. Cutting a rectangle does not change the total area, so $a(b + c) = ab + ac$. In counting terms: $3$ bags each holding $2$ apples and $5$ oranges contain $3 \\cdot 2$ apples and $3 \\cdot 5$ oranges.',
        },
        {
          type: 'derivation',
          title: 'Simplify $5(2x - 3) - (x - 4)$',
          steps: [
            { tex: '5(2x - 3) - (x - 4)', why: 'Two groups to distribute. The second is multiplied by an invisible $-1$.' },
            { tex: '= 10x - 15 - (x - 4)', why: 'Distribute $5$: $5 \\cdot 2x = 10x$ and $5 \\cdot 3 = 15$.' },
            { tex: '= 10x - 15 - x + 4', why: 'Distribute $-1$: it changes the sign of **every** term inside, so $-(-4) = +4$.' },
            { tex: '= (10x - x) + (-15 + 4)', why: 'Commutative and associative properties: gather the $x$-terms and the constants.' },
            { tex: '= 9x - 11', why: 'Combine: $10x - x = 9x$ (distributive again: $10x - 1x = (10 - 1)x$) and $-15 + 4 = -11$.' },
          ],
          result: '$5(2x - 3) - (x - 4) = 9x - 11$.',
        },
        {
          type: 'p',
          text: 'Two expressions that are equal for **every** value of $x$ have identical graphs. Drag the sliders: the expanded form always lies exactly on top of $a(x + b)$, while the "forgot to distribute" version $ax + b$ peels away.',
        },
        {
          type: 'graph',
          x: [-5, 5],
          y: [-8, 8],
          functions: [
            { expr: 'a(x + b)', label: '$y = a(x + b)$', color: 'blue' },
            { expr: 'a x + a b', label: '$y = ax + ab$ (correct)', color: 'green', dashed: true },
            { expr: 'a x + b', label: '$y = ax + b$ (wrong)', color: 'red', dashed: true },
          ],
          sliders: [
            { name: 'a', min: -3, max: 3, step: 0.5, value: 2, label: '$a$' },
            { name: 'b', min: -3, max: 3, step: 0.5, value: 1.5, label: '$b$' },
          ],
          caption: 'The green dashed line hides perfectly on the blue one. The red line only agrees when $a = 1$ or $b = 0$ — a mistake that "works sometimes" is still a mistake.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Distribute over + and −, not over ·',
          text: '$2(3 \\cdot 4)$ is $24$, not $(2 \\cdot 3)(2 \\cdot 4) = 48$. Multiplication distributes over **addition and subtraction** only. A factor in front of a product multiplies just one of the factors.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Mental math with the distributive property',
          text: '$7 \\cdot 98 = 7(100 - 2) = 700 - 14 = 686$. Rewriting a number as a friendly sum or difference and distributing is how fast mental arithmetic works.',
        },
      ],
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'expr',
      prompt: 'Use the distributive property to simplify $3(2x - 5) - 4(x - 1)$. Write your answer in the form $mx + b$.',
      hint: 'Distribute $3$ and $-4$ (including the sign!), then combine like terms.',
      label: 'simplified:',
      answer: '2x - 11',
      answerTex: '2x - 11',
      explanation: '$3(2x - 5) = 6x - 15$ and $-4(x - 1) = -4x + 4$ (the $-4$ times $-1$ gives $+4$). Adding: $6x - 4x - 15 + 4 = 2x - 11$. The usual mistake is $-4(x - 1) = -4x - 4$, which leads to $2x - 19$.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'fill',
      prompt: 'Name the property used in each statement.',
      template: '$3 + (4 + x) = (3 + 4) + x$ uses the ___ property, $5(x + 2) = 5x + 10$ uses the ___ property, and $x \\cdot 7 = 7x$ uses the ___ property.',
      blanks: [{ answers: ['associative'] }, { answers: ['distributive'] }, { answers: ['commutative'] }],
      wordBank: ['associative', 'distributive', 'commutative', 'identity', 'inverse'],
      explanation: 'Moving the parentheses without changing the order is **associative**; multiplying a factor across a sum is **distributive**; swapping the order of a product is **commutative**. Identity would be something like $x + 0 = x$, and inverse something like $x + (-x) = 0$.',
    },
  ],
  takeaways: [
    'Order of operations: grouping, exponents, then multiplication/division **left to right**, then addition/subtraction **left to right**.',
    'Fraction bars, absolute-value bars and radicals are grouping symbols; in code you must write their hidden parentheses.',
    '$-a^2 = -(a^2)$, while $(-a)^2 = a^2$; odd powers of a negative are negative.',
    'Addition and multiplication are commutative and associative; subtraction and division are not — rewrite them as adding the opposite and multiplying by the reciprocal.',
    'The distributive property $a(b + c) = ab + ac$ (an area fact) powers expanding and combining like terms; a minus sign in front of parentheses flips every sign inside.',
  ],
  reading: [
    {
      title: 'OpenStax College Algebra 2e — 1.1 Real Numbers: Algebra Essentials',
      url: 'https://openstax.org/books/college-algebra-2e/pages/1-1-real-numbers-algebra-essentials',
      source: 'openstax',
      note: 'Covers the order of operations and the properties of real numbers with plenty of practice problems.',
    },
    {
      title: 'Wikipedia — Order of operations',
      url: 'https://en.wikipedia.org/wiki/Order_of_operations',
      source: 'wikipedia',
      note: 'History of the convention, mnemonics around the world, and the debate over expressions like $6 \\div 2(1+2)$.',
    },
    {
      title: 'cppreference — C++ operator precedence',
      url: 'https://en.cppreference.com/w/cpp/language/operator_precedence',
      source: 'other',
      note: 'The full precedence table for C++, useful whenever you translate a formula into code.',
    },
  ],
};
