import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'la-cross-product',
  title: 'The Cross Product',
  summary: 'A product of two 3D vectors that returns a third, perpendicular to both, whose length is an area — the source of every surface normal in a game.',
  minutes: 19,
  objectives: [
    'Compute $\\mathbf{u} \\times \\mathbf{v}$ in $\\mathbb{R}^3$ with the component formula (and the determinant mnemonic)',
    'Prove that $\\mathbf{u} \\times \\mathbf{v}$ is orthogonal to $\\mathbf{u}$ and $\\mathbf{v}$, and find its direction with the right-hand rule',
    'Use anticommutativity and the other algebraic rules correctly — including that the cross product is not associative',
    'Use $\\|\\mathbf{u} \\times \\mathbf{v}\\| = \\|\\mathbf{u}\\|\\|\\mathbf{v}\\|\\sin\\theta$ to find parallelogram and triangle areas, and read a 2D signed area',
    'Compute triangle normals, explain winding order and backface culling, and compute torque and the velocity of a spinning point',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'A product that builds a perpendicular vector',
      blocks: [
        {
          type: 'p',
          text: 'Last lesson\'s lighting formula $\\max(0, \\mathbf{N} \\cdot \\mathbf{L})$ needs the surface normal $\\mathbf{N}$ of every triangle. A triangle gives you two edge vectors; you need a vector **perpendicular to both**. The dot product cannot help — it returns a number. The **cross product** returns exactly the vector you need. It exists only in $\\mathbb{R}^3$.',
        },
        {
          type: 'definition',
          term: 'Cross product',
          text: 'For $\\mathbf{u} = (u_1, u_2, u_3)$ and $\\mathbf{v} = (v_1, v_2, v_3)$ in $\\mathbb{R}^3$, the [[cross-product]] is the vector\n\n$$\\mathbf{u} \\times \\mathbf{v} = \\begin{bmatrix} u_2v_3 - u_3v_2 \\\\ u_3v_1 - u_1v_3 \\\\ u_1v_2 - u_2v_1 \\end{bmatrix}.$$',
        },
        {
          type: 'derivation',
          title: 'Compute $(1, 2, 3) \\times (4, 5, 6)$',
          steps: [
            { tex: '\\text{first: } u_2v_3 - u_3v_2 = (2)(6) - (3)(5) = 12 - 15 = -3', why: 'The first entry ignores the first components and uses entries $2$ and $3$.' },
            { tex: '\\text{second: } u_3v_1 - u_1v_3 = (3)(4) - (1)(6) = 12 - 6 = 6', why: 'The second entry uses entries $3$ and $1$, **in that order** — the step everyone gets wrong.' },
            { tex: '\\text{third: } u_1v_2 - u_2v_1 = (1)(5) - (2)(4) = 5 - 8 = -3', why: 'The third entry uses entries $1$ and $2$.' },
            { tex: '\\mathbf{u} \\times \\mathbf{v} = (-3, 6, -3)', why: 'Assemble the three entries.' },
            { tex: '(-3, 6, -3) \\cdot (1, 2, 3) = -3 + 12 - 9 = 0, \\quad (-3, 6, -3) \\cdot (4, 5, 6) = -12 + 30 - 18 = 0', why: 'Always check: the result must be orthogonal to both inputs. A nonzero dot product means an arithmetic slip.' },
          ],
          result: '$(1, 2, 3) \\times (4, 5, 6) = (-3, 6, -3)$, perpendicular to both.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Remembering the formula',
          text: 'The indices cycle $1 \\to 2 \\to 3 \\to 1$. Entry $1$ is built from $2, 3$; entry $2$ from $3, 1$; entry $3$ from $1, 2$ — always "next times next-next minus the reverse". With $x, y, z$ subscripts, a classic mnemonic is **xyzzy**: the $x$-entry is $u_yv_z - u_zv_y$, and shift every letter forward cyclically for the others. As a check, $\\mathbf{e}_1 \\times \\mathbf{e}_2 = \\mathbf{e}_3$, $\\mathbf{e}_2 \\times \\mathbf{e}_3 = \\mathbf{e}_1$ and $\\mathbf{e}_3 \\times \\mathbf{e}_1 = \\mathbf{e}_2$.',
        },
        {
          type: 'p',
          text: 'A second mnemonic previews unit 5. Write the standard basis vectors in the top row of a $3 \\times 3$ array and expand using $2 \\times 2$ "determinants" $\\begin{vmatrix} a & b \\\\ c & d \\end{vmatrix} = ad - bc$, with a minus sign on the middle term:',
        },
        {
          type: 'math',
          tex: '\\mathbf{u} \\times \\mathbf{v} = \\begin{vmatrix} \\mathbf{e}_1 & \\mathbf{e}_2 & \\mathbf{e}_3 \\\\ u_1 & u_2 & u_3 \\\\ v_1 & v_2 & v_3 \\end{vmatrix} = \\begin{vmatrix} u_2 & u_3 \\\\ v_2 & v_3 \\end{vmatrix}\\mathbf{e}_1 - \\begin{vmatrix} u_1 & u_3 \\\\ v_1 & v_3 \\end{vmatrix}\\mathbf{e}_2 + \\begin{vmatrix} u_1 & u_2 \\\\ v_1 & v_2 \\end{vmatrix}\\mathbf{e}_3',
          caption: 'The middle term is $-(u_1v_3 - u_3v_1) = u_3v_1 - u_1v_3$, matching the definition. An array with vectors in its top row is only a memory device; unit 5 defines real determinants.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Where does this formula come from?',
          text: 'We want $\\mathbf{x}$ with $\\mathbf{u} \\cdot \\mathbf{x} = 0$ and $\\mathbf{v} \\cdot \\mathbf{x} = 0$: two linear equations in three unknowns $x_1, x_2, x_3$. When $\\mathbf{u}$ and $\\mathbf{v}$ are not parallel, the solutions form a line through the origin (the normal line of their plane). Eliminating the unknowns shows that line is spanned by $(u_2v_3 - u_3v_2,\\ u_3v_1 - u_1v_3,\\ u_1v_2 - u_2v_1)$. Of all the vectors on that line, this particular one has the bonus that its length is an area — as you will see shortly.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'fill',
      prompt: 'Compute $\\begin{bmatrix} 2 \\\\ 0 \\\\ 1 \\end{bmatrix} \\times \\begin{bmatrix} 1 \\\\ 3 \\\\ -1 \\end{bmatrix}$. Type each entry.',
      template: '$($ ___ $,$ ___ $,$ ___ $)$',
      blanks: [{ answers: ['-3'] }, { answers: ['3'] }, { answers: ['6'] }],
      hint: 'Entry 1: $u_2v_3 - u_3v_2$. Entry 2: $u_3v_1 - u_1v_3$. Entry 3: $u_1v_2 - u_2v_1$.',
      explanation: 'Entry 1: $(0)(-1) - (1)(3) = -3$. Entry 2: $(1)(1) - (2)(-1) = 1 + 2 = 3$. Entry 3: $(2)(3) - (0)(1) = 6$. So the cross product is $(-3, 3, 6)$. Check: $(-3, 3, 6) \\cdot (2, 0, 1) = -6 + 0 + 6 = 0$ and $(-3, 3, 6) \\cdot (1, 3, -1) = -3 + 9 - 6 = 0$ ✓.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Orthogonal to both inputs, and the right-hand rule',
      blocks: [
        {
          type: 'p',
          text: 'The check in the worked example is not luck. It holds for every pair of vectors, and the proof is a short calculation.',
        },
        {
          type: 'derivation',
          title: 'Why $\\mathbf{u} \\cdot (\\mathbf{u} \\times \\mathbf{v}) = 0$',
          steps: [
            { tex: '\\mathbf{u} \\cdot (\\mathbf{u} \\times \\mathbf{v}) = u_1(u_2v_3 - u_3v_2) + u_2(u_3v_1 - u_1v_3) + u_3(u_1v_2 - u_2v_1)', why: 'Dot $\\mathbf{u}$ with the three entries of the cross product.' },
            { tex: '= u_1u_2v_3 - u_1u_3v_2 + u_2u_3v_1 - u_1u_2v_3 + u_1u_3v_2 - u_2u_3v_1', why: 'Distribute each $u_i$.' },
            { tex: '= (u_1u_2v_3 - u_1u_2v_3) + (u_1u_3v_2 - u_1u_3v_2) + (u_2u_3v_1 - u_2u_3v_1) = 0', why: 'The six terms cancel in pairs (multiplication of real numbers commutes, so $u_2u_1v_3 = u_1u_2v_3$).' },
          ],
          result: 'The same calculation with $\\mathbf{v}$ gives $\\mathbf{v} \\cdot (\\mathbf{u} \\times \\mathbf{v}) = 0$. So $\\mathbf{u} \\times \\mathbf{v}$ is [[orthogonal]] to both $\\mathbf{u}$ and $\\mathbf{v}$, and therefore to every vector in the plane they span.',
        },
        {
          type: 'p',
          text: 'There are two opposite directions perpendicular to a plane. The [[right-hand-rule]] says which one $\\mathbf{u} \\times \\mathbf{v}$ takes: point the fingers of your right hand along $\\mathbf{u}$ and curl them toward $\\mathbf{v}$ through the smaller angle; your thumb points along $\\mathbf{u} \\times \\mathbf{v}$. Check it on $\\mathbf{e}_1 \\times \\mathbf{e}_2 = \\mathbf{e}_3$: fingers along $x$, curl toward $y$, thumb along $z$ — exactly how the axes of a right-handed coordinate system are arranged.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Left-handed engines',
          text: 'The **formula** is the same everywhere: $(1, 0, 0) \\times (0, 1, 0) = (0, 0, 1)$ in every engine. What differs is how the axes are drawn. Unity and Unreal use left-handed coordinate systems, and there the result *appears* to follow a left-hand rule on screen. Nothing in the code changes, but when you import assets or port math between conventions, normals and rotation directions can come out flipped.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Building a camera basis',
          text: 'A camera needs three mutually perpendicular unit vectors: forward, right and up. Given a forward direction $\\mathbf{f}$ and the world\'s up $\\mathbf{w}$, engines compute `right = normalize(cross(f, w))` and then `up = cross(right, f)` — two cross products and the basis is orthogonal by construction. A "look-at" matrix (unit 4) is built from exactly these three vectors.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'mcq',
      prompt: 'Compute $\\mathbf{e}_1 \\times \\mathbf{e}_3$, where $\\mathbf{e}_1 = (1, 0, 0)$ and $\\mathbf{e}_3 = (0, 0, 1)$.',
      hint: 'Use the formula, or the right-hand rule: fingers along $x$, curl toward $z$.',
      options: [
        { text: '$\\mathbf{e}_2 = (0, 1, 0)$', why: 'That is $\\mathbf{e}_3 \\times \\mathbf{e}_1$ — the cyclic order $3 \\to 1 \\to 2$. Here the order is reversed, which flips the sign.' },
        { text: '$-\\mathbf{e}_2 = (0, -1, 0)$', correct: true, why: 'Right. The second entry is $u_3v_1 - u_1v_3 = (0)(0) - (1)(1) = -1$; the other two entries are $0$.' },
        { text: '$\\mathbf{0}$', why: 'The cross product is $\\mathbf{0}$ only for parallel vectors. $\\mathbf{e}_1$ and $\\mathbf{e}_3$ are perpendicular, so the result has length $1 \\cdot 1 \\cdot \\sin 90^\\circ = 1$.' },
        { text: '$\\mathbf{e}_1 + \\mathbf{e}_3 = (1, 0, 1)$', why: 'That is the sum, which lies in the plane of the two vectors. A cross product is perpendicular to that plane.' },
      ],
      explanation: 'By the formula, $(1, 0, 0) \\times (0, 0, 1) = (0 \\cdot 1 - 0 \\cdot 0,\\; 0 \\cdot 0 - 1 \\cdot 1,\\; 1 \\cdot 0 - 0 \\cdot 0) = (0, -1, 0)$. With the right hand: fingers along $+x$, curling toward $+z$, the thumb points along $-y$. The cyclic pattern $\\mathbf{e}_1 \\times \\mathbf{e}_2 = \\mathbf{e}_3$, $\\mathbf{e}_2 \\times \\mathbf{e}_3 = \\mathbf{e}_1$, $\\mathbf{e}_3 \\times \\mathbf{e}_1 = \\mathbf{e}_2$ goes "forward"; $\\mathbf{e}_1 \\times \\mathbf{e}_3$ goes backward, so it is $-\\mathbf{e}_2$.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'The algebra of the cross product',
      blocks: [
        {
          type: 'theorem',
          name: 'Properties of the cross product',
          tex: '\\begin{aligned} &\\mathbf{v} \\times \\mathbf{u} = -(\\mathbf{u} \\times \\mathbf{v}) && \\mathbf{u} \\times \\mathbf{u} = \\mathbf{0} \\\\ &(c\\mathbf{u}) \\times \\mathbf{v} = c(\\mathbf{u} \\times \\mathbf{v}) = \\mathbf{u} \\times (c\\mathbf{v}) && \\mathbf{u} \\times (\\mathbf{v} + \\mathbf{w}) = \\mathbf{u} \\times \\mathbf{v} + \\mathbf{u} \\times \\mathbf{w} \\end{aligned}',
          text: 'The first property is **anticommutativity**: order matters, and swapping it flips the sign. Scalars pull out and the product distributes over addition, but in general $(\\mathbf{u} \\times \\mathbf{v}) \\times \\mathbf{w} \\ne \\mathbf{u} \\times (\\mathbf{v} \\times \\mathbf{w})$.',
        },
        {
          type: 'derivation',
          title: 'Why swapping the order flips the sign',
          steps: [
            { tex: '\\mathbf{v} \\times \\mathbf{u} = (v_2u_3 - v_3u_2,\\; v_3u_1 - v_1u_3,\\; v_1u_2 - v_2u_1)', why: 'Apply the definition with the roles of $\\mathbf{u}$ and $\\mathbf{v}$ exchanged.' },
            { tex: '= (-(u_2v_3 - u_3v_2),\\; -(u_3v_1 - u_1v_3),\\; -(u_1v_2 - u_2v_1))', why: 'Each entry is a difference $ab - cd$ whose two products have traded places, so it is the negative of the original entry.' },
            { tex: '= -(\\mathbf{u} \\times \\mathbf{v})', why: 'Factor $-1$ out of every entry.' },
          ],
          result: 'With $\\mathbf{v} = \\mathbf{u}$ this gives $\\mathbf{u} \\times \\mathbf{u} = -(\\mathbf{u} \\times \\mathbf{u})$, so $\\mathbf{u} \\times \\mathbf{u} = \\mathbf{0}$.',
        },
        {
          type: 'derivation',
          title: 'The cross product is not associative',
          steps: [
            { tex: '(\\mathbf{e}_1 \\times \\mathbf{e}_1) \\times \\mathbf{e}_2 = \\mathbf{0} \\times \\mathbf{e}_2 = \\mathbf{0}', why: 'Any vector crossed with itself is $\\mathbf{0}$, and $\\mathbf{0}$ crossed with anything is $\\mathbf{0}$.' },
            { tex: '\\mathbf{e}_1 \\times (\\mathbf{e}_1 \\times \\mathbf{e}_2) = \\mathbf{e}_1 \\times \\mathbf{e}_3 = -\\mathbf{e}_2', why: 'Group the other way: $\\mathbf{e}_1 \\times \\mathbf{e}_2 = \\mathbf{e}_3$, and $\\mathbf{e}_1 \\times \\mathbf{e}_3 = -\\mathbf{e}_2$ from the last question.' },
          ],
          result: 'Different answers, so the parentheses matter. Never write $\\mathbf{u} \\times \\mathbf{v} \\times \\mathbf{w}$ without them.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Argument order is a classic bug',
          text: '`cross(b, a)` is `-cross(a, b)`. Swap the arguments when computing a normal and every triangle faces inward: lighting goes black on the lit side and bright on the dark side, and backface culling hides the front of the model. When a mesh renders inside-out, check the cross-product order (and the vertex winding, coming up) first.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'truefalse',
      prompt: 'If $\\mathbf{u} \\times \\mathbf{v} = \\mathbf{0}$, then $\\mathbf{u} = \\mathbf{0}$ or $\\mathbf{v} = \\mathbf{0}$.',
      answer: false,
      explanation: 'Already $\\mathbf{u} \\times \\mathbf{u} = \\mathbf{0}$ for every $\\mathbf{u}$, including nonzero ones. More generally, the cross product of any two **parallel** vectors is $\\mathbf{0}$: for example $(1, 2, 3) \\times (2, 4, 6) = (12 - 12,\\; 6 - 6,\\; 4 - 4) = \\mathbf{0}$. The next card explains why: the length of $\\mathbf{u} \\times \\mathbf{v}$ contains a factor $\\sin\\theta$, which is $0$ when $\\theta = 0$ or $\\pi$.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'The length of u × v is an area',
      blocks: [
        {
          type: 'theorem',
          name: 'Magnitude of the cross product',
          tex: '\\|\\mathbf{u} \\times \\mathbf{v}\\| = \\|\\mathbf{u}\\|\\,\\|\\mathbf{v}\\|\\sin\\theta, \\qquad 0 \\le \\theta \\le \\pi',
          text: 'where $\\theta$ is the angle between $\\mathbf{u}$ and $\\mathbf{v}$. This is the area of the parallelogram with sides $\\mathbf{u}$ and $\\mathbf{v}$; the triangle with those sides has half that area.',
        },
        {
          type: 'derivation',
          title: 'Proof, via Lagrange\'s identity',
          steps: [
            { tex: '\\|\\mathbf{u} \\times \\mathbf{v}\\|^2 = \\|\\mathbf{u}\\|^2\\|\\mathbf{v}\\|^2 - (\\mathbf{u} \\cdot \\mathbf{v})^2', why: '**Lagrange\'s identity.** Expand both sides in components: each becomes the same sum $\\sum (u_iv_j - u_jv_i)^2$ over the pairs $i < j$. It is a page of algebra with nothing clever in it, so it is worth doing once by hand.' },
            { tex: '= \\|\\mathbf{u}\\|^2\\|\\mathbf{v}\\|^2 - \\|\\mathbf{u}\\|^2\\|\\mathbf{v}\\|^2\\cos^2\\theta', why: 'Substitute $\\mathbf{u} \\cdot \\mathbf{v} = \\|\\mathbf{u}\\|\\|\\mathbf{v}\\|\\cos\\theta$ from the dot-product lesson.' },
            { tex: '= \\|\\mathbf{u}\\|^2\\|\\mathbf{v}\\|^2\\sin^2\\theta', why: 'Factor and use the Pythagorean identity $1 - \\cos^2\\theta = \\sin^2\\theta$.' },
            { tex: '\\|\\mathbf{u} \\times \\mathbf{v}\\| = \\|\\mathbf{u}\\|\\,\\|\\mathbf{v}\\|\\sin\\theta', why: 'Take square roots. No absolute value is needed: $\\sin\\theta \\ge 0$ for $\\theta \\in [0, \\pi]$.' },
          ],
          result: 'In a parallelogram with base $\\|\\mathbf{u}\\|$, the height is $\\|\\mathbf{v}\\|\\sin\\theta$, so base $\\times$ height is exactly $\\|\\mathbf{u} \\times \\mathbf{v}\\|$.',
        },
        {
          type: 'p',
          text: 'Vectors in the plane are vectors in $\\mathbb{R}^3$ with third entry $0$. Their cross product is $(u_1, u_2, 0) \\times (v_1, v_2, 0) = (0,\\; 0,\\; u_1v_2 - u_2v_1)$: it points straight out of the plane, and its single entry $u_1v_2 - u_2v_1$ is a **signed area** — positive when $\\mathbf{v}$ is counterclockwise from $\\mathbf{u}$, negative when clockwise.',
        },
        {
          type: 'graph',
          x: [-5, 6],
          y: [-4, 5],
          equal: true,
          segments: [
            { from: [0, 0], to: ['a', 'b'], color: 'blue', arrow: true, label: 'u' },
            { from: [0, 0], to: ['c', 'd'], color: 'red', arrow: true, label: 'v' },
            { from: ['a', 'b'], to: ['a + c', 'b + d'], color: 'red', dashed: true },
            { from: ['c', 'd'], to: ['a + c', 'b + d'], color: 'blue', dashed: true },
          ],
          sliders: [
            { name: 'a', min: -4, max: 4, step: 0.5, value: 3, label: '$u_1$' },
            { name: 'b', min: -4, max: 4, step: 0.5, value: 1, label: '$u_2$' },
            { name: 'c', min: -4, max: 4, step: 0.5, value: 1, label: '$v_1$' },
            { name: 'd', min: -4, max: 4, step: 0.5, value: 2, label: '$v_2$' },
          ],
          readouts: [
            { label: '$z$-entry of $\\mathbf{u} \\times \\mathbf{v}$: $u_1v_2 - u_2v_1 =$', expr: 'a*d - b*c', digits: 2 },
            { label: 'parallelogram area $=$', expr: 'abs(a*d - b*c)', digits: 2 },
          ],
          caption: 'Swing $\\mathbf{v}$ across $\\mathbf{u}$ to the clockwise side and the signed area turns negative: the cross product now points *into* the screen. Make the vectors parallel and the parallelogram — and the cross product — collapse to zero. (Unit 5 will meet this number again as the $2 \\times 2$ determinant.)',
        },
        {
          type: 'derivation',
          title: 'Area of the triangle with vertices $A(1, 0, 0)$, $B(0, 2, 0)$, $C(0, 0, 3)$',
          steps: [
            { tex: '\\overrightarrow{AB} = B - A = (-1, 2, 0), \\qquad \\overrightarrow{AC} = C - A = (-1, 0, 3)', why: 'Two edges from the same vertex: point minus point gives the edge vectors.' },
            { tex: '\\overrightarrow{AB} \\times \\overrightarrow{AC} = (2 \\cdot 3 - 0 \\cdot 0,\\; 0 \\cdot (-1) - (-1) \\cdot 3,\\; (-1) \\cdot 0 - 2 \\cdot (-1)) = (6, 3, 2)', why: 'The component formula, entry by entry.' },
            { tex: '\\|(6, 3, 2)\\| = \\sqrt{36 + 9 + 4} = 7', why: 'This is the area of the parallelogram on the two edges.' },
            { tex: '\\text{Area} = \\tfrac12 \\cdot 7 = 3.5', why: 'The triangle is half the parallelogram.' },
          ],
          result: 'The triangle has area $\\frac72$, and $(6, 3, 2)$ is a normal to its plane — one calculation, two answers.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'The 2D cross product in gameplay code',
          text: '`cross2(a, b) = a.x * b.y - a.y * b.x` is everywhere in 2D code. Its sign says whether `b` is to the left or right of `a` (should the AI steer left or right toward a target?), which side of a line a point lies on (point-in-triangle tests), and which way a polygon winds. Summing it around a polygon gives twice the polygon\'s signed area — the shoelace formula.',
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'numeric',
      prompt: 'Find the area of the triangle with vertices $P(0, 0, 0)$, $Q(2, 1, 0)$ and $R(0, 3, 4)$.',
      label: 'Area $=$',
      answer: 'sqrt(29)',
      answerTex: '\\sqrt{29} \\approx 5.385',
      hint: 'Cross the edge vectors $Q - P$ and $R - P$, take the norm, then halve it.',
      explanation: 'The edges are $\\mathbf{u} = (2, 1, 0)$ and $\\mathbf{v} = (0, 3, 4)$, and $\\mathbf{u} \\times \\mathbf{v} = (1 \\cdot 4 - 0 \\cdot 3,\\; 0 \\cdot 0 - 2 \\cdot 4,\\; 2 \\cdot 3 - 1 \\cdot 0) = (4, -8, 6)$. Its norm is $\\sqrt{16 + 64 + 36} = \\sqrt{116} = 2\\sqrt{29}$, the parallelogram area. Half of it, $\\sqrt{29} \\approx 5.385$, is the triangle. Forgetting the $\\frac12$ is the most common slip.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'numeric',
      prompt: 'For the plane vectors $\\mathbf{u} = (2, 3)$ and $\\mathbf{v} = (4, 1)$, compute the signed area $u_1v_2 - u_2v_1$ (the $z$-entry of $(2, 3, 0) \\times (4, 1, 0)$).',
      label: '$u_1v_2 - u_2v_1 =$',
      answer: '-10',
      explanation: '$u_1v_2 - u_2v_1 = (2)(1) - (3)(4) = 2 - 12 = -10$. The parallelogram has area $10$, and the negative sign says $\\mathbf{v}$ lies **clockwise** from $\\mathbf{u}$: $\\mathbf{u}$ points steeply up-right (about $56^\\circ$), $\\mathbf{v}$ more shallowly (about $14^\\circ$). In 3D terms, $(2, 3, 0) \\times (4, 1, 0) = (0, 0, -10)$ points into the page.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'concept',
      title: 'Triangle normals, winding order and backface culling',
      blocks: [
        {
          type: 'p',
          text: 'A mesh stores each triangle as three vertices $A, B, C$ **in a particular order**. Its [[la-surface-normal]] is computed from two edges:',
        },
        {
          type: 'math',
          tex: '\\mathbf{n} = (B - A) \\times (C - A)',
          caption: 'Normalize it before lighting. Listing the vertices as $A, C, B$ instead gives $(C - A) \\times (B - A) = -\\mathbf{n}$ by anticommutativity.',
        },
        {
          type: 'p',
          text: 'So the vertex order — the [[la-winding-order]] — decides which side of the triangle is the **front**. Viewed from the front, the vertices of a front face go counterclockwise in OpenGL\'s default convention (Direct3D\'s default is clockwise; engines let you choose). The right-hand rule ties the two together: curl your fingers around $A \\to B \\to C$ and your thumb points out of the front.',
        },
        {
          type: 'p',
          text: '[[la-backface-culling|Backface culling]] uses this to skip work. On a closed mesh, faces pointing away from the camera are always hidden behind front faces, so the GPU drops them — roughly half of all triangles. A triangle faces away from a camera at $E$ when its normal points along the view ray, $\\mathbf{n} \\cdot (A - E) \\ge 0$. In practice the GPU tests the same thing after projection: the sign of the 2D cross product of the triangle\'s screen-space edges, i.e. its winding on screen.',
        },
        {
          type: 'graph',
          x: [-4, 4],
          y: [-3, 4],
          equal: true,
          functions: [{ expr: '(x + 2)/4 - 1', label: 'line through $A$ and $B$', color: 'gray', dashed: true }],
          segments: [
            { from: [-2, -1], to: [2, 0], color: 'blue', arrow: true },
            { from: [2, 0], to: ['a', 'b'], color: 'blue', arrow: true },
            { from: ['a', 'b'], to: [-2, -1], color: 'blue', arrow: true },
          ],
          points: [
            { x: -2, y: -1, label: 'A', color: 'gray' },
            { x: 2, y: 0, label: 'B', color: 'gray' },
            { x: 'a', y: 'b', label: 'C', color: 'red' },
          ],
          sliders: [
            { name: 'a', min: -3.5, max: 3.5, step: 0.25, value: 0, label: '$C$: $x$ on screen' },
            { name: 'b', min: -2.5, max: 3.5, step: 0.25, value: 2, label: '$C$: $y$ on screen' },
          ],
          readouts: [
            { label: '$z$-entry of $(B - A) \\times (C - A) =$', expr: '4(b + 1) - (a + 2)', digits: 2 },
            { label: 'front face? ($1$ = drawn, $0$ = culled)', expr: 'max(sign(4(b + 1) - (a + 2)), 0)', digits: 0 },
          ],
          caption: 'A triangle as it lands on the screen. With $C$ above the dashed line, $A \\to B \\to C$ runs counterclockwise, the signed area is positive and the face is drawn. Drag $C$ below the line: the winding flips to clockwise, the sign flips, and the triangle is culled.',
        },
        {
          type: 'derivation',
          title: 'Is triangle $A(0, 0, 0)$, $B(1, 0, 0)$, $C(0, 1, 0)$ visible from $E = (0, 0, 5)$?',
          steps: [
            { tex: '\\mathbf{n} = (B - A) \\times (C - A) = \\mathbf{e}_1 \\times \\mathbf{e}_2 = (0, 0, 1)', why: 'The edge vectors are $\\mathbf{e}_1$ and $\\mathbf{e}_2$, whose cross product is $\\mathbf{e}_3$.' },
            { tex: 'A - E = (0, 0, -5)', why: 'The view ray from the camera to the triangle.' },
            { tex: '\\mathbf{n} \\cdot (A - E) = -5 < 0 \\implies \\text{front-facing, drawn}', why: 'The normal points back toward the camera (obtuse angle with the view ray).' },
            { tex: 'E\' = (0, 0, -5): \\quad \\mathbf{n} \\cdot (A - E\') = 5 > 0 \\implies \\text{culled}', why: 'From below, the same triangle shows its back. Seen from there, $A \\to B \\to C$ also looks clockwise.' },
          ],
        },
        {
          type: 'code',
          title: 'culling.cpp',
          runnable: true,
          code: `#include <cstdio>

struct Vec3 { double x, y, z; };

Vec3 operator-(Vec3 a, Vec3 b) { return {a.x - b.x, a.y - b.y, a.z - b.z}; }
double dot(Vec3 a, Vec3 b) { return a.x * b.x + a.y * b.y + a.z * b.z; }
Vec3 cross(Vec3 a, Vec3 b) {
    return {a.y * b.z - a.z * b.y,
            a.z * b.x - a.x * b.z,
            a.x * b.y - a.y * b.x};
}

bool isBackFacing(Vec3 A, Vec3 B, Vec3 C, Vec3 eye) {
    Vec3 n = cross(B - A, C - A);      // normal from the winding order
    return dot(n, A - eye) >= 0.0;     // normal points away from the viewer
}

int main() {
    Vec3 A = {0, 0, 0}, B = {1, 0, 0}, C = {0, 1, 0};
    Vec3 n = cross(B - A, C - A);
    std::printf("n = (%g, %g, %g)\\n", n.x, n.y, n.z);

    Vec3 front = {0, 0, 5}, back = {0, 0, -5};
    std::printf("A,B,C seen from z = +5: %s\\n", isBackFacing(A, B, C, front) ? "culled" : "drawn");
    std::printf("A,B,C seen from z = -5: %s\\n", isBackFacing(A, B, C, back) ? "culled" : "drawn");
    std::printf("A,C,B seen from z = +5: %s\\n", isBackFacing(A, C, B, front) ? "culled" : "drawn");
}`,
          output: `n = (0, 0, 1)
A,B,C seen from z = +5: drawn
A,B,C seen from z = -5: culled
A,C,B seen from z = +5: culled`,
          annotations: [
            { lines: '7-11', text: 'The component formula: entries built from indices $(2,3)$, $(3,1)$, $(1,2)$.' },
            { lines: 14, text: 'The normal of a triangle from two edges sharing the vertex $A$.' },
            { lines: 15, text: 'Back-facing when the normal makes an angle of at most $90^\\circ$ with the ray from the eye to the triangle.' },
            { lines: 25, text: 'Same triangle, opposite winding: the normal flips and the face is culled from the side where it used to be visible.' },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'error',
      prompt: 'A student computes a normal $\\mathbf{n} = \\mathbf{u} \\times \\mathbf{v}$ for the edges $\\mathbf{u} = (1, 2, 0)$ and $\\mathbf{v} = (3, 1, 2)$. Tap the first wrong line.',
      lines: [
        'First entry: $u_2v_3 - u_3v_2 = (2)(2) - (0)(1) = 4$',
        'Second entry: $u_1v_3 - u_3v_1 = (1)(2) - (0)(3) = 2$',
        'Third entry: $u_1v_2 - u_2v_1 = (1)(1) - (2)(3) = -5$',
        '$\\mathbf{n} = (4, 2, -5)$',
      ],
      errorLines: [2],
      explanation: 'The second entry is $u_3v_1 - u_1v_3$ (indices $3, 1$ in cyclic order), not $u_1v_3 - u_3v_1$. Correctly it is $(0)(3) - (1)(2) = -2$, so $\\mathbf{n} = (4, -2, -5)$. The orthogonality check catches the slip instantly: $(4, 2, -5) \\cdot (1, 2, 0) = 8 \\ne 0$, while $(4, -2, -5) \\cdot (1, 2, 0) = 0$ and $(4, -2, -5) \\cdot (3, 1, 2) = 12 - 2 - 10 = 0$ ✓.',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'order',
      prompt: 'Put the steps for the diffuse lighting of a triangle $A, B, C$ in order.',
      lines: [
        'Form the edges $B - A$ and $C - A$',
        'Compute $\\mathbf{n} = (B - A) \\times (C - A)$',
        'Normalize: $\\mathbf{N} = \\mathbf{n} / \\|\\mathbf{n}\\|$',
        'Compute the brightness $\\max(0, \\mathbf{N} \\cdot \\mathbf{L})$',
      ],
      distractors: ['Compute $\\mathbf{n} = A \\times B$'],
      explanation: 'The normal must come from edges (differences of points), the cross product gives a perpendicular, normalizing makes the dot product equal $\\cos\\theta$, and only then is $\\max(0, \\mathbf{N} \\cdot \\mathbf{L})$ a brightness. The distractor crosses two **points**: the result depends on where the origin is and is not perpendicular to the triangle in general — the same "point $+$ point" kind of bug as in the first lesson.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'concept',
      title: 'Torque and angular velocity',
      blocks: [
        {
          type: 'p',
          text: 'The cross product is also the language of rotation in physics. Push on a door at its edge and it swings easily; push near the hinges and it barely moves; push straight toward the hinges and nothing happens at all. The turning effect of a force is its [[la-torque]]:',
        },
        {
          type: 'math',
          tex: '\\boldsymbol{\\tau} = \\mathbf{r} \\times \\mathbf{F}, \\qquad \\|\\boldsymbol{\\tau}\\| = \\|\\mathbf{r}\\|\\,\\|\\mathbf{F}\\|\\sin\\theta',
          caption: '$\\mathbf{r}$ runs from the pivot (or centre of mass) to where the force $\\mathbf{F}$ is applied. The direction of $\\boldsymbol{\\tau}$ is the axis the force tries to turn the object about.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why a cross product?',
          text: 'Only the part of $\\mathbf{F}$ perpendicular to $\\mathbf{r}$ turns anything — that part is $\\|\\mathbf{F}\\|\\sin\\theta$, and leverage multiplies it by the arm length $\\|\\mathbf{r}\\|$. And a rotation needs an *axis*, which is perpendicular to both $\\mathbf{r}$ and $\\mathbf{F}$. The cross product delivers both facts in one vector: its length is the strength of the twist, its direction is the axis, and the right-hand rule gives the sense of rotation.',
        },
        {
          type: 'derivation',
          title: 'A wrench: $\\mathbf{r} = (0.3, 0, 0)$ m, $\\mathbf{F} = (0, 20, -10)$ N',
          steps: [
            { tex: '\\boldsymbol{\\tau} = (0 \\cdot (-10) - 0 \\cdot 20,\\;\\; 0 \\cdot 0 - 0.3 \\cdot (-10),\\;\\; 0.3 \\cdot 20 - 0 \\cdot 0)', why: 'The component formula with $\\mathbf{u} = \\mathbf{r}$ and $\\mathbf{v} = \\mathbf{F}$.' },
            { tex: '= (0,\\; 3,\\; 6) \\ \\text{N·m}', why: 'Simplify. The first entry is $0$: a force applied at a point on the $x$-axis cannot twist the object about the $x$-axis itself.' },
            { tex: '\\|\\boldsymbol{\\tau}\\| = \\sqrt{0 + 9 + 36} = \\sqrt{45} \\approx 6.71 \\ \\text{N·m}', why: 'The magnitude of the torque.' },
          ],
        },
        {
          type: 'p',
          text: 'Rotation itself is described the same way. A rigid body spinning about an axis through the origin has an **angular velocity** vector $\\boldsymbol{\\omega}$: it points along the axis (right-hand rule for the sense of spin) and its length is the spin rate in radians per second. A point of the body at position $\\mathbf{r}$ then moves with velocity',
        },
        {
          type: 'math',
          tex: '\\mathbf{v} = \\boldsymbol{\\omega} \\times \\mathbf{r}',
          caption: 'Example: $\\boldsymbol{\\omega} = (0, 0, 2)$ (counterclockwise about $z$ at $2$ rad/s) and $\\mathbf{r} = (3, 0, 0)$ give $\\mathbf{v} = (0, 6, 0)$: speed $2 \\cdot 3 = 6$, moving counterclockwise — exactly the $v = \\omega r$ of circular motion from trig.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Inside a physics engine',
          text: 'Applying a force at a point off the centre of mass both pushes and spins a body: `body.force += F; body.torque += cross(hitPoint - body.com, F);`. During collision response, the velocity of the contact point is `body.linearVel + cross(body.angularVel, contact - body.com)` — the formula $\\mathbf{v} = \\boldsymbol{\\omega} \\times \\mathbf{r}$ added to the body\'s straight-line motion. Getting either argument order wrong spins objects the wrong way.',
        },
      ],
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'numeric',
      prompt: 'You pull on a $0.25$ m wrench with a force of $40$ N directed at $30^\\circ$ to the handle. What is the magnitude of the torque?',
      label: '$\\|\\boldsymbol{\\tau}\\| =$',
      unit: 'N·m',
      answer: '5',
      explanation: '$\\|\\boldsymbol{\\tau}\\| = \\|\\mathbf{r}\\|\\|\\mathbf{F}\\|\\sin\\theta = (0.25)(40)\\sin 30^\\circ = 10 \\cdot \\frac12 = 5$ N·m. Pulling perpendicular to the handle ($\\theta = 90^\\circ$) would give the maximum, $10$ N·m; pulling along the handle ($\\theta = 0$) gives none. Using $\\cos 30^\\circ$ instead (about $8.66$) mixes up the dot product with the cross product.',
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'mcq',
      prompt: 'A turret spins about the vertical $y$-axis with angular velocity $\\boldsymbol{\\omega} = (0, 3, 0)$ rad/s. The tip of its barrel is at $\\mathbf{r} = (0, 0, 2)$. What is the velocity $\\mathbf{v} = \\boldsymbol{\\omega} \\times \\mathbf{r}$ of the tip?',
      options: [
        { text: '$(6, 0, 0)$', correct: true, why: 'Right: $(3 \\cdot 2 - 0 \\cdot 0,\\; 0 \\cdot 0 - 0 \\cdot 2,\\; 0 \\cdot 0 - 3 \\cdot 0) = (6, 0, 0)$. Speed $\\omega r = 3 \\cdot 2 = 6$, perpendicular to both the axis and the barrel.' },
        { text: '$(-6, 0, 0)$', why: 'That is $\\mathbf{r} \\times \\boldsymbol{\\omega}$. The order is $\\boldsymbol{\\omega} \\times \\mathbf{r}$; swapping it reverses the direction of travel.' },
        { text: '$(0, 6, 0)$', why: 'That would move the tip along the spin axis — upward — which a pure rotation about $y$ never does. The velocity must be perpendicular to $\\boldsymbol{\\omega}$.' },
        { text: '$(0, 0, 6)$', why: 'That points along $\\mathbf{r}$, straight out of the barrel. A point on a rigid spinning body never moves toward or away from the axis, so $\\mathbf{v}$ must be perpendicular to $\\mathbf{r}$.' },
      ],
      explanation: 'By the formula, $\\boldsymbol{\\omega} \\times \\mathbf{r} = (\\omega_2r_3 - \\omega_3r_2,\\; \\omega_3r_1 - \\omega_1r_3,\\; \\omega_1r_2 - \\omega_2r_1) = (6, 0, 0)$. A quick sanity check for any answer: it must be orthogonal to both $\\boldsymbol{\\omega}$ and $\\mathbf{r}$ (which rules out the last two options), and its length must be $\\|\\boldsymbol{\\omega}\\|\\|\\mathbf{r}\\|\\sin 90^\\circ = 6$. Only the sign is left, and the argument order decides it.',
    },
  ],
  takeaways: [
    '$\\mathbf{u} \\times \\mathbf{v} = (u_2v_3 - u_3v_2,\\; u_3v_1 - u_1v_3,\\; u_1v_2 - u_2v_1)$ is a vector in $\\mathbb{R}^3$, orthogonal to both $\\mathbf{u}$ and $\\mathbf{v}$ — always check with two dot products.',
    'Its direction follows the right-hand rule ($\\mathbf{e}_1 \\times \\mathbf{e}_2 = \\mathbf{e}_3$); swapping the order flips the sign, $\\mathbf{u} \\times \\mathbf{u} = \\mathbf{0}$, and the product is not associative.',
    '$\\|\\mathbf{u} \\times \\mathbf{v}\\| = \\|\\mathbf{u}\\|\\|\\mathbf{v}\\|\\sin\\theta$ is the parallelogram area (half of it for the triangle); it is $\\mathbf{0}$ exactly for parallel vectors.',
    'In the plane, $u_1v_2 - u_2v_1$ is a signed area: positive when $\\mathbf{v}$ is counterclockwise from $\\mathbf{u}$.',
    'A triangle\'s normal is $(B - A) \\times (C - A)$; the winding order picks the front side, and backface culling drops triangles whose normal faces away from the camera.',
    'Torque $\\boldsymbol{\\tau} = \\mathbf{r} \\times \\mathbf{F}$ and the velocity of a spinning point $\\mathbf{v} = \\boldsymbol{\\omega} \\times \\mathbf{r}$ are cross products — order matters.',
  ],
  reading: [
    {
      title: '3Blue1Brown — Essence of linear algebra',
      url: 'https://www.3blue1brown.com/topics/linear-algebra',
      source: 'video',
      note: 'The two "Cross products" chapters show the parallelogram area picture, then explain the determinant mnemonic in the light of linear transformations.',
    },
    {
      title: 'Wikipedia — Cross product',
      url: 'https://en.wikipedia.org/wiki/Cross_product',
      source: 'wikipedia',
      note: 'Every formula from this lesson, Lagrange\'s identity, and a careful discussion of handedness.',
    },
    {
      title: 'Wikipedia — Back-face culling',
      url: 'https://en.wikipedia.org/wiki/Back-face_culling',
      source: 'wikipedia',
      note: 'How renderers use winding order and the normal–view test to skip hidden triangles.',
    },
    {
      title: "Paul's Online Notes — Linear Algebra",
      url: 'https://tutorial.math.lamar.edu/Classes/LinAlg/LinAlg.aspx',
      source: 'paul',
      note: 'The Euclidean $n$-space chapter covers dot and cross products with many worked examples and proofs of the properties.',
    },
  ],
};
