import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'chem-mole',
  title: 'The Mole and Molar Mass',
  summary: "Count atoms by weighing them: Avogadro's number, molar mass, and the conversions between grams, moles and particles.",
  minutes: 18,
  objectives: [
    'Explain why chemists count particles in moles, and how large $6.022 \\times 10^{23}$ is',
    'Explain why an atomic mass in u is numerically equal to the molar mass in g/mol',
    'Calculate the molar mass of any compound from its formula',
    'Convert between grams, moles and number of particles with dimensional analysis',
    'Count atoms of one element inside a sample of a compound',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Why count in moles?',
      blocks: [
        {
          type: 'p',
          text: 'A balanced equation such as $\\ce{2H2 + O2 -> 2H2O}$ is a recipe written in **particles**: two molecules of hydrogen for every one of oxygen. But nobody can pick up two molecules. A single water molecule has a mass of about $3.0 \\times 10^{-23}$ g, so even one small drop of water (about 0.05 g) holds roughly $1.7 \\times 10^{21}$ molecules. Atoms are far too small and far too numerous to count one by one.',
        },
        {
          type: 'p',
          text: 'The solution is the same one people use for anything small and numerous: **count by weighing**. A hardware store does not count nails; it weighs them, because it knows how much one nail weighs. A bank weighs rolls of coins. If you know the mass of one particle, a mass tells you a count.',
        },
        {
          type: 'p',
          text: 'Chemists bundle particles into a standard group called the [[mole]] (symbol mol), the way bakers bundle eggs into dozens. A dozen is 12 of anything; a mole is $6.022 \\times 10^{23}$ of anything. The number is enormous because atoms are tiny: it is chosen so that one mole of atoms is an amount you can hold in your hand and weigh on a balance.',
        },
        {
          type: 'table',
          headers: ['Counting unit', 'How many', 'Used for'],
          rows: [
            ['pair', '2', 'socks, shoes'],
            ['dozen', '12', 'eggs, donuts'],
            ['ream', '500', 'sheets of paper'],
            ['mole', '$6.022 \\times 10^{23}$', 'atoms, molecules, ions, electrons'],
          ],
          caption: 'A mole is just a "chemist\'s dozen": a counting unit, not a mass or a volume.',
        },
        {
          type: 'callout',
          variant: 'analogy',
          title: 'Weighing instead of counting',
          text: 'Suppose one jelly bean weighs 1.5 g and one marble weighs 5.0 g. To get equal *numbers* of each, you do not weigh out equal masses; you weigh out masses in the ratio 1.5 : 5.0, e.g. 150 g of jelly beans and 500 g of marbles (100 of each). Molar mass will play the role of "mass of one item" for atoms, scaled up to a mole.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'numeric',
      prompt: 'One water molecule has a mass of $2.99 \\times 10^{-23}$ g. How many water molecules are in 18.0 g of water? Give the number in front of $10^{23}$ (three significant figures).',
      hint: 'Number of molecules = total mass ÷ mass of one molecule. Divide the 18.0 by 2.99 and handle the powers of ten separately.',
      label: 'molecules $=$',
      unit: '× 10²³',
      answer: '18.0/2.99',
      answerTex: '6.02 \\times 10^{23}',
      tolerance: 0.01,
      explanation: '$\\frac{18.0\\ \\text{g}}{2.99 \\times 10^{-23}\\ \\text{g/molecule}} = 6.02 \\times 10^{23}$ molecules. That is Avogadro\'s number: 18.0 g of water (its molar mass in grams) is exactly one mole. You just discovered the key fact of this lesson.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: "Avogadro's number",
      blocks: [
        {
          type: 'definition',
          term: 'Mole',
          text: "One **mole** is the amount of substance containing exactly $6.02214076 \\times 10^{23}$ elementary entities (atoms, molecules, ions, …). This number is [[avogadros-number|Avogadro's number]]. Used as a conversion factor with units it is the Avogadro constant, $N_A = \\pu{6.022e23 mol-1}$.",
        },
        {
          type: 'p',
          text: 'Four significant figures, $6.022 \\times 10^{23}$, is plenty for this course. In [[scientific-notation]] it is easy to write and easy to underestimate. Some ways to feel how big it is:',
        },
        {
          type: 'list',
          items: [
            '$6.022 \\times 10^{23}$ seconds is about $1.9 \\times 10^{16}$ years, over a million times the age of the universe (13.8 billion years).',
            'Share $6.022 \\times 10^{23}$ pennies among 8 billion people and everyone gets about $7.5 \\times 10^{13}$ pennies: roughly 750 billion dollars each.',
            'Yet $6.022 \\times 10^{23}$ water molecules is only 18 g of water: about 18 mL, a little more than a tablespoon.',
          ],
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why this particular number?',
          text: 'It was chosen to connect the atomic mass scale to grams. The atomic mass unit u is defined as $\\frac{1}{12}$ of the mass of a carbon-12 atom, and the mole was originally defined as the number of atoms in exactly 12 g of carbon-12. Divide 12 g by the mass of one C-12 atom ($1.993 \\times 10^{-23}$ g) and you get $6.022 \\times 10^{23}$. The number is not special in nature; it is the exchange rate between "u" and "g".',
        },
        {
          type: 'callout',
          variant: 'history',
          text: 'Amedeo Avogadro proposed in 1811 that equal volumes of gases contain equal numbers of particles, but he never knew the number. Jean Perrin measured it around 1909 (from the jiggling of tiny particles in water) and named it after Avogadro; it helped win him the 1926 Nobel Prize. Since 2019 the SI defines the mole by fixing $N_A$ at exactly $6.02214076 \\times 10^{23}\\ \\text{mol}^{-1}$.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Why software counts in moles too',
          text: 'A signed 64-bit integer tops out near $9.2 \\times 10^{18}$, so it cannot even hold the number of molecules in a drop of water. A `double` can store $6.022 \\times 10^{23}$ easily (its range reaches about $10^{308}$), but only to about 16 significant digits. Chemistry and simulation code sidesteps both problems the way chemists do: it stores amounts in moles, where everyday quantities are numbers like 0.25 or 3.7.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'numeric',
      prompt: 'How many molecules are in 2.50 mol of carbon dioxide? Use $N_A = 6.022 \\times 10^{23}$ and give the number in front of $10^{24}$ (three significant figures).',
      hint: 'Multiply moles by molecules per mole: $2.50 \\times 6.022 \\times 10^{23}$, then rewrite in proper scientific notation.',
      label: 'molecules $=$',
      unit: '× 10²⁴',
      answer: '2.50*6.022/10',
      answerTex: '1.51 \\times 10^{24}',
      tolerance: 0.006,
      explanation: '$2.50\\ \\cancel{\\text{mol}} \\times \\frac{6.022 \\times 10^{23}\\ \\text{molecules}}{1\\ \\cancel{\\text{mol}}} = 15.06 \\times 10^{23} = 1.51 \\times 10^{24}$ molecules. Moles to particles is a single multiplication, exactly like "2.5 dozen = 30 eggs". (Moving the decimal one place left raises the power of ten by one.)',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Molar mass: the periodic table in grams',
      blocks: [
        {
          type: 'p',
          text: 'The [[molar-mass|molar mass]] $M$ of a substance is the mass of one mole of it, in grams per mole (g/mol). For an element, you read it straight off the periodic table: it is the same number as the [[atomic-mass|average atomic mass]], with the unit changed from u to g/mol.',
        },
        {
          type: 'figure',
          svg: `<svg viewBox="0 0 500 190" xmlns="http://www.w3.org/2000/svg">
  <rect x="20" y="30" width="120" height="130" rx="8" fill="none" stroke="currentColor" stroke-width="2"/>
  <text x="34" y="54" style="font-size:16px">6</text>
  <text x="80" y="104" text-anchor="middle" style="font-size:40px;font-weight:600">C</text>
  <text x="80" y="128" text-anchor="middle" style="font-size:14px">Carbon</text>
  <text x="80" y="150" text-anchor="middle" class="t-blue" style="font-size:16px;font-weight:600">12.011</text>
  <line x1="144" y1="140" x2="190" y2="80" class="s-blue" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 3"/>
  <line x1="144" y1="140" x2="190" y2="140" class="s-blue" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 3"/>
  <rect x="190" y="52" width="290" height="56" rx="8" fill="none" stroke="currentColor" class="s-gray" stroke-width="1.5"/>
  <text x="335" y="75" text-anchor="middle" style="font-size:15px">one atom (average)</text>
  <text x="335" y="98" text-anchor="middle" class="t-blue" style="font-size:16px;font-weight:600">12.011 u</text>
  <rect x="190" y="116" width="290" height="56" rx="8" fill="none" stroke="currentColor" class="s-gray" stroke-width="1.5"/>
  <text x="335" y="139" text-anchor="middle" style="font-size:15px">one mole = 6.022 × 10²³ atoms</text>
  <text x="335" y="162" text-anchor="middle" class="t-blue" style="font-size:16px;font-weight:600">12.011 g</text>
  <text x="335" y="40" text-anchor="middle" class="t-gray" style="font-size:13px">same number, different unit</text>
</svg>`,
          alt: 'A periodic table tile for carbon, atomic number 6, atomic mass 12.011. Dashed lines lead to two boxes: one atom on average has mass 12.011 u; one mole, 6.022 times 10 to the 23 atoms, has mass 12.011 g.',
          caption: 'The number under the symbol does double duty: the mass of one atom in u, and the mass of one mole in grams.',
        },
        {
          type: 'derivation',
          title: 'Why u and g/mol share the same numbers',
          steps: [
            { tex: '1\\ \\text{u} = 1.6605 \\times 10^{-24}\\ \\text{g}', why: 'The atomic mass unit is $\\frac{1}{12}$ of the mass of a carbon-12 atom, which has been measured in grams.' },
            { tex: 'N_A \\times 1\\ \\text{u} = (6.022 \\times 10^{23})(1.6605 \\times 10^{-24}\\ \\text{g})', why: 'Take one mole of imaginary particles that each weigh exactly 1 u.' },
            { tex: '= 1.000\\ \\text{g}', why: 'A mole of particles that each weigh 1 u weighs one gram. This is exactly the "exchange rate" Avogadro\'s number was chosen to give.' },
            { tex: 'N_A \\times (12.011\\ \\text{u}) = 12.011\\ \\text{g}', why: 'Scale by the mass of one (average) carbon atom: a mole of carbon atoms weighs 12.011 g.' },
            { tex: 'M(\\ce{C}) = 12.011\\ \\text{g/mol}', why: 'The same digits, read as "grams per mole". This works for every element, molecule and ion.' },
          ],
          result: 'Mass of one particle in u = mass of one mole in g. No conversion needed.',
        },
        {
          type: 'table',
          headers: ['Element', 'One atom (average)', 'One mole'],
          rows: [
            ['H', '1.008 u', '1.008 g'],
            ['C', '12.011 u', '12.011 g'],
            ['O', '15.999 u', '15.999 g'],
            ['Fe', '55.845 u', '55.845 g'],
            ['Au', '196.97 u', '196.97 g'],
          ],
          caption: 'One mole of gold weighs about 16 times as much as one mole of carbon, because each gold atom is about 16 times heavier. Same count, different mass.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'truefalse',
      prompt: 'One mole of aluminum atoms and one mole of lead atoms have the same mass, since both are exactly one mole.',
      answer: false,
      explanation: 'They have the same **number** of atoms ($6.022 \\times 10^{23}$), but each lead atom is much heavier. One mole of Al is 26.98 g; one mole of Pb is 207.2 g, almost eight times more. A dozen marbles and a dozen bowling balls are both "a dozen", but they do not weigh the same.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'Molar mass of a compound',
      blocks: [
        {
          type: 'p',
          text: 'A molecule\'s mass is the sum of its atoms\' masses, so a compound\'s molar mass is the sum of its elements\' molar masses, each multiplied by how many times the element appears in the formula. (For ionic compounds, which have no molecules, the same sum is sometimes called the formula mass.)',
        },
        {
          type: 'derivation',
          title: 'Calcium hydroxide',
          steps: [
            { tex: '\\ce{Ca}: 1 \\times 40.078 = 40.078', why: 'One Ca atom per formula unit.' },
            { tex: '\\ce{O}: 2 \\times 15.999 = 31.998', why: 'The subscript 2 outside the parentheses doubles the OH group, so there are 2 O.' },
            { tex: '\\ce{H}: 2 \\times 1.008 = 2.016', why: 'Likewise 2 H.' },
            { tex: 'M = 40.078 + 31.998 + 2.016 = 74.092\\ \\text{g/mol}', why: 'Add the contributions. One mole of $\\ce{Ca(OH)2}$ (slaked lime) has a mass of 74.09 g.' },
          ],
        },
        {
          type: 'derivation',
          title: 'Aluminum sulfate',
          steps: [
            { tex: '\\ce{Al}: 2 \\times 26.982 = 53.964', why: 'Two Al atoms.' },
            { tex: '\\ce{S}: 3 \\times 32.06 = 96.18', why: 'Three sulfate groups, one S each.' },
            { tex: '\\ce{O}: 12 \\times 15.999 = 191.988', why: '$3 \\times 4 = 12$ O atoms: the parenthesis subscript multiplies the 4 inside.' },
            { tex: 'M = 53.964 + 96.18 + 191.988 = 342.13\\ \\text{g/mol}', why: 'Add up. Keep two decimal places, which matches the precision of the least precise atomic mass used (S, 32.06).' },
          ],
        },
        {
          type: 'table',
          headers: ['Substance', 'Formula', 'Molar mass (g/mol)'],
          rows: [
            ['water', '$\\ce{H2O}$', '18.015'],
            ['carbon dioxide', '$\\ce{CO2}$', '44.009'],
            ['methane', '$\\ce{CH4}$', '16.043'],
            ['sodium chloride', '$\\ce{NaCl}$', '58.44'],
            ['glucose', '$\\ce{C6H12O6}$', '180.156'],
          ],
          caption: 'Atomic masses used throughout this unit: H 1.008, C 12.011, N 14.007, O 15.999, Na 22.990, Mg 24.305, Al 26.982, S 32.06, Cl 35.45, Ca 40.078, Fe 55.845.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Parentheses multiply everything inside',
          text: 'The most common molar-mass error is miscounting a parenthesized group. In $\\ce{Mg(NO3)2}$ there are **2** N and **6** O, not 1 N and 3 O. Write out the atom count for each element before you touch a calculator.',
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'numeric',
      prompt: 'Calculate the molar mass of ammonium sulfate, $\\ce{(NH4)2SO4}$, a common fertilizer. Use H 1.008, N 14.007, O 15.999, S 32.06 and give the answer to two decimal places.',
      hint: 'Count first: 2 N, 8 H, 1 S, 4 O.',
      label: '$M =$',
      unit: 'g/mol',
      answer: '2*14.007 + 8*1.008 + 32.06 + 4*15.999',
      answerTex: '132.13\\ \\text{g/mol}',
      tolerance: 0.02,
      explanation: 'Two ammonium ions give 2 N and $2 \\times 4 = 8$ H. Then N: $2 \\times 14.007 = 28.014$; H: $8 \\times 1.008 = 8.064$; S: $32.06$; O: $4 \\times 15.999 = 63.996$. Total: $28.014 + 8.064 + 32.06 + 63.996 = 132.13$ g/mol.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'error',
      prompt: 'A student calculates the molar mass of magnesium nitrate, $\\ce{Mg(NO3)2}$. Tap the first line that is wrong.',
      lines: [
        'Mg: $1 \\times 24.305 = 24.305$',
        'N: $1 \\times 14.007 = 14.007$',
        'O: $6 \\times 15.999 = 95.994$',
        'Total: $24.305 + 14.007 + 95.994 = 134.306\\ \\text{g/mol}$',
      ],
      errorLines: [2],
      explanation: 'The subscript 2 applies to the whole nitrate group, so there are **2** N atoms: $2 \\times 14.007 = 28.014$. (The student did double the oxygen correctly, which makes the slip easy to miss.) The correct molar mass is $24.305 + 28.014 + 95.994 = 148.313$ g/mol.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'concept',
      title: 'The mole map: grams ↔ moles ↔ particles',
      blocks: [
        {
          type: 'p',
          text: 'Every amount question in chemistry is a trip between three "places": a mass you can weigh, an amount in moles, and a number of particles. Moles sit in the middle, and two [[conversion-factor|conversion factors]] connect them: molar mass (g/mol) and Avogadro\'s number (particles/mol).',
        },
        {
          type: 'figure',
          svg: `<svg viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="70" width="120" height="60" rx="10" fill="none" stroke="currentColor" class="s-orange" stroke-width="2.2"/>
  <text x="70" y="96" text-anchor="middle" style="font-size:17px;font-weight:600">Mass</text>
  <text x="70" y="117" text-anchor="middle" style="font-size:14px">grams (g)</text>
  <rect x="190" y="70" width="120" height="60" rx="10" fill="none" stroke="currentColor" class="s-blue" stroke-width="2.6"/>
  <text x="250" y="96" text-anchor="middle" style="font-size:17px;font-weight:600">Moles</text>
  <text x="250" y="117" text-anchor="middle" style="font-size:14px">mol</text>
  <rect x="370" y="70" width="120" height="60" rx="10" fill="none" stroke="currentColor" class="s-green" stroke-width="2.2"/>
  <text x="430" y="96" text-anchor="middle" style="font-size:17px;font-weight:600">Particles</text>
  <text x="430" y="117" text-anchor="middle" style="font-size:12.5px">atoms, molecules</text>
  <line x1="134" y1="86" x2="184" y2="86" stroke="currentColor" stroke-width="2"/><polyline points="176,80 185,86 176,92" fill="none" stroke="currentColor" stroke-width="2"/>
  <line x1="186" y1="114" x2="136" y2="114" stroke="currentColor" stroke-width="2"/><polyline points="144,108 135,114 144,120" fill="none" stroke="currentColor" stroke-width="2"/>
  <line x1="314" y1="86" x2="364" y2="86" stroke="currentColor" stroke-width="2"/><polyline points="356,80 365,86 356,92" fill="none" stroke="currentColor" stroke-width="2"/>
  <line x1="366" y1="114" x2="316" y2="114" stroke="currentColor" stroke-width="2"/><polyline points="324,108 315,114 324,120" fill="none" stroke="currentColor" stroke-width="2"/>
  <text x="160" y="44" text-anchor="middle" style="font-size:15px">÷ molar mass</text>
  <text x="160" y="62" text-anchor="middle" class="t-gray" style="font-size:13px">(g/mol)</text>
  <text x="160" y="150" text-anchor="middle" style="font-size:15px">× molar mass</text>
  <text x="340" y="44" text-anchor="middle" style="font-size:15px">× 6.022 × 10²³</text>
  <text x="340" y="62" text-anchor="middle" class="t-gray" style="font-size:13px">(particles/mol)</text>
  <text x="340" y="150" text-anchor="middle" style="font-size:15px">÷ 6.022 × 10²³</text>
  <text x="250" y="186" text-anchor="middle" class="t-blue" style="font-size:14px">Every route passes through moles.</text>
</svg>`,
          alt: 'The mole map: three boxes, Mass in grams, Moles, and Particles. From mass to moles divide by molar mass; from moles to mass multiply by molar mass. From moles to particles multiply by 6.022 times 10 to the 23; from particles to moles divide by it.',
          caption: 'The [[chem-mole-map|mole map]]. Never jump directly from grams to particles; always pass through moles.',
        },
        {
          type: 'p',
          text: 'With [[dimensional-analysis]] you never need to memorize which way to multiply. Write each factor as a fraction and orient it so the unit you have cancels and the unit you want remains.',
        },
        {
          type: 'derivation',
          title: 'Grams to moles: 25.0 g of NaCl',
          steps: [
            { tex: '25.0\\ \\text{g}\\ \\ce{NaCl} \\times \\frac{1\\ \\text{mol}\\ \\ce{NaCl}}{58.44\\ \\text{g}\\ \\ce{NaCl}}', why: 'Molar mass says $1\\ \\text{mol} = 58.44\\ \\text{g}$. Put grams on the bottom so they cancel the grams you start with.' },
            { tex: '= \\frac{25.0\\ \\cancel{\\text{g}}}{58.44\\ \\cancel{\\text{g}}}\\ \\text{mol} = 0.428\\ \\text{mol}\\ \\ce{NaCl}', why: 'Grams cancel, leaving mol. Three significant figures, matching 25.0 g.' },
          ],
        },
        {
          type: 'derivation',
          title: 'Moles to grams: 0.250 mol of calcium hydroxide',
          steps: [
            { tex: 'M(\\ce{Ca(OH)2}) = 74.09\\ \\text{g/mol} \\iff \\frac{74.09\\ \\text{g}}{1\\ \\text{mol}}', why: 'From the previous card. Since 74.09 g and 1 mol of $\\ce{Ca(OH)2}$ are the same amount, the factor can be written either way up; choose the one that cancels what you have.' },
            { tex: '0.250\\ \\cancel{\\text{mol}} \\times \\frac{74.09\\ \\text{g}}{1\\ \\cancel{\\text{mol}}} = 18.5\\ \\text{g}', why: 'This time mol is on the bottom of the factor, so mol cancels and grams remain. $0.250 \\times 74.09 = 18.52$, rounded to 3 sig figs.' },
          ],
        },
        {
          type: 'derivation',
          title: 'Grams to molecules: 10.0 g of water',
          steps: [
            { tex: '10.0\\ \\cancel{\\text{g}} \\times \\frac{1\\ \\text{mol}}{18.015\\ \\cancel{\\text{g}}} = 0.5551\\ \\text{mol}\\ \\ce{H2O}', why: 'First leg of the map: grams to moles. Keep an extra digit in intermediate results to avoid rounding drift.' },
            { tex: '0.5551\\ \\cancel{\\text{mol}} \\times \\frac{6.022 \\times 10^{23}}{1\\ \\cancel{\\text{mol}}} = 3.34 \\times 10^{23}', why: 'Second leg: moles to particles, using $N_A$ = $6.022 \\times 10^{23}$ molecules per mole. Round only the final answer, to 3 sig figs: $3.34 \\times 10^{23}$ molecules.' },
          ],
        },
        {
          type: 'graph',
          x: [0, 2],
          y: [0, 400],
          xStep: 0.25,
          yStep: 50,
          functions: [
            { expr: 'm*x', label: 'mass $= M \\times n$', color: 'blue' },
            { expr: '18.015x', label: '$\\ce{H2O}$', color: 'gray', dashed: true },
            { expr: '180.156x', label: 'glucose', color: 'purple', dashed: true },
          ],
          hlines: [{ y: 100, label: '100 g' }],
          points: [{ x: '100/m', y: 100, label: 'moles in 100 g' }],
          sliders: [{ name: 'm', min: 2, max: 250, step: 1, value: 58, label: 'molar mass $M$ (g/mol)' }],
          readouts: [{ label: 'moles in 100 g $= 100 / M =$', expr: '100/m', digits: 3 }],
          caption: 'Mass is proportional to moles ($x$ axis, mol), with slope equal to the molar mass. Raise $M$ and the same 100 g holds fewer moles: heavier particles, fewer of them per gram.',
        },
      ],
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'numeric',
      prompt: 'How many moles of glucose, $\\ce{C6H12O6}$ ($M = 180.16$ g/mol), are in 45.0 g? Give three significant figures.',
      hint: 'Grams to moles: divide by the molar mass, $\\frac{45.0}{180.16}$.',
      label: '$n =$',
      unit: 'mol',
      answer: '45.0/180.16',
      answerTex: '0.250\\ \\text{mol}',
      tolerance: 0.001,
      explanation: '$45.0\\ \\cancel{\\text{g}} \\times \\frac{1\\ \\text{mol}}{180.16\\ \\cancel{\\text{g}}} = 0.2498\\ \\text{mol} \\approx 0.250$ mol. Sanity check: 45 g is about a quarter of 180 g, so about a quarter of a mole. A quick estimate like this catches upside-down conversion factors.',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'concept',
      title: 'Atoms inside molecules, and the mass of one atom',
      blocks: [
        {
          type: 'p',
          text: 'A formula is also a conversion factor. One mole of $\\ce{CH4}$ contains one mole of C atoms and **four** moles of H atoms, just as one dozen tricycles contain three dozen wheels. The subscript becomes a ratio such as $\\frac{4\\ \\text{mol H}}{1\\ \\text{mol}\\ \\ce{CH4}}$.',
        },
        {
          type: 'derivation',
          title: 'Hydrogen atoms in 10.0 g of methane',
          steps: [
            { tex: '10.0\\ \\cancel{\\text{g}\\ \\ce{CH4}} \\times \\frac{1\\ \\text{mol}\\ \\ce{CH4}}{16.043\\ \\cancel{\\text{g}\\ \\ce{CH4}}} = 0.6233\\ \\text{mol}\\ \\ce{CH4}', why: 'Grams to moles of the compound, using $M(\\ce{CH4}) = 12.011 + 4(1.008) = 16.043$ g/mol.' },
            { tex: '0.6233\\ \\cancel{\\text{mol}\\ \\ce{CH4}} \\times \\frac{4\\ \\text{mol H}}{1\\ \\cancel{\\text{mol}\\ \\ce{CH4}}} = 2.493\\ \\text{mol H}', why: 'Each molecule has 4 H atoms, so each mole of molecules has 4 moles of H atoms.' },
            { tex: '2.493\\ \\cancel{\\text{mol}} \\times \\frac{6.022 \\times 10^{23}}{1\\ \\cancel{\\text{mol}}} = 1.50 \\times 10^{24}', why: 'Moles of H atoms to number of H atoms: $1.50 \\times 10^{24}$ hydrogen atoms.' },
          ],
          result: 'Labeling every unit with its substance ("g $\\ce{CH4}$", "mol H") is what keeps multi-step conversions straight.',
        },
        {
          type: 'p',
          text: 'Run the map backwards to find the mass of a single particle: divide the molar mass by Avogadro\'s number.',
        },
        {
          type: 'math',
          tex: '\\frac{196.97\\ \\text{g}}{1\\ \\cancel{\\text{mol}}} \\times \\frac{1\\ \\cancel{\\text{mol}}}{6.022 \\times 10^{23}\\ \\text{atoms}} = 3.271 \\times 10^{-22}\\ \\tfrac{\\text{g}}{\\text{atom}}',
          caption: 'The mass of one gold atom. Even the heaviest everyday atoms weigh less than a billionth of a trillionth of a gram.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'A mole of what?',
          text: 'Always say what you have a mole **of**. One mole of $\\ce{O2}$ molecules contains **two** moles of O atoms and weighs 32.00 g, while one mole of O atoms weighs 16.00 g. "One mole of oxygen" is ambiguous; "one mole of $\\ce{O2}$" is not.',
        },
      ],
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'order',
      prompt: 'Order the steps to find the number of H atoms in 10.0 g of $\\ce{CH4}$.',
      lines: [
        'Molar mass of $\\ce{CH4}$: $12.011 + 4(1.008) = 16.043$ g/mol',
        'Moles of $\\ce{CH4}$: $10.0 \\div 16.043 = 0.6233$ mol',
        'Molecules of $\\ce{CH4}$: $0.6233 \\times 6.022 \\times 10^{23} = 3.754 \\times 10^{23}$',
        'H atoms: $4 \\times 3.754 \\times 10^{23} = 1.50 \\times 10^{24}$',
      ],
      distractors: ['Atoms: $10.0 \\times 6.022 \\times 10^{23} = 6.02 \\times 10^{24}$'],
      explanation: 'Grams must become moles first (divide by molar mass), then moles become molecules (times $N_A$), and finally each molecule contributes 4 H atoms. The distractor multiplies **grams** by Avogadro\'s number, skipping the mole: $N_A$ counts particles per mole, not per gram.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'mcq',
      prompt: 'Which 10.0 g sample contains the **most molecules**?',
      options: [
        { text: '$\\ce{H2O}$ (18.02 g/mol)', why: '$10.0 / 18.02 = 0.555$ mol. A lot, but methane molecules are lighter still.' },
        { text: '$\\ce{CO2}$ (44.01 g/mol)', why: '$10.0 / 44.01 = 0.227$ mol: the heaviest molecules here, so the fewest of them.' },
        { text: '$\\ce{CH4}$ (16.04 g/mol)', correct: true, why: '$10.0 / 16.04 = 0.623$ mol, the largest amount, because $\\ce{CH4}$ has the smallest molar mass.' },
        { text: '$\\ce{O2}$ (32.00 g/mol)', why: '$10.0 / 32.00 = 0.313$ mol.' },
      ],
      explanation: 'For equal masses, moles $= \\frac{\\text{mass}}{M}$, so the substance with the **smallest molar mass** has the most moles, and therefore the most molecules. Same idea as the graph: a lower slope reaches 10 g at a larger $n$.',
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'numeric',
      prompt: 'A sample of iron contains $3.01 \\times 10^{23}$ atoms. What is its mass? Use Fe 55.845 g/mol and $N_A = 6.022 \\times 10^{23}$; give three significant figures.',
      hint: 'Particles → moles (divide by $N_A$) → grams (multiply by molar mass).',
      label: 'mass $=$',
      unit: 'g',
      answer: '3.01/6.022*55.845',
      answerTex: '27.9\\ \\text{g}',
      tolerance: 0.06,
      explanation: '$3.01 \\times 10^{23}\\ \\cancel{\\text{atoms}} \\times \\frac{1\\ \\text{mol}}{6.022 \\times 10^{23}\\ \\cancel{\\text{atoms}}} = 0.4998$ mol, then $0.4998\\ \\cancel{\\text{mol}} \\times \\frac{55.845\\ \\text{g}}{1\\ \\cancel{\\text{mol}}} = 27.9$ g. Half of Avogadro\'s number of atoms is half a mole, so the mass is half the molar mass.',
    },
  ],
  takeaways: [
    'A mole is a counting unit: $6.022 \\times 10^{23}$ particles. Chemists count atoms by weighing them, using moles.',
    "Avogadro's number is the exchange rate between u and g, so an element's atomic mass in u equals its molar mass in g/mol.",
    "A compound's molar mass is the sum of its atoms' molar masses; parentheses multiply everything inside.",
    'Grams ↔ moles uses molar mass; moles ↔ particles uses $N_A$. Always pass through moles, and orient each factor so units cancel.',
    'Subscripts are conversion factors too: 1 mol $\\ce{CH4}$ contains 4 mol H atoms. Always say what you have a mole of.',
  ],
  reading: [
    {
      title: 'OpenStax Chemistry 2e — Chapter 3: Composition of Substances and Solutions',
      url: 'https://openstax.org/books/chemistry-2e/pages/3-introduction',
      source: 'openstax',
      note: 'Section 3.1 covers formula mass and the mole concept with worked examples matching this lesson.',
    },
    {
      title: 'Wikipedia — Avogadro constant',
      url: 'https://en.wikipedia.org/wiki/Avogadro_constant',
      source: 'wikipedia',
      note: 'The history of measuring the number, from Perrin to the 2019 redefinition of the SI.',
    },
    {
      title: 'Ptable — interactive periodic table',
      url: 'https://ptable.com/',
      source: 'other',
      note: 'Look up the atomic mass (and so the molar mass) of any element quickly.',
    },
    {
      title: 'Khan Academy — Chemistry',
      url: 'https://www.khanacademy.org/science/chemistry',
      source: 'khan',
      note: 'Short videos on the mole, molar mass and gram–mole–particle conversions.',
    },
  ],
};
