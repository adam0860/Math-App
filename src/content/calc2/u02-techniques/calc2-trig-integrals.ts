import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'calc2-trig-integrals',
  title: 'Trigonometric Integrals',
  summary: 'Powers and products of sines, cosines, tangents and secants — tamed by identities and one well-chosen substitution.',
  minutes: 18,
  objectives: [
    'Integrate $\\sin^m x\\cos^n x$ when either power is odd, by saving one factor and substituting',
    'Use the power-reducing identities when both powers are even',
    'Integrate $\\tan^m x\\sec^n x$ by saving $\\sec^2 x$ or $\\sec x\\tan x$',
    'Derive and use $\\int \\tan x\\,dx$ and $\\int \\sec x\\,dx$',
    'Integrate products like $\\sin(mx)\\cos(nx)$ with product-to-sum identities',
  ],
  steps: [
    {
      kind: 'concept',
      title: 'Odd powers: save one, convert the rest',
      blocks: [
        {
          type: 'p',
          text: 'You know $\\int \\sin x\\,dx$ and $\\int \\cos x\\,dx$. But what about $\\int \\sin^3 x\\,dx$ or $\\int \\sin^2 x\\cos^3 x\\,dx$? Powers of trig functions show up constantly — in arc lengths, volumes, Fourier analysis and, next lesson, trigonometric substitution. The trick is to arrange a [[u-substitution]] by spending one factor on $du$.',
        },
        {
          type: 'p',
          text: 'Recall $\\frac{d}{dx}\\cos x = -\\sin x$. So if the integrand is (something in $\\cos x$) $\\times \\sin x$, the substitution $u = \\cos x$ works. When sine appears to an **odd** power, peel off one $\\sin x$ for $du$; the leftover even power converts to cosines with the [[pythagorean-identities|Pythagorean identity]] $\\sin^2 x = 1 - \\cos^2 x$.',
        },
        {
          type: 'derivation',
          title: 'Evaluate $\\int \\sin^3 x\\,dx$',
          steps: [
            { tex: '\\int \\sin^3 x\\,dx = \\int \\sin^2 x \\cdot \\sin x\\,dx', why: 'The power is odd: save one $\\sin x$ to become part of $du$.' },
            { tex: '= \\int (1 - \\cos^2 x)\\sin x\\,dx', why: 'Convert the remaining even power with $\\sin^2 x = 1 - \\cos^2 x$.' },
            { tex: '= -\\int (1 - u^2)\\,du', why: 'Let $u = \\cos x$, so $du = -\\sin x\\,dx$, i.e. $\\sin x\\,dx = -du$.' },
            { tex: '= -u + \\frac{u^3}{3} + C', why: 'Integrate the polynomial term by term.' },
            { tex: '= -\\cos x + \\frac{\\cos^3 x}{3} + C', why: 'Back-substitute $u = \\cos x$.' },
          ],
          result: '$\\int \\sin^3 x\\,dx = -\\cos x + \\frac{1}{3}\\cos^3 x + C$.',
        },
        {
          type: 'p',
          text: 'The same idea works for a product $\\sin^m x\\cos^n x$ as long as **one** of the powers is odd. Save a factor of whichever function has the odd power.',
        },
        {
          type: 'derivation',
          title: 'Evaluate $\\int \\sin^2 x\\cos^3 x\\,dx$',
          steps: [
            { tex: '= \\int \\sin^2 x\\cos^2 x \\cdot \\cos x\\,dx', why: 'The cosine power is odd: save one $\\cos x$ for $du$.' },
            { tex: '= \\int \\sin^2 x\\,(1 - \\sin^2 x)\\cos x\\,dx', why: 'Convert the leftover $\\cos^2 x = 1 - \\sin^2 x$, so everything else is in terms of $\\sin x$.' },
            { tex: '= \\int u^2(1 - u^2)\\,du = \\int (u^2 - u^4)\\,du', why: 'Let $u = \\sin x$, $du = \\cos x\\,dx$, and expand.' },
            { tex: '= \\frac{u^3}{3} - \\frac{u^5}{5} + C = \\frac{\\sin^3 x}{3} - \\frac{\\sin^5 x}{5} + C', why: 'Power rule, then back-substitute.' },
          ],
          result: 'A trig integral has become a polynomial integral.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the power must be odd',
          text: 'After saving one factor for $du$, the leftover power must be **even** so it can be written as $(\\sin^2 x)^k = (1 - \\cos^2 x)^k$ — a polynomial in $\\cos x$. If the leftover were odd, say $\\sin^1 x$ stranded among cosines, converting it would need $\\sin x = \\sqrt{1 - \\cos^2 x}$, and the square root ruins the polynomial.',
        },
      ],
    },
    {
      kind: 'expr',
      prompt: 'Evaluate $\\int \\cos^3 x\\,dx$.',
      label: '$\\int \\cos^3 x\\,dx =$',
      answer: 'sin(x) - sin(x)^3/3',
      answerTex: '\\sin x - \\frac{\\sin^3 x}{3}',
      upToConstant: true,
      hint: 'Save one $\\cos x$, write $\\cos^2 x = 1 - \\sin^2 x$, and let $u = \\sin x$.',
      explanation: '$\\int \\cos^3 x\\,dx = \\int (1 - \\sin^2 x)\\cos x\\,dx$. With $u = \\sin x$, $du = \\cos x\\,dx$: $\\int (1 - u^2)\\,du = u - \\frac{u^3}{3} = \\sin x - \\frac{\\sin^3 x}{3} + C$. Check: $\\frac{d}{dx} = \\cos x - \\sin^2 x\\cos x = \\cos x(1 - \\sin^2 x) = \\cos^3 x$. ✓',
    },
    {
      kind: 'truefalse',
      prompt: 'True or false: $\\int \\sin^2 x\\,dx = \\dfrac{\\sin^3 x}{3} + C$.',
      answer: false,
      explanation: 'The power rule only works when the derivative of the inside is present. Differentiating $\\frac{\\sin^3 x}{3}$ gives $\\sin^2 x\\cos x$, not $\\sin^2 x$ — the chain rule produces an extra $\\cos x$ that the integrand does not have. And with an **even** power there is no spare factor to save for $du$. Even powers need a different tool: the power-reducing identities on the next card.',
    },
    {
      kind: 'concept',
      title: 'Even powers: reduce the power',
      blocks: [
        {
          type: 'p',
          text: 'When every power is even, the save-one trick fails. Instead, use the [[power-reducing-formulas]] (rearranged [[double-angle-formulas]] for $\\cos 2x$) to trade a square for a first power of a double angle:',
        },
        {
          type: 'theorem',
          name: 'Power-reducing identities',
          tex: '\\sin^2 x = \\frac{1 - \\cos 2x}{2}, \\qquad \\cos^2 x = \\frac{1 + \\cos 2x}{2}',
          text: 'Both come from $\\cos 2x = 1 - 2\\sin^2 x = 2\\cos^2 x - 1$, solved for the square.',
        },
        {
          type: 'derivation',
          title: 'Evaluate $\\int \\sin^2 x\\,dx$',
          steps: [
            { tex: '\\int \\sin^2 x\\,dx = \\int \\frac{1 - \\cos 2x}{2}\\,dx', why: 'Power-reduce: the square becomes a first power of $\\cos 2x$.' },
            { tex: '= \\frac{1}{2}\\int 1\\,dx - \\frac{1}{2}\\int \\cos 2x\\,dx', why: 'Split into two basic integrals.' },
            { tex: '= \\frac{x}{2} - \\frac{1}{2}\\cdot\\frac{\\sin 2x}{2} + C', why: '$\\int \\cos 2x\\,dx = \\frac{1}{2}\\sin 2x$ — divide by the inner coefficient $2$ (a quick mental $u = 2x$).' },
            { tex: '= \\frac{x}{2} - \\frac{\\sin 2x}{4} + C', why: 'Simplify.' },
          ],
          result: '$\\int \\sin^2 x\\,dx = \\frac{x}{2} - \\frac{\\sin 2x}{4} + C$, and likewise $\\int \\cos^2 x\\,dx = \\frac{x}{2} + \\frac{\\sin 2x}{4} + C$.',
        },
        {
          type: 'graph',
          x: [-0.3, 6.6],
          y: [-0.4, 1.4],
          xStep: 'pi',
          functions: [
            { expr: 'sin(x)^2', label: '$y = \\sin^2 x$' },
            { expr: '(1 - cos(2x))/2', label: '$y = \\frac{1 - \\cos 2x}{2}$', color: 'orange', dashed: true },
          ],
          hlines: [{ y: 0.5, label: 'y = 1/2' }],
          areas: [{ expr: 'sin(x)^2', from: 0, to: 'b', color: 'blue' }],
          sliders: [{ name: 'b', min: 0.1, max: 6.28, step: 0.02, value: 3.14, label: '$b$' }],
          readouts: [
            { label: '$\\int_0^b \\sin^2 x\\,dx = \\frac{b}{2} - \\frac{\\sin 2b}{4} =$', expr: 'b/2 - sin(2b)/4', digits: 4 },
            { label: '$b/2 =$', expr: 'b/2', digits: 4 },
          ],
          caption: 'The dashed curve lies exactly on $\\sin^2 x$ — the identity is a true identity. $\\sin^2 x$ is a wave of height $1$ centred on $y = \\frac{1}{2}$, so over any whole number of half-periods the area is exactly $\\frac{b}{2}$.',
        },
        {
          type: 'p',
          text: 'Higher even powers need the identity more than once. Each application halves the power and doubles the angle.',
        },
        {
          type: 'derivation',
          title: 'Evaluate $\\int \\cos^4 x\\,dx$',
          steps: [
            { tex: '\\cos^4 x = \\left(\\frac{1 + \\cos 2x}{2}\\right)^2 = \\frac{1}{4}\\left(1 + 2\\cos 2x + \\cos^2 2x\\right)', why: 'Write $\\cos^4 x = (\\cos^2 x)^2$, power-reduce, and expand the square.' },
            { tex: '= \\frac{1}{4}\\left(1 + 2\\cos 2x + \\frac{1 + \\cos 4x}{2}\\right)', why: '$\\cos^2 2x$ is still an even power: power-reduce again with angle $2x$, giving angle $4x$.' },
            { tex: '= \\frac{3}{8} + \\frac{1}{2}\\cos 2x + \\frac{1}{8}\\cos 4x', why: 'Collect: $\\frac{1}{4}(1 + \\frac{1}{2}) = \\frac{3}{8}$, $\\frac{1}{4}\\cdot 2 = \\frac{1}{2}$, $\\frac{1}{4}\\cdot\\frac{1}{2} = \\frac{1}{8}$.' },
            { tex: '\\int \\cos^4 x\\,dx = \\frac{3x}{8} + \\frac{\\sin 2x}{4} + \\frac{\\sin 4x}{32} + C', why: 'Integrate term by term, dividing each sine by its inner coefficient.' },
          ],
          result: 'No powers remain — just a constant plus cosines of multiple angles.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Which sign goes with which?',
          text: 'Mixing up the identities is the classic error. Test at $x = 0$: $\\sin^2 0 = 0$, so its formula must give $\\frac{1 - 1}{2} = 0$ — the minus sign goes with **sine**. $\\cos^2 0 = 1 = \\frac{1 + 1}{2}$, so the plus sign goes with **cosine**.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'Evaluate $\\displaystyle\\int_0^{\\pi/2} \\cos^2 x\\,dx$.',
      label: '$\\int_0^{\\pi/2}\\cos^2 x\\,dx =$',
      answer: 'pi/4',
      answerTex: '\\frac{\\pi}{4}',
      hint: 'Use $\\cos^2 x = \\frac{1 + \\cos 2x}{2}$, and note $\\sin(2 \\cdot \\frac{\\pi}{2}) = \\sin \\pi = 0$.',
      explanation: '$\\int_0^{\\pi/2} \\frac{1 + \\cos 2x}{2}\\,dx = \\left[\\frac{x}{2} + \\frac{\\sin 2x}{4}\\right]_0^{\\pi/2} = \\left(\\frac{\\pi}{4} + \\frac{\\sin\\pi}{4}\\right) - 0 = \\frac{\\pi}{4}$. That is exactly half the width of the interval — the average value of $\\cos^2 x$ over a half-period is $\\frac{1}{2}$, just like $\\sin^2 x$ in the graph.',
    },
    {
      kind: 'error',
      prompt: 'A student evaluates $\\int \\cos^2 x\\,dx$. Tap the first line that is wrong.',
      lines: [
        '$\\int \\cos^2 x\\,dx = \\int \\frac{1 + \\cos 2x}{2}\\,dx$',
        '$= \\frac{x}{2} + \\frac{1}{2}\\int \\cos 2x\\,dx$',
        '$= \\frac{x}{2} + \\frac{1}{2}\\cdot 2\\sin 2x$',
        '$= \\frac{x}{2} + \\sin 2x + C$',
      ],
      errorLines: [3],
      explanation: 'Line 3 multiplies by the inner coefficient instead of dividing. Since $\\frac{d}{dx}\\sin 2x = 2\\cos 2x$, the antiderivative of $\\cos 2x$ is $\\frac{1}{2}\\sin 2x$. The correct result is $\\frac{x}{2} + \\frac{1}{2}\\cdot\\frac{\\sin 2x}{2} = \\frac{x}{2} + \\frac{\\sin 2x}{4} + C$. Differentiating the student\'s answer gives $\\frac{1}{2} + 2\\cos 2x$, which is not $\\cos^2 x$.',
    },
    {
      kind: 'concept',
      title: 'The full strategy for $\\sin^m x \\cos^n x$',
      blocks: [
        {
          type: 'p',
          text: 'Every integral $\\int \\sin^m x\\cos^n x\\,dx$ (with whole-number powers) falls into one of three cases. Check the parity of the powers before doing anything else:',
        },
        {
          type: 'table',
          headers: ['Case', 'Save', 'Convert the rest using', 'Substitute'],
          rows: [
            ['$n$ (cosine power) odd', 'one $\\cos x$', '$\\cos^2 x = 1 - \\sin^2 x$', '$u = \\sin x$'],
            ['$m$ (sine power) odd', 'one $\\sin x$', '$\\sin^2 x = 1 - \\cos^2 x$', '$u = \\cos x$'],
            ['both even', 'nothing', '$\\sin^2 x = \\frac{1 - \\cos 2x}{2}$, $\\cos^2 x = \\frac{1 + \\cos 2x}{2}$', 'repeat as needed'],
          ],
          caption: 'If both powers are odd, either of the first two rows works — saving from the smaller power is usually less work.',
        },
        {
          type: 'derivation',
          title: 'Evaluate $\\int \\sin^4 x\\cos^5 x\\,dx$',
          steps: [
            { tex: '= \\int \\sin^4 x\\,(\\cos^2 x)^2 \\cos x\\,dx', why: 'The cosine power $5$ is odd: save one $\\cos x$, leaving $\\cos^4 x = (\\cos^2 x)^2$.' },
            { tex: '= \\int \\sin^4 x\\,(1 - \\sin^2 x)^2\\cos x\\,dx', why: 'Convert to sines.' },
            { tex: '= \\int u^4(1 - 2u^2 + u^4)\\,du', why: '$u = \\sin x$, $du = \\cos x\\,dx$; expand $(1 - u^2)^2$.' },
            { tex: '= \\int (u^4 - 2u^6 + u^8)\\,du = \\frac{u^5}{5} - \\frac{2u^7}{7} + \\frac{u^9}{9} + C', why: 'Distribute and integrate each power.' },
            { tex: '= \\frac{\\sin^5 x}{5} - \\frac{2\\sin^7 x}{7} + \\frac{\\sin^9 x}{9} + C', why: 'Back-substitute $u = \\sin x$.' },
          ],
          result: 'Big powers, but only routine algebra once the strategy is chosen.',
        },
        {
          type: 'p',
          text: 'With both powers even, a handy shortcut is $\\sin x\\cos x = \\frac{1}{2}\\sin 2x$. For example $\\sin^2 x\\cos^2 x = \\frac{1}{4}\\sin^2 2x = \\frac{1}{8}(1 - \\cos 4x)$, so $\\int \\sin^2 x\\cos^2 x\\,dx = \\frac{x}{8} - \\frac{\\sin 4x}{32} + C$.',
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'Instructors grade the *strategy* as much as the answer. Write one line such as "cosine power odd: save $\\cos x$, $u = \\sin x$" before you start. And a definite trig integral is a gift for checking: many have simple exact values, so a wildly irrational result usually means a dropped coefficient.',
        },
      ],
    },
    {
      kind: 'mcq',
      prompt: 'Which first move turns $\\int \\sin^3 x\\cos^4 x\\,dx$ into a polynomial integral?',
      options: [
        {
          text: 'Save one $\\cos x$, write the rest in terms of $\\sin x$, and let $u = \\sin x$',
          why: 'After saving one cosine, $\\cos^3 x$ is left — an odd power. Writing it in sines needs $\\sqrt{1 - \\sin^2 x}$, so the integrand is not a polynomial in $u$.',
        },
        {
          text: 'Save one $\\sin x$, write $\\sin^2 x = 1 - \\cos^2 x$, and let $u = \\cos x$',
          correct: true,
          why: 'The sine power $3$ is odd. The leftover $\\sin^2 x$ converts cleanly, giving $-\\int (1 - u^2)u^4\\,du$.',
        },
        {
          text: 'Apply the power-reducing identities to both factors',
          why: 'Power reduction is for when *both* powers are even. With $\\sin^3 x$ you would be left with a stray $\\sin x$ multiplying cosines of multiple angles — messier, not simpler.',
        },
        {
          text: 'Integrate by parts with $u = \\cos^4 x$',
          why: 'Parts is not needed; it produces new mixed products of the same kind. The odd sine power already gives a one-line substitution.',
        },
      ],
      explanation: 'Look for the odd power. Here it is $\\sin^3 x$: $\\int \\sin^2 x\\cos^4 x \\sin x\\,dx = -\\int (1 - u^2)u^4\\,du = -\\frac{u^5}{5} + \\frac{u^7}{7} + C = -\\frac{\\cos^5 x}{5} + \\frac{\\cos^7 x}{7} + C$.',
    },
    {
      kind: 'concept',
      title: 'Powers of tangent and secant',
      blocks: [
        {
          type: 'p',
          text: 'Tangent and secant form a similar partnership, built on two derivatives and one identity:',
        },
        {
          type: 'math',
          tex: '\\frac{d}{dx}\\tan x = \\sec^2 x, \\qquad \\frac{d}{dx}\\sec x = \\sec x\\tan x, \\qquad \\tan^2 x = \\sec^2 x - 1',
          caption: 'The identity is $\\sin^2 x + \\cos^2 x = 1$ divided by $\\cos^2 x$.',
        },
        {
          type: 'p',
          text: 'So for $\\int \\tan^m x\\sec^n x\\,dx$ there are two good plans. If the **secant power is even**, save $\\sec^2 x$ for $du$ with $u = \\tan x$, and convert the remaining (even) secants with $\\sec^2 x = 1 + \\tan^2 x$. If the **tangent power is odd**, save $\\sec x\\tan x$ for $du$ with $u = \\sec x$, and convert the remaining (even) tangents with $\\tan^2 x = \\sec^2 x - 1$.',
        },
        {
          type: 'derivation',
          title: 'Secant power even: $\\int \\tan^2 x\\sec^4 x\\,dx$',
          steps: [
            { tex: '= \\int \\tan^2 x\\,\\sec^2 x \\cdot \\sec^2 x\\,dx', why: 'Save one $\\sec^2 x$ — it will be $du$ for $u = \\tan x$.' },
            { tex: '= \\int \\tan^2 x\\,(1 + \\tan^2 x)\\sec^2 x\\,dx', why: 'Convert the other $\\sec^2 x$ to tangents.' },
            { tex: '= \\int (u^2 + u^4)\\,du', why: '$u = \\tan x$, $du = \\sec^2 x\\,dx$.' },
            { tex: '= \\frac{\\tan^3 x}{3} + \\frac{\\tan^5 x}{5} + C', why: 'Power rule and back-substitution.' },
          ],
          result: 'A polynomial in $\\tan x$.',
        },
        {
          type: 'derivation',
          title: 'Tangent power odd: $\\int \\tan^3 x\\sec x\\,dx$',
          steps: [
            { tex: '= \\int \\tan^2 x \\cdot \\sec x\\tan x\\,dx', why: 'Save $\\sec x\\tan x$ — it will be $du$ for $u = \\sec x$.' },
            { tex: '= \\int (\\sec^2 x - 1)\\sec x\\tan x\\,dx', why: 'Convert the leftover even power of tangent to secants.' },
            { tex: '= \\int (u^2 - 1)\\,du = \\frac{u^3}{3} - u + C', why: '$u = \\sec x$, $du = \\sec x\\tan x\\,dx$.' },
            { tex: '= \\frac{\\sec^3 x}{3} - \\sec x + C', why: 'Back-substitute.' },
          ],
          result: 'Here the secant power was odd, so the first plan was unavailable — but the odd tangent power rescued us.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why these are the only two plans',
          text: 'A substitution needs its $du$ to be sitting in the integrand. The only "free" derivatives available are $\\sec^2 x$ (for $u = \\tan x$) and $\\sec x\\tan x$ (for $u = \\sec x$). Plan 1 needs everything else written in tangents, which works when the leftover secant power is even. Plan 2 needs everything else in secants, which works when the leftover tangent power is even — that is, the original tangent power was odd. When neither holds (even tangent power, odd secant power, like $\\int \\sec^3 x\\,dx$), you need integration by parts instead.',
        },
      ],
    },
    {
      kind: 'expr',
      prompt: 'Evaluate $\\int \\sec^4 x\\,dx$.',
      label: '$\\int \\sec^4 x\\,dx =$',
      answer: 'tan(x) + tan(x)^3/3',
      answerTex: '\\tan x + \\frac{\\tan^3 x}{3}',
      upToConstant: true,
      domain: [-1, 1],
      hint: 'The secant power is even. Save $\\sec^2 x$ and write the other $\\sec^2 x$ as $1 + \\tan^2 x$.',
      explanation: '$\\int \\sec^2 x \\cdot \\sec^2 x\\,dx = \\int (1 + \\tan^2 x)\\sec^2 x\\,dx$. With $u = \\tan x$: $\\int (1 + u^2)\\,du = u + \\frac{u^3}{3} = \\tan x + \\frac{\\tan^3 x}{3} + C$. Check: the derivative is $\\sec^2 x + \\tan^2 x\\sec^2 x = \\sec^2 x(1 + \\tan^2 x) = \\sec^4 x$. ✓',
    },
    {
      kind: 'fill',
      prompt: 'Complete the strategy for $\\int \\tan^m x \\sec^n x\\,dx$ when the tangent power $m$ is odd.',
      template: 'Save a factor of ___ for $du$, use the substitution $u =$ ___, and convert the remaining tangents with $\\tan^2 x = \\sec^2 x - 1$.',
      blanks: [{ answers: ['$\\sec x\\tan x$'] }, { answers: ['$\\sec x$'] }],
      wordBank: ['$\\sec x\\tan x$', '$\\sec x$', '$\\sec^2 x$', '$\\tan x$', '$\\cos x$'],
      explanation: 'Because $\\frac{d}{dx}\\sec x = \\sec x\\tan x$, saving that product supplies $du$ for $u = \\sec x$. Removing one tangent from an odd power leaves an even power, which converts entirely to secants. (Saving $\\sec^2 x$ with $u = \\tan x$ is the plan for an **even secant** power.)',
    },
    {
      kind: 'concept',
      title: 'The lone tangent and the lone secant',
      blocks: [
        {
          type: 'p',
          text: 'Two first-power integrals underlie everything above and are worth memorising. The tangent one is a quick substitution:',
        },
        {
          type: 'math',
          tex: '\\int \\tan x\\,dx = \\int \\frac{\\sin x}{\\cos x}\\,dx = -\\ln|\\cos x| + C = \\ln|\\sec x| + C',
          caption: 'Let $u = \\cos x$, $du = -\\sin x\\,dx$. Then $-\\ln|\\cos x| = \\ln|\\cos x|^{-1} = \\ln|\\sec x|$.',
        },
        {
          type: 'p',
          text: 'The secant integral needs an inspired trick: multiply by a cleverly chosen form of $1$ so that the numerator becomes the derivative of the denominator.',
        },
        {
          type: 'derivation',
          title: 'Evaluate $\\int \\sec x\\,dx$',
          steps: [
            { tex: '\\int \\sec x\\,dx = \\int \\sec x\\cdot\\frac{\\sec x + \\tan x}{\\sec x + \\tan x}\\,dx', why: 'Multiply by $1$ in disguise. The reason will become clear in one line.' },
            { tex: '= \\int \\frac{\\sec^2 x + \\sec x\\tan x}{\\sec x + \\tan x}\\,dx', why: 'Distribute $\\sec x$ across the numerator.' },
            { tex: 'u = \\sec x + \\tan x, \\quad du = (\\sec x\\tan x + \\sec^2 x)\\,dx', why: 'The numerator is *exactly* the derivative of the denominator. That is the point of the trick.' },
            { tex: '= \\int \\frac{du}{u} = \\ln|u| + C = \\ln|\\sec x + \\tan x| + C', why: 'The integral of $\\frac{1}{u}$ is $\\ln|u|$.' },
          ],
          result: '$\\int \\sec x\\,dx = \\ln|\\sec x + \\tan x| + C$.',
        },
        {
          type: 'p',
          text: 'With these two in hand: $\\int \\tan^2 x\\,dx = \\int (\\sec^2 x - 1)\\,dx = \\tan x - x + C$, and $\\int \\sec^3 x\\,dx$ yields to integration by parts ($u = \\sec x$, $dv = \\sec^2 x\\,dx$) plus the loop trick from the previous lesson:',
        },
        {
          type: 'math',
          tex: '\\int \\sec^3 x\\,dx = \\frac{1}{2}\\left(\\sec x\\tan x + \\ln|\\sec x + \\tan x|\\right) + C',
        },
        {
          type: 'callout',
          variant: 'history',
          title: 'A formula from mapmakers',
          text: 'The integral of $\\sec x$ was needed long before anyone could derive it. On a Mercator map (1569), the height of latitude $\\varphi$ above the equator is proportional to $\\int_0^{\\varphi}\\sec t\\,dt$, and navigators computed it by adding up tables of secants — a Riemann sum! The closed form was spotted from those tables in the 1640s and proved by James Gregory and Isaac Barrow around 1670.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'Evaluate $\\displaystyle\\int_0^{\\pi/4} \\tan x\\,dx$. Give an exact answer or a decimal.',
      label: '$\\int_0^{\\pi/4}\\tan x\\,dx =$',
      answer: 'ln(2)/2',
      answerTex: '\\tfrac{1}{2}\\ln 2 \\approx 0.3466',
      hint: 'Use $\\int \\tan x\\,dx = \\ln|\\sec x|$. What is $\\sec\\frac{\\pi}{4}$?',
      explanation: '$\\ln|\\sec x|\\Big|_0^{\\pi/4} = \\ln\\sqrt{2} - \\ln 1 = \\ln 2^{1/2} = \\frac{1}{2}\\ln 2 \\approx 0.3466$. (Equivalently $-\\ln|\\cos x|\\Big|_0^{\\pi/4} = -\\ln\\frac{\\sqrt 2}{2} = \\frac{1}{2}\\ln 2$.)',
    },
    {
      kind: 'concept',
      title: 'Products of different frequencies',
      blocks: [
        {
          type: 'p',
          text: 'Integrals like $\\int \\sin 3x\\cos 2x\\,dx$ mix two different angles, so none of the strategies above apply. Instead, the product-to-sum identities convert a product into a sum of single sines or cosines:',
        },
        {
          type: 'theorem',
          name: 'Product-to-sum identities',
          tex: '\\begin{aligned} \\sin A\\cos B &= \\tfrac{1}{2}\\left[\\sin(A - B) + \\sin(A + B)\\right] \\\\ \\sin A\\sin B &= \\tfrac{1}{2}\\left[\\cos(A - B) - \\cos(A + B)\\right] \\\\ \\cos A\\cos B &= \\tfrac{1}{2}\\left[\\cos(A - B) + \\cos(A + B)\\right] \\end{aligned}',
          text: 'Each follows by adding or subtracting two [[sum-and-difference-formulas]], e.g. $\\sin(A+B) + \\sin(A-B) = 2\\sin A\\cos B$.',
        },
        {
          type: 'derivation',
          title: 'Evaluate $\\int \\sin 3x\\cos 2x\\,dx$',
          steps: [
            { tex: '\\sin 3x\\cos 2x = \\tfrac{1}{2}\\left[\\sin x + \\sin 5x\\right]', why: 'First identity with $A = 3x$, $B = 2x$: $A - B = x$, $A + B = 5x$.' },
            { tex: '\\int \\sin 3x\\cos 2x\\,dx = \\tfrac{1}{2}\\int \\sin x\\,dx + \\tfrac{1}{2}\\int \\sin 5x\\,dx', why: 'Now each piece is a single sine.' },
            { tex: '= -\\tfrac{1}{2}\\cos x - \\tfrac{1}{10}\\cos 5x + C', why: '$\\int \\sin 5x\\,dx = -\\frac{1}{5}\\cos 5x$, then multiply by $\\frac{1}{2}$.' },
          ],
          result: '$\\int \\sin 3x\\cos 2x\\,dx = -\\frac{1}{2}\\cos x - \\frac{1}{10}\\cos 5x + C$.',
        },
        {
          type: 'graph',
          x: [-3.3, 3.3],
          y: [-1.2, 1.2],
          xStep: 'pi',
          functions: [{ expr: 'sin(x) sin(n x)', label: '$y = \\sin x\\,\\sin(nx)$' }],
          areas: [{ expr: 'sin(x) sin(n x)', from: '-pi', to: 'pi', color: 'teal' }],
          sliders: [{ name: 'n', min: 1, max: 6, step: 1, value: 2, label: '$n$' }],
          caption: 'Over $[-\\pi, \\pi]$, the positive and negative areas cancel exactly for every whole number $n \\ne 1$: $\\int_{-\\pi}^{\\pi}\\sin x\\sin(nx)\\,dx = 0$. Only $n = 1$ (that is, $\\sin^2 x$) gives a non-zero area, $\\pi$.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Why audio engines care',
          text: 'That cancellation — sines of different whole-number frequencies integrate to $0$ against each other — is called **orthogonality**, and it is the engine of Fourier analysis. To measure how much of frequency $n$ is in a sound wave, multiply the wave by $\\sin(nx)$ and integrate: every other frequency cancels out. Every spectrum analyser, equaliser, MP3 encoder and procedural audio synth in a game engine is built on product-to-sum identities like these.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'Evaluate $\\displaystyle\\int_0^{\\pi/2} \\sin 3x\\cos x\\,dx$.',
      label: '$\\int_0^{\\pi/2}\\sin 3x\\cos x\\,dx =$',
      answer: '1/2',
      answerTex: '\\frac{1}{2}',
      hint: '$\\sin 3x\\cos x = \\frac{1}{2}[\\sin 2x + \\sin 4x]$.',
      explanation: 'By product-to-sum, the integral is $\\frac{1}{2}\\left[-\\frac{\\cos 2x}{2} - \\frac{\\cos 4x}{4}\\right]_0^{\\pi/2}$. At $\\frac{\\pi}{2}$: $-\\frac{\\cos\\pi}{2} - \\frac{\\cos 2\\pi}{4} = \\frac{1}{2} - \\frac{1}{4} = \\frac{1}{4}$. At $0$: $-\\frac{1}{2} - \\frac{1}{4} = -\\frac{3}{4}$. Difference: $\\frac{1}{4} + \\frac{3}{4} = 1$, times $\\frac{1}{2}$ gives $\\frac{1}{2}$.',
    },
  ],
  takeaways: [
    'For $\\int \\sin^m x\\cos^n x\\,dx$ with an odd power: save one factor of that function, convert the even remainder with $\\sin^2 x + \\cos^2 x = 1$, and substitute.',
    'With both powers even, power-reduce: $\\sin^2 x = \\frac{1 - \\cos 2x}{2}$, $\\cos^2 x = \\frac{1 + \\cos 2x}{2}$, repeating as needed.',
    'For $\\int \\tan^m x\\sec^n x\\,dx$: even secant power → save $\\sec^2 x$, $u = \\tan x$; odd tangent power → save $\\sec x\\tan x$, $u = \\sec x$.',
    '$\\int \\tan x\\,dx = \\ln|\\sec x| + C$ and $\\int \\sec x\\,dx = \\ln|\\sec x + \\tan x| + C$.',
    'Products of different angles become sums via product-to-sum identities; sines of different whole-number frequencies are orthogonal on $[-\\pi, \\pi]$.',
  ],
  reading: [
    {
      title: 'OpenStax Calculus Volume 2 — 3.2 Trigonometric Integrals',
      url: 'https://openstax.org/books/calculus-volume-2/pages/3-2-trigonometric-integrals',
      source: 'openstax',
      note: 'The same case-by-case strategy with many more examples and exercises.',
    },
    {
      title: "Paul's Online Notes — Integrals Involving Trig Functions",
      url: 'https://tutorial.math.lamar.edu/Classes/CalcII/IntegralsWithTrig.aspx',
      source: 'paul',
      note: 'Careful walk-throughs of every sine/cosine and tangent/secant case, including the awkward ones.',
    },
    {
      title: 'Wikipedia — Integral of the secant function',
      url: 'https://en.wikipedia.org/wiki/Integral_of_the_secant_function',
      source: 'wikipedia',
      note: 'Several derivations of the secant integral and the full story of its connection to the Mercator projection.',
    },
  ],
};
