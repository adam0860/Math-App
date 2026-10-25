import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'alg-polynomial-division',
  title: 'Polynomial Division and the Remainder Theorem',
  summary: 'Long division works for polynomials too — and its remainder secretly tells you the value of the polynomial.',
  minutes: 17,
  objectives: [
    'State the division algorithm $f = d \\cdot q + r$ and explain why $\\deg r < \\deg d$',
    'Divide polynomials by long division, including divisors of degree $2$',
    'Divide by $x - c$ quickly with synthetic division',
    'Use the Remainder Theorem to evaluate $f(c)$ and to find remainders without dividing',
  ],
  steps: [
    {
      kind: 'concept',
      title: 'Division with a remainder, for polynomials',
      blocks: [
        {
          type: 'p',
          text: 'In grade school, $17 \\div 5$ is "$3$ remainder $2$", which is a compact way of saying $17 = 5 \\cdot 3 + 2$. The remainder $2$ is smaller than the divisor $5$ — otherwise you could have fit in another $5$.',
        },
        {
          type: 'p',
          text: 'Polynomials divide the same way, and the precise statement is called the [[polynomial-division-algorithm|division algorithm]]. You already know how to *multiply* polynomials; division asks the reverse question: how many times does $d(x)$ go into $f(x)$, and what is left over? The answers give you the factors of a polynomial — which is how you will find its zeros in the next lesson — and the asymptotes of rational functions later in this unit.',
        },
        {
          type: 'theorem',
          name: 'The Division Algorithm',
          tex: 'f(x) = d(x)\\,q(x) + r(x), \\qquad r(x) = 0 \\ \\text{ or } \\ \\deg r < \\deg d',
          text: 'For any polynomials $f$ (the **dividend**) and $d \\neq 0$ (the **divisor**) there are unique polynomials $q$ (the **quotient**) and $r$ (the **remainder**) satisfying this. Dividing both sides by $d(x)$ gives the equivalent form $\\dfrac{f(x)}{d(x)} = q(x) + \\dfrac{r(x)}{d(x)}$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the remainder must have smaller degree',
          text: 'Degree plays the role that size plays for whole numbers. If the remainder still had degree $\\ge \\deg d$, its leading term could be divided by the leading term of $d$, so you could take out another piece of $d$ and keep going. You stop exactly when the leftover is "too small" — lower degree — to contain $d$ again. That stopping rule is what makes $q$ and $r$ unique.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'You already use this in code',
          text: 'In C++, for positive integers `a / b` is the quotient and `a % b` the remainder, and the language guarantees `a == (a / b) * b + a % b`. That is the division algorithm for integers. Computer algebra systems, CRC error-checking codes and cryptography all run the polynomial version.',
        },
      ],
    },
    {
      kind: 'fill',
      prompt: 'Complete the division algorithm.',
      template: 'In $f(x) = d(x)\\,q(x) + r(x)$, the polynomial $q(x)$ is the ___, and unless $r = 0$, the degree of $r(x)$ must be ___ the degree of $d(x)$.',
      blanks: [{ answers: ['quotient'] }, { answers: ['less than'] }],
      wordBank: ['quotient', 'remainder', 'less than', 'equal to', 'greater than'],
      explanation: 'Just like $17 = 5 \\cdot 3 + 2$, the quotient $q$ counts how many copies of the divisor fit, and the remainder is what is left. The remainder must have **lower degree** than the divisor; if it did not, you could divide at least one more time.',
    },
    {
      kind: 'concept',
      title: 'Polynomial long division',
      blocks: [
        {
          type: 'p',
          text: 'Long division of polynomials repeats the same four moves as long division of numbers: **divide** the leading terms, **multiply** back, **subtract**, **bring down** the next term. Always focus on leading terms — they decide each next piece of the quotient.',
        },
        {
          type: 'derivation',
          title: 'Divide $2x^3 - 3x^2 + 4x + 5$ by $x - 2$',
          steps: [
            { tex: '\\frac{2x^3}{x} = 2x^2', why: '**Divide** the leading term of the dividend by the leading term of the divisor. This is the first term of the quotient.' },
            { tex: '2x^2(x - 2) = 2x^3 - 4x^2', why: '**Multiply** that quotient term by the whole divisor.' },
            { tex: '(2x^3 - 3x^2) - (2x^3 - 4x^2) = x^2', why: '**Subtract**. Distribute the minus: $-3x^2 - (-4x^2) = +x^2$. The leading terms always cancel — that is the point of the divide step.' },
            { tex: 'x^2 + 4x', why: '**Bring down** the next term, $+4x$. Now repeat with this new expression.' },
            { tex: '\\frac{x^2}{x} = x, \\quad x(x - 2) = x^2 - 2x, \\quad (x^2 + 4x) - (x^2 - 2x) = 6x', why: 'Second round: divide, multiply, subtract. The quotient so far is $2x^2 + x$.' },
            { tex: '6x + 5', why: 'Bring down the last term, $+5$.' },
            { tex: '\\frac{6x}{x} = 6, \\quad 6(x - 2) = 6x - 12, \\quad (6x + 5) - (6x - 12) = 17', why: 'Third round. The leftover $17$ has degree $0 < 1 = \\deg(x - 2)$, so we stop: it is the remainder.' },
            { tex: '2x^3 - 3x^2 + 4x + 5 = (x - 2)(2x^2 + x + 6) + 17', why: 'Write the answer in division-algorithm form. Check by expanding: $(x - 2)(2x^2 + x + 6) = 2x^3 - 3x^2 + 4x - 12$, and $-12 + 17 = 5$. ✓' },
          ],
          result: 'Quotient $2x^2 + x + 6$, remainder $17$; equivalently $\\dfrac{2x^3 - 3x^2 + 4x + 5}{x - 2} = 2x^2 + x + 6 + \\dfrac{17}{x - 2}$.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Two classic mistakes',
          text: '**1. Subtracting only the first term.** You subtract the *whole* product, so every sign in it flips: $(x^2 + 4x) - (x^2 - 2x) = 6x$, not $2x$.\n\n**2. Missing powers.** If a power is absent, write a placeholder $0$ term before you start: $x^3 - 8$ becomes $x^3 + 0x^2 + 0x - 8$. Otherwise the columns slide out of line.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Always check by multiplying',
          text: 'Division is easy to check: expand $d(x)q(x) + r(x)$ and you must get $f(x)$ back. On an exam this takes thirty seconds and catches nearly every sign error.',
        },
      ],
    },
    {
      kind: 'expr',
      prompt: 'Use long division to find the quotient $\\dfrac{x^3 - 8}{x - 2}$. (The remainder is $0$.)',
      label: '$q(x) =$',
      answer: 'x^2 + 2x + 4',
      hint: 'Rewrite the dividend as $x^3 + 0x^2 + 0x - 8$ before dividing.',
      explanation: 'With placeholders, $x^3 + 0x^2 + 0x - 8$. Round 1: $x^3 \\div x = x^2$; subtract $x^2(x - 2) = x^3 - 2x^2$ to get $2x^2 + 0x$. Round 2: $2x$; subtract $2x(x - 2) = 2x^2 - 4x$ to get $4x - 8$. Round 3: $4$; subtract $4(x - 2) = 4x - 8$ to get $0$. So $x^3 - 8 = (x - 2)(x^2 + 2x + 4)$ — the difference-of-cubes factorization, rediscovered by division.',
    },
    {
      kind: 'error',
      prompt: 'A student divides $2x^3 + 7x^2 - 5$ by $x + 3$. Tap the first line that is wrong.',
      lines: [
        'Write the dividend with a placeholder: $2x^3 + 7x^2 + 0x - 5$.',
        'Divide: $\\frac{2x^3}{x} = 2x^2$. Multiply: $2x^2(x + 3) = 2x^3 + 6x^2$.',
        'Subtract: $(2x^3 + 7x^2) - (2x^3 + 6x^2) = 13x^2$.',
        'Bring down $0x$ and divide: $\\frac{13x^2}{x} = 13x$, so the quotient begins $2x^2 + 13x$.',
      ],
      errorLines: [3],
      explanation: 'Line 3 adds $6x^2$ instead of subtracting it: $7x^2 - 6x^2 = x^2$, not $13x^2$. Continuing correctly: $x^2 + 0x$ gives quotient term $x$, leaving $-3x - 5$; then $-3$, leaving $-5 - (-9) = 4$. So $2x^3 + 7x^2 - 5 = (x + 3)(2x^2 + x - 3) + 4$. Expanding the answer is the quickest way to catch an error like this.',
    },
    {
      kind: 'concept',
      title: 'Dividing by a quadratic',
      blocks: [
        {
          type: 'p',
          text: 'Long division works for divisors of any degree. The only change is the stopping rule: you stop when the leftover has degree **less than the divisor\'s degree**. Dividing by a quadratic, the remainder can be linear.',
        },
        {
          type: 'derivation',
          title: 'Divide $x^4 + 2x^3 - x + 3$ by $x^2 + 1$',
          steps: [
            { tex: 'x^4 + 2x^3 + 0x^2 - x + 3', why: 'Insert the missing $x^2$ term as $0x^2$. The divisor $x^2 + 1$ is also missing its $x$ term — think of it as $x^2 + 0x + 1$.' },
            { tex: '\\frac{x^4}{x^2} = x^2: \\ (x^4 + 2x^3 + 0x^2) - (x^4 + x^2) = 2x^3 - x^2', why: 'Divide leading terms, multiply $x^2(x^2 + 1) = x^4 + x^2$, subtract.' },
            { tex: '\\frac{2x^3}{x^2} = 2x: \\ (2x^3 - x^2 - x) - (2x^3 + 2x) = -x^2 - 3x', why: 'Bring down $-x$. Multiply $2x(x^2 + 1) = 2x^3 + 2x$ and subtract: $-x - 2x = -3x$.' },
            { tex: '\\frac{-x^2}{x^2} = -1: \\ (-x^2 - 3x + 3) - (-x^2 - 1) = -3x + 4', why: 'Bring down $+3$. Multiply $-1(x^2 + 1) = -x^2 - 1$ and subtract: $3 - (-1) = 4$.' },
            { tex: '\\deg(-3x + 4) = 1 < 2', why: 'The leftover is linear, smaller than the quadratic divisor, so we stop.' },
          ],
          result: '$x^4 + 2x^3 - x + 3 = (x^2 + 1)(x^2 + 2x - 1) + (-3x + 4)$.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Where this shows up next',
          text: 'In the rational-functions lesson, the quotient $q(x)$ will turn out to be the curve that $\\frac{f(x)}{d(x)}$ hugs for large $|x|$, because $\\frac{r(x)}{d(x)} \\to 0$ when $\\deg r < \\deg d$. That is how slant asymptotes are found.',
        },
      ],
    },
    {
      kind: 'mcq',
      prompt: 'You divide a degree-$5$ polynomial by a degree-$2$ polynomial. Which statement about the result is guaranteed?',
      options: [
        {
          text: 'The quotient has degree $3$ and the remainder has degree at most $1$ (or is $0$)',
          correct: true,
          why: 'Degrees add when you multiply, so $\\deg q = 5 - 2 = 3$; and the remainder must have degree less than $2$.',
        },
        {
          text: 'The quotient has degree $3$ and the remainder is a constant',
          why: 'The remainder only needs degree less than $2$, so it can be linear (like $-3x + 4$ in the example).',
        },
        {
          text: 'The quotient has degree $2.5$',
          why: 'Degrees are whole numbers. Degrees subtract under division: $5 - 2 = 3$.',
        },
        {
          text: 'The quotient has degree $7$',
          why: 'That is what you get by *adding* the degrees, which happens for multiplication, not division.',
        },
      ],
      explanation: 'From $f = d \\cdot q + r$ with $\\deg r < \\deg d$, the top-degree term of $f$ comes only from $d \\cdot q$, so $\\deg f = \\deg d + \\deg q$, giving $\\deg q = 5 - 2 = 3$. The remainder must have degree $0$ or $1$ (or be zero).',
    },
    {
      kind: 'concept',
      title: 'Synthetic division: the shortcut for $x - c$',
      blocks: [
        {
          type: 'p',
          text: 'When the divisor is linear of the form $x - c$, long division has a lot of redundancy: every multiply-back step produces a leading term that just cancels, and every $x$ is in a predictable column. [[synthetic-division|Synthetic division]] strips all that away and keeps only the coefficients.',
        },
        {
          type: 'steps',
          items: [
            { title: 'Set up', text: 'Write $c$ in a box (for $x - 2$, $c = 2$; for $x + 3$, $c = -3$). Next to it, list **all** coefficients of the dividend in descending order, with $0$ for any missing power.' },
            { title: 'Bring down', text: 'Copy the first coefficient to the bottom row.' },
            { title: 'Multiply', text: 'Multiply the number just written in the bottom row by $c$, and write the result under the next coefficient.' },
            { title: 'Add', text: 'Add that column and write the sum in the bottom row. Repeat multiply–add to the end.' },
            { title: 'Read off', text: 'The last bottom number is the remainder. The others are the quotient\'s coefficients, starting one degree lower than the dividend.' },
          ],
        },
        {
          type: 'table',
          headers: ['$c = 2$', '$x^3$', '$x^2$', '$x$', 'const'],
          rows: [
            ['dividend', '$2$', '$-3$', '$4$', '$5$'],
            ['$\\times c$', '—', '$2 \\cdot 2 = 4$', '$2 \\cdot 1 = 2$', '$2 \\cdot 6 = 12$'],
            ['bottom row (sums)', '$2$', '$1$', '$6$', '$\\boxed{17}$'],
          ],
          caption: '$2x^3 - 3x^2 + 4x + 5$ divided by $x - 2$: quotient $2x^2 + x + 6$, remainder $17$ — the same answer as the long division, in a fraction of the writing.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why you add instead of subtract',
          text: 'In long division by $x - c$ you multiply the quotient term by $x - c$ and **subtract**, so the next column receives $-(-c) \\times (\\text{quotient term}) = +c \\times (\\text{quotient term})$. Synthetic division uses $+c$ from the start, which turns every subtraction into an addition. That is also why you must put $c$, not $-c$, in the box: for $x + 3 = x - (-3)$, use $c = -3$.',
        },
        {
          type: 'code',
          title: 'synthetic.cpp',
          runnable: true,
          code: `#include <cstdio>
#include <vector>

// Divide the polynomial with coefficients a (highest power first) by (x - c).
// Returns the bottom row: quotient coefficients, then the remainder last.
std::vector<double> synthetic(const std::vector<double>& a, double c) {
    std::vector<double> row;
    double carry = 0.0;
    for (double coef : a) {
        carry = carry * c + coef;   // multiply by c, add the next coefficient
        row.push_back(carry);
    }
    return row;
}

int main() {
    // 2x^3 - 3x^2 + 4x + 5 divided by (x - 2)
    std::vector<double> row = synthetic({2, -3, 4, 5}, 2);
    std::printf("quotient:");
    for (std::size_t i = 0; i + 1 < row.size(); ++i) std::printf(" %g", row[i]);
    std::printf("\\nremainder = f(2) = %g\\n", row.back());
}`,
          output: `quotient: 2 1 6
remainder = f(2) = 17`,
          annotations: [
            { lines: 6, text: 'Coefficients come in highest power first, with zeros for missing powers — exactly the top row of the table.' },
            { lines: 10, text: 'The whole algorithm is one line: multiply the running value by $c$ and add the next coefficient.' },
            { lines: '19-21', text: 'All but the last entry are the quotient; the last is the remainder.' },
          ],
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Horner\'s method',
          text: 'The loop above is also the fastest way to *evaluate* a polynomial, called Horner\'s method: $2x^3 - 3x^2 + 4x + 5 = ((2x - 3)x + 4)x + 5$. It needs only $n$ multiplications for degree $n$ (instead of computing every power separately) and is numerically more stable, which is why math libraries and shaders use it to evaluate polynomial approximations of $\\sin$, $e^x$ and friends.',
        },
      ],
    },
    {
      kind: 'order',
      prompt: 'Put the steps of synthetic division of $x^3 - 4x + 1$ by $x + 2$ in order.',
      lines: [
        'Put $c = -2$ in the box',
        'Write the coefficients $1, 0, -4, 1$',
        'Bring down the $1$',
        'Multiply by $-2$ and add, column by column: bottom row $1, -2, 0, 1$',
        'Read off quotient $x^2 - 2x$ and remainder $1$',
      ],
      distractors: ['Put $c = 2$ in the box', 'Write the coefficients $1, -4, 1$'],
      explanation: 'Since $x + 2 = x - (-2)$, $c = -2$. The $x^2$ term is missing, so its coefficient $0$ must be written, giving $1, 0, -4, 1$. Then: bring down $1$; $1 \\cdot (-2) = -2$, $0 + (-2) = -2$; $-2 \\cdot (-2) = 4$, $-4 + 4 = 0$; $0 \\cdot (-2) = 0$, $1 + 0 = 1$. Quotient $x^2 - 2x + 0$, remainder $1$. Check: $(x + 2)(x^2 - 2x) + 1 = x^3 - 4x + 1$. ✓',
    },
    {
      kind: 'expr',
      prompt: 'Use synthetic division to divide $3x^4 - 5x^3 + x - 7$ by $x + 1$. Enter the quotient. (The remainder happens to be $0$.)',
      label: '$q(x) =$',
      answer: '3x^3 - 8x^2 + 8x - 7',
      hint: 'Use $c = -1$ and coefficients $3, -5, 0, 1, -7$ — don\'t forget the $0$ for the missing $x^2$ term.',
      explanation: 'Bottom row: bring down $3$; $3(-1) = -3$, $-5 - 3 = -8$; $-8(-1) = 8$, $0 + 8 = 8$; $8(-1) = -8$, $1 - 8 = -7$; $-7(-1) = 7$, $-7 + 7 = 0$. So the quotient is $3x^3 - 8x^2 + 8x - 7$ with remainder $0$ — the dividend had degree $4$, so the quotient starts at degree $3$. Without the placeholder $0$, every coefficient after the first would be wrong.',
    },
    {
      kind: 'concept',
      title: 'The Remainder Theorem',
      blocks: [
        {
          type: 'p',
          text: 'Look again at the example: dividing $f(x) = 2x^3 - 3x^2 + 4x + 5$ by $x - 2$ left remainder $17$. Now compute $f(2) = 16 - 12 + 8 + 5 = 17$. Same number. That is not a coincidence.',
        },
        {
          type: 'theorem',
          name: 'Remainder Theorem',
          tex: 'f(x) \\div (x - c) \\text{ has remainder } f(c)',
          text: 'When a polynomial $f(x)$ is divided by $x - c$, the remainder is the number $f(c)$.',
        },
        {
          type: 'derivation',
          title: 'Proof',
          steps: [
            { tex: 'f(x) = (x - c)\\,q(x) + r', why: 'The division algorithm with divisor $x - c$. Since $\\deg r < 1$, the remainder $r$ is a constant.' },
            { tex: 'f(c) = (c - c)\\,q(c) + r', why: 'This is an identity — true for every $x$ — so substitute $x = c$.' },
            { tex: 'f(c) = 0 \\cdot q(c) + r = r', why: 'The factor $c - c = 0$ wipes out the first term, whatever $q(c)$ is.' },
          ],
          result: 'The remainder equals $f(c)$. ∎',
        },
        {
          type: 'p',
          text: 'This runs both ways. You can use synthetic division as a quick way to **evaluate** $f(c)$, and you can use evaluation as a quick way to find a **remainder** without dividing at all.',
        },
        {
          type: 'graph',
          x: [-3, 3],
          y: [-10, 15],
          functions: [{ expr: 'x^4 - 3x^2 + 2x - 5', label: '$f(x) = x^4 - 3x^2 + 2x - 5$' }],
          points: [{ x: 'c', y: 'c^4 - 3c^2 + 2c - 5', label: '(c, f(c))', color: 'red' }],
          vlines: [{ x: 'c', color: 'gray' }],
          sliders: [{ name: 'c', min: -3, max: 3, step: 0.5, value: 2, label: '$c$' }],
          readouts: [{ label: 'remainder of $f(x) \\div (x - c)$ $= f(c) =$', expr: 'c^4 - 3c^2 + 2c - 5', digits: 4 }],
          caption: 'The remainder on division by $x - c$ is the height of the graph above $x = c$. At $c = 2$ it is $3$; at $c = -3$ it is $43$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why this matters: the bridge to factoring',
          text: 'If $f(c) = 0$, the remainder is $0$, so $f(x) = (x - c)q(x)$ exactly: $x - c$ is a **factor**. That is the [[factor-theorem]], the engine of the next lesson. Every zero you find peels off a linear factor and leaves a smaller polynomial to work on.',
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'A favorite exam question: "Find the remainder when $x^{40} - 3x + 2$ is divided by $x - 1$." Nobody expects 40 rounds of division — the Remainder Theorem gives $1 - 3 + 2 = 0$ in one line.',
        },
        {
          type: 'deepdive',
          title: 'Synthetic division by $ax - b$',
          blocks: [
            {
              type: 'p',
              text: 'Synthetic division is built for $x - c$, but you can adapt it to $2x - 1 = 2\\left(x - \\frac{1}{2}\\right)$. Divide by $x - \\frac{1}{2}$ first, then divide the **quotient** (not the remainder) by $2$.',
            },
            {
              type: 'derivation',
              title: 'Divide $2x^3 - 5x^2 + 3$ by $2x - 1$',
              steps: [
                { tex: '2,\\ -5,\\ 0,\\ 3 \\ \\text{ with } c = \\tfrac{1}{2} \\ \\to \\ 2,\\ -4,\\ -2,\\ 2', why: 'Synthetic division by $x - \\frac{1}{2}$: $2 \\cdot \\frac12 = 1$, $-5 + 1 = -4$; $-4 \\cdot \\frac12 = -2$, $0 - 2 = -2$; $-2 \\cdot \\frac12 = -1$, $3 - 1 = 2$.' },
                { tex: '2x^3 - 5x^2 + 3 = \\left(x - \\tfrac12\\right)(2x^2 - 4x - 2) + 2', why: 'Division-algorithm form for the divisor $x - \\frac12$.' },
                { tex: '= (2x - 1)(x^2 - 2x - 1) + 2', why: 'Move the factor $2$ from the quotient into the divisor: $\\left(x - \\frac12\\right) \\cdot 2 = 2x - 1$.' },
              ],
              result: 'Quotient $x^2 - 2x - 1$, remainder $2$ (and indeed $f\\left(\\frac12\\right) = \\frac14 - \\frac54 + 3 = 2$).',
            },
          ],
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'Find the remainder when $x^{51} + 3$ is divided by $x + 1$.',
      hint: 'Dividing by $x + 1$ means $c = -1$. The remainder is $f(-1)$.',
      label: 'remainder:',
      answer: '2',
      explanation: 'By the Remainder Theorem, the remainder is $f(-1) = (-1)^{51} + 3 = -1 + 3 = 2$, since an odd power of $-1$ is $-1$. Synthetic division would need $52$ columns, mostly zeros; the theorem needs one line.',
    },
    {
      kind: 'truefalse',
      prompt: 'When $f(x)$ is divided by $x + 4$, the remainder is $f(4)$.',
      answer: false,
      explanation: 'The theorem is about dividing by $x - c$. Write $x + 4 = x - (-4)$, so $c = -4$ and the remainder is $f(-4)$. Same sign trap as in synthetic division: the number you use is the one that makes the divisor zero.',
    },
    {
      kind: 'numeric',
      prompt: 'Let $f(x) = x^4 - 3x^2 + 2x - 5$. Use the Remainder Theorem (or synthetic division) to find the remainder when $f(x)$ is divided by $x + 3$.',
      label: 'remainder:',
      answer: '43',
      hint: 'Compute $f(-3)$. Remember $(-3)^4 = 81$.',
      explanation: 'The remainder is $f(-3) = 81 - 3(9) + 2(-3) - 5 = 81 - 27 - 6 - 5 = 43$. Synthetic division with $c = -3$ on $1, 0, -3, 2, -5$ agrees: bottom row $1, -3, 6, -16, 43$, so $f(x) = (x + 3)(x^3 - 3x^2 + 6x - 16) + 43$.',
    },
  ],
  takeaways: [
    'Division algorithm: $f = d \\cdot q + r$ with $r = 0$ or $\\deg r < \\deg d$; equivalently $\\frac{f}{d} = q + \\frac{r}{d}$.',
    'Long division repeats divide–multiply–subtract–bring down on leading terms; use placeholder $0$s for missing powers and check by expanding.',
    'Synthetic division handles divisors $x - c$: bring down, multiply by $c$, add. For $x + a$, use $c = -a$.',
    'Remainder Theorem: dividing $f(x)$ by $x - c$ leaves remainder $f(c)$, because $f(c) = (c - c)q(c) + r = r$.',
    'A remainder of $0$ means $x - c$ is a factor — the starting point for finding zeros.',
  ],
  reading: [
    {
      title: 'OpenStax College Algebra 2e — 5.4 Dividing Polynomials',
      url: 'https://openstax.org/books/college-algebra-2e/pages/5-4-dividing-polynomials',
      source: 'openstax',
      note: 'Long and synthetic division with many worked examples and practice problems.',
    },
    {
      title: "Paul's Online Notes — Dividing Polynomials",
      url: 'https://tutorial.math.lamar.edu/Classes/Alg/DividingPolynomials.aspx',
      source: 'paul',
      note: 'A careful walkthrough of synthetic division and the Remainder Theorem.',
    },
    {
      title: "Wikipedia — Horner's method",
      url: "https://en.wikipedia.org/wiki/Horner%27s_method",
      source: 'wikipedia',
      note: 'How synthetic division doubles as the standard algorithm for evaluating polynomials on a computer.',
    },
  ],
};
