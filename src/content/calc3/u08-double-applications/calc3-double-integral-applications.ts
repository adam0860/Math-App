import type { Lesson } from '../../types';

// Running example: the triangular lamina 0 <= x <= 1, 0 <= y <= 2 - 2x with density
// rho = 1 + 3x + y. Mass 8/3, center of mass (3/8, 11/16), I_0 = 12/5.

export const lesson: Lesson = {
  id: 'calc3-double-integral-applications',
  title: 'Mass, Moments and Probability',
  summary: 'Double integrals that add up something other than volume: the mass, center of mass and moments of inertia of a flat plate, and probabilities and expected values from a joint density, including the circular error probable of a weapon.',
  minutes: 19,
  objectives: [
    'Compute the mass of a lamina from its area density with $m = \\iint_D \\rho\\,dA$',
    'Find moments $M_x$, $M_y$ and the center of mass $(\\bar x, \\bar y)$, using symmetry where possible',
    'Compute moments of inertia $I_x$, $I_y$, $I_0$ and the radius of gyration',
    'Use a joint density to compute probabilities $P((X, Y) \\in D)$ and expected values',
    'Derive the probability that a normally scattered shot lands within radius $R$, and the circular error probable',
  ],
  steps: [
    // 1 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Mass of a lamina',
      blocks: [
        {
          type: 'p',
          text: 'In Calculus II you found the [[calc2-center-of-mass|center of mass]] of a rod whose density varies along its length. Now take a flat plate, thin enough that its thickness does not matter: a [[calc3-lamina|lamina]]. Its material may be unevenly spread, thicker in some places or made of a denser alloy in others. That is described by an **area density** $\\rho(x, y)$, in units like $\\text{kg/m}^2$: the mass per unit area near the point $(x, y)$.',
        },
        {
          type: 'p',
          text: 'Cut the region $D$ occupied by the lamina into small rectangles. On a tiny one the density is nearly constant, so its mass is about $\\rho(x_{ij}^*, y_{ij}^*)\\,\\Delta A$. Add these up and refine the grid: a double Riemann sum turning into a double integral.',
        },
        {
          type: 'theorem',
          name: 'Mass of a lamina',
          tex: 'm = \\iint_D \\rho(x, y)\\,dA',
          text: 'Geometrically, the mass is the volume under the "density surface" $z = \\rho(x, y)$ over $D$. The same integral gives the total charge of a plate with charge density $\\sigma(x, y)$, or the total population of a region with population density $\\rho(x, y)$ people per $\\text{km}^2$.',
        },
        {
          type: 'plot3d',
          x: [0, 1],
          y: [0, 2],
          z: [0, 4],
          parametricSurfaces: [
            { x: 'u', y: 'v*(2 - 2u)', z: '1 + 3u + v*(2 - 2u)', u: [0, 1], v: [0, 1], color: 'orange', opacity: 0.8, label: 'density surface $z = \\rho(x, y) = 1 + 3x + y$' },
            { x: 'u', y: 'v*(2 - 2u)', z: '0', u: [0, 1], v: [0, 1], color: 'gray', opacity: 0.55, label: 'the lamina $D$' },
            { x: 'u', y: '2 - 2u', z: 'v*(3 + u)', u: [0, 1], v: [0, 1], color: 'orange', opacity: 0.3 },
            { x: '0', y: '2u', z: 'v*(1 + 2u)', u: [0, 1], v: [0, 1], color: 'orange', opacity: 0.3 },
            { x: 'u', y: '0', z: 'v*(1 + 3u)', u: [0, 1], v: [0, 1], color: 'orange', opacity: 0.3 },
          ],
          view: { azimuth: 120, elevation: 32 },
          caption: 'A triangular plate with vertices $(0, 0)$, $(1, 0)$, $(0, 2)$ whose density rises toward the corner $(1, 0)$. Its mass is the volume of this solid: tall where the plate is dense, short where it is light.',
        },
        {
          type: 'derivation',
          title: 'Mass of the triangle with $\\rho = 1 + 3x + y$',
          steps: [
            { tex: 'D = \\{0 \\le x \\le 1,\\ 0 \\le y \\le 2 - 2x\\}', why: 'The hypotenuse joins $(1, 0)$ and $(0, 2)$: the line $y = 2 - 2x$. Type I, with vertical strips from the $x$-axis up to it.' },
            { tex: 'm = \\int_0^1\\int_0^{2 - 2x} (1 + 3x + y)\\,dy\\,dx = \\int_0^1 \\Big[y + 3xy + \\tfrac12 y^2\\Big]_{y=0}^{y=2-2x} dx', why: 'Integrate in $y$ with $x$ fixed.' },
            { tex: '= \\int_0^1 \\big(4 - 4x^2\\big)\\,dx', why: 'Substitute $y = 2 - 2x$: $(2 - 2x) + 3x(2 - 2x) + \\frac12(2 - 2x)^2 = 2 - 2x + 6x - 6x^2 + 2 - 4x + 2x^2 = 4 - 4x^2$.' },
            { tex: '= 4 - \\tfrac43 = \\tfrac83', why: 'Antiderivative $4x - \\frac43 x^3$ from $0$ to $1$.' },
          ],
          result: 'The lamina has mass $\\frac83$ (in whatever units $\\rho$ uses). With a uniform density $\\rho = 1$ the mass would equal the area, $1$.',
        },
      ],
    },
    // 2
    {
      kind: 'numeric',
      prompt: 'A thin disk occupies $x^2 + y^2 \\le 1$, and its density is the square of the distance from the center: $\\rho(x, y) = x^2 + y^2$. Find its mass.',
      hint: 'Use polar coordinates: $\\rho = r^2$ and $dA = r\\,dr\\,d\\theta$.',
      answer: 'pi/2',
      answerTex: '\\frac{\\pi}{2}',
      label: '$m =$',
      explanation: '$m = \\int_0^{2\\pi}\\int_0^1 r^2 \\cdot r\\,dr\\,d\\theta = 2\\pi \\cdot \\frac14 = \\frac{\\pi}{2} \\approx 1.571$. Compare a uniform disk of density $1$, mass $\\pi$: this one is half as heavy because most of its area is near the rim, where $\\rho$ approaches $1$, but its center is almost massless.',
    },
    // 3 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Moments and the center of mass',
      blocks: [
        {
          type: 'p',
          text: 'The center of mass is the point where the lamina would balance on a pin. For a rod it was $\\bar x = \\frac{\\int x\\rho\\,dx}{\\int \\rho\\,dx}$: the mass-weighted average position. In the plane you need an average for each coordinate, and each comes from a [[calc2-moment|moment]], mass times signed distance from an axis.',
        },
        {
          type: 'theorem',
          name: 'Moments and center of mass of a lamina',
          tex: 'M_x = \\iint_D y\\,\\rho\\,dA, \\qquad M_y = \\iint_D x\\,\\rho\\,dA, \\qquad \\bar x = \\frac{M_y}{m}, \\quad \\bar y = \\frac{M_x}{m}',
          text: '$M_x$ is the moment about the $x$-axis and $M_y$ the moment about the $y$-axis. When $\\rho$ is constant the center of mass depends only on the shape and is called the [[calc2-centroid|centroid]].',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the subscripts seem swapped',
          text: 'A moment about an axis measures the tendency to tip **around** that axis, so it uses the distance **from** that axis. The distance of $(x, y)$ from the $x$-axis is $y$, so $M_x$ has the factor $y$. Balancing the plate on a knife edge along the line $y = \\bar y$ requires the moment about that line to vanish: $\\iint (y - \\bar y)\\rho\\,dA = 0$, i.e. $M_x - \\bar y\\,m = 0$, which is $\\bar y = \\frac{M_x}{m}$.',
        },
        {
          type: 'derivation',
          title: 'Center of mass of the triangle with $\\rho = 1 + 3x + y$',
          steps: [
            { tex: 'M_y = \\int_0^1\\int_0^{2-2x} x(1 + 3x + y)\\,dy\\,dx = \\int_0^1 x(4 - 4x^2)\\,dx', why: 'The factor $x$ is constant in the inner integral, so the inner result is $x$ times the bracket computed for the mass, $4 - 4x^2$.' },
            { tex: '= \\left[2x^2 - x^4\\right]_0^1 = 1', why: 'Antidifferentiate $4x - 4x^3$.' },
            { tex: 'M_x = \\int_0^1\\int_0^{2-2x} y(1 + 3x + y)\\,dy\\,dx = \\int_0^1 \\Big[\\tfrac12(1 + 3x)y^2 + \\tfrac13 y^3\\Big]_0^{2-2x} dx = \\tfrac{11}{6}', why: 'Now the factor $y$ is the integration variable, so the inner integral must be redone. Expanding and integrating the polynomial in $x$ gives $\\frac{11}{6}$.' },
            { tex: '\\bar x = \\frac{M_y}{m} = \\frac{1}{8/3} = \\frac38, \\qquad \\bar y = \\frac{M_x}{m} = \\frac{11/6}{8/3} = \\frac{11}{16}', why: 'Divide each moment by the mass $m = \\frac83$.' },
          ],
          result: 'The center of mass is $\\left(\\frac38, \\frac{11}{16}\\right) = (0.375, 0.6875)$.',
        },
        {
          type: 'graph',
          x: [-0.2, 1.3],
          y: [-0.2, 2.2],
          equal: true,
          functions: [{ expr: '2 - 2x', color: 'blue', domain: [0, 1] }],
          areas: [{ expr: '2 - 2x', expr2: '0', from: 0, to: 1, color: 'blue' }],
          points: [
            { x: '1/3', y: '2/3', color: 'gray' },
            { x: '3/8', y: '11/16', label: 'center of mass', color: 'red' },
          ],
          caption: 'For a uniform plate the balance point would be the centroid (gray), the average of the vertices, $\\left(\\frac13, \\frac23\\right)$. The red point is the center of mass $\\left(\\frac38, \\frac{11}{16}\\right)$. The density $1 + 3x + y$ is heavier to the right and top, so the center of mass shifts that way.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Use symmetry first',
          text: 'If both $D$ and $\\rho$ are symmetric about a line, the center of mass lies on that line, and the matching moment is $0$ without any integration. For a semicircular plate $x^2 + y^2 \\le a^2$, $y \\ge 0$, with $\\rho$ depending only on the distance from the origin, $\\bar x = 0$ immediately.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Center of mass in a physics engine',
          text: 'When you give a 2D physics engine such as Box2D a polygon collider, it computes the polygon\'s area, centroid and moment of inertia by splitting it into triangles and adding up their exact integrals. Gravity then acts at the centroid, and the body rotates about it. Get the centroid wrong and a crate balances on its corner.',
        },
      ],
    },
    // 4
    {
      kind: 'mcq',
      prompt: 'A lamina occupies $D$ with density $\\rho(x, y)$. Which integral is the moment $M_x$ about the $x$-axis?',
      options: [
        { text: '$\\displaystyle\\iint_D x\\,\\rho(x, y)\\,dA$', why: 'That is $M_y$: $x$ is the distance from the $y$-axis.' },
        { text: '$\\displaystyle\\iint_D y\\,\\rho(x, y)\\,dA$', correct: true, why: 'The distance from the point $(x, y)$ to the $x$-axis is $y$, so the moment about the $x$-axis weights each piece of mass by $y$.' },
        { text: '$\\displaystyle\\iint_D y^2\\,\\rho(x, y)\\,dA$', why: 'With the distance **squared** this is the moment of inertia $I_x$, a different quantity (it measures resistance to rotation, not balance).' },
        { text: '$\\displaystyle\\frac{1}{m}\\iint_D y\\,\\rho(x, y)\\,dA$', why: 'That is already $\\bar y$, the moment divided by the mass.' },
      ],
      explanation: '$M_x = \\iint_D y\\,\\rho\\,dA$ and $\\bar y = \\frac{M_x}{m}$. The subscript names the axis you would tip around; the factor is the distance from that axis. Squaring the distance gives moments of inertia, the subject of the next card.',
    },
    // 5
    {
      kind: 'numeric',
      prompt: 'A uniform lamina has the shape of the half disk $x^2 + y^2 \\le 9$, $y \\ge 0$. Find $\\bar y$, the $y$-coordinate of its center of mass.',
      hint: 'Uniform density cancels, so $\\bar y = \\frac{1}{A}\\iint_D y\\,dA$ with $A = \\frac{9\\pi}{2}$. Use polar coordinates for $\\iint_D y\\,dA$.',
      answer: '4/pi',
      answerTex: '\\frac{4}{\\pi}',
      label: '$\\bar y =$',
      explanation: '$\\iint_D y\\,dA = \\int_0^\\pi\\int_0^3 (r\\sin\\theta)\\,r\\,dr\\,d\\theta = \\left(\\int_0^\\pi \\sin\\theta\\,d\\theta\\right)\\left(\\int_0^3 r^2\\,dr\\right) = 2 \\cdot 9 = 18$. Divide by the area $\\frac{9\\pi}{2}$: $\\bar y = \\frac{18 \\cdot 2}{9\\pi} = \\frac{4}{\\pi} \\approx 1.273$. In general a half disk of radius $a$ has $\\bar y = \\frac{4a}{3\\pi}$, about $42\\%$ of the way up. By symmetry $\\bar x = 0$.',
    },
    // 6 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Moments of inertia',
      blocks: [
        {
          type: 'p',
          text: 'In Physics I the [[phys-moment-of-inertia|moment of inertia]] $I = \\sum m_i r_i^2$ measured how hard it is to spin an object: rotational kinetic energy is $\\frac12 I\\omega^2$, and torque gives angular acceleration $\\alpha = \\frac{\\tau}{I}$. For a lamina the sum becomes a double integral, with the **square** of the distance from the axis.',
        },
        {
          type: 'theorem',
          name: 'Moments of inertia of a lamina',
          tex: 'I_x = \\iint_D y^2\\rho\\,dA, \\qquad I_y = \\iint_D x^2\\rho\\,dA, \\qquad I_0 = \\iint_D (x^2 + y^2)\\rho\\,dA = I_x + I_y',
          text: '$I_x$ and $I_y$ are about the coordinate axes; $I_0$ (the **polar moment of inertia**) is about the $z$-axis, perpendicular to the plate through the origin. $I_0 = I_x + I_y$ is the perpendicular axis theorem.',
        },
        {
          type: 'derivation',
          title: 'Uniform disk of radius $a$ and density $k$, about its center',
          steps: [
            { tex: 'I_0 = \\iint_D (x^2 + y^2)\\,k\\,dA = k\\int_0^{2\\pi}\\int_0^a r^2 \\cdot r\\,dr\\,d\\theta', why: 'The disk is a polar rectangle, and the squared distance from the $z$-axis is $x^2 + y^2 = r^2$.' },
            { tex: '= k \\cdot 2\\pi \\cdot \\frac{a^4}{4} = \\frac{\\pi k a^4}{2}', why: 'The integrand does not depend on $\\theta$.' },
            { tex: '= \\frac12 \\left(k\\pi a^2\\right) a^2 = \\frac12 m a^2', why: 'The mass of a uniform disk is density times area, $m = k\\pi a^2$.' },
          ],
          result: '$I_0 = \\frac12 ma^2$, the formula from your physics table, now derived. A thin ring of the same mass has $I = ma^2$: all its mass is at distance $a$, so it is twice as hard to spin up.',
        },
        {
          type: 'p',
          text: 'The [[calc3-radius-of-gyration|radius of gyration]] packs this into a length: $R = \\sqrt{I/m}$ is the distance at which all the mass could be concentrated to give the same moment of inertia. For the disk, $R = \\frac{a}{\\sqrt2} \\approx 0.71a$.',
        },
        {
          type: 'p',
          text: 'Rigid-body simulators want the inertia about the center of mass, $I_{\\text{cm}}$. The [[phys-parallel-axis-theorem|parallel axis theorem]] converts: $I_0 = I_{\\text{cm}} + m(\\bar x^2 + \\bar y^2)$. The program below integrates all of the triangle\'s mass properties at once, the way a physics engine prepares a body.',
        },
        {
          type: 'code',
          title: 'mass_properties.cpp',
          runnable: true,
          code: `#include <cstdio>

// Triangular lamina 0 <= x <= 1, 0 <= y <= 2 - 2x, density rho = 1 + 3x + y.
double rho(double x, double y) { return 1.0 + 3.0 * x + y; }

struct MassProps { double m, Mx, My, I0; };

// Type I midpoint rule: n columns, n cells per column (between y = 0 and y = 2 - 2x).
MassProps integrate(int n) {
    MassProps p{0.0, 0.0, 0.0, 0.0};
    const double dx = 1.0 / n;
    for (int i = 0; i < n; ++i) {
        const double x = (i + 0.5) * dx;
        const double dy = (2.0 - 2.0 * x) / n;
        for (int j = 0; j < n; ++j) {
            const double y = (j + 0.5) * dy;
            const double dm = rho(x, y) * dx * dy;   // mass of one cell
            p.m  += dm;
            p.Mx += y * dm;                          // moment about the x-axis
            p.My += x * dm;                          // moment about the y-axis
            p.I0 += (x * x + y * y) * dm;            // inertia about the origin
        }
    }
    return p;
}

int main() {
    for (int n = 10; n <= 1000; n *= 10) {
        const MassProps p = integrate(n);
        const double xb = p.My / p.m, yb = p.Mx / p.m;
        const double Icm = p.I0 - p.m * (xb * xb + yb * yb);  // parallel axis theorem
        std::printf("n = %4d  m = %.5f  cm = (%.5f, %.5f)  I0 = %.5f  Icm = %.5f\\n",
                    n, p.m, xb, yb, p.I0, Icm);
    }
    std::printf("exact     m = %.5f  cm = (%.5f, %.5f)  I0 = %.5f  Icm = %.5f\\n",
                8.0 / 3.0, 3.0 / 8.0, 11.0 / 16.0, 12.0 / 5.0, 367.0 / 480.0);
}`,
          output: `n =   10  m = 2.67000  cm = (0.37640, 0.68508)  I0 = 2.39001  Icm = 0.75858
n =  100  m = 2.66670  cm = (0.37501, 0.68748)  I0 = 2.39990  Icm = 0.76452
n = 1000  m = 2.66667  cm = (0.37500, 0.68750)  I0 = 2.40000  Icm = 0.76458
exact     m = 2.66667  cm = (0.37500, 0.68750)  I0 = 2.40000  Icm = 0.76458`,
          annotations: [
            { lines: 17, text: 'Each cell contributes $dm = \\rho\\,dA$. Every quantity below is a weighted sum of the same $dm$, so one pass computes them all.' },
            { lines: '19-21', text: 'Moments use the distance ($y$ for $M_x$, $x$ for $M_y$); inertia uses the squared distance from the axis, here the $z$-axis through the origin.' },
            { lines: 31, text: 'Shift the inertia to the center of mass: $I_{\\text{cm}} = I_0 - m(\\bar x^2 + \\bar y^2)$. This is the value a simulator stores, since bodies spin about their center of mass.' },
          ],
        },
      ],
    },
    // 7
    {
      kind: 'expr',
      prompt: 'A uniform rectangular plate with density $\\rho = 1$ occupies $[0, a] \\times [0, b]$. Find its moment of inertia $I_x$ about the $x$-axis (one of its edges).',
      hint: '$I_x = \\int_0^a\\int_0^b y^2\\,dy\\,dx$. The integrand separates.',
      label: '$I_x =$',
      variables: ['a', 'b'],
      domain: [0.5, 3],
      answer: 'a*b^3/3',
      answerTex: '\\frac{ab^3}{3}',
      explanation: '$I_x = \\int_0^a\\int_0^b y^2\\,dy\\,dx = a \\cdot \\frac{b^3}{3} = \\frac{ab^3}{3}$. Since the mass is $m = ab$, this is $\\frac13 mb^2$, the same as a thin rod of length $b$ pivoted at one end: the $x$-direction only spreads the mass parallel to the axis, which does not change any distances from it.',
    },
    // 8
    {
      kind: 'truefalse',
      prompt: 'The center of mass of a lamina always lies on the lamina itself.',
      answer: false,
      explanation: 'Think of a uniform washer, the ring $1 \\le x^2 + y^2 \\le 4$. By symmetry its center of mass is the origin, which is in the hole. A C-shaped or crescent-shaped plate also balances at a point outside its material. The center of mass is an *average* position, and averages of points in a non-convex set can fall outside it. (For a convex lamina, such as a disk or triangle, it is always inside.)',
    },
    // 9 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Joint densities: probability as volume',
      blocks: [
        {
          type: 'p',
          text: 'Replace "mass" by "probability" and the same integrals run statistics. In Probability & Statistics a pair of continuous random variables $(X, Y)$ has a [[stat-joint-distribution|joint density]] $f(x, y)$: the two-variable version of a [[stat-pdf|probability density function]]. Probability is the volume under the density surface.',
        },
        {
          type: 'theorem',
          name: 'Joint density',
          tex: 'f(x, y) \\ge 0, \\qquad \\iint_{\\mathbb{R}^2} f(x, y)\\,dA = 1, \\qquad P\\big((X, Y) \\in D\\big) = \\iint_D f(x, y)\\,dA',
          text: 'The total "probability mass" is $1$. $X$ and $Y$ are independent exactly when the density factors as $f(x, y) = f_X(x)\\,f_Y(y)$ (see [[stat-independent-random-variables]]); then probabilities of rectangles split into products of single integrals.',
        },
        {
          type: 'p',
          text: 'Example: $f(x, y) = x + y$ on the unit square $[0, 1]^2$ and $0$ elsewhere. It is a valid density: it is nonnegative, and $\\iint (x + y)\\,dA = \\frac12 + \\frac12 = 1$. What is $P(X + Y \\le 1)$?',
        },
        {
          type: 'plot3d',
          x: [0, 1],
          y: [0, 1],
          z: [0, 2],
          surfaces: [{ expr: 'x + y', color: 'blue', opacity: 0.45, label: 'density $z = x + y$' }],
          parametricSurfaces: [
            { x: 'u', y: 'v*(1 - u)', z: 'u + v*(1 - u) + 0.01', u: [0, 1], v: [0, 1], color: 'orange', opacity: 0.95, label: 'over the event $X + Y \\le 1$' },
            { x: 'u', y: '1 - u', z: 'v', u: [0, 1], v: [0, 1], color: 'orange', opacity: 0.3 },
          ],
          view: { azimuth: 315, elevation: 30 },
          caption: 'The density surface over the unit square. The orange part sits over the triangle $x + y \\le 1$; the volume under it is $P(X + Y \\le 1)$. It is only a third of the total, because the density is low near the origin and highest at the far corner $(1, 1)$.',
        },
        {
          type: 'derivation',
          title: '$P(X + Y \\le 1)$ for $f = x + y$ on the unit square',
          steps: [
            { tex: 'P = \\int_0^1\\int_0^{1-x} (x + y)\\,dy\\,dx', why: 'The event is the triangle under the line $y = 1 - x$ inside the square.' },
            { tex: '= \\int_0^1 \\Big[xy + \\tfrac12 y^2\\Big]_0^{1-x} dx = \\int_0^1 \\left(x(1 - x) + \\tfrac12(1 - x)^2\\right) dx', why: 'Inner integral in $y$.' },
            { tex: '= \\int_0^1 \\tfrac12\\left(1 - x^2\\right) dx = \\tfrac12\\left(1 - \\tfrac13\\right) = \\tfrac13', why: '$x - x^2 + \\frac12 - x + \\frac12 x^2 = \\frac12 - \\frac12 x^2$.' },
          ],
          result: '$P(X + Y \\le 1) = \\frac13$, although the triangle is half of the square.',
        },
        {
          type: 'p',
          text: 'Expected values are centers of mass of probability. Just as $\\bar x = \\frac{1}{m}\\iint x\\rho\\,dA$, the [[dm-expected-value|expected value]] of $X$ is $E[X] = \\iint x\\,f(x, y)\\,dA$, with no division because the total mass is $1$. More generally $E[g(X, Y)] = \\iint g(x, y)\\,f(x, y)\\,dA$.',
        },
        {
          type: 'math',
          tex: 'E[X] = \\int_0^1\\int_0^1 x(x + y)\\,dy\\,dx = \\int_0^1 \\left(x^2 + \\tfrac{x}{2}\\right) dx = \\tfrac13 + \\tfrac14 = \\tfrac{7}{12}',
          caption: '$E[X] = \\frac{7}{12} \\approx 0.583$, pulled above $\\frac12$ because the density favours large $x$. Likewise $E[XY] = \\iint xy(x + y)\\,dA = \\frac13$.',
        },
      ],
    },
    // 10
    {
      kind: 'numeric',
      prompt: 'For which constant $C$ is $f(x, y) = C\\,x y^2$ on $[0, 1] \\times [0, 3]$ (and $0$ elsewhere) a joint density?',
      hint: 'The total probability must be $1$. The integrand separates on the rectangle.',
      answer: '2/9',
      answerTex: '\\frac{2}{9}',
      label: '$C =$',
      explanation: '$\\iint C xy^2\\,dA = C\\left(\\int_0^1 x\\,dx\\right)\\left(\\int_0^3 y^2\\,dy\\right) = C \\cdot \\frac12 \\cdot 9 = \\frac{9C}{2}$. Setting this equal to $1$ gives $C = \\frac29$. Because the density factors as $(2x)\\left(\\frac{y^2}{9}\\right)$ on a rectangle, $X$ and $Y$ are independent, with marginal densities $2x$ on $[0, 1]$ and $\\frac{y^2}{9}$ on $[0, 3]$.',
    },
    // 11 ────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Shot dispersion and the circular error probable',
      blocks: [
        {
          type: 'p',
          text: 'Aim at a target and fire many rounds. Each impact misses by a horizontal error $X$ and a vertical error $Y$, and a standard model treats them as independent normal variables with mean $0$ and the same standard deviation $\\sigma$. Their joint density depends only on the distance $r = \\sqrt{x^2 + y^2}$ from the aim point:',
        },
        {
          type: 'math',
          tex: 'f(x, y) = \\frac{1}{\\sqrt{2\\pi}\\,\\sigma}e^{-x^2/(2\\sigma^2)} \\cdot \\frac{1}{\\sqrt{2\\pi}\\,\\sigma}e^{-y^2/(2\\sigma^2)} = \\frac{1}{2\\pi\\sigma^2}e^{-r^2/(2\\sigma^2)}',
          caption: 'The product of two normal densities: a circular bell.',
        },
        {
          type: 'p',
          text: 'What is the probability that a shot lands within radius $R$ of the aim point? The region is a disk and the density is radial, so polar coordinates make it a one-line computation.',
        },
        {
          type: 'derivation',
          title: 'Probability of a hit within radius $R$',
          steps: [
            { tex: 'P(r \\le R) = \\int_0^{2\\pi}\\int_0^R \\frac{1}{2\\pi\\sigma^2}e^{-r^2/(2\\sigma^2)}\\,r\\,dr\\,d\\theta', why: 'Integrate the joint density over the disk, with $dA = r\\,dr\\,d\\theta$.' },
            { tex: '= \\frac{1}{\\sigma^2}\\int_0^R e^{-r^2/(2\\sigma^2)}\\,r\\,dr', why: 'The $\\theta$-integral gives $2\\pi$, which cancels the $2\\pi$ in the density.' },
            { tex: '= \\Big[-e^{-r^2/(2\\sigma^2)}\\Big]_0^R = 1 - e^{-R^2/(2\\sigma^2)}', why: 'The factor $r$ makes this a perfect $u$-substitution, $u = \\frac{r^2}{2\\sigma^2}$, $du = \\frac{r}{\\sigma^2}\\,dr$, exactly as in the Gaussian integral.' },
          ],
          result: 'Within $1\\sigma$: $1 - e^{-1/2} \\approx 39.3\\%$. Within $2\\sigma$: $1 - e^{-2} \\approx 86.5\\%$. Note how different this is from one dimension, where $68\\%$ fall within $1\\sigma$.',
        },
        {
          type: 'plot3d',
          x: [-3, 3],
          y: [-3, 3],
          z: [0, 0.17],
          parametricSurfaces: [
            { x: 'u*cos(v)', y: 'u*sin(v)', z: 'e^(-u^2/2)/(2pi)', u: [0, 3], v: [0, '2pi'], color: 'blue', opacity: 0.4, label: 'impact density ($\\sigma = 1$)' },
            { x: 'u*c*cos(v)', y: 'u*c*sin(v)', z: 'e^(-(u*c)^2/2)/(2pi) + 0.001', u: [0, 1], v: [0, '2pi'], color: 'orange', opacity: 0.9, label: 'hits within radius $R$' },
            { x: 'c*cos(u)', y: 'c*sin(u)', z: 'v*e^(-c^2/2)/(2pi)', u: [0, '2pi'], v: [0, 1], color: 'orange', opacity: 0.45 },
          ],
          sliders: [{ name: 'c', min: 0.1, max: 3, step: 0.01, value: 1.18, label: 'radius $R$ (in units of $\\sigma$)', play: true }],
          readouts: [{ label: '$P(r \\le R) = 1 - e^{-R^2/2} =$', expr: '1 - e^(-c^2/2)', digits: 4 }],
          view: { azimuth: 30, elevation: 26 },
          caption: 'The probability of landing within radius $R$ is the volume of the orange column under the bell. At $R \\approx 1.18\\sigma$ it reaches $50\\%$: that radius is the circular error probable.',
        },
        {
          type: 'definition',
          term: '[[calc3-circular-error-probable|Circular error probable (CEP)]]',
          text: 'The radius of the circle, centered on the aim point, that contains half of the impacts. Setting $1 - e^{-R^2/(2\\sigma^2)} = \\frac12$ gives $\\text{CEP} = \\sigma\\sqrt{2\\ln 2} \\approx 1.1774\\,\\sigma$.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Gaussian weapon spread in a game',
          text: 'The formula also runs backwards. Solving $U = 1 - e^{-r^2/(2\\sigma^2)}$ for $r$ gives $r = \\sigma\\sqrt{-2\\ln(1 - U)}$, so a uniform random $U$ and a uniform angle $\\theta$ produce a correctly distributed impact point. That is the **Box–Muller transform**, the classic way to generate normal random numbers. A shooter can use it so most rounds cluster near the crosshair with occasional wide misses, and the designer can tune the spread by its CEP.',
        },
      ],
    },
    // 12
    {
      kind: 'numeric',
      prompt: 'Impacts of a rifle have independent normal horizontal and vertical errors with $\\sigma = 10$ cm. What is the probability that a shot lands within $10$ cm of the aim point? (A decimal to 3 places is fine.)',
      hint: '$P(r \\le R) = 1 - e^{-R^2/(2\\sigma^2)}$ with $R = \\sigma$.',
      answer: '1 - e^(-1/2)',
      answerTex: '1 - e^{-1/2} \\approx 0.393',
      tolerance: 0.001,
      label: '$P =$',
      explanation: 'With $R = \\sigma = 10$: $P = 1 - e^{-100/200} = 1 - e^{-1/2} \\approx 0.3935$. Only about $39\\%$ of shots land within one standard deviation of the aim point in 2D, because a miss in either direction counts. The CEP of this rifle is $10\\sqrt{2\\ln 2} \\approx 11.8$ cm.',
    },
    // 13
    {
      kind: 'error',
      prompt: 'A student finds the center of mass of a uniform lamina ($\\rho = 1$) under $y = x^2$, above the $x$-axis, for $0 \\le x \\le 1$. Tap the first wrong line.',
      lines: [
        '$m = \\displaystyle\\int_0^1\\int_0^{x^2} 1\\,dy\\,dx = \\int_0^1 x^2\\,dx = \\frac13$',
        '$M_x = \\displaystyle\\int_0^1\\int_0^{x^2} y\\,dy\\,dx = \\int_0^1 \\frac{x^4}{2}\\,dx = \\frac{1}{10}$',
        '$M_y = \\displaystyle\\int_0^1\\int_0^{x^2} x\\,dy\\,dx = \\int_0^1 x^3\\,dx = \\frac14$',
        '$\\bar x = \\dfrac{M_x}{m} = \\dfrac{3}{10}$ and $\\bar y = \\dfrac{M_y}{m} = \\dfrac34$',
        'So the center of mass is $\\left(\\frac{3}{10}, \\frac34\\right)$.',
      ],
      errorLines: [4],
      explanation: 'The moments are correct, but line 4 pairs them with the wrong coordinates. $M_y$ (the moment about the $y$-axis, built from $x$) gives $\\bar x$: $\\bar x = \\frac{M_y}{m} = \\frac{1/4}{1/3} = \\frac34$ and $\\bar y = \\frac{M_x}{m} = \\frac{1/10}{1/3} = \\frac{3}{10}$. The center of mass is $\\left(\\frac34, \\frac{3}{10}\\right)$. The wrong answer fails a sanity check: at $x = \\frac{3}{10}$ the region only reaches up to $y = 0.09$, so $\\left(\\frac{3}{10}, \\frac34\\right)$ is far outside this plate.',
    },
    // 14
    {
      kind: 'fill',
      prompt: 'Complete the formulas for a lamina with density $\\rho$ on $D$.',
      template: '$\\bar x =$ ___ $\\big/ m$, where $M_y = \\iint_D$ ___ $\\rho\\,dA$; and $I_0 = I_x +$ ___ .',
      blanks: [{ answers: ['$M_y$'] }, { answers: ['$x$'] }, { answers: ['$I_y$'] }],
      wordBank: ['$M_y$', '$x$', '$I_y$', '$M_x$', '$y$', '$x^2$', '$I_x$'],
      explanation: '$\\bar x = \\frac{M_y}{m}$ with $M_y = \\iint_D x\\rho\\,dA$: the moment about the $y$-axis uses the distance $x$ from it. For inertia the distance is squared, and the polar moment splits as $I_0 = \\iint (x^2 + y^2)\\rho\\,dA = I_x + I_y$ (the perpendicular axis theorem).',
    },
  ],
  takeaways: [
    'Mass of a lamina: $m = \\iint_D \\rho\\,dA$, the volume under the density surface.',
    'Moments $M_x = \\iint y\\rho\\,dA$, $M_y = \\iint x\\rho\\,dA$ and center of mass $\\bar x = \\frac{M_y}{m}$, $\\bar y = \\frac{M_x}{m}$. Use symmetry to skip integrals.',
    'Moments of inertia use squared distances: $I_x = \\iint y^2\\rho\\,dA$, $I_y = \\iint x^2\\rho\\,dA$, $I_0 = I_x + I_y$; radius of gyration $R = \\sqrt{I/m}$.',
    'A joint density has total volume $1$; $P((X, Y) \\in D) = \\iint_D f\\,dA$ and $E[g(X, Y)] = \\iint g f\\,dA$. Expected values are centers of mass of probability.',
    'For circular normal scatter, $P(r \\le R) = 1 - e^{-R^2/(2\\sigma^2)}$, and the circular error probable is $\\sigma\\sqrt{2\\ln 2} \\approx 1.18\\sigma$.',
  ],
  reading: [
    {
      title: 'OpenStax Calculus Volume 3 — Chapter 5: Multiple Integration',
      url: 'https://openstax.org/details/books/calculus-volume-3',
      source: 'openstax',
      note: 'Section 5.6 treats mass, moments, centers of mass and moments of inertia of laminas, and section 5.2 includes joint densities and expected values.',
    },
    {
      title: 'MIT OCW 18.02SC Multivariable Calculus',
      url: 'https://ocw.mit.edu/courses/18-02sc-multivariable-calculus-fall-2010/',
      source: 'other',
      note: 'Unit 3 has short lectures and problem sets on mass, center of mass and moment of inertia with double integrals.',
    },
    {
      title: 'Wikipedia — Circular error probable',
      url: 'https://en.wikipedia.org/wiki/Circular_error_probable',
      source: 'wikipedia',
      note: 'How CEP is used to specify the accuracy of weapons and navigation systems, and its relation to the Rayleigh distribution.',
    },
    {
      title: 'Wikipedia — Box–Muller transform',
      url: 'https://en.wikipedia.org/wiki/Box%E2%80%93Muller_transform',
      source: 'wikipedia',
      note: 'The polar-coordinates method for turning uniform random numbers into normal ones.',
    },
  ],
};
