import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'calc1-trig-derivatives',
  title: 'Derivatives of Trig Functions',
  summary: 'Prove that the derivative of $\\sin x$ is $\\cos x$ from the limit definition, then get the other five trig derivatives almost for free.',
  minutes: 18,
  objectives: [
    'Recall the two key trig limits and why they require radians',
    'Derive $\\frac{d}{dx}\\sin x = \\cos x$ and $\\frac{d}{dx}\\cos x = -\\sin x$ from the definition',
    'Use the quotient rule to find the derivatives of $\\tan x$, $\\sec x$, $\\csc x$ and $\\cot x$',
    'Combine trig derivatives with the power, product and quotient rules',
    'Compute higher derivatives of $\\sin x$ and $\\cos x$ using their four-step cycle',
  ],
  steps: [
    {
      kind: 'concept',
      title: 'A guess from the graph',
      blocks: [
        {
          type: 'p',
          text: 'Before any algebra, look at the slope of $y = \\sin x$. At $x = 0$ the curve climbs at its steepest. At $x = \\frac{\\pi}{2}$ it is at the top of a hill, so the slope is $0$. At $x = \\pi$ it falls most steeply. Plot those slopes and they trace out a wave that starts at $1$, drops to $0$, then to $-1$ — which looks suspiciously like $\\cos x$.',
        },
        {
          type: 'graph',
          x: [-6.5, 6.5],
          y: [-1.8, 1.8],
          xStep: 'pi',
          functions: [
            { expr: 'sin(x)', label: '$y = \\sin x$' },
            { expr: 'cos(x)', label: '$y = \\cos x$', color: 'green', dashed: true },
          ],
          tangents: [{ expr: 'sin(x)', at: 'a' }],
          points: [
            { x: 'a', y: 'sin(a)' },
            { x: 'a', y: 'cos(a)', color: 'green' },
          ],
          sliders: [{ name: 'a', min: -6.2, max: 6.2, step: 0.02, value: 0.8, label: '$a$' }],
          readouts: [
            { label: 'numerical slope of $\\sin$ at $a$:', expr: '(sin(a + 0.00001) - sin(a))/0.00001', digits: 4 },
            { label: '$\\cos a =$', expr: 'cos(a)', digits: 4 },
          ],
          caption: 'Slide $a$ anywhere: the slope of the sine curve (computed from a tiny secant) matches the height of the dashed cosine curve. Now we prove it.',
        },
        {
          type: 'p',
          text: 'Throughout this lesson $x$ is measured in **[[radian|radians]]**. That is not a convention we can drop — the formulas are only true in radians, and we will see exactly where that enters.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why this matters beyond the exam',
          text: 'Anything that oscillates — springs, sound waves, alternating current, a bobbing pickup item in a game, a camera shake — is modelled with sines and cosines. Knowing their derivatives lets you go from position to velocity to acceleration for all of them.',
        },
      ],
    },
    {
      kind: 'concept',
      title: 'The two limits that do the work',
      blocks: [
        {
          type: 'p',
          text: 'In the lesson on the [[squeeze-theorem]] you established two limits. They are the only "new" ingredients we need:',
        },
        {
          type: 'math',
          tex: '\\lim_{h \\to 0} \\frac{\\sin h}{h} = 1 \\qquad\\qquad \\lim_{h \\to 0} \\frac{\\cos h - 1}{h} = 0',
          caption: 'Both limits are of the indeterminate form $\\frac{0}{0}$; both hold when $h$ is in radians.',
        },
        {
          type: 'table',
          headers: ['$h$ (radians)', '$\\frac{\\sin h}{h}$', '$\\frac{\\cos h - 1}{h}$'],
          rows: [
            ['$0.5$', '$0.958851$', '$-0.244835$'],
            ['$0.1$', '$0.998334$', '$-0.049958$'],
            ['$0.01$', '$0.999983$', '$-0.005000$'],
            ['$0.001$', '$0.99999983$', '$-0.0005000$'],
          ],
          caption: 'The numbers agree: the first column of values approaches $1$, the second approaches $0$.',
        },
        {
          type: 'derivation',
          title: 'Recap: the cosine limit from the sine limit',
          steps: [
            { tex: '\\frac{\\cos h - 1}{h} = \\frac{(\\cos h - 1)(\\cos h + 1)}{h(\\cos h + 1)}', why: 'Multiply top and bottom by the conjugate $\\cos h + 1$ (which is near $2$, so not zero, for small $h$).' },
            { tex: '= \\frac{\\cos^2 h - 1}{h(\\cos h + 1)} = \\frac{-\\sin^2 h}{h(\\cos h + 1)}', why: 'Difference of squares, then the Pythagorean identity $\\cos^2 h - 1 = -\\sin^2 h$.' },
            { tex: '= -\\frac{\\sin h}{h} \\cdot \\frac{\\sin h}{\\cos h + 1}', why: 'Split into a product of two factors whose limits we know.' },
            { tex: '\\to -1 \\cdot \\frac{0}{2} = 0', why: 'As $h \\to 0$: $\\frac{\\sin h}{h} \\to 1$, $\\sin h \\to 0$ and $\\cos h + 1 \\to 2$.' },
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Radians are where the "1" comes from',
          text: 'The limit $\\frac{\\sin h}{h} \\to 1$ comes from comparing the arc length $h$ with the height $\\sin h$ on the unit circle; arc length equals angle *only* in radians. If $h$ were in degrees, $\\frac{\\sin h^\\circ}{h} \\to \\frac{\\pi}{180}$ instead, and that ugly factor would infect every formula in this lesson.',
        },
      ],
    },
    {
      kind: 'concept',
      title: 'Proving $\\sin\' = \\cos$ and $\\cos\' = -\\sin$',
      blocks: [
        {
          type: 'p',
          text: 'The strategy: write the difference quotient, expand $\\sin(x + h)$ with the [[sum-and-difference-formulas|angle-addition formula]], and regroup so the two special limits appear.',
        },
        {
          type: 'derivation',
          title: 'The derivative of $\\sin x$',
          steps: [
            { tex: '\\frac{d}{dx}\\sin x = \\lim_{h \\to 0} \\frac{\\sin(x + h) - \\sin x}{h}', why: 'The limit definition of the derivative.' },
            { tex: '= \\lim_{h \\to 0} \\frac{\\sin x \\cos h + \\cos x \\sin h - \\sin x}{h}', why: 'Angle addition: $\\sin(x + h) = \\sin x \\cos h + \\cos x \\sin h$.' },
            { tex: '= \\lim_{h \\to 0} \\left[ \\sin x \\cdot \\frac{\\cos h - 1}{h} + \\cos x \\cdot \\frac{\\sin h}{h} \\right]', why: 'Group the two $\\sin x$ terms and factor; what remains are exactly our two special quotients.' },
            { tex: '= \\sin x \\cdot 0 + \\cos x \\cdot 1', why: '$\\sin x$ and $\\cos x$ do not depend on $h$, so they act as constants; apply the two special limits.' },
            { tex: '= \\cos x', why: 'Simplify.' },
          ],
          result: '$\\frac{d}{dx}\\sin x = \\cos x$ for every real $x$.',
        },
        {
          type: 'derivation',
          title: 'The derivative of $\\cos x$',
          steps: [
            { tex: '\\frac{d}{dx}\\cos x = \\lim_{h \\to 0} \\frac{\\cos x \\cos h - \\sin x \\sin h - \\cos x}{h}', why: 'Definition, with $\\cos(x + h) = \\cos x \\cos h - \\sin x \\sin h$. Note the minus sign in this addition formula.' },
            { tex: '= \\lim_{h \\to 0} \\left[ \\cos x \\cdot \\frac{\\cos h - 1}{h} - \\sin x \\cdot \\frac{\\sin h}{h} \\right]', why: 'Same regrouping as before.' },
            { tex: '= \\cos x \\cdot 0 - \\sin x \\cdot 1 = -\\sin x', why: 'Apply the special limits.' },
          ],
          result: '$\\frac{d}{dx}\\cos x = -\\sin x$. The minus sign is real: just to the right of $x = 0$, cosine is decreasing from its peak.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Check signs with the graph',
          text: 'Forgot whether the minus goes with $\\cos$ or $\\sin$? Picture $\\cos x$ just after $x = 0$: it is coming *down* from $1$, so its slope there must be negative. $-\\sin x$ is negative for small positive $x$; $+\\sin x$ is not. That one picture settles it.',
        },
      ],
    },
    {
      kind: 'order',
      prompt: 'Put the steps of the proof that $\\frac{d}{dx}\\sin x = \\cos x$ in order.',
      lines: [
        'Write $\\dfrac{\\sin(x + h) - \\sin x}{h}$',
        'Expand with $\\sin(x+h) = \\sin x \\cos h + \\cos x \\sin h$',
        'Regroup as $\\sin x \\cdot \\dfrac{\\cos h - 1}{h} + \\cos x \\cdot \\dfrac{\\sin h}{h}$',
        'Use $\\dfrac{\\cos h - 1}{h} \\to 0$ and $\\dfrac{\\sin h}{h} \\to 1$',
        'Conclude the limit is $\\cos x$',
      ],
      distractors: ['Use $\\sin(x + h) = \\sin x + \\sin h$'],
      explanation: 'Expand, regroup, apply the two special limits. The distractor is a classic false identity: sine is not additive. (Test it: $\\sin(\\frac{\\pi}{2} + \\frac{\\pi}{2}) = \\sin\\pi = 0$, but $\\sin\\frac{\\pi}{2} + \\sin\\frac{\\pi}{2} = 2$.)',
    },
    {
      kind: 'numeric',
      prompt: 'Let $f(x) = 3\\sin x - 2\\cos x$. Find $f\'\\!\\left(\\frac{\\pi}{3}\\right)$ exactly or as a decimal.',
      hint: '$f\'(x) = 3\\cos x + 2\\sin x$. Use $\\cos\\frac{\\pi}{3} = \\frac{1}{2}$ and $\\sin\\frac{\\pi}{3} = \\frac{\\sqrt{3}}{2}$.',
      label: "$f'(\\pi/3) =$",
      answer: '3/2 + sqrt(3)',
      answerTex: '\\frac{3}{2} + \\sqrt{3} \\approx 3.23',
      explanation: 'Differentiate term by term: $\\frac{d}{dx}3\\sin x = 3\\cos x$ and $\\frac{d}{dx}(-2\\cos x) = -2(-\\sin x) = +2\\sin x$. So $f\'(\\frac{\\pi}{3}) = 3 \\cdot \\frac{1}{2} + 2 \\cdot \\frac{\\sqrt{3}}{2} = \\frac{3}{2} + \\sqrt{3} \\approx 3.232$. Watch the double negative on the cosine term — it is the most common slip here.',
    },
    {
      kind: 'concept',
      title: 'The other four, via the quotient rule',
      blocks: [
        {
          type: 'p',
          text: 'Every other trig function is a quotient of sine and cosine, so the quotient rule finishes the job. Here is tangent in full:',
        },
        {
          type: 'derivation',
          title: 'The derivative of $\\tan x$',
          steps: [
            { tex: '\\frac{d}{dx}\\tan x = \\frac{d}{dx}\\frac{\\sin x}{\\cos x}', why: 'Quotient identity.' },
            { tex: '= \\frac{\\cos x \\cdot \\cos x - \\sin x \\cdot (-\\sin x)}{\\cos^2 x}', why: 'Quotient rule: (derivative of top)(bottom) minus (top)(derivative of bottom), over bottom squared.' },
            { tex: '= \\frac{\\cos^2 x + \\sin^2 x}{\\cos^2 x}', why: 'The two minus signs make a plus.' },
            { tex: '= \\frac{1}{\\cos^2 x} = \\sec^2 x', why: 'Pythagorean identity in the numerator, then the reciprocal identity $\\sec x = \\frac{1}{\\cos x}$.' },
          ],
          result: '$\\frac{d}{dx}\\tan x = \\sec^2 x$, wherever $\\cos x \\ne 0$.',
        },
        {
          type: 'derivation',
          title: 'The derivative of $\\sec x$',
          steps: [
            { tex: '\\frac{d}{dx}\\frac{1}{\\cos x} = \\frac{0 \\cdot \\cos x - 1 \\cdot (-\\sin x)}{\\cos^2 x}', why: 'Quotient rule with top $1$ (derivative $0$) and bottom $\\cos x$.' },
            { tex: '= \\frac{\\sin x}{\\cos^2 x} = \\frac{1}{\\cos x} \\cdot \\frac{\\sin x}{\\cos x} = \\sec x \\tan x', why: 'Split the fraction to recognise $\\sec x$ and $\\tan x$.' },
          ],
        },
        {
          type: 'table',
          headers: ['$f(x)$', '$f\'(x)$', '$f(x)$', '$f\'(x)$'],
          rows: [
            ['$\\sin x$', '$\\cos x$', '$\\cos x$', '$-\\sin x$'],
            ['$\\tan x$', '$\\sec^2 x$', '$\\cot x$', '$-\\csc^2 x$'],
            ['$\\sec x$', '$\\sec x \\tan x$', '$\\csc x$', '$-\\csc x \\cot x$'],
          ],
          caption: 'All six. The right-hand column is the left-hand column with every function swapped for its "co-" partner and a minus sign added.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Memorise three, get six',
          text: 'Learn the left column. For the right column, swap each function with its co-function ($\\sin \\leftrightarrow \\cos$, $\\tan \\leftrightarrow \\cot$, $\\sec \\leftrightarrow \\csc$) and put a minus sign in front. Every derivative of a **co**-function is **negative**.',
        },
        {
          type: 'graph',
          x: [-1.7, 1.7],
          y: [-6, 6],
          functions: [{ expr: 'tan(x)', label: '$y = \\tan x$', domain: [-1.45, 1.45] }],
          tangents: [{ expr: 'tan(x)', at: 'a' }],
          vlines: [{ x: '-pi/2', label: 'x = −π/2' }, { x: 'pi/2', label: 'x = π/2' }],
          sliders: [{ name: 'a', min: -1.3, max: 1.3, step: 0.01, value: 0.785, label: '$a$' }],
          readouts: [{ label: '$\\sec^2 a =$', expr: 'sec(a)^2', digits: 4 }],
          caption: 'Tangent is always increasing: its slope $\\sec^2 a$ is never less than $1$ (the slope at $a = 0$) and blows up near the asymptotes.',
        },
      ],
    },
    {
      kind: 'fill',
      prompt: 'Complete the trig derivative table.',
      template: '$\\frac{d}{dx}\\sec x =$ ___, $\\;\\frac{d}{dx}\\csc x =$ ___, and $\\frac{d}{dx}\\cot x =$ ___.',
      blanks: [{ answers: ['$\\sec x \\tan x$'] }, { answers: ['$-\\csc x \\cot x$'] }, { answers: ['$-\\csc^2 x$'] }],
      wordBank: ['$\\sec x \\tan x$', '$-\\csc x \\cot x$', '$-\\csc^2 x$', '$\\sec^2 x$', '$\\csc x \\cot x$', '$\\tan^2 x$'],
      explanation: '$\\sec\' = \\sec\\tan$ comes from the quotient rule on $\\frac{1}{\\cos x}$. Swapping to co-functions and adding a minus gives $\\csc\' = -\\csc\\cot$. Likewise $\\tan\' = \\sec^2$ becomes $\\cot\' = -\\csc^2$. The chips without minus signs are the classic error for co-functions.',
    },
    {
      kind: 'mcq',
      prompt: 'What is the slope of the tangent line to $y = \\tan x$ at $x = \\frac{\\pi}{4}$?',
      options: [
        { text: '$1$', why: 'That is $\\tan\\frac{\\pi}{4}$, the *height* of the graph, not its slope.' },
        { text: '$\\sqrt{2}$', why: 'That is $\\sec\\frac{\\pi}{4}$. The derivative is $\\sec^2 x$ — the square was dropped.' },
        { text: '$2$', correct: true, why: '$\\sec^2\\frac{\\pi}{4} = \\left(\\sqrt{2}\\right)^2 = 2$.' },
        { text: '$\\frac{1}{2}$', why: 'That is $\\cos^2\\frac{\\pi}{4}$ — the reciprocal of the right answer. Remember $\\sec x = \\frac{1}{\\cos x}$.' },
      ],
      explanation: 'The slope is $\\frac{d}{dx}\\tan x$ evaluated at $\\frac{\\pi}{4}$: $\\sec^2\\frac{\\pi}{4} = \\frac{1}{\\cos^2(\\pi/4)} = \\frac{1}{(\\sqrt{2}/2)^2} = \\frac{1}{1/2} = 2$. On the graph above, set $a \\approx 0.785$ and read it off.',
    },
    {
      kind: 'concept',
      title: 'Mixing trig with the other rules',
      blocks: [
        {
          type: 'p',
          text: 'Trig derivatives slot into the product and quotient rules like any others. Often a trig identity tidies the result dramatically — look for $\\sin^2 x + \\cos^2 x$ hiding in your answer.',
        },
        {
          type: 'derivation',
          title: 'Differentiate $x \\sin x$',
          steps: [
            { tex: "\\frac{d}{dx}[x \\sin x] = (1)\\sin x + x \\cos x", why: 'Product rule with $f = x$, $g = \\sin x$.' },
            { tex: '= \\sin x + x\\cos x', why: 'Simplify. Notice it is **not** $\\cos x$ (which would be "$f\'g\'$").' },
          ],
        },
        {
          type: 'derivation',
          title: 'Differentiate $\\dfrac{\\sin x}{1 + \\cos x}$',
          steps: [
            { tex: '\\frac{\\cos x\\,(1 + \\cos x) - \\sin x\\,(-\\sin x)}{(1 + \\cos x)^2}', why: 'Quotient rule: top $\\sin x$ has derivative $\\cos x$; bottom $1 + \\cos x$ has derivative $-\\sin x$.' },
            { tex: '= \\frac{\\cos x + \\cos^2 x + \\sin^2 x}{(1 + \\cos x)^2}', why: 'Expand; the two minus signs make $+\\sin^2 x$.' },
            { tex: '= \\frac{\\cos x + 1}{(1 + \\cos x)^2}', why: 'Pythagorean identity: $\\cos^2 x + \\sin^2 x = 1$.' },
            { tex: '= \\frac{1}{1 + \\cos x}', why: 'Cancel one factor of $1 + \\cos x$ (valid wherever the function is defined, i.e. $\\cos x \\ne -1$).' },
          ],
          result: 'A messy quotient collapses to $\\frac{1}{1 + \\cos x}$.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Radians in code',
          text: 'C++\'s `std::sin`, `std::cos` and every game engine\'s math library take radians, for the same reason calculus does: it makes $\\sin\' = \\cos$ exact. If a designer gives you an angle in degrees, convert with `deg * M_PI / 180` (or `std::numbers::pi` in C++20) before calling `sin` — and remember that the *rate* of change in degrees picks up a factor of $\\frac{\\pi}{180}$.',
        },
      ],
    },
    {
      kind: 'error',
      prompt: 'A student differentiates $f(x) = \\sin x \\cos x$. Tap the first line that is wrong.',
      lines: [
        '$f(x) = \\sin x \\cos x$',
        '$f\'(x) = \\cos x \\cdot (-\\sin x)$',
        '$= -\\sin x \\cos x$',
        '$f\'(0) = 0$',
      ],
      errorLines: [2],
      explanation: 'Line 2 multiplies the two derivatives — the $(fg)\' = f\'g\'$ error. The product rule gives $f\'(x) = \\cos x \\cdot \\cos x + \\sin x \\cdot (-\\sin x) = \\cos^2 x - \\sin^2 x$, which equals $\\cos 2x$ by the double-angle formula. So $f\'(0) = 1$, not $0$.',
    },
    {
      kind: 'expr',
      prompt: 'Differentiate $f(x) = x^2 \\tan x$.',
      label: "$f'(x) =$",
      answer: '2x tan(x) + x^2 sec(x)^2',
      answerTex: '2x\\tan x + x^2\\sec^2 x',
      domain: [-1.2, 1.2],
      hint: 'Product rule with $f = x^2$ and $g = \\tan x$. You can type $\\sec^2 x$ as `sec(x)^2`.',
      explanation: 'Product rule: $f\'(x) = (2x)(\\tan x) + (x^2)(\\sec^2 x) = 2x\\tan x + x^2\\sec^2 x$. Equivalent forms such as `2x tan(x) + x^2/cos(x)^2` are also accepted.',
    },
    {
      kind: 'concept',
      title: 'Higher derivatives: the four-step cycle',
      blocks: [
        {
          type: 'p',
          text: 'Differentiate $\\sin x$ again and again and something lovely happens: after four steps you are back where you started. This makes [[higher-order-derivative|higher derivatives]] of sine and cosine trivial to compute.',
        },
        {
          type: 'table',
          headers: ['$n$', '$0$', '$1$', '$2$', '$3$', '$4$', '$5$'],
          rows: [
            ['$\\frac{d^n}{dx^n}\\sin x$', '$\\sin x$', '$\\cos x$', '$-\\sin x$', '$-\\cos x$', '$\\sin x$', '$\\cos x$'],
            ['$\\frac{d^n}{dx^n}\\cos x$', '$\\cos x$', '$-\\sin x$', '$-\\cos x$', '$\\sin x$', '$\\cos x$', '$-\\sin x$'],
          ],
          caption: 'The pattern repeats with period $4$. To find the $n$th derivative, divide $n$ by $4$ and look up the remainder.',
        },
        {
          type: 'derivation',
          title: 'The $99$th derivative of $\\cos x$',
          steps: [
            { tex: '99 = 4 \\cdot 24 + 3', why: 'Every four derivatives bring us back to $\\cos x$, so only the remainder matters.' },
            { tex: '\\frac{d^{99}}{dx^{99}}\\cos x = \\frac{d^{3}}{dx^{3}}\\cos x', why: 'Throw away the $24$ complete cycles.' },
            { tex: '= \\sin x', why: 'From the table: $\\cos \\to -\\sin \\to -\\cos \\to \\sin$.' },
          ],
        },
        {
          type: 'p',
          text: 'The second derivative is the most important entry: $\\frac{d^2}{dx^2}\\sin x = -\\sin x$. Acceleration is the negative of position. If a bobbing object has height $y(t) = 4\\sin t$, its velocity is $y\'(t) = 4\\cos t$ and its acceleration is $y\'\'(t) = -4\\sin t = -y(t)$: the further it is from the centre, the harder it is pulled back.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Springs in a physics engine',
          text: 'A spring obeys Hooke\'s law: acceleration $= -k \\cdot$ displacement. Simulate that in a game loop and the object traces a sine wave, because sine is (up to scaling) the function whose second derivative is its own negative. That is why springy UI animations and camera follow-cams wobble sinusoidally — the calculus is built into the force law.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'Evaluate the $27$th derivative of $\\sin x$ at $x = 0$.',
      hint: 'Find the remainder when $27$ is divided by $4$, then use the cycle $\\sin \\to \\cos \\to -\\sin \\to -\\cos$.',
      label: '$\\left.\\frac{d^{27}}{dx^{27}}\\sin x\\right|_{x=0} =$',
      answer: '-1',
      explanation: '$27 = 4 \\cdot 6 + 3$, so the $27$th derivative equals the $3$rd: $\\frac{d^3}{dx^3}\\sin x = -\\cos x$. At $x = 0$ that is $-\\cos 0 = -1$.',
    },
    {
      kind: 'truefalse',
      prompt: 'The formula $\\dfrac{d}{dx}\\sin x = \\cos x$ is still correct if $x$ is measured in degrees.',
      answer: false,
      explanation: 'The proof used $\\lim_{h\\to 0}\\frac{\\sin h}{h} = 1$, which is true only in radians. With degrees that limit is $\\frac{\\pi}{180}$, so the derivative of $\\sin(x^\\circ)$ with respect to $x$ is $\\frac{\\pi}{180}\\cos(x^\\circ)$. Calculus uses radians precisely to avoid this factor.',
    },
    {
      kind: 'expr',
      prompt: 'Differentiate $f(x) = e^x \\cos x$.',
      label: "$f'(x) =$",
      answer: 'e^x cos(x) - e^x sin(x)',
      answerTex: 'e^x(\\cos x - \\sin x)',
      hint: 'Product rule. $e^x$ is its own derivative and $\\cos x$ has derivative $-\\sin x$.',
      explanation: '$f\'(x) = e^x \\cdot \\cos x + e^x \\cdot (-\\sin x) = e^x(\\cos x - \\sin x)$. The horizontal tangents are where $\\cos x = \\sin x$, i.e. $x = \\frac{\\pi}{4} + k\\pi$ (since $e^x$ is never zero).',
    },
  ],
  takeaways: [
    'Everything rests on two limits (radians!): $\\lim_{h\\to 0}\\frac{\\sin h}{h} = 1$ and $\\lim_{h\\to 0}\\frac{\\cos h - 1}{h} = 0$.',
    '$\\frac{d}{dx}\\sin x = \\cos x$ and $\\frac{d}{dx}\\cos x = -\\sin x$, proved with the angle-addition formulas.',
    '$\\frac{d}{dx}\\tan x = \\sec^2 x$ and $\\frac{d}{dx}\\sec x = \\sec x\\tan x$ come from the quotient rule; the co-functions mirror them with a minus sign.',
    'Derivatives of $\\sin$ and $\\cos$ cycle with period $4$; $\\sin\'\' = -\\sin$ is why springs and waves oscillate.',
    'Combine with the product and quotient rules, then simplify with identities like $\\sin^2 x + \\cos^2 x = 1$.',
  ],
  reading: [
    {
      title: 'OpenStax Calculus Volume 1 — 3.5 Derivatives of Trigonometric Functions',
      url: 'https://openstax.org/books/calculus-volume-1/pages/3-5-derivatives-of-trigonometric-functions',
      source: 'openstax',
      note: 'The same proofs plus extra examples on higher-order trig derivatives.',
    },
    {
      title: "Paul's Online Notes — Derivatives of Trig Functions",
      url: 'https://tutorial.math.lamar.edu/Classes/CalcI/DiffTrigFcns.aspx',
      source: 'paul',
      note: 'Includes the proofs of the two special limits and many practice problems.',
    },
    {
      title: '3Blue1Brown — Derivative formulas through geometry',
      url: 'https://www.youtube.com/watch?v=S0_qX4VJhMQ',
      source: 'video',
      note: 'A purely geometric picture, using the unit circle, of why the derivative of sine is cosine.',
    },
  ],
};
