import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'alg-rational-functions',
  title: 'Rational Functions and Asymptotes',
  summary: 'Divide one polynomial by another and the graph grows walls, horizons and holes. Learn to predict every one of them from the formula.',
  minutes: 19,
  objectives: [
    'Find the domain of a rational function',
    'Locate vertical asymptotes and holes by factoring and canceling',
    'Find horizontal asymptotes by comparing degrees',
    'Find slant asymptotes with polynomial long division',
    'Sketch a rational function from its intercepts, asymptotes and sign pattern',
  ],
  steps: [
    {
      kind: 'concept',
      title: 'Rational functions and the reciprocal function',
      blocks: [
        {
          type: 'p',
          text: 'A [[rational-number]] is a ratio of integers. A [[rational-function]] is a ratio of polynomials — the function version of a [[rational-expression]], which you learned to simplify earlier.',
        },
        {
          type: 'definition',
          term: 'Rational function',
          text: 'A function of the form $f(x) = \\dfrac{p(x)}{q(x)}$, where $p$ and $q$ are polynomials and $q$ is not the zero polynomial. Its domain is all real numbers **except** the zeros of the denominator $q(x)$.',
        },
        {
          type: 'p',
          text: 'Unlike polynomials, rational functions have breaks in their graphs, because you cannot divide by zero. The simplest example, $f(x) = \\frac{1}{x}$, already shows the two big features of this lesson.',
        },
        {
          type: 'table',
          headers: ['$x$', '$0.1$', '$0.01$', '$-0.01$', '$-0.1$', '$10$', '$100$', '$-100$'],
          rows: [['$\\frac{1}{x}$', '$10$', '$100$', '$-100$', '$-10$', '$0.1$', '$0.01$', '$-0.01$']],
          caption: 'Near $x = 0$ the outputs explode in size (positive on the right, negative on the left). For huge $|x|$ the outputs shrink toward $0$.',
        },
        {
          type: 'list',
          items: [
            'Near $x = 0$, the graph shoots up or down without bound and hugs the line $x = 0$: a **vertical asymptote**.',
            'As $x \\to \\pm\\infty$, the graph flattens toward the line $y = 0$: a **horizontal asymptote**.',
          ],
        },
        {
          type: 'graph',
          x: [-6, 6],
          y: [-6, 6],
          functions: [{ expr: '1/(x-h) + k', label: '$y = \\frac{1}{x - h} + k$' }],
          vlines: [{ x: 'h', label: 'x = h' }],
          hlines: [{ y: 'k', label: 'y = k' }],
          sliders: [
            { name: 'h', min: -3, max: 3, step: 0.5, value: 0, label: '$h$ (horizontal shift)' },
            { name: 'k', min: -3, max: 3, step: 0.5, value: 0, label: '$k$ (vertical shift)' },
          ],
          caption: 'Shifting $\\frac1x$ drags its asymptotes along: the vertical asymptote is at $x = h$ and the horizontal one at $y = k$. The [[transformation|transformations]] you know apply to asymptotes too.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Rational functions in graphics',
          text: 'Perspective projection in every 3D game divides by depth: a point at $(x, z)$ lands on screen at $x_{\\text{screen}} = \\frac{d \\cdot x}{z}$. That is why far objects shrink toward a vanishing point (a horizontal asymptote) and why geometry at $z \\to 0$ blows up — engines clip it with a *near plane* to stay away from the vertical asymptote.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'Which real numbers are excluded from the domain of $f(x) = \\dfrac{x + 1}{x^2 - 9}$? Enter them separated by a comma.',
      hint: 'Set the denominator equal to zero and solve.',
      label: '$x \\neq$',
      answer: ['3', '-3'],
      explanation: 'The domain excludes zeros of the denominator: $x^2 - 9 = (x - 3)(x + 3) = 0$ gives $x = 3$ and $x = -3$. The numerator does not matter for the domain — $x = -1$ just makes $f(x) = 0$, which is perfectly allowed.',
    },
    {
      kind: 'concept',
      title: 'Vertical asymptotes and holes',
      blocks: [
        {
          type: 'definition',
          term: 'Vertical asymptote',
          text: 'The line $x = a$ is a [[vertical-asymptote]] of $f$ if $f(x) \\to \\infty$ or $f(x) \\to -\\infty$ as $x$ approaches $a$ from the left or from the right.',
        },
        {
          type: 'p',
          text: 'A zero of the denominator is a *candidate* for a vertical asymptote, but not every candidate becomes one. If the numerator is **also** zero there, the shared factor cancels and the graph has a [[hole]] instead: a single missing point.',
        },
        {
          type: 'steps',
          items: [
            { title: 'Factor', text: 'Factor numerator and denominator completely.' },
            { title: 'Cancel', text: 'Cancel common factors. Each canceled factor $(x - a)$ gives a **hole** at $x = a$.' },
            { title: 'Remaining zeros', text: 'Zeros of what remains in the denominator give **vertical asymptotes**.' },
            { title: 'Locate the hole', text: 'The hole\'s $y$-coordinate is the value of the *simplified* function at $x = a$.' },
          ],
        },
        {
          type: 'derivation',
          title: 'Analyse $f(x) = \\dfrac{x^2 - 1}{x^2 + x - 2}$',
          steps: [
            { tex: 'f(x) = \\frac{(x - 1)(x + 1)}{(x + 2)(x - 1)}', why: 'Factor: difference of squares on top; $-2 = 2 \\cdot (-1)$ and $2 + (-1) = 1$ on the bottom. Domain: $x \\neq -2, 1$.' },
            { tex: '= \\frac{x + 1}{x + 2}, \\quad x \\neq 1', why: 'Cancel $(x - 1)$. The simplified formula agrees with $f$ everywhere except $x = 1$, where $f$ is undefined — record that restriction.' },
            { tex: '\\text{hole at } x = 1: \\ \\frac{1 + 1}{1 + 2} = \\frac{2}{3}', why: 'The canceled factor gives a hole. Its height is the simplified function evaluated at $1$.' },
            { tex: '\\text{vertical asymptote: } x = -2', why: 'The remaining denominator $x + 2$ is zero at $-2$, where the numerator $x + 1 = -1 \\neq 0$. A nonzero number over a tiny number is huge.' },
          ],
          result: 'Hole at $\\left(1, \\frac23\\right)$, vertical asymptote $x = -2$.',
        },
        {
          type: 'graph',
          x: [-6, 4],
          y: [-5, 6],
          functions: [{ expr: '(x^2 - 1)/(x^2 + x - 2)', label: '$f(x) = \\frac{x^2 - 1}{x^2 + x - 2}$' }],
          vlines: [{ x: -2, label: 'x = −2' }],
          hlines: [{ y: 1, label: 'y = 1', color: 'gray' }],
          points: [{ x: 1, y: '2/3', label: '(1, 2/3) hole', open: true, color: 'red' }],
          caption: 'The vertical asymptote at $x = -2$ is a wall the graph never reaches. At $x = 1$ there is only a pinprick: the open circle. (The gray line $y = 1$ is a horizontal asymptote — next card.)',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why a canceled factor gives a hole, not an asymptote',
          text: 'Near $x = 1$, $f(x) = \\frac{x + 1}{x + 2}$ exactly, and that expression is close to $\\frac23$ — nothing blows up. The only problem at $x = 1$ itself is the original $\\frac00$, which removes one point. At $x = -2$, by contrast, the numerator stays near $-1$ while the denominator shrinks to $0$, so the quotient grows without bound. **Nonzero over zero** is an asymptote; **zero over zero** needs canceling first.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Which way does the graph go at the wall?',
          text: 'Test a value just to each side, or use multiplicity just as with polynomial zeros: if the factor $(x - a)$ appears in the denominator an **odd** number of times, the graph goes to opposite infinities on the two sides (like $\\frac1x$); if it appears an **even** number of times, both sides go the same way (like $\\frac{1}{x^2}$, which goes up on both sides of $0$).',
        },
      ],
    },
    {
      kind: 'mcq',
      prompt: 'Which describes the graph of $f(x) = \\dfrac{x - 3}{x^2 - 9}$?',
      options: [
        {
          text: 'Vertical asymptotes at $x = 3$ and $x = -3$',
          why: 'At $x = 3$ the numerator is also $0$, so the factor $(x - 3)$ cancels. That point is a hole, not an asymptote.',
        },
        {
          text: 'A hole at $x = 3$ and a vertical asymptote at $x = -3$',
          correct: true,
          why: '$f(x) = \\frac{x - 3}{(x - 3)(x + 3)} = \\frac{1}{x + 3}$ for $x \\neq 3$: the canceled factor gives the hole, the remaining one the asymptote.',
        },
        {
          text: 'A vertical asymptote at $x = 3$ and a hole at $x = -3$',
          why: 'This swaps them. The hole comes from the factor that cancels, $(x - 3)$.',
        },
        {
          text: 'No vertical asymptotes, because the fraction simplifies',
          why: 'Simplifying removes only the common factor. $(x + 3)$ remains in the denominator, giving an asymptote at $x = -3$.',
        },
      ],
      explanation: 'Factor first: $\\frac{x - 3}{(x - 3)(x + 3)}$. The common factor $(x - 3)$ cancels, leaving $\\frac{1}{x + 3}$ with the restriction $x \\neq 3$. So there is a hole at $\\left(3, \\frac16\\right)$ and a vertical asymptote at $x = -3$.',
    },
    {
      kind: 'numeric',
      prompt: 'The graph of $f(x) = \\dfrac{x^2 + x - 6}{x^2 - 4}$ has a hole. Find the $y$-coordinate of the hole.',
      hint: 'Factor both: $x^2 + x - 6 = (x + 3)(x - 2)$. Cancel, then evaluate the simplified function at the canceled zero.',
      label: '$y =$',
      answer: '5/4',
      answerTex: '\\frac{5}{4}',
      explanation: '$f(x) = \\frac{(x + 3)(x - 2)}{(x + 2)(x - 2)} = \\frac{x + 3}{x + 2}$ for $x \\neq 2$. The hole is at $x = 2$, with height $\\frac{2 + 3}{2 + 2} = \\frac54$. Plugging $2$ into the *original* formula gives $\\frac00$, which is exactly why you must use the simplified one. The remaining factor gives a vertical asymptote at $x = -2$.',
    },
    {
      kind: 'concept',
      title: 'Horizontal asymptotes: compare the degrees',
      blocks: [
        {
          type: 'p',
          text: 'A [[horizontal-asymptote]] $y = L$ describes [[end-behavior]]: $f(x) \\to L$ as $x \\to \\infty$ or $x \\to -\\infty$. Just as for polynomials, far from the origin only the **leading terms** matter, so the answer depends on comparing degrees. Let $n = \\deg p$ (top) and $m = \\deg q$ (bottom).',
        },
        {
          type: 'table',
          headers: ['Case', 'Horizontal asymptote', 'Example'],
          rows: [
            ['$n < m$ (bottom-heavy)', '$y = 0$', '$\\frac{3x + 1}{x^2 - 4} \\to 0$'],
            ['$n = m$ (balanced)', '$y = \\frac{\\text{leading coeff. of } p}{\\text{leading coeff. of } q}$', '$\\frac{3x^2 - x + 4}{2x^2 + 5} \\to \\frac{3}{2}$'],
            ['$n > m$ (top-heavy)', 'none (if $n = m + 1$: a slant asymptote)', '$\\frac{x^2 + x - 1}{x - 1}$ grows like $x$'],
          ],
        },
        {
          type: 'derivation',
          title: 'Why $\\frac{3x^2 - x + 4}{2x^2 + 5} \\to \\frac32$',
          steps: [
            { tex: '\\frac{3x^2 - x + 4}{2x^2 + 5} = \\frac{\\frac{3x^2 - x + 4}{x^2}}{\\frac{2x^2 + 5}{x^2}}', why: 'Divide top and bottom by $x^2$, the highest power in the denominator. This does not change the value (for $x \\neq 0$).' },
            { tex: '= \\frac{3 - \\frac{1}{x} + \\frac{4}{x^2}}{2 + \\frac{5}{x^2}}', why: 'Divide each term separately.' },
            { tex: '\\to \\frac{3 - 0 + 0}{2 + 0} = \\frac{3}{2} \\quad \\text{as } x \\to \\pm\\infty', why: 'Every term with $x$ in a denominator shrinks to $0$.' },
          ],
          result: 'The horizontal asymptote is $y = \\frac32$: the ratio of the leading coefficients.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the three cases',
          text: 'For large $|x|$, $f(x) \\approx \\frac{a_n x^n}{b_m x^m} = \\frac{a_n}{b_m}x^{n - m}$. If $n < m$, a negative power of $x$ remains, which goes to $0$. If $n = m$, the powers cancel and the constant $\\frac{a_n}{b_m}$ remains. If $n > m$, a positive power remains and $|f(x)|$ grows without bound — no horizontal asymptote.',
        },
        {
          type: 'graph',
          x: [-8, 8],
          y: [-6, 6],
          functions: [{ expr: '(k x^2 + 1)/(x^2 - 4)', label: '$y = \\frac{k x^2 + 1}{x^2 - 4}$' }],
          vlines: [{ x: -2, label: 'x = −2' }, { x: 2, label: 'x = 2' }],
          hlines: [{ y: 'k', label: 'y = k' }],
          sliders: [{ name: 'k', min: -3, max: 3, step: 0.5, value: 2, label: 'leading coefficient $k$' }],
          readouts: [{ label: '$f(100) =$', expr: '(k*100^2 + 1)/(100^2 - 4)', digits: 4 }],
          caption: 'Equal degrees, so the horizontal asymptote is $y = \\frac{k}{1} = k$. The readout shows that already at $x = 100$ the function is within a hair of $k$. Set $k = 0$ to make the top degree smaller: the asymptote drops to $y = 0$.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Graphs can cross horizontal asymptotes',
          text: 'A horizontal asymptote only describes the far left and far right. In the middle, the graph may cross it. For $f(x) = \\frac{2x^2 + x}{x^2 + 1}$ the asymptote is $y = 2$, yet $f(x) = 2$ when $2x^2 + x = 2x^2 + 2$, i.e. at $x = 2$. Vertical asymptotes are different: the graph can never touch one, since $f$ is undefined there.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'Find the horizontal asymptote of $f(x) = \\dfrac{6x^3 - 2x}{4 - 3x^3}$.',
      hint: 'Both degrees are $3$. Watch out: the leading term of the denominator is $-3x^3$, even though it is written last.',
      label: '$y =$',
      answer: '-2',
      explanation: 'Equal degrees, so the asymptote is the ratio of leading coefficients: $\\frac{6}{-3} = -2$. The common mistake is using $4$ (the first number written in the denominator) instead of $-3$ (the coefficient of the highest power), which would give $\\frac64 = \\frac32$.',
    },
    {
      kind: 'truefalse',
      prompt: 'The graph of a rational function can never cross its horizontal asymptote.',
      answer: false,
      explanation: 'A horizontal asymptote is about end behavior only. $f(x) = \\frac{2x^2 + x}{x^2 + 1}$ has horizontal asymptote $y = 2$ but passes through $(2, 2)$; even $\\frac{x}{x^2 + 1}$ crosses its asymptote $y = 0$ at the origin. It is *vertical* asymptotes that a graph can never touch.',
    },
    {
      kind: 'concept',
      title: 'Slant asymptotes',
      blocks: [
        {
          type: 'p',
          text: 'When the numerator\'s degree is exactly **one more** than the denominator\'s, the graph has no horizontal asymptote but approaches a tilted line — a [[slant-asymptote]] (also called an oblique asymptote). Polynomial long division finds it.',
        },
        {
          type: 'derivation',
          title: 'Slant asymptote of $f(x) = \\dfrac{x^2 + x - 1}{x - 1}$',
          steps: [
            { tex: 'x^2 + x - 1 = (x - 1)(x + 2) + 1', why: 'Long (or synthetic, with $c = 1$) division: $1, 1, -1 \\to 1, 2, 1$. Quotient $x + 2$, remainder $1$. Check: $(x - 1)(x + 2) = x^2 + x - 2$, plus $1$. ✓' },
            { tex: 'f(x) = x + 2 + \\frac{1}{x - 1}', why: 'Divide both sides by $x - 1$: the division algorithm in the form $\\frac{p}{q} = \\text{quotient} + \\frac{\\text{remainder}}{q}$.' },
            { tex: '\\frac{1}{x - 1} \\to 0 \\text{ as } x \\to \\pm\\infty', why: 'The remainder has lower degree than the divisor, so this fraction fades away.' },
            { tex: 'f(x) \\approx x + 2 \\text{ for large } |x|', why: 'What is left is the quotient.' },
          ],
          result: 'Slant asymptote $y = x + 2$; vertical asymptote $x = 1$.',
        },
        {
          type: 'graph',
          x: [-6, 8],
          y: [-6, 10],
          functions: [
            { expr: '(x^2 + x - 1)/(x - 1)', label: '$f(x) = \\frac{x^2 + x - 1}{x - 1}$' },
            { expr: 'x + 2', label: '$y = x + 2$', color: 'gray', dashed: true },
          ],
          vlines: [{ x: 1, label: 'x = 1' }],
          caption: 'Far from $x = 1$ the curve hugs the dashed line $y = x + 2$. Above it on the right (where $\\frac{1}{x - 1} > 0$), below it on the left.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the quotient is the asymptote',
          text: 'The division algorithm splits $f$ into a polynomial part $q(x)$ and a leftover $\\frac{r(x)}{d(x)}$ with $\\deg r < \\deg d$ — a bottom-heavy fraction, which tends to $0$. So the gap between $f(x)$ and $q(x)$ vanishes at the ends. When $\\deg p = \\deg d + 1$ the quotient is linear: a slant line. (If the top degree is even larger, the quotient is a curve like a parabola, and $f$ follows that curve instead.)',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'The remainder is not part of the asymptote',
          text: 'The asymptote is $y = q(x)$ only. Writing $y = x + 2 + 1$ (adding the remainder) or $y = x + 3$ is a common slip. The remainder goes over the divisor and disappears in the limit.',
        },
      ],
    },
    {
      kind: 'expr',
      prompt: 'Find the slant asymptote of $f(x) = \\dfrac{2x^2 - 3x + 1}{x + 1}$.',
      label: '$y =$',
      answer: '2x - 5',
      hint: 'Divide by $x + 1$ (synthetic division with $c = -1$) and keep only the quotient.',
      explanation: 'Synthetic division with $c = -1$ on $2, -3, 1$: bring down $2$; $-2$, $-3 - 2 = -5$; $5$, $1 + 5 = 6$. So $f(x) = 2x - 5 + \\frac{6}{x + 1}$. The fraction tends to $0$, leaving the slant asymptote $y = 2x - 5$. The remainder $6$ does not belong in the answer.',
    },
    {
      kind: 'concept',
      title: 'Putting it together: sketching a rational function',
      blocks: [
        {
          type: 'steps',
          items: [
            { title: 'Factor and cancel', text: 'Record the domain, then cancel common factors to find holes.' },
            { title: 'Vertical asymptotes', text: 'Zeros of the simplified denominator.' },
            { title: 'Horizontal or slant asymptote', text: 'Compare degrees; divide if top degree is one more.' },
            { title: 'Intercepts', text: '$x$-intercepts: zeros of the simplified **numerator**. $y$-intercept: $f(0)$, if $0$ is in the domain.' },
            { title: 'Signs', text: 'The sign can only change at $x$-intercepts and vertical asymptotes. Test one point in each interval.' },
            { title: 'Sketch', text: 'Draw asymptotes as dashed lines, plot the points, and follow the signs, approaching the asymptotes at the edges.' },
          ],
        },
        {
          type: 'derivation',
          title: 'Sketch $f(x) = \\dfrac{2x^2 - 2}{x^2 - 4}$',
          steps: [
            { tex: 'f(x) = \\frac{2(x - 1)(x + 1)}{(x - 2)(x + 2)}', why: 'Factor out $2$, then use difference of squares top and bottom. No common factors, so no holes.' },
            { tex: '\\text{VA: } x = 2, \\ x = -2', why: 'Zeros of the denominator (the numerator is $6 \\neq 0$ at both).' },
            { tex: '\\text{HA: } y = \\tfrac{2}{1} = 2', why: 'Both degrees are $2$, so take the ratio of leading coefficients.' },
            { tex: 'x\\text{-intercepts: } x = \\pm 1; \\quad f(0) = \\frac{-2}{-4} = \\frac12', why: 'Numerator zero at $\\pm1$; the $y$-intercept is $\\left(0, \\frac12\\right)$.' },
            { tex: 'f(-3) = \\tfrac{16}{5} > 0,\\ f(-1.5) = -\\tfrac{10}{7} < 0,\\ f(1.5) = -\\tfrac{10}{7} < 0,\\ f(3) = \\tfrac{16}{5} > 0', why: 'Test one value in each interval cut by $-2, -1, 1, 2$; with $f(0) = \\frac12 > 0$ the signs are $+, -, +, -, +$. (For example $f(3) = \\frac{18 - 2}{9 - 4} = \\frac{16}{5}$.)' },
          ],
          result: 'Outer branches lie above $y = 2$ and approach it at the ends; the middle branch rises from $-\\infty$ at $x = -2$, crosses at $-1$, peaks at $\\left(0, \\frac12\\right)$, and falls back through $1$ to $-\\infty$ at $x = 2$.',
        },
        {
          type: 'graph',
          x: [-7, 7],
          y: [-6, 8],
          functions: [{ expr: '(2x^2 - 2)/(x^2 - 4)', label: '$f(x) = \\frac{2x^2 - 2}{x^2 - 4}$' }],
          vlines: [{ x: -2, label: 'x = −2' }, { x: 2, label: 'x = 2' }],
          hlines: [{ y: 2, label: 'y = 2' }],
          points: [
            { x: -1, y: 0, label: '(−1, 0)' },
            { x: 1, y: 0, label: '(1, 0)' },
            { x: 0, y: 0.5, label: '(0, ½)', color: 'red' },
          ],
          caption: 'Every feature was predicted before plotting: two walls, a horizon at $y = 2$, two intercepts and the sign pattern $+, -, +, -, +$.',
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'Graded sketches usually need: asymptotes drawn dashed and labeled with equations, intercepts labeled as points, holes as open circles, and branches that clearly approach (not cross) the vertical asymptotes. Listing the domain in [[interval-notation]] is a frequent extra request.',
        },
      ],
    },
    {
      kind: 'error',
      prompt: 'A student analyses $f(x) = \\dfrac{x^2 - x - 6}{x^2 - 9}$. Tap the first line that is wrong.',
      lines: [
        'Factor: $f(x) = \\dfrac{(x - 3)(x + 2)}{(x - 3)(x + 3)}$.',
        'The denominator is zero at $x = 3$ and $x = -3$.',
        'So the vertical asymptotes are $x = 3$ and $x = -3$.',
        'The degrees are equal, so the horizontal asymptote is $y = 1$.',
      ],
      errorLines: [3],
      explanation: 'The factor $(x - 3)$ appears in both numerator and denominator, so it cancels: $f(x) = \\frac{x + 2}{x + 3}$ for $x \\neq 3$. That makes $x = 3$ a **hole**, at $\\left(3, \\frac{5}{6}\\right)$, not an asymptote. The only vertical asymptote is $x = -3$. Line 2 is true (those are the domain restrictions), and line 4 is correct.',
    },
    {
      kind: 'mcq',
      prompt: 'Which function has this graph?',
      graph: {
        type: 'graph',
        x: [-6, 8],
        y: [-6, 7],
        functions: [{ expr: '(x+1)/(x-2)' }],
        vlines: [{ x: 2, label: 'x = 2' }],
        hlines: [{ y: 1, label: 'y = 1' }],
        points: [
          { x: -1, y: 0, label: '(−1, 0)' },
          { x: 0, y: -0.5, label: '(0, −½)' },
        ],
      },
      options: [
        {
          text: '$f(x) = \\dfrac{x - 1}{x + 2}$',
          why: 'This has its vertical asymptote at $x = -2$ and $x$-intercept at $1$ — the signs are reversed.',
        },
        {
          text: '$f(x) = \\dfrac{2(x + 1)}{x - 2}$',
          why: 'Same intercepts and vertical asymptote, but the horizontal asymptote would be $y = 2$ and $f(0) = -1$.',
        },
        {
          text: '$f(x) = \\dfrac{x + 1}{x^2 - 4}$',
          why: 'This would have two vertical asymptotes ($x = \\pm 2$) and horizontal asymptote $y = 0$.',
        },
        {
          text: '$f(x) = \\dfrac{x + 1}{x - 2}$',
          correct: true,
          why: 'Vertical asymptote $x = 2$, horizontal asymptote $y = \\frac11 = 1$, $x$-intercept $-1$, and $f(0) = \\frac{1}{-2} = -\\frac12$.',
        },
      ],
      explanation: 'Read the features: one vertical asymptote at $x = 2$ means a single factor $(x - 2)$ downstairs; an $x$-intercept at $-1$ means $(x + 1)$ upstairs; the horizontal asymptote $y = 1$ means equal degrees with leading coefficients in ratio $1$. The $y$-intercept $-\\frac12$ confirms $\\frac{x + 1}{x - 2}$.',
    },
    {
      kind: 'fill',
      prompt: 'Complete the rules for asymptotes of $f(x) = \\frac{p(x)}{q(x)}$ in lowest terms.',
      template: 'If $\\deg p < \\deg q$, the horizontal asymptote is ___. If $\\deg p = \\deg q + 1$, the graph has a ___ asymptote, found by ___.',
      blanks: [{ answers: ['$y = 0$'] }, { answers: ['slant'] }, { answers: ['polynomial long division'] }],
      wordBank: ['$y = 0$', '$y = 1$', 'slant', 'vertical', 'polynomial long division', 'setting the numerator to zero'],
      explanation: 'Bottom-heavy fractions shrink to $0$ at the ends, so $y = 0$. When the top degree is exactly one more, dividing gives $f(x) = (\\text{linear quotient}) + (\\text{fraction} \\to 0)$, and the linear quotient is the slant asymptote. Setting the numerator to zero finds $x$-intercepts, not asymptotes.',
    },
  ],
  takeaways: [
    'A rational function $\\frac{p(x)}{q(x)}$ is undefined where $q(x) = 0$; always factor and record the domain first.',
    'After canceling common factors: canceled factors give holes (open circles), remaining denominator zeros give vertical asymptotes.',
    'Horizontal asymptotes compare degrees: bottom-heavy gives $y = 0$, balanced gives the ratio of leading coefficients, top-heavy gives none.',
    'If the top degree is one more than the bottom, long division gives $f = q + \\frac{r}{d}$ and the slant asymptote is $y = q(x)$.',
    'Graphs may cross horizontal or slant asymptotes but never vertical ones; signs change only at $x$-intercepts and vertical asymptotes.',
  ],
  reading: [
    {
      title: 'OpenStax College Algebra 2e — 5.6 Rational Functions',
      url: 'https://openstax.org/books/college-algebra-2e/pages/5-6-rational-functions',
      source: 'openstax',
      note: 'Asymptotes, holes and full graphing examples, with plenty of practice.',
    },
    {
      title: "Paul's Online Notes — Rational Functions",
      url: 'https://tutorial.math.lamar.edu/Classes/Alg/RationalFunctions.aspx',
      source: 'paul',
      note: 'A step-by-step graphing process with carefully sketched examples.',
    },
    {
      title: 'Desmos Graphing Calculator',
      url: 'https://www.desmos.com/calculator',
      source: 'desmos',
      note: 'Type in any rational function and check your predicted asymptotes and holes.',
    },
  ],
};
