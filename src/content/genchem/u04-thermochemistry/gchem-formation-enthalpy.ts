import type { Lesson } from '../../types';

const FIG_PATH = `<svg viewBox="0 0 500 325" xmlns="http://www.w3.org/2000/svg"><line x1="28.0" y1="290.0" x2="28.0" y2="38.0" stroke="currentColor" stroke-width="1.8"/><polygon points="28.0,30.0 32.4,38.0 23.6,38.0" fill="currentColor"/><text x="18" y="170" text-anchor="middle" font-size="13" transform="rotate(-90 18 170)">enthalpy H (not to scale)</text><line x1="200" y1="60" x2="470" y2="60" stroke="currentColor" stroke-width="3" class="s-green"/><text x="335" y="34" text-anchor="middle" font-size="13" class="t-green" font-weight="600">Elements in standard states (H° ≡ 0)</text><text x="335" y="51" text-anchor="middle" font-size="13" class="t-green">C(s, graphite) + 2H₂(g) + 2O₂(g)</text><line x1="50" y1="120" x2="230" y2="120" stroke="currentColor" stroke-width="3"/><text x="140" y="110" text-anchor="middle" font-size="14" font-weight="600">CH₄(g) + 2O₂(g)</text><line x1="50" y1="265" x2="470" y2="265" stroke="currentColor" stroke-width="3"/><text x="260" y="287" text-anchor="middle" font-size="14" font-weight="600">CO₂(g) + 2H₂O(l)</text><line x1="90.0" y1="120.0" x2="90.0" y2="255.0" stroke="currentColor" class="s-red" stroke-width="2.6"/><polygon points="90.0,265.0 84.5,255.0 95.5,255.0" fill="currentColor" class="f-red"/><text x="100" y="190" text-anchor="start" font-size="13" class="t-red">direct:</text><text x="100" y="208" text-anchor="start" font-size="14" class="t-red" font-weight="600">ΔH°rxn = ?</text><line x1="215.0" y1="120.0" x2="215.0" y2="70.0" stroke="currentColor" class="s-purple" stroke-width="2.6"/><polygon points="215.0,60.0 220.5,70.0 209.5,70.0" fill="currentColor" class="f-purple"/><text x="225" y="86" text-anchor="start" font-size="12" class="t-purple" font-weight="600">① −ΣnΔH°f(reactants)</text><text x="225" y="104" text-anchor="start" font-size="12" class="t-purple">= −[(−74.6) + 2(0)] = +74.6</text><line x1="440.0" y1="60.0" x2="440.0" y2="255.0" stroke="currentColor" class="s-blue" stroke-width="2.6"/><polygon points="440.0,265.0 434.5,255.0 445.5,255.0" fill="currentColor" class="f-blue"/><text x="430" y="160" text-anchor="end" font-size="12" class="t-blue" font-weight="600">② +ΣnΔH°f(products)</text><text x="430" y="178" text-anchor="end" font-size="12" class="t-blue">= −393.5 + 2(−285.8)</text><text x="430" y="196" text-anchor="end" font-size="12" class="t-blue">= −965.1</text><text x="250" y="315" text-anchor="middle" font-size="14" font-weight="600">ΔH°rxn = ① + ② = +74.6 + (−965.1) = −890.5 kJ</text></svg>`;
const FIG_DENSITY = `<svg viewBox="0 0 500 265" xmlns="http://www.w3.org/2000/svg"><text x="203.0" y="22" text-anchor="middle" font-size="13" class="t-orange" font-weight="600">per gram (kJ/g)</text><text x="400.0" y="22" text-anchor="middle" font-size="13" class="t-teal" font-weight="600">per milliliter (kJ/mL)</text><text x="203.0" y="38" text-anchor="middle" font-size="11" class="t-gray">matters when weight is limited</text><text x="400.0" y="38" text-anchor="middle" font-size="11" class="t-gray">matters when tank space is limited</text><text x="120" y="64" text-anchor="end" font-size="12">Hydrogen (liquid)</text><rect x="128" y="53" width="146.7" height="16" fill="currentColor" class="f-orange" fill-opacity="0.85"/><text x="278.68965517241384" y="65" text-anchor="start" font-size="11">141.8</text><rect x="330" y="53" width="35.0" height="16" fill="currentColor" class="f-teal" fill-opacity="0.85"/><text x="369.0" y="65" text-anchor="start" font-size="11">10.0</text><text x="120" y="91" text-anchor="end" font-size="12">Methane (LNG)</text><rect x="128" y="80" width="57.4" height="16" fill="currentColor" class="f-orange" fill-opacity="0.85"/><text x="189.41379310344826" y="92" text-anchor="start" font-size="11">55.5</text><rect x="330" y="80" width="81.5" height="16" fill="currentColor" class="f-teal" fill-opacity="0.85"/><text x="415.55" y="92" text-anchor="start" font-size="11">23.3</text><text x="120" y="118" text-anchor="end" font-size="12">Propane</text><rect x="128" y="107" width="52.0" height="16" fill="currentColor" class="f-orange" fill-opacity="0.85"/><text x="184.0344827586207" y="119" text-anchor="start" font-size="11">50.3</text><rect x="330" y="107" width="86.8" height="16" fill="currentColor" class="f-teal" fill-opacity="0.85"/><text x="420.8" y="119" text-anchor="start" font-size="11">24.8</text><text x="120" y="145" text-anchor="end" font-size="12">Octane / gasoline</text><rect x="128" y="134" width="49.6" height="16" fill="currentColor" class="f-orange" fill-opacity="0.85"/><text x="181.55172413793105" y="146" text-anchor="start" font-size="11">47.9</text><rect x="330" y="134" width="118.0" height="16" fill="currentColor" class="f-teal" fill-opacity="0.85"/><text x="451.95" y="146" text-anchor="start" font-size="11">33.7</text><text x="120" y="172" text-anchor="end" font-size="12">Jet fuel (JP-8)</text><rect x="128" y="161" width="47.6" height="16" fill="currentColor" class="f-orange" fill-opacity="0.85"/><text x="179.58620689655174" y="173" text-anchor="start" font-size="11">≈46</text><rect x="330" y="161" width="129.5" height="16" fill="currentColor" class="f-teal" fill-opacity="0.85"/><text x="463.5" y="173" text-anchor="start" font-size="11">≈37</text><text x="120" y="199" text-anchor="end" font-size="12">Ethanol</text><rect x="128" y="188" width="30.7" height="16" fill="currentColor" class="f-orange" fill-opacity="0.85"/><text x="162.72413793103448" y="200" text-anchor="start" font-size="11">29.7</text><rect x="330" y="188" width="81.9" height="16" fill="currentColor" class="f-teal" fill-opacity="0.85"/><text x="415.9" y="200" text-anchor="start" font-size="11">23.4</text><text x="120" y="226" text-anchor="end" font-size="12">Li-ion battery</text><rect x="128" y="215" width="1.5" height="16" fill="currentColor" class="f-orange" fill-opacity="0.85"/><text x="133.5" y="227" text-anchor="start" font-size="11">0.9</text><rect x="330" y="215" width="8.8" height="16" fill="currentColor" class="f-teal" fill-opacity="0.85"/><text x="342.75" y="227" text-anchor="start" font-size="11">2.5</text><line x1="128" y1="50" x2="128" y2="239" stroke="currentColor" stroke-width="1.2"/><line x1="330" y1="50" x2="330" y2="239" stroke="currentColor" stroke-width="1.2"/><text x="250" y="257" text-anchor="middle" font-size="11" class="t-gray">Fuels: heat of combustion with liquid water as product. Battery: typical cell, ≈250 Wh/kg.</text></svg>`;
const FIG_BONDS = `<svg viewBox="0 0 500 305" xmlns="http://www.w3.org/2000/svg"><line x1="28.0" y1="270.0" x2="28.0" y2="30.0" stroke="currentColor" stroke-width="1.8"/><polygon points="28.0,22.0 32.4,30.0 23.6,30.0" fill="currentColor"/><text x="18" y="150" text-anchor="middle" font-size="13" transform="rotate(-90 18 150)">enthalpy H (not to scale)</text><line x1="120" y1="50" x2="470" y2="50" stroke="currentColor" stroke-width="3" class="s-orange"/><text x="295" y="38" text-anchor="middle" font-size="13" class="t-orange" font-weight="600">separate gaseous atoms: C(g) + 4H(g) + 4O(g)</text><line x1="50" y1="150" x2="200" y2="150" stroke="currentColor" stroke-width="3"/><text x="125" y="140" text-anchor="middle" font-size="14" font-weight="600">CH₄(g) + 2O₂(g)</text><line x1="50" y1="245" x2="470" y2="245" stroke="currentColor" stroke-width="3"/><text x="260" y="267" text-anchor="middle" font-size="14" font-weight="600">CO₂(g) + 2H₂O(g)</text><line x1="185.0" y1="150.0" x2="185.0" y2="60.0" stroke="currentColor" class="s-purple" stroke-width="2.6"/><polygon points="185.0,50.0 190.5,60.0 179.5,60.0" fill="currentColor" class="f-purple"/><text x="195" y="88" text-anchor="start" font-size="12" class="t-purple" font-weight="600">break 4 C–H + 2 O=O</text><text x="195" y="106" text-anchor="start" font-size="12" class="t-purple">4(415) + 2(498) = +2656</text><line x1="445.0" y1="50.0" x2="445.0" y2="235.0" stroke="currentColor" class="s-blue" stroke-width="2.6"/><polygon points="445.0,245.0 439.5,235.0 450.5,235.0" fill="currentColor" class="f-blue"/><text x="435" y="160" text-anchor="end" font-size="12" class="t-blue" font-weight="600">form 2 C=O + 4 O–H</text><text x="435" y="178" text-anchor="end" font-size="12" class="t-blue">−[2(799) + 4(464)] = −3454</text><line x1="80.0" y1="150.0" x2="80.0" y2="235.0" stroke="currentColor" class="s-red" stroke-width="2.6"/><polygon points="80.0,245.0 74.5,235.0 85.5,235.0" fill="currentColor" class="f-red"/><text x="90" y="200" text-anchor="start" font-size="14" class="t-red" font-weight="600">≈ −798</text><text x="250" y="295" text-anchor="middle" font-size="13" font-weight="600">ΔH ≈ Σ(bonds broken) − Σ(bonds formed) = 2656 − 3454 = −798 kJ</text></svg>`;

export const lesson: Lesson = {
  id: 'gchem-formation-enthalpy',
  title: 'Standard Enthalpies of Formation',
  summary: 'One table of formation enthalpies gives ΔH° for thousands of reactions: standard states, ΔH°rxn = ΣnΔH°f(products) − ΣnΔH°f(reactants), fuels and energy density, and how bond-enthalpy estimates compare.',
  minutes: 19,
  objectives: [
    'State what a standard state is and write the formation equation for any compound',
    'Explain why $\\Delta H^\\circ_f = 0$ for an element in its standard state',
    'Compute $\\Delta H^\\circ_{\\text{rxn}} = \\sum n\\Delta H^\\circ_f(\\text{products}) - \\sum n\\Delta H^\\circ_f(\\text{reactants})$ and explain it as Hess\'s law through the elements',
    'Compare fuels by energy per gram and per liter, and explain why jet fuel dominates aviation and why batteries are heavy',
    'Estimate $\\Delta H$ from bond enthalpies and explain why it differs from the formation-enthalpy result',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Standard states and formation reactions',
      blocks: [
        {
          type: 'p',
          text: 'Hess\'s law lets you combine measured reactions, but you would still need the right set of equations for every new problem. Chemists solved this once and for all: tabulate, for every compound, the enthalpy change of one particular reaction, its **formation from the elements**. From that single table you can build $\\Delta H$ for any reaction.',
        },
        {
          type: 'definition',
          term: 'Standard state',
          text: 'The [[gchem-standard-state|standard state]] of a substance is its pure form at 1 bar pressure (gases behaving ideally; solutes at 1 M). Tables are usually given at 25 °C (298.15 K). For an element it is the **most stable form** under those conditions: $\\ce{O2(g)}$, not O or $\\ce{O3}$; graphite, not diamond; $\\ce{Br2(l)}$ and $\\ce{Hg(l)}$, because they are liquids at 25 °C. A degree sign marks standard conditions: $\\Delta H^\\circ$.',
        },
        {
          type: 'definition',
          term: 'Standard enthalpy of formation $\\Delta H^\\circ_f$',
          text: 'The [[gchem-standard-enthalpy-of-formation|standard enthalpy of formation]] is $\\Delta H^\\circ$ for forming **exactly 1 mol** of a compound from its elements, each in its standard state. Because the product must be 1 mol, formation equations often need fractional coefficients.',
        },
        {
          type: 'math',
          tex: '\\begin{array}{lr} \\ce{H2(g) + 1/2 O2(g) -> H2O(l)} & \\Delta H^\\circ_f = -285.8\\ \\text{kJ/mol} \\\\ \\ce{1/2 N2(g) + 3/2 H2(g) -> NH3(g)} & \\Delta H^\\circ_f = -45.9\\ \\text{kJ/mol} \\\\ \\ce{2C(s) + 3H2(g) + 1/2 O2(g) -> C2H5OH(l)} & \\Delta H^\\circ_f = -277.6\\ \\text{kJ/mol} \\end{array}',
          caption: 'Each equation makes one mole of product from elements in their standard states. The carbon is graphite.',
        },
        {
          type: 'table',
          headers: ['Substance', '$\\Delta H^\\circ_f$ (kJ/mol)', 'Substance', '$\\Delta H^\\circ_f$ (kJ/mol)'],
          rows: [
            ['$\\ce{C(s)}$, graphite', '$0$', '$\\ce{CH4(g)}$', '$-74.6$'],
            ['$\\ce{C(s)}$, diamond', '$+1.9$', '$\\ce{C3H8(g)}$', '$-103.8$'],
            ['$\\ce{H2(g)}$, $\\ce{O2(g)}$, $\\ce{N2(g)}$', '$0$', '$\\ce{C8H18(l)}$ (octane)', '$-250.1$'],
            ['$\\ce{O3(g)}$', '$+142.7$', '$\\ce{CH3OH(l)}$', '$-238.6$'],
            ['$\\ce{Br2(l)}$', '$0$', '$\\ce{C2H5OH(l)}$', '$-277.6$'],
            ['$\\ce{Br2(g)}$', '$+30.9$', '$\\ce{NH3(g)}$', '$-45.9$'],
            ['$\\ce{CO(g)}$', '$-110.5$', '$\\ce{Mg(s)}$', '$0$'],
            ['$\\ce{CO2(g)}$', '$-393.5$', '$\\ce{Mg(OH)2(s)}$', '$-924.5$'],
            ['$\\ce{H2O(l)}$', '$-285.8$', '$\\ce{H2O(g)}$', '$-241.8$'],
          ],
          caption: 'Standard enthalpies of formation at 298.15 K used in this lesson (standard tables: OpenStax Chemistry 2e Appendix G and the NIST database, rounded to 0.1 kJ/mol).',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why elements in their standard states are zero',
          text: 'You can never measure an absolute enthalpy, only changes, so you must pick a zero, like choosing sea level for altitude. The natural choice is the elements: forming $\\ce{O2(g)}$ from $\\ce{O2(g)}$ is "no reaction", so $\\Delta H^\\circ_f = 0$. Every compound is then measured against the elements it is made of. Other forms of an element are *not* zero: ozone and diamond both lie above the standard form.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'mcq',
      prompt: 'Which substance has $\\Delta H^\\circ_f = 0$ at 25 °C?',
      options: [
        { text: '$\\ce{O3(g)}$', why: 'Ozone is a form of oxygen, but not the most stable one; forming it from $\\ce{O2}$ costs 142.7 kJ/mol.' },
        { text: '$\\ce{Br2(l)}$', correct: true, why: 'Bromine is a liquid at 25 °C and 1 bar, so $\\ce{Br2(l)}$ is its standard state.' },
        { text: '$\\ce{C(s, diamond)}$', why: 'Graphite, not diamond, is the standard state of carbon; diamond lies 1.9 kJ/mol higher.' },
        { text: '$\\ce{H2O(l)}$', why: 'Water is a compound, formed from $\\ce{H2}$ and $\\ce{O2}$ with $\\Delta H^\\circ_f = -285.8$ kJ/mol.' },
      ],
      explanation: 'Only an element in its standard state (its most stable form at 1 bar and the stated temperature) has $\\Delta H^\\circ_f = 0$. That rules out compounds and also the less stable forms of elements, such as $\\ce{O3}$, diamond or $\\ce{Br2(g)}$ (+30.9 kJ/mol, its enthalpy of vaporization).',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'fill',
      prompt: 'Type the coefficients of the formation equation of liquid methanol (decimals or fractions are fine).',
      template: '___ $\\ce{C(s)}$ + ___ $\\ce{H2(g)}$ + ___ $\\ce{O2(g)}$ $\\ce{->}$ $\\ce{CH3OH(l)}$',
      blanks: [{ answers: ['1'] }, { answers: ['2'] }, { answers: ['0.5'] }],
      explanation: 'A formation equation makes exactly 1 mol of product. $\\ce{CH3OH}$ contains 1 C, 4 H and 1 O, so you need 1 C(s), 2 $\\ce{H2}$ (4 H) and $\\tfrac{1}{2}$ $\\ce{O2}$ (1 O): $\\ce{C(s) + 2H2(g) + 1/2 O2(g) -> CH3OH(l)}$, $\\Delta H^\\circ_f = -238.6$ kJ/mol. Doubling everything to clear the fraction would give the enthalpy for **two** moles, which is no longer the formation reaction.',
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'concept',
      title: 'ΔH° of any reaction from the table',
      blocks: [
        {
          type: 'theorem',
          name: 'Reaction enthalpy from formation enthalpies',
          tex: '\\Delta H^\\circ_{\\text{rxn}} = \\sum n\\,\\Delta H^\\circ_f(\\text{products}) - \\sum n\\,\\Delta H^\\circ_f(\\text{reactants})',
          text: '$n$ is each substance\'s coefficient in the balanced equation. "Products minus reactants", like every $\\Delta$.',
        },
        {
          type: 'p',
          text: 'Why does this work? Imagine a detour through the elements. First take the reactants apart into their elements: that is each reactant\'s formation reaction run backwards, contributing $-\\sum n\\Delta H^\\circ_f(\\text{reactants})$. Then build the products from those same elements, contributing $+\\sum n\\Delta H^\\circ_f(\\text{products})$. Atoms are conserved, so the elements in the middle are the same on both legs, and by Hess\'s law the detour has the same $\\Delta H$ as the direct reaction.',
        },
        {
          type: 'figure',
          svg: FIG_PATH,
          alt: 'Enthalpy diagram, not to scale. The top level, in green, is the elements in their standard states, C graphite plus 2 H2 plus 2 O2, at H equals zero. Below it is CH4 plus 2 O2, and at the bottom CO2 plus 2 H2O liquid. A purple arrow goes up from the reactants to the elements, labelled minus the sum of n delta H f of reactants equals plus 74.6. A blue arrow goes down from the elements to the products, labelled plus the sum of n delta H f of products, minus 393.5 plus 2 times minus 285.8, equals minus 965.1. A red arrow goes directly from reactants to products, delta H rxn unknown. The total is plus 74.6 plus minus 965.1 equals minus 890.5 kJ.',
          caption: 'Up to the elements (undo the reactants\' formation), then down to the products (form them). The two legs add to the direct $\\Delta H^\\circ_{\\text{rxn}}$. $\\ce{O2}$ contributes nothing to either leg because its $\\Delta H^\\circ_f$ is zero.',
        },
        {
          type: 'derivation',
          title: 'Combustion of methane, $\\ce{CH4(g) + 2O2(g) -> CO2(g) + 2H2O(l)}$',
          steps: [
            { tex: '\\sum n\\Delta H^\\circ_f(\\text{prod}) = (1)(-393.5) + (2)(-285.8) = -965.1\\ \\text{kJ}', why: 'Multiply each product\'s $\\Delta H^\\circ_f$ by its coefficient. Use liquid water, as the equation specifies.' },
            { tex: '\\sum n\\Delta H^\\circ_f(\\text{react}) = (1)(-74.6) + (2)(0) = -74.6\\ \\text{kJ}', why: '$\\ce{O2(g)}$ is an element in its standard state, so it contributes zero.' },
            { tex: '\\Delta H^\\circ_{\\text{rxn}} = -965.1 - (-74.6) = -890.5\\ \\text{kJ}', why: 'Products minus reactants. Subtracting a negative number adds.' },
          ],
          result: 'Exactly the value used for methane in the previous lesson, now computed from a table instead of a calorimeter.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'The three classic slips',
          text: '(1) Forgetting the coefficients: $\\ce{2H2O}$ contributes $2 \\times (-285.8)$, not $-285.8$. (2) Reversing the order: it is products **minus** reactants. (3) Using the wrong phase: $\\ce{H2O(g)}$ ($-241.8$) and $\\ce{H2O(l)}$ ($-285.8$) are different table entries.',
        },
      ],
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'numeric',
      prompt: 'Using the table, find $\\Delta H^\\circ_{\\text{rxn}}$ for the combustion of propane, $\\ce{C3H8(g) + 5O2(g) -> 3CO2(g) + 4H2O(l)}$. Give the answer in kJ to the nearest 0.1 kJ (with sign).',
      hint: 'Products: $3(-393.5) + 4(-285.8)$. Reactants: $(-103.8) + 5(0)$. Products minus reactants.',
      label: '$\\Delta H^\\circ_{\\text{rxn}} =$',
      unit: 'kJ',
      answer: '3*(-393.5) + 4*(-285.8) - (-103.8)',
      answerTex: '-2219.9\\ \\text{kJ}',
      tolerance: 0.15,
      explanation: 'Products: $3(-393.5) + 4(-285.8) = -1180.5 - 1143.2 = -2323.7$ kJ. Reactants: $-103.8 + 0 = -103.8$ kJ. $\\Delta H^\\circ = -2323.7 - (-103.8) = -2219.9$ kJ per mole of propane, the "$-2220$ kJ" used for the propane stove in the previous lesson.',
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'concept',
      title: 'Octane, and liquid versus vapor water',
      blocks: [
        {
          type: 'p',
          text: 'Gasoline is a mixture, but octane, $\\ce{C8H18}$, is a good model for it. Write the combustion per mole of octane (fractional $\\ce{O2}$ is fine) and apply the formula.',
        },
        {
          type: 'derivation',
          title: '$\\ce{C8H18(l) + 25/2 O2(g) -> 8CO2(g) + 9H2O(l)}$',
          steps: [
            { tex: '\\sum n\\Delta H^\\circ_f(\\text{prod}) = 8(-393.5) + 9(-285.8) = -3148.0 - 2572.2 = -5720.2\\ \\text{kJ}', why: 'Coefficients 8 and 9 multiply the table values.' },
            { tex: '\\sum n\\Delta H^\\circ_f(\\text{react}) = (-250.1) + \\tfrac{25}{2}(0) = -250.1\\ \\text{kJ}', why: 'Oxygen is an element in its standard state.' },
            { tex: '\\Delta H^\\circ_{\\text{rxn}} = -5720.2 - (-250.1) = -5470.1\\ \\text{kJ}', why: 'Products minus reactants.' },
            { tex: '\\frac{5470.1\\ \\text{kJ}}{114.23\\ \\text{g}} = 47.89\\ \\text{kJ/g}, \\qquad 47.89\\ \\tfrac{\\text{kJ}}{\\text{g}} \\times 0.703\\ \\tfrac{\\text{g}}{\\text{mL}} = 33.7\\ \\text{kJ/mL}', why: 'Per gram (divide by the molar mass) and per milliliter (multiply by the density of liquid octane). 1 kJ/g = 1 MJ/kg and 1 kJ/mL = 1 MJ/L.' },
          ],
          result: 'The table gives $-5470$ kJ/mol. The bomb calorimeter two lessons ago gave $\\Delta E = -5458$ kJ/mol, which converts to $\\Delta H = -5469$ kJ/mol: a table and a calorimeter agree to within 0.02%.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Higher and lower heating values',
          text: 'Using $\\ce{H2O(l)}$ gives the **higher heating value**: the heat you get if the water vapor in the exhaust condenses. Engines and turbines send their water out as hot vapor, so the heat they can actually use is the **lower heating value**, computed with $\\ce{H2O(g)}$. For octane that is $9 \\times 44.0 = 396$ kJ less: about $-5074$ kJ/mol, or 44.4 kJ/g. Fuel specs for vehicles and aircraft quote the lower value; check which one a table uses before comparing.',
        },
      ],
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'error',
      prompt: 'A student computes $\\Delta H^\\circ$ for $\\ce{C2H5OH(l) + 3O2(g) -> 2CO2(g) + 3H2O(l)}$ using the table. Tap the first wrong line.',
      lines: [
        'Products: $2(-393.5) + 3(-285.8) = -1644.4$ kJ',
        'Reactants: $(-277.6) + 3(0) = -277.6$ kJ',
        '$\\Delta H^\\circ = -277.6 - (-1644.4) = +1366.8$ kJ',
        'So burning ethanol absorbs 1366.8 kJ per mole',
      ],
      errorLines: [3],
      explanation: 'Lines 1 and 2 are correct, but line 3 subtracts in the wrong order (reactants minus products). The rule is products minus reactants: $\\Delta H^\\circ = -1644.4 - (-277.6) = -1366.8$ kJ. Line 4 should have been a warning sign: a fuel whose combustion *absorbs* heat would be useless. Ethanol releases 1366.8 kJ/mol, about 29.7 kJ/g.',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'concept',
      title: 'Energy density: why jet fuel, and why batteries are heavy',
      blocks: [
        {
          type: 'p',
          text: 'Divide a heat of combustion by molar mass and you get the [[gchem-energy-density|energy density]] per gram; multiply by density and you get it per milliliter. Those two numbers decide which fuel goes into which vehicle.',
        },
        {
          type: 'table',
          headers: ['Fuel', '$\\Delta H^\\circ_c$ (kJ/mol)', 'kJ/g', 'density (g/mL)', 'kJ/mL'],
          rows: [
            ['hydrogen, $\\ce{H2}$ (liquid, −253 °C)', '$-285.8$', '$141.8$', '$0.071$', '$10.0$'],
            ['methane, $\\ce{CH4}$ (as LNG)', '$-890.5$', '$55.5$', '$0.42$', '$23.3$'],
            ['propane, $\\ce{C3H8}$ (liquid under pressure)', '$-2219.9$', '$50.3$', '$0.493$', '$24.8$'],
            ['octane, $\\ce{C8H18}$', '$-5470.1$', '$47.9$', '$0.703$', '$33.7$'],
            ['ethanol, $\\ce{C2H5OH}$', '$-1366.8$', '$29.7$', '$0.789$', '$23.4$'],
            ['jet fuel (JP-8, a mixture; typical)', '—', '$\\approx 46$', '$\\approx 0.80$', '$\\approx 37$'],
            ['lithium-ion battery cell (typical)', '—', '$\\approx 0.9$', '—', '$\\approx 2.5$'],
          ],
          caption: 'Combustion values computed from the formation table with liquid water as product (higher heating value). The jet-fuel and battery rows are typical measured values, not computed here.',
        },
        {
          type: 'figure',
          svg: FIG_DENSITY,
          alt: 'Two horizontal bar charts side by side for seven energy sources. Per gram: hydrogen 141.8, methane 55.5, propane 50.3, octane 47.9, jet fuel about 46, ethanol 29.7, lithium-ion battery 0.9 kilojoules per gram. Per milliliter: hydrogen 10.0, methane 23.3, propane 24.8, octane 33.7, jet fuel about 37, ethanol 23.4, battery 2.5 kilojoules per milliliter.',
          caption: 'Hydrogen wins per gram but loses per liter. Liquid hydrocarbons are near the top of both charts. The battery bar is barely visible in either.',
        },
        {
          type: 'list',
          items: [
            '**Why jet fuel.** An aircraft is limited by both weight and tank volume. Kerosene-type fuels score high on both, stay liquid from arctic cold to desert heat without pressurization, and are far less volatile than gasoline, which makes them safer to store and handle. That is why the military standardized on JP-8 for aircraft *and* ground vehicles: one fuel for everything.',
            '**Why not hydrogen.** Per gram it is unbeatable, but even as a liquid at −253 °C it holds less than a third of jet fuel\'s energy per liter, and the insulated tanks add weight and volume.',
            '**Why alcohols carry less.** Ethanol and methanol already contain oxygen bonded to carbon. They are "partly burned", the same reason sugar carries less energy than fat.',
          ],
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why batteries are so heavy',
          text: 'A fuel carries only half of its reaction; the other half, oxygen, comes free from the air and is never weighed. A battery must carry **both** reactants, the reducing agent and the oxidizing agent, plus electrolyte, separators, metal foils and a case, all sealed inside. The result is roughly 50 times less energy per gram than a hydrocarbon. Electric motors convert about 90% of that energy to motion versus roughly 25–35% for engines, which narrows the gap to roughly 15-fold, but that is still why a dismounted soldier\'s batteries, or an electric aircraft, are such a weight problem.',
        },
      ],
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'numeric',
      prompt: 'Methanol is used as a racing fuel and in some [[gchem-fuel-cell|fuel cells]]. Use the table to find $\\Delta H^\\circ$ for $\\ce{CH3OH(l) + 3/2 O2(g) -> CO2(g) + 2H2O(l)}$, then convert it to energy released **per gram** ($M = 32.04$ g/mol). Give kJ/g to three significant figures, as a positive number.',
      hint: 'Products: $-393.5 + 2(-285.8)$. Reactants: $-238.6$. Then divide the magnitude by 32.04.',
      label: 'energy $=$',
      unit: 'kJ/g',
      answer: '-(-393.5 + 2*(-285.8) - (-238.6))/32.04',
      answerTex: '22.7\\ \\text{kJ/g}',
      tolerance: 0.06,
      explanation: 'Products: $-393.5 - 571.6 = -965.1$ kJ. Reactants: $-238.6$ kJ. $\\Delta H^\\circ = -965.1 + 238.6 = -726.5$ kJ/mol. Per gram: $726.5 / 32.04 = 22.7$ kJ/g, less than half of octane\'s 47.9 kJ/g. A methanol-burning car needs a much bigger tank for the same range.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'concept',
      title: 'Comparison with bond-enthalpy estimates',
      blocks: [
        {
          type: 'p',
          text: 'The bonding unit introduced [[gchem-bond-enthalpy|bond enthalpies]]: the average energy needed to break one mole of a given bond in the gas phase. They give a second, rougher route to $\\Delta H$: break every bond in the reactants (costs energy), then form every bond in the products (releases energy).',
        },
        {
          type: 'math',
          tex: '\\Delta H \\approx \\sum(\\text{bond enthalpies of bonds broken}) - \\sum(\\text{bond enthalpies of bonds formed})',
          caption: 'Note the order: here it is reactant bonds minus product bonds, the reverse of the formation-enthalpy formula, because breaking costs and forming releases.',
        },
        {
          type: 'table',
          headers: ['Bond', 'C–H', 'O=O', 'C=O (in $\\ce{CO2}$)', 'O–H', 'H–H', 'C–C'],
          rows: [['average bond enthalpy (kJ/mol)', '415', '498', '799', '464', '436', '347']],
          caption: 'Typical textbook average values.',
        },
        {
          type: 'figure',
          svg: FIG_BONDS,
          alt: 'Enthalpy diagram, not to scale. A purple arrow rises from CH4 plus 2 O2 to a high orange level of separate gaseous atoms, C plus 4 H plus 4 O, labelled break 4 C–H plus 2 O=O, 4 times 415 plus 2 times 498 equals plus 2656. A blue arrow descends from the atoms to CO2 plus 2 H2O gas, labelled form 2 C=O plus 4 O–H, minus 2 times 799 plus 4 times 464 equals minus 3454. A red arrow from reactants to products is labelled about minus 798. The bottom line reads delta H approximately equals bonds broken minus bonds formed equals 2656 minus 3454 equals minus 798 kJ.',
          caption: 'Bond enthalpies take the detour through **separate gaseous atoms** instead of through the elements in their standard states.',
        },
        {
          type: 'derivation',
          title: 'Methane combustion, both ways',
          steps: [
            { tex: '\\text{broken: } 4(415) + 2(498) = 2656\\ \\text{kJ}', why: 'Each $\\ce{CH4}$ has four C–H bonds; each $\\ce{O2}$ has one O=O, and there are two $\\ce{O2}$.' },
            { tex: '\\text{formed: } 2(799) + 4(464) = 3454\\ \\text{kJ}', why: '$\\ce{CO2}$ has two C=O bonds; each of the two $\\ce{H2O}$ has two O–H bonds.' },
            { tex: '\\Delta H \\approx 2656 - 3454 = -798\\ \\text{kJ}', why: 'More energy is released forming the strong product bonds than is spent breaking the reactant bonds.' },
            { tex: '\\Delta H^\\circ = -393.5 + 2(-241.8) - (-74.6) = -802.5\\ \\text{kJ}', why: 'Formation enthalpies with **gaseous** water, because bond enthalpies describe gas-phase molecules. The estimate is within 1%.' },
          ],
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the bond method is only an estimate',
          text: 'A bond enthalpy is an **average** over many molecules: the C–H bonds in methane, ethanol and benzene are not identical, and even the four C–H bonds of methane take different energies to break one after another. It also assumes everything is a gas, so condensation or melting energies are missing. Formation enthalpies are measured for each specific compound in its actual state, so they are exact to the accuracy of the data. Use bond enthalpies when no table entry exists, or to see *which* bonds make a reaction exothermic.',
        },
      ],
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'mcq',
      prompt: 'For $\\ce{CH4 + 2O2 -> CO2 + 2H2O}$, bond enthalpies give about $-798$ kJ, but the formation-enthalpy calculation with $\\ce{H2O(l)}$ gives $-890.5$ kJ. What is the main reason for the difference of about 90 kJ?',
      options: [
        { text: 'Bond enthalpies are averages over many different molecules', why: 'True, but that causes only a few kJ of error here: compared with the gaseous-water result ($-802.5$ kJ) the estimate is off by just 4.5 kJ.' },
        { text: 'The bond method describes gas-phase products, so it misses the heat released when 2 mol of water vapor condense', correct: true, why: 'Condensing 2 mol of water releases $2 \\times 44.0 = 88.0$ kJ, which accounts for almost the whole gap: $-802.5 - 88.0 = -890.5$ kJ.' },
        { text: 'Hess\'s law does not apply to bond enthalpies', why: 'The bond method *is* Hess\'s law, with a path through gaseous atoms. Both routes are legitimate.' },
        { text: '$\\ce{O2}$ has a nonzero $\\Delta H^\\circ_f$ that the bond method ignores', why: '$\\ce{O2(g)}$ is an element in its standard state, so its $\\Delta H^\\circ_f$ is exactly zero.' },
      ],
      explanation: 'Compare like with like. With gaseous water the two methods agree to within 1% ($-798$ vs $-802.5$ kJ); the remaining small gap comes from averaging bond enthalpies. The large difference is a phase difference: bond enthalpies only describe gases, and the liquid-water value includes 88 kJ of condensation.',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'numeric',
      prompt: 'The formula also runs backwards. The combustion of glucose, $\\ce{C6H12O6(s) + 6O2(g) -> 6CO2(g) + 6H2O(l)}$, has $\\Delta H^\\circ = -2803$ kJ (measured with a bomb calorimeter). Use the table values for $\\ce{CO2(g)}$ and $\\ce{H2O(l)}$ to find $\\Delta H^\\circ_f$ of glucose, to the nearest kJ/mol.',
      hint: '$-2803 = [6(-393.5) + 6(-285.8)] - [\\Delta H^\\circ_f(\\text{glucose}) + 6(0)]$. Solve for the unknown.',
      label: '$\\Delta H^\\circ_f(\\ce{C6H12O6}) =$',
      unit: 'kJ/mol',
      answer: '6*(-393.5) + 6*(-285.8) + 2803',
      answerTex: '-1273\\ \\text{kJ/mol}',
      tolerance: 0.6,
      explanation: 'Products: $6(-393.5) + 6(-285.8) = -2361.0 - 1714.8 = -4075.8$ kJ. From $\\Delta H^\\circ_{\\text{rxn}} = \\text{prod} - \\text{react}$: $-2803 = -4075.8 - \\Delta H^\\circ_f(\\text{glucose})$, so $\\Delta H^\\circ_f(\\text{glucose}) = -4075.8 + 2803 = -1272.8 \\approx -1273$ kJ/mol. This is how most formation enthalpies of organic compounds are actually obtained: burn the compound in a bomb, then work backwards.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'truefalse',
      prompt: 'Ozone, $\\ce{O3(g)}$, is made only of oxygen atoms, so its standard enthalpy of formation is zero.',
      answer: false,
      explanation: 'Only the **most stable form** of an element at standard conditions has $\\Delta H^\\circ_f = 0$. For oxygen that is $\\ce{O2(g)}$. Forming ozone, $\\ce{3/2 O2(g) -> O3(g)}$, absorbs 142.7 kJ/mol, so $\\Delta H^\\circ_f(\\ce{O3}) = +142.7$ kJ/mol. The same logic gives diamond +1.9 and $\\ce{Br2(g)}$ +30.9 kJ/mol.',
    },
  ],
  takeaways: [
    'Standard state: pure substance at 1 bar (solutes 1 M), usually tabulated at 298.15 K; for an element, its most stable form (graphite, $\\ce{O2(g)}$, $\\ce{Br2(l)}$).',
    '$\\Delta H^\\circ_f$ is $\\Delta H^\\circ$ for making 1 mol of a compound from its elements in their standard states; elements in their standard states have $\\Delta H^\\circ_f = 0$ by definition.',
    '$\\Delta H^\\circ_{\\text{rxn}} = \\sum n\\Delta H^\\circ_f(\\text{products}) - \\sum n\\Delta H^\\circ_f(\\text{reactants})$: Hess\'s law with a detour through the elements. Watch coefficients, order and phases.',
    'Energy density per gram (divide by molar mass) and per liter (times density) decide fuel choice: hydrocarbons like jet fuel score high on both; hydrogen wins per gram but loses per liter; batteries carry both reactants and store roughly 50 times less per gram.',
    'Bond enthalpies estimate $\\Delta H \\approx \\sum(\\text{broken}) - \\sum(\\text{formed})$ for gas-phase reactions; they are averages, so formation enthalpies are more accurate.',
  ],
  reading: [
    {
      title: 'OpenStax Chemistry 2e — Chapter 5: Thermochemistry',
      url: 'https://openstax.org/books/chemistry-2e/pages/5-introduction',
      source: 'openstax',
      note: 'The end of section 5.3 covers standard enthalpies of formation and the products-minus-reactants formula; Appendix G is the data table used here.',
    },
    {
      title: 'OpenStax Chemistry 2e — Chapter 7: Chemical Bonding and Molecular Geometry',
      url: 'https://openstax.org/books/chemistry-2e/pages/7-introduction',
      source: 'openstax',
      note: 'Section 7.5 (Strengths of Ionic and Covalent Bonds) has the bond-enthalpy table and more examples of estimating $\\Delta H$ from bonds.',
    },
    {
      title: 'Wikipedia — Standard enthalpy of formation',
      url: 'https://en.wikipedia.org/wiki/Standard_enthalpy_of_formation',
      source: 'wikipedia',
      note: 'Definitions, the Hess\'s-law derivation of the products-minus-reactants formula, and a long table of values.',
    },
    {
      title: 'Wikipedia — Energy density',
      url: 'https://en.wikipedia.org/wiki/Energy_density',
      source: 'wikipedia',
      note: 'Compares fuels, batteries, explosives and nuclear sources per kilogram and per liter, with notes on higher versus lower heating values.',
    },
  ],
};
