import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'calc1-one-sided-limits',
  title: 'One-Sided and Infinite Limits',
  summary: 'Approaching from just one side, functions that blow up, and how limits describe vertical asymptotes.',
  minutes: 17,
  objectives: [
    'Read and compute left-hand and right-hand limits, $\\lim_{x \\to a^-}$ and $\\lim_{x \\to a^+}$',
    'Use one-sided limits to decide whether a two-sided limit exists, including for piecewise functions',
    'Interpret $\\lim_{x \\to a} f(x) = \\infty$ and explain why $\\infty$ is not a number',
    'Find the sign of an infinite limit by analysing "nonzero over zero"',
    'Locate vertical asymptotes and distinguish them from holes',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Approaching from one side',
      blocks: [
        {
          type: 'p',
          text: 'In the last lesson a jump made a limit fail: the graph headed to one height from the left and a different height from the right. That failure still contains useful information. Each side, on its own, *does* approach a number. A [[one-sided-limit]] records what happens on just one side.',
        },
        {
          type: 'p',
          text: 'Take the [[piecewise-function]] below: $f(x) = x^2$ for $x < 1$ and $f(x) = 4 - x$ for $x \\ge 1$. Slide $d$ toward $0$ to walk a test point in from each side.',
        },
        {
          type: 'graph',
          x: [-1.5, 3.5],
          y: [-0.5, 4.5],
          functions: [
            { expr: 'x^2', domain: [-1.5, 1], label: '$x^2$ for $x < 1$' },
            { expr: '4 - x', domain: [1, 3.5], label: '$4 - x$ for $x \\ge 1$', color: 'blue' },
          ],
          points: [
            { x: 1, y: 1, open: true },
            { x: 1, y: 3, label: 'f(1) = 3' },
            { x: '1 - d', y: '(1 - d)^2', color: 'purple' },
            { x: '1 + d', y: '4 - (1 + d)', color: 'green' },
          ],
          vlines: [{ x: 1 }],
          sliders: [{ name: 'd', min: 0.01, max: 1.2, step: 0.01, value: 0.9, label: 'distance from 1, $d$' }],
          readouts: [
            { label: 'left: $f(1 - d) =$', expr: '(1 - d)^2', digits: 4 },
            { label: 'right: $f(1 + d) =$', expr: '4 - (1 + d)', digits: 4 },
          ],
          caption: 'The purple point (from the left) heads to height $1$; the green point (from the right) heads to height $3$.',
        },
        {
          type: 'definition',
          term: 'One-sided limits',
          text: '$\\lim_{x \\to a^-} f(x) = L$ (the **left-hand limit**) means $f(x)$ can be made as close to $L$ as we like by taking $x$ close enough to $a$ **with $x < a$**.\n\n$\\lim_{x \\to a^+} f(x) = M$ (the **right-hand limit**) means the same with $x > a$.',
        },
        {
          type: 'p',
          text: 'Read $x \\to 1^-$ as "$x$ approaches $1$ from below" — the minus sign is a direction, not a negative number. For our $f$: $\\lim_{x \\to 1^-} f(x) = 1$ and $\\lim_{x \\to 1^+} f(x) = 3$. Since $1 \\ne 3$, the ordinary (two-sided) limit $\\lim_{x \\to 1} f(x)$ does not exist.',
        },
        {
          type: 'theorem',
          name: 'Two-sided limits from one-sided limits',
          tex: '\\lim_{x \\to a} f(x) = L \\iff \\lim_{x \\to a^-} f(x) = L \\text{ and } \\lim_{x \\to a^+} f(x) = L',
          text: 'The two-sided limit exists exactly when both one-sided limits exist **and are equal**.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why this theorem is true',
          text: 'The two-sided definition says $f(x)$ is close to $L$ for every $x$ close to $a$ on **either side**. Splitting "either side" into "left side" and "right side" gives the two one-sided statements, and putting them back together gives the two-sided one. So if the sides head to different numbers, no single $L$ can work for both.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'mcq',
      prompt: 'What is $\\lim_{x \\to 0} \\dfrac{|x|}{x}$?',
      hint: 'Simplify $\\frac{|x|}{x}$ separately for $x > 0$ and for $x < 0$.',
      options: [
        {
          text: '$1$',
          why: 'That is only the right-hand limit: for $x > 0$, $|x| = x$ and the fraction is $1$.',
        },
        {
          text: '$0$',
          why: 'Averaging the two sides ($\\frac{1 + (-1)}{2}$) is not a thing limits do. Also, the function is never close to $0$.',
        },
        {
          text: '$-1$',
          why: 'That is only the left-hand limit: for $x < 0$, $|x| = -x$ and the fraction is $-1$.',
        },
        {
          text: 'It does not exist',
          correct: true,
          why: 'The left-hand limit is $-1$ and the right-hand limit is $1$. They disagree, so there is no two-sided limit.',
        },
      ],
      explanation: 'Recall $|x| = x$ when $x \\ge 0$ and $|x| = -x$ when $x < 0$. So $\\frac{|x|}{x} = 1$ for every $x > 0$ and $= -1$ for every $x < 0$: a jump at $0$. Hence $\\lim_{x \\to 0^+} \\frac{|x|}{x} = 1$, $\\lim_{x \\to 0^-} \\frac{|x|}{x} = -1$, and the two-sided limit does not exist. (This function is the sign function, `sign(x)` in many languages, everywhere except $0$.)',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'One-sided limits of piecewise functions',
      blocks: [
        {
          type: 'p',
          text: 'For a piecewise function, the split point is exactly where something interesting can happen, and one-sided limits are the tool for it. The key move: **each side uses its own formula**. Approaching from the left, only the piece for $x < a$ matters; from the right, only the piece for $x > a$.',
        },
        {
          type: 'derivation',
          title: 'Does $\\lim_{x \\to 2} f(x)$ exist, where $f(x) = \\begin{cases} 2x + 1 & x < 2 \\\\ x^2 - 1 & x \\ge 2 \\end{cases}$?',
          steps: [
            { tex: '\\lim_{x \\to 2^-} f(x) = \\lim_{x \\to 2^-} (2x + 1)', why: 'For $x < 2$ the function *is* $2x + 1$, so the left-hand limit only sees that piece.' },
            { tex: '= 2(2) + 1 = 5', why: 'The line $2x + 1$ heads to $5$ as $x \\to 2$. (Plugging in is fine here: lines and polynomials have no gaps. The next lesson justifies this.)' },
            { tex: '\\lim_{x \\to 2^+} f(x) = \\lim_{x \\to 2^+} (x^2 - 1) = 4 - 1 = 3', why: 'For $x > 2$ the function is $x^2 - 1$, which heads to $3$.' },
            { tex: '5 \\ne 3 \\implies \\lim_{x \\to 2} f(x) \\text{ does not exist}', why: 'One-sided limits disagree, so by the theorem the two-sided limit does not exist.' },
            { tex: 'f(2) = 2^2 - 1 = 3', why: 'The value uses the piece whose condition includes $x = 2$, here $x \\ge 2$.' },
          ],
          result: 'The graph jumps from height $5$ down to $3$ at $x = 2$; the solid dot is on the right-hand piece.',
        },
        {
          type: 'p',
          text: 'Now give the left piece a slope you control: $f(x) = kx + 1$ for $x < 2$, still $x^2 - 1$ for $x \\ge 2$. The left-hand limit becomes $2k + 1$, while the right-hand limit stays $3$. Can you close the gap?',
        },
        {
          type: 'graph',
          x: [-1, 4],
          y: [-2, 8],
          functions: [
            { expr: 'k*x + 1', domain: [-1, 2], label: '$kx + 1$ for $x < 2$' },
            { expr: 'x^2 - 1', domain: [2, 4], label: '$x^2 - 1$ for $x \\ge 2$', color: 'blue' },
          ],
          points: [
            { x: 2, y: '2k + 1', open: true },
            { x: 2, y: 3, label: '(2, 3)' },
          ],
          vlines: [{ x: 2 }],
          sliders: [{ name: 'k', min: -1, max: 3, step: 0.1, value: 2, label: 'slope of left piece, $k$' }],
          readouts: [
            { label: '$\\lim_{x \\to 2^-} f(x) = 2k + 1 =$', expr: '2k + 1', digits: 2 },
            { label: '$\\lim_{x \\to 2^+} f(x) =$', expr: '3', digits: 2 },
          ],
          caption: 'At $k = 1$ the open circle lands on the solid dot: both one-sided limits equal $3$ and the two-sided limit exists.',
        },
        {
          type: 'p',
          text: 'Algebraically: the limit exists exactly when $2k + 1 = 3$, i.e. $k = 1$.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Use the right piece for the right side',
          text: 'The condition "$x \\ge 2$" decides $f(2)$ *and* the right-hand limit. It has nothing to say about the left-hand limit, which only ever looks at $x < 2$. A common slip is evaluating both one-sided limits with the piece that contains the equals sign.',
        },
        {
          type: 'callout',
          variant: 'exam',
          text: '"Find the value of $k$ that makes $\\lim_{x \\to a} f(x)$ exist" is a favourite exam question. The recipe is always the same: compute each one-sided limit in terms of $k$, set them equal, and solve.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'numeric',
      prompt: 'Find the value of $k$ for which $\\lim_{x \\to 3} f(x)$ exists.',
      tex: 'f(x) = \\begin{cases} x^2 + k & x < 3 \\\\ 2x + 5 & x \\ge 3 \\end{cases}',
      hint: 'Left-hand limit: $9 + k$. Right-hand limit: $2(3) + 5$. Set them equal.',
      label: '$k =$',
      answer: '2',
      explanation: 'From the left, $f(x) = x^2 + k \\to 9 + k$. From the right, $f(x) = 2x + 5 \\to 11$. The two-sided limit exists exactly when the one-sided limits agree: $9 + k = 11$, so $k = 2$. Then $\\lim_{x \\to 3} f(x) = 11$.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'fill',
      prompt: 'Use the graph of $f$ to complete each statement.',
      graph: {
        type: 'graph',
        x: [-1, 5],
        y: [-1, 5],
        functions: [
          { expr: 'x + 1', domain: [-1, 2], label: '$y = f(x)$' },
          { expr: '(x - 2)^2 + 1', domain: [2, 4], color: 'blue' },
        ],
        points: [
          { x: 2, y: 3, open: true },
          { x: 2, y: 1, open: true },
          { x: 2, y: 2 },
        ],
        vlines: [{ x: 2 }],
        caption: 'Open circles at $(2, 3)$ and $(2, 1)$; solid dot at $(2, 2)$.',
      },
      template: '$\\lim_{x \\to 2^-} f(x) =$ ___, $\\lim_{x \\to 2^+} f(x) =$ ___, $\\lim_{x \\to 2} f(x)$ ___, and $f(2) =$ ___.',
      blanks: [{ answers: ['$3$'] }, { answers: ['$1$'] }, { answers: ['does not exist'] }, { answers: ['$2$'] }],
      wordBank: ['$3$', '$1$', 'does not exist', '$2$', '$0$', '$4$'],
      hint: 'Left: trace the left piece up to $x = 2$. Right: trace the right piece down to $x = 2$. The solid dot is the value.',
      explanation: 'The left piece $y = x + 1$ heads to height $3$, so $\\lim_{x \\to 2^-} f(x) = 3$. The right piece heads to height $1$, so $\\lim_{x \\to 2^+} f(x) = 1$. Because $3 \\ne 1$, the two-sided limit does not exist. The solid dot, sitting on neither piece, gives $f(2) = 2$. Three different numbers at one $x$-value — and none of them is "the limit".',
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'concept',
      title: 'Infinite limits: when $f(x)$ blows up',
      blocks: [
        {
          type: 'p',
          text: 'Some functions don\'t approach any height at all near $a$ — they shoot off the top (or bottom) of the screen. Look at $f(x) = \\frac{1}{x^2}$ near $0$: dividing $1$ by a tiny positive number gives a huge number.',
        },
        {
          type: 'table',
          headers: ['$x$', '$\\pm 0.1$', '$\\pm 0.01$', '$\\pm 0.001$', '$\\pm 0.0001$'],
          rows: [['$\\dfrac{1}{x^2}$', '$100$', '$10\\,000$', '$1\\,000\\,000$', '$100\\,000\\,000$']],
          caption: 'Every factor of $10$ closer to $0$ multiplies the output by $100$. No ceiling is ever reached.',
        },
        {
          type: 'definition',
          term: 'Infinite limit',
          text: 'Let $f$ be defined on both sides of $a$, except possibly at $a$. We write $\\lim_{x \\to a} f(x) = \\infty$ if $f(x)$ can be made **as large as we like** (larger than any number you name) by taking $x$ close enough to $a$, $x \\ne a$. Likewise $\\lim_{x \\to a} f(x) = -\\infty$ means $f(x)$ can be made as negative as we like. The one-sided versions $\\lim_{x \\to a^\\pm} f(x) = \\pm\\infty$ are defined the same way using only one side.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: '$\\infty$ is not a number',
          text: 'Writing $\\lim_{x \\to 0} \\frac{1}{x^2} = \\infty$ does **not** say the limit exists and equals some number called $\\infty$. The limit does not exist; the notation records *how* it fails to exist (by growing without bound in the positive direction). You cannot do arithmetic with it: $\\infty - \\infty$ is not $0$.',
        },
        {
          type: 'p',
          text: 'Now try $g(x) = \\frac{1}{x}$. To the right of $0$, $x$ is a tiny positive number and $\\frac{1}{x}$ is huge and positive. To the left, $x$ is tiny and negative, so $\\frac{1}{x}$ is huge and **negative**. The two sides blow up in opposite directions.',
        },
        {
          type: 'graph',
          x: [-3, 3],
          y: [-12, 12],
          functions: [{ expr: '1/x', label: '$y = \\frac{1}{x}$' }],
          points: [
            { x: 'd', y: '1/d', color: 'green' },
            { x: '-d', y: '-1/d', color: 'purple' },
          ],
          vlines: [{ x: 0, label: 'x = 0' }],
          sliders: [{ name: 'd', min: 0.09, max: 2.5, step: 0.01, value: 1.5, label: 'distance from 0, $d$' }],
          readouts: [
            { label: '$g(d) =$', expr: '1/d', digits: 2 },
            { label: '$g(-d) =$', expr: '-1/d', digits: 2 },
          ],
          caption: 'As $d \\to 0$ the green point climbs without bound and the purple point falls without bound.',
        },
        {
          type: 'math',
          tex: '\\lim_{x \\to 0^+} \\frac{1}{x} = \\infty, \\qquad \\lim_{x \\to 0^-} \\frac{1}{x} = -\\infty',
          caption: 'Different signs, so not even the shorthand "$\\lim_{x \\to 0} \\frac{1}{x} = \\infty$" is correct. All we can say is that the two-sided limit does not exist.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Floating point has an infinity — math does not',
          text: 'IEEE-754 floating point (the `float` and `double` in nearly every language) defines `1.0 / 0.0` as `inf` and `-1.0 / 0.0` as `-inf`. That is a practical convention so programs keep running, not a statement that $\\frac{1}{0} = \\infty$. In a game, an `inf` sneaking into a position or velocity typically turns into `nan` on the next frame and makes an object vanish — guarding against division by values near $0$ is the programming version of respecting infinite limits.',
        },
        {
          type: 'code',
          title: 'blowup.cpp',
          runnable: true,
          code: `#include <cstdio>

int main() {
    const double xs[] = {0.1, 0.01, 0.001, 0.0001};
    for (double x : xs) {
        std::printf("x = %g   1/x = %g   1/(-x) = %g\\n", x, 1 / x, 1 / -x);
    }
    double zero = 0.0;
    std::printf("1/0.0 = %g   -1/0.0 = %g\\n", 1 / zero, -1 / zero);
}`,
          output: `x = 0.1   1/x = 10   1/(-x) = -10
x = 0.01   1/x = 100   1/(-x) = -100
x = 0.001   1/x = 1000   1/(-x) = -1000
x = 0.0001   1/x = 10000   1/(-x) = -10000
1/0.0 = inf   -1/0.0 = -inf`,
          annotations: [
            { lines: 6, text: 'Approach $0$ from the right ($x$) and from the left ($-x$): opposite infinite limits.' },
            { lines: '8-9', text: 'Dividing by exactly zero gives the special values `inf` and `-inf` instead of crashing.' },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'truefalse',
      prompt: '$\\lim_{x \\to 0} \\dfrac{1}{x} = \\infty$.',
      answer: false,
      explanation: 'From the right, $\\frac{1}{x} \\to \\infty$, but from the left (where $x < 0$), $\\frac{1}{x} \\to -\\infty$. The one-sided behaviours disagree, so the two-sided limit does not exist and cannot be summarised as $\\infty$. Compare $\\frac{1}{x^2}$, which is positive on both sides, so $\\lim_{x \\to 0} \\frac{1}{x^2} = \\infty$ is a correct statement.',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'concept',
      title: 'Vertical asymptotes and the sign test',
      blocks: [
        {
          type: 'p',
          text: 'Infinite limits are exactly what a [[vertical-asymptote]] is: a vertical line the graph runs alongside while shooting off to $\\pm\\infty$. Limits turn that picture into a precise definition.',
        },
        {
          type: 'definition',
          term: 'Vertical asymptote',
          text: 'The line $x = a$ is a vertical asymptote of $y = f(x)$ if **at least one** of the one-sided limits $\\lim_{x \\to a^-} f(x)$ or $\\lim_{x \\to a^+} f(x)$ is $\\infty$ or $-\\infty$.',
        },
        {
          type: 'p',
          text: 'For a quotient, the warning sign is substitution producing **nonzero over zero**. A fixed nonzero numerator divided by a denominator shrinking toward $0$ grows without bound. The only question left is the sign, which you settle by asking whether the denominator is a small positive or small negative number on each side.',
        },
        {
          type: 'derivation',
          title: 'Find $\\lim_{x \\to 2^+} \\dfrac{x + 1}{x - 2}$ and $\\lim_{x \\to 2^-} \\dfrac{x + 1}{x - 2}$',
          steps: [
            { tex: 'x + 1 \\to 3, \\qquad x - 2 \\to 0', why: 'Try substituting $x = 2$: the numerator approaches $3$ and the denominator approaches $0$. Nonzero over zero, so each one-sided limit is $\\infty$ or $-\\infty$.' },
            { tex: 'x > 2 \\implies x - 2 > 0', why: 'From the right, $x$ is slightly bigger than $2$, so the denominator is a small **positive** number.' },
            { tex: '\\lim_{x \\to 2^+} \\frac{x + 1}{x - 2} = \\frac{\\approx 3}{\\text{small } +} = \\infty', why: 'Positive divided by small positive is large positive.' },
            { tex: 'x < 2 \\implies x - 2 < 0', why: 'From the left, the denominator is a small **negative** number.' },
            { tex: '\\lim_{x \\to 2^-} \\frac{x + 1}{x - 2} = \\frac{\\approx 3}{\\text{small } -} = -\\infty', why: 'Positive divided by small negative is large negative.' },
          ],
          result: '$x = 2$ is a vertical asymptote: the graph climbs to $\\infty$ on the right side and plunges to $-\\infty$ on the left.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why "zero over zero" is different',
          text: 'Nonzero over zero always blows up: a fixed amount split into ever-tinier pieces gives ever more pieces. But **zero over zero** is a tug-of-war — the numerator is also shrinking, and the result depends on which shrinks faster. That is why a zero in the denominator does not automatically give an asymptote.',
        },
        {
          type: 'p',
          text: 'Here is the tug-of-war in action: $h(x) = \\dfrac{x - 1}{(x - 1)(x + 2)}$. Its denominator is zero at both $x = 1$ and $x = -2$, but for $x \\ne 1$ the common factor cancels, leaving $h(x) = \\dfrac{1}{x + 2}$.',
        },
        {
          type: 'graph',
          x: [-6, 4],
          y: [-5, 5],
          functions: [{ expr: '(x - 1)/((x - 1)(x + 2))', label: '$y = \\frac{x - 1}{(x - 1)(x + 2)}$' }],
          points: [{ x: 1, y: '1/3', open: true, label: 'hole (1, 1/3)' }],
          vlines: [{ x: -2, label: 'x = −2' }],
          caption: 'At $x = -2$ (nonzero over zero): a vertical asymptote. At $x = 1$ (zero over zero): only a [[hole]], with $\\lim_{x \\to 1} h(x) = \\frac{1}{3}$.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Factor before you declare an asymptote',
          text: 'The zeros of a denominator are only *candidates* for vertical asymptotes. Factor and cancel common factors first. Factors that cancel completely give holes; factors that survive in the denominator give asymptotes.',
        },
      ],
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'mcq',
      prompt: 'Evaluate $\\lim_{x \\to 3^-} \\dfrac{2x}{x - 3}$.',
      options: [
        {
          text: '$\\infty$',
          why: 'This ignores the side. For $x < 3$ the denominator $x - 3$ is negative, which flips the sign.',
        },
        {
          text: '$-\\infty$',
          correct: true,
          why: 'Numerator $\\to 6 > 0$; denominator is a small negative number for $x$ just below $3$. Positive over small negative is large negative.',
        },
        {
          text: '$2$',
          why: 'Dividing the coefficients of $x$ is a trick for limits at infinity (a later lesson), not for $x \\to 3$.',
        },
        {
          text: '$0$',
          why: 'A denominator approaching $0$ makes a quotient large, not small — as long as the numerator stays away from $0$.',
        },
      ],
      explanation: 'Substitution gives $\\frac{6}{0}$: nonzero over zero, so the answer is $\\pm\\infty$. For the sign, take $x = 2.99$: the denominator is $-0.01$ and the quotient is $\\frac{5.98}{-0.01} = -598$. Closer to $3$ gives even larger negative values, so $\\lim_{x \\to 3^-} \\frac{2x}{x - 3} = -\\infty$. (From the right the limit is $+\\infty$.)',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'error',
      prompt: 'A student finds the vertical asymptotes of $f(x) = \\dfrac{x^2 - 4}{x^2 - x - 2}$. Tap the first line that is wrong.',
      lines: [
        '$f(x) = \\dfrac{x^2 - 4}{x^2 - x - 2}$',
        '$f(x) = \\dfrac{(x - 2)(x + 2)}{(x - 2)(x + 1)}$',
        'The denominator is zero when $x = 2$ or $x = -1$',
        'So the vertical asymptotes are $x = 2$ and $x = -1$',
      ],
      errorLines: [4],
      explanation: 'The factoring in line 2 and the zeros in line 3 are correct. The error is treating every zero of the denominator as an asymptote. The factor $x - 2$ cancels: for $x \\ne 2$, $f(x) = \\frac{x + 2}{x + 1}$, and $\\lim_{x \\to 2} f(x) = \\frac{4}{3}$, a finite number. So $x = 2$ is a **hole** at $(2, \\frac{4}{3})$. Only $x = -1$, where the numerator approaches $1 \\ne 0$, is a vertical asymptote.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'numeric',
      prompt: 'The graph of $g(x) = \\dfrac{x + 3}{x^2 - 9}$ has a hole at $x = -3$. Find its $y$-coordinate, $\\lim_{x \\to -3} g(x)$.',
      hint: 'Factor $x^2 - 9 = (x - 3)(x + 3)$ and cancel the common factor before letting $x \\to -3$.',
      label: '$\\lim_{x \\to -3} g(x) =$',
      answer: '-1/6',
      answerTex: '-\\frac{1}{6}',
      explanation: 'For $x \\ne -3$: $g(x) = \\frac{x + 3}{(x - 3)(x + 3)} = \\frac{1}{x - 3}$. As $x \\to -3$, this approaches $\\frac{1}{-3 - 3} = -\\frac{1}{6}$. So the hole is at $(-3, -\\frac{1}{6})$. The other zero of the denominator, $x = 3$, does not cancel: there $g$ behaves like $\\frac{1}{x - 3}$ and has a vertical asymptote.',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'concept',
      title: 'Edges of domains and famous infinite limits',
      blocks: [
        {
          type: 'p',
          text: 'One-sided limits are also the natural tool at the edge of a [[domain]]. The function $\\sqrt{x}$ only exists for $x \\ge 0$, so near $0$ you can only approach from the right: $\\lim_{x \\to 0^+} \\sqrt{x} = 0$. Since there is no left side to examine, most calculus texts say the two-sided limit $\\lim_{x \\to 0} \\sqrt{x}$ does not exist and use the one-sided statement instead.',
        },
        {
          type: 'table',
          headers: ['Function', 'Behaviour', 'Vertical asymptote'],
          rows: [
            ['$\\ln x$', '$\\lim_{x \\to 0^+} \\ln x = -\\infty$ (no left side)', '$x = 0$'],
            ['$\\tan x$', '$\\lim_{x \\to \\pi/2^-} \\tan x = \\infty$, $\\lim_{x \\to \\pi/2^+} \\tan x = -\\infty$', '$x = \\frac{\\pi}{2} + k\\pi$'],
            ['$\\dfrac{1}{x^2}$', '$\\lim_{x \\to 0} \\dfrac{1}{x^2} = \\infty$ (both sides agree)', '$x = 0$'],
            ['$\\dfrac{1}{x}$', '$\\lim_{x \\to 0^-} \\frac{1}{x} = -\\infty$, $\\lim_{x \\to 0^+} \\frac{1}{x} = \\infty$', '$x = 0$'],
          ],
          caption: 'Worth memorising — they show up constantly as building blocks.',
        },
        {
          type: 'p',
          text: 'Why does $\\tan x$ blow up at $\\frac{\\pi}{2}$? Write $\\tan x = \\frac{\\sin x}{\\cos x}$. As $x \\to \\frac{\\pi}{2}$, $\\sin x \\to 1$ while $\\cos x \\to 0$: nonzero over zero. Just left of $\\frac{\\pi}{2}$, $\\cos x$ is small and positive (quadrant I), giving $+\\infty$; just right, it is small and negative (quadrant II), giving $-\\infty$.',
        },
        {
          type: 'graph',
          x: [-4.7, 4.7],
          y: [-6, 6],
          xStep: 'pi',
          functions: [
            { expr: 'tan(x)', label: '$y = \\tan x$' },
            { expr: 'ln(x)', label: '$y = \\ln x$', color: 'green' },
          ],
          vlines: [{ x: 'pi/2', label: 'x = π/2' }, { x: '-pi/2' }, { x: 0 }],
          caption: '$\\tan x$ has asymptotes at odd multiples of $\\frac{\\pi}{2}$; $\\ln x$ plunges to $-\\infty$ along $x = 0$ from the right only.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Taming $\\frac{1}{r^2}$ in a game',
          text: 'Gravity and magnetism in games often use force $\\propto \\frac{1}{r^2}$, where $r$ is the distance between two objects. As $r \\to 0^+$ the force has an infinite limit, and two objects passing close together get flung apart at absurd speeds. A standard fix is *softening*: use $\\frac{1}{r^2 + \\varepsilon^2}$ with a small constant $\\varepsilon$. Now as $r \\to 0$ the force approaches the finite value $\\frac{1}{\\varepsilon^2}$ — you removed the vertical asymptote on purpose.',
        },
      ],
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'mcq',
      prompt: 'What is $\\lim_{x \\to 0^+} \\ln x$?',
      options: [
        {
          text: '$0$',
          why: 'That confuses two facts: $\\ln 1 = 0$, but here $x$ is approaching $0$, not $1$.',
        },
        {
          text: '$\\infty$',
          why: 'Right magnitude, wrong direction. For $0 < x < 1$, $\\ln x$ is negative, so the values go down without bound.',
        },
        {
          text: '$-\\infty$',
          correct: true,
          why: 'As $x \\to 0^+$, $\\ln x$ takes values like $\\ln 0.001 \\approx -6.9$ and $\\ln 10^{-9} \\approx -20.7$, decreasing without bound.',
        },
        {
          text: '$1$',
          why: '$\\ln x = 1$ happens at $x = e \\approx 2.718$, far from $0$.',
        },
      ],
      explanation: '$\\ln x$ answers "what power of $e$ gives $x$?". To get a tiny positive $x$ you need a very negative power: $e^{-10} \\approx 0.0000454$, $e^{-100}$ is far smaller still. So as $x \\to 0^+$, $\\ln x \\to -\\infty$, and the $y$-axis is a vertical asymptote of $y = \\ln x$. Only the right-hand limit makes sense because $\\ln x$ is undefined for $x \\le 0$.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'order',
      prompt: 'Put the steps for evaluating $\\lim_{x \\to 1^-} \\dfrac{x + 4}{x - 1}$ in order.',
      lines: [
        'Substitute $x = 1$: the numerator approaches $5$ and the denominator approaches $0$',
        'Nonzero over zero, so the limit is $\\infty$ or $-\\infty$',
        'For $x$ slightly less than $1$, $x - 1$ is a small negative number',
        'A positive number divided by a small negative number is a large negative number',
        'Conclude $\\lim_{x \\to 1^-} \\frac{x + 4}{x - 1} = -\\infty$',
      ],
      distractors: ['Cancel the $x$ terms to get $\\frac{4}{-1} = -4$'],
      explanation: 'Substitution first tells you which situation you are in: $\\frac{5}{0}$ means an infinite limit (not $\\frac{0}{0}$, which would call for algebra). Then the side ($x < 1$) fixes the sign of the denominator, and the sign rule for division finishes the job. The distractor "cancels" terms that are added, not multiplied — never legal.',
    },
  ],
  takeaways: [
    '$\\lim_{x \\to a^-} f(x)$ uses only $x < a$; $\\lim_{x \\to a^+} f(x)$ uses only $x > a$.',
    'The two-sided limit exists exactly when both one-sided limits exist and are equal. For piecewise functions, evaluate each side with its own formula.',
    '$\\lim_{x \\to a} f(x) = \\pm\\infty$ means $f$ grows without bound; the limit still does not exist, and $\\infty$ is not a number.',
    'Substitution giving nonzero over zero signals an infinite limit; the sign of the denominator on each side decides $+\\infty$ or $-\\infty$.',
    '$x = a$ is a vertical asymptote if some one-sided limit at $a$ is $\\pm\\infty$. Zeros of a denominator that cancel give holes, not asymptotes.',
  ],
  reading: [
    {
      title: 'OpenStax Calculus Volume 1 — 2.2 The Limit of a Function',
      url: 'https://openstax.org/books/calculus-volume-1/pages/2-2-the-limit-of-a-function',
      source: 'openstax',
      note: 'The second half covers one-sided limits, infinite limits and vertical asymptotes with many graphs.',
    },
    {
      title: "Paul's Online Notes — One-Sided Limits",
      url: 'https://tutorial.math.lamar.edu/Classes/CalcI/OneSidedLimits.aspx',
      source: 'paul',
      note: 'Worked graph-reading examples of left- and right-hand limits.',
    },
    {
      title: "Paul's Online Notes — Infinite Limits",
      url: 'https://tutorial.math.lamar.edu/Classes/CalcI/InfiniteLimits.aspx',
      source: 'paul',
      note: 'More sign-analysis examples of nonzero-over-zero limits and vertical asymptotes.',
    },
  ],
};
