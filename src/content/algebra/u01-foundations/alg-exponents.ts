import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'alg-exponents',
  title: 'Exponent Rules and Scientific Notation',
  summary: 'Every exponent rule comes from counting factors — including why $a^0 = 1$ and $a^{-n} = \\frac{1}{a^n}$.',
  minutes: 17,
  objectives: [
    'Derive and apply the product, quotient and power rules for exponents',
    'Explain why $a^0 = 1$ and why $a^{-n} = \\frac{1}{a^n}$ for $a \\ne 0$',
    'Simplify expressions with integer exponents so that no negative exponents remain',
    'Avoid the classic error $(a + b)^2 = a^2 + b^2$',
    'Convert numbers to and from scientific notation and compute with them',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Exponents count factors',
      blocks: [
        {
          type: 'p',
          text: 'An [[exponent]] is shorthand for repeated multiplication. In $a^n$, the [[base]] $a$ is the number being multiplied and the exponent $n$ counts how many copies of it there are:',
        },
        {
          type: 'math',
          tex: 'a^n = \\underbrace{a \\cdot a \\cdots a}_{n \\text{ factors}} \\qquad 2^5 = 2 \\cdot 2 \\cdot 2 \\cdot 2 \\cdot 2 = 32',
          caption: 'For now $n$ is a positive whole number. By the end of this lesson it will be any integer; next lesson, any fraction.',
        },
        {
          type: 'p',
          text: 'Every exponent rule follows from this one picture: just count the factors. Multiplying $a^3$ by $a^2$ strings together $3 + 2$ copies of $a$. Dividing cancels copies from the top against copies on the bottom.',
        },
        {
          type: 'derivation',
          title: 'Where the product and quotient rules come from',
          steps: [
            { tex: 'a^3 \\cdot a^2 = (a \\cdot a \\cdot a)(a \\cdot a)', why: 'Write out each power as its factors.' },
            { tex: '= a \\cdot a \\cdot a \\cdot a \\cdot a = a^5 = a^{3 + 2}', why: 'The associative property lets us drop the parentheses; there are now $3 + 2 = 5$ factors.' },
            { tex: '\\frac{a^5}{a^2} = \\frac{a \\cdot a \\cdot a \\cdot \\cancel{a} \\cdot \\cancel{a}}{\\cancel{a} \\cdot \\cancel{a}}', why: 'Each $a$ on the bottom cancels one $a$ on top (each $\\frac{a}{a} = 1$; this needs $a \\ne 0$).' },
            { tex: '= a^3 = a^{5 - 2}', why: 'Five factors minus the two that cancelled leaves three.' },
          ],
          result: 'Multiplying powers of the same base adds exponents; dividing subtracts them.',
        },
        {
          type: 'theorem',
          name: 'Product and quotient rules',
          tex: 'a^m \\cdot a^n = a^{m + n} \\qquad \\frac{a^m}{a^n} = a^{m - n} \\quad (a \\ne 0)',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Same base only',
          text: 'The rules need the **same base**. $2^3 \\cdot 2^4 = 2^7$, but $2^3 \\cdot 3^4$ cannot be combined into one power. And add the exponents — do not multiply the bases: $2^3 \\cdot 2^4 = 2^7 = 128$, not $4^7$.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Powers of two run your computer',
          text: 'An $n$-bit integer has $2^n$ possible values: a byte holds $2^8 = 256$ values, so an 8-bit color channel ranges over $0$–$255$. The product rule explains why doubling sizes is tidy: $2^{10} \\cdot 2^{10} = 2^{20}$, so $1024 \\times 1024$ pixels is about a million. In C++, `1 << n` computes $2^n$ by shifting bits.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'numeric',
      prompt: 'Evaluate $\\dfrac{2^5 \\cdot 2^3}{2^6}$ using the exponent rules.',
      hint: 'Add the exponents on top, then subtract the exponent on the bottom.',
      answer: '4',
      explanation: 'Product rule on top: $2^5 \\cdot 2^3 = 2^{8}$. Quotient rule: $\\frac{2^8}{2^6} = 2^{8 - 6} = 2^2 = 4$. Check the long way: $\\frac{32 \\cdot 8}{64} = \\frac{256}{64} = 4$ ✓. The rules let you skip the big numbers entirely.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'fill',
      prompt: 'Fill in the exponents.',
      template: '$x^3 \\cdot x^4 = x$ to the power ___, and $\\dfrac{x^{10}}{x^4} = x$ to the power ___.',
      blanks: [{ answers: ['$7$'] }, { answers: ['$6$'] }],
      wordBank: ['$7$', '$12$', '$6$', '$\\frac{5}{2}$', '$14$'],
      explanation: 'Multiplying the same base **adds** exponents: $3 + 4 = 7$ (not $3 \\cdot 4 = 12$). Dividing **subtracts**: $10 - 4 = 6$ (not $10 \\div 4$). Writing out $x^3 \\cdot x^4$ as seven $x$s shows why.',
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'concept',
      title: 'Zero and negative exponents',
      blocks: [
        {
          type: 'p',
          text: '"$a^0$ means multiply zero copies of $a$" sounds meaningless, and $a^{-2}$ sounds even worse. Yet both have exactly one sensible value. Watch the pattern as the exponent goes down by $1$: each step **divides by $2$**.',
        },
        {
          type: 'table',
          headers: ['$2^3$', '$2^2$', '$2^1$', '$2^0$', '$2^{-1}$', '$2^{-2}$', '$2^{-3}$'],
          rows: [['$8$', '$4$', '$2$', '$1$', '$\\frac{1}{2}$', '$\\frac{1}{4}$', '$\\frac{1}{8}$']],
          caption: 'Keep dividing by $2$ and the pattern forces $2^0 = 1$ and $2^{-n} = \\frac{1}{2^n}$.',
        },
        {
          type: 'theorem',
          name: 'Zero and negative exponents',
          tex: 'a^0 = 1 \\qquad a^{-n} = \\frac{1}{a^n} \\qquad (a \\ne 0)',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why $a^0 = 1$: keep the rules working',
          text: 'We *choose* definitions so that the rules we already have stay true. The quotient rule says $\\frac{a^5}{a^5} = a^{5 - 5} = a^0$. But any nonzero number divided by itself is $1$. If $a^0$ were anything other than $1$, the quotient rule would break. So $a^0 = 1$ is the only definition consistent with everything else.\n\nThe same reasoning gives negative exponents: the product rule requires $a^{-n} \\cdot a^n = a^{-n + n} = a^0 = 1$, so $a^{-n}$ must be the number that multiplies $a^n$ to make $1$ — its reciprocal, $\\frac{1}{a^n}$.',
        },
        {
          type: 'p',
          text: 'Slide $n$ along the curve $y = 2^x$. Each step left halves the height; at $n = 0$ the height is exactly $1$, and for negative $n$ it stays **positive**, shrinking toward $0$ without ever reaching it.',
        },
        {
          type: 'graph',
          x: [-4, 4],
          y: [-1, 9],
          functions: [{ expr: '2^x', label: '$y = 2^x$', color: 'blue' }],
          points: [{ x: 'n', y: '2^n', label: '(n, 2ⁿ)', color: 'red' }],
          vlines: [{ x: 'n', color: 'gray' }],
          sliders: [{ name: 'n', min: -3, max: 3, step: 1, value: 2, label: 'exponent $n$' }],
          readouts: [{ label: '$2^n =$', expr: '2^n', digits: 4 }],
          caption: 'A negative exponent never makes the result negative. It makes it *small*: $2^{-3} = \\frac{1}{8} = 0.125$.',
        },
        {
          type: 'derivation',
          title: 'Evaluate $\\left(\\frac{3}{5}\\right)^{-2}$ and $7^0 - 4^{-1}$',
          steps: [
            { tex: '\\left(\\frac{3}{5}\\right)^{-2} = \\frac{1}{\\left(\\frac{3}{5}\\right)^2}', why: 'Definition of a negative exponent: the reciprocal of the positive power.' },
            { tex: '= \\frac{1}{\\frac{9}{25}} = \\frac{25}{9}', why: 'Square the fraction ($3^2 = 9$, $5^2 = 25$), then flip. Shortcut: $\\left(\\frac{a}{b}\\right)^{-n} = \\left(\\frac{b}{a}\\right)^n$.' },
            { tex: '7^0 - 4^{-1} = 1 - \\frac{1}{4}', why: 'Any nonzero number to the power $0$ is $1$; $4^{-1}$ is the reciprocal of $4$.' },
            { tex: '= \\frac{3}{4}', why: 'Common denominator: $\\frac{4}{4} - \\frac{1}{4}$.' },
          ],
          result: '$\\left(\\frac{3}{5}\\right)^{-2} = \\frac{25}{9}$ and $7^0 - 4^{-1} = \\frac{3}{4}$.',
        },
        {
          type: 'deepdive',
          title: 'What about $0^0$ and $0^{-1}$?',
          blocks: [
            {
              type: 'p',
              text: '$0^{-1}$ would be $\\frac{1}{0}$, which is undefined, so negative powers of $0$ do not exist. $0^0$ is subtler: the pattern $0^3, 0^2, 0^1 = 0$ suggests $0$, while $a^0 = 1$ suggests $1$. In algebra courses $0^0$ is usually left undefined. In combinatorics and programming (`std::pow(0, 0)` returns `1`) it is defined as $1$ because that makes formulas like the binomial theorem work.',
            },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'truefalse',
      prompt: '$5^{-2}$ is a negative number.',
      answer: false,
      explanation: '$5^{-2} = \\frac{1}{5^2} = \\frac{1}{25} = 0.04$, which is positive. A negative **exponent** means "reciprocal", not "negative". The sign of the result depends on the base: a positive base raised to any integer power is positive.',
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'numeric',
      prompt: 'Evaluate $\\left(\\dfrac{2}{3}\\right)^{-2}$. Give an exact fraction.',
      hint: 'Flip the fraction to make the exponent positive, then square.',
      answer: '9/4',
      answerTex: '\\frac{9}{4}',
      explanation: '$\\left(\\frac{2}{3}\\right)^{-2} = \\left(\\frac{3}{2}\\right)^{2} = \\frac{9}{4}$. Common wrong answers: $-\\frac{4}{9}$ (treating the negative exponent as a negative sign) and $\\frac{4}{9}$ (ignoring the minus in the exponent).',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'Powers of powers, products and quotients',
      blocks: [
        {
          type: 'p',
          text: 'Three more rules handle a power applied to something that is already a power, a product or a quotient. Again, each one is just counting.',
        },
        {
          type: 'theorem',
          name: 'Power rules',
          tex: '(a^m)^n = a^{mn} \\qquad (ab)^n = a^n b^n \\qquad \\left(\\frac{a}{b}\\right)^n = \\frac{a^n}{b^n} \\ (b \\ne 0)',
        },
        {
          type: 'derivation',
          title: 'Why the power rules hold',
          steps: [
            { tex: '(a^4)^3 = a^4 \\cdot a^4 \\cdot a^4', why: 'Cubing means three copies of the base, and here the base is $a^4$.' },
            { tex: '= a^{4 + 4 + 4} = a^{12} = a^{4 \\cdot 3}', why: 'Product rule: adding $4$ three times is multiplying $4 \\cdot 3$.' },
            { tex: '(ab)^3 = (ab)(ab)(ab)', why: 'Three copies of the base $ab$.' },
            { tex: '= (a \\cdot a \\cdot a)(b \\cdot b \\cdot b) = a^3 b^3', why: 'Commutative and associative properties let us regroup the factors.' },
          ],
          result: 'A power of a power multiplies exponents; a power of a product (or quotient) goes to each factor.',
        },
        {
          type: 'compare',
          left: {
            title: 'Powers do NOT distribute over sums',
            tone: 'bad',
            tex: ['(a + b)^2 = a^2 + b^2', '(3 + 4)^2 \\overset{?}{=} 3^2 + 4^2', '49 \\ne 25'],
          },
          right: {
            title: 'Expand the product instead',
            tone: 'good',
            tex: ['(a + b)^2 = (a + b)(a + b)', '= a^2 + 2ab + b^2', '(3 + 4)^2 = 9 + 24 + 16 = 49'],
          },
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why $(ab)^2$ splits but $(a + b)^2$ does not',
          text: 'The rule $(ab)^n = a^n b^n$ relies on **rearranging factors**, which is legal because multiplication is commutative and associative. In $(a + b)^2 = (a + b)(a + b)$ the pieces are *terms*, and multiplying them requires the distributive property, which produces the cross terms $ab + ba = 2ab$. This mistake — sometimes called the "freshman\'s dream" — is the single most common algebra error in calculus courses.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Watch the coefficient',
          text: '$(3x)^2 = 9x^2$, because the square applies to both factors $3$ and $x$. But $3x^2$ means $3 \\cdot x^2$: only the $x$ is squared. Similarly $(-x)^4 = x^4$, but $-x^4 = -(x^4)$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'expr',
      prompt: 'Simplify $(2x^3)^2 \\cdot (x^{-1})^4$ to the form $kx^n$.',
      hint: 'Apply the power to each factor: $(2x^3)^2 = 2^2 (x^3)^2$. Then use the product rule.',
      label: 'simplified:',
      answer: '4x^2',
      answerTex: '4x^2',
      explanation: '$(2x^3)^2 = 2^2 \\cdot x^{3 \\cdot 2} = 4x^6$ and $(x^{-1})^4 = x^{-4}$. Then $4x^6 \\cdot x^{-4} = 4x^{6 + (-4)} = 4x^2$. Forgetting to square the $2$ gives $2x^2$, and adding instead of multiplying in the power rule gives $(x^3)^2 = x^5$.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'error',
      prompt: 'A student simplifies $\\dfrac{(x^4)^3 \\cdot x^2}{x^5}$. Tap the first line that is wrong.',
      lines: [
        '$\\dfrac{(x^4)^3 \\cdot x^2}{x^5}$',
        '$= \\dfrac{x^{7} \\cdot x^2}{x^5}$',
        '$= \\dfrac{x^{9}}{x^5}$',
        '$= x^{4}$',
      ],
      errorLines: [2],
      explanation: 'Line 2 **adds** the exponents in $(x^4)^3$. A power of a power multiplies them: $(x^4)^3 = x^4 \\cdot x^4 \\cdot x^4 = x^{12}$. The correct work is $\\frac{x^{12} \\cdot x^2}{x^5} = \\frac{x^{14}}{x^5} = x^9$. Lines 3 and 4 apply the product and quotient rules correctly — to the wrong expression.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'concept',
      title: 'Putting the rules together',
      blocks: [
        {
          type: 'p',
          text: 'Real problems mix all the rules. A reliable order of attack: (1) apply outer powers to every factor, (2) combine powers of the same base with the product and quotient rules, (3) rewrite negative exponents as reciprocals. An expression counts as **simplified** when each base appears once and no negative exponents remain.',
        },
        {
          type: 'derivation',
          title: 'Simplify $\\dfrac{(2x^3y^{-2})^3}{4x^5y}$ (with $x, y \\ne 0$)',
          steps: [
            { tex: '\\frac{(2x^3y^{-2})^3}{4x^5y} = \\frac{2^3 (x^3)^3 (y^{-2})^3}{4x^5y}', why: 'Power of a product: the outer cube goes to **every** factor, including the coefficient $2$.' },
            { tex: '= \\frac{8x^9y^{-6}}{4x^5y}', why: 'Power of a power: multiply exponents, $3 \\cdot 3 = 9$ and $(-2) \\cdot 3 = -6$. And $2^3 = 8$.' },
            { tex: '= \\frac{8}{4} \\cdot x^{9 - 5} \\cdot y^{-6 - 1}', why: 'Handle the numbers and each base separately. Quotient rule for $x$ and for $y$ (remember $y = y^1$).' },
            { tex: '= 2x^4y^{-7}', why: 'Arithmetic: $\\frac{8}{4} = 2$, $9 - 5 = 4$, $-6 - 1 = -7$.' },
            { tex: '= \\frac{2x^4}{y^7}', why: 'Rewrite the negative exponent as a reciprocal: $y^{-7} = \\frac{1}{y^7}$. Only the $y$ moves — the $2$ and $x^4$ stay on top.' },
          ],
          result: 'The simplified form is $\\dfrac{2x^4}{y^7}$.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'A negative exponent moves only its own factor',
          text: 'In $3x^{-2}$, the exponent belongs to $x$ alone, so $3x^{-2} = \\frac{3}{x^2}$, not $\\frac{1}{3x^2}$. To move a factor across the fraction bar, flip the sign of *its* exponent: $\\frac{a^{-2}}{b^{-3}} = \\frac{b^3}{a^2}$.',
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'Instructors usually expect final answers with **positive exponents only**. Graders also look for the coefficient being raised to the power — $(2x)^3 = 8x^3$ is one of the most frequently missed points on exponent quizzes.',
        },
      ],
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'order',
      prompt: 'Put the steps simplifying $(x^2y^{-3})^{-2}$ in order.',
      lines: [
        '$(x^2y^{-3})^{-2}$',
        '$= (x^2)^{-2}\\,(y^{-3})^{-2}$',
        '$= x^{-4}\\,y^{6}$',
        '$= \\dfrac{y^6}{x^4}$',
      ],
      distractors: ['$= x^{0}\\,y^{-5}$'],
      explanation: 'Distribute the outer exponent to each factor, then multiply exponents: $2 \\cdot (-2) = -4$ and $(-3)(-2) = 6$. Finally move $x^{-4}$ to the denominator as $x^4$. The distractor *adds* $-2$ to each exponent, confusing the power rule with the product rule.',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'concept',
      title: 'Scientific notation',
      blocks: [
        {
          type: 'p',
          text: 'Science and engineering deal with numbers like $602{,}200{,}000{,}000{,}000{,}000{,}000{,}000$ (atoms in a mole) or $0.000000001$ (a nanosecond, in seconds). Writing them with powers of $10$ makes them readable and lets the exponent rules do the arithmetic.',
        },
        {
          type: 'definition',
          term: 'Scientific notation',
          text: 'A number is in [[scientific-notation]] when written as $a \\times 10^n$ with $1 \\le |a| < 10$ and $n$ an integer. So $6.022 \\times 10^{23}$ and $1 \\times 10^{-9}$, but **not** $60.22 \\times 10^{22}$.',
        },
        {
          type: 'p',
          text: 'To convert, slide the decimal point until exactly one nonzero digit is in front of it, and count the moves. Moving the point **left** (big numbers) gives a positive exponent; moving it **right** (small numbers) gives a negative one: $45{,}000 = 4.5 \\times 10^4$ and $0.0032 = 3.2 \\times 10^{-3}$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why insist on $1 \\le |a| < 10$?',
          text: 'Without the rule, one number has endless spellings: $4.5 \\times 10^4 = 45 \\times 10^3 = 0.45 \\times 10^5$. Requiring one digit before the point makes the form **unique**, so the exponent alone tells you the size (the *order of magnitude*): anything $\\times 10^{6}$ is in the millions. Comparing two numbers then starts with comparing exponents.',
        },
        {
          type: 'derivation',
          title: 'Multiply $(3.2 \\times 10^5)(4 \\times 10^{-8})$',
          steps: [
            { tex: '(3.2 \\times 10^5)(4 \\times 10^{-8}) = (3.2 \\cdot 4) \\times (10^5 \\cdot 10^{-8})', why: 'Commutative and associative properties: group the decimals and the powers of ten.' },
            { tex: '= 12.8 \\times 10^{-3}', why: 'Multiply $3.2 \\cdot 4 = 12.8$; product rule $10^{5 + (-8)} = 10^{-3}$.' },
            { tex: '= 1.28 \\times 10^{1} \\times 10^{-3}', why: '$12.8$ is not between $1$ and $10$, so rewrite it as $1.28 \\times 10^1$.' },
            { tex: '= 1.28 \\times 10^{-2}', why: 'Product rule again: $10^{1 + (-3)} = 10^{-2}$. (That is $0.0128$.)' },
          ],
          result: 'The product is $1.28 \\times 10^{-2}$.',
        },
        {
          type: 'p',
          text: 'Computers use the same idea in base $2$: a `double` stores a sign, a significand $1.f$ (between $1$ and $2$) and a power of two. C++ even lets you type scientific notation directly — `3.2e5` means $3.2 \\times 10^5$ — and `%e` prints it.',
        },
        {
          type: 'code',
          title: 'sci.cpp',
          runnable: true,
          code: `#include <cstdio>

int main() {
    double a = 3.2e5;   // 3.2 x 10^5
    double b = 4e-8;    // 4 x 10^-8
    std::printf("%e\\n", a * b);
    std::printf("%g\\n", a * b);
}`,
          output: `1.280000e-02
0.0128`,
          annotations: [
            { lines: '4-5', text: 'The `e` in a literal means "times ten to the power".' },
            { lines: 6, text: '`%e` prints in scientific notation: $1.28 \\times 10^{-2}$.' },
            { lines: 7, text: '`%g` picks whichever form is shorter.' },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'mcq',
      prompt: 'Which is $0.00047$ written in scientific notation?',
      options: [
        { text: '$4.7 \\times 10^{4}$', why: 'A positive exponent makes a *large* number ($47{,}000$). Small numbers get negative exponents.' },
        { text: '$47 \\times 10^{-5}$', why: 'Equal in value, but $47$ is not between $1$ and $10$, so it is not scientific notation.' },
        { text: '$4.7 \\times 10^{-3}$', why: 'This is $0.0047$ — one decimal place too many. Count the moves again.' },
        { text: '$4.7 \\times 10^{-4}$', correct: true, why: 'The decimal point moves $4$ places right to get $4.7$, so the exponent is $-4$.' },
      ],
      explanation: 'From $0.00047$, slide the point right past $0, 0, 0, 4$: four moves gives $4.7$. Moving right means the original number was small, so the exponent is negative: $4.7 \\times 10^{-4}$. Check: $4.7 \\times \\frac{1}{10{,}000} = 0.00047$ ✓',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'numeric',
      prompt: 'Compute $\\dfrac{6 \\times 10^{4}}{1.5 \\times 10^{-3}}$. You may type the answer as a plain number or as `4*10^7`-style notation.',
      hint: 'Divide the decimals ($6 \\div 1.5$) and use the quotient rule on the powers of ten.',
      answer: '4*10^7',
      answerTex: '4 \\times 10^{7}',
      explanation: '$\\frac{6}{1.5} = 4$ and $\\frac{10^4}{10^{-3}} = 10^{4 - (-3)} = 10^{7}$. So the result is $4 \\times 10^7 = 40{,}000{,}000$. The trap is $4 - 3 = 1$: subtracting a negative exponent *adds*. Dividing by a tiny number should give a big result, which is a good sanity check.',
    },
  ],
  takeaways: [
    'Product rule $a^m a^n = a^{m+n}$, quotient rule $\\frac{a^m}{a^n} = a^{m-n}$, power rule $(a^m)^n = a^{mn}$ — all from counting factors.',
    '$a^0 = 1$ and $a^{-n} = \\frac{1}{a^n}$ (for $a \\ne 0$) are the only definitions that keep those rules true; a negative exponent means reciprocal, not negative.',
    'Powers distribute over products and quotients, $(ab)^n = a^n b^n$, but **never** over sums: $(a + b)^2 = a^2 + 2ab + b^2$.',
    'A simplified answer has each base once and only positive exponents; a negative exponent moves only its own factor.',
    'Scientific notation $a \\times 10^n$ with $1 \\le |a| < 10$ is unique, and multiplying or dividing uses the exponent rules on the powers of ten.',
  ],
  reading: [
    {
      title: 'OpenStax College Algebra 2e — 1.2 Exponents and Scientific Notation',
      url: 'https://openstax.org/books/college-algebra-2e/pages/1-2-exponents-and-scientific-notation',
      source: 'openstax',
      note: 'The textbook treatment of every rule in this lesson, with a large exercise set.',
    },
    {
      title: "Paul's Online Notes — Integer Exponents",
      url: 'https://tutorial.math.lamar.edu/Classes/Alg/IntegerExponents.aspx',
      source: 'paul',
      note: 'Worked simplification problems at the level college instructors expect.',
    },
    {
      title: 'Wikipedia — Scientific notation',
      url: 'https://en.wikipedia.org/wiki/Scientific_notation',
      source: 'wikipedia',
      note: 'Covers normalized form, engineering notation and the E-notation used in programming languages.',
    },
  ],
};
