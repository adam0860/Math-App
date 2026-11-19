import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'calc3-surface-integrals',
  title: 'Surface Integrals and Flux',
  summary: 'Integrating over curved surfaces: scalar surface integrals for mass and averages, oriented surfaces (and the one-sided Möbius strip), and flux ∬ F · dS, the rate a field flows through a surface. Flux through graphs and spheres, and a first look at Gauss\'s law.',
  minutes: 19,
  objectives: [
    'Evaluate a scalar surface integral $\\iint_S f\\,dS = \\iint_D f(\\vec r(u, v))\\,|\\vec r_u\\times\\vec r_v|\\,dA$',
    'Explain what an orientation of a surface is, choose the outward or upward one, and recognize a non-orientable surface',
    'Compute flux $\\iint_S \\vec F\\cdot d\\vec S = \\iint_D \\vec F\\cdot(\\vec r_u\\times\\vec r_v)\\,dA$ with the correct sign',
    'Use the shortcut $\\iint_D (-P g_x - Q g_y + R)\\,dA$ for upward flux through a graph $z = g(x, y)$',
    'Compute flux through spheres using $\\vec n = \\vec r/a$, and explain why the flux of an inverse-square field does not depend on the radius',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Scalar surface integrals',
      blocks: [
        {
          type: 'p',
          text: 'A line integral $\\int_C f\\,ds$ adds up $f$ along a curve, weighting by arc length. A **surface integral** does the same over a surface, weighting by area. Picture a thin curved shell (a helmet, a satellite dish, a hull plate) with density $f(x, y, z)$ grams per square centimeter: its mass is "density times area", summed over the shell.',
        },
        {
          type: 'definition',
          term: 'Surface integral of a scalar function',
          text: 'Split $S$ into small patches of area $\\Delta S_{ij}$, sample $f$ at a point $P_{ij}^*$ in each, and take the limit of $\\sum f(P_{ij}^*)\\,\\Delta S_{ij}$ as the patches shrink. That limit is the [[calc3-surface-integral|surface integral]] $\\iint_S f\\,dS$. For a smooth surface traced once by $\\vec r(u, v)$, $(u, v) \\in D$:\n\n$$\\iint_S f\\,dS = \\iint_D f(\\vec r(u, v))\\,|\\vec r_u\\times\\vec r_v|\\,dA.$$',
        },
        {
          type: 'p',
          text: 'The recipe: substitute the parametrization into $f$, and replace $dS$ by the area element $|\\vec r_u\\times\\vec r_v|\\,dA$ from the last lesson. With $f = 1$ you recover the surface area. For a graph $z = g(x, y)$ the area element is $dS = \\sqrt{1 + g_x^2 + g_y^2}\\,dA$; for a sphere of radius $a$ it is $dS = a^2\\sin\\phi\\,d\\phi\\,d\\theta$.',
        },
        {
          type: 'derivation',
          title: '$\\iint_S x^2\\,dS$ over the unit sphere',
          steps: [
            { tex: 'x = \\sin\\phi\\cos\\theta,\\qquad dS = \\sin\\phi\\,d\\phi\\,d\\theta', why: 'Spherical parametrization with $a = 1$; the area element is $|\\vec r_\\phi\\times\\vec r_\\theta| = \\sin\\phi$.' },
            { tex: '\\iint_S x^2\\,dS = \\int_0^{2\\pi}\\int_0^{\\pi} \\sin^2\\phi\\cos^2\\theta\\,\\sin\\phi\\,d\\phi\\,d\\theta', why: 'Substitute $x$ into $f = x^2$ and multiply by the area element.' },
            { tex: '= \\left( \\int_0^{2\\pi}\\cos^2\\theta\\,d\\theta \\right)\\left( \\int_0^{\\pi}\\sin^3\\phi\\,d\\phi \\right) = \\pi\\cdot\\frac{4}{3}', why: 'The integrand is a product of a function of $\\theta$ and a function of $\\phi$ over a rectangle, so it splits. $\\int_0^\\pi \\sin^3\\phi\\,d\\phi = \\int_{-1}^{1}(1 - w^2)\\,dw = \\frac{4}{3}$ with $w = \\cos\\phi$.' },
            { tex: '= \\frac{4\\pi}{3}', why: 'Multiply.' },
          ],
          result: '$\\iint_S x^2\\,dS = \\frac{4\\pi}{3}$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'A symmetry check worth stealing',
          text: 'On the unit sphere $x^2 + y^2 + z^2 = 1$, so $\\iint_S (x^2 + y^2 + z^2)\\,dS = \\iint_S 1\\,dS = 4\\pi$. By symmetry the three terms contribute equally, so each is $\\frac{4\\pi}{3}$, with no integration at all. Symmetry arguments like this are the fastest way to catch a dropped factor in a surface integral.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Mass, centroid, average',
          text: 'With density $\\delta(x, y, z)$, a shell has mass $m = \\iint_S \\delta\\,dS$, center of mass $\\bar z = \\frac{1}{m}\\iint_S z\\,\\delta\\,dS$ (as in [[calc2-center-of-mass]], now on a surface), and the average of $f$ over $S$ is $\\frac{1}{A(S)}\\iint_S f\\,dS$. For the uniform upper unit hemisphere, $\\iint_S z\\,dS = \\pi$ and $A = 2\\pi$, so its centroid sits at height $\\bar z = \\frac{1}{2}$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'numeric',
      prompt: 'Evaluate $\\iint_S (x^2 + y^2)\\,dS$, where $S$ is the sphere $x^2 + y^2 + z^2 = 4$. An exact answer or a decimal to 2 places is accepted.',
      answer: '128pi/3',
      answerTex: '\\frac{128\\pi}{3} \\approx 134.04',
      hint: 'With radius $2$, $x^2 + y^2 = 4\\sin^2\\phi$ and $dS = 4\\sin\\phi\\,d\\phi\\,d\\theta$. Or use the symmetry trick: $x^2 + y^2$ is two-thirds of $x^2 + y^2 + z^2$ on average.',
      explanation: 'Directly: $\\int_0^{2\\pi}\\int_0^\\pi 4\\sin^2\\phi\\cdot 4\\sin\\phi\\,d\\phi\\,d\\theta = 16\\cdot 2\\pi\\cdot\\frac{4}{3} = \\frac{128\\pi}{3}$. By symmetry: $\\iint_S (x^2 + y^2 + z^2)\\,dS = 4\\cdot A = 4\\cdot 16\\pi = 64\\pi$, and $x^2 + y^2$ gets two of the three equal shares: $\\frac{2}{3}\\cdot 64\\pi = \\frac{128\\pi}{3} \\approx 134.04$. Forgetting the $a^2 = 4$ in $dS$ gives $\\frac{32\\pi}{3}$.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Oriented surfaces: picking a side',
      blocks: [
        {
          type: 'p',
          text: 'To measure flow **through** a surface you must say which way counts as positive, just as a closed curve needs a direction for circulation. At each point of a smooth surface there are two unit normals, $\\vec n$ and $-\\vec n$. Choosing one of them at every point, so that the choice varies continuously, is choosing an orientation.',
        },
        {
          type: 'definition',
          term: 'Oriented surface',
          text: 'A surface $S$ is [[calc3-oriented-surface|orientable]] if it has a continuous unit normal field $\\vec n$; the choice of $\\vec n$ is an **orientation**, and $S$ with that choice is an oriented surface. It has two sides: the one $\\vec n$ points out of, and the other.\n\n- For a closed surface (a sphere, the boundary of a solid) the convention is the **outward** normal: positive orientation.\n- For a graph $z = g(x, y)$, the upward normal is $\\vec n = \\dfrac{\\langle -g_x, -g_y, 1 \\rangle}{\\sqrt{1 + g_x^2 + g_y^2}}$.\n- For $\\vec r(u, v)$, the formula $\\vec n = \\dfrac{\\vec r_u\\times\\vec r_v}{|\\vec r_u\\times\\vec r_v|}$ gives one orientation, and swapping $u$ and $v$ gives the other.',
        },
        {
          type: 'p',
          text: 'Not every surface has two sides. Take a strip of paper, give it a half twist and tape the ends: the [[calc3-mobius-strip|Möbius strip]]. Slide a normal vector once around the center line, always keeping it perpendicular and moving it continuously, and it comes back pointing the **opposite** way. No continuous choice of $\\vec n$ exists, so flux through a Möbius strip is not defined.',
        },
        {
          type: 'plot3d',
          x: [-1.6, 1.6],
          y: [-1.6, 1.6],
          z: [-0.9, 0.9],
          equal: true,
          parametricSurfaces: [{ x: '(1 + v*cos(u/2))*cos(u)', y: '(1 + v*cos(u/2))*sin(u)', z: 'v*sin(u/2)', u: [0, '2pi'], v: [-0.4, 0.4], color: 'purple', opacity: 0.75 }],
          curves: [{ x: 'cos(t)', y: 'sin(t)', z: '0', t: [0, '2pi'], color: 'gray', dashed: true }],
          points: [{ x: 'cos(s)', y: 'sin(s)', z: 0, color: 'red' }],
          vectors: [{ from: ['cos(s)', 'sin(s)', 0], to: ['cos(s) + 0.6cos(s)*sin(s/2)', 'sin(s) + 0.6sin(s)*sin(s/2)', '-0.6cos(s/2)'], color: 'red', label: 'n' }],
          sliders: [{ name: 's', min: 0, max: 6.2832, step: 0.02, value: 0, label: 'position along the center line', play: true }],
          readouts: [{ label: '$z$-component of $\\vec n$ $= -\\cos(s/2) =$', expr: '-cos(s/2)', digits: 3 }],
          resolution: 36,
          view: { azimuth: 20, elevation: 35 },
          caption: 'Press ▶. The red normal starts at $(1, 0, 0)$ pointing straight down ($n_z = -1$), travels once around the strip while varying continuously, and arrives back at the same point pointing straight **up** ($n_z = +1$). The strip has only one side.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Orientation in a mesh is winding order',
          text: 'A triangle mesh stores orientation implicitly: the normal of triangle $(A, B, C)$ is $(B - A)\\times(C - A)$, so listing the vertices counterclockwise (seen from outside) makes every normal point out. A closed, consistently wound mesh is an orientable surface with the outward orientation. A model whose triangles disagree renders with patches culled or lit from behind, and mesh tools offer "recalculate normals outside" to fix it. A Möbius-strip mesh cannot be wound consistently at all.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'mcq',
      prompt: 'The sphere of radius $a$ is parametrized by $\\vec r(\\phi, \\theta) = \\langle a\\sin\\phi\\cos\\theta,\\ a\\sin\\phi\\sin\\theta,\\ a\\cos\\phi \\rangle$. At the point with $\\phi = \\frac{\\pi}{2}$, $\\theta = 0$, which normal gives the **positive (outward)** orientation?',
      options: [
        { text: '$\\vec r_\\phi\\times\\vec r_\\theta$', correct: true, why: 'At $\\phi = \\frac{\\pi}{2}$, $\\theta = 0$: $\\vec r_\\phi = \\langle 0, 0, -a \\rangle$ and $\\vec r_\\theta = \\langle 0, a, 0 \\rangle$, so $\\vec r_\\phi\\times\\vec r_\\theta = \\langle a^2, 0, 0 \\rangle$, pointing away from the center at $(a, 0, 0)$.' },
        { text: '$\\vec r_\\theta\\times\\vec r_\\phi$', why: 'Reversing the order negates the cross product: $\\langle -a^2, 0, 0 \\rangle$ points toward the center. That is the inward orientation.' },
        { text: 'Either one; a sphere has only one side', why: 'A sphere has two sides, inside and outside. The two orders give opposite normals, and only one of them points out.' },
        { text: 'Neither; the normal is zero there', why: '$|\\vec r_\\phi\\times\\vec r_\\theta| = a^2\\sin\\phi$ vanishes only at the poles. At the equator it equals $a^2$.' },
      ],
      explanation: 'In general $\\vec r_\\phi\\times\\vec r_\\theta = a^2\\sin\\phi\\,\\langle \\sin\\phi\\cos\\theta, \\sin\\phi\\sin\\theta, \\cos\\phi \\rangle = a\\sin\\phi\\,\\vec r$, a positive multiple of the position vector, so it points outward everywhere except the poles. Checking one convenient point, as here, is the quickest way to decide which order to use.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Flux: how much flows through',
      blocks: [
        {
          type: 'p',
          text: 'Let $\\vec F$ be the velocity of a fluid (or, better, density times velocity: mass flow per unit area per unit time). Through a small flat patch of area $\\Delta S$ with unit normal $\\vec n$, only the normal component $\\vec F\\cdot\\vec n$ carries fluid across; the tangential part slides along. So the rate of flow through the patch is $(\\vec F\\cdot\\vec n)\\,\\Delta S$, and summing gives the flux.',
        },
        {
          type: 'definition',
          term: 'Flux of a vector field',
          text: 'The [[calc3-flux|flux]] of $\\vec F$ across an oriented surface $S$ with unit normal $\\vec n$ is\n\n$$\\iint_S \\vec F\\cdot d\\vec S = \\iint_S \\vec F\\cdot\\vec n\\,dS = \\iint_D \\vec F(\\vec r(u, v))\\cdot(\\vec r_u\\times\\vec r_v)\\,dA,$$\n\nthe last form valid when $\\vec r_u\\times\\vec r_v$ points along the chosen $\\vec n$ (otherwise put a minus sign in front).',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the square root disappears',
          text: 'In $\\vec n\\,dS$, the unit normal is $\\frac{\\vec r_u\\times\\vec r_v}{|\\vec r_u\\times\\vec r_v|}$ and the area element is $|\\vec r_u\\times\\vec r_v|\\,dA$. The lengths cancel: $d\\vec S = \\vec n\\,dS = (\\vec r_u\\times\\vec r_v)\\,dA$. Flux integrals are usually **easier** than scalar surface integrals, because you never take the length of the cross product.',
        },
        {
          type: 'derivation',
          title: 'Outward flux of $\\vec F = \\langle z, y, x \\rangle$ through the unit sphere',
          steps: [
            { tex: '\\vec r_\\phi\\times\\vec r_\\theta = \\langle \\sin^2\\phi\\cos\\theta,\\ \\sin^2\\phi\\sin\\theta,\\ \\sin\\phi\\cos\\phi \\rangle', why: 'From the last lesson with $a = 1$; it points outward.' },
            { tex: '\\vec F(\\vec r) = \\langle \\cos\\phi,\\ \\sin\\phi\\sin\\theta,\\ \\sin\\phi\\cos\\theta \\rangle', why: 'Substitute $x, y, z$ into $\\langle z, y, x \\rangle$.' },
            { tex: '\\vec F\\cdot(\\vec r_\\phi\\times\\vec r_\\theta) = 2\\sin^2\\phi\\cos\\phi\\cos\\theta + \\sin^3\\phi\\sin^2\\theta', why: 'The first and third products are both $\\sin^2\\phi\\cos\\phi\\cos\\theta$.' },
            { tex: '\\int_0^{2\\pi}\\int_0^{\\pi} (\\dots)\\,d\\phi\\,d\\theta = 0 + \\frac{4}{3}\\cdot\\pi', why: 'The first term has $\\int_0^{2\\pi}\\cos\\theta\\,d\\theta = 0$. The second splits as $\\int_0^\\pi\\sin^3\\phi\\,d\\phi\\cdot\\int_0^{2\\pi}\\sin^2\\theta\\,d\\theta = \\frac{4}{3}\\cdot\\pi$.' },
          ],
          result: 'The outward flux is $\\frac{4\\pi}{3}$: net flow is out of the sphere. (Numerically, a midpoint sum gives $4.1888$; see the code below.)',
        },
        {
          type: 'plot3d',
          x: [-1.6, 1.6],
          y: [-1.6, 1.6],
          z: [-1.6, 1.6],
          equal: true,
          parametricSurfaces: [{ x: 'sin(v)*cos(u)', y: 'sin(v)*sin(u)', z: 'cos(v)', u: [0, '2pi'], v: [0, 'pi'], color: 'blue', opacity: 0.4 }],
          field: { x: 'z', y: 'y', z: 'x', n: 4, color: 'gray' },
          points: [{ x: 'sin(p)*cos(q)', y: 'sin(p)*sin(q)', z: 'cos(p)', label: 'P' }],
          vectors: [
            { from: ['sin(p)*cos(q)', 'sin(p)*sin(q)', 'cos(p)'], to: ['1.55sin(p)*cos(q)', '1.55sin(p)*sin(q)', '1.55cos(p)'], color: 'purple', label: 'n' },
            { from: ['sin(p)*cos(q)', 'sin(p)*sin(q)', 'cos(p)'], to: ['sin(p)*cos(q) + 0.5cos(p)', 'sin(p)*sin(q) + 0.5sin(p)*sin(q)', 'cos(p) + 0.5sin(p)*cos(q)'], color: 'red', label: 'F' },
          ],
          sliders: [
            { name: 'p', min: 0.05, max: 3.1, step: 0.02, value: 1.0, label: '$\\phi$' },
            { name: 'q', min: 0, max: 6.28, step: 0.02, value: 0.5, label: '$\\theta$' },
          ],
          readouts: [{ label: '$\\vec F\\cdot\\vec n = 2xz + y^2 =$', expr: '2sin(p)*cos(q)*cos(p) + (sin(p)*sin(q))^2', digits: 3 }],
          view: { azimuth: 35, elevation: 20 },
          caption: 'The field $\\langle z, y, x \\rangle$ (gray) and the unit sphere. At the point $P$, the red arrow is $\\vec F$ (half scale) and the purple arrow the outward normal. Where $\\vec F\\cdot\\vec n > 0$ fluid leaves; where it is negative fluid enters. Moving $P$ around shows both, and the net result is $\\frac{4\\pi}{3}$ out.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'mcq',
      prompt: 'Rain falls with constant velocity $\\vec F = \\langle 0, 0, -3 \\rangle$. What is its flux through the upper unit hemisphere $x^2 + y^2 + z^2 = 1$, $z \\ge 0$, oriented upward (outward)?',
      options: [
        { text: '$-3\\pi$', correct: true, why: '$\\vec F\\cdot\\vec n = -3n_z$, and $\\iint_S n_z\\,dS$ is the area of the shadow of $S$ on the $xy$-plane, the unit disk, which is $\\pi$.' },
        { text: '$3\\pi$', why: 'Rain moves down while the normal points up, so $\\vec F\\cdot\\vec n \\le 0$ everywhere. The flux is negative.' },
        { text: '$-6\\pi$', why: 'This multiplies $-3$ by the hemisphere\'s area $2\\pi$, as if the rain hit every patch head-on. On the sloping sides only the normal component $n_z < 1$ counts.' },
        { text: '$0$', why: 'Zero net flux is what a constant field gives through a **closed** surface. The hemisphere is open: rain goes in through the top and does not come back out through it.' },
      ],
      explanation: 'Flux only counts the component of $\\vec F$ across the surface. Here $\\vec F\\cdot\\vec n\\,dS = -3\\,n_z\\,dS$, and $n_z\\,dS$ is the projected area $dA$ of each patch onto the $xy$-plane. So the flux is $-3$ times the area of the unit disk: $-3\\pi$. The hemisphere catches exactly as much rain as the flat disk it covers, which is why a dome and a flat roof over the same footprint collect the same rainfall.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'truefalse',
      prompt: 'The flux $\\iint_S \\vec F\\cdot d\\vec S$ is the same whichever of the two orientations of $S$ you choose.',
      answer: false,
      explanation: 'Reversing the orientation replaces $\\vec n$ by $-\\vec n$, which negates the flux. (The scalar surface integral $\\iint_S f\\,dS$ does not depend on orientation, because $dS = |\\vec r_u\\times\\vec r_v|\\,dA$ is always positive.) That is why every flux problem must say "outward", "upward" or "oriented by $\\vec n$", and why the right-hand rule matters so much in Stokes\' theorem.',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'concept',
      title: 'Flux through a graph',
      blocks: [
        {
          type: 'p',
          text: 'Many surfaces are graphs $z = g(x, y)$ over a region $D$ in the $xy$-plane. Parametrize with $x$ and $y$ themselves: $\\vec r(x, y) = \\langle x, y, g(x, y) \\rangle$. Then $\\vec r_x = \\langle 1, 0, g_x \\rangle$, $\\vec r_y = \\langle 0, 1, g_y \\rangle$, and',
        },
        {
          type: 'theorem',
          name: 'Upward flux through $z = g(x, y)$',
          tex: '\\vec r_x\\times\\vec r_y = \\langle -g_x,\\ -g_y,\\ 1 \\rangle \\quad\\implies\\quad \\iint_S \\vec F\\cdot d\\vec S = \\iint_D \\left( -P\\,g_x - Q\\,g_y + R \\right) dA',
          text: 'For $\\vec F = \\langle P, Q, R \\rangle$, with $z = g(x, y)$ substituted into $P$, $Q$, $R$. The normal has $\\mathbf{k}$-component $+1$, so this is the **upward** orientation; for downward flux, negate.',
        },
        {
          type: 'derivation',
          title: 'Flux of $\\vec F = \\langle y, x, z \\rangle$ up through the paraboloid $z = 1 - x^2 - y^2$, $z \\ge 0$',
          steps: [
            { tex: 'g_x = -2x,\\quad g_y = -2y', why: 'Partial derivatives of $g = 1 - x^2 - y^2$. The surface lies over the unit disk, where $g \\ge 0$.' },
            { tex: '-P g_x - Q g_y + R = -y(-2x) - x(-2y) + (1 - x^2 - y^2)', why: 'Plug into the formula, substituting $z = g$ into $R = z$.' },
            { tex: '= 4xy + 1 - x^2 - y^2', why: 'Simplify.' },
            { tex: '\\int_0^{2\\pi}\\int_0^1 \\big( 4r^2\\cos\\theta\\sin\\theta + 1 - r^2 \\big)\\,r\\,dr\\,d\\theta', why: 'Polar coordinates over the unit disk; do not forget $dA = r\\,dr\\,d\\theta$.' },
            { tex: '= 0 + 2\\pi\\left( \\tfrac{1}{2} - \\tfrac{1}{4} \\right) = \\frac{\\pi}{2}', why: '$\\int_0^{2\\pi}\\cos\\theta\\sin\\theta\\,d\\theta = 0$, and $\\int_0^1 (r - r^3)\\,dr = \\frac{1}{4}$.' },
          ],
          result: 'The upward flux is $\\frac{\\pi}{2}$ (checked numerically: $1.5708$).',
        },
        {
          type: 'plot3d',
          x: [-1.5, 1.5],
          y: [-1.5, 1.5],
          z: [0, 1.6],
          parametricSurfaces: [{ x: 'u*cos(v)', y: 'u*sin(v)', z: '1 - u^2', u: [0, 1], v: [0, '2pi'], color: 'teal', opacity: 0.7 }],
          field: { x: 'y', y: 'x', z: 'z', n: 4, color: 'gray' },
          vectors: [
            { from: ['a*cos(b)', 'a*sin(b)', '1 - a^2'], to: ['a*cos(b) + 0.25*2a*cos(b)', 'a*sin(b) + 0.25*2a*sin(b)', '1 - a^2 + 0.25'], color: 'purple', label: 'n (up)' },
            { from: ['a*cos(b)', 'a*sin(b)', '1 - a^2'], to: ['a*cos(b) + 0.4a*sin(b)', 'a*sin(b) + 0.4a*cos(b)', '1 - a^2 + 0.4(1 - a^2)'], color: 'red', label: 'F' },
          ],
          points: [{ x: 'a*cos(b)', y: 'a*sin(b)', z: '1 - a^2', label: 'P' }],
          sliders: [
            { name: 'a', min: 0, max: 1, step: 0.02, value: 0.7, label: 'distance from the axis $r$' },
            { name: 'b', min: 0, max: 6.28, step: 0.02, value: 0.8, label: 'angle $\\theta$' },
          ],
          readouts: [{ label: '$-Pg_x - Qg_y + R = 4xy + 1 - x^2 - y^2 =$', expr: '4a^2*cos(b)*sin(b) + 1 - a^2', digits: 3 }],
          view: { azimuth: 30, elevation: 22 },
          caption: 'The paraboloid with the upward normal $\\langle -g_x, -g_y, 1 \\rangle = \\langle 2x, 2y, 1 \\rangle$ (purple, scaled) and $\\vec F$ (red, scaled). The integrand is the dot product of the two unscaled vectors. Move $P$ into the quadrants where $xy < 0$ near the rim: there the integrand turns negative and fluid flows down through the surface.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Two classic slips',
          text: 'First, substitute $z = g(x, y)$ into $\\vec F$ **before** integrating over $D$; a leftover $z$ in a $dx\\,dy$ integral is meaningless. Second, if you switch to polar coordinates over $D$, include the $r$ in $dA = r\\,dr\\,d\\theta$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'expr',
      prompt: 'Set up the upward flux of $\\vec F = \\langle x, y, z^2 \\rangle$ through the paraboloid $z = x^2 + y^2$ as $\\iint_D (\\dots)\\,dA$. Enter the integrand after substituting $z = x^2 + y^2$.',
      label: '$-Pg_x - Qg_y + R =$',
      answer: '(x^2 + y^2)^2 - 2x^2 - 2y^2',
      answerTex: '(x^2 + y^2)^2 - 2x^2 - 2y^2',
      variables: ['x', 'y'],
      hint: '$g = x^2 + y^2$, so $g_x = 2x$ and $g_y = 2y$. Then substitute $z = g$ into $R = z^2$.',
      explanation: '$-P g_x - Q g_y + R = -x(2x) - y(2y) + z^2 = -2x^2 - 2y^2 + (x^2 + y^2)^2$. In polar form that is $r^4 - 2r^2$, which you would integrate against $r\\,dr\\,d\\theta$. The $-2x^2 - 2y^2$ part is negative because the upward normal $\\langle -2x, -2y, 1 \\rangle$ of this bowl tilts inward while $\\langle x, y \\rangle$ points outward.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'numeric',
      prompt: 'Find the upward flux of $\\vec F = \\langle x, y, z \\rangle$ through the part of the plane $x + y + z = 1$ in the first octant.',
      answer: '1/2',
      hint: 'Write the plane as $z = g(x, y) = 1 - x - y$ over the triangle $x, y \\ge 0$, $x + y \\le 1$, and use $-P g_x - Q g_y + R$.',
      explanation: 'Here $g_x = g_y = -1$, so the integrand is $-x(-1) - y(-1) + (1 - x - y) = x + y + 1 - x - y = 1$. The flux is therefore the area of the triangle $D$: $\\frac{1}{2}$. Geometric check: every point of the plane has $\\vec F\\cdot\\langle 1, 1, 1 \\rangle = x + y + z = 1$, so $\\vec F$ crosses it at a uniform rate.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'Flux through spheres, and a preview of Gauss\'s law',
      blocks: [
        {
          type: 'p',
          text: 'On the sphere of radius $a$ centered at the origin, the outward unit normal is simply the position vector scaled down: $\\vec n = \\frac{\\langle x, y, z \\rangle}{a}$. That makes radial fields easy, with no parametrization needed.',
        },
        {
          type: 'derivation',
          title: 'Two radial fields through the sphere of radius $a$',
          steps: [
            { tex: '\\vec F = \\langle x, y, z \\rangle:\\quad \\vec F\\cdot\\vec n = \\frac{x^2 + y^2 + z^2}{a} = a', why: 'On the sphere $x^2 + y^2 + z^2 = a^2$, so $\\vec F\\cdot\\vec n$ is the constant $a$.' },
            { tex: '\\iint_S \\vec F\\cdot\\vec n\\,dS = a\\cdot 4\\pi a^2 = 4\\pi a^3', why: 'A constant times the area. For $a = 2$ this is $32\\pi$.' },
            { tex: '\\vec E = \\frac{\\langle x, y, z \\rangle}{(x^2 + y^2 + z^2)^{3/2}}:\\quad \\vec E\\cdot\\vec n = \\frac{a^2/a}{a^3} = \\frac{1}{a^2}', why: 'An inverse-square field: it points outward with strength $\\frac{1}{|\\vec r|^2}$, like the field of a point charge or the pull of a point mass (reversed).' },
            { tex: '\\iint_S \\vec E\\cdot\\vec n\\,dS = \\frac{1}{a^2}\\cdot 4\\pi a^2 = 4\\pi', why: 'The $a^2$ from the area cancels the $\\frac{1}{a^2}$ from the field strength.' },
          ],
          result: 'The flux of an inverse-square field through a sphere around its source is $4\\pi$ **for every radius**.',
        },
        {
          type: 'p',
          text: 'That cancellation is the seed of Gauss\'s law. The electric field of a point charge $Q$ is $\\vec E = \\frac{Q}{4\\pi\\varepsilon_0}\\frac{\\vec r}{|\\vec r|^3}$, so its flux through any sphere around the charge is $\\frac{Q}{\\varepsilon_0}$; a [[phys-gravitational-field|gravitational field]] has flux $-4\\pi GM$ through any sphere around a mass $M$. Field lines that leave the source are neither created nor destroyed on the way out, so every sphere catches all of them. The divergence theorem will show the radius, and even the shape, does not matter.',
        },
        {
          type: 'code',
          title: 'sphere_flux.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdio>
#include <functional>
#include <numbers>

struct Vec3 { double x, y, z; };
double dot(Vec3 a, Vec3 b) { return a.x * b.x + a.y * b.y + a.z * b.z; }
using Field = std::function<Vec3(Vec3)>;

// Outward flux of F through the sphere of radius a centered at the origin.
// r(phi, theta) = a <sin phi cos theta, sin phi sin theta, cos phi>,
// r_phi x r_theta = a^2 sin(phi) <unit radial vector>   (outward).
double sphereFlux(const Field& F, double a, int N) {
    const double pi = std::numbers::pi;
    const double dphi = pi / N, dtheta = 2 * pi / N;
    double flux = 0;
    for (int i = 0; i < N; ++i) {
        double phi = (i + 0.5) * dphi;                     // midpoint rule
        for (int j = 0; j < N; ++j) {
            double theta = (j + 0.5) * dtheta;
            Vec3 radial = {std::sin(phi) * std::cos(theta), std::sin(phi) * std::sin(theta), std::cos(phi)};
            Vec3 p = {a * radial.x, a * radial.y, a * radial.z};
            double dS = a * a * std::sin(phi) * dphi * dtheta;
            flux += dot(F(p), radial) * dS;                // F . n dS
        }
    }
    return flux;
}

int main() {
    Field swap = [](Vec3 p) { return Vec3{p.z, p.y, p.x}; };
    Field inverseSquare = [](Vec3 p) {                     // r / |r|^3, like gravity or a point charge
        double r3 = std::pow(dot(p, p), 1.5);
        return Vec3{p.x / r3, p.y / r3, p.z / r3};
    };
    std::printf("<z, y, x>, a = 1, N = 1000: %.4f   (exact 4pi/3 = %.4f)\\n",
                sphereFlux(swap, 1, 1000), 4 * std::numbers::pi / 3);
    for (double a : {1.0, 2.0, 5.0})
        std::printf("r/|r|^3,   a = %.0f, N = 1000: %.4f\\n", a, sphereFlux(inverseSquare, a, 1000));
    std::printf("4 pi = %.4f\\n", 4 * std::numbers::pi);
}`,
          output: `<z, y, x>, a = 1, N = 1000: 4.1888   (exact 4pi/3 = 4.1888)
r/|r|^3,   a = 1, N = 1000: 12.5664
r/|r|^3,   a = 2, N = 1000: 12.5664
r/|r|^3,   a = 5, N = 1000: 12.5664
4 pi = 12.5664`,
          annotations: [
            { lines: '13-28', text: 'A midpoint-rule flux integral over the $(\\phi, \\theta)$ rectangle: sample $\\vec F\\cdot\\vec n$ at the center of each cell and multiply by the cell\'s area $a^2\\sin\\phi\\,\\Delta\\phi\\,\\Delta\\theta$.' },
            { lines: 21, text: 'On a sphere centered at the origin, the outward unit normal is the unit radial vector.' },
            { lines: '32-35', text: 'The inverse-square field $\\frac{\\vec r}{|\\vec r|^3}$.' },
            { lines: '38-39', text: 'Radius $1$, $2$ or $5$: the flux is $4\\pi$ every time.' },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'order',
      prompt: 'Put the steps for computing the flux $\\iint_S \\vec F\\cdot d\\vec S$ through a parametrized surface in order.',
      lines: [
        'Parametrize $S$ by $\\vec r(u, v)$ over a parameter domain $D$',
        'Compute $\\vec r_u\\times\\vec r_v$ and check that it points along the required orientation (negate it if not)',
        'Form the integrand $\\vec F(\\vec r(u, v))\\cdot(\\vec r_u\\times\\vec r_v)$',
        'Integrate the integrand over $D$',
      ],
      distractors: ['Divide $\\vec r_u\\times\\vec r_v$ by its length $|\\vec r_u\\times\\vec r_v|$ before dotting with $\\vec F$'],
      explanation: 'You need the parametrization before you can differentiate, and the cross product before you can form the integrand. The distractor would compute $\\vec F\\cdot\\vec n$ but then you would have to multiply by $dS = |\\vec r_u\\times\\vec r_v|\\,dA$ again; using $d\\vec S = (\\vec r_u\\times\\vec r_v)\\,dA$ directly skips the square root entirely.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'error',
      prompt: 'A student computes the upward flux of $\\vec F = \\langle 0, 0, z \\rangle$ through the paraboloid $z = 4 - x^2 - y^2$, $z \\ge 0$. Tap the first line that is wrong.',
      lines: [
        'Upward normal: $\\langle -g_x, -g_y, 1 \\rangle = \\langle 2x, 2y, 1 \\rangle$.',
        '$\\vec F\\cdot\\langle 2x, 2y, 1 \\rangle = z$.',
        'On $S$, $z = 4 - x^2 - y^2 = 4 - r^2$, over the disk $r \\le 2$.',
        'Flux $= \\int_0^{2\\pi}\\int_0^2 (4 - r^2)\\,dr\\,d\\theta = 2\\pi\\left(8 - \\frac{8}{3}\\right) = \\frac{32\\pi}{3}$.',
      ],
      errorLines: [4],
      explanation: 'Line 4 converts to polar coordinates but drops the factor $r$ in $dA = r\\,dr\\,d\\theta$. Correctly, $\\int_0^{2\\pi}\\int_0^2 (4 - r^2)\\,r\\,dr\\,d\\theta = 2\\pi\\left( 8 - 4 \\right) = 8\\pi$. Lines 1–3 are right: the normal is $\\langle 2x, 2y, 1 \\rangle$, only its $\\mathbf{k}$-component meets $\\langle 0, 0, z \\rangle$, and $z$ is replaced by $g$ before integrating.',
    },
  ],
  takeaways: [
    'Scalar surface integral: $\\iint_S f\\,dS = \\iint_D f(\\vec r(u, v))\\,|\\vec r_u\\times\\vec r_v|\\,dA$. It gives mass, centroids and averages over shells, and does not depend on orientation.',
    'An orientation is a continuous choice of unit normal. Closed surfaces are oriented outward; graphs usually upward with $\\langle -g_x, -g_y, 1 \\rangle$. The Möbius strip has no orientation.',
    'Flux: $\\iint_S \\vec F\\cdot d\\vec S = \\iint_S \\vec F\\cdot\\vec n\\,dS = \\iint_D \\vec F(\\vec r)\\cdot(\\vec r_u\\times\\vec r_v)\\,dA$; no square root, and reversing the orientation negates it.',
    'Upward flux through $z = g(x, y)$: $\\iint_D (-P g_x - Q g_y + R)\\,dA$, with $z = g$ substituted.',
    'On a sphere of radius $a$ centered at the origin, $\\vec n = \\vec r/a$. An inverse-square field has flux $4\\pi$ through every such sphere, the heart of Gauss\'s law.',
  ],
  reading: [
    {
      title: 'OpenStax Calculus Volume 3 — Surface Integrals (section 6.6)',
      url: 'https://openstax.org/details/books/calculus-volume-3',
      source: 'openstax',
      note: 'Section 6.6 covers scalar surface integrals, orientation and flux, with mass-flow and heat-flow examples.',
    },
    {
      title: "Paul's Online Notes — Calculus III",
      url: 'https://tutorial.math.lamar.edu/Classes/CalcIII/CalcIII.aspx',
      source: 'other',
      note: 'The "Surface Integrals" and "Surface Integrals of Vector Fields" pages work through flux over closed surfaces made of several pieces.',
    },
    {
      title: 'Wikipedia — Möbius strip',
      url: 'https://en.wikipedia.org/wiki/M%C3%B6bius_strip',
      source: 'wikipedia',
      note: 'The classic non-orientable surface: its parametrization, history and appearances in art and engineering.',
    },
    {
      title: 'MIT OCW 18.02SC Multivariable Calculus',
      url: 'https://ocw.mit.edu/courses/18-02sc-multivariable-calculus-fall-2010/',
      source: 'other',
      note: 'Unit 4 (Part B) develops flux in space with lecture videos and practice problems, building toward the divergence theorem.',
    },
  ],
};
