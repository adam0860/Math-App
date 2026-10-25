import type { CheatSheet } from '../types';

export const calc2CheatSheets: CheatSheet[] = [
  // ------------------------------------------------------------------
  {
    id: 'calc2-applications',
    title: 'Volumes, Arc Length & Work',
    course: 'calc2',
    icon: '🧊',
    description:
      'Applications of the definite integral: solids of revolution, curve length, surface area, work, plus parametric and polar formulas.',
    sections: [
      {
        title: 'Volumes',
        items: [
          {
            label: 'Volume by cross-sections',
            tex: 'V = \\int_a^b A(x)\\,dx',
            text: '$A(x)$ is the area of the slice perpendicular to the $x$-axis at $x$.',
          },
          {
            label: '[[disk-method|Disk method]]',
            tex: 'V = \\int_a^b \\pi\\,[R(x)]^2\\,dx',
            text: 'Region touches the axis; $R$ = distance from axis to curve.',
          },
          {
            label: '[[washer-method|Washer method]]',
            tex: 'V = \\int_a^b \\pi\\left([R(x)]^2 - [r(x)]^2\\right)dx',
            text: '$R$ = outer radius, $r$ = inner radius. Square each, then subtract.',
          },
          {
            label: '[[shell-method|Shell method]] (vertical axis)',
            tex: 'V = \\int_a^b 2\\pi\\, r(x)\\, h(x)\\,dx',
            text: 'About the $y$-axis $r = x$; about $x = c$, $r = |x - c|$; $h$ = top − bottom.',
          },
          {
            label: 'Shell method (horizontal axis)',
            tex: 'V = \\int_c^d 2\\pi\\, r(y)\\, h(y)\\,dy',
          },
          {
            label: 'Rotating about a shifted axis',
            tex: '\\text{axis } y = k:\\quad R(x) = |f(x) - k|',
            text: 'Radius is always measured from the axis of revolution.',
          },
        ],
      },
      {
        title: 'Length and surface area',
        items: [
          {
            label: '[[arc-length-integral|Arc length]], $y = f(x)$',
            tex: 'L = \\int_a^b \\sqrt{1 + [f\'(x)]^2}\\,dx',
          },
          {
            label: 'Arc length, $x = g(y)$',
            tex: 'L = \\int_c^d \\sqrt{1 + [g\'(y)]^2}\\,dy',
          },
          {
            label: 'Arc length differential',
            tex: 'ds = \\sqrt{dx^2 + dy^2}',
          },
          {
            label: '[[surface-area-of-revolution|Surface area]] about the $x$-axis',
            tex: 'S = \\int_a^b 2\\pi\\, f(x)\\sqrt{1 + [f\'(x)]^2}\\,dx',
            text: 'About the $y$-axis replace the radius $f(x)$ by $x$.',
          },
        ],
      },
      {
        title: 'Physics',
        items: [
          {
            label: '[[work|Work]], variable force',
            tex: 'W = \\int_a^b F(x)\\,dx',
            text: 'Units: J = N·m, or ft·lb.',
          },
          {
            label: "[[hookes-law|Hooke's law]]",
            tex: 'F(x) = kx \\quad\\implies\\quad W = \\frac{k}{2}\\left(b^2 - a^2\\right)',
            text: '$x$ = displacement from natural length.',
          },
          {
            label: 'Pumping liquid',
            tex: 'W = \\int_a^b \\rho\\, g\\, A(y)\\, D(y)\\,dy',
            text: '$A(y)$ = area of the layer at height $y$, $D(y)$ = distance it is lifted; $\\rho g \\approx 9800$ N/m³ for water (62.5 lb/ft³ in US units).',
          },
          {
            label: 'Lifting a cable of weight density $w$',
            tex: 'W = \\int_0^L w\\,x\\,dx = \\frac{wL^2}{2}',
            text: 'Hanging cable of length $L$ pulled to the top; $x$ = depth of a piece.',
          },
          {
            label: '[[average-value|Average value]]',
            tex: 'f_{\\text{avg}} = \\frac{1}{b - a}\\int_a^b f(x)\\,dx',
          },
        ],
      },
      {
        title: 'Parametric & polar',
        items: [
          {
            label: '[[parametric-equations|Parametric]] slope',
            tex: '\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt}, \\qquad \\frac{d^2y}{dx^2} = \\frac{\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right)}{dx/dt}',
          },
          {
            label: 'Parametric arc length',
            tex: 'L = \\int_\\alpha^\\beta \\sqrt{\\left(\\frac{dx}{dt}\\right)^2 + \\left(\\frac{dy}{dt}\\right)^2}\\,dt',
          },
          {
            label: 'Parametric area under a curve',
            tex: 'A = \\int_\\alpha^\\beta y(t)\\, x\'(t)\\,dt',
            text: 'Traversed left to right, curve above the $x$-axis.',
          },
          {
            label: '[[polar-curve|Polar]] conversion',
            tex: 'x = r\\cos\\theta,\\quad y = r\\sin\\theta,\\quad r^2 = x^2 + y^2,\\quad \\tan\\theta = \\frac{y}{x}',
          },
          {
            label: 'Polar slope',
            tex: '\\frac{dy}{dx} = \\frac{r\'\\sin\\theta + r\\cos\\theta}{r\'\\cos\\theta - r\\sin\\theta}',
          },
          {
            label: 'Polar area',
            tex: 'A = \\frac{1}{2}\\int_\\alpha^\\beta r^2\\,d\\theta, \\qquad A_{\\text{between}} = \\frac{1}{2}\\int_\\alpha^\\beta \\left(r_{\\text{out}}^2 - r_{\\text{in}}^2\\right)d\\theta',
          },
          {
            label: 'Polar arc length',
            tex: 'L = \\int_\\alpha^\\beta \\sqrt{r^2 + \\left(\\frac{dr}{d\\theta}\\right)^2}\\,d\\theta',
          },
        ],
      },
    ],
  },

  // ------------------------------------------------------------------
  {
    id: 'calc2-techniques',
    title: 'Integration Techniques',
    course: 'calc2',
    icon: '🧰',
    description:
      'Integration by parts, trigonometric integrals, trig substitution and partial fractions, with the rules for choosing each.',
    sections: [
      {
        title: 'Integration by parts',
        items: [
          {
            label: '[[integration-by-parts|By parts]]',
            tex: '\\int u\\,dv = uv - \\int v\\,du',
          },
          {
            label: 'Definite form',
            tex: '\\int_a^b u\\,dv = uv\\Big|_a^b - \\int_a^b v\\,du',
          },
          {
            label: 'Choosing $u$: LIATE',
            text: 'Pick $u$ as the first of **L**og, **I**nverse trig, **A**lgebraic, **T**rig, **E**xponential; the rest is $dv$.',
          },
          {
            label: 'Tabular (DI) method',
            tex: '\\int x^2 e^x\\,dx = (x^2 - 2x + 2)e^x + C',
            text: 'Differentiate $u$ to zero, integrate $dv$ repeatedly, multiply diagonally with alternating signs $+, -, +, \\dots$',
          },
          {
            label: 'Cyclic integrals',
            tex: '\\int e^x \\sin x\\,dx = \\tfrac{1}{2}e^x(\\sin x - \\cos x) + C',
            text: 'Apply parts twice; the original integral reappears, so solve for it algebraically.',
          },
        ],
      },
      {
        title: 'Trigonometric integrals',
        items: [
          {
            label: '$\\int \\sin^m x \\cos^n x\\,dx$, $m$ odd',
            tex: '\\text{save } \\sin x\\,dx,\\; \\sin^2 x = 1 - \\cos^2 x,\\; u = \\cos x',
          },
          {
            label: '$\\int \\sin^m x \\cos^n x\\,dx$, $n$ odd',
            tex: '\\text{save } \\cos x\\,dx,\\; \\cos^2 x = 1 - \\sin^2 x,\\; u = \\sin x',
          },
          {
            label: 'Both powers even',
            tex: '\\sin^2 x = \\frac{1 - \\cos 2x}{2}, \\qquad \\cos^2 x = \\frac{1 + \\cos 2x}{2}',
            text: 'Half-angle identities, repeatedly. Also $\\sin x\\cos x = \\tfrac12 \\sin 2x$.',
          },
          {
            label: '$\\int \\tan^m x \\sec^n x\\,dx$, $n$ even',
            tex: '\\text{save } \\sec^2 x\\,dx,\\; \\sec^2 x = 1 + \\tan^2 x,\\; u = \\tan x',
          },
          {
            label: '$\\int \\tan^m x \\sec^n x\\,dx$, $m$ odd',
            tex: '\\text{save } \\sec x\\tan x\\,dx,\\; \\tan^2 x = \\sec^2 x - 1,\\; u = \\sec x',
          },
          {
            label: 'Product-to-sum',
            tex: '\\begin{aligned} \\sin A\\cos B &= \\tfrac12[\\sin(A - B) + \\sin(A + B)] \\\\ \\sin A\\sin B &= \\tfrac12[\\cos(A - B) - \\cos(A + B)] \\\\ \\cos A\\cos B &= \\tfrac12[\\cos(A - B) + \\cos(A + B)] \\end{aligned}',
          },
        ],
      },
      {
        title: 'Trigonometric substitution',
        items: [
          {
            label: '$\\sqrt{a^2 - x^2}$',
            tex: 'x = a\\sin\\theta,\\; dx = a\\cos\\theta\\,d\\theta,\\; \\sqrt{a^2 - x^2} = a\\cos\\theta',
            text: '$-\\tfrac{\\pi}{2} \\le \\theta \\le \\tfrac{\\pi}{2}$, using $1 - \\sin^2\\theta = \\cos^2\\theta$.',
          },
          {
            label: '$\\sqrt{a^2 + x^2}$',
            tex: 'x = a\\tan\\theta,\\; dx = a\\sec^2\\theta\\,d\\theta,\\; \\sqrt{a^2 + x^2} = a\\sec\\theta',
            text: '$-\\tfrac{\\pi}{2} < \\theta < \\tfrac{\\pi}{2}$, using $1 + \\tan^2\\theta = \\sec^2\\theta$.',
          },
          {
            label: '$\\sqrt{x^2 - a^2}$',
            tex: 'x = a\\sec\\theta,\\; dx = a\\sec\\theta\\tan\\theta\\,d\\theta,\\; \\sqrt{x^2 - a^2} = a\\tan\\theta',
            text: '$0 \\le \\theta < \\tfrac{\\pi}{2}$ or $\\pi \\le \\theta < \\tfrac{3\\pi}{2}$, using $\\sec^2\\theta - 1 = \\tan^2\\theta$.',
          },
          {
            label: 'Back to $x$',
            text: 'Draw the right triangle from the substitution (e.g. $\\sin\\theta = x/a$: opposite $x$, hypotenuse $a$) and read off the other trig ratios.',
          },
          {
            label: 'Complete the square first',
            tex: 'x^2 + 2x + 5 = (x + 1)^2 + 4 \\;\\to\\; x + 1 = 2\\tan\\theta',
          },
        ],
      },
      {
        title: 'Partial fractions',
        items: [
          {
            label: 'Step 0',
            text: 'If $\\deg P \\ge \\deg Q$, long-divide first. Then factor $Q$ completely.',
          },
          {
            label: 'Distinct linear factors',
            tex: '\\frac{P(x)}{(x - a)(x - b)} = \\frac{A}{x - a} + \\frac{B}{x - b}',
          },
          {
            label: 'Repeated linear factor',
            tex: '\\frac{P(x)}{(x - a)^3} = \\frac{A_1}{x - a} + \\frac{A_2}{(x - a)^2} + \\frac{A_3}{(x - a)^3}',
          },
          {
            label: 'Irreducible quadratic',
            tex: '\\frac{P(x)}{(x - a)(x^2 + bx + c)} = \\frac{A}{x - a} + \\frac{Bx + C}{x^2 + bx + c}',
            text: 'Irreducible means $b^2 - 4c < 0$.',
          },
          {
            label: 'Resulting integrals',
            tex: '\\int \\frac{dx}{x - a} = \\ln|x - a|, \\quad \\int \\frac{dx}{(x - a)^k} = \\frac{(x - a)^{1-k}}{1 - k}\\;(k \\ne 1), \\quad \\int \\frac{dx}{x^2 + a^2} = \\frac{1}{a}\\arctan\\frac{x}{a}',
          },
        ],
      },
      {
        title: 'Strategy',
        items: [
          {
            label: 'Checklist',
            text: '(1) Simplify / use an identity. (2) Look for an obvious [[u-substitution]]. (3) Classify: product → parts; trig powers → trig integrals; radical of a quadratic → trig sub; rational function → partial fractions. (4) Try again with a different $u$ or rewrite.',
          },
        ],
      },
    ],
  },

  // ------------------------------------------------------------------
  {
    id: 'calc2-integral-table',
    title: 'Integral Table',
    course: 'calc2',
    icon: '📋',
    description:
      'Standard antiderivatives (add $+C$ to each), plus improper integrals and numerical integration rules.',
    sections: [
      {
        title: 'Basic forms',
        items: [
          { label: 'Power', tex: '\\int x^n\\,dx = \\frac{x^{n+1}}{n + 1}, \\quad n \\ne -1' },
          { label: 'Reciprocal', tex: '\\int \\frac{1}{x}\\,dx = \\ln|x|' },
          { label: 'Linear argument', tex: '\\int \\frac{dx}{ax + b} = \\frac{1}{a}\\ln|ax + b|' },
          { label: 'Exponentials', tex: '\\int e^{x}\\,dx = e^{x}, \\qquad \\int a^x\\,dx = \\frac{a^x}{\\ln a}' },
          { label: 'Logarithm', tex: '\\int \\ln x\\,dx = x\\ln x - x' },
          { label: '$x\\ln x$', tex: '\\int x\\ln x\\,dx = \\frac{x^2}{2}\\ln x - \\frac{x^2}{4}' },
          { label: '$xe^{ax}$', tex: '\\int x e^{ax}\\,dx = \\frac{e^{ax}}{a^2}(ax - 1)' },
        ],
      },
      {
        title: 'Trigonometric',
        items: [
          { label: 'Sine, cosine', tex: '\\int \\sin x\\,dx = -\\cos x, \\qquad \\int \\cos x\\,dx = \\sin x' },
          { label: 'Secant², cosecant²', tex: '\\int \\sec^2 x\\,dx = \\tan x, \\qquad \\int \\csc^2 x\\,dx = -\\cot x' },
          { label: 'Sec·tan, csc·cot', tex: '\\int \\sec x\\tan x\\,dx = \\sec x, \\qquad \\int \\csc x\\cot x\\,dx = -\\csc x' },
          { label: 'Tangent, cotangent', tex: '\\int \\tan x\\,dx = \\ln|\\sec x|, \\qquad \\int \\cot x\\,dx = \\ln|\\sin x|' },
          { label: 'Secant', tex: '\\int \\sec x\\,dx = \\ln|\\sec x + \\tan x|' },
          { label: 'Cosecant', tex: '\\int \\csc x\\,dx = -\\ln|\\csc x + \\cot x| = \\ln|\\csc x - \\cot x|' },
          { label: 'Squares', tex: '\\int \\sin^2 x\\,dx = \\frac{x}{2} - \\frac{\\sin 2x}{4}, \\qquad \\int \\cos^2 x\\,dx = \\frac{x}{2} + \\frac{\\sin 2x}{4}' },
          { label: 'Tangent squared', tex: '\\int \\tan^2 x\\,dx = \\tan x - x' },
          { label: 'Secant cubed', tex: '\\int \\sec^3 x\\,dx = \\tfrac{1}{2}\\left(\\sec x\\tan x + \\ln|\\sec x + \\tan x|\\right)' },
          { label: '$e^{ax}\\sin bx$', tex: '\\int e^{ax}\\sin bx\\,dx = \\frac{e^{ax}(a\\sin bx - b\\cos bx)}{a^2 + b^2}' },
          { label: '$e^{ax}\\cos bx$', tex: '\\int e^{ax}\\cos bx\\,dx = \\frac{e^{ax}(a\\cos bx + b\\sin bx)}{a^2 + b^2}' },
        ],
      },
      {
        title: 'Inverse trig and radicals ($a > 0$)',
        items: [
          { label: 'Arctangent form', tex: '\\int \\frac{dx}{x^2 + a^2} = \\frac{1}{a}\\arctan\\frac{x}{a}' },
          { label: 'Arcsine form', tex: '\\int \\frac{dx}{\\sqrt{a^2 - x^2}} = \\arcsin\\frac{x}{a}' },
          { label: 'Difference of squares', tex: '\\int \\frac{dx}{x^2 - a^2} = \\frac{1}{2a}\\ln\\left|\\frac{x - a}{x + a}\\right|' },
          { label: 'Log forms', tex: '\\int \\frac{dx}{\\sqrt{x^2 \\pm a^2}} = \\ln\\left|x + \\sqrt{x^2 \\pm a^2}\\right|' },
          { label: '$\\sqrt{a^2 - x^2}$', tex: '\\int \\sqrt{a^2 - x^2}\\,dx = \\frac{x}{2}\\sqrt{a^2 - x^2} + \\frac{a^2}{2}\\arcsin\\frac{x}{a}' },
          { label: '$\\sqrt{x^2 \\pm a^2}$', tex: '\\int \\sqrt{x^2 \\pm a^2}\\,dx = \\frac{x}{2}\\sqrt{x^2 \\pm a^2} \\pm \\frac{a^2}{2}\\ln\\left|x + \\sqrt{x^2 \\pm a^2}\\right|' },
          { label: 'Arctangent', tex: '\\int \\arctan x\\,dx = x\\arctan x - \\tfrac{1}{2}\\ln(1 + x^2)' },
          { label: 'Arcsine', tex: '\\int \\arcsin x\\,dx = x\\arcsin x + \\sqrt{1 - x^2}' },
        ],
      },
      {
        title: 'Improper integrals',
        items: [
          {
            label: '[[improper-integral|Infinite interval]]',
            tex: '\\int_a^\\infty f(x)\\,dx = \\lim_{t \\to \\infty}\\int_a^t f(x)\\,dx',
          },
          {
            label: 'Infinite discontinuity at $b$',
            tex: '\\int_a^b f(x)\\,dx = \\lim_{t \\to b^-}\\int_a^t f(x)\\,dx',
            text: 'Discontinuity inside $[a, b]$ or both limits infinite: split, and **both** parts must converge.',
          },
          {
            label: 'p-integrals',
            tex: '\\int_1^\\infty \\frac{dx}{x^p} \\text{ converges} \\iff p > 1, \\qquad \\int_0^1 \\frac{dx}{x^p} \\text{ converges} \\iff p < 1',
          },
          {
            label: 'Comparison for integrals',
            tex: '0 \\le f \\le g:\\quad \\int_a^\\infty g < \\infty \\implies \\int_a^\\infty f < \\infty',
          },
        ],
      },
      {
        title: 'Numerical integration ($\\Delta x = (b - a)/n$)',
        items: [
          {
            label: '[[midpoint-rule|Midpoint]]',
            tex: 'M_n = \\Delta x\\sum_{i=1}^{n} f(\\bar x_i), \\qquad |E_M| \\le \\frac{K(b - a)^3}{24n^2}',
            text: '$|f\'\'| \\le K$ on $[a, b]$.',
          },
          {
            label: '[[trapezoidal-rule|Trapezoidal]]',
            tex: 'T_n = \\frac{\\Delta x}{2}\\left[f_0 + 2f_1 + \\cdots + 2f_{n-1} + f_n\\right], \\qquad |E_T| \\le \\frac{K(b - a)^3}{12n^2}',
            text: '$|f\'\'| \\le K$ on $[a, b]$.',
          },
          {
            label: "[[simpsons-rule|Simpson's]] ($n$ even)",
            tex: 'S_n = \\frac{\\Delta x}{3}\\left[f_0 + 4f_1 + 2f_2 + \\cdots + 4f_{n-1} + f_n\\right], \\qquad |E_S| \\le \\frac{K(b - a)^5}{180n^4}',
            text: '$|f^{(4)}| \\le K$ on $[a, b]$; exact for cubics.',
          },
          {
            label: 'Relationship',
            tex: 'T_n = \\frac{L_n + R_n}{2}, \\qquad S_{2n} = \\frac{T_n + 2M_n}{3}',
          },
        ],
      },
    ],
  },

  // ------------------------------------------------------------------
  {
    id: 'calc2-differential-equations',
    title: 'Differential Equations',
    course: 'calc2',
    icon: '🌀',
    description:
      'Separable equations, growth and decay models, logistic growth, and Euler\'s method.',
    sections: [
      {
        title: 'Basics',
        items: [
          {
            label: '[[initial-value-problem|Initial value problem]]',
            tex: '\\frac{dy}{dx} = f(x, y), \\qquad y(x_0) = y_0',
            text: 'Check a solution by substituting it back. One constant per order.',
          },
          {
            label: 'Equilibrium solutions',
            tex: 'y = c \\text{ with } f(x, c) = 0 \\text{ for all } x',
            text: 'Stable if nearby solutions approach it, unstable if they move away.',
          },
          {
            label: '[[separable-equation|Separable]]',
            tex: '\\frac{dy}{dx} = g(x)\\,h(y) \\implies \\int \\frac{dy}{h(y)} = \\int g(x)\\,dx + C',
            text: 'Check $h(y) = 0$ separately: those constant solutions are lost when dividing.',
          },
        ],
      },
      {
        title: 'Models',
        items: [
          {
            label: '[[exponential-model|Exponential growth/decay]]',
            tex: '\\frac{dy}{dt} = ky \\implies y = y_0 e^{kt}',
          },
          {
            label: 'Doubling time / half-life',
            tex: 'T_{2} = \\frac{\\ln 2}{k}\\;(k > 0), \\qquad t_{1/2} = \\frac{\\ln 2}{|k|}\\;(k < 0)',
          },
          {
            label: "Newton's law of cooling",
            tex: '\\frac{dT}{dt} = k(T - T_s) \\implies T(t) = T_s + (T_0 - T_s)e^{kt}',
            text: '$T_s$ = surrounding temperature; $k < 0$.',
          },
          {
            label: '[[logistic-model|Logistic growth]]',
            tex: '\\frac{dP}{dt} = kP\\left(1 - \\frac{P}{M}\\right) \\implies P(t) = \\frac{M}{1 + Ae^{-kt}},\\; A = \\frac{M - P_0}{P_0}',
            text: '[[carrying-capacity|Carrying capacity]] $M$ (stable); fastest growth at $P = M/2$.',
          },
          {
            label: 'Mixing (rate in − rate out)',
            tex: '\\frac{dy}{dt} = (\\text{conc. in})(\\text{flow in}) - \\frac{y}{V}(\\text{flow out})',
            text: '$y$ = amount of substance, $V$ = volume of the tank.',
          },
        ],
      },
      {
        title: 'Numerical and graphical',
        items: [
          {
            label: '[[eulers-method|Euler\'s method]]',
            tex: 'x_{n+1} = x_n + h, \\qquad y_{n+1} = y_n + h\\,f(x_n, y_n)',
            text: 'Error ∝ $h$: halve the step, roughly halve the error.',
          },
          {
            label: 'Game loop (semi-implicit Euler)',
            code: 'vel += acc * dt;\npos += vel * dt;',
            lang: 'cpp',
            text: 'Update velocity first: stays stable for springs and orbits.',
          },
          {
            label: '[[slope-field|Slope field]]',
            text: 'At each $(x, y)$ draw a segment of slope $f(x, y)$; solutions are tangent to the segments.',
          },
        ],
      },
    ],
  },

  // ------------------------------------------------------------------
  {
    id: 'calc2-series-tests',
    title: 'Series Convergence Tests',
    course: 'calc2',
    icon: '♾️',
    description:
      'Every convergence test with its hypotheses and conclusion, key benchmark series, and a strategy for choosing a test.',
    sections: [
      {
        title: 'Sequences',
        items: [
          {
            label: '[[limit-of-a-sequence|Limit of a sequence]]',
            tex: 'f(x) \\to L \\text{ as } x \\to \\infty,\\; a_n = f(n) \\implies a_n \\to L',
          },
          {
            label: 'Monotone Convergence Theorem',
            tex: '\\text{bounded} + \\text{monotonic} \\implies \\text{convergent}',
          },
          {
            label: 'Useful limits',
            tex: 'r^n \\to 0\\;(|r| < 1), \\quad \\sqrt[n]{n} \\to 1, \\quad \\frac{x^n}{n!} \\to 0, \\quad \\left(1 + \\frac{x}{n}\\right)^n \\to e^x',
          },
          {
            label: 'Growth order',
            tex: '\\ln n \\ll n^p \\ll b^n \\ll n! \\ll n^n \\quad (p > 0,\\; b > 1)',
          },
        ],
      },
      {
        title: 'Benchmark series',
        items: [
          {
            label: '[[geometric-series|Geometric]]',
            tex: '\\sum_{n=0}^{\\infty} ar^n = \\frac{a}{1 - r} \\;\\text{ if } |r| < 1; \\text{ diverges if } |r| \\ge 1',
          },
          {
            label: '[[p-series|p-series]]',
            tex: '\\sum_{n=1}^{\\infty} \\frac{1}{n^p} \\text{ converges} \\iff p > 1',
          },
          {
            label: '[[harmonic-series|Harmonic]]',
            tex: '\\sum \\frac{1}{n} \\text{ diverges}, \\qquad \\sum \\frac{(-1)^{n-1}}{n} = \\ln 2',
          },
          {
            label: '[[telescoping-series|Telescoping]]',
            tex: '\\sum_{n=1}^{\\infty} (b_n - b_{n+1}) = b_1 - \\lim_{n\\to\\infty} b_n',
          },
        ],
      },
      {
        title: 'Tests',
        items: [
          {
            label: '[[divergence-test|Divergence test]]',
            tex: '\\lim a_n \\ne 0 \\implies \\sum a_n \\text{ diverges}',
            text: 'If $\\lim a_n = 0$: **no conclusion**.',
          },
          {
            label: '[[integral-test|Integral test]]',
            tex: '\\sum_{n=N}^\\infty f(n) \\text{ and } \\int_N^\\infty f(x)\\,dx \\text{ converge or diverge together}',
            text: 'Requires $f$ continuous, positive, decreasing on $[N, \\infty)$.',
          },
          {
            label: 'Integral test remainder',
            tex: '\\int_{n+1}^\\infty f(x)\\,dx \\le R_n \\le \\int_n^\\infty f(x)\\,dx',
          },
          {
            label: '[[comparison-test|Direct comparison]]',
            tex: '0 \\le a_n \\le b_n:\\; \\textstyle\\sum b_n \\text{ conv.} \\Rightarrow \\sum a_n \\text{ conv.};\\; \\sum a_n \\text{ div.} \\Rightarrow \\sum b_n \\text{ div.}',
          },
          {
            label: '[[limit-comparison-test|Limit comparison]]',
            tex: 'a_n, b_n > 0,\\; \\lim \\frac{a_n}{b_n} = c,\\; 0 < c < \\infty \\implies \\text{same behaviour}',
          },
          {
            label: '[[alternating-series-test|Alternating series test]]',
            tex: 'b_n > 0,\\; b_{n+1} \\le b_n,\\; \\lim b_n = 0 \\implies \\sum (-1)^{n-1} b_n \\text{ converges}',
          },
          {
            label: 'Alternating series estimate',
            tex: '|S - s_n| \\le b_{n+1}',
            text: 'The error is at most the first omitted term.',
          },
          {
            label: '[[ratio-test|Ratio test]]',
            tex: 'L = \\lim \\left|\\frac{a_{n+1}}{a_n}\\right|:\\; L < 1 \\text{ abs. conv.},\\; L > 1 \\text{ div.},\\; L = 1 \\text{ ?}',
            text: 'Best for factorials and $b^n$.',
          },
          {
            label: '[[root-test|Root test]]',
            tex: 'L = \\lim \\sqrt[n]{|a_n|}:\\; L < 1 \\text{ abs. conv.},\\; L > 1 \\text{ div.},\\; L = 1 \\text{ ?}',
            text: 'Best for $(\\dots)^n$.',
          },
        ],
      },
      {
        title: 'Absolute vs conditional',
        items: [
          {
            label: '[[absolute-convergence|Absolute convergence]]',
            tex: '\\sum |a_n| \\text{ converges} \\implies \\sum a_n \\text{ converges}',
          },
          {
            label: '[[conditional-convergence|Conditional convergence]]',
            tex: '\\sum a_n \\text{ converges but } \\sum |a_n| \\text{ diverges}',
            text: 'Rearranging can change the sum (Riemann).',
          },
        ],
      },
      {
        title: 'Strategy',
        items: [
          {
            label: 'Order to try',
            text: '(1) $a_n \\not\\to 0$? Divergence test. (2) Geometric or p-series? (3) Rational/algebraic terms → limit comparison with $1/n^p$. (4) Factorials or $b^n$ → ratio test; $(\\dots)^n$ → root test. (5) Alternating → AST (and check $\\sum|a_n|$). (6) Easy-to-integrate $f(n)$ → integral test.',
          },
        ],
      },
    ],
  },

  // ------------------------------------------------------------------
  {
    id: 'calc2-maclaurin-series',
    title: 'Taylor & Maclaurin Series',
    course: 'calc2',
    icon: '🔭',
    description:
      'Common Maclaurin series with their intervals of convergence, Taylor formulas and error bounds.',
    sections: [
      {
        title: 'Definitions',
        items: [
          {
            label: '[[taylor-series|Taylor series]] at $a$',
            tex: 'f(x) = \\sum_{n=0}^{\\infty} \\frac{f^{(n)}(a)}{n!}(x - a)^n',
          },
          {
            label: '[[taylor-polynomial|Taylor polynomial]]',
            tex: 'T_n(x) = \\sum_{k=0}^{n} \\frac{f^{(k)}(a)}{k!}(x - a)^k, \\qquad R_n(x) = f(x) - T_n(x)',
          },
          {
            label: "[[taylors-inequality|Taylor's inequality]]",
            tex: '|f^{(n+1)}(x)| \\le M \\text{ for } |x - a| \\le d \\implies |R_n(x)| \\le \\frac{M}{(n+1)!}|x - a|^{n+1}',
          },
          {
            label: '[[radius-of-convergence|Radius of convergence]]',
            tex: '\\lim \\left|\\frac{a_{n+1}}{a_n}\\right| < 1 \\iff |x - a| < R',
            text: 'Test both endpoints $x = a \\pm R$ separately.',
          },
          {
            label: 'Term-by-term calculus',
            tex: '\\frac{d}{dx}\\sum c_n x^n = \\sum n c_n x^{n-1}, \\qquad \\int \\sum c_n x^n\\,dx = C + \\sum \\frac{c_n x^{n+1}}{n + 1}',
            text: 'Same radius $R$; endpoints may change.',
          },
        ],
      },
      {
        title: 'Common Maclaurin series',
        items: [
          {
            label: 'Geometric',
            tex: '\\frac{1}{1 - x} = \\sum_{n=0}^{\\infty} x^n = 1 + x + x^2 + x^3 + \\cdots',
            text: 'Interval $(-1, 1)$.',
          },
          {
            label: 'Exponential',
            tex: 'e^x = \\sum_{n=0}^{\\infty} \\frac{x^n}{n!} = 1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!} + \\cdots',
            text: 'All real $x$ ($R = \\infty$).',
          },
          {
            label: 'Sine',
            tex: '\\sin x = \\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{2n+1}}{(2n+1)!} = x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\cdots',
            text: 'All real $x$.',
          },
          {
            label: 'Cosine',
            tex: '\\cos x = \\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{2n}}{(2n)!} = 1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} - \\cdots',
            text: 'All real $x$.',
          },
          {
            label: 'Natural log',
            tex: '\\ln(1 + x) = \\sum_{n=1}^{\\infty} \\frac{(-1)^{n-1} x^n}{n} = x - \\frac{x^2}{2} + \\frac{x^3}{3} - \\cdots',
            text: 'Interval $(-1, 1]$.',
          },
          {
            label: 'Arctangent',
            tex: '\\arctan x = \\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{2n+1}}{2n + 1} = x - \\frac{x^3}{3} + \\frac{x^5}{5} - \\cdots',
            text: 'Interval $[-1, 1]$.',
          },
          {
            label: 'Alternating geometric',
            tex: '\\frac{1}{1 + x^2} = \\sum_{n=0}^{\\infty} (-1)^n x^{2n} = 1 - x^2 + x^4 - \\cdots',
            text: 'Interval $(-1, 1)$.',
          },
          {
            label: 'Binomial series',
            tex: '(1 + x)^k = \\sum_{n=0}^{\\infty} \\binom{k}{n} x^n = 1 + kx + \\frac{k(k-1)}{2!}x^2 + \\cdots',
            text: 'Converges for $|x| < 1$ (endpoints depend on $k$); a finite polynomial if $k$ is a whole number.',
          },
          {
            label: 'Binomial coefficient',
            tex: '\\binom{k}{n} = \\frac{k(k - 1)\\cdots(k - n + 1)}{n!}',
          },
        ],
      },
      {
        title: 'Famous sums',
        items: [
          { label: '$e$', tex: 'e = \\sum_{n=0}^{\\infty} \\frac{1}{n!}' },
          { label: '$\\ln 2$', tex: '\\ln 2 = 1 - \\frac{1}{2} + \\frac{1}{3} - \\frac{1}{4} + \\cdots' },
          { label: '$\\pi$ (Leibniz)', tex: '\\frac{\\pi}{4} = 1 - \\frac{1}{3} + \\frac{1}{5} - \\frac{1}{7} + \\cdots' },
          { label: 'Basel problem', tex: '\\sum_{n=1}^{\\infty} \\frac{1}{n^2} = \\frac{\\pi^2}{6}' },
        ],
      },
      {
        title: 'Building new series',
        items: [
          {
            label: 'Substitute',
            tex: 'e^{-x^2} = \\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{2n}}{n!}',
          },
          {
            label: 'Small-angle approximations',
            tex: '\\sin x \\approx x - \\frac{x^3}{6}, \\qquad \\cos x \\approx 1 - \\frac{x^2}{2}, \\qquad e^x \\approx 1 + x',
            text: 'Error bounded by the next term for alternating series.',
          },
        ],
      },
    ],
  },
];
