import type { GlossaryEntry } from '../types';

export const calc2Glossary: GlossaryEntry[] = [
  // ------------------------------------------------------------------
  // Applications of Integration
  // ------------------------------------------------------------------
  {
    id: 'solid-of-revolution',
    term: 'Solid of Revolution',
    aliases: ['solid of rotation', 'revolved solid'],
    course: 'calc2',
    category: 'Applications of Integration',
    short:
      'The three-dimensional solid swept out when a plane region is rotated a full turn about a line (the *axis of revolution*) in its plane.',
    long:
      'Picture a lathe: spin a flat region around an axis and it carves out a vase, a bowl or a cone. Every cross-section perpendicular to the axis is a circle (a disk) or a ring (a washer), and every cylinder centred on the axis meets the solid in a thin shell. Those two observations give the two standard volume formulas.\n\n' +
      'Slicing perpendicular to the axis gives the [[disk-method]] and [[washer-method]]; slicing parallel to the axis gives the [[shell-method]]. Both compute the same volume, so choose whichever leads to the easier integral (often the one that avoids solving for $x$ in terms of $y$).\n\n' +
      'Pitfall: the radius is always measured from the **axis**, not from the $x$-axis. When rotating about $y = -1$, a curve at height $y = f(x)$ has radius $f(x) + 1$. In game and graphics work the same idea is a *lathe* or *surface of revolution* mesh: sample a 2D profile curve and rotate it around an axis to build the vertices.',
    tex: 'V = \\int_a^b A(x)\\,dx',
    see: ['disk-method', 'washer-method', 'shell-method', 'surface-area-of-revolution'],
  },
  {
    id: 'disk-method',
    term: 'Disk Method',
    aliases: ['disc method', 'method of disks'],
    course: 'calc2',
    category: 'Applications of Integration',
    short:
      'Volume of a [[solid-of-revolution]] found by slicing perpendicular to the axis into thin circular disks: $V = \\int_a^b \\pi [R(x)]^2\\,dx$.',
    long:
      'Each thin slice of thickness $dx$ is a cylinder (a coin) of radius $R(x)$, so its volume is $\\pi [R(x)]^2\\,dx$. Adding infinitely many coins is a [[riemann-sum]] whose limit is the integral.\n\n' +
      'Use it when the region touches the axis of revolution along the whole interval, so each slice is a solid disk. $R(x)$ is the distance from the axis to the boundary curve. For rotation about a vertical axis, integrate in $y$: $V = \\int_c^d \\pi [R(y)]^2\\,dy$.\n\n' +
      'Pitfall: square the radius, not the integral. $\\pi \\left(\\int R\\,dx\\right)^2$ is a common mistake. If there is a gap between the region and the axis, you need the [[washer-method]] instead.',
    tex: 'V = \\int_a^b \\pi\\,[R(x)]^2\\,dx',
    see: ['washer-method', 'shell-method', 'solid-of-revolution'],
  },
  {
    id: 'washer-method',
    term: 'Washer Method',
    aliases: ['method of washers', 'ring method'],
    course: 'calc2',
    category: 'Applications of Integration',
    short:
      'Volume of a solid of revolution with a hole, slicing perpendicular to the axis into washers (rings): $V = \\int_a^b \\pi\\left([R(x)]^2 - [r(x)]^2\\right)dx$.',
    long:
      'When the region does not touch the axis, each slice is a disk with a smaller disk removed: a washer. Its area is the big disk minus the small one, $\\pi R^2 - \\pi r^2$.\n\n' +
      'Here $R(x)$ is the outer radius (axis to the farther curve) and $r(x)$ the inner radius (axis to the nearer curve). The [[disk-method]] is the special case $r = 0$.\n\n' +
      'Pitfall: $\\pi (R - r)^2$ is **not** the washer area, since $(R - r)^2 \\ne R^2 - r^2$. Square each radius separately, then subtract.',
    tex: 'V = \\int_a^b \\pi\\left([R(x)]^2 - [r(x)]^2\\right)dx',
    see: ['disk-method', 'shell-method', 'area-between-curves'],
  },
  {
    id: 'shell-method',
    term: 'Shell Method',
    aliases: ['cylindrical shells', 'method of cylindrical shells'],
    course: 'calc2',
    category: 'Applications of Integration',
    short:
      'Volume of a solid of revolution found by slicing *parallel* to the axis into thin cylindrical shells: $V = \\int_a^b 2\\pi\\, r(x)\\, h(x)\\,dx$.',
    long:
      'A thin vertical strip at position $x$, rotated about a vertical axis, sweeps out a hollow tube. Cut it open and flatten it: it is nearly a thin slab with length $2\\pi r$ (circumference), height $h$ and thickness $dx$.\n\n' +
      'For rotation about the $y$-axis, $r(x) = x$; about $x = c$, $r(x) = |x - c|$. The height $h(x)$ is top curve minus bottom curve. Shells shine when the axis is vertical but the curves are given as $y = f(x)$, so washers would force you to solve for $x$.\n\n' +
      'Pitfall: shells and washers slice in perpendicular directions. With shells about a vertical axis you integrate in $x$; with washers about a vertical axis you integrate in $y$.',
    tex: 'V = \\int_a^b 2\\pi\\, r(x)\\, h(x)\\,dx',
    see: ['disk-method', 'washer-method', 'solid-of-revolution'],
  },
  {
    id: 'arc-length-integral',
    term: 'Arc Length (Calculus)',
    aliases: ['arc length', 'length of a curve', 'arc length formula'],
    course: 'calc2',
    category: 'Applications of Integration',
    short:
      'The length of a smooth curve $y = f(x)$ from $x = a$ to $x = b$: $L = \\int_a^b \\sqrt{1 + [f\'(x)]^2}\\,dx$.',
    long:
      'Zoom in on a curve and it looks like a tiny line segment with horizontal run $dx$ and rise $dy = f\'(x)\\,dx$. By the Pythagorean theorem its length is $\\sqrt{dx^2 + dy^2} = \\sqrt{1 + (f\')^2}\\,dx$. Summing segments is a [[riemann-sum]] of polygon lengths.\n\n' +
      'Hypothesis: $f\'$ must be continuous on $[a, b]$ (the curve is *smooth*). For [[parametric-equations]] the same idea gives $L = \\int_\\alpha^\\beta \\sqrt{(dx/dt)^2 + (dy/dt)^2}\\,dt$, which is what a game uses to move an object at constant speed along a spline.\n\n' +
      'Pitfall: the square root makes most arc length integrals impossible in elementary terms, so textbook examples are carefully chosen. Real software estimates them with the [[simpsons-rule]] or by summing many short chords.',
    tex: 'L = \\int_a^b \\sqrt{1 + \\left(\\frac{dy}{dx}\\right)^2}\\,dx',
    see: ['surface-area-of-revolution', 'parametric-equations', 'simpsons-rule'],
  },
  {
    id: 'surface-area-of-revolution',
    term: 'Surface Area of Revolution',
    aliases: ['area of a surface of revolution'],
    course: 'calc2',
    category: 'Applications of Integration',
    short:
      'The area of the surface made by rotating $y = f(x) \\ge 0$, $a \\le x \\le b$, about the $x$-axis: $S = \\int_a^b 2\\pi f(x)\\sqrt{1 + [f\'(x)]^2}\\,dx$.',
    long:
      'Each tiny piece of curve, of length $ds = \\sqrt{1 + (f\')^2}\\,dx$, sweeps out a thin band (a slice of a cone) whose area is circumference times slant width: $2\\pi r\\,ds$.\n\n' +
      'For rotation about the $x$-axis the radius is $r = f(x)$; about the $y$-axis it is $r = x$ (for $x \\ge 0$). It requires $f\'$ continuous on $[a, b]$.\n\n' +
      'Pitfall: do not use $dx$ in place of $ds$. Using $2\\pi f(x)\\,dx$ approximates the surface by cylinders and gives the wrong answer for any sloped curve, because a slanted band is wider than its horizontal shadow.',
    tex: 'S = \\int_a^b 2\\pi\\, f(x)\\sqrt{1 + [f\'(x)]^2}\\,dx',
    see: ['arc-length-integral', 'solid-of-revolution'],
  },
  {
    id: 'work',
    term: 'Work',
    aliases: ['work done by a variable force'],
    course: 'calc2',
    category: 'Applications of Integration',
    short:
      'The energy transferred by a force acting through a distance. For a force $F(x)$ along a line from $x = a$ to $x = b$, $W = \\int_a^b F(x)\\,dx$.',
    long:
      'For a constant force, work is force times distance: $W = Fd$. When the force changes with position, chop the motion into tiny steps $dx$ on which the force is nearly constant and add up $F(x)\\,dx$.\n\n' +
      'Units: newton-metres = joules (SI) or foot-pounds. Typical problems are springs ([[hookes-law]]), lifting cables or chains (the weight still to be lifted shrinks), and pumping liquid out of a tank (each thin layer travels a different distance, so slice the *liquid*, not the motion).\n\n' +
      'Pitfall: in pumping problems, mass is not force. Multiply volume by density and by $g \\approx 9.8\\ \\text{m/s}^2$ to get weight in newtons; in US units, density in lb/ft³ is already a weight density.',
    tex: 'W = \\int_a^b F(x)\\,dx',
    see: ['hookes-law', 'definite-integral'],
  },
  {
    id: 'hookes-law',
    term: "Hooke's Law",
    aliases: ['spring law'],
    course: 'calc2',
    category: 'Applications of Integration',
    short:
      'The force needed to hold a spring stretched or compressed $x$ units beyond its natural length is $F(x) = kx$, where $k > 0$ is the spring constant.',
    long:
      'Springs resist in proportion to how far they are deformed: twice the stretch, twice the force. This holds as long as the spring is not stretched past its elastic limit.\n\n' +
      'Measure $x$ from the **natural (rest) length**, not from the spring\'s current length. Then the [[work]] to stretch from $x = a$ to $x = b$ is $\\int_a^b kx\\,dx = \\tfrac{k}{2}(b^2 - a^2)$. Find $k$ first from the given data (for example, "a force of 10 N holds it 0.2 m beyond natural length" gives $k = 50$ N/m).\n\n' +
      'In games, Hooke\'s law is the heart of spring-damper systems: camera follow, soft-body physics, ropes and cloth all apply $F = -kx$ (the minus sign means the spring pulls back toward rest).',
    tex: 'F(x) = kx, \\qquad W = \\int_a^b kx\\,dx = \\frac{k}{2}\\left(b^2 - a^2\\right)',
    see: ['work', 'differential-equation'],
  },

  // ------------------------------------------------------------------
  // Integration Techniques
  // ------------------------------------------------------------------
  {
    id: 'integration-by-parts',
    term: 'Integration by Parts',
    aliases: ['IBP', 'by parts'],
    course: 'calc2',
    category: 'Integration Techniques',
    short:
      'The integral form of the [[product-rule]]: $\\int u\\,dv = uv - \\int v\\,du$. It trades one integral for another that is hopefully easier.',
    long:
      'Integrate both sides of $(uv)\' = u\'v + uv\'$ and rearrange: that is the whole proof. You choose which factor is $u$ (to differentiate) and which is $dv$ (to integrate). A good choice makes $du$ simpler than $u$ while $v$ stays no worse than $dv$.\n\n' +
      'The LIATE heuristic picks $u$ as the first of: **L**ogarithmic, **I**nverse trig, **A**lgebraic, **T**rig, **E**xponential. For definite integrals, $\\int_a^b u\\,dv = uv\\big|_a^b - \\int_a^b v\\,du$. Repeated parts can be organised in a tabular (DI) layout, and integrals like $\\int e^x \\sin x\\,dx$ come back to themselves, so you solve for the integral algebraically.\n\n' +
      'Pitfall: forgetting the minus sign, or forgetting that the boundary term $uv$ must also be evaluated at the limits.',
    tex: '\\int u\\,dv = uv - \\int v\\,du',
    see: ['product-rule', 'u-substitution', 'trig-substitution', 'partial-fractions'],
  },
  {
    id: 'trig-substitution',
    term: 'Trigonometric Substitution',
    aliases: ['trig sub', 'trig substitution'],
    course: 'calc2',
    category: 'Integration Techniques',
    short:
      'A substitution such as $x = a\\sin\\theta$, $x = a\\tan\\theta$ or $x = a\\sec\\theta$ that turns a radical $\\sqrt{a^2 - x^2}$, $\\sqrt{a^2 + x^2}$ or $\\sqrt{x^2 - a^2}$ into a single trig function using a Pythagorean identity.',
    long:
      'The radicals look like sides of right triangles. With $x = a\\sin\\theta$, $a^2 - x^2 = a^2\\cos^2\\theta$, so the square root disappears. Similarly $1 + \\tan^2\\theta = \\sec^2\\theta$ handles $a^2 + x^2$, and $\\sec^2\\theta - 1 = \\tan^2\\theta$ handles $x^2 - a^2$.\n\n' +
      'Restrict $\\theta$ so the substitution is invertible: $-\\pi/2 \\le \\theta \\le \\pi/2$ for sine, $-\\pi/2 < \\theta < \\pi/2$ for tangent, and $0 \\le \\theta < \\pi/2$ or $\\pi \\le \\theta < 3\\pi/2$ for secant. On those ranges the square root simplifies without absolute values. To return to $x$, draw the reference triangle.\n\n' +
      'Pitfall: do not reach for trig sub when a plain [[u-substitution]] works, e.g. $\\int x\\sqrt{1 - x^2}\\,dx$ needs only $u = 1 - x^2$.',
    tex: '\\begin{aligned} \\sqrt{a^2 - x^2}&: x = a\\sin\\theta \\\\ \\sqrt{a^2 + x^2}&: x = a\\tan\\theta \\\\ \\sqrt{x^2 - a^2}&: x = a\\sec\\theta \\end{aligned}',
    see: ['integration-by-parts', 'u-substitution', 'partial-fractions'],
  },
  {
    id: 'partial-fractions',
    term: 'Partial Fraction Decomposition',
    aliases: ['partial fractions', 'method of partial fractions'],
    course: 'calc2',
    category: 'Integration Techniques',
    short:
      'Rewriting a proper rational function as a sum of simpler fractions with linear or irreducible quadratic denominators, e.g. $\\dfrac{1}{x^2 - 1} = \\dfrac{1/2}{x - 1} - \\dfrac{1/2}{x + 1}$.',
    long:
      'It reverses "adding fractions with a common denominator". Once split, each piece integrates to a logarithm, a power, or an arctangent.\n\n' +
      'Steps: (1) if $\\deg P \\ge \\deg Q$, do polynomial long division first; (2) factor $Q$ completely into linear and irreducible quadratic factors; (3) write one term $\\frac{A}{ax + b}$ per linear factor, terms $\\frac{A_1}{(ax+b)} + \\dots + \\frac{A_k}{(ax+b)^k}$ for a repeated factor, and $\\frac{Bx + C}{ax^2 + bx + c}$ per irreducible quadratic; (4) clear denominators and solve for the constants (plug in roots, or match coefficients).\n\n' +
      'Pitfall: skipping long division on an improper fraction, or using a constant numerator over an irreducible quadratic (it needs $Bx + C$).',
    tex: '\\frac{5x - 4}{(x - 2)(x + 1)} = \\frac{2}{x - 2} + \\frac{3}{x + 1}',
    see: ['integration-by-parts', 'trig-substitution', 'telescoping-series'],
  },
  {
    id: 'improper-integral',
    term: 'Improper Integral',
    aliases: ['type 1 improper integral', 'type 2 improper integral'],
    course: 'calc2',
    category: 'Integration Techniques',
    short:
      'An integral over an infinite interval, or of a function with an infinite discontinuity in the interval, defined as a limit of ordinary definite integrals.',
    long:
      'A [[definite-integral]] needs a finite interval and a bounded function. Improper integrals stretch the idea with a limit: integrate up to a finite $t$, then let $t$ approach the trouble spot. If the limit exists and is finite, the integral is [[convergent]]; otherwise it is [[divergent]].\n\n' +
      'Type 1: $\\int_a^\\infty f(x)\\,dx = \\lim_{t \\to \\infty} \\int_a^t f(x)\\,dx$. Type 2 (infinite discontinuity at $b$): $\\int_a^b f(x)\\,dx = \\lim_{t \\to b^-} \\int_a^t f(x)\\,dx$. For $\\int_{-\\infty}^{\\infty}$ or a discontinuity inside the interval, split into two pieces; the whole converges only if **both** pieces converge. Key benchmark: $\\int_1^\\infty \\frac{1}{x^p}\\,dx$ converges iff $p > 1$.\n\n' +
      'Pitfall: $\\int_{-1}^{1} \\frac{1}{x^2}\\,dx$ is not $-2$. The integrand blows up at $0$, and both halves diverge. Improper integrals also power the [[integral-test]] for series.',
    tex: '\\int_a^{\\infty} f(x)\\,dx = \\lim_{t \\to \\infty} \\int_a^t f(x)\\,dx',
    see: ['convergent', 'divergent', 'integral-test', 'p-series'],
  },

  // ------------------------------------------------------------------
  // Numerical Methods
  // ------------------------------------------------------------------
  {
    id: 'trapezoidal-rule',
    term: 'Trapezoidal Rule',
    aliases: ['trapezoid rule'],
    course: 'calc2',
    category: 'Numerical Methods',
    short:
      'Approximates $\\int_a^b f(x)\\,dx$ by joining sample points with straight segments and adding the areas of the trapezoids: $T_n = \\frac{\\Delta x}{2}\\left[f(x_0) + 2f(x_1) + \\dots + 2f(x_{n-1}) + f(x_n)\\right]$.',
    long:
      'Each strip of width $\\Delta x = (b - a)/n$ becomes a trapezoid whose area is the average of the two heights times the width. Interior points are shared by two trapezoids, hence the coefficient 2. It equals the average of the left and right [[riemann-sum|Riemann sums]].\n\n' +
      'Error bound: if $|f\'\'(x)| \\le K$ on $[a, b]$, then $|E_T| \\le \\frac{K(b - a)^3}{12n^2}$. Doubling $n$ cuts the error by about a factor of 4. The rule overestimates for concave-up $f$ and underestimates for concave-down $f$.\n\n' +
      'Why it matters: when you only have sampled data (sensor readings, frame-by-frame velocity), the trapezoidal rule is the natural way to integrate it. Compare the [[midpoint-rule]] and [[simpsons-rule]].',
    tex: 'T_n = \\frac{\\Delta x}{2}\\left[f(x_0) + 2f(x_1) + \\cdots + 2f(x_{n-1}) + f(x_n)\\right]',
    see: ['midpoint-rule', 'simpsons-rule', 'riemann-sum'],
  },
  {
    id: 'simpsons-rule',
    term: "Simpson's Rule",
    aliases: ['Simpson rule', 'parabolic rule'],
    course: 'calc2',
    category: 'Numerical Methods',
    short:
      'Approximates $\\int_a^b f(x)\\,dx$ by fitting parabolas through consecutive triples of points ($n$ even): $S_n = \\frac{\\Delta x}{3}\\left[f_0 + 4f_1 + 2f_2 + 4f_3 + \\dots + 4f_{n-1} + f_n\\right]$.',
    long:
      'Straight segments (trapezoids) miss curvature; parabolas capture it. Over each pair of strips a parabola through three points has area $\\frac{\\Delta x}{3}(f_0 + 4f_1 + f_2)$, and summing gives the 1-4-2-4-…-4-1 pattern.\n\n' +
      'Requires $n$ **even**. Error bound: if $|f^{(4)}(x)| \\le K$ on $[a, b]$, then $|E_S| \\le \\frac{K(b - a)^5}{180n^4}$. Doubling $n$ cuts the error by about 16, and it is exact for cubics. Also $S_{2n} = \\tfrac{1}{3}T_n + \\tfrac{2}{3}M_n$.\n\n' +
      'Pitfall: the weights start and end with 1, and the pattern 4, 2, 4, … must end with 4 just before the last point; an odd $n$ breaks it.',
    tex: 'S_n = \\frac{\\Delta x}{3}\\left[f(x_0) + 4f(x_1) + 2f(x_2) + \\cdots + 4f(x_{n-1}) + f(x_n)\\right]',
    example:
      '// Simpson\'s rule: n must be even\n' +
      'double simpson(double (*f)(double), double a, double b, int n) {\n' +
      '    double dx = (b - a) / n;\n' +
      '    double sum = f(a) + f(b);\n' +
      '    for (int i = 1; i < n; ++i)\n' +
      '        sum += (i % 2 == 1 ? 4.0 : 2.0) * f(a + i * dx);\n' +
      '    return sum * dx / 3.0;\n' +
      '}',
    exampleLang: 'cpp',
    see: ['trapezoidal-rule', 'midpoint-rule', 'arc-length-integral'],
  },
  {
    id: 'midpoint-rule',
    term: 'Midpoint Rule',
    aliases: ['midpoint approximation', 'midpoint sum'],
    course: 'calc2',
    category: 'Numerical Methods',
    short:
      'A [[riemann-sum]] that samples each strip at its midpoint: $M_n = \\Delta x\\left[f(\\bar x_1) + f(\\bar x_2) + \\dots + f(\\bar x_n)\\right]$, where $\\bar x_i = \\tfrac{1}{2}(x_{i-1} + x_i)$.',
    long:
      'Sampling in the middle lets overestimates on one half of a strip roughly cancel underestimates on the other, so it beats left and right endpoint sums handily.\n\n' +
      'Error bound: if $|f\'\'(x)| \\le K$ on $[a, b]$, then $|E_M| \\le \\frac{K(b - a)^3}{24n^2}$, half the [[trapezoidal-rule]] bound. The two errors typically have opposite signs, which is why combining them gives [[simpsons-rule]]: $S_{2n} = \\frac{T_n + 2M_n}{3}$.\n\n' +
      'Pitfall: $M_n$ uses $n$ function values at midpoints, not the $n + 1$ grid points.',
    tex: 'M_n = \\Delta x \\sum_{i=1}^{n} f\\!\\left(\\frac{x_{i-1} + x_i}{2}\\right)',
    see: ['trapezoidal-rule', 'simpsons-rule', 'riemann-sum'],
  },

  // ------------------------------------------------------------------
  // Convergence vocabulary (used for integrals, sequences, series)
  // ------------------------------------------------------------------
  {
    id: 'convergent',
    term: 'Convergent',
    aliases: ['converges', 'convergence'],
    course: 'calc2',
    category: 'Sequences',
    short:
      'Describes an [[improper-integral]], sequence or series whose defining limit exists and is a finite number.',
    long:
      'Calculus II keeps asking one question: "does this infinite process settle down to a finite value?" If yes, it converges, and the limit is its value.\n\n' +
      'A sequence $\\{a_n\\}$ converges if $\\lim_{n\\to\\infty} a_n$ is finite. A series $\\sum a_n$ converges if its sequence of [[partial-sum|partial sums]] converges. An improper integral converges if the limit of the proper integrals is finite.\n\n' +
      'Pitfall: a sequence converging is not the same as its series converging. $a_n = 1/n \\to 0$, yet $\\sum 1/n$ (the [[harmonic-series]]) diverges.',
    tex: '\\sum_{n=1}^{\\infty} a_n = S \\iff \\lim_{n \\to \\infty} s_n = S',
    see: ['divergent', 'limit-of-a-sequence', 'partial-sum', 'improper-integral'],
  },
  {
    id: 'divergent',
    term: 'Divergent',
    aliases: ['diverges', 'divergence'],
    course: 'calc2',
    category: 'Sequences',
    short:
      'Describes an improper integral, sequence or series that does not converge: its limit is infinite or does not exist.',
    long:
      'Divergence comes in flavours: growing without bound ($\\sum n$, $\\int_1^\\infty dx/x$), or oscillating without settling ($a_n = (-1)^n$, $\\sum (-1)^n$). Both count as divergent.\n\n' +
      'Saying an integral or series "diverges to $\\infty$" is a description of how it diverges; it is still divergent, not "equal to infinity" in the convergent sense.\n\n' +
      'Pitfall: slow growth is still divergence. The partial sums of the [[harmonic-series]] grow like $\\ln n$; you need about $1.5 \\times 10^{43}$ terms to pass 100, but they do pass every bound.',
    see: ['convergent', 'divergence-test', 'harmonic-series'],
  },

  // ------------------------------------------------------------------
  // Differential Equations
  // ------------------------------------------------------------------
  {
    id: 'differential-equation',
    term: 'Differential Equation',
    aliases: ['DE', 'ODE', 'ordinary differential equation'],
    course: 'calc2',
    category: 'Differential Equations',
    short:
      'An equation relating an unknown function to one or more of its derivatives, such as $y\' = ky$. A solution is a function that makes the equation true.',
    long:
      'Most laws of nature describe *how things change*, not what they are: velocity is the rate of change of position, a cooling cup loses heat in proportion to the temperature difference. Those statements are differential equations, and solving them recovers the actual behaviour.\n\n' +
      'The *order* is the highest derivative present: $y\' = 2y$ is first order, $y\'\' + y = 0$ is second order. A *general solution* contains arbitrary constants (one per order); an [[initial-value-problem]] pins them down. To check a proposed solution, substitute it and its derivatives back into the equation.\n\n' +
      'Every physics engine is, at heart, a differential equation solver: $\\mathbf{x}\'\' = \\mathbf{F}/m$ is integrated frame by frame, usually with a variant of [[eulers-method]].',
    tex: '\\frac{dy}{dx} = f(x, y)',
    see: ['initial-value-problem', 'separable-equation', 'slope-field', 'eulers-method'],
  },
  {
    id: 'initial-value-problem',
    term: 'Initial Value Problem',
    aliases: ['IVP'],
    course: 'calc2',
    category: 'Differential Equations',
    short:
      'A [[differential-equation]] together with an initial condition such as $y(x_0) = y_0$, which selects one particular solution from the general family.',
    long:
      'The general solution to $y\' = 2x$ is $y = x^2 + C$, a whole family of parabolas. Knowing that the curve passes through $(0, 3)$ picks out $C = 3$.\n\n' +
      'A first-order equation needs one condition; an $n$th-order equation needs $n$ (e.g. initial position and initial velocity). Under mild hypotheses (if $f$ and $\\partial f / \\partial y$ are continuous near $(x_0, y_0)$) an IVP $y\' = f(x, y)$, $y(x_0) = y_0$ has exactly one solution near $x_0$.\n\n' +
      'In a game, the initial condition is the spawn state: where the projectile starts and how fast it is moving. The physics step then advances that one solution forward in time.',
    tex: '\\frac{dy}{dx} = f(x, y), \\qquad y(x_0) = y_0',
    see: ['differential-equation', 'eulers-method', 'constant-of-integration'],
  },
  {
    id: 'slope-field',
    term: 'Slope Field',
    aliases: ['direction field'],
    course: 'calc2',
    category: 'Differential Equations',
    short:
      'A picture of a first-order equation $y\' = f(x, y)$: at many grid points $(x, y)$ a short segment is drawn with slope $f(x, y)$. Solution curves are tangent to the segments everywhere.',
    long:
      'You often cannot solve a differential equation by formula, but you can always evaluate $f(x, y)$. The slope field shows the "flow" the solutions must follow, like iron filings around a magnet.\n\n' +
      'To sketch a solution, start at the initial point and follow the segments. Horizontal rows of zero-slope segments reveal equilibrium solutions ($y = c$ with $f(x, c) = 0$ for all $x$); whether nearby solutions move toward or away from them tells you stability.\n\n' +
      'Following the arrows with straight steps is exactly [[eulers-method]]. Vector fields used in games for wind, flocking and flow-field pathfinding are the same idea in 2D.',
    see: ['differential-equation', 'eulers-method', 'logistic-model'],
  },
  {
    id: 'eulers-method',
    term: "Euler's Method",
    aliases: ['Euler integration', 'forward Euler', 'explicit Euler'],
    course: 'calc2',
    category: 'Differential Equations',
    short:
      'A numerical method for $y\' = f(x, y)$, $y(x_0) = y_0$: take steps of size $h$ along the tangent line, $y_{n+1} = y_n + h\\,f(x_n, y_n)$, $x_{n+1} = x_n + h$.',
    long:
      'It is [[linearization]] used over and over: from the current point, the slope is $f(x_n, y_n)$, so move a short distance $h$ along that slope, recompute the slope, repeat. It is the simplest way to follow a [[slope-field]].\n\n' +
      'Accuracy: the error at a fixed endpoint is roughly proportional to $h$ (first order), so halving the step roughly halves the error. Because it uses the slope at the *start* of each step, it consistently cuts the corner on curved solutions; for concave-up solutions it underestimates.\n\n' +
      'Game physics: `pos += vel * dt; vel += acc * dt;` is Euler\'s method with $h = \\Delta t$. Plain (explicit) Euler slowly *adds* energy to orbits and springs, so they spiral outward. Swapping the order (update velocity first, then position with the new velocity) gives **semi-implicit (symplectic) Euler**, which is what most engines use because it stays stable.',
    tex: 'y_{n+1} = y_n + h\\, f(x_n, y_n)',
    example:
      '// One physics frame with step dt (semi-implicit Euler)\n' +
      'struct Body { float x, v; };\n' +
      '\n' +
      'void step(Body& b, float k, float m, float dt) {\n' +
      '    float a = -k * b.x / m;  // spring force (Hooke\'s law)\n' +
      '    b.v += a * dt;           // update velocity first...\n' +
      '    b.x += b.v * dt;         // ...then position with the NEW velocity\n' +
      '}\n' +
      '// Explicit Euler would use the OLD velocity for x,\n' +
      '// and the oscillation would slowly grow.',
    exampleLang: 'cpp',
    see: ['differential-equation', 'initial-value-problem', 'slope-field', 'linearization'],
  },
  {
    id: 'separable-equation',
    term: 'Separable Equation',
    aliases: ['separable differential equation', 'separation of variables'],
    course: 'calc2',
    category: 'Differential Equations',
    short:
      'A first-order equation that can be written $\\dfrac{dy}{dx} = g(x)\\,h(y)$, solved by moving all $y$\'s to one side and all $x$\'s to the other and integrating: $\\int \\frac{dy}{h(y)} = \\int g(x)\\,dx$.',
    long:
      'The right side must factor into a function of $x$ times a function of $y$. Then dividing by $h(y)$ and integrating both sides (the left by the [[chain-rule]] in reverse) gives an implicit solution; solve for $y$ if you can, and use the initial condition to find the constant.\n\n' +
      'One constant of integration is enough (combine the two sides\' constants). When you exponentiate, $e^{C}$ becomes a new constant $A$; allowing $A$ to be any real number also recovers lost solutions.\n\n' +
      'Pitfall: dividing by $h(y)$ silently discards **equilibrium solutions** where $h(y) = 0$. For $y\' = y(1 - y)$, the constant solutions $y = 0$ and $y = 1$ must be checked separately. Also, $y\' = x + y$ is *not* separable.',
    tex: '\\frac{dy}{dx} = g(x)\\,h(y) \\implies \\int \\frac{1}{h(y)}\\,dy = \\int g(x)\\,dx',
    see: ['differential-equation', 'exponential-model', 'logistic-model'],
  },
  {
    id: 'exponential-model',
    term: 'Exponential Model',
    aliases: ['exponential growth', 'exponential decay', 'natural growth equation'],
    course: 'calc2',
    category: 'Differential Equations',
    short:
      'A quantity whose rate of change is proportional to its size, $\\dfrac{dy}{dt} = ky$, with solution $y(t) = y_0 e^{kt}$: growth if $k > 0$, decay if $k < 0$.',
    long:
      'Bacteria with unlimited food, compound interest, radioactive decay and many cooling problems all follow "the more you have, the faster it changes." Separating variables gives $\\ln|y| = kt + C$, hence $y = y_0 e^{kt}$.\n\n' +
      'Doubling time is $\\ln 2 / k$ (for $k > 0$); half-life is $\\ln 2 / |k|$ (for $k < 0$). Newton\'s law of cooling, $T\' = k(T - T_s)$, is the exponential model applied to the *difference* $T - T_s$.\n\n' +
      'Pitfall: nothing grows exponentially forever. Real populations run out of resources, which the [[logistic-model]] accounts for. In games, exponential decay is the standard frame-rate-independent smoothing: `x = target + (x - target) * exp(-k * dt)`.',
    tex: '\\frac{dy}{dt} = ky \\implies y(t) = y_0\\, e^{kt}',
    see: ['separable-equation', 'logistic-model', 'differential-equation'],
  },
  {
    id: 'logistic-model',
    term: 'Logistic Model',
    aliases: ['logistic equation', 'logistic growth', 'Verhulst model'],
    course: 'calc2',
    category: 'Differential Equations',
    short:
      'Population growth limited by a [[carrying-capacity]] $M$: $\\dfrac{dP}{dt} = kP\\left(1 - \\dfrac{P}{M}\\right)$, with solution $P(t) = \\dfrac{M}{1 + Ae^{-kt}}$, $A = \\dfrac{M - P_0}{P_0}$.',
    long:
      'When $P$ is small, $1 - P/M \\approx 1$ and growth is nearly exponential. As $P$ nears $M$, the factor $1 - P/M$ shrinks toward 0 and growth stalls. The result is the S-shaped (sigmoid) curve.\n\n' +
      'Equilibria are $P = 0$ (unstable) and $P = M$ (stable). For $0 < P_0 < M$, growth is fastest at $P = M/2$, the inflection point. The formula comes from separating variables and [[partial-fractions]]: $\\frac{1}{P(1 - P/M)} = \\frac{1}{P} + \\frac{1}{M - P}$.\n\n' +
      'The logistic function $\\frac{1}{1 + e^{-x}}$ is the "sigmoid" used in neural networks and in game AI to turn a score into a smooth probability.',
    tex: '\\frac{dP}{dt} = kP\\left(1 - \\frac{P}{M}\\right), \\qquad P(t) = \\frac{M}{1 + A e^{-kt}}',
    see: ['carrying-capacity', 'exponential-model', 'separable-equation'],
  },
  {
    id: 'carrying-capacity',
    term: 'Carrying Capacity',
    aliases: ['capacity', 'limiting value'],
    course: 'calc2',
    category: 'Differential Equations',
    short:
      'The maximum population $M$ an environment can sustain long-term; in the [[logistic-model]] it is the stable equilibrium, and $P(t) \\to M$ as $t \\to \\infty$ for any $P_0 > 0$.',
    long:
      'Above $M$, $dP/dt < 0$ and the population shrinks; below $M$ (and above 0), it grows. Either way the population is drawn toward $M$.\n\n' +
      'You can read $M$ straight from the equation $\\frac{dP}{dt} = kP(1 - P/M)$, or as the horizontal asymptote of the solution curve. If the equation is written $\\frac{dP}{dt} = aP - bP^2$, then $M = a/b$.\n\n' +
      'Pitfall: the carrying capacity is not the population at which growth is fastest; that happens at $M/2$.',
    tex: '\\lim_{t \\to \\infty} P(t) = M',
    see: ['logistic-model', 'exponential-model'],
  },

  // ------------------------------------------------------------------
  // Parametric & Polar
  // ------------------------------------------------------------------
  {
    id: 'parametric-equations',
    term: 'Parametric Equations',
    aliases: ['parametric curve', 'parametrization'],
    course: 'calc2',
    category: 'Parametric & Polar',
    short:
      'A curve described by giving both coordinates as functions of a third variable, $x = f(t)$, $y = g(t)$, called the [[parameter]].',
    long:
      'Instead of asking "what is $y$ for this $x$?", ask "where is the point at time $t$?". This handles curves that fail the vertical line test (circles, loops) and records direction and speed of travel, not just the shape.\n\n' +
      'Calculus: $\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt}$ (where $dx/dt \\ne 0$); $\\frac{d^2y}{dx^2} = \\frac{\\frac{d}{dt}(dy/dx)}{dx/dt}$; [[arc-length-integral|arc length]] $L = \\int_\\alpha^\\beta \\sqrt{(dx/dt)^2 + (dy/dt)^2}\\,dt$; speed is $\\sqrt{(x\')^2 + (y\')^2}$.\n\n' +
      'Games are full of parametric curves: projectile paths $x = v_0 t\\cos\\theta$, $y = v_0 t\\sin\\theta - \\tfrac12 g t^2$; Bézier splines for camera rails; lerp $P(t) = (1 - t)A + tB$. Pitfall: the second derivative is **not** $\\frac{y\'\'(t)}{x\'\'(t)}$.',
    tex: '\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt}, \\qquad L = \\int_\\alpha^\\beta \\sqrt{\\left(\\frac{dx}{dt}\\right)^2 + \\left(\\frac{dy}{dt}\\right)^2}\\,dt',
    example:
      '// Projectile position at time t (parametric in t)\n' +
      'struct Vec2 { float x, y; };\n' +
      '\n' +
      'Vec2 projectile(float v0, float angle, float g, float t) {\n' +
      '    return { v0 * std::cos(angle) * t,\n' +
      '             v0 * std::sin(angle) * t - 0.5f * g * t * t };\n' +
      '}',
    exampleLang: 'cpp',
    see: ['parameter', 'polar-curve', 'arc-length-integral'],
  },
  {
    id: 'parameter',
    term: 'Parameter',
    aliases: ['parameter t'],
    course: 'calc2',
    category: 'Parametric & Polar',
    short:
      'The independent variable (often $t$ or $\\theta$) that both coordinates of a parametric curve depend on; as it varies over an interval, the point $(x(t), y(t))$ traces the curve.',
    long:
      'Think of the parameter as a clock. Each value of $t$ gives one point; the order of the points gives the curve an *orientation* (direction of travel).\n\n' +
      'The same shape can have many parametrizations: $(\\cos t, \\sin t)$ and $(\\cos 2t, \\sin 2t)$ for $0 \\le t \\le 2\\pi$ both give the unit circle, but the second goes around twice as fast (and twice). *Eliminating the parameter* (e.g. using $\\cos^2 t + \\sin^2 t = 1$) gives the Cartesian equation but loses the timing and direction.\n\n' +
      'Pitfall: when eliminating the parameter, keep track of the restricted range of $x$ and $y$; $x = t^2$ only produces $x \\ge 0$.',
    see: ['parametric-equations', 'polar-curve'],
  },
  {
    id: 'polar-curve',
    term: 'Polar Curve',
    aliases: ['polar equation', 'polar graph'],
    course: 'calc2',
    category: 'Parametric & Polar',
    short:
      'A curve given by an equation $r = f(\\theta)$ in polar coordinates, where $r$ is the signed distance from the origin and $\\theta$ the angle from the positive $x$-axis.',
    long:
      'Polar form suits shapes organised around a centre: circles $r = a$, cardioids $r = 1 + \\cos\\theta$, roses $r = \\cos(k\\theta)$, spirals $r = \\theta$. Convert with $x = r\\cos\\theta$, $y = r\\sin\\theta$, $r^2 = x^2 + y^2$.\n\n' +
      'Treating $\\theta$ as a [[parameter]]: $\\frac{dy}{dx} = \\frac{r\'\\sin\\theta + r\\cos\\theta}{r\'\\cos\\theta - r\\sin\\theta}$. Area of the region swept from $\\theta = \\alpha$ to $\\beta$: $A = \\frac12\\int_\\alpha^\\beta r^2\\,d\\theta$ (thin pie slices of area $\\tfrac12 r^2\\,d\\theta$). Arc length: $L = \\int_\\alpha^\\beta \\sqrt{r^2 + (dr/d\\theta)^2}\\,d\\theta$.\n\n' +
      'Pitfalls: a negative $r$ plots the point in the opposite direction; and a point can have many polar representations, so intersections found by solving $f(\\theta) = g(\\theta)$ can miss some (always check the origin and graph it).',
    tex: 'A = \\frac{1}{2}\\int_\\alpha^\\beta r^2\\,d\\theta, \\qquad x = r\\cos\\theta,\\; y = r\\sin\\theta',
    see: ['parametric-equations', 'parameter', 'arc-length-integral'],
  },

  // ------------------------------------------------------------------
  // Sequences
  // ------------------------------------------------------------------
  {
    id: 'limit-of-a-sequence',
    term: 'Limit of a Sequence',
    aliases: ['sequence limit', 'convergent sequence'],
    course: 'calc2',
    category: 'Sequences',
    short:
      '$\\lim_{n\\to\\infty} a_n = L$ means the terms $a_n$ get and stay arbitrarily close to $L$: for every $\\varepsilon > 0$ there is an $N$ such that $|a_n - L| < \\varepsilon$ whenever $n > N$.',
    long:
      'A sequence is a function defined only on the positive integers, so its limit works just like a [[limit-at-infinity]]. In fact, if $f(x) \\to L$ as $x \\to \\infty$ and $a_n = f(n)$, then $a_n \\to L$, which lets you use [[lhopitals-rule]] on the continuous version.\n\n' +
      'The [[limit-laws]] and the [[squeeze-theorem]] still apply. Useful facts: $r^n \\to 0$ if $|r| < 1$; $\\frac{\\ln n}{n} \\to 0$; $\\left(1 + \\frac{x}{n}\\right)^n \\to e^x$; $\\frac{x^n}{n!} \\to 0$ for every $x$; and if $|a_n| \\to 0$ then $a_n \\to 0$.\n\n' +
      'Pitfall: the converse of the continuous trick fails. $\\sin(\\pi n) = 0$ for every integer, so that sequence converges to 0 even though $\\sin(\\pi x)$ has no limit as $x \\to \\infty$.',
    tex: '\\lim_{n \\to \\infty} a_n = L \\iff \\forall \\varepsilon > 0\\; \\exists N : n > N \\implies |a_n - L| < \\varepsilon',
    see: ['convergent', 'monotonic-sequence', 'bounded-sequence', 'limit-at-infinity'],
  },
  {
    id: 'monotonic-sequence',
    term: 'Monotonic Sequence',
    aliases: ['monotone sequence', 'increasing sequence', 'decreasing sequence'],
    course: 'calc2',
    category: 'Sequences',
    short:
      'A sequence that is either always increasing ($a_n \\le a_{n+1}$ for all $n$) or always decreasing ($a_n \\ge a_{n+1}$ for all $n$).',
    long:
      'Monotonic sequences cannot wobble, so they either settle to a limit or run off to $\\pm\\infty$. That is the content of the **Monotone Convergence Theorem**: every [[bounded-sequence|bounded]], monotonic sequence converges.\n\n' +
      'To prove monotonicity, show $a_{n+1} - a_n \\ge 0$, or $\\frac{a_{n+1}}{a_n} \\ge 1$ for positive terms, or that $f\'(x) \\ge 0$ where $a_n = f(n)$. Recursively defined sequences often need induction.\n\n' +
      'This theorem is why partial sums of positive series converge exactly when they are bounded, the basis of the [[comparison-test]] and [[integral-test]]. It also underlies the [[alternating-series-test]]\'s "decreasing" hypothesis.',
    tex: '\\{a_n\\} \\text{ bounded and monotonic} \\implies \\{a_n\\} \\text{ converges}',
    see: ['bounded-sequence', 'limit-of-a-sequence', 'convergent'],
  },
  {
    id: 'bounded-sequence',
    term: 'Bounded Sequence',
    aliases: ['bounded above', 'bounded below'],
    course: 'calc2',
    category: 'Sequences',
    short:
      'A sequence for which there are numbers $m$ and $M$ with $m \\le a_n \\le M$ for every $n$ (bounded below by $m$, bounded above by $M$).',
    long:
      'Bounded means the terms are trapped in a fixed horizontal strip. Every [[convergent]] sequence is bounded, but bounded alone is not enough: $(-1)^n$ is bounded and diverges.\n\n' +
      'Bounded **and** [[monotonic-sequence|monotonic]] does guarantee convergence (Monotone Convergence Theorem). Increasing sequences only need an upper bound; decreasing ones only need a lower bound.\n\n' +
      'Pitfall: an unbounded sequence must diverge, which is a quick way to rule out convergence.',
    tex: 'm \\le a_n \\le M \\quad \\text{for all } n',
    see: ['monotonic-sequence', 'limit-of-a-sequence'],
  },

  // ------------------------------------------------------------------
  // Series
  // ------------------------------------------------------------------
  {
    id: 'infinite-series',
    term: 'Infinite Series',
    aliases: ['series'],
    course: 'calc2',
    category: 'Series Tests',
    short:
      'An infinite sum $\\sum_{n=1}^{\\infty} a_n = a_1 + a_2 + a_3 + \\cdots$, defined as the limit of its [[partial-sum|partial sums]] $s_n = a_1 + \\dots + a_n$ when that limit exists.',
    long:
      'You cannot literally add infinitely many numbers, so we add the first $n$, then let $n \\to \\infty$. If $s_n \\to S$ (finite), the series [[convergent|converges]] with sum $S$; otherwise it [[divergent|diverges]].\n\n' +
      'Sums can be found exactly only for special families ([[geometric-series|geometric]], [[telescoping-series|telescoping]], known [[taylor-series|Taylor series]]). For most series we instead ask *whether* they converge, using tests: [[divergence-test]], [[integral-test]], [[comparison-test]], [[limit-comparison-test]], [[alternating-series-test]], [[ratio-test]], [[root-test]].\n\n' +
      'Rules: convergent series can be added term by term and multiplied by constants; changing finitely many terms does not affect convergence (though it changes the sum).',
    tex: '\\sum_{n=1}^{\\infty} a_n = \\lim_{n \\to \\infty} \\sum_{k=1}^{n} a_k',
    see: ['partial-sum', 'convergent', 'divergent', 'geometric-series'],
  },
  {
    id: 'partial-sum',
    term: 'Partial Sum',
    aliases: ['nth partial sum', 'sequence of partial sums'],
    course: 'calc2',
    category: 'Series Tests',
    short:
      'The sum of the first $n$ terms of a series, $s_n = \\sum_{k=1}^{n} a_k$. The series converges exactly when the sequence $\\{s_n\\}$ converges.',
    long:
      'Partial sums turn a series question into a sequence question. A computer evaluating a series is computing partial sums in a loop and stopping when the terms get small enough.\n\n' +
      'Two different sequences are in play: the terms $\\{a_n\\}$ and the partial sums $\\{s_n\\}$. You recover the terms from the partial sums by $a_n = s_n - s_{n-1}$. The error of stopping early is the remainder $R_n = S - s_n$.\n\n' +
      'Pitfall: "the terms go to 0" ($a_n \\to 0$) is about the first sequence; "the series converges" is about the second. Only the [[divergence-test]] links them, and only in one direction.',
    tex: 's_n = a_1 + a_2 + \\cdots + a_n, \\qquad a_n = s_n - s_{n-1}',
    example:
      '// Partial sums of 1/2 + 1/4 + 1/8 + ... approach 1\n' +
      'double s = 0.0, term = 0.5;\n' +
      'for (int n = 1; n <= 20; ++n) {\n' +
      '    s += term;     // s is now the nth partial sum\n' +
      '    term *= 0.5;\n' +
      '}\n' +
      '// s == 1 - 2^-20, about 0.999999',
    exampleLang: 'cpp',
    see: ['infinite-series', 'convergent', 'sigma-notation'],
  },
  {
    id: 'geometric-series',
    term: 'Geometric Series',
    aliases: ['geometric sum'],
    course: 'calc2',
    category: 'Series Tests',
    short:
      'A series in which each term is a fixed multiple $r$ of the previous: $\\sum_{n=0}^{\\infty} ar^n = \\dfrac{a}{1 - r}$ if $|r| < 1$; it diverges if $|r| \\ge 1$ (with $a \\ne 0$).',
    long:
      'The finite sum is $s_n = a\\frac{1 - r^{n}}{1 - r}$ (for $n$ terms), found by subtracting $r s_n$ from $s_n$. When $|r| < 1$, $r^n \\to 0$ and the sum tends to $\\frac{a}{1 - r}$, i.e. "first term over one minus ratio".\n\n' +
      'Identify $a$ as the **first** term and $r$ as the ratio of consecutive terms; reindex if the sum starts at $n = 1$ or has extra factors like $\\frac{3^{n+1}}{5^n}$. Geometric series are the benchmark for the [[comparison-test]] and the reason the [[ratio-test]] works, and $\\frac{1}{1 - x} = \\sum x^n$ is the seed of most [[power-series]].\n\n' +
      'In games, a per-frame damping factor $r$ (e.g. velocity *= 0.9) produces a geometric series: total distance travelled after an impulse $v$ is $\\frac{v\\,\\Delta t}{1 - r}$.',
    tex: '\\sum_{n=0}^{\\infty} a r^n = \\frac{a}{1 - r}, \\quad |r| < 1',
    see: ['infinite-series', 'ratio-test', 'power-series', 'comparison-test'],
  },
  {
    id: 'telescoping-series',
    term: 'Telescoping Series',
    aliases: ['telescoping sum'],
    course: 'calc2',
    category: 'Series Tests',
    short:
      'A series whose partial sums collapse because consecutive terms cancel, e.g. $\\sum \\left(\\frac{1}{n} - \\frac{1}{n+1}\\right)$, where $s_n = 1 - \\frac{1}{n+1} \\to 1$.',
    long:
      'Write out the first few terms and the last one of $s_n$: the negative part of each term cancels the positive part of the next, like a collapsing telescope, leaving only the first and last pieces.\n\n' +
      'Often the cancelling form is hidden and appears after [[partial-fractions]]: $\\frac{1}{n(n+1)} = \\frac{1}{n} - \\frac{1}{n+1}$. Then $\\sum_{n=1}^{\\infty} \\frac{1}{n(n+1)} = 1$. If terms cancel with a gap of $k$, then $k$ leading pieces survive.\n\n' +
      'Pitfall: you must compute $s_n$ and take its limit; rearranging infinitely many terms to "cancel" without partial sums can give nonsense.',
    tex: '\\sum_{n=1}^{\\infty} \\left(b_n - b_{n+1}\\right) = b_1 - \\lim_{n \\to \\infty} b_{n+1}',
    see: ['partial-sum', 'partial-fractions', 'infinite-series'],
  },
  {
    id: 'harmonic-series',
    term: 'Harmonic Series',
    aliases: ['harmonic sum'],
    course: 'calc2',
    category: 'Series Tests',
    short:
      'The series $\\sum_{n=1}^{\\infty} \\frac{1}{n} = 1 + \\frac12 + \\frac13 + \\cdots$, which diverges even though its terms go to 0.',
    long:
      'Group the terms: $\\frac13 + \\frac14 > \\frac12$, $\\frac15 + \\dots + \\frac18 > \\frac12$, and so on, so you keep adding at least $\\frac12$ forever (Oresme\'s proof). The [[integral-test]] gives the same verdict, since $\\int_1^\\infty \\frac{dx}{x}$ diverges.\n\n' +
      'It is the $p = 1$ case of the [[p-series]], right on the boundary between convergence and divergence. Its partial sums grow like $\\ln n$: $H_n \\approx \\ln n + 0.5772$. The *alternating* harmonic series $\\sum \\frac{(-1)^{n-1}}{n} = \\ln 2$ converges, but only [[conditional-convergence|conditionally]].\n\n' +
      'It is the classic proof that the [[divergence-test]] cannot prove convergence. In CS it appears in analysis of quicksort and hashing: the expected costs involve $H_n = \\Theta(\\log n)$.',
    tex: '\\sum_{n=1}^{\\infty} \\frac{1}{n} = \\infty, \\qquad \\sum_{k=1}^{n} \\frac{1}{k} \\approx \\ln n + \\gamma',
    see: ['p-series', 'divergence-test', 'integral-test', 'conditional-convergence'],
  },
  {
    id: 'divergence-test',
    term: 'Divergence Test',
    aliases: ['nth-term test', 'test for divergence', 'nth term test for divergence'],
    course: 'calc2',
    category: 'Series Tests',
    short:
      'If $\\lim_{n\\to\\infty} a_n \\ne 0$ (or the limit does not exist), then $\\sum a_n$ diverges. If the limit is 0, the test says nothing.',
    long:
      'If a series converges, $a_n = s_n - s_{n-1} \\to S - S = 0$. The test is the contrapositive: terms that do not shrink to 0 cannot add to a finite total.\n\n' +
      'Always try it first; it takes seconds. For example, $\\sum \\frac{n}{2n + 1}$ diverges because the terms approach $\\frac12$.\n\n' +
      'Pitfall (the most common series mistake): $a_n \\to 0$ does **not** imply convergence. The [[harmonic-series]] has $\\frac1n \\to 0$ and diverges.',
    tex: '\\lim_{n \\to \\infty} a_n \\ne 0 \\implies \\sum a_n \\text{ diverges}',
    see: ['harmonic-series', 'infinite-series', 'divergent'],
  },
  {
    id: 'integral-test',
    term: 'Integral Test',
    aliases: ['Cauchy integral test'],
    course: 'calc2',
    category: 'Series Tests',
    short:
      'If $f$ is continuous, positive and decreasing on $[1, \\infty)$ and $a_n = f(n)$, then $\\sum_{n=1}^\\infty a_n$ and $\\int_1^\\infty f(x)\\,dx$ either both converge or both diverge.',
    long:
      'Draw rectangles of width 1 and height $a_n$. Because $f$ decreases, the rectangles sit just above or just below the curve, so the sum and the [[improper-integral]] differ by at most $a_1$: one is finite exactly when the other is.\n\n' +
      'The hypotheses only need to hold *eventually* (on some $[N, \\infty)$). The integral\'s value is **not** the series\' sum, but it bounds the remainder: $\\int_{n+1}^{\\infty} f(x)\\,dx \\le R_n \\le \\int_n^{\\infty} f(x)\\,dx$.\n\n' +
      'Use it when $f(n)$ is easy to integrate, like $\\frac{1}{n \\ln n}$ (diverges) or $n e^{-n^2}$. It proves the [[p-series]] rule.',
    tex: '\\sum_{n=1}^{\\infty} f(n) \\text{ converges} \\iff \\int_1^{\\infty} f(x)\\,dx \\text{ converges}',
    see: ['improper-integral', 'p-series', 'comparison-test'],
  },
  {
    id: 'p-series',
    term: 'p-Series',
    aliases: ['p series', 'hyperharmonic series'],
    course: 'calc2',
    category: 'Series Tests',
    short:
      'A series $\\sum_{n=1}^{\\infty} \\frac{1}{n^p}$. It converges if $p > 1$ and diverges if $p \\le 1$.',
    long:
      'By the [[integral-test]], it behaves like $\\int_1^\\infty x^{-p}\\,dx$, which converges exactly when $p > 1$. The case $p = 1$ is the [[harmonic-series]].\n\n' +
      'Together with [[geometric-series]], p-series are the standard benchmarks for the [[comparison-test]] and [[limit-comparison-test]]: for a rational-looking term, compare with $\\frac{1}{n^p}$ where $p$ = (degree of denominator) − (degree of numerator). Euler showed $\\sum \\frac{1}{n^2} = \\frac{\\pi^2}{6}$.\n\n' +
      'Pitfall: do not confuse $\\frac{1}{n^p}$ (p-series, variable base) with $\\frac{1}{p^n}$ (geometric, variable exponent). $\\sum \\frac{1}{\\sqrt n}$ has $p = \\frac12$ and diverges.',
    tex: '\\sum_{n=1}^{\\infty} \\frac{1}{n^p} \\;\\begin{cases} \\text{converges} & p > 1 \\\\ \\text{diverges} & p \\le 1 \\end{cases}',
    see: ['harmonic-series', 'integral-test', 'comparison-test', 'geometric-series'],
  },
  {
    id: 'comparison-test',
    term: 'Comparison Test',
    aliases: ['direct comparison test', 'basic comparison test'],
    course: 'calc2',
    category: 'Series Tests',
    short:
      'For series with $0 \\le a_n \\le b_n$: if $\\sum b_n$ converges then $\\sum a_n$ converges; if $\\sum a_n$ diverges then $\\sum b_n$ diverges.',
    long:
      'Partial sums of nonnegative series only increase, so they converge exactly when they are bounded. A smaller series under a finite total is bounded; a bigger series over an infinite total is not.\n\n' +
      'Hypotheses: terms nonnegative, and the inequality holds for all $n$ beyond some $N$. Compare to a [[p-series]] or [[geometric-series]]: $\\frac{1}{n^2 + 5} \\le \\frac{1}{n^2}$, so it converges.\n\n' +
      'Pitfall: the inequality has to point the useful way. Smaller than a divergent series, or bigger than a convergent one, tells you nothing; e.g. $\\frac{1}{n^2 - 1}$ is bigger than $\\frac{1}{n^2}$. In that case use the [[limit-comparison-test]].',
    tex: '0 \\le a_n \\le b_n:\\quad \\sum b_n < \\infty \\implies \\sum a_n < \\infty',
    see: ['limit-comparison-test', 'p-series', 'geometric-series'],
  },
  {
    id: 'limit-comparison-test',
    term: 'Limit Comparison Test',
    aliases: ['LCT'],
    course: 'calc2',
    category: 'Series Tests',
    short:
      'If $a_n > 0$, $b_n > 0$ and $\\lim_{n\\to\\infty} \\frac{a_n}{b_n} = c$ with $0 < c < \\infty$, then $\\sum a_n$ and $\\sum b_n$ both converge or both diverge.',
    long:
      'If the ratio tends to a positive finite $c$, then for large $n$, $a_n \\approx c\\,b_n$: the two series have the same long-run size, so they share their fate. No inequality juggling is needed.\n\n' +
      'Choose $b_n$ by keeping only dominant terms: for $\\frac{3n^2 + 1}{n^4 - n}$ use $b_n = \\frac{1}{n^2}$. If $c = 0$ and $\\sum b_n$ converges, $\\sum a_n$ converges; if $c = \\infty$ and $\\sum b_n$ diverges, $\\sum a_n$ diverges (other combinations are inconclusive).\n\n' +
      'Pitfall: the test requires positive terms; for series with mixed signs, apply it to $\\sum |a_n|$ to test [[absolute-convergence]].',
    tex: '\\lim_{n \\to \\infty} \\frac{a_n}{b_n} = c,\\; 0 < c < \\infty \\implies \\text{same behaviour}',
    see: ['comparison-test', 'p-series', 'absolute-convergence'],
  },
  {
    id: 'alternating-series',
    term: 'Alternating Series',
    aliases: [],
    course: 'calc2',
    category: 'Series Tests',
    short:
      'A series whose terms alternate in sign, written $\\sum (-1)^{n-1} b_n$ or $\\sum (-1)^n b_n$ with $b_n > 0$.',
    long:
      'Signs that flip let terms partially cancel, so an alternating series can converge even when $\\sum b_n$ diverges, like the alternating harmonic series $1 - \\frac12 + \\frac13 - \\cdots = \\ln 2$.\n\n' +
      'The main tool is the [[alternating-series-test]], which also gives a very simple error bound. Many [[taylor-series]] are alternating, e.g. those for $\\sin x$, $\\cos x$ and $\\ln(1 + x)$.\n\n' +
      'Pitfall: $(-1)^n$, $(-1)^{n+1}$ and $\\cos(n\\pi)$ all produce alternation. A series with an irregular sign pattern (like $\\sum \\frac{\\sin n}{n^2}$) is not alternating; test it for [[absolute-convergence]] instead.',
    tex: '\\sum_{n=1}^{\\infty} (-1)^{n-1} b_n = b_1 - b_2 + b_3 - \\cdots, \\quad b_n > 0',
    see: ['alternating-series-test', 'conditional-convergence', 'absolute-convergence'],
  },
  {
    id: 'alternating-series-test',
    term: 'Alternating Series Test',
    aliases: ['AST', 'Leibniz test', 'Leibniz criterion'],
    course: 'calc2',
    category: 'Series Tests',
    short:
      'If $b_n > 0$, $b_{n+1} \\le b_n$ (eventually) and $\\lim b_n = 0$, then $\\sum (-1)^{n-1} b_n$ converges, and the error after $n$ terms satisfies $|R_n| \\le b_{n+1}$.',
    long:
      'The partial sums zig-zag: up $b_1$, down $b_2$, up $b_3$… Because the steps shrink, each swing overshoots less, and the partial sums are squeezed toward a limit. The even and odd partial sums are both [[monotonic-sequence|monotonic]] and bounded.\n\n' +
      'The **Alternating Series Estimation Theorem**: the true sum lies between any two consecutive partial sums, so the error is at most the first omitted term, $|S - s_n| \\le b_{n+1}$. This is how you decide how many terms of $\\sin x$ a calculator needs.\n\n' +
      'Pitfalls: the test cannot prove divergence (if $b_n \\not\\to 0$, use the [[divergence-test]]); and passing it does not mean [[absolute-convergence]]. Check "decreasing" honestly; it can fail for small $n$ and only hold eventually.',
    tex: 'b_n > 0,\\; b_{n+1} \\le b_n,\\; b_n \\to 0 \\implies \\sum (-1)^{n-1} b_n \\text{ converges},\\; |R_n| \\le b_{n+1}',
    see: ['alternating-series', 'conditional-convergence', 'divergence-test'],
  },
  {
    id: 'absolute-convergence',
    term: 'Absolute Convergence',
    aliases: ['absolutely convergent'],
    course: 'calc2',
    category: 'Series Tests',
    short:
      'A series $\\sum a_n$ is absolutely convergent if $\\sum |a_n|$ converges. Absolute convergence implies convergence.',
    long:
      'If the series converges even after every term is made positive, the signs are not doing any of the work. Since $0 \\le a_n + |a_n| \\le 2|a_n|$, the [[comparison-test]] proves $\\sum a_n$ converges.\n\n' +
      'It lets you use positive-term tests ([[comparison-test]], [[limit-comparison-test]], [[integral-test]]) on series with any sign pattern: e.g. $\\left|\\frac{\\sin n}{n^2}\\right| \\le \\frac{1}{n^2}$. The [[ratio-test]] and [[root-test]] conclude absolute convergence directly.\n\n' +
      'Why it matters: absolutely convergent series behave like finite sums. They can be rearranged and multiplied freely without changing the sum, unlike [[conditional-convergence|conditionally convergent]] ones.',
    tex: '\\sum |a_n| \\text{ converges} \\implies \\sum a_n \\text{ converges}',
    see: ['conditional-convergence', 'ratio-test', 'alternating-series'],
  },
  {
    id: 'conditional-convergence',
    term: 'Conditional Convergence',
    aliases: ['conditionally convergent'],
    course: 'calc2',
    category: 'Series Tests',
    short:
      'A series converges conditionally if $\\sum a_n$ converges but $\\sum |a_n|$ diverges. Example: $\\sum \\frac{(-1)^{n-1}}{n}$.',
    long:
      'The convergence depends entirely on the cancellation between positive and negative terms. The positive terms alone sum to $\\infty$, and so do the negative terms.\n\n' +
      'To classify a series: test $\\sum |a_n|$ first. If it converges, the series is [[absolute-convergence|absolutely convergent]]. If not, test the original (usually with the [[alternating-series-test]]): convergent means conditional, otherwise divergent.\n\n' +
      'Riemann\'s rearrangement theorem: the terms of a conditionally convergent series can be reordered to sum to **any** real number you like, or to diverge. Order matters here, a reminder that infinite sums are limits and not just big additions.',
    tex: '\\sum a_n \\text{ converges},\\quad \\sum |a_n| = \\infty',
    see: ['absolute-convergence', 'alternating-series-test', 'harmonic-series'],
  },
  {
    id: 'ratio-test',
    term: 'Ratio Test',
    aliases: ["d'Alembert's ratio test"],
    course: 'calc2',
    category: 'Series Tests',
    short:
      'Let $L = \\lim_{n\\to\\infty} \\left|\\frac{a_{n+1}}{a_n}\\right|$. If $L < 1$ the series converges absolutely; if $L > 1$ (or $L = \\infty$) it diverges; if $L = 1$ the test is inconclusive.',
    long:
      'If successive terms eventually shrink by a factor close to $L < 1$, the series behaves like a [[geometric-series]] with ratio $L$, which converges. If $L > 1$, terms grow, so they cannot tend to 0.\n\n' +
      'It is the go-to test for factorials and exponentials ($\\frac{n!}{3^n}$, $\\frac{2^n}{n^3}$), because $\\frac{(n+1)!}{n!} = n + 1$ simplifies cleanly. It is also the main tool for finding the [[radius-of-convergence]] of a [[power-series]].\n\n' +
      'Pitfall: $L = 1$ for every [[p-series]] and every rational function of $n$, both convergent and divergent ones, so the ratio test cannot decide them. Use comparison tests instead.',
    tex: 'L = \\lim_{n \\to \\infty} \\left| \\frac{a_{n+1}}{a_n} \\right| \\;\\begin{cases} L < 1 & \\text{abs. convergent} \\\\ L > 1 & \\text{divergent} \\\\ L = 1 & \\text{inconclusive} \\end{cases}',
    see: ['root-test', 'radius-of-convergence', 'absolute-convergence', 'geometric-series'],
  },
  {
    id: 'root-test',
    term: 'Root Test',
    aliases: ["Cauchy's root test", 'nth root test'],
    course: 'calc2',
    category: 'Series Tests',
    short:
      'Let $L = \\lim_{n\\to\\infty} \\sqrt[n]{|a_n|}$. If $L < 1$ the series converges absolutely; if $L > 1$ (or $\\infty$) it diverges; if $L = 1$ the test is inconclusive.',
    long:
      'Same geometric-series idea as the [[ratio-test]], but measuring the average shrink factor per term by taking an $n$th root.\n\n' +
      'Use it when the whole term is raised to the $n$th power, e.g. $\\left(\\frac{2n + 3}{3n + 2}\\right)^n$, whose $n$th root is $\\frac{2n+3}{3n+2} \\to \\frac23 < 1$. Handy limits: $\\sqrt[n]{n} \\to 1$ and $\\sqrt[n]{c} \\to 1$ for $c > 0$.\n\n' +
      'Pitfall: as with the ratio test, $L = 1$ tells you nothing. When both tests apply they give the same $L$.',
    tex: 'L = \\lim_{n \\to \\infty} \\sqrt[n]{|a_n|}',
    see: ['ratio-test', 'absolute-convergence'],
  },

  // ------------------------------------------------------------------
  // Power Series
  // ------------------------------------------------------------------
  {
    id: 'power-series',
    term: 'Power Series',
    aliases: [],
    course: 'calc2',
    category: 'Power Series',
    short:
      'A series of the form $\\sum_{n=0}^{\\infty} c_n (x - a)^n$, an "infinite polynomial" in $x$ centred at $a$. It defines a function on the set of $x$ where it converges.',
    long:
      'Each choice of $x$ gives a numerical series. Such a series always converges at its centre $x = a$, and converges on an interval centred at $a$ described by the [[radius-of-convergence]] and [[interval-of-convergence]].\n\n' +
      'Inside the interval (excluding endpoints), a power series can be differentiated and integrated term by term, and the new series have the same radius. Starting from $\\frac{1}{1 - x} = \\sum x^n$ ($|x| < 1$), substitution, differentiation and integration produce series for $\\ln(1 + x)$, $\\arctan x$ and more.\n\n' +
      'Why it matters: power series are how functions like $\\sin$, $e^x$ and $\\ln$ are actually evaluated, and how physicists build approximations. See [[taylor-series]].',
    tex: '\\sum_{n=0}^{\\infty} c_n (x - a)^n = c_0 + c_1(x - a) + c_2(x - a)^2 + \\cdots',
    see: ['radius-of-convergence', 'interval-of-convergence', 'taylor-series', 'geometric-series'],
  },
  {
    id: 'radius-of-convergence',
    term: 'Radius of Convergence',
    aliases: ['radius'],
    course: 'calc2',
    category: 'Power Series',
    short:
      'The number $R$ ($0 \\le R \\le \\infty$) such that $\\sum c_n (x - a)^n$ converges absolutely for $|x - a| < R$ and diverges for $|x - a| > R$.',
    long:
      'Every power series has exactly one of three behaviours: converges only at $x = a$ ($R = 0$), converges for all $x$ ($R = \\infty$), or converges inside a radius $R$ and diverges outside.\n\n' +
      'Find $R$ with the [[ratio-test]]: compute $\\lim \\left|\\frac{a_{n+1}}{a_n}\\right|$ as an expression in $x$, and solve "$< 1$". If $\\lim \\left|\\frac{c_{n+1}}{c_n}\\right| = \\ell$, then $R = 1/\\ell$ (with $R = \\infty$ if $\\ell = 0$).\n\n' +
      'Pitfall: the radius says nothing about the endpoints $x = a \\pm R$; they must be tested separately to find the [[interval-of-convergence]].',
    tex: 'R = \\lim_{n \\to \\infty} \\left| \\frac{c_n}{c_{n+1}} \\right| \\quad (\\text{when the limit exists})',
    see: ['interval-of-convergence', 'power-series', 'ratio-test'],
  },
  {
    id: 'interval-of-convergence',
    term: 'Interval of Convergence',
    aliases: [],
    course: 'calc2',
    category: 'Power Series',
    short:
      'The set of all $x$ for which a power series converges: an interval centred at $a$ with radius $R$, which may or may not include each endpoint.',
    long:
      'After finding the [[radius-of-convergence]] $R$, the interval is one of $(a - R, a + R)$, $[a - R, a + R)$, $(a - R, a + R]$ or $[a - R, a + R]$ (or just $\\{a\\}$, or all of $\\mathbb{R}$).\n\n' +
      'At each endpoint, substitute that $x$ and test the resulting numerical series with any other test ([[p-series]], [[alternating-series-test]], [[divergence-test]]). The [[ratio-test]] always gives $L = 1$ there, so it cannot help. Example: $\\sum \\frac{x^n}{n}$ has interval $[-1, 1)$.\n\n' +
      'Pitfall: differentiating or integrating term by term keeps $R$ but can change endpoint behaviour, so recheck the endpoints.',
    tex: '\\sum_{n=1}^{\\infty} \\frac{x^n}{n}: \\quad R = 1,\\; I = [-1, 1)',
    see: ['radius-of-convergence', 'power-series'],
  },
  {
    id: 'taylor-series',
    term: 'Taylor Series',
    aliases: ['Taylor expansion'],
    course: 'calc2',
    category: 'Power Series',
    short:
      'The power series of $f$ centred at $a$ built from its derivatives: $\\sum_{n=0}^{\\infty} \\frac{f^{(n)}(a)}{n!}(x - a)^n$. When it converges to $f$, it represents $f$ as an infinite polynomial.',
    long:
      'If $f$ equals some power series near $a$, the coefficients are forced: differentiating $n$ times and setting $x = a$ gives $c_n = \\frac{f^{(n)}(a)}{n!}$. So a smooth function\'s entire behaviour near $a$ is encoded in its derivatives at one point.\n\n' +
      'The series equals $f(x)$ exactly when the remainder $R_n(x) = f(x) - T_n(x) \\to 0$, which is usually shown with [[taylors-inequality]]. This holds for $e^x$, $\\sin x$, $\\cos x$ everywhere. Centred at $a = 0$ it is called a [[maclaurin-series]].\n\n' +
      'Why it matters: computers evaluate $\\sin$, $\\exp$ and $\\ln$ by reducing the argument to a small range and then using a polynomial derived from (or tuned beyond) the Taylor series. Physics uses the first terms everywhere, e.g. $\\sin\\theta \\approx \\theta$ for a pendulum.',
    tex: 'f(x) = \\sum_{n=0}^{\\infty} \\frac{f^{(n)}(a)}{n!}(x - a)^n',
    see: ['maclaurin-series', 'taylor-polynomial', 'taylors-inequality', 'power-series'],
  },
  {
    id: 'maclaurin-series',
    term: 'Maclaurin Series',
    aliases: [],
    course: 'calc2',
    category: 'Power Series',
    short:
      'A [[taylor-series]] centred at $a = 0$: $f(x) = \\sum_{n=0}^{\\infty} \\frac{f^{(n)}(0)}{n!} x^n$.',
    long:
      'The most-used examples, all worth memorising: $e^x = \\sum \\frac{x^n}{n!}$, $\\sin x = \\sum \\frac{(-1)^n x^{2n+1}}{(2n+1)!}$, $\\cos x = \\sum \\frac{(-1)^n x^{2n}}{(2n)!}$ (all $x$); $\\frac{1}{1 - x} = \\sum x^n$, $\\ln(1 + x) = \\sum_{n \\ge 1} \\frac{(-1)^{n-1}x^n}{n}$, $\\arctan x = \\sum \\frac{(-1)^n x^{2n+1}}{2n+1}$ (for $|x| < 1$, with endpoint details).\n\n' +
      'Build new series from known ones instead of differentiating repeatedly: substitute ($e^{-x^2} = \\sum \\frac{(-1)^n x^{2n}}{n!}$), multiply by powers of $x$, differentiate or integrate term by term.\n\n' +
      'Pitfall: a series centred at 0 is only useful near 0. For $\\ln x$ there is no Maclaurin series at all ($\\ln 0$ is undefined), so expand $\\ln(1 + x)$ or centre at $a = 1$.',
    tex: 'e^x = \\sum_{n=0}^{\\infty} \\frac{x^n}{n!}, \\quad \\sin x = \\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{2n+1}}{(2n+1)!}',
    see: ['taylor-series', 'taylor-polynomial', 'power-series'],
  },
  {
    id: 'taylor-polynomial',
    term: 'Taylor Polynomial',
    aliases: ['nth-degree Taylor polynomial'],
    course: 'calc2',
    category: 'Power Series',
    short:
      'The partial sum $T_n(x) = \\sum_{k=0}^{n} \\frac{f^{(k)}(a)}{k!}(x - a)^k$ of a Taylor series: the degree-$n$ polynomial that matches $f$ and its first $n$ derivatives at $a$.',
    long:
      '$T_1$ is the tangent-line [[linearization]]; $T_2$ also matches concavity; each higher degree hugs the curve over a wider stretch near $a$.\n\n' +
      'The error is the remainder $R_n(x) = f(x) - T_n(x)$, bounded by [[taylors-inequality]] or, for alternating series, by the first omitted term. Taylor\'s theorem gives the exact form $R_n(x) = \\frac{f^{(n+1)}(z)}{(n+1)!}(x - a)^{n+1}$ for some $z$ between $a$ and $x$.\n\n' +
      'Game math uses low-degree Taylor polynomials constantly: $\\sin x \\approx x - \\frac{x^3}{6}$ for small angles, $\\cos x \\approx 1 - \\frac{x^2}{2}$, and fast approximations of $e^x$ in shaders. Evaluate them with Horner\'s rule for speed.',
    tex: 'T_n(x) = \\sum_{k=0}^{n} \\frac{f^{(k)}(a)}{k!}(x - a)^k',
    example:
      '// sin(x) via its degree-7 Taylor polynomial (good for |x| <= pi/2)\n' +
      '// x - x^3/3! + x^5/5! - x^7/7!, evaluated with Horner\'s rule\n' +
      'double sin_taylor(double x) {\n' +
      '    double x2 = x * x;\n' +
      '    return x * (1.0 - x2 / 6.0 * (1.0 - x2 / 20.0 * (1.0 - x2 / 42.0)));\n' +
      '}\n' +
      '// Error <= (pi/2)^9 / 9! < 0.00017 by the alternating series bound',
    exampleLang: 'cpp',
    see: ['taylor-series', 'taylors-inequality', 'linearization', 'maclaurin-series'],
  },
  {
    id: 'taylors-inequality',
    term: "Taylor's Inequality",
    aliases: ['Taylor remainder estimate', 'Lagrange error bound'],
    course: 'calc2',
    category: 'Power Series',
    short:
      'If $|f^{(n+1)}(x)| \\le M$ for $|x - a| \\le d$, then the Taylor remainder satisfies $|R_n(x)| \\le \\frac{M}{(n+1)!}|x - a|^{n+1}$ for $|x - a| \\le d$.',
    long:
      'It turns "the polynomial is close" into a guaranteed number. You need a bound $M$ on the **next** derivative, the $(n+1)$st, over the whole interval between $a$ and $x$.\n\n' +
      'Two uses: (1) how accurate is $T_n$? (2) how large must $n$ be to reach a tolerance? It also proves Taylor series converge to their functions: for $\\sin x$, every derivative is bounded by $M = 1$, and $\\frac{|x|^{n+1}}{(n+1)!} \\to 0$ for every $x$, so $R_n \\to 0$.\n\n' +
      'Pitfall: bound $f^{(n+1)}$ on the whole interval, not just at $a$. For $e^x$ on $[0, 1]$, use $M = e$ (or 3), not $M = e^0 = 1$.',
    tex: '|R_n(x)| \\le \\frac{M}{(n+1)!}\\,|x - a|^{n+1}',
    see: ['taylor-polynomial', 'taylor-series', 'alternating-series-test'],
  },
];
