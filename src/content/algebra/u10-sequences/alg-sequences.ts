import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'alg-sequences',
  title: 'Sequences and Summation Notation',
  summary: 'Ordered lists that follow a rule, the two ways to describe them, and the Σ notation that is really just a for loop.',
  minutes: 18,
  objectives: [
    'Read subscript notation $a_n$ and compute terms from an explicit formula',
    'Generate terms from a recursive formula, including the Fibonacci sequence',
    'Guess an explicit formula from the first few terms of a pattern',
    'Expand and evaluate sums written in sigma notation, and translate them to a `for` loop',
    'Use the linearity rules and the formulas for $\\sum k$ and $\\sum k^2$ to evaluate long sums quickly',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'A sequence is a function on $1, 2, 3, \\dots$',
      blocks: [
        {
          type: 'p',
          text: 'A [[sequence]] is an ordered list of numbers: $3, 5, 7, 9, \\dots$ or $1, \\frac{1}{2}, \\frac{1}{3}, \\frac{1}{4}, \\dots$ Each number is a **term**. Order matters — $1, 2, 3$ and $3, 2, 1$ are different sequences — and the list may stop (a *finite* sequence) or go on forever (an *infinite* sequence).',
        },
        {
          type: 'p',
          text: 'We name terms with subscripts: $a_1$ is the first term, $a_2$ the second, and $a_n$ the $n$-th, or **general term**. The subscript $n$ is the term\'s *position*; $a_n$ is its *value*. When a rule gives $a_n$ directly in terms of $n$, it is called an [[explicit-formula]].',
        },
        {
          type: 'definition',
          term: 'Sequence',
          text: 'A sequence is a [[function]] whose [[domain]] is the positive integers $\\{1, 2, 3, \\dots\\}$ (or a first chunk $\\{1, 2, \\dots, N\\}$ of them). Instead of $f(n)$ we write $a_n$.',
        },
        {
          type: 'derivation',
          title: 'First four terms of $a_n = \\dfrac{(-1)^n}{n+1}$',
          steps: [
            { tex: 'a_1 = \\frac{(-1)^1}{1+1} = -\\frac{1}{2}', why: 'Replace every $n$ with $1$. An odd power of $-1$ is $-1$.' },
            { tex: 'a_2 = \\frac{(-1)^2}{2+1} = \\frac{1}{3}', why: 'Now $n = 2$. An even power of $-1$ is $+1$.' },
            { tex: 'a_3 = \\frac{(-1)^3}{3+1} = -\\frac{1}{4}', why: 'Odd again, so negative.' },
            { tex: 'a_4 = \\frac{(-1)^4}{4+1} = \\frac{1}{5}', why: 'Even, so positive. The factor $(-1)^n$ is a switch that flips the sign every step.' },
          ],
          result: 'The sequence is $-\\frac{1}{2}, \\frac{1}{3}, -\\frac{1}{4}, \\frac{1}{5}, \\dots$ — an *alternating* sequence whose terms shrink toward $0$.',
        },
        {
          type: 'graph',
          x: [0, 10.5],
          y: [-0.2, 1.2],
          functions: [{ expr: 'x/(x+1)', label: '$y = \\frac{x}{x+1}$', color: 'gray', dashed: true, domain: [0, 10.5] }],
          hlines: [{ y: 1, label: 'y = 1' }],
          points: [
            { x: 1, y: '1/2' },
            { x: 2, y: '2/3' },
            { x: 3, y: '3/4' },
            { x: 4, y: '4/5' },
            { x: 5, y: '5/6' },
            { x: 6, y: '6/7' },
            { x: 7, y: '7/8' },
            { x: 8, y: '8/9' },
            { x: 9, y: '9/10' },
            { x: 10, y: '10/11' },
          ],
          caption: 'The sequence $a_n = \\frac{n}{n+1}$ is the function $y = \\frac{x}{x+1}$ sampled only at $x = 1, 2, 3, \\dots$ — so its graph is a row of **dots**, not a curve. The dots creep up toward $1$ without reaching it.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why call it a function?',
          text: 'Each position $n$ gets exactly one value $a_n$ — that is precisely what a function does. Seeing sequences as functions means everything you know about functions (formulas, graphs, increasing/decreasing) carries over. The only difference is the domain: you may plug in $n = 3$, but $n = 2.5$ is meaningless, because there is no "two-and-a-halfth" term.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Sequences are arrays',
          text: 'A finite sequence is just an array, and $a_n$ is `a[n]`. One trap: math usually starts at $a_1$ while C++ arrays start at `a[0]`. Some sequences in math also start at $a_0$ — always check where the index begins before you translate.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: '$a_{n+1}$ is not $a_n + 1$',
          text: '$a_{n+1}$ is the **next term** (position $n+1$). $a_n + 1$ is the current term plus one. For $a_n = n^2$: $a_{n+1} = (n+1)^2 = n^2 + 2n + 1$, but $a_n + 1 = n^2 + 1$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'numeric',
      prompt: 'For the sequence $a_n = n^2 - 3n$, find $a_7$.',
      label: '$a_7 =$',
      answer: '28',
      hint: 'Replace every $n$ with $7$.',
      explanation: '$a_7 = 7^2 - 3(7) = 49 - 21 = 28$. The subscript tells you the input; the formula does the rest — exactly like evaluating $f(7)$ for $f(x) = x^2 - 3x$.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Finding a formula from a pattern',
      blocks: [
        {
          type: 'p',
          text: 'Often you see the first few terms and want the general term. There is no single algorithm, but a short checklist cracks most textbook patterns. Look at one feature at a time.',
        },
        {
          type: 'steps',
          items: [
            { title: 'Differences', text: 'Subtract neighbours. A constant difference $d$ means a formula like $dn + c$: for $3, 7, 11, 15, \\dots$ the difference is $4$, and $a_n = 4n - 1$.' },
            { title: 'Ratios', text: 'Divide neighbours. A constant ratio $r$ means a power $r^n$ is involved: $2, 4, 8, 16, \\dots$ is $a_n = 2^n$.' },
            { title: 'Signs', text: 'If signs alternate, include $(-1)^n$ (negative first) or $(-1)^{n+1}$ (positive first).' },
            { title: 'Fractions', text: 'Find a pattern for numerators and denominators separately: $\\frac{1}{2}, \\frac{2}{3}, \\frac{3}{4}, \\dots$ is $\\frac{n}{n+1}$.' },
            { title: 'Check', text: 'Plug $n = 1, 2, 3$ into your formula and compare with every given term.' },
          ],
        },
        {
          type: 'derivation',
          title: 'Find $a_n$ for $-\\frac{1}{3}, \\frac{1}{9}, -\\frac{1}{27}, \\frac{1}{81}, \\dots$',
          steps: [
            { tex: '\\text{signs: } -, +, -, + \\implies (-1)^n', why: 'The first term is negative, so we want $-1$ when $n = 1$: that is $(-1)^n$, not $(-1)^{n+1}$.' },
            { tex: '\\text{sizes: } \\frac{1}{3}, \\frac{1}{9}, \\frac{1}{27}, \\frac{1}{81} = \\frac{1}{3^1}, \\frac{1}{3^2}, \\frac{1}{3^3}, \\frac{1}{3^4}', why: 'Ignoring signs, each denominator is $3$ times the previous one, and the exponent matches the position.' },
            { tex: 'a_n = \\frac{(-1)^n}{3^n} = \\left(-\\frac{1}{3}\\right)^n', why: 'Combine the sign switch and the size. The two forms are equal because $\\frac{(-1)^n}{3^n} = \\left(\\frac{-1}{3}\\right)^n$ by the power-of-a-quotient rule.' },
            { tex: 'a_1 = -\\tfrac{1}{3},\\ a_2 = \\tfrac{1}{9},\\ a_3 = -\\tfrac{1}{27}\\ \\checkmark', why: 'Always check against the given terms.' },
          ],
          result: '$a_n = \\left(-\\frac{1}{3}\\right)^n$.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'A few terms never *prove* a pattern',
          text: 'Finitely many terms are consistent with infinitely many formulas. Place $n$ points on a circle and join every pair with a chord: the greatest number of regions you can get is $1, 2, 4, 8, 16, \\dots$ — and then $31$, not $32$. "Find the formula" really means "find the *simplest* formula that fits", and a definitive answer needs the rule, not just the first terms.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'expr',
      prompt: 'Find an explicit formula for the sequence $5, 8, 11, 14, \\dots$ (start at $n = 1$).',
      variables: ['n'],
      label: '$a_n =$',
      answer: '3n + 2',
      answerTex: 'a_n = 3n + 2',
      hint: 'The difference between terms is constant. Try $3n + c$ and pick $c$ so that $a_1 = 5$.',
      explanation: 'Each term is $3$ more than the last, so the formula has the form $3n + c$. At $n = 1$ we need $3 + c = 5$, so $c = 2$: $a_n = 3n + 2$. Check: $a_2 = 8$, $a_3 = 11$, $a_4 = 14$. Any equivalent form, such as $5 + 3(n - 1)$, is also correct.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'mcq',
      prompt: 'Which formula generates $\\frac{1}{2}, -\\frac{2}{3}, \\frac{3}{4}, -\\frac{4}{5}, \\dots$ starting at $n = 1$?',
      options: [
        {
          text: '$a_n = (-1)^n \\dfrac{n}{n+1}$',
          why: 'At $n = 1$ this gives $-\\frac{1}{2}$: every sign is flipped. $(-1)^n$ makes the *first* term negative.',
        },
        {
          text: '$a_n = (-1)^{n+1} \\dfrac{n}{n+1}$',
          correct: true,
          why: '$n = 1$: $+\\frac{1}{2}$; $n = 2$: $-\\frac{2}{3}$; $n = 3$: $+\\frac{3}{4}$. Sign and size both match.',
        },
        {
          text: '$a_n = (-1)^{n+1} \\dfrac{n+1}{n}$',
          why: 'The fraction is upside down: at $n = 1$ it gives $2$, not $\\frac{1}{2}$.',
        },
        {
          text: '$a_n = (-1)^{n+1} \\dfrac{1}{n+1}$',
          why: 'This gives $\\frac{1}{2}, -\\frac{1}{3}, \\frac{1}{4}, \\dots$ — the numerators should grow with $n$.',
        },
      ],
      explanation: 'Split the job: numerators $1, 2, 3, 4$ are $n$, denominators $2, 3, 4, 5$ are $n + 1$, and the signs $+, -, +, -$ start positive, which calls for $(-1)^{n+1}$ (it equals $+1$ when $n = 1$).',
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'concept',
      title: 'Recursive formulas: each term from the one before',
      blocks: [
        {
          type: 'p',
          text: 'A second way to describe a sequence is to say how to get from one term to the next. A [[recursive-formula]] gives one or more starting terms (the **initial conditions**) plus a rule that computes $a_n$ from earlier terms.',
        },
        {
          type: 'derivation',
          title: 'Terms of $a_1 = 3,\\ a_n = 2a_{n-1} - 1$',
          steps: [
            { tex: 'a_1 = 3', why: 'Given: the initial condition. Without it the rule has nothing to start from.' },
            { tex: 'a_2 = 2a_1 - 1 = 2(3) - 1 = 5', why: 'Use the rule with $n = 2$: "double the previous term and subtract $1$".' },
            { tex: 'a_3 = 2a_2 - 1 = 2(5) - 1 = 9', why: 'Same rule, fed the term we just found.' },
            { tex: 'a_4 = 2(9) - 1 = 17, \\quad a_5 = 2(17) - 1 = 33', why: 'Keep going. To reach $a_{100}$ this way you would need all $99$ terms before it.' },
            { tex: 'a_n = 2^n + 1', why: 'Spotting that each term is one more than a power of $2$ ($3 = 2 + 1$, $5 = 4 + 1$, $9 = 8 + 1, \\dots$) gives an explicit formula that jumps straight to any term.' },
          ],
          result: '$3, 5, 9, 17, 33, \\dots$ and in fact $a_n = 2^n + 1$ (check: $2(2^{n-1} + 1) - 1 = 2^n + 1$).',
        },
        {
          type: 'p',
          text: 'The most famous recursive sequence needs **two** initial terms. The Fibonacci sequence is $F_1 = 1$, $F_2 = 1$, $F_n = F_{n-1} + F_{n-2}$: each term is the sum of the two before it.',
        },
        {
          type: 'math',
          tex: '1,\\ 1,\\ 2,\\ 3,\\ 5,\\ 8,\\ 13,\\ 21,\\ 34,\\ 55,\\ \\dots',
          caption: 'The first ten Fibonacci numbers.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why recursion needs a base case',
          text: 'The rule $a_n = 2a_{n-1} - 1$ alone describes infinitely many sequences — start at $3$ and you get one, start at $0$ and you get $0, -1, -3, -7, \\dots$. The initial condition pins down *which* one. It is exactly the base case of a recursive function: without it, computing $a_5$ asks for $a_4$, which asks for $a_3$, … forever.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Recursion vs. iteration',
          text: 'Translating $F_n = F_{n-1} + F_{n-2}$ literally into a recursive C++ function recomputes the same terms over and over and takes exponential time. A loop that remembers just the last two terms takes $n$ steps. In discrete math you will meet *recurrence relations* like this constantly — they describe how long recursive algorithms run.',
        },
        {
          type: 'code',
          title: 'fib.cpp',
          runnable: true,
          code: `#include <iostream>

int main() {
    long long prev = 1, curr = 1;      // F1 and F2: the initial conditions
    std::cout << prev << ' ' << curr;
    for (int n = 3; n <= 10; ++n) {
        long long next = curr + prev;  // F(n) = F(n-1) + F(n-2)
        prev = curr;
        curr = next;
        std::cout << ' ' << curr;
    }
    std::cout << '\\n';
}`,
          output: '1 1 2 3 5 8 13 21 34 55',
          annotations: [
            { lines: 4, text: 'Two initial conditions, because the rule looks back two steps.' },
            { lines: 7, text: 'The recursive rule.' },
            { lines: '8-9', text: 'Slide the window forward: only the last two terms are ever needed.' },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'numeric',
      prompt: 'A sequence is defined by $a_1 = 2$ and $a_n = 3a_{n-1} + 1$ for $n \\ge 2$. Find $a_4$.',
      label: '$a_4 =$',
      answer: '67',
      hint: 'Compute $a_2$ first, then $a_3$, then $a_4$.',
      explanation: 'Work forward one term at a time: $a_2 = 3(2) + 1 = 7$, $a_3 = 3(7) + 1 = 22$, $a_4 = 3(22) + 1 = 67$. A recursive formula only ever tells you the *next* term, so you must climb through every earlier one.',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'concept',
      title: 'Sigma notation: a compact way to write sums',
      blocks: [
        {
          type: 'p',
          text: 'Adding up the terms of a sequence is so common that it has its own notation. [[summation-notation|Summation (sigma) notation]] uses the Greek capital letter $\\Sigma$ ("sigma", for **S**um):',
        },
        {
          type: 'math',
          tex: '\\sum_{k=1}^{n} a_k = a_1 + a_2 + a_3 + \\cdots + a_n',
          caption: 'Read: "the sum of $a_k$ for $k$ from $1$ to $n$".',
        },
        {
          type: 'list',
          items: [
            'The **index** $k$ starts at the **lower limit** (below $\\Sigma$) and goes up by $1$ until it reaches the **upper limit** (above $\\Sigma$).',
            'The expression after $\\Sigma$ (the **summand**) is evaluated at each value of $k$, and the results are added.',
            'The number of terms is $\\text{upper} - \\text{lower} + 1$. So $\\sum_{k=3}^{7}$ has $5$ terms, not $4$.',
            'The index is a *dummy* variable: $\\sum_{k=1}^{4} k^2$ and $\\sum_{i=1}^{4} i^2$ are the same number, $30$.',
          ],
        },
        {
          type: 'derivation',
          title: 'Evaluate $\\displaystyle\\sum_{k=2}^{5} k^2$',
          steps: [
            { tex: '\\sum_{k=2}^{5} k^2 = 2^2 + 3^2 + 4^2 + 5^2', why: 'Let $k$ take each value $2, 3, 4, 5$ (that is $5 - 2 + 1 = 4$ terms) and write one term for each.' },
            { tex: '= 4 + 9 + 16 + 25', why: 'Evaluate each term.' },
            { tex: '= 54', why: 'Add.' },
          ],
          result: '$\\sum_{k=2}^{5} k^2 = 54$.',
        },
        {
          type: 'compare',
          left: {
            title: 'Math',
            tone: 'neutral',
            tex: ['S = \\sum_{k=1}^{4} (2k + 1)', '= 3 + 5 + 7 + 9 = 24'],
          },
          right: {
            title: 'C++',
            tone: 'neutral',
            lang: 'cpp',
            code: 'int S = 0;\nfor (int k = 1; k <= 4; ++k)\n    S += 2 * k + 1;\n// S == 24',
          },
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Σ is a for loop',
          text: 'Every piece of sigma notation maps onto a loop: lower limit → initialiser (`k = 1`), upper limit → condition (`k <= 4`, note the `<=`), summand → loop body (`S += …`), and the running total starts at `0`. Python programmers will recognise `sum(2*k + 1 for k in range(1, 5))` — where the off-by-one in `range` is a classic source of bugs.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Watch where the index starts',
          text: '$\\sum_{k=0}^{3} 2^k = 1 + 2 + 4 + 8 = 15$, but $\\sum_{k=1}^{3} 2^k = 2 + 4 + 8 = 14$. The lower limit matters as much as the formula.',
        },
      ],
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'numeric',
      prompt: 'Evaluate the sum.',
      tex: '\\sum_{k=1}^{5} \\left(k^2 - 1\\right)',
      answer: '50',
      hint: 'Write out the five terms: $k = 1, 2, 3, 4, 5$.',
      explanation: 'The terms are $0, 3, 8, 15, 24$, and $0 + 3 + 8 + 15 + 24 = 50$. Equivalently, $(1 + 4 + 9 + 16 + 25) - 5 = 55 - 5 = 50$: the "$-1$" is subtracted once **for each of the five terms**.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'fill',
      prompt: 'Write the sum $3 + 6 + 9 + \\cdots + 30$ in sigma notation.',
      template: 'With $3 + 6 + 9 + \\cdots + 30 = \\sum_{k=1}^{N} f(k)$, the upper limit is $N =$ ___ and the summand is $f(k) =$ ___.',
      blanks: [{ answers: ['$10$'] }, { answers: ['$3k$'] }],
      wordBank: ['$10$', '$30$', '$3k$', '$k + 3$', '$9$', '$3$'],
      explanation: 'The terms are multiples of $3$: the $k$-th term is $3k$. The last term $30 = 3 \\cdot 10$ corresponds to $k = 10$, so $N = 10$, not $30$ — the upper limit is the last value of the *index*, not the last term. Thus $3 + 6 + \\cdots + 30 = \\sum_{k=1}^{10} 3k$.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'Rules for sums, and two famous formulas',
      blocks: [
        {
          type: 'p',
          text: 'Writing out $100$ terms is no fun. Because a sum is just repeated addition, the ordinary laws of arithmetic let us split sums apart and pull out constants:',
        },
        {
          type: 'theorem',
          name: 'Properties of finite sums',
          tex: '\\begin{aligned} \\sum_{k=1}^{n} (a_k \\pm b_k) &= \\sum_{k=1}^{n} a_k \\pm \\sum_{k=1}^{n} b_k \\\\ \\sum_{k=1}^{n} c\\,a_k &= c \\sum_{k=1}^{n} a_k \\\\ \\sum_{k=1}^{n} c &= nc \\end{aligned}',
          text: 'The first two rules are the [[commutative-property|commutative]], [[associative-property|associative]] and [[distributive-property|distributive]] properties applied to many terms at once. The third says that adding the constant $c$ to itself $n$ times gives $nc$.',
        },
        {
          type: 'p',
          text: 'Combine these with two closed-form formulas and you can evaluate any sum of a polynomial of degree $\\le 2$ in a few lines:',
        },
        {
          type: 'math',
          tex: '\\sum_{k=1}^{n} k = \\frac{n(n+1)}{2} \\qquad\\qquad \\sum_{k=1}^{n} k^2 = \\frac{n(n+1)(2n+1)}{6}',
        },
        {
          type: 'graph',
          x: [0, 10.5],
          y: [0, 10.5],
          equal: true,
          functions: [{ expr: 'x', label: '$y = x$', color: 'gray', dashed: true }],
          riemann: { expr: 'x', from: 0, to: 'n', n: 'n', method: 'right' },
          sliders: [{ name: 'n', min: 1, max: 10, step: 1, value: 5, label: '$n$' }],
          readouts: [
            { label: 'staircase area $= 1 + 2 + \\cdots + n = \\frac{n(n+1)}{2} =$', expr: 'n(n+1)/2' },
            { label: 'triangle under $y = x$: $\\frac{n^2}{2} =$', expr: 'n^2/2' },
          ],
          caption: 'Column $k$ has height $k$, so the staircase has area $1 + 2 + \\cdots + n$. It is the triangle of area $\\frac{n^2}{2}$ plus $n$ little half-squares of area $\\frac{1}{2}$: total $\\frac{n^2}{2} + \\frac{n}{2} = \\frac{n(n+1)}{2}$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why $1 + 2 + \\cdots + n = \\frac{n(n+1)}{2}$',
          text: 'Write the sum forwards and backwards and add the two rows column by column: $(1 + n) + (2 + (n-1)) + \\cdots + (n + 1)$. Every column adds to $n + 1$, and there are $n$ columns, so twice the sum is $n(n+1)$. Legend says a young Carl Friedrich Gauss used this trick to add $1$ to $100$ in seconds: $\\frac{100 \\cdot 101}{2} = 5050$.',
        },
        {
          type: 'derivation',
          title: 'Evaluate $\\displaystyle\\sum_{k=1}^{20} (3k + 2)$',
          steps: [
            { tex: '\\sum_{k=1}^{20} (3k + 2) = 3\\sum_{k=1}^{20} k + \\sum_{k=1}^{20} 2', why: 'Split the sum of two terms into two sums, and pull the constant factor $3$ out of the first.' },
            { tex: '= 3 \\cdot \\frac{20 \\cdot 21}{2} + 20 \\cdot 2', why: 'Use $\\sum k = \\frac{n(n+1)}{2}$ with $n = 20$, and $\\sum c = nc$: the $2$ is added once for each of the $20$ terms.' },
            { tex: '= 3 \\cdot 210 + 40', why: 'Arithmetic: $\\frac{20 \\cdot 21}{2} = 210$.' },
            { tex: '= 670', why: 'Finish the arithmetic.' },
          ],
          result: '$\\sum_{k=1}^{20}(3k + 2) = 670$ — no need to write out twenty terms.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Sums do not distribute over everything',
          text: 'Sums split over **addition**, not multiplication or powers: $\\sum a_k b_k \\ne \\left(\\sum a_k\\right)\\left(\\sum b_k\\right)$ and $\\sum k^2 \\ne \\left(\\sum k\\right)^2$. For $n = 2$: $1 + 4 = 5$, but $(1 + 2)^2 = 9$.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'From $O(n)$ to $O(1)$',
          text: 'A loop that adds $1$ to $n$ takes $n$ steps; the formula $\\frac{n(n+1)}{2}$ takes three operations no matter how big $n$ is. The same sum shows up when you count the work in nested loops like `for i … for j < i …`: the inner body runs $0 + 1 + \\cdots + (n-1) = \\frac{n(n-1)}{2}$ times, which is why such algorithms are called *quadratic*.',
        },
        {
          type: 'deepdive',
          title: 'Proving the formulas: a preview of induction',
          blocks: [
            {
              type: 'p',
              text: 'The pairing trick is a proof for $\\sum k$, but how would you prove $\\sum k^2 = \\frac{n(n+1)(2n+1)}{6}$? In discrete math you will learn **proof by induction**: check the formula for $n = 1$ ($1 = \\frac{1 \\cdot 2 \\cdot 3}{6}$ ✓), then show that if it holds for $n$, adding the next term $(n+1)^2$ makes it hold for $n + 1$:',
            },
            {
              type: 'math',
              tex: '\\frac{n(n+1)(2n+1)}{6} + (n+1)^2 = \\frac{(n+1)(n+2)(2n+3)}{6}',
            },
            {
              type: 'p',
              text: 'Like toppling dominoes, the base case plus the step proves the formula for every $n$. Notice the structure is the same as a recursive definition: a base case and a rule for going from $n$ to $n + 1$.',
            },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'numeric',
      prompt: 'Use the sum rules to evaluate the sum of the first $50$ odd numbers.',
      tex: '\\sum_{k=1}^{50} (2k - 1)',
      answer: '2500',
      hint: 'Split it as $2\\sum k - \\sum 1$ and use $\\sum_{k=1}^{n} k = \\frac{n(n+1)}{2}$.',
      explanation: '$\\sum_{k=1}^{50}(2k - 1) = 2 \\cdot \\frac{50 \\cdot 51}{2} - 50 = 2550 - 50 = 2500$. Notice $2500 = 50^2$. In general $1 + 3 + 5 + \\cdots + (2n - 1) = n^2$: the odd numbers add up to perfect squares (picture adding L-shaped borders to a square).',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'error',
      prompt: 'A student evaluates $\\sum_{k=1}^{10} (k + 4)$. Tap the first line that is wrong.',
      lines: [
        '$\\sum_{k=1}^{10} (k + 4) = \\sum_{k=1}^{10} k + \\sum_{k=1}^{10} 4$',
        '$= \\dfrac{10 \\cdot 11}{2} + \\sum_{k=1}^{10} 4$',
        '$= 55 + 4$',
        '$= 59$',
      ],
      errorLines: [3],
      explanation: 'Line 3 treats $\\sum_{k=1}^{10} 4$ as $4$. But the $4$ is added once for every value of $k$ — ten times — so $\\sum_{k=1}^{10} 4 = 10 \\cdot 4 = 40$. The correct total is $55 + 40 = 95$. (Check directly: $5 + 6 + \\cdots + 14 = 95$.)',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'mcq',
      prompt: 'Which C++ loop correctly computes $\\displaystyle S = \\sum_{k=3}^{7} k^2$? (Assume `int S = 0;` comes first.)',
      codeOptions: true,
      options: [
        {
          text: 'for (int k = 3; k < 7; ++k) S += k * k;',
          why: '`k < 7` stops at $k = 6$, so the term $7^2$ is missed — an off-by-one error. The upper limit is included in Σ.',
        },
        {
          text: 'for (int k = 3; k <= 7; ++k) S += k ^ 2;',
          why: 'In C++, `^` is bitwise XOR, not a power! `3 ^ 2` is `1`. Square with `k * k` (or `std::pow` for doubles).',
        },
        {
          text: 'for (int k = 3; k <= 7; ++k) S += k * k;',
          correct: true,
          why: '$k$ runs over $3, 4, 5, 6, 7$, inclusive of both limits, and each pass adds $k^2$. The result is $9 + 16 + 25 + 36 + 49 = 135$.',
        },
        {
          text: 'for (int k = 0; k <= 7; ++k) S += k * k;',
          why: 'This starts at the wrong lower limit and adds $0^2 + 1^2 + 2^2 = 5$ too much, giving $140$.',
        },
      ],
      explanation: 'Translate piece by piece: lower limit $3$ → `k = 3`; upper limit $7$, *included* → `k <= 7`; summand $k^2$ → `S += k * k`. The sum is $9 + 16 + 25 + 36 + 49 = 135$.',
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'truefalse',
      prompt: 'For every positive integer $n$, $\\displaystyle\\sum_{k=1}^{n} k^2 = \\left(\\sum_{k=1}^{n} k\\right)^2$.',
      answer: false,
      explanation: 'Squaring a sum is not the same as summing squares — the cross terms are missing. For $n = 2$: $\\sum k^2 = 1 + 4 = 5$, while $\\left(\\sum k\\right)^2 = 3^2 = 9$. The equation holds only for $n = 1$. (Curiously, the *cubes* do satisfy $\\sum k^3 = \\left(\\sum k\\right)^2$, which is a famous surprise.)',
    },
  ],
  takeaways: [
    'A sequence is a function on the positive integers; $a_n$ is the term in position $n$, and its graph is a set of dots.',
    'An explicit formula gives $a_n$ directly from $n$; a recursive formula gives initial conditions plus a rule for the next term.',
    'To guess a formula, look separately at differences, ratios, signs ($(-1)^n$ or $(-1)^{n+1}$) and numerators/denominators — then check.',
    '$\\sum_{k=m}^{n} a_k$ adds $a_k$ for $k = m, m+1, \\dots, n$ ($n - m + 1$ terms) — exactly a `for` loop with `k <= n`.',
    'Sums split over $+$ and $-$, constants factor out, $\\sum_{k=1}^{n} c = nc$, $\\sum k = \\frac{n(n+1)}{2}$, $\\sum k^2 = \\frac{n(n+1)(2n+1)}{6}$.',
  ],
  reading: [
    {
      title: 'OpenStax College Algebra 2e — 9.1 Sequences and Their Notations',
      url: 'https://openstax.org/books/college-algebra-2e/pages/9-1-sequences-and-their-notations',
      source: 'openstax',
      note: 'More practice with explicit and recursive formulas, including factorial notation.',
    },
    {
      title: "Paul's Online Notes — Summation Notation",
      url: 'https://tutorial.math.lamar.edu/Classes/CalcI/SummationNotation.aspx',
      source: 'paul',
      note: 'A careful treatment of sigma notation and the sum formulas, written with later use in calculus in mind.',
    },
    {
      title: 'Wikipedia — Fibonacci sequence',
      url: 'https://en.wikipedia.org/wiki/Fibonacci_sequence',
      source: 'wikipedia',
      note: 'The history of the most famous recursive sequence and its surprising connections to the golden ratio and to algorithms.',
    },
  ],
};
