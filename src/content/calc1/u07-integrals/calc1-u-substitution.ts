import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'calc1-u-substitution',
  title: 'Integration by Substitution',
  summary: 'The chain rule in reverse: spot an inner function and its derivative, and a hard integral becomes a table entry.',
  minutes: 18,
  objectives: [
    'Explain $u$-substitution as the chain rule run backwards',
    'Choose a good $u$, compute $du$, and rewrite an integral entirely in terms of $u$',
    'Adjust for constant factors, and recognise when a substitution cannot work',
    'Evaluate definite integrals by substitution, changing the limits of integration to $u$-values',
    'Handle substitutions where leftover $x$\'s must be written in terms of $u$',
  ],
  steps: [
    {
      kind: 'concept',
      title: 'The chain rule, backwards',
      blocks: [
        {
          type: 'p',
          text: 'The basic table handles $\\int \\cos x\\,dx$, but what about $\\int 2x\\cos(x^2)\\,dx$? No table entry matches. Yet you have seen this shape before — as the **output** of the [[chain-rule]]:',
        },
        {
          type: 'math',
          tex: '\\frac{d}{dx}\\sin(x^2) = \\cos(x^2)\\cdot 2x',
          caption: 'Outer derivative evaluated at the inner function, times the derivative of the inner function.',
        },
        {
          type: 'p',
          text: 'So $\\int 2x\\cos(x^2)\\,dx = \\sin(x^2) + C$. The general pattern: if $F\' = f$, the chain rule gives $\\frac{d}{dx}F(g(x)) = f(g(x))\\,g\'(x)$, so',
        },
        {
          type: 'theorem',
          name: 'The substitution rule',
          tex: '\\int f\\big(g(x)\\big)\\,g\'(x)\\,dx = \\int f(u)\\,du = F(u) + C = F\\big(g(x)\\big) + C, \\qquad u = g(x)',
          text: 'Valid when $g$ is differentiable and $f$ is continuous on the range of $g$.',
        },
        {
          type: 'p',
          text: 'The thing to look for: an **inner function** $g(x)$ sitting inside something, multiplied by its own **derivative** $g\'(x)$ (up to a constant). In $\\int 2x\\cos(x^2)\\,dx$, the inner function is $x^2$ and its derivative $2x$ is right there.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why we can treat $du$ like an algebraic quantity',
          text: 'Writing $u = g(x)$ and then $du = g\'(x)\\,dx$ looks like multiplying $\\frac{du}{dx} = g\'(x)$ by $dx$. The symbols are not literally fractions, but the substitution rule above — proved by the chain rule — guarantees that this bookkeeping gives the right answer. That is a big part of why Leibniz\'s $dx$ notation won out: it makes the correct manipulations look natural.',
        },
      ],
    },
    {
      kind: 'mcq',
      prompt: 'For which integral does the substitution $u = x^2 + 1$ work directly?',
      options: [
        {
          text: '$\\displaystyle\\int (x^2 + 1)^7\\,dx$',
          why: 'Here $du = 2x\\,dx$ would need a factor of $x$, and there is none. (This one is done by expanding — tediously.)',
        },
        {
          text: '$\\displaystyle\\int x^2 (x^2 + 1)^7\\,dx$',
          why: 'After using $x\\,dx = \\frac{1}{2}du$, one extra $x$ is left over, and writing it as $\\sqrt{u - 1}$ makes the integral harder, not easier.',
        },
        {
          text: '$\\displaystyle\\int x (x^2 + 1)^7\\,dx$',
          correct: true,
          why: '$du = 2x\\,dx$, so $x\\,dx = \\frac{1}{2}du$ and the integral becomes $\\frac{1}{2}\\int u^7\\,du = \\frac{(x^2 + 1)^8}{16} + C$.',
        },
        {
          text: '$\\displaystyle\\int \\frac{(x^2 + 1)^7}{x}\\,dx$',
          why: 'Dividing by $x$ is the opposite of what we need: $du$ requires a factor of $x$ in the numerator.',
        },
      ],
      explanation: 'Substitution works when the integrand contains the inner function **and** its derivative, up to a constant factor. With $u = x^2 + 1$ we need $x\\,dx$; only $\\int x(x^2 + 1)^7\\,dx$ provides exactly that. Constants can be fixed; missing or extra powers of $x$ cannot simply be fixed.',
    },
    {
      kind: 'concept',
      title: 'The method, step by step',
      blocks: [
        {
          type: 'steps',
          items: [
            { title: 'Choose $u$', text: 'Usually the inner function: the expression inside a power, root, exponential, trig function or denominator — ideally one whose derivative also appears.' },
            { title: 'Compute $du$', text: 'Differentiate: $du = g\'(x)\\,dx$. Solve for whatever piece of the integrand you need, e.g. $x^2\\,dx = \\frac{1}{3}du$.' },
            { title: 'Rewrite entirely in $u$', text: 'Replace every $x$ and the $dx$. If any $x$ is left over, either express it in terms of $u$ or choose a different $u$.' },
            { title: 'Integrate', text: 'The new integral should be a table entry.' },
            { title: 'Back-substitute and check', text: 'Replace $u$ by $g(x)$, then differentiate your answer to confirm you get the original integrand.' },
          ],
        },
        {
          type: 'derivation',
          title: 'Find $\\displaystyle\\int x^2 (x^3 + 5)^4\\,dx$',
          steps: [
            { tex: 'u = x^3 + 5', why: 'The inner function: the expression being raised to the 4th power. Its derivative, $3x^2$, matches the $x^2$ outside up to a constant.' },
            { tex: 'du = 3x^2\\,dx \\implies x^2\\,dx = \\tfrac{1}{3}\\,du', why: 'Differentiate, then solve for exactly the piece $x^2\\,dx$ that appears in the integral.' },
            { tex: '\\int (x^3 + 5)^4\\,x^2\\,dx = \\int u^4 \\cdot \\tfrac{1}{3}\\,du', why: 'Replace $x^3 + 5$ by $u$ and $x^2\\,dx$ by $\\frac{1}{3}du$. No $x$ remains — the sign the substitution worked.' },
            { tex: '= \\tfrac{1}{3}\\cdot\\frac{u^5}{5} + C = \\frac{u^5}{15} + C', why: 'Pull out the constant and use the power rule.' },
            { tex: '= \\frac{(x^3 + 5)^5}{15} + C', why: 'Back-substitute $u = x^3 + 5$. The answer must be in terms of the original variable.' },
            { tex: '\\frac{d}{dx}\\frac{(x^3 + 5)^5}{15} = \\frac{5(x^3 + 5)^4\\cdot 3x^2}{15} = x^2(x^3 + 5)^4\\;\\checkmark', why: 'Check with the chain rule: the $\\frac{1}{15}$ exactly cancels the $5 \\cdot 3$ that differentiation produces.' },
          ],
          result: '$\\int x^2(x^3 + 5)^4\\,dx = \\frac{(x^3 + 5)^5}{15} + C$.',
        },
        {
          type: 'callout',
          variant: 'tip',
          text: 'If your first choice of $u$ leaves an $x$ you cannot get rid of, try a different $u$ — that is normal, not failure. With practice you will see the right $u$ immediately, because you will recognise the derivative sitting next to it.',
        },
      ],
    },
    {
      kind: 'order',
      prompt: 'Put the steps for finding $\\displaystyle\\int \\cos x\\; e^{\\sin x}\\,dx$ in order.',
      lines: [
        'Let $u = \\sin x$',
        'Then $du = \\cos x\\,dx$',
        'Rewrite the integral as $\\int e^u\\,du$',
        'Integrate: $e^u + C$',
        'Back-substitute: $e^{\\sin x} + C$',
      ],
      distractors: ['Integrate $e^{\\sin x}$ directly as $\\dfrac{e^{\\sin x}}{\\sin x} + C$'],
      explanation: 'The inner function $\\sin x$ sits in the exponent and its derivative $\\cos x$ multiplies the exponential, so $u = \\sin x$ turns the integral into $\\int e^u\\,du$. Check: $\\frac{d}{dx}e^{\\sin x} = e^{\\sin x}\\cos x$ ✓. The distractor invents a rule — there is no "divide by the exponent" rule for $e^{g(x)}$.',
    },
    {
      kind: 'expr',
      prompt: 'Find $\\displaystyle\\int x\\,(x^2 - 3)^4\\,dx$.',
      label: '$\\displaystyle\\int x(x^2-3)^4\\,dx =$',
      answer: '(x^2 - 3)^5/10',
      answerTex: '\\frac{(x^2 - 3)^5}{10} + C',
      upToConstant: true,
      hint: 'Let $u = x^2 - 3$, so $du = 2x\\,dx$ and $x\\,dx = \\frac{1}{2}du$.',
      explanation: 'With $u = x^2 - 3$, $x\\,dx = \\frac{1}{2}du$, so the integral is $\\frac{1}{2}\\int u^4\\,du = \\frac{1}{2}\\cdot\\frac{u^5}{5} = \\frac{u^5}{10}$. Back-substituting gives $\\frac{(x^2 - 3)^5}{10} + C$. Check: $\\frac{5(x^2-3)^4\\cdot 2x}{10} = x(x^2 - 3)^4$ ✓.',
    },
    {
      kind: 'concept',
      title: 'Constant factors and common patterns',
      blocks: [
        {
          type: 'p',
          text: 'The most frequent substitution is a **linear** one, $u = ax + b$. Then $du = a\\,dx$, so $dx = \\frac{1}{a}du$: the effect is simply to divide by $a$.',
        },
        {
          type: 'theorem',
          name: 'Linear substitution',
          tex: '\\int f(ax + b)\\,dx = \\frac{1}{a}F(ax + b) + C \\qquad (a \\neq 0)',
          text: 'For example, $\\int e^{3x}\\,dx = \\frac{1}{3}e^{3x} + C$ and $\\int \\cos(5x - 1)\\,dx = \\frac{1}{5}\\sin(5x - 1) + C$.',
        },
        {
          type: 'p',
          text: 'Another pattern worth memorising: when the numerator is (a constant times) the derivative of the denominator, $u$ = denominator gives a logarithm: $\\int \\frac{g\'(x)}{g(x)}\\,dx = \\ln|g(x)| + C$.',
        },
        {
          type: 'derivation',
          title: 'Find $\\displaystyle\\int \\tan x\\,dx$',
          steps: [
            { tex: '\\int \\tan x\\,dx = \\int \\frac{\\sin x}{\\cos x}\\,dx', why: 'Rewrite $\\tan$ in terms of $\\sin$ and $\\cos$ so an inner function appears.' },
            { tex: 'u = \\cos x, \\quad du = -\\sin x\\,dx \\implies \\sin x\\,dx = -du', why: 'The denominator\'s derivative, $-\\sin x$, matches the numerator up to the constant $-1$.' },
            { tex: '= \\int \\frac{-du}{u} = -\\ln|u| + C', why: 'Rewrite in $u$ and use $\\int \\frac{1}{u}\\,du = \\ln|u| + C$.' },
            { tex: '= -\\ln|\\cos x| + C = \\ln|\\sec x| + C', why: 'Back-substitute. The second form uses $-\\ln a = \\ln\\frac{1}{a}$ and $\\frac{1}{\\cos x} = \\sec x$.' },
          ],
          result: '$\\int \\tan x\\,dx = \\ln|\\sec x| + C$, valid on any interval where $\\cos x \\neq 0$.',
        },
        {
          type: 'compare',
          left: {
            title: 'Constants can be adjusted…',
            tone: 'good',
            tex: ['\\int x\\cos(x^2)\\,dx = \\tfrac{1}{2}\\int \\cos u\\,du = \\tfrac{1}{2}\\sin(x^2) + C'],
            text: 'Missing a factor of $2$? Multiply by $2$ inside and $\\frac{1}{2}$ outside.',
          },
          right: {
            title: '…but variables cannot',
            tone: 'bad',
            tex: ['\\int \\cos(x^2)\\,dx \\ne \\frac{\\sin(x^2)}{2x} + C'],
            text: 'With no $x$ outside, $u = x^2$ fails. You may not divide by $2x$ to "fix" it: $x$ is not a constant, so it cannot move through the integral sign.',
          },
        },
      ],
    },
    {
      kind: 'expr',
      prompt: 'Find $\\displaystyle\\int \\frac{(\\ln x)^2}{x}\\,dx$ for $x > 0$.',
      label: '$\\displaystyle\\int \\frac{(\\ln x)^2}{x}\\,dx =$',
      answer: '(ln(x))^3/3',
      answerTex: '\\frac{(\\ln x)^3}{3} + C',
      upToConstant: true,
      domain: [0.5, 3],
      hint: 'Which function in the integrand has its derivative also present? The derivative of $\\ln x$ is $\\frac{1}{x}$.',
      explanation: 'Let $u = \\ln x$; then $du = \\frac{1}{x}\\,dx$, which is exactly the rest of the integrand. So $\\int \\frac{(\\ln x)^2}{x}\\,dx = \\int u^2\\,du = \\frac{u^3}{3} + C = \\frac{(\\ln x)^3}{3} + C$. Check: $\\frac{d}{dx}\\frac{(\\ln x)^3}{3} = (\\ln x)^2 \\cdot \\frac{1}{x}$ ✓.',
    },
    {
      kind: 'error',
      prompt: 'A student computes $\\displaystyle\\int x\\sqrt{x^2 + 9}\\,dx$. Tap the first wrong line.',
      lines: [
        'Let $u = x^2 + 9$, so $du = 2x\\,dx$.',
        'Then $x\\,dx = \\frac{1}{2}\\,du$.',
        '$\\displaystyle\\int x\\sqrt{x^2 + 9}\\,dx = \\int \\sqrt{u}\\,du$',
        '$= \\frac{2}{3}u^{3/2} + C = \\frac{2}{3}(x^2 + 9)^{3/2} + C$',
      ],
      errorLines: [3],
      explanation: 'Line 2 correctly finds $x\\,dx = \\frac{1}{2}du$, but line 3 drops the $\\frac{1}{2}$. The integral should be $\\frac{1}{2}\\int\\sqrt{u}\\,du = \\frac{1}{2}\\cdot\\frac{2}{3}u^{3/2} = \\frac{1}{3}(x^2 + 9)^{3/2} + C$. Differentiating the student\'s answer gives $2x\\sqrt{x^2 + 9}$ — twice the integrand, which the check would reveal.',
    },
    {
      kind: 'concept',
      title: 'Substitution in definite integrals',
      blocks: [
        {
          type: 'p',
          text: 'For a definite integral there are two correct approaches. You can find the antiderivative in terms of $x$ first and then use the original limits. Or — usually cleaner — you can **change the limits** to the corresponding $u$-values and never go back to $x$.',
        },
        {
          type: 'theorem',
          name: 'Substitution rule for definite integrals',
          tex: '\\int_a^b f\\big(g(x)\\big)\\,g\'(x)\\,dx = \\int_{g(a)}^{g(b)} f(u)\\,du',
          text: 'Valid when $g\'$ is continuous on $[a, b]$ and $f$ is continuous on the range of $u = g(x)$.',
        },
        {
          type: 'derivation',
          title: 'Evaluate $\\displaystyle\\int_0^2 x(x^2 + 1)^3\\,dx$',
          steps: [
            { tex: 'u = x^2 + 1, \\quad du = 2x\\,dx \\implies x\\,dx = \\tfrac{1}{2}du', why: 'Same choice as an indefinite integral.' },
            { tex: 'x = 0 \\implies u = 1, \\qquad x = 2 \\implies u = 5', why: 'Convert each limit by plugging it into $u = x^2 + 1$. The limits must describe the *new* variable.' },
            { tex: '\\int_0^2 x(x^2 + 1)^3\\,dx = \\tfrac{1}{2}\\int_1^5 u^3\\,du', why: 'Rewrite the integrand and the limits in terms of $u$ in one step.' },
            { tex: '= \\tfrac{1}{2}\\cdot\\frac{u^4}{4}\\Big|_1^5 = \\frac{1}{8}\\left(5^4 - 1^4\\right)', why: 'FTC Part 2 in the variable $u$ — no back-substitution needed.' },
            { tex: '= \\frac{625 - 1}{8} = 78', why: 'Arithmetic: $\\frac{624}{8} = 78$.' },
          ],
          result: '$\\int_0^2 x(x^2 + 1)^3\\,dx = 78$.',
        },
        {
          type: 'graph',
          x: [-0.1, 1.8],
          y: [-0.2, 1.6],
          functions: [
            { expr: '2x cos(x^2)', label: '$y = 2x\\cos(x^2)$ (in $x$)' },
            { expr: 'cos(x)', label: '$y = \\cos u$ (in $u$)', color: 'green', dashed: true },
          ],
          areas: [
            { expr: '2x cos(x^2)', from: 0, to: 'b', color: 'blue' },
            { expr: 'cos(x)', from: 0, to: 'b^2', color: 'green' },
          ],
          vlines: [{ x: 'b', label: 'x = b', color: 'blue' }, { x: 'b^2', label: 'u = b²', color: 'green' }],
          sliders: [{ name: 'b', min: 0.1, max: 1.25, step: 0.01, value: 1, label: 'upper limit $b$' }],
          readouts: [
            { label: '$\\int_0^b 2x\\cos(x^2)\\,dx =$', expr: 'sin(b^2)', digits: 4 },
            { label: '$\\int_0^{b^2} \\cos u\\,du =$', expr: 'sin(b^2)', digits: 4 },
          ],
          caption: 'Two different-looking regions with the same area. Substitution $u = x^2$ stretches the $x$-interval $[0, b]$ into the $u$-interval $[0, b^2]$, and the factor $2x$ in the integrand exactly compensates for the stretching.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the limits must change',
          text: 'The original limits $0$ and $2$ are values of $x$. After substituting, the integration variable is $u$, and $u$ runs from $g(0) = 1$ to $g(2) = 5$ as $x$ runs from $0$ to $2$. Keeping $0$ and $2$ would integrate $u^3$ over the wrong interval: $\\frac{1}{2}\\int_0^2 u^3\\,du = 2$, not $78$.',
        },
        {
          type: 'callout',
          variant: 'warning',
          text: 'Never mix the two methods. Either change the limits and finish in $u$, **or** back-substitute to $x$ and use the original limits. Changed limits with an $x$-antiderivative (or original limits with a $u$-antiderivative) is the classic error.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'Evaluate $\\displaystyle\\int_0^1 x\\,e^{x^2}\\,dx$.',
      hint: 'Let $u = x^2$. Then $x\\,dx = \\frac{1}{2}du$, and the limits become $u = 0$ and $u = 1$.',
      answer: '(e - 1)/2',
      answerTex: '\\frac{e - 1}{2}',
      explanation: 'With $u = x^2$, $du = 2x\\,dx$; the limits $x = 0, 1$ become $u = 0, 1$. So $\\int_0^1 xe^{x^2}\\,dx = \\frac{1}{2}\\int_0^1 e^u\\,du = \\frac{1}{2}\\left(e^1 - e^0\\right) = \\frac{e - 1}{2} \\approx 0.859$.',
    },
    {
      kind: 'numeric',
      prompt: 'Evaluate $\\displaystyle\\int_0^1 (2x + 1)^3\\,dx$.',
      hint: 'Linear substitution: $u = 2x + 1$, $dx = \\frac{1}{2}du$. The limits become $u = 1$ and $u = 3$.',
      answer: '10',
      explanation: 'Let $u = 2x + 1$, so $dx = \\frac{1}{2}du$; $x = 0 \\mapsto u = 1$ and $x = 1 \\mapsto u = 3$. Then $\\frac{1}{2}\\int_1^3 u^3\\,du = \\frac{1}{2}\\cdot\\frac{u^4}{4}\\Big|_1^3 = \\frac{81 - 1}{8} = 10$. Forgetting the $\\frac{1}{2}$ gives $20$; forgetting to change the limits gives $\\frac{1}{8}(1 - 0) = \\frac{1}{8}$.',
    },
    {
      kind: 'concept',
      title: 'When $x$ is left over',
      blocks: [
        {
          type: 'p',
          text: 'Sometimes the derivative of $u$ is a constant, but an extra $x$ remains. If you can solve $u = g(x)$ for $x$, you can still finish: express the leftover $x$ in terms of $u$.',
        },
        {
          type: 'derivation',
          title: 'Find $\\displaystyle\\int x\\sqrt{x - 1}\\,dx$',
          steps: [
            { tex: 'u = x - 1, \\quad du = dx, \\quad x = u + 1', why: 'The root is the obstacle, so put its inside equal to $u$. Solving for $x$ handles the leftover factor.' },
            { tex: '\\int x\\sqrt{x - 1}\\,dx = \\int (u + 1)\\sqrt{u}\\,du', why: 'Replace every piece: $x \\to u + 1$, $\\sqrt{x - 1} \\to \\sqrt{u}$, $dx \\to du$.' },
            { tex: '= \\int \\left(u^{3/2} + u^{1/2}\\right)du', why: 'Distribute: $(u + 1)u^{1/2} = u^{3/2} + u^{1/2}$. Now it is a power-rule integral.' },
            { tex: '= \\frac{2}{5}u^{5/2} + \\frac{2}{3}u^{3/2} + C', why: 'Reverse power rule on each term.' },
            { tex: '= \\frac{2}{5}(x - 1)^{5/2} + \\frac{2}{3}(x - 1)^{3/2} + C', why: 'Back-substitute $u = x - 1$.' },
          ],
          result: '$\\int x\\sqrt{x-1}\\,dx = \\frac{2}{5}(x - 1)^{5/2} + \\frac{2}{3}(x - 1)^{3/2} + C$.',
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'Exams mix integrals that need substitution with integrals that do not. Before substituting, ask: is this already a table entry, or can I simplify algebraically? $\\int \\frac{x^2 + 1}{x}\\,dx$ needs only division; $\\int \\frac{x}{x^2 + 1}\\,dx$ needs $u = x^2 + 1$ and gives $\\frac{1}{2}\\ln(x^2 + 1) + C$.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Substitution is reparameterisation',
          text: 'Animation and shader code constantly remap a parameter: play an animation with eased time $u = t^2$ instead of $t$. The factor $du = 2t\\,dt$ says how fast the eased clock runs compared with the real one. Substitution is the calculus of exactly this: change the variable, and pay for it with the derivative of the change.',
        },
      ],
    },
    {
      kind: 'truefalse',
      prompt: 'Using $u = x^2$, we get $\\displaystyle\\int \\cos(x^2)\\,dx = \\frac{\\sin(x^2)}{2x} + C$.',
      answer: false,
      explanation: 'Substitution needs $du = 2x\\,dx$ to be present in the integrand, and here it is not. Dividing by $2x$ to compensate is illegal because $2x$ is a variable, not a constant. Differentiating $\\frac{\\sin(x^2)}{2x}$ with the quotient rule gives $\\cos(x^2) - \\frac{\\sin(x^2)}{2x^2}$, not $\\cos(x^2)$. In fact $\\cos(x^2)$ has no elementary antiderivative at all.',
    },
    {
      kind: 'fill',
      prompt: 'To evaluate $\\displaystyle\\int_1^2 \\frac{2x}{x^2 + 1}\\,dx$, use $u = x^2 + 1$. Fill in the new limits.',
      template: 'The integral becomes $\\displaystyle\\int \\frac{1}{u}\\,du$ with lower limit $u =$ ___ and upper limit $u =$ ___, so its value is ___.',
      blanks: [{ answers: ['$2$'] }, { answers: ['$5$'] }, { answers: ['$\\ln\\frac{5}{2}$'] }],
      wordBank: ['$1$', '$2$', '$4$', '$5$', '$\\ln\\frac{5}{2}$', '$\\ln 2$', '$\\ln 5$'],
      explanation: 'With $u = x^2 + 1$, $du = 2x\\,dx$ — exactly the numerator. The limits are $u(1) = 1^2 + 1 = 2$ and $u(2) = 2^2 + 1 = 5$. So the integral is $\\int_2^5 \\frac{du}{u} = \\ln 5 - \\ln 2 = \\ln\\frac{5}{2} \\approx 0.916$. Keeping the old limits $1$ and $2$ would give $\\ln 2$ — wrong.',
    },
  ],
  takeaways: [
    'Substitution reverses the chain rule: $\\int f(g(x))\\,g\'(x)\\,dx = \\int f(u)\\,du$ with $u = g(x)$, $du = g\'(x)\\,dx$.',
    'Choose $u$ as an inner function whose derivative also appears (up to a constant). Constant factors can be adjusted; variable factors cannot.',
    'Linear substitutions divide by the coefficient: $\\int f(ax + b)\\,dx = \\frac{1}{a}F(ax + b) + C$. And $\\int \\frac{g\'}{g}\\,dx = \\ln|g| + C$.',
    'In a definite integral, convert the limits to $u$-values and finish in $u$ — or back-substitute and use the original limits. Never mix the two.',
    'If an $x$ is left over, solve $u = g(x)$ for $x$; always check an indefinite answer by differentiating.',
  ],
  reading: [
    {
      title: 'OpenStax Calculus Volume 1 — 5.5 Substitution',
      url: 'https://openstax.org/books/calculus-volume-1/pages/5-5-substitution',
      source: 'openstax',
      note: 'Many more indefinite and definite substitution examples, with careful attention to the limits.',
    },
    {
      title: "Paul's Online Notes — Substitution Rule for Indefinite Integrals",
      url: 'https://tutorial.math.lamar.edu/Classes/CalcI/SubstitutionRuleIndefinite.aspx',
      source: 'paul',
      note: 'A long list of examples showing how to spot the right $u$.',
    },
    {
      title: "Paul's Online Notes — Substitution Rule for Definite Integrals",
      url: 'https://tutorial.math.lamar.edu/Classes/CalcI/SubstitutionRuleDefinite.aspx',
      source: 'paul',
      note: 'Both methods for handling limits, side by side.',
    },
  ],
};
