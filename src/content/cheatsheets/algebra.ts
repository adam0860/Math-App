import type { CheatSheet } from '../types';

export const algebraCheatSheets: CheatSheet[] = [
  // ------------------------------------------------------------------ Exponents
  {
    id: 'alg-exponents-radicals',
    title: 'Exponents & Radicals',
    course: 'algebra',
    icon: 'xⁿ',
    description: 'Exponent laws, zero and negative powers, rational exponents, simplifying and rationalizing radicals.',
    sections: [
      {
        title: 'Exponent laws',
        items: [
          { label: 'Product rule', tex: 'a^m \\cdot a^n = a^{m+n}' },
          { label: 'Quotient rule', tex: '\\frac{a^m}{a^n} = a^{m-n} \\quad (a \\ne 0)' },
          { label: 'Power of a power', tex: '(a^m)^n = a^{mn}' },
          { label: 'Power of a product', tex: '(ab)^n = a^n b^n' },
          { label: 'Power of a quotient', tex: '\\left(\\frac{a}{b}\\right)^n = \\frac{a^n}{b^n} \\quad (b \\ne 0)' },
          { label: 'Zero exponent', tex: 'a^0 = 1 \\quad (a \\ne 0)' },
          { label: 'Negative exponent', tex: 'a^{-n} = \\frac{1}{a^n}, \\qquad \\left(\\frac{a}{b}\\right)^{-n} = \\left(\\frac{b}{a}\\right)^n' },
          { label: 'Sign trap', tex: '-3^2 = -9, \\qquad (-3)^2 = 9', text: 'The exponent binds before the negation.' },
          { label: 'No sum rule', tex: '(a + b)^2 = a^2 + 2ab + b^2 \\ne a^2 + b^2' },
        ],
      },
      {
        title: 'Radicals & rational exponents',
        items: [
          { label: 'Rational exponent', tex: 'a^{1/n} = \\sqrt[n]{a}, \\qquad a^{m/n} = \\left(\\sqrt[n]{a}\\right)^m = \\sqrt[n]{a^m}' },
          { label: 'Product rule', tex: '\\sqrt[n]{ab} = \\sqrt[n]{a}\\,\\sqrt[n]{b}', text: 'For even $n$, requires $a, b \\ge 0$.' },
          { label: 'Quotient rule', tex: '\\sqrt[n]{\\frac{a}{b}} = \\frac{\\sqrt[n]{a}}{\\sqrt[n]{b}} \\quad (b \\ne 0)' },
          { label: 'Square root of a square', tex: '\\sqrt{x^2} = |x|, \\qquad \\sqrt[3]{x^3} = x' },
          { label: 'Simplify', tex: '\\sqrt{72} = \\sqrt{36 \\cdot 2} = 6\\sqrt{2}', text: 'Pull out the largest perfect-square factor.' },
          { label: 'Rationalize (monomial)', tex: '\\frac{a}{\\sqrt{b}} = \\frac{a\\sqrt{b}}{b}' },
          { label: 'Rationalize (conjugate)', tex: '\\frac{1}{\\sqrt{a} + \\sqrt{b}} = \\frac{\\sqrt{a} - \\sqrt{b}}{a - b}' },
          { label: 'No sum rule', tex: '\\sqrt{a + b} \\ne \\sqrt{a} + \\sqrt{b}' },
        ],
      },
      {
        title: 'Scientific notation & code',
        items: [
          { label: 'Form', tex: 'a \\times 10^n, \\quad 1 \\le |a| < 10,\\ n \\in \\mathbb{Z}' },
          { label: 'Multiply', tex: '(3 \\times 10^4)(2 \\times 10^5) = 6 \\times 10^9' },
          {
            label: 'Powers in C++',
            code: 'std::pow(x, 3.0);  // x^3   (2 ^ 3 is XOR == 1!)\nstd::sqrt(x);  std::cbrt(-8.0);  // -2\n6.02e23;  // E notation: 6.02 x 10^23',
            lang: 'cpp',
            text: '`std::pow` of a negative base with a fractional exponent returns NaN.',
          },
        ],
      },
    ],
  },

  // ------------------------------------------------------------------ Factoring
  {
    id: 'alg-factoring',
    title: 'Polynomials & Factoring',
    course: 'algebra',
    icon: '✂️',
    description: 'Special products, factoring patterns, a factoring checklist, and rational-expression rules.',
    sections: [
      {
        title: 'Special products',
        items: [
          { label: 'FOIL', tex: '(a + b)(c + d) = ac + ad + bc + bd' },
          { label: 'Square of a sum', tex: '(a + b)^2 = a^2 + 2ab + b^2' },
          { label: 'Square of a difference', tex: '(a - b)^2 = a^2 - 2ab + b^2' },
          { label: 'Conjugates', tex: '(a + b)(a - b) = a^2 - b^2' },
          { label: 'Cube of a sum', tex: '(a + b)^3 = a^3 + 3a^2b + 3ab^2 + b^3' },
        ],
      },
      {
        title: 'Factoring patterns',
        items: [
          { label: 'Greatest common factor', tex: '12x^3 + 18x^2 = 6x^2(2x + 3)' },
          { label: 'Difference of squares', tex: 'a^2 - b^2 = (a - b)(a + b)', text: 'A sum of squares $a^2 + b^2$ does not factor over $\\mathbb{R}$.' },
          { label: 'Perfect square trinomial', tex: 'a^2 \\pm 2ab + b^2 = (a \\pm b)^2' },
          { label: 'Sum of cubes', tex: 'a^3 + b^3 = (a + b)(a^2 - ab + b^2)' },
          { label: 'Difference of cubes', tex: 'a^3 - b^3 = (a - b)(a^2 + ab + b^2)' },
          { label: 'Trinomial, a = 1', tex: 'x^2 + bx + c = (x + p)(x + q), \\quad pq = c,\\ p + q = b' },
          {
            label: 'ac method',
            tex: '2x^2 + 7x + 3 = 2x^2 + x + 6x + 3 = (2x + 1)(x + 3)',
            text: 'Find two numbers with product $ac$ and sum $b$, split the middle term, then group.',
          },
          { label: 'Grouping', tex: 'x^3 + 2x^2 + 3x + 6 = x^2(x + 2) + 3(x + 2) = (x^2 + 3)(x + 2)' },
        ],
      },
      {
        title: 'Checklist',
        items: [
          { label: '1. GCF first', text: 'Always factor out the greatest common factor before anything else.' },
          { label: '2. Count terms', text: 'Two terms: squares or cubes. Three terms: perfect square or trinomial methods. Four terms: grouping.' },
          { label: '3. Factor completely', tex: 'x^4 - 16 = (x^2 + 4)(x - 2)(x + 2)', text: 'Re-check every factor, then multiply back to verify.' },
        ],
      },
      {
        title: 'Rational expressions',
        items: [
          { label: 'Simplify', tex: '\\frac{x^2 - 4}{x - 2} = x + 2, \\quad x \\ne 2', text: 'Cancel common factors only, never terms; keep the domain restrictions.' },
          { label: 'Multiply / divide', tex: '\\frac{a}{b} \\cdot \\frac{c}{d} = \\frac{ac}{bd}, \\qquad \\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\cdot \\frac{d}{c}' },
          { label: 'Add', tex: '\\frac{a}{b} + \\frac{c}{d} = \\frac{ad + bc}{bd}', text: 'Use the least common denominator to keep things small.' },
          { label: 'Complex fraction', tex: '\\frac{1 + \\frac{1}{x}}{1 - \\frac{1}{x}} = \\frac{x + 1}{x - 1}', text: 'Multiply top and bottom by the LCD of all inner fractions.' },
        ],
      },
    ],
  },

  // ------------------------------------------------------- Lines & coordinates
  {
    id: 'alg-lines-distance',
    title: 'Lines, Distance & Circles',
    course: 'algebra',
    icon: '📏',
    description: 'Slope, the three forms of a line, parallel and perpendicular lines, distance, midpoint, circles, inequalities and systems.',
    sections: [
      {
        title: 'Slope & forms of a line',
        items: [
          { label: 'Slope', tex: 'm = \\frac{y_2 - y_1}{x_2 - x_1}', text: 'Horizontal: $m = 0$. Vertical: undefined.' },
          { label: 'Slope-intercept', tex: 'y = mx + b' },
          { label: 'Point-slope', tex: 'y - y_1 = m(x - x_1)' },
          { label: 'Standard form', tex: 'Ax + By = C, \\qquad m = -\\frac{A}{B}\\ (B \\ne 0)' },
          { label: 'Horizontal / vertical', tex: 'y = k \\qquad x = h' },
          { label: 'Parallel', tex: 'm_1 = m_2' },
          { label: 'Perpendicular', tex: 'm_1 m_2 = -1 \\iff m_2 = -\\frac{1}{m_1}' },
          { label: 'Intercepts', text: '$x$-intercept: set $y = 0$. $y$-intercept: set $x = 0$.' },
        ],
      },
      {
        title: 'Distance, midpoint, circles',
        items: [
          { label: 'Distance', tex: 'd = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}' },
          { label: 'Midpoint', tex: 'M = \\left(\\frac{x_1 + x_2}{2},\\ \\frac{y_1 + y_2}{2}\\right)' },
          { label: 'Linear interpolation', tex: 'P(t) = (1 - t)P_1 + tP_2, \\quad 0 \\le t \\le 1', text: 'The midpoint is $t = \\tfrac{1}{2}$; games call this `lerp`.' },
          { label: 'Circle', tex: '(x - h)^2 + (y - k)^2 = r^2', text: 'Center $(h, k)$, radius $r$. From general form, complete the square in $x$ and $y$.' },
          {
            label: 'Point in circle (C++)',
            code: 'float dx = px - cx, dy = py - cy;\nbool inside = dx*dx + dy*dy <= r*r;  // no sqrt needed',
            lang: 'cpp',
          },
        ],
      },
      {
        title: 'Inequalities & absolute value',
        items: [
          { label: 'Flip rule', tex: '-2x < 6 \\implies x > -3', text: 'Multiplying or dividing by a negative reverses the inequality.' },
          { label: 'Interval notation', tex: '-2 < x \\le 5 \\iff (-2, 5], \\qquad x \\ge 1 \\iff [1, \\infty)' },
          { label: 'Absolute value equation', tex: '|u| = a \\iff u = a \\ \\text{or}\\ u = -a \\quad (a \\ge 0)' },
          { label: 'Less than', tex: '|u| < a \\iff -a < u < a' },
          { label: 'Greater than', tex: '|u| > a \\iff u < -a \\ \\text{or}\\ u > a' },
        ],
      },
      {
        title: 'Systems of linear equations',
        items: [
          { label: 'Substitution', text: 'Solve one equation for a variable and substitute into the other.' },
          { label: 'Elimination', text: 'Scale equations so one variable has opposite coefficients, then add.' },
          { label: 'Outcomes', text: 'One solution (lines cross), none (parallel, $0 = c$), infinitely many (same line, $0 = 0$).' },
          { label: 'Augmented matrix', tex: '\\begin{cases} x + 2y = 5 \\\\ 3x - y = 1 \\end{cases} \\ \\to\\ \\left[\\begin{array}{cc|c} 1 & 2 & 5 \\\\ 3 & -1 & 1 \\end{array}\\right]' },
          { label: 'Row operations', text: 'Swap rows; multiply a row by a nonzero constant; add a multiple of one row to another.' },
        ],
      },
    ],
  },

  // ----------------------------------------------------------------- Quadratics
  {
    id: 'alg-quadratics',
    title: 'Quadratics & Complex Numbers',
    course: 'algebra',
    icon: '∪',
    description: 'Forms of a quadratic, vertex, the quadratic formula, the discriminant, and complex arithmetic.',
    sections: [
      {
        title: 'Forms & features',
        items: [
          { label: 'Standard form', tex: 'f(x) = ax^2 + bx + c, \\quad a \\ne 0', text: 'Opens up if $a > 0$, down if $a < 0$; $y$-intercept $(0, c)$.' },
          { label: 'Vertex form', tex: 'f(x) = a(x - h)^2 + k', text: 'Vertex $(h, k)$.' },
          { label: 'Factored form', tex: 'f(x) = a(x - r_1)(x - r_2)', text: '$x$-intercepts at $r_1$ and $r_2$.' },
          { label: 'Vertex from standard form', tex: 'h = -\\frac{b}{2a}, \\qquad k = f(h)' },
          { label: 'Axis of symmetry', tex: 'x = -\\frac{b}{2a}' },
          { label: 'Range', tex: 'a > 0: [k, \\infty) \\qquad a < 0: (-\\infty, k]' },
        ],
      },
      {
        title: 'Solving',
        items: [
          { label: 'Zero product property', tex: 'ab = 0 \\iff a = 0 \\ \\text{or}\\ b = 0', text: 'Get $0$ on one side first.' },
          { label: 'Square root property', tex: 'x^2 = k \\implies x = \\pm\\sqrt{k}' },
          { label: 'Completing the square', tex: 'x^2 + bx = \\left(x + \\frac{b}{2}\\right)^2 - \\frac{b^2}{4}' },
          { label: 'Quadratic formula', tex: 'x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}' },
          {
            label: 'Discriminant',
            tex: '\\Delta = b^2 - 4ac',
            text: '$\\Delta > 0$: two real roots; $\\Delta = 0$: one repeated root; $\\Delta < 0$: two complex conjugate roots.',
          },
          { label: 'Sum & product of roots', tex: 'r_1 + r_2 = -\\frac{b}{a}, \\qquad r_1 r_2 = \\frac{c}{a}' },
        ],
      },
      {
        title: 'Complex numbers',
        items: [
          { label: 'Imaginary unit', tex: 'i^2 = -1, \\qquad \\sqrt{-a} = i\\sqrt{a}\\ \\ (a > 0)' },
          { label: 'Powers of i', tex: 'i^1 = i,\\ i^2 = -1,\\ i^3 = -i,\\ i^4 = 1', text: 'Reduce the exponent mod 4.' },
          { label: 'Multiply', tex: '(a + bi)(c + di) = (ac - bd) + (ad + bc)i' },
          { label: 'Conjugate', tex: '(a + bi)(a - bi) = a^2 + b^2' },
          { label: 'Divide', tex: '\\frac{a + bi}{c + di} = \\frac{(a + bi)(c - di)}{c^2 + d^2}' },
          { label: 'Trap', tex: '\\sqrt{-4}\\,\\sqrt{-9} = (2i)(3i) = -6 \\ne \\sqrt{36}', text: 'Rewrite with $i$ before multiplying roots of negatives.' },
        ],
      },
    ],
  },

  // ------------------------------------------------------------------ Functions
  {
    id: 'alg-functions',
    title: 'Functions & Transformations',
    course: 'algebra',
    icon: 'ƒ',
    description: 'Domain rules, transformations, symmetry, composition, inverses, and polynomial and rational function behavior.',
    sections: [
      {
        title: 'Basics',
        items: [
          { label: 'Domain restrictions', text: 'Denominator $\\ne 0$; even root of something $\\ge 0$; log of something $> 0$.' },
          { label: 'Average rate of change', tex: '\\frac{f(b) - f(a)}{b - a}' },
          { label: 'Difference quotient', tex: '\\frac{f(x + h) - f(x)}{h}, \\quad h \\ne 0' },
          { label: 'Even', tex: 'f(-x) = f(x)', text: 'Symmetric about the $y$-axis.' },
          { label: 'Odd', tex: 'f(-x) = -f(x)', text: 'Symmetric about the origin.' },
          { label: 'Tests', text: 'Vertical line test: is it a function? Horizontal line test: is it one-to-one?' },
        ],
      },
      {
        title: 'Transformations of y = f(x)',
        items: [
          { label: 'Vertical shift', tex: 'f(x) + k', text: 'Up $k$ (down if $k < 0$).' },
          { label: 'Horizontal shift', tex: 'f(x - h)', text: 'Right $h$; $f(x + 2)$ moves left $2$.' },
          { label: 'Vertical stretch', tex: 'a\\,f(x)', text: 'Stretch by $|a|$; reflect over the $x$-axis if $a < 0$.' },
          { label: 'Horizontal stretch', tex: 'f(bx)', text: 'Compress by a factor of $b$ (for $b > 1$); reflect over the $y$-axis if $b < 0$.' },
          { label: 'Reflections', tex: '-f(x):\\ (x, y) \\mapsto (x, -y) \\qquad f(-x):\\ (x, y) \\mapsto (-x, y)' },
          { label: 'Combined', tex: 'y = a\\,f\\big(b(x - h)\\big) + k', text: 'Inside changes act on $x$ and feel backwards; outside changes act on $y$.' },
        ],
      },
      {
        title: 'Composition & inverses',
        items: [
          { label: 'Composition', tex: '(f \\circ g)(x) = f\\big(g(x)\\big)', text: '$g$ acts first; in general $f \\circ g \\ne g \\circ f$.' },
          { label: 'Inverse property', tex: 'f\\big(f^{-1}(x)\\big) = x, \\qquad f^{-1}\\big(f(x)\\big) = x' },
          { label: 'Finding an inverse', text: 'Write $y = f(x)$, swap $x$ and $y$, solve for $y$.' },
          { label: 'Domain and range swap', tex: '\\operatorname{dom} f^{-1} = \\operatorname{ran} f, \\qquad \\operatorname{ran} f^{-1} = \\operatorname{dom} f' },
          { label: 'Not a reciprocal', tex: 'f^{-1}(x) \\ne \\frac{1}{f(x)}' },
        ],
      },
      {
        title: 'Polynomial functions',
        items: [
          { label: 'End behavior', text: 'Follows the leading term $a_n x^n$. Even $n$: ends agree. Odd $n$: ends opposite. Sign of $a_n$ decides which way.' },
          { label: 'Multiplicity', text: 'Odd: graph crosses the $x$-axis. Even: graph touches and turns.' },
          { label: 'Remainder theorem', tex: 'p(x) \\div (x - c) \\text{ has remainder } p(c)' },
          { label: 'Factor theorem', tex: 'p(c) = 0 \\iff (x - c) \\text{ is a factor}' },
          { label: 'Rational root candidates', tex: '\\pm\\frac{\\text{factors of } a_0}{\\text{factors of } a_n}' },
          { label: 'Fundamental theorem', text: 'Degree $n$ means exactly $n$ complex zeros counted with multiplicity; at most $n - 1$ turning points.' },
        ],
      },
      {
        title: 'Rational functions',
        items: [
          { label: 'Hole', text: 'A factor that cancels from numerator and denominator.' },
          { label: 'Vertical asymptote', text: 'Zeros of the denominator remaining after cancelling.' },
          { label: 'Horizontal asymptote', tex: '\\deg P < \\deg Q: y = 0 \\qquad \\deg P = \\deg Q: y = \\frac{a_n}{b_n}' },
          { label: 'Slant asymptote', text: 'When $\\deg P = \\deg Q + 1$: the quotient of the division, ignoring the remainder.' },
        ],
      },
    ],
  },

  // ----------------------------------------------------------- Exponentials & logs
  {
    id: 'alg-exp-log',
    title: 'Exponentials & Logarithms',
    course: 'algebra',
    icon: '📈',
    description: 'Exponential functions, the definition and laws of logarithms, change of base, and growth, decay and interest models.',
    sections: [
      {
        title: 'Definitions',
        items: [
          { label: 'Exponential function', tex: 'f(x) = a\\,b^x, \\quad b > 0,\\ b \\ne 1', text: 'Domain $\\mathbb{R}$, range $(0, \\infty)$ for $a > 0$, asymptote $y = 0$.' },
          { label: 'Logarithm', tex: '\\log_b x = y \\iff b^y = x \\quad (x > 0)' },
          { label: 'Natural and common logs', tex: '\\ln x = \\log_e x, \\qquad \\log x = \\log_{10} x' },
          { label: "Euler's number", tex: 'e = \\lim_{n \\to \\infty}\\left(1 + \\frac{1}{n}\\right)^n \\approx 2.71828' },
          { label: 'Inverse pair', tex: 'b^{\\log_b x} = x \\ (x > 0), \\qquad \\log_b(b^x) = x' },
          { label: 'Special values', tex: '\\log_b 1 = 0, \\qquad \\log_b b = 1' },
        ],
      },
      {
        title: 'Log laws',
        items: [
          { label: 'Product', tex: '\\log_b(xy) = \\log_b x + \\log_b y' },
          { label: 'Quotient', tex: '\\log_b\\frac{x}{y} = \\log_b x - \\log_b y' },
          { label: 'Power', tex: '\\log_b(x^p) = p\\log_b x' },
          { label: 'Change of base', tex: '\\log_b x = \\frac{\\ln x}{\\ln b}' },
          { label: 'Any base via e', tex: 'b^x = e^{x\\ln b}' },
          { label: 'Not laws', tex: '\\log(x + y) \\ne \\log x + \\log y, \\qquad \\frac{\\log x}{\\log y} \\ne \\log\\frac{x}{y}' },
        ],
      },
      {
        title: 'Solving',
        items: [
          { label: 'Variable in exponent', tex: '5 \\cdot 2^x = 40 \\implies 2^x = 8 \\implies x = \\frac{\\ln 8}{\\ln 2} = 3', text: 'Isolate the power, then take a log of both sides.' },
          { label: 'Log equation', tex: '\\log_2(x + 3) = 5 \\implies x + 3 = 2^5 \\implies x = 29', text: 'Rewrite in exponential form; check arguments are positive.' },
          {
            label: 'Logs in C++',
            code: 'std::log(x);    // natural log, ln x\nstd::log10(x);  // base 10\nstd::log2(x);   // base 2\nstd::exp(x);    // e^x',
            lang: 'cpp',
          },
        ],
      },
      {
        title: 'Models',
        items: [
          { label: 'Growth / decay (percent)', tex: 'A(t) = A_0(1 \\pm r)^t' },
          { label: 'Continuous', tex: 'A(t) = A_0 e^{kt}', text: '$k > 0$ growth, $k < 0$ decay.' },
          { label: 'Doubling time', tex: 'T_2 = \\frac{\\ln 2}{k}' },
          { label: 'Half-life', tex: 'A(t) = A_0\\left(\\frac{1}{2}\\right)^{t/T}, \\qquad T = \\frac{\\ln 2}{k}\\ \\ (\\text{decay } A_0e^{-kt})' },
          { label: 'Compound interest', tex: 'A = P\\left(1 + \\frac{r}{n}\\right)^{nt}' },
          { label: 'Continuous compounding', tex: 'A = Pe^{rt}' },
        ],
      },
    ],
  },

  // ----------------------------------------------------------------- Sequences
  {
    id: 'alg-sequences-series',
    title: 'Sequences, Series & Binomials',
    course: 'algebra',
    icon: '∑',
    description: 'Arithmetic and geometric sequences and sums, summation rules, factorials, binomial coefficients and the binomial theorem.',
    sections: [
      {
        title: 'Arithmetic',
        items: [
          { label: 'Common difference', tex: 'd = a_{n+1} - a_n' },
          { label: 'nth term', tex: 'a_n = a_1 + (n - 1)d' },
          { label: 'Sum of n terms', tex: 'S_n = \\frac{n(a_1 + a_n)}{2} = \\frac{n}{2}\\big(2a_1 + (n - 1)d\\big)' },
        ],
      },
      {
        title: 'Geometric',
        items: [
          { label: 'Common ratio', tex: 'r = \\frac{a_{n+1}}{a_n}' },
          { label: 'nth term', tex: 'a_n = a_1 r^{n-1}' },
          { label: 'Sum of n terms', tex: 'S_n = a_1\\frac{1 - r^n}{1 - r} \\quad (r \\ne 1)' },
          { label: 'Infinite sum', tex: 'S_\\infty = \\frac{a_1}{1 - r} \\quad (|r| < 1)', text: 'Diverges when $|r| \\ge 1$.' },
        ],
      },
      {
        title: 'Summation',
        items: [
          { label: 'Linearity', tex: '\\sum_{k=1}^{n} (c\\,a_k + b_k) = c\\sum_{k=1}^{n} a_k + \\sum_{k=1}^{n} b_k' },
          { label: 'Constant', tex: '\\sum_{k=1}^{n} c = cn' },
          { label: 'Integers', tex: '\\sum_{k=1}^{n} k = \\frac{n(n + 1)}{2}' },
          { label: 'Squares', tex: '\\sum_{k=1}^{n} k^2 = \\frac{n(n + 1)(2n + 1)}{6}' },
          { label: 'Cubes', tex: '\\sum_{k=1}^{n} k^3 = \\left(\\frac{n(n + 1)}{2}\\right)^2' },
          { label: 'Number of terms', tex: '\\sum_{k=m}^{n} \\text{ has } n - m + 1 \\text{ terms}' },
          {
            label: 'As a loop',
            code: 'long long s = 0;\nfor (int k = 1; k <= n; ++k) s += a(k);',
            lang: 'cpp',
          },
        ],
      },
      {
        title: 'Counting & binomials',
        items: [
          { label: 'Factorial', tex: 'n! = n(n - 1)\\cdots 2 \\cdot 1, \\qquad 0! = 1' },
          { label: 'Binomial coefficient', tex: '\\binom{n}{k} = \\frac{n!}{k!\\,(n - k)!}' },
          { label: 'Symmetry', tex: '\\binom{n}{k} = \\binom{n}{n - k}' },
          { label: "Pascal's rule", tex: '\\binom{n}{k} = \\binom{n-1}{k-1} + \\binom{n-1}{k}' },
          { label: 'Binomial theorem', tex: '(a + b)^n = \\sum_{k=0}^{n} \\binom{n}{k} a^{n-k} b^k' },
          { label: 'General term', tex: 'T_{k+1} = \\binom{n}{k} a^{n-k} b^k' },
          { label: 'Row sums', tex: '\\sum_{k=0}^{n} \\binom{n}{k} = 2^n' },
        ],
      },
    ],
  },
];
