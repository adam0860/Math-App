import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'trig-other-graphs',
  title: 'Graphs of Tangent and the Reciprocal Functions',
  summary: 'Where the waves break: tangent, cotangent, secant and cosecant, their vertical asymptotes, and how to sketch them from sine and cosine.',
  minutes: 17,
  objectives: [
    'Explain why $y = \\tan x$ has zeros where $\\sin x = 0$ and vertical asymptotes where $\\cos x = 0$',
    'Show that tangent has period $\\pi$, and find the period and asymptotes of $y = A\\tan(Bx)$',
    'Sketch $y = \\cot x$, $y = \\sec x$ and $y = \\csc x$, using sine and cosine as guides',
    'State the domain, range, period and symmetry of all six trig functions',
    'Identify a trig graph from the location of its asymptotes and zeros',
  ],
  steps: [
    // 1 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Tangent is a ratio — so it can blow up',
      blocks: [
        {
          type: 'p',
          text: 'Sine and cosine are smooth waves that never leave $[-1, 1]$. Tangent is different, because it is a quotient:',
        },
        {
          type: 'math',
          tex: '\\tan x = \\frac{\\sin x}{\\cos x}',
        },
        {
          type: 'p',
          text: 'A fraction is zero when its numerator is zero, and undefined when its denominator is zero. So the [[tangent-function]] has **zeros** where $\\sin x = 0$, at $x = k\\pi$, and is **undefined** where $\\cos x = 0$, at $x = \\frac{\\pi}{2} + k\\pi$. Near those bad inputs the denominator is tiny, so the quotient is enormous: the graph shoots off toward $\\pm\\infty$ along a [[vertical-asymptote]].',
        },
        {
          type: 'table',
          headers: ['$x$', '$\\frac{\\pi}{4} \\approx 0.785$', '$\\frac{\\pi}{3} \\approx 1.047$', '$1.5$', '$1.57$', '$1.5707$'],
          rows: [['$\\tan x$', '$1$', '$\\sqrt{3} \\approx 1.732$', '$\\approx 14.10$', '$\\approx 1255.8$', '$\\approx 10381$']],
          caption: 'Approaching $\\frac{\\pi}{2} \\approx 1.5708$ from the left: $\\sin x \\to 1$ while $\\cos x \\to 0^+$, so $\\tan x \\to +\\infty$.',
        },
        {
          type: 'graph',
          x: [-5.5, 5.5],
          y: [-4, 4],
          xStep: 'pi',
          functions: [
            { expr: 'tan(x)', label: '$y = \\tan x$', color: 'blue' },
            { expr: 'cos(x)', label: '$y = \\cos x$ (denominator)', color: 'red', dashed: true },
          ],
          vlines: [
            { x: '-3pi/2', label: 'x = −3π/2' },
            { x: '-pi/2', label: 'x = −π/2' },
            { x: 'pi/2', label: 'x = π/2' },
            { x: '3pi/2', label: 'x = 3π/2' },
          ],
          caption: 'Every asymptote of $\\tan x$ (dashed gray) sits exactly where the red cosine curve crosses zero.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why approaching from opposite sides gives $+\\infty$ and $-\\infty$',
          text: 'Just left of $\\frac{\\pi}{2}$ (end of quadrant I), $\\sin x \\approx 1$ and $\\cos x$ is a tiny **positive** number, so $\\tan x$ is huge and positive. Just right of $\\frac{\\pi}{2}$ (start of quadrant II), $\\cos x$ is a tiny **negative** number, so $\\tan x$ is huge and negative. That sign flip is why each branch of tangent climbs from $-\\infty$ all the way to $+\\infty$.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Tangent as a slope',
          text: 'On the unit circle, $\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta} = \\frac{\\text{rise}}{\\text{run}}$ is the **slope** of the terminal side of the angle. As the angle approaches $90°$ the line becomes vertical and its slope grows without bound — the geometric reason for the asymptote.',
        },
      ],
    },
    // 2 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Tangent repeats every $\\pi$',
      blocks: [
        {
          type: 'p',
          text: 'Sine and cosine need a full turn to repeat. Tangent repeats after only half a turn. Adding $\\pi$ moves the point to the diametrically opposite side of the circle, which flips the sign of **both** coordinates — and the ratio of two numbers does not change when both flip sign.',
        },
        {
          type: 'derivation',
          title: 'Show that $\\tan(x + \\pi) = \\tan x$',
          steps: [
            { tex: '\\tan(x + \\pi) = \\frac{\\sin(x + \\pi)}{\\cos(x + \\pi)}', why: 'Definition of tangent as sine over cosine.' },
            { tex: '= \\frac{-\\sin x}{-\\cos x}', why: 'A half turn takes the point $(\\cos x, \\sin x)$ to the opposite point $(-\\cos x, -\\sin x)$.' },
            { tex: '= \\frac{\\sin x}{\\cos x} = \\tan x', why: 'The two negatives cancel.' },
          ],
          result: 'Tangent has period $\\pi$ (and no smaller shift works, since $\\tan x$ takes each value only once on $(-\\frac{\\pi}{2}, \\frac{\\pi}{2})$).',
        },
        {
          type: 'p',
          text: 'So one full branch of tangent lives between two neighbouring asymptotes, $-\\frac{\\pi}{2} < x < \\frac{\\pi}{2}$, and the rest of the graph is copies of it. The three key points of the central branch are $\\left(-\\frac{\\pi}{4}, -1\\right)$, $(0, 0)$ and $\\left(\\frac{\\pi}{4}, 1\\right)$.',
        },
        {
          type: 'table',
          headers: ['Property', '$y = \\tan x$'],
          rows: [
            ['Domain', 'all real $x$ except $x = \\frac{\\pi}{2} + k\\pi$'],
            ['Range', '$(-\\infty, \\infty)$'],
            ['Period', '$\\pi$'],
            ['Zeros', '$x = k\\pi$'],
            ['Asymptotes', '$x = \\frac{\\pi}{2} + k\\pi$'],
            ['Symmetry', 'odd: $\\tan(-x) = -\\tan x$'],
            ['Behaviour', 'increasing on every branch'],
          ],
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Why a camera\'s field of view must stay below $180°$',
          text: 'A perspective camera with vertical field of view $\\varphi$ maps a point at height $y$ and depth $z$ to the screen using $\\tan\\frac{\\varphi}{2}$: projection matrices store $\\frac{1}{\\tan(\\varphi/2)}$. As $\\varphi \\to 180°$, $\\frac{\\varphi}{2} \\to 90°$ and $\\tan\\frac{\\varphi}{2} \\to \\infty$ — the asymptote you just met. That is why FOV sliders in games stop well short of $180°$, and why very wide FOVs stretch the edges of the screen so badly.',
        },
      ],
    },
    // Q1
    {
      kind: 'truefalse',
      prompt: 'Like sine and cosine, $y = \\tan x$ has period $2\\pi$.',
      answer: false,
      explanation: 'Tangent repeats every $\\pi$: a half turn negates both $\\sin x$ and $\\cos x$, so their ratio is unchanged, $\\tan(x + \\pi) = \\frac{-\\sin x}{-\\cos x} = \\tan x$. It is true that $\\tan(x + 2\\pi) = \\tan x$ as well, but the period is the **smallest** positive shift that works, which is $\\pi$.',
    },
    // Q2
    {
      kind: 'numeric',
      prompt: 'Use the period of tangent to evaluate $\\tan\\left(\\dfrac{7\\pi}{4}\\right)$.',
      hint: 'Subtract a multiple of $\\pi$ (the period) to land in $\\left(-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right)$.',
      answer: '-1',
      explanation: '$\\frac{7\\pi}{4} - 2\\pi = -\\frac{\\pi}{4}$ (two periods of tangent), and tangent is odd, so $\\tan\\left(-\\frac{\\pi}{4}\\right) = -\\tan\\frac{\\pi}{4} = -1$. Check with the unit circle: $\\frac{7\\pi}{4}$ is in quadrant IV, where sine is negative and cosine positive, with reference angle $\\frac{\\pi}{4}$, so $\\tan = \\frac{-\\sqrt{2}/2}{\\sqrt{2}/2} = -1$.',
    },
    // 3 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Transforming tangent: $y = A\\tan(Bx)$',
      blocks: [
        {
          type: 'p',
          text: 'The transformation rules from the previous lesson still apply, with two changes. First, tangent has no maximum or minimum, so $A$ is a **vertical stretch**, not an amplitude: it moves the key points $(\\pm\\frac{\\pi}{4}, \\pm 1)$ to height $\\pm A$. Second, the base period is $\\pi$, not $2\\pi$.',
        },
        {
          type: 'theorem',
          name: 'Period and asymptotes of $y = A\\tan(Bx)$',
          tex: 'P = \\frac{\\pi}{|B|}, \\qquad \\text{asymptotes where } Bx = \\frac{\\pi}{2} + k\\pi',
        },
        {
          type: 'derivation',
          title: 'Period, asymptotes and key points of $y = 2\\tan\\left(\\frac{x}{2}\\right)$',
          steps: [
            { tex: 'A = 2,\\quad B = \\tfrac{1}{2}', why: 'Read the stretch and the speed.' },
            { tex: 'P = \\frac{\\pi}{1/2} = 2\\pi', why: 'Tangent\'s base period $\\pi$ divided by $B$. A $B$ less than $1$ stretches the graph horizontally.' },
            { tex: '\\tfrac{x}{2} = \\tfrac{\\pi}{2} + k\\pi \\implies x = \\pi + 2k\\pi', why: 'Asymptotes occur where the input of tangent hits an odd multiple of $\\frac{\\pi}{2}$; multiply both sides by $2$.' },
            { tex: '\\tfrac{x}{2} = \\tfrac{\\pi}{4} \\implies x = \\tfrac{\\pi}{2},\\quad y = 2\\tan\\tfrac{\\pi}{4} = 2', why: 'The key point where the basic tangent equals $1$ moves to $x = \\frac{\\pi}{2}$ and is stretched to height $2$.' },
          ],
          result: 'The central branch runs between asymptotes $x = -\\pi$ and $x = \\pi$, through $(-\\frac{\\pi}{2}, -2)$, $(0, 0)$ and $(\\frac{\\pi}{2}, 2)$.',
        },
        {
          type: 'graph',
          x: [-6.5, 6.5],
          y: [-5, 5],
          xStep: 'pi',
          functions: [
            { expr: 'tan(x)', label: '$y = \\tan x$', color: 'gray', dashed: true },
            { expr: 'a*tan(b*x)', label: '$y = A\\tan(Bx)$', color: 'blue' },
          ],
          vlines: [
            { x: '-3pi/(2b)', color: 'orange' },
            { x: '-pi/(2b)', color: 'orange' },
            { x: 'pi/(2b)', color: 'orange' },
            { x: '3pi/(2b)', color: 'orange' },
          ],
          points: [
            { x: 'pi/(4b)', y: 'a', color: 'blue' },
            { x: '-pi/(4b)', y: '-a', color: 'blue' },
          ],
          sliders: [
            { name: 'a', min: -3, max: 3, step: 0.1, value: 2, label: '$A$' },
            { name: 'b', min: 0.5, max: 3, step: 0.05, value: 0.5, label: '$B$' },
          ],
          readouts: [
            { label: 'period $\\frac{\\pi}{B} =$', expr: 'pi/b' },
            { label: 'first asymptote $x = \\frac{\\pi}{2B} =$', expr: 'pi/(2b)' },
          ],
          caption: 'The orange asymptotes move with $B$; the blue dots at $x = \\pm\\frac{\\pi}{4B}$ sit at height $\\pm A$. A negative $A$ flips each branch so it decreases.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Don\'t borrow sine\'s $2\\pi$',
          text: 'The most common error with tangent graphs is writing $P = \\frac{2\\pi}{|B|}$ out of habit. That formula is for sine, cosine, secant and cosecant. Tangent and cotangent use $\\frac{\\pi}{|B|}$.',
        },
      ],
    },
    // Q3
    {
      kind: 'numeric',
      prompt: 'Find the vertical asymptotes of $y = \\tan(2x)$ that lie in the open interval $(0, \\pi)$. Enter both, separated by a comma.',
      hint: 'Solve $2x = \\frac{\\pi}{2} + k\\pi$ for $x$, then keep the solutions between $0$ and $\\pi$.',
      label: '$x =$',
      answer: ['pi/4', '3pi/4'],
      answerTex: '\\frac{\\pi}{4},\\ \\frac{3\\pi}{4}',
      explanation: 'Asymptotes occur where $\\cos(2x) = 0$, i.e. $2x = \\frac{\\pi}{2} + k\\pi$, so $x = \\frac{\\pi}{4} + \\frac{k\\pi}{2}$. With $k = 0$ and $k = 1$ we get $\\frac{\\pi}{4}$ and $\\frac{3\\pi}{4}$; $k = 2$ gives $\\frac{5\\pi}{4} > \\pi$. Their spacing, $\\frac{\\pi}{2}$, is exactly the period $\\frac{\\pi}{2}$ — consecutive asymptotes are always one period apart.',
    },
    // Q4
    {
      kind: 'mcq',
      prompt: 'What is the period of $y = 3\\tan(4x)$?',
      options: [
        {
          text: '$\\frac{\\pi}{2}$',
          why: 'This is $\\frac{2\\pi}{4}$ — the sine/cosine formula. Tangent\'s base period is $\\pi$, not $2\\pi$.',
        },
        {
          text: '$4\\pi$',
          why: 'Multiplying by $B$ instead of dividing gets the effect backwards: a larger $B$ squeezes the graph.',
        },
        {
          text: '$\\frac{\\pi}{4}$',
          correct: true,
          why: '$P = \\frac{\\pi}{|B|} = \\frac{\\pi}{4}$.',
        },
        {
          text: '$\\frac{3\\pi}{4}$',
          why: 'The factor $3$ is a vertical stretch; it has no effect on the period.',
        },
      ],
      explanation: 'For $y = A\\tan(Bx)$, the period is $\\frac{\\pi}{|B|}$, so here it is $\\frac{\\pi}{4}$. The $3$ stretches each branch vertically (the point where $\\tan$ would be $1$ now has height $3$) but leaves the asymptotes where they were.',
    },
    // 4 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Cotangent: tangent\'s mirror image',
      blocks: [
        {
          type: 'p',
          text: 'The [[cotangent]] flips the fraction: $\\cot x = \\frac{\\cos x}{\\sin x}$. Every feature of tangent swaps roles. Cotangent has zeros where $\\cos x = 0$ ($x = \\frac{\\pi}{2} + k\\pi$) and asymptotes where $\\sin x = 0$ ($x = k\\pi$). Its period is still $\\pi$, by the same half-turn argument.',
        },
        {
          type: 'graph',
          x: [-5.5, 5.5],
          y: [-4, 4],
          xStep: 'pi',
          functions: [
            { expr: 'cot(x)', label: '$y = \\cot x$', color: 'purple' },
            { expr: 'tan(x)', label: '$y = \\tan x$', color: 'blue', dashed: true },
          ],
          vlines: [
            { x: '-pi', label: 'x = −π', color: 'purple' },
            { x: 0, label: 'x = 0', color: 'purple' },
            { x: 'pi', label: 'x = π', color: 'purple' },
          ],
          caption: 'Cotangent\'s asymptotes (purple) are at the multiples of $\\pi$ — exactly where tangent has its zeros. Each branch of $\\cot x$ **decreases** from $+\\infty$ to $-\\infty$.',
        },
        {
          type: 'p',
          text: 'Where tangent is large, cotangent is small, and vice versa: wherever both are defined, $\\cot x = \\frac{1}{\\tan x}$. Both curves equal $1$ at $x = \\frac{\\pi}{4}$, the only place in the first quadrant where sine and cosine are equal.',
        },
        {
          type: 'deepdive',
          title: 'Cotangent as a transformed tangent',
          blocks: [
            {
              type: 'p',
              text: 'The graphs look like reflections of each other, and they are. Using the quarter-turn shift from the sine and cosine lesson, $\\sin(x - \\frac{\\pi}{2}) = -\\cos x$ and $\\cos(x - \\frac{\\pi}{2}) = \\sin x$, so',
            },
            { type: 'math', tex: '\\tan\\left(x - \\tfrac{\\pi}{2}\\right) = \\frac{-\\cos x}{\\sin x} = -\\cot x \\quad\\implies\\quad \\cot x = -\\tan\\left(x - \\tfrac{\\pi}{2}\\right)' },
            {
              type: 'p',
              text: 'So the cotangent graph is the tangent graph shifted $\\frac{\\pi}{2}$ right and reflected across the $x$-axis.',
            },
          ],
        },
      ],
    },
    // Q5
    {
      kind: 'numeric',
      prompt: 'Find all **zeros** of $y = \\cot x$ in the interval $[0, 2\\pi]$. Enter them separated by commas.',
      hint: '$\\cot x = \\frac{\\cos x}{\\sin x}$ is zero when its numerator is zero (and its denominator is not).',
      label: '$x =$',
      answer: ['pi/2', '3pi/2'],
      answerTex: '\\frac{\\pi}{2},\\ \\frac{3\\pi}{2}',
      explanation: 'A fraction is zero when its numerator is zero: $\\cos x = 0$ at $x = \\frac{\\pi}{2}$ and $x = \\frac{3\\pi}{2}$ in $[0, 2\\pi]$, and $\\sin x = \\pm 1 \\ne 0$ there. The points $0$, $\\pi$ and $2\\pi$ are not zeros — they are asymptotes, because there the *denominator* $\\sin x$ is zero.',
    },
    // 5 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Cosecant and secant: reciprocals of the waves',
      blocks: [
        {
          type: 'p',
          text: 'The [[cosecant]] and [[secant-function]] are reciprocals of the waves: $\\csc x = \\frac{1}{\\sin x}$ and $\\sec x = \\frac{1}{\\cos x}$. The easiest way to graph them is to sketch the wave first, lightly, and let the reciprocal grow out of it.',
        },
        {
          type: 'steps',
          items: [
            { title: 'Sketch the guide', text: 'Lightly draw $y = \\sin x$ (for $\\csc$) or $y = \\cos x$ (for $\\sec$).' },
            { title: 'Asymptotes at the zeros', text: 'Wherever the guide crosses $0$, its reciprocal is undefined: draw a vertical asymptote.' },
            { title: 'Touch at the peaks', text: 'Where the guide is $1$ or $-1$, the reciprocal is also $1$ or $-1$ (since $\\frac{1}{1} = 1$). The graphs touch there.' },
            { title: 'Draw U-shapes', text: 'Between asymptotes, the reciprocal opens away from the axis: up above each arch, down below each trough.' },
          ],
        },
        {
          type: 'graph',
          x: [-7, 7],
          y: [-4, 4],
          xStep: 'pi',
          functions: [
            { expr: 'sin(x)', label: '$y = \\sin x$ (guide)', color: 'gray', dashed: true },
            { expr: 'csc(x)', label: '$y = \\csc x$', color: 'green' },
          ],
          vlines: [{ x: '-2pi' }, { x: '-pi' }, { x: 0 }, { x: 'pi' }, { x: '2pi' }],
          points: [
            { x: 's', y: 'sin(s)', color: 'gray' },
            { x: 's', y: 'csc(s)', color: 'green' },
          ],
          segments: [{ from: ['s', 'sin(s)'], to: ['s', 'csc(s)'], color: 'orange', dashed: true }],
          sliders: [{ name: 's', min: 0.05, max: 3.09, step: 0.01, value: 0.5, label: '$x$' }],
          readouts: [
            { label: '$\\sin x =$', expr: 'sin(s)' },
            { label: '$\\csc x = \\frac{1}{\\sin x} =$', expr: 'csc(s)' },
          ],
          caption: 'Slide $x$ across the first arch. When $\\sin x$ is small, $\\csc x$ is huge; at $x = \\frac{\\pi}{2}$ both equal $1$. Asymptotes sit at every zero of sine, $x = k\\pi$.',
        },
        {
          type: 'p',
          text: 'Because $|\\sin x| \\le 1$, its reciprocal satisfies $|\\csc x| \\ge 1$. So the range of cosecant (and of secant) is $(-\\infty, -1] \\cup [1, \\infty)$: the graph **never** enters the band between $-1$ and $1$. The period is $2\\pi$, inherited from the wave.',
        },
        {
          type: 'derivation',
          title: 'Key features of $y = 3\\csc(2x)$ on $(0, \\pi)$',
          steps: [
            { tex: '\\text{guide: } y = 3\\sin(2x),\\quad P = \\tfrac{2\\pi}{2} = \\pi', why: 'Sketch the corresponding sine wave; cosecant has the same period as sine, $\\frac{2\\pi}{|B|}$.' },
            { tex: '\\sin(2x) = 0 \\implies x = \\tfrac{k\\pi}{2}', why: 'Asymptotes at the zeros of the guide: $2x = k\\pi$. In $[0, \\pi]$ these are $0$, $\\frac{\\pi}{2}$ and $\\pi$.' },
            { tex: 'x = \\tfrac{\\pi}{4}:\\ 3\\csc\\tfrac{\\pi}{2} = 3', why: 'The guide peaks at $3$ here, so the upper U-shape bottoms out at $(\\frac{\\pi}{4}, 3)$.' },
            { tex: 'x = \\tfrac{3\\pi}{4}:\\ 3\\csc\\tfrac{3\\pi}{2} = -3', why: 'The guide has a trough at $-3$, so the lower U-shape tops out at $(\\frac{3\\pi}{4}, -3)$.' },
          ],
          result: 'An upward branch on $(0, \\frac{\\pi}{2})$ with lowest point $(\\frac{\\pi}{4}, 3)$, and a downward branch on $(\\frac{\\pi}{2}, \\pi)$ with highest point $(\\frac{3\\pi}{4}, -3)$. Range: $(-\\infty, -3] \\cup [3, \\infty)$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the U-shapes touch the wave instead of crossing it',
          text: 'At a peak of the guide, $\\sin x = 1$ and its reciprocal is also $1$. Move away from the peak and $\\sin x$ shrinks below $1$, so $\\frac{1}{\\sin x}$ grows above $1$. The two graphs meet at exactly one point and bend away from each other — the wave curving down, its reciprocal curving up.',
        },
      ],
    },
    // Q6 fill
    {
      kind: 'fill',
      prompt: 'Complete the facts about $y = \\sec x$.',
      template: '$\\sec x$ has vertical asymptotes wherever ___ . Its range is ___, and its period is ___.',
      blanks: [{ answers: ['$\\cos x = 0$'] }, { answers: ['$(-\\infty, -1] \\cup [1, \\infty)$'] }, { answers: ['$2\\pi$'] }],
      wordBank: ['$\\cos x = 0$', '$\\sin x = 0$', '$(-\\infty, -1] \\cup [1, \\infty)$', '$[-1, 1]$', '$2\\pi$', '$\\pi$'],
      explanation: '$\\sec x = \\frac{1}{\\cos x}$ is undefined exactly where its denominator $\\cos x$ is $0$ — at $x = \\frac{\\pi}{2} + k\\pi$, the same places as tangent. Since $|\\cos x| \\le 1$, the reciprocal has $|\\sec x| \\ge 1$, so the range is everything *outside* $(-1, 1)$. It repeats when cosine does: every $2\\pi$. ($\\pi$ is the period of tangent and cotangent only.)',
    },
    // Q7 numeric
    {
      kind: 'numeric',
      prompt: 'Evaluate $\\sec\\left(\\dfrac{2\\pi}{3}\\right)$.',
      hint: 'Find $\\cos\\frac{2\\pi}{3}$ first (quadrant II, reference angle $\\frac{\\pi}{3}$), then take the reciprocal.',
      answer: '-2',
      explanation: '$\\frac{2\\pi}{3}$ is in quadrant II with reference angle $\\frac{\\pi}{3}$, so $\\cos\\frac{2\\pi}{3} = -\\frac{1}{2}$. Then $\\sec\\frac{2\\pi}{3} = \\frac{1}{-1/2} = -2$. The point $(\\frac{2\\pi}{3}, -2)$ lies on the downward U-shape between the asymptotes $x = \\frac{\\pi}{2}$ and $x = \\frac{3\\pi}{2}$, which tops out at $(\\pi, -1)$ where cosine has its trough.',
    },
    // 6 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'All six graphs at a glance',
      blocks: [
        {
          type: 'p',
          text: 'Here is the whole family. Notice the [[trig-asymptote-spacing|asymptote pattern]]: anything with $\\cos x$ in a denominator ($\\tan$, $\\sec$) has asymptotes at $x = \\frac{\\pi}{2} + k\\pi$; anything with $\\sin x$ in a denominator ($\\cot$, $\\csc$) has them at $x = k\\pi$.',
        },
        {
          type: 'table',
          headers: ['Function', 'Domain excludes', 'Range', 'Period', 'Symmetry'],
          rows: [
            ['$\\sin x$', 'nothing', '$[-1, 1]$', '$2\\pi$', 'odd'],
            ['$\\cos x$', 'nothing', '$[-1, 1]$', '$2\\pi$', 'even'],
            ['$\\tan x$', '$\\frac{\\pi}{2} + k\\pi$', '$(-\\infty, \\infty)$', '$\\pi$', 'odd'],
            ['$\\cot x$', '$k\\pi$', '$(-\\infty, \\infty)$', '$\\pi$', 'odd'],
            ['$\\sec x$', '$\\frac{\\pi}{2} + k\\pi$', '$(-\\infty, -1] \\cup [1, \\infty)$', '$2\\pi$', 'even'],
            ['$\\csc x$', '$k\\pi$', '$(-\\infty, -1] \\cup [1, \\infty)$', '$2\\pi$', 'odd'],
          ],
          caption: 'Each reciprocal inherits its symmetry from the function it flips: $\\sec$ from $\\cos$ (even), $\\csc$ from $\\sin$ (odd).',
        },
        {
          type: 'graph',
          x: [-7, 7],
          y: [-4, 4],
          xStep: 'pi',
          functions: [
            { expr: 'cos(x)', label: '$y = \\cos x$ (guide)', color: 'gray', dashed: true },
            { expr: 'sec(x)', label: '$y = \\sec x$', color: 'red' },
          ],
          vlines: [{ x: '-3pi/2' }, { x: '-pi/2' }, { x: 'pi/2' }, { x: '3pi/2' }],
          hlines: [{ y: 1, color: 'green' }, { y: -1, color: 'green' }],
          caption: 'Secant grows out of cosine: asymptotes at cosine\'s zeros, U-shapes touching each peak and trough, and nothing between the green lines $y = \\pm 1$.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Identifying a mystery graph',
          text: 'Ask three questions. (1) Does it have asymptotes? If not, it is a sine or cosine. (2) Does it pass through the band $-1 < y < 1$? If yes, it is a tangent or cotangent; if no, a secant or cosecant. (3) Where are the asymptotes, or what happens at $x = 0$? A graph through the origin is $\\tan$ (or $\\sin$); an asymptote at $x = 0$ means $\\cot$ or $\\csc$; a U touching $(0, 1)$ means $\\sec$.',
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'Graphing questions on these four functions are graded mostly on the asymptotes: correct locations, drawn as dashed vertical lines, and branches that approach them without crossing. Label at least one key point per branch, such as $(\\frac{\\pi}{4}, 1)$ for tangent or the vertex of each U for secant.',
        },
      ],
    },
    // Q8 mcq with graph
    {
      kind: 'mcq',
      prompt: 'Which function has the graph shown? (Dashed lines are asymptotes.)',
      graph: {
        type: 'graph',
        x: [-5.5, 5.5],
        y: [-4, 4],
        xStep: 'pi',
        functions: [{ expr: 'csc(x)', color: 'blue' }],
        vlines: [{ x: '-pi' }, { x: 0 }, { x: 'pi' }],
      },
      options: [
        {
          text: '$y = \\sec x$',
          why: 'Secant is defined at $x = 0$ (it equals $1$ there); its asymptotes are at $\\pm\\frac{\\pi}{2}$, not at $0$ and $\\pm\\pi$.',
        },
        {
          text: '$y = \\cot x$',
          why: 'Cotangent does have asymptotes at multiples of $\\pi$, but its branches sweep through every $y$-value, including the band between $-1$ and $1$.',
        },
        {
          text: '$y = \\tan x$',
          why: 'Tangent passes through the origin and has asymptotes at $\\pm\\frac{\\pi}{2}$.',
        },
        {
          text: '$y = \\csc x$',
          correct: true,
          why: 'Asymptotes at $x = k\\pi$ (the zeros of sine), U-shapes touching $y = 1$ at $\\frac{\\pi}{2}$ and $y = -1$ at $-\\frac{\\pi}{2}$, and nothing inside $(-1, 1)$.',
        },
      ],
      explanation: 'The graph avoids the band $-1 < y < 1$, so it is a secant or cosecant. Its asymptotes are at $x = 0, \\pm\\pi$ — the zeros of $\\sin x$ — so it is $\\csc x = \\frac{1}{\\sin x}$. The branch above the axis on $(0, \\pi)$ matches sine being positive there.',
    },
    // Q9 error
    {
      kind: 'error',
      prompt: 'A student finds the vertical asymptotes of $y = \\sec(2x)$ in $[0, \\pi]$. Tap the first line that is wrong.',
      lines: [
        '$\\sec(2x) = \\frac{1}{\\cos(2x)}$',
        'Asymptotes occur where $\\cos(2x) = 0$',
        '$2x = \\frac{\\pi}{2} + k\\pi$',
        '$x = \\pi + 2k\\pi$',
        'So the only asymptote in $[0, \\pi]$ is $x = \\pi$',
      ],
      errorLines: [4],
      explanation: 'To solve $2x = \\frac{\\pi}{2} + k\\pi$ for $x$ you must **divide** by $2$, giving $x = \\frac{\\pi}{4} + \\frac{k\\pi}{2}$; the student multiplied instead. In $[0, \\pi]$ the asymptotes are $x = \\frac{\\pi}{4}$ and $x = \\frac{3\\pi}{4}$. Sanity check: $y = \\sec(2x)$ has period $\\frac{2\\pi}{2} = \\pi$ and two asymptotes per period, so there must be two of them in an interval of length $\\pi$.',
    },
  ],
  takeaways: [
    '$\\tan x = \\frac{\\sin x}{\\cos x}$ has zeros at $x = k\\pi$ and vertical asymptotes at $x = \\frac{\\pi}{2} + k\\pi$; $\\cot x$ swaps the two.',
    'Tangent and cotangent have period $\\pi$; for $y = A\\tan(Bx)$ the period is $\\frac{\\pi}{|B|}$ and $A$ is a vertical stretch, not an amplitude.',
    'Graph $\\sec x$ and $\\csc x$ from their guide waves: asymptotes at the guide\'s zeros, U-shapes touching its peaks and troughs.',
    'Secant and cosecant have range $(-\\infty, -1] \\cup [1, \\infty)$ and period $2\\pi$; tangent and cotangent have range $(-\\infty, \\infty)$.',
    'Functions with $\\cos x$ in the denominator ($\\tan$, $\\sec$) break at $\\frac{\\pi}{2} + k\\pi$; those with $\\sin x$ ($\\cot$, $\\csc$) break at $k\\pi$.',
  ],
  reading: [
    {
      title: 'OpenStax Precalculus 2e — 6.2 Graphs of the Other Trigonometric Functions',
      url: 'https://openstax.org/books/precalculus-2e/pages/6-2-graphs-of-the-other-trigonometric-functions',
      source: 'openstax',
      note: 'Worked examples of transformed tangent, secant and cosecant graphs with their asymptotes.',
    },
    {
      title: 'Paul\'s Online Notes — Review: Trig Functions',
      url: 'https://tutorial.math.lamar.edu/Classes/CalcI/TrigFcns.aspx',
      source: 'paul',
      note: 'A compact review of all six graphs from the start of a Calculus I course — what you will be expected to know.',
    },
    {
      title: 'Wikipedia — Trigonometric functions',
      url: 'https://en.wikipedia.org/wiki/Trigonometric_functions',
      source: 'wikipedia',
      note: 'Plots of all six functions side by side, with their domains, ranges and periods.',
    },
  ],
};
