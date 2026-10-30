import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'gchem-entropy',
  title: 'Entropy and the Second Law',
  summary: 'Why ice melts and gases spread even though no energy is released: microstates, Boltzmann\'s S = k ln W, the second law, ΔS of the surroundings, and standard molar entropies.',
  minutes: 22,
  objectives: [
    'Explain why the sign of ΔH alone cannot predict whether a process is spontaneous',
    'Count microstates for a small system and use Boltzmann\'s equation $S = k \\ln W$',
    'Predict the sign of ΔS from phase changes, moles of gas, temperature and molecular complexity',
    'Apply the second law: compute $\\Delta S_{\\text{surr}} = -\\Delta H_{\\text{sys}}/T$ and decide spontaneity from $\\Delta S_{\\text{univ}}$',
    'State the third law and calculate $\\Delta S^\\circ_{\\text{rxn}}$ from standard molar entropies',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Spontaneous is not the same as exothermic',
      blocks: [
        {
          type: 'p',
          text: 'In the thermochemistry unit you learned to calculate $\\Delta H$ for almost any reaction. Most reactions that "just go" release heat: fuel burns, iron rusts, a flameless ration heater gets hot. It is tempting to conclude that a reaction runs if, and only if, it goes downhill in enthalpy. Nineteenth-century chemists believed exactly that. It is wrong.',
        },
        {
          type: 'definition',
          term: 'Spontaneous process',
          text: 'A [[gchem-spontaneous-process|spontaneous process]] is one that, once started, continues on its own without a continuous input of energy (work) from outside. Its reverse is **nonspontaneous**: it happens only if you keep driving it.',
        },
        {
          type: 'list',
          items: [
            '**Ice melts** on a 25 °C day, although melting *absorbs* heat: $\\ce{H2O(s) -> H2O(l)}$, $\\Delta H = +6.01$ kJ/mol.',
            '**A gas expands into a vacuum.** For an ideal gas in an insulated container no heat flows and no work is done, so $\\Delta H = 0$. There is no energy reason at all, yet the gas never stays bunched up.',
            '**Ammonium nitrate dissolves** in water and the water gets cold: $\\ce{NH4NO3(s) -> NH4+(aq) + NO3^-(aq)}$, $\\Delta H = +25.7$ kJ/mol. This endothermic dissolving is what powers the instant cold packs in a first-aid kit.',
          ],
        },
        {
          type: 'figure',
          svg: `<svg viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg"><text x="115" y="22" text-anchor="middle" font-size="14">valve closed</text><text x="385" y="22" text-anchor="middle" font-size="14">valve opened</text><rect x="10" y="40" width="90" height="90" rx="12" fill="none" stroke="currentColor" stroke-width="2"/><rect x="130" y="40" width="90" height="90" rx="12" fill="none" stroke="currentColor" stroke-width="2"/><line x1="100" y1="80" x2="130" y2="80" stroke="currentColor" stroke-width="2"/><line x1="100" y1="90" x2="130" y2="90" stroke="currentColor" stroke-width="2"/><circle cx="115" cy="85" r="7" fill="none" stroke="currentColor" class="s-red" stroke-width="2"/><line x1="115" y1="80" x2="115" y2="90" stroke="currentColor" class="s-red" stroke-width="2"/><circle cx="42.7" cy="60.6" r="5" class="f-blue" fill="currentColor"/><circle cx="65.6" cy="55.1" r="5" class="f-blue" fill="currentColor"/><circle cx="57.5" cy="75.6" r="5" class="f-blue" fill="currentColor"/><circle cx="24.1" cy="85.5" r="5" class="f-blue" fill="currentColor"/><circle cx="24.9" cy="56.3" r="5" class="f-blue" fill="currentColor"/><circle cx="49.7" cy="107.9" r="5" class="f-blue" fill="currentColor"/><circle cx="63.9" cy="116.3" r="5" class="f-blue" fill="currentColor"/><circle cx="88.3" cy="53.3" r="5" class="f-blue" fill="currentColor"/><circle cx="80.1" cy="70.3" r="5" class="f-blue" fill="currentColor"/><circle cx="42.0" cy="91.0" r="5" class="f-blue" fill="currentColor"/><text x="175" y="150" text-anchor="middle" font-size="13" class="t-gray">vacuum</text><line x1="232" y1="85" x2="262" y2="85" stroke="currentColor" stroke-width="2.4"/><polyline points="254,78 264,85 254,92" fill="none" stroke="currentColor" stroke-width="2.4"/><rect x="280" y="40" width="90" height="90" rx="12" fill="none" stroke="currentColor" stroke-width="2"/><rect x="400" y="40" width="90" height="90" rx="12" fill="none" stroke="currentColor" stroke-width="2"/><line x1="370" y1="80" x2="400" y2="80" stroke="currentColor" stroke-width="2"/><line x1="370" y1="90" x2="400" y2="90" stroke="currentColor" stroke-width="2"/><circle cx="385" cy="85" r="7" fill="none" stroke="currentColor" class="s-green" stroke-width="2"/><line x1="380" y1="85" x2="390" y2="85" stroke="currentColor" class="s-green" stroke-width="2"/><circle cx="321.7" cy="71.0" r="5" class="f-blue" fill="currentColor"/><circle cx="345.6" cy="98.9" r="5" class="f-blue" fill="currentColor"/><circle cx="307.1" cy="90.2" r="5" class="f-blue" fill="currentColor"/><circle cx="326.8" cy="111.3" r="5" class="f-blue" fill="currentColor"/><circle cx="341.1" cy="70.2" r="5" class="f-blue" fill="currentColor"/><circle cx="478.6" cy="58.3" r="5" class="f-blue" fill="currentColor"/><circle cx="439.3" cy="103.0" r="5" class="f-blue" fill="currentColor"/><circle cx="420.6" cy="84.2" r="5" class="f-blue" fill="currentColor"/><circle cx="463.5" cy="90.1" r="5" class="f-blue" fill="currentColor"/><circle cx="471.3" cy="72.0" r="5" class="f-blue" fill="currentColor"/><text x="250" y="180" text-anchor="middle" font-size="13">Ideal gas, insulated: q = 0, w = 0, ΔH = 0 … yet it always spreads out</text></svg>`,
          alt: 'Left: two flasks joined by a tube with a closed valve; ten gas particles are in the left flask and the right flask is empty (vacuum). Right: the valve is open and the particles are spread five and five over both flasks.',
          caption: 'Free expansion of an ideal gas: no heat, no work, no change in enthalpy, and yet it happens every time and never reverses by itself. Something other than energy is deciding.',
          maxWidth: 500,
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Spontaneous does not mean fast',
          text: 'Diamond turning into graphite is spontaneous at room temperature, but it is so slow that diamonds last for billions of years. A mixture of hydrogen and oxygen sits unchanged until a spark sets it off. Thermodynamics tells you **whether** a process can go on its own; kinetics (the [[gchem-activation-energy|activation energy]], from the kinetics unit) tells you **how fast**.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'What the three examples share',
          text: 'In each case matter or energy ends up **more spread out**: water molecules escape their fixed lattice sites, gas molecules gain twice the volume, ions scatter through the solution. The quantity that measures this spreading is **entropy**, and the rest of this lesson makes it precise enough to calculate.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'truefalse',
      prompt: 'An endothermic process ($\\Delta H > 0$) cannot be spontaneous.',
      answer: false,
      explanation: 'Ice melting above 0 °C, ammonium nitrate dissolving in a cold pack and water evaporating from your skin are all endothermic and all spontaneous. A negative $\\Delta H$ helps, but it is neither necessary nor sufficient. What decides spontaneity is the total entropy change, which this lesson builds up step by step.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Counting microstates',
      blocks: [
        {
          type: 'p',
          text: 'To see why gases spread, count. A **macrostate** is what you can measure ("3 molecules on the left, 1 on the right"). A [[gchem-microstate|microstate]] is one specific arrangement that produces it ("molecules A, B, C left, D right"). Put 4 labelled molecules in a box with two halves. Each molecule is independently left or right, so there are $2^4 = 16$ microstates in total.',
        },
        {
          type: 'table',
          headers: ['Molecules on the left', 'Microstates $W$', 'Probability'],
          rows: [
            ['4', '1', '1/16'],
            ['3', '4', '4/16'],
            ['2', '6', '6/16'],
            ['1', '4', '4/16'],
            ['0', '1', '1/16'],
          ],
          caption: 'Each count is the [[binomial-coefficient|binomial coefficient]] $\\binom{4}{n}$: the number of ways to choose which $n$ molecules are on the left.',
        },
        {
          type: 'p',
          text: 'Every individual microstate is equally likely, so the macrostate with the **most microstates** is the one you most likely see. With 4 molecules, "all on the left" still turns up 1 time in 16. Now watch what happens as the number of molecules grows.',
        },
        {
          type: 'graph',
          x: [0, 1],
          y: [0, 1.15],
          xStep: 0.1,
          yStep: 0.2,
          functions: [
            { expr: 'nCr(n, floor(n*x))/nCr(n, floor(n/2))', label: '$W / W_{\\max}$', color: 'blue' },
          ],
          sliders: [{ name: 'n', min: 4, max: 170, step: 2, value: 10, label: 'number of molecules $N$' }],
          readouts: [
            { label: 'total microstates $2^N =$', expr: '2^n', digits: 4 },
            { label: 'P(all on the left) $= 2^{-N} =$', expr: '2^(-n)', digits: 3 },
          ],
          caption: 'Horizontal axis: fraction of molecules in the left half. Vertical: number of microstates for that split, relative to the 50/50 split. As $N$ grows the peak becomes a narrow spike: almost every microstate is "about half and half". A mole has $N \\approx 6 \\times 10^{23}$, and the chance of all of it sitting on one side is $2^{-6 \\times 10^{23}}$, zero for every practical purpose.',
        },
        {
          type: 'definition',
          term: 'Entropy (Boltzmann)',
          text: '[[gchem-entropy|Entropy]] $S$ measures the number of microstates $W$ consistent with a macrostate: $S = k \\ln W$, where $k = 1.380649 \\times 10^{-23}$ J/K is **Boltzmann\'s constant** ($k = R/N_A$, the gas constant per molecule). Units: J/K.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why a logarithm?',
          text: 'Put two independent systems side by side. Every microstate of the first can pair with every microstate of the second, so the combined count **multiplies**: $W = W_1 W_2$. But entropy, like mass or energy, should **add**: $S = S_1 + S_2$. The [[natural-logarithm|natural logarithm]] is the function that turns products into sums, $\\ln(W_1 W_2) = \\ln W_1 + \\ln W_2$. That is the whole reason Boltzmann\'s formula has a log in it.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'numeric',
      prompt: 'Six labelled gas molecules are in a box divided into two equal halves. How many microstates have exactly 3 molecules in each half?',
      hint: 'Count the ways to choose which 3 of the 6 molecules are on the left: $\\binom{6}{3} = \\frac{6!}{3!\\,3!}$.',
      label: '$W =$',
      answer: '20',
      explanation: 'Choosing the 3 molecules that go left fixes the arrangement, so $W = \\binom{6}{3} = \\frac{720}{6 \\cdot 6} = 20$. Out of $2^6 = 64$ microstates, 20 (31%) are the even split, while "all six on the left" is just 1 (1.6%). The even split already dominates with only six molecules.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'From counting to a number: ΔS for an expanding gas',
      blocks: [
        {
          type: 'p',
          text: 'Boltzmann\'s formula turns the flask picture into a calculation. Imagine the volume available to each molecule split into tiny cells. Doubling the volume doubles the number of cells each molecule can occupy, independently of all the others.',
        },
        {
          type: 'derivation',
          title: '1 mol of ideal gas doubles its volume at constant temperature',
          steps: [
            { tex: '\\frac{W_2}{W_1} = 2 \\times 2 \\times \\cdots \\times 2 = 2^{N_A}', why: 'Each of the $N_A$ molecules has twice as many positions available, and the choices are independent, so the counts multiply. The molecules\' speeds are unchanged because $T$ is constant.' },
            { tex: '\\Delta S = k \\ln W_2 - k \\ln W_1 = k \\ln \\frac{W_2}{W_1}', why: 'Entropy change from Boltzmann\'s formula; a difference of logs is the log of the ratio. The size of the cells cancels in the ratio.' },
            { tex: '= k \\ln 2^{N_A} = N_A\\, k \\ln 2', why: 'Log of a power: $\\ln a^m = m \\ln a$.' },
            { tex: '= R \\ln 2 = (8.314\\ \\text{J/K})(0.6931) = 5.76\\ \\text{J/K}', why: '$N_A k = R = 8.314$ J/(mol·K), and we have 1 mol.' },
          ],
          result: 'The free expansion has $\\Delta S = +5.76$ J/K. In general, for $n$ mol of ideal gas at constant $T$: $\\Delta S = nR \\ln \\dfrac{V_2}{V_1}$.',
        },
        {
          type: 'p',
          text: 'Entropy is not only about *where* molecules are. Molecules also have quantized energy levels for moving, rotating and vibrating. Spreading the same total energy over **more accessible levels** also raises $W$. That happens when you heat a substance (more levels become reachable), when molecules have more atoms (more ways to rotate and vibrate), and when molecules are heavier (their translational levels are packed closer together). A good short definition: entropy measures **how widely energy is dispersed** among the available microstates.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: '"Disorder" is only a nickname',
          text: 'Entropy is often called disorder. That works for melting and expansion, but it can mislead: what counts is the number of microstates, not how messy a picture looks. Use the microstate (or energy dispersal) picture whenever the word "disorder" gives an ambiguous answer.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Run it in a particle simulation',
          text: 'Spawn a few hundred particles in the left half of a box in any 2D physics or game engine and let them bounce. They spread out and stay spread out. The laws of motion are time-reversible, so flipping every velocity would send them all back, but among all the microstates the simulation can wander into, the "all left" ones are a vanishing fraction. That is the second law in miniature: not a force, just overwhelming odds.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'numeric',
      prompt: '1.00 mol of an ideal gas expands at constant temperature from 10.0 L to 30.0 L. Calculate $\\Delta S$ of the gas in J/K (three significant figures). Use $R = 8.314$ J/(mol·K).',
      hint: '$\\Delta S = nR \\ln \\dfrac{V_2}{V_1}$; here the volume triples.',
      label: '$\\Delta S =$',
      unit: 'J/K',
      answer: '8.314*ln(3)',
      answerTex: '+9.13\\ \\text{J/K}',
      tolerance: 0.006,
      explanation: '$\\Delta S = (1.00)(8.314)\\ln\\frac{30.0}{10.0} = 8.314 \\times 1.0986 = +9.13$ J/K. Each molecule now has 3 times as many positions, so $W$ grows by a factor $3^{N_A}$ and $\\Delta S = R \\ln 3$. Positive, as expected for an expansion.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'Predicting the sign of ΔS',
      blocks: [
        {
          type: 'p',
          text: 'You can usually predict the sign of $\\Delta S$ for a process without any numbers. Each rule below is the microstate count in disguise.',
        },
        {
          type: 'table',
          headers: ['Factor', 'Entropy is higher for…', 'Example ($S^\\circ$ in J/(mol·K))'],
          rows: [
            ['Phase', 'gas ≫ liquid > solid', '$\\ce{H2O(l)}$ 70.0, $\\ce{H2O(g)}$ 188.8'],
            ['Moles of gas', 'the side of a reaction with more mol of gas', '$\\ce{N2 + 3H2 -> 2NH3}$: 4 mol gas → 2 mol, $\\Delta S < 0$'],
            ['Temperature', 'higher $T$ (more energy levels reachable)', 'heating any substance: $\\Delta S > 0$'],
            ['Molar mass', 'heavier particles (closer-spaced levels)', 'He 126.2, Ne 146.3, Ar 154.8'],
            ['Complexity', 'more atoms per molecule (more ways to vibrate and rotate)', '$\\ce{CO}$ 197.7, $\\ce{CO2}$ 213.8'],
            ['Dissolving', 'usually the solution (for solids and liquids)', '$\\ce{NH4NO3(s)}$ dissolving: $\\Delta S = +108.7$ J/(mol·K)'],
          ],
          caption: 'Standard values at 298.15 K (OpenStax *Chemistry 2e*, Appendix G).',
        },
        {
          type: 'p',
          text: 'Two cautions about dissolving. A **gas** dissolving in a liquid loses entropy (it gives up its huge gas-phase volume), which is why warm soda goes flat and part of why divers must ascend slowly: nitrogen forced into the blood at depth comes back out as gas once the pressure drops. And small, highly charged ions such as $\\ce{Al^3+}$ or $\\ce{Mg^2+}$ hold a tight shell of oriented water molecules, which can make $\\Delta S$ of dissolving negative.',
        },
        {
          type: 'callout',
          variant: 'exam',
          title: 'Count the moles of gas first',
          text: 'For a reaction, the change in moles of gas, $\\Delta n_{\\text{gas}}$, almost always decides the sign of $\\Delta S$, because gases have so much more entropy than condensed phases. If $\\Delta n_{\\text{gas}} > 0$, predict $\\Delta S > 0$; if $\\Delta n_{\\text{gas}} < 0$, predict $\\Delta S < 0$. Only when $\\Delta n_{\\text{gas}} = 0$ do you need the subtler factors (or a table).',
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'mcq',
      prompt: 'Which process has a **negative** entropy change for the system?',
      options: [
        { text: '$\\ce{CaCO3(s) -> CaO(s) + CO2(g)}$', why: 'A gas is produced from a solid: $\\Delta n_{\\text{gas}} = +1$, so $\\Delta S > 0$ (it is $+159$ J/K).' },
        { text: '$\\ce{Br2(l) -> Br2(g)}$', why: 'Vaporization: liquid to gas is always a large entropy increase.' },
        { text: '$\\ce{N2(g) + 3H2(g) -> 2NH3(g)}$', correct: true, why: 'Four moles of gas become two: $\\Delta n_{\\text{gas}} = -2$. Fewer gas molecules means far fewer microstates, so $\\Delta S < 0$.' },
        { text: 'Liquid water warmed from 25 °C to 50 °C', why: 'Raising the temperature makes more energy levels accessible, so entropy increases.' },
        { text: '$\\ce{NaCl(s) -> Na+(aq) + Cl^-(aq)}$', why: 'Dissolving a crystal of singly charged ions frees them to move through the solution; $\\Delta S$ is positive (about $+43$ J/K).' },
      ],
      explanation: 'Look for the change in moles of gas first. Only the ammonia synthesis reduces the number of gas molecules ($4 \\to 2$), so only it has $\\Delta S_{\\text{sys}} < 0$. Yet the Haber process works at room temperature in principle (it is exothermic); keep that in mind for the second law below.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'order',
      prompt: 'Without a table, arrange these in order of **increasing** standard molar entropy $S^\\circ$ at 25 °C (lowest first).',
      lines: [
        '$\\ce{C(s)}$, diamond',
        '$\\ce{H2O(l)}$',
        '$\\ce{H2O(g)}$',
        '$\\ce{CO2(g)}$',
        '$\\ce{C3H8(g)}$, propane',
      ],
      explanation: 'Diamond is a rigid covalent network with very few accessible microstates ($S^\\circ = 2.4$ J/(mol·K)). Liquid water (70.0) is far below water vapour (188.8): phase is the biggest factor. Among the gases, heavier and more complex molecules have more entropy: $\\ce{CO2}$ (3 atoms, 44 g/mol; 213.8) beats $\\ce{H2O}$ (3 atoms, 18 g/mol), and propane (11 atoms, 44 g/mol) is highest at about 270.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'concept',
      title: 'The second law, and the surroundings',
      blocks: [
        {
          type: 'theorem',
          name: 'The second law of thermodynamics',
          tex: '\\Delta S_{\\text{univ}} = \\Delta S_{\\text{sys}} + \\Delta S_{\\text{surr}} > 0 \\quad \\text{(spontaneous process)}',
          text: 'In any spontaneous process the entropy of the universe increases. $\\Delta S_{\\text{univ}} = 0$ for a process at equilibrium (a reversible one), and $\\Delta S_{\\text{univ}} < 0$ never happens.',
        },
        {
          type: 'p',
          text: 'The [[gchem-second-law|second law]] is about the **universe**, not the system alone. A system can lose entropy (water freezing, a cell building a protein) as long as its surroundings gain more. Exothermic reactions do exactly that: the heat they release spreads into the surroundings and raises the surroundings\' entropy.',
        },
        {
          type: 'p',
          text: 'How much? The thermodynamic definition of an entropy change is $dS = \\dfrac{\\delta q_{\\text{rev}}}{T}$: heat transferred reversibly, divided by the absolute temperature. The surroundings are a huge reservoir whose temperature does not change, so any heat they receive counts as reversible for them. At constant pressure the surroundings receive $q_{\\text{surr}} = -q_{\\text{sys}} = -\\Delta H_{\\text{sys}}$. Therefore:',
        },
        {
          type: 'math',
          tex: '\\Delta S_{\\text{surr}} = -\\frac{\\Delta H_{\\text{sys}}}{T}',
          caption: '$T$ in kelvin. Exothermic ($\\Delta H < 0$) gives $\\Delta S_{\\text{surr}} > 0$; endothermic gives $\\Delta S_{\\text{surr}} < 0$.',
        },
        {
          type: 'callout',
          variant: 'analogy',
          title: 'Why temperature is in the denominator',
          text: 'Sneeze in a silent library and everyone notices; sneeze in a stadium and nobody does. A given amount of heat dumped into **cold** surroundings (few molecules moving fast, few occupied levels) opens up many new microstates. The same heat dumped into **hot** surroundings, already teeming with energy, makes a smaller relative difference. So the energy term matters most at low temperature, and entropy terms dominate at high temperature.',
        },
        {
          type: 'derivation',
          title: 'Does water freeze at −10 °C? At +10 °C?',
          steps: [
            { tex: '\\ce{H2O(l) -> H2O(s)}: \\quad \\Delta H = -6010\\ \\text{J/mol}, \\quad \\Delta S_{\\text{sys}} = -22.0\\ \\text{J/(mol·K)}', why: 'Freezing is the reverse of melting, so both signs flip. Assume both values stay roughly constant over a few tens of degrees.' },
            { tex: 'T = 263.15\\ \\text{K}: \\ \\Delta S_{\\text{surr}} = -\\frac{-6010\\ \\text{J}}{263.15\\ \\text{K}} = +22.84\\ \\text{J/K}', why: 'The released heat warms the surroundings. Convert kJ to J so that the units match $\\Delta S_{\\text{sys}}$.' },
            { tex: '\\Delta S_{\\text{univ}} = -22.0 + 22.84 = +0.84\\ \\text{J/K} > 0', why: 'The surroundings gain more than the system loses: freezing is spontaneous at −10 °C.' },
            { tex: 'T = 283.15\\ \\text{K}: \\ \\Delta S_{\\text{surr}} = +\\frac{6010}{283.15} = +21.23\\ \\text{J/K}', why: 'Same heat, warmer surroundings, so a smaller entropy gain.' },
            { tex: '\\Delta S_{\\text{univ}} = -22.0 + 21.23 = -0.77\\ \\text{J/K} < 0', why: 'Negative: freezing is nonspontaneous at +10 °C, and its reverse (melting) is spontaneous.' },
            { tex: 'T = 273.15\\ \\text{K}: \\ \\Delta S_{\\text{surr}} = +\\frac{6010}{273.15} = +22.0\\ \\text{J/K} \\implies \\Delta S_{\\text{univ}} = 0', why: 'At the melting point the two terms cancel exactly: ice and water coexist at equilibrium.' },
          ],
          result: 'The melting point is the temperature where $\\Delta S_{\\text{surr}}$ exactly balances $\\Delta S_{\\text{sys}}$, so $T_m = \\Delta H_{\\text{fus}}/\\Delta S_{\\text{fus}}$. The Gibbs free energy lesson turns this into a general tool.',
        },
        {
          type: 'deepdive',
          title: 'Calculus: the entropy of heating',
          blocks: [
            {
              type: 'p',
              text: 'Heating at constant pressure transfers $\\delta q_{\\text{rev}} = C_p\\,dT$, so $dS = C_p\\,dT/T$. Integrating (a [[definite-integral|definite integral]]) with a constant heat capacity:',
            },
            {
              type: 'math',
              tex: '\\Delta S = \\int_{T_1}^{T_2} \\frac{C_p}{T}\\,dT = C_p \\ln\\frac{T_2}{T_1}',
            },
            {
              type: 'p',
              text: 'Heating 1 mol of liquid water ($C_p = 75.3$ J/(mol·K)) from 25 °C to 100 °C gives $\\Delta S = 75.3 \\ln\\frac{373.15}{298.15} = +16.9$ J/K. The same integral, run from 0 K upward and with $\\Delta H_{\\text{trans}}/T_{\\text{trans}}$ added at each phase change, is how absolute entropies are measured (next card).',
            },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'numeric',
      prompt: 'A cold pack works by dissolving ammonium nitrate: $\\ce{NH4NO3(s) -> NH4+(aq) + NO3^-(aq)}$, with $\\Delta H = +25.7$ kJ/mol and $\\Delta S_{\\text{sys}} = +108.7$ J/(mol·K). Calculate $\\Delta S_{\\text{univ}}$ per mole at 298.15 K, in J/K (one decimal place).',
      hint: 'First $\\Delta S_{\\text{surr}} = -\\Delta H/T$, with $\\Delta H$ in **joules**. Then add $\\Delta S_{\\text{sys}}$.',
      label: '$\\Delta S_{\\text{univ}} =$',
      unit: 'J/K',
      answer: '108.7 - 25700/298.15',
      answerTex: '+22.5\\ \\text{J/K}',
      tolerance: 0.1,
      explanation: '$\\Delta S_{\\text{surr}} = -\\frac{25\\,700\\ \\text{J}}{298.15\\ \\text{K}} = -86.2$ J/K: the pack pulls heat out of its surroundings (your sprained ankle), lowering their entropy. But the ions gain more: $\\Delta S_{\\text{univ}} = 108.7 - 86.2 = +22.5$ J/K $> 0$. Positive, so the endothermic dissolving is spontaneous. It is driven entirely by the system\'s entropy increase.',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'error',
      prompt: 'A student checks whether the Haber process, $\\ce{N2(g) + 3H2(g) -> 2NH3(g)}$, is spontaneous at 298.15 K under standard conditions, with $\\Delta H^\\circ = -91.8$ kJ and $\\Delta S^\\circ_{\\text{sys}} = -198.1$ J/K. Tap the first line that is wrong.',
      lines: [
        '$\\Delta S_{\\text{sys}} = -198.1$ J/K (fewer moles of gas)',
        '$\\Delta S_{\\text{surr}} = -\\dfrac{\\Delta H}{T} = -\\dfrac{-91.8}{298.15}$',
        '$\\Delta S_{\\text{surr}} = +0.308$ J/K',
        '$\\Delta S_{\\text{univ}} = -198.1 + 0.308 = -197.8$ J/K, so the reaction is not spontaneous',
      ],
      errorLines: [3],
      explanation: 'Line 2 sets up the right formula, but line 3 divides **kilojoules** by kelvin and then labels the result J/K. Converting first: $\\Delta S_{\\text{surr}} = +\\frac{91\\,800\\ \\text{J}}{298.15\\ \\text{K}} = +307.9$ J/K. Then $\\Delta S_{\\text{univ}} = -198.1 + 307.9 = +109.8$ J/K $> 0$: ammonia synthesis **is** spontaneous at 25 °C under standard conditions. (It is slow without a catalyst, which is a kinetics problem, not a thermodynamics one.)',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'concept',
      title: 'The third law and standard molar entropies',
      blocks: [
        {
          type: 'theorem',
          name: 'The third law of thermodynamics',
          text: 'The entropy of a perfect crystal at absolute zero is zero.',
        },
        {
          type: 'p',
          text: 'The [[gchem-third-law|third law]] follows from Boltzmann: a perfect crystal at 0 K has every particle in its lowest energy state at its lattice site, and there is exactly **one** way to arrange that. $W = 1$ and $S = k \\ln 1 = 0$. That gives entropy a true zero, something enthalpy never had.',
        },
        {
          type: 'figure',
          svg: `<svg viewBox="0 0 500 280" xmlns="http://www.w3.org/2000/svg"><line x1="60" y1="235" x2="480" y2="235" stroke="currentColor" stroke-width="1.5"/><line x1="60" y1="235" x2="60" y2="20" stroke="currentColor" stroke-width="1.5"/><text x="470" y="257" text-anchor="middle" font-size="13">T (K)</text><text x="30" y="35" text-anchor="middle" font-size="13">S°</text><text x="60" y="253" text-anchor="middle" font-size="12">0</text><path d="M60.0,235.0 L63.8,234.9 L67.7,234.7 L71.5,234.3 L75.4,234.0 L79.2,233.5 L83.1,233.0 L86.9,232.5 L90.8,231.9 L94.6,231.2 L98.4,230.5 L102.3,229.8 L106.1,229.0 L110.0,228.2 L113.8,227.4 L117.7,226.5 L121.5,225.5 L125.3,224.6 L129.2,223.6 L133.0,222.5 L136.9,221.5 L140.7,220.4 L144.6,219.2 L148.4,218.1 L152.3,216.9 L156.1,215.7 L159.9,214.4 L163.8,213.1 L167.6,211.8 L171.5,210.5 L175.3,209.1 L179.2,207.7 L183.0,206.3 L186.8,204.9 L190.7,203.4 L194.5,201.9 L198.4,200.4 L202.2,198.8 L206.1,197.2 L209.9,195.6 L213.8,194.0" fill="none" stroke="currentColor" class="s-blue" stroke-width="2.6"/><path d="M213.8,171.4 L217.1,171.1 L220.4,170.7 L223.7,170.3 L227.1,169.9 L230.4,169.6 L233.7,169.2 L237.1,168.8 L240.4,168.5 L243.7,168.2 L247.1,167.8 L250.4,167.5 L253.7,167.2 L257.1,166.9 L260.4,166.6 L263.7,166.3 L267.1,166.0 L270.4,165.7 L273.7,165.4 L277.0,165.1 L280.4,164.8 L283.7,164.5 L287.0,164.3 L290.4,164.0 L293.7,163.7 L297.0,163.5 L300.4,163.2 L303.7,163.0 L307.0,162.7 L310.4,162.5 L313.7,162.2 L317.0,162.0 L320.4,161.7 L323.7,161.5 L327.0,161.3 L330.3,161.0 L333.7,160.8 L337.0,160.6 L340.3,160.4 L343.7,160.1 L347.0,159.9" fill="none" stroke="currentColor" class="s-green" stroke-width="2.6"/><path d="M347.0,86.4 L350.1,86.2 L353.1,86.1 L356.2,86.0 L359.3,85.9 L362.4,85.7 L365.4,85.6 L368.5,85.5 L371.6,85.4 L374.7,85.2 L377.8,85.1 L380.8,85.0 L383.9,84.9 L387.0,84.8 L390.1,84.7 L393.1,84.5 L396.2,84.4 L399.3,84.3 L402.3,84.2 L405.4,84.1 L408.5,84.0 L411.6,83.9 L414.6,83.8 L417.7,83.7 L420.8,83.6 L423.9,83.5 L426.9,83.4 L430.0,83.2 L433.1,83.1 L436.2,83.0 L439.2,82.9 L442.3,82.8 L445.4,82.7 L448.5,82.7 L451.6,82.6 L454.6,82.5 L457.7,82.4 L460.8,82.3 L463.9,82.2 L466.9,82.1 L470.0,82.0" fill="none" stroke="currentColor" class="s-red" stroke-width="2.6"/><line x1="213.8" y1="194.0" x2="213.8" y2="171.4" stroke="currentColor" stroke-width="2" stroke-dasharray="4 3"/><line x1="347.0" y1="159.9" x2="347.0" y2="86.4" stroke="currentColor" stroke-width="2" stroke-dasharray="4 3"/><line x1="213.8" y1="235" x2="213.8" y2="240" stroke="currentColor"/><text x="213.8" y="253" text-anchor="middle" font-size="12">T<tspan font-size="10" dy="4">m</tspan></text><line x1="347.0" y1="235" x2="347.0" y2="240" stroke="currentColor"/><text x="347.0" y="253" text-anchor="middle" font-size="12">T<tspan font-size="10" dy="4">b</tspan></text><text x="157.4" y="203.3" text-anchor="middle" font-size="13" class="t-blue">solid</text><text x="280.4" y="152.8" text-anchor="middle" font-size="13" class="t-green">liquid</text><text x="413.6" y="71.8" text-anchor="middle" font-size="13" class="t-red">gas</text><text x="221.8" y="186.7" font-size="12">ΔS<tspan font-size="10" dy="4">fus</tspan><tspan dy="-4"> = ΔH</tspan><tspan font-size="10" dy="4">fus</tspan><tspan dy="-4"> / T</tspan><tspan font-size="10" dy="4">m</tspan></text><text x="339.0" y="127.2" text-anchor="end" font-size="12">ΔS<tspan font-size="10" dy="4">vap</tspan><tspan dy="-4"> = ΔH</tspan><tspan font-size="10" dy="4">vap</tspan><tspan dy="-4"> / T</tspan><tspan font-size="10" dy="4">b</tspan></text><circle cx="60" cy="235" r="4" class="f-purple" fill="currentColor"/><text x="50" y="270" font-size="12" class="t-purple">S = 0 at 0 K for a perfect crystal (third law)</text></svg>`,
          alt: 'Graph of standard entropy versus temperature for a substance. Starting at zero at 0 K, the solid curve rises smoothly, jumps vertically at the melting point by delta S fusion, rises slowly through the liquid, makes a much bigger vertical jump at the boiling point by delta S vaporization, then continues slowly rising as a gas.',
          caption: 'Entropy rises with temperature in each phase and jumps at each phase change. The jump at boiling is much bigger than the jump at melting: going from liquid to gas multiplies the volume available roughly a thousandfold.',
          maxWidth: 500,
        },
        {
          type: 'p',
          text: 'Measuring heat capacities from near 0 K upward and adding $\\int C_p\\,dT/T$ for each phase plus $\\Delta H_{\\text{trans}}/T_{\\text{trans}}$ at each phase change gives the **absolute** entropy of a substance. Tabulated at 1 bar and 298.15 K, this is the [[gchem-standard-molar-entropy|standard molar entropy]] $S^\\circ$, in J/(mol·K).',
        },
        {
          type: 'table',
          headers: ['Substance', '$S^\\circ$ (J/(mol·K))', 'Substance', '$S^\\circ$ (J/(mol·K))'],
          rows: [
            ['$\\ce{H2(g)}$', '130.7', '$\\ce{H2O(l)}$', '70.0'],
            ['$\\ce{N2(g)}$', '191.6', '$\\ce{H2O(g)}$', '188.8'],
            ['$\\ce{O2(g)}$', '205.2', '$\\ce{CO2(g)}$', '213.8'],
            ['$\\ce{C(s)}$, graphite', '5.740', '$\\ce{CH4(g)}$', '186.3'],
            ['$\\ce{Fe(s)}$', '27.3', '$\\ce{NH3(g)}$', '192.8'],
            ['$\\ce{CaO(s)}$', '38.1', '$\\ce{CaCO3(s)}$', '92.9'],
          ],
          caption: 'Standard molar entropies at 298.15 K and 1 bar (OpenStax *Chemistry 2e*, Appendix G). Use these values in this lesson\'s questions.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Two traps in the entropy table',
          text: '(1) Elements in their standard states do **not** have $S^\\circ = 0$; only their *enthalpy of formation* is zero by convention. $\\ce{O2(g)}$ has 205.2 J/(mol·K) of absolute entropy. (2) Entropies are in **joules** per kelvin, while enthalpies are in **kilojoules**. Mixing them up is the most common error in this unit.',
        },
      ],
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'concept',
      title: 'ΔS° of a reaction from the table',
      blocks: [
        {
          type: 'p',
          text: 'Entropy is a state function, so the reaction\'s entropy change is "what you end with minus what you started with", each $S^\\circ$ multiplied by its coefficient (the number of moles).',
        },
        {
          type: 'theorem',
          name: 'Standard entropy of reaction',
          tex: '\\Delta S^\\circ_{\\text{rxn}} = \\sum n\\, S^\\circ(\\text{products}) - \\sum m\\, S^\\circ(\\text{reactants})',
        },
        {
          type: 'derivation',
          title: 'Ammonia synthesis: $\\ce{N2(g) + 3H2(g) -> 2NH3(g)}$',
          steps: [
            { tex: '\\sum n S^\\circ(\\text{prod}) = 2(192.8) = 385.6\\ \\text{J/K}', why: 'Two moles of ammonia, each 192.8 J/(mol·K). The "mol" cancels against the coefficient\'s moles.' },
            { tex: '\\sum m S^\\circ(\\text{react}) = 191.6 + 3(130.7) = 583.7\\ \\text{J/K}', why: 'One mole of $\\ce{N2}$ plus three of $\\ce{H2}$. Elements have nonzero $S^\\circ$, so they must be included.' },
            { tex: '\\Delta S^\\circ = 385.6 - 583.7 = -198.1\\ \\text{J/K}', why: 'Products minus reactants.' },
          ],
          result: 'Negative, as predicted from $\\Delta n_{\\text{gas}} = -2$.',
        },
        {
          type: 'derivation',
          title: 'Making lime: $\\ce{CaCO3(s) -> CaO(s) + CO2(g)}$',
          steps: [
            { tex: '\\sum n S^\\circ(\\text{prod}) = 38.1 + 213.8 = 251.9\\ \\text{J/K}', why: 'One mole each of $\\ce{CaO}$ and $\\ce{CO2}$.' },
            { tex: '\\Delta S^\\circ = 251.9 - 92.9 = +159.0\\ \\text{J/K}', why: 'Subtract one mole of $\\ce{CaCO3}$.' },
          ],
          result: 'Large and positive: a mole of gas appears from a solid. You will use this number in the next lesson to find the temperature at which limestone decomposes.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why these numbers can simply be subtracted',
          text: 'Unlike enthalpy, entropy has an absolute zero (the third law), so each $S^\\circ$ is a real property of one mole of the substance, not a value relative to the elements. Because $S$ is a state function, the path from reactants to products does not matter: the change is the final total minus the initial total, exactly like the Hess\'s law sums you did for $\\Delta H^\\circ$.',
        },
        {
          type: 'callout',
          variant: 'tip',
          text: 'Always sanity-check the sign with $\\Delta n_{\\text{gas}}$. If the arithmetic says $\\Delta S^\\circ > 0$ for a reaction that turns 3 mol of gas into 2, you have probably dropped a coefficient or swapped products and reactants.',
        },
      ],
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'numeric',
      prompt: 'Using the standard molar entropy table, calculate $\\Delta S^\\circ$ for $\\ce{2H2(g) + O2(g) -> 2H2O(l)}$, in J/K (one decimal place).',
      hint: '$\\Delta S^\\circ = 2(70.0) - [2(130.7) + 205.2]$. Watch the state of the water.',
      label: '$\\Delta S^\\circ =$',
      unit: 'J/K',
      answer: '2*70.0 - 2*130.7 - 205.2',
      answerTex: '-326.6\\ \\text{J/K}',
      tolerance: 0.06,
      explanation: 'Products: $2 \\times 70.0 = 140.0$ J/K. Reactants: $2 \\times 130.7 + 205.2 = 466.6$ J/K. $\\Delta S^\\circ = 140.0 - 466.6 = -326.6$ J/K. Three moles of gas become liquid, so a large negative value makes sense. (Had you used $\\ce{H2O(g)}$, 188.8, you would get $-89.0$ J/K: the state matters.)',
    },
    // ------------------------------------------------------------------ 16
    {
      kind: 'fill',
      prompt: 'Complete the statements of the second law.',
      template: 'For any spontaneous process, $\\Delta S_{\\text{univ}}$ is ___ zero. For a process at equilibrium, $\\Delta S_{\\text{univ}}$ is ___ zero. The entropy of the *system* ___ decrease in a spontaneous process, provided $\\Delta S_{\\text{surr}}$ is large enough.',
      blanks: [{ answers: ['greater than'] }, { answers: ['equal to'] }, { answers: ['can'] }],
      wordBank: ['greater than', 'equal to', 'less than', 'can', 'can never'],
      explanation: 'The second law constrains the **universe**: $\\Delta S_{\\text{univ}} > 0$ for spontaneous change and $= 0$ at equilibrium. The system alone may lose entropy, as water does when it freezes below 0 °C, because the heat it releases raises the surroundings\' entropy by more.',
    },
    // ------------------------------------------------------------------ 17
    {
      kind: 'truefalse',
      prompt: 'For an exothermic reaction, the entropy gained by the surroundings ($\\Delta S_{\\text{surr}}$) is larger when the surroundings are hotter.',
      answer: false,
      explanation: '$\\Delta S_{\\text{surr}} = -\\Delta H/T$ has $T$ in the **denominator**: the same released heat produces a *smaller* entropy gain in hotter surroundings. That is why exothermic but entropy-decreasing reactions (like freezing, or ammonia synthesis) are spontaneous only below some temperature: as $T$ rises, the surroundings\' bonus shrinks until it no longer covers the system\'s loss.',
    },
  ],
  takeaways: [
    'Spontaneous means "proceeds on its own", not "fast", and not necessarily exothermic: melting ice, free expansion and dissolving $\\ce{NH4NO3}$ are spontaneous with $\\Delta H \\ge 0$.',
    'Entropy counts microstates: $S = k \\ln W$. Macrostates with more microstates are overwhelmingly more probable; for ideal-gas expansion $\\Delta S = nR\\ln(V_2/V_1)$.',
    'Entropy is higher for gases, at higher temperature, for heavier and more complex molecules; $\\Delta n_{\\text{gas}}$ usually decides the sign of $\\Delta S_{\\text{rxn}}$.',
    'Second law: $\\Delta S_{\\text{univ}} = \\Delta S_{\\text{sys}} + \\Delta S_{\\text{surr}} > 0$ for spontaneous processes, $= 0$ at equilibrium, with $\\Delta S_{\\text{surr}} = -\\Delta H_{\\text{sys}}/T$.',
    'Third law: $S = 0$ for a perfect crystal at 0 K, so $S^\\circ$ values are absolute and nonzero even for elements; they are in J/(mol·K), not kJ.',
    '$\\Delta S^\\circ_{\\text{rxn}} = \\sum n S^\\circ(\\text{products}) - \\sum m S^\\circ(\\text{reactants})$.',
  ],
  reading: [
    {
      title: 'OpenStax Chemistry 2e — Chapter 16: Thermodynamics',
      url: 'https://openstax.org/books/chemistry-2e/pages/16-introduction',
      source: 'openstax',
      note: 'Sections 16.1–16.3 cover spontaneity, entropy and microstates, and the second and third laws; Appendix G has the data tables used here.',
    },
    {
      title: 'Wikipedia — Boltzmann\'s entropy formula',
      url: 'https://en.wikipedia.org/wiki/Boltzmann%27s_entropy_formula',
      source: 'wikipedia',
      note: 'The history and meaning of $S = k \\ln W$, the equation engraved on Boltzmann\'s tombstone.',
    },
    {
      title: 'Wikipedia — Second law of thermodynamics',
      url: 'https://en.wikipedia.org/wiki/Second_law_of_thermodynamics',
      source: 'wikipedia',
      note: 'The Clausius and Kelvin statements of the second law and how they connect to the statistical view.',
    },
    {
      title: 'LibreTexts Chemistry',
      url: 'https://chem.libretexts.org/',
      source: 'libretexts',
      note: 'Search for "entropy" and "microstates" for alternative explanations and many extra practice problems.',
    },
  ],
};
