import type { CheatSheet } from '../types';

export const trigCheatSheets: CheatSheet[] = [
  {
    id: 'trig-angles-radians',
    title: 'Angles & Radians',
    course: 'trig',
    icon: '📐',
    description: 'Degree–radian conversion, coterminal angles, arc length, sectors and rotational speed.',
    sections: [
      {
        title: 'Conversion',
        items: [
          { label: 'Full turn', tex: '360^\\circ = 2\\pi \\text{ rad}' },
          { label: 'Half turn', tex: '180^\\circ = \\pi \\text{ rad}' },
          { label: 'Degrees → radians', tex: '\\theta_{\\text{rad}} = \\theta_{\\text{deg}} \\cdot \\frac{\\pi}{180}' },
          { label: 'Radians → degrees', tex: '\\theta_{\\text{deg}} = \\theta_{\\text{rad}} \\cdot \\frac{180}{\\pi}' },
          { label: 'One radian', tex: '1 \\text{ rad} = \\frac{180^\\circ}{\\pi} \\approx 57.2958^\\circ' },
          {
            label: 'Common angles',
            tex: '30^\\circ = \\tfrac{\\pi}{6},\\; 45^\\circ = \\tfrac{\\pi}{4},\\; 60^\\circ = \\tfrac{\\pi}{3},\\; 90^\\circ = \\tfrac{\\pi}{2},\\; 270^\\circ = \\tfrac{3\\pi}{2}',
          },
          {
            label: 'In C++',
            code: 'double rad = deg * std::numbers::pi / 180.0;  // <numbers>, C++20',
            lang: 'cpp',
            text: '`std::sin`, `std::cos`, `std::atan2` all use radians.',
          },
        ],
      },
      {
        title: 'Coterminal & reference angles',
        items: [
          { label: 'Coterminal angles', tex: '\\theta + 360^\\circ k \\;\\text{ or }\\; \\theta + 2\\pi k, \\quad k \\in \\mathbb{Z}' },
          {
            label: 'Reference angle',
            tex: '\\theta\' = \\theta \\;(\\text{I}),\\quad \\pi - \\theta \\;(\\text{II}),\\quad \\theta - \\pi \\;(\\text{III}),\\quad 2\\pi - \\theta \\;(\\text{IV})',
            text: 'Acute angle to the $x$-axis; first reduce $\\theta$ into $[0, 2\\pi)$.',
          },
        ],
      },
      {
        title: 'Circles (θ in radians)',
        items: [
          { label: 'Radian definition', tex: '\\theta = \\frac{s}{r}' },
          { label: 'Arc length', tex: 's = r\\theta' },
          { label: 'Sector area', tex: 'A = \\tfrac12 r^2\\theta = \\tfrac12 rs' },
          { label: 'Degree versions', tex: 's = \\frac{\\theta}{360}\\,2\\pi r, \\qquad A = \\frac{\\theta}{360}\\,\\pi r^2' },
          { label: 'Angular speed', tex: '\\omega = \\frac{\\theta}{t}' },
          { label: 'Linear speed', tex: 'v = \\frac{s}{t} = r\\omega' },
          { label: 'rpm → rad/s', tex: 'n \\text{ rpm} = \\frac{2\\pi n}{60} \\text{ rad/s}' },
        ],
      },
    ],
  },
  {
    id: 'trig-right-triangles',
    title: 'Right Triangles & Exact Values',
    course: 'trig',
    icon: '🔺',
    description: 'SOH CAH TOA, the six functions, special triangles and the unit-circle table.',
    sections: [
      {
        title: 'Definitions',
        items: [
          { label: 'SOH CAH TOA', tex: '\\sin\\theta = \\frac{\\text{opp}}{\\text{hyp}}, \\quad \\cos\\theta = \\frac{\\text{adj}}{\\text{hyp}}, \\quad \\tan\\theta = \\frac{\\text{opp}}{\\text{adj}}' },
          { label: 'Reciprocals', tex: '\\csc\\theta = \\frac{\\text{hyp}}{\\text{opp}}, \\quad \\sec\\theta = \\frac{\\text{hyp}}{\\text{adj}}, \\quad \\cot\\theta = \\frac{\\text{adj}}{\\text{opp}}' },
          { label: 'Point on terminal side', tex: '\\sin\\theta = \\frac{y}{r},\\; \\cos\\theta = \\frac{x}{r},\\; \\tan\\theta = \\frac{y}{x}, \\quad r = \\sqrt{x^2 + y^2}' },
          { label: 'Unit circle point', tex: '(x, y) = (\\cos\\theta, \\sin\\theta)' },
          { label: 'Pythagorean theorem', tex: 'a^2 + b^2 = c^2' },
          { label: 'Cofunctions', tex: '\\sin\\theta = \\cos(90^\\circ - \\theta), \\quad \\tan\\theta = \\cot(90^\\circ - \\theta)' },
        ],
      },
      {
        title: 'Special triangles',
        items: [
          { label: '45°-45°-90°', tex: '1 : 1 : \\sqrt2' },
          { label: '30°-60°-90°', tex: '1 : \\sqrt3 : 2', text: 'Short leg opposite $30^\\circ$, hypotenuse $= 2 \\times$ short leg.' },
        ],
      },
      {
        title: 'Exact values (first quadrant)',
        items: [
          { label: '$\\theta = 0$', tex: '\\sin 0 = 0, \\quad \\cos 0 = 1, \\quad \\tan 0 = 0' },
          { label: '$\\theta = \\frac{\\pi}{6}$ (30°)', tex: '\\sin = \\tfrac12, \\quad \\cos = \\tfrac{\\sqrt3}{2}, \\quad \\tan = \\tfrac{\\sqrt3}{3}' },
          { label: '$\\theta = \\frac{\\pi}{4}$ (45°)', tex: '\\sin = \\tfrac{\\sqrt2}{2}, \\quad \\cos = \\tfrac{\\sqrt2}{2}, \\quad \\tan = 1' },
          { label: '$\\theta = \\frac{\\pi}{3}$ (60°)', tex: '\\sin = \\tfrac{\\sqrt3}{2}, \\quad \\cos = \\tfrac12, \\quad \\tan = \\sqrt3' },
          { label: '$\\theta = \\frac{\\pi}{2}$ (90°)', tex: '\\sin = 1, \\quad \\cos = 0, \\quad \\tan \\text{ undefined}' },
          { label: 'Sine pattern', tex: '\\sin\\theta = \\tfrac{\\sqrt0}{2}, \\tfrac{\\sqrt1}{2}, \\tfrac{\\sqrt2}{2}, \\tfrac{\\sqrt3}{2}, \\tfrac{\\sqrt4}{2}', text: 'For $0, 30^\\circ, 45^\\circ, 60^\\circ, 90^\\circ$; cosine is the same list reversed.' },
        ],
      },
      {
        title: 'Other quadrants',
        items: [
          { label: 'Signs (ASTC)', tex: '\\text{I: all} +, \\quad \\text{II: } \\sin +, \\quad \\text{III: } \\tan +, \\quad \\text{IV: } \\cos +' },
          { label: 'Quadrantal angles', tex: '(\\cos, \\sin):\\; 0 \\to (1, 0),\\; \\tfrac{\\pi}{2} \\to (0, 1),\\; \\pi \\to (-1, 0),\\; \\tfrac{3\\pi}{2} \\to (0, -1)' },
          { label: 'Second quadrant', tex: '\\tfrac{2\\pi}{3}: \\left(-\\tfrac12, \\tfrac{\\sqrt3}{2}\\right), \\quad \\tfrac{3\\pi}{4}: \\left(-\\tfrac{\\sqrt2}{2}, \\tfrac{\\sqrt2}{2}\\right), \\quad \\tfrac{5\\pi}{6}: \\left(-\\tfrac{\\sqrt3}{2}, \\tfrac12\\right)' },
          { label: 'Third quadrant', tex: '\\tfrac{7\\pi}{6}: \\left(-\\tfrac{\\sqrt3}{2}, -\\tfrac12\\right), \\quad \\tfrac{5\\pi}{4}: \\left(-\\tfrac{\\sqrt2}{2}, -\\tfrac{\\sqrt2}{2}\\right), \\quad \\tfrac{4\\pi}{3}: \\left(-\\tfrac12, -\\tfrac{\\sqrt3}{2}\\right)' },
          { label: 'Fourth quadrant', tex: '\\tfrac{5\\pi}{3}: \\left(\\tfrac12, -\\tfrac{\\sqrt3}{2}\\right), \\quad \\tfrac{7\\pi}{4}: \\left(\\tfrac{\\sqrt2}{2}, -\\tfrac{\\sqrt2}{2}\\right), \\quad \\tfrac{11\\pi}{6}: \\left(\\tfrac{\\sqrt3}{2}, -\\tfrac12\\right)' },
          { label: 'Recipe', text: 'Find the quadrant → find the reference angle → look up its value → attach the ASTC sign.' },
        ],
      },
    ],
  },
  {
    id: 'trig-graphs',
    title: 'Trig Graphs',
    course: 'trig',
    icon: '〰️',
    description: 'Domains, ranges, periods and asymptotes, plus amplitude, period, phase shift and midline of sinusoids.',
    sections: [
      {
        title: 'The six functions',
        items: [
          { label: '$\\sin x$, $\\cos x$', tex: '\\text{domain } \\mathbb{R}, \\quad \\text{range } [-1, 1], \\quad \\text{period } 2\\pi' },
          { label: '$\\tan x$', tex: 'x \\ne \\tfrac{\\pi}{2} + k\\pi, \\quad \\text{range } \\mathbb{R}, \\quad \\text{period } \\pi' },
          { label: '$\\cot x$', tex: 'x \\ne k\\pi, \\quad \\text{range } \\mathbb{R}, \\quad \\text{period } \\pi' },
          { label: '$\\sec x$', tex: 'x \\ne \\tfrac{\\pi}{2} + k\\pi, \\quad \\text{range } (-\\infty, -1] \\cup [1, \\infty), \\quad \\text{period } 2\\pi' },
          { label: '$\\csc x$', tex: 'x \\ne k\\pi, \\quad \\text{range } (-\\infty, -1] \\cup [1, \\infty), \\quad \\text{period } 2\\pi' },
          { label: 'Zeros', tex: '\\sin x = 0 \\iff x = k\\pi, \\qquad \\cos x = 0 \\iff x = \\tfrac{\\pi}{2} + k\\pi' },
          { label: 'Symmetry', text: '$\\cos$, $\\sec$ even (symmetric about the $y$-axis); $\\sin$, $\\tan$, $\\csc$, $\\cot$ odd (symmetric about the origin).' },
          { label: 'Shift relation', tex: '\\cos x = \\sin\\!\\left(x + \\tfrac{\\pi}{2}\\right)' },
        ],
      },
      {
        title: 'Sinusoids',
        items: [
          { label: 'General form', tex: 'y = A\\sin\\big(B(x - C)\\big) + D \\quad \\text{or} \\quad y = A\\cos\\big(B(x - C)\\big) + D' },
          { label: 'Amplitude', tex: '|A| = \\frac{y_{\\max} - y_{\\min}}{2}' },
          { label: 'Period', tex: 'P = \\frac{2\\pi}{|B|}' },
          { label: 'Frequency', tex: 'f = \\frac{1}{P} = \\frac{|B|}{2\\pi}, \\qquad B = 2\\pi f' },
          { label: 'Phase shift', tex: 'C \\;(\\text{right if } C > 0)' },
          { label: 'Unfactored form', tex: 'A\\sin(Bx - c) + D \\implies \\text{shift} = \\frac{c}{B}', text: 'Factor $B$ out before reading the shift.' },
          { label: 'Midline', tex: 'y = D = \\frac{y_{\\max} + y_{\\min}}{2}' },
          { label: 'Range', tex: '[D - |A|,\\; D + |A|]' },
          { label: 'Tangent period', tex: 'y = A\\tan\\big(B(x - C)\\big) + D: \\quad P = \\frac{\\pi}{|B|}' },
          { label: 'Sketching', text: 'Split one period into 4 equal parts; key points fall at the quarter marks (midline, max, midline, min, midline for sine).' },
        ],
      },
      {
        title: 'Inverse functions',
        items: [
          { label: '$\\arcsin x$', tex: '[-1, 1] \\to \\left[-\\tfrac{\\pi}{2}, \\tfrac{\\pi}{2}\\right]' },
          { label: '$\\arccos x$', tex: '[-1, 1] \\to [0, \\pi]' },
          { label: '$\\arctan x$', tex: '\\mathbb{R} \\to \\left(-\\tfrac{\\pi}{2}, \\tfrac{\\pi}{2}\\right)' },
          { label: '`atan2(y, x)`', tex: '(x, y) \\ne (0, 0) \\to (-\\pi, \\pi]', text: 'Quadrant-correct angle of $(x, y)$; note **y first**.' },
          { label: 'Cancellation', tex: '\\sin(\\arcsin x) = x \\;\\; (|x| \\le 1), \\qquad \\arcsin(\\sin\\theta) = \\theta \\;\\; \\left(|\\theta| \\le \\tfrac{\\pi}{2}\\right)' },
        ],
      },
    ],
  },
  {
    id: 'trig-identities',
    title: 'Trig Identities',
    course: 'trig',
    icon: '🧩',
    description: 'Every identity you need: reciprocal, quotient, Pythagorean, even-odd, cofunction, sum/difference, double- and half-angle, power-reducing, product-to-sum.',
    sections: [
      {
        title: 'Fundamental',
        items: [
          { label: 'Reciprocal', tex: '\\csc\\theta = \\frac{1}{\\sin\\theta}, \\quad \\sec\\theta = \\frac{1}{\\cos\\theta}, \\quad \\cot\\theta = \\frac{1}{\\tan\\theta}' },
          { label: 'Quotient', tex: '\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta}, \\qquad \\cot\\theta = \\frac{\\cos\\theta}{\\sin\\theta}' },
          { label: 'Pythagorean', tex: '\\sin^2\\theta + \\cos^2\\theta = 1' },
          { label: 'Tangent–secant', tex: '1 + \\tan^2\\theta = \\sec^2\\theta' },
          { label: 'Cotangent–cosecant', tex: '1 + \\cot^2\\theta = \\csc^2\\theta' },
          { label: 'Even-odd', tex: '\\cos(-\\theta) = \\cos\\theta, \\quad \\sin(-\\theta) = -\\sin\\theta, \\quad \\tan(-\\theta) = -\\tan\\theta' },
          { label: 'Cofunction', tex: '\\sin\\!\\left(\\tfrac{\\pi}{2} - \\theta\\right) = \\cos\\theta, \\quad \\tan\\!\\left(\\tfrac{\\pi}{2} - \\theta\\right) = \\cot\\theta, \\quad \\sec\\!\\left(\\tfrac{\\pi}{2} - \\theta\\right) = \\csc\\theta' },
          { label: 'Periodicity', tex: '\\sin(\\theta + 2\\pi) = \\sin\\theta, \\quad \\cos(\\theta + 2\\pi) = \\cos\\theta, \\quad \\tan(\\theta + \\pi) = \\tan\\theta' },
          { label: 'Supplement / half turn', tex: '\\sin(\\pi - \\theta) = \\sin\\theta, \\quad \\cos(\\pi - \\theta) = -\\cos\\theta, \\quad \\sin(\\theta + \\pi) = -\\sin\\theta' },
        ],
      },
      {
        title: 'Sum and difference',
        items: [
          { label: 'Sine', tex: '\\sin(\\alpha \\pm \\beta) = \\sin\\alpha\\cos\\beta \\pm \\cos\\alpha\\sin\\beta' },
          { label: 'Cosine', tex: '\\cos(\\alpha \\pm \\beta) = \\cos\\alpha\\cos\\beta \\mp \\sin\\alpha\\sin\\beta', text: 'Note the sign flip.' },
          { label: 'Tangent', tex: '\\tan(\\alpha \\pm \\beta) = \\frac{\\tan\\alpha \\pm \\tan\\beta}{1 \\mp \\tan\\alpha\\tan\\beta}' },
          { label: '2D rotation by β', tex: 'x\' = x\\cos\\beta - y\\sin\\beta, \\qquad y\' = x\\sin\\beta + y\\cos\\beta' },
        ],
      },
      {
        title: 'Double angle',
        items: [
          { label: 'Sine', tex: '\\sin 2\\theta = 2\\sin\\theta\\cos\\theta' },
          { label: 'Cosine', tex: '\\cos 2\\theta = \\cos^2\\theta - \\sin^2\\theta = 2\\cos^2\\theta - 1 = 1 - 2\\sin^2\\theta' },
          { label: 'Tangent', tex: '\\tan 2\\theta = \\frac{2\\tan\\theta}{1 - \\tan^2\\theta}' },
        ],
      },
      {
        title: 'Power-reducing',
        items: [
          { label: 'Sine squared', tex: '\\sin^2\\theta = \\frac{1 - \\cos 2\\theta}{2}' },
          { label: 'Cosine squared', tex: '\\cos^2\\theta = \\frac{1 + \\cos 2\\theta}{2}' },
          { label: 'Tangent squared', tex: '\\tan^2\\theta = \\frac{1 - \\cos 2\\theta}{1 + \\cos 2\\theta}' },
        ],
      },
      {
        title: 'Half angle',
        items: [
          { label: 'Sine', tex: '\\sin\\frac{\\theta}{2} = \\pm\\sqrt{\\frac{1 - \\cos\\theta}{2}}', text: 'Sign from the quadrant of $\\frac{\\theta}{2}$.' },
          { label: 'Cosine', tex: '\\cos\\frac{\\theta}{2} = \\pm\\sqrt{\\frac{1 + \\cos\\theta}{2}}' },
          { label: 'Tangent', tex: '\\tan\\frac{\\theta}{2} = \\frac{1 - \\cos\\theta}{\\sin\\theta} = \\frac{\\sin\\theta}{1 + \\cos\\theta}' },
        ],
      },
      {
        title: 'Product-to-sum & sum-to-product',
        items: [
          { label: '$\\sin\\cdot\\cos$', tex: '\\sin\\alpha\\cos\\beta = \\tfrac12\\big[\\sin(\\alpha + \\beta) + \\sin(\\alpha - \\beta)\\big]' },
          { label: '$\\cos\\cdot\\cos$', tex: '\\cos\\alpha\\cos\\beta = \\tfrac12\\big[\\cos(\\alpha - \\beta) + \\cos(\\alpha + \\beta)\\big]' },
          { label: '$\\sin\\cdot\\sin$', tex: '\\sin\\alpha\\sin\\beta = \\tfrac12\\big[\\cos(\\alpha - \\beta) - \\cos(\\alpha + \\beta)\\big]' },
          { label: '$\\sin + \\sin$', tex: '\\sin\\alpha + \\sin\\beta = 2\\sin\\frac{\\alpha + \\beta}{2}\\cos\\frac{\\alpha - \\beta}{2}' },
          { label: '$\\cos + \\cos$', tex: '\\cos\\alpha + \\cos\\beta = 2\\cos\\frac{\\alpha + \\beta}{2}\\cos\\frac{\\alpha - \\beta}{2}' },
          { label: '$\\cos - \\cos$', tex: '\\cos\\alpha - \\cos\\beta = -2\\sin\\frac{\\alpha + \\beta}{2}\\sin\\frac{\\alpha - \\beta}{2}' },
        ],
      },
    ],
  },
  {
    id: 'trig-equations-triangles',
    title: 'Equations & Solving Triangles',
    course: 'trig',
    icon: '📏',
    description: 'General solutions of trig equations, the laws of sines and cosines, the SSA case and triangle area.',
    sections: [
      {
        title: 'General solutions ($n \\in \\mathbb{Z}$)',
        items: [
          { label: '$\\sin x = k$, $|k| \\le 1$', tex: 'x = \\arcsin k + 2\\pi n \\;\\text{ or }\\; x = \\pi - \\arcsin k + 2\\pi n' },
          { label: '$\\cos x = k$, $|k| \\le 1$', tex: 'x = \\pm\\arccos k + 2\\pi n' },
          { label: '$\\tan x = k$', tex: 'x = \\arctan k + \\pi n' },
          { label: 'Multiple angle', text: 'For $\\sin(Bx) = k$, solve for $Bx$ first, then divide every solution (including $2\\pi n$) by $B$.' },
          { label: 'Strategy', text: 'Factor rather than divide by a trig function (dividing loses solutions); use identities to get a single function; check for extraneous roots after squaring.' },
        ],
      },
      {
        title: 'Right triangles',
        items: [
          { label: 'Missing side', tex: '\\text{opp} = \\text{hyp}\\sin\\theta, \\quad \\text{adj} = \\text{hyp}\\cos\\theta, \\quad \\text{opp} = \\text{adj}\\tan\\theta' },
          { label: 'Missing angle', tex: '\\theta = \\arctan\\frac{\\text{opp}}{\\text{adj}} = \\arcsin\\frac{\\text{opp}}{\\text{hyp}} = \\arccos\\frac{\\text{adj}}{\\text{hyp}}' },
          { label: 'Elevation / depression', text: 'Both measured from the **horizontal**; elevation from $A$ to $B$ = depression from $B$ to $A$.' },
        ],
      },
      {
        title: 'Oblique triangles',
        items: [
          { label: 'Angle sum', tex: 'A + B + C = 180^\\circ' },
          { label: 'Law of sines', tex: '\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C} = 2R', text: 'Use for AAS, ASA, SSA.' },
          { label: 'Law of cosines', tex: 'c^2 = a^2 + b^2 - 2ab\\cos C', text: 'Use for SAS, SSS.' },
          { label: 'Angle from sides', tex: '\\cos C = \\frac{a^2 + b^2 - c^2}{2ab}', text: 'Never ambiguous — find the largest angle this way first.' },
          {
            label: 'SSA, $A$ acute ($h = b\\sin A$)',
            tex: 'a < h: 0 \\qquad a = h: 1 \\qquad h < a < b: 2 \\qquad a \\ge b: 1',
          },
          { label: 'SSA, $A \\ge 90^\\circ$', tex: 'a \\le b: 0 \\qquad a > b: 1' },
          { label: 'Second SSA angle', tex: 'B_2 = 180^\\circ - B_1 \\quad \\text{(valid if } A + B_2 < 180^\\circ)' },
        ],
      },
      {
        title: 'Area',
        items: [
          { label: 'Base–height', tex: 'K = \\tfrac12 bh' },
          { label: 'SAS', tex: 'K = \\tfrac12 ab\\sin C' },
          { label: "Heron's formula", tex: 'K = \\sqrt{s(s - a)(s - b)(s - c)}, \\qquad s = \\frac{a + b + c}{2}' },
        ],
      },
    ],
  },
  {
    id: 'trig-vectors-polar',
    title: 'Vectors, Polar & Complex',
    course: 'trig',
    icon: '🧭',
    description: 'Vector components, magnitude, direction, dot product, polar coordinates, polar form of complex numbers, De Moivre and Euler.',
    sections: [
      {
        title: 'Vectors',
        items: [
          { label: 'Component form', tex: '\\mathbf v = \\langle a, b \\rangle = a\\,\\mathbf i + b\\,\\mathbf j' },
          { label: 'From $P$ to $Q$', tex: '\\overrightarrow{PQ} = \\langle x_2 - x_1,\\; y_2 - y_1 \\rangle' },
          { label: 'Magnitude', tex: '|\\mathbf v| = \\sqrt{a^2 + b^2}' },
          { label: 'From magnitude & angle', tex: '\\mathbf v = \\langle |\\mathbf v|\\cos\\theta,\\; |\\mathbf v|\\sin\\theta \\rangle' },
          { label: 'Direction angle', tex: '\\theta = \\operatorname{atan2}(b, a), \\qquad \\tan\\theta = \\frac{b}{a}', text: 'Add $180^\\circ$ to $\\arctan(b/a)$ when $a < 0$.' },
          { label: 'Unit vector', tex: '\\hat{\\mathbf v} = \\frac{\\mathbf v}{|\\mathbf v|} \\quad (\\mathbf v \\ne \\mathbf 0)' },
          { label: 'Add / scale', tex: '\\langle a, b \\rangle + \\langle c, d \\rangle = \\langle a + c, b + d \\rangle, \\qquad k\\langle a, b \\rangle = \\langle ka, kb \\rangle' },
        ],
      },
      {
        title: 'Dot product',
        items: [
          { label: 'Algebraic', tex: '\\mathbf u \\cdot \\mathbf v = u_1v_1 + u_2v_2' },
          { label: 'Geometric', tex: '\\mathbf u \\cdot \\mathbf v = |\\mathbf u|\\,|\\mathbf v|\\cos\\theta' },
          { label: 'Angle between', tex: '\\theta = \\arccos\\frac{\\mathbf u \\cdot \\mathbf v}{|\\mathbf u|\\,|\\mathbf v|}', text: 'Clamp the ratio to $[-1, 1]$ in code before `acos`.' },
          { label: 'Orthogonal', tex: '\\mathbf u \\perp \\mathbf v \\iff \\mathbf u \\cdot \\mathbf v = 0' },
          { label: 'Projection', tex: '\\operatorname{proj}_{\\mathbf v}\\mathbf u = \\frac{\\mathbf u \\cdot \\mathbf v}{|\\mathbf v|^2}\\,\\mathbf v' },
          { label: 'Self dot', tex: '\\mathbf v \\cdot \\mathbf v = |\\mathbf v|^2' },
          { label: 'Work', tex: 'W = \\mathbf F \\cdot \\mathbf d = |\\mathbf F|\\,|\\mathbf d|\\cos\\theta' },
        ],
      },
      {
        title: 'Polar coordinates',
        items: [
          { label: 'Polar → rectangular', tex: 'x = r\\cos\\theta, \\qquad y = r\\sin\\theta' },
          { label: 'Rectangular → polar', tex: 'r = \\sqrt{x^2 + y^2}, \\qquad \\theta = \\operatorname{atan2}(y, x)' },
          { label: 'Same point', tex: '(r, \\theta) = (r, \\theta + 2\\pi k) = (-r, \\theta + \\pi)' },
          { label: 'Circle about origin', tex: 'r = a \\iff x^2 + y^2 = a^2' },
        ],
      },
      {
        title: 'Complex numbers',
        items: [
          { label: 'Polar form', tex: 'z = a + bi = r(\\cos\\theta + i\\sin\\theta) = re^{i\\theta}, \\quad r = \\sqrt{a^2 + b^2}' },
          { label: 'Multiply', tex: 'r_1e^{i\\theta_1} \\cdot r_2e^{i\\theta_2} = r_1r_2\\,e^{i(\\theta_1 + \\theta_2)}' },
          { label: 'Divide', tex: '\\frac{r_1e^{i\\theta_1}}{r_2e^{i\\theta_2}} = \\frac{r_1}{r_2}\\,e^{i(\\theta_1 - \\theta_2)}' },
          { label: "De Moivre's theorem", tex: '\\big[r(\\cos\\theta + i\\sin\\theta)\\big]^n = r^n(\\cos n\\theta + i\\sin n\\theta)' },
          { label: '$n$th roots', tex: 'w_k = r^{1/n}\\left(\\cos\\frac{\\theta + 2\\pi k}{n} + i\\sin\\frac{\\theta + 2\\pi k}{n}\\right), \\quad k = 0, 1, \\ldots, n - 1' },
          { label: "Euler's formula", tex: 'e^{i\\theta} = \\cos\\theta + i\\sin\\theta, \\qquad e^{i\\pi} + 1 = 0' },
        ],
      },
    ],
  },
];
