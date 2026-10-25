import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'calc1-exp-log-derivatives',
  title: 'Derivatives of Exponential and Logarithmic Functions',
  summary: 'Why $e^x$ is its own derivative, why $\\ln x$ differentiates to $\\frac{1}{x}$, how to handle any base, and how logarithms tame monsters like $x^x$.',
  minutes: 18,
  objectives: [
    'Explain why $\\frac{d}{dx}e^x = e^x$ and why $e$ is the base that makes this true',
    'Derive and use $\\frac{d}{dx}\\ln x = \\frac{1}{x}$ and the chain-rule form $\\frac{d}{dx}\\ln g(x) = \\frac{g\'(x)}{g(x)}$',
    'Differentiate $a^x$ and $\\log_a x$ for any base $a > 0$, $a \\ne 1$',
    'Simplify with logarithm laws before differentiating',
    'Use logarithmic differentiation for messy products and for variable powers like $x^x$',
  ],
  steps: [
    {
      kind: 'concept',
      title: 'The function that is its own derivative',
      blocks: [
        {
          type: 'p',
          text: 'Start with any [[exponential-function]] $f(x) = a^x$ and feed it to the limit definition. The exponent law $a^{x+h} = a^x a^h$ does almost all the work:',
        },
        {
          type: 'derivation',
          title: 'Differentiate $a^x$ from the definition',
          steps: [
            { tex: '\\frac{d}{dx}a^x = \\lim_{h \\to 0}\\frac{a^{x+h} - a^x}{h}', why: 'Definition of the derivative.' },
            { tex: '= \\lim_{h \\to 0}\\frac{a^x a^h - a^x}{h}', why: 'Exponent law: $a^{x+h} = a^x \\cdot a^h$.' },
            { tex: '= a^x \\cdot \\lim_{h \\to 0}\\frac{a^h - 1}{h}', why: 'Factor out $a^x$. It does not depend on $h$, so it moves outside the limit.' },
            { tex: '= a^x \\cdot f\'(0)', why: 'The leftover limit is the difference quotient of $a^x$ at $0$: it is the slope of $y = a^x$ where it crosses the $y$-axis.' },
          ],
          result: 'The derivative of $a^x$ is $a^x$ times a constant: the slope of the graph at $x = 0$. Exponentials grow at a rate proportional to their own size.',
        },
        {
          type: 'table',
          headers: ['$h$', '$\\frac{2^h - 1}{h}$', '$\\frac{e^h - 1}{h}$', '$\\frac{3^h - 1}{h}$'],
          rows: [
            ['$0.1$', '$0.7177$', '$1.0517$', '$1.1612$'],
            ['$0.01$', '$0.6956$', '$1.0050$', '$1.1047$'],
            ['$0.001$', '$0.6934$', '$1.0005$', '$1.0992$'],
            ['limit', '$\\approx 0.6931$', '$1$', '$\\approx 1.0986$'],
          ],
          caption: 'For base $2$ the constant is less than $1$, for base $3$ more than $1$. Somewhere in between — at $a = e \\approx 2.71828$ — it is exactly $1$.',
        },
        {
          type: 'graph',
          x: [-3, 3],
          y: [-1, 6],
          functions: [{ expr: 'a^x', label: '$y = a^x$' }],
          tangents: [{ expr: 'a^x', at: 0, label: 'slope at 0' }],
          sliders: [{ name: 'a', min: 1.2, max: 4, step: 0.01, value: 2, label: 'base $a$' }],
          readouts: [{ label: 'slope at $x = 0$:', expr: 'ln(a)', digits: 4 }],
          caption: 'Drag $a$ until the tangent at $(0, 1)$ has slope exactly $1$ (the line $y = x + 1$). That happens at $a \\approx 2.718$: that base is [[eulers-number|Euler\'s number]] $e$.',
        },
        {
          type: 'theorem',
          name: 'Derivative of the natural exponential',
          tex: '\\frac{d}{dx}e^x = e^x, \\qquad \\frac{d}{dx}e^{g(x)} = e^{g(x)}\\,g\'(x)',
          text: 'The second form is just the chain rule with outer function $e^u$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why mathematicians choose base $e$',
          text: 'One way to *define* $e$ is "the base whose exponential has slope $1$ at $x = 0$", i.e. $\\lim_{h \\to 0}\\frac{e^h - 1}{h} = 1$. With that choice the annoying constant disappears and $e^x$ becomes the unique function (up to a constant multiple) equal to its own derivative. That is why $e$ appears in every model where "rate of change is proportional to amount": interest, population, radioactive decay, cooling coffee.',
        },
      ],
    },
    {
      kind: 'expr',
      prompt: 'Differentiate $f(x) = x\\,e^{2x}$.',
      label: "$f'(x) =$",
      answer: 'e^(2x) + 2x e^(2x)',
      answerTex: 'e^{2x} + 2x\\,e^{2x} = (1 + 2x)\\,e^{2x}',
      hint: 'Product rule, and the chain rule for $e^{2x}$: its derivative is $2e^{2x}$.',
      explanation: 'Product rule: $f\'(x) = (1)\\,e^{2x} + x \\cdot \\frac{d}{dx}e^{2x}$. By the chain rule $\\frac{d}{dx}e^{2x} = e^{2x}\\cdot 2$. So $f\'(x) = e^{2x} + 2x\\,e^{2x} = (1 + 2x)e^{2x}$.',
    },
    {
      kind: 'concept',
      title: 'The derivative of $\\ln x$',
      blocks: [
        {
          type: 'p',
          text: 'The [[natural-logarithm]] $y = \\ln x$ is the inverse of $e^x$: it is the number $y$ with $e^y = x$. We cannot use the limit definition easily, but the previous lesson\'s strategy works perfectly — rewrite with the *easy* function and differentiate implicitly.',
        },
        {
          type: 'derivation',
          title: 'Derive $\\frac{d}{dx}\\ln x$ for $x > 0$',
          steps: [
            { tex: 'y = \\ln x \\iff e^y = x', why: 'Definition of the natural log as the inverse of $e^x$.' },
            { tex: 'e^y\\,\\frac{dy}{dx} = 1', why: 'Differentiate both sides with respect to $x$; the chain rule puts $\\frac{dy}{dx}$ next to $e^y$.' },
            { tex: '\\frac{dy}{dx} = \\frac{1}{e^y}', why: 'Divide by $e^y$, which is never $0$.' },
            { tex: '= \\frac{1}{x}', why: 'Replace $e^y$ by $x$ using the first line.' },
          ],
          result: '$\\frac{d}{dx}\\ln x = \\frac{1}{x}$. A transcendental function with an algebraic derivative.',
        },
        {
          type: 'graph',
          x: [-0.5, 6],
          y: [-3, 2.5],
          functions: [
            { expr: 'ln(x)', label: '$y = \\ln x$' },
            { expr: '1/x', label: '$y = \\frac{1}{x}$', color: 'green', dashed: true, domain: [0.2, 6] },
          ],
          tangents: [{ expr: 'ln(x)', at: 'a' }],
          points: [{ x: 'a', y: '1/a', color: 'green' }],
          sliders: [{ name: 'a', min: 0.3, max: 5.5, step: 0.05, value: 1, label: '$a$' }],
          readouts: [{ label: 'tangent slope of $\\ln x$ at $a$:', expr: '1/a', digits: 4 }],
          caption: 'The height of the green curve $\\frac{1}{x}$ always equals the slope of the orange tangent to $\\ln x$. The log keeps rising forever, but ever more slowly.',
        },
        {
          type: 'theorem',
          name: 'Logarithm derivatives',
          tex: '\\frac{d}{dx}\\ln|x| = \\frac{1}{x}\\;(x \\neq 0), \\qquad \\frac{d}{dx}\\ln g(x) = \\frac{g\'(x)}{g(x)}',
          text: 'The $\\ln|x|$ version covers negative $x$ too: for $x < 0$, $\\frac{d}{dx}\\ln(-x) = \\frac{-1}{-x} = \\frac{1}{x}$.',
        },
        {
          type: 'derivation',
          title: 'Example: $\\frac{d}{dx}\\ln(x^2 + 1)$',
          steps: [
            { tex: '\\frac{d}{dx}\\ln(x^2 + 1) = \\frac{1}{x^2 + 1}\\cdot\\frac{d}{dx}(x^2 + 1)', why: 'Chain rule: outer $\\ln u$ has derivative $\\frac{1}{u}$, evaluated at the inner function.' },
            { tex: '= \\frac{2x}{x^2 + 1}', why: 'Derivative of the inner function is $2x$.' },
          ],
          result: 'Pattern: the derivative of $\\ln(\\text{stuff})$ is $\\frac{(\\text{stuff})\'}{\\text{stuff}}$. Likewise $\\frac{d}{dx}\\ln(\\sin x) = \\frac{\\cos x}{\\sin x} = \\cot x$.',
        },
      ],
    },
    {
      kind: 'expr',
      prompt: 'Differentiate $f(x) = x^2 \\ln x$ (for $x > 0$).',
      label: "$f'(x) =$",
      answer: '2x ln(x) + x',
      answerTex: '2x\\ln x + x',
      domain: [0.5, 3],
      hint: 'Product rule with $u = x^2$ and $v = \\ln x$.',
      explanation: '$f\'(x) = 2x \\cdot \\ln x + x^2 \\cdot \\frac{1}{x} = 2x\\ln x + x$. The second term simplifies because $\\frac{x^2}{x} = x$. Factored: $x(2\\ln x + 1)$.',
    },
    {
      kind: 'truefalse',
      prompt: '$\\dfrac{d}{dx}\\ln(5x) = \\dfrac{5}{x}$.',
      answer: false,
      explanation: 'By the chain rule, $\\frac{d}{dx}\\ln(5x) = \\frac{5}{5x} = \\frac{1}{x}$ — the $5$ cancels. A cleaner view: $\\ln(5x) = \\ln 5 + \\ln x$, and $\\ln 5$ is a constant, so the derivative is just $\\frac{1}{x}$. Multiplying the input of a log only shifts the graph up.',
    },
    {
      kind: 'concept',
      title: 'Any base: $a^x$ and $\\log_a x$',
      blocks: [
        {
          type: 'p',
          text: 'Computer scientists love base $2$, engineers base $10$. Every other base reduces to base $e$, because $a = e^{\\ln a}$ and, by [[change-of-base]], $\\log_a x = \\frac{\\ln x}{\\ln a}$.',
        },
        {
          type: 'derivation',
          title: 'Differentiate $a^x$ and $\\log_a x$ ($a > 0$, $a \\ne 1$)',
          steps: [
            { tex: 'a^x = \\left(e^{\\ln a}\\right)^x = e^{(\\ln a)x}', why: 'Write $a$ as $e^{\\ln a}$ and multiply exponents.' },
            { tex: '\\frac{d}{dx}a^x = e^{(\\ln a)x}\\cdot \\ln a = a^x \\ln a', why: 'Chain rule; the inner function $(\\ln a)x$ has derivative $\\ln a$ (a constant). Then rewrite $e^{(\\ln a)x}$ as $a^x$.' },
            { tex: '\\log_a x = \\frac{\\ln x}{\\ln a}', why: 'Change of base.' },
            { tex: '\\frac{d}{dx}\\log_a x = \\frac{1}{\\ln a}\\cdot\\frac{1}{x} = \\frac{1}{x \\ln a}', why: '$\\frac{1}{\\ln a}$ is a constant multiple; $\\ln x$ differentiates to $\\frac{1}{x}$.' },
          ],
          result: 'The mysterious constant from the first card is $\\ln a$: $\\lim_{h\\to 0}\\frac{a^h - 1}{h} = \\ln a$, e.g. $\\ln 2 \\approx 0.6931$.',
        },
        {
          type: 'compare',
          left: {
            title: 'Wrong: power rule on an exponential',
            tone: 'bad',
            tex: ['\\frac{d}{dx}2^x = x \\cdot 2^{x-1}'],
            text: 'The power rule needs the **variable in the base** and a constant exponent.',
          },
          right: {
            title: 'Right: exponential rule',
            tone: 'good',
            tex: ['\\frac{d}{dx}2^x = 2^x \\ln 2'],
            text: 'Here the **variable is in the exponent**, so the derivative is the function itself times $\\ln$ of the base.',
          },
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Exponentials in code',
          text: 'Frame-rate independent smoothing — `pos += (target - pos) * (1 - exp(-k * dt))` — works because the gap $g(t) = g_0 e^{-kt}$ satisfies $g\' = -kg$: it always shrinks at a rate proportional to its size, no matter how you slice time into frames. And when you analyse a binary search costing $\\log_2 n$ steps, the marginal cost of one more element is $\\frac{d}{dn}\\log_2 n = \\frac{1}{n\\ln 2}$: it shrinks as $n$ grows, which is why logarithmic algorithms scale so well.',
        },
        {
          type: 'code',
          title: 'slope_at_zero.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdio>

int main() {
    const double bases[] = {2.0, std::exp(1.0), 3.0};
    const char* names[] = {"2", "e", "3"};
    const double h = 1e-6;
    for (int i = 0; i < 3; ++i) {
        double a = bases[i];
        double slope = (std::pow(a, h) - 1.0) / h;
        std::printf("a = %s  slope at 0 = %.4f  ln(a) = %.4f\\n",
                    names[i], slope, std::log(a));
    }
}`,
          output: `a = 2  slope at 0 = 0.6931  ln(a) = 0.6931
a = e  slope at 0 = 1.0000  ln(a) = 1.0000
a = 3  slope at 0 = 1.0986  ln(a) = 1.0986`,
          annotations: [
            { lines: 5, text: '`std::exp(1.0)` is $e \\approx 2.718281828$.' },
            { lines: 10, text: 'The difference quotient $\\frac{a^h - 1}{h}$ with a tiny $h$: a numerical estimate of the slope of $a^x$ at $0$.' },
            { lines: '11-12', text: 'Compare it with $\\ln a$. They agree to four decimals.' },
          ],
        },
      ],
    },
    {
      kind: 'mcq',
      prompt: 'What is $\\dfrac{d}{dx}\\,2^x$?',
      options: [
        { text: '$x \\cdot 2^{x-1}$', why: 'That is the power rule, which applies to $x^n$ (variable base, constant exponent). In $2^x$ the variable is in the exponent.' },
        { text: '$2^x$', why: 'Only base $e$ is its own derivative. For base $2$ there is an extra factor of $\\ln 2 \\approx 0.693$.' },
        { text: '$\\dfrac{2^x}{\\ln 2}$', why: 'The $\\ln 2$ multiplies, it does not divide. (Division by $\\ln a$ appears in the derivative of $\\log_a x$.)' },
        { text: '$2^x \\ln 2$', correct: true, why: 'Write $2^x = e^{x\\ln 2}$; the chain rule gives $e^{x\\ln 2}\\cdot\\ln 2 = 2^x\\ln 2$.' },
      ],
      explanation: '$\\frac{d}{dx}a^x = a^x\\ln a$. For $a = 2$: $2^x\\ln 2$. Sanity check with the table on the first card: the slope of $2^x$ at $x = 0$ was about $0.6931 = \\ln 2$.',
    },
    {
      kind: 'numeric',
      prompt: 'Let $f(x) = \\log_2 x$. Find $f\'(4)$. (An exact form or a decimal to at least 3 places.)',
      label: "$f'(4) =$",
      answer: '1/(4ln(2))',
      answerTex: '\\frac{1}{4\\ln 2} \\approx 0.3607',
      minDecimals: 3,
      hint: 'Use $\\frac{d}{dx}\\log_a x = \\frac{1}{x\\ln a}$.',
      explanation: '$f\'(x) = \\frac{1}{x\\ln 2}$, so $f\'(4) = \\frac{1}{4\\ln 2} \\approx \\frac{1}{2.7726} \\approx 0.3607$. Compare with $\\frac{d}{dx}\\ln x$ at $4$, which is $0.25$: base-2 logs grow faster than natural logs by the factor $\\frac{1}{\\ln 2} \\approx 1.443$.',
    },
    {
      kind: 'concept',
      title: 'Let logarithms do the algebra',
      blocks: [
        {
          type: 'p',
          text: 'Logarithms turn products into sums, quotients into differences and powers into multiples. Sums are far easier to differentiate than products, so with a log of a complicated expression, **expand first, differentiate second**.',
        },
        {
          type: 'derivation',
          title: 'Differentiate $f(x) = \\ln\\dfrac{x^3}{\\sqrt{2x + 1}}$ for $x > 0$',
          steps: [
            { tex: 'f(x) = 3\\ln x - \\tfrac{1}{2}\\ln(2x + 1)', why: 'Log laws: $\\ln\\frac{A}{B} = \\ln A - \\ln B$, $\\ln x^3 = 3\\ln x$, and $\\ln\\sqrt{u} = \\frac12\\ln u$.' },
            { tex: "f'(x) = \\frac{3}{x} - \\frac{1}{2}\\cdot\\frac{2}{2x + 1}", why: 'Differentiate term by term, using $\\frac{g\'}{g}$ for $\\ln(2x+1)$.' },
            { tex: '= \\frac{3}{x} - \\frac{1}{2x + 1}', why: 'Cancel the $2$s.' },
          ],
          result: 'No quotient rule, no chain rule through a square root — the log laws did the heavy lifting.',
        },
        {
          type: 'heading',
          text: 'Logarithmic differentiation',
        },
        {
          type: 'p',
          text: 'The same idea works even when there is no log to begin with. To differentiate a messy product or quotient $y = f(x)$, take $\\ln$ of both sides, expand, and differentiate implicitly. This is [[logarithmic-differentiation]].',
        },
        {
          type: 'derivation',
          title: 'Differentiate $y = \\dfrac{x^3(x^2 + 1)^4}{\\sqrt{2x + 1}}$ for $x > 0$',
          steps: [
            { tex: '\\ln y = 3\\ln x + 4\\ln(x^2 + 1) - \\tfrac12\\ln(2x + 1)', why: 'Take $\\ln$ of both sides (everything is positive for $x > 0$) and expand with log laws.' },
            { tex: "\\frac{y'}{y} = \\frac{3}{x} + \\frac{8x}{x^2 + 1} - \\frac{1}{2x + 1}", why: 'Differentiate implicitly: the left side is $\\frac{1}{y}\\,y\'$ by the chain rule; on the right, $4\\cdot\\frac{2x}{x^2+1}$ and $\\frac12\\cdot\\frac{2}{2x+1}$.' },
            { tex: "y' = \\frac{x^3(x^2 + 1)^4}{\\sqrt{2x + 1}}\\left(\\frac{3}{x} + \\frac{8x}{x^2 + 1} - \\frac{1}{2x + 1}\\right)", why: 'Multiply both sides by $y$ and substitute the original formula for $y$. Forgetting this last step is the most common error.' },
          ],
          result: 'Doing this with the product and quotient rules is possible, but takes far longer and invites mistakes.',
        },
        {
          type: 'callout',
          variant: 'tip',
          text: 'If $y$ can be negative, take $\\ln|y|$ instead; since $\\frac{d}{dx}\\ln|y| = \\frac{y\'}{y}$ as well, the final formula is the same.',
        },
      ],
    },
    {
      kind: 'order',
      prompt: 'Order the steps of logarithmic differentiation.',
      lines: [
        'Take $\\ln$ of both sides: $\\ln y = \\ln f(x)$',
        'Expand the right side with the laws of logarithms',
        'Differentiate both sides; the left side becomes $\\frac{y\'}{y}$',
        'Multiply both sides by $y$',
        'Replace $y$ with the original expression $f(x)$',
      ],
      explanation: 'Log first, so that products become sums. Expand before differentiating — that is the whole point. Differentiating $\\ln y$ implicitly gives $\\frac{y\'}{y}$, so you must multiply by $y$ and then write $y$ in terms of $x$ to finish.',
    },
    {
      kind: 'expr',
      prompt: 'Use the laws of logarithms to differentiate $f(x) = \\ln\\dfrac{(x + 1)^3}{\\sqrt{x}}$ for $x > 0$.',
      label: "$f'(x) =$",
      answer: '3/(x + 1) - 1/(2x)',
      answerTex: '\\frac{3}{x + 1} - \\frac{1}{2x}',
      domain: [0.5, 3],
      hint: 'First rewrite $f(x) = 3\\ln(x + 1) - \\frac12\\ln x$.',
      explanation: 'Expand: $f(x) = 3\\ln(x+1) - \\frac{1}{2}\\ln x$. Differentiate: $f\'(x) = \\frac{3}{x+1} - \\frac{1}{2x}$. Combined over a common denominator this is $\\frac{5x - 1}{2x(x+1)}$; any equivalent form is fine.',
    },
    {
      kind: 'concept',
      title: 'Variable to a variable power: $x^x$',
      blocks: [
        {
          type: 'p',
          text: 'Now a function that breaks every rule so far. In $x^x$ the base *and* the exponent vary. The power rule needs a constant exponent; the exponential rule needs a constant base. Neither applies.',
        },
        {
          type: 'table',
          headers: ['Form', 'Example', 'Derivative'],
          rows: [
            ['constant$^{\\text{constant}}$', '$2^3$', '$0$'],
            ['variable$^{\\text{constant}}$', '$x^3$', 'power rule: $3x^2$'],
            ['constant$^{\\text{variable}}$', '$3^x$', 'exponential rule: $3^x\\ln 3$'],
            ['variable$^{\\text{variable}}$', '$x^x$', 'logarithmic differentiation'],
          ],
        },
        {
          type: 'derivation',
          title: 'Differentiate $y = x^x$ for $x > 0$',
          steps: [
            { tex: '\\ln y = \\ln\\left(x^x\\right) = x\\ln x', why: 'Take $\\ln$ of both sides; the power law brings the exponent down in front.' },
            { tex: "\\frac{y'}{y} = 1\\cdot\\ln x + x\\cdot\\frac{1}{x} = \\ln x + 1", why: 'Differentiate implicitly; product rule on $x\\ln x$.' },
            { tex: "y' = x^x(\\ln x + 1)", why: 'Multiply by $y = x^x$.' },
          ],
          result: '$\\frac{d}{dx}x^x = x^x(\\ln x + 1)$. Setting it to zero gives $\\ln x = -1$, so $x^x$ has its minimum at $x = \\frac{1}{e} \\approx 0.368$.',
        },
        {
          type: 'graph',
          x: [0, 2.5],
          y: [0, 5],
          functions: [{ expr: 'x^x', label: '$y = x^x$', domain: [0.01, 2.5] }],
          tangents: [{ expr: 'x^x', at: 'a' }],
          sliders: [{ name: 'a', min: 0.1, max: 2.2, step: 0.01, value: 1, label: '$a$' }],
          readouts: [{ label: '$a^a(\\ln a + 1) =$', expr: 'a^a(ln(a) + 1)', digits: 4 }],
          points: [{ x: 0.3679, y: 0.6922, label: '(1/e, 0.692)', color: 'green' }],
          caption: 'Slide to $a \\approx 0.37$: the tangent goes flat at the minimum. At $a = 1$ the slope is $1^1(0 + 1) = 1$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the answer looks like "both rules added together"',
          text: 'Expand: $x^x(\\ln x + 1) = x^x\\ln x + x \\cdot x^{x-1}$. The first term is what the exponential rule would give if the base were frozen; the second is what the power rule would give if the exponent were frozen. When a quantity depends on $x$ in two places, its rate of change is the sum of the contributions from each place — the same reason the product rule has two terms.',
        },
      ],
    },
    {
      kind: 'error',
      prompt: 'A student differentiates $y = x^x$. Tap the first incorrect line.',
      lines: [
        '$y = x^x$',
        '$\\ln y = x\\ln x$',
        '$\\dfrac{y\'}{y} = \\ln x + 1$',
        '$y\' = \\ln x + 1$',
      ],
      errorLines: [4],
      explanation: 'Line 3 gives $\\frac{y\'}{y}$, not $y\'$. You must multiply both sides by $y = x^x$: $y\' = x^x(\\ln x + 1)$. Forgetting to multiply back by $y$ is the classic logarithmic-differentiation error. (Everything up to line 3 is correct.)',
    },
    {
      kind: 'expr',
      prompt: 'Use logarithmic differentiation to find the derivative of $y = x^{\\sin x}$ for $x > 0$.',
      label: "$y' =$",
      answer: 'x^(sin(x)) * (cos(x) ln(x) + sin(x)/x)',
      answerTex: 'x^{\\sin x}\\left(\\cos x\\,\\ln x + \\frac{\\sin x}{x}\\right)',
      domain: [0.5, 3],
      hint: '$\\ln y = \\sin x \\cdot \\ln x$. Use the product rule on the right, then multiply by $y$.',
      explanation: '$\\ln y = \\sin x\\,\\ln x$. Differentiating: $\\frac{y\'}{y} = \\cos x\\,\\ln x + \\sin x\\cdot\\frac{1}{x}$. Multiply by $y$: $y\' = x^{\\sin x}\\left(\\cos x\\,\\ln x + \\frac{\\sin x}{x}\\right)$. Type it with `x^(sin(x))` so the whole $\\sin x$ is in the exponent.',
    },
    {
      kind: 'fill',
      prompt: 'Complete the table of derivatives (for $x$ in each function\'s domain).',
      template: '$\\frac{d}{dx}e^x =$ ___ , $\\frac{d}{dx}\\ln x =$ ___ , $\\frac{d}{dx}a^x =$ ___ , $\\frac{d}{dx}\\log_a x =$ ___',
      blanks: [{ answers: ['$e^x$'] }, { answers: ['$\\frac{1}{x}$'] }, { answers: ['$a^x\\ln a$'] }, { answers: ['$\\frac{1}{x\\ln a}$'] }],
      wordBank: ['$e^x$', '$\\frac{1}{x}$', '$a^x\\ln a$', '$\\frac{1}{x\\ln a}$', '$xe^{x-1}$', '$\\frac{\\ln a}{x}$', '$xa^{x-1}$'],
      explanation: 'The base-$e$ formulas are the cleanest: $e^x$ is its own derivative and $\\ln x$ differentiates to $\\frac{1}{x}$. Other bases pick up $\\ln a$ — multiplied for $a^x$ (since $a^x = e^{x\\ln a}$), divided for $\\log_a x$ (since $\\log_a x = \\frac{\\ln x}{\\ln a}$). The power-rule look-alikes $xe^{x-1}$ and $xa^{x-1}$ are the classic wrong answers.',
    },
  ],
  takeaways: [
    '$\\frac{d}{dx}a^x = a^x\\ln a$; base $e$ is special because $\\ln e = 1$, so $\\frac{d}{dx}e^x = e^x$.',
    '$\\frac{d}{dx}\\ln x = \\frac{1}{x}$ (and $\\frac{d}{dx}\\ln|x| = \\frac{1}{x}$); with the chain rule, $\\frac{d}{dx}\\ln g(x) = \\frac{g\'(x)}{g(x)}$.',
    '$\\frac{d}{dx}\\log_a x = \\frac{1}{x\\ln a}$, from the change-of-base formula.',
    'Expand logarithms with the log laws before differentiating; for messy products and quotients, take $\\ln$ of both sides first (logarithmic differentiation), and remember to multiply by $y$ at the end.',
    'Variable-to-variable powers like $x^x$ need logarithmic differentiation: $\\frac{d}{dx}x^x = x^x(\\ln x + 1)$.',
  ],
  reading: [
    {
      title: 'OpenStax Calculus Volume 1 — 3.9 Derivatives of Exponential and Logarithmic Functions',
      url: 'https://openstax.org/books/calculus-volume-1/pages/3-9-derivatives-of-exponential-and-logarithmic-functions',
      source: 'openstax',
      note: 'Covers every formula in this lesson, with extra logarithmic differentiation examples.',
    },
    {
      title: "Paul's Online Notes — Derivatives of Exponential and Logarithm Functions",
      url: 'https://tutorial.math.lamar.edu/Classes/CalcI/DiffExpLogFcns.aspx',
      source: 'paul',
      note: 'Derives the formulas for general bases and works through many chain-rule examples.',
    },
    {
      title: "Paul's Online Notes — Logarithmic Differentiation",
      url: 'https://tutorial.math.lamar.edu/Classes/CalcI/LogDiff.aspx',
      source: 'paul',
      note: 'More practice with products, quotients and variable exponents like $x^x$.',
    },
  ],
};
