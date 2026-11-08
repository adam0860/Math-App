import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'gchem-integrated-rate-laws',
  title: 'Integrated Rate Laws and Half-Life',
  summary: 'Solve the rate law as a differential equation: concentration versus time for zero, first and second order, straight-line plots that reveal the order, half-lives, and Euler\'s method.',
  minutes: 20,
  objectives: [
    'Derive the zero-, first- and second-order integrated rate laws by separating variables',
    'Identify the order of a reaction from which plot ($[\\ce{A}]$, $\\ln[\\ce{A}]$ or $1/[\\ce{A}]$ vs $t$) is a straight line, and read $k$ from its slope',
    'Derive and use the half-life for each order, and explain why only the first-order half-life is constant',
    'Solve applied problems: drug elimination, $\\ce{N2O5}$ decomposition, radiocarbon decay',
    'Integrate a rate law numerically with Euler\'s method and explain its error',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'A rate law is a differential equation',
      blocks: [
        {
          type: 'p',
          text: 'The [[gchem-rate-law|rate law]] tells you the slope of the concentration–time curve at each moment, in terms of the concentration itself. For a reaction $\\ce{A -> products}$ of order $n$:',
        },
        {
          type: 'math',
          tex: '\\frac{d[\\ce{A}]}{dt} = -k[\\ce{A}]^n',
          caption: 'Throughout this lesson $k$ is defined by this equation, $-\\frac{d[\\ce{A}]}{dt} = k[\\ce{A}]^n$, which is how kinetics tables usually report it.',
        },
        {
          type: 'p',
          text: 'That is a [[differential-equation|differential equation]]: an unknown function, $[\\ce{A}](t)$, related to its own derivative. You solved this kind in Calculus II. It is [[separable-equation|separable]], so you can put every $[\\ce{A}]$ on one side and every $t$ on the other, then integrate. The solution, with the starting concentration $[\\ce{A}]_0$ as the initial condition, is the [[gchem-integrated-rate-law|integrated rate law]].',
        },
        {
          type: 'p',
          text: 'Before doing the algebra, look at what the answers look like. All three curves below start at $[\\ce{A}]_0 = 1$ M with the **same initial rate** (with $[\\ce{A}]_0 = 1$, $k[\\ce{A}]_0^n = k$ for every $n$). Their shapes diverge because the rate responds differently as $[\\ce{A}]$ falls.',
        },
        {
          type: 'graph',
          x: [0, 10],
          y: [0, 1.1],
          xStep: 1,
          yStep: 0.25,
          functions: [
            { expr: 'max(0, 1 - k*x)', label: 'zero order: $[\\ce{A}]_0 - kt$', color: 'orange' },
            { expr: 'e^(-k*x)', label: 'first order: $[\\ce{A}]_0e^{-kt}$', color: 'blue' },
            { expr: '1/(1 + k*x)', label: 'second order: $\\frac{1}{1/[\\ce{A}]_0 + kt}$', color: 'purple' },
          ],
          sliders: [{ name: 'k', min: 0.05, max: 1, step: 0.05, value: 0.3, label: '$k$ (numerical value)' }],
          readouts: [
            { label: '$[\\ce{A}]$ at $t = 5$, zero order', expr: 'max(0, 1 - 5k)', digits: 3 },
            { label: 'first order', expr: 'e^(-5k)', digits: 3 },
            { label: 'second order', expr: '1/(1 + 5k)', digits: 3 },
          ],
          caption: 'Horizontal axis: time; vertical: $[\\ce{A}]$ in M. Zero order falls in a straight line and stops dead at zero. First order decays exponentially. Second order drops fast at first, then lingers with a long tail, because its rate falls with the **square** of $[\\ce{A}]$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the shapes differ',
          text: 'The rate law sets the slope. When $[\\ce{A}]$ has halved, a zero-order reaction still runs at full speed, a first-order one at half speed, and a second-order one at a quarter speed. The more the rate depends on concentration, the more the reaction slows down as it proceeds, and the longer its tail.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'concept',
      title: 'First order: separate, integrate, exponentiate',
      blocks: [
        {
          type: 'derivation',
          title: 'Integrated first-order rate law',
          steps: [
            { tex: '\\frac{d[\\ce{A}]}{dt} = -k[\\ce{A}]', why: 'The first-order rate law, $n = 1$.' },
            { tex: '\\frac{d[\\ce{A}]}{[\\ce{A}]} = -k\\,dt', why: 'Separate variables: divide by $[\\ce{A}]$ (positive while any A remains) and multiply by $dt$.' },
            { tex: '\\int_{[\\ce{A}]_0}^{[\\ce{A}]} \\frac{dc}{c} = -k\\int_0^t dt\'', why: 'Integrate both sides from the start (time 0, concentration $[\\ce{A}]_0$) to a later moment (time $t$, concentration $[\\ce{A}]$). Definite integrals build in the initial condition.' },
            { tex: '\\ln[\\ce{A}] - \\ln[\\ce{A}]_0 = -kt', why: 'The antiderivative of $\\frac{1}{c}$ is $\\ln c$ (no absolute value needed: concentrations are positive).' },
            { tex: '\\ln[\\ce{A}] = -kt + \\ln[\\ce{A}]_0', why: 'Rearranged into slope–intercept form, $y = mx + b$.' },
            { tex: '[\\ce{A}] = [\\ce{A}]_0\\,e^{-kt}', why: 'Exponentiate both sides: $e^{\\ln[\\ce{A}]_0 - kt} = [\\ce{A}]_0 e^{-kt}$.' },
          ],
          result: 'A first-order reactant undergoes [[exponential-decay|exponential decay]]. A plot of $\\ln[\\ce{A}]$ against $t$ is a straight line with slope $-k$ and intercept $\\ln[\\ce{A}]_0$.',
        },
        {
          type: 'graph',
          x: [0, 10],
          y: [-5, 0.5],
          xStep: 1,
          yStep: 1,
          functions: [{ expr: '-k*x', label: '$\\ln[\\ce{A}] = \\ln[\\ce{A}]_0 - kt$ with $[\\ce{A}]_0 = 1$ M', color: 'blue' }],
          points: [
            { x: 2, y: '-2k', label: '' },
            { x: 4, y: '-4k', label: '' },
            { x: 6, y: '-6k', label: '' },
            { x: 8, y: '-8k', label: '' },
          ],
          sliders: [{ name: 'k', min: 0.1, max: 0.6, step: 0.05, value: 0.3, label: '$k$ (s⁻¹)' }],
          readouts: [{ label: 'slope $=$', expr: '-k', digits: 2 }],
          caption: 'The same first-order data as the exponential curve, replotted as $\\ln[\\ce{A}]$ against $t$ (s): a straight line whose slope is $-k$. Equal time steps lower $\\ln[\\ce{A}]$ by equal amounts.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why first order means exponential',
          text: 'First order says the rate is proportional to the amount present: in every short time interval the **same fraction** of the remaining A reacts. A process that removes a fixed fraction per unit time is exactly what exponentials describe, the same mathematics as continuous compound interest run in reverse.',
        },
        {
          type: 'callout',
          variant: 'note',
          text: 'Strictly, you can only take the logarithm of a pure number, so $\\ln[\\ce{A}]$ means the log of the concentration\'s numerical value in M. The choice of unit only shifts the intercept; the slope $-k$ is unaffected.',
        },
      ],
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'numeric',
      prompt: 'Cyclopropane rearranges to propene in a first-order reaction with $k = 6.7 \\times 10^{-4}\\ \\text{s}^{-1}$ at 500 °C. How long does it take for $[\\text{cyclopropane}]$ to fall from $0.0500$ M to $0.0100$ M? Answer in seconds, to two significant figures.',
      hint: '$\\ln\\frac{[\\ce{A}]_0}{[\\ce{A}]} = kt$, so $t = \\frac{\\ln(0.0500/0.0100)}{k}$.',
      label: '$t =$',
      unit: 's',
      answer: 'ln(5)/(6.7*10^-4)',
      answerTex: '2.4 \\times 10^{3}\\ \\text{s}\\ (\\approx 40\\ \\text{min})',
      tolerance: 30,
      explanation: 'From $\\ln[\\ce{A}] = \\ln[\\ce{A}]_0 - kt$: $t = \\frac{1}{k}\\ln\\frac{[\\ce{A}]_0}{[\\ce{A}]} = \\frac{\\ln 5}{6.7 \\times 10^{-4}\\ \\text{s}^{-1}} = \\frac{1.609}{6.7 \\times 10^{-4}} = 2.4 \\times 10^{3}$ s, about 40 minutes. Only the **ratio** of concentrations matters for first order, so starting at 0.500 M and ending at 0.100 M would take exactly the same time.',
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'concept',
      title: 'Zero and second order',
      blocks: [
        {
          type: 'p',
          text: 'The same three moves (separate, integrate from $0$ to $t$, rearrange) handle the other orders. Only the antiderivative changes.',
        },
        {
          type: 'derivation',
          title: 'Zero order: $\\frac{d[\\ce{A}]}{dt} = -k$',
          steps: [
            { tex: 'd[\\ce{A}] = -k\\,dt', why: '$[\\ce{A}]^0 = 1$, so there is nothing to divide by.' },
            { tex: '\\int_{[\\ce{A}]_0}^{[\\ce{A}]} dc = -k\\int_0^t dt\' \\implies [\\ce{A}] - [\\ce{A}]_0 = -kt', why: 'Integrate a constant.' },
            { tex: '[\\ce{A}] = [\\ce{A}]_0 - kt \\qquad (t \\le [\\ce{A}]_0/k)', why: 'A straight line in $t$ with slope $-k$. It only holds until A runs out at $t = [\\ce{A}]_0/k$; after that the rate is simply zero.' },
          ],
        },
        {
          type: 'derivation',
          title: 'Second order: $\\frac{d[\\ce{A}]}{dt} = -k[\\ce{A}]^2$',
          steps: [
            { tex: '[\\ce{A}]^{-2}\\,d[\\ce{A}] = -k\\,dt', why: 'Separate: divide by $[\\ce{A}]^2$.' },
            { tex: '\\int_{[\\ce{A}]_0}^{[\\ce{A}]} c^{-2}\\,dc = \\left[-\\frac{1}{c}\\right]_{[\\ce{A}]_0}^{[\\ce{A}]} = -\\frac{1}{[\\ce{A}]} + \\frac{1}{[\\ce{A}]_0}', why: 'Power rule for integrals: $\\int c^{-2}\\,dc = \\frac{c^{-1}}{-1}$. Evaluate at both limits.' },
            { tex: '-\\frac{1}{[\\ce{A}]} + \\frac{1}{[\\ce{A}]_0} = -kt', why: 'The right side integrates to $-kt$ as before.' },
            { tex: '\\frac{1}{[\\ce{A}]} = \\frac{1}{[\\ce{A}]_0} + kt', why: 'Multiply by $-1$ and rearrange. Now $\\frac{1}{[\\ce{A}]}$ is linear in $t$ with slope $+k$.' },
          ],
        },
        {
          type: 'table',
          headers: ['order', 'rate law', 'integrated form', 'straight-line plot', 'slope'],
          rows: [
            ['0', '$k$', '$[\\ce{A}] = [\\ce{A}]_0 - kt$', '$[\\ce{A}]$ vs $t$', '$-k$'],
            ['1', '$k[\\ce{A}]$', '$\\ln[\\ce{A}] = \\ln[\\ce{A}]_0 - kt$', '$\\ln[\\ce{A}]$ vs $t$', '$-k$'],
            ['2', '$k[\\ce{A}]^2$', '$\\frac{1}{[\\ce{A}]} = \\frac{1}{[\\ce{A}]_0} + kt$', '$\\frac{1}{[\\ce{A}]}$ vs $t$', '$+k$'],
          ],
          caption: 'The three integrated rate laws. Note the sign: the second-order plot rises.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Second order needs one reactant (or equal amounts)',
          text: 'The $1/[\\ce{A}]$ form is for $\\text{rate} = k[\\ce{A}]^2$. A reaction with $\\text{rate} = k[\\ce{A}][\\ce{B}]$ gives this form only if $[\\ce{A}]_0 = [\\ce{B}]_0$ with 1 : 1 stoichiometry. Otherwise chemists flood the mixture with a large excess of B so that $[\\ce{B}]$ stays essentially constant, and the reaction behaves as **pseudo-first-order** in A with $k\' = k[\\ce{B}]$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'expr',
      prompt: 'A second-order reaction ($\\text{rate} = k[\\ce{A}]^2$) has $k = 0.20\\ \\text{M}^{-1}\\text{min}^{-1}$ and $[\\ce{A}]_0 = 0.50$ M. Write $[\\ce{A}]$ as a function of $t$ in minutes.',
      hint: 'Start from $\\frac{1}{[\\ce{A}]} = \\frac{1}{[\\ce{A}]_0} + kt$ and take the reciprocal.',
      label: '$[\\ce{A}](t) =$',
      variables: ['t'],
      domain: [0, 10],
      answer: '1/(2 + 0.2t)',
      answerTex: '\\frac{1}{2 + 0.20t}\\ \\text{M}',
      explanation: '$\\frac{1}{[\\ce{A}]} = \\frac{1}{0.50} + 0.20t = 2 + 0.20t$, so $[\\ce{A}] = \\frac{1}{2 + 0.20t}$ (equivalently $\\frac{0.50}{1 + 0.10t}$). Check: at $t = 0$ it gives $0.50$ M; at $t = 10$ min, $\\frac{1}{4} = 0.25$ M, so the first half-life is 10 min. A common slip is writing $[\\ce{A}] = [\\ce{A}]_0 + kt$, forgetting that the line is in $1/[\\ce{A}]$.',
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'concept',
      title: 'Finding the order from one experiment',
      blocks: [
        {
          type: 'p',
          text: 'The table above is a test kit. Follow one run over time, compute $\\ln[\\ce{A}]$ and $1/[\\ce{A}]$ for each point, and plot all three against $t$. **Whichever plot is a straight line tells you the order**, and its slope gives $k$. (A straight line fits one model and not the others, so only one can be straight.)',
        },
        {
          type: 'table',
          headers: ['$t$ (s)', '$[\\ce{NO2}]$ (M)', '$\\ln[\\ce{NO2}]$', '$1/[\\ce{NO2}]$ (M⁻¹)'],
          rows: [
            ['$0$', '$0.01000$', '$-4.605$', '$100$'],
            ['$50$', '$0.00787$', '$-4.844$', '$127$'],
            ['$100$', '$0.00649$', '$-5.037$', '$154$'],
            ['$200$', '$0.00481$', '$-5.337$', '$208$'],
            ['$300$', '$0.00382$', '$-5.568$', '$262$'],
          ],
          caption: 'Decomposition $\\ce{2NO2(g) -> 2NO(g) + O2(g)}$ at a fixed high temperature.',
        },
        {
          type: 'p',
          text: 'Check the differences. $[\\ce{NO2}]$ drops by 0.00213 M in the first 50 s but only 0.00138 M in the next 50 s, so it is not zero order. $\\ln[\\ce{NO2}]$ drops by 0.239 then 0.193 per 50 s, so it is not first order either. But $1/[\\ce{NO2}]$ rises by exactly $27$ M⁻¹ every 50 s. That plot is straight:',
        },
        {
          type: 'graph',
          x: [0, 320],
          y: [0, 300],
          xStep: 50,
          yStep: 50,
          functions: [{ expr: '100 + 0.54x', label: 'fit: $\\frac{1}{[\\ce{NO2}]} = 100 + 0.54t$', color: 'purple', domain: [0, 320] }],
          points: [
            { x: 0, y: 100, label: '' },
            { x: 50, y: 127, label: '' },
            { x: 100, y: 154, label: '' },
            { x: 200, y: 208, label: '' },
            { x: 300, y: 262, label: '' },
          ],
          caption: 'Horizontal axis: $t$ (s); vertical: $1/[\\ce{NO2}]$ (M⁻¹). The points fall on a line, so the reaction is second order in $\\ce{NO2}$.',
        },
        {
          type: 'derivation',
          title: 'Rate constant from the slope',
          steps: [
            { tex: 'k = \\text{slope} = \\frac{262 - 100\\ \\text{M}^{-1}}{300 - 0\\ \\text{s}}', why: 'For second order the slope of $1/[\\ce{A}]$ vs $t$ is $+k$. Use two points far apart (ideally a fitted line through all of them).' },
            { tex: '= 0.54\\ \\text{M}^{-1}\\,\\text{s}^{-1}', why: '$\\frac{162}{300} = 0.54$. The units $\\text{M}^{-1}\\text{s}^{-1}$ are right for a second-order $k$.' },
          ],
          result: '$\\text{rate} = -\\frac{d[\\ce{NO2}]}{dt} = 0.54\\ \\text{M}^{-1}\\,\\text{s}^{-1}\\,[\\ce{NO2}]^2$.',
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'With real (noisy) data, compare the plots by eye or by the correlation of a linear fit, not by insisting on perfectly constant differences. On exams the data are often designed so one transform is exactly linear, as here.',
        },
      ],
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'mcq',
      prompt: 'For a reaction $\\ce{A -> products}$, a plot of $\\ln[\\ce{A}]$ against $t$ is a straight line with slope $-0.0230\\ \\text{min}^{-1}$, while $[\\ce{A}]$ vs $t$ and $1/[\\ce{A}]$ vs $t$ are curved. Which conclusion is correct?',
      options: [
        { text: 'Second order, $k = 0.0230\\ \\text{M}^{-1}\\,\\text{min}^{-1}$', why: 'A second-order reaction gives a straight line for $1/[\\ce{A}]$ vs $t$, which here is curved.' },
        { text: 'First order, $k = 0.0230\\ \\text{min}^{-1}$', correct: true, why: 'A linear $\\ln[\\ce{A}]$ plot is the signature of first order, and its slope is $-k$.' },
        { text: 'First order, $k = -0.0230\\ \\text{min}^{-1}$', why: 'The slope is $-k$, so $k = +0.0230$. Rate constants are positive.' },
        { text: 'Zero order, $k = 0.0230\\ \\text{M}\\,\\text{min}^{-1}$', why: 'Zero order would make the plain $[\\ce{A}]$ vs $t$ plot straight.' },
      ],
      explanation: 'Match the straight plot to the integrated law: $\\ln[\\ce{A}] = \\ln[\\ce{A}]_0 - kt$ is a line with slope $-k$. So the reaction is first order with $k = 0.0230\\ \\text{min}^{-1}$ (units of 1/time, as a first-order $k$ must have).',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'concept',
      title: 'Half-life, and why only first order has a constant one',
      blocks: [
        {
          type: 'p',
          text: 'The [[half-life|half-life]] $t_{1/2}$ is the time for $[\\ce{A}]$ to fall to half its starting value. Substitute $[\\ce{A}] = \\tfrac{1}{2}[\\ce{A}]_0$ into each integrated law:',
        },
        {
          type: 'derivation',
          title: 'First-order half-life',
          steps: [
            { tex: '\\ln\\frac{[\\ce{A}]_0}{[\\ce{A}]} = kt', why: 'The first-order law, rearranged.' },
            { tex: '\\ln\\frac{[\\ce{A}]_0}{\\tfrac{1}{2}[\\ce{A}]_0} = kt_{1/2} \\implies \\ln 2 = kt_{1/2}', why: 'At $t = t_{1/2}$ the ratio is 2. The starting concentration **cancels**.' },
            { tex: 't_{1/2} = \\frac{\\ln 2}{k} \\approx \\frac{0.693}{k}', why: 'Solve for $t_{1/2}$.' },
          ],
        },
        {
          type: 'table',
          headers: ['order', 'half-life', 'depends on $[\\ce{A}]_0$?', 'successive half-lives'],
          rows: [
            ['0', '$t_{1/2} = \\frac{[\\ce{A}]_0}{2k}$', 'yes, proportional', 'each one **half** as long'],
            ['1', '$t_{1/2} = \\frac{\\ln 2}{k}$', 'no', 'all equal'],
            ['2', '$t_{1/2} = \\frac{1}{k[\\ce{A}]_0}$', 'yes, inversely', 'each one **twice** as long'],
          ],
          caption: 'From $\\tfrac{1}{2}[\\ce{A}]_0 = [\\ce{A}]_0 - kt_{1/2}$ (zero order) and $\\frac{2}{[\\ce{A}]_0} = \\frac{1}{[\\ce{A}]_0} + kt_{1/2}$ (second order). "Successive" means each new half-life starts from the concentration left by the previous one.',
        },
        {
          type: 'graph',
          x: [0, 40],
          y: [0, 110],
          xStep: 5,
          yStep: 25,
          functions: [
            { expr: '100*2^(-x/h)', label: 'first order (% remaining)', color: 'blue' },
            { expr: '100/(1 + x/h)', label: 'second order, same first half-life', color: 'purple', dashed: true },
          ],
          points: [
            { x: 'h', y: 50, label: '50%' },
            { x: '2h', y: 25, label: '' },
            { x: '3h', y: 12.5, label: '' },
            { x: '3h', y: 25, label: '' },
          ],
          vlines: [
            { x: 'h', color: 'gray' },
            { x: '2h', color: 'gray' },
            { x: '3h', color: 'gray' },
          ],
          sliders: [{ name: 'h', min: 2, max: 12, step: 0.5, value: 6, label: 'first half-life $t_{1/2}$' }],
          caption: 'Blue: every interval of length $t_{1/2}$ halves what is left (50%, 25%, 12.5% at the gray lines). Purple: a second-order reaction tuned to the same first half-life needs a second half-life twice as long; it only reaches 25% at $3t_{1/2}$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why first order is the only constant half-life',
          text: 'In $\\frac{d[\\ce{A}]}{dt} = -k[\\ce{A}]$, scaling $[\\ce{A}]$ by any factor scales the rate by the same factor, so the **fractional** rate $\\frac{1}{[\\ce{A}]}\\frac{d[\\ce{A}]}{dt} = -k$ never changes. The reaction has no memory of how much it started with: halving always takes the same time. For order $n \\ne 1$ the fractional rate is $-k[\\ce{A}]^{n-1}$, which shrinks (for $n > 1$) or grows (for $n < 1$) as A is consumed, so each half-life is longer or shorter than the last.',
        },
      ],
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'truefalse',
      prompt: 'A second-order reaction takes 10 minutes for $[\\ce{A}]$ to fall from 0.80 M to 0.40 M. It will take another 10 minutes to fall from 0.40 M to 0.20 M.',
      answer: false,
      explanation: 'For second order, $t_{1/2} = \\frac{1}{k[\\ce{A}]_0}$ is inversely proportional to the starting concentration. Starting from 0.40 M (half as much) the half-life doubles to **20 minutes**. Check: $k = \\frac{1}{(10)(0.80)} = 0.125\\ \\text{M}^{-1}\\text{min}^{-1}$, and $\\frac{1}{(0.125)(0.40)} = 20$ min. Only first-order reactions have a constant half-life.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'concept',
      title: 'Worked examples: N₂O₅, medicines and radiocarbon',
      blocks: [
        {
          type: 'p',
          text: 'Dinitrogen pentoxide decomposes as $\\ce{2N2O5(g) -> 4NO2(g) + O2(g)}$ with a first-order rate law, $-\\frac{d[\\ce{N2O5}]}{dt} = k[\\ce{N2O5}]$, and $k = 5.0 \\times 10^{-4}\\ \\text{s}^{-1}$ at 45 °C.',
        },
        {
          type: 'derivation',
          title: '$\\ce{N2O5}$: half-life and what remains after an hour',
          steps: [
            { tex: 't_{1/2} = \\frac{\\ln 2}{k} = \\frac{0.6931}{5.0 \\times 10^{-4}\\ \\text{s}^{-1}} = 1.4 \\times 10^{3}\\ \\text{s}\\ (23\\ \\text{min})', why: 'First-order half-life; it does not matter how much $\\ce{N2O5}$ you start with.' },
            { tex: '[\\ce{N2O5}] = [\\ce{N2O5}]_0\\,e^{-kt} = (0.0200\\ \\text{M})\\,e^{-(5.0 \\times 10^{-4}\\ \\text{s}^{-1})(3600\\ \\text{s})}', why: 'Start at 0.0200 M; one hour is 3600 s. The units in the exponent cancel, as they must.' },
            { tex: '= (0.0200\\ \\text{M})\\,e^{-1.80} = (0.0200)(0.165) = 3.3 \\times 10^{-3}\\ \\text{M}', why: 'About 16.5% remains. Check with half-lives: one hour is $3600/1386 = 2.6$ half-lives, and $2^{-2.6} = 0.165$.' },
          ],
        },
        {
          type: 'p',
          text: '**Drug elimination.** The body clears most medicines by first-order kinetics: liver enzymes and the kidneys remove a fixed **fraction** of the drug per hour, so doctors talk about half-lives. Caffeine in a healthy adult has a half-life of roughly 5 hours (it varies a lot between people).',
        },
        {
          type: 'derivation',
          title: 'A 200 mg dose of caffeine, half-life 5.0 h',
          steps: [
            { tex: 'k = \\frac{\\ln 2}{t_{1/2}} = \\frac{0.6931}{5.0\\ \\text{h}} = 0.139\\ \\text{h}^{-1}', why: 'Convert the half-life to a rate constant.' },
            { tex: 'm(24\\ \\text{h}) = (200\\ \\text{mg})\\,e^{-(0.139)(24)} = (200\\ \\text{mg})\\left(\\tfrac{1}{2}\\right)^{24/5.0} = 7.2\\ \\text{mg}', why: 'Either form works: $e^{-kt} = e^{-(\\ln 2) t/t_{1/2}} = 2^{-t/t_{1/2}}$. Amount in the body is proportional to concentration, so the same law applies to milligrams.' },
            { tex: '200 \\to 100 \\to 50 \\to 25\\ \\text{mg}: \\quad 3 \\times 5.0\\ \\text{h} = 15\\ \\text{h}', why: 'Falling to one eighth takes exactly three half-lives.' },
          ],
          result: 'A cup of coffee at 6 p.m. still leaves about a quarter of its caffeine in you at 4 a.m. Dosing schedules ("every 8 hours") are set from half-lives so the level stays in the useful range.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Not everything is first order',
          text: 'Ethanol is the classic exception. The liver enzyme that oxidizes it is saturated even at modest blood alcohol levels, so elimination is roughly **zero order**: a constant amount per hour (very roughly 0.015 g/dL of blood alcohol per hour), whatever the level. That is why "sleeping it off" takes a predictable number of hours and why nothing speeds it up much. You will see why enzymes saturate in the mechanisms lesson.',
        },
        {
          type: 'p',
          text: '**Radioactive decay** is the cleanest first-order process in nature: each nucleus has a fixed probability of decaying per second, regardless of temperature, chemistry or how many neighbors it has. The number of nuclei follows $N = N_0e^{-kt}$ with $t_{1/2} = \\frac{\\ln 2}{k}$. Carbon-14, with $t_{1/2} = 5730$ years, is the basis of radiocarbon dating: a sample with 25% of the living level of $\\ce{^{14}C}$ is two half-lives, about 11 500 years, old. The nuclear chemistry unit develops this fully.',
        },
      ],
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'numeric',
      prompt: 'A soldier takes a 200 mg dose of caffeine. Assuming first-order elimination with a half-life of 5.0 h, how much remains in the body after 12 h? Give three significant figures.',
      hint: '$m = 200 \\times \\left(\\tfrac{1}{2}\\right)^{12/5.0}$',
      label: '$m =$',
      unit: 'mg',
      answer: '200*0.5^(12/5)',
      answerTex: '37.9\\ \\text{mg}',
      tolerance: 0.06,
      explanation: 'Twelve hours is $12/5.0 = 2.4$ half-lives, so the fraction left is $\\left(\\tfrac{1}{2}\\right)^{2.4} = 0.189$, and $200 \\times 0.189 = 37.9$ mg. With $k$: $k = 0.6931/5.0 = 0.1386\\ \\text{h}^{-1}$ and $200e^{-(0.1386)(12)} = 200e^{-1.664} = 37.9$ mg, the same answer. Sanity check: 2 half-lives would leave 50 mg and 3 would leave 25 mg, so 37.9 mg is in the right range.',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'fill',
      prompt: 'Complete the half-life formulas.',
      template: 'Zero order: $t_{1/2} =$ ___. First order: $t_{1/2} =$ ___. Second order: $t_{1/2} =$ ___.',
      blanks: [{ answers: ['$\\frac{[\\ce{A}]_0}{2k}$'] }, { answers: ['$\\frac{\\ln 2}{k}$'] }, { answers: ['$\\frac{1}{k[\\ce{A}]_0}$'] }],
      wordBank: ['$\\frac{[\\ce{A}]_0}{2k}$', '$\\frac{\\ln 2}{k}$', '$\\frac{1}{k[\\ce{A}]_0}$', '$\\frac{k}{\\ln 2}$', '$\\frac{2k}{[\\ce{A}]_0}$', '$\\frac{[\\ce{A}]_0}{k}$'],
      explanation: 'Set $[\\ce{A}] = \\tfrac{1}{2}[\\ce{A}]_0$ in each integrated law. Zero order: $\\tfrac{1}{2}[\\ce{A}]_0 = [\\ce{A}]_0 - kt_{1/2}$ gives $\\frac{[\\ce{A}]_0}{2k}$. First order: $\\ln 2 = kt_{1/2}$. Second order: $\\frac{2}{[\\ce{A}]_0} - \\frac{1}{[\\ce{A}]_0} = kt_{1/2}$ gives $\\frac{1}{k[\\ce{A}]_0}$. A quick unit check catches the inverted distractors: each formula must come out in units of time.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'error',
      prompt: 'A first-order reaction has $k = 0.0350\\ \\text{min}^{-1}$. A student finds how long it takes for $[\\ce{A}]$ to fall from 1.00 M to 0.200 M. Tap the first wrong line.',
      lines: [
        '$\\ln[\\ce{A}] = \\ln[\\ce{A}]_0 - kt$, so $t = \\frac{1}{k}\\ln\\frac{[\\ce{A}]_0}{[\\ce{A}]}$',
        '$\\frac{[\\ce{A}]_0}{[\\ce{A}]} = \\frac{1.00}{0.200} = 5.00$',
        '$\\log 5.00 = 0.699$',
        '$t = \\frac{0.699}{0.0350\\ \\text{min}^{-1}} = 20.0$ min',
      ],
      errorLines: [3],
      explanation: 'The integrated law uses the **natural** logarithm, because it came from $\\int \\frac{dc}{c} = \\ln c$. The student used $\\log_{10}$. Correctly, $\\ln 5.00 = 1.609$ and $t = \\frac{1.609}{0.0350} = 46.0$ min. A sanity check would have caught it: the half-life is $\\frac{0.693}{0.0350} = 19.8$ min, so after 20 min about 0.50 M is left, not 0.200 M. Falling to 0.200 M must take between two half-lives (0.25 M) and three (0.125 M), and 46.0 min fits.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'concept',
      title: 'When there is no formula: Euler\'s method',
      blocks: [
        {
          type: 'p',
          text: 'Real systems often have rate laws you cannot integrate by hand: several coupled reactions, or orders like $\\tfrac{3}{2}$ mixed with temperature that changes as heat is released. Then you integrate numerically, exactly as you did with [[eulers-method|Euler\'s method]] in Calculus II: step forward using the current slope.',
        },
        {
          type: 'math',
          tex: '[\\ce{A}]_{i+1} = [\\ce{A}]_i + \\Delta t \\cdot \\left(\\frac{d[\\ce{A}]}{dt}\\right)_i = [\\ce{A}]_i - \\Delta t \\cdot k[\\ce{A}]_i^{\\,n}',
          caption: 'New value = old value + slope × step. The rate law supplies the slope.',
        },
        {
          type: 'code',
          title: 'euler_kinetics.cpp',
          code: `#include <cmath>
#include <cstdio>

// First-order rate law: d[A]/dt = -k[A]
double dAdt(double A, double k) { return -k * A; }

int main() {
    const double k = 0.50;    // 1/min
    const double A0 = 1.00;   // M
    const double tEnd = 4.0;  // min
    const double exact = A0 * std::exp(-k * tEnd);
    const double steps[] = {1.0, 0.5, 0.1, 0.01};

    std::printf("exact [A] at 4 min = %.5f M\\n", exact);
    for (double dt : steps) {
        double A = A0;
        long n = std::lround(tEnd / dt);
        for (long i = 0; i < n; ++i) {
            A += dAdt(A, k) * dt;  // Euler step: new = old + slope * dt
        }
        std::printf("dt = %.2f min: Euler = %.5f M, error = %+.5f M\\n", dt, A, A - exact);
    }
}`,
          output: `exact [A] at 4 min = 0.13534 M
dt = 1.00 min: Euler = 0.06250 M, error = -0.07284 M
dt = 0.50 min: Euler = 0.10011 M, error = -0.03522 M
dt = 0.10 min: Euler = 0.12851 M, error = -0.00682 M
dt = 0.01 min: Euler = 0.13466 M, error = -0.00068 M`,
          runnable: true,
          annotations: [
            { lines: 5, text: 'The rate law is the only chemistry in the program. Swap in `-k * A * A` for second order, or any function you like.' },
            { lines: 11, text: 'The exact solution $[\\ce{A}]_0e^{-kt}$, for comparison.' },
            { lines: '18-20', text: 'Each step moves along the tangent line for time `dt`. For first order each step multiplies $[\\ce{A}]$ by $(1 - k\\Delta t)$.' },
          ],
        },
        {
          type: 'p',
          text: 'Two lessons from the output. First, the error shrinks in proportion to $\\Delta t$ (cut the step by 10, cut the error by about 10): Euler is a first-order method. Second, Euler **undershoots** here, because the decay curve is concave up and the tangent line always lies below it. With $\\Delta t = 1$ min, each step multiplies by $1 - 0.5 = 0.5$, giving $0.5^4 = 0.0625$ instead of $e^{-2} = 0.135$.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Stiffness: why simulations explode',
          text: 'If $k\\Delta t > 1$ the factor $1 - k\\Delta t$ is negative and the simulated concentration goes **below zero**; if $k\\Delta t > 2$ it oscillates with growing amplitude. Fast reactions (large $k$) therefore force tiny time steps. This is the same instability you see when a game\'s spring or damping force is integrated with too large a frame time. Chemical simulators use implicit or adaptive methods (for instance, `[A] /= (1 + k*dt)`, the implicit-Euler update for first order, is stable for any step).',
        },
      ],
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'order',
      prompt: 'Put the derivation of the first-order integrated rate law in order.',
      lines: [
        '$\\frac{d[\\ce{A}]}{dt} = -k[\\ce{A}]$',
        '$\\frac{d[\\ce{A}]}{[\\ce{A}]} = -k\\,dt$',
        '$\\ln[\\ce{A}] - \\ln[\\ce{A}]_0 = -kt$',
        '$[\\ce{A}] = [\\ce{A}]_0e^{-kt}$',
      ],
      distractors: ['$\\frac{1}{[\\ce{A}]} = \\frac{1}{[\\ce{A}]_0} + kt$'],
      explanation: 'Rate law → separate variables → integrate both sides from $(0, [\\ce{A}]_0)$ to $(t, [\\ce{A}])$ → exponentiate. The distractor is the **second-order** result, which comes from integrating $[\\ce{A}]^{-2}$ instead of $[\\ce{A}]^{-1}$.',
    },
    // ------------------------------------------------------------------ 16
    {
      kind: 'numeric',
      prompt: 'Carbon-14 decays by first-order kinetics with a half-life of 5730 years. What fraction of the original $\\ce{^{14}C}$ remains in a piece of charcoal after 10 000 years? Give the fraction as a decimal to three significant figures.',
      hint: 'Fraction $= \\left(\\tfrac{1}{2}\\right)^{t/t_{1/2}} = e^{-kt}$ with $k = \\frac{\\ln 2}{5730\\ \\text{yr}}$.',
      label: '$N/N_0 =$',
      answer: '0.5^(10000/5730)',
      answerTex: '0.298',
      tolerance: 0.0006,
      explanation: '$\\frac{10\\,000}{5730} = 1.745$ half-lives, so $N/N_0 = \\left(\\tfrac{1}{2}\\right)^{1.745} = 0.298$. Equivalently $k = \\frac{0.6931}{5730} = 1.210 \\times 10^{-4}\\ \\text{yr}^{-1}$ and $e^{-(1.210 \\times 10^{-4})(10\\,000)} = e^{-1.210} = 0.298$. Between one half-life (0.50) and two (0.25), as it should be.',
    },
  ],
  takeaways: [
    'A rate law $\\frac{d[\\ce{A}]}{dt} = -k[\\ce{A}]^n$ is a separable differential equation; integrating from $(0, [\\ce{A}]_0)$ gives the integrated rate law.',
    'Zero order: $[\\ce{A}] = [\\ce{A}]_0 - kt$. First order: $\\ln[\\ce{A}] = \\ln[\\ce{A}]_0 - kt$, i.e. $[\\ce{A}] = [\\ce{A}]_0e^{-kt}$. Second order: $\\frac{1}{[\\ce{A}]} = \\frac{1}{[\\ce{A}]_0} + kt$.',
    'The order is the one whose plot ($[\\ce{A}]$, $\\ln[\\ce{A}]$ or $1/[\\ce{A}]$ vs $t$) is straight; the slope is $-k$, $-k$ or $+k$.',
    'Half-lives: $\\frac{[\\ce{A}]_0}{2k}$, $\\frac{\\ln 2}{k}$, $\\frac{1}{k[\\ce{A}]_0}$. Only first order is independent of $[\\ce{A}]_0$, because its fractional rate is constant.',
    'Drug elimination and radioactive decay are first order; ethanol elimination is roughly zero order.',
    'Euler\'s method $[\\ce{A}]_{i+1} = [\\ce{A}]_i + \\Delta t \\cdot \\text{slope}$ approximates any rate law; its error is proportional to $\\Delta t$, and it becomes unstable when $k\\Delta t$ is too large.',
  ],
  reading: [
    {
      title: 'OpenStax Chemistry 2e — Chapter 12: Kinetics',
      url: 'https://openstax.org/books/chemistry-2e/pages/12-introduction',
      source: 'openstax',
      note: 'Section 12.4 (Integrated Rate Laws) has graphical order determination and half-life practice problems.',
    },
    {
      title: 'LibreTexts Chemistry',
      url: 'https://chem.libretexts.org/',
      source: 'libretexts',
      note: 'Search "integrated rate laws" for derivations of the zero-, first- and second-order forms and the A + B second-order case.',
    },
    {
      title: 'Euler method (Wikipedia)',
      url: 'https://en.wikipedia.org/wiki/Euler_method',
      source: 'wikipedia',
      note: 'Error analysis and the stability condition behind the "simulation explodes" behavior described in this lesson.',
    },
  ],
};
