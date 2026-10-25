import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'calc1-chain-rule',
  title: 'The Chain Rule',
  summary: 'Differentiate functions inside functions: when rates of change are chained together, they multiply.',
  minutes: 22,
  objectives: [
    'Explain the chain rule as "rates multiply" and connect it to composition of functions',
    'State the chain rule in both prime notation and Leibniz notation',
    'Differentiate powers, roots, exponentials and trig functions of an inner function',
    'Peel nested compositions layer by layer, and combine the chain rule with the product rule',
    'Apply the chain rule to tables of values and to motion problems',
  ],
  steps: [
    {
      kind: 'concept',
      title: 'Rates of change multiply',
      blocks: [
        {
          type: 'p',
          text: 'Picture three gears. Gear $A$ drives gear $B$ so that $B$ turns $3$ times for every turn of $A$; gear $B$ drives gear $C$, which turns $2$ times for every turn of $B$. How fast does $C$ turn compared with $A$? Clearly $2 \\cdot 3 = 6$ times. Rates in a chain **multiply**.',
        },
        {
          type: 'p',
          text: 'In calculus the gears are functions. If $y$ depends on $u$, and $u$ depends on $x$, then $y$ is a [[composition]] of functions of $x$. The [[chain-rule]] says the rate at which $y$ changes with $x$ is the product of the two intermediate rates:',
        },
        {
          type: 'math',
          tex: '\\frac{dy}{dx} = \\frac{dy}{du} \\cdot \\frac{du}{dx}',
          caption: '"How fast $y$ changes per $u$" times "how fast $u$ changes per $x$".',
        },
        {
          type: 'derivation',
          title: 'A check we can do without the rule',
          steps: [
            { tex: 'y = u^2, \\quad u = 3x \\implies y = (3x)^2 = 9x^2', why: 'Substitute to write $y$ directly as a function of $x$.' },
            { tex: '\\frac{dy}{dx} = 18x', why: 'Power rule on $9x^2$.' },
            { tex: '\\frac{dy}{du} \\cdot \\frac{du}{dx} = (2u)(3) = 2(3x)(3) = 18x', why: 'Multiply the two rates, then rewrite $u$ in terms of $x$. Same answer.' },
          ],
          result: 'Multiplying the rates gives the right derivative.',
        },
        {
          type: 'graph',
          x: [-3.5, 3.5],
          y: [-1.8, 1.8],
          xStep: 'pi',
          functions: [
            { expr: 'sin(k*x)', label: '$y = \\sin(kx)$' },
            { expr: 'sin(x)', label: '$y = \\sin x$', color: 'gray', dashed: true },
          ],
          tangents: [{ expr: 'sin(k*x)', at: 0 }],
          sliders: [{ name: 'k', min: 0.5, max: 4, step: 0.1, value: 2, label: '$k$' }],
          readouts: [{ label: 'slope at $0$ $= k\\cos 0 =$', expr: 'k', digits: 2 }],
          caption: 'The inner function $u = kx$ changes $k$ times as fast as $x$, so $\\sin(kx)$ races through its wave $k$ times faster — and its slope at $0$ is $k$ times the slope of $\\sin x$ there.',
        },
        {
          type: 'callout',
          variant: 'analogy',
          title: 'Unit conversion',
          text: 'You already use the chain rule whenever you convert units: $\\frac{\\text{km}}{\\text{h}} = \\frac{\\text{km}}{\\text{L}} \\cdot \\frac{\\text{L}}{\\text{h}}$. A car using $8$ L of fuel per hour at $15$ km per litre is covering $120$ km per hour. Leibniz notation is designed so that the "$du$"s appear to cancel, just like the litres do.',
        },
      ],
    },
    {
      kind: 'concept',
      title: 'The chain rule: outside, then inside',
      blocks: [
        {
          type: 'theorem',
          name: 'The Chain Rule',
          tex: '\\frac{d}{dx}\\,f\\big(g(x)\\big) = f\'\\big(g(x)\\big)\\cdot g\'(x)',
          text: 'Valid whenever $g$ is differentiable at $x$ and $f$ is differentiable at $g(x)$. With $u = g(x)$ and $y = f(u)$, this is $\\frac{dy}{dx} = \\frac{dy}{du}\\frac{du}{dx}$.',
        },
        {
          type: 'p',
          text: 'Read the formula as a recipe. Identify the **outer** function $f$ and the **inner** function $g$. Differentiate the outer function, *leaving the inside untouched*; then multiply by the derivative of the inside.',
        },
        {
          type: 'derivation',
          title: 'Differentiate $(x^2 + 1)^{10}$',
          steps: [
            { tex: '\\text{outer: } f(u) = u^{10}, \\quad \\text{inner: } u = g(x) = x^2 + 1', why: 'Ask "what is the last thing I would compute?" Here: raise to the 10th power. That is the outer function.' },
            { tex: "f'(u) = 10u^9, \\qquad g'(x) = 2x", why: 'Differentiate each piece separately with the power rule.' },
            { tex: "\\frac{d}{dx}(x^2+1)^{10} = 10(x^2 + 1)^9 \\cdot 2x", why: 'Chain rule: the outer derivative evaluated at the inner function, times the inner derivative.' },
            { tex: '= 20x(x^2 + 1)^9', why: 'Tidy up the constants. Expanding $(x^2+1)^{10}$ first would mean multiplying out eleven terms.' },
          ],
          result: '$\\frac{d}{dx}(x^2 + 1)^{10} = 20x(x^2+1)^9$.',
        },
        {
          type: 'compare',
          left: {
            title: 'Forgetting the inside',
            tone: 'bad',
            tex: ['\\frac{d}{dx}(x^2 + 1)^{10} = 10(x^2+1)^9'],
            text: 'This is the derivative with respect to $u$, not $x$.',
          },
          right: {
            title: 'Outside times inside',
            tone: 'good',
            tex: ['\\frac{d}{dx}(x^2 + 1)^{10} = 10(x^2+1)^9 \\cdot 2x'],
            text: 'The factor $2x$ accounts for how fast the inside is changing.',
          },
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why it works',
          text: 'Let $\\Delta x$ be a small change in $x$, causing a change $\\Delta u$ in the inside and $\\Delta y$ in the output. As long as $\\Delta u \\ne 0$, plain algebra says $\\frac{\\Delta y}{\\Delta x} = \\frac{\\Delta y}{\\Delta u} \\cdot \\frac{\\Delta u}{\\Delta x}$. As $\\Delta x \\to 0$, $\\Delta u \\to 0$ too (differentiable functions are continuous), so the right side approaches $\\frac{dy}{du} \\cdot \\frac{du}{dx}$.',
        },
        {
          type: 'deepdive',
          title: 'Plugging the gap: what if $\\Delta u = 0$?',
          blocks: [
            {
              type: 'p',
              text: 'The argument above divides by $\\Delta u$, which could be $0$ for some small $\\Delta x$ (think of $g(x) = x^2\\sin\\frac{1}{x}$ near $0$). The standard fix avoids dividing. Let $u = g(x)$ and define a helper function of $k$:',
            },
            {
              type: 'math',
              tex: 'Q(k) = \\begin{cases} \\dfrac{f(u + k) - f(u)}{k} & k \\ne 0 \\\\[4pt] f\'(u) & k = 0 \\end{cases}',
            },
            {
              type: 'p',
              text: 'Because $f$ is differentiable at $u$, $Q$ is continuous at $k = 0$. And $f(u + k) - f(u) = Q(k)\\,k$ holds for **every** $k$, including $k = 0$. Now take $k = \\Delta u = g(x + h) - g(x)$:',
            },
            {
              type: 'math',
              tex: '\\frac{f(g(x+h)) - f(g(x))}{h} = Q(\\Delta u)\\cdot\\frac{g(x+h) - g(x)}{h}',
            },
            {
              type: 'p',
              text: 'As $h \\to 0$, $\\Delta u \\to 0$ by continuity of $g$, so $Q(\\Delta u) \\to Q(0) = f\'(g(x))$, while the second factor approaches $g\'(x)$. That is the chain rule, with no division by zero anywhere.',
            },
          ],
        },
      ],
    },
    {
      kind: 'expr',
      prompt: 'Differentiate $f(x) = (3x^2 - 5)^4$.',
      label: "$f'(x) =$",
      answer: '24x(3x^2 - 5)^3',
      answerTex: '24x(3x^2 - 5)^3',
      hint: 'Outer: $u^4$, derivative $4u^3$. Inner: $u = 3x^2 - 5$, derivative $6x$.',
      explanation: 'Outer derivative at the inside: $4(3x^2 - 5)^3$. Inner derivative: $6x$. Multiply: $f\'(x) = 4(3x^2-5)^3 \\cdot 6x = 24x(3x^2 - 5)^3$. Leaving out the $6x$ is the single most common chain-rule error.',
    },
    {
      kind: 'mcq',
      prompt: 'What is $\\dfrac{d}{dx}\\sin(x^2)$?',
      options: [
        { text: '$\\cos(x^2)$', why: 'This is the outer derivative only. The inside $x^2$ is changing at rate $2x$, and that factor is missing.' },
        { text: '$2x\\cos(x^2)$', correct: true, why: 'Outer: $\\sin u \\to \\cos u$, evaluated at $u = x^2$. Inner: $x^2 \\to 2x$. Multiply.' },
        { text: '$\\cos(2x)$', why: 'This differentiates the inside and then puts it *inside* the cosine. The inner function stays as $x^2$; its derivative multiplies on the outside.' },
        { text: '$2x\\cos(2x)$', why: 'The factor $2x$ is right, but the cosine must be evaluated at the original inner function $x^2$, not at its derivative.' },
      ],
      explanation: 'With $u = x^2$: $\\frac{d}{dx}\\sin u = \\cos u \\cdot \\frac{du}{dx} = \\cos(x^2)\\cdot 2x$. Rule of thumb: the inside is **copied unchanged** into the outer derivative, and its derivative appears as a separate factor.',
    },
    {
      kind: 'concept',
      title: 'The patterns you will use every day',
      blocks: [
        {
          type: 'p',
          text: 'Combining the chain rule with each basic derivative gives a "generalised" version of every rule you know. Here $u$ stands for any differentiable inner function of $x$ and $u\'$ for its derivative.',
        },
        {
          type: 'table',
          headers: ['Function', 'Derivative', 'Example'],
          rows: [
            ['$u^n$', '$n\\,u^{n-1}\\,u\'$', '$(5x+2)^3 \\to 15(5x+2)^2$'],
            ['$\\sqrt{u}$', '$\\dfrac{u\'}{2\\sqrt{u}}$', '$\\sqrt{1 + x^2} \\to \\dfrac{x}{\\sqrt{1+x^2}}$'],
            ['$e^{u}$', '$e^{u}\\,u\'$', '$e^{-x^2} \\to -2x\\,e^{-x^2}$'],
            ['$\\sin u$', '$\\cos u \\cdot u\'$', '$\\sin 4x \\to 4\\cos 4x$'],
            ['$\\cos u$', '$-\\sin u \\cdot u\'$', '$\\cos(x^3) \\to -3x^2\\sin(x^3)$'],
            ['$\\tan u$', '$\\sec^2 u \\cdot u\'$', '$\\tan 2x \\to 2\\sec^2 2x$'],
          ],
          caption: 'Each row is "derivative of the outside, evaluated at $u$" times $u\'$.',
        },
        {
          type: 'derivation',
          title: 'Differentiate $\\sqrt{1 + x^2}$',
          steps: [
            { tex: '\\sqrt{1 + x^2} = (1 + x^2)^{1/2}', why: 'Rewrite the root as a power so the power rule can serve as the outer derivative.' },
            { tex: '\\frac{d}{dx}(1+x^2)^{1/2} = \\tfrac{1}{2}(1 + x^2)^{-1/2} \\cdot 2x', why: 'Outer: $\\frac{1}{2}u^{-1/2}$ evaluated at $u = 1 + x^2$. Inner derivative: $2x$.' },
            { tex: '= \\frac{x}{\\sqrt{1 + x^2}}', why: 'The $\\frac{1}{2}$ and $2$ cancel, and a $-\\frac{1}{2}$ power means one over a square root.' },
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Read trig powers carefully',
          text: '$\\sin^3 x$ means $(\\sin x)^3$: the outer function is the cube. Its derivative is $3\\sin^2 x \\cdot \\cos x$. By contrast $\\sin(x^3)$ has the sine on the outside, giving $\\cos(x^3) \\cdot 3x^2$. Same symbols, different composition, different answer.',
        },
        {
          type: 'derivation',
          title: 'Differentiate $\\sin^3 x$',
          steps: [
            { tex: '\\sin^3 x = (\\sin x)^3', why: 'Make the outer function visible.' },
            { tex: '\\frac{d}{dx}(\\sin x)^3 = 3(\\sin x)^2 \\cdot \\cos x', why: 'Outer: $u^3 \\to 3u^2$ with $u = \\sin x$. Inner: $\\sin x \\to \\cos x$.' },
            { tex: '= 3\\sin^2 x\\cos x', why: 'Return to standard trig-power notation.' },
          ],
        },
      ],
    },
    {
      kind: 'expr',
      prompt: 'Differentiate $f(x) = \\sqrt{x^2 + 9}$.',
      label: "$f'(x) =$",
      answer: 'x/sqrt(x^2 + 9)',
      answerTex: '\\frac{x}{\\sqrt{x^2 + 9}}',
      hint: 'Write it as $(x^2 + 9)^{1/2}$. Outer derivative $\\frac{1}{2}u^{-1/2}$; inner derivative $2x$.',
      explanation: '$f\'(x) = \\frac{1}{2}(x^2 + 9)^{-1/2}\\cdot 2x = \\frac{x}{\\sqrt{x^2 + 9}}$. Handy shortcut from the table: $\\frac{d}{dx}\\sqrt{u} = \\frac{u\'}{2\\sqrt{u}}$. (Game-dev aside: $\\sqrt{x^2 + 9}$ is the distance from $(x, 0)$ to $(0, 3)$, so this derivative is how fast that distance changes as you slide along the $x$-axis.)',
    },
    {
      kind: 'expr',
      prompt: 'Differentiate $f(x) = \\cos^3 x$.',
      label: "$f'(x) =$",
      answer: '-3cos(x)^2 sin(x)',
      answerTex: '-3\\cos^2 x \\sin x',
      hint: 'The outer function is the cube: $u^3$ with $u = \\cos x$. Type $\\cos^2 x$ as `cos(x)^2`.',
      explanation: 'Outer: $3u^2 = 3\\cos^2 x$. Inner: $\\frac{d}{dx}\\cos x = -\\sin x$. So $f\'(x) = 3\\cos^2 x \\cdot (-\\sin x) = -3\\cos^2 x\\sin x$. Dropping the minus sign from the inner derivative is a frequent slip.',
    },
    {
      kind: 'truefalse',
      prompt: 'Because $e^x$ is its own derivative, $\\dfrac{d}{dx}e^{2x} = e^{2x}$.',
      answer: false,
      explanation: '$e^{2x}$ is a composition: outer $e^u$, inner $u = 2x$. The chain rule gives $e^{2x} \\cdot 2 = 2e^{2x}$. That makes sense: $e^{2x} = (e^x)^2$ grows "twice as fast" in the exponent. Only $e^x$ itself (and constant multiples of it) is its own derivative.',
    },
    {
      kind: 'concept',
      title: 'Leibniz form, tables and backpropagation',
      blocks: [
        {
          type: 'p',
          text: 'The Leibniz form $\\frac{dy}{dx} = \\frac{dy}{du}\\frac{du}{dx}$ shines when the quantities have physical meaning. Suppose a weather balloon rises at $\\frac{dh}{dt} = 4$ m/s and the air temperature drops with altitude at $\\frac{dT}{dh} = -0.0065$ °C/m. Then the balloon\'s thermometer reads a change of',
        },
        {
          type: 'math',
          tex: '\\frac{dT}{dt} = \\frac{dT}{dh}\\cdot\\frac{dh}{dt} = (-0.0065)(4) = -0.026 \\ \\text{°C/s}',
          caption: 'Units chain together: (°C/m)·(m/s) = °C/s.',
        },
        {
          type: 'p',
          text: 'Exam questions often give $f$ and $g$ only through a table of values. Then the chain rule is pure bookkeeping — the danger is evaluating $f\'$ at the wrong input.',
        },
        {
          type: 'derivation',
          title: 'Given $g(2) = 5$, $g\'(2) = 3$, $f\'(5) = -1$, $f\'(2) = 7$: find $(f \\circ g)\'(2)$',
          steps: [
            { tex: "(f\\circ g)'(2) = f'\\big(g(2)\\big)\\cdot g'(2)", why: 'Chain rule at $x = 2$.' },
            { tex: "= f'(5) \\cdot 3", why: 'The outer derivative is evaluated at the **inner output** $g(2) = 5$, not at $2$.' },
            { tex: '= (-1)(3) = -3', why: 'Read $f\'(5) = -1$ from the data. The value $f\'(2) = 7$ is a deliberate trap.' },
          ],
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'The chain rule runs modern AI',
          text: 'A neural network is a long composition of simple functions, layer after layer. Training it means computing how the error changes with respect to every weight — a giant chain-rule product. **Backpropagation** (reverse-mode automatic differentiation) is just an efficient order for multiplying those local derivatives, sweeping from the output back to the input. The same machinery powers differentiable physics and inverse kinematics in games.',
        },
        {
          type: 'code',
          title: 'chain_check.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdio>

int main() {
    auto F = [](double x) { return std::sin(x * x); };  // F = sin(x^2)
    const double x = 1.0;
    for (int k = 1; k <= 4; ++k) {
        double h = std::pow(10.0, -k);
        double numeric = (F(x + h) - F(x - h)) / (2 * h);
        std::printf("h = %g  numeric slope = %.6f\\n", h, numeric);
    }
    std::printf("chain rule 2x cos(x^2) = %.6f\\n", 2 * x * std::cos(x * x));
}`,
          output: `h = 0.1  numeric slope = 1.056644
h = 0.01  numeric slope = 1.080364
h = 0.001  numeric slope = 1.080602
h = 0.0001  numeric slope = 1.080605
chain rule 2x cos(x^2) = 1.080605`,
          annotations: [
            { lines: 5, text: 'The composite function $F(x) = \\sin(x^2)$.' },
            { lines: 9, text: 'A *central* difference quotient: the secant through $x - h$ and $x + h$. It converges faster than the one-sided version.' },
            { lines: 12, text: 'The chain-rule answer $2x\\cos(x^2)$ at $x = 1$. The numerical slopes home in on it.' },
          ],
        },
      ],
    },
    {
      kind: 'fill',
      prompt: 'Let $y = u^5$ where $u = 2x + 1$. Fill in the Leibniz chain.',
      template: '$\\frac{dy}{du} =$ ___ and $\\frac{du}{dx} =$ ___, so $\\frac{dy}{dx} =$ ___.',
      blanks: [{ answers: ['$5u^4$'] }, { answers: ['$2$'] }, { answers: ['$10(2x+1)^4$'] }],
      wordBank: ['$5u^4$', '$2$', '$10(2x+1)^4$', '$5(2x+1)^4$', '$2x$', '$10u$'],
      explanation: 'Differentiate each link: $\\frac{dy}{du} = 5u^4$ and $\\frac{du}{dx} = 2$. Multiply and substitute $u = 2x + 1$ back in: $\\frac{dy}{dx} = 5(2x+1)^4 \\cdot 2 = 10(2x + 1)^4$. The chip $5(2x+1)^4$ is what you get if you forget the inner factor $2$. The final answer must be in terms of $x$ only.',
    },
    {
      kind: 'numeric',
      prompt: 'Let $h(x) = f(g(x))$, where $g(1) = 3$, $g\'(1) = -2$, $f(3) = 4$, $f\'(3) = 5$ and $f\'(1) = 7$. Find $h\'(1)$.',
      hint: '$h\'(1) = f\'(g(1))\\cdot g\'(1)$. What is $g(1)$?',
      label: "$h'(1) =$",
      answer: '-10',
      explanation: '$h\'(1) = f\'(g(1)) \\cdot g\'(1) = f\'(3) \\cdot (-2) = 5 \\cdot (-2) = -10$. The outer derivative is evaluated at $g(1) = 3$. Using $f\'(1) = 7$ (the trap) would give $-14$, and $f(3) = 4$ is not needed at all.',
    },
    {
      kind: 'concept',
      title: 'Nested chains and combinations',
      blocks: [
        {
          type: 'p',
          text: 'Functions can be nested several layers deep. The chain rule simply repeats: one factor per layer, working from the outside in. Think of peeling an onion.',
        },
        {
          type: 'steps',
          items: [
            { title: 'Find the outermost operation', text: 'Ask: if I were evaluating this with a calculator, what would I press **last**?' },
            { title: 'Differentiate it, copying its inside unchanged', text: 'Write the outer derivative with the entire inner expression left alone.' },
            { title: 'Multiply by the derivative of the inside', text: 'If the inside is itself a composition, repeat steps 1–2 on it.' },
            { title: 'Stop at $x$', text: 'You are done when the innermost layer is $x$ itself (whose derivative is $1$).' },
          ],
        },
        {
          type: 'derivation',
          title: 'Differentiate $\\big[\\sin(x^3 + 1)\\big]^5$ (three layers)',
          steps: [
            { tex: '\\text{layers: } u^5 \\;\\leftarrow\\; \\sin v \\;\\leftarrow\\; v = x^3 + 1', why: 'Outermost: the 5th power. Middle: sine. Innermost: $x^3 + 1$.' },
            { tex: '5\\sin^4(x^3 + 1)', why: 'Layer 1: derivative of $u^5$ is $5u^4$, with $u = \\sin(x^3 + 1)$ copied unchanged.' },
            { tex: '\\cdot\\, \\cos(x^3 + 1)', why: 'Layer 2: derivative of $\\sin v$ is $\\cos v$, with $v = x^3 + 1$ copied unchanged.' },
            { tex: '\\cdot\\, 3x^2', why: 'Layer 3: derivative of $x^3 + 1$.' },
            { tex: '= 15x^2\\sin^4(x^3 + 1)\\cos(x^3 + 1)', why: 'Multiply the three factors and tidy the constants.' },
          ],
        },
        {
          type: 'p',
          text: 'The chain rule also combines freely with the product and quotient rules. Decide which rule applies at the **top level** first, then use the chain rule wherever a piece is a composition.',
        },
        {
          type: 'derivation',
          title: 'Differentiate $x^2 \\sin(3x)$',
          steps: [
            { tex: '\\frac{d}{dx}[x^2]\\cdot\\sin(3x) + x^2\\cdot\\frac{d}{dx}[\\sin(3x)]', why: 'At the top level this is a product, so start with the product rule.' },
            { tex: '= 2x\\sin(3x) + x^2 \\cdot 3\\cos(3x)', why: 'Power rule on $x^2$; chain rule on $\\sin(3x)$, whose inner derivative is $3$.' },
            { tex: '= 2x\\sin 3x + 3x^2\\cos 3x', why: 'Tidy up.' },
          ],
        },
        {
          type: 'callout',
          variant: 'exam',
          title: 'The most-tested rule',
          text: 'Nearly every derivative on a Calculus I exam after this point involves the chain rule somewhere, and "forgot the inner derivative" is the number one reason for lost marks. Graders typically want to see the structure, e.g. $5\\sin^4(\\dots)\\cdot\\cos(\\dots)\\cdot 3x^2$, before simplification — write one factor per layer.',
        },
      ],
    },
    {
      kind: 'order',
      prompt: 'Differentiate $f(x) = \\sqrt{\\cos(5x)}$ layer by layer. Put the factors in the order you would produce them, outside to inside.',
      lines: [
        'Outer (square root): $\\dfrac{1}{2\\sqrt{\\cos(5x)}}$',
        'Middle (cosine): $-\\sin(5x)$',
        'Inner ($5x$): $5$',
        'Multiply: $f\'(x) = -\\dfrac{5\\sin(5x)}{2\\sqrt{\\cos(5x)}}$',
      ],
      distractors: ['Middle (cosine): $-\\sin(x)$'],
      explanation: 'The last operation is the square root, so it is differentiated first, with $\\cos(5x)$ copied inside. Next comes the cosine, whose derivative is $-\\sin$, still evaluated at $5x$ — the distractor $-\\sin(x)$ wrongly changes the inside. Finally $\\frac{d}{dx}5x = 5$. Product: $-\\frac{5\\sin 5x}{2\\sqrt{\\cos 5x}}$.',
    },
    {
      kind: 'expr',
      prompt: 'Differentiate $f(x) = \\sin^3(2x)$.',
      label: "$f'(x) =$",
      answer: '6sin(2x)^2 cos(2x)',
      answerTex: '6\\sin^2(2x)\\cos(2x)',
      hint: 'Three layers: $u^3$, then $\\sin v$, then $v = 2x$. Type $\\sin^2(2x)$ as `sin(2x)^2`.',
      explanation: 'Layer by layer: $3\\sin^2(2x)$ (the cube), times $\\cos(2x)$ (the sine), times $2$ (the inner $2x$). So $f\'(x) = 6\\sin^2(2x)\\cos(2x)$.',
    },
    {
      kind: 'error',
      prompt: 'A student differentiates $f(x) = e^{\\sin(3x)}$. Tap the first line that is wrong.',
      lines: [
        'Outer $e^u$ with $u = \\sin(3x)$; $\\frac{d}{du}e^u = e^u$',
        '$f\'(x) = e^{\\sin(3x)}\\cdot\\frac{d}{dx}\\big[\\sin(3x)\\big]$',
        '$= e^{\\sin(3x)}\\cdot\\cos(3x)$',
        '$f\'(0) = e^0 \\cdot \\cos 0 = 1$',
      ],
      errorLines: [3],
      explanation: 'Line 3 differentiates $\\sin(3x)$ as $\\cos(3x)$, forgetting the innermost layer: $\\frac{d}{dx}\\sin(3x) = 3\\cos(3x)$. The correct derivative is $f\'(x) = 3\\cos(3x)\\,e^{\\sin(3x)}$, so $f\'(0) = 3$. A chain inside a chain needs a factor for *every* layer.',
    },
    {
      kind: 'concept',
      title: 'Motion, orbits and time scaling',
      blocks: [
        {
          type: 'p',
          text: 'Games are full of compositions with time. An object orbiting a point at radius $r$ with angular speed $\\omega$ (radians per second) has position $x(t) = r\\cos(\\omega t)$, $y(t) = r\\sin(\\omega t)$. The inner function $\\omega t$ is the angle, and the chain rule turns it into velocity.',
        },
        {
          type: 'derivation',
          title: 'Velocity of an orbiting object',
          steps: [
            { tex: "x'(t) = r\\cdot(-\\sin(\\omega t))\\cdot\\omega = -r\\omega\\sin(\\omega t)", why: 'Chain rule: outer $\\cos u \\to -\\sin u$, inner $\\omega t \\to \\omega$.' },
            { tex: "y'(t) = r\\cos(\\omega t)\\cdot\\omega = r\\omega\\cos(\\omega t)", why: 'Same idea with sine.' },
            { tex: "\\text{speed} = \\sqrt{x'(t)^2 + y'(t)^2} = r\\omega\\sqrt{\\sin^2(\\omega t) + \\cos^2(\\omega t)} = r\\omega", why: 'Speed is the length of the velocity vector; factor out $r\\omega$ (positive) and use $\\sin^2 + \\cos^2 = 1$.' },
          ],
          result: 'The speed is constant, $r\\omega$ — the factor $\\omega$ comes entirely from the chain rule.',
        },
        {
          type: 'graph',
          x: [-3.5, 3.5],
          y: [-3, 3],
          equal: true,
          parametric: [{ x: '2cos(t)', y: '2sin(t)', t: [0, '2pi'], color: 'gray', dashed: true }],
          points: [{ x: '2cos(w*a)', y: '2sin(w*a)', label: 'object' }],
          segments: [
            {
              from: ['2cos(w*a)', '2sin(w*a)'],
              to: ['2cos(w*a) - 0.5*2*w*sin(w*a)', '2sin(w*a) + 0.5*2*w*cos(w*a)'],
              arrow: true,
              color: 'red',
              label: 'velocity',
            },
          ],
          sliders: [
            { name: 'a', min: 0, max: 6.28, step: 0.02, value: 0.6, label: 'time $t$' },
            { name: 'w', min: 0.5, max: 2.5, step: 0.1, value: 1, label: '$\\omega$' },
          ],
          readouts: [{ label: 'speed $r\\omega =$', expr: '2w', digits: 2 }],
          caption: 'Orbit of radius $r = 2$. The red arrow (drawn at half scale) is the velocity $(x\'(t), y\'(t))$: always tangent to the circle, with length proportional to $\\omega$. Double $\\omega$ and the arrow doubles.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Slow motion is the chain rule',
          text: 'Run an animation at a time-scale factor $s$ (bullet time: $s = 0.25$) and the position becomes $p(st)$. By the chain rule its velocity is $s\\,p\'(st)$: everything moves at a quarter of the speed, and accelerations scale by $s^2$. Engines that apply a global `timeScale` multiply velocities by it for exactly this reason.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'Find the slope of the tangent line to $y = (x^2 - 3)^5$ at $x = 2$.',
      hint: '$\\frac{dy}{dx} = 5(x^2 - 3)^4 \\cdot 2x$. Then substitute $x = 2$.',
      label: 'slope $=$',
      answer: '20',
      explanation: '$\\frac{dy}{dx} = 5(x^2 - 3)^4 \\cdot 2x = 10x(x^2 - 3)^4$. At $x = 2$: $x^2 - 3 = 1$, so the slope is $10 \\cdot 2 \\cdot 1^4 = 20$. Without the inner factor $2x$ you would get $5$.',
    },
    {
      kind: 'expr',
      prompt: 'Differentiate $f(x) = x\\,e^{-x^2}$.',
      label: "$f'(x) =$",
      answer: 'e^(-x^2) - 2x^2 e^(-x^2)',
      answerTex: 'e^{-x^2}(1 - 2x^2)',
      hint: 'Product rule at the top level. For $e^{-x^2}$ use the chain rule: inner derivative $-2x$.',
      explanation: 'Product rule: $f\'(x) = 1\\cdot e^{-x^2} + x \\cdot \\frac{d}{dx}e^{-x^2}$. Chain rule: $\\frac{d}{dx}e^{-x^2} = e^{-x^2}\\cdot(-2x)$. So $f\'(x) = e^{-x^2} - 2x^2e^{-x^2} = e^{-x^2}(1 - 2x^2)$, which is zero at $x = \\pm\\frac{1}{\\sqrt{2}}$ — the peak and trough of this bell-shaped wave.',
    },
    {
      kind: 'mcq',
      prompt: 'Which expression equals $\\dfrac{d}{dx}\\tan(x^2 + 1)$?',
      options: [
        { text: '$\\sec^2(2x)$', why: 'The inner derivative was put *inside* the outer derivative. The inside must stay $x^2 + 1$.' },
        { text: '$\\sec^2(x^2 + 1)$', why: 'Outer derivative only; the factor $2x$ from the inside is missing.' },
        { text: '$2x\\tan(x^2 + 1)$', why: 'The outer function was not differentiated at all: $\\frac{d}{du}\\tan u = \\sec^2 u$.' },
        { text: '$2x\\sec^2(x^2 + 1)$', correct: true, why: 'Outer: $\\tan u \\to \\sec^2 u$ at $u = x^2 + 1$. Inner: $2x$.' },
      ],
      explanation: 'With $u = x^2 + 1$: $\\frac{d}{dx}\\tan u = \\sec^2 u \\cdot u\' = \\sec^2(x^2 + 1)\\cdot 2x$. Each wrong option corresponds to skipping or misplacing one of the two factors.',
    },
  ],
  takeaways: [
    'Chained rates multiply: $\\frac{dy}{dx} = \\frac{dy}{du}\\cdot\\frac{du}{dx}$, or $\\big(f(g(x))\\big)\' = f\'(g(x))\\,g\'(x)$.',
    'Differentiate the outer function with the inside copied unchanged, then multiply by the derivative of the inside.',
    'Generalised rules: $(u^n)\' = nu^{n-1}u\'$, $(e^u)\' = e^u u\'$, $(\\sin u)\' = \\cos u \\cdot u\'$, $(\\sqrt{u})\' = \\frac{u\'}{2\\sqrt{u}}$.',
    'Nested functions get one factor per layer; decide the top-level rule (product, quotient or chain) first.',
    'With tables, evaluate the outer derivative at the inner output $g(a)$, not at $a$.',
  ],
  reading: [
    {
      title: 'OpenStax Calculus Volume 1 — 3.6 The Chain Rule',
      url: 'https://openstax.org/books/calculus-volume-1/pages/3-6-the-chain-rule',
      source: 'openstax',
      note: 'Many more worked examples, including combinations with the product and quotient rules.',
    },
    {
      title: "Paul's Online Notes — Chain Rule",
      url: 'https://tutorial.math.lamar.edu/Classes/CalcI/ChainRule.aspx',
      source: 'paul',
      note: 'A long sequence of practice problems that gradually increases the number of layers.',
    },
    {
      title: '3Blue1Brown — Visualizing the chain rule and product rule',
      url: 'https://www.youtube.com/watch?v=YG15m2VwSjA',
      source: 'video',
      note: 'Shows the chain rule as nudges propagating through a pair of number lines.',
    },
  ],
};
