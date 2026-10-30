import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'gchem-arrhenius',
  title: 'Collision Theory and the Arrhenius Equation',
  summary: 'Why reactions need energetic, well-aimed collisions, why a few degrees make such a difference, and how $k = Ae^{-E_a/RT}$ turns rate data into an activation energy.',
  minutes: 19,
  objectives: [
    'Explain the three factors of collision theory: collision frequency, orientation and activation energy',
    'Use the Maxwell–Boltzmann distribution to explain why rates rise steeply with temperature',
    'Read a potential-energy diagram: transition state, $E_a$ for the forward and reverse reactions, and $\\Delta H$',
    'Write the Arrhenius equation and its linear form, and find $E_a$ from the slope of $\\ln k$ versus $1/T$',
    'Use the two-point form to find $E_a$ from two rate constants or to predict $k$ at a new temperature',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Collisions: necessary but not sufficient',
      blocks: [
        {
          type: 'p',
          text: 'Molecules cannot react unless they touch. That idea, [[gchem-collision-theory|collision theory]], immediately raises a puzzle. In a gas at room temperature and 1 atm, each molecule collides with others billions of times per second. If every collision produced products, every gas reaction would be over in nanoseconds. Most are vastly slower, so only a tiny fraction of collisions can be **effective**.',
        },
        {
          type: 'p',
          text: 'Two conditions decide whether a collision works:',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            '**Orientation.** The atoms that must bond have to meet. Only a fraction $p$ of collisions (the *steric factor*) are aimed well enough; for complicated molecules $p$ can be far below 1.',
            '**Energy.** Old bonds must be stretched and partly broken before new ones form, which costs energy. Only collisions with at least the [[gchem-activation-energy|activation energy]] $E_a$ along the line of impact get over the barrier.',
          ],
        },
        {
          type: 'figure',
          svg: `<svg viewBox="0 0 520 200" xmlns="http://www.w3.org/2000/svg"><text x="130" y="22" font-size="14" text-anchor="middle" class="t-green">✓ effective orientation</text><text x="390" y="22" font-size="14" text-anchor="middle" class="t-red">✗ ineffective orientation</text><line x1="260" y1="35" x2="260" y2="185" stroke="currentColor" class="s-gray" stroke-dasharray="4 4"/><circle cx="35" cy="95" r="17" fill="currentColor" fill-opacity="0.25" stroke="currentColor" class="f-green s-green" stroke-width="1.8"/><text x="35" y="100" font-size="13" text-anchor="middle">Cl</text><line x1="58" y1="95" x2="100" y2="95" stroke="currentColor" stroke-width="2.2"/><polyline points="92,89 102,95 92,101" fill="none" stroke="currentColor" stroke-width="2.2"/><line x1="150.2" y1="102.6" x2="163.4" y2="109.2" stroke="currentColor" stroke-width="2.5"/><line x1="185.2" y1="106.5" x2="199.3" y2="98.9" stroke="currentColor" stroke-width="2.2"/><line x1="187.7" y1="111.1" x2="201.8" y2="103.5" stroke="currentColor" stroke-width="2.2"/><circle cx="135" cy="95" r="17" fill="currentColor" fill-opacity="0.25" stroke="currentColor" class="f-green s-green" stroke-width="1.8"/><text x="135" y="100" font-size="13" text-anchor="middle">Cl</text><circle cx="175" cy="115" r="13" fill="currentColor" fill-opacity="0.25" stroke="currentColor" class="f-blue s-blue" stroke-width="1.8"/><text x="175" y="120" font-size="13" text-anchor="middle">N</text><circle cx="212" cy="95" r="13" fill="currentColor" fill-opacity="0.25" stroke="currentColor" class="f-red s-red" stroke-width="1.8"/><text x="212" y="100" font-size="13" text-anchor="middle">O</text><text x="130" y="160" font-size="13" text-anchor="middle">Cl meets Cl: a Cl–Cl bond forms</text><text x="130" y="180" font-size="13" text-anchor="middle">→ Cl₂ + NO</text><circle cx="295" cy="95" r="17" fill="currentColor" fill-opacity="0.25" stroke="currentColor" class="f-green s-green" stroke-width="1.8"/><text x="295" y="100" font-size="13" text-anchor="middle">Cl</text><line x1="318" y1="95" x2="360" y2="95" stroke="currentColor" stroke-width="2.2"/><polyline points="352,89 362,95 352,101" fill="none" stroke="currentColor" stroke-width="2.2"/><line x1="391.4" y1="99.7" x2="404.4" y2="107.9" stroke="currentColor" stroke-width="2.2"/><line x1="388.6" y1="104.1" x2="401.6" y2="112.3" stroke="currentColor" stroke-width="2.2"/><line x1="425.6" y1="111.1" x2="441.9" y2="102.7" stroke="currentColor" stroke-width="2.5"/><circle cx="379" cy="95" r="13" fill="currentColor" fill-opacity="0.25" stroke="currentColor" class="f-red s-red" stroke-width="1.8"/><text x="379" y="100" font-size="13" text-anchor="middle">O</text><circle cx="414" cy="117" r="13" fill="currentColor" fill-opacity="0.25" stroke="currentColor" class="f-blue s-blue" stroke-width="1.8"/><text x="414" y="122" font-size="13" text-anchor="middle">N</text><circle cx="457" cy="95" r="17" fill="currentColor" fill-opacity="0.25" stroke="currentColor" class="f-green s-green" stroke-width="1.8"/><text x="457" y="100" font-size="13" text-anchor="middle">Cl</text><text x="390" y="160" font-size="13" text-anchor="middle">Cl meets O: no Cl–Cl bond possible</text><text x="390" y="180" font-size="13" text-anchor="middle">→ the particles just bounce apart</text></svg>`,
          alt: 'Left panel, effective orientation: a chlorine atom moving toward the chlorine end of a bent NOCl molecule; a Cl–Cl bond can form, giving Cl2 and NO. Right panel, ineffective orientation: the chlorine atom moving toward the oxygen end of NOCl; no Cl–Cl bond can form and the particles bounce apart.',
          caption: 'For $\\ce{Cl + NOCl -> Cl2 + NO}$, the incoming Cl atom must strike the **chlorine** end of NOCl. A collision at the oxygen end, however energetic, cannot make a Cl–Cl bond.',
        },
        {
          type: 'math',
          tex: '\\text{rate} = \\underbrace{Z}_{\\text{collisions per L per s}} \\times \\underbrace{p}_{\\text{right orientation}} \\times \\underbrace{f}_{\\text{enough energy}}',
          caption: 'Collision theory in one line. $Z$ is proportional to the concentrations of the colliding species, which is where rate laws like $k[\\ce{A}][\\ce{B}]$ come from.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why concentration and temperature matter differently',
          text: 'Doubling a concentration doubles $Z$, hence the rate. Raising temperature also increases $Z$, because molecules move faster, but only in proportion to $\\sqrt{T}$: from 25 °C to 35 °C that is a mere 1.7%. Yet experimentally that 10-degree rise often **doubles** the rate. The extra factor must come from $f$, the energy fraction.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'concept',
      title: 'The energetic few: Maxwell–Boltzmann and the fraction above Eₐ',
      blocks: [
        {
          type: 'p',
          text: 'You met the Maxwell–Boltzmann distribution in the [[chem-kinetic-molecular-theory|kinetic-molecular theory]] lesson: at any temperature molecules have a spread of energies, with a peak near the typical energy and a long high-energy tail. Only collisions in the tail beyond $E_a$ can react, and a careful calculation for collisions gives a strikingly simple result:',
        },
        {
          type: 'theorem',
          name: 'Fraction of collisions with enough energy',
          tex: 'f \\approx e^{-E_a/RT}',
          text: 'with $E_a$ in J/mol, $R = 8.314$ J mol⁻¹ K⁻¹ and $T$ in kelvins. The ratio $E_a/RT$ compares the barrier with the typical thermal energy per mole, $RT$ (2.48 kJ/mol at 25 °C).',
        },
        {
          type: 'graph',
          x: [0, 40],
          y: [0, 0.3],
          xStep: 5,
          yStep: 0.05,
          functions: [
            { expr: '2/sqrt(pi)*(0.008314T)^(-1.5)*sqrt(x)*e^(-x/(0.008314T))', label: 'distribution at temperature $T$', color: 'blue' },
            { expr: '2/sqrt(pi)*(0.008314*300)^(-1.5)*sqrt(x)*e^(-x/(0.008314*300))', label: '300 K (reference)', color: 'gray', dashed: true },
          ],
          areas: [{ expr: '2/sqrt(pi)*(0.008314T)^(-1.5)*sqrt(x)*e^(-x/(0.008314T))', from: 'a', to: 40, color: 'orange' }],
          vlines: [{ x: 'a', label: 'Eₐ', color: 'orange' }],
          sliders: [
            { name: 'T', min: 200, max: 1500, step: 10, value: 800, label: 'temperature $T$ (K)' },
            { name: 'a', min: 5, max: 35, step: 1, value: 15, label: '$E_a$ (kJ/mol)' },
          ],
          readouts: [
            { label: '$RT$ (kJ/mol) $=$', expr: '0.008314T', digits: 3 },
            { label: '$e^{-E_a/RT} =$', expr: 'e^(-a/(0.008314T))', digits: 4 },
          ],
          caption: 'Horizontal axis: kinetic energy (kJ/mol); vertical: fraction of molecules per kJ/mol. The orange area beyond $E_a$ is the reactive tail. Raise $T$: the curve flattens and spreads right, and the tail grows by a large **factor**. (Real barriers of 50–100 kJ/mol give tails too thin to see, so the slider range is lowered for visibility.)',
        },
        {
          type: 'derivation',
          title: 'Why a 10-degree rise can double the rate ($E_a = 50$ kJ/mol)',
          steps: [
            { tex: 'f(298\\ \\text{K}) = e^{-50\\,000/(8.314 \\times 298.15)} = e^{-20.17} = 1.74 \\times 10^{-9}', why: 'Only about 2 collisions in a billion carry enough energy at 25 °C.' },
            { tex: 'f(308\\ \\text{K}) = e^{-50\\,000/(8.314 \\times 308.15)} = e^{-19.52} = 3.34 \\times 10^{-9}', why: 'Same barrier at 35 °C. The exponent shrank by only 0.65.' },
            { tex: '\\frac{f(308)}{f(298)} = 1.92 \\quad \\text{vs} \\quad \\sqrt{\\tfrac{308.15}{298.15}} = 1.017', why: 'The energetic fraction nearly doubles, while the collision frequency grows by under 2%.' },
          ],
          result: 'Temperature acts mainly through the exponential tail. A small change in $T$ changes $E_a/RT$ a little, and an exponential turns that small change into a large factor.',
        },
      ],
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'mcq',
      prompt: 'Raising the temperature of a reaction mixture from 25 °C to 35 °C roughly doubles the rate. What is the **main** reason?',
      options: [
        { text: 'Molecules collide about twice as often', why: 'Collision frequency grows only as $\\sqrt{T}$: $\\sqrt{308/298} = 1.017$, under 2%. That cannot explain a doubling.' },
        { text: 'The activation energy decreases at higher temperature', why: '$E_a$ is a property of the reaction pathway and is essentially independent of temperature. Only a catalyst (a different pathway) lowers it.' },
        { text: 'A much larger fraction of collisions has energy of at least $E_a$', correct: true, why: 'The fraction $e^{-E_a/RT}$ is exponentially sensitive to $T$; for $E_a \\approx 50$ kJ/mol it nearly doubles over these 10 degrees.' },
        { text: 'More collisions have the correct orientation', why: 'The steric factor depends on molecular geometry, not temperature.' },
      ],
      explanation: 'Collision theory splits the rate into frequency × orientation × energy fraction. Only the energy fraction, $e^{-E_a/RT}$, changes dramatically with temperature: the high-energy tail of the Maxwell–Boltzmann distribution grows by a large factor even when the average energy rises by just 3%.',
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'concept',
      title: 'Potential-energy diagrams and the transition state',
      blocks: [
        {
          type: 'p',
          text: 'Follow one successful collision and plot the potential energy of the atoms as they rearrange. Energy rises as old bonds stretch, peaks, then falls as new bonds form. The horizontal axis, the *reaction coordinate*, simply measures progress from reactants to products.',
        },
        {
          type: 'figure',
          svg: `<svg viewBox="0 0 520 300" xmlns="http://www.w3.org/2000/svg"><line x1="50" y1="275" x2="50" y2="20" stroke="currentColor" stroke-width="1.6"/><polyline points="44,30 50,18 56,30" fill="none" stroke="currentColor" stroke-width="1.6"/><line x1="50" y1="275" x2="508" y2="275" stroke="currentColor" stroke-width="1.6"/><polyline points="498,269 510,275 498,281" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="22" y="150" font-size="14" text-anchor="middle" transform="rotate(-90 22 150)">Potential energy</text><text x="280" y="294" font-size="14" text-anchor="middle">Reaction progress</text><line x1="170" y1="180" x2="495" y2="180" stroke="currentColor" class="s-gray" stroke-dasharray="4 4"/><line x1="135" y1="70" x2="270" y2="70" stroke="currentColor" class="s-gray" stroke-dasharray="4 4"/><line x1="280" y1="70" x2="415" y2="70" stroke="currentColor" class="s-gray" stroke-dasharray="4 4"/><path d="M60,180 L170,180 C215,180 240,70 275,70 C310,70 335,225 380,225 L495,225" fill="none" stroke="currentColor" class="s-blue" stroke-width="3"/><text x="100" y="200" font-size="13" text-anchor="middle">reactants</text><text x="430" y="246" font-size="13" text-anchor="middle">products</text><circle cx="275" cy="70" r="4.5" fill="currentColor" class="f-red"/><text x="275" y="50" font-size="13" text-anchor="middle" class="t-red">transition state ‡</text><line x1="150" y1="174" x2="150" y2="76" stroke="currentColor" class="s-orange" stroke-width="2"/><polyline points="145,84 150,73 155,84" fill="none" stroke="currentColor" class="s-orange" stroke-width="2"/><polyline points="145,166 150,177 155,166" fill="none" stroke="currentColor" class="s-orange" stroke-width="2"/><text x="104" y="131" font-size="14" text-anchor="middle" class="t-orange">Eₐ (fwd)</text><line x1="400" y1="219" x2="400" y2="76" stroke="currentColor" class="s-purple" stroke-width="2"/><polyline points="395,84 400,73 405,84" fill="none" stroke="currentColor" class="s-purple" stroke-width="2"/><polyline points="395,211 400,222 405,211" fill="none" stroke="currentColor" class="s-purple" stroke-width="2"/><text x="446" y="131" font-size="14" text-anchor="middle" class="t-purple">Eₐ (rev)</text><line x1="480" y1="186" x2="480" y2="219" stroke="currentColor" class="s-green" stroke-width="2"/><polyline points="475,211 480,222 485,211" fill="none" stroke="currentColor" class="s-green" stroke-width="2"/><text x="480" y="168" font-size="14" text-anchor="middle" class="t-green">ΔH &lt; 0</text></svg>`,
          alt: 'Potential energy versus reaction progress for an exothermic reaction. The curve starts at the reactant level, rises to a peak labelled transition state, and falls to a lower product level. Arrows show the forward activation energy from reactants to the peak, the reverse activation energy from products to the peak, and the enthalpy change from the reactant level down to the product level.',
          caption: 'An exothermic reaction. $E_a$ is measured from the reactants up to the peak; the reverse barrier from the products is larger by $|\\Delta H|$.',
        },
        {
          type: 'definition',
          term: 'Transition state',
          text: 'The [[gchem-transition-state|transition state]] (or activated complex, marked ‡) is the arrangement of atoms at the top of the barrier, with old bonds partly broken and new bonds partly formed. For $\\ce{Cl + NOCl}$ it is roughly $\\ce{Cl\\bond{...}Cl\\bond{...}NO}$. It lasts about one molecular vibration (around $10^{-13}$ s) and can never be bottled, because it is an energy **maximum**: it slides toward reactants or products almost immediately.',
        },
        {
          type: 'theorem',
          name: 'Forward and reverse barriers',
          tex: 'E_{a,\\text{rev}} = E_{a,\\text{fwd}} - \\Delta H',
          text: 'Read it off the diagram: the two barriers differ by the vertical gap between reactants and products. For an exothermic reaction ($\\Delta H < 0$) the reverse barrier is the larger one.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Fast is not the same as downhill',
          text: '$\\Delta H$ (how far down) and $E_a$ (how high the hill) are independent. A strongly exothermic reaction can be imperceptibly slow (diamond to graphite, gasoline in air at room temperature), and an endothermic one can be fast (a cold pack dissolving). Thermochemistry answers "where does it end up?"; kinetics answers "how fast does it get there?"',
        },
        {
          type: 'callout',
          variant: 'analogy',
          text: 'Think of a ball in a valley next to a deeper valley, with a ridge in between. The deeper valley is "products". The ball will not roll there by itself, however much lower it is, until something gives it a kick over the ridge. Heat supplies random kicks; the higher the ridge, the rarer a kick big enough.',
        },
      ],
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'numeric',
      prompt: 'A reaction has $E_a = 85$ kJ/mol in the forward direction and $\\Delta H = -40$ kJ/mol. What is the activation energy of the **reverse** reaction?',
      hint: 'Sketch the diagram: the reverse barrier is measured from the products, which lie 40 kJ/mol below the reactants.',
      label: '$E_{a,\\text{rev}} =$',
      unit: 'kJ/mol',
      answer: '125',
      answerTex: '125\\ \\text{kJ/mol}',
      tolerance: 0.5,
      explanation: '$E_{a,\\text{rev}} = E_{a,\\text{fwd}} - \\Delta H = 85 - (-40) = 125$ kJ/mol. From the products you must climb back up the 40 kJ/mol you fell, plus the 85 kJ/mol barrier above the reactants. The reverse of an exothermic reaction is endothermic and always has the larger barrier.',
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'concept',
      title: 'The Arrhenius equation',
      blocks: [
        {
          type: 'p',
          text: 'In 1889 Svante Arrhenius found that rate constants of many reactions fit a single formula. Collision theory explains every piece of it.',
        },
        {
          type: 'theorem',
          name: 'Arrhenius equation',
          tex: 'k = A\\,e^{-E_a/RT}',
          text: '$A$, the **frequency factor**, combines the collision frequency and the orientation factor (it has the same units as $k$); $e^{-E_a/RT}$ is the fraction of collisions with enough energy. $T$ must be in kelvins.',
        },
        {
          type: 'p',
          text: 'An exponential is awkward to fit by eye, so take the natural logarithm. The result is a straight line in disguise:',
        },
        {
          type: 'derivation',
          title: 'Linear form of the Arrhenius equation',
          steps: [
            { tex: '\\ln k = \\ln\\left(A\\,e^{-E_a/RT}\\right)', why: 'Take $\\ln$ of both sides.' },
            { tex: '= \\ln A + \\ln e^{-E_a/RT} = \\ln A - \\frac{E_a}{RT}', why: 'Log of a product is the sum of the logs, and $\\ln e^u = u$.' },
            { tex: '\\underbrace{\\ln k}_{y} = \\underbrace{\\left(-\\frac{E_a}{R}\\right)}_{m}\\underbrace{\\frac{1}{T}}_{x} + \\underbrace{\\ln A}_{b}', why: 'Match to $y = mx + b$: plotting $\\ln k$ against $1/T$ gives a straight line with slope $-E_a/R$.' },
          ],
          result: 'An **Arrhenius plot** ($\\ln k$ vs $1/T$) is a straight line. Its slope gives $E_a = -R \\times \\text{slope}$, and its intercept gives $\\ln A$.',
        },
        {
          type: 'table',
          headers: ['$T$ (°C)', '$k$ (s⁻¹)', '$1000/T$ (K⁻¹)', '$\\ln k$'],
          rows: [
            ['0', '$7.87 \\times 10^{-7}$', '$3.661$', '$-14.055$'],
            ['25', '$3.46 \\times 10^{-5}$', '$3.354$', '$-10.272$'],
            ['35', '$1.35 \\times 10^{-4}$', '$3.245$', '$-8.910$'],
            ['45', '$4.98 \\times 10^{-4}$', '$3.143$', '$-7.605$'],
            ['55', '$1.50 \\times 10^{-3}$', '$3.047$', '$-6.502$'],
            ['65', '$4.87 \\times 10^{-3}$', '$2.957$', '$-5.325$'],
          ],
          caption: 'First-order decomposition of $\\ce{N2O5}$ (classic data of Daniels and Johnston). From 0 °C to 65 °C, $k$ grows more than 6000-fold.',
        },
        {
          type: 'graph',
          x: [2.9, 3.7],
          y: [-15, -4],
          xStep: 0.1,
          yStep: 1,
          functions: [{ expr: '-10.272 - (a/8.314)(x - 3.354)', label: 'trial line through the 25 °C point', color: 'blue' }],
          points: [
            { x: 3.661, y: -14.055, label: '0 °C' },
            { x: 3.354, y: -10.272, label: '25 °C' },
            { x: 3.245, y: -8.91, label: '' },
            { x: 3.143, y: -7.605, label: '45 °C' },
            { x: 3.047, y: -6.502, label: '' },
            { x: 2.957, y: -5.325, label: '65 °C' },
          ],
          sliders: [{ name: 'a', min: 40, max: 160, step: 1, value: 60, label: 'trial $E_a$ (kJ/mol)' }],
          readouts: [{ label: 'slope of $\\ln k$ vs $1/T$ (K) $= -E_a/R =$', expr: '-a*1000/8.314', digits: 0 }],
          caption: 'Horizontal axis: $1000/T$ (K⁻¹), so temperature **increases to the left**; vertical: $\\ln k$. Adjust the trial $E_a$ until the line runs through all the data. A least-squares fit gives a slope of $-1.24 \\times 10^{4}$ K, so $E_a = (8.314)(1.24 \\times 10^{4}) = 103$ kJ/mol.',
        },
        {
          type: 'callout',
          variant: 'tip',
          text: 'Steeper Arrhenius line, larger $E_a$, stronger temperature dependence. A reaction with a nearly flat Arrhenius plot barely cares about temperature.',
        },
      ],
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'order',
      prompt: 'Order the steps for finding $E_a$ from rate constants measured at several temperatures.',
      lines: [
        'Convert every temperature to kelvins',
        'Compute $1/T$ and $\\ln k$ for each measurement',
        'Plot $\\ln k$ (vertical) against $1/T$ (horizontal) and fit a straight line',
        'Calculate $E_a = -R \\times \\text{slope}$, with $R = 8.314$ J mol⁻¹ K⁻¹',
      ],
      distractors: ['Plot $k$ against $T$ and take the slope as $E_a$'],
      explanation: 'Kelvins first (the equation uses absolute temperature), then transform the data so the Arrhenius equation becomes a line, fit, and convert the slope. The distractor fails because $k$ vs $T$ is a curve, not a line, and its slope is not $E_a$ in any case.',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'concept',
      title: 'The two-point form',
      blocks: [
        {
          type: 'p',
          text: 'With only two measurements, write the linear form at each temperature and subtract. The unknown $\\ln A$ cancels.',
        },
        {
          type: 'derivation',
          title: 'Deriving the two-point Arrhenius equation',
          steps: [
            { tex: '\\ln k_2 = \\ln A - \\frac{E_a}{RT_2}, \\qquad \\ln k_1 = \\ln A - \\frac{E_a}{RT_1}', why: 'The linear form at each temperature, with the same $A$ and $E_a$.' },
            { tex: '\\ln k_2 - \\ln k_1 = -\\frac{E_a}{RT_2} + \\frac{E_a}{RT_1}', why: 'Subtract the second equation from the first: $\\ln A$ cancels.' },
            { tex: '\\ln\\frac{k_2}{k_1} = \\frac{E_a}{R}\\left(\\frac{1}{T_1} - \\frac{1}{T_2}\\right)', why: 'Combine the logs and factor out $E_a/R$. If $T_2 > T_1$, the bracket is positive, so $k_2 > k_1$, as it should be.' },
          ],
        },
        {
          type: 'derivation',
          title: '$E_a$ for $\\ce{N2O5}$ from the 25 °C and 65 °C rate constants',
          steps: [
            { tex: 'T_1 = 298.15\\ \\text{K},\\ k_1 = 3.46 \\times 10^{-5}\\ \\text{s}^{-1}; \\quad T_2 = 338.15\\ \\text{K},\\ k_2 = 4.87 \\times 10^{-3}\\ \\text{s}^{-1}', why: 'Convert to kelvins first: $T(\\text{K}) = T(°\\text{C}) + 273.15$.' },
            { tex: '\\ln\\frac{k_2}{k_1} = \\ln\\frac{4.87 \\times 10^{-3}}{3.46 \\times 10^{-5}} = \\ln 140.8 = 4.947', why: 'Only the ratio of the rate constants matters, so their units cancel.' },
            { tex: '\\frac{1}{T_1} - \\frac{1}{T_2} = \\frac{1}{298.15} - \\frac{1}{338.15} = 3.967 \\times 10^{-4}\\ \\text{K}^{-1}', why: 'Keep four significant figures here: this is a small difference of two similar numbers.' },
            { tex: 'E_a = \\frac{R\\ln(k_2/k_1)}{1/T_1 - 1/T_2} = \\frac{(8.314\\ \\text{J mol}^{-1}\\text{K}^{-1})(4.947)}{3.967 \\times 10^{-4}\\ \\text{K}^{-1}}', why: 'Solve the two-point equation for $E_a$.' },
            { tex: '= 1.037 \\times 10^{5}\\ \\text{J/mol} = 104\\ \\text{kJ/mol}', why: 'The kelvins cancel, leaving J/mol. This agrees with the 103 kJ/mol from the full plot.' },
          ],
        },
        {
          type: 'derivation',
          title: 'Predicting $k$ at 45 °C from that $E_a$',
          steps: [
            { tex: '\\ln\\frac{k_{45}}{k_1} = \\frac{1.037 \\times 10^{5}}{8.314}\\left(\\frac{1}{298.15} - \\frac{1}{318.15}\\right) = (12\\,470)(2.108 \\times 10^{-4}) = 2.629', why: 'Same equation, now solved for the unknown $k$.' },
            { tex: 'k_{45} = (3.46 \\times 10^{-5}\\ \\text{s}^{-1})\\,e^{2.629} = 4.8 \\times 10^{-4}\\ \\text{s}^{-1}', why: 'Exponentiate. The measured value is $4.98 \\times 10^{-4}$ s⁻¹, about 4% higher: good agreement for an exponential prediction.' },
          ],
          result: 'That is the $k \\approx 5.0 \\times 10^{-4}$ s⁻¹ used for the $\\ce{N2O5}$ half-life (23 min) in the previous lesson. At 25 °C the same reaction has a half-life of $0.693/3.46 \\times 10^{-5} = 2.0 \\times 10^{4}$ s, about 5.6 hours.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Two classic slips',
          text: '(1) Using °C instead of K: $\\frac{1}{25} - \\frac{1}{65}$ is meaningless and gives a wildly wrong $E_a$. (2) Mixing units of energy: $R = 8.314$ **J** mol⁻¹ K⁻¹ gives $E_a$ in J/mol, so convert a given $E_a$ in kJ/mol to J/mol before substituting.',
        },
      ],
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'numeric',
      prompt: 'The rate constant of a reaction is $1.0 \\times 10^{-3}\\ \\text{s}^{-1}$ at 300. K and $6.0 \\times 10^{-3}\\ \\text{s}^{-1}$ at 320. K. Calculate $E_a$ in kJ/mol, to three significant figures. ($R = 8.314$ J mol⁻¹ K⁻¹)',
      hint: '$E_a = \\frac{R\\ln(k_2/k_1)}{1/T_1 - 1/T_2}$, then divide by 1000.',
      label: '$E_a =$',
      unit: 'kJ/mol',
      answer: '8.314*ln(6)/(1/300 - 1/320)/1000',
      answerTex: '71.5\\ \\text{kJ/mol}',
      tolerance: 0.15,
      explanation: '$\\ln\\frac{6.0 \\times 10^{-3}}{1.0 \\times 10^{-3}} = \\ln 6 = 1.792$ and $\\frac{1}{300} - \\frac{1}{320} = 2.083 \\times 10^{-4}\\ \\text{K}^{-1}$. So $E_a = \\frac{(8.314)(1.792)}{2.083 \\times 10^{-4}} = 7.15 \\times 10^{4}$ J/mol $= 71.5$ kJ/mol. A sixfold increase for just 20 K signals a sizable barrier.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'error',
      prompt: 'Same data: $k = 1.0 \\times 10^{-3}\\ \\text{s}^{-1}$ at 27 °C and $6.0 \\times 10^{-3}\\ \\text{s}^{-1}$ at 47 °C. A student calculates $E_a$. Tap the first wrong line.',
      lines: [
        '$\\ln\\frac{k_2}{k_1} = \\ln 6.0 = 1.792$',
        '$\\frac{1}{T_1} - \\frac{1}{T_2} = \\frac{1}{27} - \\frac{1}{47} = 0.01576$',
        '$E_a = \\frac{(8.314)(1.792)}{0.01576}$',
        '$E_a = 945$ J/mol $\\approx 0.95$ kJ/mol',
      ],
      errorLines: [2],
      explanation: 'The temperatures must be in **kelvins**: $27\\ \\text{°C} = 300.15$ K and $47\\ \\text{°C} = 320.15$ K, so $\\frac{1}{300.15} - \\frac{1}{320.15} = 2.081 \\times 10^{-4}\\ \\text{K}^{-1}$. Then $E_a = \\frac{(8.314)(1.792)}{2.081 \\times 10^{-4}} = 7.16 \\times 10^{4}$ J/mol $\\approx 71.6$ kJ/mol. A barrier under 1 kJ/mol (less than half of $RT$) should have looked suspicious: such a reaction would hardly respond to temperature at all.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'numeric',
      prompt: 'A reaction has $E_a = 75.0$ kJ/mol and $k = 2.5 \\times 10^{-3}\\ \\text{s}^{-1}$ at 25 °C. Predict $k$ at 50 °C. Give two significant figures. ($R = 8.314$ J mol⁻¹ K⁻¹)',
      hint: '$\\ln\\frac{k_2}{k_1} = \\frac{75\\,000}{8.314}\\left(\\frac{1}{298.15} - \\frac{1}{323.15}\\right)$',
      label: '$k_{50} =$',
      unit: 's⁻¹',
      answer: '2.5*10^-3*exp(75000/8.314*(1/298.15 - 1/323.15))',
      answerTex: '2.6 \\times 10^{-2}\\ \\text{s}^{-1}',
      tolerance: 0.0006,
      explanation: '$\\frac{1}{298.15} - \\frac{1}{323.15} = 2.595 \\times 10^{-4}\\ \\text{K}^{-1}$; times $\\frac{75\\,000}{8.314} = 9021$ K gives $\\ln\\frac{k_2}{k_1} = 2.341$, so $\\frac{k_2}{k_1} = 10.4$ and $k_{50} = (2.5 \\times 10^{-3})(10.4) = 2.6 \\times 10^{-2}\\ \\text{s}^{-1}$. A 25-degree rise speeds this reaction about tenfold, roughly a doubling per 10 °C.',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'concept',
      title: 'Checking the rule of thumb: double every 10 °C?',
      blocks: [
        {
          type: 'p',
          text: 'Cooks, biologists and engineers quote a rule: reaction rates roughly double for every 10 °C rise. The two-point equation lets you test it. Which activation energy makes $k$ exactly double from 25 °C to 35 °C?',
        },
        {
          type: 'derivation',
          title: 'The $E_a$ behind the rule',
          steps: [
            { tex: '\\ln 2 = \\frac{E_a}{R}\\left(\\frac{1}{298.15} - \\frac{1}{308.15}\\right)', why: 'Set $k_2/k_1 = 2$ in the two-point equation.' },
            { tex: 'E_a = \\frac{(8.314)(0.6931)}{1.088 \\times 10^{-4}\\ \\text{K}^{-1}} = 5.29 \\times 10^{4}\\ \\text{J/mol} \\approx 53\\ \\text{kJ/mol}', why: 'Solve for $E_a$.' },
          ],
          result: 'The rule is accurate only for barriers near 50 kJ/mol, which happens to be typical of many reactions near room temperature, including many in biology.',
        },
        {
          type: 'table',
          headers: ['$E_a$ (kJ/mol)', '25', '50', '75', '100', '150'],
          rows: [['factor from 25 °C to 35 °C', '1.39', '1.92', '2.67', '3.70', '7.13']],
          caption: 'Computed from $e^{(E_a/R)(1/298.15 - 1/308.15)}$. The higher the barrier, the more a few degrees matter. $\\ce{N2O5}$ ($E_a \\approx 104$ kJ/mol) speeds up almost fourfold.',
        },
        {
          type: 'list',
          items: [
            '**Refrigeration and freezing** slow the reactions that spoil food: going from 25 °C to 4 °C slows a 50 kJ/mol process almost fivefold (a factor of 4.6).',
            '**Batteries in the cold** deliver less power, because the electrode reactions and ion movement slow down. Cold-weather field operations plan for this by keeping batteries warm until use.',
            '**Flameless ration heaters** (in MREs) rely on a reaction of magnesium with salt water that is fast enough to heat a meal in about ten minutes; in freezing weather it starts noticeably slower.',
            '**Fever and hypothermia** shift the rates of the body\'s enzyme reactions, one reason body temperature is regulated so tightly.',
          ],
        },
        {
          type: 'callout',
          variant: 'history',
          text: 'Arrhenius (Nobel Prize, 1903) proposed the equation by analogy with van \'t Hoff\'s temperature dependence of equilibrium constants. The idea that only molecules above a threshold energy react, and that their fraction follows a Boltzmann factor, was his key insight, decades before transition-state theory explained the barrier itself.',
        },
      ],
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'truefalse',
      prompt: 'Heating a reaction mixture speeds the reaction up because the higher temperature lowers the activation energy.',
      answer: false,
      explanation: '$E_a$ is the height of the barrier on the reaction pathway and is (to a good approximation) independent of temperature. Heating leaves the barrier where it is and gives **more molecules enough energy to cross it**: the fraction $e^{-E_a/RT}$ grows. Lowering $E_a$ requires a different pathway, which is what a catalyst provides (next lesson).',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'fill',
      prompt: 'Complete the description of an energy diagram for an **endothermic** reaction.',
      template: 'The highest point on the path is the ___. Because the products lie above the reactants, $\\Delta H$ is ___, and the reverse activation energy is ___ than the forward one.',
      blanks: [{ answers: ['transition state'] }, { answers: ['positive'] }, { answers: ['smaller'] }],
      wordBank: ['transition state', 'intermediate', 'positive', 'negative', 'smaller', 'larger'],
      explanation: 'The peak is the transition state (an intermediate sits in a valley, not at the top). Products above reactants means energy is absorbed: $\\Delta H > 0$. Then $E_{a,\\text{rev}} = E_{a,\\text{fwd}} - \\Delta H$ is **smaller** than $E_{a,\\text{fwd}}$: from the higher product level, the climb back to the peak is shorter.',
    },
  ],
  takeaways: [
    'Collision theory: rate = collision frequency × orientation factor × fraction with energy $\\ge E_a$; that fraction is about $e^{-E_a/RT}$.',
    'Temperature acts mainly through the exponential tail of the Maxwell–Boltzmann distribution; collision frequency grows only as $\\sqrt{T}$.',
    'On a potential-energy diagram the transition state is the peak; $E_{a,\\text{rev}} = E_{a,\\text{fwd}} - \\Delta H$; $\\Delta H$ and $E_a$ are independent.',
    'Arrhenius: $k = Ae^{-E_a/RT}$; $\\ln k$ vs $1/T$ is a straight line with slope $-E_a/R$.',
    'Two-point form: $\\ln\\frac{k_2}{k_1} = \\frac{E_a}{R}\\left(\\frac{1}{T_1} - \\frac{1}{T_2}\\right)$, with $T$ in kelvins and $E_a$ in J/mol.',
    'The "doubles every 10 °C" rule corresponds to $E_a \\approx 53$ kJ/mol; higher barriers are more temperature-sensitive.',
  ],
  reading: [
    {
      title: 'OpenStax Chemistry 2e — Chapter 12: Kinetics',
      url: 'https://openstax.org/books/chemistry-2e/pages/12-introduction',
      source: 'openstax',
      note: 'Section 12.5 (Collision Theory) covers activation energy, potential-energy diagrams and Arrhenius plots with worked examples.',
    },
    {
      title: 'PhET — Reactions & Rates simulation',
      url: 'https://phet.colorado.edu/',
      source: 'other',
      note: 'Search "Reactions & Rates": shoot molecules at each other, change the barrier and temperature, and watch the effective-collision fraction change.',
    },
    {
      title: 'Arrhenius equation (Wikipedia)',
      url: 'https://en.wikipedia.org/wiki/Arrhenius_equation',
      source: 'wikipedia',
      note: 'Derivations, the Arrhenius plot, and how the equation relates to collision theory and transition-state theory.',
    },
  ],
};
