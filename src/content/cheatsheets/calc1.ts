import type { CheatSheet } from '../types';

export const calc1CheatSheets: CheatSheet[] = [
  // ------------------------------------------------------------------ Limits
  {
    id: 'calc1-limits',
    title: 'Limits & Continuity',
    course: 'calc1',
    icon: '🎯',
    description: 'Limit laws, special limits, techniques for indeterminate forms, asymptotes and continuity.',
    sections: [
      {
        title: 'Definitions',
        items: [
          { label: 'Limit (ε–δ)', tex: '\\lim_{x\\to a} f(x) = L \\iff \\forall \\varepsilon>0\\ \\exists \\delta>0:\\ 0<|x-a|<\\delta \\Rightarrow |f(x)-L|<\\varepsilon' },
          { label: 'Two-sided vs one-sided', tex: '\\lim_{x\\to a} f(x) = L \\iff \\lim_{x\\to a^-} f(x) = \\lim_{x\\to a^+} f(x) = L' },
          { label: 'Continuity at $a$', tex: '\\lim_{x\\to a} f(x) = f(a)', text: 'Requires $f(a)$ defined, the limit exists, and they are equal.' },
          { label: 'Vertical asymptote', tex: '\\lim_{x\\to a^{\\pm}} f(x) = \\pm\\infty \\;\\Rightarrow\\; x = a', text: 'At least one one-sided limit infinite.' },
          { label: 'Horizontal asymptote', tex: '\\lim_{x\\to \\pm\\infty} f(x) = L \\;\\Rightarrow\\; y = L' },
        ],
      },
      {
        title: 'Limit laws',
        items: [
          { label: 'Sum / constant multiple', tex: '\\lim (f \\pm g) = L \\pm M, \\qquad \\lim c f = cL', text: 'Valid when $\\lim f = L$ and $\\lim g = M$ both exist.' },
          { label: 'Product / quotient', tex: '\\lim fg = LM, \\qquad \\lim \\frac{f}{g} = \\frac{L}{M}\\ \\ (M \\ne 0)' },
          { label: 'Power / root', tex: '\\lim f^n = L^n, \\qquad \\lim \\sqrt[n]{f} = \\sqrt[n]{L}', text: 'For even $n$, need $L > 0$ (or $L \\ge 0$ with $f \\ge 0$).' },
          { label: 'Direct substitution', tex: '\\lim_{x\\to a} f(x) = f(a)', text: 'For polynomials, rational functions with nonzero denominator, and any $f$ continuous at $a$.' },
          { label: 'Composition', tex: '\\lim_{x\\to a} f(g(x)) = f\\Big(\\lim_{x\\to a} g(x)\\Big)', text: 'If $f$ is continuous at $\\lim g$.' },
          { label: 'Squeeze theorem', tex: 'g \\le f \\le h \\text{ near } a,\\ \\lim g = \\lim h = L \\implies \\lim f = L' },
        ],
      },
      {
        title: 'Special limits',
        items: [
          { label: 'Sine', tex: '\\lim_{x\\to 0} \\frac{\\sin x}{x} = 1' },
          { label: 'Cosine', tex: '\\lim_{x\\to 0} \\frac{1 - \\cos x}{x} = 0, \\qquad \\lim_{x\\to 0} \\frac{1 - \\cos x}{x^2} = \\frac{1}{2}' },
          { label: 'Exponential', tex: '\\lim_{x\\to 0} \\frac{e^x - 1}{x} = 1' },
          { label: 'Definition of $e$', tex: '\\lim_{x\\to \\infty} \\left(1 + \\frac{1}{x}\\right)^x = e = \\lim_{x\\to 0} (1+x)^{1/x}' },
          { label: 'Powers at infinity', tex: '\\lim_{x\\to\\infty} \\frac{1}{x^r} = 0 \\quad (r > 0)' },
          { label: 'Growth ranking', tex: '\\ln x \\ll x^p \\ll a^x \\quad (p > 0,\\ a > 1) \\text{ as } x \\to \\infty', text: 'E.g. $\\lim_{x\\to\\infty} \\frac{x^{100}}{e^x} = 0$, $\\lim_{x\\to\\infty} \\frac{\\ln x}{\\sqrt{x}} = 0$.' },
          { label: 'Infinite limits', tex: '\\lim_{x\\to 0^+} \\frac{1}{x} = \\infty,\\quad \\lim_{x\\to 0^-} \\frac{1}{x} = -\\infty,\\quad \\lim_{x\\to 0^+} \\ln x = -\\infty' },
        ],
      },
      {
        title: 'Techniques for 0/0 and ∞/∞',
        items: [
          { label: 'Factor and cancel', tex: '\\lim_{x\\to 2} \\frac{x^2 - 4}{x - 2} = \\lim_{x\\to 2} (x + 2) = 4' },
          { label: 'Multiply by the conjugate', tex: '\\lim_{x\\to 0} \\frac{\\sqrt{x+9} - 3}{x} = \\lim_{x\\to 0} \\frac{1}{\\sqrt{x+9} + 3} = \\frac{1}{6}' },
          { label: 'Rational end behavior', tex: '\\lim_{x\\to\\pm\\infty} \\frac{a_n x^n + \\cdots}{b_m x^m + \\cdots} = \\begin{cases} 0 & n < m \\\\ a_n / b_m & n = m \\\\ \\pm\\infty & n > m \\end{cases}', text: 'Divide top and bottom by the highest power of $x$ in the denominator.' },
          { label: 'Square roots at infinity', tex: '\\sqrt{x^2} = |x| \\;\\Rightarrow\\; \\lim_{x\\to -\\infty} \\frac{\\sqrt{x^2+1}}{x} = -1', text: 'For $x < 0$, $\\sqrt{x^2} = -x$: watch the sign.' },
          { label: "L'Hôpital's rule", tex: '\\lim \\frac{f}{g} = \\lim \\frac{f\'}{g\'} \\quad \\left(\\tfrac{0}{0} \\text{ or } \\tfrac{\\infty}{\\infty}\\right)', text: 'See the Applications sheet for hypotheses and the other indeterminate forms.' },
        ],
      },
      {
        title: 'Continuity theorems',
        items: [
          { label: 'Discontinuity types', text: '**Removable:** limit exists, $\\ne f(a)$ or $f(a)$ undefined. **Jump:** one-sided limits finite but different. **Infinite:** a one-sided limit is $\\pm\\infty$.' },
          { label: 'Intermediate Value Theorem', tex: 'f \\text{ continuous on } [a,b],\\ N \\text{ between } f(a), f(b) \\implies \\exists\\, c \\in (a,b):\\ f(c) = N' },
          { label: 'Root locating (bisection)', tex: 'f(a)\\,f(b) < 0 \\implies f \\text{ has a zero in } (a,b)', text: 'Requires $f$ continuous on $[a,b]$.' },
        ],
      },
    ],
  },

  // -------------------------------------------------------- Derivative rules
  {
    id: 'calc1-derivative-rules',
    title: 'Derivative Rules',
    course: 'calc1',
    icon: '📐',
    description: 'Definition of the derivative, notation, and every differentiation rule with its exact form.',
    sections: [
      {
        title: 'Definition',
        items: [
          { label: 'Derivative function', tex: 'f\'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}' },
          { label: 'At a point (alternate form)', tex: 'f\'(a) = \\lim_{x \\to a} \\frac{f(x) - f(a)}{x - a}' },
          { label: 'Tangent line at $a$', tex: 'y = f(a) + f\'(a)(x - a)' },
          { label: 'Notation', tex: 'f\'(x) = y\' = \\frac{dy}{dx} = \\frac{d}{dx}f(x) = Df(x), \\qquad f\'\'(x) = \\frac{d^2y}{dx^2}' },
          { label: 'Differentiable ⇒ continuous', text: 'The converse fails: $|x|$ is continuous but not differentiable at $0$ (corner). Also non-differentiable: cusps, vertical tangents, discontinuities.' },
        ],
      },
      {
        title: 'Basic rules',
        items: [
          { label: 'Constant', tex: '\\frac{d}{dx}\\,c = 0' },
          { label: 'Power rule', tex: '\\frac{d}{dx}\\,x^n = n x^{n-1} \\quad (n \\in \\mathbb{R})' },
          { label: 'Constant multiple', tex: '\\frac{d}{dx}\\big[c f(x)\\big] = c f\'(x)' },
          { label: 'Sum / difference', tex: '\\frac{d}{dx}\\big[f(x) \\pm g(x)\\big] = f\'(x) \\pm g\'(x)' },
        ],
      },
      {
        title: 'Product, quotient, chain',
        items: [
          { label: 'Product rule', tex: '(fg)\' = f\'g + fg\'' },
          { label: 'Three factors', tex: '(fgh)\' = f\'gh + fg\'h + fgh\'' },
          { label: 'Quotient rule', tex: '\\left(\\frac{f}{g}\\right)\' = \\frac{f\'g - fg\'}{g^2} \\quad (g \\ne 0)', text: '"Low d-high minus high d-low, over low squared."' },
          { label: 'Reciprocal rule', tex: '\\left(\\frac{1}{g}\\right)\' = -\\frac{g\'}{g^2}' },
          { label: 'Chain rule', tex: '\\frac{d}{dx} f\\big(g(x)\\big) = f\'\\big(g(x)\\big)\\,g\'(x), \\qquad \\frac{dy}{dx} = \\frac{dy}{du}\\cdot\\frac{du}{dx}' },
          { label: 'General power rule', tex: '\\frac{d}{dx}\\big[g(x)\\big]^n = n\\big[g(x)\\big]^{n-1} g\'(x)' },
        ],
      },
      {
        title: 'Implicit, inverse and logarithmic',
        items: [
          { label: 'Implicit differentiation', tex: '\\frac{d}{dx}\\big[y^n\\big] = n y^{n-1} \\frac{dy}{dx}, \\qquad \\frac{d}{dx}[xy] = y + x\\frac{dy}{dx}', text: 'Differentiate both sides in $x$, treat $y$ as $y(x)$, solve for $\\frac{dy}{dx}$.' },
          { label: 'Example: circle', tex: 'x^2 + y^2 = r^2 \\implies \\frac{dy}{dx} = -\\frac{x}{y}' },
          { label: 'Inverse function', tex: '\\big(f^{-1}\\big)\'(x) = \\frac{1}{f\'\\big(f^{-1}(x)\\big)}', text: 'Where $f\'(f^{-1}(x)) \\ne 0$.' },
          { label: 'Logarithmic differentiation', tex: '\\ln y = \\ln f(x) \\implies \\frac{y\'}{y} = \\frac{d}{dx}\\ln f(x) \\implies y\' = y\\,\\frac{d}{dx}\\ln f(x)' },
          { label: 'Variable base and exponent', tex: '\\frac{d}{dx}\\, x^x = x^x(\\ln x + 1), \\qquad \\frac{d}{dx} f^g = f^g\\left(g\'\\ln f + \\frac{g f\'}{f}\\right)' },
        ],
      },
    ],
  },

  // -------------------------------------------- Derivatives of common functions
  {
    id: 'calc1-common-derivatives',
    title: 'Derivatives of Common Functions',
    course: 'calc1',
    icon: '📋',
    description: 'Power, exponential, logarithmic, trigonometric and inverse trig derivatives, plus their chain-rule forms.',
    sections: [
      {
        title: 'Powers and roots',
        items: [
          { label: 'Power', tex: '\\frac{d}{dx}\\,x^n = n x^{n-1}' },
          { label: 'Square root', tex: '\\frac{d}{dx}\\sqrt{x} = \\frac{1}{2\\sqrt{x}}' },
          { label: 'Reciprocal', tex: '\\frac{d}{dx}\\,\\frac{1}{x} = -\\frac{1}{x^2}' },
          { label: 'Absolute value', tex: '\\frac{d}{dx}\\,|x| = \\frac{x}{|x|} \\quad (x \\ne 0)' },
        ],
      },
      {
        title: 'Exponentials and logarithms',
        items: [
          { label: 'Natural exponential', tex: '\\frac{d}{dx}\\,e^x = e^x' },
          { label: 'Exponential base $a$', tex: '\\frac{d}{dx}\\,a^x = a^x \\ln a \\quad (a > 0)' },
          { label: 'Natural log', tex: '\\frac{d}{dx}\\ln x = \\frac{1}{x}\\ (x > 0), \\qquad \\frac{d}{dx}\\ln|x| = \\frac{1}{x}\\ (x \\ne 0)' },
          { label: 'Log base $a$', tex: '\\frac{d}{dx}\\log_a x = \\frac{1}{x \\ln a}' },
        ],
      },
      {
        title: 'Trigonometric',
        items: [
          { label: 'Sine / cosine', tex: '\\frac{d}{dx}\\sin x = \\cos x, \\qquad \\frac{d}{dx}\\cos x = -\\sin x', text: 'Angles in radians — in degrees an extra factor $\\frac{\\pi}{180}$ appears.' },
          { label: 'Tangent / cotangent', tex: '\\frac{d}{dx}\\tan x = \\sec^2 x, \\qquad \\frac{d}{dx}\\cot x = -\\csc^2 x' },
          { label: 'Secant / cosecant', tex: '\\frac{d}{dx}\\sec x = \\sec x \\tan x, \\qquad \\frac{d}{dx}\\csc x = -\\csc x \\cot x' },
          { label: 'Pattern', text: 'Every "co-" function ($\\cos$, $\\cot$, $\\csc$) has a minus sign in its derivative.' },
        ],
      },
      {
        title: 'Inverse trigonometric',
        items: [
          { label: 'Arcsine', tex: '\\frac{d}{dx}\\arcsin x = \\frac{1}{\\sqrt{1 - x^2}} \\quad (|x| < 1)' },
          { label: 'Arccosine', tex: '\\frac{d}{dx}\\arccos x = -\\frac{1}{\\sqrt{1 - x^2}} \\quad (|x| < 1)' },
          { label: 'Arctangent', tex: '\\frac{d}{dx}\\arctan x = \\frac{1}{1 + x^2}' },
          { label: 'Arcsecant', tex: '\\frac{d}{dx}\\operatorname{arcsec} x = \\frac{1}{|x|\\sqrt{x^2 - 1}} \\quad (|x| > 1)' },
        ],
      },
      {
        title: 'Chain-rule forms ($u = g(x)$)',
        items: [
          { label: 'Power', tex: '\\frac{d}{dx}\\,u^n = n u^{n-1}\\,u\'' },
          { label: 'Exponential', tex: '\\frac{d}{dx}\\,e^{u} = e^{u}\\,u\', \\qquad \\frac{d}{dx}\\,a^{u} = a^{u}\\ln a\\;u\'' },
          { label: 'Logarithm', tex: '\\frac{d}{dx}\\ln|u| = \\frac{u\'}{u}' },
          { label: 'Trig', tex: '\\frac{d}{dx}\\sin u = \\cos u\\;u\', \\qquad \\frac{d}{dx}\\cos u = -\\sin u\\;u\', \\qquad \\frac{d}{dx}\\tan u = \\sec^2 u\\;u\'' },
          { label: 'Inverse trig', tex: '\\frac{d}{dx}\\arcsin u = \\frac{u\'}{\\sqrt{1-u^2}}, \\qquad \\frac{d}{dx}\\arctan u = \\frac{u\'}{1+u^2}' },
          { label: 'Examples', tex: '\\frac{d}{dx}\\sin(3x^2) = 6x\\cos(3x^2), \\qquad \\frac{d}{dx}e^{-x^2} = -2x\\,e^{-x^2}' },
        ],
      },
    ],
  },

  // ---------------------------------------------- Applications & theorems
  {
    id: 'calc1-applications',
    title: 'Applications & Theorems',
    course: 'calc1',
    icon: '⛰️',
    description: "Extrema, MVT, derivative tests, concavity, L'Hôpital's rule, linear approximation and Newton's method.",
    sections: [
      {
        title: 'Extrema',
        items: [
          { label: 'Critical number', tex: 'c \\in \\operatorname{dom} f \\text{ with } f\'(c) = 0 \\text{ or } f\'(c) \\text{ undefined}' },
          { label: "Fermat's theorem", tex: 'f \\text{ has a local extremum at } c,\\ f\'(c) \\text{ exists} \\implies f\'(c) = 0', text: 'Converse is false: $x^3$ at $0$.' },
          { label: 'Extreme Value Theorem', tex: 'f \\text{ continuous on } [a,b] \\implies f \\text{ attains an absolute max and min on } [a,b]' },
          { label: 'Closed interval method', text: 'Evaluate $f$ at critical numbers in $(a,b)$ and at $a$, $b$. Largest value = absolute max, smallest = absolute min.' },
        ],
      },
      {
        title: 'Mean value theorems',
        items: [
          { label: "Rolle's theorem", tex: 'f \\in C[a,b],\\ \\text{diff. on } (a,b),\\ f(a) = f(b) \\implies \\exists\\, c \\in (a,b):\\ f\'(c) = 0' },
          { label: 'Mean Value Theorem', tex: 'f \\in C[a,b],\\ \\text{diff. on } (a,b) \\implies \\exists\\, c \\in (a,b):\\ f\'(c) = \\frac{f(b) - f(a)}{b - a}' },
          { label: 'Consequences', tex: 'f\' = 0 \\text{ on } I \\Rightarrow f \\text{ constant}; \\qquad f\' = g\' \\text{ on } I \\Rightarrow f = g + C', text: '$I$ an interval.' },
        ],
      },
      {
        title: 'Shape of a graph',
        items: [
          { label: 'Increasing / decreasing test', tex: 'f\' > 0 \\text{ on } I \\Rightarrow f \\text{ increasing}; \\qquad f\' < 0 \\text{ on } I \\Rightarrow f \\text{ decreasing}' },
          { label: 'First derivative test', tex: 'f\'\\!: + \\to - \\text{ at } c \\Rightarrow \\text{local max}; \\qquad - \\to + \\Rightarrow \\text{local min}', text: 'No sign change: no extremum. $f$ must be continuous at $c$.' },
          { label: 'Concavity test', tex: 'f\'\' > 0 \\Rightarrow \\text{concave up } (\\cup); \\qquad f\'\' < 0 \\Rightarrow \\text{concave down } (\\cap)' },
          { label: 'Inflection point', text: 'A point where $f$ is continuous and $f\'\'$ **changes sign**. $f\'\'(c) = 0$ alone is not enough: $x^4$ at $0$.' },
          { label: 'Second derivative test', tex: 'f\'(c) = 0:\\quad f\'\'(c) > 0 \\Rightarrow \\text{local min}, \\quad f\'\'(c) < 0 \\Rightarrow \\text{local max}', text: '$f\'\'(c) = 0$: inconclusive — use the first derivative test.' },
        ],
      },
      {
        title: "L'Hôpital's rule",
        items: [
          { label: 'Statement', tex: '\\lim_{x\\to a} \\frac{f(x)}{g(x)} = \\lim_{x\\to a} \\frac{f\'(x)}{g\'(x)}', text: 'If the left side is $\\frac{0}{0}$ or $\\frac{\\pm\\infty}{\\pm\\infty}$, $f, g$ differentiable near $a$, $g\' \\ne 0$ near $a$, and the right side exists (or is $\\pm\\infty$). Also for $x \\to a^\\pm$, $\\pm\\infty$.' },
          { label: '$0 \\cdot \\infty$', tex: 'f g = \\frac{f}{1/g} \\quad \\text{or} \\quad \\frac{g}{1/f}' },
          { label: '$\\infty - \\infty$', text: 'Combine into one fraction (common denominator or conjugate), then apply.' },
          { label: '$1^\\infty,\\ 0^0,\\ \\infty^0$', tex: 'y = f^g \\implies \\ln y = g \\ln f, \\qquad \\lim y = e^{\\lim g\\ln f}' },
          { label: 'Example', tex: '\\lim_{x\\to 0^+} x \\ln x = \\lim_{x\\to 0^+} \\frac{\\ln x}{1/x} = \\lim_{x\\to 0^+} \\frac{1/x}{-1/x^2} = \\lim_{x\\to 0^+} (-x) = 0' },
        ],
      },
      {
        title: 'Approximation and root finding',
        items: [
          { label: 'Linearization', tex: 'L(x) = f(a) + f\'(a)(x - a), \\qquad f(x) \\approx L(x) \\text{ for } x \\approx a' },
          { label: 'Common linearizations at 0', tex: '\\sin x \\approx x,\\quad e^x \\approx 1 + x,\\quad \\ln(1+x) \\approx x,\\quad (1+x)^k \\approx 1 + kx' },
          { label: 'Differentials', tex: 'dy = f\'(x)\\,dx, \\qquad \\Delta y \\approx dy, \\qquad \\text{relative error} = \\frac{dy}{y}' },
          { label: "Newton's method", tex: 'x_{n+1} = x_n - \\frac{f(x_n)}{f\'(x_n)}', text: 'Fails if $f\'(x_n) = 0$; may diverge or cycle from a poor start.' },
        ],
      },
      {
        title: 'Rates and motion',
        items: [
          { label: 'Motion', tex: 'v(t) = s\'(t), \\qquad a(t) = v\'(t) = s\'\'(t), \\qquad \\text{speed} = |v(t)|', text: 'Speeding up when $v$ and $a$ have the same sign.' },
          { label: 'Related rates', text: 'Write an equation true for all $t$, differentiate with respect to $t$ (chain rule), **then** substitute the instant\'s values.' },
          { label: 'Optimization', text: 'Objective → one variable via the constraint → feasible domain → critical numbers → justify absolute extremum (closed interval method or first derivative test).' },
        ],
      },
    ],
  },

  // ------------------------------------------------------ Integration basics
  {
    id: 'calc1-integration',
    title: 'Integration Basics',
    course: 'calc1',
    icon: '∫',
    description: 'Antiderivative table, Riemann sums, properties of definite integrals, the FTC and u-substitution.',
    sections: [
      {
        title: 'Antiderivative table',
        items: [
          { label: 'Power', tex: '\\int x^n\\,dx = \\frac{x^{n+1}}{n+1} + C \\quad (n \\ne -1)' },
          { label: 'Reciprocal', tex: '\\int \\frac{1}{x}\\,dx = \\ln|x| + C' },
          { label: 'Exponentials', tex: '\\int e^x\\,dx = e^x + C, \\qquad \\int a^x\\,dx = \\frac{a^x}{\\ln a} + C' },
          { label: 'Sine / cosine', tex: '\\int \\sin x\\,dx = -\\cos x + C, \\qquad \\int \\cos x\\,dx = \\sin x + C' },
          { label: 'Secant / cosecant squared', tex: '\\int \\sec^2 x\\,dx = \\tan x + C, \\qquad \\int \\csc^2 x\\,dx = -\\cot x + C' },
          { label: 'Sec tan / csc cot', tex: '\\int \\sec x \\tan x\\,dx = \\sec x + C, \\qquad \\int \\csc x \\cot x\\,dx = -\\csc x + C' },
          { label: 'Inverse trig', tex: '\\int \\frac{dx}{1 + x^2} = \\arctan x + C, \\qquad \\int \\frac{dx}{\\sqrt{1 - x^2}} = \\arcsin x + C' },
          { label: 'Linear inside', tex: '\\int f(ax + b)\\,dx = \\frac{1}{a} F(ax + b) + C \\quad (a \\ne 0)', text: 'E.g. $\\int e^{3x}\\,dx = \\frac{1}{3}e^{3x} + C$.' },
          { label: 'Linearity', tex: '\\int \\big[a f(x) + b g(x)\\big]\\,dx = a\\int f(x)\\,dx + b\\int g(x)\\,dx', text: 'There is no product rule: $\\int fg \\ne \\int f \\cdot \\int g$.' },
        ],
      },
      {
        title: 'Sums and Riemann sums',
        items: [
          { label: 'Sum formulas', tex: '\\sum_{i=1}^n i = \\frac{n(n+1)}{2}, \\quad \\sum_{i=1}^n i^2 = \\frac{n(n+1)(2n+1)}{6}, \\quad \\sum_{i=1}^n i^3 = \\left[\\frac{n(n+1)}{2}\\right]^2' },
          { label: 'Riemann sum', tex: '\\Delta x = \\frac{b-a}{n}, \\qquad x_i = a + i\\,\\Delta x, \\qquad R_n = \\sum_{i=1}^n f(x_i)\\,\\Delta x', text: 'Left sum uses $x_{i-1}$; midpoint uses $\\frac{x_{i-1} + x_i}{2}$.' },
          { label: 'Definite integral', tex: '\\int_a^b f(x)\\,dx = \\lim_{n\\to\\infty} \\sum_{i=1}^n f(x_i^*)\\,\\Delta x' },
        ],
      },
      {
        title: 'Properties of definite integrals',
        items: [
          { label: 'Reversal and zero width', tex: '\\int_b^a f\\,dx = -\\int_a^b f\\,dx, \\qquad \\int_a^a f\\,dx = 0' },
          { label: 'Additivity', tex: '\\int_a^b f\\,dx + \\int_b^c f\\,dx = \\int_a^c f\\,dx' },
          { label: 'Comparison', tex: 'f \\le g \\text{ on } [a,b] \\implies \\int_a^b f\\,dx \\le \\int_a^b g\\,dx' },
          { label: 'Bounds', tex: 'm \\le f \\le M \\text{ on } [a,b] \\implies m(b-a) \\le \\int_a^b f\\,dx \\le M(b-a)' },
          { label: 'Symmetry', tex: '\\int_{-a}^{a} f\\,dx = \\begin{cases} 2\\int_0^a f\\,dx & f \\text{ even} \\\\ 0 & f \\text{ odd} \\end{cases}' },
        ],
      },
      {
        title: 'Fundamental Theorem of Calculus',
        items: [
          { label: 'FTC Part 1', tex: '\\frac{d}{dx}\\int_a^x f(t)\\,dt = f(x)', text: 'For $f$ continuous on an interval containing $a$ and $x$.' },
          { label: 'FTC 1 with chain rule', tex: '\\frac{d}{dx}\\int_{h(x)}^{g(x)} f(t)\\,dt = f\\big(g(x)\\big)\\,g\'(x) - f\\big(h(x)\\big)\\,h\'(x)' },
          { label: 'FTC Part 2', tex: '\\int_a^b f(x)\\,dx = F(b) - F(a) = \\Big[F(x)\\Big]_a^b, \\quad F\' = f', text: 'Requires $f$ continuous on all of $[a,b]$ — check for asymptotes!' },
          { label: 'Net change theorem', tex: '\\int_a^b F\'(x)\\,dx = F(b) - F(a)' },
        ],
      },
      {
        title: 'u-Substitution',
        items: [
          { label: 'Indefinite', tex: 'u = g(x),\\ du = g\'(x)\\,dx: \\quad \\int f\\big(g(x)\\big)g\'(x)\\,dx = \\int f(u)\\,du' },
          { label: 'Definite (change the limits)', tex: '\\int_a^b f\\big(g(x)\\big)g\'(x)\\,dx = \\int_{g(a)}^{g(b)} f(u)\\,du' },
          { label: 'Example', tex: '\\int 2x\\cos(x^2)\\,dx = \\int \\cos u\\,du = \\sin(x^2) + C' },
          { label: 'Useful results', tex: '\\int \\tan x\\,dx = \\ln|\\sec x| + C, \\qquad \\int \\frac{g\'(x)}{g(x)}\\,dx = \\ln|g(x)| + C' },
        ],
      },
      {
        title: 'Applications',
        items: [
          { label: 'Displacement / distance', tex: '\\Delta s = \\int_{t_1}^{t_2} v(t)\\,dt, \\qquad \\text{distance} = \\int_{t_1}^{t_2} |v(t)|\\,dt' },
          { label: 'Area between curves', tex: 'A = \\int_a^b \\big[f(x) - g(x)\\big]\\,dx \\quad (f \\ge g \\text{ on } [a,b])', text: 'In general $\\int_a^b |f - g|\\,dx$: split where the curves cross.' },
          { label: 'Average value', tex: 'f_{\\text{avg}} = \\frac{1}{b-a}\\int_a^b f(x)\\,dx', text: 'If $f$ is continuous, $f(c) = f_{\\text{avg}}$ for some $c \\in [a,b]$.' },
        ],
      },
    ],
  },

  // ------------------------------------------------------- Calculus in code
  {
    id: 'calc1-in-code',
    title: 'Calculus in Code',
    course: 'calc1',
    icon: '🎮',
    description: 'Numerical derivatives, Newton\'s method, Riemann sums and Euler integration as they appear in game and engine code.',
    sections: [
      {
        title: 'Numerical derivatives',
        items: [
          { label: 'Forward difference', tex: 'f\'(x) \\approx \\frac{f(x+h) - f(x)}{h}', text: 'Error $\\propto h$. With doubles, $h \\approx 10^{-8}$ balances truncation and rounding.' },
          { label: 'Central difference', tex: 'f\'(x) \\approx \\frac{f(x+h) - f(x-h)}{2h}', text: 'Error $\\propto h^2$; $h \\approx 10^{-5}$ is a good default for doubles.' },
          { label: 'Second derivative', tex: 'f\'\'(x) \\approx \\frac{f(x+h) - 2f(x) + f(x-h)}{h^2}' },
          {
            label: 'Central difference in C++',
            code: 'double deriv(double (*f)(double), double x, double h = 1e-5) {\n    return (f(x + h) - f(x - h)) / (2.0 * h);\n}',
            lang: 'cpp',
          },
        ],
      },
      {
        title: 'Root finding',
        items: [
          { label: "Newton's method", tex: 'x_{n+1} = x_n - \\frac{f(x_n)}{f\'(x_n)}', text: 'Quadratic convergence near a simple root; cap the iterations and guard $f\'(x_n) \\approx 0$.' },
          { label: 'Square root by Newton', tex: 'f(x) = x^2 - a \\implies x_{n+1} = \\frac{1}{2}\\left(x_n + \\frac{a}{x_n}\\right)' },
          { label: 'Bisection (IVT)', tex: 'f(a)f(m) < 0 \\Rightarrow b \\leftarrow m, \\text{ else } a \\leftarrow m, \\qquad m = \\tfrac{a+b}{2}', text: 'Slow (one bit per step) but cannot fail on a continuous sign change.' },
        ],
      },
      {
        title: 'Integration in the game loop',
        items: [
          { label: 'Explicit Euler', tex: 'x_{k+1} = x_k + v_k\\,\\Delta t, \\qquad v_{k+1} = v_k + a_k\\,\\Delta t', text: 'A left Riemann sum; gains energy on springs and orbits.' },
          { label: 'Semi-implicit Euler', tex: 'v_{k+1} = v_k + a_k\\,\\Delta t, \\qquad x_{k+1} = x_k + v_{k+1}\\,\\Delta t', text: 'Same cost, much more stable — the default in most game physics engines.' },
          {
            label: 'Semi-implicit Euler in C++',
            code: 'vel += accel * dt;   // v_{k+1}\npos += vel * dt;     // uses the new velocity',
            lang: 'cpp',
          },
          { label: 'Exact constant-acceleration step', tex: 'x(t + \\Delta t) = x + v\\,\\Delta t + \\tfrac{1}{2}a\\,(\\Delta t)^2', text: 'From integrating $a$ twice; exact when $a$ is constant over the step.' },
          { label: 'Midpoint Riemann sum', tex: '\\int_a^b f\\,dx \\approx \\Delta x \\sum_{i=0}^{n-1} f\\big(a + (i + \\tfrac{1}{2})\\Delta x\\big)' },
        ],
      },
      {
        title: 'Smoothing and easing',
        items: [
          { label: 'Frame-rate-independent smoothing', tex: 'p \\leftarrow p + (T - p)\\left(1 - e^{-k\\,\\Delta t}\\right)', text: 'Solves $p\' = k(T - p)$ exactly; $p \\to T$ as $t \\to \\infty$.' },
          { label: 'Lerp and its derivative', tex: '\\operatorname{lerp}(a, b, t) = a + (b - a)t, \\qquad \\frac{d}{dt}\\operatorname{lerp} = b - a' },
          { label: 'Smoothstep', tex: 's(t) = 3t^2 - 2t^3, \\qquad s\'(t) = 6t(1 - t), \\qquad s\'(0) = s\'(1) = 0', text: 'Zero slope at both ends: motion starts and stops without a velocity jump.' },
        ],
      },
    ],
  },
];
