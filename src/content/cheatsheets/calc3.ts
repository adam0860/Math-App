import type { CheatSheet } from '../types';

export const calc3CheatSheets: CheatSheet[] = [
  // ------------------------------------------------------------------ 1
  {
    id: 'calc3-vectors-lines-planes',
    title: 'Vectors, Lines and Planes',
    course: 'calc3',
    icon: '🧊',
    description: 'Distance and spheres in space, dot and cross products, projections, the triple product, equations of lines and planes, intersections, angles and distances.',
    sections: [
      {
        title: 'Points and vectors in space',
        items: [
          { label: '[[distance-formula|Distance]] and midpoint', tex: '\\begin{aligned} |P_1P_2| &= \\sqrt{\\Delta x^2 + \\Delta y^2 + \\Delta z^2} \\\\ M &= \\left(\\tfrac{x_1 + x_2}{2}, \\tfrac{y_1 + y_2}{2}, \\tfrac{z_1 + z_2}{2}\\right) \\end{aligned}' },
          { label: '[[calc3-sphere-equation|Sphere]]', tex: '(x - h)^2 + (y - k)^2 + (z - l)^2 = r^2', text: 'Complete the square to find the center and radius; a negative right side means no points.' },
          { label: 'Vector, length, unit vector', tex: '\\begin{aligned} \\overrightarrow{PQ} &= \\langle x_2 - x_1, y_2 - y_1, z_2 - z_1 \\rangle \\\\ |\\vec{v}| &= \\sqrt{v_1^2 + v_2^2 + v_3^2}, \\quad \\hat{v} = \\frac{\\vec{v}}{|\\vec{v}|} \\end{aligned}' },
        ],
      },
      {
        title: 'Dot product and projections',
        items: [
          { label: '[[dot-product|Dot product]]', tex: '\\vec{a} \\cdot \\vec{b} = a_1b_1 + a_2b_2 + a_3b_3 = |\\vec{a}|\\,|\\vec{b}|\\cos\\theta', text: '$\\vec{a} \\cdot \\vec{b} = 0 \\iff$ [[orthogonal]]. Positive: acute angle; negative: obtuse.' },
          { label: 'Angle between vectors', tex: '\\theta = \\arccos\\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{a}|\\,|\\vec{b}|} \\in [0, \\pi]' },
          { label: 'Scalar and [[vector-projection|vector projection]] of $\\vec{a}$ onto $\\vec{b}$', tex: '\\operatorname{comp}_{\\vec{b}}\\vec{a} = \\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{b}|}, \\qquad \\operatorname{proj}_{\\vec{b}}\\vec{a} = \\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{b}|^2}\\,\\vec{b}' },
          { label: 'Work by a constant force', tex: 'W = \\vec{F} \\cdot \\vec{D} = |\\vec{F}|\\,|\\vec{D}|\\cos\\theta' },
          { label: 'Slide and reflect off a wall (unit normal $\\hat{n}$)', code: 'Vec3 slide   = v - dot(v, n) * n;      // remove the into-wall part\nVec3 reflect = v - 2 * dot(v, n) * n;  // bounce', lang: 'cpp' },
        ],
      },
      {
        title: 'Cross product and triple product',
        items: [
          { label: '[[cross-product|Cross product]]', tex: '\\begin{aligned} \\vec{a} \\times \\vec{b} &= \\begin{vmatrix} \\mathbf{i} & \\mathbf{j} & \\mathbf{k} \\\\ a_1 & a_2 & a_3 \\\\ b_1 & b_2 & b_3 \\end{vmatrix} \\\\ &= \\langle a_2b_3 - a_3b_2,\\ a_3b_1 - a_1b_3,\\ a_1b_2 - a_2b_1 \\rangle \\end{aligned}' },
          { label: 'Length = parallelogram area', tex: '|\\vec{a} \\times \\vec{b}| = |\\vec{a}|\\,|\\vec{b}|\\sin\\theta = \\text{area}', text: 'Perpendicular to both ([[right-hand-rule]]); $\\vec{b} \\times \\vec{a} = -\\vec{a} \\times \\vec{b}$; zero exactly when the vectors are parallel; not associative. Triangle $PQR$ has area $\\frac{1}{2}|\\overrightarrow{PQ} \\times \\overrightarrow{PR}|$.' },
          { label: 'Unit vectors', tex: '\\mathbf{i} \\times \\mathbf{j} = \\mathbf{k}, \\quad \\mathbf{j} \\times \\mathbf{k} = \\mathbf{i}, \\quad \\mathbf{k} \\times \\mathbf{i} = \\mathbf{j}' },
          { label: '[[la-scalar-triple-product|Scalar triple product]]', tex: '\\vec{a} \\cdot (\\vec{b} \\times \\vec{c}) = \\det\\begin{bmatrix} a_1 & a_2 & a_3 \\\\ b_1 & b_2 & b_3 \\\\ c_1 & c_2 & c_3 \\end{bmatrix}', text: 'Its absolute value is the volume of the parallelepiped; it is $0$ exactly when the vectors are coplanar.' },
          { label: 'Face normal, lighting, culling', code: 'Vec3 n = normalize(cross(B - A, C - A)); // CCW winding -> outward\nfloat diffuse = std::max(0.0f, dot(n, toLight));\nbool backFacing = dot(n, eye - A) <= 0;', lang: 'cpp' },
        ],
      },
      {
        title: 'Lines',
        items: [
          { label: 'Vector and parametric form', tex: '\\begin{aligned} &\\vec{r}(t) = \\vec{r}_0 + t\\vec{v} \\\\ &x = x_0 + at,\\ y = y_0 + bt,\\ z = z_0 + ct \\end{aligned}', text: 'Point $(x_0, y_0, z_0)$, [[calc3-direction-vector|direction]] $\\vec{v} = \\langle a, b, c \\rangle$. A ray uses $t \\ge 0$.' },
          { label: '[[calc3-symmetric-equations|Symmetric equations]]', tex: '\\frac{x - x_0}{a} = \\frac{y - y_0}{b} = \\frac{z - z_0}{c}' },
          { label: 'Two lines', text: 'Parallel if the directions are multiples. Otherwise solve $\\vec{r}_1(t) = \\vec{r}_2(s)$ (separate parameters): a solution means they intersect, none means [[calc3-skew-lines|skew]].' },
        ],
      },
      {
        title: 'Planes',
        items: [
          { label: 'Point and [[calc3-normal-vector|normal]] $\\langle a, b, c \\rangle$', tex: '\\begin{aligned} &a(x - x_0) + b(y - y_0) + c(z - z_0) = 0 \\\\ &\\iff ax + by + cz = d \\end{aligned}' },
          { label: 'Through three points', tex: '\\vec{n} = \\overrightarrow{PQ} \\times \\overrightarrow{PR}' },
          { label: 'Line meets plane', text: 'Substitute the parametric equations into $ax + by + cz = d$ and solve for $t$.' },
          { label: 'Angle between planes; line of intersection', tex: '\\cos\\theta = \\frac{|\\vec{n}_1 \\cdot \\vec{n}_2|}{|\\vec{n}_1|\\,|\\vec{n}_2|}, \\qquad \\vec{v} = \\vec{n}_1 \\times \\vec{n}_2' },
        ],
      },
      {
        title: 'Distances',
        items: [
          { label: 'Point $(x_1, y_1, z_1)$ to plane', tex: 'D = \\frac{|ax_1 + by_1 + cz_1 - d|}{\\sqrt{a^2 + b^2 + c^2}}', text: 'Without the absolute value: the signed distance (which side of the plane), used for frustum culling and the plane SDF.' },
          { label: 'Parallel planes $ax + by + cz = d_1$, $= d_2$', tex: 'D = \\frac{|d_1 - d_2|}{\\sqrt{a^2 + b^2 + c^2}}' },
          { label: 'Skew lines', tex: 'D = \\frac{|\\overrightarrow{P_1P_2} \\cdot (\\vec{v}_1 \\times \\vec{v}_2)|}{|\\vec{v}_1 \\times \\vec{v}_2|}' },
          { label: 'Point $Q$ to the line through $P$ with direction $\\vec{v}$', tex: 'D = \\frac{|\\overrightarrow{PQ} \\times \\vec{v}|}{|\\vec{v}|}' },
        ],
      },
    ],
  },
  // ------------------------------------------------------------------ 2
  {
    id: 'calc3-surfaces-coordinates',
    title: 'Surfaces and Coordinate Systems',
    course: 'calc3',
    icon: '🥚',
    description: 'Cylinders, traces and the six quadric surfaces; cylindrical and spherical coordinates with their conversions and coordinate surfaces.',
    sections: [
      {
        title: 'Reading an equation',
        items: [
          { label: '[[calc3-cylinder|Cylinder]]', text: 'One variable missing: the curve in the other two variables is extruded along the missing axis. $x^2 + y^2 = 1$ is a tube around the $z$-axis; $z = y^2$ is a parabolic cylinder.' },
          { label: '[[calc3-trace|Traces]]', text: 'Slice with $x = k$, $y = k$, $z = k$ and identify the plane curves. Horizontal traces of $z = f(x, y)$ are its level curves.' },
          { label: 'Standard form', text: 'Complete the square in every variable that appears squared and to the first power; the shifts give the center or vertex. The variable with the odd sign out (or the linear one) is the axis.' },
        ],
      },
      {
        title: 'Quadric surfaces',
        items: [
          { label: '[[calc3-ellipsoid|Ellipsoid]]', tex: '\\frac{x^2}{a^2} + \\frac{y^2}{b^2} + \\frac{z^2}{c^2} = 1', text: 'All traces ellipses.' },
          { label: '[[calc3-elliptic-paraboloid|Elliptic paraboloid]]', tex: '\\frac{z}{c} = \\frac{x^2}{a^2} + \\frac{y^2}{b^2}', text: 'Horizontal traces ellipses, vertical traces parabolas: a bowl.' },
          { label: '[[calc3-hyperbolic-paraboloid|Hyperbolic paraboloid]]', tex: '\\frac{z}{c} = \\frac{x^2}{a^2} - \\frac{y^2}{b^2}', text: 'Horizontal traces hyperbolas, vertical traces parabolas opening opposite ways: a saddle.' },
          { label: '[[calc3-elliptic-cone|Cone]]', tex: '\\frac{z^2}{c^2} = \\frac{x^2}{a^2} + \\frac{y^2}{b^2}' },
          { label: '[[calc3-hyperboloid-one-sheet|Hyperboloid of one sheet]]', tex: '\\frac{x^2}{a^2} + \\frac{y^2}{b^2} - \\frac{z^2}{c^2} = 1', text: 'One minus sign: one connected waisted tube; contains straight lines.' },
          { label: '[[calc3-hyperboloid-two-sheets|Hyperboloid of two sheets]]', tex: '-\\frac{x^2}{a^2} - \\frac{y^2}{b^2} + \\frac{z^2}{c^2} = 1', text: 'Two minus signs: two bowls, nothing for $|z| < c$.' },
        ],
      },
      {
        title: 'Cylindrical coordinates $(r, \\theta, z)$',
        items: [
          { label: '[[calc3-cylindrical-coordinates|Conversions]]', tex: '\\begin{aligned} &x = r\\cos\\theta,\\ y = r\\sin\\theta,\\ z = z \\\\ &r^2 = x^2 + y^2,\\ \\tan\\theta = \\frac{y}{x} \\end{aligned}' },
          { label: 'Coordinate surfaces', text: '$r = c$: cylinder about the $z$-axis. $\\theta = c$: vertical half-plane. $z = c$: horizontal plane.' },
          { label: 'Pick the right quadrant', code: 'double theta = std::atan2(y, x);       // in (-pi, pi]\nif (theta < 0) theta += 2 * PI;        // in [0, 2pi)', lang: 'cpp' },
        ],
      },
      {
        title: 'Spherical coordinates $(\\rho, \\theta, \\phi)$',
        items: [
          { label: '[[calc3-spherical-coordinates|Conversions]]', tex: '\\begin{aligned} &x = \\rho\\sin\\phi\\cos\\theta,\\ y = \\rho\\sin\\phi\\sin\\theta \\\\ &z = \\rho\\cos\\phi,\\ r = \\rho\\sin\\phi \\\\ &\\rho^2 = x^2 + y^2 + z^2,\\ \\cos\\phi = \\frac{z}{\\rho} \\end{aligned}', text: '$\\rho \\ge 0$, $0 \\le \\phi \\le \\pi$ measured from the positive $z$-axis. Physics texts swap the names $\\theta$ and $\\phi$.' },
          { label: 'Coordinate surfaces', text: '$\\rho = c$: sphere. $\\phi = c$: one-nappe cone (the $xy$-plane at $\\phi = \\frac{\\pi}{2}$). $\\theta = c$: half-plane.' },
          { label: 'Useful conversions', tex: '\\begin{aligned} \\rho = 2a\\cos\\phi &\\iff x^2 + y^2 + (z - a)^2 = a^2 \\\\ r = 2a\\sin\\theta &\\iff x^2 + (y - a)^2 = a^2 \\end{aligned}' },
          { label: 'Orbit camera (pitch = elevation $= \\frac{\\pi}{2} - \\phi$)', code: 'Vec3 cam = target + dist * Vec3{std::cos(pitch) * std::cos(yaw),\n                                std::cos(pitch) * std::sin(yaw),\n                                std::sin(pitch)};   // z up', lang: 'cpp' },
        ],
      },
    ],
  },
  // ------------------------------------------------------------------ 3
  {
    id: 'calc3-vector-functions-curvature',
    title: 'Vector Functions and Curvature',
    course: 'calc3',
    icon: '🌀',
    description: 'Space curves and their derivatives, arc length, curvature, the TNB frame and torsion, and velocity and acceleration with tangential and normal components.',
    sections: [
      {
        title: 'Calculus of vector functions',
        items: [
          { label: 'Componentwise', tex: '\\begin{aligned} \\vec{r}(t) &= \\langle f(t), g(t), h(t) \\rangle \\\\ \\vec{r}\\,\'(t) &= \\langle f\'(t), g\'(t), h\'(t) \\rangle \\\\ \\textstyle\\int \\vec{r}\\,dt &= \\left\\langle \\textstyle\\int f, \\int g, \\int h \\right\\rangle \\end{aligned}', text: 'Limits, derivatives and integrals act on each component. $\\vec{r}\\,\'(t)$ is tangent to the curve.' },
          { label: 'Product rules', tex: '\\begin{aligned} (\\vec{u} \\cdot \\vec{v})\' &= \\vec{u}\\,\' \\cdot \\vec{v} + \\vec{u} \\cdot \\vec{v}\\,\' \\\\ (\\vec{u} \\times \\vec{v})\' &= \\vec{u}\\,\' \\times \\vec{v} + \\vec{u} \\times \\vec{v}\\,\' \\end{aligned}', text: 'Keep the order in the cross product. If $|\\vec{r}(t)|$ is constant then $\\vec{r} \\cdot \\vec{r}\\,\' = 0$.' },
          { label: '[[calc3-unit-tangent|Unit tangent]]', tex: '\\vec{T}(t) = \\frac{\\vec{r}\\,\'(t)}{|\\vec{r}\\,\'(t)|}' },
        ],
      },
      {
        title: 'Arc length',
        items: [
          { label: '[[calc3-arc-length-space-curve|Length of a space curve]]', tex: '\\begin{aligned} L &= \\int_a^b |\\vec{r}\\,\'(t)|\\,dt \\\\ &= \\int_a^b \\sqrt{f\'(t)^2 + g\'(t)^2 + h\'(t)^2}\\,dt \\end{aligned}' },
          { label: 'Arc-length function', tex: 's(t) = \\int_a^t |\\vec{r}\\,\'(u)|\\,du, \\qquad \\frac{ds}{dt} = |\\vec{r}\\,\'(t)|', text: 'Reparametrizing by $s$ gives unit speed — what constant-speed camera rails and splines want.' },
        ],
      },
      {
        title: 'Curvature and the TNB frame',
        items: [
          { label: '[[calc3-curvature|Curvature]]', tex: '\\kappa = \\left|\\frac{d\\vec{T}}{ds}\\right| = \\frac{|\\vec{T}\\,\'(t)|}{|\\vec{r}\\,\'(t)|} = \\frac{|\\vec{r}\\,\'(t) \\times \\vec{r}\\,\'\'(t)|}{|\\vec{r}\\,\'(t)|^3}', text: 'A circle of radius $R$ has $\\kappa = \\frac{1}{R}$; the osculating circle has radius $\\frac{1}{\\kappa}$.' },
          { label: 'Plane curves', tex: '\\kappa = \\frac{|f\'\'(x)|}{\\left(1 + f\'(x)^2\\right)^{3/2}}, \\qquad \\kappa = \\frac{|x\'y\'\' - y\'x\'\'|}{\\left(x\'^2 + y\'^2\\right)^{3/2}}' },
          { label: '[[calc3-tnb-frame|Normal and binormal]]', tex: '\\vec{N} = \\frac{\\vec{T}\\,\'(t)}{|\\vec{T}\\,\'(t)|}, \\qquad \\vec{B} = \\vec{T} \\times \\vec{N}', text: '$\\vec{T}$, $\\vec{N}$, $\\vec{B}$ are mutually orthogonal unit vectors: a moving right-handed frame (roller-coaster cameras, swept tubes).' },
          { label: '[[calc3-torsion|Torsion]] and Frenet–Serret', tex: '\\begin{aligned} &\\tau = \\frac{(\\vec{r}\\,\' \\times \\vec{r}\\,\'\') \\cdot \\vec{r}\\,\'\'\'}{|\\vec{r}\\,\' \\times \\vec{r}\\,\'\'|^2} \\\\ &\\frac{d\\vec{T}}{ds} = \\kappa\\vec{N}, \\quad \\frac{d\\vec{B}}{ds} = -\\tau\\vec{N} \\\\ &\\frac{d\\vec{N}}{ds} = -\\kappa\\vec{T} + \\tau\\vec{B} \\end{aligned}' },
        ],
      },
      {
        title: 'Motion in space',
        items: [
          { label: 'Velocity, speed, acceleration', tex: '\\vec{v} = \\vec{r}\\,\', \\quad |\\vec{v}| = \\frac{ds}{dt}, \\quad \\vec{a} = \\vec{v}\\,\' = \\vec{r}\\,\'\'' },
          { label: '[[calc3-acceleration-components|Tangential and normal components]]', tex: '\\begin{aligned} &\\vec{a} = \\frac{d|\\vec{v}|}{dt}\\vec{T} + \\kappa|\\vec{v}|^2\\vec{N} \\\\ &a_T = \\frac{\\vec{r}\\,\' \\cdot \\vec{r}\\,\'\'}{|\\vec{r}\\,\'|}, \\quad a_N = \\frac{|\\vec{r}\\,\' \\times \\vec{r}\\,\'\'|}{|\\vec{r}\\,\'|} \\end{aligned}', text: '$a_T$ changes the speed; $a_N$ turns the path. $a_T^2 + a_N^2 = |\\vec{a}|^2$.' },
          { label: 'Projectile (no drag, launch speed $v_0$ at angle $\\alpha$)', tex: '\\vec{r}(t) = \\left\\langle (v_0\\cos\\alpha)\\,t,\\ (v_0\\sin\\alpha)\\,t - \\tfrac{1}{2}gt^2 \\right\\rangle', text: 'Range on level ground $\\frac{v_0^2\\sin 2\\alpha}{g}$, largest at $\\alpha = 45^\\circ$.' },
          { label: 'Newton\'s second law', tex: '\\vec{F}(t) = m\\,\\vec{a}(t)', text: 'Integrate $\\vec{a}$ twice with the initial velocity and position to recover the path; a game integrator does this numerically each frame.' },
        ],
      },
    ],
  },
  // ------------------------------------------------------------------ 4
  {
    id: 'calc3-partials-gradient',
    title: 'Partial Derivatives, Gradient and Chain Rule',
    course: 'calc3',
    icon: '🧭',
    description: 'Limits in two variables, partial derivatives and Clairaut, tangent planes and differentials, the multivariable chain rule and implicit differentiation, and directional derivatives with the gradient.',
    sections: [
      {
        title: 'Limits and partial derivatives',
        items: [
          { label: '[[calc3-two-path-test|Two-path test]]', text: 'If $f(x, y)$ approaches different values along two paths to $(a, b)$, the limit does not exist. Agreement along many paths proves nothing; use polar coordinates or squeezing to prove a limit.' },
          { label: '[[calc3-partial-derivative|Partial derivatives]]', tex: '\\begin{aligned} f_x(a, b) &= \\lim_{h \\to 0} \\frac{f(a + h, b) - f(a, b)}{h} \\\\ f_y(a, b) &= \\lim_{h \\to 0} \\frac{f(a, b + h) - f(a, b)}{h} \\end{aligned}', text: 'Hold the other variables constant. $f_x$ is the slope of the slice $y = b$.' },
          { label: '[[calc3-clairauts-theorem|Clairaut\'s theorem]]', tex: 'f_{xy}(a, b) = f_{yx}(a, b)', text: 'Holds when $f_{xy}$ and $f_{yx}$ are continuous near $(a, b)$; it can fail without continuity.' },
          { label: 'Central differences', code: 'double fx = (f(x + h, y) - f(x - h, y)) / (2 * h);  // error O(h^2)\ndouble fy = (f(x, y + h) - f(x, y - h)) / (2 * h);', lang: 'cpp' },
        ],
      },
      {
        title: 'Tangent planes and linearization',
        items: [
          { label: '[[calc3-tangent-plane|Tangent plane]] to $z = f(x, y)$', tex: '\\begin{aligned} z = f(a, b) &+ f_x(a, b)(x - a) \\\\ &+ f_y(a, b)(y - b) \\end{aligned}', text: 'The right side is the [[linearization]] $L(x, y)$; $f \\approx L$ near $(a, b)$.' },
          { label: '[[calc3-total-differential|Total differential]]', tex: 'dz = f_x\\,dx + f_y\\,dy, \\qquad \\Delta z \\approx dz' },
          { label: 'Differentiability', text: 'If $f_x$ and $f_y$ exist near $(a, b)$ and are continuous at $(a, b)$, then $f$ is differentiable there (and so continuous). Existence of the partials alone is not enough.' },
          { label: 'Heightmap terrain normal', tex: '\\vec{n} = \\langle -f_x, -f_y, 1 \\rangle', text: 'Upward normal of $z = f(x, y)$, from $\\vec{r}_x \\times \\vec{r}_y$ with $\\vec{r} = \\langle x, y, f(x, y) \\rangle$.' },
        ],
      },
      {
        title: 'Chain rule and implicit differentiation',
        items: [
          { label: '[[calc3-multivariable-chain-rule|Chain rule]], one parameter', tex: '\\frac{dz}{dt} = \\frac{\\partial z}{\\partial x}\\frac{dx}{dt} + \\frac{\\partial z}{\\partial y}\\frac{dy}{dt} = \\nabla f \\cdot \\vec{r}\\,\'(t)' },
          { label: 'Chain rule, two parameters', tex: '\\frac{\\partial z}{\\partial s} = \\frac{\\partial z}{\\partial x}\\frac{\\partial x}{\\partial s} + \\frac{\\partial z}{\\partial y}\\frac{\\partial y}{\\partial s}', text: 'One term per path from $z$ to $s$ in the tree diagram.' },
          { label: 'Implicit differentiation', tex: '\\begin{aligned} &F(x, y) = 0: \\ \\frac{dy}{dx} = -\\frac{F_x}{F_y} \\\\ &F(x, y, z) = 0: \\ \\frac{\\partial z}{\\partial x} = -\\frac{F_x}{F_z},\\ \\frac{\\partial z}{\\partial y} = -\\frac{F_y}{F_z} \\end{aligned}' },
        ],
      },
      {
        title: 'Gradient and directional derivatives',
        items: [
          { label: '[[calc3-gradient|Gradient]]', tex: '\\nabla f = \\langle f_x, f_y, f_z \\rangle' },
          { label: '[[calc3-directional-derivative|Directional derivative]] ($\\vec{u}$ a unit vector)', tex: 'D_{\\vec{u}} f = \\nabla f \\cdot \\vec{u} = |\\nabla f|\\cos\\theta', text: 'Normalize the direction first.' },
          { label: 'Steepest ascent', text: '$f$ increases fastest in the direction of $\\nabla f$, at rate $|\\nabla f|$; fastest decrease along $-\\nabla f$; zero rate perpendicular to $\\nabla f$.' },
          { label: 'Normal to level sets', text: '$\\nabla f$ is perpendicular to the level curve or level surface through the point. For an SDF, $\\nabla d$ is the surface normal.' },
          { label: 'Tangent plane to $F(x, y, z) = k$ at $P$', tex: '\\begin{aligned} &F_x(P)(x - x_0) + F_y(P)(y - y_0) \\\\ &\\quad + F_z(P)(z - z_0) = 0 \\end{aligned}', text: 'Normal line: $\\vec{r}(t) = P + t\\nabla F(P)$.' },
        ],
      },
    ],
  },
  // ------------------------------------------------------------------ 5
  {
    id: 'calc3-optimization',
    title: 'Optimization and Lagrange Multipliers',
    course: 'calc3',
    icon: '⛰️',
    description: 'Critical points and the second-derivative test with the Hessian, absolute extrema on closed bounded regions, Lagrange multipliers, and gradient descent, momentum and Newton\'s method.',
    sections: [
      {
        title: 'Local extrema',
        items: [
          { label: '[[calc3-critical-point|Critical points]]', tex: '\\nabla f(a, b) = \\vec{0} \\ \\text{ or does not exist}', text: 'Every local max or min of a differentiable $f$ at an interior point is a critical point (not conversely).' },
          { label: '[[calc3-hessian|Hessian]] and discriminant', tex: '\\begin{aligned} H &= \\begin{bmatrix} f_{xx} & f_{xy} \\\\ f_{yx} & f_{yy} \\end{bmatrix} \\\\ D &= \\det H = f_{xx}f_{yy} - f_{xy}^2 \\end{aligned}' },
          { label: '[[calc3-second-derivative-test|Second derivative test]] (at a critical point)', text: '$D > 0$, $f_{xx} > 0$: local minimum. $D > 0$, $f_{xx} < 0$: local maximum. $D < 0$: [[calc3-saddle-point|saddle point]]. $D = 0$: no conclusion.' },
          { label: 'Eigenvalue view', text: 'Both eigenvalues of $H$ positive: min; both negative: max; opposite signs: saddle. Saddles vastly outnumber minima in high-dimensional loss landscapes.' },
        ],
      },
      {
        title: 'Absolute extrema',
        items: [
          { label: 'Extreme value theorem', text: 'A continuous $f$ on a closed and bounded set $D$ attains an absolute max and min.' },
          { label: 'Closed-interval method in 2D', text: '(1) Values at critical points inside $D$. (2) Extreme values on the boundary (parametrize it, or use Lagrange). (3) The largest is the absolute max, the smallest the absolute min.' },
        ],
      },
      {
        title: 'Lagrange multipliers',
        items: [
          { label: '[[calc3-lagrange-multiplier|One constraint]] $g = k$', tex: '\\nabla f = \\lambda\\nabla g, \\qquad g(x, y, z) = k', text: 'At a constrained extremum the level set of $f$ is tangent to the constraint (needs $\\nabla g \\ne \\vec{0}$). Solve, then compare $f$ at all solutions.' },
          { label: 'Two constraints', tex: '\\nabla f = \\lambda\\nabla g + \\mu\\nabla h, \\qquad g = k,\\ h = c' },
          { label: 'Meaning of $\\lambda$', tex: '\\lambda = \\frac{dM}{dk}', text: 'The rate at which the optimal value $M$ changes as the constraint level $k$ is relaxed (a "shadow price").' },
        ],
      },
      {
        title: 'Numerical optimization',
        items: [
          { label: '[[calc3-gradient-descent|Gradient descent]]', tex: '\\vec{x}_{k+1} = \\vec{x}_k - \\eta\\,\\nabla f(\\vec{x}_k)', text: 'Learning rate $\\eta$: too small is slow, too large overshoots and diverges.' },
          { label: 'Momentum', tex: '\\begin{aligned} \\vec{v}_{k+1} &= \\beta\\vec{v}_k - \\eta\\nabla f(\\vec{x}_k) \\\\ \\vec{x}_{k+1} &= \\vec{x}_k + \\vec{v}_{k+1} \\end{aligned}', text: 'Typical $\\beta \\approx 0.9$; damps zig-zagging in narrow valleys.' },
          { label: 'Newton\'s method', tex: '\\vec{x}_{k+1} = \\vec{x}_k - H(\\vec{x}_k)^{-1}\\nabla f(\\vec{x}_k)', text: 'Uses curvature; converges quadratically near a nondegenerate critical point, but can head for a saddle or maximum.' },
          { label: 'One descent step', code: 'for (int k = 0; k < steps; ++k) {\n    Vec2 g = grad(p);\n    p = p - eta * g;\n}', lang: 'cpp' },
        ],
      },
    ],
  },
  // ------------------------------------------------------------------ 6
  {
    id: 'calc3-multiple-integrals',
    title: 'Double and Triple Integrals',
    course: 'calc3',
    icon: '🧱',
    description: 'Iterated integrals and Fubini, general regions and reversing the order, polar, cylindrical and spherical coordinates, applications to mass and probability, surface area, and the Jacobian for a change of variables.',
    sections: [
      {
        title: 'Double integrals',
        items: [
          { label: '[[calc3-fubinis-theorem|Fubini]] on a rectangle', tex: '\\begin{aligned} \\iint_R f\\,dA &= \\int_a^b \\!\\! \\int_c^d f(x, y)\\,dy\\,dx \\\\ &= \\int_c^d \\!\\! \\int_a^b f(x, y)\\,dx\\,dy \\end{aligned}', text: 'For $f$ continuous on $R = [a, b] \\times [c, d]$. Separable: $\\iint_R g(x)h(y)\\,dA = \\int_a^b g\\,dx \\int_c^d h\\,dy$.' },
          { label: '[[calc3-type-i-region|Type I and type II regions]]', tex: '\\int_a^b \\!\\! \\int_{g_1(x)}^{g_2(x)} f\\,dy\\,dx, \\qquad \\int_c^d \\!\\! \\int_{h_1(y)}^{h_2(y)} f\\,dx\\,dy', text: 'To reverse the order, sketch the region and re-describe it; the outer limits are always constants.' },
          { label: 'Polar coordinates', tex: '\\begin{aligned} &\\iint_D f\\,dA \\\\ &= \\int_\\alpha^\\beta \\!\\! \\int_{h_1(\\theta)}^{h_2(\\theta)} f(r\\cos\\theta, r\\sin\\theta)\\,r\\,dr\\,d\\theta \\end{aligned}', text: '$dA = r\\,dr\\,d\\theta$ — never forget the $r$.' },
          { label: 'Area and average value', tex: '\\begin{aligned} A(D) &= \\iint_D 1\\,dA \\\\ f_{\\text{avg}} &= \\frac{1}{A(D)}\\iint_D f\\,dA \\end{aligned}' },
          { label: 'Gaussian integral', tex: '\\begin{aligned} &\\iint_{\\mathbb{R}^2} e^{-(x^2 + y^2)}\\,dA = \\pi \\\\ &\\implies \\int_{-\\infty}^{\\infty} e^{-x^2}\\,dx = \\sqrt{\\pi} \\end{aligned}' },
        ],
      },
      {
        title: 'Applications',
        items: [
          { label: 'Mass and [[calc2-center-of-mass|center of mass]] of a lamina with density $\\rho(x, y)$', tex: '\\begin{aligned} &m = \\iint_D \\rho\\,dA \\\\ &\\bar{x} = \\frac{1}{m}\\iint_D x\\rho\\,dA, \\quad \\bar{y} = \\frac{1}{m}\\iint_D y\\rho\\,dA \\end{aligned}' },
          { label: '[[phys-moment-of-inertia|Moments of inertia]]', tex: '\\begin{aligned} &I_x = \\iint_D y^2\\rho\\,dA, \\quad I_y = \\iint_D x^2\\rho\\,dA \\\\ &I_0 = \\iint_D (x^2 + y^2)\\rho\\,dA = I_x + I_y \\end{aligned}' },
          { label: '[[stat-joint-distribution|Joint density]]', tex: '\\begin{aligned} &f \\ge 0, \\quad \\iint_{\\mathbb{R}^2} f\\,dA = 1 \\\\ &P\\big((X, Y) \\in D\\big) = \\iint_D f\\,dA \\end{aligned}' },
          { label: 'Surface area of $z = f(x, y)$ over $D$', tex: 'A = \\iint_D \\sqrt{1 + f_x^2 + f_y^2}\\,dA' },
          { label: 'Monte Carlo estimate', tex: '\\iint_R f\\,dA \\approx \\frac{A(R)}{N}\\sum_{i=1}^{N} f(P_i)', text: '$P_i$ uniform random points in $R$; error shrinks like $\\frac{1}{\\sqrt{N}}$ in any dimension.' },
        ],
      },
      {
        title: 'Triple integrals',
        items: [
          { label: 'Iterated form (type 1 solid)', tex: '\\iiint_E f\\,dV = \\iint_D \\left[\\int_{u_1(x, y)}^{u_2(x, y)} f(x, y, z)\\,dz\\right] dA', text: 'Volume: $V(E) = \\iiint_E 1\\,dV$. Mass and centers of mass work as in 2D with $dV$.' },
          { label: 'Cylindrical', tex: 'dV = r\\,dz\\,dr\\,d\\theta', text: 'Best for symmetry about an axis: cylinders, paraboloids, cones.' },
          { label: 'Spherical', tex: 'dV = \\rho^2\\sin\\phi\\,d\\rho\\,d\\theta\\,d\\phi', text: 'Best for balls, shells and cones from the origin. A ball of radius $a$: $\\int_0^{\\pi}\\!\\int_0^{2\\pi}\\!\\int_0^a \\rho^2\\sin\\phi\\,d\\rho\\,d\\theta\\,d\\phi = \\frac{4}{3}\\pi a^3$.' },
        ],
      },
      {
        title: 'Change of variables',
        items: [
          { label: '[[calc3-jacobian|Jacobian]]', tex: '\\frac{\\partial(x, y)}{\\partial(u, v)} = \\begin{vmatrix} x_u & x_v \\\\ y_u & y_v \\end{vmatrix} = x_u y_v - x_v y_u', text: 'Local area-scaling factor of the map $(u, v) \\mapsto (x, y)$. Also $\\frac{\\partial(x, y)}{\\partial(u, v)} = 1 \\Big/ \\frac{\\partial(u, v)}{\\partial(x, y)}$.' },
          { label: '[[calc3-change-of-variables-formula|Change-of-variables formula]]', tex: '\\begin{aligned} &\\iint_R f(x, y)\\,dA \\\\ &= \\iint_S f\\big(x(u, v), y(u, v)\\big)\\left|\\frac{\\partial(x, y)}{\\partial(u, v)}\\right| du\\,dv \\end{aligned}', text: 'Use the **absolute value**. In 3D the Jacobian is a $3 \\times 3$ determinant; polar gives $r$, spherical gives $\\rho^2\\sin\\phi$.' },
        ],
      },
    ],
  },
  // ------------------------------------------------------------------ 7
  {
    id: 'calc3-line-integrals',
    title: 'Vector Fields and Line Integrals',
    course: 'calc3',
    icon: '🌬️',
    description: 'Vector fields and gradient fields, line integrals of scalar functions and of vector fields, work, the fundamental theorem for line integrals, and tests for conservative fields.',
    sections: [
      {
        title: 'Vector fields',
        items: [
          { label: '[[calc3-vector-field|Vector field]]', tex: '\\vec{F}(x, y, z) = \\langle P, Q, R \\rangle', text: 'An arrow at every point: wind, fluid velocity, force, a crowd flow field. A gradient field is $\\vec{F} = \\nabla f$.' },
          { label: 'Inverse-square field', tex: '\\vec{F}(\\vec{x}) = -\\frac{c}{|\\vec{x}|^3}\\,\\vec{x}', text: 'Points toward the origin with magnitude $\\frac{c}{|\\vec{x}|^2}$: gravity ($c = GMm$), and the electric field of a point charge with the opposite sign.' },
        ],
      },
      {
        title: 'Line integrals',
        items: [
          { label: 'Scalar line integral', tex: '\\int_C f\\,ds = \\int_a^b f\\big(\\vec{r}(t)\\big)\\,|\\vec{r}\\,\'(t)|\\,dt', text: 'Mass of a wire with density $f$; independent of the orientation of $C$.' },
          { label: 'With respect to $x$, $y$, $z$', tex: '\\begin{aligned} &\\int_C P\\,dx + Q\\,dy + R\\,dz \\\\ &= \\int_a^b \\big(P\\,x\'(t) + Q\\,y\'(t) + R\\,z\'(t)\\big)\\,dt \\end{aligned}' },
          { label: 'Line integral of a vector field ([[work]])', tex: '\\begin{aligned} \\int_C \\vec{F} \\cdot d\\vec{r} &= \\int_a^b \\vec{F}\\big(\\vec{r}(t)\\big) \\cdot \\vec{r}\\,\'(t)\\,dt \\\\ &= \\int_C \\vec{F} \\cdot \\vec{T}\\,ds \\end{aligned}', text: 'Reversing the orientation changes the sign: $\\int_{-C} = -\\int_C$.' },
          { label: 'Flux across a plane curve', tex: '\\oint_C \\vec{F} \\cdot \\vec{n}\\,ds = \\oint_C P\\,dy - Q\\,dx', text: '$\\vec{n}$ the outward normal, $C$ counterclockwise.' },
          { label: 'By summation', code: 'double W = 0;\nfor (int i = 0; i < n; ++i) {\n    double t = a + (i + 0.5) * dt;       // midpoint rule\n    W += dot(F(r(t)), rprime(t)) * dt;\n}', lang: 'cpp' },
        ],
      },
      {
        title: 'Conservative fields',
        items: [
          { label: 'Fundamental theorem for line integrals', tex: '\\int_C \\nabla f \\cdot d\\vec{r} = f\\big(\\vec{r}(b)\\big) - f\\big(\\vec{r}(a)\\big)', text: 'Only the endpoints matter: the integral is path-independent and zero around every closed curve.' },
          { label: 'Equivalent conditions (open connected domain)', text: '$\\vec{F} = \\nabla f$ for some potential $f$ $\\iff$ $\\int_C \\vec{F} \\cdot d\\vec{r}$ is path-independent $\\iff$ $\\oint_C \\vec{F} \\cdot d\\vec{r} = 0$ for every closed $C$.' },
          { label: 'Test in the plane', tex: '\\frac{\\partial P}{\\partial y} = \\frac{\\partial Q}{\\partial x}', text: 'Necessary for $\\langle P, Q \\rangle$ to be conservative; sufficient on an open **simply connected** region with continuous partials. In space: $\\operatorname{curl}\\vec{F} = \\vec{0}$ on a simply connected domain.' },
          { label: 'The hole counterexample', tex: '\\begin{aligned} &\\vec{F} = \\left\\langle \\frac{-y}{x^2 + y^2}, \\frac{x}{x^2 + y^2} \\right\\rangle \\\\ &P_y = Q_x, \\ \\text{but } \\oint_{x^2 + y^2 = 1} \\vec{F} \\cdot d\\vec{r} = 2\\pi \\end{aligned}', text: 'The domain misses the origin, so it is not simply connected.' },
          { label: 'Finding a potential', text: 'Integrate $P$ with respect to $x$ (constant of integration $g(y, z)$), differentiate with respect to $y$ and match $Q$, then repeat for $z$ and $R$.' },
          { label: '[[phys-conservative-force|Conservative forces]] and [[phys-potential-energy|potential energy]]', tex: '\\vec{F} = -\\nabla U, \\qquad W_{A \\to B} = U(A) - U(B)', text: 'Physics puts a minus sign in the potential; mathematics writes $\\vec{F} = \\nabla f$ with $f = -U$.' },
        ],
      },
    ],
  },
  // ------------------------------------------------------------------ 8
  {
    id: 'calc3-vector-calculus-theorems',
    title: "Green's, Stokes' and Divergence Theorems",
    course: 'calc3',
    icon: '🔄',
    description: 'Curl and divergence, parametric surfaces and surface integrals, flux, and the three big theorems that relate integrals over a region to integrals over its boundary.',
    sections: [
      {
        title: 'Curl and divergence',
        items: [
          { label: '[[calc3-curl|Curl]]', tex: '\\begin{aligned} \\operatorname{curl}\\vec{F} &= \\nabla \\times \\vec{F} \\\\ &= \\left\\langle R_y - Q_z,\\ P_z - R_x,\\ Q_x - P_y \\right\\rangle \\end{aligned}', text: 'Local rotation: a paddle wheel spins fastest with its axis along the curl. In 2D the scalar curl is $Q_x - P_y$.' },
          { label: '[[calc3-divergence|Divergence]]', tex: '\\operatorname{div}\\vec{F} = \\nabla \\cdot \\vec{F} = P_x + Q_y + R_z', text: 'Local expansion (source $> 0$, sink $< 0$). Incompressible fluid velocity has $\\operatorname{div}\\vec{v} = 0$.' },
          { label: 'Identities', tex: '\\begin{aligned} &\\nabla \\times (\\nabla f) = \\vec{0}, \\qquad \\nabla \\cdot (\\nabla \\times \\vec{F}) = 0 \\\\ &\\nabla \\cdot \\nabla f = \\nabla^2 f = f_{xx} + f_{yy} + f_{zz} \\end{aligned}', text: 'Gradient fields are irrotational; curls are divergence-free, which is why curl noise makes believable incompressible flow.' },
        ],
      },
      {
        title: "Green's theorem",
        items: [
          { label: "[[calc3-greens-theorem|Circulation form]]", tex: '\\oint_C P\\,dx + Q\\,dy = \\iint_D \\left(\\frac{\\partial Q}{\\partial x} - \\frac{\\partial P}{\\partial y}\\right) dA', text: '$C$ a positively oriented (counterclockwise, region on the left), piecewise smooth, simple closed curve bounding $D$; $P$, $Q$ with continuous partials on an open region containing $D$.' },
          { label: 'Flux (normal) form', tex: '\\oint_C \\vec{F} \\cdot \\vec{n}\\,ds = \\iint_D \\left(\\frac{\\partial P}{\\partial x} + \\frac{\\partial Q}{\\partial y}\\right) dA' },
          { label: 'Area from the boundary', tex: 'A = \\oint_C x\\,dy = -\\oint_C y\\,dx = \\frac{1}{2}\\oint_C x\\,dy - y\\,dx', text: 'For a polygon this becomes the shoelace formula $A = \\frac{1}{2}\\left|\\sum (x_i y_{i+1} - x_{i+1} y_i)\\right|$.' },
        ],
      },
      {
        title: 'Surfaces and surface integrals',
        items: [
          { label: '[[calc3-parametric-surface|Parametric surface]] $\\vec{r}(u, v)$', tex: '\\vec{n} = \\vec{r}_u \\times \\vec{r}_v, \\qquad A(S) = \\iint_D |\\vec{r}_u \\times \\vec{r}_v|\\,dA' },
          { label: '[[calc3-surface-integral|Surface integral]] of a scalar function', tex: '\\iint_S f\\,dS = \\iint_D f\\big(\\vec{r}(u, v)\\big)\\,|\\vec{r}_u \\times \\vec{r}_v|\\,dA' },
          { label: '[[calc3-flux|Flux]] through an oriented surface', tex: '\\begin{aligned} \\iint_S \\vec{F} \\cdot d\\vec{S} &= \\iint_S \\vec{F} \\cdot \\vec{n}\\,dS \\\\ &= \\iint_D \\vec{F}\\big(\\vec{r}(u, v)\\big) \\cdot (\\vec{r}_u \\times \\vec{r}_v)\\,dA \\end{aligned}', text: 'Use $\\vec{r}_v \\times \\vec{r}_u$ instead if $\\vec{r}_u \\times \\vec{r}_v$ points the wrong way.' },
          { label: 'Graph $z = g(x, y)$, upward normal', tex: '\\iint_S \\vec{F} \\cdot d\\vec{S} = \\iint_D \\left(-P g_x - Q g_y + R\\right) dA' },
          { label: 'Sphere of radius $a$', tex: '\\begin{aligned} &dS = a^2\\sin\\phi\\,d\\phi\\,d\\theta \\\\ &\\vec{n} = \\tfrac{1}{a}\\langle x, y, z \\rangle \\ \\text{(outward)} \\end{aligned}' },
        ],
      },
      {
        title: 'Stokes and divergence',
        items: [
          { label: "Stokes' theorem", tex: '\\oint_C \\vec{F} \\cdot d\\vec{r} = \\iint_S \\operatorname{curl}\\vec{F} \\cdot d\\vec{S}', text: '$S$ an oriented piecewise-smooth surface with boundary $C$, oriented positively: walking along $C$ with your head along $\\vec{n}$, the surface is on your left. Any two surfaces with the same boundary give the same flux of the curl.' },
          { label: 'Divergence theorem', tex: '\\iint_S \\vec{F} \\cdot d\\vec{S} = \\iiint_E \\operatorname{div}\\vec{F}\\,dV', text: '$S$ the closed boundary of the solid $E$, oriented outward; $\\vec{F}$ with continuous partials on an open region containing $E$.' },
          { label: "Gauss's law", tex: '\\iint_S \\vec{E} \\cdot d\\vec{S} = \\frac{Q_{\\text{enc}}}{\\varepsilon_0}', text: 'An inverse-square field has zero divergence away from the origin, so its flux through every closed surface enclosing the origin is the same ($4\\pi c$ for $\\vec{F} = \\frac{c\\,\\vec{x}}{|\\vec{x}|^3}$).' },
          { label: 'One pattern', tex: '\\int_{\\text{region}} (\\text{derivative of } F) = \\int_{\\text{boundary}} F', text: 'FTC, the fundamental theorem for line integrals, Green, Stokes and the divergence theorem are all this statement in different dimensions.' },
        ],
      },
    ],
  },
];
