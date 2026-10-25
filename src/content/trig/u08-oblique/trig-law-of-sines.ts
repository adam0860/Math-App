import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'trig-law-of-sines',
  title: 'The Law of Sines',
  summary: 'Solve any triangle from an angle–side pair: the proof, the AAS/ASA cases, and the tricky ambiguous SSA case.',
  minutes: 18,
  objectives: [
    'Label an oblique triangle in standard notation and identify which given information (AAS, ASA, SSA, SAS, SSS) you have',
    'Prove the Law of Sines by dropping an altitude',
    'Solve AAS and ASA triangles, including real triangulation problems',
    'Decide whether SSA data gives zero, one or two triangles, and find every solution',
  ],
  steps: [
    {
      kind: 'concept',
      title: 'Triangles without a right angle',
      blocks: [
        {
          type: 'p',
          text: 'SOH CAH TOA only works in a right triangle. But most triangles you meet — the triangle formed by two radio towers and a phone, by a player, an enemy and a wall, or by three vertices of a game mesh — have no right angle at all. A triangle with no $90^\\circ$ angle is an [[oblique-triangle]], and this unit gives you the tools to solve them.',
        },
        {
          type: 'p',
          text: '**Standard labeling.** Name the angles (and the vertices they sit at) $A$, $B$, $C$, and name each side with the lowercase letter of the angle **opposite** it: side $a$ is across from angle $A$, and so on. This pairing of an angle with its opposite side is the backbone of everything in this lesson.',
        },
        {
          type: 'graph',
          x: [-1, 8],
          y: [-1, 4.5],
          equal: true,
          height: 240,
          segments: [
            { from: [0, 0], to: [7, 0], color: 'blue', label: 'c' },
            { from: [7, 0], to: [2, 3.5], color: 'red', label: 'a' },
            { from: [2, 3.5], to: [0, 0], color: 'green', label: 'b' },
          ],
          points: [
            { x: 0, y: 0, label: 'A', color: 'gray' },
            { x: 7, y: 0, label: 'B', color: 'gray' },
            { x: 2, y: 3.5, label: 'C', color: 'gray' },
          ],
          caption: 'Side $a$ is opposite vertex $A$, side $b$ opposite $B$, side $c$ opposite $C$. "Solving" the triangle means finding all six of these measurements.',
        },
        {
          type: 'p',
          text: 'A triangle has six parts (three angles, three sides). If you know three of them, including at least one side, you can usually find the rest. The cases are named by the order the known parts appear as you walk around the triangle:',
        },
        {
          type: 'table',
          headers: ['Given', 'Meaning', 'Tool'],
          rows: [
            ['AAS', 'two angles and a side not between them', 'Law of Sines'],
            ['ASA', 'two angles and the side between them', 'Law of Sines'],
            ['SSA', 'two sides and an angle not between them', 'Law of Sines — **may give 0, 1 or 2 triangles**'],
            ['SAS', 'two sides and the angle between them', 'Law of Cosines (next lesson)'],
            ['SSS', 'all three sides', 'Law of Cosines (next lesson)'],
          ],
          caption: 'AAA is missing on purpose: three angles fix the *shape* but not the size, so infinitely many similar triangles fit.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why we need new tools at all',
          text: 'Every trig ratio you know is defined inside a right triangle. The trick of this lesson is to **manufacture** right triangles: drop an altitude from one vertex, and the oblique triangle splits into two right triangles where SOH CAH TOA applies. The Law of Sines is what falls out when you do that once and for all.',
        },
      ],
    },
    {
      kind: 'mcq',
      prompt: 'Which kind of given information can lead to **two different** valid triangles?',
      options: [
        { text: 'SSS — three sides', why: 'Three side lengths that satisfy the triangle inequality determine exactly one triangle (that is the SSS congruence rule from geometry).' },
        { text: 'ASA — two angles and the included side', why: 'Two angles fix the third, and the included side fixes the size: exactly one triangle.' },
        { text: 'SSA — two sides and a non-included angle', correct: true, why: 'Right. The side opposite the known angle can "swing" and hit the base in two places. This is the famous ambiguous case.' },
        { text: 'SAS — two sides and the included angle', why: 'The angle between two known sides pins the third vertex down completely: exactly one triangle.' },
      ],
      explanation: 'SSS, SAS, ASA and AAS are exactly the congruence rules from geometry, so each determines a unique triangle. SSA is not a congruence rule, because the given angle is not between the two given sides. Depending on the lengths, SSA data can describe no triangle, one triangle, or two different triangles.',
    },
    {
      kind: 'concept',
      title: 'Proving the Law of Sines',
      blocks: [
        {
          type: 'p',
          text: 'Drop the altitude $h$ from vertex $C$ straight down to the line through $A$ and $B$. It splits the triangle into two right triangles that share the side $h$. Now describe $h$ twice — once from each right triangle — and set the two descriptions equal.',
        },
        {
          type: 'derivation',
          title: 'The Law of Sines from one altitude',
          steps: [
            { tex: '\\sin A = \\frac{h}{b}', why: 'In the left right triangle, $h$ is opposite angle $A$ and $b$ is the hypotenuse: SOH.' },
            { tex: 'h = b\\sin A', why: 'Multiply both sides by $b$.' },
            { tex: '\\sin B = \\frac{h}{a} \\implies h = a\\sin B', why: 'Same idea in the right triangle on the other side: $h$ is opposite $B$ and the hypotenuse is $a$.' },
            { tex: 'a\\sin B = b\\sin A', why: 'Both expressions equal the same length $h$, so they equal each other.' },
            { tex: '\\frac{a}{\\sin A} = \\frac{b}{\\sin B}', why: 'Divide both sides by $\\sin A \\sin B$ (nonzero, since triangle angles lie strictly between $0^\\circ$ and $180^\\circ$).' },
          ],
          result: 'Dropping the altitude from $A$ instead gives $\\frac{b}{\\sin B} = \\frac{c}{\\sin C}$ the same way, which completes the law.',
        },
        {
          type: 'theorem',
          name: 'Law of Sines',
          tex: '\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C}',
          text: 'In any triangle, each side divided by the sine of its opposite angle gives the same number. (Equivalently, $\\frac{\\sin A}{a} = \\frac{\\sin B}{b} = \\frac{\\sin C}{c}$ — handy when you are solving for an angle.)',
        },
        {
          type: 'graph',
          x: [-3, 9],
          y: [-1, 6],
          equal: true,
          segments: [
            { from: [0, 0], to: [6, 0], color: 'blue', label: 'c' },
            { from: [6, 0], to: ['u', 'v'], color: 'red', label: 'a' },
            { from: ['u', 'v'], to: [0, 0], color: 'green', label: 'b' },
            { from: ['u', 'v'], to: ['u', 0], color: 'gray', dashed: true, label: 'h' },
            { from: [-3, 0], to: [9, 0], color: 'gray', dashed: true },
          ],
          points: [
            { x: 0, y: 0, label: 'A', color: 'gray' },
            { x: 6, y: 0, label: 'B', color: 'gray' },
            { x: 'u', y: 'v', label: 'C', color: 'gray' },
          ],
          sliders: [
            { name: 'u', min: -2, max: 8, step: 0.1, value: 2, label: '$C$ horizontal' },
            { name: 'v', min: 0.5, max: 5, step: 0.1, value: 3.5, label: '$C$ height' },
          ],
          readouts: [
            { label: '$a / \\sin A =$', expr: 'sqrt((u-6)^2 + v^2)/sin(atan2(v, u))', digits: 4 },
            { label: '$b / \\sin B =$', expr: 'sqrt(u^2 + v^2)/sin(atan2(v, 6 - u))', digits: 4 },
            { label: '$c / \\sin C =$', expr: '6/sin(pi - atan2(v, u) - atan2(v, 6 - u))', digits: 4 },
          ],
          caption: 'Drag vertex $C$ anywhere — even past $A$ or $B$ so an angle turns obtuse and the altitude lands outside. The three ratios always agree.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why it still works when the triangle is obtuse',
          text: 'If angle $B$ is obtuse, the altitude from $C$ lands *outside* the triangle, past $B$. The right triangle on that side then contains the angle $180^\\circ - B$, so you get $h = a\\sin(180^\\circ - B)$. But $\\sin(180^\\circ - B) = \\sin B$ — supplementary angles have the same sine (their unit-circle points are mirror images across the $y$-axis, at the same height). So the formula is unchanged.',
        },
        {
          type: 'deepdive',
          title: 'What is the common ratio, geometrically?',
          blocks: [
            {
              type: 'p',
              text: 'The common value $\\frac{a}{\\sin A}$ has a beautiful meaning: it is the **diameter** of the circle that passes through all three vertices (the circumscribed circle). So $\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C} = 2R$, where $R$ is the circumradius.',
            },
            {
              type: 'p',
              text: 'Sketch of why: draw the diameter from $B$ through the center, ending at a point $D$ on the circle. Angle $BDC$ subtends the same arc as $A$, so it equals $A$ (inscribed angle theorem), and triangle $BDC$ has a right angle at $C$ (an angle inscribed in a semicircle). In that right triangle, $\\sin A = \\frac{a}{2R}$.',
            },
          ],
        },
      ],
    },
    {
      kind: 'fill',
      prompt: 'Complete the Law of Sines.',
      template: 'In $\\dfrac{a}{\\sin A} = \\dfrac{b}{\\square} = \\dfrac{\\triangle}{\\sin C}$, the box $\\square$ is ___ and the triangle $\\triangle$ is ___.',
      blanks: [{ answers: ['$\\sin B$'] }, { answers: ['$c$'] }],
      wordBank: ['$\\sin B$', '$c$', '$\\cos B$', '$b$', '$\\sin C$', '$a$'],
      explanation: 'Each side is paired with the sine of the angle **opposite** it: $\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C}$. Cosine never appears — the proof only used "opposite over hypotenuse" in the two right triangles made by the altitude.',
    },
    {
      kind: 'concept',
      title: 'Solving AAS and ASA triangles',
      blocks: [
        {
          type: 'p',
          text: 'When you know two angles, you really know all three: the angles of a triangle add to $180^\\circ$. Then any known side gives you a complete pair (side + opposite angle), which unlocks the common ratio, and every other side follows from it.',
        },
        {
          type: 'steps',
          items: [
            { title: 'Third angle', text: 'Find the missing angle from $A + B + C = 180^\\circ$.' },
            { title: 'Common ratio', text: 'Use the known side and its opposite angle to compute $k = \\frac{\\text{side}}{\\sin(\\text{opposite angle})}$.' },
            { title: 'Remaining sides', text: 'Each unknown side is $k \\cdot \\sin(\\text{its opposite angle})$.' },
            { title: 'Sanity check', text: 'The longest side must be opposite the largest angle, and the shortest side opposite the smallest angle.' },
          ],
        },
        {
          type: 'derivation',
          title: 'Solve the triangle with $A = 40^\\circ$, $B = 60^\\circ$, $a = 10$ (AAS)',
          steps: [
            { tex: 'C = 180^\\circ - 40^\\circ - 60^\\circ = 80^\\circ', why: 'Angles in a triangle sum to $180^\\circ$.' },
            { tex: '\\frac{b}{\\sin 60^\\circ} = \\frac{10}{\\sin 40^\\circ}', why: 'Pair the unknown side $b$ with its opposite angle, and the known pair $a = 10$, $A = 40^\\circ$.' },
            { tex: 'b = \\frac{10\\sin 60^\\circ}{\\sin 40^\\circ} \\approx \\frac{10(0.8660)}{0.6428} \\approx 13.47', why: 'Multiply both sides by $\\sin 60^\\circ$. Your calculator must be in **degree** mode.' },
            { tex: 'c = \\frac{10\\sin 80^\\circ}{\\sin 40^\\circ} \\approx \\frac{10(0.9848)}{0.6428} \\approx 15.32', why: 'Same ratio, now with $C = 80^\\circ$. Use the original given data, not the rounded $b$, to avoid compounding rounding error.' },
            { tex: '40^\\circ < 60^\\circ < 80^\\circ \\;\\text{ and }\\; 10 < 13.47 < 15.32', why: 'Sanity check: sides are in the same order as their opposite angles.' },
          ],
          result: 'The triangle has $C = 80^\\circ$, $b \\approx 13.47$, $c \\approx 15.32$.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Degrees vs radians',
          text: 'The most common wrong answer here comes from a calculator in radian mode: $\\sin 40$ in radians is about $0.745$, not $0.643$. In code it is the opposite trap: C++\'s `std::sin` always expects **radians**, so convert with `deg * pi / 180` first.',
        },
        {
          type: 'callout',
          variant: 'tip',
          text: 'For ASA (the known side lies *between* the two known angles), nothing changes: find the third angle first, and that third angle is exactly the one opposite your known side.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'In triangle $ABC$, $A = 50^\\circ$, $B = 70^\\circ$ and the side between them is $c = 12$. Find side $a$, to two decimal places.',
      hint: 'First find $C$. Then $\\frac{a}{\\sin A} = \\frac{c}{\\sin C}$.',
      label: '$a \\approx$',
      answer: '12sin(50pi/180)/sin(60pi/180)',
      answerTex: '\\frac{12\\sin 50^\\circ}{\\sin 60^\\circ} \\approx 10.61',
      tolerance: 0.01,
      explanation: 'This is ASA. The third angle is $C = 180^\\circ - 50^\\circ - 70^\\circ = 60^\\circ$, which is the angle opposite the known side $c$. Then $a = \\frac{c \\sin A}{\\sin C} = \\frac{12 \\sin 50^\\circ}{\\sin 60^\\circ} \\approx \\frac{12(0.7660)}{0.8660} \\approx 10.61$. Check: $a$ is opposite the smallest angle ($50^\\circ$), so it should be the shortest side — and indeed $10.61 < 12$.',
    },
    {
      kind: 'concept',
      title: 'The ambiguous case (SSA)',
      blocks: [
        {
          type: 'p',
          text: 'Now suppose you know angle $A$, the side $b$ next to it, and the side $a$ **opposite** it. Picture the side $b$ fixed, ending at $C$, and side $a$ hanging from $C$ like a gate on a hinge. Vertex $B$ must be where the gate touches the base ray from $A$. Depending on the gate\'s length, it may miss, touch, or cross the ray twice — that is the [[ambiguous-case]].',
        },
        {
          type: 'graph',
          x: [-2, 9],
          y: [-1.5, 5],
          equal: true,
          segments: [
            { from: [0, 0], to: [9, 0], color: 'gray' },
            { from: [0, 0], to: ['sqrt(12)', 2], color: 'green', label: 'b = 4' },
            { from: ['sqrt(12)', 2], to: ['sqrt(12)', 0], color: 'gray', dashed: true, label: 'h' },
            { from: ['sqrt(12)', 2], to: ['sqrt(12) + sqrt(max(a^2 - 4, 0))', '2 - min(a, 2)'], color: 'red', label: 'a' },
            { from: ['sqrt(12)', 2], to: ['sqrt(12) - sqrt(max(a^2 - 4, 0))', '2 - min(a, 2)'], color: 'red', dashed: true },
          ],
          parametric: [{ x: 'sqrt(12) + a*cos(t)', y: '2 + a*sin(t)', t: [0, '2pi'], color: 'purple', dashed: true }],
          points: [
            { x: 0, y: 0, label: 'A (30°)', color: 'gray' },
            { x: 'sqrt(12)', y: 2, label: 'C', color: 'gray' },
            { x: 'sqrt(12) + sqrt(a^2 - 4)', y: 0, label: 'B₁', color: 'blue' },
            { x: 'sqrt(12) - sqrt(a^2 - 4)', y: '0*sqrt(sqrt(12) - sqrt(a^2 - 4))', label: 'B₂', color: 'orange' },
          ],
          sliders: [{ name: 'a', min: 1, max: 6, step: 0.1, value: 3, label: 'side $a$' }],
          readouts: [
            { label: 'height $h = b\\sin A =$', expr: '2' },
            { label: '$\\sin B = \\frac{b \\sin A}{a} =$', expr: '2/a', digits: 4 },
          ],
          caption: 'Here $A = 30^\\circ$ and $b = 4$, so $h = 2$. Slide $a$: below $2$ the gate misses (0 triangles); at $2$ it just touches (1 right triangle); between $2$ and $4$ it crosses twice (2 triangles); from $4$ on, the second crossing falls behind $A$ (1 triangle).',
        },
        {
          type: 'p',
          text: 'The critical length is the altitude $h = b\\sin A$ — the shortest distance from $C$ to the base. For an **acute** angle $A$:',
        },
        {
          type: 'table',
          headers: ['Condition', 'Triangles', 'What $\\sin B$ does'],
          rows: [
            ['$a < h$', '0', '$\\sin B > 1$: impossible'],
            ['$a = h$', '1 (right angle at $B$)', '$\\sin B = 1$'],
            ['$h < a < b$', '2', '$\\sin B < 1$, and both $B$ and $180^\\circ - B$ work'],
            ['$a \\ge b$', '1', 'only the acute $B$ works'],
          ],
          caption: 'If $A$ is **obtuse** (or right), there is no ambiguity: $a \\le b$ gives no triangle and $a > b$ gives exactly one.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why two answers can hide in one equation',
          text: 'Solving the Law of Sines for an angle gives an equation like $\\sin B = 0.8$. On $(0^\\circ, 180^\\circ)$ that has **two** solutions: $B$ and $180^\\circ - B$, because sine cannot tell an angle from its supplement. Your calculator\'s $\\sin^{-1}$ only reports the acute one. Whether the obtuse one is also valid depends on whether it leaves room for angle $C$: you need $A + B < 180^\\circ$.',
        },
      ],
    },
    {
      kind: 'mcq',
      prompt: 'Given $A = 30^\\circ$, $b = 10$ and $a = 6$, how many triangles are possible?',
      hint: 'Compare $a$ with the altitude $h = b\\sin A$ and with $b$.',
      options: [
        { text: 'None', why: 'That would need $a < h$. Here $h = 10\\sin 30^\\circ = 5$, and $a = 6$ is longer than that, so the gate reaches the base.' },
        { text: 'Exactly one', why: 'One triangle happens when $a = h$ or $a \\ge b$. Neither is true: $5 < 6 < 10$.' },
        { text: 'Exactly two', correct: true, why: 'Correct: $h = 5 < a = 6 < b = 10$, so side $a$ crosses the base ray twice.' },
        { text: 'Infinitely many', why: 'Three parts with at least one side never allow infinitely many triangles; that only happens with AAA.' },
      ],
      explanation: 'The altitude is $h = b\\sin A = 10 \\cdot \\frac{1}{2} = 5$. Since $h < a < b$ ($5 < 6 < 10$), we are in the two-triangle case. Algebraically: $\\sin B = \\frac{10 \\sin 30^\\circ}{6} = \\frac{5}{6}$, giving $B \\approx 56.4^\\circ$ or $B \\approx 123.6^\\circ$, and both leave room for a positive angle $C$.',
    },
    {
      kind: 'concept',
      title: 'Solving the ambiguous case completely',
      blocks: [
        {
          type: 'p',
          text: 'You don\'t need to memorise the table if you follow one reliable procedure: solve for $\\sin B$, take the inverse sine, then **always test the supplement**.',
        },
        {
          type: 'derivation',
          title: 'Solve: $A = 30^\\circ$, $a = 6$, $b = 10$',
          steps: [
            { tex: '\\frac{\\sin B}{10} = \\frac{\\sin 30^\\circ}{6}', why: 'Law of Sines in the "sine on top" form, since the unknown is an angle.' },
            { tex: '\\sin B = \\frac{10 \\cdot \\frac12}{6} = \\frac{5}{6} \\approx 0.8333', why: 'Multiply both sides by $10$. Since $\\frac56 \\le 1$, at least one triangle exists.' },
            { tex: 'B_1 = \\sin^{-1}\\!\\left(\\tfrac56\\right) \\approx 56.44^\\circ', why: 'The acute solution, straight from the calculator.' },
            { tex: 'B_2 = 180^\\circ - 56.44^\\circ \\approx 123.56^\\circ', why: 'The supplement has the same sine. Test it: $30^\\circ + 123.56^\\circ = 153.56^\\circ < 180^\\circ$, so it is valid too.' },
            { tex: 'C_1 \\approx 180^\\circ - 30^\\circ - 56.44^\\circ = 93.56^\\circ, \\quad c_1 = \\frac{6\\sin 93.56^\\circ}{\\sin 30^\\circ} \\approx 11.98', why: 'Finish triangle 1 as an ordinary AAS problem.' },
            { tex: 'C_2 \\approx 180^\\circ - 30^\\circ - 123.56^\\circ = 26.44^\\circ, \\quad c_2 = \\frac{6\\sin 26.44^\\circ}{\\sin 30^\\circ} \\approx 5.34', why: 'Finish triangle 2 the same way.' },
          ],
          result: 'Two triangles: ($B \\approx 56.44^\\circ$, $C \\approx 93.56^\\circ$, $c \\approx 11.98$) and ($B \\approx 123.56^\\circ$, $C \\approx 26.44^\\circ$, $c \\approx 5.34$).',
        },
        {
          type: 'p',
          text: 'The no-triangle case announces itself. With $A = 30^\\circ$, $b = 10$ and $a = 4$ you get $\\sin B = \\frac{10 \\cdot 0.5}{4} = 1.25$. No angle has a sine greater than $1$, so no triangle exists — the gate is too short to reach the ground.',
        },
        {
          type: 'compare',
          left: {
            title: 'Incomplete',
            tone: 'bad',
            tex: ['\\sin B = 0.8333', 'B \\approx 56.44^\\circ \\quad\\text{(done?)}'],
            text: 'Trusting the calculator\'s single answer silently loses the second triangle.',
          },
          right: {
            title: 'Complete',
            tone: 'good',
            tex: ['B \\approx 56.44^\\circ \\;\\text{or}\\; 123.56^\\circ', 'A + B_2 = 153.56^\\circ < 180^\\circ \\;\\checkmark'],
            text: 'Always test $180^\\circ - B$; keep it only if it leaves a positive third angle.',
          },
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'SSA problems are a favourite on exams precisely because the second triangle is easy to miss. Instructors usually ask "find all triangles" or "how many triangles". Show the supplement test explicitly, even when it fails — that line is often worth points.',
        },
      ],
    },
    {
      kind: 'error',
      prompt: 'A student is told $A = 40^\\circ$, $a = 8$, $b = 12$ and asked to find all possible values of $B$. Tap the first incorrect line.',
      lines: [
        '$\\dfrac{\\sin B}{12} = \\dfrac{\\sin 40^\\circ}{8}$',
        '$\\sin B = \\dfrac{12\\sin 40^\\circ}{8} \\approx 0.9642$',
        '$B \\approx 74.62^\\circ$, and this is the only possibility',
        '$C \\approx 180^\\circ - 40^\\circ - 74.62^\\circ = 65.38^\\circ$',
      ],
      errorLines: [3],
      explanation: 'Line 3 forgets the supplement. $\\sin B \\approx 0.9642$ is also satisfied by $B \\approx 180^\\circ - 74.62^\\circ = 105.38^\\circ$, and $40^\\circ + 105.38^\\circ = 145.38^\\circ < 180^\\circ$, so that triangle is valid too (with $C \\approx 34.62^\\circ$). The table agrees: $h = 12\\sin 40^\\circ \\approx 7.71 < a = 8 < b = 12$, the two-triangle case.',
    },
    {
      kind: 'numeric',
      prompt: 'In triangle $ABC$, $A = 42^\\circ$, $a = 15$ and $b = 18$. Find **every** possible value of angle $B$ in degrees, rounded to one decimal place. Separate multiple answers with commas.',
      hint: 'Find $\\sin B$, take $\\sin^{-1}$, then test whether $180^\\circ - B$ also leaves room for $C$.',
      label: '$B \\approx$',
      unit: '°',
      answer: ['arcsin(18sin(42pi/180)/15)*180/pi', '180 - arcsin(18sin(42pi/180)/15)*180/pi'],
      answerTex: 'B \\approx 53.4^\\circ \\text{ or } 126.6^\\circ',
      tolerance: 0.1,
      explanation: '$\\sin B = \\frac{18 \\sin 42^\\circ}{15} \\approx \\frac{18(0.6691)}{15} \\approx 0.8030$, so $B_1 = \\sin^{-1}(0.8030) \\approx 53.4^\\circ$. The supplement $B_2 \\approx 126.6^\\circ$ also works because $42^\\circ + 126.6^\\circ = 168.6^\\circ < 180^\\circ$. Cross-check with the table: $h = 18\\sin 42^\\circ \\approx 12.04 < 15 < 18$, so two triangles exist.',
    },
    {
      kind: 'concept',
      title: 'Triangulation: measuring what you can\'t reach',
      blocks: [
        {
          type: 'p',
          text: 'The Law of Sines is how surveyors, sailors and phone networks measure distances they cannot walk. Measure one baseline carefully, measure two angles from its ends toward a far-off target, and the triangle is fixed (ASA). This is **triangulation**.',
        },
        {
          type: 'derivation',
          title: 'Two fire towers $2$ km apart spot smoke at angles $52^\\circ$ (tower $A$) and $61^\\circ$ (tower $B$) from the baseline. How far is the fire from tower $A$?',
          steps: [
            { tex: 'F = 180^\\circ - 52^\\circ - 61^\\circ = 67^\\circ', why: 'The angle at the fire completes the triangle.' },
            { tex: '\\frac{AF}{\\sin 61^\\circ} = \\frac{2}{\\sin 67^\\circ}', why: 'Side $AF$ is opposite the angle at tower $B$; the baseline ($2$ km) is opposite the angle at the fire.' },
            { tex: 'AF = \\frac{2 \\sin 61^\\circ}{\\sin 67^\\circ} \\approx \\frac{2(0.8746)}{0.9205} \\approx 1.90 \\text{ km}', why: 'Multiply both sides by $\\sin 61^\\circ$.' },
          ],
          result: 'The fire is about $1.90$ km from tower $A$ (and, by the same ratio, $\\frac{2\\sin 52^\\circ}{\\sin 67^\\circ} \\approx 1.71$ km from tower $B$).',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Triangulation in games and code',
          text: 'Game AI uses the same reasoning to locate a sound from two "ears", and robotics and GPS-free positioning do it with beacons. In code, keep the common ratio $k = \\frac{\\text{side}}{\\sin(\\text{angle})}$ in a variable and reuse it — and convert degrees to radians before calling `std::sin`.',
        },
        {
          type: 'code',
          title: 'triangulate.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdio>

int main() {
    const double PI = std::acos(-1.0);
    const double deg = PI / 180.0;           // degrees -> radians
    double baseline = 2.0;                   // km between the towers
    double A = 52.0, B = 61.0;               // angles measured at each tower
    double C = 180.0 - A - B;                // angle at the fire
    double k = baseline / std::sin(C * deg); // common ratio side / sin(opposite)
    std::printf("C = %.1f degrees\\n", C);
    std::printf("distance from A = %.3f km\\n", k * std::sin(B * deg));
    std::printf("distance from B = %.3f km\\n", k * std::sin(A * deg));
}`,
          output: `C = 67.0 degrees
distance from A = 1.900 km
distance from B = 1.712 km`,
          annotations: [
            { lines: 5, text: '$\\arccos(-1) = \\pi$: a portable way to get $\\pi$ to full double precision.' },
            { lines: 10, text: 'The baseline is opposite the angle at the fire, so it gives the common ratio of the Law of Sines.' },
            { lines: '12-13', text: 'Each distance is $k$ times the sine of the angle **opposite** it — note the swap of $A$ and $B$.' },
          ],
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'Two observers $P$ and $Q$ stand $5$ km apart. Each measures the angle between the baseline $PQ$ and the line of sight to a weather balloon: $48^\\circ$ at $P$ and $73^\\circ$ at $Q$. How far is the balloon from observer $Q$? Round to two decimal places.',
      hint: 'The distance from $Q$ is the side opposite the angle at $P$.',
      label: 'distance $\\approx$',
      unit: 'km',
      answer: '5sin(48pi/180)/sin(59pi/180)',
      answerTex: '\\frac{5 \\sin 48^\\circ}{\\sin 59^\\circ} \\approx 4.33',
      tolerance: 0.01,
      explanation: 'The angle at the balloon is $180^\\circ - 48^\\circ - 73^\\circ = 59^\\circ$, and it is opposite the $5$ km baseline. The side from $Q$ to the balloon is opposite the $48^\\circ$ angle at $P$, so it equals $\\frac{5 \\sin 48^\\circ}{\\sin 59^\\circ} \\approx \\frac{5(0.7431)}{0.8572} \\approx 4.33$ km. (Using $\\sin 73^\\circ$ instead gives $5.58$ km — that is the distance from $P$.)',
    },
    {
      kind: 'truefalse',
      prompt: 'In a triangle, if $\\sin B = \\frac{1}{2}$, then $B$ must equal $30^\\circ$.',
      answer: false,
      explanation: 'On $(0^\\circ, 180^\\circ)$, $\\sin B = \\frac12$ has two solutions: $30^\\circ$ and $150^\\circ$. Both are legal triangle angles. Which one (or both) applies depends on the other given parts — this is exactly the ambiguity behind the SSA case.',
    },
  ],
  takeaways: [
    'Label angles $A, B, C$ and the sides opposite them $a, b, c$; the Law of Sines pairs each side with its opposite angle.',
    'Law of Sines: $\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C}$, proved by writing the altitude $h$ two ways.',
    'AAS and ASA always give exactly one triangle: find the third angle, compute the common ratio, then the sides.',
    'SSA is ambiguous: $\\sin B > 1$ means no triangle; otherwise test both $B$ and $180^\\circ - B$, keeping each that leaves $A + B < 180^\\circ$.',
    'SAS and SSS cannot be started with the Law of Sines — they need the Law of Cosines.',
  ],
  reading: [
    {
      title: 'OpenStax Algebra and Trigonometry 2e — 10.1 Non-right Triangles: Law of Sines',
      url: 'https://openstax.org/books/algebra-and-trigonometry-2e/pages/10-1-non-right-triangles-law-of-sines',
      source: 'openstax',
      note: 'More worked AAS, ASA and ambiguous-case examples, plus area problems.',
    },
    {
      title: 'Khan Academy — Trigonometry',
      url: 'https://www.khanacademy.org/math/trigonometry',
      source: 'khan',
      note: 'The "Non-right triangles & trigonometry" unit has short videos and practice sets on the Law of Sines.',
    },
    {
      title: 'Wikipedia — Law of sines',
      url: 'https://en.wikipedia.org/wiki/Law_of_sines',
      source: 'wikipedia',
      note: 'Covers the circumcircle interpretation $2R$ and a careful treatment of the ambiguous case.',
    },
  ],
};
