import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'alg-radicals',
  title: 'Roots, Radicals and Rational Exponents',
  summary: 'Square roots, cube roots and $n$th roots — why $\\sqrt{x^2} = |x|$, how to simplify and rationalize, and why $a^{1/n}$ is a root.',
  minutes: 18,
  objectives: [
    'Evaluate principal square roots and $n$th roots, and tell when an even root is not a real number',
    'Explain why $\\sqrt{x^2} = |x|$ rather than $x$',
    'Simplify radicals with the product and quotient rules, and combine like radicals',
    'Rationalize denominators, including with conjugates',
    'Convert between radicals and rational exponents and evaluate expressions like $16^{-3/4}$',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Square roots: undoing a square',
      blocks: [
        {
          type: 'p',
          text: 'Squaring and taking a square root undo each other — mostly. Both $5^2$ and $(-5)^2$ equal $25$, so "the number whose square is $25$" is ambiguous: there are two of them. Mathematics resolves this by choosing one, the non-negative one, and giving it the symbol $\\sqrt{\\ }$.',
        },
        {
          type: 'definition',
          term: 'Principal square root',
          text: 'For $a \\ge 0$, the [[square-root]] $\\sqrt{a}$ is the **non-negative** number whose square is $a$. So $\\sqrt{25} = 5$ (never $-5$), $\\sqrt{0} = 0$, and $\\sqrt{\\frac{9}{16}} = \\frac{3}{4}$. The expression under the [[radical]] sign is called the [[radicand]].',
        },
        {
          type: 'p',
          text: 'If you want both square roots, write them both: the equation $x^2 = 25$ has the two solutions $x = \\pm\\sqrt{25} = \\pm 5$. The symbol $\\sqrt{25}$ by itself always means just $5$. And $\\sqrt{-25}$ is **not a real number**, because no real number squares to a negative. (Unit 6 will build complex numbers to handle it.)',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why choose only the positive root?',
          text: 'A symbol has to mean one number, otherwise $\\sqrt{25} + 1$ would be "$6$ or $-4$" and arithmetic would collapse. Choosing the non-negative root makes $y = \\sqrt{x}$ a genuine function (one output for each input), which is what calculators, programming languages and the rest of mathematics need. It is also the natural geometric choice: a square of area $25$ has side length $5$, not $-5$.',
        },
        {
          type: 'p',
          text: 'Here is the subtle consequence. What is $\\sqrt{x^2}$? It is tempting to say "the root undoes the square, so it is $x$". Try $x = -3$: $\\sqrt{(-3)^2} = \\sqrt{9} = 3$, not $-3$. The root always returns the non-negative value, which is the **absolute value** of $x$.',
        },
        {
          type: 'theorem',
          name: 'Square root of a square',
          tex: '\\sqrt{x^2} = |x| \\quad \\text{for every real } x',
        },
        {
          type: 'graph',
          x: [-4, 4],
          y: [-4, 4],
          equal: true,
          functions: [
            { expr: 'sqrt(x^2)', label: '$y = \\sqrt{x^2}$', color: 'blue' },
            { expr: 'x', label: '$y = x$', color: 'red', dashed: true },
          ],
          points: [{ x: 'a', y: 'sqrt(a^2)', label: '(a, √(a²))', color: 'blue' }],
          sliders: [{ name: 'a', min: -3.5, max: 3.5, step: 0.1, value: -2, label: '$a$' }],
          readouts: [
            { label: '$\\sqrt{a^2} =$', expr: 'sqrt(a^2)', digits: 2 },
            { label: '$|a| =$', expr: 'abs(a)', digits: 2 },
          ],
          caption: 'For $a \\ge 0$ the graph of $\\sqrt{x^2}$ agrees with $y = x$. For negative $a$ it reflects upward: the graph is the V-shape of $y = |x|$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'truefalse',
      prompt: '$\\sqrt{(-5)^2} = -5$',
      answer: false,
      explanation: 'Work inside out: $(-5)^2 = 25$, and $\\sqrt{25} = 5$ because the radical sign means the non-negative root. So $\\sqrt{(-5)^2} = 5 = |-5|$. This is exactly the rule $\\sqrt{x^2} = |x|$; the shortcut "the root cancels the square" only works when $x \\ge 0$.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Cube roots and $n$th roots',
      blocks: [
        {
          type: 'p',
          text: 'The same idea works for any power. The cube root $\\sqrt[3]{a}$ is the number whose cube is $a$; the $n$th root $\\sqrt[n]{a}$ is the number whose $n$th power is $a$. The small number $n$ is the **index** (for square roots the index $2$ is not written).',
        },
        {
          type: 'p',
          text: 'Odd and even indexes behave differently, because odd powers keep the sign and even powers destroy it. $(-2)^3 = -8$, so $\\sqrt[3]{-8} = -2$ is perfectly real. But no real number has a negative fourth power, so $\\sqrt[4]{-16}$ is not real.',
        },
        {
          type: 'table',
          headers: ['Radicand', 'Even index ($\\sqrt{\\ }, \\sqrt[4]{\\ }, \\dots$)', 'Odd index ($\\sqrt[3]{\\ }, \\sqrt[5]{\\ }, \\dots$)'],
          rows: [
            ['Positive', 'one non-negative real root: $\\sqrt[4]{81} = 3$', 'one real root: $\\sqrt[3]{27} = 3$'],
            ['Negative', 'not a real number: $\\sqrt[4]{-81}$', 'a negative real root: $\\sqrt[3]{-27} = -3$'],
            ['Root of a power', '$\\sqrt[n]{x^n} = |x|$', '$\\sqrt[n]{x^n} = x$'],
          ],
          caption: 'The value that the radical sign picks out is called the [[principal-root]].',
        },
        {
          type: 'derivation',
          title: 'Evaluate $\\sqrt[3]{-125} + \\sqrt[4]{16} - \\sqrt[5]{-1}$',
          steps: [
            { tex: '\\sqrt[3]{-125} = -5', why: 'Odd index, negative radicand: $(-5)^3 = -125$.' },
            { tex: '\\sqrt[4]{16} = 2', why: 'Even index: the non-negative number with $2^4 = 16$.' },
            { tex: '\\sqrt[5]{-1} = -1', why: '$(-1)^5 = -1$: an odd power of $-1$ is $-1$.' },
            { tex: '-5 + 2 - (-1) = -2', why: 'Combine, remembering that subtracting $-1$ adds $1$.' },
          ],
          result: 'The value is $-2$.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Memorize a few powers',
          text: 'Simplifying roots is much faster if you recognize perfect powers. Squares: $1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144$. Cubes: $1, 8, 27, 64, 125, 216$. Powers of two: $2, 4, 8, 16, 32, 64, 128, 256$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'mcq',
      prompt: 'Evaluate $\\sqrt[3]{-64}$.',
      options: [
        { text: '$4$', why: '$4^3 = 64$, not $-64$. The sign matters for odd roots.' },
        { text: '$-4$', correct: true, why: '$(-4)^3 = (-4)(-4)(-4) = 16 \\cdot (-4) = -64$ ✓' },
        { text: '$\\pm 4$', why: 'Only $-4$ cubes to $-64$; $4^3$ is positive. Odd roots have exactly one real value.' },
        { text: 'Not a real number', why: 'That is true for **even** roots of negatives. Odd powers can be negative, so odd roots of negatives are real.' },
      ],
      explanation: 'An odd power keeps the sign of its base, so a negative number has exactly one real cube root, and it is negative: $\\sqrt[3]{-64} = -4$. Contrast $\\sqrt{-64}$ (even index), which is not a real number.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Simplifying radicals',
      blocks: [
        {
          type: 'p',
          text: 'A radical is in simplest form when the radicand has no perfect-square factor (for square roots), no fractions under the root, and no root left in a denominator. The main tool is that roots split across **products and quotients**:',
        },
        {
          type: 'theorem',
          name: 'Product and quotient rules for radicals',
          tex: '\\sqrt{ab} = \\sqrt{a}\\,\\sqrt{b} \\qquad \\sqrt{\\frac{a}{b}} = \\frac{\\sqrt{a}}{\\sqrt{b}} \\qquad (a \\ge 0,\\ b > 0 \\text{ for the quotient})',
          text: 'The same rules hold for $n$th roots, with $a, b \\ge 0$ when $n$ is even.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the product rule holds (and needs $a, b \\ge 0$)',
          text: 'By definition $\\sqrt{ab}$ is the non-negative number whose square is $ab$. Now check $\\sqrt{a}\\sqrt{b}$: it is non-negative (a product of two non-negative numbers), and its square is $(\\sqrt{a}\\sqrt{b})^2 = (\\sqrt{a})^2(\\sqrt{b})^2 = ab$ by the power-of-a-product rule. Only one non-negative number squares to $ab$, so the two are equal. If $a$ and $b$ are negative the proof fails, and so does the rule: $\\sqrt{(-4)(-9)} = 6$, but $\\sqrt{-4}$ and $\\sqrt{-9}$ are not even real.',
        },
        {
          type: 'derivation',
          title: 'Simplify $\\sqrt{72}$',
          steps: [
            { tex: '\\sqrt{72} = \\sqrt{36 \\cdot 2}', why: 'Look for the **largest** perfect-square factor of $72$. It is $36$.' },
            { tex: '= \\sqrt{36}\\,\\sqrt{2}', why: 'Product rule for radicals (both factors are positive).' },
            { tex: '= 6\\sqrt{2}', why: '$\\sqrt{36} = 6$, and $2$ has no perfect-square factor, so we are done.' },
          ],
          result: '$\\sqrt{72} = 6\\sqrt{2} \\approx 8.485$. (Using $\\sqrt{9 \\cdot 8} = 3\\sqrt{8}$ is correct but not finished: $\\sqrt{8} = 2\\sqrt{2}$ still simplifies.)',
        },
        {
          type: 'p',
          text: '**Like radicals** — same index and same radicand — combine just like like terms, by the distributive property: $3\\sqrt{2} + 5\\sqrt{2} = (3 + 5)\\sqrt{2} = 8\\sqrt{2}$. Often you must simplify first to discover that radicals are alike: $3\\sqrt{2} + 5\\sqrt{8} = 3\\sqrt{2} + 10\\sqrt{2} = 13\\sqrt{2}$.',
        },
        {
          type: 'compare',
          left: {
            title: 'Roots do NOT split over sums',
            tone: 'bad',
            tex: ['\\sqrt{9 + 16} = \\sqrt{9} + \\sqrt{16}', '\\sqrt{25} \\overset{?}{=} 3 + 4', '5 \\ne 7'],
          },
          right: {
            title: 'Simplify inside first',
            tone: 'good',
            tex: ['\\sqrt{9 + 16} = \\sqrt{25} = 5'],
            text: 'The radical sign is a grouping symbol: finish the sum underneath before taking the root.',
          },
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Avoiding square roots in game code',
          text: 'The distance between two points is $\\sqrt{dx^2 + dy^2}$, and because a root does not split over a sum you cannot simplify it to $|dx| + |dy|$. Square roots are relatively slow, so games often compare **squared** distances instead: `dx*dx + dy*dy < r*r` gives the same answer as $\\sqrt{dx^2 + dy^2} < r$ when $r \\ge 0$, since squaring preserves order for non-negative numbers.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'numeric',
      prompt: 'Simplify $\\sqrt{50} + \\sqrt{18}$. Type your answer in the form `k*sqrt(2)`.',
      hint: 'Find the largest perfect-square factor of each: $50 = 25 \\cdot 2$ and $18 = 9 \\cdot 2$.',
      answer: '8sqrt(2)',
      answerTex: '8\\sqrt{2}',
      minDecimals: 4,
      explanation: '$\\sqrt{50} = \\sqrt{25}\\sqrt{2} = 5\\sqrt{2}$ and $\\sqrt{18} = \\sqrt{9}\\sqrt{2} = 3\\sqrt{2}$. These are like radicals, so $5\\sqrt{2} + 3\\sqrt{2} = 8\\sqrt{2} \\approx 11.31$. Note that $\\sqrt{50 + 18} = \\sqrt{68} \\approx 8.25$ is a different number entirely.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'error',
      prompt: 'A student simplifies $\\sqrt{48} + \\sqrt{27}$. Tap the first line that is wrong.',
      lines: [
        '$\\sqrt{48} + \\sqrt{27}$',
        '$= \\sqrt{16 \\cdot 3} + \\sqrt{9 \\cdot 3}$',
        '$= 4\\sqrt{3} + 3\\sqrt{3}$',
        '$= 7\\sqrt{6}$',
      ],
      errorLines: [4],
      explanation: 'Lines 2 and 3 are correct. Line 4 adds the radicands as well as the coefficients. Like radicals combine like like terms: $4\\sqrt{3} + 3\\sqrt{3} = (4 + 3)\\sqrt{3} = 7\\sqrt{3}$, just as $4x + 3x = 7x$ (not $7x^2$ or $7 \\cdot 2x$). The correct answer is $7\\sqrt{3} \\approx 12.12$.',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'concept',
      title: 'Rationalizing the denominator',
      blocks: [
        {
          type: 'p',
          text: 'By convention, a simplified answer has no radical in the denominator. [[rationalizing-the-denominator|Rationalizing the denominator]] removes it by multiplying by a well-chosen form of $1$ — the same move that produces equivalent fractions.',
        },
        {
          type: 'derivation',
          title: 'Rationalize $\\dfrac{6}{\\sqrt{3}}$',
          steps: [
            { tex: '\\frac{6}{\\sqrt{3}} = \\frac{6}{\\sqrt{3}} \\cdot \\frac{\\sqrt{3}}{\\sqrt{3}}', why: 'Multiply by $\\frac{\\sqrt{3}}{\\sqrt{3}} = 1$, which does not change the value.' },
            { tex: '= \\frac{6\\sqrt{3}}{3}', why: 'The denominator becomes $\\sqrt{3} \\cdot \\sqrt{3} = (\\sqrt{3})^2 = 3$, a rational number.' },
            { tex: '= 2\\sqrt{3}', why: 'Cancel the common factor $3$.' },
          ],
          result: '$\\frac{6}{\\sqrt{3}} = 2\\sqrt{3} \\approx 3.464$.',
        },
        {
          type: 'p',
          text: 'When the denominator is a sum or difference like $3 - \\sqrt{2}$, multiplying by $\\sqrt{2}$ does not help. Instead use the [[radical-conjugate|conjugate]] $3 + \\sqrt{2}$ (same terms, opposite sign in the middle). The pattern $(a - b)(a + b) = a^2 - b^2$ squares both terms and the middle terms cancel.',
        },
        {
          type: 'derivation',
          title: 'Rationalize $\\dfrac{1}{3 - \\sqrt{2}}$',
          steps: [
            { tex: '\\frac{1}{3 - \\sqrt{2}} \\cdot \\frac{3 + \\sqrt{2}}{3 + \\sqrt{2}}', why: 'Multiply top and bottom by the conjugate of the denominator.' },
            { tex: '= \\frac{3 + \\sqrt{2}}{(3 - \\sqrt{2})(3 + \\sqrt{2})}', why: 'The numerator is just $1 \\cdot (3 + \\sqrt{2})$.' },
            { tex: '= \\frac{3 + \\sqrt{2}}{9 + 3\\sqrt{2} - 3\\sqrt{2} - 2}', why: 'Distribute (each term times each term): $9$, $+3\\sqrt{2}$, $-3\\sqrt{2}$, and $-\\sqrt{2}\\cdot\\sqrt{2} = -2$.' },
            { tex: '= \\frac{3 + \\sqrt{2}}{7}', why: 'The middle terms cancel — that is the whole point of the conjugate — leaving $9 - 2 = 7$.' },
          ],
          result: '$\\frac{1}{3 - \\sqrt{2}} = \\frac{3 + \\sqrt{2}}{7}$. Check with decimals: both are about $0.6306$ ✓',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why bother rationalizing?',
          text: 'Before calculators, dividing by $1.41421\\dots$ by hand was miserable, while $\\frac{\\sqrt{2}}{2}$ is just half of a known decimal. Today the reasons are practical: a single standard form makes answers easy to compare (is $\\frac{1}{\\sqrt{2}}$ the same as $\\frac{\\sqrt{2}}{2}$? yes!), and the conjugate trick is exactly the algebra you will use to evaluate limits in calculus.',
        },
      ],
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'numeric',
      prompt: 'Rationalize the denominator and simplify: $\\dfrac{4}{\\sqrt{5} - 1}$. Type the exact answer, e.g. `sqrt(5) + 1`-style notation.',
      hint: 'Multiply top and bottom by the conjugate $\\sqrt{5} + 1$. The denominator becomes $(\\sqrt{5})^2 - 1^2$.',
      answer: 'sqrt(5) + 1',
      answerTex: '\\sqrt{5} + 1',
      minDecimals: 4,
      explanation: '$\\frac{4}{\\sqrt{5} - 1} \\cdot \\frac{\\sqrt{5} + 1}{\\sqrt{5} + 1} = \\frac{4(\\sqrt{5} + 1)}{5 - 1} = \\frac{4(\\sqrt{5} + 1)}{4} = \\sqrt{5} + 1 \\approx 3.236$. The $4$ cancels only because it multiplies the *whole* numerator; you could not cancel it from just one term.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'concept',
      title: 'Rational exponents: roots are powers',
      blocks: [
        {
          type: 'p',
          text: 'Last lesson extended exponents to $0$ and negative integers by insisting the rules keep working. Now we do the same for fractions. What should $9^{1/2}$ mean?',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why $a^{1/n} = \\sqrt[n]{a}$',
          text: 'If the power rule $(a^m)^n = a^{mn}$ is to survive, then $(9^{1/2})^2 = 9^{\\frac{1}{2} \\cdot 2} = 9^1 = 9$. So $9^{1/2}$ must be a number whose square is $9$ — and to have a single value we take the principal root, $3$. In general, $(a^{1/n})^n = a$, which is exactly the defining property of $\\sqrt[n]{a}$. There was no choice: a [[rational-exponent]] *has* to be a root.',
        },
        {
          type: 'theorem',
          name: 'Rational exponents',
          tex: 'a^{1/n} = \\sqrt[n]{a} \\qquad a^{m/n} = \\left(\\sqrt[n]{a}\\right)^m = \\sqrt[n]{a^m}',
          text: 'Here $n$ is a positive integer and $\\frac{m}{n}$ is in lowest terms, with $a \\ge 0$ whenever $n$ is even. The denominator is the root; the numerator is the power.',
        },
        {
          type: 'derivation',
          title: 'Evaluate $27^{2/3}$ and $16^{-3/4}$',
          steps: [
            { tex: '27^{2/3} = \\left(\\sqrt[3]{27}\\right)^2', why: 'Denominator $3$ means cube root; numerator $2$ means square. Take the root first to keep numbers small.' },
            { tex: '= 3^2 = 9', why: '$\\sqrt[3]{27} = 3$ because $3^3 = 27$. (Squaring first gives $\\sqrt[3]{729} = 9$ too, just with bigger numbers.)' },
            { tex: '16^{-3/4} = \\frac{1}{16^{3/4}}', why: 'A negative exponent still means reciprocal.' },
            { tex: '= \\frac{1}{\\left(\\sqrt[4]{16}\\right)^3} = \\frac{1}{2^3} = \\frac{1}{8}', why: '$\\sqrt[4]{16} = 2$ since $2^4 = 16$, and $2^3 = 8$.' },
          ],
          result: '$27^{2/3} = 9$ and $16^{-3/4} = \\frac{1}{8}$.',
        },
        {
          type: 'p',
          text: 'The payoff: every exponent rule from the last lesson now works for radicals too. For example, $\\sqrt{x} \\cdot \\sqrt[3]{x} = x^{1/2} \\cdot x^{1/3} = x^{1/2 + 1/3} = x^{5/6}$ (for $x \\ge 0$) — a product that has no obvious radical-only simplification. Drag the slider to see how $y = x^p$ changes as $p$ passes through fractions.',
        },
        {
          type: 'graph',
          x: [0, 4],
          y: [0, 4],
          equal: true,
          functions: [
            { expr: 'x^p', label: '$y = x^p$', color: 'blue', domain: [0, 4] },
            { expr: 'x', label: '$y = x$', color: 'gray', dashed: true },
          ],
          points: [{ x: 1, y: 1, label: '(1, 1)', color: 'red' }],
          sliders: [{ name: 'p', min: 0.1, max: 3, step: 0.05, value: 0.5, label: 'exponent $p$' }],
          readouts: [{ label: '$4^p =$', expr: '4^p', digits: 4 }],
          caption: 'At $p = \\frac{1}{2}$ you see $y = \\sqrt{x}$; at $p = \\frac{1}{3}$, the cube root. Every curve passes through $(1, 1)$ because $1^p = 1$. Fractional powers below $1$ bend the curve below the line for $x > 1$; powers above $1$ bend it above.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'pow() and negative bases in C++',
          text: '`std::pow(x, 0.5)` and `std::sqrt(x)` both give $\\sqrt{x}$, and `std::pow(x, 1.0/3)` works for $x \\ge 0$. But `std::pow(-8.0, 1.0/3)` returns `NaN`: the computer cannot store $\\frac{1}{3}$ exactly, so it cannot know you meant an odd root. Use `std::cbrt(-8.0)`, which correctly returns `-2`.',
        },
        {
          type: 'deepdive',
          title: 'Why insist on lowest terms?',
          blocks: [
            {
              type: 'p',
              text: 'For negative bases, unreduced exponents give contradictions. $\\frac{1}{3} = \\frac{2}{6}$, yet $(-8)^{1/3} = \\sqrt[3]{-8} = -2$ while $\\sqrt[6]{(-8)^2} = \\sqrt[6]{64} = 2$. Requiring $\\frac{m}{n}$ in lowest terms (and $a \\ge 0$ when $n$ is even) removes the ambiguity. For $a \\ge 0$ there is never a problem, which is why many textbooks simply restrict rational exponents to non-negative bases.',
            },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'numeric',
      prompt: 'Evaluate $8^{-2/3}$. Give an exact fraction.',
      hint: 'Reciprocal first, then cube root, then square.',
      answer: '1/4',
      answerTex: '\\frac{1}{4}',
      explanation: '$8^{-2/3} = \\frac{1}{8^{2/3}} = \\frac{1}{(\\sqrt[3]{8})^2} = \\frac{1}{2^2} = \\frac{1}{4}$. Common wrong answers: $-4$ (treating the negative exponent as a negative sign) and $\\frac{1}{\\sqrt{8^3}}$ (swapping the roles of numerator and denominator — the *denominator* of the exponent is the root).',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'expr',
      prompt: 'Write $\\dfrac{\\sqrt{x} \\cdot \\sqrt[3]{x}}{x}$ (for $x > 0$) as a single power of $x$.',
      hint: 'Convert each radical to a rational exponent: $\\sqrt{x} = x^{1/2}$, $\\sqrt[3]{x} = x^{1/3}$, $x = x^1$. Then add and subtract exponents.',
      label: 'result:',
      answer: 'x^(-1/6)',
      answerTex: 'x^{-1/6}',
      domain: [0.5, 3],
      explanation: '$\\frac{x^{1/2} \\cdot x^{1/3}}{x^1} = x^{\\frac{1}{2} + \\frac{1}{3} - 1}$. With common denominator $6$: $\\frac{3}{6} + \\frac{2}{6} - \\frac{6}{6} = -\\frac{1}{6}$. So the expression is $x^{-1/6} = \\frac{1}{\\sqrt[6]{x}}$. Fractions, exponents and radicals — this one question uses the whole unit.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'order',
      prompt: 'Put the steps evaluating $16^{-3/4}$ in order.',
      lines: [
        '$16^{-3/4}$',
        '$= \\dfrac{1}{16^{3/4}}$',
        '$= \\dfrac{1}{\\left(\\sqrt[4]{16}\\right)^3}$',
        '$= \\dfrac{1}{2^3}$',
        '$= \\dfrac{1}{8}$',
      ],
      distractors: ['$= -16^{3/4}$'],
      explanation: 'Negative exponent → reciprocal; denominator $4$ → fourth root ($\\sqrt[4]{16} = 2$); numerator $3$ → cube ($2^3 = 8$). The distractor treats the negative exponent as a negative sign, the most common mistake with exponents of any kind.',
    },
  ],
  takeaways: [
    '$\\sqrt{a}$ (for $a \\ge 0$) is the **non-negative** root, so $\\sqrt{25} = 5$ while $x^2 = 25$ has solutions $\\pm 5$; even roots of negatives are not real.',
    '$\\sqrt{x^2} = |x|$, and in general $\\sqrt[n]{x^n} = |x|$ for even $n$ but $x$ for odd $n$.',
    'Roots split over products and quotients ($\\sqrt{ab} = \\sqrt{a}\\sqrt{b}$ for $a, b \\ge 0$) but never over sums; combine only like radicals.',
    'Rationalize a denominator by multiplying by $\\frac{\\sqrt{a}}{\\sqrt{a}}$ or by the conjugate, using $(a - b)(a + b) = a^2 - b^2$.',
    '$a^{m/n} = (\\sqrt[n]{a})^m$: the denominator is the root, the numerator the power — the only definition that keeps the exponent rules true.',
  ],
  reading: [
    {
      title: 'OpenStax College Algebra 2e — 1.3 Radicals and Rational Exponents',
      url: 'https://openstax.org/books/college-algebra-2e/pages/1-3-radicals-and-rational-exponents',
      source: 'openstax',
      note: 'Textbook coverage of simplifying radicals, rationalizing and rational exponents, with many exercises.',
    },
    {
      title: "Paul's Online Notes — Radicals",
      url: 'https://tutorial.math.lamar.edu/Classes/Alg/Radicals.aspx',
      source: 'paul',
      note: 'Careful treatment of simplified form, including when $\\sqrt[n]{a^n} = |a|$.',
    },
    {
      title: "Paul's Online Notes — Rational Exponents",
      url: 'https://tutorial.math.lamar.edu/Classes/Alg/RationalExponents.aspx',
      source: 'paul',
      note: 'More practice converting between radicals and fractional exponents.',
    },
  ],
};
