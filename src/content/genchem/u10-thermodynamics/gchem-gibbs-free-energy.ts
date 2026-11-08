import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'gchem-gibbs-free-energy',
  title: 'Gibbs Free Energy',
  summary: 'One number that decides spontaneity: ΔG = ΔH − TΔS. The four sign cases, crossover temperatures, ΔG° from tables, free energy as maximum useful work, and coupled reactions from ATP to iron smelting.',
  minutes: 22,
  objectives: [
    'Derive $\\Delta G = \\Delta H - T\\Delta S$ from the second law and use the sign of $\\Delta G$ to judge spontaneity',
    'Classify a reaction by the signs of $\\Delta H$ and $\\Delta S$ and find its crossover temperature $T = \\Delta H/\\Delta S$',
    'Calculate $\\Delta G^\\circ_{\\text{rxn}}$ from free energies of formation and from $\\Delta H^\\circ - T\\Delta S^\\circ$, keeping units consistent',
    'Estimate decomposition temperatures and normal boiling points from thermodynamic data',
    'Interpret $-\\Delta G$ as the maximum useful work and explain how coupled reactions drive uphill processes',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'From the universe to the system: G = H − TS',
      blocks: [
        {
          type: 'p',
          text: 'The second law gives a perfect test for spontaneity, $\\Delta S_{\\text{univ}} > 0$, but it is awkward: you have to track the surroundings. At constant temperature and pressure (a beaker on a bench, a cell in your body, a reactor held at 700 K) the surroundings enter only through $\\Delta S_{\\text{surr}} = -\\Delta H/T$. Substituting that in leaves a criterion that involves the **system only**.',
        },
        {
          type: 'derivation',
          title: 'Rewriting the second law',
          steps: [
            { tex: '\\Delta S_{\\text{univ}} = \\Delta S_{\\text{sys}} + \\Delta S_{\\text{surr}}', why: 'The second law\'s bookkeeping: system plus surroundings.' },
            { tex: '\\Delta S_{\\text{univ}} = \\Delta S - \\frac{\\Delta H}{T}', why: 'Constant $T$ and $P$: the surroundings absorb $-\\Delta H$ as heat, so $\\Delta S_{\\text{surr}} = -\\Delta H/T$. From here on, unlabelled quantities refer to the system.' },
            { tex: '-T\\Delta S_{\\text{univ}} = \\Delta H - T\\Delta S', why: 'Multiply both sides by $-T$. Since $T > 0$, this flips the sign: $\\Delta S_{\\text{univ}} > 0$ becomes $-T\\Delta S_{\\text{univ}} < 0$.' },
            { tex: '\\Delta G \\equiv \\Delta H - T\\Delta S = -T\\Delta S_{\\text{univ}}', why: 'Define the Gibbs free energy $G = H - TS$. At constant $T$, $\\Delta G = \\Delta H - T\\Delta S$, and it equals $-T$ times the entropy change of the universe.' },
          ],
          result: 'At constant $T$ and $P$: $\\Delta G < 0$ exactly when $\\Delta S_{\\text{univ}} > 0$. A decrease in the system\'s free energy **is** an increase in the universe\'s entropy, measured in energy units.',
        },
        {
          type: 'table',
          headers: ['Sign of $\\Delta G$', 'Sign of $\\Delta S_{\\text{univ}}$', 'Meaning'],
          rows: [
            ['$\\Delta G < 0$', '$> 0$', 'spontaneous in the forward direction'],
            ['$\\Delta G = 0$', '$= 0$', 'at equilibrium; no net change either way'],
            ['$\\Delta G > 0$', '$< 0$', 'nonspontaneous forward; the **reverse** is spontaneous'],
          ],
        },
        {
          type: 'definition',
          term: 'Gibbs free energy',
          text: 'The [[gchem-gibbs-energy|Gibbs free energy]] $G = H - TS$ is a state function. At constant temperature and pressure, $\\Delta G = \\Delta H - T\\Delta S$, and the sign of $\\Delta G$ decides spontaneity.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the two terms compete',
          text: '$\\Delta H$ is the energy term: releasing heat helps (it raises the surroundings\' entropy). $-T\\Delta S$ is the system\'s own entropy term, weighted by temperature. At low $T$ the enthalpy term usually wins; at high $T$ the entropy term takes over. Gibbs free energy is just the second law with both effects put on the same energy scale.',
        },
        {
          type: 'callout',
          variant: 'history',
          text: 'J. Willard Gibbs, working almost alone at Yale in the 1870s, published the theory of free energy and chemical equilibrium in an obscure Connecticut journal. It took European chemists years to realize that most of what they were trying to discover had already been worked out there.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'numeric',
      prompt: 'For the Haber process, $\\ce{N2(g) + 3H2(g) -> 2NH3(g)}$, $\\Delta H^\\circ = -91.8$ kJ and $\\Delta S^\\circ = -198.1$ J/K. Calculate $\\Delta G^\\circ$ at 298.15 K, in kJ (one decimal place).',
      hint: 'Convert $\\Delta S^\\circ$ to kJ/K first: $-0.1981$ kJ/K. Then $\\Delta G^\\circ = \\Delta H^\\circ - T\\Delta S^\\circ$.',
      label: '$\\Delta G^\\circ =$',
      unit: 'kJ',
      answer: '-91.8 - 298.15*(-0.1981)',
      answerTex: '-32.7\\ \\text{kJ}',
      tolerance: 0.06,
      explanation: '$\\Delta G^\\circ = -91.8\\ \\text{kJ} - (298.15\\ \\text{K})(-0.1981\\ \\text{kJ/K}) = -91.8 + 59.1 = -32.7$ kJ. Negative, so ammonia formation is spontaneous at 25 °C under standard conditions. The favourable enthalpy ($-91.8$) outweighs the unfavourable entropy term ($+59.1$) at this temperature. Note also $\\Delta S_{\\text{univ}} = -\\Delta G/T = +109.8$ J/K, the same answer the previous lesson got from $\\Delta S_{\\text{sys}} + \\Delta S_{\\text{surr}}$.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Four sign combinations and the crossover temperature',
      blocks: [
        {
          type: 'p',
          text: 'Because $\\Delta H$ and $\\Delta S$ change only slowly with temperature, you can treat them as constants over a moderate range. Then $\\Delta G = \\Delta H - T\\Delta S$ is a **straight line in $T$**: intercept $\\Delta H$ at $T = 0$ and slope $-\\Delta S$. Four cases follow from the signs.',
        },
        {
          type: 'table',
          headers: ['$\\Delta H$', '$\\Delta S$', 'Spontaneous when…', 'Example'],
          rows: [
            ['$-$', '$+$', 'at **all** temperatures', '$\\ce{2H2O2(l) -> 2H2O(l) + O2(g)}$'],
            ['$+$', '$-$', 'at **no** temperature (reverse is always spontaneous)', '$\\ce{3O2(g) -> 2O3(g)}$'],
            ['$-$', '$-$', 'at **low** $T$: below $T = \\Delta H/\\Delta S$', 'freezing water; $\\ce{N2 + 3H2 -> 2NH3}$'],
            ['$+$', '$+$', 'at **high** $T$: above $T = \\Delta H/\\Delta S$', 'melting ice; $\\ce{CaCO3 -> CaO + CO2}$'],
          ],
        },
        {
          type: 'p',
          text: 'In the two mixed cases the line crosses zero. Setting $\\Delta G = 0$ gives the **crossover temperature** $T = \\Delta H/\\Delta S$, the temperature at which the reaction switches from one direction to the other. Try it below. The default values are those of limestone decomposition.',
        },
        {
          type: 'graph',
          x: [0, 2000],
          y: [-300, 300],
          xStep: 250,
          yStep: 100,
          functions: [
            { expr: 'h - x*s/1000', label: '$\\Delta G = \\Delta H - T\\Delta S$ (kJ)', color: 'blue' },
          ],
          areas: [{ expr: 'min(0, h - x*s/1000)', expr2: '0', from: 0, to: 2000, color: 'green' }],
          vlines: [{ x: '1000h/s', label: 'T = ΔH/ΔS', color: 'gray' }],
          sliders: [
            { name: 'h', min: -300, max: 300, step: 0.5, value: 178.5, label: '$\\Delta H$ (kJ)' },
            { name: 's', min: -400, max: 400, step: 1, value: 159, label: '$\\Delta S$ (J/K)' },
          ],
          readouts: [
            { label: '$\\Delta G$ at 298.15 K (kJ) $=$', expr: 'h - 298.15*s/1000', digits: 4 },
            { label: '$\\Delta H/\\Delta S$ (K) $=$', expr: '1000h/s', digits: 4 },
          ],
          caption: 'Horizontal axis: temperature in K. The green region is where $\\Delta G < 0$ (spontaneous). The line has slope $-\\Delta S$: a positive $\\Delta S$ tilts it downward so that heating eventually makes the reaction spontaneous. Make $\\Delta H$ and $\\Delta S$ the same sign and the line crosses zero at $T = \\Delta H/\\Delta S$; give them opposite signs and it never crosses for $T > 0$ (the readout is then negative, a temperature that does not exist).',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Same units before you divide or subtract',
          text: '$\\Delta H$ is tabulated in **kJ**, $\\Delta S$ in **J/K**. Convert one of them, or you will be off by a factor of 1000. $T = \\dfrac{178.5\\ \\text{kJ}}{0.1590\\ \\text{kJ/K}} = 1123$ K, not 1.12 K.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'mcq',
      prompt: 'A gas-phase decomposition has $\\Delta H^\\circ = +57.2$ kJ and $\\Delta S^\\circ = +175.8$ J/K. Treating both as constant, when is it spontaneous under standard conditions?',
      options: [
        { text: 'At all temperatures, because $\\Delta S > 0$', why: 'A positive $\\Delta S$ helps, but a positive $\\Delta H$ opposes. Which one wins depends on $T$.' },
        { text: 'Only above about 325 K', correct: true, why: '$T = \\dfrac{57\\,200\\ \\text{J}}{175.8\\ \\text{J/K}} = 325$ K. Above that, $T\\Delta S$ exceeds $\\Delta H$ and $\\Delta G < 0$.' },
        { text: 'Only below about 325 K', why: 'Below the crossover $T\\Delta S$ is smaller than $\\Delta H$, so $\\Delta G > 0$. Low temperatures favour the enthalpy term, which here is unfavourable.' },
        { text: 'Only above about 0.33 K', why: 'This divides kJ by J/K without converting. Always put $\\Delta H$ and $\\Delta S$ in the same energy unit.' },
      ],
      explanation: 'Positive $\\Delta H$ and positive $\\Delta S$ is the "spontaneous at high $T$" case. Crossover: $T = \\Delta H/\\Delta S = 57\\,200/175.8 = 325$ K (about 52 °C). This is the reaction $\\ce{N2O4(g) -> 2NO2(g)}$: colourless $\\ce{N2O4}$ turns brown $\\ce{NO2}$ as you warm it.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Calculating ΔG° for a reaction: two routes',
      blocks: [
        {
          type: 'p',
          text: 'The superscript ° means **standard conditions**: every gas at 1 bar, every solute at 1 M, pure solids and liquids. Like enthalpy, free energy has a table of formation values. The [[gchem-standard-free-energy-of-formation|standard free energy of formation]] $\\Delta G^\\circ_f$ is $\\Delta G^\\circ$ for making one mole of a compound from its elements in their standard states, so it is **zero for elements** in their standard states.',
        },
        {
          type: 'table',
          headers: ['Substance', '$\\Delta H^\\circ_f$ (kJ/mol)', '$\\Delta G^\\circ_f$ (kJ/mol)', '$S^\\circ$ (J/(mol·K))'],
          rows: [
            ['$\\ce{CH4(g)}$', '−74.6', '−50.5', '186.3'],
            ['$\\ce{O2(g)}$', '0', '0', '205.2'],
            ['$\\ce{CO2(g)}$', '−393.5', '−394.4', '213.8'],
            ['$\\ce{H2O(l)}$', '−285.83', '−237.1', '70.0'],
            ['$\\ce{H2O(g)}$', '−241.82', '−228.59', '188.8'],
            ['$\\ce{CaCO3(s)}$', '−1206.9', '−1128.8', '92.9'],
            ['$\\ce{CaO(s)}$', '−634.9', '−603.3', '38.1'],
            ['$\\ce{C2H5OH(l)}$', '−277.6', '−174.8', '160.7'],
            ['$\\ce{C2H5OH(g)}$', '−234.8', '−167.9', '281.6'],
          ],
          caption: 'Standard values at 298.15 K (OpenStax *Chemistry 2e*, Appendix G). Use these for this lesson\'s questions.',
        },
        {
          type: 'theorem',
          name: 'Two ways to get ΔG°',
          tex: '\\begin{aligned} \\text{(a)}\\ \\ \\Delta G^\\circ_{\\text{rxn}} &= \\textstyle\\sum n\\,\\Delta G^\\circ_f(\\text{products}) - \\sum m\\,\\Delta G^\\circ_f(\\text{reactants}) \\\\ \\text{(b)}\\ \\ \\Delta G^\\circ_{\\text{rxn}} &= \\Delta H^\\circ_{\\text{rxn}} - T\\,\\Delta S^\\circ_{\\text{rxn}} \\end{aligned}',
          text: 'Route (a) works only at 298.15 K, the temperature of the table. Route (b) works at any temperature, if you accept that $\\Delta H^\\circ$ and $\\Delta S^\\circ$ are roughly constant.',
        },
        {
          type: 'derivation',
          title: 'Burning methane, $\\ce{CH4(g) + 2O2(g) -> CO2(g) + 2H2O(l)}$, both ways',
          steps: [
            { tex: '\\text{(a)}\\ \\Delta G^\\circ = [-394.4 + 2(-237.1)] - [-50.5 + 0] = -818.1\\ \\text{kJ}', why: 'Products minus reactants, each times its coefficient. $\\Delta G^\\circ_f(\\ce{O2}) = 0$ (an element in its standard state).' },
            { tex: '\\Delta H^\\circ = [-393.5 + 2(-285.83)] - [-74.6] = -890.56\\ \\text{kJ}', why: 'For route (b), first the enthalpy change from formation enthalpies (the Hess\'s law method from the thermochemistry unit).' },
            { tex: '\\Delta S^\\circ = [213.8 + 2(70.0)] - [186.3 + 2(205.2)] = -242.9\\ \\text{J/K}', why: 'Absolute entropies, products minus reactants. Negative: 3 mol of gas become 1.' },
            { tex: '\\text{(b)}\\ \\Delta G^\\circ = -890.56\\ \\text{kJ} - (298.15\\ \\text{K})(-0.2429\\ \\text{kJ/K}) = -818.1\\ \\text{kJ}', why: 'Convert $\\Delta S^\\circ$ to kJ/K, then combine. The entropy term costs $+72.4$ kJ.' },
          ],
          result: 'Both routes give $\\Delta G^\\circ = -818.1$ kJ. They must agree, because $G$, $H$ and $S$ are state functions tied by $G = H - TS$; small disagreements in other examples come only from rounding in the tables.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: '$\\Delta G^\\circ_f$ tables are for 298 K only',
          text: 'To find $\\Delta G^\\circ$ at 1000 K you cannot use the $\\Delta G^\\circ_f$ column. Compute $\\Delta H^\\circ$ and $\\Delta S^\\circ$ from the table and then use $\\Delta H^\\circ - (1000\\ \\text{K})\\Delta S^\\circ$. The approximation is good because $\\Delta H$ and $\\Delta S$ drift slowly with $T$, while the $T\\Delta S$ term changes in direct proportion to $T$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'numeric',
      prompt: 'In making sulfuric acid, sulfur dioxide is oxidized: $\\ce{2SO2(g) + O2(g) -> 2SO3(g)}$. With $\\Delta G^\\circ_f(\\ce{SO2}) = -300.1$ kJ/mol and $\\Delta G^\\circ_f(\\ce{SO3}) = -371.1$ kJ/mol, calculate $\\Delta G^\\circ$ at 298.15 K in kJ (one decimal place).',
      hint: '$\\Delta G^\\circ = 2(-371.1) - [2(-300.1) + 0]$.',
      label: '$\\Delta G^\\circ =$',
      unit: 'kJ',
      answer: '2*(-371.1) - 2*(-300.1)',
      answerTex: '-142.0\\ \\text{kJ}',
      tolerance: 0.06,
      explanation: 'Products: $2(-371.1) = -742.2$ kJ. Reactants: $2(-300.1) + 0 = -600.2$ kJ ($\\ce{O2}$ is an element). $\\Delta G^\\circ = -742.2 - (-600.2) = -142.0$ kJ: spontaneous at 25 °C. Industry still needs a catalyst ($\\ce{V2O5}$) and about 700 K, because the reaction is slow at room temperature.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'error',
      prompt: 'A student calculates $\\Delta G^\\circ$ for $\\ce{CaCO3(s) -> CaO(s) + CO2(g)}$ at 1200 K. Tap the first line that is wrong.',
      lines: [
        '$\\Delta H^\\circ = (-634.9) + (-393.5) - (-1206.9) = +178.5$ kJ',
        '$\\Delta S^\\circ = 38.1 + 213.8 - 92.9 = +159.0$ J/K',
        '$\\Delta G^\\circ = \\Delta H^\\circ - T\\Delta S^\\circ = 178.5 - (1200)(159.0)$',
        '$\\Delta G^\\circ = -190\\,621.5$ kJ, so decomposition is spontaneous at 1200 K',
      ],
      errorLines: [3],
      explanation: 'Line 3 subtracts J (from $T\\Delta S$) from kJ. With $\\Delta S^\\circ = 0.1590$ kJ/K: $\\Delta G^\\circ = 178.5 - (1200)(0.1590) = 178.5 - 190.8 = -12.3$ kJ. The conclusion (spontaneous) happens to survive here, but a value of $-190\\,000$ kJ is absurd, and the same mistake gives wrong signs near the crossover temperature.',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'concept',
      title: 'Worked examples: burning lime and boiling points',
      blocks: [
        {
          type: 'p',
          text: 'Lime ($\\ce{CaO}$) for cement, steel-making and water treatment is made by roasting limestone in a kiln. At 25 °C, $\\Delta G^\\circ = +131.1$ kJ: limestone is perfectly stable, as every marble statue confirms. How hot must the kiln be?',
        },
        {
          type: 'derivation',
          title: 'When does $\\ce{CaCO3(s) -> CaO(s) + CO2(g)}$ become spontaneous?',
          steps: [
            { tex: '\\Delta H^\\circ = +178.5\\ \\text{kJ}, \\quad \\Delta S^\\circ = +159.0\\ \\text{J/K} = +0.1590\\ \\text{kJ/K}', why: 'From the table (you found $\\Delta S^\\circ$ in the entropy lesson). Both positive: the "high temperature" case.' },
            { tex: '\\Delta G^\\circ(298\\ \\text{K}) = 178.5 - 298.15(0.1590) = +131.1\\ \\text{kJ}', why: 'Check: route (a) gives $-603.3 - 394.4 + 1128.8 = +131.1$ kJ too.' },
            { tex: '\\Delta G^\\circ = 0 \\implies T = \\frac{\\Delta H^\\circ}{\\Delta S^\\circ} = \\frac{178.5\\ \\text{kJ}}{0.1590\\ \\text{kJ/K}}', why: 'The crossover temperature: where the entropy term exactly cancels the enthalpy term.' },
            { tex: 'T = 1123\\ \\text{K} \\approx 850\\ ^\\circ\\text{C}', why: 'Kelvin to Celsius: subtract 273.' },
          ],
          result: 'Above about 850 °C the decomposition is spontaneous with $\\ce{CO2}$ at 1 bar. Real lime kilns run at roughly 900–1000 °C. (What "$\\Delta G^\\circ = 0$" means for the $\\ce{CO2}$ pressure is the subject of the next lesson.)',
        },
        {
          type: 'p',
          text: 'The same idea gives boiling points. For vaporization, $\\ce{X(l) <=> X(g)}$ at 1 bar, liquid and vapour are in equilibrium exactly at the normal boiling point, where $\\Delta G^\\circ_{\\text{vap}} = 0$, so $T_b = \\Delta H^\\circ_{\\text{vap}}/\\Delta S^\\circ_{\\text{vap}}$.',
        },
        {
          type: 'derivation',
          title: 'Estimating the boiling point of ethanol',
          steps: [
            { tex: '\\Delta H^\\circ_{\\text{vap}} = -234.8 - (-277.6) = 42.8\\ \\text{kJ/mol}', why: 'Vaporization is "form the gas, unform the liquid": $\\Delta H^\\circ_f(\\text{g}) - \\Delta H^\\circ_f(\\text{l})$.' },
            { tex: '\\Delta S^\\circ_{\\text{vap}} = 281.6 - 160.7 = 120.9\\ \\text{J/(mol·K)}', why: 'Same for entropy. Large and positive, as for every vaporization.' },
            { tex: 'T_b = \\frac{42\\,800\\ \\text{J/mol}}{120.9\\ \\text{J/(mol·K)}} = 354\\ \\text{K} = 81\\ ^\\circ\\text{C}', why: 'Crossover temperature, with $\\Delta H$ converted to J.' },
          ],
          result: 'The measured normal boiling point is 78.4 °C (351.5 K). The 3 K difference comes from treating $\\Delta H_{\\text{vap}}$ and $\\Delta S_{\\text{vap}}$ (measured at 25 °C) as constant up to the boiling point.',
        },
        {
          type: 'deepdive',
          title: 'Trouton\'s rule',
          blocks: [
            {
              type: 'p',
              text: 'For many liquids $\\Delta S_{\\text{vap}}$ at the boiling point is about 85–88 J/(mol·K) (benzene: $30.7\\ \\text{kJ/mol} \\div 353.2\\ \\text{K} = 86.9$). The reason: turning a liquid into a gas at 1 bar multiplies the volume per molecule by a similar factor for most substances. Hydrogen-bonded liquids like water (109 J/(mol·K) at 100 °C) and ethanol sit higher, because their liquids are more ordered to begin with. So if you know a nonpolar liquid\'s boiling point, $\\Delta H_{\\text{vap}} \\approx (88\\ \\text{J/(mol·K)})\\,T_b$ is a decent first guess.',
            },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'numeric',
      prompt: 'Estimate the normal boiling point of water, in kelvin, from the table: $\\Delta H^\\circ_f$ of $\\ce{H2O(l)}$ and $\\ce{H2O(g)}$ are $-285.83$ and $-241.82$ kJ/mol; $S^\\circ$ are 70.0 and 188.8 J/(mol·K). Give the nearest whole kelvin.',
      hint: '$T_b = \\Delta H^\\circ_{\\text{vap}}/\\Delta S^\\circ_{\\text{vap}}$. Find both, and convert kJ to J.',
      label: '$T_b \\approx$',
      unit: 'K',
      answer: '(285.83 - 241.82)*1000/(188.8 - 70.0)',
      answerTex: '370\\ \\text{K}',
      tolerance: 1,
      explanation: '$\\Delta H^\\circ_{\\text{vap}} = -241.82 - (-285.83) = 44.01$ kJ/mol; $\\Delta S^\\circ_{\\text{vap}} = 188.8 - 70.0 = 118.8$ J/(mol·K). $T_b = 44\\,010 / 118.8 = 370$ K (97 °C), within 3 K of the true 373 K. The small error again comes from using 25 °C values of $\\Delta H$ and $\\Delta S$ at 100 °C.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'order',
      prompt: 'Order the steps to find the temperature above which an endothermic reaction with $\\Delta S^\\circ > 0$ becomes spontaneous.',
      lines: [
        'Calculate $\\Delta H^\\circ_{\\text{rxn}}$ from $\\Delta H^\\circ_f$ values (products minus reactants)',
        'Calculate $\\Delta S^\\circ_{\\text{rxn}}$ from $S^\\circ$ values (products minus reactants)',
        'Convert $\\Delta S^\\circ$ from J/K to kJ/K (or $\\Delta H^\\circ$ to J)',
        'Set $\\Delta G^\\circ = \\Delta H^\\circ - T\\Delta S^\\circ = 0$ and solve: $T = \\Delta H^\\circ/\\Delta S^\\circ$',
        'Conclude: spontaneous for all $T$ above this value (where $T\\Delta S^\\circ > \\Delta H^\\circ$)',
      ],
      distractors: ['Look up $\\Delta G^\\circ_f$ values and use them at the new temperature'],
      explanation: 'Get both $\\Delta H^\\circ$ and $\\Delta S^\\circ$ from the tables, put them in consistent units, and solve $\\Delta G^\\circ = 0$ for $T$. Above that temperature $T\\Delta S^\\circ$ outgrows $\\Delta H^\\circ$, so $\\Delta G^\\circ < 0$. The distractor is the classic mistake: $\\Delta G^\\circ_f$ values are for 298 K only.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'Free energy is the maximum useful work',
      blocks: [
        {
          type: 'p',
          text: 'Why "free" energy? Because $-\\Delta G$ is the part of a reaction\'s energy that is **free to do useful work**: electrical work in a battery, mechanical work in a muscle, chemical work building a molecule. (Here "useful" means any work other than the push-back against the atmosphere that comes with volume changes.)',
        },
        {
          type: 'theorem',
          name: 'Maximum useful work',
          tex: 'w_{\\max} = -\\Delta G \\quad (\\text{constant } T, P)',
          text: 'This maximum is reached only in the limit of a perfectly reversible (infinitely slow) process. Real devices deliver less, and the rest becomes heat.',
        },
        {
          type: 'p',
          text: 'Look at a hydrogen fuel cell, $\\ce{H2(g) + 1/2O2(g) -> H2O(l)}$. It releases $\\Delta H^\\circ = -285.8$ kJ per mole of water, but $\\Delta G^\\circ = -237.1$ kJ. The difference, $T\\Delta S^\\circ = -48.7$ kJ, is entropy "tax": 1.5 mol of gas become liquid, so the system\'s entropy falls, and to satisfy the second law at least 48.7 kJ **must** leave as heat to raise the surroundings\' entropy. At best $237.1/285.8 = 83\\%$ of the enthalpy can become electricity.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Fuel cells versus engines',
          text: 'A generator or vehicle engine burns fuel to make heat first, and a heat engine can convert only part of heat to work (the Carnot limit, typically under 50% in practice). A fuel cell converts $\\Delta G$ to electricity directly, which is why fuel cells interest the military for silent power in the field. In the electrochemistry unit you will see $\\Delta G$ turn into a voltage: $\\Delta G = -nFE$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why you cannot get all of ΔH as work',
          text: 'Work is organized energy transfer: it does not change the entropy of the surroundings. Heat does. If a reaction lowers the system\'s entropy, some energy must be released as **heat**, enough to make $\\Delta S_{\\text{univ}} \\ge 0$; that portion is unavailable for work. (If $\\Delta S > 0$, the reverse happens: $-\\Delta G$ exceeds $-\\Delta H$ and the device can absorb heat from its surroundings and turn it into work.)',
        },
      ],
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'numeric',
      prompt: 'A methane fuel cell runs the combustion reaction $\\ce{CH4(g) + 2O2(g) -> CO2(g) + 2H2O(l)}$ electrochemically. Using $\\Delta G^\\circ = -818.1$ kJ and $\\Delta H^\\circ = -890.6$ kJ, what is the maximum percentage of the reaction enthalpy that can be converted to electrical work at 298 K? (one decimal place)',
      hint: 'Maximum efficiency $= \\Delta G^\\circ / \\Delta H^\\circ \\times 100\\%$.',
      label: 'maximum efficiency $=$',
      unit: '%',
      answer: '818.1/890.6*100',
      answerTex: '91.9\\%',
      tolerance: 0.05,
      explanation: '$\\frac{-818.1}{-890.6} \\times 100\\% = 91.9\\%$. The remaining $72.5$ kJ ($= -T\\Delta S^\\circ$, since $\\Delta S^\\circ = -242.9$ J/K) must be released as heat to satisfy the second law. Compare a hydrogen fuel cell at 83%: its entropy loss per unit of enthalpy is larger.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'concept',
      title: 'Coupled reactions: paying for uphill steps',
      blocks: [
        {
          type: 'p',
          text: 'Free energies of reactions that add up also add up (state functions again). So a reaction with $\\Delta G > 0$ can be made to happen by **coupling** it to one with a larger negative $\\Delta G$, as long as the two really are linked chemically, usually through a shared intermediate. These are [[gchem-coupled-reactions|coupled reactions]].',
        },
        {
          type: 'heading',
          text: 'In the cell: ATP',
        },
        {
          type: 'p',
          text: 'Making the amino acid glutamine from glutamate and ammonia is uphill: $\\Delta G^{\\circ\\prime} = +14.2$ kJ/mol (the prime marks the biochemists\' standard state at pH 7). The cell couples it to the hydrolysis of ATP, $\\Delta G^{\\circ\\prime} = -30.5$ kJ/mol. The enzyme first transfers a phosphate from ATP to glutamate, then ammonia displaces the phosphate. The shared intermediate forces the two reactions to happen together.',
        },
        {
          type: 'figure',
          svg: `<svg viewBox="0 0 480 270" xmlns="http://www.w3.org/2000/svg"><line x1="40" y1="250" x2="40" y2="30" stroke="currentColor" stroke-width="1.5"/><polyline points="34,40 40,28 46,40" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="22" y="140" text-anchor="middle" font-size="13" transform="rotate(-90 22 140)">free energy G</text><line x1="70" y1="125.0" x2="180" y2="125.0" stroke="currentColor" stroke-width="3"/><text x="125.0" y="115.0" text-anchor="middle" font-size="13">Glu + NH₃ + ATP</text><line x1="200" y1="54.0" x2="310" y2="54.0" stroke="currentColor" stroke-width="3"/><text x="255.0" y="44.0" text-anchor="middle" font-size="13">Gln + H₂O + ATP</text><line x1="330" y1="206.5" x2="440" y2="206.5" stroke="currentColor" stroke-width="3"/><text x="385.0" y="228.5" text-anchor="middle" font-size="13">Gln + ADP + Pᵢ</text><line x1="180.0" y1="125.0" x2="200.0" y2="56.0" stroke="currentColor" class="s-red" stroke-width="2.2"/><polyline points="201.2,65.9 200.0,56.0 193.7,63.8" fill="none" stroke="currentColor" class="s-red" stroke-width="2.2"/><text x="198" y="100" font-size="12" class="t-red">+14.2</text><line x1="310.0" y1="54.0" x2="330.0" y2="204.5" stroke="currentColor" class="s-green" stroke-width="2.2"/><polyline points="324.9,195.9 330.0,204.5 332.6,194.9" fill="none" stroke="currentColor" class="s-green" stroke-width="2.2"/><text x="326" y="124.2" font-size="12" class="t-green">−30.5 (ATP → ADP + Pᵢ)</text><line x1="125.0" y1="129.0" x2="330.0" y2="202.5" stroke="currentColor" class="s-blue" stroke-width="2.2" stroke-dasharray="5 4"/><polyline points="320.0,203.1 330.0,202.5 322.6,195.7" fill="none" stroke="currentColor" class="s-blue" stroke-width="2.2"/><text x="210" y="187.0" text-anchor="middle" font-size="12" class="t-blue">net: −16.3 kJ/mol</text><text x="260" y="262" text-anchor="middle" font-size="12" class="t-gray">ΔG°′ values in kJ/mol (biochemical standard state, pH 7)</text></svg>`,
          alt: 'Free-energy level diagram. Starting level labelled Glu plus NH3 plus ATP. A red arrow rises by 14.2 to a level labelled Gln plus H2O plus ATP. A green arrow falls by 30.5, labelled ATP to ADP plus Pi, to a level labelled Gln plus ADP plus Pi. A dashed blue arrow connects the start directly to the end, labelled net minus 16.3 kJ per mol.',
          caption: 'The uphill step (red) is paid for by the downhill step (green). The overall reaction (blue) has $\\Delta G^{\\circ\\prime} = +14.2 - 30.5 = -16.3$ kJ/mol, so it is spontaneous.',
          maxWidth: 480,
        },
        {
          type: 'heading',
          text: 'In the furnace: smelting iron',
        },
        {
          type: 'derivation',
          title: 'Iron ore plus carbon',
          steps: [
            { tex: '\\ce{2Fe2O3(s) -> 4Fe(s) + 3O2(g)} \\quad \\Delta G^\\circ = +1484.4\\ \\text{kJ}', why: 'Minus twice $\\Delta G^\\circ_f(\\ce{Fe2O3}) = -742.2$ kJ/mol. Hugely uphill; from $\\Delta H^\\circ = +1648.4$ kJ and $\\Delta S^\\circ = +550.0$ J/K it would need about 3000 K on its own.' },
            { tex: '\\ce{3C(s) + 3O2(g) -> 3CO2(g)} \\quad \\Delta G^\\circ = -1183.2\\ \\text{kJ}', why: 'Three times $\\Delta G^\\circ_f(\\ce{CO2}) = -394.4$ kJ/mol. Carbon grabs the oxygen the ore releases.' },
            { tex: '\\ce{2Fe2O3(s) + 3C(s) -> 4Fe(s) + 3CO2(g)} \\quad \\Delta G^\\circ = +301.2\\ \\text{kJ}', why: 'Add the reactions and their $\\Delta G^\\circ$ values; $\\ce{3O2}$ cancels. Still positive at 298 K.' },
            { tex: '\\Delta H^\\circ = +467.9\\ \\text{kJ}, \\ \\Delta S^\\circ = +558.6\\ \\text{J/K} \\implies T = \\frac{467.9}{0.5586} = 838\\ \\text{K}', why: 'From the tables ($S^\\circ$: $\\ce{Fe}$ 27.3, $\\ce{Fe2O3}$ 87.4, $\\ce{C}$ 5.740, $\\ce{CO2}$ 213.8). Producing 3 mol of gas gives a big positive $\\Delta S^\\circ$, so the coupled reaction turns spontaneous above about 840 K.' },
          ],
          result: 'Coupling with carbon cuts the required temperature from about 3000 K to about 840 K. Blast furnaces run far hotter than that, and most of the reduction there is done by carbon monoxide, $\\ce{Fe2O3 + 3CO -> 2Fe + 3CO2}$, but the thermodynamic idea is the same: carbon\'s appetite for oxygen pays for pulling oxygen off the iron.',
        },
      ],
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'numeric',
      prompt: 'Cells phosphorylate glucose before using it: glucose + $\\ce{HPO4^2-}$ → glucose-6-phosphate + $\\ce{H2O}$, $\\Delta G^{\\circ\\prime} = +13.8$ kJ/mol. Coupled with ATP hydrolysis ($\\Delta G^{\\circ\\prime} = -30.5$ kJ/mol), what is $\\Delta G^{\\circ\\prime}$ of the overall reaction glucose + ATP → glucose-6-phosphate + ADP, in kJ/mol?',
      hint: 'Add the two reactions: the phosphate and water cancel, and so do the free energies\' bookkeeping.',
      label: '$\\Delta G^{\\circ\\prime} =$',
      unit: 'kJ/mol',
      answer: '13.8 - 30.5',
      answerTex: '-16.7\\ \\text{kJ/mol}',
      tolerance: 0.06,
      explanation: 'Adding the reactions cancels $\\ce{HPO4^2-}$ and $\\ce{H2O}$ and gives glucose + ATP → glucose-6-phosphate + ADP. Free energies add: $+13.8 + (-30.5) = -16.7$ kJ/mol. The overall reaction is spontaneous; the enzyme hexokinase makes sure the two halves happen together, by transferring the phosphate directly from ATP to glucose.',
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'truefalse',
      prompt: 'A reaction with a positive $\\Delta G^\\circ$ at 25 °C can never be made to produce products.',
      answer: false,
      explanation: 'There are three ways around a positive $\\Delta G^\\circ$. **Change the temperature**: limestone decomposes above 850 °C. **Couple it** to a strongly downhill reaction: ATP drives glutamine synthesis, carbon drives iron smelting. **Change the conditions away from standard**: $\\Delta G^\\circ$ describes 1 bar and 1 M, and in the next lesson you will see that removing products or adding reactants changes $\\Delta G$ itself. Every reaction also forms *some* products at equilibrium.',
    },
    // ------------------------------------------------------------------ 16
    {
      kind: 'fill',
      prompt: 'Complete the summary of the four sign cases.',
      template: 'If $\\Delta H < 0$ and $\\Delta S > 0$, the reaction is spontaneous at ___ temperatures. If $\\Delta H < 0$ and $\\Delta S < 0$, it is spontaneous at ___ temperatures. If $\\Delta H > 0$ and $\\Delta S > 0$, it is spontaneous at ___ temperatures. If $\\Delta H > 0$ and $\\Delta S < 0$, it is spontaneous at ___ temperature.',
      blanks: [{ answers: ['all'] }, { answers: ['low'] }, { answers: ['high'] }, { answers: ['no'] }],
      wordBank: ['all', 'low', 'high', 'no', 'room'],
      explanation: 'Read it off $\\Delta G = \\Delta H - T\\Delta S$. Both terms negative ($\\Delta H < 0$, $-T\\Delta S < 0$): always spontaneous. Both positive: never. Mixed signs: the $T\\Delta S$ term grows with temperature, so whichever sign $\\Delta S$ favours wins at high $T$. If $\\Delta S < 0$ that means only low $T$ works; if $\\Delta S > 0$, only high $T$. The switch happens at $T = \\Delta H/\\Delta S$.',
    },
  ],
  takeaways: [
    'At constant $T$ and $P$, $\\Delta G = \\Delta H - T\\Delta S = -T\\Delta S_{\\text{univ}}$: $\\Delta G < 0$ spontaneous, $= 0$ equilibrium, $> 0$ nonspontaneous (reverse spontaneous).',
    'Signs: $(-,+)$ always spontaneous; $(+,-)$ never; $(-,-)$ at low $T$; $(+,+)$ at high $T$. The crossover is $T = \\Delta H/\\Delta S$.',
    '$\\Delta G^\\circ_{\\text{rxn}}$ comes from $\\Delta G^\\circ_f$ values (298 K only; zero for elements) or from $\\Delta H^\\circ - T\\Delta S^\\circ$ at any $T$. Convert J ↔ kJ before combining.',
    'Setting $\\Delta G^\\circ = 0$ estimates decomposition temperatures ($\\ce{CaCO3}$: about 850 °C) and normal boiling points ($T_b = \\Delta H_{\\text{vap}}/\\Delta S_{\\text{vap}}$).',
    '$-\\Delta G$ is the maximum useful (non-expansion) work; when $\\Delta S < 0$, at least $-T\\Delta S$ must be released as heat.',
    'Coupled reactions add their $\\Delta G$ values: ATP hydrolysis drives biosynthesis, and carbon\'s oxidation drives the reduction of iron ore.',
  ],
  reading: [
    {
      title: 'OpenStax Chemistry 2e — Chapter 16: Thermodynamics',
      url: 'https://openstax.org/books/chemistry-2e/pages/16-introduction',
      source: 'openstax',
      note: 'Section 16.4 on free energy covers $\\Delta G = \\Delta H - T\\Delta S$, the four sign cases and calculations from tables.',
    },
    {
      title: 'Wikipedia — Gibbs free energy',
      url: 'https://en.wikipedia.org/wiki/Gibbs_free_energy',
      source: 'wikipedia',
      note: 'The definition, its link to useful work, and the history of Gibbs\'s work.',
    },
    {
      title: 'Wikipedia — Ellingham diagram',
      url: 'https://en.wikipedia.org/wiki/Ellingham_diagram',
      source: 'wikipedia',
      note: 'Metallurgists plot $\\Delta G^\\circ$ against $T$ for metal oxides to see which reducing agent (carbon, CO, hydrogen) works at which temperature: the iron-smelting example, generalized.',
    },
    {
      title: 'Khan Academy — Chemistry',
      url: 'https://www.khanacademy.org/science/chemistry',
      source: 'khan',
      note: 'The thermodynamics videos work several Gibbs free energy and spontaneity examples step by step.',
    },
  ],
};
