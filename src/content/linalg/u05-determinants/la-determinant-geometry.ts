import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'la-determinant-geometry',
  title: 'Determinants as Area, Volume and Orientation',
  summary: 'What the determinant really measures: how much a transformation scales area and volume, and whether it mirrors space — plus Cramer\'s rule, triple products and the orientation test behind collision code.',
  minutes: 20,
  objectives: [
    'Compute the area of a parallelogram and the volume of a parallelepiped with a determinant',
    'Explain $|\\det A|$ as the factor by which $T(\\mathbf{x}) = A\\mathbf{x}$ scales every area or volume',
    'Interpret the sign of $\\det A$ as orientation, and recognise mirroring transforms by $\\det A < 0$',
    'Write the scalar triple product and the cross product as determinants',
    'Use the 2D orientation test for triangle area, left/right tests and winding order',
    'Solve small systems with Cramer\'s rule and explain why it is not used for large ones',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Area of a parallelogram',
      blocks: [
        {
          type: 'p',
          text: 'Two vectors $\\mathbf{u}, \\mathbf{v}$ in $\\mathbb{R}^2$ **span a parallelogram**: the set of points $s\\mathbf{u} + t\\mathbf{v}$ with $0 \\le s, t \\le 1$, whose corners are $\\mathbf{0}$, $\\mathbf{u}$, $\\mathbf{v}$ and $\\mathbf{u} + \\mathbf{v}$. In the first lesson of this unit you watched $ad - bc$ shrink to $0$ whenever this parallelogram flattened. Here is the exact statement.',
        },
        {
          type: 'theorem',
          name: 'Area as a determinant',
          tex: '\\text{Area of the parallelogram spanned by the columns of } A = \\left|\\det A\\right|',
          text: 'for any $2 \\times 2$ matrix $A$.',
        },
        {
          type: 'graph',
          x: [-0.5, 4.5],
          y: [-0.5, 3.5],
          equal: true,
          height: 260,
          segments: [
            { from: [0, 0], to: [3, 1], arrow: true, color: 'blue', label: 'u = (a, c)' },
            { from: [0, 0], to: [1, 2], arrow: true, color: 'red', label: 'v = (b, d)' },
            { from: [3, 1], to: [4, 3], color: 'purple' },
            { from: [1, 2], to: [4, 3], color: 'purple' },
            { from: [4, 0], to: [4, 3], dashed: true, color: 'gray' },
            { from: [0, 3], to: [4, 3], dashed: true, color: 'gray' },
            { from: [0, 0], to: [4, 0], dashed: true, color: 'gray' },
            { from: [0, 0], to: [0, 3], dashed: true, color: 'gray' },
            { from: [3, 0], to: [3, 1], dashed: true, color: 'gray' },
            { from: [1, 2], to: [1, 3], dashed: true, color: 'gray' },
            { from: [0, 2], to: [1, 2], dashed: true, color: 'gray' },
            { from: [3, 1], to: [4, 1], dashed: true, color: 'gray' },
          ],
          caption: 'Here $a = 3, c = 1, b = 1, d = 2$. The dashed box has area $4 \\times 3 = 12$; the pieces outside the parallelogram are four right triangles and two $1 \\times 1$ rectangles.',
        },
        {
          type: 'derivation',
          title: 'Area by "box minus corners", with $\\mathbf{u} = (a, c)$ and $\\mathbf{v} = (b, d)$, all positive, as in the picture',
          steps: [
            { tex: '\\text{box} = (a + b)(c + d) = ac + ad + bc + bd', why: 'The parallelogram fits in a box of width $a + b$ and height $c + d$.' },
            { tex: '\\text{triangles: } 2 \\cdot \\tfrac12 ac + 2 \\cdot \\tfrac12 bd = ac + bd', why: 'Two triangles have legs $a$ and $c$ (under $\\mathbf{u}$ and its copy on top); two have legs $b$ and $d$ (beside $\\mathbf{v}$ and its copy).' },
            { tex: '\\text{rectangles: } 2bc', why: 'Two corner rectangles of width $b$ and height $c$.' },
            { tex: '\\text{area} = (ac + ad + bc + bd) - (ac + bd) - 2bc = ad - bc', why: 'Subtract everything outside the parallelogram from the box.' },
            { tex: '3 \\cdot 2 - 1 \\cdot 1 = 5 = 12 - 3 - 2 - 2', why: 'Check with the picture: box $12$, triangles $3 + 2$, rectangles $2$.' },
          ],
          result: 'Area $= ad - bc = \\det\\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix}$ in this configuration. Other configurations can give $bc - ad$; the absolute value covers every case.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'A proof that works in every position (and in every dimension)',
          text: 'Use column operations, which follow the same rules as row operations because $\\det A^{T} = \\det A$. A **column replacement** $\\mathbf{v} \\to \\mathbf{v} + k\\mathbf{u}$ is a shear of the parallelogram: same base, same height, same area — and the determinant is unchanged too. A **column swap** does not change the parallelogram, and $|\\det|$ is unchanged. **Scaling** one column by $k$ scales the area by $|k|$ and $|\\det|$ by $|k|$. These operations reduce $A$ either to a matrix with a zero column (flat parallelogram, area $0 = |\\det|$) or to a diagonal matrix $\\begin{bmatrix} p & 0 \\\\ 0 & q \\end{bmatrix}$ — a rectangle of area $|pq| = |\\det|$. Area and $|\\det A|$ start equal and change identically, so they are always equal.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'numeric',
      prompt: 'A parallelogram has vertices $P(1, 1)$, $Q(4, 2)$, $R(3, 5)$ and $S(0, 4)$. Find its area.',
      hint: 'Use the two edge vectors leaving $P$: $Q - P$ and $S - P$. Put them in the columns of a $2 \\times 2$ matrix.',
      label: 'Area $=$',
      answer: '10',
      explanation: 'The edges from $P$ are $Q - P = (3, 1)$ and $S - P = (-1, 3)$. Then $\\det\\begin{bmatrix} 3 & -1 \\\\ 1 & 3 \\end{bmatrix} = 9 - (-1) = 10$, so the area is $|10| = 10$. (Check: $P + (Q - P) + (S - P) = (3, 5) = R$, so these really are the sides.) The parallelogram is not at the origin, but translating it does not change its area — only the edge vectors matter.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: '$|\\det A|$ scales every area',
      blocks: [
        {
          type: 'p',
          text: 'Now think of $A$ as a [[linear-transformation]] $T(\\mathbf{x}) = A\\mathbf{x}$. It sends $\\mathbf{e}_1 \\mapsto \\mathbf{a}_1$ and $\\mathbf{e}_2 \\mapsto \\mathbf{a}_2$, so the unit square (area $1$) lands on the parallelogram spanned by the columns — area $|\\det A|$. The remarkable part is that **every** region gets scaled by that same factor.',
        },
        {
          type: 'theorem',
          name: 'Area (volume) scaling',
          tex: '\\text{area}\\big(T(S)\\big) = |\\det A| \\cdot \\text{area}(S)',
          text: 'for every region $S$ of finite area, when $T(\\mathbf{x}) = A\\mathbf{x}$ with $A$ a $2 \\times 2$ matrix. For $3 \\times 3$ matrices, replace area by volume.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why one number works for every shape',
          text: 'A parallelogram spanned by $\\mathbf{u}, \\mathbf{v}$ maps to the one spanned by $A\\mathbf{u}, A\\mathbf{v}$, with area $|\\det[\\,A\\mathbf{u}\\;\\;A\\mathbf{v}\\,]| = |\\det(A[\\,\\mathbf{u}\\;\\;\\mathbf{v}\\,])| = |\\det A| \\cdot |\\det[\\,\\mathbf{u}\\;\\;\\mathbf{v}\\,]|$ by the product rule — scaled by $|\\det A|$. Translation does not change area, so every small grid square anywhere in the plane is scaled by the same factor. Cover any region with tiny grid squares and let them shrink, exactly like a Riemann sum: the total area scales by $|\\det A|$.',
        },
        {
          type: 'graph',
          x: [-4, 4],
          y: [-4, 4],
          equal: true,
          height: 340,
          parametric: [
            { x: 'cos(t)', y: 'sin(t)', t: [0, '2pi'], color: 'gray', dashed: true },
            { x: 'a*cos(t) + b*sin(t)', y: 'c*cos(t) + d*sin(t)', t: [0, '2pi'], color: 'green', label: 'image of the unit circle' },
          ],
          segments: [
            { from: [1, 0], to: [1, 1], dashed: true, color: 'gray' },
            { from: [0, 1], to: [1, 1], dashed: true, color: 'gray' },
            { from: [0, 0], to: ['a', 'c'], arrow: true, color: 'blue', label: 'T(e₁)' },
            { from: [0, 0], to: ['b', 'd'], arrow: true, color: 'red', label: 'T(e₂)' },
            { from: ['a', 'c'], to: ['a + b', 'c + d'], color: 'purple' },
            { from: ['b', 'd'], to: ['a + b', 'c + d'], color: 'purple' },
          ],
          sliders: [
            { name: 'a', min: -3, max: 3, step: 0.25, value: 2, label: '$a$' },
            { name: 'b', min: -3, max: 3, step: 0.25, value: 1, label: '$b$' },
            { name: 'c', min: -3, max: 3, step: 0.25, value: 1, label: '$c$' },
            { name: 'd', min: -3, max: 3, step: 0.25, value: 2, label: '$d$' },
          ],
          readouts: [
            { label: '$\\det A = ad - bc =$', expr: 'a*d - b*c', digits: 2 },
            { label: 'area of the image of the unit square $=$', expr: 'abs(a*d - b*c)', digits: 2 },
            { label: 'area of the image of the unit disk $=$', expr: 'pi*abs(a*d - b*c)', digits: 3 },
          ],
          caption: '$A = \\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix}$ maps the dashed unit square to the purple parallelogram and the dashed unit circle to the green ellipse. Both areas are multiplied by the same factor $|\\det A|$. Make the columns parallel and everything collapses onto a line: area $0$.',
        },
        {
          type: 'derivation',
          title: 'The area of an ellipse, for free',
          steps: [
            { tex: 'A = \\begin{bmatrix} 3 & 0 \\\\ 0 & 2 \\end{bmatrix}, \\quad \\det A = 6', why: 'Stretch $x$ by $3$ and $y$ by $2$.' },
            { tex: 'T(\\text{unit disk}) = \\left\\{ \\tfrac{x^2}{9} + \\tfrac{y^2}{4} \\le 1 \\right\\}', why: 'A point $(x, y) = (3u, 2v)$ is in the image exactly when $u^2 + v^2 \\le 1$, i.e. $(x/3)^2 + (y/2)^2 \\le 1$.' },
            { tex: '\\text{area} = |\\det A| \\cdot \\pi \\cdot 1^2 = 6\\pi', why: 'Area scaling, starting from the unit disk of area $\\pi$. This is the ellipse formula $\\pi a b$ with $a = 3$, $b = 2$ — no integral needed.' },
          ],
        },
        {
          type: 'p',
          text: 'This also explains $\\det(AB) = \\det A \\det B$ geometrically: applying $B$ scales areas by $|\\det B|$, then applying $A$ scales them by $|\\det A|$, so the composite $AB$ scales them by the product.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'mcq',
      prompt: 'A linear transformation $T: \\mathbb{R}^2 \\to \\mathbb{R}^2$ has standard matrix with determinant $-3$. A region $S$ has area $5$. What can you say about $T(S)$?',
      options: [
        { text: 'It has area $-15$', why: 'Areas are never negative. The magnitude $|\\det A| = 3$ scales the area; the sign carries different information.' },
        { text: 'It has area $15$, and $T$ preserves orientation', why: 'The area is right, but a negative determinant means orientation is reversed.' },
        { text: 'It has area $\\tfrac{5}{3}$, and $T$ reverses orientation', why: 'The area is multiplied by $|\\det A|$, not divided by it. Dividing is what $T^{-1}$ would do.' },
        { text: 'It has area $15$, and $T$ reverses orientation (it mirrors)', correct: true, why: '$|{-3}| \\cdot 5 = 15$, and $\\det < 0$ means $T$ flips orientation.' },
      ],
      explanation: 'The magnitude and the sign of a determinant answer two separate questions. $|\\det A| = 3$: every area is tripled, so $\\text{area}(T(S)) = 15$. $\\det A < 0$: $T$ turns counterclockwise into clockwise — it includes a reflection, as the next card explains.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'The sign of the determinant: orientation',
      blocks: [
        {
          type: 'p',
          text: 'The absolute value forgets something. The sign of $\\det[\\,\\mathbf{u}\\;\\;\\mathbf{v}\\,]$ tells you the [[orientation]] of the ordered pair: **positive** when $\\mathbf{v}$ lies counterclockwise from $\\mathbf{u}$ (less than a half-turn away), **negative** when it lies clockwise, zero when they are parallel. The standard pair $\\mathbf{e}_1, \\mathbf{e}_2$ is positively oriented: $\\det I = 1$.',
        },
        {
          type: 'definition',
          term: 'Orientation-preserving and orientation-reversing',
          text: '$T(\\mathbf{x}) = A\\mathbf{x}$ **preserves orientation** if $\\det A > 0$ ($T(\\mathbf{e}_1), T(\\mathbf{e}_2)$ are still counterclockwise) and **reverses orientation** if $\\det A < 0$. An orientation-reversing map turns every shape into its mirror image.',
        },
        {
          type: 'table',
          headers: ['Transform', 'Matrix', '$\\det$', 'Effect'],
          rows: [
            ['Rotation by $\\theta$', '$\\begin{bmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{bmatrix}$', '$\\cos^2\\theta + \\sin^2\\theta = 1$', 'keeps area and orientation'],
            ['Shear', '$\\begin{bmatrix} 1 & k \\\\ 0 & 1 \\end{bmatrix}$', '$1$', 'keeps area and orientation'],
            ['Scale', '$\\begin{bmatrix} s_x & 0 \\\\ 0 & s_y \\end{bmatrix}$', '$s_x s_y$', 'area $\\times |s_x s_y|$'],
            ['Reflection in the $x$-axis', '$\\begin{bmatrix} 1 & 0 \\\\ 0 & -1 \\end{bmatrix}$', '$-1$', 'mirror: keeps area, flips orientation'],
            ['Reflection in $y = x$', '$\\begin{bmatrix} 0 & 1 \\\\ 1 & 0 \\end{bmatrix}$', '$-1$', 'mirror (a column swap)'],
            ['Projection onto the $x$-axis', '$\\begin{bmatrix} 1 & 0 \\\\ 0 & 0 \\end{bmatrix}$', '$0$', 'flattens: area $0$'],
          ],
        },
        {
          type: 'graph',
          x: [-1.6, 1.6],
          y: [-0.4, 2.2],
          equal: true,
          segments: [
            { from: [0.25, 0.1], to: [0.25, 0.9], dashed: true, color: 'gray' },
            { from: [0.25, 0.9], to: [0.75, 0.9], dashed: true, color: 'gray' },
            { from: [0.25, 0.5], to: [0.6, 0.5], dashed: true, color: 'gray' },
            { from: [0, 0], to: ['cos(q)', 'sin(q)'], arrow: true, color: 'blue', label: 'T(e₁)' },
            { from: [0, 0], to: [0, 1], arrow: true, color: 'red', label: 'T(e₂)' },
            { from: ['cos(q)', 'sin(q)'], to: ['cos(q)', 'sin(q) + 1'], color: 'purple' },
            { from: [0, 1], to: ['cos(q)', 'sin(q) + 1'], color: 'purple' },
            { from: ['0.25cos(q)', '0.25sin(q) + 0.1'], to: ['0.25cos(q)', '0.25sin(q) + 0.9'], color: 'orange' },
            { from: ['0.25cos(q)', '0.25sin(q) + 0.9'], to: ['0.75cos(q)', '0.75sin(q) + 0.9'], color: 'orange' },
            { from: ['0.25cos(q)', '0.25sin(q) + 0.5'], to: ['0.6cos(q)', '0.6sin(q) + 0.5'], color: 'orange' },
          ],
          sliders: [{ name: 'q', min: 0, max: 3.14, step: 0.02, value: 0.4, label: 'angle of $T(\\mathbf{e}_1)$' }],
          readouts: [{ label: '$\\det A = \\cos q$:', expr: 'cos(q)', digits: 3 }],
          caption: 'The matrix with columns $(\\cos q, \\sin q)$ and $(0, 1)$ acting on the letter F (gray: original). Swing $T(\\mathbf{e}_1)$ past $T(\\mathbf{e}_2)$: at $q = \\pi/2$ the square collapses ($\\det = 0$), and beyond it the orange F comes out **mirrored** ($\\det < 0$). At $q = \\pi$ the map is the reflection in the $y$-axis.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why you cannot rotate a mirror image back',
          text: 'The determinant is a polynomial in the entries, so it changes continuously as a matrix changes continuously. To get from $\\det > 0$ to $\\det < 0$ it must pass through $0$ — the slider shows exactly this. So no continuous motion through invertible transforms (rotating, scaling, shearing) can turn a shape into its mirror image. That is why your left glove never fits your right hand. In 3D, $\\det > 0$ maps right-handed frames to right-handed frames ([[right-hand-rule]]) and $\\det < 0$ swaps handedness.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Mirrored meshes and back-face culling',
          text: 'Renderers decide which side of a triangle faces the camera from its [[la-winding-order|winding order]]: by convention front faces appear counterclockwise on screen. Mirror an object (scale $x$ by $-1$, say) and every triangle\'s winding flips, so with culling on the mesh renders inside-out. Engines detect this with the sign of the determinant of the model matrix\'s upper-left $3 \\times 3$ block and flip the front-face rule for that draw.',
        },
        {
          type: 'code',
          title: 'mirror_check.cpp',
          code: `// model: the object's 4x4 world matrix (glm::mat4)
glm::mat3 linear = glm::mat3(model);               // upper-left 3x3 block
bool mirrored = glm::determinant(linear) < 0.0f;   // det < 0: orientation reversed
glFrontFace(mirrored ? GL_CW : GL_CCW);            // keep culling the true back faces`,
          annotations: [
            { lines: 2, text: 'Translation lives in the 4th column and does not affect orientation, so only the linear part matters.' },
            { lines: 3, text: 'Only the sign is needed here; its size, $|\\det|$, is the volume scale of the object.' },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'truefalse',
      prompt: 'If $\\det A = 1$ for a $2 \\times 2$ matrix $A$, then $T(\\mathbf{x}) = A\\mathbf{x}$ must be a rotation.',
      answer: false,
      explanation: 'False. $\\det A = 1$ only says that $T$ preserves area and orientation. The shear $\\begin{bmatrix} 1 & 2 \\\\ 0 & 1 \\end{bmatrix}$ has determinant $1$ but slants squares into parallelograms; $\\begin{bmatrix} 2 & 0 \\\\ 0 & \\tfrac12 \\end{bmatrix}$ has determinant $1$ but stretches and squashes. Rotations need more: they must also preserve lengths and angles.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'Volume in 3D: the triple product and the cross product',
      blocks: [
        {
          type: 'p',
          text: 'Three vectors in $\\mathbb{R}^3$ span a [[la-parallelepiped|parallelepiped]] — a slanted box with parallelogram faces. Everything from 2D carries over with volume in place of area.',
        },
        {
          type: 'theorem',
          name: 'Volume as a determinant',
          tex: '\\text{Volume} = \\left|\\det\\begin{bmatrix} \\mathbf{u} & \\mathbf{v} & \\mathbf{w} \\end{bmatrix}\\right| = \\left|\\,\\mathbf{u} \\cdot (\\mathbf{v} \\times \\mathbf{w})\\,\\right|',
          text: 'and a linear transformation $T: \\mathbb{R}^3 \\to \\mathbb{R}^3$ multiplies every volume by $|\\det A|$.',
        },
        {
          type: 'p',
          text: 'The middle expression $\\mathbf{u} \\cdot (\\mathbf{v} \\times \\mathbf{w})$ is the [[la-scalar-triple-product|scalar triple product]]. Why it equals the determinant: expand the determinant with **rows** $\\mathbf{u}, \\mathbf{v}, \\mathbf{w}$ along row 1 (allowed, since $\\det A^{T} = \\det A$).',
        },
        {
          type: 'math',
          tex: '\\begin{vmatrix} u_1 & u_2 & u_3 \\\\ v_1 & v_2 & v_3 \\\\ w_1 & w_2 & w_3 \\end{vmatrix} = u_1\\underbrace{(v_2w_3 - v_3w_2)}_{(\\mathbf{v} \\times \\mathbf{w})_1} + u_2\\underbrace{(v_3w_1 - v_1w_3)}_{(\\mathbf{v} \\times \\mathbf{w})_2} + u_3\\underbrace{(v_1w_2 - v_2w_1)}_{(\\mathbf{v} \\times \\mathbf{w})_3}',
          caption: 'The three cofactors along row 1 are exactly the components of $\\mathbf{v} \\times \\mathbf{w}$.',
        },
        {
          type: 'p',
          text: 'That is also why the [[cross-product]] formula you learned is often written as a "formal" determinant with the basis vectors in the first row — expanding along row 1 produces the components:',
        },
        {
          type: 'math',
          tex: '\\mathbf{v} \\times \\mathbf{w} = \\begin{vmatrix} \\mathbf{i} & \\mathbf{j} & \\mathbf{k} \\\\ v_1 & v_2 & v_3 \\\\ w_1 & w_2 & w_3 \\end{vmatrix}',
        },
        {
          type: 'p',
          text: 'Geometrically: $\\|\\mathbf{v} \\times \\mathbf{w}\\|$ is the area of the base parallelogram and $\\mathbf{v} \\times \\mathbf{w}$ is perpendicular to it, so $|\\mathbf{u} \\cdot (\\mathbf{v} \\times \\mathbf{w})| = \\|\\mathbf{v} \\times \\mathbf{w}\\|\\,\\|\\mathbf{u}\\|\\,|\\cos\\theta|$ is base area times height.',
        },
        {
          type: 'derivation',
          title: 'Volume spanned by $\\mathbf{u} = (1, 0, 2)$, $\\mathbf{v} = (2, 1, 0)$, $\\mathbf{w} = (0, 3, 1)$ (column vectors)',
          steps: [
            { tex: '\\det\\begin{bmatrix} 1 & 2 & 0 \\\\ 0 & 1 & 3 \\\\ 2 & 0 & 1 \\end{bmatrix}', why: 'Put $\\mathbf{u}, \\mathbf{v}, \\mathbf{w}$ in the columns.' },
            { tex: '= 1\\begin{vmatrix} 1 & 3 \\\\ 0 & 1 \\end{vmatrix} - 2\\begin{vmatrix} 0 & 3 \\\\ 2 & 1 \\end{vmatrix} + 0', why: 'Expand along row 1; the $0$ in position $(1,3)$ removes a term.' },
            { tex: '= 1(1 - 0) - 2(0 - 6) = 1 + 12 = 13', why: 'Evaluate the two $2 \\times 2$ minors.' },
            { tex: '\\mathbf{v} \\times \\mathbf{w} = (1 \\cdot 1 - 0 \\cdot 3,\\; 0 \\cdot 0 - 2 \\cdot 1,\\; 2 \\cdot 3 - 1 \\cdot 0) = (1, -2, 6)', why: 'Cross-check with the triple product: first the cross product, component by component.' },
            { tex: '\\mathbf{u} \\cdot (\\mathbf{v} \\times \\mathbf{w}) = 1 + 0 + 12 = 13', why: 'Then the dot product with $\\mathbf{u} = (1, 0, 2)$. Both methods agree.' },
          ],
          result: 'Volume $= 13$. The sign is positive, so $\\mathbf{u}, \\mathbf{v}, \\mathbf{w}$ form a right-handed triple. If the determinant had been $0$, the three vectors would lie in one plane.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Volume of a mesh',
          text: 'The tetrahedron with edges $\\mathbf{u}, \\mathbf{v}, \\mathbf{w}$ from one corner has volume $\\tfrac16|\\det[\\,\\mathbf{u}\\;\\mathbf{v}\\;\\mathbf{w}\\,]|$. For a closed triangle mesh with consistent winding, summing the **signed** volumes $\\tfrac16\\det[\\,\\mathbf{a}\\;\\mathbf{b}\\;\\mathbf{c}\\,]$ of the tetrahedra joining the origin to every triangle $(\\mathbf{a}, \\mathbf{b}, \\mathbf{c})$ gives the volume of the mesh: the parts outside cancel because of the signs. Physics engines use this for mass and buoyancy of arbitrary shapes.',
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'numeric',
      prompt: 'Find the volume of the parallelepiped spanned by $\\mathbf{u} = (2, 1, 0)$, $\\mathbf{v} = (0, 3, 1)$ and $\\mathbf{w} = (1, 0, 4)$ (column vectors).',
      hint: 'Put the vectors in the columns of a $3 \\times 3$ matrix and take the absolute value of its determinant.',
      label: 'Volume $=$',
      answer: '25',
      explanation: '$\\det\\begin{bmatrix} 2 & 0 & 1 \\\\ 1 & 3 & 0 \\\\ 0 & 1 & 4 \\end{bmatrix}$, expanded along row 1: $2(3 \\cdot 4 - 0 \\cdot 1) - 0 + 1(1 \\cdot 1 - 3 \\cdot 0) = 24 + 1 = 25$. The volume is $|25| = 25$. Same answer as $\\mathbf{u} \\cdot (\\mathbf{v} \\times \\mathbf{w})$: $\\mathbf{v} \\times \\mathbf{w} = (12, 1, -3)$ and $\\mathbf{u} \\cdot (12, 1, -3) = 24 + 1 + 0 = 25$.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'concept',
      title: 'Game geometry: triangle area and the orientation test',
      blocks: [
        {
          type: 'p',
          text: 'Put the 2D results to work. Given points $A, B, C$, the edge vectors $B - A$ and $C - A$ span a parallelogram, and triangle $ABC$ is exactly half of it. The determinant of those two edges is so useful in geometry code it has its own name.',
        },
        {
          type: 'definition',
          term: 'The orientation test',
          text: '$$\\operatorname{orient}(A, B, C) = \\det\\begin{bmatrix} b_x - a_x & c_x - a_x \\\\ b_y - a_y & c_y - a_y \\end{bmatrix} = (b_x - a_x)(c_y - a_y) - (b_y - a_y)(c_x - a_x)$$ It is **positive** when $C$ is to the left of the directed line from $A$ to $B$ (so $A \\to B \\to C$ turns counterclockwise), **negative** when $C$ is to the right (clockwise), and **zero** when the three points are collinear. And $\\text{area}(\\triangle ABC) = \\tfrac12\\,|\\operatorname{orient}(A, B, C)|$. See [[la-orientation-test]].',
        },
        {
          type: 'derivation',
          title: '$A = (1, 1)$, $B = (5, 2)$, $C = (2, 4)$',
          steps: [
            { tex: 'B - A = (4, 1), \\qquad C - A = (1, 3)', why: 'Edge vectors leaving $A$ — "end minus start".' },
            { tex: '\\operatorname{orient}(A, B, C) = 4 \\cdot 3 - 1 \\cdot 1 = 11', why: 'The $2 \\times 2$ determinant with those edges as columns.' },
            { tex: '11 > 0 \\implies C \\text{ is left of } \\overrightarrow{AB}', why: 'Positive orientation: the turn $A \\to B \\to C$ is counterclockwise.' },
            { tex: '\\text{area} = \\tfrac12 \\cdot |11| = 5.5', why: 'The triangle is half of the parallelogram spanned by the two edges.' },
          ],
        },
        {
          type: 'graph',
          x: [-1, 7],
          y: [-2, 6],
          equal: true,
          functions: [{ expr: '1 + (x - 1)/4', color: 'gray', dashed: true, label: 'line $AB$' }],
          points: [
            { x: 1, y: 1, label: 'A' },
            { x: 5, y: 2, label: 'B' },
            { x: 'p', y: 'q', label: 'C', color: 'red' },
          ],
          segments: [
            { from: [1, 1], to: [5, 2], arrow: true, color: 'blue' },
            { from: [5, 2], to: ['p', 'q'], color: 'purple' },
            { from: ['p', 'q'], to: [1, 1], color: 'purple' },
          ],
          sliders: [
            { name: 'p', min: -1, max: 7, step: 0.25, value: 2, label: '$C_x$' },
            { name: 'q', min: -2, max: 6, step: 0.25, value: 4, label: '$C_y$' },
          ],
          readouts: [
            { label: '$\\operatorname{orient}(A, B, C) =$', expr: '4*(q - 1) - 1*(p - 1)', digits: 2 },
            { label: 'triangle area $=$', expr: 'abs(4*(q - 1) - (p - 1))/2', digits: 2 },
          ],
          caption: 'Move $C$ across the dashed line $AB$: the sign of the orientation test flips exactly as $C$ crosses from the left side to the right side, and it is $0$ when $C$ sits on the line.',
        },
        {
          type: 'list',
          items: [
            '**Point in triangle:** $P$ is inside triangle $ABC$ when $\\operatorname{orient}(A, B, P)$, $\\operatorname{orient}(B, C, P)$, $\\operatorname{orient}(C, A, P)$ all have the same sign. GPU rasterizers test pixels with these "edge functions".',
            '**Segment intersection:** segments $AB$ and $CD$ cross when $C$ and $D$ are on opposite sides of $AB$ *and* $A$ and $B$ are on opposite sides of $CD$ — four orientation tests.',
            '**Convex hulls:** Graham scan and Andrew\'s monotone chain walk around the points and discard any point where the path makes a right turn ($\\operatorname{orient} < 0$).',
            '**Polygon winding and area:** summing $\\tfrac12\\det$ over the edges of a polygon gives its signed area (the *shoelace formula*): positive means counterclockwise vertex order.',
          ],
        },
        {
          type: 'code',
          title: 'orient.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdio>

struct Vec2 { double x, y; };

Vec2 operator-(Vec2 a, Vec2 b) { return {a.x - b.x, a.y - b.y}; }

// det of the 2x2 matrix with columns u and v (the "2D cross product").
double cross(Vec2 u, Vec2 v) { return u.x * v.y - u.y * v.x; }

// > 0: c is left of the directed line a->b (a, b, c counterclockwise)
// < 0: c is right of it (clockwise);  = 0: collinear
double orient(Vec2 a, Vec2 b, Vec2 c) { return cross(b - a, c - a); }

double triangleArea(Vec2 a, Vec2 b, Vec2 c) { return 0.5 * std::fabs(orient(a, b, c)); }

bool insideTriangle(Vec2 p, Vec2 a, Vec2 b, Vec2 c) {
    double d1 = orient(a, b, p), d2 = orient(b, c, p), d3 = orient(c, a, p);
    bool hasNeg = d1 < 0 || d2 < 0 || d3 < 0;
    bool hasPos = d1 > 0 || d2 > 0 || d3 > 0;
    return !(hasNeg && hasPos);        // all on the same side (or on an edge)
}

int main() {
    Vec2 A{1, 1}, B{5, 2}, C{2, 4};
    std::printf("orient(A, B, C) = %g\\n", orient(A, B, C));
    std::printf("orient(A, C, B) = %g\\n", orient(A, C, B));
    std::printf("area = %g\\n", triangleArea(A, B, C));
    std::printf("(3, 2) inside? %s\\n", insideTriangle({3, 2}, A, B, C) ? "yes" : "no");
    std::printf("(4, 4) inside? %s\\n", insideTriangle({4, 4}, A, B, C) ? "yes" : "no");
}`,
          output: `orient(A, B, C) = 11
orient(A, C, B) = -11
area = 5.5
(3, 2) inside? yes
(4, 4) inside? no`,
          annotations: [
            { lines: 9, text: 'The whole trick: a $2 \\times 2$ determinant, two multiplications and a subtraction.' },
            { lines: 13, text: 'Edge vectors from $a$, exactly as in the definition.' },
            { lines: '17-22', text: 'Inside means the point is on the same side of all three directed edges, whichever way the triangle is wound.' },
            { lines: 27, text: 'Swapping $B$ and $C$ swaps the columns, so the sign flips — orientation reversed.' },
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Floating-point near zero',
          text: 'When $C$ is almost on line $AB$, rounding can give the wrong sign, and a convex hull or mesh-boolean algorithm can then contradict itself and crash. Robust geometry libraries use exact or adaptive-precision versions of `orient` for that reason; with integer grid coordinates the test is exact.',
        },
      ],
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'mcq',
      prompt: 'A patrolling enemy walks from $A = (2, 1)$ toward $B = (-1, 3)$. The player is at $C = (4, 5)$. Using the orientation test, where is the player relative to the enemy\'s path?',
      hint: 'Compute $\\det[\\,B - A \\;\\; C - A\\,]$ with $B - A = (-3, 2)$ and $C - A = (2, 4)$.',
      options: [
        { text: 'To the left of the path ($A \\to B \\to C$ is counterclockwise)', why: 'That would need a positive determinant. Watch the signs: $(-3)(4) = -12$, and you subtract $(2)(2) = 4$.' },
        { text: 'To the right of the path ($A \\to B \\to C$ is clockwise)', correct: true, why: '$(-3)(4) - (2)(2) = -16 < 0$, so $C$ is to the right.' },
        { text: 'Exactly on the line through $A$ and $B$', why: 'That would need the determinant to be $0$; it is $-16$.' },
        { text: 'It cannot be decided without computing angles with `atan2`', why: 'The sign of one determinant decides it — no trig, no square roots, no division. That is why games use it.' },
      ],
      explanation: '$\\operatorname{orient}(A, B, C) = (b_x - a_x)(c_y - a_y) - (b_y - a_y)(c_x - a_x) = (-3)(4) - (2)(2) = -16$. Negative means clockwise, so the player is on the enemy\'s right-hand side. (Bonus: triangle $ABC$ has area $\\tfrac12 \\cdot 16 = 8$.)',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'error',
      prompt: 'A student finds the area of the triangle with vertices $A(1, 2)$, $B(5, 3)$, $C(2, 6)$. Tap the first line that is wrong.',
      lines: [
        '$\\mathbf{u} = B - A = (4, 1)$',
        '$\\mathbf{v} = C - A = (1, 4)$',
        '$\\det[\\,\\mathbf{u}\\;\\;\\mathbf{v}\\,] = 4 \\cdot 4 - 1 \\cdot 1 = 15$',
        'Area of triangle $ABC = 15$',
      ],
      errorLines: [4],
      explanation: 'Lines 1–3 are correct: $|\\det[\\,\\mathbf{u}\\;\\;\\mathbf{v}\\,]| = 15$ is the area of the **parallelogram** spanned by the two edges. The triangle is half of that parallelogram, so its area is $\\tfrac{15}{2} = 7.5$. Forgetting the $\\tfrac12$ is the classic slip — when in doubt, sketch the parallelogram and see the triangle cut it along a diagonal.',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'concept',
      title: 'Cramer\'s rule',
      blocks: [
        {
          type: 'p',
          text: 'Determinants also give an explicit formula for the solution of a square system. For an $n \\times n$ matrix $A$ and a vector $\\mathbf{b}$, write $A_i(\\mathbf{b})$ for the matrix $A$ with **column $i$ replaced by $\\mathbf{b}$**.',
        },
        {
          type: 'theorem',
          name: 'Cramer\'s rule',
          tex: 'x_i = \\frac{\\det A_i(\\mathbf{b})}{\\det A}, \\qquad i = 1, \\dots, n',
          text: 'If $A$ is an invertible $n \\times n$ matrix, then for every $\\mathbf{b}$ the unique solution of $A\\mathbf{x} = \\mathbf{b}$ has these entries. See [[cramers-rule]].',
        },
        {
          type: 'derivation',
          title: 'Why it works',
          steps: [
            { tex: 'I_i(\\mathbf{x}) = \\text{the identity with column } i \\text{ replaced by } \\mathbf{x}', why: 'A helper matrix. Its determinant is $x_i$: expand along row $i$, which is all zeros except $x_i$ on the diagonal, leaving $x_i \\det I_{n-1}$.' },
            { tex: 'A\\, I_i(\\mathbf{x}) = [\\,A\\mathbf{e}_1 \\cdots A\\mathbf{x} \\cdots A\\mathbf{e}_n\\,] = [\\,\\mathbf{a}_1 \\cdots \\mathbf{b} \\cdots \\mathbf{a}_n\\,] = A_i(\\mathbf{b})', why: 'Multiply column by column: $A\\mathbf{e}_j = \\mathbf{a}_j$, and in column $i$, $A\\mathbf{x} = \\mathbf{b}$.' },
            { tex: '\\det A \\cdot x_i = \\det A_i(\\mathbf{b})', why: 'Take determinants and use the product rule: $\\det A \\cdot \\det I_i(\\mathbf{x}) = \\det A_i(\\mathbf{b})$.' },
            { tex: 'x_i = \\frac{\\det A_i(\\mathbf{b})}{\\det A}', why: 'Divide — allowed because $A$ is invertible, so $\\det A \\ne 0$.' },
          ],
        },
        {
          type: 'derivation',
          title: 'A $2 \\times 2$ system: $2x_1 + x_2 = 7$, $\\; 3x_1 - 4x_2 = -6$',
          steps: [
            { tex: '\\det A = \\begin{vmatrix} 2 & 1 \\\\ 3 & -4 \\end{vmatrix} = -8 - 3 = -11', why: 'Nonzero, so Cramer\'s rule applies.' },
            { tex: 'x_1 = \\frac{1}{-11}\\begin{vmatrix} 7 & 1 \\\\ -6 & -4 \\end{vmatrix} = \\frac{-28 + 6}{-11} = \\frac{-22}{-11} = 2', why: 'Replace column 1 with $\\mathbf{b} = (7, -6)$.' },
            { tex: 'x_2 = \\frac{1}{-11}\\begin{vmatrix} 2 & 7 \\\\ 3 & -6 \\end{vmatrix} = \\frac{-12 - 21}{-11} = \\frac{-33}{-11} = 3', why: 'Replace column 2 with $\\mathbf{b}$. Check: $2(2) + 3 = 7$ and $3(2) - 4(3) = -6$.' },
          ],
        },
        {
          type: 'derivation',
          title: 'A $3 \\times 3$ system: $x_1 + x_2 + x_3 = 6$, $\\; 2x_1 - x_2 + x_3 = 3$, $\\; x_1 + 2x_2 - x_3 = 2$',
          steps: [
            { tex: '\\det A = \\begin{vmatrix} 1 & 1 & 1 \\\\ 2 & -1 & 1 \\\\ 1 & 2 & -1 \\end{vmatrix} = 1(1 - 2) - 1(-2 - 1) + 1(4 + 1) = 7', why: 'Expand along row 1: $-1 + 3 + 5 = 7$.' },
            { tex: '\\det A_1(\\mathbf{b}) = \\begin{vmatrix} 6 & 1 & 1 \\\\ 3 & -1 & 1 \\\\ 2 & 2 & -1 \\end{vmatrix} = 6(1 - 2) - 1(-3 - 2) + 1(6 + 2) = 7', why: 'Column 1 replaced by $\\mathbf{b} = (6, 3, 2)$: $-6 + 5 + 8 = 7$.' },
            { tex: '\\det A_2(\\mathbf{b}) = \\begin{vmatrix} 1 & 6 & 1 \\\\ 2 & 3 & 1 \\\\ 1 & 2 & -1 \\end{vmatrix} = 1(-3 - 2) - 6(-2 - 1) + 1(4 - 3) = 14', why: 'Column 2 replaced: $-5 + 18 + 1 = 14$.' },
            { tex: '\\det A_3(\\mathbf{b}) = \\begin{vmatrix} 1 & 1 & 6 \\\\ 2 & -1 & 3 \\\\ 1 & 2 & 2 \\end{vmatrix} = 1(-2 - 6) - 1(4 - 3) + 6(4 + 1) = 21', why: 'Column 3 replaced: $-8 - 1 + 30 = 21$.' },
            { tex: '\\mathbf{x} = \\left(\\tfrac{7}{7}, \\tfrac{14}{7}, \\tfrac{21}{7}\\right) = (1, 2, 3)', why: 'Divide each by $\\det A = 7$. Check row 2: $2 - 2 + 3 = 3$. ✓' },
          ],
          result: 'Four $3 \\times 3$ determinants to solve one $3 \\times 3$ system.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Why nobody solves big systems this way',
          text: 'Cramer\'s rule needs $n + 1$ determinants of size $n$. Even computed by row reduction, that is about $n$ times the work of simply row reducing $[\\,A \\mid \\mathbf{b}\\,]$ once — and with cofactor expansion it is hopeless. It is also less accurate in floating point. Use elimination (LU) for real systems.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Where Cramer\'s rule earns its keep',
          text: 'For tiny fixed-size systems a closed form is great: no loops, no pivoting branches, easy to vectorize. **Barycentric coordinates** — the weights that interpolate colors, UVs and normals across a triangle — come from solving a $2 \\times 2$ system with Cramer\'s rule, and each weight turns out to be a ratio of triangle areas, i.e. of orientation tests. Cramer\'s rule also shows that each $x_i$ is a ratio of polynomials in the entries of $A$ and $\\mathbf{b}$, so the solution changes smoothly with the data.',
        },
        {
          type: 'deepdive',
          title: 'The inverse formula, from Cramer\'s rule',
          blocks: [
            {
              type: 'p',
              text: 'Column $j$ of $A^{-1}$ solves $A\\mathbf{x} = \\mathbf{e}_j$. Apply Cramer\'s rule and expand $\\det A_i(\\mathbf{e}_j)$ down column $i$: the only nonzero entry is the $1$ in row $j$, leaving the cofactor $C_{ji}$. So the $(i, j)$ entry of $A^{-1}$ is $C_{ji}/\\det A$:',
            },
            {
              type: 'math',
              tex: 'A^{-1} = \\frac{1}{\\det A}\\,\\operatorname{adj} A, \\qquad \\operatorname{adj} A = \\begin{bmatrix} C_{11} & C_{21} & \\cdots & C_{n1} \\\\ C_{12} & C_{22} & \\cdots & C_{n2} \\\\ \\vdots & & & \\vdots \\\\ C_{1n} & C_{2n} & \\cdots & C_{nn} \\end{bmatrix}',
              caption: 'The adjugate is the transpose of the matrix of cofactors.',
            },
            {
              type: 'p',
              text: 'For $2 \\times 2$, the cofactors are $C_{11} = d$, $C_{12} = -c$, $C_{21} = -b$, $C_{22} = a$, which reproduces $\\frac{1}{ad - bc}\\begin{bmatrix} d & -b \\\\ -c & a \\end{bmatrix}$ — the formula this unit started from. Hand-written $4 \\times 4$ inverses in game math libraries are this formula, with the $2 \\times 2$ sub-determinants shared.',
            },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'fill',
      prompt: 'Complete Cramer\'s rule for an invertible $A$.',
      template: 'In $x_i = \\dfrac{\\det A_i(\\mathbf{b})}{\\det A}$, the matrix $A_i(\\mathbf{b})$ is $A$ with ___ replaced by ___ .',
      blanks: [{ answers: ['column $i$'] }, { answers: ['$\\mathbf{b}$'] }],
      wordBank: ['column $i$', 'row $i$', '$\\mathbf{b}$', '$\\mathbf{x}$', '$\\mathbf{e}_i$'],
      explanation: 'Each unknown $x_i$ multiplies column $i$ of $A$ (because $A\\mathbf{x} = x_1\\mathbf{a}_1 + \\cdots + x_n\\mathbf{a}_n$), so it is column $i$ that gets replaced by the right-hand side $\\mathbf{b}$. Replacing a row would mix up the equations, and $\\mathbf{x}$ is the unknown we are solving for.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'numeric',
      prompt: 'Use Cramer\'s rule to find $x_2$ for the system $4x_1 + 3x_2 = 5$, $\\; 2x_1 + 5x_2 = 1$. Give an exact fraction.',
      hint: '$\\det A = 4 \\cdot 5 - 3 \\cdot 2$. For $x_2$, replace column 2 of $A$ with $(5, 1)$.',
      label: '$x_2 =$',
      answer: '-3/7',
      answerTex: '-\\tfrac{3}{7}',
      explanation: '$\\det A = 20 - 6 = 14$ and $\\det A_2(\\mathbf{b}) = \\begin{vmatrix} 4 & 5 \\\\ 2 & 1 \\end{vmatrix} = 4 - 10 = -6$, so $x_2 = \\frac{-6}{14} = -\\frac{3}{7}$. (Likewise $x_1 = \\frac{1}{14}\\begin{vmatrix} 5 & 3 \\\\ 1 & 5 \\end{vmatrix} = \\frac{22}{14} = \\frac{11}{7}$. Check: $4 \\cdot \\frac{11}{7} + 3 \\cdot (-\\frac37) = \\frac{44 - 9}{7} = 5$.)',
    },
  ],
  takeaways: [
    '$|\\det[\\,\\mathbf{u}\\;\\;\\mathbf{v}\\,]|$ is the area of the parallelogram spanned by $\\mathbf{u}, \\mathbf{v}$; in 3D, $|\\det[\\,\\mathbf{u}\\;\\mathbf{v}\\;\\mathbf{w}\\,]| = |\\mathbf{u} \\cdot (\\mathbf{v} \\times \\mathbf{w})|$ is the volume of their parallelepiped.',
    '$T(\\mathbf{x}) = A\\mathbf{x}$ multiplies every area (or volume) by $|\\det A|$; $\\det A = 0$ means $T$ flattens space.',
    'The sign is orientation: $\\det A > 0$ preserves it, $\\det A < 0$ mirrors — and flips triangle winding, which renderers must correct for.',
    '$\\operatorname{orient}(A, B, C) = \\det[\\,B - A\\;\\;C - A\\,]$ tells left/right/collinear by its sign, and $\\tfrac12|\\operatorname{orient}|$ is the triangle\'s area.',
    'Cramer\'s rule $x_i = \\det A_i(\\mathbf{b})/\\det A$ gives closed forms for tiny systems, but elimination is far cheaper and more accurate for anything large.',
  ],
  reading: [
    {
      title: '3Blue1Brown — Essence of linear algebra',
      url: 'https://www.3blue1brown.com/topics/linear-algebra',
      source: 'video',
      note: 'The chapters "The determinant" and "Cramer\'s rule, explained geometrically" animate exactly the area-scaling and orientation ideas of this lesson.',
    },
    {
      title: 'Wikipedia — Cramer\'s rule',
      url: 'https://en.wikipedia.org/wiki/Cramer%27s_rule',
      source: 'wikipedia',
      note: 'Includes a geometric interpretation of the rule as a ratio of areas and a discussion of its computational cost.',
    },
    {
      title: 'Wikipedia — Triple product',
      url: 'https://en.wikipedia.org/wiki/Triple_product',
      source: 'wikipedia',
      note: 'The scalar triple product as a determinant and as signed volume, with its symmetry properties.',
    },
    {
      title: 'Wikipedia — Back-face culling',
      url: 'https://en.wikipedia.org/wiki/Back-face_culling',
      source: 'wikipedia',
      note: 'How renderers use winding order to skip triangles facing away from the camera.',
    },
  ],
};
