import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'trig-six-functions',
  title: 'All Six Trig Functions',
  summary: 'Tangent, secant, cosecant and cotangent on the unit circle: what they mean geometrically, where they blow up, and how the Pythagorean identity ties all six together.',
  minutes: 18,
  objectives: [
    'Define $\\tan$, $\\cot$, $\\sec$ and $\\csc$ of any angle from the unit-circle point $(x, y)$',
    'Evaluate all six functions from any point on the terminal side using $r = \\sqrt{x^2 + y^2}$',
    'State the domain and range of each function and explain where each is undefined',
    'Derive $1 + \\tan^2\\theta = \\sec^2\\theta$ and $\\cot^2\\theta + 1 = \\csc^2\\theta$ from $\\cos^2\\theta + \\sin^2\\theta = 1$',
    'Find all six values from one value and the quadrant',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Four more functions from one point',
      blocks: [
        {
          type: 'p',
          text: 'The unit-circle point $P = (x, y) = (\\cos\\theta, \\sin\\theta)$ has only two coordinates, but there are four more useful numbers you can build from them: their two quotients and their two reciprocals. In a right triangle these were $\\frac{\\text{opp}}{\\text{adj}}$, $\\frac{\\text{hyp}}{\\text{adj}}$ and so on. On the unit circle the hypotenuse is $1$, so they become simple expressions in $x$ and $y$, now valid for every angle (where the denominator is not zero).',
        },
        {
          type: 'definition',
          term: 'The six trigonometric functions',
          text: 'If the terminal side of $\\theta$ meets the unit circle at $(x, y)$, then\n\n$$\\sin\\theta = y, \\quad \\cos\\theta = x, \\quad \\tan\\theta = \\frac{y}{x}\\ (x \\ne 0),$$\n\n$$\\csc\\theta = \\frac{1}{y}\\ (y \\ne 0), \\quad \\sec\\theta = \\frac{1}{x}\\ (x \\ne 0), \\quad \\cot\\theta = \\frac{x}{y}\\ (y \\ne 0).$$',
        },
        {
          type: 'table',
          headers: ['function', 'in terms of $x, y$', 'in terms of $\\sin, \\cos$', 'reciprocal of'],
          rows: [
            ['[[tangent-function|tangent]] $\\tan\\theta$', '$\\frac{y}{x}$', '$\\frac{\\sin\\theta}{\\cos\\theta}$', '$\\cot\\theta$'],
            ['[[cotangent]] $\\cot\\theta$', '$\\frac{x}{y}$', '$\\frac{\\cos\\theta}{\\sin\\theta}$', '$\\tan\\theta$'],
            ['[[secant-function|secant]] $\\sec\\theta$', '$\\frac{1}{x}$', '$\\frac{1}{\\cos\\theta}$', '$\\cos\\theta$'],
            ['[[cosecant]] $\\csc\\theta$', '$\\frac{1}{y}$', '$\\frac{1}{\\sin\\theta}$', '$\\sin\\theta$'],
          ],
          caption: 'Pairing rule: each "co-" function goes with a non-"co" one. Secant pairs with **co**sine and **co**secant with sine.',
        },
        {
          type: 'p',
          text: 'Why "tangent" and "secant"? Draw the vertical line $x = 1$, which *touches* the circle at $(1, 0)$: a tangent line. Extend the radius until it hits that line. By similar triangles, the height where it hits is $\\frac{y}{x} = \\tan\\theta$, and the length of the extended radius, which *cuts* the circle (Latin *secare*, to cut), is $\\frac{1}{x} = \\sec\\theta$.',
        },
        {
          type: 'graph',
          x: [-1.5, 2],
          y: [-3.5, 3.5],
          equal: true,
          height: 380,
          parametric: [{ x: 'cos(t)', y: 'sin(t)', t: [0, '2pi'], color: 'gray' }],
          vlines: [{ x: 1, label: 'x = 1', color: 'gray' }],
          segments: [
            { from: [0, 0], to: [1, 'tan(a)'], color: 'purple', label: 'sec θ' },
            { from: [1, 0], to: [1, 'tan(a)'], color: 'orange', label: 'tan θ' },
            { from: [0, 0], to: ['cos(a)', 0], color: 'red', label: 'cos θ' },
            { from: ['cos(a)', 0], to: ['cos(a)', 'sin(a)'], color: 'green', label: 'sin θ' },
          ],
          points: [
            { x: 'cos(a)', y: 'sin(a)', label: 'P', color: 'blue' },
            { x: 1, y: 'tan(a)', label: '(1, tan θ)', color: 'orange' },
          ],
          sliders: [{ name: 'a', min: -1.3, max: 1.3, step: 0.01, value: 0.7, label: '$\\theta$ (radians)' }],
          readouts: [
            { label: '$\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta} =$', expr: 'tan(a)', digits: 4 },
            { label: '$\\sec\\theta = \\frac{1}{\\cos\\theta} =$', expr: 'sec(a)', digits: 4 },
          ],
          caption: 'The small triangle (legs $\\cos\\theta$, $\\sin\\theta$, hypotenuse $1$) and the big one (legs $1$, $\\tan\\theta$, hypotenuse $\\sec\\theta$) are similar. Push $\\theta$ toward $\\frac{\\pi}{2}$ and watch $\\tan\\theta$ and $\\sec\\theta$ race off the screen.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why $\\tan\\theta$ is the slope of the terminal side',
          text: 'The terminal side passes through $(0, 0)$ and $(x, y)$, so its slope is $\\frac{y - 0}{x - 0} = \\frac{y}{x} = \\tan\\theta$. That is the most useful way to think about tangent: **the slope of a line that makes angle $\\theta$ with the positive $x$-axis.** A ramp at $30^\\circ$ has slope $\\tan 30^\\circ = \\frac{\\sqrt3}{3} \\approx 0.577$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'numeric',
      prompt: 'The terminal side of $\\theta$ meets the unit circle at $(-0.6,\\ 0.8)$. Find $\\tan\\theta$.',
      hint: '$\\tan\\theta = \\frac{y}{x}$.',
      label: '$\\tan\\theta =$',
      answer: '-4/3',
      answerTex: '-\\frac{4}{3}',
      explanation: '$\\tan\\theta = \\frac{y}{x} = \\frac{0.8}{-0.6} = -\\frac{4}{3} \\approx -1.333$. The sign makes sense: the point is in quadrant II, where tangent is negative (ASTC), and the terminal side slopes down to the right. A common slip is $\\frac{x}{y} = -\\frac34$, which is $\\cot\\theta$.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Any point on the terminal side works',
      blocks: [
        {
          type: 'p',
          text: 'Often you know some point $(x, y)$ on the terminal side that is *not* on the unit circle, for example a game object at $(-8, 15)$ relative to the player. Its distance from the origin is $r = \\sqrt{x^2 + y^2}$. Dividing by $r$ shrinks the point onto the unit circle: $\\left(\\frac{x}{r}, \\frac{y}{r}\\right)$. So:',
        },
        {
          type: 'theorem',
          name: 'Six functions from any point $(x, y) \\ne (0, 0)$',
          tex: '\\sin\\theta = \\frac{y}{r}, \\quad \\cos\\theta = \\frac{x}{r}, \\quad \\tan\\theta = \\frac{y}{x}, \\quad \\csc\\theta = \\frac{r}{y}, \\quad \\sec\\theta = \\frac{r}{x}, \\quad \\cot\\theta = \\frac{x}{y}',
          text: 'where $r = \\sqrt{x^2 + y^2} > 0$. Tangent and cotangent do not need $r$ at all, because the $r$\'s cancel.',
        },
        {
          type: 'derivation',
          title: 'All six for the point $(-8, 15)$',
          steps: [
            { tex: 'r = \\sqrt{(-8)^2 + 15^2} = \\sqrt{64 + 225} = \\sqrt{289} = 17', why: 'Distance from the origin, by the [[pythagorean-theorem]]. $r$ is always positive.' },
            { tex: '\\sin\\theta = \\tfrac{15}{17}, \\quad \\cos\\theta = -\\tfrac{8}{17}', why: 'Divide each coordinate by $r$ to get the unit-circle point.' },
            { tex: '\\tan\\theta = \\tfrac{15}{-8} = -\\tfrac{15}{8}', why: '$\\frac{y}{x}$.' },
            { tex: '\\csc\\theta = \\tfrac{17}{15}, \\quad \\sec\\theta = -\\tfrac{17}{8}, \\quad \\cot\\theta = -\\tfrac{8}{15}', why: 'Flip the fractions for $\\sin$, $\\cos$ and $\\tan$. A reciprocal always keeps the sign.' },
          ],
          result: 'Quadrant II: only $\\sin$ and its reciprocal $\\csc$ are positive, matching ASTC.',
        },
        {
          type: 'derivation',
          title: 'All six at $\\theta = \\frac{2\\pi}{3}$',
          steps: [
            { tex: '(x, y) = \\left(-\\tfrac12, \\tfrac{\\sqrt3}{2}\\right)', why: 'Quadrant II, reference angle $\\frac{\\pi}{3}$: the $\\frac{\\pi}{3}$ point with $x$ made negative (previous lesson).' },
            { tex: '\\tan\\tfrac{2\\pi}{3} = \\dfrac{\\sqrt3/2}{-1/2} = -\\sqrt3', why: 'Dividing by $-\\frac12$ is multiplying by $-2$; the 2s cancel.' },
            { tex: '\\sec\\tfrac{2\\pi}{3} = \\dfrac{1}{-1/2} = -2', why: 'Reciprocal of cosine.' },
            { tex: '\\csc\\tfrac{2\\pi}{3} = \\dfrac{2}{\\sqrt3} = \\dfrac{2\\sqrt3}{3}', why: 'Reciprocal of sine, then rationalise the denominator.' },
            { tex: '\\cot\\tfrac{2\\pi}{3} = -\\dfrac{1}{\\sqrt3} = -\\dfrac{\\sqrt3}{3}', why: 'Reciprocal of $\\tan\\frac{2\\pi}{3} = -\\sqrt3$, rationalised.' },
          ],
          result: '$\\sin = \\frac{\\sqrt3}{2}$, $\\cos = -\\frac12$, $\\tan = -\\sqrt3$, $\\csc = \\frac{2\\sqrt3}{3}$, $\\sec = -2$, $\\cot = -\\frac{\\sqrt3}{3}$.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Normalising a vector',
          text: 'Dividing $(x, y)$ by $r = \\sqrt{x^2 + y^2}$ is exactly what `normalize()` does in every game math library. The result $\\left(\\frac{x}{r}, \\frac{y}{r}\\right)$ is $(\\cos\\theta, \\sin\\theta)$ for the direction of $(x, y)$, with no angle ever computed. Engines often skip the trig functions entirely for this reason.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'numeric',
      prompt: 'The terminal side of $\\theta$ passes through $(5, -12)$. Find $\\csc\\theta$.',
      hint: 'First find $r = \\sqrt{x^2 + y^2}$. Then $\\csc\\theta = \\frac{r}{y}$.',
      label: '$\\csc\\theta =$',
      answer: '-13/12',
      answerTex: '-\\frac{13}{12}',
      explanation: '$r = \\sqrt{5^2 + (-12)^2} = \\sqrt{25 + 144} = \\sqrt{169} = 13$. So $\\sin\\theta = \\frac{y}{r} = -\\frac{12}{13}$ and $\\csc\\theta = \\frac{r}{y} = \\frac{13}{-12} = -\\frac{13}{12}$. The point is in quadrant IV, where sine (and therefore cosecant) is negative.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'numeric',
      prompt: 'Evaluate $\\cot\\frac{7\\pi}{6}$ exactly.',
      hint: 'The unit-circle point at $\\frac{7\\pi}{6}$ is $\\left(-\\frac{\\sqrt3}{2}, -\\frac12\\right)$. Cotangent is $\\frac{x}{y}$.',
      label: '$\\cot\\frac{7\\pi}{6} =$',
      answer: 'sqrt(3)',
      answerTex: '\\sqrt{3}',
      explanation: '$\\frac{7\\pi}{6}$ is in quadrant III with reference angle $\\frac{\\pi}{6}$, so the point is $\\left(-\\frac{\\sqrt3}{2}, -\\frac12\\right)$. Then $\\cot\\frac{7\\pi}{6} = \\frac{x}{y} = \\dfrac{-\\sqrt3/2}{-1/2} = \\sqrt3 \\approx 1.732$. Positive, as expected: in quadrant III tangent and cotangent are the positive pair.',
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'concept',
      title: 'Where they break: domains and ranges',
      blocks: [
        {
          type: 'p',
          text: 'Sine and cosine are defined for every angle. The other four involve division, so they fail wherever their denominator is zero. There are only two denominators to watch: $x$ and $y$.',
        },
        {
          type: 'list',
          items: [
            '$x = \\cos\\theta = 0$ at the top and bottom of the circle, $\\theta = \\frac{\\pi}{2} + k\\pi$. There $\\tan\\theta = \\frac{y}{x}$ and $\\sec\\theta = \\frac1x$ are **undefined**.',
            '$y = \\sin\\theta = 0$ at the left and right of the circle, $\\theta = k\\pi$. There $\\cot\\theta = \\frac{x}{y}$ and $\\csc\\theta = \\frac1y$ are **undefined**.',
          ],
        },
        {
          type: 'table',
          headers: ['function', '[[domain]] (all real $\\theta$ except…)', '[[range]]'],
          rows: [
            ['$\\sin\\theta$, $\\cos\\theta$', 'none', '$[-1, 1]$'],
            ['$\\tan\\theta$', '$\\theta = \\frac{\\pi}{2} + k\\pi$', 'all real numbers'],
            ['$\\sec\\theta$', '$\\theta = \\frac{\\pi}{2} + k\\pi$', '$(-\\infty, -1] \\cup [1, \\infty)$'],
            ['$\\cot\\theta$', '$\\theta = k\\pi$', 'all real numbers'],
            ['$\\csc\\theta$', '$\\theta = k\\pi$', '$(-\\infty, -1] \\cup [1, \\infty)$'],
          ],
          caption: 'Here $k$ is any integer.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why $|\\sec\\theta| \\ge 1$ but $\\tan\\theta$ can be anything',
          text: 'Cosine lives in $[-1, 1]$, and the reciprocal of a number between $-1$ and $1$ has size **at least** $1$: $\\frac{1}{0.5} = 2$, $\\frac{1}{-0.1} = -10$. So secant can never be $\\frac12$ or $0$. Tangent is a slope, and a line through the origin can have any slope at all, from steeply negative through $0$ to steeply positive. In the graph above, $\\sec\\theta$ is the length of the purple segment, which is never shorter than the radius $1$.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: '$\\sec\\theta$ is not $\\cos^{-1}\\theta$',
          text: 'The calculator key $\\cos^{-1}$ means the **inverse** function arccos (the angle whose cosine is…), studied in a later unit. Secant is the **reciprocal** $\\frac{1}{\\cos\\theta}$. Calculators have no secant key; type `1/cos(θ)`.',
        },
        {
          type: 'code',
          title: 'near_vertical.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdio>

int main() {
    const double pi = std::acos(-1.0);
    const double angles[] = {pi / 4, pi / 3, 1.5, 1.57, pi / 2};

    for (double a : angles) {
        double c = std::cos(a), s = std::sin(a);
        std::printf("theta = %.4f  cos = %.6f  tan = %.6g  sec = %.6g\\n",
                    a, c, s / c, 1.0 / c);
    }
}`,
          output: `theta = 0.7854  cos = 0.707107  tan = 1  sec = 1.41421
theta = 1.0472  cos = 0.500000  tan = 1.73205  sec = 2
theta = 1.5000  cos = 0.070737  tan = 14.1014  sec = 14.1368
theta = 1.5700  cos = 0.000796  tan = 1255.77  sec = 1255.77
theta = 1.5708  cos = 0.000000  tan = 1.63312e+16  sec = 1.63312e+16`,
          annotations: [
            { lines: 6, text: 'Angles creeping up on $\\frac{\\pi}{2} \\approx 1.5708$, where cosine is zero.' },
            { lines: '9-11', text: 'Compute $\\tan = \\frac{\\sin}{\\cos}$ and $\\sec = \\frac{1}{\\cos}$ directly.' },
          ],
        },
        {
          type: 'p',
          text: 'The last line is the floating-point lesson: `pi / 2` in a `double` is not exactly $\\frac{\\pi}{2}$, so $\\cos$ comes out as about $6 \\times 10^{-17}$ instead of $0$, and the "undefined" tangent becomes a huge but finite number. Code that computes a slope with `tan(angle)` will happily produce nonsense near vertical. That is one reason game engines prefer direction vectors $(\\cos\\theta, \\sin\\theta)$, and the function `atan2` (coming in the inverse-trig unit), over raw tangents.',
        },
      ],
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'mcq',
      prompt: 'Which of these is **undefined**?',
      options: [
        { text: '$\\tan\\pi$', why: 'At $\\pi$ the point is $(-1, 0)$, so $\\tan\\pi = \\frac{0}{-1} = 0$. Zero on top is fine.' },
        { text: '$\\sec\\pi$', why: '$\\sec\\pi = \\frac{1}{x} = \\frac{1}{-1} = -1$. Defined.' },
        { text: '$\\cot\\pi$', correct: true, why: '$\\cot\\pi = \\frac{x}{y} = \\frac{-1}{0}$: division by zero.' },
        { text: '$\\cos\\pi$', why: 'Cosine is defined everywhere; $\\cos\\pi = -1$.' },
      ],
      explanation: 'At $\\theta = \\pi$ the unit-circle point is $(-1, 0)$, so $y = 0$. The functions with $y$ in the **denominator**, $\\cot\\theta = \\frac{x}{y}$ and $\\csc\\theta = \\frac{1}{y}$, are undefined there. Tangent has $y$ in the *numerator*, and $\\frac{0}{-1} = 0$ is a perfectly good number.',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'truefalse',
      prompt: 'There is an angle $\\theta$ with $\\sec\\theta = \\frac12$.',
      answer: false,
      explanation: '$\\sec\\theta = \\frac12$ would require $\\cos\\theta = \\frac{1}{\\sec\\theta} = 2$, but cosine never exceeds $1$. In general $|\\sec\\theta| \\ge 1$ and $|\\csc\\theta| \\ge 1$ for every angle where they are defined. (By contrast, $\\tan\\theta = \\frac12$ is perfectly possible.)',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'concept',
      title: 'The three Pythagorean identities',
      blocks: [
        {
          type: 'p',
          text: 'You know the master identity $\\cos^2\\theta + \\sin^2\\theta = 1$: it is just the circle equation. Dividing it by $\\cos^2\\theta$ or by $\\sin^2\\theta$ produces two companion identities that link the other four functions. Together they are the [[pythagorean-identities]].',
        },
        {
          type: 'derivation',
          title: 'Derive $1 + \\tan^2\\theta = \\sec^2\\theta$',
          steps: [
            { tex: '\\cos^2\\theta + \\sin^2\\theta = 1', why: 'Start from the circle equation $x^2 + y^2 = 1$.' },
            { tex: '\\frac{\\cos^2\\theta}{\\cos^2\\theta} + \\frac{\\sin^2\\theta}{\\cos^2\\theta} = \\frac{1}{\\cos^2\\theta}', why: 'Divide every term by $\\cos^2\\theta$. Allowed wherever $\\cos\\theta \\ne 0$, which is exactly where $\\tan$ and $\\sec$ are defined.' },
            { tex: '1 + \\left(\\frac{\\sin\\theta}{\\cos\\theta}\\right)^2 = \\left(\\frac{1}{\\cos\\theta}\\right)^2', why: 'Simplify the first term to $1$ and write the others as squares of a single fraction.' },
            { tex: '1 + \\tan^2\\theta = \\sec^2\\theta', why: 'Recognise $\\frac{\\sin\\theta}{\\cos\\theta} = \\tan\\theta$ and $\\frac{1}{\\cos\\theta} = \\sec\\theta$.' },
          ],
          result: 'Dividing by $\\sin^2\\theta$ instead gives $\\cot^2\\theta + 1 = \\csc^2\\theta$ in the same way.',
        },
        {
          type: 'theorem',
          name: 'Pythagorean identities',
          tex: '\\cos^2\\theta + \\sin^2\\theta = 1, \\qquad 1 + \\tan^2\\theta = \\sec^2\\theta, \\qquad \\cot^2\\theta + 1 = \\csc^2\\theta',
          text: 'Each holds for every $\\theta$ where both sides are defined.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Remember one, rebuild the rest',
          text: 'Only memorise $\\cos^2\\theta + \\sin^2\\theta = 1$. To get the tangent version, divide by $\\cos^2$; for the cotangent version, divide by $\\sin^2$. The functions pair up the same way as in the reciprocal table: $\\tan$ with $\\sec$, $\\cot$ with $\\csc$. The similar triangles in the first graph show it too: legs $1$ and $\\tan\\theta$, hypotenuse $\\sec\\theta$.',
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'Instructors expect you to recognise these identities in disguise: $\\sec^2\\theta - \\tan^2\\theta = 1$, $1 - \\sin^2\\theta = \\cos^2\\theta$, $\\csc^2\\theta - 1 = \\cot^2\\theta$. They are the main tool for simplifying expressions and, in calculus, for integrals involving $\\sqrt{1 - x^2}$ or $\\sqrt{1 + x^2}$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'fill',
      prompt: 'Divide $\\cos^2\\theta + \\sin^2\\theta = 1$ by $\\sin^2\\theta$ and simplify.',
      template: 'The result is ___ $+ 1 =$ ___.',
      blanks: [{ answers: ['$\\cot^2\\theta$'] }, { answers: ['$\\csc^2\\theta$'] }],
      wordBank: ['$\\cot^2\\theta$', '$\\csc^2\\theta$', '$\\tan^2\\theta$', '$\\sec^2\\theta$', '$\\cos^2\\theta$'],
      explanation: '$\\frac{\\cos^2\\theta}{\\sin^2\\theta} = \\left(\\frac{\\cos\\theta}{\\sin\\theta}\\right)^2 = \\cot^2\\theta$, $\\frac{\\sin^2\\theta}{\\sin^2\\theta} = 1$ and $\\frac{1}{\\sin^2\\theta} = \\csc^2\\theta$. So $\\cot^2\\theta + 1 = \\csc^2\\theta$, valid wherever $\\sin\\theta \\ne 0$.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'From one value to all six',
      blocks: [
        {
          type: 'p',
          text: 'A classic problem: you are given one trig value and the quadrant, and asked for the other five. The identities give the **sizes**; the quadrant gives the **signs**. Never skip the sign step: every square root introduces a $\\pm$ that only the quadrant can settle.',
        },
        {
          type: 'derivation',
          title: 'Given $\\tan\\theta = \\frac34$ with $\\theta$ in quadrant III, find the other five',
          steps: [
            { tex: '\\sec^2\\theta = 1 + \\tan^2\\theta = 1 + \\tfrac{9}{16} = \\tfrac{25}{16}', why: 'The identity that links $\\tan$ to $\\sec$.' },
            { tex: '\\sec\\theta = \\pm\\tfrac54 \\implies \\sec\\theta = -\\tfrac54', why: 'In quadrant III, $x < 0$, so $\\cos\\theta$ and its reciprocal $\\sec\\theta$ are negative.' },
            { tex: '\\cos\\theta = \\frac{1}{\\sec\\theta} = -\\tfrac45', why: 'Reciprocal.' },
            { tex: '\\sin\\theta = \\tan\\theta \\cdot \\cos\\theta = \\tfrac34 \\cdot \\left(-\\tfrac45\\right) = -\\tfrac35', why: 'From $\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta}$, multiply both sides by $\\cos\\theta$. The sign comes out automatically, and it is negative as it should be in quadrant III.' },
            { tex: '\\csc\\theta = -\\tfrac53, \\qquad \\cot\\theta = \\tfrac43', why: 'Reciprocals of $\\sin\\theta$ and $\\tan\\theta$.' },
          ],
          result: '$\\sin\\theta = -\\frac35$, $\\cos\\theta = -\\frac45$, $\\sec\\theta = -\\frac54$, $\\csc\\theta = -\\frac53$, $\\cot\\theta = \\frac43$. Check: $\\left(-\\frac45\\right)^2 + \\left(-\\frac35\\right)^2 = \\frac{16}{25} + \\frac{9}{25} = 1$. ✓',
        },
        {
          type: 'compare',
          left: {
            title: 'Ignoring the quadrant',
            tone: 'bad',
            tex: ['\\sec\\theta = \\sqrt{\\tfrac{25}{16}} = \\tfrac54', '\\cos\\theta = \\tfrac45'],
            text: 'The square root symbol always gives the positive root, so this silently picks quadrant I or IV.',
          },
          right: {
            title: 'Using the quadrant',
            tone: 'good',
            tex: ['\\sec\\theta = \\pm\\tfrac54', '\\text{QIII} \\implies \\sec\\theta = -\\tfrac54'],
            text: 'Write $\\pm$ first, then let the quadrant choose.',
          },
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Alternative: draw the triangle',
          text: 'Since $\\tan\\theta = \\frac{y}{x} = \\frac{-3}{-4}$ in quadrant III, the point $(-4, -3)$ is on the terminal side, with $r = \\sqrt{16 + 9} = 5$. Now read all six off with $\\frac{y}{r}$, $\\frac{x}{r}$, … from the previous card. Both methods give the same answers; use whichever you find faster.',
        },
      ],
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'numeric',
      prompt: 'Given $\\sec\\theta = -3$ with $\\theta$ in quadrant II, find $\\tan\\theta$. Give the exact value.',
      hint: 'Use $\\tan^2\\theta = \\sec^2\\theta - 1$. Then choose the sign of tangent in quadrant II.',
      label: '$\\tan\\theta =$',
      answer: '-2sqrt(2)',
      answerTex: '-2\\sqrt{2} \\approx -2.828',
      explanation: '$\\tan^2\\theta = \\sec^2\\theta - 1 = 9 - 1 = 8$, so $\\tan\\theta = \\pm\\sqrt8 = \\pm 2\\sqrt2$. In quadrant II, $x < 0$ and $y > 0$, so $\\tan\\theta = \\frac{y}{x} < 0$: $\\tan\\theta = -2\\sqrt2 \\approx -2.828$. Type `-2sqrt(2)` or a decimal such as `-2.83`.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'expr',
      prompt: 'Suppose $\\theta$ is in quadrant II and $\\sin\\theta = s$. Express $\\cos\\theta$ in terms of $s$.',
      label: '$\\cos\\theta =$',
      variables: ['s'],
      domain: [-0.9, 0.9],
      answer: '-sqrt(1 - s^2)',
      answerTex: '-\\sqrt{1 - s^2}',
      hint: 'Solve $\\cos^2\\theta + s^2 = 1$ for $\\cos\\theta$, then pick the sign cosine has in quadrant II. Type `sqrt(...)` for a square root.',
      explanation: 'From $\\cos^2\\theta = 1 - \\sin^2\\theta = 1 - s^2$ we get $\\cos\\theta = \\pm\\sqrt{1 - s^2}$. In quadrant II the point is left of the $y$-axis, so $\\cos\\theta < 0$ and $\\cos\\theta = -\\sqrt{1 - s^2}$. The answer $\\sqrt{1 - s^2}$ (without the minus) is only right in quadrants I and IV.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'error',
      prompt: 'A student is told $\\cos\\theta = -\\frac13$ with $\\theta$ in quadrant III, and asked for $\\tan\\theta$. Tap the first line that is wrong.',
      lines: [
        '$\\sin^2\\theta = 1 - \\cos^2\\theta = 1 - \\frac19 = \\frac89$',
        '$\\sin\\theta = \\pm\\sqrt{\\frac89} = \\pm\\frac{2\\sqrt2}{3}$',
        'Take the positive root: $\\sin\\theta = \\frac{2\\sqrt2}{3}$',
        '$\\tan\\theta = \\dfrac{\\sin\\theta}{\\cos\\theta} = \\dfrac{2\\sqrt2/3}{-1/3} = -2\\sqrt2$',
      ],
      errorLines: [3],
      explanation: 'Line 3 chooses the sign without looking at the quadrant. In quadrant III the point is below the $x$-axis, so $\\sin\\theta = -\\frac{2\\sqrt2}{3}$. Then $\\tan\\theta = \\dfrac{-2\\sqrt2/3}{-1/3} = 2\\sqrt2$. Sanity check with ASTC: tangent is **positive** in quadrant III, so a negative answer should have raised a flag.',
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'mcq',
      prompt: 'In a 2D game, a laser fires from the origin at angle $\\theta$ (standard math axes). For which angle is computing the laser line as $y = (\\tan\\theta)\\,x$ a **bad** idea?',
      options: [
        { text: '$\\theta = 0$', why: '$\\tan 0 = 0$: a horizontal line $y = 0$. No problem.' },
        { text: '$\\theta = \\frac{\\pi}{4}$', why: '$\\tan\\frac{\\pi}{4} = 1$: the line $y = x$. No problem.' },
        { text: '$\\theta = \\frac{\\pi}{2}$', correct: true, why: 'The laser points straight up, so the line is vertical ($x = 0$). Vertical lines have no slope, and $\\tan\\frac{\\pi}{2}$ is undefined; in floating point it becomes a huge meaningless number.' },
        { text: '$\\theta = \\pi$', why: '$\\tan\\pi = 0$: the laser points left along $y = 0$. The line formula still works (although it no longer tells you the *direction*).' },
      ],
      explanation: 'Slope form $y = mx$ can never describe a vertical line, and $\\tan\\theta$ is undefined exactly where the line would be vertical: $\\theta = \\frac{\\pi}{2} + k\\pi$. The robust alternative is the direction vector $(\\cos\\theta, \\sin\\theta)$ and points $t(\\cos\\theta, \\sin\\theta)$ along it, which works for every angle and also keeps track of which way the laser is pointing.',
    },
  ],
  takeaways: [
    'From the unit-circle point $(x, y)$: $\\tan\\theta = \\frac{y}{x}$, $\\cot\\theta = \\frac{x}{y}$, $\\sec\\theta = \\frac{1}{x}$, $\\csc\\theta = \\frac{1}{y}$. From any point on the terminal side, use $r = \\sqrt{x^2 + y^2}$: $\\sin\\theta = \\frac{y}{r}$, $\\sec\\theta = \\frac{r}{x}$, etc.',
    '$\\tan\\theta$ is the slope of the terminal side. $\\tan$ and $\\sec$ are undefined where $\\cos\\theta = 0$ ($\\theta = \\frac{\\pi}{2} + k\\pi$); $\\cot$ and $\\csc$ where $\\sin\\theta = 0$ ($\\theta = k\\pi$).',
    '$|\\sec\\theta| \\ge 1$ and $|\\csc\\theta| \\ge 1$, while $\\tan\\theta$ and $\\cot\\theta$ take every real value.',
    'Pythagorean identities: $\\cos^2\\theta + \\sin^2\\theta = 1$, $1 + \\tan^2\\theta = \\sec^2\\theta$, $\\cot^2\\theta + 1 = \\csc^2\\theta$.',
    'Given one value and the quadrant, identities give the sizes of the others and the quadrant gives their signs. Write $\\pm$ before choosing.',
  ],
  reading: [
    {
      title: 'OpenStax Algebra and Trigonometry 2e — 7.4 The Other Trigonometric Functions',
      url: 'https://openstax.org/books/algebra-and-trigonometry-2e/pages/7-4-the-other-trigonometric-functions',
      source: 'openstax',
      note: 'Defines tangent, secant, cosecant and cotangent on the unit circle, with examples of finding all six from one point.',
    },
    {
      title: 'Wikipedia — Trigonometric functions',
      url: 'https://en.wikipedia.org/wiki/Trigonometric_functions',
      source: 'wikipedia',
      note: 'See the unit-circle section for the classic diagram showing tangent and secant as actual line segments.',
    },
    {
      title: 'Khan Academy — Trigonometry',
      url: 'https://www.khanacademy.org/math/trigonometry',
      source: 'khan',
      note: 'Practice evaluating reciprocal trig functions and using the Pythagorean identity.',
    },
  ],
};
