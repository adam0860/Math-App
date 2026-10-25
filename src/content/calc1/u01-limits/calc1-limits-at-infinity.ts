import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'calc1-limits-at-infinity',
  title: 'Limits at Infinity',
  summary: 'What a function settles down to far out on the x-axis: horizontal asymptotes, dominant terms, and the math behind Big-O.',
  minutes: 17,
  objectives: [
    'Interpret $\\lim_{x \\to \\infty} f(x) = L$ and $\\lim_{x \\to -\\infty} f(x) = L$ as horizontal asymptotes',
    'Evaluate limits of rational functions at $\\pm\\infty$ by dividing by the highest power of $x$ in the denominator',
    'Predict end behaviour from dominant (leading) terms and compare growth rates of logs, powers and exponentials',
    'Handle radicals as $x \\to -\\infty$ using $\\sqrt{x^2} = |x|$, and resolve $\\infty - \\infty$ with the conjugate',
    'Connect limits at infinity to Big-O comparisons of algorithms',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Where does the function end up?',
      blocks: [
        {
          type: 'p',
          text: 'So far $x$ has always approached a finite number $a$. Now we ask a different question: what happens to $f(x)$ when $x$ grows **without bound**? This is the long-run behaviour of a system — where a cooling cup of coffee settles, the speed a falling object approaches with air resistance, or what an algorithm\'s cost looks like for huge inputs.',
        },
        {
          type: 'definition',
          term: 'Limit at infinity',
          text: '$\\lim\\limits_{x \\to \\infty} f(x) = L$ means that $f(x)$ can be made as close to $L$ as we like by taking $x$ **sufficiently large**. Similarly, $\\lim\\limits_{x \\to -\\infty} f(x) = L$ means $f(x)$ gets as close to $L$ as we like for $x$ sufficiently large and negative.\n\nIf either limit equals $L$, the line $y = L$ is a [[horizontal-asymptote]] of the graph.',
        },
        {
          type: 'p',
          text: 'Take $f(x) = \\frac{3x^2}{x^2 + 1}$. For huge $x$ the "$+1$" is negligible next to $x^2$, so $f(x) \\approx \\frac{3x^2}{x^2} = 3$. The table confirms it:',
        },
        {
          type: 'table',
          headers: ['$x$', '$f(x) = \\dfrac{3x^2}{x^2 + 1}$', 'distance to $3$'],
          rows: [
            ['$10$', '$2.970297\\ldots$', '$0.0297$'],
            ['$100$', '$2.999700\\ldots$', '$0.0003$'],
            ['$1000$', '$2.999997\\ldots$', '$0.000003$'],
          ],
          caption: 'The distance to $3$ is exactly $\\frac{3}{x^2 + 1}$, which shrinks toward $0$ as $x$ grows.',
        },
        {
          type: 'graph',
          x: [-20, 50],
          y: [-0.5, 3.8],
          functions: [{ expr: '3x^2/(x^2 + 1)', label: '$y = \\frac{3x^2}{x^2 + 1}$' }],
          hlines: [{ y: 3, label: 'y = 3', color: 'red' }],
          points: [{ x: 'm', y: '3m^2/(m^2 + 1)', label: 'x = M' }],
          sliders: [{ name: 'm', min: 1, max: 48, step: 0.5, value: 4, label: '$M$' }],
          readouts: [
            { label: '$f(M) =$', expr: '3m^2/(m^2 + 1)', digits: 6 },
            { label: 'gap $3 - f(M) =$', expr: '3 - 3m^2/(m^2 + 1)', digits: 6 },
          ],
          caption: 'Drag $M$ to the right: the gap to the asymptote $y = 3$ shrinks toward $0$ but never reaches it. The graph is symmetric, so $y = 3$ is also the limit as $x \\to -\\infty$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why an asymptote can be crossed',
          text: 'A vertical asymptote $x = a$ can never be crossed, because $f$ blows up there. A *horizontal* asymptote is different: it only describes what happens **far out**. Near the middle, the graph may cross it any number of times. For example, $\\left|\\frac{\\sin x}{x}\\right| \\le \\frac{1}{x}$ for $x > 0$, so by the Squeeze Theorem from the last lesson $\\frac{\\sin x}{x} \\to 0$ as $x \\to \\infty$ — yet the graph crosses $y = 0$ at every multiple of $\\pi$.',
        },
      ],
    },
    {
      kind: 'truefalse',
      prompt: 'The graph of a function can never cross one of its horizontal asymptotes.',
      answer: false,
      explanation: 'A horizontal asymptote describes behaviour as $x \\to \\pm\\infty$ only. $y = \\frac{\\sin x}{x}$ crosses its asymptote $y = 0$ infinitely often, and $y = \\frac{x}{x^2 + 1}$ crosses $y = 0$ at the origin. What *is* true is that a graph never crosses a **vertical** asymptote, because the function is undefined there.',
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'concept',
      title: 'The basic fact and the dividing trick',
      blocks: [
        {
          type: 'p',
          text: 'Everything in this lesson grows from one simple fact: if you divide a fixed number by something that grows without bound, the result shrinks to $0$.',
        },
        {
          type: 'theorem',
          name: 'Reciprocal powers vanish',
          tex: '\\lim_{x \\to \\infty}\\frac{1}{x^r} = 0 \\quad (r > 0), \\qquad \\lim_{x \\to -\\infty}\\frac{1}{x^n} = 0 \\quad (n = 1, 2, 3, \\ldots)',
          text: 'More generally $\\frac{c}{x^r} \\to 0$ for any constant $c$. The [[limit-laws]] (sum, product, quotient, constant multiple) work at $\\pm\\infty$ exactly as they do at a finite point.',
        },
        {
          type: 'p',
          text: 'A rational function like $\\frac{3x^2 - x + 2}{5x^2 + 4x - 1}$ has numerator and denominator both growing without bound: the form $\\frac{\\infty}{\\infty}$, which is indeterminate (it could be anything). The fix is to **divide numerator and denominator by the highest power of $x$ in the denominator**. That converts every term into either a constant or something of the form $\\frac{c}{x^r}$, which goes to $0$.',
        },
        {
          type: 'derivation',
          title: 'Evaluate $\\lim_{x \\to \\infty}\\frac{3x^2 - x + 2}{5x^2 + 4x - 1}$',
          steps: [
            { tex: '\\frac{3x^2 - x + 2}{5x^2 + 4x - 1} = \\frac{(3x^2 - x + 2)/x^2}{(5x^2 + 4x - 1)/x^2}', why: 'The highest power in the denominator is $x^2$. Dividing top and bottom by the same nonzero quantity does not change the value.' },
            { tex: '= \\frac{3 - \\frac{1}{x} + \\frac{2}{x^2}}{5 + \\frac{4}{x} - \\frac{1}{x^2}}', why: 'Divide each term separately: $\\frac{3x^2}{x^2} = 3$, $\\frac{x}{x^2} = \\frac{1}{x}$, $\\frac{2}{x^2}$ stays, and so on.' },
            { tex: '\\to \\frac{3 - 0 + 0}{5 + 0 - 0}', why: 'Each $\\frac{c}{x^r}$ term tends to $0$. The quotient law applies because the denominator\'s limit, $5$, is not $0$.' },
            { tex: '= \\frac{3}{5}', why: 'Simplify.' },
          ],
          result: 'The limit is $\\frac{3}{5}$, so $y = \\frac{3}{5}$ is a horizontal asymptote. It is the ratio of the leading coefficients.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why dividing by $x^2$ works',
          text: 'Dividing by the dominant power rescales the problem so the leading terms become constants and everything else becomes a vanishing correction. It turns $\\frac{\\infty}{\\infty}$ — which carries no information — into $\\frac{3 + \\text{tiny}}{5 + \\text{tiny}}$, which plainly approaches $\\frac{3}{5}$. You are making precise the intuition "only the biggest terms matter far away".',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: '$\\infty$ is not a number',
          text: 'Never write $\\frac{\\infty}{\\infty} = 1$ or $\\infty - \\infty = 0$. Both are indeterminate forms: $\\frac{2x}{x} \\to 2$ while $\\frac{x^2}{x} \\to \\infty$, even though each starts as "$\\frac{\\infty}{\\infty}$". Rewrite the expression first; only plug in limits once every piece has a finite limit.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'Evaluate the limit.',
      tex: '\\lim_{x \\to \\infty}\\frac{6x^3 - 2x}{2x^3 + 5x^2 + 1}',
      hint: 'Divide every term by $x^3$, the highest power in the denominator.',
      answer: '3',
      explanation: 'Dividing by $x^3$: $\\frac{6 - \\frac{2}{x^2}}{2 + \\frac{5}{x} + \\frac{1}{x^3}} \\to \\frac{6 - 0}{2 + 0 + 0} = 3$. Equal degrees, so the answer is the ratio of leading coefficients $\\frac{6}{2}$. The lower-order terms $-2x$, $5x^2$ and $1$ affect the graph for small $x$ but not where it ends up.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Three cases for rational functions',
      blocks: [
        {
          type: 'p',
          text: 'Run the dividing trick on any [[rational-function]] $\\frac{p(x)}{q(x)}$ and only three things can happen, depending on how the [[degree|degrees]] compare. Write $a$ and $b$ for the [[leading-coefficient|leading coefficients]] of $p$ and $q$.',
        },
        {
          type: 'table',
          headers: ['Degrees', '$\\lim\\limits_{x \\to \\pm\\infty}\\frac{p(x)}{q(x)}$', 'Example'],
          rows: [
            ['$\\deg p < \\deg q$', '$0$ (asymptote $y = 0$)', '$\\frac{5x + 3}{x^2 - 2} \\to 0$'],
            ['$\\deg p = \\deg q$', '$\\frac{a}{b}$ (asymptote $y = \\frac{a}{b}$)', '$\\frac{3x^2 - x + 2}{5x^2 + 4x - 1} \\to \\frac{3}{5}$'],
            ['$\\deg p > \\deg q$', '$\\infty$ or $-\\infty$ (no horizontal asymptote)', '$\\frac{x^3 + 1}{2x^2 - x} \\to \\infty$ as $x \\to \\infty$'],
          ],
        },
        {
          type: 'p',
          text: 'There is a faster way to see all three at once: **dominant terms**. For large $|x|$ every polynomial behaves like its leading term, so',
        },
        {
          type: 'math',
          tex: '\\frac{p(x)}{q(x)} \\approx \\frac{a x^m}{b x^n} = \\frac{a}{b}\\,x^{m - n} \\quad\\text{for large } |x|',
          caption: '$m - n < 0$ gives $0$; $m - n = 0$ gives $\\frac{a}{b}$; $m - n > 0$ gives unbounded growth.',
        },
        {
          type: 'derivation',
          title: 'Evaluate $\\lim_{x \\to \\infty}\\frac{5x + 3}{x^2 - 2}$',
          steps: [
            { tex: '= \\lim_{x \\to \\infty}\\frac{\\frac{5}{x} + \\frac{3}{x^2}}{1 - \\frac{2}{x^2}}', why: 'Divide every term by $x^2$, the highest power in the denominator.' },
            { tex: '= \\frac{0 + 0}{1 - 0} = 0', why: 'Every $\\frac{c}{x^r}$ term vanishes; the denominator tends to $1 \\neq 0$.' },
          ],
          result: 'Smaller degree on top means the denominator wins: the limit is $0$.',
        },
        {
          type: 'graph',
          x: [-12, 12],
          y: [-5, 5],
          functions: [
            { expr: '(a x^2 + 4x)/(x^2 + 1)', label: '$y = \\frac{a x^2 + 4x}{x^2 + 1}$' },
          ],
          hlines: [{ y: 'a', label: 'y = a', color: 'red' }],
          sliders: [{ name: 'a', min: -3, max: 3, step: 0.1, value: 2, label: '$a$ (leading coefficient on top)' }],
          caption: 'Equal degrees, so the asymptote is $y = \\frac{a}{1} = a$. Drag $a$ and the asymptote follows; set $a = 0$ and the top drops to degree $1$, so the asymptote becomes $y = 0$. The $4x$ term bends the middle of the graph but never changes where it ends up.',
        },
        {
          type: 'callout',
          variant: 'note',
          text: 'When $\\deg p = \\deg q + 1$, long division writes $\\frac{p}{q}$ as a linear function plus a remainder fraction that tends to $0$; that line is a [[slant-asymptote]]. You met these in algebra; they are the "$m - n = 1$" case of the dominant-term picture.',
        },
      ],
    },
    {
      kind: 'mcq',
      prompt: 'What is the horizontal asymptote of $y = \\dfrac{2x^2 + 5}{3 - 7x^2}$?',
      options: [
        {
          text: '$y = \\frac{2}{7}$',
          why: 'Close, but the leading term of the denominator is $-7x^2$, not $7x^2$. Writing the denominator in standard order, $-7x^2 + 3$, makes the sign obvious.',
        },
        {
          text: '$y = -\\frac{2}{7}$',
          correct: true,
          why: 'Equal degrees, so the asymptote is the ratio of leading coefficients: $\\frac{2}{-7}$.',
        },
        {
          text: '$y = \\frac{5}{3}$',
          why: 'That is the ratio of the *constant* terms, which is $f(0)$, the $y$-intercept. Far from the origin the constants are negligible.',
        },
        {
          text: 'None, because the degree is $2$',
          why: 'A horizontal asymptote fails to exist only when the top has a *larger* degree than the bottom. Here the degrees are equal.',
        },
      ],
      explanation: 'Dividing by $x^2$ gives $\\frac{2 + \\frac{5}{x^2}}{\\frac{3}{x^2} - 7} \\to \\frac{2}{-7} = -\\frac{2}{7}$, the same as $x \\to \\infty$ and $x \\to -\\infty$. The "leading coefficient" is the coefficient of the highest power, wherever it happens to be written.',
    },
    {
      kind: 'expr',
      prompt: 'For large $|x|$, the function $f(x) = \\dfrac{2x^3 - x}{x + 4}$ behaves like a single power of $x$ (its dominant term). What is it?',
      label: '$f(x) \\approx$',
      answer: '2x^2',
      answerTex: '2x^2',
      hint: 'Keep only the leading term on top and on the bottom, then simplify.',
      explanation: 'The dominant terms are $2x^3$ on top and $x$ on the bottom, so $f(x) \\approx \\frac{2x^3}{x} = 2x^2$. In fact $\\frac{f(x)}{2x^2} \\to 1$ as $x \\to \\pm\\infty$. So $f(x) \\to \\infty$ in **both** directions — like a parabola, with no horizontal asymptote. (Long division gives $f(x) = 2x^2 - 8x + 31 - \\frac{124}{x + 4}$: the extra terms matter less and less.)',
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'concept',
      title: 'Radicals and the trap at $-\\infty$',
      blocks: [
        {
          type: 'p',
          text: 'With square roots, the dominant-term idea still works, but there is a sign trap. The key identity from algebra is',
        },
        {
          type: 'math',
          tex: '\\sqrt{x^2} = |x| = \\begin{cases} x & x \\ge 0 \\\\ -x & x < 0 \\end{cases}',
          caption: 'A square root is never negative, so for negative $x$ it gives $-x$, not $x$.',
        },
        {
          type: 'p',
          text: 'As $x \\to \\infty$ this never matters. As $x \\to -\\infty$ it flips the sign of the answer, so the same function can have **two different** horizontal asymptotes.',
        },
        {
          type: 'derivation',
          title: 'Evaluate $\\lim_{x \\to \\pm\\infty}\\frac{\\sqrt{9x^2 + 1}}{2x - 3}$',
          steps: [
            { tex: '\\sqrt{9x^2 + 1} = \\sqrt{x^2\\left(9 + \\tfrac{1}{x^2}\\right)} = |x|\\sqrt{9 + \\tfrac{1}{x^2}}', why: 'Factor $x^2$ out from under the root; $\\sqrt{x^2} = |x|$.' },
            { tex: '2x - 3 = x\\left(2 - \\tfrac{3}{x}\\right)', why: 'Factor $x$ out of the denominator the same way.' },
            { tex: '\\frac{\\sqrt{9x^2 + 1}}{2x - 3} = \\frac{|x|}{x}\\cdot\\frac{\\sqrt{9 + \\frac{1}{x^2}}}{2 - \\frac{3}{x}}', why: 'Combine. The ratio $\\frac{|x|}{x}$ is $1$ for $x > 0$ and $-1$ for $x < 0$.' },
            { tex: 'x \\to \\infty: \\quad 1\\cdot\\frac{\\sqrt{9}}{2} = \\frac{3}{2}', why: 'For positive $x$, $\\frac{|x|}{x} = 1$; the fractions inside vanish.' },
            { tex: 'x \\to -\\infty: \\quad (-1)\\cdot\\frac{\\sqrt{9}}{2} = -\\frac{3}{2}', why: 'For negative $x$, $\\frac{|x|}{x} = -1$. The numerator stays positive while the denominator is negative, so a negative answer makes sense.' },
          ],
          result: 'Two horizontal asymptotes: $y = \\frac{3}{2}$ on the right and $y = -\\frac{3}{2}$ on the left.',
        },
        {
          type: 'graph',
          x: [-15, 15],
          y: [-4, 4],
          functions: [{ expr: 'sqrt(9x^2 + 1)/(2x - 3)', label: '$y = \\frac{\\sqrt{9x^2 + 1}}{2x - 3}$' }],
          hlines: [
            { y: 1.5, label: 'y = 3/2', color: 'red' },
            { y: -1.5, label: 'y = −3/2', color: 'green' },
          ],
          vlines: [{ x: 1.5, label: 'x = 3/2' }],
          caption: 'A different asymptote at each end. (There is also a vertical asymptote at $x = \\frac{3}{2}$, where the denominator is $0$.)',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Sanity check with signs',
          text: 'Before computing, ask: for very negative $x$, is the expression positive or negative? Here the top is a square root (positive) and the bottom $2x - 3$ is negative, so the limit at $-\\infty$ must be $\\le 0$. A positive answer would be a red flag.',
        },
      ],
    },
    {
      kind: 'error',
      prompt: 'A student evaluates $\\lim\\limits_{x \\to -\\infty}\\dfrac{\\sqrt{4x^2 + x}}{x + 1}$. Tap the first incorrect line.',
      lines: [
        '$\\dfrac{\\sqrt{4x^2 + x}}{x + 1} = \\dfrac{\\sqrt{x^2\\left(4 + \\frac{1}{x}\\right)}}{x + 1}$',
        '$= \\dfrac{x\\sqrt{4 + \\frac{1}{x}}}{x + 1}$',
        '$= \\dfrac{\\sqrt{4 + \\frac{1}{x}}}{1 + \\frac{1}{x}}$',
        '$\\to \\dfrac{\\sqrt{4}}{1} = 2$',
      ],
      errorLines: [2],
      explanation: 'Line 2 replaces $\\sqrt{x^2}$ with $x$. For $x \\to -\\infty$, $x$ is negative, so $\\sqrt{x^2} = |x| = -x$. The correct line is $\\frac{-x\\sqrt{4 + \\frac{1}{x}}}{x + 1}$, which leads to $\\frac{-\\sqrt{4 + \\frac{1}{x}}}{1 + \\frac{1}{x}} \\to -2$. The sign check confirms it: positive numerator, negative denominator, so the answer must be negative.',
    },
    {
      kind: 'numeric',
      prompt: 'Evaluate the limit. Watch the signs.',
      tex: '\\lim_{x \\to -\\infty}\\frac{\\sqrt{25x^2 + x}}{3 - 2x}',
      hint: 'Factor $\\sqrt{x^2} = |x| = -x$ from the top and $-x$ from the bottom ($3 - 2x = -x\\left(2 - \\frac{3}{x}\\right)$).',
      answer: '5/2',
      answerTex: '\\frac{5}{2}',
      explanation: 'For $x < 0$: the top is $|x|\\sqrt{25 + \\frac{1}{x}} = -x\\sqrt{25 + \\frac{1}{x}}$ and the bottom is $3 - 2x = -x\\left(2 - \\frac{3}{x}\\right)$. The $-x$ factors cancel, leaving $\\frac{\\sqrt{25 + \\frac{1}{x}}}{2 - \\frac{3}{x}} \\to \\frac{5}{2}$. Sign check: as $x \\to -\\infty$, $3 - 2x$ is large and *positive*, so a positive answer is right this time.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'When $\\infty - \\infty$ appears',
      blocks: [
        {
          type: 'p',
          text: 'Consider $\\sqrt{x^2 + 8x} - x$ as $x \\to \\infty$. Both terms grow without bound, so this is $\\infty - \\infty$: indeterminate. Is the difference large, small, or settling to a number? The two terms are racing each other, and we need to know by how much the first stays ahead.',
        },
        {
          type: 'p',
          text: 'The tool is the conjugate, exactly as in the previous lessons: multiplying by $\\frac{\\sqrt{A} + B}{\\sqrt{A} + B}$ turns a difference into a quotient, and quotients are what the dividing trick handles.',
        },
        {
          type: 'derivation',
          title: 'Evaluate $\\lim_{x \\to \\infty}\\left(\\sqrt{x^2 + 8x} - x\\right)$',
          steps: [
            { tex: '\\left(\\sqrt{x^2 + 8x} - x\\right)\\cdot\\frac{\\sqrt{x^2 + 8x} + x}{\\sqrt{x^2 + 8x} + x}', why: 'Multiply by the conjugate over itself (a form of $1$; the denominator is positive for $x > 0$).' },
            { tex: '= \\frac{(x^2 + 8x) - x^2}{\\sqrt{x^2 + 8x} + x}', why: 'Difference of squares: $(\\sqrt{A} - x)(\\sqrt{A} + x) = A - x^2$.' },
            { tex: '= \\frac{8x}{\\sqrt{x^2 + 8x} + x}', why: 'The $x^2$ terms cancel — this is where the "race" is decided.' },
            { tex: '= \\frac{8x}{x\\sqrt{1 + \\frac{8}{x}} + x}', why: 'For $x > 0$, $\\sqrt{x^2 + 8x} = |x|\\sqrt{1 + \\frac{8}{x}} = x\\sqrt{1 + \\frac{8}{x}}$.' },
            { tex: '= \\frac{8}{\\sqrt{1 + \\frac{8}{x}} + 1}', why: 'Cancel the common factor $x$ from numerator and denominator.' },
            { tex: '\\to \\frac{8}{1 + 1} = 4', why: '$\\frac{8}{x} \\to 0$, and the square root is continuous.' },
          ],
          result: 'The difference settles to $4$: $\\sqrt{x^2 + 8x}$ stays about $4$ units ahead of $x$ forever.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the answer is $4$ and not $0$ or $\\infty$',
          text: 'Completing the square, $x^2 + 8x = (x + 4)^2 - 16$. So for large $x$, $\\sqrt{x^2 + 8x}$ is just a hair less than $\\sqrt{(x + 4)^2} = x + 4$. Subtracting $x$ leaves just under $4$, and the "hair" shrinks to nothing. The conjugate computation is the rigorous version of this picture.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'Evaluate the limit.',
      tex: '\\lim_{x \\to \\infty}\\left(\\sqrt{4x^2 + 12x} - 2x\\right)',
      hint: 'Multiply by $\\frac{\\sqrt{4x^2 + 12x} + 2x}{\\sqrt{4x^2 + 12x} + 2x}$, then divide top and bottom by $x$.',
      answer: '3',
      explanation: 'The conjugate gives $\\frac{(4x^2 + 12x) - 4x^2}{\\sqrt{4x^2 + 12x} + 2x} = \\frac{12x}{\\sqrt{4x^2 + 12x} + 2x}$. Dividing by $x$ (positive): $\\frac{12}{\\sqrt{4 + \\frac{12}{x}} + 2} \\to \\frac{12}{2 + 2} = 3$. Check by completing the square: $4x^2 + 12x = (2x + 3)^2 - 9$, so $\\sqrt{4x^2 + 12x}$ is just under $2x + 3$, and the difference approaches $3$.',
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'concept',
      title: 'Growth rates, exponentials and Big-O',
      blocks: [
        {
          type: 'p',
          text: 'Limits at infinity are not just for rational functions. A few more facts, which you can check on a graph now and will prove later in the course with L\'Hôpital\'s rule:',
        },
        {
          type: 'list',
          items: [
            '$\\lim\\limits_{x \\to \\infty} e^{-x} = 0$ and $\\lim\\limits_{x \\to -\\infty} e^{x} = 0$: decaying exponentials vanish (cooling, damping, smoothing).',
            '$\\lim\\limits_{x \\to \\infty}\\arctan x = \\frac{\\pi}{2}$ and $\\lim\\limits_{x \\to -\\infty}\\arctan x = -\\frac{\\pi}{2}$: two different asymptotes.',
            '**Growth hierarchy** as $x \\to \\infty$: $\\ln x \\ll x^p \\ll b^x$ for any $p > 0$ and $b > 1$. Any power eventually beats any logarithm, and any exponential eventually beats any power.',
          ],
        },
        {
          type: 'p',
          text: 'Here "$f \\ll g$" means $\\lim\\limits_{x \\to \\infty}\\frac{f(x)}{g(x)} = 0$. The dominant-term idea extends: in a sum, the fastest-growing term controls the long-run behaviour. For example, $\\frac{2^x + x^5}{3\\cdot 2^x} = \\frac{1}{3} + \\frac{1}{3}\\cdot\\frac{x^5}{2^x} \\to \\frac{1}{3} + 0 = \\frac{1}{3}$.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Big-O is a limit at infinity',
          text: 'When you analyse an algorithm, you care about running time $T(n)$ for **large** inputs $n$: a limit at infinity. If $\\lim\\limits_{n \\to \\infty}\\frac{T(n)}{g(n)}$ is a finite positive number, $T$ and $g$ grow at the same rate, written $T = \\Theta(g)$, and in particular $T = O(g)$ ([[big-o-notation]]). For example $\\frac{3n^2 + 100n}{n^2} \\to 3$, so $3n^2 + 100n = \\Theta(n^2)$: constants and lower-order terms are dropped for exactly the same reason $\\frac{3x^2 - x + 2}{5x^2 + 4x - 1} \\to \\frac{3}{5}$ ignores the $-x + 2$.',
        },
        {
          type: 'code',
          title: 'big_o.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdio>

int main() {
    // Algorithm A: 100 n log2(n) steps.  Algorithm B: n^2 steps.
    for (int k = 1; k <= 6; ++k) {
        double n = std::pow(10.0, k);
        double a = 100 * n * std::log2(n);
        double b = n * n;
        std::printf("n = %-8g B/A = %10.4f\\n", n, b / a);
    }
}`,
          output: `n = 10       B/A =     0.0301
n = 100      B/A =     0.1505
n = 1000     B/A =     1.0034
n = 10000    B/A =     7.5257
n = 100000   B/A =    60.2060
n = 1e+06    B/A =   501.7167`,
          annotations: [
            { lines: 5, text: 'A has a big constant factor ($100$) but a slower-growing core, $n\\log_2 n$.' },
            { lines: 10, text: 'The ratio $\\frac{B}{A} = \\frac{n}{100\\log_2 n} \\to \\infty$: B eventually loses, however small $n$ made it look.' },
          ],
        },
        {
          type: 'p',
          text: 'For small inputs the quadratic algorithm B is faster (ratio below $1$); they break even near $n \\approx 1000$; after that A wins by more and more. That is the practical meaning of $\\lim\\limits_{n \\to \\infty}\\frac{n^2}{100\\,n\\log_2 n} = \\infty$, and why Big-O ignores constant factors: a constant can delay the inevitable but never prevent it.',
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'Exams love functions with *different* limits at $\\infty$ and $-\\infty$ (radicals, $\\arctan$, $e^x$). Always ask for **both** directions when asked for "all horizontal asymptotes", and justify each with a limit, not just a sketch.',
        },
      ],
    },
    {
      kind: 'order',
      prompt: 'Order these functions from **slowest** growing to **fastest** growing as $n \\to \\infty$.',
      lines: ['$\\ln n$', '$\\sqrt{n}$', '$n$', '$n\\ln n$', '$n^2$', '$2^n$'],
      explanation: 'Logarithms grow slower than every positive power, so $\\ln n$ comes first, then $\\sqrt{n} = n^{1/2}$, then $n$. Next, $n\\ln n$ beats $n$ because $\\frac{n\\ln n}{n} = \\ln n \\to \\infty$, but loses to $n^2$ because $\\frac{n\\ln n}{n^2} = \\frac{\\ln n}{n} \\to 0$. Finally every exponential beats every power. This is exactly the ladder of common complexities: $O(\\log n)$, $O(\\sqrt n)$, $O(n)$, $O(n\\log n)$, $O(n^2)$, $O(2^n)$.',
    },
    {
      kind: 'fill',
      prompt: 'Complete the statements about long-run behaviour.',
      template: '$\\lim\\limits_{x \\to \\infty} e^{-x} =$ ___, $\\lim\\limits_{x \\to -\\infty}\\arctan x =$ ___, and $\\lim\\limits_{x \\to \\infty}\\dfrac{2^x + x^5}{3\\cdot 2^x} =$ ___.',
      blanks: [{ answers: ['$0$'] }, { answers: ['$-\\frac{\\pi}{2}$'] }, { answers: ['$\\frac{1}{3}$'] }],
      wordBank: ['$0$', '$-\\frac{\\pi}{2}$', '$\\frac{1}{3}$', '$\\frac{\\pi}{2}$', '$\\infty$', '$1$'],
      explanation: '$e^{-x} = \\frac{1}{e^x}$ and $e^x \\to \\infty$, so $e^{-x} \\to 0$. The graph of $\\arctan$ levels off at $-\\frac{\\pi}{2}$ on the left (and $\\frac{\\pi}{2}$ on the right). In the last one the dominant term is $2^x$: dividing top and bottom by $2^x$ gives $\\frac{1 + x^5/2^x}{3} \\to \\frac{1 + 0}{3} = \\frac{1}{3}$, because exponentials beat powers.',
    },
  ],
  takeaways: [
    '$\\lim_{x \\to \\pm\\infty} f(x) = L$ means $y = L$ is a horizontal asymptote; graphs may cross horizontal asymptotes, and the two ends can have different ones.',
    'For rational functions divide by the highest power in the denominator: smaller degree on top gives $0$, equal degrees give the ratio of leading coefficients, larger degree on top gives $\\pm\\infty$.',
    'Far from the origin only dominant terms matter: $\\frac{p(x)}{q(x)} \\approx \\frac{a}{b}x^{m - n}$.',
    'With radicals as $x \\to -\\infty$, use $\\sqrt{x^2} = |x| = -x$; resolve $\\infty - \\infty$ with the conjugate.',
    'Growth hierarchy: $\\ln x \\ll x^p \\ll b^x$. Big-O compares algorithms through limits of ratios at infinity.',
  ],
  reading: [
    {
      title: 'OpenStax Calculus Volume 1 — 4.6 Limits at Infinity and Asymptotes',
      url: 'https://openstax.org/books/calculus-volume-1/pages/4-6-limits-at-infinity-and-asymptotes',
      source: 'openstax',
      note: 'Full treatment with many rational and radical examples, including two-asymptote functions.',
    },
    {
      title: "Paul's Online Notes — Limits at Infinity, Part I",
      url: 'https://tutorial.math.lamar.edu/Classes/CalcI/LimitsAtInfinityI.aspx',
      source: 'paul',
      note: 'Carefully worked examples of the dividing trick and the $\\sqrt{x^2} = |x|$ sign issue.',
    },
    {
      title: 'Wikipedia — Big O notation',
      url: 'https://en.wikipedia.org/wiki/Big_O_notation',
      source: 'wikipedia',
      note: 'The formal definition used in computer science, including the limit characterisation.',
    },
  ],
};
