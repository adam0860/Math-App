import type { Lesson } from '../../types';

const FIG_EXOENDO = `<svg viewBox="0 0 500 284" xmlns="http://www.w3.org/2000/svg"><text x="110" y="22" text-anchor="middle" font-size="15" font-weight="600">Exothermic</text><line x1="20.0" y1="230.0" x2="20.0" y2="48.0" stroke="currentColor" stroke-width="1.8"/><polygon points="20.0,40.0 24.4,48.0 15.6,48.0" fill="currentColor"/><text x="12" y="135" text-anchor="middle" font-size="13" transform="rotate(-90 12 135)">enthalpy H</text><line x1="40" y1="80" x2="110" y2="80" stroke="currentColor" stroke-width="3"/><text x="75" y="72" text-anchor="middle" font-size="13">reactants</text><line x1="130" y1="190" x2="200" y2="190" stroke="currentColor" stroke-width="3"/><text x="165" y="210" text-anchor="middle" font-size="13">products</text><line x1="110" y1="80" x2="165" y2="80" stroke="currentColor" class="s-gray" stroke-width="1.2" stroke-dasharray="4 3"/><line x1="165.0" y1="80.0" x2="165.0" y2="180.0" stroke="currentColor" class="s-red" stroke-width="2.6"/><polygon points="165.0,190.0 159.5,180.0 170.5,180.0" fill="currentColor" class="f-red"/><text x="175" y="140.0" text-anchor="start" font-size="14" class="t-red" font-weight="600">ΔH &lt; 0</text><text x="110" y="258" text-anchor="middle" font-size="13" class="t-gray">heat flows out to the surroundings</text><text x="110" y="276" text-anchor="middle" font-size="13" class="t-gray">e.g. combustion, hand warmers</text><text x="365" y="22" text-anchor="middle" font-size="15" font-weight="600">Endothermic</text><line x1="275.0" y1="230.0" x2="275.0" y2="48.0" stroke="currentColor" stroke-width="1.8"/><polygon points="275.0,40.0 279.4,48.0 270.6,48.0" fill="currentColor"/><text x="267" y="135" text-anchor="middle" font-size="13" transform="rotate(-90 267 135)">enthalpy H</text><line x1="295" y1="190" x2="365" y2="190" stroke="currentColor" stroke-width="3"/><text x="330" y="210" text-anchor="middle" font-size="13">reactants</text><line x1="385" y1="80" x2="455" y2="80" stroke="currentColor" stroke-width="3"/><text x="420" y="72" text-anchor="middle" font-size="13">products</text><line x1="365" y1="190" x2="420" y2="190" stroke="currentColor" class="s-gray" stroke-width="1.2" stroke-dasharray="4 3"/><line x1="420.0" y1="190.0" x2="420.0" y2="90.0" stroke="currentColor" class="s-blue" stroke-width="2.6"/><polygon points="420.0,80.0 425.5,90.0 414.5,90.0" fill="currentColor" class="f-blue"/><text x="430" y="140.0" text-anchor="start" font-size="14" class="t-blue" font-weight="600">ΔH &gt; 0</text><text x="365" y="258" text-anchor="middle" font-size="13" class="t-gray">heat flows in from the surroundings</text><text x="365" y="276" text-anchor="middle" font-size="13" class="t-gray">e.g. cold packs, melting ice</text></svg>`;
const FIG_HESS_CO = `<svg viewBox="0 0 500 309" xmlns="http://www.w3.org/2000/svg"><line x1="30.0" y1="275.0" x2="30.0" y2="38.0" stroke="currentColor" stroke-width="1.8"/><polygon points="30.0,30.0 34.4,38.0 25.6,38.0" fill="currentColor"/><text x="20" y="150" text-anchor="middle" font-size="13" transform="rotate(-90 20 150)">enthalpy H (kJ)</text><line x1="60" y1="60.0" x2="440" y2="60.0" stroke="currentColor" stroke-width="3"/><text x="200" y="50.0" text-anchor="middle" font-size="14" font-weight="600">C(s) + O₂(g)</text><text x="440" y="50.0" text-anchor="end" font-size="12" class="t-gray">H = 0 (reference)</text><line x1="280" y1="113.3273" x2="440" y2="113.3273" stroke="currentColor" stroke-width="3"/><text x="372" y="105.3273" text-anchor="middle" font-size="14" font-weight="600">CO(g) + ½O₂(g)</text><line x1="60" y1="249.9031" x2="440" y2="249.9031" stroke="currentColor" stroke-width="3"/><text x="250" y="271.9031" text-anchor="middle" font-size="14" font-weight="600">CO₂(g)</text><line x1="110.0" y1="60.0" x2="110.0" y2="239.9" stroke="currentColor" class="s-red" stroke-width="2.6"/><polygon points="110.0,249.9 104.5,239.9 115.5,239.9" fill="currentColor" class="f-red"/><text x="120" y="148.95155" text-anchor="start" font-size="13" class="t-red">one step:</text><text x="120" y="166.95155" text-anchor="start" font-size="14" class="t-red" font-weight="600">ΔH = −393.5</text><line x1="300.0" y1="60.0" x2="300.0" y2="103.3" stroke="currentColor" class="s-purple" stroke-width="2.6"/><polygon points="300.0,113.3 294.5,103.3 305.5,103.3" fill="currentColor" class="f-purple"/><text x="292" y="91.66364999999999" text-anchor="end" font-size="13" class="t-purple" font-weight="600">step 1: ΔH₁ = ?</text><line x1="410.0" y1="113.3" x2="410.0" y2="239.9" stroke="currentColor" class="s-blue" stroke-width="2.6"/><polygon points="410.0,249.9 404.5,239.9 415.5,239.9" fill="currentColor" class="f-blue"/><text x="400" y="175.6152" text-anchor="end" font-size="13" class="t-blue">step 2:</text><text x="400" y="193.6152" text-anchor="end" font-size="14" class="t-blue" font-weight="600">ΔH₂ = −283.0</text><text x="250" y="297.9031" text-anchor="middle" font-size="13" font-weight="600">Same start, same finish: ΔH₁ + ΔH₂ = −393.5 kJ, so ΔH₁ = −110.5 kJ</text></svg>`;

export const lesson: Lesson = {
  id: 'gchem-enthalpy-hess',
  title: 'Enthalpy and Hess\'s Law',
  summary: 'Why chemists track enthalpy H = E + PV, exothermic and endothermic reactions, the rules of thermochemical equations, ΔH in stoichiometry, and Hess\'s law for reactions you cannot measure directly.',
  minutes: 19,
  objectives: [
    'Define enthalpy $H = E + PV$ and show why $\\Delta H = q_p$ at constant pressure; convert $\\Delta E$ to $\\Delta H$ with $\\Delta n_{\\text{gas}}RT$',
    'Classify reactions as exothermic or endothermic from the sign of $\\Delta H$ and an enthalpy diagram',
    'Scale and reverse thermochemical equations and account for physical states',
    'Use $\\Delta H$ as a stoichiometric conversion factor between moles (or grams) and heat',
    'Combine equations with Hess\'s law to find $\\Delta H$ for a reaction that cannot be measured directly',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Enthalpy: the heat at constant pressure',
      blocks: [
        {
          type: 'p',
          text: 'Most chemistry happens in open containers: beakers, engines, living cells, all at the steady pressure of the atmosphere. Under those conditions the heat a reaction gives off is not quite $\\Delta E$, because part of the energy may go into pushing the atmosphere back (or come from the atmosphere pushing in). Chemists fold that PV work into a new state function.',
        },
        {
          type: 'derivation',
          title: 'Why $\\Delta H = q_p$',
          steps: [
            { tex: '\\Delta E = q_p + w = q_p - P\\Delta V', why: 'First law at constant pressure $P$, where the only work is pressure–volume work, $w = -P\\Delta V$. The subscript $p$ marks heat at constant pressure.' },
            { tex: 'q_p = \\Delta E + P\\Delta V', why: 'Solve for the heat.' },
            { tex: 'H \\equiv E + PV', why: 'Define [[gchem-enthalpy|enthalpy]]. $E$, $P$ and $V$ are state functions, so $H$ is one too.' },
            { tex: '\\Delta H = \\Delta E + \\Delta(PV) = \\Delta E + P\\Delta V \\quad (P\\ \\text{constant})', why: 'At constant pressure, $\\Delta(PV) = P\\Delta V$.' },
            { tex: '\\Delta H = q_p', why: 'Compare with line 2: the right-hand sides are identical.' },
          ],
          result: 'At constant pressure, the heat a system absorbs equals its enthalpy change. That is why a coffee-cup calorimeter reports $\\Delta H$.',
        },
        {
          type: 'p',
          text: 'For reactions involving gases, $P\\Delta V$ comes from the change in moles of gas. At constant $T$ and $P$ the [[ideal-gas-law]] gives $P\\Delta V = \\Delta n_{\\text{gas}}RT$, so $\\Delta H = \\Delta E + \\Delta n_{\\text{gas}}RT$, where $\\Delta n_{\\text{gas}}$ = moles of gaseous products − moles of gaseous reactants.',
        },
        {
          type: 'derivation',
          title: 'Octane: from the bomb calorimeter\'s $\\Delta E$ to $\\Delta H$',
          steps: [
            { tex: '\\ce{C8H18(l) + 25/2 O2(g) -> 8CO2(g) + 9H2O(l)}', why: 'Per mole of octane. Liquids and solids have tiny volumes, so only gases count.' },
            { tex: '\\Delta n_{\\text{gas}} = 8 - 12.5 = -4.5\\ \\text{mol}', why: 'Gaseous products ($\\ce{CO2}$) minus gaseous reactants ($\\ce{O2}$). The gas volume shrinks.' },
            { tex: '\\Delta n_{\\text{gas}}RT = (-4.5)(8.314 \\times 10^{-3}\\ \\tfrac{\\text{kJ}}{\\text{mol·K}})(298\\ \\text{K}) = -11.1\\ \\text{kJ}', why: 'Write $R$ in kJ so the units match $\\Delta E$.' },
            { tex: '\\Delta H = -5458\\ \\text{kJ} + (-11.1\\ \\text{kJ}) = -5469\\ \\text{kJ}', why: 'Using $\\Delta E = -5458$ kJ/mol from the previous lesson\'s bomb calorimetry.' },
          ],
          result: 'At constant pressure the atmosphere pushes in as the gas volume shrinks, doing 11 kJ of work on the system, and that energy leaves as extra heat. The difference is 0.2%; for most reactions $\\Delta H$ and $\\Delta E$ are close.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why tabulate $H$ instead of $E$?',
          text: 'Because $H$ answers the practical question. When you burn fuel in a stove or mix reagents in a beaker, the pressure is fixed and the heat you can use is $q_p = \\Delta H$. Enthalpy automatically charges the reaction for the work of making room for its products in the atmosphere, so you never have to compute that work separately.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'mcq',
      prompt: 'For which reaction are $\\Delta H$ and $\\Delta E$ essentially equal?',
      options: [
        { text: '$\\ce{2H2(g) + O2(g) -> 2H2O(l)}$', why: 'Three moles of gas disappear ($\\Delta n_{\\text{gas}} = -3$), so $\\Delta H - \\Delta E = -3RT \\approx -7.4$ kJ.' },
        { text: '$\\ce{CaCO3(s) -> CaO(s) + CO2(g)}$', why: 'One mole of gas appears ($\\Delta n_{\\text{gas}} = +1$): the products must push back the atmosphere, so $\\Delta H$ exceeds $\\Delta E$ by $RT \\approx 2.5$ kJ.' },
        { text: '$\\ce{H2(g) + Cl2(g) -> 2HCl(g)}$', correct: true, why: 'Two moles of gas become two moles of gas: $\\Delta n_{\\text{gas}} = 0$, so $P\\Delta V \\approx 0$ and $\\Delta H \\approx \\Delta E$.' },
        { text: '$\\ce{N2(g) + 3H2(g) -> 2NH3(g)}$', why: 'Four moles of gas become two ($\\Delta n_{\\text{gas}} = -2$), so the two differ by about $-5.0$ kJ.' },
      ],
      explanation: '$\\Delta H - \\Delta E = \\Delta n_{\\text{gas}}RT$, and only gases contribute because condensed phases barely change volume. When the moles of gas are the same on both sides, no PV work is done at constant pressure and the two quantities coincide.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Exothermic and endothermic',
      blocks: [
        {
          type: 'p',
          text: 'The sign of $\\Delta H$ tells you which way heat flows. A reaction with $\\Delta H < 0$ is [[gchem-exothermic|exothermic]]: the products have lower enthalpy than the reactants, and the difference leaves as heat. A reaction with $\\Delta H > 0$ is [[gchem-endothermic|endothermic]]: it absorbs heat from its surroundings.',
        },
        {
          type: 'figure',
          svg: FIG_EXOENDO,
          alt: 'Two enthalpy diagrams. Exothermic: reactants on a high level, products on a lower level, a red downward arrow labelled delta H less than zero; heat flows out, e.g. combustion and hand warmers. Endothermic: reactants low, products high, a blue upward arrow labelled delta H greater than zero; heat flows in, e.g. cold packs and melting ice.',
          caption: 'An enthalpy diagram shows only the starting and ending levels. The arrow always points from reactants to products, so its direction gives the sign of $\\Delta H$.',
        },
        {
          type: 'p',
          text: 'At the molecular level, breaking a bond always costs energy and forming one always releases energy. A reaction is exothermic when the bonds formed are stronger overall than the bonds broken. In combustion, weak-ish C–H and O=O bonds become very strong C=O and O–H bonds, so a lot of energy comes out.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Hot means exothermic, and the system loses energy',
          text: 'A hand warmer feels hot because its reaction (iron rusting) is releasing energy into your hand: the **system** loses enthalpy, so $\\Delta H < 0$, while the **surroundings** warm up. A cold pack is the reverse. Students who reason "it got hot, so the energy went up, so $\\Delta H$ is positive" are measuring the surroundings and reporting the sign for the system.',
        },
        {
          type: 'callout',
          variant: 'note',
          text: '"Exothermic" does not mean "fast" or "happens by itself". Wood is exothermic to burn but sits on a shelf for years; how fast is the kinetics unit\'s job, and whether a reaction is favorable at all also depends on entropy (the thermodynamics unit).',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'fill',
      prompt: 'Choose the words.',
      template: 'When ammonium nitrate dissolves in a cold pack, the water around it gets colder. The dissolving process is ___ and its $\\Delta H$ is ___.',
      blanks: [{ answers: ['endothermic'] }, { answers: ['positive'] }],
      wordBank: ['exothermic', 'endothermic', 'positive', 'negative'],
      explanation: 'The water (the surroundings) cools because heat flows **from** it **into** the dissolving salt (the system). The system absorbs heat, so the process is endothermic and $\\Delta H > 0$ (+25.7 kJ/mol for $\\ce{NH4NO3}$). Always ask which way heat crosses the boundary of the *system*.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Thermochemical equations',
      blocks: [
        {
          type: 'p',
          text: 'A [[gchem-thermochemical-equation|thermochemical equation]] is a balanced equation with physical states and its $\\Delta H$. The $\\Delta H$ belongs to the equation **exactly as written**: the coefficients are read as moles, and the units "kJ" (or "kJ/mol", meaning per mole of reaction) refer to that many moles of each substance.',
        },
        {
          type: 'math',
          tex: '\\ce{2H2(g) + O2(g) -> 2H2O(l)} \\qquad \\Delta H = -571.6\\ \\text{kJ}',
          caption: 'Reads: when 2 mol of $\\ce{H2}$ react with 1 mol of $\\ce{O2}$ to give 2 mol of liquid water, 571.6 kJ of heat is released.',
        },
        {
          type: 'derivation',
          title: 'Three rules, applied to that equation',
          steps: [
            { tex: '\\ce{H2(g) + 1/2 O2(g) -> H2O(l)} \\qquad \\Delta H = \\tfrac{1}{2}(-571.6) = -285.8\\ \\text{kJ}', why: '**Scale:** multiply every coefficient by a factor and multiply $\\Delta H$ by the same factor. Enthalpy is extensive: half the stuff, half the heat. Fractional coefficients are fine here; they mean moles.' },
            { tex: '\\ce{2H2O(l) -> 2H2(g) + O2(g)} \\qquad \\Delta H = +571.6\\ \\text{kJ}', why: '**Reverse:** flip the equation and flip the sign of $\\Delta H$. Splitting water costs exactly what forming it released.' },
            { tex: '\\ce{2H2(g) + O2(g) -> 2H2O(g)} \\qquad \\Delta H = -483.6\\ \\text{kJ}', why: '**States matter:** making water *vapor* releases 88.0 kJ less, because the 2 mol of vapor have not yet given up their heat of condensation ($2 \\times 44.0$ kJ).' },
          ],
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why reversing just flips the sign',
          text: 'Enthalpy is a state function. Run a reaction forward and then backward and you are back at the starting state, so the two $\\Delta H$ values must add to zero. If reversing gave anything other than $-\\Delta H$, you could cycle forward and back and create energy from nothing, violating the first law.',
        },
        {
          type: 'compare',
          left: {
            title: 'Wrong',
            tone: 'bad',
            tex: ['\\ce{H2O(g) -> H2O(l)}\\quad \\Delta H = 0', '\\text{"same substance, so no change"}'],
          },
          right: {
            title: 'Right',
            tone: 'good',
            tex: ['\\ce{H2O(g) -> H2O(l)}\\quad \\Delta H = -44.0\\ \\text{kJ}', '\\text{condensing releases the heat of vaporization}'],
          },
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'numeric',
      prompt: 'Given $\\ce{2H2(g) + O2(g) -> 2H2O(g)}$, $\\Delta H = -483.6$ kJ, find $\\Delta H$ for $\\ce{H2O(g) -> H2(g) + 1/2 O2(g)}$. Give one decimal place with the sign.',
      hint: 'The target is the given equation reversed and halved. Apply both changes to $\\Delta H$.',
      label: '$\\Delta H =$',
      unit: 'kJ',
      answer: '483.6/2',
      answerTex: '+241.8\\ \\text{kJ}',
      tolerance: 0.05,
      explanation: 'Reversing changes the sign: $+483.6$ kJ for $\\ce{2H2O(g) -> 2H2(g) + O2(g)}$. Halving the coefficients halves $\\Delta H$: $+241.8$ kJ. Decomposing water vapor is endothermic, and 241.8 kJ/mol is the total energy (electrical work plus heat) that must be supplied to split one mole of it.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'Stoichiometry with ΔH',
      blocks: [
        {
          type: 'p',
          text: 'Because $\\Delta H$ is tied to the coefficients, it behaves like one more mole ratio: "kJ per mole of this substance". Plug it into the same roadmap you used in Foundations [[stoichiometry]]: grams → moles → (× $\\Delta H$ ratio) → kJ.',
        },
        {
          type: 'derivation',
          title: 'Heat from burning 1.00 kg of propane (a grill or field-stove canister)',
          steps: [
            { tex: '\\ce{C3H8(g) + 5O2(g) -> 3CO2(g) + 4H2O(l)} \\qquad \\Delta H = -2220\\ \\text{kJ}', why: 'The thermochemical equation, per mole of propane.' },
            { tex: '1000\\ \\cancel{\\text{g}} \\times \\frac{1\\ \\text{mol}}{44.10\\ \\cancel{\\text{g}}} = 22.68\\ \\text{mol}\\ \\ce{C3H8}', why: 'Grams to moles with the molar mass.' },
            { tex: '22.68\\ \\cancel{\\text{mol}\\ \\ce{C3H8}} \\times \\frac{-2220\\ \\text{kJ}}{1\\ \\cancel{\\text{mol}\\ \\ce{C3H8}}} = -5.03 \\times 10^{4}\\ \\text{kJ}', why: 'The $\\Delta H$ ratio converts moles of propane to heat. Negative: heat leaves the system.' },
          ],
          result: 'One kilogram of propane releases about 50 MJ.',
        },
        {
          type: 'derivation',
          title: 'Propane needed to bring 1.00 L of water from 20 °C to 100 °C with a 40%-efficient stove',
          steps: [
            { tex: 'q_{\\text{water}} = (1000\\ \\text{g})(4.184\\ \\tfrac{\\text{J}}{\\text{g·°C}})(80\\ \\text{°C}) = 334.7\\ \\text{kJ}', why: 'Calorimetry from the previous lesson.' },
            { tex: 'q_{\\text{needed}} = \\frac{334.7\\ \\text{kJ}}{0.40} = 836.8\\ \\text{kJ}', why: 'Only 40% of the flame\'s heat reaches the water; the rest warms the air and the pot.' },
            { tex: '836.8\\ \\cancel{\\text{kJ}} \\times \\frac{1\\ \\text{mol}}{2220\\ \\cancel{\\text{kJ}}} \\times \\frac{44.10\\ \\text{g}}{1\\ \\text{mol}} = 16.6\\ \\text{g}\\ \\ce{C3H8}', why: 'Run the roadmap backwards: heat → moles → grams. Use the magnitude of $\\Delta H$ since we are asking how much heat is supplied.' },
          ],
          result: 'About 17 g of propane per liter of water. A standard 100 g canister heats roughly six liters this way, which is the kind of planning a field kitchen or a backpacker does.',
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'Write the substance next to every "mol" and the sign next to every kJ. Exams typically ask "how much heat is released" (give a positive magnitude) or "what is $q$" (give the signed value). Read which one is wanted.',
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'numeric',
      prompt: 'Methane burns by $\\ce{CH4(g) + 2O2(g) -> CO2(g) + 2H2O(l)}$, $\\Delta H = -890.5$ kJ. How much heat is **released** when 25.0 g of methane burns? Give a positive number in kJ to three significant figures ($M(\\ce{CH4}) = 16.04$ g/mol).',
      hint: 'Grams → moles of $\\ce{CH4}$, then multiply by 890.5 kJ per mole.',
      label: 'heat released $=$',
      unit: 'kJ',
      answer: '25.0/16.04*890.5',
      answerTex: '1.39 \\times 10^{3}\\ \\text{kJ}',
      tolerance: 3,
      explanation: '$25.0\\ \\text{g} \\div 16.04\\ \\text{g/mol} = 1.559$ mol $\\ce{CH4}$. $1.559\\ \\text{mol} \\times 890.5\\ \\text{kJ/mol} = 1388$ kJ, or $1.39 \\times 10^{3}$ kJ released ($q = -1.39 \\times 10^{3}$ kJ for the system). The coefficient of $\\ce{CH4}$ is 1, so the ratio is simply 890.5 kJ per mol of methane.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'concept',
      title: 'Hess\'s law',
      blocks: [
        {
          type: 'p',
          text: 'Suppose you want $\\Delta H$ for burning carbon to carbon monoxide, $\\ce{C(s) + 1/2 O2(g) -> CO(g)}$. You cannot measure it directly: burn carbon in limited oxygen and you get a mixture of $\\ce{CO}$ and $\\ce{CO2}$. But two *other* reactions are easy to run to completion in a bomb calorimeter, and they connect the same states.',
        },
        {
          type: 'theorem',
          name: 'Hess\'s law',
          text: 'If a reaction can be written as the sum of two or more steps, its $\\Delta H$ is the sum of the steps\' $\\Delta H$ values. This is [[gchem-hess-law|Hess\'s law]]; the steps need not be how the reaction actually happens.',
        },
        {
          type: 'figure',
          svg: FIG_HESS_CO,
          alt: 'Enthalpy diagram. The top level is C(s) plus O2(g) at H equals zero. A middle level on the right is CO(g) plus one half O2(g). The bottom level is CO2(g). A red arrow goes straight down from top to bottom labelled one step, delta H equals minus 393.5. A purple arrow goes from top to middle labelled step 1, delta H1 unknown, and a blue arrow from middle to bottom labelled step 2, delta H2 equals minus 283.0. The note says delta H1 plus delta H2 equals minus 393.5, so delta H1 equals minus 110.5 kJ.',
          caption: 'Two routes from the same start to the same finish must have the same total $\\Delta H$. Knowing the direct route and the second step pins down the first step.',
        },
        {
          type: 'derivation',
          title: 'Adding equations to find $\\Delta H$ for $\\ce{C(s) + 1/2 O2(g) -> CO(g)}$',
          steps: [
            { tex: '\\ce{C(s) + O2(g) -> CO2(g)} \\qquad \\Delta H = -393.5\\ \\text{kJ}', why: 'Keep as written: it has C on the left, where the target needs it.' },
            { tex: '\\ce{CO2(g) -> CO(g) + 1/2 O2(g)} \\qquad \\Delta H = +283.0\\ \\text{kJ}', why: 'Reverse $\\ce{CO(g) + 1/2 O2(g) -> CO2(g)}$ ($\\Delta H = -283.0$ kJ) to put CO on the product side; the sign flips.' },
            { tex: '\\ce{C(s) + CO2(g) + O2(g) -> CO2(g) + CO(g) + 1/2 O2(g)}', why: 'Add the two equations: all reactants on the left, all products on the right. $\\ce{CO2}$ appears on both sides and cancels.' },
            { tex: '\\ce{C(s) + 1/2 O2(g) -> CO(g)}', why: 'One mole of $\\ce{O2}$ on the left minus half a mole on the right leaves $\\tfrac{1}{2}\\ce{O2}$ on the left: the target equation.' },
            { tex: '\\Delta H = -393.5 + 283.0 = -110.5\\ \\text{kJ}', why: 'Add the $\\Delta H$ values of the adjusted steps.' },
          ],
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why Hess\'s law works',
          text: 'Enthalpy is a state function. The path "C → $\\ce{CO2}$ → CO" is an imaginary detour, but $\\Delta H$ depends only on where you start and where you end, exactly like the elevation change between two towns. Every equation you add is a leg of the trip; the legs\' enthalpy changes must add up to the change between the endpoints.',
        },
      ],
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'truefalse',
      prompt: 'Hess\'s law gives the right $\\Delta H$ only if the reaction really proceeds through the intermediate steps you used in the calculation.',
      answer: false,
      explanation: 'The steps can be pure bookkeeping. Carbon does not burn to $\\ce{CO2}$ and then "unburn" to CO; we just used those equations because their $\\Delta H$ values were known. Because $H$ is a state function, *any* sequence of equations that adds up to the target gives the same $\\Delta H$, whatever the actual mechanism.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'Hess\'s law with several steps',
      blocks: [
        {
          type: 'steps',
          items: [
            { title: 'Write the target', text: 'Note which side each substance is on and its coefficient.' },
            { title: 'Pick one equation per substance', text: 'For each target substance, find a given equation in which it appears (ideally only one). Elements and $\\ce{O2}$ usually sort themselves out.' },
            { title: 'Reverse and scale', text: 'Flip an equation if the substance is on the wrong side (change the sign of $\\Delta H$); multiply it to get the right coefficient (multiply $\\Delta H$ too).' },
            { title: 'Add and cancel', text: 'Add the adjusted equations; cancel anything that appears on both sides. Check that exactly the target remains.' },
            { title: 'Add the $\\Delta H$ values', text: 'Sum the adjusted values. Sanity check the sign.' },
          ],
        },
        {
          type: 'p',
          text: 'Acetylene, $\\ce{C2H2}$, is the welding gas of the oxyacetylene torch. Its $\\Delta H$ of formation from graphite and hydrogen cannot be measured directly (carbon and hydrogen do not cleanly combine to acetylene), but three combustion reactions are easy to measure.',
        },
        {
          type: 'math',
          tex: '\\begin{array}{lr} (1)\\ \\ce{C(s) + O2(g) -> CO2(g)} & \\Delta H = -393.5\\ \\text{kJ} \\\\ (2)\\ \\ce{H2(g) + 1/2 O2(g) -> H2O(l)} & \\Delta H = -285.8\\ \\text{kJ} \\\\ (3)\\ \\ce{C2H2(g) + 5/2 O2(g) -> 2CO2(g) + H2O(l)} & \\Delta H = -1299.5\\ \\text{kJ} \\end{array}',
          caption: 'Target: $\\ce{2C(s) + H2(g) -> C2H2(g)}$.',
        },
        {
          type: 'derivation',
          title: 'Assembling the target',
          steps: [
            { tex: '2 \\times (1):\\ \\ce{2C(s) + 2O2(g) -> 2CO2(g)} \\qquad -787.0\\ \\text{kJ}', why: 'The target has 2 C on the left; equation (1) has 1, so double it and double its $\\Delta H$.' },
            { tex: '(2):\\ \\ce{H2(g) + 1/2 O2(g) -> H2O(l)} \\qquad -285.8\\ \\text{kJ}', why: 'The target has 1 $\\ce{H2}$ on the left, as in (2). Keep it unchanged.' },
            { tex: '-(3):\\ \\ce{2CO2(g) + H2O(l) -> C2H2(g) + 5/2 O2(g)} \\qquad +1299.5\\ \\text{kJ}', why: 'The target has $\\ce{C2H2}$ as a *product*, but (3) has it as a reactant: reverse (3) and flip the sign.' },
            { tex: '\\text{cancel: } \\ce{2CO2},\\ \\ce{H2O},\\ \\tfrac{5}{2}\\ce{O2}\\ \\text{on each side} \\implies \\ce{2C(s) + H2(g) -> C2H2(g)}', why: 'Left side has $2 + \\tfrac{1}{2} = \\tfrac{5}{2}$ mol $\\ce{O2}$, right side has $\\tfrac{5}{2}$: they cancel, as do the 2 $\\ce{CO2}$ and 1 $\\ce{H2O}$. Only the target remains.' },
            { tex: '\\Delta H = -787.0 - 285.8 + 1299.5 = +226.7\\ \\text{kJ}', why: 'Sum of the adjusted values.' },
          ],
          result: 'Forming acetylene from its elements is strongly **endothermic** (+226.7 kJ/mol). That stored enthalpy is released again when acetylene burns, one reason its flame (about 3,100 °C with pure oxygen) can cut steel.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Hess\'s law is linear algebra',
          text: 'Treat each equation as a vector of coefficients over the species (reactants negative, products positive). The target is a linear combination $\\sum c_i \\mathbf{r}_i$ of the given reaction vectors, and $\\Delta H_{\\text{target}} = \\sum c_i \\Delta H_i$ with the **same** weights $c_i$. Here $c = (2, 1, -1)$. A program can find the weights by solving a linear system, exactly as you did by inspection.',
        },
      ],
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'order',
      prompt: 'You want $\\Delta H$ for $\\ce{C(s) + 2H2(g) -> CH4(g)}$ from the combustion equations of carbon, hydrogen and methane. Put the steps of the method in order.',
      lines: [
        'Write the target equation and note that C and $\\ce{H2}$ must be reactants and $\\ce{CH4}$ a product',
        'Match each target substance to the combustion equation it appears in: C, $\\ce{H2}$ and $\\ce{CH4}$ each have their own',
        'Reverse the methane combustion (flipping the sign of its $\\Delta H$) and double the hydrogen combustion (doubling its $\\Delta H$)',
        'Add the adjusted equations and cancel the $\\ce{CO2}$, $\\ce{H2O}$ and $\\ce{O2}$ that appear on both sides',
        'Confirm that the sum is the target equation, then add the adjusted $\\Delta H$ values',
      ],
      distractors: ['Add the three combustion $\\Delta H$ values exactly as given'],
      explanation: 'Target first, then one equation per substance, then reverse/scale (with $\\Delta H$ adjusted the same way), then add and cancel, and only then sum the enthalpies. The distractor skips the adjustments: methane is a *product* of the target but a *reactant* in its combustion, so its equation must be reversed, and the target needs 2 $\\ce{H2}$, so hydrogen\'s equation must be doubled.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'numeric',
      prompt: 'Carry out that calculation. Use $\\ce{C(s) + O2(g) -> CO2(g)}$, $\\Delta H = -393.5$ kJ; $\\ce{H2(g) + 1/2 O2(g) -> H2O(l)}$, $\\Delta H = -285.8$ kJ; $\\ce{CH4(g) + 2O2(g) -> CO2(g) + 2H2O(l)}$, $\\Delta H = -890.5$ kJ. Find $\\Delta H$ for $\\ce{C(s) + 2H2(g) -> CH4(g)}$ (one decimal place, with sign).',
      hint: 'Carbon equation as written + 2 × hydrogen equation + reversed methane equation.',
      label: '$\\Delta H =$',
      unit: 'kJ',
      answer: '-393.5 + 2*(-285.8) + 890.5',
      answerTex: '-74.6\\ \\text{kJ}',
      tolerance: 0.05,
      explanation: 'Add $\\ce{C + O2 -> CO2}$ ($-393.5$), $\\ce{2H2 + O2 -> 2H2O(l)}$ ($2 \\times -285.8 = -571.6$) and $\\ce{CO2 + 2H2O(l) -> CH4 + 2O2}$ ($+890.5$). The $\\ce{CO2}$, 2 $\\ce{H2O}$ and 2 $\\ce{O2}$ cancel, leaving $\\ce{C + 2H2 -> CH4}$ with $\\Delta H = -393.5 - 571.6 + 890.5 = -74.6$ kJ. This is the standard enthalpy of formation of methane, the subject of the next lesson.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'error',
      prompt: 'Find $\\Delta H$ for $\\ce{C(s, graphite) -> C(s, diamond)}$ from the combustions $\\ce{C(graphite) + O2 -> CO2}$, $\\Delta H = -393.5$ kJ, and $\\ce{C(diamond) + O2 -> CO2}$, $\\Delta H = -395.4$ kJ. Tap the first wrong line.',
      lines: [
        'Keep the graphite combustion: $\\ce{C(graphite) + O2 -> CO2}$, $\\Delta H = -393.5$ kJ',
        'Reverse the diamond combustion: $\\ce{CO2 -> C(diamond) + O2}$, $\\Delta H = -395.4$ kJ',
        'Add and cancel $\\ce{CO2}$ and $\\ce{O2}$: $\\ce{C(graphite) -> C(diamond)}$',
        '$\\Delta H = -393.5 + (-395.4) = -788.9$ kJ',
      ],
      errorLines: [2],
      explanation: 'Reversing an equation must flip the sign of its $\\Delta H$: the reversed diamond combustion has $\\Delta H = +395.4$ kJ. Then $\\Delta H = -393.5 + 395.4 = +1.9$ kJ. Turning graphite into diamond is slightly endothermic, which is why graphite, not diamond, is the standard state of carbon. (A result of $-788.9$ kJ should also look suspicious: that is twice a combustion\'s worth of heat from a mere change of crystal structure.)',
    },
  ],
  takeaways: [
    'Enthalpy $H = E + PV$ is a state function; at constant pressure $\\Delta H = q_p$, and $\\Delta H = \\Delta E + \\Delta n_{\\text{gas}}RT$ for reactions involving gases.',
    '$\\Delta H < 0$: exothermic, heat flows out of the system to the surroundings. $\\Delta H > 0$: endothermic, heat flows in.',
    'A thermochemical equation\'s $\\Delta H$ is for the equation as written: scale the equation, scale $\\Delta H$; reverse it, change the sign; physical states change the value (e.g. 44.0 kJ/mol between $\\ce{H2O(l)}$ and $\\ce{H2O(g)}$).',
    '$\\Delta H$ is a conversion factor: grams → moles → kJ, with the sign telling you the direction of heat flow.',
    'Hess\'s law: if equations add up to the target, their $\\Delta H$ values add up to the target\'s $\\Delta H$, because enthalpy depends only on the initial and final states.',
  ],
  reading: [
    {
      title: 'OpenStax Chemistry 2e — Chapter 5: Thermochemistry',
      url: 'https://openstax.org/books/chemistry-2e/pages/5-introduction',
      source: 'openstax',
      note: 'Section 5.3 (Enthalpy) defines $H = E + PV$, states the rules for thermochemical equations and works several Hess\'s-law examples, including the acetylene problem.',
    },
    {
      title: 'Khan Academy — Chemistry',
      url: 'https://www.khanacademy.org/science/chemistry',
      source: 'khan',
      note: 'The thermodynamics unit has short videos on enthalpy and step-by-step Hess\'s law problems if you want more practice.',
    },
    {
      title: 'Wikipedia — Hess\'s law',
      url: 'https://en.wikipedia.org/wiki/Hess%27s_law',
      source: 'wikipedia',
      note: 'Germain Hess\'s 1840 discovery, its connection to the first law, and its extension to free energy and entropy.',
    },
    {
      title: 'Wikipedia — Enthalpy',
      url: 'https://en.wikipedia.org/wiki/Enthalpy',
      source: 'wikipedia',
      note: 'The definition $H = U + pV$, why it is the natural energy for constant-pressure processes, and its uses in engineering.',
    },
  ],
};
