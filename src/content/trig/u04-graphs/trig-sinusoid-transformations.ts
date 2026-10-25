import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'trig-sinusoid-transformations',
  title: 'Amplitude, Period and Phase Shift',
  summary: 'Four dials control every wave: $y = A\\sin(B(x - C)) + D$. Learn what each one does, why, and how to read them off a graph.',
  minutes: 18,
  objectives: [
    'Identify the amplitude $|A|$, period $\\frac{2\\pi}{|B|}$, phase shift $C$ and midline $y = D$ of a sinusoid',
    'Explain why a larger $B$ makes the period shorter, and why you must factor out $B$ to read the phase shift',
    'Graph $y = A\\sin(B(x - C)) + D$ by transforming the five key points of one cycle',
    'Write an equation for a sinusoid from its graph',
    'Convert between period, frequency and the "speed" $B$ used in animation code',
  ],
  steps: [
    // 1 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Four dials on one wave',
      blocks: [
        {
          type: 'p',
          text: 'Ocean swells, sound waves, a lantern swaying in a game, the brightness of a pulsing health bar: they are all the same sine curve, just stretched, squeezed and slid around. Any graph you can get from $y = \\sin x$ (or $y = \\cos x$) by stretching and shifting is called a [[sinusoid]], and every one of them can be written with four numbers.',
        },
        {
          type: 'theorem',
          name: 'Standard form of a sinusoid',
          tex: 'y = A\\sin\\big(B(x - C)\\big) + D \\qquad\\text{or}\\qquad y = A\\cos\\big(B(x - C)\\big) + D',
          text: '$|A|$ is the [[amplitude]], $\\frac{2\\pi}{|B|}$ is the [[period]], $C$ is the [[phase-shift]] (horizontal shift) and $y = D$ is the [[midline]].',
        },
        {
          type: 'graph',
          x: [-7, 7],
          y: [-5.5, 5.5],
          xStep: 'pi',
          functions: [
            { expr: 'sin(x)', label: '$y = \\sin x$', color: 'gray', dashed: true },
            { expr: 'a*sin(b*(x - c)) + d', label: '$y = A\\sin(B(x - C)) + D$', color: 'blue' },
          ],
          hlines: [{ y: 'd', color: 'green', label: 'midline' }],
          vlines: [{ x: 'c', color: 'purple', label: 'cycle starts' }],
          points: [{ x: 'c', y: 'd', color: 'purple' }],
          sliders: [
            { name: 'a', min: -3, max: 3, step: 0.1, value: 2, label: '$A$ (amplitude)' },
            { name: 'b', min: 0.25, max: 4, step: 0.05, value: 1, label: '$B$ (speed)' },
            { name: 'c', min: -3.2, max: 3.2, step: 0.05, value: 0, label: '$C$ (phase shift)' },
            { name: 'd', min: -2, max: 2, step: 0.1, value: 0, label: '$D$ (midline)' },
          ],
          readouts: [
            { label: 'amplitude $|A| =$', expr: 'abs(a)' },
            { label: 'period $\\frac{2\\pi}{B} =$', expr: '2pi/b' },
            { label: 'phase shift $C =$', expr: 'c' },
            { label: 'midline $y = D =$', expr: 'd' },
          ],
          caption: 'Move one slider at a time. $A$ stretches vertically, $B$ squeezes horizontally, $C$ slides left/right, $D$ slides up/down. The purple dot marks where the shifted cycle begins: on the midline, heading up (when $A > 0$).',
        },
        {
          type: 'p',
          text: 'You already know these moves from algebra: a [[transformation]] outside the function ($A\\cdot$ and $+D$) acts vertically, and one inside ($B$ and $C$) acts horizontally — and in the "opposite" way to what the numbers suggest. The rest of this lesson takes the dials one pair at a time and explains exactly why each behaves as it does.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'You will write this line of code a hundred times',
          text: '`float y = baseY + amp * std::sin(speed * (time - offset));` is the standard form in disguise: `amp` is $A$, `speed` is $B$, `offset` is $C$ and `baseY` is $D$. Every bobbing coin, flickering torch and breathing idle pose is tuned with these four numbers.',
        },
      ],
    },
    // 2 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Amplitude and midline: $A$ and $D$',
      blocks: [
        {
          type: 'p',
          text: 'Since $\\sin(\\text{anything})$ always lies in $[-1, 1]$, multiplying by $A$ puts $A\\sin(\\dots)$ between $-|A|$ and $|A|$, and adding $D$ moves that band so it is centred on $D$. So the wave swings $|A|$ units above and below the horizontal line $y = D$.',
        },
        {
          type: 'math',
          tex: '\\text{max} = D + |A|, \\qquad \\text{min} = D - |A|',
        },
        {
          type: 'p',
          text: 'Run that backwards and you can read $A$ and $D$ off any graph or data set: the midline is the average of the max and min, and the amplitude is half the distance between them.',
        },
        {
          type: 'math',
          tex: '|A| = \\frac{\\text{max} - \\text{min}}{2}, \\qquad D = \\frac{\\text{max} + \\text{min}}{2}',
        },
        {
          type: 'derivation',
          title: 'A wave peaks at $y = 7$ and bottoms out at $y = -1$. Find its amplitude and midline.',
          steps: [
            { tex: '|A| = \\frac{7 - (-1)}{2}', why: 'Amplitude is half the vertical distance from trough to peak.' },
            { tex: '= \\frac{8}{2} = 4', why: 'Subtracting a negative adds: $7 + 1 = 8$.' },
            { tex: 'D = \\frac{7 + (-1)}{2} = \\frac{6}{2} = 3', why: 'The midline sits halfway between the extremes — their average.' },
            { tex: '3 + 4 = 7,\\quad 3 - 4 = -1 \\;\\checkmark', why: 'Check: midline plus/minus amplitude recovers the max and min.' },
          ],
          result: 'Amplitude $4$, midline $y = 3$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why amplitude is half the swing, not the whole swing',
          text: 'Amplitude measures how far the wave strays from its resting level, not the total peak-to-trough height. The sine wave is perfectly balanced — it spends as much distance above the midline as below — so the peak-to-trough distance is $2|A|$. This is the number-one error on modeling problems: if high tide is $9$ ft and low tide is $1$ ft, the amplitude is $4$, not $8$.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'A negative $A$ is a flip, not a negative amplitude',
          text: 'In $y = -2\\sin x$ the amplitude is $|-2| = 2$. The minus sign reflects the wave across its midline (a [[reflection]]): it now starts at the midline heading **down**, reaches its minimum first and its maximum second.',
        },
      ],
    },
    // Q1
    {
      kind: 'numeric',
      prompt: 'Find the maximum and minimum values of $y = -3\\sin x + 5$. Enter both, separated by a comma.',
      hint: 'The amplitude is $|-3|$ and the midline is $y = 5$.',
      answer: ['8', '2'],
      explanation: 'The amplitude is $|A| = |-3| = 3$ and the midline is $D = 5$. So the wave ranges from $5 - 3 = 2$ to $5 + 3 = 8$. The negative sign only decides *which comes first*: at $x = \\frac{\\pi}{2}$, $y = -3 + 5 = 2$ is a minimum, and at $x = \\frac{3\\pi}{2}$, $y = 3 + 5 = 8$ is a maximum. Whatever the sign of $A$, the cleanest route to the extremes is always $D \\pm |A|$.',
    },
    // 3 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Period: why bigger $B$ means a shorter wave',
      blocks: [
        {
          type: 'p',
          text: 'Think of the input of sine as an angle that has to sweep through $2\\pi$ to finish one cycle. In $y = \\sin(Bx)$, the angle is $Bx$, so it sweeps $B$ times as fast as $x$. A cycle ends when $Bx$ has covered $2\\pi$ — that is, when $x$ has covered $\\frac{2\\pi}{B}$.',
        },
        {
          type: 'derivation',
          title: 'Period of $y = \\sin(Bx)$ with $B > 0$',
          steps: [
            { tex: '0 \\le Bx \\le 2\\pi', why: 'One cycle of sine happens as its input runs through one full turn, from $0$ to $2\\pi$.' },
            { tex: '0 \\le x \\le \\frac{2\\pi}{B}', why: 'Divide every part of the inequality by $B$; since $B > 0$ the inequality signs stay the same.' },
            { tex: 'P = \\frac{2\\pi}{B}', why: 'So one cycle spans an $x$-interval of length $\\frac{2\\pi}{B}$. For negative $B$, use $|B|$ (a negative $B$ just reflects the graph).' },
          ],
          result: 'The period of $y = A\\sin(B(x - C)) + D$ is $P = \\dfrac{2\\pi}{|B|}$. Doubling $B$ halves the period.',
        },
        {
          type: 'graph',
          x: [-0.5, 7],
          y: [-1.6, 1.6],
          xStep: 'pi',
          functions: [
            { expr: 'sin(x)', label: '$y = \\sin x$', color: 'gray', dashed: true },
            { expr: 'sin(b*x)', label: '$y = \\sin(Bx)$', color: 'blue' },
          ],
          vlines: [{ x: '2pi/b', color: 'orange', label: 'x = 2π/B' }],
          sliders: [{ name: 'b', min: 0.5, max: 4, step: 0.05, value: 2, label: '$B$' }],
          readouts: [
            { label: 'period $=$', expr: '2pi/b' },
            { label: 'cycles in $[0, 2\\pi]$ $=$', expr: 'b' },
          ],
          caption: 'The orange line marks the end of the first cycle. With $B = 2$ you fit two full cycles in $[0, 2\\pi]$; with $B = \\frac{1}{2}$ only half of one.',
        },
        {
          type: 'p',
          text: 'The number of cycles per unit of $x$ is the [[frequency]], $f = \\frac{1}{P} = \\frac{|B|}{2\\pi}$. If $x$ is time in seconds, $f$ is in cycles per second (hertz) and $B = 2\\pi f$ is the [[angular-frequency]] in radians per second.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the effect seems "backwards"',
          text: 'Multiplying the input by $B$ does not stretch the graph by $B$ — it makes the wave reach each feature $B$ times *sooner*. The value the original graph had at $x = \\pi$ now appears at $x = \\frac{\\pi}{B}$. Every horizontal distance gets divided by $B$, which is a horizontal compression for $|B| > 1$ and a stretch for $|B| < 1$.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Speed knobs in shaders',
          text: 'In shader code you will see `sin(time * 6.2831 * freq)`: the `6.2831` is $2\\pi$, turning a designer-friendly frequency in Hz into the $B$ that `sin` needs. Want a light to pulse once every 2 seconds? Then $f = 0.5$ and $B = 2\\pi(0.5) = \\pi$.',
        },
      ],
    },
    // Q2
    {
      kind: 'numeric',
      prompt: 'Find the period of $y = 4\\cos\\left(\\dfrac{\\pi x}{3}\\right)$.',
      hint: 'Here $B = \\frac{\\pi}{3}$. Use $P = \\frac{2\\pi}{B}$, and remember dividing by a fraction means multiplying by its reciprocal.',
      label: '$P =$',
      answer: '6',
      explanation: '$B = \\frac{\\pi}{3}$, so $P = \\frac{2\\pi}{\\pi/3} = 2\\pi \\cdot \\frac{3}{\\pi} = 6$. The amplitude $4$ has nothing to do with the period. Having $\\pi$ inside $B$ is common in applications: it makes the period a nice whole number, like $6$ hours or $6$ seconds.',
    },
    // Q3
    {
      kind: 'truefalse',
      prompt: 'The graph of $y = \\sin(2x)$ has period $4\\pi$, because the $2$ stretches the graph to twice its width.',
      answer: false,
      explanation: 'The $2$ makes the input race through angles twice as fast, so the graph completes a cycle in **half** the usual distance: $P = \\frac{2\\pi}{2} = \\pi$. A period of $4\\pi$ belongs to $y = \\sin\\left(\\frac{x}{2}\\right)$, where $B = \\frac{1}{2}$.',
    },
    // 4 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Phase shift: factor out $B$ first',
      blocks: [
        {
          type: 'p',
          text: 'Replacing $x$ with $x - C$ slides a graph $C$ units right (left if $C < 0$). For sinusoids the trap is that equations are often written as $y = \\sin(Bx - k)$, with $B$ *not* factored out. The phase shift is **not** $k$.',
        },
        {
          type: 'compare',
          left: {
            title: 'Wrong',
            tone: 'bad',
            tex: ['y = \\sin\\left(2x - \\frac{\\pi}{2}\\right)', '\\text{shift} = \\frac{\\pi}{2} \\text{ right}'],
          },
          right: {
            title: 'Right',
            tone: 'good',
            tex: ['y = \\sin\\left(2\\left(x - \\frac{\\pi}{4}\\right)\\right)', '\\text{shift} = \\frac{\\pi}{4} \\text{ right}'],
          },
        },
        {
          type: 'derivation',
          title: 'Phase shift of $y = \\sin\\left(2x - \\frac{\\pi}{2}\\right)$, two ways',
          steps: [
            { tex: '2x - \\tfrac{\\pi}{2} = 2\\left(x - \\tfrac{\\pi}{4}\\right)', why: 'Factor $2$ out of both terms: $\\frac{\\pi}{2} \\div 2 = \\frac{\\pi}{4}$. Now the expression matches $B(x - C)$ with $B = 2$, $C = \\frac{\\pi}{4}$.' },
            { tex: 'C = \\tfrac{\\pi}{4} \\text{ (to the right)}', why: 'The form $x - C$ with positive $C$ means a shift to the right.' },
            { tex: '2x - \\tfrac{\\pi}{2} = 0 \\implies x = \\tfrac{\\pi}{4}', why: 'Second method: a basic sine cycle starts where its input is $0$. Set the inside equal to $0$ and solve — you land on the same starting point.' },
            { tex: '2x - \\tfrac{\\pi}{2} = 2\\pi \\implies x = \\tfrac{5\\pi}{4}', why: 'The cycle ends where the input reaches $2\\pi$. The length $\\frac{5\\pi}{4} - \\frac{\\pi}{4} = \\pi$ matches the period $\\frac{2\\pi}{2}$.' },
          ],
          result: 'The cycle runs from $x = \\frac{\\pi}{4}$ to $x = \\frac{5\\pi}{4}$: phase shift $\\frac{\\pi}{4}$ right, period $\\pi$.',
        },
        {
          type: 'graph',
          x: [-1, 7],
          y: [-1.6, 1.6],
          xStep: 'pi',
          functions: [
            { expr: 'sin(2x)', label: '$y = \\sin(2x)$', color: 'gray', dashed: true },
            { expr: 'sin(2(x - c))', label: '$y = \\sin(2(x - C))$', color: 'blue' },
          ],
          vlines: [{ x: 'c', color: 'purple' }],
          sliders: [{ name: 'c', min: -1.6, max: 1.6, step: 0.01, value: 0.79, label: '$C$' }],
          readouts: [
            { label: 'shift $C =$', expr: 'c' },
            { label: 'written as $\\sin(2x - k)$, $k = 2C =$', expr: '2c' },
          ],
          caption: 'At $C = \\frac{\\pi}{4} \\approx 0.79$ the curve is $\\sin(2x - \\frac{\\pi}{2})$: the number inside, $k \\approx 1.57$, is twice the actual shift.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why you divide by $B$',
          text: 'The shift answers "where does the cycle start?" — where the whole input equals $0$. In $\\sin(Bx - k)$ that happens at $Bx = k$, so $x = \\frac{k}{B}$. The $B$ speeds up everything inside the parentheses, including the shift: a phase of $k$ radians of *angle* corresponds to only $\\frac{k}{B}$ units of $x$.',
        },
      ],
    },
    // Q4
    {
      kind: 'mcq',
      prompt: 'What is the phase shift of $y = 3\\sin\\left(2x + \\dfrac{\\pi}{3}\\right)$?',
      options: [
        {
          text: '$\\frac{\\pi}{3}$ to the left',
          why: 'This reads the shift straight from the parentheses without factoring out the $2$.',
        },
        {
          text: '$\\frac{\\pi}{6}$ to the right',
          why: 'The size is right but the direction is wrong: $x + \\frac{\\pi}{6} = x - \\left(-\\frac{\\pi}{6}\\right)$, so $C$ is negative — a shift left.',
        },
        {
          text: '$\\frac{\\pi}{6}$ to the left',
          correct: true,
          why: '$2x + \\frac{\\pi}{3} = 2\\left(x + \\frac{\\pi}{6}\\right)$, so $C = -\\frac{\\pi}{6}$: a shift of $\\frac{\\pi}{6}$ to the left.',
        },
        {
          text: '$\\frac{2\\pi}{3}$ to the left',
          why: 'This multiplies by $B$ instead of dividing by it.',
        },
      ],
      explanation: 'Factor $B = 2$ out: $2x + \\frac{\\pi}{3} = 2\\left(x + \\frac{\\pi}{6}\\right)$. Matching $B(x - C)$ gives $C = -\\frac{\\pi}{6}$. Check by setting the inside to zero: $2x + \\frac{\\pi}{3} = 0$ gives $x = -\\frac{\\pi}{6}$, where the shifted cycle starts. The amplitude $3$ plays no part.',
    },
    // 5 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Graphing a sinusoid, step by step',
      blocks: [
        {
          type: 'p',
          text: 'Graphing a transformed sinusoid is the five-key-point method from the previous lesson, with every point moved. The $x$-values get compressed by $B$ and shifted by $C$; the $y$-values get stretched by $A$ and shifted by $D$.',
        },
        {
          type: 'steps',
          items: [
            { title: 'Read the dials', text: 'Write the equation as $y = A\\sin(B(x - C)) + D$ (factor out $B$!) and list $A$, $B$, $C$, $D$.' },
            { title: 'Period and quarter', text: 'Compute $P = \\frac{2\\pi}{|B|}$ and the quarter-period $\\frac{P}{4}$.' },
            { title: 'Five $x$-values', text: 'Start at $x = C$ and add $\\frac{P}{4}$ four times.' },
            { title: 'Five $y$-values', text: 'For sine with $A > 0$: midline, max, midline, min, midline — that is $D,\\ D + A,\\ D,\\ D - A,\\ D$. (For cosine: max, midline, min, midline, max.)' },
            { title: 'Plot and extend', text: 'Plot, connect smoothly, then copy the cycle left and right as needed.' },
          ],
        },
        {
          type: 'derivation',
          title: 'Graph $y = 2\\sin\\left(3\\left(x - \\frac{\\pi}{6}\\right)\\right) + 1$',
          steps: [
            { tex: 'A = 2,\\ B = 3,\\ C = \\tfrac{\\pi}{6},\\ D = 1', why: 'The equation is already in standard form, so read off the four dials.' },
            { tex: 'P = \\tfrac{2\\pi}{3}, \\quad \\tfrac{P}{4} = \\tfrac{\\pi}{6}', why: 'Period $\\frac{2\\pi}{B}$, then divide by $4$ for the spacing between key points.' },
            { tex: 'x:\\ \\tfrac{\\pi}{6},\\ \\tfrac{\\pi}{3},\\ \\tfrac{\\pi}{2},\\ \\tfrac{2\\pi}{3},\\ \\tfrac{5\\pi}{6}', why: 'Start at the phase shift $\\frac{\\pi}{6}$ and keep adding $\\frac{\\pi}{6}$.' },
            { tex: 'y:\\ 1,\\ 3,\\ 1,\\ -1,\\ 1', why: 'Midline $1$; max $1 + 2 = 3$; min $1 - 2 = -1$; in the sine order midline, max, midline, min, midline.' },
            { tex: 'x = \\tfrac{\\pi}{3}:\\ 2\\sin\\left(3\\cdot\\tfrac{\\pi}{6}\\right) + 1 = 2\\sin\\tfrac{\\pi}{2} + 1 = 3 \\;\\checkmark', why: 'Spot-check one point by plugging in: $\\frac{\\pi}{3} - \\frac{\\pi}{6} = \\frac{\\pi}{6}$, times $3$ is $\\frac{\\pi}{2}$, the angle where sine peaks.' },
          ],
          result: 'One cycle runs from $(\\frac{\\pi}{6}, 1)$ up to $(\\frac{\\pi}{3}, 3)$, down through $(\\frac{\\pi}{2}, 1)$ to $(\\frac{2\\pi}{3}, -1)$ and back to $(\\frac{5\\pi}{6}, 1)$.',
        },
        {
          type: 'graph',
          x: [-0.5, 3.6],
          y: [-1.8, 3.8],
          xStep: 'pi',
          functions: [{ expr: '2sin(3(x - pi/6)) + 1', label: '$y = 2\\sin(3(x - \\frac{\\pi}{6})) + 1$' }],
          hlines: [{ y: 1, color: 'green', label: 'y = 1' }],
          points: [
            { x: 'pi/6', y: 1, label: '(π/6, 1)' },
            { x: 'pi/3', y: 3, label: '(π/3, 3)' },
            { x: 'pi/2', y: 1 },
            { x: '2pi/3', y: -1, label: '(2π/3, −1)' },
            { x: '5pi/6', y: 1, label: '(5π/6, 1)' },
          ],
          caption: 'The five transformed key points and the midline. Everything else is the same smooth wave.',
        },
        {
          type: 'deepdive',
          title: 'Why the order of transformations matters',
          blocks: [
            {
              type: 'p',
              text: 'Starting from $y = \\sin x$, the factored form tells you a safe order: replace $x$ by $Bx$ (compress), then replace $x$ by $x - C$ (shift). Doing the shift first and then compressing would turn $\\sin(x - C)$ into $\\sin(Bx - C)$, whose shift is only $\\frac{C}{B}$. Factoring out $B$ sidesteps the whole question: in $B(x - C)$, the shift is visibly $C$.',
            },
            {
              type: 'p',
              text: 'Vertically there is a similar rule: stretch by $A$ first, then add $D$. $A\\sin(\\cdot) + D$ is not the same as $A(\\sin(\\cdot) + D)$, which would move the midline to $AD$.',
            },
          ],
        },
      ],
    },
    // Q5 fill
    {
      kind: 'fill',
      prompt: 'Read the four dials of $y = 5\\cos\\left(4\\left(x + \\frac{\\pi}{8}\\right)\\right) - 2$.',
      template: 'Amplitude: ___. Period: ___. Phase shift: ___. Midline: ___.',
      blanks: [
        { answers: ['$5$'] },
        { answers: ['$\\frac{\\pi}{2}$'] },
        { answers: ['$\\frac{\\pi}{8}$ to the left'] },
        { answers: ['$y = -2$'] },
      ],
      wordBank: ['$5$', '$-5$', '$\\frac{\\pi}{2}$', '$8\\pi$', '$\\frac{\\pi}{8}$ to the left', '$\\frac{\\pi}{8}$ to the right', '$y = -2$', '$y = 2$'],
      explanation: '$A = 5$, so the amplitude is $5$. $B = 4$, so the period is $\\frac{2\\pi}{4} = \\frac{\\pi}{2}$ (not $8\\pi$, which comes from multiplying $2\\pi \\cdot 4$). The inside is $x + \\frac{\\pi}{8} = x - \\left(-\\frac{\\pi}{8}\\right)$, so $C = -\\frac{\\pi}{8}$: a shift left. $D = -2$ puts the midline at $y = -2$.',
    },
    // 6 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Reading an equation off a graph',
      blocks: [
        {
          type: 'p',
          text: 'Going backwards — from a picture or data to an equation — is what modeling is all about. Read the vertical dials from the extremes and the horizontal dials from the spacing of features.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            '**Max and min** give $|A| = \\frac{\\max - \\min}{2}$ and $D = \\frac{\\max + \\min}{2}$.',
            '**Distance between two consecutive peaks** (or troughs) is the period $P$, so $B = \\frac{2\\pi}{P}$. Half a period separates a peak from the next trough.',
            '**Pick a starting feature.** If you can see a peak, use cosine and set $C$ to its $x$-value. If you see the wave crossing the midline going up, use sine and set $C$ there.',
          ],
        },
        {
          type: 'derivation',
          title: 'A sinusoid has a peak at $(1, 4)$ and the next trough at $(4, -2)$. Find an equation.',
          steps: [
            { tex: '|A| = \\frac{4 - (-2)}{2} = 3, \\quad D = \\frac{4 + (-2)}{2} = 1', why: 'Amplitude and midline from the max $4$ and min $-2$.' },
            { tex: '\\tfrac{P}{2} = 4 - 1 = 3 \\implies P = 6', why: 'A peak to the next trough is half a cycle.' },
            { tex: 'B = \\frac{2\\pi}{6} = \\frac{\\pi}{3}', why: 'Solve $P = \\frac{2\\pi}{B}$ for $B$.' },
            { tex: 'y = 3\\cos\\left(\\tfrac{\\pi}{3}(x - 1)\\right) + 1', why: 'We know a peak, and cosine starts at a peak, so use cosine shifted to $x = 1$ with $A = 3 > 0$.' },
            { tex: 'x = 4:\\ 3\\cos(\\pi) + 1 = -2 \\;\\checkmark', why: 'Check the trough: $\\frac{\\pi}{3}(4 - 1) = \\pi$ and $\\cos\\pi = -1$.' },
          ],
          result: '$y = 3\\cos\\left(\\frac{\\pi}{3}(x - 1)\\right) + 1$ — one of infinitely many correct equations.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Many right answers',
          text: 'The same graph has infinitely many equations: shift $C$ by any whole number of periods, or switch between sine and cosine with a quarter-period change in $C$, or use a negative $A$ with a half-period change. For example, the curve above is also $y = 3\\sin\\left(\\frac{\\pi}{3}\\left(x + \\frac{1}{2}\\right)\\right) + 1$. When you type an equation in this app, any equivalent form is accepted.',
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'On tests, show the four dials explicitly ("$A = 3$, $P = 6$ so $B = \\frac{\\pi}{3}$, …") before writing the final equation. Instructors give partial credit for each correct parameter, and an equation with one wrong dial and no work gets almost none.',
        },
      ],
    },
    // Q6 expr
    {
      kind: 'expr',
      prompt: 'Write an equation for the sinusoid shown. Its midline is $y = 1$, it crosses the midline going **up** at $x = 0$, and its first peak is at $\\left(\\frac{\\pi}{4}, 3\\right)$.',
      graph: {
        type: 'graph',
        x: [-1, 7],
        y: [-1.8, 3.8],
        xStep: 'pi',
        functions: [{ expr: '2sin(2x) + 1', color: 'blue' }],
        hlines: [{ y: 1, color: 'green' }],
        points: [
          { x: 0, y: 1, label: '(0, 1)' },
          { x: 'pi/4', y: 3, label: '(π/4, 3)' },
          { x: '3pi/4', y: -1, label: '(3π/4, −1)' },
        ],
      },
      hint: 'Midline crossing going up at $x = 0$ means a sine with no shift. A midline crossing to the next peak is a quarter of a period.',
      label: '$y =$',
      answer: '2sin(2x) + 1',
      answerTex: '2\\sin(2x) + 1',
      explanation: 'Max $3$, min $-1$: $|A| = 2$ and $D = 1$. From the midline crossing at $0$ to the peak at $\\frac{\\pi}{4}$ is a quarter period, so $P = \\pi$ and $B = \\frac{2\\pi}{\\pi} = 2$. The wave starts on the midline heading up, which is exactly how $\\sin$ starts, so $C = 0$: $y = 2\\sin(2x) + 1$. Equivalent answers such as $2\\cos\\left(2\\left(x - \\frac{\\pi}{4}\\right)\\right) + 1$ are also correct.',
    },
    // Q7 error
    {
      kind: 'error',
      prompt: 'A student describes one cycle of $y = \\sin(3x - \\pi)$. Tap the first line that is wrong.',
      lines: [
        '$B = 3$',
        'Period $= \\frac{2\\pi}{3}$',
        'Phase shift $= \\pi$ to the right',
        'One cycle runs from $x = \\pi$ to $x = \\pi + \\frac{2\\pi}{3} = \\frac{5\\pi}{3}$',
      ],
      errorLines: [3],
      explanation: 'The student read the shift straight from $3x - \\pi$ without factoring out $B$. Correctly, $3x - \\pi = 3\\left(x - \\frac{\\pi}{3}\\right)$, so the phase shift is $\\frac{\\pi}{3}$ right, and one cycle runs from $x = \\frac{\\pi}{3}$ to $x = \\frac{\\pi}{3} + \\frac{2\\pi}{3} = \\pi$. Check: at $x = \\frac{\\pi}{3}$, the input is $3 \\cdot \\frac{\\pi}{3} - \\pi = 0$, the start of a sine cycle.',
    },
    // Q8 numeric (games)
    {
      kind: 'numeric',
      prompt: 'A pickup in a game hovers with height $y(t) = 1.5 + 0.2\\sin(6\\pi t)$, where $t$ is in seconds. How many complete up-and-down bobs does it make **per second**?',
      hint: 'Frequency is $\\frac{1}{P}$, and $P = \\frac{2\\pi}{B}$. So $f = \\frac{B}{2\\pi}$.',
      answer: '3',
      unit: 'bobs per second',
      explanation: 'Here $B = 6\\pi$, so the period is $P = \\frac{2\\pi}{6\\pi} = \\frac{1}{3}$ second and the frequency is $f = \\frac{1}{P} = 3$ cycles per second (3 Hz). The $0.2$ (amplitude) and $1.5$ (resting height) don\'t affect timing. To make it bob once per second instead, a programmer would use $B = 2\\pi$.',
    },
  ],
  takeaways: [
    'Every sinusoid can be written $y = A\\sin(B(x - C)) + D$ (or with $\\cos$).',
    'Amplitude $|A| = \\frac{\\max - \\min}{2}$ and midline $D = \\frac{\\max + \\min}{2}$; a negative $A$ reflects the wave across its midline.',
    'Period $P = \\frac{2\\pi}{|B|}$: larger $B$ means faster oscillation and a shorter period. Frequency is $f = \\frac{1}{P}$.',
    'Factor out $B$ before reading the phase shift: $\\sin(Bx - k)$ is shifted $\\frac{k}{B}$, not $k$.',
    'To graph, transform the five key points; to find an equation, read the extremes for $A$ and $D$, peak spacing for $B$, and a starting feature for $C$.',
  ],
  reading: [
    {
      title: 'OpenStax Precalculus 2e — 6.1 Graphs of the Sine and Cosine Functions',
      url: 'https://openstax.org/books/precalculus-2e/pages/6-1-graphs-of-the-sine-and-cosine-functions',
      source: 'openstax',
      note: 'Covers amplitude, period, phase shift and midline with many graph-to-equation examples.',
    },
    {
      title: 'Desmos Graphing Calculator',
      url: 'https://www.desmos.com/calculator',
      source: 'desmos',
      note: 'Type y = a sin(b(x - c)) + d and let Desmos create sliders, then match any wave you find.',
    },
    {
      title: 'Wikipedia — Sine wave',
      url: 'https://en.wikipedia.org/wiki/Sine_wave',
      source: 'wikipedia',
      note: 'Amplitude, frequency, angular frequency and phase in the language of physics and signals.',
    },
  ],
};
