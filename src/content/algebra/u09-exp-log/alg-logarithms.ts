import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'alg-logarithms',
  title: 'Logarithms',
  summary: 'The logarithm answers "what exponent?" — the inverse of an exponential, the language of bits, and the reason binary search is so fast.',
  minutes: 17,
  objectives: [
    'Convert between exponential form $b^y = x$ and logarithmic form $\\log_b x = y$',
    'Evaluate logarithms by hand by rewriting numbers as powers of the base',
    'Use common logs ($\\log$) and natural logs ($\\ln$) and the inverse identities $\\log_b(b^x) = x$, $b^{\\log_b x} = x$',
    'Graph $y = \\log_b x$ as the reflection of $y = b^x$ and find the domain of a log function',
    'Use $\\log_2$ to count bits and binary-search steps',
  ],
  steps: [
    {
      kind: 'concept',
      title: 'The question a logarithm answers',
      blocks: [
        {
          type: 'p',
          text: 'Exponentials answer "what do I get if I multiply $2$ by itself $5$ times?" ($2^5 = 32$). Often we need the reverse question: **what power of $2$ gives $32$?** Or: how many times must a bacteria population double to reach a million? How many bits does it take to count to 1000? The tool for "what exponent?" is the [[logarithm]].',
        },
        {
          type: 'definition',
          term: 'Logarithm',
          text: 'For $b > 0$, $b \\ne 1$ and $x > 0$,\n\n$$\\log_b x = y \\quad \\text{means exactly} \\quad b^y = x.$$\n\nRead $\\log_b x$ as "log base $b$ of $x$": it is **the exponent you put on $b$ to get $x$**.',
        },
        {
          type: 'p',
          text: 'Every logarithm statement is an exponential statement in disguise. Converting between the two forms is the single most useful skill in this unit. Keep the base as the base in both: the base of the log becomes the base of the power.',
        },
        {
          type: 'table',
          headers: ['Exponential form', 'Logarithmic form', 'In words'],
          rows: [
            ['$2^5 = 32$', '$\\log_2 32 = 5$', '$2$ to the $5$ is $32$'],
            ['$10^3 = 1000$', '$\\log_{10} 1000 = 3$', '$10$ to the $3$ is $1000$'],
            ['$3^{-2} = \\frac{1}{9}$', '$\\log_3 \\frac{1}{9} = -2$', 'logs can be negative'],
            ['$25^{1/2} = 5$', '$\\log_{25} 5 = \\frac{1}{2}$', 'logs can be fractions'],
            ['$7^0 = 1$', '$\\log_7 1 = 0$', '$\\log_b 1 = 0$ for every base'],
          ],
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why must $x$ be positive?',
          text: 'A logarithm\'s output is an exponent, and its input is what the base produces. But $b^y$ is **always positive** (the range of $b^x$ is $(0, \\infty)$). No exponent turns $2$ into $0$ or into $-8$, so $\\log_2 0$ and $\\log_2(-8)$ are undefined. The **output** of a log can be any real number; the **input** must be positive.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'The spiral trick',
          text: 'To convert $\\log_b x = y$, start at the base $b$, swing to the $y$ on the other side of the equals sign, then back to $x$: "$b$ to the $y$ equals $x$."',
        },
      ],
    },
    {
      kind: 'fill',
      prompt: 'Rewrite $5^3 = 125$ in logarithmic form.',
      template: '$\\log$ with base ___ of ___ equals ___.',
      blanks: [{ answers: ['$5$'] }, { answers: ['$125$'] }, { answers: ['$3$'] }],
      wordBank: ['$5$', '$125$', '$3$', '$15$', '$10$'],
      explanation: 'The base of the power stays the base of the log, the exponent becomes the **answer** of the log, and the result of the power goes **inside** the log: $\\log_5 125 = 3$. Check by asking the log\'s question: "what power of $5$ is $125$?" — the answer is $3$.',
    },
    {
      kind: 'concept',
      title: 'Evaluating logs by hand',
      blocks: [
        {
          type: 'p',
          text: 'To evaluate $\\log_b x$ without a calculator, set it equal to $y$, convert to exponential form, and write both sides as powers of a **common base**. Then the exponents must match.',
        },
        {
          type: 'derivation',
          title: 'Evaluate $\\log_4 8$',
          steps: [
            { tex: '\\log_4 8 = y', why: 'Name the unknown exponent.' },
            { tex: '4^y = 8', why: 'Convert to exponential form: base $4$, exponent $y$, result $8$.' },
            { tex: '(2^2)^y = 2^3', why: '$4$ is not a whole-number power of $8$ or vice versa, but both are powers of $2$.' },
            { tex: '2^{2y} = 2^3', why: 'Power of a power: multiply the exponents.' },
            { tex: '2y = 3 \\implies y = \\tfrac{3}{2}', why: 'Exponential functions are [[one-to-one-function|one-to-one]], so equal powers of the same base have equal exponents.' },
          ],
          result: '$\\log_4 8 = \\frac{3}{2}$. Check: $4^{3/2} = (\\sqrt4)^3 = 8$. ✓',
        },
        {
          type: 'derivation',
          title: 'Evaluate $\\log_2 \\frac{1}{8}$',
          steps: [
            { tex: '2^y = \\tfrac{1}{8}', why: 'Exponential form of $\\log_2 \\frac18 = y$.' },
            { tex: '2^y = 2^{-3}', why: '$\\frac18 = \\frac{1}{2^3} = 2^{-3}$: a reciprocal is a negative exponent.' },
            { tex: 'y = -3', why: 'Match exponents.' },
          ],
          result: '$\\log_2 \\frac{1}{8} = -3$. Inputs between $0$ and $1$ give negative logs (for bases greater than $1$).',
        },
        {
          type: 'list',
          items: [
            '$\\log_b 1 = 0$, because $b^0 = 1$.',
            '$\\log_b b = 1$, because $b^1 = b$.',
            '$\\log_b b^n = n$, because that is literally the exponent on $b$.',
          ],
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'Evaluate $\\log_8 4$ exactly.',
      hint: 'Set $8^y = 4$ and write both sides as powers of $2$.',
      label: '$\\log_8 4 =$',
      answer: '2/3',
      answerTex: '\\frac{2}{3}',
      explanation: '$8^y = 4$ becomes $2^{3y} = 2^2$, so $3y = 2$ and $y = \\frac{2}{3}$. Compare with $\\log_4 8 = \\frac32$: swapping the base and the input flips the log to its reciprocal. Check: $8^{2/3} = (\\sqrt[3]{8})^2 = 2^2 = 4$. ✓',
    },
    {
      kind: 'error',
      prompt: 'A student evaluates $\\log_2 \\frac{1}{16}$. Tap the first incorrect line.',
      lines: [
        'Let $y = \\log_2 \\frac{1}{16}$.',
        'Then $2^y = \\frac{1}{16}$.',
        'Since $\\frac{1}{16} = 2^4$, we get $2^y = 2^4$.',
        'So $y = 4$.',
      ],
      errorLines: [3],
      explanation: '$2^4 = 16$, not $\\frac{1}{16}$. A reciprocal needs a negative exponent: $\\frac{1}{16} = 2^{-4}$, so $y = -4$. A quick sanity check would catch this: the input $\\frac{1}{16}$ is less than $1$, so with base $2$ its log must be negative.',
    },
    {
      kind: 'concept',
      title: 'Common logs, natural logs, and the undo identities',
      blocks: [
        {
          type: 'p',
          text: 'Two bases get special notation because they are used constantly:',
        },
        {
          type: 'table',
          headers: ['Name', 'Notation', 'Means', 'Example'],
          rows: [
            ['[[common-logarithm|common log]]', '$\\log x$', '$\\log_{10} x$', '$\\log 1000 = 3$'],
            ['[[natural-logarithm|natural log]]', '$\\ln x$', '$\\log_e x$', '$\\ln e^5 = 5$'],
          ],
          caption: 'Calculators have a LOG key (base 10) and an LN key (base $e$). In this app, type `log(x)` for base 10, `ln(x)` for base $e$ and `log_2(x)` for any other base.',
        },
        {
          type: 'p',
          text: 'Because $\\log_b$ undoes "raise $b$ to a power" and vice versa, applying one after the other gets you back where you started. These are the [[inverse-function|inverse function]] identities:',
        },
        {
          type: 'theorem',
          name: 'Inverse properties',
          tex: '\\log_b\\!\\left(b^x\\right) = x \\ \\text{ for all } x, \\qquad b^{\\log_b x} = x \\ \\text{ for } x > 0',
          text: 'In particular $\\ln(e^x) = x$ and $e^{\\ln x} = x$.',
        },
        {
          type: 'derivation',
          title: 'Simplify $\\log(0.001) + e^{\\ln 7}$',
          steps: [
            { tex: '0.001 = \\frac{1}{1000} = 10^{-3}', why: 'Rewrite the input as a power of the base, $10$.' },
            { tex: '\\log(10^{-3}) = -3', why: '$\\log_b(b^x) = x$ with $b = 10$.' },
            { tex: 'e^{\\ln 7} = 7', why: '$b^{\\log_b x} = x$ with $b = e$: "raise $e$ to the power that gives $7$" gives $7$.' },
            { tex: '-3 + 7 = 4', why: 'Add.' },
          ],
          result: '$\\log(0.001) + e^{\\ln 7} = 4$.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Logs count digits',
          text: 'A positive whole number $N$ has $\\lfloor \\log N \\rfloor + 1$ digits. For example $\\log(2^{64}) \\approx 19.27$, so $2^{64} = 18{,}446{,}744{,}073{,}709{,}551{,}616$ has $20$ digits. The common log measures "how many powers of ten" — which is why pH, decibels and the Richter scale are all logarithmic.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'Evaluate $\\log(0.01) + \\ln\\!\\left(e^{5}\\right)$.',
      hint: '$0.01 = 10^{?}$. Then use $\\ln(e^x) = x$.',
      answer: '3',
      explanation: '$0.01 = 10^{-2}$, so $\\log(0.01) = -2$. And $\\ln(e^5) = 5$ because $\\ln$ undoes $e^{(\\,)}$. The sum is $-2 + 5 = 3$.',
    },
    {
      kind: 'concept',
      title: 'The graph of $y = \\log_b x$',
      blocks: [
        {
          type: 'p',
          text: 'Since $\\log_b$ is the inverse of $b^x$, its graph is the graph of $y = b^x$ **reflected across the line $y = x$**: every point $(a, c)$ on $y = b^x$ becomes $(c, a)$ on $y = \\log_b x$. So $(0, 1)$ becomes $(1, 0)$ and $(1, b)$ becomes $(b, 1)$.',
        },
        {
          type: 'graph',
          x: [-4, 8],
          y: [-4, 8],
          equal: true,
          functions: [
            { expr: 'b^x', label: '$y = b^x$', color: 'blue' },
            { expr: 'ln(x)/ln(b)', label: '$y = \\log_b x$', color: 'red', domain: [0.001, 8] },
            { expr: 'x', label: '$y = x$', color: 'gray', dashed: true },
          ],
          points: [
            { x: 1, y: 0, label: '(1, 0)', color: 'red' },
            { x: 'b', y: 1, label: '(b, 1)', color: 'red' },
          ],
          sliders: [{ name: 'b', min: 1.2, max: 5, step: 0.1, value: 2, label: '$b$' }],
          caption: 'The red log curve is the blue exponential mirrored in $y = x$. The exponential\'s horizontal asymptote $y = 0$ becomes the log\'s vertical asymptote $x = 0$.',
        },
        {
          type: 'table',
          headers: ['Feature', '$y = b^x$', '$y = \\log_b x$'],
          rows: [
            ['Domain', '$(-\\infty, \\infty)$', '$(0, \\infty)$'],
            ['Range', '$(0, \\infty)$', '$(-\\infty, \\infty)$'],
            ['Key point', '$(0, 1)$', '$(1, 0)$'],
            ['Asymptote', 'horizontal, $y = 0$', '[[vertical-asymptote|vertical]], $x = 0$'],
          ],
          caption: 'Domain and range swap, as they do for every inverse pair. (Shown for $b > 1$.)',
        },
        {
          type: 'p',
          text: 'Notice how slowly the log climbs: $\\log_2 x$ only reaches $10$ at $x = 1024$ and $20$ at about a million. Exponentials explode; logs crawl.',
        },
        {
          type: 'heading',
          text: 'Domain of a log function',
        },
        {
          type: 'p',
          text: 'The rule "the input of a log must be positive" applies to the **whole argument**. For $f(x) = \\log(x - 3)$, require $x - 3 > 0$, so the domain is $(3, \\infty)$ and the vertical asymptote shifts to $x = 3$.',
        },
        {
          type: 'derivation',
          title: 'Find the inverse of $f(x) = 2^x + 1$',
          steps: [
            { tex: 'y = 2^x + 1', why: 'Write $f$ with $y$.' },
            { tex: 'x = 2^y + 1', why: 'Swap $x$ and $y$: that is what an inverse does.' },
            { tex: 'x - 1 = 2^y', why: 'Isolate the exponential before converting.' },
            { tex: 'y = \\log_2(x - 1)', why: 'Convert $2^y = x - 1$ to logarithmic form.' },
          ],
          result: '$f^{-1}(x) = \\log_2(x - 1)$, with domain $x > 1$ — exactly the range of $f$.',
        },
      ],
    },
    {
      kind: 'expr',
      prompt: 'Find the inverse of $f(x) = 3^x - 2$.',
      hint: 'Swap $x$ and $y$, isolate $3^y$, then convert to log form. Type a base-3 log as `log_3(...)`.',
      label: '$f^{-1}(x) =$',
      answer: 'log_3(x + 2)',
      answerTex: '\\log_3(x + 2)',
      domain: [-1.5, 5],
      explanation: 'Swap: $x = 3^y - 2$. Add $2$: $x + 2 = 3^y$. Convert: $y = \\log_3(x + 2)$. Its domain is $x > -2$, matching the range $(-2, \\infty)$ of $f$, and its vertical asymptote $x = -2$ is the mirror image of $f$\'s horizontal asymptote $y = -2$.',
    },
    {
      kind: 'mcq',
      prompt: 'What is the domain of $g(x) = \\ln(5 - x)$?',
      options: [
        { text: '$(5, \\infty)$', why: 'Try $x = 6$: $\\ln(-1)$ is undefined. Solving $5 - x > 0$ requires flipping the inequality when you divide by $-1$.' },
        { text: '$(-\\infty, 5)$', correct: true, why: '$5 - x > 0$ gives $x < 5$.' },
        { text: '$(0, \\infty)$', why: 'That is the domain of $\\ln x$. Here the argument is $5 - x$, and it is the argument that must be positive.' },
        { text: '$(-\\infty, 5]$', why: 'At $x = 5$ the argument is $0$, and $\\ln 0$ is undefined. The endpoint is excluded.' },
      ],
      explanation: 'Set the whole argument greater than zero: $5 - x > 0 \\iff x < 5$. The graph is $\\ln x$ reflected across the $y$-axis and shifted, with a vertical asymptote at $x = 5$.',
    },
    {
      kind: 'concept',
      title: 'Log base 2: bits and binary search',
      blocks: [
        {
          type: 'p',
          text: 'In computer science, the most important log is $\\log_2$. It answers two everyday questions, and they are really the same question: **how many times can you halve $n$ before reaching $1$?** and **how many doublings does it take to reach $n$?**',
        },
        {
          type: 'list',
          items: [
            '**Bits.** $k$ bits can represent $2^k$ different values. To store numbers $0$ to $n - 1$ you need $\\lceil \\log_2 n \\rceil$ bits. A byte ($8$ bits) holds $2^8 = 256$ values.',
            '**Binary search.** Each comparison throws away half of a sorted list. Starting from $n$ items, after $k$ comparisons about $\\frac{n}{2^k}$ remain, which reaches $1$ when $k \\approx \\log_2 n$.',
          ],
        },
        {
          type: 'table',
          headers: ['$n$', '$\\log_2 n$', 'binary search steps (worst case)'],
          rows: [
            ['$1{,}000$', '$\\approx 9.97$', '$10$'],
            ['$1{,}000{,}000$', '$\\approx 19.93$', '$20$'],
            ['$1{,}000{,}000{,}000$', '$\\approx 29.90$', '$30$'],
          ],
          caption: 'Multiplying the data by $1000 \\approx 2^{10}$ adds only about $10$ steps. That is the power of a logarithmic algorithm.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'O(log n) in practice',
          text: 'Binary search, balanced binary search trees (`std::map`), heaps (`std::priority_queue`) and many game-dev structures such as quadtrees and BVHs for collision detection all have $O(\\log n)$ operations, because each step discards a constant fraction of what remains. In C++, `std::log2(x)` computes $\\log_2 x$ and C++20\'s `std::bit_width(n)` returns $\\lfloor \\log_2 n \\rfloor + 1$, the number of bits in `n`.',
        },
        {
          type: 'code',
          title: 'halving.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdio>
#include <initializer_list>

int main() {
    for (long n : {1000L, 1000000L, 1000000000L}) {
        int halvings = 0;
        for (long m = n; m > 1; m /= 2) ++halvings;
        std::printf("n = %-10ld halvings = %2d  log2(n) = %.2f\\n",
                    n, halvings, std::log2(static_cast<double>(n)));
    }
}`,
          output: `n = 1000       halvings =  9  log2(n) = 9.97
n = 1000000    halvings = 19  log2(n) = 19.93
n = 1000000000 halvings = 29  log2(n) = 29.90`,
          annotations: [
            { lines: 8, text: 'Integer halving: count how many times `m /= 2` runs before `m` reaches $1$. The count is $\\lfloor \\log_2 n \\rfloor$.' },
            { lines: 10, text: '`std::log2` gives the exact real-valued logarithm for comparison.' },
          ],
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'A sorted array has $1{,}048{,}576 = 2^{20}$ entries. How many times can you halve $1{,}048{,}576$ before you reach $1$?',
      hint: 'You are asking for $\\log_2(2^{20})$.',
      answer: '20',
      explanation: 'Halving $2^{20}$ once gives $2^{19}$, twice gives $2^{18}$, … and after $20$ halvings you reach $2^0 = 1$. So the answer is $\\log_2(2^{20}) = 20$. A binary search over a million items needs only about twenty comparisons.',
    },
    {
      kind: 'order',
      prompt: 'Order from smallest to largest (no calculator needed if you think about the bases).',
      lines: [
        '$\\log 1000$',
        '$\\log_3 1000$',
        '$\\ln 1000$',
        '$\\log_2 1000$',
      ],
      explanation: 'Each log asks "what power of the base gives $1000$?" A **bigger base gets there with a smaller exponent**. So base $10$ gives the smallest answer ($\\log 1000 = 3$), then base $3$ ($\\approx 6.29$), base $e \\approx 2.718$ ($\\approx 6.91$), and base $2$ needs the largest exponent ($\\approx 9.97$).',
    },
    {
      kind: 'truefalse',
      prompt: '$\\log_3(-9) = -2$.',
      answer: false,
      explanation: 'Convert: $\\log_3(-9) = -2$ would mean $3^{-2} = -9$, but $3^{-2} = \\frac{1}{9}$. A negative exponent produces a reciprocal, never a negative number. In fact no power of $3$ is negative, so $\\log_3(-9)$ is undefined. (What is true: $\\log_3 \\frac{1}{9} = -2$.)',
    },
  ],
  takeaways: [
    '$\\log_b x = y$ means $b^y = x$: a logarithm is an exponent. Base $b > 0$, $b \\ne 1$; input $x > 0$.',
    'Evaluate logs by writing the input as a power of the base: $\\log_4 8 = \\frac32$ because $4^{3/2} = 8$.',
    '$\\log x$ is base $10$, $\\ln x$ is base $e$; $\\log_b(b^x) = x$ and $b^{\\log_b x} = x$.',
    '$y = \\log_b x$ is $y = b^x$ reflected in $y = x$: domain $(0, \\infty)$, range $\\mathbb{R}$, vertical asymptote $x = 0$, through $(1, 0)$ and $(b, 1)$.',
    'For the domain of $\\log_b(\\text{stuff})$, solve $\\text{stuff} > 0$.',
    '$\\log_2 n$ counts halvings and doublings: bits needed to store $n$ values and steps of binary search.',
  ],
  reading: [
    {
      title: 'OpenStax College Algebra 2e — 6.3 Logarithmic Functions',
      url: 'https://openstax.org/books/college-algebra-2e/pages/6-3-logarithmic-functions',
      source: 'openstax',
      note: 'More practice converting between forms and evaluating logs by hand.',
    },
    {
      title: "Paul's Online Notes — Logarithm Functions",
      url: 'https://tutorial.math.lamar.edu/Classes/Alg/LogFunctions.aspx',
      source: 'paul',
      note: 'Clear worked examples of evaluating logs, including fractional and negative answers.',
    },
    {
      title: 'Wikipedia — Binary search algorithm',
      url: 'https://en.wikipedia.org/wiki/Binary_search_algorithm',
      source: 'wikipedia',
      note: 'See the performance section for exactly where the $\\lfloor \\log_2 n \\rfloor + 1$ comparisons come from.',
    },
  ],
};
