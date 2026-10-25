import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'calc2-trig-substitution',
  title: 'Trigonometric Substitution',
  summary: 'Square roots like $\\sqrt{a^2 - x^2}$ melt away when $x$ becomes the side of a right triangle.',
  minutes: 19,
  objectives: [
    'Recognise the three radical forms $\\sqrt{a^2 - x^2}$, $\\sqrt{a^2 + x^2}$ and $\\sqrt{x^2 - a^2}$ and choose the matching substitution',
    'Simplify the radical with a Pythagorean identity, respecting the range of $\\theta$',
    'Draw a reference triangle and use it to rewrite an answer in terms of $x$',
    'Evaluate definite integrals by changing the limits to $\\theta$-values',
    'Complete the square to bring a general quadratic under a root into one of the three forms',
  ],
  steps: [
    {
      kind: 'concept',
      title: 'A root that substitution cannot crack',
      blocks: [
        {
          type: 'p',
          text: 'The area of a circle of radius $1$ is $\\pi$, so the area under the upper semicircle $y = \\sqrt{1 - x^2}$ should be $\\frac{\\pi}{2}$. Can we *prove* that with an integral? Try $u = 1 - x^2$: then $du = -2x\\,dx$, but there is no $x$ in the integrand to absorb it. Every technique so far stalls.',
        },
        {
          type: 'p',
          text: 'The way in is a Pythagorean identity. If $x = \\sin\\theta$, then $1 - x^2 = 1 - \\sin^2\\theta = \\cos^2\\theta$, a perfect square, and the root disappears. This is an **inverse substitution**: instead of naming a piece of the integrand $u$, we replace $x$ itself by a function of a new variable $\\theta$. That is [[trig-substitution]].',
        },
        {
          type: 'derivation',
          title: 'Evaluate $\\int_{-1}^{1}\\sqrt{1 - x^2}\\,dx$',
          steps: [
            { tex: 'x = \\sin\\theta, \\quad dx = \\cos\\theta\\,d\\theta, \\quad -\\tfrac{\\pi}{2} \\le \\theta \\le \\tfrac{\\pi}{2}', why: 'Restricting $\\theta$ to $[-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$ makes the substitution one-to-one, with $\\theta = \\arcsin x$.' },
            { tex: 'x = -1 \\Rightarrow \\theta = -\\tfrac{\\pi}{2}, \\qquad x = 1 \\Rightarrow \\theta = \\tfrac{\\pi}{2}', why: 'Change the limits to $\\theta$-values so we never need to convert back.' },
            { tex: '\\sqrt{1 - \\sin^2\\theta} = \\sqrt{\\cos^2\\theta} = \\cos\\theta', why: 'Pythagorean identity, and $\\cos\\theta \\ge 0$ on $[-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$, so no absolute value is needed.' },
            { tex: '\\int_{-1}^{1}\\sqrt{1 - x^2}\\,dx = \\int_{-\\pi/2}^{\\pi/2} \\cos\\theta\\cdot\\cos\\theta\\,d\\theta = \\int_{-\\pi/2}^{\\pi/2}\\cos^2\\theta\\,d\\theta', why: 'Replace the root and $dx$. A trig integral from the last lesson remains.' },
            { tex: '= \\left[\\frac{\\theta}{2} + \\frac{\\sin 2\\theta}{4}\\right]_{-\\pi/2}^{\\pi/2}', why: 'Power-reduce: $\\cos^2\\theta = \\frac{1 + \\cos 2\\theta}{2}$.' },
            { tex: '= \\left(\\frac{\\pi}{4} + 0\\right) - \\left(-\\frac{\\pi}{4} + 0\\right) = \\frac{\\pi}{2}', why: '$\\sin(\\pm\\pi) = 0$.' },
          ],
          result: 'The area of a half-disk of radius $1$ is $\\frac{\\pi}{2}$ — and now we know *why* the circle\'s area formula holds.',
        },
        {
          type: 'graph',
          x: [-1.4, 1.4],
          y: [-0.3, 1.3],
          equal: true,
          functions: [{ expr: 'sqrt(1 - x^2)', label: '$y = \\sqrt{1 - x^2}$', domain: [-1, 1] }],
          areas: [{ expr: 'sqrt(1 - x^2)', from: -1, to: 'b', color: 'blue' }],
          sliders: [{ name: 'b', min: -0.99, max: 1, step: 0.01, value: 0.5, label: '$b$' }],
          readouts: [{ label: '$\\int_{-1}^{b}\\sqrt{1-x^2}\\,dx = \\frac{b}{2}\\sqrt{1-b^2} + \\frac{1}{2}\\arcsin b + \\frac{\\pi}{4} =$', expr: '(b/2)sqrt(1 - b^2) + arcsin(b)/2 + pi/4', digits: 4 }],
          caption: 'Slide $b$ to $1$ and the readout hits $\\frac{\\pi}{2} \\approx 1.5708$. The formula in the readout comes from the same substitution, done as an indefinite integral (last card).',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why we must restrict $\\theta$',
          text: 'In general $\\sqrt{\\cos^2\\theta} = |\\cos\\theta|$, not $\\cos\\theta$. Choosing $\\theta \\in [-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$ does two jobs at once: every $x \\in [-1, 1]$ corresponds to exactly one $\\theta$ (so we can undo the substitution with $\\theta = \\arcsin x$), and $\\cos\\theta \\ge 0$ there (so the absolute value can be dropped). It is the same interval used to define [[inverse-sine|arcsine]] — not a coincidence.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'Use $x = 2\\sin\\theta$ to evaluate $\\displaystyle\\int_0^2 \\sqrt{4 - x^2}\\,dx$.',
      label: '$\\int_0^2\\sqrt{4-x^2}\\,dx =$',
      answer: 'pi',
      answerTex: '\\pi',
      hint: 'The limits become $\\theta = 0$ and $\\theta = \\frac{\\pi}{2}$, and the integrand becomes $2\\cos\\theta \\cdot 2\\cos\\theta\\,d\\theta$. Geometrically: what fraction of which circle is this?',
      explanation: 'With $x = 2\\sin\\theta$, $dx = 2\\cos\\theta\\,d\\theta$ and $\\sqrt{4 - 4\\sin^2\\theta} = 2\\cos\\theta$, so the integral is $\\int_0^{\\pi/2} 4\\cos^2\\theta\\,d\\theta = 4\\left[\\frac{\\theta}{2} + \\frac{\\sin 2\\theta}{4}\\right]_0^{\\pi/2} = 4\\cdot\\frac{\\pi}{4} = \\pi$. Check with geometry: it is a quarter of a disk of radius $2$, area $\\frac{1}{4}\\pi(2)^2 = \\pi$. ✓',
    },
    {
      kind: 'concept',
      title: 'Form 1: $\\sqrt{a^2 - x^2}$ and the reference triangle',
      blocks: [
        {
          type: 'p',
          text: 'For $\\sqrt{a^2 - x^2}$ with $a > 0$, let $x = a\\sin\\theta$ with $-\\frac{\\pi}{2} \\le \\theta \\le \\frac{\\pi}{2}$. Then $a^2 - x^2 = a^2(1 - \\sin^2\\theta) = a^2\\cos^2\\theta$, so $\\sqrt{a^2 - x^2} = a\\cos\\theta$.',
        },
        {
          type: 'p',
          text: 'For an *indefinite* integral the answer comes out in $\\theta$, and we must convert back to $x$. The tool is a [[calc2-reference-triangle|reference triangle]]: since $\\sin\\theta = \\frac{x}{a} = \\frac{\\text{opposite}}{\\text{hypotenuse}}$, draw a right triangle with opposite side $x$ and hypotenuse $a$. The [[pythagorean-theorem]] gives the adjacent side, $\\sqrt{a^2 - x^2}$ — the very radical we started with. Every other trig function of $\\theta$ can now be read off with [[soh-cah-toa]].',
        },
        {
          type: 'graph',
          x: [-0.4, 2.6],
          y: [-0.4, 2.2],
          equal: true,
          segments: [
            { from: [0, 0], to: ['sqrt(4 - p^2)', 'p'], color: 'purple', label: 'hyp = 2' },
            { from: [0, 0], to: ['sqrt(4 - p^2)', 0], color: 'blue', label: 'adj = √(4 − x²)' },
            { from: ['sqrt(4 - p^2)', 0], to: ['sqrt(4 - p^2)', 'p'], color: 'red', label: 'opp = x' },
          ],
          points: [{ x: 0, y: 0, label: 'θ' }],
          sliders: [{ name: 'p', min: 0.1, max: 1.95, step: 0.05, value: 1.2, label: '$x$' }],
          readouts: [
            { label: '$\\theta = \\arcsin\\frac{x}{2} =$', expr: 'arcsin(p/2)', digits: 4 },
            { label: '$\\cot\\theta = \\frac{\\sqrt{4 - x^2}}{x} =$', expr: 'sqrt(4 - p^2)/p', digits: 4 },
          ],
          caption: 'The triangle for $x = 2\\sin\\theta$. The hypotenuse stays $2$ while $x$ changes; the adjacent side is always $\\sqrt{4 - x^2}$.',
        },
        {
          type: 'derivation',
          title: 'Evaluate $\\int \\frac{dx}{x^2\\sqrt{4 - x^2}}$',
          steps: [
            { tex: 'x = 2\\sin\\theta, \\quad dx = 2\\cos\\theta\\,d\\theta, \\quad \\sqrt{4 - x^2} = 2\\cos\\theta', why: 'Form $\\sqrt{a^2 - x^2}$ with $a = 2$.' },
            { tex: '\\int \\frac{2\\cos\\theta\\,d\\theta}{4\\sin^2\\theta\\cdot 2\\cos\\theta}', why: 'Replace every $x$-piece: $x^2 = 4\\sin^2\\theta$.' },
            { tex: '= \\frac{1}{4}\\int \\csc^2\\theta\\,d\\theta', why: 'The $2\\cos\\theta$ cancels, and $\\frac{1}{\\sin^2\\theta} = \\csc^2\\theta$.' },
            { tex: '= -\\frac{1}{4}\\cot\\theta + C', why: 'Since $\\frac{d}{d\\theta}\\cot\\theta = -\\csc^2\\theta$.' },
            { tex: '\\cot\\theta = \\frac{\\text{adj}}{\\text{opp}} = \\frac{\\sqrt{4 - x^2}}{x}', why: 'Read it from the reference triangle above.' },
            { tex: '= -\\frac{\\sqrt{4 - x^2}}{4x} + C', why: 'Back-substitute. The answer is now purely in $x$.' },
          ],
          result: '$\\int \\frac{dx}{x^2\\sqrt{4 - x^2}} = -\\frac{\\sqrt{4 - x^2}}{4x} + C$.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Why the triangle beats identities',
          text: 'You could convert $\\cot\\theta$ to $x$ with identities ($\\cot\\theta = \\frac{\\cos\\theta}{\\sin\\theta} = \\frac{\\sqrt{1 - \\sin^2\\theta}}{\\sin\\theta}$), but the triangle does the same algebra in a picture, and it handles any of the six trig functions instantly. Draw it every time.',
        },
      ],
    },
    {
      kind: 'expr',
      prompt: 'Use $x = 3\\sin\\theta$ to evaluate $\\displaystyle\\int \\frac{dx}{x^2\\sqrt{9 - x^2}}$ (for $0 < x < 3$).',
      label: '$\\int \\frac{dx}{x^2\\sqrt{9-x^2}} =$',
      answer: '-sqrt(9 - x^2)/(9x)',
      answerTex: '-\\frac{\\sqrt{9 - x^2}}{9x}',
      upToConstant: true,
      domain: [0.5, 2.5],
      hint: 'You should reach $\\frac{1}{9}\\int\\csc^2\\theta\\,d\\theta = -\\frac{1}{9}\\cot\\theta$. Then use a triangle with opposite $x$ and hypotenuse $3$.',
      explanation: 'With $x = 3\\sin\\theta$: $\\int \\frac{3\\cos\\theta\\,d\\theta}{9\\sin^2\\theta\\cdot 3\\cos\\theta} = \\frac{1}{9}\\int\\csc^2\\theta\\,d\\theta = -\\frac{1}{9}\\cot\\theta + C$. The triangle has opposite $x$, hypotenuse $3$, adjacent $\\sqrt{9 - x^2}$, so $\\cot\\theta = \\frac{\\sqrt{9 - x^2}}{x}$ and the answer is $-\\frac{\\sqrt{9 - x^2}}{9x} + C$.',
    },
    {
      kind: 'error',
      prompt: 'A student evaluates $\\int \\frac{\\sqrt{9 - x^2}}{x^2}\\,dx$. Tap the first line that is wrong.',
      lines: [
        '$x = 3\\sin\\theta,\\ dx = 3\\cos\\theta\\,d\\theta,\\ \\sqrt{9 - x^2} = 3\\cos\\theta$',
        '$\\int \\frac{3\\cos\\theta\\cdot 3\\cos\\theta}{9\\sin^2\\theta}\\,d\\theta = \\int \\cot^2\\theta\\,d\\theta$',
        '$= \\int (\\csc^2\\theta - 1)\\,d\\theta = -\\cot\\theta - \\theta + C$',
        'From the triangle, $\\cot\\theta = \\frac{x}{\\sqrt{9 - x^2}}$',
        '$= -\\frac{x}{\\sqrt{9 - x^2}} - \\arcsin\\frac{x}{3} + C$',
      ],
      errorLines: [4],
      explanation: 'Line 4 flips the ratio. Cotangent is $\\frac{\\text{adjacent}}{\\text{opposite}}$; the triangle for $\\sin\\theta = \\frac{x}{3}$ has opposite $x$ and adjacent $\\sqrt{9 - x^2}$, so $\\cot\\theta = \\frac{\\sqrt{9 - x^2}}{x}$. The correct answer is $-\\frac{\\sqrt{9 - x^2}}{x} - \\arcsin\\frac{x}{3} + C$. (Line 3 uses $\\cot^2\\theta = \\csc^2\\theta - 1$, which is correct, and $\\theta = \\arcsin\\frac{x}{3}$ in line 5 is right.)',
    },
    {
      kind: 'concept',
      title: 'Form 2: $\\sqrt{a^2 + x^2}$ — use tangent',
      blocks: [
        {
          type: 'p',
          text: 'For a sum of squares, sine does not help: $a^2 + a^2\\sin^2\\theta$ is not a perfect square. Use the identity $1 + \\tan^2\\theta = \\sec^2\\theta$ instead. Let $x = a\\tan\\theta$ with $-\\frac{\\pi}{2} < \\theta < \\frac{\\pi}{2}$. Then',
        },
        {
          type: 'math',
          tex: 'a^2 + x^2 = a^2(1 + \\tan^2\\theta) = a^2\\sec^2\\theta \\quad\\implies\\quad \\sqrt{a^2 + x^2} = a\\sec\\theta',
          caption: 'On $(-\\frac{\\pi}{2}, \\frac{\\pi}{2})$, $\\sec\\theta > 0$, so no absolute value is needed. Also $dx = a\\sec^2\\theta\\,d\\theta$.',
        },
        {
          type: 'graph',
          x: [-0.3, 1.9],
          y: [-0.3, 2.7],
          equal: true,
          segments: [
            { from: [0, 0], to: [1, 'p'], color: 'purple', label: 'hyp = √(1 + x²)' },
            { from: [0, 0], to: [1, 0], color: 'blue', label: 'adj = 1' },
            { from: [1, 0], to: [1, 'p'], color: 'red', label: 'opp = x' },
          ],
          points: [{ x: 0, y: 0, label: 'θ' }],
          sliders: [{ name: 'p', min: 0.1, max: 2.5, step: 0.05, value: 1, label: '$x$' }],
          readouts: [
            { label: '$\\theta = \\arctan x =$', expr: 'arctan(p)', digits: 4 },
            { label: '$\\sin\\theta = \\frac{x}{\\sqrt{1 + x^2}} =$', expr: 'p/sqrt(1 + p^2)', digits: 4 },
          ],
          caption: 'The triangle for $x = \\tan\\theta$: $\\tan\\theta = \\frac{x}{1}$, so opposite $x$, adjacent $1$, and the hypotenuse is the radical $\\sqrt{1 + x^2}$.',
        },
        {
          type: 'derivation',
          title: 'Evaluate $\\int \\frac{dx}{(1 + x^2)^{3/2}}$',
          steps: [
            { tex: 'x = \\tan\\theta, \\quad dx = \\sec^2\\theta\\,d\\theta, \\quad (1 + x^2)^{3/2} = (\\sec^2\\theta)^{3/2} = \\sec^3\\theta', why: 'Form $\\sqrt{a^2 + x^2}$ with $a = 1$; a power $\\frac{3}{2}$ is just the root cubed.' },
            { tex: '\\int \\frac{\\sec^2\\theta\\,d\\theta}{\\sec^3\\theta} = \\int \\cos\\theta\\,d\\theta', why: 'Cancel two secants; $\\frac{1}{\\sec\\theta} = \\cos\\theta$.' },
            { tex: '= \\sin\\theta + C', why: 'A basic integral.' },
            { tex: '= \\frac{x}{\\sqrt{1 + x^2}} + C', why: 'From the triangle: $\\sin\\theta = \\frac{\\text{opp}}{\\text{hyp}} = \\frac{x}{\\sqrt{1 + x^2}}$.' },
          ],
          result: '$\\int \\frac{dx}{(1 + x^2)^{3/2}} = \\frac{x}{\\sqrt{1 + x^2}} + C$.',
        },
        {
          type: 'p',
          text: 'Sometimes the $\\theta$-integral is one of the special ones from the last lesson. With $x = 2\\tan\\theta$, $\\int \\frac{dx}{\\sqrt{x^2 + 4}} = \\int \\frac{2\\sec^2\\theta}{2\\sec\\theta}\\,d\\theta = \\int \\sec\\theta\\,d\\theta = \\ln|\\sec\\theta + \\tan\\theta| + C$. The triangle gives $\\sec\\theta = \\frac{\\sqrt{x^2 + 4}}{2}$ and $\\tan\\theta = \\frac{x}{2}$, so the result is $\\ln\\left|\\frac{x + \\sqrt{x^2 + 4}}{2}\\right| + C = \\ln\\left(x + \\sqrt{x^2 + 4}\\right) + C_1$.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Where did the $\\ln 2$ go?',
          text: '$\\ln\\frac{A}{2} = \\ln A - \\ln 2$, and $-\\ln 2$ is a constant, so it merges into the arbitrary constant: $C_1 = C - \\ln 2$. Textbook answers and computer algebra systems often differ from yours by exactly such a constant — both are correct. (The absolute value can also go, since $x + \\sqrt{x^2 + 4} > 0$ for every $x$.)',
        },
      ],
    },
    {
      kind: 'expr',
      prompt: 'Use $x = 3\\tan\\theta$ to evaluate $\\displaystyle\\int \\frac{dx}{(x^2 + 9)^{3/2}}$.',
      label: '$\\int \\frac{dx}{(x^2+9)^{3/2}} =$',
      answer: 'x/(9 sqrt(x^2 + 9))',
      answerTex: '\\frac{x}{9\\sqrt{x^2 + 9}}',
      upToConstant: true,
      hint: 'You should reach $\\frac{1}{9}\\int\\cos\\theta\\,d\\theta$. The triangle has opposite $x$, adjacent $3$.',
      explanation: 'With $x = 3\\tan\\theta$: $dx = 3\\sec^2\\theta\\,d\\theta$ and $(x^2 + 9)^{3/2} = 27\\sec^3\\theta$, so the integral is $\\int \\frac{3\\sec^2\\theta}{27\\sec^3\\theta}\\,d\\theta = \\frac{1}{9}\\int\\cos\\theta\\,d\\theta = \\frac{1}{9}\\sin\\theta + C$. The triangle has hypotenuse $\\sqrt{x^2 + 9}$, so $\\sin\\theta = \\frac{x}{\\sqrt{x^2 + 9}}$ and the answer is $\\frac{x}{9\\sqrt{x^2 + 9}} + C$.',
    },
    {
      kind: 'concept',
      title: 'Form 3: $\\sqrt{x^2 - a^2}$ — use secant',
      blocks: [
        {
          type: 'p',
          text: 'For a difference with $x^2$ first, rearrange the same identity: $\\sec^2\\theta - 1 = \\tan^2\\theta$. Let $x = a\\sec\\theta$. For $x \\ge a$ take $0 \\le \\theta < \\frac{\\pi}{2}$, where $\\tan\\theta \\ge 0$:',
        },
        {
          type: 'math',
          tex: 'x^2 - a^2 = a^2(\\sec^2\\theta - 1) = a^2\\tan^2\\theta \\quad\\implies\\quad \\sqrt{x^2 - a^2} = a\\tan\\theta',
          caption: 'And $dx = a\\sec\\theta\\tan\\theta\\,d\\theta$. (For $x \\le -a$ one takes $\\pi \\le \\theta < \\frac{3\\pi}{2}$ instead; we will stick to $x \\ge a$.)',
        },
        {
          type: 'graph',
          x: [-0.5, 4.2],
          y: [-0.5, 5.5],
          equal: true,
          segments: [
            { from: [0, 0], to: [3, 'sqrt(p^2 - 9)'], color: 'purple', label: 'hyp = x' },
            { from: [0, 0], to: [3, 0], color: 'blue', label: 'adj = 3' },
            { from: [3, 0], to: [3, 'sqrt(p^2 - 9)'], color: 'red', label: 'opp = √(x² − 9)' },
          ],
          points: [{ x: 0, y: 0, label: 'θ' }],
          sliders: [{ name: 'p', min: 3.05, max: 6, step: 0.05, value: 4.5, label: '$x$' }],
          readouts: [
            { label: '$\\theta = \\operatorname{arcsec}\\frac{x}{3} = \\arccos\\frac{3}{x} =$', expr: 'arccos(3/p)', digits: 4 },
            { label: '$\\tan\\theta = \\frac{\\sqrt{x^2 - 9}}{3} =$', expr: 'sqrt(p^2 - 9)/3', digits: 4 },
          ],
          caption: 'The triangle for $x = 3\\sec\\theta$: $\\sec\\theta = \\frac{x}{3} = \\frac{\\text{hyp}}{\\text{adj}}$. This time the **hypotenuse** is $x$ and the radical is the opposite side.',
        },
        {
          type: 'derivation',
          title: 'Evaluate $\\int \\frac{\\sqrt{x^2 - 9}}{x}\\,dx$ for $x > 3$',
          steps: [
            { tex: 'x = 3\\sec\\theta, \\quad dx = 3\\sec\\theta\\tan\\theta\\,d\\theta, \\quad \\sqrt{x^2 - 9} = 3\\tan\\theta', why: 'Form $\\sqrt{x^2 - a^2}$ with $a = 3$.' },
            { tex: '\\int \\frac{3\\tan\\theta}{3\\sec\\theta}\\cdot 3\\sec\\theta\\tan\\theta\\,d\\theta = 3\\int\\tan^2\\theta\\,d\\theta', why: 'Substitute; the $3\\sec\\theta$ cancels.' },
            { tex: '= 3\\int(\\sec^2\\theta - 1)\\,d\\theta = 3\\tan\\theta - 3\\theta + C', why: 'Use $\\tan^2\\theta = \\sec^2\\theta - 1$ — the standard move for an even power of tangent alone.' },
            { tex: '= \\sqrt{x^2 - 9} - 3\\operatorname{arcsec}\\frac{x}{3} + C', why: 'Triangle: $3\\tan\\theta = \\sqrt{x^2 - 9}$. And $\\theta = \\operatorname{arcsec}\\frac{x}{3}$, which equals $\\arccos\\frac{3}{x}$.' },
          ],
          result: 'When $\\theta$ itself survives in the answer, write it as an inverse trig function of $x$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why three forms, three functions',
          text: 'Each substitution is chosen so that one Pythagorean identity turns the expression under the root into a perfect square: $1 - \\sin^2\\theta = \\cos^2\\theta$ for $a^2 - x^2$, $1 + \\tan^2\\theta = \\sec^2\\theta$ for $a^2 + x^2$, and $\\sec^2\\theta - 1 = \\tan^2\\theta$ for $x^2 - a^2$. Geometrically, the radical is always the side of the triangle that the other two determine.',
        },
      ],
    },
    {
      kind: 'expr',
      prompt: 'Use $x = \\sec\\theta$ to evaluate $\\displaystyle\\int \\frac{dx}{x^2\\sqrt{x^2 - 1}}$ for $x > 1$.',
      label: '$\\int \\frac{dx}{x^2\\sqrt{x^2-1}} =$',
      answer: 'sqrt(x^2 - 1)/x',
      answerTex: '\\frac{\\sqrt{x^2 - 1}}{x}',
      upToConstant: true,
      domain: [1.2, 3],
      hint: '$dx = \\sec\\theta\\tan\\theta\\,d\\theta$ and $\\sqrt{x^2 - 1} = \\tan\\theta$. Everything cancels down to $\\int\\cos\\theta\\,d\\theta$.',
      explanation: 'Substituting: $\\int \\frac{\\sec\\theta\\tan\\theta}{\\sec^2\\theta\\,\\tan\\theta}\\,d\\theta = \\int \\cos\\theta\\,d\\theta = \\sin\\theta + C$. The triangle has hypotenuse $x$, adjacent $1$, opposite $\\sqrt{x^2 - 1}$, so $\\sin\\theta = \\frac{\\sqrt{x^2 - 1}}{x}$. Check: $\\frac{d}{dx}\\frac{\\sqrt{x^2-1}}{x} = \\frac{\\frac{x^2}{\\sqrt{x^2-1}} - \\sqrt{x^2-1}}{x^2} = \\frac{1}{x^2\\sqrt{x^2-1}}$. ✓',
    },
    {
      kind: 'concept',
      title: 'Choosing the substitution (and when not to)',
      blocks: [
        {
          type: 'table',
          headers: ['Expression', 'Substitution', 'Identity used', 'Radical becomes', 'Triangle'],
          rows: [
            ['$\\sqrt{a^2 - x^2}$', '$x = a\\sin\\theta$, $\\theta \\in [-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$', '$1 - \\sin^2\\theta = \\cos^2\\theta$', '$a\\cos\\theta$', 'opp $x$, hyp $a$'],
            ['$\\sqrt{a^2 + x^2}$', '$x = a\\tan\\theta$, $\\theta \\in (-\\frac{\\pi}{2}, \\frac{\\pi}{2})$', '$1 + \\tan^2\\theta = \\sec^2\\theta$', '$a\\sec\\theta$', 'opp $x$, adj $a$'],
            ['$\\sqrt{x^2 - a^2}$', '$x = a\\sec\\theta$, $\\theta \\in [0, \\frac{\\pi}{2})$', '$\\sec^2\\theta - 1 = \\tan^2\\theta$', '$a\\tan\\theta$', 'hyp $x$, adj $a$'],
          ],
          caption: 'The same choices work when the expression appears without a root, such as $(a^2 + x^2)^2$ or $\\frac{1}{a^2 + x^2}$.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Look for an easy $u$-substitution first',
          text: 'Trig substitution is heavy machinery. If the integrand contains $x$ times a function of $x^2$, an ordinary substitution is faster. For $\\int \\frac{x}{\\sqrt{1 - x^2}}\\,dx$, let $u = 1 - x^2$, $du = -2x\\,dx$: the answer $-\\sqrt{1 - x^2} + C$ takes one line. Trig substitution would get there too, after half a page.',
        },
        {
          type: 'steps',
          items: [
            { title: 'Identify the form', text: 'Match the radical to one of the three rows and pick the substitution.' },
            { title: 'Substitute everything', text: 'Replace $x$, $dx$ and the radical. No $x$ may remain.' },
            { title: 'Integrate in $\\theta$', text: 'You will usually face a trig integral from the previous lesson.' },
            { title: 'Return to $x$', text: 'Draw the reference triangle and read off each trig function; write any bare $\\theta$ as an inverse trig function. (For a definite integral, change the limits instead and skip this step.)' },
          ],
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'Exams often include one integral that *looks* like trig substitution but is really a $u$-substitution, to test whether you check first. Also expect to be asked for the reference triangle itself — label all three sides.',
        },
      ],
    },
    {
      kind: 'mcq',
      prompt: 'Which substitution is the right first move for $\\displaystyle\\int \\frac{dx}{(25 + x^2)^2}$?',
      options: [
        {
          text: '$x = 5\\sin\\theta$',
          why: 'Sine handles $25 - x^2$. Here $25 + 25\\sin^2\\theta = 25(1 + \\sin^2\\theta)$, which is not a perfect square.',
        },
        {
          text: '$x = 5\\sec\\theta$',
          why: 'Secant handles $x^2 - 25$. Then $25 + 25\\sec^2\\theta$ does not simplify.',
        },
        {
          text: '$x = 5\\tan\\theta$',
          correct: true,
          why: '$25 + 25\\tan^2\\theta = 25\\sec^2\\theta$, so the denominator becomes $625\\sec^4\\theta$ and with $dx = 5\\sec^2\\theta\\,d\\theta$ the integral is $\\frac{1}{125}\\int\\cos^2\\theta\\,d\\theta$.',
        },
        {
          text: '$u = 25 + x^2$',
          why: 'Then $du = 2x\\,dx$, but the numerator has no $x$ to absorb it.',
        },
      ],
      explanation: 'A sum $a^2 + x^2$ calls for $x = a\\tan\\theta$ because $1 + \\tan^2\\theta = \\sec^2\\theta$. The table works even with no square root in sight — what matters is the quadratic expression.',
    },
    {
      kind: 'truefalse',
      prompt: 'True or false: $\\displaystyle\\int \\frac{x}{\\sqrt{x^2 + 4}}\\,dx$ requires the trigonometric substitution $x = 2\\tan\\theta$.',
      answer: false,
      explanation: 'The factor $x$ is (half) the derivative of $x^2 + 4$, so $u = x^2 + 4$, $du = 2x\\,dx$ gives $\\frac{1}{2}\\int u^{-1/2}\\,du = \\sqrt{x^2 + 4} + C$ in one line. Trig substitution would also work, but "requires" is false — always check for a simple substitution first.',
    },
    {
      kind: 'concept',
      title: 'Completing the square, and a circle in the water',
      blocks: [
        {
          type: 'p',
          text: 'A general quadratic $x^2 + bx + c$ under a root does not match any form at first. [[completing-the-square|Complete the square]] to rewrite it as $(x + h)^2 \\pm k^2$, shift with $u = x + h$, and it fits one of the three rows.',
        },
        {
          type: 'derivation',
          title: 'Evaluate $\\int \\frac{dx}{\\sqrt{x^2 + 2x + 5}}$',
          steps: [
            { tex: 'x^2 + 2x + 5 = (x + 1)^2 + 4', why: 'Complete the square: half of $2$ is $1$, and $5 - 1 = 4$.' },
            { tex: '\\int \\frac{dx}{\\sqrt{(x + 1)^2 + 4}} = \\int \\frac{du}{\\sqrt{u^2 + 4}}', why: 'Shift with $u = x + 1$, $du = dx$. Now it is form 2 with $a = 2$.' },
            { tex: '= \\ln\\left(u + \\sqrt{u^2 + 4}\\right) + C', why: 'This is exactly the $\\int\\sec\\theta\\,d\\theta$ example from the tangent card ($u = 2\\tan\\theta$).' },
            { tex: '= \\ln\\left(x + 1 + \\sqrt{x^2 + 2x + 5}\\right) + C', why: 'Back-substitute $u = x + 1$, and $u^2 + 4 = x^2 + 2x + 5$.' },
          ],
          result: 'Completing the square is the bridge from any quadratic to the three standard forms.',
        },
        {
          type: 'p',
          text: 'Finally, the general formula behind the semicircle graph. With $x = a\\sin\\theta$: $\\int\\sqrt{a^2 - x^2}\\,dx = a^2\\int\\cos^2\\theta\\,d\\theta = \\frac{a^2}{2}(\\theta + \\sin\\theta\\cos\\theta) + C$, and the triangle turns this into',
        },
        {
          type: 'math',
          tex: '\\int \\sqrt{a^2 - x^2}\\,dx = \\frac{x}{2}\\sqrt{a^2 - x^2} + \\frac{a^2}{2}\\arcsin\\frac{x}{a} + C',
          caption: 'Used $\\sin 2\\theta = 2\\sin\\theta\\cos\\theta$, $\\sin\\theta = \\frac{x}{a}$, $\\cos\\theta = \\frac{\\sqrt{a^2 - x^2}}{a}$.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Buoyancy for a round object',
          text: 'In a 2D physics game, the upward buoyant force on a floating ball is proportional to its **submerged area**. For a circle of radius $r$ centred at height $0$ with the water line at $y = h$, that area is $\\int_{-r}^{h} 2\\sqrt{r^2 - y^2}\\,dy$ — horizontal slices of width $2\\sqrt{r^2 - y^2}$. The formula above evaluates it in closed form, so the engine needs no numerical integration per frame.',
        },
        {
          type: 'code',
          title: 'buoyancy.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdio>
#include <numbers>

// Area of a circle of radius r (centre at height 0) that lies below the
// water line y = h. From trig substitution on the integral of 2*sqrt(r^2 - y^2).
double submergedArea(double r, double h) {
    if (h <= -r) return 0.0;                         // fully above water
    if (h >= r) return std::numbers::pi * r * r;     // fully under water
    return h * std::sqrt(r * r - h * h) + r * r * std::asin(h / r)
           + std::numbers::pi * r * r / 2;
}

int main() {
    const double r = 1.0;
    for (double h = -1.0; h <= 1.0; h += 0.5)
        std::printf("h = %+.1f  area = %.6f\\n", h, submergedArea(r, h));
}`,
          output: `h = -1.0  area = 0.000000
h = -0.5  area = 0.614185
h = +0.0  area = 1.570796
h = +0.5  area = 2.527408
h = +1.0  area = 3.141593`,
          annotations: [
            { lines: '8-9', text: 'Outside $[-r, r]$ the circle is entirely dry or entirely submerged; this also keeps `asin` inside its domain.' },
            { lines: '10-11', text: '$\\left[y\\sqrt{r^2 - y^2} + r^2\\arcsin\\frac{y}{r}\\right]_{-r}^{h}$: twice the formula above. The lower limit contributes $-r^2\\cdot\\frac{\\pi}{2}$, hence $+\\frac{\\pi r^2}{2}$.' },
            { lines: 17, text: 'Half-submerged ($h = 0$) gives $\\frac{\\pi}{2}$, fully submerged gives $\\pi$ — as geometry demands.' },
          ],
        },
      ],
    },
    {
      kind: 'expr',
      prompt: 'Complete the square, then evaluate $\\displaystyle\\int \\frac{dx}{\\sqrt{x^2 - 4x + 8}}$.',
      label: '$\\int \\frac{dx}{\\sqrt{x^2-4x+8}} =$',
      answer: 'ln(x - 2 + sqrt(x^2 - 4x + 8))',
      answerTex: '\\ln\\left(x - 2 + \\sqrt{x^2 - 4x + 8}\\right)',
      upToConstant: true,
      domain: [0, 4],
      hint: '$x^2 - 4x + 8 = (x - 2)^2 + 4$. With $u = x - 2$ this is the integral $\\int\\frac{du}{\\sqrt{u^2 + 4}} = \\ln(u + \\sqrt{u^2 + 4})$.',
      explanation: 'Half of $-4$ is $-2$, so $x^2 - 4x + 8 = (x - 2)^2 + 4$. Let $u = x - 2$: $\\int\\frac{du}{\\sqrt{u^2 + 4}}$, which (via $u = 2\\tan\\theta$ and $\\int\\sec\\theta\\,d\\theta$) is $\\ln(u + \\sqrt{u^2 + 4}) + C = \\ln\\left(x - 2 + \\sqrt{x^2 - 4x + 8}\\right) + C$.',
    },
    {
      kind: 'order',
      prompt: 'Put the steps of an indefinite trigonometric substitution in order.',
      lines: [
        'Match the radical to a form and choose $x = a\\sin\\theta$, $a\\tan\\theta$ or $a\\sec\\theta$',
        'Compute $dx$ and simplify the radical with a Pythagorean identity',
        'Evaluate the resulting trigonometric integral in $\\theta$',
        'Draw the reference triangle from the substitution',
        'Rewrite every trig function of $\\theta$ (and $\\theta$ itself) in terms of $x$',
      ],
      distractors: ['Replace $dx$ by $d\\theta$ without changing anything else'],
      explanation: 'The substitution must replace $x$, $dx$ and the radical together — $dx$ becomes $a\\cos\\theta\\,d\\theta$ (or $a\\sec^2\\theta\\,d\\theta$, or $a\\sec\\theta\\tan\\theta\\,d\\theta$), never just $d\\theta$. After integrating, the triangle converts the answer back to $x$.',
    },
  ],
  takeaways: [
    'Trig substitution is an inverse substitution: replace $x$ by $a\\sin\\theta$, $a\\tan\\theta$ or $a\\sec\\theta$ so a Pythagorean identity removes the root.',
    '$\\sqrt{a^2 - x^2} \\to x = a\\sin\\theta$; $\\sqrt{a^2 + x^2} \\to x = a\\tan\\theta$; $\\sqrt{x^2 - a^2} \\to x = a\\sec\\theta$.',
    'The restricted range of $\\theta$ makes the substitution invertible and lets you drop absolute values.',
    'Convert back to $x$ with a reference triangle whose sides come straight from the substitution; for definite integrals, change the limits instead.',
    'Complete the square to handle general quadratics, and always check for a simpler $u$-substitution first.',
  ],
  reading: [
    {
      title: 'OpenStax Calculus Volume 2 — 3.3 Trigonometric Substitution',
      url: 'https://openstax.org/books/calculus-volume-2/pages/3-3-trigonometric-substitution',
      source: 'openstax',
      note: 'All three forms with reference triangles and a good set of practice problems.',
    },
    {
      title: "Paul's Online Notes — Trig Substitutions",
      url: 'https://tutorial.math.lamar.edu/Classes/CalcII/TrigSubstitutions.aspx',
      source: 'paul',
      note: 'Very careful about the absolute values and the range of θ — worth reading for that alone.',
    },
    {
      title: 'Khan Academy — Calculus 2',
      url: 'https://www.khanacademy.org/math/calculus-2',
      source: 'khan',
      note: 'Video walkthroughs of trig substitution examples in the integration techniques unit.',
    },
  ],
};
