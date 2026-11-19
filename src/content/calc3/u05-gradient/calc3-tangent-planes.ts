import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'calc3-tangent-planes',
  title: 'Tangent Planes and Linear Approximation',
  summary: 'Zoom in on a smooth surface and it flattens into a plane: build that plane from the two partial derivatives, use it to estimate values and errors, and learn what "differentiable" really means in two variables.',
  minutes: 18,
  objectives: [
    'Derive and write the tangent plane $z = f(a, b) + f_x(a, b)(x - a) + f_y(a, b)(y - b)$ to a surface $z = f(x, y)$',
    'Use the linearization $L(x, y)$ to approximate function values near a point',
    'Explain why existing partial derivatives do not guarantee a tangent plane, and state the continuous-partials test for differentiability',
    'Compute the total differential $dz = f_x\\,dx + f_y\\,dy$ and compare it with the actual change $\\Delta z$',
    'Estimate the maximum error in a computed quantity from measurement errors',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'From tangent lines to tangent planes',
      blocks: [
        {
          type: 'p',
          text: 'In Calculus I the [[tangent-line]] was the best straight-line stand-in for a curve near a point. Zoom in far enough on a smooth curve and you cannot tell it from that line. Surfaces behave the same way, one dimension up: zoom in on a smooth surface $z = f(x, y)$ and it looks like a flat plane. That plane is the **tangent plane**.',
        },
        {
          type: 'p',
          text: 'You already have the two ingredients. Slicing the surface with the vertical plane $y = b$ gives a curve whose slope at $x = a$ is the [[calc3-partial-derivative|partial derivative]] $f_x(a, b)$. Slicing with $x = a$ gives a curve whose slope is $f_y(a, b)$. Each slice has its own tangent line through the point $P = (a, b, f(a, b))$. Two lines through one point, pointing in different directions, determine exactly one plane.',
        },
        {
          type: 'plot3d',
          x: [-2, 2],
          y: [-2, 2],
          z: [-1, 12],
          surfaces: [
            { expr: '2x^2 + y^2', label: '$z = 2x^2 + y^2$', color: 'blue', opacity: 0.55 },
            {
              expr: '2a^2 + b^2 + 4a(x - a) + 2b(y - b)',
              label: 'tangent plane at $P$',
              color: 'orange',
              opacity: 0.85,
              xDomain: ['a - 0.7', 'a + 0.7'],
              yDomain: ['b - 0.7', 'b + 0.7'],
            },
          ],
          curves: [
            { x: 't', y: 'b', z: '2t^2 + b^2', t: [-2, 2], label: 'slice $y = b$', color: 'red' },
            { x: 'a', y: 't', z: '2a^2 + t^2', t: [-2, 2], label: 'slice $x = a$', color: 'green' },
          ],
          vectors: [
            { from: ['a', 'b', '2a^2 + b^2'], to: ['a + 0.7', 'b', '2a^2 + b^2 + 0.7*4a'], color: 'red' },
            { from: ['a', 'b', '2a^2 + b^2'], to: ['a', 'b + 0.7', '2a^2 + b^2 + 0.7*2b'], color: 'green' },
          ],
          points: [{ x: 'a', y: 'b', z: '2a^2 + b^2', label: 'P' }],
          sliders: [
            { name: 'a', min: -1.5, max: 1.5, step: 0.05, value: 1, label: '$a$' },
            { name: 'b', min: -1.5, max: 1.5, step: 0.05, value: 1, label: '$b$' },
          ],
          readouts: [
            { label: '$f_x(a, b) = 4a =$', expr: '4a', digits: 2 },
            { label: '$f_y(a, b) = 2b =$', expr: '2b', digits: 2 },
          ],
          view: { azimuth: 65, elevation: 18 },
          caption: 'The red and green arrows are tangent to the two slice curves at $P$. The orange plane contains both of them. Move $P$ with the sliders and drag to turn the plot: near $P$ the plane hugs the bowl.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the plane is pinned down by just two slopes',
          text: 'A non-vertical plane through $P$ has the form $z - z_0 = m(x - a) + n(y - b)$: it has exactly two free numbers, $m$ and $n$. Slice it with $y = b$ and you get the line $z - z_0 = m(x - a)$, of slope $m$. For this to be the tangent line of the $x$-slice of the surface, $m$ must equal $f_x(a, b)$. The same argument with $x = a$ forces $n = f_y(a, b)$. Two conditions, two unknowns: the plane is determined.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'concept',
      title: 'The equation of the tangent plane',
      blocks: [
        {
          type: 'definition',
          term: 'Tangent plane to $z = f(x, y)$',
          text: 'If $f$ is differentiable at $(a, b)$ (made precise later in this lesson), the [[calc3-tangent-plane]] to the surface $z = f(x, y)$ at $P = (a, b, f(a, b))$ is\n\n$$z = f(a, b) + f_x(a, b)(x - a) + f_y(a, b)(y - b).$$',
        },
        {
          type: 'p',
          text: 'Compare it with the tangent line $y = f(a) + f\'(a)(x - a)$: the same pattern, with one slope term per input variable. Reading off the coefficients also hands you a [[calc3-normal-vector|normal vector]]. Move everything to one side to get $f_x(x - a) + f_y(y - b) - (z - z_0) = 0$, which is a plane with normal $\\vec{n} = \\langle f_x(a, b), f_y(a, b), -1 \\rangle$.',
        },
        {
          type: 'derivation',
          title: 'Tangent plane to $z = 2x^2 + y^2$ at $(1, 1, 3)$',
          steps: [
            { tex: 'f(1, 1) = 2(1)^2 + 1^2 = 3', why: 'Check that the point is on the surface: the height at $(1, 1)$ really is $3$.' },
            { tex: 'f_x = 4x \\implies f_x(1, 1) = 4', why: 'Differentiate in $x$ with $y$ held constant, so $y^2$ is a constant and its derivative is $0$.' },
            { tex: 'f_y = 2y \\implies f_y(1, 1) = 2', why: 'Differentiate in $y$ with $x$ held constant.' },
            { tex: 'z = 3 + 4(x - 1) + 2(y - 1)', why: 'Substitute the height and both slopes into the tangent-plane formula.' },
            { tex: 'z = 4x + 2y - 3', why: 'Expand and collect: $3 - 4 - 2 = -3$.' },
          ],
          result: 'The tangent plane is $z = 4x + 2y - 3$, with normal vector $\\langle 4, 2, -1 \\rangle$. Check: at $(1, 1)$ it gives $4 + 2 - 3 = 3$, so it passes through $P$.',
        },
        {
          type: 'deepdive',
          title: 'The normal vector as a cross product',
          blocks: [
            {
              type: 'p',
              text: 'The two slice tangents have direction vectors $\\langle 1, 0, f_x \\rangle$ (step one unit in $x$, rise $f_x$) and $\\langle 0, 1, f_y \\rangle$. Both lie in the tangent plane, so their [[cross-product]] is normal to it:',
            },
            {
              type: 'math',
              tex: '\\langle 1, 0, f_x \\rangle \\times \\langle 0, 1, f_y \\rangle = \\begin{vmatrix} \\mathbf{i} & \\mathbf{j} & \\mathbf{k} \\\\ 1 & 0 & f_x \\\\ 0 & 1 & f_y \\end{vmatrix} = \\langle -f_x, -f_y, 1 \\rangle',
            },
            {
              type: 'p',
              text: 'That is $-1$ times $\\langle f_x, f_y, -1 \\rangle$, the same line through the origin, so it is the same normal direction. This upward-pointing version is the one a renderer uses to light a heightmap, as you will see in the gradient lesson.',
            },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'expr',
      prompt: 'Find the tangent plane to $z = x^2 + 3xy - y^2$ at the point where $(x, y) = (1, 2)$. Solve for $z$.',
      label: '$z =$',
      answer: '8x - y - 3',
      variables: ['x', 'y'],
      hint: 'You need $f(1, 2)$, $f_x(1, 2)$ and $f_y(1, 2)$. Here $f_x = 2x + 3y$ and $f_y = 3x - 2y$.',
      explanation: 'The height is $f(1, 2) = 1 + 6 - 4 = 3$. The slopes are $f_x(1, 2) = 2 + 6 = 8$ and $f_y(1, 2) = 3 - 4 = -1$. So $z = 3 + 8(x - 1) - (y - 2) = 8x - y - 3$. Check at $(1, 2)$: $8 - 2 - 3 = 3$.',
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'concept',
      title: 'Linear approximation',
      blocks: [
        {
          type: 'p',
          text: 'Near $P$ the plane and the surface are almost the same, so the plane\'s height is a good estimate of the function. The function whose graph is the tangent plane is the [[linearization]] of $f$ at $(a, b)$, and using it to estimate values is [[linear-approximation]]: the same idea as in Calculus I, with one extra term.',
        },
        {
          type: 'theorem',
          name: 'Linearization of $f$ at $(a, b)$',
          tex: 'f(x, y) \\approx L(x, y) = f(a, b) + f_x(a, b)(x - a) + f_y(a, b)(y - b)',
          text: 'The approximation is good when $(x, y)$ is close to $(a, b)$ and $f$ is differentiable there.',
        },
        {
          type: 'derivation',
          title: 'Estimate $f(1.1, -0.1)$ for $f(x, y) = x e^{xy}$',
          steps: [
            { tex: 'f(1, 0) = 1 \\cdot e^{0} = 1', why: 'Pick a nearby base point where everything is easy to evaluate: $(1, 0)$.' },
            { tex: 'f_x = e^{xy} + xy\\,e^{xy} \\implies f_x(1, 0) = 1', why: 'Product rule in $x$: the derivative of $e^{xy}$ with respect to $x$ is $y\\,e^{xy}$ by the [[chain-rule]].' },
            { tex: 'f_y = x^2 e^{xy} \\implies f_y(1, 0) = 1', why: 'In $y$ the factor $x$ is a constant, and $\\frac{\\partial}{\\partial y} e^{xy} = x\\,e^{xy}$.' },
            { tex: 'L(x, y) = 1 + 1(x - 1) + 1(y - 0) = x + y', why: 'Assemble the linearization.' },
            { tex: 'f(1.1, -0.1) \\approx L(1.1, -0.1) = 1.0', why: 'Evaluate the plane instead of the exponential.' },
          ],
          result: 'The estimate is $1.0$. The true value is $1.1\\,e^{-0.11} \\approx 0.98542$, so the error is about $0.015$.',
        },
        {
          type: 'table',
          headers: ['step $d$', 'point $(1 + d, -d)$', '$f$', '$L$', 'error $|f - L|$'],
          rows: [
            ['$0.2$', '$(1.2, -0.2)$', '$0.943953$', '$1$', '$0.056047$'],
            ['$0.1$', '$(1.1, -0.1)$', '$0.985418$', '$1$', '$0.014582$'],
            ['$0.05$', '$(1.05, -0.05)$', '$0.996297$', '$1$', '$0.003703$'],
            ['$0.025$', '$(1.025, -0.025)$', '$0.999068$', '$1$', '$0.000932$'],
          ],
          caption: 'Halve the distance and the error drops by a factor of about $4$: the error of a linear approximation shrinks like the **square** of the distance.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Linearization is what a physics step assumes',
          text: 'Every explicit physics or animation update ("new value = old value + rate × change") is a linear approximation. With two inputs the rate is a pair of partial derivatives. The program below estimates them with central differences ([[finite-difference|finite differences]]), builds $L$ and measures the error as you move away from the base point.',
        },
        {
          type: 'code',
          title: 'linearize.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdio>
#include <initializer_list>

double f(double x, double y) { return x * std::exp(x * y); }

int main() {
    const double a = 1.0, b = 0.0, h = 1e-5;
    // Central differences approximate the partial derivatives at (a, b).
    const double fx = (f(a + h, b) - f(a - h, b)) / (2 * h);
    const double fy = (f(a, b + h) - f(a, b - h)) / (2 * h);
    std::printf("f(a,b) = %.4f  fx = %.4f  fy = %.4f\\n", f(a, b), fx, fy);

    for (double d : {0.2, 0.1, 0.05, 0.025}) {
        const double x = a + d, y = b - d;
        const double L = f(a, b) + fx * (x - a) + fy * (y - b);  // tangent plane
        const double err = std::fabs(f(x, y) - L);
        std::printf("d = %.3f  f = %.6f  L = %.6f  error = %.6f\\n", d, f(x, y), L, err);
    }
}`,
          output: `f(a,b) = 1.0000  fx = 1.0000  fy = 1.0000
d = 0.200  f = 0.943953  L = 1.000000  error = 0.056047
d = 0.100  f = 0.985418  L = 1.000000  error = 0.014582
d = 0.050  f = 0.996297  L = 1.000000  error = 0.003703
d = 0.025  f = 0.999068  L = 1.000000  error = 0.000932`,
          annotations: [
            { lines: '10-11', text: 'Central differences $\\frac{f(a + h, b) - f(a - h, b)}{2h}$: nudge one variable both ways, hold the other fixed. That is a partial derivative, numerically.' },
            { lines: 16, text: 'The linearization: base height plus one slope term per variable.' },
            { lines: '17-18', text: 'Each halving of $d$ cuts the error to about a quarter.' },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'numeric',
      prompt: 'Use the linearization of $f(x, y) = \\sqrt{x^2 + y^2}$ at $(3, 4)$ to estimate $f(3.02, 3.97)$. Give the estimate as a decimal.',
      label: '$f(3.02, 3.97) \\approx$',
      answer: '4.988',
      minDecimals: 3,
      hint: '$f(3, 4) = 5$, $f_x = \\dfrac{x}{\\sqrt{x^2 + y^2}}$ and $f_y = \\dfrac{y}{\\sqrt{x^2 + y^2}}$.',
      explanation: 'At $(3, 4)$: $f = 5$, $f_x = \\frac{3}{5}$, $f_y = \\frac{4}{5}$. So $L(3.02, 3.97) = 5 + \\frac{3}{5}(0.02) + \\frac{4}{5}(-0.03) = 5 + 0.012 - 0.024 = 4.988$. The true value is $\\sqrt{24.8813} \\approx 4.98812$, so the plane is off by only about $0.0001$. Geometrically: you moved slightly toward the origin, so the distance to the origin shrank.',
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'concept',
      title: 'Differentiability: when the plane really is tangent',
      blocks: [
        {
          type: 'p',
          text: 'In one variable, "the derivative exists" was enough to give a tangent line. In two variables it is **not** enough for both partial derivatives to exist. Partial derivatives only look along two directions, the $x$- and $y$-axes. The surface can do anything in between.',
        },
        {
          type: 'p',
          text: 'The standard example is $f(x, y) = \\dfrac{xy}{x^2 + y^2}$ with $f(0, 0) = 0$. On both axes $f$ is identically $0$, so $f_x(0, 0) = f_y(0, 0) = 0$ and the formula offers the plane $z = 0$. But along the line $y = x$ the function equals $\\frac{1}{2}$, all the way into the origin. So $f$ is not even continuous at the origin, and the plane $z = 0$ is a terrible approximation there.',
        },
        {
          type: 'plot3d',
          x: [-2, 2],
          y: [-2, 2],
          z: [-1, 1],
          parametricSurfaces: [
            { x: 'u cos(v)', y: 'u sin(v)', z: 'sin(2v)/2', u: [0.02, 1.9], v: [0, '2pi'], color: 'blue', opacity: 0.7, label: '$z = \\frac{xy}{x^2 + y^2}$' },
          ],
          curves: [
            { x: 't', y: '0', z: '0', t: [-1.9, 1.9], color: 'red', label: 'on the axes $z = 0$' },
            { x: '0', y: 't', z: '0', t: [-1.9, 1.9], color: 'red' },
            { x: 't/sqrt(2)', y: 't/sqrt(2)', z: '0.5', t: [0.03, 1.9], color: 'green', label: 'on $y = x$: $z = \\frac{1}{2}$' },
          ],
          view: { azimuth: 25, elevation: 28 },
          caption: 'Along each ray from the origin this surface has constant height $\\frac{1}{2}\\sin 2\\theta$, so it twists from $-\\frac{1}{2}$ to $\\frac{1}{2}$ around the origin. The partial derivatives see only the flat red axes. No plane hugs this surface at the origin.',
        },
        {
          type: 'definition',
          term: 'Differentiable (two variables)',
          text: 'Write $\\Delta z = f(a + \\Delta x, b + \\Delta y) - f(a, b)$. Then $f$ is [[calc3-differentiable|differentiable]] at $(a, b)$ if\n\n$$\\Delta z = f_x(a, b)\\,\\Delta x + f_y(a, b)\\,\\Delta y + \\varepsilon_1 \\Delta x + \\varepsilon_2 \\Delta y,$$\n\nwhere $\\varepsilon_1, \\varepsilon_2 \\to 0$ as $(\\Delta x, \\Delta y) \\to (0, 0)$. In words: the error of the tangent plane goes to zero **faster** than the distance to the point.',
        },
        {
          type: 'theorem',
          name: 'A practical test',
          text: 'If $f_x$ and $f_y$ exist near $(a, b)$ and are **continuous** at $(a, b)$, then $f$ is differentiable at $(a, b)$. A differentiable function is also continuous there.',
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'Polynomials, exponentials, sines and cosines, and sums, products and compositions of them, have continuous partial derivatives wherever they are defined, so they are differentiable there. Exam questions about non-differentiability almost always use a piecewise function with a special value at the origin, like the one above. Check a few paths into the point, as in the [[calc3-two-path-test]]: $y = 0$, $x = 0$, $y = x$, $y = x^2$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'truefalse',
      prompt: 'If $f_x(a, b)$ and $f_y(a, b)$ both exist, then $f$ is differentiable at $(a, b)$ and has a tangent plane there.',
      answer: false,
      explanation: 'Partial derivatives only measure change along the two coordinate directions. $f(x, y) = \\frac{xy}{x^2 + y^2}$ (with $f(0, 0) = 0$) has $f_x(0, 0) = f_y(0, 0) = 0$, yet it is not even continuous at the origin: it equals $\\frac{1}{2}$ along $y = x$. A sufficient condition for differentiability is that the partials are **continuous** near the point.',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'concept',
      title: 'The total differential',
      blocks: [
        {
          type: 'p',
          text: 'In Calculus I the [[differential]] $dy = f\'(x)\\,dx$ was the change along the tangent line, a stand-in for the true change $\\Delta y$. The two-variable version measures the change along the tangent plane.',
        },
        {
          type: 'definition',
          term: 'Total differential',
          text: 'For $z = f(x, y)$, with independent increments $dx$ and $dy$, the [[calc3-total-differential]] is\n\n$$dz = f_x(x, y)\\,dx + f_y(x, y)\\,dy = \\frac{\\partial z}{\\partial x}dx + \\frac{\\partial z}{\\partial y}dy.$$\n\nFor $w = f(x, y, z)$ add a third term: $dw = f_x\\,dx + f_y\\,dy + f_z\\,dz$.',
        },
        {
          type: 'plot3d',
          x: [0, 2],
          y: [0, 2],
          z: [0, 12],
          surfaces: [
            { expr: '2x^2 + y^2', color: 'blue', opacity: 0.5, label: '$z = 2x^2 + y^2$' },
            { expr: '4x + 2y - 3', color: 'orange', opacity: 0.6, label: 'tangent plane at $(1, 1, 3)$', xDomain: [0.75, 1.75], yDomain: [0.75, 1.75] },
          ],
          curves: [
            { x: '1 + p', y: '1 + q', z: '3 + t*(2(1 + p)^2 + (1 + q)^2 - 3)', t: [0, 1], color: 'blue', label: '$\\Delta z$: rise of the surface' },
            { x: '1 + p + 0.03', y: '1 + q', z: '3 + t*(4p + 2q)', t: [0, 1], color: 'red', label: '$dz$: rise of the plane' },
          ],
          points: [
            { x: 1, y: 1, z: 3, label: 'P', color: 'gray' },
            { x: '1 + p', y: '1 + q', z: '2(1 + p)^2 + (1 + q)^2', color: 'blue' },
            { x: '1 + p', y: '1 + q', z: '3 + 4p + 2q', color: 'red' },
          ],
          sliders: [
            { name: 'p', min: 0, max: 0.75, step: 0.01, value: 0.5, label: '$dx$' },
            { name: 'q', min: 0, max: 0.75, step: 0.01, value: 0.4, label: '$dy$' },
          ],
          readouts: [
            { label: '$dz = 4\\,dx + 2\\,dy =$', expr: '4p + 2q', digits: 4 },
            { label: '$\\Delta z =$', expr: '2(1 + p)^2 + (1 + q)^2 - 3', digits: 4 },
            { label: '$\\Delta z - dz =$', expr: '2p^2 + q^2', digits: 4 },
          ],
          view: { azimuth: 140, elevation: 12 },
          caption: 'Starting from $P = (1, 1, 3)$, move by $(dx, dy)$. The red point is the plane\'s prediction, the blue point the true surface. Shrink both sliders: the gap $\\Delta z - dz = 2\\,dx^2 + dy^2$ vanishes much faster than $dz$ itself.',
        },
        {
          type: 'derivation',
          title: 'Compare $dz$ and $\\Delta z$ for $z = x^2 + 3xy - y^2$ as $(x, y)$ goes from $(2, 3)$ to $(2.05, 2.96)$',
          steps: [
            { tex: 'dx = 0.05, \\quad dy = -0.04', why: 'The increments are the changes in the inputs.' },
            { tex: 'dz = (2x + 3y)\\,dx + (3x - 2y)\\,dy', why: 'Total differential with $f_x = 2x + 3y$ and $f_y = 3x - 2y$.' },
            { tex: 'dz = (13)(0.05) + (0)(-0.04) = 0.65', why: 'Evaluate the partials at the **starting** point $(2, 3)$: $f_x = 4 + 9 = 13$, $f_y = 6 - 6 = 0$.' },
            { tex: '\\Delta z = f(2.05, 2.96) - f(2, 3) = 13.6449 - 13 = 0.6449', why: 'The exact change, for comparison: $4.2025 + 18.204 - 8.7616 = 13.6449$.' },
          ],
          result: 'The differential $0.65$ matches the true change $0.6449$ to within $0.0051$, and it took one line of mental arithmetic.',
        },
      ],
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'mcq',
      prompt: 'Which vector is normal to the tangent plane of $z = 2x^2 + y^2$ at $(1, 1, 3)$?',
      options: [
        { text: '$\\langle 4, 2, -1 \\rangle$', correct: true, why: 'The normal is $\\langle f_x, f_y, -1 \\rangle = \\langle 4, 2, -1 \\rangle$, read from $4(x - 1) + 2(y - 1) - (z - 3) = 0$.' },
        { text: '$\\langle 4, 2, 1 \\rangle$', why: 'Sign slip on the $z$-component. Moving $z$ to the same side as the other terms gives coefficient $-1$, not $+1$. (Its negative $\\langle -4, -2, 1 \\rangle$ would also be correct.)' },
        { text: '$\\langle 4, 2, 3 \\rangle$', why: 'The $3$ is the height $z_0$, not a coefficient. Heights locate the plane; they do not set its tilt.' },
        { text: '$\\langle 2, 2, -1 \\rangle$', why: '$f_x = 4x$, so $f_x(1, 1) = 4$. Using $2$ means the derivative of $2x^2$ was taken as $2x$.' },
      ],
      explanation: 'Write the tangent plane $z = 3 + 4(x - 1) + 2(y - 1)$ as $4(x - 1) + 2(y - 1) - (z - 3) = 0$. The coefficients of $(x - 1)$, $(y - 1)$, $(z - 3)$ form a normal vector: $\\langle 4, 2, -1 \\rangle$. Any nonzero multiple, such as the upward $\\langle -4, -2, 1 \\rangle$, is also normal.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'concept',
      title: 'Estimating errors in measured quantities',
      blocks: [
        {
          type: 'p',
          text: 'Here is where differentials earn their keep. You compute a quantity from measured inputs, and each measurement has an error bar. The differential tells you how those small input errors propagate into the result. To get the **maximum** error, assume the worst case: every input error has the sign that makes its term positive, so use absolute values.',
        },
        {
          type: 'math',
          tex: '|\\Delta z| \\approx |dz| \\le |f_x|\\,|dx| + |f_y|\\,|dy|',
          caption: 'Worst-case error bound from the triangle inequality.',
        },
        {
          type: 'derivation',
          title: 'A cylindrical fuel tank: radius $r = 1.5$ m and height $h = 4$ m, each measured to within $0.02$ m',
          steps: [
            { tex: 'V = \\pi r^2 h = \\pi (1.5)^2 (4) = 9\\pi \\approx 28.27\\ \\text{m}^3', why: 'The computed volume from the measured values.' },
            { tex: 'dV = 2\\pi r h\\,dr + \\pi r^2\\,dh', why: 'Total differential: $V_r = 2\\pi r h$ and $V_h = \\pi r^2$.' },
            { tex: '|dV| \\le 2\\pi(1.5)(4)(0.02) + \\pi(1.5)^2(0.02)', why: 'Worst case: both errors at their maximum $0.02$, with signs that add.' },
            { tex: '= 0.24\\pi + 0.045\\pi = 0.285\\pi \\approx 0.90\\ \\text{m}^3', why: 'Arithmetic. The radius term is more than five times the height term.' },
            { tex: '\\frac{|dV|}{V} \\le 2\\frac{|dr|}{r} + \\frac{|dh|}{h} \\approx 0.0267 + 0.005 = 3.2\\%', why: 'Divide by $V = \\pi r^2 h$. Relative errors in a product of powers add, each weighted by its exponent.' },
          ],
          result: 'The volume is $28.27 \\pm 0.90$ m³. If you want a better answer, measure the **radius** more carefully: it is squared, so its error counts twice.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Which measurement matters most?',
          text: 'Compare the terms of $dz$ before you spend effort. The input with the largest $|f_x\\,dx|$-type term dominates the error budget. Engineers call this a sensitivity analysis, and the partial derivatives are the sensitivities.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Fire control is error propagation',
          text: 'A gun\'s ballistic range depends on muzzle velocity, elevation angle, air density and more. Fire-control computations ask exactly the question of this card: if each input is off by a little, how far off is the impact point? The differential gives the first-order answer, and it usually reveals that small angle errors matter far more than you would guess. The next question lets you check this.',
        },
      ],
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'numeric',
      prompt: 'Ignoring air resistance, a projectile fired at speed $v$ and elevation angle $\\theta$ has range $R = \\dfrac{v^2 \\sin 2\\theta}{g}$ with $g = 9.8$ m/s². The nominal values are $v = 200$ m/s and $\\theta = 15^\\circ$. The speed is known to within $1$ m/s and the angle to within $0.5^\\circ$. Use differentials to estimate the maximum error in $R$, to the nearest meter.',
      label: '$|dR| \\approx$',
      unit: 'm',
      answer: '82',
      tolerance: 1,
      hint: '$dR = \\dfrac{2v\\sin 2\\theta}{g}\\,dv + \\dfrac{2v^2\\cos 2\\theta}{g}\\,d\\theta$. Convert $0.5^\\circ$ to radians first: $d\\theta = \\frac{\\pi}{360}$.',
      explanation: 'The partials are $R_v = \\frac{2v\\sin 2\\theta}{g} = \\frac{400 \\cdot 0.5}{9.8} \\approx 20.41$ and $R_\\theta = \\frac{2v^2\\cos 2\\theta}{g} = \\frac{80000 \\cdot 0.8660}{9.8} \\approx 7069.6$ m per radian. With $|dv| = 1$ and $|d\\theta| = \\frac{\\pi}{360} \\approx 0.008727$: $|dR| \\le 20.41 + 61.69 \\approx 82$ m on a range of about $2041$ m. The half-degree angle error contributes three times as much as the speed error. Forgetting to convert degrees to radians gives a wildly wrong $\\approx 3555$ m: derivative formulas for $\\sin$ and $\\cos$ assume radians.',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'error',
      prompt: 'A student finds the tangent plane to $z = x^2 y$ at the point where $(x, y) = (1, 3)$. Tap the first line that is wrong.',
      lines: [
        '$f(1, 3) = 1^2 \\cdot 3 = 3$',
        '$f_x = 2xy$, so $f_x(1, 3) = 6$',
        '$f_y = 2x$, so $f_y(1, 3) = 2$',
        '$z = 3 + 6(x - 1) + 2(y - 3)$',
        '$z = 6x + 2y - 9$',
      ],
      errorLines: [3],
      explanation: 'In $f_y$ the variable $x$ is a constant, so $x^2 y$ is "a constant times $y$" and $f_y = x^2$. The student differentiated $x^2$ instead. Correctly $f_y(1, 3) = 1$, and the plane is $z = 3 + 6(x - 1) + (y - 3) = 6x + y - 6$. Lines 4 and 5 follow correctly from the wrong slope.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'fill',
      prompt: 'Complete the statements about linear approximation.',
      template: 'For $z = f(x, y)$ the total differential is $dz =$ ___ $dx\\, +$ ___ $dy$. The tangent plane at $(a, b)$ has normal vector $\\langle f_x, f_y,$ ___ $\\rangle$. A function is guaranteed differentiable at a point if its partial derivatives are ___ there.',
      blanks: [{ answers: ['$f_x$'] }, { answers: ['$f_y$'] }, { answers: ['$-1$'] }, { answers: ['continuous'] }],
      wordBank: ['$f_x$', '$f_y$', '$-1$', '$1$', 'continuous', 'zero', '$f_{xy}$', '$z_0$'],
      explanation: '$dz = f_x\\,dx + f_y\\,dy$ adds one slope-times-step term per variable. Rewriting $z - z_0 = f_x(x - a) + f_y(y - b)$ as $f_x(x - a) + f_y(y - b) - (z - z_0) = 0$ shows the normal $\\langle f_x, f_y, -1 \\rangle$. Mere existence of the partials is not enough for differentiability; continuity of the partials is a sufficient condition.',
    },
  ],
  takeaways: [
    'The tangent plane to $z = f(x, y)$ at $(a, b)$ is $z = f(a, b) + f_x(a, b)(x - a) + f_y(a, b)(y - b)$. It contains the tangent lines of both slice curves.',
    'A normal vector to that plane is $\\langle f_x, f_y, -1 \\rangle$, or equivalently the upward $\\langle -f_x, -f_y, 1 \\rangle$.',
    'Near $(a, b)$, $f(x, y) \\approx L(x, y)$, with an error that shrinks like the square of the distance.',
    'Existing partials do not imply differentiability. Continuous partials do, and differentiable implies continuous.',
    'The total differential $dz = f_x\\,dx + f_y\\,dy$ estimates $\\Delta z$. Worst-case error is $|f_x||dx| + |f_y||dy|$, and comparing the terms tells you which measurement matters most.',
  ],
  reading: [
    {
      title: 'OpenStax Calculus Volume 3, section 4.4: Tangent Planes and Linear Approximations',
      url: 'https://openstax.org/details/books/calculus-volume-3',
      source: 'openstax',
      note: 'Free textbook. Section 4.4 covers tangent planes, the formal definition of differentiability and differentials, with many exercises.',
    },
    {
      title: "Paul's Online Math Notes: Calculus III",
      url: 'https://tutorial.math.lamar.edu/Classes/CalcIII/CalcIII.aspx',
      source: 'other',
      note: 'See "Tangent Planes and Linear Approximations" and "Differentials" under Partial Derivatives for more worked examples.',
    },
    {
      title: 'Khan Academy: Multivariable calculus',
      url: 'https://www.khanacademy.org/math/multivariable-calculus',
      source: 'khan',
      note: 'The "Local linearization" videos animate the tangent plane hugging a surface.',
    },
  ],
};
