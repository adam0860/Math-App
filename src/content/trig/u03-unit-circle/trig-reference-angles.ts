import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'trig-reference-angles',
  title: 'Reference Angles and Quadrant Signs',
  summary: 'Every angle on the unit circle is a mirror image of a first-quadrant angle. Find the mirror, fix the sign, and you can evaluate trig functions anywhere.',
  minutes: 17,
  objectives: [
    'Find the reference angle of any angle, in degrees or radians',
    'Determine the sign of $\\sin\\theta$, $\\cos\\theta$ and $\\tan\\theta$ from the quadrant of $\\theta$',
    'Evaluate trig functions of any special angle exactly with the reference-angle method',
    'Explain why the method works using the symmetry of the unit circle',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'One quadrant is enough: symmetry',
      blocks: [
        {
          type: 'p',
          text: 'In the last lesson you found the unit-circle points for $\\frac{\\pi}{6}$, $\\frac{\\pi}{4}$ and $\\frac{\\pi}{3}$. What about $\\frac{5\\pi}{6}$, $225^\\circ$ or $-\\frac{\\pi}{3}$? You do not need any new triangles. The unit circle is symmetric across both axes, so every point on it is a reflection of a point in the first [[quadrant]].',
        },
        {
          type: 'p',
          text: 'Reflections never change the *size* of the coordinates, only their *signs*. A point in quadrant II at $(-0.8, 0.6)$ is the mirror image of $(0.8, 0.6)$ in quadrant I. So every trig value is "a first-quadrant value, possibly with a minus sign in front". This lesson is about finding that first-quadrant twin (the reference angle) and deciding the sign (the quadrant).',
        },
        {
          type: 'graph',
          x: [-1.5, 1.5],
          y: [-1.3, 1.3],
          equal: true,
          parametric: [{ x: 'cos(t)', y: 'sin(t)', t: [0, '2pi'], color: 'gray' }],
          segments: [
            { from: [0, 0], to: ['cos(a)', 'sin(a)'], color: 'blue', arrow: true, label: 'θ' },
            { from: [0, 0], to: ['abs(cos(a))', 'abs(sin(a))'], color: 'orange', dashed: true, label: 'twin' },
            { from: ['cos(a)', 'sin(a)'], to: ['abs(cos(a))', 'sin(a)'], color: 'gray', dashed: true },
            { from: ['abs(cos(a))', 'sin(a)'], to: ['abs(cos(a))', 'abs(sin(a))'], color: 'gray', dashed: true },
          ],
          points: [
            { x: 'cos(a)', y: 'sin(a)', label: 'P', color: 'blue' },
            { x: 'abs(cos(a))', y: 'abs(sin(a))', label: 'first-quadrant twin', color: 'orange' },
          ],
          sliders: [{ name: 'a', min: 0, max: 6.28, step: 0.01, value: 2.62, label: '$\\theta$ (radians)' }],
          readouts: [
            { label: '$\\theta$ in degrees', expr: 'a*180/pi', digits: 1 },
            { label: 'reference angle (degrees)', expr: 'arccos(abs(cos(a)))*180/pi', digits: 1 },
            { label: '$\\cos\\theta =$', expr: 'cos(a)', digits: 4 },
            { label: '$\\sin\\theta =$', expr: 'sin(a)', digits: 4 },
          ],
          caption: 'The orange twin is $P$ with both signs made positive. Its coordinates have the same sizes as $P$\'s. The angle it makes with the $x$-axis is the reference angle.',
        },
        {
          type: 'callout',
          variant: 'analogy',
          text: 'Think of a sprite that is drawn once, facing right, and mirrored horizontally or vertically to face the other directions. The art is identical; only the flip flags change. Reference angles are the one drawn sprite; quadrant signs are the flip flags.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'concept',
      title: 'Finding the reference angle',
      blocks: [
        {
          type: 'definition',
          term: 'Reference angle',
          text: 'The [[reference-angle]] of $\\theta$ is the **acute** angle $\\theta\'$ (between $0$ and $\\frac{\\pi}{2}$) between the terminal side of $\\theta$ and the **$x$-axis**. Quadrantal angles are usually handled directly instead: their reference angle is $0$ or $\\frac{\\pi}{2}$.',
        },
        {
          type: 'p',
          text: 'First replace $\\theta$ by the [[coterminal-angles|coterminal angle]] in $[0, 2\\pi)$ by adding or subtracting full turns. Then measure the gap to the nearest part of the $x$-axis, which sits at $0$, $\\pi$ or $2\\pi$:',
        },
        {
          type: 'table',
          headers: ['Quadrant of $\\theta$', 'degrees', 'radians', 'example'],
          rows: [
            ['I', '$\\theta\' = \\theta$', '$\\theta\' = \\theta$', '$40^\\circ \\to 40^\\circ$'],
            ['II', '$\\theta\' = 180^\\circ - \\theta$', '$\\theta\' = \\pi - \\theta$', '$150^\\circ \\to 30^\\circ$'],
            ['III', '$\\theta\' = \\theta - 180^\\circ$', '$\\theta\' = \\theta - \\pi$', '$225^\\circ \\to 45^\\circ$'],
            ['IV', '$\\theta\' = 360^\\circ - \\theta$', '$\\theta\' = 2\\pi - \\theta$', '$300^\\circ \\to 60^\\circ$'],
          ],
          caption: 'Always measure to the $x$-axis, never the $y$-axis.',
        },
        {
          type: 'derivation',
          title: 'Reference angle of $510^\\circ$',
          steps: [
            { tex: '510^\\circ - 360^\\circ = 150^\\circ', why: 'Remove one full turn. $150^\\circ$ is coterminal with $510^\\circ$ and lies in $[0^\\circ, 360^\\circ)$.' },
            { tex: '90^\\circ < 150^\\circ < 180^\\circ', why: 'So the terminal side is in quadrant II.' },
            { tex: '\\theta\' = 180^\\circ - 150^\\circ = 30^\\circ', why: 'In quadrant II the nearest part of the $x$-axis is the negative half, at $180^\\circ$.' },
          ],
          result: 'The reference angle of $510^\\circ$ is $30^\\circ$.',
        },
        {
          type: 'derivation',
          title: 'Reference angle of $\\frac{5\\pi}{3}$',
          steps: [
            { tex: '\\tfrac{3\\pi}{2} = \\tfrac{9\\pi}{6} < \\tfrac{10\\pi}{6} = \\tfrac{5\\pi}{3} < \\tfrac{12\\pi}{6} = 2\\pi', why: 'Compare with common denominators: $\\frac{5\\pi}{3}$ lies between $\\frac{3\\pi}{2}$ and $2\\pi$, so it is in quadrant IV.' },
            { tex: '\\theta\' = 2\\pi - \\tfrac{5\\pi}{3} = \\tfrac{6\\pi}{3} - \\tfrac{5\\pi}{3} = \\tfrac{\\pi}{3}', why: 'In quadrant IV, measure back to the positive $x$-axis at $2\\pi$.' },
          ],
          result: 'The reference angle of $\\frac{5\\pi}{3}$ is $\\frac{\\pi}{3}$ ($60^\\circ$).',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Radian shortcut',
          text: 'For angles of the form $\\frac{k\\pi}{6}$, $\\frac{k\\pi}{4}$ or $\\frac{k\\pi}{3}$, the reference angle has the same denominator: $\\frac{\\pi}{6}$, $\\frac{\\pi}{4}$ or $\\frac{\\pi}{3}$ respectively, as long as the angle is not quadrantal. For example $\\frac{7\\pi}{6} \\to \\frac{\\pi}{6}$, $\\frac{11\\pi}{4} \\to \\frac{\\pi}{4}$ (it is coterminal with $\\frac{3\\pi}{4}$), $\\frac{4\\pi}{3} \\to \\frac{\\pi}{3}$. The only question is which quadrant, and that decides the sign.',
        },
      ],
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'numeric',
      prompt: 'Find the reference angle of $300^\\circ$, in degrees.',
      hint: 'Which quadrant is $300^\\circ$ in? How far is it from the nearest part of the $x$-axis?',
      label: '$\\theta\' =$',
      unit: 'degrees',
      answer: '60',
      explanation: '$300^\\circ$ is between $270^\\circ$ and $360^\\circ$, so it is in quadrant IV. The nearest part of the $x$-axis is the positive half, at $360^\\circ$: $\\theta\' = 360^\\circ - 300^\\circ = 60^\\circ$. (If you got $30^\\circ$, you measured to the $y$-axis at $270^\\circ$.)',
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'numeric',
      prompt: 'Find the reference angle of $\\frac{7\\pi}{6}$, in radians.',
      hint: '$\\frac{7\\pi}{6}$ is a little more than $\\pi$. Subtract $\\pi$.',
      label: '$\\theta\' =$',
      answer: 'pi/6',
      answerTex: '\\frac{\\pi}{6}',
      explanation: '$\\pi = \\frac{6\\pi}{6} < \\frac{7\\pi}{6} < \\frac{9\\pi}{6} = \\frac{3\\pi}{2}$, so the angle is in quadrant III. There the nearest part of the $x$-axis is at $\\pi$: $\\theta\' = \\frac{7\\pi}{6} - \\pi = \\frac{\\pi}{6}$. You can type `pi/6` or a decimal like `0.52`.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Signs by quadrant',
      blocks: [
        {
          type: 'p',
          text: 'The sign of each function is just the sign of a coordinate. Cosine is $x$, positive to the right of the $y$-axis. Sine is $y$, positive above the $x$-axis. Tangent, $\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta} = \\frac{y}{x}$ (studied fully in the next lesson), is positive when $x$ and $y$ have the **same** sign.',
        },
        {
          type: 'table',
          headers: ['Quadrant', 'signs of $(x, y)$', '$\\cos\\theta$', '$\\sin\\theta$', '$\\tan\\theta$', 'positive'],
          rows: [
            ['I $\\left(0, \\frac{\\pi}{2}\\right)$', '$(+, +)$', '$+$', '$+$', '$+$', '**A**ll'],
            ['II $\\left(\\frac{\\pi}{2}, \\pi\\right)$', '$(-, +)$', '$-$', '$+$', '$-$', '**S**ine'],
            ['III $\\left(\\pi, \\frac{3\\pi}{2}\\right)$', '$(-, -)$', '$-$', '$-$', '$+$', '**T**angent'],
            ['IV $\\left(\\frac{3\\pi}{2}, 2\\pi\\right)$', '$(+, -)$', '$+$', '$-$', '$-$', '**C**osine'],
          ],
          caption: 'Read the last column counterclockwise from quadrant I: A, S, T, C.',
        },
        {
          type: 'p',
          text: 'The mnemonic is the [[trig-astc-rule|ASTC rule]]: "**A**ll **S**tudents **T**ake **C**alculus". In quadrant I all three are positive; in II only sine; in III only tangent; in IV only cosine.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why tangent is positive in quadrant III',
          text: 'In quadrant III both coordinates are negative, say $(-0.6, -0.8)$. Their quotient is $\\frac{-0.8}{-0.6} = \\frac43 > 0$: two negatives make a positive. Geometrically, the terminal side through the origin and quadrant III is the same *line* as one through quadrant I, so it has the same positive slope, and $\\tan\\theta$ is that slope.',
        },
        {
          type: 'callout',
          variant: 'warning',
          text: 'A mnemonic is only a shortcut. If you forget it, sketch the point: "left of the $y$-axis, so $\\cos < 0$" is faster to reconstruct than to misremember. And ASTC says nothing about **size**; that comes from the reference angle.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'mcq',
      prompt: 'Suppose $\\tan\\theta > 0$ and $\\cos\\theta < 0$. In which quadrant does the terminal side of $\\theta$ lie?',
      options: [
        { text: 'Quadrant I', why: 'In quadrant I cosine is positive, which contradicts $\\cos\\theta < 0$.' },
        { text: 'Quadrant II', why: 'Cosine is negative there, but sine is positive, so $\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta}$ is negative.' },
        { text: 'Quadrant III', correct: true, why: 'Both coordinates are negative, so $\\cos\\theta < 0$ and $\\tan\\theta = \\frac{y}{x} > 0$.' },
        { text: 'Quadrant IV', why: 'Cosine is positive in quadrant IV.' },
      ],
      explanation: '$\\cos\\theta < 0$ means $x < 0$: quadrant II or III. $\\tan\\theta = \\frac{y}{x} > 0$ needs $y$ to have the same sign as $x$, so $y < 0$ too. Both negative is quadrant III, the "**T**" in ASTC.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'The method: reference angle + sign',
      blocks: [
        {
          type: 'theorem',
          name: 'Reference angle theorem',
          tex: '\\sin\\theta = \\pm\\sin\\theta\', \\qquad \\cos\\theta = \\pm\\cos\\theta\', \\qquad \\tan\\theta = \\pm\\tan\\theta\'',
          text: 'where $\\theta\'$ is the reference angle and each sign is chosen by the quadrant of $\\theta$.',
        },
        {
          type: 'steps',
          items: [
            { title: 'Reduce', text: 'Add or subtract multiples of $2\\pi$ ($360^\\circ$) to get a coterminal angle in $[0, 2\\pi)$.' },
            { title: 'Locate', text: 'Identify the quadrant of the terminal side.' },
            { title: 'Reference angle', text: 'Find $\\theta\'$, the acute angle to the $x$-axis.' },
            { title: 'Evaluate', text: 'Look up the function at $\\theta\'$ (a first-quadrant special value).' },
            { title: 'Sign', text: 'Attach the sign that function has in that quadrant.' },
          ],
        },
        {
          type: 'derivation',
          title: 'Evaluate $\\sin 240^\\circ$',
          steps: [
            { tex: '180^\\circ < 240^\\circ < 270^\\circ', why: 'Already in $[0^\\circ, 360^\\circ)$; it is in quadrant III.' },
            { tex: '\\theta\' = 240^\\circ - 180^\\circ = 60^\\circ', why: 'Quadrant III: subtract $180^\\circ$.' },
            { tex: '\\sin 60^\\circ = \\tfrac{\\sqrt3}{2}', why: 'First-quadrant special value.' },
            { tex: '\\sin 240^\\circ = -\\tfrac{\\sqrt3}{2}', why: 'In quadrant III $y < 0$, so sine is negative.' },
          ],
          result: '$\\sin 240^\\circ = -\\frac{\\sqrt3}{2} \\approx -0.866$.',
        },
        {
          type: 'derivation',
          title: 'Evaluate $\\cos\\left(-\\frac{5\\pi}{4}\\right)$',
          steps: [
            { tex: '-\\tfrac{5\\pi}{4} + 2\\pi = \\tfrac{3\\pi}{4}', why: 'Add a full turn to get a coterminal angle in $[0, 2\\pi)$.' },
            { tex: '\\tfrac{\\pi}{2} < \\tfrac{3\\pi}{4} < \\pi', why: 'Quadrant II.' },
            { tex: '\\theta\' = \\pi - \\tfrac{3\\pi}{4} = \\tfrac{\\pi}{4}', why: 'Quadrant II: subtract from $\\pi$.' },
            { tex: '\\cos\\left(-\\tfrac{5\\pi}{4}\\right) = -\\cos\\tfrac{\\pi}{4} = -\\tfrac{\\sqrt2}{2}', why: 'Cosine ($x$) is negative in quadrant II, and $\\cos\\frac{\\pi}{4} = \\frac{\\sqrt2}{2}$.' },
          ],
          result: '$\\cos\\left(-\\frac{5\\pi}{4}\\right) = -\\frac{\\sqrt2}{2}$. (Cross-check with the even rule: $\\cos\\left(-\\frac{5\\pi}{4}\\right) = \\cos\\frac{5\\pi}{4}$, which is in quadrant III, also negative.)',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the reference angle gives the right size',
          text: 'Reflecting the first-quadrant point at $\\theta\'$ across the $y$-axis lands at angle $\\pi - \\theta\'$; across the origin, at $\\pi + \\theta\'$; across the $x$-axis, at $2\\pi - \\theta\'$. Reflections preserve distances to the axes, so $|x|$ and $|y|$ stay $\\cos\\theta\'$ and $\\sin\\theta\'$. Those three angles are exactly the quadrant II, III and IV rows of the reference-angle table, read backwards.',
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'order',
      prompt: 'Put the steps for evaluating $\\cos\\frac{7\\pi}{4}$ in the correct order.',
      lines: [
        '$\\frac{7\\pi}{4}$ is between $\\frac{3\\pi}{2}$ and $2\\pi$: quadrant IV',
        'Reference angle: $2\\pi - \\frac{7\\pi}{4} = \\frac{\\pi}{4}$',
        '$\\cos\\frac{\\pi}{4} = \\frac{\\sqrt2}{2}$',
        'Cosine is positive in quadrant IV, so $\\cos\\frac{7\\pi}{4} = \\frac{\\sqrt2}{2}$',
      ],
      distractors: ['Reference angle: $\\frac{7\\pi}{4} - \\pi = \\frac{3\\pi}{4}$'],
      explanation: 'Locate the quadrant first; it decides both the reference-angle formula and the sign. In quadrant IV, $\\theta\' = 2\\pi - \\theta = \\frac{\\pi}{4}$. The distractor uses the quadrant III formula and produces $\\frac{3\\pi}{4}$, which is not even acute, a giveaway that something went wrong.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'numeric',
      prompt: 'Evaluate $\\cos\\frac{4\\pi}{3}$ exactly.',
      hint: 'Quadrant III, reference angle $\\frac{\\pi}{3}$. What sign does cosine have in quadrant III?',
      label: '$\\cos\\frac{4\\pi}{3} =$',
      answer: '-1/2',
      answerTex: '-\\frac{1}{2}',
      explanation: '$\\pi < \\frac{4\\pi}{3} < \\frac{3\\pi}{2}$, so quadrant III, and $\\theta\' = \\frac{4\\pi}{3} - \\pi = \\frac{\\pi}{3}$. $\\cos\\frac{\\pi}{3} = \\frac12$, and cosine ($x$) is negative in quadrant III, so $\\cos\\frac{4\\pi}{3} = -\\frac12$.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'error',
      prompt: 'A student evaluates $\\sin 330^\\circ$. Tap the first line that is wrong.',
      lines: [
        '$330^\\circ$ is between $270^\\circ$ and $360^\\circ$, so it is in quadrant IV',
        'Reference angle: $360^\\circ - 330^\\circ = 30^\\circ$',
        '$\\sin 30^\\circ = \\frac12$',
        'Sine is positive in quadrant IV, so $\\sin 330^\\circ = \\frac12$',
      ],
      errorLines: [4],
      explanation: 'Lines 1 to 3 are correct. Line 4 gets the sign wrong: in quadrant IV the point is **below** the $x$-axis, so $y = \\sin\\theta < 0$. (Cosine is the positive one in IV, the "C" in ASTC.) Correct answer: $\\sin 330^\\circ = -\\frac12$.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'The whole unit circle',
      blocks: [
        {
          type: 'p',
          text: 'Apply the method to every multiple of $\\frac{\\pi}{6}$ and $\\frac{\\pi}{4}$ and you get the famous complete unit circle. You do not need to memorise it as 32 separate numbers: it is the three first-quadrant points, reflected into the other quadrants, plus the four axis points.',
        },
        {
          type: 'table',
          headers: ['$\\theta$', 'ref. angle', '$\\cos\\theta$', '$\\sin\\theta$'],
          rows: [
            ['$\\frac{2\\pi}{3} = 120^\\circ$', '$\\frac{\\pi}{3}$', '$-\\frac12$', '$\\frac{\\sqrt3}{2}$'],
            ['$\\frac{3\\pi}{4} = 135^\\circ$', '$\\frac{\\pi}{4}$', '$-\\frac{\\sqrt2}{2}$', '$\\frac{\\sqrt2}{2}$'],
            ['$\\frac{5\\pi}{6} = 150^\\circ$', '$\\frac{\\pi}{6}$', '$-\\frac{\\sqrt3}{2}$', '$\\frac12$'],
            ['$\\frac{7\\pi}{6} = 210^\\circ$', '$\\frac{\\pi}{6}$', '$-\\frac{\\sqrt3}{2}$', '$-\\frac12$'],
            ['$\\frac{5\\pi}{4} = 225^\\circ$', '$\\frac{\\pi}{4}$', '$-\\frac{\\sqrt2}{2}$', '$-\\frac{\\sqrt2}{2}$'],
            ['$\\frac{4\\pi}{3} = 240^\\circ$', '$\\frac{\\pi}{3}$', '$-\\frac12$', '$-\\frac{\\sqrt3}{2}$'],
            ['$\\frac{5\\pi}{3} = 300^\\circ$', '$\\frac{\\pi}{3}$', '$\\frac12$', '$-\\frac{\\sqrt3}{2}$'],
            ['$\\frac{7\\pi}{4} = 315^\\circ$', '$\\frac{\\pi}{4}$', '$\\frac{\\sqrt2}{2}$', '$-\\frac{\\sqrt2}{2}$'],
            ['$\\frac{11\\pi}{6} = 330^\\circ$', '$\\frac{\\pi}{6}$', '$\\frac{\\sqrt3}{2}$', '$-\\frac12$'],
          ],
          caption: 'Quadrants II–IV. Within each row the sizes come from the reference angle; the signs follow ASTC.',
        },
        {
          type: 'graph',
          x: [-1.6, 1.6],
          y: [-1.3, 1.3],
          equal: true,
          parametric: [{ x: 'cos(t)', y: 'sin(t)', t: [0, '2pi'], color: 'gray' }],
          points: [
            { x: 1, y: 0, label: '0', color: 'gray' },
            { x: 'cos(pi/6)', y: 'sin(pi/6)', label: 'π/6', color: 'blue' },
            { x: 'cos(pi/4)', y: 'sin(pi/4)', label: 'π/4', color: 'purple' },
            { x: 'cos(pi/3)', y: 'sin(pi/3)', label: 'π/3', color: 'green' },
            { x: 0, y: 1, label: 'π/2', color: 'gray' },
            { x: 'cos(2pi/3)', y: 'sin(2pi/3)', label: '2π/3', color: 'green' },
            { x: 'cos(3pi/4)', y: 'sin(3pi/4)', label: '3π/4', color: 'purple' },
            { x: 'cos(5pi/6)', y: 'sin(5pi/6)', label: '5π/6', color: 'blue' },
            { x: -1, y: 0, label: 'π', color: 'gray' },
            { x: 'cos(7pi/6)', y: 'sin(7pi/6)', label: '7π/6', color: 'blue' },
            { x: 'cos(5pi/4)', y: 'sin(5pi/4)', label: '5π/4', color: 'purple' },
            { x: 'cos(4pi/3)', y: 'sin(4pi/3)', label: '4π/3', color: 'green' },
            { x: 0, y: -1, label: '3π/2', color: 'gray' },
            { x: 'cos(5pi/3)', y: 'sin(5pi/3)', label: '5π/3', color: 'green' },
            { x: 'cos(7pi/4)', y: 'sin(7pi/4)', label: '7π/4', color: 'purple' },
            { x: 'cos(11pi/6)', y: 'sin(11pi/6)', label: '11π/6', color: 'blue' },
          ],
          caption: 'Same colour = same reference angle: blue $\\frac{\\pi}{6}$, purple $\\frac{\\pi}{4}$, green $\\frac{\\pi}{3}$. Each colour family is one point mirrored into all four quadrants.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Eight-way movement',
          text: 'A top-down game with 8-direction input moves along the multiples of $\\frac{\\pi}{4}$. The diagonal directions are $\\left(\\pm\\frac{\\sqrt2}{2}, \\pm\\frac{\\sqrt2}{2}\\right) \\approx (\\pm0.7071, \\pm0.7071)$, not $(\\pm1, \\pm1)$. Using $(1, 1)$ makes a diagonal step $\\sqrt2 \\approx 1.41$ times longer, the classic "moving diagonally is faster" bug. The fix is to normalise the input vector, which is exactly projecting it onto the unit circle.',
        },
      ],
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'fill',
      prompt: 'Complete the unit-circle point at $\\theta = \\frac{5\\pi}{6}$.',
      template: 'The reference angle is ___, so $P = ($ ___ $,$ ___ $)$.',
      blanks: [
        { answers: ['$\\frac{\\pi}{6}$'] },
        { answers: ['$-\\frac{\\sqrt{3}}{2}$'] },
        { answers: ['$\\frac{1}{2}$'] },
      ],
      wordBank: ['$\\frac{\\pi}{6}$', '$\\frac{\\pi}{3}$', '$-\\frac{\\sqrt{3}}{2}$', '$\\frac{\\sqrt{3}}{2}$', '$\\frac{1}{2}$', '$-\\frac{1}{2}$'],
      explanation: '$\\frac{5\\pi}{6}$ is in quadrant II with $\\theta\' = \\pi - \\frac{5\\pi}{6} = \\frac{\\pi}{6}$. At $\\frac{\\pi}{6}$ the point is $\\left(\\frac{\\sqrt3}{2}, \\frac12\\right)$. In quadrant II, $x$ turns negative and $y$ stays positive: $P = \\left(-\\frac{\\sqrt3}{2}, \\frac12\\right)$.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'truefalse',
      prompt: 'The reference angle of $\\frac{2\\pi}{3}$ is $\\frac{2\\pi}{3} - \\frac{\\pi}{2} = \\frac{\\pi}{6}$.',
      answer: false,
      explanation: 'That measures the angle to the **$y$-axis**. Reference angles are always measured to the $x$-axis. $\\frac{2\\pi}{3}$ is in quadrant II, so $\\theta\' = \\pi - \\frac{2\\pi}{3} = \\frac{\\pi}{3}$. Using $\\frac{\\pi}{6}$ would swap the sizes of sine and cosine: you would get $\\sin\\frac{2\\pi}{3} = \\frac12$ instead of the correct $\\frac{\\sqrt3}{2}$.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'numeric',
      prompt: 'Evaluate $\\cos(-210^\\circ)$ exactly.',
      hint: 'Add $360^\\circ$ first, then use the reference-angle method.',
      label: '$\\cos(-210^\\circ) =$',
      answer: '-sqrt(3)/2',
      answerTex: '-\\frac{\\sqrt{3}}{2}',
      explanation: '$-210^\\circ + 360^\\circ = 150^\\circ$, which is in quadrant II with reference angle $180^\\circ - 150^\\circ = 30^\\circ$. $\\cos 30^\\circ = \\frac{\\sqrt3}{2}$, and cosine is negative in quadrant II, so $\\cos(-210^\\circ) = -\\frac{\\sqrt3}{2} \\approx -0.866$. (The even rule agrees: $\\cos(-210^\\circ) = \\cos 210^\\circ$, quadrant III, also $-\\frac{\\sqrt3}{2}$.)',
    },
  ],
  takeaways: [
    'The reference angle $\\theta\'$ is the acute angle between the terminal side and the $x$-axis: $\\theta$, $\\pi - \\theta$, $\\theta - \\pi$ or $2\\pi - \\theta$ in quadrants I–IV (after reducing to $[0, 2\\pi)$).',
    'Signs follow the coordinates: cosine is $x$, sine is $y$, tangent is $\\frac{y}{x}$. ASTC: All, Sine, Tangent, Cosine are positive in quadrants I, II, III, IV.',
    'Any trig value equals the value at the reference angle, with the sign of the quadrant: $\\sin\\theta = \\pm\\sin\\theta\'$, etc.',
    'The method works because the unit circle is symmetric: reflections change signs of coordinates, never their sizes.',
    'Measuring to the $y$-axis instead of the $x$-axis swaps sine and cosine, the most common reference-angle error.',
  ],
  reading: [
    {
      title: 'OpenStax Algebra and Trigonometry 2e — 7.3 Unit Circle',
      url: 'https://openstax.org/books/algebra-and-trigonometry-2e/pages/7-3-unit-circle',
      source: 'openstax',
      note: 'The second half of the section covers reference angles and using them to evaluate sine and cosine.',
    },
    {
      title: 'Wikipedia — Unit circle',
      url: 'https://en.wikipedia.org/wiki/Unit_circle',
      source: 'wikipedia',
      note: 'Includes the full diagram of the unit circle with every special angle labelled.',
    },
    {
      title: 'Khan Academy — Trigonometry',
      url: 'https://www.khanacademy.org/math/trigonometry',
      source: 'khan',
      note: 'Practice sets on reference angles and the signs of trig functions in each quadrant.',
    },
  ],
};
