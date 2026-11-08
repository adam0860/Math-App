import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'chem-chemical-equations',
  title: 'Chemical Equations and Reaction Types',
  summary: 'Read and balance chemical equations, see why atoms must balance, and recognize the five main kinds of reaction.',
  minutes: 20,
  objectives: [
    'Read a chemical equation: reactants, products, state symbols, coefficients and subscripts',
    'Explain why an equation must be balanced, using conservation of atoms and mass',
    'Balance equations systematically, including polyatomic ions and hydrocarbon combustion',
    'Classify reactions as synthesis, decomposition, single replacement, double replacement or combustion',
    'Use the activity series and basic solubility rules to predict whether a reaction happens, and write a simple net ionic equation',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Reading a chemical equation',
      blocks: [
        {
          type: 'p',
          text: 'A [[chemical-equation]] is a sentence written in formulas. It says which substances you start with, the [[reactant|reactants]], on the left, and which substances you end with, the [[product|products]], on the right. The arrow reads "react to form" or "yields". A plus sign on the left means "together with", and on the right it means "and also".',
        },
        {
          type: 'figure',
          svg: `<svg viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg">
  <text x="80" y="88" style="font-size:30px" text-anchor="middle"><tspan class="t-blue">2</tspan>H<tspan class="t-red" style="font-size:20px" dy="8">2</tspan><tspan dy="-8" class="t-green" style="font-size:20px">(g)</tspan></text>
  <text x="152" y="88" style="font-size:30px" text-anchor="middle">+</text>
  <text x="212" y="88" style="font-size:30px" text-anchor="middle">O<tspan style="font-size:20px" dy="8">2</tspan><tspan dy="-8" class="t-green" style="font-size:20px">(g)</tspan></text>
  <line x1="268" y1="78" x2="318" y2="78" stroke="currentColor" stroke-width="2.5"/>
  <polyline points="308,70 319,78 308,86" fill="none" stroke="currentColor" stroke-width="2.5"/>
  <text x="293" y="110" text-anchor="middle" style="font-size:14px">yields</text>
  <text x="400" y="88" style="font-size:30px" text-anchor="middle"><tspan class="t-blue">2</tspan>H<tspan class="t-red" style="font-size:20px" dy="8">2</tspan><tspan dy="-8">O</tspan><tspan class="t-green" style="font-size:20px">(l)</tspan></text>
  <text x="48" y="22" text-anchor="middle" class="t-blue" style="font-size:14px">coefficient</text>
  <line x1="48" y1="28" x2="52" y2="58" class="s-blue" stroke="currentColor" stroke-width="1.5"/>
  <text x="236" y="22" text-anchor="middle" class="t-green" style="font-size:14px">state symbol</text>
  <line x1="236" y1="28" x2="236" y2="62" class="s-green" stroke="currentColor" stroke-width="1.5"/>
  <line x1="84" y1="102" x2="84" y2="122" class="s-red" stroke="currentColor" stroke-width="1.5"/>
  <text x="84" y="138" text-anchor="middle" class="t-red" style="font-size:14px">subscript</text>
  <path d="M30 152 v10 h220 v-10" fill="none" stroke="currentColor" stroke-width="1.5" class="s-gray"/>
  <text x="140" y="184" text-anchor="middle" style="font-size:15px">reactants</text>
  <path d="M345 152 v10 h110 v-10" fill="none" stroke="currentColor" stroke-width="1.5" class="s-gray"/>
  <text x="400" y="184" text-anchor="middle" style="font-size:15px">products</text>
</svg>`,
          alt: 'The equation 2 H2 (g) plus O2 (g) yields 2 H2O (l), with the leading 2 labelled coefficient, the small 2 after H labelled subscript, the (g) labelled state symbol, the left side labelled reactants and the right side labelled products.',
          caption: 'Hydrogen burning in oxygen. Each kind of number in an equation has a different job.',
        },
        {
          type: 'p',
          text: 'The two kinds of numbers mean very different things. A **subscript** is part of the formula: it says how many atoms of each element are in *one* particle, so $\\ce{H2O}$ always has two H and one O. A [[chem-stoichiometric-coefficient|coefficient]] in front says *how many* of those particles take part. $\\ce{2H2O}$ is two water molecules: four H atoms and two O atoms in total. A coefficient multiplies everything in the formula after it, including what is inside parentheses.',
        },
        {
          type: 'table',
          headers: ['Symbol', 'Meaning', 'Example'],
          rows: [
            ['$\\ce{(s)}$', 'solid', '$\\ce{NaCl(s)}$, table salt crystals'],
            ['$\\ce{(l)}$', 'liquid', '$\\ce{H2O(l)}$, liquid water'],
            ['$\\ce{(g)}$', 'gas', '$\\ce{CO2(g)}$, carbon dioxide'],
            ['$\\ce{(aq)}$', 'aqueous: dissolved in water', '$\\ce{NaCl(aq)}$, salt water'],
          ],
          caption: '[[chem-state-symbol|State symbols]] are optional, but they tell you what you would actually see in the flask.',
        },
        {
          type: 'derivation',
          title: 'Count the atoms in $\\ce{3Ca(OH)2}$',
          steps: [
            { tex: '\\ce{Ca(OH)2}:\\ 1\\ \\ce{Ca},\\ 2\\ \\ce{O},\\ 2\\ \\ce{H}', why: 'The subscript 2 after the parentheses doubles everything inside: two $\\ce{OH}$ groups.' },
            { tex: '\\ce{3Ca(OH)2}:\\ 3\\ \\ce{Ca},\\ 6\\ \\ce{O},\\ 6\\ \\ce{H}', why: 'The coefficient 3 multiplies the whole formula: three formula units, each with 1 Ca, 2 O and 2 H.' },
          ],
          result: 'Atoms of an element = coefficient × subscript (× any parenthesis subscript). Counting like this is the core skill of balancing.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Coefficients and subscripts are not interchangeable',
          text: '$\\ce{2H2O}$ is two molecules of water. $\\ce{H2O2}$ is one molecule of hydrogen peroxide, a different substance with different properties (it bleaches hair; water does not). Changing a subscript changes **what** the substance is; changing a coefficient changes only **how much** of it there is.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'numeric',
      prompt: 'How many oxygen atoms are represented by $\\ce{3Ca(NO3)2}$?',
      hint: 'Inside the parentheses there are 3 O. The subscript 2 doubles the group; the coefficient 3 triples the whole formula.',
      label: 'O atoms $=$',
      answer: '18',
      explanation: 'One $\\ce{Ca(NO3)2}$ unit has two nitrate groups, each with 3 O, so $2 \\times 3 = 6$ O. Three of those units contain $3 \\times 6 = 18$ O atoms. In the same way there are $3 \\times 2 = 6$ N atoms and 3 Ca atoms. Multiply coefficient × outer subscript × inner subscript.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Why equations must balance',
      blocks: [
        {
          type: 'p',
          text: 'In a chemical reaction, bonds break and new bonds form, so atoms change partners. But the atoms themselves are not created, destroyed or turned into other elements (that needs a *nuclear* reaction). Every atom that goes in must come out. That is the [[conservation-of-mass|law of conservation of mass]] seen at the atomic level.',
        },
        {
          type: 'figure',
          svg: `<svg viewBox="0 0 500 190" xmlns="http://www.w3.org/2000/svg">
<circle cx="37.0" cy="55.0" r="9" class="f-gray" fill="currentColor" fill-opacity="0.35" stroke="currentColor" stroke-width="1.5"/><circle cx="53.0" cy="55.0" r="9" class="f-gray" fill="currentColor" fill-opacity="0.35" stroke="currentColor" stroke-width="1.5"/>
<circle cx="37.0" cy="105.0" r="9" class="f-gray" fill="currentColor" fill-opacity="0.35" stroke="currentColor" stroke-width="1.5"/><circle cx="53.0" cy="105.0" r="9" class="f-gray" fill="currentColor" fill-opacity="0.35" stroke="currentColor" stroke-width="1.5"/>
<text x="100" y="86" text-anchor="middle" style="font-size:24px">+</text>
<circle cx="138.0" cy="80.0" r="14" class="f-red" fill="currentColor" stroke="currentColor" stroke-width="1.5"/><circle cx="162.0" cy="80.0" r="14" class="f-red" fill="currentColor" stroke="currentColor" stroke-width="1.5"/>
<line x1="200" y1="80" x2="262" y2="80" stroke="currentColor" stroke-width="2.5"/><polyline points="252,72 263,80 252,88" fill="none" stroke="currentColor" stroke-width="2.5"/>
<circle cx="305.0" cy="73.6" r="9" class="f-gray" fill="currentColor" fill-opacity="0.35" stroke="currentColor" stroke-width="1.5"/><circle cx="335.0" cy="73.6" r="9" class="f-gray" fill="currentColor" fill-opacity="0.35" stroke="currentColor" stroke-width="1.5"/><circle cx="320.0" cy="62.0" r="14" class="f-red" fill="currentColor" stroke="currentColor" stroke-width="1.5"/>
<circle cx="385.0" cy="73.6" r="9" class="f-gray" fill="currentColor" fill-opacity="0.35" stroke="currentColor" stroke-width="1.5"/><circle cx="415.0" cy="73.6" r="9" class="f-gray" fill="currentColor" fill-opacity="0.35" stroke="currentColor" stroke-width="1.5"/><circle cx="400.0" cy="62.0" r="14" class="f-red" fill="currentColor" stroke="currentColor" stroke-width="1.5"/>
<text x="100" y="150" text-anchor="middle" style="font-size:17px">2 H₂ + O₂</text>
<text x="100" y="175" text-anchor="middle" class="t-blue" style="font-size:15px">4 H atoms, 2 O atoms</text>
<text x="360" y="150" text-anchor="middle" style="font-size:17px">2 H₂O</text>
<text x="360" y="175" text-anchor="middle" class="t-blue" style="font-size:15px">4 H atoms, 2 O atoms</text>
<text x="470" y="40" text-anchor="middle" style="font-size:13px">O</text>
<circle cx="470.0" cy="62.0" r="10" class="f-red" fill="currentColor" stroke="currentColor" stroke-width="1.5"/>
<text x="470" y="94" text-anchor="middle" style="font-size:13px">H</text>
<circle cx="470.0" cy="110.0" r="7" class="f-gray" fill="currentColor" fill-opacity="0.35" stroke="currentColor" stroke-width="1.5"/>
</svg>`,
          alt: 'Particle picture: two H2 molecules (pairs of small gray spheres) plus one O2 molecule (pair of red spheres) become two bent water molecules, each a red oxygen sphere with two gray hydrogen spheres. Both sides have 4 H atoms and 2 O atoms.',
          caption: 'The same six atoms appear on both sides, only regrouped. That is what "balanced" means.',
        },
        {
          type: 'definition',
          term: 'Balanced equation',
          text: 'A [[balanced-equation]] has the same number of atoms of each element on both sides of the arrow (and, for ionic equations, the same total charge). Because each atom keeps its mass, a balanced equation automatically conserves mass.',
        },
        {
          type: 'p',
          text: 'Written as $\\ce{H2 + O2 -> H2O}$, the reaction is a lie: two O atoms go in and only one comes out. You fix it with coefficients only: $\\ce{2H2 + O2 -> 2H2O}$. Now there are 4 H and 2 O on each side.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why you may change coefficients but never subscripts',
          text: 'The formulas are facts about nature: water *is* $\\ce{H2O}$, determined by how its atoms bond. The only thing you get to choose is how many molecules of each substance take part, and that is exactly what coefficients describe. "Balancing" $\\ce{H2 + O2 -> H2O2}$ makes the atoms match, but describes a different reaction that does not happen when hydrogen burns.',
        },
        {
          type: 'callout',
          variant: 'history',
          title: 'Lavoisier and the sealed flask',
          text: 'In the 1770s Antoine Lavoisier heated metals in sealed vessels and weighed everything before and after. The metal gained mass as it formed an oxide, but the whole sealed system did not change at all: the gain came from the air inside. Careful weighing, not argument, established conservation of mass and made modern chemistry possible.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'truefalse',
      prompt: 'To balance $\\ce{H2 + O2 -> H2O}$, it is acceptable to rewrite the product as $\\ce{H2O2}$, since that makes the oxygen atoms match.',
      answer: false,
      explanation: '$\\ce{H2O2}$ is hydrogen peroxide, a different compound. Changing a subscript changes the identity of the substance, so the equation would describe a different reaction. Balance with coefficients only: $\\ce{2H2 + O2 -> 2H2O}$ has 4 H and 2 O on each side.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'A systematic way to balance',
      blocks: [
        {
          type: 'p',
          text: 'Small equations can be balanced by trial and error, but a method saves time and avoids going in circles. The idea: fix the coefficients of the most constrained substances first, and leave the most flexible ones (elements that appear alone, and the everywhere-elements O and H) for last.',
        },
        {
          type: 'steps',
          items: [
            { title: 'Write correct formulas', text: 'Get every formula right first. You will never touch a subscript again.' },
            { title: 'Start with the most complex formula', text: 'Give the formula with the most atoms a coefficient of 1 (for now) and balance its elements on the other side.' },
            { title: 'Treat polyatomic ions as units', text: 'If a [[polyatomic-ion]] such as $\\ce{SO4^2-}$ or $\\ce{PO4^3-}$ appears unchanged on both sides, count it as one block instead of counting its S, P and O separately.' },
            { title: 'Balance H and O last', text: 'They usually appear in several substances, so their counts settle once everything else is fixed. Free elements ($\\ce{O2}$, $\\ce{Fe}$) are the easiest to adjust and go at the very end.' },
            { title: 'Check every element', text: 'Count each element on both sides. Make sure the coefficients are the smallest whole numbers (divide by any common factor).' },
          ],
        },
        {
          type: 'derivation',
          title: 'Example 1: aluminum corroding',
          steps: [
            { tex: '\\ce{Al + O2 -> Al2O3}', why: 'O: 2 on the left, 3 on the right. Two and three cannot be matched by adjusting just one side by 1.' },
            { tex: '\\ce{Al + 3O2 -> 2Al2O3}', why: 'The least common multiple of 2 and 3 is 6. Three $\\ce{O2}$ give 6 O; two $\\ce{Al2O3}$ give 6 O.' },
            { tex: '\\ce{4Al + 3O2 -> 2Al2O3}', why: 'The right side now has $2 \\times 2 = 4$ Al, so the free element Al gets a 4. Free elements go last because changing them disturbs nothing else.' },
          ],
          result: 'Check: Al $4 = 4$, O $6 = 6$ ✓. This thin oxide layer is why aluminum cookware does not keep corroding.',
        },
        {
          type: 'derivation',
          title: 'Example 2: a polyatomic ion as a unit',
          steps: [
            { tex: '\\ce{Ca(OH)2 + H3PO4 -> Ca3(PO4)2 + H2O}', why: 'Start with the most complex formula, $\\ce{Ca3(PO4)2}$, and give it a coefficient of 1 (an unwritten coefficient means 1).' },
            { tex: '\\ce{3Ca(OH)2 + H3PO4 -> Ca3(PO4)2 + H2O}', why: 'Balance Ca: 3 on the right, so 3 $\\ce{Ca(OH)2}$ on the left.' },
            { tex: '\\ce{3Ca(OH)2 + 2H3PO4 -> Ca3(PO4)2 + H2O}', why: 'Balance phosphate **as a unit**: the right has 2 $\\ce{PO4}$ groups, so 2 $\\ce{H3PO4}$. No need to count P and O separately.' },
            { tex: '\\ce{3Ca(OH)2 + 2H3PO4 -> Ca3(PO4)2 + 6H2O}', why: 'Now H: left has $3 \\times 2 + 2 \\times 3 = 12$ H, so 6 $\\ce{H2O}$ on the right.' },
          ],
          result: 'Check: Ca 3/3, P 2/2, H 12/12, O $6 + 8 = 14$ on the left and $8 + 6 = 14$ on the right ✓.',
        },
        {
          type: 'callout',
          variant: 'tip',
          text: 'Counting the leftover O at the end (the one element you did not balance on purpose) is your free check: if it comes out equal, every earlier step was almost certainly right.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'fill',
      prompt: 'Balance the equation with the smallest whole-number coefficients. Type a number in every blank (type 1 where the coefficient is 1).',
      template: '___ $\\ce{Al(s)}$ + ___ $\\ce{CuCl2(aq)}$ $\\ce{->}$ ___ $\\ce{AlCl3(aq)}$ + ___ $\\ce{Cu(s)}$',
      blanks: [{ answers: ['2'] }, { answers: ['3'] }, { answers: ['2'] }, { answers: ['3'] }],
      hint: 'Start with Cl: 2 per $\\ce{CuCl2}$ and 3 per $\\ce{AlCl3}$. The least common multiple is 6.',
      explanation: 'Chlorine sets the pace: 6 Cl needs 3 $\\ce{CuCl2}$ and 2 $\\ce{AlCl3}$. Then the free elements are easy: 2 Al on the left and 3 Cu on the right. Result: $\\ce{2Al + 3CuCl2 -> 2AlCl3 + 3Cu}$. Check: Al 2/2, Cu 3/3, Cl 6/6 ✓.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'Combustion of hydrocarbons and the fraction trick',
      blocks: [
        {
          type: 'p',
          text: '[[combustion|Combustion]] is a fast reaction with oxygen that releases heat and light. When a [[chem-hydrocarbon]] (a compound of only C and H, like the fuels methane, propane, gasoline and jet fuel) burns completely, the products are always carbon dioxide and water:',
        },
        {
          type: 'math',
          tex: '\\ce{C}_x\\ce{H}_y + \\ce{O2 -> CO2 + H2O}',
          caption: 'Balance C first, then H, then O last, because $\\ce{O2}$ is a free element.',
        },
        {
          type: 'derivation',
          title: 'Burning propane',
          steps: [
            { tex: '\\ce{C3H8 + O2 -> 3CO2 + H2O}', why: 'C: 3 in propane, so 3 $\\ce{CO2}$.' },
            { tex: '\\ce{C3H8 + O2 -> 3CO2 + 4H2O}', why: 'H: 8 in propane, 2 per water, so 4 $\\ce{H2O}$.' },
            { tex: '\\ce{C3H8 + 5O2 -> 3CO2 + 4H2O}', why: 'O on the right: $3 \\times 2 + 4 \\times 1 = 10$ atoms, which is 5 $\\ce{O2}$.' },
          ],
          result: 'Check: C 3/3, H 8/8, O 10/10 ✓. This is the reaction in a gas grill or a field stove burner.',
        },
        {
          type: 'p',
          text: 'Sometimes the O count on the right is **odd**, and no whole number of $\\ce{O2}$ molecules works. The trick: allow a fraction for a moment, then multiply everything by the denominator.',
        },
        {
          type: 'derivation',
          title: 'Burning ethane (odd oxygen count)',
          steps: [
            { tex: '\\ce{C2H6 + O2 -> 2CO2 + 3H2O}', why: 'C: 2, so 2 $\\ce{CO2}$. H: 6, so 3 $\\ce{H2O}$.' },
            { tex: '\\text{O on the right} = 2 \\times 2 + 3 \\times 1 = 7', why: 'Each $\\ce{CO2}$ has 2 O and each $\\ce{H2O}$ has 1 O. Remember the coefficients multiply.' },
            { tex: '\\ce{C2H6 + 7/2 O2 -> 2CO2 + 3H2O}', why: '$\\frac{7}{2}$ molecules of $\\ce{O2}$ contain 7 O atoms. Mathematically balanced, but half a molecule makes no sense for counting molecules.' },
            { tex: '\\ce{2C2H6 + 7O2 -> 4CO2 + 6H2O}', why: 'Multiply **every** coefficient by 2 to clear the fraction. Multiplying all of them by the same number keeps the equation balanced.' },
          ],
          result: 'Check: C 4/4, H 12/12, O 14/14 ✓.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Military connection: fuel',
          text: 'Jet fuel (JP-8) and diesel are mixtures of hydrocarbons; dodecane, $\\ce{C12H26}$, is a common stand-in. Its combustion balances to $\\ce{2C12H26 + 37O2 -> 24CO2 + 26H2O}$: every kilogram of fuel needs about 3.5 kg of oxygen from the air. That is why engines need air intakes, and why a fire in an enclosed space (a vehicle, a ship compartment) can use up the oxygen there.',
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'numeric',
      prompt: 'Balance the combustion of butane (lighter fluid), $\\ce{C4H10 + O2 -> CO2 + H2O}$, with the smallest whole-number coefficients. What is the coefficient of $\\ce{O2}$?',
      hint: 'C gives 4 $\\ce{CO2}$, H gives 5 $\\ce{H2O}$. Count O on the right, allow a fraction, then double everything.',
      label: 'coefficient of $\\ce{O2}$ $=$',
      answer: '13',
      explanation: '$\\ce{C4H10 + O2 -> 4CO2 + 5H2O}$ has $4 \\times 2 + 5 = 13$ O on the right, so $\\frac{13}{2}\\,\\ce{O2}$. Doubling everything gives $\\ce{2C4H10 + 13O2 -> 8CO2 + 10H2O}$. Check: C 8/8, H 20/20, O 26/26 ✓.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'error',
      prompt: 'A student balances the combustion of ethane. Tap the first line that is wrong.',
      lines: [
        '$\\ce{C2H6 + O2 -> CO2 + H2O}$',
        'C: $\\ce{C2H6 + O2 -> 2CO2 + H2O}$',
        'H: $\\ce{C2H6 + O2 -> 2CO2 + 3H2O}$',
        'O on the right: $2 + 3 = 5$, so $\\ce{C2H6 + 5/2 O2 -> 2CO2 + 3H2O}$',
        'Clear the fraction: $\\ce{2C2H6 + 5O2 -> 4CO2 + 6H2O}$',
      ],
      errorLines: [4],
      explanation: 'Line 4 counts one O per $\\ce{CO2}$ molecule instead of two. Two $\\ce{CO2}$ hold $2 \\times 2 = 4$ O, plus 3 from the water, for 7 O, so the fraction is $\\frac{7}{2}\\,\\ce{O2}$. The correct balanced equation is $\\ce{2C2H6 + 7O2 -> 4CO2 + 6H2O}$. Checking O at the end (10 on the left vs 14 on the right in the student version) would have caught it.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'concept',
      title: 'Reaction types: synthesis, decomposition, combustion',
      blocks: [
        {
          type: 'p',
          text: 'There are millions of reactions, but most introductory ones fit a handful of patterns. Recognizing the pattern lets you **predict products** from reactants alone. The letters A, B, C, D below stand for elements or ions.',
        },
        {
          type: 'table',
          headers: ['Type', 'Pattern', 'Example'],
          rows: [
            ['[[synthesis-reaction|Synthesis]] (combination)', '$\\ce{A + B -> AB}$', '$\\ce{2Na(s) + Cl2(g) -> 2NaCl(s)}$'],
            ['[[decomposition-reaction|Decomposition]]', '$\\ce{AB -> A + B}$', '$\\ce{CaCO3(s) ->[\\Delta] CaO(s) + CO2(g)}$'],
            ['Combustion', '$\\text{fuel} + \\ce{O2} \\to \\text{oxides}$', '$\\ce{CH4(g) + 2O2(g) -> CO2(g) + 2H2O(g)}$'],
          ],
          caption: 'The $\\Delta$ over the arrow means "heat is applied".',
        },
        {
          type: 'list',
          items: [
            '**Synthesis:** two or more reactants, **one** product. Metals burning in oxygen ($\\ce{2Mg + O2 -> 2MgO}$) and the industrial ammonia reaction ($\\ce{N2 + 3H2 -> 2NH3}$) are syntheses.',
            '**Decomposition:** **one** reactant breaks into two or more products, usually driven by heat, electricity or light. Electrolysis splits water: $\\ce{2H2O -> 2H2 + O2}$. In a car airbag, solid sodium azide decomposes in milliseconds into nitrogen gas, $\\ce{2NaN3 -> 2Na + 3N2}$, a rapid gas-producing reaction that inflates the bag.',
            '**Combustion:** something reacts with $\\ce{O2}$, releasing energy. Hydrocarbons give $\\ce{CO2}$ and $\\ce{H2O}$. (Burning magnesium is both a synthesis and a combustion; the categories overlap.)',
          ],
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why combustion releases so much energy',
          text: 'The bonds in $\\ce{CO2}$ and $\\ce{H2O}$ are very strong, much stronger overall than the C–H bonds in fuel and the O=O bond in oxygen. Breaking weaker bonds and forming stronger ones releases the difference as heat. (Measuring that energy is thermochemistry, a topic in General Chemistry.)',
        },
      ],
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'mcq',
      prompt: 'Heating potassium chlorate releases oxygen gas: $\\ce{2KClO3(s) ->[\\Delta] 2KCl(s) + 3O2(g)}$. What type of reaction is this?',
      options: [
        { text: 'Synthesis', why: 'Synthesis builds one product from several reactants. Here it is the reverse: one reactant, two products.' },
        { text: 'Decomposition', correct: true, why: 'One compound breaks apart into simpler substances when heated: the signature of decomposition.' },
        { text: 'Combustion', why: 'Oxygen is a *product* here, not a reactant. Combustion consumes $\\ce{O2}$.' },
        { text: 'Single replacement', why: 'Single replacement needs an element and a compound as reactants, swapping partners. There is only one reactant here.' },
      ],
      explanation: 'Count the reactants and products: $\\ce{AB -> A + B}$ shape, one reactant splitting into two products, is decomposition. This reaction is used in emergency oxygen generators (for example on aircraft), which release oxygen from a solid chlorate when activated.',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'concept',
      title: 'Single replacement and the activity series',
      blocks: [
        {
          type: 'p',
          text: 'In a [[single-replacement|single-replacement]] reaction, an element trades places with an element in a compound: $\\ce{A + BC -> AC + B}$. Drop a zinc strip into blue copper(II) sulfate solution and it gets coated with reddish copper while the blue fades:',
        },
        {
          type: 'math',
          tex: '\\ce{Zn(s) + CuSO4(aq) -> ZnSO4(aq) + Cu(s)}',
        },
        {
          type: 'p',
          text: 'At the particle level, each zinc atom gives two electrons to a $\\ce{Cu^2+}$ ion. Zinc becomes $\\ce{Zn^2+}$ and dissolves, copper becomes a neutral metal atom and plates out. The sulfate ion just watches. But put a copper strip into zinc sulfate solution and **nothing happens**. Whether a replacement happens depends on which metal gives up electrons more readily, and chemists list metals in that order: the [[chem-activity-series|activity series]].',
        },
        {
          type: 'figure',
          svg: `<svg viewBox="0 0 500 150" xmlns="http://www.w3.org/2000/svg">
<rect x="17" y="50" width="28" height="34" rx="5" fill="none" stroke="currentColor" class="s-blue" stroke-width="1.8"/>
<text x="31.0" y="73" text-anchor="middle" style="font-size:15px">Li</text>
<rect x="48" y="50" width="28" height="34" rx="5" fill="none" stroke="currentColor" class="s-blue" stroke-width="1.8"/>
<text x="62.0" y="73" text-anchor="middle" style="font-size:15px">K</text>
<rect x="79" y="50" width="28" height="34" rx="5" fill="none" stroke="currentColor" class="s-blue" stroke-width="1.8"/>
<text x="93.0" y="73" text-anchor="middle" style="font-size:15px">Ca</text>
<rect x="110" y="50" width="28" height="34" rx="5" fill="none" stroke="currentColor" class="s-blue" stroke-width="1.8"/>
<text x="124.0" y="73" text-anchor="middle" style="font-size:15px">Na</text>
<rect x="141" y="50" width="28" height="34" rx="5" fill="none" stroke="currentColor" class="s-blue" stroke-width="1.8"/>
<text x="155.0" y="73" text-anchor="middle" style="font-size:15px">Mg</text>
<rect x="172" y="50" width="28" height="34" rx="5" fill="none" stroke="currentColor" class="s-blue" stroke-width="1.8"/>
<text x="186.0" y="73" text-anchor="middle" style="font-size:15px">Al</text>
<rect x="203" y="50" width="28" height="34" rx="5" fill="none" stroke="currentColor" class="s-blue" stroke-width="1.8"/>
<text x="217.0" y="73" text-anchor="middle" style="font-size:15px">Zn</text>
<rect x="234" y="50" width="28" height="34" rx="5" fill="none" stroke="currentColor" class="s-blue" stroke-width="1.8"/>
<text x="248.0" y="73" text-anchor="middle" style="font-size:15px">Fe</text>
<rect x="265" y="50" width="28" height="34" rx="5" fill="none" stroke="currentColor" class="s-blue" stroke-width="1.8"/>
<text x="279.0" y="73" text-anchor="middle" style="font-size:15px">Ni</text>
<rect x="296" y="50" width="28" height="34" rx="5" fill="none" stroke="currentColor" class="s-blue" stroke-width="1.8"/>
<text x="310.0" y="73" text-anchor="middle" style="font-size:15px">Sn</text>
<rect x="327" y="50" width="28" height="34" rx="5" fill="none" stroke="currentColor" class="s-blue" stroke-width="1.8"/>
<text x="341.0" y="73" text-anchor="middle" style="font-size:15px">Pb</text>
<rect x="358" y="50" width="28" height="34" rx="5" fill="none" stroke="currentColor" class="s-orange" stroke-width="1.8"/>
<text x="372.0" y="73" text-anchor="middle" style="font-size:15px">H₂</text>
<rect x="389" y="50" width="28" height="34" rx="5" fill="none" stroke="currentColor" class="s-gray" stroke-width="1.8"/>
<text x="403.0" y="73" text-anchor="middle" style="font-size:15px">Cu</text>
<rect x="420" y="50" width="28" height="34" rx="5" fill="none" stroke="currentColor" class="s-gray" stroke-width="1.8"/>
<text x="434.0" y="73" text-anchor="middle" style="font-size:15px">Ag</text>
<rect x="451" y="50" width="28" height="34" rx="5" fill="none" stroke="currentColor" class="s-gray" stroke-width="1.8"/>
<text x="465.0" y="73" text-anchor="middle" style="font-size:15px">Au</text>
<line x1="470" y1="30" x2="30" y2="30" stroke="currentColor" stroke-width="2"/><polyline points="40,23 28,30 40,37" fill="none" stroke="currentColor" stroke-width="2"/>
<text x="250" y="20" text-anchor="middle" style="font-size:14px">more reactive (gives up electrons more easily)</text>
<path d="M17 94 v8 h338 v-8" fill="none" stroke="currentColor" class="s-blue" stroke-width="1.5"/>
<text x="186" y="122" text-anchor="middle" class="t-blue" style="font-size:13.5px">left of H₂: release H₂ gas from acids</text>
<path d="M389 94 v8 h87 v-8" fill="none" stroke="currentColor" class="s-gray" stroke-width="1.5"/>
<text x="432" y="122" text-anchor="middle" class="t-gray" style="font-size:13.5px">do not</text>
<text x="250" y="144" text-anchor="middle" style="font-size:13.5px">A metal replaces the ion of any metal to its right.</text>
</svg>`,
          alt: 'Activity series as a row of boxes from most to least reactive: Li, K, Ca, Na, Mg, Al, Zn, Fe, Ni, Sn, Pb, then H2 highlighted, then Cu, Ag, Au. An arrow pointing left is labelled more reactive. Metals left of H2 release hydrogen gas from acids; Cu, Ag and Au do not.',
          caption: 'A metal can replace the ion of any metal to its **right**. Metals left of $\\ce{H2}$ also replace hydrogen in acids.',
        },
        {
          type: 'list',
          items: [
            '$\\ce{Zn + CuSO4}$: Zn is left of Cu, so it reacts. $\\ce{Cu + ZnSO4}$: no reaction.',
            '$\\ce{Zn(s) + 2HCl(aq) -> ZnCl2(aq) + H2(g)}$: zinc is left of $\\ce{H2}$, so it fizzes with hydrogen gas in acid.',
            '$\\ce{Cu(s) + 2AgNO3(aq) -> Cu(NO3)2(aq) + 2Ag(s)}$: copper wire in silver nitrate grows silver crystals.',
            '$\\ce{Au + HCl}$: no reaction. Gold sits at the far right, which is why it stays shiny for thousands of years.',
          ],
        },
        {
          type: 'callout',
          variant: 'analogy',
          text: 'Think of the activity series as a pecking order for electrons. A more active metal "wants" to be an ion more than a less active one does, so it pushes the less active metal out of solution. A less active metal cannot push a more active one out.',
        },
        {
          type: 'callout',
          variant: 'note',
          text: 'The same logic protects steel ships and pipelines: blocks of zinc or magnesium ("sacrificial anodes") bolted to the hull corrode instead of the iron, because they sit to the left of Fe in the series.',
        },
      ],
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'mcq',
      prompt: 'Using the activity series (Li, K, Ca, Na, Mg, Al, Zn, Fe, Ni, Sn, Pb, $\\ce{H2}$, Cu, Ag, Au, from most to least active), which mixture **will** react?',
      options: [
        { text: '$\\ce{Cu(s) + ZnCl2(aq)}$', why: 'Cu is to the right of Zn (less active), so it cannot replace $\\ce{Zn^2+}$.' },
        { text: '$\\ce{Ag(s) + HCl(aq)}$', why: 'Silver is to the right of $\\ce{H2}$, so it does not release hydrogen from acid.' },
        { text: '$\\ce{Pb(s) + Mg(NO3)2(aq)}$', why: 'Lead is far to the right of magnesium; the less active metal cannot replace the more active one.' },
        { text: '$\\ce{Mg(s) + CuSO4(aq)}$', correct: true, why: 'Mg is left of Cu, so it gives electrons to $\\ce{Cu^2+}$: $\\ce{Mg + CuSO4 -> MgSO4 + Cu}$.' },
      ],
      explanation: 'A free metal replaces a metal ion only if the free metal is **more active** (further left). Of the four pairs, only magnesium is more active than the metal ion it meets. The others are "no reaction" (often written $\\ce{->}$ N.R.).',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'concept',
      title: 'Double replacement, precipitates and net ionic equations',
      blocks: [
        {
          type: 'p',
          text: 'In a [[double-replacement|double-replacement]] reaction, two ionic compounds swap partners: $\\ce{AB + CD -> AD + CB}$. The [[cation|cations]] trade [[anion|anions]]. In solution, the ions are already floating around separately, so "swapping" only means something if a new combination **leaves** the solution, most often as an insoluble solid called a [[chem-precipitate|precipitate]].',
        },
        {
          type: 'figure',
          svg: `<svg viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg">
<path d="M15 30 v110 q0 8 8 8 h94 q8 0 8 -8 v-110" fill="none" stroke="currentColor" stroke-width="2"/><line x1="15" y1="52" x2="125" y2="52" stroke="currentColor" class="s-blue" stroke-width="1" stroke-dasharray="4 3"/>
<text x="40" y="80" text-anchor="middle" class="t-purple" style="font-size:14px">Ag⁺</text>
<text x="95" y="75" text-anchor="middle" class="t-gray" style="font-size:14px">NO₃⁻</text>
<text x="55" y="120" text-anchor="middle" class="t-gray" style="font-size:14px">NO₃⁻</text>
<text x="100" y="115" text-anchor="middle" class="t-purple" style="font-size:14px">Ag⁺</text>
<text x="70" y="172" text-anchor="middle" style="font-size:14px">AgNO₃(aq)</text>
<text x="143" y="95" text-anchor="middle" style="font-size:22px">+</text>
<path d="M160 30 v110 q0 8 8 8 h94 q8 0 8 -8 v-110" fill="none" stroke="currentColor" stroke-width="2"/><line x1="160" y1="52" x2="270" y2="52" stroke="currentColor" class="s-blue" stroke-width="1" stroke-dasharray="4 3"/>
<text x="185" y="80" text-anchor="middle" class="t-gray" style="font-size:14px">Na⁺</text>
<text x="240" y="75" text-anchor="middle" class="t-green" style="font-size:14px">Cl⁻</text>
<text x="200" y="120" text-anchor="middle" class="t-green" style="font-size:14px">Cl⁻</text>
<text x="245" y="115" text-anchor="middle" class="t-gray" style="font-size:14px">Na⁺</text>
<text x="215" y="172" text-anchor="middle" style="font-size:14px">NaCl(aq)</text>
<line x1="282" y1="90" x2="322" y2="90" stroke="currentColor" stroke-width="2.5"/><polyline points="313,83 323,90 313,97" fill="none" stroke="currentColor" stroke-width="2.5"/>
<path d="M335 30 v110 q0 8 8 8 h134 q8 0 8 -8 v-110" fill="none" stroke="currentColor" stroke-width="2"/><line x1="335" y1="52" x2="485" y2="52" stroke="currentColor" class="s-blue" stroke-width="1" stroke-dasharray="4 3"/>
<text x="360" y="75" text-anchor="middle" class="t-gray" style="font-size:14px">Na⁺</text>
<text x="420" y="70" text-anchor="middle" class="t-gray" style="font-size:14px">NO₃⁻</text>
<text x="460" y="85" text-anchor="middle" class="t-gray" style="font-size:14px">Na⁺</text>
<text x="390" y="105" text-anchor="middle" class="t-gray" style="font-size:14px">NO₃⁻</text>
<circle cx="381.2" cy="137.2" r="3.2" fill="currentColor" class="f-purple"/>
<circle cx="395.7" cy="135.4" r="3.2" fill="currentColor" class="f-purple"/>
<circle cx="423.8" cy="139.5" r="3.2" fill="currentColor" class="f-purple"/>
<circle cx="356.4" cy="139.1" r="3.2" fill="currentColor" class="f-purple"/>
<circle cx="383.5" cy="138.7" r="3.2" fill="currentColor" class="f-purple"/>
<circle cx="464.5" cy="139.6" r="3.2" fill="currentColor" class="f-purple"/>
<circle cx="447.0" cy="138.2" r="3.2" fill="currentColor" class="f-purple"/>
<circle cx="425.3" cy="138.9" r="3.2" fill="currentColor" class="f-purple"/>
<circle cx="424.8" cy="133.5" r="3.2" fill="currentColor" class="f-purple"/>
<circle cx="412.5" cy="132.9" r="3.2" fill="currentColor" class="f-purple"/>
<circle cx="428.9" cy="139.6" r="3.2" fill="currentColor" class="f-purple"/>
<circle cx="438.4" cy="136.9" r="3.2" fill="currentColor" class="f-purple"/>
<circle cx="388.1" cy="139.8" r="3.2" fill="currentColor" class="f-purple"/>
<circle cx="450.2" cy="138.4" r="3.2" fill="currentColor" class="f-purple"/>
<circle cx="434.1" cy="134.7" r="3.2" fill="currentColor" class="f-purple"/>
<circle cx="433.6" cy="134.4" r="3.2" fill="currentColor" class="f-purple"/>
<circle cx="398.4" cy="133.5" r="3.2" fill="currentColor" class="f-purple"/>
<circle cx="403.9" cy="131.6" r="3.2" fill="currentColor" class="f-purple"/>
<circle cx="451.7" cy="139.7" r="3.2" fill="currentColor" class="f-purple"/>
<circle cx="370.0" cy="139.3" r="3.2" fill="currentColor" class="f-purple"/>
<circle cx="461.2" cy="139.4" r="3.2" fill="currentColor" class="f-purple"/>
<circle cx="423.9" cy="137.7" r="3.2" fill="currentColor" class="f-purple"/>
<circle cx="410.8" cy="136.2" r="3.2" fill="currentColor" class="f-purple"/>
<circle cx="393.6" cy="135.7" r="3.2" fill="currentColor" class="f-purple"/>
<circle cx="419.3" cy="132.4" r="3.2" fill="currentColor" class="f-purple"/>
<circle cx="430.0" cy="133.8" r="3.2" fill="currentColor" class="f-purple"/>
<text x="410" y="172" text-anchor="middle" style="font-size:14px">AgCl(s) settles out</text>
<text x="330" y="194" text-anchor="middle" class="t-gray" style="font-size:13px">Na⁺ and NO₃⁻ stay dissolved (spectator ions)</text>
</svg>`,
          alt: 'Three beakers. The first holds Ag+ and NO3- ions, the second Na+ and Cl- ions. After mixing, the third beaker has Na+ and NO3- still floating in solution and a pile of solid AgCl particles at the bottom.',
          caption: 'Mixing silver nitrate and sodium chloride solutions. $\\ce{Ag+}$ and $\\ce{Cl-}$ lock together into solid AgCl; the other ions do nothing.',
        },
        {
          type: 'math',
          tex: '\\ce{AgNO3(aq) + NaCl(aq) -> AgCl(s) + NaNO3(aq)}',
        },
        {
          type: 'p',
          text: 'To know which product (if any) is a solid, chemists use [[chem-solubility-rules|solubility rules]]. A basic set covers most cases:',
        },
        {
          type: 'table',
          headers: ['Usually soluble', 'Important exceptions'],
          rows: [
            ['Compounds of $\\ce{Li+}$, $\\ce{Na+}$, $\\ce{K+}$ (Group 1) and $\\ce{NH4+}$', 'none'],
            ['Nitrates $\\ce{NO3-}$ and acetates', 'none'],
            ['Chlorides, bromides, iodides', 'with $\\ce{Ag+}$, $\\ce{Pb^2+}$, $\\ce{Hg2^2+}$'],
            ['Sulfates $\\ce{SO4^2-}$', 'with $\\ce{Ba^2+}$, $\\ce{Pb^2+}$, $\\ce{Ca^2+}$, $\\ce{Sr^2+}$'],
          ],
          caption: 'Carbonates, phosphates and hydroxides are mostly **insoluble**, except with Group 1 ions and $\\ce{NH4+}$.',
        },
        {
          type: 'p',
          text: 'Writing every dissolved compound as separate ions shows what really happens. Ions that appear unchanged on both sides are [[chem-spectator-ion|spectator ions]]; cancel them and you get the [[chem-net-ionic-equation|net ionic equation]]:',
        },
        {
          type: 'derivation',
          title: 'From molecular to net ionic equation',
          steps: [
            { tex: '\\ce{AgNO3 + NaCl -> AgCl(s) + NaNO3}', why: 'The molecular equation (everything except AgCl is aqueous): AgCl is insoluble (chlorides are soluble except with $\\ce{Ag+}$, $\\ce{Pb^2+}$, $\\ce{Hg2^2+}$), so it is the precipitate.' },
            { tex: '\\begin{aligned} &\\ce{Ag+ + NO3- + Na+ + Cl-} \\\\ &\\longrightarrow \\ce{AgCl(s) + Na+ + NO3-} \\end{aligned}', why: 'The complete ionic equation: split every *aqueous* ionic compound into its ions (all the ions here are (aq); the labels are dropped to save space). The solid stays together.' },
            { tex: '\\begin{aligned} &\\ce{Ag+} + \\cancel{\\ce{NO3-}} + \\cancel{\\ce{Na+}} + \\ce{Cl-} \\\\ &\\longrightarrow \\ce{AgCl(s)} + \\cancel{\\ce{Na+}} + \\cancel{\\ce{NO3-}} \\end{aligned}', why: '$\\ce{Na+}$ and $\\ce{NO3-}$ are identical on both sides: spectators. Cancel them like equal terms on both sides of an algebraic equation.' },
            { tex: '\\ce{Ag+(aq) + Cl-(aq) -> AgCl(s)}', why: 'The net ionic equation: only the particles that actually change. Any soluble silver salt plus any soluble chloride gives this same reaction.' },
          ],
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Other ways to "leave" the solution',
          text: 'A double replacement also runs when a product is water or a gas. Acid plus base, $\\ce{HCl + NaOH -> NaCl + H2O}$, is a double replacement called neutralization (the acids and bases lesson covers it). If no product is a solid, water or a gas, all the ions just stay mixed: no reaction.',
        },
      ],
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'fill',
      prompt: 'Barium chloride and sodium sulfate solutions are mixed: $\\ce{BaCl2(aq) + Na2SO4(aq) -> BaSO4(s) + 2NaCl(aq)}$. Complete the net ionic equation and name the spectators.',
      template: 'Net ionic: $\\ce{Ba^2+(aq) + SO4^2-(aq) ->}$ ___. The spectator ions are $\\ce{Na+}$ and ___.',
      blanks: [{ answers: ['$\\ce{BaSO4(s)}$'] }, { answers: ['$\\ce{Cl-}$'] }],
      wordBank: ['$\\ce{BaSO4(s)}$', '$\\ce{NaCl(s)}$', '$\\ce{Cl-}$', '$\\ce{Ba^2+}$', '$\\ce{SO4^2-}$', '$\\ce{Na2SO4(s)}$'],
      explanation: 'Sulfates are soluble except with $\\ce{Ba^2+}$, $\\ce{Pb^2+}$, $\\ce{Ca^2+}$ and $\\ce{Sr^2+}$, so $\\ce{BaSO4}$ precipitates. $\\ce{NaCl}$ stays dissolved (sodium compounds are always soluble), so $\\ce{Na+}$ and $\\ce{Cl-}$ appear unchanged on both sides and cancel. Net: $\\ce{Ba^2+(aq) + SO4^2-(aq) -> BaSO4(s)}$. ($\\ce{BaSO4}$ is so insoluble that it is safe to swallow as the "barium meal" for X-ray imaging.)',
    },
    // ------------------------------------------------------------------ 16
    {
      kind: 'concept',
      title: 'Recognizing the type, and balancing as linear algebra',
      blocks: [
        {
          type: 'p',
          text: 'To classify a reaction, look at **what kinds of things** are on each side, not at the specific elements:',
        },
        {
          type: 'table',
          headers: ['You see…', 'It is…'],
          rows: [
            ['several reactants → one product', 'synthesis'],
            ['one reactant → several products', 'decomposition'],
            ['$\\ce{O2}$ as a reactant, oxides (often $\\ce{CO2 + H2O}$) as products', 'combustion'],
            ['element + compound → element + compound', 'single replacement (check the activity series)'],
            ['two ionic compounds → two ionic compounds', 'double replacement (check for a precipitate, water or gas)'],
          ],
        },
        {
          type: 'p',
          text: 'Balancing has a hidden mathematical structure you already know. Give each coefficient a variable. Each element gives one linear equation, "atoms on the left = atoms on the right", and every equation has 0 on one side. Balancing is solving a [[homogeneous-system]].',
        },
        {
          type: 'derivation',
          title: 'Propane, balanced with algebra',
          steps: [
            { tex: '\\text{C: } 3a = c', why: 'Each propane has 3 C; each $\\ce{CO2}$ has 1 C.' },
            { tex: '\\text{H: } 8a = 2d', why: 'Each propane has 8 H; each water has 2 H.' },
            { tex: '\\text{O: } 2b = 2c + d', why: 'Each $\\ce{O2}$ has 2 O; on the right, 2 per $\\ce{CO2}$ plus 1 per $\\ce{H2O}$.' },
            { tex: 'a = 1 \\implies c = 3,\\ d = 4,\\ b = \\tfrac{2(3) + 4}{2} = 5', why: 'Three equations, four unknowns: one free variable. Choose $a = 1$ and solve. Any multiple $(2, 10, 6, 8)$ also works, so we pick the smallest whole numbers.' },
          ],
          result: '$\\ce{C3H8 + 5O2 -> 3CO2 + 4H2O}$, the same answer the step-by-step method gave.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Balancing in code: a null space',
          text: 'Write the element counts as a matrix with one row per element and one column per substance (products negated). For propane, $A = \\begin{bmatrix} 3 & 0 & -1 & 0 \\\\ 8 & 0 & 0 & -2 \\\\ 0 & 2 & -2 & -1 \\end{bmatrix}$, and the coefficients are a vector $\\mathbf{x}$ with $A\\mathbf{x} = \\mathbf{0}$, so they span the [[null-space]] of $A$. Row-reducing gives the basis vector $(\\tfrac14, \\tfrac54, \\tfrac34, 1)$; scaling by 4 gives $(1, 5, 3, 4)$. Equation-balancing apps do exactly this, using exact rational arithmetic to avoid floating-point fractions. A one-dimensional null space means a unique reaction up to scaling; a bigger one means the "equation" actually mixes several independent reactions.',
        },
      ],
    },
    // ------------------------------------------------------------------ 17
    {
      kind: 'order',
      prompt: 'Put the steps for balancing $\\ce{Ca(OH)2 + H3PO4 -> Ca3(PO4)2 + H2O}$ in the order Example 2 above used.',
      lines: [
        'Give $\\ce{Ca3(PO4)2}$, the most complex formula, a coefficient of 1',
        'Balance Ca: put a 3 in front of $\\ce{Ca(OH)2}$',
        'Balance $\\ce{PO4}$ as a unit: put a 2 in front of $\\ce{H3PO4}$',
        'Balance H: put a 6 in front of $\\ce{H2O}$',
        'Check O: 14 on each side',
      ],
      distractors: ['Change $\\ce{H2O}$ to $\\ce{H6O}$ so the hydrogen matches'],
      explanation: 'Start from the most complex formula, balance the metal, treat phosphate as one block, leave H and O for last, and finish with a full check. The distractor changes a subscript, which would turn water into a substance that does not exist. Only coefficients may change.',
    },
  ],
  takeaways: [
    'Subscripts give the atoms in one particle and define the substance; coefficients count particles and are the only numbers you may change when balancing.',
    'A balanced equation has the same atoms of each element on both sides, because atoms are rearranged, never created or destroyed: that is conservation of mass.',
    'Balance the most complex formula first, keep polyatomic ions together, do H and O last, clear fractions by multiplying through, and always check.',
    'Hydrocarbons burn completely to $\\ce{CO2}$ and $\\ce{H2O}$; an odd O count means use $\\frac{n}{2}\\,\\ce{O2}$ and then double everything.',
    'Synthesis: many → one. Decomposition: one → many. Single replacement: a more active element displaces a less active one. Double replacement: ions swap, driven by a precipitate, water or gas. Combustion: reaction with $\\ce{O2}$.',
    'A net ionic equation drops the spectator ions and shows only what changes, e.g. $\\ce{Ag+ + Cl- -> AgCl(s)}$.',
  ],
  reading: [
    {
      title: 'OpenStax Chemistry 2e — Chapter 4: Stoichiometry of Chemical Reactions',
      url: 'https://openstax.org/books/chemistry-2e/pages/4-introduction',
      source: 'openstax',
      note: 'Sections 4.1 and 4.2 cover writing and balancing equations, ionic equations and the main reaction classes, with many practice problems.',
    },
    {
      title: 'PhET Interactive Simulations',
      url: 'https://phet.colorado.edu/',
      source: 'other',
      note: 'Search for the free "Balancing Chemical Equations" simulation, which shows the molecules on each side as you change coefficients.',
    },
    {
      title: 'Wikipedia — Reactivity series',
      url: 'https://en.wikipedia.org/wiki/Reactivity_series',
      source: 'wikipedia',
      note: 'A longer activity series with the reactions of each metal with water, acids and oxygen.',
    },
    {
      title: 'Khan Academy — Chemistry',
      url: 'https://www.khanacademy.org/science/chemistry',
      source: 'khan',
      note: 'The "Chemical reactions and stoichiometry" unit has short videos on balancing equations and on precipitation reactions.',
    },
  ],
};
