import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'la-dot-product',
  title: 'The Dot Product: Length, Angle and Projection',
  summary: 'One multiply-and-add that measures length, distance, angle and shadow — and lights every pixel in a game.',
  minutes: 20,
  objectives: [
    'Compute the dot product in $\\mathbb{R}^n$ and use its algebraic properties',
    'Compute norms, unit vectors and distances in $\\mathbb{R}^n$',
    'Derive the angle formula from the Law of Cosines, and explain why Cauchy–Schwarz makes it valid in every $\\mathbb{R}^n$',
    'Test orthogonality and compute scalar and vector projections',
    'Apply dot products to diffuse lighting, facing and field-of-view tests, and sliding along walls',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'The dot product in Rⁿ',
      blocks: [
        {
          type: 'p',
          text: 'In trig you met the [[dot-product]] of two plane vectors: multiply matching components and add. The definition carries over to any $\\mathbb{R}^n$ unchanged, and it is the one tool that brings *geometry* — length, distance, angle, perpendicularity — into the algebra of vectors.',
        },
        {
          type: 'definition',
          term: 'Dot product',
          text: 'For $\\mathbf{u}, \\mathbf{v}$ in $\\mathbb{R}^n$, the **dot product** (or inner product) is the **scalar**\n\n$$\\mathbf{u} \\cdot \\mathbf{v} = u_1v_1 + u_2v_2 + \\dots + u_nv_n.$$\n\nIt is also written $\\mathbf{u}^T\\mathbf{v}$: the [[transpose]] $\\mathbf{u}^T$ lays the column $\\mathbf{u}$ on its side as a row, and a row times a column is exactly this sum of products (unit 4).',
        },
        {
          type: 'derivation',
          title: '$\\mathbf{u} \\cdot \\mathbf{v}$ for $\\mathbf{u} = (2, -1, 3, 0)$ and $\\mathbf{v} = (4, 5, 1, 7)$ in $\\mathbb{R}^4$',
          steps: [
            { tex: '\\mathbf{u} \\cdot \\mathbf{v} = (2)(4) + (-1)(5) + (3)(1) + (0)(7)', why: 'Multiply entries in matching positions — first with first, second with second, and so on.' },
            { tex: '= 8 - 5 + 3 + 0 = 6', why: 'Add the four products. The answer is a single number, not a vector.' },
          ],
        },
        {
          type: 'theorem',
          name: 'Properties of the dot product',
          tex: '\\begin{aligned} &\\mathbf{u} \\cdot \\mathbf{v} = \\mathbf{v} \\cdot \\mathbf{u} \\qquad (\\mathbf{u} + \\mathbf{v}) \\cdot \\mathbf{w} = \\mathbf{u} \\cdot \\mathbf{w} + \\mathbf{v} \\cdot \\mathbf{w} \\qquad (c\\mathbf{u}) \\cdot \\mathbf{v} = c(\\mathbf{u} \\cdot \\mathbf{v}) \\\\ &\\mathbf{u} \\cdot \\mathbf{u} \\ge 0, \\quad \\text{and } \\mathbf{u} \\cdot \\mathbf{u} = 0 \\text{ only when } \\mathbf{u} = \\mathbf{0} \\end{aligned}',
          text: 'Combining the middle two: $(c_1\\mathbf{u} + c_2\\mathbf{v}) \\cdot \\mathbf{w} = c_1(\\mathbf{u} \\cdot \\mathbf{w}) + c_2(\\mathbf{v} \\cdot \\mathbf{w})$ — the dot product respects linear combinations in each slot.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why $\\mathbf{u} \\cdot \\mathbf{u} = 0$ forces $\\mathbf{u} = \\mathbf{0}$',
          text: '$\\mathbf{u} \\cdot \\mathbf{u} = u_1^2 + u_2^2 + \\dots + u_n^2$ is a sum of squares. Each square is $\\ge 0$, so the sum is $\\ge 0$, and it can only be $0$ if every square is $0$ — that is, every entry is $0$. The other properties follow entrywise from the corresponding facts about real numbers, just like the rules of vector algebra.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'The most executed operation in computing',
          text: 'GLSL and HLSL have a built-in `dot`. A $4 \\times 4$ matrix times a vector is four dot products, so every vertex transform is dot products. A neuron in a neural network computes `dot(weights, inputs) + bias`; a matrix multiply is a grid of dot products. CPUs and GPUs ship fused multiply-add instructions largely so that this one sum of products runs fast.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'numeric',
      prompt: 'Compute $\\mathbf{u} \\cdot \\mathbf{v}$ for $\\mathbf{u} = (1, -2, 3, 2)$ and $\\mathbf{v} = (4, 1, -1, 5)$.',
      label: '$\\mathbf{u} \\cdot \\mathbf{v} =$',
      answer: '9',
      explanation: '$(1)(4) + (-2)(1) + (3)(-1) + (2)(5) = 4 - 2 - 3 + 10 = 9$. Watch the signs: two of the four products are negative. The result is a scalar — a dot product never gives back a vector.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Length, unit vectors and distance',
      blocks: [
        {
          type: 'p',
          text: 'Dotting a vector with itself gives the sum of the squares of its entries — exactly what the Pythagorean theorem needs. So length is *defined* through the dot product, in every dimension.',
        },
        {
          type: 'definition',
          term: 'Norm (length)',
          text: 'The [[norm]] of $\\mathbf{v}$ in $\\mathbb{R}^n$ is $\\|\\mathbf{v}\\| = \\sqrt{\\mathbf{v} \\cdot \\mathbf{v}} = \\sqrt{v_1^2 + v_2^2 + \\dots + v_n^2}$. A vector of norm $1$ is a [[unit-vector]].',
        },
        {
          type: 'derivation',
          title: 'Why $\\|(2, 3, 6)\\| = 7$ really is the length in $\\mathbb{R}^3$',
          steps: [
            { tex: '\\sqrt{2^2 + 3^2} = \\sqrt{13}', why: 'Drop the arrow onto the floor ($xy$-plane). The shadow $(2, 3, 0)$ has length $\\sqrt{13}$ by the 2D Pythagorean theorem.' },
            { tex: '\\|\\mathbf{v}\\| = \\sqrt{(\\sqrt{13})^2 + 6^2} = \\sqrt{13 + 36}', why: 'The shadow and the vertical height $6$ are the legs of a second right triangle whose hypotenuse is the arrow itself.' },
            { tex: '= \\sqrt{49} = 7 = \\sqrt{\\mathbf{v} \\cdot \\mathbf{v}}', why: 'Pythagoras twice is the same as summing all three squares — the dot-product formula.' },
          ],
          result: 'In $\\mathbb{R}^n$ there is no picture, so we take $\\sqrt{\\mathbf{v} \\cdot \\mathbf{v}}$ as the definition; the derivation shows it agrees with geometry wherever we can check.',
        },
        {
          type: 'theorem',
          name: 'Scaling, normalizing, distance',
          tex: '\\|c\\mathbf{v}\\| = |c|\\,\\|\\mathbf{v}\\|, \\qquad \\mathbf{u} = \\frac{\\mathbf{v}}{\\|\\mathbf{v}\\|} \\ (\\mathbf{v} \\ne \\mathbf{0}), \\qquad \\operatorname{dist}(\\mathbf{u}, \\mathbf{v}) = \\|\\mathbf{u} - \\mathbf{v}\\|',
          text: 'The first holds because $\\|c\\mathbf{v}\\| = \\sqrt{(c\\mathbf{v}) \\cdot (c\\mathbf{v})} = \\sqrt{c^2(\\mathbf{v} \\cdot \\mathbf{v})} = |c|\\|\\mathbf{v}\\|$. With $c = \\frac{1}{\\|\\mathbf{v}\\|}$ it shows that **normalizing** gives a unit vector. The distance between two points is the length of the displacement between them.',
        },
        {
          type: 'derivation',
          title: 'Normalize $\\mathbf{v} = (2, -1, 2)$',
          steps: [
            { tex: '\\|\\mathbf{v}\\| = \\sqrt{4 + 1 + 4} = 3', why: 'Square each entry, add, take the root. The sign of $-1$ disappears when squared.' },
            { tex: '\\mathbf{u} = \\tfrac13(2, -1, 2) = \\left(\\tfrac23, -\\tfrac13, \\tfrac23\\right)', why: 'Divide every entry by the length.' },
            { tex: '\\|\\mathbf{u}\\|^2 = \\tfrac49 + \\tfrac19 + \\tfrac49 = 1 \\;\\checkmark', why: 'Check: a unit vector has squared length exactly $1$.' },
          ],
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Skip the square root',
          text: 'Range checks run thousands of times per frame: "is the enemy within $r$ metres?" Compare **squared** lengths, `dot(d, d) < r * r`, instead of `length(d) < r`. Both sides are nonnegative, so squaring preserves the inequality, and you avoid a `sqrt`. Engines expose this as `LengthSquared` / `SizeSquared` / `sqrMagnitude` for exactly this reason.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Lengths do not add',
          text: '$\\|\\mathbf{u} + \\mathbf{v}\\| \\ne \\|\\mathbf{u}\\| + \\|\\mathbf{v}\\|$ unless the vectors point the same way, and $\\|(3, 4)\\| = 5$, not $7$. Squaring is not linear: always square the entries, add, then take one root.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'numeric',
      prompt: 'Find the distance between the points $\\mathbf{p} = (1, 2, -1)$ and $\\mathbf{q} = (3, -1, 5)$ in $\\mathbb{R}^3$.',
      label: '$\\operatorname{dist}(\\mathbf{p}, \\mathbf{q}) =$',
      answer: '7',
      hint: 'Compute $\\mathbf{q} - \\mathbf{p}$ first, then its norm.',
      explanation: 'The displacement is $\\mathbf{q} - \\mathbf{p} = (3 - 1,\\; -1 - 2,\\; 5 - (-1)) = (2, -3, 6)$, and its length is $\\sqrt{4 + 9 + 36} = \\sqrt{49} = 7$. The order of subtraction does not matter for distance, because $\\|-\\mathbf{w}\\| = |-1|\\|\\mathbf{w}\\| = \\|\\mathbf{w}\\|$.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'The angle between two vectors',
      blocks: [
        {
          type: 'p',
          text: 'In the plane you learned $\\mathbf{u} \\cdot \\mathbf{v} = \\|\\mathbf{u}\\|\\|\\mathbf{v}\\|\\cos\\theta$, where $\\theta \\in [0, \\pi]$ is the angle between the vectors placed tail to tail. Here is a proof that works in any dimension, using only the dot product\'s properties and the [[law-of-cosines]].',
        },
        {
          type: 'derivation',
          title: 'Why $\\mathbf{u} \\cdot \\mathbf{v} = \\|\\mathbf{u}\\|\\|\\mathbf{v}\\|\\cos\\theta$',
          steps: [
            { tex: '\\|\\mathbf{u} - \\mathbf{v}\\|^2 = (\\mathbf{u} - \\mathbf{v}) \\cdot (\\mathbf{u} - \\mathbf{v})', why: 'Definition of the norm. Tail to tail, $\\mathbf{u}$, $\\mathbf{v}$ and $\\mathbf{u} - \\mathbf{v}$ form a triangle (the third side runs between the tips).' },
            { tex: '= \\mathbf{u} \\cdot \\mathbf{u} - 2\\,\\mathbf{u} \\cdot \\mathbf{v} + \\mathbf{v} \\cdot \\mathbf{v}', why: 'Expand like $(a - b)^2$, using distributivity and symmetry: $\\mathbf{u} \\cdot \\mathbf{v}$ and $\\mathbf{v} \\cdot \\mathbf{u}$ are equal, giving the middle term twice.' },
            { tex: '= \\|\\mathbf{u}\\|^2 + \\|\\mathbf{v}\\|^2 - 2\\,\\mathbf{u} \\cdot \\mathbf{v}', why: 'Rewrite $\\mathbf{u} \\cdot \\mathbf{u}$ and $\\mathbf{v} \\cdot \\mathbf{v}$ as squared norms.' },
            { tex: '\\|\\mathbf{u} - \\mathbf{v}\\|^2 = \\|\\mathbf{u}\\|^2 + \\|\\mathbf{v}\\|^2 - 2\\|\\mathbf{u}\\|\\|\\mathbf{v}\\|\\cos\\theta', why: 'The Law of Cosines for the same triangle: sides $\\|\\mathbf{u}\\|$ and $\\|\\mathbf{v}\\|$ with angle $\\theta$ between them. Any two vectors lie in a plane, so the triangle is an honest plane triangle.' },
            { tex: '\\mathbf{u} \\cdot \\mathbf{v} = \\|\\mathbf{u}\\|\\|\\mathbf{v}\\|\\cos\\theta', why: 'Both lines equal $\\|\\mathbf{u} - \\mathbf{v}\\|^2$. Cancel $\\|\\mathbf{u}\\|^2 + \\|\\mathbf{v}\\|^2$ and divide by $-2$.' },
          ],
          result: 'So for nonzero vectors, $\\cos\\theta = \\dfrac{\\mathbf{u} \\cdot \\mathbf{v}}{\\|\\mathbf{u}\\|\\,\\|\\mathbf{v}\\|}$.',
        },
        {
          type: 'graph',
          x: [-5, 5],
          y: [-4, 5],
          equal: true,
          segments: [
            { from: [0, 0], to: [3, 1], color: 'blue', arrow: true, label: 'u' },
            { from: [0, 0], to: ['r*cos(d*pi/180)', 'r*sin(d*pi/180)'], color: 'red', arrow: true, label: 'v' },
            { from: [3, 1], to: ['r*cos(d*pi/180)', 'r*sin(d*pi/180)'], color: 'gray', dashed: true, label: 'u − v' },
          ],
          sliders: [
            { name: 'd', min: 0, max: 360, step: 5, value: 60, label: 'direction of $\\mathbf{v}$ (degrees)' },
            { name: 'r', min: 0.5, max: 4.5, step: 0.5, value: 3, label: '$\\|\\mathbf{v}\\|$' },
          ],
          readouts: [
            { label: '$\\mathbf{u} \\cdot \\mathbf{v} = 3v_1 + v_2 =$', expr: '3r*cos(d*pi/180) + r*sin(d*pi/180)', digits: 3 },
            { label: '$\\cos\\theta = \\frac{\\mathbf{u} \\cdot \\mathbf{v}}{\\|\\mathbf{u}\\|\\|\\mathbf{v}\\|} =$', expr: '(3cos(d*pi/180) + sin(d*pi/180))/sqrt(10)', digits: 3 },
            { label: '$\\theta$ (degrees) $=$', expr: 'arccos((3cos(d*pi/180) + sin(d*pi/180))/sqrt(10))*180/pi', digits: 1 },
          ],
          caption: 'Here $\\mathbf{u} = (3, 1)$. Change $\\|\\mathbf{v}\\|$: the dot product scales, but $\\cos\\theta$ and $\\theta$ do not move. Swing $\\mathbf{v}$ around: the dot product is positive for acute angles, zero at $90^\\circ$, negative for obtuse ones.',
        },
        {
          type: 'p',
          text: 'In $\\mathbb{R}^4$ and beyond there is no protractor, so we turn the formula around and **define** the angle by $\\cos\\theta = \\frac{\\mathbf{u} \\cdot \\mathbf{v}}{\\|\\mathbf{u}\\|\\|\\mathbf{v}\\|}$. That only makes sense if the ratio always lies in $[-1, 1]$ — and [[la-cauchy-schwarz|a famous inequality]] guarantees it does.',
        },
        {
          type: 'theorem',
          name: 'Cauchy–Schwarz inequality',
          tex: '|\\mathbf{u} \\cdot \\mathbf{v}| \\le \\|\\mathbf{u}\\|\\,\\|\\mathbf{v}\\| \\quad \\text{for all } \\mathbf{u}, \\mathbf{v} \\in \\mathbb{R}^n',
          text: 'with equality exactly when one vector is a scalar multiple of the other. A consequence is the [[la-triangle-inequality|triangle inequality]] $\\|\\mathbf{u} + \\mathbf{v}\\| \\le \\|\\mathbf{u}\\| + \\|\\mathbf{v}\\|$: a detour is never shorter than the direct path.',
        },
        {
          type: 'deepdive',
          title: 'Proof of Cauchy–Schwarz (a quadratic that is never negative)',
          blocks: [
            {
              type: 'derivation',
              steps: [
                { tex: 'f(s) = \\|\\mathbf{u} - s\\mathbf{v}\\|^2 \\ge 0 \\quad \\text{for every real } s', why: 'If $\\mathbf{v} = \\mathbf{0}$ both sides of the inequality are $0$ and we are done, so assume $\\mathbf{v} \\ne \\mathbf{0}$. A squared length is never negative.' },
                { tex: 'f(s) = \\|\\mathbf{v}\\|^2 s^2 - 2(\\mathbf{u} \\cdot \\mathbf{v})\\,s + \\|\\mathbf{u}\\|^2', why: 'Expand $(\\mathbf{u} - s\\mathbf{v}) \\cdot (\\mathbf{u} - s\\mathbf{v})$ exactly as in the angle proof. This is a quadratic in $s$ with positive leading coefficient.' },
                { tex: '4(\\mathbf{u} \\cdot \\mathbf{v})^2 - 4\\|\\mathbf{v}\\|^2\\|\\mathbf{u}\\|^2 \\le 0', why: 'An upward parabola that never dips below the axis has at most one real root, so its discriminant $b^2 - 4ac$ is $\\le 0$.' },
                { tex: '|\\mathbf{u} \\cdot \\mathbf{v}| \\le \\|\\mathbf{u}\\|\\,\\|\\mathbf{v}\\|', why: 'Divide by $4$, move the second term over, and take square roots of both (nonnegative) sides.' },
              ],
              result: 'Equality means the discriminant is $0$: there is an $s$ with $\\|\\mathbf{u} - s\\mathbf{v}\\| = 0$, i.e. $\\mathbf{u} = s\\mathbf{v}$.',
            },
          ],
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the angle formula is worth defining in high dimensions',
          text: 'In machine learning, documents, images and words become vectors in $\\mathbb{R}^{n}$ with $n$ in the hundreds or thousands. **Cosine similarity**, $\\frac{\\mathbf{u} \\cdot \\mathbf{v}}{\\|\\mathbf{u}\\|\\|\\mathbf{v}\\|}$, measures how alike two of them are regardless of their lengths — it is exactly $\\cos\\theta$. Cauchy–Schwarz is what keeps it between $-1$ and $1$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'numeric',
      prompt: 'Find the angle between $\\mathbf{u} = (1, 1, 0)$ and $\\mathbf{v} = (1, 0, 1)$, in degrees.',
      label: '$\\theta =$',
      unit: '°',
      answer: '60',
      hint: 'Compute $\\mathbf{u} \\cdot \\mathbf{v}$ and both norms, then $\\cos\\theta$.',
      explanation: '$\\mathbf{u} \\cdot \\mathbf{v} = 1 + 0 + 0 = 1$ and $\\|\\mathbf{u}\\| = \\|\\mathbf{v}\\| = \\sqrt2$, so $\\cos\\theta = \\frac{1}{\\sqrt2 \\cdot \\sqrt2} = \\frac12$ and $\\theta = 60^\\circ$. Geometrically these are two face diagonals of a unit cube meeting at a corner. The segment joining their tips, $(0, 1, -1)$, also has length $\\sqrt2$, so the triangle they form is equilateral — which is why the angle is $60^\\circ$.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'truefalse',
      prompt: 'There are vectors $\\mathbf{u}, \\mathbf{v}$ in $\\mathbb{R}^5$ with $\\|\\mathbf{u}\\| = 2$, $\\|\\mathbf{v}\\| = 4$ and $\\mathbf{u} \\cdot \\mathbf{v} = 10$.',
      answer: false,
      explanation: 'Cauchy–Schwarz says $|\\mathbf{u} \\cdot \\mathbf{v}| \\le \\|\\mathbf{u}\\|\\|\\mathbf{v}\\| = 8$ in every dimension, so a dot product of $10$ is impossible. It would require $\\cos\\theta = \\frac{10}{8} > 1$. The largest possible value, $8$, occurs only when $\\mathbf{u}$ points in exactly the same direction as $\\mathbf{v}$ ($\\mathbf{u} = \\frac12\\mathbf{v}$).',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'concept',
      title: 'Orthogonality, and "is the enemy in front of me?"',
      blocks: [
        {
          type: 'definition',
          term: 'Orthogonal vectors',
          text: 'Vectors $\\mathbf{u}$ and $\\mathbf{v}$ in $\\mathbb{R}^n$ are [[orthogonal]] when $\\mathbf{u} \\cdot \\mathbf{v} = 0$. For nonzero vectors in $\\mathbb{R}^2$ or $\\mathbb{R}^3$ this means perpendicular ($\\theta = 90^\\circ$). By this definition the zero vector is orthogonal to every vector.',
        },
        {
          type: 'derivation',
          title: 'The Pythagorean theorem in $\\mathbb{R}^n$',
          steps: [
            { tex: '\\|\\mathbf{u} + \\mathbf{v}\\|^2 = (\\mathbf{u} + \\mathbf{v}) \\cdot (\\mathbf{u} + \\mathbf{v})', why: 'Definition of the norm.' },
            { tex: '= \\|\\mathbf{u}\\|^2 + 2\\,\\mathbf{u} \\cdot \\mathbf{v} + \\|\\mathbf{v}\\|^2', why: 'Expand like $(a + b)^2$ using distributivity and symmetry.' },
            { tex: '= \\|\\mathbf{u}\\|^2 + \\|\\mathbf{v}\\|^2 \\iff \\mathbf{u} \\cdot \\mathbf{v} = 0', why: 'The cross term vanishes exactly when the vectors are orthogonal.' },
          ],
          result: '$\\mathbf{u} \\perp \\mathbf{v}$ if and only if $\\|\\mathbf{u} + \\mathbf{v}\\|^2 = \\|\\mathbf{u}\\|^2 + \\|\\mathbf{v}\\|^2$. The middle line also shows what the sign of $\\mathbf{u} \\cdot \\mathbf{v}$ means: positive for an acute angle, negative for an obtuse one.',
        },
        {
          type: 'p',
          text: 'That sign is the cheapest test in game AI. Let $\\mathbf{f}$ be a guard\'s forward direction and $\\mathbf{d} = \\text{enemy} - \\text{guard}$. Then $\\mathbf{f} \\cdot \\mathbf{d} > 0$ means the enemy is **in front** (angle under $90^\\circ$), $< 0$ means **behind** — no trig, no square roots. For a vision cone of total angle $\\phi$, the enemy is visible when the angle to it is at most $\\frac{\\phi}{2}$; with $\\mathbf{f}$ a unit vector that is',
        },
        {
          type: 'math',
          tex: '\\mathbf{f} \\cdot \\frac{\\mathbf{d}}{\\|\\mathbf{d}\\|} \\ge \\cos\\frac{\\phi}{2}',
          caption: 'Compute $\\cos\\frac{\\phi}{2}$ once when the guard is created; each frame costs one dot product and one normalization.',
        },
        {
          type: 'graph',
          x: [-6, 6],
          y: [-3, 6],
          equal: true,
          segments: [
            { from: [0, 0], to: [0, 1.5], color: 'blue', arrow: true, label: 'f' },
            { from: [0, 0], to: ['6sin(w*pi/360)', '6cos(w*pi/360)'], color: 'orange', dashed: true },
            { from: [0, 0], to: ['-6sin(w*pi/360)', '6cos(w*pi/360)'], color: 'orange', dashed: true },
            { from: [-6, 0], to: [6, 0], color: 'gray', dashed: true },
            { from: [0, 0], to: ['a', 'b'], color: 'red', arrow: true, label: 'd' },
          ],
          points: [{ x: 'a', y: 'b', label: 'enemy', color: 'red' }],
          sliders: [
            { name: 'a', min: -5, max: 5, step: 0.5, value: 2, label: 'enemy $x$' },
            { name: 'b', min: -2.5, max: 5.5, step: 0.5, value: 3, label: 'enemy $y$' },
            { name: 'w', min: 10, max: 180, step: 5, value: 90, label: 'field of view $\\phi$ (degrees)' },
          ],
          readouts: [
            { label: '$\\mathbf{f} \\cdot \\mathbf{d}$ (in front if $> 0$)', expr: 'b', digits: 2 },
            { label: '$\\mathbf{f} \\cdot \\mathbf{d} / \\|\\mathbf{d}\\| =$', expr: 'b/sqrt(a^2 + b^2)', digits: 3 },
            { label: '$\\cos(\\phi/2) =$', expr: 'cos(w*pi/360)', digits: 3 },
            { label: 'visible? ($1$ = yes, $0$ = no)', expr: 'max(sign(b/sqrt(a^2 + b^2) - cos(w*pi/360)), 0)', digits: 0 },
          ],
          caption: 'The guard at the origin faces $\\mathbf{f} = (0, 1)$. The gray line is where $\\mathbf{f} \\cdot \\mathbf{d} = 0$; the orange lines bound the vision cone. Being in front is not enough — the enemy must also be inside the cone.',
        },
        {
          type: 'code',
          title: 'vision.cpp (fragment)',
          code: `bool canSee(Vec3 guardPos, Vec3 forward /* unit */, Vec3 enemyPos, double cosHalfFov) {
    Vec3 d = enemyPos - guardPos;           // point - point = vector
    double fd = dot(forward, d);
    if (fd <= 0.0) return false;             // behind (or exactly beside) the guard
    return fd * fd >= cosHalfFov * cosHalfFov * dot(d, d);
}`,
          annotations: [
            { lines: 4, text: 'The front/back test: the sign of a dot product. Rejects half of all candidates for the price of three multiplications.' },
            { lines: 5, text: 'The cone test $\\mathbf{f} \\cdot \\mathbf{d} \\ge \\|\\mathbf{d}\\|\\cos\\frac{\\phi}{2}$, squared to avoid a `sqrt`. Squaring is safe here because both sides are positive (this assumes $\\phi \\le 180^\\circ$, so the cosine is $\\ge 0$).' },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'numeric',
      prompt: 'Find $k$ so that $\\begin{bmatrix} k \\\\ 2 \\\\ -1 \\end{bmatrix}$ and $\\begin{bmatrix} 3 \\\\ k \\\\ 4 \\end{bmatrix}$ are orthogonal.',
      label: '$k =$',
      answer: '4/5',
      answerTex: '\\tfrac45',
      hint: 'Set the dot product equal to $0$ and solve for $k$.',
      explanation: 'The dot product is $3k + 2k - 4 = 5k - 4$. Orthogonal means $5k - 4 = 0$, so $k = \\frac45$. Check: $(0.8)(3) + (2)(0.8) + (-1)(4) = 2.4 + 1.6 - 4 = 0$ ✓.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'mcq',
      prompt: 'A guard at the origin faces $\\mathbf{f} = (0, 1)$ with a $90^\\circ$ field of view (so $\\frac{\\phi}{2} = 45^\\circ$). Which enemy position can the guard see?',
      hint: 'Visible means $\\frac{\\mathbf{f} \\cdot \\mathbf{d}}{\\|\\mathbf{d}\\|} \\ge \\cos 45^\\circ \\approx 0.707$.',
      options: [
        { text: '$(2, 1)$', why: '$\\frac{\\mathbf{f} \\cdot \\mathbf{d}}{\\|\\mathbf{d}\\|} = \\frac{1}{\\sqrt5} \\approx 0.447 < 0.707$. In front, but about $63^\\circ$ off-axis — outside the cone.' },
        { text: '$(-3, 1)$', why: '$\\frac{1}{\\sqrt{10}} \\approx 0.316$. The dot product is positive, so the enemy is in front, but at about $72^\\circ$ off-axis it is well outside the cone.' },
        { text: '$(1, 2)$', correct: true, why: '$\\frac{2}{\\sqrt5} \\approx 0.894 \\ge 0.707$: about $27^\\circ$ off-axis, inside the $45^\\circ$ half-angle.' },
        { text: '$(1, -4)$', why: '$\\mathbf{f} \\cdot \\mathbf{d} = -4 < 0$: the enemy is behind the guard, rejected by the very first test.' },
      ],
      explanation: 'With $\\mathbf{f} = (0, 1)$, $\\mathbf{f} \\cdot \\mathbf{d}$ is just the $y$-coordinate of $\\mathbf{d}$, and dividing by $\\|\\mathbf{d}\\|$ gives $\\cos$ of the angle off the facing direction. Only $(1, 2)$ clears $\\cos 45^\\circ \\approx 0.707$. Notice that three of the four positions are "in front" ($\\mathbf{f} \\cdot \\mathbf{d} > 0$) — the sign test alone is a much wider $180^\\circ$ cone.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'Projection: the shadow of one vector on another',
      blocks: [
        {
          type: 'p',
          text: 'Often you need to split a vector $\\mathbf{v}$ into a part **along** a direction $\\mathbf{u}$ and a part **perpendicular** to it: gravity along a slope and into it, a velocity along a wall and into it. The part along $\\mathbf{u}$ is a multiple $c\\mathbf{u}$, and the leftover $\\mathbf{v} - c\\mathbf{u}$ must be orthogonal to $\\mathbf{u}$. That one condition determines $c$.',
        },
        {
          type: 'derivation',
          title: 'Finding the right multiple $c$ (with $\\mathbf{u} \\ne \\mathbf{0}$)',
          steps: [
            { tex: '(\\mathbf{v} - c\\mathbf{u}) \\cdot \\mathbf{u} = 0', why: 'The leftover must be orthogonal to $\\mathbf{u}$ — that is what "perpendicular part" means.' },
            { tex: '\\mathbf{v} \\cdot \\mathbf{u} - c\\,(\\mathbf{u} \\cdot \\mathbf{u}) = 0', why: 'Distribute the dot product and pull out the scalar $c$.' },
            { tex: 'c = \\frac{\\mathbf{v} \\cdot \\mathbf{u}}{\\mathbf{u} \\cdot \\mathbf{u}}', why: 'Solve for $c$. Division is fine because $\\mathbf{u} \\cdot \\mathbf{u} = \\|\\mathbf{u}\\|^2 > 0$ for $\\mathbf{u} \\ne \\mathbf{0}$.' },
          ],
        },
        {
          type: 'theorem',
          name: 'Scalar and vector projection',
          tex: '\\operatorname{proj}_{\\mathbf{u}}\\mathbf{v} = \\frac{\\mathbf{v} \\cdot \\mathbf{u}}{\\mathbf{u} \\cdot \\mathbf{u}}\\,\\mathbf{u}, \\qquad \\operatorname{comp}_{\\mathbf{u}}\\mathbf{v} = \\frac{\\mathbf{v} \\cdot \\mathbf{u}}{\\|\\mathbf{u}\\|} = \\|\\mathbf{v}\\|\\cos\\theta, \\qquad \\mathbf{v} = \\operatorname{proj}_{\\mathbf{u}}\\mathbf{v} + (\\mathbf{v} - \\operatorname{proj}_{\\mathbf{u}}\\mathbf{v})',
          text: 'The [[vector-projection]] is a vector along $\\mathbf{u}$; the [[la-scalar-projection]] is its *signed* length (negative when $\\mathbf{v}$ points away from $\\mathbf{u}$). If $\\mathbf{u}$ is a unit vector, both simplify: $\\operatorname{comp}_{\\mathbf{u}}\\mathbf{v} = \\mathbf{v} \\cdot \\mathbf{u}$ and $\\operatorname{proj}_{\\mathbf{u}}\\mathbf{v} = (\\mathbf{v} \\cdot \\mathbf{u})\\mathbf{u}$.',
        },
        {
          type: 'derivation',
          title: 'Split $\\mathbf{v} = (5, 4, 2)$ along and across $\\mathbf{u} = (2, 1, 2)$',
          steps: [
            { tex: '\\mathbf{v} \\cdot \\mathbf{u} = 10 + 4 + 4 = 18, \\qquad \\mathbf{u} \\cdot \\mathbf{u} = 4 + 1 + 4 = 9', why: 'The two dot products the formula needs.' },
            { tex: '\\operatorname{proj}_{\\mathbf{u}}\\mathbf{v} = \\tfrac{18}{9}\\,\\mathbf{u} = 2(2, 1, 2) = (4, 2, 4)', why: 'The multiple is $c = 2$.' },
            { tex: '\\mathbf{v} - \\operatorname{proj}_{\\mathbf{u}}\\mathbf{v} = (1, 2, -2)', why: 'The perpendicular part is whatever is left over.' },
            { tex: '(1, 2, -2) \\cdot (2, 1, 2) = 2 + 2 - 4 = 0 \\;\\checkmark', why: 'Check that the leftover really is orthogonal to $\\mathbf{u}$.' },
          ],
          result: '$\\mathbf{v} = (4, 2, 4) + (1, 2, -2)$, and the scalar projection is $\\frac{18}{\\|\\mathbf{u}\\|} = \\frac{18}{3} = 6$ — the length of $(4, 2, 4)$.',
        },
        {
          type: 'graph',
          x: [-5, 5],
          y: [-4, 5],
          equal: true,
          segments: [
            { from: ['-6cos(d*pi/180)', '-6sin(d*pi/180)'], to: ['6cos(d*pi/180)', '6sin(d*pi/180)'], color: 'gray', dashed: true },
            { from: [0, 0], to: [3, 2], color: 'blue', arrow: true, label: 'v' },
            { from: [0, 0], to: ['cos(d*pi/180)', 'sin(d*pi/180)'], color: 'red', arrow: true, label: 'u' },
            { from: [0, 0], to: ['(3cos(d*pi/180) + 2sin(d*pi/180))*cos(d*pi/180)', '(3cos(d*pi/180) + 2sin(d*pi/180))*sin(d*pi/180)'], color: 'green', arrow: true, label: 'proj' },
            { from: ['(3cos(d*pi/180) + 2sin(d*pi/180))*cos(d*pi/180)', '(3cos(d*pi/180) + 2sin(d*pi/180))*sin(d*pi/180)'], to: [3, 2], color: 'purple', dashed: true },
          ],
          sliders: [{ name: 'd', min: 0, max: 180, step: 5, value: 10, label: 'direction of $\\mathbf{u}$ (degrees)' }],
          readouts: [
            { label: 'scalar projection $\\mathbf{v} \\cdot \\mathbf{u} =$', expr: '3cos(d*pi/180) + 2sin(d*pi/180)', digits: 3 },
          ],
          caption: 'Here $\\mathbf{v} = (3, 2)$ and $\\mathbf{u}$ is a unit vector. The green shadow is $\\operatorname{proj}_{\\mathbf{u}}\\mathbf{v}$ and the dashed purple leftover always meets the gray line at a right angle. Past about $124^\\circ$ the scalar projection turns negative and the shadow points backwards along $\\mathbf{u}$.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: '$\\mathbf{u} \\cdot \\mathbf{u}$, not $\\|\\mathbf{u}\\|$',
          text: 'The vector projection divides by $\\mathbf{u} \\cdot \\mathbf{u} = \\|\\mathbf{u}\\|^2$: one $\\|\\mathbf{u}\\|$ to turn $\\mathbf{v} \\cdot \\mathbf{u}$ into a length, and one more to turn $\\mathbf{u}$ into a unit direction. Dividing by $\\|\\mathbf{u}\\|$ only is right for the *scalar* projection and wrong for the vector one (unless $\\|\\mathbf{u}\\| = 1$).',
        },
        {
          type: 'callout',
          variant: 'note',
          text: 'Unit 8 generalizes this to projecting onto a whole plane or subspace. That is the engine behind least-squares fitting (the best line through noisy data) and the Gram–Schmidt process.',
        },
      ],
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'fill',
      prompt: 'Compute $\\operatorname{proj}_{\\mathbf{u}}\\mathbf{v}$ for $\\mathbf{v} = (1, 2, 3)$ and $\\mathbf{u} = (1, 1, 0)$. Type each entry (decimals or fractions).',
      template: '$\\operatorname{proj}_{\\mathbf{u}}\\mathbf{v} = ($ ___ $,$ ___ $,$ ___ $)$',
      blanks: [{ answers: ['1.5'] }, { answers: ['1.5'] }, { answers: ['0'] }],
      hint: 'You need $\\mathbf{v} \\cdot \\mathbf{u}$ and $\\mathbf{u} \\cdot \\mathbf{u}$.',
      explanation: '$\\mathbf{v} \\cdot \\mathbf{u} = 1 + 2 + 0 = 3$ and $\\mathbf{u} \\cdot \\mathbf{u} = 2$, so $\\operatorname{proj}_{\\mathbf{u}}\\mathbf{v} = \\frac32(1, 1, 0) = (1.5, 1.5, 0)$. The leftover $\\mathbf{v} - \\operatorname{proj}_{\\mathbf{u}}\\mathbf{v} = (-0.5, 0.5, 3)$ has dot product $-0.5 + 0.5 + 0 = 0$ with $\\mathbf{u}$ ✓. Dividing by $\\|\\mathbf{u}\\| = \\sqrt2$ instead of $2$ would give the wrong length.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'concept',
      title: 'In the engine: lighting and sliding along walls',
      blocks: [
        {
          type: 'p',
          text: '**Diffuse lighting.** A matte surface looks brightest when light hits it head-on and darker as the light grazes it. With $\\mathbf{N}$ the unit surface normal and $\\mathbf{L}$ the unit vector from the surface toward the light, the Lambert model sets',
        },
        {
          type: 'math',
          tex: '\\text{diffuse} = \\max(0,\\; \\mathbf{N} \\cdot \\mathbf{L}) = \\max(0,\\; \\cos\\theta)',
          caption: 'Multiplied by the surface colour and the light colour. The $\\max$ turns off light arriving from behind the surface ($\\theta > 90^\\circ$).',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the cosine?',
          text: 'Picture a beam of light with cross-section area $A$. Hitting a surface head-on, it lights area $A$. Tilted by $\\theta$, the same beam smears across area $\\frac{A}{\\cos\\theta}$, so each square metre receives only $\\cos\\theta$ as much energy. That is why winter sun (low in the sky) is weak, and why this one dot product makes a sphere look round. It only works if both vectors are unit vectors — otherwise $\\mathbf{N} \\cdot \\mathbf{L}$ is $\\cos\\theta$ times their lengths.',
        },
        {
          type: 'p',
          text: '**Sliding along walls.** When a character runs into a wall at an angle, you do not want it to stop dead; you want it to slide. With $\\mathbf{n}$ the wall\'s unit normal (pointing out of the wall), the velocity $\\mathbf{v}$ heads into the wall when $\\mathbf{v} \\cdot \\mathbf{n} < 0$. Remove that component — subtract the projection onto $\\mathbf{n}$:',
        },
        {
          type: 'math',
          tex: '\\mathbf{v}_{\\text{slide}} = \\mathbf{v} - (\\mathbf{v} \\cdot \\mathbf{n})\\,\\mathbf{n} \\qquad (\\text{only when } \\mathbf{v} \\cdot \\mathbf{n} < 0)',
        },
        {
          type: 'derivation',
          title: 'Velocity $\\mathbf{v} = (-2, -1)$ meets a wall with normal $\\mathbf{n} = (0.6, 0.8)$',
          steps: [
            { tex: '\\|\\mathbf{n}\\| = \\sqrt{0.36 + 0.64} = 1', why: 'Confirm $\\mathbf{n}$ is a unit vector, so $\\operatorname{proj}_{\\mathbf{n}}\\mathbf{v} = (\\mathbf{v} \\cdot \\mathbf{n})\\mathbf{n}$.' },
            { tex: '\\mathbf{v} \\cdot \\mathbf{n} = -1.2 - 0.8 = -2 < 0', why: 'Negative: the character is moving into the wall, so we must respond.' },
            { tex: '\\mathbf{v}_{\\text{slide}} = (-2, -1) - (-2)(0.6, 0.8) = (-2 + 1.2,\\; -1 + 1.6)', why: 'Subtract the component along the normal. Subtracting a negative multiple adds.' },
            { tex: '= (-0.8,\\; 0.6), \\qquad (-0.8)(0.6) + (0.6)(0.8) = 0 \\;\\checkmark', why: 'The result is orthogonal to $\\mathbf{n}$: it runs exactly along the wall.' },
          ],
          result: 'The character keeps moving at speed $1$ along the wall instead of stopping (or tunnelling through it).',
        },
        {
          type: 'graph',
          x: [-4, 4],
          y: [-3, 3],
          equal: true,
          functions: [{ expr: '-0.75x', label: 'wall', color: 'gray' }],
          segments: [
            { from: [0, 0], to: [0.6, 0.8], color: 'green', arrow: true, label: 'n' },
            { from: ['-a', '-b'], to: [0, 0], color: 'blue', arrow: true, label: 'v' },
            { from: [0, 0], to: ['a - 0.6min(0.6a + 0.8b, 0)', 'b - 0.8min(0.6a + 0.8b, 0)'], color: 'purple', arrow: true, label: 'slide' },
          ],
          sliders: [
            { name: 'a', min: -3, max: 3, step: 0.25, value: -2, label: '$v_1$' },
            { name: 'b', min: -3, max: 3, step: 0.25, value: -1, label: '$v_2$' },
          ],
          readouts: [
            { label: '$\\mathbf{v} \\cdot \\mathbf{n} =$', expr: '0.6a + 0.8b', digits: 2 },
            { label: '$\\mathbf{v}_{\\text{slide}}$: first entry', expr: 'a - 0.6min(0.6a + 0.8b, 0)', digits: 2 },
            { label: 'second entry', expr: 'b - 0.8min(0.6a + 0.8b, 0)', digits: 2 },
          ],
          caption: 'The blue velocity arrives at the contact point on the wall; the purple arrow is where the character actually goes. When $\\mathbf{v} \\cdot \\mathbf{n} \\ge 0$ (moving away from the wall) nothing is removed.',
        },
        {
          type: 'code',
          title: 'dot_in_engine.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdio>

struct Vec3 { double x, y, z; };

double dot(Vec3 a, Vec3 b) { return a.x * b.x + a.y * b.y + a.z * b.z; }
Vec3 operator-(Vec3 a, Vec3 b) { return {a.x - b.x, a.y - b.y, a.z - b.z}; }
Vec3 operator*(double s, Vec3 v) { return {s * v.x, s * v.y, s * v.z}; }
Vec3 normalize(Vec3 v) { return (1.0 / std::sqrt(dot(v, v))) * v; }

int main() {
    // Diffuse (Lambert) lighting
    Vec3 N = {0.0, 1.0, 0.0};                // surface normal, unit length
    Vec3 L = normalize({1.0, 2.0, 2.0});     // unit vector toward the light
    double diffuse = std::fmax(0.0, dot(N, L));
    std::printf("diffuse = %.4f\\n", diffuse);

    // Sliding along a wall
    Vec3 n = {0.6, 0.8, 0.0};                // wall normal, unit length
    Vec3 v = {-2.0, -1.0, 0.0};              // velocity heading into the wall
    double into = dot(v, n);
    if (into < 0.0) v = v - into * n;        // remove the component along n
    std::printf("v.n = %.2f\\n", into);
    std::printf("slide = (%.2f, %.2f, %.2f)\\n", v.x, v.y, v.z);
    std::printf("slide.n = %.2f\\n", std::fabs(dot(v, n)));
}`,
          output: `diffuse = 0.6667
v.n = -2.00
slide = (-0.80, 0.60, 0.00)
slide.n = 0.00`,
          annotations: [
            { lines: 9, text: 'Normalize: scale by $\\frac{1}{\\|\\mathbf{v}\\|}$. $(1, 2, 2)$ has length $3$, so $\\mathbf{L} = (\\frac13, \\frac23, \\frac23)$.' },
            { lines: 15, text: '$\\mathbf{N} \\cdot \\mathbf{L} = \\frac23$: the light arrives about $48^\\circ$ from the normal, so the surface gets two-thirds of full brightness.' },
            { lines: 22, text: 'Wall sliding: subtract $(\\mathbf{v} \\cdot \\mathbf{n})\\mathbf{n}$, the projection onto the normal.' },
            { lines: 25, text: 'Rounding can leave a tiny $\\pm 10^{-17}$ here; `fabs` just keeps the printout from showing `-0.00`.' },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'error',
      prompt: 'A shader programmer computes the diffuse brightness of a surface with normal $\\mathbf{N} = (0, 1, 0)$ lit from the direction $\\mathbf{d} = (2, 2, 1)$ (pointing toward the light). Tap the first wrong line.',
      lines: [
        'Normal $\\mathbf{N} = (0, 1, 0)$, direction to light $\\mathbf{d} = (2, 2, 1)$',
        '$\\|\\mathbf{d}\\| = \\sqrt{4 + 4 + 1} = 3$',
        '$\\mathbf{L} = \\mathbf{d} / 3 = \\left(\\tfrac23, \\tfrac23, \\tfrac13\\right)$',
        'brightness $= \\max(0, \\mathbf{N} \\cdot \\mathbf{d}) = 2$, clamped to $1$ (full brightness)',
      ],
      errorLines: [4],
      explanation: 'Line 4 dots the normal with the **unnormalized** $\\mathbf{d}$ instead of $\\mathbf{L}$, so the result is $\\cos\\theta$ times $\\|\\mathbf{d}\\| = 3$ — not a brightness at all. Correctly, $\\mathbf{N} \\cdot \\mathbf{L} = 0 + \\frac23 + 0 = \\frac23$, so the surface is lit at about $67\\%$. Forgetting to normalize (or normalizing and then using the wrong variable) is one of the most common lighting bugs: surfaces come out blown-out white.',
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'order',
      prompt: 'Put the steps of a wall-slide response in order.',
      lines: [
        'Get the wall\'s unit normal $\\mathbf{n}$ from the collision',
        'Compute $\\mathbf{v} \\cdot \\mathbf{n}$',
        'If $\\mathbf{v} \\cdot \\mathbf{n} < 0$, replace $\\mathbf{v}$ by $\\mathbf{v} - (\\mathbf{v} \\cdot \\mathbf{n})\\mathbf{n}$',
        'Move the character: $\\mathbf{p} \\leftarrow \\mathbf{p} + \\Delta t\\,\\mathbf{v}$',
      ],
      distractors: ['Normalize the velocity $\\mathbf{v}$ so the character keeps full speed'],
      explanation: 'You need the normal before you can measure how much of $\\mathbf{v}$ points into the wall; you only correct $\\mathbf{v}$ when it actually points inward; and you move with the corrected velocity. The distractor is a real bug: normalizing $\\mathbf{v}$ changes the character\'s speed to $1$ and does nothing about the component into the wall.',
    },
  ],
  takeaways: [
    '$\\mathbf{u} \\cdot \\mathbf{v} = u_1v_1 + \\dots + u_nv_n$ is a scalar; it is symmetric, distributes over addition, pulls out scalars, and $\\mathbf{u} \\cdot \\mathbf{u} > 0$ unless $\\mathbf{u} = \\mathbf{0}$.',
    '$\\|\\mathbf{v}\\| = \\sqrt{\\mathbf{v} \\cdot \\mathbf{v}}$, $\\|c\\mathbf{v}\\| = |c|\\|\\mathbf{v}\\|$, normalize with $\\mathbf{v}/\\|\\mathbf{v}\\|$, and $\\operatorname{dist}(\\mathbf{u}, \\mathbf{v}) = \\|\\mathbf{u} - \\mathbf{v}\\|$.',
    '$\\mathbf{u} \\cdot \\mathbf{v} = \\|\\mathbf{u}\\|\\|\\mathbf{v}\\|\\cos\\theta$ follows from the Law of Cosines; Cauchy–Schwarz $|\\mathbf{u} \\cdot \\mathbf{v}| \\le \\|\\mathbf{u}\\|\\|\\mathbf{v}\\|$ makes the angle meaningful in every $\\mathbb{R}^n$.',
    'Orthogonal means $\\mathbf{u} \\cdot \\mathbf{v} = 0$; the sign of $\\mathbf{f} \\cdot \\mathbf{d}$ is the front/behind test, and comparing with $\\cos\\frac{\\phi}{2}$ gives a field-of-view check.',
    '$\\operatorname{proj}_{\\mathbf{u}}\\mathbf{v} = \\frac{\\mathbf{v} \\cdot \\mathbf{u}}{\\mathbf{u} \\cdot \\mathbf{u}}\\mathbf{u}$ splits $\\mathbf{v}$ into a part along $\\mathbf{u}$ and a part orthogonal to it.',
    'Diffuse light is $\\max(0, \\mathbf{N} \\cdot \\mathbf{L})$ with **unit** vectors; wall sliding removes $(\\mathbf{v} \\cdot \\mathbf{n})\\mathbf{n}$.',
  ],
  reading: [
    {
      title: '3Blue1Brown — Essence of linear algebra',
      url: 'https://www.3blue1brown.com/topics/linear-algebra',
      source: 'video',
      note: 'The chapter "Dot products and duality" explains why projecting and multiplying entries give the same number.',
    },
    {
      title: 'Interactive Linear Algebra (Margalit & Rabinoff)',
      url: 'https://textbooks.math.gatech.edu/ila/',
      source: 'book',
      note: 'Section 6.1, "Dot Products and Orthogonality", covers lengths, distances, unit vectors and orthogonality in $\\mathbb{R}^n$ with careful proofs.',
    },
    {
      title: 'Wikipedia — Cauchy–Schwarz inequality',
      url: 'https://en.wikipedia.org/wiki/Cauchy%E2%80%93Schwarz_inequality',
      source: 'wikipedia',
      note: 'Several different proofs of the inequality, including the discriminant argument used in this lesson.',
    },
    {
      title: 'Wikipedia — Lambertian reflectance',
      url: 'https://en.wikipedia.org/wiki/Lambertian_reflectance',
      source: 'wikipedia',
      note: 'Where the $\\mathbf{N} \\cdot \\mathbf{L}$ diffuse model comes from and how it is used in computer graphics.',
    },
  ],
};
