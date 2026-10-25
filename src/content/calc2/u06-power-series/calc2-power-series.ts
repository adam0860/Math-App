import type { Lesson } from '../../types';

/** 1 when the slider n is at least k, 0 otherwise (the calculator has no >= operator). */
const gate = (k: number) => `(sign(n - ${k} + 0.5) + 1)/2`;
/** Partial sum of x^k / k for k = 1..kmax, where only the terms with k <= n are switched on. */
const harmonicPowerSum = (xv: string, kmax: number) =>
  Array.from({ length: kmax }, (_, i) => i + 1)
    .map((k) => `${gate(k)}*(${xv})^${k}/${k}`)
    .join(' + ');

export const lesson: Lesson = {
  id: 'calc2-power-series',
  title: 'Power Series',
  summary: 'Polynomials that never end: where an infinite sum of powers of $x$ converges, and why the answer is always an interval.',
  minutes: 17,
  objectives: [
    'Recognise a power series $\\sum c_n (x-a)^n$ and identify its center and coefficients',
    'State the three possibilities for where a power series converges',
    'Use the ratio test to find the radius of convergence',
    'Test the endpoints separately to find the exact interval of convergence',
    'Handle the extreme cases $R = 0$ and $R = \\infty$',
  ],
  steps: [
    {
      kind: 'concept',
      title: 'A polynomial that never stops',
      blocks: [
        {
          type: 'p',
          text: 'Polynomials are the friendliest functions there are. You can evaluate one with nothing but multiplication and addition, differentiate it term by term, and integrate it term by term. A computer can do all of that exactly. Most functions you care about — $e^x$, $\\sin x$, $\\ln x$ — are not polynomials. This final unit answers a bold question: can they be written as polynomials with *infinitely many* terms?',
        },
        {
          type: 'definition',
          term: 'Power series',
          text: 'A [[power-series]] centered at $a$ is a series of the form\n\n$$\\sum_{n=0}^{\\infty} c_n (x-a)^n = c_0 + c_1(x-a) + c_2(x-a)^2 + c_3(x-a)^3 + \\cdots$$\n\nThe numbers $c_n$ are the **coefficients** and $a$ is the **center**. When $a = 0$ it is simply $\\sum c_n x^n$. By convention $(x-a)^0 = 1$, even when $x = a$.',
        },
        {
          type: 'p',
          text: 'The key shift in viewpoint: in the last unit, a series was a list of *numbers* to add up. A power series is a different series for every value of $x$ you plug in. For some $x$ it converges, for others it diverges. Where it converges, its sum is a number that depends on $x$ — so the power series **defines a function** $f(x) = \\sum c_n (x-a)^n$ whose domain is the set of $x$ where the series converges.',
        },
        {
          type: 'p',
          text: 'You already know one. With every $c_n = 1$ and $a = 0$ we get the [[geometric-series]] with ratio $x$, which converges exactly when $|x| < 1$:',
        },
        {
          type: 'math',
          tex: '\\sum_{n=0}^{\\infty} x^n = 1 + x + x^2 + x^3 + \\cdots = \\frac{1}{1-x}, \\qquad -1 < x < 1',
        },
        {
          type: 'graph',
          x: [-1.6, 1.6],
          y: [-2, 8],
          functions: [
            { expr: '1/(1 - x)', label: '$y = \\frac{1}{1-x}$', color: 'gray', dashed: true },
            { expr: '(1 - x^(n+1))/(1 - x)', label: '$S_n(x) = 1 + x + \\cdots + x^n$', color: 'blue' },
          ],
          vlines: [{ x: -1, label: 'x = −1' }, { x: 1, label: 'x = 1' }],
          sliders: [{ name: 'n', min: 0, max: 30, step: 1, value: 3, label: 'last power $n$' }],
          readouts: [
            { label: '$S_n(0.5) =$', expr: '(1 - 0.5^(n+1))/(1 - 0.5)', digits: 6 },
            { label: '$S_n(1.2) =$', expr: '(1 - 1.2^(n+1))/(1 - 1.2)', digits: 2 },
          ],
          caption: 'Raise $n$. Between the dashed lines the partial sums hug $\\frac{1}{1-x}$ more and more tightly ($S_n(0.5) \\to 2$). Outside them the partial sums flail wildly and $S_n(1.2)$ runs off to infinity.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why bother writing functions as series?',
          text: 'A CPU has circuits for adding and multiplying, not for "sine". Every time a game calls `sin(angle)` or `exp(x)`, the math library evaluates a carefully chosen polynomial. Power series are where those polynomials come from, and the convergence questions in this lesson tell us *when such a polynomial can be trusted*. By the end of this unit you will write your own `sin` in C++.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'Evaluate the power series $\\displaystyle\\sum_{n=0}^{\\infty} x^n$ at $x = -\\tfrac{1}{2}$.',
      hint: 'Check that $|x| < 1$, then use $\\frac{1}{1-x}$.',
      answer: '2/3',
      answerTex: '\\frac{2}{3}',
      explanation: 'Since $|-\\tfrac12| < 1$ the series converges, and its sum is $\\frac{1}{1 - (-1/2)} = \\frac{1}{3/2} = \\frac{2}{3}$. Written out: $1 - \\tfrac12 + \\tfrac14 - \\tfrac18 + \\cdots$; the partial sums $1, 0.5, 0.75, 0.625, \\dots$ zig-zag in on $0.\\overline{6}$. Plugging in a value of $x$ turns a power series into an ordinary numerical series.',
    },
    {
      kind: 'concept',
      title: 'Where can a power series converge?',
      blocks: [
        {
          type: 'p',
          text: 'Every power series converges at its center: at $x = a$ every term except $c_0$ is zero, so the sum is just $c_0$. The surprise is how *orderly* the rest of the picture is. The set of convergence is never a scattered mess of points — it is always an interval centered at $a$.',
        },
        {
          type: 'theorem',
          name: 'The three possibilities',
          text: 'For a power series $\\sum c_n (x-a)^n$ exactly one of these is true:\n\n1. It converges only at $x = a$.\n2. It converges for every real $x$.\n3. There is a number $R > 0$ such that it converges (absolutely) when $|x - a| < R$ and diverges when $|x - a| > R$.',
        },
        {
          type: 'definition',
          term: 'Radius and interval of convergence',
          text: 'The number $R$ in case 3 is the [[radius-of-convergence]]. We say $R = 0$ in case 1 and $R = \\infty$ in case 2. The [[interval-of-convergence]] is the set of all $x$ where the series converges. In case 3 it is one of $(a-R, a+R)$, $[a-R, a+R)$, $(a-R, a+R]$ or $[a-R, a+R]$ — the theorem says **nothing** about the two endpoints $x = a \\pm R$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the answer is always an interval',
          text: 'Suppose the series converges at some $x_0 \\ne a$. Then its terms $c_n(x_0 - a)^n \\to 0$, so they are bounded: $|c_n (x_0-a)^n| \\le M$. Now take any $x$ *closer* to the center, $|x - a| < |x_0 - a|$, and set $r = \\frac{|x-a|}{|x_0-a|} < 1$. Then\n\n$$|c_n (x-a)^n| = |c_n (x_0-a)^n| \\cdot r^n \\le M r^n,$$\n\nand $\\sum M r^n$ is a convergent geometric series. By the comparison test the series converges absolutely at $x$. So convergence at one point forces convergence at every point nearer the center — and symmetrically, divergence at one point forces divergence everywhere farther out. The boundary between the two zones sits at the same distance $R$ on both sides.',
        },
        {
          type: 'callout',
          variant: 'analogy',
          title: 'A circle of safety',
          text: 'Think of the center $a$ as a campfire. Close to it, everything is fine (convergence); far away, it is too cold (divergence). Warmth depends only on *distance* from the fire, not on direction, so the safe zone is a symmetric interval $(a - R, a + R)$. Exactly on the boundary circle, the weather is unpredictable — that is the endpoint question.',
        },
      ],
    },
    {
      kind: 'truefalse',
      prompt: 'If a power series centered at $0$ converges at $x = 3$, then it must also converge at $x = -3$.',
      answer: false,
      explanation: 'Convergence at $x = 3$ guarantees convergence for every $x$ with $|x| < 3$ — strictly closer to the center. The other endpoint $x = -3$ is at the *same* distance, and endpoints can behave differently. Example: $\\sum \\frac{x^n}{n\\,3^n}$ gives $\\sum \\frac{(-1)^n}{n}$ at $x = -3$ (converges, alternating harmonic) but $\\sum \\frac1n$ at $x = 3$ (diverges, harmonic). What *is* true: it converges at $x = -2$, or at any $x$ in $(-3, 3)$.',
    },
    {
      kind: 'concept',
      title: 'Finding the radius with the ratio test',
      blocks: [
        {
          type: 'p',
          text: 'The [[ratio-test]] is the natural tool, because consecutive terms of a power series differ by a factor involving $(x-a)$. Treat $x$ as a fixed number and apply the test to the absolute values of the terms: if $\\lim \\left|\\frac{a_{n+1}}{a_n}\\right| = L$, the series converges absolutely when $L < 1$ and diverges when $L > 1$. For a power series $L$ will depend on $x$, and solving $L < 1$ gives the radius.',
        },
        {
          type: 'derivation',
          title: 'Radius of convergence of $\\displaystyle\\sum_{n=1}^{\\infty} \\frac{(x-2)^n}{n\\,3^n}$',
          steps: [
            { tex: 'a_n = \\frac{(x-2)^n}{n\\,3^n}, \\qquad a_{n+1} = \\frac{(x-2)^{n+1}}{(n+1)\\,3^{n+1}}', why: 'Write the general term and the next one. Replace **every** $n$ by $n+1$, including the one in $3^n$.' },
            { tex: '\\left|\\frac{a_{n+1}}{a_n}\\right| = \\frac{|x-2|^{n+1}}{(n+1)\\,3^{n+1}} \\cdot \\frac{n\\,3^n}{|x-2|^n}', why: 'Dividing by a fraction means multiplying by its reciprocal. Absolute values because the ratio test uses $|a_{n+1}/a_n|$.' },
            { tex: '= \\frac{|x-2|}{3} \\cdot \\frac{n}{n+1}', why: 'Cancel: $\\frac{|x-2|^{n+1}}{|x-2|^n} = |x-2|$ and $\\frac{3^n}{3^{n+1}} = \\frac13$.' },
            { tex: 'L = \\lim_{n \\to \\infty} \\frac{|x-2|}{3} \\cdot \\frac{n}{n+1} = \\frac{|x-2|}{3}', why: 'For a fixed $x$ the factor $\\frac{|x-2|}{3}$ is a constant, and $\\frac{n}{n+1} \\to 1$.' },
            { tex: '\\frac{|x-2|}{3} < 1 \\iff |x - 2| < 3', why: 'The ratio test guarantees absolute convergence when $L < 1$. Multiply both sides by $3$.' },
            { tex: 'R = 3, \\qquad -1 < x < 5 \\text{ (at least)}', why: '$|x - 2| < 3$ means "within distance $3$ of the center $2$". For $|x-2| > 3$ we have $L > 1$, so the series diverges there.' },
          ],
          result: 'The radius of convergence is $R = 3$. The series converges on $(-1, 5)$ and diverges outside $[-1, 5]$. The endpoints $x = -1$ and $x = 5$ give $L = 1$, where the ratio test is silent — we deal with them on the next card.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Read the radius off the inequality',
          text: 'Always massage the condition into the form $|x - a| < R$. If you get something like $|2x - 1| < 1$, factor out the coefficient of $x$ first: $|2x - 1| = 2\\left|x - \\tfrac12\\right|$, so the condition is $\\left|x - \\tfrac12\\right| < \\tfrac12$ — center $\\tfrac12$, radius $\\tfrac12$, not $1$.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'Find the radius of convergence of $\\displaystyle\\sum_{n=1}^{\\infty} \\frac{(2x - 1)^n}{n^2}$.',
      hint: 'The ratio test gives a condition on $|2x - 1|$. Rewrite it as a condition on $\\left|x - \\tfrac12\\right|$.',
      label: '$R =$',
      answer: '1/2',
      answerTex: '\\frac{1}{2}',
      explanation: '$\\left|\\frac{a_{n+1}}{a_n}\\right| = |2x-1| \\cdot \\frac{n^2}{(n+1)^2} \\to |2x - 1|$. Convergence needs $|2x - 1| < 1$, i.e. $2\\left|x - \\tfrac12\\right| < 1$, i.e. $\\left|x - \\tfrac12\\right| < \\tfrac12$. The series is centered at $\\tfrac12$ with radius $R = \\tfrac12$. The common wrong answer $R = 1$ comes from reading the radius off $|2x - 1| < 1$ before dividing out the $2$.',
    },
    {
      kind: 'concept',
      title: 'The endpoints need their own tests',
      blocks: [
        {
          type: 'p',
          text: 'At $x = a \\pm R$ the ratio test always gives $L = 1$, so it can never decide the endpoints. Instead, substitute each endpoint into the series — you get an ordinary numerical series — and use any test from the previous unit: $p$-series, comparison, the alternating series test, the divergence test.',
        },
        {
          type: 'derivation',
          title: 'Endpoints of $\\displaystyle\\sum_{n=1}^{\\infty} \\frac{(x-2)^n}{n\\,3^n}$ (radius $3$, center $2$)',
          steps: [
            { tex: 'x = 5: \\quad \\sum_{n=1}^{\\infty} \\frac{3^n}{n\\,3^n} = \\sum_{n=1}^{\\infty} \\frac{1}{n}', why: 'Substitute $x = 5$, so $x - 2 = 3$, and cancel $3^n$.' },
            { tex: '\\text{diverges}', why: 'This is the [[harmonic-series]] ($p$-series with $p = 1$).' },
            { tex: 'x = -1: \\quad \\sum_{n=1}^{\\infty} \\frac{(-3)^n}{n\\,3^n} = \\sum_{n=1}^{\\infty} \\frac{(-1)^n}{n}', why: 'Now $x - 2 = -3$, and $(-3)^n = (-1)^n 3^n$.' },
            { tex: '\\text{converges}', why: 'Alternating series test: $\\frac1n$ is positive, decreasing and tends to $0$. (It converges only *conditionally*.)' },
          ],
          result: 'The interval of convergence is $[-1, 5)$: closed at the left end, open at the right.',
        },
        {
          type: 'p',
          text: 'Drag the slider below to add terms of a similar series, $\\sum \\frac{x^n}{n}$ (center $0$, radius $1$). Watch the two endpoints: at $x = -1$ the partial sums settle down; at $x = 1$ they creep upward forever, like the harmonic series they are.',
        },
        {
          type: 'graph',
          x: [-1.5, 1.5],
          y: [-2, 4],
          functions: [
            { expr: harmonicPowerSum('x', 20), label: '$S_n(x) = x + \\frac{x^2}{2} + \\cdots + \\frac{x^n}{n}$', color: 'blue' },
          ],
          vlines: [{ x: -1 }, { x: 1 }],
          sliders: [{ name: 'n', min: 1, max: 20, step: 1, value: 4, label: 'number of terms $n$' }],
          readouts: [
            { label: '$S_n(-1) =$', expr: harmonicPowerSum('-1', 20), digits: 4 },
            { label: '$S_n(1) =$', expr: harmonicPowerSum('1', 20), digits: 4 },
          ],
          caption: '$S_n(-1)$ oscillates toward about $-0.693$; $S_n(1)$ keeps growing (slowly, like $\\ln n$). Same radius, different behavior at the two ends.',
        },
        {
          type: 'table',
          headers: ['Series', 'Radius', 'At $x = -1$', 'At $x = 1$', 'Interval'],
          rows: [
            ['$\\sum x^n$', '$1$', 'diverges (terms $\\not\\to 0$)', 'diverges', '$(-1, 1)$'],
            ['$\\sum \\frac{x^n}{n}$', '$1$', 'converges (AST)', 'diverges (harmonic)', '$[-1, 1)$'],
            ['$\\sum \\frac{(-1)^n x^n}{n}$', '$1$', 'diverges (harmonic)', 'converges (AST)', '$(-1, 1]$'],
            ['$\\sum \\frac{x^n}{n^2}$', '$1$', 'converges (absolutely)', 'converges ($p = 2$)', '$[-1, 1]$'],
          ],
          caption: 'All four have radius $1$, and all four endpoint patterns actually happen.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Don\'t skip the endpoints',
          text: 'Writing $(a - R, a + R)$ without checking the ends is the most common way to lose points on these problems. Also remember that $\\frac{1}{n} \\to 0$ does **not** make $\\sum \\frac1n$ converge: the divergence test can only prove divergence.',
        },
      ],
    },
    {
      kind: 'error',
      prompt: 'A student finds the interval of convergence of $\\displaystyle\\sum_{n=1}^{\\infty} \\frac{x^n}{n\\,2^n}$. Tap the first line that is wrong.',
      lines: [
        '$\\left|\\frac{a_{n+1}}{a_n}\\right| = \\frac{|x|}{2} \\cdot \\frac{n}{n+1} \\to \\frac{|x|}{2}$',
        '$\\frac{|x|}{2} < 1 \\iff |x| < 2$, so $R = 2$',
        'At $x = 2$: $\\sum \\frac{1}{n}$ converges, because $\\frac1n \\to 0$',
        'At $x = -2$: $\\sum \\frac{(-1)^n}{n}$ converges by the alternating series test',
        'Interval of convergence: $[-2, 2]$',
      ],
      errorLines: [3],
      explanation: 'Line 3 misuses the divergence test: terms tending to $0$ is necessary for convergence but not sufficient. $\\sum \\frac1n$ is the harmonic series, which diverges. Lines 1, 2 and 4 are correct, so the right interval is $[-2, 2)$ — included at $-2$, excluded at $2$.',
    },
    {
      kind: 'order',
      prompt: 'Put the steps for finding an interval of convergence in order.',
      lines: [
        'Compute $\\left|\\frac{a_{n+1}}{a_n}\\right|$ and simplify',
        'Take the limit as $n \\to \\infty$ to get $L$ in terms of $x$',
        'Solve $L < 1$ and write it as $|x - a| < R$',
        'Substitute each endpoint $x = a \\pm R$ and test those two series separately',
        'Write the interval, using brackets only at endpoints that converge',
      ],
      distractors: ['Conclude that both endpoints converge because $L = 1$ there'],
      explanation: 'The ratio test produces the radius (steps 1–3), but at the endpoints $L = 1$, which tells you nothing — so the endpoints must be tested on their own before you can write the final interval. The distractor confuses "inconclusive" with "converges".',
    },
    {
      kind: 'concept',
      title: 'The extremes: $R = 0$ and $R = \\infty$',
      blocks: [
        {
          type: 'p',
          text: 'Factorials grow faster than any exponential, so they push the ratio-test limit to $0$ or to $\\infty$ — and those are exactly the two extreme cases of the theorem.',
        },
        {
          type: 'derivation',
          title: '$\\displaystyle\\sum_{n=0}^{\\infty} \\frac{x^n}{n!}$ converges for every $x$',
          steps: [
            { tex: '\\left|\\frac{a_{n+1}}{a_n}\\right| = \\frac{|x|^{n+1}}{(n+1)!} \\cdot \\frac{n!}{|x|^n}', why: 'Ratio of consecutive terms (for $x \\ne 0$; at $x = 0$ the series trivially converges).' },
            { tex: '= \\frac{|x|}{n+1}', why: '$(n+1)! = (n+1)\\cdot n!$, so $\\frac{n!}{(n+1)!} = \\frac{1}{n+1}$.' },
            { tex: '\\to 0 < 1 \\quad \\text{for every fixed } x', why: 'However large $|x|$ is, it is a fixed number while $n + 1 \\to \\infty$.' },
          ],
          result: '$R = \\infty$ and the interval of convergence is $(-\\infty, \\infty)$. (Two lessons from now you will discover that this series is $e^x$.)',
        },
        {
          type: 'derivation',
          title: '$\\displaystyle\\sum_{n=0}^{\\infty} n!\\,x^n$ converges only at $x = 0$',
          steps: [
            { tex: '\\left|\\frac{a_{n+1}}{a_n}\\right| = \\frac{(n+1)!\\,|x|^{n+1}}{n!\\,|x|^n} = (n+1)|x|', why: 'Same cancellation, upside down.' },
            { tex: '\\to \\infty \\quad \\text{if } x \\ne 0', why: 'Any nonzero $|x|$ multiplied by $n + 1 \\to \\infty$ grows without bound, so $L > 1$.' },
          ],
          result: '$R = 0$: the series converges only at its center. It defines no useful function.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Never compute $n!$ in a loop like this',
          text: '`double` overflows at $171!$ and `long long` already at $21!$, yet $\\frac{x^n}{n!}$ itself is tiny. The ratio you just computed is the fix: each term is the previous one times $\\frac{x}{n}$. In code: `term *= x / n; sum += term;` — no factorials, no giant powers, no overflow. The ratio test and the efficient algorithm are the same calculation.',
        },
      ],
    },
    {
      kind: 'mcq',
      prompt: 'What is the radius of convergence of $\\displaystyle\\sum_{n=0}^{\\infty} \\frac{3^n x^n}{n+1}$?',
      options: [
        {
          text: '$3$',
          why: 'This inverts the answer. The condition is $3|x| < 1$, which makes $|x|$ *small*, not $|x| < 3$.',
        },
        {
          text: '$\\frac13$',
          correct: true,
          why: 'The ratio is $3|x| \\cdot \\frac{n+1}{n+2} \\to 3|x|$, and $3|x| < 1 \\iff |x| < \\frac13$.',
        },
        {
          text: '$1$',
          why: 'That would be right without the $3^n$. The factor $3^n$ changes the ratio limit to $3|x|$.',
        },
        {
          text: '$\\infty$',
          why: 'There is no factorial here to drive the ratio to $0$; for $|x| > \\frac13$ the terms blow up.',
        },
      ],
      explanation: '$\\left|\\frac{a_{n+1}}{a_n}\\right| = \\frac{3^{n+1}|x|^{n+1}}{n+2} \\cdot \\frac{n+1}{3^n |x|^n} = 3|x|\\,\\frac{n+1}{n+2} \\to 3|x|$. Requiring $3|x| < 1$ gives $|x| < \\frac13$. A useful pattern: a factor $b^n$ in the numerator gives radius $\\frac{1}{b}$; in the denominator it gives radius $b$.',
    },
    {
      kind: 'concept',
      title: 'A power series is a function',
      blocks: [
        {
          type: 'p',
          text: 'Put the pieces together. Inside its interval of convergence, $f(x) = \\sum c_n (x-a)^n$ is a perfectly good function: plug in $x$, add up the series, get a number. Outside, the formula means nothing. That raises the questions the rest of this unit answers:',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Which familiar functions *are* power series, and on what intervals? (Next lesson: start from $\\frac{1}{1-x}$ and build $\\ln(1+x)$ and $\\arctan x$.)',
            'Given a function, how do we find its coefficients? (Taylor series: $c_n = \\frac{f^{(n)}(a)}{n!}$.)',
            'If we stop after finitely many terms, how big is the error? (Taylor\'s inequality, and how real math libraries compute $\\sin x$.)',
          ],
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Inside the interval, convergence is absolute and robust',
          text: 'For $|x - a| < R$ the convergence is *absolute* (the ratio test proves $\\sum |c_n (x-a)^n|$ converges), so you may rearrange or regroup terms freely there. Conditional convergence — and all its weirdness — can only happen at an endpoint.',
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'A typical exam question: "Find the radius and interval of convergence." Graders look for (1) a correct ratio-test limit with absolute values, (2) the inequality rewritten as $|x - a| < R$, (3) **both** endpoints tested with a named test, and (4) the final interval with correct brackets. Show all four.',
        },
        {
          type: 'deepdive',
          title: 'When the ratio test fails: the root test',
          blocks: [
            {
              type: 'p',
              text: 'If the coefficients involve $n$-th powers, such as $\\sum \\frac{x^n}{n^n}$, the [[root-test]] is often cleaner: $\\sqrt[n]{|x|^n / n^n} = \\frac{|x|}{n} \\to 0$, so $R = \\infty$. In general $\\frac{1}{R} = \\limsup_{n\\to\\infty} \\sqrt[n]{|c_n|}$ (the Cauchy–Hadamard formula), which works even when the ratio $\\frac{c_{n+1}}{c_n}$ has no limit — for example when every other coefficient is zero.',
            },
            {
              type: 'p',
              text: 'With gaps like $\\sum \\frac{x^{2n}}{4^n}$, just apply the ratio test to the actual consecutive nonzero terms: $\\frac{|x|^{2n+2}/4^{n+1}}{|x|^{2n}/4^n} = \\frac{x^2}{4}$, and $\\frac{x^2}{4} < 1 \\iff |x| < 2$.',
            },
          ],
        },
      ],
    },
    {
      kind: 'fill',
      prompt: 'For $\\displaystyle\\sum_{n=1}^{\\infty} \\frac{(x-1)^n}{n\\,2^n}$, fill in the center and the interval of convergence.',
      template: 'The center is $a =$ ___ and the interval of convergence is ___.',
      blanks: [{ answers: ['$1$'] }, { answers: ['$[-1, 3)$'] }],
      wordBank: ['$1$', '$-1$', '$2$', '$[-1, 3)$', '$(-1, 3]$', '$[-1, 3]$', '$(-1, 3)$'],
      hint: 'The ratio test gives $\\frac{|x - 1|}{2} < 1$. Then test $x = 3$ and $x = -1$.',
      explanation: 'The center is where $(x - a)$ vanishes: $a = 1$. The ratio test gives $\\frac{|x-1|}{2} < 1$, so $R = 2$ and the open interval is $(-1, 3)$. At $x = 3$ the series is $\\sum \\frac{2^n}{n 2^n} = \\sum \\frac1n$, which diverges. At $x = -1$ it is $\\sum \\frac{(-2)^n}{n 2^n} = \\sum \\frac{(-1)^n}{n}$, which converges by the alternating series test. So the interval is $[-1, 3)$.',
    },
    {
      kind: 'numeric',
      prompt: 'Find the radius of convergence of $\\displaystyle\\sum_{n=0}^{\\infty} \\frac{n\\,(x+4)^n}{5^n}$.',
      label: '$R =$',
      answer: '5',
      hint: 'In the ratio, $\\frac{n+1}{n} \\to 1$ and the powers of $5$ leave a single factor.',
      explanation: '$\\left|\\frac{a_{n+1}}{a_n}\\right| = \\frac{(n+1)|x+4|^{n+1}}{5^{n+1}} \\cdot \\frac{5^n}{n|x+4|^n} = \\frac{|x+4|}{5}\\cdot\\frac{n+1}{n} \\to \\frac{|x+4|}{5}$. So $|x + 4| < 5$: center $-4$, radius $R = 5$. Polynomial factors like $n$ or $n^2$ never change the radius, because their ratio tends to $1$ — they only matter at the endpoints. (Here both endpoints diverge, since the terms $n(\\pm1)^n$ do not tend to $0$.)',
    },
  ],
  takeaways: [
    'A power series $\\sum c_n (x-a)^n$ is a different numerical series for each $x$; where it converges, it defines a function of $x$.',
    'It converges either only at $x = a$ ($R = 0$), for all $x$ ($R = \\infty$), or for $|x - a| < R$ and diverges for $|x - a| > R$.',
    'Find $R$ with the ratio test: compute $\\lim \\left|\\frac{a_{n+1}}{a_n}\\right|$ in terms of $x$, then solve $L < 1$ in the form $|x - a| < R$.',
    'The ratio test is always inconclusive at the endpoints $x = a \\pm R$; substitute them and test those series separately.',
    'Factorials in the denominator give $R = \\infty$; factorials in the numerator give $R = 0$.',
  ],
  reading: [
    {
      title: 'OpenStax Calculus Volume 2 — 6.1 Power Series and Functions',
      url: 'https://openstax.org/books/calculus-volume-2/pages/6-1-power-series-and-functions',
      source: 'openstax',
      note: 'Free textbook section with many more radius-and-interval examples and exercises.',
    },
    {
      title: "Paul's Online Notes — Power Series",
      url: 'https://tutorial.math.lamar.edu/Classes/CalcII/PowerSeries.aspx',
      source: 'paul',
      note: 'Clear worked examples that check every endpoint carefully, exactly as instructors expect.',
    },
    {
      title: 'Wikipedia — Radius of convergence',
      url: 'https://en.wikipedia.org/wiki/Radius_of_convergence',
      source: 'wikipedia',
      note: 'Explains why the radius is really the distance to the nearest problem point in the complex plane.',
    },
  ],
};
