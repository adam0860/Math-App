import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'trig-law-of-cosines',
  title: 'The Law of Cosines and Triangle Area',
  summary: 'The Pythagorean theorem for every triangle: solve SAS and SSS triangles, then find area with $\\frac12 ab\\sin C$ and Heron\'s formula.',
  minutes: 18,
  objectives: [
    'State the Law of Cosines and prove it with coordinates',
    'Solve SAS and SSS triangles, choosing the order of steps to avoid ambiguity',
    'Recognise side lengths that cannot form a triangle',
    'Find a triangle\'s area from two sides and the included angle, or from three sides with Heron\'s formula',
  ],
  steps: [
    {
      kind: 'concept',
      title: 'When the Law of Sines gets stuck',
      blocks: [
        {
          type: 'p',
          text: 'The Law of Sines needs one complete pair: a side together with its opposite angle. With **SAS** (two sides and the angle between them) or **SSS** (three sides), you have no such pair, and every ratio $\\frac{a}{\\sin A}$ contains two unknowns. You need a different relationship — one that ties all three sides to a single angle.',
        },
        {
          type: 'p',
          text: 'That relationship is the [[law-of-cosines]]. Think of it as the Pythagorean theorem with a correction term for angles that are not $90^\\circ$.',
        },
        {
          type: 'theorem',
          name: 'Law of Cosines',
          tex: 'c^2 = a^2 + b^2 - 2ab\\cos C',
          text: 'Here $C$ is the angle **between** sides $a$ and $b$, and $c$ is the side opposite it. The same law holds for every vertex: $a^2 = b^2 + c^2 - 2bc\\cos A$ and $b^2 = a^2 + c^2 - 2ac\\cos B$.',
        },
        {
          type: 'graph',
          x: [-5, 6],
          y: [-1, 5],
          equal: true,
          segments: [
            { from: [0, 0], to: [5, 0], color: 'red', label: 'a = 5' },
            { from: [0, 0], to: ['4cos(g*pi/180)', '4sin(g*pi/180)'], color: 'green', label: 'b = 4' },
            { from: [5, 0], to: ['4cos(g*pi/180)', '4sin(g*pi/180)'], color: 'blue', label: 'c' },
          ],
          parametric: [{ x: '0.8cos(t)', y: '0.8sin(t)', t: [0, 'g*pi/180'], color: 'orange' }],
          points: [
            { x: 0, y: 0, label: 'C', color: 'gray' },
            { x: 5, y: 0, label: 'B', color: 'gray' },
            { x: '4cos(g*pi/180)', y: '4sin(g*pi/180)', label: 'A', color: 'gray' },
          ],
          sliders: [{ name: 'g', min: 10, max: 170, step: 1, value: 60, label: 'angle $C$ (degrees)' }],
          readouts: [
            { label: '$c^2$ measured $=$', expr: '(4cos(g*pi/180) - 5)^2 + (4sin(g*pi/180))^2', digits: 3 },
            { label: '$a^2 + b^2 - 2ab\\cos C = 41 - 40\\cos C =$', expr: '41 - 40cos(g*pi/180)', digits: 3 },
            { label: 'Pythagoras alone, $a^2 + b^2 =$', expr: '41' },
          ],
          caption: 'Swing angle $C$. At $90^\\circ$ the correction term vanishes and $c^2 = 41$. Below $90^\\circ$, $c$ is *shorter* than Pythagoras predicts; above $90^\\circ$, it is *longer*.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the correction term has that sign',
          text: 'Close the angle $C$ and the side $c$ across from it shrinks; open it up and $c$ grows. The term $-2ab\\cos C$ does exactly that: $\\cos C > 0$ for acute angles (subtract, so $c^2 < a^2 + b^2$), $\\cos C = 0$ at $90^\\circ$ (plain Pythagoras), and $\\cos C < 0$ for obtuse angles (subtracting a negative adds, so $c^2 > a^2 + b^2$).',
        },
      ],
    },
    {
      kind: 'truefalse',
      prompt: 'If angle $C$ of a triangle is obtuse, then $c^2 > a^2 + b^2$.',
      answer: true,
      explanation: 'For $90^\\circ < C < 180^\\circ$, $\\cos C < 0$, so $-2ab\\cos C$ is **positive** and $c^2 = a^2 + b^2 - 2ab\\cos C$ exceeds $a^2 + b^2$. The converse holds too, which gives a quick test: compare the square of the longest side with the sum of the squares of the other two to tell whether a triangle is acute, right or obtuse.',
    },
    {
      kind: 'concept',
      title: 'Proof: put the triangle on coordinates',
      blocks: [
        {
          type: 'p',
          text: 'Place vertex $C$ at the origin and side $a$ along the positive $x$-axis, so $B = (a, 0)$. Vertex $A$ is at distance $b$ from the origin, in the direction of angle $C$ — so by the unit-circle definitions of sine and cosine, $A = (b\\cos C,\\, b\\sin C)$. Then $c$ is just the distance from $A$ to $B$.',
        },
        {
          type: 'derivation',
          title: 'Deriving $c^2 = a^2 + b^2 - 2ab\\cos C$',
          steps: [
            { tex: 'c^2 = (b\\cos C - a)^2 + (b\\sin C - 0)^2', why: 'The [[distance-formula]] between $A = (b\\cos C, b\\sin C)$ and $B = (a, 0)$, squared.' },
            { tex: '= b^2\\cos^2 C - 2ab\\cos C + a^2 + b^2\\sin^2 C', why: 'Expand $(b\\cos C - a)^2$ — keep the middle term $-2ab\\cos C$.' },
            { tex: '= b^2(\\cos^2 C + \\sin^2 C) + a^2 - 2ab\\cos C', why: 'Group the two terms that contain $b^2$ and factor it out.' },
            { tex: '= a^2 + b^2 - 2ab\\cos C', why: 'Pythagorean identity: $\\cos^2 C + \\sin^2 C = 1$.' },
          ],
          result: 'Nothing in the argument assumed $C$ was acute: for an obtuse $C$, $b\\cos C$ is negative and vertex $A$ simply sits left of the origin. One proof covers every triangle.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'A preview of the dot product',
          text: 'In the vectors lesson you will meet the dot product, $\\vec u \\cdot \\vec v = \\|\\vec u\\|\\|\\vec v\\|\\cos\\theta$. Its proof is this exact computation. Game engines use it constantly — to find the angle between a character\'s facing direction and an enemy, or how directly light hits a surface — so the Law of Cosines is quietly running in every frame of a 3D game.',
        },
      ],
    },
    {
      kind: 'fill',
      prompt: 'Complete the two forms of the Law of Cosines.',
      template: 'For side $a$: $a^2 = b^2 + c^2 - 2bc\\cos$ ___. Solved for an angle: $\\cos B = \\dfrac{a^2 + c^2 - b^2}{\\blacksquare}$ where $\\blacksquare$ is ___.',
      blanks: [{ answers: ['$A$'] }, { answers: ['$2ac$'] }],
      wordBank: ['$A$', '$B$', '$C$', '$2ac$', '$2ab$', '$2bc$'],
      explanation: 'The angle in the formula is always the one **opposite** the side on the left (and between the other two sides): $a^2$ goes with $\\cos A$. To solve for an angle, isolate the cosine: from $b^2 = a^2 + c^2 - 2ac\\cos B$ you get $\\cos B = \\frac{a^2 + c^2 - b^2}{2ac}$ — the two sides *adjacent* to $B$ appear in the denominator.',
    },
    {
      kind: 'concept',
      title: 'Solving SAS triangles',
      blocks: [
        {
          type: 'p',
          text: 'With two sides and the included angle, the Law of Cosines gives the third side immediately. After that you know all three sides, and the remaining angles follow. The only subtlety is how you find the second angle.',
        },
        {
          type: 'derivation',
          title: 'Solve the triangle with $a = 8$, $b = 11$, $C = 37^\\circ$',
          steps: [
            { tex: 'c^2 = 8^2 + 11^2 - 2(8)(11)\\cos 37^\\circ', why: 'Law of Cosines with the included angle $C$.' },
            { tex: '= 185 - 176\\cos 37^\\circ \\approx 185 - 140.56 = 44.44', why: 'Compute $176\\cos 37^\\circ$ **before** subtracting (order of operations).' },
            { tex: 'c \\approx \\sqrt{44.44} \\approx 6.67', why: 'Take the positive square root: a length.' },
            { tex: '\\cos A = \\frac{b^2 + c^2 - a^2}{2bc} \\approx \\frac{121 + 44.44 - 64}{2(11)(6.666)} \\approx 0.6917', why: 'Solve the Law of Cosines for $A$, using the unrounded $c^2$.' },
            { tex: 'A \\approx \\cos^{-1}(0.6917) \\approx 46.24^\\circ', why: '$\\cos^{-1}$ returns angles in $[0^\\circ, 180^\\circ]$ — exactly the range of triangle angles — so this is unambiguous.' },
            { tex: 'B \\approx 180^\\circ - 37^\\circ - 46.24^\\circ = 96.76^\\circ', why: 'The angles sum to $180^\\circ$.' },
          ],
          result: '$c \\approx 6.67$, $A \\approx 46.24^\\circ$, $B \\approx 96.76^\\circ$. Notice $B$ is obtuse.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'The Law of Sines trap',
          text: 'Suppose you found $B$ with the Law of Sines instead: $\\sin B = \\frac{11 \\sin 37^\\circ}{6.666} \\approx 0.9931$, and $\\sin^{-1}$ reports $B \\approx 83.24^\\circ$ — **wrong**, the true angle is its supplement $96.76^\\circ$. If you use the Law of Sines after the Law of Cosines, use it on the angle opposite the **shorter** of the two remaining sides; that angle can never be obtuse (a triangle has at most one obtuse angle, and it sits opposite the longest side).',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why cosine is the safer inverse',
          text: 'On $(0^\\circ, 180^\\circ)$, every value of $\\cos$ comes from exactly **one** angle (cosine is decreasing there), while every positive value of $\\sin$ comes from two. So $\\cos^{-1}$ never hides a second answer. That is why SAS and SSS — which only ever use $\\cos^{-1}$ — are never ambiguous.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'In triangle $ABC$, $b = 5$, $c = 7$ and the angle between them is $A = 120^\\circ$. Find side $a$ exactly (or to two decimal places).',
      hint: '$\\cos 120^\\circ = -\\frac12$. Watch the double negative.',
      label: '$a =$',
      answer: 'sqrt(109)',
      answerTex: '\\sqrt{109} \\approx 10.44',
      explanation: '$a^2 = b^2 + c^2 - 2bc\\cos A = 25 + 49 - 2(5)(7)\\left(-\\frac12\\right) = 74 + 35 = 109$, so $a = \\sqrt{109} \\approx 10.44$. Because $A$ is obtuse, the correction term *adds* $35$; the answer is longer than the Pythagorean $\\sqrt{74} \\approx 8.60$, as it must be for the side opposite an obtuse angle.',
    },
    {
      kind: 'error',
      prompt: 'A student finds side $c$ when $a = 6$, $b = 9$, $C = 50^\\circ$. Tap the first incorrect line.',
      lines: [
        '$c^2 = 6^2 + 9^2 - 2(6)(9)\\cos 50^\\circ$',
        '$c^2 = 117 - 108\\cos 50^\\circ$',
        '$c^2 = 9\\cos 50^\\circ \\approx 5.79$',
        '$c \\approx 2.41$',
      ],
      errorLines: [3],
      explanation: 'Line 3 subtracts $117 - 108$ before multiplying, treating the expression as $(117 - 108)\\cos 50^\\circ$. Multiplication comes first: $108\\cos 50^\\circ \\approx 69.42$, so $c^2 \\approx 117 - 69.42 = 47.58$ and $c \\approx 6.90$. A sanity check would have caught it: with sides $6$ and $9$ around a $50^\\circ$ angle, a third side of $2.41$ is far too short.',
    },
    {
      kind: 'concept',
      title: 'Solving SSS triangles',
      blocks: [
        {
          type: 'p',
          text: 'Given three sides, solve the Law of Cosines for each angle: $\\cos C = \\frac{a^2 + b^2 - c^2}{2ab}$, and similarly for the others. Good habit: find the **largest** angle first (opposite the longest side). If it is obtuse, you know it now; the other two are then guaranteed acute, so even the Law of Sines is safe for them.',
        },
        {
          type: 'derivation',
          title: 'Solve the triangle with $a = 5$, $b = 7$, $c = 8$',
          steps: [
            { tex: '\\cos C = \\frac{5^2 + 7^2 - 8^2}{2(5)(7)} = \\frac{10}{70} = \\frac17', why: 'Largest side is $c = 8$, so start with $C$.' },
            { tex: 'C = \\cos^{-1}\\!\\left(\\tfrac17\\right) \\approx 81.79^\\circ', why: 'Positive cosine, so $C$ is acute — and therefore so is the whole triangle.' },
            { tex: '\\cos B = \\frac{5^2 + 8^2 - 7^2}{2(5)(8)} = \\frac{40}{80} = \\frac12', why: 'Same formula, centred on $B$: the sides adjacent to $B$ are $a$ and $c$.' },
            { tex: 'B = 60^\\circ', why: 'An exact special angle — the $5$–$7$–$8$ triangle is a classic.' },
            { tex: 'A \\approx 180^\\circ - 81.79^\\circ - 60^\\circ = 38.21^\\circ', why: 'Angle sum. (Check: $\\cos^{-1}\\frac{11}{14} \\approx 38.21^\\circ$ agrees.)' },
          ],
          result: '$A \\approx 38.21^\\circ$, $B = 60^\\circ$, $C \\approx 81.79^\\circ$.',
        },
        {
          type: 'p',
          text: '**When there is no triangle.** If the three lengths break the triangle inequality (one side at least as long as the other two combined), the formula gives a "cosine" outside $[-1, 1]$ — the algebra\'s way of saying the sides cannot meet.',
        },
        {
          type: 'callout',
          variant: 'tip',
          text: 'Before computing, check that the longest side is shorter than the sum of the other two. It takes two seconds and saves you from chasing an error message from $\\cos^{-1}$.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'A triangle has sides $3$, $5$ and $7$. Find its largest angle in degrees.',
      hint: 'The largest angle is opposite the side of length $7$.',
      label: 'angle $=$',
      unit: '°',
      answer: '120',
      explanation: 'With $c = 7$: $\\cos C = \\frac{3^2 + 5^2 - 7^2}{2(3)(5)} = \\frac{9 + 25 - 49}{30} = \\frac{-15}{30} = -\\frac12$, so $C = \\cos^{-1}\\left(-\\frac12\\right) = 120^\\circ$. The negative cosine immediately tells you the angle is obtuse — something the Law of Sines could never reveal.',
    },
    {
      kind: 'mcq',
      prompt: 'You try to solve the triangle with sides $4$, $6$ and $11$. What happens?',
      options: [
        { text: 'You get one obtuse triangle with largest angle about $150^\\circ$', why: 'There is no such triangle. The computed cosine is $-1.4375$, and no angle has that cosine.' },
        { text: 'The Law of Cosines gives $\\cos C < -1$: no triangle exists', correct: true, why: 'Right. $\\cos C = \\frac{16 + 36 - 121}{48} = -\\frac{69}{48} \\approx -1.44$, which is impossible.' },
        { text: 'There are two triangles, as in the ambiguous case', why: 'Three sides never give two different triangles (SSS congruence). The issue here is that there are none.' },
        { text: 'You must use the Law of Sines instead', why: 'With SSS there is no known angle, so the Law of Sines cannot even start — and it would not rescue impossible data.' },
      ],
      explanation: 'The triangle inequality fails: $4 + 6 = 10 < 11$, so the two short sides cannot reach each other across the long one. The Law of Cosines detects this automatically: $\\cos C = \\frac{4^2 + 6^2 - 11^2}{2(4)(6)} = \\frac{-69}{48}$, outside $[-1, 1]$.',
    },
    {
      kind: 'concept',
      title: 'Area from two sides and the included angle',
      blocks: [
        {
          type: 'p',
          text: 'You know area $= \\frac12 \\cdot \\text{base} \\cdot \\text{height}$. In an oblique triangle you rarely know the height — but trig gives it to you from an angle, exactly as in the proof of the Law of Sines.',
        },
        {
          type: 'derivation',
          title: 'Area $= \\frac12 ab\\sin C$',
          steps: [
            { tex: '\\text{Area} = \\tfrac12 \\cdot a \\cdot h', why: 'Take side $a$ as the base; $h$ is the altitude from vertex $A$ to the line containing $a$.' },
            { tex: 'h = b\\sin C', why: 'In the right triangle formed by the altitude, $h$ is opposite angle $C$ and $b$ is the hypotenuse. (If $C$ is obtuse, use $\\sin(180^\\circ - C) = \\sin C$.)' },
            { tex: '\\text{Area} = \\tfrac12 ab\\sin C', why: 'Substitute for $h$.' },
          ],
          result: 'Half the product of two sides times the sine of the angle **between** them. By symmetry, also $\\frac12 bc\\sin A$ and $\\frac12 ac\\sin B$.',
        },
        {
          type: 'graph',
          x: [-5, 6],
          y: [-1, 5],
          equal: true,
          segments: [
            { from: [0, 0], to: [5, 0], color: 'red', label: 'a = 5' },
            { from: [0, 0], to: ['4cos(g*pi/180)', '4sin(g*pi/180)'], color: 'green', label: 'b = 4' },
            { from: [5, 0], to: ['4cos(g*pi/180)', '4sin(g*pi/180)'], color: 'blue' },
            { from: ['4cos(g*pi/180)', '4sin(g*pi/180)'], to: ['4cos(g*pi/180)', 0], color: 'gray', dashed: true, label: 'h' },
          ],
          points: [
            { x: 0, y: 0, label: 'C', color: 'gray' },
            { x: '4cos(g*pi/180)', y: '4sin(g*pi/180)', label: 'A', color: 'gray' },
          ],
          sliders: [{ name: 'g', min: 5, max: 175, step: 1, value: 40, label: 'angle $C$ (degrees)' }],
          readouts: [
            { label: 'height $h = 4\\sin C =$', expr: '4sin(g*pi/180)', digits: 3 },
            { label: 'area $= \\frac12(5)(4)\\sin C =$', expr: '10sin(g*pi/180)', digits: 3 },
          ],
          caption: 'The area peaks at $C = 90^\\circ$ (where $\\sin C = 1$) and is the same for $C$ and $180^\\circ - C$: same height, same base.',
        },
        {
          type: 'p',
          text: 'Applied to the SAS triangle from before ($a = 8$, $b = 11$, $C = 37^\\circ$): Area $= \\frac12(8)(11)\\sin 37^\\circ \\approx 44(0.6018) \\approx 26.48$ square units.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'Two sides of a triangular garden are $9$ m and $14$ m, and the angle between them is $30^\\circ$. Find the area.',
      label: 'Area $=$',
      unit: 'm²',
      answer: '63/2',
      answerTex: '31.5',
      explanation: 'Area $= \\frac12 ab \\sin C = \\frac12(9)(14)\\sin 30^\\circ = 63 \\cdot \\frac12 = 31.5$ m². The angle must be the one **between** the two given sides; that is what makes the second side\'s "height" equal to $14\\sin 30^\\circ = 7$ above the base of $9$.',
    },
    {
      kind: 'concept',
      title: 'Heron\'s formula: area from three sides',
      blocks: [
        {
          type: 'p',
          text: 'With only the three sides, you could find an angle with the Law of Cosines and then use $\\frac12 ab\\sin C$. [[herons-formula|Heron\'s formula]] does both steps at once, using the **semiperimeter** $s$ (half the perimeter).',
        },
        {
          type: 'theorem',
          name: 'Heron\'s formula',
          tex: '\\text{Area} = \\sqrt{s(s-a)(s-b)(s-c)}, \\qquad s = \\frac{a+b+c}{2}',
        },
        {
          type: 'derivation',
          title: 'Area of the triangle with sides $13$, $14$, $15$',
          steps: [
            { tex: 's = \\frac{13 + 14 + 15}{2} = 21', why: 'Semiperimeter first.' },
            { tex: 's - a = 8, \\quad s - b = 7, \\quad s - c = 6', why: 'Subtract each side from $s$. All three must be positive — otherwise the triangle inequality fails.' },
            { tex: '\\text{Area} = \\sqrt{21 \\cdot 8 \\cdot 7 \\cdot 6} = \\sqrt{7056}', why: 'Multiply the four factors under the root.' },
            { tex: '= 84', why: '$84^2 = 7056$. A rare triangle with integer sides *and* integer area.' },
          ],
          result: 'The $13$–$14$–$15$ triangle has area $84$.',
        },
        {
          type: 'deepdive',
          title: 'Proof of Heron\'s formula from the Law of Cosines',
          blocks: [
            {
              type: 'derivation',
              steps: [
                { tex: '\\text{Area}^2 = \\tfrac14 a^2b^2\\sin^2 C = \\tfrac14 a^2b^2(1 - \\cos^2 C)', why: 'Square the SAS area formula and use $\\sin^2 C = 1 - \\cos^2 C$.' },
                { tex: '= \\tfrac{1}{16}\\left(4a^2b^2 - (a^2 + b^2 - c^2)^2\\right)', why: 'Substitute $2ab\\cos C = a^2 + b^2 - c^2$ (Law of Cosines), so $4a^2b^2\\cos^2 C = (a^2+b^2-c^2)^2$.' },
                { tex: '= \\tfrac{1}{16}\\left(2ab - a^2 - b^2 + c^2\\right)\\left(2ab + a^2 + b^2 - c^2\\right)', why: 'Difference of squares: $X^2 - Y^2 = (X - Y)(X + Y)$ with $X = 2ab$.' },
                { tex: '= \\tfrac{1}{16}\\left(c^2 - (a-b)^2\\right)\\left((a+b)^2 - c^2\\right)', why: 'Recognise $a^2 - 2ab + b^2 = (a-b)^2$ and $a^2 + 2ab + b^2 = (a+b)^2$.' },
                { tex: '= \\tfrac{1}{16}(c - a + b)(c + a - b)(a + b - c)(a + b + c)', why: 'Two more differences of squares.' },
                { tex: '= s(s-a)(s-b)(s-c)', why: 'Each factor is twice one of $s, s-a, s-b, s-c$; e.g. $a + b - c = 2(s - c)$. The four 2s cancel the 16.' },
              ],
              result: 'Take the square root and you have Heron\'s formula.',
            },
          ],
        },
        {
          type: 'callout',
          variant: 'history',
          text: 'Heron of Alexandria wrote the formula down around 60 CE in his *Metrica*, a practical handbook for surveyors; it was likely known to Archimedes earlier.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Triangle area in game code',
          text: 'Meshes are made of triangles, and engines need their areas for things like random point sampling and physics. But with vertex coordinates available, engines use the **cross product** ($\\frac12 |x_1 y_2 - x_2 y_1|$ for edge vectors) instead of Heron: it is cheaper (no square roots) and Heron\'s formula loses floating-point precision on long, thin "needle" triangles, where $s - c$ is a tiny difference of two big numbers.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'Use Heron\'s formula to find the area of the triangle with sides $5$, $6$ and $7$. Give the exact value or round to two decimal places.',
      hint: 'First $s = \\frac{5 + 6 + 7}{2}$.',
      label: 'Area $=$',
      answer: '6sqrt(6)',
      answerTex: '6\\sqrt{6} \\approx 14.70',
      explanation: '$s = 9$, so $s - a = 4$, $s - b = 3$, $s - c = 2$. Then Area $= \\sqrt{9 \\cdot 4 \\cdot 3 \\cdot 2} = \\sqrt{216} = \\sqrt{36 \\cdot 6} = 6\\sqrt6 \\approx 14.70$.',
    },
    {
      kind: 'order',
      prompt: 'Put the steps for completely solving an SAS triangle (given $a$, $b$ and the included angle $C$) in a reliable order.',
      lines: [
        'Find $c$ from $c^2 = a^2 + b^2 - 2ab\\cos C$',
        'Find the angle opposite the shorter of $a$ and $b$ (Law of Cosines, or Law of Sines safely)',
        'Find the last angle from the angle sum $180^\\circ$',
        'Check that the longest side is opposite the largest angle',
      ],
      distractors: ['Find $\\sin A$ from $\\frac{\\sin A}{a} = \\frac{\\sin C}{c}$ before computing $c$'],
      explanation: 'The third side must come first: until you know $c$, there is no complete side–angle pair for the Law of Sines (the distractor uses $c$ before it exists). Next, the angle opposite the shorter given side is guaranteed acute, so no ambiguity can creep in. The angle sum finishes the job, and the size-order check catches arithmetic slips.',
    },
  ],
  takeaways: [
    'Law of Cosines: $c^2 = a^2 + b^2 - 2ab\\cos C$ — Pythagoras plus a correction that shortens $c$ for acute $C$ and lengthens it for obtuse $C$.',
    'Use it to start SAS (find the third side) and SSS (find an angle via $\\cos C = \\frac{a^2 + b^2 - c^2}{2ab}$).',
    '$\\cos^{-1}$ is never ambiguous on triangle angles; if you switch to the Law of Sines, use it on the angle opposite the shorter side.',
    'A computed cosine outside $[-1, 1]$ means the sides violate the triangle inequality — no triangle.',
    'Area $= \\frac12 ab\\sin C$ (two sides and the included angle) or $\\sqrt{s(s-a)(s-b)(s-c)}$ with $s = \\frac{a+b+c}{2}$ (Heron).',
  ],
  reading: [
    {
      title: 'OpenStax Algebra and Trigonometry 2e — 10.2 Non-right Triangles: Law of Cosines',
      url: 'https://openstax.org/books/algebra-and-trigonometry-2e/pages/10-2-non-right-triangles-law-of-cosines',
      source: 'openstax',
      note: 'SAS and SSS examples, navigation applications and Heron\'s formula.',
    },
    {
      title: 'Wikipedia — Law of cosines',
      url: 'https://en.wikipedia.org/wiki/Law_of_cosines',
      source: 'wikipedia',
      note: 'Several different proofs, including the coordinate proof used here and one via the dot product.',
    },
    {
      title: 'Wikipedia — Heron\'s formula',
      url: 'https://en.wikipedia.org/wiki/Heron%27s_formula',
      source: 'wikipedia',
      note: 'History, proofs, and a numerically stable version of the formula for thin triangles.',
    },
  ],
};
