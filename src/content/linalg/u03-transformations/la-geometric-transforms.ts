import type { Lesson } from '../../types';

/** Column vector in TeX: col(1, 2, 3). */
const col = (...e: (string | number)[]) => `\\begin{bmatrix} ${e.join(' \\\\ ')} \\end{bmatrix}`;
/** Matrix in TeX from rows: mat([1, 2], [3, 4]). */
const mat = (...rows: (string | number)[][]) => `\\begin{bmatrix} ${rows.map((r) => r.join(' & ')).join(' \\\\ ')} \\end{bmatrix}`;

// Graph expressions for a slider angle d in degrees.
const C = 'cos(d*pi/180)';
const S = 'sin(d*pi/180)';
// Reflection across the line at angle f degrees: cos 2φ and sin 2φ.
const C2 = 'cos(f*pi/90)';
const S2 = 'sin(f*pi/90)';
/** Image of the point (x, y) under the reflection [[C2, S2], [S2, -C2]]. */
const refl = (x: number, y: number): [string, string] => [`${x}*${C2} + ${y}*${S2}`, `${x}*${S2} - ${y}*${C2}`];

export const lesson: Lesson = {
  id: 'la-geometric-transforms',
  title: 'Rotations, Scales, Shears and Reflections',
  summary: 'The catalog of 2D and 3D transforms behind every sprite, mesh and mirror, each derived from where e₁ and e₂ go.',
  minutes: 20,
  objectives: [
    'Derive the rotation matrix $R_\\theta$ from the images of $\\mathbf{e}_1$ and $\\mathbf{e}_2$ and use it to rotate points',
    'Write the matrices of uniform and non-uniform scaling, horizontal and vertical shears, and projections onto the axes',
    'Find reflection matrices across the axes, $y = x$, $y = -x$ and a general line through the origin',
    'Build the 3D rotation matrices about the $x$-, $y$- and $z$-axes and explain the sign pattern',
    'Connect each transform to game code: sprite rotation, normals under non-uniform scale, mirrors and winding order',
  ],
  steps: [
    // ------------------------------------------------------------------ 0
    {
      kind: 'concept',
      title: 'Rotation by an angle $\\theta$',
      blocks: [
        {
          type: 'p',
          text: 'Every transform in this lesson is found with the recipe from the last one: work out where $\\mathbf{e}_1$ and $\\mathbf{e}_2$ go, and use those images as the columns. Rotation about the origin is linear (rotating a parallelogram rotates its diagonal), so the recipe applies.',
        },
        {
          type: 'derivation',
          title: 'The rotation matrix $R_\\theta$ (counterclockwise by $\\theta$)',
          steps: [
            { tex: `R_\\theta(\\mathbf{e}_1) = ${col('\\cos\\theta', '\\sin\\theta')}`, why: '$\\mathbf{e}_1$ is the point of the [[unit-circle]] at angle $0$. Rotating it by $\\theta$ lands on the point at angle $\\theta$, whose coordinates are $(\\cos\\theta, \\sin\\theta)$ by definition.' },
            { tex: `R_\\theta(\\mathbf{e}_2) = ${col('\\cos(\\theta + 90^\\circ)', '\\sin(\\theta + 90^\\circ)')} = ${col('-\\sin\\theta', '\\cos\\theta')}`, why: '$\\mathbf{e}_2$ sits at angle $90^\\circ$, so it moves to angle $\\theta + 90^\\circ$. The sum formulas give $\\cos(\\theta + 90^\\circ) = -\\sin\\theta$ and $\\sin(\\theta + 90^\\circ) = \\cos\\theta$.' },
            { tex: `R_\\theta = ${mat(['\\cos\\theta', '-\\sin\\theta'], ['\\sin\\theta', '\\cos\\theta'])}`, why: 'The two images become the columns of the standard matrix.' },
            { tex: `R_\\theta${col('x', 'y')} = ${col('x\\cos\\theta - y\\sin\\theta', 'x\\sin\\theta + y\\cos\\theta')}`, why: 'Multiply out. These are the rotation formulas, now with a reason behind them.' },
          ],
          result: 'The [[rotation-matrix]] is $R_\\theta = \\begin{bmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{bmatrix}$. For $\\theta = 90^\\circ$ it is $\\begin{bmatrix} 0 & -1 \\\\ 1 & 0 \\end{bmatrix}$, as before.',
        },
        {
          type: 'graph',
          x: [-2, 2],
          y: [-2, 2],
          equal: true,
          parametric: [{ x: 'cos(t)', y: 'sin(t)', t: [0, '2pi'], color: 'gray', dashed: true }],
          segments: [
            { from: [0, 0], to: [1, 0], color: 'gray', dashed: true },
            { from: [1, 0], to: [1, 1], color: 'gray', dashed: true },
            { from: [1, 1], to: [0, 1], color: 'gray', dashed: true },
            { from: [0, 1], to: [0, 0], color: 'gray', dashed: true },
            { from: [C, S], to: [`${C} - ${S}`, `${S} + ${C}`], color: 'purple' },
            { from: [`${C} - ${S}`, `${S} + ${C}`], to: [`-${S}`, C], color: 'purple' },
            { from: [0, 0], to: [C, S], arrow: true, color: 'red', label: 'R(e₁)' },
            { from: [0, 0], to: [`-${S}`, C], arrow: true, color: 'green', label: 'R(e₂)' },
          ],
          sliders: [{ name: 'd', min: -180, max: 180, step: 5, value: 30, label: '$\\theta$ (degrees)' }],
          readouts: [
            { label: '$\\cos\\theta =$', expr: C, digits: 3 },
            { label: '$\\sin\\theta =$', expr: S, digits: 3 },
          ],
          caption: 'The unit square (gray) and its rotated image (purple). The red and green arrows are the columns of $R_\\theta$. Their lengths stay $1$ and they stay perpendicular, so the square stays a square.',
        },
        {
          type: 'derivation',
          title: 'Rotate $\\mathbf{v} = (\\sqrt{3}, 1)$ by $30^\\circ$',
          steps: [
            { tex: `R_{30^\\circ} = ${mat(['\\frac{\\sqrt{3}}{2}', '-\\frac{1}{2}'], ['\\frac{1}{2}', '\\frac{\\sqrt{3}}{2}'])}`, why: '$\\cos 30^\\circ = \\frac{\\sqrt{3}}{2}$ and $\\sin 30^\\circ = \\frac{1}{2}$.' },
            { tex: `R_{30^\\circ}\\mathbf{v} = ${col('\\sqrt{3}\\cdot\\frac{\\sqrt{3}}{2} - 1 \\cdot \\frac{1}{2}', '\\sqrt{3}\\cdot\\frac{1}{2} + 1 \\cdot \\frac{\\sqrt{3}}{2}')}`, why: 'Row times column, for each row.' },
            { tex: `= ${col('\\frac{3}{2} - \\frac{1}{2}', '\\sqrt{3}')} = ${col(1, '\\sqrt{3}')}`, why: 'Simplify. Check: $\\mathbf{v}$ has length $2$ at angle $30^\\circ$; the image has length $\\sqrt{1 + 3} = 2$ at angle $60^\\circ$.' },
          ],
          result: '$R_{30^\\circ}(\\sqrt{3}, 1) = (1, \\sqrt{3})$.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Sprite rotation, and the y-down trap',
          text: 'A 2D engine rotates a sprite by applying $R_\\theta$ to each corner (relative to the sprite\'s pivot). Two classic bugs: `std::cos` and `std::sin` take **radians**, so convert degrees first; and screen coordinates usually have $y$ pointing **down**, which mirrors the picture, so a positive $\\theta$ looks *clockwise* on screen.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'You have met this matrix before',
          text: 'In trigonometry, multiplying a complex number $x + yi$ by $\\cos\\theta + i\\sin\\theta$ rotated it by $\\theta$. Expand $(x + yi)(\\cos\\theta + i\\sin\\theta)$: the real part is $x\\cos\\theta - y\\sin\\theta$ and the imaginary part is $x\\sin\\theta + y\\cos\\theta$. Exactly $R_\\theta$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 1
    {
      kind: 'numeric',
      prompt: 'Rotate $\\mathbf{v} = (1, 1)$ counterclockwise by $45^\\circ$. What is the **second** entry of $R_{45^\\circ}\\mathbf{v}$?',
      hint: '$\\cos 45^\\circ = \\sin 45^\\circ = \\frac{\\sqrt{2}}{2}$. The second entry is $x\\sin\\theta + y\\cos\\theta$.',
      label: 'second entry $=$',
      answer: 'sqrt(2)',
      answerTex: '\\sqrt{2}',
      explanation: '$R_{45^\\circ}(1, 1) = \\big(1\\cdot\\frac{\\sqrt{2}}{2} - 1\\cdot\\frac{\\sqrt{2}}{2},\\; 1\\cdot\\frac{\\sqrt{2}}{2} + 1\\cdot\\frac{\\sqrt{2}}{2}\\big) = (0, \\sqrt{2})$. Geometrically: $(1, 1)$ has length $\\sqrt{2}$ at angle $45^\\circ$, and a further $45^\\circ$ puts it straight up the $y$-axis with the same length.',
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'error',
      prompt: 'A student derives the rotation matrix. Tap the first line that is wrong.',
      lines: [
        '$R_\\theta(\\mathbf{e}_1) = (\\cos\\theta, \\sin\\theta)$',
        '$R_\\theta(\\mathbf{e}_2) = (\\sin\\theta, \\cos\\theta)$',
        `$R_\\theta = ${mat(['\\cos\\theta', '\\sin\\theta'], ['\\sin\\theta', '\\cos\\theta'])}$`,
        `Check at $\\theta = 90^\\circ$: $R_{90^\\circ} = ${mat([0, 1], [1, 0])}$`,
      ],
      errorLines: [2],
      explanation: '$\\mathbf{e}_2$ starts at angle $90^\\circ$ and ends at angle $\\theta + 90^\\circ$, so $R_\\theta(\\mathbf{e}_2) = (\\cos(\\theta + 90^\\circ), \\sin(\\theta + 90^\\circ)) = (-\\sin\\theta, \\cos\\theta)$. The student\'s $(\\sin\\theta, \\cos\\theta)$ is $\\mathbf{e}_2$ rotated **clockwise**. Their check even exposes it: $\\begin{bmatrix} 0 & 1 \\\\ 1 & 0 \\end{bmatrix}$ swaps coordinates, which is the reflection across $y = x$, not a rotation. Correct: $R_\\theta = \\begin{bmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{bmatrix}$.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Scaling, uniform and non-uniform',
      blocks: [
        {
          type: 'p',
          text: `Scaling by $s_x$ horizontally and $s_y$ vertically sends $\\mathbf{e}_1 \\mapsto (s_x, 0)$ and $\\mathbf{e}_2 \\mapsto (0, s_y)$, so its matrix is the [[diagonal-matrix]] $${mat(['s_x', 0], [0, 's_y'])}$. When $s_x = s_y = k$ it is **uniform** scaling $kI$: shapes keep their angles and proportions. When $s_x \\ne s_y$ it is [[non-uniform-scaling]]: circles become ellipses and angles change. A negative factor also flips that axis, so $s_x = -1$, $s_y = 1$ is a mirror.`,
        },
        {
          type: 'graph',
          x: [-3, 3],
          y: [-2.5, 2.5],
          equal: true,
          parametric: [
            { x: 'cos(t)', y: 'sin(t)', t: [0, '2pi'], color: 'gray', dashed: true },
            { x: 'a*cos(t)', y: 'b*sin(t)', t: [0, '2pi'], color: 'purple' },
          ],
          segments: [
            { from: [0, 0], to: ['a', 0], arrow: true, color: 'red', label: 'S(e₁)' },
            { from: [0, 0], to: [0, 'b'], arrow: true, color: 'green', label: 'S(e₂)' },
            { from: ['a', 0], to: ['a', 'b'], color: 'purple', dashed: true },
            { from: [0, 'b'], to: ['a', 'b'], color: 'purple', dashed: true },
          ],
          sliders: [
            { name: 'a', min: -2, max: 2.5, step: 0.25, value: 2, label: '$s_x$' },
            { name: 'b', min: -2, max: 2.5, step: 0.25, value: 0.75, label: '$s_y$' },
          ],
          caption: 'The unit circle (gray) becomes an ellipse with semi-axes $|s_x|$ and $|s_y|$; the unit square becomes an $|s_x| \\times |s_y|$ rectangle. Make $s_x$ negative and the picture flips left to right.',
        },
        {
          type: 'heading',
          text: 'Preview: non-uniform scale breaks normals',
        },
        {
          type: 'p',
          text: 'A surface **normal** is a vector perpendicular to a surface, used for lighting. Take the edge from $(0, 1)$ to $(1, 0)$, with direction $(1, -1)$ and normal $\\mathbf{n} = (1, 1)$. Scale by $s_x = a$, $s_y = b$. The edge becomes the segment from $(0, b)$ to $(a, 0)$, direction $(a, -b)$. If you also scale the normal, you get $(a, b)$, and $(a, b) \\cdot (a, -b) = a^2 - b^2$, which is not $0$ unless $a = b$.',
        },
        {
          type: 'graph',
          x: [-0.5, 3.5],
          y: [-0.5, 3],
          equal: true,
          segments: [
            { from: [0, 1], to: [1, 0], color: 'gray', dashed: true },
            { from: [0.5, 0.5], to: [1.066, 1.066], color: 'gray', dashed: true, arrow: true },
            { from: [0, 'b'], to: ['a', 0], color: 'purple' },
            { from: ['a/2', 'b/2'], to: ['a/2 + 0.8a/sqrt(a^2 + b^2)', 'b/2 + 0.8b/sqrt(a^2 + b^2)'], arrow: true, color: 'red', label: 'scaled n (wrong)' },
            { from: ['a/2', 'b/2'], to: ['a/2 + 0.8b/sqrt(a^2 + b^2)', 'b/2 + 0.8a/sqrt(a^2 + b^2)'], arrow: true, color: 'green', label: 'correct normal' },
          ],
          sliders: [
            { name: 'a', min: 0.25, max: 3, step: 0.25, value: 2.5, label: '$s_x = a$' },
            { name: 'b', min: 0.25, max: 2.5, step: 0.25, value: 1, label: '$s_y = b$' },
          ],
          readouts: [{ label: 'scaled normal $\\cdot$ new edge direction $= a^2 - b^2 =$', expr: 'a^2 - b^2', digits: 3 }],
          caption: 'Red: the normal pushed through the same scale. It visibly leans off perpendicular. Green: the correct normal, proportional to $(b, a)$, which is what $(1/a, 1/b)$ points along. Set $a = b$ and the two agree.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Why shaders use a "normal matrix"',
          text: 'Because of this, engines transform normals with a separate matrix: the inverse transpose of the model matrix (for a diagonal scale, that just means dividing by $s_x, s_y, s_z$ instead of multiplying). You will be able to derive it once you have inverses, transposes and dot products together. For rotations and uniform scales, the ordinary matrix works fine, which is why the bug only shows up on stretched objects.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'mcq',
      prompt: 'An edge has direction $(1, -1)$ and normal $(1, 1)$. A modeller applies the scale $\\begin{bmatrix} 3 & 0 \\\\ 0 & 1 \\end{bmatrix}$ to the mesh **and** to its normals. What happens?',
      options: [
        {
          text: 'Nothing goes wrong: linear maps preserve right angles',
          why: 'Rotations and uniform scales preserve angles, but a general linear map does not. Here the new vectors have dot product $8$, not $0$.',
        },
        {
          text: 'The new edge is $(3, -1)$, the new normal $(3, 1)$, and they are no longer perpendicular',
          correct: true,
          why: '$(3, -1) \\cdot (3, 1) = 9 - 1 = 8 \\ne 0$. The lighting computed from this "normal" will be wrong.',
        },
        {
          text: 'The normal is unchanged because normals are directions, not positions',
          why: 'Directions are not translated, but they are rotated and scaled. And here, scaling the normal by the mesh\'s own matrix is the bug.',
        },
        {
          text: 'The normal becomes $(1, 3)$ and stays perpendicular',
          why: 'The matrix gives $S(1, 1) = (3, 1)$, not $(1, 3)$. Interestingly, $(1, 3)$ *is* perpendicular to the new edge, because it points along the correct normal $(\\frac{1}{3}, 1)$, which comes from **dividing** by the scale factors rather than multiplying.',
        },
      ],
      explanation: 'The scale sends the edge direction $(1, -1)$ to $(3, -1)$ and the normal $(1, 1)$ to $(3, 1)$. Their dot product is $9 - 1 = 8$, so they are not perpendicular. The correct normal divides by the scale factors: $(\\frac{1}{3}, 1)$, which is perpendicular to $(3, -1)$ since $1 - 1 = 0$.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Shears and projections',
      blocks: [
        {
          type: 'p',
          text: `A **horizontal [[shear]]** slides each point sideways by an amount proportional to its height: $(x, y) \\mapsto (x + ky, y)$. The $x$-axis stays put, so $\\mathbf{e}_1 \\mapsto \\mathbf{e}_1$, while $\\mathbf{e}_2 \\mapsto (k, 1)$. A **vertical shear** slides points up by an amount proportional to $x$: $(x, y) \\mapsto (x, y + kx)$.`,
        },
        {
          type: 'math',
          tex: `\\text{horizontal shear } ${mat([1, 'k'], [0, 1])}, \\qquad \\text{vertical shear } ${mat([1, 0], ['k', 1])}`,
        },
        {
          type: 'graph',
          x: [-3, 3.5],
          y: [-1, 2.5],
          equal: true,
          segments: [
            { from: [0, 0], to: [1, 0], color: 'gray', dashed: true },
            { from: [1, 0], to: [1, 1], color: 'gray', dashed: true },
            { from: [1, 1], to: [0, 1], color: 'gray', dashed: true },
            { from: [0, 1], to: [0, 0], color: 'gray', dashed: true },
            { from: [1, 0], to: ['1 + k', 1], color: 'purple' },
            { from: ['1 + k', 1], to: ['k', 1], color: 'purple' },
            { from: [0, 0], to: [1, 0], arrow: true, color: 'red', label: 'T(e₁) = e₁' },
            { from: [0, 0], to: ['k', 1], arrow: true, color: 'green', label: 'T(e₂)' },
          ],
          sliders: [{ name: 'k', min: -2, max: 2, step: 0.25, value: 1, label: 'shear factor $k$' }],
          readouts: [{ label: 'top edge shifted by $k =$', expr: 'k', digits: 2 }],
          caption: 'The square leans into a parallelogram. Its base and height are still $1$, so the **area stays $1$** for every $k$. (Area scaling factors are the subject of the determinants unit.)',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Shears in games',
          text: 'Faux-italic text in a UI is a horizontal shear of the glyphs. Grass and foliage often sway in the wind via a vertex shader that adds a sideways offset proportional to the vertex\'s height above the ground: a shear whose factor $k$ oscillates with time, so the roots stay fixed and the tips move most.',
        },
        {
          type: 'p',
          text: `**Projections onto the axes** flatten one coordinate: onto the $x$-axis $(x, y) \\mapsto (x, 0)$, matrix $${mat([1, 0], [0, 0])}$; onto the $y$-axis $(x, y) \\mapsto (0, y)$, matrix $${mat([0, 0], [0, 1])}$. More generally, the [[orthogonal-projection]] onto the line through the origin in the direction of the unit vector $\\mathbf{u} = (\\cos\\varphi, \\sin\\varphi)$ is $\\mathbf{x} \\mapsto (\\mathbf{x} \\cdot \\mathbf{u})\\,\\mathbf{u}$, the [[vector-projection]] formula from the dot-product lesson.`,
        },
        {
          type: 'derivation',
          title: 'Matrix of the projection onto the line at angle $\\varphi$',
          steps: [
            { tex: 'P(\\mathbf{e}_1) = (\\mathbf{e}_1 \\cdot \\mathbf{u})\\,\\mathbf{u} = \\cos\\varphi\\,(\\cos\\varphi, \\sin\\varphi)', why: '$\\mathbf{e}_1 \\cdot \\mathbf{u}$ picks out the first entry of $\\mathbf{u}$, which is $\\cos\\varphi$.' },
            { tex: 'P(\\mathbf{e}_2) = (\\mathbf{e}_2 \\cdot \\mathbf{u})\\,\\mathbf{u} = \\sin\\varphi\\,(\\cos\\varphi, \\sin\\varphi)', why: 'Likewise $\\mathbf{e}_2 \\cdot \\mathbf{u} = \\sin\\varphi$.' },
            { tex: `P = ${mat(['\\cos^2\\varphi', '\\cos\\varphi\\sin\\varphi'], ['\\cos\\varphi\\sin\\varphi', '\\sin^2\\varphi'])}`, why: 'Images as columns. At $\\varphi = 0$ this is $\\begin{bmatrix} 1 & 0 \\\\ 0 & 0 \\end{bmatrix}$, the projection onto the $x$-axis, as it should be.' },
          ],
          result: 'Projections are linear but not one-to-one: every point on a perpendicular line lands on the same spot. That is exactly how a shadow loses depth information.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'numeric',
      prompt: 'Apply the horizontal shear with factor $k = -1.5$ to the point $(4, 2)$. What is the **first** entry of the image?',
      hint: 'A horizontal shear is $(x, y) \\mapsto (x + ky, y)$.',
      label: 'first entry $=$',
      answer: '1',
      explanation: `$${mat([1, -1.5], [0, 1])}${col(4, 2)} = ${col('4 + (-1.5)(2)', 2)} = ${col(1, 2)}$. The height $y = 2$ stays the same, and the point slides left by $1.5 \\times 2 = 3$ units because $k$ is negative.`,
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'Reflections',
      blocks: [
        {
          type: 'p',
          text: 'A reflection across a line through the origin flips each point to the mirror-image point on the other side. It is linear (a mirror image of a parallelogram is a parallelogram), so once again we only need the images of $\\mathbf{e}_1$ and $\\mathbf{e}_2$. The standard ones can be read off directly.',
        },
        {
          type: 'table',
          headers: ['Reflection across', 'Formula', '[[reflection-matrix|Matrix]]'],
          rows: [
            ['the $x$-axis', '$(x, y) \\mapsto (x, -y)$', '$\\begin{bmatrix} 1 & 0 \\\\ 0 & -1 \\end{bmatrix}$'],
            ['the $y$-axis', '$(x, y) \\mapsto (-x, y)$', '$\\begin{bmatrix} -1 & 0 \\\\ 0 & 1 \\end{bmatrix}$'],
            ['the line $y = x$', '$(x, y) \\mapsto (y, x)$', '$\\begin{bmatrix} 0 & 1 \\\\ 1 & 0 \\end{bmatrix}$'],
            ['the line $y = -x$', '$(x, y) \\mapsto (-y, -x)$', '$\\begin{bmatrix} 0 & -1 \\\\ -1 & 0 \\end{bmatrix}$'],
            ['the origin (point reflection)', '$(x, y) \\mapsto (-x, -y)$', '$\\begin{bmatrix} -1 & 0 \\\\ 0 & -1 \\end{bmatrix}$'],
          ],
          caption: 'The last one is not a mirror across a line: it equals the rotation by $180^\\circ$.',
        },
        {
          type: 'derivation',
          title: 'Reflection across the line through $\\mathbf{0}$ at angle $\\varphi$',
          steps: [
            { tex: '\\text{angle } \\alpha \\;\\longmapsto\\; \\text{angle } 2\\varphi - \\alpha', why: 'A unit vector at angle $\\alpha$ is $\\varphi - \\alpha$ below the mirror line; its reflection is the same amount above it, at $\\varphi + (\\varphi - \\alpha) = 2\\varphi - \\alpha$.' },
            { tex: '\\mathbf{e}_1 \\;(\\alpha = 0) \\;\\longmapsto\\; (\\cos 2\\varphi, \\sin 2\\varphi)', why: 'Put $\\alpha = 0$: the image is the unit vector at angle $2\\varphi$.' },
            { tex: '\\mathbf{e}_2 \\;(\\alpha = 90^\\circ) \\;\\longmapsto\\; (\\cos(2\\varphi - 90^\\circ), \\sin(2\\varphi - 90^\\circ)) = (\\sin 2\\varphi, -\\cos 2\\varphi)', why: 'Put $\\alpha = 90^\\circ$, then use the difference formulas: $\\cos(\\beta - 90^\\circ) = \\sin\\beta$ and $\\sin(\\beta - 90^\\circ) = -\\cos\\beta$.' },
            { tex: `F_\\varphi = ${mat(['\\cos 2\\varphi', '\\sin 2\\varphi'], ['\\sin 2\\varphi', '-\\cos 2\\varphi'])}`, why: 'Images as columns. Check: $\\varphi = 45^\\circ$ gives $\\begin{bmatrix} 0 & 1 \\\\ 1 & 0 \\end{bmatrix}$ (the line $y = x$) and $\\varphi = 0$ gives the $x$-axis reflection.' },
          ],
          result: 'Notice the half-angle: a mirror line at angle $\\varphi$ produces entries in $2\\varphi$.',
        },
        {
          type: 'graph',
          x: [-3, 3],
          y: [-3, 3],
          equal: true,
          parametric: [{ x: 't*cos(f*pi/180)', y: 't*sin(f*pi/180)', t: [-5, 5], color: 'orange', dashed: true, label: 'mirror line' }],
          segments: [
            { from: [1, 0], to: [1, 2], color: 'gray' },
            { from: [1, 2], to: [2, 2], color: 'gray' },
            { from: [1, 1], to: [1.7, 1], color: 'gray' },
            { from: refl(1, 0), to: refl(1, 2), color: 'purple' },
            { from: refl(1, 2), to: refl(2, 2), color: 'purple' },
            { from: refl(1, 1), to: refl(1.7, 1), color: 'purple' },
            { from: [0, 0], to: [C2, S2], arrow: true, color: 'red', label: 'F(e₁)' },
            { from: [0, 0], to: [S2, `-${C2}`], arrow: true, color: 'green', label: 'F(e₂)' },
          ],
          sliders: [{ name: 'f', min: 0, max: 180, step: 5, value: 60, label: 'mirror angle $\\varphi$ (degrees)' }],
          caption: 'The gray F and its mirror image (purple). However you turn the mirror, the image is a **backwards** F: no rotation can produce it. Reflections reverse orientation; rotations preserve it.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the formula is right: reflection = 2 × projection − identity',
          text: 'To reflect $\\mathbf{x}$, walk to its projection $P\\mathbf{x}$ on the line, then the same distance again: $F\\mathbf{x} = \\mathbf{x} + 2(P\\mathbf{x} - \\mathbf{x}) = 2P\\mathbf{x} - \\mathbf{x}$. Using the projection matrix from the previous card, the entries of $2P - I$ are $2\\cos^2\\varphi - 1 = \\cos 2\\varphi$, $2\\sin\\varphi\\cos\\varphi = \\sin 2\\varphi$ and $2\\sin^2\\varphi - 1 = -\\cos 2\\varphi$: the double-angle identities hand back $F_\\varphi$ exactly.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Mirrors, flipped sprites and winding order',
          text: 'Flipping a sprite to face left is the $y$-axis reflection (scale $x$ by $-1$). Mirrors and water reflections render the scene through a reflection matrix. The catch: reflections reverse orientation, so a triangle whose vertices were counterclockwise becomes clockwise. GPUs use winding order to cull back faces, so a mirrored mesh suddenly shows its inside. Engines detect a mirroring transform (in the next units: a negative determinant) and flip the cull mode.',
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'fill',
      prompt: 'Find the standard matrix of the reflection across the line $y = -x$ by tracking $\\mathbf{e}_1$ and $\\mathbf{e}_2$.',
      template: 'Row 1: ___ , ___ . Row 2: ___ , ___ .',
      blanks: [{ answers: ['0'] }, { answers: ['-1'] }, { answers: ['-1'] }, { answers: ['0'] }],
      hint: 'Reflecting across $y = -x$ sends $(x, y)$ to $(-y, -x)$. Where do $(1, 0)$ and $(0, 1)$ go?',
      explanation: `$\\mathbf{e}_1 = (1, 0) \\mapsto (0, -1)$ and $\\mathbf{e}_2 = (0, 1) \\mapsto (-1, 0)$. As columns: $${mat([0, -1], [-1, 0])}$. Check with the general formula: the line $y = -x$ has $\\varphi = -45^\\circ$, so $2\\varphi = -90^\\circ$, $\\cos 2\\varphi = 0$, $\\sin 2\\varphi = -1$, giving $${mat([0, -1], [-1, 0])}$ again.`,
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'truefalse',
      prompt: 'Reflecting a point across the $x$-axis and then reflecting the result across the $y$-axis gives the same point as rotating the original by $180^\\circ$.',
      answer: true,
      explanation: '$(x, y) \\mapsto (x, -y) \\mapsto (-x, -y)$, and $R_{180^\\circ} = \\begin{bmatrix} -1 & 0 \\\\ 0 & -1 \\end{bmatrix}$ also sends $(x, y)$ to $(-x, -y)$. Two reflections reverse orientation twice, so the result preserves it, and in fact any two reflections across lines through the origin compose to a rotation. Doing one transformation after another corresponds to multiplying their matrices, the subject of the next unit\'s first lesson.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'concept',
      title: 'Rotations in 3D',
      blocks: [
        {
          type: 'p',
          text: 'In 3D you rotate **about an axis**. Rotating about the $z$-axis leaves $z$ alone and turns the $xy$-plane exactly like a 2D rotation, so its matrix is $R_\\theta$ with a $1$ added for $z$. The positive direction follows the [[right-hand-rule]]: point your right thumb along the positive axis and your fingers curl in the positive rotation direction.',
        },
        {
          type: 'derivation',
          title: 'Rotation about the $z$-axis',
          steps: [
            { tex: '\\mathbf{e}_1 \\mapsto (\\cos\\theta, \\sin\\theta, 0), \\quad \\mathbf{e}_2 \\mapsto (-\\sin\\theta, \\cos\\theta, 0)', why: 'In the $xy$-plane this is the 2D rotation; the $z$-entries stay $0$.' },
            { tex: '\\mathbf{e}_3 \\mapsto \\mathbf{e}_3', why: 'The axis of rotation does not move.' },
            { tex: `R_z(\\theta) = ${mat(['\\cos\\theta', '-\\sin\\theta', 0], ['\\sin\\theta', '\\cos\\theta', 0], [0, 0, 1])}`, why: 'Images as columns.' },
          ],
        },
        {
          type: 'theorem',
          name: 'The three basic 3D rotations',
          tex: `R_x(\\theta) = ${mat([1, 0, 0], [0, '\\cos\\theta', '-\\sin\\theta'], [0, '\\sin\\theta', '\\cos\\theta'])} \\quad R_y(\\theta) = ${mat(['\\cos\\theta', 0, '\\sin\\theta'], [0, 1, 0], ['-\\sin\\theta', 0, '\\cos\\theta'])}`,
          text: 'Each fixes its own axis. $R_x$ turns $y$ toward $z$; $R_y$ turns $z$ toward $x$; $R_z$ turns $x$ toward $y$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the minus sign in $R_y$ is in the "wrong" place',
          text: 'The positive rotations follow the cycle $x \\to y \\to z \\to x$: about $x$, $y$ goes toward $z$; about $y$, $z$ goes toward $x$; about $z$, $x$ goes toward $y$. For $R_y$ the plane being rotated is the $zx$-plane, taken in the order ($z$, then $x$). So $\\mathbf{e}_3 \\mapsto (\\sin\\theta, 0, \\cos\\theta)$ and $\\mathbf{e}_1 \\mapsto (\\cos\\theta, 0, -\\sin\\theta)$. Written in the usual $x, y, z$ order, the minus sign lands below the diagonal. At $\\theta = 90^\\circ$: $R_y$ sends the $x$-axis to the **negative** $z$-axis.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Yaw, pitch and roll',
          text: 'Game cameras and characters are often oriented by three angles: yaw (about the vertical axis), pitch (about the side axis) and roll (about the forward axis). Each is one of these basic rotations, and the full orientation is the three applied in sequence, which the next unit expresses as a product of matrices. Applying them in a different order gives a different result, and certain pitches line two axes up ("gimbal lock"), which is why engines also use quaternions. Conventions differ too: Unity and Unreal use left-handed coordinate systems, so always check which way a positive angle turns.',
        },
      ],
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'mcq',
      prompt: 'Where does $R_y(90^\\circ)$ (rotation by $90^\\circ$ about the $y$-axis) send $\\mathbf{e}_1 = (1, 0, 0)$?',
      options: [
        {
          text: '$(0, 0, 1)$',
          why: 'That is the sign error from writing $R_y$ like $R_z$. With the right-hand rule about $+y$, positive rotation carries $z$ toward $x$, so $x$ moves toward $-z$.',
        },
        {
          text: '$(0, 0, -1)$',
          correct: true,
          why: 'Column 1 of $R_y(\\theta)$ is $(\\cos\\theta, 0, -\\sin\\theta)$; at $90^\\circ$ that is $(0, 0, -1)$.',
        },
        {
          text: '$(0, 1, 0)$',
          why: 'Rotating about the $y$-axis keeps points in planes perpendicular to $y$, so the $y$-entry of $\\mathbf{e}_1$ stays $0$. $(0, 1, 0)$ is where $R_z(90^\\circ)$ sends $\\mathbf{e}_1$.',
        },
        {
          text: '$(1, 0, 0)$',
          why: 'Only vectors along the axis of rotation are fixed. $\\mathbf{e}_1$ is perpendicular to the $y$-axis, so it moves.',
        },
      ],
      explanation: 'Read column 1 of $R_y(90^\\circ) = \\begin{bmatrix} 0 & 0 & 1 \\\\ 0 & 1 & 0 \\\\ -1 & 0 & 0 \\end{bmatrix}$: it is $(0, 0, -1)$. Check with the cycle: about $y$, positive rotation takes $\\mathbf{e}_3 \\mapsto \\mathbf{e}_1$, and $\\mathbf{e}_1$, which is $90^\\circ$ further around, must go to $-\\mathbf{e}_3$.',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'fill',
      prompt: 'Rotate $\\mathbf{v} = (1, 2, 3)$ by $90^\\circ$ about the $z$-axis.',
      template: '$R_z(90^\\circ)\\,\\mathbf{v} = ($ ___ $,$ ___ $,$ ___ $)$',
      blanks: [{ answers: ['-2'] }, { answers: ['1'] }, { answers: ['3'] }],
      hint: '$R_z(90^\\circ)$ acts on $(x, y)$ like the 2D rotation $(x, y) \\mapsto (-y, x)$ and leaves $z$ alone.',
      explanation: `$R_z(90^\\circ) = ${mat([0, -1, 0], [1, 0, 0], [0, 0, 1])}$, so $R_z(90^\\circ)${col(1, 2, 3)} = ${col(-2, 1, 3)}$. The height $z = 3$ is unchanged because it is measured along the axis of rotation; the $(x, y)$ part $(1, 2)$ turns a quarter-turn to $(-2, 1)$.`,
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'concept',
      title: 'The catalog, and rotating a sprite in C++',
      blocks: [
        {
          type: 'table',
          headers: ['Transform (2D)', 'Matrix', 'What it preserves'],
          rows: [
            ['Rotation by $\\theta$', '$\\begin{bmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{bmatrix}$', 'lengths, angles, orientation'],
            ['Uniform scale by $k > 0$', '$\\begin{bmatrix} k & 0 \\\\ 0 & k \\end{bmatrix}$', 'angles, orientation'],
            ['Non-uniform scale', '$\\begin{bmatrix} s_x & 0 \\\\ 0 & s_y \\end{bmatrix}$', 'axis directions (orientation too if $s_x s_y > 0$)'],
            ['Reflection across line at $\\varphi$', '$\\begin{bmatrix} \\cos 2\\varphi & \\sin 2\\varphi \\\\ \\sin 2\\varphi & -\\cos 2\\varphi \\end{bmatrix}$', 'lengths, angles; **reverses** orientation'],
            ['Horizontal shear', '$\\begin{bmatrix} 1 & k \\\\ 0 & 1 \\end{bmatrix}$', 'area, horizontal lines'],
            ['Vertical shear', '$\\begin{bmatrix} 1 & 0 \\\\ k & 1 \\end{bmatrix}$', 'area, vertical lines'],
            ['Projection onto $x$-axis', '$\\begin{bmatrix} 1 & 0 \\\\ 0 & 0 \\end{bmatrix}$', 'only the $x$-coordinate (not one-to-one)'],
          ],
          caption: 'Every one of these was found by asking where $\\mathbf{e}_1$ and $\\mathbf{e}_2$ go.',
        },
        {
          type: 'p',
          text: 'A sprite is usually rotated about its own center $\\mathbf{c}$, not about the origin. The trick: express each corner relative to the center, rotate that offset with $R_\\theta$, then add the center back: $\\mathbf{p}\' = \\mathbf{c} + R_\\theta(\\mathbf{p} - \\mathbf{c})$. The rotation itself is linear; the shifting is a translation, which the next unit folds into a single matrix with homogeneous coordinates.',
        },
        {
          type: 'code',
          title: 'sprite_rotate.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdio>
#include <numbers>

struct Vec2 { double x, y; };

// The rotation matrix [[c, -s], [s, c]] applied to v.
Vec2 rotate(Vec2 v, double degrees) {
    const double rad = degrees * std::numbers::pi / 180.0;  // std::cos wants radians
    const double c = std::cos(rad), s = std::sin(rad);
    return {c * v.x - s * v.y, s * v.x + c * v.y};
}

int main() {
    const Vec2 center{10, 5};
    // Corners of a 4 x 2 sprite, stored relative to its center.
    const Vec2 corners[] = {{-2, -1}, {2, -1}, {2, 1}, {-2, 1}};
    for (Vec2 local : corners) {
        Vec2 r = rotate(local, 30);
        std::printf("(%g, %g) -> (%.3f, %.3f)\\n",
                    local.x, local.y, center.x + r.x, center.y + r.y);
    }
}`,
          output: `(-2, -1) -> (8.768, 3.134)
(2, -1) -> (12.232, 5.134)
(2, 1) -> (11.232, 6.866)
(-2, 1) -> (7.768, 4.866)`,
          annotations: [
            { lines: 9, text: 'Degrees to radians. Forgetting this is the single most common rotation bug.' },
            { lines: 11, text: 'Row 1 of $R_\\theta$ gives $x\\cos\\theta - y\\sin\\theta$; row 2 gives $x\\sin\\theta + y\\cos\\theta$.' },
            { lines: 17, text: 'Storing corners relative to the center means the rotation happens about the center.' },
            { lines: 21, text: 'Add the center back: $\\mathbf{c} + R_\\theta(\\mathbf{p} - \\mathbf{c})$.' },
          ],
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Check a rotation in two seconds',
          text: 'Rotations preserve distances, so every rotated corner must stay the same distance from the center as before: here $\\sqrt{2^2 + 1^2} = \\sqrt{5} \\approx 2.236$. For the first corner, $(8.768 - 10)^2 + (3.134 - 5)^2 \\approx 1.518 + 3.482 = 5$. If that check fails, look for a sign error in $-\\sin\\theta$ or a missing radians conversion.',
        },
      ],
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'order',
      prompt: 'Order the steps to rotate a sprite corner $\\mathbf{p}$ by $\\theta$ about the sprite\'s center $\\mathbf{c}$.',
      lines: [
        'Subtract the center: $\\mathbf{p} - \\mathbf{c}$',
        'Multiply by the rotation matrix: $R_\\theta(\\mathbf{p} - \\mathbf{c})$',
        'Add the center back: $\\mathbf{c} + R_\\theta(\\mathbf{p} - \\mathbf{c})$',
      ],
      distractors: ['Rotate the corner about the origin first: $R_\\theta\\mathbf{p}$'],
      explanation: '$R_\\theta$ always rotates about the origin, so first make the center the origin by subtracting $\\mathbf{c}$, then rotate, then shift back. Applying $R_\\theta$ to $\\mathbf{p}$ directly would swing the whole sprite around the world origin. This translate–rotate–translate pattern becomes a single matrix product once translations are matrices (homogeneous coordinates, next unit).',
    },
  ],
  takeaways: [
    'Every standard transform is found by tracking $\\mathbf{e}_1$ and $\\mathbf{e}_2$ (and $\\mathbf{e}_3$ in 3D) and using the images as columns.',
    'Rotation: $R_\\theta = \\begin{bmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{bmatrix}$, counterclockwise for $\\theta > 0$; it preserves lengths, angles and orientation.',
    'Scaling is diagonal; non-uniform scaling changes angles, which is why normals need a different matrix (the inverse transpose).',
    'Shears $\\begin{bmatrix} 1 & k \\\\ 0 & 1 \\end{bmatrix}$, $\\begin{bmatrix} 1 & 0 \\\\ k & 1 \\end{bmatrix}$ preserve area; projections flatten and are not one-to-one.',
    'Reflection across the line at angle $\\varphi$ is $\\begin{bmatrix} \\cos 2\\varphi & \\sin 2\\varphi \\\\ \\sin 2\\varphi & -\\cos 2\\varphi \\end{bmatrix} = 2P - I$; reflections reverse orientation, which flips triangle winding order.',
    '3D rotations about the coordinate axes embed $R_\\theta$ in the plane perpendicular to the axis; positive turns follow $x \\to y \\to z \\to x$, which puts the minus sign of $R_y$ below the diagonal.',
  ],
  reading: [
    {
      title: '3Blue1Brown — Essence of linear algebra',
      url: 'https://www.3blue1brown.com/topics/linear-algebra',
      source: 'video',
      note: 'The chapters on linear transformations and on three-dimensional transformations show rotations, shears and reflections as moving grids.',
    },
    {
      title: 'Wikipedia — Rotation matrix',
      url: 'https://en.wikipedia.org/wiki/Rotation_matrix',
      source: 'wikipedia',
      note: 'Derivations, the 3D basic rotations, and a careful discussion of sign and handedness conventions.',
    },
    {
      title: 'Wikipedia — Shear mapping',
      url: 'https://en.wikipedia.org/wiki/Shear_mapping',
      source: 'wikipedia',
      note: 'Horizontal and vertical shears, why they preserve area, and their use in rotating images by three shears.',
    },
    {
      title: 'Wikipedia — Reflection (mathematics)',
      url: 'https://en.wikipedia.org/wiki/Reflection_(mathematics)',
      source: 'wikipedia',
      note: 'Reflections across lines and planes, the formula $2\\,\\text{proj} - I$, and why two reflections make a rotation.',
    },
  ],
};
