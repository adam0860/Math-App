import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'trig-solving-right-triangles',
  title: 'Solving Right Triangles',
  summary: 'Find every side and angle from just two facts, run the ratios backwards with inverse trig keys, and measure heights you cannot reach.',
  minutes: 19,
  objectives: [
    'Solve a right triangle given one side and one acute angle, or given two sides',
    'Use $\\sin^{-1}$, $\\cos^{-1}$ and $\\tan^{-1}$ to find an acute angle from a ratio of sides',
    'Interpret angles of elevation and depression and draw the right triangle they describe',
    'Solve two-triangle problems by writing two equations for a shared side',
  ],
  steps: [
    // 1 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'What "solving" a triangle means',
      blocks: [
        {
          type: 'p',
          text: 'A triangle has six measurements: three sides and three angles. To **solve** a triangle means to find all six. For a right triangle one angle is already known ($90^\\circ$), and it turns out that **two more facts are enough, as long as at least one of them is a side**: either one side and one acute angle, or two sides.',
        },
        {
          type: 'p',
          text: 'Why must a side be included? Two angles alone fix the *shape* but not the *size*: a $30^\\circ$-$60^\\circ$-$90^\\circ$ triangle could be $1$ cm or $1$ km across. A side sets the scale; trig ratios do the rest.',
        },
        {
          type: 'steps',
          items: [
            { title: 'Missing acute angle', text: 'The acute angles are complementary, so $B = 90^\\circ - A$.' },
            { title: 'Missing side from an angle', text: 'Use the ratio (SOH, CAH or TOA) that connects a known side to the unknown one.' },
            { title: 'Missing side from two sides', text: 'Use the Pythagorean theorem.' },
            { title: 'Missing angle from two sides', text: 'Use an inverse trig ratio (next card).' },
          ],
        },
        {
          type: 'derivation',
          title: 'Solve the right triangle with $C = 90^\\circ$, $A = 32^\\circ$ and hypotenuse $c = 15$',
          steps: [
            { tex: 'B = 90^\\circ - 32^\\circ = 58^\\circ', why: 'The two acute angles of a right triangle add to $90^\\circ$.' },
            { tex: '\\sin 32^\\circ = \\frac{a}{15} \\implies a = 15\\sin 32^\\circ \\approx 7.95', why: 'Side $a$ is opposite $A$, and we know the hypotenuse: SOH. Multiply both sides by $15$.' },
            { tex: '\\cos 32^\\circ = \\frac{b}{15} \\implies b = 15\\cos 32^\\circ \\approx 12.72', why: 'Side $b$ is adjacent to $A$: CAH. Use the **given** hypotenuse, not the rounded $a$, so rounding errors do not pile up.' },
            { tex: '7.95^2 + 12.72^2 \\approx 63.2 + 161.8 = 225 = 15^2 \\ \\checkmark', why: 'Pythagorean check with the rounded values: close enough to confirm nothing went wrong.' },
          ],
          result: '$B = 58^\\circ$, $a \\approx 7.95$, $b \\approx 12.72$.',
        },
        {
          type: 'graph',
          x: [-1, 14.5],
          y: [-1, 9.4],
          equal: true,
          segments: [
            { from: [0, 0], to: [12.72, 0], color: 'blue', label: 'b ≈ 12.72' },
            { from: [12.72, 0], to: [12.72, 7.95], color: 'red', label: 'a ≈ 7.95' },
            { from: [0, 0], to: [12.72, 7.95], color: 'purple', label: 'c = 15' },
            { from: [12.12, 0], to: [12.12, 0.6], color: 'gray' },
            { from: [12.12, 0.6], to: [12.72, 0.6], color: 'gray' },
          ],
          points: [
            { x: 0, y: 0, label: 'A = 32°' },
            { x: 12.72, y: 7.95, label: 'B = 58°' },
            { x: 12.72, y: 0, label: 'C' },
          ],
          caption: 'The solved triangle. Sanity check: the longer leg $b$ is across from the larger acute angle $B$.',
        },
      ],
    },
    // 2 ─────────────────────────────────────────────────────────────
    {
      kind: 'numeric',
      prompt: 'In right triangle $ABC$ with $C = 90^\\circ$, angle $A = 40^\\circ$ and the leg adjacent to $A$ is $b = 8$. Find the opposite leg $a$, rounded to two decimal places.',
      hint: 'You know adjacent and want opposite: TOA.',
      label: '$a \\approx$',
      answer: '8tan(40pi/180)',
      answerTex: '8\\tan 40^\\circ \\approx 6.71',
      tolerance: 0.01,
      explanation: '$\\tan 40^\\circ = \\frac{a}{8}$, so $a = 8\\tan 40^\\circ \\approx 8(0.8391) \\approx 6.71$. Reasonable? $40^\\circ$ is a bit under $45^\\circ$, so the opposite leg should be a bit shorter than the adjacent leg $8$. ✓',
    },
    // 3 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Running the ratios backwards: inverse trig',
      blocks: [
        {
          type: 'p',
          text: 'So far we have gone **angle → ratio**: knowing $\\theta$, a calculator gives $\\tan\\theta$. Often you need the reverse. You can measure two sides (a ramp\'s rise and run, a sprite\'s offset to a target) and want the **angle**. That calls for the inverse trig functions.',
        },
        {
          type: 'definition',
          term: 'Inverse trig ratios (acute angles)',
          text: 'For an acute angle $\\theta$:\n\n$$\\sin\\theta = r \\iff \\theta = \\sin^{-1} r, \\qquad \\cos\\theta = r \\iff \\theta = \\cos^{-1} r, \\qquad \\tan\\theta = r \\iff \\theta = \\tan^{-1} r.$$\n\nRead $\\sin^{-1} r$ as "the angle whose sine is $r$". They are also written $\\arcsin$, $\\arccos$, $\\arctan$ — see [[inverse-sine]], [[inverse-cosine]], [[inverse-tangent]].',
        },
        {
          type: 'derivation',
          title: 'A right triangle has legs $5$ (opposite $A$) and $8$ (adjacent to $A$). Find $A$.',
          steps: [
            { tex: '\\tan A = \\frac{5}{8} = 0.625', why: 'We know opposite and adjacent, so tangent is the ratio that connects them.' },
            { tex: 'A = \\tan^{-1}(0.625)', why: 'Undo the tangent: $A$ is the angle whose tangent is $0.625$.' },
            { tex: 'A \\approx 32.01^\\circ', why: 'Calculator in degree mode (the `tan⁻¹` key, often SHIFT + `tan`).' },
            { tex: 'B = 90^\\circ - 32.01^\\circ \\approx 57.99^\\circ', why: 'Complementary angles.' },
          ],
          result: '$A \\approx 32.01^\\circ$ and $B \\approx 57.99^\\circ$.',
        },
        {
          type: 'graph',
          x: [-0.8, 9.2],
          y: [-0.8, 7.5],
          equal: true,
          segments: [
            { from: [0, 0], to: [8, 0], color: 'blue', label: 'adj = 8' },
            { from: [8, 0], to: [8, 'k'], color: 'red', label: 'opp' },
            { from: [0, 0], to: [8, 'k'], color: 'purple' },
          ],
          parametric: [{ x: '1.2cos(t)', y: '1.2sin(t)', t: [0, 'arctan(k/8)'], color: 'orange' }],
          sliders: [{ name: 'k', min: 0.5, max: 7, step: 0.1, value: 5, label: 'opposite side' }],
          readouts: [
            { label: '$\\tan A = \\frac{\\text{opp}}{8} =$', expr: 'k/8', digits: 4 },
            { label: '$A = \\tan^{-1}(\\text{ratio}) \\approx$', expr: 'arctan(k/8)*180/pi', digits: 2 },
          ],
          caption: 'Grow the opposite side and the angle grows — but not proportionally. Doubling the ratio from $0.3125$ to $0.625$ does **not** double the angle ($17.35^\\circ \\to 32.01^\\circ$).',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: '$\\sin^{-1} x$ is not $\\frac{1}{\\sin x}$',
          text: 'Here the $-1$ means "inverse function" (like $f^{-1}$), not "reciprocal". $\\sin^{-1}(0.5) = 30^\\circ$, an angle. The reciprocal $\\frac{1}{\\sin x}$ has its own name, $\\csc x$. This is confusing notation, and that is why many people (and every programming language) prefer `asin`, `acos`, `atan`.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why inverse ratios give a single answer here',
          text: 'For acute angles each ratio is one-to-one: as $\\theta$ goes from $0^\\circ$ to $90^\\circ$, $\\sin\\theta$ only increases, $\\cos\\theta$ only decreases and $\\tan\\theta$ only increases. So each value comes from exactly one acute angle. For angles beyond $90^\\circ$ that breaks down, and the unit on inverse trig functions will handle it with restricted ranges.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'In C++',
          text: '`std::asin`, `std::acos` and `std::atan` return **radians**: `std::atan(5.0 / 8.0)` is about `0.5586`; multiply by `180 / std::numbers::pi` for degrees. Games usually prefer `std::atan2(dy, dx)`, which takes the two sides separately and works in every direction — you will meet it in the inverse trig unit.',
        },
      ],
    },
    // 4 ─────────────────────────────────────────────────────────────
    {
      kind: 'numeric',
      prompt: 'A right triangle has hypotenuse $13$, and the side opposite angle $A$ is $5$. Find $A$ in degrees, rounded to two decimal places.',
      hint: 'Opposite and hypotenuse → sine. Then use $\\sin^{-1}$.',
      label: '$A \\approx$',
      unit: '°',
      answer: 'arcsin(5/13)*180/pi',
      answerTex: '\\sin^{-1}\\!\\left(\\tfrac{5}{13}\\right) \\approx 22.62^\\circ',
      tolerance: 0.01,
      explanation: '$\\sin A = \\frac{5}{13} \\approx 0.3846$, so $A = \\sin^{-1}\\left(\\frac{5}{13}\\right) \\approx 22.62^\\circ$. Check with the other ratios: the adjacent side is $\\sqrt{169 - 25} = 12$, and $\\tan^{-1}\\left(\\frac{5}{12}\\right)$ gives the same $22.62^\\circ$.',
    },
    // 5 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Solving from two sides',
      blocks: [
        {
          type: 'p',
          text: 'With two sides known, the third side comes from Pythagoras and both angles come from inverse ratios. Use the **original** data in each calculation whenever possible: a rounded intermediate answer fed into the next step makes errors snowball.',
        },
        {
          type: 'derivation',
          title: 'Solve the right triangle with leg $a = 7$ and hypotenuse $c = 25$',
          steps: [
            { tex: 'b = \\sqrt{25^2 - 7^2} = \\sqrt{625 - 49} = \\sqrt{576} = 24', why: 'Pythagorean theorem solved for the missing leg.' },
            { tex: '\\sin A = \\frac{7}{25} \\implies A = \\sin^{-1}(0.28) \\approx 16.26^\\circ', why: '$a$ is opposite $A$, $c$ is the hypotenuse — both **given** values, so no rounding has crept in yet.' },
            { tex: 'B = 90^\\circ - A \\approx 73.74^\\circ', why: 'Complementary angles.' },
            { tex: '\\cos B = \\frac{7}{25} \\implies B = \\cos^{-1}(0.28) \\approx 73.74^\\circ \\ \\checkmark', why: 'Independent check: side $a$ is adjacent to $B$. Both methods agree.' },
          ],
          result: '$b = 24$, $A \\approx 16.26^\\circ$, $B \\approx 73.74^\\circ$.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Three quick sanity checks',
          text: '(1) The hypotenuse is the longest side. (2) The longer leg is across from the larger acute angle. (3) The acute angles add to $90^\\circ$. A solution that passes all three is almost certainly right.',
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'Instructors grade the set-up: write the ratio equation ($\\sin A = \\frac{7}{25}$) before reaching for the calculator, and state the rounding (e.g. "to the nearest hundredth"). Many also deduct for using rounded intermediate values when the given data would do.',
        },
      ],
    },
    // 6 ─────────────────────────────────────────────────────────────
    {
      kind: 'order',
      prompt: 'You are given both legs, $a$ (opposite $A$) and $b$ (adjacent to $A$), of a right triangle. Order the steps to find both acute angles.',
      lines: [
        'Label the given legs relative to angle $A$: $a$ is opposite, $b$ is adjacent',
        'Choose the ratio that uses opposite and adjacent: tangent',
        'Write the equation $\\tan A = \\frac{a}{b}$',
        'Apply the inverse: $A = \\tan^{-1}\\left(\\frac{a}{b}\\right)$',
        'Find the other angle: $B = 90^\\circ - A$',
      ],
      distractors: ['Apply the reciprocal: $A = \\frac{1}{\\tan(a/b)}$'],
      explanation: 'Each step needs the one before it: labels decide the ratio, the ratio gives the equation, the inverse tangent turns the ratio into an angle, and $B$ needs $A$. The distractor confuses the inverse $\\tan^{-1}$ with the reciprocal $\\frac{1}{\\tan}$ — and it would also feed a ratio, not an angle, into $\\tan$. (To finish solving the triangle, Pythagoras gives the hypotenuse $c = \\sqrt{a^2 + b^2}$.)',
    },
    // 7 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Angles of elevation and depression',
      blocks: [
        {
          type: 'p',
          text: 'Most applications describe angles relative to the **horizontal**, because that is what a level instrument (or a person\'s eye) uses as a reference.',
        },
        {
          type: 'definition',
          term: 'Elevation and depression',
          text: 'The [[angle-of-elevation]] is the angle **up** from the horizontal to a line of sight aimed at an object above the observer. The [[angle-of-depression]] is the angle **down** from the horizontal to a line of sight aimed at an object below.',
        },
        {
          type: 'graph',
          x: [-3, 55],
          y: [-3, 40],
          equal: true,
          segments: [
            { from: [0, 0], to: [50, 0], color: 'blue', label: '50 m' },
            { from: [50, 0], to: [50, '50tan(a*pi/180)'], color: 'green', label: 'height h' },
            { from: [0, 0], to: [50, '50tan(a*pi/180)'], color: 'orange', dashed: true, label: 'line of sight' },
          ],
          parametric: [{ x: '7cos(t)', y: '7sin(t)', t: [0, 'a*pi/180'], color: 'red' }],
          points: [{ x: 0, y: 0, label: 'observer' }],
          sliders: [{ name: 'a', min: 5, max: 37, step: 0.5, value: 35, label: 'angle of elevation (degrees)' }],
          readouts: [{ label: '$h = 50\\tan(\\text{angle}) \\approx$', expr: '50tan(a*pi/180)', digits: 2 }],
          caption: 'Standing $50$ m from a tree, the angle of elevation to its top determines its height. A clinometer app on a phone measures this angle.',
        },
        {
          type: 'derivation',
          title: 'From $50$ m away, the angle of elevation to the top of a tree is $35^\\circ$. Your eyes are $1.6$ m above the ground. How tall is the tree?',
          steps: [
            { tex: '\\tan 35^\\circ = \\frac{h}{50}', why: 'The right triangle runs from your eye level: horizontal distance $50$ (adjacent), height above eye level $h$ (opposite). TOA.' },
            { tex: 'h = 50\\tan 35^\\circ \\approx 35.01 \\text{ m}', why: 'Multiply by $50$; $\\tan 35^\\circ \\approx 0.7002$.' },
            { tex: '\\text{tree} = h + 1.6 \\approx 36.61 \\text{ m}', why: 'The triangle starts at eye level, not at the ground, so add the eye height back. Forgetting this is a classic slip.' },
          ],
          result: 'The tree is about $36.6$ m tall.',
        },
        {
          type: 'p',
          text: 'Depression angles hide a small trap. The angle of depression is measured from a **horizontal line at the observer**, not inside the triangle at the observer. But that horizontal line is parallel to the ground, so (alternate interior angles) the angle of depression from the top **equals** the angle of elevation from the bottom. That angle sits at the object on the ground — use it there.',
        },
        {
          type: 'graph',
          x: [-0.8, 7.2],
          y: [-0.6, 4.2],
          equal: true,
          segments: [
            { from: [0, 0], to: [0, 3], color: 'gray', label: 'height' },
            { from: [0, 3], to: [6.5, 3], color: 'gray', dashed: true, label: 'horizontal' },
            { from: [0, 0], to: [6, 0], color: 'blue' },
            { from: [0, 3], to: [6, 0], color: 'orange', label: 'line of sight' },
          ],
          parametric: [
            { x: '1.4cos(t)', y: '3 + 1.4sin(t)', t: [0, '-arctan(0.5)'], color: 'red' },
            { x: '6 - 1.4cos(t)', y: '1.4sin(t)', t: [0, 'arctan(0.5)'], color: 'red' },
          ],
          points: [
            { x: 1.9, y: 2.55, label: 'depression', color: 'red' },
            { x: 4.3, y: 0.3, label: 'elevation', color: 'red' },
            { x: 0, y: 3, label: 'top' },
            { x: 6, y: 0, label: 'boat' },
          ],
          caption: 'The two red angles are equal: the horizontal at the top is parallel to the ground. Inside the triangle, the depression angle reappears at the boat.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Aiming a turret',
          text: 'A turret at height $3$ m targets a unit on the ground $8$ m away horizontally. The barrel must tilt down by the angle of depression $\\tan^{-1}\\left(\\frac{3}{8}\\right) \\approx 20.56^\\circ$. In code: `pitch = std::atan(heightDiff / horizontalDist);` — in radians, of course.',
        },
      ],
    },
    // 8 ─────────────────────────────────────────────────────────────
    {
      kind: 'mcq',
      prompt: 'From the top of a $40$ m lighthouse, the angle of depression to a boat is $20^\\circ$. Which expression gives the boat\'s horizontal distance $d$ from the base of the lighthouse?',
      hint: 'Move the $20^\\circ$ angle down to the boat (alternate interior angles). From the boat, the $40$ m height is opposite and $d$ is adjacent.',
      options: [
        { text: '$d = 40\\tan 20^\\circ \\approx 14.56$ m', why: 'This puts the $20^\\circ$ at the top of the lighthouse, inside the triangle. But depression is measured from the horizontal, so the angle inside the triangle at the top is $70^\\circ$.' },
        { text: '$d = \\frac{40}{\\sin 20^\\circ} \\approx 116.95$ m', why: 'That is the hypotenuse: the straight-line distance from the top of the lighthouse to the boat, not the horizontal distance.' },
        { text: '$d = \\frac{40}{\\tan 20^\\circ} \\approx 109.90$ m', correct: true, why: 'At the boat the angle is $20^\\circ$, with opposite $40$ and adjacent $d$: $\\tan 20^\\circ = \\frac{40}{d}$, so $d = \\frac{40}{\\tan 20^\\circ}$.' },
        { text: '$d = 40\\sin 20^\\circ \\approx 13.68$ m', why: 'This treats $40$ as a hypotenuse, but the lighthouse is a leg of the triangle.' },
      ],
      explanation: 'The angle of depression from the top equals the angle of elevation from the boat: $20^\\circ$. From the boat, the lighthouse ($40$ m) is opposite and the distance $d$ is adjacent, so $\\tan 20^\\circ = \\frac{40}{d}$ and $d = \\frac{40}{\\tan 20^\\circ} \\approx \\frac{40}{0.3640} \\approx 109.90$ m. A shallow angle of depression means a far-away boat, which matches the large answer.',
    },
    // 9 ─────────────────────────────────────────────────────────────
    {
      kind: 'numeric',
      prompt: 'A wheelchair ramp rises $0.75$ m over a horizontal run of $9$ m. What angle does it make with the ground? Give degrees, rounded to two decimal places.',
      hint: 'Rise is opposite, run is adjacent: $\\tan\\theta = \\frac{0.75}{9}$.',
      label: '$\\theta \\approx$',
      unit: '°',
      answer: 'arctan(0.75/9)*180/pi',
      answerTex: '\\tan^{-1}\\!\\left(\\tfrac{0.75}{9}\\right) \\approx 4.76^\\circ',
      tolerance: 0.01,
      explanation: '$\\tan\\theta = \\frac{0.75}{9} = \\frac{1}{12}$, so $\\theta = \\tan^{-1}\\left(\\frac{1}{12}\\right) \\approx 4.76^\\circ$. That $1{:}12$ slope is the maximum allowed for ramps by US accessibility rules — a gentle angle you would barely notice on a hill, but a real effort in a wheelchair.',
    },
    // 10 ────────────────────────────────────────────────────────────
    {
      kind: 'truefalse',
      prompt: 'The angle of depression from point $P$ down to point $Q$ always equals the angle of elevation from $Q$ up to $P$.',
      answer: true,
      explanation: 'Both are measured from horizontal lines — one through $P$, one through $Q$ — and horizontal lines are parallel. The line of sight $PQ$ is a transversal, so the two angles are alternate interior angles, which are equal. This is why you can always move a depression angle to the lower point of the triangle.',
    },
    // 11 ────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Two-triangle problems',
      blocks: [
        {
          type: 'p',
          text: 'Sometimes you cannot reach the base of the thing you are measuring — a mountain, a building across a river. The trick is to take **two** angle measurements from two spots a known distance apart. Each spot gives a right triangle; the two triangles share the unknown height. Write one equation per triangle and solve the system.',
        },
        {
          type: 'derivation',
          title: 'The angle of elevation to a building\'s top is $40^\\circ$. Walking $30$ m directly away, it drops to $28^\\circ$. How tall is the building?',
          steps: [
            { tex: '\\tan 40^\\circ = \\frac{h}{x}, \\qquad \\tan 28^\\circ = \\frac{h}{x + 30}', why: 'Let $x$ be the unknown distance from the closer spot to the base. The farther spot is $x + 30$ from the base. Both triangles have opposite side $h$.' },
            { tex: 'h = x\\tan 40^\\circ = (x + 30)\\tan 28^\\circ', why: 'Solve each equation for $h$ and set the two expressions equal (substitution).' },
            { tex: 'x\\tan 40^\\circ - x\\tan 28^\\circ = 30\\tan 28^\\circ', why: 'Expand the right side and collect the $x$ terms on the left.' },
            { tex: 'x = \\frac{30\\tan 28^\\circ}{\\tan 40^\\circ - \\tan 28^\\circ} \\approx \\frac{15.951}{0.3074} \\approx 51.89', why: 'Factor out $x$ and divide. Keep several digits in intermediate values.' },
            { tex: 'h = x\\tan 40^\\circ \\approx 51.89(0.8391) \\approx 43.54 \\text{ m}', why: 'Substitute back into either equation. Check with the other: $(51.89 + 30)\\tan 28^\\circ \\approx 43.54$. ✓' },
          ],
          result: 'The building is about $43.5$ m tall — found without ever reaching its base.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why one measurement is not enough',
          text: 'From a single spot, an angle of $40^\\circ$ fits a short building nearby or a tall one far away: one equation, two unknowns ($h$ and $x$). The second measurement adds a second equation. This is the same idea as triangulation in surveying and GPS: more independent measurements pin down more unknowns.',
        },
        {
          type: 'callout',
          variant: 'tip',
          text: 'Always sketch both triangles on one picture and label the shared side and the unknown distance. The algebra is just a linear system — the hard part is the diagram.',
        },
      ],
    },
    // 12 ────────────────────────────────────────────────────────────
    {
      kind: 'error',
      prompt: 'A right triangle has hypotenuse $20$ and an acute angle of $30^\\circ$. A student finds the side opposite the $30^\\circ$ angle. Tap the first wrong line.',
      lines: [
        '$\\sin 30^\\circ = \\frac{x}{20}$',
        '$x = 20\\sin 30^\\circ$',
        '$x = 20(-0.988)$',
        '$x \\approx -19.76$',
      ],
      errorLines: [3],
      explanation: 'Lines 1 and 2 are right. Line 3 used $\\sin 30 \\approx -0.988$, which is the sine of $30$ **radians** — the calculator was in radian mode. In degree mode $\\sin 30^\\circ = \\frac{1}{2}$, so $x = 10$. A negative length is an instant red flag; so is a leg ($19.76$) almost as long as the hypotenuse for a small angle like $30^\\circ$.',
    },
    // 13 ────────────────────────────────────────────────────────────
    {
      kind: 'numeric',
      prompt: 'From point $P$ the angle of elevation to the top of a tower is $45^\\circ$. From point $Q$, $20$ m farther away in a straight line, it is $30^\\circ$. Find the tower\'s height exactly (type `sqrt(3)` for $\\sqrt{3}$), or as a decimal to two places.',
      hint: 'With $x$ the distance from $P$ to the base: $h = x\\tan 45^\\circ = x$, and $h = (x + 20)\\tan 30^\\circ = \\frac{x + 20}{\\sqrt{3}}$.',
      label: '$h =$',
      unit: 'm',
      answer: '10(sqrt(3) + 1)',
      answerTex: '10(\\sqrt{3} + 1) \\approx 27.32',
      explanation: 'Since $\\tan 45^\\circ = 1$, $h = x$. Since $\\tan 30^\\circ = \\frac{1}{\\sqrt{3}}$, $h = \\frac{x + 20}{\\sqrt{3}}$. Setting $x = \\frac{x + 20}{\\sqrt{3}}$ gives $\\sqrt{3}x = x + 20$, so $x(\\sqrt{3} - 1) = 20$ and $x = \\frac{20}{\\sqrt{3} - 1} = \\frac{20(\\sqrt{3} + 1)}{3 - 1} = 10(\\sqrt{3} + 1)$. So $h = 10(\\sqrt{3} + 1) \\approx 27.32$ m. Special-angle values let you get an exact answer.',
    },
    // 14 ────────────────────────────────────────────────────────────
    {
      kind: 'numeric',
      prompt: 'A game camera sits $3$ m above the floor and looks at a point on the floor $8$ m away horizontally. What is the camera\'s angle of depression? Give degrees, rounded to two decimal places.',
      hint: 'Move the angle down to the target point: opposite $3$, adjacent $8$.',
      label: 'angle $\\approx$',
      unit: '°',
      answer: 'arctan(3/8)*180/pi',
      answerTex: '\\tan^{-1}\\!\\left(\\tfrac{3}{8}\\right) \\approx 20.56^\\circ',
      tolerance: 0.01,
      explanation: 'The angle of depression equals the angle of elevation from the target, where the height $3$ is opposite and the distance $8$ is adjacent: $\\tan\\theta = \\frac{3}{8}$, so $\\theta = \\tan^{-1}(0.375) \\approx 20.56^\\circ$. In an engine you would compute `std::atan(3.0 / 8.0)` ≈ `0.3588` radians and pitch the camera down by that much.',
    },
    // 15 ────────────────────────────────────────────────────────────
    {
      kind: 'fill',
      prompt: 'Choose the right tool for each situation in a right triangle.',
      template: 'To find a side from two other sides, use ___ . To find a side from one side and an acute angle, use ___ . To find an acute angle from two sides, use ___ .',
      blanks: [{ answers: ['the Pythagorean theorem'] }, { answers: ['a trig ratio'] }, { answers: ['an inverse trig ratio'] }],
      wordBank: ['the Pythagorean theorem', 'a trig ratio', 'an inverse trig ratio', 'the reciprocal of a ratio', 'the angle sum $180^\\circ$'],
      explanation: 'Pythagoras relates three sides, so it turns two sides into the third. A ratio like $\\sin\\theta = \\frac{\\text{opp}}{\\text{hyp}}$ relates an angle and two sides, so one side plus the angle gives another side. Running that relation backwards — ratio to angle — is exactly what $\\sin^{-1}$, $\\cos^{-1}$ and $\\tan^{-1}$ do. (The angle sum only finds an angle from other **angles**.)',
    },
  ],
  takeaways: [
    'A right triangle is determined by two facts beyond the right angle, at least one of them a side.',
    'Use SOH CAH TOA to get sides from an angle, Pythagoras to get a side from two sides, and $B = 90^\\circ - A$ for the other angle.',
    '$\\sin^{-1}$, $\\cos^{-1}$, $\\tan^{-1}$ turn a ratio back into an acute angle; the $-1$ means inverse, not reciprocal.',
    'Elevation and depression are measured from the horizontal; the depression angle from above equals the elevation angle from below.',
    'Two-triangle problems: write one equation per triangle for the shared side and solve the system.',
    'Check your degree/radian mode, use given data rather than rounded values, and sanity-check side lengths against angles.',
  ],
  reading: [
    {
      title: 'OpenStax Algebra and Trigonometry 2e — 7.2 Right Triangle Trigonometry',
      url: 'https://openstax.org/books/algebra-and-trigonometry-2e/pages/7-2-right-triangle-trigonometry',
      source: 'openstax',
      note: 'The end of the section works through angle-of-elevation and real-world right triangle problems.',
    },
    {
      title: 'Khan Academy — Trigonometry',
      url: 'https://www.khanacademy.org/math/trigonometry',
      source: 'khan',
      note: 'Practice sets on solving right triangles and on introductory inverse trig ratios.',
    },
    {
      title: 'Wikipedia — Solution of triangles',
      url: 'https://en.wikipedia.org/wiki/Solution_of_triangles',
      source: 'wikipedia',
      note: 'A survey of all the triangle-solving cases, including the oblique ones you will meet in the Law of Sines and Cosines unit.',
    },
  ],
};
