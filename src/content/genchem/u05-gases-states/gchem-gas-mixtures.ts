import type { Lesson } from '../../types';

const FIG_DALTON = `<svg viewBox="0 0 520 200" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="20" width="130" height="130" rx="6" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="40" cy="65" r="6" class="f-blue" fill="currentColor" fill-opacity="0.85" stroke="currentColor" stroke-width="1"/><circle cx="90" cy="60" r="6" class="f-blue" fill="currentColor" fill-opacity="0.85" stroke="currentColor" stroke-width="1"/><circle cx="65" cy="105" r="6" class="f-blue" fill="currentColor" fill-opacity="0.85" stroke="currentColor" stroke-width="1"/><circle cx="115" cy="120" r="6" class="f-blue" fill="currentColor" fill-opacity="0.85" stroke="currentColor" stroke-width="1"/><circle cx="40" cy="140" r="6" class="f-blue" fill="currentColor" fill-opacity="0.85" stroke="currentColor" stroke-width="1"/><circle cx="105" cy="85" r="6" class="f-blue" fill="currentColor" fill-opacity="0.85" stroke="currentColor" stroke-width="1"/><rect x="190" y="20" width="130" height="130" rx="6" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="230" cy="80" r="8" class="f-red" fill="currentColor" fill-opacity="0.85" stroke="currentColor" stroke-width="1"/><circle cx="285" cy="65" r="8" class="f-red" fill="currentColor" fill-opacity="0.85" stroke="currentColor" stroke-width="1"/><circle cx="260" cy="130" r="8" class="f-red" fill="currentColor" fill-opacity="0.85" stroke="currentColor" stroke-width="1"/><circle cx="215" cy="120" r="8" class="f-red" fill="currentColor" fill-opacity="0.85" stroke="currentColor" stroke-width="1"/><rect x="370" y="20" width="130" height="130" rx="6" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="400" cy="65" r="6" class="f-blue" fill="currentColor" fill-opacity="0.85" stroke="currentColor" stroke-width="1"/><circle cx="450" cy="60" r="6" class="f-blue" fill="currentColor" fill-opacity="0.85" stroke="currentColor" stroke-width="1"/><circle cx="425" cy="105" r="6" class="f-blue" fill="currentColor" fill-opacity="0.85" stroke="currentColor" stroke-width="1"/><circle cx="475" cy="120" r="6" class="f-blue" fill="currentColor" fill-opacity="0.85" stroke="currentColor" stroke-width="1"/><circle cx="400" cy="140" r="6" class="f-blue" fill="currentColor" fill-opacity="0.85" stroke="currentColor" stroke-width="1"/><circle cx="465" cy="85" r="6" class="f-blue" fill="currentColor" fill-opacity="0.85" stroke="currentColor" stroke-width="1"/><circle cx="390" cy="42" r="8" class="f-red" fill="currentColor" fill-opacity="0.85" stroke="currentColor" stroke-width="1"/><circle cx="478" cy="45" r="8" class="f-red" fill="currentColor" fill-opacity="0.85" stroke="currentColor" stroke-width="1"/><circle cx="440" cy="138" r="8" class="f-red" fill="currentColor" fill-opacity="0.85" stroke="currentColor" stroke-width="1"/><circle cx="438" cy="82" r="8" class="f-red" fill="currentColor" fill-opacity="0.85" stroke="currentColor" stroke-width="1"/><text x="165" y="92" text-anchor="middle" font-size="26">+</text><text x="355" y="92" text-anchor="middle" font-size="26">=</text><text x="75" y="172" text-anchor="middle" class="t-blue">6 He atoms</text><text x="75" y="192" text-anchor="middle" font-size="13">P(He) = 0.60 atm</text><text x="255" y="172" text-anchor="middle" class="t-red">4 O₂ molecules</text><text x="255" y="192" text-anchor="middle" font-size="13">P(O₂) = 0.40 atm</text><text x="435" y="172" text-anchor="middle">same box, same T</text><text x="435" y="192" text-anchor="middle" font-size="13">P(total) = 1.00 atm</text></svg>`;
const FIG_COLLECT = `<svg viewBox="0 0 520 300" xmlns="http://www.w3.org/2000/svg"><rect x="200" y="160" width="300" height="100" fill="currentColor" class="f-blue" fill-opacity="0.15" stroke="none"/><polyline points="200,140 200,260 500,260 500,140" fill="none" stroke="currentColor" stroke-width="2.5"/><line x1="200" y1="160" x2="335" y2="160" stroke="currentColor" class="s-blue" stroke-width="1.5"/><line x1="395" y1="160" x2="500" y2="160" stroke="currentColor" class="s-blue" stroke-width="1.5"/><rect x="337" y="160" width="56" height="70" fill="currentColor" class="f-blue" fill-opacity="0.15" stroke="none"/><line x1="337" y1="160" x2="393" y2="160" stroke="currentColor" class="s-blue" stroke-width="1.5"/><path d="M335 230 L335 40 Q335 30 345 30 L385 30 Q395 30 395 40 L395 230" fill="none" stroke="currentColor" stroke-width="2.5"/><line x1="395" y1="60" x2="385" y2="60" stroke="currentColor" stroke-width="1.2"/><line x1="395" y1="80" x2="388" y2="80" stroke="currentColor" stroke-width="1.2"/><line x1="395" y1="100" x2="385" y2="100" stroke="currentColor" stroke-width="1.2"/><line x1="395" y1="120" x2="388" y2="120" stroke="currentColor" stroke-width="1.2"/><line x1="395" y1="140" x2="385" y2="140" stroke="currentColor" stroke-width="1.2"/><text x="365" y="78" text-anchor="middle" font-size="13" class="t-purple">H₂</text><text x="365" y="96" text-anchor="middle" font-size="13" class="t-purple">+</text><text x="365" y="114" text-anchor="middle" font-size="12" class="t-blue">H₂O(g)</text><circle cx="360" cy="215" r="3.5" fill="none" stroke="currentColor"/><circle cx="368" cy="196" r="3" fill="none" stroke="currentColor"/><circle cx="362" cy="178" r="2.5" fill="none" stroke="currentColor"/><path d="M60 250 L80 150 L80 110 L110 110 L110 150 L130 250 Z" fill="none" stroke="currentColor" stroke-width="2.5"/><path d="M66 220 L124 220 L130 250 L60 250 Z" fill="currentColor" class="f-gray" fill-opacity="0.3" stroke="none"/><circle cx="85" cy="238" r="3" fill="none" stroke="currentColor"/><circle cx="100" cy="232" r="2.5" fill="none" stroke="currentColor"/><circle cx="112" cy="240" r="3" fill="none" stroke="currentColor"/><rect x="78" y="100" width="34" height="14" rx="2" fill="currentColor" class="f-gray" fill-opacity="0.6"/><polyline points="95,100 95,70 260,70 260,245 365,245 365,232" fill="none" stroke="currentColor" stroke-width="2"/><text x="95" y="272" text-anchor="middle" font-size="13">Zn + HCl(aq)</text><text x="275" y="55" text-anchor="middle" font-size="12" class="t-gray">delivery tube</text><line x1="450" y1="105" x2="450" y2="152" stroke="currentColor" class="s-red" stroke-width="2"/><path d="M450 158 L445 148 L455 148 Z" fill="currentColor" class="f-red"/><text x="450" y="80" text-anchor="middle" font-size="13" class="t-red">P(atm)</text><text x="450" y="96" text-anchor="middle" font-size="12" class="t-red">pushes down</text><text x="296" y="150" text-anchor="middle" font-size="11" class="t-gray">levels equal</text><text x="300" y="294" text-anchor="middle" font-size="13">inside = outside:  P(atm) = P(H₂) + P(H₂O)</text></svg>`;

export const lesson: Lesson = {
  id: 'gchem-gas-mixtures',
  title: 'Gas Stoichiometry and Partial Pressures',
  summary: 'Use PV = nRT as a measuring tool: gas density and molar mass, liters of gas in reactions, Dalton\'s law, gases collected over water, and the partial-pressure physics of diving and altitude.',
  minutes: 20,
  objectives: [
    'Derive $d = PM/RT$ and use it to find a gas\'s density or molar mass',
    'Solve stoichiometry problems in which reactants or products are gases at any conditions',
    'Apply Dalton\'s law and mole fractions to gas mixtures',
    'Correct for water vapor when a gas is collected over water',
    'Compute oxygen and nitrogen partial pressures at depth and at altitude, including a maximum operating depth',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Gas density and molar mass',
      blocks: [
        {
          type: 'p',
          text: 'In Chemistry Foundations you met the [[ideal-gas-law]], $PV = nRT$, and the molar volume of $22.4\\ \\text{L}$ at [[stp|STP]]. This lesson turns that law into a working tool. The first trick is to remember that moles hide a mass: $n = m/M$, where $M$ is the [[molar-mass|molar mass]].',
        },
        {
          type: 'derivation',
          title: 'From $PV = nRT$ to a density formula',
          steps: [
            { tex: 'PV = nRT = \\frac{m}{M}RT', why: 'Replace the number of moles by mass divided by molar mass.' },
            { tex: 'PM = \\frac{m}{V}RT', why: 'Multiply both sides by $M$ and divide both sides by $V$.' },
            { tex: 'd = \\frac{m}{V} = \\frac{PM}{RT}', why: 'Mass per volume is the [[density]]. Solve for it.' },
          ],
          result: 'At fixed $T$ and $P$, a gas\'s density is **proportional to its molar mass**. Rearranged, $M = \\dfrac{dRT}{P}$ turns a density measurement into a molar mass.',
        },
        {
          type: 'derivation',
          title: 'Density of $\\ce{CO2}$ at $25\\ ^\\circ\\text{C}$ and $1.00\\ \\text{atm}$',
          steps: [
            { tex: 'M(\\ce{CO2}) = 12.011 + 2(15.999) = 44.01\\ \\text{g/mol}', why: 'Atomic masses C 12.011, O 15.999.' },
            { tex: 'd = \\frac{(1.00\\ \\cancel{\\text{atm}})(44.01\\ \\text{g/}\\cancel{\\text{mol}})}{(0.08206\\ \\text{L}\\cdot\\cancel{\\text{atm}}/(\\cancel{\\text{mol}}\\cdot\\cancel{\\text{K}}))(298.15\\ \\cancel{\\text{K}})}', why: 'Substitute into $d = PM/RT$ with $T$ in kelvin. Atm, mol and K cancel, leaving g/L.' },
            { tex: 'd = 1.80\\ \\text{g/L}', why: '$44.01 / 24.47 = 1.80$.' },
            { tex: 'd_{\\text{air}} = \\frac{(1.00)(28.97)}{(0.08206)(298.15)} = 1.18\\ \\text{g/L}', why: 'Dry air behaves like a gas of average molar mass $28.97\\ \\text{g/mol}$ (mostly $\\ce{N2}$ at 28 and $\\ce{O2}$ at 32).' },
          ],
          result: 'Carbon dioxide is about $1.5$ times as dense as air at the same conditions.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why heavier molecules make a denser gas',
          text: 'By Avogadro\'s law, a liter of any ideal gas at the same $T$ and $P$ holds the **same number of molecules**. So the mass of that liter is just the number of molecules times the mass of each one. Make each molecule 1.5 times heavier and the liter is 1.5 times heavier.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Heavy gases pool in low places',
          text: 'Gases denser than air ($M > 29\\ \\text{g/mol}$) sink and collect in trenches, pits, ship holds, bunkers and vehicle footwells before they mix away. Carbon dioxide from dry ice or a generator exhaust, and propane ($M = 44.1\\ \\text{g/mol}$) from a leaking field stove, can displace the oxygen near the ground in a confined space. Light gases such as methane and hydrogen rise instead.',
        },
        {
          type: 'derivation',
          title: 'Identify a gas from its density: $1.25\\ \\text{g/L}$ at STP',
          steps: [
            { tex: 'M = \\frac{dRT}{P}', why: 'Solve $d = PM/RT$ for $M$.' },
            { tex: 'M = \\frac{(1.25\\ \\text{g/L})(0.08206\\ \\text{L·atm/(mol·K)})(273.15\\ \\text{K})}{1.00\\ \\text{atm}}', why: 'STP in this course: $0\\ ^\\circ\\text{C}$ and $1\\ \\text{atm}$.' },
            { tex: 'M = 28.0\\ \\text{g/mol}', why: 'L, atm and K cancel, leaving g/mol.' },
          ],
          result: 'Candidates are $\\ce{N2}$ (28.01), $\\ce{CO}$ (28.01) and $\\ce{C2H4}$ (28.05). Density alone gives the molar mass, not the identity; a chemical test would have to decide.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'mcq',
      prompt: 'A fuel leaks inside a closed tent. Which gas is most likely to collect near the floor? (Molar masses in g/mol; air averages $28.97$.)',
      options: [
        { text: 'Methane, $\\ce{CH4}$ (16.04)', why: 'Methane is lighter than air ($16.04 < 28.97$), so it rises toward the roof.' },
        { text: 'Hydrogen, $\\ce{H2}$ (2.02)', why: 'Hydrogen is the least dense gas of all and rises fastest.' },
        { text: 'Propane, $\\ce{C3H8}$ (44.10)', correct: true, why: 'Propane is about $44.10 / 28.97 = 1.52$ times as dense as air at the same $T$ and $P$, so it sinks and pools.' },
        { text: 'All gases mix evenly at once, so none collects anywhere', why: 'Gases do eventually mix by diffusion, but a dense gas released into still air sinks first. That is why propane and $\\ce{CO2}$ accumulate in low spots.' },
      ],
      explanation: 'From $d = PM/RT$, at the same temperature and pressure the gas density is proportional to molar mass. Only propane has $M$ greater than air\'s $28.97\\ \\text{g/mol}$, so only propane is denser than air.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'numeric',
      prompt: 'A $250.\\ \\text{mL}$ flask filled with an unknown hydrocarbon gas at $745\\ \\text{torr}$ and $25.0\\ ^\\circ\\text{C}$ contains $0.442\\ \\text{g}$ of gas. What is its molar mass? Use $R = 0.08206\\ \\text{L·atm/(mol·K)}$, $760\\ \\text{torr} = 1\\ \\text{atm}$, and give 3 significant figures.',
      hint: '$M = \\dfrac{mRT}{PV}$ with $P$ in atm, $V$ in L and $T$ in K.',
      label: '$M =$',
      unit: 'g/mol',
      answer: '0.442*0.08206*298.15/((745/760)*0.250)',
      answerTex: '44.1\\ \\text{g/mol}',
      tolerance: 0.06,
      explanation: 'Convert first: $P = 745/760 = 0.9803\\ \\text{atm}$, $V = 0.250\\ \\text{L}$, $T = 298.15\\ \\text{K}$. Then $M = \\frac{mRT}{PV} = \\frac{(0.442)(0.08206)(298.15)}{(0.9803)(0.250)} = 44.1\\ \\text{g/mol}$, matching propane, $\\ce{C3H8}$ ($44.10$). Using $V = 250$ (mL) instead of $0.250$ L would give a molar mass a thousand times too small.',
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'concept',
      title: 'Gas stoichiometry: liters in, liters out',
      blocks: [
        {
          type: 'p',
          text: 'The [[stoichiometry]] roadmap from Foundations, grams → moles → moles → grams, gains a new on-ramp and off-ramp: for a gas, **moles ↔ liters** through $n = PV/RT$ at any conditions (or $22.4\\ \\text{L/mol}$, but only at STP). The [[mole-ratio|mole ratio]] in the middle is unchanged.',
        },
        {
          type: 'p',
          text: 'When every gas in a reaction is measured at the **same temperature and pressure**, there is an even shorter route. Since $V = n(RT/P)$ and $RT/P$ is the same for every gas, volumes are proportional to moles. This is Gay-Lussac\'s **law of combining volumes**: gas volumes react in the ratio of the coefficients.',
        },
        {
          type: 'math',
          tex: '\\ce{C3H8(g) + 5O2(g) -> 3CO2(g) + 4H2O(l)}',
          caption: 'At the same $T$ and $P$: $1\\ \\text{L}$ of propane uses $5\\ \\text{L}$ of $\\ce{O2}$ and gives $3\\ \\text{L}$ of $\\ce{CO2}$. (Liquid water is not a gas, so it has no gas volume.)',
        },
        {
          type: 'p',
          text: '**The airbag, quantitatively.** In Foundations you found that $65.0\\ \\text{g}$ of sodium azide gives $33.6\\ \\text{L}$ of $\\ce{N2}$ at STP. A real design problem runs the other way: the bag has a volume and must reach a pressure. How much azide does it need?',
        },
        {
          type: 'derivation',
          title: 'Azide for a $60.0\\ \\text{L}$ bag at $1.15\\ \\text{atm}$ and $25\\ ^\\circ\\text{C}$',
          steps: [
            { tex: 'n_{\\ce{N2}} = \\frac{PV}{RT} = \\frac{(1.15\\ \\text{atm})(60.0\\ \\text{L})}{(0.08206\\ \\text{L·atm/(mol·K)})(298.15\\ \\text{K})}', why: 'The gas leg first: the bag\'s volume and pressure fix the moles of $\\ce{N2}$. (We treat the gas at $25\\ ^\\circ\\text{C}$ for simplicity; the freshly made gas is hot, which reduces the amount needed.)' },
            { tex: 'n_{\\ce{N2}} = 2.820\\ \\text{mol}', why: '$69.0 / 24.466 = 2.820$. Keep an extra digit until the end.' },
            { tex: '2.820\\ \\cancel{\\text{mol}\\ \\ce{N2}} \\times \\frac{2\\ \\text{mol}\\ \\ce{NaN3}}{3\\ \\cancel{\\text{mol}\\ \\ce{N2}}} = 1.880\\ \\text{mol}\\ \\ce{NaN3}', why: 'Mole ratio from $\\ce{2NaN3(s) -> 2Na(s) + 3N2(g)}$.' },
            { tex: '1.880\\ \\cancel{\\text{mol}} \\times 65.01\\ \\text{g/}\\cancel{\\text{mol}} = 122\\ \\text{g}\\ \\ce{NaN3}', why: 'Moles to grams, with $M(\\ce{NaN3}) = 22.990 + 3(14.007) = 65.01\\ \\text{g/mol}$.' },
          ],
          result: 'About $122\\ \\text{g}$ of solid fills the bag. Notice the roadmap now reads liters of B → moles of B → moles of A → grams of A.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Hydrogen from an MRE heater',
          text: 'A flameless ration heater is a pad of powdered magnesium (alloyed with a little iron). Add water and it reacts, $\\ce{Mg(s) + 2H2O(l) -> Mg(OH)2(s) + H2(g)}$, releasing enough heat to warm the meal. The by-product is **hydrogen gas**, which is flammable. That is why the instructions say to use the heater in a ventilated space and away from flames, and the gas stoichiometry tells you how much hydrogen to expect.',
        },
      ],
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'fill',
      prompt: 'Propane burns as $\\ce{C3H8(g) + 5O2(g) -> 3CO2(g) + 4H2O(l)}$. All gases are measured at the same temperature and pressure. Type the volumes.',
      template: '$2.0\\ \\text{L}$ of propane needs ___ L of $\\ce{O2}$ and produces ___ L of $\\ce{CO2}$.',
      blanks: [{ answers: ['10', '10.0'] }, { answers: ['6', '6.0'] }],
      explanation: 'At the same $T$ and $P$, volume is proportional to moles, so the coefficients act as **volume** ratios: $2.0\\ \\text{L} \\times \\frac{5}{1} = 10\\ \\text{L}$ of $\\ce{O2}$ and $2.0\\ \\text{L} \\times \\frac{3}{1} = 6.0\\ \\text{L}$ of $\\ce{CO2}$. No $R$, no molar mass needed. (This shortcut fails for the liquid water, and for gases measured at different conditions.)',
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'numeric',
      prompt: 'A ration heater contains $7.50\\ \\text{g}$ of magnesium, which reacts completely: $\\ce{Mg(s) + 2H2O(l) -> Mg(OH)2(s) + H2(g)}$. What volume of hydrogen forms at $1.00\\ \\text{atm}$ and $25.0\\ ^\\circ\\text{C}$? Use $M(\\ce{Mg}) = 24.305\\ \\text{g/mol}$ and $R = 0.08206\\ \\text{L·atm/(mol·K)}$; 3 significant figures.',
      hint: 'Grams Mg → moles Mg → moles $\\ce{H2}$ (1 : 1) → liters with $V = nRT/P$.',
      label: '$V(\\ce{H2}) =$',
      unit: 'L',
      answer: '7.50/24.305*0.08206*298.15/1.00',
      answerTex: '7.55\\ \\text{L}',
      tolerance: 0.006,
      explanation: '$7.50 / 24.305 = 0.3086\\ \\text{mol Mg}$, which gives $0.3086\\ \\text{mol}\\ \\ce{H2}$ by the 1 : 1 ratio. Then $V = \\frac{nRT}{P} = \\frac{(0.3086)(0.08206)(298.15)}{1.00} = 7.55\\ \\text{L}$. That is a few liters of flammable gas from one small pad, released over several minutes; harmless outdoors, but worth respecting in a closed vehicle or tent.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'Dalton\'s law of partial pressures',
      blocks: [
        {
          type: 'p',
          text: 'Air, exhaust and breathing gas are mixtures. In an ideal mixture the molecules ignore one another, so each gas pushes on the walls exactly as it would if it had the container to itself. The pressure one gas would exert alone is its [[gchem-partial-pressure|partial pressure]].',
        },
        {
          type: 'figure',
          svg: FIG_DALTON,
          alt: 'Three equal boxes. The first holds 6 small blue helium atoms with pressure 0.60 atm. The second holds 4 larger red oxygen molecules with pressure 0.40 atm. The third holds all 10 particles in the same box at the same temperature, with total pressure 1.00 atm.',
          caption: 'Same box, same temperature: the pressure counts particles, not their identity. 6 of the 10 particles are He, so He supplies $6/10$ of the pressure.',
        },
        {
          type: 'derivation',
          title: 'Dalton\'s law from $PV = nRT$',
          steps: [
            { tex: 'P_i = \\frac{n_i RT}{V}', why: 'Each gas $i$ obeys the ideal gas law on its own, in the full volume $V$ at the common temperature $T$.' },
            { tex: 'P_{\\text{total}} = \\frac{n_{\\text{total}} RT}{V} = \\frac{(n_1 + n_2 + \\cdots) RT}{V}', why: 'The mixture as a whole is an ideal gas with $n_{\\text{total}}$ moles.' },
            { tex: 'P_{\\text{total}} = P_1 + P_2 + \\cdots', why: 'Distribute $RT/V$ over the sum. This is Dalton\'s law.' },
            { tex: '\\frac{P_i}{P_{\\text{total}}} = \\frac{n_i RT/V}{n_{\\text{total}}RT/V} = \\frac{n_i}{n_{\\text{total}}} = x_i', why: 'Divide the two ideal-gas expressions; $RT/V$ cancels. The ratio $x_i$ is the [[gchem-mole-fraction|mole fraction]].' },
          ],
        },
        {
          type: 'theorem',
          name: 'Dalton\'s law and mole fractions',
          tex: 'P_{\\text{total}} = \\sum_i P_i, \\qquad P_i = x_i\\,P_{\\text{total}}, \\qquad x_i = \\frac{n_i}{n_{\\text{total}}}',
          text: 'Mole fractions have no units and add up to 1. For ideal gases, mole fraction = pressure fraction = volume fraction (by Avogadro\'s law).',
        },
        {
          type: 'table',
          headers: ['Gas in dry air', 'Mole fraction $x$', 'Partial pressure at $760\\ \\text{torr}$'],
          rows: [
            ['$\\ce{N2}$', '$0.7808$', '$593\\ \\text{torr}$'],
            ['$\\ce{O2}$', '$0.2095$', '$159\\ \\text{torr}$'],
            ['$\\ce{Ar}$', '$0.0093$', '$7.1\\ \\text{torr}$'],
            ['$\\ce{CO2}$', '$\\approx 0.0004$', '$\\approx 0.3\\ \\text{torr}$'],
          ],
          caption: 'Each partial pressure is $x_i \\times 760\\ \\text{torr}$. The oxygen your lungs care about is the $159\\ \\text{torr}$, not the $760$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the identity of the gas drops out',
          text: 'At the same temperature every molecule has the same average kinetic energy (the next lesson proves it). A heavy $\\ce{O2}$ molecule moves more slowly than a light He atom, but it hits harder, and the two effects cancel exactly in the pressure. So pressure depends only on **how many** particles there are, and each gas\'s share of the pressure is its share of the particles.',
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'numeric',
      prompt: 'A $5.00\\ \\text{L}$ diving cylinder at $20.0\\ ^\\circ\\text{C}$ contains $6.00\\ \\text{g}$ of helium and $16.0\\ \\text{g}$ of oxygen. What is the **total** pressure? Use He $4.003$ and $\\ce{O2}$ $31.998\\ \\text{g/mol}$, $R = 0.08206\\ \\text{L·atm/(mol·K)}$; 3 significant figures.',
      hint: 'Add the moles first: $n_{\\text{total}} = n_{\\ce{He}} + n_{\\ce{O2}}$. Then $P = n_{\\text{total}}RT/V$.',
      label: '$P_{\\text{total}} =$',
      unit: 'atm',
      answer: '(6.00/4.003+16.0/31.998)*0.08206*293.15/5.00',
      answerTex: '9.62\\ \\text{atm}',
      tolerance: 0.006,
      explanation: '$n_{\\ce{He}} = 6.00/4.003 = 1.499\\ \\text{mol}$, $n_{\\ce{O2}} = 16.0/31.998 = 0.500\\ \\text{mol}$, total $1.999\\ \\text{mol}$. $P = \\frac{(1.999)(0.08206)(293.15)}{5.00} = 9.62\\ \\text{atm}$. The partial pressures are $P_{\\ce{He}} = 7.21\\ \\text{atm}$ and $P_{\\ce{O2}} = 2.41\\ \\text{atm}$ (mole fraction of $\\ce{O2}$ $= 0.250$). Notice that 16 g of $\\ce{O2}$ contributes far less pressure than 6 g of He: pressure follows moles, not grams.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'concept',
      title: 'Collecting a gas over water',
      blocks: [
        {
          type: 'p',
          text: 'A simple way to capture a gas that does not dissolve much in water ($\\ce{H2}$, $\\ce{O2}$, $\\ce{N2}$) is to bubble it into an upside-down container full of water. The gas pushes the water out, and the container\'s scale reads its volume. But the trapped gas is never dry: water evaporates into it until the water vapor reaches its [[gchem-vapor-pressure|vapor pressure]], which depends only on temperature.',
        },
        {
          type: 'figure',
          svg: FIG_COLLECT,
          alt: 'A flask of zinc and hydrochloric acid is connected by a delivery tube to the mouth of an upside-down graduated cylinder standing in a trough of water. Bubbles rise into the cylinder, whose top holds hydrogen plus water vapor. The water level inside the cylinder equals the level in the trough, and an arrow shows atmospheric pressure pushing down on the trough.',
          caption: 'When the water levels inside and outside match, the gas inside is at atmospheric pressure, and by Dalton\'s law that pressure is shared between the collected gas and water vapor.',
        },
        {
          type: 'math',
          tex: 'P_{\\text{atm}} = P_{\\text{gas}} + P_{\\ce{H2O}} \\quad\\Longrightarrow\\quad P_{\\text{gas}} = P_{\\text{atm}} - P_{\\ce{H2O}}(T)',
        },
        {
          type: 'table',
          headers: ['$T$ (°C)', '15', '20', '22', '24', '25', '26', '28', '30'],
          rows: [['$P_{\\ce{H2O}}$ (torr)', '12.8', '17.5', '19.8', '22.4', '23.8', '25.2', '28.3', '31.8']],
          caption: 'Vapor pressure of water (standard textbook values, as in the OpenStax appendix).',
        },
        {
          type: 'derivation',
          title: 'Hydrogen from zinc: $0.312\\ \\text{L}$ collected over water at $22\\ ^\\circ\\text{C}$, barometer $752\\ \\text{torr}$',
          steps: [
            { tex: 'P_{\\ce{H2}} = 752 - 19.8 = 732.2\\ \\text{torr}', why: 'Dalton\'s law: subtract the vapor pressure of water at $22\\ ^\\circ\\text{C}$ from the table.' },
            { tex: 'P_{\\ce{H2}} = \\frac{732.2}{760}\\ \\text{atm} = 0.9634\\ \\text{atm}', why: 'Convert to atm to match $R = 0.08206$.' },
            { tex: 'n_{\\ce{H2}} = \\frac{(0.9634)(0.312)}{(0.08206)(295.15)} = 0.01241\\ \\text{mol}', why: 'Ideal gas law with the **dry** gas pressure and $T = 295.15\\ \\text{K}$.' },
            { tex: '\\ce{Zn + 2HCl -> ZnCl2 + H2} \\implies n_{\\ce{Zn}} = 0.01241\\ \\text{mol}', why: 'One mole of Zn makes one mole of $\\ce{H2}$.' },
            { tex: 'm_{\\ce{Zn}} = 0.01241 \\times 65.38 = 0.811\\ \\text{g}', why: 'Molar mass of zinc $65.38\\ \\text{g/mol}$.' },
          ],
          result: '$0.811\\ \\text{g}$ of zinc reacted. Forgetting the water vapor would overestimate it by about $2.7\\%$.',
        },
        {
          type: 'callout',
          variant: 'tip',
          text: 'Raise or lower the collection cylinder until the water inside and outside are level before reading the volume. Otherwise the gas is not at atmospheric pressure, and you would need a hydrostatic correction for the column of water.',
        },
      ],
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'error',
      prompt: 'Oxygen is collected over water: $0.250\\ \\text{L}$ at $25\\ ^\\circ\\text{C}$ with the barometer at $758\\ \\text{torr}$. A student calculates the moles of $\\ce{O2}$. Tap the first line that is wrong.',
      lines: [
        'Vapor pressure of water at $25\\ ^\\circ\\text{C}$: $23.8\\ \\text{torr}$',
        'The bottle contains oxygen, so $P_{\\ce{O2}} = 758\\ \\text{torr}$',
        '$P_{\\ce{O2}} = 758/760 = 0.997\\ \\text{atm}$',
        '$n = \\frac{PV}{RT} = \\frac{(0.997)(0.250)}{(0.08206)(298.15)} = 0.0102\\ \\text{mol}$',
      ],
      errorLines: [2],
      explanation: 'The bottle contains oxygen **and** water vapor, and $758\\ \\text{torr}$ is their total. By Dalton\'s law $P_{\\ce{O2}} = 758 - 23.8 = 734.2\\ \\text{torr} = 0.9661\\ \\text{atm}$, so $n = \\frac{(0.9661)(0.250)}{(0.08206)(298.15)} = 9.87 \\times 10^{-3}\\ \\text{mol}$. The student looked up the vapor pressure in line 1 and then never used it.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'Diving: partial pressures at depth',
      blocks: [
        {
          type: 'p',
          text: 'Every $10\\ \\text{m}$ of seawater adds about $1\\ \\text{atm}$, so at depth $d$ the absolute pressure is roughly $P \\approx 1 + d/(10\\ \\text{m})$ atm. A scuba regulator delivers gas at that ambient pressure, and the composition of the gas does not change. By Dalton\'s law, **every partial pressure scales with depth**: $P_i = x_i P$.',
        },
        {
          type: 'table',
          headers: ['Depth', '$P$ (atm)', '$P_{\\ce{O2}}$ on air (atm)', '$P_{\\ce{N2}}$ on air (atm)'],
          rows: [
            ['$0\\ \\text{m}$', '1.0', '0.21', '0.79'],
            ['$10\\ \\text{m}$', '2.0', '0.42', '1.58'],
            ['$20\\ \\text{m}$', '3.0', '0.63', '2.37'],
            ['$30\\ \\text{m}$', '4.0', '0.84', '3.16'],
            ['$40\\ \\text{m}$', '5.0', '1.05', '3.95'],
          ],
          caption: 'Air approximated as $21\\%\\ \\ce{O2}$, $79\\%\\ \\ce{N2}$.',
        },
        {
          type: 'list',
          items: [
            '**Oxygen toxicity.** Too much oxygen is harmful. Diving guidelines commonly cap $P_{\\ce{O2}}$ at about $1.4\\ \\text{atm}$ for the working part of a dive and $1.6\\ \\text{atm}$ as an absolute maximum, because central-nervous-system oxygen toxicity can cause sudden convulsions underwater. Long exposures at lower partial pressures can also irritate the lungs.',
            '**Nitrogen narcosis.** At high partial pressure nitrogen acts as a mild anesthetic, impairing judgment much like alcohol. Many divers notice it by about $30\\ \\text{m}$ on air ($P_{\\ce{N2}} \\approx 3.2\\ \\text{atm}$). It reverses on ascent.',
            '**Hypoxia.** Below roughly $0.16\\ \\text{atm}$ of $\\ce{O2}$ the body is short of oxygen. Deep mixtures therefore lower the oxygen fraction and replace some nitrogen with helium, which does not cause narcosis (heliox, trimix).',
          ],
        },
        {
          type: 'graph',
          x: [0, 70],
          y: [0, 5],
          xStep: 10,
          yStep: 0.5,
          functions: [
            { expr: 'f*(1 + x/10)', label: '$P_{\\ce{O2}}$ (atm)', color: 'red' },
            { expr: '(1 - f)*(1 + x/10)', label: '$P_{\\ce{N2}}$ (atm)', color: 'blue' },
          ],
          hlines: [
            { y: 1.4, label: 'O₂ limit 1.4', color: 'red' },
            { y: 1.6, color: 'orange' },
          ],
          sliders: [{ name: 'f', min: 0.16, max: 0.40, step: 0.01, value: 0.21, label: 'oxygen fraction $x_{\\ce{O2}}$' }],
          readouts: [
            { label: 'max depth at $P_{\\ce{O2}} = 1.4$ (m)', expr: '10*(1.4/f - 1)', digits: 1 },
            { label: '$P_{\\ce{N2}}$ at that depth (atm)', expr: '(1 - f)*1.4/f', digits: 2 },
          ],
          caption: 'Horizontal axis: depth in meters of seawater. Dashed lines: the $1.4\\ \\text{atm}$ working limit (red) and $1.6\\ \\text{atm}$ maximum (orange) for oxygen. Raise the oxygen fraction (nitrox) and the red line steepens, so it hits the $1.4\\ \\text{atm}$ limit at a shallower depth, while the nitrogen line drops. More oxygen means less narcosis and less nitrogen loading, but a shallower depth limit.',
        },
        {
          type: 'derivation',
          title: 'Maximum operating depth for air and for nitrox 32 ($32\\%\\ \\ce{O2}$)',
          steps: [
            { tex: 'x_{\\ce{O2}}\\,P = 1.4\\ \\text{atm} \\implies P = \\frac{1.4\\ \\text{atm}}{x_{\\ce{O2}}}', why: 'The depth limit is reached when the oxygen partial pressure hits the chosen limit.' },
            { tex: '\\text{air: } P = \\frac{1.4}{0.21} = 6.67\\ \\text{atm} \\implies d = 10(6.67 - 1) = 57\\ \\text{m}', why: 'Invert $P = 1 + d/10$: $d = 10(P - 1)$ meters.' },
            { tex: '\\text{nitrox 32: } P = \\frac{1.4}{0.32} = 4.375\\ \\text{atm} \\implies d = 10(4.375 - 1) = 34\\ \\text{m}', why: 'Same steps with $x_{\\ce{O2}} = 0.32$.' },
          ],
          result: 'Enriched air buys longer no-decompression times (less nitrogen) at the price of a shallower ceiling on depth. On air, narcosis becomes the practical limit long before $57\\ \\text{m}$.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Why pure-oxygen rebreathers stay shallow',
          text: 'Closed-circuit oxygen rebreathers, used by military combat swimmers because they release no bubbles, supply nearly $100\\%\\ \\ce{O2}$. With $x_{\\ce{O2}} \\approx 1$, the oxygen partial pressure **equals** the ambient pressure, which already exceeds $1.4\\ \\text{atm}$ a few meters down. Dalton\'s law, not equipment design, sets their shallow depth limits.',
        },
      ],
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'numeric',
      prompt: 'A diver breathes nitrox 36 ($36\\%\\ \\ce{O2}$). Using $P = 1 + d/10$ (atm, with $d$ in meters) and an oxygen limit of $1.4\\ \\text{atm}$, what is the maximum operating depth? Give 3 significant figures.',
      hint: 'Find the ambient pressure at which $0.36\\,P = 1.4$, then convert pressure to depth with $d = 10(P - 1)$.',
      label: '$d_{\\max} =$',
      unit: 'm',
      answer: '10*(1.4/0.36 - 1)',
      answerTex: '28.9\\ \\text{m}',
      tolerance: 0.06,
      explanation: '$P = 1.4/0.36 = 3.889\\ \\text{atm}$, so $d = 10(3.889 - 1) = 28.9\\ \\text{m}$. A common mistake is to stop at $10 \\times 3.889 = 38.9\\ \\text{m}$, forgetting that the first atmosphere is the air above the water, not seawater.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'concept',
      title: 'Altitude: same air, less of it',
      blocks: [
        {
          type: 'p',
          text: 'Going up does the reverse of diving. The atmosphere is well mixed, so **the mole fraction of oxygen stays $0.2095$** far higher than any aircraft flies. What drops is the total pressure, and $P_{\\ce{O2}} = 0.2095\\,P$ drops with it. How fast? Calculus answers.',
        },
        {
          type: 'derivation',
          title: 'The barometric formula (isothermal atmosphere)',
          steps: [
            { tex: 'dP = -\\rho g\\, dh', why: 'A thin layer of air of thickness $dh$ weighs $\\rho g\\,dh$ per unit area. The pressure below the layer exceeds the pressure above it by exactly that weight.' },
            { tex: '\\rho = \\frac{PM}{RT}', why: 'The gas-density formula from the first card, with $M = 0.02897\\ \\text{kg/mol}$ for air.' },
            { tex: '\\frac{dP}{P} = -\\frac{Mg}{RT}\\,dh', why: 'Substitute and separate variables: a [[separable-equation|separable differential equation]].' },
            { tex: '\\ln\\frac{P}{P_0} = -\\frac{Mg}{RT}\\,h', why: 'Integrate from sea level ($h = 0$, $P = P_0$) to height $h$, treating $T$ as constant.' },
            { tex: 'P = P_0\\, e^{-h/H}, \\qquad H = \\frac{RT}{Mg} = \\frac{(8.314)(288)}{(0.02897)(9.81)} = 8.4\\ \\text{km}', why: 'Exponentiate. The **scale height** $H$ is the climb over which pressure falls by a factor of $e$.' },
          ],
          result: 'Pressure, and with it the oxygen partial pressure, decays exponentially with altitude.',
        },
        {
          type: 'graph',
          x: [0, 10],
          y: [0, 1.1],
          xStep: 1,
          yStep: 0.1,
          functions: [
            { expr: 'exp(-x/(0.029254*k))', label: 'total $P$ (atm)', color: 'blue' },
            { expr: '0.2095*exp(-x/(0.029254*k))', label: '$P_{\\ce{O2}}$ (atm)', color: 'red' },
          ],
          points: [
            { x: 1.6, y: 'exp(-1.6/(0.029254*k))', label: 'Denver', color: 'blue' },
            { x: 2.4, y: 'exp(-2.4/(0.029254*k))', label: 'airliner cabin', color: 'blue' },
            { x: 8.85, y: 'exp(-8.85/(0.029254*k))', label: 'Everest', color: 'blue' },
          ],
          sliders: [{ name: 'k', min: 230, max: 310, step: 5, value: 288, label: 'air temperature $T$ (K)' }],
          readouts: [
            { label: 'scale height $H$ (km)', expr: '0.029254*k', digits: 2 },
            { label: '$P_{\\ce{O2}}$ at Everest (atm)', expr: '0.2095*exp(-8.85/(0.029254*k))', digits: 3 },
          ],
          caption: 'Horizontal axis: altitude in km. The isothermal model gives $0.83\\ \\text{atm}$ in Denver and $0.35\\ \\text{atm}$ on Everest (measured: about $0.33$, because the real atmosphere cools with height). Colder air is denser, so its pressure falls off faster: slide $T$ down and watch.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Aircrew, airborne troops and cabin altitude',
          text: 'Airliner cabins are pressurized to an equivalent altitude of about $2400\\ \\text{m}$ ($8000\\ \\text{ft}$), where $P_{\\ce{O2}}$ is about $0.16\\ \\text{atm}$, three-quarters of the sea-level value. Above roughly $3000\\ \\text{m}$ aircrew use supplemental oxygen, and high-altitude parachutists breathe bottled oxygen from before the door opens until well into the descent. Raising $x_{\\ce{O2}}$ in the breathing gas is the only way to put $P_{\\ce{O2}}$ back up when $P$ is low.',
        },
        {
          type: 'deepdive',
          title: 'Your lungs subtract water vapor too',
          blocks: [
            {
              type: 'p',
              text: 'Inhaled air is warmed to $37\\ ^\\circ\\text{C}$ and saturated with water vapor, whose vapor pressure at body temperature is $47\\ \\text{torr}$, exactly as in a gas collected over water. The oxygen pressure in your airways is therefore $P_{\\ce{O2}} = 0.2095\\,(P - 47\\ \\text{torr})$: $0.2095(760 - 47) = 149\\ \\text{torr}$ at sea level, but $0.2095(253 - 47) = 43\\ \\text{torr}$ on the summit of Everest, less than a third. The water vapor takes a fixed bite out of the pressure, which matters more and more as $P$ falls.',
            },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'truefalse',
      prompt: 'At an altitude of $5000\\ \\text{m}$, the air contains a smaller percentage of oxygen molecules than at sea level, and that is why breathing is harder.',
      answer: false,
      explanation: 'The **percentage** (mole fraction) of oxygen is still $20.95\\%$: the lower atmosphere is well mixed. What changes is the total pressure, about $0.55\\ \\text{atm}$ at $5000\\ \\text{m}$ by the barometric formula, so $P_{\\ce{O2}} = 0.2095 \\times 0.55 = 0.12\\ \\text{atm}$. Each breath holds fewer molecules of everything, oxygen included, and it is the partial pressure that drives oxygen into your blood.',
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'order',
      prompt: 'Hydrogen from a metal–acid reaction is collected over water. Put the steps for finding the mass of metal that reacted in order.',
      lines: [
        'Look up the vapor pressure of water at the collection temperature',
        'Subtract it from the barometric pressure to get the pressure of dry $\\ce{H2}$',
        'Convert the pressure to atm, the volume to L and the temperature to K',
        'Find moles of $\\ce{H2}$ with $n = PV/RT$',
        'Use the mole ratio and the metal\'s molar mass to get grams of metal',
      ],
      distractors: ['Add the vapor pressure of water to the barometric pressure'],
      explanation: 'Dalton\'s law comes first: the barometric pressure is the total of $\\ce{H2}$ and water vapor, so you **subtract** the vapor pressure to isolate the dry gas. Then the usual ideal-gas leg (in consistent units) gives moles, and the stoichiometry roadmap finishes the job. Adding the vapor pressure (the distractor) gets Dalton\'s law backwards.',
    },
  ],
  takeaways: [
    'Gas density is $d = PM/RT$: proportional to molar mass at fixed $T$ and $P$. Rearranged, $M = dRT/P$ identifies a gas by its molar mass. Gases heavier than air ($M > 29$) pool in low spaces.',
    'For gases in reactions, use $n = PV/RT$ as the moles ↔ liters leg of the stoichiometry roadmap. At equal $T$ and $P$, gas volumes react in the ratio of the coefficients.',
    'Dalton\'s law: $P_{\\text{total}} = \\sum P_i$, and $P_i = x_i P_{\\text{total}}$, because ideal-gas pressure depends only on the number of particles.',
    'A gas collected over water is wet: $P_{\\text{gas}} = P_{\\text{atm}} - P_{\\ce{H2O}}(T)$.',
    'At depth every partial pressure scales with ambient pressure. Oxygen toxicity limits $P_{\\ce{O2}}$ to about $1.4$–$1.6\\ \\text{atm}$, which sets the maximum operating depth $d = 10(1.4/x_{\\ce{O2}} - 1)$ m; nitrogen narcosis appears around $30\\ \\text{m}$ on air.',
    'At altitude $x_{\\ce{O2}}$ stays $0.2095$ but $P$ falls roughly as $e^{-h/8.4\\ \\text{km}}$, so $P_{\\ce{O2}}$ falls with it.',
  ],
  reading: [
    {
      title: 'OpenStax Chemistry 2e — Chapter 9: Gases',
      url: 'https://openstax.org/books/chemistry-2e/pages/9-introduction',
      source: 'openstax',
      note: 'Sections 9.3 and 9.4 cover gas density, molar mass, Dalton\'s law, collecting gases over water and gas stoichiometry with many worked examples.',
    },
    {
      title: 'Wikipedia — Partial pressure',
      url: 'https://en.wikipedia.org/wiki/Partial_pressure',
      source: 'wikipedia',
      note: 'Dalton\'s law, mole fractions and a section on partial pressures in diving breathing gases.',
    },
    {
      title: 'Wikipedia — Nitrogen narcosis',
      url: 'https://en.wikipedia.org/wiki/Nitrogen_narcosis',
      source: 'wikipedia',
      note: 'Symptoms, depth ranges and prevention, including why helium mixtures are used for deep diving.',
    },
    {
      title: 'Wikipedia — Barometric formula',
      url: 'https://en.wikipedia.org/wiki/Barometric_formula',
      source: 'wikipedia',
      note: 'The isothermal derivation from this lesson and the more accurate layered model of the standard atmosphere.',
    },
    {
      title: 'PhET Interactive Simulations',
      url: 'https://phet.colorado.edu/',
      source: 'other',
      note: 'The free "Gas Properties" simulation lets you mix heavy and light particles in a box and watch the pressures add.',
    },
  ],
};
