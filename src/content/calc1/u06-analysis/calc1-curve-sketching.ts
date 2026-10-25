import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'calc1-curve-sketching',
  title: 'Curve Sketching',
  summary: 'Combine domain, intercepts, symmetry, asymptotes, $f\'$ and $f\'\'$ into one checklist that draws an honest graph by hand.',
  minutes: 18,
  objectives: [
    'Follow a complete curve-sketching checklist from domain to final sketch',
    'Find vertical, horizontal and slant asymptotes of rational functions',
    'Build sign charts for $f\'$ and $f\'\'$ and read off increasing/decreasing intervals, extrema, concavity and inflection points',
    'Sketch a polynomial and a rational function completely, with every feature justified',
    'Explain why a graphing calculator window can hide features that the checklist finds',
  ],
  steps: [
    {
      kind: 'concept',
      title: 'Why sketch by hand? The checklist',
      blocks: [
        {
          type: 'p',
          text: 'Any graphing tool will draw $y = \\frac{2x^2}{x^2 - 1}$ in a millisecond. So why learn to sketch? Because a plotter only samples points in the window you chose. It can miss a tiny wiggle, connect two branches across an asymptote, or hide what happens far off-screen. A sketch built from calculus is *guaranteed*: every rise, fall, bend and asymptote is there because you proved it.',
        },
        {
          type: 'p',
          text: 'The last few lessons gave you the tools one at a time: [[critical-number|critical numbers]], the [[first-derivative-test]], [[concavity]] and the [[second-derivative-test]]. Curve sketching is where they all work together. Here is the checklist (it follows Stewart\'s classic A–H outline):',
        },
        {
          type: 'steps',
          items: [
            { title: 'A. Domain', text: 'Where is $f$ defined? Look for division by zero, even roots of negatives, logs of non-positive numbers.' },
            { title: 'B. Intercepts', text: 'The $y$-intercept is $f(0)$ (if $0$ is in the domain). The [[x-intercept|$x$-intercepts]] solve $f(x) = 0$ — skip them if the equation is hopeless.' },
            { title: 'C. Symmetry', text: '[[even-function|Even]] ($f(-x) = f(x)$: mirror in the $y$-axis), [[odd-function|odd]] ($f(-x) = -f(x)$: rotate $180°$ about the origin), or periodic. Symmetry halves the work.' },
            { title: 'D. Asymptotes', text: 'Vertical, horizontal and slant asymptotes, found with limits.' },
            { title: 'E. Increasing / decreasing', text: 'Compute $f\'$ and make a sign chart: $f\' > 0$ means rising, $f\' < 0$ falling.' },
            { title: 'F. Local extrema', text: 'At each critical number, use the first derivative test (sign change of $f\'$).' },
            { title: 'G. Concavity and inflection points', text: 'Compute $f\'\'$ and make a sign chart: $f\'\' > 0$ concave up, $f\'\' < 0$ concave down. An inflection point is a point *on the graph* where concavity changes.' },
            { title: 'H. Sketch', text: 'Plot the key points, draw the asymptotes as dashed lines, and connect everything with the right shape on each interval.' },
          ],
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why this order?',
          text: 'Steps A–D are *global* information that needs no calculus: where the graph lives and how it behaves at the edges. Steps E–G zoom in on *shape*. Doing the domain first matters because every later step must respect it — a sign chart that ignores a vertical asymptote will give wrong intervals.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Curves you will meet in game dev',
          text: 'Animation easing curves, camera smoothing, damage-falloff functions and procedural terrain profiles are all chosen for their *shape*: where they are flat, where they are steepest, whether they overshoot. Reading $f\'$ and $f\'\'$ is exactly how you design and debug them.',
        },
      ],
    },
    {
      kind: 'concept',
      title: 'Steps A–D: the frame of the picture',
      blocks: [
        {
          type: 'p',
          text: 'For rational functions $f(x) = \\frac{p(x)}{q(x)}$ in lowest terms, asymptotes follow a short set of rules you met in algebra. Calculus explains them: each one is a statement about a limit.',
        },
        {
          type: 'table',
          headers: ['Asymptote', 'Limit statement', 'How to find it (rational $f$)'],
          rows: [
            ['[[vertical-asymptote|Vertical]] $x = a$', '$\\lim_{x \\to a^\\pm} f(x) = \\pm\\infty$', 'Zeros of $q$ that are not cancelled by $p$ (cancelled ones are [[hole|holes]])'],
            ['[[horizontal-asymptote|Horizontal]] $y = L$', '$\\lim_{x \\to \\pm\\infty} f(x) = L$', '$\\deg p < \\deg q$: $y = 0$. Equal degrees: ratio of leading coefficients'],
            ['[[slant-asymptote|Slant]] $y = mx + b$', '$\\lim_{x \\to \\pm\\infty} [f(x) - (mx + b)] = 0$', '$\\deg p = \\deg q + 1$: long-divide; the quotient is the asymptote'],
          ],
        },
        {
          type: 'derivation',
          title: 'Slant asymptote of $f(x) = \\frac{x^2}{x - 1}$',
          steps: [
            { tex: 'x^2 = (x - 1)(x + 1) + 1', why: 'Long division (or just check): $(x-1)(x+1) = x^2 - 1$, so the remainder is $1$.' },
            { tex: 'f(x) = \\frac{x^2}{x-1} = x + 1 + \\frac{1}{x - 1}', why: 'Divide both sides by $x - 1$ (allowed for $x \\ne 1$, which is the domain anyway).' },
            { tex: 'f(x) - (x + 1) = \\frac{1}{x - 1} \\to 0 \\text{ as } x \\to \\pm\\infty', why: 'The leftover fraction has a constant on top and a growing bottom, so it vanishes at both ends.' },
            { tex: '\\lim_{x \\to 1^+} f(x) = +\\infty, \\quad \\lim_{x \\to 1^-} f(x) = -\\infty', why: 'Near $x = 1$ the numerator is close to $1 > 0$ while the denominator is a tiny positive (right side) or tiny negative (left side) number.' },
          ],
          result: 'The graph has a slant asymptote $y = x + 1$ and a vertical asymptote $x = 1$.',
        },
        {
          type: 'graph',
          x: [-5, 6],
          y: [-8, 10],
          functions: [
            { expr: 'x^2/(x - 1)', label: '$y = \\frac{x^2}{x-1}$' },
            { expr: 'x + 1', label: '$y = x + 1$', color: 'gray', dashed: true },
          ],
          vlines: [{ x: 1, label: 'x = 1' }],
          caption: 'Far from the origin the curve hugs the dashed line $y = x + 1$; near $x = 1$ it shoots off to $\\pm\\infty$.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Hole or asymptote?',
          text: 'Always reduce first. $\\frac{x^2 - 1}{x - 1} = x + 1$ for $x \\ne 1$, so $x = 1$ gives a **hole** at $(1, 2)$, not a vertical asymptote. A zero of the denominator is only an asymptote if the fraction still blows up after cancelling.',
        },
      ],
    },
    {
      kind: 'expr',
      prompt: 'Find the slant asymptote of $f(x) = \\dfrac{x^2 + 3x}{x - 1}$.',
      hint: 'Long-divide: find $m$, $b$ and a remainder $r$ with $x^2 + 3x = (x - 1)(mx + b) + r$.',
      label: '$y =$',
      answer: 'x + 4',
      answerTex: 'x + 4',
      explanation: 'Dividing gives $x^2 + 3x = (x - 1)(x + 4) + 4$ — check: $(x-1)(x+4) = x^2 + 3x - 4$. So $f(x) = x + 4 + \\frac{4}{x - 1}$, and the leftover $\\frac{4}{x-1} \\to 0$ as $x \\to \\pm\\infty$. The slant asymptote is $y = x + 4$ (and $x = 1$ is a vertical asymptote).',
    },
    {
      kind: 'concept',
      title: 'Steps E–G: sign charts for $f\'$ and $f\'\'$',
      blocks: [
        {
          type: 'p',
          text: 'A **sign chart** is a number line cut at every point where a function could change sign, with a $+$ or $-$ written on each piece. You build one for $f\'$ (to see rising/falling) and one for $f\'\'$ (to see concavity). Combining the two signs tells you the exact shape on each interval:',
        },
        {
          type: 'table',
          headers: ['$f\'$', '$f\'\'$', 'shape on the interval'],
          rows: [
            ['$+$', '$+$', 'rising, and getting steeper (like the right half of $x^2$)'],
            ['$+$', '$-$', 'rising, but levelling off (like $\\sqrt{x}$)'],
            ['$-$', '$+$', 'falling, but levelling off (like $\\frac{1}{x}$ for $x > 0$)'],
            ['$-$', '$-$', 'falling, and getting steeper (like the right half of $-x^2$)'],
          ],
        },
        {
          type: 'steps',
          items: [
            { title: 'Find the cut points', text: 'Every $x$ where the function is $0$ **or undefined** (including vertical asymptotes and domain boundaries).' },
            { title: 'Split the number line', text: 'The cut points divide the domain into open intervals.' },
            { title: 'Test one point per interval', text: 'Plug any convenient $x$ from each interval in — or reason from the signs of the factors.' },
          ],
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why one test point per interval is enough',
          text: 'On each interval the function is continuous and never zero. By the [[intermediate-value-theorem|Intermediate Value Theorem]], a continuous function that switched from positive to negative would have to pass through $0$ in between — but there are no zeros there. So the sign is the same everywhere on the interval, and one sample tells you the sign of the whole piece.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Factor, then count minus signs',
          text: 'If $f\'(x) = 4x^2(x - 3)$, you rarely need to plug in numbers: $4x^2 \\ge 0$ always, so the sign of $f\'$ is just the sign of $x - 3$. Factored derivatives make sign charts almost automatic — another reason to factor $f\'$ and $f\'\'$ completely.',
        },
      ],
    },
    {
      kind: 'mcq',
      prompt: 'On an interval, $f\'(x) > 0$ and $f\'\'(x) < 0$. What does the graph look like there?',
      options: [
        { text: 'Rising, but more and more slowly (levelling off)', correct: true, why: '$f\' > 0$ means rising; $f\'\' < 0$ means the slope $f\'$ is decreasing, so each step up is smaller than the last.' },
        { text: 'Rising faster and faster', why: 'That needs the slope to *increase*, i.e. $f\'\' > 0$ (concave up).' },
        { text: 'Falling and getting steeper', why: 'Falling needs $f\' < 0$. Here $f\' > 0$.' },
        { text: 'Falling, but levelling off', why: 'That is $f\' < 0$ with $f\'\' > 0$ — both signs are the opposite of the given ones.' },
      ],
      explanation: 'Read the two signs separately. $f\'$ answers "up or down?" and $f\'\'$ answers "is the slope growing or shrinking?". Positive slope that is shrinking: the curve climbs while bending downward, like $\\sqrt{x}$ or $\\ln x$.',
    },
    {
      kind: 'concept',
      title: 'Worked sketch 1: $f(x) = x^4 - 4x^3$',
      blocks: [
        {
          type: 'p',
          text: 'Let\'s run the whole checklist on a polynomial. Polynomials are the friendliest case: the domain is all reals, there are no asymptotes, and the [[end-behavior]] is set by the leading term.',
        },
        {
          type: 'derivation',
          title: 'Steps A–D',
          steps: [
            { tex: '\\text{Domain: } (-\\infty, \\infty)', why: 'A polynomial is defined for every real $x$.' },
            { tex: 'f(0) = 0; \\quad x^4 - 4x^3 = x^3(x - 4) = 0 \\implies x = 0, 4', why: 'The $y$-intercept is $(0, 0)$; factoring out $x^3$ gives the $x$-intercepts $(0,0)$ and $(4, 0)$.' },
            { tex: 'f(-x) = x^4 + 4x^3 \\ne \\pm f(x)', why: 'Neither even nor odd (mixed even and odd powers), so no symmetry to exploit.' },
            { tex: '\\lim_{x \\to \\pm\\infty} f(x) = +\\infty', why: 'No asymptotes. The leading term $x^4$ dominates, so both ends point up.' },
          ],
        },
        {
          type: 'derivation',
          title: 'Steps E–G',
          steps: [
            { tex: "f'(x) = 4x^3 - 12x^2 = 4x^2(x - 3)", why: 'Power rule, then factor out the common $4x^2$.' },
            { tex: "f'(x) = 0 \\implies x = 0 \\text{ or } x = 3", why: 'Critical numbers. ($f\'$ is a polynomial, so it is never undefined.)' },
            { tex: "f' < 0 \\text{ on } (-\\infty, 0) \\cup (0, 3), \\quad f' > 0 \\text{ on } (3, \\infty)", why: 'Since $4x^2 \\ge 0$, the sign of $f\'$ is the sign of $x - 3$.' },
            { tex: 'f(3) = 81 - 108 = -27', why: '$f\'$ changes from $-$ to $+$ at $3$: a local (in fact absolute) minimum. At $x = 0$ the sign does *not* change, so there is no extremum there — just a horizontal tangent.' },
            { tex: "f''(x) = 12x^2 - 24x = 12x(x - 2)", why: 'Differentiate $f\'$ and factor.' },
            { tex: "f'' > 0 \\text{ on } (-\\infty, 0) \\cup (2, \\infty), \\quad f'' < 0 \\text{ on } (0, 2)", why: 'The product $12x(x-2)$ is negative only between its zeros.' },
            { tex: 'f(2) = 16 - 32 = -16', why: 'Concavity changes at $x = 0$ and $x = 2$, so the inflection points are $(0, 0)$ and $(2, -16)$.' },
          ],
          result: 'Decreasing on $(-\\infty, 3)$, increasing on $(3, \\infty)$; minimum $(3, -27)$; inflection points $(0, 0)$ and $(2, -16)$.',
        },
        {
          type: 'table',
          headers: ['interval', '$f\'$', '$f\'\'$', 'shape'],
          rows: [
            ['$(-\\infty, 0)$', '$-$', '$+$', 'falling, concave up'],
            ['$(0, 2)$', '$-$', '$-$', 'falling, concave down'],
            ['$(2, 3)$', '$-$', '$+$', 'falling, concave up'],
            ['$(3, \\infty)$', '$+$', '$+$', 'rising, concave up'],
          ],
          caption: 'The combined sign chart: everything step H needs.',
        },
        {
          type: 'graph',
          x: [-2, 5],
          y: [-32, 20],
          yStep: 8,
          functions: [{ expr: 'x^4 - 4x^3', label: '$y = x^4 - 4x^3$' }],
          points: [
            { x: 0, y: 0, label: 'inflection (0, 0)', color: 'purple' },
            { x: 2, y: -16, label: 'inflection (2, −16)', color: 'purple' },
            { x: 3, y: -27, label: 'min (3, −27)', color: 'red' },
            { x: 4, y: 0, label: '(4, 0)' },
          ],
          caption: 'At the origin the curve flattens out (horizontal tangent) *and* switches concavity, but keeps falling — a critical number that is not an extremum.',
        },
      ],
    },
    {
      kind: 'truefalse',
      prompt: 'Since $f\'(0) = 0$ for $f(x) = x^4 - 4x^3$, the function has a local maximum or minimum at $x = 0$.',
      answer: false,
      explanation: '$f\'(0) = 0$ makes $0$ a critical number, which only makes it a *candidate*. The first derivative test decides: $f\'(x) = 4x^2(x - 3)$ is negative just left of $0$ and negative just right of $0$, so $f$ keeps decreasing straight through. No sign change, no extremum. (Here $(0,0)$ turns out to be an inflection point instead.)',
    },
    {
      kind: 'numeric',
      prompt: 'For $g(x) = x^3 - 6x^2 + 9x + 1$, find the $y$-coordinate of the inflection point.',
      hint: 'Solve $g\'\'(x) = 0$, check that the sign of $g\'\'$ changes there, then evaluate $g$ at that $x$.',
      label: '$y =$',
      answer: '3',
      explanation: '$g\'(x) = 3x^2 - 12x + 9$ and $g\'\'(x) = 6x - 12 = 6(x - 2)$, which changes sign from $-$ to $+$ at $x = 2$. Then $g(2) = 8 - 24 + 18 + 1 = 3$, so the inflection point is $(2, 3)$. Bonus: $g\'(x) = 3(x-1)(x-3)$ gives a local max $(1, 5)$ and a local min $(3, 1)$ — and the inflection point sits exactly halfway between them, as it does for every cubic.',
    },
    {
      kind: 'concept',
      title: 'Worked sketch 2: $f(x) = \\dfrac{2x^2}{x^2 - 1}$',
      blocks: [
        {
          type: 'p',
          text: 'Rational functions are where the checklist really earns its keep: the asymptotes split the domain into pieces, and every sign chart must include them as cut points.',
        },
        {
          type: 'derivation',
          title: 'Steps A–D',
          steps: [
            { tex: 'x^2 - 1 = 0 \\iff x = \\pm 1, \\text{ so domain: } x \\ne \\pm 1', why: 'Division by zero is the only restriction.' },
            { tex: 'f(0) = 0; \\quad 2x^2 = 0 \\iff x = 0', why: 'The only intercept is the origin.' },
            { tex: 'f(-x) = \\frac{2(-x)^2}{(-x)^2 - 1} = f(x)', why: 'Even function: the graph is symmetric about the $y$-axis, so we can study $x \\ge 0$ and mirror.' },
            { tex: '\\lim_{x \\to \\pm\\infty} \\frac{2x^2}{x^2 - 1} = \\lim_{x \\to \\pm\\infty} \\frac{2}{1 - 1/x^2} = 2', why: 'Divide top and bottom by $x^2$. Horizontal asymptote $y = 2$.' },
            { tex: '\\lim_{x \\to 1^+} f(x) = +\\infty, \\quad \\lim_{x \\to 1^-} f(x) = -\\infty', why: 'Numerator $\\to 2 > 0$; denominator $\\to 0$ through positive values from the right ($x^2 > 1$) and negative values from the left. By symmetry, the mirror-image statements hold at $x = -1$.' },
          ],
        },
        {
          type: 'derivation',
          title: 'Steps E–G',
          steps: [
            { tex: "f'(x) = \\frac{4x(x^2 - 1) - 2x^2 \\cdot 2x}{(x^2 - 1)^2}", why: '[[quotient-rule|Quotient rule]]: (bottom · top′ − top · bottom′) / bottom².' },
            { tex: '= \\frac{4x^3 - 4x - 4x^3}{(x^2-1)^2} = \\frac{-4x}{(x^2 - 1)^2}', why: 'The $x^3$ terms cancel.' },
            { tex: "f' > 0 \\text{ for } x < 0, \\quad f' < 0 \\text{ for } x > 0 \\quad (x \\ne \\pm 1)", why: 'The denominator is a square, so positive; the sign is the sign of $-4x$.' },
            { tex: 'f(0) = 0 \\text{ is a local maximum}', why: '$f\'$ changes from $+$ to $-$ at the critical number $0$. ($x = \\pm 1$ are not critical numbers — they are not in the domain.)' },
            { tex: "f''(x) = \\frac{-4(x^2-1)^2 + 4x \\cdot 2(x^2 - 1)(2x)}{(x^2-1)^4}", why: 'Quotient rule again, with the chain rule for $\\frac{d}{dx}(x^2 - 1)^2 = 2(x^2-1)(2x)$.' },
            { tex: '= \\frac{-4(x^2 - 1) + 16x^2}{(x^2 - 1)^3} = \\frac{12x^2 + 4}{(x^2 - 1)^3}', why: 'Cancel one factor of $(x^2 - 1)$ from every term, then simplify the numerator.' },
            { tex: "f'' > 0 \\text{ for } |x| > 1, \\quad f'' < 0 \\text{ for } |x| < 1", why: '$12x^2 + 4 > 0$ always, so the sign of $f\'\'$ is the sign of $x^2 - 1$.' },
          ],
          result: 'Concave up outside $[-1, 1]$, concave down inside. Concavity changes at $x = \\pm 1$, but those are not in the domain, so there are **no inflection points**.',
        },
        {
          type: 'graph',
          x: [-4, 4],
          y: [-4, 6],
          functions: [{ expr: '2x^2/(x^2 - 1)', label: '$y = \\frac{2x^2}{x^2 - 1}$' }],
          vlines: [{ x: -1, label: 'x = −1' }, { x: 1, label: 'x = 1' }],
          hlines: [{ y: 2, label: 'y = 2' }],
          points: [{ x: 0, y: 0, label: 'local max (0, 0)', color: 'red' }],
          caption: 'Three branches. The middle one is concave down with its peak at the origin; the outer ones are concave up and approach $y = 2$ from above.',
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'Graders look for: the asymptotes drawn dashed and labelled, the key points labelled with coordinates, and a sign chart that includes the vertical asymptotes as cut points. A common deduction is claiming inflection points at $x = \\pm 1$ — concavity changes there, but no point of the graph does.',
        },
      ],
    },
    {
      kind: 'fill',
      prompt: 'Find the asymptotes.',
      template: 'The graph of $f(x) = \\dfrac{x + 1}{x - 3}$ has vertical asymptote ___ and horizontal asymptote ___.',
      blanks: [{ answers: ['$x = 3$'] }, { answers: ['$y = 1$'] }],
      wordBank: ['$x = 3$', '$y = 1$', '$x = -1$', '$y = 0$', '$x = -3$', '$y = 3$'],
      explanation: 'The denominator is $0$ at $x = 3$, and the numerator is $4 \\ne 0$ there, so $x = 3$ is a vertical asymptote (not a hole). Numerator and denominator both have degree $1$, so the horizontal asymptote is the ratio of leading coefficients: $y = \\frac{1}{1} = 1$. ($x = -1$ is the $x$-intercept, a common mix-up.)',
    },
    {
      kind: 'error',
      prompt: 'A student analyses $f(x) = \\dfrac{1}{x^2 - 4}$. Tap the first line that is wrong.',
      lines: [
        'Domain: all real $x$ except $x = \\pm 2$.',
        '$f\'(x) = \\dfrac{-2x}{(x^2 - 4)^2}$',
        '$f\'$ is positive for $x < 0$ and negative for $x > 0$ (with $x \\ne \\pm 2$), so $f$ has a local maximum $f(0) = -\\frac{1}{4}$.',
        '$f\'\'(x) = \\dfrac{6x^2 + 8}{(x^2 - 4)^3}$',
        '$f\'\'$ changes sign at $x = \\pm 2$, so the graph has inflection points at $x = \\pm 2$.',
      ],
      errorLines: [5],
      explanation: 'Lines 1–4 are correct (check $f\'\'$ with the quotient and chain rules). Line 5 is the mistake: $f\'\'$ does change sign at $x = \\pm 2$, but $f$ is not defined there — those are vertical asymptotes. An inflection point must be a point on the graph. Correct conclusion: concave up for $|x| > 2$, concave down for $|x| < 2$, and **no** inflection points.',
    },
    {
      kind: 'concept',
      title: 'Families of curves, and a game-dev favourite',
      blocks: [
        {
          type: 'p',
          text: 'Curve sketching really pays off when a formula has a parameter and you want to know how the shape depends on it. Take $f(x) = x^3 - ax$. Then $f\'(x) = 3x^2 - a$ and $f\'\'(x) = 6x$. The inflection point is always at the origin, but the critical numbers $x = \\pm\\sqrt{a/3}$ exist only when $a > 0$. Drag the slider and watch the hump and dip appear and vanish.',
        },
        {
          type: 'graph',
          x: [-3, 3],
          y: [-5, 5],
          functions: [{ expr: 'x^3 - a*x', label: '$y = x^3 - ax$' }],
          points: [
            { x: '-sqrt(a/3)', y: '(-sqrt(a/3))^3 + a*sqrt(a/3)', label: 'local max', color: 'red' },
            { x: 'sqrt(a/3)', y: '(sqrt(a/3))^3 - a*sqrt(a/3)', label: 'local min', color: 'red' },
            { x: 0, y: 0, label: 'inflection', color: 'purple' },
          ],
          sliders: [{ name: 'a', min: -3, max: 6, step: 0.1, value: 3, label: '$a$' }],
          readouts: [
            { label: 'critical numbers $x = \\pm$', expr: 'sqrt(a/3)' },
            { label: 'slope at inflection $f\'(0) =$', expr: '-a' },
          ],
          caption: 'For $a > 0$: a local max and a local min. For $a \\le 0$: $f\' \\ge 0$ everywhere and the curve only rises ("undefined" means no critical numbers).',
        },
        {
          type: 'p',
          text: 'Game programmers meet a cousin of this cubic constantly: [[smoothstep]], $S(t) = 3t^2 - 2t^3$ on $[0, 1]$. It is used to blend between two values (colours, positions, volumes) without a jerky start or stop. Sketching explains why it works:',
        },
        {
          type: 'list',
          items: [
            '$S(0) = 0$ and $S(1) = 1$: it goes from start to finish.',
            '$S\'(t) = 6t - 6t^2 = 6t(1 - t)$, which is $0$ at **both** ends: the motion eases in and eases out.',
            '$S\'(t) > 0$ on $(0, 1)$: it never backtracks.',
            '$S\'\'(t) = 6 - 12t$ changes sign at $t = \\frac{1}{2}$: an inflection point, where the blend moves fastest.',
          ],
        },
        {
          type: 'code',
          title: 'smoothstep.h',
          code: `// Ease from 0 to 1 with zero slope at both ends.
float smoothstep(float t) {
    t = t < 0 ? 0 : (t > 1 ? 1 : t);   // clamp to [0, 1]
    return t * t * (3.0f - 2.0f * t);  // 3t^2 - 2t^3
}`,
          annotations: [
            { lines: 3, text: 'Clamping keeps the input inside the interval where the shape analysis holds.' },
            { lines: 4, text: 'The cubic factored as $t^2(3 - 2t)$ — one fewer multiplication than expanding it.' },
          ],
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'Smoothstep $S(t) = 3t^2 - 2t^3$ moves fastest at its inflection point. What is that maximum slope $S\'(t)$ on $[0, 1]$?',
      hint: 'Find where $S\'\'(t) = 0$, then evaluate $S\'(t) = 6t - 6t^2$ there.',
      label: 'max slope $=$',
      answer: '3/2',
      answerTex: '\\frac{3}{2}',
      explanation: '$S\'\'(t) = 6 - 12t = 0$ at $t = \\frac{1}{2}$, and $S\'\'$ changes from $+$ to $-$ there, so $S\'$ has its maximum at $t = \\frac{1}{2}$: $S\'(\\frac12) = 6 \\cdot \\frac12 - 6 \\cdot \\frac14 = 3 - \\frac32 = \\frac32$. At the endpoints $S\'(0) = S\'(1) = 0$, so $\\frac{3}{2}$ is the largest slope. A blend over $1$ second therefore peaks at $1.5\\times$ the average speed.',
    },
    {
      kind: 'mcq',
      prompt: 'A function has $f\'(x) = (x - 1)^2(x + 2)$. Which statement is correct?',
      options: [
        { text: 'Local minimum at $x = -2$ and local maximum at $x = 1$', why: 'At $x = 1$ the factor $(x-1)^2$ touches $0$ without changing sign, so $f\'$ stays positive on both sides. No extremum at $1$.' },
        { text: 'Local maximum at $x = -2$ only', why: 'Check the signs: $f\'(-3) = 16 \\cdot (-1) < 0$ and $f\'(0) = 1 \\cdot 2 > 0$. Falling then rising is a minimum.' },
        { text: 'Local minimum at $x = -2$ only', correct: true, why: '$f\'$ changes from $-$ to $+$ at $-2$; at $1$ it is $+$ on both sides.' },
        { text: 'Local minima at both $x = -2$ and $x = 1$', why: 'A critical number is only an extremum if $f\'$ changes sign there. $(x - 1)^2 \\ge 0$ never changes sign.' },
      ],
      explanation: 'Sign chart for $f\' = (x-1)^2(x+2)$: the squared factor is never negative, so the sign is the sign of $x + 2$. That gives $-$ on $(-\\infty, -2)$, $+$ on $(-2, 1)$ and $+$ on $(1, \\infty)$. Only $x = -2$ has a sign change ($-$ to $+$), so it is the only extremum: a local minimum. Even-power factors in $f\'$ never produce extrema.',
    },
  ],
  takeaways: [
    'Curve-sketching checklist: domain, intercepts, symmetry, asymptotes, then $f\'$ (rise/fall, extrema) and $f\'\'$ (concavity, inflection points), then sketch.',
    'Asymptotes are limits: vertical where $f \\to \\pm\\infty$, horizontal/slant where $f$ approaches a line as $x \\to \\pm\\infty$. Reduce a rational function first to tell holes from asymptotes.',
    'Sign charts work because a continuous function cannot change sign without passing through $0$; cut the line where the function is $0$ or undefined.',
    'A critical number is an extremum only if $f\'$ changes sign; an inflection point must be in the domain, so concavity flipping across an asymptote does not count.',
    'Parameter families and easing curves like smoothstep $3t^2 - 2t^3$ are designed by exactly this analysis of $f\'$ and $f\'\'$.',
  ],
  reading: [
    {
      title: 'OpenStax Calculus Volume 1 — 4.6 Limits at Infinity and Asymptotes',
      url: 'https://openstax.org/books/calculus-volume-1/pages/4-6-limits-at-infinity-and-asymptotes',
      source: 'openstax',
      note: 'Ends with a full "guidelines for drawing the graph of a function" section and several complete worked sketches.',
    },
    {
      title: "Paul's Online Notes — The Shape of a Graph, Part II",
      url: 'https://tutorial.math.lamar.edu/Classes/CalcI/ShapeofGraphPtII.aspx',
      source: 'paul',
      note: 'Concavity, inflection points and sign charts with many fully worked examples.',
    },
    {
      title: 'Wikipedia — Smoothstep',
      url: 'https://en.wikipedia.org/wiki/Smoothstep',
      source: 'wikipedia',
      note: 'The easing function from this lesson, its higher-order cousin smootherstep, and how shaders use them.',
    },
  ],
};
