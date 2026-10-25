import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'alg-slope',
  title: 'Slope as Rate of Change',
  summary: 'One number that captures how steep a line is, which way it tilts, and how fast one quantity changes with another.',
  minutes: 17,
  objectives: [
    'Compute the slope of a line from two points as rise over run',
    'Classify slopes as positive, negative, zero or undefined, and judge steepness by $|m|$',
    'Explain why the order of subtraction does not matter as long as it is consistent',
    'Interpret slope as a rate of change with units',
    'Use a slope to find missing coordinates and to test whether points are collinear',
  ],
  steps: [
    // 1 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Rise over run',
      blocks: [
        {
          type: 'p',
          text: 'Walk along a line from left to right. For every step you take to the right (the **run**), the line carries you up or down by some amount (the **rise**). The ratio of the two is the line\'s [[slope]], written $m$. A slope of $2$ means "up $2$ for every $1$ to the right"; a slope of $-\\frac{1}{3}$ means "down $1$ for every $3$ to the right".',
        },
        {
          type: 'definition',
          term: 'Slope',
          text: 'The slope of the line through $(x_1, y_1)$ and $(x_2, y_2)$, with $x_1 \\ne x_2$, is\n\n$$m = \\frac{\\text{rise}}{\\text{run}} = \\frac{\\Delta y}{\\Delta x} = \\frac{y_2 - y_1}{x_2 - x_1}.$$\n\nThe Greek letter $\\Delta$ ("delta") means "change in".',
        },
        {
          type: 'graph',
          x: [-4, 7],
          y: [-4, 10],
          functions: [{ expr: '2 + (q - 2)/(p - 1)*(x - 1)', color: 'blue', label: 'the line through $A$ and $B$' }],
          segments: [
            { from: [1, 2], to: ['p', 2], dashed: true, color: 'orange', label: 'run' },
            { from: ['p', 2], to: ['p', 'q'], dashed: true, color: 'green', label: 'rise' },
          ],
          points: [
            { x: 1, y: 2, label: 'A (1, 2)', color: 'red' },
            { x: 'p', y: 'q', label: 'B', color: 'red' },
          ],
          sliders: [
            { name: 'p', min: -3, max: 6, step: 1, value: 4, label: '$x$-coordinate of $B$' },
            { name: 'q', min: -3, max: 9, step: 1, value: 8, label: '$y$-coordinate of $B$' },
          ],
          readouts: [
            { label: 'rise $= y_2 - y_1 =$', expr: 'q - 2', digits: 0 },
            { label: 'run $= x_2 - x_1 =$', expr: 'p - 1', digits: 0 },
            { label: 'slope $m = \\frac{\\text{rise}}{\\text{run}} \\approx$', expr: '(q - 2)/(p - 1)', digits: 3 },
          ],
          caption: 'Move $B$ and watch the slope. Try $B = (6, 2)$ (flat), $B = (-2, 8)$ (falling) and $B = (1, 5)$ (vertical: the run is $0$ and the slope is undefined).',
        },
        {
          type: 'derivation',
          title: 'Slope through $(1, 2)$ and $(4, 8)$',
          steps: [
            { tex: 'm = \\frac{y_2 - y_1}{x_2 - x_1}', why: 'Start from the definition. Label $(x_1, y_1) = (1, 2)$ and $(x_2, y_2) = (4, 8)$.' },
            { tex: '= \\frac{8 - 2}{4 - 1}', why: 'Substitute: $y$-values on top, $x$-values on the bottom, **same point first** in both.' },
            { tex: '= \\frac{6}{3} = 2', why: 'Rise $6$, run $3$. Simplify the fraction.' },
          ],
          result: 'The slope is $2$: the line climbs $2$ units for every $1$ unit to the right.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why a ratio, and not just the rise?',
          text: 'A rise of $6$ could be gentle (over a run of $100$) or brutal (over a run of $1$). Steepness is about rise *compared to* run, so we divide. That division also makes the answer independent of which two points you measure between: from $(1, 2)$ to $(2, 4)$ the rise is only $2$, but the run is only $1$, and $\\frac{2}{1}$ is still $2$.',
        },
      ],
    },
    // 2
    {
      kind: 'numeric',
      prompt: 'Find the slope of the line through $(-2, 5)$ and $(3, -5)$.',
      hint: '$m = \\frac{-5 - 5}{3 - (-2)}$.',
      label: '$m =$',
      answer: '-2',
      explanation: '$m = \\frac{-5 - 5}{3 - (-2)} = \\frac{-10}{5} = -2$. The run is $3 - (-2) = 5$, not $1$: subtracting a negative adds. A negative slope means the line falls $2$ units for every $1$ unit to the right — consistent with going from a height of $5$ down to $-5$ while moving right.',
    },
    // 3 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Up, down, flat, and straight up',
      blocks: [
        {
          type: 'p',
          text: 'The sign of $m$ tells you which way the line tilts as you read left to right, and the size $|m|$ tells you how steep it is. Drag the slider and watch both happen.',
        },
        {
          type: 'graph',
          x: [-5, 5],
          y: [-5, 5],
          equal: true,
          functions: [
            { expr: 'm*x + 1', label: '$y = mx + 1$', color: 'blue' },
            { expr: 'x + 1', label: 'slope $1$ (reference)', color: 'gray', dashed: true },
          ],
          points: [{ x: 0, y: 1 }],
          sliders: [{ name: 'm', min: -5, max: 5, step: 0.25, value: 2, label: 'slope $m$' }],
          readouts: [{ label: 'steepness $|m| =$', expr: 'abs(m)', digits: 2 }],
          caption: 'Positive $m$: rising. Negative $m$: falling. $m = 0$: flat. As $|m|$ grows the line approaches vertical but never gets there — no number is "steep enough" to be vertical.',
        },
        {
          type: 'table',
          headers: ['slope', 'the line…', 'example'],
          rows: [
            ['$m > 0$', 'rises left to right', '$(0, 0)$ to $(2, 3)$: $m = \\frac{3}{2}$'],
            ['$m < 0$', 'falls left to right', '$(0, 3)$ to $(2, 0)$: $m = -\\frac{3}{2}$'],
            ['$m = 0$', 'is horizontal', '$(1, 4)$ to $(5, 4)$: $m = \\frac{0}{4} = 0$'],
            ['undefined', 'is vertical', '$(2, 1)$ to $(2, 6)$: $m = \\frac{5}{0}$ ✗'],
          ],
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why vertical lines have no slope',
          text: 'Between two points on a vertical line the run is $0$, so the slope would be $\\frac{\\text{rise}}{0}$. Division by zero is undefined: there is no number $m$ with $m \\cdot 0 = 5$. The graph agrees — as you push the slider toward larger $|m|$ the line gets ever closer to vertical without reaching it. A horizontal line is the opposite: rise $0$, any nonzero run, so $m = \\frac{0}{\\text{run}} = 0$, a perfectly good number.',
        },
        {
          type: 'callout',
          variant: 'warning',
          text: '"Zero slope" and "no slope" sound alike but are opposites. **Horizontal** lines have slope $0$. **Vertical** lines have *undefined* slope. Some textbooks say "no slope" for vertical lines — always say "undefined" to avoid confusion.',
        },
        {
          type: 'p',
          text: 'Steepness is measured by $|m|$, not by $m$ itself. A line with slope $-5$ is much steeper than one with slope $2$, even though $-5 < 2$: it just falls steeply instead of rising.',
        },
      ],
    },
    // 4
    {
      kind: 'mcq',
      prompt: 'What is the slope of the line through $(3, 1)$ and $(3, 7)$?',
      options: [
        { text: '$0$', why: 'Slope $0$ belongs to *horizontal* lines, where the $y$-values match. Here the $x$-values match.' },
        { text: '$6$', why: '$6$ is the rise. It still has to be divided by the run, which is $3 - 3 = 0$.' },
        { text: 'Undefined', correct: true, why: 'The run is $3 - 3 = 0$, and $\\frac{6}{0}$ is undefined. Both points lie on the vertical line $x = 3$.' },
        { text: '$\\frac{1}{6}$', why: 'This is run over rise flipped the wrong way — and the run is $0$ anyway, giving $\\frac{0}{6}$, not $\\frac{1}{6}$.' },
      ],
      explanation: 'The two points share the $x$-coordinate $3$, so they sit on a vertical line. The slope formula gives $\\frac{7 - 1}{3 - 3} = \\frac{6}{0}$, which is undefined. Whenever the $x$-coordinates match, stop: the line is vertical and has no numerical slope.',
    },
    // 5 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Which point goes first?',
      blocks: [
        {
          type: 'p',
          text: 'You may label either point as $(x_1, y_1)$. The only rule is **consistency**: whichever point\'s $y$ comes first on top, that same point\'s $x$ must come first on the bottom.',
        },
        {
          type: 'derivation',
          title: 'Slope through $(5, -2)$ and $(-1, 4)$, both ways',
          steps: [
            { tex: 'm = \\frac{4 - (-2)}{-1 - 5} = \\frac{6}{-6} = -1', why: 'Second point minus first point, in both numerator and denominator.' },
            { tex: 'm = \\frac{-2 - 4}{5 - (-1)} = \\frac{-6}{6} = -1', why: 'First point minus second point, again in both places. Both the rise and the run flip sign.' },
          ],
          result: 'Both orders give $m = -1$, because flipping both signs leaves a fraction unchanged.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why swapping both is harmless — and swapping one is not',
          text: 'Swapping the points multiplies the numerator *and* the denominator by $-1$:\n\n$$\\frac{y_1 - y_2}{x_1 - x_2} = \\frac{-(y_2 - y_1)}{-(x_2 - x_1)} = \\frac{y_2 - y_1}{x_2 - x_1}.$$\n\nBut if you swap only one of them, only one sign flips and you get $-m$: the line seems to tilt the wrong way.',
        },
        {
          type: 'compare',
          left: {
            title: 'Wrong — mixed order',
            tone: 'bad',
            tex: ['\\frac{4 - (-2)}{5 - (-1)} = \\frac{6}{6} = 1'],
            text: 'Second point first on top, first point first on the bottom.',
          },
          right: {
            title: 'Right — same order',
            tone: 'good',
            tex: ['\\frac{4 - (-2)}{-1 - 5} = \\frac{6}{-6} = -1'],
            text: 'The point that leads on top also leads on the bottom.',
          },
        },
        {
          type: 'callout',
          variant: 'tip',
          text: 'Do a 2-second sanity check after every slope: sketch or picture the points. Going from $(-1, 4)$ to $(5, -2)$ you move right and *down*, so the slope must be negative. If your answer is positive, you mixed the order.',
        },
      ],
    },
    // 6
    {
      kind: 'error',
      prompt: 'A student finds the slope of the line through $(2, 7)$ and $(6, -1)$. Tap the first line that is wrong.',
      lines: [
        'Label $(x_1, y_1) = (2, 7)$ and $(x_2, y_2) = (6, -1)$.',
        '$m = \\frac{-1 - 7}{2 - 6}$',
        '$= \\frac{-8}{-4}$',
        '$= 2$',
      ],
      errorLines: [2],
      explanation: 'Line 2 subtracts in different orders: point 2 minus point 1 on top ($-1 - 7$), but point 1 minus point 2 on the bottom ($2 - 6$). Consistently, $m = \\frac{-1 - 7}{6 - 2} = \\frac{-8}{4} = -2$. The sanity check catches it too: from $(2, 7)$ to $(6, -1)$ the line goes right and down, so the slope must be negative.',
    },
    // 7 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Slope is a rate of change',
      blocks: [
        {
          type: 'p',
          text: 'When the axes measure real quantities, slope gets units and a meaning: it is the [[rate-of-change]] of the vertical quantity with respect to the horizontal one. Its units are always **(units of $y$) per (unit of $x$)**: kilometres per hour, dollars per month, litres per minute, pixels per frame.',
        },
        {
          type: 'derivation',
          title: 'A road trip',
          steps: [
            { tex: '(2,\\ 130) \\text{ and } (5,\\ 340)', why: 'Two hours in, you are $130$ km from home; five hours in, $340$ km. Time in hours is $x$; distance in km is $y$.' },
            { tex: 'm = \\frac{340 - 130}{5 - 2}', why: 'Change in distance over change in time — the slope formula.' },
            { tex: '= \\frac{210 \\text{ km}}{3 \\text{ h}} = 70 \\ \\text{km/h}', why: 'Keep the units with the numbers; they divide just like the numbers do.' },
          ],
          result: 'The slope is your speed: $70$ km/h. If the distance graph is a straight line, you drove at exactly that speed the whole time.',
        },
        {
          type: 'graph',
          x: [0, 8],
          y: [-20, 520],
          yStep: 100,
          functions: [{ expr: '70x - 10', label: 'distance $= 70t - 10$ (km)', color: 'blue', domain: [0.5, 7.5] }],
          points: [
            { x: 2, y: 130, label: '(2 h, 130 km)', color: 'red' },
            { x: 5, y: 340, label: '(5 h, 340 km)', color: 'red' },
          ],
          segments: [
            { from: [2, 130], to: [5, 130], dashed: true, color: 'orange', label: '3 h' },
            { from: [5, 130], to: [5, 340], dashed: true, color: 'green', label: '210 km' },
          ],
          caption: 'The rise is measured in km and the run in hours, so the slope is in km per hour.',
        },
        {
          type: 'callout',
          variant: 'analogy',
          title: 'Slope in the wild',
          text: 'A road sign saying **6% grade** means a slope of $0.06$: $6$ m of climb per $100$ m of horizontal travel. A roof with a "4 in 12 pitch" has slope $\\frac{4}{12} = \\frac{1}{3}$. A wheelchair ramp in the US may be no steeper than $\\frac{1}{12}$.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Velocity is a slope',
          text: 'If a sprite\'s $x$-position goes from $120$ px at frame $10$ to $300$ px at frame $40$, its velocity is $\\frac{300 - 120}{40 - 10} = 6$ px per frame. Game loops run this backwards every frame: `x += velocity * dt` *assumes* position is a straight line in time over that tiny interval, with slope `velocity`.',
        },
      ],
    },
    // 8
    {
      kind: 'numeric',
      prompt: 'A water tank is draining at a steady rate. After $3$ minutes it holds $50$ litres; after $11$ minutes it holds $18$ litres. What is the rate of change of the volume?',
      hint: 'Rate $= \\frac{\\text{change in volume}}{\\text{change in time}} = \\frac{18 - 50}{11 - 3}$.',
      label: 'rate $=$',
      unit: 'L/min',
      answer: '-4',
      explanation: 'The points are $(3, 50)$ and $(11, 18)$, so $m = \\frac{18 - 50}{11 - 3} = \\frac{-32}{8} = -4$ L/min. The negative sign carries meaning: the volume *decreases* by $4$ litres every minute. Answering "$4$" would describe filling, not draining.',
    },
    // 9 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'The slope never changes along a line',
      blocks: [
        {
          type: 'p',
          text: 'The defining property of a straight line is that its slope is the **same between any two of its points**. Slide the little triangle along the line and resize it: the rise and run change, but their ratio does not.',
        },
        {
          type: 'graph',
          x: [-5, 7],
          y: [-3, 6],
          equal: true,
          functions: [{ expr: 'x/2 + 1', label: '$y = \\frac{1}{2}x + 1$', color: 'blue' }],
          segments: [
            { from: ['s', 's/2 + 1'], to: ['s + k', 's/2 + 1'], color: 'orange', label: 'run' },
            { from: ['s + k', 's/2 + 1'], to: ['s + k', '(s + k)/2 + 1'], color: 'green', label: 'rise' },
          ],
          sliders: [
            { name: 's', min: -4, max: 3, step: 0.5, value: -2, label: 'where the triangle starts' },
            { name: 'k', min: 0.5, max: 4, step: 0.5, value: 2, label: 'size of the run' },
          ],
          readouts: [
            { label: 'run $=$', expr: 'k', digits: 1 },
            { label: 'rise $=$', expr: 'k/2', digits: 2 },
            { label: '$\\frac{\\text{rise}}{\\text{run}} =$', expr: '(k/2)/k', digits: 2 },
          ],
          caption: 'Every triangle drawn this way has the same angles, so they are **similar triangles** and their sides stay in the same ratio.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why "constant slope" and "straight" mean the same thing',
          text: 'Two slope triangles on the same line have a horizontal side, a vertical side, and a hypotenuse along the line, so their angles match. Similar triangles have proportional sides, so $\\frac{\\text{rise}}{\\text{run}}$ is the same for both. Conversely, if the slope between some pair of points on a graph differs from another pair, the graph bends somewhere — it is not a line.',
        },
        {
          type: 'p',
          text: 'This makes slope a set of walking directions. Knowing one point and the slope, you can find as many other points as you like.',
        },
        {
          type: 'derivation',
          title: 'A line through $(2, 3)$ has slope $\\frac{3}{4}$. Find its $y$-value at $x = 10$.',
          steps: [
            { tex: '\\Delta x = 10 - 2 = 8', why: 'We need to travel $8$ units to the right.' },
            { tex: '\\Delta y = m \\cdot \\Delta x = \\tfrac{3}{4} \\cdot 8 = 6', why: 'Rearranging $m = \\frac{\\Delta y}{\\Delta x}$ gives $\\Delta y = m\\,\\Delta x$: rise $3$ per run $4$, done twice.' },
            { tex: 'y = 3 + 6 = 9', why: 'Start at height $3$ and rise $6$.' },
          ],
          result: 'The line passes through $(10, 9)$ (via $(6, 6)$ on the way).',
        },
        {
          type: 'deepdive',
          title: 'Testing whether three points are collinear',
          blocks: [
            {
              type: 'p',
              text: 'Points are *collinear* if one line passes through all of them. Because slope is constant along a line, $A$, $B$, $C$ are collinear exactly when the slope from $A$ to $B$ equals the slope from $B$ to $C$. For $(0, 1)$, $(2, 2)$, $(6, 4)$: $\\frac{2 - 1}{2 - 0} = \\frac{1}{2}$ and $\\frac{4 - 2}{6 - 2} = \\frac{1}{2}$, so yes. Replace $(6, 4)$ by $(6, 5)$ and the second slope becomes $\\frac{3}{4}$: not collinear.',
            },
          ],
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Drawing a line on a pixel grid',
          text: 'The simplest line-drawing algorithm (DDA) uses this exact idea: for a line with $|m| \\le 1$, step one pixel right at a time and add $m$ to $y$, rounding to the nearest pixel row. (For steeper lines it steps in $y$ instead, adding $\\frac{1}{m}$ to $x$.) Bresenham\'s algorithm is the integer-only refinement used in classic graphics hardware.',
        },
      ],
    },
    // 10
    {
      kind: 'numeric',
      prompt: 'The line through $(1, k)$ and $(3, 7)$ has slope $2$. Find $k$.',
      hint: 'Set up $\\frac{7 - k}{3 - 1} = 2$ and solve for $k$.',
      label: '$k =$',
      answer: '3',
      explanation: '$\\frac{7 - k}{3 - 1} = 2 \\implies \\frac{7 - k}{2} = 2 \\implies 7 - k = 4 \\implies k = 3$. Check with walking directions: from $(1, 3)$, a run of $2$ at slope $2$ means a rise of $4$, landing on $(3, 7)$. ✓',
    },
    // 11
    {
      kind: 'order',
      prompt: 'Order these lines from **smallest slope** (top) to **largest slope** (bottom).',
      lines: [
        'falls $3$ units for every $1$ unit to the right',
        'passes through $(0, 0)$ and $(4, -2)$',
        'a horizontal line',
        'passes through $(-1, 1)$ and $(2, 3)$',
        'rises $4$ units for every $1$ unit to the right',
      ],
      explanation: 'The slopes are $-3$, $\\frac{-2 - 0}{4 - 0} = -\\frac{1}{2}$, $0$, $\\frac{3 - 1}{2 - (-1)} = \\frac{2}{3}$ and $4$. On the number line $-3 < -\\frac{1}{2} < 0 < \\frac{2}{3} < 4$. Notice that "smallest slope" is not "least steep": the line with slope $-3$ is the second steepest of the five.',
    },
    // 12 ────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Looking ahead: when the graph curves',
      blocks: [
        {
          type: 'p',
          text: 'For a curve, the slope between two points depends on *which* two points you pick. The slope of the segment joining them is still meaningful — it is the [[average-rate-of-change]] over that stretch — but it no longer describes the whole graph.',
        },
        {
          type: 'graph',
          x: [-3, 4],
          y: [-1, 10],
          functions: [{ expr: 'x^2', label: '$y = x^2$', color: 'blue' }],
          segments: [{ from: ['a', 'a^2'], to: ['a + 1', '(a + 1)^2'], color: 'red' }],
          points: [
            { x: 'a', y: 'a^2', color: 'red' },
            { x: 'a + 1', y: '(a + 1)^2', color: 'red' },
          ],
          sliders: [{ name: 'a', min: -3, max: 2, step: 0.25, value: 1, label: 'left point $x = a$ (run fixed at $1$)' }],
          readouts: [{ label: 'slope of red segment $=$', expr: '((a + 1)^2 - a^2)/1', digits: 2 }],
          caption: 'Same run, different slopes: the parabola gets steeper to the right. Between $x = 1$ and $x = 3$ the average rate of change is $\\frac{9 - 1}{3 - 1} = 4$.',
        },
        {
          type: 'p',
          text: 'Shrinking that segment until its two points merge — and asking what its slope approaches — is exactly how calculus defines the slope of a curve at a single point. Everything in that theory is built on the humble rise-over-run of this lesson.',
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'Word problems often ask you to "interpret the slope". A complete answer names both quantities, the units and the direction: "the volume *decreases* by $4$ litres *per minute*", not just "$-4$".',
        },
      ],
    },
    // 13
    {
      kind: 'truefalse',
      prompt: 'A line with slope $-5$ is less steep than a line with slope $2$, because $-5 < 2$.',
      answer: false,
      explanation: 'Steepness is measured by the absolute value of the slope. $|-5| = 5 > 2 = |2|$, so the slope $-5$ line is steeper; it falls $5$ units per unit to the right while the other rises only $2$. The sign tells you direction (rising or falling); the size tells you steepness.',
    },
    // 14
    {
      kind: 'fill',
      prompt: 'Describe what a slope of $-\\frac{2}{5}$ means as walking directions.',
      template: 'For every ___ units you move to the right, the line goes ___ by ___ units.',
      blanks: [{ answers: ['$5$'] }, { answers: ['down'] }, { answers: ['$2$'] }],
      wordBank: ['$5$', '$2$', 'down', 'up', '$-5$', '$-2$'],
      explanation: 'Slope is rise over run, $\\frac{-2}{5}$: a run of $5$ to the right with a "rise" of $-2$, i.e. $2$ units **down**. (Equivalently $\\frac{2}{-5}$: $5$ to the left and $2$ up — the same line.) Distances in walking directions are positive; the direction word carries the sign.',
    },
  ],
  takeaways: [
    'Slope is rise over run: $m = \\frac{y_2 - y_1}{x_2 - x_1}$, the change in $y$ per unit change in $x$.',
    'Positive slope rises, negative falls, zero is horizontal, and vertical lines have undefined slope (the run is $0$). Steepness is $|m|$.',
    'Either point may come first, but subtract in the same order on top and bottom; a quick sketch catches sign errors.',
    'In applications slope is a rate of change with units "$y$-units per $x$-unit", and its sign carries meaning.',
    'A line has the same slope between any two of its points (similar triangles), so $\\Delta y = m\\,\\Delta x$ lets you walk from one point to another.',
  ],
  reading: [
    {
      title: 'OpenStax College Algebra 2e — 2.2 Linear Equations in One Variable',
      url: 'https://openstax.org/books/college-algebra-2e/pages/2-2-linear-equations-in-one-variable',
      source: 'openstax',
      note: 'Includes the slope formula, slopes of horizontal and vertical lines, and worked examples.',
    },
    {
      title: "Paul's Online Notes — Lines",
      url: 'https://tutorial.math.lamar.edu/Classes/Alg/Lines.aspx',
      source: 'paul',
      note: 'A concise college-level treatment of slope and its interpretation.',
    },
    {
      title: 'Wikipedia — Slope',
      url: 'https://en.wikipedia.org/wiki/Slope',
      source: 'wikipedia',
      note: 'Road grades, the history of the letter $m$, and the connection to derivatives.',
    },
  ],
};
