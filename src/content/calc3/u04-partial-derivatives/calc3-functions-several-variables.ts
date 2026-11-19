import type { Lesson } from '../../types';

// Terrain used throughout: two Gaussian hills (heights in hundreds of meters).
const HILLS = '3e^(-((x - 1)^2 + (y + 0.5)^2)) + 2e^(-((x + 1)^2 + (y - 1)^2)/0.7)';
const hillsAt = (x: string, y: string) => `3e^(-((${x} - 1)^2 + (${y} + 0.5)^2)) + 2e^(-((${x} + 1)^2 + (${y} - 1)^2)/0.7)`;

export const lesson: Lesson = {
  id: 'calc3-functions-several-variables',
  title: 'Functions of Several Variables',
  summary: 'Functions whose input is a point in the plane or in space: their domains, their graphs as surfaces, contour maps of level curves (terrain maps and heightmaps), and level surfaces in 3D.',
  minutes: 18,
  objectives: [
    'Find and sketch the domain and range of a function of two variables',
    'Interpret the graph $z = f(x, y)$ as a surface and read vertical slices of it',
    'Draw and read contour maps: level curves, contour spacing and steepness',
    'Treat terrain as a heightmap $h(x, y)$ and test line of sight in code',
    'Describe level surfaces of functions of three variables, including signed distance functions',
  ],
  steps: [
    // 1 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Functions with two inputs',
      blocks: [
        {
          type: 'p',
          text: 'The temperature on a metal plate depends on *where* you measure it: two numbers $x$ and $y$ go in, one number comes out. So does the height of terrain on a map, the brightness of a pixel in an image, or the loss of a neural network with two weights. Each is a [[calc3-function-two-variables|function of two variables]].',
        },
        {
          type: 'definition',
          term: 'Function of two variables',
          text: 'A rule $f$ that assigns to each ordered pair $(x, y)$ in a set $D \\subseteq \\mathbb{R}^2$ exactly one real number $f(x, y)$. $D$ is the **domain**; the set of values $f$ takes is the **range**. Writing $z = f(x, y)$, $x$ and $y$ are the independent variables and $z$ the dependent variable.',
        },
        {
          type: 'p',
          text: 'When a formula is given without a domain, the domain is every point where the formula makes sense, the same convention as the [[domain]] in single-variable calculus. Now, though, the domain is a **region of the plane**, often bounded by a curve, and it is worth sketching.',
        },
        {
          type: 'derivation',
          title: 'Domains and ranges of two functions',
          steps: [
            { tex: 'f(x, y) = \\sqrt{9 - x^2 - y^2}: \\quad 9 - x^2 - y^2 \\ge 0 \\iff x^2 + y^2 \\le 9', why: 'A square root needs a nonnegative radicand. The domain is the closed disk of radius $3$ centered at the origin.' },
            { tex: '0 \\le \\sqrt{9 - x^2 - y^2} \\le 3', why: 'The radicand runs from $9$ (at the origin) down to $0$ (on the circle), so the range is $[0, 3]$.' },
            { tex: 'g(x, y) = \\ln(y - x^2): \\quad y - x^2 > 0 \\iff y > x^2', why: 'The logarithm needs a positive input. The domain is the region strictly above the parabola $y = x^2$; the parabola itself is excluded.' },
            { tex: '\\text{range of } g = (-\\infty, \\infty)', why: '$y - x^2$ takes every positive value, and $\\ln$ maps $(0, \\infty)$ onto all real numbers.' },
          ],
        },
        {
          type: 'graph',
          x: [-2.5, 2.5],
          y: [-1, 5],
          equal: true,
          functions: [{ expr: 'x^2', label: 'boundary $y = x^2$ (excluded)', color: 'red', dashed: true }],
          areas: [{ expr: '5', expr2: 'x^2', from: -2.24, to: 2.24, color: 'blue' }],
          points: [
            { x: 0, y: 2, label: '(0, 2): g = ln 2' },
            { x: -1.5, y: 1, label: '(−1.5, 1): undefined', open: true, color: 'red' },
          ],
          caption: 'The domain of $g(x, y) = \\ln(y - x^2)$ is the shaded region above the parabola. The dashed boundary is not included, because $\\ln 0$ is undefined.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Heightmaps',
          text: 'Game terrain is usually a **heightmap**: a 2D array of heights, often stored as a grayscale image, so `height[i][j]` is a function of two (integer) variables. The engine interpolates between grid samples to get a smooth $h(x, y)$ for any position, then builds the terrain mesh, places units on the ground and tests line of sight from it. Everything in this lesson applies directly.',
        },
      ],
    },
    // 2
    {
      kind: 'mcq',
      prompt: 'What is the domain of $f(x, y) = \\dfrac{\\sqrt{x + y}}{x - 1}$?',
      options: [
        { text: '$\\{(x, y) : x + y \\ge 0\\}$', why: 'This ignores the denominator, which is zero on the line $x = 1$.' },
        { text: '$\\{(x, y) : x + y \\ge 0 \\text{ and } x \\ne 1\\}$', correct: true, why: 'The half-plane on or above the line $y = -x$, with the vertical line $x = 1$ removed.' },
        { text: '$\\{(x, y) : x + y > 0 \\text{ and } x \\ne 1\\}$', why: '$\\sqrt{0} = 0$ is fine, so points with $x + y = 0$ (other than $(1, -1)$) belong to the domain.' },
        { text: '$\\{(x, y) : x \\ge -y \\text{ and } y \\ne 1\\}$', why: 'The denominator involves $x$, not $y$: it is the line $x = 1$ that must be removed.' },
      ],
      explanation: 'Two conditions: the radicand must be nonnegative, $x + y \\ge 0$ (the closed half-plane above the line $y = -x$), and the denominator must be nonzero, $x \\ne 1$. The domain is that half-plane with the line $x = 1$ deleted.',
    },
    // 3 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Graphs are surfaces',
      blocks: [
        {
          type: 'p',
          text: 'A function of one variable has a graph that is a curve in the plane. A function of two variables needs a third axis for its output: its **graph** is the set of points $(x, y, f(x, y))$ in space, a **surface** hovering over the domain. Above each input point $(x, y)$ the surface sits at height $f(x, y)$.',
        },
        {
          type: 'plot3d',
          x: [-3.2, 3.2],
          y: [-3.2, 3.2],
          z: [0, 3.5],
          equal: true,
          parametricSurfaces: [{ x: 'u*cos(v)', y: 'u*sin(v)', z: 'sqrt(9 - u^2)', u: [0, 3], v: [0, '2pi'], color: 'blue', opacity: 0.8, label: '$z = \\sqrt{9 - x^2 - y^2}$' },
            { x: 'u*cos(v)', y: 'u*sin(v)', z: '0', u: [0, 3], v: [0, '2pi'], color: 'gray', opacity: 0.35, label: 'domain $x^2 + y^2 \\le 9$' },
          ],
          view: { azimuth: 30, elevation: 20 },
          caption: 'The graph of $f(x, y) = \\sqrt{9 - x^2 - y^2}$: squaring $z = \\sqrt{9 - x^2 - y^2}$ gives $x^2 + y^2 + z^2 = 9$ with $z \\ge 0$, the upper hemisphere of radius $3$. It sits exactly over the domain disk.',
        },
        {
          type: 'p',
          text: 'Other familiar graphs: $z = 6 - 3x - 2y$ is a plane; $z = x^2 + y^2$ is a paraboloid (a bowl); $z = \\sqrt{x^2 + y^2}$ is a cone; $z = y^2 - x^2$ is a saddle. You met these as quadric surfaces. Most functions are not quadrics, though, and the way to understand an unfamiliar surface is to **slice** it.',
        },
        {
          type: 'p',
          text: 'Fix $y = b$ and you get a function of $x$ alone, whose graph is the curve where the vertical plane $y = b$ cuts the surface (a **trace**). Drag $b$ to sweep the slicing plane across this terrain of two hills:',
        },
        {
          type: 'plot3d',
          x: [-3, 3],
          y: [-3, 3],
          z: [0, 3.5],
          surfaces: [{ expr: HILLS, color: 'green', opacity: 0.75, label: 'terrain $z = h(x, y)$' }],
          parametricSurfaces: [{ x: 'u', y: 'b', z: 'v', u: [-3, 3], v: [0, 3.5], color: 'gray', opacity: 0.18 }],
          curves: [{ x: 't', y: 'b', z: hillsAt('t', 'b'), t: [-3, 3], color: 'red', label: 'trace $z = h(x, b)$' }],
          sliders: [{ name: 'b', min: -3, max: 3, step: 0.05, value: -0.5, label: 'slice $y = b$', play: true }],
          resolution: 36,
          view: { azimuth: 25, elevation: 22 },
          caption: 'Each slice $y = b$ is an ordinary single-variable graph. Sweep $b$ (or press ▶) and watch the red profile rise over the hills and fall away. The next lessons measure the slope of these slices: that slope is a partial derivative.',
        },
        {
          type: 'callout',
          variant: 'tip',
          text: 'To sketch a surface by hand, draw a few traces in each direction (fix $x$, fix $y$) and a few horizontal slices (fix $z$). Your brain assembles the wireframe into a surface, just as a 3D engine draws a mesh from grid lines.',
        },
      ],
    },
    // 4
    {
      kind: 'mcq',
      prompt: 'Which function has the upper half of a circular cone as its graph?',
      options: [
        { text: '$f(x, y) = x^2 + y^2$', why: 'This is a paraboloid: its height grows like the *square* of the distance from the $z$-axis, so its sides curve upward.' },
        { text: '$f(x, y) = \\sqrt{1 - x^2 - y^2}$', why: 'This is the upper unit hemisphere.' },
        { text: '$f(x, y) = \\sqrt{x^2 + y^2}$', correct: true, why: 'The height equals the distance from the $z$-axis, so every vertical slice through the axis is a pair of straight lines at $45^\\circ$: a cone.' },
        { text: '$f(x, y) = 1 - x - y$', why: 'A linear function of $x$ and $y$ has a plane as its graph.' },
      ],
      explanation: '$\\sqrt{x^2 + y^2} = r$ is the distance from $(x, y)$ to the origin, so $z = r$: the height grows linearly with distance. Slicing with the plane $y = 0$ gives $z = |x|$, a V shape, which is the profile of a cone. Squaring gives $z^2 = x^2 + y^2$ with $z \\ge 0$.',
    },
    // 5 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Level curves and contour maps',
      blocks: [
        {
          type: 'p',
          text: 'A hiking map is flat, yet it shows mountains. It does this with **contour lines**: each line joins points of equal elevation. Mathematically, slice the surface with the horizontal plane $z = k$ and drop the cut onto the $xy$-plane.',
        },
        {
          type: 'definition',
          term: 'Level curve',
          text: 'The [[calc3-level-curve|level curve]] of $f$ at height $k$ is the set of points $(x, y)$ in the domain with $f(x, y) = k$. A collection of level curves for equally spaced values of $k$ is a **[[calc3-contour-map|contour map]]**.',
        },
        {
          type: 'plot3d',
          x: [-3, 3],
          y: [-3, 3],
          z: [0, 3.5],
          surfaces: [
            { expr: HILLS, color: 'green', opacity: 0.7, label: 'terrain' },
            { expr: 'k', color: 'orange', opacity: 0.3, label: 'plane $z = k$' },
          ],
          contours: ['k', 0.5, 1, 1.5, 2, 2.5],
          sliders: [{ name: 'k', min: 0.2, max: 3, step: 0.05, value: 1.2, label: 'height $k$', play: true }],
          resolution: 36,
          view: { azimuth: 25, elevation: 30 },
          caption: 'The orange plane $z = k$ cuts the terrain; the purple curves on the floor are level curves at $k$ and at heights $0.5, 1, \\dots, 2.5$. Raise $k$: the cut splits into two loops (one around each summit) and finally shrinks around the higher peak.',
        },
        {
          type: 'graph',
          x: [-3, 3],
          y: [-3, 3],
          equal: true,
          implicit: [
            { expr: HILLS, levels: [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 2.25, 2.5, 2.75], color: 'purple' },
            { expr: HILLS, levels: [0.7772], color: 'orange', dashed: true, label: 'contour through the pass' },
          ],
          points: [
            { x: 1, y: -0.5, label: 'summit (≈3.0)' },
            { x: -1, y: 1, label: 'summit (≈2.0)' },
            { x: -0.131, y: 0.348, label: 'pass (≈0.78)', color: 'orange' },
          ],
          caption: 'The same terrain as a contour map (interval $0.25$). Contours bunch together on steep slopes and spread apart on gentle ones. Between the summits they pinch into a waist: a **saddle** (a mountain pass). The dashed contour at exactly the pass height crosses itself in a figure-eight.',
        },
        {
          type: 'table',
          headers: ['Function', 'Level curve $f = k$', 'Shape'],
          rows: [
            ['$6 - 3x - 2y$', '$3x + 2y = 6 - k$', 'parallel lines, equally spaced: a plane'],
            ['$x^2 + y^2$', '$x^2 + y^2 = k$', 'circles of radius $\\sqrt k$, closer together as $k$ grows: the bowl steepens'],
            ['$\\sqrt{x^2 + y^2}$', '$x^2 + y^2 = k^2$', 'circles of radius $k$, equally spaced: a cone has constant slope'],
            ['$y^2 - x^2$', '$y^2 - x^2 = k$', 'hyperbolas, crossing lines at $k = 0$: a saddle'],
          ],
          caption: 'Reading contours. Same level curve shapes can come from different surfaces: the paraboloid and the cone both have circles, but the spacing tells them apart.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why close contours mean steep ground',
          text: 'Between two neighboring contours the height changes by the same amount, the contour interval $\\Delta k$. If the horizontal distance between them is $d$, the average slope across that gap is about $\\Delta k / d$. Halve the gap and you double the slope. A cliff on a topo map is where the lines merge.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Land navigation',
          text: 'Military and civilian topographic maps print contours at a fixed interval (often 10 or 20 m) with every fifth one bold (an index contour). Hilltops are small closed loops, valleys show as contours bending into a V pointing uphill, and saddles appear exactly as in the map above. Reading terrain from contours is reading level curves of the elevation function.',
        },
      ],
    },
    // 6
    {
      kind: 'numeric',
      prompt: 'For $f(x, y) = x^2 + 4y^2$, the level curve $f(x, y) = 16$ is an ellipse. At what positive value of $y$ does it cross the $y$-axis?',
      hint: 'On the $y$-axis, $x = 0$.',
      label: '$y =$',
      answer: '2',
      explanation: 'With $x = 0$: $4y^2 = 16$, so $y = 2$. Dividing by $16$, the ellipse is $\\frac{x^2}{16} + \\frac{y^2}{4} = 1$, with semi-axes $4$ along $x$ and $2$ along $y$. All level curves of this $f$ are ellipses twice as wide as they are tall, so the surface rises twice as fast in the $y$-direction.',
    },
    // 7
    {
      kind: 'mcq',
      prompt: 'Here is a contour map of $f(x, y) = x^2 + 4y^2$ with levels $1, 2, \\dots, 9$. At which marked point is the surface steepest?',
      graph: {
        type: 'graph',
        x: [-3.5, 3.5],
        y: [-2, 2],
        equal: true,
        implicit: [{ expr: 'x^2 + 4y^2', levels: [1, 2, 3, 4, 5, 6, 7, 8, 9], color: 'purple' }],
        points: [
          { x: 2, y: 0, label: 'A' },
          { x: 0, y: 1, label: 'B' },
          { x: 0.5, y: 0, label: 'C' },
        ],
      },
      options: [
        { text: 'A at $(2, 0)$', why: 'Here the contours are fairly close, but further apart than at B: moving in $x$ the height rises at rate $2x = 4$.' },
        { text: 'B at $(0, 1)$', correct: true, why: 'The contours are packed tightest here: in the $y$-direction the height rises at rate $8y = 8$.' },
        { text: 'C at $(0.5, 0)$', why: 'C sits near the bottom of the bowl, where the contours are widely spaced: the slope is only about $1$.' },
        { text: 'All the same: the contours are all ellipses', why: 'The shape of the level curves does not tell you the steepness; their spacing does.' },
      ],
      explanation: 'Read steepness from contour spacing. Near B the level curves $f = 4$ and $f = 5$ cross the $y$-axis at $y = 1$ and $y \\approx 1.118$, a gap of about $0.12$. Near A they cross the $x$-axis at $x = 2$ and $x \\approx 2.236$, a gap of about $0.24$. Twice the spacing means half the slope.',
    },
    // 8 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Terrain in code: line of sight on a heightmap',
      blocks: [
        {
          type: 'p',
          text: 'Can a sniper on a tower see the target behind that ridge? Can an RTS unit see over the hill? Games and military planning tools answer this with the heightmap $h(x, y)$: walk along the straight sight line from observer to target and check, at each sample point, whether the line is above the ground.',
        },
        {
          type: 'p',
          text: 'The sight line is a line segment in space, $\\vec r(s) = (1 - s)\\vec P_0 + s\\vec P_1$ for $0 \\le s \\le 1$. Its height $z(s)$ is compared with $h(x(s), y(s))$, the terrain directly below it. The target is hidden as soon as $z(s) < h(x(s), y(s))$ for some $s$.',
        },
        {
          type: 'code',
          title: 'line_of_sight.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdio>

// Terrain height (hundreds of meters) as a function of two variables: two hills.
double h(double x, double y) {
    return 3 * std::exp(-((x - 1) * (x - 1) + (y + 0.5) * (y + 0.5)))
         + 2 * std::exp(-((x + 1) * (x + 1) + (y - 1) * (y - 1)) / 0.7);
}

// Is the target visible from the observer? Walk along the sight line and
// compare its height with the terrain below it.
bool lineOfSight(double x0, double y0, double z0, double x1, double y1, double z1) {
    const int steps = 200;
    for (int i = 1; i < steps; ++i) {
        double s = double(i) / steps;
        double x = x0 + s * (x1 - x0), y = y0 + s * (y1 - y0);
        double zRay = z0 + s * (z1 - z0);
        if (zRay < h(x, y)) {
            std::printf("  blocked at (%.2f, %.2f): ray %.3f < ground %.3f\\n", x, y, zRay, h(x, y));
            return false;
        }
    }
    return true;
}

int main() {
    const double eye = 0.3;                        // a 30 m tower
    double ox = -2.5, oy = -2.5, oz = h(ox, oy) + eye;
    double targets[2][2] = {{2.5, -2.5}, {2.5, 1.0}};
    for (auto& t : targets) {
        double tz = h(t[0], t[1]) + eye;
        std::printf("target (%.1f, %.1f):\\n", t[0], t[1]);
        if (lineOfSight(ox, oy, oz, t[0], t[1], tz)) std::printf("  visible\\n");
    }
}`,
          output: `target (2.5, -2.5):
  visible
target (2.5, 1.0):
  blocked at (-0.40, -1.03): ray 0.314 < ground 0.322`,
          annotations: [
            { lines: '5-8', text: 'The same two-hill terrain as the plots above. A real engine would bilinearly interpolate a heightmap array here instead.' },
            { lines: '16-17', text: 'A point on the sight line: linear interpolation between observer and target, with parameter $s$.' },
            { lines: 18, text: 'The key comparison: the ray\'s height against the function value $h(x, y)$ directly beneath it.' },
          ],
        },
        {
          type: 'callout',
          variant: 'tip',
          text: 'Fixed-step sampling can miss a thin ridge between samples. Production code steps cell by cell through the heightmap grid (a 2D DDA, like a raycaster) so that every cell the line crosses is checked exactly once.',
        },
      ],
    },
    // 9
    {
      kind: 'truefalse',
      prompt: 'Two different level curves of the same function $f(x, y)$ can cross each other.',
      answer: false,
      explanation: 'A crossing point would lie on the level curve $f = k_1$ and on $f = k_2$, so $f$ would have two different values there. A function assigns exactly one output to each input, so level curves for different values never meet. (A single level curve can cross *itself*, as the figure-eight contour through a saddle does, because both branches have the same value.)',
    },
    // 10 ────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Three inputs: level surfaces',
      blocks: [
        {
          type: 'p',
          text: 'A **function of three variables** $w = f(x, y, z)$ assigns a number to each point of a region of space: the temperature in a room, the air pressure around a missile, the density inside a planet. Its graph would need four dimensions, so instead we draw its **[[calc3-level-surface|level surfaces]]** $f(x, y, z) = k$, the 3D analogue of level curves.',
        },
        {
          type: 'p',
          text: 'For $f(x, y, z) = x^2 + y^2 + z^2$ the level surfaces are spheres of radius $\\sqrt k$, nested like onion layers. For $f(x, y, z) = x^2 + y^2 - z^2$ they are more interesting. Drag $k$ through zero:',
        },
        {
          type: 'plot3d',
          x: [-2.6, 2.6],
          y: [-2.6, 2.6],
          z: [-2, 2],
          equal: true,
          parametricSurfaces: [{ x: 'sqrt(k + v^2)*cos(u)', y: 'sqrt(k + v^2)*sin(u)', z: 'v', u: [0, '2pi'], v: [-2, 2], color: 'purple', opacity: 0.75, label: '$x^2 + y^2 - z^2 = k$' }],
          sliders: [{ name: 'k', min: -1.5, max: 1.5, step: 0.05, value: 1, label: 'level $k$' }],
          resolution: 40,
          view: { azimuth: 30, elevation: 18 },
          caption: '$k > 0$: a hyperboloid of one sheet (a cooling-tower shape). $k = 0$: the double cone $z^2 = x^2 + y^2$. $k < 0$: a hyperboloid of two sheets with a gap around the origin. (The jagged rims of the gap are a drawing artifact.)',
        },
        {
          type: 'p',
          text: 'Level surfaces are central to 3D graphics. A **signed distance function** (SDF) gives, at each point $\\vec p$, the distance to a shape, negative inside and positive outside. For a sphere of radius $R$ centered at the origin, $d(x, y, z) = \\sqrt{x^2 + y^2 + z^2} - R$. The shape itself is the level surface $d = 0$.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Raymarching with level surfaces',
          text: 'Shader demos and some games draw whole scenes from SDFs (see Inigo Quilez\'s catalog of distance functions). To render a pixel, march along the camera ray: at the current point, the value $d(\\vec p)$ says how far you can safely step without hitting anything, so step exactly that far and repeat until $d \\approx 0$, which means you have reached the level surface. The surface normal for lighting will come from the gradient of $d$, two lessons from now.',
        },
      ],
    },
    // 11
    {
      kind: 'expr',
      prompt: 'Find the level curve of $f(x, y) = y e^{-x}$ that passes through the point $(0, 2)$. Write it in the form $y = g(x)$.',
      hint: 'First find $k = f(0, 2)$, then solve $y e^{-x} = k$ for $y$.',
      label: '$y =$',
      answer: '2e^x',
      answerTex: '2e^x',
      explanation: 'The level is $k = f(0, 2) = 2e^0 = 2$. Solving $ye^{-x} = 2$ gives $y = 2e^x$. Every point on this exponential curve has the same $f$-value $2$, and other levels give the family $y = ke^x$.',
    },
    // 12
    {
      kind: 'fill',
      prompt: 'Complete the descriptions of level surfaces.',
      template: 'The level surfaces of $f(x, y, z) = x^2 + y^2 + z^2$ (for $k > 0$) are ___, and the level surfaces of $g(x, y, z) = 2x + 3y - z$ are ___.',
      blanks: [{ answers: ['concentric spheres'] }, { answers: ['parallel planes'] }],
      wordBank: ['concentric spheres', 'parallel planes', 'circular cylinders', 'nested paraboloids', 'parallel lines'],
      explanation: '$x^2 + y^2 + z^2 = k$ is a sphere of radius $\\sqrt k$ about the origin, so the level surfaces are concentric spheres. $2x + 3y - z = k$ is a plane with normal vector $\\langle 2, 3, -1 \\rangle$; changing $k$ slides it without turning it, so they are parallel planes. "Parallel lines" would be the level *curves* of a linear function of two variables.',
    },
    // 13
    {
      kind: 'numeric',
      prompt: 'A sphere of radius $2$ centered at the origin has signed distance function $d(x, y, z) = \\sqrt{x^2 + y^2 + z^2} - 2$. Evaluate $d$ at the point $(1, 2, 2)$.',
      label: '$d(1, 2, 2) =$',
      answer: '1',
      explanation: '$\\sqrt{1 + 4 + 4} - 2 = 3 - 2 = 1$. The positive sign says the point is outside the sphere, and the value says it is exactly $1$ unit from the surface. A raymarcher at this point could safely step $1$ unit in any direction without passing through the sphere.',
    },
  ],
  takeaways: [
    'A function of two variables assigns one number to each point of a region $D$ of the plane; find $D$ by intersecting the conditions each part of the formula needs.',
    'The graph $z = f(x, y)$ is a surface; vertical slices $y = b$ or $x = a$ are ordinary single-variable graphs.',
    'Level curves $f(x, y) = k$ form a contour map: closely spaced contours mean steep terrain, and level curves of different values never cross.',
    'Terrain in games is a heightmap $h(x, y)$; line of sight compares a ray\'s height with $h$ beneath it.',
    'Functions of three variables are visualized by level surfaces $f(x, y, z) = k$; a signed distance function\'s zero level surface is the shape it describes.',
  ],
  reading: [
    {
      title: 'OpenStax Calculus Volume 3, Chapter 4: Differentiation of Functions of Several Variables',
      url: 'https://openstax.org/details/books/calculus-volume-3',
      source: 'openstax',
      note: 'Section 4.1 covers domains, graphs, level curves and level surfaces with many sketches.',
    },
    {
      title: 'Wikipedia: Contour line',
      url: 'https://en.wikipedia.org/wiki/Contour_line',
      source: 'wikipedia',
      note: 'How contour maps are drawn and read in cartography, meteorology and engineering.',
    },
    {
      title: 'Inigo Quilez: distance functions',
      url: 'https://iquilezles.org/articles/distfunctions/',
      source: 'other',
      note: 'The standard reference of signed distance functions for spheres, boxes, tori and more, with shader code.',
    },
  ],
};
