import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'alg-polynomial-functions',
  title: 'Polynomial Functions and End Behavior',
  summary: 'Read a polynomial like a map: the leading term tells you where the graph goes, the factors tell you where it crosses or bounces.',
  minutes: 17,
  objectives: [
    'Identify polynomial functions and find their degree and leading coefficient',
    'Predict the end behavior of a polynomial from its leading term alone',
    'Find the zeros and $y$-intercept of a polynomial in factored form',
    'Use multiplicity to decide whether the graph crosses, bounces or flattens at a zero',
    'Sketch a polynomial from its leading term, zeros and $y$-intercept',
  ],
  steps: [
    {
      kind: 'concept',
      title: 'What counts as a polynomial function?',
      blocks: [
        {
          type: 'p',
          text: 'You already know two polynomial functions very well: lines $f(x) = mx + b$ and parabolas $f(x) = ax^2 + bx + c$. This unit is about what happens when you keep going: $x^3$, $x^4$, $x^5$ and beyond. The good news is that the same few ideas — the highest power, the factors, and the zeros — let you sketch all of them.',
        },
        {
          type: 'definition',
          term: 'Polynomial function',
          text: 'A [[polynomial-function]] of degree $n$ is a function of the form\n\n$$f(x) = a_n x^n + a_{n-1}x^{n-1} + \\dots + a_1 x + a_0$$\n\nwhere $n$ is a whole number ($0, 1, 2, \\dots$), the coefficients $a_i$ are real numbers, and $a_n \\neq 0$. The term $a_n x^n$ is the **leading term**, $n$ is the [[degree]], and $a_n$ is the [[leading-coefficient]].',
        },
        {
          type: 'p',
          text: 'The key restriction is on the exponents: they must be **whole numbers**. No variable in a denominator, no variable under a root, no variable in an exponent. Those restrictions are exactly what make polynomials so well behaved.',
        },
        {
          type: 'table',
          headers: ['Function', 'Polynomial?', 'Why'],
          rows: [
            ['$f(x) = 4x^5 - x^2 + 7$', 'yes', 'degree $5$, leading coefficient $4$'],
            ['$g(x) = (x - 1)^2 (x + 3)$', 'yes', 'multiplies out to a cubic; degree $2 + 1 = 3$'],
            ['$h(x) = 3 - 2x^4$', 'yes', 'degree $4$, leading coefficient $-2$ (the leading term need not be written first)'],
            ['$p(x) = x^3 + \\sqrt{x}$', 'no', '$\\sqrt{x} = x^{1/2}$ has a fractional exponent'],
            ['$q(x) = \\dfrac{2}{x} + 1$', 'no', '$\\frac{2}{x} = 2x^{-1}$ has a negative exponent'],
            ['$r(x) = 2^x$', 'no', 'the variable is in the exponent (that is an exponential function)'],
          ],
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why whole-number exponents matter',
          text: 'With whole-number powers, $f(x)$ is built only from multiplication and addition, which work for **every** real $x$. So the domain is all reals, and the graph is one unbroken, smooth curve — no holes, jumps, corners or vertical asymptotes. Allow $x^{-1}$ and you get a break at $x = 0$; allow $x^{1/2}$ and you lose all negative inputs.',
        },
        {
          type: 'graph',
          x: [-3, 3],
          y: [-4, 4],
          functions: [
            { expr: 'x', label: '$y = x$' },
            { expr: 'x^2', label: '$y = x^2$' },
            { expr: 'x^3', label: '$y = x^3$' },
            { expr: 'x^4', label: '$y = x^4$' },
          ],
          caption: 'The basic power functions. Even powers are U-shaped (both ends up); odd powers run from bottom-left to top-right. Higher powers are flatter near $0$ and steeper away from it.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Polynomials in games',
          text: 'Animation easing curves are polynomials. The classic `smoothstep(t) = 3t^2 - 2t^3` starts and ends with zero slope on $[0, 1]$, so motion eases in and out. Bézier curves — the paths behind fonts, vector art and camera rails — are polynomials in a parameter $t$. GPUs love polynomials because they are just multiplies and adds.',
        },
      ],
    },
    {
      kind: 'mcq',
      prompt: 'Which of these is a polynomial function?',
      options: [
        {
          text: '$f(x) = 3x^4 - x^{1/2}$',
          why: '$x^{1/2} = \\sqrt{x}$ has a fractional exponent, so this is not a polynomial.',
        },
        {
          text: '$f(x) = \\dfrac{5}{x^2} + x$',
          why: '$\\frac{5}{x^2} = 5x^{-2}$ has a negative exponent; the function is undefined at $x = 0$.',
        },
        {
          text: '$f(x) = (x - 1)^2(x + 3)$',
          correct: true,
          why: 'A product of polynomials is a polynomial. Expanding gives $x^3 + x^2 - 5x + 3$, degree $3$.',
        },
        {
          text: '$f(x) = 2^x + 1$',
          why: 'Here $x$ is the exponent, not the base — that is an exponential function.',
        },
      ],
      explanation: 'A polynomial only uses whole-number powers of $x$ combined with multiplication and addition. Factored form is fine: $(x - 1)^2(x + 3)$ multiplies out to a sum of whole-number powers. Fractional exponents (roots), negative exponents ($x$ in a denominator) and variable exponents all break the definition.',
    },
    {
      kind: 'concept',
      title: 'End behavior: the leading term wins',
      blocks: [
        {
          type: 'p',
          text: 'The [[end-behavior]] of a function describes what $f(x)$ does as $x \\to \\infty$ (far right) and $x \\to -\\infty$ (far left). For polynomials there is a beautiful shortcut: **far from the origin, only the leading term matters.**',
        },
        {
          type: 'table',
          headers: ['$x$', '$f(x) = 2x^3 - 30x^2 - 50x + 7$', 'leading term $2x^3$', 'ratio $\\frac{f(x)}{2x^3}$'],
          rows: [
            ['$10$', '$-1493$', '$2000$', '$-0.7465$'],
            ['$100$', '$1\\,695\\,007$', '$2\\,000\\,000$', '$0.8475$'],
            ['$1000$', '$1\\,969\\,950\\,007$', '$2\\,000\\,000\\,000$', '$0.9850$'],
            ['$-1000$', '$-2\\,029\\,949\\,993$', '$-2\\,000\\,000\\,000$', '$1.0150$'],
          ],
          caption: 'At $x = 10$ the other terms still matter (they even flip the sign). By $x = \\pm 1000$ the polynomial is within about $1.5\\%$ of its leading term.',
        },
        {
          type: 'derivation',
          title: 'Why the leading term dominates',
          steps: [
            { tex: 'f(x) = 2x^3 - 30x^2 - 50x + 7', why: 'Start with the polynomial from the table.' },
            { tex: '= 2x^3\\left(1 - \\frac{15}{x} - \\frac{25}{x^2} + \\frac{7}{2x^3}\\right)', why: 'Factor out the leading term $2x^3$ (valid for $x \\neq 0$). Check: $2x^3 \\cdot \\frac{15}{x} = 30x^2$, $2x^3 \\cdot \\frac{25}{x^2} = 50x$, $2x^3 \\cdot \\frac{7}{2x^3} = 7$.' },
            { tex: '\\frac{15}{x},\\ \\frac{25}{x^2},\\ \\frac{7}{2x^3} \\to 0 \\text{ as } x \\to \\pm\\infty', why: 'A fixed number divided by a huge number is tiny, so each correction term shrinks toward $0$.' },
            { tex: 'f(x) \\approx 2x^3 \\cdot 1 \\text{ for large } |x|', why: 'The bracket approaches $1$, so $f$ behaves like its leading term.' },
          ],
          result: 'As $x \\to \\infty$, $f(x) \\to \\infty$; as $x \\to -\\infty$, $f(x) \\to -\\infty$ — exactly like $y = 2x^3$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why lower terms lose, no matter their coefficients',
          text: 'Every lower term, divided by the leading term, has at least one $x$ left in its denominator. A coefficient of $1000$ only delays the takeover: $\\frac{1000x^2}{2x^3} = \\frac{500}{x}$, which is less than $1$ once $x > 500$. Powers beat coefficients in the long run — the same reason an $O(n^3)$ algorithm eventually loses to an $O(n^2)$ one, however big the constant factor.',
        },
      ],
    },
    {
      kind: 'concept',
      title: 'The four end-behavior patterns',
      blocks: [
        {
          type: 'p',
          text: 'Since only $a_n x^n$ matters at the ends, there are just four possibilities, decided by two questions: is the degree **even or odd**, and is the leading coefficient **positive or negative**?',
        },
        {
          type: 'table',
          headers: ['degree', '$a_n > 0$', '$a_n < 0$'],
          rows: [
            ['**even** $n$', 'up on both ends: $\\nwarrow \\ \\nearrow$', 'down on both ends: $\\swarrow \\ \\searrow$'],
            ['**odd** $n$', 'down left, up right: $\\swarrow \\ \\nearrow$', 'up left, down right: $\\nwarrow \\ \\searrow$'],
          ],
          caption: 'Even degree: both ends agree (like a parabola). Odd degree: the ends disagree (like a line).',
        },
        {
          type: 'p',
          text: 'Why does parity matter? A negative number raised to an even power is positive, so for even $n$ the far left looks like the far right. An odd power keeps the sign, so the far left is the mirror image, going the opposite way. A negative leading coefficient then flips everything upside down (a reflection in the $x$-axis).',
        },
        {
          type: 'graph',
          x: [-3, 3],
          y: [-8, 8],
          functions: [{ expr: 'a*x^n', label: '$y = a x^n$' }],
          sliders: [
            { name: 'n', min: 1, max: 6, step: 1, value: 3, label: 'degree $n$' },
            { name: 'a', min: -2, max: 2, step: 0.25, value: 1, label: 'leading coefficient $a$' },
          ],
          readouts: [{ label: '$a \\cdot (-3)^n$ (far left height) $=$', expr: 'a*(-3)^n', digits: 2 }],
          caption: 'Step $n$ between odd and even and watch the left end flip; drag $a$ below $0$ and watch the whole picture flip vertically.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Finding the leading term without expanding',
          text: 'For factored polynomials, multiply the leading terms of each factor. For $f(x) = -2(x - 1)^3(x + 4)^2$ the leading term is $-2 \\cdot x^3 \\cdot x^2 = -2x^5$: odd degree, negative coefficient, so up on the left and down on the right. Careful with factors like $(3 - x)$: their leading term is $-x$, not $x$.',
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'Exams often write end behavior with arrows or limits: "as $x \\to -\\infty$, $f(x) \\to \\infty$; as $x \\to \\infty$, $f(x) \\to -\\infty$." Practise saying both halves; giving only one end is a common lost point.',
        },
      ],
    },
    {
      kind: 'mcq',
      prompt: 'Describe the end behavior of $f(x) = -3x^5 + 2x^2 + 7$.',
      options: [
        {
          text: 'As $x \\to -\\infty$, $f(x) \\to \\infty$; as $x \\to \\infty$, $f(x) \\to -\\infty$',
          correct: true,
          why: 'Odd degree with negative leading coefficient: up on the left, down on the right.',
        },
        {
          text: 'As $x \\to -\\infty$, $f(x) \\to -\\infty$; as $x \\to \\infty$, $f(x) \\to \\infty$',
          why: 'That is the pattern for a *positive* leading coefficient; the $-3$ flips it.',
        },
        {
          text: 'As $x \\to \\pm\\infty$, $f(x) \\to -\\infty$',
          why: 'Both ends agreeing happens only for even degree. Degree $5$ is odd.',
        },
        {
          text: 'As $x \\to \\pm\\infty$, $f(x) \\to 7$',
          why: 'The constant term decides the $y$-intercept, not the end behavior.',
        },
      ],
      explanation: 'Only the leading term $-3x^5$ matters at the ends. For large positive $x$, $x^5$ is huge and positive, so $-3x^5$ is hugely negative. For large negative $x$, $x^5$ is hugely negative, so $-3x^5$ is hugely positive. Up on the left, down on the right.',
    },
    {
      kind: 'truefalse',
      prompt: 'Because $1000$ is so much larger than $2$, the graph of $f(x) = 2x^3 + 1000x^2$ has the end behavior of $y = x^2$: up on both ends.',
      answer: false,
      explanation: 'Coefficients cannot beat powers in the long run. $f(x) = 2x^3\\left(1 + \\frac{500}{x}\\right)$, and $\\frac{500}{x} \\to 0$. Once $|x| > 500$ the cubic term is bigger, and for very negative $x$ (say $x = -1000$: $f = -2\\times10^9 + 10^9 < 0$) the graph heads down. End behavior is down on the left, up on the right — a cubic, not a parabola.',
    },
    {
      kind: 'concept',
      title: 'Zeros and intercepts from factored form',
      blocks: [
        {
          type: 'p',
          text: 'A [[zero-of-a-function|zero]] of $f$ is an input $r$ with $f(r) = 0$. On the graph, real zeros are the [[x-intercept|$x$-intercepts]]. Factored form hands them to you through the [[zero-product-property]]: a product is $0$ exactly when one of its factors is $0$.',
        },
        {
          type: 'derivation',
          title: 'Zeros, intercept and signs of $f(x) = (x + 2)(x - 1)(x - 3)$',
          steps: [
            { tex: '(x + 2)(x - 1)(x - 3) = 0', why: 'Zeros are where the output is $0$.' },
            { tex: 'x = -2, \\quad x = 1, \\quad x = 3', why: 'Zero product property: set each factor to $0$.' },
            { tex: 'f(0) = (2)(-1)(-3) = 6', why: 'The [[y-intercept]] is $f(0)$: plug $0$ into every factor and multiply.' },
            { tex: 'f(-3) = (-1)(-4)(-6) = -24 < 0', why: 'Test one point in each interval between zeros. Left of $-2$: three negative factors, product negative.' },
            { tex: 'f(2) = (4)(1)(-1) = -4 < 0', why: 'Between $1$ and $3$: one negative factor, product negative. (Between $-2$ and $1$, $f(0) = 6 > 0$.)' },
            { tex: 'f(4) = (6)(3)(1) = 18 > 0', why: 'Right of $3$: all factors positive.' },
          ],
          result: 'Signs: $-$ on $(-\\infty, -2)$, $+$ on $(-2, 1)$, $-$ on $(1, 3)$, $+$ on $(3, \\infty)$. The graph alternates sides of the axis at each zero.',
        },
        {
          type: 'graph',
          x: [-3.5, 4.5],
          y: [-12, 12],
          functions: [{ expr: '(x+2)(x-1)(x-3)', label: '$f(x) = (x+2)(x-1)(x-3)$' }],
          points: [
            { x: -2, y: 0, label: '(−2, 0)' },
            { x: 1, y: 0, label: '(1, 0)' },
            { x: 3, y: 0, label: '(3, 0)' },
            { x: 0, y: 6, label: '(0, 6)', color: 'red' },
          ],
          caption: 'Degree $3$ with leading term $x^3$: down on the left, up on the right, crossing the axis at each of the three zeros.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the graph can only change sign at a zero',
          text: 'Polynomial graphs have no breaks. To get from below the axis to above it, an unbroken curve must pass through height $0$ (this is the [[intermediate-value-theorem]], which you will prove in calculus). So between consecutive zeros the sign is constant, and testing **one** point per interval tells you the sign of the whole interval.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Never divide away a factor of $x$',
          text: 'To solve $x^3 - 4x = 0$, do not divide both sides by $x$ — that loses the zero $x = 0$. Factor instead: $x(x^2 - 4) = x(x - 2)(x + 2) = 0$, giving all three zeros $0, 2, -2$.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'Find all real zeros of $f(x) = x^3 - x^2 - 6x$.',
      hint: 'Every term has a factor of $x$. Factor it out first, then factor the quadratic that remains.',
      label: '$x =$',
      answer: ['0', '3', '-2'],
      explanation: 'Factor out the [[greatest-common-factor]]: $f(x) = x(x^2 - x - 6) = x(x - 3)(x + 2)$. Setting each factor to zero gives $x = 0$, $x = 3$ and $x = -2$. A classic slip is dividing both sides by $x$ — that silently throws away the zero $x = 0$.',
    },
    {
      kind: 'numeric',
      prompt: 'Find the $y$-intercept of $f(x) = (x - 1)^2(x + 3)(2x - 5)$.',
      hint: 'The $y$-intercept is $f(0)$. Evaluate each factor at $x = 0$.',
      label: '$f(0) =$',
      answer: '-15',
      explanation: '$f(0) = (0 - 1)^2(0 + 3)(2 \\cdot 0 - 5) = (1)(3)(-5) = -15$. No expanding needed: in factored form the $y$-intercept is the product of the factors\' constant terms (with powers applied). Note $(-1)^2 = 1$, not $-1$.',
    },
    {
      kind: 'concept',
      title: 'Multiplicity: cross, bounce or flatten',
      blocks: [
        {
          type: 'p',
          text: 'Factors can repeat. In $f(x) = (x - 1)^2(x + 2)$ the factor $(x - 1)$ appears twice. The number of times a factor appears is the [[multiplicity]] of its zero, and it controls how the graph behaves at that zero.',
        },
        {
          type: 'definition',
          term: 'Multiplicity',
          text: 'If $(x - r)^k$ is a factor of $f(x)$ but $(x - r)^{k+1}$ is not, then $r$ is a zero of **multiplicity $k$**.',
        },
        {
          type: 'table',
          headers: ['Multiplicity', 'Behavior at the zero', 'Looks like'],
          rows: [
            ['$1$', 'crosses the axis, roughly straight', 'a line through the point'],
            ['$2$ (or any even)', 'touches and turns back (**bounces**); sign does not change', 'a parabola $y = (x-r)^2$'],
            ['$3$ (or odd $\\ge 3$)', 'crosses but **flattens** into an S-shape', 'a cubic $y = (x-r)^3$'],
          ],
        },
        {
          type: 'graph',
          x: [-3, 3],
          y: [-6, 6],
          functions: [{ expr: '(x-1)^m*(x+2)', label: '$y = (x-1)^m (x+2)$' }],
          points: [{ x: 1, y: 0, label: 'x = 1' }, { x: -2, y: 0, label: 'x = −2' }],
          sliders: [{ name: 'm', min: 1, max: 4, step: 1, value: 2, label: 'multiplicity $m$ of $x = 1$' }],
          caption: 'Odd $m$: the graph crosses at $x = 1$. Even $m$: it bounces. Bigger $m$ makes the graph flatter near the zero. The simple zero at $x = -2$ always crosses.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why even multiplicity means bounce',
          text: 'Near $x = r$, every other factor is roughly a constant $C \\neq 0$, so $f(x) \\approx C(x - r)^k$. If $k$ is even, $(x - r)^k \\ge 0$ on **both** sides of $r$, so $f$ has the same sign on both sides — it touches $0$ and turns back. If $k$ is odd, $(x - r)^k$ is negative on the left and positive on the right, so the sign flips — the graph crosses. Higher $k$ means $(x - r)^k$ is tinier near $r$, hence the flattening.',
        },
        {
          type: 'p',
          text: 'Multiplicities also count toward the degree: the degree of a factored polynomial is the **sum** of the multiplicities. $(x - 1)^2(x + 2)$ has degree $2 + 1 = 3$.',
        },
      ],
    },
    {
      kind: 'fill',
      prompt: 'Complete the rule for multiplicity.',
      template: 'At a zero of even multiplicity the graph ___ the $x$-axis; at a zero of odd multiplicity it ___ the $x$-axis.',
      blanks: [{ answers: ['touches and turns back at'] }, { answers: ['crosses'] }],
      wordBank: ['touches and turns back at', 'crosses', 'never meets', 'becomes vertical at'],
      explanation: 'Near a zero $r$ of multiplicity $k$, $f(x) \\approx C(x - r)^k$. An even power never changes sign, so the graph stays on one side and bounces off the axis. An odd power changes sign, so the graph passes through to the other side (flattening when $k \\ge 3$).',
    },
    {
      kind: 'mcq',
      prompt: 'Which function has this graph?',
      graph: {
        type: 'graph',
        x: [-3, 5],
        y: [-12, 6],
        functions: [{ expr: '(x+1)^2*(x-3)' }],
        points: [{ x: 0, y: -3, label: '(0, −3)' }],
      },
      options: [
        {
          text: '$f(x) = (x - 1)^2(x + 3)$',
          why: 'This has zeros at $x = 1$ and $x = -3$. The graph touches at $x = -1$ and crosses at $x = 3$ — the signs inside the factors are reversed.',
        },
        {
          text: '$f(x) = (x + 1)(x - 3)^2$',
          why: 'This would bounce at $x = 3$ and cross at $x = -1$. The graph does the opposite.',
        },
        {
          text: '$f(x) = -(x + 1)^2(x - 3)$',
          why: 'The negative leading coefficient would make the graph rise on the left and fall on the right, and give $y$-intercept $+3$.',
        },
        {
          text: '$f(x) = (x + 1)^2(x - 3)$',
          correct: true,
          why: 'Bounce at $x = -1$ (multiplicity $2$), cross at $x = 3$ (multiplicity $1$), positive cubic end behavior, and $f(0) = (1)^2(-3) = -3$.',
        },
      ],
      explanation: 'Read the graph like a checklist. Zeros at $-1$ and $3$ give factors $(x + 1)$ and $(x - 3)$. The bounce at $-1$ means even multiplicity; the crossing at $3$ means odd. Down-left, up-right means odd degree with positive leading coefficient. Finally the $y$-intercept confirms it: $(0 + 1)^2(0 - 3) = -3$.',
    },
    {
      kind: 'concept',
      title: 'Turning points and putting it all together',
      blocks: [
        {
          type: 'p',
          text: 'A [[polynomial-turning-point|turning point]] is where the graph switches from rising to falling or vice versa — a local peak or valley. Degree caps how wiggly a polynomial can be:',
        },
        {
          type: 'theorem',
          name: 'Degree limits zeros and turns',
          text: 'A polynomial of degree $n$ has **at most $n$ real zeros** and **at most $n - 1$ turning points**.',
        },
        {
          type: 'p',
          text: 'These are upper limits, not exact counts: $x^3$ has degree $3$ but only one zero and no turning points. Calculus will explain the turning-point bound (the slope of a degree-$n$ polynomial is a degree-$(n-1)$ polynomial, with at most $n - 1$ zeros). The zero bound comes from the next lessons: each zero $r$ contributes a factor $(x - r)$, and you cannot fit more than $n$ such factors into degree $n$.',
        },
        {
          type: 'steps',
          items: [
            { title: 'End behavior', text: 'Find the leading term (multiply leading terms of the factors) and draw the two ends.' },
            { title: 'Zeros', text: 'Factor; mark each real zero on the $x$-axis with its multiplicity.' },
            { title: 'y-intercept', text: 'Compute $f(0)$ and plot it.' },
            { title: 'Behavior at zeros', text: 'Cross at odd multiplicity, bounce at even.' },
            { title: 'Connect smoothly', text: 'Join everything with one unbroken curve. Check: no more than $n - 1$ turns.' },
          ],
        },
        {
          type: 'derivation',
          title: 'Sketch $f(x) = -(x + 1)^2(x - 2)$',
          steps: [
            { tex: '\\text{leading term: } -(x)^2(x) = -x^3', why: 'Multiply the leading terms of the factors, keeping the $-1$ out front.' },
            { tex: '\\text{odd degree},\\ a_n < 0 \\implies \\nwarrow \\text{ left},\\ \\searrow \\text{ right}', why: 'Odd degree: the ends disagree. Negative coefficient: up on the left, down on the right.' },
            { tex: 'x = -1 \\ (\\text{mult. } 2), \\quad x = 2 \\ (\\text{mult. } 1)', why: 'Zero product property; the squared factor gives multiplicity $2$.' },
            { tex: 'f(0) = -(1)^2(0 - 2) = 2', why: 'The $y$-intercept is $(0, 2)$.' },
            { tex: '\\text{bounce at } -1, \\quad \\text{cross at } 2', why: 'Even multiplicity bounces, odd crosses.' },
          ],
          result: 'Coming down from the upper left, the graph touches the axis at $x = -1$, rises through $(0, 2)$, turns, and crosses down through $x = 2$, heading to $-\\infty$. That is $2$ turning points — the maximum allowed for degree $3$.',
        },
        {
          type: 'graph',
          x: [-3, 3.5],
          y: [-6, 6],
          functions: [{ expr: '-(x+1)^2*(x-2)', label: '$f(x) = -(x+1)^2(x-2)$' }],
          points: [
            { x: -1, y: 0, label: '(−1, 0) bounce' },
            { x: 2, y: 0, label: '(2, 0) cross' },
            { x: 0, y: 2, label: '(0, 2)', color: 'red' },
          ],
          caption: 'The sketch checks out: the ends match $-x^3$, the bounce and the crossing are where multiplicity says.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Turning points are not always at zeros',
          text: 'The bounce at $x = -1$ is a turning point that sits on the axis, but the other turn (a peak between $0$ and $2$) is not at a zero. Algebra gives you zeros easily; locating peaks exactly needs calculus. In a sketch, just show the shape.',
        },
      ],
    },
    {
      kind: 'order',
      prompt: 'Put the steps for sketching a factored polynomial in a sensible order.',
      lines: [
        'Multiply the leading terms of the factors to get the leading term',
        'Use degree and sign of the leading coefficient to draw both ends',
        'Mark each real zero and note its multiplicity',
        'Compute $f(0)$ and plot the $y$-intercept',
        'Join the pieces with one smooth curve, crossing at odd multiplicities and bouncing at even ones',
      ],
      distractors: ['Draw a vertical asymptote at each zero'],
      explanation: 'Start from the big picture (the ends), then pin down the specific points (zeros, intercept), then connect. The distractor confuses polynomials with rational functions: polynomials never have asymptotes — their graphs are unbroken.',
    },
    {
      kind: 'error',
      prompt: 'A student analyses $f(x) = (1 - x)^3(x + 2)^2$. Tap the first line that is wrong.',
      lines: [
        'The degree is $3 + 2 = 5$, which is odd.',
        'The leading term is $x^3 \\cdot x^2 = x^5$, so the leading coefficient is $1$.',
        'Odd degree, positive leading coefficient: down on the left, up on the right.',
        'The zero $x = 1$ has multiplicity $3$ (crosses, flattening); $x = -2$ has multiplicity $2$ (bounces).',
      ],
      errorLines: [2],
      explanation: 'The leading term of $(1 - x)$ is $-x$, not $x$. So the leading term of $f$ is $(-x)^3 \\cdot x^2 = -x^5$ and the leading coefficient is $-1$. Line 3 then inherits the error: the correct end behavior is **up on the left, down on the right**. (Expanding confirms it: $f(x) = -x^5 - x^4 + 5x^3 + \\dots$.) The zero analysis in line 4 is correct.',
    },
    {
      kind: 'expr',
      prompt: 'Write the polynomial with leading coefficient $1$ and the lowest possible degree that has a zero of multiplicity $2$ at $x = -1$ and a simple zero at $x = 3$. You may leave it factored.',
      label: '$f(x) =$',
      answer: '(x+1)^2*(x-3)',
      answerTex: '(x + 1)^2(x - 3) = x^3 - x^2 - 5x - 3',
      hint: 'A zero at $x = r$ comes from a factor $(x - r)$. Multiplicity $2$ means the factor is squared.',
      explanation: 'The zero $-1$ gives the factor $(x - (-1)) = (x + 1)$, squared for multiplicity $2$. The zero $3$ gives $(x - 3)$. So $f(x) = (x + 1)^2(x - 3)$, degree $3$, which expands to $x^3 - x^2 - 5x - 3$. A common slip is writing $(x - 1)^2$: the sign inside the factor is the opposite of the zero.',
    },
    {
      kind: 'numeric',
      prompt: 'A polynomial has degree $6$. What is the greatest number of turning points its graph can have?',
      label: 'turning points:',
      answer: '5',
      explanation: 'A degree-$n$ polynomial has at most $n - 1$ turning points, so at most $6 - 1 = 5$. It may have fewer: $x^6$ has just one (its bottom at the origin). Since $n - 1$ is odd here and both ends point the same way, the actual number is always odd: $1$, $3$ or $5$.',
    },
  ],
  takeaways: [
    'A polynomial function uses only whole-number powers of $x$; its graph is one smooth, unbroken curve with domain all reals.',
    'End behavior is decided by the leading term $a_n x^n$: even degree means both ends agree, odd degree means they disagree, and $a_n < 0$ flips the picture.',
    'In factored form, zeros come from the zero product property and the $y$-intercept is $f(0)$.',
    'A zero of odd multiplicity is a crossing (flattened if $\\ge 3$); a zero of even multiplicity is a bounce.',
    'Degree $n$ allows at most $n$ real zeros and at most $n - 1$ turning points.',
  ],
  reading: [
    {
      title: 'OpenStax College Algebra 2e — 5.2 Power Functions and Polynomial Functions',
      url: 'https://openstax.org/books/college-algebra-2e/pages/5-2-power-functions-and-polynomial-functions',
      source: 'openstax',
      note: 'Covers degree, leading coefficient and end behavior with many graphed examples.',
    },
    {
      title: 'OpenStax College Algebra 2e — 5.3 Graphs of Polynomial Functions',
      url: 'https://openstax.org/books/college-algebra-2e/pages/5-3-graphs-of-polynomial-functions',
      source: 'openstax',
      note: 'Multiplicity, turning points and the full sketching process.',
    },
    {
      title: "Paul's Online Notes — Graphing Polynomials",
      url: 'https://tutorial.math.lamar.edu/Classes/Alg/GraphingPolynomials.aspx',
      source: 'paul',
      note: 'A concise college-style treatment with fully worked sketches.',
    },
  ],
};
