import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'gchem-rates-rate-laws',
  title: 'Reaction Rates and Rate Laws',
  summary: 'How fast a reaction goes: average and instantaneous rates as slopes and derivatives, rates of each species, the rate law, reaction orders, units of k, and the method of initial rates.',
  minutes: 19,
  objectives: [
    'Compute an average rate from concentration–time data and interpret it as the slope of a secant line',
    'Define the instantaneous rate as a derivative, $-\\frac{d[\\ce{A}]}{dt}$, and read it from a tangent line',
    'Relate the rates of disappearance and formation of every species through the stoichiometric coefficients',
    'Write a rate law $\\text{rate} = k[\\ce{A}]^m[\\ce{B}]^n$, state the overall order and give the units of $k$',
    'Determine reaction orders and the rate constant from initial-rate data, including non-integer orders by logarithms',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Whether versus how fast',
      blocks: [
        {
          type: 'p',
          text: 'Thermochemistry told you whether a reaction releases energy. It says nothing about **how fast** it happens. Diamond turning into graphite is downhill in energy, yet a diamond ring will outlast you by a few billion years. A mixture of hydrogen and oxygen can sit in a balloon for years, then react in a millisecond when a spark hits it. *Chemical kinetics* is the study of reaction speeds and of the molecular steps that set them.',
        },
        {
          type: 'p',
          text: 'Speed means a change per unit time. For a reaction, the thing that changes is a concentration (in molarity, $\\text{M} = \\text{mol/L}$, from the [[molarity]] lesson). Take the decomposition of hydrogen peroxide, the reaction that makes an old bottle of drugstore peroxide lose its fizz:',
        },
        {
          type: 'math',
          tex: '\\ce{2H2O2(aq) -> 2H2O(l) + O2(g)}',
        },
        {
          type: 'table',
          headers: ['$t$ (h)', '$[\\ce{H2O2}]$ (M)', 'change over the previous 6 h (M)'],
          rows: [
            ['$0$', '$1.000$', '—'],
            ['$6.00$', '$0.500$', '$-0.500$'],
            ['$12.00$', '$0.250$', '$-0.250$'],
            ['$18.00$', '$0.125$', '$-0.125$'],
            ['$24.00$', '$0.0625$', '$-0.0625$'],
          ],
          caption: 'Decomposition of $\\ce{H2O2}$ in water at room temperature (with a trace of catalyst). Data in the style of OpenStax *Chemistry 2e*, Section 12.1.',
        },
        {
          type: 'definition',
          term: 'Average rate',
          text: 'The [[gchem-reaction-rate|rate]] of a reaction over a time interval is the change in concentration divided by the elapsed time. For a reactant, the concentration falls, so we put a minus sign in front to make the rate positive:\n\n$$\\text{average rate} = -\\frac{\\Delta[\\ce{H2O2}]}{\\Delta t} = -\\frac{[\\ce{H2O2}]_2 - [\\ce{H2O2}]_1}{t_2 - t_1}$$',
        },
        {
          type: 'derivation',
          title: 'Average rate over the first 6 hours',
          steps: [
            { tex: '-\\frac{\\Delta[\\ce{H2O2}]}{\\Delta t} = -\\frac{0.500\\ \\text{M} - 1.000\\ \\text{M}}{6.00\\ \\text{h} - 0\\ \\text{h}}', why: 'Final minus initial in both numerator and denominator, read from the first two rows of the table.' },
            { tex: '= -\\frac{-0.500\\ \\text{M}}{6.00\\ \\text{h}} = 0.0833\\ \\text{M/h}', why: 'The concentration fell, so $\\Delta[\\ce{H2O2}]$ is negative and the minus sign makes the rate positive. Units: molarity per hour.' },
          ],
          result: 'Over the next 6 hours the average rate is only $0.250/6.00 = 0.0417$ M/h. The reaction **slows down** as the peroxide is used up, which is the rule rather than the exception.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why rates usually fall with time',
          text: 'Molecules react when they meet (or, for a decomposition, when an individual molecule happens to fall apart). Fewer molecules per liter means fewer such events per second per liter. So a reaction that is fast at the start naturally slows as reactants are consumed. Exactly *how* the rate depends on concentration is what the rate law in this lesson captures.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'numeric',
      prompt: 'Using the $\\ce{H2O2}$ table, find the average rate of disappearance of $\\ce{H2O2}$ over the whole 24-hour period, from $t = 0$ to $t = 24.00$ h. Give three significant figures.',
      hint: '$-\\frac{0.0625 - 1.000}{24.00 - 0}$',
      label: 'average rate $=$',
      unit: 'M/h',
      answer: '(1.000 - 0.0625)/24.00',
      answerTex: '0.0391\\ \\text{M/h}',
      tolerance: 0.00006,
      explanation: '$-\\frac{\\Delta[\\ce{H2O2}]}{\\Delta t} = -\\frac{0.0625 - 1.000}{24.00}\\ \\text{M/h} = \\frac{0.9375}{24.00} = 0.0391$ M/h. This single number hides a lot: the true rate starts near 0.116 M/h and ends near 0.007 M/h. An average over a long interval is a poor description of a reaction whose rate changes, which is why we need the instantaneous rate next.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'The instantaneous rate is a derivative',
      blocks: [
        {
          type: 'p',
          text: 'You have met this problem before. The average rate is the slope of a [[secant-line|secant line]] through two points of the $[\\ce{H2O2}]$ versus $t$ curve. To get the rate **at one instant**, shrink the interval: the secant pivots into the [[tangent-line|tangent line]], and its slope becomes a [[derivative]].',
        },
        {
          type: 'definition',
          term: 'Instantaneous rate',
          text: 'The instantaneous rate of disappearance of a reactant A at time $t$ is\n\n$$\\text{rate} = -\\frac{d[\\ce{A}]}{dt} = -\\lim_{\\Delta t \\to 0} \\frac{\\Delta[\\ce{A}]}{\\Delta t},$$\n\nthe negative of the slope of the tangent line to the $[\\ce{A}]$–$t$ curve. The rate at $t = 0$ is called the **initial rate**.',
        },
        {
          type: 'graph',
          x: [0, 24],
          y: [0, 1.1],
          xStep: 6,
          yStep: 0.25,
          functions: [{ expr: 'e^(-0.11552x)', label: '$[\\ce{H2O2}]$ (M) vs $t$ (h)', color: 'blue' }],
          points: [
            { x: 0, y: 1, label: '' },
            { x: 6, y: 0.5, label: '' },
            { x: 12, y: 0.25, label: '' },
            { x: 18, y: 0.125, label: '' },
            { x: 24, y: 0.0625, label: '' },
          ],
          tangents: [
            { expr: 'e^(-0.11552x)', at: 'a', color: 'green' },
            { expr: 'e^(-0.11552x)', at: 'a', secantTo: 'a + h', color: 'orange' },
          ],
          sliders: [
            { name: 'a', min: 0, max: 18, step: 0.5, value: 6, label: 'time $a$ (h)' },
            { name: 'h', min: 0.1, max: 6, step: 0.1, value: 6, label: 'interval $h$ (h)' },
          ],
          readouts: [
            { label: 'average rate over $[a, a+h]$ (M/h) $=$', expr: '(e^(-0.11552a) - e^(-0.11552(a+h)))/h', digits: 4 },
            { label: 'instantaneous rate at $a$ (M/h) $=$', expr: '0.11552e^(-0.11552a)', digits: 4 },
          ],
          caption: 'The orange secant through $t = a$ and $t = a + h$ gives the average rate; the green tangent at $t = a$ gives the instantaneous rate. Shrink $h$ and the two readouts converge. Slide $a$ to the right: the tangent flattens because the reaction slows.',
        },
        {
          type: 'table',
          headers: ['interval starting at 6.00 h', 'average rate (M/h)'],
          rows: [
            ['$h = 6$ h', '$0.0417$'],
            ['$h = 3$ h', '$0.0488$'],
            ['$h = 1$ h', '$0.0546$'],
            ['$h = 0.1$ h', '$0.0574$'],
            ['$h \\to 0$', '$0.0578$ (the instantaneous rate)'],
          ],
          caption: 'Secant slopes converging to the tangent slope at $t = 6.00$ h, computed from the smooth curve through the data.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Mind the sign',
          text: 'The slope $\\frac{d[\\ce{A}]}{dt}$ of a reactant curve is **negative**; the rate is the positive number $-\\frac{d[\\ce{A}]}{dt}$. For a product the curve rises, its slope is already positive, and the rate of formation is $+\\frac{d[\\ce{P}]}{dt}$. Reaction rates are always reported as positive quantities.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Rates from sampled data are finite differences',
          text: 'A lab instrument (or a game simulation) gives you samples `c[i]` at times `t[i]`, never a formula. The forward difference `(c[i+1] - c[i]) / dt` is the secant slope and is biased for a curving signal. The central difference `(c[i+1] - c[i-1]) / (2*dt)` is usually far more accurate, because its errors from the curvature cancel to first order. At $t = 6$ h with 6-hour spacing it gives $0.0625$ M/h, much closer to the true $0.0578$ than the forward value $0.0417$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'truefalse',
      prompt: 'For a reaction whose rate decreases with time, the average rate over $[0, t]$ is always smaller than the initial rate.',
      answer: true,
      explanation: 'If the instantaneous rate is decreasing, then over $[0, t]$ it is at most its starting value, and below it for $t > 0$. The average rate is the mean of the instantaneous rate over the interval (by the Mean Value Theorem it equals the instantaneous rate at some time inside), so it must be smaller than the initial rate. For the peroxide: initial rate $0.116$ M/h, average over the first 6 h $0.0833$ M/h.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'One reaction, one rate: dividing by the coefficients',
      blocks: [
        {
          type: 'p',
          text: 'In $\\ce{2H2O2 -> 2H2O + O2}$, every 2 mol of peroxide that disappear produce only 1 mol of oxygen. So $\\ce{O2}$ appears at **half** the speed $\\ce{H2O2}$ disappears. Which number is "the" rate? To get a single answer, chemists divide each species\' rate by its coefficient.',
        },
        {
          type: 'theorem',
          name: 'Rate of reaction',
          tex: '\\ce{aA + bB -> cC + dD}: \\quad \\text{rate} = -\\frac{1}{a}\\frac{d[\\ce{A}]}{dt} = -\\frac{1}{b}\\frac{d[\\ce{B}]}{dt} = \\frac{1}{c}\\frac{d[\\ce{C}]}{dt} = \\frac{1}{d}\\frac{d[\\ce{D}]}{dt}',
          text: 'Reactants get a minus sign (their concentrations fall); products do not. Every term gives the same positive number.',
        },
        {
          type: 'derivation',
          title: 'Decomposition of dinitrogen pentoxide',
          steps: [
            { tex: '\\ce{2N2O5(g) -> 4NO2(g) + O2(g)}, \\quad -\\frac{d[\\ce{N2O5}]}{dt} = 4.2 \\times 10^{-7}\\ \\text{M/s}', why: 'Given: at some instant, $\\ce{N2O5}$ disappears at this rate.' },
            { tex: '\\text{rate} = -\\frac{1}{2}\\frac{d[\\ce{N2O5}]}{dt} = 2.1 \\times 10^{-7}\\ \\text{M/s}', why: 'Divide by the coefficient of $\\ce{N2O5}$, which is 2.' },
            { tex: '\\frac{d[\\ce{NO2}]}{dt} = 4 \\times \\text{rate} = 8.4 \\times 10^{-7}\\ \\text{M/s}', why: 'From $\\text{rate} = \\frac{1}{4}\\frac{d[\\ce{NO2}]}{dt}$: four $\\ce{NO2}$ form per "reaction event", so $\\ce{NO2}$ appears twice as fast as $\\ce{N2O5}$ disappears.' },
            { tex: '\\frac{d[\\ce{O2}]}{dt} = 1 \\times \\text{rate} = 2.1 \\times 10^{-7}\\ \\text{M/s}', why: 'Oxygen has coefficient 1, so its rate of formation equals the rate of reaction.' },
          ],
          result: 'Four species-rates, one reaction rate. The ratios are exactly the mole ratios from stoichiometry, now applied per second.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why dividing by coefficients works',
          text: 'Mole ratios hold for any amount of reaction, including the tiny amount in a time $dt$. If the reaction advances by $d\\xi$ "batches" per liter, then $d[\\ce{A}] = -a\\,d\\xi$ and $d[\\ce{D}] = +d\\,d\\xi$. Divide by $dt$ and by the coefficients and every species gives the same $\\frac{d\\xi}{dt}$. That common value is the rate of reaction.',
        },
        {
          type: 'callout',
          variant: 'warning',
          text: 'The rate of reaction depends on how you **write** the equation. Writing $\\ce{N2O5 -> 2NO2 + 1/2O2}$ instead doubles the stated rate (now $-\\frac{d[\\ce{N2O5}]}{dt}$ itself). Always quote the balanced equation alongside a rate or a rate constant.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'numeric',
      prompt: 'In the first step of making nitric acid, ammonia is burned over a platinum catalyst: $\\ce{4NH3(g) + 5O2(g) -> 4NO(g) + 6H2O(g)}$. At one instant $\\ce{O2}$ is consumed at $0.25$ M/s. How fast is $\\ce{H2O}$ being formed?',
      hint: '$-\\frac{1}{5}\\frac{d[\\ce{O2}]}{dt} = \\frac{1}{6}\\frac{d[\\ce{H2O}]}{dt}$',
      label: '$\\frac{d[\\ce{H2O}]}{dt} =$',
      unit: 'M/s',
      answer: '0.25*6/5',
      answerTex: '0.30\\ \\text{M/s}',
      tolerance: 0.005,
      explanation: 'The rate of reaction is $\\frac{0.25}{5} = 0.050$ M/s. Water has coefficient 6, so $\\frac{d[\\ce{H2O}]}{dt} = 6 \\times 0.050 = 0.30$ M/s. Check the direction of the ratio: 6 water molecules form for every 5 oxygen molecules used, so water must appear **faster** than oxygen disappears.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'The rate law',
      blocks: [
        {
          type: 'p',
          text: 'Rates depend on concentrations, and experiment shows that for many reactions the dependence is a simple power law. Measure the initial rate at different starting concentrations and you can fit an equation of this form:',
        },
        {
          type: 'theorem',
          name: 'Rate law (differential rate law)',
          tex: '\\text{rate} = k[\\ce{A}]^m[\\ce{B}]^n',
          text: '$k$ is the [[gchem-rate-constant|rate constant]]: it depends on temperature (and on a catalyst, if present) but **not** on concentration. The exponents $m$ and $n$ are the [[gchem-reaction-order|orders]] with respect to A and B; $m + n$ is the **overall order**.',
        },
        {
          type: 'p',
          text: 'The orders are **found by experiment**. They are usually small integers (0, 1, 2), occasionally fractions or negative numbers, and in general they are *not* the coefficients of the balanced equation. Some measured rate laws:',
        },
        {
          type: 'table',
          headers: ['reaction', 'experimental rate law', 'overall order'],
          rows: [
            ['$\\ce{2N2O5 -> 4NO2 + O2}$', '$k[\\ce{N2O5}]$', '1 (not 2)'],
            ['$\\ce{NO2 + CO -> NO + CO2}$ (below about 500 K)', '$k[\\ce{NO2}]^2$', '2 (zero order in CO!)'],
            ['$\\ce{2NO + O2 -> 2NO2}$', '$k[\\ce{NO}]^2[\\ce{O2}]$', '3'],
            ['$\\ce{H2O2 + 3I- + 2H+ -> I3- + 2H2O}$', '$k[\\ce{H2O2}][\\ce{I-}]$', '2'],
            ['$\\ce{CHCl3 + Cl2 -> CCl4 + HCl}$', '$k[\\ce{CHCl3}][\\ce{Cl2}]^{1/2}$', '$\\tfrac{3}{2}$'],
            ['$\\ce{2NH3 -> N2 + 3H2}$ (on hot tungsten)', '$k$', '0'],
          ],
          caption: 'Only the third row happens to match its coefficients. The mechanisms lesson explains where these exponents come from.',
        },
        {
          type: 'p',
          text: 'The order tells you how sensitive the rate is to a concentration. Doubling $[\\ce{A}]$ multiplies the rate by $2^m$: no change for zero order, $\\times 2$ for first order, $\\times 4$ for second order, $\\times 1.41$ for order $\\tfrac{1}{2}$. Try it:',
        },
        {
          type: 'graph',
          x: [0, 2],
          y: [0, 4],
          xStep: 0.5,
          yStep: 1,
          functions: [
            { expr: 'x^m', label: 'rate $= k[\\ce{A}]^m$ (with $k = 1$)', color: 'blue' },
            { expr: 'x', label: 'first order, for comparison', color: 'gray', dashed: true },
          ],
          points: [
            { x: 0.5, y: '0.5^m', label: '' },
            { x: 1, y: 1, label: '' },
            { x: 2, y: '2^m', label: '' },
          ],
          sliders: [{ name: 'm', min: 0, max: 3, step: 0.5, value: 2, label: 'order $m$' }],
          readouts: [{ label: 'doubling $[\\ce{A}]$ multiplies the rate by', expr: '2^m', digits: 3 }],
          caption: 'Horizontal axis: $[\\ce{A}]$ (M). Zero order is a flat line (the rate ignores $[\\ce{A}]$); higher orders bend upward ever more steeply.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Never read orders off the balanced equation',
          text: 'The balanced equation shows the **overall** change, not the sequence of molecular events that achieves it. $\\ce{NO2 + CO}$ has a coefficient of 1 on each reactant, yet the rate does not depend on $[\\ce{CO}]$ at all. The only exception is an *elementary step*, a single molecular collision, which you will meet in the mechanisms lesson.',
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'mcq',
      prompt: 'For $\\ce{NO2(g) + CO(g) -> NO(g) + CO2(g)}$ at 450 K the rate law is $\\text{rate} = k[\\ce{NO2}]^2$. What happens to the rate if $[\\ce{NO2}]$ is tripled and $[\\ce{CO}]$ is doubled at the same time?',
      options: [
        { text: 'It increases by a factor of 6', why: 'That is $3 \\times 2$, treating both reactants as first order. The rate law says CO does not appear at all, and $\\ce{NO2}$ is second order.' },
        { text: 'It increases by a factor of 18', why: 'That is $3^2 \\times 2$: it correctly squares the $\\ce{NO2}$ factor but also counts the CO change. CO is zero order, so $2^0 = 1$.' },
        { text: 'It increases by a factor of 9', correct: true, why: '$\\frac{\\text{rate}_2}{\\text{rate}_1} = \\frac{k(3[\\ce{NO2}])^2}{k[\\ce{NO2}]^2} = 9$; doubling CO multiplies the rate by $2^0 = 1$.' },
        { text: 'It increases by a factor of 3', why: 'That treats $\\ce{NO2}$ as first order, perhaps because its coefficient is 1. Orders come from the rate law, which has the exponent 2.' },
      ],
      explanation: 'Plug the multipliers into the rate law: $(3)^2 \\times (2)^0 = 9$. A species that does not appear in the rate law (zero order) can change by any factor without affecting the rate, even though it is a reactant.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'concept',
      title: 'Units of the rate constant',
      blocks: [
        {
          type: 'p',
          text: 'A rate always has units of concentration per time, M/s. The concentration factors in the rate law carry $\\text{M}^{\\text{(overall order)}}$, so $k$ has to absorb whatever is left over to make the units match. That makes the units of $k$ a quick fingerprint of the overall order.',
        },
        {
          type: 'derivation',
          title: 'Units of $k$ for an overall order $n$',
          steps: [
            { tex: '\\text{rate} = k[\\ce{A}]^n \\implies k = \\frac{\\text{rate}}{[\\ce{A}]^n}', why: 'Solve the rate law for $k$. (With several reactants, $n$ is the sum of the orders.)' },
            { tex: '\\text{units of } k = \\frac{\\text{M s}^{-1}}{\\text{M}^n} = \\text{M}^{1-n}\\,\\text{s}^{-1}', why: 'Divide the units. Exponents subtract: $\\text{M}^1 / \\text{M}^n = \\text{M}^{1-n}$.' },
          ],
        },
        {
          type: 'table',
          headers: ['overall order', 'units of $k$', 'equivalently'],
          rows: [
            ['0', '$\\text{M}\\,\\text{s}^{-1}$', 'mol L⁻¹ s⁻¹'],
            ['1', '$\\text{s}^{-1}$', 'no concentration unit at all'],
            ['2', '$\\text{M}^{-1}\\,\\text{s}^{-1}$', 'L mol⁻¹ s⁻¹'],
            ['3', '$\\text{M}^{-2}\\,\\text{s}^{-1}$', 'L² mol⁻² s⁻¹'],
          ],
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why first-order $k$ is special',
          text: 'A first-order $k$ has units of 1/time only, so its value does not care whether you measure concentration in M, mM or molecules per cm³. It is literally the **fraction of the remaining A that reacts per unit time** (for small fractions): $k = 0.010\\ \\text{s}^{-1}$ means about 1% of the A present reacts each second. The next lesson turns this into exponential decay and a constant half-life.',
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'A favorite exam move: "the rate constant is $3.6 \\times 10^{-3}\\ \\text{M}^{-1}\\text{s}^{-1}$; what is the order?" Read it off the units: $\\text{M}^{-1}$ means $1 - n = -1$, so the reaction is second order overall.',
        },
      ],
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'fill',
      prompt: 'Complete the statements about units of $k$ (rate in M/s).',
      template: 'For $\\text{rate} = k[\\ce{NO}]^2[\\ce{Cl2}]$ the overall order is ___ and $k$ has units ___. A rate constant in $\\text{s}^{-1}$ belongs to a reaction that is ___ order overall.',
      blanks: [{ answers: ['3'] }, { answers: ['$\\text{M}^{-2}\\,\\text{s}^{-1}$'] }, { answers: ['first'] }],
      wordBank: ['2', '3', '$\\text{M}^{-2}\\,\\text{s}^{-1}$', '$\\text{M}^{2}\\,\\text{s}^{-1}$', '$\\text{M}^{-1}\\,\\text{s}^{-1}$', 'first', 'zero', 'second'],
      explanation: 'The orders add: $2 + 1 = 3$. Then $k = \\frac{\\text{M s}^{-1}}{\\text{M}^3} = \\text{M}^{-2}\\,\\text{s}^{-1}$ (the exponent is $1 - 3 = -2$; $\\text{M}^{2}$ has the sign flipped). A $k$ in plain $\\text{s}^{-1}$ means $1 - n = 0$, so $n = 1$: first order.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'The method of initial rates',
      blocks: [
        {
          type: 'p',
          text: 'How do you find the orders? Run the reaction several times, each time changing **one** starting concentration and keeping the others fixed, and measure the rate right at the start (the initial rate). Measuring at $t = 0$ means you know every concentration exactly and products have not built up to interfere. The ratio of two runs then isolates one exponent, because $k$ and the unchanged concentrations cancel.',
        },
        {
          type: 'table',
          headers: ['run', '$[\\ce{NO}]_0$ (M)', '$[\\ce{Cl2}]_0$ (M)', 'initial rate (M/s)'],
          rows: [
            ['1', '$0.0125$', '$0.0255$', '$2.27 \\times 10^{-5}$'],
            ['2', '$0.0125$', '$0.0510$', '$4.55 \\times 10^{-5}$'],
            ['3', '$0.0250$', '$0.0255$', '$9.08 \\times 10^{-5}$'],
          ],
          caption: '$\\ce{2NO(g) + Cl2(g) -> 2NOCl(g)}$ at a fixed temperature. Runs 1 and 2 differ only in $\\ce{Cl2}$; runs 1 and 3 differ only in NO.',
        },
        {
          type: 'derivation',
          title: 'Orders and $k$ for $\\ce{2NO + Cl2 -> 2NOCl}$',
          steps: [
            { tex: '\\frac{\\text{rate}_3}{\\text{rate}_1} = \\frac{k(0.0250)^m(0.0255)^n}{k(0.0125)^m(0.0255)^n}', why: 'Write the rate law $k[\\ce{NO}]^m[\\ce{Cl2}]^n$ for runs 3 and 1, which have the same $[\\ce{Cl2}]$.' },
            { tex: '\\frac{9.08 \\times 10^{-5}}{2.27 \\times 10^{-5}} = 2^m \\implies 4.00 = 2^m \\implies m = 2', why: '$k$ and the $\\ce{Cl2}$ factor cancel, and $\\frac{0.0250}{0.0125} = 2$. Doubling NO quadruples the rate: second order in NO.' },
            { tex: '\\frac{\\text{rate}_2}{\\text{rate}_1} = \\frac{4.55 \\times 10^{-5}}{2.27 \\times 10^{-5}} = 2^n \\implies 2.00 = 2^n \\implies n = 1', why: 'Runs 2 and 1 share $[\\ce{NO}]$, and $[\\ce{Cl2}]$ doubles. Doubling $\\ce{Cl2}$ doubles the rate: first order in $\\ce{Cl2}$.' },
            { tex: '\\text{rate} = k[\\ce{NO}]^2[\\ce{Cl2}]', why: 'Overall order $2 + 1 = 3$.' },
            { tex: 'k = \\frac{\\text{rate}_1}{[\\ce{NO}]^2[\\ce{Cl2}]} = \\frac{2.27 \\times 10^{-5}\\ \\text{M s}^{-1}}{(0.0125\\ \\text{M})^2(0.0255\\ \\text{M})}', why: 'Any run will do once the orders are known; solve the rate law for $k$.' },
            { tex: '= 5.70\\ \\text{M}^{-2}\\,\\text{s}^{-1}', why: '$\\frac{2.27 \\times 10^{-5}}{3.984 \\times 10^{-6}} = 5.70$; units $\\frac{\\text{M s}^{-1}}{\\text{M}^3} = \\text{M}^{-2}\\text{s}^{-1}$, as expected for third order. Runs 2 and 3 give 5.71 and 5.70, a good consistency check.' },
          ],
          result: '$\\text{rate} = 5.70\\ \\text{M}^{-2}\\,\\text{s}^{-1}\\,[\\ce{NO}]^2[\\ce{Cl2}]$.',
        },
        {
          type: 'p',
          text: 'When the factors are not as tidy, take logarithms. In general, if a concentration changes by a factor $c$ and the rate by a factor $r$, then $r = c^m$, so',
        },
        {
          type: 'math',
          tex: 'm = \\frac{\\ln r}{\\ln c} = \\frac{\\ln(\\text{rate ratio})}{\\ln(\\text{concentration ratio})}',
          caption: 'Example: for $\\ce{CHCl3 + Cl2}$, quadrupling $[\\ce{Cl2}]$ only doubles the rate, so the order in $\\ce{Cl2}$ is $\\frac{\\ln 2}{\\ln 4} = \\frac{1}{2}$.',
        },
        {
          type: 'callout',
          variant: 'tip',
          text: 'Measured rates carry experimental error, so a ratio of 1.97 or 4.06 means 2 or 4. Round orders to the nearest simple value (integer or half-integer) only when the data clearly support it, and say so.',
        },
      ],
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'fill',
      prompt: 'Initial-rate data for $\\ce{2NO(g) + 2H2(g) -> N2(g) + 2H2O(g)}$ at a fixed high temperature:',
      tex: '\\begin{array}{cccc} \\text{run} & [\\ce{NO}]_0\\ (\\text{M}) & [\\ce{H2}]_0\\ (\\text{M}) & \\text{initial rate (M/s)} \\\\ \\hline 1 & 0.0050 & 0.0020 & 1.25 \\times 10^{-5} \\\\ 2 & 0.0100 & 0.0020 & 5.00 \\times 10^{-5} \\\\ 3 & 0.0100 & 0.0040 & 1.00 \\times 10^{-4} \\end{array}',
      template: 'The reaction is order ___ in NO and order ___ in $\\ce{H2}$.',
      blanks: [{ answers: ['2'] }, { answers: ['1'] }],
      hint: 'Runs 1 and 2 differ only in NO. Runs 2 and 3 differ only in $\\ce{H2}$.',
      explanation: 'Runs 1 → 2: $[\\ce{NO}]$ doubles (0.0050 → 0.0100) at fixed $\\ce{H2}$, and the rate goes from $1.25 \\times 10^{-5}$ to $5.00 \\times 10^{-5}$, a factor of 4 $= 2^2$: second order in NO. Runs 2 → 3: $[\\ce{H2}]$ doubles at fixed NO and the rate doubles: first order in $\\ce{H2}$. Note that runs 1 and 3 differ in **both** concentrations, so comparing them directly tells you nothing about either order alone. The rate law is $k[\\ce{NO}]^2[\\ce{H2}]$, even though the coefficient of $\\ce{H2}$ is 2.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'numeric',
      prompt: 'Using the same data ($\\text{rate} = k[\\ce{NO}]^2[\\ce{H2}]$, run 1: $[\\ce{NO}]_0 = 0.0050$ M, $[\\ce{H2}]_0 = 0.0020$ M, rate $= 1.25 \\times 10^{-5}$ M/s), calculate the rate constant $k$. Give three significant figures.',
      hint: '$k = \\frac{\\text{rate}}{[\\ce{NO}]^2[\\ce{H2}]}$, and the units are $\\text{M}^{-2}\\,\\text{s}^{-1}$.',
      label: '$k =$',
      unit: 'M⁻² s⁻¹',
      answer: '1.25*10^-5/(0.0050^2*0.0020)',
      answerTex: '250\\ \\text{M}^{-2}\\,\\text{s}^{-1}',
      tolerance: 0.5,
      explanation: '$[\\ce{NO}]^2[\\ce{H2}] = (0.0050)^2(0.0020) = 5.0 \\times 10^{-8}\\ \\text{M}^3$, so $k = \\frac{1.25 \\times 10^{-5}\\ \\text{M s}^{-1}}{5.0 \\times 10^{-8}\\ \\text{M}^3} = 250\\ \\text{M}^{-2}\\,\\text{s}^{-1}$ ($2.50 \\times 10^{2}$). Runs 2 and 3 give the same value: $\\frac{5.00 \\times 10^{-5}}{(0.0100)^2(0.0020)} = 250$ and $\\frac{1.00 \\times 10^{-4}}{(0.0100)^2(0.0040)} = 250$.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'concept',
      title: 'Putting it together: a procedure you can trust',
      blocks: [
        {
          type: 'steps',
          items: [
            { title: 'Pick a pair of runs', text: 'Find two runs in which only the concentration of A changes. Everything else, including temperature, must be identical.' },
            { title: 'Take the ratio', text: 'Divide the rate laws: $k$ and the fixed concentrations cancel, leaving $\\frac{\\text{rate}_2}{\\text{rate}_1} = \\left(\\frac{[\\ce{A}]_2}{[\\ce{A}]_1}\\right)^m$.' },
            { title: 'Solve for the order', text: 'By inspection (factor 4 from doubling means $m = 2$) or with logarithms, $m = \\frac{\\ln(\\text{rate ratio})}{\\ln(\\text{concentration ratio})}$.' },
            { title: 'Repeat for each reactant', text: 'Use a different pair of runs for each species.' },
            { title: 'Find k', text: 'Substitute any run into the full rate law, solve for $k$ with units, and check that the other runs agree.' },
          ],
        },
        {
          type: 'p',
          text: 'Once you have the rate law you can predict the initial rate for **any** starting mixture. For $\\ce{2NO + Cl2}$ with $[\\ce{NO}]_0 = 0.0200$ M and $[\\ce{Cl2}]_0 = 0.0300$ M: $\\text{rate} = 5.70(0.0200)^2(0.0300) = 6.84 \\times 10^{-5}$ M/s.',
        },
        {
          type: 'callout',
          variant: 'analogy',
          title: 'Controlled experiments',
          text: 'This is the same logic as debugging by changing one variable at a time. If you change two inputs and the output changes, you cannot tell which input caused it. Change one, hold the rest, and the effect is unambiguous.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Other ways to find orders',
          text: 'The method of initial rates needs many runs. A single run, followed over time, also contains the order: the shape of the concentration–time curve is different for zero, first and second order. That is the subject of the next lesson on integrated rate laws.',
        },
      ],
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'error',
      prompt: 'Initial rates for $\\ce{H2O2 + 3I- + 2H+ -> I3- + 2H2O}$ (excess acid): run 1: $[\\ce{H2O2}] = 0.010$ M, $[\\ce{I-}] = 0.010$ M, rate $1.15 \\times 10^{-6}$ M/s; run 2: $[\\ce{H2O2}] = 0.020$ M, $[\\ce{I-}] = 0.010$ M, rate $2.30 \\times 10^{-6}$ M/s; run 3: $[\\ce{H2O2}] = 0.010$ M, $[\\ce{I-}] = 0.030$ M, rate $3.45 \\times 10^{-6}$ M/s. Tap the first wrong line.',
      lines: [
        'Runs 1 → 2: $[\\ce{H2O2}]$ doubles and the rate doubles, so the order in $\\ce{H2O2}$ is 1',
        'Runs 1 → 3: $[\\ce{I-}]$ triples and the rate triples, so the order in $\\ce{I-}$ is 3',
        'Rate law: $\\text{rate} = k[\\ce{H2O2}][\\ce{I-}]^3$',
        '$k = \\frac{1.15 \\times 10^{-6}}{(0.010)(0.010)^3} = 115\\ \\text{M}^{-3}\\,\\text{s}^{-1}$',
      ],
      errorLines: [2],
      explanation: 'The order is the **exponent**, not the factor. Tripling $[\\ce{I-}]$ tripled the rate, so $3^n = 3$ and $n = 1$ (an order of 3 would have multiplied the rate by $3^3 = 27$). The correct rate law is $\\text{rate} = k[\\ce{H2O2}][\\ce{I-}]$, and $k = \\frac{1.15 \\times 10^{-6}}{(0.010)(0.010)} = 0.0115\\ \\text{M}^{-1}\\,\\text{s}^{-1}$. Line 1 happened to be right because $2^1 = 2$, which is exactly why the "factor equals order" shortcut is tempting.',
    },
    // ------------------------------------------------------------------ 16
    {
      kind: 'order',
      prompt: 'Put the steps of the method of initial rates in order.',
      lines: [
        'Run the reaction several times, varying one starting concentration at a time, and measure each initial rate',
        'Choose two runs in which only $[\\ce{A}]$ differs and divide their rate laws',
        'Solve $\\frac{\\text{rate}_2}{\\text{rate}_1} = \\left(\\frac{[\\ce{A}]_2}{[\\ce{A}]_1}\\right)^m$ for $m$, using logarithms if needed',
        'Repeat with a different pair of runs for each other reactant',
        'Substitute one run into the complete rate law to calculate $k$ and its units',
      ],
      distractors: ['Read the orders from the coefficients of the balanced equation'],
      explanation: 'Collect data, isolate one variable per comparison, solve for each order, and only then compute $k$ (you cannot compute $k$ before you know the exponents). The distractor is the classic shortcut that fails for most reactions, such as $\\ce{NO2 + CO}$, which is zero order in CO.',
    },
  ],
  takeaways: [
    'Average rate $= -\\frac{\\Delta[\\ce{A}]}{\\Delta t}$ is a secant slope; the instantaneous rate $-\\frac{d[\\ce{A}]}{dt}$ is a tangent slope (a derivative). Rates are reported as positive numbers.',
    'For $\\ce{aA + bB -> cC + dD}$, rate $= -\\frac{1}{a}\\frac{d[\\ce{A}]}{dt} = \\frac{1}{d}\\frac{d[\\ce{D}]}{dt}$: species rates are in the ratio of the coefficients.',
    'The rate law $\\text{rate} = k[\\ce{A}]^m[\\ce{B}]^n$ has experimentally determined orders, which in general are not the stoichiometric coefficients; $k$ depends on temperature but not on concentration.',
    'Doubling a concentration multiplies the rate by $2^m$; the units of $k$ are $\\text{M}^{1-n}\\,\\text{s}^{-1}$ for overall order $n$.',
    'Method of initial rates: compare runs that differ in one concentration; $m = \\frac{\\ln(\\text{rate ratio})}{\\ln(\\text{concentration ratio})}$; then solve for $k$ and check it against every run.',
  ],
  reading: [
    {
      title: 'OpenStax Chemistry 2e — Chapter 12: Kinetics',
      url: 'https://openstax.org/books/chemistry-2e/pages/12-introduction',
      source: 'openstax',
      note: 'Sections 12.1 and 12.3 cover rates, relative rates and rate laws with more initial-rate data sets to practice on.',
    },
    {
      title: 'Khan Academy — Chemistry',
      url: 'https://www.khanacademy.org/science/chemistry',
      source: 'khan',
      note: 'The kinetics unit has short videos on rate laws and the method of initial rates.',
    },
    {
      title: 'Rate equation (Wikipedia)',
      url: 'https://en.wikipedia.org/wiki/Rate_equation',
      source: 'wikipedia',
      note: 'A broader survey of rate laws, including fractional and negative orders and how they are measured.',
    },
  ],
};
