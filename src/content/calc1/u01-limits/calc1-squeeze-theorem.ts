import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'calc1-squeeze-theorem',
  title: 'The Squeeze Theorem and Trig Limits',
  summary: 'Trap a stubborn function between two simpler ones, then use the trap to prove the most important trig limit in calculus.',
  minutes: 17,
  objectives: [
    'State the Squeeze Theorem with its hypotheses and use it to evaluate limits that algebra cannot reach',
    'Build squeezing bounds from $-1 \\le \\sin u \\le 1$ and $-1 \\le \\cos u \\le 1$, handling signs correctly',
    'Follow and reproduce the geometric proof that $\\lim_{\\theta \\to 0} \\frac{\\sin\\theta}{\\theta} = 1$',
    'Evaluate limits such as $\\lim_{x \\to 0}\\frac{\\sin 5x}{x}$ and $\\lim_{x \\to 0}\\frac{1 - \\cos x}{x}$ by rewriting them in terms of the two special trig limits',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'A limit that algebra cannot crack',
      blocks: [
        {
          type: 'p',
          text: 'In the last lesson every $\\frac{0}{0}$ limit surrendered to algebra: factor, cancel, rationalise, substitute. Now try this one:',
        },
        { type: 'math', tex: '\\lim_{x \\to 0} \\frac{\\sin x}{x}' },
        {
          type: 'p',
          text: 'Direct substitution gives $\\frac{\\sin 0}{0} = \\frac{0}{0}$, an [[indeterminate-form]]. But there is nothing to factor: $\\sin x$ is not a polynomial, and no algebraic identity pulls an $x$ out of it. The usual toolkit is stuck.',
        },
        {
          type: 'p',
          text: 'Numbers at least tell us what to expect. With $x$ in [[radian|radians]]:',
        },
        {
          type: 'table',
          headers: ['$x$', '$\\sin x$', '$\\dfrac{\\sin x}{x}$'],
          rows: [
            ['$\\pm 1$', '$\\pm 0.841471$', '$0.841471$'],
            ['$\\pm 0.5$', '$\\pm 0.479426$', '$0.958851$'],
            ['$\\pm 0.1$', '$\\pm 0.099833$', '$0.998334$'],
            ['$\\pm 0.01$', '$\\pm 0.0099998$', '$0.999983$'],
            ['$\\pm 0.001$', '$\\pm 0.00099999983$', '$0.99999983$'],
          ],
          caption: 'The same values appear for $x$ and $-x$, because both $\\sin x$ and $x$ change sign together.',
        },
        {
          type: 'graph',
          x: [-10, 10],
          y: [-0.4, 1.2],
          functions: [{ expr: 'sin(x)/x', label: '$y = \\dfrac{\\sin x}{x}$' }],
          points: [{ x: 0, y: 1, label: '(0, 1)?', open: true }],
          hlines: [{ y: 1 }],
          caption: 'The function is undefined at $0$ (open circle), yet the graph clearly heads for height $1$ from both sides.',
        },
        {
          type: 'p',
          text: 'The evidence says the limit is $1$. But a table is not a proof: it samples finitely many points, and functions can misbehave between samples. This lesson builds a tool — the [[squeeze-theorem]] — that turns this kind of evidence into certainty.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why this one limit matters so much',
          text: 'When you differentiate $\\sin x$ from the definition (in the Differentiation Rules unit), the difference quotient reduces to exactly two limits: $\\lim\\limits_{h \\to 0}\\frac{\\sin h}{h}$ and $\\lim\\limits_{h \\to 0}\\frac{1 - \\cos h}{h}$. Every derivative of every trig function — and so every rotation, oscillation and wave in physics and games — rests on the two limits proved in this lesson.',
        },
      ],
    },
    {
      kind: 'mcq',
      prompt: 'Why does the factor-and-cancel method from the previous lesson fail for $\\lim_{x \\to 0}\\frac{\\sin x}{x}$?',
      options: [
        {
          text: 'Because the limit does not exist',
          why: 'The table and graph strongly suggest the limit exists and equals $1$. Failing to compute a limit by one method says nothing about whether it exists.',
        },
        {
          text: 'Because $\\sin x$ has no algebraic factor of $x$ to cancel',
          correct: true,
          why: 'Right. Cancelling worked for polynomials like $\\frac{x^2 - 4}{x - 2}$ because $x - 2$ was a factor of the numerator. $\\sin x$ is transcendental: no finite algebra writes it as $x$ times something simpler.',
        },
        {
          text: 'Because direct substitution gives $\\frac{1}{0}$, which means a vertical asymptote',
          why: 'Substitution gives $\\frac{\\sin 0}{0} = \\frac{0}{0}$, not $\\frac{1}{0}$. Only a nonzero numerator over $0$ signals an infinite limit.',
        },
        {
          text: 'Because $\\frac{\\sin x}{x} = \\sin$, so the $x$ already cancelled',
          why: '$\\sin x$ means "sine of $x$", a function applied to $x$ — not $\\sin$ multiplied by $x$. You can never cancel the $x$ inside a function with an $x$ outside it.',
        },
      ],
      explanation: 'Every algebraic trick we have rewrites the expression so a common factor cancels. For $\\frac{\\sin x}{x}$ there is no such factor, so we need a genuinely new idea: trap the function between two simpler functions whose limits we *can* compute.',
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'concept',
      title: 'The Squeeze Theorem',
      blocks: [
        {
          type: 'p',
          text: 'Picture two friends walking on either side of you down a narrowing hallway. If both of them arrive at the same doorway, you have no choice: you arrive there too. That is the whole idea.',
        },
        {
          type: 'theorem',
          name: 'The Squeeze Theorem (Sandwich Theorem)',
          text: 'Suppose $g(x) \\le f(x) \\le h(x)$ for all $x$ in some open interval containing $a$, except possibly at $x = a$ itself, and\n\n$$\\lim_{x \\to a} g(x) = \\lim_{x \\to a} h(x) = L.$$\n\nThen $\\lim\\limits_{x \\to a} f(x) = L$.',
        },
        {
          type: 'p',
          text: 'Read the hypotheses carefully. The inequality only has to hold **near** $a$ (not everywhere), $f$ need not even be defined **at** $a$, and the two bounds must approach the **same** number $L$. If the lower bound heads to $-1$ and the upper to $1$, you have only learned that $f$ is stuck between $-1$ and $1$ — not what it approaches.',
        },
        {
          type: 'p',
          text: 'The classic first example is $f(x) = x^2 \\sin\\frac{1}{x}$. As $x \\to 0$, the factor $\\sin\\frac{1}{x}$ oscillates infinitely often between $-1$ and $1$ and has no limit at all, so the product law cannot be used. But the oscillation is being multiplied by something that shrinks to $0$.',
        },
        {
          type: 'derivation',
          title: 'Evaluate $\\lim_{x \\to 0} x^2 \\sin\\frac{1}{x}$',
          steps: [
            { tex: '-1 \\le \\sin\\tfrac{1}{x} \\le 1 \\quad (x \\ne 0)', why: 'Sine of *any* real number lies between $-1$ and $1$. This bound needs nothing about the inside $\\frac{1}{x}$ except that it is a real number, which it is for $x \\ne 0$.' },
            { tex: '-x^2 \\le x^2 \\sin\\tfrac{1}{x} \\le x^2', why: 'Multiply all three parts by $x^2$. Since $x^2 > 0$ for $x \\ne 0$, the inequality signs stay the same way round.' },
            { tex: '\\lim_{x \\to 0} (-x^2) = 0 \\quad\\text{and}\\quad \\lim_{x \\to 0} x^2 = 0', why: 'Both bounds are polynomials, so their limits come from direct substitution — and they agree.' },
            { tex: '\\lim_{x \\to 0} x^2 \\sin\\tfrac{1}{x} = 0', why: 'All hypotheses of the Squeeze Theorem hold with $g(x) = -x^2$, $h(x) = x^2$, $L = 0$.' },
          ],
          result: 'The wild oscillation is crushed: $\\lim_{x \\to 0} x^2 \\sin\\frac{1}{x} = 0$.',
        },
        {
          type: 'graph',
          x: [-0.5, 0.5],
          y: [-0.25, 0.25],
          functions: [
            { expr: 'x^2 sin(1/x)', label: '$y = x^2\\sin\\frac{1}{x}$', color: 'blue' },
            { expr: 'x^2', label: '$y = x^2$', color: 'red', dashed: true },
            { expr: '-x^2', label: '$y = -x^2$', color: 'green', dashed: true },
          ],
          points: [{ x: 0, y: 0, open: true }],
          caption: 'The blue curve wiggles faster and faster near $0$, but it can never escape the funnel formed by $\\pm x^2$, and the funnel closes at the origin.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the theorem is true',
          text: 'Pick any tolerance around $L$, however thin. Because $g(x) \\to L$, eventually (for $x$ close enough to $a$) $g(x)$ is inside that tolerance band; the same holds for $h(x)$. Once *both* are inside the band, $f(x)$, sitting between them, is inside it too. So $f(x)$ gets as close to $L$ as we like. In the last lesson of this unit you will make "tolerance band" precise with $\\varepsilon$ and $\\delta$ and this argument becomes a formal proof.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'Suppose $4x - 9 \\le f(x) \\le x^2 - 4x + 7$ for all $x \\ge 0$. Find $\\lim\\limits_{x \\to 4} f(x)$.',
      hint: 'Compute the limit of each bound at $x = 4$. Do they agree?',
      label: '$\\lim\\limits_{x \\to 4} f(x) =$',
      answer: '7',
      explanation: 'Both bounds are polynomials, so substitute: $4(4) - 9 = 7$ and $4^2 - 4(4) + 7 = 7$. The bounds agree, and the inequality holds on an open interval around $4$ (all of $x > 0$), so the Squeeze Theorem gives $\\lim_{x \\to 4} f(x) = 7$. (The two bounds even touch at $x = 4$: their difference is $x^2 - 8x + 16 = (x - 4)^2 \\ge 0$.) We found the limit without ever knowing the formula for $f$.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Building bounds that actually work',
      blocks: [
        {
          type: 'p',
          text: 'The art of squeezing is choosing the bounds. The pattern is almost always the same: **(bounded wiggle) × (something that goes to 0)**. Bound the wiggly part by a constant, then multiply through.',
        },
        {
          type: 'steps',
          items: [
            { title: 'Spot the bounded factor', text: '$\\sin(\\text{anything})$ and $\\cos(\\text{anything})$ lie in $[-1, 1]$. Other common ones: $0 < \\frac{1}{1 + u^2} \\le 1$, $|\\arctan u| < \\frac{\\pi}{2}$.' },
            { title: 'Multiply through carefully', text: 'Multiplying an inequality by a positive quantity keeps the signs; by a negative quantity flips them. If the multiplier can have either sign, use absolute values instead.' },
            { title: 'Check both bounds share a limit', text: 'Compute both limits. If they differ, choose tighter bounds or a different method.' },
          ],
        },
        {
          type: 'p',
          text: 'The absolute-value version of the theorem is often the cleanest. Since $-|f(x)| \\le f(x) \\le |f(x)|$ always, the Squeeze Theorem gives:',
        },
        {
          type: 'theorem',
          name: 'Absolute-value squeeze',
          text: 'If $|f(x)| \\le h(x)$ near $a$ and $\\lim\\limits_{x \\to a} h(x) = 0$, then $\\lim\\limits_{x \\to a} f(x) = 0$.',
        },
        {
          type: 'derivation',
          title: 'Evaluate $\\lim_{x \\to 0} x \\cos\\frac{3}{x}$',
          steps: [
            { tex: '\\left| x \\cos\\tfrac{3}{x} \\right| = |x|\\,\\left|\\cos\\tfrac{3}{x}\\right|', why: 'The absolute value of a product is the product of the absolute values.' },
            { tex: '\\le |x| \\cdot 1 = |x|', why: '$|\\cos u| \\le 1$ for every real $u$. Multiplying by $|x| \\ge 0$ keeps the inequality.' },
            { tex: '\\lim_{x \\to 0} |x| = 0', why: '$|x|$ is continuous, so substitute $x = 0$.' },
            { tex: '\\implies \\lim_{x \\to 0} x\\cos\\tfrac{3}{x} = 0', why: 'Absolute-value squeeze with $h(x) = |x|$.' },
          ],
          result: 'The limit is $0$ — and using $|x|$ avoided any worry about the sign of $x$.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'The sign trap',
          text: 'It is tempting to write $-x \\le x\\cos\\frac{3}{x} \\le x$. For $x < 0$ this is **false** — then $-x$ is the *larger* number, so the "lower bound" sits above the "upper bound". The correct bounds are $-|x| \\le x\\cos\\frac{3}{x} \\le |x|$. When the multiplier changes sign near $a$, reach for absolute values.',
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'On exams, a squeeze argument earns full credit only when you (1) write the inequality chain explicitly, (2) state the limit of **each** bound, and (3) name the theorem. "The $\\sin$ part is bounded so the answer is $0$" usually loses points.',
        },
      ],
    },
    {
      kind: 'error',
      prompt: 'A student evaluates $\\lim_{x \\to 0} x \\sin\\frac{1}{x}$. The final answer happens to be right, but one step of the argument is false. Tap the first incorrect line.',
      lines: [
        '$-1 \\le \\sin\\frac{1}{x} \\le 1$ for all $x \\ne 0$',
        '$-x \\le x\\sin\\frac{1}{x} \\le x$ for all $x \\ne 0$',
        '$\\lim\\limits_{x \\to 0}(-x) = 0$ and $\\lim\\limits_{x \\to 0} x = 0$',
        'By the Squeeze Theorem, $\\lim\\limits_{x \\to 0} x\\sin\\frac{1}{x} = 0$',
      ],
      errorLines: [2],
      explanation: 'Line 2 multiplies the inequality by $x$ without considering its sign. For $x < 0$, multiplying flips the inequalities, giving $-x \\ge x\\sin\\frac{1}{x} \\ge x$; for example at $x = -\\frac{2}{\\pi}$ the claimed chain reads $\\frac{2}{\\pi} \\le \\frac{2}{\\pi} \\le -\\frac{2}{\\pi}$, which is false. The fix is $-|x| \\le x\\sin\\frac{1}{x} \\le |x|$, valid for every $x \\ne 0$. Both $\\pm|x| \\to 0$, so the limit is indeed $0$ — a correct answer from a broken argument still loses marks.',
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'concept',
      title: 'Proving $\\lim_{\\theta \\to 0} \\frac{\\sin\\theta}{\\theta} = 1$',
      blocks: [
        {
          type: 'p',
          text: 'Now the main event. We will trap $\\frac{\\sin\\theta}{\\theta}$ between two functions that both go to $1$, using nothing but areas on the [[unit-circle]]. First take $0 < \\theta < \\frac{\\pi}{2}$ (we deal with negative $\\theta$ at the end).',
        },
        {
          type: 'p',
          text: 'Put $O$ at the origin, $A = (1, 0)$, and $P = (\\cos\\theta, \\sin\\theta)$ on the circle. Extend $OP$ until it meets the vertical tangent line $x = 1$ at $T$. Since the line $OP$ has slope $\\frac{\\sin\\theta}{\\cos\\theta} = \\tan\\theta$, the point $T$ is $(1, \\tan\\theta)$. Three nested regions appear:',
        },
        {
          type: 'graph',
          x: [-0.3, 1.6],
          y: [-0.2, 1.65],
          equal: true,
          height: 340,
          parametric: [{ x: 'cos(t)', y: 'sin(t)', t: [0, '2pi'], color: 'gray' }],
          areas: [
            { expr: 'tan(a) x', expr2: '0', from: 0, to: 1, color: 'orange' },
            { expr: 'min(tan(a) x, sqrt(1 - x^2))', expr2: '0', from: 0, to: 1, color: 'green' },
            { expr: 'min(tan(a) x, sin(a)(1 - x)/(1 - cos(a)))', expr2: '0', from: 0, to: 1, color: 'blue' },
          ],
          segments: [
            { from: [0, 0], to: [1, 'tan(a)'], color: 'gray' },
            { from: [1, 0], to: [1, 'tan(a)'], color: 'orange', label: 'tan θ' },
            { from: ['cos(a)', 0], to: ['cos(a)', 'sin(a)'], color: 'blue', dashed: true, label: 'sin θ' },
            { from: [0, 0], to: [1, 0], color: 'gray' },
          ],
          points: [
            { x: 0, y: 0, label: 'O' },
            { x: 1, y: 0, label: 'A' },
            { x: 'cos(a)', y: 'sin(a)', label: 'P' },
            { x: 1, y: 'tan(a)', label: 'T' },
          ],
          sliders: [{ name: 'a', min: 0.05, max: 1, step: 0.01, value: 0.7, label: '$\\theta$ (radians)' }],
          readouts: [
            { label: '$\\sin\\theta =$', expr: 'sin(a)', digits: 4 },
            { label: '$\\theta =$', expr: 'a', digits: 4 },
            { label: '$\\tan\\theta =$', expr: 'tan(a)', digits: 4 },
            { label: '$\\frac{\\sin\\theta}{\\theta} =$', expr: 'sin(a)/a', digits: 5 },
          ],
          caption: 'Blue: triangle $OAP$. Green: sector $OAP$. Orange: triangle $OAT$. Each region contains the one before it, for every $\\theta$ you choose. Shrink $\\theta$ and watch all three readouts crowd together.',
        },
        {
          type: 'table',
          headers: ['Region', 'Area', 'Reason'],
          rows: [
            ['Triangle $OAP$', '$\\frac{1}{2}\\sin\\theta$', 'base $OA = 1$, height $= \\sin\\theta$'],
            ['Sector $OAP$', '$\\frac{1}{2}\\theta$', '[[sector-area|sector area]] $\\frac{1}{2}r^2\\theta$ with $r = 1$'],
            ['Triangle $OAT$', '$\\frac{1}{2}\\tan\\theta$', 'base $OA = 1$, height $AT = \\tan\\theta$'],
          ],
        },
        {
          type: 'derivation',
          title: 'From areas to the limit',
          steps: [
            { tex: '\\tfrac{1}{2}\\sin\\theta < \\tfrac{1}{2}\\theta < \\tfrac{1}{2}\\tan\\theta', why: 'Triangle $OAP$ lies inside sector $OAP$, which lies inside triangle $OAT$, so their areas are in this order (strictly, since each region is missing a piece of the next).' },
            { tex: '\\sin\\theta < \\theta < \\frac{\\sin\\theta}{\\cos\\theta}', why: 'Multiply through by $2$ and write $\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta}$.' },
            { tex: '1 < \\frac{\\theta}{\\sin\\theta} < \\frac{1}{\\cos\\theta}', why: 'Divide every part by $\\sin\\theta$, which is positive for $0 < \\theta < \\frac{\\pi}{2}$, so the inequalities keep their direction.' },
            { tex: '\\cos\\theta < \\frac{\\sin\\theta}{\\theta} < 1', why: 'Take reciprocals of three positive numbers. Reciprocals reverse order ($2 < 3$ but $\\frac{1}{2} > \\frac{1}{3}$), so the whole chain flips; we then rewrite it smallest-first.' },
            { tex: '\\lim_{\\theta \\to 0^+}\\cos\\theta = 1 \\quad\\text{and}\\quad \\lim_{\\theta \\to 0^+} 1 = 1', why: 'Cosine is continuous, so its limit is $\\cos 0 = 1$. The two bounds agree.' },
            { tex: '\\lim_{\\theta \\to 0^+}\\frac{\\sin\\theta}{\\theta} = 1', why: 'Squeeze Theorem (the one-sided version works exactly the same way).' },
            { tex: '\\frac{\\sin(-\\theta)}{-\\theta} = \\frac{-\\sin\\theta}{-\\theta} = \\frac{\\sin\\theta}{\\theta}', why: 'Sine is odd, so $\\frac{\\sin\\theta}{\\theta}$ is an [[even-function|even function]]: its graph is symmetric about the $y$-axis, and the [[one-sided-limit|left-hand limit]] equals the right-hand one.' },
            { tex: '\\lim_{\\theta \\to 0}\\frac{\\sin\\theta}{\\theta} = 1', why: 'Both one-sided limits equal $1$, so the two-sided limit is $1$.' },
          ],
          result: '$\\displaystyle\\lim_{\\theta \\to 0}\\frac{\\sin\\theta}{\\theta} = 1$ — proved, not just observed.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why radians are essential',
          text: 'The sector area $\\frac{1}{2}\\theta$ is only correct when $\\theta$ is measured in radians — that is precisely what makes radians the "natural" unit. In degrees the sector area is $\\frac{\\pi}{360}\\theta$, and the same argument gives $\\lim_{\\theta \\to 0}\\frac{\\sin(\\theta^\\circ)}{\\theta} = \\frac{\\pi}{180}$. That ugly constant would then appear in every trig derivative. This is why calculus, and every math library (`std::sin`, `Math.sin`), works in radians.',
        },
      ],
    },
    {
      kind: 'order',
      prompt: 'Put the steps of the geometric proof (for $0 < \\theta < \\frac{\\pi}{2}$) in order.',
      lines: [
        'Compare areas: $\\frac{1}{2}\\sin\\theta < \\frac{1}{2}\\theta < \\frac{1}{2}\\tan\\theta$',
        'Simplify: $\\sin\\theta < \\theta < \\frac{\\sin\\theta}{\\cos\\theta}$',
        'Divide by $\\sin\\theta > 0$: $1 < \\frac{\\theta}{\\sin\\theta} < \\frac{1}{\\cos\\theta}$',
        'Take reciprocals, reversing the order: $\\cos\\theta < \\frac{\\sin\\theta}{\\theta} < 1$',
        'Squeeze: both bounds tend to $1$, so $\\frac{\\sin\\theta}{\\theta} \\to 1$',
      ],
      distractors: ['Substitute $\\theta = 0$ into $\\frac{\\sin\\theta}{\\theta}$ to get $1$'],
      explanation: 'The proof starts with geometry (nested areas), turns it into an inequality about $\\sin\\theta$, $\\theta$ and $\\tan\\theta$, massages that into a chain with $\\frac{\\sin\\theta}{\\theta}$ in the middle, and only then takes the limit. The distractor is not a step at all: substituting $\\theta = 0$ gives $\\frac{0}{0}$, which is why we needed the proof.',
    },
    {
      kind: 'truefalse',
      prompt: 'If your calculator is in degree mode, the values of $\\frac{\\sin x}{x}$ still approach $1$ as $x \\to 0$.',
      answer: false,
      explanation: 'In degree mode the calculator computes $\\sin(x^\\circ) = \\sin\\left(\\frac{\\pi x}{180}\\right)$. Then $\\frac{\\sin(\\pi x/180)}{x} = \\frac{\\pi}{180}\\cdot\\frac{\\sin(\\pi x/180)}{\\pi x/180} \\to \\frac{\\pi}{180} \\approx 0.01745$. The clean value $1$ is a special property of radian measure — try it in degree mode and you will see $0.01745\\ldots$',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Using the special limit: match the inside',
      blocks: [
        {
          type: 'p',
          text: 'The theorem really says: *whatever* goes into the sine, if the denominator is **that same quantity** and it tends to $0$, the ratio tends to $1$.',
        },
        {
          type: 'theorem',
          name: 'The sine limit, general form',
          tex: '\\lim_{x \\to a}\\frac{\\sin\\big(u(x)\\big)}{u(x)} = 1 \\quad\\text{whenever } u(x) \\to 0 \\text{ and } u(x) \\ne 0 \\text{ near } a',
        },
        {
          type: 'p',
          text: 'So the strategy is: **make the denominator match the inside of the sine**, compensating with constants so you do not change the value.',
        },
        {
          type: 'derivation',
          title: 'Evaluate $\\lim_{x \\to 0}\\frac{\\sin 5x}{x}$',
          steps: [
            { tex: '\\frac{\\sin 5x}{x} = \\frac{5}{5}\\cdot\\frac{\\sin 5x}{x}', why: 'Multiply by $1$ in the form $\\frac{5}{5}$; the inside of the sine is $5x$, so we want $5x$ downstairs.' },
            { tex: '= 5 \\cdot \\frac{\\sin 5x}{5x}', why: 'Move one $5$ into the denominator. Now the denominator matches the inside.' },
            { tex: '\\lim_{x \\to 0} 5\\cdot\\frac{\\sin 5x}{5x} = 5 \\cdot \\lim_{u \\to 0}\\frac{\\sin u}{u}', why: 'Substitute $u = 5x$: as $x \\to 0$, $u \\to 0$ too (and $u \\ne 0$ when $x \\ne 0$). Constants pull out of limits.' },
            { tex: '= 5 \\cdot 1 = 5', why: 'The special limit.' },
          ],
          result: '$\\lim_{x \\to 0}\\frac{\\sin 5x}{x} = 5$, not $1$: the inside and the denominator did not match until we fixed them.',
        },
        {
          type: 'derivation',
          title: 'Evaluate $\\lim_{x \\to 0}\\frac{\\tan x}{x}$',
          steps: [
            { tex: '\\frac{\\tan x}{x} = \\frac{\\sin x}{x\\cos x}', why: 'Write $\\tan x = \\frac{\\sin x}{\\cos x}$.' },
            { tex: '= \\frac{\\sin x}{x}\\cdot\\frac{1}{\\cos x}', why: 'Split into a product of two factors whose limits we know.' },
            { tex: '\\to 1 \\cdot \\frac{1}{\\cos 0} = 1', why: 'Product law: the first factor tends to $1$, the second to $\\frac{1}{1}$ since cosine is continuous and $\\cos 0 \\ne 0$.' },
          ],
          result: '$\\lim_{x \\to 0}\\frac{\\tan x}{x} = 1$ as well — no surprise, since near $0$ the tangent line on the unit circle is barely longer than the arc.',
        },
        {
          type: 'compare',
          left: {
            title: 'Wrong',
            tone: 'bad',
            tex: ['\\frac{\\sin 5x}{x} \\to 1', '\\frac{\\sin 5x}{x} = \\sin 5'],
            text: 'The special limit needs the denominator to match the inside, and you cannot "cancel" $x$ out of $\\sin$.',
          },
          right: {
            title: 'Right',
            tone: 'good',
            tex: ['\\frac{\\sin 5x}{x} = 5\\cdot\\frac{\\sin 5x}{5x} \\to 5'],
            text: 'Adjust the denominator to $5x$, compensate with a factor $5$, then apply the limit.',
          },
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'Evaluate the limit.',
      tex: '\\lim_{x \\to 0}\\frac{\\sin 4x}{3x}',
      hint: 'Rewrite as $\\frac{4}{3}\\cdot\\frac{\\sin 4x}{4x}$.',
      answer: '4/3',
      answerTex: '\\frac{4}{3}',
      explanation: 'The inside of the sine is $4x$, so make the denominator $4x$: $\\frac{\\sin 4x}{3x} = \\frac{4}{3}\\cdot\\frac{\\sin 4x}{4x}$. As $x \\to 0$, $\\frac{\\sin 4x}{4x} \\to 1$, so the limit is $\\frac{4}{3}$. A quick sanity check: for small $x$, $\\sin 4x \\approx 4x$, so the fraction is about $\\frac{4x}{3x} = \\frac{4}{3}$.',
    },
    {
      kind: 'fill',
      prompt: 'Complete the evaluation of $\\lim\\limits_{x \\to 0}\\dfrac{\\sin 3x}{\\sin 7x}$.',
      template: 'Write $\\dfrac{\\sin 3x}{\\sin 7x} = \\dfrac{\\sin 3x}{3x}\\cdot\\dfrac{7x}{\\sin 7x}\\cdot$ ___. The first two factors each tend to ___, so the limit is ___.',
      blanks: [{ answers: ['$\\frac{3x}{7x}$'] }, { answers: ['$1$'] }, { answers: ['$\\frac{3}{7}$'] }],
      wordBank: ['$\\frac{3x}{7x}$', '$\\frac{7x}{3x}$', '$1$', '$0$', '$\\frac{3}{7}$', '$\\frac{7}{3}$'],
      explanation: 'Multiplying out, $\\frac{\\sin 3x}{3x}\\cdot\\frac{7x}{\\sin 7x}\\cdot\\frac{3x}{7x}$ gives back $\\frac{\\sin 3x}{\\sin 7x}$, so the compensating factor is $\\frac{3x}{7x}$ (which equals $\\frac{3}{7}$ for $x \\ne 0$). The factor $\\frac{7x}{\\sin 7x}$ is the reciprocal of $\\frac{\\sin 7x}{7x} \\to 1$, so it also tends to $1$. The limit is $1 \\cdot 1 \\cdot \\frac{3}{7} = \\frac{3}{7}$.',
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'concept',
      title: 'The cosine limit: $\\lim_{x \\to 0}\\frac{1 - \\cos x}{x} = 0$',
      blocks: [
        {
          type: 'p',
          text: 'The second limit you need for trig derivatives is another $\\frac{0}{0}$: $\\frac{1 - \\cos 0}{0} = \\frac{0}{0}$. This time no new geometry is needed. The conjugate trick from the previous lesson turns it into the sine limit we just proved.',
        },
        {
          type: 'derivation',
          title: 'Evaluate $\\lim_{x \\to 0}\\frac{1 - \\cos x}{x}$',
          steps: [
            { tex: '\\frac{1 - \\cos x}{x} = \\frac{1 - \\cos x}{x}\\cdot\\frac{1 + \\cos x}{1 + \\cos x}', why: 'Multiply by $1$ in the form of the conjugate over itself. This is allowed because $1 + \\cos x \\ne 0$ near $0$ (it is close to $2$).' },
            { tex: '= \\frac{1 - \\cos^2 x}{x(1 + \\cos x)}', why: 'Difference of squares in the numerator: $(1 - \\cos x)(1 + \\cos x) = 1 - \\cos^2 x$.' },
            { tex: '= \\frac{\\sin^2 x}{x(1 + \\cos x)}', why: 'Pythagorean identity: $1 - \\cos^2 x = \\sin^2 x$.' },
            { tex: '= \\frac{\\sin x}{x}\\cdot\\frac{\\sin x}{1 + \\cos x}', why: 'Split $\\sin^2 x = \\sin x \\cdot \\sin x$ to expose the special limit.' },
            { tex: '\\to 1 \\cdot \\frac{0}{1 + 1} = 0', why: 'Product law: the first factor tends to $1$; the second is continuous at $0$, so substitute.' },
          ],
          result: '$\\displaystyle\\lim_{x \\to 0}\\frac{1 - \\cos x}{x} = 0$.',
        },
        {
          type: 'p',
          text: 'Run the same computation with $x^2$ in the denominator and the split becomes $\\left(\\frac{\\sin x}{x}\\right)^2\\cdot\\frac{1}{1 + \\cos x} \\to 1 \\cdot \\frac{1}{2}$:',
        },
        { type: 'math', tex: '\\lim_{x \\to 0}\\frac{1 - \\cos x}{x^2} = \\frac{1}{2}', caption: 'So near $0$, $1 - \\cos x \\approx \\frac{x^2}{2}$: much smaller than $x$, which is why dividing by just $x$ gave $0$.' },
        {
          type: 'graph',
          x: [-3, 3],
          y: [-1.2, 1.4],
          functions: [
            { expr: 'sin(x)/x', label: '$\\frac{\\sin x}{x} \\to 1$', color: 'blue' },
            { expr: '(1 - cos(x))/x', label: '$\\frac{1 - \\cos x}{x} \\to 0$', color: 'red' },
            { expr: '(1 - cos(x))/x^2', label: '$\\frac{1 - \\cos x}{x^2} \\to \\frac{1}{2}$', color: 'green', dashed: true },
          ],
          points: [
            { x: 0, y: 1, open: true },
            { x: 0, y: 0, open: true },
            { x: 0, y: 0.5, open: true },
          ],
          caption: 'All three functions are undefined at $0$ (open circles) but have perfectly good limits there.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Small-angle approximations and the `sinc` trap',
          text: 'These limits are the [[small-angle-approximation|small-angle approximations]] $\\sin x \\approx x$ and $\\cos x \\approx 1 - \\frac{x^2}{2}$, used in pendulum physics, camera math and cheap shader tricks. They also explain a classic bug: the "sinc" function $\\frac{\\sin x}{x}$ (used in audio resampling and image filters) returns `NaN` at exactly `x == 0.0`, because the computer evaluates $\\frac{0}{0}$ literally. Robust code special-cases tiny $|x|$ and returns $1$ — the limit — instead.',
        },
        {
          type: 'code',
          title: 'trig_limits.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdio>

int main() {
    for (int k = 0; k <= 4; ++k) {
        double x = std::pow(10.0, -k);
        std::printf("x = %-7g sin(x)/x = %.8f   (1 - cos x)/x = %.8f\\n",
                    x, std::sin(x) / x, (1 - std::cos(x)) / x);
    }
}`,
          output: `x = 1       sin(x)/x = 0.84147098   (1 - cos x)/x = 0.45969769
x = 0.1     sin(x)/x = 0.99833417   (1 - cos x)/x = 0.04995835
x = 0.01    sin(x)/x = 0.99998333   (1 - cos x)/x = 0.00499996
x = 0.001   sin(x)/x = 0.99999983   (1 - cos x)/x = 0.00050000
x = 0.0001  sin(x)/x = 1.00000000   (1 - cos x)/x = 0.00005000`,
          annotations: [
            { lines: 6, text: '$x = 1, 0.1, 0.01, \\dots$ Computing $10^{-k}$ directly avoids drift from repeatedly dividing by $10$.' },
            { lines: '7-8', text: 'The two special ratios. Neither is ever evaluated at $x = 0$, so there is no `NaN`.' },
          ],
        },
        {
          type: 'callout',
          variant: 'note',
          text: 'The last row prints $1.00000000$ only because of rounding to 8 decimals: the true value is $0.99999999833\\ldots$ The ratio never *equals* $1$ for $x \\ne 0$ — we proved $\\cos x < \\frac{\\sin x}{x} < 1$ — it only approaches it.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'Evaluate the limit.',
      tex: '\\lim_{x \\to 0}\\frac{1 - \\cos 2x}{x^2}',
      hint: 'Either use $1 - \\cos 2x = 2\\sin^2 x$, or let $u = 2x$ and use $\\lim_{u \\to 0}\\frac{1 - \\cos u}{u^2} = \\frac{1}{2}$.',
      answer: '2',
      explanation: 'Method 1: the double-angle identity gives $1 - \\cos 2x = 2\\sin^2 x$, so $\\frac{1 - \\cos 2x}{x^2} = 2\\left(\\frac{\\sin x}{x}\\right)^2 \\to 2 \\cdot 1^2 = 2$. Method 2: with $u = 2x$, $x^2 = \\frac{u^2}{4}$, so the expression is $4\\cdot\\frac{1 - \\cos u}{u^2} \\to 4 \\cdot \\frac{1}{2} = 2$. Two independent routes, one answer.',
    },
    {
      kind: 'expr',
      prompt: 'Let $a$ and $b$ be nonzero constants. Find $\\lim\\limits_{x \\to 0}\\dfrac{\\sin(ax)}{bx}$ in terms of $a$ and $b$.',
      variables: ['a', 'b'],
      domain: [0.5, 3],
      label: 'limit $=$',
      answer: 'a/b',
      answerTex: '\\frac{a}{b}',
      hint: 'Make the denominator match the inside: $\\frac{\\sin(ax)}{bx} = \\frac{a}{b}\\cdot\\frac{\\sin(ax)}{ax}$.',
      explanation: 'Multiply and divide by $a$: $\\frac{\\sin(ax)}{bx} = \\frac{a}{b}\\cdot\\frac{\\sin(ax)}{ax}$. As $x \\to 0$, $ax \\to 0$, so the second factor tends to $1$ and the limit is $\\frac{a}{b}$. This one formula covers $\\frac{\\sin 5x}{x}$ ($a = 5, b = 1$) and $\\frac{\\sin 4x}{3x}$ ($a = 4, b = 3$) from earlier.',
    },
    {
      kind: 'mcq',
      prompt: 'Which limit equals $0$?',
      options: [
        {
          text: '$\\lim\\limits_{x \\to 0}\\dfrac{\\sin x}{x}$',
          why: 'This is the special sine limit, which equals $1$.',
        },
        {
          text: '$\\lim\\limits_{x \\to 0}\\dfrac{1 - \\cos x}{x^2}$',
          why: 'With $x^2$ downstairs the limit is $\\frac{1}{2}$: $1 - \\cos x \\approx \\frac{x^2}{2}$ is the same size as $x^2$.',
        },
        {
          text: '$\\lim\\limits_{x \\to 0}\\dfrac{x}{\\tan x}$',
          why: 'This is the reciprocal of $\\frac{\\tan x}{x} \\to 1$, so it tends to $1$.',
        },
        {
          text: '$\\lim\\limits_{x \\to 0} x\\sin\\dfrac{1}{x}$',
          correct: true,
          why: 'Squeeze: $-|x| \\le x\\sin\\frac{1}{x} \\le |x|$ and both bounds tend to $0$.',
        },
      ],
      explanation: 'Three of these are $\\frac{0}{0}$ forms that tend to nonzero values ($1$, $\\frac{1}{2}$, $1$) because numerator and denominator shrink at comparable rates. The squeeze example is different: a bounded oscillation multiplied by something tending to $0$ must tend to $0$. Do not confuse it with $\\lim_{x \\to 0}\\frac{\\sin x}{x}$ — the $x$ is outside the sine and the sine\'s input $\\frac{1}{x}$ does not go to $0$.',
    },
  ],
  takeaways: [
    'Squeeze Theorem: if $g(x) \\le f(x) \\le h(x)$ near $a$ (except possibly at $a$) and $g$, $h$ both tend to $L$, then $f$ tends to $L$. Both bounds must share the same limit.',
    'Bounded × (something tending to 0) tends to 0. Use $|f(x)| \\le h(x) \\to 0$ to avoid sign errors when the multiplier can be negative.',
    'Comparing the areas of a triangle, a sector and a larger triangle gives $\\cos\\theta < \\frac{\\sin\\theta}{\\theta} < 1$, so $\\lim_{\\theta \\to 0}\\frac{\\sin\\theta}{\\theta} = 1$ — in radians only.',
    'To use the sine limit, make the denominator match the inside: $\\frac{\\sin(ax)}{bx} = \\frac{a}{b}\\cdot\\frac{\\sin(ax)}{ax} \\to \\frac{a}{b}$.',
    'The conjugate trick gives $\\lim_{x \\to 0}\\frac{1 - \\cos x}{x} = 0$ and $\\lim_{x \\to 0}\\frac{1 - \\cos x}{x^2} = \\frac{1}{2}$.',
  ],
  reading: [
    {
      title: 'OpenStax Calculus Volume 1 — 2.3 The Limit Laws',
      url: 'https://openstax.org/books/calculus-volume-1/pages/2-3-the-limit-laws',
      source: 'openstax',
      note: 'The end of this section states the Squeeze Theorem and gives the same unit-circle proof of the sine limit, with extra examples.',
    },
    {
      title: "Paul's Online Notes — Computing Limits",
      url: 'https://tutorial.math.lamar.edu/Classes/CalcI/ComputingLimits.aspx',
      source: 'paul',
      note: 'Ends with several worked Squeeze Theorem problems, including the sign issues discussed here.',
    },
    {
      title: 'Wikipedia — Squeeze theorem',
      url: 'https://en.wikipedia.org/wiki/Squeeze_theorem',
      source: 'wikipedia',
      note: 'Includes the area proof of the sine limit with a clear diagram and the formal statement.',
    },
  ],
};
