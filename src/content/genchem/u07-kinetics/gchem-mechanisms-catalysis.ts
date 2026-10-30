import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'gchem-mechanisms-catalysis',
  title: 'Reaction Mechanisms and Catalysis',
  summary: 'What really happens molecule by molecule: elementary steps, the rate-determining step, deriving rate laws from mechanisms, and how catalysts and enzymes open faster paths.',
  minutes: 20,
  objectives: [
    'Identify elementary steps, their molecularity and their rate laws, and find intermediates in a mechanism',
    'Derive the rate law of a mechanism with a slow first step, and of one with a fast pre-equilibrium followed by a slow step',
    'Decide whether a proposed mechanism is consistent with an experimental rate law',
    'Explain how a catalyst speeds a reaction without changing $\\Delta H$ or the equilibrium, and distinguish catalysts from intermediates',
    'Describe heterogeneous catalysis (catalytic converters, the Haber process) and enzyme kinetics with the Michaelis–Menten equation',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Elementary steps and molecularity',
      blocks: [
        {
          type: 'p',
          text: 'A balanced equation is a summary, like "drove from Monterey to Los Angeles". It hides the route. The route of a reaction, the actual sequence of molecular events, is its [[gchem-reaction-mechanism|mechanism]]. Each event in it is an [[gchem-elementary-step|elementary step]]: one collision, or one molecule falling apart, happening exactly as written.',
        },
        {
          type: 'p',
          text: 'Take $\\ce{NO2(g) + CO(g) -> NO(g) + CO2(g)}$. Below about 500 K the evidence supports a two-step route:',
        },
        {
          type: 'math',
          tex: '\\begin{aligned} &\\text{Step 1:} && \\ce{NO2 + NO2 -> NO3 + NO} \\\\ &\\text{Step 2:} && \\ce{NO3 + CO -> NO2 + CO2} \\\\ \\hline &\\text{Sum:} && \\ce{NO2 + CO -> NO + CO2} \\end{aligned}',
          caption: 'Add the steps and cancel species that appear on both sides: one $\\ce{NO2}$ and the $\\ce{NO3}$ cancel.',
        },
        {
          type: 'p',
          text: '$\\ce{NO3}$ is made in step 1 and used up in step 2. A species like that is a [[gchem-reaction-intermediate|reaction intermediate]]: it exists during the reaction but never appears in the overall equation.',
        },
        {
          type: 'table',
          headers: ['molecularity', 'elementary step', 'rate law of the step'],
          rows: [
            ['unimolecular', '$\\ce{A -> products}$', '$k[\\ce{A}]$'],
            ['bimolecular', '$\\ce{A + B -> products}$', '$k[\\ce{A}][\\ce{B}]$'],
            ['bimolecular', '$\\ce{2A -> products}$', '$k[\\ce{A}]^2$'],
            ['termolecular (rare)', '$\\ce{A + B + C -> products}$', '$k[\\ce{A}][\\ce{B}][\\ce{C}]$'],
          ],
          caption: 'The **molecularity** is the number of particles that come together in the step.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why an elementary step\'s rate law can be read from its equation',
          text: 'For a single collision event, the rate is proportional to how often the required particles meet. Double $[\\ce{A}]$ and A–B encounters double; double both and they quadruple: rate $\\propto [\\ce{A}][\\ce{B}]$. For a unimolecular step, each molecule has a fixed chance per second of falling apart, so rate $\\propto [\\ce{A}]$. This reasoning is valid **only** for elementary steps; an overall equation is not a single event, which is why its coefficients do not give its orders.',
        },
        {
          type: 'callout',
          variant: 'note',
          text: 'Termolecular steps are rare because three particles must arrive at the same spot within about $10^{-13}$ s. Steps with four or more particles are essentially never proposed.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'fill',
      prompt: 'Ozone decomposes ($\\ce{2O3 -> 3O2}$) by the mechanism: step 1, $\\ce{O3 -> O2 + O}$; step 2, $\\ce{O + O3 -> 2O2}$.',
      template: 'Step 1 is ___ and step 2 is ___. The intermediate is ___.',
      blanks: [{ answers: ['unimolecular'] }, { answers: ['bimolecular'] }, { answers: ['$\\ce{O}$'] }],
      wordBank: ['unimolecular', 'bimolecular', 'termolecular', '$\\ce{O}$', '$\\ce{O2}$', '$\\ce{O3}$'],
      explanation: 'Step 1 has one reactant particle ($\\ce{O3}$ falling apart): unimolecular. Step 2 is a collision of two particles: bimolecular. The oxygen atom is formed in step 1 and consumed in step 2, so it is the intermediate; adding the steps gives $\\ce{2O3 -> 3O2}$ with the O cancelled. $\\ce{O2}$ is a product (it is never consumed) and $\\ce{O3}$ is the reactant.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'The rate-determining step',
      blocks: [
        {
          type: 'p',
          text: 'Steps in a mechanism usually run at very different speeds. The slowest one is a bottleneck: products cannot appear faster than they pass through it, however fast the other steps are. That bottleneck is the [[gchem-rate-determining-step|rate-determining step]].',
        },
        {
          type: 'callout',
          variant: 'analogy',
          text: 'A convoy moving through a single-lane checkpoint that takes five minutes per vehicle advances at one vehicle per five minutes, even if the highway on either side allows 100 km/h. Speeding up the highway does nothing; only the checkpoint matters.',
        },
        {
          type: 'figure',
          svg: `<svg viewBox="0 0 520 300" xmlns="http://www.w3.org/2000/svg"><line x1="50" y1="275" x2="50" y2="20" stroke="currentColor" stroke-width="1.6"/><polyline points="44,30 50,18 56,30" fill="none" stroke="currentColor" stroke-width="1.6"/><line x1="50" y1="275" x2="508" y2="275" stroke="currentColor" stroke-width="1.6"/><polyline points="498,269 510,275 498,281" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="22" y="150" font-size="14" text-anchor="middle" transform="rotate(-90 22 150)">Potential energy</text><text x="280" y="294" font-size="14" text-anchor="middle">Reaction progress</text><line x1="110" y1="55" x2="215" y2="55" stroke="currentColor" class="s-gray" stroke-dasharray="4 4"/><path d="M60,170 L140,170 C170,170 185,55 215,55 C245,55 260,140 285,140 C310,140 320,105 340,105 C360,105 375,215 405,215 L495,215" fill="none" stroke="currentColor" class="s-blue" stroke-width="3"/><line x1="120" y1="164" x2="120" y2="61" stroke="currentColor" class="s-orange" stroke-width="2"/><polyline points="115,69 120,58 125,69" fill="none" stroke="currentColor" class="s-orange" stroke-width="2"/><polyline points="115,156 120,167 125,156" fill="none" stroke="currentColor" class="s-orange" stroke-width="2"/><text x="88" y="118" font-size="14" text-anchor="middle" class="t-orange">Eₐ₁</text><text x="95" y="192" font-size="13" text-anchor="middle">2NO₂ + CO</text><circle cx="215" cy="55" r="4" fill="currentColor" class="f-red"/><text x="215" y="44" font-size="13" text-anchor="middle" class="t-red">TS₁</text><circle cx="340" cy="105" r="4" fill="currentColor" class="f-red"/><text x="340" y="94" font-size="13" text-anchor="middle" class="t-red">TS₂</text><text x="285" y="162" font-size="13" text-anchor="middle" class="t-purple">NO₃ + NO + CO</text><text x="285" y="178" font-size="12" text-anchor="middle" class="t-purple">(intermediate)</text><text x="450" y="237" font-size="13" text-anchor="middle">NO + NO₂ + CO₂</text><text x="420" y="60" font-size="13" text-anchor="middle">step 1: high barrier, slow</text><text x="420" y="78" font-size="13" text-anchor="middle">step 2: low barrier, fast</text></svg>`,
          alt: 'Potential-energy diagram with two barriers. From reactants 2NO2 + CO the curve rises to a high first transition state, drops into a valley labelled NO3 + NO + CO, intermediate, rises to a lower second transition state and falls to products NO + NO2 + CO2. The first barrier, Ea1, is marked. Text notes step 1 has a high barrier and is slow, step 2 a low barrier and fast.',
          caption: 'A two-step mechanism has two transition states with an intermediate in the valley between them. Here the first barrier is much higher, so step 1 is rate-determining.',
        },
        {
          type: 'derivation',
          title: 'Rate law for $\\ce{NO2 + CO}$ with a slow first step',
          steps: [
            { tex: '\\text{Step 1 (slow): } \\ce{NO2 + NO2 -> NO3 + NO}, \\quad \\text{rate}_1 = k_1[\\ce{NO2}]^2', why: 'An elementary bimolecular step, so its rate law comes straight from its equation.' },
            { tex: '\\text{Step 2 (fast): } \\ce{NO3 + CO -> NO2 + CO2}', why: 'Every $\\ce{NO3}$ made is consumed almost at once, so step 2 never holds anything up.' },
            { tex: '\\text{rate} = k_1[\\ce{NO2}]^2', why: 'The overall rate equals the rate of the slow step.' },
          ],
          result: 'The mechanism predicts second order in $\\ce{NO2}$ and **zero order in CO**, exactly what experiment shows. CO enters only after the bottleneck, so its concentration cannot affect the rate.',
        },
        {
          type: 'steps',
          items: [
            { title: 'The steps must add up', text: 'The elementary steps must sum to the overall balanced equation.' },
            { title: 'The rate law must match', text: 'The rate law predicted by the mechanism must agree with the experimental one.' },
            { title: 'The steps must be plausible', text: 'Mostly uni- and bimolecular steps, chemically sensible species.' },
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Consistent is not proven',
          text: 'Kinetic data can **rule out** a mechanism but never prove one: several mechanisms may predict the same rate law. Chemists add other evidence, such as detecting the intermediate spectroscopically or using isotope labels to see which atoms end up where.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'mcq',
      prompt: 'The proposed mechanism for $\\ce{2NO2Cl(g) -> 2NO2(g) + Cl2(g)}$ is: step 1 (slow), $\\ce{NO2Cl -> NO2 + Cl}$; step 2 (fast), $\\ce{NO2Cl + Cl -> NO2 + Cl2}$. What rate law does it predict?',
      options: [
        { text: '$\\text{rate} = k[\\ce{NO2Cl}]^2$', why: 'This reads the order from the overall coefficient 2. The rate is set by the slow step, which involves only one $\\ce{NO2Cl}$.' },
        { text: '$\\text{rate} = k[\\ce{NO2Cl}][\\ce{Cl}]$', why: 'That is the rate law of the fast step, and it contains the intermediate Cl, which never appears in an experimental rate law.' },
        { text: '$\\text{rate} = k[\\ce{NO2Cl}]$', correct: true, why: 'Step 1 is the slow, unimolecular step, so the overall rate is $k_1[\\ce{NO2Cl}]$: first order.' },
        { text: '$\\text{rate} = k[\\ce{NO2}]^2[\\ce{Cl2}]$', why: 'Products do not appear in this rate law: neither step uses them as reactants, and both steps are effectively one-way here.' },
      ],
      explanation: 'With the slow step first, the overall rate law is simply the slow step\'s rate law. Step 1 is unimolecular in $\\ce{NO2Cl}$, so $\\text{rate} = k_1[\\ce{NO2Cl}]$. The steps sum to $\\ce{2NO2Cl -> 2NO2 + Cl2}$ (Cl cancels), and the experimental rate law is indeed first order, so the mechanism passes both tests.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'A fast pre-equilibrium followed by a slow step',
      blocks: [
        {
          type: 'p',
          text: 'Sometimes the slow step comes **second**, and its reactant is an intermediate made in a fast, reversible first step. Then the rate law of the slow step contains the intermediate, which is not allowed in the final answer (you cannot control or easily measure its concentration). You eliminate it using the first step.',
        },
        {
          type: 'p',
          text: 'Because step 1 runs forward and backward much faster than step 2 drains it, it settles into a balance in which its forward and reverse rates are equal: a **pre-equilibrium**. (Chemical equilibrium gets its own unit next; here all you need is "forward rate = reverse rate".)',
        },
        {
          type: 'derivation',
          title: '$\\ce{2NO(g) + O2(g) -> 2NO2(g)}$',
          steps: [
            { tex: '\\text{Step 1 (fast, reversible): } \\ce{2NO <=> N2O2} \\quad (k_1 \\text{ forward}, k_{-1} \\text{ reverse})', why: 'Two NO molecules pair up into a loosely bound dimer, which usually falls apart again.' },
            { tex: '\\text{Step 2 (slow): } \\ce{N2O2 + O2 -> 2NO2}, \\quad \\text{rate} = k_2[\\ce{N2O2}][\\ce{O2}]', why: 'Occasionally an $\\ce{O2}$ hits a dimer before it dissociates. This is the rate-determining step, but its rate law contains the intermediate $\\ce{N2O2}$.' },
            { tex: 'k_1[\\ce{NO}]^2 = k_{-1}[\\ce{N2O2}]', why: 'Pre-equilibrium: the forward and reverse rates of step 1 (each written from its elementary equation) are equal.' },
            { tex: '[\\ce{N2O2}] = \\frac{k_1}{k_{-1}}[\\ce{NO}]^2', why: 'Solve for the intermediate in terms of reactants.' },
            { tex: '\\text{rate} = k_2\\frac{k_1}{k_{-1}}[\\ce{NO}]^2[\\ce{O2}] = k_{\\text{obs}}[\\ce{NO}]^2[\\ce{O2}]', why: 'Substitute into the slow step\'s rate law. The constants combine into the observed rate constant $k_{\\text{obs}} = \\frac{k_1k_2}{k_{-1}}$.' },
          ],
          result: 'Third order overall, matching experiment, without needing a rare termolecular collision of $\\ce{2NO + O2}$. Check the sum: $\\ce{2NO + O2 -> 2NO2}$ with $\\ce{N2O2}$ cancelled.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Recipe',
          text: '(1) Write the rate law of the slow step. (2) If it contains an intermediate, set forward rate = reverse rate for the fast step that makes it. (3) Solve for the intermediate and substitute. (4) Check that only reactants (and possibly products) remain.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'A mechanism explains a strange fact',
          text: 'The rate constant of $\\ce{2NO + O2}$ **decreases** as temperature rises, the opposite of the Arrhenius behavior you just learned. The pre-equilibrium explains it: heating makes the fragile $\\ce{N2O2}$ dimer fall apart faster, so $k_1/k_{-1}$ (and with it the dimer concentration) drops more steeply than $k_2$ rises. This is one of the strongest pieces of evidence for the mechanism.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'error',
      prompt: 'For $\\ce{2NO + Br2 -> 2NOBr}$ the proposed mechanism is: step 1 (fast, reversible) $\\ce{NO + Br2 <=> NOBr2}$ with $k_1$, $k_{-1}$; step 2 (slow) $\\ce{NOBr2 + NO -> 2NOBr}$ with $k_2$. A student derives the rate law. Tap the first wrong line.',
      lines: [
        '$\\text{rate} = k_2[\\ce{NOBr2}][\\ce{NO}]$',
        '$k_1[\\ce{NO}][\\ce{Br2}] = k_{-1}[\\ce{NOBr2}]$',
        '$[\\ce{NOBr2}] = \\frac{k_{-1}}{k_1}[\\ce{NO}][\\ce{Br2}]$',
        '$\\text{rate} = \\frac{k_2k_{-1}}{k_1}[\\ce{NO}]^2[\\ce{Br2}]$',
      ],
      errorLines: [3],
      explanation: 'Dividing $k_1[\\ce{NO}][\\ce{Br2}] = k_{-1}[\\ce{NOBr2}]$ by $k_{-1}$ gives $[\\ce{NOBr2}] = \\frac{k_1}{k_{-1}}[\\ce{NO}][\\ce{Br2}]$; the student inverted the ratio. The correct rate law is $\\text{rate} = \\frac{k_1k_2}{k_{-1}}[\\ce{NO}]^2[\\ce{Br2}]$. The concentration dependence happens to come out the same, which is why this slip is easy to miss, but the expression for the observed rate constant is wrong (and would predict the wrong temperature dependence). A sanity check: a faster forward step 1 (larger $k_1$) must make more intermediate, so $k_1$ belongs in the numerator.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'mcq',
      prompt: 'For ozone decomposition, $\\ce{2O3 -> 3O2}$, a fast pre-equilibrium $\\ce{O3 <=> O2 + O}$ followed by the slow step $\\ce{O + O3 -> 2O2}$ predicts $\\text{rate} = k_{\\text{obs}}\\dfrac{[\\ce{O3}]^2}{[\\ce{O2}]}$. Which statement follows?',
      options: [
        { text: 'Adding extra $\\ce{O2}$ to the mixture slows the decomposition', correct: true, why: 'The reaction is order $-1$ in $\\ce{O2}$: more $\\ce{O2}$ pushes the pre-equilibrium back, lowering the concentration of O atoms that the slow step needs.' },
        { text: 'Adding extra $\\ce{O2}$ has no effect because $\\ce{O2}$ is a product', why: 'A product can appear in a rate law when it takes part in a reversible step before the slow step, as $\\ce{O2}$ does here.' },
        { text: 'The reaction is second order overall', why: 'The overall order is the sum of the exponents: $2 + (-1) = 1$.' },
        { text: 'The O atom should appear in the observed rate law', why: 'Intermediates are eliminated; that is the whole purpose of the pre-equilibrium step.' },
      ],
      explanation: 'From step 1: $k_1[\\ce{O3}] = k_{-1}[\\ce{O2}][\\ce{O}]$, so $[\\ce{O}] = \\frac{k_1[\\ce{O3}]}{k_{-1}[\\ce{O2}]}$. The slow step gives $\\text{rate} = k_2[\\ce{O}][\\ce{O3}] = \\frac{k_1k_2}{k_{-1}}\\frac{[\\ce{O3}]^2}{[\\ce{O2}]}$. A negative order is a fingerprint of a species that is produced in a fast equilibrium before the rate-determining step.',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'concept',
      title: 'Catalysts: a different road over the mountain',
      blocks: [
        {
          type: 'definition',
          term: 'Catalyst',
          text: 'A [[gchem-catalyst|catalyst]] speeds up a reaction by providing an alternative mechanism with a lower activation energy. It takes part in a step and is **regenerated** in a later step, so it is not used up and does not appear in the overall equation.',
        },
        {
          type: 'figure',
          svg: `<svg viewBox="0 0 520 300" xmlns="http://www.w3.org/2000/svg"><line x1="50" y1="275" x2="50" y2="20" stroke="currentColor" stroke-width="1.6"/><polyline points="44,30 50,18 56,30" fill="none" stroke="currentColor" stroke-width="1.6"/><line x1="50" y1="275" x2="508" y2="275" stroke="currentColor" stroke-width="1.6"/><polyline points="498,269 510,275 498,281" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="22" y="150" font-size="14" text-anchor="middle" transform="rotate(-90 22 150)">Potential energy</text><text x="280" y="294" font-size="14" text-anchor="middle">Reaction progress</text><line x1="100" y1="55" x2="300" y2="55" stroke="currentColor" class="s-gray" stroke-dasharray="4 4"/><line x1="170" y1="130" x2="265" y2="130" stroke="currentColor" class="s-gray" stroke-dasharray="4 4"/><line x1="220" y1="180" x2="495" y2="180" stroke="currentColor" class="s-gray" stroke-dasharray="4 4"/><path d="M60,180 L215,180 C250,180 270,55 305,55 C340,55 360,225 400,225 L495,225" fill="none" stroke="currentColor" class="s-blue" stroke-width="3"/><path d="M215,180 C240,180 250,130 265,130 C280,130 285,160 300,160 C315,160 322,140 335,140 C352,140 368,225 400,225" fill="none" stroke="currentColor" class="s-green" stroke-width="3" stroke-dasharray="8 5"/><line x1="110" y1="174" x2="110" y2="61" stroke="currentColor" class="s-blue" stroke-width="2"/><polyline points="105,69 110,58 115,69" fill="none" stroke="currentColor" class="s-blue" stroke-width="2"/><polyline points="105,166 110,177 115,166" fill="none" stroke="currentColor" class="s-blue" stroke-width="2"/><text x="80" y="110" font-size="13" text-anchor="middle" class="t-blue">Eₐ</text><text x="80" y="126" font-size="12" text-anchor="middle" class="t-blue">uncat.</text><line x1="180" y1="174" x2="180" y2="136" stroke="currentColor" class="s-green" stroke-width="2"/><polyline points="175,144 180,133 185,144" fill="none" stroke="currentColor" class="s-green" stroke-width="2"/><polyline points="175,166 180,177 185,166" fill="none" stroke="currentColor" class="s-green" stroke-width="2"/><text x="146" y="152" font-size="13" text-anchor="middle" class="t-green">Eₐ</text><text x="146" y="168" font-size="12" text-anchor="middle" class="t-green">cat.</text><text x="120" y="200" font-size="13" text-anchor="middle">reactants</text><text x="450" y="246" font-size="13" text-anchor="middle">products</text><line x1="480" y1="186" x2="480" y2="219" stroke="currentColor" class="s-gray" stroke-width="2"/><polyline points="475,211 480,222 485,211" fill="none" stroke="currentColor" class="s-gray" stroke-width="2"/><text x="455" y="170" font-size="13" text-anchor="middle">same ΔH</text><text x="420" y="60" font-size="13" text-anchor="middle" class="t-blue">— uncatalyzed path</text><text x="420" y="80" font-size="13" text-anchor="middle" class="t-green">- - catalyzed path</text></svg>`,
          alt: 'Potential-energy diagram comparing two paths between the same reactant and product levels. The uncatalyzed path has one tall barrier. The catalyzed path, dashed, has two much lower barriers with a valley between them. Both paths share the same enthalpy change.',
          caption: 'The catalyzed path (dashed) has a lower barrier, usually split into several steps. Reactants and products are unchanged, so $\\Delta H$ is the same, and the reverse barrier is lowered by the same amount as the forward one.',
        },
        {
          type: 'p',
          text: '**Catalyst or intermediate?** Both appear in the steps and cancel from the overall equation, but in opposite order. An intermediate is **made first, then consumed**. A catalyst is **consumed first, then regenerated**. Iodide catalyzes the decomposition of hydrogen peroxide:',
        },
        {
          type: 'math',
          tex: '\\begin{aligned} &\\text{Step 1 (slow):} && \\ce{H2O2 + I- -> H2O + IO-} \\\\ &\\text{Step 2 (fast):} && \\ce{H2O2 + IO- -> H2O + O2 + I-} \\\\ \\hline &\\text{Sum:} && \\ce{2H2O2 -> 2H2O + O2} \\end{aligned}',
          caption: '$\\ce{I-}$ is consumed in step 1 and regenerated in step 2: catalyst. $\\ce{IO-}$ is made in step 1 and consumed in step 2: intermediate. Rate $= k_1[\\ce{H2O2}][\\ce{I-}]$, so the rate is proportional to the amount of catalyst.',
        },
        {
          type: 'p',
          text: 'Iodide is a **homogeneous** catalyst: it is in the same phase (solution) as the reactants. A notorious gas-phase example is chlorine from CFCs in the stratosphere: $\\ce{Cl + O3 -> ClO + O2}$, then $\\ce{ClO + O -> Cl + O2}$. The net reaction is $\\ce{O3 + O -> 2O2}$, and each Cl atom is regenerated to destroy ozone again and again, tens of thousands of times before it is tied up.',
        },
        {
          type: 'derivation',
          title: 'How much does lowering $E_a$ by 20 kJ/mol help at 25 °C?',
          steps: [
            { tex: '\\frac{k_{\\text{cat}}}{k_{\\text{uncat}}} = \\frac{Ae^{-E_{a,\\text{cat}}/RT}}{Ae^{-E_{a,\\text{uncat}}/RT}} = e^{(E_{a,\\text{uncat}} - E_{a,\\text{cat}})/RT}', why: 'Arrhenius for each path, assuming the same frequency factor $A$ (a reasonable first estimate). $A$ cancels.' },
            { tex: '= e^{20\\,000/(8.314 \\times 298.15)} = e^{8.07} \\approx 3.2 \\times 10^{3}', why: 'Energies in J/mol, $T$ in kelvins.' },
          ],
          result: 'A modest 20 kJ/mol reduction makes the reaction about 3200 times faster: what took a month now takes about 14 minutes. Because the barrier sits in an exponent, catalysis is enormously powerful.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'What a catalyst cannot do',
          text: 'A catalyst cannot make an unfavorable reaction favorable or shift where an equilibrium lies. It lowers the forward and reverse barriers by the same amount, so both directions speed up by the same factor and the system simply reaches the same final state sooner.',
        },
      ],
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'numeric',
      prompt: 'An enzyme lowers the activation energy of a reaction by 30.0 kJ/mol at body temperature, 37 °C. Assuming the frequency factor is unchanged, by what factor does it increase the rate constant? Give two significant figures. ($R = 8.314$ J mol⁻¹ K⁻¹)',
      hint: '$\\frac{k_{\\text{cat}}}{k_{\\text{uncat}}} = e^{\\Delta E_a/RT}$ with $\\Delta E_a = 30\\,000$ J/mol and $T = 310.15$ K.',
      label: 'factor $=$',
      answer: 'exp(30000/(8.314*310.15))',
      answerTex: '1.1 \\times 10^{5}',
      tolerance: 5000,
      explanation: '$\\frac{\\Delta E_a}{RT} = \\frac{30\\,000}{(8.314)(310.15)} = 11.63$, and $e^{11.63} = 1.1 \\times 10^{5}$. A hundred-thousand-fold speed-up from a 30 kJ/mol cut. Real enzymes often do far better, with speed-ups of $10^{10}$ or more, by lowering barriers further and by holding reactants in the ideal orientation (raising the effective $A$).',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'truefalse',
      prompt: 'Adding a catalyst to a reversible reaction increases the amount of product present once the system reaches equilibrium.',
      answer: false,
      explanation: 'A catalyst lowers the barrier for the forward **and** reverse reactions by the same amount, so both rate constants increase by the same factor. Their ratio, which fixes the equilibrium composition, does not change. The catalyst gets the system to the same equilibrium faster. In the Haber process, for example, the iron catalyst does not raise the equilibrium yield of ammonia; it makes reaching that yield fast enough to be practical.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'Heterogeneous catalysis: chemistry on a surface',
      blocks: [
        {
          type: 'p',
          text: 'A **heterogeneous** catalyst is in a different phase from the reactants, almost always a solid with gases or liquids passing over it. Most industrial chemistry runs this way, because a solid catalyst is easy to separate from the products and reuse.',
        },
        {
          type: 'figure',
          svg: `<svg viewBox="0 0 520 210" xmlns="http://www.w3.org/2000/svg"><text x="65" y="20" font-size="12.5" text-anchor="middle">1. Adsorption</text><circle cx="11" cy="160" r="9" fill="currentColor" fill-opacity="0.25" stroke="currentColor" class="f-gray s-gray" stroke-width="1.2"/><circle cx="29" cy="160" r="9" fill="currentColor" fill-opacity="0.25" stroke="currentColor" class="f-gray s-gray" stroke-width="1.2"/><circle cx="47" cy="160" r="9" fill="currentColor" fill-opacity="0.25" stroke="currentColor" class="f-gray s-gray" stroke-width="1.2"/><circle cx="65" cy="160" r="9" fill="currentColor" fill-opacity="0.25" stroke="currentColor" class="f-gray s-gray" stroke-width="1.2"/><circle cx="83" cy="160" r="9" fill="currentColor" fill-opacity="0.25" stroke="currentColor" class="f-gray s-gray" stroke-width="1.2"/><circle cx="101" cy="160" r="9" fill="currentColor" fill-opacity="0.25" stroke="currentColor" class="f-gray s-gray" stroke-width="1.2"/><circle cx="119" cy="160" r="9" fill="currentColor" fill-opacity="0.25" stroke="currentColor" class="f-gray s-gray" stroke-width="1.2"/><line x1="130" y1="40" x2="130" y2="175" stroke="currentColor" class="s-gray" stroke-dasharray="3 4"/><text x="195" y="20" font-size="12.5" text-anchor="middle">2. O₂ splits</text><circle cx="141" cy="160" r="9" fill="currentColor" fill-opacity="0.25" stroke="currentColor" class="f-gray s-gray" stroke-width="1.2"/><circle cx="159" cy="160" r="9" fill="currentColor" fill-opacity="0.25" stroke="currentColor" class="f-gray s-gray" stroke-width="1.2"/><circle cx="177" cy="160" r="9" fill="currentColor" fill-opacity="0.25" stroke="currentColor" class="f-gray s-gray" stroke-width="1.2"/><circle cx="195" cy="160" r="9" fill="currentColor" fill-opacity="0.25" stroke="currentColor" class="f-gray s-gray" stroke-width="1.2"/><circle cx="213" cy="160" r="9" fill="currentColor" fill-opacity="0.25" stroke="currentColor" class="f-gray s-gray" stroke-width="1.2"/><circle cx="231" cy="160" r="9" fill="currentColor" fill-opacity="0.25" stroke="currentColor" class="f-gray s-gray" stroke-width="1.2"/><circle cx="249" cy="160" r="9" fill="currentColor" fill-opacity="0.25" stroke="currentColor" class="f-gray s-gray" stroke-width="1.2"/><line x1="260" y1="40" x2="260" y2="175" stroke="currentColor" class="s-gray" stroke-dasharray="3 4"/><text x="325" y="20" font-size="12.5" text-anchor="middle">3. Reaction</text><circle cx="271" cy="160" r="9" fill="currentColor" fill-opacity="0.25" stroke="currentColor" class="f-gray s-gray" stroke-width="1.2"/><circle cx="289" cy="160" r="9" fill="currentColor" fill-opacity="0.25" stroke="currentColor" class="f-gray s-gray" stroke-width="1.2"/><circle cx="307" cy="160" r="9" fill="currentColor" fill-opacity="0.25" stroke="currentColor" class="f-gray s-gray" stroke-width="1.2"/><circle cx="325" cy="160" r="9" fill="currentColor" fill-opacity="0.25" stroke="currentColor" class="f-gray s-gray" stroke-width="1.2"/><circle cx="343" cy="160" r="9" fill="currentColor" fill-opacity="0.25" stroke="currentColor" class="f-gray s-gray" stroke-width="1.2"/><circle cx="361" cy="160" r="9" fill="currentColor" fill-opacity="0.25" stroke="currentColor" class="f-gray s-gray" stroke-width="1.2"/><circle cx="379" cy="160" r="9" fill="currentColor" fill-opacity="0.25" stroke="currentColor" class="f-gray s-gray" stroke-width="1.2"/><line x1="390" y1="40" x2="390" y2="175" stroke="currentColor" class="s-gray" stroke-dasharray="3 4"/><text x="455" y="20" font-size="12.5" text-anchor="middle">4. Desorption</text><circle cx="401" cy="160" r="9" fill="currentColor" fill-opacity="0.25" stroke="currentColor" class="f-gray s-gray" stroke-width="1.2"/><circle cx="419" cy="160" r="9" fill="currentColor" fill-opacity="0.25" stroke="currentColor" class="f-gray s-gray" stroke-width="1.2"/><circle cx="437" cy="160" r="9" fill="currentColor" fill-opacity="0.25" stroke="currentColor" class="f-gray s-gray" stroke-width="1.2"/><circle cx="455" cy="160" r="9" fill="currentColor" fill-opacity="0.25" stroke="currentColor" class="f-gray s-gray" stroke-width="1.2"/><circle cx="473" cy="160" r="9" fill="currentColor" fill-opacity="0.25" stroke="currentColor" class="f-gray s-gray" stroke-width="1.2"/><circle cx="491" cy="160" r="9" fill="currentColor" fill-opacity="0.25" stroke="currentColor" class="f-gray s-gray" stroke-width="1.2"/><circle cx="509" cy="160" r="9" fill="currentColor" fill-opacity="0.25" stroke="currentColor" class="f-gray s-gray" stroke-width="1.2"/><line x1="36.0" y1="136.8" x2="44.0" y2="136.8" stroke="currentColor" stroke-width="1.8"/><line x1="36.0" y1="141.2" x2="44.0" y2="141.2" stroke="currentColor" stroke-width="1.8"/><circle cx="26.0" cy="139.0" r="10" fill="currentColor" fill-opacity="0.25" stroke="currentColor" class="f-red s-red" stroke-width="1.5"/><text x="26.0" y="143.0" font-size="11" text-anchor="middle">O</text><circle cx="54.0" cy="139.0" r="10" fill="currentColor" fill-opacity="0.25" stroke="currentColor" class="f-red s-red" stroke-width="1.5"/><text x="54.0" y="143.0" font-size="11" text-anchor="middle">O</text><line x1="94.8" y1="129.0" x2="94.8" y2="121.0" stroke="currentColor" stroke-width="1.8"/><line x1="98.0" y1="129.0" x2="98.0" y2="121.0" stroke="currentColor" stroke-width="1.8"/><line x1="101.2" y1="129.0" x2="101.2" y2="121.0" stroke="currentColor" stroke-width="1.8"/><circle cx="98.0" cy="139.0" r="10" fill="currentColor" fill-opacity="0.25" stroke="currentColor" class="f-gray s-gray" stroke-width="1.5"/><text x="98.0" y="143.0" font-size="11" text-anchor="middle">C</text><circle cx="98.0" cy="111.0" r="10" fill="currentColor" fill-opacity="0.25" stroke="currentColor" class="f-red s-red" stroke-width="1.5"/><text x="98.0" y="115.0" font-size="11" text-anchor="middle">O</text><line x1="40" y1="50" x2="40" y2="122" stroke="currentColor" stroke-width="1.5"/><polyline points="35,113 40,124 45,113" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="150.0" cy="139.0" r="10" fill="currentColor" fill-opacity="0.25" stroke="currentColor" class="f-red s-red" stroke-width="1.5"/><text x="150.0" y="143.0" font-size="11" text-anchor="middle">O</text><circle cx="192.0" cy="139.0" r="10" fill="currentColor" fill-opacity="0.25" stroke="currentColor" class="f-red s-red" stroke-width="1.5"/><text x="192.0" y="143.0" font-size="11" text-anchor="middle">O</text><line x1="226.8" y1="129.0" x2="226.8" y2="121.0" stroke="currentColor" stroke-width="1.8"/><line x1="230.0" y1="129.0" x2="230.0" y2="121.0" stroke="currentColor" stroke-width="1.8"/><line x1="233.2" y1="129.0" x2="233.2" y2="121.0" stroke="currentColor" stroke-width="1.8"/><circle cx="230.0" cy="139.0" r="10" fill="currentColor" fill-opacity="0.25" stroke="currentColor" class="f-gray s-gray" stroke-width="1.5"/><text x="230.0" y="143.0" font-size="11" text-anchor="middle">C</text><circle cx="230.0" cy="111.0" r="10" fill="currentColor" fill-opacity="0.25" stroke="currentColor" class="f-red s-red" stroke-width="1.5"/><text x="230.0" y="115.0" font-size="11" text-anchor="middle">O</text><circle cx="280.0" cy="139.0" r="10" fill="currentColor" fill-opacity="0.25" stroke="currentColor" class="f-red s-red" stroke-width="1.5"/><text x="280.0" y="143.0" font-size="11" text-anchor="middle">O</text><line x1="337.8" y1="129.0" x2="337.8" y2="121.0" stroke="currentColor" stroke-width="1.8"/><line x1="342.2" y1="129.0" x2="342.2" y2="121.0" stroke="currentColor" stroke-width="1.8"/><line x1="350.0" y1="139.0" x2="358.0" y2="139.0" stroke="currentColor" stroke-width="1.8"/><circle cx="340.0" cy="139.0" r="10" fill="currentColor" fill-opacity="0.25" stroke="currentColor" class="f-gray s-gray" stroke-width="1.5"/><text x="340.0" y="143.0" font-size="11" text-anchor="middle">C</text><circle cx="340.0" cy="111.0" r="10" fill="currentColor" fill-opacity="0.25" stroke="currentColor" class="f-red s-red" stroke-width="1.5"/><text x="340.0" y="115.0" font-size="11" text-anchor="middle">O</text><circle cx="368.0" cy="139.0" r="10" fill="currentColor" fill-opacity="0.25" stroke="currentColor" class="f-red s-red" stroke-width="1.5"/><text x="368.0" y="143.0" font-size="11" text-anchor="middle">O</text><circle cx="410.0" cy="139.0" r="10" fill="currentColor" fill-opacity="0.25" stroke="currentColor" class="f-red s-red" stroke-width="1.5"/><text x="410.0" y="143.0" font-size="11" text-anchor="middle">O</text><line x1="456.0" y1="72.8" x2="464.0" y2="72.8" stroke="currentColor" stroke-width="1.8"/><line x1="456.0" y1="77.2" x2="464.0" y2="77.2" stroke="currentColor" stroke-width="1.8"/><line x1="484.0" y1="72.8" x2="492.0" y2="72.8" stroke="currentColor" stroke-width="1.8"/><line x1="484.0" y1="77.2" x2="492.0" y2="77.2" stroke="currentColor" stroke-width="1.8"/><circle cx="446.0" cy="75.0" r="10" fill="currentColor" fill-opacity="0.25" stroke="currentColor" class="f-red s-red" stroke-width="1.5"/><text x="446.0" y="79.0" font-size="11" text-anchor="middle">O</text><circle cx="474.0" cy="75.0" r="10" fill="currentColor" fill-opacity="0.25" stroke="currentColor" class="f-gray s-gray" stroke-width="1.5"/><text x="474.0" y="79.0" font-size="11" text-anchor="middle">C</text><circle cx="502.0" cy="75.0" r="10" fill="currentColor" fill-opacity="0.25" stroke="currentColor" class="f-red s-red" stroke-width="1.5"/><text x="502.0" y="79.0" font-size="11" text-anchor="middle">O</text><line x1="474" y1="130" x2="474" y2="92" stroke="currentColor" stroke-width="1.5"/><polyline points="469,101 474,90 479,101" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="474" y="50" font-size="12" text-anchor="middle">CO₂ leaves</text><text x="260" y="195" font-size="13" text-anchor="middle" class="t-gray">platinum surface (catalyst atoms are unchanged)</text></svg>`,
          alt: 'Four panels above a row of platinum atoms. Panel 1, adsorption: an O2 molecule and a CO molecule settle onto the surface. Panel 2: the O2 has split into two separate O atoms on the surface, with CO still bound. Panel 3: one O atom has bonded to the carbon of CO on the surface. Panel 4, desorption: a CO2 molecule leaves the surface, one O atom remains.',
          caption: 'Oxidation of CO in a catalytic converter. Binding to the metal weakens the O=O bond enough to split it, a step with a far lower barrier than breaking $\\ce{O2}$ in the gas phase.',
        },
        {
          type: 'steps',
          items: [
            { title: 'Adsorption', text: 'Reactant molecules bind to active sites on the surface.' },
            { title: 'Activation', text: 'Bonding to the metal weakens or breaks bonds inside the molecules ($\\ce{O2}$ or $\\ce{N2}$ into atoms, $\\ce{H2}$ into H atoms).' },
            { title: 'Surface reaction', text: 'Adsorbed fragments meet and form new bonds.' },
            { title: 'Desorption', text: 'The product leaves, freeing the site for the next cycle.' },
          ],
        },
        {
          type: 'list',
          items: [
            '**Catalytic converters.** A ceramic honeycomb coated with platinum, palladium and rhodium converts exhaust: $\\ce{2CO + O2 -> 2CO2}$, unburned hydrocarbons to $\\ce{CO2}$ and $\\ce{H2O}$, and nitrogen oxides back to $\\ce{N2}$ (for example $\\ce{2NO + 2CO -> N2 + 2CO2}$). It barely works until it warms up to a few hundred °C (Arrhenius again), so a large share of a short trip\'s emissions comes out in the first minutes after a cold start.',
            '**The Haber process.** $\\ce{N2(g) + 3H2(g) <=> 2NH3(g)}$ over an iron catalyst at about 400–500 °C and 150–300 atm. The $\\ce{N#N}$ triple bond is so strong that, without a catalyst, the reaction is negligibly slow even when hot; on iron, $\\ce{N2}$ dissociates into adsorbed N atoms that pick up hydrogen. Ammonia made this way feeds roughly half the world\'s population through fertilizer.',
          ],
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why surface reactions can be zero order',
          text: 'A surface has a fixed number of active sites. At high gas pressure every site is occupied, so adding more reactant cannot speed things up: the rate is constant, **zero order**. That is the decomposition of $\\ce{NH3}$ on hot tungsten from the rate-law lesson. At low pressure the sites are mostly empty and the rate rises with pressure. The same saturation idea governs enzymes, below.',
        },
        {
          type: 'callout',
          variant: 'note',
          text: 'Catalysts can be **poisoned**: a substance that binds to the active sites more strongly than the reactants blocks them permanently. Lead from old leaded gasoline poisoned catalytic converters, which is one reason leaded fuel was phased out for cars.',
        },
      ],
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'order',
      prompt: 'Order the stages of a reaction on a solid catalyst surface.',
      lines: [
        'Reactant molecules adsorb onto active sites',
        'Bonds within the adsorbed molecules weaken or break',
        'Adsorbed fragments react to form the product',
        'The product desorbs, freeing the active site',
      ],
      distractors: ['The catalyst atoms are converted into product'],
      explanation: 'Adsorption, activation, surface reaction, desorption: then the site is free for the next cycle. The distractor describes a reactant, not a catalyst. The catalyst surface is unchanged at the end of each cycle, which is why a few grams of precious metal in a converter can treat exhaust for over a hundred thousand miles.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'concept',
      title: 'Enzymes and Michaelis–Menten kinetics',
      blocks: [
        {
          type: 'p',
          text: '[[gchem-enzyme|Enzymes]] are biological catalysts, mostly proteins. Each has an **active site** shaped to bind a particular *substrate* S. The simplest mechanism treats binding as a fast reversible step and the chemical conversion as the slower one:',
        },
        {
          type: 'math',
          tex: '\\ce{E + S <=>[k_1][k_{-1}] ES ->[k_2] E + P}',
          caption: 'E is regenerated, as a catalyst must be; ES is an intermediate.',
        },
        {
          type: 'theorem',
          name: 'Michaelis–Menten equation',
          tex: 'v = \\frac{V_{\\max}[\\ce{S}]}{K_M + [\\ce{S}]}',
          text: '$v$ is the initial rate. $V_{\\max} = k_2[\\ce{E}]_{\\text{total}}$ is the rate when every enzyme molecule is busy. $K_M$, the *Michaelis constant*, is the substrate concentration at which $v = \\tfrac{1}{2}V_{\\max}$.',
        },
        {
          type: 'graph',
          x: [0, 50],
          y: [0, 110],
          xStep: 5,
          yStep: 10,
          functions: [
            { expr: 'V*x/(K + x)', label: '$v = \\frac{V_{\\max}[\\ce{S}]}{K_M + [\\ce{S}]}$', color: 'blue' },
            { expr: '(V/K)*x', label: 'low-$[\\ce{S}]$ limit $\\frac{V_{\\max}}{K_M}[\\ce{S}]$ (first order)', color: 'gray', dashed: true, domain: [0, 'K'] },
          ],
          hlines: [
            { y: 'V', label: 'Vmax', color: 'red' },
            { y: 'V/2', label: 'Vmax/2', color: 'gray' },
          ],
          vlines: [{ x: 'K', label: 'Km', color: 'purple' }],
          points: [{ x: 'K', y: 'V/2', label: '' }],
          sliders: [
            { name: 'V', min: 20, max: 100, step: 5, value: 60, label: '$V_{\\max}$ (μM/s)' },
            { name: 'K', min: 1, max: 20, step: 0.5, value: 5, label: '$K_M$ (mM)' },
          ],
          readouts: [{ label: '$v$ at $[\\ce{S}] = 10$ mM (μM/s) $=$', expr: '10V/(K + 10)', digits: 3 }],
          caption: 'Horizontal axis: $[\\ce{S}]$ (mM); vertical: initial rate $v$ (μM/s). At low $[\\ce{S}]$ the rate rises in proportion to $[\\ce{S}]$; at high $[\\ce{S}]$ it levels off at $V_{\\max}$ (saturation, zero order). Raising $K_M$ (weaker binding) stretches the curve to the right without changing the plateau.',
        },
        {
          type: 'list',
          items: [
            '$[\\ce{S}] \\ll K_M$: $v \\approx \\frac{V_{\\max}}{K_M}[\\ce{S}]$, **first order** in substrate. Most enzyme sites are empty.',
            '$[\\ce{S}] = K_M$: $v = \\frac{V_{\\max}K_M}{2K_M} = \\tfrac{1}{2}V_{\\max}$. This is how $K_M$ is read off the graph.',
            '$[\\ce{S}] \\gg K_M$: $v \\approx V_{\\max}$, **zero order**. Every site is occupied; more substrate just waits in line. This is why ethanol elimination is roughly zero order.',
          ],
        },
        {
          type: 'deepdive',
          title: 'Deriving Michaelis–Menten (steady-state approximation)',
          blocks: [
            {
              type: 'derivation',
              steps: [
                { tex: '\\frac{d[\\ce{ES}]}{dt} = k_1[\\ce{E}][\\ce{S}] - k_{-1}[\\ce{ES}] - k_2[\\ce{ES}] \\approx 0', why: 'Steady state: after a brief start-up, ES is formed as fast as it is used up, so its concentration stays nearly constant.' },
                { tex: '[\\ce{E}] = [\\ce{E}]_{\\text{total}} - [\\ce{ES}]', why: 'Every enzyme molecule is either free or bound.' },
                { tex: 'k_1([\\ce{E}]_{\\text{total}} - [\\ce{ES}])[\\ce{S}] = (k_{-1} + k_2)[\\ce{ES}]', why: 'Substitute into the steady-state condition.' },
                { tex: '[\\ce{ES}] = \\frac{[\\ce{E}]_{\\text{total}}[\\ce{S}]}{K_M + [\\ce{S}]}, \\quad K_M = \\frac{k_{-1} + k_2}{k_1}', why: 'Divide through by $k_1$ and solve the linear equation for $[\\ce{ES}]$.' },
                { tex: 'v = k_2[\\ce{ES}] = \\frac{k_2[\\ce{E}]_{\\text{total}}[\\ce{S}]}{K_M + [\\ce{S}]} = \\frac{V_{\\max}[\\ce{S}]}{K_M + [\\ce{S}]}', why: 'Product forms in the second step, so $v = k_2[\\ce{ES}]$; define $V_{\\max} = k_2[\\ce{E}]_{\\text{total}}$.' },
              ],
            },
          ],
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Speed and inhibitors',
          text: 'Catalase, which destroys hydrogen peroxide in your cells, turns over millions of substrate molecules per second per enzyme. Because enzymes are so specific, blocking one can have dramatic effects: many drugs are enzyme inhibitors (ibuprofen blocks a cyclooxygenase), and so are organophosphate pesticides and nerve agents, which block acetylcholinesterase.',
        },
      ],
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'numeric',
      prompt: 'An enzyme has $V_{\\max} = 50\\ \\mu\\text{M/s}$ and $K_M = 2.0$ mM. What is the initial rate when $[\\ce{S}] = 0.50$ mM? Give two significant figures.',
      hint: '$v = \\frac{V_{\\max}[\\ce{S}]}{K_M + [\\ce{S}]}$; $[\\ce{S}]$ and $K_M$ are both in mM, so their units cancel.',
      label: '$v =$',
      unit: 'μM/s',
      answer: '50*0.50/(2.0 + 0.50)',
      answerTex: '10\\ \\mu\\text{M/s}',
      tolerance: 0.3,
      explanation: '$v = \\frac{(50)(0.50)}{2.0 + 0.50} = \\frac{25}{2.5} = 10\\ \\mu$M/s, one fifth of $V_{\\max}$. Here $[\\ce{S}] < K_M$, so the enzyme is mostly idle. The first-order approximation $\\frac{V_{\\max}}{K_M}[\\ce{S}] = 12.5\\ \\mu$M/s overestimates, because $[\\ce{S}]$ is not *much* smaller than $K_M$.',
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'numeric',
      prompt: 'For the same enzyme ($K_M = 2.0$ mM), what substrate concentration gives a rate equal to 90% of $V_{\\max}$?',
      hint: 'Set $\\frac{[\\ce{S}]}{K_M + [\\ce{S}]} = 0.90$ and solve for $[\\ce{S}]$.',
      label: '$[\\ce{S}] =$',
      unit: 'mM',
      answer: '18',
      answerTex: '18\\ \\text{mM}',
      tolerance: 0.3,
      explanation: '$[\\ce{S}] = 0.90(K_M + [\\ce{S}])$ gives $0.10[\\ce{S}] = 0.90K_M$, so $[\\ce{S}] = 9K_M = 18$ mM. Going from half speed (at 2.0 mM) to 90% speed takes **nine times** as much substrate: the approach to saturation is slow, just like the flattening curve on the graph.',
    },
  ],
  takeaways: [
    'A mechanism is a sequence of elementary steps that must add to the overall equation; intermediates are made and then consumed.',
    'Only an elementary step\'s rate law follows from its equation (uni-, bi-, termolecular); termolecular steps are rare.',
    'The slowest step is rate-determining. A slow first step gives its own rate law ($\\ce{NO2 + CO}$: $k[\\ce{NO2}]^2$, zero order in CO).',
    'With a fast pre-equilibrium before the slow step, set forward = reverse rate to eliminate the intermediate ($\\ce{2NO + O2}$: $\\frac{k_1k_2}{k_{-1}}[\\ce{NO}]^2[\\ce{O2}]$).',
    'A catalyst is consumed then regenerated; it lowers $E_a$ for both directions, leaving $\\Delta H$ and the equilibrium unchanged. Lowering $E_a$ by $\\Delta E$ multiplies $k$ by about $e^{\\Delta E/RT}$.',
    'Heterogeneous catalysis: adsorb, activate, react, desorb (catalytic converters, Haber process). Enzymes follow $v = \\frac{V_{\\max}[\\ce{S}]}{K_M + [\\ce{S}]}$: first order at low $[\\ce{S}]$, saturating (zero order) at high $[\\ce{S}]$.',
  ],
  reading: [
    {
      title: 'OpenStax Chemistry 2e — Chapter 12: Kinetics',
      url: 'https://openstax.org/books/chemistry-2e/pages/12-introduction',
      source: 'openstax',
      note: 'Sections 12.6 (Reaction Mechanisms) and 12.7 (Catalysis) give further mechanisms to test against rate laws.',
    },
    {
      title: 'MIT OCW 5.111 Principles of Chemical Science',
      url: 'https://ocw.mit.edu/courses/5-111sc-principles-of-chemical-science-fall-2014/',
      source: 'other',
      note: 'The kinetics lectures derive rate laws from mechanisms with the pre-equilibrium and steady-state approximations.',
    },
    {
      title: 'Michaelis–Menten kinetics (Wikipedia)',
      url: 'https://en.wikipedia.org/wiki/Michaelis%E2%80%93Menten_kinetics',
      source: 'wikipedia',
      note: 'The full steady-state derivation, the Lineweaver–Burk plot, and typical values of $K_M$ and turnover numbers.',
    },
  ],
};
