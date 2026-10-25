import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'calc1-derivative-tests',
  title: 'Derivatives and the Shape of a Graph',
  summary: 'What $f\'$ and $f\'\'$ reveal about a graph: where it rises and falls, where it bends, and how to classify every peak and valley.',
  minutes: 19,
  objectives: [
    'Use the sign of $f\'$ to find the intervals where $f$ is increasing or decreasing',
    'Classify critical numbers as local maxima, minima or neither with the First Derivative Test',
    'Use the sign of $f\'\'$ to determine concavity and locate inflection points',
    'Apply the Second Derivative Test, and recognise when it is inconclusive',
    'Connect $f$, $f\'$ and $f\'\'$ to motion and to easing curves used in game animation',
  ],
  steps: [
    {
      kind: 'concept',
      title: 'The sign of $f\'$: rising and falling',
      blocks: [
        {
          type: 'p',
          text: 'The derivative is the slope of the tangent line. Positive slope means the graph is going uphill as you move right; negative slope means downhill. The Mean Value Theorem from the previous lesson lets us turn that picture into a guarantee about whole intervals, not just single points.',
        },
        {
          type: 'theorem',
          name: 'Increasing/Decreasing Test',
          text: '(a) If $f\'(x) > 0$ on an interval, then $f$ is **increasing** on that interval.\n\n(b) If $f\'(x) < 0$ on an interval, then $f$ is **decreasing** on that interval.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the test works: the MVT',
          text: 'Take any $x_1 < x_2$ in the interval. By the MVT, $f(x_2) - f(x_1) = f\'(c)(x_2 - x_1)$ for some $c$ between them. If $f\' > 0$ everywhere on the interval, then $f\'(c) > 0$, and $x_2 - x_1 > 0$, so the product is positive: $f(x_2) > f(x_1)$. That is exactly the definition of an [[increasing-function]]. Without the MVT, knowing slopes *at points* would not tell us anything about *pairs* of points.',
        },
        {
          type: 'p',
          text: 'To use the test, find where $f\'$ could change sign — at its zeros and where it is undefined — and then check the sign of $f\'$ on each interval in between. A **sign chart** organises this.',
        },
        {
          type: 'derivation',
          title: 'Where is $f(x) = 3x^4 - 4x^3 - 12x^2 + 5$ increasing or decreasing?',
          steps: [
            { tex: "f'(x) = 12x^3 - 12x^2 - 24x", why: 'Power rule on each term.' },
            { tex: '= 12x(x^2 - x - 2) = 12x(x - 2)(x + 1)', why: 'Factor out $12x$, then factor the quadratic: $-2$ and $1$ multiply to $-2$ and add to $-1$.' },
            { tex: 'x = -1, \\; 0, \\; 2', why: 'The zeros of $f\'$ split the line into four intervals. $f\'$ is a polynomial, so it can only change sign at these points.' },
            { tex: "f'(-2) = -96 < 0, \\quad f'(-\\tfrac12) = 7.5 > 0", why: 'Test one point in each interval. (Or count negative factors: for $x < -1$ all three factors are negative, giving a negative product.)' },
            { tex: "f'(1) = -24 < 0, \\quad f'(3) = 144 > 0", why: 'Same for the last two intervals.' },
          ],
          result: '$f$ is decreasing on $(-\\infty, -1)$ and $(0, 2)$, and increasing on $(-1, 0)$ and $(2, \\infty)$.',
        },
        {
          type: 'table',
          headers: ['Interval', '$12x$', '$x - 2$', '$x + 1$', '$f\'(x)$', '$f$'],
          rows: [
            ['$x < -1$', '$-$', '$-$', '$-$', '$-$', 'decreasing ↘'],
            ['$-1 < x < 0$', '$-$', '$-$', '$+$', '$+$', 'increasing ↗'],
            ['$0 < x < 2$', '$+$', '$-$', '$+$', '$-$', 'decreasing ↘'],
            ['$x > 2$', '$+$', '$+$', '$+$', '$+$', 'increasing ↗'],
          ],
          caption: 'A sign chart for $f\'(x) = 12x(x - 2)(x + 1)$. The sign of a product is decided by how many factors are negative.',
        },
        {
          type: 'graph',
          x: [-2, 3],
          y: [-32, 40],
          yStep: 10,
          functions: [{ expr: '3x^4 - 4x^3 - 12x^2 + 5', label: '$f(x) = 3x^4 - 4x^3 - 12x^2 + 5$' }],
          points: [
            { x: -1, y: 0, label: '(−1, 0)' },
            { x: 0, y: 5, label: '(0, 5)' },
            { x: 2, y: -27, label: '(2, −27)' },
          ],
          caption: 'The graph falls, rises, falls and rises again, switching exactly at $x = -1, 0, 2$ — just as the sign chart predicted.',
        },
      ],
    },
    {
      kind: 'mcq',
      prompt: 'On which interval is $f(x) = x^3 - 12x + 1$ decreasing?',
      hint: 'Factor $f\'(x) = 3x^2 - 12$ and check its sign between and outside its zeros.',
      options: [
        {
          text: '$(-2, 2)$',
          correct: true,
          why: '$f\'(x) = 3(x - 2)(x + 2)$ has one negative factor between $-2$ and $2$, so $f\' < 0$ there.',
        },
        {
          text: '$(-\\infty, -2)$ and $(2, \\infty)$',
          why: 'On these intervals both factors have the same sign, so $f\'(x) > 0$: that is where $f$ is *increasing*.',
        },
        {
          text: '$(-\\infty, 0)$',
          why: 'This comes from looking at $f\'\'(x) = 6x$ instead of $f\'$. The second derivative tells concavity, not increase/decrease.',
        },
        {
          text: '$(-12, 12)$',
          why: 'The critical numbers come from solving $f\'(x) = 0$, not from the coefficient $12$ in $f$.',
        },
      ],
      explanation: '$f\'(x) = 3x^2 - 12 = 3(x^2 - 4) = 3(x - 2)(x + 2)$, zero at $x = \\pm 2$. Testing $x = 0$ gives $f\'(0) = -12 < 0$, so $f$ decreases on $(-2, 2)$; testing $x = \\pm 3$ gives $15 > 0$, so it increases outside.',
    },
    {
      kind: 'concept',
      title: 'The First Derivative Test',
      blocks: [
        {
          type: 'p',
          text: 'In the previous lessons, critical numbers were only *suspects* for local extrema. The sign chart now delivers the verdict: if the graph goes up and then down, the critical point is a peak; down then up, a valley; up then up (or down then down), neither.',
        },
        {
          type: 'theorem',
          name: 'First Derivative Test',
          text: 'Suppose $c$ is a critical number of a continuous function $f$.\n\n(a) If $f\'$ changes from **positive to negative** at $c$, then $f$ has a **local maximum** at $c$.\n\n(b) If $f\'$ changes from **negative to positive** at $c$, then $f$ has a **local minimum** at $c$.\n\n(c) If $f\'$ is positive on both sides of $c$, or negative on both sides, then $f$ has **no local extremum** at $c$.',
        },
        {
          type: 'derivation',
          title: 'Classify the critical numbers of $f(x) = 3x^4 - 4x^3 - 12x^2 + 5$',
          steps: [
            { tex: 'x = -1: \\; f\' \\; - \\to + \\implies \\text{local min}', why: 'From the sign chart: decreasing before, increasing after.' },
            { tex: 'f(-1) = 3 + 4 - 12 + 5 = 0', why: 'Evaluate $f$ to report the value. $(-1)^4 = 1$ and $(-1)^3 = -1$, so $-4(-1)^3 = +4$.' },
            { tex: 'x = 0: \\; f\' \\; + \\to - \\implies \\text{local max}, \\; f(0) = 5', why: 'Increasing before, decreasing after.' },
            { tex: 'x = 2: \\; f\' \\; - \\to + \\implies \\text{local min}, \\; f(2) = 48 - 32 - 48 + 5 = -27', why: 'Decreasing before, increasing after.' },
          ],
          result: 'Local minima $f(-1) = 0$ and $f(2) = -27$; local maximum $f(0) = 5$.',
        },
        {
          type: 'graph',
          x: [-2, 3],
          y: [-32, 40],
          yStep: 10,
          functions: [{ expr: '3x^4 - 4x^3 - 12x^2 + 5', label: '$f(x)$' }],
          tangents: [{ expr: '3x^4 - 4x^3 - 12x^2 + 5', at: 'a' }],
          sliders: [{ name: 'a', min: -1.8, max: 2.8, step: 0.02, value: -1.5, label: '$a$' }],
          readouts: [{ label: '$f\'(a) = 12a(a-2)(a+1) =$', expr: '12a(a - 2)(a + 1)', digits: 2 }],
          caption: 'Slide the tangent across each critical number and watch the sign of $f\'(a)$ flip. The direction of the flip ($+ \\to -$ or $- \\to +$) is the whole test.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'No sign change, no extremum',
          text: '$f(x) = x^3$ has $f\'(x) = 3x^2$, which is $0$ at $x = 0$ but positive on both sides. Case (c): the graph flattens for an instant and keeps climbing. Always look at the sign on **both** sides; a critical number alone proves nothing.',
        },
        {
          type: 'callout',
          variant: 'tip',
          text: 'The test also works where $f\'$ does not exist, as long as $f$ is continuous there. For $f(x) = |x|$, $f\'$ is $-1$ left of $0$ and $+1$ right of $0$: negative to positive, so a local minimum at the corner.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'Use the First Derivative Test to find the **local maximum value** of $f(x) = x^3 - 12x + 1$.',
      label: 'local max value $=$',
      answer: '17',
      hint: 'You found that $f\'$ is positive for $x < -2$ and negative on $(-2, 2)$. Which critical number is the peak? Evaluate $f$ there.',
      explanation: '$f\'(x) = 3(x - 2)(x + 2)$ changes from $+$ to $-$ at $x = -2$, so that is the local maximum: $f(-2) = -8 + 24 + 1 = 17$. At $x = 2$ the sign goes $-$ to $+$, giving the local minimum $f(2) = 8 - 24 + 1 = -15$. Remember the question asks for the *value* $f(-2)$, not the location $x = -2$.',
    },
    {
      kind: 'concept',
      title: 'Concavity: which way the graph bends',
      blocks: [
        {
          type: 'p',
          text: 'Knowing where a graph rises and falls is not the whole story. Both $y = x^2$ and $y = \\sqrt{x}$ increase for $x > 0$, but $x^2$ curves upward like a bowl while $\\sqrt{x}$ curves downward like an arch. This bending is called [[concavity]].',
        },
        {
          type: 'definition',
          term: 'Concave up / concave down',
          text: 'If the graph of $f$ lies **above** all of its tangent lines on an interval $I$, then $f$ is **concave up** on $I$. If it lies **below** all of its tangent lines on $I$, it is **concave down** on $I$.',
        },
        {
          type: 'p',
          text: 'Concave up means the slope $f\'$ is *increasing* — tangent lines rotate counterclockwise as you move right. Concave down means $f\'$ is decreasing. Applying the Increasing/Decreasing Test to $f\'$ (whose derivative is $f\'\'$) gives a practical test:',
        },
        {
          type: 'theorem',
          name: 'Concavity Test',
          text: '(a) If $f\'\'(x) > 0$ for all $x$ in $I$, then $f$ is **concave up** on $I$.\n\n(b) If $f\'\'(x) < 0$ for all $x$ in $I$, then $f$ is **concave down** on $I$.',
        },
        {
          type: 'graph',
          x: [-2.5, 2.5],
          y: [-3, 3],
          functions: [{ expr: 'x^3 - 3x', label: '$f(x) = x^3 - 3x$' }],
          tangents: [{ expr: 'x^3 - 3x', at: 'a' }],
          sliders: [{ name: 'a', min: -2, max: 2, step: 0.05, value: -1.5, label: '$a$' }],
          readouts: [
            { label: 'slope $f\'(a) = 3a^2 - 3 =$', expr: '3a^2 - 3', digits: 2 },
            { label: 'bend $f\'\'(a) = 6a =$', expr: '6a', digits: 2 },
          ],
          caption: 'For $a < 0$, $f\'\'(a) < 0$: the curve sits below the tangent (concave down). For $a > 0$, it sits above (concave up). Watch the slope readout decrease, then increase.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why $f\'\'$ controls the bend',
          text: '$f\'\'$ is the rate of change of the slope. If $f\'\' > 0$, the slope keeps increasing, so just to the right of any point the curve climbs faster than its tangent line (which has a fixed slope), and just to the left it was climbing slower — either way the curve ends up above the tangent. The same reasoning with $f\'\' < 0$ puts the curve below.',
        },
        {
          type: 'callout',
          variant: 'analogy',
          title: 'Concavity is acceleration',
          text: 'If $s(t)$ is a position, $s\'\'(t)$ is [[acceleration]]. Concave up = speeding up in the positive direction (gas pedal); concave down = the velocity is decreasing (brake, or gravity on a jump). A jump arc in a platformer is concave down from takeoff to landing because gravity gives a constant negative $y\'\'$.',
        },
        {
          type: 'callout',
          variant: 'warning',
          text: 'Concavity and increase are independent. A function can be increasing and concave down ($\\sqrt{x}$), decreasing and concave up ($\\frac{1}{x}$ for $x > 0$), or any other combination. Don\'t read "concave up" as "going up".',
        },
      ],
    },
    {
      kind: 'mcq',
      prompt: 'A character\'s height in a platformer is $y(t)$. Over some time interval the graph of $y(t)$ is **increasing and concave down**. What is happening?',
      options: [
        {
          text: 'The character is rising, but the upward speed is decreasing',
          correct: true,
          why: 'Increasing means $y\' > 0$ (moving up); concave down means $y\'\' < 0$, so the velocity $y\'$ is shrinking. That is the first half of a jump under gravity.',
        },
        {
          text: 'The character is falling faster and faster',
          why: 'Falling would mean $y$ is decreasing ($y\' < 0$). The graph here is increasing.',
        },
        {
          text: 'The character is rising faster and faster',
          why: 'Rising faster means $y\'$ is increasing, which is concave **up**.',
        },
        {
          text: 'The character has reached the peak of the jump',
          why: 'At the peak $y\' = 0$; that is a single instant, not an interval on which $y$ is increasing.',
        },
      ],
      explanation: 'Read each derivative separately: the sign of $y\'$ says up or down, the sign of $y\'\'$ says whether $y\'$ is growing or shrinking. Increasing + concave down = moving up while slowing down, exactly what gravity does after takeoff.',
    },
    {
      kind: 'concept',
      title: 'Inflection points',
      blocks: [
        {
          type: 'p',
          text: 'Where the bend switches direction, something special happens: the curve crosses from one side of its tangent line to the other. The slope there is a local max or min of $f\'$ — the steepest (or least steep) point nearby.',
        },
        {
          type: 'definition',
          term: 'Inflection point',
          text: 'A point $P = (c, f(c))$ on the curve $y = f(x)$ is an [[inflection-point]] if $f$ is continuous at $c$ and the curve changes from concave up to concave down, or from concave down to concave up, at $P$.',
        },
        {
          type: 'derivation',
          title: 'Concavity and inflection points of $f(x) = x^4 - 4x^3$',
          steps: [
            { tex: "f'(x) = 4x^3 - 12x^2", why: 'Power rule.' },
            { tex: "f''(x) = 12x^2 - 24x = 12x(x - 2)", why: 'Differentiate again and factor out $12x$.' },
            { tex: "f''(x) = 0 \\implies x = 0, \\; x = 2", why: 'Candidates for a change in concavity. $f\'\'$ is a polynomial, so it cannot change sign anywhere else.' },
            { tex: "f''(-1) = 36 > 0, \\; f''(1) = -12 < 0, \\; f''(3) = 36 > 0", why: 'Test one point in each of $(-\\infty, 0)$, $(0, 2)$, $(2, \\infty)$.' },
            { tex: '\\text{up} \\to \\text{down at } 0, \\quad \\text{down} \\to \\text{up at } 2', why: 'The concavity changes at both candidates, so both are inflection points.' },
            { tex: 'f(0) = 0, \\quad f(2) = 16 - 32 = -16', why: 'An inflection point is a *point*, so report both coordinates.' },
          ],
          result: 'Concave up on $(-\\infty, 0)$ and $(2, \\infty)$, concave down on $(0, 2)$; inflection points $(0, 0)$ and $(2, -16)$.',
        },
        {
          type: 'graph',
          x: [-1.5, 4.2],
          y: [-30, 12],
          yStep: 10,
          functions: [{ expr: 'x^4 - 4x^3', label: '$y = x^4 - 4x^3$' }],
          points: [
            { x: 0, y: 0, label: 'inflection (0, 0)', color: 'purple' },
            { x: 2, y: -16, label: 'inflection (2, −16)', color: 'purple' },
            { x: 3, y: -27, label: 'local min (3, −27)', color: 'red' },
          ],
          caption: 'At $(0, 0)$ the tangent is horizontal *and* the concavity flips, so the curve flattens without turning around. At $(2, -16)$ the curve is falling most steeply.',
        },
        {
          type: 'compare',
          left: {
            title: '$f\'\'(c) = 0$ but no inflection',
            tone: 'bad',
            tex: ['f(x) = x^4', "f''(x) = 12x^2", "f''(0) = 0"],
            text: '$12x^2 \\ge 0$ on both sides of $0$: concave up throughout. A zero of $f\'\'$ is only a candidate.',
          },
          right: {
            title: 'Inflection where $f\'\'$ does not exist',
            tone: 'good',
            tex: ['f(x) = \\sqrt[3]{x}', "f''(x) = -\\tfrac{2}{9}x^{-5/3}", "f''(0) \\text{ undefined}"],
            text: '$f\'\' > 0$ for $x < 0$ and $f\'\' < 0$ for $x > 0$, and $f$ is continuous at $0$: an inflection point at $(0, 0)$.',
          },
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'Find the $x$-coordinate of the inflection point of $f(x) = x^3 - 6x^2 + 5$.',
      label: '$x =$',
      answer: '2',
      hint: 'Compute $f\'\'(x)$, set it to $0$, and confirm the sign changes.',
      explanation: '$f\'(x) = 3x^2 - 12x$ and $f\'\'(x) = 6x - 12$, which is zero at $x = 2$. Since $f\'\'$ is negative for $x < 2$ and positive for $x > 2$, the concavity really does change there. The inflection point is $(2, f(2)) = (2, 8 - 24 + 5) = (2, -11)$. Every cubic has exactly one inflection point; when it has two turning points, the inflection point lies halfway between them (here the turning points are at $x = 0$ and $x = 4$).',
    },
    {
      kind: 'truefalse',
      prompt: 'If $f\'\'(c) = 0$, then $(c, f(c))$ is an inflection point of $f$.',
      answer: false,
      explanation: 'An inflection point requires the concavity to **change**, not just $f\'\'$ to vanish. For $f(x) = x^4$, $f\'\'(0) = 0$ but $f\'\'(x) = 12x^2 > 0$ on both sides of $0$, so the graph is concave up throughout and $(0, 0)$ is a minimum, not an inflection point. Zeros of $f\'\'$ (and points where $f\'\'$ does not exist) are only candidates.',
    },
    {
      kind: 'concept',
      title: 'The Second Derivative Test',
      blocks: [
        {
          type: 'p',
          text: 'At a critical number where $f\'(c) = 0$, the tangent is horizontal. If the graph is concave up there, it bends upward away from that flat tangent — a valley. Concave down — a peak. That gives a quick alternative to the sign chart.',
        },
        {
          type: 'theorem',
          name: 'Second Derivative Test',
          text: 'Suppose $f\'\'$ is continuous near $c$ and $f\'(c) = 0$.\n\n(a) If $f\'\'(c) > 0$, then $f$ has a **local minimum** at $c$.\n\n(b) If $f\'\'(c) < 0$, then $f$ has a **local maximum** at $c$.\n\n(c) If $f\'\'(c) = 0$, the test is **inconclusive**: there may be a max, a min, or neither.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the test works',
          text: 'If $f\'\'(c) > 0$ and $f\'\'$ is continuous, then $f\'\' > 0$ on a small interval around $c$, so $f\'$ is increasing there. An increasing function that equals $0$ at $c$ must be negative just before $c$ and positive just after. That is the First Derivative Test\'s "$- \\to +$" pattern: a local minimum. The case $f\'\'(c) < 0$ is the mirror image.',
        },
        {
          type: 'derivation',
          title: 'Classify the critical numbers of $f(x) = x^4 - 4x^3$',
          steps: [
            { tex: "f'(x) = 4x^3 - 12x^2 = 4x^2(x - 3)", why: 'Factor out $4x^2$.' },
            { tex: 'x = 0, \\quad x = 3', why: 'The critical numbers ($f\'$ exists everywhere).' },
            { tex: "f''(x) = 12x^2 - 24x", why: 'Computed on the previous card.' },
            { tex: "f''(3) = 108 - 72 = 36 > 0 \\implies \\text{local min } f(3) = -27", why: 'Case (a). The value is $81 - 108 = -27$.' },
            { tex: "f''(0) = 0 \\implies \\text{inconclusive}", why: 'Case (c): the Second Derivative Test gives no information at $x = 0$.' },
            { tex: "f'(x) = 4x^2(x - 3) < 0 \\text{ on both sides of } 0", why: 'Fall back on the First Derivative Test: $4x^2 > 0$ and $x - 3 < 0$ near $0$, so $f\'$ does not change sign.' },
          ],
          result: 'Local minimum $-27$ at $x = 3$; no extremum at $x = 0$ (it is the inflection point with a horizontal tangent we saw earlier).',
        },
        {
          type: 'table',
          headers: ['Feature', 'First Derivative Test', 'Second Derivative Test'],
          rows: [
            ['Needs', 'Sign of $f\'$ on both sides of $c$', 'One value $f\'\'(c)$'],
            ['Works at corners/cusps', 'Yes (if $f$ is continuous)', 'No — requires $f\'(c) = 0$'],
            ['Can fail to decide', 'Never', 'When $f\'\'(c) = 0$'],
            ['Best when', '$f\'$ factors nicely', '$f\'\'$ is easy and nonzero at $c$'],
          ],
          caption: 'Choosing a test. The first derivative test is more reliable; the second is often faster.',
        },
        {
          type: 'callout',
          variant: 'exam',
          text: '"Inconclusive" does not mean "no extremum". When $f\'\'(c) = 0$, the only correct move is to switch to the First Derivative Test. $x^4$, $-x^4$ and $x^3$ all have $f\'(0) = f\'\'(0) = 0$, and they have a min, a max and neither, respectively.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'Use the Second Derivative Test to find the **local minimum value** of $f(x) = 2x^3 + 3x^2 - 12x$.',
      label: 'local min value $=$',
      answer: '-7',
      hint: 'Solve $f\'(x) = 6x^2 + 6x - 12 = 0$, then check the sign of $f\'\'(x) = 12x + 6$ at each solution.',
      explanation: '$f\'(x) = 6(x^2 + x - 2) = 6(x + 2)(x - 1)$, so the critical numbers are $x = -2$ and $x = 1$. With $f\'\'(x) = 12x + 6$: $f\'\'(1) = 18 > 0$ (local min) and $f\'\'(-2) = -18 < 0$ (local max). The local minimum value is $f(1) = 2 + 3 - 12 = -7$; the local maximum value is $f(-2) = -16 + 12 + 24 = 20$.',
    },
    {
      kind: 'error',
      prompt: 'A student analyses $f(x) = x^4$ at its critical number. Tap the first line that is wrong.',
      lines: [
        '$f\'(x) = 4x^3 = 0$ gives the critical number $x = 0$.',
        '$f\'\'(x) = 12x^2$, so $f\'\'(0) = 0$.',
        'Since $f\'\'(0) = 0$, $f$ has no local extremum at $x = 0$.',
        'Therefore $(0, 0)$ is an inflection point of $f$.',
      ],
      errorLines: [3],
      explanation: 'Line 3 misreads case (c) of the Second Derivative Test: $f\'\'(c) = 0$ means the test is **inconclusive**, not that there is no extremum. Using the First Derivative Test, $f\'(x) = 4x^3$ is negative for $x < 0$ and positive for $x > 0$, so $x^4$ has a local (in fact absolute) **minimum** $0$ at $x = 0$. Line 4 is also false — $12x^2 \\ge 0$ on both sides, so the concavity never changes — but the first error is line 3.',
    },
    {
      kind: 'concept',
      title: 'Putting it together: easing curves',
      blocks: [
        {
          type: 'p',
          text: 'Here is the full dictionary between the derivatives and the shape of the graph. Everything in the next lesson on curve sketching is built from this table.',
        },
        {
          type: 'table',
          headers: ['Condition', 'Meaning for the graph of $f$', 'Motion analogy'],
          rows: [
            ['$f\' > 0$', 'increasing', 'moving forward'],
            ['$f\' < 0$', 'decreasing', 'moving backward'],
            ['$f\'$ changes sign at $c$', 'local max or min at $c$', 'turning around'],
            ['$f\'\' > 0$', 'concave up (slope increasing)', 'accelerating forward'],
            ['$f\'\' < 0$', 'concave down (slope decreasing)', 'decelerating / braking'],
            ['$f\'\'$ changes sign at $c$', 'inflection point at $c$', 'gas ↔ brake switch'],
          ],
        },
        {
          type: 'p',
          text: 'Game and UI animation use these ideas constantly. To move an object smoothly from $0$ to $1$ over normalised time $t \\in [0, 1]$, a linear ramp $t$ starts and stops abruptly. The classic **smoothstep** curve $S(t) = 3t^2 - 2t^3$ fixes that.',
        },
        {
          type: 'derivation',
          title: 'Why smoothstep "eases in" and "eases out"',
          steps: [
            { tex: "S'(t) = 6t - 6t^2 = 6t(1 - t)", why: 'Power rule, then factor out $6t$.' },
            { tex: "S'(0) = S'(1) = 0, \\quad S'(t) > 0 \\text{ on } (0, 1)", why: 'Zero velocity at both ends (no jerk at start or stop), and always increasing in between, so the object never backtracks.' },
            { tex: "S''(t) = 6 - 12t", why: 'Differentiate again.' },
            { tex: "S'' > 0 \\text{ on } [0, \\tfrac12), \\quad S'' < 0 \\text{ on } (\\tfrac12, 1]", why: 'Concave up then concave down: it accelerates for the first half and decelerates for the second.' },
            { tex: '\\text{inflection at } (\\tfrac12, \\tfrac12)', why: 'The concavity switches at $t = \\frac12$, where $S(\\frac12) = \\frac34 - \\frac14 = \\frac12$. That is the moment of top speed.' },
          ],
          result: 'Smoothstep is increasing on $[0, 1]$ with flat ends and a single inflection point in the middle — the textbook "ease-in-out" shape.',
        },
        {
          type: 'graph',
          x: [-0.1, 1.1],
          y: [-0.1, 1.6],
          functions: [
            { expr: '3x^2 - 2x^3', label: '$S(t) = 3t^2 - 2t^3$ (position)', domain: [0, 1] },
            { expr: '6x(1 - x)', label: '$S\'(t)$ (speed)', color: 'orange', dashed: true, domain: [0, 1] },
            { expr: 'x', label: 'linear ramp', color: 'gray', dashed: true, domain: [0, 1] },
          ],
          points: [{ x: 0.5, y: 0.5, label: 'inflection', color: 'purple' }],
          caption: 'The speed curve peaks exactly where the position curve has its inflection point. A local max of $S\'$ is an inflection point of $S$.',
        },
        {
          type: 'code',
          title: 'smoothstep.cpp',
          runnable: true,
          code: `#include <cstdio>

// smoothstep: eases from 0 to 1 as t goes from 0 to 1
double smoothstep(double t) { return t * t * (3 - 2 * t); }
double speed(double t) { return 6 * t * (1 - t); }  // first derivative
double accel(double t) { return 6 - 12 * t; }       // second derivative

int main() {
    for (int i = 0; i <= 5; ++i) {
        double t = i / 5.0;
        std::printf("t=%.1f  value=%.3f  speed=%.2f  accel=%+.1f\\n",
                    t, smoothstep(t), speed(t), accel(t));
    }
}`,
          output: `t=0.0  value=0.000  speed=0.00  accel=+6.0
t=0.2  value=0.104  speed=0.96  accel=+3.6
t=0.4  value=0.352  speed=1.44  accel=+1.2
t=0.6  value=0.648  speed=1.44  accel=-1.2
t=0.8  value=0.896  speed=0.96  accel=-3.6
t=1.0  value=1.000  speed=0.00  accel=-6.0`,
          annotations: [
            { lines: 4, text: '$t^2(3 - 2t) = 3t^2 - 2t^3$, written to save a multiplication — the form used in shader languages.' },
            { lines: '5-6', text: '$S\'$ and $S\'\'$: watch the acceleration change sign between $t = 0.4$ and $t = 0.6$ — the inflection at $t = 0.5$.' },
          ],
        },
        {
          type: 'callout',
          variant: 'code',
          text: 'GLSL and HLSL ship `smoothstep` as a built-in, and Unity\'s `Mathf.SmoothStep` uses the same polynomial. Ken Perlin\'s "smootherstep" $6t^5 - 15t^4 + 10t^3$ goes one step further and also makes the acceleration zero at both ends.',
        },
      ],
    },
    {
      kind: 'expr',
      prompt: 'Find the derivative of Perlin\'s smootherstep, $P(t) = 6t^5 - 15t^4 + 10t^3$. (Use $x$ as the variable.)',
      label: '$P\'(x) =$',
      answer: '30x^4 - 60x^3 + 30x^2',
      answerTex: '30x^4 - 60x^3 + 30x^2 = 30x^2(x - 1)^2',
      hint: 'Power rule on each term: bring the exponent down and reduce it by one.',
      explanation: '$P\'(x) = 30x^4 - 60x^3 + 30x^2 = 30x^2(x^2 - 2x + 1) = 30x^2(x - 1)^2$. Both factors are squares, so $P\' \\ge 0$: smootherstep never moves backward. $P\'$ is zero at $x = 0$ and $x = 1$, the start and end of the animation, so the motion begins and finishes with zero speed — just like smoothstep.',
    },
    {
      kind: 'order',
      prompt: 'Order the steps for finding and classifying the local extrema of $f$ with the First Derivative Test.',
      lines: [
        'Compute $f\'(x)$ and factor it',
        'Find the critical numbers: where $f\'(x) = 0$ or $f\'$ does not exist',
        'Make a sign chart for $f\'$ on the intervals between critical numbers',
        'At each critical number, read off how the sign of $f\'$ changes',
        'Evaluate $f$ at each local max and min to report the values',
      ],
      distractors: ['Set $f\'\'(x) = 0$ to find the local extrema'],
      explanation: 'Critical numbers come from $f\'$; the sign chart decides each one ($+ \\to -$ max, $- \\to +$ min, no change neither); the values come from $f$ itself. Setting $f\'\'(x) = 0$ finds *inflection* candidates, not extrema — a common mix-up.',
    },
  ],
  takeaways: [
    'Increasing/Decreasing Test: $f\' > 0$ on an interval means $f$ increases there; $f\' < 0$ means it decreases (proved with the MVT).',
    'First Derivative Test: at a critical number, $f\'$ going $+ \\to -$ gives a local max, $- \\to +$ a local min, and no sign change gives neither.',
    '$f\'\' > 0$ means concave up (slope increasing); $f\'\' < 0$ means concave down. An inflection point is where the concavity actually changes — $f\'\'(c) = 0$ alone is not enough.',
    'Second Derivative Test: if $f\'(c) = 0$, then $f\'\'(c) > 0$ gives a local min and $f\'\'(c) < 0$ a local max; $f\'\'(c) = 0$ is inconclusive, so fall back on the First Derivative Test.',
    'In motion and animation, $f\'$ is velocity and $f\'\'$ is acceleration: easing curves like smoothstep are designed by controlling their signs.',
  ],
  reading: [
    {
      title: 'OpenStax Calculus Volume 1 — 4.5 Derivatives and the Shape of a Graph',
      url: 'https://openstax.org/books/calculus-volume-1/pages/4-5-derivatives-and-the-shape-of-a-graph',
      source: 'openstax',
      note: 'The first and second derivative tests and concavity, with many sign-chart examples.',
    },
    {
      title: "Paul's Online Notes — The Shape of a Graph, Part I",
      url: 'https://tutorial.math.lamar.edu/Classes/CalcI/ShapeofGraphPtI.aspx',
      source: 'paul',
      note: 'Increasing/decreasing intervals and the First Derivative Test, worked step by step.',
    },
    {
      title: "Paul's Online Notes — The Shape of a Graph, Part II",
      url: 'https://tutorial.math.lamar.edu/Classes/CalcI/ShapeofGraphPtII.aspx',
      source: 'paul',
      note: 'Concavity, inflection points and the Second Derivative Test.',
    },
    {
      title: 'Wikipedia — Smoothstep',
      url: 'https://en.wikipedia.org/wiki/Smoothstep',
      source: 'wikipedia',
      note: 'The interpolation curve from the last card, its higher-order versions and use in computer graphics.',
    },
  ],
};
