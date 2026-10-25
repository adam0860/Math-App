import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'alg-exponential-functions',
  title: 'Exponential Functions and the Number e',
  summary: 'Growth by repeated multiplication: the shape of $b^x$, its transformations, and where the strange number $e \\approx 2.718$ comes from.',
  minutes: 17,
  objectives: [
    'Tell the difference between linear growth (repeated adding) and exponential growth (repeated multiplying)',
    'State the definition of an exponential function $f(x) = b^x$ and explain why $b > 0$, $b \\ne 1$',
    'Sketch $y = b^x$ and its transformations, naming the intercept, asymptote, domain and range',
    'Find an exponential function $y = a \\cdot b^x$ from two points',
    'Explain where $e$ comes from and why $e^x$ is called the natural exponential',
  ],
  steps: [
    {
      kind: 'concept',
      title: 'Adding vs multiplying',
      blocks: [
        {
          type: 'p',
          text: 'Imagine two offers. Offer A pays you \\$100 on day 1, and \\$100 more every day after. Offer B pays 1 cent on day 1, and **doubles** every day. After a week, A has paid \\$700 and B has paid \\$1.27 in total. Which one should you take for a month?',
        },
        {
          type: 'table',
          headers: ['day $x$', 'A: total $100x$', 'B: total $0.01(2^x - 1)$'],
          rows: [
            ['$1$', '\\$100', '\\$0.01'],
            ['$7$', '\\$700', '\\$1.27'],
            ['$14$', '\\$1{,}400', '\\$163.83'],
            ['$21$', '\\$2{,}100', '\\$20{,}971.51'],
            ['$30$', '\\$3{,}000', '\\$10{,}737{,}418.23'],
          ],
          caption: 'Doubling 1 cent for a month beats \\$100 a day by a factor of more than 3,500. (B\'s total after $x$ days is $0.01(1 + 2 + \\dots + 2^{x-1}) = 0.01(2^x - 1)$.)',
        },
        {
          type: 'p',
          text: 'Offer A grows by **adding** the same amount each step: that is a linear function, with a constant [[rate-of-change|rate of change]]. Offer B grows by **multiplying** by the same factor each step. Repeated multiplication is exactly what an [[exponent]] records, so this kind of growth is called exponential.',
        },
        {
          type: 'definition',
          term: 'Exponential function',
          text: 'An [[exponential-function]] with base $b$ is\n\n$$f(x) = b^x, \\qquad b > 0,\\ b \\ne 1,$$\n\ndefined for every real number $x$. The variable is in the **exponent**, not the base.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the restrictions on $b$?',
          text: 'If $b = 1$, then $1^x = 1$ for every $x$: a boring constant, not growth. If $b < 0$, then $b^x$ is not even a real number for many inputs: $(-4)^{1/2} = \\sqrt{-4}$ is undefined, so the "graph" would be a scattering of isolated dots. With $b > 0$, rational exponents (roots) always work, and $b^x$ fills in to a smooth unbroken curve.',
        },
        {
          type: 'compare',
          left: { title: 'Power function', tone: 'neutral', tex: ['y = x^2', '\\text{variable in the base}'] },
          right: { title: 'Exponential function', tone: 'neutral', tex: ['y = 2^x', '\\text{variable in the exponent}'] },
        },
      ],
    },
    {
      kind: 'mcq',
      prompt: 'Which of these is an exponential function?',
      options: [
        { text: '$f(x) = x^3$', why: 'The variable is in the base and the exponent is fixed: that is a power (polynomial) function.' },
        { text: '$f(x) = 5 \\cdot 3^x$', correct: true, why: 'Constant base $3 > 0$, $3 \\ne 1$, with $x$ in the exponent — a scaled exponential.' },
        { text: '$f(x) = 1^x$', why: 'Base $1$ is excluded: $1^x = 1$ for every $x$, so this is just the constant function $1$.' },
        { text: '$f(x) = (-2)^x$', why: 'A negative base is excluded: $(-2)^{1/2}$ is not a real number, so this is not defined on all real $x$.' },
      ],
      explanation: 'An exponential function has a **fixed positive base other than 1** and the **variable in the exponent**. A coefficient in front, like the $5$ in $5 \\cdot 3^x$, just scales the output and is allowed.',
    },
    {
      kind: 'concept',
      title: 'The shape of $y = b^x$',
      blocks: [
        {
          type: 'p',
          text: 'Exponents with every kind of input are things you already know from the exponent rules: negative exponents mean reciprocals and fractional exponents mean roots. That lets us evaluate $b^x$ anywhere.',
        },
        {
          type: 'derivation',
          title: 'Evaluate $f(x) = 8^x$ at $x = -1$, $0$ and $\\tfrac{2}{3}$',
          steps: [
            { tex: 'f(-1) = 8^{-1} = \\frac{1}{8}', why: 'A negative exponent means "reciprocal": $b^{-n} = \\frac{1}{b^n}$.' },
            { tex: 'f(0) = 8^0 = 1', why: 'Any nonzero base to the power $0$ is $1$. This is why **every** $y = b^x$ passes through $(0, 1)$.' },
            { tex: 'f\\left(\\tfrac{2}{3}\\right) = 8^{2/3} = \\left(\\sqrt[3]{8}\\right)^2', why: 'A rational exponent $\\frac{m}{n}$ means "take the $n$th root, then the $m$th power."' },
            { tex: '= 2^2 = 4', why: '$\\sqrt[3]{8} = 2$ because $2^3 = 8$. Taking the root first keeps the numbers small.' },
          ],
          result: 'The graph of $y = 8^x$ passes through $\\left(-1, \\tfrac18\\right)$, $(0, 1)$ and $\\left(\\tfrac23, 4\\right)$.',
        },
        {
          type: 'graph',
          x: [-4, 4],
          y: [-1, 8],
          functions: [
            { expr: 'b^x', label: '$y = b^x$' },
          ],
          hlines: [{ y: 0, label: 'y = 0' }],
          points: [{ x: 0, y: 1, label: '(0, 1)' }, { x: 1, y: 'b', label: '(1, b)' }],
          sliders: [{ name: 'b', min: 0.2, max: 4, step: 0.05, value: 2, label: '$b$' }],
          caption: 'Slide $b$ above and below $1$. For $b > 1$ the curve rises (growth); for $0 < b < 1$ it falls (decay). Every curve passes through $(0, 1)$ and hugs the $x$-axis on one side without touching it.',
        },
        {
          type: 'table',
          headers: ['Feature', '$y = b^x$ (any valid $b$)'],
          rows: [
            ['[[domain|Domain]]', 'all real numbers $(-\\infty, \\infty)$'],
            ['[[range|Range]]', '$(0, \\infty)$ — the output is always positive'],
            ['$y$-intercept', '$(0, 1)$'],
            ['[[horizontal-asymptote|Horizontal asymptote]]', '$y = 0$ (to the left if $b > 1$, to the right if $0 < b < 1$)'],
            ['Behavior', '[[increasing-function|increasing]] if $b > 1$; [[decreasing-function|decreasing]] if $0 < b < 1$'],
          ],
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why $\\left(\\tfrac12\\right)^x$ is a mirror image of $2^x$',
          text: 'By the exponent rules, $\\left(\\tfrac12\\right)^x = \\frac{1}{2^x} = 2^{-x}$. Replacing $x$ by $-x$ reflects a graph across the $y$-axis, so every decay curve $\\left(\\tfrac1b\\right)^x$ is the growth curve $b^x$ flipped left-to-right.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'Let $f(x) = 4^x$. Find $f\\left(-\\tfrac{3}{2}\\right)$ exactly.',
      hint: 'Negative exponent: reciprocal. Exponent $\\frac32$: square root, then cube.',
      label: '$f(-\\tfrac32) =$',
      answer: '1/8',
      answerTex: '\\frac{1}{8}',
      explanation: '$4^{-3/2} = \\dfrac{1}{4^{3/2}} = \\dfrac{1}{(\\sqrt{4})^3} = \\dfrac{1}{2^3} = \\dfrac{1}{8}$. The negative sign in the exponent makes a reciprocal — it never makes the answer negative. Exponential outputs are always positive.',
    },
    {
      kind: 'truefalse',
      prompt: 'For a large enough negative $x$, the graph of $y = 2^x$ crosses the $x$-axis.',
      answer: false,
      explanation: '$2^x$ is positive for every real $x$: for $x = -10$ it is $\\frac{1}{1024}$, for $x = -100$ it is $\\frac{1}{2^{100}}$ — tiny, but still positive. The graph approaches the asymptote $y = 0$ forever without reaching it, so the range is $(0, \\infty)$ and there is no $x$-intercept.',
    },
    {
      kind: 'concept',
      title: 'Transformations and building a model from two points',
      blocks: [
        {
          type: 'p',
          text: 'Everything you learned about [[transformation|transformations]] applies to exponentials. The general form is',
        },
        {
          type: 'math',
          tex: 'y = a \\cdot b^{\\,x - h} + k',
          caption: '$a$ stretches (and reflects if negative), $h$ shifts right, $k$ shifts up.',
        },
        {
          type: 'p',
          text: 'The most important effect is on the asymptote: shifting up by $k$ moves the horizontal asymptote from $y = 0$ to $y = k$, and the range becomes $(k, \\infty)$ when $a > 0$. A horizontal shift changes the intercept but not the asymptote.',
        },
        {
          type: 'graph',
          x: [-5, 5],
          y: [-5, 8],
          functions: [
            { expr: '2^x', label: '$y = 2^x$', color: 'gray', dashed: true },
            { expr: 'a*2^(x - h) + k', label: '$y = a \\cdot 2^{x-h} + k$' },
          ],
          hlines: [{ y: 'k', label: 'asymptote y = k', color: 'red' }],
          sliders: [
            { name: 'a', min: -3, max: 3, step: 0.1, value: 1, label: '$a$' },
            { name: 'h', min: -3, max: 3, step: 0.1, value: 0, label: '$h$' },
            { name: 'k', min: -4, max: 4, step: 0.1, value: -2, label: '$k$' },
          ],
          caption: 'The red asymptote moves only with $k$. Make $a$ negative to flip the curve below its asymptote — then the range becomes $(-\\infty, k)$.',
        },
        {
          type: 'heading',
          text: 'Finding $y = a \\cdot b^x$ from two points',
        },
        {
          type: 'p',
          text: 'Two points determine an exponential $y = a \\cdot b^x$, just as two points determine a line. The trick is to **divide** the two equations, because the ratio cancels $a$.',
        },
        {
          type: 'derivation',
          title: 'Find $y = a \\cdot b^x$ through $(1, 6)$ and $(3, 24)$',
          steps: [
            { tex: 'a b^1 = 6, \\qquad a b^3 = 24', why: 'Substitute each point $(x, y)$ into $y = a b^x$.' },
            { tex: '\\frac{a b^3}{a b} = \\frac{24}{6}', why: 'Divide the second equation by the first. The unknown $a$ cancels.' },
            { tex: 'b^2 = 4 \\implies b = 2', why: '$\\frac{b^3}{b} = b^2$. Of the two square roots $\\pm 2$, only $b = 2$ is allowed since a base must be positive.' },
            { tex: 'a \\cdot 2 = 6 \\implies a = 3', why: 'Back-substitute $b = 2$ into the first equation.' },
          ],
          result: 'The function is $y = 3 \\cdot 2^x$. Check: $3 \\cdot 2^3 = 24$. ✓',
        },
        {
          type: 'callout',
          variant: 'tip',
          text: 'Exponential data has a constant **ratio** between equally spaced outputs, just as linear data has a constant **difference**. For $3 \\cdot 2^x$ the outputs $3, 6, 12, 24$ each double. Checking ratios is the quickest way to recognise exponential data in a table.',
        },
      ],
    },
    {
      kind: 'mcq',
      prompt: 'What are the horizontal asymptote and range of $g(x) = 3 \\cdot 2^{x+1} - 4$?',
      options: [
        { text: 'Asymptote $y = 0$; range $(0, \\infty)$', why: 'That describes the parent $2^x$. The $-4$ shifts everything, including the asymptote, down by $4$.' },
        { text: 'Asymptote $y = -4$; range $(-4, \\infty)$', correct: true, why: 'The vertical shift $k = -4$ moves the asymptote to $y = -4$, and with $a = 3 > 0$ the curve lies above it.' },
        { text: 'Asymptote $y = -1$; range $(-1, \\infty)$', why: 'The $+1$ in the exponent is a horizontal shift (left 1). Horizontal shifts never move a horizontal asymptote.' },
        { text: 'Asymptote $y = -4$; range $(-\\infty, -4)$', why: 'The curve would lie below its asymptote only if $a$ were negative. Here $a = 3$.' },
      ],
      explanation: 'Read off $a = 3$, $h = -1$, $k = -4$. Only $k$ moves the horizontal asymptote, to $y = -4$. Since $3 \\cdot 2^{x+1} > 0$ always, $g(x) > -4$ always, so the range is $(-4, \\infty)$.',
    },
    {
      kind: 'expr',
      prompt: 'An exponential function $y = a \\cdot b^x$ passes through $(0, 5)$ and $(2, 45)$. Find it.',
      hint: 'At $x = 0$, $b^0 = 1$, so $a$ is the $y$-intercept. Then use the second point to find $b > 0$.',
      label: '$y =$',
      answer: '5*3^x',
      answerTex: '5 \\cdot 3^x',
      explanation: 'At $x = 0$: $a \\cdot b^0 = a = 5$. At $x = 2$: $5b^2 = 45$, so $b^2 = 9$ and $b = 3$ (the base must be positive, so $-3$ is rejected). The function is $y = 5 \\cdot 3^x$. Check: $5 \\cdot 3^2 = 45$. ✓',
    },
    {
      kind: 'concept',
      title: 'Where $e$ comes from',
      blocks: [
        {
          type: 'p',
          text: 'Put \\$1 in a bank paying a (wildly generous) 100% interest per year. Paid once at year end, you get \\$2. But if the bank pays 50% twice a year, the first half-year\'s interest earns interest too: $\\left(1 + \\tfrac12\\right)^2 = 2.25$. Paying $\\frac{1}{n}$ of the rate $n$ times a year gives $\\left(1 + \\frac1n\\right)^n$.',
        },
        {
          type: 'table',
          headers: ['compounding', '$n$', '$\\left(1 + \\frac{1}{n}\\right)^n$'],
          rows: [
            ['yearly', '$1$', '$2$'],
            ['twice a year', '$2$', '$2.25$'],
            ['quarterly', '$4$', '$2.441406\\ldots$'],
            ['monthly', '$12$', '$2.613035\\ldots$'],
            ['daily', '$365$', '$2.714567\\ldots$'],
            ['a million times', '$1{,}000{,}000$', '$2.718280\\ldots$'],
          ],
          caption: 'More frequent compounding helps, but less and less. The values level off.',
        },
        {
          type: 'definition',
          term: 'The number e',
          text: '[[eulers-number|Euler\'s number]] $e$ is the value that $\\left(1 + \\frac{1}{n}\\right)^n$ approaches as $n$ grows without bound:\n\n$$e = 2.718281828459\\ldots$$\n\nLike $\\pi$, it is irrational — its decimals never repeat. The function $f(x) = e^x$ is called the [[natural-exponential|natural exponential function]].',
        },
        {
          type: 'p',
          text: 'Why "natural"? Every curve $y = b^x$ crosses the $y$-axis at $(0, 1)$, but at different steepness. For $b = 2$ the [[tangent-line|tangent line]] there (the line that just touches the curve at that point, matching its steepness) has slope about $0.693$; for $b = 3$, about $1.099$. Somewhere between $2$ and $3$ is the one base whose slope at $0$ is **exactly 1**. That base is $e$.',
        },
        {
          type: 'graph',
          x: [-3, 3],
          y: [-1, 6],
          functions: [{ expr: 'b^x', label: '$y = b^x$' }],
          tangents: [{ expr: 'b^x', at: 0, label: 'tangent at x = 0' }],
          sliders: [{ name: 'b', min: 1.5, max: 4, step: 0.01, value: 2, label: '$b$' }],
          readouts: [{ label: 'slope at $x = 0 \\approx$', expr: '(b^0.000001 - 1)/0.000001', digits: 4 }],
          caption: 'Slide $b$ until the slope reads $1.0000$. You will land on $b \\approx 2.72$: that is $e$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why mathematicians prefer base $e$',
          text: 'For $y = e^x$ the slope at **every** point equals the height of the curve there: the function is its own rate of change. You will prove this in calculus; it makes $e^x$ the cleanest description of anything that grows in proportion to its current size (populations, interest, chain reactions). Every other exponential can be rewritten as $e^{kx}$, so nothing is lost by using base $e$.',
        },
        {
          type: 'callout',
          variant: 'history',
          text: 'Jacob Bernoulli found this limit in 1683 while studying exactly this compound-interest question. Leonhard Euler later named it $e$ and computed it to 18 decimal places by hand.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'Compute $\\left(1 + \\frac{1}{n}\\right)^n$ for $n = 4$ (quarterly compounding of 100% interest). Give the exact value or at least 3 decimals.',
      hint: '$1 + \\frac14 = \\frac54$. Raise it to the 4th power.',
      answer: '625/256',
      answerTex: '\\frac{625}{256} = 2.44140625',
      minDecimals: 3,
      explanation: '$\\left(\\frac{5}{4}\\right)^4 = \\frac{5^4}{4^4} = \\frac{625}{256} = 2.44140625$. That sits between the twice-a-year value $2.25$ and the monthly value $2.613\\ldots$, and like every term in the sequence it is less than $e \\approx 2.718$.',
    },
    {
      kind: 'order',
      prompt: 'Order these numbers from smallest to largest.',
      lines: [
        '$\\left(1 + \\frac{1}{1}\\right)^1$',
        '$\\left(1 + \\frac{1}{2}\\right)^2$',
        '$\\left(1 + \\frac{1}{100}\\right)^{100}$',
        '$e$',
        '$3$',
      ],
      explanation: 'The values are $2$, $2.25$, $2.7048\\ldots$, $2.71828\\ldots$ and $3$. The sequence $\\left(1 + \\frac1n\\right)^n$ increases with $n$ but never reaches $e$ — $e$ is its limit — and $e$ is less than $3$.',
    },
    {
      kind: 'concept',
      title: 'Exponentials eventually beat every power',
      blocks: [
        {
          type: 'p',
          text: 'Early on, $x^2$ can be bigger than $2^x$: at $x = 3$, $9 > 8$. But exponentials multiply by a fixed factor each step, while the ratio $\\frac{(x+1)^2}{x^2}$ for a power shrinks toward $1$. Repeated doubling eventually outruns any polynomial, no matter how large its degree.',
        },
        {
          type: 'graph',
          x: [0, 7],
          y: [0, 60],
          yStep: 10,
          functions: [
            { expr: '2^x', label: '$y = 2^x$' },
            { expr: 'x^2', label: '$y = x^2$', color: 'red' },
          ],
          points: [{ x: 2, y: 4, label: '(2, 4)' }, { x: 4, y: 16, label: '(4, 16)' }],
          caption: 'The curves cross at $x = 2$ and $x = 4$. Between them $x^2$ is ahead; after $x = 4$, $2^x$ pulls away for good.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Exponential time in algorithms',
          text: 'A brute-force algorithm that tries every subset of $n$ items does $2^n$ steps. For $n = 30$ that is about a billion; for $n = 60$, about $10^{18}$ — centuries of computing. An $O(n^2)$ or even $O(n^5)$ algorithm is vastly faster for large $n$. This is the gap behind the famous P vs NP question, and why "exponential blow-up" is the first thing to watch for in search and puzzle solvers.',
        },
        {
          type: 'code',
          title: 'e_limit.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdio>

int main() {
    for (double n = 1; n <= 1e6; n *= 10) {
        double value = std::pow(1.0 + 1.0 / n, n);
        std::printf("n = %-8g (1 + 1/n)^n = %.6f\\n", n, value);
    }
    std::printf("std::exp(1)            = %.6f\\n", std::exp(1.0));
}`,
          output: `n = 1        (1 + 1/n)^n = 2.000000
n = 10       (1 + 1/n)^n = 2.593742
n = 100      (1 + 1/n)^n = 2.704814
n = 1000     (1 + 1/n)^n = 2.716924
n = 10000    (1 + 1/n)^n = 2.718146
n = 100000   (1 + 1/n)^n = 2.718268
n = 1e+06    (1 + 1/n)^n = 2.718280
std::exp(1)            = 2.718282`,
          annotations: [
            { lines: 6, text: '`std::pow(base, exponent)` computes $b^x$ for any real exponent.' },
            { lines: 9, text: '`std::exp(x)` is $e^x$ — the standard library treats base $e$ as *the* exponential.' },
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Exponent before multiplication',
          text: 'In $3 \\cdot 2^x$, only the $2$ is raised to the power. $3 \\cdot 2^4 = 3 \\cdot 16 = 48$, not $6^4 = 1296$. Order of operations: exponents first.',
        },
      ],
    },
    {
      kind: 'error',
      prompt: 'A student evaluates $f(x) = 3 \\cdot 2^x$ at $x = 3$. Tap the first incorrect line.',
      lines: [
        '$f(3) = 3 \\cdot 2^3$',
        '$= 6^3$',
        '$= 216$',
      ],
      errorLines: [2],
      explanation: 'Line 2 multiplies $3 \\cdot 2$ before applying the exponent. The exponent belongs only to the base $2$, so $f(3) = 3 \\cdot 2^3 = 3 \\cdot 8 = 24$. Writing $6^3$ would describe the function $6^x$, which grows much faster.',
    },
    {
      kind: 'mcq',
      prompt: 'For very large $x$, which function is largest?',
      options: [
        { text: '$x^{10}$', why: 'A huge power, and it does lead for a long while — but it eventually loses to any exponential with base greater than 1.' },
        { text: '$1000x$', why: 'Linear growth is the slowest of these; it adds a constant each step.' },
        { text: '$1.1^x$', correct: true, why: 'Even a modest base like $1.1$ multiplies by a fixed factor each step, which eventually overtakes every polynomial.' },
        { text: '$\\left(\\tfrac{1}{2}\\right)^x$', why: 'Base less than 1 means decay: this approaches $0$ as $x$ grows.' },
      ],
      explanation: 'Each step, $1.1^x$ grows by 10% of its current size, and that percentage never fades. For a power like $x^{10}$, the growth ratio $\\left(\\frac{x+1}{x}\\right)^{10}$ shrinks toward $1$. Eventually (somewhere past $x \\approx 690$ here) the exponential wins and never looks back.',
    },
  ],
  takeaways: [
    'An exponential function $f(x) = b^x$ has a fixed base $b > 0$, $b \\ne 1$, and the variable in the exponent; it models repeated multiplication.',
    '$y = b^x$ passes through $(0, 1)$ and $(1, b)$, has domain $\\mathbb{R}$, range $(0, \\infty)$ and asymptote $y = 0$; it grows if $b > 1$ and decays if $0 < b < 1$.',
    'In $y = a \\cdot b^{x-h} + k$, only $k$ moves the horizontal asymptote (to $y = k$).',
    'To fit $y = a b^x$ through two points, divide the equations to cancel $a$; equally spaced outputs have a constant ratio.',
    '$e = \\lim\\limits_{n \\to \\infty} \\left(1 + \\frac1n\\right)^n \\approx 2.71828$, the base whose graph has slope exactly $1$ at $x = 0$.',
    'Exponential growth eventually beats every polynomial — the reason $O(2^n)$ algorithms are impractical.',
  ],
  reading: [
    {
      title: 'OpenStax College Algebra 2e — 6.1 Exponential Functions',
      url: 'https://openstax.org/books/college-algebra-2e/pages/6-1-exponential-functions',
      source: 'openstax',
      note: 'Textbook treatment with more practice finding exponential functions from data.',
    },
    {
      title: "Paul's Online Notes — Exponential Functions",
      url: 'https://tutorial.math.lamar.edu/Classes/Alg/ExpFunctions.aspx',
      source: 'paul',
      note: 'Concise notes on graphs and properties of $b^x$ and $e^x$.',
    },
    {
      title: 'Wikipedia — e (mathematical constant)',
      url: 'https://en.wikipedia.org/wiki/E_(mathematical_constant)',
      source: 'wikipedia',
      note: 'The compound-interest origin of $e$ and its many other characterisations.',
    },
  ],
};
