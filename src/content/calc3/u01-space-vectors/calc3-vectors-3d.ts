import type { Lesson } from '../../types';

const SVG_CROSS = /*SVG:c3-u01/c3w1-cross*/ `<svg viewBox="0 0 470 310" xmlns="http://www.w3.org/2000/svg">
<polygon points="170.0,205.0 146.0,262.5 318.7,243.3 342.7,185.8" fill="currentColor" fill-opacity="0.2" stroke="none" class="f-teal"/>
<line x1="146.0" y1="262.5" x2="318.7" y2="243.3" stroke="currentColor" class="s-teal" stroke-width="1.2" stroke-dasharray="5 4"/>
<line x1="342.7" y1="185.8" x2="318.7" y2="243.3" stroke="currentColor" class="s-teal" stroke-width="1.2" stroke-dasharray="5 4"/>
<line x1="170.0" y1="205.0" x2="148.3" y2="256.9" stroke="currentColor" class="s-blue" stroke-width="2.6"/><path d="M146.0,262.5 L145.9,252.5 L153.1,255.5 Z" fill="currentColor" stroke="none" class="f-blue"/>
<line x1="170.0" y1="205.0" x2="336.7" y2="186.5" stroke="currentColor" class="s-red" stroke-width="2.6"/><path d="M342.7,185.8 L333.9,190.7 L333.1,183.0 Z" fill="currentColor" stroke="none" class="f-red"/>
<line x1="170.0" y1="205.0" x2="170.0" y2="74.2" stroke="currentColor" class="s-purple" stroke-width="2.8"/><path d="M170.0,68.2 L173.9,77.4 L166.1,77.4 Z" fill="currentColor" stroke="none" class="f-purple"/>
<text x="134.0" y="270.5" font-size="18" text-anchor="end" class="t-blue" font-style="italic">a</text>
<text x="348.7" y="205.8" font-size="18" text-anchor="start" class="t-red" font-style="italic">b</text>
<text x="180.0" y="72.2" font-size="17" text-anchor="start" class="t-purple" font-style="italic">a × b</text>
<polyline points="164.5,218.1 166.5,217.8 168.4,217.5 170.4,217.1 172.3,216.8 174.3,216.3 176.2,215.9 178.1,215.4 180.0,214.9 181.9,214.4 183.8,213.9 185.6,213.3 187.4,212.7 189.1,212.1 190.8,211.5 192.5,210.9 194.1,210.3 195.6,209.6 197.1,208.9 198.5,208.3 199.8,207.6 201.1,206.9 202.3,206.2 203.4,205.5 204.5,204.8 205.5,204.1 206.3,203.4 207.1,202.7 207.9,202.0 208.5,201.3 209.0,200.7" fill="none" stroke="currentColor" stroke-width="1.4"/>
<text x="203.2" y="218.2" font-size="15" text-anchor="middle" font-style="italic">θ</text>
<text x="264.3" y="230.2" font-size="14" text-anchor="middle" class="t-teal">area = |a × b|</text>
<polyline points="170.0,191.7 183.3,191.7 183.3,205.0" fill="none" stroke="currentColor" stroke-width="1.2"/>
<polyline points="147.4,118.7 146.7,119.5 146.2,120.3 146.0,121.1 146.1,122.0 146.4,122.8 146.9,123.6 147.7,124.4 148.8,125.2 150.1,125.9 151.6,126.5 153.3,127.2 155.2,127.7 157.3,128.2 159.5,128.6 161.8,128.9 164.2,129.2 166.7,129.3 169.2,129.4 171.7,129.4 174.2,129.3 176.6,129.1 179.0,128.8 181.3,128.5 183.4,128.0 185.4,127.5 187.3,127.0 188.9,126.3 190.4,125.6 191.6,124.9 192.6,124.1 193.3,123.3 193.8,122.5 194.0,121.7 193.9,120.8 193.6,120.0 193.1,119.2 192.3,118.4 191.2,117.6 189.9,116.9" fill="none" stroke="currentColor" stroke-width="2" class="s-orange"/>
<path d="M188.4,116.3 L197.4,116.8 L194.3,123.1 Z" fill="currentColor" stroke="none" class="f-orange"/>
<text x="138.0" y="109.4" font-size="13" text-anchor="end" class="t-orange">curl a → b</text>
<text x="345.0" y="50.0" font-size="15" text-anchor="middle">|a × b| = |a| |b| sin θ</text>
</svg>`;

export const lesson: Lesson = {
  id: 'calc3-vectors-3d',
  title: 'Vectors, Dot and Cross Products in Space',
  summary: 'A brisk recap of 3D vectors and the dot product, then the geometry that makes them indispensable: projections, the cross product as area and normal, the triple product as volume, and the lighting and back-face culling every renderer runs.',
  minutes: 19,
  objectives: [
    'Compute components, magnitudes and unit vectors of vectors in space',
    'Use the dot product to find angles, test orthogonality and project one vector onto another',
    'Compute a cross product and use the right-hand rule to predict its direction',
    'Find areas of parallelograms and triangles and volumes of parallelepipeds with $|\\vec{a} \\times \\vec{b}|$ and $\\vec{a} \\cdot (\\vec{b} \\times \\vec{c})$',
    'Compute a triangle\'s face normal and use it for diffuse lighting and back-face culling',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Vectors in space: a quick recap',
      blocks: [
        {
          type: 'p',
          text: 'You met [[vector|vectors]] in Linear Algebra; in space nothing changes except that there are three [[vector-components|components]]. We write $\\vec{v} = \\langle v_1, v_2, v_3 \\rangle$ with angle brackets, to keep vectors visibly different from points $(x, y, z)$. With the standard unit vectors $\\mathbf{i} = \\langle 1, 0, 0 \\rangle$, $\\mathbf{j} = \\langle 0, 1, 0 \\rangle$, $\\mathbf{k} = \\langle 0, 0, 1 \\rangle$ (the notation this course uses), $\\vec{v} = v_1\\mathbf{i} + v_2\\mathbf{j} + v_3\\mathbf{k}$.',
        },
        {
          type: 'list',
          items: [
            '**From $P$ to $Q$:** $\\overrightarrow{PQ} = \\langle x_2 - x_1, y_2 - y_1, z_2 - z_1 \\rangle$ — head minus tail. The [[position-vector]] of a point $P$ is $\\overrightarrow{OP}$.',
            '**Length:** $|\\vec{v}| = \\sqrt{v_1^2 + v_2^2 + v_3^2}$, the 3D distance formula applied to the arrow.',
            '**Arithmetic:** add and scale componentwise; $c\\vec{v}$ stretches by $|c|$ and reverses if $c < 0$.',
            '**Direction only:** the [[unit-vector]] $\\hat{v} = \\vec{v} / |\\vec{v}|$ has length $1$ (for $\\vec{v} \\ne \\vec{0}$).',
          ],
        },
        {
          type: 'derivation',
          title: 'The vector from $P(1, 2, -1)$ to $Q(4, -2, 11)$, its length and direction',
          steps: [
            { tex: '\\overrightarrow{PQ} = \\langle 4 - 1,\\ -2 - 2,\\ 11 - (-1) \\rangle = \\langle 3, -4, 12 \\rangle', why: 'Head minus tail, component by component.' },
            { tex: '|\\overrightarrow{PQ}| = \\sqrt{9 + 16 + 144} = \\sqrt{169} = 13', why: 'Square, add, take the root: the distance from $P$ to $Q$.' },
            { tex: '\\hat{u} = \\tfrac{1}{13}\\langle 3, -4, 12 \\rangle = \\left\\langle \\tfrac{3}{13}, -\\tfrac{4}{13}, \\tfrac{12}{13} \\right\\rangle', why: 'Divide by the length. Check: $\\frac{9 + 16 + 144}{169} = 1$.' },
          ],
          result: 'Moving $13$ units from $P$ in the direction $\\hat{u}$ lands exactly on $Q$: $P + 13\\hat{u} = Q$.',
        },
        {
          type: 'plot3d',
          x: [-1, 5],
          y: [-1, 5],
          z: [-1, 5],
          equal: true,
          vectors: [
            { from: [0, 0, 0], to: ['a', 'b', 'c'], label: 'v at O', color: 'blue' },
            { from: [1, 3, 0.5], to: ['1 + a', '3 + b', '0.5 + c'], label: 'v at P', color: 'blue' },
          ],
          curves: [
            { x: 'a*t', y: '0', z: '0', t: [0, 1], color: 'red' },
            { x: 'a', y: 'b*t', z: '0', t: [0, 1], color: 'green' },
            { x: 'a', y: 'b', z: 'c*t', t: [0, 1], color: 'purple' },
          ],
          points: [{ x: 1, y: 3, z: 0.5, label: 'P', color: 'gray' }],
          sliders: [
            { name: 'a', min: -1, max: 3, step: 0.5, value: 2, label: '$v_1$' },
            { name: 'b', min: -1, max: 2, step: 0.5, value: 1, label: '$v_2$' },
            { name: 'c', min: -1, max: 3, step: 0.5, value: 2.5, label: '$v_3$' },
          ],
          readouts: [{ label: '$|\\vec{v}| =$', expr: 'sqrt(a^2 + b^2 + c^2)' }],
          view: { azimuth: 35, elevation: 20 },
          caption: 'A vector is a length and a direction, not a location: both blue arrows are the same $\\vec{v}$. The red, green and purple legs are $v_1\\mathbf{i}$, $v_2\\mathbf{j}$ and $v_3\\mathbf{k}$, which add up to $\\vec{v}$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'numeric',
      prompt: 'Find the length of $\\vec{v} = 2\\mathbf{i} - 3\\mathbf{j} + 6\\mathbf{k}$.',
      label: '$|\\vec{v}| =$',
      answer: '7',
      explanation: '$|\\vec{v}| = \\sqrt{2^2 + (-3)^2 + 6^2} = \\sqrt{4 + 9 + 36} = \\sqrt{49} = 7$. The negative component contributes $+9$; squaring removes every sign. So $\\frac{1}{7}\\langle 2, -3, 6 \\rangle$ is the unit vector in the same direction.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'The dot product measures alignment',
      blocks: [
        {
          type: 'p',
          text: 'The [[dot-product]] multiplies matching components and adds: $\\vec{a} \\cdot \\vec{b} = a_1b_1 + a_2b_2 + a_3b_3$. It is a **number**, and it has a geometric meaning that does not depend on the axes at all:',
        },
        {
          type: 'theorem',
          name: 'Dot product and angle',
          tex: '\\vec{a} \\cdot \\vec{b} = |\\vec{a}|\\,|\\vec{b}|\\cos\\theta, \\qquad \\cos\\theta = \\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{a}|\\,|\\vec{b}|}, \\quad 0 \\le \\theta \\le \\pi',
          text: 'Positive means the vectors point roughly the same way ($\\theta < 90^\\circ$), zero means [[orthogonal]], negative means they point roughly opposite ($\\theta > 90^\\circ$).',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the two formulas agree',
          text: 'Apply the [[law-of-cosines]] to the triangle with sides $\\vec{a}$, $\\vec{b}$ and $\\vec{a} - \\vec{b}$: $|\\vec{a} - \\vec{b}|^2 = |\\vec{a}|^2 + |\\vec{b}|^2 - 2|\\vec{a}||\\vec{b}|\\cos\\theta$. Expanding the left side with the algebra rules of the dot product gives $|\\vec{a}|^2 - 2\\,\\vec{a} \\cdot \\vec{b} + |\\vec{b}|^2$. Compare: $\\vec{a} \\cdot \\vec{b} = |\\vec{a}||\\vec{b}|\\cos\\theta$.',
        },
        {
          type: 'derivation',
          title: 'The angle between $\\vec{a} = \\langle 1, 2, 2 \\rangle$ and $\\vec{b} = \\langle 2, -1, 2 \\rangle$',
          steps: [
            { tex: '\\vec{a} \\cdot \\vec{b} = (1)(2) + (2)(-1) + (2)(2) = 4', why: 'Multiply matching components and add.' },
            { tex: '|\\vec{a}| = \\sqrt{1 + 4 + 4} = 3, \\quad |\\vec{b}| = \\sqrt{4 + 1 + 4} = 3', why: 'Lengths for the denominator.' },
            { tex: '\\cos\\theta = \\frac{4}{3 \\cdot 3} = \\frac{4}{9}', why: 'Solve the geometric formula for $\\cos\\theta$.' },
            { tex: '\\theta = \\arccos\\tfrac{4}{9} \\approx 1.1102 \\text{ rad} \\approx 63.6^\\circ', why: '$\\arccos$ returns an angle in $[0, \\pi]$, exactly the range of angles between vectors.' },
          ],
          result: 'The vectors meet at about $63.6^\\circ$: positive dot product, acute angle.',
        },
        {
          type: 'plot3d',
          x: [-2.5, 2.5],
          y: [-2.5, 2.5],
          z: [-2.5, 2.5],
          equal: true,
          vectors: [
            { from: [0, 0, 0], to: [1, 2, 2], label: 'a', color: 'blue' },
            { from: [0, 0, 0], to: ['2cos(s)', '2sin(s)', 1], label: 'b', color: 'red' },
          ],
          curves: [{ x: '2cos(t)', y: '2sin(t)', z: '1', t: [0, '2pi'], color: 'gray', dashed: true }],
          sliders: [{ name: 's', min: 0, max: 6.28, step: 0.02, value: 2, label: 'turn $\\vec{b}$', play: true, loop: true, speed: 0.8 }],
          readouts: [
            { label: '$\\vec{a} \\cdot \\vec{b} =$', expr: '2cos(s) + 4sin(s) + 2' },
            { label: '$\\theta$ (degrees) $=$', expr: 'arccos((2cos(s) + 4sin(s) + 2)/(3sqrt(5)))*180/pi', digits: 1 },
          ],
          view: { azimuth: 30, elevation: 25 },
          caption: 'Press ▶ to swing $\\vec{b} = \\langle 2\\cos s, 2\\sin s, 1 \\rangle$ around the dashed circle. The dot product is positive while the angle is under $90^\\circ$, passes through $0$ exactly when the arrows are perpendicular, and is negative beyond.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Vision cones without trigonometry',
          text: 'An AI guard with unit forward vector $\\hat{f}$ sees a target at offset $\\vec{d}$ if the angle between them is under half its field of view $\\alpha$: $\\hat{f} \\cdot \\hat{d} \\ge \\cos\\alpha$. Precompute $\\cos\\alpha$ once and the per-frame test is three multiplies and a compare — no `acos`. The same test, with $\\hat{f}$ the camera direction, culls objects behind the player.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'numeric',
      prompt: 'Find the angle, in degrees, between $\\vec{a} = \\langle 1, 1, 0 \\rangle$ and $\\vec{b} = \\langle 0, 1, 1 \\rangle$.',
      hint: 'Both vectors have length $\\sqrt{2}$.',
      label: '$\\theta =$',
      unit: 'degrees',
      answer: '60',
      explanation: '$\\vec{a} \\cdot \\vec{b} = 0 + 1 + 0 = 1$ and $|\\vec{a}| = |\\vec{b}| = \\sqrt{2}$, so $\\cos\\theta = \\frac{1}{\\sqrt{2}\\sqrt{2}} = \\frac{1}{2}$ and $\\theta = 60^\\circ$. Geometrically these are diagonals of two adjacent faces of a unit cube, and with the face diagonal $\\langle 1, 0, -1 \\rangle$ joining their tips they form an equilateral triangle.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Projections: splitting a vector along a direction',
      blocks: [
        {
          type: 'p',
          text: 'How much of $\\vec{a}$ points along $\\vec{b}$? Drop a perpendicular from the tip of $\\vec{a}$ to the line of $\\vec{b}$. The signed length of the shadow is the [[la-scalar-projection|scalar projection]], and the shadow itself is the [[vector-projection]]:',
        },
        {
          type: 'theorem',
          name: 'Projection of $\\vec{a}$ onto $\\vec{b}$',
          tex: '\\operatorname{comp}_{\\vec{b}}\\vec{a} = \\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{b}|}, \\qquad \\operatorname{proj}_{\\vec{b}}\\vec{a} = \\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{b}|^2}\\,\\vec{b}',
          text: 'Then $\\vec{a} = \\operatorname{proj}_{\\vec{b}}\\vec{a} + \\vec{a}_{\\perp}$, where $\\vec{a}_{\\perp} = \\vec{a} - \\operatorname{proj}_{\\vec{b}}\\vec{a}$ is orthogonal to $\\vec{b}$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why $|\\vec{b}|^2$ in the vector projection',
          text: 'The shadow has signed length $\\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{b}|}$ and direction $\\frac{\\vec{b}}{|\\vec{b}|}$. Multiply them: one $|\\vec{b}|$ from each factor. If $\\vec{b}$ is already a unit vector both denominators are $1$, which is why game code normalizes first and writes `dot(a, n) * n`.',
        },
        {
          type: 'derivation',
          title: 'Split $\\vec{a} = \\langle 3, 0, 6 \\rangle$ along $\\vec{b} = \\langle 2, -1, 2 \\rangle$',
          steps: [
            { tex: '\\vec{a} \\cdot \\vec{b} = 6 + 0 + 12 = 18, \\qquad |\\vec{b}| = 3', why: 'The two ingredients.' },
            { tex: '\\operatorname{comp}_{\\vec{b}}\\vec{a} = \\tfrac{18}{3} = 6', why: 'The shadow of $\\vec{a}$ on the line of $\\vec{b}$ is $6$ units long.' },
            { tex: '\\operatorname{proj}_{\\vec{b}}\\vec{a} = \\tfrac{18}{9}\\langle 2, -1, 2 \\rangle = \\langle 4, -2, 4 \\rangle', why: 'Divide by $|\\vec{b}|^2 = 9$, then scale $\\vec{b}$. Its length is $6$, matching the scalar projection.' },
            { tex: '\\vec{a}_{\\perp} = \\langle 3, 0, 6 \\rangle - \\langle 4, -2, 4 \\rangle = \\langle -1, 2, 2 \\rangle', why: 'Whatever is left over is the perpendicular part.' },
            { tex: '\\vec{a}_{\\perp} \\cdot \\vec{b} = -2 - 2 + 4 = 0 \\ \\checkmark', why: 'Always worth checking: the leftover must be orthogonal to $\\vec{b}$.' },
          ],
          result: '$\\langle 3, 0, 6 \\rangle = \\langle 4, -2, 4 \\rangle + \\langle -1, 2, 2 \\rangle$: one part along $\\vec{b}$, one perpendicular to it.',
        },
        {
          type: 'plot3d',
          x: [-2, 5],
          y: [-3, 4],
          z: [-1, 6],
          equal: true,
          curves: [{ x: '2t', y: '-t', z: '2t', t: [-0.6, 2.4], color: 'gray', dashed: true, label: 'line of $\\vec{b}$' }],
          vectors: [
            { from: [0, 0, 0], to: [2, -1, 2], label: 'b', color: 'red' },
            { from: [0, 0, 0], to: [3, 'p', 6], label: 'a', color: 'blue' },
            { from: [0, 0, 0], to: ['2(18 - p)/9', '-(18 - p)/9', '2(18 - p)/9'], label: 'proj', color: 'green' },
            { from: ['2(18 - p)/9', '-(18 - p)/9', '2(18 - p)/9'], to: [3, 'p', 6], label: 'a⊥', color: 'purple' },
          ],
          sliders: [{ name: 'p', min: -3, max: 3, step: 0.25, value: 0, label: '$a_2$' }],
          readouts: [
            { label: '$\\operatorname{comp}_{\\vec{b}}\\vec{a} = \\frac{18 - a_2}{3} =$', expr: '(18 - p)/3' },
            { label: '$\\vec{a}_{\\perp} \\cdot \\vec{b} =$', expr: '2(3 - 2(18 - p)/9) - (p + (18 - p)/9) + 2(6 - 2(18 - p)/9)' },
          ],
          view: { azimuth: 25, elevation: 18 },
          caption: 'With $\\vec{a} = \\langle 3, a_2, 6 \\rangle$: the green shadow lies on the line of $\\vec{b}$, and the purple remainder always meets it at a right angle (its dot product with $\\vec{b}$ stays $0$).',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Sliding along walls',
          text: 'When a character runs into a wall with unit normal $\\hat{n}$, engines remove the part of the velocity that points into the wall and keep the rest: $\\vec{v}_{\\text{new}} = \\vec{v} - (\\vec{v} \\cdot \\hat{n})\\hat{n}$. That is $\\vec{v}_\\perp$ relative to $\\hat{n}$ — the reason you glide along walls instead of sticking. Reflecting instead (a bouncing grenade) subtracts it twice: $\\vec{v} - 2(\\vec{v} \\cdot \\hat{n})\\hat{n}$. In physics, the [[work]] done by a constant force over a displacement $\\vec{d}$ is $\\vec{F} \\cdot \\vec{d}$: only the component of force along the motion counts.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'error',
      prompt: 'A student projects $\\vec{a} = \\langle 1, 2, 3 \\rangle$ onto $\\vec{b} = \\langle 1, 1, 0 \\rangle$. Tap the first wrong line.',
      lines: [
        '$\\vec{a} \\cdot \\vec{b} = 1 + 2 + 0 = 3$',
        '$|\\vec{b}| = \\sqrt{1 + 1 + 0} = \\sqrt{2}$',
        '$\\operatorname{proj}_{\\vec{b}}\\vec{a} = \\dfrac{\\vec{a} \\cdot \\vec{b}}{|\\vec{b}|}\\,\\vec{b} = \\dfrac{3}{\\sqrt{2}}\\langle 1, 1, 0 \\rangle$',
        '$\\operatorname{proj}_{\\vec{b}}\\vec{a} \\approx \\langle 2.12, 2.12, 0 \\rangle$',
      ],
      errorLines: [3],
      explanation: 'Line 3 divides by $|\\vec{b}|$ instead of $|\\vec{b}|^2$. That formula would only be right for a unit vector $\\vec{b}$. Correctly, $\\operatorname{proj}_{\\vec{b}}\\vec{a} = \\frac{3}{2}\\langle 1, 1, 0 \\rangle = \\langle 1.5, 1.5, 0 \\rangle$, whose length is $\\frac{3}{\\sqrt{2}}$ — the scalar projection. The student\'s vector has length $3$, longer than the shadow can be. Check: $\\langle 1, 2, 3 \\rangle - \\langle 1.5, 1.5, 0 \\rangle = \\langle -0.5, 0.5, 3 \\rangle$ is orthogonal to $\\vec{b}$.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'The cross product',
      blocks: [
        {
          type: 'p',
          text: 'The dot product turns two vectors into a number. The [[cross-product]] turns two vectors in space into a **vector** perpendicular to both. It is easiest to remember as a formal determinant with $\\mathbf{i}, \\mathbf{j}, \\mathbf{k}$ in the top row:',
        },
        {
          type: 'math',
          tex: '\\vec{a} \\times \\vec{b} = \\begin{vmatrix} \\mathbf{i} & \\mathbf{j} & \\mathbf{k} \\\\ a_1 & a_2 & a_3 \\\\ b_1 & b_2 & b_3 \\end{vmatrix} = \\langle a_2b_3 - a_3b_2,\\ \\ a_3b_1 - a_1b_3,\\ \\ a_1b_2 - a_2b_1 \\rangle',
          caption: 'Expanding along the top row gives $+\\mathbf{i}(\\dots) - \\mathbf{j}(\\dots) + \\mathbf{k}(\\dots)$. The minus sign on the middle term is the classic trap; writing it as $a_3b_1 - a_1b_3$ builds the sign in.',
        },
        {
          type: 'derivation',
          title: 'Compute $\\langle 1, 2, 3 \\rangle \\times \\langle 4, 5, 6 \\rangle$',
          steps: [
            { tex: '\\mathbf{i}:\\ (2)(6) - (3)(5) = 12 - 15 = -3', why: 'Cover the $\\mathbf{i}$ column; the remaining $2 \\times 2$ determinant is $a_2b_3 - a_3b_2$.' },
            { tex: '\\mathbf{j}:\\ -\\big[(1)(6) - (3)(4)\\big] = -(6 - 12) = 6', why: 'Cover the $\\mathbf{j}$ column, take the determinant, and **negate** it (the checkerboard sign).' },
            { tex: '\\mathbf{k}:\\ (1)(5) - (2)(4) = -3', why: 'Cover the $\\mathbf{k}$ column: $a_1b_2 - a_2b_1$.' },
            { tex: '\\vec{a} \\times \\vec{b} = \\langle -3, 6, -3 \\rangle', why: 'Assemble the components.' },
            { tex: '\\langle -3, 6, -3 \\rangle \\cdot \\langle 1, 2, 3 \\rangle = -3 + 12 - 9 = 0', why: 'Check orthogonality to $\\vec{a}$ (and similarly to $\\vec{b}$: $-12 + 30 - 18 = 0$). This catches almost every sign slip.' },
          ],
          result: '$\\langle 1, 2, 3 \\rangle \\times \\langle 4, 5, 6 \\rangle = \\langle -3, 6, -3 \\rangle$, perpendicular to both.',
        },
        {
          type: 'figure',
          svg: SVG_CROSS,
          alt: 'Vectors a and b in a horizontal plane spanning a shaded parallelogram, with a times b pointing straight up and a curved arrow showing the rotation from a toward b.',
          caption: '[[right-hand-rule|Right-hand rule]]: curl your fingers from $\\vec{a}$ toward $\\vec{b}$ (through the smaller angle); your thumb points along $\\vec{a} \\times \\vec{b}$. Its length is the area of the parallelogram they span.',
          maxWidth: 470,
        },
        {
          type: 'list',
          items: [
            '$\\vec{a} \\times \\vec{b}$ is orthogonal to both $\\vec{a}$ and $\\vec{b}$.',
            '**Anticommutative:** $\\vec{b} \\times \\vec{a} = -(\\vec{a} \\times \\vec{b})$. Order matters.',
            '$\\vec{a} \\times \\vec{a} = \\vec{0}$; more generally $\\vec{a} \\times \\vec{b} = \\vec{0}$ exactly when the vectors are parallel (or one is $\\vec{0}$).',
            'Cyclic rule: $\\mathbf{i} \\times \\mathbf{j} = \\mathbf{k}$, $\\mathbf{j} \\times \\mathbf{k} = \\mathbf{i}$, $\\mathbf{k} \\times \\mathbf{i} = \\mathbf{j}$; going backward around the cycle gives the negatives.',
            'It distributes over addition, but it is **not associative**: $\\mathbf{i} \\times (\\mathbf{i} \\times \\mathbf{j}) = \\mathbf{i} \\times \\mathbf{k} = -\\mathbf{j}$, while $(\\mathbf{i} \\times \\mathbf{i}) \\times \\mathbf{j} = \\vec{0}$.',
          ],
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the determinant gives a perpendicular vector',
          text: 'Dotting $\\vec{a} \\times \\vec{b}$ with any $\\vec{c}$ just replaces the symbols $\\mathbf{i}, \\mathbf{j}, \\mathbf{k}$ in the top row by $c_1, c_2, c_3$: $\\vec{c} \\cdot (\\vec{a} \\times \\vec{b}) = \\det[\\vec{c}; \\vec{a}; \\vec{b}]$. Take $\\vec{c} = \\vec{a}$ and the determinant has two equal rows, so it is $0$. Same for $\\vec{c} = \\vec{b}$. Perpendicularity is built into the formula.',
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'fill',
      prompt: 'Use the cyclic rule to fill in the products of the standard unit vectors.',
      template: '$\\mathbf{j} \\times \\mathbf{k} =$ ___ , $\\quad \\mathbf{k} \\times \\mathbf{j} =$ ___ , $\\quad \\mathbf{k} \\times \\mathbf{k} =$ ___',
      blanks: [{ answers: ['$\\mathbf{i}$'] }, { answers: ['$-\\mathbf{i}$'] }, { answers: ['$\\vec{0}$'] }],
      wordBank: ['$\\mathbf{i}$', '$-\\mathbf{i}$', '$\\vec{0}$', '$\\mathbf{k}$', '$-\\mathbf{j}$', '$1$'],
      explanation: 'Going forward around the cycle $\\mathbf{i} \\to \\mathbf{j} \\to \\mathbf{k} \\to \\mathbf{i}$ gives the next vector: $\\mathbf{j} \\times \\mathbf{k} = \\mathbf{i}$. Reversing the order reverses the sign: $\\mathbf{k} \\times \\mathbf{j} = -\\mathbf{i}$. Any vector crossed with itself is the zero **vector** $\\vec{0}$ (not the number $1$ — that is $\\mathbf{k} \\cdot \\mathbf{k}$).',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'numeric',
      prompt: 'Let $\\vec{a} = \\langle 2, -1, 3 \\rangle$ and $\\vec{b} = \\langle 1, 4, -2 \\rangle$. Find the $\\mathbf{j}$-component (the middle component) of $\\vec{a} \\times \\vec{b}$.',
      hint: 'The middle component is $a_3b_1 - a_1b_3$, i.e. minus the determinant $\\begin{vmatrix} a_1 & a_3 \\\\ b_1 & b_3 \\end{vmatrix}$.',
      answer: '7',
      explanation: '$a_3b_1 - a_1b_3 = (3)(1) - (2)(-2) = 3 + 4 = 7$. The full product is $\\langle (-1)(-2) - (3)(4),\\ 7,\\ (2)(4) - (-1)(1) \\rangle = \\langle -10, 7, 9 \\rangle$. Check: $\\langle -10, 7, 9 \\rangle \\cdot \\langle 2, -1, 3 \\rangle = -20 - 7 + 27 = 0$. Forgetting the checkerboard minus gives $-7$.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'concept',
      title: 'Length of the cross product = area',
      blocks: [
        {
          type: 'theorem',
          name: 'Magnitude of the cross product',
          tex: '|\\vec{a} \\times \\vec{b}| = |\\vec{a}|\\,|\\vec{b}|\\sin\\theta',
          text: 'This is the area of the parallelogram with sides $\\vec{a}$ and $\\vec{b}$: base $|\\vec{a}|$ times height $|\\vec{b}|\\sin\\theta$. The triangle with those two sides has half that area.',
        },
        {
          type: 'plot3d',
          x: [-2.5, 2.5],
          y: [-2.5, 2.5],
          z: [-3.2, 3.2],
          equal: true,
          parametricSurfaces: [{ x: '2u + 1.5v*cos(s)', y: '1.5v*sin(s)', z: '0', u: [0, 1], v: [0, 1], color: 'teal', opacity: 0.6 }],
          vectors: [
            { from: [0, 0, 0], to: [2, 0, 0], label: 'a', color: 'blue' },
            { from: [0, 0, 0], to: ['1.5cos(s)', '1.5sin(s)', 0], label: 'b', color: 'red' },
            { from: [0, 0, 0], to: [0, 0, '3sin(s)'], label: 'a×b', color: 'purple' },
          ],
          sliders: [{ name: 's', min: -3.1, max: 3.1, step: 0.02, value: 1.2, label: 'angle from $\\vec{a}$ to $\\vec{b}$ (radians)', play: true, loop: true }],
          readouts: [{ label: 'area $= |\\vec{a} \\times \\vec{b}| = 3|\\sin s| =$', expr: 'abs(3sin(s))' }],
          resolution: 8,
          view: { azimuth: 35, elevation: 22 },
          caption: '$\\vec{a} = \\langle 2, 0, 0 \\rangle$, $\\vec{b} = \\langle 1.5\\cos s, 1.5\\sin s, 0 \\rangle$, so $\\vec{a} \\times \\vec{b} = \\langle 0, 0, 3\\sin s \\rangle$. The purple arrow is as long as the teal area, vanishes when the vectors line up, and flips downward when $\\vec{b}$ passes to the other side of $\\vec{a}$.',
        },
        {
          type: 'derivation',
          title: 'Area of the triangle with vertices $P(1, 0, 0)$, $Q(0, 2, 0)$, $R(0, 0, 3)$',
          steps: [
            { tex: '\\overrightarrow{PQ} = \\langle -1, 2, 0 \\rangle, \\quad \\overrightarrow{PR} = \\langle -1, 0, 3 \\rangle', why: 'Two edges from the same vertex.' },
            { tex: '\\overrightarrow{PQ} \\times \\overrightarrow{PR} = \\langle (2)(3) - (0)(0),\\ (0)(-1) - (-1)(3),\\ (-1)(0) - (2)(-1) \\rangle', why: 'Component formula $\\langle a_2b_3 - a_3b_2,\\ a_3b_1 - a_1b_3,\\ a_1b_2 - a_2b_1 \\rangle$.' },
            { tex: '= \\langle 6, 3, 2 \\rangle, \\qquad |\\langle 6, 3, 2 \\rangle| = \\sqrt{36 + 9 + 4} = 7', why: 'The parallelogram on $\\overrightarrow{PQ}$ and $\\overrightarrow{PR}$ has area $7$.' },
            { tex: '\\text{Area}(\\triangle PQR) = \\tfrac{1}{2} \\cdot 7 = \\tfrac{7}{2}', why: 'A diagonal cuts the parallelogram into two congruent triangles.' },
          ],
          result: 'The triangle has area $\\frac{7}{2}$. Keep the vector $\\langle 6, 3, 2 \\rangle$ in mind: it is perpendicular to the triangle, and the next lesson uses it as the normal of the plane through $P$, $Q$, $R$.',
        },
        {
          type: 'deepdive',
          title: 'Proof that $|\\vec{a} \\times \\vec{b}| = |\\vec{a}||\\vec{b}|\\sin\\theta$',
          blocks: [
            {
              type: 'p',
              text: 'Expanding both sides in components verifies **Lagrange\'s identity** $|\\vec{a} \\times \\vec{b}|^2 = |\\vec{a}|^2|\\vec{b}|^2 - (\\vec{a} \\cdot \\vec{b})^2$ (it is a page of algebra; every cross term cancels). Then substitute the dot-product formula:',
            },
            { type: 'math', tex: '|\\vec{a} \\times \\vec{b}|^2 = |\\vec{a}|^2|\\vec{b}|^2 - |\\vec{a}|^2|\\vec{b}|^2\\cos^2\\theta = |\\vec{a}|^2|\\vec{b}|^2\\sin^2\\theta' },
            {
              type: 'p',
              text: 'Since $0 \\le \\theta \\le \\pi$, $\\sin\\theta \\ge 0$, so taking square roots gives the theorem. The [[la-torque|torque]] $\\vec{\\tau} = \\vec{r} \\times \\vec{F}$ inherits this: its size $|\\vec{r}||\\vec{F}|\\sin\\theta$ is largest when you push perpendicular to the wrench.',
            },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'numeric',
      prompt: 'Find the area of the triangle with vertices $A(1, 0, 0)$, $B(2, 1, 0)$ and $C(1, 1, 1)$. An exact answer or a decimal to at least 2 places is fine.',
      hint: '$\\overrightarrow{AB} = \\langle 1, 1, 0 \\rangle$ and $\\overrightarrow{AC} = \\langle 0, 1, 1 \\rangle$.',
      label: 'Area $=$',
      answer: 'sqrt(3)/2',
      answerTex: '\\frac{\\sqrt{3}}{2} \\approx 0.866',
      explanation: '$\\overrightarrow{AB} \\times \\overrightarrow{AC} = \\langle (1)(1) - (0)(1),\\ (0)(0) - (1)(1),\\ (1)(1) - (1)(0) \\rangle = \\langle 1, -1, 1 \\rangle$, whose length is $\\sqrt{3}$. That is the parallelogram; the triangle is half: $\\frac{\\sqrt{3}}{2} \\approx 0.866$. (It is equilateral — every side is $\\sqrt{2}$ — and $\\frac{\\sqrt{3}}{4}(\\sqrt{2})^2$ agrees.)',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'concept',
      title: 'Face normals, lighting and back-face culling',
      blocks: [
        {
          type: 'p',
          text: 'Every 3D model is a mesh of triangles, and the renderer needs to know which way each one faces. For a triangle $A, B, C$ the cross product of two edges gives a [[la-surface-normal|face normal]] $\\vec{n} = (B - A) \\times (C - A)$. The right-hand rule ties its direction to the vertex order: if $A \\to B \\to C$ runs counterclockwise as seen from outside, $\\vec{n}$ points outward. That convention is the [[la-winding-order|winding order]].',
        },
        {
          type: 'list',
          items: [
            '**Diffuse (Lambert) lighting:** with unit normal $\\hat{n}$ and unit vector $\\hat{L}$ toward the light, brightness $= \\max(0, \\hat{n} \\cdot \\hat{L})$ — the cosine of the angle of incidence.',
            '**[[la-backface-culling|Back-face culling]]:** a triangle on a closed mesh whose front faces away from the eye $E$ is hidden behind the rest of the mesh, so skip it. Its front faces the eye exactly when $\\vec{n} \\cdot (E - A) > 0$.',
          ],
        },
        {
          type: 'plot3d',
          x: [-4.5, 4.5],
          y: [-4.5, 4.5],
          z: [-1, 3],
          parametricSurfaces: [{ x: '2 - 2u', y: '2u - 2u*v', z: '2u*v', u: [0, 1], v: [0, 1], color: 'orange', opacity: 0.85 }],
          vectors: [{ from: ['2/3', '2/3', '2/3'], to: ['2/3 + 1.2', '2/3 + 1.2', '2/3 + 1.2'], label: 'n', color: 'purple' }],
          points: [
            { x: 2, y: 0, z: 0, label: 'A', color: 'gray' },
            { x: 0, y: 2, z: 0, label: 'B', color: 'gray' },
            { x: 0, y: 0, z: 2, label: 'C', color: 'gray' },
            { x: '4cos(w)', y: '4sin(w)', z: 1, label: 'eye', color: 'red' },
          ],
          curves: [{ x: '4cos(t)', y: '4sin(t)', z: '1', t: [0, '2pi'], color: 'gray', dashed: true }],
          sliders: [{ name: 'w', min: 0, max: 6.28, step: 0.02, value: 0.8, label: 'camera orbit angle', play: true, loop: true, speed: 0.6 }],
          readouts: [{ label: '$\\vec{n} \\cdot (E - A) = 16\\cos w + 16\\sin w - 4 =$', expr: '16cos(w) + 16sin(w) - 4' }],
          resolution: 10,
          view: { azimuth: 40, elevation: 25 },
          caption: 'The triangle $A(2,0,0)$, $B(0,2,0)$, $C(0,0,2)$ has $\\vec{n} = (B - A) \\times (C - A) = \\langle 4, 4, 4 \\rangle$ (drawn shortened). Orbit the eye: while the readout is positive the camera sees the front face; when it turns negative the triangle would be culled.',
        },
        {
          type: 'code',
          title: 'normals.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdio>

struct Vec3 { double x, y, z; };
Vec3 operator-(Vec3 a, Vec3 b) { return {a.x - b.x, a.y - b.y, a.z - b.z}; }
double dot(Vec3 a, Vec3 b) { return a.x * b.x + a.y * b.y + a.z * b.z; }
Vec3 cross(Vec3 a, Vec3 b) {
    return {a.y * b.z - a.z * b.y, a.z * b.x - a.x * b.z, a.x * b.y - a.y * b.x};
}
Vec3 normalize(Vec3 v) {
    double len = std::sqrt(dot(v, v));
    return {v.x / len, v.y / len, v.z / len};
}

int main() {
    const Vec3 A{2, 0, 0}, B{0, 2, 0}, C{0, 0, 2};  // counterclockwise from outside
    const Vec3 n = normalize(cross(B - A, C - A));
    std::printf("normal  = (%.4f, %.4f, %.4f)\\n", n.x, n.y, n.z);

    const Vec3 toLight = normalize({1, 2, 2});
    std::printf("diffuse = %.4f\\n", std::fmax(0.0, dot(n, toLight)));

    const Vec3 eyes[] = {{4, 4, 4}, {-3, -1, 0}};
    for (const Vec3& E : eyes) {
        double s = dot(n, E - A);  // > 0: the eye sees the front face
        std::printf("eye (%g, %g, %g): n.(E - A) = %.4f -> %s\\n",
                    E.x, E.y, E.z, s, s > 0 ? "draw" : "cull");
    }
}`,
          output: `normal  = (0.5774, 0.5774, 0.5774)
diffuse = 0.9623
eye (4, 4, 4): n.(E - A) = 5.7735 -> draw
eye (-3, -1, 0): n.(E - A) = -3.4641 -> cull`,
          annotations: [
            { lines: '7-9', text: 'The component formula $\\langle a_2b_3 - a_3b_2,\\ a_3b_1 - a_1b_3,\\ a_1b_2 - a_2b_1 \\rangle$.' },
            { lines: 17, text: 'Edges from $A$, crossed in winding order, then normalized: $\\frac{1}{\\sqrt{3}}\\langle 1, 1, 1 \\rangle$.' },
            { lines: 21, text: 'Lambert\'s cosine law: $\\hat{n} \\cdot \\hat{L} = \\frac{1 + 2 + 2}{3\\sqrt{3}} \\approx 0.9623$. Clamped at $0$ so faces turned away from the light are not lit negatively.' },
            { lines: '24-25', text: 'The sign of $\\vec{n} \\cdot (E - A)$ says which side of the triangle\'s plane the eye is on.' },
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Swap two vertices, flip the normal',
          text: 'Listing the same triangle as $A, C, B$ gives $(C - A) \\times (B - A) = -\\vec{n}$ by anticommutativity. An exporter that writes the wrong winding order produces meshes that look inside-out: front faces culled, back faces drawn and lit from behind.',
        },
      ],
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'mcq',
      prompt: 'A triangle is stored as $A(0, 0, 0)$, $B(0, 1, 0)$, $C(1, 0, 0)$, and the renderer uses $\\vec{n} = (B - A) \\times (C - A)$. The camera is at $E(0, 0, 5)$, looking down at the triangle. What happens?',
      options: [
        { text: 'It is drawn: $\\vec{n} = \\langle 0, 0, 1 \\rangle$ points at the camera', why: 'Compute the product in the stored order: $\\mathbf{j} \\times \\mathbf{i} = -\\mathbf{k}$, not $+\\mathbf{k}$.' },
        { text: 'It is culled: $\\vec{n} = \\langle 0, 0, -1 \\rangle$ and $\\vec{n} \\cdot (E - A) = -5 < 0$', correct: true, why: '$(B - A) \\times (C - A) = \\mathbf{j} \\times \\mathbf{i} = -\\mathbf{k}$, which points away from the camera, so the camera sees the back face.' },
        { text: 'It is drawn, because the triangle lies in the $xy$-plane directly below the camera', why: 'Position alone does not decide; the winding order does. From above, $A \\to B \\to C$ runs clockwise.' },
        { text: 'It is culled, because $\\vec{n} = \\vec{0}$', why: 'The edges $\\mathbf{j}$ and $\\mathbf{i}$ are not parallel, so the cross product is a nonzero vector of length $1$.' },
      ],
      explanation: '$B - A = \\langle 0, 1, 0 \\rangle = \\mathbf{j}$ and $C - A = \\langle 1, 0, 0 \\rangle = \\mathbf{i}$, so $\\vec{n} = \\mathbf{j} \\times \\mathbf{i} = -\\mathbf{k}$. With $E - A = \\langle 0, 0, 5 \\rangle$, $\\vec{n} \\cdot (E - A) = -5 < 0$: back face, culled. Seen from above, the vertices go clockwise; storing them as $A, C, B$ would fix it.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'concept',
      title: 'The scalar triple product = volume',
      blocks: [
        {
          type: 'p',
          text: 'Three vectors from one corner span a slanted box, a [[la-parallelepiped|parallelepiped]]. Its base is the parallelogram on $\\vec{b}$ and $\\vec{c}$, with area $|\\vec{b} \\times \\vec{c}|$. Its height is the component of $\\vec{a}$ along the base normal $\\vec{b} \\times \\vec{c}$, namely $\\frac{|\\vec{a} \\cdot (\\vec{b} \\times \\vec{c})|}{|\\vec{b} \\times \\vec{c}|}$. Multiply and the $|\\vec{b} \\times \\vec{c}|$ cancels:',
        },
        {
          type: 'theorem',
          name: 'Scalar triple product',
          tex: '\\vec{a} \\cdot (\\vec{b} \\times \\vec{c}) = \\begin{vmatrix} a_1 & a_2 & a_3 \\\\ b_1 & b_2 & b_3 \\\\ c_1 & c_2 & c_3 \\end{vmatrix}, \\qquad V = |\\vec{a} \\cdot (\\vec{b} \\times \\vec{c})|',
          text: 'The [[la-scalar-triple-product|scalar triple product]] is the determinant you know from Linear Algebra. Its absolute value is the volume; its sign says whether $\\vec{a}, \\vec{b}, \\vec{c}$ form a right-handed triple. It is $0$ exactly when the three vectors are **coplanar**.',
        },
        {
          type: 'plot3d',
          x: [-0.5, 3.8],
          y: [-0.5, 3.8],
          z: [-0.5, 3.8],
          equal: true,
          parametricSurfaces: [
            { x: '2u + v', y: '2v', z: '0', u: [0, 1], v: [0, 1], color: 'blue', opacity: 0.45 },
            { x: '2u + v + 0.5', y: '2v + 0.5', z: 'h', u: [0, 1], v: [0, 1], color: 'blue', opacity: 0.45 },
            { x: '2u + 0.5v', y: '0.5v', z: 'h*v', u: [0, 1], v: [0, 1], color: 'teal', opacity: 0.35 },
            { x: '2u + 1 + 0.5v', y: '2 + 0.5v', z: 'h*v', u: [0, 1], v: [0, 1], color: 'teal', opacity: 0.35 },
            { x: 'u + 0.5v', y: '2u + 0.5v', z: 'h*v', u: [0, 1], v: [0, 1], color: 'teal', opacity: 0.35 },
            { x: '2 + u + 0.5v', y: '2u + 0.5v', z: 'h*v', u: [0, 1], v: [0, 1], color: 'teal', opacity: 0.35 },
          ],
          vectors: [
            { from: [0, 0, 0], to: [2, 0, 0], label: 'b', color: 'red' },
            { from: [0, 0, 0], to: [1, 2, 0], label: 'c', color: 'orange' },
            { from: [0, 0, 0], to: [0.5, 0.5, 'h'], label: 'a', color: 'purple' },
          ],
          sliders: [{ name: 'h', min: 0, max: 3, step: 0.1, value: 1.5, label: 'height of $\\vec{a}$, $a_3$' }],
          readouts: [{ label: '$V = |\\vec{a} \\cdot (\\vec{b} \\times \\vec{c})| = 4a_3 =$', expr: '4h' }],
          resolution: 6,
          view: { azimuth: 30, elevation: 22 },
          caption: 'Base vectors $\\vec{b} = \\langle 2, 0, 0 \\rangle$, $\\vec{c} = \\langle 1, 2, 0 \\rangle$ span a base of area $|\\vec{b} \\times \\vec{c}| = 4$, and $\\vec{a} = \\langle 0.5, 0.5, a_3 \\rangle$. Only the height $a_3$ changes the volume — slanting $\\vec{a}$ sideways does not. At $a_3 = 0$ the three vectors are coplanar and the box is flat.',
        },
        {
          type: 'derivation',
          title: 'Volume spanned by $\\langle 1, 1, 0 \\rangle$, $\\langle 0, 1, 1 \\rangle$, $\\langle 1, 0, 1 \\rangle$',
          steps: [
            { tex: '\\begin{vmatrix} 1 & 1 & 0 \\\\ 0 & 1 & 1 \\\\ 1 & 0 & 1 \\end{vmatrix} = 1\\begin{vmatrix} 1 & 1 \\\\ 0 & 1 \\end{vmatrix} - 1\\begin{vmatrix} 0 & 1 \\\\ 1 & 1 \\end{vmatrix} + 0', why: 'Cofactor expansion along the first row.' },
            { tex: '= 1(1 - 0) - 1(0 - 1) = 2', why: 'Evaluate the $2 \\times 2$ determinants.' },
            { tex: 'V = |2| = 2', why: 'Volume is the absolute value. The positive sign also says the triple is right-handed.' },
          ],
          result: 'The parallelepiped has volume $2$. By contrast $\\langle 1, 2, 3 \\rangle$, $\\langle 4, 5, 6 \\rangle$, $\\langle 7, 8, 9 \\rangle$ give determinant $0$: those three vectors lie in one plane.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'The orientation test',
          text: 'Graphics and computational geometry code uses the sign of $(B - A) \\cdot \\big((C - A) \\times (D - A)\\big)$ as an **orientation test**: which side of the plane $ABC$ is the point $D$ on? Mesh slicers, convex-hull builders and robust collision code all branch on this one determinant, and its value divided by $6$ is the signed volume of the tetrahedron $ABCD$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'numeric',
      prompt: 'Find the volume of the parallelepiped spanned by $\\vec{a} = \\langle 2, 0, 1 \\rangle$, $\\vec{b} = \\langle 1, 3, 0 \\rangle$ and $\\vec{c} = \\langle 0, 1, 4 \\rangle$.',
      hint: 'Expand $\\begin{vmatrix} 2 & 0 & 1 \\\\ 1 & 3 & 0 \\\\ 0 & 1 & 4 \\end{vmatrix}$ along the first row.',
      label: '$V =$',
      answer: '25',
      explanation: '$\\det = 2(3 \\cdot 4 - 0 \\cdot 1) - 0(1 \\cdot 4 - 0 \\cdot 0) + 1(1 \\cdot 1 - 3 \\cdot 0) = 24 - 0 + 1 = 25$, so $V = |25| = 25$. Equivalently $\\vec{b} \\times \\vec{c} = \\langle 12, -4, 1 \\rangle$ and $\\vec{a} \\cdot \\langle 12, -4, 1 \\rangle = 24 + 0 + 1 = 25$.',
    },
    // ------------------------------------------------------------------ 16
    {
      kind: 'truefalse',
      prompt: 'For all vectors in space, $(\\vec{a} \\times \\vec{b}) \\times \\vec{c} = \\vec{a} \\times (\\vec{b} \\times \\vec{c})$.',
      answer: false,
      explanation: 'The cross product is not associative. A counterexample: $(\\mathbf{i} \\times \\mathbf{i}) \\times \\mathbf{j} = \\vec{0} \\times \\mathbf{j} = \\vec{0}$, but $\\mathbf{i} \\times (\\mathbf{i} \\times \\mathbf{j}) = \\mathbf{i} \\times \\mathbf{k} = -\\mathbf{j}$. Parentheses matter — unlike the triple **scalar** product, where $\\vec{a} \\cdot (\\vec{b} \\times \\vec{c}) = (\\vec{a} \\times \\vec{b}) \\cdot \\vec{c}$ does hold.',
    },
  ],
  takeaways: [
    'Vectors in space are $\\langle v_1, v_2, v_3 \\rangle = v_1\\mathbf{i} + v_2\\mathbf{j} + v_3\\mathbf{k}$; $\\overrightarrow{PQ}$ is head minus tail and $|\\vec{v}| = \\sqrt{v_1^2 + v_2^2 + v_3^2}$.',
    '$\\vec{a} \\cdot \\vec{b} = a_1b_1 + a_2b_2 + a_3b_3 = |\\vec{a}||\\vec{b}|\\cos\\theta$: its sign tells acute, right or obtuse, and it powers vision cones and lighting.',
    '$\\operatorname{proj}_{\\vec{b}}\\vec{a} = \\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{b}|^2}\\vec{b}$ splits $\\vec{a}$ into parts along and perpendicular to $\\vec{b}$ (wall sliding, work).',
    '$\\vec{a} \\times \\vec{b}$ is perpendicular to both (right-hand rule), anticommutative, not associative, and $|\\vec{a} \\times \\vec{b}| = |\\vec{a}||\\vec{b}|\\sin\\theta$ is the parallelogram\'s area.',
    'A triangle\'s face normal is $(B - A) \\times (C - A)$; its direction follows the winding order and drives diffuse lighting $\\max(0, \\hat{n} \\cdot \\hat{L})$ and back-face culling.',
    '$|\\vec{a} \\cdot (\\vec{b} \\times \\vec{c})|$, a $3 \\times 3$ determinant, is the volume of the parallelepiped; it is $0$ exactly when the vectors are coplanar.',
  ],
  reading: [
    {
      title: 'OpenStax Calculus Volume 3 — 2.3 The Dot Product and 2.4 The Cross Product',
      url: 'https://openstax.org/details/books/calculus-volume-3',
      source: 'openstax',
      note: 'Worked examples of projections, work, torque and the triple product, with exercises at the end of each section.',
    },
    {
      title: 'Khan Academy — Multivariable calculus',
      url: 'https://www.khanacademy.org/math/multivariable-calculus',
      source: 'khan',
      note: 'The "thinking about multivariable functions" unit visualizes functions, vector fields and transformations in 3D; the dot and cross products themselves are covered in Khan Academy\'s linear algebra course.',
    },
    {
      title: 'Wikipedia — Back-face culling',
      url: 'https://en.wikipedia.org/wiki/Back-face_culling',
      source: 'wikipedia',
      note: 'How renderers use the face normal and winding order to skip hidden triangles.',
    },
    {
      title: 'Wikipedia — Triple product',
      url: 'https://en.wikipedia.org/wiki/Triple_product',
      source: 'wikipedia',
      note: 'The scalar and vector triple products, their volume interpretation and the "BAC − CAB" identity.',
    },
  ],
};
