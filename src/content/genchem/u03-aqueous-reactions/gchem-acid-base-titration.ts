import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'gchem-acid-base-titration',
  title: 'Acid–Base Reactions and Titrations',
  summary: 'Net ionic equations for every kind of neutralization, gas-forming reactions, and the full titration toolkit: standardizing NaOH with KHP, back-titration and polyprotic acids.',
  minutes: 20,
  objectives: [
    'List the strong acids and strong bases and treat everything else as weak when writing equations',
    'Write net ionic equations for strong–strong, weak–strong and weak–weak neutralizations',
    'Write net ionic equations for gas-forming reactions of carbonates, bicarbonates, sulfides, sulfites and ammonium salts',
    'Standardize a sodium hydroxide solution against KHP and use it to analyze unknowns (concentration, mass percent, molar mass)',
    'Solve back-titration problems',
    'Apply titration stoichiometry to polyprotic acids, including the first and second equivalence points of phosphoric acid',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Acids and bases in one paragraph, and the short list of strong ones',
      blocks: [
        {
          type: 'p',
          text: 'Recall from Foundations: an Arrhenius [[acid]] makes $\\ce{H+}$ (really [[chem-hydronium|hydronium]], $\\ce{H3O+}$) in water and an Arrhenius [[base-chem|base]] makes $\\ce{OH-}$. The Brønsted–Lowry view is broader and is the one we use: an acid is a **proton donor**, a base is a **proton acceptor**, and every acid–base reaction is a proton handed from one to the other, producing a [[chem-conjugate-acid-base-pair|conjugate acid–base pair]] on each side. Ammonia has no $\\ce{OH}$ in its formula but is a base because it accepts a proton: $\\ce{NH3 + H2O <=> NH4+ + OH-}$.',
        },
        {
          type: 'p',
          text: 'For writing equations, the single most useful fact is which acids and bases are **strong** (completely ionized, so written as ions) and which are **weak** (mostly molecules, so written as formulas). The strong list is short; memorize it, and treat everything else as weak.',
        },
        {
          type: 'table',
          headers: ['Strong acids', 'Strong bases'],
          rows: [
            ['$\\ce{HCl}$, $\\ce{HBr}$, $\\ce{HI}$', '$\\ce{LiOH}$, $\\ce{NaOH}$, $\\ce{KOH}$, $\\ce{RbOH}$, $\\ce{CsOH}$ (Group 1 hydroxides)'],
            ['$\\ce{HNO3}$, $\\ce{HClO4}$, $\\ce{HClO3}$', '$\\ce{Ca(OH)2}$, $\\ce{Sr(OH)2}$, $\\ce{Ba(OH)2}$ (heavier Group 2 hydroxides)'],
            ['$\\ce{H2SO4}$ (first proton only)', '(not $\\ce{NH3}$ or $\\ce{Mg(OH)2}$: those are weak or insoluble)'],
          ],
          caption: 'Common weak acids: $\\ce{HF}$, $\\ce{HC2H3O2}$ (acetic), $\\ce{HCN}$, $\\ce{HNO2}$, $\\ce{H2CO3}$, $\\ce{H3PO4}$, $\\ce{H2S}$, $\\ce{HSO4-}$. Common weak bases: $\\ce{NH3}$ and amines such as $\\ce{CH3NH2}$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why HF is the odd one out',
          text: '$\\ce{HCl}$, $\\ce{HBr}$ and $\\ce{HI}$ are strong, but $\\ce{HF}$ is weak. The H–F bond is unusually strong (fluorine is tiny, so the overlap is excellent), and the small $\\ce{F-}$ ion clings to $\\ce{H3O+}$ through very strong hydrogen bonding. Both effects keep most HF molecules intact. Weak does not mean safe: HF penetrates skin and binds calcium in tissue, which makes it one of the most dangerous acids in any lab.',
        },
        {
          type: 'callout',
          variant: 'warning',
          text: '$\\ce{Ca(OH)2}$ is a strong base but only moderately soluble. What does dissolve is fully dissociated, so a saturated solution (limewater) is fully ionized; a slurry contains undissolved solid that you write as $\\ce{Ca(OH)2(s)}$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'mcq',
      multi: true,
      prompt: 'In a complete ionic equation, which of these dissolved species should be written as separate ions? Select all that apply.',
      options: [
        { text: '$\\ce{HNO3(aq)}$', correct: true, why: 'Nitric acid is on the strong-acid list: completely ionized to $\\ce{H+}$ and $\\ce{NO3-}$.' },
        { text: '$\\ce{HF(aq)}$', why: 'Hydrofluoric acid is weak; it is mostly un-ionized molecules, so it stays as $\\ce{HF(aq)}$.' },
        { text: '$\\ce{Ba(OH)2(aq)}$', correct: true, why: 'Barium hydroxide is a strong base: $\\ce{Ba^2+ + 2OH-}$.' },
        { text: '$\\ce{NH3(aq)}$', why: 'Ammonia is a weak base; only a tiny fraction reacts with water to form ions, so it is written as $\\ce{NH3(aq)}$.' },
        { text: '$\\ce{HC2H3O2(aq)}$', why: 'Acetic acid is weak (about 1% ionized), so it keeps its formula.' },
      ],
      explanation: 'Split only strong electrolytes: strong acids ($\\ce{HNO3}$), strong bases ($\\ce{Ba(OH)2}$) and soluble ionic compounds. Weak acids ($\\ce{HF}$, $\\ce{HC2H3O2}$) and weak bases ($\\ce{NH3}$) are written as molecules because that is what is mostly in the solution.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Neutralization: four flavors of net ionic equation',
      blocks: [
        {
          type: 'p',
          text: 'A [[neutralization]] produces water (or another weak species) and a salt. Which particles appear in the net ionic equation depends entirely on whether the acid and base are strong or weak, so there are four cases.',
        },
        {
          type: 'derivation',
          title: 'Strong acid + strong base: nitric acid + potassium hydroxide',
          steps: [
            { tex: '\\ce{HNO3(aq) + KOH(aq) -> KNO3(aq) + H2O(l)}', why: 'Molecular equation.' },
            { tex: '\\ce{H+ + NO3- + K+ + OH- -> K+ + NO3- + H2O(l)}', why: 'Both reactants are strong, and $\\ce{KNO3}$ is a soluble salt: split all three. Water is a liquid (and a very weak electrolyte), so it stays whole.' },
            { tex: '\\ce{H+(aq) + OH-(aq) -> H2O(l)}', why: '$\\ce{K+}$ and $\\ce{NO3-}$ are spectators. Written with hydronium: $\\ce{H3O+ + OH- -> 2H2O}$.' },
          ],
        },
        {
          type: 'derivation',
          title: 'Weak acid + strong base: hydrofluoric acid + potassium hydroxide',
          steps: [
            { tex: '\\ce{HF(aq) + KOH(aq) -> KF(aq) + H2O(l)}', why: 'Molecular equation.' },
            { tex: '\\ce{HF + K+ + OH- -> K+ + F- + H2O(l)}', why: '$\\ce{HF}$ is weak: keep it whole. $\\ce{KOH}$ and the soluble salt $\\ce{KF}$ are split.' },
            { tex: '\\ce{HF(aq) + OH-(aq) -> F-(aq) + H2O(l)}', why: 'Only $\\ce{K+}$ is a spectator. The proton moves directly from $\\ce{HF}$ to $\\ce{OH-}$.' },
          ],
        },
        {
          type: 'table',
          headers: ['Case', 'Example', 'Net ionic equation'],
          rows: [
            ['strong acid + strong base', '$\\ce{HCl + NaOH}$', '$\\ce{H+ + OH- -> H2O}$'],
            ['weak acid + strong base', '$\\ce{HC2H3O2 + NaOH}$', '$\\ce{HC2H3O2 + OH- -> C2H3O2- + H2O}$'],
            ['strong acid + weak base', '$\\ce{HCl + NH3}$', '$\\ce{H+ + NH3 -> NH4+}$'],
            ['weak acid + weak base', '$\\ce{HC2H3O2 + NH3}$', '$\\ce{HC2H3O2 + NH3 -> C2H3O2- + NH4+}$'],
            ['strong acid + insoluble base', '$\\ce{HCl + Mg(OH)2(s)}$', '$\\ce{2H+ + Mg(OH)2(s) -> Mg^2+ + 2H2O}$'],
          ],
          caption: 'Weak species and solids keep their formulas; the net ionic equation shows the proton moving from the acid to the base.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why every strong–strong neutralization releases the same heat',
          text: 'Whether you mix $\\ce{HCl}$ with $\\ce{NaOH}$, $\\ce{HNO3}$ with $\\ce{KOH}$ or $\\ce{HClO4}$ with $\\ce{LiOH}$, the net ionic equation is identical: $\\ce{H+ + OH- -> H2O}$. Everything else is a spectator. So all of them release the same heat per mole of water formed, about 56 kJ, which you will measure in the calorimetry lesson. Net ionic equations are not just tidier; they show what the chemistry actually is.',
        },
        {
          type: 'callout',
          variant: 'note',
          text: 'Reactions of weak acids with $\\ce{OH-}$ go essentially to completion because $\\ce{OH-}$ is a far stronger base than $\\ce{F-}$ or $\\ce{C2H3O2-}$, so the proton ends up on the hydroxide. That is why titration works for weak acids too. The equilibrium unit makes "how far" quantitative with $K_a$ and $K_b$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'error',
      prompt: 'A student writes the net ionic equation for the reaction of hydrocyanic acid, $\\ce{HCN}$, with sodium hydroxide. Tap the first line that is wrong.',
      lines: [
        'Molecular: $\\ce{HCN(aq) + NaOH(aq) -> NaCN(aq) + H2O(l)}$',
        'Complete ionic: $\\ce{H+ + CN- + Na+ + OH- -> Na+ + CN- + H2O(l)}$',
        'Cancel $\\ce{Na+}$ and $\\ce{CN-}$, which appear on both sides',
        'Net ionic: $\\ce{H+(aq) + OH-(aq) -> H2O(l)}$',
      ],
      errorLines: [2],
      explanation: 'Line 2 splits $\\ce{HCN}$, but hydrocyanic acid is a **weak** acid (it is not on the strong list), so it must stay as $\\ce{HCN(aq)}$. The correct complete ionic equation is $\\ce{HCN + Na+ + OH- -> Na+ + CN- + H2O}$, and only $\\ce{Na+}$ cancels. Net ionic: $\\ce{HCN(aq) + OH-(aq) -> CN-(aq) + H2O(l)}$. Writing $\\ce{H+ + OH- -> H2O}$ for every neutralization is the most common mistake on this topic.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Gas-forming reactions',
      blocks: [
        {
          type: 'p',
          text: 'Some acid–base reactions are driven by a product that **leaves the solution as a gas**. The pattern: an acid protonates an anion, and the resulting molecule is unstable or volatile. Carbonic acid, for example, falls apart into water and carbon dioxide: $\\ce{H2CO3(aq) -> H2O(l) + CO2(g)}$.',
        },
        {
          type: 'derivation',
          title: 'Limestone (calcium carbonate) dissolving in hydrochloric acid',
          steps: [
            { tex: '\\ce{CaCO3(s) + 2HCl(aq) -> CaCl2(aq) + H2O(l) + CO2(g)}', why: 'Molecular equation: the $\\ce{H2CO3}$ that would form is written directly as its decomposition products.' },
            { tex: '\\ce{CaCO3(s) + 2H+ + 2Cl- -> Ca^2+ + 2Cl- + H2O(l) + CO2(g)}', why: '$\\ce{CaCO3}$ is an insoluble solid: keep it whole. $\\ce{HCl}$ and $\\ce{CaCl2}$ are split.' },
            { tex: '\\ce{CaCO3(s) + 2H+(aq) -> Ca^2+(aq) + H2O(l) + CO2(g)}', why: 'Chloride is the only spectator. This is how acid rain etches marble and how geologists test a rock for carbonate (it fizzes in dilute acid).' },
          ],
        },
        {
          type: 'table',
          headers: ['Reacting species', 'Net ionic equation', 'Gas'],
          rows: [
            ['carbonate + acid', '$\\ce{CO3^2- + 2H+ -> H2O + CO2(g)}$', '$\\ce{CO2}$, odorless'],
            ['bicarbonate + acid', '$\\ce{HCO3- + H+ -> H2O + CO2(g)}$', '$\\ce{CO2}$'],
            ['bicarbonate + weak acid (baking soda + vinegar)', '$\\ce{HCO3- + HC2H3O2 -> C2H3O2- + H2O + CO2(g)}$', '$\\ce{CO2}$'],
            ['metal sulfide + acid', '$\\ce{FeS(s) + 2H+ -> Fe^2+ + H2S(g)}$', '$\\ce{H2S}$, rotten-egg smell, toxic'],
            ['sulfite + acid', '$\\ce{SO3^2- + 2H+ -> H2O + SO2(g)}$', '$\\ce{SO2}$, sharp and choking'],
            ['ammonium salt + strong base (warm)', '$\\ce{NH4+ + OH- -> NH3(g) + H2O}$', '$\\ce{NH3}$, pungent'],
          ],
          caption: 'The last row runs the other way: a base removes a proton from $\\ce{NH4+}$, and ammonia gas escapes. It is the classic lab test for ammonium ions.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Never mix sulfide waste with acid',
          text: 'Hydrogen sulfide is toxic at low concentrations, and at higher concentrations it deadens your sense of smell, so "the smell went away" is a danger sign, not a relief. Sewers, manure pits and some industrial sites accumulate it. The net ionic equation tells you why acid is the trigger: protons convert dissolved sulfide into the volatile molecule.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Spill response: why bicarbonate',
          text: 'Acid spills (including lead–acid battery electrolyte in motor pools and vehicle bays) are neutralized with sodium bicarbonate rather than sodium hydroxide. Bicarbonate is a weak base, so an excess cannot make the spill dangerously basic; the reaction is gentle; and the fizzing of $\\ce{CO2}$ acts as a built-in indicator: when adding more powder no longer fizzes, the acid is gone.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'numeric',
      prompt: 'A spill of 1.50 L of battery acid, 4.80 M $\\ce{H2SO4}$, is neutralized with sodium bicarbonate: $\\ce{H2SO4 + 2NaHCO3 -> Na2SO4 + 2H2O + 2CO2}$. What mass of $\\ce{NaHCO3}$ (84.01 g/mol) is needed, in **kilograms**? Three significant figures.',
      hint: 'Moles of $\\ce{H2SO4}$ = volume × molarity; each mole needs 2 mol of $\\ce{NaHCO3}$.',
      label: 'mass $\\ce{NaHCO3}$ $=$',
      unit: 'kg',
      answer: '1.50*4.80*2*84.01/1000',
      answerTex: '1.21\\ \\text{kg}',
      tolerance: 0.006,
      explanation: '$n(\\ce{H2SO4}) = 1.50\\ \\text{L} \\times 4.80\\ \\text{mol/L} = 7.20$ mol. Both protons react, so $n(\\ce{NaHCO3}) = 2 \\times 7.20 = 14.4$ mol, and $14.4\\ \\text{mol} \\times 84.01\\ \\text{g/mol} = 1210$ g $= 1.21$ kg. In practice responders add more than this and watch for the fizzing to stop. Forgetting the factor of 2 (because sulfuric acid is diprotic) gives 0.605 kg and leaves half the acid unneutralized.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'Titration and standardization with KHP',
      blocks: [
        {
          type: 'p',
          text: 'In a [[chem-titration|titration]] a solution of known concentration, the **titrant**, is added from a buret to a measured amount of the substance being analyzed, the **analyte**, until the reaction is exactly complete. That moment is the [[gchem-equivalence-point|equivalence point]]: moles of titrant added are exactly the stoichiometric amount. An indicator signals it with a color change; the point where you see the change is the [[gchem-end-point|end point]], and a good indicator makes the two agree to within a drop.',
        },
        {
          type: 'figure',
          svg: `<svg viewBox="0 0 460 372" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="331" width="200" height="10" rx="3" fill="currentColor" class="f-gray" fill-opacity="0.5"/><rect x="56" y="20" width="7" height="312" fill="currentColor" class="f-gray" fill-opacity="0.6"/><rect x="60" y="120" width="70" height="7" fill="currentColor" class="f-gray" fill-opacity="0.6"/><rect x="124" y="114" width="14" height="19" rx="2" fill="none" stroke="currentColor" stroke-width="1.5"/><rect x="123" y="62" width="16" height="168" fill="currentColor" class="f-blue" fill-opacity="0.22"/><path d="M123 18 L123 230 L128 246 L128 262 M139 18 L139 230 L134 246 L134 262" fill="none" stroke="currentColor" stroke-width="1.6"/><line x1="123" y1="62" x2="139" y2="62" stroke="currentColor" class="s-blue" stroke-width="2"/><line x1="131" y1="30" x2="139" y2="30" stroke="currentColor" stroke-width="0.9"/><line x1="135" y1="38" x2="139" y2="38" stroke="currentColor" stroke-width="0.9"/><line x1="135" y1="46" x2="139" y2="46" stroke="currentColor" stroke-width="0.9"/><line x1="135" y1="54" x2="139" y2="54" stroke="currentColor" stroke-width="0.9"/><line x1="135" y1="62" x2="139" y2="62" stroke="currentColor" stroke-width="0.9"/><line x1="131" y1="70" x2="139" y2="70" stroke="currentColor" stroke-width="0.9"/><line x1="135" y1="78" x2="139" y2="78" stroke="currentColor" stroke-width="0.9"/><line x1="135" y1="86" x2="139" y2="86" stroke="currentColor" stroke-width="0.9"/><line x1="135" y1="94" x2="139" y2="94" stroke="currentColor" stroke-width="0.9"/><line x1="135" y1="102" x2="139" y2="102" stroke="currentColor" stroke-width="0.9"/><line x1="131" y1="110" x2="139" y2="110" stroke="currentColor" stroke-width="0.9"/><line x1="135" y1="118" x2="139" y2="118" stroke="currentColor" stroke-width="0.9"/><line x1="135" y1="126" x2="139" y2="126" stroke="currentColor" stroke-width="0.9"/><line x1="135" y1="134" x2="139" y2="134" stroke="currentColor" stroke-width="0.9"/><line x1="135" y1="142" x2="139" y2="142" stroke="currentColor" stroke-width="0.9"/><line x1="131" y1="150" x2="139" y2="150" stroke="currentColor" stroke-width="0.9"/><line x1="135" y1="158" x2="139" y2="158" stroke="currentColor" stroke-width="0.9"/><line x1="135" y1="166" x2="139" y2="166" stroke="currentColor" stroke-width="0.9"/><line x1="135" y1="174" x2="139" y2="174" stroke="currentColor" stroke-width="0.9"/><line x1="135" y1="182" x2="139" y2="182" stroke="currentColor" stroke-width="0.9"/><line x1="131" y1="190" x2="139" y2="190" stroke="currentColor" stroke-width="0.9"/><line x1="135" y1="198" x2="139" y2="198" stroke="currentColor" stroke-width="0.9"/><line x1="135" y1="206" x2="139" y2="206" stroke="currentColor" stroke-width="0.9"/><line x1="135" y1="214" x2="139" y2="214" stroke="currentColor" stroke-width="0.9"/><line x1="135" y1="222" x2="139" y2="222" stroke="currentColor" stroke-width="0.9"/><rect x="115" y="237" width="32" height="6" rx="2" fill="currentColor" class="f-orange"/><path d="M131 270 q-4 7 0 10 q4 -3 0 -10 z" fill="currentColor" class="f-blue" fill-opacity="0.7"/><path d="M122 282 L122 296 L85 326 Q81 330 87 330 L175 330 Q181 330 177 326 L140 296 L140 282" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M100 314 L162 314 L177 326 Q181 330 175 330 L87 330 Q81 330 85 326 Z" fill="currentColor" class="f-purple" fill-opacity="0.3"/><line x1="141" y1="40" x2="200" y2="40" stroke="currentColor" class="s-gray" stroke-width="1"/><text x="206" y="45" text-anchor="start" font-size="14" class="">buret</text><text x="206" y="62" text-anchor="start" font-size="12.5" class="t-gray">reads to ±0.02 mL</text><line x1="141" y1="100" x2="200" y2="100" stroke="currentColor" class="s-gray" stroke-width="1"/><text x="206" y="105" text-anchor="start" font-size="14" class="t-blue">titrant: NaOH(aq)</text><text x="206" y="122" text-anchor="start" font-size="12.5" class="t-gray">known molarity (standardized)</text><line x1="147" y1="240" x2="200" y2="215" stroke="currentColor" class="s-gray" stroke-width="1"/><text x="206" y="220" text-anchor="start" font-size="14" class="t-orange">stopcock</text><text x="206" y="237" text-anchor="start" font-size="12.5" class="t-gray">controls the flow, drop by drop</text><line x1="161" y1="318" x2="200" y2="290" stroke="currentColor" class="s-gray" stroke-width="1"/><text x="206" y="295" text-anchor="start" font-size="14" class="t-purple">analyte: acid + indicator</text><text x="206" y="312" text-anchor="start" font-size="12.5" class="t-gray">known volume or mass</text><text x="230" y="364" text-anchor="middle" font-size="12.5" class="t-gray">swirl constantly; a white card underneath shows the first lasting color</text></svg>`,
          alt: 'A buret clamped to a ring stand, filled with sodium hydroxide titrant, with a stopcock at the bottom releasing a drop into an Erlenmeyer flask containing the acid analyte and an indicator.',
          caption: 'Read the buret before and after; the difference is the volume of titrant delivered. Burets are read to the nearest 0.01 mL, so titration volumes have four significant figures.',
          maxWidth: 440,
        },
        {
          type: 'p',
          text: 'There is a catch: you cannot make an accurate NaOH solution by weighing NaOH. The solid is **hygroscopic** (it absorbs water from the air while sitting on the balance), and its solutions absorb $\\ce{CO2}$: $\\ce{CO2 + 2OH- -> CO3^2- + H2O}$. So chemists make NaOH roughly, then **standardize** it by titrating a [[gchem-primary-standard|primary standard]]: a solid that is pure, stable, non-hygroscopic and has a high molar mass, so it can be weighed with tiny relative error. For bases the standard is potassium hydrogen phthalate, KHP, $\\ce{KHC8H4O4}$ (204.22 g/mol), a monoprotic acid.',
        },
        {
          type: 'derivation',
          title: 'Standardizing NaOH: 0.5106 g of KHP needs 24.65 mL',
          steps: [
            { tex: '\\ce{HC8H4O4-(aq) + OH-(aq) -> C8H4O4^2-(aq) + H2O(l)}', why: 'Net ionic equation ($\\ce{K+}$ and $\\ce{Na+}$ are spectators). One proton, one hydroxide: a 1 : 1 ratio.' },
            { tex: 'n(\\ce{KHP}) = \\frac{0.5106\\ \\cancel{\\text{g}}}{204.22\\ \\cancel{\\text{g}}/\\text{mol}} = 2.5002 \\times 10^{-3}\\ \\text{mol}', why: 'The known: the mass on the balance, converted to moles.' },
            { tex: 'n(\\ce{OH-}) = 2.5002 \\times 10^{-3}\\ \\text{mol}', why: 'At the equivalence point the moles of base delivered equal the moles of KHP (1 : 1).' },
            { tex: '[\\ce{NaOH}] = \\frac{2.5002 \\times 10^{-3}\\ \\text{mol}}{0.02465\\ \\text{L}} = 0.1014\\ \\text{M}', why: 'Divide by the buret volume in liters. Four significant figures, limited by both the mass and the volume.' },
          ],
          result: 'The NaOH is 0.1014 M. It is now a secondary standard: use it soon, and keep it capped against $\\ce{CO2}$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why a high molar mass helps',
          text: 'An analytical balance reads to $\\pm 0.0001$ g. Weighing 0.5106 g of KHP gives a relative error of about $0.0001 / 0.51 \\approx 0.02\\%$. To deliver the same number of moles of a light acid you would weigh far less, and the same absolute balance error would be a larger fraction of the mass. Heavy standards are precise standards.',
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'numeric',
      prompt: 'A 0.4084 g sample of KHP (204.22 g/mol) is titrated with a sodium hydroxide solution and reaches the phenolphthalein end point after 21.35 mL. What is the molarity of the NaOH? Four significant figures.',
      hint: 'Moles of KHP = mass ÷ molar mass; KHP reacts 1 : 1 with $\\ce{OH-}$; divide by the volume in liters.',
      label: '$[\\ce{NaOH}] =$',
      unit: 'M',
      answer: '0.4084/204.22/0.02135',
      answerTex: '0.09367\\ \\text{M}',
      tolerance: 0.00002,
      explanation: '$n(\\ce{KHP}) = 0.4084 / 204.22 = 1.9998 \\times 10^{-3}$ mol $= n(\\ce{OH-})$. Then $[\\ce{NaOH}] = 1.9998 \\times 10^{-3}\\ \\text{mol} / 0.02135\\ \\text{L} = 0.09367$ M. Note the conversion of 21.35 mL to 0.02135 L; dividing by 21.35 instead gives an answer 1000 times too small.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'concept',
      title: 'Putting the standard to work: concentration, mass percent, molar mass',
      blocks: [
        {
          type: 'p',
          text: 'Once the titrant concentration is known, every titration follows the same four moves: **(1)** write the balanced equation, **(2)** moles of titrant $= M \\times V$, **(3)** mole ratio to moles of analyte, **(4)** convert to whatever is asked: molarity, mass, mass percent, or molar mass.',
        },
        {
          type: 'derivation',
          title: 'Acetic acid in vinegar',
          steps: [
            { tex: '\\ce{HC2H3O2(aq) + OH-(aq) -> C2H3O2-(aq) + H2O(l)}', why: 'Weak acid + strong base, 1 : 1. A 5.00 mL sample of vinegar is titrated with the 0.1014 M NaOH; the end point comes at 41.20 mL.' },
            { tex: 'n(\\ce{OH-}) = 0.04120\\ \\text{L} \\times 0.1014\\ \\tfrac{\\text{mol}}{\\text{L}} = 4.178 \\times 10^{-3}\\ \\text{mol}', why: 'Moles of titrant delivered.' },
            { tex: '[\\ce{HC2H3O2}] = \\frac{4.178 \\times 10^{-3}\\ \\text{mol}}{0.00500\\ \\text{L}} = 0.836\\ \\text{M}', why: 'Same number of moles of acetic acid, in the 5.00 mL sample. (Three significant figures, limited by the 5.00 mL pipet volume.)' },
            { tex: 'm = 4.178 \\times 10^{-3}\\ \\text{mol} \\times 60.05\\ \\tfrac{\\text{g}}{\\text{mol}} = 0.2509\\ \\text{g}', why: 'Mass of acetic acid in the sample.' },
            { tex: '\\%\\ \\text{by mass} = \\frac{0.2509\\ \\text{g}}{5.00\\ \\text{mL} \\times 1.006\\ \\text{g/mL}} \\times 100\\% = 4.99\\%', why: 'Divide by the mass of the vinegar sample (volume times density). Labels say "5% acidity", and this sample agrees.' },
          ],
        },
        {
          type: 'p',
          text: 'Titration can also **identify** an acid. Weigh a pure unknown monoprotic acid, titrate it: the titration gives moles, the balance gives grams, and grams divided by moles is the molar mass. That number often narrows the unknown to one or two candidates.',
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'Exam titration problems mix units deliberately: grams of a solid, mL of titrant, molarity of the other. Write the moles of every given quantity first, then use the mole ratio. Polyprotic acids and $\\ce{Ba(OH)2}$-type bases (two $\\ce{OH-}$ per formula) are where the mole ratio stops being 1 : 1, and where most points are lost.',
        },
      ],
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'numeric',
      prompt: 'A 0.2500 g sample of a pure, solid, monoprotic acid requires 20.48 mL of 0.1000 M NaOH to reach the end point. What is the molar mass of the acid? Four significant figures.',
      hint: 'Moles of acid = moles of NaOH = $M \\times V$. Molar mass = grams ÷ moles.',
      label: 'molar mass $=$',
      unit: 'g/mol',
      answer: '0.2500/(0.02048*0.1000)',
      answerTex: '122.1\\ \\text{g/mol}',
      tolerance: 0.06,
      explanation: '$n(\\ce{NaOH}) = 0.02048\\ \\text{L} \\times 0.1000\\ \\text{mol/L} = 2.048 \\times 10^{-3}$ mol, which equals the moles of acid (monoprotic, 1 : 1). Molar mass $= 0.2500\\ \\text{g} / 2.048 \\times 10^{-3}\\ \\text{mol} = 122.1$ g/mol. Benzoic acid, $\\ce{C6H5COOH}$ (122.12 g/mol), a common food preservative, fits.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'Back-titration: measure the leftovers',
      blocks: [
        {
          type: 'p',
          text: 'Some analytes cannot be titrated directly. Calcium carbonate in an antacid tablet is insoluble and reacts slowly, and the $\\ce{CO2}$ it releases blurs the indicator\'s color change. The fix is a [[gchem-back-titration|back-titration]]: add a **known excess** of acid, let the reaction finish (warming drives off the $\\ce{CO2}$), then titrate the acid that is **left over** with standard base. The acid that reacted with the sample is the difference.',
        },
        {
          type: 'math',
          tex: 'n(\\text{reagent that reacted with analyte}) = n(\\text{reagent added}) - n(\\text{reagent left, from the back-titration})',
          caption: 'Two measured amounts, one subtraction.',
        },
        {
          type: 'derivation',
          title: 'CaCO₃ in an antacid tablet',
          steps: [
            { tex: 'n(\\ce{HCl})_{\\text{added}} = 0.05000\\ \\text{L} \\times 0.5000\\ \\tfrac{\\text{mol}}{\\text{L}} = 0.02500\\ \\text{mol}', why: 'The tablet is dissolved in 50.00 mL of 0.5000 M HCl, more than enough.' },
            { tex: 'n(\\ce{HCl})_{\\text{left}} = n(\\ce{NaOH}) = 0.01820\\ \\text{L} \\times 0.1014\\ \\tfrac{\\text{mol}}{\\text{L}} = 1.845 \\times 10^{-3}\\ \\text{mol}', why: 'The excess acid needs 18.20 mL of 0.1014 M NaOH. $\\ce{H+ + OH- -> H2O}$ is 1 : 1.' },
            { tex: 'n(\\ce{HCl})_{\\text{reacted}} = 0.02500 - 0.001845 = 0.02315\\ \\text{mol}', why: 'The rest of the acid was consumed by the carbonate.' },
            { tex: 'n(\\ce{CaCO3}) = 0.02315\\ \\text{mol HCl} \\times \\frac{1\\ \\text{mol}\\ \\ce{CaCO3}}{2\\ \\text{mol HCl}} = 0.01158\\ \\text{mol}', why: '$\\ce{CaCO3 + 2H+ -> Ca^2+ + H2O + CO2}$: two protons per carbonate.' },
            { tex: 'm(\\ce{CaCO3}) = 0.01158\\ \\text{mol} \\times 100.09\\ \\tfrac{\\text{g}}{\\text{mol}} = 1.159\\ \\text{g}', why: 'Molar mass of calcium carbonate. A typical "extra strength" tablet contains about 0.75 to 1.2 g.' },
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          text: 'The most common back-titration error is forgetting the subtraction and using the NaOH moles as if they measured the analyte. They measure what the analyte **did not** use. Another is skipping the 2 : 1 ratio at the end: carbonate takes two protons.',
        },
      ],
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'numeric',
      prompt: 'A milk-of-magnesia tablet containing $\\ce{Mg(OH)2}$ is dissolved in 40.00 mL of 0.2500 M HCl. The excess acid requires 12.60 mL of 0.1000 M NaOH. What mass of $\\ce{Mg(OH)2}$ (58.32 g/mol) was in the tablet? Give the answer in grams to four significant figures.',
      hint: 'HCl added − HCl left = HCl that reacted. Then $\\ce{Mg(OH)2 + 2H+ -> Mg^2+ + 2H2O}$.',
      label: 'mass $\\ce{Mg(OH)2}$ $=$',
      unit: 'g',
      answer: '(0.04000*0.2500 - 0.01260*0.1000)/2*58.32',
      answerTex: '0.2549\\ \\text{g}',
      tolerance: 0.0002,
      explanation: 'Added: $0.04000 \\times 0.2500 = 0.01000$ mol HCl. Left over: $0.01260 \\times 0.1000 = 0.001260$ mol. Reacted: $0.01000 - 0.001260 = 0.008740$ mol. Each $\\ce{Mg(OH)2}$ neutralizes two $\\ce{H+}$, so $n(\\ce{Mg(OH)2}) = 0.004370$ mol, and $0.004370 \\times 58.32 = 0.2549$ g. If you forget the subtraction you get 0.03674 g; if you forget the factor of 2 you get 0.5097 g.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'concept',
      title: 'Polyprotic acids: counting every proton',
      blocks: [
        {
          type: 'p',
          text: 'A polyprotic acid has more than one ionizable proton, and the mole ratio in a titration depends on **how many of them you remove**. Sulfuric acid is easy: its second proton ($\\ce{HSO4-}$, $K_{a2} = 1.0 \\times 10^{-2}$) is acidic enough that a strong base removes both protons together, giving one end point at a 2 : 1 ratio, $\\ce{H2SO4 + 2NaOH -> Na2SO4 + 2H2O}$.',
        },
        {
          type: 'p',
          text: 'Phosphoric acid is the classic stepwise case. Its three acid constants are very different, $K_{a1} = 7.5 \\times 10^{-3}$, $K_{a2} = 6.2 \\times 10^{-8}$, $K_{a3} = 4.2 \\times 10^{-13}$, so added hydroxide removes the protons **one at a time**: the second proton is not touched until essentially all $\\ce{H3PO4}$ has become $\\ce{H2PO4-}$.',
        },
        {
          type: 'math',
          tex: '\\begin{aligned} &\\text{to 1st equivalence:} && \\ce{H3PO4 + OH- -> H2PO4- + H2O} && 1\\ \\text{mol}\\ \\ce{OH-}\\ \\text{per mol acid} \\\\ &\\text{to 2nd equivalence:} && \\ce{H3PO4 + 2OH- -> HPO4^2- + 2H2O} && 2\\ \\text{mol}\\ \\ce{OH-}\\ \\text{per mol acid} \\end{aligned}',
          caption: 'The third proton ($K_{a3} \\approx 10^{-13}$, about as weak an acid as water itself) does not give a usable end point in aqueous titration.',
        },
        {
          type: 'graph',
          x: [0, 70],
          y: [0, 3.2],
          xStep: 10,
          yStep: 0.5,
          functions: [
            { expr: 'max(0, 25c - 0.1x)', label: '$\\ce{H3PO4}$ (mmol)', color: 'red' },
            { expr: 'max(0, min(0.1x, 50c - 0.1x))', label: '$\\ce{H2PO4-}$ (mmol)', color: 'blue' },
            { expr: 'max(0, min(0.1x - 25c, 25c))', label: '$\\ce{HPO4^2-}$ (mmol)', color: 'green' },
          ],
          vlines: [
            { x: '250c', label: '1st eq.', color: 'gray' },
            { x: '500c', label: '2nd eq.', color: 'gray' },
          ],
          sliders: [{ name: 'c', min: 0.04, max: 0.12, step: 0.01, value: 0.1, label: '$[\\ce{H3PO4}]$ (M), 25.00 mL sample' }],
          readouts: [
            { label: '$V_1$ (mL) $=$', expr: '250c', digits: 4 },
            { label: '$V_2$ (mL) $=$', expr: '500c', digits: 4 },
          ],
          caption: 'Stoichiometric picture: millimoles of each phosphorus species as 0.1000 M NaOH (horizontal axis, mL) is added to 25.00 mL of phosphoric acid, assuming each proton is removed completely before the next. The second equivalence volume is always exactly twice the first. (The pH curve with its two jumps is the titration-curves lesson.)',
        },
        {
          type: 'derivation',
          title: '25.00 mL of 0.1000 M H₃PO₄ titrated with 0.1000 M NaOH',
          steps: [
            { tex: 'n(\\ce{H3PO4}) = 0.02500\\ \\text{L} \\times 0.1000\\ \\tfrac{\\text{mol}}{\\text{L}} = 2.500 \\times 10^{-3}\\ \\text{mol}', why: 'Moles of acid in the flask.' },
            { tex: 'V_1 = \\frac{2.500 \\times 10^{-3}\\ \\text{mol}\\ \\ce{OH-}}{0.1000\\ \\text{mol/L}} = 0.02500\\ \\text{L} = 25.00\\ \\text{mL}', why: 'First equivalence: 1 mol $\\ce{OH-}$ per mol acid. The flask now holds $\\ce{H2PO4-}$.' },
            { tex: 'V_2 = \\frac{2 \\times 2.500 \\times 10^{-3}\\ \\text{mol}}{0.1000\\ \\text{mol/L}} = 50.00\\ \\text{mL}', why: 'Second equivalence: 2 mol $\\ce{OH-}$ per mol acid. The flask now holds $\\ce{HPO4^2-}$.' },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'numeric',
      prompt: 'A 20.00 mL sample of sulfuric acid requires 31.40 mL of 0.1250 M NaOH to reach the end point. What is the molarity of the $\\ce{H2SO4}$? Four significant figures.',
      hint: '$\\ce{H2SO4 + 2NaOH -> Na2SO4 + 2H2O}$: moles of acid are half the moles of base.',
      label: '$[\\ce{H2SO4}] =$',
      unit: 'M',
      answer: '0.03140*0.1250/2/0.02000',
      answerTex: '0.09813\\ \\text{M}',
      tolerance: 0.00002,
      explanation: '$n(\\ce{NaOH}) = 0.03140 \\times 0.1250 = 3.925 \\times 10^{-3}$ mol. Both protons of sulfuric acid react, so $n(\\ce{H2SO4}) = 3.925 \\times 10^{-3} / 2 = 1.9625 \\times 10^{-3}$ mol, and $[\\ce{H2SO4}] = 1.9625 \\times 10^{-3} / 0.02000 = 0.09813$ M (0.098125 before rounding). Using $M_1V_1 = M_2V_2$ blindly gives 0.1963 M, twice too large, because that shortcut assumes a 1 : 1 ratio.',
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'fill',
      prompt: 'Complete the statement about titrating phosphoric acid with NaOH.',
      template: 'A sample containing 0.0100 mol $\\ce{H3PO4}$ needs ___ mol NaOH to reach the **second** equivalence point, where the main phosphorus species in the flask is ___.',
      blanks: [{ answers: ['0.0200'] }, { answers: ['$\\ce{HPO4^2-}$'] }],
      wordBank: ['0.0100', '0.0200', '0.0300', '$\\ce{H2PO4-}$', '$\\ce{HPO4^2-}$', '$\\ce{PO4^3-}$'],
      explanation: 'Each equivalence point removes one more proton per molecule. After 1 mol $\\ce{OH-}$ per mol acid (0.0100 mol) everything is $\\ce{H2PO4-}$; after 2 mol per mol (0.0200 mol) everything is $\\ce{HPO4^2-}$. Reaching $\\ce{PO4^3-}$ would take 0.0300 mol, but that third step is too weak to give an end point in water.',
    },
    // ------------------------------------------------------------------ 16
    {
      kind: 'truefalse',
      prompt: 'At the equivalence point of any acid–base titration, the solution is neutral (pH 7).',
      answer: false,
      explanation: 'The equivalence point is defined by **stoichiometry** (moles of base = moles of acid × the mole ratio), not by pH. When acetic acid is titrated with NaOH, the flask at equivalence contains sodium acetate, and acetate is a weak base, so the pH is above 7 (about 8.7 for 0.1 M solutions). A strong acid titrated with a weak base gives an acidic equivalence point. Only strong–strong titrations land at pH 7. Choosing an indicator whose color changes near the actual equivalence pH is the subject of the titration-curves lesson.',
    },
  ],
  takeaways: [
    'Strong acids: $\\ce{HCl}$, $\\ce{HBr}$, $\\ce{HI}$, $\\ce{HNO3}$, $\\ce{HClO4}$, $\\ce{HClO3}$, $\\ce{H2SO4}$ (first H). Strong bases: Group 1 hydroxides and $\\ce{Ca}$, $\\ce{Sr}$, $\\ce{Ba}$ hydroxides. Everything else is weak and keeps its formula in ionic equations.',
    'Net ionic equations: strong–strong is always $\\ce{H+ + OH- -> H2O}$; with a weak acid the molecule itself reacts, e.g. $\\ce{HF + OH- -> F- + H2O}$.',
    'Gas-forming reactions: carbonates and bicarbonates give $\\ce{CO2}$, sulfides give toxic $\\ce{H2S}$, sulfites give $\\ce{SO2}$, ammonium + strong base gives $\\ce{NH3}$.',
    'NaOH must be standardized against a primary standard such as KHP (1 : 1); then titrant moles $= M \\times V$ → mole ratio → analyte.',
    'Back-titration: moles that reacted = moles of reagent added − moles left over (found by titration).',
    'Polyprotic acids: $\\ce{H2SO4}$ uses 2 $\\ce{OH-}$; $\\ce{H3PO4}$ needs 1 $\\ce{OH-}$ to its first and 2 to its second equivalence point. The equivalence point is a stoichiometric point, not necessarily pH 7.',
  ],
  reading: [
    {
      title: 'OpenStax Chemistry 2e — Chapter 4: Stoichiometry of Chemical Reactions',
      url: 'https://openstax.org/books/chemistry-2e/pages/4-introduction',
      source: 'openstax',
      note: 'Section 4.2 classifies acid–base reactions and section 4.5 works through titration and quantitative analysis problems like the ones here.',
    },
    {
      title: 'Wikipedia — Potassium hydrogen phthalate',
      url: 'https://en.wikipedia.org/wiki/Potassium_hydrogen_phthalate',
      source: 'wikipedia',
      note: 'Why KHP makes an excellent primary standard: purity, stability and a high molar mass.',
    },
    {
      title: 'Wikipedia — Back titration',
      url: 'https://en.wikipedia.org/wiki/Back_titration',
      source: 'wikipedia',
      note: 'When and why analysts measure the leftover reagent instead of the analyte, with examples.',
    },
    {
      title: 'PhET Interactive Simulations',
      url: 'https://phet.colorado.edu/',
      source: 'other',
      note: 'The "Acid-Base Solutions" simulation contrasts strong and weak acids at the particle level.',
    },
  ],
};
