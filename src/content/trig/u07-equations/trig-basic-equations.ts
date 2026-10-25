import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'trig-basic-equations',
  title: 'Solving Basic Trig Equations',
  summary: 'Equations like sin x = 1/2 have infinitely many solutions. Learn to find them all, write the general solution, and list those in an interval.',
  minutes: 18,
  objectives: [
    'Explain why a trig equation usually has infinitely many solutions',
    'Solve $\\sin x = k$, $\\cos x = k$ and $\\tan x = k$ on $[0, 2\\pi)$ using reference angles and quadrant signs',
    'Write the general solution of a basic trig equation using the period',
    'Isolate the trig function in a linear equation such as $2\\sin x + \\sqrt{3} = 0$',
    'Solve equations with non-special values using inverse trig functions and symmetry',
  ],
  steps: [
    {
      kind: 'concept',
      title: 'One equation, infinitely many answers',
      blocks: [
        {
          type: 'p',
          text: 'In algebra, $2x - 1 = 0$ has one solution. Now consider $\\sin x = \\frac{1}{2}$. You know $x = \\frac{\\pi}{6}$ works. So does $\\frac{5\\pi}{6}$ — and because sine repeats every $2\\pi$, so do $\\frac{\\pi}{6} + 2\\pi$, $\\frac{5\\pi}{6} - 2\\pi$, and infinitely many others.',
        },
        {
          type: 'graph',
          x: [-7, 13],
          y: [-1.8, 1.8],
          xStep: 'pi',
          functions: [{ expr: 'sin(x)', label: '$y = \\sin x$' }],
          hlines: [{ y: 'k', color: 'red', label: 'y = k' }],
          points: [
            { x: 'arcsin(k)', y: 'k', label: 'arcsin k', color: 'red' },
            { x: 'pi - arcsin(k)', y: 'k', label: 'π − arcsin k', color: 'red' },
          ],
          sliders: [{ name: 'k', min: -1, max: 1, step: 0.05, value: 0.5, label: '$k$' }],
          readouts: [
            { label: '$\\arcsin k \\approx$', expr: 'arcsin(k)', digits: 4 },
            { label: '$\\pi - \\arcsin k \\approx$', expr: 'pi - arcsin(k)', digits: 4 },
          ],
          caption: 'The line $y = k$ crosses each full wave twice (once for $k = \\pm 1$). The two marked solutions repeat every $2\\pi$ in both directions.',
        },
        {
          type: 'p',
          text: 'The [[inverse-sine|arcsine]] function from the previous unit returns just *one* of these solutions, $\\arcsin\\frac{1}{2} = \\frac{\\pi}{6}$. Solving an equation means finding **all** of them. The strategy is always the same:',
        },
        {
          type: 'steps',
          items: [
            { title: 'Solve in one period', text: 'Find every solution in one full cycle, usually $[0, 2\\pi)$, using reference angles and quadrant signs (or the graph).' },
            { title: 'Add the period', text: 'Every other solution differs from one of those by a whole number of periods: add $2\\pi n$ for sine and cosine, $\\pi n$ for tangent, where $n$ is any [[integer]].' },
          ],
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why adding the period catches everything',
          text: 'If $x$ solves $\\sin x = k$, then so does $x + 2\\pi n$, because $\\sin(x + 2\\pi n) = \\sin x$. Conversely, any solution can be shifted by whole periods into $[0, 2\\pi)$, where it must be one of the solutions you already found. So the list "one-period solutions $+\\,2\\pi n$" is complete and has no extras.',
        },
      ],
    },
    {
      kind: 'concept',
      title: 'Solving $\\sin x = k$',
      blocks: [
        {
          type: 'p',
          text: 'On the unit circle, $\\sin x$ is the $y$-coordinate. A horizontal line $y = k$ (with $-1 < k < 1$) meets the circle in **two** points, mirror images across the $y$-axis. If one is at angle $\\alpha$, the mirror image is at $\\pi - \\alpha$.',
        },
        {
          type: 'derivation',
          title: 'Solve $\\sin x = \\frac{\\sqrt{3}}{2}$ on $[0, 2\\pi)$',
          steps: [
            { tex: '\\sin\\alpha = \\tfrac{\\sqrt{3}}{2} \\implies \\alpha = \\tfrac{\\pi}{3}', why: 'Find the [[reference-angle]]: the acute angle whose sine is $\\frac{\\sqrt{3}}{2}$, from the 30-60-90 triangle.' },
            { tex: '\\sin x > 0 \\text{ in Quadrants I and II}', why: '$k$ is positive, and the $y$-coordinate is positive in the top half of the circle.' },
            { tex: 'x = \\tfrac{\\pi}{3} \\quad\\text{or}\\quad x = \\pi - \\tfrac{\\pi}{3} = \\tfrac{2\\pi}{3}', why: 'The Quadrant I angle is $\\alpha$ itself; the Quadrant II angle with reference angle $\\alpha$ is $\\pi - \\alpha$.' },
          ],
          result: 'On $[0, 2\\pi)$: $x = \\frac{\\pi}{3}$ or $x = \\frac{2\\pi}{3}$.',
        },
        {
          type: 'definition',
          term: 'General solution',
          text: 'The [[general-solution]] of a trig equation is a formula that lists *every* solution, using an arbitrary integer $n$. For $\\sin x = \\frac{\\sqrt{3}}{2}$:\n\n$$x = \\tfrac{\\pi}{3} + 2\\pi n \\quad\\text{or}\\quad x = \\tfrac{2\\pi}{3} + 2\\pi n, \\qquad n \\in \\mathbb{Z}.$$',
        },
        {
          type: 'theorem',
          name: 'General solution of $\\sin x = k$ ($-1 \\le k \\le 1$)',
          tex: 'x = \\arcsin k + 2\\pi n \\quad\\text{or}\\quad x = \\pi - \\arcsin k + 2\\pi n',
          text: 'When $k = 1$, $-1$ or $0$ the cases simplify: $\\sin x = 1 \\iff x = \\frac{\\pi}{2} + 2\\pi n$; $\\sin x = -1 \\iff x = \\frac{3\\pi}{2} + 2\\pi n$; $\\sin x = 0 \\iff x = \\pi n$. If $|k| > 1$ there is **no** solution, since sine never leaves $[-1, 1]$.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Negative $k$: use the reference angle, then the quadrants',
          text: 'For $\\sin x = -\\frac{1}{2}$, the formula with $\\arcsin(-\\frac{1}{2}) = -\\frac{\\pi}{6}$ works but produces negative angles. On $[0, 2\\pi)$ it is cleaner to take the reference angle $\\frac{\\pi}{6}$ and place it in the quadrants where sine is negative — III and IV: $\\pi + \\frac{\\pi}{6}$ and $2\\pi - \\frac{\\pi}{6}$.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'Solve $\\sin x = -\\frac{1}{2}$ for $x$ in $[0, 2\\pi)$. Enter all solutions, separated by commas.',
      label: '$x =$',
      answer: ['7pi/6', '11pi/6'],
      answerTex: '\\frac{7\\pi}{6},\\ \\frac{11\\pi}{6}',
      hint: 'The reference angle is $\\frac{\\pi}{6}$. In which two quadrants is sine negative?',
      explanation: 'The reference angle for $\\frac{1}{2}$ is $\\frac{\\pi}{6}$. Sine is negative in Quadrants III and IV, so $x = \\pi + \\frac{\\pi}{6} = \\frac{7\\pi}{6}$ and $x = 2\\pi - \\frac{\\pi}{6} = \\frac{11\\pi}{6}$. Notice that $\\arcsin(-\\frac{1}{2}) = -\\frac{\\pi}{6}$ is coterminal with $\\frac{11\\pi}{6}$ — it is a valid solution, just not in the requested interval.',
    },
    {
      kind: 'concept',
      title: 'Solving $\\cos x = k$ and $\\tan x = k$',
      blocks: [
        {
          type: 'p',
          text: 'Cosine is the $x$-coordinate on the unit circle. A vertical line $x = k$ meets the circle in two points, mirror images across the $x$-axis, at angles $\\pm\\alpha$. On $[0, 2\\pi)$ the second one is written $2\\pi - \\alpha$.',
        },
        {
          type: 'derivation',
          title: 'Solve $\\cos x = -\\frac{\\sqrt{2}}{2}$ on $[0, 2\\pi)$',
          steps: [
            { tex: '\\cos\\alpha = \\tfrac{\\sqrt{2}}{2} \\implies \\alpha = \\tfrac{\\pi}{4}', why: 'Reference angle from the 45-45-90 triangle (ignore the sign for now).' },
            { tex: '\\cos x < 0 \\text{ in Quadrants II and III}', why: 'The $x$-coordinate is negative on the left half of the circle.' },
            { tex: 'x = \\pi - \\tfrac{\\pi}{4} = \\tfrac{3\\pi}{4}', why: 'Quadrant II angle with reference angle $\\frac{\\pi}{4}$.' },
            { tex: 'x = \\pi + \\tfrac{\\pi}{4} = \\tfrac{5\\pi}{4}', why: 'Quadrant III angle with reference angle $\\frac{\\pi}{4}$.' },
          ],
          result: 'On $[0, 2\\pi)$: $x = \\frac{3\\pi}{4}$ or $\\frac{5\\pi}{4}$. General solution: $x = \\pm\\frac{3\\pi}{4} + 2\\pi n$.',
        },
        {
          type: 'p',
          text: 'Tangent is different in one crucial way: its period is $\\pi$, not $2\\pi$. On $[0, 2\\pi)$ the equation $\\tan x = k$ has two solutions exactly $\\pi$ apart (tangent is positive in Quadrants I and III, negative in II and IV), and the general solution needs only **one** family.',
        },
        {
          type: 'table',
          headers: ['equation', 'general solution ($n \\in \\mathbb{Z}$)', 'solutions per $2\\pi$'],
          rows: [
            ['$\\sin x = k$, $|k| < 1$', '$x = \\arcsin k + 2\\pi n$ or $x = \\pi - \\arcsin k + 2\\pi n$', '2'],
            ['$\\cos x = k$, $|k| < 1$', '$x = \\pm\\arccos k + 2\\pi n$', '2'],
            ['$\\tan x = k$, any $k$', '$x = \\arctan k + \\pi n$', '2'],
          ],
          caption: 'Each formula starts from the principal value and adds the symmetry partner (if any) and the period.',
        },
        {
          type: 'graph',
          x: [-1.5, 7.5],
          y: [-4, 4],
          xStep: 'pi',
          functions: [{ expr: 'tan(x)', label: '$y = \\tan x$' }],
          hlines: [{ y: 1, color: 'red', label: 'y = 1' }],
          points: [
            { x: 'pi/4', y: 1, label: 'π/4' },
            { x: '5pi/4', y: 1, label: '5π/4' },
          ],
          vlines: [{ x: 'pi/2' }, { x: '3pi/2' }],
          caption: '$\\tan x = 1$ has one solution per branch, and branches repeat every $\\pi$: $x = \\frac{\\pi}{4} + \\pi n$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why $\\pm$ works for cosine',
          text: 'Cosine is even: $\\cos(-\\alpha) = \\cos\\alpha$. Reflecting a point of the unit circle across the $x$-axis negates its angle but keeps its $x$-coordinate. So if $\\arccos k$ is one solution, $-\\arccos k$ is the other, and $\\pm\\arccos k + 2\\pi n$ covers both families in one line.',
        },
      ],
    },
    {
      kind: 'mcq',
      prompt: 'Which is the general solution of $\\tan x = 1$?',
      options: [
        { text: '$x = \\frac{\\pi}{4} + 2\\pi n$', why: 'This misses $\\frac{5\\pi}{4}$, where $\\tan\\frac{5\\pi}{4} = \\frac{-\\sqrt{2}/2}{-\\sqrt{2}/2} = 1$. The period of tangent is $\\pi$, not $2\\pi$.' },
        { text: '$x = \\pm\\frac{\\pi}{4} + 2\\pi n$', why: 'The $\\pm$ pattern belongs to cosine. $\\tan(-\\frac{\\pi}{4}) = -1$, not $1$.' },
        { text: '$x = \\frac{\\pi}{4} + \\pi n$', correct: true, why: 'Tangent has period $\\pi$, so one family with step $\\pi$ gives $\\dots, -\\frac{3\\pi}{4}, \\frac{\\pi}{4}, \\frac{5\\pi}{4}, \\dots$ — every solution.' },
        { text: '$x = \\frac{\\pi}{4} + 2\\pi n$ or $x = \\frac{3\\pi}{4} + 2\\pi n$', why: 'That is the sine pattern ($\\alpha$ and $\\pi - \\alpha$). $\\tan\\frac{3\\pi}{4} = -1$.' },
      ],
      explanation: '$\\arctan 1 = \\frac{\\pi}{4}$, and since tangent repeats every $\\pi$, all solutions are $\\frac{\\pi}{4} + \\pi n$. On $[0, 2\\pi)$ that gives $\\frac{\\pi}{4}$ and $\\frac{5\\pi}{4}$ — one in Quadrant I and one in Quadrant III, where sine and cosine have the same sign.',
    },
    {
      kind: 'numeric',
      prompt: 'Solve $\\cos x = \\frac{1}{2}$ for $x$ in $[0, 2\\pi)$. Enter all solutions, separated by commas.',
      label: '$x =$',
      answer: ['pi/3', '5pi/3'],
      answerTex: '\\frac{\\pi}{3},\\ \\frac{5\\pi}{3}',
      hint: 'Cosine is positive in Quadrants I and IV.',
      explanation: 'The reference angle is $\\frac{\\pi}{3}$ because $\\cos\\frac{\\pi}{3} = \\frac{1}{2}$. Cosine is positive in Quadrants I and IV, giving $x = \\frac{\\pi}{3}$ and $x = 2\\pi - \\frac{\\pi}{3} = \\frac{5\\pi}{3}$. These match the general solution $\\pm\\frac{\\pi}{3} + 2\\pi n$: take $n = 0$ with $+$ and $n = 1$ with $-$.',
    },
    {
      kind: 'error',
      prompt: 'A student solves $2\\cos x + 1 = 0$ on $[0, 2\\pi)$. Tap the first line that is wrong.',
      lines: [
        '$2\\cos x = -1$, so $\\cos x = -\\frac{1}{2}$',
        'The reference angle is $\\frac{\\pi}{3}$',
        'Cosine is negative in Quadrants II and IV',
        'So $x = \\pi - \\frac{\\pi}{3} = \\frac{2\\pi}{3}$ and $x = 2\\pi - \\frac{\\pi}{3} = \\frac{5\\pi}{3}$',
      ],
      errorLines: [3],
      explanation: 'Cosine is the $x$-coordinate, which is negative on the **left** half of the circle: Quadrants II and III (the student used the tangent pattern). The correct solutions are $x = \\pi - \\frac{\\pi}{3} = \\frac{2\\pi}{3}$ and $x = \\pi + \\frac{\\pi}{3} = \\frac{4\\pi}{3}$. Checking $\\frac{5\\pi}{3}$ would have caught it: $\\cos\\frac{5\\pi}{3} = +\\frac{1}{2}$.',
    },
    {
      kind: 'concept',
      title: 'Isolate the trig function first',
      blocks: [
        {
          type: 'p',
          text: 'Most equations do not arrive as $\\sin x = k$. If the trig function appears only once, treat it like an unknown — call it $u$ if that helps — and use ordinary algebra to isolate it. Then you are back to a basic equation.',
        },
        {
          type: 'derivation',
          title: 'Solve $2\\sin x + \\sqrt{3} = 0$ on $[0, 2\\pi)$',
          steps: [
            { tex: '2\\sin x = -\\sqrt{3}', why: 'Subtract $\\sqrt{3}$ from both sides — exactly as you would with $2u + \\sqrt{3} = 0$.' },
            { tex: '\\sin x = -\\tfrac{\\sqrt{3}}{2}', why: 'Divide by $2$. Now it is a basic equation. Check: $-\\frac{\\sqrt{3}}{2} \\approx -0.87$ is in $[-1, 1]$, so solutions exist.' },
            { tex: '\\alpha = \\tfrac{\\pi}{3}', why: 'Reference angle for $\\frac{\\sqrt{3}}{2}$.' },
            { tex: 'x = \\pi + \\tfrac{\\pi}{3} = \\tfrac{4\\pi}{3} \\quad\\text{or}\\quad x = 2\\pi - \\tfrac{\\pi}{3} = \\tfrac{5\\pi}{3}', why: 'Sine is negative in Quadrants III and IV.' },
          ],
          result: '$x = \\frac{4\\pi}{3}$ or $x = \\frac{5\\pi}{3}$; check: $2\\sin\\frac{4\\pi}{3} + \\sqrt{3} = 2(-\\frac{\\sqrt{3}}{2}) + \\sqrt{3} = 0$ ✓.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: '$\\sin x = k$ is not "$x = k / \\sin$"',
          text: 'You cannot divide both sides by "$\\sin$": $\\sin$ is a function, not a number multiplying $x$. Undoing sine is the job of arcsine plus the symmetry and period steps. Likewise $\\sin 2x \\neq 2\\sin x$ — multiple angles get their own treatment in the next lesson.',
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'Read the instructions carefully: "solve" or "find all solutions" wants the general solution with $n$; "solve on $[0, 2\\pi)$" wants a finite list; "solve in degrees on $[0^\\circ, 360^\\circ)$" wants degrees. Instructors also deduct for missing the second solution — always ask "which *two* quadrants?"',
        },
      ],
    },
    {
      kind: 'truefalse',
      prompt: 'The equation $5\\sin x + 3 = 8$ has no real solutions, because $\\frac{8}{5}$ is greater than $1$.',
      answer: false,
      explanation: 'Isolate sine before judging: $5\\sin x = 8 - 3 = 5$, so $\\sin x = 1$, which has the solutions $x = \\frac{\\pi}{2} + 2\\pi n$. The value $\\frac{8}{5}$ never appears — the $3$ must be moved first. Only after isolating can you apply the test "no solution if $|k| > 1$".',
    },
    {
      kind: 'numeric',
      prompt: 'Solve $\\sqrt{3}\\tan x + 1 = 0$ for $x$ in $[0, 2\\pi)$. Enter all solutions, separated by commas.',
      label: '$x =$',
      answer: ['5pi/6', '11pi/6'],
      answerTex: '\\frac{5\\pi}{6},\\ \\frac{11\\pi}{6}',
      hint: 'Isolate: $\\tan x = -\\frac{1}{\\sqrt{3}}$. Which special angle has tangent $\\frac{1}{\\sqrt{3}}$? Tangent is negative in Quadrants II and IV.',
      explanation: 'Subtract $1$ and divide by $\\sqrt{3}$: $\\tan x = -\\frac{1}{\\sqrt{3}}$. The reference angle is $\\frac{\\pi}{6}$ (since $\\tan\\frac{\\pi}{6} = \\frac{1/2}{\\sqrt{3}/2} = \\frac{1}{\\sqrt{3}}$). Tangent is negative in Quadrants II and IV: $x = \\pi - \\frac{\\pi}{6} = \\frac{5\\pi}{6}$ and $x = 2\\pi - \\frac{\\pi}{6} = \\frac{11\\pi}{6}$. They differ by exactly $\\pi$, as tangent solutions always do. General solution: $x = -\\frac{\\pi}{6} + \\pi n$.',
    },
    {
      kind: 'concept',
      title: 'When the value is not special',
      blocks: [
        {
          type: 'p',
          text: 'For $\\sin x = 0.3$ no special triangle helps. The calculator (or `std::asin`) gives the principal value; the symmetry rules give the rest. The method is exactly the same — only the numbers are decimals.',
        },
        {
          type: 'derivation',
          title: 'Solve $\\cos x = -0.4$ on $[0, 2\\pi)$',
          steps: [
            { tex: 'x_1 = \\arccos(-0.4) \\approx 1.9823', why: 'The principal value. $\\arccos$ returns an angle in $[0, \\pi]$; with a negative input it lands in Quadrant II, which is one of the two quadrants where cosine is negative. (Calculator in **radian** mode!)' },
            { tex: 'x_2 = 2\\pi - \\arccos(-0.4)', why: 'The mirror image across the $x$-axis, $-x_1$, moved into $[0, 2\\pi)$ by adding $2\\pi$. It lies in Quadrant III.' },
            { tex: '\\approx 6.2832 - 1.9823 = 4.3009', why: 'Arithmetic with $2\\pi \\approx 6.2832$.' },
          ],
          result: '$x \\approx 1.9823$ or $x \\approx 4.3009$. Exact forms: $\\arccos(-0.4)$ and $2\\pi - \\arccos(-0.4)$.',
        },
        {
          type: 'p',
          text: 'For sine the partner is $\\pi - \\arcsin k$: from $\\sin x = 0.3$ you get $x \\approx 0.3047$ and $x \\approx \\pi - 0.3047 \\approx 2.8369$. If $\\arcsin k$ is negative, add $2\\pi$ to bring it into $[0, 2\\pi)$.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Timing events in a game',
          text: 'A bobbing pickup floats at height $y(t) = \\sin t$. When is it at height $0.3$, so a sparkle effect can fire? Exactly this equation: $t = \\arcsin 0.3 + 2\\pi n$ (rising) or $t = \\pi - \\arcsin 0.3 + 2\\pi n$ (falling). Code that only uses `std::asin(0.3)` finds the rising moments and misses every falling one.',
        },
        {
          type: 'deepdive',
          title: 'Listing solutions on other intervals',
          blocks: [
            {
              type: 'p',
              text: 'With the general solution in hand, any interval is easy: plug in $n = \\dots, -1, 0, 1, \\dots$ and keep the values that fall inside. For $\\sin x = \\frac{1}{2}$ on $[-2\\pi, 2\\pi]$:',
            },
            {
              type: 'derivation',
              steps: [
                { tex: 'x = \\tfrac{\\pi}{6} + 2\\pi n \\text{ or } x = \\tfrac{5\\pi}{6} + 2\\pi n', why: 'The general solution.' },
                { tex: 'n = 0:\\ \\tfrac{\\pi}{6},\\ \\tfrac{5\\pi}{6}', why: 'Both are in $[-2\\pi, 2\\pi]$.' },
                { tex: 'n = -1:\\ -\\tfrac{11\\pi}{6},\\ -\\tfrac{7\\pi}{6}', why: 'Subtract $2\\pi = \\frac{12\\pi}{6}$. Both are $\\ge -2\\pi$, so keep them.' },
                { tex: 'n = 1:\\ \\tfrac{13\\pi}{6},\\ \\tfrac{17\\pi}{6}', why: 'Both exceed $2\\pi$; discard. Values of $n$ further out are even further away.' },
              ],
              result: 'Four solutions: $-\\frac{11\\pi}{6}, -\\frac{7\\pi}{6}, \\frac{\\pi}{6}, \\frac{5\\pi}{6}$.',
            },
          ],
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'Solve $\\cos x = -0.4$ on $[0, 2\\pi)$, rounding to at least 2 decimal places (or give exact forms using `arccos`). Enter both solutions, separated by commas.',
      label: '$x \\approx$',
      answer: ['arccos(-0.4)', '2pi - arccos(-0.4)'],
      answerTex: '\\arccos(-0.4) \\approx 1.98,\\ 2\\pi - \\arccos(-0.4) \\approx 4.30',
      hint: 'Use the worked example on the previous card: the principal value, then $2\\pi$ minus it.',
      explanation: '$\\arccos(-0.4) \\approx 1.9823$ is in Quadrant II. Cosine is also negative in Quadrant III, where the solution is $2\\pi - 1.9823 \\approx 4.3009$. A common mistake is to use $\\pi - \\arccos(-0.4) \\approx 1.16$: that is the *sine* pattern, and $\\cos(1.16) \\approx +0.4$.',
    },
    {
      kind: 'order',
      prompt: 'Put the steps for solving $4\\sin x - 1 = 1$ on $[0, 2\\pi)$ in order.',
      lines: [
        'Add $1$ to both sides: $4\\sin x = 2$',
        'Divide by $4$: $\\sin x = \\frac{1}{2}$',
        'Find the reference angle: $\\frac{\\pi}{6}$',
        'Sine is positive in Quadrants I and II',
        '$x = \\frac{\\pi}{6}$ or $x = \\frac{5\\pi}{6}$',
      ],
      distractors: ['Take $\\arcsin$ of both sides: $4x - 1 = \\arcsin 1$'],
      explanation: 'Isolate the trig function with ordinary algebra first, then solve the basic equation: reference angle, quadrants, angles. The distractor applies arcsine to an expression that is not of the form $\\sin(\\text{something})$ — $4\\sin x - 1$ is not $\\sin(4x - 1)$.',
    },
    {
      kind: 'fill',
      prompt: 'Complete the general solutions ($n$ is any integer).',
      template: '$\\cos x = \\frac{\\sqrt{3}}{2}$ has general solution $x =$ ___, while $\\tan x = \\sqrt{3}$ has general solution $x =$ ___.',
      blanks: [{ answers: ['$\\pm\\frac{\\pi}{6} + 2\\pi n$'] }, { answers: ['$\\frac{\\pi}{3} + \\pi n$'] }],
      wordBank: [
        '$\\pm\\frac{\\pi}{6} + 2\\pi n$',
        '$\\frac{\\pi}{3} + \\pi n$',
        '$\\frac{\\pi}{6} + \\pi n$',
        '$\\frac{\\pi}{3} + 2\\pi n$',
        '$\\pm\\frac{\\pi}{3} + 2\\pi n$',
      ],
      explanation: '$\\arccos\\frac{\\sqrt{3}}{2} = \\frac{\\pi}{6}$, and cosine solutions come in $\\pm$ pairs with period $2\\pi$. $\\arctan\\sqrt{3} = \\frac{\\pi}{3}$, and tangent has period $\\pi$, so one family $\\frac{\\pi}{3} + \\pi n$ covers both $\\frac{\\pi}{3}$ and $\\frac{4\\pi}{3}$. Mixing up $\\frac{\\pi}{6}$ and $\\frac{\\pi}{3}$ is the classic special-triangle slip: $\\cos\\frac{\\pi}{6} = \\frac{\\sqrt{3}}{2}$ but $\\cos\\frac{\\pi}{3} = \\frac{1}{2}$.',
    },
  ],
  takeaways: [
    'Trig equations usually have infinitely many solutions: find those in one period, then add multiples of the period.',
    '$\\sin x = k$: $x = \\arcsin k + 2\\pi n$ or $\\pi - \\arcsin k + 2\\pi n$. $\\cos x = k$: $x = \\pm\\arccos k + 2\\pi n$. $\\tan x = k$: $x = \\arctan k + \\pi n$.',
    'On $[0, 2\\pi)$, find the reference angle, then place it in the two quadrants where the function has the right sign.',
    'Isolate the trig function with ordinary algebra before solving; only then check whether $|k| \\le 1$.',
    'For non-special values, use the inverse function for the principal value and symmetry for the partner solution.',
  ],
  reading: [
    {
      title: 'OpenStax Precalculus 2e — 7.5 Solving Trigonometric Equations',
      url: 'https://openstax.org/books/precalculus-2e/pages/7-5-solving-trigonometric-equations',
      source: 'openstax',
      note: 'Many more examples on $[0, 2\\pi)$ and general solutions, including calculator-based ones.',
    },
    {
      title: "Paul's Online Notes — Solving Trig Equations",
      url: 'https://tutorial.math.lamar.edu/Classes/CalcI/TrigEquations.aspx',
      source: 'paul',
      note: 'A careful college-level treatment that emphasises finding every solution with the unit circle.',
    },
    {
      title: 'Khan Academy — Trigonometry',
      url: 'https://www.khanacademy.org/math/trigonometry',
      source: 'khan',
      note: 'Practice sets on solving sinusoidal equations with instant feedback.',
    },
  ],
};
