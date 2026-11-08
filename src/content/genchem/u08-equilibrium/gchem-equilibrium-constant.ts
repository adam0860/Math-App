import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'gchem-equilibrium-constant',
  title: 'The Equilibrium Constant',
  summary: 'Why reactions stop short: dynamic equilibrium, the law of mass action, $K_c$ and $K_p$, heterogeneous equilibria, and the algebra of combining equilibrium constants.',
  minutes: 19,
  objectives: [
    'Explain dynamic equilibrium as the point where forward and reverse rates become equal',
    'Write $K_c$ and $K_p$ expressions from a balanced equation, omitting pure solids and liquids, and explain why (activity)',
    'Calculate $K_c$ from equilibrium concentrations and convert between $K_c$ and $K_p$ with $K_p = K_c(RT)^{\\Delta n}$',
    'Find $K$ for a reversed, scaled or combined reaction',
    'Interpret the magnitude of $K$, and explain why it says nothing about how fast equilibrium is reached',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Dynamic equilibrium: when the two rates meet',
      blocks: [
        {
          type: 'p',
          text: 'In Chemistry Foundations every reaction ran until the [[limiting-reactant|limiting reactant]] was gone. Many reactions do not. Seal some colorless dinitrogen tetroxide in a glass tube and it turns pale brown as nitrogen dioxide forms. Then the color stops changing, even though plenty of $\\ce{N2O4}$ is left.',
        },
        {
          type: 'math',
          tex: '\\ce{N2O4(g) <=> 2NO2(g)}',
          caption: 'The double harpoon $\\ce{<=>}$ means the reaction runs in both directions at once.',
        },
        {
          type: 'p',
          text: 'The kinetics unit explains why. Take the simplest reversible reaction, $\\ce{A <=> B}$, with both directions elementary. The forward rate is $k_f[\\ce{A}]$ and the reverse rate is $k_r[\\ce{B}]$. At the start there is no B, so only the forward reaction runs. As A turns into B, the forward rate falls and the reverse rate rises, until they are **equal**. From then on, A becomes B exactly as fast as B becomes A, and no concentration changes.',
        },
        {
          type: 'graph',
          x: [0, 6],
          y: [0, 1.05],
          xStep: 1,
          yStep: 0.2,
          functions: [
            { expr: 'b/(a+b) + a/(a+b)*e^(-(a+b)x)', label: '$[\\ce{A}]$ (M)', color: 'blue' },
            { expr: 'a/(a+b)*(1 - e^(-(a+b)x))', label: '$[\\ce{B}]$ (M)', color: 'red' },
          ],
          sliders: [
            { name: 'a', min: 0.2, max: 2, step: 0.1, value: 1, label: '$k_f$ (s⁻¹)' },
            { name: 'b', min: 0.2, max: 2, step: 0.1, value: 0.5, label: '$k_r$ (s⁻¹)' },
          ],
          readouts: [
            { label: '$k_f / k_r =$', expr: 'a/b', digits: 3 },
            { label: 'final $[\\ce{B}]/[\\ce{A}] =$', expr: '(a/(a+b))/(b/(a+b))', digits: 3 },
          ],
          caption: 'Concentrations versus time (s), starting from 1 M of A and no B. Both curves level off: that plateau is equilibrium. Change either rate constant and the final ratio $[\\ce{B}]/[\\ce{A}]$ always equals $k_f/k_r$.',
        },
        {
          type: 'graph',
          x: [0, 6],
          y: [0, 2.1],
          xStep: 1,
          yStep: 0.5,
          functions: [
            { expr: 'a*(b/(a+b) + a/(a+b)*e^(-(a+b)x))', label: 'forward rate $k_f[\\ce{A}]$', color: 'blue' },
            { expr: 'b*a/(a+b)*(1 - e^(-(a+b)x))', label: 'reverse rate $k_r[\\ce{B}]$', color: 'red' },
          ],
          sliders: [
            { name: 'a', min: 0.2, max: 2, step: 0.1, value: 1, label: '$k_f$ (s⁻¹)' },
            { name: 'b', min: 0.2, max: 2, step: 0.1, value: 0.5, label: '$k_r$ (s⁻¹)' },
          ],
          readouts: [{ label: 'rate at equilibrium (M/s) $=$', expr: 'a*b/(a+b)', digits: 3 }],
          caption: 'The same reaction seen as rates (M/s). The forward rate falls, the reverse rate rises, and they meet at one common value. Equilibrium is the point where the two rates are equal, **not** where they are zero.',
        },
        {
          type: 'definition',
          term: 'Dynamic equilibrium',
          text: 'A state of a closed system in which the forward and reverse reactions proceed at equal rates, so the concentrations of all species stay constant. This is [[gchem-dynamic-equilibrium|dynamic equilibrium]]: nothing changes on the large scale while both reactions keep running on the molecular scale.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'How we know the reaction has not simply stopped',
          text: 'Add a little $\\ce{N2O4}$ made with the heavy isotope nitrogen-15 to an equilibrium mixture. The total concentrations do not change, yet nitrogen-15 soon shows up in the $\\ce{NO2}$ too. Molecules are still breaking apart and re-forming; the two directions just cancel. A stopped reaction would leave the label where you put it.',
        },
        {
          type: 'deepdive',
          title: 'The curves come from a differential equation',
          blocks: [
            {
              type: 'p',
              text: 'With $[\\ce{A}]_0 = 1$ M and no B at the start, conservation gives $[\\ce{B}] = 1 - [\\ce{A}]$. The net rate of change of A is "lost forward minus gained back":',
            },
            {
              type: 'derivation',
              steps: [
                { tex: '\\frac{d[\\ce{A}]}{dt} = -k_f[\\ce{A}] + k_r(1 - [\\ce{A}])', why: 'Forward reaction removes A, reverse reaction makes it.' },
                { tex: '= -(k_f + k_r)\\left([\\ce{A}] - \\frac{k_r}{k_f + k_r}\\right)', why: 'Factor out $-(k_f + k_r)$. The quantity in parentheses is the distance from the equilibrium value.' },
                { tex: '[\\ce{A}](t) = \\frac{k_r}{k_f + k_r} + \\frac{k_f}{k_f + k_r}\\, e^{-(k_f + k_r)t}', why: 'A [[separable-equation]]: the distance from equilibrium decays exponentially with rate constant $k_f + k_r$. The constant is fixed by $[\\ce{A}](0) = 1$.' },
                { tex: '\\lim_{t \\to \\infty}\\frac{[\\ce{B}]}{[\\ce{A}]} = \\frac{k_f/(k_f + k_r)}{k_r/(k_f + k_r)} = \\frac{k_f}{k_r}', why: 'As $t \\to \\infty$ the exponential vanishes, leaving the equilibrium ratio.' },
              ],
              result: 'The equilibrium ratio of concentrations is a constant, $k_f/k_r$, that does not depend on how much A you started with. That constant is the equilibrium constant for this reaction.',
            },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'mcq',
      prompt: 'A sealed flask of $\\ce{N2O4}$ and $\\ce{NO2}$ has reached equilibrium. Which statement is true?',
      options: [
        { text: 'The concentrations of $\\ce{N2O4}$ and $\\ce{NO2}$ are equal', why: 'Equilibrium means the concentrations are *constant*, not equal. In the 1 M experiment of the next card, $[\\ce{N2O4}]$ is about 14 times $[\\ce{NO2}]$ at equilibrium.' },
        { text: 'Both reactions have stopped', why: 'Isotope-labeling experiments show both reactions keep running. Equilibrium is dynamic.' },
        { text: 'The forward and reverse rates are equal, so concentrations no longer change', correct: true, why: 'This is the definition of dynamic equilibrium: equal and opposite rates, so no net change.' },
        { text: 'The forward rate is zero and the reverse rate is zero', why: 'Zero rates would mean a stopped reaction. The rates are equal but not zero (look at where the curves meet in the rate graph).' },
      ],
      explanation: 'At equilibrium the forward rate equals the reverse rate. Each second as many $\\ce{N2O4}$ molecules split as $\\ce{NO2}$ pairs combine, so the amounts stay constant while both reactions continue. The amounts themselves are whatever the equilibrium constant dictates, and are rarely equal.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'The law of mass action',
      blocks: [
        {
          type: 'p',
          text: 'What exactly stays constant at equilibrium? Run the $\\ce{N2O4}$ experiment several times at 25 °C from different starting mixtures and measure the equilibrium concentrations:',
        },
        {
          type: 'table',
          headers: ['start (M)', '$[\\ce{N2O4}]_{\\text{eq}}$', '$[\\ce{NO2}]_{\\text{eq}}$', '$\\dfrac{[\\ce{NO2}]}{[\\ce{N2O4}]}$', '$\\dfrac{[\\ce{NO2}]^2}{[\\ce{N2O4}]}$'],
          rows: [
            ['0.100 $\\ce{N2O4}$', '0.0898', '0.0204', '0.227', '$4.64 \\times 10^{-3}$'],
            ['0.100 $\\ce{NO2}$', '0.0429', '0.0141', '0.329', '$4.64 \\times 10^{-3}$'],
            ['0.0500 of each', '0.0662', '0.0175', '0.265', '$4.64 \\times 10^{-3}$'],
            ['1.00 $\\ce{N2O4}$', '0.967', '0.0670', '0.0693', '$4.64 \\times 10^{-3}$'],
          ],
          caption: 'Four different starts, four different equilibrium mixtures. The simple ratio changes; the ratio with $[\\ce{NO2}]$ **squared** is the same every time. (Data calculated from $K_c = 4.64 \\times 10^{-3}$ at 25 °C.)',
        },
        {
          type: 'p',
          text: 'The square is the coefficient 2 in the balanced equation. Cato Guldberg and Peter Waage found the general rule in 1864, the [[gchem-law-of-mass-action|law of mass action]]:',
        },
        {
          type: 'theorem',
          name: 'Law of mass action',
          tex: 'a\\ce{A} + b\\ce{B} \\ce{<=>} c\\ce{C} + d\\ce{D} \\qquad K_c = \\frac{[\\ce{C}]^c\\,[\\ce{D}]^d}{[\\ce{A}]^a\\,[\\ce{B}]^b}',
          text: 'Products over reactants, each equilibrium concentration (in mol/L) raised to its [[chem-stoichiometric-coefficient|coefficient]]. At a given temperature the [[gchem-equilibrium-constant|equilibrium constant]] $K_c$ has one fixed value, whatever the starting mixture.',
        },
        {
          type: 'derivation',
          title: 'Ammonia synthesis at 472 °C',
          steps: [
            { tex: '\\ce{N2(g) + 3H2(g) <=> 2NH3(g)}', why: 'Start from the balanced equation: the coefficients become the exponents.' },
            { tex: 'K_c = \\frac{[\\ce{NH3}]^2}{[\\ce{N2}][\\ce{H2}]^3}', why: 'Product on top, squared; reactants below, $\\ce{N2}$ to the first power and $\\ce{H2}$ cubed.' },
            { tex: 'K_c = \\frac{(0.00272)^2}{(0.0402)(0.1207)^3}', why: 'Measured equilibrium concentrations: $[\\ce{N2}] = 0.0402$ M, $[\\ce{H2}] = 0.1207$ M, $[\\ce{NH3}] = 0.00272$ M.' },
            { tex: '= \\frac{7.398 \\times 10^{-6}}{(0.0402)(1.7584 \\times 10^{-3})} = \\frac{7.398 \\times 10^{-6}}{7.069 \\times 10^{-5}} = 0.105', why: 'Evaluate the powers first, then divide. Three significant figures, like the data.' },
          ],
          result: '$K_c = 0.105$ at 472 °C. Any other equilibrium mixture of these gases at 472 °C gives the same number.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the exponents are the coefficients (unlike rate laws)',
          text: 'For a single elementary step you saw $K = k_f/k_r$: the rate laws of an elementary step follow its coefficients, so the coefficients become exponents. A multistep reaction is a chain of elementary steps, and at equilibrium **every** step is balanced on its own. Multiply the step equilibrium expressions together and the intermediates cancel, leaving exactly the overall coefficients. So, unlike a rate law, an equilibrium expression can always be written straight from the balanced equation, without any experiment.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Three things K depends on',
          text: '$K$ belongs to **one balanced equation** (write it differently and $K$ changes, as you will see below), at **one temperature** (heat the flask and $K$ changes), and it uses **equilibrium** concentrations only. A mixture that is not at equilibrium gives a different number, the reaction quotient of the next lesson.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'numeric',
      prompt: 'At 1000 K, an equilibrium mixture for $\\ce{2SO2(g) + O2(g) <=> 2SO3(g)}$ contains $[\\ce{SO2}] = 0.0600$ M, $[\\ce{O2}] = 0.0400$ M and $[\\ce{SO3}] = 0.200$ M. Calculate $K_c$ (three significant figures).',
      hint: '$K_c = \\dfrac{[\\ce{SO3}]^2}{[\\ce{SO2}]^2[\\ce{O2}]}$. Square both sulfur oxides.',
      label: '$K_c =$',
      answer: '0.200^2/(0.0600^2*0.0400)',
      answerTex: '278',
      tolerance: 0.6,
      explanation: '$K_c = \\dfrac{(0.200)^2}{(0.0600)^2(0.0400)} = \\dfrac{0.0400}{(0.00360)(0.0400)} = \\dfrac{0.0400}{1.44 \\times 10^{-4}} = 278$. This is the key step of the contact process for sulfuric acid, the most-produced industrial chemical. A $K$ in the hundreds means products are strongly favored at this temperature.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'fill',
      prompt: 'The Ostwald process (the route from ammonia to nitric acid) begins with $\\ce{4NH3(g) + 5O2(g) <=> 4NO(g) + 6H2O(g)}$. Complete the description of its $K_c$ expression.',
      template: 'The exponent on $[\\ce{H2O}]$ is ___, the exponent on $[\\ce{O2}]$ is ___, and $[\\ce{O2}]$ appears in the ___ of the fraction.',
      blanks: [{ answers: ['6'] }, { answers: ['5'] }, { answers: ['denominator'] }],
      wordBank: ['4', '5', '6', '9', 'numerator', 'denominator'],
      explanation: '$K_c = \\dfrac{[\\ce{NO}]^4[\\ce{H2O}]^6}{[\\ce{NH3}]^4[\\ce{O2}]^5}$. Each concentration is raised to its own coefficient: 6 for water, 5 for oxygen. Oxygen is a reactant, so it goes in the denominator. Here the water is a gas, so it stays in the expression; the next card shows when water drops out.',
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'concept',
      title: 'Heterogeneous equilibria: why solids and liquids drop out',
      blocks: [
        {
          type: 'p',
          text: 'Heat limestone in a closed vessel and it partly decomposes into lime and carbon dioxide. Three phases take part: two solids and a gas. An equilibrium involving more than one phase is a [[gchem-heterogeneous-equilibrium|heterogeneous equilibrium]].',
        },
        {
          type: 'math',
          tex: '\\ce{CaCO3(s) <=> CaO(s) + CO2(g)} \\qquad K_c = [\\ce{CO2}], \\quad K_p = P_{\\ce{CO2}}',
          caption: 'The two solids do not appear in $K$.',
        },
        {
          type: 'p',
          text: 'The precise statement of the law of mass action uses not concentrations but [[gchem-activity|activities]]: a dimensionless measure of how "effectively concentrated" a substance is, compared with a standard state. For an ideal mixture:',
        },
        {
          type: 'table',
          headers: ['species', 'activity $a$', 'standard state'],
          rows: [
            ['solute in solution', '$[\\ce{X}] / (1\\ \\text{M})$', '1 mol/L'],
            ['gas', '$P_{\\ce{X}} / (1\\ \\text{bar})$', '1 bar'],
            ['pure solid or pure liquid', '$1$', 'the pure substance itself'],
            ['solvent in a dilute solution', '$\\approx 1$', 'the pure solvent'],
          ],
          caption: 'Dividing by the standard state is why $K$ has no units. Writing $K_c = [\\ce{CO2}]$ really means $[\\ce{CO2}]/(1\\ \\text{M})$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why a pure solid has activity 1',
          text: 'The "concentration" of a pure solid is its density divided by its molar mass: for calcium carbonate, $\\frac{2710\\ \\text{g/L}}{100.09\\ \\text{g/mol}} = 27.1$ mol/L. That number is the same for one crystal or for a tonne, because adding solid adds mass and volume in proportion. A quantity that cannot change cannot shift the equilibrium, so it is absorbed into $K$; formally, its activity relative to the pure substance is exactly 1. The same holds for a pure liquid, and very nearly for the solvent water in a dilute solution.',
        },
        {
          type: 'figure',
          svg: `<svg viewBox="0 0 500 250" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="62" width="170" height="140" rx="12" fill="none" stroke="currentColor" stroke-width="2"/><line x1="115.0" y1="62" x2="115.0" y2="46" stroke="currentColor" stroke-width="2"/><circle cx="115.0" cy="30" r="16" fill="none" stroke="currentColor" stroke-width="2"/><line x1="115.0" y1="30" x2="124.0" y2="21" stroke="currentColor" class="s-red" stroke-width="2.2"/><circle cx="115.0" cy="30" r="2" fill="currentColor"/><path d="M 44 200 Q 115.0 169.2 186 200 Z" fill="currentColor" class="f-gray" fill-opacity="0.35" stroke="currentColor" stroke-width="1.2"/><g><circle cx="72.6" cy="84.4" r="4" fill="currentColor" class="f-red"/><circle cx="79.6" cy="84.4" r="5" fill="currentColor" class="f-gray"/><circle cx="86.6" cy="84.4" r="4" fill="currentColor" class="f-red"/></g><g><circle cx="49.9" cy="102.9" r="4" fill="currentColor" class="f-red"/><circle cx="56.9" cy="102.9" r="5" fill="currentColor" class="f-gray"/><circle cx="63.9" cy="102.9" r="4" fill="currentColor" class="f-red"/></g><g><circle cx="164.0" cy="127.6" r="4" fill="currentColor" class="f-red"/><circle cx="171.0" cy="127.6" r="5" fill="currentColor" class="f-gray"/><circle cx="178.0" cy="127.6" r="4" fill="currentColor" class="f-red"/></g><g><circle cx="143.5" cy="91.8" r="4" fill="currentColor" class="f-red"/><circle cx="150.5" cy="91.8" r="5" fill="currentColor" class="f-gray"/><circle cx="157.5" cy="91.8" r="4" fill="currentColor" class="f-red"/></g><g><circle cx="112.9" cy="95.2" r="4" fill="currentColor" class="f-red"/><circle cx="119.9" cy="95.2" r="5" fill="currentColor" class="f-gray"/><circle cx="126.9" cy="95.2" r="4" fill="currentColor" class="f-red"/></g><g><circle cx="69.7" cy="135.5" r="4" fill="currentColor" class="f-red"/><circle cx="76.7" cy="135.5" r="5" fill="currentColor" class="f-gray"/><circle cx="83.7" cy="135.5" r="4" fill="currentColor" class="f-red"/></g><g><circle cx="122.2" cy="119.6" r="4" fill="currentColor" class="f-red"/><circle cx="129.2" cy="119.6" r="5" fill="currentColor" class="f-gray"/><circle cx="136.2" cy="119.6" r="4" fill="currentColor" class="f-red"/></g><g><circle cx="174.6" cy="90.1" r="4" fill="currentColor" class="f-red"/><circle cx="181.6" cy="90.1" r="5" fill="currentColor" class="f-gray"/><circle cx="188.6" cy="90.1" r="4" fill="currentColor" class="f-red"/></g><g><circle cx="84.0" cy="112.6" r="4" fill="currentColor" class="f-red"/><circle cx="91.0" cy="112.6" r="5" fill="currentColor" class="f-gray"/><circle cx="98.0" cy="112.6" r="4" fill="currentColor" class="f-red"/></g><text x="115.0" y="222" text-anchor="middle" font-size="13">a little CaCO₃(s) + CaO(s)</text><rect x="300" y="62" width="170" height="140" rx="12" fill="none" stroke="currentColor" stroke-width="2"/><line x1="385.0" y1="62" x2="385.0" y2="46" stroke="currentColor" stroke-width="2"/><circle cx="385.0" cy="30" r="16" fill="none" stroke="currentColor" stroke-width="2"/><line x1="385.0" y1="30" x2="394.0" y2="21" stroke="currentColor" class="s-red" stroke-width="2.2"/><circle cx="385.0" cy="30" r="2" fill="currentColor"/><path d="M 314 200 Q 385.0 130.0 456 200 Z" fill="currentColor" class="f-gray" fill-opacity="0.35" stroke="currentColor" stroke-width="1.2"/><g><circle cx="432.2" cy="83.0" r="4" fill="currentColor" class="f-red"/><circle cx="439.2" cy="83.0" r="5" fill="currentColor" class="f-gray"/><circle cx="446.2" cy="83.0" r="4" fill="currentColor" class="f-red"/></g><g><circle cx="319.3" cy="89.3" r="4" fill="currentColor" class="f-red"/><circle cx="326.3" cy="89.3" r="5" fill="currentColor" class="f-gray"/><circle cx="333.3" cy="89.3" r="4" fill="currentColor" class="f-red"/></g><g><circle cx="413.5" cy="108.5" r="4" fill="currentColor" class="f-red"/><circle cx="420.5" cy="108.5" r="5" fill="currentColor" class="f-gray"/><circle cx="427.5" cy="108.5" r="4" fill="currentColor" class="f-red"/></g><g><circle cx="440.4" cy="116.4" r="4" fill="currentColor" class="f-red"/><circle cx="447.4" cy="116.4" r="5" fill="currentColor" class="f-gray"/><circle cx="454.4" cy="116.4" r="4" fill="currentColor" class="f-red"/></g><g><circle cx="366.0" cy="124.7" r="4" fill="currentColor" class="f-red"/><circle cx="373.0" cy="124.7" r="5" fill="currentColor" class="f-gray"/><circle cx="380.0" cy="124.7" r="4" fill="currentColor" class="f-red"/></g><g><circle cx="350.3" cy="87.5" r="4" fill="currentColor" class="f-red"/><circle cx="357.3" cy="87.5" r="5" fill="currentColor" class="f-gray"/><circle cx="364.3" cy="87.5" r="4" fill="currentColor" class="f-red"/></g><g><circle cx="377.2" cy="82.6" r="4" fill="currentColor" class="f-red"/><circle cx="384.2" cy="82.6" r="5" fill="currentColor" class="f-gray"/><circle cx="391.2" cy="82.6" r="4" fill="currentColor" class="f-red"/></g><g><circle cx="339.3" cy="121.3" r="4" fill="currentColor" class="f-red"/><circle cx="346.3" cy="121.3" r="5" fill="currentColor" class="f-gray"/><circle cx="353.3" cy="121.3" r="4" fill="currentColor" class="f-red"/></g><g><circle cx="312.4" cy="119.5" r="4" fill="currentColor" class="f-red"/><circle cx="319.4" cy="119.5" r="5" fill="currentColor" class="f-gray"/><circle cx="326.4" cy="119.5" r="4" fill="currentColor" class="f-red"/></g><text x="385.0" y="222" text-anchor="middle" font-size="13">a lot of CaCO₃(s) + CaO(s)</text><text x="134" y="35" text-anchor="start" font-size="12.5" class="t-red">P(CO₂)</text><text x="404" y="35" text-anchor="start" font-size="12.5" class="t-red">P(CO₂)</text><text x="250" y="132" text-anchor="middle" font-size="22">=</text><text x="250" y="244" text-anchor="middle" font-size="13" class="t-blue">same temperature → same P(CO₂) = Kp, however much solid is present</text></svg>`,
          alt: 'Two sealed vessels at the same temperature, each with a pressure gauge on top. The left vessel has a small pile of solid calcium carbonate and lime, the right a large pile. Both contain the same density of carbon dioxide molecules and both gauges read the same.',
          caption: 'Red–gray–red dumbbells are $\\ce{CO2}$ molecules. The amount of solid differs, but the equilibrium pressure of $\\ce{CO2}$ is the same, because $K_p = P_{\\ce{CO2}}$ involves only the gas. (Some of each solid must be present for the equilibrium to exist at all.)',
        },
        {
          type: 'p',
          text: 'Lime kilns exploit this: around 900 °C the equilibrium pressure of $\\ce{CO2}$ over limestone passes 1 atm, and blowing the $\\ce{CO2}$ away lets the decomposition run to completion. State symbols matter: in $\\ce{2H2(g) + O2(g) <=> 2H2O(l)}$ water is omitted, but in $\\ce{2H2(g) + O2(g) <=> 2H2O(g)}$ it appears as $[\\ce{H2O}]^2$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'mcq',
      prompt: 'Hot iron reacts with steam: $\\ce{3Fe(s) + 4H2O(g) <=> Fe3O4(s) + 4H2(g)}$. Which is the correct $K_c$ expression?',
      options: [
        { text: '$K_c = \\dfrac{[\\ce{Fe3O4}][\\ce{H2}]^4}{[\\ce{Fe}]^3[\\ce{H2O}]^4}$', why: 'Iron and iron oxide are pure solids with activity 1, so they do not appear.' },
        { text: '$K_c = \\dfrac{[\\ce{H2}]^4}{[\\ce{H2O}]^4}$', correct: true, why: 'Only the gases appear, each raised to its coefficient, products over reactants.' },
        { text: '$K_c = \\dfrac{4[\\ce{H2}]}{4[\\ce{H2O}]}$', why: 'Coefficients are exponents, not multipliers.' },
        { text: '$K_c = \\dfrac{[\\ce{H2O}]^4}{[\\ce{H2}]^4}$', why: 'This is upside down: it is $K$ for the reverse reaction. Products go on top.' },
      ],
      explanation: 'Drop the pure solids $\\ce{Fe}$ and $\\ce{Fe3O4}$ (activity 1) and write gases only: $K_c = \\dfrac{[\\ce{H2}]^4}{[\\ce{H2O}]^4}$. Since both exponents are 4, this is also $\\left(\\dfrac{[\\ce{H2}]}{[\\ce{H2O}]}\\right)^4$: at a given temperature the hydrogen-to-steam ratio over the iron is fixed, however much iron you have.',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'concept',
      title: '$K_c$ and $K_p$',
      blocks: [
        {
          type: 'p',
          text: 'For gases it is often more natural to measure partial pressures than concentrations. Writing the law of mass action with partial pressures (in bar, or atm) gives $K_p$, the [[gchem-kp|pressure equilibrium constant]]. For ammonia synthesis:',
        },
        {
          type: 'math',
          tex: 'K_p = \\frac{P_{\\ce{NH3}}^2}{P_{\\ce{N2}}\\,P_{\\ce{H2}}^3}',
        },
        {
          type: 'p',
          text: 'The two constants are linked by the [[ideal-gas-law|ideal gas law]]. For each gas, $P_{\\ce{X}} = \\frac{n_{\\ce{X}}}{V}RT = [\\ce{X}]RT$, so every pressure is a concentration times the same factor $RT$.',
        },
        {
          type: 'derivation',
          title: 'Deriving $K_p = K_c(RT)^{\\Delta n}$',
          steps: [
            { tex: 'K_p = \\frac{P_{\\ce{C}}^{\\,c}\\,P_{\\ce{D}}^{\\,d}}{P_{\\ce{A}}^{\\,a}\\,P_{\\ce{B}}^{\\,b}}', why: 'The law of mass action for $a\\ce{A} + b\\ce{B} <=> c\\ce{C} + d\\ce{D}$, all gases, written with pressures.' },
            { tex: '= \\frac{([\\ce{C}]RT)^c\\,([\\ce{D}]RT)^d}{([\\ce{A}]RT)^a\\,([\\ce{B}]RT)^b}', why: 'Substitute $P_{\\ce{X}} = [\\ce{X}]RT$ for every gas.' },
            { tex: '= \\frac{[\\ce{C}]^c[\\ce{D}]^d}{[\\ce{A}]^a[\\ce{B}]^b}\\,(RT)^{(c + d) - (a + b)}', why: 'Collect the factors of $RT$: $c + d$ of them on top, $a + b$ below.' },
            { tex: 'K_p = K_c\\,(RT)^{\\Delta n}, \\qquad \\Delta n = n_{\\text{gas, products}} - n_{\\text{gas, reactants}}', why: 'The fraction is $K_c$; $\\Delta n$ is the change in moles of gas in the balanced equation.' },
          ],
        },
        {
          type: 'derivation',
          title: '$K_p$ for ammonia at 472 °C (pressures in bar)',
          steps: [
            { tex: '\\Delta n = 2 - (1 + 3) = -2', why: 'Two moles of gas formed from four: products minus reactants.' },
            { tex: 'RT = (0.08314\\ \\tfrac{\\text{L bar}}{\\text{mol K}})(745\\ \\text{K}) = 61.94', why: 'Use the value of $R$ whose units match the pressure unit (bar), and $T$ in kelvin: $472 + 273 = 745$ K.' },
            { tex: 'K_p = 0.105 \\times (61.94)^{-2} = \\frac{0.105}{3837} = 2.74 \\times 10^{-5}', why: 'A negative $\\Delta n$ puts $RT$ in the denominator.' },
          ],
          result: '$K_p = 2.74 \\times 10^{-5}$ while $K_c = 0.105$: the same equilibrium, described with different standard states.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Three classic slips',
          text: '(1) $\\Delta n$ counts **gas** moles only; ignore solids, liquids and dissolved species. (2) $T$ must be in kelvin. (3) $R$ must match the pressure unit: $0.08314\\ \\text{L bar mol}^{-1}\\text{K}^{-1}$ for bar, $0.08206\\ \\text{L atm mol}^{-1}\\text{K}^{-1}$ for atm. When $\\Delta n = 0$, as in $\\ce{H2 + I2 <=> 2HI}$, $K_p = K_c$ and none of this matters.',
        },
      ],
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'numeric',
      prompt: 'For $\\ce{N2O4(g) <=> 2NO2(g)}$ at 298 K, $K_c = 4.64 \\times 10^{-3}$. Calculate $K_p$ with pressures in bar, using $R = 0.08314\\ \\text{L bar mol}^{-1}\\text{K}^{-1}$ (three significant figures).',
      hint: '$\\Delta n = 2 - 1 = +1$, so $K_p = K_c(RT)^1$.',
      label: '$K_p =$',
      answer: '4.64*10^-3*0.08314*298',
      answerTex: '0.115',
      tolerance: 0.0006,
      explanation: 'One mole of gas becomes two, so $\\Delta n = +1$ and $K_p = K_c\\,RT = (4.64 \\times 10^{-3})(0.08314)(298) = (4.64 \\times 10^{-3})(24.78) = 0.115$. With a positive $\\Delta n$ the factor $RT$ multiplies, so $K_p > K_c$ here (at room temperature $RT \\approx 25$).',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'concept',
      title: 'The algebra of K: reverse, scale, add',
      blocks: [
        {
          type: 'p',
          text: 'Because $K$ belongs to a particular way of writing the equation, you need rules for what happens when you rewrite it. All three follow directly from the law of mass action.',
        },
        {
          type: 'table',
          headers: ['change to the equation', 'new constant', 'reason'],
          rows: [
            ['reverse it', '$K\' = \\dfrac{1}{K}$', 'products and reactants swap: the fraction flips'],
            ['multiply all coefficients by $n$', '$K\' = K^n$', 'every exponent is multiplied by $n$'],
            ['add two equations', '$K_3 = K_1 K_2$', 'the expressions multiply; shared species cancel'],
          ],
        },
        {
          type: 'p',
          text: 'Check the first two on $\\ce{N2O4 <=> 2NO2}$, $K = \\frac{[\\ce{NO2}]^2}{[\\ce{N2O4}]}$. Reversed, $\\ce{2NO2 <=> N2O4}$ has $\\frac{[\\ce{N2O4}]}{[\\ce{NO2}]^2} = \\frac{1}{K}$. Halved, $\\ce{1/2N2O4 <=> NO2}$ has $\\frac{[\\ce{NO2}]}{[\\ce{N2O4}]^{1/2}} = K^{1/2}$ (so $n$ may be a fraction).',
        },
        {
          type: 'derivation',
          title: 'Combining two equilibria (both $K_p$ at 25 °C)',
          steps: [
            { tex: '(1)\\ \\ce{N2(g) + O2(g) <=> 2NO(g)} \\qquad K_1 = 4.5 \\times 10^{-31}', why: 'Given data. Nitrogen and oxygen barely react at room temperature.' },
            { tex: '(2)\\ \\ce{2NO(g) + O2(g) <=> 2NO2(g)} \\qquad K_2 = 2.3 \\times 10^{12}', why: 'Given data. Nitric oxide reacts readily with oxygen.' },
            { tex: '(1) + (2):\\ \\ce{N2(g) + 2O2(g) <=> 2NO2(g)}', why: 'Add the equations: $\\ce{2NO}$ appears on both sides and cancels, just as in Hess\'s law.' },
            { tex: '\\frac{P_{\\ce{NO}}^2}{P_{\\ce{N2}}P_{\\ce{O2}}} \\cdot \\frac{P_{\\ce{NO2}}^2}{P_{\\ce{NO}}^2P_{\\ce{O2}}} = \\frac{P_{\\ce{NO2}}^2}{P_{\\ce{N2}}P_{\\ce{O2}}^2}', why: 'Multiplying the two expressions cancels the intermediate $P_{\\ce{NO}}^2$ and gives exactly the expression for the overall equation. That is why $K$ values multiply.' },
            { tex: 'K_3 = K_1 K_2 = (4.5 \\times 10^{-31})(2.3 \\times 10^{12}) = 1.0 \\times 10^{-18}', why: 'Multiply the constants; two significant figures, like the data.' },
          ],
          result: 'Forming $\\ce{NO2}$ directly from air is very unfavorable at room temperature, even though step (2) alone is very favorable.',
        },
        {
          type: 'derivation',
          title: 'Reverse and halve: $\\ce{NO2(g) <=> NO(g) + 1/2O2(g)}$',
          steps: [
            { tex: '\\ce{2NO2 <=> 2NO + O2} \\qquad K = \\frac{1}{K_2} = \\frac{1}{2.3 \\times 10^{12}} = 4.3 \\times 10^{-13}', why: 'Reversing equation (2) inverts its constant.' },
            { tex: '\\ce{NO2 <=> NO + 1/2O2} \\qquad K = \\left(4.3 \\times 10^{-13}\\right)^{1/2} = 6.6 \\times 10^{-7}', why: 'Halving every coefficient takes the square root.' },
          ],
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why adding reactions multiplies K (while ΔH adds)',
          text: 'In Hess\'s law, enthalpies of added reactions **add**. Equilibrium constants **multiply**, because $K$ behaves like an exponential of an energy: the thermodynamics unit shows $\\ln K = -\\Delta G^\\circ / RT$. Adding reactions adds the $\\Delta G^\\circ$ values, which adds the [[natural-logarithm|logarithms]] of $K$, which multiplies the $K$ values themselves.',
        },
      ],
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'numeric',
      prompt: 'At 1000 K, $\\ce{2SO2(g) + O2(g) <=> 2SO3(g)}$ has $K_c = 280$. Find $K_c$ for $\\ce{SO3(g) <=> SO2(g) + 1/2O2(g)}$ at the same temperature (three significant figures).',
      hint: 'The new equation is the original reversed **and** halved: $K\' = (1/K)^{1/2}$.',
      label: '$K_c\' =$',
      answer: '1/sqrt(280)',
      answerTex: '0.0598',
      tolerance: 0.00006,
      explanation: 'Reverse: $K = \\frac{1}{280} = 3.571 \\times 10^{-3}$. Halve the coefficients: $K\' = (3.571 \\times 10^{-3})^{1/2} = 0.0598$. The order does not matter: halving first gives $280^{1/2} = 16.73$, and reversing gives $\\frac{1}{16.73} = 0.0598$.',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'error',
      prompt: 'A student converts $K_c = 280$ at 1000 K for $\\ce{2SO2(g) + O2(g) <=> 2SO3(g)}$ into $K_p$ (bar). Tap the first line that is wrong.',
      lines: [
        '$K_p = K_c(RT)^{\\Delta n}$',
        '$\\Delta n = (2 + 1) - 2 = +1$',
        '$RT = (0.08314)(1000) = 83.14$',
        '$K_p = 280 \\times 83.14 = 2.33 \\times 10^4$',
      ],
      errorLines: [2],
      explanation: '$\\Delta n$ is moles of gaseous **products minus reactants**: $2 - (2 + 1) = -1$. The student subtracted the wrong way. Correctly, $K_p = 280 \\times (83.14)^{-1} = 3.37$. A quick sanity check catches this: the reaction reduces the number of gas moles, so $\\Delta n$ must be negative.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'concept',
      title: 'What the size of K tells you, and what it does not',
      blocks: [
        {
          type: 'p',
          text: 'Since $K$ is products over reactants, its size tells you where the equilibrium lies. Take the simplest case, $\\ce{A <=> B}$ with $K = [\\ce{B}]/[\\ce{A}]$. The fraction that ends up as product is $\\frac{[\\ce{B}]}{[\\ce{A}] + [\\ce{B}]} = \\frac{K}{1 + K}$.',
        },
        {
          type: 'graph',
          x: [-6, 6],
          y: [0, 1.05],
          xStep: 1,
          yStep: 0.25,
          functions: [{ expr: '10^x/(1 + 10^x)', label: 'fraction converted to B', color: 'blue' }],
          points: [{ x: 'k', y: '10^k/(1 + 10^k)', color: 'red' }],
          vlines: [{ x: -3, label: 'K = 10⁻³', color: 'gray' }, { x: 3, label: 'K = 10³', color: 'gray' }],
          sliders: [{ name: 'k', min: -6, max: 6, step: 0.1, value: 0, label: '$\\log_{10} K$' }],
          readouts: [
            { label: '$K =$', expr: '10^k', digits: 3 },
            { label: 'percent B at equilibrium $=$', expr: '100*10^k/(1 + 10^k)', digits: 4 },
          ],
          caption: 'Horizontal axis: $\\log_{10} K$. Each factor of 10 in $K$ matters only in the middle; beyond about $K = 10^3$ the reaction is essentially complete, and below $10^{-3}$ essentially nothing happens.',
        },
        {
          type: 'table',
          headers: ['size of $K$', 'meaning', 'example'],
          rows: [
            ['$K > 10^3$', 'products strongly favored: "goes to completion"', '$\\ce{2H2(g) + O2(g) <=> 2H2O(l)}$, $K \\approx 10^{83}$ at 25 °C'],
            ['$10^{-3} < K < 10^3$', 'significant amounts of both', '$\\ce{H2(g) + I2(g) <=> 2HI(g)}$, $K_c = 54.3$ at 430 °C'],
            ['$K < 10^{-3}$', 'reactants strongly favored: "barely goes"', '$\\ce{N2(g) + O2(g) <=> 2NO(g)}$, $K = 4.5 \\times 10^{-31}$ at 25 °C'],
          ],
          caption: 'The cutoffs $10^{\\pm 3}$ are rules of thumb, and the exact fraction also depends on the stoichiometry and the starting amounts.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'K says where, not how fast',
          text: 'Hydrogen and oxygen have $K \\approx 10^{83}$, yet a balloon of the mixture can sit unchanged for years until a spark supplies the activation energy. $K$ is thermodynamics (the destination); the rate is kinetics (the journey). A huge $K$ with a high activation barrier means "favored but slow".',
        },
        {
          type: 'p',
          text: '$K$ also changes with temperature. For $\\ce{N2 + O2 <=> 2NO}$ it climbs from $4.5 \\times 10^{-31}$ at 25 °C to about $4 \\times 10^{-4}$ at 2000 K. That is why air drawn through the hot combustion chamber of a diesel engine or a jet turbine leaves with nitrogen oxides, and why vehicles carry catalytic converters. The next lesson explains how temperature moves $K$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'mcq',
      prompt: 'Methane burning in oxygen, $\\ce{CH4(g) + 2O2(g) <=> CO2(g) + 2H2O(l)}$, has $K \\approx 10^{143}$ at 25 °C. Yet natural gas can leak into a sealed room and sit there unburned. What explains this?',
      options: [
        { text: 'The equilibrium constant is so large that the reaction is already complete', why: 'If it were complete there would be no methane left. A large $K$ tells you where the reaction would end up, not that it has got there.' },
        { text: 'The reaction is thermodynamically favored but kinetically slow: it needs activation energy, such as a spark, to proceed at a noticeable rate', correct: true, why: 'Right. $K$ fixes the destination; the activation energy controls how fast the system travels there.' },
        { text: 'At 25 °C, $K$ for this reaction is actually less than 1', why: 'The problem gives $K \\approx 10^{143}$, enormously greater than 1. The products are overwhelmingly favored.' },
        { text: 'Equilibrium constants only apply to reactions in solution', why: 'Gas-phase equilibria have $K_c$ and $K_p$ just like solution equilibria.' },
      ],
      explanation: 'The equilibrium constant says that a methane–oxygen mixture at equilibrium would contain essentially no methane. It says nothing about how long that takes. Without a spark or flame, the collisions do not have enough energy to get over the activation barrier, so the rate is practically zero. This is exactly why fuels are useful: they store energy safely until you choose to release it.',
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'truefalse',
      prompt: 'For $\\ce{CaCO3(s) <=> CaO(s) + CO2(g)}$ at equilibrium in a sealed vessel, adding more solid $\\ce{CaCO3}$ at constant temperature increases the equilibrium pressure of $\\ce{CO2}$.',
      answer: false,
      explanation: '$K_p = P_{\\ce{CO2}}$: the solids have activity 1 and do not appear in $K$. At a fixed temperature the equilibrium pressure of $\\ce{CO2}$ is fixed, whether the vessel holds one gram of limestone or one kilogram. Extra solid changes how much $\\ce{CaCO3}$ *could* decompose, not the pressure at which decomposition stops.',
    },
  ],
  takeaways: [
    'Equilibrium is dynamic: the forward and reverse rates are equal (not zero), so concentrations stay constant while both reactions continue.',
    'Law of mass action: for $a\\ce{A} + b\\ce{B} <=> c\\ce{C} + d\\ce{D}$, $K_c = \\dfrac{[\\ce{C}]^c[\\ce{D}]^d}{[\\ce{A}]^a[\\ce{B}]^b}$, using equilibrium concentrations; $K$ depends only on temperature and the way the equation is written.',
    'Pure solids and liquids (and the solvent in dilute solution) have activity 1 and are left out of $K$; that is why $K$ is dimensionless.',
    '$K_p = K_c(RT)^{\\Delta n}$, with $\\Delta n$ = moles of gaseous products minus gaseous reactants, $T$ in kelvin and $R$ matched to the pressure unit.',
    'Reverse an equation: $1/K$. Multiply coefficients by $n$: $K^n$. Add equations: multiply the $K$ values.',
    '$K \\gg 1$ favors products, $K \\ll 1$ favors reactants; $K$ says nothing about how fast equilibrium is reached.',
  ],
  reading: [
    {
      title: 'OpenStax Chemistry 2e — Chapter 13: Fundamental Equilibrium Concepts',
      url: 'https://openstax.org/books/chemistry-2e/pages/13-introduction',
      source: 'openstax',
      note: 'Sections 13.1 and 13.2 cover dynamic equilibrium, equilibrium constants, $K_p$ and heterogeneous equilibria with worked examples.',
    },
    {
      title: 'Wikipedia — Law of mass action',
      url: 'https://en.wikipedia.org/wiki/Law_of_mass_action',
      source: 'wikipedia',
      note: 'The history of Guldberg and Waage\'s discovery and the kinetic argument behind it.',
    },
    {
      title: 'Wikipedia — Thermodynamic activity',
      url: 'https://en.wikipedia.org/wiki/Thermodynamic_activity',
      source: 'wikipedia',
      note: 'What activity really is and why pure solids and liquids have activity 1.',
    },
    {
      title: 'LibreTexts Chemistry',
      url: 'https://chem.libretexts.org/',
      source: 'libretexts',
      note: 'Search "equilibrium constant" or "Kp and Kc" for extra practice problems with full solutions.',
    },
  ],
};
