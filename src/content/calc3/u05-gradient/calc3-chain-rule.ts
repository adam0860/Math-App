import type { Lesson } from '../../types';

const TREE_SVG = `<svg viewBox="0 0 520 252" xmlns="http://www.w3.org/2000/svg" font-size="15">
  <g stroke="currentColor" stroke-width="1.6" fill="none">
    <line x1="260" y1="44" x2="160" y2="112" class="s-blue" stroke-width="2.6"/>
    <line x1="260" y1="44" x2="360" y2="112" class="s-blue" stroke-width="2.6"/>
    <line x1="150" y1="140" x2="96" y2="212" class="s-blue" stroke-width="2.6"/>
    <line x1="150" y1="140" x2="204" y2="212"/>
    <line x1="370" y1="140" x2="316" y2="212" class="s-blue" stroke-width="2.6"/>
    <line x1="370" y1="140" x2="424" y2="212"/>
  </g>
  <g stroke="currentColor" stroke-width="1.6">
    <circle cx="260" cy="28" r="18" fill="none"/>
    <circle cx="150" cy="124" r="18" fill="none"/>
    <circle cx="370" cy="124" r="18" fill="none"/>
    <circle cx="90" cy="228" r="18" class="s-blue f-blue" fill-opacity="0.15"/>
    <circle cx="210" cy="228" r="18" fill="none"/>
    <circle cx="310" cy="228" r="18" class="s-blue f-blue" fill-opacity="0.15"/>
    <circle cx="430" cy="228" r="18" fill="none"/>
  </g>
  <g font-style="italic" text-anchor="middle" font-size="17">
    <text x="260" y="34">z</text>
    <text x="150" y="130">x</text>
    <text x="370" y="130">y</text>
    <text x="90" y="234">s</text>
    <text x="210" y="234">t</text>
    <text x="310" y="234">s</text>
    <text x="430" y="234">t</text>
  </g>
  <g font-size="14">
    <text x="198" y="72" text-anchor="end">∂z/∂x</text>
    <text x="322" y="72" text-anchor="start">∂z/∂y</text>
    <text x="114" y="178" text-anchor="end" class="t-blue">∂x/∂s</text>
    <text x="186" y="178" text-anchor="start">∂x/∂t</text>
    <text x="334" y="178" text-anchor="end" class="t-blue">∂y/∂s</text>
    <text x="406" y="178" text-anchor="start">∂y/∂t</text>
  </g>
</svg>`;

export const lesson: Lesson = {
  id: 'calc3-chain-rule',
  title: 'The Multivariable Chain Rule',
  summary: 'When the inputs of a function are themselves moving, how fast does the output change? Add up one product per path through the dependency tree. It is the engine behind implicit differentiation, related rates and backpropagation.',
  minutes: 17,
  objectives: [
    'Compute $\\frac{dz}{dt}$ when $z = f(x, y)$ and $x$, $y$ are functions of $t$',
    'Draw a tree diagram and use it to write the chain rule for any pattern of dependence',
    'Differentiate implicitly with $\\frac{dy}{dx} = -\\frac{F_x}{F_y}$ and $\\frac{\\partial z}{\\partial x} = -\\frac{F_x}{F_z}$',
    'Solve related-rates problems with several changing quantities',
    'Recognize the chain rule as the mathematics of automatic differentiation and backpropagation',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'A moving point on a surface',
      blocks: [
        {
          type: 'p',
          text: 'The one-variable [[chain-rule]] says that if $y = f(x)$ and $x = g(t)$, then $\\frac{dy}{dt} = \\frac{dy}{dx}\\frac{dx}{dt}$: rates multiply along a chain of dependence. Now let $z = f(x, y)$ be, say, the temperature over a region, and let a drone fly along a path $x = x(t)$, $y = y(t)$. The temperature the drone reads is $z(t) = f(x(t), y(t))$. How fast is that reading changing?',
        },
        {
          type: 'p',
          text: 'In a short time $\\Delta t$ the drone moves by $\\Delta x$ and $\\Delta y$. By the [[calc3-total-differential|linear approximation]] from the last lesson, $\\Delta z \\approx f_x\\,\\Delta x + f_y\\,\\Delta y$. Divide by $\\Delta t$ and let $\\Delta t \\to 0$:',
        },
        {
          type: 'theorem',
          name: 'Chain rule, case 1',
          tex: '\\frac{dz}{dt} = \\frac{\\partial z}{\\partial x}\\frac{dx}{dt} + \\frac{\\partial z}{\\partial y}\\frac{dy}{dt}',
          text: 'Valid when $f$ is [[calc3-differentiable|differentiable]] at $(x(t), y(t))$ and $x$, $y$ are differentiable at $t$. Each term is "how sensitive $z$ is to one input" times "how fast that input moves".',
        },
        {
          type: 'plot3d',
          x: [-1, 1],
          y: [-1, 1],
          z: [-4.2, 4.2],
          surfaces: [{ expr: 'x^2 y + 3x y^4', color: 'blue', opacity: 0.5, label: '$z = x^2 y + 3xy^4$' }],
          curves: [
            { x: 'sin(2t)', y: 'cos(t)', z: '-4.2', t: [0, '2pi'], color: 'gray', dashed: true, label: 'path $(\\sin 2t, \\cos t)$' },
            { x: 'sin(2t)', y: 'cos(t)', z: 'sin(2t)^2 cos(t) + 3sin(2t)cos(t)^4', t: [0, '2pi'], color: 'red', label: 'what the drone reads, $z(t)$' },
          ],
          points: [
            { x: 'sin(2s)', y: 'cos(s)', z: 'sin(2s)^2 cos(s) + 3sin(2s)cos(s)^4', color: 'red' },
            { x: 'sin(2s)', y: 'cos(s)', z: -4.2, color: 'gray' },
          ],
          vectors: [
            {
              from: ['sin(2s)', 'cos(s)', 'sin(2s)^2 cos(s) + 3sin(2s)cos(s)^4'],
              to: [
                'sin(2s) + 0.25*2cos(2s)',
                'cos(s) - 0.25*sin(s)',
                'sin(2s)^2 cos(s) + 3sin(2s)cos(s)^4 + 0.25*((2sin(2s)cos(s) + 3cos(s)^4)*2cos(2s) - (sin(2s)^2 + 12sin(2s)cos(s)^3)*sin(s))',
              ],
              color: 'orange',
            },
          ],
          sliders: [{ name: 's', min: 0, max: 6.28, step: 0.01, value: 0, label: 'time $t$', play: true, loop: true, speed: 0.8 }],
          readouts: [
            { label: '$\\frac{dz}{dt} =$', expr: '(2sin(2s)cos(s) + 3cos(s)^4)*2cos(2s) - (sin(2s)^2 + 12sin(2s)cos(s)^3)*sin(s)', digits: 3 },
          ],
          view: { azimuth: 40, elevation: 24 },
          caption: 'The dashed path lives in the $xy$-plane; lifting it onto the surface gives the red curve. Press ▶: the orange arrow is the velocity of the lifted point, and its steepness is $\\frac{dz}{dt}$. At $t = 0$ it equals $6$, as the worked example below shows.',
        },
        {
          type: 'derivation',
          title: 'Find $\\frac{dz}{dt}$ at $t = 0$ for $z = x^2 y + 3xy^4$, $x = \\sin 2t$, $y = \\cos t$',
          steps: [
            { tex: '\\frac{\\partial z}{\\partial x} = 2xy + 3y^4, \\quad \\frac{\\partial z}{\\partial y} = x^2 + 12xy^3', why: 'Partial derivatives of the outer function.' },
            { tex: '\\frac{dx}{dt} = 2\\cos 2t, \\quad \\frac{dy}{dt} = -\\sin t', why: 'Derivatives of the inner functions (one-variable chain rule for $\\sin 2t$).' },
            { tex: '\\frac{dz}{dt} = (2xy + 3y^4)(2\\cos 2t) + (x^2 + 12xy^3)(-\\sin t)', why: 'Assemble the chain rule: one product per input variable.' },
            { tex: 't = 0:\\quad x = 0,\\ y = 1', why: 'Find where the point is at the instant you care about.' },
            { tex: '\\frac{dz}{dt}\\Big|_{t = 0} = (0 + 3)(2) + (0)(0) = 6', why: 'Substitute. The second term vanishes because $\\sin 0 = 0$: at $t = 0$ the path is moving purely in the $x$-direction.' },
          ],
          result: '$\\frac{dz}{dt} = 6$ at $t = 0$. You never had to write out $z(t)$ explicitly.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why it is a sum, not a product',
          text: 'Each input contributes its own small change to $z$, and for a differentiable function small changes **add**: that is exactly what the tangent plane says. The error terms $\\varepsilon_1 \\Delta x + \\varepsilon_2 \\Delta y$ in the definition of differentiability, divided by $\\Delta t$, go to $0 \\cdot x\'(t) + 0 \\cdot y\'(t) = 0$. This is why the theorem needs $f$ to be differentiable, not merely to have partial derivatives.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'numeric',
      prompt: 'Let $z = x^2 + xy$ with $x = t^2$ and $y = 3t$. Use the chain rule to find $\\frac{dz}{dt}$ at $t = 1$.',
      label: '$\\frac{dz}{dt} =$',
      answer: '13',
      hint: 'At $t = 1$: $x = 1$, $y = 3$, $\\frac{dx}{dt} = 2$, $\\frac{dy}{dt} = 3$.',
      explanation: '$z_x = 2x + y = 5$ and $z_y = x = 1$ at $(1, 3)$. So $\\frac{dz}{dt} = 5 \\cdot 2 + 1 \\cdot 3 = 13$. Check by substituting first: $z = t^4 + 3t^3$, so $z\'(t) = 4t^3 + 9t^2$, which is $13$ at $t = 1$. Both routes must agree.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Tree diagrams: one term per path',
      blocks: [
        {
          type: 'p',
          text: 'Often the inputs depend on **two** variables. Let $z = f(x, y)$ with $x = g(s, t)$ and $y = h(s, t)$. Then $z$ is a function of $s$ and $t$, and you want $\\frac{\\partial z}{\\partial s}$ and $\\frac{\\partial z}{\\partial t}$. Holding $t$ fixed makes $x$ and $y$ functions of $s$ alone, so case 1 applies with partial derivatives in place of ordinary ones.',
        },
        {
          type: 'figure',
          svg: TREE_SVG,
          alt: 'Tree diagram: z at the top branches to x and y; x branches to s and t; y branches to s and t. The two paths from z down to s are highlighted.',
          caption: 'A [[calc3-tree-diagram]]: the dependent variable on top, intermediate variables in the middle, independent variables at the bottom. To get $\\frac{\\partial z}{\\partial s}$, follow every path from $z$ to an $s$ (blue), multiply the labels along each path, and add.',
          maxWidth: 460,
        },
        {
          type: 'theorem',
          name: 'Chain rule, case 2',
          tex: '\\frac{\\partial z}{\\partial s} = \\frac{\\partial z}{\\partial x}\\frac{\\partial x}{\\partial s} + \\frac{\\partial z}{\\partial y}\\frac{\\partial y}{\\partial s}, \\qquad \\frac{\\partial z}{\\partial t} = \\frac{\\partial z}{\\partial x}\\frac{\\partial x}{\\partial t} + \\frac{\\partial z}{\\partial y}\\frac{\\partial y}{\\partial t}',
        },
        {
          type: 'derivation',
          title: '$z = e^x \\sin y$ with $x = st^2$ and $y = s^2 t$: find $\\frac{\\partial z}{\\partial s}$ and $\\frac{\\partial z}{\\partial t}$',
          steps: [
            { tex: '\\frac{\\partial z}{\\partial x} = e^x \\sin y, \\quad \\frac{\\partial z}{\\partial y} = e^x \\cos y', why: 'The top branches of the tree.' },
            { tex: '\\frac{\\partial x}{\\partial s} = t^2, \\ \\frac{\\partial x}{\\partial t} = 2st, \\ \\frac{\\partial y}{\\partial s} = 2st, \\ \\frac{\\partial y}{\\partial t} = s^2', why: 'The bottom branches: four partial derivatives of the inner functions.' },
            { tex: '\\frac{\\partial z}{\\partial s} = (e^x \\sin y)(t^2) + (e^x \\cos y)(2st)', why: 'Two paths reach $s$: through $x$ and through $y$.' },
            { tex: '\\frac{\\partial z}{\\partial t} = (e^x \\sin y)(2st) + (e^x \\cos y)(s^2)', why: 'Two paths reach $t$.' },
            { tex: '\\frac{\\partial z}{\\partial s} = t^2 e^{st^2}\\sin(s^2 t) + 2st\\,e^{st^2}\\cos(s^2 t)', why: 'Replace $x$ and $y$ by their formulas so the answer is in terms of $s$ and $t$ only.' },
          ],
          result: 'Each partial derivative is a sum of two products, one for each path in the tree.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Polar coordinates are case 2',
          text: 'With $x = r\\cos\\theta$ and $y = r\\sin\\theta$, the tree gives $\\frac{\\partial z}{\\partial r} = f_x \\cos\\theta + f_y \\sin\\theta$ and $\\frac{\\partial z}{\\partial \\theta} = -f_x\\,r\\sin\\theta + f_y\\,r\\cos\\theta$. The first one is the rate of change of $f$ as you walk straight out from the origin. Keep it in mind: it is a preview of the directional derivative in the next lesson.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'expr',
      prompt: 'Let $z = x^2 - y^2$ with $x = s\\cos t$ and $y = s\\sin t$. Use the chain rule to find $\\frac{\\partial z}{\\partial t}$ in terms of $s$ and $t$.',
      label: '$\\frac{\\partial z}{\\partial t} =$',
      answer: '-2s^2 sin(2t)',
      variables: ['s', 't'],
      hint: '$\\frac{\\partial z}{\\partial t} = 2x \\cdot \\frac{\\partial x}{\\partial t} - 2y \\cdot \\frac{\\partial y}{\\partial t}$ with $\\frac{\\partial x}{\\partial t} = -s\\sin t$ and $\\frac{\\partial y}{\\partial t} = s\\cos t$.',
      explanation: '$\\frac{\\partial z}{\\partial t} = 2x(-s\\sin t) + (-2y)(s\\cos t) = -2s^2\\cos t\\sin t - 2s^2\\sin t\\cos t = -4s^2\\sin t\\cos t = -2s^2\\sin 2t$. Check: $z = s^2(\\cos^2 t - \\sin^2 t) = s^2\\cos 2t$, whose $t$-derivative is $-2s^2\\sin 2t$. Any equivalent form, like $-4s^2\\sin t\\cos t$, is accepted.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'The general chain rule, and backpropagation',
      blocks: [
        {
          type: 'p',
          text: 'The tree picture works for any number of variables. If $u$ depends on $x_1, \\dots, x_n$ and each $x_j$ depends on $t_1, \\dots, t_m$, then',
        },
        {
          type: 'theorem',
          name: 'General [[calc3-multivariable-chain-rule]]',
          tex: '\\frac{\\partial u}{\\partial t_i} = \\frac{\\partial u}{\\partial x_1}\\frac{\\partial x_1}{\\partial t_i} + \\frac{\\partial u}{\\partial x_2}\\frac{\\partial x_2}{\\partial t_i} + \\cdots + \\frac{\\partial u}{\\partial x_n}\\frac{\\partial x_n}{\\partial t_i}',
          text: 'One term for each intermediate variable. If a variable sits deeper in the tree, a path just has more factors.',
        },
        {
          type: 'p',
          text: 'Linear algebra gives a compact view. Put the partial derivatives of a map into a matrix: row $i$ holds the partial derivatives of output $i$. Then the chain rule says the derivative matrix of a composition is the **product** of the derivative matrices. It is the calculus version of the fact that composing [[linear-transformation|linear transformations]] multiplies their matrices. Near a point, every differentiable map *is* approximately linear.',
        },
        {
          type: 'math',
          tex: '\\begin{bmatrix} \\dfrac{\\partial z}{\\partial s} & \\dfrac{\\partial z}{\\partial t} \\end{bmatrix} = \\begin{bmatrix} \\dfrac{\\partial z}{\\partial x} & \\dfrac{\\partial z}{\\partial y} \\end{bmatrix} \\begin{bmatrix} \\dfrac{\\partial x}{\\partial s} & \\dfrac{\\partial x}{\\partial t} \\\\[4pt] \\dfrac{\\partial y}{\\partial s} & \\dfrac{\\partial y}{\\partial t} \\end{bmatrix}',
          caption: 'Case 2 as a row vector times a $2 \\times 2$ matrix. Multiply it out and you get exactly the two tree formulas.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Automatic differentiation',
          text: 'A neural network is a deep tree of simple functions, and training needs the partial derivative of the loss with respect to every weight. **Backpropagation** is the chain rule applied path by path, working from the loss back toward the inputs and reusing shared sub-products. Its cousin, **forward-mode** autodiff, pushes derivatives forward with "dual numbers" that carry a value and a derivative together. Every overloaded operator applies one chain-rule step.',
        },
        {
          type: 'code',
          title: 'dual.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdio>
#include <initializer_list>

// A dual number carries a value and its derivative with respect to t.
struct Dual {
    double val, der;
};

Dual operator+(Dual a, Dual b) { return {a.val + b.val, a.der + b.der}; }
Dual operator*(Dual a, Dual b) { return {a.val * b.val, a.der * b.val + a.val * b.der}; }
Dual operator*(double k, Dual a) { return {k * a.val, k * a.der}; }
Dual sin(Dual a) { return {std::sin(a.val), std::cos(a.val) * a.der}; }
Dual cos(Dual a) { return {std::cos(a.val), -std::sin(a.val) * a.der}; }

// z = x^2 y + 3 x y^4 -- written once, works for doubles and duals alike.
template <class T>
T f(T x, T y) { return x * x * y + 3.0 * (x * y * y * y * y); }

int main() {
    for (double t0 : {0.0, 1.0}) {
        Dual t{t0, 1.0};                  // seed: dt/dt = 1
        Dual x = sin(2.0 * t), y = cos(t);
        Dual z = f(x, y);

        // Check against a central difference of z(t) = f(x(t), y(t)).
        auto zt = [](double s) { return f(std::sin(2 * s), std::cos(s)); };
        double h = 1e-5, fd = (zt(t0 + h) - zt(t0 - h)) / (2 * h);
        std::printf("t = %.1f  z = %.4f  dz/dt (dual) = %.4f  (finite diff) = %.4f\\n",
                    t0, z.val, z.der, fd);
    }
}`,
          output: `t = 0.0  z = 0.0000  dz/dt (dual) = 6.0000  (finite diff) = 6.0000
t = 1.0  z = 0.6792  dz/dt (dual) = -3.1746  (finite diff) = -3.1746`,
          annotations: [
            { lines: 11, text: 'The product rule, $(ab)\' = a\'b + ab\'$, built into multiplication.' },
            { lines: '13-14', text: 'One-variable chain rule: $(\\sin a)\' = \\cos a \\cdot a\'$.' },
            { lines: 22, text: 'Seed the input with derivative $1$: we are differentiating with respect to $t$.' },
            { lines: 24, text: 'Evaluating $f$ on duals carries the derivatives through every path of the tree. The result is $\\frac{dz}{dt}$, exact to rounding, with no formula written by hand.' },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'mcq',
      prompt: 'Let $w = f(x, y, z)$, where $x$, $y$ and $z$ are each functions of $s$ and $t$. How many terms does the chain-rule formula for $\\frac{\\partial w}{\\partial s}$ have?',
      options: [
        { text: '$2$', why: 'That counts the independent variables $s$ and $t$. But $\\frac{\\partial w}{\\partial s}$ involves only $s$, reached through each intermediate variable.' },
        { text: '$3$', correct: true, why: 'One path from $w$ to $s$ through each of $x$, $y$ and $z$: $w_x x_s + w_y y_s + w_z z_s$.' },
        { text: '$6$', why: 'There are $6$ bottom branches in the tree, but only $3$ of them end at $s$. The other three belong to $\\frac{\\partial w}{\\partial t}$.' },
        { text: '$1$', why: 'A single product would ignore how $w$ changes through the other two intermediate variables.' },
      ],
      explanation: 'Draw the tree: $w$ branches to $x$, $y$, $z$, and each of those branches to $s$ and $t$. Exactly three paths end at $s$, so $\\frac{\\partial w}{\\partial s} = \\frac{\\partial w}{\\partial x}\\frac{\\partial x}{\\partial s} + \\frac{\\partial w}{\\partial y}\\frac{\\partial y}{\\partial s} + \\frac{\\partial w}{\\partial z}\\frac{\\partial z}{\\partial s}$.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'truefalse',
      prompt: 'In $\\frac{\\partial z}{\\partial s} = \\frac{\\partial z}{\\partial x}\\frac{\\partial x}{\\partial s} + \\frac{\\partial z}{\\partial y}\\frac{\\partial y}{\\partial s}$ you may cancel the $\\partial x$\'s and $\\partial y$\'s like fractions, so the right side simplifies to $2\\frac{\\partial z}{\\partial s}$.',
      answer: false,
      explanation: 'Partial derivatives are not fractions. Each term is only **part** of the change in $z$, the part routed through one intermediate variable. "Cancelling" would claim each path alone carries the whole change, and the formula would say $\\frac{\\partial z}{\\partial s} = 2\\frac{\\partial z}{\\partial s}$, which is nonsense. The fraction notation is a memory aid for which factors pair up, nothing more.',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'concept',
      title: 'Implicit differentiation, the easy way',
      blocks: [
        {
          type: 'p',
          text: 'In Calculus I, [[implicit-differentiation]] found $\\frac{dy}{dx}$ for curves like $x^3 + y^3 = 6xy$ by differentiating both sides and solving. The chain rule packages that whole process into one formula.',
        },
        {
          type: 'p',
          text: 'Suppose $F(x, y) = 0$ defines $y$ as a function of $x$. Then $F(x, y(x)) = 0$ for every $x$. Differentiate both sides with respect to $x$ using case 1, with $x$ playing the role of $t$:',
        },
        {
          type: 'derivation',
          title: 'Deriving the implicit-differentiation formula',
          steps: [
            { tex: '\\frac{d}{dx} F(x, y(x)) = 0', why: 'The left side is constant ($0$) as $x$ varies, so its derivative is $0$.' },
            { tex: 'F_x \\frac{dx}{dx} + F_y \\frac{dy}{dx} = 0', why: 'Chain rule, case 1: the tree has two paths from $F$ to $x$, one direct and one through $y$.' },
            { tex: 'F_x + F_y \\frac{dy}{dx} = 0', why: '$\\frac{dx}{dx} = 1$.' },
            { tex: '\\frac{dy}{dx} = -\\frac{F_x}{F_y} \\quad (F_y \\ne 0)', why: 'Solve for $\\frac{dy}{dx}$. Do not lose the minus sign.' },
          ],
          result: 'For a surface $F(x, y, z) = 0$ defining $z(x, y)$, the same argument gives $\\frac{\\partial z}{\\partial x} = -\\frac{F_x}{F_z}$ and $\\frac{\\partial z}{\\partial y} = -\\frac{F_y}{F_z}$, provided $F_z \\ne 0$.',
        },
        {
          type: 'graph',
          x: [-4, 5],
          y: [-4, 5],
          equal: true,
          implicit: [{ expr: 'x^3 + y^3 - 6x*y', levels: [0], label: '$x^3 + y^3 = 6xy$', color: 'blue' }],
          functions: [{ expr: '6 - x', label: 'tangent $y = 6 - x$', color: 'orange', dashed: true }],
          points: [{ x: 3, y: 3, label: '(3, 3)' }],
          caption: 'The folium of Descartes. With $F = x^3 + y^3 - 6xy$, $\\frac{dy}{dx} = -\\frac{3x^2 - 6y}{3y^2 - 6x}$. At $(3, 3)$ this is $-\\frac{27 - 18}{27 - 18} = -1$, so the tangent is $y = 6 - x$.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Where the formula breaks',
          text: 'The formula needs $F_y \\ne 0$. On the folium, $F_y = 3y^2 - 6x = 0$ at the origin (where the curve crosses itself) and at the point with a vertical tangent. There the curve is not the graph of a differentiable $y(x)$ near the point. The **implicit function theorem** makes this precise: if $F_y \\ne 0$ at a point and the partials are continuous, the equation really does define a differentiable $y(x)$ nearby.',
        },
        {
          type: 'deepdive',
          title: 'Three variables: $x^3 + y^3 + z^3 + 6xyz = 1$',
          blocks: [
            {
              type: 'p',
              text: 'Take $F = x^3 + y^3 + z^3 + 6xyz - 1$. Then $F_x = 3x^2 + 6yz$, $F_y = 3y^2 + 6xz$ and $F_z = 3z^2 + 6xy$, so',
            },
            {
              type: 'math',
              tex: '\\frac{\\partial z}{\\partial x} = -\\frac{3x^2 + 6yz}{3z^2 + 6xy} = -\\frac{x^2 + 2yz}{z^2 + 2xy}, \\qquad \\frac{\\partial z}{\\partial y} = -\\frac{y^2 + 2xz}{z^2 + 2xy}',
            },
            {
              type: 'p',
              text: 'Doing this "by hand" means differentiating every term with respect to $x$ while remembering that $z$ depends on $x$. The formula does that bookkeeping for you.',
            },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'expr',
      prompt: 'The equation $x^2 + xy + y^3 = 7$ defines $y$ implicitly as a function of $x$. Find $\\frac{dy}{dx}$ in terms of $x$ and $y$.',
      label: '$\\frac{dy}{dx} =$',
      answer: '-(2x + y)/(x + 3y^2)',
      variables: ['x', 'y'],
      domain: [0.5, 2],
      hint: 'Let $F = x^2 + xy + y^3 - 7$. Compute $F_x$ and $F_y$, then use $\\frac{dy}{dx} = -\\frac{F_x}{F_y}$.',
      explanation: '$F_x = 2x + y$ (in $x$, the term $xy$ has derivative $y$, and $y^3$ is constant) and $F_y = x + 3y^2$. So $\\frac{dy}{dx} = -\\frac{2x + y}{x + 3y^2}$. For example, at $(2, 1)$, which is on the curve since $4 + 2 + 1 = 7$, the slope is $-\\frac{5}{5} = -1$.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'error',
      prompt: 'A student finds $\\frac{\\partial z}{\\partial x}$ at $(1, 1, 1)$ for the surface $x^2 + y^2 + z^2 = 3xyz$. Tap the first line that is wrong.',
      lines: [
        '$F(x, y, z) = x^2 + y^2 + z^2 - 3xyz$',
        '$F_x = 2x - 3yz$',
        '$F_z = 2z - 3xy$',
        '$\\frac{\\partial z}{\\partial x} = \\frac{2x - 3yz}{2z - 3xy}$',
        'At $(1, 1, 1)$: $\\frac{\\partial z}{\\partial x} = \\frac{2 - 3}{2 - 3} = 1$',
      ],
      errorLines: [4],
      explanation: 'The formula is $\\frac{\\partial z}{\\partial x} = -\\frac{F_x}{F_z}$; line 4 drops the minus sign. It comes from $F_x + F_z\\,\\frac{\\partial z}{\\partial x} = 0$. Correctly $\\frac{\\partial z}{\\partial x} = -\\frac{2x - 3yz}{2z - 3xy} = \\frac{3yz - 2x}{2z - 3xy}$, which is $-1$ at $(1, 1, 1)$. That point is on the surface, since $1 + 1 + 1 = 3$.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'Related rates with several moving parts',
      blocks: [
        {
          type: 'p',
          text: 'In Calculus I [[related-rates]] problems usually had one equation and you differentiated it with respect to time. With the multivariable chain rule you can handle a quantity that depends on several changing variables at once. Write the quantity as a function of the variables, then $\\frac{d}{dt}$ is one chain-rule sum.',
        },
        {
          type: 'derivation',
          title: 'Two vehicles near a crossroads',
          steps: [
            { tex: 'x = 3,\\ \\frac{dx}{dt} = 50; \\quad y = 4,\\ \\frac{dy}{dt} = -30', why: 'A tank is $3$ km east of the crossroads, driving east at $50$ km/h. A supply truck is $4$ km north, driving south (toward the crossroads) at $30$ km/h, so $y$ is decreasing.' },
            { tex: 'D = \\sqrt{x^2 + y^2}', why: 'The roads are perpendicular, so the distance between the vehicles is a hypotenuse.' },
            { tex: '\\frac{dD}{dt} = \\frac{\\partial D}{\\partial x}\\frac{dx}{dt} + \\frac{\\partial D}{\\partial y}\\frac{dy}{dt} = \\frac{x}{D}\\frac{dx}{dt} + \\frac{y}{D}\\frac{dy}{dt}', why: 'Chain rule, case 1, with $D_x = \\frac{x}{\\sqrt{x^2 + y^2}}$ and $D_y = \\frac{y}{\\sqrt{x^2 + y^2}}$.' },
            { tex: '\\frac{dD}{dt} = \\frac{3}{5}(50) + \\frac{4}{5}(-30) = 30 - 24 = 6', why: 'Substitute the values at this instant, where $D = 5$. Only now, after differentiating, do you plug in numbers.' },
          ],
          result: 'The distance is **increasing** at $6$ km/h: the tank pulling away wins over the truck closing in.',
        },
        {
          type: 'p',
          text: 'Each term has a clear meaning. $\\frac{x}{D}\\frac{dx}{dt}$ is the part of the tank\'s velocity directed along the line between the vehicles, a [[vector-projection|projection]]. Rates add because the chain rule is linear.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'The ideal gas law',
          text: 'Physics gives the same pattern. For one mole of gas, $P = \\frac{8.31\\,T}{V}$ (kPa, K, L). If $T = 300$ K is rising at $0.1$ K/s while $V = 100$ L is growing at $0.2$ L/s, then $\\frac{dP}{dt} = \\frac{8.31}{V}\\frac{dT}{dt} - \\frac{8.31\\,T}{V^2}\\frac{dV}{dt} = 0.00831 - 0.04986 \\approx -0.0416$ kPa/s. The expansion wins and the pressure falls.',
        },
      ],
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'order',
      prompt: 'Put the steps of a multivariable related-rates solution in order.',
      lines: [
        'Write an equation for the wanted quantity in terms of the changing variables, valid at every time',
        'Differentiate with respect to $t$ using the chain rule: one term per variable',
        'Substitute the values of the variables and their rates at the instant of interest',
        'Solve for the unknown rate and interpret its sign and units',
      ],
      distractors: ['Substitute the instant\'s values into the equation before differentiating'],
      explanation: 'The relationship must hold for all $t$ before you differentiate it. If you plug in the instant\'s numbers first, $D = \\sqrt{3^2 + 4^2} = 5$ becomes a constant and its derivative is a useless $0$. Differentiate the general relationship, then substitute, then interpret the sign (positive means increasing).',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'numeric',
      prompt: 'A cylindrical tank is being reshaped: its radius is $2$ m and shrinking at $0.1$ m/min, while its height is $5$ m and growing at $0.3$ m/min. How fast is the volume $V = \\pi r^2 h$ changing? Give an exact answer (like `-2pi`) or a decimal to two places.',
      label: '$\\frac{dV}{dt} =$',
      unit: 'm³/min',
      answer: '-0.8pi',
      answerTex: '-0.8\\pi \\approx -2.51',
      hint: '$\\frac{dV}{dt} = 2\\pi r h\\,\\frac{dr}{dt} + \\pi r^2\\,\\frac{dh}{dt}$, with $\\frac{dr}{dt} = -0.1$.',
      explanation: '$\\frac{dV}{dt} = 2\\pi(2)(5)(-0.1) + \\pi(2)^2(0.3) = -2\\pi + 1.2\\pi = -0.8\\pi \\approx -2.51$ m³/min. The volume is decreasing: shrinking the radius costs more than the added height gains, because $r$ enters squared.',
    },
  ],
  takeaways: [
    'If $z = f(x, y)$ and $x$, $y$ depend on $t$: $\\frac{dz}{dt} = f_x\\,\\frac{dx}{dt} + f_y\\,\\frac{dy}{dt}$, provided $f$ is differentiable.',
    'Tree diagrams organize every case: multiply the partial derivatives along each path from the top variable down to the one you differentiate with respect to, then add over all paths.',
    'In matrix form, the derivative of a composition is the product of derivative matrices. Automatic differentiation and backpropagation are this rule in code.',
    'Implicit differentiation: $\\frac{dy}{dx} = -\\frac{F_x}{F_y}$ and $\\frac{\\partial z}{\\partial x} = -\\frac{F_x}{F_z}$, valid where the denominator is nonzero.',
    'Related rates: write the general relationship, differentiate with the chain rule, and only then substitute the instant\'s values.',
  ],
  reading: [
    {
      title: 'OpenStax Calculus Volume 3, section 4.5: The Chain Rule',
      url: 'https://openstax.org/details/books/calculus-volume-3',
      source: 'openstax',
      note: 'Free textbook. Section 4.5 covers tree diagrams, the generalized chain rule and implicit differentiation with full examples.',
    },
    {
      title: "Paul's Online Math Notes: Calculus III",
      url: 'https://tutorial.math.lamar.edu/Classes/CalcIII/CalcIII.aspx',
      source: 'other',
      note: 'See "Chain Rule" under Partial Derivatives for many worked cases, including second derivatives through the chain rule.',
    },
    {
      title: 'Wikipedia: Automatic differentiation',
      url: 'https://en.wikipedia.org/wiki/Automatic_differentiation',
      source: 'wikipedia',
      note: 'How forward mode (dual numbers) and reverse mode (backpropagation) turn the chain rule into an algorithm.',
    },
  ],
};
