import type { Lesson } from '../../types';

const F = '4 - x^2 - 2y^2';

export const lesson: Lesson = {
  id: 'calc3-partial-derivatives',
  title: 'Partial Derivatives',
  summary: 'Freeze every variable but one and differentiate: the slope of a slice through the surface. Then higher-order partials, Clairaut\'s theorem and when it fails, finite differences in code, and a first look at the heat and wave equations.',
  minutes: 20,
  objectives: [
    'Define $f_x$ and $f_y$ as limits and interpret them as slopes of slices of the surface $z = f(x, y)$',
    'Compute partial derivatives with the single-variable rules, including implicitly defined functions',
    'Estimate partial derivatives from data and with central differences, and build a terrain normal from them',
    'Compute second-order partial derivatives and apply Clairaut\'s theorem, knowing its hypotheses',
    'Verify that functions satisfy Laplace\'s equation, the heat equation and the wave equation',
  ],
  steps: [
    // 1 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Freeze one variable, differentiate the other',
      blocks: [
        {
          type: 'p',
          text: 'Standing on a hillside $z = f(x, y)$, "how steep is it?" has no single answer: it depends which way you face. The simplest choices are due east (increase $x$, keep $y$ fixed) and due north (increase $y$, keep $x$ fixed). Freezing $y = b$ turns $f$ into a function of $x$ alone, $g(x) = f(x, b)$, and its ordinary [[derivative]] is the **partial derivative with respect to $x$**.',
        },
        {
          type: 'definition',
          term: 'Partial derivatives',
          text: 'The [[calc3-partial-derivative|partial derivatives]] of $f$ at $(a, b)$ are $$f_x(a, b) = \\lim_{h \\to 0} \\frac{f(a + h, b) - f(a, b)}{h}, \\qquad f_y(a, b) = \\lim_{h \\to 0} \\frac{f(a, b + h) - f(a, b)}{h},$$ when these limits exist. Other notations: $f_x = \\dfrac{\\partial f}{\\partial x} = \\dfrac{\\partial z}{\\partial x} = D_x f$. The curly $\\partial$ ("partial") warns you that other variables are being held constant.',
        },
        {
          type: 'p',
          text: '**Geometrically**, the vertical plane $y = b$ slices the surface in a curve $C_1$. The number $f_x(a, b)$ is the slope of the tangent line to $C_1$ at $P = (a, b, f(a, b))$. Likewise $f_y(a, b)$ is the slope of the slice $C_2$ cut by the plane $x = a$. Move the point and watch both slopes:',
        },
        {
          type: 'plot3d',
          x: [-1.6, 1.6],
          y: [-1.6, 1.6],
          z: [-4, 4.5],
          surfaces: [{ expr: F, color: 'gray', opacity: 0.55, label: '$z = 4 - x^2 - 2y^2$' }],
          parametricSurfaces: [
            { x: 'u', y: 'b', z: 'v', u: [-1.6, 1.6], v: [-4, 4.5], color: 'red', opacity: 0.12 },
            { x: 'a', y: 'u', z: 'v', u: [-1.6, 1.6], v: [-4, 4.5], color: 'blue', opacity: 0.12 },
          ],
          curves: [
            { x: 't', y: 'b', z: '4 - t^2 - 2b^2', t: [-1.6, 1.6], color: 'red', label: 'slice $y = b$: slope $f_x$' },
            { x: 'a', y: 't', z: '4 - a^2 - 2t^2', t: [-1.6, 1.6], color: 'blue', label: 'slice $x = a$: slope $f_y$' },
          ],
          points: [{ x: 'a', y: 'b', z: '4 - a^2 - 2b^2', label: 'P', color: 'purple' }],
          vectors: [
            { from: ['a', 'b', '4 - a^2 - 2b^2'], to: ['a + 0.6', 'b', '4 - a^2 - 2b^2 + 0.6*(-2a)'], color: 'red' },
            { from: ['a', 'b', '4 - a^2 - 2b^2'], to: ['a', 'b + 0.6', '4 - a^2 - 2b^2 + 0.6*(-4b)'], color: 'blue' },
          ],
          sliders: [
            { name: 'a', min: -1.3, max: 1.3, step: 0.05, value: 1, label: '$a$' },
            { name: 'b', min: -1.1, max: 1.1, step: 0.05, value: 1, label: '$b$' },
          ],
          readouts: [
            { label: '$f_x(a, b) = -2a =$', expr: '-2a' },
            { label: '$f_y(a, b) = -4b =$', expr: '-4b' },
          ],
          view: { azimuth: 35, elevation: 25 },
          caption: 'The red plane $y = b$ cuts the red slice; the red arrow, with direction $\\langle 1, 0, f_x \\rangle$, is tangent to it. The blue plane $x = a$ gives the blue slice and the tangent $\\langle 0, 1, f_y \\rangle$. At $(1, 1)$: $f_x = -2$, $f_y = -4$, so the surface falls twice as fast heading north as heading east.',
        },
        {
          type: 'derivation',
          title: '$f(x, y) = 4 - x^2 - 2y^2$ at $(1, 1)$',
          steps: [
            { tex: 'f_x(x, y) = -2x', why: 'Treat $y$ as a constant: $-2y^2$ is then a constant, with derivative $0$.' },
            { tex: 'f_y(x, y) = -4y', why: 'Treat $x$ as a constant: $4 - x^2$ is a constant.' },
            { tex: 'f_x(1, 1) = -2, \\qquad f_y(1, 1) = -4', why: 'Evaluate at the point.' },
          ],
          result: 'Check with the slice: at $y = 1$ the surface is $z = 2 - x^2$, whose slope at $x = 1$ is $-2$ ✓.',
        },
      ],
    },
    // 2
    {
      kind: 'expr',
      prompt: 'Find $f_x$ for $f(x, y) = x^3 + x^2y^3 - 2y^2$.',
      hint: 'Every $y$ is a constant: $x^2y^3$ is "$y^3$ times $x^2$".',
      label: '$f_x =$',
      variables: ['x', 'y'],
      answer: '3x^2 + 2x*y^3',
      answerTex: '3x^2 + 2xy^3',
      explanation: 'Differentiate in $x$ with $y$ frozen: $x^3 \\to 3x^2$; $x^2y^3 \\to 2x \\cdot y^3$ (the constant $y^3$ rides along); $-2y^2 \\to 0$ (a constant). So $f_x = 3x^2 + 2xy^3$. For the record, $f_y = 3x^2y^2 - 4y$.',
    },
    // 3 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'The rules you already know',
      blocks: [
        {
          type: 'p',
          text: 'Since a partial derivative is an ordinary derivative with the other variables frozen, every rule from Calculus I applies: power, product, quotient and [[chain-rule]]. The only new skill is discipline about which symbols are constants.',
        },
        {
          type: 'derivation',
          title: '$f(x, y) = \\sin\\left(\\dfrac{x}{1 + y}\\right)$',
          steps: [
            { tex: 'f_x = \\cos\\left(\\frac{x}{1 + y}\\right) \\cdot \\frac{\\partial}{\\partial x}\\left(\\frac{x}{1 + y}\\right) = \\cos\\left(\\frac{x}{1 + y}\\right) \\cdot \\frac{1}{1 + y}', why: 'Chain rule. With $y$ fixed, $\\frac{x}{1 + y}$ is just $x$ times the constant $\\frac{1}{1 + y}$.' },
            { tex: 'f_y = \\cos\\left(\\frac{x}{1 + y}\\right) \\cdot \\frac{\\partial}{\\partial y}\\left(x(1 + y)^{-1}\\right) = -\\frac{x}{(1 + y)^2}\\cos\\left(\\frac{x}{1 + y}\\right)', why: 'Chain rule again; now $x$ is the constant and $(1 + y)^{-1}$ differentiates to $-(1 + y)^{-2}$.' },
          ],
        },
        {
          type: 'p',
          text: '**Implicit differentiation** works too. If $z$ is defined implicitly as a function of $x$ and $y$ by an equation, differentiate both sides with respect to $x$, holding $y$ constant and treating $z$ as $z(x, y)$:',
        },
        {
          type: 'derivation',
          title: 'Find $\\dfrac{\\partial z}{\\partial x}$ if $x^3 + y^3 + z^3 + 6xyz = 1$',
          steps: [
            { tex: '3x^2 + 0 + 3z^2\\frac{\\partial z}{\\partial x} + 6y\\left(z + x\\frac{\\partial z}{\\partial x}\\right) = 0', why: 'Differentiate each term in $x$: $y^3$ is constant; $z^3$ needs the chain rule; $6xyz$ is $6y$ times the product $xz$.' },
            { tex: '\\left(3z^2 + 6xy\\right)\\frac{\\partial z}{\\partial x} = -3x^2 - 6yz', why: 'Collect the $\\frac{\\partial z}{\\partial x}$ terms on the left.' },
            { tex: '\\frac{\\partial z}{\\partial x} = -\\frac{x^2 + 2yz}{z^2 + 2xy}', why: 'Divide (and cancel a common factor $3$), assuming $z^2 + 2xy \\ne 0$.' },
          ],
        },
        {
          type: 'p',
          text: 'Functions of three or more variables are handled the same way: $\\frac{\\partial f}{\\partial z}$ freezes $x$ and $y$. For $f(x, y, z) = e^{xy}\\ln z$: $f_x = ye^{xy}\\ln z$, $f_y = xe^{xy}\\ln z$, $f_z = \\frac{e^{xy}}{z}$.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'A constant is not always a number',
          text: 'In $\\frac{\\partial}{\\partial x}(x^2y^3)$, the factor $y^3$ is a constant multiple, so the answer is $2xy^3$, not $0$ and not $2x \\cdot 3y^2$. A term is differentiated to zero only if it contains **no** $x$ at all. The opposite slip, differentiating a frozen variable, is just as common: $\\frac{\\partial}{\\partial x}\\sin(xy) = y\\cos(xy)$ (chain rule), not $\\cos(xy)$.',
        },
      ],
    },
    // 4
    {
      kind: 'expr',
      prompt: 'Find $\\dfrac{\\partial f}{\\partial y}$ for $f(x, y) = xe^{xy}$.',
      hint: '$x$ is a constant factor in front; differentiate $e^{xy}$ with respect to $y$ using the chain rule.',
      label: '$f_y =$',
      variables: ['x', 'y'],
      domain: [-1.5, 1.5],
      answer: 'x^2*e^(x*y)',
      answerTex: 'x^2e^{xy}',
      explanation: 'Hold $x$ fixed: $f_y = x \\cdot \\frac{\\partial}{\\partial y}e^{xy} = x \\cdot e^{xy} \\cdot x = x^2e^{xy}$. The inner derivative $\\frac{\\partial}{\\partial y}(xy) = x$ is where the second factor of $x$ comes from. (By contrast $f_x$ needs the product rule: $e^{xy} + xye^{xy}$.)',
    },
    // 5
    {
      kind: 'mcq',
      prompt: '$T(x, y)$ is the temperature in °C at the point $x$ km east and $y$ km north of a base. You are told $T_x(3, 2) = -1.5$. What does this mean?',
      options: [
        { text: 'At $(3, 2)$, heading east, the temperature drops about $1.5$°C per km', correct: true, why: '$T_x$ is the rate of change in the $x$-direction (east) with $y$ fixed, in °C per km; negative means falling.' },
        { text: 'The temperature at $(3, 2)$ is $-1.5$°C', why: 'That would be $T(3, 2) = -1.5$. The partial derivative is a rate, not a value.' },
        { text: 'At $(3, 2)$, heading north, the temperature drops about $1.5$°C per km', why: 'North is the $y$-direction, which is measured by $T_y$.' },
        { text: 'The temperature drops $1.5$°C per km in every direction from $(3, 2)$', why: 'A partial derivative only describes one direction. In another direction the rate can be completely different (even positive).' },
      ],
      explanation: '$T_x(3, 2) = \\lim_{h \\to 0}\\frac{T(3 + h, 2) - T(3, 2)}{h}$ compares temperatures at points due east of each other. Units: °C (output) per km (input). So moving $0.1$ km east from $(3, 2)$, expect the temperature to fall by about $0.15$°C. Rates in other directions come from the gradient in the next unit.',
    },
    // 6 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Partial derivatives from data, and terrain normals',
      blocks: [
        {
          type: 'p',
          text: 'Often you know $f$ only through samples: a weather grid, a heightmap, a simulation. Then you estimate partials with a [[finite-difference]], exactly as in single-variable calculus but in one coordinate direction at a time. The **central difference** is the usual choice, because its error shrinks like $h^2$:',
        },
        {
          type: 'math',
          tex: 'f_x(a, b) \\approx \\frac{f(a + h, b) - f(a - h, b)}{2h}, \\qquad f_y(a, b) \\approx \\frac{f(a, b + h) - f(a, b - h)}{2h}',
        },
        {
          type: 'p',
          text: 'Here is a payoff for games. The two slice tangents from the first card, $\\langle 1, 0, h_x \\rangle$ and $\\langle 0, 1, h_y \\rangle$, both lie along the terrain surface. Their [[cross-product]] is therefore perpendicular to it: a **surface normal**, the vector every lighting calculation needs.',
        },
        {
          type: 'derivation',
          title: 'The normal to a heightmap $z = h(x, y)$',
          steps: [
            { tex: '\\langle 1, 0, h_x \\rangle \\times \\langle 0, 1, h_y \\rangle = \\begin{vmatrix} \\mathbf{i} & \\mathbf{j} & \\mathbf{k} \\\\ 1 & 0 & h_x \\\\ 0 & 1 & h_y \\end{vmatrix}', why: 'Cross the two tangent vectors, using the [[determinant]] mnemonic.' },
            { tex: '= \\mathbf{i}(0 \\cdot h_y - h_x \\cdot 1) - \\mathbf{j}(1 \\cdot h_y - h_x \\cdot 0) + \\mathbf{k}(1 \\cdot 1 - 0)', why: 'Expand along the first row.' },
            { tex: '= \\langle -h_x,\\ -h_y,\\ 1 \\rangle', why: 'Simplify. The $z$-component is $+1$, so the normal points up, out of the ground.' },
          ],
          result: 'Normalize $\\langle -h_x, -h_y, 1 \\rangle$ and you have the per-vertex normal of a terrain mesh. On flat ground $h_x = h_y = 0$ and it is straight up.',
        },
        {
          type: 'code',
          title: 'terrain_normal.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdio>

// Terrain: the two-hill heightmap from the previous lessons.
double h(double x, double y) {
    return 3 * std::exp(-((x - 1) * (x - 1) + (y + 0.5) * (y + 0.5)))
         + 2 * std::exp(-((x + 1) * (x + 1) + (y - 1) * (y - 1)) / 0.7);
}

int main() {
    const double x = 0.5, y = 0.0, d = 1e-4;
    double hx = (h(x + d, y) - h(x - d, y)) / (2 * d);   // partial in x
    double hy = (h(x, y + d) - h(x, y - d)) / (2 * d);   // partial in y
    std::printf("h_x ~ %.4f   h_y ~ %.4f\\n", hx, hy);

    // Tangent vectors <1, 0, h_x> and <0, 1, h_y>; their cross product is the normal.
    double nx = -hx, ny = -hy, nz = 1.0;
    double len = std::sqrt(nx * nx + ny * ny + nz * nz);
    std::printf("normal = (%.4f, %.4f, %.4f)\\n", nx / len, ny / len, nz / len);
}`,
          output: `h_x ~ 1.7370   h_y ~ -1.7646
normal = (-0.6505, 0.6608, 0.3745)`,
          annotations: [
            { lines: '12-13', text: 'Central differences in each direction separately: each one freezes the other coordinate, which is exactly what a partial derivative does. (Exact values: $h_x = 1.73705\\ldots$, $h_y = -1.76456\\ldots$.)' },
            { lines: '17-18', text: '$\\langle -h_x, -h_y, 1 \\rangle$, normalized. On a grid heightmap, $d$ is the grid spacing and the samples are neighboring texels.' },
          ],
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Normal maps',
          text: 'Engines bake exactly this into **normal maps**: for each texel of a height texture, central differences with the neighbors give $h_x$ and $h_y$, and the normalized $\\langle -h_x, -h_y, 1 \\rangle$ is stored in the RGB channels. That is why tangent-space normal maps look mostly blue: the $z$-component is the largest.',
        },
      ],
    },
    // 7
    {
      kind: 'numeric',
      prompt: 'A weather model gives the pressure $P$ (in hPa) at grid points $x$ km east. Along the row $y = 3$: $P(1.9, 3) = 1005.2$ and $P(2.1, 3) = 1005.8$. Use a central difference to estimate $P_x(2, 3)$.',
      label: '$P_x(2, 3) \\approx$',
      unit: 'hPa per km',
      answer: '3',
      explanation: '$P_x(2, 3) \\approx \\frac{P(2.1, 3) - P(1.9, 3)}{2(0.1)} = \\frac{1005.8 - 1005.2}{0.2} = \\frac{0.6}{0.2} = 3$ hPa per km. Both samples share $y = 3$, so the difference isolates the change in the $x$-direction alone.',
    },
    // 8 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Second-order partial derivatives',
      blocks: [
        {
          type: 'p',
          text: 'The partial derivatives $f_x$ and $f_y$ are again functions of $x$ and $y$, so they have partial derivatives of their own. There are four **[[calc3-higher-order-partials|second-order partial derivatives]]**:',
        },
        {
          type: 'math',
          tex: 'f_{xx} = \\frac{\\partial^2 f}{\\partial x^2}, \\quad f_{yy} = \\frac{\\partial^2 f}{\\partial y^2}, \\quad f_{xy} = (f_x)_y = \\frac{\\partial^2 f}{\\partial y\\,\\partial x}, \\quad f_{yx} = (f_y)_x = \\frac{\\partial^2 f}{\\partial x\\,\\partial y}',
          caption: 'Mind the order: in subscript notation you differentiate left to right ($f_{xy}$: first $x$, then $y$); in fraction notation you read right to left.',
        },
        {
          type: 'derivation',
          title: 'All four for $f(x, y) = x^3 + x^2y^3 - 2y^2$',
          steps: [
            { tex: 'f_x = 3x^2 + 2xy^3, \\qquad f_y = 3x^2y^2 - 4y', why: 'First partials, from the earlier question.' },
            { tex: 'f_{xx} = 6x + 2y^3, \\qquad f_{xy} = 6xy^2', why: 'Differentiate $f_x$ in $x$, then in $y$.' },
            { tex: 'f_{yx} = 6xy^2, \\qquad f_{yy} = 6x^2y - 4', why: 'Differentiate $f_y$ in $x$, then in $y$.' },
          ],
          result: 'The mixed partials $f_{xy}$ and $f_{yx}$ came out equal. That is no accident.',
        },
        {
          type: 'p',
          text: 'Interpretation: $f_{xx}$ is the [[concavity]] of the slice $y = b$ (how the $x$-slope changes as you walk east), and $f_{yy}$ the concavity of the slice $x = a$. The mixed partial $f_{xy}$ measures **twist**: how the eastward slope changes as you step north. On the saddle $z = xy$ the slices are straight lines ($f_{xx} = f_{yy} = 0$), yet $f_{xy} = 1$: the lines rotate as you move.',
        },
        {
          type: 'theorem',
          name: 'Clairaut\'s theorem (equality of mixed partials)',
          text: 'Suppose $f$ is defined on a disk $D$ containing $(a, b)$, and $f_{xy}$ and $f_{yx}$ are both **continuous** on $D$. Then $f_{xy}(a, b) = f_{yx}(a, b)$. See [[calc3-clairauts-theorem]].',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the order should not matter',
          text: 'Both mixed partials are limits of the same "double difference" $\\dfrac{f(a + h, b + k) - f(a + h, b) - f(a, b + k) + f(a, b)}{hk}$, the corner values of a tiny rectangle. Dividing first by $h$ and letting $h \\to 0$ gives $f_{xy}$; dividing first by $k$ gives $f_{yx}$. The two limits are taken in different orders, and continuity of the mixed partials is what guarantees that swapping the order of the limits is harmless.',
        },
      ],
    },
    // 9
    {
      kind: 'numeric',
      prompt: 'For $f(x, y) = x^2y^3 + e^{xy}$, find $f_{xy}(1, 1)$. Give a decimal to 2 places, or the exact value written as `6 + 2e` (the form `2e+6` would be read as scientific notation).',
      hint: 'First $f_x = 2xy^3 + ye^{xy}$. Then differentiate that with respect to $y$ (product rule on $ye^{xy}$).',
      label: '$f_{xy}(1, 1) =$',
      answer: '6 + 2e',
      answerTex: '6 + 2e \\approx 11.44',
      explanation: '$f_x = 2xy^3 + ye^{xy}$. Then $f_{xy} = 6xy^2 + \\left(e^{xy} + y \\cdot xe^{xy}\\right) = 6xy^2 + e^{xy} + xye^{xy}$. At $(1, 1)$: $6 + e + e = 6 + 2e \\approx 11.44$. Check the other order: $f_y = 3x^2y^2 + xe^{xy}$, $f_{yx} = 6xy^2 + e^{xy} + xye^{xy}$, the same, as Clairaut promises.',
    },
    // 10 ────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'When the mixed partials disagree',
      blocks: [
        {
          type: 'p',
          text: 'Clairaut\'s theorem has a hypothesis, and it is not decoration. Here is a function, continuous everywhere with first partials everywhere, whose mixed partials at the origin are different.',
        },
        {
          type: 'math',
          tex: 'f(x, y) = \\begin{cases} \\dfrac{xy(x^2 - y^2)}{x^2 + y^2} & (x, y) \\ne (0, 0) \\\\ 0 & (x, y) = (0, 0) \\end{cases}',
        },
        {
          type: 'plot3d',
          x: [-1.5, 1.5],
          y: [-1.5, 1.5],
          z: [-0.6, 0.6],
          parametricSurfaces: [{ x: 'u*cos(v)', y: 'u*sin(v)', z: 'u^2*sin(4v)/4', u: [0, 1.5], v: [0, '2pi'], color: 'purple', opacity: 0.75, label: '$z = \\dfrac{xy(x^2 - y^2)}{x^2 + y^2}$' }],
          curves: [
            { x: '0', y: 't', z: '0', t: [-1.5, 1.5], color: 'blue', label: 'slice $x = 0$' },
            { x: 't', y: '0', z: '0', t: [-1.5, 1.5], color: 'red', label: 'slice $y = 0$' },
          ],
          resolution: 40,
          view: { azimuth: 30, elevation: 28 },
          caption: 'In polar form the surface is $z = \\frac{r^2}{4}\\sin 4\\theta$: a saddle with four hills and four valleys around the origin. It is smooth-looking, but its twist at the origin depends on which way you measure it.',
        },
        {
          type: 'derivation',
          title: 'The two mixed partials at the origin',
          steps: [
            { tex: 'f_x(0, y) = \\lim_{h \\to 0}\\frac{f(h, y) - f(0, y)}{h} = \\lim_{h \\to 0}\\frac{y(h^2 - y^2)}{h^2 + y^2} = -y', why: 'Use the definition along the line $x = 0$ (for $y \\ne 0$): $f(0, y) = 0$ and $\\frac{f(h, y)}{h} = \\frac{y(h^2 - y^2)}{h^2 + y^2}$. At $y = 0$ the formula also gives $f_x(0, 0) = 0$.' },
            { tex: 'f_{xy}(0, 0) = \\frac{d}{dy}(-y)\\Big|_{y = 0} = -1', why: 'Differentiate $f_x(0, y)$ in $y$.' },
            { tex: 'f_y(x, 0) = \\lim_{k \\to 0}\\frac{f(x, k) - f(x, 0)}{k} = \\lim_{k \\to 0}\\frac{x(x^2 - k^2)}{x^2 + k^2} = x', why: 'The same computation along $y = 0$.' },
            { tex: 'f_{yx}(0, 0) = \\frac{d}{dx}(x)\\Big|_{x = 0} = 1', why: 'Differentiate $f_y(x, 0)$ in $x$.' },
          ],
          result: '$f_{xy}(0, 0) = -1 \\ne 1 = f_{yx}(0, 0)$. Clairaut does not apply because $f_{xy}$ is not continuous at the origin (away from it, $f_{xy}$ takes values like $\\frac{x^6 + 9x^4y^2 - 9x^2y^4 - y^6}{(x^2 + y^2)^3}$, which depends on direction).',
        },
        {
          type: 'callout',
          variant: 'note',
          text: 'In practice almost every function you meet has continuous second partials (they are called $C^2$ functions), so you may swap the order of differentiation freely. Use the order that is easier: for $f = x\\sin(y) + e^{y^3}\\cos y$, computing $f_{yx}$ means fighting $e^{y^3}\\cos y$ first, but $f_{xy} = (\\sin y)_y = \\cos y$ takes one line.',
        },
      ],
    },
    // 11
    {
      kind: 'truefalse',
      prompt: 'For every function $f(x, y)$ whose second partial derivatives exist, $f_{xy} = f_{yx}$ at every point.',
      answer: false,
      explanation: 'Existence is not enough. $f = \\frac{xy(x^2 - y^2)}{x^2 + y^2}$ (with $f(0, 0) = 0$) has all second partials at the origin, yet $f_{xy}(0, 0) = -1$ and $f_{yx}(0, 0) = 1$. Clairaut\'s theorem needs the mixed partials to be **continuous** near the point.',
    },
    // 12
    {
      kind: 'error',
      prompt: 'A student computes $f_y$ for $f(x, y) = x^2\\sin(xy)$. Tap the first wrong line.',
      lines: [
        'Hold $x$ constant, so $x^2$ is a constant factor',
        '$f_y = x^2 \\cdot \\dfrac{\\partial}{\\partial y}\\sin(xy)$',
        '$= x^2\\cos(xy)$',
        'So $f_y(1, \\pi) = 1 \\cdot \\cos\\pi = -1$',
      ],
      errorLines: [3],
      explanation: 'Line 3 forgets the chain rule: $\\frac{\\partial}{\\partial y}\\sin(xy) = \\cos(xy) \\cdot \\frac{\\partial}{\\partial y}(xy) = x\\cos(xy)$. So $f_y = x^3\\cos(xy)$, and $f_y(1, \\pi) = \\cos\\pi = -1$. At this particular point the slip is invisible because $x = 1$; at $(2, \\pi)$ the correct value is $8\\cos 2\\pi = 8$, not $4$.',
    },
    // 13 ────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'A first look at partial differential equations',
      blocks: [
        {
          type: 'p',
          text: 'Physics is written in [[calc3-pde|partial differential equations]] (PDEs): equations relating a function of several variables to its partial derivatives. Three famous ones, for $u(x, t)$ or $u(x, y)$:',
        },
        {
          type: 'table',
          headers: ['Equation', 'Describes', 'A solution'],
          rows: [
            ['Heat: $u_t = \\alpha^2 u_{xx}$', 'diffusion of heat, smoke, chemicals', '$e^{-\\alpha^2k^2t}\\sin kx$'],
            ['[[phys-wave-equation|Wave]]: $u_{tt} = c^2u_{xx}$', 'strings, sound, water ripples', '$\\sin(x - ct)$, any $g(x - ct)$'],
            ['Laplace: $u_{xx} + u_{yy} = 0$', 'steady temperature, potentials, ideal flow', '$x^2 - y^2$, $e^x\\sin y$'],
          ],
          caption: 'Each solution can be checked by computing two partial derivatives and comparing.',
        },
        {
          type: 'derivation',
          title: 'Check that $u = e^{-\\alpha^2k^2t}\\sin kx$ solves the [[calc3-heat-equation|heat equation]]',
          steps: [
            { tex: 'u_t = -\\alpha^2k^2\\,e^{-\\alpha^2k^2t}\\sin kx', why: 'Differentiate in $t$ with $x$ frozen: $\\sin kx$ is a constant factor.' },
            { tex: 'u_x = k\\,e^{-\\alpha^2k^2t}\\cos kx, \\quad u_{xx} = -k^2e^{-\\alpha^2k^2t}\\sin kx', why: 'Differentiate twice in $x$ with $t$ frozen.' },
            { tex: '\\alpha^2u_{xx} = -\\alpha^2k^2e^{-\\alpha^2k^2t}\\sin kx = u_t \\ \\checkmark', why: 'Multiply by $\\alpha^2$ and compare.' },
          ],
          result: 'The decay rate $\\alpha^2k^2$ grows with $k^2$: sharp wiggles (large $k$) die out fast, broad shapes linger. That is why heat smooths things.',
        },
        {
          type: 'graph',
          x: [0, 3.1416],
          y: [-0.2, 1.4],
          xStep: 'pi',
          functions: [
            { expr: 'e^(-s)sin(x) + e^(-9s)sin(3x)/3', label: '$u(x, t)$', color: 'red', domain: [0, 'pi'] },
            { expr: 'sin(x) + sin(3x)/3', label: '$u(x, 0)$', color: 'gray', dashed: true, domain: [0, 'pi'] },
          ],
          sliders: [{ name: 's', min: 0, max: 1.5, step: 0.01, value: 0, label: 'time $t$', play: true, speed: 0.3 }],
          readouts: [{ label: 'temperature at the middle $u(\\pi/2, t) =$', expr: 'e^(-s) - e^(-9s)/3' }],
          caption: 'A rod with ends held at $0$ and initial temperature $\\sin x + \\frac13\\sin 3x$ (with $\\alpha = 1$). Press ▶: the $\\sin 3x$ ripple decays like $e^{-9t}$ and vanishes almost at once, leaving the smooth $\\sin x$ hump to fade like $e^{-t}$.',
        },
        {
          type: 'p',
          text: 'Computers solve PDEs by replacing each partial derivative with a finite difference. The second partial $u_{xx}$ becomes $\\frac{u_{i+1} - 2u_i + u_{i-1}}{\\Delta x^2}$ (the second difference of neighbors), and stepping $u_t$ forward in time gives a simulation. Water ripples, heat spreading on a map and the "Laplacian smoothing" of meshes in games are all this idea.',
        },
        {
          type: 'code',
          title: 'heat.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdio>
#include <vector>

// Heat equation u_t = u_xx on 0 <= x <= 1, ends held at 0, u(x, 0) = sin(pi x).
int main() {
    const double pi = std::acos(-1.0);
    const int n = 20;                       // grid cells
    const double dx = 1.0 / n, dt = 0.001;  // dt/dx^2 = 0.4 (stable if <= 0.5)
    std::vector<double> u(n + 1), next(n + 1);
    for (int i = 0; i <= n; ++i) u[i] = std::sin(pi * i * dx);

    for (int step = 0; step < 100; ++step) {            // march to t = 0.1
        for (int i = 1; i < n; ++i) {
            double uxx = (u[i + 1] - 2 * u[i] + u[i - 1]) / (dx * dx);
            next[i] = u[i] + dt * uxx;                   // u_t = u_xx
        }
        next[0] = next[n] = 0.0;
        u.swap(next);
    }
    double exact = std::exp(-pi * pi * 0.1);           // e^{-pi^2 t} sin(pi x) at x = 1/2
    std::printf("u(0.5, 0.1): simulated %.4f, exact %.4f\\n", u[n / 2], exact);
    std::printf("u(0.25, 0.1): simulated %.4f, exact %.4f\\n", u[n / 4], exact * std::sin(pi / 4));
}`,
          output: `u(0.5, 0.1): simulated 0.3716, exact 0.3727
u(0.25, 0.1): simulated 0.2628, exact 0.2635`,
          annotations: [
            { lines: 15, text: 'The second partial $u_{xx}$ as a central second difference of the three neighboring samples.' },
            { lines: 16, text: 'Forward Euler in time: $u(t + \\Delta t) \\approx u + \\Delta t\\,u_t$, with $u_t$ replaced by $u_{xx}$ from the PDE.' },
            { lines: 9, text: 'This explicit scheme blows up if $\\Delta t/\\Delta x^2 > \\frac12$. Try $dt = 0.002$ to see the numbers explode.' },
          ],
        },
      ],
    },
    // 14
    {
      kind: 'mcq',
      prompt: 'Which function satisfies [[calc3-laplace-equation|Laplace\'s equation]] $u_{xx} + u_{yy} = 0$?',
      options: [
        { text: '$u = x^3 + y^3$', why: '$u_{xx} + u_{yy} = 6x + 6y$, not zero in general.' },
        { text: '$u = x^2y$', why: '$u_{xx} = 2y$ and $u_{yy} = 0$, so the sum is $2y$.' },
        { text: '$u = x^3 - 3xy^2$', correct: true, why: '$u_{xx} = 6x$ and $u_{yy} = -6x$, which cancel.' },
        { text: '$u = e^{x + y}$', why: '$u_{xx} = u_{yy} = e^{x + y}$, so the sum is $2e^{x + y} > 0$.' },
      ],
      explanation: 'For $u = x^3 - 3xy^2$: $u_x = 3x^2 - 3y^2$, $u_{xx} = 6x$; $u_y = -6xy$, $u_{yy} = -6x$. The sum is $0$, so $u$ is **harmonic**. (It is the real part of $(x + iy)^3$, a fact you may meet again in complex analysis.) Harmonic functions describe steady-state temperatures: no point is hotter than the average of its neighbors.',
    },
    // 15
    {
      kind: 'order',
      prompt: 'Put the steps for finding $\\dfrac{\\partial z}{\\partial x}$ from an equation $F(x, y, z) = 0$ by implicit differentiation in order.',
      lines: [
        'Differentiate both sides with respect to $x$, holding $y$ constant and treating $z$ as a function of $x$ and $y$',
        'Use the chain rule on every term containing $z$, producing factors of $\\dfrac{\\partial z}{\\partial x}$',
        'Move all terms containing $\\dfrac{\\partial z}{\\partial x}$ to one side and everything else to the other',
        'Factor out $\\dfrac{\\partial z}{\\partial x}$ and divide by its coefficient',
      ],
      distractors: ['Differentiate every $y$-term with the chain rule, producing factors of $\\dfrac{\\partial y}{\\partial x}$'],
      explanation: 'The structure matches single-variable implicit differentiation, with one twist: $y$ is an independent variable held constant, so $y$-terms behave like numbers (the distractor\'s $\\frac{\\partial y}{\\partial x}$ is $0$). Only $z$ depends on $x$, so only $z$-terms produce $\\frac{\\partial z}{\\partial x}$.',
    },
  ],
  takeaways: [
    '$f_x(a, b)$ freezes $y = b$ and differentiates in $x$: it is the slope of the slice of $z = f(x, y)$ by the plane $y = b$; $f_y$ slices with $x = a$.',
    'All single-variable rules apply; a factor with no $x$ is a constant for $\\partial/\\partial x$, but the chain rule still applies inside compositions like $\\sin(xy)$.',
    'Central differences estimate partials from samples; the slice tangents $\\langle 1, 0, h_x \\rangle \\times \\langle 0, 1, h_y \\rangle = \\langle -h_x, -h_y, 1 \\rangle$ give a heightmap\'s normal.',
    'There are four second partials; Clairaut: $f_{xy} = f_{yx}$ when the mixed partials are continuous, and the hypothesis really matters.',
    'PDEs such as the heat, wave and Laplace equations relate partial derivatives; verify a solution by differentiating, and simulate one with finite differences.',
  ],
  reading: [
    {
      title: 'OpenStax Calculus Volume 3, Chapter 4: Differentiation of Functions of Several Variables',
      url: 'https://openstax.org/details/books/calculus-volume-3',
      source: 'openstax',
      note: 'Section 4.3 covers partial derivatives, higher-order partials, Clairaut\'s theorem and the heat equation.',
    },
    {
      title: 'Khan Academy: Multivariable calculus',
      url: 'https://www.khanacademy.org/math/multivariable-calculus',
      source: 'khan',
      note: 'The "Partial derivatives" videos animate the slice picture of $f_x$ and $f_y$.',
    },
    {
      title: 'Wikipedia: Symmetry of second derivatives',
      url: 'https://en.wikipedia.org/wiki/Symmetry_of_second_derivatives',
      source: 'wikipedia',
      note: 'Precise versions of Clairaut\'s (Schwarz\'s) theorem and the classic counterexample used in this lesson.',
    },
  ],
};
