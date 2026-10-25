import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'trig-sum-difference',
  title: 'Sum and Difference Formulas',
  summary: 'Why $\\cos(\\alpha + \\beta) \\neq \\cos\\alpha + \\cos\\beta$, what it equals instead, a proof from the unit circle, and the rotation formula behind every 2D game.',
  minutes: 19,
  objectives: [
    'Prove the difference formula for cosine with the unit-circle distance argument',
    'Derive the sum and difference formulas for sine, cosine and tangent from it',
    'Find exact values such as $\\cos 15°$ and $\\sin\\frac{7\\pi}{12}$',
    'Evaluate $\\sin(\\alpha + \\beta)$ from given values and quadrants, and collapse expressions like $\\sin 3x\\cos x - \\cos 3x \\sin x$',
    'Derive the 2D rotation formula and explain how it follows from the sum formulas',
  ],
  steps: [
    // 1 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Trig functions do not distribute',
      blocks: [
        {
          type: 'p',
          text: 'It is tempting to write $\\cos(\\alpha + \\beta) = \\cos\\alpha + \\cos\\beta$, the same way $2(a + b) = 2a + 2b$. But cosine is not multiplication. Test it with $\\alpha = \\beta = \\frac{\\pi}{3}$: the left side is $\\cos\\frac{2\\pi}{3} = -\\frac{1}{2}$, the right side is $\\frac{1}{2} + \\frac{1}{2} = 1$. Not even the same sign.',
        },
        {
          type: 'graph',
          x: [-6.5, 6.5],
          y: [-2.3, 2.3],
          xStep: 'pi',
          functions: [
            { expr: 'sin(x + b)', label: '$y = \\sin(x + b)$', color: 'blue' },
            { expr: 'sin(x) + sin(b)', label: '$y = \\sin x + \\sin b$', color: 'red', dashed: true },
          ],
          sliders: [{ name: 'b', min: -3.14, max: 3.14, step: 0.01, value: 1, label: '$b$' }],
          caption: 'Adding $b$ *inside* sine shifts the wave sideways; adding $\\sin b$ *outside* shifts it up or down. They coincide only at $b = 0$ (more generally, $b$ a multiple of $2\\pi$) — so $\\sin(x + b) = \\sin x + \\sin b$ is not an identity.',
        },
        {
          type: 'p',
          text: 'So what *is* $\\cos(\\alpha + \\beta)$? The answer — the [[sum-and-difference-formulas]] — is one of the most useful results in trigonometry. It gives exact values for angles like $15°$ and $75°$, it is the engine behind the double-angle formulas in the next lesson, it is how calculus finds the derivative of $\\sin x$, and it is literally the formula a game uses to rotate a sprite.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why we should expect something more complicated',
          text: 'Adding angles means composing rotations: turn by $\\beta$, then by $\\alpha$. The new point\'s $x$-coordinate depends on *both* coordinates of the old point (rotating a point mixes its $x$ and $y$). So $\\cos(\\alpha + \\beta)$ should involve both the cosines and the sines of $\\alpha$ and $\\beta$ — and it does.',
        },
      ],
    },
    // 2 ─────────────────────────────────────────────────────────────
    {
      kind: 'truefalse',
      prompt: '$\\sin(\\alpha + \\beta) = \\sin\\alpha + \\sin\\beta$ for all angles $\\alpha$ and $\\beta$.',
      answer: false,
      explanation: 'Counterexample: $\\alpha = \\beta = \\frac{\\pi}{2}$ gives $\\sin\\pi = 0$ on the left but $1 + 1 = 2$ on the right. Sine is not a linear function, so it does not distribute over addition. The correct formula is $\\sin(\\alpha + \\beta) = \\sin\\alpha\\cos\\beta + \\cos\\alpha\\sin\\beta$.',
    },
    // 3 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Proof: the cosine difference formula',
      blocks: [
        {
          type: 'p',
          text: 'We prove one formula carefully, and the rest will follow from it in a few lines. The idea is beautifully simple: **rotation does not change distances**. Put the angles $\\alpha$ and $\\beta$ on the [[unit-circle]] and measure the chord between them in two different ways.',
        },
        {
          type: 'graph',
          x: [-1.6, 1.6],
          y: [-1.3, 1.3],
          equal: true,
          parametric: [{ x: 'cos(t)', y: 'sin(t)', t: [0, '2pi'], color: 'gray' }],
          segments: [
            { from: ['cos(a)', 'sin(a)'], to: ['cos(b)', 'sin(b)'], color: 'blue', label: 'chord' },
            { from: ['cos(a - b)', 'sin(a - b)'], to: [1, 0], color: 'red', label: 'rotated chord' },
            { from: [0, 0], to: ['cos(a)', 'sin(a)'], color: 'gray', dashed: true },
            { from: [0, 0], to: ['cos(b)', 'sin(b)'], color: 'gray', dashed: true },
          ],
          points: [
            { x: 'cos(a)', y: 'sin(a)', label: 'P (angle α)', color: 'blue' },
            { x: 'cos(b)', y: 'sin(b)', label: 'Q (angle β)', color: 'blue' },
            { x: 'cos(a - b)', y: 'sin(a - b)', label: "P' (angle α − β)", color: 'red' },
            { x: 1, y: 0, label: "Q' (angle 0)", color: 'red' },
          ],
          sliders: [
            { name: 'a', min: 0, max: 6.28, step: 0.01, value: 2.2, label: '$\\alpha$' },
            { name: 'b', min: 0, max: 6.28, step: 0.01, value: 0.7, label: '$\\beta$' },
          ],
          readouts: [
            { label: 'blue chord$^2$:', expr: '(cos(a) - cos(b))^2 + (sin(a) - sin(b))^2', digits: 4 },
            { label: 'red chord$^2$:', expr: '(cos(a - b) - 1)^2 + sin(a - b)^2', digits: 4 },
          ],
          caption: 'Rotating both points clockwise by $\\beta$ moves $Q$ to $(1, 0)$ and $P$ to angle $\\alpha - \\beta$. The chord is just moved, not stretched: the two readouts always agree.',
        },
        {
          type: 'derivation',
          title: 'Prove $\\cos(\\alpha - \\beta) = \\cos\\alpha\\cos\\beta + \\sin\\alpha\\sin\\beta$',
          steps: [
            { tex: '|PQ|^2 = (\\cos\\alpha - \\cos\\beta)^2 + (\\sin\\alpha - \\sin\\beta)^2', why: 'Distance formula between $P = (\\cos\\alpha, \\sin\\alpha)$ and $Q = (\\cos\\beta, \\sin\\beta)$, squared.' },
            { tex: '= \\cos^2\\alpha - 2\\cos\\alpha\\cos\\beta + \\cos^2\\beta + \\sin^2\\alpha - 2\\sin\\alpha\\sin\\beta + \\sin^2\\beta', why: 'Expand both squares with $(u - v)^2 = u^2 - 2uv + v^2$.' },
            { tex: '= 2 - 2(\\cos\\alpha\\cos\\beta + \\sin\\alpha\\sin\\beta)', why: 'Regroup: $\\cos^2\\alpha + \\sin^2\\alpha = 1$ and $\\cos^2\\beta + \\sin^2\\beta = 1$.' },
            { tex: "|P'Q'|^2 = (\\cos(\\alpha - \\beta) - 1)^2 + \\sin^2(\\alpha - \\beta)", why: "Now measure the rotated chord between $P' = (\\cos(\\alpha - \\beta), \\sin(\\alpha - \\beta))$ and $Q' = (1, 0)$." },
            { tex: '= \\cos^2(\\alpha - \\beta) - 2\\cos(\\alpha - \\beta) + 1 + \\sin^2(\\alpha - \\beta) = 2 - 2\\cos(\\alpha - \\beta)', why: 'Expand and use the Pythagorean identity again.' },
            { tex: '2 - 2\\cos(\\alpha - \\beta) = 2 - 2(\\cos\\alpha\\cos\\beta + \\sin\\alpha\\sin\\beta)', why: "Rotation preserves distance, so $|P'Q'|^2 = |PQ|^2$. Set the two results equal." },
            { tex: '\\cos(\\alpha - \\beta) = \\cos\\alpha\\cos\\beta + \\sin\\alpha\\sin\\beta', why: 'Subtract $2$ from both sides and divide by $-2$. (Here we really are solving an equation: both sides are numbers we have shown to be equal.)' },
          ],
          result: 'The cosine difference formula holds for **all** angles $\\alpha, \\beta$ — the argument never assumed acute angles or a particular quadrant.',
        },
        {
          type: 'callout',
          variant: 'history',
          text: 'Ptolemy (2nd century) used an equivalent result about chords in a circle to build his table of chords — effectively a sine table in half-degree steps — that astronomers relied on for over a thousand years. The sum formulas were the tool that let him compute new entries from known ones.',
        },
      ],
    },
    // 4 ─────────────────────────────────────────────────────────────
    {
      kind: 'order',
      prompt: 'Put the steps of the distance proof of the cosine difference formula in order.',
      lines: [
        'Place $P$ at angle $\\alpha$ and $Q$ at angle $\\beta$ on the unit circle',
        'Compute $|PQ|^2 = 2 - 2(\\cos\\alpha\\cos\\beta + \\sin\\alpha\\sin\\beta)$',
        'Rotate both points by $-\\beta$, so $Q$ lands on $(1, 0)$ and $P$ at angle $\\alpha - \\beta$',
        'Compute the rotated chord: $2 - 2\\cos(\\alpha - \\beta)$',
        'Rotation preserves distance, so set the two expressions equal and simplify',
      ],
      distractors: ['Assume $\\cos(\\alpha - \\beta) = \\cos\\alpha - \\cos\\beta$ and check it'],
      explanation: 'Compute one chord, rotate, compute the same chord again, and equate. The proof works because the two computations describe the *same* length. The distractor starts from a false formula; checking a guess is not proving anything.',
    },
    // 5 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'The whole family from one formula',
      blocks: [
        {
          type: 'p',
          text: 'Everything else follows from the cosine difference formula, the [[even-odd-identities]], and one special case. Watch how little work each one takes.',
        },
        {
          type: 'derivation',
          title: 'Cosine of a sum',
          steps: [
            { tex: '\\cos(\\alpha + \\beta) = \\cos(\\alpha - (-\\beta))', why: 'Adding $\\beta$ is subtracting $-\\beta$.' },
            { tex: '= \\cos\\alpha\\cos(-\\beta) + \\sin\\alpha\\sin(-\\beta)', why: 'Apply the difference formula with $-\\beta$ in place of $\\beta$.' },
            { tex: '= \\cos\\alpha\\cos\\beta - \\sin\\alpha\\sin\\beta', why: 'Cosine is even, sine is odd: $\\cos(-\\beta) = \\cos\\beta$, $\\sin(-\\beta) = -\\sin\\beta$.' },
          ],
        },
        {
          type: 'derivation',
          title: 'Cofunction identities, then sine of a sum',
          steps: [
            { tex: '\\cos\\left(\\tfrac{\\pi}{2} - \\theta\\right) = \\cos\\tfrac{\\pi}{2}\\cos\\theta + \\sin\\tfrac{\\pi}{2}\\sin\\theta = \\sin\\theta', why: 'Difference formula with $\\alpha = \\frac{\\pi}{2}$; $\\cos\\frac{\\pi}{2} = 0$, $\\sin\\frac{\\pi}{2} = 1$. Replacing $\\theta$ by $\\frac{\\pi}{2} - \\theta$ also gives $\\sin(\\frac{\\pi}{2} - \\theta) = \\cos\\theta$: the [[cofunction-identities]], now proved for all angles.' },
            { tex: '\\sin(\\alpha + \\beta) = \\cos\\left(\\tfrac{\\pi}{2} - (\\alpha + \\beta)\\right) = \\cos\\left(\\left(\\tfrac{\\pi}{2} - \\alpha\\right) - \\beta\\right)', why: 'Cofunction identity, then regroup the angle so the difference formula applies.' },
            { tex: '= \\cos\\left(\\tfrac{\\pi}{2} - \\alpha\\right)\\cos\\beta + \\sin\\left(\\tfrac{\\pi}{2} - \\alpha\\right)\\sin\\beta', why: 'Difference formula with first angle $\\frac{\\pi}{2} - \\alpha$.' },
            { tex: '= \\sin\\alpha\\cos\\beta + \\cos\\alpha\\sin\\beta', why: 'Cofunction identities convert back.' },
          ],
        },
        {
          type: 'theorem',
          name: 'Sum and difference formulas',
          tex: '\\begin{aligned} \\sin(\\alpha \\pm \\beta) &= \\sin\\alpha\\cos\\beta \\pm \\cos\\alpha\\sin\\beta \\\\ \\cos(\\alpha \\pm \\beta) &= \\cos\\alpha\\cos\\beta \\mp \\sin\\alpha\\sin\\beta \\\\ \\tan(\\alpha \\pm \\beta) &= \\frac{\\tan\\alpha \\pm \\tan\\beta}{1 \\mp \\tan\\alpha\\tan\\beta} \\end{aligned}',
          text: 'Read the top signs together or the bottom signs together. The $\\mp$ means cosine *flips* the sign.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'A memory hook',
          text: '**Sine mixes and keeps the sign**: sin·cos ± cos·sin. **Cosine matches and flips the sign**: cos·cos ∓ sin·sin. If you blank on the sign for cosine, test $\\alpha = \\beta$ in the difference formula: $\\cos 0 = \\cos^2\\alpha + \\sin^2\\alpha = 1$ ✓, so the difference formula has a $+$.',
        },
        {
          type: 'deepdive',
          title: 'Deriving the tangent formula',
          blocks: [
            {
              type: 'p',
              text: 'Divide the sine formula by the cosine formula, then divide every term on top and bottom by $\\cos\\alpha\\cos\\beta$ (assuming it is nonzero):',
            },
            { type: 'math', tex: '\\tan(\\alpha + \\beta) = \\frac{\\sin\\alpha\\cos\\beta + \\cos\\alpha\\sin\\beta}{\\cos\\alpha\\cos\\beta - \\sin\\alpha\\sin\\beta} = \\frac{\\frac{\\sin\\alpha}{\\cos\\alpha} + \\frac{\\sin\\beta}{\\cos\\beta}}{1 - \\frac{\\sin\\alpha}{\\cos\\alpha}\\cdot\\frac{\\sin\\beta}{\\cos\\beta}} = \\frac{\\tan\\alpha + \\tan\\beta}{1 - \\tan\\alpha\\tan\\beta}' },
            {
              type: 'p',
              text: 'The formula breaks down exactly when $\\tan\\alpha\\tan\\beta = 1$, which is when $\\alpha + \\beta$ is an odd multiple of $\\frac{\\pi}{2}$ and the tangent of the sum is undefined.',
            },
          ],
        },
      ],
    },
    // 6 ─────────────────────────────────────────────────────────────
    {
      kind: 'fill',
      prompt: 'Fill in the signs and products.',
      template: '$\\cos(\\alpha + \\beta) = \\cos\\alpha\\cos\\beta$ ___ $\\sin\\alpha\\sin\\beta$, and $\\sin(\\alpha - \\beta) = \\sin\\alpha\\cos\\beta$ ___ $\\cos\\alpha\\sin\\beta$.',
      blanks: [{ answers: ['$-$'] }, { answers: ['$-$'] }],
      wordBank: ['$+$', '$-$', '$\\times$'],
      explanation: 'Cosine flips the sign: a **sum** inside gives a **minus** between the terms. Sine keeps the sign: a **difference** inside gives a **minus**. So both blanks are $-$. Quick check of the first with $\\alpha = \\beta = \\frac{\\pi}{4}$: $\\cos\\frac{\\pi}{2} = 0 = \\frac{1}{2} - \\frac{1}{2}$ ✓.',
    },
    // 7 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Exact values for "unfriendly" angles',
      blocks: [
        {
          type: 'p',
          text: 'You know exact values at $30°$, $45°$ and $60°$ from the [[special-right-triangles]]. The sum and difference formulas extend this to every angle you can build from them by adding or subtracting: $15° = 45° - 30°$, $75° = 45° + 30°$, $105° = 60° + 45°$, and so on. In radians: $\\frac{\\pi}{12} = \\frac{\\pi}{3} - \\frac{\\pi}{4}$, $\\frac{5\\pi}{12} = \\frac{\\pi}{4} + \\frac{\\pi}{6}$, $\\frac{7\\pi}{12} = \\frac{\\pi}{3} + \\frac{\\pi}{4}$.',
        },
        {
          type: 'derivation',
          title: 'Find $\\cos 15°$ exactly',
          steps: [
            { tex: '\\cos 15° = \\cos(45° - 30°)', why: 'Write $15°$ as a difference of special angles.' },
            { tex: '= \\cos 45°\\cos 30° + \\sin 45°\\sin 30°', why: 'Cosine difference formula (difference inside, plus between).' },
            { tex: '= \\frac{\\sqrt{2}}{2}\\cdot\\frac{\\sqrt{3}}{2} + \\frac{\\sqrt{2}}{2}\\cdot\\frac{1}{2}', why: 'Special-angle values.' },
            { tex: '= \\frac{\\sqrt{6}}{4} + \\frac{\\sqrt{2}}{4} = \\frac{\\sqrt{6} + \\sqrt{2}}{4}', why: 'Multiply: $\\sqrt{2}\\sqrt{3} = \\sqrt{6}$. Same denominator, so add.' },
          ],
          result: '$\\cos 15° = \\frac{\\sqrt{6} + \\sqrt{2}}{4} \\approx 0.9659$, which matches a calculator.',
        },
        {
          type: 'table',
          headers: ['Angle', '$\\sin$', '$\\cos$', '$\\tan$'],
          rows: [
            ['$15° = \\frac{\\pi}{12}$', '$\\frac{\\sqrt{6} - \\sqrt{2}}{4}$', '$\\frac{\\sqrt{6} + \\sqrt{2}}{4}$', '$2 - \\sqrt{3}$'],
            ['$75° = \\frac{5\\pi}{12}$', '$\\frac{\\sqrt{6} + \\sqrt{2}}{4}$', '$\\frac{\\sqrt{6} - \\sqrt{2}}{4}$', '$2 + \\sqrt{3}$'],
          ],
          caption: 'Because $15°$ and $75°$ are complementary, the sine of one is the cosine of the other — the cofunction identities at work.',
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'Exams love "find the exact value of $\\sin 105°$" or "$\\cos\\frac{11\\pi}{12}$". Exact means radicals, not decimals. Step one is always writing the angle as a sum or difference of $30°, 45°, 60°$ (or $\\frac{\\pi}{6}, \\frac{\\pi}{4}, \\frac{\\pi}{3}$) or their relatives in other quadrants; in radians, put both over the denominator $12$.',
        },
      ],
    },
    // 8 ─────────────────────────────────────────────────────────────
    {
      kind: 'numeric',
      prompt: 'Find the exact value of $\\sin 15°$.',
      label: '$\\sin 15° =$',
      answer: '(sqrt(6) - sqrt(2))/4',
      answerTex: '\\frac{\\sqrt{6} - \\sqrt{2}}{4}',
      hint: '$\\sin(45° - 30°) = \\sin 45°\\cos 30° - \\cos 45°\\sin 30°$. Type something like `(sqrt(6) - sqrt(2))/4`.',
      explanation: '$\\sin(45° - 30°) = \\frac{\\sqrt{2}}{2}\\cdot\\frac{\\sqrt{3}}{2} - \\frac{\\sqrt{2}}{2}\\cdot\\frac{1}{2} = \\frac{\\sqrt{6} - \\sqrt{2}}{4} \\approx 0.2588$. Sine keeps the sign of the operation: a difference inside gives a minus between the terms.',
    },
    // 9 ─────────────────────────────────────────────────────────────
    {
      kind: 'error',
      prompt: 'A student computes $\\cos 75°$. Tap the first line that is wrong.',
      lines: [
        '$\\cos 75° = \\cos(45° + 30°)$',
        '$= \\cos 45°\\cos 30° + \\sin 45°\\sin 30°$',
        '$= \\frac{\\sqrt{2}}{2}\\cdot\\frac{\\sqrt{3}}{2} + \\frac{\\sqrt{2}}{2}\\cdot\\frac{1}{2}$',
        '$= \\frac{\\sqrt{6} + \\sqrt{2}}{4}$',
      ],
      errorLines: [2],
      explanation: 'Cosine flips the sign: for a **sum**, $\\cos(\\alpha + \\beta) = \\cos\\alpha\\cos\\beta - \\sin\\alpha\\sin\\beta$. The correct value is $\\frac{\\sqrt{6} - \\sqrt{2}}{4} \\approx 0.2588$. A sanity check would have caught this: the student\'s answer $\\approx 0.966$ is $\\cos 15°$, but $75°$ is close to $90°$, so its cosine must be small.',
    },
    // 10 ────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Working with given values — and running the formulas backwards',
      blocks: [
        {
          type: 'p',
          text: 'Often you are not given the angles themselves, only some trig values and quadrants. The formulas need both the sine and cosine of each angle, so first use the Pythagorean identity (with the quadrant for the sign) to fill in what is missing.',
        },
        {
          type: 'derivation',
          title: '$\\sin\\alpha = \\frac{3}{5}$ ($\\alpha$ in QI), $\\cos\\beta = -\\frac{5}{13}$ ($\\beta$ in QII). Find $\\sin(\\alpha + \\beta)$.',
          steps: [
            { tex: '\\cos\\alpha = +\\sqrt{1 - \\tfrac{9}{25}} = \\frac{4}{5}', why: 'Pythagorean identity; cosine is positive in quadrant I.' },
            { tex: '\\sin\\beta = +\\sqrt{1 - \\tfrac{25}{169}} = \\frac{12}{13}', why: 'Pythagorean identity; sine is positive in quadrant II.' },
            { tex: '\\sin(\\alpha + \\beta) = \\sin\\alpha\\cos\\beta + \\cos\\alpha\\sin\\beta', why: 'Sine sum formula.' },
            { tex: '= \\frac{3}{5}\\cdot\\left(-\\frac{5}{13}\\right) + \\frac{4}{5}\\cdot\\frac{12}{13}', why: 'Substitute all four values, keeping the negative sign on $\\cos\\beta$.' },
            { tex: '= \\frac{-15 + 48}{65} = \\frac{33}{65}', why: 'Multiply fractions and add over the common denominator $65$.' },
          ],
          result: '$\\sin(\\alpha + \\beta) = \\frac{33}{65}$ — and we never needed to know what $\\alpha$ and $\\beta$ actually are.',
        },
        {
          type: 'p',
          text: 'The formulas also run **backwards**. If you see an expression shaped like $\\sin A\\cos B - \\cos A \\sin B$, recognise it as $\\sin(A - B)$ and collapse it:',
        },
        {
          type: 'math',
          tex: '\\cos 50°\\cos 10° - \\sin 50°\\sin 10° = \\cos(50° + 10°) = \\cos 60° = \\tfrac{1}{2}',
          caption: 'Neither $\\cos 50°$ nor $\\cos 10°$ has a nice exact value, but the combination does.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the backwards direction matters',
          text: 'In calculus you will meet $\\frac{\\sin(x + h) - \\sin x}{h}$ when finding the derivative of $\\sin x$. Expanding $\\sin(x + h) = \\sin x\\cos h + \\cos x\\sin h$ is what makes that limit computable. Recognising and applying these patterns in both directions is the real skill.',
        },
      ],
    },
    // 11 ────────────────────────────────────────────────────────────
    {
      kind: 'numeric',
      prompt: 'With the same angles as the worked example ($\\sin\\alpha = \\frac{3}{5}$ in QI, $\\cos\\beta = -\\frac{5}{13}$ in QII), find $\\cos(\\alpha + \\beta)$.',
      label: '$\\cos(\\alpha + \\beta) =$',
      answer: '-56/65',
      answerTex: '-\\frac{56}{65}',
      hint: 'You already know $\\cos\\alpha = \\frac{4}{5}$ and $\\sin\\beta = \\frac{12}{13}$. Cosine of a sum has a minus sign.',
      explanation: '$\\cos(\\alpha + \\beta) = \\cos\\alpha\\cos\\beta - \\sin\\alpha\\sin\\beta = \\frac{4}{5}\\cdot\\left(-\\frac{5}{13}\\right) - \\frac{3}{5}\\cdot\\frac{12}{13} = \\frac{-20 - 36}{65} = -\\frac{56}{65}$. Check: $\\left(\\frac{33}{65}\\right)^2 + \\left(\\frac{56}{65}\\right)^2 = \\frac{1089 + 3136}{4225} = 1$ ✓, so $\\sin$ and $\\cos$ of $\\alpha + \\beta$ are consistent.',
    },
    // 12 ────────────────────────────────────────────────────────────
    {
      kind: 'expr',
      prompt: 'Write $\\sin 3x\\cos x - \\cos 3x\\sin x$ as a single trig function.',
      label: '$=$',
      answer: 'sin(2x)',
      answerTex: '\\sin 2x',
      hint: 'Mixed products (sin·cos and cos·sin) with a minus sign: which formula has that shape?',
      explanation: 'The pattern $\\sin A\\cos B - \\cos A\\sin B$ is the sine difference formula with $A = 3x$ and $B = x$, so the expression equals $\\sin(3x - x) = \\sin 2x$. Spotting the shape — "sine mixes" — is the whole problem.',
    },
    // 13 ────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Rotations: the sum formulas in every game engine',
      blocks: [
        {
          type: 'p',
          text: 'How do you rotate a point $(x, y)$ around the origin by an angle $\\theta$? Write the point in polar style: at distance $r$ and angle $\\varphi$, so $x = r\\cos\\varphi$ and $y = r\\sin\\varphi$. Rotating adds $\\theta$ to the angle and leaves $r$ alone. Now the sum formulas do all the work.',
        },
        {
          type: 'derivation',
          title: 'Rotate $(x, y)$ by $\\theta$',
          steps: [
            { tex: "x' = r\\cos(\\varphi + \\theta)", why: 'The rotated point is at the same distance $r$ and angle $\\varphi + \\theta$.' },
            { tex: '= r\\cos\\varphi\\cos\\theta - r\\sin\\varphi\\sin\\theta', why: 'Cosine sum formula, then distribute $r$.' },
            { tex: '= x\\cos\\theta - y\\sin\\theta', why: 'Substitute back $r\\cos\\varphi = x$ and $r\\sin\\varphi = y$. The angle $\\varphi$ has disappeared — we never need to compute it.' },
            { tex: "y' = r\\sin(\\varphi + \\theta) = r\\sin\\varphi\\cos\\theta + r\\cos\\varphi\\sin\\theta = x\\sin\\theta + y\\cos\\theta", why: 'Same steps with the sine sum formula.' },
          ],
          result: 'The rotated point is $(x\\cos\\theta - y\\sin\\theta,\\; x\\sin\\theta + y\\cos\\theta)$.',
        },
        {
          type: 'p',
          text: 'In matrix form this is the [[rotation-matrix]], which you will meet again in linear algebra and computer graphics:',
        },
        {
          type: 'math',
          tex: '\\begin{pmatrix} x\' \\\\ y\' \\end{pmatrix} = \\begin{pmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix}',
        },
        {
          type: 'graph',
          x: [-2.8, 2.8],
          y: [-2.6, 2.6],
          equal: true,
          parametric: [{ x: 'sqrt(5)cos(t)', y: 'sqrt(5)sin(t)', t: [0, '2pi'], color: 'gray', dashed: true }],
          segments: [
            { from: [0, 0], to: [2, 1], color: 'blue', arrow: true, label: '(2, 1)' },
            { from: [0, 0], to: ['2cos(a) - sin(a)', '2sin(a) + cos(a)'], color: 'red', arrow: true, label: 'rotated' },
          ],
          sliders: [{ name: 'a', min: -3.14, max: 3.14, step: 0.01, value: 0.52, label: '$\\theta$' }],
          readouts: [
            { label: "$x' = 2\\cos\\theta - \\sin\\theta =$", expr: '2cos(a) - sin(a)', digits: 4 },
            { label: "$y' = 2\\sin\\theta + \\cos\\theta =$", expr: '2sin(a) + cos(a)', digits: 4 },
          ],
          caption: 'The red arrow is $(2, 1)$ rotated by $\\theta$ using only the formula — no angles computed. It stays on the dashed circle of radius $\\sqrt{5}$: rotation preserves length.',
        },
        {
          type: 'code',
          title: 'rotate.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdio>

struct Vec2 { double x, y; };

Vec2 rotate(Vec2 p, double theta) {
    double c = std::cos(theta), s = std::sin(theta);
    return { p.x * c - p.y * s, p.x * s + p.y * c };
}

int main() {
    const double PI = std::acos(-1.0);
    Vec2 p{2.0, 1.0};
    Vec2 a = rotate(p, PI / 6);                 // 30 degrees
    Vec2 b = rotate(rotate(p, PI / 6), PI / 3); // 30 then 60
    Vec2 c = rotate(p, PI / 2);                 // 90 at once
    std::printf("30 deg:      (%.4f, %.4f)\\n", a.x, a.y);
    std::printf("30 then 60:  (%.4f, %.4f)\\n", b.x, b.y);
    std::printf("90 at once:  (%.4f, %.4f)\\n", c.x, c.y);
}`,
          output: `30 deg:      (1.2321, 1.8660)
30 then 60:  (-1.0000, 2.0000)
90 at once:  (-1.0000, 2.0000)`,
          annotations: [
            { lines: 7, text: 'Compute $\\cos\\theta$ and $\\sin\\theta$ once and reuse them.' },
            { lines: 8, text: 'The rotation formula derived above, straight from the sum formulas.' },
            { lines: '15-16', text: 'Rotating by $30°$ then $60°$ gives the same point as rotating by $90°$ — composition of rotations adds angles.' },
          ],
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'The deep reason: composing rotations',
          text: 'Rotating by $\\beta$ and then by $\\alpha$ must equal rotating by $\\alpha + \\beta$. Multiply the two rotation matrices and compare entries with $R(\\alpha + \\beta)$: you get exactly $\\cos(\\alpha + \\beta) = \\cos\\alpha\\cos\\beta - \\sin\\alpha\\sin\\beta$ and $\\sin(\\alpha + \\beta) = \\sin\\alpha\\cos\\beta + \\cos\\alpha\\sin\\beta$. The sum formulas *are* the statement that rotations compose by adding angles.',
        },
      ],
    },
    // 14 ────────────────────────────────────────────────────────────
    {
      kind: 'numeric',
      prompt: 'Rotate the point $(4, 2)$ about the origin by an angle $\\theta$ with $\\cos\\theta = \\frac{3}{5}$ and $\\sin\\theta = \\frac{4}{5}$. What is the new $y$-coordinate?',
      label: "$y' =$",
      answer: '22/5',
      answerTex: '\\frac{22}{5}',
      hint: "$y' = x\\sin\\theta + y\\cos\\theta$.",
      explanation: "$y' = 4\\cdot\\frac{4}{5} + 2\\cdot\\frac{3}{5} = \\frac{16}{5} + \\frac{6}{5} = \\frac{22}{5} = 4.4$. For completeness, $x' = 4\\cdot\\frac{3}{5} - 2\\cdot\\frac{4}{5} = \\frac{4}{5}$. Check that length is preserved: $\\left(\\frac{4}{5}\\right)^2 + \\left(\\frac{22}{5}\\right)^2 = \\frac{16 + 484}{25} = 20 = 4^2 + 2^2$ ✓.",
    },
    // 15 ────────────────────────────────────────────────────────────
    {
      kind: 'mcq',
      prompt: 'Use the tangent sum formula to find $\\tan 75° = \\tan(45° + 30°)$.',
      options: [
        { text: '$2 + \\sqrt{3}$', correct: true, why: '$\\frac{1 + \\frac{1}{\\sqrt{3}}}{1 - \\frac{1}{\\sqrt{3}}} = \\frac{\\sqrt{3} + 1}{\\sqrt{3} - 1}$; multiplying by the conjugate gives $\\frac{(\\sqrt{3} + 1)^2}{2} = \\frac{4 + 2\\sqrt{3}}{2} = 2 + \\sqrt{3}$.' },
        { text: '$1 + \\frac{\\sqrt{3}}{3}$', why: 'This is $\\tan 45° + \\tan 30°$ — the "distribute" mistake. Tangent does not distribute any more than sine does.' },
        { text: '$2 - \\sqrt{3}$', why: 'That is $\\tan 15° = \\tan(45° - 30°)$: the result of using the *difference* formula, $\\frac{1 - \\tan 30°}{1 + \\tan 30°}$, instead of the sum formula.' },
        { text: '$\\sqrt{3}$', why: '$\\sqrt{3} = \\tan 60°$. $\\tan 75°$ must be larger, since tangent increases toward $90°$.' },
      ],
      explanation: '$\\tan(45° + 30°) = \\frac{\\tan 45° + \\tan 30°}{1 - \\tan 45°\\tan 30°} = \\frac{1 + \\frac{1}{\\sqrt{3}}}{1 - \\frac{1}{\\sqrt{3}}}$. Multiply top and bottom by $\\sqrt{3}$ to get $\\frac{\\sqrt{3} + 1}{\\sqrt{3} - 1}$, then rationalise: $\\frac{(\\sqrt{3} + 1)^2}{3 - 1} = 2 + \\sqrt{3} \\approx 3.732$. Sanity check: $\\tan 75°$ should be large, since $75°$ is near $90°$.',
    },
  ],
  takeaways: [
    'Trig functions do not distribute: $\\cos(\\alpha + \\beta) \\neq \\cos\\alpha + \\cos\\beta$.',
    '$\\cos(\\alpha - \\beta) = \\cos\\alpha\\cos\\beta + \\sin\\alpha\\sin\\beta$ follows from "rotation preserves distance" on the unit circle; the others follow from it with even-odd and cofunction identities.',
    'Sine mixes and keeps the sign; cosine matches and flips the sign; $\\tan(\\alpha \\pm \\beta) = \\frac{\\tan\\alpha \\pm \\tan\\beta}{1 \\mp \\tan\\alpha\\tan\\beta}$.',
    'Exact values like $\\cos 15° = \\frac{\\sqrt{6} + \\sqrt{2}}{4}$ come from writing the angle as a sum or difference of special angles.',
    'Rotating $(x, y)$ by $\\theta$ gives $(x\\cos\\theta - y\\sin\\theta,\\; x\\sin\\theta + y\\cos\\theta)$ — the sum formulas in matrix form.',
  ],
  reading: [
    {
      title: 'OpenStax Precalculus 2e — 7.2 Sum and Difference Identities',
      url: 'https://openstax.org/books/precalculus-2e/pages/7-2-sum-and-difference-identities',
      source: 'openstax',
      note: 'More exact-value and given-quadrant examples, plus the cofunction identities.',
    },
    {
      title: 'Wikipedia — Rotation matrix',
      url: 'https://en.wikipedia.org/wiki/Rotation_matrix',
      source: 'wikipedia',
      note: 'The 2D section shows the same formula and how it extends to 3D rotations used in graphics.',
    },
    {
      title: 'Wikipedia — List of trigonometric identities',
      url: 'https://en.wikipedia.org/wiki/List_of_trigonometric_identities',
      source: 'wikipedia',
      note: 'The angle-sum section includes classic geometric proofs with diagrams.',
    },
  ],
};
