import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'trig-double-half-angle',
  title: 'Double-Angle, Half-Angle and Power-Reducing Formulas',
  summary: 'Set $\\alpha = \\beta$ in the sum formulas and a whole toolkit falls out: double angles, power reduction (the Calc II workhorse) and half angles.',
  minutes: 19,
  objectives: [
    'Derive $\\sin 2x$, all three forms of $\\cos 2x$, and $\\tan 2x$ from the sum formulas',
    'Compute $\\sin 2\\theta$ and $\\cos 2\\theta$ from one trig value and a quadrant',
    'Use the power-reducing formulas to rewrite $\\sin^2 x$, $\\cos^2 x$ and higher even powers without exponents',
    'Apply the half-angle formulas, choosing the sign from the quadrant of $\\frac{\\theta}{2}$',
  ],
  steps: [
    // 1 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Double angles: a special case of the sum formulas',
      blocks: [
        {
          type: 'p',
          text: 'Doubling an angle is adding it to itself. So put $\\beta = \\alpha = x$ into the [[sum-and-difference-formulas]] from the previous lesson. No new proofs are needed — the [[double-angle-formulas]] are already hiding inside the sum formulas.',
        },
        {
          type: 'derivation',
          title: 'Derive $\\sin 2x$ and $\\cos 2x$',
          steps: [
            { tex: '\\sin 2x = \\sin(x + x)', why: 'Write the double angle as a sum.' },
            { tex: '= \\sin x\\cos x + \\cos x\\sin x', why: 'Sine sum formula with $\\alpha = \\beta = x$.' },
            { tex: '= 2\\sin x\\cos x', why: 'The two terms are the same product, so they combine.' },
            { tex: '\\cos 2x = \\cos(x + x) = \\cos x\\cos x - \\sin x\\sin x', why: 'Cosine sum formula with $\\alpha = \\beta = x$.' },
            { tex: '= \\cos^2 x - \\sin^2 x', why: 'Write the products as squares.' },
          ],
          result: '$\\sin 2x = 2\\sin x\\cos x$ and $\\cos 2x = \\cos^2 x - \\sin^2 x$.',
        },
        {
          type: 'theorem',
          name: 'Double-angle formulas',
          tex: '\\sin 2x = 2\\sin x\\cos x \\qquad \\cos 2x = \\cos^2 x - \\sin^2 x \\qquad \\tan 2x = \\frac{2\\tan x}{1 - \\tan^2 x}',
          text: 'The tangent version is the tangent sum formula with $\\alpha = \\beta = x$.',
        },
        {
          type: 'graph',
          x: [-6.5, 6.5],
          y: [-2, 2],
          xStep: 'pi',
          functions: [
            { expr: 'sin(2x)', label: '$y = \\sin 2x$', color: 'blue' },
            { expr: 'k sin(x)cos(x)', label: '$y = k\\sin x\\cos x$', color: 'red', dashed: true },
            { expr: '2sin(x)', label: '$y = 2\\sin x$', color: 'gray', dashed: true },
          ],
          sliders: [{ name: 'k', min: 0, max: 3, step: 0.1, value: 1, label: '$k$' }],
          caption: 'Find the $k$ that makes the red curve land on $\\sin 2x$ — it is $2$. Notice the gray curve $2\\sin x$ is something else entirely: twice as tall, not twice as fast.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: '$\\sin 2x \\neq 2\\sin x$',
          text: 'The $2$ is *inside* the function. $2\\sin x$ doubles the output (amplitude $2$, period $2\\pi$); $\\sin 2x$ doubles the input (amplitude $1$, period $\\pi$). At $x = \\frac{\\pi}{2}$: $\\sin\\pi = 0$ but $2\\sin\\frac{\\pi}{2} = 2$.',
        },
      ],
    },
    // 2 ─────────────────────────────────────────────────────────────
    {
      kind: 'expr',
      prompt: 'Write $10\\sin x\\cos x$ in terms of a single sine function.',
      label: '$10\\sin x\\cos x =$',
      answer: '5sin(2x)',
      answerTex: '5\\sin 2x',
      hint: 'Split $10 = 5 \\cdot 2$ and recognise $2\\sin x\\cos x$.',
      explanation: '$10\\sin x\\cos x = 5 \\cdot (2\\sin x\\cos x) = 5\\sin 2x$. Writing $10\\sin 2x$ is the common slip — the formula needs exactly one factor of $2$ per $\\sin x\\cos x$, so the leftover coefficient is $5$.',
    },
    // 3 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'The three faces of $\\cos 2x$',
      blocks: [
        {
          type: 'p',
          text: 'The formula $\\cos 2x = \\cos^2 x - \\sin^2 x$ uses both sine and cosine. The Pythagorean identity lets you trade one for the other, giving two more versions — each one useful when you only know (or only want) one of the two functions.',
        },
        {
          type: 'derivation',
          title: 'Two more forms of $\\cos 2x$',
          steps: [
            { tex: '\\cos 2x = \\cos^2 x - \\sin^2 x', why: 'Start from the form derived from the sum formula.' },
            { tex: '= \\cos^2 x - (1 - \\cos^2 x) = 2\\cos^2 x - 1', why: 'Replace $\\sin^2 x$ with $1 - \\cos^2 x$: now only cosine appears.' },
            { tex: '\\cos 2x = (1 - \\sin^2 x) - \\sin^2 x = 1 - 2\\sin^2 x', why: 'Go back to the first form and replace $\\cos^2 x$ with $1 - \\sin^2 x$ instead: now only sine appears.' },
          ],
          result: '$\\cos 2x = \\cos^2 x - \\sin^2 x = 2\\cos^2 x - 1 = 1 - 2\\sin^2 x$.',
        },
        {
          type: 'derivation',
          title: '$\\cos\\theta = -\\frac{4}{5}$ with $\\theta$ in QIII. Find $\\sin 2\\theta$, $\\cos 2\\theta$, $\\tan 2\\theta$.',
          steps: [
            { tex: '\\sin\\theta = -\\sqrt{1 - \\tfrac{16}{25}} = -\\frac{3}{5}', why: 'Pythagorean identity; sine is negative in quadrant III. $\\sin 2\\theta$ needs it.' },
            { tex: '\\sin 2\\theta = 2\\left(-\\frac{3}{5}\\right)\\left(-\\frac{4}{5}\\right) = \\frac{24}{25}', why: 'Double-angle formula for sine. Two negatives make a positive.' },
            { tex: '\\cos 2\\theta = 2\\left(-\\frac{4}{5}\\right)^2 - 1 = \\frac{32}{25} - 1 = \\frac{7}{25}', why: 'The cosine-only form uses exactly what we were given.' },
            { tex: '\\tan 2\\theta = \\frac{\\sin 2\\theta}{\\cos 2\\theta} = \\frac{24/25}{7/25} = \\frac{24}{7}', why: 'Quotient identity — easier than the $\\tan 2x$ formula once we have both.' },
          ],
          result: 'Both $\\sin 2\\theta$ and $\\cos 2\\theta$ are positive, so $2\\theta$ is coterminal with a quadrant I angle. Consistent: $\\theta \\approx 216.9°$, so $2\\theta \\approx 433.7° = 360° + 73.7°$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why $\\cos 2\\theta$ often needs no quadrant',
          text: 'The forms $1 - 2\\sin^2\\theta$ and $2\\cos^2\\theta - 1$ only involve **squares**, and squares erase signs. So if you know $\\sin\\theta$, you get $\\cos 2\\theta$ without ever deciding the sign of $\\cos\\theta$. By contrast $\\sin 2\\theta = 2\\sin\\theta\\cos\\theta$ needs both signs.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Reflections in graphics',
          text: 'The matrix that reflects a 2D vector across a line through the origin at angle $\\theta$ is $\\begin{pmatrix} \\cos 2\\theta & \\sin 2\\theta \\\\ \\sin 2\\theta & -\\cos 2\\theta \\end{pmatrix}$. If you know the line\'s unit direction $(c, s) = (\\cos\\theta, \\sin\\theta)$, the double-angle formulas give the entries as $c^2 - s^2$ and $2cs$ — no trig calls at all. Mirrors, bouncing light rays and billiard physics use exactly this.',
        },
      ],
    },
    // 4 ─────────────────────────────────────────────────────────────
    {
      kind: 'numeric',
      prompt: 'If $\\sin\\theta = \\frac{2}{3}$, find $\\cos 2\\theta$. (You are not told the quadrant — you do not need it.)',
      label: '$\\cos 2\\theta =$',
      answer: '1/9',
      answerTex: '\\frac{1}{9}',
      hint: 'Which form of $\\cos 2\\theta$ uses only $\\sin\\theta$?',
      explanation: 'Use $\\cos 2\\theta = 1 - 2\\sin^2\\theta = 1 - 2\\cdot\\frac{4}{9} = 1 - \\frac{8}{9} = \\frac{1}{9}$. Because only $\\sin^2\\theta$ appears, the answer is the same whichever quadrant $\\theta$ is in.',
    },
    // 5 ─────────────────────────────────────────────────────────────
    {
      kind: 'numeric',
      prompt: 'If $\\cos\\theta = \\frac{5}{13}$ and $\\theta$ is in quadrant IV, find $\\sin 2\\theta$.',
      label: '$\\sin 2\\theta =$',
      answer: '-120/169',
      answerTex: '-\\frac{120}{169}',
      hint: 'First find $\\sin\\theta$ — what sign does sine have in quadrant IV?',
      explanation: '$\\sin\\theta = -\\sqrt{1 - \\frac{25}{169}} = -\\frac{12}{13}$ (negative in quadrant IV). Then $\\sin 2\\theta = 2\\sin\\theta\\cos\\theta = 2\\left(-\\frac{12}{13}\\right)\\left(\\frac{5}{13}\\right) = -\\frac{120}{169}$. Here the quadrant matters, because $\\sin 2\\theta$ uses $\\sin\\theta$ itself, not its square.',
    },
    // 6 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Power-reducing formulas',
      blocks: [
        {
          type: 'p',
          text: 'Now read the two one-function forms of $\\cos 2x$ the other way round. Solve $\\cos 2x = 1 - 2\\sin^2 x$ for $\\sin^2 x$, and $\\cos 2x = 2\\cos^2 x - 1$ for $\\cos^2 x$. A **square** turns into a **first power** of a cosine with a doubled angle.',
        },
        {
          type: 'derivation',
          title: 'Solve for the squares',
          steps: [
            { tex: '\\cos 2x = 1 - 2\\sin^2 x', why: 'The sine-only form.' },
            { tex: '2\\sin^2 x = 1 - \\cos 2x', why: 'Add $2\\sin^2 x$ and subtract $\\cos 2x$ on both sides.' },
            { tex: '\\sin^2 x = \\frac{1 - \\cos 2x}{2}', why: 'Divide by $2$.' },
            { tex: '\\cos^2 x = \\frac{1 + \\cos 2x}{2}', why: 'Same steps starting from $\\cos 2x = 2\\cos^2 x - 1$.' },
          ],
          result: 'These are the [[power-reducing-formulas]]. Dividing them gives $\\tan^2 x = \\frac{1 - \\cos 2x}{1 + \\cos 2x}$.',
        },
        {
          type: 'graph',
          x: [-6.5, 6.5],
          y: [-0.3, 1.3],
          xStep: 'pi',
          functions: [
            { expr: 'sin(x)^2', label: '$y = \\sin^2 x$', color: 'blue' },
            { expr: '(1 - cos(2x))/2', label: '$y = \\frac{1 - \\cos 2x}{2}$', color: 'orange', dashed: true },
          ],
          hlines: [{ y: 0.5, label: 'midline y = 1/2', color: 'gray' }],
          caption: 'The graph of $\\sin^2 x$ is itself a perfect sinusoid: midline $\\frac{1}{2}$, amplitude $\\frac{1}{2}$, period $\\pi$, flipped. That is exactly what $\\frac{1}{2} - \\frac{1}{2}\\cos 2x$ describes.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why you will need these in Calculus II',
          text: 'There is no simple rule for undoing the derivative of $\\sin^2 x$ directly, but $\\frac{1 - \\cos 2x}{2}$ is easy: in Calc II you will find the area-accumulating function (the *antiderivative*) $\\int \\sin^2 x\\,dx = \\frac{x}{2} - \\frac{\\sin 2x}{4} + C$ in one line this way. Every even power of sine or cosine is handled by applying power reduction repeatedly, as below.',
        },
        {
          type: 'derivation',
          title: 'Rewrite $\\sin^4 x$ with no powers',
          steps: [
            { tex: '\\sin^4 x = \\left(\\sin^2 x\\right)^2 = \\left(\\frac{1 - \\cos 2x}{2}\\right)^2', why: 'Power-reduce the inner square.' },
            { tex: '= \\frac{1 - 2\\cos 2x + \\cos^2 2x}{4}', why: 'Expand $(1 - u)^2 = 1 - 2u + u^2$ and square the denominator.' },
            { tex: '= \\frac{1}{4}\\left(1 - 2\\cos 2x + \\frac{1 + \\cos 4x}{2}\\right)', why: 'A square is left: power-reduce $\\cos^2 2x$, where the "angle" is $2x$, so its double is $4x$.' },
            { tex: '= \\frac{3}{8} - \\frac{1}{2}\\cos 2x + \\frac{1}{8}\\cos 4x', why: 'Distribute $\\frac{1}{4}$ and combine $\\frac{1}{4} + \\frac{1}{8} = \\frac{3}{8}$.' },
          ],
          result: '$\\sin^4 x = \\frac{3}{8} - \\frac{1}{2}\\cos 2x + \\frac{1}{8}\\cos 4x$: only first powers of cosines remain.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Signal processing view',
          text: 'Squaring a pure tone of frequency $f$ produces a constant (DC) part plus a tone at $2f$ — that is $\\sin^2 x = \\frac{1}{2} - \\frac{1}{2}\\cos 2x$. Audio distortion effects and the power of an AC signal both rest on this identity.',
        },
      ],
    },
    // 7 ─────────────────────────────────────────────────────────────
    {
      kind: 'fill',
      prompt: 'Complete the power-reducing formula for cosine.',
      template: '$\\cos^2 x = \\dfrac{1}{2}\\big($ ___ $\\big)$',
      blanks: [{ answers: ['$1 + \\cos 2x$'] }],
      wordBank: ['$1 + \\cos 2x$', '$1 - \\cos 2x$', '$1 + \\cos x$', '$1 + 2\\cos x$'],
      explanation: 'From $\\cos 2x = 2\\cos^2 x - 1$: add $1$ and divide by $2$ to get $\\cos^2 x = \\frac{1 + \\cos 2x}{2}$. Check at $x = 0$: $\\cos^2 0 = 1$ and $\\frac{1 + 1}{2} = 1$ ✓. The minus version belongs to $\\sin^2 x$ (check: at $x = 0$ it gives $0 = \\sin^2 0$). The angle must double — $1 + \\cos x$ is the most common slip.',
    },
    // 8 ─────────────────────────────────────────────────────────────
    {
      kind: 'expr',
      prompt: 'Rewrite $\\sin^2 x\\cos^2 x$ using no powers of trig functions (only first powers like $\\cos 4x$).',
      label: '$\\sin^2 x\\cos^2 x =$',
      answer: '(1 - cos(4x))/8',
      answerTex: '\\frac{1 - \\cos 4x}{8}',
      hint: 'Shortcut: $\\sin x\\cos x = \\frac{1}{2}\\sin 2x$. Square that, then power-reduce $\\sin^2 2x$.',
      explanation: '$\\sin^2 x\\cos^2 x = (\\sin x\\cos x)^2 = \\left(\\frac{\\sin 2x}{2}\\right)^2 = \\frac{\\sin^2 2x}{4} = \\frac{1}{4}\\cdot\\frac{1 - \\cos 4x}{2} = \\frac{1 - \\cos 4x}{8}$. (Multiplying the two power-reducing formulas also works: $\\frac{(1 - \\cos 2x)(1 + \\cos 2x)}{4} = \\frac{1 - \\cos^2 2x}{4} = \\frac{\\sin^2 2x}{4}$ — and you land in the same place.)',
    },
    // 9 ─────────────────────────────────────────────────────────────
    {
      kind: 'error',
      prompt: 'A student is told $\\sin\\theta = \\frac{3}{5}$ with $\\theta$ in quadrant II and computes $\\sin 2\\theta$. Tap the first line that is wrong.',
      lines: [
        '$\\sin\\theta = \\frac{3}{5}$, $\\theta$ in quadrant II',
        '$\\cos\\theta = \\sqrt{1 - \\frac{9}{25}} = \\frac{4}{5}$',
        '$\\sin 2\\theta = 2\\sin\\theta\\cos\\theta$',
        '$= 2\\cdot\\frac{3}{5}\\cdot\\frac{4}{5} = \\frac{24}{25}$',
      ],
      errorLines: [2],
      explanation: 'Line 2 takes the positive square root, but cosine is **negative** in quadrant II: $\\cos\\theta = -\\frac{4}{5}$. Then $\\sin 2\\theta = 2\\cdot\\frac{3}{5}\\cdot\\left(-\\frac{4}{5}\\right) = -\\frac{24}{25}$. This makes sense: $\\theta$ is between $90°$ and $180°$, so $2\\theta$ is between $180°$ and $360°$, where sine is negative.',
    },
    // 10 ────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Half-angle formulas',
      blocks: [
        {
          type: 'p',
          text: 'The power-reducing formulas relate an angle to *twice* that angle. Replace $x$ by $\\frac{\\theta}{2}$, so the doubled angle is $\\theta$, then take square roots. The result expresses functions of $\\frac{\\theta}{2}$ in terms of $\\cos\\theta$ — the [[half-angle-formulas]].',
        },
        {
          type: 'derivation',
          title: 'Derive $\\sin\\frac{\\theta}{2}$',
          steps: [
            { tex: '\\sin^2 x = \\frac{1 - \\cos 2x}{2}', why: 'Start from power reduction.' },
            { tex: '\\sin^2 \\frac{\\theta}{2} = \\frac{1 - \\cos\\theta}{2}', why: 'Substitute $x = \\frac{\\theta}{2}$, so $2x = \\theta$.' },
            { tex: '\\sin\\frac{\\theta}{2} = \\pm\\sqrt{\\frac{1 - \\cos\\theta}{2}}', why: 'Take square roots. A square root only gives the size; the sign must be chosen separately.' },
          ],
          result: 'The same steps on $\\cos^2 x$ give $\\cos\\frac{\\theta}{2} = \\pm\\sqrt{\\frac{1 + \\cos\\theta}{2}}$.',
        },
        {
          type: 'theorem',
          name: 'Half-angle formulas',
          tex: '\\sin\\frac{\\theta}{2} = \\pm\\sqrt{\\frac{1 - \\cos\\theta}{2}} \\qquad \\cos\\frac{\\theta}{2} = \\pm\\sqrt{\\frac{1 + \\cos\\theta}{2}} \\qquad \\tan\\frac{\\theta}{2} = \\frac{1 - \\cos\\theta}{\\sin\\theta} = \\frac{\\sin\\theta}{1 + \\cos\\theta}',
          text: 'Choose $\\pm$ by the quadrant of $\\frac{\\theta}{2}$ — **not** the quadrant of $\\theta$. The tangent forms need no $\\pm$.',
        },
        {
          type: 'graph',
          x: [-6.5, 6.5],
          y: [-1.3, 1.3],
          xStep: 'pi',
          functions: [
            { expr: 'sin(x/2)', label: '$y = \\sin\\frac{x}{2}$', color: 'blue' },
            { expr: 'sqrt((1 - cos(x))/2)', label: '$y = \\sqrt{\\frac{1 - \\cos x}{2}}$', color: 'orange', dashed: true },
          ],
          points: [
            { x: 'a', y: 'sin(a/2)', color: 'blue' },
            { x: 'a', y: 'sqrt((1 - cos(a))/2)', color: 'orange' },
          ],
          sliders: [{ name: 'a', min: -6.28, max: 6.28, step: 0.01, value: -2, label: '$\\theta$' }],
          readouts: [
            { label: '$\\sin\\frac{\\theta}{2} =$', expr: 'sin(a/2)', digits: 4 },
            { label: '$\\sqrt{\\frac{1 - \\cos\\theta}{2}} =$', expr: 'sqrt((1 - cos(a))/2)', digits: 4 },
          ],
          caption: 'The square root is never negative, so it matches $\\sin\\frac{\\theta}{2}$ only where that is $\\ge 0$ (here $0 \\le \\theta \\le 2\\pi$). Slide $\\theta$ negative and the two values differ by a sign — that is why the formula needs $\\pm$.',
        },
        {
          type: 'derivation',
          title: 'Find $\\cos 15°$ with a half angle',
          steps: [
            { tex: '\\cos 15° = +\\sqrt{\\frac{1 + \\cos 30°}{2}}', why: '$15° = \\frac{30°}{2}$, and $15°$ is in quadrant I, so take $+$.' },
            { tex: '= \\sqrt{\\frac{1 + \\frac{\\sqrt{3}}{2}}{2}} = \\sqrt{\\frac{2 + \\sqrt{3}}{4}}', why: 'Multiply top and bottom of the inner fraction by $2$.' },
            { tex: '= \\frac{\\sqrt{2 + \\sqrt{3}}}{2}', why: '$\\sqrt{4} = 2$ comes out of the denominator.' },
          ],
          result: 'The previous lesson gave $\\cos 15° = \\frac{\\sqrt{6} + \\sqrt{2}}{4}$. Same number? Square it: $\\frac{6 + 2\\sqrt{12} + 2}{16} = \\frac{8 + 4\\sqrt{3}}{16} = \\frac{2 + \\sqrt{3}}{4}$ ✓. Two methods, two forms, one value.',
        },
        {
          type: 'deepdive',
          title: 'Why the tangent half-angle formula has no $\\pm$',
          blocks: [
            {
              type: 'p',
              text: 'Multiply top and bottom of $\\tan\\frac{\\theta}{2} = \\frac{\\sin(\\theta/2)}{\\cos(\\theta/2)}$ by $2\\cos\\frac{\\theta}{2}$:',
            },
            { type: 'math', tex: '\\tan\\frac{\\theta}{2} = \\frac{2\\sin\\frac{\\theta}{2}\\cos\\frac{\\theta}{2}}{2\\cos^2\\frac{\\theta}{2}} = \\frac{\\sin\\theta}{1 + \\cos\\theta}' },
            {
              type: 'p',
              text: 'The numerator is $\\sin\\theta$ by the double-angle formula, and the denominator is $1 + \\cos\\theta$ by power reduction. No square root was taken, so no sign ambiguity appears: the formula gets the sign right automatically. Multiplying by the conjugate $1 - \\cos\\theta$ gives the other form $\\frac{1 - \\cos\\theta}{\\sin\\theta}$.',
            },
          ],
        },
      ],
    },
    // 11 ────────────────────────────────────────────────────────────
    {
      kind: 'numeric',
      prompt: 'Use a half-angle formula to find the exact value of $\\sin\\frac{\\pi}{8}$.',
      label: '$\\sin\\frac{\\pi}{8} =$',
      answer: 'sqrt(2 - sqrt(2))/2',
      answerTex: '\\frac{\\sqrt{2 - \\sqrt{2}}}{2}',
      hint: '$\\frac{\\pi}{8} = \\frac{1}{2}\\cdot\\frac{\\pi}{4}$, and $\\cos\\frac{\\pi}{4} = \\frac{\\sqrt{2}}{2}$. Type nested roots like `sqrt(2 - sqrt(2))/2`.',
      explanation: '$\\frac{\\pi}{8}$ is in quadrant I, so take $+$: $\\sin\\frac{\\pi}{8} = \\sqrt{\\frac{1 - \\cos(\\pi/4)}{2}} = \\sqrt{\\frac{1 - \\frac{\\sqrt{2}}{2}}{2}} = \\sqrt{\\frac{2 - \\sqrt{2}}{4}} = \\frac{\\sqrt{2 - \\sqrt{2}}}{2} \\approx 0.3827$.',
    },
    // 12 ────────────────────────────────────────────────────────────
    {
      kind: 'mcq',
      prompt: 'Given $\\cos\\theta = -\\frac{7}{25}$ with $\\pi < \\theta < \\frac{3\\pi}{2}$, find $\\cos\\frac{\\theta}{2}$.',
      options: [
        { text: '$\\frac{3}{5}$', why: 'Right size, wrong sign. $\\frac{\\theta}{2}$ lies between $\\frac{\\pi}{2}$ and $\\frac{3\\pi}{4}$ — quadrant II, where cosine is negative.' },
        { text: '$-\\frac{4}{5}$', why: 'This uses $1 - \\cos\\theta$ under the root, which is the **sine** half-angle formula. That value, with a $+$, is $\\sin\\frac{\\theta}{2}$.' },
        { text: '$-\\frac{3}{5}$', correct: true, why: '$\\sqrt{\\frac{1 + (-7/25)}{2}} = \\sqrt{\\frac{18/25}{2}} = \\sqrt{\\frac{9}{25}} = \\frac{3}{5}$, and cosine is negative in quadrant II, where $\\frac{\\theta}{2}$ lives.' },
        { text: '$\\frac{4}{5}$', why: 'Both the formula (sine\'s instead of cosine\'s) and the sign are off.' },
      ],
      explanation: 'Step 1, the size: $\\sqrt{\\frac{1 + \\cos\\theta}{2}} = \\sqrt{\\frac{1 - 7/25}{2}} = \\sqrt{\\frac{9}{25}} = \\frac{3}{5}$. Step 2, the sign: halve the interval, $\\frac{\\pi}{2} < \\frac{\\theta}{2} < \\frac{3\\pi}{4}$, so $\\frac{\\theta}{2}$ is in quadrant II and its cosine is negative. Answer: $-\\frac{3}{5}$. Note that $\\theta$ itself was in quadrant III — using *its* quadrant to pick the sign is the trap.',
    },
    // 13 ────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Building bigger formulas — and half angles in 3D games',
      blocks: [
        {
          type: 'p',
          text: 'The formulas combine. Writing $3x = 2x + x$ and applying the sum formula, then the double-angle formulas, gives a [[trig-identity]] for triple angles. The same strategy works for $4x$, $5x$, and beyond.',
        },
        {
          type: 'derivation',
          title: 'Express $\\cos 3x$ in terms of $\\cos x$',
          steps: [
            { tex: '\\cos 3x = \\cos(2x + x)', why: 'Split the triple angle into a double angle plus a single angle.' },
            { tex: '= \\cos 2x\\cos x - \\sin 2x\\sin x', why: 'Cosine sum formula.' },
            { tex: '= (2\\cos^2 x - 1)\\cos x - (2\\sin x\\cos x)\\sin x', why: 'Double-angle formulas. Choose the cosine-only form of $\\cos 2x$, since the target uses only $\\cos x$.' },
            { tex: '= 2\\cos^3 x - \\cos x - 2\\sin^2 x\\cos x', why: 'Distribute.' },
            { tex: '= 2\\cos^3 x - \\cos x - 2(1 - \\cos^2 x)\\cos x', why: 'Replace the remaining $\\sin^2 x$ with $1 - \\cos^2 x$.' },
            { tex: '= 4\\cos^3 x - 3\\cos x', why: 'Distribute and collect: $2\\cos^3 x + 2\\cos^3 x = 4\\cos^3 x$ and $-\\cos x - 2\\cos x = -3\\cos x$.' },
          ],
          result: '$\\cos 3x = 4\\cos^3 x - 3\\cos x$. Check at $x = 0$: $1 = 4 - 3$ ✓.',
        },
        {
          type: 'table',
          headers: ['Goal', 'Reach for'],
          rows: [
            ['Product $\\sin x\\cos x$', '$\\sin 2x = 2\\sin x\\cos x$'],
            ['A square, $\\sin^2 x$ or $\\cos^2 x$, to remove', 'Power reduction: $\\frac{1 \\mp \\cos 2x}{2}$'],
            ['$\\cos 2\\theta$ from $\\sin\\theta$ alone', '$1 - 2\\sin^2\\theta$ (no quadrant needed)'],
            ['Exact value at half a known angle', 'Half-angle formula; sign from the quadrant of $\\frac{\\theta}{2}$'],
            ['Multiple angle like $3x$', 'Split as $2x + x$, then sum + double-angle formulas'],
          ],
          caption: 'Which formula to use, by situation.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Quaternions use half angles',
          text: '3D engines (Unity, Unreal, Godot) store orientations as **quaternions**. The quaternion for a rotation by angle $\\theta$ about a unit axis $\\vec{u}$ is $\\left(\\cos\\frac{\\theta}{2},\\; \\sin\\frac{\\theta}{2}\\,\\vec{u}\\right)$ — half angles, not full ones. When an engine converts a quaternion back to a rotation matrix, the double-angle formulas turn those half angles back into $\\cos\\theta$ and $\\sin\\theta$: entries like $1 - 2\\sin^2\\frac{\\theta}{2} = \\cos\\theta$ appear explicitly in the conversion code.',
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'Calc II courses expect you to have $\\sin 2x = 2\\sin x\\cos x$, $\\cos^2 x = \\frac{1 + \\cos 2x}{2}$ and $\\sin^2 x = \\frac{1 - \\cos 2x}{2}$ memorised cold. If memory fails, rebuild them in seconds from $\\cos(x + x)$ and $\\sin^2 x + \\cos^2 x = 1$.',
        },
      ],
    },
    // 14 ────────────────────────────────────────────────────────────
    {
      kind: 'expr',
      prompt: 'Using the same strategy, express $\\sin 3x$ in terms of $\\sin x$ only.',
      label: '$\\sin 3x =$',
      answer: '3sin(x) - 4sin(x)^3',
      answerTex: '3\\sin x - 4\\sin^3 x',
      hint: '$\\sin(2x + x) = \\sin 2x\\cos x + \\cos 2x\\sin x$. Use $\\cos 2x = 1 - 2\\sin^2 x$ and replace $\\cos^2 x$ with $1 - \\sin^2 x$.',
      explanation: '$\\sin 3x = \\sin 2x\\cos x + \\cos 2x\\sin x = 2\\sin x\\cos^2 x + (1 - 2\\sin^2 x)\\sin x = 2\\sin x(1 - \\sin^2 x) + \\sin x - 2\\sin^3 x = 3\\sin x - 4\\sin^3 x$. Check at $x = \\frac{\\pi}{2}$: $\\sin\\frac{3\\pi}{2} = -1$ and $3 - 4 = -1$ ✓.',
    },
    // 15 ────────────────────────────────────────────────────────────
    {
      kind: 'truefalse',
      prompt: '$\\cos\\dfrac{\\theta}{2} = \\sqrt{\\dfrac{1 + \\cos\\theta}{2}}$ for every angle $\\theta$.',
      answer: false,
      explanation: 'The square root is never negative, but $\\cos\\frac{\\theta}{2}$ can be. Counterexample: $\\theta = 2\\pi$ gives $\\cos\\frac{\\theta}{2} = \\cos\\pi = -1$, while $\\sqrt{\\frac{1 + \\cos 2\\pi}{2}} = \\sqrt{1} = 1$. The correct formula has $\\pm$, with the sign chosen by the quadrant of $\\frac{\\theta}{2}$ (here $\\frac{\\theta}{2} = \\pi$, where cosine is negative). The formula without $\\pm$ really computes $\\left|\\cos\\frac{\\theta}{2}\\right|$.',
    },
  ],
  takeaways: [
    'Double-angle formulas are the sum formulas with $\\alpha = \\beta$: $\\sin 2x = 2\\sin x\\cos x$, $\\cos 2x = \\cos^2 x - \\sin^2 x = 2\\cos^2 x - 1 = 1 - 2\\sin^2 x$.',
    '$\\cos 2\\theta$ can be found from $\\sin\\theta$ or $\\cos\\theta$ alone without a quadrant; $\\sin 2\\theta$ needs both signs.',
    'Power reduction: $\\sin^2 x = \\frac{1 - \\cos 2x}{2}$, $\\cos^2 x = \\frac{1 + \\cos 2x}{2}$ — the key to integrating even powers in Calc II.',
    'Half-angle formulas: $\\sin\\frac{\\theta}{2} = \\pm\\sqrt{\\frac{1 - \\cos\\theta}{2}}$, $\\cos\\frac{\\theta}{2} = \\pm\\sqrt{\\frac{1 + \\cos\\theta}{2}}$, with the sign set by the quadrant of $\\frac{\\theta}{2}$.',
    'Multiple-angle formulas like $\\cos 3x = 4\\cos^3 x - 3\\cos x$ come from splitting $3x = 2x + x$.',
  ],
  reading: [
    {
      title: 'OpenStax Precalculus 2e — 7.3 Double-Angle, Half-Angle, and Reduction Formulas',
      url: 'https://openstax.org/books/precalculus-2e/pages/7-3-double-angle-half-angle-and-reduction-formulas',
      source: 'openstax',
      note: 'Worked examples of all three families, including reducing $\\cos^4 x$.',
    },
    {
      title: "Paul's Online Notes — Integrals Involving Trig Functions",
      url: 'https://tutorial.math.lamar.edu/Classes/CalcII/IntegralsWithTrig.aspx',
      source: 'paul',
      note: 'A preview of exactly where power reduction and $\\sin 2x = 2\\sin x\\cos x$ get used in Calculus II.',
    },
    {
      title: 'Wikipedia — List of trigonometric identities',
      url: 'https://en.wikipedia.org/wiki/List_of_trigonometric_identities',
      source: 'wikipedia',
      note: 'The multiple-angle and power-reduction sections list formulas for higher powers and angles.',
    },
  ],
};
