import type { Lesson } from '../../types';

// Tangent-patch picture on the hill z = 4 - x^2/2 - y^2/2 (f_x = -x, f_y = -y).
// The patch sits over [a, a + 0.6] x [b, b + 0.6].
const F = '(4 - a^2/2 - b^2/2)';

export const lesson: Lesson = {
  id: 'calc3-surface-area',
  title: 'Surface Area',
  summary: 'How much skin does a surface have? Tile it with tiny tangent-plane parallelograms, measure each with a cross product, and the area of z = f(x, y) becomes ∬√(1 + f_x² + f_y²) dA.',
  minutes: 17,
  objectives: [
    'Derive the surface area formula $A(S) = \\iint_D \\sqrt{1 + f_x^2 + f_y^2}\\,dA$ from tangent-plane parallelograms and the cross product',
    'Interpret the factor $\\sqrt{1 + f_x^2 + f_y^2}$ as how much a tilted patch is larger than its shadow',
    'Compute surface areas of planes, paraboloids and spheres, using polar coordinates where the region is round',
    'Handle the improper integral that appears at the rim of a hemisphere',
    'Compute the area of a heightmap numerically and compare with the integral',
  ],
  steps: [
    // 1 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Tiling a surface with tangent patches',
      blocks: [
        {
          type: 'p',
          text: 'In Calculus II you measured a curve by chopping it into tiny pieces that are nearly straight: Pythagoras gave $ds = \\sqrt{1 + (f\')^2}\\,dx$ and the [[arc-length-integral]] followed. Now measure a **surface** $z = f(x, y)$ lying over a region $D$: the amount of paint needed to cover a hillside, of cloth for a curved sail, of texture to wrap over terrain.',
        },
        {
          type: 'p',
          text: 'The plan is the same, one dimension up. Cut $D$ into small rectangles $R_{ij}$ of size $\\Delta x \\times \\Delta y$. Over each one, the surface is nearly flat: it is almost its tangent plane (the [[linearization]] of $f$). So replace each curved patch of surface by the flat piece of tangent plane above $R_{ij}$. That piece is a **parallelogram**, and parallelograms are easy to measure.',
        },
        {
          type: 'plot3d',
          x: [-2, 2],
          y: [-2, 2],
          z: [0, 4],
          surfaces: [
            { expr: '4 - x^2/2 - y^2/2', color: 'blue', opacity: 0.3, label: 'surface $z = 4 - \\frac{x^2}{2} - \\frac{y^2}{2}$' },
            { expr: `${F} - a*(x - a) - b*(y - b)`, xDomain: ['a', 'a + 0.6'], yDomain: ['b', 'b + 0.6'], color: 'orange', opacity: 0.95, label: 'tangent-plane patch' },
            { expr: '0', xDomain: ['a', 'a + 0.6'], yDomain: ['b', 'b + 0.6'], color: 'gray', opacity: 0.8, label: 'its shadow $R_{ij}$' },
          ],
          vectors: [
            { from: ['a', 'b', F], to: ['a + 0.6', 'b', `${F} - 0.6a`], label: 'a', color: 'red' },
            { from: ['a', 'b', F], to: ['a', 'b + 0.6', `${F} - 0.6b`], label: 'b', color: 'green' },
          ],
          sliders: [
            { name: 'a', min: -1.8, max: 1.2, step: 0.05, value: 0.6, label: 'patch corner $x$' },
            { name: 'b', min: -1.8, max: 1.2, step: 0.05, value: -1.4, label: 'patch corner $y$' },
          ],
          readouts: [
            { label: 'shadow area $\\Delta A =$', expr: '0.36', digits: 3 },
            { label: 'patch area $=$', expr: '0.36*sqrt(1 + a^2 + b^2)', digits: 3 },
            { label: 'ratio $\\sqrt{1 + f_x^2 + f_y^2} =$', expr: 'sqrt(1 + a^2 + b^2)', digits: 3 },
          ],
          view: { azimuth: 300, elevation: 28 },
          caption: 'Over a $0.6 \\times 0.6$ square (gray) the tangent plane cuts out an orange parallelogram, spanned by the red and green edge vectors. Near the top of the hill the patch is nearly flat and barely larger than its shadow; drag it to the steep flanks and it grows, because a tilted tile covers more surface than the ground beneath it.',
        },
        {
          type: 'callout',
          variant: 'analogy',
          title: 'Shingles on a roof',
          text: 'A steep roof needs more shingles than a flat roof over the same house, even though both have the same floor plan. The floor plan is $\\Delta A$; the shingles cover the tilted area. The steeper the roof, the bigger the ratio, and a vertical wall would need infinitely many shingles per unit of floor.',
        },
      ],
    },
    // 2 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'The cross product measures each patch',
      blocks: [
        {
          type: 'p',
          text: 'Take the corner $(x_i, y_j)$ of $R_{ij}$. Moving $\\Delta x$ in the $x$-direction along the tangent plane raises $z$ by $f_x\\,\\Delta x$ (that is what the partial derivative means); moving $\\Delta y$ in the $y$-direction raises it by $f_y\\,\\Delta y$. So the parallelogram is spanned by the edge vectors',
        },
        {
          type: 'math',
          tex: '\\vec{a} = \\langle \\Delta x, 0, f_x\\,\\Delta x \\rangle, \\qquad \\vec{b} = \\langle 0, \\Delta y, f_y\\,\\Delta y \\rangle',
          caption: 'Partial derivatives evaluated at the corner $(x_i, y_j)$. These are the red and green arrows in the plot above.',
        },
        {
          type: 'p',
          text: 'From linear algebra, the area of the parallelogram spanned by two vectors is the length of their [[cross-product]].',
        },
        {
          type: 'derivation',
          title: 'Area of one tangent patch',
          steps: [
            { tex: '\\vec{a} \\times \\vec{b} = \\begin{vmatrix} \\mathbf{i} & \\mathbf{j} & \\mathbf{k} \\\\ \\Delta x & 0 & f_x\\,\\Delta x \\\\ 0 & \\Delta y & f_y\\,\\Delta y \\end{vmatrix}', why: 'The cross product as a symbolic determinant, with the unit vectors $\\mathbf{i}, \\mathbf{j}, \\mathbf{k}$ in the first row.' },
            { tex: '= \\left\\langle -f_x\\,\\Delta x\\,\\Delta y,\\ -f_y\\,\\Delta x\\,\\Delta y,\\ \\Delta x\\,\\Delta y \\right\\rangle', why: '$\\mathbf{i}$: $0 \\cdot f_y\\Delta y - f_x\\Delta x \\cdot \\Delta y$. $\\mathbf{j}$: $-(\\Delta x \\cdot f_y\\Delta y - f_x\\Delta x \\cdot 0)$. $\\mathbf{k}$: $\\Delta x\\,\\Delta y - 0$.' },
            { tex: '= \\langle -f_x, -f_y, 1 \\rangle\\,\\Delta A', why: 'Factor out $\\Delta A = \\Delta x\\,\\Delta y$. The vector $\\langle -f_x, -f_y, 1\\rangle$ is an upward normal to the surface.' },
            { tex: '\\Delta T_{ij} = |\\vec{a} \\times \\vec{b}| = \\sqrt{f_x^2 + f_y^2 + 1}\\;\\Delta A', why: 'Length of the cross product. Since $\\Delta A > 0$ it comes out of the square root unchanged.' },
            { tex: 'A(S) \\approx \\sum_i\\sum_j \\sqrt{1 + f_x(x_i, y_j)^2 + f_y(x_i, y_j)^2}\\;\\Delta A', why: 'Add up the patches. This is a double Riemann sum.' },
          ],
          result: 'Refining the grid turns the sum into a double integral.',
        },
        {
          type: 'theorem',
          name: '[[calc3-surface-area-graph|Surface area of a graph]]',
          tex: 'A(S) = \\iint_D \\sqrt{1 + f_x(x, y)^2 + f_y(x, y)^2}\\,dA',
          text: 'for the part $S$ of the surface $z = f(x, y)$ over $D$, when $f_x$ and $f_y$ are continuous on $D$. Compare the arc length formula $\\int_a^b \\sqrt{1 + f\'(x)^2}\\,dx$: one slope became two.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'The factor is one over a cosine',
          text: 'The upward normal $\\vec{n} = \\langle -f_x, -f_y, 1 \\rangle$ makes an angle $\\gamma$ with the vertical $\\mathbf{k}$, where $\\cos\\gamma = \\frac{\\vec{n} \\cdot \\mathbf{k}}{|\\vec{n}|} = \\frac{1}{\\sqrt{1 + f_x^2 + f_y^2}}$. So $dS = \\frac{dA}{\\cos\\gamma}$: projecting a tile onto the floor shrinks its area by $\\cos\\gamma$, the tilt of the tile. Flat ground ($\\gamma = 0$) gives $dS = dA$; a nearly vertical cliff ($\\gamma \\to 90^\\circ$) gives a huge $dS$ over a tiny shadow. The same normal is the [[la-surface-normal|surface normal]] used for lighting.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Terrain normals and stretched textures',
          text: 'A game engine computes a heightmap\'s normal at each vertex as `normalize(vec3(-dhdx, -dhdy, 1.0))`, with the slopes from central differences of neighbouring heights: exactly $\\langle -f_x, -f_y, 1\\rangle$. Its $z$-component after normalizing is $\\cos\\gamma$, and $\\frac{1}{\\cos\\gamma}$ is how much a texture projected straight down gets stretched on that slope. That stretching on cliffs is why terrain shaders switch to *triplanar mapping* on steep faces.',
        },
      ],
    },
    // 3
    {
      kind: 'mcq',
      prompt: 'Which integral gives the area of the saddle surface $z = xy$ over the unit disk $D$: $x^2 + y^2 \\le 1$?',
      options: [
        { text: '$\\displaystyle\\iint_D \\sqrt{1 + x^2y^2}\\,dA$', why: 'This squares $f$ itself. The formula needs the squares of the **partial derivatives**, which measure the tilt.' },
        { text: '$\\displaystyle\\iint_D \\sqrt{1 + x^2 + y^2}\\,dA$', correct: true, why: '$f_x = y$ and $f_y = x$, so $1 + f_x^2 + f_y^2 = 1 + y^2 + x^2$.' },
        { text: '$\\displaystyle\\iint_D (1 + x + y)\\,dA$', why: 'This uses $1 + f_x + f_y$ without squares or the square root; the area of a parallelogram is the *length* of a cross product.' },
        { text: '$\\displaystyle\\iint_D xy\\,dA$', why: 'That is the signed volume under the saddle (it equals $0$ by symmetry), not its area.' },
      ],
      explanation: 'With $f = xy$: $f_x = y$, $f_y = x$, so $A = \\iint_D \\sqrt{1 + x^2 + y^2}\\,dA$. Polar coordinates finish it: $\\int_0^{2\\pi}\\int_0^1 \\sqrt{1 + r^2}\\,r\\,dr\\,d\\theta = 2\\pi \\cdot \\frac13\\left(2\\sqrt2 - 1\\right) = \\frac{2\\pi}{3}\\left(2\\sqrt2 - 1\\right) \\approx 3.83$, a bit more than the disk\'s area $\\pi$.',
    },
    // 4 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Planes and paraboloids',
      blocks: [
        {
          type: 'p',
          text: 'For a plane $z = c + px + qy$ the partial derivatives are constants, so the factor $\\sqrt{1 + p^2 + q^2}$ is the same everywhere and simply multiplies the area of $D$. A tilted plane is the shadow region stretched by a constant factor.',
        },
        {
          type: 'derivation',
          title: 'The plane $z = 2 + 3x + 4y$ over $D = [0, 5] \\times [1, 4]$',
          steps: [
            { tex: 'f_x = 3, \\quad f_y = 4, \\quad \\sqrt{1 + 9 + 16} = \\sqrt{26}', why: 'Constant slopes, so a constant stretch factor.' },
            { tex: 'A = \\iint_D \\sqrt{26}\\,dA = \\sqrt{26} \\cdot (5 \\cdot 3) = 15\\sqrt{26} \\approx 76.5', why: 'The integral of a constant is the constant times the area of $D$, here $5 \\times 3 = 15$.' },
          ],
          result: 'Cross-check without calculus: the part of the plane over $D$ is a parallelogram with edges $\\langle 5, 0, 15 \\rangle$ and $\\langle 0, 3, 12 \\rangle$. Their cross product is $\\langle -45, -60, 15 \\rangle$, of length $15\\sqrt{9 + 16 + 1} = 15\\sqrt{26}$. ✓',
        },
        {
          type: 'p',
          text: 'For curved surfaces the factor varies, and over round regions polar coordinates usually rescue the integral. Find the area of the part of the paraboloid $z = x^2 + y^2$ that lies below the plane $z = 9$.',
        },
        {
          type: 'plot3d',
          x: [-3, 3],
          y: [-3, 3],
          z: [0, 9],
          parametricSurfaces: [
            { x: 'u*cos(v)', y: 'u*sin(v)', z: 'u^2', u: [0, 3], v: [0, '2pi'], color: 'blue', opacity: 0.75, label: '$z = x^2 + y^2$, $z \\le 9$' },
            { x: 'u*cos(v)', y: 'u*sin(v)', z: '0', u: [0, 3], v: [0, '2pi'], color: 'gray', opacity: 0.35, label: 'the shadow $D$: $r \\le 3$' },
          ],
          curves: [{ x: 'k*cos(t)', y: 'k*sin(t)', z: 'k^2', t: [0, '2pi'], color: 'red' }],
          sliders: [{ name: 'k', min: 0.1, max: 3, step: 0.05, value: 1.5, label: 'ring at radius $r$', play: true }],
          readouts: [{ label: 'stretch factor $\\sqrt{1 + 4r^2} =$', expr: 'sqrt(1 + 4k^2)', digits: 3 }],
          view: { azimuth: 30, elevation: 20 },
          caption: 'The bowl meets $z = 9$ on the circle $r = 3$, so its shadow is the disk $r \\le 3$. The stretch factor $\\sqrt{1 + 4r^2}$ grows from $1$ at the bottom to $\\sqrt{37} \\approx 6.1$ at the rim, where the wall is steep.',
        },
        {
          type: 'derivation',
          title: 'Area of $z = x^2 + y^2$ below $z = 9$',
          steps: [
            { tex: 'f_x = 2x,\\ f_y = 2y \\implies \\sqrt{1 + 4x^2 + 4y^2} = \\sqrt{1 + 4r^2}', why: 'The factor depends only on $x^2 + y^2 = r^2$: a strong hint to use polar coordinates.' },
            { tex: 'A = \\int_0^{2\\pi}\\int_0^3 \\sqrt{1 + 4r^2}\\,r\\,dr\\,d\\theta', why: 'The shadow is the disk $x^2 + y^2 \\le 9$, i.e. $0 \\le r \\le 3$. Do not forget $dA = r\\,dr\\,d\\theta$; here it is what makes the integral elementary.' },
            { tex: '= 2\\pi \\cdot \\frac18 \\int_1^{37} u^{1/2}\\,du', why: 'Substitute $u = 1 + 4r^2$, $du = 8r\\,dr$; the limits $r = 0, 3$ become $u = 1, 37$.' },
            { tex: '= \\frac{\\pi}{4} \\cdot \\frac23 \\left(37^{3/2} - 1\\right) = \\frac{\\pi}{6}\\left(37\\sqrt{37} - 1\\right)', why: 'Power rule, and $37^{3/2} = 37\\sqrt{37}$.' },
          ],
          result: '$A \\approx 117.32$, about $4.1$ times the area $9\\pi \\approx 28.3$ of its shadow. A numerical double integral in Cartesian coordinates gives the same $117.3187$.',
        },
      ],
    },
    // 5
    {
      kind: 'numeric',
      prompt: 'Find the area of the part of the plane $x + y + z = 1$ that lies in the first octant ($x, y, z \\ge 0$).',
      hint: 'Write the plane as $z = 1 - x - y$. Its shadow on the $xy$-plane is the triangle $x, y \\ge 0$, $x + y \\le 1$, of area $\\frac12$.',
      answer: 'sqrt(3)/2',
      answerTex: '\\frac{\\sqrt{3}}{2}',
      label: '$A =$',
      explanation: '$f = 1 - x - y$ has $f_x = f_y = -1$, so the factor is $\\sqrt{1 + 1 + 1} = \\sqrt3$, and $A = \\sqrt3 \\cdot \\frac12 = \\frac{\\sqrt3}{2} \\approx 0.866$. Check: the piece of plane is an equilateral triangle with vertices $(1, 0, 0)$, $(0, 1, 0)$, $(0, 0, 1)$ and side $\\sqrt2$, whose area is $\\frac{\\sqrt3}{4}(\\sqrt2)^2 = \\frac{\\sqrt3}{2}$. ✓',
    },
    // 6
    {
      kind: 'expr',
      prompt: 'Write the surface-area integrand $\\sqrt{1 + f_x^2 + f_y^2}$ for the saddle $f(x, y) = x^2 - y^2$.',
      hint: '$f_x = 2x$ and $f_y = -2y$. Square each before adding.',
      label: 'integrand $=$',
      variables: ['x', 'y'],
      answer: 'sqrt(1 + 4x^2 + 4y^2)',
      answerTex: '\\sqrt{1 + 4x^2 + 4y^2}',
      explanation: '$f_x^2 = 4x^2$ and $f_y^2 = (-2y)^2 = 4y^2$: the minus sign disappears when squared, so the integrand is $\\sqrt{1 + 4x^2 + 4y^2}$, the same as for the bowl $z = x^2 + y^2$. A saddle and a bowl with the same slopes have the same area over any region: area depends on how steep the surface is, not on which way it tilts.',
    },
    // 7 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'The sphere, and an improper integral at the rim',
      blocks: [
        {
          type: 'p',
          text: 'The upper hemisphere of radius $a$ is the graph of $f(x, y) = \\sqrt{a^2 - x^2 - y^2}$ over the disk $r \\le a$. Here the stretch factor blows up at the edge: the hemisphere meets the floor vertically, so the tangent planes become vertical and $f_x$, $f_y$ become infinite.',
        },
        {
          type: 'plot3d',
          x: [-1, 1],
          y: [-1, 1],
          z: [0, 1],
          equal: true,
          parametricSurfaces: [{ x: 'sin(u)*cos(v)', y: 'sin(u)*sin(v)', z: 'cos(u)', u: [0, 'pi/2'], v: [0, '2pi'], color: 'blue', opacity: 0.55, label: 'hemisphere, $a = 1$' }],
          curves: [
            { x: 'k*cos(t)', y: 'k*sin(t)', z: 'sqrt(1 - k^2)', t: [0, '2pi'], color: 'red', label: 'ring on the sphere' },
            { x: 'k*cos(t)', y: 'k*sin(t)', z: '0', t: [0, '2pi'], color: 'gray', dashed: true, label: 'its shadow' },
          ],
          sliders: [{ name: 'k', min: 0.05, max: 0.99, step: 0.01, value: 0.6, label: 'shadow radius $r$', play: true }],
          readouts: [{ label: 'stretch factor $\\frac{a}{\\sqrt{a^2 - r^2}} =$', expr: '1/sqrt(1 - k^2)', digits: 3 }],
          view: { azimuth: 30, elevation: 18 },
          caption: 'Near the top the sphere is almost flat and the factor is about $1$. Slide the ring toward the rim: the surface turns vertical, and a thin band of shadow corresponds to a tall band of sphere. At $r = 0.99$ the factor is about $7$, and it tends to infinity at $r = 1$.',
        },
        {
          type: 'derivation',
          title: 'Area of a hemisphere of radius $a$',
          steps: [
            { tex: 'f_x = \\frac{-x}{\\sqrt{a^2 - x^2 - y^2}}, \\quad f_y = \\frac{-y}{\\sqrt{a^2 - x^2 - y^2}}', why: '[[chain-rule|Chain rule]] on the square root.' },
            { tex: '1 + f_x^2 + f_y^2 = 1 + \\frac{x^2 + y^2}{a^2 - x^2 - y^2} = \\frac{a^2}{a^2 - r^2}', why: 'Common denominator: $\\frac{(a^2 - r^2) + r^2}{a^2 - r^2}$.' },
            { tex: 'A = \\int_0^{2\\pi}\\int_0^a \\frac{a}{\\sqrt{a^2 - r^2}}\\,r\\,dr\\,d\\theta', why: 'The integrand is unbounded as $r \\to a$, so this is an [[improper-integral]]: integrate to $b < a$ and let $b \\to a^-$.' },
            { tex: '= 2\\pi a \\lim_{b \\to a^-}\\Big[-\\sqrt{a^2 - r^2}\\Big]_0^b = 2\\pi a \\lim_{b \\to a^-}\\left(a - \\sqrt{a^2 - b^2}\\right)', why: 'Substitute $u = a^2 - r^2$; the antiderivative of $\\frac{r}{\\sqrt{a^2 - r^2}}$ is $-\\sqrt{a^2 - r^2}$.' },
            { tex: '= 2\\pi a^2', why: 'The limit exists and equals $a$, so the improper integral converges.' },
          ],
          result: 'A hemisphere has area $2\\pi a^2$, and the whole sphere $4\\pi a^2$, the same result the surface-of-revolution formula gave in Calculus II.',
        },
        {
          type: 'callout',
          variant: 'history',
          text: 'Archimedes proved that a sphere has the same area as the curved side of the cylinder that just encloses it, $2\\pi a \\cdot 2a = 4\\pi a^2$, and he asked for a sphere inside a cylinder on his tombstone. A sharper version: a slice of the sphere between two parallel planes a distance $h$ apart has area $2\\pi a h$, no matter where the slice is taken.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Check the hypotheses',
          text: 'The formula needs $f_x$ and $f_y$ continuous on $D$. When they blow up on the boundary of $D$, as for the hemisphere, treat the integral as improper and take a limit. If the surface contains a truly vertical part, such as the side of a cylinder, it is not the graph of any $z = f(x, y)$ at all; such surfaces need the parametric surfaces of a later unit.',
        },
      ],
    },
    // 8
    {
      kind: 'numeric',
      prompt: 'Find the area of the cap of the sphere $x^2 + y^2 + z^2 = 4$ that lies above the plane $z = 1$.',
      hint: 'The cap is $z = \\sqrt{4 - r^2}$ over the disk where $\\sqrt{4 - r^2} \\ge 1$, i.e. $r \\le \\sqrt3$. The stretch factor is $\\frac{2}{\\sqrt{4 - r^2}}$.',
      answer: '4pi',
      answerTex: '4\\pi',
      label: '$A =$',
      explanation: '$A = \\int_0^{2\\pi}\\int_0^{\\sqrt3} \\frac{2r}{\\sqrt{4 - r^2}}\\,dr\\,d\\theta = 2\\pi \\cdot 2\\Big[-\\sqrt{4 - r^2}\\Big]_0^{\\sqrt3} = 4\\pi(2 - 1) = 4\\pi \\approx 12.57$. This time the integral is not improper, because the cap stops before the steep rim. Archimedes\' rule agrees: the cap is a slice of height $h = 1$ on a sphere of radius $2$, so its area is $2\\pi \\cdot 2 \\cdot 1 = 4\\pi$. ✓',
    },
    // 9
    {
      kind: 'error',
      prompt: 'A student computes the area of the part of $z = x^2 + y^2$ below the plane $z = 4$. Tap the first wrong line.',
      lines: [
        '$f_x = 2x$ and $f_y = 2y$, so the integrand is $\\sqrt{1 + 4x^2 + 4y^2} = \\sqrt{1 + 4r^2}$.',
        'The surface is below $z = 4$ where $x^2 + y^2 \\le 4$, so $D$ is the disk $0 \\le r \\le 4$.',
        '$A = \\displaystyle\\int_0^{2\\pi}\\int_0^4 \\sqrt{1 + 4r^2}\\,r\\,dr\\,d\\theta$',
        '$= \\dfrac{\\pi}{6}\\left(65\\sqrt{65} - 1\\right) \\approx 273.9$',
      ],
      errorLines: [2],
      explanation: 'Line 2 correctly finds $x^2 + y^2 \\le 4$ but then reads it as $r \\le 4$. Since $x^2 + y^2 = r^2$, the condition is $r^2 \\le 4$, i.e. $r \\le 2$. Correctly: $A = \\int_0^{2\\pi}\\int_0^2 \\sqrt{1 + 4r^2}\\,r\\,dr\\,d\\theta = \\frac{\\pi}{6}\\left(17\\sqrt{17} - 1\\right) \\approx 36.18$. (Lines 3 and 4 are computed correctly from the wrong limit.)',
    },
    // 10 ────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Surface area of a heightmap in code',
      blocks: [
        {
          type: 'p',
          text: 'Most surface-area integrals have no elementary antiderivative; even $z = x^2 + y^2$ over a square leads to a hard integral. In practice areas are computed numerically, and a game already has the perfect data structure for it: a terrain **heightmap**, a grid of heights that the engine turns into a mesh of triangles. Adding up the triangle areas, each half the length of a cross product, approximates the surface area, just as a polyline approximates arc length.',
        },
        {
          type: 'p',
          text: 'The program compares that mesh area with the midpoint rule applied to the integral formula, for the surface $z = \\frac23\\left(x^{3/2} + y^{3/2}\\right)$ over the unit square. This surface is chosen so that $\\sqrt{1 + f_x^2 + f_y^2} = \\sqrt{1 + x + y}$ and the exact area is known: $\\frac{4}{15}\\left(9\\sqrt3 - 8\\sqrt2 + 1\\right) \\approx 1.406600$.',
        },
        {
          type: 'code',
          title: 'heightmap_area.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdio>

struct Vec3 { double x, y, z; };
Vec3 operator-(Vec3 a, Vec3 b) { return {a.x - b.x, a.y - b.y, a.z - b.z}; }
Vec3 cross(Vec3 a, Vec3 b) { return {a.y * b.z - a.z * b.y, a.z * b.x - a.x * b.z, a.x * b.y - a.y * b.x}; }
double length(Vec3 v) { return std::sqrt(v.x * v.x + v.y * v.y + v.z * v.z); }

// Height field z = f(x, y) = (2/3)(x^1.5 + y^1.5) on [0, 1] x [0, 1].
double f(double x, double y) { return 2.0 / 3.0 * (std::pow(x, 1.5) + std::pow(y, 1.5)); }

// Area of the triangle mesh: an n x n grid of cells, each split into two triangles.
double meshArea(int n) {
    const double h = 1.0 / n;
    double area = 0.0;
    for (int i = 0; i < n; ++i)
        for (int j = 0; j < n; ++j) {
            const double x = i * h, y = j * h;
            const Vec3 p00{x, y, f(x, y)}, p10{x + h, y, f(x + h, y)};
            const Vec3 p01{x, y + h, f(x, y + h)}, p11{x + h, y + h, f(x + h, y + h)};
            area += 0.5 * length(cross(p10 - p00, p11 - p00));   // triangle 1
            area += 0.5 * length(cross(p11 - p00, p01 - p00));   // triangle 2
        }
    return area;
}

// Midpoint rule for the integral of sqrt(1 + fx^2 + fy^2) = sqrt(1 + x + y).
double formulaArea(int n) {
    const double h = 1.0 / n;
    double sum = 0.0;
    for (int i = 0; i < n; ++i)
        for (int j = 0; j < n; ++j)
            sum += std::sqrt(1.0 + (i + 0.5) * h + (j + 0.5) * h);
    return sum * h * h;
}

int main() {
    const double exact = 4.0 / 15.0 * (9.0 * std::sqrt(3.0) - 8.0 * std::sqrt(2.0) + 1.0);
    for (int n = 4; n <= 256; n *= 4)
        std::printf("n = %3d  mesh = %.6f  formula = %.6f\\n", n, meshArea(n), formulaArea(n));
    std::printf("exact            %.6f\\n", exact);
}`,
          output: `n =   4  mesh = 1.403077  formula = 1.407100
n =  16  mesh = 1.406285  formula = 1.406631
n =  64  mesh = 1.406574  formula = 1.406602
n = 256  mesh = 1.406598  formula = 1.406600
exact            1.406600`,
          annotations: [
            { lines: '21-22', text: 'Each grid cell becomes two triangles sharing the diagonal from `p00` to `p11`. A triangle\'s area is half the length of the cross product of two edges: the same cross product as in the derivation.' },
            { lines: 33, text: 'The integral formula sampled at cell centers. It needs the partial derivatives in closed form; the mesh method needs only heights, which is all a heightmap stores.' },
            { lines: 39, text: 'Both converge to the exact area. Here the mesh is slightly low, much as an inscribed polyline is shorter than its curve.' },
          ],
        },
        {
          type: 'deepdive',
          title: 'Why area is defined with tangent planes, not inscribed triangles',
          blocks: [
            {
              type: 'p',
              text: 'For curves, inscribed polylines always converge to the arc length. For surfaces, inscribed triangle meshes can fail spectacularly. The **Schwarz lantern** inscribes a cylinder with rings of thin zigzag triangles. If the number of rings grows much faster than the number of triangles around each ring, the triangles tilt almost perpendicular to the cylinder, crinkling like a paper lantern, and the total area of the mesh tends to infinity even though every vertex lies on the cylinder.',
            },
            {
              type: 'p',
              text: 'The fix is to measure each piece with its **tangent** plane, which is guaranteed to line up with the surface. That is precisely the derivation above, and it is why the heightmap mesh in the program, whose triangles do line up with the surface as $n$ grows, converges safely.',
            },
          ],
        },
      ],
    },
    // 11
    {
      kind: 'order',
      prompt: 'Put the steps of the derivation of the surface area formula in order.',
      lines: [
        'Divide the shadow region $D$ into small rectangles of area $\\Delta A$',
        'Over each rectangle, replace the surface by its tangent-plane parallelogram',
        'Find its edges $\\langle \\Delta x, 0, f_x\\,\\Delta x\\rangle$ and $\\langle 0, \\Delta y, f_y\\,\\Delta y\\rangle$ and take the length of their cross product: $\\sqrt{1 + f_x^2 + f_y^2}\\,\\Delta A$',
        'Add the parallelogram areas and let the rectangles shrink, giving $\\iint_D \\sqrt{1 + f_x^2 + f_y^2}\\,dA$',
      ],
      distractors: ['Replace the surface by the flat rectangle $R_{ij}$ itself, of area $\\Delta A$'],
      explanation: 'Partition, linearize, measure with a cross product, then sum and take the limit. The distractor ignores the tilt: using the shadow rectangles themselves just gives the area of $D$, not of the surface.',
    },
    // 12
    {
      kind: 'truefalse',
      prompt: 'If you replace the surface $z = f(x, y)$ by $z = 2f(x, y)$ over the same region $D$ (doubling every height), the surface area doubles.',
      answer: false,
      explanation: 'Doubling $f$ doubles the slopes, so the integrand becomes $\\sqrt{1 + 4f_x^2 + 4f_y^2}$, which is not $2\\sqrt{1 + f_x^2 + f_y^2}$. The flat part "$1$" does not scale. For example, a flat plane $z = 0$ stays flat ($2 \\cdot 0 = 0$) and keeps the same area; a very steep surface comes close to doubling. Surface area depends on the tilt of the surface, not linearly on its height.',
    },
    // 13
    {
      kind: 'numeric',
      prompt: 'Find the area of the part of the surface $z = x^2 + 2y$ that lies above the triangle with vertices $(0, 0)$, $(1, 0)$ and $(1, 1)$.',
      hint: 'The integrand is $\\sqrt{4x^2 + 5}$, which does not depend on $y$, so integrate in $y$ first: the triangle is $0 \\le x \\le 1$, $0 \\le y \\le x$.',
      answer: '(27 - 5sqrt(5))/12',
      answerTex: '\\frac{27 - 5\\sqrt{5}}{12}',
      label: '$A =$',
      explanation: '$f_x = 2x$, $f_y = 2$, so the factor is $\\sqrt{1 + 4x^2 + 4} = \\sqrt{4x^2 + 5}$. Then $A = \\int_0^1\\int_0^x \\sqrt{4x^2 + 5}\\,dy\\,dx = \\int_0^1 x\\sqrt{4x^2 + 5}\\,dx = \\frac{1}{12}\\left(4x^2 + 5\\right)^{3/2}\\Big|_0^1 = \\frac{1}{12}\\left(27 - 5\\sqrt5\\right) \\approx 1.318$. Integrating in $y$ first produced the factor $x$ that the substitution $u = 4x^2 + 5$ needs, the same trick as reversing the order of integration. A decimal such as $1.318$ is accepted.',
    },
  ],
  takeaways: [
    'Over a small rectangle the surface is nearly its tangent plane, a parallelogram with edges $\\langle \\Delta x, 0, f_x\\Delta x\\rangle$ and $\\langle 0, \\Delta y, f_y\\Delta y\\rangle$; its area is the length of their cross product, $\\sqrt{1 + f_x^2 + f_y^2}\\,\\Delta A$.',
    'Surface area of $z = f(x, y)$ over $D$: $A(S) = \\iint_D \\sqrt{1 + f_x^2 + f_y^2}\\,dA$.',
    'The factor is $\\frac{1}{\\cos\\gamma}$, where $\\gamma$ is the tilt of the normal $\\langle -f_x, -f_y, 1\\rangle$ from vertical: steep surfaces have much more area than their shadows.',
    'For round shadows use polar coordinates; at a vertical rim (a hemisphere) the integral is improper but can still converge, giving $4\\pi a^2$ for a sphere.',
    'Numerically, sum triangle areas of a heightmap mesh (half a cross product each); tangent planes, not arbitrary inscribed triangles, are what make the definition reliable.',
  ],
  reading: [
    {
      title: 'OpenStax Calculus Volume 3',
      url: 'https://openstax.org/details/books/calculus-volume-3',
      source: 'openstax',
      note: 'Section 6.6 treats the area of a graph $z = f(x, y)$ as a special case of the area of a parametric surface, with worked examples.',
    },
    {
      title: "Paul's Online Math Notes — Calculus III",
      url: 'https://tutorial.math.lamar.edu/Classes/CalcIII/CalcIII.aspx',
      source: 'other',
      note: 'The Surface Area section (under Multiple Integrals) works through planes, paraboloids and spherical caps with polar coordinates.',
    },
    {
      title: 'Wikipedia — Schwarz lantern',
      url: 'https://en.wikipedia.org/wiki/Schwarz_lantern',
      source: 'wikipedia',
      note: 'Pictures of the inscribed triangle meshes whose area diverges, the reason surface area needs tangent planes.',
    },
  ],
};
