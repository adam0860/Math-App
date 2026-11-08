import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'chem-formulas-composition',
  title: 'Percent Composition and Empirical Formulas',
  summary: 'Work from a formula to its percent composition by mass, and back from lab data to the formula: empirical formulas, molecular formulas and hydrates.',
  minutes: 18,
  objectives: [
    'Calculate the percent composition by mass of a compound from its formula or from experimental masses',
    'Explain the difference between an empirical formula and a molecular formula',
    'Determine an empirical formula from percent composition, including ratios such as 1.5 or 1.33',
    'Find a molecular formula from the empirical formula and the molar mass',
    'Find the number of water molecules in a hydrate from heating data',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Percent composition from a formula',
      blocks: [
        {
          type: 'p',
          text: 'A formula tells you the ratio of **atoms** in a compound. Often you need the ratio of **masses** instead: how much of a fertilizer is nitrogen, how much of an ore is iron. That is the [[percent-composition|percent composition by mass]]: the percentage of the compound\'s mass contributed by each element.',
        },
        {
          type: 'theorem',
          name: 'Mass percent of an element',
          tex: '\\%\\,\\text{element} = \\frac{n \\times M_{\\text{element}}}{M_{\\text{compound}}} \\times 100\\%',
          text: '$n$ is the number of atoms of the element in the formula. Think of one mole of the compound as your sample: then the top is the grams of that element in it, and the bottom is the grams of compound.',
        },
        {
          type: 'figure',
          svg: `<svg viewBox="0 0 500 170" xmlns="http://www.w3.org/2000/svg"><text x="300" y="18" text-anchor="middle" style="font-size:15px">H₂O</text><text x="110" y="56" text-anchor="end" style="font-size:15px">by atoms</text><rect x="120" y="32" width="240.0" height="36" class="f-gray" fill="currentColor" fill-opacity="0.35" stroke="currentColor" stroke-width="1.5"/><rect x="360.0" y="32" width="120.0" height="36" class="f-red" fill="currentColor" fill-opacity="0.8" stroke="currentColor" stroke-width="1.5"/><text x="240.0" y="56" text-anchor="middle" style="font-size:14px">H: 2 of 3 (66.7%)</text><text x="420.0" y="56" text-anchor="middle" style="font-size:14px;font-weight:600">O: 33.3%</text><text x="110" y="132" text-anchor="end" style="font-size:15px">by mass</text><rect x="120" y="108" width="40.3" height="36" class="f-gray" fill="currentColor" fill-opacity="0.35" stroke="currentColor" stroke-width="1.5"/><rect x="160.3" y="108" width="319.7" height="36" class="f-red" fill="currentColor" fill-opacity="0.8" stroke="currentColor" stroke-width="1.5"/><text x="140.1" y="102" text-anchor="middle" style="font-size:13px">H: 11.19%</text><text x="320.1" y="132" text-anchor="middle" style="font-size:14px;font-weight:600">O: 88.81%</text><text x="260" y="166" text-anchor="middle" class="t-gray" style="font-size:13px">each O atom (15.999 u) outweighs an H atom (1.008 u) about 16 to 1</text></svg>`,
          alt: 'Two bars for water. By atoms, hydrogen is two thirds (66.7 percent) and oxygen one third. By mass, hydrogen is only 11.19 percent and oxygen 88.81 percent, because each oxygen atom is about 16 times heavier than a hydrogen atom.',
          caption: 'Water is two-thirds hydrogen by atom count, but only about 11% hydrogen by mass. Percent composition is about **mass**.',
        },
        {
          type: 'derivation',
          title: 'Nitrogen in urea, a fertilizer',
          steps: [
            { tex: '\\begin{aligned} M &= 12.011 + 15.999 + 28.014 + 4.032 \\\\ &= 60.056\\ \\text{g/mol} \\end{aligned}', why: 'Count atoms first: 1 C, 1 O, 2 N and 4 H (the subscript 2 doubles the $\\ce{NH2}$ group). So N contributes $2(14.007) = 28.014$ and H contributes $4(1.008) = 4.032$.' },
            { tex: '\\text{mass of N in 1 mol} = 2 \\times 14.007 = 28.014\\ \\text{g}', why: 'One mole of urea contains two moles of N atoms.' },
            { tex: '\\%\\,\\ce{N} = \\frac{28.014\\ \\text{g}}{60.056\\ \\text{g}} \\times 100\\% = 46.65\\%', why: 'The part over the whole. The grams cancel, so the answer is a pure percentage.' },
          ],
          result: 'Urea is 46.65% nitrogen by mass, more than twice ammonium sulfate (21.20%), which is why it is the world\'s most-used nitrogen fertilizer.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why every sample gives the same percentages',
          text: 'Every molecule of urea has exactly the same atoms, so any sample, a gram or a ton, is just many copies of the same molecule. The mass fractions cannot change with sample size. This is the **law of definite proportions** (Proust, 1799), and it is what makes percent composition useful for identifying a compound or checking its purity.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'numeric',
      prompt: 'What is the mass percent of carbon in carbon dioxide, $\\ce{CO2}$? Use C 12.011 and O 15.999, and give two decimal places.',
      hint: '$M(\\ce{CO2}) = 12.011 + 2(15.999)$. Then divide the carbon mass by that.',
      label: '% C $=$',
      unit: '%',
      answer: '100*12.011/(12.011 + 2*15.999)',
      answerTex: '27.29\\%',
      tolerance: 0.02,
      explanation: '$M(\\ce{CO2}) = 12.011 + 31.998 = 44.009$ g/mol, so $\\%\\,\\ce{C} = \\frac{12.011}{44.009} \\times 100\\% = 27.29\\%$. The other 72.71% is oxygen. This is why burning 1 kg of carbon makes $\\frac{1}{0.2729} \\approx 3.66$ kg of $\\ce{CO2}$: most of the product\'s mass is oxygen taken from the air.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Percent composition from lab data',
      blocks: [
        {
          type: 'p',
          text: 'You can also measure percent composition directly: find the mass of each element in a weighed sample. Comparing the result with the percentages calculated from candidate formulas tells you which compound you have, or how pure it is.',
        },
        {
          type: 'derivation',
          title: 'Burning 0.486 g of Mg gives 0.806 g of oxide',
          steps: [
            { tex: '\\text{mass of O} = 0.806\\ \\text{g} - 0.486\\ \\text{g} = 0.320\\ \\text{g}', why: 'Conservation of mass: the oxide weighs more than the metal by exactly the mass of oxygen it picked up from the air.' },
            { tex: '\\%\\,\\ce{Mg} = \\frac{0.486\\ \\text{g}}{0.806\\ \\text{g}} \\times 100\\% = 60.3\\%', why: 'Part over whole, using the measured masses.' },
            { tex: '\\%\\,\\ce{O} = \\frac{0.320\\ \\text{g}}{0.806\\ \\text{g}} \\times 100\\% = 39.7\\%', why: 'The percentages of all elements must add to 100%, a useful check: $60.3 + 39.7 = 100.0$.' },
            { tex: '\\ce{MgO}: \\frac{24.305}{24.305 + 15.999} \\times 100\\% = 60.30\\%\\ \\ce{Mg}', why: 'Calculate the percentage the formula $\\ce{MgO}$ predicts. It matches the experiment, so the product is $\\ce{MgO}$.' },
          ],
        },
        {
          type: 'callout',
          variant: 'tip',
          text: 'When an element\'s mass is not measured directly (here, oxygen), find it **by difference**: total mass minus the masses you did measure.',
        },
        {
          type: 'callout',
          variant: 'note',
          text: 'Industry uses this constantly. Iron ore is sold by its iron content, a fertilizer bag lists its N–P–K percentages, and a lab checks a drug\'s purity by comparing measured composition with the formula\'s.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'mcq',
      prompt: 'A rust-colored iron oxide is analyzed and found to be 69.9% iron by mass. Which formula fits? (Fe 55.845, O 15.999)',
      options: [
        { text: '$\\ce{FeO}$', why: '$\\frac{55.845}{71.844} = 77.7\\%$ Fe: too much iron.' },
        { text: '$\\ce{Fe3O4}$', why: '$\\frac{3(55.845)}{231.531} = 72.4\\%$ Fe: close, but not within experimental error of 69.9%.' },
        { text: '$\\ce{Fe2O3}$', correct: true, why: '$\\frac{2(55.845)}{159.687} = 69.9\\%$ Fe: a match. This is hematite, the main iron ore and the red in rust.' },
        { text: 'Impossible to tell without the molar mass', why: 'Different iron oxides have different percent compositions, so the percentage alone can pick one out here.' },
      ],
      explanation: 'Compute the percent Fe each formula predicts and compare: $\\ce{FeO}$ 77.7%, $\\ce{Fe3O4}$ 72.4%, $\\ce{Fe2O3}$ 69.9%. Only $\\ce{Fe2O3}$ matches. More oxygen per iron means a lower iron percentage.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Empirical and molecular formulas',
      blocks: [
        {
          type: 'p',
          text: 'Percent composition fixes the **ratio** of atoms in a compound, but not how many atoms make up one molecule. 1 C : 2 H could be $\\ce{CH2}$, $\\ce{C2H4}$, $\\ce{C4H8}$, …; all have exactly the same mass percentages. So chemists distinguish two formulas:',
        },
        {
          type: 'definition',
          term: 'Empirical formula',
          text: 'The [[empirical-formula]] gives the **simplest whole-number ratio** of atoms in a compound. It is what composition data can tell you. "Empirical" means "from experiment".',
        },
        {
          type: 'definition',
          term: 'Molecular formula',
          text: 'The [[molecular-formula]] gives the **actual number** of each atom in one molecule. It is always a whole-number multiple $n$ of the empirical formula: $(\\text{empirical})_n$.',
        },
        {
          type: 'table',
          headers: ['Compound', 'Molecular formula', 'Empirical formula', '$n$'],
          rows: [
            ['glucose', '$\\ce{C6H12O6}$', '$\\ce{CH2O}$', '6'],
            ['acetic acid (vinegar)', '$\\ce{C2H4O2}$', '$\\ce{CH2O}$', '2'],
            ['formaldehyde', '$\\ce{CH2O}$', '$\\ce{CH2O}$', '1'],
            ['hydrogen peroxide', '$\\ce{H2O2}$', '$\\ce{HO}$', '2'],
            ['benzene', '$\\ce{C6H6}$', '$\\ce{CH}$', '6'],
            ['water', '$\\ce{H2O}$', '$\\ce{H2O}$', '1'],
          ],
          caption: 'Glucose, acetic acid and formaldehyde are completely different substances with the same empirical formula, so the same percent composition.',
        },
        {
          type: 'callout',
          variant: 'note',
          text: 'Formulas of ionic compounds like $\\ce{NaCl}$ and $\\ce{CaCl2}$ are already empirical formulas: an ionic crystal has no separate molecules, only a repeating ratio of ions.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'fill',
      prompt: 'Give the empirical formula of each compound.',
      template: 'Ethylene $\\ce{C2H4}$: ___ · Dinitrogen tetroxide $\\ce{N2O4}$: ___ · Glucose $\\ce{C6H12O6}$: ___',
      blanks: [{ answers: ['$\\ce{CH2}$'] }, { answers: ['$\\ce{NO2}$'] }, { answers: ['$\\ce{CH2O}$'] }],
      wordBank: ['$\\ce{CH2}$', '$\\ce{NO2}$', '$\\ce{CH2O}$', '$\\ce{C2H4}$', '$\\ce{N2O}$', '$\\ce{C3H6O3}$', '$\\ce{CH4}$'],
      explanation: 'Divide every subscript by their greatest common factor. $\\ce{C2H4}$: divide by 2 to get $\\ce{CH2}$. $\\ce{N2O4}$: divide by 2 to get $\\ce{NO2}$. $\\ce{C6H12O6}$: divide by 6 to get $\\ce{CH2O}$. ($\\ce{C3H6O3}$ has the right ratio but is not the *simplest* one.)',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'Empirical formula from percent composition',
      blocks: [
        {
          type: 'p',
          text: 'Going backwards, from percentages to a formula, takes four moves. A popular memory aid: **percent to mass, mass to mole, divide by small, multiply till whole.**',
        },
        {
          type: 'steps',
          items: [
            { title: 'Percent to mass', text: 'Assume a 100 g sample. Then each percentage is simply a mass in grams.' },
            { title: 'Mass to mole', text: 'Divide each mass by its element\'s molar mass. Formulas count atoms, and moles count atoms; grams do not.' },
            { title: 'Divide by small', text: 'Divide every mole amount by the smallest one. The smallest becomes 1 and the others become ratios to it.' },
            { title: 'Multiply till whole', text: 'If the ratios are not all close to whole numbers, multiply them all by the same small integer (next card).' },
          ],
        },
        {
          type: 'derivation',
          title: '40.00% C, 6.71% H, 53.29% O',
          steps: [
            { tex: '40.00\\ \\text{g C},\\quad 6.71\\ \\text{g H},\\quad 53.29\\ \\text{g O}', why: 'Assume exactly 100 g, so percentages become grams.' },
            { tex: '\\text{C: } \\frac{40.00\\ \\cancel{\\text{g}}}{12.011\\ \\cancel{\\text{g}}/\\text{mol}} = 3.330\\ \\text{mol}', why: 'Grams to moles with the molar mass of carbon.' },
            { tex: '\\text{H: } \\frac{6.71}{1.008} = 6.657\\ \\text{mol}', why: 'The same conversion for hydrogen…' },
            { tex: '\\text{O: } \\frac{53.29}{15.999} = 3.331\\ \\text{mol}', why: '…and for oxygen.' },
            { tex: '\\text{C} : \\text{H} : \\text{O} = 3.330 : 6.657 : 3.331', why: 'This mole ratio is the atom ratio, but not yet in simplest form.' },
            { tex: '= 1.000 : 1.999 : 1.000', why: 'Divide by the smallest amount, 3.330 mol. The tiny departures from whole numbers come from rounding in the data.' },
            { tex: '\\ce{CH2O}', why: 'The ratios are 1 : 2 : 1, so these are the subscripts.' },
          ],
          result: 'The empirical formula is $\\ce{CH2O}$. (It could be formaldehyde, acetic acid, glucose… the next steps tell which.)',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why "assume 100 g" is allowed',
          text: 'Percent composition does not depend on sample size (law of definite proportions), so you can pick any sample you like. 100 g just makes the arithmetic free. Any other mass would scale every mole amount by the same factor, and that factor disappears when you divide by the smallest.',
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'order',
      prompt: 'Order the steps for finding an empirical formula from percent composition.',
      lines: [
        'Assume a 100 g sample, so each percentage becomes a mass in grams',
        'Convert each mass to moles using the element\'s molar mass',
        'Divide every mole amount by the smallest mole amount',
        'If a ratio ends in about .5 or .33, multiply all ratios by the same whole number',
        'Use the whole-number ratios as subscripts',
      ],
      distractors: ['Divide each percentage by the largest percentage to get the subscripts'],
      explanation: 'Percent → grams → moles → ratio → whole numbers. Formulas count atoms, so you must convert to moles before comparing; comparing percentages or grams directly (the distractor) ignores that atoms of different elements have different masses.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'concept',
      title: 'When the ratios are not whole numbers',
      blocks: [
        {
          type: 'p',
          text: 'After dividing by the smallest, you will sometimes get ratios like 1 : 1.5 or 1 : 1.33. These are **real** fractions, not measurement noise: a compound can have 2 atoms of one element for every 3 of another. Multiply every ratio by the integer that clears the fraction.',
        },
        {
          type: 'table',
          headers: ['Ratio ends in about…', 'Multiply all ratios by', 'Example'],
          rows: [
            ['.50', '2', '$1 : 1.5 \\to 2 : 3$'],
            ['.33 or .67', '3', '$1 : 1.33 \\to 3 : 4$'],
            ['.25 or .75', '4', '$1 : 1.25 \\to 4 : 5$'],
            ['.20, .40, .60, .80', '5', '$1 : 2.4 \\to 5 : 12$'],
          ],
        },
        {
          type: 'derivation',
          title: 'An iron oxide: 69.94% Fe, 30.06% O',
          steps: [
            { tex: '\\text{Fe: } \\frac{69.94}{55.845} = 1.2524\\ \\text{mol}', why: 'Assume 100 g and convert each mass to moles.' },
            { tex: '\\text{O: } \\frac{30.06}{15.999} = 1.8789\\ \\text{mol}', why: 'Same for oxygen.' },
            { tex: '\\text{Fe} : \\text{O} = 1 : \\frac{1.8789}{1.2524} = 1 : 1.500', why: 'Divide by the smaller amount, 1.2524 mol.' },
            { tex: '= 2 : 3', why: '1.500 is not within rounding error of a whole number, so multiply both ratios by 2.' },
            { tex: '\\ce{Fe2O3}', why: 'Subscripts 2 and 3. This matches the hematite from the earlier question.' },
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Do not round 1.5 to 2',
          text: 'Rounding is only for small experimental scatter: a ratio within about 0.1 of a whole number (1.98, 3.04). A value like 1.50, 2.33 or 1.25 is telling you to multiply, not round. Rounding $1 : 1.5$ to $1 : 2$ would give $\\ce{FeO2}$, which is a different composition (63.6% Fe) altogether.',
        },
      ],
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'numeric',
      prompt: 'Magnetite, a magnetic iron ore, is 72.36% Fe and 27.64% O by mass. Find its empirical formula $\\ce{Fe}_a\\ce{O}_b$ (smallest whole numbers). What is $b$, the subscript of oxygen? Use Fe 55.845, O 15.999.',
      hint: 'Moles: Fe $72.36/55.845$, O $27.64/15.999$. Divide by the smaller; what is the decimal part of the ratio?',
      label: '$b =$',
      answer: '4',
      explanation: 'Fe: $\\frac{72.36}{55.845} = 1.2957$ mol; O: $\\frac{27.64}{15.999} = 1.7276$ mol. Ratio $1 : \\frac{1.7276}{1.2957} = 1 : 1.333$. A ratio ending in .33 means multiply by 3: $3 : 4$. The formula is $\\ce{Fe3O4}$, so $b = 4$.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'error',
      prompt: 'A student finds the empirical formula of an oxide of phosphorus that is 43.64% P and 56.36% O (P 30.974, O 15.999). Tap the first line that is wrong.',
      lines: [
        'Assume 100 g: 43.64 g P and 56.36 g O',
        'P: $43.64 \\div 30.974 = 1.409$ mol; O: $56.36 \\div 15.999 = 3.523$ mol',
        'Divide by 1.409: P $= 1.000$, O $= 2.500$',
        'Round to whole numbers: P 1, O 3, so the formula is $\\ce{PO3}$',
      ],
      errorLines: [4],
      explanation: 'A ratio of 2.500 is not experimental scatter around 3 (or 2); it is a genuine half. Multiply both by 2: P 2, O 5, giving $\\ce{P2O5}$. Check: $\\frac{2(30.974)}{2(30.974) + 5(15.999)} = 43.64\\%$ P ✓. (The actual molecules are $\\ce{P4O10}$, a multiple of $\\ce{P2O5}$, which is exactly the empirical/molecular distinction.)',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'concept',
      title: 'From empirical formula to molecular formula',
      blocks: [
        {
          type: 'p',
          text: 'To get the molecular formula you need one more measurement: the molar mass of the compound (chemists get it from a mass spectrometer or from the density of the gas). Since the molecule is $n$ copies of the empirical unit, its molar mass is $n$ times the empirical formula mass.',
        },
        {
          type: 'theorem',
          name: 'Finding the multiplier',
          tex: 'n = \\frac{M_{\\text{compound}}}{M_{\\text{empirical formula}}}',
          text: 'Then molecular formula = (empirical formula)$_n$: multiply every subscript by $n$. $n$ must come out very close to a whole number; if it does not, recheck the empirical formula.',
        },
        {
          type: 'derivation',
          title: '85.63% C, 14.37% H, molar mass 56.1 g/mol',
          steps: [
            { tex: '\\text{C: } \\frac{85.63}{12.011} = 7.129\\ \\text{mol}', why: 'Percent to mass (100 g sample), mass to mole.' },
            { tex: '\\text{H: } \\frac{14.37}{1.008} = 14.256\\ \\text{mol}', why: 'Same for hydrogen.' },
            { tex: '\\text{C} : \\text{H} = 1 : 2.000 \\implies \\ce{CH2}', why: 'Divide by the smaller, 7.129 mol.' },
            { tex: 'M(\\ce{CH2}) = 12.011 + 2(1.008) = 14.027\\ \\text{g/mol}', why: 'The mass of one empirical unit.' },
            { tex: 'n = \\frac{56.1}{14.027} = 4.00', why: 'The molecule weighs 4 times as much as one $\\ce{CH2}$ unit.' },
            { tex: '(\\ce{CH2})_4 = \\ce{C4H8}', why: 'Multiply every subscript by 4.' },
          ],
          result: 'The molecular formula is $\\ce{C4H8}$ (a butene, or cyclobutane: same formula, different structure).',
        },
        {
          type: 'graph',
          x: [0, 21],
          y: [70, 90],
          xStep: 2,
          yStep: 5,
          functions: [{ expr: '100*12.011x/(14.027x + 2.016)', label: '% C in $\\ce{C}_n\\ce{H}_{2n+2}$', color: 'blue', domain: [1, 20] }],
          hlines: [{ y: 85.63, label: 'CH₂: 85.63%', color: 'gray' }],
          points: [{ x: 'n', y: '100*12.011n/(14.027n + 2.016)', label: 'alkane with n carbons' }],
          sliders: [{ name: 'n', min: 1, max: 20, step: 1, value: 1, label: 'carbon atoms $n$' }],
          readouts: [{ label: '% C by mass $=$', expr: '100*12.011n/(14.027n + 2.016)', digits: 4 }],
          caption: 'Percent carbon in the alkanes $\\ce{CH4}$, $\\ce{C2H6}$, $\\ce{C3H8}$, … As $n$ grows, the curve flattens toward the $\\ce{CH2}$ value: big hydrocarbons have nearly identical compositions. Composition alone cannot tell them apart; the molar mass can.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why composition alone is not enough',
          text: 'Mass percentages are ratios, and ratios are unchanged when you multiply every subscript by $n$: $\\frac{4(12.011)}{4(14.027)} = \\frac{12.011}{14.027}$. Only a quantity that depends on the *size* of the molecule, like its molar mass, can find $n$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'numeric',
      prompt: 'Benzene has the empirical formula $\\ce{CH}$ and a molar mass of 78.11 g/mol. How many carbon atoms are in one benzene molecule? (C 12.011, H 1.008)',
      hint: 'Find $M(\\ce{CH})$, then $n = 78.11 / M(\\ce{CH})$.',
      label: 'C atoms $=$',
      answer: '6',
      explanation: '$M(\\ce{CH}) = 12.011 + 1.008 = 13.019$ g/mol, so $n = \\frac{78.11}{13.019} = 6.00$. The molecular formula is $(\\ce{CH})_6 = \\ce{C6H6}$, with 6 carbon atoms (and 6 hydrogens). Acetylene, $\\ce{C2H2}$, has the same empirical formula with $n = 2$.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'concept',
      title: 'Hydrates: counting the water in a crystal',
      blocks: [
        {
          type: 'p',
          text: 'Many ionic compounds crystallize from water with water molecules locked into the crystal in a fixed ratio. Such a compound is a [[chem-hydrate|hydrate]]. Copper(II) sulfate pentahydrate, $\\ce{CuSO4*5H2O}$, has five water molecules per formula unit; the dot means "together with", not multiplication. Its molar mass includes the water: $159.60 + 5(18.015) = 249.68$ g/mol.',
        },
        {
          type: 'figure',
          svg: `<svg viewBox="0 0 500 170" xmlns="http://www.w3.org/2000/svg">
  <rect x="15" y="40" width="160" height="80" rx="10" class="f-blue" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="2"/>
  <text x="95" y="70" text-anchor="middle" style="font-size:16px;font-weight:600">CuSO₄·5H₂O</text>
  <text x="95" y="92" text-anchor="middle" class="t-blue" style="font-size:14px">blue crystals</text>
  <text x="95" y="110" text-anchor="middle" style="font-size:13px">249.68 g/mol</text>
  <line x1="185" y1="80" x2="255" y2="80" stroke="currentColor" stroke-width="2.5"/>
  <polyline points="246,73 256,80 246,87" fill="none" stroke="currentColor" stroke-width="2.5"/>
  <text x="218" y="70" text-anchor="middle" style="font-size:18px">Δ</text>
  <text x="218" y="104" text-anchor="middle" class="t-gray" style="font-size:12px">heat</text>
  <rect x="265" y="40" width="130" height="80" rx="10" fill="none" stroke="currentColor" stroke-width="2"/>
  <text x="330" y="70" text-anchor="middle" style="font-size:16px;font-weight:600">CuSO₄</text>
  <text x="330" y="92" text-anchor="middle" class="t-gray" style="font-size:14px">white powder</text>
  <text x="330" y="110" text-anchor="middle" style="font-size:13px">159.60 g/mol</text>
  <text x="410" y="86" text-anchor="middle" style="font-size:20px">+</text>
  <text x="458" y="86" text-anchor="middle" style="font-size:16px">5 H₂O(g)</text>
  <line x1="458" y1="66" x2="458" y2="30" stroke="currentColor" class="s-teal" stroke-width="1.8" stroke-dasharray="4 3"/>
  <polyline points="452,38 458,28 464,38" fill="none" stroke="currentColor" class="s-teal" stroke-width="1.8"/>
  <text x="250" y="152" text-anchor="middle" style="font-size:14px">mass lost on heating = mass of water</text>
</svg>`,
          alt: 'Blue crystals of copper(II) sulfate pentahydrate, 249.68 grams per mole, are heated and become white anhydrous copper(II) sulfate powder, 159.60 grams per mole, plus 5 water molecules that leave as vapor. The mass lost on heating equals the mass of water.',
          caption: 'Heating drives the water out. The color change is a built-in indicator: the water molecules are part of what makes the crystal blue.',
        },
        {
          type: 'p',
          text: 'To find the number of waters $x$ in an unknown hydrate, weigh it, heat it until its mass stops changing (all water gone), and weigh the **anhydrous** ("without water") solid that remains. The mass lost is water. Then it is an empirical-formula problem with two "pieces": salt and water.',
        },
        {
          type: 'derivation',
          title: 'Heating 5.00 g of hydrate leaves 3.20 g',
          steps: [
            { tex: '\\text{water lost} = 5.00\\ \\text{g} - 3.20\\ \\text{g} = 1.80\\ \\text{g}\\ \\ce{H2O}', why: 'Conservation of mass: whatever left was water.' },
            { tex: '\\frac{3.20\\ \\text{g}}{159.60\\ \\text{g/mol}} = 0.02005\\ \\text{mol}\\ \\ce{CuSO4}', why: 'Mass to moles for the anhydrous salt: Cu 63.546 + S 32.06 + 4(15.999) = 159.60 g/mol.' },
            { tex: '\\frac{1.80\\ \\text{g}}{18.015\\ \\text{g/mol}} = 0.09992\\ \\text{mol}\\ \\ce{H2O}', why: 'Mass to moles for the water.' },
            { tex: 'x = \\frac{0.09992\\ \\text{mol}\\ \\ce{H2O}}{0.02005\\ \\text{mol}\\ \\ce{CuSO4}} = 4.98 \\approx 5', why: 'Moles of water per mole of salt; 4.98 is within experimental error of 5.' },
          ],
          result: 'The hydrate is $\\ce{CuSO4*5H2O}$. As a check, water is $\\frac{5(18.015)}{249.68} = 36.1\\%$ of its mass, and $\\frac{1.80}{5.00} = 36.0\\%$ was lost.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Hydrates at work',
          text: 'Many humidity indicator cards, packed with electronics and military equipment in sealed containers, use cobalt(II) chloride: blue when dry, pink once it has absorbed water to form the hydrate $\\ce{CoCl2*6H2O}$. Plaster of Paris sets by taking up water to become the hydrate gypsum, $\\ce{CaSO4*2H2O}$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'numeric',
      prompt: 'A 2.000 g sample of magnesium sulfate hydrate, $\\ce{MgSO4}\\cdot x\\,\\ce{H2O}$, is heated to constant mass, leaving 0.977 g of anhydrous $\\ce{MgSO4}$. Find $x$. Use $M(\\ce{MgSO4}) = 120.36$ g/mol and $M(\\ce{H2O}) = 18.015$ g/mol.',
      hint: 'Water lost $= 2.000 - 0.977$ g. Convert both the water and the $\\ce{MgSO4}$ to moles, then divide.',
      label: '$x =$',
      answer: '7',
      explanation: 'Water: $2.000 - 0.977 = 1.023$ g, so $\\frac{1.023}{18.015} = 0.05679$ mol. Salt: $\\frac{0.977}{120.36} = 0.008117$ mol. Ratio: $\\frac{0.05679}{0.008117} = 7.00$, so the hydrate is $\\ce{MgSO4*7H2O}$, better known as Epsom salt. Notice that more than half its mass is water.',
    },
    // ------------------------------------------------------------------ 16
    {
      kind: 'truefalse',
      prompt: 'Two different compounds can never have the same percent composition by mass.',
      answer: false,
      explanation: 'Any compounds with the same **empirical** formula have identical percent compositions. Acetylene ($\\ce{C2H2}$, a welding fuel) and benzene ($\\ce{C6H6}$) are both 92.26% C and 7.74% H. Glucose, acetic acid and formaldehyde (all $\\ce{CH2O}$) likewise match. To tell them apart you need the molar mass, or other evidence about structure.',
    },
  ],
  takeaways: [
    'Mass percent of an element $= \\frac{(\\text{atoms in formula}) \\times (\\text{molar mass of element})}{\\text{molar mass of compound}} \\times 100\\%$; it is the same for every sample of a pure compound.',
    'From lab data, mass percent is part over whole; find an unmeasured element by difference.',
    'The empirical formula is the simplest whole-number atom ratio; the molecular formula is a whole-number multiple of it.',
    'Empirical formula: percent to mass (100 g), mass to mole, divide by the smallest, multiply till whole (×2 for .5, ×3 for .33 or .67).',
    'Molecular formula: $n = M_{\\text{compound}} / M_{\\text{empirical}}$, then multiply every subscript by $n$.',
    'For a hydrate, mass lost on heating is water; $x$ = moles of water ÷ moles of anhydrous salt.',
  ],
  reading: [
    {
      title: 'OpenStax Chemistry 2e — Chapter 3: Composition of Substances and Solutions',
      url: 'https://openstax.org/books/chemistry-2e/pages/3-introduction',
      source: 'openstax',
      note: 'Section 3.2 covers percent composition and empirical and molecular formulas, including combustion analysis.',
    },
    {
      title: 'Wikipedia — Empirical formula',
      url: 'https://en.wikipedia.org/wiki/Empirical_formula',
      source: 'wikipedia',
      note: 'Short article with more examples of compounds that share an empirical formula.',
    },
    {
      title: 'Wikipedia — Water of crystallization',
      url: 'https://en.wikipedia.org/wiki/Water_of_crystallization',
      source: 'wikipedia',
      note: 'How water molecules sit inside hydrate crystals, with a table of common hydrates.',
    },
    {
      title: 'LibreTexts Chemistry',
      url: 'https://chem.libretexts.org/',
      source: 'libretexts',
      note: 'Search "empirical formula" for extra practice sets with fully worked solutions.',
    },
  ],
};
