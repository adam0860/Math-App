import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'trig-sine-cosine-graphs',
  title: 'Graphs of Sine and Cosine',
  summary: 'Unwrap the unit circle into a wave: the shapes, key points and properties of $y = \\sin x$ and $y = \\cos x$.',
  minutes: 16,
  objectives: [
    'Explain how the graph of $y = \\sin x$ records the height of a point moving around the unit circle',
    'Sketch $y = \\sin x$ and $y = \\cos x$ over one period from five key points',
    'State the domain, range, period, zeros, maxima and minima of sine and cosine',
    'Use periodicity and symmetry (odd/even) to evaluate sine and cosine at large or negative angles',
    'Recognise $y = \\cos x$ as the sine curve shifted $\\frac{\\pi}{2}$ to the left',
  ],
  steps: [
    // 1 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Unwrapping the unit circle',
      blocks: [
        {
          type: 'p',
          text: 'On the [[unit-circle]], the angle $\\theta$ (in radians) lands on the point $(\\cos\\theta, \\sin\\theta)$. So $\\sin\\theta$ is simply the **height** of that point. Now imagine the point travelling around the circle at a steady speed while you record its height over time. Plot angle on the horizontal axis and height on the vertical axis, and the trace you get is the graph of $y = \\sin x$.',
        },
        {
          type: 'graph',
          x: [-2.7, 7],
          y: [-1.6, 1.6],
          equal: true,
          xStep: 'pi',
          parametric: [{ x: '-1.5 + cos(t)', y: 'sin(t)', t: [0, '2pi'], color: 'gray' }],
          functions: [
            { expr: 'sin(x)', color: 'gray', dashed: true, domain: [0, '2pi'] },
            { expr: 'sin(x)', label: '$y = \\sin x$ (traced so far)', color: 'blue', domain: [0, 'a'] },
          ],
          segments: [
            { from: [-1.5, 0], to: ['-1.5 + cos(a)', 'sin(a)'], color: 'red', arrow: true },
            { from: ['-1.5 + cos(a)', 'sin(a)'], to: ['a', 'sin(a)'], color: 'orange', dashed: true },
            { from: ['a', 0], to: ['a', 'sin(a)'], color: 'red' },
          ],
          points: [
            { x: '-1.5 + cos(a)', y: 'sin(a)', color: 'red' },
            { x: 'a', y: 'sin(a)', color: 'blue' },
          ],
          sliders: [{ name: 'a', min: 0, max: 6.28, step: 0.02, value: 1, label: 'angle $\\theta$ (radians)' }],
          readouts: [{ label: '$\\sin\\theta =$', expr: 'sin(a)' }],
          caption: 'The unit circle sits to the left of the $y$-axis. The red radius sweeps angle $\\theta$; the orange dashed line carries its height across to the wave at $x = \\theta$. Drag the slider through a full turn.',
        },
        {
          type: 'p',
          text: 'Watch what happens as $\\theta$ goes from $0$ to $2\\pi$: the height starts at $0$, climbs to $1$ at the top of the circle ($\\theta = \\frac{\\pi}{2}$), falls back to $0$ on the left ($\\theta = \\pi$), bottoms out at $-1$ ($\\theta = \\frac{3\\pi}{2}$), and returns to $0$ when the point comes home. Keep going and the point simply repeats its trip — so the graph repeats too.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the horizontal axis uses radians',
          text: 'A [[radian]] measures angle by arc length on the unit circle. So with radians, *both* axes are measured in the same unit: one unit along the $x$-axis is one unit of distance travelled around the circle. That is why the curve is not squashed or stretched — near $x = 0$ the sine graph rises with slope exactly $1$, just like the circle\'s point starts moving straight up. In degrees the same curve would be stretched 57 times wider.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Every engine expects radians',
          text: '`std::sin`, `std::cos`, GLSL\'s `sin()` and Unity\'s `Mathf.Sin` all take radians. If an enemy\'s patrol angle is stored in degrees, convert first: `std::sin(deg * M_PI / 180.0)`. Forgetting this is one of the most common trig bugs in game code: the motion still "works", but at a wildly wrong speed.',
        },
      ],
    },
    // 2 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'The sine curve from five key points',
      blocks: [
        {
          type: 'p',
          text: 'You do not need hundreds of points to sketch a sine curve. Split one full turn into quarters, and at each quarter the point on the circle is at a compass direction where you already know the coordinates: right, top, left, bottom, right again.',
        },
        {
          type: 'table',
          headers: ['$x$', '$0$', '$\\frac{\\pi}{2}$', '$\\pi$', '$\\frac{3\\pi}{2}$', '$2\\pi$'],
          rows: [
            ['point on circle', '$(1, 0)$', '$(0, 1)$', '$(-1, 0)$', '$(0, -1)$', '$(1, 0)$'],
            ['$\\sin x$', '$0$', '$1$', '$0$', '$-1$', '$0$'],
            ['feature', 'zero (rising)', 'maximum', 'zero (falling)', 'minimum', 'zero (rising)'],
          ],
          caption: 'The five key points of one cycle of $y = \\sin x$: zero, max, zero, min, zero.',
        },
        {
          type: 'derivation',
          title: 'Sketch one cycle of $y = \\sin x$',
          steps: [
            { tex: '\\text{one cycle: } 0 \\le x \\le 2\\pi', why: 'One full turn of the circle is $2\\pi$ radians, so one copy of the wave spans an interval of length $2\\pi$.' },
            { tex: '\\text{quarter} = \\frac{2\\pi}{4} = \\frac{\\pi}{2}', why: 'Dividing the cycle into four equal parts lands on the quarter-turn angles, where sine is $0$, $1$ or $-1$.' },
            { tex: 'x = 0,\\ \\tfrac{\\pi}{2},\\ \\pi,\\ \\tfrac{3\\pi}{2},\\ 2\\pi', why: 'Start at $0$ and add a quarter-period four times.' },
            { tex: 'y = 0,\\ 1,\\ 0,\\ -1,\\ 0', why: 'Read the height (the $y$-coordinate) of each compass point on the unit circle.' },
            { tex: '\\text{connect with a smooth, rounded wave}', why: 'The circle has no corners, so neither does the graph: it is rounded at the peak and trough and steepest where it crosses the axis.' },
          ],
          result: 'One cycle rises from $(0, 0)$ to the peak $(\\frac{\\pi}{2}, 1)$, falls through $(\\pi, 0)$ to the trough $(\\frac{3\\pi}{2}, -1)$, and returns to $(2\\pi, 0)$.',
        },
        {
          type: 'graph',
          x: [-0.5, 7],
          y: [-1.6, 1.6],
          xStep: 'pi',
          functions: [{ expr: 'sin(x)', label: '$y = \\sin x$' }],
          points: [
            { x: 0, y: 0, label: '(0, 0)' },
            { x: 'pi/2', y: 1, label: '(π/2, 1)' },
            { x: 'pi', y: 0, label: '(π, 0)' },
            { x: '3pi/2', y: -1, label: '(3π/2, −1)' },
            { x: '2pi', y: 0, label: '(2π, 0)' },
          ],
          caption: 'The five key points pin down the whole cycle. Notice the curve is steepest at the zeros and flat at the peak and trough.',
        },
        {
          type: 'definition',
          term: 'Periodic function and period',
          text: 'A function $f$ is a [[periodic-function]] if there is a positive number $P$ with $f(x + P) = f(x)$ for every $x$ in its domain. The smallest such $P$ is the [[period]]. For sine, $\\sin(x + 2\\pi) = \\sin x$, and no smaller positive shift works, so the period is $2\\pi$.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Use the period to tame big angles',
          text: 'To evaluate $\\sin$ at a huge angle, subtract whole multiples of $2\\pi$ until you land in $[0, 2\\pi)$. For example $\\sin\\frac{9\\pi}{2} = \\sin\\left(\\frac{9\\pi}{2} - 4\\pi\\right) = \\sin\\frac{\\pi}{2} = 1$.',
        },
      ],
    },
    // Q1
    {
      kind: 'numeric',
      prompt: 'Use the period of sine to evaluate $\\sin\\left(\\dfrac{17\\pi}{2}\\right)$.',
      hint: 'Write $\\frac{17\\pi}{2}$ as a multiple of $2\\pi$ plus something in $[0, 2\\pi)$. Note $8\\pi = \\frac{16\\pi}{2}$.',
      answer: '1',
      explanation: '$\\frac{17\\pi}{2} = \\frac{16\\pi}{2} + \\frac{\\pi}{2} = 8\\pi + \\frac{\\pi}{2}$, and $8\\pi$ is four full turns. Removing whole turns does not change the sine, so $\\sin\\frac{17\\pi}{2} = \\sin\\frac{\\pi}{2} = 1$. On the graph, $x = \\frac{17\\pi}{2}$ sits exactly on a peak, four cycles to the right of the peak at $\\frac{\\pi}{2}$.',
    },
    // 3 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Properties of the sine graph',
      blocks: [
        {
          type: 'p',
          text: 'Because every real number is an angle, sine accepts any input: its [[domain]] is all real numbers. Because the point lives on a circle of radius $1$, its height never leaves $[-1, 1]$: that is the [[range]]. The graph is an endless wave trapped in a horizontal band.',
        },
        {
          type: 'table',
          headers: ['Property', '$y = \\sin x$'],
          rows: [
            ['Domain', '$(-\\infty, \\infty)$'],
            ['Range', '$[-1, 1]$'],
            ['Period', '$2\\pi$'],
            ['Zeros', '$x = k\\pi$ for every integer $k$'],
            ['Maximum $1$ at', '$x = \\frac{\\pi}{2} + 2k\\pi$'],
            ['Minimum $-1$ at', '$x = \\frac{3\\pi}{2} + 2k\\pi$'],
            ['Symmetry', 'odd: $\\sin(-x) = -\\sin x$ (symmetric about the origin)'],
          ],
          caption: 'Here $k$ stands for any integer: $\\dots, -2, -1, 0, 1, 2, \\dots$',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why sine is an odd function',
          text: 'The angle $-x$ is the mirror image of the angle $x$ across the horizontal axis: same $x$-coordinate on the circle, opposite height. So $\\sin(-x) = -\\sin x$, which makes sine an [[odd-function]]. On the graph that means rotating the curve $180°$ about the origin leaves it unchanged — the piece left of the origin is the right-hand piece flipped upside down.',
        },
        {
          type: 'derivation',
          title: 'Find every $x$ in $[0, 4\\pi]$ where $\\sin x = 1$',
          steps: [
            { tex: '\\sin x = 1 \\iff x = \\tfrac{\\pi}{2} + 2k\\pi', why: 'Within one cycle the only peak is at $\\frac{\\pi}{2}$; every other peak is a whole number of periods away.' },
            { tex: 'k = 0:\\ x = \\tfrac{\\pi}{2}', why: 'Inside $[0, 4\\pi]$.' },
            { tex: 'k = 1:\\ x = \\tfrac{\\pi}{2} + 2\\pi = \\tfrac{5\\pi}{2}', why: 'Also inside, since $\\frac{5\\pi}{2} < 4\\pi = \\frac{8\\pi}{2}$.' },
            { tex: 'k = 2:\\ x = \\tfrac{9\\pi}{2} > 4\\pi', why: 'Too big; and $k = -1$ gives $-\\frac{3\\pi}{2} < 0$, too small. So we stop.' },
          ],
          result: 'Exactly two solutions: $x = \\frac{\\pi}{2}$ and $x = \\frac{5\\pi}{2}$ — one peak per cycle, two cycles in the interval.',
        },
        {
          type: 'graph',
          x: [-7, 7],
          y: [-1.6, 1.6],
          xStep: 'pi',
          functions: [{ expr: 'sin(x)', label: '$y = \\sin x$' }],
          hlines: [{ y: 1, color: 'green' }, { y: -1, color: 'green' }],
          caption: 'Two full cycles on each side of the origin. The green lines $y = \\pm 1$ show the range; the wave touches each once per period.',
        },
      ],
    },
    // Q2
    {
      kind: 'numeric',
      prompt: 'Find every $x$ in the interval $[0, 4\\pi]$ where $\\sin x = -1$. Enter both values, separated by a comma.',
      hint: 'In one cycle the minimum is at $x = \\frac{3\\pi}{2}$. Add multiples of the period $2\\pi$.',
      label: '$x =$',
      answer: ['3pi/2', '7pi/2'],
      answerTex: '\\frac{3\\pi}{2},\\ \\frac{7\\pi}{2}',
      explanation: 'The troughs of $y = \\sin x$ are at $x = \\frac{3\\pi}{2} + 2k\\pi$. With $k = 0$ we get $\\frac{3\\pi}{2}$ and with $k = 1$ we get $\\frac{3\\pi}{2} + 2\\pi = \\frac{7\\pi}{2}$, both in $[0, 4\\pi]$. The next one, $\\frac{11\\pi}{2}$, is past $4\\pi = \\frac{8\\pi}{2}$.',
    },
    // 4 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'The cosine curve',
      blocks: [
        {
          type: 'p',
          text: 'Cosine is the *other* coordinate: the horizontal position of the point on the circle. Record that over a full turn and you get the graph of $y = \\cos x$. At angle $0$ the point is at the far right, so the cosine graph starts at its **maximum**, not at zero.',
        },
        {
          type: 'table',
          headers: ['$x$', '$0$', '$\\frac{\\pi}{2}$', '$\\pi$', '$\\frac{3\\pi}{2}$', '$2\\pi$'],
          rows: [
            ['$\\cos x$', '$1$', '$0$', '$-1$', '$0$', '$1$'],
            ['feature', 'maximum', 'zero (falling)', 'minimum', 'zero (rising)', 'maximum'],
          ],
          caption: 'Key points of $y = \\cos x$: max, zero, min, zero, max.',
        },
        {
          type: 'graph',
          x: [-7, 7],
          y: [-1.6, 1.6],
          xStep: 'pi',
          functions: [
            { expr: 'cos(x)', label: '$y = \\cos x$', color: 'red' },
            { expr: 'sin(x)', label: '$y = \\sin x$', color: 'blue', dashed: true },
          ],
          points: [
            { x: 0, y: 1, label: '(0, 1)', color: 'red' },
            { x: 'pi', y: -1, label: '(π, −1)', color: 'red' },
          ],
          caption: 'Same shape, same band, same period — but cosine is symmetric about the $y$-axis while sine is symmetric about the origin.',
        },
        {
          type: 'p',
          text: 'Cosine has the same domain $(-\\infty, \\infty)$, range $[-1, 1]$ and period $2\\pi$ as sine. Its zeros are at $x = \\frac{\\pi}{2} + k\\pi$, its maxima at $x = 2k\\pi$ and its minima at $x = \\pi + 2k\\pi$. Over $[0, 2\\pi]$ it decreases on $[0, \\pi]$ (the point slides from the far right to the far left along the top) and increases on $[\\pi, 2\\pi]$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why cosine is an even function',
          text: 'The angles $x$ and $-x$ are mirror images across the horizontal axis, and mirroring a point across that axis does not change its horizontal position. So $\\cos(-x) = \\cos x$: cosine is an [[even-function]], and its graph is a mirror image of itself across the $y$-axis.',
        },
        {
          type: 'callout',
          variant: 'analogy',
          title: 'Shadows of a spinning wheel',
          text: 'Shine a light from the side of a spinning bicycle wheel and watch the shadow of a reflector go up and down the wall: that is sine. Shine the light from above and watch its shadow on the floor slide left and right: that is cosine. Same motion, viewed from two directions a quarter-turn apart.',
        },
      ],
    },
    // Q3
    {
      kind: 'mcq',
      prompt: 'On which interval is $y = \\cos x$ **decreasing** throughout? (Look at the graph or think about the point moving around the circle.)',
      options: [
        {
          text: '$[\\pi, 2\\pi]$',
          why: 'Here cosine climbs from $-1$ back up to $1$: it is increasing.',
        },
        {
          text: '$[0, \\pi]$',
          correct: true,
          why: 'The point moves along the top half of the circle from $(1, 0)$ to $(-1, 0)$, so its horizontal coordinate falls steadily from $1$ to $-1$.',
        },
        {
          text: '$[\\frac{\\pi}{2}, \\frac{3\\pi}{2}]$',
          why: 'That is where **sine** decreases (from its peak to its trough). Cosine reaches its minimum at $\\pi$ and is already rising on $[\\pi, \\frac{3\\pi}{2}]$.',
        },
        {
          text: '$[-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$',
          why: 'Cosine has its maximum at $0$ in the middle of this interval, so it rises and then falls here.',
        },
      ],
      explanation: 'Cosine starts at its maximum $1$ when $x = 0$ and reaches its minimum $-1$ at $x = \\pi$, falling the whole way. Then it rises from $\\pi$ to $2\\pi$. A good habit: locate the max and min first, and the increasing/decreasing intervals fall out between them.',
    },
    // Q4 fill
    {
      kind: 'fill',
      prompt: 'Complete the facts about the two graphs.',
      template: 'Both $y = \\sin x$ and $y = \\cos x$ have range ___ and period ___. Sine is an ___ function and cosine is an ___ function.',
      blanks: [{ answers: ['$[-1, 1]$'] }, { answers: ['$2\\pi$'] }, { answers: ['odd'] }, { answers: ['even'] }],
      wordBank: ['$[-1, 1]$', '$(-\\infty, \\infty)$', '$2\\pi$', '$\\pi$', 'odd', 'even'],
      explanation: 'The point on the unit circle has coordinates between $-1$ and $1$, so both ranges are $[-1, 1]$ (the *domain* is all reals). One full turn is $2\\pi$, so both have period $2\\pi$ — $\\pi$ is only half a turn, after which the point is on the opposite side. Reflecting the angle flips the height ($\\sin(-x) = -\\sin x$, odd) but keeps the horizontal position ($\\cos(-x) = \\cos x$, even).',
    },
    // 5 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Cosine is sine, shifted',
      blocks: [
        {
          type: 'p',
          text: 'Put the two graphs side by side and they are clearly the same wave; cosine is just *ahead* of sine. Cosine hits its peak at $x = 0$, while sine waits until $x = \\frac{\\pi}{2}$. So if you slide the sine curve $\\frac{\\pi}{2}$ units to the **left**, it lands exactly on cosine. Try it: move $h$ until the curves coincide.',
        },
        {
          type: 'graph',
          x: [-7, 7],
          y: [-1.6, 1.6],
          xStep: 'pi',
          functions: [
            { expr: 'cos(x)', label: '$y = \\cos x$', color: 'red', dashed: true },
            { expr: 'sin(x + h)', label: '$y = \\sin(x + h)$', color: 'blue' },
          ],
          sliders: [{ name: 'h', min: 0, max: 3.15, step: 0.01, value: 0.3, label: '$h$' }],
          readouts: [{ label: '$h$ in units of $\\pi$: ', expr: 'h/pi' }],
          caption: 'At $h = \\frac{\\pi}{2} \\approx 1.57$ (readout $0.5$) the blue curve covers the red one. Replacing $x$ by $x + h$ moves a graph $h$ units **left**.',
        },
        {
          type: 'theorem',
          name: 'Cosine as a shifted sine',
          tex: '\\cos x = \\sin\\!\\left(x + \\frac{\\pi}{2}\\right)',
          text: 'True for every real $x$. Equivalently, the cosine graph is the sine graph translated $\\frac{\\pi}{2}$ to the left.',
        },
        {
          type: 'derivation',
          title: 'Why the shift is exactly a quarter turn',
          steps: [
            { tex: '\\theta \\;\\mapsto\\; (\\cos\\theta,\\ \\sin\\theta)', why: 'Start with the point at angle $\\theta$ on the unit circle.' },
            { tex: '\\theta + \\tfrac{\\pi}{2} \\;\\mapsto\\; (-\\sin\\theta,\\ \\cos\\theta)', why: 'Adding $\\frac{\\pi}{2}$ rotates the point a quarter turn counterclockwise, and rotating $(a, b)$ by $90°$ gives $(-b, a)$. (Check with $\\theta = 0$: $(1, 0)$ rotates to $(0, 1)$.)' },
            { tex: '\\sin\\!\\left(\\theta + \\tfrac{\\pi}{2}\\right) = \\cos\\theta', why: 'Compare the second coordinates: the height of the rotated point is the old horizontal position.' },
          ],
          result: 'The height a quarter turn later equals the horizontal position now — so the sine curve, shifted $\\frac{\\pi}{2}$ left, is the cosine curve.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Left, not right',
          text: 'It is tempting to say "cosine is sine shifted right by $\\frac{\\pi}{2}$", because of the $+$ sign. But $\\sin(x - \\frac{\\pi}{2})$ shifts sine to the right, and that gives $-\\cos x$ (an upside-down cosine). Sanity-check with $x = 0$: $\\sin(0 + \\frac{\\pi}{2}) = 1 = \\cos 0$, but $\\sin(0 - \\frac{\\pi}{2}) = -1$.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'One wave to rule them all',
          text: 'Because cosine is a shifted sine, old game consoles and many DSP routines store a single sine lookup table and compute `cos(x)` as `sin(x + PI/2)`. Some store only a *quarter* wave and rebuild the rest using the symmetries in this lesson: $\\sin(\\pi - x) = \\sin x$ and $\\sin(-x) = -\\sin x$.',
        },
      ],
    },
    // Q5 truefalse
    {
      kind: 'truefalse',
      prompt: 'The graph of $y = \\sin\\left(x - \\frac{\\pi}{2}\\right)$ is the same as the graph of $y = \\cos x$.',
      answer: false,
      explanation: '$\\sin(x - \\frac{\\pi}{2})$ shifts sine $\\frac{\\pi}{2}$ to the **right**, putting its first peak at $x = \\pi$ — where cosine has a trough. In fact $\\sin(x - \\frac{\\pi}{2}) = -\\cos x$. Check $x = 0$: $\\sin(-\\frac{\\pi}{2}) = -1$, but $\\cos 0 = 1$. The correct identity is $\\cos x = \\sin(x + \\frac{\\pi}{2})$: a shift to the left.',
    },
    // 6 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Reading the graph: horizontal lines and symmetry',
      blocks: [
        {
          type: 'p',
          text: 'The graph turns questions like "where is $\\sin x = 0.5$?" into geometry: draw the horizontal line $y = 0.5$ and see where it crosses the wave. Slide $k$ below and count crossings in one cycle $[0, 2\\pi)$.',
        },
        {
          type: 'graph',
          x: [-0.5, 7],
          y: [-1.6, 1.6],
          xStep: 'pi',
          functions: [{ expr: 'sin(x)', label: '$y = \\sin x$' }],
          hlines: [{ y: 'k', color: 'orange' }],
          vlines: [{ x: 'pi/2', label: 'x = π/2', color: 'green' }],
          sliders: [{ name: 'k', min: -1.5, max: 1.5, step: 0.05, value: 0.5, label: '$k$' }],
          caption: 'For $-1 < k < 1$ the line $y = k$ crosses each cycle **twice**; at $k = \\pm 1$ it just touches once; for $|k| > 1$ it misses entirely. The first arch is symmetric about the green line $x = \\frac{\\pi}{2}$.',
        },
        {
          type: 'p',
          text: 'Why two crossings, and how are they related? The first arch of sine (from $0$ to $\\pi$) is a mirror image of itself across $x = \\frac{\\pi}{2}$. A point at distance $d$ to the left of $\\frac{\\pi}{2}$ has the same height as the point at distance $d$ to the right. Converting this into a formula gives the supplement rule $\\sin(\\pi - x) = \\sin x$.',
        },
        {
          type: 'derivation',
          title: 'Where in $[0, 2\\pi)$ is $\\sin x = \\frac{\\sqrt{2}}{2}$?',
          steps: [
            { tex: '\\sin\\tfrac{\\pi}{4} = \\tfrac{\\sqrt{2}}{2}', why: 'A special angle you know from the $45$-$45$-$90$ triangle. That is the crossing on the rising side of the arch.' },
            { tex: 'x_2 = \\pi - \\tfrac{\\pi}{4}', why: 'By the mirror symmetry of the arch about $x = \\frac{\\pi}{2}$, the other crossing is as far before $\\pi$ as the first is after $0$.' },
            { tex: 'x_2 = \\tfrac{3\\pi}{4}', why: 'Simplify. Check: $\\frac{3\\pi}{4}$ is in quadrant II, where sine is positive, with reference angle $\\frac{\\pi}{4}$.' },
            { tex: '\\sin x < 0 \\text{ on } (\\pi, 2\\pi)', why: 'The second half of the cycle lies below the axis, so a positive value cannot occur there.' },
          ],
          result: 'Exactly two solutions in one cycle: $x = \\frac{\\pi}{4}$ and $x = \\frac{3\\pi}{4}$.',
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'Expect "sketch two periods of $y = \\cos x$ and label the key points" and "use the graph to find all $x$ in $[0, 2\\pi)$ with …". Instructors check that your $x$-axis is labelled in multiples of $\\frac{\\pi}{2}$, that peaks and zeros are in the right places, and that the curve is rounded, not zig-zag. Full equation-solving with inverse functions comes later in the course.',
        },
      ],
    },
    // Q6
    {
      kind: 'numeric',
      prompt: 'One solution of $\\sin x = \\frac{1}{2}$ is $x = \\frac{\\pi}{6}$. Use the symmetry of the sine graph to find the **other** solution in $[0, 2\\pi)$.',
      hint: 'The first arch is symmetric about $x = \\frac{\\pi}{2}$, so the partner of $x$ is $\\pi - x$.',
      label: '$x =$',
      answer: '5pi/6',
      answerTex: '\\frac{5\\pi}{6}',
      explanation: 'The two crossings of $y = \\frac{1}{2}$ with the first arch are mirror images across $x = \\frac{\\pi}{2}$, so the partner of $\\frac{\\pi}{6}$ is $\\pi - \\frac{\\pi}{6} = \\frac{5\\pi}{6}$. There are no more: on $(\\pi, 2\\pi)$ the sine is negative.',
    },
    // Q7 error
    {
      kind: 'error',
      prompt: 'A student evaluates $\\sin\\left(-\\frac{5\\pi}{2}\\right)$. Tap the first line that is wrong.',
      lines: [
        '$\\sin\\left(-\\frac{5\\pi}{2}\\right) = -\\sin\\left(\\frac{5\\pi}{2}\\right)$',
        '$= -\\sin\\left(\\frac{5\\pi}{2} - \\pi\\right)$',
        '$= -\\sin\\left(\\frac{3\\pi}{2}\\right)$',
        '$= -(-1) = 1$',
      ],
      errorLines: [2],
      explanation: 'Line 1 is correct: sine is odd. Line 2 subtracts $\\pi$, but the period of sine is $2\\pi$; subtracting half a period flips the sign of sine instead of leaving it alone. Correctly, $\\frac{5\\pi}{2} - 2\\pi = \\frac{\\pi}{2}$, so $\\sin\\left(-\\frac{5\\pi}{2}\\right) = -\\sin\\frac{\\pi}{2} = -1$.',
    },
    // Q8 order
    {
      kind: 'order',
      prompt: 'Put the steps for sketching one cycle of $y = \\cos x$ in order.',
      lines: [
        'Mark one period on the $x$-axis: from $0$ to $2\\pi$',
        'Divide it into quarters: $0, \\frac{\\pi}{2}, \\pi, \\frac{3\\pi}{2}, 2\\pi$',
        'Evaluate cosine at each: $1, 0, -1, 0, 1$',
        'Plot the five points',
        'Join them with a smooth, rounded wave',
      ],
      distractors: ['Join the points with straight line segments'],
      explanation: 'Period first (it tells you how wide one cycle is), then the quarter points (where cosine takes the easy values $1, 0, -1$), then plot and connect. The distractor is a classic sketching mistake: the graph has no corners, because the point moves smoothly around the circle — peaks and troughs are rounded.',
    },
  ],
  takeaways: [
    '$y = \\sin x$ graphs the height of the unit-circle point at angle $x$; $y = \\cos x$ graphs its horizontal position.',
    'Both have domain $(-\\infty, \\infty)$, range $[-1, 1]$ and period $2\\pi$; one cycle is sketched from five quarter-period points.',
    'Sine: zero, max, zero, min, zero on $[0, 2\\pi]$; it is odd. Cosine: max, zero, min, zero, max; it is even.',
    '$\\cos x = \\sin(x + \\frac{\\pi}{2})$: cosine is the sine wave shifted $\\frac{\\pi}{2}$ to the left.',
    'Periodicity removes whole turns ($2\\pi$) from an angle; symmetry of each arch pairs up solutions like $x$ and $\\pi - x$.',
  ],
  reading: [
    {
      title: 'OpenStax Precalculus 2e — 6.1 Graphs of the Sine and Cosine Functions',
      url: 'https://openstax.org/books/precalculus-2e/pages/6-1-graphs-of-the-sine-and-cosine-functions',
      source: 'openstax',
      note: 'Free textbook section with more sketches of sine and cosine and their key features.',
    },
    {
      title: 'Khan Academy — Trigonometry',
      url: 'https://www.khanacademy.org/math/trigonometry',
      source: 'khan',
      note: 'The "Graphs of sin, cos and tan" videos animate the unit-circle-to-graph connection.',
    },
    {
      title: 'Wikipedia — Sine wave',
      url: 'https://en.wikipedia.org/wiki/Sine_wave',
      source: 'wikipedia',
      note: 'Where sine waves show up in physics, sound and signal processing.',
    },
  ],
};
