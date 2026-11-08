import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'chem-stoichiometry',
  title: 'Stoichiometry, Limiting Reactants and Yield',
  summary: 'Use a balanced equation to predict how much reacts and forms: mole ratios, the grams-to-grams roadmap, limiting reactants and percent yield.',
  minutes: 20,
  objectives: [
    'Read mole ratios from a balanced equation and use them to convert between substances',
    'Solve grams-to-grams problems with the roadmap g → mol → mol → g',
    'Identify the limiting and excess reactants and compute how much excess is left over',
    'Calculate theoretical yield and percent yield, and explain why actual yield is lower',
    'Apply stoichiometry to airbags, fuel combustion and rocket propellant mass ratios',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'The mole ratio: the bridge between substances',
      blocks: [
        {
          type: 'p',
          text: '[[stoichiometry|Stoichiometry]] (from Greek *stoicheion*, element, and *metron*, measure) is the arithmetic of reactions: how much of one substance reacts with, or produces, how much of another. A balanced equation is a recipe, and like a recipe it scales. Two eggs plus one cup of flour make one batch; four eggs and two cups make two batches.',
        },
        {
          type: 'p',
          text: 'The coefficients count particles, and since a mole is just a count, they count **moles** too. The industrial synthesis of ammonia (the source of most fertilizer nitrogen) reads:',
        },
        {
          type: 'math',
          tex: '\\ce{N2(g) + 3H2(g) -> 2NH3(g)}',
          caption: '1 molecule $\\ce{N2}$ : 3 molecules $\\ce{H2}$ : 2 molecules $\\ce{NH3}$, and equally 1 mol : 3 mol : 2 mol.',
        },
        {
          type: 'p',
          text: 'Any two coefficients form a [[mole-ratio|mole ratio]], a conversion factor between two substances in the reaction, such as $\\frac{2\\ \\text{mol}\\ \\ce{NH3}}{3\\ \\text{mol}\\ \\ce{H2}}$ or $\\frac{1\\ \\text{mol}\\ \\ce{N2}}{3\\ \\text{mol}\\ \\ce{H2}}$. It is the only place the balanced equation enters a calculation.',
        },
        {
          type: 'derivation',
          title: 'Ammonia from 4.50 mol of hydrogen (plenty of nitrogen)',
          steps: [
            { tex: '4.50\\ \\text{mol}\\ \\ce{H2} \\times \\frac{2\\ \\text{mol}\\ \\ce{NH3}}{3\\ \\text{mol}\\ \\ce{H2}}', why: 'Choose the ratio with $\\ce{H2}$ on the bottom (to cancel what you have) and $\\ce{NH3}$ on top (what you want). Both numbers come from the coefficients.' },
            { tex: '= \\frac{4.50 \\times 2}{3}\\ \\text{mol}\\ \\ce{NH3} = 3.00\\ \\text{mol}\\ \\ce{NH3}', why: '"mol $\\ce{H2}$" cancels. Labeling the substance on every unit is what makes this cancellation visible.' },
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Coefficients relate moles, not grams',
          text: '$\\ce{N2 + 3H2 -> 2NH3}$ does **not** mean 1 g of $\\ce{N2}$ reacts with 3 g of $\\ce{H2}$. A nitrogen molecule is 14 times heavier than a hydrogen molecule, so by mass the reaction uses 28.0 g $\\ce{N2}$ per 6.05 g $\\ce{H2}$. Always convert grams to moles before using a mole ratio.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'numeric',
      prompt: 'Octane burns according to $\\ce{2C8H18 + 25O2 -> 16CO2 + 18H2O}$. How many moles of $\\ce{O2}$ are needed to burn 3.0 mol of octane completely?',
      hint: 'Use the mole ratio $\\frac{25\\ \\text{mol}\\ \\ce{O2}}{2\\ \\text{mol}\\ \\ce{C8H18}}$.',
      label: '$n(\\ce{O2}) =$',
      unit: 'mol',
      answer: '37.5',
      answerTex: '37.5\\ \\text{mol}',
      tolerance: 0.5,
      explanation: '$3.0\\ \\text{mol}\\ \\ce{C8H18} \\times \\frac{25\\ \\text{mol}\\ \\ce{O2}}{2\\ \\text{mol}\\ \\ce{C8H18}} = 37.5$ mol $\\ce{O2}$ (38 mol to two significant figures). Every mole of fuel needs 12.5 moles of oxygen, which is why an engine moves so much more air than fuel.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'The roadmap: grams → moles → moles → grams',
      blocks: [
        {
          type: 'p',
          text: 'In the lab you weigh things, so real questions start and end in grams. But the equation only speaks moles. The solution is a three-leg trip, each leg a conversion factor you already know.',
        },
        {
          type: 'figure',
          svg: `<svg viewBox="0 0 500 170" xmlns="http://www.w3.org/2000/svg"><rect x="4" y="60" width="84" height="60" rx="10" fill="none" stroke="currentColor" class="s-orange" stroke-width="2.2"/><text x="46.0" y="86" text-anchor="middle" style="font-size:16px;font-weight:600">Grams</text><text x="46.0" y="107" text-anchor="middle" style="font-size:14px">of A</text><rect x="140" y="60" width="84" height="60" rx="10" fill="none" stroke="currentColor" class="s-blue" stroke-width="2.2"/><text x="182.0" y="86" text-anchor="middle" style="font-size:16px;font-weight:600">Moles</text><text x="182.0" y="107" text-anchor="middle" style="font-size:14px">of A</text><rect x="276" y="60" width="84" height="60" rx="10" fill="none" stroke="currentColor" class="s-blue" stroke-width="2.2"/><text x="318.0" y="86" text-anchor="middle" style="font-size:16px;font-weight:600">Moles</text><text x="318.0" y="107" text-anchor="middle" style="font-size:14px">of B</text><rect x="412" y="60" width="84" height="60" rx="10" fill="none" stroke="currentColor" class="s-orange" stroke-width="2.2"/><text x="454.0" y="86" text-anchor="middle" style="font-size:16px;font-weight:600">Grams</text><text x="454.0" y="107" text-anchor="middle" style="font-size:14px">of B</text><line x1="92" y1="90" x2="136" y2="90" stroke="currentColor" stroke-width="2.4"/><polyline points="127,83 137,90 127,97" fill="none" stroke="currentColor" stroke-width="2.4"/><text x="114.0" y="28" text-anchor="middle" style="font-size:13.5px">÷ molar mass</text><text x="114.0" y="46" text-anchor="middle" class="t-gray" style="font-size:12.5px">of A</text><line x1="228" y1="90" x2="272" y2="90" stroke="currentColor" class="s-purple" stroke-width="2.4"/><polyline points="263,83 273,90 263,97" fill="none" stroke="currentColor" class="s-purple" stroke-width="2.4"/><text x="250.0" y="28" text-anchor="middle" class="t-purple" style="font-size:13.5px">× mole ratio</text><text x="250.0" y="46" text-anchor="middle" class="t-gray" style="font-size:12.5px">B per A</text><line x1="364" y1="90" x2="408" y2="90" stroke="currentColor" stroke-width="2.4"/><polyline points="399,83 409,90 399,97" fill="none" stroke="currentColor" stroke-width="2.4"/><text x="386.0" y="28" text-anchor="middle" style="font-size:13.5px">× molar mass</text><text x="386.0" y="46" text-anchor="middle" class="t-gray" style="font-size:12.5px">of B</text><text x="250" y="150" text-anchor="middle" style="font-size:14px">The balanced equation is used only in the middle step.</text></svg>`,
          alt: 'Four boxes in a row: grams of A, moles of A, moles of B, grams of B. Arrows between them are labelled divide by molar mass of A, multiply by mole ratio B per A, and multiply by molar mass of B.',
          caption: 'Molar mass gets you into and out of moles; the mole ratio from the balanced equation crosses from one substance to the other.',
        },
        {
          type: 'p',
          text: '**Airbags.** In older airbag designs, a crash sensor ignites a small charge that makes solid sodium azide decompose in about 40 milliseconds: $\\ce{2NaN3(s) -> 2Na(s) + 3N2(g)}$. The rapidly produced nitrogen gas fills the bag. (Other compounds in the unit convert the reactive sodium into harmless solids.) How much gas does a given charge make?',
        },
        {
          type: 'derivation',
          title: 'Nitrogen from 65.0 g of sodium azide',
          steps: [
            { tex: 'M(\\ce{NaN3}) = 22.990 + 3(14.007) = 65.011\\ \\text{g/mol}', why: 'Gather the molar masses first.' },
            { tex: 'M(\\ce{N2}) = 2(14.007) = 28.014\\ \\text{g/mol}', why: 'Nitrogen gas is diatomic.' },
            { tex: '65.0\\ \\cancel{\\text{g}\\ \\ce{NaN3}} \\times \\frac{1\\ \\text{mol}\\ \\ce{NaN3}}{65.011\\ \\cancel{\\text{g}\\ \\ce{NaN3}}} = 0.9998\\ \\text{mol}\\ \\ce{NaN3}', why: 'Leg 1: grams of A to moles of A.' },
            { tex: '0.9998\\ \\cancel{\\text{mol}\\ \\ce{NaN3}} \\times \\frac{3\\ \\text{mol}\\ \\ce{N2}}{2\\ \\cancel{\\text{mol}\\ \\ce{NaN3}}} = 1.4997\\ \\text{mol}\\ \\ce{N2}', why: 'Leg 2: the mole ratio from the coefficients, 3 $\\ce{N2}$ per 2 $\\ce{NaN3}$.' },
            { tex: '1.4997\\ \\cancel{\\text{mol}\\ \\ce{N2}} \\times \\frac{28.014\\ \\text{g}\\ \\ce{N2}}{1\\ \\cancel{\\text{mol}\\ \\ce{N2}}} = 42.0\\ \\text{g}\\ \\ce{N2}', why: 'Leg 3: moles of B to grams of B. Round to 3 significant figures at the end.' },
          ],
          result: '65.0 g of sodium azide gives 42.0 g (1.50 mol) of nitrogen. At room temperature that is about 37 L of gas, enough to fill a driver\'s airbag (the gas laws lesson shows how to get liters from moles).',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the masses do not follow the coefficients',
          text: 'Mass is conserved overall: 65.0 g of $\\ce{NaN3}$ becomes 42.0 g of $\\ce{N2}$ plus 23.0 g of Na, total 65.0 g. But the individual masses depend on both the coefficients **and** the molar masses. That is why you cannot skip the mole legs.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'numeric',
      prompt: 'Model gasoline as pure octane: $\\ce{2C8H18 + 25O2 -> 16CO2 + 18H2O}$. What mass of $\\ce{CO2}$, in **kilograms**, is produced by burning 1.00 kg of octane? Use $M(\\ce{C8H18}) = 114.23$ g/mol and $M(\\ce{CO2}) = 44.01$ g/mol; give three significant figures.',
      hint: '1000 g octane → moles octane → moles $\\ce{CO2}$ (ratio 16 : 2) → grams $\\ce{CO2}$ → kg.',
      label: 'mass $\\ce{CO2}$ $=$',
      unit: 'kg',
      answer: '1000/114.23*8*44.01/1000',
      answerTex: '3.08\\ \\text{kg}',
      tolerance: 0.006,
      explanation: '$1000\\ \\text{g} \\div 114.23\\ \\text{g/mol} = 8.754$ mol octane; $\\times \\frac{16}{2} = 70.03$ mol $\\ce{CO2}$; $\\times 44.01\\ \\text{g/mol} = 3082$ g $= 3.08$ kg. Burning fuel produces about **three times its own mass** of $\\ce{CO2}$, because two heavy O atoms from the air join each carbon. A gallon of gasoline (about 2.8 kg) therefore makes roughly 8.6 kg of $\\ce{CO2}$ by this estimate, close to the EPA\'s figure of about 8.9 kg for real gasoline.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'order',
      prompt: 'Order the steps to find the mass of $\\ce{N2}$ produced from a weighed sample of $\\ce{NaN3}$, following the roadmap from this lesson (balance first).',
      lines: [
        'Write and balance the equation: $\\ce{2NaN3 -> 2Na + 3N2}$',
        'Convert grams of $\\ce{NaN3}$ to moles using its molar mass',
        'Multiply by the mole ratio $\\frac{3\\ \\text{mol}\\ \\ce{N2}}{2\\ \\text{mol}\\ \\ce{NaN3}}$',
        'Convert moles of $\\ce{N2}$ to grams using its molar mass',
      ],
      distractors: ['Multiply grams of $\\ce{NaN3}$ by $\\frac{3}{2}$ to get grams of $\\ce{N2}$'],
      explanation: 'Balanced equation first (the ratio comes from it), then the roadmap: grams → moles → moles → grams. The distractor applies the mole ratio directly to grams, which is wrong because $\\ce{N2}$ and $\\ce{NaN3}$ have different molar masses: it would predict 97.5 g of $\\ce{N2}$ from 65.0 g of azide, more mass than you started with.',
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'concept',
      title: 'Limiting and excess reactants',
      blocks: [
        {
          type: 'p',
          text: 'So far one reactant was "in plenty". In reality you usually mix definite amounts of each, and one runs out first. Think of making cheese sandwiches: each needs 2 slices of bread and 1 slice of cheese. With 10 slices of bread and 7 of cheese you can make only **5** sandwiches. The bread runs out, and 2 slices of cheese are left over.',
        },
        {
          type: 'definition',
          term: 'Limiting reactant',
          text: 'The [[limiting-reactant|limiting reactant]] is the one that is used up first. It stops the reaction and therefore determines the maximum amount of product. Every other reactant is an [[excess-reactant|excess reactant]]: some of it is left over.',
        },
        {
          type: 'figure',
          svg: `<svg viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="25" width="200" height="130" rx="10" fill="none" stroke="currentColor" class="s-gray" stroke-width="1.5"/><text x="110" y="18" text-anchor="middle" style="font-size:14px">before</text><circle cx="38.5" cy="55.0" r="7" class="f-gray" fill="currentColor" fill-opacity="0.35" stroke="currentColor" stroke-width="1.3"/><circle cx="51.5" cy="55.0" r="7" class="f-gray" fill="currentColor" fill-opacity="0.35" stroke="currentColor" stroke-width="1.3"/><circle cx="38.5" cy="95.0" r="7" class="f-gray" fill="currentColor" fill-opacity="0.35" stroke="currentColor" stroke-width="1.3"/><circle cx="51.5" cy="95.0" r="7" class="f-gray" fill="currentColor" fill-opacity="0.35" stroke="currentColor" stroke-width="1.3"/><circle cx="38.5" cy="135.0" r="7" class="f-gray" fill="currentColor" fill-opacity="0.35" stroke="currentColor" stroke-width="1.3"/><circle cx="51.5" cy="135.0" r="7" class="f-gray" fill="currentColor" fill-opacity="0.35" stroke="currentColor" stroke-width="1.3"/><circle cx="88.5" cy="75.0" r="7" class="f-gray" fill="currentColor" fill-opacity="0.35" stroke="currentColor" stroke-width="1.3"/><circle cx="101.5" cy="75.0" r="7" class="f-gray" fill="currentColor" fill-opacity="0.35" stroke="currentColor" stroke-width="1.3"/><circle cx="150.5" cy="55.0" r="11" class="f-red" fill="currentColor" stroke="currentColor" stroke-width="1.3"/><circle cx="169.5" cy="55.0" r="11" class="f-red" fill="currentColor" stroke="currentColor" stroke-width="1.3"/><circle cx="150.5" cy="95.0" r="11" class="f-red" fill="currentColor" stroke="currentColor" stroke-width="1.3"/><circle cx="169.5" cy="95.0" r="11" class="f-red" fill="currentColor" stroke="currentColor" stroke-width="1.3"/><circle cx="150.5" cy="135.0" r="11" class="f-red" fill="currentColor" stroke="currentColor" stroke-width="1.3"/><circle cx="169.5" cy="135.0" r="11" class="f-red" fill="currentColor" stroke="currentColor" stroke-width="1.3"/><line x1="222" y1="90" x2="272" y2="90" stroke="currentColor" stroke-width="2.5"/><polyline points="263,83 273,90 263,97" fill="none" stroke="currentColor" stroke-width="2.5"/><rect x="285" y="25" width="205" height="130" rx="10" fill="none" stroke="currentColor" class="s-gray" stroke-width="1.5"/><text x="387" y="18" text-anchor="middle" style="font-size:14px">after</text><circle cx="308.1" cy="64.2" r="7" class="f-gray" fill="currentColor" fill-opacity="0.35" stroke="currentColor" stroke-width="1.3"/><circle cx="331.9" cy="64.2" r="7" class="f-gray" fill="currentColor" fill-opacity="0.35" stroke="currentColor" stroke-width="1.3"/><circle cx="320.0" cy="55.0" r="11" class="f-red" fill="currentColor" stroke="currentColor" stroke-width="1.3"/><circle cx="363.1" cy="64.2" r="7" class="f-gray" fill="currentColor" fill-opacity="0.35" stroke="currentColor" stroke-width="1.3"/><circle cx="386.9" cy="64.2" r="7" class="f-gray" fill="currentColor" fill-opacity="0.35" stroke="currentColor" stroke-width="1.3"/><circle cx="375.0" cy="55.0" r="11" class="f-red" fill="currentColor" stroke="currentColor" stroke-width="1.3"/><circle cx="308.1" cy="121.2" r="7" class="f-gray" fill="currentColor" fill-opacity="0.35" stroke="currentColor" stroke-width="1.3"/><circle cx="331.9" cy="121.2" r="7" class="f-gray" fill="currentColor" fill-opacity="0.35" stroke="currentColor" stroke-width="1.3"/><circle cx="320.0" cy="112.0" r="11" class="f-red" fill="currentColor" stroke="currentColor" stroke-width="1.3"/><circle cx="363.1" cy="121.2" r="7" class="f-gray" fill="currentColor" fill-opacity="0.35" stroke="currentColor" stroke-width="1.3"/><circle cx="386.9" cy="121.2" r="7" class="f-gray" fill="currentColor" fill-opacity="0.35" stroke="currentColor" stroke-width="1.3"/><circle cx="375.0" cy="112.0" r="11" class="f-red" fill="currentColor" stroke="currentColor" stroke-width="1.3"/><circle cx="440.5" cy="90.0" r="11" class="f-red" fill="currentColor" stroke="currentColor" stroke-width="1.3"/><circle cx="459.5" cy="90.0" r="11" class="f-red" fill="currentColor" stroke="currentColor" stroke-width="1.3"/><rect x="425" y="70" width="52" height="40" rx="6" fill="none" stroke="currentColor" class="s-orange" stroke-width="1.5" stroke-dasharray="4 3"/><text x="450" y="128" text-anchor="middle" class="t-orange" style="font-size:12px">left over</text><text x="110" y="178" text-anchor="middle" style="font-size:14px">4 H₂ + 3 O₂</text><text x="387" y="178" text-anchor="middle" style="font-size:14px">4 H₂O + 1 O₂ (excess)</text><text x="250" y="198" text-anchor="middle" class="t-blue" style="font-size:13px">H₂ runs out first, even though there is more of it: it is the limiting reactant</text></svg>`,
          alt: 'Before: 4 hydrogen molecules and 3 oxygen molecules. After: 4 water molecules and 1 leftover oxygen molecule, outlined as left over. Hydrogen ran out first even though there were more hydrogen molecules than oxygen molecules.',
          caption: '$\\ce{2H2 + O2 -> 2H2O}$ with 4 $\\ce{H2}$ and 3 $\\ce{O2}$. The 4 $\\ce{H2}$ need only 2 $\\ce{O2}$, so hydrogen is limiting and one $\\ce{O2}$ is left over. Count the atoms: 8 H and 6 O on both sides.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: '"Fewer" does not mean "limiting"',
          text: 'In the picture there are more $\\ce{H2}$ molecules than $\\ce{O2}$, yet $\\ce{H2}$ runs out first, because the recipe needs two $\\ce{H2}$ for every $\\ce{O2}$. The limiting reactant is the one that is short **relative to what the recipe needs**, not the one with the smaller mass or the smaller number of moles.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Crafting systems are limiting-reactant problems',
          text: 'A game crafting recipe such as "2 iron + 1 wood → 1 sword" is a balanced equation. The number of swords the player can craft is `std::min(iron / 2, wood / 1)` (integer division): each ingredient\'s supply divided by its coefficient, then the minimum. The argument that gives the minimum is the limiting reactant. Chemistry does the same thing with moles instead of item counts, and without rounding down.',
        },
      ],
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'mcq',
      prompt: 'A container holds 4 molecules of $\\ce{N2}$ and 9 molecules of $\\ce{H2}$, which react by $\\ce{N2 + 3H2 -> 2NH3}$. Which statement is correct?',
      options: [
        { text: '$\\ce{N2}$ is limiting because there are fewer $\\ce{N2}$ molecules', why: 'Fewer molecules does not make a reactant limiting. Four $\\ce{N2}$ would need 12 $\\ce{H2}$, and only 9 are available.' },
        { text: '$\\ce{H2}$ is limiting; 6 $\\ce{NH3}$ form and 1 $\\ce{N2}$ is left over', correct: true, why: '9 $\\ce{H2}$ react with $9 \\div 3 = 3$ $\\ce{N2}$ to give $3 \\times 2 = 6$ $\\ce{NH3}$. One of the four $\\ce{N2}$ remains.' },
        { text: '$\\ce{H2}$ is limiting; 8 $\\ce{NH3}$ form', why: '8 $\\ce{NH3}$ would be the yield if all 4 $\\ce{N2}$ reacted, which requires 12 $\\ce{H2}$.' },
        { text: 'Neither is limiting; they react completely', why: 'Complete reaction would need exactly a 1 : 3 ratio, e.g. 3 $\\ce{N2}$ and 9 $\\ce{H2}$. Here there is one $\\ce{N2}$ too many.' },
      ],
      explanation: 'Compute the product each reactant could make: 4 $\\ce{N2}$ could make 8 $\\ce{NH3}$; 9 $\\ce{H2}$ could make only 6. The smaller number wins, so $\\ce{H2}$ is limiting, 6 $\\ce{NH3}$ form, and $4 - 3 = 1$ $\\ce{N2}$ is left in excess.',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'concept',
      title: 'Finding the limiting reactant from masses',
      blocks: [
        {
          type: 'p',
          text: 'With real masses the reliable method is the one you just used with molecules: **compute how much product each reactant could make on its own. The reactant that gives less product is limiting, and that smaller amount is the [[theoretical-yield|theoretical yield]]**, the maximum product possible.',
        },
        {
          type: 'derivation',
          title: '10.0 g Al + 35.0 g chlorine',
          steps: [
            { tex: '\\ce{2Al + 3Cl2 -> 2AlCl3}', why: 'The balanced equation: the mole ratios come from here.' },
            { tex: '\\text{Al: } \\frac{10.0\\ \\text{g}}{26.982\\ \\text{g/mol}} = 0.3706\\ \\text{mol}', why: 'Grams to moles for each reactant.' },
            { tex: '\\ce{Cl2}: \\frac{35.0\\ \\text{g}}{70.90\\ \\text{g/mol}} = 0.4937\\ \\text{mol}', why: '$M(\\ce{Cl2}) = 2(35.45) = 70.90$ g/mol.' },
            { tex: '\\text{From Al: } 0.3706 \\times \\tfrac{2}{2} = 0.3706\\ \\text{mol}\\ \\ce{AlCl3}', why: 'Pretend Al is limiting: 2 mol $\\ce{AlCl3}$ per 2 mol Al.' },
            { tex: '\\text{From}\\ \\ce{Cl2}: 0.4937 \\times \\tfrac{2}{3} = 0.3291\\ \\text{mol}\\ \\ce{AlCl3}', why: 'Now pretend $\\ce{Cl2}$ is limiting: 2 mol $\\ce{AlCl3}$ per 3 mol $\\ce{Cl2}$.' },
            { tex: '0.3291 < 0.3706 \\implies \\ce{Cl2}\\ \\text{is limiting}', why: 'The chlorine runs out after making 0.3291 mol of product; the reaction cannot reach 0.3706 mol.' },
            { tex: '0.3291\\ \\text{mol} \\times 133.33\\ \\text{g/mol} = 43.9\\ \\text{g}\\ \\ce{AlCl3}', why: 'Theoretical yield in grams, with $M(\\ce{AlCl3}) = 26.982 + 3(35.45) = 133.33$ g/mol.' },
          ],
          result: 'The theoretical yield is 43.9 g of $\\ce{AlCl3}$, set by the chlorine.',
        },
        {
          type: 'derivation',
          title: 'How much excess Al is left over?',
          steps: [
            { tex: '0.3291\\ \\text{mol}\\ \\ce{AlCl3} \\times \\frac{2\\ \\text{mol Al}}{2\\ \\text{mol}\\ \\ce{AlCl3}} = 0.3291\\ \\text{mol Al}', why: 'Work from the amount of product actually made, back to the Al it consumed.' },
            { tex: '0.3291\\ \\text{mol} \\times 26.982\\ \\text{g/mol} = 8.88\\ \\text{g Al used}', why: 'Moles of Al to grams.' },
            { tex: '10.0\\ \\text{g} - 8.88\\ \\text{g} = 1.12\\ \\text{g Al left over}', why: 'Starting amount minus amount used.' },
          ],
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why compare product amounts?',
          text: 'Product amounts are all in the **same units of the same substance**, so they can be compared directly. Comparing grams of Al with grams of $\\ce{Cl2}$ (or even moles of Al with moles of $\\ce{Cl2}$) compares different things, because the recipe needs them in a 2 : 3 ratio. The product method also hands you the theoretical yield for free.',
        },
      ],
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'numeric',
      prompt: 'A mixture of 4.00 g of $\\ce{H2}$ and 16.0 g of $\\ce{O2}$ is ignited: $\\ce{2H2 + O2 -> 2H2O}$. What mass of water forms? Use $M(\\ce{H2}) = 2.016$, $M(\\ce{O2}) = 32.00$, $M(\\ce{H2O}) = 18.02$ g/mol; give three significant figures.',
      hint: 'Water from $\\ce{H2}$: $\\frac{4.00}{2.016} \\times \\frac{2}{2}$ mol. Water from $\\ce{O2}$: $\\frac{16.0}{32.00} \\times \\frac{2}{1}$ mol. The smaller one is what forms.',
      label: 'mass $\\ce{H2O}$ $=$',
      unit: 'g',
      answer: '16.0/32.00*2*18.02',
      answerTex: '18.0\\ \\text{g}',
      tolerance: 0.06,
      explanation: 'From $\\ce{H2}$: $1.984$ mol $\\ce{H2}$ could make $1.984$ mol $\\ce{H2O}$. From $\\ce{O2}$: $0.500$ mol $\\ce{O2}$ could make $1.000$ mol $\\ce{H2O}$. Oxygen is limiting, so $1.000\\ \\text{mol} \\times 18.02\\ \\text{g/mol} = 18.0$ g of water forms. Notice that the reactant with **more mass** (16.0 g of $\\ce{O2}$) is the limiting one, and almost 2 g of $\\ce{H2}$ is left over.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'error',
      prompt: '28.0 g of $\\ce{N2}$ and 4.84 g of $\\ce{H2}$ react: $\\ce{N2 + 3H2 -> 2NH3}$. A student computes the mass of ammonia formed. Tap the first line that is wrong.',
      lines: [
        'Moles: $\\ce{N2}$: $28.0 \\div 28.014 = 0.9995$ mol; $\\ce{H2}$: $4.84 \\div 2.016 = 2.401$ mol',
        'There are fewer moles of $\\ce{N2}$, so $\\ce{N2}$ is the limiting reactant',
        '$\\ce{NH3}$: $0.9995 \\times 2 = 1.999$ mol',
        'Mass: $1.999 \\times 17.031 = 34.0$ g $\\ce{NH3}$',
      ],
      errorLines: [2],
      explanation: 'Comparing raw moles ignores the 1 : 3 recipe. 0.9995 mol $\\ce{N2}$ would need $3 \\times 0.9995 = 2.999$ mol $\\ce{H2}$, but only 2.401 mol is available, so $\\ce{H2}$ is limiting. Correctly: $2.401 \\times \\frac{2}{3} = 1.601$ mol $\\ce{NH3}$, and $1.601 \\times 17.031 = 27.3$ g $\\ce{NH3}$. (The product method makes this automatic: $\\ce{N2}$ could make 1.999 mol, $\\ce{H2}$ only 1.601 mol.)',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'Watching the limiting reactant switch',
      blocks: [
        {
          type: 'p',
          text: 'Keep the chlorine fixed and add aluminum a little at a time. At first every gram of Al you add makes more $\\ce{AlCl3}$: Al is limiting, and product grows in proportion. At some point the chlorine is all used up. After that, extra aluminum just sits there as excess and the product stops growing. The graph has a **kink** exactly where the limiting reactant switches.',
        },
        {
          type: 'graph',
          x: [0, 20],
          y: [0, 100],
          xStep: 2,
          yStep: 10,
          functions: [
            { expr: '133.33*min(x/26.982, 2c/(3*70.90))', label: '$\\ce{AlCl3}$ formed (g)', color: 'blue' },
            { expr: 'max(0, x - 26.982*2c/(3*70.90))', label: 'leftover Al (g)', color: 'orange', dashed: true },
          ],
          vlines: [{ x: '26.982*2c/(3*70.90)', label: 'switch', color: 'gray' }],
          sliders: [{ name: 'c', min: 10, max: 70, step: 1, value: 35, label: 'mass of $\\ce{Cl2}$ (g)' }],
          readouts: [
            { label: 'Al at the kink (g) $=$', expr: '26.982*2c/(3*70.90)', digits: 3 },
            { label: 'maximum $\\ce{AlCl3}$ (g) $=$', expr: '133.33*2c/(3*70.90)', digits: 3 },
          ],
          caption: 'Horizontal axis: grams of Al added. Left of the dashed line, Al is limiting and the blue line rises with slope $\\frac{133.33}{26.982} \\approx 4.94$ g of product per g of Al. Right of it, $\\ce{Cl2}$ is limiting: the product is flat and the excess Al (orange) piles up. Slide the chlorine amount: the kink moves in proportion.',
        },
        {
          type: 'p',
          text: 'The graph is the minimum of two straight lines, $\\min(\\text{product from Al}, \\text{product from Cl}_2)$: exactly the "compute product from each reactant and take the smaller" rule, drawn. At the kink the two reactants are in perfect stoichiometric proportion and nothing is left over.',
        },
        {
          type: 'callout',
          variant: 'tip',
          text: 'In the lab, chemists often put the **cheaper** reactant in excess on purpose, to make sure every bit of the expensive one is converted. Engines do the same with air: running "lean" (excess air) burns the fuel completely.',
        },
      ],
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'numeric',
      prompt: 'In the graph\'s reaction, $\\ce{2Al + 3Cl2 -> 2AlCl3}$, with 35.0 g of $\\ce{Cl2}$: what mass of Al reacts with it exactly, so that neither reactant is in excess? (Al 26.982, $\\ce{Cl2}$ 70.90 g/mol; three significant figures)',
      hint: 'Grams $\\ce{Cl2}$ → mol $\\ce{Cl2}$ → mol Al (ratio 2 Al : 3 $\\ce{Cl2}$) → grams Al.',
      label: 'mass Al $=$',
      unit: 'g',
      answer: '35.0/70.90*2/3*26.982',
      answerTex: '8.88\\ \\text{g}',
      tolerance: 0.006,
      explanation: '$35.0 \\div 70.90 = 0.4937$ mol $\\ce{Cl2}$; $\\times \\frac{2}{3} = 0.3291$ mol Al; $\\times 26.982 = 8.88$ g Al. This is where the kink sits on the graph: below 8.88 g of Al, aluminum is limiting; above it, chlorine is. It also matches the "Al used" in the earlier worked example.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'concept',
      title: 'Theoretical, actual and percent yield',
      blocks: [
        {
          type: 'p',
          text: 'The theoretical yield is what the arithmetic promises if every particle of the limiting reactant becomes product. What you actually collect and weigh is the [[chem-actual-yield|actual yield]], and it is almost always less. The ratio is the [[percent-yield|percent yield]]:',
        },
        {
          type: 'theorem',
          name: 'Percent yield',
          tex: '\\text{percent yield} = \\frac{\\text{actual yield}}{\\text{theoretical yield}} \\times 100\\%',
          text: 'Both yields must be in the same units (usually grams of the same product).',
        },
        {
          type: 'list',
          items: [
            '**Incomplete reaction:** many reactions stop short of completion (the equilibrium chapters of General Chemistry explain why).',
            '**Side reactions:** some reactant turns into unwanted by-products instead.',
            '**Losses in handling:** product sticks to glassware, stays dissolved in a filtrate, or is lost while purifying.',
          ],
        },
        {
          type: 'derivation',
          title: 'The aluminum chloride run gives 39.5 g',
          steps: [
            { tex: '\\text{theoretical yield} = 43.88\\ \\text{g}', why: 'From the limiting reactant ($\\ce{Cl2}$) calculation. Keep an extra digit until the end.' },
            { tex: '\\text{percent yield} = \\frac{39.5\\ \\text{g}}{43.88\\ \\text{g}} \\times 100\\% = 90.0\\%', why: 'Actual over theoretical. The grams cancel.' },
          ],
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why yield matters so much in industry',
          text: 'Yields multiply across steps. A drug made in 10 steps, each with a respectable 90% yield, comes out at $0.9^{10} \\approx 0.35$: only 35% overall. Raising each step to 95% gives $0.95^{10} \\approx 0.60$. That is why chemists fight for every percent, and why shorter synthetic routes win.',
        },
        {
          type: 'callout',
          variant: 'warning',
          text: 'A percent yield **above 100%** does not mean you beat conservation of mass. It means the product is impure: usually still wet with solvent, or contaminated with excess reactant. Dry it and weigh again.',
        },
      ],
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'numeric',
      prompt: 'A reaction of 14.0 g of $\\ce{N2}$ with excess $\\ce{H2}$ ($\\ce{N2 + 3H2 -> 2NH3}$) produces 13.5 g of $\\ce{NH3}$. What is the percent yield? Use $M(\\ce{N2}) = 28.014$ and $M(\\ce{NH3}) = 17.031$ g/mol; give three significant figures.',
      hint: 'First the theoretical yield: $\\frac{14.0}{28.014} \\times 2 \\times 17.031$ g. Then actual ÷ theoretical × 100.',
      label: 'percent yield $=$',
      unit: '%',
      answer: '13.5/(14.0/28.014*2*17.031)*100',
      answerTex: '79.3\\%',
      tolerance: 0.06,
      explanation: '$14.0 \\div 28.014 = 0.4998$ mol $\\ce{N2}$, which can make $2 \\times 0.4998 = 0.9995$ mol $\\ce{NH3}$, or $0.9995 \\times 17.031 = 17.02$ g (theoretical yield). Percent yield $= \\frac{13.5}{17.02} \\times 100\\% = 79.3\\%$. Since $\\ce{H2}$ is in excess, $\\ce{N2}$ is the limiting reactant and sets the theoretical yield.',
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'concept',
      title: 'Stoichiometry in the real world: engines and rockets',
      blocks: [
        {
          type: 'p',
          text: 'Engineers think about reactions as **mass ratios**, because fuel tanks are filled by mass (or volume), not by moles. The stoichiometric mass ratio is exactly the roadmap calculation with 1 mol of fuel.',
        },
        {
          type: 'derivation',
          title: 'Oxygen-to-hydrogen mass ratio',
          steps: [
            { tex: '\\ce{2H2 + O2 -> 2H2O}', why: 'The reaction in many rocket engines, using liquid hydrogen and liquid oxygen.' },
            { tex: '4.032\\ \\text{g}\\ \\ce{H2}\\ \\text{per}\\ 31.998\\ \\text{g}\\ \\ce{O2}', why: 'Coefficients times molar masses: $2 \\times 2.016 = 4.032$ g of $\\ce{H2}$ for $1 \\times 31.998$ g of $\\ce{O2}$. These masses react exactly.' },
            { tex: '\\frac{31.998\\ \\text{g}\\ \\ce{O2}}{4.032\\ \\text{g}\\ \\ce{H2}} = 7.94', why: 'About 7.9 kg of oxygen per kg of hydrogen for exact stoichiometry.' },
          ],
          result: 'Real hydrogen engines deliberately run **fuel-rich**, around 6 : 1 (the Space Shuttle main engines used about 6 : 1): the oxygen is limiting and some hydrogen leaves unburned. Light exhaust molecules leave the nozzle faster, which improves performance, and the cooler exhaust is easier on the engine.',
        },
        {
          type: 'list',
          items: [
            '**Car and truck engines:** from the octane equation, 1 kg of fuel needs 3.50 kg of $\\ce{O2}$. Air is only about 23% oxygen by mass, so that means roughly 15 kg of air per kg of fuel.',
            '**Fuel-rich combustion** (too little air) leaves the fuel partly unburned and produces carbon monoxide, $\\ce{CO}$, a toxic gas. Running a generator or heater in an enclosed space is dangerous for exactly this stoichiometric reason.',
            '**Carbon dioxide output:** every kilogram of hydrocarbon fuel burned gives roughly 3 kg of $\\ce{CO2}$ (you calculated 3.08 kg for octane).',
          ],
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'Exam stoichiometry problems almost always follow one template: balance the equation, convert every given mass to moles, find the limiting reactant by comparing product amounts, then convert to the asked-for unit. Write the substance on every unit and the problem nearly solves itself.',
        },
      ],
    },
    // ------------------------------------------------------------------ 16
    {
      kind: 'truefalse',
      prompt: 'The reactant present in the smaller mass is always the limiting reactant.',
      answer: false,
      explanation: 'Mass alone says nothing about the recipe. In the hydrogen–oxygen question, 4.00 g of $\\ce{H2}$ was in **excess** while 16.0 g of $\\ce{O2}$ was limiting, because hydrogen molecules are so light that 4 g is nearly 2 mol. To find the limiting reactant, convert to moles and compare how much product each reactant could make.',
    },
  ],
  takeaways: [
    'Coefficients give mole ratios (not mass ratios); a mole ratio converts moles of one substance in a reaction into moles of another.',
    'Every mass problem follows the roadmap: grams A → moles A → moles B → grams B (÷ $M_A$, × ratio, × $M_B$).',
    'The limiting reactant is used up first; find it by computing how much product each reactant could make, and take the smaller.',
    'The theoretical yield comes from the limiting reactant; leftover excess = starting amount − amount consumed.',
    'Percent yield = actual ÷ theoretical × 100%; it is below 100% from incomplete reactions, side reactions and losses, and above 100% only for impure (often wet) product.',
    'Engineers use the same arithmetic as mass ratios: 7.94 : 1 oxygen to hydrogen, about 15 kg of air per kg of gasoline, about 3 kg of $\\ce{CO2}$ per kg of fuel.',
  ],
  reading: [
    {
      title: 'OpenStax Chemistry 2e — Chapter 4: Stoichiometry of Chemical Reactions',
      url: 'https://openstax.org/books/chemistry-2e/pages/4-introduction',
      source: 'openstax',
      note: 'Sections 4.3 and 4.4 cover reaction stoichiometry, limiting reactants and reaction yields with many worked examples.',
    },
    {
      title: 'PhET Interactive Simulations',
      url: 'https://phet.colorado.edu/',
      source: 'other',
      note: 'The free "Reactants, Products and Leftovers" simulation (search for it) lets you play with limiting reactants using sandwiches and molecules.',
    },
    {
      title: 'Wikipedia — Limiting reagent',
      url: 'https://en.wikipedia.org/wiki/Limiting_reagent',
      source: 'wikipedia',
      note: 'Two methods for finding the limiting reagent, including the product-comparison method used here.',
    },
    {
      title: 'Wikipedia — Airbag',
      url: 'https://en.wikipedia.org/wiki/Airbag',
      source: 'wikipedia',
      note: 'The engineering and history of airbags, including the gas-generating chemistry.',
    },
  ],
};
