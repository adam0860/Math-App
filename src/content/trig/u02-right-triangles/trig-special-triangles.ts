import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'trig-special-triangles',
  title: 'Special Right Triangles',
  summary: 'Derive the 45-45-90 and 30-60-90 triangles from a square and an equilateral triangle, and get exact trig values with no calculator.',
  minutes: 17,
  objectives: [
    'Derive the side ratios $1 : 1 : \\sqrt{2}$ and $1 : \\sqrt{3} : 2$ from a square and an equilateral triangle',
    'Find the missing sides of any 45-45-90 or 30-60-90 triangle from one side',
    'State the exact sine, cosine and tangent of $30^\\circ$, $45^\\circ$ and $60^\\circ$ (and $\\frac{\\pi}{6}$, $\\frac{\\pi}{4}$, $\\frac{\\pi}{3}$)',
    'Recognise special-triangle geometry in game grids and understand why code gets $0.49999999999999994$ for $\\sin 30^\\circ$',
  ],
  steps: [
    // 1 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'The 45-45-90 triangle: half a square',
      blocks: [
        {
          type: 'p',
          text: 'For most angles, $\\sin\\theta$ is an unending decimal that only a calculator can supply: $\\sin 37^\\circ \\approx 0.6018$. But for a few angles, plain geometry gives the **exact** values. These [[special-right-triangles]] show up everywhere — in exam questions without calculators, in later units on the unit circle, and in calculus answers like $\\frac{\\sqrt{3}}{2}$.',
        },
        {
          type: 'p',
          text: 'The first one comes from cutting a square along its diagonal. Each half is a right triangle with two equal legs, so its two acute angles are equal too. Since they add to $90^\\circ$, each is $45^\\circ$.',
        },
        {
          type: 'graph',
          x: [-0.4, 1.6],
          y: [-0.3, 1.3],
          equal: true,
          segments: [
            { from: [0, 0], to: [1, 0], color: 'blue', label: '1' },
            { from: [1, 0], to: [1, 1], color: 'blue', label: '1' },
            { from: [1, 1], to: [0, 1], color: 'gray', dashed: true },
            { from: [0, 1], to: [0, 0], color: 'gray', dashed: true },
            { from: [0, 0], to: [1, 1], color: 'purple', label: '√2' },
            { from: [0.9, 0], to: [0.9, 0.1], color: 'gray' },
            { from: [0.9, 0.1], to: [1, 0.1], color: 'gray' },
          ],
          points: [
            { x: 0.28, y: 0.1, label: '45°', color: 'orange' },
            { x: 0.88, y: 0.72, label: '45°', color: 'orange' },
          ],
          caption: 'A unit square cut along its diagonal gives two 45-45-90 triangles with legs $1$ and hypotenuse $\\sqrt{2}$.',
        },
        {
          type: 'derivation',
          title: 'Sides and ratios of the 45-45-90 triangle',
          steps: [
            { tex: 'c^2 = 1^2 + 1^2 = 2', why: 'Pythagorean theorem with both legs equal to $1$ (the sides of the unit square).' },
            { tex: 'c = \\sqrt{2}', why: 'Take the positive square root: lengths are positive.' },
            { tex: '\\sin 45^\\circ = \\frac{1}{\\sqrt{2}} = \\frac{\\sqrt{2}}{2}', why: 'SOH: opposite $1$ over hypotenuse $\\sqrt{2}$, then rationalise by multiplying top and bottom by $\\sqrt{2}$.' },
            { tex: '\\cos 45^\\circ = \\frac{\\sqrt{2}}{2}, \\qquad \\tan 45^\\circ = \\frac{1}{1} = 1', why: 'The legs are equal, so adjacent equals opposite: cosine matches sine, and tangent is $1$.' },
          ],
          result: 'Sides in the ratio $1 : 1 : \\sqrt{2}$, and $\\sin 45^\\circ = \\cos 45^\\circ = \\frac{\\sqrt{2}}{2} \\approx 0.7071$.',
        },
        {
          type: 'theorem',
          name: '45-45-90 triangle',
          tex: '\\text{leg} : \\text{leg} : \\text{hypotenuse} = 1 : 1 : \\sqrt{2}',
          text: 'Hypotenuse $=$ leg $\\times \\sqrt{2}$; leg $=$ hypotenuse $\\div \\sqrt{2}$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why one triangle covers them all',
          text: 'Every 45-45-90 triangle has the same angles, so all of them are [[similar-triangles|similar]] to this one: scale the unit triangle by $k$ and the sides become $k$, $k$, $k\\sqrt{2}$. That is why a single picture is enough to find every side of every 45-45-90 triangle — and why the trig values never change.',
        },
      ],
    },
    // 2 ─────────────────────────────────────────────────────────────
    {
      kind: 'numeric',
      prompt: 'A 45-45-90 triangle has hypotenuse $10$. Find the length of each leg exactly (type `sqrt(2)` for $\\sqrt{2}$).',
      hint: 'Leg $=$ hypotenuse $\\div \\sqrt{2}$. Then rationalise.',
      label: 'leg $=$',
      answer: '5sqrt(2)',
      answerTex: '5\\sqrt{2} \\approx 7.07',
      explanation: 'Hypotenuse $= \\text{leg} \\cdot \\sqrt{2}$, so leg $= \\frac{10}{\\sqrt{2}} = \\frac{10\\sqrt{2}}{2} = 5\\sqrt{2} \\approx 7.07$. Check: $(5\\sqrt{2})^2 + (5\\sqrt{2})^2 = 50 + 50 = 100 = 10^2$.',
    },
    // 3 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'The 30-60-90 triangle: half an equilateral triangle',
      blocks: [
        {
          type: 'p',
          text: 'Start with an equilateral triangle of side $2$. All three angles are $60^\\circ$. Drop an altitude from the top vertex to the base. By symmetry it hits the base at its midpoint and splits the top angle in half, so each half is a right triangle with angles $30^\\circ$, $60^\\circ$, $90^\\circ$.',
        },
        {
          type: 'graph',
          x: [-1.5, 1.5],
          y: [-0.3, 2.1],
          equal: true,
          segments: [
            { from: [-1, 0], to: [1, 0], color: 'gray' },
            { from: [-1, 0], to: [0, 1.7320508], color: 'gray', dashed: true },
            { from: [0, 0], to: [1, 0], color: 'blue', label: '1' },
            { from: [0, 0], to: [0, 1.7320508], color: 'red', label: '√3' },
            { from: [0, 1.7320508], to: [1, 0], color: 'purple', label: '2' },
            { from: [0, 0.12], to: [0.12, 0.12], color: 'gray' },
            { from: [0.12, 0.12], to: [0.12, 0], color: 'gray' },
          ],
          points: [
            { x: 0.72, y: 0.12, label: '60°', color: 'orange' },
            { x: 0.12, y: 1.32, label: '30°', color: 'orange' },
          ],
          caption: 'The altitude splits the equilateral triangle (side $2$) into two 30-60-90 triangles. The right half has hypotenuse $2$, short leg $1$ (half the base) and long leg $\\sqrt{3}$ (the altitude).',
        },
        {
          type: 'derivation',
          title: 'Sides of the 30-60-90 triangle',
          steps: [
            { tex: '\\text{hypotenuse} = 2', why: 'The slanted side of the half-triangle is a full side of the equilateral triangle.' },
            { tex: '\\text{short leg} = 1', why: 'The altitude bisects the base of length $2$. This leg is across from the $30^\\circ$ angle at the top.' },
            { tex: 'h^2 + 1^2 = 2^2 \\implies h^2 = 3', why: 'Pythagorean theorem for the altitude $h$.' },
            { tex: 'h = \\sqrt{3}', why: 'Positive root. This long leg is across from the $60^\\circ$ angle.' },
          ],
          result: 'Sides in the ratio $1 : \\sqrt{3} : 2$ (short leg : long leg : hypotenuse).',
        },
        {
          type: 'theorem',
          name: '30-60-90 triangle',
          tex: '\\underbrace{1}_{\\text{opp } 30^\\circ} : \\underbrace{\\sqrt{3}}_{\\text{opp } 60^\\circ} : \\underbrace{2}_{\\text{hyp}}',
          text: 'Hypotenuse $= 2 \\times$ short leg. Long leg $= \\sqrt{3} \\times$ short leg.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the hypotenuse is exactly twice the short leg',
          text: 'Because the short leg is *half* of a side of the equilateral triangle and the hypotenuse is a *whole* side. That one geometric fact — not memorisation — is the cleanest way to rebuild the triangle in an exam. Then Pythagoras gives the long leg: $\\sqrt{2^2 - 1^2} = \\sqrt{3}$.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Match sides to angles by size',
          text: 'In any triangle, the longer side is across from the larger angle. So: smallest angle $30^\\circ$ ↔ shortest side $1$; middle angle $60^\\circ$ ↔ middle side $\\sqrt{3} \\approx 1.73$; right angle ↔ hypotenuse $2$. If you ever mix up which leg gets the $\\sqrt{3}$, this ordering settles it.',
        },
      ],
    },
    // 4 ─────────────────────────────────────────────────────────────
    {
      kind: 'truefalse',
      prompt: 'In a 30-60-90 triangle, the hypotenuse is twice as long as the longer leg.',
      answer: false,
      explanation: 'The hypotenuse is twice the **shorter** leg (the one across from $30^\\circ$). With sides $1, \\sqrt{3}, 2$: $2 = 2 \\cdot 1$, but $2 \\ne 2\\sqrt{3}$. Twice the longer leg would be $2\\sqrt{3} \\approx 3.46$, which is longer than the hypotenuse — impossible, since the hypotenuse is the longest side.',
    },
    // 5 ─────────────────────────────────────────────────────────────
    {
      kind: 'numeric',
      prompt: 'A 30-60-90 triangle has hypotenuse $12$. Find the length of the **longer** leg exactly.',
      hint: 'First the short leg: half the hypotenuse. Then multiply by $\\sqrt{3}$.',
      label: 'longer leg $=$',
      answer: '6sqrt(3)',
      answerTex: '6\\sqrt{3} \\approx 10.39',
      explanation: 'Short leg $= \\frac{12}{2} = 6$, so the longer leg is $6\\sqrt{3} \\approx 10.39$. Check: $6^2 + (6\\sqrt{3})^2 = 36 + 108 = 144 = 12^2$.',
    },
    // 6 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Exact values of the special angles',
      blocks: [
        {
          type: 'p',
          text: 'Apply SOH CAH TOA to the two triangles and you get exact values for $30^\\circ$, $45^\\circ$ and $60^\\circ$. In radians these are $\\frac{\\pi}{6}$, $\\frac{\\pi}{4}$ and $\\frac{\\pi}{3}$ — the angles you will meet most often in the rest of the course.',
        },
        {
          type: 'derivation',
          title: 'Reading values off the 30-60-90 triangle (sides $1$, $\\sqrt{3}$, $2$)',
          steps: [
            { tex: '\\sin 30^\\circ = \\frac{1}{2}, \\quad \\cos 30^\\circ = \\frac{\\sqrt{3}}{2}', why: 'From the $30^\\circ$ angle: opposite is the short leg $1$, adjacent is the long leg $\\sqrt{3}$, hypotenuse $2$.' },
            { tex: '\\tan 30^\\circ = \\frac{1}{\\sqrt{3}} = \\frac{\\sqrt{3}}{3}', why: 'TOA, then rationalise: $\\frac{1}{\\sqrt{3}} \\cdot \\frac{\\sqrt{3}}{\\sqrt{3}} = \\frac{\\sqrt{3}}{3}$.' },
            { tex: '\\sin 60^\\circ = \\frac{\\sqrt{3}}{2}, \\quad \\cos 60^\\circ = \\frac{1}{2}', why: 'From the $60^\\circ$ angle the legs swap roles: opposite is $\\sqrt{3}$, adjacent is $1$.' },
            { tex: '\\tan 60^\\circ = \\frac{\\sqrt{3}}{1} = \\sqrt{3}', why: 'Opposite over adjacent.' },
          ],
          result: 'Sine and cosine of $30^\\circ$ and $60^\\circ$ trade places — the cofunction rule in action, since $30^\\circ + 60^\\circ = 90^\\circ$.',
        },
        {
          type: 'table',
          headers: ['$\\theta$', '$\\sin\\theta$', '$\\cos\\theta$', '$\\tan\\theta$'],
          rows: [
            ['$30^\\circ = \\frac{\\pi}{6}$', '$\\frac{1}{2}$', '$\\frac{\\sqrt{3}}{2}$', '$\\frac{\\sqrt{3}}{3}$'],
            ['$45^\\circ = \\frac{\\pi}{4}$', '$\\frac{\\sqrt{2}}{2}$', '$\\frac{\\sqrt{2}}{2}$', '$1$'],
            ['$60^\\circ = \\frac{\\pi}{3}$', '$\\frac{\\sqrt{3}}{2}$', '$\\frac{1}{2}$', '$\\sqrt{3}$'],
          ],
          caption: 'The table every trig student should be able to rebuild from the two triangles in under a minute.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'A memory pattern',
          text: 'Write the sines as $\\frac{\\sqrt{1}}{2}, \\frac{\\sqrt{2}}{2}, \\frac{\\sqrt{3}}{2}$ for $30^\\circ, 45^\\circ, 60^\\circ$: the number under the root just counts up. The cosines are the same list backwards. Tangent is sine divided by cosine. But treat the pattern as a check, not a substitute — the triangles are the real source.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why these values are believable',
          text: 'As the angle grows from $30^\\circ$ to $60^\\circ$, the opposite side grows, so sine should increase: $0.5 \\to 0.707 \\to 0.866$. ✓. Cosine should decrease: $0.866 \\to 0.707 \\to 0.5$. ✓. At $45^\\circ$ the legs are equal, so sine equals cosine and tangent is $1$. ✓. A quick plausibility check like this catches most memorisation slips.',
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'Most trig and calculus exams have a no-calculator portion. "Find the exact value" means radicals and fractions like $\\frac{\\sqrt{3}}{2}$; a decimal such as $0.866$ usually earns no credit. Instructors also expect rationalised denominators: $\\frac{\\sqrt{3}}{3}$ rather than $\\frac{1}{\\sqrt{3}}$ (though both are correct).',
        },
      ],
    },
    // 7 ─────────────────────────────────────────────────────────────
    {
      kind: 'fill',
      prompt: 'Fill in the exact values.',
      template: '$\\sin 30^\\circ =$ ___ , $\\;\\cos 30^\\circ =$ ___ , $\\;\\tan 60^\\circ =$ ___ , $\\;\\cos 45^\\circ =$ ___ .',
      blanks: [{ answers: ['$\\frac{1}{2}$'] }, { answers: ['$\\frac{\\sqrt{3}}{2}$'] }, { answers: ['$\\sqrt{3}$'] }, { answers: ['$\\frac{\\sqrt{2}}{2}$'] }],
      wordBank: ['$\\frac{1}{2}$', '$\\frac{\\sqrt{3}}{2}$', '$\\sqrt{3}$', '$\\frac{\\sqrt{2}}{2}$', '$\\frac{\\sqrt{3}}{3}$', '$1$', '$2$'],
      explanation: 'From the 30-60-90 triangle (sides $1, \\sqrt{3}, 2$): $\\sin 30^\\circ = \\frac{1}{2}$, $\\cos 30^\\circ = \\frac{\\sqrt{3}}{2}$, $\\tan 60^\\circ = \\frac{\\sqrt{3}}{1} = \\sqrt{3}$. From the 45-45-90 triangle (sides $1, 1, \\sqrt{2}$): $\\cos 45^\\circ = \\frac{1}{\\sqrt{2}} = \\frac{\\sqrt{2}}{2}$.',
    },
    // 8 ─────────────────────────────────────────────────────────────
    {
      kind: 'mcq',
      prompt: 'What is the exact value of $\\tan 30^\\circ$?',
      options: [
        { text: '$\\sqrt{3}$', why: 'That is $\\tan 60^\\circ$: you took long leg over short leg, which is opposite over adjacent for the $60^\\circ$ angle.' },
        { text: '$\\frac{1}{2}$', why: 'That is $\\sin 30^\\circ$ (opposite over hypotenuse), not opposite over adjacent.' },
        { text: '$\\frac{\\sqrt{3}}{3}$', correct: true, why: 'Opposite $1$ over adjacent $\\sqrt{3}$ gives $\\frac{1}{\\sqrt{3}} = \\frac{\\sqrt{3}}{3} \\approx 0.577$.' },
        { text: '$\\frac{\\sqrt{3}}{2}$', why: 'That is $\\cos 30^\\circ$ (adjacent over hypotenuse).' },
      ],
      explanation: 'For the $30^\\circ$ angle the opposite side is the short leg $1$ and the adjacent side is the long leg $\\sqrt{3}$. So $\\tan 30^\\circ = \\frac{1}{\\sqrt{3}}$, which rationalises to $\\frac{\\sqrt{3}}{3}$. It is less than $1$, as it must be for an angle under $45^\\circ$.',
    },
    // 9 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Solving special triangles from any side',
      blocks: [
        {
          type: 'p',
          text: 'Real problems rarely hand you the side lengths $1$, $\\sqrt{3}$, $2$. They give you **one** side of a triangle known to be special, and you scale. The reliable method: find the scale factor $k$ (the length that plays the role of "$1$"), then multiply.',
        },
        {
          type: 'graph',
          x: [-0.5, 5],
          y: [-0.5, 3.2],
          equal: true,
          segments: [
            { from: [0, 0], to: ['s*sqrt(3)', 0], color: 'red', label: 'long leg = s√3' },
            { from: ['s*sqrt(3)', 0], to: ['s*sqrt(3)', 's'], color: 'blue', label: 'short leg = s' },
            { from: [0, 0], to: ['s*sqrt(3)', 's'], color: 'purple', label: 'hyp = 2s' },
          ],
          parametric: [{ x: '0.5cos(t)', y: '0.5sin(t)', t: [0, 'pi/6'], color: 'orange' }],
          points: [{ x: 0.75, y: 0.15, label: '30°', color: 'orange' }],
          sliders: [{ name: 's', min: 0.3, max: 2.6, step: 0.1, value: 1.5, label: 'short leg $s$' }],
          readouts: [
            { label: 'long leg $s\\sqrt{3} =$', expr: 's*sqrt(3)', digits: 3 },
            { label: 'hypotenuse $2s =$', expr: '2s', digits: 3 },
            { label: '$\\frac{\\text{short}}{\\text{hyp}} = \\sin 30^\\circ =$', expr: 's/(2s)', digits: 3 },
          ],
          caption: 'Every 30-60-90 triangle is the $1 : \\sqrt{3} : 2$ triangle scaled by its short leg $s$. The ratio short/hyp is always $0.5$.',
        },
        {
          type: 'derivation',
          title: 'A 30-60-90 triangle has longer leg $9$. Find the other two sides.',
          steps: [
            { tex: 's\\sqrt{3} = 9', why: 'The longer leg is $\\sqrt{3}$ times the short leg $s$. Set up the equation rather than guessing.' },
            { tex: 's = \\frac{9}{\\sqrt{3}} = \\frac{9\\sqrt{3}}{3} = 3\\sqrt{3}', why: 'Divide by $\\sqrt{3}$ and rationalise.' },
            { tex: '\\text{hyp} = 2s = 6\\sqrt{3}', why: 'The hypotenuse is twice the **short** leg.' },
            { tex: '(3\\sqrt{3})^2 + 9^2 = 27 + 81 = 108 = (6\\sqrt{3})^2 \\ \\checkmark', why: 'Pythagorean check: $(6\\sqrt{3})^2 = 36 \\cdot 3 = 108$.' },
          ],
          result: 'Short leg $3\\sqrt{3} \\approx 5.20$, hypotenuse $6\\sqrt{3} \\approx 10.39$.',
        },
        {
          type: 'derivation',
          title: 'A square has a diagonal of $8$ cm. How long are its sides?',
          steps: [
            { tex: 's\\sqrt{2} = 8', why: 'The diagonal splits the square into two 45-45-90 triangles; the diagonal is the hypotenuse, $\\sqrt{2}$ times a side.' },
            { tex: 's = \\frac{8}{\\sqrt{2}} = \\frac{8\\sqrt{2}}{2} = 4\\sqrt{2}', why: 'Divide and rationalise.' },
          ],
          result: 'Each side is $4\\sqrt{2} \\approx 5.66$ cm.',
        },
        {
          type: 'compare',
          left: { title: 'Wrong: hyp from the long leg', tone: 'bad', tex: ['\\text{long leg} = 9', '\\text{hyp} = 2 \\cdot 9 = 18'] },
          right: { title: 'Right: go through the short leg', tone: 'good', tex: ['s = \\frac{9}{\\sqrt{3}} = 3\\sqrt{3}', '\\text{hyp} = 2s = 6\\sqrt{3}'] },
        },
      ],
    },
    // 10 ────────────────────────────────────────────────────────────
    {
      kind: 'error',
      prompt: 'A 30-60-90 triangle has longer leg $6$. A student finds the hypotenuse. Tap the first wrong line.',
      lines: [
        'The longer leg is across from the $60^\\circ$ angle, so it is $s\\sqrt{3}$.',
        'The hypotenuse is twice a leg, so hyp $= 2 \\cdot 6 = 12$.',
        'Then the short leg is $\\frac{12}{2} = 6$.',
        'So the sides are $6$, $6$ and $12$.',
      ],
      errorLines: [2],
      explanation: 'Line 2 doubles the **longer** leg; the hypotenuse is twice the **shorter** leg. Correctly: $s\\sqrt{3} = 6$ gives $s = \\frac{6}{\\sqrt{3}} = 2\\sqrt{3}$, and hyp $= 2s = 4\\sqrt{3} \\approx 6.93$. The student\'s final answer even has two equal legs — that would be a 45-45-90 triangle, not a 30-60-90 one.',
    },
    // 11 ────────────────────────────────────────────────────────────
    {
      kind: 'numeric',
      prompt: 'Without a calculator, find the exact value of $\\sin 60^\\circ \\cos 30^\\circ - \\sin 30^\\circ \\cos 60^\\circ$.',
      tex: '\\sin 60^\\circ \\cos 30^\\circ - \\sin 30^\\circ \\cos 60^\\circ',
      hint: 'Substitute from the table: $\\sin 60^\\circ = \\cos 30^\\circ = \\frac{\\sqrt{3}}{2}$ and $\\sin 30^\\circ = \\cos 60^\\circ = \\frac{1}{2}$.',
      answer: '1/2',
      answerTex: '\\frac{1}{2}',
      explanation: '$\\frac{\\sqrt{3}}{2} \\cdot \\frac{\\sqrt{3}}{2} - \\frac{1}{2} \\cdot \\frac{1}{2} = \\frac{3}{4} - \\frac{1}{4} = \\frac{2}{4} = \\frac{1}{2}$. (Curiously, that equals $\\sin 30^\\circ = \\sin(60^\\circ - 30^\\circ)$. That is not luck: it is the subtraction formula for sine, which you will prove in the identities unit.)',
    },
    // 12 ────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Special triangles in games and code',
      blocks: [
        {
          type: 'p',
          text: 'Hexagonal grids (strategy games, board-game adaptations) are made of equilateral triangles: a regular hexagon splits into six of them around its centre. So every hex-grid formula is secretly a 30-60-90 triangle.',
        },
        {
          type: 'derivation',
          title: 'Width of a "pointy-top" hexagon with size $s$ (centre to corner)',
          steps: [
            { tex: '\\text{six equilateral triangles of side } s', why: 'The six corners are all distance $s$ from the centre, and neighbouring corners are $60^\\circ$ apart, so each slice is equilateral.' },
            { tex: '\\text{apothem} = \\frac{\\sqrt{3}}{2}s', why: 'The distance from the centre to the middle of a flat side is the altitude of one equilateral triangle: the long leg of a 30-60-90 triangle with hypotenuse $s$ and short leg $\\frac{s}{2}$.' },
            { tex: '\\text{width} = 2 \\cdot \\frac{\\sqrt{3}}{2}s = \\sqrt{3}\\,s', why: 'A pointy-top hex is widest between its two vertical flat sides: two apothems.' },
            { tex: '\\text{height} = 2s', why: 'Top corner to bottom corner passes through the centre: two radii.' },
          ],
          result: 'A pointy-top hex is $\\sqrt{3}\\,s$ wide and $2s$ tall, so neighbouring columns are $\\sqrt{3}\\,s$ apart.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Isometric art is not quite 30°',
          text: 'True isometric projection draws the ground axes at $30^\\circ$ to the horizontal, slope $\\tan 30^\\circ = \\frac{\\sqrt{3}}{3} \\approx 0.577$. Pixel-art "isometric" games usually use a 2:1 slope instead (two pixels across, one up) because it gives clean pixel staircases. That line rises at about $26.57^\\circ$, not $30^\\circ$.',
        },
        {
          type: 'p',
          text: 'One more code lesson. The exact values are exact; floating-point numbers are not. `std::numbers::pi` is the closest `double` to $\\pi$, but not $\\pi$ itself, so `std::sin(pi / 6)` is the sine of an angle a hair smaller than $30^\\circ$:',
        },
        {
          type: 'code',
          title: 'exact.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdio>
#include <numbers>

int main() {
    using std::numbers::pi;
    std::printf("sin(pi/6) = %.17g\\n", std::sin(pi / 6));
    std::printf("cos(pi/3) = %.17g\\n", std::cos(pi / 3));
    std::printf("sin(pi/6) == 0.5 ? %s\\n", std::sin(pi / 6) == 0.5 ? "yes" : "no");
    const double eps = 1e-9;
    std::printf("|sin(pi/6) - 0.5| < 1e-9 ? %s\\n",
                std::fabs(std::sin(pi / 6) - 0.5) < eps ? "yes" : "no");
}`,
          output: `sin(pi/6) = 0.49999999999999994
cos(pi/3) = 0.50000000000000011
sin(pi/6) == 0.5 ? no
|sin(pi/6) - 0.5| < 1e-9 ? yes`,
          annotations: [
            { lines: '7-8', text: '`%.17g` prints enough digits to reveal the tiny rounding error in each result.' },
            { lines: 9, text: 'Comparing floating-point results with `==` fails even though the math says $\\sin\\frac{\\pi}{6} = \\frac{1}{2}$ exactly.' },
            { lines: '10-12', text: 'The fix: compare with a tolerance. When you know an angle is special, you can also just use the exact constant, e.g. `std::sqrt(3.0) / 2` for $\\sin 60^\\circ$.' },
          ],
        },
      ],
    },
    // 13 ────────────────────────────────────────────────────────────
    {
      kind: 'numeric',
      prompt: 'A strategy game uses pointy-top hexagons of size $s = 10$ px (centre to corner). How wide is each hexagon, in pixels? Give the exact value.',
      hint: 'Width $=$ two apothems, and the apothem is the long leg of a 30-60-90 triangle with hypotenuse $10$.',
      label: 'width $=$',
      unit: 'px',
      answer: '10sqrt(3)',
      answerTex: '10\\sqrt{3} \\approx 17.32',
      explanation: 'The 30-60-90 triangle formed by the centre, a corner and the midpoint of a side has hypotenuse $10$, short leg $5$ and long leg (the apothem) $5\\sqrt{3}$. The width is two apothems: $10\\sqrt{3} \\approx 17.32$ px. The height would be $2s = 20$ px.',
    },
    // 14 ────────────────────────────────────────────────────────────
    {
      kind: 'order',
      prompt: 'Order the steps that derive the sides of the 30-60-90 triangle.',
      lines: [
        'Start with an equilateral triangle of side $2$ (all angles $60^\\circ$)',
        'Drop an altitude from the top vertex to the base',
        'The altitude bisects the base and the top angle, making two 30-60-90 triangles',
        'Each half has hypotenuse $2$ and short leg $1$',
        'The Pythagorean theorem gives the altitude: $\\sqrt{2^2 - 1^2} = \\sqrt{3}$',
      ],
      distractors: ['Cut a square along its diagonal'],
      explanation: 'The construction starts from the equilateral triangle, and the bisected base is what makes the short leg exactly half the hypotenuse. Only then can Pythagoras supply the long leg $\\sqrt{3}$. Cutting a square along its diagonal is the construction for the **45-45-90** triangle.',
    },
    // 15 ────────────────────────────────────────────────────────────
    {
      kind: 'mcq',
      prompt: 'What is the exact value of $\\sin\\frac{\\pi}{3}$?',
      options: [
        { text: '$\\frac{1}{2}$', why: 'That is $\\sin\\frac{\\pi}{6}$ ($30^\\circ$). $\\frac{\\pi}{3}$ is $60^\\circ$.' },
        { text: '$\\frac{\\sqrt{2}}{2}$', why: 'That is $\\sin\\frac{\\pi}{4}$ ($45^\\circ$).' },
        { text: '$\\sqrt{3}$', why: 'That is $\\tan\\frac{\\pi}{3}$. A sine of an acute angle is always less than $1$.' },
        { text: '$\\frac{\\sqrt{3}}{2}$', correct: true, why: '$\\frac{\\pi}{3} = 60^\\circ$; opposite $\\sqrt{3}$ over hypotenuse $2$.' },
      ],
      explanation: 'Convert first: $\\frac{\\pi}{3} = \\frac{180^\\circ}{3} = 60^\\circ$. In the 30-60-90 triangle the side opposite $60^\\circ$ is $\\sqrt{3}$ and the hypotenuse is $2$, so $\\sin\\frac{\\pi}{3} = \\frac{\\sqrt{3}}{2} \\approx 0.866$.',
    },
  ],
  takeaways: [
    'Half a square gives the 45-45-90 triangle with sides $1 : 1 : \\sqrt{2}$.',
    'Half an equilateral triangle gives the 30-60-90 triangle with sides $1 : \\sqrt{3} : 2$; the hypotenuse is twice the **short** leg.',
    'Exact values: $\\sin 30^\\circ = \\frac{1}{2}$, $\\sin 45^\\circ = \\frac{\\sqrt{2}}{2}$, $\\sin 60^\\circ = \\frac{\\sqrt{3}}{2}$; cosines run in reverse; $\\tan 30^\\circ = \\frac{\\sqrt{3}}{3}$, $\\tan 45^\\circ = 1$, $\\tan 60^\\circ = \\sqrt{3}$.',
    'To solve a special triangle from one side, find the scale factor (the side playing the role of $1$), then multiply.',
    'Floating-point trig of special angles is only approximately exact: compare with a tolerance, never `==`.',
  ],
  reading: [
    {
      title: 'OpenStax Algebra and Trigonometry 2e — 7.2 Right Triangle Trigonometry',
      url: 'https://openstax.org/books/algebra-and-trigonometry-2e/pages/7-2-right-triangle-trigonometry',
      source: 'openstax',
      note: 'Includes the table of special-angle values and exercises evaluating them exactly.',
    },
    {
      title: 'Wikipedia — Special right triangle',
      url: 'https://en.wikipedia.org/wiki/Special_right_triangle',
      source: 'wikipedia',
      note: 'Covers the angle-based special triangles from this lesson plus side-based ones like 3-4-5.',
    },
    {
      title: 'Red Blob Games — Hexagonal Grids',
      url: 'https://www.redblobgames.com/grids/hexagons/',
      source: 'article',
      note: 'The definitive interactive guide to hex-grid math for games, built on the geometry in this lesson.',
    },
  ],
};
